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
    <a href="#" mm-active="device-requests|device-settings">
        <i class="metismenu-icon pe-7s-phone"></i> Clocking Devices
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/v2/devices/device-requests" mm-active="device-requests">
                <i class="metismenu-icon pe-7s-phone"></i> Device Requests
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>attendance/v2/devices/device-settings" mm-active="device-settings">
                <i class="metismenu-icon pe-7s-phone"></i> User Devices
            </a>
        </li>
    </ul>
</li>