<?php 
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("members", md5("members"));
    $this_filter_type = "main";
    $page_url = "clocking-members?gender=".@$_GET['gender'];
    $page_url = htmlentities($page_url);
    $page_reset = "clocking-members";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-12"></div>
                    <div class="col-md-12 col-lg-5">
                    </div>
                    <div class="col-md-12 col-lg-7">
                        <?php require_once Current_BaseDir."/forms/clocking-members/main_filter_form.php"; ?>
                    </div>
                    <div class="col-md-12 col-lg-12"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2 bg-white" enable-fullscreen="membership-data">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-10">
                            <h5 class="card-title">Membership Data</h5>
                            <?php 
                                require_once "filtered_results.php";

                                $encryptor = new Encryptor("members-data--download", md5("members-data--download"));
                                $queryArray = [
                                    "client_id"=>AccountInfoId,
                                    "gender"=>$this_gender,
                                ];
                                $queryStr = json_encode($queryArray);
                                $encQueryStr = $encryptor->encrypt($queryStr);
                                $endpoint = "members";
                                require_once(Current_BaseDir.'/forms/clocking-members/download.php');
                                require_once Current_BaseDir."/subpages/clocking-members/table.php"; 
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>