<?php
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

    $_start_date = "start_date";
    $today = date("Y/m/d");
    $start_date = @(isset($_GET[$_start_date])) ? date("Y/m/d", strtotime($_GET[$_start_date])) : $today;

    $_accountInfoId = "acc_id";
    $accountInfoId = @(isset($_GET[$_accountInfoId])) ? $_GET[$_accountInfoId] : 0;
?>