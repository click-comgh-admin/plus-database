<?php
    $page = "set-meeting-time";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-4">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Select Meeting<hr/></h5>
                <?php 
                    require_once Current_BaseDir."/forms/set-meeting-time/select-meeting.php";
                ?>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <?php 
                    if (isset($_GET['show-meeting']) && !empty(@$_GET['show-meeting'])) {
                        require_once "setup-meeting.php";
                    } else {
                        require_once "all-meetings.php";
                    }
                ?>
            </div>
        </div>
    </div>
</div>