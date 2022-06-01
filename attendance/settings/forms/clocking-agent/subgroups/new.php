<?php 
    require_once "new_form.php";
    use ClockingAgentAssignSubGroup\ClockingAgentAssignSubGroup;
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));
    $cbaForm = new ClockingAgentAssignSubGroup(MeetingSubGroups);
    $cbaForm->encryptor = $encryptor;
    $urlEndPoint = MeetingSubGroups ? "assign-meeting-subgroup" : "assign-general-subgroup";
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."attendance/v2/clients/clocking-agent/$urlEndPoint-multiple"; ?>" method="POST"
    make-general-posts="Assign Agent To Sub-Group?">
    <div class="row justify-content-center">
        <?= $cbaForm->main_content($tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="agent_id" value="<?= $agentId; ?>" />
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Assign Agent To Sub-Group</button>
        </div>
    </div>
</form>