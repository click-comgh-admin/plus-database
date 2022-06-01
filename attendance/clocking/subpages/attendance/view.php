<?php
    $page = "attendance-results";
    $page_url = Current_BaseUrl."$page";

    require_once "filtered_results.php";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/attendance/date_filter_form.php";?>
                        <?php require_once Current_BaseDir."/forms/attendance/time_filter_form.php";?>
                        <?php require_once Current_BaseDir."/forms/attendance/time_check_out_filter_form.php";?>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <?php //require_once Current_BaseDir."/forms/attendance/group_subgroup_filter_form.php"; ?>
                        <?php require_once Current_BaseDir."/forms/attendance/other_filter_form.php"; ?>
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
                <h5 class="card-title">Attendance Results</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="attendance-results" pt_c_acc_id="<?= AccountInfoId; ?>"
                        pt_c_by_date="1" pt_c_start_date="<?= $start_date; ?>" pt_c_end_date="<?= $end_date; ?>"
                        pt_c_by_time="<?= $by_time; ?>" pt_c_start_time="<?= $start_time; ?>" pt_c_end_time="<?= $end_time; ?>"
                        pt_c_by_check_out_time="<?= $by_check_out_time; ?>" pt_c_check_out_start_time="<?= $check_out_start_time; ?>" 
                        pt_c_check_out_end_time="<?= $check_out_end_time; ?>" pt_c_by_group_id="<?= $by_group_id; ?>" 
                        pt_c_group_id="<?= $this_group_id; ?>" pt_c_by_subgroup_id="<?= $by_subgroup_id; ?>" 
                        pt_c_subgroup_id="<?= $this_subgroup_id; ?>" pt_c_by_gender="<?= $by_gender; ?>" pt_c_gender="<?= $this_gender; ?>"
                        pt_c_by_user_meeting_day="<?= $by_user_meeting_day; ?>" pt_c_user_meeting_day="<?= $this_user_meeting_day; ?>" 
                        pt_c_by_attendance_status="<?= $by_attendance_status; ?>" pt_c_attendance_status="<?= $this_attendance_status; ?>" 
                        pt_c_page="<?= $page_url; ?>" pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
                        pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Image</th>
                                <th style="white-space: nowrap;">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>