<form class="container" role="form" action="<?= $page_url . "?" . $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <input type="hidden" name="group" value="view" />
        <input type="hidden" name="selected_date" value="<?= $selected_date; ?>" />
        <div class="col-lg-12">
            <?php 
				$tittle_placeholder = "Select Group";
				$id_name = "group_id";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_group = @(isset($_GET[$id_name])) ? $_GET[$id_name] : "all";
                $set_group = (isset($_GET[$id_name])) ? $_GET[$id_name] : $set_group;
                $groups = $ccApi->groups($all=true, $account_id, $id=1, function($groups) use($set_group) {
                    $at = '';
                    foreach ($groups as $key => $group) {
                        $group_selected = @((int)$set_group == $group['pdmg_id']) ? "selected": "";
                        $at .= '<option value="'.$group['pdmg_id'].'" '.$group_selected.'>'.$group['pdmg_group'].'</option>';
                    }
                    return @$at;
                });
                $input_value = '
                    <option value="all">All</option>
                    '.$groups.'
                ';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                     [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
		<div class="col-lg-6">
			<?php 
				$tittle_placeholder = "Select Gender";
				$id_name = "gender";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
			<?php
                $_input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : "all";
                $_input_value = (isset($_GET[$id_name])) ? $_GET[$id_name] : $_input_value;

				$input_value = '
					<option value="all" '.(((int)$_input_value === 0) ? "selected" : "").'>All</option>
					<option value=1 '.(((int)$_input_value === 1) ? "selected" : "").'>Male</option>
					<option value=2 '.(((int)$_input_value === 2) ? "selected" : "").'>Female</option>
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6">
            <?php
                $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Staff": "Select Member";
                $id_name = "member";

                $groupQuery = ($set_group === "all")? "": "&group_id=".$set_group;
                $genderQuery = ($_input_value === "all")? "": "&gender=".$_input_value;
                $get_string = "membership-filter/groups?currentpage=1&rowsperpage=100000&client_id=".AccountInfoId.$groupQuery.$genderQuery;
                
                $client_members = $ccApi->fetch_from($get_string = $get_string, function ($members) {
                    return $members;
                }, $debug = false);

                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : "all";
                $input_value = (isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;
                $selectedMember = $encryptor->decrypt($input_value);

                $_members = '';
                foreach ($client_members as $key => $member) {
                    if (isset($member['pdm_id'])) {
                        $get_string = "identity?client_id=$account_id&member_id=".$member['pdm_id'];
                        $member_id = $ccApi->membership($get_string, function ($member_ids) {
                            return isset($member_ids[0])? $member_ids[0]: [];
                        }, $debug = false);
                        $member_id = isset($member_id['pdm_identity']) ? ">> ID: ".$member_id['pdm_identity']."": "";
                        $member_selected = @((int)$member['pdm_id'] === (int)$selectedMember) ? "selected": "";

                        $Uid = $encryptor->encrypt($member['pdm_id']);
                        $_members .= "<option value='".$Uid."' ".$member_selected.">".$member['pdm_firstname']." ".$member['pdm_surname']." ".$member_id."</option>";
                    }
                }
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = '
                    <option value="all">All Members</option>
                    '.@$_members.'
                ';
                $rowsperpage = 10000;
                $get_url = API_BASE_URL."/membership-filter/groups?currentpage=1&rowsperpage=$rowsperpage&client_id=" . AccountInfoId;
                $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" filterForms-ids="group_id,gender"
                    filterForms-url="'.$get_url.'" filterForms-input_title="All" filterForms-id_getter="pdm_id"
                    filterForms-name_getter="pdm_firstname" filterForms-name_getter_1="pdm_surname"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    [ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
        </div>
        <div class="col-lg-6 text-center">
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light btn-block text-white font-weight-bold m-1">Filter</button>
        </div>
    </div>
</form>