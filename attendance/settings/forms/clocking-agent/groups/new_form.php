<?php
    namespace ClockingAgentAssignGroup;

    use ClickComApi;
    use TemplateFile\TemplateFile;

    class ClockingAgentAssignGroup
    {
        public $data = [];
        public $user_id;
        public $encryptor;
        public $assigned_group = [];
        private $meetingGroups;

        public function __construct(bool $meetingGroups = false) {
            $this->meetingGroups = $meetingGroups;
        }

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-warning p-0 my-3 shadow shadow-sm card-shadow-warning border border-white">
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

        private function getMeetingGroups(ClickComApi $ccApi)
        {
            $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
            $_getMeetingGroups = $ccApi->fetch_from($get_string=$get_string, function($groups) {
                return isset($groups[0])? $groups: [];
            }, $debug = false);
            // print_r(['$_getMeetingGroups' => $_getMeetingGroups]);

            $getMeetingGroups = [];
            foreach ($_getMeetingGroups as $group_key => $group) {
                // print_r(['$group' => $group]);
                $g = [
                    "id" => $group['pdmg_id'],
                    "name" => $group['pdmg_group'],
                ];

                if (!in_array($g, $getMeetingGroups)) {
                    array_push($getMeetingGroups, $g);
                }
            }

            return $getMeetingGroups;
        }

        private function getGroups(ClickComApi $ccApi)
        {
            if ($this->meetingGroups === true) {
                return $this->getMeetingGroups($ccApi);
            } else {
                return $this->getGeneralGroups($ccApi);
            }
        }

        public function main_content(TemplateFile $tf, ClickComApi $ccApi)
        { ?>
            <div class="col-lg-8 col-md-8">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Select Group to Assign Agent to."); ?>
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $tittle_placeholder = "Select Group to Assign Agent to";
                            $id_name = "group_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $groups = $this->getGroups($ccApi);
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
                </div>
            </div>
        <?php }
    }
?>