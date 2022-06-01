(function(e, n, t) {
    e.addEventListener("DOMContentLoaded", function(e) {
        try {
            n._s(".startButton", function(e) {
                var o, a, s, r, c;
                t({
                    selector: "#recorder_1",
                    time: 15e3,
                    isAudio: !0
                }, function(e, t, o) {
                    console.log(e, t, o),
                        c.innerHTML = "",
                        a.className = a.className.replace(" d-none", ""),
                        s.className = s.className.replace(" d-none", ""),
                        n._s("[make-general-posts--voice]", function(t) {
                            t.addEventListener("submit", function(o) {
                                if (o.preventDefault(),
                                    "object" == typeof e) {
                                    var a = t.attributes["make-general-posts--voice"].value,
                                        s = new FormData(t);
                                    s.append("fn", 99 * Math.random(1, 99)),
                                        s.append("voice_audio", e),
                                        n.submit_form_data("[make-general-posts--voice]", s, a = a)
                                } else
                                    Swal.fire({
                                        title: "<i>Please Make a Recording Before Sending</i>",
                                        type: "warning",
                                        focusConfirm: !1
                                    })
                            })
                        })
                }, function() {
                    o.className += " d-none",
                        r.className += " d-none",
                        c.innerHTML = "Please Wait, Preparing Audio"
                }, function() {
                    n._s(".recorder_log", function(e) {
                        e.innerHTML = "Device Does not Support RECORDING"
                    })
                }, function(e) {
                    o = e.preview,
                        a = e.recording,
                        s = e.startButton,
                        r = e.stopButton,
                        e.downloadButton,
                        c = e.logElement,
                        // o.className += " d-none",
                        a.className += " d-none",
                        r.className += " d-none",
                        s.addEventListener("click", function(e) {
                            s.className += " d-none",
                                o.className = o.className.replace(" d-none", ""),
                                r.className = r.className.replace(" d-none", ""),
                                a.className = a.classList.contains("d-none") ? a.className : a.className + " d-none"
                        })
                })
            })
        } catch (e) {
            console.log(e)
        }
    }, !1)
})(document, new locale, pdbRecorder)