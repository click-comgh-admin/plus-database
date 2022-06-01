<?php 
    require_once "new_form.php";
    use ClockingAgent\ClockingAgent;
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));
    $cbaForm = new ClockingAgent();
    $cbaForm->encryptor = $encryptor;
?>
<form upload_attachment="this-form" role="form" action="<?= API_BASE_URL."attendance/clients/settings/clocking-agent/new-clocking-agent"; ?>" method="POST"
    make-general-posts="Assign Mobile App Admin?">
    <div class="row justify-content-center">
        <?= $cbaForm->main_content(AccountInfoId, $account_status, $tf, $ccApi); ?>
        <div class="col-lg-12 col-md-12">
            <input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Assign Mobile App Admin</button>
        </div>
    </div>
</form>