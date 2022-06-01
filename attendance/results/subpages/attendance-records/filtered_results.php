<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    
    $gender = @(isset($_GET['gender']) && !empty($_GET['gender'])) ? $_GET['gender']: 0;
    $status = @(isset($_GET['status']) && !empty($_GET['status'])) ? $_GET['status']: 0;
    $group_id = @(isset($_GET['group_id']) && !empty($_GET['group_id'])) ? $_GET['group_id']: 0;
    $subgroup_id = @(isset($_GET['subgroup_id']) && !empty($_GET['subgroup_id'])) ? $_GET['subgroup_id']: 0;
    $_quarter = @(isset($_GET['quarter']) && !empty($_GET['quarter'])) ? $_GET['quarter']: "all";
    $get_date = (isset($_GET['date_filter_input'])) ? date("Y-m-d", strtotime($_GET['date_filter_input']."/1/1")): date("Y-m-d");

    $isYear = true;

    if (isset($_GET['quarter'])) {
        if (empty($_GET['quarter'])) {
            $_GET['quarter'] = 1;
        }
    }

    $quarter_date = "gender=$gender&status=$status&quarter=$_quarter&date_filter_input=$get_date";
    if (isset($_GET['group'])) {
        $page_reset = "$page_url?group";
        $page_url = "$page_url?group$$quarter_date&group_id=$group_id";
    } else if (isset($_GET['subgroup'])) {
        $page_reset = "$page_url?subgroup";
        $page_url = "$page_url?subgroup&$quarter_date&subgroup_id=$subgroup_id";
    } else {
        $page_reset = "$page_url";
        $page_url = "$page_url?$quarter_date";
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
        <!-- <script> __set_cookies__("<?= $_by_member_id; ?>", "<?= (strtolower($this_member_id) == "all") ? 0: 1; ?>", $time = 2); </script> --> <?php
    }
?>