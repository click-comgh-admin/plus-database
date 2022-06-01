<form class="nav" role="form" action="<?= $page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center w-100">
        <?php if (isset($_GET['group'])) { ?>
            <input type="hidden" name="group" />
        <?php } ?>
        <?php if (isset($_GET['subgroup'])) { ?>
            <input type="hidden" name="subgroup" />
        <?php } ?>
        <?php if (isset($_GET['group_id'])) { ?>
            <input type="hidden" name="group_id" value="<?= isset($_GET['group_id'])
                ? $_GET['group_id']: 0; ?>" />
        <?php } ?>
        <?php if (isset($_GET['subgroup_id'])) { ?>
            <input type="hidden" name="subgroup_id" value="<?= isset($_GET['subgroup_id'])
                ? $_GET['subgroup_id']: 0; ?>" />
        <?php } ?>
        
        <input type="hidden" name="gender" value="<?= isset($_GET['gender'])
            ? $_GET['gender']: 0; ?>" />
        <input type="hidden" name="status" value="<?= isset($_GET['status'])
            ? $_GET['status']: 0; ?>" />
        <input type="hidden" name="quarter" value="<?= isset($_GET['quarter'])
            ? $_GET['quarter']: "all"; ?>" />
        
        <div class="col-lg-6">
			<?php 
				$tittle_placeholder = "Date";
				$id_name = "date_filter_input";
			?>
			<h6><?= $tittle_placeholder; ?><?= ($isYear) ? " => Year" : ""; ?></h6>
            <?php
            // _GET['date_filter_input
                $input_value = @(isset($_COOKIE['date_filter_input'])) ? $_COOKIE['date_filter_input'] : null;
                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;

                if ($isYear) {
                    $input_value = @(is_null($input_value)) ? date("Y") : @date("Y", strtotime("1/1/$input_value"));
                    $years = range(((int)date("Y")-20), ((int)date("Y")+20));
                    $_years = '';

                    foreach ($years as $key => $year) {
                        $year_selected = @((int)$input_value == (int)$year) ? "selected": "";
                        $_years .= '<option value="'.@$year.'" '.@$year_selected.'>'.@$year.'</option>';
                    }
                    
                    $input_value = '
                        <option value="">'.$tittle_placeholder.' => Year</option>
                        '.$_years.'
                    ';
                    $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                    echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                        [ "name"=>"icon", "value"=>"pe-7s-leaf icon-gradient bg-warm-flame text-success" ],
                        [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                        [ "name"=>"options", "value"=>$input_value ],
                    ]);
                } else {
                    $input_value = @(is_null($input_value)) ? date("m/d/Y") : date("m/d/Y", strtotime(@$input_value));
                    $input_value = 'value="'.$input_value.'"';
                        
                    $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                    echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                        [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                        [ "name"=>"type", "value"=>"text" ],
                        [ "name"=>"input_class", "value"=>"datepicker-here " ],
                        [ "name"=>"input_attributes", "value"=>$input_attributes ],
                    ]);
                }
            ?>
        </div>
        <div class="col-lg-6">
            <?php
                if ($isYear) { ?>
                    <button type="submit" name="<?= $id_name; ?>" value="<?= date("Y"); ?>"
                        class="btn btn-sm bg-sunny-morning text-light text-white font-weight-bold">Reset Date</button>
                <?php } else { ?>
                    <button type="submit" name="<?= $id_name; ?>" value="<?= date("m/d/Y"); ?>"
                        class="btn btn-sm bg-sunny-morning text-light text-white font-weight-bold">Reset Date</button>
                <?php }
            ?>
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light text-white font-weight-bold">Filter</button>
        </div>
    </div>
</form>