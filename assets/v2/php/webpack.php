<?php
    require_once 'webpack_loader/config.php';
    require_once 'webpack_loader/loader.php';

    define('IN_PRODUCTION_MODE', false);
    define('IN_PRODUCTION_MODE_PREFIX', IN_PRODUCTION_MODE 
        ? "" : str_replace("/client_dashboard/", "", ClientBaseUrl));
    

    $config = DEFAULT_CONFIG;
    $config['DEFAULT']['STATS_FILE'] = dirname(__DIR__) . "/webpack-stats.json";
    
    // print_r(['$config' => $config]);
    define('_ASSET_REMOVE_STR_', []);
    // define('_ASSET_REMOVE_STR_', ["/client_dashboard"]);
    

    require_once 'webpack_loader/utils.php';

    define("_Webpack_Pack_Shared_", Get_Webpack_Tags(
        'shared', prefix: IN_PRODUCTION_MODE_PREFIX, )
    );
