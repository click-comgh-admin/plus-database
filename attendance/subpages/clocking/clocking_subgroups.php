<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <?php
                $gender = @(isset($_GET['gender']) && !empty($_GET['gender'])) ? $_GET['gender']: null;
                $status = @(isset($_GET['status']) && !empty($_GET['status'])) ? $_GET['status']: null;
                $subgroup_id = @(isset($_GET['subgroup_id']) && !empty($_GET['subgroup_id'])) ? $_GET['subgroup_id']: "all";
                $_GET['currentpage'] = @(isset($_GET['currentpage']) && !empty($_GET['currentpage'])) ? $_GET['currentpage']: 1;

                $page_url = "attendance/attendance-clocking?subgroup&gender=".@$_GET['gender']."&status=".@$_GET['status'] . "&subgroup_id=$subgroup_id";
                $page_reset = "attendance/attendance-clocking?subgroup";
            ?>
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Attendance Clocking => Sub-Groups
                </div>
                <?php require_once(BASE_DIRECTORY.'/subpages/membership/forms/subgroup_filter_from.php'); ?>
            </div>
            <div class="card-body">
                <h5 class="card-title">Members</h5>

                <div>
                    <?php
                        $rowsperpage = 50;
                        $get_string = "currentpage=" . $_GET['currentpage'] . "&rowsperpage=$rowsperpage&client_id=$account_id" . ((is_null($gender)) ? "" : "&gender=$gender") . "&status=1" . "&subgroup_id=$subgroup_id";

                        $client_members = $ccApi->client_members($type="subgroups", $get_string = $get_string, function ($members) {
                            return $members;
                        }, $debug = 0);
                        
                        $get_string = "attendees?account_id=$account_id&date=".date("Y-m-d");
                        $attendees = $ccApi->attendance($get_string, function($attendees)
                        {
                            return @$attendees;
                        }, $debug = false);

                        $not_marked = [];
                        foreach ($attendees as $key => $attendee) {
                            if (!in_array($attendee['pdad_member_id'], $not_marked)) {
                                array_push($not_marked, $attendee['pdad_member_id']);
                            }
                        }     
                        require_once(BASE_DIRECTORY.'/attendance/subpages/member_list.php');
                    ?>
                </div>
            </div>
            <div class="card-footer">
                <?php require_once(BASE_DIRECTORY.'/subpages/membership/member_pagi_btn.php'); ?>
            </div>
        </div>
    </div>
</div>