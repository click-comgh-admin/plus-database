<div class="d-flex justify-content-between">
    <h5 class="card-title pt-2 mb-0">Set Meeting Time</h5>
    <a class="btn btn-outline-info" href="<?= $page_url;?>">RESET</a>
</div><hr/>

<?php 
    define('AccountMeetingId', (int)@$_GET['show-meeting']);

    $get_string = "attendance/meeting/meeting_info?client_id=".AccountInfoId."&id=".AccountMeetingId;
    $meetingInfo = $ccApi->fetch_from($get_string=$get_string, function($meetings) {
        return isset($meetings['meeting'])? $meetings: [];
    }, $debug = false);
    
    require_once Current_BaseDir."/forms/set-meeting-time/set-meeting-time.php";
?>