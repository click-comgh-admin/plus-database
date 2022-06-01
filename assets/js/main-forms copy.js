(function(window, document, $, cc, Croppr) {
    document.addEventListener('DOMContentLoaded', function(loaded) {
        cc._s("[make-general-posts]", function(form) {

            form.addEventListener('submit', function(fE) {
                fE.preventDefault();

                var confirm_msg = form['attributes']['make-general-posts']['value'];
                cc.submit_form('[make-general-posts="' + confirm_msg + '"]', confirm_msg = confirm_msg);
            }, false);

        });
        cc._s("[make-noswal-posts]", function(form) {

            form.addEventListener('submit', function(fE) {
                fE.preventDefault();

                var confirm_msg = form['attributes']['make-noswal-posts']['value'];
                var form_id = form['attributes']['make-noswal-posts--id']['value'];
                cc.submit_form('[make-noswal-posts="' + confirm_msg + '"]', confirm_msg = confirm_msg,
                    token = cc.TOKEN, noSwalResponse = true,
                    function(res) {
                        let msg, data;
                        msg = res.msg;
                        data = res.data;
                        const $display = `[make-noswal-posts--response="${form_id}"]`;
                        console.log($display, res, res.error, data,
                            $($display))
                        if (res.error == true) {
                            let ERROR_RESPONSE;
                            if (data != undefined) {
                                ERROR_RESPONSE = "<ul class='mb-0'>";
                                for (let i = 0; i < data.length; i++) {
                                    const list = data[i];
                                    ERROR_RESPONSE += "<li>" + list.msg + "</li>";
                                }
                                ERROR_RESPONSE += "</ul>";
                                console.log(ERROR_RESPONSE)
                            } else {
                                ERROR_RESPONSE = msg;
                            }
                            $($display).html(`<div class="alert alert-warning alert-dismissible fade show shadow shadow-lg pb-0" role="alert">
                                <strong class="text-danger">MSG!</strong> ${ERROR_RESPONSE}.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`);
                        } else {
                            $($display).html(`<div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
                                <strong class="text-success">MSG!</strong> ${msg}.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`);
                        }
                    }
                );
            }, false);

        });
        cc._s("[btn-submit-post]", function(button) {
            button.addEventListener('click', function(fE) {
                fE.preventDefault();
                console.log(button)

                var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                var url = button['attributes']['btn-submit-post--url']['value'];
                var data = button['attributes']['btn-submit-post']['value'];

                cc.json_form(url = url, data = data, confirm_msg = confirm_msg);
            }, false);

        });
        cc._s("[btn-submit-download]", function(button) {
            button.addEventListener('click', function(fE) {
                fE.preventDefault();
                console.log(button)

                var confirm_msg = button['attributes']['btn-submit-post--confirm']['value'];
                var url = button['attributes']['btn-submit-post--url']['value'];
                var data = button['attributes']['btn-submit-download']['value'];
                var download = button['attributes']['btn-submit-post--download']['value'];

                cc.json_form(url = url, data = data, confirm_msg = confirm_msg,
                    token = cc.TOKEN, noSwalResponse = true,
                    function(res) {
                        const url = res.msg;
                        const $display = `[btn-submit-post--display="${download}"]`;
                        $($display).html(`<div class="alert alert-success alert-dismissible fade show shadow shadow-lg" role="alert">
                            <a class="btn btn-info btn-sm btn-block" target="_blank" href="${cc.FILE_BUCKET_BASE_URL}files/${url}">
                                <strong class="text-white">Download File</strong>
                            </a>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`);
                    }
                );
            }, false);
        });

        cc._s('[name="credit_amount"]', function(select) {
            let $amounts = [];
            cc.fetchRelay({ url: cc.API_BASE_URL + "communications/clients/credit/units" }, function(response) {
                let list = response.data;
                delete(list['per_unit_cost']);
                list = Object.keys(list).map((key) => [key, list[key]])
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    const _id = li['pdccmc_id'];
                    const _amount = li['pdccmc_amount'];
                    let newData = [];
                    newData['id'] = _id;
                    newData['amount'] = _amount;
                    if (!$amounts.includes(newData)) {
                        $amounts.push(newData);
                    }
                }
            });
            select.addEventListener('change', function(fE) {
                fE.preventDefault();

                var amount = select.value;
                for (let i = 0; i < $amounts.length; i++) {
                    if ($amounts[i]['id'] == amount) {
                        var per_unit = $('[credit_in_units="credit_amount"]').attr('per_unit');
                        var credit_in_units = (new Number($amounts[i]['amount']) / new Number(per_unit));
                        $('[credit_in_units="credit_amount"]').html(parseInt(credit_in_units));
                    }
                }
            }, false);
        });
        cc._s("[btn-submit-multiple]", function(button) {
            button.addEventListener('click', function(fE) {
                fE.preventDefault();

                var confirm_msg = button['attributes']['btn-submit-multiple--confirm']['value'];
                var url = button['attributes']['btn-submit-multiple--url']['value'];
                var data = button['attributes']['btn-submit-multiple']['value'];

                let selectedMessages = [];
                cc._s('[name="message_id[]"]', function(inputs) {
                    if ($(inputs).is(":checked")) {
                        if (!selectedMessages.includes(inputs)) {
                            selectedMessages.push(inputs);
                        }
                    }
                });
                if (selectedMessages.length >= 1) {
                    let mids = "[";
                    for (let i = 0; i < selectedMessages.length; i++) {
                        const selectedMessage = selectedMessages[i];
                        const message_id = $(selectedMessage).val();
                        mids += '{"id": "' + message_id + '"},';
                    }
                    mids = mids.substring(0, mids.length - 1) + "]";
                    data = data.substring(0, data.length - 1) + ', "message_id": ' + mids + '}';
                    cc.json_form(url = url, data = data, confirm_msg = confirm_msg)
                }

            }, false);

        });

        cc._s('[name="space"]', function(select) {
            let $costs = [];
            cc.fetchRelay({ url: cc.API_BASE_URL + "file-manager/spaces" }, function(response) {
                let list = response.data;
                list = Object.keys(list).map((key) => [key, list[key]])
                for (let i = 0; i < list.length; i++) {
                    let li = list[i][1];
                    if (!$costs.includes(li)) {
                        $costs.push(li);
                    }
                }
            });
            console.log($costs)
            select.addEventListener('change', function(fE) {
                fE.preventDefault();
                var id = select.value;
                for (let i = 0; i < $costs.length; i++) {
                    const _this_ = $costs[i];
                    if (_this_['pdcfmf_id'] == id) {
                        let space = _this_['pdcfmf_space'];
                        let space_cost = _this_['pdcfmf_cost'];
                        let _show_ = space.replace("KB", 'KiloByte(s)').replace("MB", 'MegaByte(s)').replace("GB", 'GigaByte(s)') + " @ GHC " + space_cost + ".00";
                        $('[space_purchase="space_cost"]').html(_show_);
                    }
                }
            }, false);
        });
    }, false);
})(window, document, jQuery, new locale(), Croppr);