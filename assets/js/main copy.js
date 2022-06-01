(function(window, document, $, cc, Croppr) {
    document.addEventListener('DOMContentLoaded', function(loaded) {
        cc.show_password();
        cc.select2();
        cc.date_time();
        cc.mm_active();
        cc.openModal();
        cc.bgImg();
        cc.uploadPreviewCrop();
        // console.log(cc.API_BASE_URL, cc.PUBLIC_BASE_URL, cc.CLIENT_BASE_URL, cc.MEMBER_BASE_URL)
        try {
            console.log($('.countdown'), $('[getClock__]').attr('getClock__'));

            if ($('[getClock__]').attr('getClock__')) {
                countDownCounter({
                    selector: document.querySelector('.countdown'),
                    date: $('[getClock__]').attr('getClock__')
                });
            }
        } catch (error) {
            console.log(error)
        }
        cc._s('.search-input>.isSearch--true', (input) => {
            let $s2 = $(input).next();
            $($s2).attr("style", "width: 225px !important; background: transparent !important;border: none !important;");
            $(input).on('change', function() {
                if (input != "") {
                    window.location = $(input).val();
                }
            });
        });

        cc.localeR({ url: cc.CLIENT_BASE_URL, selector: "[name='region']", selectorLoader: "[id='region_loading']" });
        let CurrentRegionSelector, CurrentDistrictSelector;
        $("[name='region']").on('change', function(e) {
            CurrentRegionSelector = e['currentTarget'];
            console.log(CurrentRegionSelector);

            cc.localeD({
                url: cc.CLIENT_BASE_URL,
                selector1: "[name='region']",
                selector2: "[name='district']",
                region: $(CurrentRegionSelector).val(),
                selectorLoader: "[id='district_loading']"
            });
        });
        $("[name='district']").on('change', function(e) {
            CurrentDistrictSelector = e['currentTarget'];
            cc.localeC({
                url: cc.CLIENT_BASE_URL,
                selector1: "[name='region']",
                selector2: "[name='district']",
                selector3: "[name='constituency']",
                region: $(CurrentRegionSelector).val(),
                district: $(CurrentDistrictSelector).val(),
                selectorLoader: "[id='constituency_loading']"
            });
            cc.localeEA({
                url: cc.CLIENT_BASE_URL,
                selector1: "[name='region']",
                selector2: "[name='district']",
                selector3: "[name='electoral_area']",
                region: $(CurrentRegionSelector).val(),
                district: $(CurrentDistrictSelector).val(),
                selectorLoader: "[id='electoral_area_loading']"
            });
        });
        cc.selectShow({
            id: "applicant_designation_role",
            change_selector: '[name="applicant_designation_role"]',
        });
        cc.selectShow({
            id: "leader_1_designation_role",
            change_selector: '[name="leader_1_designation_role"]',
        });
        cc.selectShow({
            id: "leader_2_designation_role",
            change_selector: '[name="leader_2_designation_role"]',
        });
        cc.selectShow({
            id: "leader_3_designation_role",
            change_selector: '[name="leader_3_designation_role"]',
        });
        cc.selectShow({
            id: "marital_status",
            change_selector: '[name="marital_status"]',
        });
        cc.selectShow({
            id: "occupational_status",
            change_selector: '[name="occupational_status"]',
        });
        cc.selectShow({
            id: "educational_status",
            change_selector: '[name="educational_status"]',
        });
        cc.selectShow({
            id: "religion",
            change_selector: '[name="religion"]',
        });
        cc.selectShow({
            id: "country",
            show_value: "Ghana",
            change_selector: '[name="country"]',
        });
        cc.selectShow({
            id: "country_of_contact",
            show_value: "Ghana",
            change_selector: '[name="country_of_contact"]',
        });
        cc.selectShow({
            id: "country_of_contact_bulk",
            show_value: "Ghana",
            change_selector: '[name="country_of_contact_bulk"]',
        });
        cc.selectShow({
            id: "training_course_attended",
            show_value: 1,
            change_selector: '[name="training_course_attended"]',
        });
        cc.selectShow({
            id: "references",
            show_value: 1,
            change_selector: '[name="references"]',
        });
        // cc.selectShow({
        //     id: "contact_type",
        //     show_value: 1,
        //     change_selector: '[name="contact_type"]',
        // });
        function select_show_contact_type(id) {
            cc._s('[select-show="' + id + '"]', (shower) => {
                var change_selector = '[id="' + id + '"]';
                $(change_selector).on('change', function() {
                    shower.setAttribute('select-show', id);
                    if ($(change_selector).val() == "1") {
                        cc._s('[select-show-alt--1="' + id + '"]', (shower_1) => {
                            shower_1.removeAttribute('select-show');
                        });
                    } else if ($(change_selector).val() == "2") {
                        cc._s('[select-show-alt--2="' + id + '"]', (shower_2) => {
                            shower_2.removeAttribute('select-show');
                        });
                    } else if ($(change_selector).val() == "3") {
                        cc._s('[select-show-alt--3="' + id + '"]', (shower_3) => {
                            shower_3.removeAttribute('select-show');
                        });
                    } else {
                        shower.setAttribute('select-show', id);
                    }
                });
            });
        }
        select_show_contact_type("contact_type");
        select_show_contact_type("contact_type_sms");
        select_show_contact_type("contact_type_voice");

        function select_show_recipient_type(id, ext) {
            cc._s('[select-show="' + id + ext + '"]', (shower) => {
                var change_selector = '[id="' + id + ext + '"]';
                $(change_selector).on('change', function(e) {
                    shower.setAttribute('select-show', id);
                    if ($(change_selector).val() == "1") {
                        cc._s('[select-show-alt--1="' + id + ext + '"]', (shower_1) => {
                            shower_1.removeAttribute('select-show');
                        });
                    } else if ($(change_selector).val() == "2") {
                        cc._s('[select-show-alt--2="' + id + ext + '"]', (shower_2) => {
                            shower_2.removeAttribute('select-show');
                        });
                    } else {
                        shower.setAttribute('select-show', id);
                    }
                });
            });
        }
        select_show_recipient_type("recipient_type_", "email");
        select_show_recipient_type("recipient_type_", "sms");
        select_show_recipient_type("recipient_type_", "voice");

        function getClientUsers(selector, selector1) {
            $(selector).on('change', function(e) {
                const value = $(selector).val();
                console.log(value)
                $(selector1).html("<option value=''>Select Client User</option>");
                cc.fetchRelay({ url: cc.API_BASE_URL + "client-membership/all_client_users?account_id=" + value }, function(response) {
                    let list = response.data;
                    list = Object.keys(list).map((key) => [key, list[key]])
                    $data = [];
                    for (let i = 0; i < list.length; i++) {
                        let li = list[i][1];
                        if (!$data.includes(li)) {
                            $data.push(li);
                        }
                    }
                    for (let i = 0; i < $data.length; i++) {
                        let li = $data[i];
                        $(selector1).html($(selector1).html() + '<option value="' + li.pdcu_id + '">' + li.pdcu_firstname + ' ' + li.pdcu_surname + '</option>')
                    }
                });
            });
        }

        getClientUsers('[id="client_id_sms"]', '[id="client_user_sms"]');
        getClientUsers('[id="client_id_email"]', '[id="client_user_email"]');
        getClientUsers('[id="client_id_voice"]', '[id="client_user_voice"]');

        $('[id="account_type_email"]').on('change', function(e) {
            const value = $('[id="account_type_email"]').val();
            $('[id="clients_email"]').html("<option value=''>Select Client(s)</option><option value='all'>All</option>");
            $('[id="client_id_email"]').html("<option value=''>Select Client</option>");
            cc.fetchRelay({ url: cc.API_BASE_URL + "client-membership/filter_clients_type?account_type=" + value }, function(response) {
                let list = response.data;
                list = Object.keys(list).map((key) => [key, list[key]])
                $data = [];
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    if (!$data.includes(li)) {
                        $data.push(li);
                    }
                }
                for (let i = 0; i < $data.length; i++) {
                    let li = $data[i];
                    $('[id="clients_email"]').html($('[id="clients_email"]').html() + '<option value="' + li.pdc_id + '">' + li.pdc_name + '</option>');
                    $('[id="client_id_email"]').html($('[id="client_id_email"]').html() + '<option value="' + li.pdc_id + '">' + li.pdc_name + '</option>')
                }
            });
        });
        $('[id="account_type_sms"]').on('change', function(e) {
            const value = $('[id="account_type_sms"]').val();
            $('[id="clients_sms"]').html("<option value=''>Select Client(s)</option><option value='all'>All</option>");
            $('[id="client_id_sms"]').html("<option value=''>Select Client</option>");
            cc.fetchRelay({ url: cc.API_BASE_URL + "client-membership/filter_clients_type?account_type=" + value }, function(response) {
                let list = response.data;
                list = Object.keys(list).map((key) => [key, list[key]])
                $data = [];
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    if (!$data.includes(li)) {
                        $data.push(li);
                    }
                }
                for (let i = 0; i < $data.length; i++) {
                    let li = $data[i];
                    $('[id="clients_sms"]').html($('[id="clients_sms"]').html() + '<option value="' + li.pdc_id + '">' + li.pdc_name + '</option>');
                    $('[id="client_id_sms"]').html($('[id="client_id_sms"]').html() + '<option value="' + li.pdc_id + '">' + li.pdc_name + '</option>')
                }
            });
        });
        $('[id="account_type_voice"]').on('change', function(e) {
            const value = $('[id="account_type_voice"]').val();
            $('[id="clients_voice"]').html("<option value=''>Select Client(s)</option><option value='all'>All</option>");
            $('[id="client_id_voice"]').html("<option value=''>Select Client</option>");
            cc.fetchRelay({ url: cc.API_BASE_URL + "client-membership/filter_clients_type?account_type=" + value }, function(response) {
                let list = response.data;
                list = Object.keys(list).map((key) => [key, list[key]])
                $data = [];
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    if (!$data.includes(li)) {
                        $data.push(li);
                    }
                }
                for (let i = 0; i < $data.length; i++) {
                    let li = $data[i];
                    $('[id="clients_voice"]').html($('[id="clients_voice"]').html() + '<option value="' + li.pdc_id + '">' + li.pdc_name + '</option>');
                    $('[id="client_id_voice"]').html($('[id="client_id_voice"]').html() + '<option value="' + li.pdc_id + '">' + li.pdc_name + '</option>')
                }
            });
        });

        cc.fileView('profile_img');

        cc._s(`#subscrition_duration`, (duration_input) => {
            $(duration_input).on('change', function(change) {
                const value = duration_input['value'];
                if (value == "Select Subscrition Duration") {
                    cc._s(`#subscription_fee`, (duration_fee_input) => {
                        $(duration_fee_input).val("0.00");
                    });
                } else {
                    cc.fetchRelay({ url: cc.API_BASE_URL + "subscription/duration_fee?duration_id=" + value }, function(response) {
                        console.log(response)
                        cc._s(`#subscription_fee`, (duration_fee_input) => {
                            $(duration_fee_input).val("GHC " + response.data[0]['pdd_info'] + ".00");
                        });
                    });
                }
            })
        });

        cc._s(`#client_membership_size`, (membership_size_input) => {
            cc._s(`#client_subscription_duration`, (duration_input) => {
                function get_fee($duration_id, $membership_size_id) {
                    cc.fetchRelay({ url: cc.API_BASE_URL + "subscription/duration_fee?duration_id=" + $duration_id }, function(d_response) {
                        let d_fee = d_response.data[0]['pdd_info'];
                        cc.fetchRelay({ url: cc.API_BASE_URL + "subscription/duration?id=" + $duration_id }, function(ms_response) {
                            let d_add = ms_response.data[0]['pdd_add'];
                            cc.fetchRelay({ url: cc.API_BASE_URL + "membership-size/size?id=" + $membership_size_id }, function(ms_response) {
                                let ms_cost = ms_response.data[0]['pdd_cost'];
                                cc._s(`#client_subscription_fee`, (duration_fee_input) => {
                                    let $number = (Number(d_fee) * Number(ms_cost) * Number(d_add));
                                    console.log(duration_fee_input, $number)
                                    $(duration_fee_input).val("GHC " + Math.round($number) + ".00");
                                });
                            });
                        });
                    });
                }
                $(membership_size_input).on('change', function(change) {
                    const value = membership_size_input['value'];
                    const duration_value = duration_input['value'];
                    if (value == "Select Subscrition Duration") {
                        cc._s(`#subscription_fee`, (duration_fee_input) => {
                            $(duration_fee_input).val("0.00");
                        });
                    } else {
                        get_fee(duration_value, value);
                    }
                });
                $(duration_input).on('change', function(change) {
                    const value = duration_input['value'];
                    const membership_size_value = membership_size_input['value'];
                    if (value == "Select Subscrition Duration") {
                        cc._s(`#subscription_fee`, (duration_fee_input) => {
                            $(duration_fee_input).val("0.00");
                        });
                    } else {
                        get_fee(value, membership_size_value);
                    }
                });
            });
        });

        cc._s(`#account_code`, (ac) => {
            $(ac).on('keyup', function(change) {
                const value = ac['value'];
                cc.fetchRelay({ url: cc.API_BASE_URL + "client-membership/one_client_code?code=" + value }, function(response) {
                    console.log(response, response.data[0])
                    cc._s(`[account-code="status"]`, (acs) => {
                        if (response.data[0] == undefined) {
                            $(acs).html('<span class="text-success">Code is Available.</span><br/>')
                        } else {
                            $(acs).html('<span class="text-danger">Code is Taken.</span><br/>')
                        }
                    });
                });
            })
        });
        cc._s(`#account_sms_id`, (asi) => {
            $(asi).on('keyup', function(change) {
                const value = asi['value'];
                cc.fetchRelay({ url: cc.API_BASE_URL + "client-membership/one_client_sms_id?sms_id=" + value }, function(response) {
                    console.log(response, response.data[0])
                    cc._s(`[account-sms_id="status"]`, (asis) => {
                        if (response.data[0] == undefined) {
                            $(asis).html('<span class="text-success">SMS ID is Available.</span><br/>')
                        } else {
                            $(asis).html('<span class="text-danger">SMS ID is Taken.</span><br/>')
                        }
                    });
                });
            })
        });
    }, false);
})(window, document, jQuery, new locale(), Croppr);