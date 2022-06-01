<?php
    use Encryptor\Encryptor;
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    function show_text($type = 1, $id, $title, $content, $class, $MailAttachment=null) { ?>
        <a href="#" data-toggle="modal" open-modal--id="subgroups-<?= $id; ?>"
            open-modal--title="Show <?= $title; ?>" open-modal--html='<?php 
                if ((int)$type == 1) {
                    echo multilineText($content);
                } else {
                    // print_r($content);
                    if (isset($content[0])) {
                        echo @$content[0];
                    } else {
                        $subject = @$content['pdad_followup_subject'];
                        $attachment = @$content['attached'];
                        $type = @$content['message_type']['pdccmc_type'];
                        $message = @$content['pdad_followup']; ?>
                        <div class="main-card mb-0">
                            <div class="card-body py-0">
                                <div class="collapse py-2" id="message_attachments">
                                    <h5 class="card-title">Attachments</h5>
                                    <div class="row justify-content-center">
                                        <?php
                                            $MailAttachment->files($attachment, 10000, ["col"=>"col-md-3", "width"=>"33%"], true, false);
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer w-100">
                                <button class="btn btn-success mx-1 collapsed" aria-expanded="false" type="button"
                                    data-toggle="collapse" href="#message_attachments">
                                    <span class="d-block d-md-none pe-7s-link fa-1x"></span>
                                    <span class="d-none d-sm-block">View Attachments</span>
                                </button>
                            </div>
                        </div>
                        <div class="main-card mb-3">
                            <div class="card-header-tab card-header-tab-animation card-header h-25">
                                <div class="card-header-title" style="white-space: normal">
                                    <span><?= $subject; ?></span>
                                </div>
                                <span class="badge p-1 mx-3 small badge-info shadow shadow-sm">
                                    <?= $type; ?>
                                </span>
                            </div>
                            <div class="card-body py-0">
                                <?php
                                    if ((int)$content['message_type']['pdccmc_id'] == 3) { ?>
                                        <audio src="<?= FILE_BUCKET_BASE_URL; ?>files/<?= $content['pdad_followup_attachment']; ?>" 
                                            controls="" class="mfp-img-mobile mfp-fade container" 
                                            style="background-image: linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px"></audio>
                                    <?php }
                                ?>
                                <p class="p-0 m-0"><?= multilineText($message); ?></p>
                            </div>
                            <div class="card-footer btn-actions-pane-right">
                                <small class="btn-actions-pane-right font-weight-bold">
                                    <?php
                                        $date = $content['pdad_date'];
                                        echo date("m/d/Y", strtotime($date));
                                    ?>
                                </small>
                            </div>
                        </div>
                    <?php }
                }
            ?>' open-modal--buttons='
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            ' class="<?= $class; ?>">
            <?= $title; ?>
        </a>
    <?php }
?>
<pre><?php //print_r($client_members); ?></pre>


<?php
    if (isset($_GET['date_filter_input'])) { ?>
        <script> __set_cookies__("date_filter_input", "<?= $_GET['date_filter_input']; ?>", $time = 2); </script>
    <?php }
    if ($client_members['error'] === false) { 
        if (empty($client_members['data'])) { ?>
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <h3 class="text-muted">No Members Found!</h3>
                </div>
            </div>
        <?php } else {
            $members = $client_members['data']; ?>
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <div class="table-responsive">
                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th>Member Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    foreach ($members as $key => $member) {
                                        $member_id = $member['pdm_id'];
                                        if (!in_array($member_id, $not_marked)) { ?>
                                            <tr>
                                                <td style="text-align: center;" class="p-0" background-image="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                                                    <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-center ml-auto mr-auto">
                                                                <div class="widget-content-center">
                                                                    <img width="100" height="100" class="rounded-circle shadow" alt="Contact Image"
                                                                        src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-0">
                                                    <table class="align-middle mb-0 table table-borderless">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-justify"><?= $member['pdm_firstname'] ." ". $member['pdm_surname']; ?></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <?php
                                                                        $member_id = $member['pdm_id'];
                                                                        $encryptor = new Encryptor("members", md5("members"));
                                                                        $member_id = $encryptor->encrypt($member_id);

                                                                        $get_string = "absentee?account_id=$account_id&member_id=".$member['pdm_id']."&date=".$get_date;
                                                                        $absentee = $ccApi->attendance($get_string, function($absentee)
                                                                        {
                                                                            return @$absentee;
                                                                        }, $debug = false);
                                                                    ?>
                                                                    <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $member_id; ?>" class="btn btn-secondary btn-sm" type="button">Profile Details</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <?= (!empty($absentee)) ?
                                                                        show_text(1, $key.$member_id."_excuse", "Member Excuse", empty($absentee['pdad_reason'])? "No Excuse Entered!" : $absentee['pdad_reason'],
                                                                            "btn btn-info bg-arielle-smile font-weight-bold btn-sm my-1"
                                                                        ): "";
                                                                    ?>
                                                                    <a href="<?= Attendance_BaseUrl; ?>absentees?enter-excuse&member=<?= $member_id; ?>" class="btn btn-info btn-sm my-1" type="button">Enter Excuse</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <?= (!empty($absentee)) ?
                                                                        show_text(2, $key.$member_id."_follow_up", "Follow-Up Message", empty($absentee['pdad_followup'])?
                                                                            [ 0=>"No Follow-Up Sent"] : $absentee,
                                                                            "btn btn-success bg-grow-early font-weight-bold btn-sm my-1"
                                                                        , $MailAttachment): "";
                                                                    ?>
                                                                    <a href="<?= Attendance_BaseUrl; ?>absentees?send-followup&member=<?= $member_id; ?>" class="btn btn-success btn-sm my-1" type="button">Send Follow-Up</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <b>Status: </b> 
                                                                    <span class="badge badge-info">
                                                                        <?=  
                                                                            $active_status = $ccApi->active_status($all="one", $id=$member['pdm_status'],function($active_status) {
                                                                                return @$active_status[0]['pdd_info'];
                                                                            });
                                                                        ?>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr><td class="pt-1 pb-0 bg-light"></td><td class="pt-1 pb-0 bg-light"></td></tr>
                                        <?php }
                                    }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        <?php } ?>
    <?php } else { ?>
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <h3 class="text-muted"><?= $client_members['msg']; ?></h3>
            </div>
        </div>
    <?php }

?>