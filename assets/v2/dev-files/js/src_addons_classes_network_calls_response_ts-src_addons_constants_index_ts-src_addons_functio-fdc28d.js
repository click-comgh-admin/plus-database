"use strict";
(self.webpackChunkwebpackNumbers = self.webpackChunkwebpackNumbers || []).push([
    ["src_addons_classes_network_calls_response_ts-src_addons_constants_index_ts-src_addons_functio-fdc28d"], { 4492: (e, t, s) => { s.r(t), s.d(t, { NetWorkCallResponses: () => n }); var r = s(1942),
                o = s(6217);
            class n { constructor(e, t, s = !1, o = null) { this.response = null, this.multipleResponse = null, this.paginResponse = null, this.databaseResponse = null, this.postForm = null; const n = t.jsonData,
                        a = t.response; if (this.postForm = o, t.response.ok) try { const e = String(window.supersecret.unknowable.ops.cookieName);
                        (0, r.set_cookies_minutes)(`${e}_date`, (new Date).toUTCString(), 10) } catch (s) { console.log(s) }
                    s ? this.error(t.error) : "get" === e ? this.get(n, a) : "post" === e ? this.post(n, a) : "post-file" === e ? this.postFile(n, a) : "put" === e ? this.put(n, a) : "patch" === e ? this.patch(n, a) : "delete" === e && this.delete(n, a) }
                error(e) { this.response = e }
                outputResponse(e, t, s) { return { success: e, message: t, data: s } }
                outputResponsePagin(e) { return { count: e.count, next: e.next, previous: e.previous, results: e.results } }
                outputResponseDatatable(e) { return { data: e.data, datatable_plugin: e.datatable_plugin, draw: e.draw, recordsFiltered: e.recordsFiltered, recordsTotal: e.recordsTotal } }
                outputErrorResponse(e, t, s, r, o) { return { success: e, message: t, nameError: s, unknownError: r, data: o } }
                get(e, t) { let s; if (e.hasOwnProperty("success") && e.hasOwnProperty("message") && e.hasOwnProperty("data")) s = e;
                    else { if (e.hasOwnProperty("count") && e.hasOwnProperty("next") && e.hasOwnProperty("previous") && e.hasOwnProperty("results")) return this.paginResponse = this.outputResponsePagin(e), this.paginResponse; if (e.hasOwnProperty("draw") && e.hasOwnProperty("recordsTotal") && e.hasOwnProperty("recordsFiltered") && e.hasOwnProperty("data")) return this.databaseResponse = this.outputResponseDatatable(e), this.databaseResponse;
                        e.hasOwnProperty("detail") && 404 === t.status && (s = { data: [], message: e.detail, success: !1 }) }
                    this.response = this.outputResponse(s.success, s.message, s.data) }
                postFile(e, t) { throw new Error("Method not implemented.") }
                post(e, t) { let s; if (e.hasOwnProperty("success") && e.hasOwnProperty("message") && e.hasOwnProperty("data")) s = e;
                    else if (Array.isArray(e))
                        if (t.ok) { const t = e[0].SUCCESS_RESPONSE_MESSAGE;
                            e.map((e => (delete e.SUCCESS_RESPONSE_MESSAGE, e))), this.response = this.outputResponse(!0, t, e) } else { let t = [];
                            e.forEach((e => { s = this.postError(e); const r = this.outputErrorResponse(s.success, s.message, s.nameError, s.unknownError, s.data);
                                t.includes(r) || t.push(r) })), this.multipleResponse = t }
                    else if (t.ok) { const t = e.SUCCESS_RESPONSE_MESSAGE;
                        delete e.SUCCESS_RESPONSE_MESSAGE, this.response = this.outputResponse(!0, t, e) } else s = this.postError(e), this.response = this.outputErrorResponse(s.success, s.message, s.nameError, s.unknownError, s.data) }
                postError(e) { const t = this.postErrorFields(e),
                        s = this.postNamedErrorFields(t),
                        r = this.postNonNamedErrorFields(t),
                        o = this.postErrorInputs(s, r); return { success: !1, message: t, nameError: o.nameErrorFields, unknownError: o.nonNameErrorFields, data: e } }
                postErrorFields(e) { let t = []; for (const s in e)
                        if (Object.prototype.hasOwnProperty.call(e, s)) { const r = { id: s, errors: e[s] };
                            t.includes(r) || t.push(r) }
                    return t }
                postNamedErrorFields(e) { let t = []; return e.forEach((e => { "non_field_errors" !== e.id && (t.includes(e) || t.push(e)) })), t }
                postNonNamedErrorFields(e) { let t = []; return e.forEach((e => { "non_field_errors" === e.id && (t.includes(e) || t.push(e)) })), t }
                validateInput(e) { e.hasOwnProperty("mdcFoundation") && (e.setCustomValidity(""), e.isUiValid = !0, e.validityTransform = (e, t) => t.valid ? {} : { valid: !1, customError: !0 }) }
                postErrorInputs(e, t) { const s = JSON.parse((0, o.formDataToJson)(new FormData(this.postForm))); for (const e in s) { let t; try { t = document.querySelector("[name=" + e + "]") } catch (s) { t = document.querySelector("[id=" + e.replace("[]", "") + "]") }
                        this.validateInput(t), t.addEventListener("change", (e => { this.validateInput(t) })) } return e.forEach((e => { document.querySelectorAll('[id="' + e.id + '"]').forEach((s => { if (s.hasOwnProperty("mdcFoundation")) try { const t = e.errors; if (Array.isArray(t)) s.setCustomValidity(t.join("\n"));
                                else { let e = []; for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && t[s].forEach((t => { e.push(`Item ${s}: ${t}`) }));
                                    s.setCustomValidity(e.join("\n")) }
                                s.reportValidity(), s.isUiValid = !1 } catch (e) {} else t.includes(e) || t.push(e) })) })), { nameErrorFields: e, nonNameErrorFields: t } }
                put(e, t) { this.response = e }
                patch(e, t) { this.response = e }
                delete(e, t) { let s; if (e.hasOwnProperty("success") && e.hasOwnProperty("message") && e.hasOwnProperty("data")) s = e;
                    else if (t.ok) { const t = "Deleted";
                        this.response = this.outputResponse(!0, t, e) } else e.hasOwnProperty("detail") && 404 === t.status && (s = { data: [], message: e.detail, success: !1 }, this.response = this.outputResponse(s.success, s.message, [])) } } }, 8485: (e, t, s) => { s.r(t), s.d(t, { CONSTANTS: () => n }); var r = s(3133),
                o = s(4510); const n = { URLS: s(577).URLS, APP_SETTINGS: o.APP_SETTINGS, SERVICE_WORKER_TYPES: r.SERVICE_WORKER_TYPES };
            window.CONSTANTS = n }, 3133: (e, t, s) => { s.r(t), s.d(t, { SERVICE_WORKER_TYPES: () => r }); const r = { postAction: "POST_ACTION", networkStatus: "NETWORK_STATUS" } }, 4510: (e, t, s) => { let r;
            s.r(t), s.d(t, { APP_SETTINGS: () => o }), r = !!window.location.href.includes(void 0); const o = { production: !1, isClientApp: r } }, 577: (e, t, s) => { let r, o, n, a, i, c, p, u, l; if (s.r(t), s.d(t, { URLS: () => d }), s(4510).APP_SETTINGS.production) { const e = "akwaabaapp.com/";
                o = "https://api.akwaabaapp.com/", n = "https://api." + e, u = "akwaabaclients." + e, r = "https://" + u, c = "https://akwaabaapp." + e, a = "https://file-bucket.plusdatabase.com/", i = r + "", p = c + "", l = "https://database.akwaabasoftware.com/" } else { u = "akwaaba-forms/"; const e = "192.168.173.1";
                r = "http://127.0.0.1:9001/", o = "http://" + e + "/AMG/plus_db/api/", n = r + "api/", l = "http://" + e + "/AMG/plus_db/client_dashboard/", a = "http://" + e + "/AMG/plus_db/file_bucket/", i = r + u, p = r + "akwaaba-forms-public/" } const d = { BASE_URL: r, API_BASE_URL: o, PDB_CLIENT: l, AKWAABA_API_BASE_URL: n, FILE_BUCKET_BASE_URL: a, HOME_PAGE_BASE_URL: i, PUBLIC_PAGE_BASE_URL: p, LOGIN_PAGE_BASE_URL: void 0, PUBLIC_LOGIN_PAGE_BASE_URL: void 0, PUBLIC_BASE_URL: "https://akwaabaapp.com/", CLICK_COM_BASE_URL: "https://clickcomgh.com/" } }, 7052: (e, t, s) => { s.r(t), s.d(t, { base64Encode: () => o, base64Decode: () => n }); var r = s(8764); const o = (e, t = !1) => { const s = r.Buffer.from(e).toString("base64"); return t ? s.replaceAll("=", "") : s },
                n = e => r.Buffer.from(e, "base64").toString() }, 1942: (e, t, s) => {
            function r(e, t, s = 1, r = "/") { let o = new Date;
                o.setHours(o.getHours() + 3 * s); let a = "expires=" + o.toUTCString();
                n(e) != t && (document.cookie = e + "=" + t + "; " + a + "; path=" + r) }

            function o(e, t, s = 1, r = "/") { let o = new Date;
                o.setMinutes(o.getMinutes() + s); let a = "expires=" + o.toUTCString();
                n(e) != t && (document.cookie = e + "=" + t + "; " + a + "; path=" + r) }

            function n(e) { e += "="; let t = decodeURIComponent(document.cookie).split(";"); for (let s = 0; s < t.length; s++) { let r = t[s]; for (;
                        " " == r.charAt(0);) r = r.substring(1); if (0 == r.indexOf(e)) return r.substring(e.length, r.length) } return "" }
            s.r(t), s.d(t, { set_cookies: () => r, set_cookies_minutes: () => o, get_cookie: () => n }) }, 6217: (e, t, s) => { s.r(t), s.d(t, { formDataToJson: () => r }); const r = e => { let t = {}; return e.forEach(((e, s) => { Reflect.has(t, s) ? (Array.isArray(t[s]) || (t[s] = [t[s]]), t[s].push(e)) : t[s] = e })), JSON.stringify(t) } }, 7270: (e, t, s) => { s.r(t), s.d(t, { http: () => n }); var r = s(7153),
                o = function(e, t, s, r) { return new(s || (s = Promise))((function(o, n) {
                        function a(e) { try { c(r.next(e)) } catch (e) { n(e) } }

                        function i(e) { try { c(r.throw(e)) } catch (e) { n(e) } }

                        function c(e) { var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) { e(t) }))).then(a, i) }
                        c((r = r.apply(e, t || [])).next()) })) };

            function n(e, t, s = !0) { return o(this, void 0, void 0, (function*() { let n = null;
                    t = null == t ? { method: "GET" } : t; var a = new Headers; if (a.append("Access-Control-Allow-Origin", "*/*"), a.append("Accept", "application/json, text/plain, */*"), s && a.append("Content-Type", "application/json"), void 0 === t.headers) t.headers = a;
                    else
                        for (const e of a.keys()) t.headers[e] = a.get(e); return t.mode = "cors", t.redirect = "follow", yield(0, r.default)(e, t, 3e5).then((e => (n = e, e.status >= 200 && e.status, Promise.resolve(e)))).then((e => o(this, void 0, void 0, (function*() { return { jsonData: 204 === e.status ? {} : yield e.json(), response: e, error: "" } })))).then((e => o(this, void 0, void 0, (function*() { return e })))).catch((function(e) { throw console.error("Request failed", e), e })) })) } }, 7153: (e, t, s) => { s.r(t), s.d(t, { default: () => r });

            function r(e, t, s = 7e3) { return r = this, o = void 0, a = function*() { return Promise.race([fetch(e, t), new Promise(((e, t) => { setTimeout((() => t(new Error("Connection timeout, check network for internet access"))), s) }))]) }, new((n = void 0) || (n = Promise))((function(e, t) {
                    function s(e) { try { c(a.next(e)) } catch (e) { t(e) } }

                    function i(e) { try { c(a.throw(e)) } catch (e) { t(e) } }

                    function c(t) { var r;
                        t.done ? e(t.value) : (r = t.value, r instanceof n ? r : new n((function(e) { e(r) }))).then(s, i) }
                    c((a = a.apply(r, o || [])).next()) })); var r, o, n, a } } }
]);
//# sourceMappingURL=src_addons_classes_network_calls_response_ts-src_addons_constants_index_ts-src_addons_functio-fdc28d.js.map