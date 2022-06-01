<form role="form" action="<?= $page_url; ?>?<?= $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
			<?php 
				$tittle_placeholder = "Select Meeting Day";
				$id_name = "meeting-day";
			?>
			<h6><?= $tittle_placeholder; ?></h6>
			<?php
                $currentDay = isset($_GET[$id_name]) ? (int)$_GET[$id_name]: 0;
                $meeting_days_list = '';
                foreach ($MD as $key => $md) {
                    $md_id = (int)$md["id"];
                    $md_name = $md["name"];
                    
                    $selected = ((int)$currentDay === (int)$md_id) ? "selected": "";
                    $meeting_days_list .= '<option value="'.$md_id.'" '.$selected.'>'.$md_name.'</option>';
                }
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$meeting_days_list.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
		</div>
        <div class="col-lg-12 col-md-12 text-center">
            <button type="submit" class="btn btn-sm bg-grow-early text-light text-white font-weight-bold m-1 w-75">Filter</button>
		</div>
	</div>
</form>
