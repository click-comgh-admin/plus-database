<form role="form" action="<?= API_BASE_URL."communications/clients/mailer/members/dues/voice"; ?>" method="POST"
    enctype="multipart/form-data" make-general-posts="Send Voice Alert?">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Subject";
                $id_name = "subject";
            ?>
            <?php
                $input_value = (empty($absentee)) ? null : $absentee['pdad_followup_subject'];
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                $input_value = 'value="'.$input_value.'"';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"fa fa-heading fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div> <?php /*
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Message";
                $id_name = "message";
            ?>
            <?php
                $input_value = (empty($absentee)) ? "" : $absentee['pdad_followup'];
                $input_value = (isset($_POST[$id_name])) ? $_POST[$id_name] : $input_value;

                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'" placeholder="'.$tittle_placeholder.':" rows="4"';
                echo $tf->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                    [ "name"=>"default_value", "value"=>$input_value ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div> */ ?>
        <div class="col-lg-12 col-md-12 my-2">
            <?php
                $tittle_placeholder = "Record Voice Message";
                $id_name = "voice_audio";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                use AudioRecorder\AudioRecorder;
                $aR = new AudioRecorder();
                echo $aR->show();
            ?>
        </div>
        <?php /*
        <div class="col-lg-12 col-md-12">
            <?php
                $tittle_placeholder = "Select Voice Message";
                $id_name = "voice_audio";
            ?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" accept=".mp3" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-volume font-weight-bold fa-1x icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"file" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
            <ul class="d-block text-warning">
                <li class="nav-item">You can only send .mp3</li>
                <li class="nav-item">File size should be less than 20mb</li>
                <li class="nav-item">Audio Duration: 1:15 sec maximum</li>
                <li class="nav-item">File size should be less than 20mb</li>
                <li class="nav-item">Maximum Contacts: 1000 per a blast</li>
            </ul>
        </div> */ ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="date" value="<?= $get_date; ?>" />
            <input type="hidden" name="year" value="<?= $get_year; ?>" />
            <?php
                foreach ($message_members as $key => $message_member) { ?>
                    <input type="hidden" name="member_id[]" value="<?= $message_member['pdm_id']; ?>" />
                <?php }
            ?>
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="due_id" value="<?= $_GET['dues']; ?>" />
            <select name="mAttachment[]" class="no-select2 d-none" multiple="true"></select>
        </div>
        <div class="col-lg-12 col-md-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Send Message</button>
        </div>
    </div>

</form>