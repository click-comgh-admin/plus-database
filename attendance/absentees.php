<?php
	require_once '../assets/php/include.php';
	require_once '../defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Attendance => Absentees");
    define('PAGE_DESC', "Absentees");
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
                                        <i class="pe-7s-note2 icon-gradient bg-grow-early">
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
                            function mark_attendance($member_id, $day, $account_id, $user_id, $class) { ?>
                                <button class="<?= $class; ?>"
                                    btn-submit-post=<?= json_encode(["member_id"=>$member_id, "day"=>$day, "client_id"=>$account_id, "admin_user_id"=>$user_id, "entry"=>1]); ?>
                                    btn-submit-post--confirm="Mark Member Present?"
                                    btn-submit-post--url="<?= API_BASE_URL."attendance/clients/clocking/mark"; ?>">
                                    <span class="pe-7s-check fa-5x icon-gradient bg-happy-itmeo"></span>
                                </button>
                            <?php }
                        ?>
                        <?php
                            if (isset($_GET['group'])) { ?>
                                <div class="row">
                                    <div class="col-md-6 col-xl-6">
                                        <a href="<?= Attendance_BaseUrl; ?>absentees" class="card btn btn-block mb-3 widget-content bg-sunny-morning">
                                            <div class="widget-content-wrapper text-white">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">All Members</div>
                                                    <div class="widget-subheading">View All Members.</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers text-white">
                                                        <div class="card shadow p-1">
                                                            <h4 class="pe-7s-users fa-1x icon-gradient bg-sunny-morning">
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-xl-6">
                                        <a href="<?= Attendance_BaseUrl; ?>absentees?subgroup" class="card btn btn-block mb-3 widget-content bg-arielle-smile">
                                            <div class="widget-content-wrapper text-white">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Members By Subgroup</div>
                                                    <div class="widget-subheading">Filter Members Based on their subgroup.</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers text-white">
                                                        <div class="card shadow p-1">
                                                            <h4 class="pe-7s-share fa-1x icon-gradient bg-arielle-smile">
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <?php 
                                    if (isset($_GET['send-followup'])) {
                                        require_once('subpages/absentees/send_followup.php');
                                    } else if (isset($_GET['enter-excuse'])) {
                                        require_once('subpages/absentees/enter_excuse.php');
                                    } else {
                                        require_once('subpages/absentees/absentees_groups.php');
                                    }
                            } else if (isset($_GET['subgroup'])) { ?>
                                <div class="row">
                                    <div class="col-md-6 col-xl-6">
                                        <a href="<?= Attendance_BaseUrl; ?>absentees?group" class="card btn btn-block mb-3 widget-content bg-midnight-bloom">
                                            <div class="widget-content-wrapper text-white">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Members By Group</div>
                                                    <div class="widget-subheading">Filter Members Based on their group.</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers text-white">
                                                        <div class="card shadow p-1">
                                                            <h4 class="pe-7s-vector fa-1x icon-gradient bg-midnight-bloom">
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-xl-6">
                                        <a href="<?= Attendance_BaseUrl; ?>absentees" class="card btn btn-block mb-3 widget-content bg-sunny-morning">
                                            <div class="widget-content-wrapper text-white">
                                                <div class="widget-content-left">
                                                <div class="widget-heading">All Members</div>
                                                    <div class="widget-subheading">View All Members.</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers text-white">
                                                        <div class="card shadow p-1">
                                                            <h4 class="pe-7s-users fa-1x icon-gradient bg-sunny-morning">
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <?php 
                                    if (isset($_GET['send-followup'])) {
                                        require_once('subpages/absentees/send_followup.php');
                                    } else if (isset($_GET['enter-excuse'])) {
                                        require_once('subpages/absentees/enter_excuse.php');
                                    } else {
                                        require_once('subpages/absentees/absentees_subgroups.php');
                                    }
                            } else { ?>
                                <div class="row">
                                    <div class="col-md-6 col-xl-6">
                                        <a href="<?= Attendance_BaseUrl; ?>absentees?group" class="card btn btn-block mb-3 widget-content bg-midnight-bloom">
                                            <div class="widget-content-wrapper text-white">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Members By Group</div>
                                                    <div class="widget-subheading">Filter Members Based on their group.</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers text-white">
                                                        <div class="card shadow p-1">
                                                            <h4 class="pe-7s-vector fa-1x icon-gradient bg-midnight-bloom">
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6 col-xl-6">
                                        <a href="<?= Attendance_BaseUrl; ?>absentees?subgroup" class="card btn btn-block mb-3 widget-content bg-arielle-smile">
                                            <div class="widget-content-wrapper text-white">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Members By Subgroup</div>
                                                    <div class="widget-subheading">Filter Members Based on their subgroup.</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers text-white">
                                                        <div class="card shadow p-1">
                                                            <h4 class="pe-7s-share fa-1x icon-gradient bg-arielle-smile">
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <?php 
                                    if (isset($_GET['send-followup'])) {
                                        require_once('subpages/absentees/send_followup.php');
                                    } else if (isset($_GET['enter-excuse'])) {
                                        require_once('subpages/absentees/enter_excuse.php');
                                    } else {
                                        require_once('subpages/absentees/absentees.php');
                                    }
                            }
                        ?>
                    </div>
                    <?php require_once '../assets/php/page_components/footer/footer.php'; ?>
                </div>
                
            </div>
        </div>
        <?php require_once '../assets/php/page_components/footer/js.php'; ?>
    </body>
</html>