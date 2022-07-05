<?php
	$actual_host = $_SERVER['SERVER_ADDR'];
	if (IN_PRODUCTION_MODE) {
		define('CLIENT_BASE_URL', "https://clocking.akwaabaapp.com/");
	} else {
		// define('CLIENT_BASE_URL', "http://$actual_host/AMG/plus_db/client_dashboard/");
		define('CLIENT_BASE_URL', "http://$actual_host:82/");
	}

	// $_SERVER['SERVER_NAME'] = "app.districtdb.com";
	$_SERVER['SERVER_NAME'] = "clocking.akwaabaapp.com";

	// if ($_SERVER['SERVER_NAME'] == "app.districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://app.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "clocking.akwaabaapp.com") {
	// 	define('CLIENT_BASE_URL', "https://clocking.akwaabaapp.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "admin.clockintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://admin.clockintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://clocking.akwaabaapp.com/");
	// }
	// print_r($_SERVER);

	// $_SERVER['SERVER_NAME'] = "nalag.Akwaaba.com";