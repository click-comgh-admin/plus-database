<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "expected_attendance_days") {
            define("POST_URL", API_BASE_URL."attendance/clients/settings/expected_attendance_days");
            require_once 'expected_attendance_days - processing.php';
        }
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="expected_attendance_days" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Set Expected Attendance Days";
                        $id_name = "expected_attendance_days";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : 
                            (empty($present_days)) ? null : $present_days['pdad_days'];
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" value="'.@$input_value.'" placeholder="'.@$tittle_placeholder.'" min="1"';
                        echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                            [ "name"=>"type", "value"=>"number" ],
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
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Set Days</button>
                </div>
            </div>
        </div>
    </div>
    
</form>
