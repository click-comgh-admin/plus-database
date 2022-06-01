<?php
    if (isset($_GET['meeting_id']) && !empty(@$_GET['meeting_id'])) {
        define('AccountMeetingId', (int)$_GET['meeting_id']);
    }
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php require_once Current_BaseDir."/forms/clocking-meeting/meetings_filter_form.php";?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
    if (isset($_GET['meeting_id']) && !empty(@$_GET['meeting_id'])) {
        require_once "approvals.php";
    } else {
        require_once "no-meeting.php";
    }
?>
