<script>
console.log(navigator.mediaDevices)
</script>
<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    define('PAGE_TITLE', "Communications Center");
    define('PAGE_DESC', "Send And View Messages");
?>
<!doctype html>
<html lang="en">
<?php require_once 'assets/php/page_components/header/head.php'; ?>

<body>
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <?php require_once 'assets/php/page_components/header/navbar.php'; ?>
        <?php require_once 'assets/php/page_components/settings.php'; ?>
        <div class="app-main">
            <?php require_once 'assets/php/page_components/sidebar.php'; ?>
            <div class="app-main__outer">
                <div class="app-main__inner">
                    <div class="app-page-title">
                        <div class="page-title-wrapper">
                            <div class="page-title-heading">
                                <div class="page-title-icon">
                                    <i class="pe-7s-mail-open-file icon-gradient bg-happy-green">
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
                            require_once 'assets/php/page_components/account_inactive.php';
                            require_once 'assets/php/page_components/footer/close.php';
                            die();
                        }
                        define("ComBaseUrl", CLIENT_BASE_URL."communications/");
                        define("ComBaseUrlAlt", CLIENT_BASE_URL."communication");
                    ?>
                    <div class="row"><span class="fa fa-play"></span>
                        <div class="col-md-12 col-lg-12">
                            <form method="POST"
                                action="<?= API_BASE_URL."communications/clients/attachments/recordings"; ?>"
                                make-general-posts--recorder="Save">
                                <?php
                                    use AudioRecorder\AudioRecorder;
                                    $aR = new AudioRecorder();
                                    echo $aR->show();
                                ?>
                                <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                            </form>
                        </div>
                    </div>
                </div>
                <?php require_once 'assets/php/page_components/footer/footer.php'; ?>
            </div>
            
        </div>
    </div>
    <?php require_once 'assets/php/page_components/footer/js.php'; ?>
</body>

</html>