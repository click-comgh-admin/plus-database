<?php 
    require_once "set_meeting_time_form.php";
    use SetMeetingTime\SetMeetingTime;

    $smtForm = new SetMeetingTime();
    $smtForm->data = $meetingInfo; 
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."attendance/clients/meeting/set-meeting-time"; ?>" method="POST"
    make-general-posts="Setup Meeting?">
    <div class="row justify-content-center">
        <?= $smtForm->main_content($tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="meeting_id" value="<?= AccountMeetingId; ?>" />
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Setup Meeting</button>
        </div>
    </div>
</form>