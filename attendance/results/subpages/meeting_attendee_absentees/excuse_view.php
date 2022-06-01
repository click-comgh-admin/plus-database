<?php
    use Encryptor\Encryptor;

    $encryptor = new Encryptor("members", md5("members"));
    $member_id = (int)$encryptor->decrypt(@$_GET['member']);
    $meeting_id = (int)@$_GET['meeting_id'];
?>
<div class="row justify-content-center">
    <div class="col-md-8 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <?php
                $get_date = (isset($_COOKIE['date_filter_input'])) ? date("Y-m-d", strtotime($_COOKIE['date_filter_input'])): date("Y-m-d");
                        
                $get_string = "attendance/meeting/absentee?account_id=$account_id&member_id=".$member_id."&meeting_id=".$meeting_id."&date=".$get_date;
                $absentee = $ccApi->fetch_from($get_string, function($absentee)
                {
                    return @$absentee;
                }, $debug = false);

            ?>
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Enter Excuse
                </div>
            </div>
            <div class="card-body">
                <?php 
                    require_once(BASE_DIRECTORY.'/attendance/results/forms/attendance-meeting/enter_excuse.php');
                ?>
            </div>
            <div class="card-footer">
            </div>
        </div>
    </div>
</div>