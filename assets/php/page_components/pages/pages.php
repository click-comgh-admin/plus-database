<div class="content">
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card card-tasks">
                <div class="card-header ">
                    <h6 class="title d-inline">Pages</h6>
                    <p class="card-category d-inline">
                        (<?= count($dashboardPages); ?> pages, <span table-tasks="selected">0</span> Selected)
                    </p>
                    <div class="dropdown">
                        <button type="button" class="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                            <i class="--icons icon-settings-gear-63"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="<?= currentPage; ?>?add-page">Add Page</a>
                            <a class="dropdown-item" href="javascript:void(0)" table-tasks="delete" btn-url="<?= API_BASE_URL; ?>ad_pages?delete" btn-data=<?= json_encode(["user_id"=>USER_ID, "ids"=>[]]); ?>>Delete Page(s)</a>
                        </div>
                    </div>
                </div>
                <div class="card-body ">
                    <div class="table-full-width table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Page</th>
                                    <th class="text-center">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <i class="<?= $page['moa_page_icon']; ?>"></i> -->
                                <pre>
                                    <?php
                                        //print_r($dashboardPages);
                                    ?>
                                </pre>
                                <?php
                                    foreach ($dashboardPages as $key => $page) {
                                        $url = BASE_URL.$page['moa_page_url'];
                                        $TimeAgo = new TimeAgo($page['moa_page_date']);?>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                      <input class="form-check-input" type="checkbox" value="<?= $page['moa_page_id']; ?>" table-tasks="checkbox">
                                                      <span class="form-check-sign">
                                                        <span class="check"></span>
                                                      </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="title">
                                                    <?= $page['moa_page_name']; ?>
                                                    <a href="<?= $url; ?>">
                                                        <span class="text-light <?= $page['moa_page_icon']; ?> --icons-25"></span>
                                                    </a>    
                                                </p>
                                                <p class="text-muted">
                                                    <button type="button" class="btn btn-sm accent" data-container="body" data-original-title="Description" data-toggle="popover" data-placement="left" data-content="<?= trim(preg_replace( '/\r+/',' ', trim(preg_replace( '/\n+/','<br />', @$page['moa_page_description'])))); ?>"
                                                        data="<?= $sidebar_theme['moa_account_theme_sidebar_color']; ?>">
                                                            <i class="--icons --icons-16 fa fa-info text-white"></i> 
                                                        </button>
                                                </p>
                                                <p class="text-muted small text-right">
                                                    <?= $TimeAgo->get(); ?>
                                                        <button type="button" class="btn btn-sm accent" data-container="body" data-original-title="Last Updated On" data-toggle="popover" data-placement="bottom" data-content="<?= renderDay(" D, M d, Y ", $page['moa_page_date']); ?> @ <?= date("h:i A
                                                            ", strtotime($page['moa_page_date'])); ?>" data="<?= $sidebar_theme['moa_account_theme_sidebar_color']; ?>">
                                                        <i class="--icons --icons-16 icon-watch-time text-white"></i> 
                                                    </button>
                                                </p>
                                            </td>
                                            <td class="td-actions text-center">
                                                <a href="<?= currentPage; ?>?edit-page=<?= $page['moa_page_id']; ?>" type="button" class="btn btn-link" title="Edit Task" data-toggle="tooltip" data-placement="left">
                                                    <i class="--icons icon-pencil text-warning"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    <?php }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>