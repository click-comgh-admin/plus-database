<?php 
    require_once "new_assign_form.php";
    use AssignMeetingGroup\AssignMeetingGroup;
    $asForm = new AssignMeetingGroup();
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."attendance/clients/members/assign-attendance"; ?>" method="POST"
    make-general-posts="Assign Meeting Group?">
    <div class="row justify-content-center">
        <?= $asForm->main_content($tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Assign Meeting Group</button>
        </div>
    </div>
</form>