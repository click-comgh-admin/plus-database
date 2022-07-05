! function(window, document, $, cc) { document.addEventListener("DOMContentLoaded", (function(loaded) {
        function msg_members_list($messages, $aid, $acc_name, $file_url) { let $messageList = ""; for (let i = 0; i < $messages.length; i++) { const $message = $messages[i],
                    $has_attachment = 0 == $message.attached.length ? "" : '<div email-tabs="container-list--item---content----attach">\n<span class="pe-7s-link"></span>\n</div>',
                    $sender_id = $message.parties[0].pdccmc_sender_id,
                    $date = new Date($message.pdccmc_date),
                    $today = new Date,
                    $date_time_display = $date.getFullYear() == $today.getFullYear() ? $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay() == $today.getFullYear() + "/" + $today.getMonth() + "/" + $today.getDay() ? $date.getHours() + "/" + $date.getUTCMinutes() : $date.getMonth() + "/" + $date.getDay() : $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay(),
                    $shortMsg = $message.pdccmc_message.length > 70 ? $message.pdccmc_message.substring(0, 70) + "..." : $message.pdccmc_message; let $shortName = $acc_name.split(" "),
                    $senderIdentity;
                $shortName = $shortName[0].substring(0, 1) + $shortName[1].substring(0, 1), $sender_id == $aid && 1 == $message.parties[0].pdccmc_sender ? $senderIdentity = `<h4 email-tabs="container-list--item---content----client_abbr" class="shadow shadow-sm">\n${$shortName}\n</h4>` : 2 == $message.parties[0].pdccmc_sender && (cc.fetchRelay({ url: cc.API_BASE_URL + "membership/one_client_member?account_id=" + $aid + "&id=" + $sender_id }, (function(response) { window.outbox_image_url = response.data.pdm_profile_picture })), $senderIdentity = `<img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"\nsrc="${$file_url}files/members/profile-picture/${window.outbox_image_url}">`), $messageList += `<a class="list-group-item" email-tabs="container-list--item" href="members?show=${$message.pdccmc_id}">\n<div email-tabs="container-list--item---content">\n${$senderIdentity}\n<div email-tabs="container-list--item---content----text">\n<h6> ${$message.pdccmc_subject} </h6>\n<h6 class="small">${$shortMsg}</h6>\n</div>\n${$has_attachment}\n</div>\n<div email-tabs="container-list--item---others">\n<div email-tabs="container-list--item---others----date">\n${$date_time_display}\n</div>\n</div>\n</a>` } return `<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">\n${$messageList}\n</ul>` }

        function msg_cc_list($messages, $type, $acc_name, $file_url) { let $messageList = ""; for (let i = 0; i < $messages.length; i++) { const $message = $messages[i],
                    $has_attachment = 0 == $message.attached.length ? "" : '<div email-tabs="container-list--item---content----attach">\n<span class="pe-7s-link"></span>\n</div>',
                    $date = new Date($message.pdccmc_date),
                    $today = new Date,
                    $date_time_display = $date.getFullYear() == $today.getFullYear() ? $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay() == $today.getFullYear() + "/" + $today.getMonth() + "/" + $today.getDay() ? $date.getHours() + "/" + $date.getUTCMinutes() : $date.getMonth() + "/" + $date.getDay() : $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay(),
                    $shortMsg = $message.pdccmc_message.length > 70 ? $message.pdccmc_message.substring(0, 70) + "..." : $message.pdccmc_message; let $shortName = $acc_name.split(" ");
                $shortName = $shortName[0].substring(0, 1) + $shortName[1].substring(0, 1); let $senderIdentity = `<img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"\nsrc="${$file_url}files/admin/logo.png">`;
                $href = 1 == $type ? `customer-care?show-messages=${$message.pdccmc_id}#${$message.pdccmc_id}` : `customer-care?show=${$message.pdccmc_id}#${$message.pdccmc_id}`, $messageList += `<a class="list-group-item" email-tabs="container-list--item" href="${$href}">\n<div email-tabs="container-list--item---content">\n${$senderIdentity}\n<div email-tabs="container-list--item---content----text">\n<h6> ${$message.pdccmc_subject} </h6>\n<h6 class="small">${$shortMsg}</h6>\n</div>\n${$has_attachment}\n</div>\n<div email-tabs="container-list--item---others">\n<div email-tabs="container-list--item---others----date">\n${$date_time_display}\n</div>\n</div>\n</a>` } return `<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">\n${$messageList}\n</ul>` }

        function msg_peers_list($messages, $type, $uid, $aid, $acc_name, $file_url) { let $messageList = ""; for (let i = 0; i < $messages.length; i++) { const $message = $messages[i],
                    $has_attachment = 0 == $message.attached.length ? "" : '<div email-tabs="container-list--item---content----attach">\n<span class="pe-7s-link"></span>\n</div>',
                    $date = new Date($message.pdccmc_date),
                    $today = new Date,
                    $date_time_display = $date.getFullYear() == $today.getFullYear() ? $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay() == $today.getFullYear() + "/" + $today.getMonth() + "/" + $today.getDay() ? $date.getHours() + "/" + $date.getUTCMinutes() : $date.getMonth() + "/" + $date.getDay() : $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay(),
                    $shortMsg = $message.pdccmc_message.length > 70 ? $message.pdccmc_message.substring(0, 70) + "..." : $message.pdccmc_message; let $shortName = $acc_name.split(" "),
                    $other_info, $sender_id, $showMemberName;
                $shortName = $shortName[0].substring(0, 1) + $shortName[1].substring(0, 1), 1 == $type ? ($sender_id = $message.pdccmc_sender_id == $uid ? $message.pdccmc_recipient_id : $message.pdccmc_sender_id, $href = `customer-care?show-messages=${$message.pdccmc_id}#${$message.pdccmc_id}`) : ($sender_id = $uid, $href = `customer-care?show=${$message.pdccmc_id}#${$message.pdccmc_id}`), cc.fetchRelay({ url: cc.API_BASE_URL + "client-membership/one_client_user?account_id=" + $aid + "&id=" + $sender_id }, (function(response) { window.senderOtherInfos_rd = response.data[0] })), $other_info = window.senderOtherInfos_rd, $showMemberName = 1 == $type ? `<h6 class="font-weight-bold">${$other_info.pdcu_firstname} ${$other_info.pdcu_surname}</h6>` : ""; let $senderIdentity = `<img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"\nsrc="${$file_url}files/clients/profile-picture/${$other_info.pdcu_profile_picture}">`; const $messageId = 0 == $message.pdccmc_thread_id ? $message.pdccmc_id : $message.pdccmc_thread_id;
                $messageList += `<a class="list-group-item" email-tabs="container-list--item" href="peers?show=${$messageId}#${$messageId}">\n<div email-tabs="container-list--item---content">\n${$senderIdentity}\n<div email-tabs="container-list--item---content----text">\n${$showMemberName}\n<h6> ${$message.pdccmc_subject} </h6>\n<h6 class="small">${$shortMsg}</h6>\n</div>\n${$has_attachment}\n</div>\n<div email-tabs="container-list--item---others">\n<div email-tabs="container-list--item---others----date">\n${$date_time_display}\n</div>\n</div>\n</a>` } return `<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">\n${$messageList}\n</ul>` }

        function msg_list($messages, $aid, $acc_name, $file_url) { let $messageList = ""; for (let i = 0; i < $messages.length; i++) { const $message = $messages[i],
                    $has_attachment = 0 == $message.attached.length ? "" : '<div email-tabs="container-list--item---content----attach">\n<span class="pe-7s-link"></span>\n</div>',
                    $sender_id = $message.parties[0].pdccmc_sender_id,
                    $date = new Date($message.pdccmc_date),
                    $today = new Date,
                    $date_time_display = $date.getFullYear() == $today.getFullYear() ? $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay() == $today.getFullYear() + "/" + $today.getMonth() + "/" + $today.getDay() ? $date.getHours() + "/" + $date.getUTCMinutes() : $date.getMonth() + "/" + $date.getDay() : $date.getFullYear() + "/" + $date.getMonth() + "/" + $date.getDay(),
                    $shortMsg = $message.pdccmc_message.length > 70 ? $message.pdccmc_message.substring(0, 70) + "..." : $message.pdccmc_message; let $shortName = $acc_name.split(" "),
                    $senderIdentity;
                $shortName = $shortName[0].substring(0, 1) + $shortName[1].substring(0, 1), $sender_id == $aid && 1 == $message.parties[0].pdccmc_sender ? $senderIdentity = `<h4 email-tabs="container-list--item---content----client_abbr" class="shadow shadow-sm">\n${$shortName}\n</h4>` : 2 == $message.parties[0].pdccmc_sender && (cc.fetchRelay({ url: cc.API_BASE_URL + "communications/clients/one_contact?account_id=" + $aid + "&id=" + $sender_id }, (function(response) { window.outbox_image_url = response.data[0].pdccc_photo })), $senderIdentity = `<img width="50" height="50" class="rounded-circle shadow shadow-sm" alt="Contact Image"\nsrc="${$file_url}files/clients/contact-picture/${window.outbox_image_url}">`), $messageList += `<a class="list-group-item" email-tabs="container-list--item" href="contacts?show=${$message.pdccmc_id}">\n<div email-tabs="container-list--item---content">\n${$senderIdentity}\n<div email-tabs="container-list--item---content----text">\n<h6> ${$message.pdccmc_subject} </h6>\n<h6 class="small">${$shortMsg}</h6>\n</div>\n${$has_attachment}\n</div>\n<div email-tabs="container-list--item---others">\n<div email-tabs="container-list--item---others----date">\n${$date_time_display}\n</div>\n</div>\n</a>` } return `<ul class="list-group list-group-flush scrollbar-container ps ps--active-y" email-tabs="container-list">\n${$messageList}\n</ul>` }

        function make_url_call(url, callbackFunc) { cc.fetchRelay({ url: cc.API_BASE_URL + "communications/clients/mailer/" + url }, (function(response) { let list = response.data;
                list = Object.keys(list).map(key => [key, list[key]]), $messages = []; for (let i = 0; i < list.length; i++) { let li = list[i][1];
                    $messages.includes(li) || $messages.push(li) } if (0 != $messages.length) return callbackFunc($messages);
                $('[email-tabs="container"]').html('<h5 class="card-title">No Data Found</h5>') })) }
        cc._s("[comms-search]", cs => { $(cs).on("keyup", (function(keyup) { console.log(keyup); const $url = $(cs).attr("comms-search"),
                    $at = $(cs).attr("comms-search--at"),
                    $aid = $(cs).attr("comms-search--aid"),
                    $acc_name = $(cs).attr("comms-search--acc_name"),
                    query = $(cs).val(); if ("" == query) window.location.reload(!0);
                else if ("members" == $at.toLowerCase()) { const url = $at + "/search?query=" + query + "&account_id=" + $aid;
                    make_url_call(url, (function(msg) { $('[email-tabs="container"]').html(msg_members_list(msg, $aid, $acc_name, cc.FILE_BUCKET_BASE_URL)) })) } else if ("customer-care" == $at.toLowerCase()) { const $uid = $(cs).attr("comms-search--uid"),
                        $type = $(cs).attr("comms-search--type");
                    console.log($at); const url = $at + "/search?user_id=" + $uid + "&account_id=" + $aid + "&type=" + $type + "&query=" + query;
                    make_url_call(url, (function(msg) { $('[email-tabs="container"]').html(msg_cc_list(msg, $type, $acc_name, cc.FILE_BUCKET_BASE_URL)) })) } else if ("peers" == $at.toLowerCase()) { const $type = $(cs).attr("comms-search--type"),
                        $uid = $(cs).attr("comms-search--uid"),
                        url = $at + "/search?user_id=" + $uid + "&account_id=" + $aid + "&type=" + $type + "&query=" + query;
                    make_url_call(url, (function(msg) { $('[email-tabs="container"]').html(msg_peers_list(msg, $type, $uid, $aid, $acc_name, cc.FILE_BUCKET_BASE_URL)) })) } else { const url = "search?query=" + query + "&account_id=" + $aid;
                    make_url_call(url, (function(msg) { $('[email-tabs="container"]').html(msg_list(msg, $aid, $acc_name, cc.FILE_BUCKET_BASE_URL)) })) } })) }) }), !1) }(window, document, jQuery, new locale);