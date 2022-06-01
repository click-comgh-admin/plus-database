<?php
    $page = "attendance-status";
    $page_url = Current_BaseUrl."$page";

    if (isset($_GET['update']) && !empty($_GET['update'])) {
        $attendance_status_id = (int)$_GET['update'];
        $get_string = "status/attendance-status?account_id=".AccountInfoId."&id=$attendance_status_id";
        $attendance_status = $ccApi->attendance($get_string, function($attendance_status)
        {
            return isset($attendance_status[0])? $attendance_status[0]: [];
        }, $debug = false);

        if (empty($attendance_status)) { ?>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12">
                    <div class="mb-3 card shadow">
                        <div class="card-body">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-md-12 col-lg-12">
                                    No Attendance Status Found!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php } else {
            require_once "attendance-status-update.php";
        }
    } else {
        $get_string = "status/attendance-statuses?account_id=".AccountInfoId;
        $attendance_statuses = $ccApi->attendance($get_string, function($attendance_status)
        {
            return @$attendance_status;
        }, $debug = false);
    
        require_once "attendance-status.php";
    }
?>