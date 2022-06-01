<?php
    $page = "clocking-time";
    $page_url = Current_BaseUrl."$page";
    
    $get_string = "meeting_days?account_id=$account_id";
    $meeting_days = $ccApi->attendance($get_string, function($meeting_days)
    {
        return @$meeting_days;
    }, $debug = false);

    $MD = [];
    foreach ($meeting_days as $key => $meeting_day) {
        $md = $meeting_day['pdad_day'];
        $get_string = "day?id=$md";
        $day_name = $ccApi->attendance($get_string, function($day) {
            return isset($day[0]['pdad_day'])? $day[0]['pdad_day']: "";
        }, $debug = false);
        $m_day = [ "id"=>$md, "name"=>$day_name ];
        if (!in_array($m_day, $MD)) {
            array_push($MD, $m_day);
        }
    }
    // print_r($MD);
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-4">
        <div class="mb-3 main-card card shadow">
            <div class="card-header">
                <div class="card-header-title">
                    Clocking Time Settings. 
                    <i class="text-info small"> Set "time in" and "time out".</i>
                </div>
            </div>
            <div class="card-body">
                <?php
                    require_once Current_BaseDir."/forms/filter_meeting_days_time.php";
                ?>
            </div>
            <div class="card-body">
                <?php
                    require_once Current_BaseDir."subpages/clocking_time/clocking_time_setup.php";
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
                    Timing Info...
                </div>
            </div>
            <div class="card-body px-0">
                <?php
                    require_once Current_BaseDir."subpages/clocking_time/clocking_time_view.php";
                ?>
            </div>
            <div class="card-footer">
                <div class="btn btn-actions-pane-right">--</div>
            </div>
        </div>
    </div>
</div>