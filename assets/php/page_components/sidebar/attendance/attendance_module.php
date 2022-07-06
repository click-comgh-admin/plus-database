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
    <a href="<?= CLIENT_BASE_URL; ?>attendance/v2/clocking/clocker" mm-active="clocker">
        <i class="metismenu-icon pe-7s-check"></i> Attendance Clocking
    </a>
</li>
<li>
    <a href="#" mm-active="attendees|absentees">
        <i class="metismenu-icon pe-7s-note2"></i> Attendance List
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/v2/clocking/attendees" mm-active="attendees">
                <i class="metismenu-icon pe-7s-note2"></i> Attendees
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/v2/clocking/absentees" mm-active="absentees">
                <i class="metismenu-icon pe-7s-note2"></i> Absentees
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>attendance/v2/clocking/history" mm-active="history">
        <i class="metismenu-icon pe-7s-clock"></i> Attendance History
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