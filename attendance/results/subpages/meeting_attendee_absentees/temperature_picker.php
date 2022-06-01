<?php
    $url = "member=".@$_GET['member']."&meeting_id=".@$_GET['meeting_id']."";
?>

<div class="row justify-content-center">
    <div class="col-md-6 col-lg-6">
        <div class="main-card mb-3 card shadow">
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> 
                    <h5 class="card-title my-2">Select Temperature Type</h5>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title mb-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 text-center my-1">
                                <a href="temperature?<?= $url; ?>&type=1" class="btn btn-outline-info" type="button">In Temperature</a>
                            </div>
                            <div class="col-md-6 text-center my-1">
                                <a href="temperature?<?= $url; ?>&type=2" class="btn btn-outline-info" type="button">Out Temperature</a>
                            </div>
                        </div>
                    </div>
                </h5>
            </div>
            <div class="card-footer">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> 
                    <h5 class="card-title">--</h5>
                </div>
            </div>
        </div>
    </div>
</div>