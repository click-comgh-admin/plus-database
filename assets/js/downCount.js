countDownCounter = function(e) {
    void 0 === e && (e = {
        selector: n,
        date: t
    });
    var n = e.selector,
        t = e.date,
        o = function(e, n) {
            for (var t = "[object NodeList]" == e.toString() ? e : document.querySelectorAll(e), o = [], r = 0; r < t.length; r++) {
                var i = t[r];
                o.push(n(i, r, t.length))
            }
            return o
        };
    var r = new Date(t).getTime(),
        i = setInterval(function() {
            var e = (new Date).getTime(),
                n = r - e,
                t = Math.floor(n / 864e5),
                u = Math.floor(n % 864e5 / 36e5),
                l = Math.floor(n % 36e5 / 6e4),
                c = Math.floor(n % 6e4 / 1e3);
            n < 0 ? (clearInterval(i),
                    t = 0,
                    u = 0,
                    l = 0,
                    c = 0) : (t = Math.floor(n / 864e5),
                    u = Math.floor(n % 864e5 / 36e5),
                    l = Math.floor(n % 36e5 / 6e4),
                    c = Math.floor(n % 6e4 / 1e3)),
                t = String(t).length >= 2 ? t : "0" + t,
                u = String(u).length >= 2 ? u : "0" + u,
                l = String(l).length >= 2 ? l : "0" + l,
                c = String(c).length >= 2 ? c : "0" + c;
            var f = 1 === t ? "day" : "days",
                a = 1 === u ? "hour" : "hours",
                s = 1 === l ? "minute" : "minutes",
                d = 1 === c ? "second" : "seconds";
            o(".days", function(e) {
                    e.innerHTML = t
                }),
                o(".hours", function(e) {
                    e.innerHTML = u
                }),
                o(".minutes", function(e) {
                    e.innerHTML = l
                }),
                o(".seconds", function(e) {
                    e.innerHTML = c
                }),
                o(".days_ref", function(e) {
                    e.innerHTML = f
                }),
                o(".hours_ref", function(e) {
                    e.innerHTML = a
                }),
                o(".minutes_ref", function(e) {
                    e.innerHTML = s
                }),
                o(".seconds_ref", function(e) {
                    e.innerHTML = d
                })
        }, 1e3)
}