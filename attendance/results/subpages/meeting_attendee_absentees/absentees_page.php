<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/attendance-meeting/date_filter_form.php";?>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/attendance-meeting/other_filter_form_alt.php"; ?>
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
            <div class="card-body px-2 bg-white" enable-fullscreen="attendance-attendees_absentees">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-8 border border-light p-1">
                            <h5 class="card-title">Attendance Absentees</h5>
                            <div class="table-responsive">
                                <table class="mb-0 table table-striped table-hover" pagin_table="attendance-attendees_absentees-meeting" pt_c_acc_id="<?= AccountInfoId; ?>"
                                    pt_c_by_date="1" pt_c_start_date="<?= $start_date; ?>" pt_c_end_date="<?= $end_date; ?>"
                                    pt_c_by_time="<?= $by_time; ?>" pt_c_start_time="<?= $start_time; ?>" pt_c_end_time="<?= $end_time; ?>"
                                    pt_c_by_check_out_time="<?= $by_check_out_time; ?>" pt_c_check_out_start_time="<?= $check_out_start_time; ?>" 
                                    pt_c_check_out_end_time="<?= $check_out_end_time; ?>" pt_c_by_group_id="<?= $by_group_id; ?>" 
                                    pt_c_group_id="<?= $this_group_id; ?>" pt_c_by_subgroup_id="<?= $by_subgroup_id; ?>" 
                                    pt_c_subgroup_id="<?= $this_subgroup_id; ?>" pt_c_by_gender="<?= $by_gender; ?>" pt_c_gender="<?= $this_gender; ?>"
                                    pt_c_meeting_id="<?= $this_meeting_id; ?>" pt_c_by_meeting_id="<?= $by_meeting_id; ?>" 
                                    pt_c_by_attendance_status_id="<?= $by_attendance_status; ?>" pt_c_attendance_status_id="<?= $this_attendance_status; ?>"
                                    pt_c_attendance_type_id="2"  
                                    pt_c_page="<?= $page_url; ?>" pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
                                    pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
                                    <thead>
                                        <tr>
                                            <th style="white-space: nowrap;">Member</th>
                                            <th style="white-space: nowrap;">-</th>
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
            <div class="card-footer d-flex justify-content-between">
                <div></div>
                <div class="fa pull-right customTooltip">
                    <?php
                        $addParams = "?acc_id=".AccountInfoId."&by_date=1&by_group_id=$by_group_id&group_id=$this_group_id";
                        $addParams .= "&by_subgroup_id=$by_subgroup_id&subgroup_id=$this_subgroup_id&by_attendance_status_id=$by_attendance_status";
                        $addParams .= "&attendance_status_id=$this_attendance_status&page=$page_url&user_id=$user_id&api=".API_BASE_URL."&file=".FILE_BUCKET_BASE_URL;
                        $addParams .= "&by_member_id=$by_member_id&member_id=$this_member_id&start_date=$start_date&end_date=$end_date&attendance_type_id=2";
                        $addParams .= "&by_user_meeting_day=$by_user_meeting_day&user_meeting_day=$this_user_meeting_day&by_gender=$by_gender&gender=$this_gender";
                    ?>
                    <button click-to-copy="absentee-url" type="button" class="btn btn-outline-info">
                        <span class="customTooltiptext">Copy Absentees URL to clipboard</span>
                        <input type="text" value="<?= str_replace("results", "public", $page_url).$addParams; ?>" />
                        Copy Absentees URL to clipboard
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>