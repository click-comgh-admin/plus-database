<?php
    $page = "user-device-request";
    $page_url = Current_BaseUrl."$page";

    $_by_member_id = "by_member_id";
    $_member_id = "member_id";
    if (isset($_GET[$_member_id])) { 
        $getMid = $encryptor->decrypt($_GET[$_member_id]);
        $by_member_id = (int)$getMid;
        $this_member_id = ($by_member_id == 0) ? "all": $by_member_id;
        $by_member_id = ($by_member_id == 0) ? 0: 1;
        ?>
        <script> __set_cookies__("<?= $_member_id; ?>", "<?= $this_member_id; ?>", $time = 2); </script>
    <?php } else {
        $by_member_id = @(isset($_COOKIE[$_by_member_id])) ? $_COOKIE[$_by_member_id] : 0;
        $this_member_id = @(isset($_COOKIE[$_member_id])) ? $_COOKIE[$_member_id] : "all"; 
        $by_member_id = ($by_member_id == 0) ? 0: 1;?>
        <script> __set_cookies__("<?= $_by_member_id; ?>", "<?= (strtolower($this_member_id) == "all") ? 0: 1; ?>", $time = 2); </script> <?php
    }
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-sm-12 col-md-4 col-lg-6"></div>
                    <div class="col-sm-12 col-md-8 col-lg-6">
                        <?php require_once Current_BaseDir."/forms/user_devices/member_filter_form.php";?>
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
                <h5 class="card-title">User Device Requests</h5>
                
<!-- <div class="w-100">
    <form role="form" action="" method="POST"
        btn-general-posts--form="Continue Multiple Approval/ Cancelling?" class="table-responsive">
        <table class="mb-0 table table-striped table-hover w-auto" pagin_table="user-devices-requests" pt_c_acc_id="<?= AccountInfoId; ?>"
            pt_c_by_date="1" pt_c_selected_date="<?= $selected_date; ?>" pt_c_by_group_id="<?= $by_group_id; ?>" 
            pt_c_by_clocking_time="1" pt_c_clockintime="<?= $clockintime; ?>" pt_c_clockouttime="<?= $clockouttime; ?>"
            pt_c_group_id="<?= $this_group_id; ?>" pt_c_by_subgroup_id="<?= $by_subgroup_id; ?>" 
            pt_c_subgroup_id="<?= $this_subgroup_id; ?>" pt_c_by_gender="<?= $by_gender; ?>" 
            pt_c_gender="<?= $this_gender; ?>" pt_c_page="<?= $page_url; ?>"
            pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
            pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
            <thead>
                <tr>
                    <th style="white-space: nowrap;">Identity</th>
                    <th style="white-space: nowrap;" data-orderable="false">
                        Phone Details
                        <button type="submit" class="btn btn-sm btn-outline-success"
                            btn-general-posts="Continue Multiple Clocking?"
                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/clocking/clock-in-multiple"; ?>">
                            Approve Selected
                        </button>
                    </th>
                    <th style="white-space: nowrap;" data-orderable="false">
                        Action
                        <button type="submit" class="btn btn-sm btn-outline-danger"
                            btn-general-posts="Continue Multiple Clocking?"
                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/clocking/clock-out-multiple"; ?>">
                            Cancel Selected
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
                        <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                    </th>
                    <th colspan="1">
                        <button type="submit" class="btn btn-sm btn-outline-success"
                            btn-general-posts="Continue Multiple Clocking?"
                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/clocking/clock-in-multiple"; ?>">Clock In Selected</button>
                    </th>
                    <th colspan="1">
                        <button type="submit" class="btn btn-sm btn-outline-danger"
                            btn-general-posts="Continue Multiple Clocking?"
                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/clocking/clock-out-multiple"; ?>">Clock Out Selected</button>
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
</div> -->
                <div class="w-100">
                    <form role="form" action="" method="POST"
                        btn-general-posts--form="Continue Multiple Action?" class="table-responsive">
                        <table class="mb-0 table table-striped" pagin_table="user-devices-requests" pt_c_acc_id="<?= AccountInfoId; ?>"
                            pt_c_page="<?= $page_url; ?>" pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>" pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>"
                            pt_c_by_member_id="<?= $by_member_id; ?>" pt_c_member_id="<?= $this_member_id; ?>">
                            <thead>
                                <tr>
                                    <th style="white-space: nowrap;">Identity</th>
                                    <th style="white-space: nowrap;" data-orderable="false">
                                        Phone Details
                                        <button type="submit" class="btn btn-sm btn-outline-success"
                                            btn-general-posts="Continue Multiple Action?"
                                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/settings/approve-multiple-user-devices"; ?>">
                                            Approve Selected
                                        </button>
                                    </th>
                                    <th style="white-space: nowrap;" data-orderable="false">
                                        Action
                                        <button type="submit" class="btn btn-sm btn-outline-danger"
                                            btn-general-posts="Continue Multiple Action?"
                                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/settings/cancel-multiple-user-devices"; ?>">
                                            Cancel Selected
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="1">
                                        <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
                                        <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                                    </th>
                                    <th colspan="1">
                                        <button type="submit" class="btn btn-sm btn-outline-success"
                                            btn-general-posts="Continue Multiple Action?"
                                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/settings/approve-multiple-user-devices"; ?>">
                                            Approve Selected
                                        </button>
                                    </th>
                                    <th colspan="1">
                                        <button type="submit" class="btn btn-sm btn-outline-danger"
                                            btn-general-posts="Continue Multiple Action?"
                                            btn-general-posts--url="<?= API_BASE_URL."attendance/clients/settings/cancel-multiple-user-devices"; ?>">
                                            Cancel Selected
                                        </button>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>