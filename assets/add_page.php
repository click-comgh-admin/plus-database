<div class="content">
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card card-tasks">
                <div class="card-header ">
                    <h6 class="title d-inline">Pages</h6>
                    <p class="card-category d-inline">
                        (
                        <?= count($pages); ?> pages, <span table-tasks="selected">0</span> Selected)
                    </p>
                    <div class="dropdown">
                        <button type="button" class="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                            <i class="--icons icon-settings-gear-63"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="<?= currentPage; ?>?add-page">Add Page</a>
                            <a class="dropdown-item" href="javascript:void(0)" table-tasks="delete" btn-url="" btn-data=>Delete Page(s)</a>
                        </div>
                    </div>
                </div>
                <div class="card-body ">
                    <?php
                        $form_type = "add";
                        require_once 'form.php';
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>