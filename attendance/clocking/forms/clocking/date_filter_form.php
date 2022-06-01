<form class="container" role="form" action="<?= $page_url . "?" . $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <input type="hidden" name="<?= $page; ?>" />
        <?php if (isset($_GET['group_id'])) { ?>
            <input type="hidden" name="group_id" value="<?= $this_group_id; ?>" />
        <?php } ?>
        <?php if (isset($_GET['subgroup_id'])) { ?>
            <input type="hidden" name="subgroup_id" value="<?= $this_subgroup_id; ?>" />
        <?php } ?>
        <input type="hidden" name="gender" value="<?= $this_gender; ?>" />
        <input type="hidden" name="member" value="<?= isset($_GET['member'])? $_GET['member']: 0; ?>" />

        <div class="col-lg-12">
			<?php 
				$tittle_placeholder = "Select Date";
				$id_name = "selected_date";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : null;
                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : $input_value;

                $input_value = @(is_null($input_value)) ? $selected_date : date("Y/m/d", strtotime(@$input_value));
                $input_value = 'value="'.$input_value.'"';
                        
                $input_attributes = ''.@$input_value.' set_default="true" name="'.@$id_name.'" id="'.@$id_name.'" data-language="en" data-multiple-dates="1" data-multiple-dates-separator=", " data-position="top left" placeholder="'.@$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-date icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"text" ],
                    [ "name"=>"input_class", "value"=>"datepicker-here " ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <?php
            $newQueryString = str_replace("%3A", ":", $_SERVER['QUERY_STRING']);
            foreach ($_GET as $gkey => $get) {
                if ($gkey === "selected_date") {
                    $newQueryString = str_replace("&$gkey=", "", str_replace("$get", "", $newQueryString));
                }
            }
        ?>
        <div class="col-lg-6 text-center">
            <a type="button" href="<?= $page_url . "?" . $newQueryString . "&$id_name=$today"; ?>"
                class="btn btn-sm bg-midnight-bloom text-light text-white font-weight-bold m-1">Reset Date</a>
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light text-white font-weight-bold m-1">Filter</button>
        </div>
    </div>
</form>