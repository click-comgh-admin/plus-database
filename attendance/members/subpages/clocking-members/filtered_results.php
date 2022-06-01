<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    $_by_group_id = "by_group_id";
    $_group_id = "group_id";
    if (isset($_GET[$_group_id])) { 
        $by_group_id = (int)$_GET[$_group_id];
        $this_group_id = ($by_group_id == 0) ? "all": $by_group_id;
        $by_group_id = ($by_group_id == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_group_id = @(isset($_COOKIE[$_by_group_id])) ? $_COOKIE[$_by_group_id] : 0;
        $this_group_id = @(isset($_COOKIE[$_group_id])) ? $_COOKIE[$_group_id] : "all"; 
        $by_group_id = ($by_group_id == 0) ? 0: 1;?>
        <?php
    }

    $_by_subgroup_id = "by_subgroup_id";
    $_subgroup_id = "subgroup_id";
    if (isset($_GET[$_subgroup_id])) { 
        $by_subgroup_id = (int)$_GET[$_subgroup_id];
        $this_subgroup_id = ($by_subgroup_id == 0) ? "all": $by_subgroup_id;
        $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_subgroup_id = @(isset($_COOKIE[$_by_subgroup_id])) ? $_COOKIE[$_by_subgroup_id] : 0;
        $this_subgroup_id = @(isset($_COOKIE[$_subgroup_id])) ? $_COOKIE[$_subgroup_id] : "all"; 
        $by_subgroup_id = ($by_subgroup_id == 0) ? 0: 1;?>
        <?php
    }

    $_by_gender = "by_gender";
    $_gender = "gender";
    if (isset($_GET[$_gender])) { 
        $by_gender = (int)$_GET[$_gender];
        $this_gender = ($by_gender == 0) ? "all": $by_gender;
        $by_gender = ($by_gender == 0) ? 0: 1;
        ?>
    <?php } else {
        $by_gender = @(isset($_COOKIE[$_by_gender])) ? $_COOKIE[$_by_gender] : 0;
        $this_gender = @(isset($_COOKIE[$_gender])) ? $_COOKIE[$_gender] : "all"; 
        $by_gender = ($by_gender == 0) ? 0: 1;?>
        <?php
    }
    
?>