<?php
    if (isset($_POST) && !empty($_POST) && isset($_POST['create'])) {
        define("POST_URL", API_BASE_URL."attendance/clients/members/subgroup/add");
        require_once 'subgroup-create_form - processing.php';
    }
?>
<form role="form" action="<?= Current_BaseUrl; ?>attendance-subgroup?<?= $_SERVER['QUERY_STRING']; ?>" method="POST">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
			<?php 
				$tittle_placeholder = "Select Group";
				$id_name = "group_id";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
			<?php
                $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                $groupList = $ccApi->fetch_from($get_string=$get_string, function($groups) {
                    $groups = isset($groups[0])? $groups: [];
                    $at = '';
					foreach ($groups as $key => $group) {
						$at .= '<option value="'.$group['pdmg_id'].'">'.$group['pdmg_group'].'</option>';
					}
					return @$at;
                }, $debug = false);
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$groupList.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
		</div>
        <div class="col-lg-12 col-md-12">
            <?php
				$tittle_placeholder = "Create New Sub-Group";
				$id_name = "subgroup";
			?>
			<h6></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-share icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8">
            <input type="hidden" name="create" />
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-6 col-md-8">
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Add</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>
