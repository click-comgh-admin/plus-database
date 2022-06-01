<?php
    function load_countries($load_countries)
    {
        $qust="<option value=\"Select Your Country\">";
        foreach ($load_countries as $c) {
			$qust .= "<option value=\"".str_replace("'", "~", $c->Name)."\">".$c->Short."</option>";
		}
		return $qust;
    }

    function register_attendance_members_excel($cid, $user_id)
	{ ?>
		<p>
			Upload <span class="fa fa-file-excel-o"> Excel File </span>. [
			<a href="<?= CLIENT_BASE_URL; ?>assets/excel/attendance membership upload.xlsx"
				download="Attendance Membership Excel Registration.xlsx">Download Template File</a>.
			]
		</p>
		
        <form submit_attendance_members_excel_registration="submit" action="" method="POST" autocomplete="">

            <div class="d-block justify-content-between">

                <fieldset class="mb-0">
                    <div class="row">
                        <div class="col-md-12 container" align="center">
                            <label>Choose Excel File</label>
                            <input type="file" name="xls_file" class="form-control mb-2 btn btn-simple btn-info container ml-0" accept=".xls,.xlsx" lang="en">
                        </div>
                        <div myProgress style="display: none;">
                            <div myBar>0</div>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-group mt-1 mb-0" submit_contact_list_group_bulk_contacts="error_msg"
                    style="display: none;">
                    <div class="mb-0">
                        <input type="hidden" hidden="" name="this_id" value="<?= $cid; ?>">
						<input type="hidden" name="client_id" value="<?= AccountInfoId; ?>" />
						<input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
                        <input type="text" class="form-control text-warning" readonly="" name="error_msg">
                    </div>
                </fieldset>

                <div class="container" id="show_con_success_message_<?= $cid; ?>">
                    
                </div>
                <div class="card-footer d-sm-flex justify-content-between">
                    <button type="submit" class="btn btn-success btn-sm btn-block"><i class="fa fa-upload"> </i>
                        Upload Member(s) Info </button>
                </div>
            </div>
        </form>

	<?php }