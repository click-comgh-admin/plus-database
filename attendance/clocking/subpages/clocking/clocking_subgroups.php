<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-5">
                        <?php require_once Current_BaseDir."/forms/clocking/date_filter_form.php";?>
                    </div>
                    <div class="col-md-12 col-lg-7">
                        <?php require_once Current_BaseDir."/forms/clocking/clocking_subgroup_filter_form.php"; ?>
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
            <div class="card-body px-2 bg-white" enable-fullscreen="attendance-clocking">
                <h5 class="card-title">Attendance Clocking for <?= $meetingDay; ?> (<?= $meetingTitle; ?>)</h5>
                <div class="">
                    <?php require_once Current_BaseDir."/subpages/clocking/table.php"; ?>
                </div>
            </div>
        </div>
    </div>
</div>