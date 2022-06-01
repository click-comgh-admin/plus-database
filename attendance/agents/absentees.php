<?php
	require_once '../../assets/php/include.php';
	require_once '../../defs.php';
    
    define('PAGE_TITLE', "Attendance => Absentees");
    define('PAGE_DESC', "View Attendance Absentees");
?>
<!doctype html>
<html lang="en">
    <?php require_once '../../assets/php/page_components/header/head.php'; ?>
    <body>
        <div class="app-container app-theme-white">
            <div class="app-main">
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="pe-7s-phone icon-gradient bg-grow-early">
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
                            define("Current_BaseUrl", CLIENT_BASE_URL."attendance/results/");
                            define("Current_BaseDir", BASE_DIRECTORY."/attendance/results/");
                            
                            
                        ?>
                        <?php
                            require_once('subpages/attendee_absentees/absentees_view.php');
                        ?>
                    </div>
                    <?php require_once '../../assets/php/page_components/footer/footer.php'; ?>
                </div>
            </div>
        </div>
        <?php require_once '../../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>