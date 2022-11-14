<li class="app-sidebar__heading">Groupings</li>
<li>
    <a href="#" class="text-primary" 
        mm-active="branches|add-branch|edit-branch|branch">
        <i class="metismenu-icon pe-7s-note2"></i><i class="pe-7s-users"></i> Branches
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/branch/branches" mm-active="branches">
                <i class="metismenu-icon"></i> Branch(es)
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/branch/add-branch" mm-active="add-branch">
                <i class="metismenu-icon"></i> Add Branch
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="#" class="text-primary" 
        mm-active="member-categories|add-member-category|edit-member-category|member-category">
        <i class="metismenu-icon pe-7s-note2"></i><i class="pe-7s-users"></i> Member Categories
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/member-category/member-categories" mm-active="member-categories">
                <i class="metismenu-icon"></i> Categories
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/member-category/add-member-category" mm-active="add-member-category">
                <i class="metismenu-icon"></i> Add Category
            </a>
        </li>
    </ul>
</li>

<li>
    <a href="#" class="text-primary" 
        mm-active="view-mc-list|assign-mc-list">
        <i class="metismenu-icon pe-7s-note2"></i><i class="pe-7s-users"></i> Member Category Assignment
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/bulk-assignment/member-category/view-mc-list" mm-active="view-mc-list">
                <i class="metismenu-icon"></i> View Member Category
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/bulk-assignment/member-category/assign-mc-list" mm-active="assign-mc-list">
                <i class="metismenu-icon"></i> Assign Member Category
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="#" class="text-primary" 
        mm-active="view-g-list|assign-g-list">
        <i class="metismenu-icon pe-7s-note2"></i><i class="pe-7s-users"></i> Group Assignment
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/bulk-assignment/group/view-g-list" mm-active="view-mc-list">
                <i class="metismenu-icon"></i> View Group
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/bulk-assignment/group/assign-g-list" mm-active="assign-mc-list">
                <i class="metismenu-icon"></i> Assign Group
            </a>
        </li>
    </ul>
</li>
<li>
    <a href="#" class="text-primary" 
        mm-active="view-sg-list|assign-sg-list">
        <i class="metismenu-icon pe-7s-note2"></i><i class="pe-7s-users"></i> Sub-Group Assignment
        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
    </a>
    <ul>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/bulk-assignment/subgroup/view-sg-list" mm-active="view-mc-list">
                <i class="metismenu-icon"></i> View Sub-Group
            </a>
        </li>
        <li>
            <a href="<?= CLIENT_BASE_URL; ?>groupings/bulk-assignment/subgroup/assign-sg-list" mm-active="assign-mc-list">
                <i class="metismenu-icon"></i> Assign Sub-Group
            </a>
        </li>
    </ul>
</li>