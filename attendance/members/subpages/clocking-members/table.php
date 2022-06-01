<div class="w-100">
    <table class="mb-0 table table-striped table-hover w-auto" pagin_table="membership-data-clocking"
        pt_c_by_gender="<?= $by_gender; ?>" pt_c_gender="<?= $this_gender; ?>"
        pt_c_by_group_id="<?= $by_group_id; ?>" pt_c_group_id="<?= $this_group_id; ?>"
        pt_c_by_subgroup_id="<?= $by_subgroup_id; ?>" pt_c_subgroup_id="<?= $this_subgroup_id; ?>"
        pt_c_filter_type="<?= $this_filter_type; ?>" pt_c_acc_id="<?= AccountInfoId; ?>"
        pt_c_page="<?= Current_BaseUrl; ?>clocking-members; ?>" pt_c_user_id="<?= $user_id; ?>"
        pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
        <thead>
            <tr>
                <th style="white-space: nowrap;">Member</th>
                <th style="white-space: nowrap;" data-orderable="false">
                </th>
            </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
            <tr>
                <th colspan="1">
                </th>
                <th colspan="1">
                </th>
            </tr>
        </tfoot>
    </table>
</div>