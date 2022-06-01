<?php
    $get_string = "present_days?account_id=$account_id";
    $present_days = $ccApi->attendance($get_string, function($present_days)
    {
        return @$present_days;
    }, $debug = false);

    require_once Current_BaseDir."forms/expected_attendance_days.php";
?>
<div class="card mt-4 border border-info">
    <p class="m-0 p-2">
        <b>Total Attendance</b>:  
        <?= isset($present_days['pdad_days'])? (int)$present_days['pdad_days']*12: 0; ?>
        Day(s) 
        <i>(per year)</i>
    </p>
    <?php 
        // echo (int)ceil(1.9);
    ?>
</div>