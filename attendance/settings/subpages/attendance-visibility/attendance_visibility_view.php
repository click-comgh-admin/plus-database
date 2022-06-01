<div class="col-md-12 px-1 table-responsive">
    <table class="align-middle mb-0 table table-borderless table-striped table-hover" 
        pagin_table="random-access">
        <thead>
            <tr>
                <th style="white-space: nowrap;"><span class="pe-7s-check"></span></th>
                <th style="white-space: nowrap;">Public Visibility</th>
            </tr>
        </thead>
        <tbody>
            <?php
                foreach ($visibility as $key => $visible) { 
                    // print_r($visible);
                    $member_id = isset($visible["pdad_member_id"])? $visible["pdad_member_id"]: 0;
                    
                    $get_string = "membership/one_client_member?account_id=".AccountInfoId."&id=$member_id";
                    $member = $ccApi->fetch_from($get_string, function($member)
                    {
                        return isset($member['pdm_id'])? $member: [];
                    }, $debug = false);
                    // print_r($member);
                    
                    $photo = isset($member['pdm_profile_picture'])? $member['pdm_profile_picture']: "";
                    $fname = isset($member['pdm_firstname'])? $member['pdm_firstname']: "";
                    $lname = isset($member['pdm_surname'])? $member['pdm_surname']: "";
                    $fullname = $fname . " " . $lname; ?>
                    <tr>
                        <th>
                            <?= getIdentityHtml($photo, $fullname); ?>
                        </th>
                        <td class="text-center">
                            <div class="d-block m-1">
                                <span class="shadow shadow-lg p-1 d-block bg-white rounded text-dark d-inline-block">
                                    <b> <i class="text-info">Visible</i></b>
                                    <?= hide_visibility_btn($member_id, AccountInfoId, $user_id); ?>
                                </span>
                            </div>
                        </td>
                    </tr>
                <?php }
                
                function getIdentityHtml($photo, $fullname)
                {
                    $file_base_url = FileBucketBaseUrl;
                    return "
                        <div class=\"p-0\" background-image=\"$file_base_url/files/members/profile-picture/$photo\">
                            <div class=\"widget-content p-3\" style=\"background: rgba(0,0,0,.5);\">
                                <div class=\"widget-content-wrapper\">
                                    <div class=\"widget-content-center ml-auto mr-auto\">
                                        <div class=\"widget-content-center\">
                                            <img width=\"115\" height=\"115\" class=\"rounded-circle shadow\" alt=\"Contact Image\"
                                                src=\"$file_base_url/files/members/profile-picture/$photo\">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=\"d-block m-1\">
                            <span class=\"shadow shadow-lg p-1 d-block bg-white rounded text-dark d-inline-block\">
                                <b class=\"pe-7s-user font-weight-bold\"></b> $fullname
                            </span>
                        </div>
                    ";
                }

                function hide_visibility_btn($member_id, $account_id, $user_id) { ?>
                    <button class="btn btn-outline-secondary" style="white-space: nowrap;"
                        btn-submit-post=<?= json_encode([
                            "member_id"=>$member_id, 
                            "client_id"=>$account_id, 
                            "admin_user_id"=>$user_id
                        ]); ?>
                        btn-submit-post--confirm="Hide Visibility ?"
                        btn-submit-post--url="<?= API_BASE_URL."attendance/clients/clocking/visibility-hide"; ?>">
                        <span class="pe-7s-culture"></span>
                        <span class="">Hide Visibility</span>
                    </button>
                <?php }
            ?>
        </tbody>
    </table>
</div>