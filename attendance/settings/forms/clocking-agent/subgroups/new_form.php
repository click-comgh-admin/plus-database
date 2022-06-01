<?php
    namespace ClockingAgentAssignSubGroup;

    use ClickComApi;
    use TemplateFile\TemplateFile;

    class ClockingAgentAssignSubGroup
    {
        public $data = [];
        public $user_id;
        public $encryptor;
        public $assigned_group = [];
        private $meetingSubGroups;

        public function __construct(bool $meetingSubGroups = false) {
            $this->meetingSubGroups = $meetingSubGroups;
        }

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-warning p-0 my-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

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

        private function getMeetingSubGroups(ClickComApi $ccApi)
        {
            $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
            $getMeetingSubGroups = $ccApi->fetch_from($get_string=$get_string, function($groups) use($ccApi) {
                $subgroupList = [];
                $groups = isset($groups[0])? $groups: [];

                foreach ($groups as $group_key => $group) {
                    $group_id = $group['pdmg_id'];
                    $get_string = "attendance/members/all_subgroups?group_id=$group_id&client_id=".AccountInfoId;
                    $subgroups = $ccApi->fetch_from($get_string=$get_string, function($subgroups) {
                        return isset($subgroups[0])? $subgroups: [];
                    }, $debug = false);
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
            // print_r(['$getMeetingSubGroups' => $getMeetingSubGroups]);

            return $getMeetingSubGroups;
        }

        private function getSubGroups(ClickComApi $ccApi)
        {
            if ($this->meetingSubGroups === true) {
                return $this->getMeetingSubGroups($ccApi);
            } else {
                return $this->getGeneralSubGroups($ccApi);
            }
        }

        public function main_content(TemplateFile $tf, ClickComApi $ccApi)
        { ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Select Sub-Group to Assign Agent to."); ?>
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $tittle_placeholder = "Select Sub-Group to Assign Agent to";
                            $id_name = "subgroup_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $subGroups = $this->getSubGroups($ccApi);
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
                </div>
            </div>
        <?php }
    }
?>