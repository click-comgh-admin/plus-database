<?php
	use Encryptor\Encryptor;
	
	$user_id = $_COOKIE['pdb-client-user'];
	$encryptor = new Encryptor("clients", md5("clients"));
	$user_id = $encryptor->decrypt($user_id);

	$user_info = $ccApi->user_info($type = "client", $account_id = null, $all="one_user", $id=$user_id, function ($info)
	{
		return @$info[0];
	});
	// print_r($user_info);

	if (isset($_COOKIE['pdb-branch-page']) && !empty($_COOKIE['pdb-branch-page'])) {
		// print_r($_COOKIE['pdb-branch-page']);
		$pdb_branch_page = json_decode($_COOKIE['pdb-branch-page'], 1);
		$account_id = $pdb_branch_page['branch_id'];
    } else {
		$account_id = $user_info['pdcu_account_id'];
	}

	$all_clients = $ccApi->user_info($type = "client", $account_id, $all=true, $id=1, function ($info)
	{
		return $info;
	});
	// print_r($all_clients);

	$account_info = $ccApi->user_info($type = "client", $account_id, $all="one_client", $id=1, function ($info)
	{
		return @$info;
	});
	$_account_name = json_decode($account_info['pdc_name'], 1);
	$get_string = "client-membership/get_district_name?did=".$_account_name['district_id'];
	$account_name = is_array($_account_name) ? $ccApi->fetch_from($get_string=$get_string, function ($info)
	{
		return isset($info[0]['District']) ? $info[0]['District']: [];
	}, $debug=false) : $account_info['pdc_name'];
	$account_info['pdc_name'] = $account_name;
	define('AccountInfoId', (int)$account_info['pdc_id']);
	define('AccountInfoUserId', $user_id);
	define('AccountInfoType', (int)$account_info['pdc_account_type']);
	define('AccountInfoCategory', (int)$account_info['pdc_account_category']);
	
	// print_r($account_info);
	
	if (isset($_COOKIE['pdb-branch-page']) && !empty($_COOKIE['pdb-branch-page'])) {
		$get_string = "page-access-levels/client_level_alt?user_id=".$user_info['pdcu_id'];
    } else {
		$get_string = "page-access-levels/client_level?client_id=".$account_id."&user_id=".$user_info['pdcu_id'];
	}
    $my_access_levels = $ccApi->fetch_from($get_string, function($pages)
    {
		$access_levels = [];
		foreach ($pages as $key => $page) {
			if (!in_array($page['pdpcl_page_id'], $access_levels)) {
				array_push($access_levels, $page['pdpcl_page_id']);
			}
		}
        return $access_levels;
	}, $debug=false);	
	
	$get_string = "page-access-levels/clients";
	$appPages = $ccApi->fetch_from($get_string, function($pages)
	{
		return $pages;
	}, $debug=false);
	define('MyAccessLevels', $my_access_levels);
	define('AppPages', $appPages);
	define('MyAppAccess', (count(AppPages) === count(MyAccessLevels))? ([
		"unlimited"=>true, "access"=>"unlimited" ]): ([
		"unlimited"=>false, "access"=>"limited" ])
	);

	$get_string = "client-membership/branch/is_branch?client_id=$account_id";
	$is_branch = $ccApi->fetch_from($get_string=$get_string, function ($is_branch) use ($account_id, $ccApi)
	{
		$_is_branch = isset($is_branch[0])? true: false;

		$get_string = "client-membership/branch/branch?client_id=$account_id";
		$branch = $ccApi->fetch_from($get_string=$get_string, function ($branch)
		{
			$branch_account = isset($branch[0])? true: false;
			return [
				"branch_account"=>$branch_account,
				"account"=>isset($branch[0])? $branch[0]: [],
			];
		}, $debug=false);
		return [
			"is_branch"=>$_is_branch,
			"branch_account"=>isset($is_branch[0]['pdcbl_client'])? $is_branch[0]['pdcbl_client']: $account_id,
			"branch"=>$branch,
		];
	}, $debug=false);

	$_account_id = isset($is_branch['branch']['account']['pdcb_client'])? $is_branch['branch']['account']['pdcb_client']: $is_branch['branch_account'];
	// define('_AccountInfoId', $_account_id);


	$_account_id = (int)$account_info['pdc_id']; //Added because above was muted
	define('_AccountInfoId', $_account_id); //Changed because above was muted

	use Subscriber\Subscriber;

	$account_status = $ccApi->client_status($all="one", $id=$_account_id, function ($acc_info) use ($account_info, $_account_id, $ccApi)
		{
		$info = @$acc_info[0];
		// print_r($info);

		$s = new Subscriber($info, $account_info, $ccApi);
		$s->get();
		$expireDateStr = strtotime($s->expireDate);
		// $expireDateStr = strtotime(date("Y-m-d"));
		$today = date("Y-m-d");
		$todayStr = strtotime($today);

		$dateStrDiff = ($expireDateStr - $todayStr);

		if($dateStrDiff <= 0) {
			$is_active = false;
		} else {
			$is_active = true;
		}

		$get_string = "credit/balance?account_id=$_account_id";
		$balance = $ccApi->communications($type="clients", $get_string, function($balance)
		{
			return $balance;
		}, $debug = false);
		
		return [
			"expires_in" => $s->TimeAgo->get(),
			"is_active" => $is_active,
			"subscription" => $acc_info,
			"credit_balance" => $balance,
			"upgrade" => [
				"month_diffs" => $s->MonthDiff,
				"duration" => isset($acc_info[0]['pdcp_duration'])? $acc_info[0]['pdcp_duration']: 0,
			],
		];
		
	});
	// print_r($account_status);
