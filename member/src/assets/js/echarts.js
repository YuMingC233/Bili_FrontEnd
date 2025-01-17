!function (t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.echarts = e()
}(this, function () {
    var t, e;
    !function () {
        function i(t, e) {
            if (!e) return t;
            if (0 === t.indexOf(".")) {
                var i = e.split("/"), n = t.split("/"), r = i.length - 1, a = n.length, o = 0, s = 0;
                t:for (var l = 0; a > l; l++) switch (n[l]) {
                    case"..":
                        if (!(r > o)) break t;
                        o++, s++;
                        break;
                    case".":
                        s++;
                        break;
                    default:
                        break t
                }
                return i.length = r - o, n = n.slice(s), i.concat(n).join("/")
            }
            return t
        }

        function n(t) {
            function e(e, o) {
                if ("string" == typeof e) {
                    var s = n[e];
                    return s || (s = a(i(e, t)), n[e] = s), s
                }
                e instanceof Array && (o = o || function () {
                }, o.apply(this, r(e, o, t)))
            }

            var n = {};
            return e
        }

        function r(e, n, r) {
            for (var s = [], l = o[r], u = 0, c = Math.min(e.length, n.length); c > u; u++) {
                var h, f = i(e[u], r);
                switch (f) {
                    case"require":
                        h = l && l.require || t;
                        break;
                    case"exports":
                        h = l.exports;
                        break;
                    case"module":
                        h = l;
                        break;
                    default:
                        h = a(f)
                }
                s.push(h)
            }
            return s
        }

        function a(t) {
            var e = o[t];
            if (!e) throw new Error("No " + t);
            if (!e.defined) {
                var i = e.factory, n = i.apply(this, r(e.deps || [], i, t));
                "undefined" != typeof n && (e.exports = n), e.defined = 1
            }
            return e.exports
        }

        var o = {};
        e = function (t, e, i) {
            o[t] = {id: t, deps: e, factory: i, defined: 0, exports: {}, require: n(t)}
        }, t = n("")
    }();
    var i = "buildPath", n = "__dirty", r = "moveTo", a = "transform", o = "ecModel", s = "undefined",
        l = "eachItemGraphicEl", u = "parent", c = "getShallow", h = "stroke", f = "lineWidth", d = "applyTransform",
        p = "dimensions", v = "ordinal", m = "dataToCoord", g = "getAxis", y = "category", _ = "parsePercent",
        x = "setItemGraphicEl", b = "rotation", w = "updateProps", M = "getItemModel", S = "retrieve", T = "inside",
        C = "getItemLayout", A = "getItemGraphicEl", L = "getName", P = "../../util/graphic", k = "normal",
        z = "../../echarts", D = "createElement", I = "getExtent", O = "normalize", R = "contain", E = "inherits",
        B = "number", N = "function", F = "isArray", V = "replace", G = "zlevel", H = "traverse", q = "getDataParams",
        W = "seriesIndex", X = "mouseout", Z = "mouseover", U = "splice", j = "series", Y = "trigger", $ = "extend",
        Q = "remove", K = "isObject", J = "eachSeries", te = "update", ee = "create", ie = "getItemVisual",
        ne = "dataIndex", re = "indexOf", ae = "length", oe = "ignore", se = "storage", le = "canvasSupported",
        ue = "animation", ce = "resize", he = "string", fe = "prototype", de = "toLowerCase",
        pe = "zrender/core/vector", ve = "zrender/core/env", me = "opacity", ge = "setStyle", ye = "position",
        _e = "bottom", xe = "center", be = "middle", we = "getHeight", Me = "getWidth", Se = "target", Te = "silent",
        Ce = "height", Ae = "getBoundingRect", Le = "getTextColor", Pe = "getFont", ke = "textAlign", ze = "textStyle",
        De = "getModel", Ie = "getData", Oe = "defaults", Re = "coordinateSystem", Ee = "removeAll",
        Be = "zrender/core/util", Ne = "require";
    e("echarts/chart/pie", [Ne, Be, "../echarts", "./pie/PieSeries", "./pie/PieView", "../action/createDataSelectAction", "../visual/dataColor", "./pie/pieLayout", "../processor/dataFilter"], function (t) {
        var e = t(Be), i = t("../echarts");
        t("./pie/PieSeries"), t("./pie/PieView"), t("../action/createDataSelectAction")("pie", [{
            type: "pieToggleSelect",
            event: "pieselectchanged",
            method: "toggleSelected"
        }, {type: "pieSelect", event: "pieselected", method: "select"}, {
            type: "pieUnSelect",
            event: "pieunselected",
            method: "unSelect"
        }]), i.registerVisual(e.curry(t("../visual/dataColor"), "pie")), i.registerLayout(e.curry(t("./pie/pieLayout"), "pie")), i.registerProcessor(e.curry(t("../processor/dataFilter"), "pie"))
    }), e("echarts/component/grid", [Ne, "../util/graphic", Be, "../echarts", "../coord/cartesian/Grid", "./axis"], function (t) {
        var e = t("../util/graphic"), i = t(Be), n = t("../echarts");
        t("../coord/cartesian/Grid"), t("./axis"), n.extendComponentView({
            type: "grid", render: function (t) {
                this.group[Ee](), t.get("show") && this.group.add(new e.Rect({
                    shape: t[Re].getRect(),
                    style: i[Oe]({fill: t.get("backgroundColor")}, t.getItemStyle()),
                    silent: !0,
                    z2: -1
                }))
            }
        }), n.registerPreprocessor(function (t) {
            t.xAxis && t.yAxis && !t.grid && (t.grid = {})
        })
    }), e("echarts/chart/bar", [Ne, Be, "../coord/cartesian/Grid", "./bar/BarSeries", "./bar/BarView", "../layout/barGrid", "../echarts", "../component/grid"], function (t) {
        var e = t(Be);
        t("../coord/cartesian/Grid"), t("./bar/BarSeries"), t("./bar/BarView");
        var i = t("../layout/barGrid"), n = t("../echarts");
        n.registerLayout(e.curry(i, "bar")), n.registerVisual(function (t) {
            t.eachSeriesByType("bar", function (t) {
                var e = t[Ie]();
                e.setVisual("legendSymbol", "roundRect")
            })
        }), t("../component/grid")
    }), e("echarts/component/title", [Ne, "../echarts", "../util/graphic", "../util/layout"], function (t) {
        var e = t("../echarts"), i = t("../util/graphic"), n = t("../util/layout");
        e.extendComponentModel({
            type: "title",
            layoutMode: {type: "box", ignoreSize: !0},
            defaultOption: {
                zlevel: 0,
                z: 6,
                show: !0,
                text: "",
                target: "blank",
                subtext: "",
                subtarget: "blank",
                left: 0,
                top: 0,
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
                subtextStyle: {color: "#aaa"}
            }
        }), e.extendComponentView({
            type: "title", render: function (t, e, r) {
                if (this.group[Ee](), t.get("show")) {
                    var a = this.group, o = t[De](ze), s = t[De]("subtextStyle"), l = t.get(ke),
                        u = t.get("textBaseline"),
                        c = new i.Text({style: {text: t.get("text"), textFont: o[Pe](), fill: o[Le]()}, z2: 10}),
                        h = c[Ae](), f = t.get("subtext"), d = new i.Text({
                            style: {
                                text: f,
                                textFont: s[Pe](),
                                fill: s[Le](),
                                y: h[Ce] + t.get("itemGap"),
                                textBaseline: "top"
                            }, z2: 10
                        }), p = t.get("link"), v = t.get("sublink");
                    c[Te] = !p, d[Te] = !v, p && c.on("click", function () {
                        window.open(p, "_" + t.get(Se))
                    }), v && d.on("click", function () {
                        window.open(v, "_" + t.get("subtarget"))
                    }), a.add(c), f && a.add(d);
                    var m = a[Ae](), g = t.getBoxLayoutParams();
                    g.width = m.width, g[Ce] = m[Ce];
                    var y = n.getLayoutRect(g, {width: r[Me](), height: r[we]()}, t.get("padding"));
                    l || (l = t.get("left") || t.get("right"), l === be && (l = xe), "right" === l ? y.x += y.width : l === xe && (y.x += y.width / 2)), u || (u = t.get("top") || t.get(_e), u === xe && (u = be), u === _e ? y.y += y[Ce] : u === be && (y.y += y[Ce] / 2), u = u || "top"), a.attr(ye, [y.x, y.y]);
                    var _ = {textAlign: l, textVerticalAlign: u};
                    c[ge](_), d[ge](_), m = a[Ae]();
                    var x = y.margin, b = t.getItemStyle(["color", me]);
                    b.fill = t.get("backgroundColor");
                    var w = new i.Rect({
                        shape: {
                            x: m.x - x[3],
                            y: m.y - x[0],
                            width: m.width + x[1] + x[3],
                            height: m[Ce] + x[0] + x[2]
                        }, style: b, silent: !0
                    });
                    i.subPixelOptimizeRect(w), a.add(w)
                }
            }
        })
    }), e("echarts/chart/line", [Ne, Be, "../echarts", "./line/LineSeries", "./line/LineView", "../visual/symbol", "../layout/points", "../processor/dataSample", "../component/grid"], function (t) {
        var e = t(Be), i = t("../echarts"), n = i.PRIORITY;
        t("./line/LineSeries"), t("./line/LineView"), i.registerVisual(e.curry(t("../visual/symbol"), "line", "circle", "line")), i.registerLayout(e.curry(t("../layout/points"), "line")), i.registerProcessor(n.PROCESSOR.STATISTIC, e.curry(t("../processor/dataSample"), "line")), t("../component/grid")
    }), e("echarts/echarts", [Ne, ve, "./model/Global", "./ExtensionAPI", "./CoordinateSystem", "./model/OptionManager", "./model/Component", "./model/Series", "./view/Component", "./view/Chart", "./util/graphic", "./util/model", "zrender", Be, "zrender/tool/color", "zrender/mixin/Eventful", "zrender/core/timsort", "./visual/seriesColor", "./preprocessor/backwardCompat", "./loading/default", "./data/List", "./model/Model", "./util/number", "./util/format", "zrender/core/matrix", pe], function (t) {
        function e(t) {
            return function (e, i, n) {
                e = e && e[de](), z[fe][t].call(this, e, i, n)
            }
        }

        function i() {
            z.call(this)
        }

        function n(t, e, n) {
            function r(t, e) {
                return t.prio - e.prio
            }

            n = n || {}, typeof e === he && (e = We[e]), this.id, this.group, this._dom = t, this._zr = L.init(t, {
                renderer: n.renderer || "canvas",
                devicePixelRatio: n.devicePixelRatio,
                width: n.width,
                height: n[Ce]
            }), this._theme = P.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new _(this), this._coordSysMgr = new x, z.call(this), this._messageCenter = new i, this._initEvents(), this[ce] = P.bind(this[ce], this), this._pendingActions = [], D(qe, r), D(Ge, r), this._zr[ue].on("frame", this._onframe, this)
        }

        function r(t, e, i) {
            var n, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
            e = A.parseFinder(r, e);
            for (var o = 0; o < a[ae]; o++) {
                var s = a[o];
                if (s[t] && null != (n = s[t](r, e, i))) return n
            }
        }

        function a(t, e) {
            var i = this._model;
            i && i.eachComponent({mainType: "series", query: e}, function (n) {
                var r = this._chartsMap[n.__viewId];
                r && r.__alive && r[t](n, i, this._api, e)
            }, this)
        }

        function o(t, e, i) {
            var n = this._api;
            I(this._componentsViews, function (r) {
                var a = r.__model;
                r[t](a, e, n, i), v(a, r)
            }, this), e[J](function (r) {
                var a = this._chartsMap[r.__viewId];
                a[t](r, e, n, i), v(r, a), p(r, a)
            }, this), d(this._zr, e)
        }

        function s(t, e) {
            for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, r = i ? this._componentsMap : this._chartsMap, a = this._zr, o = 0; o < n[ae]; o++) n[o].__alive = !1;
            e[i ? "eachComponent" : J](function (t, o) {
                if (i) {
                    if (t === j) return
                } else o = t;
                var s = o.id + "_" + o.type, l = r[s];
                if (!l) {
                    var u = w.parseClassType(o.type), c = i ? S.getClass(u.main, u.sub) : T.getClass(u.sub);
                    if (!c) return;
                    l = new c, l.init(e, this._api), r[s] = l, n.push(l), a.add(l.group)
                }
                o.__viewId = s, l.__alive = !0, l.__id = s, l.__model = o
            }, this);
            for (var o = 0; o < n[ae];) {
                var s = n[o];
                s.__alive ? o++ : (a[Q](s.group), s.dispose(e, this._api), n[U](o, 1), delete r[s.__id])
            }
        }

        function l(t, e) {
            I(Ge, function (i) {
                i.func(t, e)
            })
        }

        function u(t) {
            var e = {};
            t[J](function (t) {
                var i = t.get("stack"), n = t[Ie]();
                if (i && "list" === n.type) {
                    var r = e[i];
                    r && (n.stackedOn = r), e[i] = n
                }
            })
        }

        function c(t, e) {
            var i = this._api;
            I(qe, function (n) {
                n.isLayout && n.func(t, i, e)
            })
        }

        function h(t, e) {
            var i = this._api;
            t.clearColorPalette(), t[J](function (t) {
                t.clearColorPalette()
            }), I(qe, function (n) {
                n.func(t, i, e)
            })
        }

        function f(t, e) {
            var i = this._api;
            I(this._componentsViews, function (n) {
                var r = n.__model;
                n.render(r, t, i, e), v(r, n)
            }, this), I(this._chartsViews, function (t) {
                t.__alive = !1
            }, this), t[J](function (n) {
                var r = this._chartsMap[n.__viewId];
                r.__alive = !0, r.render(n, t, i, e), r.group[Te] = !!n.get(Te), v(n, r), p(n, r)
            }, this), d(this._zr, t), I(this._chartsViews, function (e) {
                e.__alive || e[Q](t, i)
            }, this)
        }

        function d(t, e) {
            var i = t[se], n = 0;
            i[H](function (t) {
                t.isGroup || n++
            }), n > e.get("hoverLayerThreshold") && !g.node && i[H](function (t) {
                t.isGroup || (t.useHoverLayer = !0)
            })
        }

        function p(t, e) {
            var i = 0;
            e.group[H](function (t) {
                "group" === t.type || t[oe] || i++
            });
            var n = +t.get("progressive"), r = i > t.get("progressiveThreshold") && n && !g.node;
            r && e.group[H](function (t) {
                t.isGroup || (t.progressive = r ? Math.floor(i++ / n) : -1, r && t.stopAnimation(!0))
            });
            var a = t.get("blendMode") || null;
            e.group[H](function (t) {
                t.isGroup || t[ge]("blend", a)
            })
        }

        function v(t, e) {
            var i = t.get("z"), n = t.get(G);
            e.group[H](function (t) {
                "group" !== t.type && (null != i && (t.z = i), null != n && (t[G] = n))
            })
        }

        function m(t) {
            function e(t, e) {
                for (var i = 0; i < t[ae]; i++) {
                    var n = t[i];
                    n[a] = e
                }
            }

            var i = 0, n = 1, r = 2, a = "__connectUpdateStatus";
            P.each(Ve, function (o, s) {
                t._messageCenter.on(s, function (o) {
                    if (Ue[t.group] && t[a] !== i) {
                        var s = t.makeActionFromEvent(o), l = [];
                        P.each(Ze, function (e) {
                            e !== t && e.group === t.group && l.push(e)
                        }), e(l, i), I(l, function (t) {
                            t[a] !== n && t.dispatchAction(s)
                        }), e(l, r)
                    }
                })
            })
        }

        var g = t(ve), y = t("./model/Global"), _ = t("./ExtensionAPI"), x = t("./CoordinateSystem"),
            b = t("./model/OptionManager"), w = t("./model/Component"), M = t("./model/Series"),
            S = t("./view/Component"), T = t("./view/Chart"), C = t("./util/graphic"), A = t("./util/model"),
            L = t("zrender"), P = t(Be), k = t("zrender/tool/color"), z = t("zrender/mixin/Eventful"),
            D = t("zrender/core/timsort"), I = P.each, O = 1e3, R = 5e3, me = 1e3, ye = 2e3, xe = 3e3, be = 4e3,
            Ae = 5e3, Le = "__flag_in_main_process", Pe = "_hasGradientOrPatternBg", ke = "_optionUpdated";
        i[fe].on = e("on"), i[fe].off = e("off"), i[fe].one = e("one"), P.mixin(i, z);
        var ze = n[fe];
        ze._onframe = function () {
            this[ke] && (this[Le] = !0, Ee.prepareAndUpdate.call(this), this[Le] = !1, this[ke] = !1)
        }, ze.getDom = function () {
            return this._dom
        }, ze.getZr = function () {
            return this._zr
        }, ze.setOption = function (t, e, i) {
            if (this[Le] = !0, !this._model || e) {
                var n = new b(this._api), r = this._theme, a = this._model = new y(null, null, r, n);
                a.init(null, null, r, n)
            }
            this._model.setOption(t, He), i ? this[ke] = !0 : (Ee.prepareAndUpdate.call(this), this._zr.refreshImmediately(), this[ke] = !1), this[Le] = !1, this._flushPendingActions()
        }, ze.setTheme = function () {
            console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, ze[De] = function () {
            return this._model
        }, ze.getOption = function () {
            return this._model && this._model.getOption()
        }, ze[Me] = function () {
            return this._zr[Me]()
        }, ze[we] = function () {
            return this._zr[we]()
        }, ze.getRenderedCanvas = function (t) {
            if (g[le]) {
                t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
                var e = this._zr, i = e[se].getDisplayList();
                return P.each(i, function (t) {
                    t.stopAnimation(!0)
                }), e.painter.getRenderedCanvas(t)
            }
        }, ze.getDataURL = function (t) {
            t = t || {};
            var e = t.excludeComponents, i = this._model, n = [], r = this;
            I(e, function (t) {
                i.eachComponent({mainType: t}, function (t) {
                    var e = r._componentsMap[t.__viewId];
                    e.group[oe] || (n.push(e), e.group[oe] = !0)
                })
            });
            var a = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
            return I(n, function (t) {
                t.group[oe] = !1
            }), a
        }, ze.getConnectedDataURL = function (t) {
            if (g[le]) {
                var e = this.group, i = Math.min, n = Math.max, r = 1 / 0;
                if (Ue[e]) {
                    var a = r, o = r, s = -r, l = -r, u = [], c = t && t.pixelRatio || 1;
                    P.each(Ze, function (r) {
                        if (r.group === e) {
                            var c = r.getRenderedCanvas(P.clone(t)), h = r.getDom().getBoundingClientRect();
                            a = i(h.left, a), o = i(h.top, o), s = n(h.right, s), l = n(h[_e], l), u.push({
                                dom: c,
                                left: h.left,
                                top: h.top
                            })
                        }
                    }), a *= c, o *= c, s *= c, l *= c;
                    var h = s - a, f = l - o, d = P.createCanvas();
                    d.width = h, d[Ce] = f;
                    var p = L.init(d);
                    return I(u, function (t) {
                        var e = new C.Image({style: {x: t.left * c - a, y: t.top * c - o, image: t.dom}});
                        p.add(e)
                    }), p.refreshImmediately(), d.toDataURL("image/" + (t && t.type || "png"))
                }
                return this.getDataURL(t)
            }
        }, ze.convertToPixel = P.curry(r, "convertToPixel"), ze.convertFromPixel = P.curry(r, "convertFromPixel"), ze.containPixel = function (t, e) {
            var i, n = this._model;
            return t = A.parseFinder(n, t), P.each(t, function (t, n) {
                n[re]("Models") >= 0 && P.each(t, function (t) {
                    var r = t[Re];
                    if (r && r.containPoint) i |= !!r.containPoint(e); else if ("seriesModels" === n) {
                        var a = this._chartsMap[t.__viewId];
                        a && a.containPoint && (i |= a.containPoint(e, t))
                    }
                }, this)
            }, this), !!i
        }, ze.getVisual = function (t, e) {
            var i = this._model;
            t = A.parseFinder(i, t, {defaultMainType: "series"});
            var n = t.seriesModel, r = n[Ie](),
                a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty(ne) ? r.indexOfRawIndex(t[ne]) : null;
            return null != a ? r[ie](a, e) : r.getVisual(e)
        };
        var Ee = {
            update: function (t) {
                var e = this._model, i = this._api, n = this._coordSysMgr, r = this._zr;
                if (e) {
                    e.restoreData(), n[ee](this._model, this._api), l.call(this, e, i), u.call(this, e), n[te](e, i), h.call(this, e, t), f.call(this, e, t);
                    var a = e.get("backgroundColor") || "transparent", o = r.painter;
                    if (o.isSingleCanvas && o.isSingleCanvas()) r.configLayer(0, {clearColor: a}); else {
                        if (!g[le]) {
                            var s = k.parse(a);
                            a = k.stringify(s, "rgb"), 0 === s[3] && (a = "transparent")
                        }
                        a.colorStops || a.image ? (r.configLayer(0, {clearColor: a}), this[Pe] = !0, this._dom.style.background = "transparent") : (this[Pe] && r.configLayer(0, {clearColor: null}), this[Pe] = !1, this._dom.style.background = a)
                    }
                }
            }, updateView: function (t) {
                var e = this._model;
                e && (e[J](function (t) {
                    t[Ie]().clearAllVisual()
                }), h.call(this, e, t), o.call(this, "updateView", e, t))
            }, updateVisual: function (t) {
                var e = this._model;
                e && (e[J](function (t) {
                    t[Ie]().clearAllVisual()
                }), h.call(this, e, t), o.call(this, "updateVisual", e, t))
            }, updateLayout: function (t) {
                var e = this._model;
                e && (c.call(this, e, t), o.call(this, "updateLayout", e, t))
            }, highlight: function (t) {
                a.call(this, "highlight", t)
            }, downplay: function (t) {
                a.call(this, "downplay", t)
            }, prepareAndUpdate: function (t) {
                var e = this._model;
                s.call(this, "component", e), s.call(this, "chart", e), Ee[te].call(this, t)
            }
        };
        ze[ce] = function (t) {
            this[Le] = !0, this._zr[ce](t);
            var e = this._model && this._model.resetOption("media");
            Ee[e ? "prepareAndUpdate" : te].call(this), this._loadingFX && this._loadingFX[ce](), this[Le] = !1, this._flushPendingActions()
        }, ze.showLoading = function (t, e) {
            if (P[K](t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Xe[t]) {
                var i = Xe[t](this._api, e), n = this._zr;
                this._loadingFX = i, n.add(i)
            }
        }, ze.hideLoading = function () {
            this._loadingFX && this._zr[Q](this._loadingFX), this._loadingFX = null
        }, ze.makeActionFromEvent = function (t) {
            var e = P[$]({}, t);
            return e.type = Ve[t.type], e
        }, ze.dispatchAction = function (t, e) {
            var i = Fe[t.type];
            if (i) {
                var n = i.actionInfo, r = n[te] || te;
                if (this[Le]) return void this._pendingActions.push(t);
                this[Le] = !0;
                var a = [t], o = !1;
                t.batch && (o = !0, a = P.map(t.batch, function (e) {
                    return e = P[Oe](P[$]({}, e), t), e.batch = null, e
                }));
                for (var s, l = [], u = "highlight" === t.type || "downplay" === t.type, c = 0; c < a[ae]; c++) {
                    var h = a[c];
                    s = i.action(h, this._model), s = s || P[$]({}, h), s.type = n.event || s.type, l.push(s), u && Ee[r].call(this, h)
                }
                "none" === r || u || (this[ke] ? (Ee.prepareAndUpdate.call(this, t), this[ke] = !1) : Ee[r].call(this, t)), s = o ? {
                    type: n.event || t.type,
                    batch: l
                } : l[0], this[Le] = !1, !e && this._messageCenter[Y](s.type, s), this._flushPendingActions()
            }
        }, ze._flushPendingActions = function () {
            for (var t = this._pendingActions; t[ae];) {
                var e = t.shift();
                this.dispatchAction(e)
            }
        }, ze.on = e("on"), ze.off = e("off"), ze.one = e("one");
        var Ne = ["click", "dblclick", Z, X, "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
        ze._initEvents = function () {
            I(Ne, function (t) {
                this._zr.on(t, function (e) {
                    var i, n = this[De](), r = e[Se];
                    if ("globalout" === t) i = {}; else if (r && null != r[ne]) {
                        var a = r.dataModel || n.getSeriesByIndex(r[W]);
                        i = a && a[q](r[ne], r.dataType) || {}
                    } else r && r.eventData && (i = P[$]({}, r.eventData));
                    i && (i.event = e, i.type = t, this[Y](t, i))
                }, this)
            }, this), I(Ve, function (t, e) {
                this._messageCenter.on(e, function (t) {
                    this[Y](e, t)
                }, this)
            }, this)
        }, ze.isDisposed = function () {
            return this._disposed
        }, ze.clear = function () {
            this.setOption({series: []}, !0)
        }, ze.dispose = function () {
            if (!this._disposed) {
                this._disposed = !0;
                var t = this._api, e = this._model;
                I(this._componentsViews, function (i) {
                    i.dispose(e, t)
                }), I(this._chartsViews, function (i) {
                    i.dispose(e, t)
                }), this._zr.dispose(), delete Ze[this.id]
            }
        }, P.mixin(n, z);
        var Fe = [], Ve = {}, Ge = [], He = [], qe = [], We = {}, Xe = {}, Ze = {}, Ue = {}, je = new Date - 0,
            Ye = new Date - 0, $e = "_echarts_instance_", Qe = {version: "3.3.0", dependencies: {zrender: "3.2.0"}};
        Qe.init = function (t, e, i) {
            var r = new n(t, e, i);
            return r.id = "ec_" + je++, Ze[r.id] = r, t.setAttribute && t.setAttribute($e, r.id), m(r), r
        }, Qe.connect = function (t) {
            if (P[F](t)) {
                var e = t;
                t = null, P.each(e, function (e) {
                    null != e.group && (t = e.group)
                }), t = t || "g_" + Ye++, P.each(e, function (e) {
                    e.group = t
                })
            }
            return Ue[t] = !0, t
        }, Qe.disConnect = function (t) {
            Ue[t] = !1
        }, Qe.dispose = function (t) {
            P.isDom(t) ? t = Qe.getInstanceByDom(t) : typeof t === he && (t = Ze[t]), t instanceof n && !t.isDisposed() && t.dispose()
        }, Qe.getInstanceByDom = function (t) {
            var e = t.getAttribute($e);
            return Ze[e]
        }, Qe.getInstanceById = function (t) {
            return Ze[t]
        }, Qe.registerTheme = function (t, e) {
            We[t] = e
        }, Qe.registerPreprocessor = function (t) {
            He.push(t)
        }, Qe.registerProcessor = function (t, e) {
            typeof t === N && (e = t, t = O), Ge.push({prio: t, func: e})
        }, Qe.registerAction = function (t, e, i) {
            typeof e === N && (i = e, e = "");
            var n = P[K](t) ? t.type : [t, t = {event: e}][0];
            t.event = (t.event || n)[de](), e = t.event, Fe[n] || (Fe[n] = {action: i, actionInfo: t}), Ve[e] = n
        }, Qe.registerCoordinateSystem = function (t, e) {
            x.register(t, e)
        }, Qe.registerLayout = function (t, e) {
            typeof t === N && (e = t, t = me), qe.push({prio: t, func: e, isLayout: !0})
        }, Qe.registerVisual = function (t, e) {
            typeof t === N && (e = t, t = xe), qe.push({prio: t, func: e})
        }, Qe.registerLoading = function (t, e) {
            Xe[t] = e
        };
        var Ke = w.parseClassType;
        return Qe.extendComponentModel = function (t, e) {
            var i = w;
            if (e) {
                var n = Ke(e);
                i = w.getClass(n.main, n.sub, !0)
            }
            return i[$](t)
        }, Qe.extendComponentView = function (t, e) {
            var i = S;
            if (e) {
                var n = Ke(e);
                i = S.getClass(n.main, n.sub, !0)
            }
            return i[$](t)
        }, Qe.extendSeriesModel = function (t, e) {
            var i = M;
            if (e) {
                e = "series." + e[V]("series.", "");
                var n = Ke(e);
                i = M.getClass(n.main, n.sub, !0)
            }
            return i[$](t)
        }, Qe.extendChartView = function (t, e) {
            var i = T;
            if (e) {
                e[V]("series.", "");
                var n = Ke(e);
                i = T.getClass(n.main, !0)
            }
            return i[$](t)
        }, Qe.setCanvasCreator = function (t) {
            P.createCanvas = t
        }, Qe.registerVisual(ye, t("./visual/seriesColor")), Qe.registerPreprocessor(t("./preprocessor/backwardCompat")), Qe.registerLoading("default", t("./loading/default")), Qe.registerAction({
            type: "highlight",
            event: "highlight",
            update: "highlight"
        }, P.noop), Qe.registerAction({
            type: "downplay",
            event: "downplay",
            update: "downplay"
        }, P.noop), Qe.List = t("./data/List"), Qe.Model = t("./model/Model"), Qe.graphic = t("./util/graphic"), Qe[B] = t("./util/number"), Qe.format = t("./util/format"), Qe.matrix = t("zrender/core/matrix"), Qe.vector = t(pe), Qe.color = t("zrender/tool/color"), Qe.util = {}, I(["map", "each", "filter", re, E, "reduce", "filter", "bind", "curry", F, "isString", K, "isFunction", $, Oe], function (t) {
            Qe.util[t] = P[t]
        }), Qe.PRIORITY = {
            PROCESSOR: {FILTER: O, STATISTIC: R},
            VISUAL: {LAYOUT: me, GLOBAL: ye, CHART: xe, COMPONENT: be, BRUSH: Ae}
        }, Qe
    }), e("echarts/component/legend", [Ne, "./legend/LegendModel", "./legend/legendAction", "./legend/LegendView", "../echarts", "./legend/legendFilter"], function (t) {
        t("./legend/LegendModel"), t("./legend/legendAction"), t("./legend/LegendView");
        var e = t("../echarts");
        e.registerProcessor(t("./legend/legendFilter"))
    }), e("echarts/component/tooltip", [Ne, "./tooltip/TooltipModel", "./tooltip/TooltipView", "../echarts"], function (t) {
        t("./tooltip/TooltipModel"), t("./tooltip/TooltipView"), t("../echarts").registerAction({
            type: "showTip",
            event: "showTip",
            update: "none"
        }, function () {
        }), t("../echarts").registerAction({type: "hideTip", event: "hideTip", update: "none"}, function () {
        })
    }), e("echarts/component/markLine", [Ne, "./marker/MarkLineModel", "./marker/MarkLineView", "../echarts"], function (t) {
        t("./marker/MarkLineModel"), t("./marker/MarkLineView"), t("../echarts").registerPreprocessor(function (t) {
            t.markLine = t.markLine || {}
        })
    }), e("zrender/vml/vml", [Ne, "./graphic", "../zrender", "./Painter"], function (t) {
        t("./graphic"), t("../zrender").registerPainter("vml", t("./Painter"))
    }), e("echarts/scale/Time", [Ne, Be, "../util/number", "../util/format", "./Interval"], function (t) {
        var e = t(Be), i = t("../util/number"), n = t("../util/format"), r = t("./Interval"), a = r[fe], o = Math.ceil,
            s = Math.floor, l = 1e3, u = 60 * l, c = 60 * u, h = 24 * c, f = function (t, e, i, n) {
                for (; n > i;) {
                    var r = i + n >>> 1;
                    t[r][2] < e ? i = r + 1 : n = r
                }
                return i
            }, d = r[$]({
                type: "time", getLabel: function (t) {
                    var e = this._stepLvl, i = new Date(t);
                    return n.formatTime(e[0], i)
                }, niceExtent: function (t, e, n) {
                    var r = this._extent;
                    if (r[0] === r[1] && (r[0] -= h, r[1] += h), r[1] === -1 / 0 && 1 / 0 === r[0]) {
                        var a = new Date;
                        r[1] = new Date(a.getFullYear(), a.getMonth(), a.getDate()), r[0] = r[1] - h
                    }
                    this.niceTicks(t);
                    var l = this._interval;
                    e || (r[0] = i.round(s(r[0] / l) * l)), n || (r[1] = i.round(o(r[1] / l) * l))
                }, niceTicks: function (t) {
                    t = t || 10;
                    var e = this._extent, n = e[1] - e[0], r = n / t, a = p[ae], l = f(p, r, 0, a),
                        u = p[Math.min(l, a - 1)], c = u[2];
                    if ("year" === u[0]) {
                        var h = n / c, d = i.nice(h / t, !0);
                        c *= d
                    }
                    var v = [o(e[0] / c) * c, s(e[1] / c) * c];
                    this._stepLvl = u, this._interval = c, this._niceExtent = v
                }, parse: function (t) {
                    return +i.parseDate(t)
                }
            });
        e.each([R, O], function (t) {
            d[fe][t] = function (e) {
                return a[t].call(this, this.parse(e))
            }
        });
        var p = [["hh:mm:ss", 1, l], ["hh:mm:ss", 5, 5 * l], ["hh:mm:ss", 10, 10 * l], ["hh:mm:ss", 15, 15 * l], ["hh:mm:ss", 30, 30 * l], ["hh:mm\nMM-dd", 1, u], ["hh:mm\nMM-dd", 5, 5 * u], ["hh:mm\nMM-dd", 10, 10 * u], ["hh:mm\nMM-dd", 15, 15 * u], ["hh:mm\nMM-dd", 30, 30 * u], ["hh:mm\nMM-dd", 1, c], ["hh:mm\nMM-dd", 2, 2 * c], ["hh:mm\nMM-dd", 6, 6 * c], ["hh:mm\nMM-dd", 12, 12 * c], ["MM-dd\nyyyy", 1, h], ["week", 7, 7 * h], ["month", 1, 31 * h], ["quarter", 3, 380 * h / 4], ["half-year", 6, 380 * h / 2], ["year", 1, 380 * h]];
        return d[ee] = function () {
            return new d
        }, d
    }), e("echarts/scale/Log", [Ne, Be, "./Scale", "../util/number", "./Interval"], function (t) {
        function e(t, e) {
            return u(t, l(e))
        }

        var i = t(Be), n = t("./Scale"), r = t("../util/number"), a = t("./Interval"), o = n[fe], s = a[fe],
            l = r.getPrecisionSafe, u = r.round, c = Math.floor, h = Math.ceil, f = Math.pow, d = Math.log, p = n[$]({
                type: "log", base: 10, $constructor: function () {
                    n.apply(this, arguments), this._originalScale = new a
                }, getTicks: function () {
                    var t = this._originalScale, n = this._extent, a = t[I]();
                    return i.map(s.getTicks.call(this), function (i) {
                        var o = r.round(f(this.base, i));
                        return o = i === n[0] && t.__fixMin ? e(o, a[0]) : o, o = i === n[1] && t.__fixMax ? e(o, a[1]) : o
                    }, this)
                }, getLabel: s.getLabel, scale: function (t) {
                    return t = o.scale.call(this, t), f(this.base, t)
                }, setExtent: function (t, e) {
                    var i = this.base;
                    t = d(t) / d(i), e = d(e) / d(i), s.setExtent.call(this, t, e)
                }, getExtent: function () {
                    var t = this.base, i = o[I].call(this);
                    i[0] = f(t, i[0]), i[1] = f(t, i[1]);
                    var n = this._originalScale, r = n[I]();
                    return n.__fixMin && (i[0] = e(i[0], r[0])), n.__fixMax && (i[1] = e(i[1], r[1])), i
                }, unionExtent: function (t) {
                    this._originalScale.unionExtent(t);
                    var e = this.base;
                    t[0] = d(t[0]) / d(e), t[1] = d(t[1]) / d(e), o.unionExtent.call(this, t)
                }, niceTicks: function (t) {
                    t = t || 10;
                    var e = this._extent, i = e[1] - e[0];
                    if (!(1 / 0 === i || 0 >= i)) {
                        var n = r.quantity(i), a = t / i * n;
                        for (.5 >= a && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) n *= 10;
                        var o = [r.round(h(e[0] / n) * n), r.round(c(e[1] / n) * n)];
                        this._interval = n, this._niceExtent = o
                    }
                }, niceExtent: function (t, e, i) {
                    s.niceExtent.call(this, t, e, i);
                    var n = this._originalScale;
                    n.__fixMin = e, n.__fixMax = i
                }
            });
        return i.each([R, O], function (t) {
            p[fe][t] = function (e) {
                return e = d(e) / d(this.base), o[t].call(this, e)
            }
        }), p[ee] = function () {
            return new p
        }, p
    }), e(Be, [Ne], function () {
        function t(e) {
            if ("object" == typeof e && null !== e) {
                var i = e;
                if (e instanceof Array) {
                    i = [];
                    for (var n = 0, r = e[ae]; r > n; n++) i[n] = t(e[n])
                } else if (!w(e) && !M(e)) {
                    i = {};
                    for (var a in e) e.hasOwnProperty(a) && (i[a] = t(e[a]))
                }
                return i
            }
            return e
        }

        function e(i, n, r) {
            if (!b(n) || !b(i)) return r ? t(n) : i;
            for (var a in n) if (n.hasOwnProperty(a)) {
                var o = i[a], s = n[a];
                !b(s) || !b(o) || y(s) || y(o) || M(s) || M(o) || w(s) || w(o) ? !r && a in i || (i[a] = t(n[a], !0)) : e(o, s, r)
            }
            return i
        }

        function i(t, i) {
            for (var n = t[0], r = 1, a = t[ae]; a > r; r++) n = e(n, t[r], i);
            return n
        }

        function n(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function r(t, e, i) {
            for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
            return t
        }

        function a() {
            return document[D]("canvas")
        }

        function o() {
            return A || (A = F.createCanvas().getContext("2d")), A
        }

        function s(t, e) {
            if (t) {
                if (t[re]) return t[re](e);
                for (var i = 0, n = t[ae]; n > i; i++) if (t[i] === e) return i
            }
            return -1
        }

        function l(t, e) {
            function i() {
            }

            var n = t[fe];
            i[fe] = e[fe], t[fe] = new i;
            for (var r in n) t[fe][r] = n[r];
            t[fe].constructor = t, t.superClass = e
        }

        function u(t, e, i) {
            t = fe in t ? t[fe] : t, e = fe in e ? e[fe] : e, r(t, e, i)
        }

        function c(t) {
            return t ? typeof t == he ? !1 : typeof t[ae] == B : void 0
        }

        function h(t, e, i) {
            if (t && e) if (t.forEach && t.forEach === z) t.forEach(e, i); else if (t[ae] === +t[ae]) for (var n = 0, r = t[ae]; r > n; n++) e.call(i, t[n], n, t); else for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t)
        }

        function f(t, e, i) {
            if (t && e) {
                if (t.map && t.map === R) return t.map(e, i);
                for (var n = [], r = 0, a = t[ae]; a > r; r++) n.push(e.call(i, t[r], r, t));
                return n
            }
        }

        function d(t, e, i, n) {
            if (t && e) {
                if (t.reduce && t.reduce === E) return t.reduce(e, i, n);
                for (var r = 0, a = t[ae]; a > r; r++) i = e.call(n, i, t[r], r, t);
                return i
            }
        }

        function p(t, e, i) {
            if (t && e) {
                if (t.filter && t.filter === I) return t.filter(e, i);
                for (var n = [], r = 0, a = t[ae]; a > r; r++) e.call(i, t[r], r, t) && n.push(t[r]);
                return n
            }
        }

        function v(t, e, i) {
            if (t && e) for (var n = 0, r = t[ae]; r > n; n++) if (e.call(i, t[n], n, t)) return t[n]
        }

        function m(t, e) {
            var i = O.call(arguments, 2);
            return function () {
                return t.apply(e, i.concat(O.call(arguments)))
            }
        }

        function g(t) {
            var e = O.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(O.call(arguments)))
            }
        }

        function y(t) {
            return "[object Array]" === P.call(t)
        }

        function _(t) {
            return typeof t === N
        }

        function x(t) {
            return "[object String]" === P.call(t)
        }

        function b(t) {
            var e = typeof t;
            return e === N || !!t && "object" == e
        }

        function w(t) {
            return !!L[P.call(t)]
        }

        function M(t) {
            return t && 1 === t.nodeType && typeof t.nodeName == he
        }

        function S() {
            for (var t = 0, e = arguments[ae]; e > t; t++) if (null != arguments[t]) return arguments[t]
        }

        function T() {
            return Function.call.apply(O, arguments)
        }

        function C(t, e) {
            if (!t) throw new Error(e)
        }

        var A, L = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1,
                "[object CanvasPattern]": 1,
                "[object Image]": 1
            }, P = Object[fe].toString, k = Array[fe], z = k.forEach, I = k.filter, O = k.slice, R = k.map, E = k.reduce,
            F = {
                inherits: l,
                mixin: u,
                clone: t,
                merge: e,
                mergeAll: i,
                extend: n,
                defaults: r,
                getContext: o,
                createCanvas: a,
                indexOf: s,
                slice: T,
                find: v,
                isArrayLike: c,
                each: h,
                map: f,
                reduce: d,
                filter: p,
                bind: m,
                curry: g,
                isArray: y,
                isString: x,
                isObject: b,
                isFunction: _,
                isBuildInObject: w,
                isDom: M,
                retrieve: S,
                assert: C,
                noop: function () {
                }
            };
        return F
    }), e("echarts/chart/pie/PieSeries", [Ne, "../../data/List", Be, "../../util/model", "../../data/helper/completeDimensions", "../../component/helper/selectableMixin", z], function (t) {
        var e = t("../../data/List"), i = t(Be), n = t("../../util/model"),
            r = t("../../data/helper/completeDimensions"), a = t("../../component/helper/selectableMixin"),
            o = t(z).extendSeriesModel({
                type: "series.pie",
                init: function (t) {
                    o.superApply(this, "init", arguments), this.legendDataProvider = function () {
                        return this._dataBeforeProcessed
                    }, this.updateSelectedMap(t.data), this._defaultLabelLine(t)
                },
                mergeOption: function (t) {
                    o.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
                },
                getInitialData: function (t) {
                    var i = r(["value"], t.data), n = new e(i, this);
                    return n.initData(t.data), n
                },
                getDataParams: function (t) {
                    var e = this._data, i = o.superCall(this, q, t), n = e.getSum("value");
                    return i.percent = n ? +(e.get("value", t) / n * 100).toFixed(2) : 0, i.$vars.push("percent"), i
                },
                _defaultLabelLine: function (t) {
                    n.defaultEmphasis(t.labelLine, ["show"]);
                    var e = t.labelLine[k], i = t.labelLine.emphasis;
                    e.show = e.show && t.label[k].show, i.show = i.show && t.label.emphasis.show
                },
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    center: ["50%", "50%"],
                    radius: [0, "75%"],
                    clockwise: !0,
                    startAngle: 90,
                    minAngle: 0,
                    selectedOffset: 10,
                    avoidLabelOverlap: !0,
                    label: {normal: {rotate: !1, show: !0, position: "outer"}, emphasis: {}},
                    labelLine: {
                        normal: {
                            show: !0,
                            length: 15,
                            length2: 15,
                            smooth: !1,
                            lineStyle: {width: 1, type: "solid"}
                        }
                    },
                    itemStyle: {normal: {borderWidth: 1}, emphasis: {}},
                    animationEasing: "cubicOut",
                    data: []
                }
            });
        return i.mixin(o, a), o
    }), e("echarts/chart/pie/PieView", [Ne, P, Be, "../../view/Chart"], function (t) {
        function e(t, e, n, r) {
            var a = e[Ie](), o = this[ne], s = a[L](o), l = e.get("selectedOffset");
            r.dispatchAction({type: "pieToggleSelect", from: t, name: s, seriesId: e.id}), a.each(function (t) {
                i(a[A](t), a[C](t), e.isSelected(a[L](t)), l, n)
            })
        }

        function i(t, e, i, n, r) {
            var a = (e.startAngle + e.endAngle) / 2, o = Math.cos(a), s = Math.sin(a), l = i ? n : 0,
                u = [o * l, s * l];
            r ? t.animate().when(200, {position: u}).start("bounceOut") : t.attr(ye, u)
        }

        function n(t, e) {
            function i() {
                o[oe] = o.hoverIgnore, s[oe] = s.hoverIgnore
            }

            function n() {
                o[oe] = o.normalIgnore, s[oe] = s.normalIgnore
            }

            a.Group.call(this);
            var r = new a.Sector({z2: 2}), o = new a.Polyline, s = new a.Text;
            this.add(r), this.add(o), this.add(s), this.updateData(t, e, !0), this.on("emphasis", i).on(k, n).on(Z, i).on(X, n)
        }

        function r(t, e, i, n, r) {
            var a = n[De](ze), s = r === T || "inner" === r;
            return {
                fill: a[Le]() || (s ? "#fff" : t[ie](e, "color")),
                opacity: t[ie](e, me),
                textFont: a[Pe](),
                text: o[S](t.hostModel.getFormattedLabel(e, i), t[L](e))
            }
        }

        var a = t(P), o = t(Be), s = n[fe];
        s.updateData = function (t, e, n) {
            function r() {
                l.stopAnimation(!0), l.animateTo({shape: {r: h.r + 10}}, 300, "elasticOut")
            }

            function s() {
                l.stopAnimation(!0), l.animateTo({shape: {r: h.r}}, 300, "elasticOut")
            }

            var l = this.childAt(0), u = t.hostModel, c = t[M](e), h = t[C](e), f = o[$]({}, h);
            f.label = null, n ? (l.setShape(f), l.shape.endAngle = h.startAngle, a[w](l, {shape: {endAngle: h.endAngle}}, u, e)) : a[w](l, {shape: f}, u, e);
            var d = c[De]("itemStyle"), p = t[ie](e, "color");
            l.useStyle(o[Oe]({
                lineJoin: "bevel",
                fill: p
            }, d[De](k).getItemStyle())), l.hoverStyle = d[De]("emphasis").getItemStyle(), i(this, t[C](e), c.get("selected"), u.get("selectedOffset"), u.get(ue)), l.off(Z).off(X).off("emphasis").off(k), c.get("hoverAnimation") && u.ifEnableAnimation() && l.on(Z, r).on(X, s).on("emphasis", r).on(k, s), this._updateLabel(t, e), a.setHoverStyle(this)
        }, s._updateLabel = function (t, e) {
            var i = this.childAt(1), n = this.childAt(2), o = t.hostModel, s = t[M](e), l = t[C](e), u = l.label,
                c = t[ie](e, "color");
            a[w](i, {shape: {points: u.linePoints || [[u.x, u.y], [u.x, u.y], [u.x, u.y]]}}, o, e), a[w](n, {
                style: {
                    x: u.x,
                    y: u.y
                }
            }, o, e), n.attr({
                style: {textVerticalAlign: u.verticalAlign, textAlign: u[ke], textFont: u.font},
                rotation: u[b],
                origin: [u.x, u.y],
                z2: 10
            });
            var h = s[De]("label.normal"), f = s[De]("label.emphasis"), d = s[De]("labelLine.normal"),
                p = s[De]("labelLine.emphasis"), v = h.get(ye) || f.get(ye);
            n[ge](r(t, e, k, h, v)), n[oe] = n.normalIgnore = !h.get("show"), n.hoverIgnore = !f.get("show"), i[oe] = i.normalIgnore = !d.get("show"), i.hoverIgnore = !p.get("show"), i[ge]({
                stroke: c,
                opacity: t[ie](e, me)
            }), i[ge](d[De]("lineStyle").getLineStyle()), n.hoverStyle = r(t, e, "emphasis", f, v), i.hoverStyle = p[De]("lineStyle").getLineStyle();
            var m = d.get("smooth");
            m && m === !0 && (m = .4), i.setShape({smooth: m})
        }, o[E](n, a.Group);
        var l = t("../../view/Chart")[$]({
            type: "pie", init: function () {
                var t = new a.Group;
                this._sectorGroup = t
            }, render: function (t, i, r, a) {
                if (!a || a.from !== this.uid) {
                    var s = t[Ie](), l = this._data, u = this.group, c = i.get(ue), h = !l,
                        f = o.curry(e, this.uid, t, c, r), d = t.get("selectedMode");
                    if (s.diff(l).add(function (t) {
                        var e = new n(s, t);
                        h && e.eachChild(function (t) {
                            t.stopAnimation(!0)
                        }), d && e.on("click", f), s[x](t, e), u.add(e)
                    })[te](function (t, e) {
                        var i = l[A](e);
                        i.updateData(s, t), i.off("click"), d && i.on("click", f), u.add(i), s[x](t, i)
                    })[Q](function (t) {
                        var e = l[A](t);
                        u[Q](e)
                    }).execute(), c && h && s.count() > 0) {
                        var p = s[C](0), v = Math.max(r[Me](), r[we]()) / 2, m = o.bind(u.removeClipPath, u);
                        u.setClipPath(this._createClipPath(p.cx, p.cy, v, p.startAngle, p.clockwise, m, t))
                    }
                    this._data = s
                }
            }, dispose: function () {
            }, _createClipPath: function (t, e, i, n, r, o, s) {
                var l = new a.Sector({shape: {cx: t, cy: e, r0: 0, r: i, startAngle: n, endAngle: n, clockwise: r}});
                return a.initProps(l, {shape: {endAngle: n + (r ? 1 : -1) * Math.PI * 2}}, s, o), l
            }, containPoint: function (t, e) {
                var i = e[Ie](), n = i[C](0);
                if (n) {
                    var r = t[0] - n.cx, a = t[1] - n.cy, o = Math.sqrt(r * r + a * a);
                    return o <= n.r && o >= n.r0
                }
            }
        });
        return l
    }), e("echarts/action/createDataSelectAction", [Ne, "../echarts", Be], function (t) {
        var e = t("../echarts"), i = t(Be);
        return function (t, n) {
            i.each(n, function (i) {
                i[te] = "updateView", e.registerAction(i, function (e, n) {
                    var r = {};
                    return n.eachComponent({mainType: "series", subType: t, query: e}, function (t) {
                        t[i.method] && t[i.method](e.name);
                        var n = t[Ie]();
                        n.each(function (e) {
                            var i = n[L](e);
                            r[i] = t.isSelected(i) || !1
                        })
                    }), {name: e.name, selected: r}
                })
            })
        }
    }), e("echarts/visual/dataColor", [Ne], function () {
        return function (t, e) {
            var i = {};
            e.eachRawSeriesByType(t, function (t) {
                var n = t.getRawData(), r = {};
                if (!e.isSeriesFiltered(t)) {
                    var a = t[Ie]();
                    a.each(function (t) {
                        var e = a.getRawIndex(t);
                        r[e] = t
                    }), n.each(function (e) {
                        var o = n[M](e), s = r[e], l = null != s && a[ie](s, "color", !0);
                        if (l) n.setItemVisual(e, "color", l); else {
                            var u = o.get("itemStyle.normal.color") || t.getColorFromPalette(n[L](e), i);
                            n.setItemVisual(e, "color", u), null != s && a.setItemVisual(s, "color", u)
                        }
                    })
                }
            })
        }
    }), e("echarts/chart/pie/pieLayout", [Ne, "../../util/number", "./labelLayout", Be], function (t) {
        var e = t("../../util/number"), i = e[_], n = t("./labelLayout"), r = t(Be), a = 2 * Math.PI, o = Math.PI / 180;
        return function (t, s, l) {
            s.eachSeriesByType(t, function (t) {
                var s = t.get(xe), u = t.get("radius");
                r[F](u) || (u = [0, u]), r[F](s) || (s = [s, s]);
                var c = l[Me](), h = l[we](), f = Math.min(c, h), d = i(s[0], c), p = i(s[1], h), v = i(u[0], f / 2),
                    m = i(u[1], f / 2), g = t[Ie](), y = -t.get("startAngle") * o, _ = t.get("minAngle") * o,
                    x = g.getSum("value"), b = Math.PI / (x || g.count()) * 2, w = t.get("clockwise"),
                    M = t.get("roseType"), S = g.getDataExtent("value");
                S[0] = 0;
                var T = a, A = 0, L = y, P = w ? 1 : -1;
                if (g.each("value", function (t, i) {
                    var n;
                    n = "area" !== M ? 0 === x ? b : t * b : a / (g.count() || 1), _ > n ? (n = _, T -= _) : A += t;
                    var r = L + P * n;
                    g.setItemLayout(i, {
                        angle: n,
                        startAngle: L,
                        endAngle: r,
                        clockwise: w,
                        cx: d,
                        cy: p,
                        r0: v,
                        r: M ? e.linearMap(t, S, [v, m]) : m
                    }), L = r
                }, !0), a > T) if (.001 >= T) {
                    var k = a / g.count();
                    g.each(function (t) {
                        var e = g[C](t);
                        e.startAngle = y + P * t * k, e.endAngle = y + P * (t + 1) * k
                    })
                } else b = T / A, L = y, g.each("value", function (t, e) {
                    var i = g[C](e), n = i.angle === _ ? _ : t * b;
                    i.startAngle = L, i.endAngle = L + P * n, L += n
                });
                n(t, m, c, h)
            })
        }
    }), e("echarts/processor/dataFilter", [], function () {
        return function (t, e) {
            var i = e.findComponents({mainType: "legend"});
            i && i[ae] && e.eachSeriesByType(t, function (t) {
                var e = t[Ie]();
                e.filterSelf(function (t) {
                    for (var n = e[L](t), r = 0; r < i[ae]; r++) if (!i[r].isSelected(n)) return !1;
                    return !0
                }, this)
            }, this)
        }
    }), e("echarts/coord/cartesian/Grid", [Ne, "exports", "../../util/layout", "../../coord/axisHelper", Be, "./Cartesian2D", "./Axis2D", "./GridModel", "../../CoordinateSystem"], function (t) {
        function e(t, e) {
            return t.findGridModel() === e
        }

        function i(t) {
            var e, i = t.model, n = i.getFormattedLabels(), r = 1, a = n[ae];
            a > 40 && (r = Math.ceil(a / 40));
            for (var o = 0; a > o; o += r) if (!t.isLabelIgnored(o)) {
                var s = i.getTextRect(n[o]);
                e ? e.union(s) : e = s
            }
            return e
        }

        function n(t, e, i) {
            this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this._model = t
        }

        function r(t, e) {
            var i = t[I](), n = i[0] + i[1];
            t.toGlobalCoord = "x" === t.dim ? function (t) {
                return t + e
            } : function (t) {
                return n - t + e
            }, t.toLocalCoord = "x" === t.dim ? function (t) {
                return t - e
            } : function (t) {
                return n - t + e
            }
        }

        function a(t) {
            return u.map(b, function (e) {
                var i = t.getReferringComponents(e)[0];
                return i
            })
        }

        function o(t) {
            return "cartesian2d" === t.get(Re)
        }

        var s = t("../../util/layout"), l = t("../../coord/axisHelper"), u = t(Be), c = t("./Cartesian2D"),
            h = t("./Axis2D"), f = u.each, d = l.ifAxisCrossZero, _ = l.niceScaleExtent;
        t("./GridModel");
        var x = n[fe];
        x.type = "grid", x.getRect = function () {
            return this._rect
        }, x[te] = function (t, e) {
            function i(t) {
                var e = n[t];
                for (var i in e) if (e.hasOwnProperty(i)) {
                    var r = e[i];
                    if (r && (r.type === y || !d(r))) return !0
                }
                return !1
            }

            var n = this._axesMap;
            this._updateScale(t, this._model), f(n.x, function (t) {
                _(t, t.model)
            }), f(n.y, function (t) {
                _(t, t.model)
            }), f(n.x, function (t) {
                i("y") && (t.onZero = !1)
            }), f(n.y, function (t) {
                i("x") && (t.onZero = !1)
            }), this[ce](this._model, e)
        }, x[ce] = function (t, e) {
            function n() {
                f(o, function (t) {
                    var e = t.isHorizontal(), i = e ? [0, a.width] : [0, a[Ce]], n = t.inverse ? 1 : 0;
                    t.setExtent(i[n], i[1 - n]), r(t, e ? a.x : a.y)
                })
            }

            var a = s.getLayoutRect(t.getBoxLayoutParams(), {width: e[Me](), height: e[we]()});
            this._rect = a;
            var o = this._axesList;
            n(), t.get("containLabel") && (f(o, function (t) {
                if (!t.model.get("axisLabel.inside")) {
                    var e = i(t);
                    if (e) {
                        var n = t.isHorizontal() ? Ce : "width", r = t.model.get("axisLabel.margin");
                        a[n] -= e[n] + r, "top" === t[ye] ? a.y += e[Ce] + r : "left" === t[ye] && (a.x += e.width + r)
                    }
                }
            }), n())
        }, x[g] = function (t, e) {
            var i = this._axesMap[t];
            if (null != i) {
                if (null == e) for (var n in i) if (i.hasOwnProperty(n)) return i[n];
                return i[e]
            }
        }, x.getCartesian = function (t, e) {
            if (null != t && null != e) {
                var i = "x" + t + "y" + e;
                return this._coordsMap[i]
            }
            for (var n = 0, r = this._coordsList; n < r[ae]; n++) if (r[n][g]("x").index === t || r[n][g]("y").index === e) return r[n]
        }, x.convertToPixel = function (t, e, i) {
            var n = this._findConvertTarget(t, e);
            return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis[m](i)) : null
        }, x.convertFromPixel = function (t, e, i) {
            var n = this._findConvertTarget(t, e);
            return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
        }, x._findConvertTarget = function (t, e) {
            var i, n, r = e.seriesModel, a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
                o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
            if (r) i = r[Re], u[re](l, i) < 0 && (i = null); else if (a && o) i = this.getCartesian(a.componentIndex, o.componentIndex); else if (a) n = this[g]("x", a.componentIndex); else if (o) n = this[g]("y", o.componentIndex); else if (s) {
                var c = s[Re];
                c === this && (i = this._coordsList[0])
            }
            return {cartesian: i, axis: n}
        }, x.containPoint = function (t) {
            var e = this._coordsList[0];
            return e ? e.containPoint(t) : void 0
        }, x._initCartesian = function (t, i) {
            function n(n) {
                return function (s, u) {
                    if (e(s, t, i)) {
                        var c = s.get(ye);
                        "x" === n ? "top" !== c && c !== _e && (c = _e, r[c] && (c = "top" === c ? _e : "top")) : "left" !== c && "right" !== c && (c = "left", r[c] && (c = "left" === c ? "right" : "left")), r[c] = !0;
                        var f = new h(n, l.createScaleByModel(s), [0, 0], s.get("type"), c), d = f.type === y;
                        f.onBand = d && s.get("boundaryGap"), f.inverse = s.get("inverse"), f.onZero = s.get("axisLine.onZero"), s.axis = f, f.model = s, f.grid = this, f.index = u, this._axesList.push(f), a[n][u] = f, o[n]++
                    }
                }
            }

            var r = {left: !1, right: !1, top: !1, bottom: !1}, a = {x: {}, y: {}}, o = {x: 0, y: 0};
            return i.eachComponent("xAxis", n("x"), this), i.eachComponent("yAxis", n("y"), this), o.x && o.y ? (this._axesMap = a, void f(a.x, function (t, e) {
                f(a.y, function (i, n) {
                    var r = "x" + e + "y" + n, a = new c(r);
                    a.grid = this, this._coordsMap[r] = a, this._coordsList.push(a), a.addAxis(t), a.addAxis(i)
                }, this)
            }, this)) : (this._axesMap = {}, void (this._axesList = []))
        }, x._updateScale = function (t, i) {
            function n(t, e, i) {
                f(i.coordDimToDataDim(e.dim), function (i) {
                    e.scale.unionExtent(t.getDataExtent(i, e.scale.type !== v))
                })
            }

            u.each(this._axesList, function (t) {
                t.scale.setExtent(1 / 0, -1 / 0)
            }), t[J](function (r) {
                if (o(r)) {
                    var s = a(r, t), l = s[0], u = s[1];
                    if (!e(l, i, t) || !e(u, i, t)) return;
                    var c = this.getCartesian(l.componentIndex, u.componentIndex), h = r[Ie](), f = c[g]("x"),
                        d = c[g]("y");
                    "list" === h.type && (n(h, f, r), n(h, d, r))
                }
            }, this)
        };
        var b = ["xAxis", "yAxis"];
        return n[ee] = function (t, e) {
            var i = [];
            return t.eachComponent("grid", function (r, a) {
                var o = new n(r, t, e);
                o.name = "grid_" + a, o[ce](r, e), r[Re] = o, i.push(o)
            }), t[J](function (e) {
                if (o(e)) {
                    var i = a(e, t), n = i[0], r = i[1], s = n.findGridModel(), l = s[Re];
                    e[Re] = l.getCartesian(n.componentIndex, r.componentIndex)
                }
            }), i
        }, n[p] = c[fe][p], t("../../CoordinateSystem").register("cartesian2d", n), n
    }), e("echarts/util/graphic", [Ne, Be, "zrender/tool/path", "zrender/graphic/Path", "zrender/tool/color", "zrender/core/matrix", pe, "zrender/graphic/Gradient", "zrender/container/Group", "zrender/graphic/Image", "zrender/graphic/Text", "zrender/graphic/shape/Circle", "zrender/graphic/shape/Sector", "zrender/graphic/shape/Ring", "zrender/graphic/shape/Polygon", "zrender/graphic/shape/Polyline", "zrender/graphic/shape/Rect", "zrender/graphic/shape/Line", "zrender/graphic/shape/BezierCurve", "zrender/graphic/shape/Arc", "zrender/graphic/CompoundPath", "zrender/graphic/LinearGradient", "zrender/graphic/RadialGradient", "zrender/core/BoundingRect"], function (t) {
        function e(t) {
            return null != t && "none" != t
        }

        function i(t) {
            return typeof t === he ? C.lift(t, -.1) : t
        }

        function n(t) {
            if (t.__hoverStlDirty) {
                var n = t.style[h], r = t.style.fill, a = t.__hoverStl;
                a.fill = a.fill || (e(r) ? i(r) : null), a[h] = a[h] || (e(n) ? i(n) : null);
                var o = {};
                for (var s in a) a.hasOwnProperty(s) && (o[s] = t.style[s]);
                t.__normalStl = o, t.__hoverStlDirty = !1
            }
        }

        function r(t) {
            t.__isHover || (n(t), t.useHoverLayer ? t.__zr && t.__zr.addHover(t, t.__hoverStl) : (t[ge](t.__hoverStl), t.z2 += 1), t.__isHover = !0)
        }

        function a(t) {
            if (t.__isHover) {
                var e = t.__normalStl;
                t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t[ge](e), t.z2 -= 1), t.__isHover = !1
            }
        }

        function o(t) {
            "group" === t.type ? t[H](function (t) {
                "group" !== t.type && r(t)
            }) : r(t)
        }

        function s(t) {
            "group" === t.type ? t[H](function (t) {
                "group" !== t.type && a(t)
            }) : a(t)
        }

        function l(t, e) {
            t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && n(t)
        }

        function p() {
            !this.__isEmphasis && o(this)
        }

        function v() {
            !this.__isEmphasis && s(this)
        }

        function m() {
            this.__isEmphasis = !0, o(this)
        }

        function g() {
            this.__isEmphasis = !1, s(this)
        }

        function y(t, e, i, n, r, a) {
            typeof r === N && (a = r, r = null);
            var o = n && (n.ifEnableAnimation ? n.ifEnableAnimation() : n[c](ue));
            if (o) {
                var s = t ? "Update" : "", l = n && n[c]("animationDuration" + s), u = n && n[c]("animationEasing" + s),
                    h = n && n[c]("animationDelay" + s);
                typeof h === N && (h = h(r)), l > 0 ? e.animateTo(i, l, h || 0, u, a) : (e.attr(i), a && a())
            } else e.attr(i), a && a()
        }

        var _ = t(Be), x = t("zrender/tool/path"), M = Math.round, S = t("zrender/graphic/Path"),
            C = t("zrender/tool/color"), A = t("zrender/core/matrix"), L = t(pe),
            P = (t("zrender/graphic/Gradient"), {});
        return P.Group = t("zrender/container/Group"), P.Image = t("zrender/graphic/Image"), P.Text = t("zrender/graphic/Text"), P.Circle = t("zrender/graphic/shape/Circle"), P.Sector = t("zrender/graphic/shape/Sector"), P.Ring = t("zrender/graphic/shape/Ring"), P.Polygon = t("zrender/graphic/shape/Polygon"), P.Polyline = t("zrender/graphic/shape/Polyline"), P.Rect = t("zrender/graphic/shape/Rect"), P.Line = t("zrender/graphic/shape/Line"), P.BezierCurve = t("zrender/graphic/shape/BezierCurve"), P.Arc = t("zrender/graphic/shape/Arc"), P.CompoundPath = t("zrender/graphic/CompoundPath"), P.LinearGradient = t("zrender/graphic/LinearGradient"), P.RadialGradient = t("zrender/graphic/RadialGradient"), P.BoundingRect = t("zrender/core/BoundingRect"), P.extendShape = function (t) {
            return S[$](t)
        }, P.extendPath = function (t, e) {
            return x.extendFromString(t, e)
        }, P.makePath = function (t, e, i, n) {
            var r = x.createFromString(t, e), a = r[Ae]();
            if (i) {
                var o = a.width / a[Ce];
                if (n === xe) {
                    var s, l = i[Ce] * o;
                    l <= i.width ? s = i[Ce] : (l = i.width, s = l / o);
                    var u = i.x + i.width / 2, c = i.y + i[Ce] / 2;
                    i.x = u - l / 2, i.y = c - s / 2, i.width = l, i[Ce] = s
                }
                this.resizePath(r, i)
            }
            return r
        }, P.mergePath = x.mergePath, P.resizePath = function (t, e) {
            if (t[d]) {
                var i = t[Ae](), n = i.calculateTransform(e);
                t[d](n)
            }
        }, P.subPixelOptimizeLine = function (t) {
            var e = P.subPixelOptimize, i = t.shape, n = t.style[f];
            return M(2 * i.x1) === M(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), M(2 * i.y1) === M(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
        }, P.subPixelOptimizeRect = function (t) {
            var e = P.subPixelOptimize, i = t.shape, n = t.style[f], r = i.x, a = i.y, o = i.width, s = i[Ce];
            return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(r + o, n, !1) - i.x, 0 === o ? 0 : 1), i[Ce] = Math.max(e(a + s, n, !1) - i.y, 0 === s ? 0 : 1), t
        }, P.subPixelOptimize = function (t, e, i) {
            var n = M(2 * t);
            return (n + M(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
        }, P.setHoverStyle = function (t, e) {
            "group" === t.type ? t[H](function (t) {
                "group" !== t.type && l(t, e)
            }) : l(t, e), t.on(Z, p).on(X, v), t.on("emphasis", m).on(k, g)
        }, P.setText = function (t, e, i) {
            var n = e[c](ye) || T, r = n[re](T) >= 0 ? "white" : i, a = e[De](ze);
            _[$](t, {textDistance: e[c]("distance") || 5, textFont: a[Pe](), textPosition: n, textFill: a[Le]() || r})
        }, P[w] = function (t, e, i, n, r) {
            y(!0, t, e, i, n, r)
        }, P.initProps = function (t, e, i, n, r) {
            y(!1, t, e, i, n, r)
        }, P.getTransform = function (t, e) {
            for (var i = A.identity([]); t && t !== e;) A.mul(i, t.getLocalTransform(), i), t = t[u];
            return i
        }, P[d] = function (t, e, i) {
            return i && (e = A.invert([], e)), L[d]([], t, e)
        }, P.transformDirection = function (t, e, i) {
            var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
                r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
                a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : t === _e ? r : 0];
            return a = P[d](a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? _e : "top"
        }, P.groupTransition = function (t, e, i) {
            function n(t) {
                var e = {};
                return t[H](function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }), e
            }

            function r(t) {
                var e = {position: L.clone(t[ye]), rotation: t[b]};
                return t.shape && (e.shape = _[$]({}, t.shape)), e
            }

            if (t && e) {
                var a = n(t);
                e[H](function (t) {
                    if (!t.isGroup && t.anid) {
                        var e = a[t.anid];
                        if (e) {
                            var n = r(t);
                            t.attr(r(e)), P[w](t, n, i, t[ne])
                        }
                    }
                })
            }
        }, P
    }), e("echarts/component/axis", [Ne, "../coord/cartesian/AxisModel", "./axis/AxisView"], function (t) {
        t("../coord/cartesian/AxisModel"), t("./axis/AxisView")
    }), e("echarts/chart/bar/BarSeries", [Ne, "../../model/Series", "../helper/createListFromArray"], function (t) {
        var e = t("../../model/Series"), i = t("../helper/createListFromArray");
        return e[$]({
            type: "series.bar",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                return i(t.data, this, e)
            },
            getMarkerPosition: function (t) {
                var e = this[Re];
                if (e) {
                    var i = e.dataToPoint(t, !0), n = this[Ie](), r = n.getLayout("offset"), a = n.getLayout("size"),
                        o = e.getBaseAxis().isHorizontal() ? 0 : 1;
                    return i[o] += r + a / 2, i
                }
                return [0 / 0, 0 / 0]
            },
            brushSelector: "rect",
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                barMinHeight: 0,
                itemStyle: {normal: {}, emphasis: {}}
            }
        })
    }), e("echarts/chart/bar/BarView", [Ne, Be, P, "../../model/Model", "./barItemStyle", z], function (t) {
        function e(t, e) {
            var i = t.width > 0 ? 1 : -1, n = t[Ce] > 0 ? 1 : -1;
            e = Math.min(e, Math.abs(t.width), Math.abs(t[Ce])), t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t[Ce] -= n * e
        }

        var i = t(Be), n = t(P);
        return i[$](t("../../model/Model")[fe], t("./barItemStyle")), t(z).extendChartView({
            type: "bar", render: function (t, e, i) {
                var n = t.get(Re);
                return "cartesian2d" === n && this._renderOnCartesian(t, e, i), this.group
            }, dispose: i.noop, _renderOnCartesian: function (t) {
                function r(r, a) {
                    var s = o[C](r), l = o[M](r).get(f) || 0;
                    e(s, l);
                    var u = new n.Rect({shape: i[$]({}, s)});
                    if (h) {
                        var d = u.shape, p = c ? Ce : "width", v = {};
                        d[p] = 0, v[p] = s[p], n[a ? w : "initProps"](u, {shape: v}, t, r)
                    }
                    return u
                }

                var a = this.group, o = t[Ie](), s = this._data, l = t[Re], u = l.getBaseAxis(), c = u.isHorizontal(),
                    h = t.get(ue), f = ["itemStyle", k, "barBorderWidth"];
                o.diff(s).add(function (t) {
                    if (o.hasValue(t)) {
                        var e = r(t);
                        o[x](t, e), a.add(e)
                    }
                })[te](function (i, l) {
                    var u = s[A](l);
                    if (!o.hasValue(i)) return void a[Q](u);
                    u || (u = r(i, !0));
                    var c = o[C](i), h = o[M](i).get(f) || 0;
                    e(c, h), n[w](u, {shape: c}, t, i), o[x](i, u), a.add(u)
                })[Q](function (e) {
                    var i = s[A](e);
                    i && (i.style.text = "", n[w](i, {shape: {width: 0}}, t, e, function () {
                        a[Q](i)
                    }))
                }).execute(), this._updateStyle(t, o, c), this._data = o
            }, _updateStyle: function (t, e, r) {
                function a(t, e, i, r, a) {
                    n.setText(t, e, i), t.text = r, "outside" === t.textPosition && (t.textPosition = a)
                }

                e[l](function (o, s) {
                    var l = e[M](s), u = e[ie](s, "color"), c = e[ie](s, me), h = e[C](s),
                        f = l[De]("itemStyle.normal"), d = l[De]("itemStyle.emphasis").getBarItemStyle();
                    o.setShape("r", f.get("barBorderRadius") || 0), o.useStyle(i[Oe]({
                        fill: u,
                        opacity: c
                    }, f.getBarItemStyle()));
                    var p = r ? h[Ce] > 0 ? _e : "top" : h.width > 0 ? "left" : "right", v = l[De]("label.normal"),
                        m = l[De]("label.emphasis"), g = o.style;
                    v.get("show") ? a(g, v, u, i[S](t.getFormattedLabel(s, k), t.getRawValue(s)), p) : g.text = "", m.get("show") ? a(d, m, u, i[S](t.getFormattedLabel(s, "emphasis"), t.getRawValue(s)), p) : d.text = "", n.setHoverStyle(o, d)
                })
            }, remove: function (t) {
                var e = this.group;
                t.get(ue) ? this._data && this._data[l](function (i) {
                    i.style.text = "", n[w](i, {shape: {width: 0}}, t, i[ne], function () {
                        e[Q](i)
                    })
                }) : e[Ee]()
            }
        })
    }), e("echarts/util/layout", [Ne, Be, "zrender/core/BoundingRect", "./number", "./format"], function (t) {
        function e(t, e, i, n, r) {
            var a = 0, o = 0;
            null == n && (n = 1 / 0), null == r && (r = 1 / 0);
            var s = 0;
            e.eachChild(function (l, u) {
                var c, h, f = l[ye], d = l[Ae](), p = e.childAt(u + 1), v = p && p[Ae]();
                if ("horizontal" === t) {
                    var m = d.width + (v ? -v.x + d.x : 0);
                    c = a + m, c > n || l.newline ? (a = 0, c = m, o += s + i, s = d[Ce]) : s = Math.max(s, d[Ce])
                } else {
                    var g = d[Ce] + (v ? -v.y + d.y : 0);
                    h = o + g, h > r || l.newline ? (a += s + i, o = 0, h = g, s = d.width) : s = Math.max(s, d.width)
                }
                l.newline || (f[0] = a, f[1] = o, "horizontal" === t ? a = c + i : o = h + i)
            })
        }

        var i = t(Be), n = t("zrender/core/BoundingRect"), r = t("./number"), a = t("./format"), o = r[_], s = i.each,
            l = {}, u = ["left", "right", "top", _e, "width", Ce];
        return l.box = e, l.vbox = i.curry(e, "vertical"), l.hbox = i.curry(e, "horizontal"), l.getAvailableSize = function (t, e, i) {
            var n = e.width, r = e[Ce], s = o(t.x, n), l = o(t.y, r), u = o(t.x2, n), c = o(t.y2, r);
            return (isNaN(s) || isNaN(parseFloat(t.x))) && (s = 0), (isNaN(u) || isNaN(parseFloat(t.x2))) && (u = n), (isNaN(l) || isNaN(parseFloat(t.y))) && (l = 0), (isNaN(c) || isNaN(parseFloat(t.y2))) && (c = r), i = a.normalizeCssArray(i || 0), {
                width: Math.max(u - s - i[1] - i[3], 0),
                height: Math.max(c - l - i[0] - i[2], 0)
            }
        }, l.getLayoutRect = function (t, e, i) {
            i = a.normalizeCssArray(i || 0);
            var r = e.width, s = e[Ce], l = o(t.left, r), u = o(t.top, s), c = o(t.right, r), h = o(t[_e], s),
                f = o(t.width, r), d = o(t[Ce], s), p = i[2] + i[0], v = i[1] + i[3], m = t.aspect;
            switch (isNaN(f) && (f = r - c - v - l), isNaN(d) && (d = s - h - p - u), isNaN(f) && isNaN(d) && (m > r / s ? f = .8 * r : d = .8 * s), null != m && (isNaN(f) && (f = m * d), isNaN(d) && (d = f / m)), isNaN(l) && (l = r - c - f - v), isNaN(u) && (u = s - h - d - p), t.left || t.right) {
                case xe:
                    l = r / 2 - f / 2 - i[3];
                    break;
                case"right":
                    l = r - f - v
            }
            switch (t.top || t[_e]) {
                case be:
                case xe:
                    u = s / 2 - d / 2 - i[0];
                    break;
                case _e:
                    u = s - d - p
            }
            l = l || 0, u = u || 0, isNaN(f) && (f = r - l - (c || 0)), isNaN(d) && (d = s - u - (h || 0));
            var g = new n(l + i[3], u + i[0], f, d);
            return g.margin = i, g
        }, l.positionGroup = function (t, e, n, r) {
            var a = t[Ae]();
            e = i[$](i.clone(e), {
                width: a.width,
                height: a[Ce]
            }), e = l.getLayoutRect(e, n, r), t.attr(ye, [e.x - a.x, e.y - a.y])
        }, l.mergeLayoutParam = function (t, e, n) {
            function r(i) {
                var r = {}, l = 0, u = {}, c = 0, h = n.ignoreSize ? 1 : 2;
                if (s(i, function (e) {
                    u[e] = t[e]
                }), s(i, function (t) {
                    a(e, t) && (r[t] = u[t] = e[t]), o(r, t) && l++, o(u, t) && c++
                }), c !== h && l) {
                    if (l >= h) return r;
                    for (var f = 0; f < i[ae]; f++) {
                        var d = i[f];
                        if (!a(r, d) && a(t, d)) {
                            r[d] = t[d];
                            break
                        }
                    }
                    return r
                }
                return u
            }

            function a(t, e) {
                return t.hasOwnProperty(e)
            }

            function o(t, e) {
                return null != t[e] && "auto" !== t[e]
            }

            function l(t, e, i) {
                s(t, function (t) {
                    e[t] = i[t]
                })
            }

            !i[K](n) && (n = {});
            var u = ["width", "left", "right"], c = [Ce, "top", _e], h = r(u), f = r(c);
            l(u, t, h), l(c, t, f)
        }, l.getLayoutParams = function (t) {
            return l.copyLayoutParams({}, t)
        }, l.copyLayoutParams = function (t, e) {
            return e && t && s(u, function (i) {
                e.hasOwnProperty(i) && (t[i] = e[i])
            }), t
        }, l
    }), e("echarts/chart/line/LineSeries", [Ne, "../helper/createListFromArray", "../../model/Series"], function (t) {
        var e = t("../helper/createListFromArray"), i = t("../../model/Series");
        return i[$]({
            type: "series.line",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, i) {
                return e(t.data, this, i)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                clipOverflow: !0,
                label: {normal: {position: "top"}},
                lineStyle: {normal: {width: 2, type: "solid"}},
                step: !1,
                smooth: !1,
                smoothMonotone: null,
                symbol: "emptyCircle",
                symbolSize: 4,
                symbolRotate: null,
                showSymbol: !0,
                showAllSymbol: !1,
                connectNulls: !1,
                sampling: "none",
                animationEasing: "linear",
                progressive: 0,
                hoverLayerThreshold: 1 / 0
            }
        })
    }), e("echarts/chart/line/LineView", [Ne, Be, "../helper/SymbolDraw", "../helper/Symbol", "./lineAnimationDiff", P, "../../util/model", "./poly", "../../view/Chart"], function (t) {
        function e(t, e) {
            if (t[ae] === e[ae]) {
                for (var i = 0; i < t[ae]; i++) {
                    var n = t[i], r = e[i];
                    if (n[0] !== r[0] || n[1] !== r[1]) return
                }
                return !0
            }
        }

        function i(t) {
            return typeof t === B ? t : t ? .3 : 0
        }

        function n(t) {
            var e = t.getGlobalExtent();
            if (t.onBand) {
                var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
                e[0] += n * i, e[1] -= n * i
            }
            return e
        }

        function r(t) {
            return t >= 0 ? 1 : -1
        }

        function a(t, e) {
            var i = t.getBaseAxis(), n = t.getOtherAxis(i), a = i.onZero ? 0 : n.scale[I]()[0], o = n.dim,
                s = "x" === o || "radius" === o ? 1 : 0;
            return e.mapArray([o], function (n, l) {
                for (var u, c = e.stackedOn; c && r(c.get(o, l)) === r(n);) {
                    u = c;
                    break
                }
                var h = [];
                return h[s] = e.get(i.dim, l), h[1 - s] = u ? u.get(o, l, !0) : a, t.dataToPoint(h)
            }, !0)
        }

        function o(t, e, i) {
            var r = n(t[g]("x")), a = n(t[g]("y")), o = t.getBaseAxis().isHorizontal(), s = Math.min(r[0], r[1]),
                l = Math.min(a[0], a[1]), u = Math.max(r[0], r[1]) - s, c = Math.max(a[0], a[1]) - l,
                h = i.get("lineStyle.normal.width") || 2, f = i.get("clipOverflow") ? h / 2 : Math.max(u, c);
            o ? (l -= f, c += 2 * f) : (s -= f, u += 2 * f);
            var d = new M.Rect({shape: {x: s, y: l, width: u, height: c}});
            return e && (d.shape[o ? "width" : Ce] = 0, M.initProps(d, {shape: {width: u, height: c}}, i)), d
        }

        function s(t, e, i) {
            var n = t.getAngleAxis(), r = t.getRadiusAxis(), a = r[I](), o = n[I](), s = Math.PI / 180,
                l = new M.Sector({
                    shape: {
                        cx: t.cx,
                        cy: t.cy,
                        r0: a[0],
                        r: a[1],
                        startAngle: -o[0] * s,
                        endAngle: -o[1] * s,
                        clockwise: n.inverse
                    }
                });
            return e && (l.shape.endAngle = -o[0] * s, M.initProps(l, {shape: {endAngle: -o[1] * s}}, i)), l
        }

        function u(t, e, i) {
            return "polar" === t.type ? s(t, e, i) : o(t, e, i)
        }

        function c(t, e, i) {
            for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, a = [], o = 0; o < t[ae] - 1; o++) {
                var s = t[o + 1], l = t[o];
                a.push(l);
                var u = [];
                switch (i) {
                    case"end":
                        u[r] = s[r], u[1 - r] = l[1 - r], a.push(u);
                        break;
                    case be:
                        var c = (l[r] + s[r]) / 2, h = [];
                        u[r] = h[r] = c, u[1 - r] = l[1 - r], h[1 - r] = s[1 - r], a.push(u), a.push(h);
                        break;
                    default:
                        u[r] = l[r], u[1 - r] = s[1 - r], a.push(u)
                }
            }
            return t[o] && a.push(t[o]), a
        }

        function h(t, e) {
            return Math.max(Math.min(t, e[1]), e[0])
        }

        function f(t, e) {
            var i = t.getVisual("visualMeta");
            if (i && i[ae] && t.count()) {
                for (var n, r = i[ae] - 1; r >= 0; r--) if (i[r].dimension < 2) {
                    n = i[r];
                    break
                }
                if (n && "cartesian2d" === e.type) {
                    var a = n.dimension, o = t[p][a], s = t.getDataExtent(o), l = n.stops, u = [];
                    l[0].interval && l.sort(function (t, e) {
                        return t.interval[0] - e.interval[0]
                    });
                    var c = l[0], f = l[l[ae] - 1], d = c.interval ? h(c.interval[0], s) : c.value,
                        v = f.interval ? h(f.interval[1], s) : f.value, y = v - d;
                    if (0 === y) return t[ie](0, "color");
                    for (var r = 0; r < l[ae]; r++) if (l[r].interval) {
                        if (l[r].interval[1] === l[r].interval[0]) continue;
                        u.push({
                            offset: (h(l[r].interval[0], s) - d) / y,
                            color: l[r].color
                        }, {offset: (h(l[r].interval[1], s) - d) / y, color: l[r].color})
                    } else u.push({offset: (l[r].value - d) / y, color: l[r].color});
                    var _ = new M.LinearGradient(0, 0, 0, 0, u, !0), x = e[g](o), b = x.toGlobalCoord(x[m](d)),
                        w = x.toGlobalCoord(x[m](v));
                    return _[o] = b, _[o + "2"] = w, _
                }
            }
        }

        var d = t(Be), y = t("../helper/SymbolDraw"), _ = t("../helper/Symbol"), b = t("./lineAnimationDiff"), M = t(P),
            S = t("../../util/model"), T = t("./poly"), L = t("../../view/Chart");
        return L[$]({
            type: "line", init: function () {
                var t = new M.Group, e = new y;
                this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
            }, render: function (t, n, r) {
                var o = t[Re], s = this.group, h = t[Ie](), p = t[De]("lineStyle.normal"),
                    v = t[De]("areaStyle.normal"), m = h.mapArray(h[C], !0), g = "polar" === o.type, y = this._coordSys,
                    _ = this._symbolDraw, b = this._polyline, w = this._polygon, M = this._lineGroup, S = t.get(ue),
                    T = !v.isEmpty(), A = a(o, h), L = t.get("showSymbol"),
                    P = L && !g && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(h, o), k = this._data;
                k && k[l](function (t, e) {
                    t.__temp && (s[Q](t), k[x](e, null))
                }), L || _[Q](), s.add(M);
                var z = !g && t.get("step");
                b && y.type === o.type && z === this._step ? (T && !w ? w = this._newPolygon(m, A, o, S) : w && !T && (M[Q](w), w = this._polygon = null), M.setClipPath(u(o, !1, t)), L && _.updateData(h, P), h[l](function (t) {
                    t.stopAnimation(!0)
                }), e(this._stackedOnPoints, A) && e(this._points, m) || (S ? this._updateAnimation(h, A, o, r, z) : (z && (m = c(m, o, z), A = c(A, o, z)), b.setShape({points: m}), w && w.setShape({
                    points: m,
                    stackedOnPoints: A
                })))) : (L && _.updateData(h, P), z && (m = c(m, o, z), A = c(A, o, z)), b = this._newPolyline(m, o, S), T && (w = this._newPolygon(m, A, o, S)), M.setClipPath(u(o, !0, t)));
                var D = f(h, o) || h.getVisual("color");
                b.useStyle(d[Oe](p.getLineStyle(), {fill: "none", stroke: D, lineJoin: "bevel"}));
                var I = t.get("smooth");
                if (I = i(t.get("smooth")), b.setShape({
                    smooth: I,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                }), w) {
                    var O = h.stackedOn, R = 0;
                    if (w.useStyle(d[Oe](v.getAreaStyle(), {fill: D, opacity: .7, lineJoin: "bevel"})), O) {
                        var E = O.hostModel;
                        R = i(E.get("smooth"))
                    }
                    w.setShape({
                        smooth: I,
                        stackedOnSmooth: R,
                        smoothMonotone: t.get("smoothMonotone"),
                        connectNulls: t.get("connectNulls")
                    })
                }
                this._data = h, this._coordSys = o, this._stackedOnPoints = A, this._points = m, this._step = z
            }, dispose: function () {
            }, highlight: function (t, e, i, n) {
                var r = t[Ie](), a = S.queryDataIndex(r, n);
                if (!(a instanceof Array) && null != a && a >= 0) {
                    var o = r[A](a);
                    if (!o) {
                        var s = r[C](a);
                        o = new _(r, a), o[ye] = s, o.setZ(t.get(G), t.get("z")), o[oe] = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r[x](a, o), o.stopSymbolAnimation(!0), this.group.add(o)
                    }
                    o.highlight()
                } else L[fe].highlight.call(this, t, e, i, n)
            }, downplay: function (t, e, i, n) {
                var r = t[Ie](), a = S.queryDataIndex(r, n);
                if (null != a && a >= 0) {
                    var o = r[A](a);
                    o && (o.__temp ? (r[x](a, null), this.group[Q](o)) : o.downplay())
                } else L[fe].downplay.call(this, t, e, i, n)
            }, _newPolyline: function (t) {
                var e = this._polyline;
                return e && this._lineGroup[Q](e), e = new T.Polyline({
                    shape: {points: t},
                    silent: !0,
                    z2: 10
                }), this._lineGroup.add(e), this._polyline = e, e
            }, _newPolygon: function (t, e) {
                var i = this._polygon;
                return i && this._lineGroup[Q](i), i = new T.Polygon({
                    shape: {points: t, stackedOnPoints: e},
                    silent: !0
                }), this._lineGroup.add(i), this._polygon = i, i
            }, _getSymbolIgnoreFunc: function (t, e) {
                var i = e.getAxesByScale(v)[0];
                return i && i.isLabelIgnored ? d.bind(i.isLabelIgnored, i) : void 0
            }, _updateAnimation: function (t, e, i, n, r) {
                var a = this._polyline, o = this._polygon, s = t.hostModel,
                    l = b(this._data, t, this._stackedOnPoints, e, this._coordSys, i), u = l.current,
                    h = l.stackedOnCurrent, f = l.next, d = l.stackedOnNext;
                r && (u = c(l.current, i, r), h = c(l.stackedOnCurrent, i, r), f = c(l.next, i, r), d = c(l.stackedOnNext, i, r)), a.shape.__points = l.current, a.shape.points = u, M[w](a, {shape: {points: f}}, s), o && (o.setShape({
                    points: u,
                    stackedOnPoints: h
                }), M[w](o, {shape: {points: f, stackedOnPoints: d}}, s));
                for (var p = [], v = l.status, m = 0; m < v[ae]; m++) {
                    var g = v[m].cmd;
                    if ("=" === g) {
                        var y = t[A](v[m].idx1);
                        y && p.push({el: y, ptIdx: m})
                    }
                }
                a.animators && a.animators[ae] && a.animators[0].during(function () {
                    for (var t = 0; t < p[ae]; t++) {
                        var e = p[t].el;
                        e.attr(ye, a.shape.__points[p[t].ptIdx])
                    }
                })
            }, remove: function () {
                var t = this.group, e = this._data;
                this._lineGroup[Ee](), this._symbolDraw[Q](!0), e && e[l](function (i, n) {
                    i.__temp && (t[Q](i), e[x](n, null))
                }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
            }
        })
    }), e("echarts/layout/barGrid", [Ne, Be, "../util/number"], function (t) {
        function e(t) {
            return t.get("stack") || "__ec_stack_" + t[W]
        }

        function i(t) {
            return t.dim + t.index
        }

        function n(t) {
            var n = {};
            a.each(t, function (t) {
                var r = t[Ie](), a = t[Re], o = a.getBaseAxis(), l = o[I](),
                    u = o.type === y ? o.getBandWidth() : Math.abs(l[1] - l[0]) / r.count(), c = n[i(o)] || {
                        bandWidth: u,
                        remainedWidth: u,
                        autoWidthCount: 0,
                        categoryGap: "20%",
                        gap: "30%",
                        stacks: {}
                    }, h = c.stacks;
                n[i(o)] = c;
                var f = e(t);
                h[f] || c.autoWidthCount++, h[f] = h[f] || {width: 0, maxWidth: 0};
                var d = s(t.get("barWidth"), u), p = s(t.get("barMaxWidth"), u), v = t.get("barGap"),
                    m = t.get("barCategoryGap");
                d && !h[f].width && (d = Math.min(c.remainedWidth, d), h[f].width = d, c.remainedWidth -= d), p && (h[f].maxWidth = p), null != v && (c.gap = v), null != m && (c.categoryGap = m)
            });
            var r = {};
            return a.each(n, function (t, e) {
                r[e] = {};
                var i = t.stacks, n = t.bandWidth, o = s(t.categoryGap, n), l = s(t.gap, 1), u = t.remainedWidth,
                    c = t.autoWidthCount, h = (u - o) / (c + (c - 1) * l);
                h = Math.max(h, 0), a.each(i, function (t) {
                    var e = t.maxWidth;
                    !t.width && e && h > e && (e = Math.min(e, u), u -= e, t.width = e, c--)
                }), h = (u - o) / (c + (c - 1) * l), h = Math.max(h, 0);
                var f, d = 0;
                a.each(i, function (t) {
                    t.width || (t.width = h), f = t, d += t.width * (1 + l)
                }), f && (d -= f.width * l);
                var p = -d / 2;
                a.each(i, function (t, i) {
                    r[e][i] = r[e][i] || {offset: p, width: t.width}, p += t.width * (1 + l)
                })
            }), r
        }

        function r(t, r) {
            var o = n(a.filter(r.getSeriesByType(t), function (t) {
                return !r.isSeriesFiltered(t) && t[Re] && "cartesian2d" === t[Re].type
            })), s = {}, l = {};
            r.eachSeriesByType(t, function (t) {
                var n = t[Ie](), r = t[Re], a = r.getBaseAxis(), u = e(t), c = o[i(a)][u], h = c.offset, f = c.width,
                    d = r.getOtherAxis(a), p = t.get("barMinHeight") || 0,
                    v = a.onZero ? d.toGlobalCoord(d[m](0)) : d.getGlobalExtent()[0], g = r.dataToPoints(n, !0);
                s[u] = s[u] || [], l[u] = l[u] || [], n.setLayout({offset: h, size: f}), n.each(d.dim, function (t, e) {
                    if (!isNaN(t)) {
                        s[u][e] || (s[u][e] = {p: v, n: v}, l[u][e] = {p: v, n: v});
                        var i, r, a, o, c = t >= 0 ? "p" : "n", m = g[e], y = s[u][e][c], _ = l[u][e][c];
                        d.isHorizontal() ? (i = y, r = m[1] + h, a = m[0] - _, o = f, l[u][e][c] += a, Math.abs(a) < p && (a = (0 > a ? -1 : 1) * p), s[u][e][c] += a) : (i = m[0] + h, r = y, a = f, o = m[1] - _, l[u][e][c] += o, Math.abs(o) < p && (o = (0 >= o ? -1 : 1) * p), s[u][e][c] += o), n.setItemLayout(e, {
                            x: i,
                            y: r,
                            width: a,
                            height: o
                        })
                    }
                }, !0)
            }, this)
        }

        var a = t(Be), o = t("../util/number"), s = o[_];
        return r
    }), e("echarts/visual/symbol", [Ne], function () {
        return function (t, e, i, n) {
            n.eachRawSeriesByType(t, function (t) {
                var r = t[Ie](), a = t.get("symbol") || e, o = t.get("symbolSize");
                r.setVisual({
                    legendSymbol: i || a,
                    symbol: a,
                    symbolSize: o
                }), n.isSeriesFiltered(t) || (typeof o === N && r.each(function (e) {
                    var i = t.getRawValue(e), n = t[q](e);
                    r.setItemVisual(e, "symbolSize", o(i, n))
                }), r.each(function (t) {
                    var e = r[M](t), i = e[c]("symbol", !0), n = e[c]("symbolSize", !0);
                    null != i && r.setItemVisual(t, "symbol", i), null != n && r.setItemVisual(t, "symbolSize", n)
                }))
            })
        }
    }), e("echarts/layout/points", [Ne], function () {
        return function (t, e) {
            e.eachSeriesByType(t, function (t) {
                var e = t[Ie](), i = t[Re];
                if (i) {
                    var n = i[p];
                    "singleAxis" === i.type ? e.each(n[0], function (t, n) {
                        e.setItemLayout(n, isNaN(t) ? [0 / 0, 0 / 0] : i.dataToPoint(t))
                    }) : e.each(n, function (t, n, r) {
                        e.setItemLayout(r, isNaN(t) || isNaN(n) ? [0 / 0, 0 / 0] : i.dataToPoint([t, n]))
                    }, !0)
                }
            })
        }
    }), e("echarts/processor/dataSample", [], function () {
        var t = {
            average: function (t) {
                for (var e = 0, i = 0, n = 0; n < t[ae]; n++) isNaN(t[n]) || (e += t[n], i++);
                return 0 === i ? 0 / 0 : e / i
            }, sum: function (t) {
                for (var e = 0, i = 0; i < t[ae]; i++) e += t[i] || 0;
                return e
            }, max: function (t) {
                for (var e = -1 / 0, i = 0; i < t[ae]; i++) t[i] > e && (e = t[i]);
                return e
            }, min: function (t) {
                for (var e = 1 / 0, i = 0; i < t[ae]; i++) t[i] < e && (e = t[i]);
                return e
            }, nearest: function (t) {
                return t[0]
            }
        }, e = function (t) {
            return Math.round(t[ae] / 2)
        };
        return function (i, n) {
            n.eachSeriesByType(i, function (i) {
                var n = i[Ie](), r = i.get("sampling"), a = i[Re];
                if ("cartesian2d" === a.type && r) {
                    var o = a.getBaseAxis(), s = a.getOtherAxis(o), l = o[I](), u = l[1] - l[0],
                        c = Math.round(n.count() / u);
                    if (c > 1) {
                        var h;
                        typeof r === he ? h = t[r] : typeof r === N && (h = r), h && (n = n.downSample(s.dim, 1 / c, h, e), i.setData(n))
                    }
                }
            }, this)
        }
    }), e(ve, [], function () {
        function t(t) {
            var e = {}, i = {}, n = t.match(/Firefox\/([\d.]+)/),
                r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/);
            return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), a && (i.edge = !0, i.version = a[1]), {
                browser: i,
                os: e,
                node: !1,
                canvasSupported: document[D]("canvas").getContext ? !0 : !1,
                touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
                pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 10)
            }
        }

        var e = {};
        return e = typeof navigator === s ? {
            browser: {},
            os: {},
            node: !0,
            canvasSupported: !0
        } : t(navigator.userAgent)
    }), e("echarts/model/Global", [Ne, Be, "../util/model", "./Model", "./Component", "./globalDefault", "./mixin/colorPalette"], function (t) {
        function e(t, e) {
            u.each(e, function (e, i) {
                y.hasClass(i) || ("object" == typeof e ? t[i] = t[i] ? u.merge(t[i], e, !1) : u.clone(e) : null == t[i] && (t[i] = e))
            })
        }

        function i(t) {
            t = t, this.option = {}, this.option[x] = 1, this._componentsMap = {}, this._seriesIndices = null, e(t, this._theme.option), u.merge(t, _, !1), this.mergeOption(t)
        }

        function n(t, e) {
            u[F](e) || (e = e ? [e] : []);
            var i = {};
            return f(e, function (e) {
                i[e] = (t[e] || []).slice()
            }), i
        }

        function r(t, e) {
            var i = {};
            f(e, function (t) {
                var e = t.exist;
                e && (i[e.id] = t)
            }), f(e, function (e) {
                var n = e.option;
                if (u.assert(!n || null == n.id || !i[n.id] || i[n.id] === e, "id duplicates: " + (n && n.id)), n && null != n.id && (i[n.id] = e), g(n)) {
                    var r = a(t, n, e.exist);
                    e.keyInfo = {mainType: t, subType: r}
                }
            }), f(e, function (t) {
                var e = t.exist, n = t.option, r = t.keyInfo;
                if (g(n)) {
                    if (r.name = null != n.name ? n.name + "" : e ? e.name : "\x00-", e) r.id = e.id; else if (null != n.id) r.id = n.id + ""; else {
                        var a = 0;
                        do r.id = "\x00" + r.name + "\x00" + a++; while (i[r.id])
                    }
                    i[r.id] = t
                }
            })
        }

        function a(t, e, i) {
            var n = e.type ? e.type : i ? i.subType : y.determineSubType(t, e);
            return n
        }

        function o(t) {
            return p(t, function (t) {
                return t.componentIndex
            }) || []
        }

        function s(t, e) {
            return e.hasOwnProperty("subType") ? d(t, function (t) {
                return t.subType === e.subType
            }) : t
        }

        function l(t) {
        }

        var u = t(Be), c = t("../util/model"), h = t("./Model"), f = u.each, d = u.filter, p = u.map, v = u[F],
            m = u[re], g = u[K], y = t("./Component"), _ = t("./globalDefault"), x = "\x00_ec_inner", b = h[$]({
                constructor: b, init: function (t, e, i, n) {
                    i = i || {}, this.option = null, this._theme = new h(i), this._optionManager = n
                }, setOption: function (t, e) {
                    u.assert(!(x in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption()
                }, resetOption: function (t) {
                    var e = !1, n = this._optionManager;
                    if (!t || "recreate" === t) {
                        var r = n.mountOption("recreate" === t);
                        this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(r)) : i.call(this, r), e = !0
                    }
                    if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                        var a = n.getTimelineOption(this);
                        a && (this.mergeOption(a), e = !0)
                    }
                    if (!t || "recreate" === t || "media" === t) {
                        var o = n.getMediaOption(this, this._api);
                        o[ae] && f(o, function (t) {
                            this.mergeOption(t, e = !0)
                        }, this)
                    }
                    return e
                }, mergeOption: function (t) {
                    function e(e, s) {
                        var l = c.normalizeToArray(t[e]), h = c.mappingToExists(a[e], l);
                        r(e, h);
                        var d = n(a, s);
                        i[e] = [], a[e] = [], f(h, function (t, n) {
                            var r = t.exist, o = t.option;
                            if (u.assert(g(o) || r, "Empty component definition"), o) {
                                var s = y.getClass(e, t.keyInfo.subType, !0);
                                if (r && r instanceof s) r.name = t.keyInfo.name, r.mergeOption(o, this), r.optionUpdated(o, !1); else {
                                    var l = u[$]({dependentModels: d, componentIndex: n}, t.keyInfo);
                                    r = new s(o, this, this, l), u[$](r, l), r.init(o, this, this, l), r.optionUpdated(null, !0)
                                }
                            } else r.mergeOption({}, this), r.optionUpdated({}, !1);
                            a[e][n] = r, i[e][n] = r.option
                        }, this), e === j && (this._seriesIndices = o(a[j]))
                    }

                    var i = this.option, a = this._componentsMap, s = [];
                    f(t, function (t, e) {
                        null != t && (y.hasClass(e) ? s.push(e) : i[e] = null == i[e] ? u.clone(t) : u.merge(i[e], t, !0))
                    }), y.topologicalTravel(s, y.getAllClassMainTypes(), e, this), this._seriesIndices = this._seriesIndices || []
                }, getOption: function () {
                    var t = u.clone(this.option);
                    return f(t, function (e, i) {
                        if (y.hasClass(i)) {
                            for (var e = c.normalizeToArray(e), n = e[ae] - 1; n >= 0; n--) c.isIdInner(e[n]) && e[U](n, 1);
                            t[i] = e
                        }
                    }), delete t[x], t
                }, getTheme: function () {
                    return this._theme
                }, getComponent: function (t, e) {
                    var i = this._componentsMap[t];
                    return i ? i[e || 0] : void 0
                }, queryComponents: function (t) {
                    var e = t.mainType;
                    if (!e) return [];
                    var i = t.index, n = t.id, r = t.name, a = this._componentsMap[e];
                    if (!a || !a[ae]) return [];
                    var o;
                    if (null != i) v(i) || (i = [i]), o = d(p(i, function (t) {
                        return a[t]
                    }), function (t) {
                        return !!t
                    }); else if (null != n) {
                        var l = v(n);
                        o = d(a, function (t) {
                            return l && m(n, t.id) >= 0 || !l && t.id === n
                        })
                    } else if (null != r) {
                        var u = v(r);
                        o = d(a, function (t) {
                            return u && m(r, t.name) >= 0 || !u && t.name === r
                        })
                    } else o = a;
                    return s(o, t)
                }, findComponents: function (t) {
                    function e(t) {
                        var e = r + "Index", i = r + "Id", n = r + "Name";
                        return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
                            mainType: r,
                            index: t[e],
                            id: t[i],
                            name: t[n]
                        } : null
                    }

                    function i(e) {
                        return t.filter ? d(e, t.filter) : e
                    }

                    var n = t.query, r = t.mainType, a = e(n), o = a ? this.queryComponents(a) : this._componentsMap[r];
                    return i(s(o, t))
                }, eachComponent: function (t, e, i) {
                    var n = this._componentsMap;
                    if (typeof t === N) i = e, e = t, f(n, function (t, n) {
                        f(t, function (t, r) {
                            e.call(i, n, t, r)
                        })
                    }); else if (u.isString(t)) f(n[t], e, i); else if (g(t)) {
                        var r = this.findComponents(t);
                        f(r, e, i)
                    }
                }, getSeriesByName: function (t) {
                    var e = this._componentsMap[j];
                    return d(e, function (e) {
                        return e.name === t
                    })
                }, getSeriesByIndex: function (t) {
                    return this._componentsMap[j][t]
                }, getSeriesByType: function (t) {
                    var e = this._componentsMap[j];
                    return d(e, function (e) {
                        return e.subType === t
                    })
                }, getSeries: function () {
                    return this._componentsMap[j].slice()
                }, eachSeries: function (t, e) {
                    l(this), f(this._seriesIndices, function (i) {
                        var n = this._componentsMap[j][i];
                        t.call(e, n, i)
                    }, this)
                }, eachRawSeries: function (t, e) {
                    f(this._componentsMap[j], t, e)
                }, eachSeriesByType: function (t, e, i) {
                    l(this), f(this._seriesIndices, function (n) {
                        var r = this._componentsMap[j][n];
                        r.subType === t && e.call(i, r, n)
                    }, this)
                }, eachRawSeriesByType: function (t, e, i) {
                    return f(this.getSeriesByType(t), e, i)
                }, isSeriesFiltered: function (t) {
                    return l(this), u[re](this._seriesIndices, t.componentIndex) < 0
                }, filterSeries: function (t, e) {
                    l(this);
                    var i = d(this._componentsMap[j], t, e);
                    this._seriesIndices = o(i)
                }, restoreData: function () {
                    var t = this._componentsMap;
                    this._seriesIndices = o(t[j]);
                    var e = [];
                    f(t, function (t, i) {
                        e.push(i)
                    }), y.topologicalTravel(e, y.getAllClassMainTypes(), function (e) {
                        f(t[e], function (t) {
                            t.restoreData()
                        })
                    })
                }
            });
        return u.mixin(b, t("./mixin/colorPalette")), b
    }), e("echarts/CoordinateSystem", [Ne, Be], function (t) {
        function e() {
            this._coordinateSystems = []
        }

        var i = t(Be), n = {};
        return e[fe] = {
            constructor: e, create: function (t, e) {
                var r = [];
                i.each(n, function (i) {
                    var n = i[ee](t, e);
                    r = r.concat(n || [])
                }), this._coordinateSystems = r
            }, update: function (t, e) {
                i.each(this._coordinateSystems, function (i) {
                    i[te] && i[te](t, e)
                })
            }, getCoordinateSystems: function () {
                return this._coordinateSystems.slice()
            }
        }, e.register = function (t, e) {
            n[t] = e
        }, e.get = function (t) {
            return n[t]
        }, e
    }), e("echarts/ExtensionAPI", [Ne, Be], function (t) {
        function e(t) {
            i.each(n, function (e) {
                this[e] = i.bind(t[e], t)
            }, this)
        }

        var i = t(Be),
            n = ["getDom", "getZr", Me, we, "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", De, "getOption"];
        return e
    }), e("echarts/model/OptionManager", [Ne, Be, "../util/model", "./Component"], function (t) {
        function e(t) {
            this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
        }

        function i(t, e, i) {
            var n, r, a = [], o = [], l = t.timeline;
            if (t.baseOption && (r = t.baseOption), (l || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
                r = r || {};
                var u = t.media;
                c(u, function (t) {
                    t && t.option && (t.query ? o.push(t) : n || (n = t))
                })
            }
            return r || (r = t), r.timeline || (r.timeline = l), c([r].concat(a).concat(s.map(o, function (t) {
                return t.option
            })), function (t) {
                c(e, function (e) {
                    e(t, i)
                })
            }), {baseOption: r, timelineOptions: a, mediaDefault: n, mediaList: o}
        }

        function n(t, e, i) {
            var n = {width: e, height: i, aspectratio: e / i}, a = !0;
            return s.each(t, function (t, e) {
                var i = e.match(p);
                if (i && i[1] && i[2]) {
                    var o = i[1], s = i[2][de]();
                    r(n[s], t, o) || (a = !1)
                }
            }), a
        }

        function r(t, e, i) {
            return "min" === i ? t >= e : "max" === i ? e >= t : t === e
        }

        function a(t, e) {
            return t.join(",") === e.join(",")
        }

        function o(t, e) {
            e = e || {}, c(e, function (e, i) {
                if (null != e) {
                    var n = t[i];
                    if (u.hasClass(i)) {
                        e = l.normalizeToArray(e), n = l.normalizeToArray(n);
                        var r = l.mappingToExists(n, e);
                        t[i] = f(r, function (t) {
                            return t.option && t.exist ? d(t.exist, t.option, !0) : t.exist || t.option
                        })
                    } else t[i] = d(n, e, !0)
                }
            })
        }

        var s = t(Be), l = t("../util/model"), u = t("./Component"), c = s.each, h = s.clone, f = s.map, d = s.merge,
            p = /^(min|max)?(.+)$/;
        return e[fe] = {
            constructor: e, setOption: function (t, e) {
                t = h(t, !0);
                var n = this._optionBackup, r = i.call(this, t, e, !n);
                this._newBaseOption = r.baseOption, n ? (o(n.baseOption, r.baseOption), r.timelineOptions[ae] && (n.timelineOptions = r.timelineOptions), r.mediaList[ae] && (n.mediaList = r.mediaList), r.mediaDefault && (n.mediaDefault = r.mediaDefault)) : this._optionBackup = r
            }, mountOption: function (t) {
                var e = this._optionBackup;
                return this._timelineOptions = f(e.timelineOptions, h), this._mediaList = f(e.mediaList, h), this._mediaDefault = h(e.mediaDefault), this._currentMediaIndices = [], h(t ? e.baseOption : this._newBaseOption)
            }, getTimelineOption: function (t) {
                var e, i = this._timelineOptions;
                if (i[ae]) {
                    var n = t.getComponent("timeline");
                    n && (e = h(i[n.getCurrentIndex()], !0))
                }
                return e
            }, getMediaOption: function () {
                var t = this._api[Me](), e = this._api[we](), i = this._mediaList, r = this._mediaDefault, o = [],
                    s = [];
                if (!i[ae] && !r) return s;
                for (var l = 0, u = i[ae]; u > l; l++) n(i[l].query, t, e) && o.push(l);
                return !o[ae] && r && (o = [-1]), o[ae] && !a(o, this._currentMediaIndices) && (s = f(o, function (t) {
                    return h(-1 === t ? r.option : i[t].option)
                })), this._currentMediaIndices = o, s
            }
        }, e
    }), e("echarts/model/Component", [Ne, "./Model", Be, "../util/component", "../util/clazz", "../util/layout", "./mixin/boxLayout"], function (t) {
        function e(t) {
            var e = [];
            return n.each(u.getClassesByMainType(t), function (t) {
                r.apply(e, t[fe].dependencies || [])
            }), n.map(e, function (t) {
                return s.parseClassType(t).main
            })
        }

        var i = t("./Model"), n = t(Be), r = Array[fe].push, a = t("../util/component"), s = t("../util/clazz"),
            l = t("../util/layout"), u = i[$]({
                type: "component",
                id: "",
                name: "",
                mainType: "",
                subType: "",
                componentIndex: 0,
                defaultOption: null,
                ecModel: null,
                dependentModels: [],
                uid: null,
                layoutMode: null,
                $constructor: function (t, e, n, r) {
                    i.call(this, t, e, n, r), this.uid = a.getUID("componentModel")
                },
                init: function (t, e, i) {
                    this.mergeDefaultAndTheme(t, i)
                },
                mergeDefaultAndTheme: function (t, e) {
                    var i = this.layoutMode, r = i ? l.getLayoutParams(t) : {}, a = e.getTheme();
                    n.merge(t, a.get(this.mainType)), n.merge(t, this.getDefaultOption()), i && l.mergeLayoutParam(t, r, i)
                },
                mergeOption: function (t) {
                    n.merge(this.option, t, !0);
                    var e = this.layoutMode;
                    e && l.mergeLayoutParam(this.option, t, e)
                },
                optionUpdated: function () {
                },
                getDefaultOption: function () {
                    if (!this.hasOwnProperty("__defaultOption")) {
                        for (var t = [], e = this.constructor; e;) {
                            var i = e[fe].defaultOption;
                            i && t.push(i), e = e.superClass
                        }
                        for (var r = {}, a = t[ae] - 1; a >= 0; a--) r = n.merge(r, t[a], !0);
                        this.__defaultOption = r
                    }
                    return this.__defaultOption
                },
                getReferringComponents: function (t) {
                    return this[o].queryComponents({
                        mainType: t,
                        index: this.get(t + "Index", !0),
                        id: this.get(t + "Id", !0)
                    })
                }
            });
        return s.enableClassManagement(u, {registerWhenExtend: !0}), a.enableSubTypeDefaulter(u), a.enableTopologicalTravel(u, e), n.mixin(u, t("./mixin/boxLayout")), u
    }), e("echarts/model/Series", [Ne, Be, "../util/format", "../util/model", "./Component", "./mixin/colorPalette", ve], function (t) {
        var e = t(Be), i = t("../util/format"), n = t("../util/model"), r = t("./Component"),
            a = t("./mixin/colorPalette"), s = t(ve), l = i.encodeHTML, u = i.addCommas, h = r[$]({
                type: "series.__base__",
                seriesIndex: 0,
                coordinateSystem: null,
                defaultOption: null,
                legendDataProvider: null,
                visualColorAccessPath: "itemStyle.normal.color",
                init: function (t, e, i) {
                    this[W] = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
                },
                mergeDefaultAndTheme: function (t, i) {
                    e.merge(t, i.getTheme().get(this.subType)), e.merge(t, this.getDefaultOption()), n.defaultEmphasis(t.label, n.LABEL_OPTIONS), this.fillDataTextStyle(t.data)
                },
                mergeOption: function (t, i) {
                    t = e.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                    var n = this.getInitialData(t, i);
                    n && (this._data = n, this._dataBeforeProcessed = n.cloneShallow())
                },
                fillDataTextStyle: function (t) {
                    if (t) for (var e = 0; e < t[ae]; e++) t[e] && t[e].label && n.defaultEmphasis(t[e].label, n.LABEL_OPTIONS)
                },
                getInitialData: function () {
                },
                getData: function (t) {
                    return null == t ? this._data : this._data.getLinkedData(t)
                },
                setData: function (t) {
                    this._data = t
                },
                getRawData: function () {
                    return this._dataBeforeProcessed
                },
                coordDimToDataDim: function (t) {
                    return [t]
                },
                dataDimToCoordDim: function (t) {
                    return t
                },
                getBaseAxis: function () {
                    var t = this[Re];
                    return t && t.getBaseAxis && t.getBaseAxis()
                },
                formatTooltip: function (t, n) {
                    function r(t) {
                        var r = [];
                        return e.each(t, function (t, e) {
                            var o, s = a.getDimensionInfo(e), l = s && s.type;
                            o = l === v ? t + "" : "time" === l ? n ? "" : i.formatTime("yyyy/mm/dd hh:mm:ss", t) : u(t), o && r.push(o)
                        }), r.join(", ")
                    }

                    var a = this._data, o = this.getRawValue(t), s = e[F](o) ? r(o) : u(o), c = a[L](t),
                        h = a[ie](t, "color"),
                        f = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + h + '"></span>',
                        d = this.name;
                    return "\x00-" === d && (d = ""), n ? f + l(this.name) + " : " + s : (d && l(d) + "<br />") + f + (c ? l(c) + " : " + s : s)
                },
                ifEnableAnimation: function () {
                    if (s.node) return !1;
                    var t = this[c](ue);
                    return t && this[Ie]().count() > this[c]("animationThreshold") && (t = !1), t
                },
                restoreData: function () {
                    this._data = this._dataBeforeProcessed.cloneShallow()
                },
                getColorFromPalette: function (t, e) {
                    var i = this[o], n = a.getColorFromPalette.call(this, t, e);
                    return n || (n = i.getColorFromPalette(t, e)), n
                },
                getAxisTooltipDataIndex: null,
                getTooltipPosition: null
            });
        return e.mixin(h, n.dataFormatMixin), e.mixin(h, a), h
    }), e("echarts/view/Chart", [Ne, "zrender/container/Group", "../util/component", "../util/clazz", "../util/model", Be], function (t) {
        function e() {
            this.group = new r, this.uid = a.getUID("viewChart")
        }

        function i(t, e) {
            if (t && (t[Y](e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) i(t.childAt(n), e)
        }

        function n(t, e, n) {
            var r = s.queryDataIndex(t, e);
            null != r ? u.each(s.normalizeToArray(r), function (e) {
                i(t[A](e), n)
            }) : t[l](function (t) {
                i(t, n)
            })
        }

        var r = t("zrender/container/Group"), a = t("../util/component"), o = t("../util/clazz"),
            s = t("../util/model"), u = t(Be);
        e[fe] = {
            type: "chart", init: function () {
            }, render: function () {
            }, highlight: function (t, e, i, r) {
                n(t[Ie](), r, "emphasis")
            }, downplay: function (t, e, i, r) {
                n(t[Ie](), r, k)
            }, remove: function () {
                this.group[Ee]()
            }, dispose: function () {
            }
        };
        var c = e[fe];
        return c.updateView = c.updateLayout = c.updateVisual = function (t, e, i, n) {
            this.render(t, e, i, n)
        }, o.enableClassExtend(e, ["dispose"]), o.enableClassManagement(e, {registerWhenExtend: !0}), e
    }), e("echarts/view/Component", [Ne, "zrender/container/Group", "../util/component", "../util/clazz"], function (t) {
        var e = t("zrender/container/Group"), i = t("../util/component"), n = t("../util/clazz"), r = function () {
            this.group = new e, this.uid = i.getUID("viewComponent")
        };
        r[fe] = {
            constructor: r, init: function () {
            }, render: function () {
            }, dispose: function () {
            }
        };
        var a = r[fe];
        return a.updateView = a.updateLayout = a.updateVisual = function () {
        }, n.enableClassExtend(r), n.enableClassManagement(r, {registerWhenExtend: !0}), r
    }), e("echarts/util/model", [Ne, "./format", "./number", "../model/Model", Be], function (t) {
        function e(t, e) {
            return t && t.hasOwnProperty(e)
        }

        var i = t("./format"), n = t("./number"), r = t("../model/Model"), a = t(Be), o = {};
        return o.normalizeToArray = function (t) {
            return t instanceof Array ? t : null == t ? [] : [t]
        }, o.defaultEmphasis = function (t, e) {
            if (t) {
                var i = t.emphasis = t.emphasis || {}, n = t[k] = t[k] || {};
                a.each(e, function (t) {
                    var e = a[S](i[t], n[t]);
                    null != e && (i[t] = e)
                })
            }
        }, o.LABEL_OPTIONS = [ye, "show", ze, "distance", "formatter"], o.getDataItemValue = function (t) {
            return t && (null == t.value ? t : t.value)
        }, o.isDataItemOption = function (t) {
            return a[K](t) && !(t instanceof Array)
        }, o.converDataValue = function (t, e) {
            var i = e && e.type;
            return i === v ? t : ("time" !== i || isFinite(t) || null == t || "-" === t || (t = +n.parseDate(t)), null == t || "" === t ? 0 / 0 : +t)
        }, o.createDataFormatModel = function (t, e) {
            var i = new r;
            return a.mixin(i, o.dataFormatMixin), i[W] = e[W], i.name = e.name || "", i.mainType = e.mainType, i.subType = e.subType, i[Ie] = function () {
                return t
            }, i
        }, o.dataFormatMixin = {
            getDataParams: function (t, e) {
                var i = this[Ie](e), n = this[W], r = this.name, a = this.getRawValue(t, e), o = i.getRawIndex(t),
                    s = i[L](t, !0), l = i.getRawDataItem(t);
                return {
                    componentType: this.mainType,
                    componentSubType: this.subType,
                    seriesType: this.mainType === j ? this.subType : null,
                    seriesIndex: n,
                    seriesName: r,
                    name: s,
                    dataIndex: o,
                    data: l,
                    dataType: e,
                    value: a,
                    color: i[ie](t, "color"),
                    $vars: ["seriesName", "name", "value"]
                }
            }, getFormattedLabel: function (t, e, n, r) {
                e = e || k;
                var a = this[Ie](n), o = a[M](t), s = this[q](t, n);
                null != r && s.value instanceof Array && (s.value = s.value[r]);
                var l = o.get(["label", e, "formatter"]);
                return typeof l === N ? (s.status = e, l(s)) : typeof l === he ? i.formatTpl(l, s) : void 0
            }, getRawValue: function (t, e) {
                var i = this[Ie](e), n = i.getRawDataItem(t);
                return null != n ? !a[K](n) || n instanceof Array ? n : n.value : void 0
            }, formatTooltip: a.noop
        }, o.mappingToExists = function (t, e) {
            e = (e || []).slice();
            var i = a.map(t || [], function (t) {
                return {exist: t}
            });
            return a.each(e, function (t, n) {
                if (a[K](t)) {
                    for (var r = 0; r < i[ae]; r++) if (!i[r].option && null != t.id && i[r].exist.id === t.id + "") return i[r].option = t, void (e[n] = null);
                    for (var r = 0; r < i[ae]; r++) {
                        var s = i[r].exist;
                        if (!(i[r].option || null != s.id && null != t.id || null == t.name || o.isIdInner(t) || o.isIdInner(s) || s.name !== t.name + "")) return i[r].option = t, void (e[n] = null)
                    }
                }
            }), a.each(e, function (t) {
                if (a[K](t)) {
                    for (var e = 0; e < i[ae]; e++) {
                        var n = i[e].exist;
                        if (!i[e].option && !o.isIdInner(n) && null == t.id) {
                            i[e].option = t;
                            break
                        }
                    }
                    e >= i[ae] && i.push({option: t})
                }
            }), i
        }, o.isIdInner = function (t) {
            return a[K](t) && t.id && 0 === (t.id + "")[re]("\x00_ec_\x00")
        }, o.compressBatches = function (t, e) {
            function i(t, e, i) {
                for (var n = 0, r = t[ae]; r > n; n++) for (var a = t[n].seriesId, s = o.normalizeToArray(t[n][ne]), l = i && i[a], u = 0, c = s[ae]; c > u; u++) {
                    var h = s[u];
                    l && l[h] ? l[h] = null : (e[a] || (e[a] = {}))[h] = 1
                }
            }

            function n(t, e) {
                var i = [];
                for (var r in t) if (t.hasOwnProperty(r) && null != t[r]) if (e) i.push(+r); else {
                    var a = n(t[r], !0);
                    a[ae] && i.push({seriesId: r, dataIndex: a})
                }
                return i
            }

            var r = {}, a = {};
            return i(t || [], r), i(e || [], a, r), [n(r), n(a)]
        }, o.queryDataIndex = function (t, e) {
            return null != e.dataIndexInside ? e.dataIndexInside : null != e[ne] ? a[F](e[ne]) ? a.map(e[ne], function (e) {
                return t.indexOfRawIndex(e)
            }) : t.indexOfRawIndex(e[ne]) : null != e.name ? a[F](e.name) ? a.map(e.name, function (e) {
                return t.indexOfName(e)
            }) : t.indexOfName(e.name) : void 0
        }, o.parseFinder = function (t, i, n) {
            if (a.isString(i)) {
                var r = {};
                r[i + "Index"] = 0, i = r
            }
            var o = n && n.defaultMainType;
            !o || e(i, o + "Index") || e(i, o + "Id") || e(i, o + "Name") || (i[o + "Index"] = 0);
            var s = {};
            return a.each(i, function (e, n) {
                var e = i[n];
                if (n === ne || "dataIndexInside" === n) return void (s[n] = e);
                var r = n.match(/^(\w+)(Index|Id|Name)$/) || [], a = r[1], o = r[2];
                if (a && o) {
                    var l = {mainType: a};
                    l[o[de]()] = e;
                    var u = t.queryComponents(l);
                    s[a + "Models"] = u, s[a + "Model"] = u[0]
                }
            }), s
        }, o
    }), e("zrender/tool/color", [Ne], function () {
        function t(t) {
            return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
        }

        function e(t) {
            return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
        }

        function i(t) {
            return 0 > t ? 0 : t > 1 ? 1 : t
        }

        function n(e) {
            return t(e[ae] && "%" === e.charAt(e[ae] - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
        }

        function r(t) {
            return i(t[ae] && "%" === t.charAt(t[ae] - 1) ? parseFloat(t) / 100 : parseFloat(t))
        }

        function a(t, e, i) {
            return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        function o(t, e, i) {
            return t + (e - t) * i
        }

        function s(t) {
            if (t) {
                t += "";
                var e = t[V](/ /g, "")[de]();
                if (e in g) return g[e].slice();
                if ("#" !== e.charAt(0)) {
                    var i = e[re]("("), a = e[re](")");
                    if (-1 !== i && a + 1 === e[ae]) {
                        var o = e.substr(0, i), s = e.substr(i + 1, a - (i + 1)).split(","), u = 1;
                        switch (o) {
                            case"rgba":
                                if (4 !== s[ae]) return;
                                u = r(s.pop());
                            case"rgb":
                                if (3 !== s[ae]) return;
                                return [n(s[0]), n(s[1]), n(s[2]), u];
                            case"hsla":
                                if (4 !== s[ae]) return;
                                return s[3] = r(s[3]), l(s);
                            case"hsl":
                                if (3 !== s[ae]) return;
                                return l(s);
                            default:
                                return
                        }
                    }
                } else {
                    if (4 === e[ae]) {
                        var c = parseInt(e.substr(1), 16);
                        if (!(c >= 0 && 4095 >= c)) return;
                        return [(3840 & c) >> 4 | (3840 & c) >> 8, 240 & c | (240 & c) >> 4, 15 & c | (15 & c) << 4, 1]
                    }
                    if (7 === e[ae]) {
                        var c = parseInt(e.substr(1), 16);
                        if (!(c >= 0 && 16777215 >= c)) return;
                        return [(16711680 & c) >> 16, (65280 & c) >> 8, 255 & c, 1]
                    }
                }
            }
        }

        function l(e) {
            var i = (parseFloat(e[0]) % 360 + 360) % 360 / 360, n = r(e[1]), o = r(e[2]),
                s = .5 >= o ? o * (n + 1) : o + n - o * n, l = 2 * o - s,
                u = [t(255 * a(l, s, i + 1 / 3)), t(255 * a(l, s, i)), t(255 * a(l, s, i - 1 / 3))];
            return 4 === e[ae] && (u[3] = e[3]), u
        }

        function u(t) {
            if (t) {
                var e, i, n = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(n, r, a), s = Math.max(n, r, a),
                    l = s - o, u = (s + o) / 2;
                if (0 === l) e = 0, i = 0; else {
                    i = .5 > u ? l / (s + o) : l / (2 - s - o);
                    var c = ((s - n) / 6 + l / 2) / l, h = ((s - r) / 6 + l / 2) / l, f = ((s - a) / 6 + l / 2) / l;
                    n === s ? e = f - h : r === s ? e = 1 / 3 + c - f : a === s && (e = 2 / 3 + h - c), 0 > e && (e += 1), e > 1 && (e -= 1)
                }
                var d = [360 * e, i, u];
                return null != t[3] && d.push(t[3]), d
            }
        }

        function c(t, e) {
            var i = s(t);
            if (i) {
                for (var n = 0; 3 > n; n++) i[n] = 0 > e ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0;
                return m(i, 4 === i[ae] ? "rgba" : "rgb")
            }
        }

        function h(t) {
            var e = s(t);
            return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
        }

        function f(e, i, n) {
            if (i && i[ae] && e >= 0 && 1 >= e) {
                n = n || [0, 0, 0, 0];
                var r = e * (i[ae] - 1), a = Math.floor(r), s = Math.ceil(r), l = i[a], u = i[s], c = r - a;
                return n[0] = t(o(l[0], u[0], c)), n[1] = t(o(l[1], u[1], c)), n[2] = t(o(l[2], u[2], c)), n[3] = t(o(l[3], u[3], c)), n
            }
        }

        function d(e, n, r) {
            if (n && n[ae] && e >= 0 && 1 >= e) {
                var a = e * (n[ae] - 1), l = Math.floor(a), u = Math.ceil(a), c = s(n[l]), h = s(n[u]), f = a - l,
                    d = m([t(o(c[0], h[0], f)), t(o(c[1], h[1], f)), t(o(c[2], h[2], f)), i(o(c[3], h[3], f))], "rgba");
                return r ? {color: d, leftIndex: l, rightIndex: u, value: a} : d
            }
        }

        function p(t, i, n, a) {
            return t = s(t), t ? (t = u(t), null != i && (t[0] = e(i)), null != n && (t[1] = r(n)), null != a && (t[2] = r(a)), m(l(t), "rgba")) : void 0
        }

        function v(t, e) {
            return t = s(t), t && null != e ? (t[3] = i(e), m(t, "rgba")) : void 0
        }

        function m(t, e) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (i += "," + t[3]), e + "(" + i + ")"
        }

        var g = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        };
        return {
            parse: s,
            lift: c,
            toHex: h,
            fastMapToColor: f,
            mapToColor: d,
            modifyHSL: p,
            modifyAlpha: v,
            stringify: m
        }
    }), e("zrender/zrender", [Ne, "./core/guid", "./core/env", "./Handler", "./Storage", "./animation/Animation", "./dom/HandlerProxy", "./Painter"], function (t) {
        function e(t) {
            delete c[t]
        }

        var i = t("./core/guid"), n = t("./core/env"), r = t("./Handler"), a = t("./Storage"),
            o = t("./animation/Animation"), s = t("./dom/HandlerProxy"), l = !n[le], u = {canvas: t("./Painter")},
            c = {}, h = {};
        h.version = "3.2.0", h.init = function (t, e) {
            var n = new f(i(), t, e);
            return c[n.id] = n, n
        }, h.dispose = function (t) {
            if (t) t.dispose(); else {
                for (var e in c) c.hasOwnProperty(e) && c[e].dispose();
                c = {}
            }
            return h
        }, h.getInstance = function (t) {
            return c[t]
        }, h.registerPainter = function (t, e) {
            u[t] = e
        };
        var f = function (t, e, i) {
            i = i || {}, this.dom = e, this.id = t;
            var c = this, h = new a, f = i.renderer;
            if (l) {
                if (!u.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                f = "vml"
            } else f && u[f] || (f = "canvas");
            var d = new u[f](e, h, i);
            this[se] = h, this.painter = d;
            var p = n.node ? null : new s(d.getViewportRoot());
            this.handler = new r(h, d, p, d.root), this[ue] = new o({
                stage: {
                    update: function () {
                        c._needsRefresh && c.refreshImmediately(), c._needsRefreshHover && c.refreshHoverImmediately()
                    }
                }
            }), this[ue].start(), this._needsRefresh;
            var v = h.delFromMap, m = h.addToMap;
            h.delFromMap = function (t) {
                var e = h.get(t);
                v.call(h, t), e && e.removeSelfFromZr(c)
            }, h.addToMap = function (t) {
                m.call(h, t), t.addSelfToZr(c)
            }
        };
        return f[fe] = {
            constructor: f, getId: function () {
                return this.id
            }, add: function (t) {
                this[se].addRoot(t), this._needsRefresh = !0
            }, remove: function (t) {
                this[se].delRoot(t), this._needsRefresh = !0
            }, configLayer: function (t, e) {
                this.painter.configLayer(t, e), this._needsRefresh = !0
            }, refreshImmediately: function () {
                this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
            }, refresh: function () {
                this._needsRefresh = !0
            }, addHover: function (t, e) {
                this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
            }, removeHover: function (t) {
                this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
            }, clearHover: function () {
                this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
            }, refreshHover: function () {
                this._needsRefreshHover = !0
            }, refreshHoverImmediately: function () {
                this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
            }, resize: function (t) {
                t = t || {}, this.painter[ce](t.width, t[Ce]), this.handler[ce]()
            }, clearAnimation: function () {
                this[ue].clear()
            }, getWidth: function () {
                return this.painter[Me]()
            }, getHeight: function () {
                return this.painter[we]()
            }, pathToImage: function (t, e, n) {
                var r = i();
                return this.painter.pathToImage(r, t, e, n)
            }, setCursorStyle: function (t) {
                this.handler.setCursorStyle(t)
            }, on: function (t, e, i) {
                this.handler.on(t, e, i)
            }, off: function (t, e) {
                this.handler.off(t, e)
            }, trigger: function (t, e) {
                this.handler[Y](t, e)
            }, clear: function () {
                this[se].delRoot(), this.painter.clear()
            }, dispose: function () {
                this[ue].stop(), this.clear(), this[se].dispose(), this.painter.dispose(), this.handler.dispose(), this[ue] = this[se] = this.painter = this.handler = null, e(this.id)
            }
        }, h
    }), e("zrender/mixin/Eventful", [Ne], function () {
        var t = Array[fe].slice, e = function () {
            this._$handlers = {}
        };
        return e[fe] = {
            constructor: e, one: function (t, e, i) {
                var n = this._$handlers;
                if (!e || !t) return this;
                n[t] || (n[t] = []);
                for (var r = 0; r < n[t][ae]; r++) if (n[t][r].h === e) return this;
                return n[t].push({h: e, one: !0, ctx: i || this}), this
            }, on: function (t, e, i) {
                var n = this._$handlers;
                if (!e || !t) return this;
                n[t] || (n[t] = []);
                for (var r = 0; r < n[t][ae]; r++) if (n[t][r].h === e) return this;
                return n[t].push({h: e, one: !1, ctx: i || this}), this
            }, isSilent: function (t) {
                var e = this._$handlers;
                return e[t] && e[t][ae]
            }, off: function (t, e) {
                var i = this._$handlers;
                if (!t) return this._$handlers = {}, this;
                if (e) {
                    if (i[t]) {
                        for (var n = [], r = 0, a = i[t][ae]; a > r; r++) i[t][r].h != e && n.push(i[t][r]);
                        i[t] = n
                    }
                    i[t] && 0 === i[t][ae] && delete i[t]
                } else delete i[t];
                return this
            }, trigger: function (e) {
                if (this._$handlers[e]) {
                    var i = arguments, n = i[ae];
                    n > 3 && (i = t.call(i, 1));
                    for (var r = this._$handlers[e], a = r[ae], o = 0; a > o;) {
                        switch (n) {
                            case 1:
                                r[o].h.call(r[o].ctx);
                                break;
                            case 2:
                                r[o].h.call(r[o].ctx, i[1]);
                                break;
                            case 3:
                                r[o].h.call(r[o].ctx, i[1], i[2]);
                                break;
                            default:
                                r[o].h.apply(r[o].ctx, i)
                        }
                        r[o].one ? (r[U](o, 1), a--) : o++
                    }
                }
                return this
            }, triggerWithContext: function (e) {
                if (this._$handlers[e]) {
                    var i = arguments, n = i[ae];
                    n > 4 && (i = t.call(i, 1, i[ae] - 1));
                    for (var r = i[i[ae] - 1], a = this._$handlers[e], o = a[ae], s = 0; o > s;) {
                        switch (n) {
                            case 1:
                                a[s].h.call(r);
                                break;
                            case 2:
                                a[s].h.call(r, i[1]);
                                break;
                            case 3:
                                a[s].h.call(r, i[1], i[2]);
                                break;
                            default:
                                a[s].h.apply(r, i)
                        }
                        a[s].one ? (a[U](s, 1), o--) : s++
                    }
                }
                return this
            }
        }, e
    }), e("echarts/visual/seriesColor", [Ne, "zrender/graphic/Gradient"], function (t) {
        var e = t("zrender/graphic/Gradient");
        return function (t) {
            function i(i) {
                var n = (i.visualColorAccessPath || "itemStyle.normal.color").split("."), r = i[Ie](),
                    a = i.get(n) || i.getColorFromPalette(i.get("name"));
                r.setVisual("color", a), t.isSeriesFiltered(i) || (typeof a !== N || a instanceof e || r.each(function (t) {
                    r.setItemVisual(t, "color", a(i[q](t)))
                }), r.each(function (t) {
                    var e = r[M](t), i = e.get(n, !0);
                    null != i && r.setItemVisual(t, "color", i)
                }))
            }

            t.eachRawSeries(i)
        }
    }), e("zrender/core/timsort", [], function () {
        function t(t) {
            for (var e = 0; t >= l;) e |= 1 & t, t >>= 1;
            return t + e
        }

        function e(t, e, n, r) {
            var a = e + 1;
            if (a === n) return 1;
            if (r(t[a++], t[e]) < 0) {
                for (; n > a && r(t[a], t[a - 1]) < 0;) a++;
                i(t, e, a)
            } else for (; n > a && r(t[a], t[a - 1]) >= 0;) a++;
            return a - e
        }

        function i(t, e, i) {
            for (i--; i > e;) {
                var n = t[e];
                t[e++] = t[i], t[i--] = n
            }
        }

        function n(t, e, i, n, r) {
            for (n === e && n++; i > n; n++) {
                for (var a, o = t[n], s = e, l = n; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
                var u = n - s;
                switch (u) {
                    case 3:
                        t[s + 3] = t[s + 2];
                    case 2:
                        t[s + 2] = t[s + 1];
                    case 1:
                        t[s + 1] = t[s];
                        break;
                    default:
                        for (; u > 0;) t[s + u] = t[s + u - 1], u--
                }
                t[s] = o
            }
        }

        function r(t, e, i, n, r, a) {
            var o = 0, s = 0, l = 1;
            if (a(t, e[i + r]) > 0) {
                for (s = n - r; s > l && a(t, e[i + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
                l > s && (l = s), o += r, l += r
            } else {
                for (s = r + 1; s > l && a(t, e[i + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
                l > s && (l = s);
                var u = o;
                o = r - l, l = r - u
            }
            for (o++; l > o;) {
                var c = o + (l - o >>> 1);
                a(t, e[i + c]) > 0 ? o = c + 1 : l = c
            }
            return l
        }

        function a(t, e, i, n, r, a) {
            var o = 0, s = 0, l = 1;
            if (a(t, e[i + r]) < 0) {
                for (s = r + 1; s > l && a(t, e[i + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
                l > s && (l = s);
                var u = o;
                o = r - l, l = r - u
            } else {
                for (s = n - r; s > l && a(t, e[i + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
                l > s && (l = s), o += r, l += r
            }
            for (o++; l > o;) {
                var c = o + (l - o >>> 1);
                a(t, e[i + c]) < 0 ? l = c : o = c + 1
            }
            return l
        }

        function o(t, e) {
            function i(t, e) {
                f[y] = t, d[y] = e, y += 1
            }

            function n() {
                for (; y > 1;) {
                    var t = y - 2;
                    if (t >= 1 && d[t - 1] <= d[t] + d[t + 1] || t >= 2 && d[t - 2] <= d[t] + d[t - 1]) d[t - 1] < d[t + 1] && t--; else if (d[t] > d[t + 1]) break;
                    s(t)
                }
            }

            function o() {
                for (; y > 1;) {
                    var t = y - 2;
                    t > 0 && d[t - 1] < d[t + 1] && t--, s(t)
                }
            }

            function s(i) {
                var n = f[i], o = d[i], s = f[i + 1], u = d[i + 1];
                d[i] = o + u, i === y - 3 && (f[i + 1] = f[i + 2], d[i + 1] = d[i + 2]), y--;
                var c = a(t[s], t, n, o, 0, e);
                n += c, o -= c, 0 !== o && (u = r(t[n + o - 1], t, s, u, u - 1, e), 0 !== u && (u >= o ? l(n, o, s, u) : h(n, o, s, u)))
            }

            function l(i, n, o, s) {
                var l = 0;
                for (l = 0; n > l; l++) _[l] = t[i + l];
                var c = 0, h = o, f = i;
                if (t[f++] = t[h++], 0 !== --s) {
                    if (1 === n) {
                        for (l = 0; s > l; l++) t[f + l] = t[h + l];
                        return void (t[f + s] = _[c])
                    }
                    for (var d, v, m, g = p; ;) {
                        d = 0, v = 0, m = !1;
                        do if (e(t[h], _[c]) < 0) {
                            if (t[f++] = t[h++], v++, d = 0, 0 === --s) {
                                m = !0;
                                break
                            }
                        } else if (t[f++] = _[c++], d++, v = 0, 1 === --n) {
                            m = !0;
                            break
                        } while (g > (d | v));
                        if (m) break;
                        do {
                            if (d = a(t[h], _, c, n, 0, e), 0 !== d) {
                                for (l = 0; d > l; l++) t[f + l] = _[c + l];
                                if (f += d, c += d, n -= d, 1 >= n) {
                                    m = !0;
                                    break
                                }
                            }
                            if (t[f++] = t[h++], 0 === --s) {
                                m = !0;
                                break
                            }
                            if (v = r(_[c], t, h, s, 0, e), 0 !== v) {
                                for (l = 0; v > l; l++) t[f + l] = t[h + l];
                                if (f += v, h += v, s -= v, 0 === s) {
                                    m = !0;
                                    break
                                }
                            }
                            if (t[f++] = _[c++], 1 === --n) {
                                m = !0;
                                break
                            }
                            g--
                        } while (d >= u || v >= u);
                        if (m) break;
                        0 > g && (g = 0), g += 2
                    }
                    if (p = g, 1 > p && (p = 1), 1 === n) {
                        for (l = 0; s > l; l++) t[f + l] = t[h + l];
                        t[f + s] = _[c]
                    } else {
                        if (0 === n) throw new Error;
                        for (l = 0; n > l; l++) t[f + l] = _[c + l]
                    }
                } else for (l = 0; n > l; l++) t[f + l] = _[c + l]
            }

            function h(i, n, o, s) {
                var l = 0;
                for (l = 0; s > l; l++) _[l] = t[o + l];
                var c = i + n - 1, h = s - 1, f = o + s - 1, d = 0, v = 0;
                if (t[f--] = t[c--], 0 !== --n) {
                    if (1 === s) {
                        for (f -= n, c -= n, v = f + 1, d = c + 1, l = n - 1; l >= 0; l--) t[v + l] = t[d + l];
                        return void (t[f] = _[h])
                    }
                    for (var m = p; ;) {
                        var g = 0, y = 0, x = !1;
                        do if (e(_[h], t[c]) < 0) {
                            if (t[f--] = t[c--], g++, y = 0, 0 === --n) {
                                x = !0;
                                break
                            }
                        } else if (t[f--] = _[h--], y++, g = 0, 1 === --s) {
                            x = !0;
                            break
                        } while (m > (g | y));
                        if (x) break;
                        do {
                            if (g = n - a(_[h], t, i, n, n - 1, e), 0 !== g) {
                                for (f -= g, c -= g, n -= g, v = f + 1, d = c + 1, l = g - 1; l >= 0; l--) t[v + l] = t[d + l];
                                if (0 === n) {
                                    x = !0;
                                    break
                                }
                            }
                            if (t[f--] = _[h--], 1 === --s) {
                                x = !0;
                                break
                            }
                            if (y = s - r(t[c], _, 0, s, s - 1, e), 0 !== y) {
                                for (f -= y, h -= y, s -= y, v = f + 1, d = h + 1, l = 0; y > l; l++) t[v + l] = _[d + l];
                                if (1 >= s) {
                                    x = !0;
                                    break
                                }
                            }
                            if (t[f--] = t[c--], 0 === --n) {
                                x = !0;
                                break
                            }
                            m--
                        } while (g >= u || y >= u);
                        if (x) break;
                        0 > m && (m = 0), m += 2
                    }
                    if (p = m, 1 > p && (p = 1), 1 === s) {
                        for (f -= n, c -= n, v = f + 1, d = c + 1, l = n - 1; l >= 0; l--) t[v + l] = t[d + l];
                        t[f] = _[h]
                    } else {
                        if (0 === s) throw new Error;
                        for (d = f - (s - 1), l = 0; s > l; l++) t[d + l] = _[l]
                    }
                } else for (d = f - (s - 1), l = 0; s > l; l++) t[d + l] = _[l]
            }

            var f, d, p = u, v = 0, m = c, g = 0, y = 0;
            v = t[ae], 2 * c > v && (m = v >>> 1);
            var _ = [];
            g = 120 > v ? 5 : 1542 > v ? 10 : 119151 > v ? 19 : 40, f = [], d = [], this.mergeRuns = n, this.forceMergeRuns = o, this.pushRun = i
        }

        function s(i, r, a, s) {
            a || (a = 0), s || (s = i[ae]);
            var u = s - a;
            if (!(2 > u)) {
                var c = 0;
                if (l > u) return c = e(i, a, s, r), void n(i, a, s, a + c, r);
                var h = new o(i, r), f = t(u);
                do {
                    if (c = e(i, a, s, r), f > c) {
                        var d = u;
                        d > f && (d = f), n(i, a, a + d, a + c, r), c = d
                    }
                    h.pushRun(a, c), h.mergeRuns(), u -= c, a += c
                } while (0 !== u);
                h.forceMergeRuns()
            }
        }

        var l = 32, u = 7, c = 256;
        return s
    }), e("echarts/preprocessor/backwardCompat", [Ne, Be, "./helper/compatStyle"], function (t) {
        function e(t, e) {
            e = e.split(",");
            for (var i = t, n = 0; n < e[ae] && (i = i && i[e[n]], null != i); n++) ;
            return i
        }

        function i(t, e, i, n) {
            e = e.split(",");
            for (var r, a = t, o = 0; o < e[ae] - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
            (n || null == a[e[o]]) && (a[e[o]] = i)
        }

        function n(t) {
            u(o, function (e) {
                e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
            })
        }

        var r = t(Be), a = t("./helper/compatStyle"), o = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", _e]],
            s = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
            l = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"],
            u = r.each;
        return function (t) {
            u(t[j], function (t) {
                if (r[K](t)) {
                    var o = t.type;
                    if (a(t), ("pie" === o || "gauge" === o) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === o) {
                        var s = e(t, "pointer.color");
                        null != s && i(t, "itemStyle.normal.color", s)
                    }
                    for (var u = 0; u < l[ae]; u++) if (l[u] === t.type) {
                        n(t);
                        break
                    }
                }
            }), t.dataRange && (t.visualMap = t.dataRange), u(s, function (e) {
                var i = t[e];
                i && (r[F](i) || (i = [i]), u(i, function (t) {
                    n(t)
                }))
            })
        }
    }), e("echarts/loading/default", [Ne, "../util/graphic", Be], function (t) {
        var e = t("../util/graphic"), i = t(Be), n = Math.PI;
        return function (t, r) {
            r = r || {}, i[Oe](r, {
                text: "loading",
                color: "#c23531",
                textColor: "#000",
                maskColor: "rgba(255, 255, 255, 0.8)",
                zlevel: 0
            });
            var a = new e.Rect({style: {fill: r.maskColor}, zlevel: r[G], z: 1e4}), o = new e.Arc({
                shape: {startAngle: -n / 2, endAngle: -n / 2 + .1, r: 10},
                style: {stroke: r.color, lineCap: "round", lineWidth: 5},
                zlevel: r[G],
                z: 10001
            }), s = new e.Rect({
                style: {
                    fill: "none",
                    text: r.text,
                    textPosition: "right",
                    textDistance: 10,
                    textFill: r.textColor
                }, zlevel: r[G], z: 10001
            });
            o.animateShape(!0).when(1e3, {endAngle: 3 * n / 2}).start("circularInOut"), o.animateShape(!0).when(1e3, {startAngle: 3 * n / 2}).delay(300).start("circularInOut");
            var l = new e.Group;
            return l.add(o), l.add(s), l.add(a), l[ce] = function () {
                var e = t[Me]() / 2, i = t[we]() / 2;
                o.setShape({cx: e, cy: i});
                var n = o.shape.r;
                s.setShape({x: e - n, y: i - n, width: 2 * n, height: 2 * n}), a.setShape({
                    x: 0,
                    y: 0,
                    width: t[Me](),
                    height: t[we]()
                })
            }, l[ce](), l
        }
    }), e("echarts/data/List", [Ne, "../model/Model", "./DataDiffer", Be, "../util/model"], function (t) {
        function e(t) {
            return d[F](t) || (t = [t]), t
        }

        function i(t, e) {
            var i = t[p], n = new b(d.map(i, t.getDimensionInfo, t), t.hostModel);
            _(n, t);
            for (var r = n._storage = {}, a = t._storage, o = 0; o < i[ae]; o++) {
                var s = i[o], l = a[s];
                r[s] = d[re](e, s) >= 0 ? new l.constructor(a[s][ae]) : a[s]
            }
            return n
        }

        var n = s, r = typeof window === s ? global : window, a = typeof r.Float64Array === n ? Array : r.Float64Array,
            u = typeof r.Int32Array === n ? Array : r.Int32Array,
            c = {"float": a, "int": u, ordinal: Array, number: Array, time: Array}, h = t("../model/Model"),
            f = t("./DataDiffer"), d = t(Be), m = t("../util/model"), g = d[K],
            y = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"], _ = function (t, e) {
                d.each(y.concat(e.__wrappedMethods || []), function (i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                }), t.__wrappedMethods = e.__wrappedMethods
            }, b = function (t, e) {
                t = t || ["x", "y"];
                for (var i = {}, n = [], r = 0; r < t[ae]; r++) {
                    var a, o = {};
                    typeof t[r] === he ? (a = t[r], o = {
                        name: a,
                        stackable: !1,
                        type: "number"
                    }) : (o = t[r], a = o.name, o.type = o.type || B), n.push(a), i[a] = o
                }
                this[p] = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
            }, w = b[fe];
        w.type = "list", w.hasItemOption = !0, w.getDimension = function (t) {
            return isNaN(t) || (t = this[p][t] || t), t
        }, w.getDimensionInfo = function (t) {
            return d.clone(this._dimensionInfos[this.getDimension(t)])
        }, w.initData = function (t, e, i) {
            t = t || [], this._rawData = t;
            var n = this._storage = {}, r = this.indices = [], a = this[p], o = t[ae], s = this._dimensionInfos, l = [],
                u = {};
            e = e || [];
            for (var h = 0; h < a[ae]; h++) {
                var f = s[a[h]], d = c[f.type];
                n[a[h]] = new d(o)
            }
            var v = this;
            i || (v.hasItemOption = !1), i = i || function (t, e, i, n) {
                var r = m.getDataItemValue(t);
                return m.isDataItemOption(t) && (v.hasItemOption = !0), m.converDataValue(r instanceof Array ? r[n] : r, s[e])
            };
            for (var g = 0; g < t[ae]; g++) {
                for (var y = t[g], _ = 0; _ < a[ae]; _++) {
                    var x = a[_], b = n[x];
                    b[g] = i(y, x, g, _)
                }
                r.push(g)
            }
            for (var h = 0; h < t[ae]; h++) {
                e[h] || t[h] && null != t[h].name && (e[h] = t[h].name);
                var w = e[h] || "", M = t[h] && t[h].id;
                !M && w && (u[w] = u[w] || 0, M = w, u[w] > 0 && (M += "__ec__" + u[w]), u[w]++), M && (l[h] = M)
            }
            this._nameList = e, this._idList = l
        }, w.count = function () {
            return this.indices[ae]
        }, w.get = function (t, e, i) {
            var n = this._storage, r = this.indices[e];
            if (null == r) return 0 / 0;
            var a = n[t] && n[t][r];
            if (i) {
                var o = this._dimensionInfos[t];
                if (o && o.stackable) for (var s = this.stackedOn; s;) {
                    var l = s.get(t, e);
                    (a >= 0 && l > 0 || 0 >= a && 0 > l) && (a += l), s = s.stackedOn
                }
            }
            return a
        }, w.getValues = function (t, e, i) {
            var n = [];
            d[F](t) || (i = e, e = t, t = this[p]);
            for (var r = 0, a = t[ae]; a > r; r++) n.push(this.get(t[r], e, i));
            return n
        }, w.hasValue = function (t) {
            for (var e = this[p], i = this._dimensionInfos, n = 0, r = e[ae]; r > n; n++) if (i[e[n]].type !== v && isNaN(this.get(e[n], t))) return !1;
            return !0
        }, w.getDataExtent = function (t, e) {
            t = this.getDimension(t);
            var i = this._storage[t], n = this.getDimensionInfo(t);
            e = n && n.stackable && e;
            var r, a = (this._extent || (this._extent = {}))[t + !!e];
            if (a) return a;
            if (i) {
                for (var o = 1 / 0, s = -1 / 0, l = 0, u = this.count(); u > l; l++) r = this.get(t, l, e), o > r && (o = r), r > s && (s = r);
                return this._extent[t + !!e] = [o, s]
            }
            return [1 / 0, -1 / 0]
        }, w.getSum = function (t, e) {
            var i = this._storage[t], n = 0;
            if (i) for (var r = 0, a = this.count(); a > r; r++) {
                var o = this.get(t, r, e);
                isNaN(o) || (n += o)
            }
            return n
        }, w[re] = function (t, e) {
            var i = this._storage, n = i[t], r = this.indices;
            if (n) for (var a = 0, o = r[ae]; o > a; a++) {
                var s = r[a];
                if (n[s] === e) return a
            }
            return -1
        }, w.indexOfName = function (t) {
            for (var e = this.indices, i = this._nameList, n = 0, r = e[ae]; r > n; n++) {
                var a = e[n];
                if (i[a] === t) return n
            }
            return -1
        }, w.indexOfRawIndex = function (t) {
            var e = this.indices, i = e[t];
            if (null != i && i === t) return t;
            for (var n = 0, r = e[ae] - 1; r >= n;) {
                var a = (n + r) / 2 | 0;
                if (e[a] < t) n = a + 1; else {
                    if (!(e[a] > t)) return a;
                    r = a - 1
                }
            }
            return -1
        }, w.indexOfNearest = function (t, e, i, n) {
            var r = this._storage, a = r[t];
            null == n && (n = 1 / 0);
            var o = -1;
            if (a) for (var s = Number.MAX_VALUE, l = 0, u = this.count(); u > l; l++) {
                var c = e - this.get(t, l, i), h = Math.abs(c);
                n >= c && (s > h || h === s && c > 0) && (s = h, o = l)
            }
            return o
        }, w.getRawIndex = function (t) {
            var e = this.indices[t];
            return null == e ? -1 : e
        }, w.getRawDataItem = function (t) {
            return this._rawData[this.getRawIndex(t)]
        }, w[L] = function (t) {
            return this._nameList[this.indices[t]] || ""
        }, w.getId = function (t) {
            return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
        }, w.each = function (t, i, n, r) {
            typeof t === N && (r = n, n = i, i = t, t = []), t = d.map(e(t), this.getDimension, this);
            var a = [], o = t[ae], s = this.indices;
            r = r || this;
            for (var l = 0; l < s[ae]; l++) switch (o) {
                case 0:
                    i.call(r, l);
                    break;
                case 1:
                    i.call(r, this.get(t[0], l, n), l);
                    break;
                case 2:
                    i.call(r, this.get(t[0], l, n), this.get(t[1], l, n), l);
                    break;
                default:
                    for (var u = 0; o > u; u++) a[u] = this.get(t[u], l, n);
                    a[u] = l, i.apply(r, a)
            }
        }, w.filterSelf = function (t, i, n, r) {
            typeof t === N && (r = n, n = i, i = t, t = []), t = d.map(e(t), this.getDimension, this);
            var a = [], o = [], s = t[ae], l = this.indices;
            r = r || this;
            for (var u = 0; u < l[ae]; u++) {
                var c;
                if (1 === s) c = i.call(r, this.get(t[0], u, n), u); else {
                    for (var h = 0; s > h; h++) o[h] = this.get(t[h], u, n);
                    o[h] = u, c = i.apply(r, o)
                }
                c && a.push(l[u])
            }
            return this.indices = a, this._extent = {}, this
        }, w.mapArray = function (t, e, i, n) {
            typeof t === N && (n = i, i = e, e = t, t = []);
            var r = [];
            return this.each(t, function () {
                r.push(e && e.apply(this, arguments))
            }, i, n), r
        }, w.map = function (t, n, r, a) {
            t = d.map(e(t), this.getDimension, this);
            var o = i(this, t), s = o.indices = this.indices, l = o._storage, u = [];
            return this.each(t, function () {
                var e = arguments[arguments[ae] - 1], i = n && n.apply(this, arguments);
                if (null != i) {
                    typeof i === B && (u[0] = i, i = u);
                    for (var r = 0; r < i[ae]; r++) {
                        var a = t[r], o = l[a], c = s[e];
                        o && (o[c] = i[r])
                    }
                }
            }, r, a), o
        }, w.downSample = function (t, e, n, r) {
            for (var a = i(this, [t]), o = this._storage, s = a._storage, l = this.indices, u = a.indices = [], c = [], h = [], f = Math.floor(1 / e), d = s[t], p = this.count(), v = 0; v < o[t][ae]; v++) s[t][v] = o[t][v];
            for (var v = 0; p > v; v += f) {
                f > p - v && (f = p - v, c[ae] = f);
                for (var m = 0; f > m; m++) {
                    var g = l[v + m];
                    c[m] = d[g], h[m] = g
                }
                var y = n(c), g = h[r(c, y) || 0];
                d[g] = y, u.push(g)
            }
            return a
        }, w[M] = function (t) {
            var e = this.hostModel;
            return t = this.indices[t], new h(this._rawData[t], e, e && e[o])
        }, w.diff = function (t) {
            var e = this._idList, i = t && t._idList;
            return new f(t ? t.indices : [], this.indices, function (t) {
                return i[t] || t + ""
            }, function (t) {
                return e[t] || t + ""
            })
        }, w.getVisual = function (t) {
            var e = this._visual;
            return e && e[t]
        }, w.setVisual = function (t, e) {
            if (g(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, this._visual[t] = e
        }, w.setLayout = function (t, e) {
            if (g(t)) for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e
        }, w.getLayout = function (t) {
            return this._layout[t]
        }, w[C] = function (t) {
            return this._itemLayouts[t]
        }, w.setItemLayout = function (t, e, i) {
            this._itemLayouts[t] = i ? d[$](this._itemLayouts[t] || {}, e) : e
        }, w.clearItemLayouts = function () {
            this._itemLayouts[ae] = 0
        }, w[ie] = function (t, e, i) {
            var n = this._itemVisuals[t], r = n && n[e];
            return null != r || i ? r : this.getVisual(e)
        }, w.setItemVisual = function (t, e, i) {
            var n = this._itemVisuals[t] || {};
            if (this._itemVisuals[t] = n, g(e)) for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]); else n[e] = i
        }, w.clearAllVisual = function () {
            this._visual = {}, this._itemVisuals = []
        };
        var S = function (t) {
            t[W] = this[W], t[ne] = this[ne], t.dataType = this.dataType
        };
        return w[x] = function (t, e) {
            var i = this.hostModel;
            e && (e[ne] = t, e.dataType = this.dataType, e[W] = i && i[W], "group" === e.type && e[H](S, e)), this._graphicEls[t] = e
        }, w[A] = function (t) {
            return this._graphicEls[t]
        }, w[l] = function (t, e) {
            d.each(this._graphicEls, function (i, n) {
                i && t && t.call(e, i, n)
            })
        }, w.cloneShallow = function () {
            var t = d.map(this[p], this.getDimensionInfo, this), e = new b(t, this.hostModel);
            return e._storage = this._storage, _(e, this), e.indices = this.indices.slice(), this._extent && (e._extent = d[$]({}, this._extent)), e
        }, w.wrapMethod = function (t, e) {
            var i = this[t];
            typeof i === N && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                var t = i.apply(this, arguments);
                return e.apply(this, [t].concat(d.slice(arguments)))
            })
        }, w.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], w.CHANGABLE_METHODS = ["filterSelf"], b
    }), e("echarts/util/number", [Ne], function () {
        function t(t) {
            return t[V](/^\s+/, "")[V](/\s+$/, "")
        }

        var e = {}, i = 1e-4;
        return e.linearMap = function (t, e, i, n) {
            var r = e[1] - e[0], a = i[1] - i[0];
            if (0 === r) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
            if (n) if (r > 0) {
                if (t <= e[0]) return i[0];
                if (t >= e[1]) return i[1]
            } else {
                if (t >= e[0]) return i[0];
                if (t <= e[1]) return i[1]
            } else {
                if (t === e[0]) return i[0];
                if (t === e[1]) return i[1]
            }
            return (t - e[0]) / r * a + i[0]
        }, e[_] = function (e, i) {
            switch (e) {
                case xe:
                case be:
                    e = "50%";
                    break;
                case"left":
                case"top":
                    e = "0%";
                    break;
                case"right":
                case _e:
                    e = "100%"
            }
            return typeof e === he ? t(e).match(/%$/) ? parseFloat(e) / 100 * i : parseFloat(e) : null == e ? 0 / 0 : +e
        }, e.round = function (t, e) {
            return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), +(+t).toFixed(e)
        }, e.asc = function (t) {
            return t.sort(function (t, e) {
                return t - e
            }), t
        }, e.getPrecision = function (t) {
            if (t = +t, isNaN(t)) return 0;
            for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
            return i
        }, e.getPrecisionSafe = function (t) {
            var e = t.toString(), i = e[re](".");
            return 0 > i ? 0 : e[ae] - 1 - i
        }, e.getPixelPrecision = function (t, e) {
            var i = Math.log, n = Math.LN10, r = Math.floor(i(t[1] - t[0]) / n),
                a = Math.round(i(Math.abs(e[1] - e[0])) / n);
            return Math.max(-r + a, 0)
        }, e.MAX_SAFE_INTEGER = 9007199254740991, e.remRadian = function (t) {
            var e = 2 * Math.PI;
            return (t % e + e) % e
        }, e.isRadianAroundZero = function (t) {
            return t > -i && i > t
        }, e.parseDate = function (t) {
            if (t instanceof Date) return t;
            if (typeof t === he) {
                var e = new Date(t);
                return isNaN(+e) && (e = new Date(new Date(t[V](/-/g, "/")) - new Date("1970/01/01"))), e
            }
            return new Date(Math.round(t))
        }, e.quantity = function (t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
        }, e.nice = function (t, i) {
            var n, r = e.quantity(t), a = t / r;
            return n = i ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, n * r
        }, e
    }), e("echarts/model/Model", [Ne, Be, "../util/clazz", "./mixin/lineStyle", "./mixin/areaStyle", "./mixin/textStyle", "./mixin/itemStyle"], function (t) {
        function e(t, e, i) {
            this.parentModel = e, this[o] = i, this.option = t
        }

        var i = t(Be), n = t("../util/clazz");
        e[fe] = {
            constructor: e, init: null, mergeOption: function (t) {
                i.merge(this.option, t, !0)
            }, get: function (t, e) {
                if (!t) return this.option;
                typeof t === he && (t = t.split("."));
                for (var i = this.option, n = this.parentModel, r = 0; r < t[ae] && (!t[r] || (i = i && "object" == typeof i ? i[t[r]] : null, null != i)); r++) ;
                return null == i && n && !e && (i = n.get(t)), i
            }, getShallow: function (t, e) {
                var i = this.option, n = null == i ? i : i[t], r = this.parentModel;
                return null == n && r && !e && (n = r[c](t)), n
            }, getModel: function (t, i) {
                var n = this.get(t, !0), r = this.parentModel, a = new e(n, i || r && r[De](t), this[o]);
                return a
            }, isEmpty: function () {
                return null == this.option
            }, restoreData: function () {
            }, clone: function () {
                var t = this.constructor;
                return new t(i.clone(this.option))
            }, setReadOnly: function (t) {
                n.setReadOnly(this, t)
            }
        }, n.enableClassExtend(e);
        var r = i.mixin;
        return r(e, t("./mixin/lineStyle")), r(e, t("./mixin/areaStyle")), r(e, t("./mixin/textStyle")), r(e, t("./mixin/itemStyle")), e
    }), e("zrender/core/matrix", [], function () {
        var t = typeof Float32Array === s ? Array : Float32Array, e = {
            create: function () {
                var i = new t(6);
                return e.identity(i), i
            }, identity: function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, copy: function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
            }, mul: function (t, e, i) {
                var n = e[0] * i[0] + e[2] * i[1], r = e[1] * i[0] + e[3] * i[1], a = e[0] * i[2] + e[2] * i[3],
                    o = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4],
                    l = e[1] * i[4] + e[3] * i[5] + e[5];
                return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
            }, translate: function (t, e, i) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
            }, rotate: function (t, e, i) {
                var n = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], u = Math.sin(i), c = Math.cos(i);
                return t[0] = n * c + o * u, t[1] = -n * u + o * c, t[2] = r * c + s * u, t[3] = -r * u + c * s, t[4] = c * a + u * l, t[5] = c * l - u * a, t
            }, scale: function (t, e, i) {
                var n = i[0], r = i[1];
                return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
            }, invert: function (t, e) {
                var i = e[0], n = e[2], r = e[4], a = e[1], o = e[3], s = e[5], l = i * o - a * n;
                return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null
            }
        };
        return e
    }), e("echarts/util/format", [Ne, Be, "./number", "zrender/contain/text"], function (t) {
        var e = t(Be), i = t("./number"), n = t("zrender/contain/text"), r = {};
        r.addCommas = function (t) {
            return isNaN(t) ? "-" : (t = (t + "").split("."), t[0][V](/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t[ae] > 1 ? "." + t[1] : ""))
        }, r.toCamelCase = function (t) {
            return t[de]()[V](/-(.)/g, function (t, e) {
                return e.toUpperCase()
            })
        }, r.normalizeCssArray = function (t) {
            var e = t[ae];
            return typeof t === B ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }, r.encodeHTML = function (t) {
            return String(t)[V](/&/g, "&amp;")[V](/</g, "&lt;")[V](/>/g, "&gt;")[V](/"/g, "&quot;")[V](/'/g, "&#39;")
        };
        var a = ["a", "b", "c", "d", "e", "f", "g"], o = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        };
        r.formatTpl = function (t, i) {
            e[F](i) || (i = [i]);
            var n = i[ae];
            if (!n) return "";
            for (var r = i[0].$vars || [], s = 0; s < r[ae]; s++) {
                var l = a[s];
                t = t[V](o(l), o(l, 0))
            }
            for (var u = 0; n > u; u++) for (var c = 0; c < r[ae]; c++) t = t[V](o(a[c], u), i[u][r[c]]);
            return t
        };
        var s = function (t) {
            return 10 > t ? "0" + t : t
        };
        return r.formatTime = function (t, e) {
            ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
            var n = i.parseDate(e), r = n.getFullYear(), a = n.getMonth() + 1, o = n.getDate(), l = n.getHours(),
                u = n.getMinutes(), c = n.getSeconds();
            return t = t[V]("MM", s(a))[de]()[V]("yyyy", r)[V]("yy", r % 100)[V]("dd", s(o))[V]("d", o)[V]("hh", s(l))[V]("h", l)[V]("mm", s(u))[V]("m", u)[V]("ss", s(c))[V]("s", c)
        }, r.capitalFirst = function (t) {
            return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
        }, r.truncateText = n.truncateText, r
    }), e(pe, [], function () {
        var t = typeof Float32Array === s ? Array : Float32Array, e = {
            create: function (e, i) {
                var n = new t(2);
                return null == e && (e = 0), null == i && (i = 0), n[0] = e, n[1] = i, n
            }, copy: function (t, e) {
                return t[0] = e[0], t[1] = e[1], t
            }, clone: function (e) {
                var i = new t(2);
                return i[0] = e[0], i[1] = e[1], i
            }, set: function (t, e, i) {
                return t[0] = e, t[1] = i, t
            }, add: function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
            }, scaleAndAdd: function (t, e, i, n) {
                return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
            }, sub: function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
            }, len: function (t) {
                return Math.sqrt(this.lenSquare(t))
            }, lenSquare: function (t) {
                return t[0] * t[0] + t[1] * t[1]
            }, mul: function (t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
            }, div: function (t, e, i) {
                return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
            }, dot: function (t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }, scale: function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t
            }, normalize: function (t, i) {
                var n = e.len(i);
                return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = i[0] / n, t[1] = i[1] / n), t
            }, distance: function (t, e) {
                return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
            }, distanceSquare: function (t, e) {
                return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
            }, negate: function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            }, lerp: function (t, e, i, n) {
                return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
            }, applyTransform: function (t, e, i) {
                var n = e[0], r = e[1];
                return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
            }, min: function (t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
            }, max: function (t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
            }
        };
        return e[ae] = e.len, e.lengthSquare = e.lenSquare, e.dist = e.distance, e.distSquare = e.distanceSquare, e
    }), e("echarts/component/legend/LegendModel", [Ne, Be, "../../model/Model", z], function (t) {
        var e = t(Be), i = t("../../model/Model"), n = t(z).extendComponentModel({
            type: "legend",
            dependencies: [j],
            layoutMode: {type: "box", ignoreSize: !0},
            init: function (t, e, i) {
                this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}
            },
            mergeOption: function (t) {
                n.superCall(this, "mergeOption", t)
            },
            optionUpdated: function () {
                this._updateData(this[o]);
                var t = this._data;
                if (t[0] && "single" === this.get("selectedMode")) {
                    for (var e = !1, i = 0; i < t[ae]; i++) {
                        var n = t[i].get("name");
                        if (this.isSelected(n)) {
                            this.select(n), e = !0;
                            break
                        }
                    }
                    !e && this.select(t[0].get("name"))
                }
            },
            _updateData: function (t) {
                var n = e.map(this.get("data") || [], function (t) {
                    return (typeof t === he || typeof t === B) && (t = {name: t}), new i(t, this, this[o])
                }, this);
                this._data = n;
                var r = e.map(t.getSeries(), function (t) {
                    return t.name
                });
                t[J](function (t) {
                    if (t.legendDataProvider) {
                        var e = t.legendDataProvider();
                        r = r.concat(e.mapArray(e[L]))
                    }
                }), this._availableNames = r
            },
            getData: function () {
                return this._data
            },
            select: function (t) {
                var i = this.option.selected, n = this.get("selectedMode");
                if ("single" === n) {
                    var r = this._data;
                    e.each(r, function (t) {
                        i[t.get("name")] = !1
                    })
                }
                i[t] = !0
            },
            unSelect: function (t) {
                "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
            },
            toggleSelected: function (t) {
                var e = this.option.selected;
                e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
            },
            isSelected: function (t) {
                var i = this.option.selected;
                return !(i.hasOwnProperty(t) && !i[t]) && e[re](this._availableNames, t) >= 0
            },
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                orient: "horizontal",
                left: "center",
                top: "top",
                align: "auto",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                inactiveColor: "#ccc",
                textStyle: {color: "#333"},
                selectedMode: !0,
                tooltip: {show: !1}
            }
        });
        return n
    }), e("echarts/component/legend/legendAction", [Ne, z, Be], function (t) {
        function e(t, e, i) {
            var r, a = {}, o = "toggleSelected" === t;
            return i.eachComponent("legend", function (i) {
                o && null != r ? i[r ? "select" : "unSelect"](e.name) : (i[t](e.name), r = i.isSelected(e.name));
                var s = i[Ie]();
                n.each(s, function (t) {
                    var e = t.get("name");
                    if ("\n" !== e && "" !== e) {
                        var n = i.isSelected(e);
                        a[e] = e in a ? a[e] && n : n
                    }
                })
            }), {name: e.name, selected: a}
        }

        var i = t(z), n = t(Be);
        i.registerAction("legendToggleSelect", "legendselectchanged", n.curry(e, "toggleSelected")), i.registerAction("legendSelect", "legendselected", n.curry(e, "select")), i.registerAction("legendUnSelect", "legendunselected", n.curry(e, "unSelect"))
    }), e("echarts/component/legend/LegendView", [Ne, Be, "../../util/symbol", P, "../helper/listComponent", z], function (t) {
        function e(t, e) {
            e.dispatchAction({type: "legendToggleSelect", name: t})
        }

        function i(t, e, i) {
            var n = i.getZr()[se].getDisplayList()[0];
            n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
                type: "highlight",
                seriesName: t.name,
                name: e
            })
        }

        function n(t, e, i) {
            var n = i.getZr()[se].getDisplayList()[0];
            n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
                type: "downplay",
                seriesName: t.name,
                name: e
            })
        }

        var r = t(Be), a = t("../../util/symbol"), o = t(P), s = t("../helper/listComponent"), l = r.curry;
        return t(z).extendComponentView({
            type: "legend", init: function () {
                this._symbolTypeStore = {}
            }, render: function (t, a, u) {
                var c = this.group;
                if (c[Ee](), t.get("show")) {
                    var h = t.get("selectedMode"), f = t.get("align");
                    "auto" === f && (f = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left");
                    var d = {};
                    r.each(t[Ie](), function (r) {
                        var s = r.get("name");
                        if ("" === s || "\n" === s) return void c.add(new o.Group({newline: !0}));
                        var p = a.getSeriesByName(s)[0];
                        if (!d[s]) if (p) {
                            var v = p[Ie](), m = v.getVisual("color");
                            typeof m === N && (m = m(p[q](0)));
                            var g = v.getVisual("legendSymbol") || "roundRect", y = v.getVisual("symbol"),
                                _ = this._createItem(s, r, t, g, y, f, m, h);
                            _.on("click", l(e, s, u)).on(Z, l(i, p, null, u)).on(X, l(n, p, null, u)), d[s] = !0
                        } else a.eachRawSeries(function (a) {
                            if (!d[s] && a.legendDataProvider) {
                                var o = a.legendDataProvider(), c = o.indexOfName(s);
                                if (0 > c) return;
                                var p = o[ie](c, "color"), v = "roundRect",
                                    m = this._createItem(s, r, t, v, null, f, p, h);
                                m.on("click", l(e, s, u)).on(Z, l(i, a, s, u)).on(X, l(n, a, s, u)), d[s] = !0
                            }
                        }, this)
                    }, this), s.layout(c, t, u), s.addBackground(c, t)
                }
            }, _createItem: function (t, e, i, n, s, l, u, c) {
                var h = i.get("itemWidth"), f = i.get("itemHeight"), d = i.get("inactiveColor"), p = i.isSelected(t),
                    v = new o.Group, m = e[De](ze), g = e.get("icon"), y = e[De]("tooltip"), _ = y.parentModel;
                if (n = g || n, v.add(a.createSymbol(n, 0, 0, h, f, p ? u : d)), !g && s && (s !== n || "none" == s)) {
                    var x = .8 * f;
                    "none" === s && (s = "circle"), v.add(a.createSymbol(s, (h - x) / 2, (f - x) / 2, x, x, p ? u : d))
                }
                var b = "left" === l ? h + 5 : -5, w = l, M = i.get("formatter"), S = t;
                typeof M === he && M ? S = M[V]("{name}", t) : typeof M === N && (S = M(t));
                var T = new o.Text({
                    style: {
                        text: S,
                        x: b,
                        y: f / 2,
                        fill: p ? m[Le]() : d,
                        textFont: m[Pe](),
                        textAlign: w,
                        textVerticalAlign: "middle"
                    }
                });
                v.add(T);
                var C = new o.Rect({
                    shape: v[Ae](),
                    invisible: !0,
                    tooltip: y.get("show") ? r[$]({
                        content: t,
                        formatter: _.get("formatter", !0) || function () {
                            return t
                        },
                        formatterParams: {
                            componentType: "legend",
                            legendIndex: i.componentIndex,
                            name: t,
                            $vars: ["name"]
                        }
                    }, y.option) : null
                });
                return v.add(C), v.eachChild(function (t) {
                    t[Te] = !0
                }), C[Te] = !c, this.group.add(v), o.setHoverStyle(v), v
            }
        })
    }), e("echarts/component/legend/legendFilter", [], function () {
        return function (t) {
            var e = t.findComponents({mainType: "legend"});
            e && e[ae] && t.filterSeries(function (t) {
                for (var i = 0; i < e[ae]; i++) if (!e[i].isSelected(t.name)) return !1;
                return !0
            })
        }
    }), e("echarts/component/tooltip/TooltipView", [Ne, "./TooltipContent", P, Be, "../../util/format", "../../util/number", "../../util/model", ve, "../../model/Model", z], function (t) {
        function e(t, e) {
            if (!t || !e) return !1;
            var i = S.round;
            return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1])
        }

        function i(t, e, i, n) {
            return {x1: t, y1: e, x2: i, y2: n}
        }

        function n(t, e, i, n) {
            return {x: t, y: e, width: i, height: n}
        }

        function s(t, e, i, n, r, a) {
            return {cx: t, cy: e, r0: i, r: n, startAngle: r, endAngle: a, clockwise: !0}
        }

        function l(t, e, i, n, r) {
            var a = i.clientWidth, o = i.clientHeight, s = 20;
            return t + a + s > n ? t -= a + s : t += s, e + o + s > r ? e -= o + s : e += s, [t, e]
        }

        function u(t, e, i) {
            var n = i.clientWidth, r = i.clientHeight, a = 5, o = 0, s = 0, l = e.width, u = e[Ce];
            switch (t) {
                case T:
                    o = e.x + l / 2 - n / 2, s = e.y + u / 2 - r / 2;
                    break;
                case"top":
                    o = e.x + l / 2 - n / 2, s = e.y - r - a;
                    break;
                case _e:
                    o = e.x + l / 2 - n / 2, s = e.y + u + a;
                    break;
                case"left":
                    o = e.x - n - a, s = e.y + u / 2 - r / 2;
                    break;
                case"right":
                    o = e.x + l + a, s = e.y + u / 2 - r / 2
            }
            return [o, s]
        }

        function c(t, e, i, n, o, s, c) {
            var h = c[Me](), f = c[we](), p = s && s[Ae]().clone();
            if (s && p[d](s[a]), typeof t === N && (t = t([e, i], o, n.el, p)), x[F](t)) e = k(t[0], h), i = k(t[1], f); else if (typeof t === he && s) {
                var v = u(t, p, n.el);
                e = v[0], i = v[1]
            } else {
                var v = l(e, i, n.el, h, f);
                e = v[0], i = v[1]
            }
            n[r](e, i)
        }

        function f(t) {
            var e = t[Re], i = t.get("tooltip.trigger", !0);
            return !(!e || "cartesian2d" !== e.type && "polar" !== e.type && "singleAxis" !== e.type || "item" === i)
        }

        var v = t("./TooltipContent"), m = t(P), x = t(Be), b = t("../../util/format"), S = t("../../util/number"),
            C = t("../../util/model"), k = S[_], D = t(ve), O = t("../../model/Model");
        t(z).extendComponentView({
            type: "tooltip", _axisPointers: {}, init: function (t, e) {
                if (!D.node) {
                    var i = new v(e.getDom(), e);
                    this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._manuallyHideTip, this)
                }
            }, render: function (t, e, i) {
                if (!D.node) {
                    this.group[Ee](), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};
                    var n = this._tooltipContent;
                    n[te](), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);
                    var r = this._crossText;
                    r && this.group.add(r);
                    var a = t.get("triggerOn");
                    if (null != this._lastX && null != this._lastY && "none" !== a) {
                        var o = this;
                        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                            o._manuallyShowTip({x: o._lastX, y: o._lastY})
                        })
                    }
                    var s = this._api.getZr();
                    s.off("click", this._tryShow), s.off("mousemove", this._mousemove), s.off(X, this._hide), s.off("globalout", this._hide), "click" === a ? s.on("click", this._tryShow, this) : "mousemove" === a && (s.on("mousemove", this._mousemove, this), s.on(X, this._hide, this), s.on("globalout", this._hide, this))
                }
            }, _mousemove: function (t) {
                var e = this._tooltipModel.get("showDelay"), i = this;
                clearTimeout(this._showTimeout), e > 0 ? this._showTimeout = setTimeout(function () {
                    i._tryShow(t)
                }, e) : this._tryShow(t)
            }, _manuallyShowTip: function (t) {
                if (t.from !== this.uid) {
                    var e = this._ecModel, i = t[W], n = e.getSeriesByIndex(i), r = this._api;
                    if (null == t.x || null == t.y) {
                        if (n || e[J](function (t) {
                            f(t) && !n && (n = t)
                        }), n) {
                            var o = n[Ie](), s = C.queryDataIndex(o, t);
                            if (null == s || x[F](s)) return;
                            var l, u, c = o[A](s), h = n[Re];
                            if (n.getTooltipPosition) {
                                var v = n.getTooltipPosition(s) || [];
                                l = v[0], u = v[1]
                            } else if (h && h.dataToPoint) {
                                var v = h.dataToPoint(o.getValues(x.map(h[p], function (t) {
                                    return n.coordDimToDataDim(t)[0]
                                }), s, !0));
                                l = v && v[0], u = v && v[1]
                            } else if (c) {
                                var m = c[Ae]().clone();
                                m[d](c[a]), l = m.x + m.width / 2, u = m.y + m[Ce] / 2
                            }
                            null != l && null != u && this._tryShow({
                                offsetX: l,
                                offsetY: u,
                                position: t[ye],
                                target: c,
                                event: {}
                            })
                        }
                    } else {
                        var c = r.getZr().handler.findHover(t.x, t.y);
                        this._tryShow({offsetX: t.x, offsetY: t.y, position: t[ye], target: c, event: {}})
                    }
                }
            }, _manuallyHideTip: function (t) {
                t.from !== this.uid && this._hide()
            }, _prepareAxisTriggerData: function (t, e) {
                var i = {};
                return e[J](function (t) {
                    if (f(t)) {
                        var e, n, r = t[Re];
                        "cartesian2d" === r.type ? (e = r.getBaseAxis(), n = e.dim + e.index) : "singleAxis" === r.type ? (e = r[g](), n = e.dim + e.type) : (e = r.getBaseAxis(), n = e.dim + r.name), i[n] = i[n] || {
                            coordSys: [],
                            series: []
                        }, i[n].coordSys.push(r), i[n][j].push(t)
                    }
                }, this), i
            }, _tryShow: function (t) {
                var e = t[Se], i = this._tooltipModel, n = i.get(Y), r = this._ecModel, a = this._api;
                if (i) if (this._lastX = t.offsetX, this._lastY = t.offsetY, e && null != e[ne]) {
                    var o = e.dataModel || r.getSeriesByIndex(e[W]), s = e[ne], l = o[Ie]()[M](s);
                    "axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, r, t) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(o, s, e.dataType, t)), a.dispatchAction({
                        type: "showTip",
                        from: this.uid,
                        dataIndexInside: e[ne],
                        seriesIndex: e[W]
                    })
                } else if (e && e.tooltip) {
                    var u = e.tooltip;
                    if (typeof u === he) {
                        var c = u;
                        u = {content: c, formatter: c}
                    }
                    var h = new O(u, i), f = h.get("content"), d = Math.random();
                    this._showTooltipContent(h, f, h.get("formatterParams") || {}, d, t.offsetX, t.offsetY, t[ye], e, a)
                } else "item" === n ? this._hide() : this._showAxisTooltip(i, r, t), "cross" === i.get("axisPointer.type") && a.dispatchAction({
                    type: "showTip",
                    from: this.uid,
                    x: t.offsetX,
                    y: t.offsetY
                })
            }, _showAxisTooltip: function (t, i, n) {
                var r = t[De]("axisPointer"), a = r.get("type");
                if ("cross" === a) {
                    var o = n[Se];
                    if (o && null != o[ne]) {
                        var s = i.getSeriesByIndex(o[W]), l = o[ne];
                        this._showItemTooltipContent(s, l, o.dataType, n)
                    }
                }
                this._showAxisPointer();
                var u = !0;
                x.each(this._seriesGroupByAxis, function (t) {
                    var i = t.coordSys, o = i[0], s = [n.offsetX, n.offsetY];
                    if (!o.containPoint(s)) return void this._hideAxisPointer(o.name);
                    u = !1;
                    var l = o[p], c = o.pointToData(s, !0);
                    s = o.dataToPoint(c);
                    var h = o.getBaseAxis(), f = r.get("axis");
                    "auto" === f && (f = h.dim);
                    var d = !1, v = this._lastHover;
                    if ("cross" === a) e(v.data, c) && (d = !0), v.data = c; else {
                        var m = x[re](l, f);
                        v.data === c[m] && (d = !0), v.data = c[m]
                    }
                    "cartesian2d" !== o.type || d ? "polar" !== o.type || d ? "singleAxis" !== o.type || d || this._showSinglePointer(r, o, f, s) : this._showPolarPointer(r, o, f, s) : this._showCartesianPointer(r, o, f, s), "cross" !== a && this._dispatchAndShowSeriesTooltipContent(o, t[j], s, c, d, n[ye])
                }, this), this._tooltipModel.get("show") || this._hideAxisPointer(), u && this._hide()
            }, _showCartesianPointer: function (t, e, r, a) {
                function o(n, r, a) {
                    var o = "x" === n ? i(r[0], a[0], r[0], a[1]) : i(a[0], r[1], a[1], r[1]),
                        s = l._getPointerElement(e, t, n, o);
                    m.subPixelOptimizeLine({shape: o, style: s.style}), h ? m[w](s, {shape: o}, t) : s.attr({shape: o})
                }

                function s(i, r, a) {
                    var o = e[g](i), s = o.getBandWidth(), u = a[1] - a[0],
                        c = "x" === i ? n(r[0] - s / 2, a[0], s, u) : n(a[0], r[1] - s / 2, u, s),
                        f = l._getPointerElement(e, t, i, c);
                    h ? m[w](f, {shape: c}, t) : f.attr({shape: c})
                }

                var l = this, u = t.get("type"), c = e.getBaseAxis(),
                    h = "cross" !== u && c.type === y && c.getBandWidth() > 20;
                if ("cross" === u) o("x", a, e[g]("y").getGlobalExtent()), o("y", a, e[g]("x").getGlobalExtent()), this._updateCrossText(e, a, t); else {
                    var f = e[g]("x" === r ? "y" : "x"), d = f.getGlobalExtent();
                    "cartesian2d" === e.type && ("line" === u ? o : s)(r, a, d)
                }
            }, _showSinglePointer: function (t, e, n, r) {
                function a(n, r, a) {
                    var s = e[g](), u = s.orient,
                        c = "horizontal" === u ? i(r[0], a[0], r[0], a[1]) : i(a[0], r[1], a[1], r[1]),
                        h = o._getPointerElement(e, t, n, c);
                    l ? m[w](h, {shape: c}, t) : h.attr({shape: c})
                }

                var o = this, s = t.get("type"), l = "cross" !== s && e.getBaseAxis().type === y, u = e.getRect(),
                    c = [u.y, u.y + u[Ce]];
                a(n, r, c)
            }, _showPolarPointer: function (t, e, n, r) {
                function a(n, r, a) {
                    var o, s = e.pointToCoord(r);
                    if ("angle" === n) {
                        var u = e.coordToPoint([a[0], s[1]]), c = e.coordToPoint([a[1], s[1]]);
                        o = i(u[0], u[1], c[0], c[1])
                    } else o = {cx: e.cx, cy: e.cy, r: s[0]};
                    var h = l._getPointerElement(e, t, n, o);
                    f ? m[w](h, {shape: o}, t) : h.attr({shape: o})
                }

                function o(i, n, r) {
                    var a, o = e[g](i), u = o.getBandWidth(), c = e.pointToCoord(n), h = Math.PI / 180;
                    a = "angle" === i ? s(e.cx, e.cy, r[0], r[1], (-c[1] - u / 2) * h, (-c[1] + u / 2) * h) : s(e.cx, e.cy, c[0] - u / 2, c[0] + u / 2, 0, 2 * Math.PI);
                    var d = l._getPointerElement(e, t, i, a);
                    f ? m[w](d, {shape: a}, t) : d.attr({shape: a})
                }

                var l = this, u = t.get("type"), c = e.getAngleAxis(), h = e.getRadiusAxis(),
                    f = "cross" !== u && e.getBaseAxis().type === y;
                if ("cross" === u) a("angle", r, h[I]()), a("radius", r, c[I]()), this._updateCrossText(e, r, t); else {
                    var d = e[g]("radius" === n ? "angle" : "radius"), p = d[I]();
                    ("line" === u ? a : o)(n, r, p)
                }
            }, _updateCrossText: function (t, e, i) {
                var n = i[De]("crossStyle"), r = n[De](ze), a = this._tooltipModel, o = this._crossText;
                o || (o = this._crossText = new m.Text({
                    style: {
                        textAlign: "left",
                        textVerticalAlign: "bottom"
                    }
                }), this.group.add(o));
                var s = t.pointToData(e), l = t[p];
                s = x.map(s, function (e, i) {
                    var n = t[g](l[i]);
                    return e = n.type === y || "time" === n.type ? n.scale.getLabel(e) : b.addCommas(e.toFixed(n.getPixelPrecision()))
                }), o[ge]({
                    fill: r[Le]() || n.get("color"),
                    textFont: r[Pe](),
                    text: s.join(", "),
                    x: e[0] + 5,
                    y: e[1] - 5
                }), o.z = a.get("z"), o[G] = a.get(G)
            }, _getPointerElement: function (t, e, i, n) {
                var r = this._tooltipModel, a = r.get("z"), o = r.get(G), s = this._axisPointers, l = t.name;
                if (s[l] = s[l] || {}, s[l][i]) return s[l][i];
                var u = e.get("type"), c = e[De](u + "Style"), f = "shadow" === u,
                    d = c[f ? "getAreaStyle" : "getLineStyle"](),
                    p = "polar" === t.type ? f ? "Sector" : "radius" === i ? "Circle" : "Line" : f ? "Rect" : "Line";
                f ? d[h] = null : d.fill = null;
                var v = s[l][i] = new m[p]({style: d, z: a, zlevel: o, silent: !0, shape: n});
                return this.group.add(v), v
            }, _dispatchAndShowSeriesTooltipContent: function (t, e, i, n, r, a) {
                var o = this._tooltipModel, s = t.getBaseAxis(), l = "x" === s.dim || "radius" === s.dim ? 0 : 1,
                    u = x.map(e, function (t) {
                        return {
                            seriesIndex: t[W],
                            dataIndexInside: t.getAxisTooltipDataIndex ? t.getAxisTooltipDataIndex(t.coordDimToDataDim(s.dim), n, s) : t[Ie]().indexOfNearest(t.coordDimToDataDim(s.dim)[0], n[l], !1, s.type === y ? .5 : null)
                        }
                    }), h = this._lastHover, f = this._api;
                if (h.payloadBatch && !r && f.dispatchAction({
                    type: "downplay",
                    batch: h.payloadBatch
                }), r || (f.dispatchAction({
                    type: "highlight",
                    batch: u
                }), h.payloadBatch = u), f.dispatchAction({
                    type: "showTip",
                    dataIndexInside: u[0].dataIndexInside,
                    seriesIndex: u[0][W],
                    from: this.uid
                }), s && o.get("showContent") && o.get("show")) {
                    var d = x.map(e, function (t, e) {
                        return t[q](u[e].dataIndexInside)
                    });
                    if (r) c(a || o.get(ye), i[0], i[1], this._tooltipContent, d, null, f); else {
                        var p = u[0].dataIndexInside, v = "time" === s.type ? s.scale.getLabel(n[l]) : e[0][Ie]()[L](p),
                            m = (v ? v + "<br />" : "") + x.map(e, function (t, e) {
                                return t.formatTooltip(u[e].dataIndexInside, !0)
                            }).join("<br />"), g = "axis_" + t.name + "_" + p;
                        this._showTooltipContent(o, m, d, g, i[0], i[1], a, null, f)
                    }
                }
            }, _showItemTooltipContent: function (t, e, i, n) {
                var r = this._api, a = t[Ie](i), s = a[M](e), l = s.get("tooltip", !0);
                if (typeof l === he) {
                    var u = l;
                    l = {formatter: u}
                }
                var c = this._tooltipModel, h = t[De]("tooltip", c), f = new O(l, h, h[o]), d = t[q](e, i),
                    p = t.formatTooltip(e, !1, i), v = "item_" + t.name + "_" + e;
                this._showTooltipContent(f, p, d, v, n.offsetX, n.offsetY, n[ye], n[Se], r)
            }, _showTooltipContent: function (t, e, i, n, r, a, o, s, l) {
                if (this._ticket = "", t.get("showContent") && t.get("show")) {
                    var u = this._tooltipContent, h = t.get("formatter");
                    o = o || t.get(ye);
                    var f = e;
                    if (h) if (typeof h === he) f = b.formatTpl(h, i); else if (typeof h === N) {
                        var d = this, p = n, v = function (t, e) {
                            t === d._ticket && (u.setContent(e), c(o, r, a, u, i, s, l))
                        };
                        d._ticket = p, f = h(i, p, v)
                    }
                    u.show(t), u.setContent(f), c(o, r, a, u, i, s, l)
                }
            }, _showAxisPointer: function (t) {
                if (t) {
                    var e = this._axisPointers[t];
                    e && x.each(e, function (t) {
                        t.show()
                    })
                } else this.group.eachChild(function (t) {
                    t.show()
                }), this.group.show()
            }, _resetLastHover: function () {
                var t = this._lastHover;
                t.payloadBatch && this._api.dispatchAction({
                    type: "downplay",
                    batch: t.payloadBatch
                }), this._lastHover = {}
            }, _hideAxisPointer: function (t) {
                if (t) {
                    var e = this._axisPointers[t];
                    e && x.each(e, function (t) {
                        t.hide()
                    })
                } else this.group.children()[ae] && this.group.hide()
            }, _hide: function () {
                clearTimeout(this._showTimeout), this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")), this._api.dispatchAction({
                    type: "hideTip",
                    from: this.uid
                }), this._lastX = this._lastY = null
            }, dispose: function (t, e) {
                if (!D.node) {
                    var i = e.getZr();
                    this._tooltipContent.hide(), i.off("click", this._tryShow), i.off("mousemove", this._mousemove), i.off(X, this._hide), i.off("globalout", this._hide), e.off("showTip", this._manuallyShowTip), e.off("hideTip", this._manuallyHideTip)
                }
            }
        })
    }), e("echarts/component/tooltip/TooltipModel", [Ne, z], function (t) {
        t(z).extendComponentModel({
            type: "tooltip",
            defaultOption: {
                zlevel: 0,
                z: 8,
                show: !0,
                showContent: !0,
                trigger: "item",
                triggerOn: "mousemove",
                alwaysShowContent: !1,
                showDelay: 0,
                hideDelay: 100,
                transitionDuration: .4,
                enterable: !1,
                backgroundColor: "rgba(50,50,50,0.7)",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                extraCssText: "",
                axisPointer: {
                    type: "line",
                    axis: "auto",
                    animation: !0,
                    animationDurationUpdate: 200,
                    animationEasingUpdate: "exponentialOut",
                    lineStyle: {color: "#555", width: 1, type: "solid"},
                    crossStyle: {color: "#555", width: 1, type: "dashed", textStyle: {}},
                    shadowStyle: {color: "rgba(150,150,150,0.3)"}
                },
                textStyle: {color: "#fff", fontSize: 14}
            }
        })
    }), e("echarts/component/marker/MarkLineModel", [Ne, "./MarkerModel"], function (t) {
        return t("./MarkerModel")[$]({
            type: "markLine",
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: ["circle", "arrow"],
                symbolSize: [8, 16],
                precision: 2,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "end"}, emphasis: {show: !0}},
                lineStyle: {normal: {type: "dashed"}, emphasis: {width: 3}},
                animationEasing: "linear"
            }
        })
    }), e("echarts/component/marker/MarkLineView", [Ne, Be, "../../data/List", "../../util/number", "./markerHelper", "../../chart/helper/LineDraw", "./MarkerView"], function (t) {
        function e(t) {
            return !isNaN(t) && !isFinite(t)
        }

        function i(t, i, n, r) {
            var a = 1 - t, o = r[p][t];
            return e(i[a]) && e(n[a]) && i[t] === n[t] && r[g](o).containData(i[t])
        }

        function n(t, e) {
            if ("cartesian2d" === t.type) {
                var n = e[0].coord, r = e[1].coord;
                if (n && r && (i(1, n, r, t) || i(0, n, r, t))) return !0
            }
            return c.dataFilter(t, e[0]) && c.dataFilter(t, e[1])
        }

        function r(t, i, n, r, a) {
            var o, s = r[Re], l = t[M](i), c = u[_](l.get("x"), a[Me]()), h = u[_](l.get("y"), a[we]());
            if (isNaN(c) || isNaN(h)) {
                if (r.getMarkerPosition) o = r.getMarkerPosition(t.getValues(t[p], i)); else {
                    var f = s[p], d = t.get(f[0], i), v = t.get(f[1], i);
                    o = s.dataToPoint([d, v])
                }
                if ("cartesian2d" === s.type) {
                    var m = s[g]("x"), y = s[g]("y"), f = s[p];
                    e(t.get(f[0], i)) ? o[0] = m.toGlobalCoord(m[I]()[n ? 0 : 1]) : e(t.get(f[1], i)) && (o[1] = y.toGlobalCoord(y[I]()[n ? 0 : 1]))
                }
                isNaN(c) || (o[0] = c), isNaN(h) || (o[1] = h)
            } else o = [c, h];
            t.setItemLayout(i, o)
        }

        function a(t, e, i) {
            var r;
            r = t ? o.map(t && t[p], function (t) {
                var i = e[Ie]().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }) : [{name: "value", type: "float"}];
            var a = new s(r, i), l = new s(r, i), u = new s([], i), h = o.map(i.get("data"), o.curry(f, e, t, i));
            t && (h = o.filter(h, o.curry(n, t)));
            var d = t ? c.dimValueGetter : function (t) {
                return t.value
            };
            return a.initData(o.map(h, function (t) {
                return t[0]
            }), null, d), l.initData(o.map(h, function (t) {
                return t[1]
            }), null, d), u.initData(o.map(h, function (t) {
                return t[2]
            })), u.hasItemOption = !0, {from: a, to: l, line: u}
        }

        var o = t(Be), s = t("../../data/List"), u = t("../../util/number"), c = t("./markerHelper"),
            h = t("../../chart/helper/LineDraw"), f = function (t, e, i, n) {
                var r = t[Ie](), a = n.type;
                if (!o[F](n) && ("min" === a || "max" === a || "average" === a || null != n.xAxis || null != n.yAxis)) {
                    var s, l, u;
                    if (null != n.yAxis || null != n.xAxis) l = null != n.yAxis ? "y" : "x", s = e[g](l), u = o[S](n.yAxis, n.xAxis); else {
                        var h = c.getAxisInfo(n, r, e, t);
                        l = h.valueDataDim, s = h.valueAxis, u = c.numCalculate(r, l, a)
                    }
                    var f = "x" === l ? 0 : 1, d = 1 - f, p = o.clone(n), v = {};
                    p.type = null, p.coord = [], v.coord = [], p.coord[d] = -1 / 0, v.coord[d] = 1 / 0;
                    var m = i.get("precision");
                    m >= 0 && typeof u === B && (u = +u.toFixed(m)), p.coord[f] = v.coord[f] = u, n = [p, v, {
                        type: a,
                        valueIndex: n.valueIndex,
                        value: u
                    }]
                }
                return n = [c.dataTransform(t, n[0]), c.dataTransform(t, n[1]), o[$]({}, n[2])], n[2].type = n[2].type || "", o.merge(n[2], n[0]), o.merge(n[2], n[1]), n
            };
        t("./MarkerView")[$]({
            type: "markLine", updateLayout: function (t, e, i) {
                e[J](function (t) {
                    var e = t.markLineModel;
                    if (e) {
                        var n = e[Ie](), a = e.__from, o = e.__to;
                        a.each(function (e) {
                            r(a, e, !0, t, i), r(o, e, !1, t, i)
                        }), n.each(function (t) {
                            n.setItemLayout(t, [a[C](t), o[C](t)])
                        }), this.markerGroupMap[t.name].updateLayout()
                    }
                }, this)
            }, renderSeries: function (t, e, i, n) {
                function s(e, i, a) {
                    var o = e[M](i);
                    r(e, i, a, t, n), e.setItemVisual(i, {
                        symbolSize: o.get("symbolSize") || x[a ? 0 : 1],
                        symbol: o.get("symbol", !0) || _[a ? 0 : 1],
                        color: o.get("itemStyle.normal.color") || f.getVisual("color")
                    })
                }

                var u = t[Re], c = t.name, f = t[Ie](), d = this.markerGroupMap, p = d[c];
                p || (p = d[c] = new h), this.group.add(p.group);
                var v = a(u, t, e), m = v.from, g = v.to, y = v.line;
                e.__from = m, e.__to = g, e.setData(y);
                var _ = e.get("symbol"), x = e.get("symbolSize");
                o[F](_) || (_ = [_, _]), typeof x === B && (x = [x, x]), v.from.each(function (t) {
                    s(m, t, !0), s(g, t, !1)
                }), y.each(function (t) {
                    var e = y[M](t).get("lineStyle.normal.color");
                    y.setItemVisual(t, {color: e || m[ie](t, "color")}), y.setItemLayout(t, [m[C](t), g[C](t)]), y.setItemVisual(t, {
                        fromSymbolSize: m[ie](t, "symbolSize"),
                        fromSymbol: m[ie](t, "symbol"),
                        toSymbolSize: g[ie](t, "symbolSize"),
                        toSymbol: g[ie](t, "symbol")
                    })
                }), p.updateData(y), v.line[l](function (t) {
                    t[H](function (t) {
                        t.dataModel = e
                    })
                }), p.__keep = !0, p.group[Te] = e.get(Te) || t.get(Te)
            }
        })
    }), e("zrender/vml/Painter", [Ne, "../core/log", "./core"], function (t) {
        function e(t) {
            return parseInt(t, 10)
        }

        function i(t, e) {
            o.initVML(), this.root = t, this[se] = e;
            var i = document[D]("div"), n = document[D]("div");
            i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this[ce]();
            var r = e.delFromMap, a = e.addToMap;
            e.delFromMap = function (t) {
                var i = e.get(t);
                r.call(e, t), i && i.onRemove && i.onRemove(n)
            }, e.addToMap = function (t) {
                t.onAdd && t.onAdd(n), a.call(e, t)
            }, this._firstPaint = !0
        }

        function r(t) {
            return function () {
                a('In IE8.0 VML mode painter not support method "' + t + '"')
            }
        }

        var a = t("../core/log"), o = t("./core");
        i[fe] = {
            constructor: i, getViewportRoot: function () {
                return this._vmlViewport
            }, refresh: function () {
                var t = this[se].getDisplayList(!0, !0);
                this._paintList(t)
            }, _paintList: function (t) {
                for (var e = this._vmlRoot, i = 0; i < t[ae]; i++) {
                    var r = t[i];
                    r.invisible || r[oe] ? (r.__alreadyNotVisible || r.onRemove(e), r.__alreadyNotVisible = !0) : (r.__alreadyNotVisible && r.onAdd(e), r.__alreadyNotVisible = !1, r[n] && (r.beforeBrush && r.beforeBrush(), (r.brushVML || r.brush).call(r, e), r.afterBrush && r.afterBrush())), r[n] = !1
                }
                this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
            }, resize: function (t, e) {
                var t = null == t ? this._getWidth() : t, e = null == e ? this._getHeight() : e;
                if (this._width != t || this._height != e) {
                    this._width = t, this._height = e;
                    var i = this._vmlViewport.style;
                    i.width = t + "px", i[Ce] = e + "px"
                }
            }, dispose: function () {
                this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this[se] = null
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, clear: function () {
                this._vmlViewport && this.root.removeChild(this._vmlViewport)
            }, _getWidth: function () {
                var t = this.root, i = t.currentStyle;
                return (t.clientWidth || e(i.width)) - e(i.paddingLeft) - e(i.paddingRight) | 0
            }, _getHeight: function () {
                var t = this.root, i = t.currentStyle;
                return (t.clientHeight || e(i[Ce])) - e(i.paddingTop) - e(i.paddingBottom) | 0
            }
        };
        for (var s = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], l = 0; l < s[ae]; l++) {
            var u = s[l];
            i[fe][u] = r(u)
        }
        return i
    }), e("zrender/vml/graphic", [Ne, "../core/env", "../core/vector", "../core/BoundingRect", "../core/PathProxy", "../tool/color", "../contain/text", "../graphic/mixin/RectText", "../graphic/Displayable", "../graphic/Image", "../graphic/Text", "../graphic/Path", "../graphic/Gradient", "./core"], function (t) {
        if (!t("../core/env")[le]) {
            var e = t("../core/vector"), n = t("../core/BoundingRect"), r = t("../core/PathProxy").CMD,
                o = t("../tool/color"), s = t("../contain/text"), l = t("../graphic/mixin/RectText"),
                u = t("../graphic/Displayable"), c = t("../graphic/Image"), p = t("../graphic/Text"),
                v = t("../graphic/Path"), m = t("../graphic/Gradient"), g = t("./core"), y = Math.round, _ = Math.sqrt,
                x = Math.abs, b = Math.cos, w = Math.sin, M = Math.max, S = e[d], T = ",",
                C = "progid:DXImageTransform.Microsoft", A = 21600, L = A / 2, P = 1e5, z = 1e3, I = function (t) {
                    t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = A + "," + A, t.coordorigin = "0,0"
                }, O = function (t) {
                    return String(t)[V](/&/g, "&amp;")[V](/"/g, "&quot;")
                }, R = function (t, e, i) {
                    return "rgb(" + [t, e, i].join(",") + ")"
                }, E = function (t, e) {
                    e && t && e.parentNode !== t && t.appendChild(e)
                }, B = function (t, e) {
                    e && t && e.parentNode === t && t.removeChild(e)
                }, N = function (t, e, i) {
                    return (parseFloat(t) || 0) * P + (parseFloat(e) || 0) * z + i
                }, F = function (t, e) {
                    return typeof t === he ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
                }, H = function (t, e, i) {
                    var n = o.parse(e);
                    i = +i, isNaN(i) && (i = 1), n && (t.color = R(n[0], n[1], n[2]), t[me] = i * n[3])
                }, q = function (t) {
                    var e = o.parse(t);
                    return [R(e[0], e[1], e[2]), e[3]]
                }, W = function (t, e, i) {
                    var n = e.fill;
                    if (null != n) if (n instanceof m) {
                        var r, o = 0, s = [0, 0], l = 0, u = 1, c = i[Ae](), h = c.width, f = c[Ce];
                        if ("linear" === n.type) {
                            r = "gradient";
                            var d = i[a], p = [n.x * h, n.y * f], v = [n.x2 * h, n.y2 * f];
                            d && (S(p, p, d), S(v, v, d));
                            var g = v[0] - p[0], y = v[1] - p[1];
                            o = 180 * Math.atan2(g, y) / Math.PI, 0 > o && (o += 360), 1e-6 > o && (o = 0)
                        } else {
                            r = "gradientradial";
                            var p = [n.x * h, n.y * f], d = i[a], _ = i.scale, x = h, b = f;
                            s = [(p[0] - c.x) / x, (p[1] - c.y) / b], d && S(p, p, d), x /= _[0] * A, b /= _[1] * A;
                            var w = M(x, b);
                            l = 0 / w, u = 2 * n.r / w - l
                        }
                        var T = n.colorStops.slice();
                        T.sort(function (t, e) {
                            return t.offset - e.offset
                        });
                        for (var C = T[ae], L = [], P = [], k = 0; C > k; k++) {
                            var z = T[k], D = q(z.color);
                            P.push(z.offset * u + l + " " + D[0]), (0 === k || k === C - 1) && L.push(D)
                        }
                        if (C >= 2) {
                            var I = L[0][0], O = L[1][0], R = L[0][1] * e[me], E = L[1][1] * e[me];
                            t.type = r, t.method = "none", t.focus = "100%", t.angle = o, t.color = I, t.color2 = O, t.colors = P.join(","), t[me] = E, t.opacity2 = R
                        }
                        "radial" === r && (t.focusposition = s.join(","))
                    } else H(t, n, e[me])
                }, X = function (t, e) {
                    null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e[h] || e[h] instanceof m || H(t, e[h], e[me])
                }, Z = function (t, e, i, n) {
                    var r = "fill" == e, a = t.getElementsByTagName(e)[0];
                    null != i[e] && "none" !== i[e] && (r || !r && i[f]) ? (t[r ? "filled" : "stroked"] = "true", i[e] instanceof m && B(t, a), a || (a = g.createNode(e)), r ? W(a, i, n) : X(a, i), E(t, a)) : (t[r ? "filled" : "stroked"] = "false", B(t, a))
                }, U = [[], [], []], j = function (t, e) {
                    var i, n, a, o, s, l, u = r.M, c = r.C, h = r.L, f = r.A, d = r.Q, p = [];
                    for (o = 0; o < t[ae];) {
                        switch (a = t[o++], n = "", i = 0, a) {
                            case u:
                                n = " m ", i = 1, s = t[o++], l = t[o++], U[0][0] = s, U[0][1] = l;
                                break;
                            case h:
                                n = " l ", i = 1, s = t[o++], l = t[o++], U[0][0] = s, U[0][1] = l;
                                break;
                            case d:
                            case c:
                                n = " c ", i = 3;
                                var v, m, g = t[o++], x = t[o++], M = t[o++], C = t[o++];
                                a === d ? (v = M, m = C, M = (M + 2 * g) / 3, C = (C + 2 * x) / 3, g = (s + 2 * g) / 3, x = (l + 2 * x) / 3) : (v = t[o++], m = t[o++]), U[0][0] = g, U[0][1] = x, U[1][0] = M, U[1][1] = C, U[2][0] = v, U[2][1] = m, s = v, l = m;
                                break;
                            case f:
                                var P = 0, k = 0, z = 1, D = 1, I = 0;
                                e && (P = e[4], k = e[5], z = _(e[0] * e[0] + e[1] * e[1]), D = _(e[2] * e[2] + e[3] * e[3]), I = Math.atan2(-e[1] / D, e[0] / z));
                                var O = t[o++], R = t[o++], E = t[o++], B = t[o++], N = t[o++] + I, F = t[o++] + N + I;
                                o++;
                                var V = t[o++], G = O + b(N) * E, H = R + w(N) * B, g = O + b(F) * E, x = R + w(F) * B,
                                    q = V ? " wa " : " at ";
                                Math.abs(G - g) < 1e-10 && (Math.abs(F - N) > .01 ? V && (G += 270 / A) : Math.abs(H - R) < 1e-10 ? V && O > G || !V && G > O ? x -= 270 / A : x += 270 / A : V && R > H || !V && H > R ? g += 270 / A : g -= 270 / A), p.push(q, y(((O - E) * z + P) * A - L), T, y(((R - B) * D + k) * A - L), T, y(((O + E) * z + P) * A - L), T, y(((R + B) * D + k) * A - L), T, y((G * z + P) * A - L), T, y((H * D + k) * A - L), T, y((g * z + P) * A - L), T, y((x * D + k) * A - L)), s = g, l = x;
                                break;
                            case r.R:
                                var W = U[0], X = U[1];
                                W[0] = t[o++], W[1] = t[o++], X[0] = W[0] + t[o++], X[1] = W[1] + t[o++], e && (S(W, W, e), S(X, X, e)), W[0] = y(W[0] * A - L), X[0] = y(X[0] * A - L), W[1] = y(W[1] * A - L), X[1] = y(X[1] * A - L), p.push(" m ", W[0], T, W[1], " l ", X[0], T, W[1], " l ", X[0], T, X[1], " l ", W[0], T, X[1]);
                                break;
                            case r.Z:
                                p.push(" x ")
                        }
                        if (i > 0) {
                            p.push(n);
                            for (var Z = 0; i > Z; Z++) {
                                var j = U[Z];
                                e && S(j, j, e), p.push(y(j[0] * A - L), T, y(j[1] * A - L), i - 1 > Z ? T : "")
                            }
                        }
                    }
                    return p.join("")
                };
            v[fe].brushVML = function (t) {
                var e = this.style, n = this._vmlEl;
                n || (n = g.createNode("shape"), I(n), this._vmlEl = n), Z(n, "fill", e, this), Z(n, h, e, this);
                var r = this[a], o = null != r, s = n.getElementsByTagName(h)[0];
                if (s) {
                    var l = e[f];
                    if (o && !e.strokeNoScale) {
                        var u = r[0] * r[3] - r[1] * r[2];
                        l *= _(x(u))
                    }
                    s.weight = l + "px"
                }
                var c = this.path;
                this.__dirtyPath && (c.beginPath(), this[i](c, this.shape), c.toStatic(), this.__dirtyPath = !1), n.path = j(c.data, this[a]), n.style.zIndex = N(this[G], this.z, this.z2), E(t, n), e.text ? this.drawRectText(t, this[Ae]()) : this.removeRectText(t)
            }, v[fe].onRemove = function (t) {
                B(t, this._vmlEl), this.removeRectText(t)
            }, v[fe].onAdd = function (t) {
                E(t, this._vmlEl), this.appendRectText(t)
            };
            var Y = function (t) {
                return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
            };
            c[fe].brushVML = function (t) {
                var e, i, n = this.style, r = n.image;
                if (Y(r)) {
                    var o = r.src;
                    if (o === this._imageSrc) e = this._imageWidth, i = this._imageHeight; else {
                        var s = r.runtimeStyle, l = s.width, u = s[Ce];
                        s.width = "auto", s[Ce] = "auto", e = r.width, i = r[Ce], s.width = l, s[Ce] = u, this._imageSrc = o, this._imageWidth = e, this._imageHeight = i
                    }
                    r = o
                } else r === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
                if (r) {
                    var c = n.x || 0, h = n.y || 0, f = n.width, d = n[Ce], p = n.sWidth, v = n.sHeight, m = n.sx || 0,
                        x = n.sy || 0, b = p && v, w = this._vmlEl;
                    w || (w = g.doc[D]("div"), I(w), this._vmlEl = w);
                    var A, L = w.style, P = !1, k = 1, z = 1;
                    if (this[a] && (A = this[a], k = _(A[0] * A[0] + A[1] * A[1]), z = _(A[2] * A[2] + A[3] * A[3]), P = A[1] || A[2]), P) {
                        var O = [c, h], R = [c + f, h], B = [c, h + d], F = [c + f, h + d];
                        S(O, O, A), S(R, R, A), S(B, B, A), S(F, F, A);
                        var V = M(O[0], R[0], B[0], F[0]), H = M(O[1], R[1], B[1], F[1]), q = [];
                        q.push("M11=", A[0] / k, T, "M12=", A[2] / z, T, "M21=", A[1] / k, T, "M22=", A[3] / z, T, "Dx=", y(c * k + A[4]), T, "Dy=", y(h * z + A[5])), L.padding = "0 " + y(V) + "px " + y(H) + "px 0", L.filter = C + ".Matrix(" + q.join("") + ", SizingMethod=clip)"
                    } else A && (c = c * k + A[4], h = h * z + A[5]), L.filter = "", L.left = y(c) + "px", L.top = y(h) + "px";
                    var W = this._imageEl, X = this._cropEl;
                    W || (W = g.doc[D]("div"), this._imageEl = W);
                    var Z = W.style;
                    if (b) {
                        if (e && i) Z.width = y(k * e * f / p) + "px", Z[Ce] = y(z * i * d / v) + "px"; else {
                            var U = new Image, j = this;
                            U.onload = function () {
                                U.onload = null, e = U.width, i = U[Ce], Z.width = y(k * e * f / p) + "px", Z[Ce] = y(z * i * d / v) + "px", j._imageWidth = e, j._imageHeight = i, j._imageSrc = r
                            }, U.src = r
                        }
                        X || (X = g.doc[D]("div"), X.style.overflow = "hidden", this._cropEl = X);
                        var $ = X.style;
                        $.width = y((f + m * f / p) * k), $[Ce] = y((d + x * d / v) * z), $.filter = C + ".Matrix(Dx=" + -m * f / p * k + ",Dy=" + -x * d / v * z + ")", X.parentNode || w.appendChild(X), W.parentNode != X && X.appendChild(W)
                    } else Z.width = y(k * f) + "px", Z[Ce] = y(z * d) + "px", w.appendChild(W), X && X.parentNode && (w.removeChild(X), this._cropEl = null);
                    var Q = "", K = n[me];
                    1 > K && (Q += ".Alpha(opacity=" + y(100 * K) + ") "), Q += C + ".AlphaImageLoader(src=" + r + ", SizingMethod=scale)", Z.filter = Q, w.style.zIndex = N(this[G], this.z, this.z2), E(t, w), n.text && this.drawRectText(t, this[Ae]())
                }
            }, c[fe].onRemove = function (t) {
                B(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
            }, c[fe].onAdd = function (t) {
                E(t, this._vmlEl), this.appendRectText(t)
            };
            var $, Q = k, K = {}, J = 0, te = 100, ee = document[D]("div"), ie = function (t) {
                var e = K[t];
                if (!e) {
                    J > te && (J = 0, K = {});
                    var i, n = ee.style;
                    try {
                        n.font = t, i = n.fontFamily.split(",")[0]
                    } catch (r) {
                    }
                    e = {
                        style: n.fontStyle || Q,
                        variant: n.fontVariant || Q,
                        weight: n.fontWeight || Q,
                        size: 0 | parseFloat(n.fontSize || 12),
                        family: i || "Microsoft YaHei"
                    }, K[t] = e, J++
                }
                return e
            };
            s.measureText = function (t, e) {
                var i = g.doc;
                $ || ($ = i[D]("div"), $.style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", g.doc.body.appendChild($));
                try {
                    $.style.font = e
                } catch (n) {
                }
                return $.innerHTML = "", $.appendChild(i.createTextNode(t)), {width: $.offsetWidth}
            };
            for (var ne = new n, re = function (t, e, i, n) {
                var r = this.style, o = r.text;
                if (o) {
                    var l, u, c = r[ke], f = ie(r.textFont),
                        p = f.style + " " + f.variant + " " + f.weight + " " + f.size + 'px "' + f.family + '"',
                        v = r.textBaseline, m = r.textVerticalAlign;
                    i = i || s[Ae](o, p, c, v);
                    var _ = this[a];
                    if (_ && !n && (ne.copy(e), ne[d](_), e = ne), n) l = e.x, u = e.y; else {
                        var x = r.textPosition, b = r.textDistance;
                        if (x instanceof Array) l = e.x + F(x[0], e.width), u = e.y + F(x[1], e[Ce]), c = c || "left", v = v || "top"; else {
                            var w = s.adjustTextPositionOnRect(x, e, i, b);
                            l = w.x, u = w.y, c = c || w[ke], v = v || w.textBaseline
                        }
                    }
                    if (m) {
                        switch (m) {
                            case be:
                                u -= i[Ce] / 2;
                                break;
                            case _e:
                                u -= i[Ce]
                        }
                        v = "top"
                    }
                    var M = f.size;
                    switch (v) {
                        case"hanging":
                        case"top":
                            u += M / 1.75;
                            break;
                        case be:
                            break;
                        default:
                            u -= M / 2.25
                    }
                    switch (c) {
                        case"left":
                            break;
                        case xe:
                            l -= i.width / 2;
                            break;
                        case"right":
                            l -= i.width
                    }
                    var C, A, L, P = g.createNode, k = this._textVmlEl;
                    k ? (L = k.firstChild, C = L.nextSibling, A = C.nextSibling) : (k = P("line"), C = P("path"), A = P("textpath"), L = P("skew"), A.style["v-text-align"] = "left", I(k), C.textpathok = !0, A.on = !0, k.from = "0 0", k.to = "1000 0.05", E(k, L), E(k, C), E(k, A), this._textVmlEl = k);
                    var z = [l, u], D = k.style;
                    _ && n ? (S(z, z, _), L.on = !0, L.matrix = _[0].toFixed(3) + T + _[2].toFixed(3) + T + _[1].toFixed(3) + T + _[3].toFixed(3) + ",0,0", L.offset = (y(z[0]) || 0) + "," + (y(z[1]) || 0), L.origin = "0 0", D.left = "0px", D.top = "0px") : (L.on = !1, D.left = y(l) + "px", D.top = y(u) + "px"), A[he] = O(o);
                    try {
                        A.style.font = p
                    } catch (R) {
                    }
                    Z(k, "fill", {
                        fill: n ? r.fill : r.textFill,
                        opacity: r[me]
                    }, this), Z(k, h, {
                        stroke: n ? r[h] : r.textStroke,
                        opacity: r[me],
                        lineDash: r.lineDash
                    }, this), k.style.zIndex = N(this[G], this.z, this.z2), E(t, k)
                }
            }, oe = function (t) {
                B(t, this._textVmlEl), this._textVmlEl = null
            }, se = function (t) {
                E(t, this._textVmlEl)
            }, ue = [l, u, c, v, p], ce = 0; ce < ue[ae]; ce++) {
                var de = ue[ce][fe];
                de.drawRectText = re, de.removeRectText = oe, de.appendRectText = se
            }
            p[fe].brushVML = function (t) {
                var e = this.style;
                e.text ? this.drawRectText(t, {
                    x: e.x || 0,
                    y: e.y || 0,
                    width: 0,
                    height: 0
                }, this[Ae](), !0) : this.removeRectText(t)
            }, p[fe].onRemove = function (t) {
                this.removeRectText(t)
            }, p[fe].onAdd = function (t) {
                this.appendRectText(t)
            }
        }
    }), e("echarts/scale/Scale", [Ne, "../util/clazz"], function (t) {
        function e() {
            this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
        }

        var i = t("../util/clazz"), n = e[fe];
        return n.parse = function (t) {
            return t
        }, n[R] = function (t) {
            var e = this._extent;
            return t >= e[0] && t <= e[1]
        }, n[O] = function (t) {
            var e = this._extent;
            return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
        }, n.scale = function (t) {
            var e = this._extent;
            return t * (e[1] - e[0]) + e[0]
        }, n.unionExtent = function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
        }, n[I] = function () {
            return this._extent.slice()
        }, n.setExtent = function (t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
        }, n.getTicksLabels = function () {
            for (var t = [], e = this.getTicks(), i = 0; i < e[ae]; i++) t.push(this.getLabel(e[i]));
            return t
        }, i.enableClassExtend(e), i.enableClassManagement(e, {registerWhenExtend: !0}), e
    }), e("echarts/scale/Interval", [Ne, "../util/number", "../util/format", "./Scale"], function (t) {
        var e = t("../util/number"), i = t("../util/format"), n = t("./Scale"), r = Math.floor, a = Math.ceil,
            o = e.getPrecisionSafe, s = e.round, l = n[$]({
                type: "interval", _interval: 0, setExtent: function (t, e) {
                    var i = this._extent;
                    isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
                }, unionExtent: function (t) {
                    var e = this._extent;
                    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l[fe].setExtent.call(this, e[0], e[1])
                }, getInterval: function () {
                    return this._interval || this.niceTicks(), this._interval
                }, setInterval: function (t) {
                    this._interval = t, this._niceExtent = this._extent.slice()
                }, getTicks: function () {
                    this._interval || this.niceTicks();
                    var t = this._interval, e = this._extent, i = [], n = 1e4;
                    if (t) {
                        var r = this._niceExtent, a = o(t) + 2;
                        e[0] < r[0] && i.push(e[0]);
                        for (var l = r[0]; l <= r[1];) if (i.push(l), l = s(l + t, a), i[ae] > n) return [];
                        e[1] > (i[ae] ? i[i[ae] - 1] : r[1]) && i.push(e[1])
                    }
                    return i
                }, getTicksLabels: function () {
                    for (var t = [], e = this.getTicks(), i = 0; i < e[ae]; i++) t.push(this.getLabel(e[i]));
                    return t
                }, getLabel: function (t) {
                    return i.addCommas(t)
                }, niceTicks: function (t) {
                    t = t || 5;
                    var i = this._extent, n = i[1] - i[0];
                    if (isFinite(n)) {
                        0 > n && (n = -n, i.reverse());
                        var l = s(e.nice(n / t, !0), Math.max(o(i[0]), o(i[1])) + 2), u = o(l) + 2,
                            c = [s(a(i[0] / l) * l, u), s(r(i[1] / l) * l, u)];
                        this._interval = l, this._niceExtent = c
                    }
                }, niceExtent: function (t, e, i) {
                    var n = this._extent;
                    if (n[0] === n[1]) if (0 !== n[0]) {
                        var o = n[0];
                        i ? n[0] -= o / 2 : (n[1] += o / 2, n[0] -= o / 2)
                    } else n[1] = 1;
                    var l = n[1] - n[0];
                    isFinite(l) || (n[0] = 0, n[1] = 1), this.niceTicks(t);
                    var u = this._interval;
                    e || (n[0] = s(r(n[0] / u) * u)), i || (n[1] = s(a(n[1] / u) * u))
                }
            });
        return l[ee] = function () {
            return new l
        }, l
    }), e("echarts/coord/axisHelper", [Ne, "../scale/Ordinal", "../scale/Interval", "../scale/Time", "../scale/Log", "../scale/Scale", "../util/number", Be, "zrender/contain/text"], function (t) {
        var e = t("../scale/Ordinal"), i = t("../scale/Interval");
        t("../scale/Time"), t("../scale/Log");
        var n = t("../scale/Scale"), r = t("../util/number"), a = t(Be), o = t("zrender/contain/text"), s = {};
        return s.getScaleExtent = function (t, e) {
            var i = t.scale, n = i[I](), o = n[1] - n[0];
            if (i.type === v) return isFinite(o) ? n : [0, 0];
            var s = e.getMin ? e.getMin() : e.get("min"), l = e.getMax ? e.getMax() : e.get("max"),
                u = e.getNeedCrossZero ? e.getNeedCrossZero() : !e.get("scale"), c = e.get("boundaryGap");
            a[F](c) || (c = [c || 0, c || 0]), c[0] = r[_](c[0], 1), c[1] = r[_](c[1], 1);
            var h = !0, f = !0;
            return null == s && (s = n[0] - c[0] * o, h = !1), null == l && (l = n[1] + c[1] * o, f = !1), "dataMin" === s && (s = n[0]), "dataMax" === l && (l = n[1]), u && (s > 0 && l > 0 && !h && (s = 0), 0 > s && 0 > l && !f && (l = 0)), [s, l]
        }, s.niceScaleExtent = function (t, e) {
            var i = t.scale, n = s.getScaleExtent(t, e), r = null != (e.getMin ? e.getMin() : e.get("min")),
                a = null != (e.getMax ? e.getMax() : e.get("max")), o = e.get("splitNumber");
            "log" === i.type && (i.base = e.get("logBase")), i.setExtent(n[0], n[1]), i.niceExtent(o, r, a);
            var l = e.get("minInterval");
            if (isFinite(l) && !r && !a && "interval" === i.type) {
                var u = i.getInterval(), c = Math.max(Math.abs(u), l) / u;
                n = i[I]();
                var h = (n[1] + n[0]) / 2;
                i.setExtent(c * (n[0] - h) + h, c * (n[1] - h) + h), i.niceExtent(o)
            }
            var u = e.get("interval");
            null != u && i.setInterval && i.setInterval(u)
        }, s.createScaleByModel = function (t, r) {
            if (r = r || t.get("type")) switch (r) {
                case y:
                    return new e(t.getCategories(), [1 / 0, -1 / 0]);
                case"value":
                    return new i;
                default:
                    return (n.getClass(r) || i)[ee](t)
            }
        }, s.ifAxisCrossZero = function (t) {
            var e = t.scale[I](), i = e[0], n = e[1];
            return !(i > 0 && n > 0 || 0 > i && 0 > n)
        }, s.getAxisLabelInterval = function (t, e, i, n) {
            var r, a = 0, s = 0, l = 1;
            e[ae] > 40 && (l = Math.floor(e[ae] / 40));
            for (var u = 0; u < t[ae]; u += l) {
                var c = t[u], h = o[Ae](e[u], i, xe, "top");
                h[n ? "x" : "y"] += c, h[n ? "width" : Ce] *= 1.3, r ? r.intersect(h) ? (s++, a = Math.max(a, s)) : (r.union(h), s = 0) : r = h.clone()
            }
            return 0 === a && l > 1 ? l : (a + 1) * l - 1
        }, s.getFormattedLabels = function (t, e) {
            var i = t.scale, n = i.getTicksLabels(), r = i.getTicks();
            return typeof e === he ? (e = function (t) {
                return function (e) {
                    return t[V]("{value}", e)
                }
            }(e), a.map(n, e)) : typeof e === N ? a.map(r, function (n, r) {
                return e(t.type === y ? i.getLabel(n) : n, r)
            }, this) : n
        }, s
    }), e("echarts/coord/cartesian/Cartesian2D", [Ne, Be, "./Cartesian"], function (t) {
        function e(t) {
            n.call(this, t)
        }

        var i = t(Be), n = t("./Cartesian");
        return e[fe] = {
            constructor: e, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
                return this.getAxesByScale(v)[0] || this.getAxesByScale("time")[0] || this[g]("x")
            }, containPoint: function (t) {
                var e = this[g]("x"), i = this[g]("y");
                return e[R](e.toLocalCoord(t[0])) && i[R](i.toLocalCoord(t[1]))
            }, containData: function (t) {
                return this[g]("x").containData(t[0]) && this[g]("y").containData(t[1])
            }, dataToPoints: function (t, e) {
                return t.mapArray(["x", "y"], function (t, e) {
                    return this.dataToPoint([t, e])
                }, e, this)
            }, dataToPoint: function (t, e) {
                var i = this[g]("x"), n = this[g]("y");
                return [i.toGlobalCoord(i[m](t[0], e)), n.toGlobalCoord(n[m](t[1], e))]
            }, pointToData: function (t, e) {
                var i = this[g]("x"), n = this[g]("y");
                return [i.coordToData(i.toLocalCoord(t[0]), e), n.coordToData(n.toLocalCoord(t[1]), e)]
            }, getOtherAxis: function (t) {
                return this[g]("x" === t.dim ? "y" : "x")
            }
        }, i[E](e, n), e
    }), e("echarts/coord/cartesian/Axis2D", [Ne, Be, "../Axis", "./axisLabelInterval"], function (t) {
        var e = t(Be), i = t("../Axis"), n = t("./axisLabelInterval"), r = function (t, e, n, r, a) {
            i.call(this, t, e, n), this.type = r || "value", this[ye] = a || _e
        };
        return r[fe] = {
            constructor: r, index: 0, onZero: !1, model: null, isHorizontal: function () {
                var t = this[ye];
                return "top" === t || t === _e
            }, getGlobalExtent: function () {
                var t = this[I]();
                return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
            }, getLabelInterval: function () {
                var t = this._labelInterval;
                return t || (t = this._labelInterval = n(this)), t
            }, isLabelIgnored: function (t) {
                if (this.type === y) {
                    var e = this.getLabelInterval();
                    return typeof e === N && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                }
            }, toLocalCoord: null, toGlobalCoord: null
        }, e[E](r, i), r
    }), e("zrender/tool/path", [Ne, "../graphic/Path", "../core/PathProxy", "./transformPath", "../core/matrix"], function (t) {
        function e(t, e, i, n, r, a, o, s, l, u, c) {
            var d = l * (v / 180), m = p(d) * (t - i) / 2 + f(d) * (e - n) / 2,
                _ = -1 * f(d) * (t - i) / 2 + p(d) * (e - n) / 2, x = m * m / (o * o) + _ * _ / (s * s);
            x > 1 && (o *= h(x), s *= h(x));
            var b = (r === a ? -1 : 1) * h((o * o * s * s - o * o * _ * _ - s * s * m * m) / (o * o * _ * _ + s * s * m * m)) || 0,
                w = b * o * _ / s, M = b * -s * m / o, S = (t + i) / 2 + p(d) * w - f(d) * M,
                T = (e + n) / 2 + f(d) * w + p(d) * M, C = y([1, 0], [(m - w) / o, (_ - M) / s]),
                A = [(m - w) / o, (_ - M) / s], L = [(-1 * m - w) / o, (-1 * _ - M) / s], P = y(A, L);
            g(A, L) <= -1 && (P = v), g(A, L) >= 1 && (P = 0), 0 === a && P > 0 && (P -= 2 * v), 1 === a && 0 > P && (P += 2 * v), c.addData(u, S, T, o, s, C, P, d, a)
        }

        function r(t) {
            if (!t) return [];
            var i, n = t[V](/-/g, " -")[V](/  /g, " ")[V](/ /g, ",")[V](/,,/g, ",");
            for (i = 0; i < c[ae]; i++) n = n[V](new RegExp(c[i], "g"), "|" + c[i]);
            var r, a = n.split("|"), o = 0, l = 0, u = new s, h = s.CMD;
            for (i = 1; i < a[ae]; i++) {
                var f, d = a[i], p = d.charAt(0), v = 0, m = d.slice(1)[V](/e,-/g, "e-").split(",");
                m[ae] > 0 && "" === m[0] && m.shift();
                for (var g = 0; g < m[ae]; g++) m[g] = parseFloat(m[g]);
                for (; v < m[ae] && !isNaN(m[v]) && !isNaN(m[0]);) {
                    var y, _, x, b, w, M, S, T = o, C = l;
                    switch (p) {
                        case"l":
                            o += m[v++], l += m[v++], f = h.L, u.addData(f, o, l);
                            break;
                        case"L":
                            o = m[v++], l = m[v++], f = h.L, u.addData(f, o, l);
                            break;
                        case"m":
                            o += m[v++], l += m[v++], f = h.M, u.addData(f, o, l), p = "l";
                            break;
                        case"M":
                            o = m[v++], l = m[v++], f = h.M, u.addData(f, o, l), p = "L";
                            break;
                        case"h":
                            o += m[v++], f = h.L, u.addData(f, o, l);
                            break;
                        case"H":
                            o = m[v++], f = h.L, u.addData(f, o, l);
                            break;
                        case"v":
                            l += m[v++], f = h.L, u.addData(f, o, l);
                            break;
                        case"V":
                            l = m[v++], f = h.L, u.addData(f, o, l);
                            break;
                        case"C":
                            f = h.C, u.addData(f, m[v++], m[v++], m[v++], m[v++], m[v++], m[v++]), o = m[v - 2], l = m[v - 1];
                            break;
                        case"c":
                            f = h.C, u.addData(f, m[v++] + o, m[v++] + l, m[v++] + o, m[v++] + l, m[v++] + o, m[v++] + l), o += m[v - 2], l += m[v - 1];
                            break;
                        case"S":
                            y = o, _ = l;
                            var A = u.len(), L = u.data;
                            r === h.C && (y += o - L[A - 4], _ += l - L[A - 3]), f = h.C, T = m[v++], C = m[v++], o = m[v++], l = m[v++], u.addData(f, y, _, T, C, o, l);
                            break;
                        case"s":
                            y = o, _ = l;
                            var A = u.len(), L = u.data;
                            r === h.C && (y += o - L[A - 4], _ += l - L[A - 3]), f = h.C, T = o + m[v++], C = l + m[v++], o += m[v++], l += m[v++], u.addData(f, y, _, T, C, o, l);
                            break;
                        case"Q":
                            T = m[v++], C = m[v++], o = m[v++], l = m[v++], f = h.Q, u.addData(f, T, C, o, l);
                            break;
                        case"q":
                            T = m[v++] + o, C = m[v++] + l, o += m[v++], l += m[v++], f = h.Q, u.addData(f, T, C, o, l);
                            break;
                        case"T":
                            y = o, _ = l;
                            var A = u.len(), L = u.data;
                            r === h.Q && (y += o - L[A - 4], _ += l - L[A - 3]), o = m[v++], l = m[v++], f = h.Q, u.addData(f, y, _, o, l);
                            break;
                        case"t":
                            y = o, _ = l;
                            var A = u.len(), L = u.data;
                            r === h.Q && (y += o - L[A - 4], _ += l - L[A - 3]), o += m[v++], l += m[v++], f = h.Q, u.addData(f, y, _, o, l);
                            break;
                        case"A":
                            x = m[v++], b = m[v++], w = m[v++], M = m[v++], S = m[v++], T = o, C = l, o = m[v++], l = m[v++], f = h.A, e(T, C, o, l, M, S, x, b, w, f, u);
                            break;
                        case"a":
                            x = m[v++], b = m[v++], w = m[v++], M = m[v++], S = m[v++], T = o, C = l, o += m[v++], l += m[v++], f = h.A, e(T, C, o, l, M, S, x, b, w, f, u)
                    }
                }
                ("z" === p || "Z" === p) && (f = h.Z, u.addData(f)), r = f
            }
            return u.toStatic(), u
        }

        function a(t, e) {
            var n, a = r(t);
            return e = e || {}, e[i] = function (t) {
                t.setData(a.data), n && l(t, n);
                var e = t.getContext();
                e && t.rebuildPath(e)
            }, e[d] = function (t) {
                n || (n = u[ee]()), u.mul(n, t, n), this.dirty(!0)
            }, e
        }

        var o = t("../graphic/Path"), s = t("../core/PathProxy"), l = t("./transformPath"), u = t("../core/matrix"),
            c = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
            h = Math.sqrt, f = Math.sin, p = Math.cos, v = Math.PI, m = function (t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            }, g = function (t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (m(t) * m(e))
            }, y = function (t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(g(t, e))
            };
        return {
            createFromString: function (t, e) {
                return new o(a(t, e))
            }, extendFromString: function (t, e) {
                return o[$](a(t, e))
            }, mergePath: function (t, e) {
                for (var r = [], a = t[ae], s = 0; a > s; s++) {
                    var l = t[s];
                    l[n] && l[i](l.path, l.shape, !0), r.push(l.path)
                }
                var u = new o(e);
                return u[i] = function (t) {
                    t.appendPath(r);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, u
            }
        }
    }), e("echarts/coord/cartesian/GridModel", [Ne, "./AxisModel", "../../model/Component"], function (t) {
        t("./AxisModel");
        var e = t("../../model/Component");
        return e[$]({
            type: "grid",
            dependencies: ["xAxis", "yAxis"],
            layoutMode: "box",
            coordinateSystem: null,
            defaultOption: {
                show: !1,
                zlevel: 0,
                z: 0,
                left: "10%",
                top: 60,
                right: "10%",
                bottom: 60,
                containLabel: !1,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 1,
                borderColor: "#ccc"
            }
        })
    }), e("zrender/graphic/Path", [Ne, "./Displayable", "../core/util", "../core/PathProxy", "../contain/path", "./Pattern"], function (t) {
        function e(t) {
            r.call(this, t), this.path = new s
        }

        var r = t("./Displayable"), o = t("../core/util"), s = t("../core/PathProxy"), l = t("../contain/path"),
            u = t("./Pattern"), c = u[fe].getCanvasPattern, d = Math.abs;
        return e[fe] = {
            constructor: e, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function (t, e) {
                var r = this.style, a = this.path, o = r.hasStroke(), s = r.hasFill(), l = r.fill, u = r[h],
                    f = s && !!l.colorStops, d = o && !!u.colorStops, p = s && !!l.image, v = o && !!u.image;
                if (r.bind(t, this, e), this.setTransform(t), this[n]) {
                    var m = this[Ae]();
                    f && (this._fillGradient = r.getGradient(t, l, m)), d && (this._strokeGradient = r.getGradient(t, u, m))
                }
                f ? t.fillStyle = this._fillGradient : p && (t.fillStyle = c.call(l, t)), d ? t.strokeStyle = this._strokeGradient : v && (t.strokeStyle = c.call(u, t));
                var g = r.lineDash, y = r.lineDashOffset, _ = !!t.setLineDash, x = this.getGlobalScale();
                a.setScale(x[0], x[1]), this.__dirtyPath || g && !_ && o ? (a = this.path.beginPath(t), g && !_ && (a.setLineDash(g), a.setLineDashOffset(y)), this[i](a, this.shape, !1), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), s && a.fill(t), g && _ && (t.setLineDash(g), t.lineDashOffset = y), o && a[h](t), g && _ && t.setLineDash([]), this.restoreTransform(t), (r.text || 0 === r.text) && this.drawRectText(t, this[Ae]())
            }, buildPath: function () {
            }, getBoundingRect: function () {
                var t = this._rect, e = this.style, r = !t;
                if (r) {
                    var a = this.path;
                    this.__dirtyPath && (a.beginPath(), this[i](a, this.shape, !1)), t = a[Ae]()
                }
                if (this._rect = t, e.hasStroke()) {
                    var o = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this[n] || r) {
                        o.copy(t);
                        var s = e[f], l = e.strokeNoScale ? this.getLineScale() : 1;
                        e.hasFill() || (s = Math.max(s, this.strokeContainThreshold || 4)), l > 1e-10 && (o.width += s / l, o[Ce] += s / l, o.x -= s / l / 2, o.y -= s / l / 2)
                    }
                    return o
                }
                return t
            }, contain: function (t, e) {
                var i = this.transformCoordToLocal(t, e), n = this[Ae](), r = this.style;
                if (t = i[0], e = i[1], n[R](t, e)) {
                    var a = this.path.data;
                    if (r.hasStroke()) {
                        var o = r[f], s = r.strokeNoScale ? this.getLineScale() : 1;
                        if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), l.containStroke(a, o / s, t, e))) return !0
                    }
                    if (r.hasFill()) return l[R](a, t, e)
                }
                return !1
            }, dirty: function (t) {
                null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this[n] = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            }, animateShape: function (t) {
                return this.animate("shape", t)
            }, attrKV: function (t, e) {
                "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : r[fe].attrKV.call(this, t, e)
            }, setShape: function (t, e) {
                var i = this.shape;
                if (i) {
                    if (o[K](t)) for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]); else i[t] = e;
                    this.dirty(!0)
                }
                return this
            }, getLineScale: function () {
                var t = this[a];
                return t && d(t[0] - 1) > 1e-10 && d(t[3] - 1) > 1e-10 ? Math.sqrt(d(t[0] * t[3] - t[2] * t[1])) : 1
            }
        }, e[$] = function (t) {
            var i = function (i) {
                e.call(this, i), t.style && this.style.extendFrom(t.style, !1);
                var n = t.shape;
                if (n) {
                    this.shape = this.shape || {};
                    var r = this.shape;
                    for (var a in n) !r.hasOwnProperty(a) && n.hasOwnProperty(a) && (r[a] = n[a])
                }
                t.init && t.init.call(this, i)
            };
            o[E](i, e);
            for (var n in t) "style" !== n && "shape" !== n && (i[fe][n] = t[n]);
            return i
        }, o[E](e, r), e
    }), e("zrender/graphic/Gradient", [Ne], function () {
        var t = function (t) {
            this.colorStops = t || []
        };
        return t[fe] = {
            constructor: t, addColorStop: function (t, e) {
                this.colorStops.push({offset: t, color: e})
            }
        }, t
    }), e("zrender/container/Group", [Ne, "../core/util", "../Element", "../core/BoundingRect"], function (t) {
        var e = t("../core/util"), i = t("../Element"), r = t("../core/BoundingRect"), a = function (t) {
            t = t || {}, i.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            this._children = [], this.__storage = null, this[n] = !0
        };
        return a[fe] = {
            constructor: a, isGroup: !0, type: "group", silent: !1, children: function () {
                return this._children.slice()
            }, childAt: function (t) {
                return this._children[t]
            }, childOfName: function (t) {
                for (var e = this._children, i = 0; i < e[ae]; i++) if (e[i].name === t) return e[i]
            }, childCount: function () {
                return this._children[ae]
            }, add: function (t) {
                return t && t !== this && t[u] !== this && (this._children.push(t), this._doAdd(t)), this
            }, addBefore: function (t, e) {
                if (t && t !== this && t[u] !== this && e && e[u] === this) {
                    var i = this._children, n = i[re](e);
                    n >= 0 && (i[U](n, 0, t), this._doAdd(t))
                }
                return this
            }, _doAdd: function (t) {
                t[u] && t[u][Q](t), t[u] = this;
                var e = this.__storage, i = this.__zr;
                e && e !== t.__storage && (e.addToMap(t), t instanceof a && t.addChildrenToStorage(e)), i && i.refresh()
            }, remove: function (t) {
                var i = this.__zr, n = this.__storage, r = this._children, o = e[re](r, t);
                return 0 > o ? this : (r[U](o, 1), t[u] = null, n && (n.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(n)), i && i.refresh(), this)
            }, removeAll: function () {
                var t, e, i = this._children, n = this.__storage;
                for (e = 0; e < i[ae]; e++) t = i[e], n && (n.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(n)), t[u] = null;
                return i[ae] = 0, this
            }, eachChild: function (t, e) {
                for (var i = this._children, n = 0; n < i[ae]; n++) {
                    var r = i[n];
                    t.call(e, r, n)
                }
                return this
            }, traverse: function (t, e) {
                for (var i = 0; i < this._children[ae]; i++) {
                    var n = this._children[i];
                    t.call(e, n), "group" === n.type && n[H](t, e)
                }
                return this
            }, addChildrenToStorage: function (t) {
                for (var e = 0; e < this._children[ae]; e++) {
                    var i = this._children[e];
                    t.addToMap(i), i instanceof a && i.addChildrenToStorage(t)
                }
            }, delChildrenFromStorage: function (t) {
                for (var e = 0; e < this._children[ae]; e++) {
                    var i = this._children[e];
                    t.delFromMap(i.id), i instanceof a && i.delChildrenFromStorage(t)
                }
            }, dirty: function () {
                return this[n] = !0, this.__zr && this.__zr.refresh(), this
            }, getBoundingRect: function (t) {
                for (var e = null, i = new r(0, 0, 0, 0), n = t || this._children, a = [], o = 0; o < n[ae]; o++) {
                    var s = n[o];
                    if (!s[oe] && !s.invisible) {
                        var l = s[Ae](), u = s.getLocalTransform(a);
                        u ? (i.copy(l), i[d](u), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
                    }
                }
                return e || i
            }
        }, e[E](a, i), a
    }), e("zrender/graphic/Image", [Ne, "./Displayable", "../core/BoundingRect", "../core/util", "../core/LRU"], function (t) {
        function e(t) {
            i.call(this, t)
        }

        var i = t("./Displayable"), n = t("../core/BoundingRect"), r = t("../core/util"), a = t("../core/LRU"),
            o = new a(50);
        return e[fe] = {
            constructor: e, type: "image", brush: function (t, e) {
                var i, n = this.style, r = n.image;
                if (n.bind(t, this, e), i = typeof r === he ? this._image : r, !i && r) {
                    var a = o.get(r);
                    if (!a) return i = new Image, i.onload = function () {
                        i.onload = null;
                        for (var t = 0; t < a.pending[ae]; t++) a.pending[t].dirty()
                    }, a = {image: i, pending: [this]}, i.src = r, o.put(r, a), void (this._image = i);
                    if (i = a.image, this._image = i, !i.width || !i[Ce]) return void a.pending.push(this)
                }
                if (i) {
                    var s = n.width || i.width, l = n[Ce] || i[Ce], u = n.x || 0, c = n.y || 0;
                    if (!i.width || !i[Ce]) return;
                    if (this.setTransform(t), n.sWidth && n.sHeight) {
                        var h = n.sx || 0, f = n.sy || 0;
                        t.drawImage(i, h, f, n.sWidth, n.sHeight, u, c, s, l)
                    } else if (n.sx && n.sy) {
                        var h = n.sx, f = n.sy, d = s - h, p = l - f;
                        t.drawImage(i, h, f, d, p, u, c, s, l)
                    } else t.drawImage(i, u, c, s, l);
                    null == n.width && (n.width = s), null == n[Ce] && (n[Ce] = l), this.restoreTransform(t), null != n.text && this.drawRectText(t, this[Ae]())
                }
            }, getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new n(t.x || 0, t.y || 0, t.width || 0, t[Ce] || 0)), this._rect
            }
        }, r[E](e, i), e
    }), e("zrender/graphic/shape/Circle", [Ne, "../Path"], function (t) {
        return t("../Path")[$]({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, i) {
                i && t[r](e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        })
    }), e("zrender/graphic/Text", [Ne, "./Displayable", "../core/util", "../contain/text"], function (t) {
        var e = t("./Displayable"), i = t("../core/util"), n = t("../contain/text"), r = function (t) {
            e.call(this, t)
        };
        return r[fe] = {
            constructor: r, type: "text", brush: function (t, e) {
                var i = this.style, r = i.x || 0, a = i.y || 0, o = i.text;
                if (null != o && (o += ""), i.bind(t, this, e), o) {
                    this.setTransform(t);
                    var s, l = i[ke], u = i.textFont || i.font;
                    if (i.textVerticalAlign) {
                        var c = n[Ae](o, u, i[ke], "top");
                        switch (s = be, i.textVerticalAlign) {
                            case be:
                                a -= c[Ce] / 2 - c.lineHeight / 2;
                                break;
                            case _e:
                                a -= c[Ce] - c.lineHeight / 2;
                                break;
                            default:
                                a += c.lineHeight / 2
                        }
                    } else s = i.textBaseline;
                    t.font = u || "12px sans-serif", t[ke] = l || "left", t[ke] !== l && (t[ke] = "left"), t.textBaseline = s || "alphabetic", t.textBaseline !== s && (t.textBaseline = "alphabetic");
                    for (var h = n.measureText("国", t.font).width, f = o.split("\n"), d = 0; d < f[ae]; d++) i.hasFill() && t.fillText(f[d], r, a), i.hasStroke() && t.strokeText(f[d], r, a), a += h;
                    this.restoreTransform(t)
                }
            }, getBoundingRect: function () {
                if (!this._rect) {
                    var t = this.style, e = t.textVerticalAlign,
                        i = n[Ae](t.text + "", t.textFont || t.font, t[ke], e ? "top" : t.textBaseline);
                    switch (e) {
                        case be:
                            i.y -= i[Ce] / 2;
                            break;
                        case _e:
                            i.y -= i[Ce]
                    }
                    i.x += t.x || 0, i.y += t.y || 0, this._rect = i
                }
                return this._rect
            }
        }, i[E](r, e), r
    }), e("zrender/graphic/shape/Sector", [Ne, "../Path"], function (t) {
        return t("../Path")[$]({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, a = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), s = e.startAngle,
                    l = e.endAngle, u = e.clockwise, c = Math.cos(s), h = Math.sin(s);
                t[r](c * a + i, h * a + n), t.lineTo(c * o + i, h * o + n), t.arc(i, n, o, s, l, !u), t.lineTo(Math.cos(l) * a + i, Math.sin(l) * a + n), 0 !== a && t.arc(i, n, a, l, s, u), t.closePath()
            }
        })
    }), e("zrender/graphic/shape/Ring", [Ne, "../Path"], function (t) {
        return t("../Path")[$]({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, a = 2 * Math.PI;
                t[r](i + e.r, n), t.arc(i, n, e.r, 0, a, !1), t[r](i + e.r0, n), t.arc(i, n, e.r0, 0, a, !0)
            }
        })
    }), e("zrender/graphic/shape/Polyline", [Ne, "../helper/poly", "../Path"], function (t) {
        var e = t("../helper/poly");
        return t("../Path")[$]({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, n) {
                e[i](t, n, !1)
            }
        })
    }), e("zrender/graphic/shape/Polygon", [Ne, "../helper/poly", "../Path"], function (t) {
        var e = t("../helper/poly");
        return t("../Path")[$]({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, n) {
                e[i](t, n, !0)
            }
        })
    }), e("zrender/graphic/shape/Rect", [Ne, "../helper/roundRect", "../Path"], function (t) {
        var e = t("../helper/roundRect");
        return t("../Path")[$]({
            type: "rect",
            shape: {r: 0, x: 0, y: 0, width: 0, height: 0},
            buildPath: function (t, n) {
                var r = n.x, a = n.y, o = n.width, s = n[Ce];
                n.r ? e[i](t, n) : t.rect(r, a, o, s), t.closePath()
            }
        })
    }), e("zrender/graphic/shape/BezierCurve", [Ne, "../../core/curve", "../../core/vector", "../Path"], function (t) {
        function e(t, e, i) {
            var n = t.cpx2, r = t.cpy2;
            return null === n || null === r ? [(i ? c : l)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? c : l)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? u : s)(t.x1, t.cpx1, t.x2, e), (i ? u : s)(t.y1, t.cpy1, t.y2, e)]
        }

        var i = t("../../core/curve"), n = t("../../core/vector"), a = i.quadraticSubdivide, o = i.cubicSubdivide,
            s = i.quadraticAt, l = i.cubicAt, u = i.quadraticDerivativeAt, c = i.cubicDerivativeAt, h = [];
        return t("../Path")[$]({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, s = e.x2, l = e.y2, u = e.cpx1, c = e.cpy1, f = e.cpx2, d = e.cpy2,
                    p = e.percent;
                0 !== p && (t[r](i, n), null == f || null == d ? (1 > p && (a(i, u, s, p, h), u = h[1], s = h[2], a(n, c, l, p, h), c = h[1], l = h[2]), t.quadraticCurveTo(u, c, s, l)) : (1 > p && (o(i, u, f, s, p, h), u = h[1], f = h[2], s = h[3], o(n, c, d, l, p, h), c = h[1], d = h[2], l = h[3]), t.bezierCurveTo(u, c, f, d, s, l)))
            },
            pointAt: function (t) {
                return e(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var i = e(this.shape, t, !0);
                return n[O](i, i)
            }
        })
    }), e("zrender/graphic/shape/Arc", [Ne, "../Path"], function (t) {
        return t("../Path")[$]({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle, l = e.clockwise,
                    u = Math.cos(o), c = Math.sin(o);
                t[r](u * a + i, c * a + n), t.arc(i, n, a, o, s, !l)
            }
        })
    }), e("zrender/graphic/LinearGradient", [Ne, "../core/util", "./Gradient"], function (t) {
        var e = t("../core/util"), i = t("./Gradient"), n = function (t, e, n, r, a, o) {
            this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == r ? 0 : r, this.type = "linear", this.global = o || !1, i.call(this, a)
        };
        return n[fe] = {constructor: n}, e[E](n, i), n
    }), e("zrender/graphic/shape/Line", [Ne, "../Path"], function (t) {
        return t("../Path")[$]({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, a = e.x2, o = e.y2, s = e.percent;
                0 !== s && (t[r](i, n), 1 > s && (a = i * (1 - s) + a * s, o = n * (1 - s) + o * s), t.lineTo(a, o))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        })
    }), e("zrender/graphic/CompoundPath", [Ne, "./Path"], function (t) {
        var e = t("./Path");
        return e[$]({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e[ae]; i++) t = t || e[i].__dirtyPath;
                this.__dirtyPath = t, this[n] = this[n] || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t[ae]; i++) t[i].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var n = e.paths || [], r = 0; r < n[ae]; r++) n[r][i](t, n[r].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths, e = 0; e < t[ae]; e++) t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), e[fe][Ae].call(this)
            }
        })
    }), e("zrender/graphic/RadialGradient", [Ne, "../core/util", "./Gradient"], function (t) {
        var e = t("../core/util"), i = t("./Gradient"), n = function (t, e, n, r, a) {
            this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = a || !1, i.call(this, r)
        };
        return n[fe] = {constructor: n}, e[E](n, i), n
    }), e("zrender/core/BoundingRect", [Ne, "./vector", "./matrix"], function (t) {
        function e(t, e, i, n) {
            0 > i && (t += i, i = -i), 0 > n && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this[Ce] = n
        }

        var i = t("./vector"), n = t("./matrix"), r = i[d], a = Math.min, o = Math.abs, s = Math.max;
        return e[fe] = {
            constructor: e, union: function (t) {
                var e = a(t.x, this.x), i = a(t.y, this.y);
                this.width = s(t.x + t.width, this.x + this.width) - e, this[Ce] = s(t.y + t[Ce], this.y + this[Ce]) - i, this.x = e, this.y = i
            }, applyTransform: function () {
                var t = [], e = [];
                return function (i) {
                    i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this[Ce], r(t, t, i), r(e, e, i), this.x = a(t[0], e[0]), this.y = a(t[1], e[1]), this.width = o(e[0] - t[0]), this[Ce] = o(e[1] - t[1]))
                }
            }(), calculateTransform: function (t) {
                var e = this, i = t.width / e.width, r = t[Ce] / e[Ce], a = n[ee]();
                return n.translate(a, a, [-e.x, -e.y]), n.scale(a, a, [i, r]), n.translate(a, a, [t.x, t.y]), a
            }, intersect: function (t) {
                t instanceof e || (t = e[ee](t));
                var i = this, n = i.x, r = i.x + i.width, a = i.y, o = i.y + i[Ce], s = t.x, l = t.x + t.width, u = t.y,
                    c = t.y + t[Ce];
                return !(s > r || n > l || u > o || a > c)
            }, contain: function (t, e) {
                var i = this;
                return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i[Ce]
            }, clone: function () {
                return new e(this.x, this.y, this.width, this[Ce])
            }, copy: function (t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this[Ce] = t[Ce]
            }, plain: function () {
                return {x: this.x, y: this.y, width: this.width, height: this[Ce]}
            }
        }, e[ee] = function (t) {
            return new e(t.x, t.y, t.width, t[Ce])
        }, e
    }), e("echarts/model/globalDefault", [], function () {
        var t = "";
        return typeof navigator !== s && (t = navigator.platform || ""), {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            textStyle: {
                fontFamily: t.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: !0,
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3
        }
    }), e("zrender/contain/text", [Ne, "../core/util", "../core/BoundingRect"], function (t) {
        function e(t, e) {
            var i = t + ":" + e;
            if (o[i]) return o[i];
            for (var n = (t + "").split("\n"), r = 0, a = 0, u = n[ae]; u > a; a++) r = Math.max(f.measureText(n[a], e).width, r);
            return s > l && (s = 0, o = {}), s++, o[i] = r, r
        }

        function i(t, i, n, r) {
            var a = ((t || "") + "").split("\n")[ae], o = e(t, i), s = e("国", i), l = a * s, u = new c(0, 0, o, l);
            switch (u.lineHeight = s, r) {
                case _e:
                case"alphabetic":
                    u.y -= s;
                    break;
                case be:
                    u.y -= s / 2
            }
            switch (n) {
                case"end":
                case"right":
                    u.x -= u.width;
                    break;
                case xe:
                    u.x -= u.width / 2
            }
            return u
        }

        function n(t, e, i, n) {
            var r = e.x, a = e.y, o = e[Ce], s = e.width, l = i[Ce], u = o / 2 - l / 2, c = "left";
            switch (t) {
                case"left":
                    r -= n, a += u, c = "right";
                    break;
                case"right":
                    r += n + s, a += u, c = "left";
                    break;
                case"top":
                    r += s / 2, a -= n + l, c = xe;
                    break;
                case _e:
                    r += s / 2, a += o + n, c = xe;
                    break;
                case T:
                    r += s / 2, a += u, c = xe;
                    break;
                case"insideLeft":
                    r += n, a += u, c = "left";
                    break;
                case"insideRight":
                    r += s - n, a += u, c = "right";
                    break;
                case"insideTop":
                    r += s / 2, a += n, c = xe;
                    break;
                case"insideBottom":
                    r += s / 2, a += o - l - n, c = xe;
                    break;
                case"insideTopLeft":
                    r += n, a += n, c = "left";
                    break;
                case"insideTopRight":
                    r += s - n, a += n, c = "right";
                    break;
                case"insideBottomLeft":
                    r += n, a += o - l - n;
                    break;
                case"insideBottomRight":
                    r += s - n, a += o - l - n, c = "right"
            }
            return {x: r, y: a, textAlign: c, textBaseline: "top"}
        }

        function r(t, i, n, r, o) {
            if (!i) return "";
            o = o || {}, r = h(r, "...");
            for (var s = h(o.maxIterations, 2), l = h(o.minChar, 0), u = e("国", n), c = e("a", n), f = h(o.placeholder, ""), d = i = Math.max(0, i - 1), p = 0; l > p && d >= c; p++) d -= c;
            var v = e(r);
            v > d && (r = "", v = 0), d = i - v;
            for (var m = (t + "").split("\n"), p = 0, g = m[ae]; g > p; p++) {
                var y = m[p], _ = e(y, n);
                if (!(i >= _)) {
                    for (var x = 0; ; x++) {
                        if (d >= _ || x >= s) {
                            y += r;
                            break
                        }
                        var b = 0 === x ? a(y, d, c, u) : _ > 0 ? Math.floor(y[ae] * d / _) : 0;
                        y = y.substr(0, b), _ = e(y, n)
                    }
                    "" === y && (y = f), m[p] = y
                }
            }
            return m.join("\n")
        }

        function a(t, e, i, n) {
            for (var r = 0, a = 0, o = t[ae]; o > a && e > r; a++) {
                var s = t.charCodeAt(a);
                r += s >= 0 && 127 >= s ? i : n
            }
            return a
        }

        var o = {}, s = 0, l = 5e3, u = t("../core/util"), c = t("../core/BoundingRect"), h = u[S], f = {
            getWidth: e,
            getBoundingRect: i,
            adjustTextPositionOnRect: n,
            truncateText: r,
            measureText: function (t, e) {
                var i = u.getContext();
                return i.font = e || "12px sans-serif", i.measureText(t)
            }
        };
        return f
    }), e("echarts/model/mixin/colorPalette", [], function () {
        return {
            clearColorPalette: function () {
                this._colorIdx = 0, this._colorNameMap = {}
            }, getColorFromPalette: function (t, e) {
                e = e || this;
                var i = e._colorIdx || 0, n = e._colorNameMap || (e._colorNameMap = {});
                if (n[t]) return n[t];
                var r = this.get("color", !0) || [];
                if (r[ae]) {
                    var a = r[i];
                    return t && (n[t] = a), e._colorIdx = (i + 1) % r[ae], a
                }
            }
        }
    }), e("echarts/util/clazz", [Ne, Be], function (t) {
        function e(t, e) {
            var i = n.slice(arguments, 2);
            return this.superClass[fe][e].apply(t, i)
        }

        function i(t, e, i) {
            return this.superClass[fe][e].apply(t, i)
        }

        var n = t(Be), r = {}, a = ".", o = "___EC__COMPONENT__CONTAINER___", s = r.parseClassType = function (t) {
            var e = {main: "", sub: ""};
            return t && (t = t.split(a), e.main = t[0] || "", e.sub = t[1] || ""), e
        };
        return r.enableClassExtend = function (t, r) {
            t.$constructor = t, t[$] = function (t) {
                var r = this, a = function () {
                    t.$constructor ? t.$constructor.apply(this, arguments) : r.apply(this, arguments)
                };
                return n[$](a[fe], t), a[$] = this[$], a.superCall = e, a.superApply = i, n[E](a, this), a.superClass = r, a
            }
        }, r.enableClassManagement = function (t, e) {
            function i(t) {
                var e = r[t.main];
                return e && e[o] || (e = r[t.main] = {}, e[o] = !0), e
            }

            e = e || {};
            var r = {};
            if (t.registerClass = function (t, e) {
                if (e) if (e = s(e), e.sub) {
                    if (e.sub !== o) {
                        var n = i(e);
                        n[e.sub] = t
                    }
                } else r[e.main] = t;
                return t
            }, t.getClass = function (t, e, i) {
                var n = r[t];
                if (n && n[o] && (n = e ? n[e] : null), i && !n) throw new Error("Component " + t + "." + (e || "") + " not exists. Load it first.");
                return n
            }, t.getClassesByMainType = function (t) {
                t = s(t);
                var e = [], i = r[t.main];
                return i && i[o] ? n.each(i, function (t, i) {
                    i !== o && e.push(t)
                }) : e.push(i), e
            }, t.hasClass = function (t) {
                return t = s(t), !!r[t.main]
            }, t.getAllClassMainTypes = function () {
                var t = [];
                return n.each(r, function (e, i) {
                    t.push(i)
                }), t
            }, t.hasSubTypes = function (t) {
                t = s(t);
                var e = r[t.main];
                return e && e[o]
            }, t.parseClassType = s, e.registerWhenExtend) {
                var a = t[$];
                a && (t[$] = function (e) {
                    var i = a.call(this, e);
                    return t.registerClass(i, e.type)
                })
            }
            return t
        }, r.setReadOnly = function () {
        }, r
    }), e("echarts/model/mixin/lineStyle", [Ne, "./makeStyleMapper"], function (t) {
        var e = t("./makeStyleMapper")([[f, "width"], [h, "color"], [me], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        return {
            getLineStyle: function (t) {
                var i = e.call(this, t), n = this.getLineDash(i[f]);
                return n && (i.lineDash = n), i
            }, getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"), i = Math.max(t, 2), n = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [i, i]
            }
        }
    }), e("echarts/model/mixin/areaStyle", [Ne, "./makeStyleMapper"], function (t) {
        return {getAreaStyle: t("./makeStyleMapper")([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], [me], ["shadowColor"]])}
    }), e("echarts/model/mixin/textStyle", [Ne, "zrender/contain/text"], function (t) {
        function e(t, e) {
            return t && t[c](e)
        }

        var i = t("zrender/contain/text");
        return {
            getTextColor: function () {
                var t = this[o];
                return this[c]("color") || t && t.get("textStyle.color")
            }, getFont: function () {
                var t = this[o], i = t && t[De](ze);
                return [this[c]("fontStyle") || e(i, "fontStyle"), this[c]("fontWeight") || e(i, "fontWeight"), (this[c]("fontSize") || e(i, "fontSize") || 12) + "px", this[c]("fontFamily") || e(i, "fontFamily") || "sans-serif"].join(" ")
            }, getTextRect: function (t) {
                var e = this.get(ze) || {};
                return i[Ae](t, this[Pe](), e.align, e.baseline)
            }, truncateText: function (t, e, n, r) {
                return i.truncateText(t, e, this[Pe](), n, r)
            }
        }
    }), e("echarts/model/mixin/itemStyle", [Ne, "./makeStyleMapper"], function (t) {
        var e = t("./makeStyleMapper")([["fill", "color"], [h, "borderColor"], [f, "borderWidth"], [me], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], [ke]]);
        return {
            getItemStyle: function (t) {
                var i = e.call(this, t), n = this.getBorderLineDash();
                return n && (i.lineDash = n), i
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }
    }), e("echarts/component/marker/MarkerModel", [Ne, "../../util/model", Be, ve, "../../util/format", z], function (t) {
        function e(t) {
            i.defaultEmphasis(t.label, i.LABEL_OPTIONS)
        }

        var i = t("../../util/model"), n = t(Be), r = t(ve), a = t("../../util/format"), o = a.addCommas,
            s = a.encodeHTML, l = t(z).extendComponentModel({
                type: "marker",
                dependencies: [j, "grid", "polar", "geo"],
                init: function (t, e, i, n) {
                    this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
                },
                ifEnableAnimation: function () {
                    if (r.node) return !1;
                    var t = this.__hostSeries;
                    return this[c](ue) && t && t.ifEnableAnimation()
                },
                mergeOption: function (t, i, r, a) {
                    var o = this.constructor, s = this.mainType + "Model";
                    r || i[J](function (t) {
                        var r = t.get(this.mainType), l = t[s];
                        return r && r.data ? (l ? l.mergeOption(r, i, !0) : (a && e(r), n.each(r.data, function (t) {
                            t instanceof Array ? (e(t[0]), e(t[1])) : e(t)
                        }), l = new o(r, this, i), n[$](l, {
                            mainType: this.mainType,
                            seriesIndex: t[W],
                            name: t.name,
                            createdBySelf: !0
                        }), l.__hostSeries = t), void (t[s] = l)) : void (t[s] = null)
                    }, this)
                },
                formatTooltip: function (t) {
                    var e = this[Ie](), i = this.getRawValue(t), r = n[F](i) ? n.map(i, o).join(", ") : o(i), a = e[L](t),
                        l = this.name;
                    return (null != i || a) && (l += "<br />"), a && (l += s(a), null != i && (l += " : ")), null != i && (l += r), l
                },
                getData: function () {
                    return this._data
                },
                setData: function (t) {
                    this._data = t
                }
            });
        return n.mixin(l, i.dataFormatMixin), l
    }), e("zrender/core/PathProxy", [Ne, "./curve", "./vector", "./bbox", "./BoundingRect", "../config"], function (t) {
        var e = t("./curve"), i = t("./vector"), n = t("./bbox"), a = t("./BoundingRect"),
            o = t("../config").devicePixelRatio, l = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, u = [], c = [], f = [],
            d = [], p = Math.min, v = Math.max, m = Math.cos, g = Math.sin, y = Math.sqrt, _ = Math.abs,
            x = typeof Float32Array != s, b = function () {
                this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._ux = 0, this._uy = 0
            };
        return b[fe] = {
            constructor: b, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function (t, e) {
                this._ux = _(1 / o / t) || 0, this._uy = _(1 / o / e) || 0
            }, getContext: function () {
                return this._ctx
            }, beginPath: function (t) {
                return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            }, moveTo: function (t, e) {
                return this.addData(l.M, t, e), this._ctx && this._ctx[r](t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            }, lineTo: function (t, e) {
                var i = _(t - this._xi) > this._ux || _(e - this._yi) > this._uy || this._len < 5;
                return this.addData(l.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
            }, bezierCurveTo: function (t, e, i, n, r, a) {
                return this.addData(l.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this
            }, quadraticCurveTo: function (t, e, i, n) {
                return this.addData(l.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
            }, arc: function (t, e, i, n, r, a) {
                return this.addData(l.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = m(r) * i + t, this._xi = g(r) * i + t, this
            }, arcTo: function (t, e, i, n, r) {
                return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
            }, rect: function (t, e, i, n) {
                return this._ctx && this._ctx.rect(t, e, i, n), this.addData(l.R, t, e, i, n), this
            }, closePath: function () {
                this.addData(l.Z);
                var t = this._ctx, e = this._x0, i = this._y0;
                return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
            }, fill: function (t) {
                t && t.fill(), this.toStatic()
            }, stroke: function (t) {
                t && t[h](), this.toStatic()
            }, setLineDash: function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, i = 0; i < t[ae]; i++) e += t[i];
                    this._dashSum = e
                }
                return this
            }, setLineDashOffset: function (t) {
                return this._dashOffset = t, this
            }, len: function () {
                return this._len
            }, setData: function (t) {
                var e = t[ae];
                this.data && this.data[ae] == e || !x || (this.data = new Float32Array(e));
                for (var i = 0; e > i; i++) this.data[i] = t[i];
                this._len = e
            }, appendPath: function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t[ae], i = 0, n = this._len, r = 0; e > r; r++) i += t[r].len();
                x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
                for (var r = 0; e > r; r++) for (var a = t[r].data, o = 0; o < a[ae]; o++) this.data[n++] = a[o];
                this._len = n
            }, addData: function (t) {
                var e = this.data;
                this._len + arguments[ae] > e[ae] && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments[ae]; i++) e[this._len++] = arguments[i];
                this._prevCmd = t
            }, _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                    this.data = t
                }
            }, _needsDash: function () {
                return this._lineDash
            }, _dashedLineTo: function (t, e) {
                var i, n, a = this._dashSum, o = this._dashOffset, s = this._lineDash, l = this._ctx, u = this._xi,
                    c = this._yi, h = t - u, f = e - c, d = y(h * h + f * f), m = u, g = c, _ = s[ae];
                for (h /= d, f /= d, 0 > o && (o = a + o), o %= a, m -= o * h, g -= o * f; h > 0 && t >= m || 0 > h && m >= t || 0 == h && (f > 0 && e >= g || 0 > f && g >= e);) n = this._dashIdx, i = s[n], m += h * i, g += f * i, this._dashIdx = (n + 1) % _, h > 0 && u > m || 0 > h && m > u || f > 0 && c > g || 0 > f && g > c || l[n % 2 ? r : "lineTo"](h >= 0 ? p(m, t) : v(m, t), f >= 0 ? p(g, e) : v(g, e));
                h = m - t, f = g - e, this._dashOffset = -y(h * h + f * f)
            }, _dashedBezierTo: function (t, i, n, a, o, s) {
                var l, u, c, h, f, d = this._dashSum, p = this._dashOffset, v = this._lineDash, m = this._ctx,
                    g = this._xi, _ = this._yi, x = e.cubicAt, b = 0, w = this._dashIdx, M = v[ae], S = 0;
                for (0 > p && (p = d + p), p %= d, l = 0; 1 > l; l += .1) u = x(g, t, n, o, l + .1) - x(g, t, n, o, l), c = x(_, i, a, s, l + .1) - x(_, i, a, s, l), b += y(u * u + c * c);
                for (; M > w && (S += v[w], !(S > p)); w++) ;
                for (l = (S - p) / b; 1 >= l;) h = x(g, t, n, o, l), f = x(_, i, a, s, l), w % 2 ? m[r](h, f) : m.lineTo(h, f), l += v[w] / b, w = (w + 1) % M;
                w % 2 !== 0 && m.lineTo(o, s), u = o - h, c = s - f, this._dashOffset = -y(u * u + c * c)
            }, _dashedQuadraticTo: function (t, e, i, n) {
                var r = i, a = n;
                i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a)
            }, toStatic: function () {
                var t = this.data;
                t instanceof Array && (t[ae] = this._len, x && (this.data = new Float32Array(t)))
            }, getBoundingRect: function () {
                u[0] = u[1] = f[0] = f[1] = Number.MAX_VALUE, c[0] = c[1] = d[0] = d[1] = -Number.MAX_VALUE;
                for (var t = this.data, e = 0, r = 0, o = 0, s = 0, h = 0; h < t[ae];) {
                    var p = t[h++];
                    switch (1 == h && (e = t[h], r = t[h + 1], o = e, s = r), p) {
                        case l.M:
                            o = t[h++], s = t[h++], e = o, r = s, f[0] = o, f[1] = s, d[0] = o, d[1] = s;
                            break;
                        case l.L:
                            n.fromLine(e, r, t[h], t[h + 1], f, d), e = t[h++], r = t[h++];
                            break;
                        case l.C:
                            n.fromCubic(e, r, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], f, d), e = t[h++], r = t[h++];
                            break;
                        case l.Q:
                            n.fromQuadratic(e, r, t[h++], t[h++], t[h], t[h + 1], f, d), e = t[h++], r = t[h++];
                            break;
                        case l.A:
                            var v = t[h++], y = t[h++], _ = t[h++], x = t[h++], b = t[h++], w = t[h++] + b,
                                M = (t[h++], 1 - t[h++]);
                            1 == h && (o = m(b) * _ + v, s = g(b) * x + y), n.fromArc(v, y, _, x, b, w, M, f, d), e = m(w) * _ + v, r = g(w) * x + y;
                            break;
                        case l.R:
                            o = e = t[h++], s = r = t[h++];
                            var S = t[h++], T = t[h++];
                            n.fromLine(o, s, o + S, s + T, f, d);
                            break;
                        case l.Z:
                            e = o, r = s
                    }
                    i.min(u, u, f), i.max(c, c, d)
                }
                return 0 === h && (u[0] = u[1] = c[0] = c[1] = 0), new a(u[0], u[1], c[0] - u[0], c[1] - u[1])
            }, rebuildPath: function (t) {
                for (var e, i, n, a, o, s, u = this.data, c = this._ux, h = this._uy, f = this._len, d = 0; f > d;) {
                    var p = u[d++];
                    switch (1 == d && (n = u[d], a = u[d + 1], e = n, i = a), p) {
                        case l.M:
                            e = n = u[d++], i = a = u[d++], t[r](n, a);
                            break;
                        case l.L:
                            o = u[d++], s = u[d++], (_(o - n) > c || _(s - a) > h || d === f - 1) && (t.lineTo(o, s), n = o, a = s);
                            break;
                        case l.C:
                            t.bezierCurveTo(u[d++], u[d++], u[d++], u[d++], u[d++], u[d++]), n = u[d - 2], a = u[d - 1];
                            break;
                        case l.Q:
                            t.quadraticCurveTo(u[d++], u[d++], u[d++], u[d++]), n = u[d - 2], a = u[d - 1];
                            break;
                        case l.A:
                            var v = u[d++], y = u[d++], x = u[d++], b = u[d++], w = u[d++], M = u[d++], S = u[d++],
                                T = u[d++], C = x > b ? x : b, A = x > b ? 1 : x / b, L = x > b ? b / x : 1,
                                P = Math.abs(x - b) > .001, k = w + M;
                            P ? (t.translate(v, y), t.rotate(S), t.scale(A, L), t.arc(0, 0, C, w, k, 1 - T), t.scale(1 / A, 1 / L), t.rotate(-S), t.translate(-v, -y)) : t.arc(v, y, C, w, k, 1 - T), 1 == d && (e = m(w) * x + v, i = g(w) * b + y), n = m(k) * x + v, a = g(k) * b + y;
                            break;
                        case l.R:
                            e = n = u[d], i = a = u[d + 1], t.rect(u[d++], u[d++], u[d++], u[d++]);
                            break;
                        case l.Z:
                            t.closePath(), n = e, a = i
                    }
                }
            }
        }, b.CMD = l, b
    }), e("zrender/graphic/mixin/RectText", [Ne, "../../contain/text", "../../core/BoundingRect"], function (t) {
        function e(t, e) {
            return typeof t === he ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }

        var i = t("../../contain/text"), n = t("../../core/BoundingRect"), r = new n, o = function () {
        };
        return o[fe] = {
            constructor: o, drawRectText: function (t, n, o) {
                var s = this.style, l = s.text;
                if (null != l && (l += ""), l) {
                    t.save();
                    var u, c, h = s.textPosition, f = s.textDistance, p = s[ke], v = s.textFont || s.font,
                        m = s.textBaseline, g = s.textVerticalAlign;
                    o = o || i[Ae](l, v, p, m);
                    var y = this[a];
                    if (s.textTransform ? this.setTransform(t) : y && (r.copy(n), r[d](y), n = r), h instanceof Array) {
                        if (u = n.x + e(h[0], n.width), c = n.y + e(h[1], n[Ce]), p = p || "left", m = m || "top", g) {
                            switch (g) {
                                case be:
                                    c -= o[Ce] / 2 - o.lineHeight / 2;
                                    break;
                                case _e:
                                    c -= o[Ce] - o.lineHeight / 2;
                                    break;
                                default:
                                    c += o.lineHeight / 2
                            }
                            m = be
                        }
                    } else {
                        var _ = i.adjustTextPositionOnRect(h, n, o, f);
                        u = _.x, c = _.y, p = p || _[ke], m = m || _.textBaseline
                    }
                    t[ke] = p || "left", t.textBaseline = m || "alphabetic";
                    var x = s.textFill, b = s.textStroke;
                    x && (t.fillStyle = x), b && (t.strokeStyle = b), t.font = v || "12px sans-serif", t.shadowBlur = s.textShadowBlur, t.shadowColor = s.textShadowColor || "transparent", t.shadowOffsetX = s.textShadowOffsetX, t.shadowOffsetY = s.textShadowOffsetY;
                    var w = l.split("\n");
                    s.textRotation && (y && t.translate(y[4], y[5]), t.rotate(s.textRotation), y && t.translate(-y[4], -y[5]));
                    for (var M = 0; M < w[ae]; M++) x && t.fillText(w[M], u, c), b && t.strokeText(w[M], u, c), c += o.lineHeight;
                    t.restore()
                }
            }
        }, o
    }), e("zrender/graphic/Displayable", [Ne, "../core/util", "./Style", "../Element", "./mixin/RectText"], function (t) {
        function e(t) {
            t = t || {}, a.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
            this.style = new r(t.style), this._rect = null, this.__clipPaths = []
        }

        var i = t("../core/util"), r = t("./Style"), a = t("../Element"), o = t("./mixin/RectText");
        return e[fe] = {
            constructor: e,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            progressive: -1,
            beforeBrush: function () {
            },
            afterBrush: function () {
            },
            brush: function () {
            },
            getBoundingRect: function () {
            },
            contain: function (t, e) {
                return this.rectContain(t, e)
            },
            traverse: function (t, e) {
                t.call(e, this)
            },
            rectContain: function (t, e) {
                var i = this.transformCoordToLocal(t, e), n = this[Ae]();
                return n[R](i[0], i[1])
            },
            dirty: function () {
                this[n] = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (t) {
                return this.animate("style", t)
            },
            attrKV: function (t, e) {
                "style" !== t ? a[fe].attrKV.call(this, t, e) : this.style.set(e)
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this
            },
            useStyle: function (t) {
                return this.style = new r(t), this.dirty(!1), this
            }
        }, i[E](e, a), i.mixin(e, o), e
    }),e("zrender/vml/core", [Ne, "exports", "module", "../core/env"], function (t, e, i) {
        if (!t("../core/env")[le]) {
            var n, r = "urn:schemas-microsoft-com:vml", a = window, o = a.document, s = !1;
            try {
                !o.namespaces.zrvml && o.namespaces.add("zrvml", r), n = function (t) {
                    return o[D]("<zrvml:" + t + ' class="zrvml">')
                }
            } catch (l) {
                n = function (t) {
                    return o[D]("<" + t + ' xmlns="' + r + '" class="zrvml">')
                }
            }
            var u = function () {
                if (!s) {
                    s = !0;
                    var t = o.styleSheets;
                    t[ae] < 31 ? o.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
                }
            };
            i.exports = {doc: o, initVML: u, createNode: n}
        }
    }),e("zrender/tool/transformPath", [Ne, "../core/PathProxy", "../core/vector"], function (t) {
        function e(t, e) {
            var n, l, u, c, h, f, d = t.data, p = i.M, v = i.C, m = i.L, g = i.R, y = i.A, _ = i.Q;
            for (u = 0, c = 0; u < d[ae];) {
                switch (n = d[u++], c = u, l = 0, n) {
                    case p:
                        l = 1;
                        break;
                    case m:
                        l = 1;
                        break;
                    case v:
                        l = 3;
                        break;
                    case _:
                        l = 2;
                        break;
                    case y:
                        var x = e[4], b = e[5], w = o(e[0] * e[0] + e[1] * e[1]), M = o(e[2] * e[2] + e[3] * e[3]),
                            S = s(-e[1] / M, e[0] / w);
                        d[u++] += x, d[u++] += b, d[u++] *= w, d[u++] *= M, d[u++] += S, d[u++] += S, u += 2, c = u;
                        break;
                    case g:
                        f[0] = d[u++], f[1] = d[u++], r(f, f, e), d[c++] = f[0], d[c++] = f[1], f[0] += d[u++], f[1] += d[u++], r(f, f, e), d[c++] = f[0], d[c++] = f[1]
                }
                for (h = 0; l > h; h++) {
                    var f = a[h];
                    f[0] = d[u++], f[1] = d[u++], r(f, f, e), d[c++] = f[0], d[c++] = f[1]
                }
            }
        }

        var i = t("../core/PathProxy").CMD, n = t("../core/vector"), r = n[d], a = [[], [], []], o = Math.sqrt,
            s = Math.atan2;
        return e
    }),e("zrender/contain/path", [Ne, "../core/PathProxy", "./line", "./cubic", "./quadratic", "./arc", "./util", "../core/curve", "./windingLine"], function (t) {
        function e(t, e) {
            return Math.abs(t - e) < g
        }

        function i() {
            var t = _[0];
            _[0] = _[1], _[1] = t
        }

        function n(t, e, n, r, a, o, s, l, u, c) {
            if (c > e && c > r && c > o && c > l || e > c && r > c && o > c && l > c) return 0;
            var h = d.cubicRootAt(e, r, o, l, c, y);
            if (0 === h) return 0;
            for (var f, p, v = 0, m = -1, g = 0; h > g; g++) {
                var x = y[g], b = 0 === x || 1 === x ? .5 : 1, w = d.cubicAt(t, n, a, s, x);
                u > w || (0 > m && (m = d.cubicExtrema(e, r, o, l, _), _[1] < _[0] && m > 1 && i(), f = d.cubicAt(e, r, o, l, _[0]), m > 1 && (p = d.cubicAt(e, r, o, l, _[1]))), v += 2 == m ? x < _[0] ? e > f ? b : -b : x < _[1] ? f > p ? b : -b : p > l ? b : -b : x < _[0] ? e > f ? b : -b : f > l ? b : -b)
            }
            return v
        }

        function r(t, e, i, n, r, a, o, s) {
            if (s > e && s > n && s > a || e > s && n > s && a > s) return 0;
            var l = d.quadraticRootAt(e, n, a, s, y);
            if (0 === l) return 0;
            var u = d.quadraticExtremum(e, n, a);
            if (u >= 0 && 1 >= u) {
                for (var c = 0, h = d.quadraticAt(e, n, a, u), f = 0; l > f; f++) {
                    var p = 0 === y[f] || 1 === y[f] ? .5 : 1, v = d.quadraticAt(t, i, r, y[f]);
                    o > v || (c += y[f] < u ? e > h ? p : -p : h > a ? p : -p)
                }
                return c
            }
            var p = 0 === y[0] || 1 === y[0] ? .5 : 1, v = d.quadraticAt(t, i, r, y[0]);
            return o > v ? 0 : e > a ? p : -p
        }

        function a(t, e, i, n, r, a, o, s) {
            if (s -= e, s > i || -i > s) return 0;
            var l = Math.sqrt(i * i - s * s);
            y[0] = -l, y[1] = l;
            var u = Math.abs(n - r);
            if (1e-4 > u) return 0;
            if (1e-4 > u % m) {
                n = 0, r = m;
                var c = a ? 1 : -1;
                return o >= y[0] + t && o <= y[1] + t ? c : 0
            }
            if (a) {
                var l = n;
                n = f(r), r = f(l)
            } else n = f(n), r = f(r);
            n > r && (r += m);
            for (var h = 0, d = 0; 2 > d; d++) {
                var p = y[d];
                if (p + t > o) {
                    var v = Math.atan2(s, p), c = a ? 1 : -1;
                    0 > v && (v = m + v), (v >= n && r >= v || v + m >= n && r >= v + m) && (v > Math.PI / 2 && v < 1.5 * Math.PI && (c = -c), h += c)
                }
            }
            return h
        }

        function o(t, i, o, l, f) {
            for (var d = 0, m = 0, g = 0, y = 0, _ = 0, x = 0; x < t[ae];) {
                var b = t[x++];
                switch (b === s.M && x > 1 && (o || (d += p(m, g, y, _, l, f))), 1 == x && (m = t[x], g = t[x + 1], y = m, _ = g), b) {
                    case s.M:
                        y = t[x++], _ = t[x++], m = y, g = _;
                        break;
                    case s.L:
                        if (o) {
                            if (v(m, g, t[x], t[x + 1], i, l, f)) return !0
                        } else d += p(m, g, t[x], t[x + 1], l, f) || 0;
                        m = t[x++], g = t[x++];
                        break;
                    case s.C:
                        if (o) {
                            if (u.containStroke(m, g, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], i, l, f)) return !0
                        } else d += n(m, g, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], l, f) || 0;
                        m = t[x++], g = t[x++];
                        break;
                    case s.Q:
                        if (o) {
                            if (c.containStroke(m, g, t[x++], t[x++], t[x], t[x + 1], i, l, f)) return !0
                        } else d += r(m, g, t[x++], t[x++], t[x], t[x + 1], l, f) || 0;
                        m = t[x++], g = t[x++];
                        break;
                    case s.A:
                        var w = t[x++], M = t[x++], S = t[x++], T = t[x++], C = t[x++], A = t[x++],
                            L = (t[x++], 1 - t[x++]), P = Math.cos(C) * S + w, k = Math.sin(C) * T + M;
                        x > 1 ? d += p(m, g, P, k, l, f) : (y = P, _ = k);
                        var z = (l - w) * T / S + w;
                        if (o) {
                            if (h.containStroke(w, M, T, C, C + A, L, i, z, f)) return !0
                        } else d += a(w, M, T, C, C + A, L, z, f);
                        m = Math.cos(C + A) * S + w, g = Math.sin(C + A) * T + M;
                        break;
                    case s.R:
                        y = m = t[x++], _ = g = t[x++];
                        var D = t[x++], I = t[x++], P = y + D, k = _ + I;
                        if (o) {
                            if (v(y, _, P, _, i, l, f) || v(P, _, P, k, i, l, f) || v(P, k, y, k, i, l, f) || v(y, k, y, _, i, l, f)) return !0
                        } else d += p(P, _, P, k, l, f), d += p(y, k, y, _, l, f);
                        break;
                    case s.Z:
                        if (o) {
                            if (v(m, g, y, _, i, l, f)) return !0
                        } else d += p(m, g, y, _, l, f);
                        m = y, g = _
                }
            }
            return o || e(g, _) || (d += p(m, g, y, _, l, f) || 0), 0 !== d
        }

        var s = t("../core/PathProxy").CMD, l = t("./line"), u = t("./cubic"), c = t("./quadratic"), h = t("./arc"),
            f = t("./util").normalizeRadian, d = t("../core/curve"), p = t("./windingLine"), v = l.containStroke,
            m = 2 * Math.PI, g = 1e-4, y = [-1, -1, -1], _ = [-1, -1];
        return {
            contain: function (t, e, i) {
                return o(t, 0, !1, e, i)
            }, containStroke: function (t, e, i, n) {
                return o(t, e, !0, i, n)
            }
        }
    }),e("zrender/graphic/Pattern", [Ne], function () {
        var t = function (t, e) {
            this.image = t, this.repeat = e, this.type = "pattern"
        };
        return t[fe].getCanvasPattern = function (t) {
            return this._canvasPattern || (this._canvasPattern = t.createPattern(this.image, this.repeat))
        }, t
    }),e("echarts/scale/Ordinal", [Ne, Be, "./Scale"], function (t) {
        var e = t(Be), i = t("./Scale"), n = i[fe], r = i[$]({
            type: "ordinal", init: function (t, e) {
                this._data = t, this._extent = e || [0, t[ae] - 1]
            }, parse: function (t) {
                return typeof t === he ? e[re](this._data, t) : Math.round(t)
            }, contain: function (t) {
                return t = this.parse(t), n[R].call(this, t) && null != this._data[t]
            }, normalize: function (t) {
                return n[O].call(this, this.parse(t))
            }, scale: function (t) {
                return Math.round(n.scale.call(this, t))
            }, getTicks: function () {
                for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
                return t
            }, getLabel: function (t) {
                return this._data[t]
            }, count: function () {
                return this._extent[1] - this._extent[0] + 1
            }, niceTicks: e.noop, niceExtent: e.noop
        });
        return r[ee] = function () {
            return new r
        }, r
    }),e("echarts/model/mixin/makeStyleMapper", [Ne, Be], function (t) {
        var e = t(Be);
        return function (t) {
            for (var i = 0; i < t[ae]; i++) t[i][1] || (t[i][1] = t[i][0]);
            return function (i) {
                for (var n = {}, r = 0; r < t[ae]; r++) {
                    var a = t[r][1];
                    if (!(i && e[re](i, a) >= 0)) {
                        var o = this[c](a);
                        null != o && (n[t[r][0]] = o)
                    }
                }
                return n
            }
        }
    }),e("zrender/core/curve", [Ne, "./vector"], function (t) {
        function e(t) {
            return t > -x && x > t
        }

        function i(t) {
            return t > x || -x > t
        }

        function n(t, e, i, n, r) {
            var a = 1 - r;
            return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i)
        }

        function r(t, e, i, n, r) {
            var a = 1 - r;
            return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r)
        }

        function a(t, i, n, r, a, o) {
            var s = r + 3 * (i - n) - t, l = 3 * (n - 2 * i + t), u = 3 * (i - t), c = t - a, h = l * l - 3 * s * u,
                f = l * u - 9 * s * c, d = u * u - 3 * l * c, p = 0;
            if (e(h) && e(f)) if (e(l)) o[0] = 0; else {
                var v = -u / l;
                v >= 0 && 1 >= v && (o[p++] = v)
            } else {
                var m = f * f - 4 * h * d;
                if (e(m)) {
                    var g = f / h, v = -l / s + g, x = -g / 2;
                    v >= 0 && 1 >= v && (o[p++] = v), x >= 0 && 1 >= x && (o[p++] = x)
                } else if (m > 0) {
                    var b = _(m), S = h * l + 1.5 * s * (-f + b), T = h * l + 1.5 * s * (-f - b);
                    S = 0 > S ? -y(-S, M) : y(S, M), T = 0 > T ? -y(-T, M) : y(T, M);
                    var v = (-l - (S + T)) / (3 * s);
                    v >= 0 && 1 >= v && (o[p++] = v)
                } else {
                    var C = (2 * h * l - 3 * s * f) / (2 * _(h * h * h)), A = Math.acos(C) / 3, L = _(h),
                        P = Math.cos(A), v = (-l - 2 * L * P) / (3 * s), x = (-l + L * (P + w * Math.sin(A))) / (3 * s),
                        k = (-l + L * (P - w * Math.sin(A))) / (3 * s);
                    v >= 0 && 1 >= v && (o[p++] = v), x >= 0 && 1 >= x && (o[p++] = x), k >= 0 && 1 >= k && (o[p++] = k)
                }
            }
            return p
        }

        function o(t, n, r, a, o) {
            var s = 6 * r - 12 * n + 6 * t, l = 9 * n + 3 * a - 3 * t - 9 * r, u = 3 * n - 3 * t, c = 0;
            if (e(l)) {
                if (i(s)) {
                    var h = -u / s;
                    h >= 0 && 1 >= h && (o[c++] = h)
                }
            } else {
                var f = s * s - 4 * l * u;
                if (e(f)) o[0] = -s / (2 * l); else if (f > 0) {
                    var d = _(f), h = (-s + d) / (2 * l), p = (-s - d) / (2 * l);
                    h >= 0 && 1 >= h && (o[c++] = h), p >= 0 && 1 >= p && (o[c++] = p)
                }
            }
            return c
        }

        function s(t, e, i, n, r, a) {
            var o = (e - t) * r + t, s = (i - e) * r + e, l = (n - i) * r + i, u = (s - o) * r + o, c = (l - s) * r + s,
                h = (c - u) * r + u;
            a[0] = t, a[1] = o, a[2] = u, a[3] = h, a[4] = h, a[5] = c, a[6] = l, a[7] = n
        }

        function l(t, e, i, r, a, o, s, l, u, c, h) {
            var f, d, p, v, m, y = .005, x = 1 / 0;
            S[0] = u, S[1] = c;
            for (var w = 0; 1 > w; w += .05) T[0] = n(t, i, a, s, w), T[1] = n(e, r, o, l, w), v = g(S, T), x > v && (f = w, x = v);
            x = 1 / 0;
            for (var M = 0; 32 > M && !(b > y); M++) d = f - y, p = f + y, T[0] = n(t, i, a, s, d), T[1] = n(e, r, o, l, d), v = g(T, S), d >= 0 && x > v ? (f = d, x = v) : (C[0] = n(t, i, a, s, p), C[1] = n(e, r, o, l, p), m = g(C, S), 1 >= p && x > m ? (f = p, x = m) : y *= .5);
            return h && (h[0] = n(t, i, a, s, f), h[1] = n(e, r, o, l, f)), _(x)
        }

        function u(t, e, i, n) {
            var r = 1 - n;
            return r * (r * t + 2 * n * e) + n * n * i
        }

        function c(t, e, i, n) {
            return 2 * ((1 - n) * (e - t) + n * (i - e))
        }

        function h(t, n, r, a, o) {
            var s = t - 2 * n + r, l = 2 * (n - t), u = t - a, c = 0;
            if (e(s)) {
                if (i(l)) {
                    var h = -u / l;
                    h >= 0 && 1 >= h && (o[c++] = h)
                }
            } else {
                var f = l * l - 4 * s * u;
                if (e(f)) {
                    var h = -l / (2 * s);
                    h >= 0 && 1 >= h && (o[c++] = h)
                } else if (f > 0) {
                    var d = _(f), h = (-l + d) / (2 * s), p = (-l - d) / (2 * s);
                    h >= 0 && 1 >= h && (o[c++] = h), p >= 0 && 1 >= p && (o[c++] = p)
                }
            }
            return c
        }

        function f(t, e, i) {
            var n = t + i - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }

        function d(t, e, i, n, r) {
            var a = (e - t) * n + t, o = (i - e) * n + e, s = (o - a) * n + a;
            r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i
        }

        function p(t, e, i, n, r, a, o, s, l) {
            var c, h = .005, f = 1 / 0;
            S[0] = o, S[1] = s;
            for (var d = 0; 1 > d; d += .05) {
                T[0] = u(t, i, r, d), T[1] = u(e, n, a, d);
                var p = g(S, T);
                f > p && (c = d, f = p)
            }
            f = 1 / 0;
            for (var v = 0; 32 > v && !(b > h); v++) {
                var m = c - h, y = c + h;
                T[0] = u(t, i, r, m), T[1] = u(e, n, a, m);
                var p = g(T, S);
                if (m >= 0 && f > p) c = m, f = p; else {
                    C[0] = u(t, i, r, y), C[1] = u(e, n, a, y);
                    var x = g(C, S);
                    1 >= y && f > x ? (c = y, f = x) : h *= .5
                }
            }
            return l && (l[0] = u(t, i, r, c), l[1] = u(e, n, a, c)), _(f)
        }

        var v = t("./vector"), m = v[ee], g = v.distSquare, y = Math.pow, _ = Math.sqrt, x = 1e-8, b = 1e-4, w = _(3),
            M = 1 / 3, S = m(), T = m(), C = m();
        return {
            cubicAt: n,
            cubicDerivativeAt: r,
            cubicRootAt: a,
            cubicExtrema: o,
            cubicSubdivide: s,
            cubicProjectPoint: l,
            quadraticAt: u,
            quadraticDerivativeAt: c,
            quadraticRootAt: h,
            quadraticExtremum: f,
            quadraticSubdivide: d,
            quadraticProjectPoint: p
        }
    }),e("zrender/config", [], function () {
        var t = 1;
        typeof window !== s && (t = Math.max(window.devicePixelRatio || 1, 1));
        var e = {debugMode: 0, devicePixelRatio: t};
        return e
    }),e("zrender/Element", [Ne, "./core/guid", "./mixin/Eventful", "./mixin/Transformable", "./mixin/Animatable", "./core/util"], function (t) {
        var e = t("./core/guid"), i = t("./mixin/Eventful"), n = t("./mixin/Transformable"),
            r = t("./mixin/Animatable"), o = t("./core/util"), s = function (t) {
                n.call(this, t), i.call(this, t), r.call(this, t), this.id = t.id || e()
            };
        return s[fe] = {
            type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function (t, e) {
                switch (this.draggable) {
                    case"horizontal":
                        e = 0;
                        break;
                    case"vertical":
                        t = 0
                }
                var i = this[a];
                i || (i = this[a] = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
            }, beforeUpdate: function () {
            }, afterUpdate: function () {
            }, update: function () {
                this.updateTransform()
            }, traverse: function () {
            }, attrKV: function (t, e) {
                if (t === ye || "scale" === t || "origin" === t) {
                    if (e) {
                        var i = this[t];
                        i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                    }
                } else this[t] = e
            }, hide: function () {
                this[oe] = !0, this.__zr && this.__zr.refresh()
            }, show: function () {
                this[oe] = !1, this.__zr && this.__zr.refresh()
            }, attr: function (t, e) {
                if (typeof t === he) this.attrKV(t, e); else if (o[K](t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                return this.dirty(!1), this
            }, setClipPath: function (t) {
                var e = this.__zr;
                e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
            }, removeClipPath: function () {
                var t = this.clipPath;
                t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
            }, addSelfToZr: function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e) for (var i = 0; i < e[ae]; i++) t[ue].addAnimator(e[i]);
                this.clipPath && this.clipPath.addSelfToZr(t)
            }, removeSelfFromZr: function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e) for (var i = 0; i < e[ae]; i++) t[ue].removeAnimator(e[i]);
                this.clipPath && this.clipPath.removeSelfFromZr(t)
            }
        }, o.mixin(s, r), o.mixin(s, n), o.mixin(s, i), s
    }),e("zrender/graphic/Style", [Ne], function () {
        function t(t, e, i) {
            var n = e.x, r = e.x2, a = e.y, o = e.y2;
            e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i[Ce] + i.y, o = o * i[Ce] + i.y);
            var s = t.createLinearGradient(n, a, r, o);
            return s
        }

        function e(t, e, i) {
            var n = i.width, r = i[Ce], a = Math.min(n, r), o = e.x, s = e.y, l = e.r;
            e.global || (o = o * n + i.x, s = s * r + i.y, l *= a);
            var u = t.createRadialGradient(o, s, 0, o, s, l);
            return u
        }

        var i = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
            n = function (t) {
                this.extendFrom(t)
            };
        n[fe] = {
            constructor: n,
            fill: "#000000",
            stroke: null,
            opacity: 1,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            textFill: "#000",
            textStroke: null,
            textPosition: "inside",
            textBaseline: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            textTransform: !1,
            textRotation: 0,
            blend: null,
            bind: function (t, e, n) {
                for (var r = this, a = n && n.style, o = !a, s = 0; s < i[ae]; s++) {
                    var l = i[s], u = l[0];
                    (o || r[u] !== a[u]) && (t[u] = r[u] || l[1])
                }
                if ((o || r.fill !== a.fill) && (t.fillStyle = r.fill), (o || r[h] !== a[h]) && (t.strokeStyle = r[h]), (o || r[me] !== a[me]) && (t.globalAlpha = null == r[me] ? 1 : r[me]), (o || r.blend !== a.blend) && (t.globalCompositeOperation = r.blend || "source-over"), this.hasStroke()) {
                    var c = r[f];
                    t[f] = c / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                }
            },
            hasFill: function () {
                var t = this.fill;
                return null != t && "none" !== t
            },
            hasStroke: function () {
                var t = this[h];
                return null != t && "none" !== t && this[f] > 0
            },
            extendFrom: function (t, e) {
                if (t) {
                    var i = this;
                    for (var n in t) !t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n])
                }
            },
            set: function (t, e) {
                typeof t === he ? this[t] = e : this.extendFrom(t, !0)
            },
            clone: function () {
                var t = new this.constructor;
                return t.extendFrom(this, !0), t
            },
            getGradient: function (i, n, r) {
                for (var a = "radial" === n.type ? e : t, o = a(i, n, r), s = n.colorStops, l = 0; l < s[ae]; l++) o.addColorStop(s[l].offset, s[l].color);
                return o
            }
        };
        for (var r = n[fe], a = 0; a < i[ae]; a++) {
            var o = i[a];
            o[0] in r || (r[o[0]] = o[1])
        }
        return n.getGradient = r.getGradient, n
    }),e("zrender/core/bbox", [Ne, "./vector", "./curve"], function (t) {
        var e = t("./vector"), i = t("./curve"), n = {}, r = Math.min, a = Math.max, o = Math.sin, s = Math.cos,
            l = e[ee](), u = e[ee](), c = e[ee](), h = 2 * Math.PI;
        n.fromPoints = function (t, e, i) {
            if (0 !== t[ae]) {
                var n, o = t[0], s = o[0], l = o[0], u = o[1], c = o[1];
                for (n = 1; n < t[ae]; n++) o = t[n], s = r(s, o[0]), l = a(l, o[0]), u = r(u, o[1]), c = a(c, o[1]);
                e[0] = s, e[1] = u, i[0] = l, i[1] = c
            }
        }, n.fromLine = function (t, e, i, n, o, s) {
            o[0] = r(t, i), o[1] = r(e, n), s[0] = a(t, i), s[1] = a(e, n)
        };
        var f = [], d = [];
        return n.fromCubic = function (t, e, n, o, s, l, u, c, h, p) {
            var v, m = i.cubicExtrema, g = i.cubicAt, y = m(t, n, s, u, f);
            for (h[0] = 1 / 0, h[1] = 1 / 0, p[0] = -1 / 0, p[1] = -1 / 0, v = 0; y > v; v++) {
                var _ = g(t, n, s, u, f[v]);
                h[0] = r(_, h[0]), p[0] = a(_, p[0])
            }
            for (y = m(e, o, l, c, d), v = 0; y > v; v++) {
                var x = g(e, o, l, c, d[v]);
                h[1] = r(x, h[1]), p[1] = a(x, p[1])
            }
            h[0] = r(t, h[0]), p[0] = a(t, p[0]), h[0] = r(u, h[0]), p[0] = a(u, p[0]), h[1] = r(e, h[1]), p[1] = a(e, p[1]), h[1] = r(c, h[1]), p[1] = a(c, p[1])
        }, n.fromQuadratic = function (t, e, n, o, s, l, u, c) {
            var h = i.quadraticExtremum, f = i.quadraticAt, d = a(r(h(t, n, s), 1), 0), p = a(r(h(e, o, l), 1), 0),
                v = f(t, n, s, d), m = f(e, o, l, p);
            u[0] = r(t, s, v), u[1] = r(e, l, m), c[0] = a(t, s, v), c[1] = a(e, l, m)
        }, n.fromArc = function (t, i, n, r, a, f, d, p, v) {
            var m = e.min, g = e.max, y = Math.abs(a - f);
            if (1e-4 > y % h && y > 1e-4) return p[0] = t - n, p[1] = i - r, v[0] = t + n, void (v[1] = i + r);
            if (l[0] = s(a) * n + t, l[1] = o(a) * r + i, u[0] = s(f) * n + t, u[1] = o(f) * r + i, m(p, l, u), g(v, l, u), a %= h, 0 > a && (a += h), f %= h, 0 > f && (f += h), a > f && !d ? f += h : f > a && d && (a += h), d) {
                var _ = f;
                f = a, a = _
            }
            for (var x = 0; f > x; x += Math.PI / 2) x > a && (c[0] = s(x) * n + t, c[1] = o(x) * r + i, m(p, c, p), g(v, c, v))
        }, n
    }),e("echarts/coord/cartesian/Cartesian", [Ne, Be], function (t) {
        function e(t) {
            return this._axes[t]
        }

        var i = t(Be), n = function (t) {
            this._axes = {}, this._dimList = [], this.name = t || ""
        };
        return n[fe] = {
            constructor: n, type: "cartesian", getAxis: function (t) {
                return this._axes[t]
            }, getAxes: function () {
                return i.map(this._dimList, e, this)
            }, getAxesByScale: function (t) {
                return t = t[de](), i.filter(this.getAxes(), function (e) {
                    return e.scale.type === t
                })
            }, addAxis: function (t) {
                var e = t.dim;
                this._axes[e] = t, this._dimList.push(e)
            }, dataToCoord: function (t) {
                return this._dataCoordConvert(t, m)
            }, coordToData: function (t) {
                return this._dataCoordConvert(t, "coordToData")
            }, _dataCoordConvert: function (t, e) {
                for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i[ae]; r++) {
                    var a = i[r], o = this._axes[a];
                    n[a] = o[e](t[a])
                }
                return n
            }
        }, n
    }),e("echarts/util/component", [Ne, Be, "./clazz"], function (t) {
        var e = t(Be), i = t("./clazz"), n = i.parseClassType, r = 0, a = {}, o = "_";
        return a.getUID = function (t) {
            return [t || "", r++, Math.random()].join(o)
        }, a.enableSubTypeDefaulter = function (t) {
            var e = {};
            return t.registerSubTypeDefaulter = function (t, i) {
                t = n(t), e[t.main] = i
            }, t.determineSubType = function (i, r) {
                var a = r.type;
                if (!a) {
                    var o = n(i).main;
                    t.hasSubTypes(i) && e[o] && (a = e[o](r))
                }
                return a
            }, t
        }, a.enableTopologicalTravel = function (t, i) {
            function n(t) {
                var n = {}, o = [];
                return e.each(t, function (s) {
                    var l = r(n, s), u = l.originalDeps = i(s), c = a(u, t);
                    l.entryCount = c[ae], 0 === l.entryCount && o.push(s), e.each(c, function (t) {
                        e[re](l.predecessor, t) < 0 && l.predecessor.push(t);
                        var i = r(n, t);
                        e[re](i.successor, t) < 0 && i.successor.push(s)
                    })
                }), {graph: n, noEntryList: o}
            }

            function r(t, e) {
                return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
            }

            function a(t, i) {
                var n = [];
                return e.each(t, function (t) {
                    e[re](i, t) >= 0 && n.push(t)
                }), n
            }

            t.topologicalTravel = function (t, i, r, a) {
                function o(t) {
                    u[t].entryCount--, 0 === u[t].entryCount && c.push(t)
                }

                function s(t) {
                    h[t] = !0, o(t)
                }

                if (t[ae]) {
                    var l = n(i), u = l.graph, c = l.noEntryList, h = {};
                    for (e.each(t, function (t) {
                        h[t] = !0
                    }); c[ae];) {
                        var f = c.pop(), d = u[f], p = !!h[f];
                        p && (r.call(a, f, d.originalDeps.slice()), delete h[f]), e.each(d.successor, p ? s : o)
                    }
                    e.each(h, function () {
                        throw new Error("Circle dependency may exists")
                    })
                }
            }
        }, a
    }),e("echarts/model/mixin/boxLayout", [Ne], function () {
        return {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get(_e),
                    width: this.get("width"),
                    height: this.get(Ce)
                }
            }
        }
    }),e("zrender/core/guid", [], function () {
        var t = 2311;
        return function () {
            return t++
        }
    }),e("zrender/mixin/Transformable", [Ne, "../core/matrix", "../core/vector"], function (t) {
        function e(t) {
            return t > o || -o > t
        }

        var i = t("../core/matrix"), n = t("../core/vector"), r = i.identity, o = 5e-5, s = function (t) {
            t = t || {}, t[ye] || (this[ye] = [0, 0]), null == t[b] && (this[b] = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
        }, l = s[fe];
        l[a] = null, l.needLocalTransform = function () {
            return e(this[b]) || e(this[ye][0]) || e(this[ye][1]) || e(this.scale[0] - 1) || e(this.scale[1] - 1)
        }, l.updateTransform = function () {
            var t = this[u], e = t && t[a], n = this.needLocalTransform(), o = this[a];
            return n || e ? (o = o || i[ee](), n ? this.getLocalTransform(o) : r(o), e && (n ? i.mul(o, t[a], o) : i.copy(o, t[a])), this[a] = o, this.invTransform = this.invTransform || i[ee](), void i.invert(this.invTransform, o)) : void (o && r(o))
        }, l.getLocalTransform = function (t) {
            t = t || [], r(t);
            var e = this.origin, n = this.scale, a = this[b], o = this[ye];
            return e && (t[4] -= e[0], t[5] -= e[1]), i.scale(t, t, n), a && i.rotate(t, t, a), e && (t[4] += e[0], t[5] += e[1]), t[4] += o[0], t[5] += o[1], t
        }, l.setTransform = function (t) {
            var e = this[a], i = t.dpr || 1;
            e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
        }, l.restoreTransform = function (t) {
            var e = (this[a], t.dpr || 1);
            t.setTransform(e, 0, 0, e, 0, 0)
        };
        var c = [];
        return l.decomposeTransform = function () {
            if (this[a]) {
                var t = this[u], n = this[a];
                t && t[a] && (i.mul(c, t.invTransform, n), n = c);
                var r = n[0] * n[0] + n[1] * n[1], o = n[2] * n[2] + n[3] * n[3], s = this[ye], l = this.scale;
                e(r - 1) && (r = Math.sqrt(r)), e(o - 1) && (o = Math.sqrt(o)), n[0] < 0 && (r = -r), n[3] < 0 && (o = -o), s[0] = n[4], s[1] = n[5], l[0] = r, l[1] = o, this[b] = Math.atan2(-n[1] / o, n[0] / r)
            }
        }, l.getGlobalScale = function () {
            var t = this[a];
            if (!t) return [1, 1];
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
            return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i]
        }, l.transformCoordToLocal = function (t, e) {
            var i = [t, e], r = this.invTransform;
            return r && n[d](i, i, r), i
        }, l.transformCoordToGlobal = function (t, e) {
            var i = [t, e], r = this[a];
            return r && n[d](i, i, r), i
        }, s
    }),e("zrender/mixin/Animatable", [Ne, "../animation/Animator", "../core/util", "../core/log"], function (t) {
        var e = t("../animation/Animator"), i = t("../core/util"), n = i.isString, r = i.isFunction, a = i[K],
            o = t("../core/log"), s = function () {
                this.animators = []
            };
        return s[fe] = {
            constructor: s, animate: function (t, n) {
                var r, a = !1, s = this, l = this.__zr;
                if (t) {
                    var u = t.split("."), c = s;
                    a = "shape" === u[0];
                    for (var h = 0, f = u[ae]; f > h; h++) c && (c = c[u[h]]);
                    c && (r = c)
                } else r = s;
                if (!r) return void o('Property "' + t + '" is not existed in element ' + s.id);
                var d = s.animators, p = new e(r, n);
                return p.during(function () {
                    s.dirty(a)
                }).done(function () {
                    d[U](i[re](d, p), 1)
                }), d.push(p), l && l[ue].addAnimator(p), p
            }, stopAnimation: function (t) {
                for (var e = this.animators, i = e[ae], n = 0; i > n; n++) e[n].stop(t);
                return e[ae] = 0, this
            }, animateTo: function (t, e, i, a, o) {
                function s() {
                    u--, u || o && o()
                }

                n(i) ? (o = a, a = i, i = 0) : r(a) ? (o = a, a = "linear", i = 0) : r(i) ? (o = i, i = 0) : r(e) ? (o = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, a, o);
                var l = this.animators.slice(), u = l[ae];
                u || o && o();
                for (var c = 0; c < l[ae]; c++) l[c].done(s).start(a)
            }, _animateToShallow: function (t, e, n, r, o) {
                var s = {}, l = 0;
                for (var u in n) if (n.hasOwnProperty(u)) if (null != e[u]) a(n[u]) && !i.isArrayLike(n[u]) ? this._animateToShallow(t ? t + "." + u : u, e[u], n[u], r, o) : (s[u] = n[u], l++); else if (null != n[u]) if (t) {
                    var c = {};
                    c[t] = {}, c[t][u] = n[u], this.attr(c)
                } else this.attr(u, n[u]);
                return l > 0 && this.animate(t, !1).when(null == r ? 500 : r, s).delay(o || 0), this
            }
        }, s
    }),e("echarts/coord/cartesian/axisLabelInterval", [Ne, Be, "../axisHelper"], function (t) {
        var e = t(Be), i = t("../axisHelper");
        return function (t) {
            var n = t.model, r = n[De]("axisLabel"), a = r.get("interval");
            return t.type !== y || "auto" !== a ? "auto" === a ? 0 : a : i.getAxisLabelInterval(e.map(t.scale.getTicks(), t[m], t), n.getFormattedLabels(), r[De](ze)[Pe](), t.isHorizontal())
        }
    }),e("echarts/coord/Axis", [Ne, "../util/number", Be], function (t) {
        function e(t, e) {
            var i = t[1] - t[0], n = e, r = i / n / 2;
            t[0] += r, t[1] -= r
        }

        var i = t("../util/number"), n = i.linearMap, r = t(Be), a = [0, 1], o = function (t, e, i) {
            this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
        };
        return o[fe] = {
            constructor: o, contain: function (t) {
                var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
                return t >= i && n >= t
            }, containData: function (t) {
                return this[R](this[m](t))
            }, getExtent: function () {
                var t = this._extent.slice();
                return t
            }, getPixelPrecision: function (t) {
                return i.getPixelPrecision(t || this.scale[I](), this._extent)
            }, setExtent: function (t, e) {
                var i = this._extent;
                i[0] = t, i[1] = e
            }, dataToCoord: function (t, i) {
                var r = this._extent, o = this.scale;
                return t = o[O](t), this.onBand && o.type === v && (r = r.slice(), e(r, o.count())), n(t, a, r, i)
            }, coordToData: function (t, i) {
                var r = this._extent, o = this.scale;
                this.onBand && o.type === v && (r = r.slice(), e(r, o.count()));
                var s = n(t, r, a, i);
                return this.scale.scale(s)
            }, getTicksCoords: function (t) {
                if (this.onBand && !t) {
                    for (var e = this.getBands(), i = [], n = 0; n < e[ae]; n++) i.push(e[n][0]);
                    return e[n - 1] && i.push(e[n - 1][1]), i
                }
                return r.map(this.scale.getTicks(), this[m], this)
            }, getLabelsCoords: function () {
                return r.map(this.scale.getTicks(), this[m], this)
            }, getBands: function () {
                for (var t = this[I](), e = [], i = this.scale.count(), n = t[0], r = t[1], a = r - n, o = 0; i > o; o++) e.push([a * o / i + n, a * (o + 1) / i + n]);
                return e
            }, getBandWidth: function () {
                var t = this._extent, e = this.scale[I](), i = e[1] - e[0] + (this.onBand ? 1 : 0);
                0 === i && (i = 1);
                var n = Math.abs(t[1] - t[0]);
                return Math.abs(n) / i
            }
        }, o
    }),e("zrender/core/log", [Ne, "../config"], function (t) {
        var e = t("../config");
        return function () {
            if (0 !== e.debugMode) if (1 == e.debugMode) for (var t in arguments) throw new Error(arguments[t]); else if (e.debugMode > 1) for (var t in arguments) console.log(arguments[t])
        }
    }),e("zrender/animation/Animator", [Ne, "./Clip", "../tool/color", "../core/util"], function (t) {
        function e(t, e) {
            return t[e]
        }

        function i(t, e, i) {
            t[e] = i
        }

        function n(t, e, i) {
            return (e - t) * i + t
        }

        function r(t, e, i) {
            return i > .5 ? e : t
        }

        function a(t, e, i, r, a) {
            var o = t[ae];
            if (1 == a) for (var s = 0; o > s; s++) r[s] = n(t[s], e[s], i); else for (var l = t[0][ae], s = 0; o > s; s++) for (var u = 0; l > u; u++) r[s][u] = n(t[s][u], e[s][u], i)
        }

        function o(t, e, i) {
            var n = t[ae], r = e[ae];
            if (n !== r) {
                var a = n > r;
                if (a) t[ae] = r; else for (var o = n; r > o; o++) t.push(1 === i ? e[o] : g.call(e[o]))
            }
            for (var s = t[0] && t[0][ae], o = 0; o < t[ae]; o++) if (1 === i) isNaN(t[o]) && (t[o] = e[o]); else for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
        }

        function s(t, e, i) {
            if (t === e) return !0;
            var n = t[ae];
            if (n !== e[ae]) return !1;
            if (1 === i) {
                for (var r = 0; n > r; r++) if (t[r] !== e[r]) return !1
            } else for (var a = t[0][ae], r = 0; n > r; r++) for (var o = 0; a > o; o++) if (t[r][o] !== e[r][o]) return !1;
            return !0
        }

        function l(t, e, i, n, r, a, o, s, l) {
            var c = t[ae];
            if (1 == l) for (var h = 0; c > h; h++) s[h] = u(t[h], e[h], i[h], n[h], r, a, o); else for (var f = t[0][ae], h = 0; c > h; h++) for (var d = 0; f > d; d++) s[h][d] = u(t[h][d], e[h][d], i[h][d], n[h][d], r, a, o)
        }

        function u(t, e, i, n, r, a, o) {
            var s = .5 * (i - t), l = .5 * (n - e);
            return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
        }

        function c(t) {
            if (m(t)) {
                var e = t[ae];
                if (m(t[0])) {
                    for (var i = [], n = 0; e > n; n++) i.push(g.call(t[n]));
                    return i
                }
                return g.call(t)
            }
            return t
        }

        function h(t) {
            return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
        }

        function f(t, e, i, c, f) {
            var v = t._getter, g = t._setter, y = "spline" === e, _ = c[ae];
            if (_) {
                var x, b = c[0].value, w = m(b), M = !1, S = !1, T = w && m(b[0]) ? 2 : 1;
                c.sort(function (t, e) {
                    return t.time - e.time
                }), x = c[_ - 1].time;
                for (var C = [], A = [], L = c[0].value, P = !0, k = 0; _ > k; k++) {
                    C.push(c[k].time / x);
                    var z = c[k].value;
                    if (w && s(z, L, T) || !w && z === L || (P = !1), L = z, typeof z == he) {
                        var D = p.parse(z);
                        D ? (z = D, M = !0) : S = !0
                    }
                    A.push(z)
                }
                if (!P) {
                    for (var I = A[_ - 1], k = 0; _ - 1 > k; k++) w ? o(A[k], I, T) : !isNaN(A[k]) || isNaN(I) || S || M || (A[k] = I);
                    w && o(v(t._target, f), I, T);
                    var O, R, E, B, N, F, V = 0, G = 0;
                    if (M) var H = [0, 0, 0, 0];
                    var q = function (t, e) {
                        var i;
                        if (0 > e) i = 0; else if (G > e) {
                            for (O = Math.min(V + 1, _ - 1), i = O; i >= 0 && !(C[i] <= e); i--) ;
                            i = Math.min(i, _ - 2)
                        } else {
                            for (i = V; _ > i && !(C[i] > e); i++) ;
                            i = Math.min(i - 1, _ - 2)
                        }
                        V = i, G = e;
                        var o = C[i + 1] - C[i];
                        if (0 !== o) if (R = (e - C[i]) / o, y) if (B = A[i], E = A[0 === i ? i : i - 1], N = A[i > _ - 2 ? _ - 1 : i + 1], F = A[i > _ - 3 ? _ - 1 : i + 2], w) l(E, B, N, F, R, R * R, R * R * R, v(t, f), T); else {
                            var s;
                            if (M) s = l(E, B, N, F, R, R * R, R * R * R, H, 1), s = h(H); else {
                                if (S) return r(B, N, R);
                                s = u(E, B, N, F, R, R * R, R * R * R)
                            }
                            g(t, f, s)
                        } else if (w) a(A[i], A[i + 1], R, v(t, f), T); else {
                            var s;
                            if (M) a(A[i], A[i + 1], R, H, 1), s = h(H); else {
                                if (S) return r(A[i], A[i + 1], R);
                                s = n(A[i], A[i + 1], R)
                            }
                            g(t, f, s)
                        }
                    }, W = new d({
                        target: t._target,
                        life: x,
                        loop: t._loop,
                        delay: t._delay,
                        onframe: q,
                        ondestroy: i
                    });
                    return e && "spline" !== e && (W.easing = e), W
                }
            }
        }

        var d = t("./Clip"), p = t("../tool/color"), v = t("../core/util"), m = v.isArrayLike, g = Array[fe].slice,
            y = function (t, n, r, a) {
                this._tracks = {}, this._target = t, this._loop = n || !1, this._getter = r || e, this._setter = a || i, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
            };
        return y[fe] = {
            when: function (t, e) {
                var i = this._tracks;
                for (var n in e) if (e.hasOwnProperty(n)) {
                    if (!i[n]) {
                        i[n] = [];
                        var r = this._getter(this._target, n);
                        if (null == r) continue;
                        0 !== t && i[n].push({time: 0, value: c(r)})
                    }
                    i[n].push({time: t, value: e[n]})
                }
                return this
            }, during: function (t) {
                return this._onframeList.push(t), this
            }, _doneCallback: function () {
                this._tracks = {}, this._clipList[ae] = 0;
                for (var t = this._doneList, e = t[ae], i = 0; e > i; i++) t[i].call(this)
            }, start: function (t) {
                var e, i = this, n = 0, r = function () {
                    n--, n || i._doneCallback()
                };
                for (var a in this._tracks) if (this._tracks.hasOwnProperty(a)) {
                    var o = f(this, t, r, this._tracks[a], a);
                    o && (this._clipList.push(o), n++, this[ue] && this[ue].addClip(o), e = o)
                }
                if (e) {
                    var s = e.onframe;
                    e.onframe = function (t, e) {
                        s(t, e);
                        for (var n = 0; n < i._onframeList[ae]; n++) i._onframeList[n](t, e)
                    }
                }
                return n || this._doneCallback(), this
            }, stop: function (t) {
                for (var e = this._clipList, i = this[ue], n = 0; n < e[ae]; n++) {
                    var r = e[n];
                    t && r.onframe(this._target, 1), i && i.removeClip(r)
                }
                e[ae] = 0
            }, delay: function (t) {
                return this._delay = t, this
            }, done: function (t) {
                return t && this._doneList.push(t), this
            }, getClips: function () {
                return this._clipList
            }
        }, y
    }),e("echarts/coord/cartesian/AxisModel", [Ne, "../../model/Component", Be, "../axisModelCreator", "../axisModelCommonMixin", "../axisModelZoomMixin"], function (t) {
        function e(t, e) {
            return e.type || (e.data ? y : "value")
        }

        var i = t("../../model/Component"), n = t(Be), r = t("../axisModelCreator"), a = i[$]({
            type: "cartesian2dAxis", axis: null, init: function () {
                a.superApply(this, "init", arguments), this.resetRange()
            }, mergeOption: function () {
                a.superApply(this, "mergeOption", arguments), this.resetRange()
            }, restoreData: function () {
                a.superApply(this, "restoreData", arguments), this.resetRange()
            }, findGridModel: function () {
                return this[o].queryComponents({
                    mainType: "grid",
                    index: this.get("gridIndex"),
                    id: this.get("gridId")
                })[0]
            }
        });
        n.merge(a[fe], t("../axisModelCommonMixin")), n.merge(a[fe], t("../axisModelZoomMixin"));
        var s = {offset: 0};
        return r("x", a, e, s), r("y", a, e, s), a
    }),e("zrender/animation/Clip", [Ne, "./easing"], function (t) {
        function e(t) {
            this._target = t[Se], this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
        }

        var i = t("./easing");
        return e[fe] = {
            constructor: e, step: function (t) {
                this._initialized || (this._startTime = t + this._delay, this._initialized = !0);
                var e = (t - this._startTime) / this._life;
                if (!(0 > e)) {
                    e = Math.min(e, 1);
                    var n = this.easing, r = typeof n == he ? i[n] : n, a = typeof r === N ? r(e) : e;
                    return this.fire("frame", a), 1 == e ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }, restart: function (t) {
                var e = (t - this._startTime) % this._life;
                this._startTime = t - e + this.gap, this._needsRemove = !1
            }, fire: function (t, e) {
                t = "on" + t, this[t] && this[t](this._target, e)
            }
        }, e
    }),e("echarts/coord/axisModelCommonMixin", [Ne, Be, "./axisHelper"], function (t) {
        function e(t) {
            return r[K](t) && null != t.value ? t.value : t
        }

        function i() {
            return this.get("type") === y && r.map(this.get("data"), e)
        }

        function n() {
            return a.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
        }

        var r = t(Be), a = t("./axisHelper");
        return {getFormattedLabels: n, getCategories: i}
    }),e("echarts/coord/axisModelZoomMixin", [Ne], function () {
        return {
            getMin: function () {
                var t = this.option, e = null != t.rangeStart ? t.rangeStart : t.min;
                return e instanceof Date && (e = +e), e
            }, getMax: function () {
                var t = this.option, e = null != t.rangeEnd ? t.rangeEnd : t.max;
                return e instanceof Date && (e = +e), e
            }, getNeedCrossZero: function () {
                var t = this.option;
                return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
            }, setRange: function (t, e) {
                this.option.rangeStart = t, this.option.rangeEnd = e
            }, resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null
            }
        }
    }),e("echarts/coord/axisModelCreator", [Ne, "./axisDefault", Be, "../model/Component", "../util/layout"], function (t) {
        var e = t("./axisDefault"), i = t(Be), n = t("../model/Component"), r = t("../util/layout"),
            a = ["value", y, "time", "log"];
        return function (t, o, s, l) {
            i.each(a, function (n) {
                o[$]({
                    type: t + "Axis." + n, mergeDefaultAndTheme: function (e, a) {
                        var o = this.layoutMode, l = o ? r.getLayoutParams(e) : {}, u = a.getTheme();
                        i.merge(e, u.get(n + "Axis")), i.merge(e, this.getDefaultOption()), e.type = s(t, e), o && r.mergeLayoutParam(e, l, o)
                    }, defaultOption: i.mergeAll([{}, e[n + "Axis"], l], !0)
                })
            }), n.registerSubTypeDefaulter(t + "Axis", i.curry(s, t))
        }
    }),e("zrender/animation/easing", [], function () {
        var t = {
            linear: function (t) {
                return t
            }, quadraticIn: function (t) {
                return t * t
            }, quadraticOut: function (t) {
                return t * (2 - t)
            }, quadraticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, cubicIn: function (t) {
                return t * t * t
            }, cubicOut: function (t) {
                return --t * t * t + 1
            }, cubicInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, quarticIn: function (t) {
                return t * t * t * t
            }, quarticOut: function (t) {
                return 1 - --t * t * t * t
            }, quarticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, quinticIn: function (t) {
                return t * t * t * t * t
            }, quinticOut: function (t) {
                return --t * t * t * t * t + 1
            }, quinticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, sinusoidalIn: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, sinusoidalOut: function (t) {
                return Math.sin(t * Math.PI / 2)
            }, sinusoidalInOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }, exponentialIn: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            }, exponentialOut: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, exponentialInOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
            }, circularIn: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, circularOut: function (t) {
                return Math.sqrt(1 - --t * t)
            }, circularInOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, elasticIn: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n)))
            }, elasticOut: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / n) + 1)
            }, elasticInOut: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) * .5 + 1)
            }, backIn: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, backOut: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }, backInOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }, bounceIn: function (e) {
                return 1 - t.bounceOut(1 - e)
            }, bounceOut: function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, bounceInOut: function (e) {
                return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
            }
        };
        return t
    }),e("echarts/coord/axisDefault", [Ne, Be], function (t) {
        var e = t(Be), i = {
                show: !0,
                zlevel: 0,
                z: 0,
                inverse: !1,
                name: "",
                nameLocation: "end",
                nameRotate: null,
                nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
                nameTextStyle: {},
                nameGap: 15,
                silent: !1,
                triggerEvent: !1,
                tooltip: {show: !1},
                axisLine: {show: !0, onZero: !0, lineStyle: {color: "#333", width: 1, type: "solid"}},
                axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
                axisLabel: {show: !0, inside: !1, rotate: 0, margin: 8, textStyle: {fontSize: 12}},
                splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
                splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
            }, n = e.merge({
                boundaryGap: !0,
                splitLine: {show: !1},
                axisTick: {alignWithLabel: !1, interval: "auto"},
                axisLabel: {interval: "auto"}
            }, i), r = e.merge({boundaryGap: [0, 0], splitNumber: 5}, i),
            a = e[Oe]({scale: !0, min: "dataMin", max: "dataMax"}, r), o = e[Oe]({logBase: 10}, r);
        return o.scale = !0, {categoryAxis: n, valueAxis: r, timeAxis: a, logAxis: o}
    }),e("zrender/contain/quadratic", [Ne, "../core/curve"], function (t) {
        var e = t("../core/curve");
        return {
            containStroke: function (t, i, n, r, a, o, s, l, u) {
                if (0 === s) return !1;
                var c = s;
                if (u > i + c && u > r + c && u > o + c || i - c > u && r - c > u && o - c > u || l > t + c && l > n + c && l > a + c || t - c > l && n - c > l && a - c > l) return !1;
                var h = e.quadraticProjectPoint(t, i, n, r, a, o, l, u, null);
                return c / 2 >= h
            }
        }
    }),e("zrender/contain/arc", [Ne, "./util"], function (t) {
        var e = t("./util").normalizeRadian, i = 2 * Math.PI;
        return {
            containStroke: function (t, n, r, a, o, s, l, u, c) {
                if (0 === l) return !1;
                var h = l;
                u -= t, c -= n;
                var f = Math.sqrt(u * u + c * c);
                if (f - h > r || r > f + h) return !1;
                if (Math.abs(a - o) % i < 1e-4) return !0;
                if (s) {
                    var d = a;
                    a = e(o), o = e(d)
                } else a = e(a), o = e(o);
                a > o && (o += i);
                var p = Math.atan2(c, u);
                return 0 > p && (p += i), p >= a && o >= p || p + i >= a && o >= p + i
            }
        }
    }),e("zrender/contain/cubic", [Ne, "../core/curve"], function (t) {
        var e = t("../core/curve");
        return {
            containStroke: function (t, i, n, r, a, o, s, l, u, c, h) {
                if (0 === u) return !1;
                var f = u;
                if (h > i + f && h > r + f && h > o + f && h > l + f || i - f > h && r - f > h && o - f > h && l - f > h || c > t + f && c > n + f && c > a + f && c > s + f || t - f > c && n - f > c && a - f > c && s - f > c) return !1;
                var d = e.cubicProjectPoint(t, i, n, r, a, o, s, l, c, h, null);
                return f / 2 >= d
            }
        }
    }),e("zrender/contain/util", [Ne], function () {
        var t = 2 * Math.PI;
        return {
            normalizeRadian: function (e) {
                return e %= t, 0 > e && (e += t), e
            }
        }
    }),e("zrender/contain/line", [], function () {
        return {
            containStroke: function (t, e, i, n, r, a, o) {
                if (0 === r) return !1;
                var s = r, l = 0, u = t;
                if (o > e + s && o > n + s || e - s > o && n - s > o || a > t + s && a > i + s || t - s > a && i - s > a) return !1;
                if (t === i) return Math.abs(a - t) <= s / 2;
                l = (e - n) / (t - i), u = (t * n - i * e) / (t - i);
                var c = l * a - o + u, h = c * c / (l * l + 1);
                return s / 2 * s / 2 >= h
            }
        }
    }),e("zrender/contain/windingLine", [], function () {
        return function (t, e, i, n, r, a) {
            if (a > e && a > n || e > a && n > a) return 0;
            if (n === e) return 0;
            var o = e > n ? 1 : -1, s = (a - e) / (n - e);
            (1 === s || 0 === s) && (o = e > n ? .5 : -.5);
            var l = s * (i - t) + t;
            return l > r ? o : 0
        }
    }),e("zrender/core/LRU", [Ne], function () {
        var t = function () {
            this.head = null, this.tail = null, this._len = 0
        }, e = t[fe];
        e.insert = function (t) {
            var e = new i(t);
            return this.insertEntry(e), e
        }, e.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
        }, e[Q] = function (t) {
            var e = t.prev, i = t.next;
            e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, e.len = function () {
            return this._len
        };
        var i = function (t) {
            this.value = t, this.next, this.prev
        }, n = function (e) {
            this._list = new t, this._map = {}, this._maxSize = e || 10
        }, r = n[fe];
        return r.put = function (t, e) {
            var i = this._list, n = this._map;
            if (null == n[t]) {
                var r = i.len();
                if (r >= this._maxSize && r > 0) {
                    var a = i.head;
                    i[Q](a), delete n[a.key]
                }
                var o = i.insert(e);
                o.key = t, n[t] = o
            }
        }, r.get = function (t) {
            var e = this._map[t], i = this._list;
            return null != e ? (e !== i.tail && (i[Q](e), i.insertEntry(e)), e.value) : void 0
        }, r.clear = function () {
            this._list.clear(), this._map = {}
        }, n
    }),e("echarts/chart/helper/createListFromArray", [Ne, "../../data/List", "../../data/helper/completeDimensions", Be, "../../util/model", "../../CoordinateSystem"], function (t) {
        function e(t) {
            for (var e = 0; e < t[ae] && null == t[e];) e++;
            return t[e]
        }

        function i(t) {
            var i = e(t);
            return null != i && !u[F](f(i))
        }

        function n(t, e, n) {
            t = t || [];
            var r = e.get(Re), a = m[r], v = h.get(r), g = a && a(t, e, n), y = g && g[p];
            y || (y = v && v[p] || ["x", "y"], y = l(y, t, y.concat(["value"])));
            var _ = g ? g.categoryIndex : -1, x = new s(y, e), b = o(g, t), w = {},
                M = _ >= 0 && i(t) ? function (t, e, i, n) {
                    return c.isDataItemOption(t) && (x.hasItemOption = !0), n === _ ? i : d(f(t), y[n])
                } : function (t, e, i, n) {
                    var r = f(t), a = d(r && r[n], y[n]);
                    c.isDataItemOption(t) && (x.hasItemOption = !0);
                    var o = g && g.categoryAxesModels;
                    return o && o[e] && typeof a === he && (w[e] = w[e] || o[e].getCategories(), a = u[re](w[e], a), 0 > a && !isNaN(a) && (a = +a)), a
                };
            return x.hasItemOption = !1, x.initData(t, b, M), x
        }

        function r(t) {
            return t !== y && "time" !== t
        }

        function a(t) {
            return t === y ? v : "time" === t ? "time" : "float"
        }

        function o(t, e) {
            var i, n = [], r = t && t[p][t.categoryIndex];
            if (r && (i = t.categoryAxesModels[r.name]), i) {
                var a = i.getCategories();
                if (a) {
                    var o = e[ae];
                    if (u[F](e[0]) && e[0][ae] > 1) {
                        n = [];
                        for (var s = 0; o > s; s++) n[s] = a[e[s][t.categoryIndex || 0]]
                    } else n = a.slice(0)
                }
            }
            return n
        }

        var s = t("../../data/List"), l = t("../../data/helper/completeDimensions"), u = t(Be),
            c = t("../../util/model"), h = t("../../CoordinateSystem"), f = c.getDataItemValue, d = c.converDataValue,
            m = {
                cartesian2d: function (t, e, i) {
                    var n = u.map(["xAxis", "yAxis"], function (t) {
                            return i.queryComponents({mainType: t, index: e.get(t + "Index"), id: e.get(t + "Id")})[0]
                        }), o = n[0], s = n[1], c = o.get("type"), h = s.get("type"),
                        f = [{name: "x", type: a(c), stackable: r(c)}, {name: "y", type: a(h), stackable: r(h)}],
                        d = c === y, p = h === y;
                    l(f, t, ["x", "y", "z"]);
                    var v = {};
                    return d && (v.x = o), p && (v.y = s), {
                        dimensions: f,
                        categoryIndex: d ? 0 : p ? 1 : -1,
                        categoryAxesModels: v
                    }
                }, polar: function (t, e, i) {
                    var n = i.queryComponents({mainType: "polar", index: e.get("polarIndex"), id: e.get("polarId")})[0],
                        o = n.findAxisModel("angleAxis"), s = n.findAxisModel("radiusAxis"), u = s.get("type"),
                        c = o.get("type"), h = [{name: "radius", type: a(u), stackable: r(u)}, {
                            name: "angle",
                            type: a(c),
                            stackable: r(c)
                        }], f = c === y, d = u === y;
                    l(h, t, ["radius", "angle", "value"]);
                    var p = {};
                    return d && (p.radius = s), f && (p.angle = o), {
                        dimensions: h,
                        categoryIndex: f ? 1 : d ? 0 : -1,
                        categoryAxesModels: p
                    }
                }, geo: function (t) {
                    return {dimensions: l([{name: "lng"}, {name: "lat"}], t, ["lng", "lat", "value"])}
                }
            };
        return n
    }),e("zrender/graphic/helper/poly", [Ne, "./smoothSpline", "./smoothBezier"], function (t) {
        var e = t("./smoothSpline"), i = t("./smoothBezier");
        return {
            buildPath: function (t, n, a) {
                var o = n.points, s = n.smooth;
                if (o && o[ae] >= 2) {
                    if (s && "spline" !== s) {
                        var l = i(o, s, a, n.smoothConstraint);
                        t[r](o[0][0], o[0][1]);
                        for (var u = o[ae], c = 0; (a ? u : u - 1) > c; c++) {
                            var h = l[2 * c], f = l[2 * c + 1], d = o[(c + 1) % u];
                            t.bezierCurveTo(h[0], h[1], f[0], f[1], d[0], d[1])
                        }
                    } else {
                        "spline" === s && (o = e(o, a)), t[r](o[0][0], o[0][1]);
                        for (var c = 1, p = o[ae]; p > c; c++) t.lineTo(o[c][0], o[c][1])
                    }
                    a && t.closePath()
                }
            }
        }
    }),e("zrender/Storage", [Ne, "./core/util", "./core/env", "./container/Group", "./core/timsort"], function (t) {
        function e(t, e) {
            return t[G] === e[G] ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t[G] - e[G]
        }

        var i = t("./core/util"), r = t("./core/env"), a = t("./container/Group"), o = t("./core/timsort"),
            s = function () {
                this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
            };
        return s[fe] = {
            constructor: s, traverse: function (t, e) {
                for (var i = 0; i < this._roots[ae]; i++) this._roots[i][H](t, e)
            }, getDisplayList: function (t, e) {
                return e = e || !1, t && this.updateDisplayList(e), this._displayList
            }, updateDisplayList: function (t) {
                this._displayListLen = 0;
                for (var i = this._roots, n = this._displayList, a = 0, s = i[ae]; s > a; a++) this._updateAndAddDisplayable(i[a], null, t);
                n[ae] = this._displayListLen, r[le] && o(n, e)
            }, _updateAndAddDisplayable: function (t, e, i) {
                if (!t[oe] || i) {
                    t.beforeUpdate(), t[n] && t[te](), t.afterUpdate();
                    var r = t.clipPath;
                    if (r && (r[u] = t, r.updateTransform(), e ? (e = e.slice(), e.push(r)) : e = [r]), t.isGroup) {
                        for (var a = t._children, o = 0; o < a[ae]; o++) {
                            var s = a[o];
                            t[n] && (s[n] = !0), this._updateAndAddDisplayable(s, e, i)
                        }
                        t[n] = !1
                    } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                }
            }, addRoot: function (t) {
                this._elements[t.id] || (t instanceof a && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t))
            }, delRoot: function (t) {
                if (null == t) {
                    for (var e = 0; e < this._roots[ae]; e++) {
                        var n = this._roots[e];
                        n instanceof a && n.delChildrenFromStorage(this)
                    }
                    return this._elements = {}, this._roots = [], this._displayList = [], void (this._displayListLen = 0)
                }
                if (t instanceof Array) for (var e = 0, r = t[ae]; r > e; e++) this.delRoot(t[e]); else {
                    var o;
                    o = typeof t == he ? this._elements[t] : t;
                    var s = i[re](this._roots, o);
                    s >= 0 && (this.delFromMap(o.id), this._roots[U](s, 1), o instanceof a && o.delChildrenFromStorage(this))
                }
            }, addToMap: function (t) {
                return t instanceof a && (t.__storage = this), t.dirty(!1), this._elements[t.id] = t, this
            }, get: function (t) {
                return this._elements[t]
            }, delFromMap: function (t) {
                var e = this._elements, i = e[t];
                return i && (delete e[t], i instanceof a && (i.__storage = null)), this
            }, dispose: function () {
                this._elements = this._renderList = this._roots = null
            }, displayableSortFunc: e
        }, s
    }),e("zrender/animation/Animation", [Ne, "../core/util", "../core/event", "./requestAnimationFrame", "./Animator"], function (t) {
        var e = t("../core/util"), i = t("../core/event").Dispatcher, n = t("./requestAnimationFrame"),
            r = t("./Animator"), a = function (t) {
                t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
                }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, i.call(this)
            };
        return a[fe] = {
            constructor: a, addClip: function (t) {
                this._clips.push(t)
            }, addAnimator: function (t) {
                t[ue] = this;
                for (var e = t.getClips(), i = 0; i < e[ae]; i++) this.addClip(e[i])
            }, removeClip: function (t) {
                var i = e[re](this._clips, t);
                i >= 0 && this._clips[U](i, 1)
            }, removeAnimator: function (t) {
                for (var e = t.getClips(), i = 0; i < e[ae]; i++) this.removeClip(e[i]);
                t[ue] = null
            }, _update: function () {
                for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i[ae], r = [], a = [], o = 0; n > o; o++) {
                    var s = i[o], l = s.step(t);
                    l && (r.push(l), a.push(s))
                }
                for (var o = 0; n > o;) i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
                n = r[ae];
                for (var o = 0; n > o; o++) a[o].fire(r[o]);
                this._time = t, this.onframe(e), this[Y]("frame", e), this.stage[te] && this.stage[te]()
            }, _startLoop: function () {
                function t() {
                    e._running && (n(t), !e._paused && e._update())
                }

                var e = this;
                this._running = !0, n(t)
            }, start: function () {
                this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
            }, stop: function () {
                this._running = !1
            }, pause: function () {
                this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
            }, resume: function () {
                this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
            }, clear: function () {
                this._clips = []
            }, animate: function (t, e) {
                e = e || {};
                var i = new r(t, e.loop, e.getter, e.setter);
                return i
            }
        }, e.mixin(a, i), a
    }),e("zrender/Handler", [Ne, "./core/util", "./mixin/Draggable", "./mixin/Eventful"], function (t) {
        function e(t, e, i) {
            return {
                type: t,
                event: i,
                target: e,
                cancelBubble: !1,
                offsetX: i.zrX,
                offsetY: i.zrY,
                gestureEvent: i.gestureEvent,
                pinchX: i.pinchX,
                pinchY: i.pinchY,
                pinchScale: i.pinchScale,
                wheelDelta: i.zrDelta
            }
        }

        function i() {
        }

        function n(t, e, i) {
            if (t[t.rectHover ? "rectContain" : R](e, i)) {
                for (var n = t; n;) {
                    if (n[Te] || n.clipPath && !n.clipPath[R](e, i)) return !1;
                    n = n[u]
                }
                return !0
            }
            return !1
        }

        var r = t("./core/util"), a = t("./mixin/Draggable"), o = t("./mixin/Eventful");
        i[fe].dispose = function () {
        };
        var s = ["click", "dblclick", "mousewheel", X, "mouseup", "mousedown", "mousemove", "contextmenu"],
            l = function (t, e, n, l) {
                o.call(this), this[se] = t, this.painter = e, this.painterRoot = l, n = n || new i, this.proxy = n, n.handler = this, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, a.call(this), r.each(s, function (t) {
                    n.on && n.on(t, this[t], this)
                }, this)
            };
        return l[fe] = {
            constructor: l, mousemove: function (t) {
                var e = t.zrX, i = t.zrY, n = this.findHover(e, i, null), r = this._hovered, a = this.proxy;
                this._hovered = n, a.setCursor && a.setCursor(n ? n.cursor : "default"), r && n !== r && r.__zr && this.dispatchToElement(r, X, t), this.dispatchToElement(n, "mousemove", t), n && n !== r && this.dispatchToElement(n, Z, t)
            }, mouseout: function (t) {
                this.dispatchToElement(this._hovered, X, t);
                var e, i = t.toElement || t.relatedTarget;
                do i = i && i.parentNode; while (i && 9 != i.nodeType && !(e = i === this.painterRoot));
                !e && this[Y]("globalout", {event: t})
            }, resize: function () {
                this._hovered = null
            }, dispatch: function (t, e) {
                var i = this[t];
                i && i.call(this, e)
            }, dispose: function () {
                this.proxy.dispose(), this[se] = this.proxy = this.painter = null
            }, setCursorStyle: function (t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            }, dispatchToElement: function (t, i, n) {
                for (var r = "on" + i, a = e(i, t, n), o = t; o && (o[r] && (a.cancelBubble = o[r].call(o, a)), o[Y](i, a), o = o[u], !a.cancelBubble);) ;
                a.cancelBubble || (this[Y](i, a), this.painter && this.painter.eachOtherLayer(function (t) {
                    typeof t[r] == N && t[r].call(t, a), t[Y] && t[Y](i, a)
                }))
            }, findHover: function (t, e, i) {
                for (var r = this[se].getDisplayList(), a = r[ae] - 1; a >= 0; a--) if (!r[a][Te] && r[a] !== i && !r[a][oe] && n(r[a], t, e)) return r[a]
            }
        }, r.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
            l[fe][t] = function (e) {
                var i = this.findHover(e.zrX, e.zrY, null);
                if ("mousedown" === t) this._downel = i, this._upel = i; else if ("mosueup" === t) this._upel = i; else if ("click" === t && this._downel !== this._upel) return;
                this.dispatchToElement(i, t, e)
            }
        }), r.mixin(l, o), r.mixin(l, a), l
    }),e("zrender/dom/HandlerProxy", [Ne, "../core/event", "../core/util", "../mixin/Eventful", "../core/env", "../core/GestureMgr"], function (t) {
        function e(t) {
            return "mousewheel" === t && c.browser.firefox ? "DOMMouseScroll" : t
        }

        function i(t, e, i) {
            var n = t._gestureMgr;
            "start" === i && n.clear();
            var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null), t.dom);
            if ("end" === i && n.clear(), r) {
                var a = r.type;
                e.gestureEvent = a, t.handler.dispatchToElement(r[Se], a, r.event)
            }
        }

        function n(t) {
            t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
                t._touching = !1
            }, 700)
        }

        function r() {
            return c.touchEventsSupported
        }

        function a(t) {
            function e(t, e) {
                return function () {
                    return e._touching ? void 0 : t.apply(e, arguments)
                }
            }

            for (var i = 0; i < g[ae]; i++) {
                var n = g[i];
                t._handlers[n] = l.bind(y[n], t)
            }
            for (var i = 0; i < m[ae]; i++) {
                var n = m[i];
                t._handlers[n] = e(y[n], t)
            }
        }

        function o(t) {
            function i(i, n) {
                l.each(i, function (i) {
                    f(t, e(i), n._handlers[i])
                }, n)
            }

            u.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new h, this._handlers = {}, a(this), r() && i(g, this), i(m, this)
        }

        var s = t("../core/event"), l = t("../core/util"), u = t("../mixin/Eventful"), c = t("../core/env"),
            h = t("../core/GestureMgr"), f = s.addEventListener, d = s.removeEventListener, p = s.normalizeEvent,
            v = 300, m = ["click", "dblclick", "mousewheel", X, "mouseup", "mousedown", "mousemove", "contextmenu"],
            g = ["touchstart", "touchend", "touchmove"], y = {
                mousemove: function (t) {
                    t = p(this.dom, t), this[Y]("mousemove", t)
                }, mouseout: function (t) {
                    t = p(this.dom, t);
                    var e = t.toElement || t.relatedTarget;
                    if (e != this.dom) for (; e && 9 != e.nodeType;) {
                        if (e === this.dom) return;
                        e = e.parentNode
                    }
                    this[Y](X, t)
                }, touchstart: function (t) {
                    t = p(this.dom, t), this._lastTouchMoment = new Date, i(this, t, "start"), y.mousemove.call(this, t), y.mousedown.call(this, t), n(this)
                }, touchmove: function (t) {
                    t = p(this.dom, t), i(this, t, "change"), y.mousemove.call(this, t), n(this)
                }, touchend: function (t) {
                    t = p(this.dom, t), i(this, t, "end"), y.mouseup.call(this, t), +new Date - this._lastTouchMoment < v && y.click.call(this, t), n(this)
                }
            };
        l.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
            y[t] = function (e) {
                e = p(this.dom, e), this[Y](t, e)
            }
        });
        var _ = o[fe];
        return _.dispose = function () {
            for (var t = m.concat(g), i = 0; i < t[ae]; i++) {
                var n = t[i];
                d(this.dom, e(n), this._handlers[n])
            }
        }, _.setCursor = function (t) {
            this.dom.style.cursor = t || "default"
        }, l.mixin(o, u), o
    }),e("zrender/Painter", [Ne, "./config", "./core/util", "./core/log", "./core/BoundingRect", "./core/timsort", "./Layer", "./animation/requestAnimationFrame", "./graphic/Image"], function (t) {
        function e(t) {
            return parseInt(t, 10)
        }

        function r(t) {
            return t ? t.isBuildin ? !0 : typeof t[ce] !== N || typeof t.refresh !== N ? !1 : !0 : !1
        }

        function o(t) {
            t.__unusedCount++
        }

        function s(t) {
            1 == t.__unusedCount && t.clear()
        }

        function l(t, e, i) {
            return w.copy(t[Ae]()), t[a] && w[d](t[a]), M.width = e, M[Ce] = i, !w.intersect(M)
        }

        function u(t, e) {
            if (t == e) return !1;
            if (!t || !e || t[ae] !== e[ae]) return !0;
            for (var i = 0; i < t[ae]; i++) if (t[i] !== e[i]) return !0
        }

        function c(t, e) {
            for (var n = 0; n < t[ae]; n++) {
                var r = t[n], a = r.path;
                r.setTransform(e), a.beginPath(e), r[i](a, r.shape), e.clip(), r.restoreTransform(e)
            }
        }

        function h(t, e) {
            var i = document[D]("div");
            return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
        }

        var f = t("./config"), p = t("./core/util"), v = t("./core/log"), m = t("./core/BoundingRect"),
            g = t("./core/timsort"), y = t("./Layer"), _ = t("./animation/requestAnimationFrame"), x = 5,
            w = new m(0, 0, 0, 0), M = new m(0, 0, 0, 0), S = function (t, e, i) {
                var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = i = p[$]({}, i || {}), this.dpr = i.devicePixelRatio || f.devicePixelRatio, this._singleCanvas = n, this.root = t;
                var r = t.style;
                r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this[se] = e;
                var a = this._zlevelList = [], o = this._layers = {};
                if (this._layerConfig = {}, n) {
                    var s = t.width, l = t[Ce];
                    this._width = s, this._height = l;
                    var u = new y(t, this, 1);
                    u.initContext(), o[0] = u, a.push(0)
                } else {
                    this._width = this._getSize(0), this._height = this._getSize(1);
                    var c = this._domRoot = h(this._width, this._height);
                    t.appendChild(c)
                }
                this.pathToImage = this._createPathToImage(), this._progressiveLayers = [], this._hoverlayer, this._hoverElements = []
            };
        return S[fe] = {
            constructor: S, isSingleCanvas: function () {
                return this._singleCanvas
            }, getViewportRoot: function () {
                return this._singleCanvas ? this._layers[0].dom : this._domRoot
            }, refresh: function (t) {
                var e = this[se].getDisplayList(!0), i = this._zlevelList;
                this._paintList(e, t);
                for (var n = 0; n < i[ae]; n++) {
                    var r = i[n], a = this._layers[r];
                    !a.isBuildin && a.refresh && a.refresh()
                }
                return this.refreshHover(), this._progressiveLayers[ae] && this._startProgessive(), this
            }, addHover: function (t, e) {
                if (!t.__hoverMir) {
                    var i = new t.constructor({style: t.style, shape: t.shape});
                    i.__from = t, t.__hoverMir = i, i[ge](e), this._hoverElements.push(i)
                }
            }, removeHover: function (t) {
                var e = t.__hoverMir, i = this._hoverElements, n = p[re](i, e);
                n >= 0 && i[U](n, 1), t.__hoverMir = null
            }, clearHover: function () {
                for (var t = this._hoverElements, e = 0; e < t[ae]; e++) {
                    var i = t[e].__from;
                    i && (i.__hoverMir = null)
                }
                t[ae] = 0
            }, refreshHover: function () {
                var t = this._hoverElements, e = t[ae], i = this._hoverlayer;
                if (i && i.clear(), e) {
                    g(t, this[se].displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                    var n = {};
                    i.ctx.save();
                    for (var r = 0; e > r;) {
                        var o = t[r], s = o.__from;
                        s && s.__zr ? (r++, s.invisible || (o[a] = s[a], o.invTransform = s.invTransform, o.__clipPaths = s.__clipPaths, this._doPaintEl(o, i, !0, n))) : (t[U](r, 1), s.__hoverMir = null, e--)
                    }
                    i.ctx.restore()
                }
            }, _startProgessive: function () {
                function t() {
                    i === e._progressiveToken && e[se] && (e._doPaintList(e[se].getDisplayList()), e._furtherProgressive ? (e._progress++, _(t)) : e._progressiveToken = -1)
                }

                var e = this;
                if (e._furtherProgressive) {
                    var i = e._progressiveToken = +new Date;
                    e._progress++, _(t)
                }
            }, _clearProgressive: function () {
                this._progressiveToken = -1, this._progress = 0, p.each(this._progressiveLayers, function (t) {
                    t[n] && t.clear()
                })
            }, _paintList: function (t, e) {
                null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuildinLayer(o), this._doPaintList(t, e), this.eachBuildinLayer(s)
            }, _doPaintList: function (t, e) {
                function i(t) {
                    var e = o.dpr || 1;
                    o.save(), o.globalAlpha = 1, o.shadowBlur = 0, r[n] = !0, o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(t.dom, 0, 0, h * e, f * e), o.restore()
                }

                for (var r, a, o, s, l, u, c = 0, h = this._width, f = this._height, d = this._progress, m = 0, g = t[ae]; g > m; m++) {
                    var y = t[m], _ = this._singleCanvas ? 0 : y[G], b = y.__frame;
                    if (0 > b && l && (i(l), l = null), a !== _ && (o && o.restore(), s = {}, a = _, r = this.getLayer(a), r.isBuildin || v("ZLevel " + a + " has been used by unkown layer " + r.id), o = r.ctx, o.save(), r.__unusedCount = 0, (r[n] || e) && r.clear()), r[n] || e) {
                        if (b >= 0) {
                            if (!l) {
                                if (l = this._progressiveLayers[Math.min(c++, x - 1)], l.ctx.save(), l.renderScope = {}, l && l.__progress > l.__maxProgress) {
                                    m = l.__nextIdxNotProg - 1;
                                    continue
                                }
                                u = l.__progress, l[n] || (d = u), l.__progress = d + 1
                            }
                            b === d && this._doPaintEl(y, l, !0, l.renderScope)
                        } else this._doPaintEl(y, r, e, s);
                        y[n] = !1
                    }
                }
                l && i(l), o && o.restore(), this._furtherProgressive = !1, p.each(this._progressiveLayers, function (t) {
                    t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
                }, this)
            }, _doPaintEl: function (t, e, i, r) {
                var o = e.ctx, s = t[a];
                if (!(!e[n] && !i || t.invisible || 0 === t.style[me] || s && !s[0] && !s[3] || t.culling && l(t, this._width, this._height))) {
                    var h = t.__clipPaths;
                    (r.prevClipLayer !== e || u(h, r.prevElClipPaths)) && (r.prevElClipPaths && (r.prevClipLayer.ctx.restore(), r.prevClipLayer = r.prevElClipPaths = null, r.prevEl = null), h && (o.save(), c(h, o), r.prevClipLayer = e, r.prevElClipPaths = h)), t.beforeBrush && t.beforeBrush(o), t.brush(o, r.prevEl || null), r.prevEl = t, t.afterBrush && t.afterBrush(o)
                }
            }, getLayer: function (t) {
                if (this._singleCanvas) return this._layers[0];
                var e = this._layers[t];
                return e || (e = new y("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && p.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
            }, insertLayer: function (t, e) {
                var i = this._layers, n = this._zlevelList, a = n[ae], o = null, s = -1, l = this._domRoot;
                if (i[t]) return void v("ZLevel " + t + " has been used already");
                if (!r(e)) return void v("Layer of zlevel " + t + " is not valid");
                if (a > 0 && t > n[0]) {
                    for (s = 0; a - 1 > s && !(n[s] < t && n[s + 1] > t); s++) ;
                    o = i[n[s]]
                }
                if (n[U](s + 1, 0, t), o) {
                    var u = o.dom;
                    u.nextSibling ? l.insertBefore(e.dom, u.nextSibling) : l.appendChild(e.dom)
                } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
                i[t] = e
            }, eachLayer: function (t, e) {
                var i, n, r = this._zlevelList;
                for (n = 0; n < r[ae]; n++) i = r[n], t.call(e, this._layers[i], i)
            }, eachBuildinLayer: function (t, e) {
                var i, n, r, a = this._zlevelList;
                for (r = 0; r < a[ae]; r++) n = a[r], i = this._layers[n], i.isBuildin && t.call(e, i, n)
            }, eachOtherLayer: function (t, e) {
                var i, n, r, a = this._zlevelList;
                for (r = 0; r < a[ae]; r++) n = a[r], i = this._layers[n], i.isBuildin || t.call(e, i, n)
            }, getLayers: function () {
                return this._layers
            }, _updateLayerStatus: function (t) {
                var e = this._layers, i = this._progressiveLayers, r = {}, a = {};
                this.eachBuildinLayer(function (t, e) {
                    r[e] = t.elCount, t.elCount = 0, t[n] = !1
                }), p.each(i, function (t, e) {
                    a[e] = t.elCount, t.elCount = 0, t[n] = !1
                });
                for (var o, s, l = 0, u = 0, c = 0, h = t[ae]; h > c; c++) {
                    var f = t[c], d = this._singleCanvas ? 0 : f[G], v = e[d], m = f.progressive;
                    if (v && (v.elCount++, v[n] = v[n] || f[n]), m >= 0) {
                        s !== m && (s = m, u++);
                        var g = f.__frame = u - 1;
                        if (!o) {
                            var _ = Math.min(l, x - 1);
                            o = i[_], o || (o = i[_] = new y("progressive", this, this.dpr), o.initContext()), o.__maxProgress = 0
                        }
                        o[n] = o[n] || f[n], o.elCount++, o.__maxProgress = Math.max(o.__maxProgress, g), o.__maxProgress >= o.__progress && (v[n] = !0)
                    } else f.__frame = -1, o && (o.__nextIdxNotProg = c, l++, o = null)
                }
                o && (l++, o.__nextIdxNotProg = c), this.eachBuildinLayer(function (t, e) {
                    r[e] !== t.elCount && (t[n] = !0)
                }), i[ae] = Math.min(l, x), p.each(i, function (t, e) {
                    a[e] !== t.elCount && (f[n] = !0), t[n] && (t.__progress = 0)
                })
            }, clear: function () {
                return this.eachBuildinLayer(this._clearLayer), this
            }, _clearLayer: function (t) {
                t.clear()
            }, configLayer: function (t, e) {
                if (e) {
                    var i = this._layerConfig;
                    i[t] ? p.merge(i[t], e, !0) : i[t] = e;
                    var n = this._layers[t];
                    n && p.merge(n, i[t], !0)
                }
            }, delLayer: function (t) {
                var e = this._layers, i = this._zlevelList, n = e[t];
                n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i[U](p[re](i, t), 1))
            }, resize: function (t, e) {
                var i = this._domRoot;
                i.style.display = "none";
                var n = this._opts;
                if (null != t && (n.width = t), null != e && (n[Ce] = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
                    i.style.width = t + "px", i.style[Ce] = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r][ce](t, e);
                    p.each(this._progressiveLayers, function (i) {
                        i[ce](t, e)
                    }), this.refresh(!0)
                }
                return this._width = t, this._height = e, this
            }, clearLayer: function (t) {
                var e = this._layers[t];
                e && e.clear()
            }, dispose: function () {
                this.root.innerHTML = "", this.root = this[se] = this._domRoot = this._layers = null
            }, getRenderedCanvas: function (t) {
                if (t = t || {}, this._singleCanvas) return this._layers[0].dom;
                var e = new y("image", this, t.pixelRatio || this.dpr);
                e.initContext(), e.clearColor = t.backgroundColor, e.clear();
                for (var i = this[se].getDisplayList(!0), n = {}, r = 0; r < i[ae]; r++) {
                    var a = i[r];
                    this._doPaintEl(a, e, !0, n)
                }
                return e.dom
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, _getSize: function (t) {
                var i = this._opts, n = ["width", Ce][t], r = ["clientWidth", "clientHeight"][t],
                    a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
                if (null != i[n] && "auto" !== i[n]) return parseFloat(i[n]);
                var s = this.root, l = document.defaultView.getComputedStyle(s);
                return (s[r] || e(l[n]) || e(s.style[n])) - (e(l[a]) || 0) - (e(l[o]) || 0) | 0
            }, _pathToImage: function (e, i, n, r, a) {
                var o = document[D]("canvas"), s = o.getContext("2d");
                o.width = n * a, o[Ce] = r * a, s.clearRect(0, 0, n * a, r * a);
                var l = {position: i[ye], rotation: i[b], scale: i.scale};
                i[ye] = [0, 0, 0], i[b] = 0, i.scale = [1, 1], i && i.brush(s);
                var u = t("./graphic/Image"), c = new u({id: e, style: {x: 0, y: 0, image: o}});
                return null != l[ye] && (c[ye] = i[ye] = l[ye]), null != l[b] && (c[b] = i[b] = l[b]), null != l.scale && (c.scale = i.scale = l.scale), c
            }, _createPathToImage: function () {
                var t = this;
                return function (e, i, n, r) {
                    return t._pathToImage(e, i, n, r, t.dpr)
                }
            }
        }, S
    }),e("echarts/data/helper/completeDimensions", [Ne, Be], function (t) {
        function e(t, e, a, o) {
            if (!e) return t;
            var s = i(e[0]), l = n[F](s) && s[ae] || 1;
            a = a || [], o = o || "extra";
            for (var u = 0; l > u; u++) if (!t[u]) {
                var c = a[u] || o + (u - a[ae]);
                t[u] = r(e, u) ? {type: "ordinal", name: c} : c
            }
            return t
        }

        function i(t) {
            return n[F](t) ? t : n[K](t) ? t.value : t
        }

        var n = t(Be), r = e.guessOrdinal = function (t, e) {
            for (var r = 0, a = t[ae]; a > r; r++) {
                var o = i(t[r]);
                if (!n[F](o)) return !1;
                var o = o[e];
                if (null != o && isFinite(o)) return !1;
                if (n.isString(o) && "-" !== o) return !0
            }
            return !1
        };
        return e
    }),e("echarts/data/DataDiffer", [Ne], function () {
        function t(t) {
            return t
        }

        function e(e, i, n, r) {
            this._old = e, this._new = i, this._oldKeyGetter = n || t, this._newKeyGetter = r || t
        }

        function i(t, e, i, n) {
            for (var r = 0; r < t[ae]; r++) {
                var a = n(t[r], r), o = e[a];
                null == o ? (i.push(a), e[a] = r) : (o[ae] || (e[a] = o = [o]), o.push(r))
            }
        }

        return e[fe] = {
            constructor: e, add: function (t) {
                return this._add = t, this
            }, update: function (t) {
                return this._update = t, this
            }, remove: function (t) {
                return this._remove = t, this
            }, execute: function () {
                var t, e = this._old, n = this._new, r = this._oldKeyGetter, a = this._newKeyGetter, o = {}, s = {},
                    l = [], u = [];
                for (i(e, o, l, r), i(n, s, u, a), t = 0; t < e[ae]; t++) {
                    var c = l[t], h = s[c];
                    if (null != h) {
                        var f = h[ae];
                        f ? (1 === f && (s[c] = null), h = h.unshift()) : s[c] = null, this._update && this._update(h, t)
                    } else this._remove && this._remove(t)
                }
                for (var t = 0; t < u[ae]; t++) {
                    var c = u[t];
                    if (s.hasOwnProperty(c)) {
                        var h = s[c];
                        if (null == h) continue;
                        if (h[ae]) for (var d = 0, f = h[ae]; f > d; d++) this._add && this._add(h[d]); else this._add && this._add(h)
                    }
                }
            }
        }, e
    }),e("zrender/graphic/helper/smoothSpline", [Ne, "../../core/vector"], function (t) {
        function e(t, e, i, n, r, a, o) {
            var s = .5 * (i - t), l = .5 * (n - e);
            return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
        }

        var i = t("../../core/vector");
        return function (t, n) {
            for (var r = t[ae], a = [], o = 0, s = 1; r > s; s++) o += i.distance(t[s - 1], t[s]);
            var l = o / 2;
            l = r > l ? r : l;
            for (var s = 0; l > s; s++) {
                var u, c, h, f = s / (l - 1) * (n ? r : r - 1), d = Math.floor(f), p = f - d, v = t[d % r];
                n ? (u = t[(d - 1 + r) % r], c = t[(d + 1) % r], h = t[(d + 2) % r]) : (u = t[0 === d ? d : d - 1], c = t[d > r - 2 ? r - 1 : d + 1], h = t[d > r - 3 ? r - 1 : d + 2]);
                var m = p * p, g = p * m;
                a.push([e(u[0], v[0], c[0], h[0], p, m, g), e(u[1], v[1], c[1], h[1], p, m, g)])
            }
            return a
        }
    }),e("zrender/graphic/helper/smoothBezier", [Ne, "../../core/vector"], function (t) {
        var e = t("../../core/vector"), i = e.min, n = e.max, r = e.scale, a = e.distance, o = e.add;
        return function (t, s, l, u) {
            var c, h, f, d, p = [], v = [], m = [], g = [];
            if (u) {
                f = [1 / 0, 1 / 0], d = [-1 / 0, -1 / 0];
                for (var y = 0, _ = t[ae]; _ > y; y++) i(f, f, t[y]), n(d, d, t[y]);
                i(f, f, u[0]), n(d, d, u[1])
            }
            for (var y = 0, _ = t[ae]; _ > y; y++) {
                var x = t[y];
                if (l) c = t[y ? y - 1 : _ - 1], h = t[(y + 1) % _]; else {
                    if (0 === y || y === _ - 1) {
                        p.push(e.clone(t[y]));
                        continue
                    }
                    c = t[y - 1], h = t[y + 1]
                }
                e.sub(v, h, c), r(v, v, s);
                var b = a(x, c), w = a(x, h), M = b + w;
                0 !== M && (b /= M, w /= M), r(m, v, -b), r(g, v, w);
                var S = o([], x, m), T = o([], x, g);
                u && (n(S, S, f), i(S, S, d), n(T, T, f), i(T, T, d)), p.push(S), p.push(T)
            }
            return l && p.push(p.shift()), p
        }
    }),e("zrender/mixin/Draggable", [Ne], function () {
        function t() {
            this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
        }

        return t[fe] = {
            constructor: t, _dragStart: function (t) {
                var e = t[Se];
                e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(e, "dragstart", t.event))
            }, _drag: function (t) {
                var e = this._draggingTarget;
                if (e) {
                    var i = t.offsetX, n = t.offsetY, r = i - this._x, a = n - this._y;
                    this._x = i, this._y = n, e.drift(r, a, t), this.dispatchToElement(e, "drag", t.event);
                    var o = this.findHover(i, n, e), s = this._dropTarget;
                    this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(s, "dragleave", t.event), o && o !== s && this.dispatchToElement(o, "dragenter", t.event))
                }
            }, _dragEnd: function (t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1), this.dispatchToElement(e, "dragend", t.event), this._dropTarget && this.dispatchToElement(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
            }
        }, t
    }),e("echarts/chart/bar/barItemStyle", [Ne, "../../model/mixin/makeStyleMapper"], function (t) {
        var e = t("../../model/mixin/makeStyleMapper")([["fill", "color"], [h, "borderColor"], [f, "borderWidth"], [h, "barBorderColor"], [f, "barBorderWidth"], [me], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        return {
            getBarItemStyle: function (t) {
                var i = e.call(this, t);
                if (this.getBorderLineDash) {
                    var n = this.getBorderLineDash();
                    n && (i.lineDash = n)
                }
                return i
            }
        }
    }),e("zrender/graphic/helper/roundRect", [Ne], function () {
        return {
            buildPath: function (t, e) {
                var i, n, a, o, s = e.x, l = e.y, u = e.width, c = e[Ce], h = e.r;
                0 > u && (s += u, u = -u), 0 > c && (l += c, c = -c), typeof h === B ? i = n = a = o = h : h instanceof Array ? 1 === h[ae] ? i = n = a = o = h[0] : 2 === h[ae] ? (i = a = h[0], n = o = h[1]) : 3 === h[ae] ? (i = h[0], n = o = h[1], a = h[2]) : (i = h[0], n = h[1], a = h[2], o = h[3]) : i = n = a = o = 0;
                var f;
                i + n > u && (f = i + n, i *= u / f, n *= u / f), a + o > u && (f = a + o, a *= u / f, o *= u / f), n + a > c && (f = n + a, n *= c / f, a *= c / f), i + o > c && (f = i + o, i *= c / f, o *= c / f), t[r](s + i, l), t.lineTo(s + u - n, l), 0 !== n && t.quadraticCurveTo(s + u, l, s + u, l + n), t.lineTo(s + u, l + c - a), 0 !== a && t.quadraticCurveTo(s + u, l + c, s + u - a, l + c), t.lineTo(s + o, l + c), 0 !== o && t.quadraticCurveTo(s, l + c, s, l + c - o), t.lineTo(s, l + i), 0 !== i && t.quadraticCurveTo(s, l, s + i, l)
            }
        }
    }),e("zrender/animation/requestAnimationFrame", [Ne], function () {
        return typeof window !== s && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
            setTimeout(t, 16)
        }
    }),e("zrender/core/event", [Ne, "../mixin/Eventful", "./env"], function (t) {
        function e(t) {
            return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
        }

        function i(t, e, i) {
            return e.currentTarget && t === e.currentTarget ? u.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : n(t, e, i) : n(t, e, i), i
        }

        function n(t, i, n) {
            var r = e(t);
            n = n || {}, n.zrX = i.clientX - r.left, n.zrY = i.clientY - r.top
        }

        function r(t, e) {
            if (e = e || window.event, null != e.zrX) return e;
            var n = e.type, r = n && n[re]("touch") >= 0;
            if (r) {
                var a = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
                a && i(t, a, e)
            } else i(t, e, e), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
            return e
        }

        function a(t, e, i) {
            c ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
        }

        function o(t, e, i) {
            c ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
        }

        var l = t("../mixin/Eventful"), u = t("./env"), c = typeof window !== s && !!window.addEventListener,
            h = c ? function (t) {
                t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
            } : function (t) {
                t.returnValue = !1, t.cancelBubble = !0
            };
        return {
            clientToLocal: i,
            normalizeEvent: r,
            addEventListener: a,
            removeEventListener: o,
            stop: h,
            Dispatcher: l
        }
    }),e("zrender/core/GestureMgr", [Ne, "./event"], function (t) {
        function e(t) {
            var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
            return Math.sqrt(e * e + i * i)
        }

        function i(t) {
            return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
        }

        var n = t("./event"), r = function () {
            this._track = []
        };
        r[fe] = {
            constructor: r, recognize: function (t, e, i) {
                return this._doTrack(t, e, i), this._recognize(t)
            }, clear: function () {
                return this._track[ae] = 0, this
            }, _doTrack: function (t, e, i) {
                var r = t.touches;
                if (r) {
                    for (var a = {points: [], touches: [], target: e, event: t}, o = 0, s = r[ae]; s > o; o++) {
                        var l = r[o], u = n.clientToLocal(i, l);
                        a.points.push([u.zrX, u.zrY]), a.touches.push(l)
                    }
                    this._track.push(a)
                }
            }, _recognize: function (t) {
                for (var e in a) if (a.hasOwnProperty(e)) {
                    var i = a[e](this._track, t);
                    if (i) return i
                }
            }
        };
        var a = {
            pinch: function (t, n) {
                var r = t[ae];
                if (r) {
                    var a = (t[r - 1] || {}).points, o = (t[r - 2] || {}).points || a;
                    if (o && o[ae] > 1 && a && a[ae] > 1) {
                        var s = e(a) / e(o);
                        !isFinite(s) && (s = 1), n.pinchScale = s;
                        var l = i(a);
                        return n.pinchX = l[0], n.pinchY = l[1], {type: "pinch", target: t[0][Se], event: n}
                    }
                }
            }
        };
        return r
    }),e("zrender/Layer", [Ne, "./core/util", "./config", "./graphic/Style", "./graphic/Pattern"], function (t) {
        function e() {
            return !1
        }

        function i(t, e, i, n) {
            var r = document[D](e), a = i[Me](), o = i[we](), s = r.style;
            return s[ye] = "absolute", s.left = 0, s.top = 0, s.width = a + "px", s[Ce] = o + "px", r.width = a * n, r[Ce] = o * n, r.setAttribute("data-zr-dom-id", t), r
        }

        var n = t("./core/util"), r = t("./config"), a = t("./graphic/Style"), o = t("./graphic/Pattern"),
            s = function (t, a, o) {
                var s;
                o = o || r.devicePixelRatio, typeof t === he ? s = i(t, "canvas", a, o) : n[K](t) && (s = t, t = s.id), this.id = t, this.dom = s;
                var l = s.style;
                l && (s.onselectstart = e, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", l.padding = 0, l.margin = 0, l["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = a, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = o
            };
        return s[fe] = {
            constructor: s, elCount: 0, __dirty: !0, initContext: function () {
                this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
            }, createBackBuffer: function () {
                var t = this.dpr;
                this.domBack = i("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
            }, resize: function (t, e) {
                var i = this.dpr, n = this.dom, r = n.style, a = this.domBack;
                r.width = t + "px", r[Ce] = e + "px", n.width = t * i, n[Ce] = e * i, a && (a.width = t * i, a[Ce] = e * i, 1 != i && this.ctxBack.scale(i, i))
            }, clear: function (t) {
                var e = this.dom, i = this.ctx, n = e.width, r = e[Ce], s = this.clearColor, l = this.motionBlur && !t,
                    u = this.lastFrameAlpha, c = this.dpr;
                if (l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / c, r / c)), i.clearRect(0, 0, n, r), s) {
                    var h;
                    s.colorStops ? (h = s.__canvasGradient || a.getGradient(i, s, {
                        x: 0,
                        y: 0,
                        width: n,
                        height: r
                    }), s.__canvasGradient = h) : s.image && (h = o[fe].getCanvasPattern.call(s, i)), i.save(), i.fillStyle = h || s, i.fillRect(0, 0, n, r), i.restore()
                }
                if (l) {
                    var f = this.domBack;
                    i.save(), i.globalAlpha = u, i.drawImage(f, 0, 0, n, r), i.restore()
                }
            }
        }, s
    }),e("echarts/preprocessor/helper/compatStyle", [Ne, Be], function (t) {
        function e(t) {
            var e = t && t.itemStyle;
            e && i.each(n, function (n) {
                var r = e[k], a = e.emphasis;
                r && r[n] && (t[n] = t[n] || {}, t[n][k] ? i.merge(t[n][k], r[n]) : t[n][k] = r[n], r[n] = null), a && a[n] && (t[n] = t[n] || {}, t[n].emphasis ? i.merge(t[n].emphasis, a[n]) : t[n].emphasis = a[n], a[n] = null)
            })
        }

        var i = t(Be), n = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
        return function (t) {
            if (t) {
                e(t), e(t.markPoint), e(t.markLine);
                var n = t.data;
                if (n) {
                    for (var r = 0; r < n[ae]; r++) e(n[r]);
                    var a = t.markPoint;
                    if (a && a.data) for (var o = a.data, r = 0; r < o[ae]; r++) e(o[r]);
                    var s = t.markLine;
                    if (s && s.data) for (var l = s.data, r = 0; r < l[ae]; r++) i[F](l[r]) ? (e(l[r][0]), e(l[r][1])) : e(l[r])
                }
            }
        }
    }),e("echarts/component/axis/AxisView", [Ne, Be, P, "./AxisBuilder", z], function (t) {
        function e(t, e) {
            function i(t) {
                var e = n[g](t);
                return e.toGlobalCoord(e[m](0))
            }

            var n = t[Re], r = e.axis, a = {}, o = r[ye], s = r.onZero ? "onZero" : o, l = r.dim, u = n.getRect(),
                c = [u.x, u.x + u.width, u.y, u.y + u[Ce]], h = e.get("offset") || 0,
                f = {x: {top: c[2] - h, bottom: c[3] + h}, y: {left: c[0] - h, right: c[1] + h}};
            f.x.onZero = Math.max(Math.min(i("y"), f.x[_e]), f.x.top), f.y.onZero = Math.max(Math.min(i("x"), f.y.right), f.y.left), a[ye] = ["y" === l ? f.y[s] : c[0], "x" === l ? f.x[s] : c[3]], a[b] = Math.PI / 2 * ("x" === l ? 0 : 1);
            var d = {top: -1, bottom: 1, left: -1, right: 1};
            a.labelDirection = a.tickDirection = a.nameDirection = d[o], r.onZero && (a.labelOffset = f[l][o] - f[l].onZero), e[De]("axisTick").get(T) && (a.tickDirection = -a.tickDirection), e[De]("axisLabel").get(T) && (a.labelDirection = -a.labelDirection);
            var p = e[De]("axisLabel").get("rotate");
            return a.labelRotation = "top" === s ? -p : p, a.labelInterval = r.getLabelInterval(), a.z2 = 1, a
        }

        var i = t(Be), n = t(P), r = t("./AxisBuilder"), a = r.ifIgnoreOnTick, o = r.getInterval,
            s = ["axisLine", "axisLabel", "axisTick", "axisName"], l = ["splitArea", "splitLine"],
            u = t(z).extendComponentView({
                type: "axis", render: function (t) {
                    this.group[Ee]();
                    var a = this._axisGroup;
                    if (this._axisGroup = new n.Group, this.group.add(this._axisGroup), t.get("show")) {
                        var o = t.findGridModel(), u = e(o, t), c = new r(t, u);
                        i.each(s, c.add, c), this._axisGroup.add(c.getGroup()), i.each(l, function (e) {
                            t.get(e + ".show") && this["_" + e](t, o, u.labelInterval)
                        }, this), n.groupTransition(a, this._axisGroup, t)
                    }
                }, _splitLine: function (t, e, r) {
                    var s = t.axis, l = t[De]("splitLine"), u = l[De]("lineStyle"), c = u.get("color"), h = o(l, r);
                    c = i[F](c) ? c : [c];
                    for (var f = e[Re].getRect(), d = s.isHorizontal(), p = 0, v = s.getTicksCoords(), m = s.scale.getTicks(), g = [], y = [], _ = u.getLineStyle(), x = 0; x < v[ae]; x++) if (!a(s, x, h)) {
                        var b = s.toGlobalCoord(v[x]);
                        d ? (g[0] = b, g[1] = f.y, y[0] = b, y[1] = f.y + f[Ce]) : (g[0] = f.x, g[1] = b, y[0] = f.x + f.width, y[1] = b);
                        var w = p++ % c[ae];
                        this._axisGroup.add(new n.Line(n.subPixelOptimizeLine({
                            anid: "line_" + m[x],
                            shape: {x1: g[0], y1: g[1], x2: y[0], y2: y[1]},
                            style: i[Oe]({stroke: c[w]}, _),
                            silent: !0
                        })))
                    }
                }, _splitArea: function (t, e, r) {
                    var s = t.axis, l = t[De]("splitArea"), u = l[De]("areaStyle"), c = u.get("color"),
                        h = e[Re].getRect(), f = s.getTicksCoords(), d = s.scale.getTicks(), p = s.toGlobalCoord(f[0]),
                        v = s.toGlobalCoord(f[0]), m = 0, g = o(l, r), y = u.getAreaStyle();
                    c = i[F](c) ? c : [c];
                    for (var _ = 1; _ < f[ae]; _++) if (!a(s, _, g)) {
                        var x, b, w, M, S = s.toGlobalCoord(f[_]);
                        s.isHorizontal() ? (x = p, b = h.y, w = S - x, M = h[Ce]) : (x = h.x, b = v, w = h.width, M = S - b);
                        var T = m++ % c[ae];
                        this._axisGroup.add(new n.Rect({
                            anid: "area_" + d[_],
                            shape: {x: x, y: b, width: w, height: M},
                            style: i[Oe]({fill: c[T]}, y),
                            silent: !0
                        })), p = x + w, v = b + M
                    }
                }
            });
        u[$]({type: "xAxis"}), u[$]({type: "yAxis"})
    }),e("echarts/chart/line/poly", [Ne, "zrender/graphic/Path", pe], function (t) {
        function e(t) {
            return isNaN(t[0]) || isNaN(t[1])
        }

        function i(t, i, n, a, p, v, m, g, y, _, x) {
            for (var b = 0, w = n, M = 0; a > M; M++) {
                var S = i[w];
                if (w >= p || 0 > w) break;
                if (e(S)) {
                    if (x) {
                        w += v;
                        continue
                    }
                    break
                }
                if (w === n) t[v > 0 ? r : "lineTo"](S[0], S[1]), c(f, S); else if (y > 0) {
                    var T = w + v, C = i[T];
                    if (x) for (; C && e(i[T]);) T += v, C = i[T];
                    var A = .5, L = i[b], C = i[T];
                    if (!C || e(C)) c(d, S); else {
                        e(C) && !x && (C = S), o.sub(h, C, L);
                        var P, k;
                        if ("x" === _ || "y" === _) {
                            var z = "x" === _ ? 0 : 1;
                            P = Math.abs(S[z] - L[z]), k = Math.abs(S[z] - C[z])
                        } else P = o.dist(S, L), k = o.dist(S, C);
                        A = k / (k + P), u(d, S, h, -y * (1 - A))
                    }
                    s(f, f, g), l(f, f, m), s(d, d, g), l(d, d, m), t.bezierCurveTo(f[0], f[1], d[0], d[1], S[0], S[1]), u(f, S, h, y * A)
                } else t.lineTo(S[0], S[1]);
                b = w, w += v
            }
            return M
        }

        function n(t, e) {
            var i = [1 / 0, 1 / 0], n = [-1 / 0, -1 / 0];
            if (e) for (var r = 0; r < t[ae]; r++) {
                var a = t[r];
                a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1])
            }
            return {min: e ? i : n, max: e ? n : i}
        }

        var a = t("zrender/graphic/Path"), o = t(pe), s = o.min, l = o.max, u = o.scaleAndAdd, c = o.copy, h = [],
            f = [], d = [];
        return {
            Polyline: a[$]({
                type: "ec-polyline",
                shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
                style: {fill: null, stroke: "#000"},
                buildPath: function (t, r) {
                    var a = r.points, o = 0, s = a[ae], l = n(a, r.smoothConstraint);
                    if (r.connectNulls) {
                        for (; s > 0 && e(a[s - 1]); s--) ;
                        for (; s > o && e(a[o]); o++) ;
                    }
                    for (; s > o;) o += i(t, a, o, s, s, 1, l.min, l.max, r.smooth, r.smoothMonotone, r.connectNulls) + 1
                }
            }),
            Polygon: a[$]({
                type: "ec-polygon",
                shape: {
                    points: [],
                    stackedOnPoints: [],
                    smooth: 0,
                    stackedOnSmooth: 0,
                    smoothConstraint: !0,
                    smoothMonotone: null,
                    connectNulls: !1
                },
                buildPath: function (t, r) {
                    var a = r.points, o = r.stackedOnPoints, s = 0, l = a[ae], u = r.smoothMonotone,
                        c = n(a, r.smoothConstraint), h = n(o, r.smoothConstraint);
                    if (r.connectNulls) {
                        for (; l > 0 && e(a[l - 1]); l--) ;
                        for (; l > s && e(a[s]); s++) ;
                    }
                    for (; l > s;) {
                        var f = i(t, a, s, l, l, 1, c.min, c.max, r.smooth, u, r.connectNulls);
                        i(t, o, s + f - 1, f, l, -1, h.min, h.max, r.stackedOnSmooth, u, r.connectNulls), s += f + 1, t.closePath()
                    }
                }
            })
        }
    }),e("echarts/chart/helper/SymbolDraw", [Ne, P, "./Symbol"], function (t) {
        function e(t) {
            this.group = new n.Group, this._symbolCtor = t || r
        }

        function i(t, e, i) {
            var n = t[C](e);
            return !(!n || isNaN(n[0]) || isNaN(n[1]) || i && i(e) || "none" === t[ie](e, "symbol"))
        }

        var n = t(P), r = t("./Symbol"), a = e[fe];
        return a.updateData = function (t, e) {
            var r = this.group, a = t.hostModel, o = this._data, s = this._symbolCtor, l = {
                itemStyle: a[De]("itemStyle.normal").getItemStyle(["color"]),
                hoverItemStyle: a[De]("itemStyle.emphasis").getItemStyle(),
                symbolRotate: a.get("symbolRotate"),
                symbolOffset: a.get("symbolOffset"),
                hoverAnimation: a.get("hoverAnimation"),
                labelModel: a[De]("label.normal"),
                hoverLabelModel: a[De]("label.emphasis")
            };
            t.diff(o).add(function (n) {
                var a = t[C](n);
                if (i(t, n, e)) {
                    var o = new s(t, n, l);
                    o.attr(ye, a), t[x](n, o), r.add(o)
                }
            })[te](function (u, c) {
                var h = o[A](c), f = t[C](u);
                return i(t, u, e) ? (h ? (h.updateData(t, u, l), n[w](h, {position: f}, a)) : (h = new s(t, u), h.attr(ye, f)), r.add(h), void t[x](u, h)) : void r[Q](h)
            })[Q](function (t) {
                var e = o[A](t);
                e && e.fadeOut(function () {
                    r[Q](e)
                })
            }).execute(), this._data = t
        }, a.updateLayout = function () {
            var t = this._data;
            t && t[l](function (e, i) {
                var n = t[C](i);
                e.attr(ye, n)
            })
        }, a[Q] = function (t) {
            var e = this.group, i = this._data;
            i && (t ? i[l](function (t) {
                t.fadeOut(function () {
                    e[Q](t)
                })
            }) : e[Ee]())
        }, e
    }),e("echarts/component/helper/selectableMixin", [Ne, Be], function (t) {
        var e = t(Be);
        return {
            updateSelectedMap: function (t) {
                this._selectTargetMap = e.reduce(t || [], function (t, e) {
                    return t[e.name] = e, t
                }, {})
            }, select: function (t) {
                var i = this._selectTargetMap, n = i[t], r = this.get("selectedMode");
                "single" === r && e.each(i, function (t) {
                    t.selected = !1
                }), n && (n.selected = !0)
            }, unSelect: function (t) {
                var e = this._selectTargetMap[t];
                e && (e.selected = !1)
            }, toggleSelected: function (t) {
                var e = this._selectTargetMap[t];
                return null != e ? (this[e.selected ? "unSelect" : "select"](t), e.selected) : void 0
            }, isSelected: function (t) {
                var e = this._selectTargetMap[t];
                return e && e.selected
            }
        }
    }),e("echarts/chart/helper/Symbol", [Ne, Be, "../../util/symbol", P, "../../util/number"], function (t) {
        function e(t) {
            return t = t instanceof Array ? t.slice() : [+t, +t], t[0] /= 2, t[1] /= 2, t
        }

        function i(t, e, i) {
            o.Group.call(this), this.updateData(t, e, i)
        }

        function n(t, e) {
            this[u].drift(t, e)
        }

        var r = t(Be), a = t("../../util/symbol"), o = t(P), s = t("../../util/number"), l = i[fe];
        l._createSymbol = function (t, i, r) {
            this[Ee]();
            var s = i.hostModel, l = i[ie](r, "color"), u = a.createSymbol(t, -1, -1, 2, 2, l);
            u.attr({z2: 100, culling: !0, scale: [0, 0]}), u.drift = n;
            var c = e(i[ie](r, "symbolSize"));
            o.initProps(u, {scale: c}, s, r), this._symbolType = t, this.add(u)
        }, l.stopSymbolAnimation = function (t) {
            this.childAt(0).stopAnimation(t)
        }, l.getSymbolPath = function () {
            return this.childAt(0)
        }, l.getScale = function () {
            return this.childAt(0).scale
        }, l.highlight = function () {
            this.childAt(0)[Y]("emphasis")
        }, l.downplay = function () {
            this.childAt(0)[Y](k)
        }, l.setZ = function (t, e) {
            var i = this.childAt(0);
            i[G] = t, i.z = e
        }, l.setDraggable = function (t) {
            var e = this.childAt(0);
            e.draggable = t, e.cursor = t ? "move" : "pointer"
        }, l.updateData = function (t, i, n) {
            this[Te] = !1;
            var r = t[ie](i, "symbol") || "circle", a = t.hostModel, s = e(t[ie](i, "symbolSize"));
            if (r !== this._symbolType) this._createSymbol(r, t, i); else {
                var l = this.childAt(0);
                o[w](l, {scale: s}, a, i)
            }
            this._updateCommon(t, i, s, n), this._seriesModel = a
        };
        var h = ["itemStyle", k], f = ["itemStyle", "emphasis"], d = ["label", k], m = ["label", "emphasis"];
        return l._updateCommon = function (t, i, n, a) {
            var l = this.childAt(0), u = t.hostModel, g = t[ie](i, "color");
            "image" !== l.type && l.useStyle({strokeNoScale: !0}), a = a || null;
            var y = a && a.itemStyle, x = a && a.hoverItemStyle, w = a && a.symbolRotate, T = a && a.symbolOffset,
                C = a && a.labelModel, A = a && a.hoverLabelModel, L = a && a.hoverAnimation;
            if (!a || t.hasItemOption) {
                var P = t[M](i);
                y = P[De](h).getItemStyle(["color"]), x = P[De](f).getItemStyle(), w = P[c]("symbolRotate"), T = P[c]("symbolOffset"), C = P[De](d), A = P[De](m), L = P[c]("hoverAnimation")
            } else x = r[$]({}, x);
            var z = l.style;
            l.attr(b, (w || 0) * Math.PI / 180 || 0), T && l.attr(ye, [s[_](T[0], n[0]), s[_](T[1], n[1])]), l.setColor(g), l[ge](y);
            var D = t[ie](i, me);
            null != D && (z[me] = D);
            for (var I, O, R = t[p].slice(); R[ae] && (I = R.pop(), O = t.getDimensionInfo(I).type, O === v || "time" === O);) ;
            null != I && C[c]("show") ? (o.setText(z, C, g), z.text = r[S](u.getFormattedLabel(i, k), t.get(I, i))) : z.text = "", null != I && A[c]("show") ? (o.setText(x, A, g), x.text = r[S](u.getFormattedLabel(i, "emphasis"), t.get(I, i))) : x.text = "";
            var E = e(t[ie](i, "symbolSize"));
            if (l.off(Z).off(X).off("emphasis").off(k), l.hoverStyle = x, o.setHoverStyle(l), L && u.ifEnableAnimation()) {
                var B = function () {
                    var t = E[1] / E[0];
                    this.animateTo({scale: [Math.max(1.1 * E[0], E[0] + 3), Math.max(1.1 * E[1], E[1] + 3 * t)]}, 400, "elasticOut")
                }, N = function () {
                    this.animateTo({scale: E}, 400, "elasticOut")
                };
                l.on(Z, B).on(X, N).on("emphasis", B).on(k, N)
            }
        }, l.fadeOut = function (t) {
            var e = this.childAt(0);
            this[Te] = !0, e.style.text = "", o[w](e, {scale: [0, 0]}, this._seriesModel, this[ne], t)
        }, r[E](i, o.Group), i
    }),e("echarts/chart/line/lineAnimationDiff", [Ne], function () {
        function t(t) {
            return t >= 0 ? 1 : -1
        }

        function e(e, i, n) {
            for (var r, a = e.getBaseAxis(), o = e.getOtherAxis(a), s = a.onZero ? 0 : o.scale[I]()[0], l = o.dim, u = "x" === l || "radius" === l ? 1 : 0, c = i.stackedOn, h = i.get(l, n); c && t(c.get(l, n)) === t(h);) {
                r = c;
                break
            }
            var f = [];
            return f[u] = i.get(a.dim, n), f[1 - u] = r ? r.get(l, n, !0) : s, e.dataToPoint(f)
        }

        function i(t, e) {
            var i = [];
            return e.diff(t).add(function (t) {
                i.push({cmd: "+", idx: t})
            })[te](function (t, e) {
                i.push({cmd: "=", idx: e, idx1: t})
            })[Q](function (t) {
                i.push({cmd: "-", idx: t})
            }).execute(), i
        }

        return function (t, n, r, a, o, s) {
            for (var l = i(t, n), u = [], c = [], h = [], f = [], d = [], v = [], m = [], g = s[p], y = 0; y < l[ae]; y++) {
                var _ = l[y], x = !0;
                switch (_.cmd) {
                    case"=":
                        var b = t[C](_.idx), w = n[C](_.idx1);
                        (isNaN(b[0]) || isNaN(b[1])) && (b = w.slice()), u.push(b), c.push(w), h.push(r[_.idx]), f.push(a[_.idx1]), m.push(n.getRawIndex(_.idx1));
                        break;
                    case"+":
                        var M = _.idx;
                        u.push(o.dataToPoint([n.get(g[0], M, !0), n.get(g[1], M, !0)])), c.push(n[C](M).slice()), h.push(e(o, n, M)), f.push(a[M]), m.push(n.getRawIndex(M));
                        break;
                    case"-":
                        var M = _.idx, S = t.getRawIndex(M);
                        S !== M ? (u.push(t[C](M)), c.push(s.dataToPoint([t.get(g[0], M, !0), t.get(g[1], M, !0)])), h.push(r[M]), f.push(e(s, t, M)), m.push(S)) : x = !1
                }
                x && (d.push(_), v.push(v[ae]))
            }
            v.sort(function (t, e) {
                return m[t] - m[e]
            });
            for (var T = [], A = [], L = [], P = [], k = [], y = 0; y < v[ae]; y++) {
                var M = v[y];
                T[y] = u[M], A[y] = c[M], L[y] = h[M], P[y] = f[M], k[y] = d[M]
            }
            return {current: T, next: A, stackedOnCurrent: L, stackedOnNext: P, status: k}
        }
    }),e("echarts/util/symbol", [Ne, "./graphic", "zrender/core/BoundingRect"], function (t) {
        var e = t("./graphic"), n = t("zrender/core/BoundingRect"), a = e.extendShape({
            type: "triangle",
            shape: {cx: 0, cy: 0, width: 0, height: 0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, a = e.width / 2, o = e[Ce] / 2;
                t[r](i, n - o), t.lineTo(i + a, n + o), t.lineTo(i - a, n + o), t.closePath()
            }
        }), o = e.extendShape({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, a = e.width / 2, o = e[Ce] / 2;
                t[r](i, n - o), t.lineTo(i + a, n), t.lineTo(i, n + o), t.lineTo(i - a, n), t.closePath()
            }
        }), s = e.extendShape({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.x, n = e.y, r = e.width / 5 * 3, a = Math.max(r, e[Ce]), o = r / 2, s = o * o / (a - o),
                    l = n - a + o + s, u = Math.asin(s / o), c = Math.cos(u) * o, h = Math.sin(u), f = Math.cos(u);
                t.arc(i, l, o, Math.PI - u, 2 * Math.PI + u);
                var d = .6 * o, p = .7 * o;
                t.bezierCurveTo(i + c - h * d, l + s + f * d, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - c + h * d, l + s + f * d, i - c, l + s), t.closePath()
            }
        }), l = e.extendShape({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e[Ce], n = e.width, a = e.x, o = e.y, s = n / 3 * 2;
                t[r](a, o), t.lineTo(a + s, o + i), t.lineTo(a, o + i / 4 * 3), t.lineTo(a - s, o + i), t.lineTo(a, o), t.closePath()
            }
        }), u = {
            line: e.Line,
            rect: e.Rect,
            roundRect: e.Rect,
            square: e.Rect,
            circle: e.Circle,
            diamond: o,
            pin: s,
            arrow: l,
            triangle: a
        }, c = {
            line: function (t, e, i, n, r) {
                r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
            }, rect: function (t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r[Ce] = n
            }, roundRect: function (t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r[Ce] = n, r.r = Math.min(i, n) / 4
            }, square: function (t, e, i, n, r) {
                var a = Math.min(i, n);
                r.x = t, r.y = e, r.width = a, r[Ce] = a
            }, circle: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
            }, diamond: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r[Ce] = n
            }, pin: function (t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r[Ce] = n
            }, arrow: function (t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r[Ce] = n
            }, triangle: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r[Ce] = n
            }
        }, f = {};
        for (var d in u) u.hasOwnProperty(d) && (f[d] = new u[d]);
        var p = e.extendShape({
            type: "symbol",
            shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
            beforeBrush: function () {
                var t = this.style, e = this.shape;
                "pin" === e.symbolType && t.textPosition === T && (t.textPosition = ["50%", "40%"], t[ke] = xe, t.textVerticalAlign = be)
            },
            buildPath: function (t, e, n) {
                var r = e.symbolType, a = f[r];
                "none" !== e.symbolType && (a || (r = "rect", a = f[r]), c[r](e.x, e.y, e.width, e[Ce], a.shape), a[i](t, a.shape, n))
            }
        }), v = function (t) {
            if ("image" !== this.type) {
                var e = this.style, i = this.shape;
                i && "line" === i.symbolType ? e[h] = t : this.__isEmptyBrush ? (e[h] = t, e.fill = "#fff") : (e.fill && (e.fill = t), e[h] && (e[h] = t)), this.dirty(!1)
            }
        }, m = {
            createSymbol: function (t, i, r, a, o, s) {
                var l = 0 === t[re]("empty");
                l && (t = t.substr(5, 1)[de]() + t.substr(6));
                var u;
                return u = 0 === t[re]("image://") ? new e.Image({
                    style: {
                        image: t.slice(8),
                        x: i,
                        y: r,
                        width: a,
                        height: o
                    }
                }) : 0 === t[re]("path://") ? e.makePath(t.slice(7), {}, new n(i, r, a, o)) : new p({
                    shape: {
                        symbolType: t,
                        x: i,
                        y: r,
                        width: a,
                        height: o
                    }
                }), u.__isEmptyBrush = l, u.setColor = v, u.setColor(s), u
            }
        };
        return m
    }),e("echarts/component/helper/listComponent", [Ne, "../../util/layout", "../../util/format", P], function (t) {
        function e(t, e, n) {
            i.positionGroup(t, e.getBoxLayoutParams(), {width: n[Me](), height: n[we]()}, e.get("padding"))
        }

        var i = t("../../util/layout"), n = t("../../util/format"), r = t(P);
        return {
            layout: function (t, n, r) {
                var a = i.getLayoutRect(n.getBoxLayoutParams(), {width: r[Me](), height: r[we]()}, n.get("padding"));
                i.box(n.get("orient"), t, n.get("itemGap"), a.width, a[Ce]), e(t, n, r)
            }, addBackground: function (t, e) {
                var i = n.normalizeCssArray(e.get("padding")), a = t[Ae](), o = e.getItemStyle(["color", me]);
                o.fill = e.get("backgroundColor");
                var s = new r.Rect({
                    shape: {
                        x: a.x - i[3],
                        y: a.y - i[0],
                        width: a.width + i[1] + i[3],
                        height: a[Ce] + i[0] + i[2]
                    }, style: o, silent: !0, z2: -1
                });
                r.subPixelOptimizeRect(s), t.add(s)
            }
        }
    }),e("echarts/component/tooltip/TooltipContent", [Ne, Be, "zrender/tool/color", "zrender/core/event", "../../util/format", ve], function (t) {
        function e(t) {
            var e = "cubic-bezier(0.23, 1, 0.32, 1)", i = "left " + t + "s " + e + ",top " + t + "s " + e;
            return o.map(d, function (t) {
                return t + "transition:" + i
            }).join(";")
        }

        function i(t) {
            var e = [], i = t.get("fontSize"), n = t[Le]();
            return n && e.push("color:" + n), e.push("font:" + t[Pe]()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), c(["decoration", "align"], function (i) {
                var n = t.get(i);
                n && e.push("text-" + i + ":" + n)
            }), e.join(";")
        }

        function n(t) {
            t = t;
            var n = [], r = t.get("transitionDuration"), a = t.get("backgroundColor"), o = t[De](ze),
                l = t.get("padding");
            return r && n.push(e(r)), a && (f[le] ? n.push("background-Color:" + a) : (n.push("background-Color:#" + s.toHex(a)), n.push("filter:alpha(opacity=70)"))), c(["width", "color", "radius"], function (e) {
                var i = "border-" + e, r = h(i), a = t.get(r);
                null != a && n.push(i + ":" + a + ("color" === e ? "" : "px"))
            }), n.push(i(o)), null != l && n.push("padding:" + u.normalizeCssArray(l).join("px ") + "px"), n.join(";") + ";"
        }

        function r(t, e) {
            var i = document[D]("div"), n = e.getZr();
            this.el = i, this._x = e[Me]() / 2, this._y = e[we]() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
            var r = this;
            i.onmouseenter = function () {
                r.enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
            }, i.onmousemove = function (e) {
                if (e = e || window.event, !r.enterable) {
                    var i = n.handler;
                    l.normalizeEvent(t, e), i.dispatch("mousemove", e)
                }
            }, i.onmouseleave = function () {
                r.enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
            }, a(i, t)
        }

        function a(t, e) {
            function i(t) {
                n(t[Se]) || t.preventDefault()
            }

            function n(i) {
                for (; i && i !== e;) {
                    if (i === t) return !0;
                    i = i.parentNode
                }
            }

            l.addEventListener(e, "touchstart", i), l.addEventListener(e, "touchmove", i), l.addEventListener(e, "touchend", i)
        }

        var o = t(Be), s = t("zrender/tool/color"), l = t("zrender/core/event"), u = t("../../util/format"), c = o.each,
            h = u.toCamelCase, f = t(ve), d = ["", "-webkit-", "-moz-", "-o-"],
            p = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
        return r[fe] = {
            constructor: r, enterable: !0, update: function () {
                var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), i = t.style;
                "absolute" !== i[ye] && "absolute" !== e[ye] && (i[ye] = "relative")
            }, show: function (t) {
                clearTimeout(this._hideTimeout);
                var e = this.el;
                e.style.cssText = p + n(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0
            }, setContent: function (t) {
                var e = this.el;
                e.innerHTML = t, e.style.display = t ? "block" : "none"
            }, moveTo: function (t, e) {
                var i = this.el.style;
                i.left = t + "px", i.top = e + "px", this._x = t, this._y = e
            }, hide: function () {
                this.el.style.display = "none", this._show = !1
            }, hideLater: function (t) {
                !this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(o.bind(this.hide, this), t)) : this.hide())
            }, isShow: function () {
                return this._show
            }
        }, r
    }),e("echarts/component/marker/markerHelper", [Ne, Be, "../../util/number"], function (t) {
        function e(t) {
            return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
        }

        function i(t) {
            return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
        }

        function n(t, e, i) {
            var n = -1;
            do n = Math.max(o.getPrecision(t.get(e, i)), n), t = t.stackedOn; while (t);
            return n
        }

        function r(t, e, i, r, a, o) {
            var s = [], l = v(e, r, t), u = e.indexOfNearest(r, l, !0);
            s[a] = e.get(i, u, !0), s[o] = e.get(r, u, !0);
            var c = n(e, r, u);
            return c >= 0 && (s[o] = +s[o].toFixed(c)), s
        }

        var a = t(Be), o = t("../../util/number"), s = a[re], l = a.curry,
            u = {min: l(r, "min"), max: l(r, "max"), average: l(r, "average")}, c = function (t, e) {
                var n = t[Ie](), r = t[Re];
                if (e && !i(e) && !a[F](e.coord) && r) {
                    var o = r[p], l = h(e, n, r, t);
                    if (e = a.clone(e), e.type && u[e.type] && l.baseAxis && l.valueAxis) {
                        var c = s(o, l.baseAxis.dim), f = s(o, l.valueAxis.dim);
                        e.coord = u[e.type](n, l.baseDataDim, l.valueDataDim, c, f), e.value = e.coord[f]
                    } else {
                        for (var d = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], m = 0; 2 > m; m++) if (u[d[m]]) {
                            var g = t.coordDimToDataDim(o[m])[0];
                            d[m] = v(n, g, d[m])
                        }
                        e.coord = d
                    }
                }
                return e
            }, h = function (t, e, i, n) {
                var r = {};
                return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = i[g](n.dataDimToCoordDim(r.valueDataDim)), r.baseAxis = i.getOtherAxis(r.valueAxis), r.baseDataDim = n.coordDimToDataDim(r.baseAxis.dim)[0]) : (r.baseAxis = n.getBaseAxis(), r.valueAxis = i.getOtherAxis(r.baseAxis), r.baseDataDim = n.coordDimToDataDim(r.baseAxis.dim)[0], r.valueDataDim = n.coordDimToDataDim(r.valueAxis.dim)[0]), r
            }, f = function (t, i) {
                return t && t.containData && i.coord && !e(i) ? t.containData(i.coord) : !0
            }, d = function (t, e, i, n) {
                return 2 > n ? t.coord && t.coord[n] : t.value
            }, v = function (t, e, i) {
                if ("average" === i) {
                    var n = 0, r = 0;
                    return t.each(e, function (t) {
                        isNaN(t) || (n += t, r++)
                    }, !0), n / r
                }
                return t.getDataExtent(e, !0)["max" === i ? 1 : 0]
            };
        return {dataTransform: c, dataFilter: f, dimValueGetter: d, getAxisInfo: h, numCalculate: v}
    }),e("echarts/chart/helper/LineDraw", [Ne, P, "./Line"], function (t) {
        function e(t) {
            return isNaN(t[0]) || isNaN(t[1])
        }

        function i(t) {
            return !e(t[0]) && !e(t[1])
        }

        function n(t) {
            this._ctor = t || a, this.group = new r.Group
        }

        var r = t(P), a = t("./Line"), o = n[fe];
        return o.updateData = function (t) {
            var e = this._lineData, n = this.group, r = this._ctor, a = t.hostModel, o = {
                lineStyle: a[De]("lineStyle.normal").getLineStyle(),
                hoverLineStyle: a[De]("lineStyle.emphasis").getLineStyle(),
                labelModel: a[De]("label.normal"),
                hoverLabelModel: a[De]("label.emphasis")
            };
            t.diff(e).add(function (e) {
                if (i(t[C](e))) {
                    var a = new r(t, e, o);
                    t[x](e, a), n.add(a)
                }
            })[te](function (a, s) {
                var l = e[A](s);
                return i(t[C](a)) ? (l ? l.updateData(t, a, o) : l = new r(t, a, o), t[x](a, l), void n.add(l)) : void n[Q](l)
            })[Q](function (t) {
                n[Q](e[A](t))
            }).execute(), this._lineData = t
        }, o.updateLayout = function () {
            var t = this._lineData;
            t[l](function (e, i) {
                e.updateLayout(t, i)
            }, this)
        }, o[Q] = function () {
            this.group[Ee]()
        }, n
    }),e("echarts/component/marker/MarkerView", [Ne, z], function (t) {
        return t(z).extendComponentView({
            type: "marker", init: function () {
                this.markerGroupMap = {}
            }, render: function (t, e, i) {
                var n = this.markerGroupMap;
                for (var r in n) n.hasOwnProperty(r) && (n[r].__keep = !1);
                var a = this.type + "Model";
                e[J](function (t) {
                    var n = t[a];
                    n && this.renderSeries(t, n, e, i)
                }, this);
                for (var r in n) n.hasOwnProperty(r) && !n[r].__keep && this.group[Q](n[r].group)
            }, renderSeries: function () {
            }
        })
    }),e("echarts/component/axis/AxisBuilder", [Ne, Be, "../../util/format", P, "../../model/Model", "../../util/number", pe], function (t) {
        function e(t) {
            var e = {componentType: t.mainType};
            return e[t.mainType + "Index"] = t.componentIndex, e
        }

        function i(t, e, i) {
            var n, r, a = f(e - t[b]);
            return p(a) ? (r = i > 0 ? "top" : _e, n = xe) : p(a - w) ? (r = i > 0 ? _e : "top", n = xe) : (r = be, n = a > 0 && w > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                rotation: a,
                textAlign: n,
                verticalAlign: r
            }
        }

        function n(t, e, i, n) {
            var r, a, o = f(i - t[b]), s = n[0] > n[1], l = "start" === e && !s || "start" !== e && s;
            return p(o - w / 2) ? (a = l ? _e : "top", r = xe) : p(o - 1.5 * w) ? (a = l ? "top" : _e, r = xe) : (a = be, r = 1.5 * w > o && o > w / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
                rotation: o,
                textAlign: r,
                verticalAlign: a
            }
        }

        function r(t) {
            var e = t.get("tooltip");
            return t.get(Te) || !(t.get("triggerEvent") || e && e.show)
        }

        var s = t(Be), l = t("../../util/format"), u = t(P), c = t("../../model/Model"), h = t("../../util/number"),
            f = h.remRadian, p = h.isRadianAroundZero, g = t(pe), _ = g[d], x = s[S], w = Math.PI, M = function (t, e) {
                this.opt = e, this.axisModel = t, s[Oe](e, {
                    labelOffset: 0,
                    nameDirection: 1,
                    tickDirection: 1,
                    labelDirection: 1,
                    silent: !0
                }), this.group = new u.Group;
                var i = new u.Group({position: e[ye].slice(), rotation: e[b]});
                i.updateTransform(), this._transform = i[a], this._dumbGroup = i
            };
        M[fe] = {
            constructor: M, hasBuilder: function (t) {
                return !!T[t]
            }, add: function (t) {
                T[t].call(this)
            }, getGroup: function () {
                return this.group
            }
        };
        var T = {
            axisLine: function () {
                var t = this.opt, e = this.axisModel;
                if (e.get("axisLine.show")) {
                    var i = this.axisModel.axis[I](), n = this._transform, r = [i[0], 0], a = [i[1], 0];
                    n && (_(r, r, n), _(a, a, n)), this.group.add(new u.Line(u.subPixelOptimizeLine({
                        anid: "line",
                        shape: {x1: r[0], y1: r[1], x2: a[0], y2: a[1]},
                        style: s[$]({lineCap: "round"}, e[De]("axisLine.lineStyle").getLineStyle()),
                        strokeContainThreshold: t.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    })))
                }
            }, axisTick: function () {
                var t = this.axisModel;
                if (t.get("axisTick.show")) for (var e = t.axis, i = t[De]("axisTick"), n = this.opt, r = i[De]("lineStyle"), a = i.get(ae), o = A(i, n.labelInterval), l = e.getTicksCoords(i.get("alignWithLabel")), c = e.scale.getTicks(), h = [], f = [], d = this._transform, p = 0; p < l[ae]; p++) if (!C(e, p, o)) {
                    var v = l[p];
                    h[0] = v, h[1] = 0, f[0] = v, f[1] = n.tickDirection * a, d && (_(h, h, d), _(f, f, d)), this.group.add(new u.Line(u.subPixelOptimizeLine({
                        anid: "tick_" + c[p],
                        shape: {x1: h[0], y1: h[1], x2: f[0], y2: f[1]},
                        style: s[Oe](r.getLineStyle(), {stroke: t.get("axisLine.lineStyle.color")}),
                        z2: 2,
                        silent: !0
                    })))
                }
            }, axisLabel: function () {
                function t(t, e) {
                    var i = t && t[Ae]().clone(), n = e && e[Ae]().clone();
                    return i && n ? (i[d](t.getLocalTransform()), n[d](e.getLocalTransform()), i.intersect(n)) : void 0
                }

                var n = this.opt, a = this.axisModel, s = x(n.axisLabelShow, a.get("axisLabel.show"));
                if (s) {
                    var l = a.axis, h = a[De]("axisLabel"), f = h[De](ze), p = h.get("margin"), v = l.scale.getTicks(),
                        g = a.getFormattedLabels(), _ = x(n.labelRotation, h.get("rotate")) || 0;
                    _ = _ * w / 180;
                    for (var M = i(n, _, n.labelDirection), S = a.get("data"), T = [], A = r(a), L = a.get("triggerEvent"), P = 0; P < v[ae]; P++) if (!C(l, P, n.labelInterval)) {
                        var k = f;
                        S && S[P] && S[P][ze] && (k = new c(S[P][ze], f, a[o]));
                        var z = k[Le]() || a.get("axisLine.lineStyle.color"), D = l[m](v[P]),
                            I = [D, n.labelOffset + n.labelDirection * p], O = l.scale.getLabel(v[P]), R = new u.Text({
                                anid: "label_" + v[P],
                                style: {
                                    text: g[P],
                                    textAlign: k.get("align", !0) || M[ke],
                                    textVerticalAlign: k.get("baseline", !0) || M.verticalAlign,
                                    textFont: k[Pe](),
                                    fill: typeof z === N ? z(O) : z
                                },
                                position: I,
                                rotation: M[b],
                                silent: A,
                                z2: 10
                            });
                        L && (R.eventData = e(a), R.eventData.targetType = "axisLabel", R.eventData.value = O), this._dumbGroup.add(R), R.updateTransform(), T.push(R), this.group.add(R), R.decomposeTransform()
                    }
                    if (l.type !== y) {
                        if (a.getMin ? a.getMin() : a.get("min")) {
                            var E = T[0], B = T[1];
                            t(E, B) && (E[oe] = !0)
                        }
                        if (a.getMax ? a.getMax() : a.get("max")) {
                            var F = T[T[ae] - 1], V = T[T[ae] - 2];
                            t(V, F) && (F[oe] = !0)
                        }
                    }
                }
            }, axisName: function () {
                var t = this.opt, a = this.axisModel, o = x(t.axisName, a.get("name"));
                if (o) {
                    var c, h = a.get("nameLocation"), f = t.nameDirection, d = a[De]("nameTextStyle"),
                        p = a.get("nameGap") || 0, v = this.axisModel.axis[I](), m = v[0] > v[1] ? -1 : 1,
                        g = ["start" === h ? v[0] - m * p : "end" === h ? v[1] + m * p : (v[0] + v[1]) / 2, h === be ? t.labelOffset + f * p : 0],
                        y = a.get("nameRotate");
                    null != y && (y = y * w / 180);
                    var _;
                    h === be ? c = i(t, null != y ? y : t[b], f) : (c = n(t, h, y || 0, v), _ = t.axisNameAvailableWidth, null != _ && (_ = Math.abs(_ / Math.sin(c[b])), !isFinite(_) && (_ = null)));
                    var M = d[Pe](), S = a.get("nameTruncate", !0) || {}, T = S.ellipsis, C = x(S.maxWidth, _),
                        A = null != T && null != C ? l.truncateText(o, C, M, T, {
                            minChar: 2,
                            placeholder: S.placeholder
                        }) : o, L = a.get("tooltip", !0), P = a.mainType,
                        k = {componentType: P, name: o, $vars: ["name"]};
                    k[P + "Index"] = a.componentIndex;
                    var z = new u.Text({
                        anid: "name",
                        __fullText: o,
                        __truncatedText: A,
                        style: {
                            text: A,
                            textFont: M,
                            fill: d[Le]() || a.get("axisLine.lineStyle.color"),
                            textAlign: c[ke],
                            textVerticalAlign: c.verticalAlign
                        },
                        position: g,
                        rotation: c[b],
                        silent: r(a),
                        z2: 1,
                        tooltip: L && L.show ? s[$]({
                            content: o, formatter: function () {
                                return o
                            }, formatterParams: k
                        }, L) : null
                    });
                    a.get("triggerEvent") && (z.eventData = e(a), z.eventData.targetType = "axisName", z.eventData.name = o), this._dumbGroup.add(z), z.updateTransform(), this.group.add(z), z.decomposeTransform()
                }
            }
        }, C = M.ifIgnoreOnTick = function (t, e, i) {
            var n, r = t.scale;
            return r.type === v && (typeof i === N ? (n = r.getTicks()[e], !i(n, r.getLabel(n))) : e % (i + 1))
        }, A = M.getInterval = function (t, e) {
            var i = t.get("interval");
            return (null == i || "auto" == i) && (i = e), i
        };
        return M
    }),e("echarts/chart/pie/labelLayout", [Ne, "zrender/contain/text"], function (t) {
        function e(t, e, i, n, r, a, o) {
            function s(e, i, n) {
                for (var r = e; i > r; r++) if (t[r].y += n, r > e && i > r + 1 && t[r + 1].y > t[r].y + t[r][Ce]) return void l(r, n / 2);
                l(i - 1, n / 2)
            }

            function l(e, i) {
                for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1][Ce])); n--) ;
            }

            function u(t, e, i, n, r, a) {
                for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t[ae]; l > s; s++) if (t[s][ye] !== xe) {
                    var u = Math.abs(t[s].y - n), c = t[s].len, h = t[s].len2,
                        f = r + c > u ? Math.sqrt((r + c + h) * (r + c + h) - u * u) : Math.abs(t[s].x - i);
                    e && f >= o && (f = o - 10), !e && o >= f && (f = o + 10), t[s].x = i + f * a, o = f
                }
            }

            t.sort(function (t, e) {
                return t.y - e.y
            });
            for (var c, h = 0, f = t[ae], d = [], p = [], v = 0; f > v; v++) c = t[v].y - h, 0 > c && s(v, f, -c, r), h = t[v].y + t[v][Ce];
            0 > o - h && l(f - 1, h - o);
            for (var v = 0; f > v; v++) t[v].y >= i ? p.push(t[v]) : d.push(t[v]);
            u(d, !1, e, i, n, r), u(p, !0, e, i, n, r)
        }

        function i(t, i, n, r, a, o) {
            for (var s = [], l = [], u = 0; u < t[ae]; u++) t[u].x < i ? s.push(t[u]) : l.push(t[u]);
            e(l, i, n, r, 1, a, o), e(s, i, n, r, -1, a, o);
            for (var u = 0; u < t[ae]; u++) {
                var c = t[u].linePoints;
                if (c) {
                    var h = c[1][0] - c[2][0];
                    c[2][0] = t[u].x < i ? t[u].x + 3 : t[u].x - 3, c[1][1] = c[2][1] = t[u].y, c[1][0] = c[2][0] + h
                }
            }
        }

        var n = t("zrender/contain/text");
        return function (t, e, r, a) {
            var o, s, l = t[Ie](), u = [], c = !1;
            l.each(function (i) {
                var r, a, h, f, d = l[C](i), p = l[M](i), v = p[De]("label.normal"),
                    m = v.get(ye) || p.get("label.emphasis.position"), g = p[De]("labelLine.normal"), y = g.get(ae),
                    _ = g.get("length2"), x = (d.startAngle + d.endAngle) / 2, b = Math.cos(x), w = Math.sin(x);
                o = d.cx, s = d.cy;
                var S = m === T || "inner" === m;
                if (m === xe) r = d.cx, a = d.cy, f = xe; else {
                    var A = (S ? (d.r + d.r0) / 2 * b : d.r * b) + o, P = (S ? (d.r + d.r0) / 2 * w : d.r * w) + s;
                    if (r = A + 3 * b, a = P + 3 * w, !S) {
                        var z = A + b * (y + e - d.r), D = P + w * (y + e - d.r), I = z + (0 > b ? -1 : 1) * _, O = D;
                        r = I + (0 > b ? -5 : 5), a = O, h = [[A, P], [z, D], [I, O]]
                    }
                    f = S ? xe : b > 0 ? "left" : "right"
                }
                var R = v[De](ze)[Pe](), E = v.get("rotate") ? 0 > b ? -x + Math.PI : -x : 0,
                    B = t.getFormattedLabel(i, k) || l[L](i), N = n[Ae](B, R, f, "top");
                c = !!E, d.label = {
                    x: r,
                    y: a,
                    position: m,
                    height: N[Ce],
                    len: y,
                    len2: _,
                    linePoints: h,
                    textAlign: f,
                    verticalAlign: "middle",
                    font: R,
                    rotation: E
                }, S || u.push(d.label)
            }), !c && t.get("avoidLabelOverlap") && i(u, o, s, e, r, a)
        }
    }),e("echarts/chart/helper/Line", [Ne, "../../util/symbol", pe, "./LinePath", P, Be, "../../util/number"], function (t) {
        function e(t) {
            return "_" + t + "Type"
        }

        function i(t, e, i) {
            var n = e[ie](i, "color"), r = e[ie](i, t), a = e[ie](i, t + "Size");
            if (r && "none" !== r) {
                p[F](a) || (a = [a, a]);
                var o = l.createSymbol(r, -a[0] / 2, -a[1] / 2, a[0], a[1], n);
                return o.name = t, o
            }
        }

        function r(t) {
            var e = new f({name: "line"});
            return a(e.shape, t), e
        }

        function a(t, e) {
            var i = e[0], n = e[1], r = e[2];
            t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, r ? (t.cpx1 = r[0], t.cpy1 = r[1]) : (t.cpx1 = 0 / 0, t.cpy1 = 0 / 0)
        }

        function o() {
            var t = this, e = t.childOfName("fromSymbol"), i = t.childOfName("toSymbol"), r = t.childOfName("label");
            if (e || i || !r[oe]) {
                for (var a = 1, o = this[u]; o;) o.scale && (a /= o.scale[0]), o = o[u];
                var s = t.childOfName("line");
                if (this[n] || s[n]) {
                    var l = s.shape.percent, c = s.pointAt(0), f = s.pointAt(l), d = h.sub([], f, c);
                    if (h[O](d, d), e) {
                        e.attr(ye, c);
                        var p = s.tangentAt(0);
                        e.attr(b, Math.PI / 2 - Math.atan2(p[1], p[0])), e.attr("scale", [a * l, a * l])
                    }
                    if (i) {
                        i.attr(ye, f);
                        var p = s.tangentAt(1);
                        i.attr(b, -Math.PI / 2 - Math.atan2(p[1], p[0])), i.attr("scale", [a * l, a * l])
                    }
                    if (!r[oe]) {
                        r.attr(ye, f);
                        var v, m, g, y = 5 * a;
                        if ("end" === r.__position) v = [d[0] * y + f[0], d[1] * y + f[1]], m = d[0] > .8 ? "left" : d[0] < -.8 ? "right" : xe, g = d[1] > .8 ? "top" : d[1] < -.8 ? _e : be; else if (r.__position === be) {
                            var _ = l / 2, p = s.tangentAt(_), x = [p[1], -p[0]], w = s.pointAt(_);
                            x[1] > 0 && (x[0] = -x[0], x[1] = -x[1]), v = [w[0] + x[0] * y, w[1] + x[1] * y], m = xe, g = _e;
                            var M = -Math.atan2(p[1], p[0]);
                            f[0] < c[0] && (M = Math.PI + M), r.attr(b, M)
                        } else v = [-d[0] * y + c[0], -d[1] * y + c[1]], m = d[0] > .8 ? "right" : d[0] < -.8 ? "left" : xe, g = d[1] > .8 ? _e : d[1] < -.8 ? "top" : be;
                        r.attr({
                            style: {textVerticalAlign: r.__verticalAlign || g, textAlign: r.__textAlign || m},
                            position: v,
                            scale: [a, a]
                        })
                    }
                }
            }
        }

        function s(t, e, i) {
            d.Group.call(this), this._createLine(t, e, i)
        }

        var l = t("../../util/symbol"), h = t(pe), f = t("./LinePath"), d = t(P), p = t(Be), v = t("../../util/number"),
            m = ["fromSymbol", "toSymbol"], g = s[fe];
        return g.beforeUpdate = o, g._createLine = function (t, n, a) {
            var o = t.hostModel, s = t[C](n), l = r(s);
            l.shape.percent = 0, d.initProps(l, {shape: {percent: 1}}, o, n), this.add(l);
            var u = new d.Text({name: "label"});
            this.add(u), p.each(m, function (r) {
                var a = i(r, t, n);
                this.add(a), this[e(r)] = t[ie](n, r)
            }, this), this._updateCommonStl(t, n, a)
        }, g.updateData = function (t, n, r) {
            var o = t.hostModel, s = this.childOfName("line"), l = t[C](n), u = {shape: {}};
            a(u.shape, l), d[w](s, u, o, n), p.each(m, function (r) {
                var a = t[ie](n, r), o = e(r);
                if (this[o] !== a) {
                    this[Q](this.childOfName(r));
                    var s = i(r, t, n);
                    this.add(s)
                }
                this[o] = a
            }, this), this._updateCommonStl(t, n, r)
        }, g._updateCommonStl = function (t, e, i) {
            var n = t.hostModel, r = this.childOfName("line"), a = i && i.lineStyle, o = i && i.hoverLineStyle,
                s = i && i.labelModel, l = i && i.hoverLabelModel;
            if (!i || t.hasItemOption) {
                var u = t[M](e);
                a = u[De]("lineStyle.normal").getLineStyle(), o = u[De]("lineStyle.emphasis").getLineStyle(), s = u[De]("label.normal"), l = u[De]("label.emphasis")
            }
            var h = t[ie](e, "color"), f = p[S](t[ie](e, me), a[me], 1);
            r.useStyle(p[Oe]({
                strokeNoScale: !0,
                fill: "none",
                stroke: h,
                opacity: f
            }, a)), r.hoverStyle = o, p.each(m, function (t) {
                var e = this.childOfName(t);
                e && (e.setColor(h), e[ge]({opacity: f}))
            }, this);
            var g, y, _ = s[c]("show"), x = l[c]("show"), b = this.childOfName("label");
            if (_ || x) {
                var w = n.getRawValue(e);
                y = null == w ? y = t[L](e) : isFinite(w) ? v.round(w) : w, g = h || "#000"
            }
            if (_) {
                var T = s[De](ze);
                b[ge]({
                    text: p[S](n.getFormattedLabel(e, k, t.dataType), y),
                    textFont: T[Pe](),
                    fill: T[Le]() || g
                }), b.__textAlign = T.get("align"), b.__verticalAlign = T.get("baseline"), b.__position = s.get(ye)
            } else b[ge]("text", "");
            if (x) {
                var C = l[De](ze);
                b.hoverStyle = {
                    text: p[S](n.getFormattedLabel(e, "emphasis", t.dataType), y),
                    textFont: C[Pe](),
                    fill: C[Le]() || g
                }
            } else b.hoverStyle = {text: ""};
            b[oe] = !_ && !x, d.setHoverStyle(this)
        }, g.updateLayout = function (t, e) {
            this.setLinePoints(t[C](e))
        }, g.setLinePoints = function (t) {
            var e = this.childOfName("line");
            a(e.shape, t), e.dirty()
        }, p[E](s, d.Group), s
    }),e("echarts/chart/helper/LinePath", [Ne, P, pe], function (t) {
        function e(t) {
            return isNaN(+t.cpx1) || isNaN(+t.cpy1)
        }

        var n = t(P), r = t(pe), a = n.Line[fe], o = n.BezierCurve[fe];
        return n.extendShape({
            type: "ec-line",
            style: {stroke: "#000", fill: null},
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
            buildPath: function (t, n) {
                (e(n) ? a : o)[i](t, n)
            },
            pointAt: function (t) {
                return e(this.shape) ? a.pointAt.call(this, t) : o.pointAt.call(this, t)
            },
            tangentAt: function (t) {
                var i = this.shape, n = e(i) ? [i.x2 - i.x1, i.y2 - i.y1] : o.tangentAt.call(this, t);
                return r[O](n, n)
            }
        })
    }),e("zrender", ["zrender/zrender"], function (t) {
        return t
    }),e("echarts", ["echarts/echarts"], function (t) {
        return t
    });
    var Fe = t("echarts");
    return Fe.graphic = t("echarts/util/graphic"), Fe.number = t("echarts/util/number"), Fe.format = t("echarts/util/format"), t("echarts/chart/bar"), t("echarts/chart/line"), t("echarts/chart/pie"), t("echarts/component/grid"), t("echarts/component/title"), t("echarts/component/legend"), t("echarts/component/tooltip"), t("echarts/component/markLine"), t("zrender/vml/vml"), Fe
});