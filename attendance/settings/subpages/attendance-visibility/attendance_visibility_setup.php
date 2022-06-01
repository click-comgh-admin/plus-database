<?php
    $get_string = "attendance/clocking/visibility-member?account_id=".AccountInfoId;
    $visibility = $ccApi->fetch_from($get_string, function($visibility)
    {
        return isset($visibility[0])? $visibility: [];
    }, $debug = false);

    require_once Current_BaseDir."forms/attendance-visibility/attendance_visibility.php";
?>