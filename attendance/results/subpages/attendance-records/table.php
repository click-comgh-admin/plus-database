<div class="row justify-content-center">
    <div class="col-md-6 col-lg-6 border border-darker">    
        <div class="table-responsive py-3">
            <table class="mb-0 table table-striped table-hover" pagin_table="attendance-records"
                pt_c_acc_id="<?= AccountInfoId; ?>" pt_c_group_id="<?= $group_id; ?>" 
                pt_c_subgroup_id="<?= $subgroup_id; ?>" pt_c_gender="<?= $gender; ?>" 
                pt_c_status="<?= $status; ?>" pt_c_quarter="<?= $_quarter; ?>" 
                pt_c_page="<?= $page_url; ?>" pt_c_user_id="<?= $user_id; ?>" 
                pt_c_get_date="<?= $get_date; ?>" pt_c_api="<?= API_BASE_URL; ?>"
                pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>" >
                <thead>
                    <tr>
                        <th style="white-space: nowrap;">Member</th>
                        <th style="white-space: nowrap;" data-orderable="false">
                            Attendance Record
                        </th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>