<?php
    namespace AssignMeetingGroup;

    use ClickComApi;

    class AssignMeetingGroup
    {
        public $data = [];
        public function __construct() {}

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-warning p-0 mb-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        private function getGeneralGroups(ClickComApi $ccApi)
        {
            $_getGeneralGroups = $ccApi->groups($all=true, AccountInfoId, $id=1, function($groups) {
                return $groups;
            }, $debug = false);
            // print_r(['$_getGeneralGroups' => $_getGeneralGroups]);

            $getGeneralGroups = [];
            foreach ($_getGeneralGroups as $group_key => $group) {
                // print_r(['$group' => $group]);
                $g = [
                    "id" => $group['pdmg_id'],
                    "name" => $group['pdmg_group'],
                ];

                if (!in_array($g, $getGeneralGroups)) {
                    array_push($getGeneralGroups, $g);
                }
            }

            return $getGeneralGroups;
        }

        private function getGeneralSubGroups(ClickComApi $ccApi)
        {
            $account_id = AccountInfoId;
            $getGeneralSubGroups = $ccApi->groups($all=true, AccountInfoId, $id=1, function($groups) use($ccApi, $account_id) {
                $subgroupList = [];
                foreach ($groups as $group_key => $group) {
                    // print_r(['$group' => $group]);
                    $subgroups = $ccApi->subgroups($all=true, $account_id, $group_id = $group['pdmg_id'], $id=1,
                    function($subgroups) {
                        return $subgroups;
                    });
                    foreach ($subgroups as $subgroup_key => $subgroup) {
                        // echo "<pre>"; print_r(['$subgroup' => $subgroup]); echo "</pre>";
                        $name = $group['pdmg_group'] . " => " . $subgroup['pdmg_subgroup'];
                        $sg = [
                            "id" => $subgroup['pdmg_id'],
                            "name" => $name,
                        ];

                        if (!in_array($sg, $subgroupList)) {
                            array_push($subgroupList, $sg);
                        }
                    }
                }
                return  $subgroupList;
            }, $debug = false);
            // print_r(['$getGeneralSubGroups' => $getGeneralSubGroups]);

            return $getGeneralSubGroups;
        }

        public function main_content($tf, $ccApi)
        { ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Assign Meeting Group."); ?>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Official": "Select Member";
                            $id_name = "system_members";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                            ';
                            $input_attributes = 'name="'.$id_name.'[]" multiple id="'.$id_name.'" search_member_byname_for_list="'.$id_name.'" account_id="'.AccountInfoId.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Select System Group";
                            $id_name = "system_group_ids";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $groups = $this->getGeneralGroups($ccApi);
                            // print_r(['$groups' => $groups]);

                            $agent_groups = '';
                            foreach ($groups as $key => $group) {
                                $group_id = (int)$group['id'];
                
                                $agent_groups .= '<option value="'.$group_id.'" >
                                    '.$group['name'].'
                                </option>';
                            }
                                    
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$agent_groups.'
                            ';
                            $input_attributes = 'name="'.$id_name.'[]" multiple id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Select System Sub-Group";
                            $id_name = "system_subgroup_ids";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $subGroups = $this->getGeneralSubGroups($ccApi);
                            // print_r(['$groups' => $groups]);

                            $agent_subGroups = '';
                            foreach ($subGroups as $key => $subGroup) {
                                $subGroup_id = (int)$subGroup['id'];
                
                                $agent_subGroups .= '<option value="'.$subGroup_id.'" >
                                    '.$subGroup['name'].'
                                </option>';
                            }
                                    
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$agent_subGroups.'
                            ';
                            $input_attributes = 'name="'.$id_name.'[]" multiple id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-menu icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div>
                    <hr class="bg-warning container shadow shadow-sm my-1">
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Group";
                            $id_name = "meeting_group_id";
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
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Sub-Group";
                            $id_name = "meeting_subgroup_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                            $subgroups = $ccApi->fetch_from($get_string=$get_string, function($groups) use($ccApi) {
                                $at = '';
                                $groups = isset($groups[0])? $groups: [];

                                foreach ($groups as $group_key => $group) {
                                    $group_id = $group['pdmg_id'];
                                    $group_name = $group['pdmg_group'];
                                    $get_string = "attendance/members/all_subgroups?group_id=$group_id&client_id=".AccountInfoId;
                                    $at .= $ccApi->fetch_from($get_string=$get_string, function($subgroups) use($group_name) {
                                        $subgroups = isset($subgroups[0])? $subgroups: [];
                                        $sg = '';
                                        foreach ($subgroups as $key => $subgroup) {
                                            $sg .= '<option value="'.$subgroup['pdmg_id'].'">'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
                                        }
                                        return @$sg;
                                    }, $debug = false);
                                }
                                return @$at;
                            }, $debug = false);

                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
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
                    <div class="col-lg-12 col-md-12"></div>
                </div>
            </div>
        <?php }
    }
?>