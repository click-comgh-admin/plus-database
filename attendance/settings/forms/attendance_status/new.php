<?php 
    require_once "new_form.php";
    use AttendanceStatus\AttendanceStatus;
    $asForm = new AttendanceStatus();
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."attendance/clients/settings/status/new-attendance-status"; ?>" method="POST"
    make-general-posts="Create Attendance Status?">
    <div class="row justify-content-center">
        <?= $asForm->main_content($tf); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Create Attendance Status</button>
        </div>
    </div>
</form>