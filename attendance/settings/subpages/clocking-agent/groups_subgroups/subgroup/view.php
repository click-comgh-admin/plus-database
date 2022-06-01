<?php
    /** @var ClickComApi $ccApi */
    $agentId = 0;
    if (isset($_GET['agent-id']) && !empty($_GET['agent-id'])) {
        $agentId = (int)$_GET['agent-id'];
    }
    $pageUrl = CLIENT_BASE_URL . "attendance/settings/clocking-agent-subgroups?agent-id=$agentId";
    $viewType = 1;
    if (isset($_GET['view-type']) && !empty($_GET['view-type'])) {
        $viewType = (int)$_GET['view-type'];
    }
    define("MeetingSubGroups", ($viewType > 1) ? true: false);
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-10 col-lg-10">
                        <div class="btn-actions-pane-right px-1">
                            <div class="btn-group-sm nav btn-group" role="group">
                                <a class="btn-shadow btn btn-primary <?= ($viewType === 1) ? 'active': ''; ?> " 
                                    href="<?= $pageUrl; ?>&view-type=1" >General Sub-Groups</a>
                                <a class="btn-shadow btn btn-primary <?= ($viewType === 2) ? 'active': ''; ?> " 
                                    href="<?= $pageUrl; ?>&view-type=2" >Meeting Sub-Groups</a>
                            </div>
                        </div>
                        <?php
                            if ($agentId === 0) {
                                echo '<h3 class="fa fa-2x text-center p-3">Invalid Admin Id</h3>';
                            } else {
                                require_once Current_BaseDir."/forms/clocking-agent/subgroups/new.php";
                            }
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
                <h5 class="card-title">Mobile App Admin Sub-Group Assignments</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="clocking-agent-assignments"
                        pt_c_id="<?= AccountInfoId; ?>" pt_c_user="<?= $user_id; ?>" pt_c_table-type="clocking-agent-subgroups"
                        pt_c_viewtype="<?= $viewType; ?>" pt_c_agent="<?= $agentId; ?>" pt_c_api="<?= API_BASE_URL; ?>">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">#</th>
                                <th style="white-space: nowrap;">
                                    <span>Sub-Groups</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>