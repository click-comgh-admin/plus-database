<?php
    require_once ('../../main.php');
    require_once DIRECTORY.'/settings/classes.php';

    $base_url = API_BASE_URL;
    $token = API_TOKEN;
?>
<pre>
    <hr>
        <h3>Clients</h3>
    <hr>
    <?php
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/office/reminders", $curl, $method="POST", $post_data=[]);
        print_r($response);
        $err = curl_error($curl);
        curl_close($curl);        
        print_r($err);
    ?>
</pre>