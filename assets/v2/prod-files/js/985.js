"use strict";
(self.webpackChunkwebpackNumbers = self.webpackChunkwebpackNumbers || []).push([
    [985], { 596: (t, e, s) => { s.d(e, { H: () => r }); var o = s(1942);
            class r { constructor(t, e, s = !1, r = null) { this.response = null, this.multipleResponse = null, this.paginResponse = null, this.databaseResponse = null, this.postForm = null; const n = e.jsonData,
                        i = e.response; if (this.postForm = r, e.response.ok) { const t = String(window.supersecret.unknowable.ops.cookieName);
                        (0, o.vh)(`${t}_date`, (new Date).toUTCString(), 10) }
                    s ? this.error(e.error) : "get" === t ? this.get(n, i) : "post" === t ? this.post(n, i) : "post-file" === t ? this.postFile(n, i) : "put" === t ? this.put(n, i) : "patch" === t ? this.patch(n, i) : "delete" === t && this.delete(n, i) }
                error(t) { this.response = t }
                outputResponse(t, e, s) { return { success: t, message: e, data: s } }
                outputResponsePagin(t) { return { count: t.count, next: t.next, previous: t.previous, results: t.results } }
                outputResponseDatatable(t) { return { data: t.data, datatable_plugin: t.datatable_plugin, draw: t.draw, recordsFiltered: t.recordsFiltered, recordsTotal: t.recordsTotal } }
                outputErrorResponse(t, e, s, o, r) { return { success: t, message: e, nameError: s, unknownError: o, data: r } }
                get(t, e) { let s; if (t.hasOwnProperty("success") && t.hasOwnProperty("message") && t.hasOwnProperty("data")) s = t;
                    else { if (t.hasOwnProperty("count") && t.hasOwnProperty("next") && t.hasOwnProperty("previous") && t.hasOwnProperty("results")) return this.paginResponse = this.outputResponsePagin(t), this.paginResponse; if (t.hasOwnProperty("draw") && t.hasOwnProperty("recordsTotal") && t.hasOwnProperty("recordsFiltered") && t.hasOwnProperty("data")) return this.databaseResponse = this.outputResponseDatatable(t), this.databaseResponse;
                        t.hasOwnProperty("detail") && 404 === e.status && (s = { data: [], message: t.detail, success: !1 }) }
                    this.response = this.outputResponse(s.success, s.message, s.data) }
                postFile(t, e) { throw new Error("Method not implemented.") }
                post(t, e) { let s; if (t.hasOwnProperty("success") && t.hasOwnProperty("message") && t.hasOwnProperty("data")) s = t;
                    else if (Array.isArray(t))
                        if (e.ok) { const e = t[0].SUCCESS_RESPONSE_MESSAGE;
                            t.map((t => (delete t.SUCCESS_RESPONSE_MESSAGE, t))), this.response = this.outputResponse(!0, e, t) } else { let e = [];
                            t.forEach((t => { s = this.postError(t); const o = this.outputErrorResponse(s.success, s.message, s.nameError, s.unknownError, s.data);
                                e.includes(o) || e.push(o) })), this.multipleResponse = e }
                    else if (e.ok) { const e = t.SUCCESS_RESPONSE_MESSAGE;
                        delete t.SUCCESS_RESPONSE_MESSAGE, this.response = this.outputResponse(!0, e, t) } else s = this.postError(t), this.response = this.outputErrorResponse(s.success, s.message, s.nameError, s.unknownError, s.data) }
                postError(t) { const e = this.postErrorFields(t),
                        s = this.postNamedErrorFields(e),
                        o = this.postNonNamedErrorFields(e),
                        r = this.postErrorInputs(s, o); return { success: !1, message: e, nameError: r.nameErrorFields, unknownError: r.nonNameErrorFields, data: t } }
                postErrorFields(t) { let e = []; for (const s in t)
                        if (Object.prototype.hasOwnProperty.call(t, s)) { const o = { id: s, errors: t[s] };
                            e.includes(o) || e.push(o) }
                    return e }
                postNamedErrorFields(t) { let e = []; return t.forEach((t => { "non_field_errors" !== t.id && (e.includes(t) || e.push(t)) })), e }
                postNonNamedErrorFields(t) { let e = []; return t.forEach((t => { "non_field_errors" === t.id && (e.includes(t) || e.push(t)) })), e }
                validateInput(t) { t.hasOwnProperty("mdcFoundation") && (t.setCustomValidity(""), t.isUiValid = !0, t.validityTransform = (t, e) => e.valid ? {} : { valid: !1, customError: !0 }) }
                postErrorInputs(t, e) { const s = JSON.parse((t => { let e = {}; return t.forEach(((t, s) => { Reflect.has(e, s) ? (Array.isArray(e[s]) || (e[s] = [e[s]]), e[s].push(t)) : e[s] = t })), JSON.stringify(e) })(new FormData(this.postForm))); for (const t in s) { let e; try { e = document.querySelector("[name=" + t + "]") } catch (s) { e = document.querySelector("[id=" + t.replace("[]", "") + "]") }
                        this.validateInput(e), e.addEventListener("change", (t => { this.validateInput(e) })) } return t.forEach((t => { document.querySelectorAll('[id="' + t.id + '"]').forEach((s => { if (s.hasOwnProperty("mdcFoundation")) try { const e = t.errors; if (Array.isArray(e)) s.setCustomValidity(e.join("\n"));
                                else { let t = []; for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && e[s].forEach((e => { t.push(`Item ${s}: ${e}`) }));
                                    s.setCustomValidity(t.join("\n")) }
                                s.reportValidity(), s.isUiValid = !1 } catch (t) {} else e.includes(t) || e.push(t) })) })), { nameErrorFields: t, nonNameErrorFields: e } }
                put(t, e) { this.response = t }
                patch(t, e) { this.response = t }
                delete(t, e) { let s; if (t.hasOwnProperty("success") && t.hasOwnProperty("message") && t.hasOwnProperty("data")) s = t;
                    else if (e.ok) { const e = "Deleted";
                        this.response = this.outputResponse(!0, e, t) } else t.hasOwnProperty("detail") && 404 === e.status && (s = { data: [], message: t.detail, success: !1 }, this.response = this.outputResponse(s.success, s.message, [])) } } }, 771: (t, e, s) => { let o;
            s.d(e, { t: () => f }), o = !!window.location.href.includes(void 0); const r = { production: !0, isClientApp: o }; let n, i, a, c, l, p, u, d, h; if (r.production) { const t = "akwaabaapp.com/";
                i = "https://api.akwaabaapp.com/", a = "https://api." + t, d = "akwaabaclients." + t, n = "https://" + d, p = "https://akwaabaapp." + t, c = "https://file-bucket.plusdatabase.com/", l = n + "", u = p + "", h = "https://database.akwaabasoftware.com/" } else { d = "akwaaba-forms/"; const t = "192.168.173.1";
                n = "http://127.0.0.1:9001/", i = "http://" + t + "/AMG/plus_db/api/", a = n + "api/", h = "http://" + t + "/AMG/plus_db/client_dashboard/", c = "http://" + t + "/AMG/plus_db/file_bucket/", l = n + d, u = n + "akwaaba-forms-public/" } const f = { URLS: { BASE_URL: n, API_BASE_URL: i, PDB_CLIENT: h, AKWAABA_API_BASE_URL: a, FILE_BUCKET_BASE_URL: c, HOME_PAGE_BASE_URL: l, PUBLIC_PAGE_BASE_URL: u, LOGIN_PAGE_BASE_URL: void 0, PUBLIC_LOGIN_PAGE_BASE_URL: void 0, PUBLIC_BASE_URL: "https://akwaabaapp.com/", CLICK_COM_BASE_URL: "https://clickcomgh.com/" }, APP_SETTINGS: r, SERVICE_WORKER_TYPES: { postAction: "POST_ACTION", networkStatus: "NETWORK_STATUS" } };
            window.CONSTANTS = f }, 3750: (t, e, s) => { s.d(e, { A: () => o }); const o = () => { const t = document.querySelectorAll("[mm-active]"),
                    e = document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];
                t.forEach((t => { var s = t.getAttribute("mm-active").split("|"); for (let o = 0; o < s.length; o++) { const r = s[o];
                        e === r && t.setAttribute("class", "mm-active") } })) } }, 7052: (t, e, s) => { s.d(e, { h: () => r, t: () => n }); var o = s(8764); const r = t => o.lW.from(t).toString("base64"),
                n = t => o.lW.from(t, "base64").toString() }, 1942: (t, e, s) => {
            function o(t, e, s = 1) { let o = new Date;
                o.setHours(o.getHours() + 3 * s); let r = "expires=" + o.toUTCString();
                n(t) != e && (document.cookie = t + "=" + e + "; expires=expires=" + r) }

            function r(t, e, s = 1) { let o = new Date;
                o.setMinutes(o.getMinutes() + s); let r = "expires=" + o.toUTCString();
                n(t) != e && (document.cookie = t + "=" + e + "; expires=expires=" + r) }

            function n(t) { t += "="; let e = decodeURIComponent(document.cookie).split(";"); for (let s = 0; s < e.length; s++) { let o = e[s]; for (;
                        " " == o.charAt(0);) o = o.substring(1); if (0 == o.indexOf(t)) return o.substring(t.length, o.length) } return "" }
            s.d(e, { Ad: () => o, vh: () => r, Hl: () => n }) }, 7839: (t, e, s) => { s.d(e, { d: () => r }); var o = function(t, e, s, o) { return new(s || (s = Promise))((function(r, n) {
                    function i(t) { try { c(o.next(t)) } catch (t) { n(t) } }

                    function a(t) { try { c(o.throw(t)) } catch (t) { n(t) } }

                    function c(t) { var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) { t(e) }))).then(i, a) }
                    c((o = o.apply(t, e || [])).next()) })) };

            function r(t, e, s = !0) { return o(this, void 0, void 0, (function*() { let r = null;
                    e = null == e ? { method: "GET" } : e; var n = new Headers; if (n.append("Access-Control-Allow-Origin", "*/*"), n.append("Accept", "application/json, text/plain, */*"), s && n.append("Content-Type", "application/json"), void 0 === e.headers) e.headers = n;
                    else
                        for (const t of n.keys()) e.headers[t] = n.get(t); return e.mode = "cors", e.redirect = "follow", yield
                    function(t, e, s = 7e3) { return o = this, r = void 0, i = function*() { return Promise.race([fetch(t, e), new Promise(((t, e) => { setTimeout((() => e(new Error("Connection timeout, check network for internet access"))), s) }))]) }, new((n = void 0) || (n = Promise))((function(t, e) {
                            function s(t) { try { c(i.next(t)) } catch (t) { e(t) } }

                            function a(t) { try { c(i.throw(t)) } catch (t) { e(t) } }

                            function c(e) { var o;
                                e.done ? t(e.value) : (o = e.value, o instanceof n ? o : new n((function(t) { t(o) }))).then(s, a) }
                            c((i = i.apply(o, r || [])).next()) })); var o, r, n, i }(t, e, 3e5).then((t => (r = t, t.status >= 200 && t.status, Promise.resolve(t)))).then((t => o(this, void 0, void 0, (function*() { return { jsonData: 204 === t.status ? {} : yield t.json(), response: t, error: "" } })))).then((t => o(this, void 0, void 0, (function*() { return t })))).catch((function(t) { throw console.error("Request failed", t), t })) })) } }, 8967: (t, e, s) => { s.d(e, { T: () => o }); const o = (t, e = !0) => { if (Array.isArray(t)) { let s = (e ? "<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important;}</style>" : "") + "<ul>"; return t.forEach((t => { s += "string" == typeof t ? `<li>${t}</li>\n` : `<li>${t.error}</li>\n` })), s += "</ul>" } throw new Error("Unknown error response format") } }, 3600: (t, e, s) => { s.d(e, { W: () => c, B: () => p }); var o = s(771),
                r = s(7839),
                n = s(7052),
                i = s(1942),
                a = function(t, e, s, o) { return new(s || (s = Promise))((function(r, n) {
                        function i(t) { try { c(o.next(t)) } catch (t) { n(t) } }

                        function a(t) { try { c(o.throw(t)) } catch (t) { n(t) } }

                        function c(t) { var e;
                            t.done ? r(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) { t(e) }))).then(i, a) }
                        c((o = o.apply(t, e || [])).next()) })) }; const c = (t, e, s) => a(void 0, void 0, void 0, (function*() { const c = o.t.URLS.AKWAABA_API_BASE_URL + "clients/verify-token",
                        p = s,
                        u = (0, i.Hl)(p),
                        d = JSON.stringify({ token: (0, n.t)(u) }); if ((t => { const e = new Date; return Math.abs(t.getTime() - e.getTime()) / 36e5 < 24 })(new Date((0, i.Hl)(p + "_date")))) return u;
                    yield(0, r.d)(c, { method: "POST", body: d }, !0).then((o => a(void 0, void 0, void 0, (function*() { if (o.jsonData.token & o.jsonData.user & o.jsonData.expiry) { const t = (0, n.h)(String(o.jsonData.token));
                            (0, i.Ad)(p, t, 10), (0, i.vh)(p + "_date", (new Date).toUTCString(), 10) } else yield l(t, e, s) })))) })),
                l = (t, e, s) => a(void 0, void 0, void 0, (function*() { const a = o.t.URLS.AKWAABA_API_BASE_URL + "clients/login-id",
                        c = s,
                        l = JSON.stringify({ email: t, id: e });
                    yield(0, r.d)(a, { method: "POST", body: l }, !0).then((t => { if (t.jsonData.token) { const e = (0, n.h)(String(t.jsonData.token));
                            (0, i.Ad)(c, e, 10), (0, i.vh)(c + "_date", (new Date).toUTCString(), 10) } })) })),
                p = (t, e, s) => a(void 0, void 0, void 0, (function*() { const o = (0, n.h)(String(e)),
                        r = s;
                    window.supersecret = { unknowable: { ops: { email: t, id: o, cookieName: r } } }, "" == (0, i.Hl)(r) ? yield l(t, o, s) : yield c(t, o, s) })) } }
]);
//# sourceMappingURL=985.js.map