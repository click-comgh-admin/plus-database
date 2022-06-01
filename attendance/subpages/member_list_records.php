<?php
    use Encryptor\Encryptor;
    $MailAttachment = new MailAttachment(FILE_BUCKET_BASE_URL."files/");
    $GLOBALS['attendance_status'] = [];
    function show_records($id, $title, $records, $class, $ccApi, $account_id, $member, $get_date, $quarter) { ?>
        <a href="#" data-toggle="modal" open-modal--id="subgroups-<?= $id; ?>"
            open-modal--title="Show <?= $title; ?>" open-modal--html='<?php
                $get_string = "days";
                $days = $ccApi->attendance($get_string, function($days)
                {
                    return @$days;
                }, $debug = false);
                
                $get_string = "meeting_days?account_id=$account_id";
                $meeting_days = $ccApi->attendance($get_string, function($meeting_days)
                {
                    return @$meeting_days;
                }, $debug = false);
            
                $MD = [];
                foreach ($days as $day_key => $day) {
                    foreach ($meeting_days as $meeting_day_key => $meeting_day) {
                        if ($day['pdad_id'] == $meeting_day['pdad_day']) {
                            $meetDays = [
                                "day"=>$day['pdad_day'],
                                "md"=>$meeting_day
                            ];
                            if (!in_array($meetDays, $MD)) {
                                array_push($MD, $meetDays);
                            }
                        }
                    }
                }
                ?>
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <tbody>
                                <?php
                                    foreach ($MD as $key => $md) {
                                        $get_string = "records_count?account_id=$account_id&member_id=".$member['pdm_id']."&date=".$get_date."&quarter=".$quarter."&day=".$md['md']['pdad_day'];
                                        $records_count = $ccApi->attendance($get_string, function($records_count)
                                        {
                                            return @$records_count;
                                        }, $debug = false); 
                                        ?>
                                        <tr>
                                            <th>
                                                <b><?= $md['day']; ?></b>
                                            </th>
                                            <th>
                                                <b><?= count($records_count); ?></b>
                                            </th>
                                        </tr>
                                    <?php }
                                ?>
                            </tbody>
                        </table>
                    </div>
                <?php
            ?>' open-modal--buttons='
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
            ' class="<?= $class; ?>">
            <?= $title; ?>
        </a>
    <?php }
    function show_records_status($id, $title, $records, $class, $ccApi, $account_id, $member, $get_date, $quarter) {
        $get_string = "days";
        $days = $ccApi->attendance($get_string, function($days)
        {
            return @$days;
        }, $debug = false);
        
        $get_string = "meeting_days?account_id=$account_id";
        $meeting_days = $ccApi->attendance($get_string, function($meeting_days)
        {
            return @$meeting_days;
        }, $debug = false);
    
        $MD = [];
        foreach ($days as $day_key => $day) {
            foreach ($meeting_days as $meeting_day_key => $meeting_day) {
                if ($day['pdad_id'] == $meeting_day['pdad_day']) {
                    $meetDays = [
                        "day"=>$day['pdad_day'],
                        "md"=>$meeting_day
                    ];
                    if (!in_array($meetDays, $MD)) {
                        array_push($MD, $meetDays);
                    }
                }
            }
        }

        $attendance_status = [];
        foreach ($MD as $key => $md) {
            $get_string = "records_count?account_id=$account_id&member_id=".$member['pdm_id']."&date=".$get_date."&quarter=".$quarter."&day=".$md['md']['pdad_day'];
            $records_count = $ccApi->attendance($get_string, function($records_count)
            {
                return @$records_count;
            }, $debug = false); 
            
            foreach ($records_count as $rckey => $rc) {
                if (!in_array($rc, $attendance_status)) {
                    array_push($attendance_status, $rc);
                }
            }
        }
        $get_string = "present_days?account_id=$account_id";
        $present_days = $ccApi->attendance($get_string, function($present_days)
        {
            return @$present_days;
        }, $debug = false);
        $present_days['pdad_days'] = isset($present_days['pdad_days']) ? $present_days['pdad_days']: 0;
        $attendance_status_count = count($attendance_status); ?>
        <span class="badge <?= ($attendance_status_count >= $present_days['pdad_days']) ? 'badge-success': 'badge-danger'; ?>">
            <?= ($attendance_status_count >= $present_days['pdad_days']) ? 'Active Attendance': 'Inactive Attendance'; ?>
        </span>
    <?php }
