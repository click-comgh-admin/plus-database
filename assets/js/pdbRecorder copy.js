"use strict";
var pdbRecorder = function(e) {
    void 0 === e && (e = { selectors: t, time: time });
    var t = e.selectors,
        n = function(e, t) {
            for (var n = "[object NodeList]" == e.toString() ? e : document.querySelectorAll(e), r = [], o = 0; o < n.length; o++) {
                var i = n[o];
                r.push(t(i, o, n.length))
            }
            return r
        },
        r = void 0 === e ? 5e3 : e.time;

    function o(e) { n(t.logElement, function(t) { t.innerHTML += e + "\n" }) }
    n(t.startButton, function(e) {
        e.addEventListener("click", function() {
            navigator.mediaDevices.getUserMedia({ video: !0, audio: !0 }).then(function(e) { n(t.preview, function(r) { return r.srcObject = e, n(t.downloadButton, function(t) { t.href = e }), r.captureStream = r.captureStream || r.mozCaptureStream, new Promise(function(e) { return r.onplaying = e }) }) }).then(function() {
                var e = n(t.preview, function(e) {
                    return function(e, t) {
                        var n = new MediaRecorder(e),
                            r = [];
                        n.ondataavailable = function(e) { return r.push(e.data) }, n.start(), o(n.state + " for " + t / 1e3 + " seconds...");
                        var i = new Promise(function(e, t) { n.onstop = e, n.onerror = function(e) { return t(e.name) } }),
                            c = function(e) { return new Promise(function(t) { return setTimeout(t, e) }) }(t).then(function() { return "recording" == n.state && n.stop() });
                        return Promise.all([i, c]).then(function() { return r })
                    }(e.captureStream(), r)
                });
                console.log(e)
            }).then(function(e) {
                var r = new Blob(e, { type: "video/webm" });
                n(t.downloadButton, function(e) { n(t.recording, function(t) { t.src = URL.createObjectURL(r), e.href = t.src }), e.download = "RecordedVideo.webm" }), o("Successfully recorded " + r.size + " bytes of " + r.type + " media.")
            }).catch(o)
        }, !1)
    }), n(t.stopButton, function(e) { e.addEventListener("click", function() { n(t.preview, function(e) {! function(e) { e.getTracks().forEach(function(e) { return e.stop() }) }(e.srcObject) }) }, !1) })
}

pdbRecorder({
    selectors: {
        preview: '[id="preview"]',
        recording: '[id="recording"]',
        startButton: '[id="startButton"]',
        stopButton: '[id="stopButton"]',
        downloadButton: '[id="downloadButton"]',
        logElement: '[id="log"]',
    },
    time: 15000
});