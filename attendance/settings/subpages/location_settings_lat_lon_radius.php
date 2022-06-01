<?php
    $get_string = "attendance/clocking/location-info?account_id=$account_id";
    $location_info = $ccApi->fetch_from($get_string, function($location_info)
    {
        return isset($location_info[0])? $location_info[0]: [];
    }, $debug = false);

    require_once Current_BaseDir."forms/location_settings_lat_lon_radius.php";
?>