'use strict';

(function(window, document, $, cc, ) {
    document.addEventListener('DOMContentLoaded', function(loaded) {
        setInterval(() => {
            try {
                cc.fetchRelay({ url: cc.API_BASE_URL + "notifications/member-notifications-recent?account_id=4&member_id=5" }, (response) => {
                    for (let index = 0; index < response.data.length; index++) {
                        const element = response.data[index];
                        notifier.show(
                            "Notification!",
                            "<hr class=\"my-1 mx-3 ml-5\">" +
                            "<div class=\"mx-2 my-0\">" +
                            element['notification_type']['pdn_message'] +
                            "<div class=\"d-flex justify-content-between\"> <div></div>" +
                            "<a class=\"fa pull-right mr-3 btn btn-outline-light mt-2\" href=\"" + element['notification_type']['pdn_url'] + "\" " +
                            "target=\"_blank\">Open</a>" +
                            "</div>" +
                            "</div>",
                            'info', '' + element['notification_type']['image_url'] + '' + element['notification_type']['image_info']['pdn_url'],
                            0,
                        );
                    }
                });
            } catch (err) {
                console.log(err);
            }
        }, 600000);
        setInterval(() => {
            try {
                cc.fetchRelay({ url: cc.API_BASE_URL + "notifications/member-notifications-count?account_id=4&member_id=5" }, (response) => {

                    const total_unseen = response.data[0]['total_unseen'];
                    if (total_unseen > 1) {
                        notifier.show(
                            "Notification!",
                            "<hr class=\"my-1 mx-3 ml-5\">" +
                            "<div class=\"mx-2 my-0\">" +
                            "You have " + total_unseen + " new notifications" +
                            "<div class=\"d-flex justify-content-between\"> <div></div>" +
                            "<a class=\"fa pull-right mr-3 btn btn-outline-light mt-2\" href=\"" + cc.BASE_URL + "communications/notifications/notifications\" " +
                            "target=\"_blank\">Open</a>" +
                            "</div>" +
                            "</div>",
                            'info', '' + '' + cc.FILE_BUCKET_BASE_URL + '/files/notifications/bell.png',
                            0,
                        );
                    }

                });
            } catch (err) {
                console.log(err);
            }
        }, 600000);
    }, false);
})(window, document, jQuery, new locale());