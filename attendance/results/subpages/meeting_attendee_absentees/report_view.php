<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-5">
                        <?php require_once Current_BaseDir."/forms/attendance-meeting/date_filter_form.php";?>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/attendance-meeting/report_filter_form.php"; ?>
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
                <h5 class="card-title">Meeting Report</h5>
                <div class="">
                    <?php require_once Current_BaseDir."/subpages/meeting_attendee_absentees/table.php"; ?>
                </div>
            </div>
        </div>
    </div>
</div>