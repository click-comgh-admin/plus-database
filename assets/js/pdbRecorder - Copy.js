"use strict";
var pdbRecorder = function(e, t) {
    void 0 === e && (e = { selector: r, time: time, logInfo: o, isAudio: n });
    var r = e.selector,
        n = void 0 !== e.isAudio && e.isAudio,
        o = void 0 !== e.logInfo && e.logInfo,
        i = void 0 === e.time ? 5e3 : e.time;
    ! function(e, t, r) {
        void 0 === r && (r = document);
        for (var n = "[object NodeList]" == e.toString() ? e : r.querySelectorAll(e), o = [], i = 0; i < n.length; i++) {
            var u = n[i];
            o.push(t(u, i, n.length))
        }
    }(r, function(e) {
        var r = e.querySelector(".preview"),
            u = e.querySelector(".recording"),
            c = e.querySelector(".startButton"),
            a = e.querySelector(".stopButton"),
            d = e.querySelector(".downloadButton"),
            s = e.querySelector(".log");

        function l(e) { o ? s.innerHTML += e + "\n" : console.log(e) }
        c.addEventListener("click", function() {
            navigator.mediaDevices.getUserMedia({ video: !n, audio: !0 }).then(function(e) { return r.srcObject = e, d.href = e, r.captureStream = r.captureStream || r.mozCaptureStream, new Promise(function(e) { return r.onplaying = e }) }).then(function() {
                return function(e, t) {
                    var r = new MediaRecorder(e),
                        n = [];
                    r.ondataavailable = function(e) { return n.push(e.data) }, r.start(), l(r.state + " for " + t / 1e3 + " seconds...");
                    var o = new Promise(function(e, t) { r.onstop = e, r.onerror = function(e) { return t(e.name) } }),
                        i = function(e) { return new Promise(function(t) { return setTimeout(t, e) }) }(t).then(function() { return "recording" == r.state && r.stop() });
                    return Promise.all([o, i]).then(function() { return n })
                }(r.captureStream(), i)
            }).then(function(e) { var r = new Blob(e, { type: n ? "audio/webm" : "video/webm" }); return u.src = URL.createObjectURL(r), d.href = u.src, d.download = n ? "recording.webm" : "recording.mp4", l("Successfully recorded " + r.size + " bytes of " + r.type + " media."), t(r) }).catch(l)
        }, !1), a.addEventListener("click", function() {! function(e) { e.getTracks().forEach(function(e) { return e.stop() }) }(r.srcObject) }, !1)
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

pdbRecorder({
    selector: "#recorder_1",
    time: 15000,
    isAudio: true
});