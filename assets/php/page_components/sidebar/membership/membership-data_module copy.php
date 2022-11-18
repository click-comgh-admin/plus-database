<?PHP
    if ((int)AccountInfoType === 6) {
        $MEMBERSHIP = "Agent";
    } else {
        $MEMBERSHIP = "Membership";
    }
    
    if ((int)AccountInfoCategory === 12) {
        $MEMBERSHIP = "Agent";
    } else if ((int)AccountInfoCategory === 10) {
        $MEMBERSHIP = "Staff";
    } else {
        $MEMBERSHIP = "Membership";
    }
?>
<!-- <li class="app-sidebar__heading"><?= $MEMBERSHIP; ?> Data</li> -->
<li class="app-sidebar__heading">DATA MANAGEMENT</li>
<?php require_once "registration_module.php"; ?>
<?php require_once "custom-forms_module.php"; ?>
<li>
    <a href="#" mm-active="members|groups|subgroups">
        <i class="metismenu-icon pe-7s-users"></i> <?= $MEMBERSHIP; ?> Data
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>/member/members" mm-active="members">
                <i class="metismenu-icon">
                </i>Members
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>members?verification" mm-active="members">
                <i class="metismenu-icon">
                </i>Member Verification
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groups" mm-active="groups">
                <i class="metismenu-icon"></i>
                <?= (AccountInfoCategory === 10) ? "Department(s)": "Groups/ Chapters/ Classes"; ?>
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>members?group" mm-active="members">
                <i class="metismenu-icon"></i>
                Group Members
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>subgroups" mm-active="subgroups">
                <i class="metismenu-icon"></i>
                <?= (AccountInfoCategory === 10) ? "Unit(s)": "Sub-Groups"; ?>
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>members?subgroup" mm-active="members">
                <i class="metismenu-icon"></i>
                Sub-Group Members
            </a>
        </li>
        <?php
            if (AccountInfoCategory === 10) { ?>
                <li>
                    <a href="<?= CLIENT_BASE_URL; ?>committees" mm-active="committees">
                        <i class="metismenu-icon"></i>
                        Committee(s)
                    </a>
                </li>
                <li>
                    <a href="<?= CLIENT_BASE_URL; ?>subcommittees" mm-active="subcommittees">
                        <i class="metismenu-icon"></i>
                        Sub-Committee(s)
                    </a>
                </li>
            <?php }
        ?>
    </ul>
</li>
<li>
    <a href="#" mm-active="member-prefix|branch-prefix|category-prefix">
        <i class="metismenu-icon pe-7s-id"></i> Member Identification
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/id-prefix/member-prefix" mm-active="member-prefix">
                <i class="metismenu-icon">
                </i>Member ID Prefix
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/id-prefix/branch-prefix" mm-active="branch-prefix">
                <i class="metismenu-icon">
                </i>Branch ID Prefix
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>member/id-prefix/category-prefix" mm-active="category-prefix">
                <i class="metismenu-icon">
                </i>Member Category ID Prefix
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>members?member-ids" mm-active="members">
                <i class="metismenu-icon">
                </i>Member IDs
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="<?= CLIENT_BASE_URL; ?>member/access-restriction/restrictions" mm-active="restrictions">
        <i class="metismenu-icon pe-7s-id"></i> Access Restriction
    </a>
</li>
<li>
    <a href="https://www.youtube.com/playlist?list=PL94Wg7vEQie4EojeY5BGDkR2I0Zyy9Ufa" target="_blank">
        <i class="metismenu-icon pe-7s-study"></i> System Video Tutorials
    </a>
</li>
