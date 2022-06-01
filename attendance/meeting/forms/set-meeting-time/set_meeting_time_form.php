<?php
    namespace SetMeetingTime;

    class SetMeetingTime
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
                    <?= $this->header("Create New Meeting."); ?>
                    <div class="col-lg-6 col-md-6">
                        <?php
                            $tittle_placeholder = "Create New Meeting";
                            $id_name = "meeting";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            // print_r($this->data['meeting']['pdam_meeting']);
                            $input_value = isset($this->data['meeting']['pdam_meeting'])
                                ? $this->data['meeting']['pdam_meeting']: "";
                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'"
                                placeholder="'.$tittle_placeholder.'" maxlength="18"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-coffee icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6">
                        <?php 
                            $tittle_placeholder = "Meeting Date";
                            $id_name = "date_of_meeting";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            // print_r($this->data);
                            $input_value = isset($this->data['meeting']['pdam_meeting_date'])
                                ? $this->data['meeting']['pdam_meeting_date']: "";
                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" 
                                data-position="top left" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"datepicker-here " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "Is Meeting Recurring?";
                            $id_name = "recurring";
                            $meeting_recurring = "$id_name";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $is_recurring = [
                                ["id"=>1, "name"=>"Yes"],
                                ["id"=>0, "name"=>"No"]
                            ]; 
                            $saved_recurring = isset($this->data['meeting']['pdam_recurring'])
                                ? (int)$this->data['meeting']['pdam_recurring']: -1;
                                
                            $recurringOptions = '';
                            foreach ($is_recurring as $key => $is) {
                                $selected = ((int)$saved_recurring === (int)$is['id'])? "selected": "";
                                $recurringOptions .= '<option value="'.$is['id'].'" '.$selected.'>'
                                    .$is['name'].'</option>';
                            }
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$recurringOptions.'
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
                    <div class="col-lg-6" <?= ($saved_recurring === 1)? "": "select-show='$meeting_recurring'"; ?> >
                        <?php 
                            $tittle_placeholder = "Recurring Meeting Day";
                            $id_name = "recurring_meeting_day";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            // print_r($this->data);
                            $input_value = isset($this->data['meeting']['pdam_day'])
                                ? (int)$this->data['meeting']['pdam_day']: 0;
    
                            $get_string = "days";
                            $days = $ccApi->attendance($get_string, function($days)
                            {
                                return @$days;
                            }, $debug = false);
                            
                            $meeting_days_options = '';
                            foreach ($days as $day_key => $day) {
                                $day_id = (int)$day['pdad_id'];
                                $day_name = $day['pdad_day'];

                                $selected = ($input_value === $day_id)? "selected": "";
                                $meeting_days_options .= '<option value="'.$day_id.'" '.$selected.'>'
                                    .$day_name.'</option>';
                            }
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$meeting_days_options.'
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
                    <div class="col-lg-6" <?= ($saved_recurring === 1)? "": "select-show='$meeting_recurring'"; ?> >
                        <?php 
                            $tittle_placeholder = "Meeting End Date [Optional]";
                            $id_name = "end_date_of_meeting";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            // print_r($this->data);
                            $input_value = isset($this->data['meeting']['pdam_end_date'])
                                ? date("d/m/Y", strtotime($this->data['meeting']['pdam_end_date'])): "";
                            $input_value = ($input_value === "00/00/0000")? "": $input_value;
                            $input_value = ($input_value === "30/11/-0001")? "": $input_value;
                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" 
                                placeholder="[dd/mm/yyyy] '.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6">
                        <?php 
                            $tittle_placeholder = "Meeting Start Time";
                            $id_name = "starting_time_of_meeting";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = isset($this->data['meeting']['pdam_meeting_start_time'])
                                ? $this->data['meeting']['pdam_meeting_start_time']: "";
                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" 
                                data-position="top left" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"timepicker-here " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6">
                        <?php 
                            $tittle_placeholder = "Meeting Closing Time";
                            $id_name = "closing_time_of_meeting";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $input_value = isset($this->data['meeting']['pdam_meeting_close_time'])
                                ? $this->data['meeting']['pdam_meeting_close_time']: "";
                            $input_value = 'value="'.$input_value.'"';
                            $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" 
                                data-position="top left" placeholder="'.$tittle_placeholder.'"';
                            echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"timepicker-here " ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <?php 
                            $tittle_placeholder = "Select Group";
                            $id_name = "group_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php 
                            $_saved_groups = isset($this->data['group_assignment'])
                                ? $this->data['group_assignment']: [];
                            $saved_groups = [];
                            foreach ($_saved_groups as $key => $_sg) {
                                if (!in_array($_sg['pdama_assign_id'], $saved_groups)) {
                                    array_push($saved_groups, $_sg['pdama_assign_id']);
                                }
                            }
                            $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                            $groupList = $ccApi->fetch_from($get_string=$get_string, function($groups) use($saved_groups) {
                                $groups = isset($groups[0])? $groups: [];
                                $at = '';
                                foreach ($groups as $key => $group) {
                                    $selected = "";
                                    if (in_array($group['pdmg_id'], $saved_groups)) {
                                        $selected = "selected";
                                    }
                                    $at .= '<option value="'.$group['pdmg_id'].'" '.$selected.'>'
                                        .$group['pdmg_group'].'</option>';
                                }
                                return @$at;
                            }, $debug = false);
                            $input_value = '
                                <option value="">'.$tittle_placeholder.'</option>
                                '.$groupList.'
                            ';
                            $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple';
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
                            $id_name = "subgroup_id";
                        ?>
                        <h6><?= $tittle_placeholder; ?></h6>
                        <?php
                            $_saved_subgroups = isset($this->data['subgroup_assignment'])
                                ? $this->data['subgroup_assignment']: [];
                            $saved_subgroups = [];
                            foreach ($_saved_subgroups as $key => $_ssg) {
                                if (!in_array($_ssg['pdama_assign_id'], $saved_subgroups)) {
                                    array_push($saved_subgroups, $_ssg['pdama_assign_id']);
                                }
                            }
                            $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                            $subgroups = $ccApi->fetch_from($get_string=$get_string, function($groups) use($ccApi, $saved_subgroups) {
                                $at = '';
                                $groups = isset($groups[0])? $groups: [];

                                foreach ($groups as $group_key => $group) {
                                    $group_id = $group['pdmg_id'];
                                    $group_name = $group['pdmg_group'];
                                    $get_string = "attendance/members/all_subgroups?group_id=$group_id&client_id=".AccountInfoId;
                                    $at .= $ccApi->fetch_from($get_string=$get_string, function($subgroups) use($group_name, $saved_subgroups) {
                                        $subgroups = isset($subgroups[0])? $subgroups: [];
                                        $sg = '';
                                        foreach ($subgroups as $key => $subgroup) {
                                            $selected = "";
                                            if (in_array($subgroup['pdmg_id'], $saved_subgroups)) {
                                                $selected = "selected";
                                            }
                                            $sg .= '<option value="'.$subgroup['pdmg_id'].'" '.$selected.'>'.$group_name.' => '.$subgroup['pdmg_subgroup'].'</option>';
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
                            $input_attributes = 'name="'.$id_name.'[]" id="'.$id_name.'" multiple';
                            echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
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