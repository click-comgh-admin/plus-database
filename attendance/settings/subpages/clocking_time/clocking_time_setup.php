<?php
    $get_string = "attendance/v2/clocking/clocking-time?account_id=$account_id";
    $clocking_time = $ccApi->fetch_from($get_string, function($clocking_time)
    {
        // return isset($clocking_time[0])? $clocking_time[0]: [];
        return isset($clocking_time[0])? $clocking_time: [];
    }, $debug = false);
    
    require_once Current_BaseDir."forms/clocking_time.php";
?>