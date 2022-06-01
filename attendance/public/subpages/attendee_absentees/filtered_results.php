<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    $_start_date = "start_date";
    $_end_date = "end_date";
    $fiveDaysBefore = date("Y/m/").((int)date("d")-5);
    $today = date("Y/m/d");
    $start_date = @(isset($_GET[$_start_date])) ? date("Y/m/d", strtotime($_GET[$_start_date])) : $fiveDaysBefore;
    $end_date = @(isset($_GET[$_end_date])) ? date("Y/m/d", strtotime($_GET[$_end_date])) :$today;

    $_start_time = "start_time";
    $_end_time = "end_time";
    $start_time = @(isset($_GET[$_start_time])) ? date("H:i", strtotime($_GET[$_start_time])) : "";
    $end_time = @(isset($_GET[$_end_time])) ? date("H:i", strtotime($_GET[$_end_time])) : "";
    $by_time = ($start_time === "" || $end_time === "") ? 0: 1;

    $_check_out_start_time = "check_out_start_time";
    $_check_out_end_time = "check_out_end_time";
    $check_out_start_time = @(isset($_GET[$_check_out_start_time])) ? date("H:i", strtotime($_GET[$_check_out_start_time])) : "";
    $check_out_end_time = @(isset($_GET[$_check_out_end_time])) ? date("H:i", strtotime($_GET[$_check_out_end_time])) : "";
    $by_check_out_time = ($check_out_start_time === "" || $check_out_end_time === "") ? 0: 1;
    
    $_by_group_id = "by_group_id";
    $_group_id = "group_id";
    $by_group_id = @(isset($_GET[$_by_group_id])) ? $_GET[$_by_group_id] : 0;
    $this_group_id = @(isset($_GET[$_group_id])) ? $_GET[$_group_id] : "all"; 
    $by_group_id = ($by_group_id == 0) ? 0: 1;

    $_by_subgroup_id = "by_subgroup_id";
    $_subgroup_id = "subgroup_id";
    $by_subgroup_id = @(isset($_GET[$_by_subgroup_id])) ? $_GET[$_by_subgroup_id] : 0;
    $this_subgroup_id = @(isset($_GET[$_subgroup_id])) ? $_GET[$_subgroup_id] : "all"; 
    $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;

    $_by_gender = "by_gender";
    $_gender = "gender";
    $by_gender = @(isset($_GET[$_by_gender])) ? $_GET[$_by_gender] : 0;
    $this_gender = @(isset($_GET[$_gender])) ? $_GET[$_gender] : "all"; 
    $by_gender = ($by_gender == 0) ? 0: 1;

    $_by_user_meeting_day = "by_user_meeting_day";
    $_user_meeting_day = "user_meeting_day";

    $by_user_meeting_day = @(isset($_GET[$_by_user_meeting_day])) ? $_GET[$_by_user_meeting_day] : 0;
    $this_user_meeting_day = @(isset($_GET[$_user_meeting_day])) ? $_GET[$_user_meeting_day] : "all"; 
    $by_user_meeting_day = ($by_user_meeting_day == 0) ? 0: 1;

    $_by_attendance_status = "by_attendance_status";
    $_attendance_status = "attendance_status";
    $by_attendance_status = @(isset($_GET[$_by_attendance_status])) ? $_GET[$_by_attendance_status] : 0;
    $this_attendance_status = @(isset($_GET[$_attendance_status])) ? $_GET[$_attendance_status] : "all"; 
    $by_attendance_status = ($by_attendance_status == 0) ? 0: 1;

    $_by_member_id = "by_member_id";
    $_member_id = "member";
    $by_member_id = @(isset($_GET[$_by_member_id])) ? $_GET[$_by_member_id] : 0;
    $this_member_id = @(isset($_GET[$_member_id])) ? $_GET[$_member_id] : "all"; 
    $by_member_id = ($by_member_id == 0) ? 0: 1;

    $_accountInfoId = "acc_id";
    $accountInfoId = @(isset($_GET[$_accountInfoId])) ? $_GET[$_accountInfoId] : 0;

    $_user_id = "user_id";
    $user_id = @(isset($_GET[$_user_id])) ? $_GET[$_user_id] : 0;
?>