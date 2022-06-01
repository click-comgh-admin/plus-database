<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php
                            require_once Current_BaseDir."/forms/assign-attendance/new.php";
                            
                            $get_string = "attendance/clocking-agent/clocking-agents?account_id=" . AccountInfoId;
                            $clocking_agents = $ccApi->fetch_from($get_string=$get_string, function($clocking_agent) {
                                return $clocking_agent;
                            }, $debug=false);
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Attendance Status</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="random-access">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Statuses</th>
                                <th style="white-space: nowrap;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                foreach ($attendance_statuses as $asKey => $attendance_status) {
                                    $attendance_status_id = (isset($attendance_status['pdad_id'])? $attendance_status['pdad_id']: 0);
                                    $url = $page_url . "?update=$attendance_status_id" ?>
                                    <tr>
                                        <th><?= $attendance_status['pdad_attendance_status']; ?></th>
                                        <td>
                                            <a href="<?= $url; ?>" target="_blank" class="btn m-1 btn-outline-primary shadow" type="button">
                                                <span class="pe-7s-compass"> Update Attendance Status</span>
                                            </a>
                                            <div class="d-block m-1">
                                                <span class="shadow shadow-lg p-1 bg-white rounded text-dark d-inline-block">
                                                    <?= date('Y/ m/ d @ H:i A', strtotime($attendance_status['pdad_date'])); ?>
                                                    <?php
                                                        if (!empty($attendance_status)) {
                                                            $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($attendance_status['pdad_date'])));
                                                        }
                                                    ?>
                                                    <i><?= !empty($attendance_status) ? @$TimeAgo->get(): "-"; ?></i><br>
                                                </span>
                                            </div>
                                            <button type="button" class="btn btn-sm m-1 btn-danger shadow"
                                                btn-submit-post=<?= json_encode(["attendance_status_id"=>$attendance_status_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]); ?>
                                                btn-submit-post--confirm="Remove Attendance Status?"
                                                btn-submit-post--url="<?= API_BASE_URL."attendance/clients/settings/status/delete-attendance-status"; ?>">
                                                <span class="pe-7s-trash"> Remove</span>
                                            </button>
                                        </td>
                                    </tr>
                                <?php }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>