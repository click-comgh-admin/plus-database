<?php
    $get_string = "attendance/clocking/visibility?account_id=".AccountInfoId;
    $visibility = $ccApi->fetch_from($get_string, function($visibility)
    {
        return isset($visibility[0])? $visibility[0]: [];
    }, $debug = false);

    require_once Current_BaseDir."forms/attendance_visibility.php";
?>