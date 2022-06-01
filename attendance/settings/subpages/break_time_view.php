<div class="col-md-12 px-0 table-responsive">
    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
        <thead>
            <tr>
                <th style="white-space: nowrap;">Break Time</th>
                <th style="white-space: nowrap;"><span class="pe-7s-check"></span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Start Time</td>
                <td>
                    <?=
                        (isset($break_time['pdad_time_start'])) ? date("H:i A", strtotime($break_time['pdad_time_start'])): "-";
                    ?>
                </td>
            </tr>
            <tr>
                <td>End Time</td>
                <td>
                    <?=
                        (isset($break_time['pdad_time_end'])) ? date("H:i A", strtotime($break_time['pdad_time_end'])): "-";
                    ?>
                </td>
            </tr>
            <tr>
                <td>Visibility</td>
                <td>
                    <?= (isset($break_time['pdad_visibility']) && (int)$break_time['pdad_visibility'] == 1) 
                        ? "Visible": "Not Visible"; ?>
                </td>
            </tr>
        </tbody>
    </table>
</div>