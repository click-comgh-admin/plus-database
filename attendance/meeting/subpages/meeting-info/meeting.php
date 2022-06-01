<div class="d-flex justify-content-between">
    <h5 class="card-title pt-2 mb-0">View Meeting Info</h5>
</div>
<?php 
    define('AccountMeetingId', (int)@$_GET['show-meeting']);

    $get_string = "attendance/meeting/meeting_info?client_id=".AccountInfoId."&id=".AccountMeetingId;
    $meetingInfo = $ccApi->fetch_from($get_string=$get_string, function($meetings) {
        return isset($meetings['meeting'])? $meetings: [];
    }, $debug = false);
    // print_r($meetingInfo);
?>
<div class="card my-2">
    <div class="card-header p-1 h-25">
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Meeting</th>
                    <th style="white-space: nowrap;">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="white-space: nowrap;">
                            <?= isset($meetingInfo['meeting']['pdam_meeting'])
                                ? $meetingInfo['meeting']['pdam_meeting']: ""; ?>
                        </th>
                        <th style="white-space: nowrap;">
                            <?= isset($meetingInfo['meeting']['pdam_meeting_date'])
                                ? date("Y-m-d", strtotime($meetingInfo['meeting']['pdam_meeting_date'])): ""; ?>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="card-body p-1">
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Start Time</th>
                        <th style="white-space: nowrap;">Closing Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style="white-space: nowrap;">
                            <?= isset($meetingInfo['meeting']['pdam_meeting_start_time'])
                                ? date("H:i A", strtotime($meetingInfo['meeting']['pdam_meeting_start_time'])): ""; ?>
                        </th>
                        <th style="white-space: nowrap;">
                            <?= isset($meetingInfo['meeting']['pdam_meeting_close_time'])
                                ? date("H:i A", strtotime($meetingInfo['meeting']['pdam_meeting_close_time'])): ""; ?>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="card-footer p-1">
        <div class="table-responsive">
            <table class="mb-0 table table-striped table-hover">
                <thead class="bg-primary text-white">
                    <tr>
                        <th style="white-space: nowrap;">Group</th>
                        <th style="white-space: nowrap;">Sub-Group</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-0" style="white-space: nowrap;">
                            <?php
                                $_saved_groups = isset($meetingInfo['group_assignment'])
                                    ? $meetingInfo['group_assignment']: [];
                                $saved_groups = [];
                                foreach ($_saved_groups as $key => $_sg) {
                                    if (!in_array($_sg['pdama_assign_id'], $saved_groups)) {
                                        array_push($saved_groups, $_sg['pdama_assign_id']);
                                    }
                                }
                                $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                                echo $ccApi->fetch_from($get_string=$get_string, function($groups) use($saved_groups) {
                                    $groups = isset($groups[0])? $groups: [];
                                    $at = '<ul>';
                                    foreach ($groups as $key => $group) {
                                        if (in_array($group['pdmg_id'], $saved_groups)) {
                                            $at .= '<li>'.$group['pdmg_group'].'</li>';
                                        }
                                    }
                                    $at .= '</ul>';
                                    return @$at;
                                }, $debug = false); 
                            ?>
                        </td>
                        <td class="px-0" style="white-space: nowrap;">
                            <?php
                                
                            $_saved_subgroups = isset($meetingInfo['subgroup_assignment'])
                                ? $meetingInfo['subgroup_assignment']: [];
                            $saved_subgroups = [];
                            foreach ($_saved_subgroups as $key => $_ssg) {
                                if (!in_array($_ssg['pdama_assign_id'], $saved_subgroups)) {
                                    array_push($saved_subgroups, $_ssg['pdama_assign_id']);
                                }
                            }
                            $get_string = "attendance/members/all_groups?client_id=".AccountInfoId;
                            echo $ccApi->fetch_from($get_string=$get_string, function($groups) use($ccApi, $saved_subgroups) {
                                $at = '<ul>';
                                $groups = isset($groups[0])? $groups: [];

                                foreach ($groups as $group_key => $group) {
                                    $group_id = $group['pdmg_id'];
                                    $group_name = $group['pdmg_group'];
                                    $get_string = "attendance/members/all_subgroups?group_id=$group_id&client_id=".AccountInfoId;
                                    $at .= $ccApi->fetch_from($get_string=$get_string, function($subgroups) use($group_name, $saved_subgroups) {
                                        $subgroups = isset($subgroups[0])? $subgroups: [];
                                        $sg = '';
                                        foreach ($subgroups as $key => $subgroup) {
                                            if (in_array($subgroup['pdmg_id'], $saved_subgroups)) {
                                                $sg .= '<li>'.$group_name.': '.$subgroup['pdmg_subgroup'].'</li>';
                                            }
                                        }
                                        return @$sg;
                                    }, $debug = false);
                                }
                                $at .= '</ul>';
                                return @$at;
                            }, $debug = false); 
                            ?>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>