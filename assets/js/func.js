function filterForms($selectors, $shower, $url, cc, $) {
    let $urlParams = "",
        $urlArray = [""];
    for (let i = 0; i < $selectors.length; i++) {
        const selector = $selectors[i];

        cc._s(selector, (_s) => {
            $(selector).on("change", function() {
                const query = _s.attributes['id']['value'];
                $urlArray[i] = [query, _s['value']];
                var $urlString = "";
                for (let idx = 0; idx < $urlArray.length; idx++) {
                    const urlEl = $urlArray[idx];
                    if ((urlEl[0] === "gender") && (urlEl[1] === "all")) {} else {
                        const thisParam = urlEl[0] + "=" + urlEl[1];
                        if (urlEl[0] !== undefined) {
                            $urlString += "&" + thisParam;
                        }
                    }
                }

                cc.fetchRelay({ url: $url + $urlString }, function(response) {
                    let list = response.data;
                    list = Object.keys(list).map((key) => [key, list[key]])
                    $data = [];
                    for (let i = 0; i < list.length; i++) {
                        let li = list[i][1];
                        if (!$data.includes(li)) {
                            $data.push(li);
                        }
                    }
                    cc._s($shower, (display) => {
                        try {
                            const input_title = display.attributes['filterForms-input_title']['value'];
                            const id_getter = display.attributes['filterForms-id_getter']['value'];
                            const name_getter = display.attributes['filterForms-name_getter']['value'];
                            const name_getter_1 = (typeof display.attributes['filterForms-name_getter_1'] === "undefined") ? null : display.attributes['filterForms-name_getter_1']['value'];
                            const hasOthers = (typeof display.attributes['filterForms-others'] === "undefined") ? "" : '<option>Others</option>';
                            $(display).html('<option>' + input_title + '</option>');
                            for (let i = 0; i < $data.length; i++) {
                                let li = $data[i];
                                const name = li[name_getter] + ((name_getter_1 == null) ? '' : ' ' + li[name_getter_1]);
                                $(display).html($(display).html() + '<option value="' + li[id_getter] + '">' + name + '</option>');
                            }
                            $(display).html($(display).html() + hasOthers);
                        } catch (error) {
                            console.log(error);
                        }
                    });
                });
                $urlParams = $urlString;
            });
        });
    }
}