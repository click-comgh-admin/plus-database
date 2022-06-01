<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    $_start_date = "start_date";
    $_end_date = "end_date";

    if (isset($_GET[$_start_date])) { ?>
        <!-- <script> __set_cookies__("<?= $_start_date; ?>", "<?= $_GET[$_start_date]; ?>", $time = 2); </script> -->
    <?php }
    if (isset($_GET[$_end_date])) { ?>
        <!-- <script> __set_cookies__("<?= $_end_date; ?>", "<?= $_GET[$_end_date]; ?>", $time = 2); </script> -->
    <?php }

    $fiveDaysBefore = date("Y/m/").((int)date("d")-5);
    $today = date("Y/m/d");
    $start_date = @(isset($_GET[$_start_date])) ? date("Y/m/d", strtotime($_GET[$_start_date])) : $fiveDaysBefore;
    $end_date = @(isset($_GET[$_end_date])) ? date("Y/m/d", strtotime($_GET[$_end_date])) :$today;

    $_start_time = "start_time";
    $_end_time = "end_time";

    if (isset($_GET[$_start_time])) { ?>
        <!-- <script> __set_cookies__("<?= $_start_time; ?>", "<?= $_GET[$_start_time]; ?>", $time = 2); </script> -->
    <?php }
    if (isset($_GET[$_end_time])) { ?>
        <!-- <script> __set_cookies__("<?= $_end_time; ?>", "<?= $_GET[$_end_time]; ?>", $time = 2); </script> -->
    <?php }

    $start_time = @(isset($_GET[$_start_time])) ? date("H:i", strtotime($_GET[$_start_time])) : "";
    $end_time = @(isset($_GET[$_end_time])) ? date("H:i", strtotime($_GET[$_end_time])) : "";
    $by_time = ($start_time === "" || $end_time === "") ? 0: 1;

    $_check_out_start_time = "check_out_start_time";
    $_check_out_end_time = "check_out_end_time";

    if (isset($_GET[$_check_out_start_time])) { ?>
        <!-- <script> __set_cookies__("<?= $_check_out_start_time; ?>", "<?= $_GET[$_check_out_start_time]; ?>", $time = 2); </script> -->
    <?php }
    if (isset($_GET[$_check_out_end_time])) { ?>
        <!-- <script> __set_cookies__("<?= $_check_out_end_time; ?>", "<?= $_GET[$_check_out_end_time]; ?>", $time = 2); </script> -->
    <?php }

    $check_out_start_time = @(isset($_GET[$_check_out_start_time])) ? date("H:i", strtotime($_GET[$_check_out_start_time])) : "";
    $check_out_end_time = @(isset($_GET[$_check_out_end_time])) ? date("H:i", strtotime($_GET[$_check_out_end_time])) : "";
    $by_check_out_time = ($check_out_start_time === "" || $check_out_end_time === "") ? 0: 1;
    
    $_by_group_id = "by_group_id";
    $_group_id = "group_id";
    if (isset($_GET[$_group_id])) { 
        $by_group_id = (int)$_GET[$_group_id];
        $this_group_id = ($by_group_id == 0) ? "all": $by_group_id;
        $by_group_id = ($by_group_id == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_group_id; ?>", "<?= $this_group_id; ?>", $time = 2); </script> -->
    <?php } else {
        $by_group_id = @(isset($_GET[$_by_group_id])) ? $_GET[$_by_group_id] : 0;
        $this_group_id = @(isset($_GET[$_group_id])) ? $_GET[$_group_id] : "all"; 
        $by_group_id = ($by_group_id == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_group_id; ?>", "<?= (strtolower($this_group_id) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    $_by_subgroup_id = "by_subgroup_id";
    $_subgroup_id = "subgroup_id";
    if (isset($_GET[$_subgroup_id])) { 
        $by_subgroup_id = (int)$_GET[$_subgroup_id];
        $this_subgroup_id = ($by_subgroup_id == 0) ? "all": $by_subgroup_id;
        $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_subgroup_id; ?>", "<?= $this_subgroup_id; ?>", $time = 2); </script> -->
    <?php } else {
        $by_subgroup_id = @(isset($_GET[$_by_subgroup_id])) ? $_GET[$_by_subgroup_id] : 0;
        $this_subgroup_id = @(isset($_GET[$_subgroup_id])) ? $_GET[$_subgroup_id] : "all"; 
        $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_subgroup_id; ?>", "<?= (strtolower($this_subgroup_id) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    $_by_gender = "by_gender";
    $_gender = "gender";
    if (isset($_GET[$_gender])) { 
        $by_gender = (int)$_GET[$_gender];
        $this_gender = ($by_gender == 0) ? "all": $by_gender;
        $by_gender = ($by_gender == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_gender; ?>", "<?= $this_gender; ?>", $time = 2); </script> -->
    <?php } else {
        $by_gender = @(isset($_GET[$_by_gender])) ? $_GET[$_by_gender] : 0;
        $this_gender = @(isset($_GET[$_gender])) ? $_GET[$_gender] : "all"; 
        $by_gender = ($by_gender == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_gender; ?>", "<?= (strtolower($this_gender) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    $_by_user_meeting_day = "by_user_meeting_day";
    $_user_meeting_day = "user_meeting_day";
    if (isset($_GET[$_user_meeting_day])) { 
        $by_user_meeting_day = (int)$_GET[$_user_meeting_day];
        $this_user_meeting_day = ($by_user_meeting_day == 0) ? "all": $by_user_meeting_day;
        $by_user_meeting_day = ($by_user_meeting_day == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_user_meeting_day; ?>", "<?= $this_user_meeting_day; ?>", $time = 2); </script> -->
    <?php } else {
        $by_user_meeting_day = @(isset($_GET[$_by_user_meeting_day])) ? $_GET[$_by_user_meeting_day] : 0;
        $this_user_meeting_day = @(isset($_GET[$_user_meeting_day])) ? $_GET[$_user_meeting_day] : "all"; 
        $by_user_meeting_day = ($by_user_meeting_day == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_user_meeting_day; ?>", "<?= (strtolower($this_user_meeting_day) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    $_by_attendance_status = "by_attendance_status";
    $_attendance_status = "attendance_status";
    if (isset($_GET[$_attendance_status])) { 
        $by_attendance_status = (int)$_GET[$_attendance_status];
        $this_attendance_status = ($by_attendance_status == 0) ? "all": $by_attendance_status;
        $by_attendance_status = ($by_attendance_status == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_attendance_status; ?>", "<?= $this_attendance_status; ?>", $time = 2); </script> -->
    <?php } else {
        $by_attendance_status = @(isset($_GET[$_by_attendance_status])) ? $_GET[$_by_attendance_status] : 0;
        $this_attendance_status = @(isset($_GET[$_attendance_status])) ? $_GET[$_attendance_status] : "all"; 
        $by_attendance_status = ($by_attendance_status == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_attendance_status; ?>", "<?= (strtolower($this_attendance_status) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    $_by_member_id = "by_member_id";
    $_member_id = "member";
    if (isset($_GET[$_member_id])) { 
        $getMid = $encryptor->decrypt($_GET[$_member_id]);
        $by_member_id = (int)$getMid;
        $this_member_id = ($by_member_id == 0) ? "all": $by_member_id;
        $by_member_id = ($by_member_id == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_member_id; ?>", "<?= $this_member_id; ?>", $time = 2); </script> -->
    <?php } else {
        $by_member_id = @(isset($_GET[$_by_member_id])) ? $_GET[$_by_member_id] : 0;
        $this_member_id = @(isset($_GET[$_member_id])) ? $_GET[$_member_id] : "all"; 
        $by_member_id = ($by_member_id == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_member_id; ?>", "<?= (strtolower($this_member_id) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    

?>