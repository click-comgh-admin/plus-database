                            <div class="col-md-12 px-0 table-responsive">
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th style="white-space: nowrap;">Location</th>
                                            <th style="white-space: nowrap;"><span class="pe-7s-check"></span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Latitute</td>
                                            <td>
                                                <?=
                                                    (isset($location_info['pdad_lat'])) ? $location_info['pdad_lat']: "-";
                                                ?>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Longitute</td>
                                            <td>
                                                <?=
                                                    (isset($location_info['pdad_lon'])) ? $location_info['pdad_lon']: "-";
                                                ?>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Radius</td>
                                            <td>
                                                <?=
                                                    (isset($location_info['pdad_radius'])) ? $location_info['pdad_radius']: "-";
                                                ?>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>