<?php
require_once 'webpack_loader/config.php';
require_once 'webpack_loader/loader.php';

// define('IN_PRODUCTION_MODE', true);
define('IN_PRODUCTION_MODE_PREFIX', IN_PRODUCTION_MODE
    ? "" : str_replace("/client_dashboard/", "", CLIENT_BASE_URL));

$config = DEFAULT_CONFIG;
$config['DEFAULT']['STATS_FILE'] = dirname(__DIR__) . "/webpack-stats.json";

// print_r(['$config' => $config]);
// print_r(['$_SERVER[HTTP_HOST]' => $_SERVER['HTTP_HOST']]);
if (($_SERVER['HTTP_HOST'] === '192.168.173.1:82') || ($_SERVER['HTTP_HOST'] === '45.80.152.213')) {
    define('_ASSET_REMOVE_STR_', ["/client_dashboard"]);
} else {
    define('_ASSET_REMOVE_STR_', []);
}

require_once 'webpack_loader/utils.php';

define("_Webpack_Pack_Shared_", Get_Webpack_Tags(
    'shared', prefix:IN_PRODUCTION_MODE_PREFIX, )
);
