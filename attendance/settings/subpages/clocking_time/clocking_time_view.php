<!-- <pre><?php //print_r($MD); ?></pre> -->
<div class="col-md-12 mx-0 px-0 table-responsive">
    <table class="align-middle mb-0 table table-bord erless table-striped table-hover">
        <thead>
            <tr>
                <th style="white-space: nowrap;">Meeting Day</th>
                <th style="white-space: nowrap;">Clocking Time</th>
                <th style="white-space: nowrap;"><span class="pe-7s-check"></span></th>
            </tr>
        </thead>
        <tbody>
            <?php 
                if (isset($_GET["meeting-day"]) && !empty($_GET["meeting-day"])) {
                    foreach ($clocking_time as $key => $ct) { 
                        $meetingDay = isset($ct['meetingDay']['id'])? $ct['meetingDay']['id']: 0;
                        if ($meetingDay === (int)$_GET["meeting-day"]) {

                            foreach ($MD as $key => $md) {
                                $md_id = (int)$md["id"];

                                if ($meetingDay === $md_id) {
                                    $md_name = $md["name"];
                                    $meetingTitle = (isset($ct['meetingTitle']) & !empty($ct['meetingTitle']))
                                        ? $ct['meetingTitle']: "--"; ?>
                                    <tr>
                                        <th class="text-primary bg-light border"><?= $md_name; ?></th>
                                        <td>Clock In Time</td>
                                        <td>
                                            <?=
                                                (isset($ct['timeIn']['date'])) ? date("H:i A", strtotime($ct['timeIn']['date'])): "-";
                                            ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-primary bg-light border"><?= $meetingTitle; ?></th>
                                        <td>Clock Out Time</td>
                                        <td>
                                            <?=
                                                (isset($ct['timeOut']['date'])) ? date("H:i A", strtotime($ct['timeOut']['date'])): "-";
                                            ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="p-0 pt-1 m-0 bg-info"></td>
                                        <td class="p-0 pt-1 m-0 bg-info"></td>
                                        <td class="p-0 pt-1 m-0 bg-info"></td>
                                    </tr>
                                <?php }
                            }
                        }
                    }
                } else {
                    foreach ($clocking_time as $key => $ct) { 
                        // print_r($ct);
                        $meetingDay = isset($ct['meetingDay']['id'])? $ct['meetingDay']['id']: 0;

                        foreach ($MD as $key => $md) {
                            // print_r($md);
                            $md_id = (int)$md["id"];

                            if ($meetingDay === $md_id) {
                                $md_name = $md["name"];
                                $meetingTitle = (isset($ct['meetingTitle']) & !empty($ct['meetingTitle']))
                                    ? $ct['meetingTitle']: "--"; ?>
                                <tr>
                                    <th class="text-primary bg-light border"><?= $md_name; ?></th>
                                    <td>Clock In Time</td>
                                    <td>
                                        <?=
                                            (isset($ct['timeIn']['date'])) ? date("H:i A", strtotime($ct['timeIn']['date'])): "-";
                                        ?>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-primary bg-light border"><?= $meetingTitle; ?></th>
                                    <td>Clock Out Time</td>
                                    <td>
                                        <?=
                                            (isset($ct['timeOut']['date'])) ? date("H:i A", strtotime($ct['timeOut']['date'])): "-";
                                        ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-0 pt-1 m-0 bg-info"></td>
                                    <td class="p-0 pt-1 m-0 bg-info"></td>
                                    <td class="p-0 pt-1 m-0 bg-info"></td>
                                </tr>
                            <?php }
                        }
                    }
                } ?>
        </tbody>
    </table>
</div>