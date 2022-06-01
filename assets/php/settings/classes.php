<?php

    use TemplateFile\TemplateFile;
    define('LocBaseUrl', CLIENT_BASE_URL."assets/php/custom/locale.php");   

	foreach (glob(DIRECTORY.'/classes'.'/*') as $file) {
        if (@file_exists($file)) {
            require_once $file;
        } else {
            throw new Error("file '$file' undable to load");
        }
    }

    $fx = new Functions();
    $tf = new TemplateFile();
    $ccApi = new ClickComApi(API_BASE_URL, LocBaseUrl);
    // print_r($tf);
