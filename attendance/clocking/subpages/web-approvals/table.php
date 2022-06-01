<div class="w-100">
    <form role="form" action="" method="POST"
        btn-general-posts--form="Continue Multiple Clocking?" class="table-responsive">
        <table class="mb-0 table table-striped" pagin_table="attendance-approvals" pt_c_acc_id="<?= AccountInfoId; ?>"
            pt_c_by_date="1" pt_c_selected_date="<?= $selected_date; ?>" pt_c_by_group_id="<?= $by_group_id; ?>" 
            pt_c_by_clocking_time="0" pt_c_clockintime="" pt_c_clockouttime=""
            pt_c_group_id="<?= $this_group_id; ?>" pt_c_by_subgroup_id="<?= $by_subgroup_id; ?>" 
            pt_c_subgroup_id="<?= $this_subgroup_id; ?>" pt_c_by_gender="<?= $by_gender; ?>" 
            pt_c_gender="<?= $this_gender; ?>" pt_c_page="<?= $page_url; ?>"
            pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
            pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
            <thead>
                <tr>
                    <th style="white-space: nowrap;">Member</th>
                    <th style="white-space: nowrap;" class="text-center" data-orderable="false">
                        Approve
                    </th>
                    <th style="white-space: nowrap;" class="text-center" data-orderable="false">
                        Cancel
                    </th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </form>
</div>