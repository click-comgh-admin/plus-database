<form class="container" role="form" action="<?= $page_url; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <input type="hidden" name="<?= $page; ?>" />
        <input type="hidden" name="meeting_id" value="<?= @$_GET['meeting_id']; ?>" />
        <?php
            foreach ($_GET as $gkey => $get) { 
                if ($gkey === "clockintime") {} else {
                    if ($gkey === "clockouttime") {} else {
                        if ($gkey === $page) {} else { ?>
                            <input type="hidden" name="<?= $gkey; ?>" value="<?= $get; ?>" />
                        <?php }
                    }
                }
            }
        ?>
        <?php
            $get_string = "attendance/clocking/clocking-time?account_id=$account_id";
            $clocking_time = $ccApi->fetch_from($get_string, function($clocking_time)
            {
                return isset($clocking_time[0])? $clocking_time[0]: [];
            }, $debug = false);
        ?>
        <div class="col-lg-6">
			<?php 
				$tittle_placeholder = "Clock In Time";
				$id_name = "clockintime";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : null;
                $clockintime = $input_value;
                $input_value = 'value="'.$input_value.'"';
                        
                $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-clock icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"time" ],
                    [ "name"=>"input_class", "value"=>"" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div class="col-lg-6">
			<?php 
				$tittle_placeholder = "Clock Out Time";
				$id_name = "clockouttime";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = @(isset($_GET[$id_name])) ? $_GET[$id_name] : null;
                $clockouttime = $input_value;
                $input_value = 'value="'.$input_value.'"';
                        
                $input_attributes = ''.@$input_value.' name="'.@$id_name.'" id="'.@$id_name.'" placeholder="'.@$tittle_placeholder.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-clock icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"time" ],
                    [ "name"=>"input_class", "value"=>"" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <?php
            $newQueryString = str_replace("%3A", ":", $_SERVER['QUERY_STRING']);
            foreach ($_GET as $gkey => $get) {
                if ($gkey === "clockintime") {
                    $newQueryString = str_replace("&$gkey=", "", str_replace("$get", "", $newQueryString));
                } else {
                    if ($gkey === "clockouttime") {
                        $newQueryString = str_replace("&$gkey=", "", str_replace("$get", "", $newQueryString));
                    }
                }
            }
        ?>
        <div class="col-lg-6 text-center">
            <a type="button" href="<?= $page_url . "?" . $newQueryString; ?>"
                class="btn btn-sm bg-midnight-bloom text-light text-white font-weight-bold m-1">Reset Clocking Time</a>
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light text-white font-weight-bold m-1">Filter</button>
        </div>
    </div>
</form>