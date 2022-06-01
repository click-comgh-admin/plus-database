<?php
    /** @var ClickComApi $ccApi */
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <?php
                            require_once Current_BaseDir."/forms/clocking-agent/new.php";
                            
                            $get_string = "attendance/clocking-agent/clocking-agents?account_id=" . AccountInfoId;
                            $clocking_agents = $ccApi->fetch_from($get_string=$get_string, function($clocking_agent) {
                                return $clocking_agent;
                            }, $debug=false);
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Mobile App Admins</h5>
                <div class="table-responsive">
                    <table class="mb-0 table table-striped" pagin_table="random-access">
                        <thead>
                            <tr>
                                <th style="white-space: nowrap;">Admin Info</th>
                                <?php /*<th>
                                    <span>Assigned</span> <span class="fa">Clocking Groups</span>
                                </th> */ ?>
                                <th style="white-space: nowrap;">
                                    <span>Actions</span>
                                    <span class="fa">Date/ Time</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                use Encryptor\Encryptor;
                                foreach ($clocking_agents as $key => $clocking_agent) {
                                    $_user_id = (isset($clocking_agent['pdad_member_id'])? $clocking_agent['pdad_member_id']: 0);
                                    $agent_id = (isset($clocking_agent['pdad_id'])? $clocking_agent['pdad_id']: 0);
                                    $get_string = "membership/web/member-id?id=$_user_id&account_id=" . AccountInfoId . "nameonly=0&systemid=1&detailed=0";
                                    $member_info = $ccApi->fetch_from($get_string=$get_string, function($member_info) {
                                        return $member_info;
                                    }, $debug=false);
                                    // echo "<pre>";
                                    // print_r(['$member_info' => $member_info]);
                                    // echo "</pre>"; 
                                    if (isset($member_info[0])) {
                                        $member_info = $member_info[0]; 
                                        $encryptedMemberId = $member_info['encryptedMemberId'];
                                        $fullName = $member_info['firstname']. " " .$member_info['surname'];
                                        $phoneNumber = isset($member_info['extraInfo']['memberAppProfile']['phoneNumber'])?
                                            $member_info['extraInfo']['memberAppProfile']['phoneNumber']: 
                                            "+".$member_info['pdm_phone']; ?>
                                        <tr>
                                            <td style="white-space: nowrap;">
                                                <div class=" my-1">
                                                    <a href="<?= CLIENT_BASE_URL; ?>members?show-member&member=<?= $encryptedMemberId; ?>" class="btn btn-success btn-sm btn-block"
                                                        type="button" target="_blank"><?= $fullName; ?></a>
                                                </div>
                                                <div class=" my-1">
                                                    <a href="tel:<?= $phoneNumber; ?>" class="btn btn-success btn-sm btn-block" type="button">
                                                        <?= $phoneNumber; ?></a>
                                                </div>
                                            </td>
                                            <td>
                                                <?php
                                                    $clocking_agent_status = (int)$clocking_agent['pdad_status'];
                                                    $agentStatusBtn = ($clocking_agent_status == 1) ? "btn-outline-success" : "btn-outline-danger";
                                                    $agentStatusTittle = ($clocking_agent_status == 1) ? "Active: Deactivate" : "Inactive: Activate";

                                                    $postData = json_encode(["agent_id"=>$agent_id, "member_id"=>$_user_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]);
                                                    $url = API_BASE_URL."attendance/clients/settings/clocking-agent/update-clocking-agent-status"
                                                ?>
                                                <button type="button" class="btn btn-sm m-1 <?= $agentStatusBtn; ?> shadow"
                                                    btn-submit-post='<?= $postData; ?>' btn-submit-post--confirm="Update Admin Status?"
                                                    btn-submit-post--url="<?= $url; ?>">
                                                    <span class="pe-7s-compass"> <?= $agentStatusTittle; ?></span>
                                                </button>
                                                <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/clocking-agent-groups?agent-id=<?= $agent_id; ?>"
                                                    class="btn btn-sm m-1 btn-info" type="button" target="_blank">
                                                    Assigned Groups
                                                </a>
                                                <a href="<?= CLIENT_BASE_URL; ?>attendance/settings/clocking-agent-subgroups?agent-id=<?= $agent_id; ?>"
                                                    class="btn btn-sm m-1 btn-outline-info" type="button" target="_blank">
                                                    Assigned Sub-Groups
                                                </a>
                                                <div class="d-block m-1">
                                                    <span class="shadow shadow-lg p-1 bg-white rounded text-dark d-inline-block">
                                                        <?= date('Y/ m/ d @ H:i A', strtotime($clocking_agent['pdad_date'])); ?>
                                                        <?php
                                                            if (!empty($clocking_agent)) {
                                                                $TimeAgo = new TimeAgo(date('D, d M Y H:i:s', strtotime($clocking_agent['pdad_date'])));
                                                            }
                                                        ?>
                                                        <i><?= !empty($clocking_agent) ? @$TimeAgo->get(): "-"; ?></i><br>
                                                    </span>
                                                </div>
                                                <button type="button" class="btn btn-sm m-1 btn-danger shadow"
                                                    btn-submit-post=<?= json_encode(["agent_id"=>$agent_id, "member_id"=>$_user_id, "client_id"=>AccountInfoId, "admin_user_id"=>$user_id]); ?>
                                                    btn-submit-post--confirm="Remove Mobile App Admin?"
                                                    btn-submit-post--url="<?= API_BASE_URL."attendance/clients/settings/clocking-agent/delete-clocking-agent"; ?>">
                                                    <span class="pe-7s-trash"> Remove</span>
                                                </button>
                                            </td>
                                        </tr>
                                    <?php }
                                }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>