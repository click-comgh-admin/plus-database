"use strict";
(self.webpackChunkwebpackNumbers = self.webpackChunkwebpackNumbers || []).push([
    ["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--1c8a66"], { 9579: (e, t, n) => { n.r(t) }, 8485: (e, t, n) => { n.r(t), n.d(t, { CONSTANTS: () => s }); var o = n(3133),
                i = n(4510); const s = { URLS: n(577).URLS, APP_SETTINGS: i.APP_SETTINGS, SERVICE_WORKER_TYPES: o.SERVICE_WORKER_TYPES };
            window.CONSTANTS = s }, 3133: (e, t, n) => { n.r(t), n.d(t, { SERVICE_WORKER_TYPES: () => o }); const o = { postAction: "POST_ACTION", networkStatus: "NETWORK_STATUS" } }, 4510: (e, t, n) => { let o;
            n.r(t), n.d(t, { APP_SETTINGS: () => i }), o = !!window.location.href.includes(void 0); const i = { production: !1, isClientApp: o } }, 577: (e, t, n) => { let o, i, s, c, r, a, l, d, p; if (n.r(t), n.d(t, { URLS: () => u }), n(4510).APP_SETTINGS.production) { const e = "akwaabaapp.com/";
                i = "https://api.akwaabaapp.com/", s = "https://api." + e, d = "akwaabaclients." + e, o = "https://" + d, a = "https://akwaabaapp." + e, c = "https://file-bucket.akwaabaapp.com/", r = o + "", l = a + "", p = "https://database.akwaabasoftware.com/" } else { d = "akwaaba-forms/"; const e = "192.168.173.1";
                o = "http://127.0.0.1:9001/", i = "http://" + e + "/AMG/plus_db/api/", s = o + "api/", p = "http://" + e + "/AMG/plus_db/client_dashboard/", c = "http://" + e + "/AMG/plus_db/file_bucket/", r = o + d, l = o + "akwaaba-forms-public/" } const u = { BASE_URL: o, API_BASE_URL: i, PDB_CLIENT: p, AKWAABA_API_BASE_URL: s, FILE_BUCKET_BASE_URL: c, HOME_PAGE_BASE_URL: r, PUBLIC_PAGE_BASE_URL: l, LOGIN_PAGE_BASE_URL: void 0, PUBLIC_LOGIN_PAGE_BASE_URL: void 0, PUBLIC_BASE_URL: "https://akwaabaapp.com/", CLICK_COM_BASE_URL: "https://clickcomgh.com/" } }, 3750: (e, t, n) => { n.r(t), n.d(t, { ACTIVE_PAGE__: () => o }); const o = () => { const e = document.querySelectorAll("[mm-active]"),
                    t = document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];
                e.forEach((e => { var n = e.getAttribute("mm-active").split("|"); for (let o = 0; o < n.length; o++) { const i = n[o];
                        t === i && e.setAttribute("class", "mm-active") } })) } }, 7052: (e, t, n) => { n.r(t), n.d(t, { base64Encode: () => i, base64Decode: () => s }); var o = n(8764); const i = e => o.Buffer.from(e).toString("base64"),
                s = e => o.Buffer.from(e, "base64").toString() }, 1942: (e, t, n) => {
            function o(e, t, n = 1) { let o = new Date;
                o.setHours(o.getHours() + 3 * n); let i = "expires=" + o.toUTCString();
                s(e) != t && (document.cookie = e + "=" + t + "; expires=expires=" + i) }

            function i(e, t, n = 1) { let o = new Date;
                o.setMinutes(o.getMinutes() + n); let i = "expires=" + o.toUTCString();
                s(e) != t && (document.cookie = e + "=" + t + "; expires=expires=" + i) }

            function s(e) { e += "="; let t = decodeURIComponent(document.cookie).split(";"); for (let n = 0; n < t.length; n++) { let o = t[n]; for (;
                        " " == o.charAt(0);) o = o.substring(1); if (0 == o.indexOf(e)) return o.substring(e.length, o.length) } return "" }
            n.r(t), n.d(t, { set_cookies: () => o, set_cookies_minutes: () => i, get_cookie: () => s }) }, 7270: (e, t, n) => { n.r(t), n.d(t, { http: () => s }); var o = n(7153),
                i = function(e, t, n, o) { return new(n || (n = Promise))((function(i, s) {
                        function c(e) { try { a(o.next(e)) } catch (e) { s(e) } }

                        function r(e) { try { a(o.throw(e)) } catch (e) { s(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(c, r) }
                        a((o = o.apply(e, t || [])).next()) })) };

            function s(e, t, n = !0) { return i(this, void 0, void 0, (function*() { let s = null;
                    t = null == t ? { method: "GET" } : t; var c = new Headers; if (c.append("Access-Control-Allow-Origin", "*/*"), c.append("Accept", "application/json, text/plain, */*"), n && c.append("Content-Type", "application/json"), void 0 === t.headers) t.headers = c;
                    else
                        for (const e in c) t.headers[e] = c[e]; return t.mode = "cors", t.redirect = "follow", yield(0, o.default)(e, t, 3e5).then((e => (s = e, e.status >= 200 && e.status, Promise.resolve(e)))).then((e => i(this, void 0, void 0, (function*() { return { jsonData: 204 === e.status ? {} : yield e.json(), response: e, error: "" } })))).then((e => i(this, void 0, void 0, (function*() { return e })))).catch((function(e) { throw console.error("Request failed", e), e })) })) } }, 7153: (e, t, n) => { n.r(t), n.d(t, { default: () => o });

            function o(e, t, n = 7e3) { return o = this, i = void 0, c = function*() { return Promise.race([fetch(e, t), new Promise(((e, t) => { setTimeout((() => t(new Error("Connection timeout, check network for internet access"))), n) }))]) }, new((s = void 0) || (s = Promise))((function(e, t) {
                    function n(e) { try { a(c.next(e)) } catch (e) { t(e) } }

                    function r(e) { try { a(c.throw(e)) } catch (e) { t(e) } }

                    function a(t) { var o;
                        t.done ? e(t.value) : (o = t.value, o instanceof s ? o : new s((function(e) { e(o) }))).then(n, r) }
                    a((c = c.apply(o, i || [])).next()) })); var o, i, s, c } }, 3600: (e, t, n) => { n.r(t), n.d(t, { verifyToken: () => a, tokenLogin: () => d }); var o = n(8485),
                i = n(7270),
                s = n(7052),
                c = n(1942),
                r = function(e, t, n, o) { return new(n || (n = Promise))((function(i, s) {
                        function c(e) { try { a(o.next(e)) } catch (e) { s(e) } }

                        function r(e) { try { a(o.throw(e)) } catch (e) { s(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(c, r) }
                        a((o = o.apply(e, t || [])).next()) })) }; const a = (e, t, n) => r(void 0, void 0, void 0, (function*() { const a = o.CONSTANTS.URLS.AKWAABA_API_BASE_URL + "clients/verify-token",
                        d = n,
                        p = (0, c.get_cookie)(d),
                        u = JSON.stringify({ token: (0, s.base64Decode)(p) }); if ((e => { const t = new Date; return Math.abs(e.getTime() - t.getTime()) / 36e5 < 24 })(new Date((0, c.get_cookie)(d + "_date")))) return p;
                    yield(0, i.http)(a, { method: "POST", body: u }, !0).then((o => r(void 0, void 0, void 0, (function*() { if (o.jsonData.token & o.jsonData.user & o.jsonData.expiry) { const e = (0, s.base64Encode)(String(o.jsonData.token));
                            (0, c.set_cookies)(d, e, 10), (0, c.set_cookies_minutes)(d + "_date", (new Date).toUTCString(), 10) } else yield l(e, t, n) })))) })),
                l = (e, t, n) => r(void 0, void 0, void 0, (function*() { const r = o.CONSTANTS.URLS.AKWAABA_API_BASE_URL + "clients/login-id",
                        a = n,
                        l = JSON.stringify({ email: e, id: t });
                    yield(0, i.http)(r, { method: "POST", body: l }, !0).then((e => { if (e.jsonData.token) { const t = (0, s.base64Encode)(String(e.jsonData.token));
                            (0, c.set_cookies)(a, t, 10), (0, c.set_cookies_minutes)(a + "_date", (new Date).toUTCString(), 10) } })) })),
                d = (e, t, n) => r(void 0, void 0, void 0, (function*() { const o = (0, s.base64Encode)(String(t)),
                        i = n;
                    window.supersecret = { unknowable: { ops: { email: e, id: o, cookieName: i } } }, "" == (0, c.get_cookie)(i) ? yield l(e, o, n) : yield a(e, o, n) })) }, 3690: (e, t, n) => { n.r(t), n.d(t, { SwitchInput: () => r }); var o = n(5862),
                i = n(9662),
                s = (n(9975), n(6788), function(e, t, n, o) { var i, s = arguments.length,
                        c = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, o);
                    else
                        for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (c = (s < 3 ? i(c) : s > 3 ? i(t, n, c) : i(t, n)) || c); return s > 3 && c && Object.defineProperty(t, n, c), c }),
                c = function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) }; let r = class extends o.LitElement { constructor() { super(...arguments), this.name = "", this.label = "", this.selected = !1, this.value = "1", this.isSelected = this.selected }
                render() { return o.html `
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
        </mwc-formfield>
      </div>
    ` }
                get switch() { return this.selected ? o.html `
        <mwc-switch selected name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      ` : o.html `
        <mwc-switch name="${this.name}" id="${this.name}"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      ` }
                switchAction(e) { this.isSelected = e.target.selected }
                createRenderRoot() { return this } };
            r.styles = [o.css `
      :host {
        display: block;
      }
    `], s([(0, i.property)({ type: String }), c("design:type", String)], r.prototype, "name", void 0), s([(0, i.property)({ type: String }), c("design:type", String)], r.prototype, "label", void 0), s([(0, i.property)({ type: Boolean }), c("design:type", Boolean)], r.prototype, "selected", void 0), s([(0, i.property)({ type: String }), c("design:type", String)], r.prototype, "value", void 0), s([(0, i.property)({ type: Boolean }), c("design:type", Boolean)], r.prototype, "isSelected", void 0), r = s([(0, i.customElement)("switch-input")], r) } }
]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_active_page_index_ts--1c8a66.js.map