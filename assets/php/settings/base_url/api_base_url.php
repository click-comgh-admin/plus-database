<?php
	if ($_SERVER['HTTP_HOST'] == "169.254.128.177") {
		define('API_BASE_URL', "http://169.254.128.177/AMG/plus_db/api/");
	} else if ($_SERVER['HTTP_HOST'] == "169.254.47.26") {
		define('API_BASE_URL', "http://169.254.47.26/AMG/plus_db/api/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.137.1") {
		define('API_BASE_URL', "http://192.168.137.1/AMG/plus_db/api/");
	} else if ($_SERVER['HTTP_HOST'] == "localhost") {
		define('API_BASE_URL', "http://localhost/AMG/plus_db/api/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.43.161") {
		define('API_BASE_URL', "http://192.168.43.161/AMG/plus_db/api/");
	} else if ($_SERVER['HTTP_HOST'] == "127.0.0.1") {
		define('API_BASE_URL', "http://127.0.0.1/AMG/plus_db/api/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.173.1") {
		define('API_BASE_URL', "http://192.168.173.1/AMG/plus_db/api/");
	} else {
		die("INVALID HOST");
	}
	// print_r($_SERVER);

	$_SERVER['SERVER_NAME'] = "api.districtdb.com";
	// // $_SERVER['SERVER_NAME'] = "api.Akwaaba.com";

	// if ($_SERVER['SERVER_NAME'] == "api.districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://api.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "api.Akwaaba.com") {
	// 	define('CLIENT_BASE_URL', "https://api.Akwaaba.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "api.clockintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://api.clockintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://api.Akwaaba.com/");
	// }