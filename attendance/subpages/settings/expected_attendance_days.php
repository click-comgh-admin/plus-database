<?php
    $get_string = "present_days?account_id=$account_id";
    $present_days = $ccApi->attendance($get_string, function($present_days)
    {
        return @$present_days;
    }, $debug = false);

    require_once "forms/settings/expected_attendance_days.php";
?>