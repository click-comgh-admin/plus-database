<?php
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST['add-form']) && $_POST['add-form'] == "location_info") {
            define("POST_URL", API_BASE_URL."attendance/clients/settings/location-info");
            require_once 'location_settings_lat_lon_radius - processing.php';
        }
    }
?>
<form role="form" action="" method="POST" enctype="multipart/form-data">
    <div class="row justify-content-center">
        <input type="hidden" name="add-form" value="location_info" />
        <div class="col-md-12">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <?php 
                        $tittle_placeholder = "Enter Location Latitude";
                        $id_name = "latitude";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($location_info['pdad_lat'])) ? $location_info['pdad_lat']: $input_value;
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" value="'.@$input_value.'" placeholder="'.@$tittle_placeholder.'" min="1"';
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
                        $tittle_placeholder = "Enter Location Longitude";
                        $id_name = "longitude";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($location_info['pdad_lon'])) ? $location_info['pdad_lon']: $input_value;
                        $input_attributes = 'name="'.@$id_name.'" id="'.@$id_name.'" value="'.@$input_value.'" placeholder="'.@$tittle_placeholder.'" min="1"';
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
                        $tittle_placeholder = "Select Location Location Radius in Kilometer(s)";
                        $id_name = "radius";
                    ?>
                    <h6><?= $tittle_placeholder; ?></h6>
                    <?php
                        $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : null;
                        $input_value = (isset($location_info['pdad_radius'])) ? $location_info['pdad_radius']: $input_value;
                        
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
                    <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Set Location</button>
                </div>
            </div>
        </div>
    </div>
    
</form>
