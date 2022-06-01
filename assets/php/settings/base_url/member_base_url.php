<?php
	if ($_SERVER['HTTP_HOST'] == "169.254.128.177") {
		define('MEMBER_BASE_URL', "http://169.254.128.177/AMG/plus_db/member_dashboard/");
	} else if ($_SERVER['HTTP_HOST'] == "169.254.47.26") {
		define('MEMBER_BASE_URL', "http://169.254.47.26/AMG/plus_db/member_dashboard/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.137.1") {
		define('MEMBER_BASE_URL', "http://192.168.137.1/AMG/plus_db/member_dashboard/");
	} else if ($_SERVER['HTTP_HOST'] == "localhost") {
		define('MEMBER_BASE_URL', "http://localhost/AMG/plus_db/member_dashboard/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.43.161") {
		define('MEMBER_BASE_URL', "http://192.168.43.161/AMG/plus_db/member_dashboard/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.173.1") {
		define('MEMBER_BASE_URL', "http://192.168.173.1/AMG/plus_db/member_dashboard/");
	} else if ($_SERVER['HTTP_HOST'] == "127.0.0.1") {
		define('MEMBER_BASE_URL', "http://127.0.0.1/AMG/plus_db/member_dashboard/");
	} else {
		die("INVALID HOST");
	}
	
	$_SERVER['SERVER_NAME'] = "staff.districtdb.com";
	// // $_SERVER['SERVER_NAME'] = "member.Akwaaba.com";

	// if ($_SERVER['SERVER_NAME'] == "staff.districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://staff.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "member.Akwaaba.com") {
	// 	define('CLIENT_BASE_URL', "https://member.Akwaaba.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "user.clockintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://user.clockintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://member.Akwaaba.com/");
	// }
	// print_r($_SERVER);