"use strict";
(self.webpackChunkwebpackNumbers = self.webpackChunkwebpackNumbers || []).push([
    ["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_login_main_ts"], {
        9579: (t, e, n) => { n.r(e) },
        8485: (t, e, n) => {
            n.r(e), n.d(e, { CONSTANTS: () => s });
            var o = n(3133),
                i = n(4510);
            const s = { URLS: n(577).URLS, APP_SETTINGS: i.APP_SETTINGS, SERVICE_WORKER_TYPES: o.SERVICE_WORKER_TYPES };
            window.CONSTANTS = s
        },
        3133: (t, e, n) => { n.r(e), n.d(e, { SERVICE_WORKER_TYPES: () => o }); const o = { postAction: "POST_ACTION", networkStatus: "NETWORK_STATUS" } },
        4510: (t, e, n) => {
            let o;
            n.r(e), n.d(e, { APP_SETTINGS: () => i }), o = !!window.location.href.includes(void 0);
            const i = { production: !1, isClientApp: o }
        },
        577: (t, e, n) => {
            let o, i, s, a, c, r, u, d, _;
            if (n.r(e), n.d(e, { URLS: () => l }), n(4510).APP_SETTINGS.production) {
                const t = "akwaabaapp.com/";
                i = "https://api.akwaabaapp.com/", s = "https://api." + t, d = "akwaabaclients." + t, o = "https://" + d, r = "https://akwaabaapp." + t, a = "https://file-bucket.akwaabasoftware.com/", c = o + "", u = r + "", _ = "https://database.akwaabasoftware.com/"
            } else {
                d = "akwaaba-forms/";
                const t = "192.168.173.1";
                o = "http://127.0.0.1:9001/", i = "http://" + t + "/AMG/plus_db/api/", s = o + "api/", _ = "http://" + t + "/AMG/plus_db/client_dashboard/", a = "http://" + t + "/AMG/plus_db/file_bucket/", c = o + d, u = o + "akwaaba-forms-public/"
            }
            const l = { BASE_URL: o, API_BASE_URL: i, PDB_CLIENT: _, AKWAABA_API_BASE_URL: s, FILE_BUCKET_BASE_URL: a, HOME_PAGE_BASE_URL: c, PUBLIC_PAGE_BASE_URL: u, LOGIN_PAGE_BASE_URL: void 0, PUBLIC_LOGIN_PAGE_BASE_URL: void 0, PUBLIC_BASE_URL: "https://akwaabaapp.com/", CLICK_COM_BASE_URL: "https://clickcomgh.com/" }
        },
        7052: (t, e, n) => {
            n.r(e), n.d(e, { base64Encode: () => i, base64Decode: () => s });
            var o = n(8764);
            const i = t => o.Buffer.from(t).toString("base64"),
                s = t => o.Buffer.from(t, "base64").toString()
        },
        1942: (t, e, n) => {
            function o(t, e, n = 1) {
                let o = new Date;
                o.setHours(o.getHours() + 3 * n);
                let i = "expires=" + o.toUTCString();
                s(t) != e && (document.cookie = t + "=" + e + "; expires=expires=" + i)
            }

            function i(t, e, n = 1) {
                let o = new Date;
                o.setMinutes(o.getMinutes() + n);
                let i = "expires=" + o.toUTCString();
                s(t) != e && (document.cookie = t + "=" + e + "; expires=expires=" + i)
            }

            function s(t) {
                t += "=";
                let e = decodeURIComponent(document.cookie).split(";");
                for (let n = 0; n < e.length; n++) {
                    let o = e[n];
                    for (;
                        " " == o.charAt(0);) o = o.substring(1);
                    if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
                }
                return ""
            }
            n.r(e), n.d(e, { set_cookies: () => o, set_cookies_minutes: () => i, get_cookie: () => s })
        },
        7270: (t, e, n) => {
            n.r(e), n.d(e, { http: () => s });
            var o = n(7153),
                i = function(t, e, n, o) {
                    return new(n || (n = Promise))((function(i, s) {
                        function a(t) { try { r(o.next(t)) } catch (t) { s(t) } }

                        function c(t) { try { r(o.throw(t)) } catch (t) { s(t) } }

                        function r(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) { t(e) }))).then(a, c)
                        }
                        r((o = o.apply(t, e || [])).next())
                    }))
                };

            function s(t, e, n = !0) {
                return i(this, void 0, void 0, (function*() {
                    let s = null;
                    e = null == e ? { method: "GET" } : e;
                    var a = new Headers;
                    if (a.append("Access-Control-Allow-Origin", "*/*"), a.append("Accept", "application/json, text/plain, */*"), n && a.append("Content-Type", "application/json"), void 0 === e.headers) e.headers = a;
                    else
                        for (const t of a.keys()) e.headers[t] = a.get(t);
                    return e.mode = "cors", e.redirect = "follow", yield(0, o.default)(t, e, 3e5).then((t => (s = t, t.status >= 200 && t.status, Promise.resolve(t)))).then((t => i(this, void 0, void 0, (function*() { return { jsonData: 204 === t.status ? {} : yield t.json(), response: t, error: "" } })))).then((t => i(this, void 0, void 0, (function*() { return t })))).catch((function(t) { throw console.error("Request failed", t), t }))
                }))
            }
        },
        7153: (t, e, n) => {
            n.r(e), n.d(e, { default: () => o });

            function o(t, e, n = 7e3) {
                return o = this, i = void 0, a = function*() { return Promise.race([fetch(t, e), new Promise(((t, e) => { setTimeout((() => e(new Error("Connection timeout, check network for internet access"))), n) }))]) }, new((s = void 0) || (s = Promise))((function(t, e) {
                    function n(t) { try { r(a.next(t)) } catch (t) { e(t) } }

                    function c(t) { try { r(a.throw(t)) } catch (t) { e(t) } }

                    function r(e) {
                        var o;
                        e.done ? t(e.value) : (o = e.value, o instanceof s ? o : new s((function(t) { t(o) }))).then(n, c)
                    }
                    r((a = a.apply(o, i || [])).next())
                }));
                var o, i, s, a
            }
        },
        4108: (t, e, n) => {
            n.r(e), n.d(e, { verifyToken: () => r, tokenLogin: () => d });
            var o = n(8485),
                i = n(7270),
                s = n(7052),
                a = n(1942),
                c = function(t, e, n, o) {
                    return new(n || (n = Promise))((function(i, s) {
                        function a(t) { try { r(o.next(t)) } catch (t) { s(t) } }

                        function c(t) { try { r(o.throw(t)) } catch (t) { s(t) } }

                        function r(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) { t(e) }))).then(a, c)
                        }
                        r((o = o.apply(t, e || [])).next())
                    }))
                };
            const r = (t, e, n) => c(void 0, void 0, void 0, (function*() {
                    const r = o.CONSTANTS.URLS.AKWAABA_API_BASE_URL + "clients/verify-token",
                        d = n,
                        _ = (0, a.get_cookie)(d),
                        l = JSON.stringify({ token: (0, s.base64Decode)(_) });
                    if ((t => { const e = new Date; return Math.abs(t.getTime() - e.getTime()) / 36e5 < 24 })(new Date((0, a.get_cookie)(d + "_date")))) return _;
                    yield(0, i.http)(r, { method: "POST", body: l }, !0).then((o => c(void 0, void 0, void 0, (function*() {
                        if (o.jsonData.token & o.jsonData.user & o.jsonData.expiry) {
                            const t = (0, s.base64Encode)(String(o.jsonData.token));
                            (0, a.set_cookies)(d, t, 10), (0, a.set_cookies_minutes)(d + "_date", (new Date).toUTCString(), 10)
                        } else yield u(t, e, n)
                    }))))
                })),
                u = (t, e, n) => c(void 0, void 0, void 0, (function*() {
                    const c = o.CONSTANTS.URLS.AKWAABA_API_BASE_URL + "clients/login-id",
                        r = n,
                        u = JSON.stringify({ email: t, id: e });
                    yield(0, i.http)(c, { method: "POST", body: u }, !0).then((t => {
                        if (t.jsonData.token) {
                            const e = (0, s.base64Encode)(String(t.jsonData.token));
                            (0, a.set_cookies)(r, e, 10), (0, a.set_cookies_minutes)(r + "_date", (new Date).toUTCString(), 10)
                        }
                    }))
                })),
                d = (t, e, n) => c(void 0, void 0, void 0, (function*() {
                    const o = (0, s.base64Encode)(String(e)),
                        i = n;
                    window.supersecret = { unknowable: { ops: { email: t, id: o, cookieName: i } } }, "" == (0, a.get_cookie)(i) ? yield u(t, o, n) : yield r(t, o, n)
                }))
        }
    }
]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_login_main_ts.js.map