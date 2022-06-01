<?php

use Encryptor\Encryptor;
$encryptor = new Encryptor("members", md5("members"));

$page = "attendance-status-assign";
$page_url = Current_BaseUrl . "$page";

$_by_member_id = "by_member_id";
$_member_id = "member_id";
if (isset($_GET[$_member_id])) {
    $getMid = $encryptor->decrypt($_GET[$_member_id]);
    $by_member_id = (int) $getMid;
    $this_member_id = ($by_member_id == 0) ? "all" : $by_member_id;
    $by_member_id = ($by_member_id == 0) ? 0 : 1;
    ?>
        <script> __set_cookies__("<?=$_member_id;?>", "<?=$this_member_id;?>", $time = 2); </script>
    <?php } else {
    $by_member_id = @(isset($_COOKIE[$_by_member_id])) ? $_COOKIE[$_by_member_id] : 0;
    $this_member_id = @(isset($_COOKIE[$_member_id])) ? $_COOKIE[$_member_id] : "all";
    $by_member_id = ($by_member_id == 0) ? 0 : 1;?>
        <script> __set_cookies__("<?=$_by_member_id;?>", "<?=(strtolower($this_member_id) == "all") ? 0 : 1;?>", $time = 2); </script> <?php
}

require_once "attendance-status-assign.php";
?>