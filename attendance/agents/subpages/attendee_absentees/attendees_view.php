<?php
    $page = "absentees";
    $page_url = Current_BaseUrl."$page";

    require_once "filtered_results.php";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2 bg-white" enable-fullscreen="attendance-attendees_absentees-agents">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-8 border border-light p-1">
                            <h5 class="card-title">Attendance Attendees</h5>
                            <div class="table-responsive">
                                <table class="mb-0 table table-striped table-hover" pagin_table="attendance-attendees_absentees-agents" pt_c_acc_id="<?= $accountInfoId; ?>"
                                    pt_c_by_date="1" pt_c_start_date="<?= $start_date; ?>" pt_c_by_attendance_status_id="<?= $by_attendance_status; ?>"
                                    pt_c_attendance_status_id="<?= $this_attendance_status; ?>" pt_c_attendance_type_id="1"  
                                    pt_c_page="<?= $page_url; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
                                    <thead>
                                        <tr>
                                            <th style="white-space: nowrap;">Member</th>
                                            <th style="white-space: nowrap;"></th>
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
        </div>
    </div>
</div>