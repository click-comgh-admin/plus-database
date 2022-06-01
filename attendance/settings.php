<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Attendance => Settings");
    define('PAGE_DESC', "Setup Attendance");
?>
<!doctype html>
<html lang="en">
    <?php require_once '../assets/php/page_components/header/head.php'; ?>
    <body>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <?php require_once '../assets/php/page_components/header/navbar.php'; ?>
            <?php require_once '../assets/php/page_components/settings.php'; ?>
            <div class="app-main">
                <?php require_once '../assets/php/page_components/sidebar.php'; ?>
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-config icon-gradient bg-grow-early">
                                        </i>
                                    </div>
                                    <div>
                                        <?= PAGE_TITLE; ?>
                                        <div class="page-title-subheading"><?= PAGE_DESC; ?></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php
                            if ($account_status['is_active'] === false) {
                                require_once '../assets/php/page_components/account_inactive.php';
                                require_once '../assets/php/page_components/footer/close.php';
                                die();
                            }
                            $_appPage = 0;
                            foreach ($appPages as $key => $page) {
                                if ((string)strtolower($page['pdpc_page']) === "attendance") {
                                    $_appPage = $page['pdpc_id'];
                                }
                            }
                            if (in_array($_appPage, $my_access_levels) === false) {
                                require_once BASE_DIRECTORY.'/assets/php/page_components/no_page_access.php';
                                require_once BASE_DIRECTORY.'/assets/php/page_components/footer/close.php';
                                die();
                            }
                            define("Attendance_BaseUrl", CLIENT_BASE_URL."attendance/");

                        ?>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-6">
                                <div class="mb-3 main-card card shadow">
                                    <div class="card-header">
                                        <div class="card-header-title">
                                            Set Expected Attendance Days. 
                                            <i class="text-info"> Members Who Fall Below This Number Will be Deemed Inactive.</i>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <?php
                                            require_once "subpages/settings/expected_attendance_days.php";
                                        ?>
                                    </div>
                                    <div class="card-footer">
                                        <div class="btn btn-actions-pane-right">--</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="mb-3 main-card card shadow">
                                    <div class="card-header">
                                        <div class="card-header-title">
                                            Set Meeting Days
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <?php
                                            require_once "subpages/settings/meeting_days.php";
                                        ?>
                                    </div>
                                    <div class="card-footer">
                                        <div class="btn btn-actions-pane-right">--</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php require_once '../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>