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
    $start_date = @(isset($_COOKIE[$_start_date])) ? date("Y/m/d", strtotime($_COOKIE[$_start_date])) : $fiveDaysBefore;
    $end_date = @(isset($_COOKIE[$_end_date])) ? date("Y/m/d", strtotime($_COOKIE[$_end_date])) :$today;

    $_by_meeting_id = "by_meeting_id";
    $_meeting_id = "meeting_id";
    if (isset($_GET[$_meeting_id])) { 
        $by_meeting_id = (int)$_GET[$_meeting_id];
        $this_meeting_id = ($by_meeting_id == 0) ? "all": $by_meeting_id;
        $by_meeting_id = ($by_meeting_id == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_meeting_id; ?>", "<?= $this_meeting_id; ?>", $time = 2); </script> -->
    <?php } else {
        $by_meeting_id = @(isset($_COOKIE[$_by_meeting_id])) ? $_COOKIE[$_by_meeting_id] : 0;
        $this_meeting_id = @(isset($_COOKIE[$_meeting_id])) ? $_COOKIE[$_meeting_id] : "all"; 
        $by_meeting_id = ($by_meeting_id == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_meeting_id; ?>", "<?= (strtolower($this_meeting_id) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    $_by_group_id = "by_group_id";
    $_group_id = "group_id";
    if (isset($_GET[$_group_id])) { 
        $by_group_id = (int)$_GET[$_group_id];
        $this_group_id = ($by_group_id == 0) ? "all": $by_group_id;
        $by_group_id = ($by_group_id == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_group_id; ?>", "<?= $this_group_id; ?>", $time = 2); </script> -->
    <?php } else {
        $by_group_id = @(isset($_COOKIE[$_by_group_id])) ? $_COOKIE[$_by_group_id] : 0;
        $this_group_id = @(isset($_COOKIE[$_group_id])) ? $_COOKIE[$_group_id] : "all"; 
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
        $by_subgroup_id = @(isset($_COOKIE[$_by_subgroup_id])) ? $_COOKIE[$_by_subgroup_id] : 0;
        $this_subgroup_id = @(isset($_COOKIE[$_subgroup_id])) ? $_COOKIE[$_subgroup_id] : "all"; 
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
        $by_gender = @(isset($_COOKIE[$_by_gender])) ? $_COOKIE[$_by_gender] : 0;
        $this_gender = @(isset($_COOKIE[$_gender])) ? $_COOKIE[$_gender] : "all"; 
        $by_gender = ($by_gender == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_gender; ?>", "<?= (strtolower($this_gender) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
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
        $by_member_id = @(isset($_COOKIE[$_by_member_id])) ? $_COOKIE[$_by_member_id] : 0;
        $this_member_id = @(isset($_COOKIE[$_member_id])) ? $_COOKIE[$_member_id] : "all"; 
        $by_member_id = ($by_member_id == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_member_id; ?>", "<?= (strtolower($this_member_id) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }

    $_by_attendance_status_id = "by_attendance_status_id";
    $_attendance_status_id = "attendance_status_id";
    if (isset($_GET[$_attendance_status_id])) { 
        $by_attendance_status_id = (int)$_GET[$_attendance_status_id];
        $this_attendance_status_id = ($by_attendance_status_id == 0) ? "all": $by_attendance_status_id;
        $by_attendance_status_id = ($by_attendance_status_id == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_attendance_status_id; ?>", "<?= $this_attendance_status_id; ?>", $time = 2); </script> -->
    <?php } else {
        $by_attendance_status_id = @(isset($_COOKIE[$_by_attendance_status_id])) ? $_COOKIE[$_by_attendance_status_id] : 0;
        $this_attendance_status_id = @(isset($_COOKIE[$_attendance_status_id])) ? $_COOKIE[$_attendance_status_id] : "all"; 
        $by_attendance_status_id = ($by_attendance_status_id == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_attendance_status_id; ?>", "<?= (strtolower($this_attendance_status_id) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }
    
    $_by_user_meeting_day_id = "by_user_meeting_day_id";
    $_user_meeting_day_id = "user_meeting_day";
    if (isset($_GET[$_user_meeting_day_id])) { 
        $getMid = $encryptor->decrypt($_GET[$_user_meeting_day_id]);
        $by_user_meeting_day_id = (int)$getMid;
        $this_user_meeting_day_id = ($by_user_meeting_day_id == 0) ? "all": $by_user_meeting_day_id;
        $by_user_meeting_day_id = ($by_user_meeting_day_id == 0) ? 0: 1;
        ?>
        <!-- <script> __set_cookies__("<?= $_user_meeting_day_id; ?>", "<?= $this_user_meeting_day_id; ?>", $time = 2); </script> -->
    <?php } else {
        $by_user_meeting_day_id = @(isset($_COOKIE[$_by_user_meeting_day_id])) ? $_COOKIE[$_by_user_meeting_day_id] : 0;
        $this_user_meeting_day_id = @(isset($_COOKIE[$_user_meeting_day_id])) ? $_COOKIE[$_user_meeting_day_id] : "all"; 
        $by_user_meeting_day_id = ($by_user_meeting_day_id == 0) ? 0: 1;?>
        <!-- <script> __set_cookies__("<?= $_by_user_meeting_day_id; ?>", "<?= (strtolower($this_user_meeting_day_id) == "all") ? 0: 1; ?>", $time = 2); </script>  -->
        <?php
    }
?>