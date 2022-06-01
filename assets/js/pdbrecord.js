(function(e, n, o) {
    e.addEventListener("DOMContentLoaded", function(e) {
        try {
            function t(e) {
                n._s("[make-general-posts--voice]", function(o) {
                    o.addEventListener("submit", function(t) {
                        if (t.preventDefault(),
                            "object" == typeof e) {
                            var a = o.attributes["make-general-posts--voice"].value,
                                s = new FormData(o);
                            s.append("fn", 99 * Math.random(1, 99)),
                                s.append("voice_audio", e),
                                n.submit_form_data("[make-general-posts--voice]", s, a = a)
                        } else
                            n._s('[name="voice_audio_file"]', function(e) {
                                if (0 === e.files.length)
                                    Swal.fire({
                                        title: "<i>Please Make a Recording/ Select an Audio File Before Sending</i>",
                                        type: "warning",
                                        focusConfirm: !1
                                    });
                                else {
                                    var t = o.attributes["make-general-posts--voice"].value,
                                        a = new FormData(o);
                                    a.append("fn", 99 * Math.random(1, 99)),
                                        n.submit_form_data("[make-general-posts--voice]", a, t = t)
                                }
                            })
                    })
                })
            }
            t(recordedBlob = void 0),
                n._s(".startButton", function(e) {
                    var a, s, c, r, i;
                    o({
                        selector: "#recorder_1",
                        time: 15e3,
                        isAudio: !0
                    }, function(e, n, o) {
                        console.log(e, n, o),
                            i.innerHTML = "",
                            s.className = s.className.replace(" d-none", ""),
                            c.className = c.className.replace(" d-none", ""),
                            t(e)
                    }, function() {
                        a.className += " d-none",
                            r.className += " d-none",
                            i.innerHTML = "Please Wait, Preparing Audio"
                    }, function() {
                        n._s(".recorder_log", function(e) {
                                e.innerHTML = "Device Does not Support RECORDING"
                            }),
                            n._s(".preview", function(e) {
                                e.className += " d-none"
                            }),
                            n._s(".recording", function(e) {
                                e.className += " d-none"
                            }),
                            n._s(".stopButton", function(e) {
                                e.className += " d-none"
                            }),
                            n._s(".startButton", function(e) {
                                e.className += " d-none"
                            }),
                            n._s(".downloadButton", function(e) {
                                e.className += " d-none"
                            })
                    }, function(e) {
                        a = e.preview,
                            s = e.recording,
                            c = e.startButton,
                            r = e.stopButton,
                            e.downloadButton,
                            i = e.logElement,
                            s.className += " d-none",
                            r.className += " d-none",
                            c.addEventListener("click", function(e) {
                                c.className += " d-none",
                                    a.className = a.className.replace(" d-none", ""),
                                    r.className = r.className.replace(" d-none", ""),
                                    s.className = s.classList.contains("d-none") ? s.className : s.className + " d-none"
                            })
                    })
                })
        } catch (e) {
            console.log(e)
        }
    }, !1);
})(document, new locale, pdbRecorder);