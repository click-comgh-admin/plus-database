(function(document, cc, pdbRecorder) {
    document.addEventListener('DOMContentLoaded', function(loaded) {
        try {
            function submit_voice(recordedBlob) {
                cc._s("[make-general-posts--voice]", function(form) {
                    form.addEventListener("submit", function(fE) {
                        fE.preventDefault();
                        if (typeof recordedBlob == "object") {
                            let confirm_msg = form.attributes["make-general-posts--voice"].value,
                                formData = new FormData(form);
                            formData.append("fn", 99 * Math.random(1, 99)),
                                formData.append("voice_audio", recordedBlob),
                                cc.submit_form_data("[make-general-posts--voice]", formData, confirm_msg = confirm_msg);
                        } else {
                            Swal.fire({
                                title: "<i>Please Make a Recording Before Sending</i>",
                                type: "warning",
                                focusConfirm: !1
                            });
                        }
                    })
                });
            }
            submit_voice(recordedBlob = undefined);
            cc._s(`.startButton`, (recordBtn) => {
                let preview, recording, startButton, stopButton, downloadButton, logElement;

                pdbRecorder({
                    selector: "#recorder_1",
                    time: 15000,
                    isAudio: true
                }, function(recordedBlob, download_link, isDone) { //callback
                    console.log(recordedBlob, download_link, isDone);
                    logElement.innerHTML = "";
                    recording.className = recording.className.replace(" d-none", "");
                    startButton.className = startButton.className.replace(" d-none", "");

                    // cc._s("[make-general-posts]", function(form) {
                    //     form.addEventListener("submit", function(fE) {
                    //         fE.preventDefault();
                    //         if (typeof recordedBlob == "object") {
                    //             let confirm_msg = form.attributes["make-general-posts"].value,
                    //                 formData = new FormData(form);
                    //             formData.append("fn", 99 * Math.random(1, 99)),
                    //                 formData.append("voice_audio", recordedBlob),
                    //                 cc.submit_form_data("[make-general-posts]", formData, confirm_msg = confirm_msg);
                    //         } else {
                    //             Swal.fire({
                    //                 title: "<i>Please Make a Recording Before Sending</i>",
                    //                 type: "warning",
                    //                 focusConfirm: !1
                    //             });
                    //         }
                    //     })
                    // });
                    submit_voice(recordedBlob);
                }, function() { //stopCallback
                    preview.className += " d-none";
                    stopButton.className += " d-none";
                    logElement.innerHTML = "Please Wait, Preparing Audio";

                }, function() { //errorCallback
                    cc._s(`.recorder_log`, (logElement) => {
                        logElement.innerHTML = "Device Does not Support RECORDING";
                    });
                    cc._s(`.preview`, (preview) => { preview.className += " d-none"; });
                    cc._s(`.recording`, (recording) => { recording.className += " d-none"; });
                    cc._s(`.stopButton`, (stopButton) => { stopButton.className += " d-none"; });
                    cc._s(`.startButton`, (startButton) => { startButton.className += " d-none"; });
                    cc._s(`.downloadButton`, (downloadButton) => { downloadButton.className += " d-none"; });
                }, function(selectors) { //selectorsCallback
                    preview = selectors.preview,
                        recording = selectors.recording,
                        startButton = selectors.startButton,
                        stopButton = selectors.stopButton,
                        downloadButton = selectors.downloadButton,
                        logElement = selectors.logElement;

                    // preview.className += " d-none";
                    recording.className += " d-none";
                    stopButton.className += " d-none";

                    startButton.addEventListener("click", function(e) {
                        startButton.className += " d-none";
                        preview.className = preview.className.replace(" d-none", "");
                        stopButton.className = stopButton.className.replace(" d-none", "");
                        recording.className = recording.classList.contains("d-none") ? recording.className : recording.className + " d-none";
                    });
                });
            });
        } catch (error) {
            console.log(error)
        }
    }, false);
})(document, new locale(), pdbRecorder);