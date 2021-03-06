"use strict";
var pdbRecorder = function(e, t, r, n, o) {
        void 0 === e && (e = {
            selector: i,
            time: time,
            logInfo: c,
            isAudio: u
        });
        var i = e.selector,
            u = void 0 !== e.isAudio && e.isAudio,
            c = void 0 !== e.logInfo && e.logInfo,
            a = void 0 === e.time ? 5e3 : e.time,
            d = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (void 0 === navigator.mediaDevices || !d)
            return n();
        ! function(e, t, r) {
            void 0 === r && (r = document);
            for (var n = "[object NodeList]" == e.toString() ? e : r.querySelectorAll(e), o = [], i = 0; i < n.length; i++) {
                var u = n[i];
                o.push(t(u, i, n.length))
            }
        }(i, function(e) {
            var n = e.querySelector(".preview"),
                i = e.querySelector(".recording"),
                d = e.querySelector(".startButton"),
                s = e.querySelector(".stopButton"),
                l = e.querySelector(".downloadButton"),
                f = e.querySelector(".recorder_log");

            function v(e) {
                c ? f.innerHTML += e + "\n" : console.log(e)
            }

            function p(e) {
                return r(),
                    e.stop()
            }
            o({
                    preview: n,
                    recording: i,
                    startButton: d,
                    stopButton: s,
                    downloadButton: l,
                    logElement: f
                }),
                d.addEventListener("click", function() {
                    navigator.mediaDevices.getUserMedia({
                        video: !u,
                        audio: !0
                    }).then(function(e) {
                        return n.srcObject = e,
                            l.href = e,
                            n.captureStream = n.captureStream || n.mozCaptureStream,
                            new Promise(function(e) {
                                return n.onplaying = e
                            })
                    }).then(function() {
                        return function(e, t) {
                            var r = new MediaRecorder(e),
                                n = [];
                            r.ondataavailable = function(e) {
                                    return n.push(e.data)
                                },
                                r.start(),
                                v(r.state + " for " + t / 1e3 + " seconds...");
                            var o = new Promise(function(e, t) {
                                    r.onstop = e,
                                        r.onerror = function(e) {
                                            return t(e.name)
                                        }
                                }),
                                i = function(e) {
                                    return new Promise(function(t) {
                                        return setTimeout(t, e)
                                    })
                                }(t).then(function() {
                                    return "recording" == r.state && p(r)
                                });
                            return Promise.all([o, i]).then(function() {
                                return n
                            })
                        }(n.captureStream(), a)
                    }).then(function(e) {
                        var r = new Blob(e, {
                            type: u ? "audio/mpeg" : "video/webm"
                        });
                        return i.src = URL.createObjectURL(r),
                            l.href = i.src,
                            l.download = u ? "recording.mp3" : "recording.mp4",
                            v("Successfully recorded " + r.size + " bytes of " + r.type + " media."),
                            t(r, l.href, !0)
                    }).catch(v)
                }, !1),
                s.addEventListener("click", function() {
                    ! function(e) {
                        e.getTracks().forEach(function(e) {
                            return p(e)
                        })
                    }(n.srcObject)
                }, !1)
        })
    }
    // pdbRecorder({
    //     selectors: {
    //         preview: '[id="preview"]',
    //         recording: '[id="recording"]',
    //         startButton: '[id="startButton"]',
    //         stopButton: '[id="stopButton"]',
    //         downloadButton: '[id="downloadButton"]',
    //         logElement: '[id="log"]',
    //     },
    //     time: 15000
    // });