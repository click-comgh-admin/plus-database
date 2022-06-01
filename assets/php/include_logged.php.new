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

	$account_id = $user_info['pdcu_account_id'];

	$all_clients = $ccApi->user_info($type = "client", $account_id, $all=true, $id=1, function ($info)
	{
		return $info;
	});
	// print_r($all_clients);

	$account_info = $ccApi->user_info($type = "client", $account_id, $all="one_client", $id=1, function ($info)
	{
		return @$info;
	});
	// print_r($account_info);

	$account_status = $ccApi->client_status($all="one", $id=$account_id, function ($acc_info) use ($account_info, $account_id, $ccApi)
	{
		$info = @$acc_info[0];
		// print_r($info);

		function YearDiff($year)
		{
			$curYear = date("Y");
			return (int)$year - (int)$curYear;
		}

		function MonthDiff($month)
		{
			$curMonth = date("m");
			return (int)$month - (int)$curMonth;
		}

		function DayDiff($day)
		{
			$curDay = date("d");
			return (int)$day - (int)$curDay;
		}

		$ai_date = $account_info['pdc_subscription_date'];
		$ai_expireYear = (int)date("Y", strtotime($ai_date)) + (int)$account_info['pdc_subscription_duration'];
		$ai_expireMonth = (int)date("m", strtotime($ai_date));
		$ai_expireDay = (int)date("d", strtotime($ai_date));

		$expireDate = date("Y-m-d", strtotime("$ai_expireYear-$ai_expireMonth-$ai_expireDay"));

		$TimeAgo = new TimeAgo($expireDate, '');

		if((YearDiff($ai_expireYear) < 1) && (MonthDiff($ai_expireMonth) < 1) && (DayDiff($ai_expireDay) < 1)) {
			$i_date = $info['pdcp_pay_date'];
			$i_expireYear = (int)date("Y", strtotime($i_date)) + (int)$info['pdcp_duration'];
			$i_expireMonth = (int)date("m", strtotime($i_date));
			$i_expireDay = (int)date("d", strtotime($i_date));

			$expireDate = date("Y-m-d", strtotime("$i_expireYear-$i_expireMonth-$i_expireDay"));

			$TimeAgo = new TimeAgo($expireDate, '');

			if((YearDiff($i_expireYear) < 1) && (MonthDiff($i_expireMonth) < 1) && (DayDiff($i_expireDay) < 1)) {
				$is_active = false;
			} else {
				$is_active = true;
			}
		} else {
			$is_active = true;
		}

		$get_string = "credit/balance?account_id=$account_id";
		$balance = $ccApi->communications($type="clients", $get_string, function($balance)
		{
			return $balance;
		}, $debug = false);

		return [
			"expires_in" => $TimeAgo->get(),
			"is_active" => $is_active,
			"subscription" => $acc_info,
			"credit_balance" => $balance
		];
		
	});
	// print_r($account_status);
