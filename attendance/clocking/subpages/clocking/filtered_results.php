<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    $_selected_date = "selected_date";
    if (isset($_GET[$_selected_date])) { ?>
        <script> __set_cookies__("<?= $_selected_date; ?>", "<?= $_GET[$_selected_date]; ?>", $time = 2); </script>
    <?php }
    
    $today = date("Y/m/d");
    $selected_date = @(isset($_GET[$_selected_date])) ? date("Y/m/d", strtotime($_GET[$_selected_date])) :$today;

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
        <!-- <script> __set_cookies__("<?= $_by_member_id; ?>", "<?= (strtolower($this_member_id) == "all") ? 0: 1; ?>", $time = 2); </script> -->
        <?php
    }
?>