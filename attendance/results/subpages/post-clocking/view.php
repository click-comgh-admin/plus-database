<?php
    $page = "post-clocking";
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
                        <?php require_once Current_BaseDir."/forms/post-clocking/date_filter_form.php";?>
                        <?php require_once Current_BaseDir."/forms/post-clocking/time_filter_form.php";?>
                        <?php require_once Current_BaseDir."/forms/post-clocking/time_check_out_filter_form.php";?>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/post-clocking/other_filter_form.php"; ?>
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
                <h5 class="card-title">Post Clocking</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="attendance-post-clock-in" pt_c_acc_id="<?= AccountInfoId; ?>"
                        pt_c_by_date="1" pt_c_selected_date="<?= $selected_date; ?>" pt_c_by_time="<?= $by_time; ?>"
                        pt_c_start_time="<?= $start_time; ?>" pt_c_end_time="<?= $end_time; ?>"
                        pt_c_by_check_out_time="<?= $by_check_out_time; ?>" pt_c_check_out_start_time="<?= $check_out_start_time; ?>" 
                        pt_c_check_out_end_time="<?= $check_out_end_time; ?>" pt_c_by_group_id="<?= $by_group_id; ?>" 
                        pt_c_group_id="<?= $this_group_id; ?>" pt_c_by_subgroup_id="<?= $by_subgroup_id; ?>" 
                        pt_c_subgroup_id="<?= $this_subgroup_id; ?>" pt_c_by_clocking_medium="<?= $by_clocking_medium; ?>"
                        pt_c_clocking_medium="<?= $this_clocking_medium; ?>" pt_c_by_web_status="<?= $by_web_status; ?>"
                        pt_c_web_status="<?= $this_web_status; ?>" pt_c_by_attendance_status="<?= $by_attendance_status; ?>"
                        pt_c_attendance_status="<?= $this_attendance_status; ?>" pt_c_page="<?= $page_url; ?>"
                        pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
                        pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Member</th>
                                <th style="white-space: nowrap;">Clocking</th>
                                <th style="white-space: nowrap;">Action</th>
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