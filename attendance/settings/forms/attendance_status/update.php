<?php 
    require_once "new_form.php";
    use AttendanceStatus\AttendanceStatus;
    $asForm = new AttendanceStatus();
    $asForm->data = $attendance_status;
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."attendance/clients/settings/status/update-attendance-status"; ?>" method="POST"
    make-general-posts="Update Attendance Status?">
    <div class="row justify-content-center">
        <?= $asForm->main_content($tf); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="attendance_status_id" value="<?= $attendance_status_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Update Attendance Status</button>
        </div>
    </div>
</form>