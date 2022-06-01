<?php
    namespace AttendanceStatusAssign;

    class AttendanceStatusAssign
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

        public function main_content($tf, $ccApi)
        { ?>
            <div class="col-lg-12 col-md-12">
                <input type="hidden" value="<?= ((int)AccountInfoType === 10) ? AccountInfoType: AccountInfoType; ?>" name="account_type">
                <div class="row justify-content-center">
                    <?= $this->header("Assign Attendance Status."); ?>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Official": "Select Member";
                            $id_name = "member";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdad_member_id"])) ? $this->data["pdad_member_id"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            $selectedMember = (int)$input_value;

                            $get_string = "currentpage=1&rowsperpage=100000&client_id=".AccountInfoId;
                            $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members) {
                                return @$members['data'];
                            }, $debug = false);

                            $_members = '';
                            foreach ($client_members as $key => $member) {
                                if (isset($member['pdm_id'])) {
                                    $get_string = "identity?client_id=".AccountInfoId."&member_id=".$member['pdm_id'];
                                    $member_id = $ccApi->membership($get_string, function ($member_ids) {
                                        return isset($member_ids[0])? $member_ids[0]: [];
                                    }, $debug = false);
                                    $member_id = isset($member_id['pdm_identity']) ? ">> ID: ".$member_id['pdm_identity']."": "";
                                    $member_selected = @((int)$member['pdm_id'] === (int)$selectedMember) ? "selected": "";

                                    $Uid = $member['pdm_id'];
                                    $_members .= "<option value='".$Uid."' ".$member_selected.">".$member['pdm_firstname']." ".$member['pdm_surname']." ".$member_id."</option>";
                                }
                            }
                                
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$_members.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" ';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div> <?php /*
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Meeting Day";
                            $id_name = "user_meeting_day";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = @(isset($this->data["pdad_meeting_day"])) ? $this->data["pdad_meeting_day"] : "all";
                            $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                            $get_string = "days";
                            $days = $ccApi->attendance($get_string, function($days)
                            {
                                return @$days;
                            }, $debug = false);

                            function getDayFromNum(array $days, int $day)
                            {
                                $at = '';
                                foreach ($days as $key => $d) {
                                    if ((int)$d['pdad_id'] === (int)$day) {
                                        $at = $d['pdad_day'];
                                    }
                                }
                                return $at;
                            }

                            $get_string = "meeting_days?account_id=".AccountInfoId;
                            $meeting_days = $ccApi->attendance($get_string, function($meeting_days) use($input_value, $days) {
                                $at = '';
                                foreach ($meeting_days as $key => $meeting_day) {
                                    $_selected = @((int)$meeting_day['pdad_day'] === (int)$input_value) ? "selected": "";
                                    $at .= '<option value="'.$meeting_day['pdad_day'].'" '.$_selected.'>'.getDayFromNum($days, (int)$meeting_day['pdad_day']).'</option>';
                                }
                                return @$at;
                            }, $debug = false);
                            $input_value = '
                                <option value="">Select Meeting Days</option>
                                '.$meeting_days.'
                            ';
                            $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                                [ "name"=>"options", "value"=>$input_value ],
                            ]);
                        ?>
                    </div> */ ?>
                    <div class="col-lg-4 col-md-6">
                        <?php
                            $tittle_placeholder = "Select Attendance Status";
                            $id_name = "attendance_status_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdad_attendance_status"])) ? $this->data["pdad_attendance_status"] : "";
                            $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : $input_value;
                            
                            $get_string = "status/attendance-statuses?account_id=".AccountInfoId;
                            $attendance_statuses = $ccApi->attendance($get_string, function($attendance_statuses) use ($input_value)
                            {
                                $at = '';
                                foreach ($attendance_statuses as $key => $attendance_status) {
                                    $_selected = @((int)$attendance_status['pdad_id'] === (int)$input_value) ? "selected": "";
                                    $at .= '<option value="'.$attendance_status['pdad_id'].'" '.$_selected.'>'.$attendance_status['pdad_attendance_status'].'</option>';
                                }
                                return @$at;
                            }, $debug = false);
                            $input_value = '
                                <option value="">Select Attendance Status</option>
                                '.$attendance_statuses.'
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
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "Start Period";
                            $id_name = "start_date";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = (isset($this->data["pdad_period_start"])) ? $this->data["pdad_period_start"] : null;
                            $input_value = @(isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                            $input_value = @(is_null($input_value)) ? date("Y/m/d") : date("Y/m/d", strtotime(@$input_value));
                            $input_value = 'value="'.$input_value.'"';
                                    
                            $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" 
                                data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"datepicker-here " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <?php 
                            $tittle_placeholder = "End Period";
                            $id_name = "end_date";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = @(isset($this->data["pdad_period_end"])) ? $this->data["pdad_period_end"] : null;
                            $input_value = @(isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                            $input_value = @(is_null($input_value)) ? date("Y/m/d") : date("Y/m/d", strtotime(@$input_value));
                            $input_value = 'value="'.$input_value.'"';
                                    
                            $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" 
                                data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"datepicker-here " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                </div>
            </div>
        <?php }
    }
?>