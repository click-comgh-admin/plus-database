<form class="container" role="form" action="<?= Current_BaseUrl.$page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-6">
            <input type="hidden" name="subgroup" />
            <?php 
				$tittle_placeholder = "Select Gender";
				$id_name = "gender";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $gender_1_selected = @(isset($_GET['gender']) && @(int)$_GET['gender'] == 1) ? "selected": "";
                $gender_2_selected = @(isset($_GET['gender']) && @(int)$_GET['gender'] == 2) ? "selected": "";
				$input_value = '
					<option value="">All</option>
					<option value=1 '.$gender_1_selected.'>Male</option>
					<option value=2 '.$gender_2_selected.'>Female</option>
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
				$tittle_placeholder = "Select subgroup";
				$id_name = "subgroup_id";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $set_subgroup = @(isset($_GET[$id_name])) ? $_GET[$id_name]: "";
                $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                $subgroups = $ccApi->fetch_from($get_string=$get_string, function($groups) use($ccApi, $set_subgroup) {
                    $at = '';
                    $groups = isset($groups[0])? $groups: [];
            
                    foreach ($groups as $group_key => $group) {
                        $group_id = $group['pdmg_id'];
                        $group_name = $group['pdmg_group'];

                        $get_string = "attendance/members/all_subgroups?group_id=$group_id&client_id=".AccountInfoId;
                        $at .= $ccApi->fetch_from($get_string=$get_string, function($subgroups) use($group_name, $set_subgroup) {
                            $sg = '';
                            $subgroups = isset($subgroups[0])? $subgroups: [];
                            foreach ($subgroups as $key => $subgroup) {
                                $subgroup_selected = @((int)$set_subgroup == $subgroup['pdmg_id']) ? "selected": "";
                                $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$subgroup_selected.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
                            }
                            return @$sg;
                        }, $debug = false);
                    }
                    return @$at;
                }, $debug = false);
                
                $input_value = '
                    <option value="all">All</option>
                    '.$subgroups.'
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
        <div class="col-lg-12 col-md-12 text-center mb-2">
            <a href="<?= Current_BaseUrl.$page_reset; ?>"
                class="btn btn-sm bg-sunny-morning text-light text-white font-weight-bold">Reset</a>
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light text-white font-weight-bold">Filter</button>
        </div>
    </div>
</form>