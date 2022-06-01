<div class="row justify-content-center">
    <div class="col-md-6 col-lg-6 border border-darker">    
        <div class="table-responsive py-3">
            <table class="mb-0 table table-striped table-hover" pagin_table="meeting-report" pt_c_acc_id="<?= AccountInfoId; ?>"
                pt_c_by_date="1" pt_c_start_date="<?= $start_date; ?>" pt_c_end_date="<?= $end_date; ?>" 
                pt_c_by_group_id="<?= $by_group_id; ?>" pt_c_group_id="<?= $this_group_id; ?>" pt_c_by_subgroup_id="<?= $by_subgroup_id; ?>" 
                pt_c_subgroup_id="<?= $this_subgroup_id; ?>" pt_c_by_gender="<?= $by_gender; ?>" 
                pt_c_gender="<?= $this_gender; ?>" pt_c_page="<?= $page_url; ?>"
                pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
                pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>"
                pt_c_meeting_id="<?= $this_meeting_id; ?>" pt_c_by_meeting_id="<?= $by_meeting_id; ?>" 
                pt_c_by_attendance_status_id="<?= $by_attendance_status_id; ?>" pt_c_attendance_status_id="<?= $this_attendance_status_id; ?>"
                pt_c_by_user_meeting_day_id="<?= $by_user_meeting_day_id; ?>" pt_c_user_meeting_day_id="<?= $this_user_meeting_day_id; ?>">
                <thead>
                    <tr>
                        <th style="white-space: nowrap;">Member</th>
                        <th style="white-space: nowrap;" data-orderable="false">
                            Meeting Info
                        </th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>