<?php
ob_start();
require_once 'assets/php/include.php';
require_once 'defs.php';

define('CookieIndex', 'pdb-client-user');
define('__PAGE', isset($_GET['page']) ? urlencode($_GET['page']) : "");
define('__CODE', isset($_GET['code']) ? $_GET['code'] : "");
// http://192.168.173.1/AMG/plus_db/client_dashboard/app-reroute?page=update-member-profile%2Fmember-accounts&code=@66804-0f96_bb79~df0b$2y0ae3$35505
use Encryptor\Encryptor;

$ccApi = new ClickComApi(API_BASE_URL, LocBaseUrl);
if (isset($_COOKIE[CookieIndex]) && !empty($_COOKIE[CookieIndex])) {
    setcookie(CookieIndex, null, null + 0 + 0 * 0 * 0, '/', null, null, false);
    header("Location: " . CLIENT_BASE_URL . "app-reroute?page=" . __PAGE . "&code=" . __CODE);
} else {
    $get_string = "login/get-user-bycode?code=" . __CODE;
    $userId = @$ccApi->fetch_from($get_string, function ($userInfo) {
        return isset($userInfo[0]['user']['id'])
        ? (int) $userInfo[0]['user']['id'] : 0;
    }, $debug = false);
    // print_r(['$userId' => $userId]);
    $encryptor = new Encryptor("clients", md5("clients"));
    $userId = $encryptor->encrypt($userId);
    $isSet = setcookie(
        CookieIndex, $userId,
        time() + (86400 * 30), "/"
    );
    if ($isSet === true) {
        $url = CLIENT_BASE_URL . urldecode(__PAGE);
        header("Location: {$url}");

        ob_end_flush();

    } else {
        header("Location: {$url}"); // UNCOMMENT LATER
    }

}
