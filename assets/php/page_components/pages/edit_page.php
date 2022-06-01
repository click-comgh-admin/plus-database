<div class="content">
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card card-tasks">
                <div class="card-header ">
                    <h6 class="title d-inline"><a href="<?= currentPage; ?>">Back to Pages</a></h6>
                    <div class="dropdown">
                        <button type="button" class="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                            <i class="--icons icon-settings-gear-63"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="<?= currentPage; ?>">Pages</a>
                            <a class="dropdown-item" href="<?= currentPage; ?>?add-page">Add Page</a>
                        </div>
                    </div>
                </div>
                <div class="card-body ">
                    <?php
                        $page_details = $AD_Api->pages($all='pages', $id=$_GET['edit-page'], function ($result) {
                            /*GET PAGE DETAILS*/
                            return @$result[0];
                        });
                        if (!empty($page_details)) {
                            $form_type = "update";
                            require_once 'form.php';
                        } else { ?>
                            <div class="row justify-content-center my-5 py-5">
                                <style type="text/css">
                                    .icon-class {
                                        -webkit-transform: rotate(180deg);
                                        -moz-transform: rotate(180deg);
                                        -ms-transform: rotate(180deg);
                                        -o-transform: rotate(180deg);
                                        transform: rotate(180deg);
                                        color: #1e1e2f;
                                        font-weight: 700;
                                        box-shadow: 0 0 10px rgba(104, 104, 236, .5);
                                    }
                                </style>
                                <div class="col-lg-6 col-md-8">
                                    <h5 class="card-category card-title text-center mb-0">
                                        <i class="--icons --icons-16 --icons-bg-circle icon-simple-remove text-warning mr-1 bg-dark icon-class"></i>
                                        Sorry, Page does not exist or cannot be edited.
                                    </h5>
                                    <hr class="my-2 bg-light">
                                    <h5 class="card-category card-title text-center">
                                        Go Back to Pages
                                        <a href="<?= currentPage; ?>" target="_blank">
                                            <i class="--icons --icons-16 --icons-bg-circle icon-double-right mx-1 bg-light icon-class"></i>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        <?php }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>