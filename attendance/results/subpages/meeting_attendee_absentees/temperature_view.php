<?php
    use Encryptor\Encryptor;

    if (isset($_GET['member']) && !empty(@$_GET['member'])) {
    
        $encryptor = new Encryptor("members", md5("members"));
        $member_id = (int)$encryptor->decrypt(@$_GET['member']);

        if (isset($_GET['meeting_id']) && !empty(@$_GET['meeting_id'])) {
            $meeting_id = (int)@$_GET['meeting_id'];

            if (isset($_GET['type']) && !empty(@$_GET['type'])) {
                $type_id = (int)@$_GET['type'];
                
                require_once "temperature_page.php";
            } else {
                require_once "temperature_picker.php";
            }
            
        } else {

            if (isset($_GET['type']) && !empty(@$_GET['type'])) {
                $type_id = (int)@$_GET['type'];
                
                require_once "temperature_page.php";
            } else {
                require_once "temperature_picker.php";
            }
        }
    } else {
        require_once "temperature_error.php";
        echo TemperatureError($error = "No Member Found!");
    }
?>