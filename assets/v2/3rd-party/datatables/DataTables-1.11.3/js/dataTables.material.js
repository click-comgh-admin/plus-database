/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, c, b) { a instanceof String && (a = String(a)); for (var e = a.length, d = 0; d < e; d++) { var m = a[d]; if (c.call(b, m, d, a)) return { i: d, v: m } } return { i: -1, v: void 0 } };
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, b) { if (a == Array.prototype || a == Object.prototype) return a;
    a[c] = b.value; return a };
$jscomp.getGlobal = function(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var c = 0; c < a.length; ++c) { var b = a[c]; if (b && b.Math == Math) return b } throw Error("Cannot find global object"); };
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, c) { var b = $jscomp.propertyToPolyfillSymbol[c]; if (null == b) return a[c];
    b = a[b]; return void 0 !== b ? b : a[c] };
$jscomp.polyfill = function(a, c, b, e) { c && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, c, b, e) : $jscomp.polyfillUnisolated(a, c, b, e)) };
$jscomp.polyfillUnisolated = function(a, c, b, e) { b = $jscomp.global;
    a = a.split("."); for (e = 0; e < a.length - 1; e++) { var d = a[e]; if (!(d in b)) return;
        b = b[d] }
    a = a[a.length - 1];
    e = b[a];
    c = c(e);
    c != e && null != c && $jscomp.defineProperty(b, a, { configurable: !0, writable: !0, value: c }) };
$jscomp.polyfillIsolated = function(a, c, b, e) {
    var d = a.split(".");
    a = 1 === d.length;
    e = d[0];
    e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var m = 0; m < d.length - 1; m++) { var f = d[m]; if (!(f in e)) return;
        e = e[f] }
    d = d[d.length - 1];
    b = $jscomp.IS_SYMBOL_NATIVE && "es6" === b ? e[d] : null;
    c = c(b);
    null != c && (a ? $jscomp.defineProperty($jscomp.polyfills, d, { configurable: !0, writable: !0, value: c }) : c !== b && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d, d =
        $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(e, d, { configurable: !0, writable: !0, value: c })))
};
$jscomp.polyfill("Array.prototype.find", function(a) { return a ? a : function(c, b) { return $jscomp.findInternal(this, c, b).v } }, "es6", "es3");
(function(a) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(c) { return a(c, window, document) }) : "object" === typeof exports ? module.exports = function(c, b) { c || (c = window);
        b && b.fn.dataTable || (b = require("datatables.net")(c, b).$); return a(b, c, c.document) } : a(jQuery, window, document) })(function(a, c, b, e) {
    function d() {
        for (var f = a("table.mdc-data-table__table").children(), g = 0; g < f.length; g++)
            if ("THEAD" === f[g].tagName) {
                var n = a(f[g]).children();
                console.log(n);
                for (var h = 0; h < n.length; h++)
                    if ("TR" ===
                        n[h].tagName) { a(n[h]).addClass("mdc-data-table__header-row"); for (var k = a(n[h]).children(), p = 0; p < k.length; p++) "TH" === k[p].tagName && a(k[p]).addClass("mdc-data-table__header-cell") }
            } else if ("TBODY" === f[g].tagName)
            for (a(f[g]).addClass("mdc-data-table__content"), n = a(f[g]).children(), h = 0; h < n.length; h++)
                if ("TR" === n[h].tagName)
                    for (a(n[h]).addClass("mdc-data-table__row"), k = a(n[h]).children(), p = 0; p < k.length; p++) "TD" === k[p].tagName && a(k[p]).addClass("mdc-data-table__cell");
        console.log(f)
    }
    var m = a.fn.dataTable;
    a.extend(!0, m.defaults, { dom: "<'mdc-layout-grid'<'mdc-layout-grid__inner'<'mdc-cell mdc-layout-grid__cell--span-6'l><'mdc-cell mdc-layout-grid__cell--span-6'f>>><'mdc-layout-grid dt-table'<'mdc-layout-grid__inner'<'mdc-cell mdc-layout-grid__cell--span-12'tr>>><'mdc-layout-grid'<'mdc-layout-grid__inner'<'mdc-cell mdc-layout-grid__cell--span-4'i><'mdc-cell mdc-layout-grid__cell--span-8'p>>>", renderer: "material" });
    a.extend(m.ext.classes, {
        sTable: "mdc-data-table__table",
        sHeaderTH: "mdc-data-table__header-row",
        sWrapper: "dataTables_wrapper form-inline dt-material mdc-data-table",
        sFilterInput: "form-control input-sm",
        sLengthSelect: "form-control input-sm",
        sProcessing: "dataTables_processing panel panel-default"
    });
    m.ext.renderer.pageButton.material = function(f, g, n, h, k, p) {
        var y = new m.Api(f),
            t = f.oLanguage.oPaginate,
            E = f.oLanguage.oAria.paginate || {},
            q, r, z = 0,
            C = function(w, A) {
                var B, F = function(u) { u.preventDefault();
                    a(u.currentTarget).hasClass("disabled") || y.page() == u.data.action || y.page(u.data.action).draw("page") };
                var x =
                    0;
                for (B = A.length; x < B; x++) {
                    var l = A[x];
                    if (Array.isArray(l)) C(w, l);
                    else {
                        q = "";
                        var v = !1;
                        switch (l) {
                            case "ellipsis":
                                q = "&#x2026;";
                                r = "disabled"; break;
                            case "first":
                                q = t.sFirst;
                                r = l + (0 < k ? "" : " disabled"); break;
                            case "previous":
                                q = t.sPrevious;
                                r = l + (0 < k ? "" : " disabled"); break;
                            case "next":
                                q = t.sNext;
                                r = l + (k < p - 1 ? "" : " disabled"); break;
                            case "last":
                                q = t.sLast;
                                r = l + (k < p - 1 ? "" : " disabled"); break;
                            default:
                                q = l + 1, r = "", v = k === l }
                        v && (r += " mdc-button--raised mdc-button--colored");
                        q && (v = a("<button>", {
                            "class": "mdc-button " + r,
                            id: 0 === n && "string" ===
                                typeof l ? f.sTableId + "_" + l : null,
                            "aria-controls": f.sTableId,
                            "aria-label": E[l],
                            "data-dt-idx": z,
                            tabindex: f.iTabIndex,
                            disabled: -1 !== r.indexOf("disabled")
                        }).html(q).appendTo(w), f.oApi._fnBindAction(v, { action: l }, F), z++)
                    }
                }
            };
        try { var D = a(g).find(b.activeElement).data("dt-idx") } catch (w) {}
        C(a(g).empty().html('<div class="pagination"/>').children(), h);
        D !== e && a(g).find("[data-dt-idx=" + D + "]").trigger("focus")
    };
    a(b).on("init.dt", function(f, g) { "dt" === f.namespace && (new a.fn.dataTable.Api(g), d()) });
    a(b).on("draw.dt",
        function(f, g) { "dt" === f.namespace && (new a.fn.dataTable.Api(g), d()) });
    return m
});