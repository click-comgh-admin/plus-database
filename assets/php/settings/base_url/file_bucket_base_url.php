<?php
	if ($_SERVER['HTTP_HOST'] == "169.254.128.177") {
		define('FILE_BUCKET_BASE_URL', "http://169.254.128.177/AMG/plus_db/file_bucket/");
	} else if ($_SERVER['HTTP_HOST'] == "169.254.47.26") {
		define('FILE_BUCKET_BASE_URL', "http://169.254.47.26/AMG/plus_db/file_bucket/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.137.1") {
		define('FILE_BUCKET_BASE_URL', "http://192.168.137.1/AMG/plus_db/file_bucket/");
	} else if ($_SERVER['HTTP_HOST'] == "localhost") {
		define('FILE_BUCKET_BASE_URL', "http://localhost/AMG/plus_db/file_bucket/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.43.161") {
		define('FILE_BUCKET_BASE_URL', "http://192.168.43.161/AMG/plus_db/file_bucket/");
	} else if ($_SERVER['HTTP_HOST'] == "192.168.173.1") {
		define('FILE_BUCKET_BASE_URL', "http://192.168.173.1/AMG/plus_db/file_bucket/");
	} else if ($_SERVER['HTTP_HOST'] == "127.0.0.1") {
		define('FILE_BUCKET_BASE_URL', "http://127.0.0.1/AMG/plus_db/file_bucket/");
	} else {
		die("INVALID HOST");
	}
	
	$_SERVER['SERVER_NAME'] = "file_bucket.districtdb.com";
	// // $_SERVER['SERVER_NAME'] = "file_bucket.Akwaaba.com";

	// if ($_SERVER['SERVER_NAME'] == "file_bucket.districtdb.com") {
	// 	define('CLIENT_BASE_URL', "https://file_bucket.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "file_bucket.Akwaaba.com") {
	// 	define('CLIENT_BASE_URL', "https://file_bucket.Akwaaba.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "file_bucket.clockintoday.com") {
	// 	define('CLIENT_BASE_URL', "https://file_bucket.clockintoday.com/");
	// } else {
	// 	define('CLIENT_BASE_URL', "https://file_bucket.Akwaaba.com/");
	// }
	// print_r($_SERVER);
