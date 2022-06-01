<?php
	session_start();

	require_once 'main.php';
	require_once DIRECTORY.'/settings/classes.php';

	if (isset($_COOKIE['pdb-client-user']) && !empty($_COOKIE['pdb-client-user'])) {
		require_once "include_logged.php";
	}
