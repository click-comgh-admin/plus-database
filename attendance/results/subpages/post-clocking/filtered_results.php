<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    $_selected_date = "selected_date";
    if (isset($_GET[$_selected_date])) { ?>
        <script> __set_cookies__("<?= $_selected_date; ?>", "<?= $_GET[$_selected_date]; ?>", $time = 2); </script>
    <?php }
    
    $today = date("Y/m/d");
    $selected_date = @(isset($_COOKIE[$_selected_date])) ? date("Y/m/d", strtotime($_COOKIE[$_selected_date])) :$today;

    $_start_time = "start_time";
    $_end_time = "end_time";

    if (isset($_GET[$_start_time])) { ?>
        <script> __set_cookies__("<?= $_start_time; ?>", "<?= $_GET[$_start_time]; ?>", $time = 2); </script>
    <?php }
    if (isset($_GET[$_end_time])) { ?>
        <script> __set_cookies__("<?= $_end_time; ?>", "<?= $_GET[$_end_time]; ?>", $time = 2); </script>
    <?php }

    $start_time = @(isset($_COOKIE[$_start_time])) ? date("H:i", strtotime($_COOKIE[$_start_time])) : "";
    $end_time = @(isset($_COOKIE[$_end_time])) ? date("H:i", strtotime($_COOKIE[$_end_time])) : "";
    $by_time = ($start_time === "" || $end_time === "") ? 0: 1;

    $_check_out_start_time = "check_out_start_time";
    $_check_out_end_time = "check_out_end_time";

    if (isset($_GET[$_check_out_start_time])) { ?>
        <script> __set_cookies__("<?= $_check_out_start_time; ?>", "<?= $_GET[$_check_out_start_time]; ?>", $time = 2); </script>
    <?php }
    if (isset($_GET[$_check_out_end_time])) { ?>
        <script> __set_cookies__("<?= $_check_out_end_time; ?>", "<?= $_GET[$_check_out_end_time]; ?>", $time = 2); </script>
    <?php }

    $check_out_start_time = @(isset($_COOKIE[$_check_out_start_time])) ? date("H:i", strtotime($_COOKIE[$_check_out_start_time])) : "";
    $check_out_end_time = @(isset($_COOKIE[$_check_out_end_time])) ? date("H:i", strtotime($_COOKIE[$_check_out_end_time])) : "";
    $by_check_out_time = ($check_out_start_time === "" || $check_out_end_time === "") ? 0: 1;
    
    $_by_group_id = "by_group_id";
    $_group_id = "group_id";
    if (isset($_GET[$_group_id])) { 
        $by_group_id = (int)$_GET[$_group_id];
        $this_group_id = ($by_group_id == 0) ? "all": $by_group_id;
        $by_group_id = ($by_group_id == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_group_id; ?>", "<?= $this_group_id; ?>", $time = 2); </script>
    <?php } else {
        $by_group_id = @(isset($_COOKIE[$_by_group_id])) ? $_COOKIE[$_by_group_id] : 0;
        $this_group_id = @(isset($_COOKIE[$_group_id])) ? $_COOKIE[$_group_id] : "all"; 
        $by_group_id = ($by_group_id == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_group_id; ?>", "<?= (strtolower($this_group_id) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_subgroup_id = "by_subgroup_id";
    $_subgroup_id = "subgroup_id";
    if (isset($_GET[$_subgroup_id])) { 
        $by_subgroup_id = (int)$_GET[$_subgroup_id];
        $this_subgroup_id = ($by_subgroup_id == 0) ? "all": $by_subgroup_id;
        $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_subgroup_id; ?>", "<?= $this_subgroup_id; ?>", $time = 2); </script>
    <?php } else {
        $by_subgroup_id = @(isset($_COOKIE[$_by_subgroup_id])) ? $_COOKIE[$_by_subgroup_id] : 0;
        $this_subgroup_id = @(isset($_COOKIE[$_subgroup_id])) ? $_COOKIE[$_subgroup_id] : "all"; 
        $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_subgroup_id; ?>", "<?= (strtolower($this_subgroup_id) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_clocking_medium = "by_clocking_medium";
    $_clocking_medium = "clocking_medium";
    if (isset($_GET[$_clocking_medium])) { 
        $by_clocking_medium = (int)$_GET[$_clocking_medium];
        $this_clocking_medium = ($by_clocking_medium == 0) ? "all": $by_clocking_medium;
        $by_clocking_medium = ($by_clocking_medium == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_clocking_medium; ?>", "<?= $this_clocking_medium; ?>", $time = 2); </script>
    <?php } else {
        $by_clocking_medium = @(isset($_COOKIE[$_by_clocking_medium])) ? $_COOKIE[$_by_clocking_medium] : 0;
        $this_clocking_medium = @(isset($_COOKIE[$_clocking_medium])) ? $_COOKIE[$_clocking_medium] : "all"; 
        $by_clocking_medium = ($by_clocking_medium == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_clocking_medium; ?>", "<?= (strtolower($this_clocking_medium) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_web_status = "by_web_status";
    $_web_status = "web_status";
    if (isset($_GET[$_web_status])) { 
        $by_web_status = (int)$_GET[$_web_status];
        $this_web_status = ($by_web_status == 0) ? "all": $by_web_status;
        $by_web_status = ($by_web_status == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_web_status; ?>", "<?= $this_web_status; ?>", $time = 2); </script>
    <?php } else {
        $by_web_status = @(isset($_COOKIE[$_by_web_status])) ? $_COOKIE[$_by_web_status] : 0;
        $this_web_status = @(isset($_COOKIE[$_web_status])) ? $_COOKIE[$_web_status] : "all"; 
        $by_web_status = ($by_web_status == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_web_status; ?>", "<?= (strtolower($this_web_status) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_attendance_status = "by_attendance_status";
    $_attendance_status = "attendance_status";
    if (isset($_GET[$_attendance_status])) { 
        $by_attendance_status = (int)$_GET[$_attendance_status];
        $this_attendance_status = ($by_attendance_status == 0) ? "all": $by_attendance_status;
        $by_attendance_status = ($by_attendance_status == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_attendance_status; ?>", "<?= $this_attendance_status; ?>", $time = 2); </script>
    <?php } else {
        $by_attendance_status = @(isset($_COOKIE[$_by_attendance_status])) ? $_COOKIE[$_by_attendance_status] : 0;
        $this_attendance_status = @(isset($_COOKIE[$_attendance_status])) ? $_COOKIE[$_attendance_status] : "all"; 
        $by_attendance_status = ($by_attendance_status == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_attendance_status; ?>", "<?= (strtolower($this_attendance_status) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }

    $_by_member_id = "by_member_id";
    $_member_id = "member";
    if (isset($_GET[$_member_id])) { 
        $getMid = $encryptor->decrypt($_GET[$_member_id]);
        $by_member_id = (int)$getMid;
        $this_member_id = ($by_member_id == 0) ? "all": $by_member_id;
        $by_member_id = ($by_member_id == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_member_id; ?>", "<?= $this_member_id; ?>", $time = 2); </script>
    <?php } else {
        $by_member_id = @(isset($_COOKIE[$_by_member_id])) ? $_COOKIE[$_by_member_id] : 0;
        $this_member_id = @(isset($_COOKIE[$_member_id])) ? $_COOKIE[$_member_id] : "all"; 
        $by_member_id = ($by_member_id == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_member_id; ?>", "<?= (strtolower($this_member_id) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }
?>