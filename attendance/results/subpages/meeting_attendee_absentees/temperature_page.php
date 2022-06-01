
<div class="row justify-content-center">
    <div class="col-md-8 col-lg-8">
        <div class="main-card mb-3 card shadow">
            <?php
                $get_date = (isset($_COOKIE['date_filter_input'])) ? date("Y-m-d", strtotime($_COOKIE['date_filter_input'])): date("Y-m-d");
                        
                if (isset($_GET['meeting_id']) && !empty(@$_GET['meeting_id'])) {

                    $get_string = "attendance/temperature/meeting?account_id=$account_id&member_id=".$member_id."&meeting_id=".$meeting_id."&date=".$get_date;
                    $absentee = $ccApi->fetch_from($get_string, function($absentee)
                    {
                        return isset($absentee)? $absentee: [];
                    }, $debug = false);
                    
                } else {
        
                    $get_string = "attendance/temperature/absentee?account_id=$account_id&member_id=".$member_id."&date=".$get_date;
                    $absentee = $ccApi->fetch_from($get_string, function($absentee)
                    {
                        return isset($absentee)? $absentee: [];
                    }, $debug = false);

                }
                // echo $type_id;

            ?>
            <div class="card-header-tab card-header-tab-animation card-header h-25">
                <div class="card-header-title">
                    <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i> Enter Temperature
                </div>
            </div>
            <div class="card-body">
                <?php 
                    require_once(BASE_DIRECTORY.'/attendance/results/forms/attendance-meeting/enter_temperature.php');
                ?>
            </div>
            <div class="card-footer">
            </div>
        </div>
    </div>
</div>