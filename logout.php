<?php
	ob_start();
	require_once 'assets/php/include.php';
	require_once 'defs.php';

	if (isset($_COOKIE['pdb-client-user']) && !empty($_COOKIE['pdb-client-user'])) {
        setcookie("pdb-client-user", null, null + 0 + 0 * 0 * 0, '/', NULL, NULL, FALSE);
		if (isset($_COOKIE['client_tokenLogin']) && !empty($_COOKIE['client_tokenLogin'])) {
			@setcookie("client_tokenLogin", null, null + 0 + 0 * 0 * 0, '/', NULL, NULL, FALSE);
		}
		if (isset($_COOKIE['pdb-active-branch']) && !empty($_COOKIE['pdb-active-branch'])) {
			@setcookie("pdb-active-branch", null, null + 0 + 0 * 0 * 0, '/', NULL, NULL, FALSE);
		}
		header("Location: " . ClientBaseUrl);
	}
?>