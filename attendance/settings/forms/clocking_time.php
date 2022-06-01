<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "clockinouttime_info") {
            define("POST_URL", API_BASE_URL."attendance/v2/clients/general/settings/clocking-time");
            require_once 'clocking_time - processing.php';
        }
    }

    $_id_name = "meeting-day";
    $currentDay = isset($_GET[$_id_name]) ? (int)$_GET[$_id_name]: 0;

    $SCT = [];
    foreach ($clocking_time as $key => $ct) {
        // print_r($ct['meetingDay']);
        $meetingDay = isset($ct['meetingDay']['id'])? $ct['meetingDay']['id']: 0;
        if ($currentDay === $meetingDay) {
            $SCT = $ct;
        }
    }
    // print_r($SCT);
?>
<form role="form" action="" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="clockinouttime_info" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Selected Meeting Day";
                        $id_name = "meeting_day";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php      
                        $md_id = isset($SCT['meetingDay']['id'])? $SCT['meetingDay']['id']: 0;   
                        $md_name = isset($SCT['meetingDay']['name'])? $SCT['meetingDay']['name']: "";                

                        $meetingDays_list = '';
                        if (isset($SCT['meetingDay'])) {
                            $selected = ((int)$currentDay === (int)$md_id) ? "selected": "";
                            $meetingDays_list = '<option value="'.$md_id.'" '.$selected.'>'.$md_name.'</option>';
                        } else {
                            foreach ($MD as $key => $md) {
                                $md_id = (int)$md["id"];
                                $md_name = $md["name"];

                                
                                if ((int)$currentDay === (int)$md_id) {
                                    $selected = "selected";
                                    $meetingDays_list = '<option value="'.$md_id.'" '.$selected.'>'.$md_name.'</option>';
                                }
                            }
                        }
                        $input_value = '
                            '.$meetingDays_list.'
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
                        $tittle_placeholder = "Enter Title";
                        $id_name = "meeting_title";
                        $_id_name = "meetingTitle";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $meetingTitle = isset($SCT[$_id_name])? $SCT[$_id_name]: null;  
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $meetingTitle;
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'"
                        value="'.@$input_value.'" placeholder="'.@$tittle_placeholder.'"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"type", "value"=>"text" ],
                            [ "name"=>"icon", "value"=>"pe-7s-note2 icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Enter Clock In Time";
                        $id_name = "clockintime";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($SCT['timeIn']['date'])) ? date("H:i", strtotime($SCT['timeIn']['date'])): $input_value;
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" value="'.@$input_value.'" placeholder="'.@$tittle_placeholder.'" min="1"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"type", "value"=>"time" ],
                            [ "name"=>"icon", "value"=>"pe-7s-note2 icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Enter Clock Out Time";
                        $id_name = "clockouttime";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($SCT['timeOut']['date'])) ? date("H:i", strtotime($SCT['timeOut']['date'])): $input_value;
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" value="'.@$input_value.'" placeholder="'.@$tittle_placeholder.'" min="1"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"type", "value"=>"time" ],
                            [ "name"=>"icon", "value"=>"pe-7s-note2 icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Set Clock In/ Out Time</button>
                </div>
            </div>
        </div>
    </div>
    
</form>
