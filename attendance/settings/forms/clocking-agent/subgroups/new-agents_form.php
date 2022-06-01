<?php
    namespace ClockingAgentsAssignSubGroup;

    use ClickComApi;
    use TemplateFile\TemplateFile;

    class ClockingAgentsAssignSubGroup
    {
        public $data = [];
        public $user_id;
        public $encryptor;
        public $assigned_group = [];

        public function __construct() {}

        private function header(string $title = "Title")
        { ?>
            <div class="col-md-12 small card alert-warning p-0 my-3 shadow shadow-sm card-shadow-warning border border-white">
                <h2 class="fa fa-2x small text-muted card-body p-1 py-2 text-center text-white my-0">
                    <u class="text-capitalize small font-weight-bold" style="color: darkgrey"><?= $title; ?></u>
                </h2>
            </div>
        <?php }

        private function getClockingAgents(ClickComApi $ccApi)
        {
            $get_string = "attendance/clocking-agent/clocking-agents?account_id=" . AccountInfoId;
            $_clocking_agents = $ccApi->fetch_from($get_string=$get_string, function($clocking_agent) {
                return $clocking_agent;
            }, $debug=false);
            // print_r(['$_clocking_agents' => $_clocking_agents]);

            $getGeneralGroups = [];
            foreach ($_clocking_agents as $agent_key => $agent) {
                $memberId = (int)$agent['pdad_member_id'];
                // print_r(['$agent' => $agent]);
                $g = [
                    "id" => $agent['pdad_id'],
                    "name" => $this->getMember($ccApi, $memberId),
                ];

                if (!in_array($g, $getGeneralGroups)) {
                    array_push($getGeneralGroups, $g);
                }
            }

            return $getGeneralGroups;
        }

        private function getMember(ClickComApi $ccApi, int $memberId)
        {
            
            $get_string = "membership/web/member-id?id=$memberId&account_id=" . AccountInfoId . "nameonly=1&systemid=1&detailed=0";
            $member_info = $ccApi->fetch_from($get_string=$get_string, function($member_info) {
                return $member_info;
            }, $debug=false);
            $memberName = "???";
            if ($member_info[0]) {
                $member_info = $member_info[0];
                $memberName = $member_info['firstname']. " " .$member_info['surname'];
            }

            return $memberName;
        }

        public function main_content(TemplateFile $tf, ClickComApi $ccApi)
        { ?>
            <div class="col-lg-8 col-md-8">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Select Agent to Assign to Sub-Group."); ?>
                    <div class="col-lg-12 col-md-12">
                        <?php
                            $tittle_placeholder = "Select Agent to Assign to Sub-Group";
                            $id_name = "agent_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $clockingAgents = $this->getClockingAgents($ccApi);
                            // print_r(['$clockingAgents' => $clockingAgents]);

                            $agent_groups = '';
                            foreach ($clockingAgents as $key => $agent) {
                                $agent_id = (int)$agent['id'];
                
                                $agent_groups .= '<option value="'.$agent_id.'" >
                                    '.$agent['name'].'
                                </option>';
                            }
                                    
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$agent_groups.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
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