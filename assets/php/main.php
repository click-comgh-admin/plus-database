<?php
	require_once 'settings/base_url.php';

	define('LoginCookie', strtolower(
		str_replace(
			"=", "", 
			base64_encode($_SERVER['REMOTE_ADDR'])."_in"
		)
	));
	// print_r(LoginCookie);	

	define('DIRECTORY', dirname(__file__));	
	define('BASE_DIRECTORY', dirname(dirname(dirname(__file__))));
	define('API_TOKEN', "dskjsdr43930934j34934304934n34kkd3d89sdjsdjb349");

	define('LOCATION_API_TOKEN', "d7be75e67a751342bf0bea90674c750201ade99089b");
	define('LOCATION_BASE_URL', "http://localhost/AMG/coCN/00000/saintsbook/location/");

	$load_countries = json_decode(file_get_contents(BASE_DIRECTORY."/assets/php/custom/country.json"));
	
	