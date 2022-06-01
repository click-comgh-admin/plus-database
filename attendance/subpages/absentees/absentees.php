<?php
    use Encryptor\Encryptor;
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <?php
                $gender = @(isset($_GET['gender']) && !empty($_GET['gender'])) ? $_GET['gender']: null;
                $status = @(isset($_GET['status']) && !empty($_GET['status'])) ? $_GET['status']: null;
                $_GET['currentpage'] = @(isset($_GET['currentpage']) && !empty($_GET['currentpage'])) ? $_GET['currentpage']: 1;

                $page_url = "attendance/absentees?gender=".@$_GET['gender']."&status=".@$_GET['status'];
                $page_reset = "attendance/absentees";
                $isYear = false;
            ?>
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Attendance => Absentees
                </div>
                <div class="btn-actions-pane-right">
                    <?php require_once(BASE_DIRECTORY.'/subpages/membership/forms/main_filter_form.php'); ?>
                    <?php require_once(BASE_DIRECTORY.'/subpages/membership/forms/date_filter_form.php'); ?>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">Members</h5>

                <div>
                    <?php
                        $rowsperpage = 50;
                        $get_string = "currentpage=" . $_GET['currentpage'] . "&rowsperpage=$rowsperpage&client_id=$account_id" . ((is_null($gender)) ? "" : "&gender=$gender") . "&status=1";
                        $client_members = $ccApi->client_members($type="members", $get_string = $get_string, function ($members) {
                            return $members;
                        });

                        $get_date = (isset($_COOKIE['date_filter_input'])) ? date("Y-m-d", strtotime($_COOKIE['date_filter_input'])): date("Y-m-d");
                        
                        $get_string = "attendees?account_id=$account_id&date=".$get_date;
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

                        $encryptor = new Encryptor("members-data--download", md5("members-data--download"));
                        $queryArray = [
                            "client_id"=>$account_id,
                            "gender"=>$gender,
                            "status"=>1,
                            "date"=>$get_date,
                        ];
                        $queryStr = json_encode($queryArray);
                        $encQueryStr = $encryptor->encrypt($queryStr);
                        $endpoint = "absentees";
                        require_once(BASE_DIRECTORY.'/attendance/forms/download.php');
                                                
                        // print_r($attendees);
                        require_once(BASE_DIRECTORY.'/attendance/subpages/member_list_absentees.php');
                    ?>
                </div>
            </div>
            <div class="card-footer">
                <?php require_once(BASE_DIRECTORY.'/subpages/membership/member_pagi_btn.php'); ?>
            </div>
        </div>
    </div>
</div>