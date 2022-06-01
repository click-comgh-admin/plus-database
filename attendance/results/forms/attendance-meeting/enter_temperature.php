<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_GET['meeting_id']) && !empty(@$_GET['meeting_id'])) {
            if ($type_id === 1) {
                define("POST_URL", API_BASE_URL."attendance/clients/temperature/meeting_in");
            } else {
                define("POST_URL", API_BASE_URL."attendance/clients/temperature/meeting_out");
            }
        } else {
            if ($type_id === 1) {
                define("POST_URL", API_BASE_URL."attendance/clients/temperature/in");
            } else {
                define("POST_URL", API_BASE_URL."attendance/clients/temperature/out");
            }
        }
        require_once 'enter_temperature - processing.php';
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Temperature";
                        $id_name = "temperature";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        if ($type_id === 1) {
                            $input_value = (isset($absentee['pdad_in_temp'])) ? $absentee['pdad_in_temp'] : "";
                        } else {
                            $input_value = (isset($absentee['pdad_out_temp'])) ? $absentee['pdad_out_temp'] : "";
                        }
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;
                        $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" value="'.$input_value.'" placeholder="'.$tittle_placeholder.'" rows="4"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"icon", "value"=>"pe-7s-hourglass icon-gradient bg-warm-flame text-success" ],
                            [ "name"=>"default_value", "value"=>$input_value ],
                            [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                            [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        ]);
                    ?>
                </div>
                <div class="col-lg-12 col-md-12">
                    <input type="hidden" name="date" value="<?= $get_date; ?>" />
                    <input type="hidden" name="member_id" value="<?= $member_id; ?>" />
                    <?php
                        if (isset($_GET['meeting_id']) && !empty(@$_GET['meeting_id'])) { ?>
                            <input type="hidden" name="meeting_id" value="<?= $meeting_id; ?>" />
                        <?php }
                    ?>
                    <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                    <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                </div>
                <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Save Temperature</button>
                </div>
            </div>
        </div>
    </div>
    
</form>
