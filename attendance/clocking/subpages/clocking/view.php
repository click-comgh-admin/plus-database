<?php
    $page = "attendance-clocking";
    $page_url = Current_BaseUrl."$page";

    require_once "filtered_results.php";

    $get_string = "attendance/v2/clocking/clocking-time-from-date?account_id=$account_id&date=$selected_date";
    $clockingTime = $ccApi->fetch_from($get_string, function($clockingTime)
    {
        return isset($clockingTime[0])? $clockingTime[0]: [];
    }, $debug = false);
    $meetingTitle = isset($clockingTime['meetingTitle'])? $clockingTime['meetingTitle']: "--";
    $meetingDay = isset($clockingTime['meetingDay']['name'])? $clockingTime['meetingDay']['name']: "--";
    $expectedInTime = isset($clockingTime['timeIn']['date']) ? date("H:i:s", strtotime($clockingTime['timeIn']['date'])): "";
    $expectedOutTime = isset($clockingTime['timeOut']['date']) ? date("H:i:s", strtotime($clockingTime['timeOut']['date'])): "";
    
    if (isset($_GET['group'])) { ?>
        <div class="row">
            <div class="col-md-6 col-xl-6">
                <a href="<?= $page_url; ?>" class="card btn btn-block mb-3 widget-content bg-sunny-morning">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">All Members</div>
                            <div class="widget-subheading">View All Members.</div>
                        </div>
                        <div class="widget-content-right">
                            <div class="widget-numbers text-white">
                                <div class="card shadow p-1">
                                    <h4 class="pe-7s-users fa-1x icon-gradient bg-sunny-morning">
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-6 col-xl-6">
                <a href="<?= $page_url; ?>?subgroup" class="card btn btn-block mb-3 widget-content bg-arielle-smile">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Members By Subgroup</div>
                            <div class="widget-subheading">Filter Members Based on their subgroup.</div>
                        </div>
                        <div class="widget-content-right">
                            <div class="widget-numbers text-white">
                                <div class="card shadow p-1">
                                    <h4 class="pe-7s-share fa-1x icon-gradient bg-arielle-smile">
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <?php require_once('clocking_groups.php');
    } else if (isset($_GET['subgroup'])) { ?>
        <div class="row">
            <div class="col-md-6 col-xl-6">
                <a href="<?= $page_url; ?>?group" class="card btn btn-block mb-3 widget-content bg-midnight-bloom">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Members By Group</div>
                            <div class="widget-subheading">Filter Members Based on their group.</div>
                        </div>
                        <div class="widget-content-right">
                            <div class="widget-numbers text-white">
                                <div class="card shadow p-1">
                                    <h4 class="pe-7s-vector fa-1x icon-gradient bg-midnight-bloom">
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-6 col-xl-6">
                <a href="<?= $page_url; ?>" class="card btn btn-block mb-3 widget-content bg-sunny-morning">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                        <div class="widget-heading">All Members</div>
                            <div class="widget-subheading">View All Members.</div>
                        </div>
                        <div class="widget-content-right">
                            <div class="widget-numbers text-white">
                                <div class="card shadow p-1">
                                    <h4 class="pe-7s-users fa-1x icon-gradient bg-sunny-morning">
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <?php require_once('clocking_subgroups.php');
    } else { ?>
        <div class="row">
            <div class="col-md-6 col-xl-6">
                <a href="<?= $page_url; ?>?group" class="card btn btn-block mb-3 widget-content bg-midnight-bloom">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Members By Group</div>
                            <div class="widget-subheading">Filter Members Based on their group.</div>
                        </div>
                        <div class="widget-content-right">
                            <div class="widget-numbers text-white">
                                <div class="card shadow p-1">
                                    <h4 class="pe-7s-vector fa-1x icon-gradient bg-midnight-bloom">
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-6 col-xl-6">
                <a href="<?= $page_url; ?>?subgroup" class="card btn btn-block mb-3 widget-content bg-arielle-smile">
                    <div class="widget-content-wrapper text-white">
                        <div class="widget-content-left">
                            <div class="widget-heading">Members By Subgroup</div>
                            <div class="widget-subheading">Filter Members Based on their subgroup.</div>
                        </div>
                        <div class="widget-content-right">
                            <div class="widget-numbers text-white">
                                <div class="card shadow p-1">
                                    <h4 class="pe-7s-share fa-1x icon-gradient bg-arielle-smile">
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <?php require_once('clocking.php');
    }
?>