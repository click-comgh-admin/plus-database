<?php
    $get_string = "days";
    $days = $ccApi->attendance($get_string, function($days)
    {
        return @$days;
    }, $debug = false);
    // pdad_id] => 4 [pdad_day
    
    $get_string = "meeting_days?account_id=$account_id";
    $meeting_days = $ccApi->attendance($get_string, function($meeting_days)
    {
        return @$meeting_days;
    }, $debug = false);

    $MD = [];
    foreach ($meeting_days as $key => $meeting_day) {;
        if (!in_array($meeting_day['pdad_day'], $MD)) {
            array_push($MD, $meeting_day['pdad_day']);
        }
    }

    require_once "forms/settings/meeting_days.php";
?>