<div class="main-card mb-3">
    <div class="card-header-tab card-header-tab-animation card-header">
        <div class="btn-actions-pane-right">
            <div class="btn-group-sm nav btn-group" role="group">
                <a class="btn-shadow btn btn-warning show" aria-expanded="true" type="button" data-toggle="collapse" href="#clock_in_out_time">Update Clocking Time</a><hr class="m-0">
            </div>
        </div>
    </div>
    <div class="card-body mb-2 container">
        <div class="row">
            <div class="col-md-6"></div>
            <div class="collapse show p-0 col-md-6" id="clock_in_out_time">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>Clock In/ Clock Out Time
                </div>
                <i>
                    <?php require_once Current_BaseDir."/forms/clocking-meeting/time_select_form.php"; ?>
                </i>
            </div>
        </div>
    </div>
</div>
<div class="w-100">
    <form role="form" action="" method="POST"
        btn-general-posts--form="Continue Multiple Clocking?" class="table-responsive">
        <table class="mb-0 table table-striped table-hover w-auto" pagin_table="meeting-clocking" pt_c_acc_id="<?= AccountInfoId; ?>"
            pt_c_by_date="1" pt_c_selected_date="<?= $selected_date; ?>" pt_c_by_group_id="<?= $by_group_id; ?>" 
            pt_c_by_clocking_time="1" pt_c_clockintime="<?= $clockintime; ?>" pt_c_clockouttime="<?= $clockouttime; ?>"
            pt_c_meeting_id="<?= $this_meeting_id; ?>" pt_c_by_meeting_id="<?= $by_meeting_id; ?>" 
            pt_c_group_id="<?= $this_group_id; ?>" pt_c_by_subgroup_id="<?= $by_subgroup_id; ?>" 
            pt_c_subgroup_id="<?= $this_subgroup_id; ?>" pt_c_by_gender="<?= $by_gender; ?>" 
            pt_c_gender="<?= $this_gender; ?>" pt_c_page="<?= $page_url; ?>"
            pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
            pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
            <thead>
                <tr>
                    <th style="white-space: nowrap;">Member</th>
                    <th style="white-space: nowrap;" data-orderable="false">
                        Clock In 
                        <button type="submit" class="btn btn-sm btn-outline-success"
                            btn-general-posts="Continue Multiple Clocking?"
                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/clocking-meeting/clock-in-multiple"; ?>">
                            Clock In Selected
                        </button>
                    </th>
                    <th style="white-space: nowrap;" data-orderable="false">
                        Clock Out 
                        <button type="submit" class="btn btn-sm btn-outline-danger"
                            btn-general-posts="Continue Multiple Clocking?"
                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/clocking-meeting/clock-out-multiple"; ?>">
                            Clock Out Selected
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th colspan="1">
                        <input type="hidden" name="day" value="<?= date("N", strtotime($selected_date)); ?>" />
                        <input type="hidden" name="date" value="<?= date("Y-m-d", strtotime($selected_date)); ?>" />
                        <input type="hidden" name="time_in" value="<?= $clockintime; ?>" />
                        <input type="hidden" name="time_out" value="<?= $clockouttime; ?>" />
                        <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                        <input type="hidden" name="meeting_id" value="<?= AccountMeetingId; ?>" />
                        <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                    </th>
                    <th colspan="1">
                        <button type="submit" class="btn btn-sm btn-outline-success"
                            btn-general-posts="Continue Multiple Clocking?"
                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/clocking-meeting/clock-in-multiple"; ?>">Clock In Selected</button>
                    </th>
                    <th colspan="1">
                        <button type="submit" class="btn btn-sm btn-outline-danger"
                            btn-general-posts="Continue Multiple Clocking?"
                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/clocking-meeting/clock-out-multiple"; ?>">Clock Out Selected</button>
                    </th>
                </tr>
            </tfoot>
        </table>
    </form>
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-md-8">
                <div class="row align-items-center justify-content-center">
                    <span class="shadow shadow-sm border col-md-7 p-2 my-1" pagin_load_percentage_bar></span>
                </div>
            </div>
        </div>
    </div>
</div>