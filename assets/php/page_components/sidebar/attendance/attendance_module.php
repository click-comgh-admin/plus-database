<?php /*
<li>
    <?php
        $get_string = "attendance/clocking/web-clocking-count?account_id=".AccountInfoId;
        $web_clocking_count = $ccApi->fetch_from($get_string=$get_string, function($web_clocking_count)
        {
            return isset($web_clocking_count[0]['total_count'])? (int)$web_clocking_count[0]['total_count']: 0;
        }, $debug = false);
    ?>
        <a href="#" mm-active="attendance-clocking|attendance-approvals">
            <i class="metismenu-icon pe-7s-check"></i> Attendance Clocking
            <?= $hasApprovals = ($web_clocking_count > 0)? 
            '<span class="badge badge-warning">'.$web_clocking_count.'</span>': ""; ?>
                <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
        </a>
        <ul>
            <li>
                <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/attendance-clocking" mm-active="attendance-clocking">
                    <i class="metismenu-icon pe-7s-check"></i> Attendance Clocking
                </a>
            </li>
            <li>
                <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/attendance-approvals" mm-active="attendance-approvals">
                    <i class="metismenu-icon pe-7s-check"></i> Attendance Approvals
                    <?= $hasApprovals; ?>
                </a>
            </li>
        </ul>
</li> */ ?>

<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/v2/settings/schedules" mm-active="schedules|schedule">
        <i class="metismenu-icon pe-7s-check"></i> Scheduled Meetings/Events
    </a>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/v2/settings/schedule-form" mm-active="schedule-form">
        <i class="metismenu-icon pe-7s-check"></i> Create Meetings/Events
    </a>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/attendance-clocking" mm-active="attendance-clocking">
        <i class="metismenu-icon pe-7s-check"></i> Attendance Clocking V.2
    </a>
</li>
<li>
    <?php
        $get_string = "attendance/clocking/web-clocking-count?account_id=".AccountInfoId;
        $web_clocking_count = $ccApi->fetch_from($get_string=$get_string, function($web_clocking_count)
        {
            return isset($web_clocking_count[0]['total_count'])? (int)$web_clocking_count[0]['total_count']: 0;
        }, $debug = false);
    ?>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/attendance-approvals" mm-active="attendance-approvals">
        <i class="metismenu-icon pe-7s-check"></i> Attendance Approvals
        <?= ($web_clocking_count > 0)? 
            '<span class="badge badge-warning">'.$web_clocking_count.'</span>': ""; ?>
    </a>
</li>

<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/attendance-clocking" mm-active="attendance-clocking">
        <i class="metismenu-icon pe-7s-check"></i> Attendance Clocking
    </a>
</li>
<li>
    <?php
        $get_string = "attendance/clocking/web-clocking-count?account_id=".AccountInfoId;
        $web_clocking_count = $ccApi->fetch_from($get_string=$get_string, function($web_clocking_count)
        {
            return isset($web_clocking_count[0]['total_count'])? (int)$web_clocking_count[0]['total_count']: 0;
        }, $debug = false);
    ?>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/clocking/attendance-approvals" mm-active="attendance-approvals">
        <i class="metismenu-icon pe-7s-check"></i> Attendance Approvals
        <?= ($web_clocking_count > 0)? 
            '<span class="badge badge-warning">'.$web_clocking_count.'</span>': ""; ?>
    </a>
</li>
<?php /*
<li>
    <a href="#" mm-active="attendees|absentees">
        <i class="metismenu-icon pe-7s-note2"></i> Attendance List
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/attendees" mm-active="attendees">
<i class="metismenu-icon pe-7s-note2"></i> Attendees
</a>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/absentees" mm-active="absentees">
        <i class="metismenu-icon pe-7s-note2"></i> Absentees
    </a>
</li>
</ul>
</li> */ ?>
<li>
    <a href="#" mm-active="attendees|absentees">
        <i class="metismenu-icon pe-7s-note2"></i> Attendance List
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/results/attendees" mm-active="attendees">
                <i class="metismenu-icon pe-7s-note2"></i> Attendees
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/results/absentees" mm-active="absentees">
                <i class="metismenu-icon pe-7s-note2"></i> Absentees
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/results/attendance-records" mm-active="attendance-records">
        <i class="metismenu-icon pe-7s-display2"></i> Attendance Records
    </a>
</li> <?php /*
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/attendance-records" mm-active="attendance-records">
        <i class="metismenu-icon pe-7s-display2"></i> Attendance Records
    </a>
</li> */ ?>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/results/attendance-results" mm-active="attendance-results">
        <i class="metismenu-icon pe-7s-display2"></i> Attendance Statistics
    </a>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/results/attendance-report" mm-active="attendance-report">
        <i class="metismenu-icon pe-7s-note2"></i> Attendance Report
    </a>
</li>
<li>
    <?php
        $get_string = "attendance/clocking/user-devices-request-count?account_id=".AccountInfoId;
        $user_devices_request_count = $ccApi->fetch_from($get_string=$get_string,
            function($user_devices_request_count)
        {
            return isset($user_devices_request_count[0]['total_count'])
                ? (int)$user_devices_request_count[0]['total_count']: 0;
        }, $debug = false);
    ?>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/user-device-request" mm-active="user-device-request">
        <i class="metismenu-icon pe-7s-phone"></i> User Device Requests
        <?= ($user_devices_request_count > 0)? 
            '<span class="badge badge-warning">'.$user_devices_request_count.'</span>': ""; ?>
    </a>
</li>
<li>
    <a href="#" mm-active="meeting-days|location-settings|user-devices<?php //|user-device-request; ?>|clocking-time">
        <i class="metismenu-icon pe-7s-config"></i> Settings
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/meeting-days" mm-active="meeting-days">
                <i class="metismenu-icon pe-7s-config"></i> Meeting Days
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/location-settings" mm-active="location-settings">
                <i class="metismenu-icon pe-7s-note2"></i> Attendance Location Settings
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/clocking-time" mm-active="clocking-time">
                <i class="metismenu-icon pe-7s-ckock"></i> Clocking Time (In/ Out)
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/set-break-time" mm-active="set-break-time">
                <i class="metismenu-icon pe-7s-ckock"></i> Break Time (Start/ End)
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/attendance-visibility" mm-active="attendance-visibility">
                <i class="metismenu-icon pe-7s-eye"></i> Attendance Visibility
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/user-devices" mm-active="user-devices">
                <i class="metismenu-icon pe-7s-config"></i> User Devices
            </a>
        </li> <?php /*
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/user-devices" mm-active="user-devices">
                <i class="metismenu-icon pe-7s-config"></i> User Devices
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/user-device-request" mm-active="user-device-request">
                <i class="metismenu-icon pe-7s-config"></i> User Device Requests
            </a>
        </li> */ ?>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/attendance-status" mm-active="attendance-status">
                <i class="metismenu-icon pe-7s-config"></i> Attendance Status
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/attendance-status-assign" mm-active="attendance-status-assign">
                <i class="metismenu-icon pe-7s-config"></i> Assign Attendance Status
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/clocking-agent" mm-active="clocking-agent">
                <i class="metismenu-icon pe-7s-config"></i> Add Mobile App Admin
            </a>
        </li>
    </ul>
</li>