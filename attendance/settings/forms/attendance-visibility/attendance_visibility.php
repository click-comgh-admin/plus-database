<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "attendancevisibility_info") {
            define("POST_URL", API_BASE_URL."attendance/clients/clocking/visibility-member");
            require_once 'attendance_visibility - processing.php';
        }
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="attendancevisibility_info" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = ((int)AccountInfoType === 10) ? "Select Official": "Select Member";
                        $id_name = "member_id";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = isset($_POST[$id_name]) ? $_POST[$id_name] : 0;
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
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Set visibility</button>
                </div>
            </div>
        </div>
    </div>
    
</form>
