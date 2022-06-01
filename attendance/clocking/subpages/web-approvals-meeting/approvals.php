<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-5">
                        <?php 
                            if (!isset($_GET['display'])) {
                                require_once Current_BaseDir."/forms/clocking-meeting/date_filter_form.php";
                            }
                        ?>
                    </div>
                    <div class="col-md-12 col-lg-7">
                        <?php require_once Current_BaseDir."/forms/clocking-meeting/clocking_filter_form.php"; ?>
                    </div>
                    <div class="col-md-12 col-lg-12"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title"> Meeting Approval 
                    <a class="btn btn-sm btn-info" href="<?= $url; ?>"><?= $btnTitle; ?></a>
                </h5>
                <div class="">
                    <?php 
                        if (isset($_GET['display'])) {
                            require_once Current_BaseDir."/subpages/web-approvals-meeting/table_all.php";
                        } else {
                            require_once Current_BaseDir."/subpages/web-approvals-meeting/table.php";
                        }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>