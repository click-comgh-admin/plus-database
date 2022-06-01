<?php
    use Encryptor\Encryptor;
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <?php
                $gender = @(isset($_GET['gender']) && !empty($_GET['gender'])) ? $_GET['gender']: null;
                $status = @(isset($_GET['status']) && !empty($_GET['status'])) ? $_GET['status']: null;
                $group_id = @(isset($_GET['group_id']) && !empty($_GET['group_id'])) ? $_GET['group_id']: "all";
                $_GET['currentpage'] = @(isset($_GET['currentpage']) && !empty($_GET['currentpage'])) ? $_GET['currentpage']: 1;

                $page_url = "attendance/attendance-records?group&gender=".@$_GET['gender']."&status=".@$_GET['status'] . "&group_id=$group_id";
                $page_reset = "attendance/attendance-records?group";
                $isYear = true;

                if (isset($_GET['quarter'])) {
                    if (empty($_GET['quarter'])) {
                        $_GET['quarter'] = 1;
                    }
                }
            ?>
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Records => Groups
                </div>              
                <div class="btn-actions-pane-right">
                    <?php require_once(BASE_DIRECTORY.'/subpages/membership/forms/quarter_group_filter_form.php'); ?>
                    <?php require_once(BASE_DIRECTORY.'/subpages/membership/forms/date_filter_form.php'); ?>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">Members</h5>

                <div>
                    <?php
                        $rowsperpage = 50;
                        $get_string = "currentpage=" . $_GET['currentpage'] . "&rowsperpage=$rowsperpage&client_id=$account_id" . ((is_null($gender)) ? "" : "&gender=$gender") . "&status=1" . "&group_id=$group_id";
                        $client_members = $ccApi->client_members($type="groups", $get_string = $get_string, function ($members) {
                            return $members;
                        }, $debug = 0);   
                        
                        $get_date = (isset($_COOKIE['date_filter_input'])) ? date("Y-m-d", strtotime($_COOKIE['date_filter_input'])): date("Y-m-d");
                        
                        $member_records = [];

                        if ($client_members['error'] == false) {
                            $members = $client_members['data'];
                            
                            foreach ($members as $key => $member) {
                                $member_id = $member['pdm_id'];
                                $encryptor = new Encryptor("members", md5("members"));
                                $member_id = $encryptor->encrypt($member_id);

                                $quarter = (isset($_GET['quarter'])) ? (empty($_GET['quarter'])) ? 1: $_GET['quarter']: 1;
                                $get_string = "records?account_id=$account_id&member_id=".$member['pdm_id']."&date=".$get_date."&quarter=".$quarter;
                                $records = $ccApi->attendance($get_string, function($records)
                                {
                                    return @$records;
                                }, $debug = false);

                                if (isset($records[0])) {
                                    $info = [
                                        "member"=>$member,
                                        "records"=>$records
                                    ];
                                    if (!in_array($info, $member_records)) {
                                        array_push($member_records, $info);
                                    }
                                }
                            }
                        }

                        $encryptor = new Encryptor("members-data--download", md5("members-data--download"));
                        $queryArray = [
                            "client_id"=>$account_id,
                            "gender"=>$gender,
                            "status"=>1,
                            "date"=>$get_date,
                            "quarter"=>$quarter,
                            "group"=>$group_id,
                        ];
                        $queryStr = json_encode($queryArray);
                        $encQueryStr = $encryptor->encrypt($queryStr);
                        $endpoint = "records";
                        require_once(BASE_DIRECTORY.'/attendance/forms/download.php');
                  
                        require_once(BASE_DIRECTORY.'/attendance/subpages/member_list_records.php');
                    ?>
                </div>
            </div>
            <div class="card-footer">
                <?php require_once(BASE_DIRECTORY.'/subpages/membership/member_pagi_btn.php'); ?>
            </div>
        </div>
    </div>
</div>