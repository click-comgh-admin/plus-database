<form class="container" role="form" action="<?= $page_url . "?" . $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-8 col-md-10">
            <input type="hidden" name="<?= $page; ?>" />
			<?php 
				$tittle_placeholder = "Select Meeting";
				$id_name = "meeting_id";
			?>
			<h6></h6>
			<?php
                $currentMeeting = isset($_GET[$id_name]) ? (int)$_GET[$id_name]: 0;
                $get_string = "attendance/meeting/all_meetings?client_id=".AccountInfoId;
                $meetingList = $ccApi->fetch_from($get_string=$get_string, function($meetings) use($currentMeeting) {
                    $meetings = isset($meetings[0])? $meetings: [];
                    $at = '';
					foreach ($meetings as $key => $meeting) {
                        $selected = ((int)$currentMeeting === (int)$meeting['pdam_id']) ? "selected": "";
						$at .= '<option value="'.$meeting['pdam_id'].'" '.$selected.'>'.$meeting['pdam_meeting'].'</option>';
					}
					return @$at;
                }, $debug = false);
				$input_value = '
					<option value="">'.$tittle_placeholder.'</option>
					'.$meetingList.'
				';
                $input_attributes = 'name="'.$id_name.'" id="'.$id_name.'"';
                echo $tf->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-coffee icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
		</div>
        <div class="col-lg-6 text-center">
            <button type="submit"
                class="btn btn-sm bg-grow-early text-light btn-block text-white font-weight-bold m-1">Filter</button>
        </div>
    </div>
</form>