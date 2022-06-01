<form role="form" action="<?= Current_BaseUrl; ?>set-meeting-time?<?= $_SERVER['QUERY_STRING']; ?>" method="GET">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-12 col-md-12">
			<?php 
				$tittle_placeholder = "Select Meeting";
				$id_name = "show-meeting";
			?>
			<h6></h6>
			<?php
                $currentMeeting = isset($_GET['show-meeting']) ? (int)$_GET['show-meeting']: 0;
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
                    [ "name"=>"icon", "value"=>"pe-7s-vector icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
					[ "name"=>"input_attributes", "value"=>$input_attributes ],
					[ "name"=>"options", "value"=>$input_value ],
                ]);
            ?>
		</div>
		<div class="col-lg-3 col-md-8"></div>
		<div class="col-lg-3 col-md-8"></div>
        <div class="col-lg-6 col-md-8">
            <button type="submit" class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Select Meeting</button>
		</div>
		<div class="col-lg-3 col-md-8"></div>
	</div>
</form>
