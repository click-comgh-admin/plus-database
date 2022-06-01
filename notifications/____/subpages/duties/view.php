<?php
    $page = "duties";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php
                            require_once Current_BaseDir."/forms/duties/new-duty.php";
                            
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
                <h5 class="card-title">Created Duties</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="view-created-duties"
                        pt_c_acc_id="<?= AccountInfoId; ?>" pt_c_page="<?= $page_url; ?>"
                        pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>"
                        pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Duty</th>
                                <th style="white-space: nowrap;">Action</th>
                                <!-- <th style="white-space: nowrap;">Info</th> -->
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>