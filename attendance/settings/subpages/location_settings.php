
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-4">
                                <div class="mb-3 main-card card shadow">
                                    <div class="card-header h-25">
                                        <div class="card-header-title">
                                            Set Attendance Locations Settings. 
                                            <i class="text-info small"> Latitude and Longitude are required to pinpoint the area in which attendance clocking is possible.</i>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <?php
                                            require_once Current_BaseDir."subpages/location_settings_lat_lon_radius.php";
                                        ?>
                                    </div>
                                    <div class="card-footer">
                                        <div class="btn btn-actions-pane-right">--</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-8">
                                <div class="mb-3 main-card card shadow">
                                    <div class="card-header">
                                        <div class="card-header-title">
                                            Location Info...
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <?php
                                            require_once Current_BaseDir."subpages/location_settings_lat_lon_radius_view.php";
                                        ?>
                                    </div>
                                    <div class="card-footer">
                                        <div class="btn btn-actions-pane-right">--</div>
                                    </div>
                                </div>
                            </div>
                        </div>