?>
<pre><?php //print_r($client_members); ?></pre>

<?php
    if (isset($_GET['date_filter_input'])) { ?>
        <script> __set_cookies__("date_filter_input", "<?= $_GET['date_filter_input']; ?>", $time = 2); </script>
    <?php }
    if ($client_members['error'] === false) { 
        if (empty($client_members['data'])) { ?>
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <h3 class="text-muted">No Members Found!</h3>
                </div>
            </div>
        <?php } else {
            $members = $client_members['data']; ?>
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 px-2">
                    <div class="table-responsive">
                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th>Member Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    foreach ($member_records as $key => $mr) {
                                        $member = $mr['member'];
                                        $records = $mr['records'];
                                    
                                        $get_string = "attendance/members/last-clocked?client_id=".AccountInfoId."&member_id=".$member['pdm_id'];
                                        $last_clocked = $ccApi->fetch_from($get_string, function($last_clocked)
                                        {
                                            return isset($last_clocked['time'])? $last_clocked: [];
                                        }, $debug = false);
                                        // print_r(["last_clocked"=>$last_clocked]);
                                        // print_r(["mr"=>$mr]); ?>
                                        <tr>
                                            <td style="text-align: center;" class="p-0" background-image="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                                                <div class="widget-content p-3" style="background: rgba(0,0,0,.5);">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-center ml-auto mr-auto">
                                                            <div class="widget-content-center">
                                                                <img width="100" height="100" class="rounded-circle shadow" alt="Contact Image"
                                                                    src="<?= FILE_BUCKET_BASE_URL; ?>files/members/profile-picture/<?= $member['pdm_profile_picture']; ?>">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="p-0">
                                                <table class="align-middle mb-0 table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-justify"><?= $member['pdm_firstname'] ." ". $member['pdm_surname']; ?></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-center">
                                                                <?php
                                                                    $member_id = $member['pdm_id'];
                                                                    $encryptor = new Encryptor("members", md5("members"));
                                                                    $member_id = $encryptor->encrypt($member_id);

                                                                    $get_string = "absentee?account_id=$account_id&member_id=".$member['pdm_id']."&date=".$get_date;
                                                                    $absentee = $ccApi->attendance($get_string, function($absentee)
                                                                    {
                                                                        return @$absentee;
                                                                    }, $debug = false);
                                                                ?>
                                                                <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $member_id; ?>" class="btn btn-secondary btn-sm" type="button">Profile Details</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-center">
                                                                <?= show_records($key.$member_id."_record", "Member Record", $records,
                                                                        "btn btn-info bg-arielle-smile font-weight-bold btn-sm my-1", $ccApi, $account_id, $member, $get_date, $quarter
                                                                    );
                                                                ?>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-center">
                                                                <b>Status: </b> 
                                                                <span class="badge badge-info">
                                                                    <?=  
                                                                        $active_status = $ccApi->active_status($all="one", $id=$member['pdm_status'],function($active_status) {
                                                                            return @$active_status[0]['pdd_info'];
                                                                        });
                                                                    ?>
                                                                </span>
                                                                <?= show_records_status($key.$member_id."_record_", "Member Record", $records,
                                                                        "btn btn-info bg-arielle-smile font-weight-bold btn-sm my-1",
                                                                        $ccApi, $account_id, $member, $get_date, $quarter
                                                                    );
                                                                ?>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-center">
                                                                <b>Last Attendance: </b> 
                                                                <span class="badge badge-info bg-midnight-bloom border border-light shadow">
                                                                    <?=  
                                                                        isset($last_clocked["date"])? date("D jS, M Y", strtotime($last_clocked["date"])): "--";
                                                                    ?>,
                                                                    <?=  
                                                                        isset($last_clocked["time"])? date("H:i A", strtotime($last_clocked["time"])): "--";
                                                                    ?>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr><td class="pt-1 pb-0 bg-light"></td><td class="pt-1 pb-0 bg-light"></td></tr>
                                    <?php }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        <?php } ?>
    <?php } else { ?>
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <h3 class="text-muted"><?= $client_members['msg']; ?></h3>
            </div>
        </div>
    <?php }

?>