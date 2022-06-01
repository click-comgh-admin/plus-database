<?php
    $get_string = "attendance/clocking/break-time?account_id=$account_id";
    $break_time = $ccApi->fetch_from($get_string, function($break_time)
    {
        return isset($break_time[0])? $break_time[0]: [];
    }, $debug = false);

    require_once Current_BaseDir."forms/break_time_setup.php";
?>