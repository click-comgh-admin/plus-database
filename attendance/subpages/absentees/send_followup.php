<?php
    use Encryptor\Encryptor;

    $encryptor = new Encryptor("members", md5("members"));
    $member_id = (int)$encryptor->decrypt(@$_GET['member']);

    $message_types = $ccApi->message_types(function($message_types)
    {
        return $message_types;
    }, $debug = false);
?>
<div class="row justify-content-center">
    <div class="col-md-8 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <?php
                $get_date = (isset($_COOKIE['date_filter_input'])) ? date("Y-m-d", strtotime($_COOKIE['date_filter_input'])): date("Y-m-d");
                        
                $get_string = "absentee?account_id=$account_id&member_id=".$member_id."&date=".$get_date;
                $absentee = $ccApi->attendance($get_string, function($absentee)
                {
                    return @$absentee;
                }, $debug = false);

            ?>
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Send Follow-Up Message.
                </div>
                <div class="btn-actions-pane-right px-1">
                    <div class="btn-group-sm nav btn-group" role="group">
                        <?php
                            foreach ($message_types as $ms_key => $ms) { 
                                $active = ($ms_key == 0) ? "active" : ""; ?>
                                <a class="btn-shadow btn btn-primary show <?= $active; ?>" href="#show_compose_form_<?= (int)$ms_key+1; ?>" data-toggle="tab"><?= @$ms['pdccmc_type']; ?></a>
                            <?php }
                        ?>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="tab-content">
                    <?php
                        foreach ($message_types as $ms_key => $ms) { 
                            $active = ($ms_key == 0) ? "active" : "";
                            $form = str_replace("-", "", strtolower($ms['pdccmc_type'])); ?>
                            <div class="tab-pane show  <?= $active; ?> p-0" id="show_compose_form_<?= (int)$ms_key+1; ?>" role="tabpanel">
                                <?php require_once BASE_DIRECTORY."/communications/forms/compose/absentee/members_".$form.".php"; ?>
                            </div>
                        <?php }
                    ?>
                </div>
            </div>
            <div class="card-footer">
            </div>
        </div>
    </div>
</div>