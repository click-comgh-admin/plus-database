<?php
    $page = "attendance-records";
    $page_url = Current_BaseUrl."$page";
    
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
        <?php require_once('report_groups.php');
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
        <?php require_once('report_subgroups.php');
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
        <?php require_once('report.php');
    }
?>