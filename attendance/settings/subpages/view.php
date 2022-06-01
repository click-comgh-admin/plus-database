
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-6">
                                <div class="mb-3 main-card card shadow">
                                    <div class="card-header">
                                        <div class="card-header-title">
                                            Set Expected Attendance Days/ (per month). 
                                            <i class="text-info"> Members Who Fall Below This Number Will be Deemed Inactive.</i>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <?php
                                            require_once Current_BaseDir."subpages/expected_attendance_days.php";
                                        ?>
                                    </div>
                                    <div class="card-footer">
                                        <div class="btn btn-actions-pane-right">--</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="mb-3 main-card card shadow">
                                    <div class="card-header">
                                        <div class="card-header-title">
                                            Set Meeting Days
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <?php
                                            require_once Current_BaseDir."subpages/meeting_days.php";
                                        ?>
                                    </div>
                                    <div class="card-footer">
                                        <div class="btn btn-actions-pane-right">--</div>
                                    </div>
                                </div>
                            </div>
                        </div>