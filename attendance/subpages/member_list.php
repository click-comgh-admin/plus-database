<?php
    use Encryptor\Encryptor;

    function open_modal_groups($groups, $account_id, $ccApi)
    {
        $groupList = "<ul class='d-block'>";
        foreach ($groups as $key => $group) {
            $groups = $ccApi->groups($all="one", $account_id, $id=$group['pdmmg_group_id'], function($groups)
            {
                return @$groups[0];
            });
            $groupList .= "<li class=''>".@$groups['pdmg_group']."</li>";
        }
        return $groupList .= "</ul>";
    }

    function open_modal_subgroups($subgroups, $account_id, $ccApi)
    {
        $subgroupList = "<ul class='d-block'>";
        foreach ($subgroups as $key => $subgroup) {                                
            $subgroups = $ccApi->subgroups($all="one", $account_id, $group_id = null, $id=$subgroup['pdmms_subgroup_id'],
            function($subgroups) {
                return @$subgroups[0];
            });
            $subgroupList .= "<li class=''>".@$subgroups['pdmg_subgroup']."</li>";
        }
        return $subgroupList .= "</ul>";
    }

?>
<pre><?php //print_r($client_members); ?></pre>

<?php
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
                <div class="col-md-8 col-lg-6">
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
                                    foreach ($members as $key => $member) {
                                        $member_id = $member['pdm_id'];
                                        if (!in_array($member_id, $not_marked)) { ?>
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
                                                                    <?= mark_attendance($member_id, date("N"), $account_id, $user_id, "btn btn-transparent btn-sm shadow shadow-sm p-0"); ?>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-center">
                                                                    <?php
                                                                        $member_id = $member['pdm_id'];
                                                                        $encryptor = new Encryptor("members", md5("members"));
                                                                        $member_id = $encryptor->encrypt($member_id);
                                                                    ?>
                                                                    <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $member_id; ?>" class="btn btn-success btn-sm" type="button">Profile Details</a>
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
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr><td class="pt-1 pb-0 bg-light"></td><td class="pt-1 pb-0 bg-light"></td></tr>
                                        <?php }
                                    }
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