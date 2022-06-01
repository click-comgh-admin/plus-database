<div class="row justify-content-center">
    <div class="col-lg-8">
        <form role="form" action="<?= API_BASE_URL; ?>ad_pages?<?= $form_type; ?>" form-container="pages">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <?php
                            $input_value = 'value="'.(($form_type=='update') ? $page_details['moa_page_name'] : '').'"';
                            $input_attributes = ''.$input_value.' name="page_name" id="page_name" placeholder="Enter Page Name"';
                            echo $tf->use(DIRECTORY."/templates/template-files/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"--icons icon-simple-add text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <?php
                            $input_value = 'value="'.(($form_type=='update') ? $page_details['moa_page_url'] : '').'"';
                            $input_attributes = ''.$input_value.' name="page_url" id="page_url" placeholder="Enter Page Url"';
                            echo $tf->use(DIRECTORY."/templates/template-files/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"--icons icon-world text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <?php
                            $input_value = 'value="'.(($form_type=='update') ? $page_details['moa_page_icon'] : '').'"';
                            $input_attributes = ''.$input_value.' name="page_icon" id="page_icon" placeholder="Enter Page Icon"';
                            echo $tf->use(DIRECTORY."/templates/template-files/form/input-icon--left.tmpl", [
                                [ "name"=>"icon", "value"=>"--icons icon-puzzle-10 text-success" ],
                                [ "name"=>"type", "value"=>"text" ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group mb-3">
                        <?php
                            /*<!-- <?= ($page_details['moa_page_description']); ?> -->*/
                            $input_attributes = 'name="page_description" id="page_description" placeholder="Enter Page Description"';
                            echo $tf->use(DIRECTORY."/templates/template-files/form/input-textarea.tmpl", [
                                [ "name"=>"default_value", "value"=>($form_type=='update') ? $page_details['moa_page_description'] : '' ],
                                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                            ]);
                        ?>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center" animate-btn-icon>
                        <input type="hidden" name="user_id" value="<?= USER_ID; ?>">
                        <?php
                            if ($form_type=="update") { ?>
                                <input type="hidden" name="page_id" value="<?= $page_details['moa_page_id']; ?>">
                            <?php }
                        ?>
                        <button class="btn btn-sm my-1 btn-success btn-block" type="submit" form-submit="pages">
                            <span class="btn-inner--text">Done</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>