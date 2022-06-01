
<?php
    function TemperatureError(String $error = "") { ?>
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-6">
                <div class="main-card mb-3 card shadow">
                    <div class="card-header-tab card-header-tab-animation card-header h-25">
                        <div class="card-header-title">
                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> 
                            <h5 class="card-title">--</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><?= $error; ?></h5>
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
    <?php }
?>