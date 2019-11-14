! function(e) {
    "object" == typeof module && "undefined" != typeof module.exports ? module.exports = e : e()
}(function() {
    (window.webpackJsonpFusionCharts = window.webpackJsonpFusionCharts || []).push([
        [3], {
            653: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(654));
                t.TimeSeries = a["default"];
                var r = i(n(176)),
                    o = i(n(333)),
                    s = n(358),
                    l = n(387),
                    c = n(388);
                r["default"].DataStore = o["default"], r["default"].DataStore.Operators = {
                    between: s.between,
                    equals: s.equals,
                    less: s.less,
                    lessEquals: s.lessEquals,
                    greater: s.greater,
                    greaterEquals: s.greaterEquals,
                    filter: s.filter,
                    select: s.select,
                    groupBy: s.groupBy,
                    pipe: s.pipe,
                    sort: s.sort,
                    pivot: s.pivot
                }, r["default"].Utils = {
                    duration: c.duration,
                    before: c.before,
                    after: c.after,
                    parseDate: c.parseDate,
                    formatDate: c.formatDate,
                    DatetimeUnits: c.DatetimeUnits,
                    Weekdays: c.Weekdays
                }, r["default"].DataStore.Aggregators = {
                    aggregatorStore: l.aggregatorStore
                };
                var d = {
                    name: "timeseries",
                    type: "package",
                    requiresFusionCharts: !0,
                    extension: function(e) {
                        return e.addDep(a["default"])
                    }
                };
                t["default"] = d
            },
            654: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = n(655).TimeSeries;
                t["default"] = i
            },
            655: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0;
                var a = i(n(656));
                t.TimeSeries = a["default"]
            },
            656: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = i(n(657)),
                    s = i(n(683)),
                    l = i(n(687)),
                    c = i(n(700)),
                    d = i(n(694)),
                    u = i(n(701)),
                    h = n(180),
                    f = n(359),
                    p = i(n(416)),
                    g = i(n(418)),
                    m = i(n(703)),
                    v = i(n(704)),
                    y = n(366),
                    b = i(n(705)),
                    _ = i(n(706)),
                    x = n(379),
                    k = i(n(707)),
                    S = i(n(400)),
                    w = i(n(410)),
                    E = i(n(709)),
                    C = i(n(727)),
                    j = i(n(728)),
                    D = i(n(786)),
                    M = i(n(788)),
                    T = i(n(789)),
                    I = i(n(794)),
                    L = i(n(795)),
                    A = i(n(754)),
                    F = i(n(797)),
                    O = i(n(806)),
                    P = i(n(815)),
                    N = i(n(817)),
                    B = i(n(818)),
                    R = i(n(820)),
                    H = i(n(822)),
                    G = h.regex.dropHash,
                    U = function(e, t) {
                        return e.getSchema().filter(t).map(function(e) {
                            return e.name
                        })
                    },
                    q = function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    },
                    Y = function(e) {
                        return e.map(function(e) {
                            return {
                                x: e.x,
                                y: e.y,
                                plots: (0, c["default"])(e.x.map(function(e) {
                                    return e.index
                                }), e.y.map(function(e) {
                                    return e.index
                                })).map(function(e) {
                                    return {
                                        x: e[0],
                                        y: e[1]
                                    }
                                })
                            }
                        })
                    },
                    V = function(e) {
                        return +e.split("_").pop()
                    },
                    z = function(e) {
                        return "date" === e.type || "interval" === e.type
                    },
                    W = function(e) {
                        return "number" === e.type
                    },
                    X = function(e) {
                        return "string" === e.type
                    },
                    J = (0, u["default"])(o["default"]),
                    K = function(e, t) {
                        return J(function(e, n) {
                            return t.map(function(e, t, i) {
                                return {
                                    x: [{
                                        index: n,
                                        visible: t === i.length - 1
                                    }],
                                    y: [{
                                        index: t,
                                        align: "left"
                                    }]
                                }
                            })
                        }, e)
                    },
                    Z = function(e, t) {
                        return J(function(e, n) {
                            return {
                                x: [{
                                    index: n,
                                    visible: !0
                                }],
                                y: t.map(function(e, t) {
                                    return {
                                        index: t,
                                        align: t % 2 == 0 ? "left" : "right"
                                    }
                                })
                            }
                        }, e)
                    },
                    $ = function(e, t) {
                        "object" == typeof e && (e["line-height"] || (e["line-height"] = 1.2 * (parseFloat(e["font-size"]) || t || 10) + h.PXSTRING))
                    },
                    Q = function(e, t) {
                        for (var n in e) e[n]._fc_info.table = e[n]._fc_info.filter ? t.table.query([e[n]._fc_info.filterInfo.query]) : t.table, e[n]._fc_info.filterInfo.table = e[n]._fc_info.table, re(e[n])
                    },
                    ee = function(e, t) {
                        for (var n in e) e[n]._fc_info.table = t.table, e[n]._fc_info.group = n, re(e[n])
                    },
                    te = function(e, t) {
                        for (var n in e) e[n]._fc_info.table = t.table, e[n]._fc_info.groupItems = t.groupItems, e[n]._fc_info.group = t.group, re(e[n])
                    },
                    ne = function(e) {
                        var t = e.op,
                            n = e.operands,
                            i = [];
                        if (e.filter) {
                            for (var a in n) {
                                var r;
                                if (n.hasOwnProperty(a))(r = i).push.apply(r, Object.keys(n[a]))
                            }
                            i = (0, l["default"])(i)
                        } else i = Object.keys(n);
                        return i.map(function(e) {
                            return {
                                column: e,
                                operation: t
                            }
                        })
                    },
                    ie = function(e, t, n, i) {
                        void 0 === t && (t = []);
                        var a = function(a) {
                            if ("plottype" !== a) {
                                var r = function(e) {
                                    return e.column === a && e.operation === i
                                };
                                (t.length > 0 ? (0, o["default"])(function(e) {
                                    return n.filter(r).map(function(t) {
                                        return [e, t.column, t.operation]
                                    })
                                }, t).map(function(e) {
                                    return e.join(" - ")
                                }) : n.filter(r).map(function(e) {
                                    return [e.column, e.operation].join(" - ")
                                })).forEach(function(t) {
                                    return e[a].push(t)
                                })
                            }
                        };
                        for (var r in e) a(r)
                    },
                    ae = function(e, t) {
                        var n = function(n) {
                            var i = e[n]._fc_info.binDecider,
                                a = e[n]._fc_info.chart,
                                r = i.getRangeThreshold(),
                                s = [{
                                    column: e[n]._fc_info.bin,
                                    timeUnit: x.DatetimeUnits[q(r[0].name())],
                                    binSize: r[1],
                                    startValue: e[n]._fc_info.totalStart
                                }],
                                l = t.group,
                                c = t.groupItems,
                                d = t.pivot,
                                u = t.table,
                                h = function(e) {
                                    return (0, f.filter)(function(t, n) {
                                        return t[n[l]] === e
                                    })
                                };
                            for (var p in e[n]) "aggregate" === p && function() {
                                var t, g = e[n][p]._fc_info,
                                    m = [],
                                    v = void 0,
                                    y = [],
                                    b = [],
                                    _ = [];
                                for (var k in g) m.push({
                                    op: k,
                                    operands: g[k],
                                    filter: l
                                });
                                if (t = (0, o["default"])(ne, m), l) {
                                    var S = c.map(h).map(function(e) {
                                        return u.query([e])
                                    });
                                    d ? (v = (0, f.pivot)(s, d, t), S.forEach(function(e) {
                                        y.push(e.query([v])), b.push(e.unique(d))
                                    })) : (v = (0, f.groupBy)(s, t), y = S.map(function(e) {
                                        return e.query([v])
                                    }))
                                } else d ? (v = (0, f.pivot)(s, d, t), _ = u.unique(d)) : v = (0, f.groupBy)(s, t), y = [u.query([v])];
                                a.addEventListener("focusLimitChanged", function() {
                                    r = i.getRangeThreshold(), s = [{
                                        column: e[n]._fc_info.bin,
                                        timeUnit: x.DatetimeUnits[q(r[0].name())],
                                        binSize: r[1],
                                        startValue: e[n]._fc_info.totalStart
                                    }], d ? v._updateArgs(s, d, t) : v._updateArgs(s, t)
                                }), m.forEach(function(i) {
                                    var a = i.operands;
                                    l ? c.forEach(function(r, o) {
                                        var s = a[r];
                                        s.table = y[o], s.position = e[n]._fc_info.bin, s.filterItem = r, ie(s, b[o], t, i.op)
                                    }) : (a.table = y[0], a.position = e[n]._fc_info.bin, ie(a, _, t, i.op))
                                })
                            }()
                        };
                        for (var i in e) n(i)
                    },
                    re = function(e) {
                        for (var t in e) {
                            var n = e[t];
                            "filter" === t ? Q(n, e._fc_info) : "group" === t ? ee(n, e._fc_info) : "pivot" === t ? te(n, e._fc_info) : "bin" === t && ae(n, e._fc_info)
                        }
                    },
                    oe = function(e, t) {
                        var n, i, a, r, o, s, l;
                        t ? (n = e.config.contextPanels, i = e.config.contextAxesX, a = e.config.contextAxesY, r = e.getFromEnv("contextBins"), o = e.getFromEnv("contextScalesX"), s = e.getFromEnv("contextScalesY"), l = e.config.contextTableMap) : (n = e.config.focusPanels, i = e.config.focusAxesX, a = e.config.focusAxesY, r = e.getFromEnv("focusBins"), o = e.getFromEnv("focusScalesX"), s = e.getFromEnv("focusScalesY"), l = e.config.focusTableMap);
                        for (var c = 0, d = n.length; c < d; c++)
                            for (var u = n[c].plots, p = function(t, n) {
                                    var c = u[t],
                                        d = i[c.x],
                                        p = a[c.y],
                                        g = r[c.x],
                                        m = g.getRangeThreshold(),
                                        v = g.getBinDomain().map(Number),
                                        b = o[c.x],
                                        _ = s[c.y],
                                        x = l;
                                    c.plots || (c.plots = []), d.binDecider = g, d.scale = b, p.scale = _, d.filter && (x.filter || (x.filter = {}), x = x.filter, d.filterInfo.query = (0, f.between)(d.filter[0], v[0] - 2 * m[2], v[1] + 2 * m[2]), x["x__FC_OP_SEP__" + c.x] || (x["x__FC_OP_SEP__" + c.x] = {
                                        _fc_info: {
                                            filter: d.filter[0],
                                            filterInfo: d.filterInfo,
                                            start: v[0],
                                            end: v[1]
                                        }
                                    }), x = x["x__FC_OP_SEP__" + c.x]), p.filter && (x || (x.filter = {}), (x = x.filter)["y__FC_OP_SEP__" + c.y] || (x["y__FC_OP_SEP__" + c.y] = {
                                        _fc_info: {
                                            filter: p.filter[0]
                                        }
                                    }), x = x["y__FC_OP_SEP__" + c.y]), p.plot.forEach(function(t, n) {
                                        var i = x,
                                            a = [];
                                        if (t.group) {
                                            var r = t.group;
                                            x.group || (x.group = {}), (x = x.group)[r] || (x[r] = {
                                                _fc_info: {}
                                            }), x[r]._fc_info.groupItems = a = e.config.dataTable.unique(r), x = x[r]
                                        }
                                        if (t.stack) {
                                            var o = t.stack;
                                            x.pivot || (x.pivot = {}), (x = x.pivot)[o] || (x[o] = {
                                                _fc_info: {
                                                    pivot: o
                                                }
                                            }), x = x[o]
                                        }
                                        if (d.bin && (x.bin || (x.bin = {}), (x = x.bin)["x__FC_OP_SEP__" + c.x] || (x["x__FC_OP_SEP__" + c.x] = {
                                                _fc_info: {
                                                    chart: e,
                                                    bin: d.bin[0],
                                                    binDecider: g,
                                                    totalStart: +y.timeYear.floor(new Date(e.config.dataTable.min(d.bin[0])))
                                                }
                                            }), x = x["x__FC_OP_SEP__" + c.x]), p.bin && (x.bin || (x.bin = {}), (x = x.bin)["y__FC_OP_SEP__" + c.y] || (x["y__FC_OP_SEP__" + c.y] = {
                                                _fc_info: {
                                                    bin: p.bin[0]
                                                }
                                            }), x = x["y__FC_OP_SEP__" + c.y]), x.aggregate || (x.aggregate = {
                                                _fc_info: {}
                                            }), "candlestick" === t.type || "ohlc" === t.type)
                                            for (var s = t.group ? a.length : 1, l = 0; l < s; ++l) {
                                                var u = {
                                                        plottype: t.type,
                                                        typeinnavigator: t.typeinnavigator
                                                    },
                                                    f = t.group ? a[l] : h.UNDEF;
                                                if (t.open) {
                                                    x.aggregate._fc_info.first || (x.aggregate._fc_info.first = {});
                                                    var m = x.aggregate._fc_info.first;
                                                    f && !m[f] && (m[f] = {}), f ? m[f][t.open] || (m[f][t.open] = []) : m[t.open] || (m[t.open] = []), u.open = f ? m[f][t.open] : m[t.open]
                                                }
                                                if (t.high) {
                                                    x.aggregate._fc_info.max || (x.aggregate._fc_info.max = {});
                                                    var v = x.aggregate._fc_info.max;
                                                    f && !v[f] && (v[f] = {}), f ? v[f][t.high] || (v[f][t.high] = []) : v[t.high] || (v[t.high] = []), u.high = f ? v[f][t.high] : v[t.high]
                                                }
                                                if (t.low) {
                                                    x.aggregate._fc_info.min || (x.aggregate._fc_info.min = {});
                                                    var b = x.aggregate._fc_info.min;
                                                    f && !b[f] && (b[f] = {}), f ? b[f][t.low] || (b[f][t.low] = []) : b[t.low] || (b[t.low] = []), u.low = f ? b[f][t.low] : b[t.low]
                                                }
                                                if (t.close) {
                                                    x.aggregate._fc_info.last || (x.aggregate._fc_info.last = {});
                                                    var _ = x.aggregate._fc_info.last;
                                                    f && !_[f] && (_[f] = {}), f ? _[f][t.close] || (_[f][t.close] = []) : _[t.close] || (_[t.close] = []), u.close = f ? _[f][t.close] : _[t.close]
                                                }
                                                var k = x.aggregate._fc_info;
                                                u.tableInfo = (f ? [k.first[f], k.max[f], k.min[f], k.last[f]] : [k.first, k.max, k.min, k.last]).filter(function(e) {
                                                    return !!e
                                                })[0], u.value = t.value, u.plotInAxisIndex = n, c.plots.push(u)
                                            } else {
                                                x.aggregate._fc_info[t.aggregation] || (x.aggregate._fc_info[t.aggregation] = {});
                                                var S = x.aggregate._fc_info[t.aggregation];
                                                if (t.group)
                                                    for (var w = 0; w < a.length; ++w) {
                                                        var E = a[w];
                                                        S[E] || (S[E] = {}), S[E][t.value] || (S[E][t.value] = []), c.plots.push({
                                                            plottype: t.type,
                                                            typeinnavigator: t.typeinnavigator,
                                                            tableInfo: S[E],
                                                            value: S[E][t.value],
                                                            stack: t.stack,
                                                            plotInAxisIndex: n
                                                        })
                                                    } else S[t.value] || (S[t.value] = []), c.plots.push({
                                                        plottype: t.type,
                                                        typeinnavigator: t.typeinnavigator,
                                                        tableInfo: S,
                                                        value: S[t.value],
                                                        stack: t.stack,
                                                        plotInAxisIndex: n
                                                    })
                                            }
                                        x = i
                                    })
                                }, g = 0, m = u.length; g < m; g++) p(g)
                    },
                    se = function(e, t, n, i, a, r) {
                        var o = a;
                        (0, b["default"])(o) && 0 !== o || (o = 10);
                        var s = e > 0 && isFinite(e) ? function(e, t) {
                                var n = .9 * e;
                                return t ? Math.min(n, 1) : n
                            }(e, r) : 1,
                            l = (0, b["default"])(n) && n > 0 && n < e ? n : s,
                            c = t > 0 && isFinite(t) ? t : s + +o;
                        return [l, (0, b["default"])(i) && i > l ? i : 1.2 * c]
                    },
                    le = function(e, t, n, i, a) {
                        var r = t,
                            o = e,
                            s = n,
                            l = i;
                        !isFinite(o) && (o = h.UNDEF), !isFinite(r) && (r = h.UNDEF), !isFinite(s) && (s = h.UNDEF), !isFinite(l) && (l = h.UNDEF);
                        var c = s < o ? s : o !== h.UNDEF ? function(e, t) {
                                var n = e - Math.abs(.1 * e);
                                return n > 0 && t ? 0 : n
                            }(o, a) : 0,
                            d = c < 0 && (l < 0 || r < 0);
                        return [c, l > r ? l : r !== h.UNDEF ? d && a ? 0 : r + Math.abs(.2 * r) : c + 1]
                    },
                    ce = function me(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) {
                                var n = "stroke-dasharray" === t;
                                "object" == typeof e[t] ? me(e[t]) : n && ("string" == typeof(i = e[t]) && "none" !== i) && (e[t] = e[t].replace(/^\s+|\s+$/g, "").replace(/,/g, " ").split(" ").map(function(e) {
                                    return +e
                                }))
                            }
                        var i
                    },
                    de = function ve(e) {
                        for (var t in e) e.hasOwnProperty(t) && ("object" == typeof e[t] ? ve(e[t]) : "opacity" !== t && "stroke-opacity" !== t && "fill-opacity" !== t || (e[t] = Math.max(0, Math.min(1, +e[t]))))
                    },
                    ue = function(e) {
                        e.dispose && e.dispose()
                    },
                    he = function ye(e, t, n) {
                        void 0 === n && (n = h.stubFN);
                        for (var i = Object.keys(e), a = i.length, r = !0, o = 0; o < a && r; ++o) {
                            var s = i[o],
                                l = e[s];
                            if ("_fc_info" === s || "table" === s) {
                                var c = "table" === s ? l : l.table;
                                c && c !== t && (n(c), r = !1)
                            } else "aggregate" === s ? ye(l._fc_info, t, n) : (0, m["default"])(l) && ye(l, t, n)
                        }
                    },
                    fe = function(e, t, n) {
                        switch (e) {
                            case "plot":
                                n.showWarning("02362480", "param", " Timeseries", " Some plot configurations were ignored. Please provide valid values to the plot attribute within a " + t + "Axis configuration.");
                                break;
                            case "axis":
                                n.showWarning("08927060", "param", " Timeseries", "Some " + t + "Axis configurations were ignored. Please provide a valid value to the plot attribute within the " + t + "Axis configurations.");
                                break;
                            case "fullaxis":
                                n.showWarning("08963401", "param", " Timeseries", "All " + t + "Axis configurations were ignored. Please provide a valid value to the plot attribute within the " + t + "Axis configurations. Defaulting to showing all numeric columns in separate canvases.")
                        }
                    },
                    pe = function(e) {
                        void 0 === e && (e = {});
                        var t, n = "style='";
                        for (t in e) n += t + ": " + e[t] + "; ";
                        return n += "'"
                    },
                    ge = function(e) {
                        function t() {
                            var t;
                            t = e.call(this) || this;
                            var n = (0, a["default"])(t);
                            return n.addToEnv("getStyleDef", function(e) {
                                void 0 === e && (e = {});
                                var t, i = e,
                                    a = n.getFromEnv("textStyle");
                                if ("string" == typeof i) {
                                    var r = n.getFromEnv("dataSource").styledefinition;
                                    t = {}, r && i.split(/\s+/g).forEach(function(e) {
                                        return (0, h.extend2)(t, r[e])
                                    })
                                }
                                return t && (i = t), ce(i), de(i), (i["font-size"] || 0 === i["font-size"]) && $(i, a["font-size"]), i
                            }), n.deregisterFactory("canvas"), n.registerFactory("background", L["default"]), n.registerFactory("caption", D["default"]), n.registerFactory("legend", N["default"]), n.registerFactory("panel", j["default"]), n.registerFactory("selectorToolbar", B["default"], ["timeNavigator", "canvas"]), n.registerFactory("timeNavigator", F["default"]), n.registerFactory("standardRangeSelector", H["default"], ["selectorToolbar"]), n.registerFactory("customRangeSelector", O["default"], ["selectorToolbar"]), n.registerFactory("multicanvasCrosslineManager", R["default"], ["mouseTracker"]), n.registerFactory("toolbarManager", P["default"], ["standardRangeSelector", "customRangeSelector"]), t
                        }(0, r["default"])(t, e), t.getName = function() {
                            return "timeseries"
                        };
                        var n = t.prototype;
                        return n.getName = function() {
                            return "timeseries"
                        }, n.__setDefaultConfig = function() {
                            var e = this.config;
                            e.skipConfigureIteration = {}, e.canvasAxisMap = {}, e.scaleYDsMap = {}, e.palettecolors = ["#5D62B5", "#29C3BE", "#F2726F", "#FFC533", "#62B58F", "#BC95DF", "#67CDF2"], e.defaultLegendTextStyle = {
                                "font-family": h.DEFAULT_FT_FONT,
                                "font-weight": "normal",
                                "font-style": "normal",
                                "font-size": "12px",
                                // dark text
                                fill: "#ffffff",
                                "line-height": "14px",
                                opacity: "1",
                                "fill-opacity": "1"
                            }, e.defaultTooltipStyle = {
                                "background-color": (0, h.convertColor)("#ffffff", "90"),
                                color: "#5f5f5f",
                                "border-color": "#e8e8e8",
                                "border-width": "1px",
                                "border-radius": "0px",
                                "line-height": 1,
                                "font-family": h.DEFAULT_FT_FONT,
                                padding: "3px",
                                opacity: .9
                            }, this.addToEnv("textStyle", {
                                "font-family": "sans-serif",
                                "font-size": "10",
                                fill: "#000000",
                                "line-height": "12"
                            }), e.contextPanels = h.UNDEF, e.contextLimit = e.focusLimit = h.UNDEF, e.legendMap = {}
                        }, n.setTooltipStyle = function() {
                            var e = this.getFromEnv("tooltipStyle"),
                                t = this.getFromEnv("baseTextStyle"),
                                n = this.getFromEnv("toolTipController");
                            e.container = Object.assign({}, this.config.defaultTooltipStyle, t, e.text, e.container), e.header = Object.assign({
                                "font-size": (0, h.pluck)(e.container["font-size"], "12px"),
                                "font-weight": (0, h.pluck)(e.container["font-weight"], "bold"),
                                "font-family": e.container["font-family"],
                                padding: "5px 5px 0",
                                color: (0, h.getLightColor)("#5f5f5f", 76)
                            }, e.header), e.body = Object.assign({
                                "font-size": (0, h.pluck)(e.container["font-size"], "11px"),
                                "font-weight": (0, h.pluck)(e.container["font-weight"], "normal"),
                                "font-family": e.container["font-family"],
                                padding: "0 5px 5px"
                            }, e.body), n.setStyle(e.container), n.setRestrictionWithinCanvas({
                                bottom: !0
                            }), e.headerStyleString = pe(e.header), e.bodyStyleString = pe(e.body)
                        }, n.sanitizeData = function(t) {
                            var n = this;
                            e.prototype.sanitizeData.call(this, t);
                            var i = (0, M["default"])(U(t.data, z), t.xaxis, !1),
                                a = i.expandedAxis,
                                r = i.actions,
                                o = (0, M["default"])(U(t.data, W), t.yaxis),
                                s = o.expandedAxis,
                                l = o.actions;
                            t.xaxis = a, t.yaxis = s, r.forEach(function(e) {
                                return fe(e, "x", n)
                            }), l.forEach(function(e) {
                                return fe(e, "y", n)
                            })
                        }, n.getDSdef = function() {
                            return A["default"]
                        }, n._updateVisuals = function() {
                            e.prototype._updateVisuals.call(this), this.getFromEnv("paper").config.noDefaultAttribs = !0
                        }, n.domainValidator = function(e, t, n) {
                            void 0 === n && (n = []);
                            var i, a = this.getFromEnv("contextBins")[0].getBinMin(),
                                r = e[0],
                                o = e[1],
                                s = t[0],
                                l = t[1],
                                c = +e[0],
                                d = +e[1],
                                u = +t[0],
                                h = +t[1];
                            if (n.length && (i = Math.abs(d - c - (+n[1] - +n[0])) > 1 ? "squeeze" : "drag"), c < u && (r = s, o = "drag" === i ? new Date(d + (u - c)) : o), d > h && (o = l, r = "drag" === i ? new Date(c - (d - h)) : r), d < u && (o = s), c > h && (r = l), c > d) {
                                var f = [o, r];
                                r = f[0], o = f[1]
                            }
                            return o - r >= 3 * a[2] ? (this.fireEvent("domainValidated"), [+r, +o]) : this.getFocusLimit() || this.getContextLimit()
                        }, n.configureAttributes = function(e) {
                            var t = this.config,
                                n = new w["default"](this),
                                i = new v["default"],
                                a = e.chart,
                                r = function(e) {
                                    void 0 === e && (e = []);
                                    var t = [];
                                    return (0, _["default"])(e) ? t = e.slice() : (0, k["default"])(e) && (t = e.split(/\s*,\s*/)), (t = t.filter(function(e) {
                                        return !!e
                                    })).map(function(e) {
                                        return (0, h.hashify)(e)
                                    })
                                }(a.palettecolors),
                                o = this.getFromEnv("getStyleDef"),
                                l = e.legend,
                                c = o((a.style || {}).text),
                                d = t.legendMap,
                                u = {},
                                f = this.getFromEnv("legendMap"),
                                p = this.getFromEnv("dataSource"),
                                g = (0, h.extend2)(this.getFromEnv("textStyle"), c),
                                y = (0, m["default"])(e.tooltip) ? e.tooltip : {},
                                b = (0, m["default"])(y.style) ? y.style : {},
                                x = this.getChildren("legend") && this.getChildren("legend")[0],
                                S = o(l && l.item && l.item.style && l.item.style.text),
                                j = [];
                            for (var D in this.addToEnv("baseTextStyle", Object.assign({
                                    "font-family": h.DEFAULT_FT_FONT
                                }, c)), S = Object.assign({}, this.getFromEnv("baseTextStyle"), S), t.mergedLegendStyle = (0, h.extend2)((0, h.extend2)({}, t.defaultLegendTextStyle), S), t.focusTableMap && he(t.focusTableMap, t.focusTableMap._fc_info.table, ue), t.contextTableMap && (he(t.contextTableMap, t.contextTableMap._fc_info.table, ue), t.contextTableMap = h.UNDEF), this.addToEnv("chart-attrib", a), n.configure(), this.addToEnv("color-manager", n), r.length && (t.palettecolors = r), i.setRange(t.palettecolors), this.addToEnv("ordinalScale", i), t.dataTable = e.data, t.showLegend = (0, h.pluckNumber)(a.showlegend, 1), t.navigatorEnabled = (0, h.pluckNumber)(p.navigator && p.navigator.enabled, a.enablenavigator, 1), t.showTooltip = (0, h.pluckNumber)(y.enabled, a.showtooltip, 1), t.interCanvasSpace = (0, h.pluckNumber)(a.intercanvasspace, 20), t.multiCanvas = (0, h.pluckNumber)(a.multicanvas, 1), this.addToEnv("UTC", (0, h.pluck)(a.enableutc, !1)), this.addToEnv("dateAPI", function(e, t, n) {
                                    return e["get" + (n ? "UTC" : "") + t]()
                                }), j = e.xaxis.slice(0, 1).map(function(e) {
                                    return Object.assign({}, e, {
                                        bin: e.plot.map(function(e) {
                                            return e.value
                                        })
                                    })
                                }), t.focusAxesX = j.map(function(e) {
                                    return Object.assign({}, e, {
                                        filter: e.plot.map(function(e) {
                                            return e.value
                                        }),
                                        filterInfo: {}
                                    })
                                }), t.focusAxesY = (0, I["default"])(U(t.dataTable, X), e.yaxis, e.series, e.stack, e.group), t.focusPanels = Y((0, T["default"])(t.focusAxesX, t.focusAxesY, e.canvas, t.multiCanvas ? K : Z)), t.pixelMultiplier = 1, t.focusAxesY.forEach(function(e) {
                                    var n, i = e.plot,
                                        a = 0;
                                    i.forEach(function(e) {
                                        var i = e.stack,
                                            r = e.group,
                                            o = e.value,
                                            s = e.type,
                                            l = "column" === s;
                                        if (l && (n = r ? t.dataTable.unique(r) : new Array(1), a += n.length), i) {
                                            if (u[i]) return;
                                            u[i] = t.dataTable.unique(i)
                                        } else if (r) {
                                            if (u[r]) return;
                                            u[r] = l ? n : t.dataTable.unique(r)
                                        } else if ("ohlc" !== s && "candlestick" !== s) {
                                            if (u[o]) return;
                                            u[o] = [o]
                                        }
                                    }), t.pixelMultiplier = Math.max(a, t.pixelMultiplier)
                                }), u) {
                                u[D].forEach(function(e) {
                                    d[e] || (d[e] = {
                                        visibility: !0,
                                        series: e
                                    })
                                })
                            }
                            if (this.addToEnv("legendMap", d), f) {
                                ! function e(t, n) {
                                    for (var i in t)
                                        if (t.hasOwnProperty(i)) {
                                            var a = n && n[i],
                                                r = t[i];
                                            r.hasOwnProperty("visibility") ? a ? (r.visibility || (x.getItem(r.legendItemId).removeLegendState("hidden"), r.visibility = !0), n[i] = r) : x && x.disposeItem(r.legendItemId) : e(r, a)
                                        }
                                }(f, d)
                            }
                            t.contextAxesX = (0, s["default"])(j), t.contextAxesY = (0, s["default"])(t.focusAxesY), (0, E["default"])(this), (0, C["default"])(this), t.focusTableMap = {
                                _fc_info: {
                                    table: t.dataTable
                                }
                            }, oe(this), t.navigatorEnabled && (t.contextPanels = Y((0, T["default"])(t.contextAxesX, t.contextAxesY, [], function(e, t) {
                                return e.map(function(e, n) {
                                    return {
                                        x: [{
                                            index: n
                                        }],
                                        y: t.map(function(e, t) {
                                            return {
                                                index: t,
                                                visible: !1
                                            }
                                        })
                                    }
                                })
                            })), t.contextTableMap = {
                                _fc_info: {
                                    table: t.dataTable
                                }
                            }, oe(this, !0)), re(t.focusTableMap), re(t.contextTableMap), t.printOption = {
                                enabled: (0, h.pluckNumber)(a.printshowbutton, a.showprintmenuitem, 0)
                            }, t.toolbarPosition = function(e) {
                                var t = e;
                                switch (t) {
                                    case "tr":
                                    case "rt":
                                    case "top right":
                                    case "right top":
                                        t = "tr";
                                        break;
                                    case "br":
                                    case "rb":
                                    case "bottom right":
                                    case "right bottom":
                                        t = "br";
                                        break;
                                    case "tl":
                                    case "lt":
                                    case "top left":
                                    case "left top":
                                        t = "tl";
                                        break;
                                    case "bl":
                                    case "lb":
                                    case "bottom left":
                                    case "left bottom":
                                        t = "bl";
                                        break;
                                    default:
                                        t = "tr"
                                }
                                return t
                            }((0, h.pluck)(a.toolbarposition, "tr").toLowerCase()), t.toolbarHAlign = "left" === ("" + a.toolbarhalign).toLowerCase() ? "l" : t.toolbarPosition.charAt(1), t.toolbarVAlign = "bottom" === ("" + a.toolbarvalign).toLowerCase() ? "b" : t.toolbarPosition.charAt(0), t.link = a.clickurl, this.addToEnv("linkClickFN", (0, h.getLinkAction)(this.getFromEnv("dataSource"), this)), this.addToEnv("chartConfig", t), this.addToEnv("tooltipStyle", {
                                container: o(b.container),
                                text: o(b.text),
                                header: o(b.header),
                                body: o(b.body)
                            }), this.addToEnv("style", {
                                outCancolor: g.fill,
                                fontSize: g["font-size"],
                                outCanfontFamily: g["font-family"]
                            }), this.createBaseComponent(), this.getFromEnv("animationManager").setAnimationState(this._firstConfigure ? "initial" : "update"), t.prediction = function(e, t) {
                                var n = {},
                                    i = {};
                                if (e.extensions && (0, m["default"])(e.extensions.prediction) ? (n = e.extensions.prediction).enabled = !0 : n = {
                                        enabled: !1
                                    }, (0, m["default"])(n.style))
                                    for (i in n.style) n.style.hasOwnProperty(i) && (n.style[i] = t(n.style[i]));
                                else n.style = {};
                                return n
                            }(p, o), this.addToEnv("prediction", t.prediction), this._createToolBox(), this.configureChildren(), this.setTooltipStyle()
                        }, n._addLegend = function(e) {
                            var t, n, i, a = this.config,
                                r = a.mergedLegendStyle,
                                o = e.series,
                                s = this.getFromEnv("ordinalScale").getRangeValue(o),
                                l = this.getFromEnv("legend"),
                                c = (0, h.getLightColor)(s, 60).replace(G, h.HASHSTRING);
                            a.showLegend && (t = {
                                FCcolor: {
                                    color: s,
                                    angle: 0,
                                    ratio: "0",
                                    alpha: "100"
                                }
                            }, n = {
                                label: o
                            }, (i = l.getItem(e.legendItemId)) || (e.legendItemId = l.createItem(), i = l.getItem(e.legendItemId), this.addExtEventListener("fc-click", function() {
                                var t = function(e) {
                                    return e._flushResult && e._flushResult({
                                        legendInteracted: !0
                                    })
                                };
                                e.visibility ? (e.visibility = !1, i.setLegendState("hidden")) : (e.visibility = !0, i.removeLegendState("hidden")), a.focusTableMap && he(a.focusTableMap, a.focusTableMap._fc_info.table, t), a.contextTableMap && he(a.contextTableMap, a.contextTableMap._fc_info.table, t)
                            }, i)), i.configure(n), i.setStateCosmetics("default", {
                                symbol: {
                                    fill: (0, h.toRaphaelColor)(t),
                                    rawFillColor: s,
                                    stroke: (0, h.toRaphaelColor)(c)
                                },
                                text: Object.assign({}, r, {
                                    fill: (0, h.convertColor)(r.fill, r.opacity * r["fill-opacity"] * 100)
                                })
                            }))
                        }, n._createGroup = function(e, t) {
                            return void 0 === e && (e = {}), this.getFromEnv("animationManager").setAnimation({
                                attr: e,
                                container: t,
                                el: "group",
                                component: this,
                                label: "group"
                            })
                        }, n._createLayers = function() {
                            var e, t = this.getFromEnv("animationManager"),
                                n = this.getContainer("parentgroup");
                            !n && (n = this.addContainer("parentgroup", t.setAnimation({
                                el: n || "group",
                                attr: {
                                    name: "parentgroup"
                                },
                                component: this
                            }))), this.getChildContainer("tropo") || this.addChildContainer("tropo", this._createGroup({
                                name: "chart-tropo"
                            }, n)), this.getChildContainer("strato") || this.addChildContainer("strato", this._createGroup({
                                name: "chart-strato"
                            }, n)), this.getChildContainer("meso") || this.addChildContainer("meso", this._createGroup({
                                name: "chart-meso"
                            }, n)), this.getChildContainer("thermo") || this.addChildContainer("thermo", this._createGroup({
                                name: "chart-thermo"
                            }, n)), this.getChildContainer("exo") || (e = this.addChildContainer("exo", this._createGroup({
                                name: "chart-exo"
                            }, n))), this.getChildContainer("toolbar-master") || this.addChildContainer("toolbar-master", this._createGroup({
                                name: "toolbar-master"
                            }, e)), this.getChildContainer("legendGroup") || this.addChildContainer("legendGroup", this._createGroup({
                                name: "legend-group"
                            }, e))
                        }, n.manageSpace = function() {
                            var e, t, n, i, a, r, o, s, l, c, d, u, f, p, m, v, y = this,
                                b = y.config,
                                _ = b.focusPanels,
                                x = b.canvasAxisMap,
                                k = y.getFromEnv("focusScalesY"),
                                S = y.getFromEnv("focusScalesX"),
                                w = y.getChildren("caption"),
                                E = y.getFromEnv("selectorToolbar"),
                                C = y.getFromEnv("toolbar"),
                                j = C.getLogicalSpace(),
                                D = y.getChildren("legend") && y.getChildren("legend")[0],
                                M = y.getChildren("background")[0],
                                T = y.getChildren("canvas_0"),
                                I = 0,
                                L = 0,
                                A = y.getChildren("timeNavigator"),
                                F = 0,
                                O = {
                                    left: 0,
                                    right: 0
                                },
                                P = 0,
                                N = 0,
                                B = e = +y.getFromEnv("chartWidth"),
                                R = t = +y.getFromEnv("chartHeight"),
                                H = 0,
                                G = 0,
                                U = .03 * e,
                                q = .03 * t,
                                Y = 0,
                                z = b.interCanvasSpace;
                            if (N += (0, h.pluckNumber)(b.marginTop, q), R -= (0, h.pluckNumber)(b.marginBottom, q), P += (0, h.pluckNumber)(b.marginLeft, U), B -= (0, h.pluckNumber)(b.marginRight, U), M.setDimension({
                                    height: t,
                                    width: e
                                }), M.setTranslation(0, 0), _.forEach(function(e, t) {
                                    var n = x["canvas_" + t].y,
                                        i = .6 * (B - P) / (n.length || 1);
                                    n.map(function(t) {
                                        var n = V(t),
                                            a = y.getChildren(t)[0].setDimension({
                                                width: i
                                            });
                                        return e.y[n].overlap ? {} : a
                                    }).forEach(function(e) {
                                        "number" == typeof e.left ? O.left = Math.max(O.left, e.left) : O.right = Math.max(O.right, e.right)
                                    })
                                }), _.forEach(function(e, t) {
                                    var n, i, a, r = x["canvas_" + t].y,
                                        o = 0,
                                        s = 0;
                                    r.forEach(function(e) {
                                        n = y.getChildren(e)[0], a = n.getAlignment(), i = n.updateMaxLabelSpace(O[a]), o += (0, h.pluckNumber)(i.left, 0), s += (0, h.pluckNumber)(i.right, 0)
                                    }), H = (0, g["default"])([H, o]), G = (0, g["default"])([G, s])
                                }), _.forEach(function(e, t) {
                                    var n = x["canvas_" + t].x,
                                        i = .6 * (R - N) / (n.length || 1);
                                    n.map(function(t) {
                                        var n = V(t),
                                            a = y.getChildren(t)[0].setDimension({
                                                height: i
                                            });
                                        return e.x[n].overlap ? {} : a
                                    }).forEach(function(e) {
                                        Y += (0, h.pluckNumber)(e.top, e.bottom, 0)
                                    })
                                }), P += H, B -= G, n = R - N, w && w.length ? (s = w[0].setDimension({
                                    width: B - P - j.width,
                                    height: .3 * n
                                }), w[0].setTranslation(P, N), v = Math.max(s.height, j.height)) : v = j.height, j.height && (C.setDimension({
                                    x: B - j.width,
                                    y: N
                                }), C.manageSpace()), N += v, a = Math.max(0, B - P), m = E.getLogicalSpace().height, E.setDimension({
                                    x: P,
                                    y: N,
                                    width: a
                                }), E.manageSpace(), N += m, l = Y + (_.length - 1) * z, n = Math.max(0, R - N - l), D && (p = Math.max(0, D.setDimension({
                                    height: .1 * n,
                                    width: a
                                }).height), R -= p, n -= p, D.setTranslation(P, R)), A && A.length && (o = .7 * n / (_.length || 1), c = .3 * n / (A.length || 1), A.forEach(function(e, t) {
                                    f = e.getChildren("brush")[0], i = f.getLabelSpace() + e.config.scrollbarHeight, d = Math.min(Math.max(Math.min(c, .8 * o), 48), 60), u = d + i, e.setDimension({
                                        width: a,
                                        height: u
                                    }), e.setTranslation(P, R - (A.length - t) * u), F += u
                                }), F > n ? A.forEach(function(e) {
                                    return e.setDimension({
                                        width: 0,
                                        height: 0
                                    })
                                }) : n -= F), r = Math.max(0, n / (_.length || 1)), T && T[0]) {
                                var W = T[0].getCanvasBorder();
                                I = W.topBorder + W.bottomBorder, L = W.leftBorder + W.rightBorder
                            }
                            k.forEach(function(e) {
                                return e.setRange([r - I - 6, 0])
                            }), S.forEach(function(e) {
                                return e.setRange([0, a - L])
                            }), _.forEach(function(e, t) {
                                var n = "canvas_" + t,
                                    i = x[n],
                                    o = i.x,
                                    s = i.y,
                                    l = e.x,
                                    c = e.y,
                                    d = P,
                                    u = P + a,
                                    h = y.getChildren(n)[0],
                                    f = h.getCanvasBorder(),
                                    p = N + f.topBorder,
                                    g = p + r,
                                    m = [];
                                h.setPadding({
                                    top: 6
                                }), h.setDimension({
                                    width: a,
                                    height: r
                                }), o.forEach(function(e) {
                                    var t = l[V(e)],
                                        n = y.getChildren(e)[0],
                                        i = n.getDimension();
                                    t.overlap ? m.push(e) : "top" === t.align ? (n.setTranslation(P + f.leftBorder, p), p += i.top) : "bottom" === t.align && (n.setTranslation(P + f.leftBorder, g), g += i.bottom)
                                }), h.setTranslation(P, p), m.forEach(function(e) {
                                    var t = l[V(e)],
                                        n = y.getChildren(e)[0],
                                        i = n.getDimension();
                                    "top" === t.align ? n.setTranslation(P + f.leftBorder, p) : "bottom" === t.align && n.setTranslation(P + f.leftBorder, p + r - i.bottom)
                                }), s.forEach(function(e) {
                                    var t = p + 6,
                                        n = c[V(e)],
                                        i = y.getChildren(e)[0],
                                        r = i.getDimension();
                                    n.overlap ? "left" === n.align ? i.setTranslation(P, t) : "right" === n.align && i.setTranslation(P + a - r.right, t) : "left" === n.align ? (d -= r.left, i.setTranslation(d, t)) : "right" === n.align && (i.setTranslation(u, t), u += r.right)
                                }), N = g + z
                            })
                        }, n._setDataLabelStyle = function() {
                            return this
                        }, n._checkInvalidData = function() {
                            var e = this.getFromEnv("dataSource"),
                                t = this.getFromEnv("chartInstance");
                            return !e.data && (t.__state.dataReady = !1, t.jsVars.hasNativeMessage = !0, t.jsVars.drawCount += 1, !0)
                        }, n._checkInvalidSpecificData = function() {
                            var e = this.getFromEnv("dataSource");
                            if (e.data && "function" == typeof e.data.getData) {
                                var t = e.data.getData(),
                                    n = t.data,
                                    i = t.schema;
                                return !(Array.isArray(n) && 0 !== n.length && Array.isArray(i) && i.filter(function(e) {
                                    return "date" === e.type
                                }).length && i.filter(function(e) {
                                    return "number" === e.type
                                }).length)
                            }
                            return !0
                        }, n.setYScaleLimit = function(e, t, n, i) {
                            void 0 === i && (i = !0);
                            var a, r, o, s, l = this,
                                c = l.config,
                                d = c.scaleYDsMap,
                                u = d[e],
                                h = function(t) {
                                    var n = t.scale;
                                    return n && n.getId() === e
                                },
                                f = c.focusAxesY.find(h),
                                g = c.contextAxesY.find(h),
                                m = f || g,
                                v = m && m.scale;
                            if (v) {
                                for (var y in u || (u = d[e] = {}), (a = u[t]) || (a = u[t] = {}), a.limit = n, a.baseRequired = i, u)
                                    if (u.hasOwnProperty(y)) {
                                        var b = u[y],
                                            _ = (0, p["default"])([r, o].concat(b.limit));
                                        r = _[0], o = _[1], s = s || b.baseRequired
                                    }
                                    "log" === v.getType() ? v.setDomain(se(r, o, m.min, m.max, m.base, s)) : v.setDomain(le(r, o, m.min, m.max, s)), l.config.focusPanels.forEach(function(e, t) {
                                    var n = "canvas_" + t,
                                        i = l.getChildren(n),
                                        a = i && i[0],
                                        r = l.config.canvasAxisMap[n],
                                        o = r && r.y;
                                    o && a && (a.asyncDraw(), o.forEach(function(e) {
                                        l.getChildren(e).forEach(function(e) {
                                            e.getScale() === v && (e.placeAxis(), e.asyncDraw())
                                        })
                                    }))
                                })
                            }
                        }, n.setXScaleLimit = function(e, t, n) {
                            var i, a, r, o, s, l = this,
                                c = l.config,
                                d = c.scaleYDsMap,
                                u = d[e],
                                h = l.getContextLimit(),
                                f = h[0],
                                g = h[1],
                                m = function(t) {
                                    var n = t.scale;
                                    return n && n.getId() === e
                                },
                                v = c.focusAxesX.find(m),
                                y = c.contextAxesX.find(m),
                                _ = v || y,
                                x = _ && _.scale;
                            if (x) {
                                for (var k in u || (u = d[e] = {}), (i = u[t]) || (i = u[t] = {}), i.limit = n, u)
                                    if (u.hasOwnProperty(k)) {
                                        var S = u[k],
                                            w = (0, p["default"])([a, r].concat(S.limit));
                                        a = w[0], r = w[1]
                                    }
                                if (v) {
                                    var E = l.getFocusLimit();
                                    o = E[0], s = E[1], +o === f && (0, b["default"])(a) && (o = Math.min(o, a)), +s === g && (0, b["default"])(r) && (s = Math.max(s, r)), x.setDomain([o, s])
                                } else o = (0, b["default"])(a) ? Math.min(f, a) : f, s = (0, b["default"])(r) ? Math.max(g, r) : g, x.setDomain([o, s]);
                                l.config.focusPanels.forEach(function(e, t) {
                                    var n = "canvas_" + t,
                                        i = l.getChildren(n),
                                        a = i && i[0],
                                        r = l.config.canvasAxisMap[n],
                                        o = r && r.x;
                                    o && a && (a.asyncDraw(), o.forEach(function(e) {
                                        l.getChildren(e).forEach(function(e) {
                                            e.getScale() === x && (e.placeAxis(), e.asyncDraw())
                                        })
                                    }))
                                })
                            }
                        }, n.setFocusLimit = function(e) {
                            void 0 === e && (e = []);
                            var t = this.config,
                                n = this.domainValidator(e, this.getContextLimit(), t.focusLimit),
                                i = t.focusAxesX[0],
                                a = this.getFromEnv("focusBins")[0],
                                r = this.getFromEnv("focusScalesX")[0],
                                o = this.getFocusLimit();
                            t.focusLimit = n, a.setBinDomain(n);
                            var s = a.getRangeThreshold();
                            r.setRangeThreshold(s), this.fireEvent("focusLimitChanged"), (0, d["default"])(n, o) || i.filterInfo && i.filterInfo.query && (i.filterInfo.query._updateArgs(+n[0] - 2 * +s[2], +n[1] + 2 * +s[2]), i.filterInfo.table._flushResult(), this.updateVerticalAxesWidth())
                        }, n.updateVerticalAxesWidth = function() {
                            var e, t = this,
                                n = t.config.canvasAxisMap,
                                i = Object.keys(n),
                                a = {
                                    left: 0,
                                    right: 0
                                };
                            i.forEach(function(i) {
                                n[i].y.forEach(function(n) {
                                    t.getChildren(n).forEach(function(t) {
                                        "number" == typeof(e = t.getDimension()).left ? a.left = Math.max(a.left, e.left) : a.right = Math.max(a.right, e.right)
                                    })
                                })
                            }), i.forEach(function(e) {
                                n[e].y.forEach(function(e) {
                                    t.getChildren(e).forEach(function(e) {
                                        e.updateMaxLabelSpace(a[e.getAlignment()])
                                    })
                                })
                            })
                        }, n.getFocusLimit = function() {
                            var e = this.config.focusLimit;
                            return e && e.slice()
                        }, n.setContextLimit = function(e) {
                            void 0 === e && (e = []);
                            var t = this.getFromEnv("contextBins");
                            this.config.contextLimit = e.slice(), t[0].setBinDomain(e), this.getFromEnv("contextScalesX")[0].setRangeThreshold(t[0].getRangeThreshold())
                        }, n.getContextLimit = function() {
                            return this.config.contextLimit.slice()
                        }, t
                    }(S["default"]);
                t["default"] = ge
            },
            703: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e) {
                    return null !== e && "object" == typeof e && !Array.isArray(e)
                }
            },
            704: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = "implicit",
                    a = function() {
                        function e() {
                            this.unknown = i, this.domain = [], this.ordinalRange = [], this.map = new Map
                        }
                        var t = e.prototype;
                        return t.setDomain = function(e) {
                            var t, n, i;
                            for (void 0 === e && (e = []), this.domain = [], this.map.clear(), t = 0; t < e.length; ++t) i = (n = e[t]).toString(), this.map.has(n) || this.map.set(i, this.domain.push(n));
                            return this
                        }, t.getDomain = function() {
                            return this.domain.slice()
                        }, t.setRange = function(e) {
                            return this.ordinalRange = e.slice(), this
                        }, t.getRange = function() {
                            return this.ordinalRange.slice()
                        }, t.setUnknown = function(e) {
                            return this.unknown = e, this
                        }, t.getUnknown = function() {
                            return this.unknown
                        }, t.copy = function() {
                            return (new e).setDomain(this.getDomain()).setRange(this.getRange()).setUnknown(this.geUnknownn())
                        }, t.getRangeValue = function(e) {
                            var t = this.map,
                                n = e.toString(),
                                a = this.getRange(),
                                r = t.get(n);
                            if (!r) {
                                if (this.getUnknown() !== i) return this.getUnknown();
                                r = this.domain.push(e), t.set(n, r)
                            }
                            return a[(r - 1) % a.length]
                        }, t.getType = function() {
                            return "ordinal"
                        }, e
                    }();
                t["default"] = a
            },
            705: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e) {
                    return "" !== e && "number" == typeof + e && !isNaN(+e) && e !== Infinity && e !== -Infinity
                }
            },
            706: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(412));
                t["default"] = function(e) {
                    return (0, a["default"])(e) && e.length
                }
            },
            707: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(708));
                t["default"] = function(e) {
                    return (0, a["default"])(e) && e.length
                }
            },
            708: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e) {
                    return "string" == typeof e
                }
            },
            709: function(e, t, n) {
                "use strict";
                var i = n(174),
                    a = n(178);
                t.__esModule = !0, t["default"] = void 0;
                var r = a(n(710)),
                    o = n(366),
                    s = n(374),
                    l = i(n(711)),
                    c = i(n(416)),
                    d = i(n(419)),
                    u = i(n(714)),
                    h = i(n(718)),
                    f = i(n(703)),
                    p = i(n(719)),
                    g = i(n(342)),
                    m = i(n(723)),
                    v = i(n(724)),
                    y = i(n(725)),
                    b = {
                        time: p["default"],
                        utctime: m["default"],
                        scaletime: u["default"],
                        scaleutctime: h["default"],
                        numeric: d["default"],
                        log: l["default"]
                    };
                t["default"] = function(e) {
                    var t = e.config,
                        n = t.focusAxesX,
                        i = n[0].binning,
                        a = t.contextAxesX || [],
                        l = t.dataTable,
                        d = l.getData(),
                        u = d.schema,
                        h = d.data,
                        p = e.getFromEnv("UTC"),
                        m = [0, .8 * e.getFromEnv("chartWidth") / n.length],
                        _ = function(e) {
                            var n = e.typeArg,
                                a = e.plot,
                                c = e.maxbinArg,
                                d = n || "time",
                                f = e.minbinArg,
                                g = c,
                                _ = "time" === d && p ? new r["default"]((0, v["default"])(s.utcYear, s.utcMonth, s.utcWeek, s.utcDay, s.utcHour, s.utcMinute, s.utcSecond, s.utcMillisecond, i)) : new r["default"]((0, v["default"])(o.timeYear, o.timeMonth, o.timeWeek, o.timeDay, o.timeHour, o.timeMinute, o.timeSecond, o.timeMillisecond, i)),
                                x = new(("time" === d && p ? b["scaleutc" + d] : b["scale" + d]) || b.time);
                            return _.setScale(x), (g = g ? g.ms ? {
                                unit: g,
                                multiplier: 1
                            } : g.unit ? {
                                unit: g.unit,
                                multiplier: +g.multiplier || 1
                            } : void 0 : void 0) && _.setBinMax(g), (f = f ? f.ms ? {
                                unit: f,
                                multiplier: 1
                            } : f.unit ? {
                                unit: f.unit,
                                multiplier: +f.multiplier || 1
                            } : void 0 : void 0) && _.setBinMin(f) || _.setBinMin((0, y["default"])(u[l.indexOf(a[0].value)].format, l.indexOf(a[0].value), h, _.getStandardBins(), _.intervalIndexMap)), _.setBinRange(m), _.setRangeThreshold(t.pixelMultiplier * r.DEFAULT_THRESHOLD_PIXELS), _
                        },
                        x = function(e) {
                            var t, n, i, a, r = [],
                                o = [],
                                s = e.length;
                            for (t = 0; t < s; t++) r[t] = (n = e[t], i = void 0, a = void 0, i = n.typeArg, n.plot, new(("time" === (a = i || "time") && p ? b["utc" + a] : b[a]) || b.time)), o[t] = _(e[t]), r[t].setThresholdIntervals(o[t].getStandardBins()), r[t].setBinMin(o[t].getBinMin()), r[t].setRangeThreshold(o[t].getRangeThreshold());
                            return {
                                scales: r,
                                bins: o
                            }
                        },
                        k = function(e) {
                            var t = e.value;
                            return [l.min(t), l.max(t)]
                        },
                        S = x(a),
                        w = x(n),
                        E = function(e) {
                            var t, n, i = e.plot.map(k),
                                a = (0, c["default"])((t = []).concat.apply(t, i), Number),
                                r = e.plot[0].value,
                                o = e.format || u.find(function(e) {
                                    return e.name === r
                                }).format,
                                s = g["default"].parser(o),
                                l = (0, f["default"])(e.initialinterval) ? e.initialinterval : {},
                                d = function(e, t) {
                                    var n = s.parse(e);
                                    return null === n ? t : n < t ? +n : t
                                },
                                h = function(e, t) {
                                    var n = s.parse(e);
                                    return null === n ? t : n > t ? +n : t
                                };
                            return a[0] = d(e.min, a[0]), a[1] = h(e.max, a[1]), (n = a.slice())[0] = h(l.from, n[0]), n[1] = d(l.to, n[1]), {
                                focus: n = (0, c["default"])(n),
                                context: a
                            }
                        }(a[0]),
                        C = E.focus,
                        j = E.context;
                    e.addToEnv("contextScalesX", S.scales), e.addToEnv("focusScalesX", w.scales), e.addToEnv("contextBins", S.bins), e.addToEnv("focusBins", w.bins), e.setContextLimit(j), e.setFocusLimit(C)
                }
            },
            710: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.DEFAULT_THRESHOLD_PIXELS = t._calculateIndexOfIntervals = t["default"] = void 0;
                var i = 4,
                    a = function(e) {
                        return new Date(e)
                    },
                    r = function(e, t) {
                        for (var n = 0, i = e.length - 1, a = i, r = Math.floor((i + n) / 2), o = t instanceof Array ? t[2] : t.unit.ms * t.multiplier; n < i;) {
                            if (o < e[r][2]) a = i = r - 1;
                            else {
                                if (!(o > e[r][2])) {
                                    a = r;
                                    break
                                }
                                n = r + 1
                            }
                            r = Math.floor((i + n) / 2)
                        }
                        return t instanceof Array ? e[a] : e[a][2] === o ? e[a] : [e[a - 1][0], t.multiplier, o]
                    },
                    o = function(e) {
                        var t, n = {};
                        for (t = e.length - 1; t >= 0; t--) n[e[t][0].name()] = t;
                        return n
                    };
                t._calculateIndexOfIntervals = o, t.DEFAULT_THRESHOLD_PIXELS = i;
                var s = function() {
                    function e(e) {
                        this.setStandardBins(e), this.binRange = [0, 1], this.binDomain = [0, 1], this.thresholdPixels = i, this.intervalIndexMap = o(this.getStandardBins())
                    }
                    var t = e.prototype;
                    return t.setStandardBins = function(e) {
                        this.standardBins = e
                    }, t.getStandardBins = function() {
                        return this.standardBins
                    }, t.setScale = function(e) {
                        this.scale = e
                    }, t.getScale = function() {
                        return this.scale
                    }, t._computeRangeThreshold = function(e) {
                        var t, n, i, a = this.getBinRange(),
                            r = a[0],
                            o = a[1],
                            s = (t = e, n = 1, i = Math.abs(r - o), Math.min(Math.max(t, n), i)),
                            l = +this.getScale().getDomainValue(0),
                            c = +this.getScale().getDomainValue(s),
                            d = Math.abs(c - l),
                            u = this.getBinMin(),
                            h = this.getBinMax(),
                            f = this.standardBins.findIndex(function(e) {
                                return e[2] >= d
                            }),
                            p = -1 === f ? this.standardBins.length - 1 : f;
                        this.standardBins[p][2] < u[2] ? this._threshold = u : h && this.standardBins[p][2] > h[2] && h[2] >= u[2] ? this._threshold = h : this._threshold = this.standardBins[p]
                    }, t.setBinRange = function(e) {
                        return this.binRange = e.slice(), this.getScale().setRange(this.binRange), this.getScale().setDomain(this.binDomain), this._computeRangeThreshold(this.thresholdPixels), this
                    }, t.getBinRange = function() {
                        return this.binRange
                    }, t.setBinDomain = function(e) {
                        return this.binDomain = e.slice(), this.getScale().setRange(this.binRange), this.getScale().setDomain(this.binDomain), this._computeRangeThreshold(this.thresholdPixels), this
                    }, t.getBinDomain = function() {
                        return this.binDomain.slice().map(a)
                    }, t.setBinMin = function(e) {
                        var t = r(this.standardBins, e);
                        return this.minBin = t, this
                    }, t.getBinMin = function() {
                        return this.minBin
                    }, t.setBinMax = function(e) {
                        var t = r(this.standardBins, e);
                        this.maxBin = t
                    }, t.getBinMax = function() {
                        return this.maxBin
                    }, t.setRangeThreshold = function(e) {
                        return void 0 === e && (e = i), e !== this.thresholdPixels && this._computeRangeThreshold(this.thresholdPixels = e), this
                    }, t.getRangeThreshold = function() {
                        return this._threshold
                    }, e
                }();
                t["default"] = s
            },
            711: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = i(n(712)),
                    o = i(n(437)),
                    s = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        return (0, a["default"])(t, e), t.prototype.ticks = function(e) {
                            var t, n, i, a, r, s, l, c, d, u, h, f = this.getDomain(),
                                p = f[0],
                                g = f[1],
                                m = 0,
                                v = [],
                                y = [],
                                b = 0,
                                _ = this.base,
                                x = _ > 1 ? -1 : 1,
                                k = Math.log(_) / Math.log(10) % 1 ? 4 : 8;
                            if (p <= 0 || g <= 0) return v;
                            if (p > g) {
                                var S = this.getDomain();
                                g = S[0], p = S[1], m = 1
                            }
                            for (_ > 1 ? (a = t = Math.ceil(Math.log(g) / Math.log(_)), i = n = Math.floor(Math.log(p) / Math.log(_))) : _ > 0 && _ < 1 && (t = Math.floor(Math.log(g) / Math.log(_)), a = n = Math.ceil(Math.log(p) / Math.log(_)), i = t), s = n, l = i; l <= a; ++l) {
                                if (r = this.pows(s), void 0 !== h)
                                    for (_ > 1 ? t = Math.ceil(Math.log(r) / Math.log(_)) : _ > 0 && _ < 1 && (t = Math.floor(Math.log(r) / Math.log(_))), d = (Math.pow(_, t) - Math.pow(_, t + x)) / (k + 1), c = 1; c <= k; ++c) u = Math.pow(_, t + x) + d * c, v.push(u), y.push("minor"), (p > u || g < u) && ++b;
                                v.push(r), y.push("major"), (p > r || g < r) && ++b, h = r, _ > 1 ? s++ : s--
                            }
                            return this._tickType = y, v.length - b <= 2 && (v = (0, o["default"])(p, g, e), this._tickType = void 0), this.majorTicks = m ? v.reverse() : v
                        }, t
                    }(r["default"]);
                t["default"] = s
            },
            714: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(420),
                    o = n(366),
                    s = i(n(715)),
                    l = n(716),
                    c = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this, o.timeYear, o.timeMonth, o.timeWeek, o.timeDay, o.timeHour, o.timeMinute, o.timeSecond, o.timeMillisecond) || this).formatters = {
                                millisecond: t._localeConverter.formatter(".%L"),
                                second: t._localeConverter.formatter(":%S"),
                                minute: t._localeConverter.formatter("%I:%M"),
                                hour: t._localeConverter.formatter("%I %p"),
                                day: t._localeConverter.formatter("%a %d"),
                                week: t._localeConverter.formatter("%b %d"),
                                month: t._localeConverter.formatter("%B"),
                                year: t._localeConverter.formatter("%Y")
                            }, t.setDomain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.tickFormat = function(e) {
                            var t = this;
                            return e ? function(n) {
                                return t._localeConverter.formatter(e).format(n)
                            } : function(e) {
                                return (0, l.tickFormat)(t.timeIntervals, t.formatters, e)
                            }
                        }, n.copy = function() {
                            return (0, r.copyScale)(this, new t)
                        }, t
                    }(s["default"]);
                t["default"] = c
            },
            715: function(e, t, n) {
                "use strict";
                var i = n(178),
                    a = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var r = a(n(194)),
                    o = i(n(420)),
                    s = a(n(422)),
                    l = i(n(716)),
                    c = a(n(356)),
                    d = n(342),
                    u = 1e3,
                    h = 60 * u,
                    f = 60 * h,
                    p = 24 * f,
                    g = 7 * p,
                    m = 30 * p,
                    v = 365 * p,
                    y = function(e) {
                        return new Date(e)
                    },
                    b = function(e) {
                        return e instanceof Date ? +e : +new Date(+e)
                    },
                    _ = function(e) {
                        function t(t, n, i, a, r, l, y, b) {
                            var _;
                            return (_ = e.call(this, o.deInterpolateLinear, s["default"]) || this).timeIntervals = {
                                year: t,
                                month: n,
                                week: i,
                                day: a,
                                hour: r,
                                minute: l,
                                second: y,
                                millisecond: b
                            }, _.tickIntervals = [
                                [_.timeIntervals.second, 1, u],
                                [_.timeIntervals.second, 5, 5 * u],
                                [_.timeIntervals.second, 15, 15 * u],
                                [_.timeIntervals.second, 30, 30 * u],
                                [_.timeIntervals.minute, 1, h],
                                [_.timeIntervals.minute, 5, 5 * h],
                                [_.timeIntervals.minute, 15, 15 * h],
                                [_.timeIntervals.minute, 30, 30 * h],
                                [_.timeIntervals.hour, 1, f],
                                [_.timeIntervals.hour, 3, 3 * f],
                                [_.timeIntervals.hour, 6, 6 * f],
                                [_.timeIntervals.hour, 12, 12 * f],
                                [_.timeIntervals.day, 1, p],
                                [_.timeIntervals.day, 2, 2 * p],
                                [_.timeIntervals.week, 1, g],
                                [_.timeIntervals.month, 1, m],
                                [_.timeIntervals.month, 3, 3 * m],
                                [_.timeIntervals.year, 1, v]
                            ], _.locale = c["default"], _._localeConverter = new d.TimeConverter(c["default"]), _
                        }(0, r["default"])(t, e);
                        var n = t.prototype;
                        return n.setDomain = function(t) {
                            return e.prototype.setDomain.call(this, t.map(b))
                        }, n.getDomain = function() {
                            return e.prototype.getDomain.call(this).map(y)
                        }, n.ticks = function(t, n) {
                            var i = e.prototype.getDomain.call(this);
                            return (0, l["default"])(i[0], i[i.length - 1], t, n, this.tickIntervals, this.timeIntervals)
                        }, n.nice = function(t, n) {
                            var i = e.prototype.getDomain.call(this),
                                a = (0, l.tickInterval)(i[0], i[i.length - 1], t, n, this.tickIntervals, this.timeIntervals);
                            return a ? e.prototype.setDomain.call(this, function(e, t) {
                                var n, i = e.slice(),
                                    a = 0,
                                    r = i.length - 1,
                                    o = i[a],
                                    s = i[r];
                                return s < o && (n = a, a = r, r = n, n = o, o = s, s = n), i[a] = t.floor(o), i[r] = t.ceil(s), i
                            }(i, a)) : this
                        }, n.getDomainValue = function(t) {
                            return new Date(e.prototype.getDomainValue.call(this, t))
                        }, n.setLocale = function(e) {
                            return void 0 === e && (e = c["default"]), this.locale = e, this._localeConverter = new d.TimeConverter(this.locale), this
                        }, n.copy = function() {
                            var e = this.timeIntervals,
                                n = e.year,
                                i = e.month,
                                a = e.week,
                                r = e.day,
                                s = e.hour,
                                l = e.minute,
                                c = e.second,
                                d = e.millisecond;
                            return (0, o.copyScale)(this, new t(n, i, a, r, s, l, c, d))
                        }, t
                    }(o["default"]);
                t["default"] = _
            },
            716: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = t.tickFormat = t.tickInterval = void 0;
                var a = i(n(717)),
                    r = n(438),
                    o = function(e, t, n, i, o, s) {
                        void 0 === n && (n = 10);
                        var l, c, d = n,
                            u = i;
                        return "number" == typeof d && (l = Math.abs(t - e) / d, (c = (0, a["default"])(function(e) {
                            return e[2]
                        }).right(o, l)) === o.length ? (u = (0, r.tickStep)(e / 31536e6, t / 31536e6, d), d = s.year) : c ? (u = (c = o[l / o[c - 1][2] < o[c][2] / l ? c - 1 : c])[1], d = c[0]) : (u = Math.max((0, r.tickStep)(e, t, d), 1), d = s.millisecond)), null == u ? d : d.every(u)
                    };
                t.tickFormat = function(e, t, n) {
                    return (e.second.floor(n) < n ? t.millisecond : e.minute.floor(n) < n ? t.second : e.hour.floor(n) < n ? t.minute : e.day.floor(n) < n ? t.hour : e.month.floor(n) < n ? e.week.floor(n) < n ? t.day : t.week : e.year.floor(n) < n ? t.month : t.year).format(n)
                }, t.tickInterval = o;
                var s = function(e, t, n, i, a, r) {
                    var s, l, c = e,
                        d = t,
                        u = d < c;
                    return u && (s = c, c = d, d = s), l = (l = o(c, d, n, i, a, r)) ? l.range(c, d + 1) : [], u ? l.reverse() : l
                };
                t["default"] = s
            },
            717: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = function(e) {
                        return function(t, n) {
                            return i = e(t), a = n, r = NaN, i < a ? r = -1 : i > a ? r = 1 : i >= a && (r = 0), r;
                            var i, a, r
                        }
                    },
                    a = function(e) {
                        var t = e;
                        return 1 === t.length && (t = i(t)), {
                            left: function(e, n, i, a) {
                                void 0 === e && (e = []), void 0 === i && (i = 0), void 0 === a && (a = e.length);
                                for (var r = i, o = a; r < o;) {
                                    var s = Math.abs(Math.floor((r + o) / 2));
                                    t(e[s], n) < 0 ? r = s + 1 : o = s
                                }
                                return r
                            },
                            right: function(e, n, i, a) {
                                void 0 === e && (e = []), void 0 === i && (i = 0), void 0 === a && (a = e.length);
                                for (var r = i, o = a; r < o;) {
                                    var s = Math.abs(Math.floor((r + o) / 2));
                                    t(e[s], n) > 0 ? o = s : r = s + 1
                                }
                                return r
                            }
                        }
                    };
                t["default"] = a
            },
            718: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(374),
                    o = i(n(715)),
                    s = n(420),
                    l = n(716),
                    c = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this, r.utcYear, r.utcMonth, r.utcWeek, r.utcDay, r.utcHour, r.utcMinute, r.utcSecond, r.utcMillisecond) || this).formatters = {
                                millisecond: t._localeConverter.utcFormatter(".%L"),
                                second: t._localeConverter.utcFormatter(":%S"),
                                minute: t._localeConverter.utcFormatter("%I:%M"),
                                hour: t._localeConverter.utcFormatter("%I %p"),
                                day: t._localeConverter.utcFormatter("%a %d"),
                                week: t._localeConverter.utcFormatter("%b %d"),
                                month: t._localeConverter.utcFormatter("%B"),
                                year: t._localeConverter.utcFormatter("%Y")
                            }, t.setDomain([
                                [Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]
                            ]), t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.tickFormat = function(e) {
                            var t = this;
                            return e ? function(n) {
                                return t._localeConverter.utcFormatter(e).format(n)
                            } : function(e) {
                                return (0, l.tickFormat)(t.timeIntervals, t.formatters, e)
                            }
                        }, n.copy = function() {
                            return (0, s.copyScale)(this, new t)
                        }, t
                    }(o["default"]);
                t["default"] = c
            },
            719: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(366),
                    o = i(n(720)),
                    s = n(420),
                    l = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this, r.timeYear, r.timeMonth, r.timeWeek, r.timeDay, r.timeHour, r.timeMinute, r.timeSecond, r.timeMillisecond) || this).setTimeFormat(), t.setDomain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.getType = function() {
                            return ""
                        }, n.setTimeFormat = function(e) {
                            void 0 === e && (e = {});
                            var t = this._localeConverter,
                                n = e,
                                i = n.millisecond,
                                a = n.second,
                                r = n.minute,
                                o = n.hour,
                                s = n.day,
                                l = n.month,
                                c = n.year;
                            this.formatters = {
                                millisecond: {
                                    major: t.formatter(i || "%I:%M:%S.%L %p"),
                                    minor: t.formatter(i || "%L ms"),
                                    context: t.formatter(i || "%b %d, %Y, %I:%M:%S.%L %p")
                                },
                                second: {
                                    major: t.formatter(a || "%I:%M:%S %p"),
                                    minor: t.formatter(a || "%S s"),
                                    context: t.formatter(a || "%b %d, %Y, %I:%M:%S %p")
                                },
                                minute: {
                                    major: t.formatter(r || "%I:%M %p"),
                                    minor: t.formatter(r || "%M m"),
                                    context: t.formatter(r || "%b %d, %Y, %I:%M %p")
                                },
                                hour: {
                                    major: t.formatter(o || "%I %p"),
                                    minor: t.formatter(o || "%I %p"),
                                    context: t.formatter(o || "%b %d, %Y, %I %p")
                                },
                                day: {
                                    major: t.formatter(s || "%b %d"),
                                    minor: t.formatter(s || "%d"),
                                    context: t.formatter(s || "%b %d, %Y")
                                },
                                month: {
                                    major: t.formatter(l || "%b"),
                                    minor: t.formatter(l || "%b"),
                                    context: t.formatter(l || "%b %Y")
                                },
                                year: {
                                    major: t.formatter(c || "%Y"),
                                    minor: t.formatter(c || "%Y"),
                                    context: t.formatter(c || "%Y")
                                }
                            }
                        }, n.tickFormat = function(e) {
                            var t = this;
                            return e ? function(n) {
                                return t._localeConverter.formatter(e).format(n)
                            } : function(e, n, i) {
                                return t._timeFormat[n] ? t._localeConverter.formatter(t._timeFormat[n]).format(e) : t.formatters[n][i].format(e)
                            }
                        }, n.copy = function() {
                            return (0, s.copyScale)(this, new t)
                        }, t
                    }(o["default"]);
                t["default"] = l
            },
            720: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = i(n(715)),
                    o = n(721);
                t.getFloorOfDate = o.getFloorOfDate, t.modifyDate = o.modifyDate;
                var s = i(n(186)),
                    l = n(722),
                    c = i(n(342)),
                    d = "",
                    u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    h = ["day", "month", "year"],
                    f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    p = [{
                        ratio: 4,
                        index: 8
                    }, {
                        ratio: 3,
                        index: 7
                    }, {
                        ratio: 2.5,
                        index: 6
                    }, {
                        ratio: 2,
                        index: 5
                    }, {
                        ratio: 1.5,
                        index: 4
                    }, {
                        ratio: 1,
                        index: 3
                    }, {
                        ratio: .67,
                        index: 2
                    }, {
                        ratio: .33,
                        index: 1
                    }, {
                        ratio: 0,
                        index: 0
                    }],
                    g = function(e) {
                        return null !== e && !isNaN(e)
                    },
                    m = function(e, t, n) {
                        return e["get" + n + t]()
                    },
                    v = function(e) {
                        return (e < 10 ? "0" + e : e) + ""
                    },
                    y = function(e, t) {
                        return u[m(e, "Month", t)] + " " + v(m(e, "Date", t)) + ", " + m(e, "FullYear", t)
                    },
                    b = function(e, t) {
                        return v(m(e, "Hours", t)) + ":" + v(m(e, "Minutes", t)) + ":" + v(m(e, "Seconds", t))
                    },
                    _ = function(e) {
                        function t(t, n, i, a, r, o, s, l) {
                            var c;
                            return (c = e.call(this, t, n, i, a, r, o, s, l) || this)._type = d, c
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.getType = function() {
                            return this._type
                        }, n.showPlotOverTick = function() {
                            var e = this._getRangeThreshold();
                            return ("millisecond" === this.getBinMin()[0].name() || h.indexOf(e[0].name()) > -1) && 1 === e[1]
                        }, n.getBinBounds = function(e, t) {
                            void 0 === t && (t = 0);
                            var n, i, a, r, o, s, l, c = this.getType(),
                                d = this._getRangeThreshold(),
                                u = d[2],
                                h = this.getDomainValue(e),
                                p = (h.getTime() - t) / u,
                                g = m(h, "FullYear", c),
                                v = m(h, "Month", c),
                                y = m(h, "Date", c),
                                b = m(h, "Hours", c);
                            if ("month" === d[0].name()) {
                                for (n = 0; n < 12; n += d[1])
                                    if (v >= n && v < n + d[1]) {
                                        this.showPlotOverTick() && y > 14 && (n += 1);
                                        break
                                    }
                                a = +new Date(h.getFullYear() + 0, n, 1), r = +new Date(h.getFullYear() + 0, n + d[1], 1)
                            } else if ("day" === d[0].name() && this.showPlotOverTick()) {
                                for (n = 0, o = g, l = void 0, i = 1 !== (s = v) || (l = o) % 4 != 0 || l % 100 == 0 && l % 400 != 0 ? f[s] : 29; n <= i; n++)
                                    if (n === y) {
                                        b > 11 && (n += 1);
                                        break
                                    }
                                a = +new Date(h.getFullYear(), v, n), r = +new Date(h.getFullYear(), v, n + 1)
                            } else u <= 1 && -1 === p && (p = 0), a = t + Math.floor(p) * u, r = t + Math.ceil(p) * u;
                            return {
                                startDate: a,
                                endDate: r
                            }
                        }, n.getBinIndex = function(e, t) {
                            var n, i, a, r, o, s, l = this._getRangeThreshold(),
                                c = this.showPlotOverTick(),
                                d = c ? Math.round : Math.floor,
                                u = new Date(t),
                                h = new Date(e),
                                f = l[2];
                            return "year" === l[0].name() ? d(l[0].count(t, e) / l[1]) : "month" === l[0].name() ? (r = m(u, "FullYear", this.getType()), o = m(h, "FullYear", this.getType()), i = m(u, "Month", this.getType()), a = m(h, "Month", this.getType()), n = Math.max(0, o - r - 1), r === o ? s = Math.floor(a / l[1]) - Math.floor(i / l[1]) : (s = 12 * n / l[1], s += 12 / l[1] - Math.floor(i / l[1]), s += Math.floor(a / l[1])), c && h.getDate() > 14 && s++, s) : d((e - t) / f)
                        }, n.getRangeValue = function(t, n) {
                            return void 0 === n ? e.prototype.getRangeValue.call(this, t) : this.showPlotOverTick() ? e.prototype.getRangeValue.call(this, t) : (e.prototype.getRangeValue.call(this, t) + e.prototype.getRangeValue.call(this, n)) / 2
                        }, n.calculateIndexOfIntervals = function() {
                            var e, t, n = this.thresholdIntervals,
                                i = n.length;
                            for (this.intervalIndexMap = e = {}, t = i - 1; t >= 0; t--) e[n[t][0].name()] = t
                        }, n.getNiceMinorTickInterval = function(e, t) {
                            if (0 === e) return -1;
                            var n, i, a, r, o = this.thresholdIntervals,
                                l = this.getDomain(),
                                c = this._getRangeThreshold()[2],
                                d = o[e - 1][0].name(),
                                u = [];
                            for (n = 0, a = o.length; n < a; n++)
                                if (o[n][2] >= c) {
                                    r = n;
                                    break
                                }
                            for (n = e - 1; n >= r && o[n][0].name() === d; n--) o[n][2] % c || u.push(n);
                            return i = Math.min(function(e) {
                                var t, n = p.length,
                                    i = 1 / e;
                                if (i > 4) return Infinity;
                                for (t = 0; t < n; t++)
                                    if (i > p[t].ratio) return p[t].index
                            }((l[1] - l[0]) / t), u.length - 1), (0, s["default"])(u[i], -1)
                        }, n.getNiceMajorTickInterval = function(e, t) {
                            void 0 === t && (t = !1);
                            var n, i = this.thresholdIntervals,
                                a = i.length,
                                r = this._getRangeThreshold()[2];
                            if ("random" === this.getMode()) {
                                if (!t && "day" === i[e][0].name() && (i[e][1] > 1 || i[e][2] > r)) {
                                    for (n = e; n < a; n++)
                                        if ("day" !== i[n][0].name() && r < i[n][2]) return n
                                } else
                                    for (n = e; n < a; n++)
                                        if (i[n][2] > r) return n
                            } else if (1 !== i[e][1] || i[e][2] <= r)
                                for (n = e; n < a; n++)
                                    if (1 === i[n][1] && i[n][2] > r) return n;
                            return e
                        }, n.generateContextTicks = function(e, t) {
                            void 0 === t && (t = !1);
                            var n, i, a, r, s = this.thresholdIntervals,
                                l = this.intervalIndexMap,
                                c = this.getDomain(),
                                d = c[0],
                                u = c[1],
                                f = s[e][0].name(),
                                p = h[h.indexOf(f) + 1],
                                g = s.length,
                                m = l.day,
                                v = -1,
                                y = [];
                            if (t) v = e;
                            else
                                for ("day" === f && (p = "year"), n = Math.max(e, m); n < g; n++)
                                    if (s[n][0].name() === p) {
                                        v = n;
                                        break
                                    } if (v > -1) {
                                if (i = (0, o.getFloorOfDate)(new Date(d), s[v][0].name(), s[v][1], this.getType()), r = function(e, t, n, i, a) {
                                        var r = (0, o.getFloorOfDate)(new Date(e), i[n][0].name(), i[n][1], a),
                                            s = (0, o.getFloorOfDate)(new Date(t), i[n][0].name(), i[n][1], a);
                                        return +r != +s && [r, s]
                                    }(new Date(d), new Date(u), v, s, this.getType())) {
                                    for (r = (a = r[1]) - s[v][2]; r >= +d;) y.push(new Date(r)), r -= s[v][2]; + d != +i && y.push(new Date(i)), y.reverse(), y.push(new Date(a))
                                } else y.push(i);
                                this._timeFormat.context = s[v][0].name()
                            }
                            return y
                        }, n.getMajorIntervalGap = function(e, t) {
                            var n = this.thresholdIntervals;
                            return "month" === n[e][0].name() ? 2592e6 : "year" === n[e][0].name() ? 31536e6 : t[1] - t[0]
                        }, n.ticks = function(e, t) {
                            void 0 === e && (e = {});
                            var n, i, a, r, s, l, c, d, u, h, f, p, m = this.thresholdIntervals,
                                v = this.getDomain(),
                                y = !1,
                                b = [],
                                _ = v[0],
                                x = v[1],
                                k = [],
                                S = [],
                                w = this.getType();
                            if (!g(_) || !g(x)) return this._tickType = [], [];
                            for (this._timeFormat = p = {}, f = x - _ + 1, n = a = m.length - 1; n >= 0; n--)
                                if (Math.floor(f / m[n][2]) > 1) {
                                    for (s = m[r = this.getNiceMajorTickInterval(n, t)][0].name(), _ = (0, o.getFloorOfDate)(new Date(_), s, m[r][1], w), x = (0, o.modifyDate)(new Date(x), s, m[r][1], !1, w), x = (0, o.getFloorOfDate)(new Date(x), s, m[r][1], w), c = m[r][0].range(+_, +x + m[r][2], m[r][1]), p.major = s, i = 0; i < c.length; i++) + c[i] >= +v[0] && +c[i] <= +v[1] && (y = !0);
                                    b = this.generateContextTicks(r, !y) || [];
                                    break
                                }
                            if (!c) return this._tickType = [], k;
                            for (l = "year" === m[r][0].name() && c.length > 10 ? -1 : this.getNiceMinorTickInterval(r, this.getMajorIntervalGap(r, c)), n = 0, a = c.length; n < a - 1; n++)
                                if (k.push(c[n]), S.push("major"), l > -1 && !e.minor)
                                    for (d = m[l][0].range(+c[n], +c[n + 1] + 1, m[l][1]), p.minor = m[l][0].name(), i = 0, u = d.length; i < u; i++) h = +d[i], i === u - 1 && u > 1 && (+c[n + 1] - h) / (h - +d[i - 1]) < .5 || h !== +c[n] && h !== +c[n + 1] && (k.push(d[i]), S.push("minor"));
                            if (k.push(c[a - 1]), S.push("major"), b.length && !e.context)
                                for (n = 0, a = b.length; n < a; n++) k.push(b[n]), S.push("context");
                            return this._tickType = S, k
                        }, n.setDomain = function(t) {
                            var n;
                            return void 0 === t && (t = []), t[0] > t[1] && (n = [t[0], t[1]], t[1] = n[0], t[0] = n[1]), e.prototype.setDomain.call(this, t)
                        }, n.nice = function(t, n) {
                            var i = e.prototype.nice.call(this, t, n);
                            return this._computeRangeThreshold(4), i
                        }, n.getFormattedTime = function(e, t) {
                            void 0 === e && (e = {});
                            var n, i, a, r, o, s, u, h, f, p = this._getRangeThreshold(),
                                g = e.dateRange,
                                v = e.type,
                                _ = p[1],
                                x = this.getType();
                            return "crossline" === v || "tooltip" === v ? (n = p[0].name(), t && t[n] ? (i = a = t[n], s = ("UTC" === x ? c["default"].utcFormatter(i) : c["default"].formatter(i)).format(new Date(g.startDate)), _ > 1 ? s + " - " + ("UTC" === x ? c["default"].utcFormatter(a) : c["default"].formatter(i)).format(new Date(g.endDate)) : s) : (i = a = (0, l.getFilterdTimeFormat)("%b %d, %Y, %I:%M:%S.%L %p", n), "hour" === n && (i = i.replace(/%M/, ""), a = a.replace(/%M/, "")), i = i.replace(/[:|.]*[\s]/g, " "), a = a.replace(/[:|.]*[\s]/g, " "), i.match(/%I/) || (g.endDate -= 1, i = i.replace(/%p/, ""), a = a.replace(/%p/, "")), r = new Date(g.startDate), o = new Date(g.endDate), u = m(r, "Date", x) === m(o, "Date", x), h = m(r, "Month", x) === m(o, "Month", x), f = m(r, "FullYear", x) === m(o, "FullYear", x), _ > 1 ? f && (h ? u ? i.match(/%I/) ? (i = i.replace(/%p/, ""), a = (a = (a = a.replace(/%b/, "")).replace(/%d/, "")).replace(/%Y/, "")) : (i = i.replace(/%b/, "%B"), a = d) : (i = i.replace(/%Y/, "")).match(/%I/) || (a = a.replace(/%b/, ""), i = i.replace(/%b/, "%B")) : 1 !== _ && (i = i.replace(/%Y/, ""))) : i.match(/%I/) || (i = i.replace(/%b/, "%B")), i = i.trim(), a = a.trim(), i = i.replace(/^[,|\s|:]*/, "").replace(/(\W+$)/, "").replace(/([,]+[\s]*[,]+)|([\s]+[,]+)/g, ","), (a = a.replace(/^[,|\s|:]*/, "").replace(/(\W+$)/, "").replace(/([,]+[\s]*[,]+)|([\s]+[,]+)/g, ",")) && 1 !== _ ? ((s = ("UTC" === x ? c["default"].utcFormatter(i) : c["default"].formatter(i)).format(new Date(g.startDate))) + " - " + ("UTC" === x ? c["default"].utcFormatter(a) : c["default"].formatter(a)).format(new Date(g.endDate))).trim() : (s = ("UTC" === x ? c["default"].utcFormatter(i) : c["default"].formatter(i)).format(new Date(g.startDate))).trim())) : "CRS" === v ? ((s = y(g.startDate, x) + (e.showTimeInLabel ? ", " + b(g.startDate, x) : "")) + " - " + (y(g.endDate, x) + (e.showTimeInLabel ? ", " + b(g.endDate, x) : ""))).trim() : void 0
                        }, n.setBinMin = function(e) {
                            return this.minBin = e, this
                        }, n.getBinMin = function() {
                            return this.minBin
                        }, n.setRangeThreshold = function(e) {
                            return this._threshold = e, this
                        }, n._getRangeThreshold = function() {
                            return this._threshold
                        }, n.setMode = function(e) {
                            this.mode = e
                        }, n.getMode = function() {
                            return this.mode
                        }, n.setThresholdIntervals = function(e) {
                            this.thresholdIntervals = e, this.calculateIndexOfIntervals()
                        }, t
                    }(r["default"]);
                t["default"] = _
            },
            721: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.getFloorOfDate = function(e, t, n, y) {
                    void 0 === t && (t = "day");
                    void 0 === n && (n = 1);
                    void 0 === y && (y = "");
                    var b, _ = new Date(e.valueOf()),
                        x = n;
                    switch (t) {
                        case a:
                            b = _[u + y + "Milliseconds"](), x = Math.min(x, f), _[h + y + "Milliseconds"](Math.floor(b / x) * x);
                            break;
                        case r:
                            b = _[u + y + "Seconds"](), x = Math.min(x, p), _[h + y + "Seconds"](Math.floor(b / x) * x, 0);
                            break;
                        case o:
                            b = _[u + y + "Minutes"](), x = Math.min(x, g), _[h + y + "Minutes"](Math.floor(b / x) * x, 0, 0);
                            break;
                        case s:
                            b = _[u + y + "Hours"](), x = Math.min(x, m), _[h + y + "Hours"](Math.floor(b / x) * x, 0, 0, 0);
                            break;
                        case l:
                            b = _[u + y + "Date"](), x = Math.min(x, v + 1), _[h + y + "Date"](Math.max(Math.floor(b / x) * x, 1)), _[h + y + "Hours"](0, 0, 0, 0);
                            break;
                        case c:
                            b = _[u + y + "Month"](), x = Math.min(x, i), _[h + y + "Month"](Math.floor(b / x) * x, 1), _[h + y + "Hours"](0, 0, 0, 0);
                            break;
                        case d:
                            _[h + y + "Month"](0, 1), _[h + y + "Hours"](0, 0, 0, 0)
                    }
                    return _
                }, t.modifyDate = function(e, t, n, i, f) {
                    void 0 === t && (t = "day");
                    void 0 === n && (n = 1);
                    void 0 === i && (i = !1);
                    void 0 === f && (f = "");
                    var p = new Date(e.valueOf());
                    switch (t) {
                        case a:
                            p[h + f + "Milliseconds"](p[u + f + "Milliseconds"]() + n);
                            break;
                        case r:
                            p[h + f + "Seconds"](p[u + f + "Seconds"]() + n), i && p[h + f + "Milliseconds"](0);
                            break;
                        case o:
                            p[h + f + "Minutes"](p[u + f + "Minutes"]() + n), i && p[h + f + "Seconds"](0, 0);
                            break;
                        case s:
                            p[h + f + "Hours"](p[u + f + "Hours"]() + n), i && p[h + f + "Minutes"](0, 0, 0);
                            break;
                        case l:
                            p[h + f + "Date"](p[u + f + "Date"]() + n), i && p[h + f + "Hours"](0, 0, 0, 0);
                            break;
                        case c:
                            p[h + f + "Month"](p[u + f + "Month"]() + n), i && p[h + f + "Date"](0, 0, 0, 0, 0);
                            break;
                        case d:
                            p[h + f + "FullYear"](p[u + f + "FullYear"]() + n), i && p[h + f + "Month"](0, 0, 0, 0, 0, 0)
                    }
                    return p
                }, t.DAYS_IN_YEAR = t.DAYS_IN_MONTH = t.HOURS_IN_DAY = t.MONTHS_IN_YEAR = t.MINUTES_IN_HOUR = t.SECONDS_IN_MINUTE = t.MILLISECONDS_IN_SECOND = void 0;
                var i = 12,
                    a = "millisecond",
                    r = "second",
                    o = "minute",
                    s = "hour",
                    l = "day",
                    c = "month",
                    d = "year",
                    u = "get",
                    h = "set",
                    f = 1e3,
                    p = 60,
                    g = 60,
                    m = 24,
                    v = 30;
                t.DAYS_IN_YEAR = 365, t.DAYS_IN_MONTH = v, t.HOURS_IN_DAY = m, t.MINUTES_IN_HOUR = g, t.SECONDS_IN_MINUTE = p, t.MILLISECONDS_IN_SECOND = f, t.MONTHS_IN_YEAR = i
            },
            722: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t.getMinPlaceHolder = function(e) {
                    void 0 === e && (e = "");
                    var t, n, i, a;
                    for (t = 0; t < u; t++)
                        for (i = d[s[t]], a = i.length, n = 0; n < a; n++)
                            if (e.match(i[n])) return s[t]
                }, t.getPlaceHolderIndex = function(e) {
                    return l[e]
                }, t.getFilterdTimeFormat = function(e, t) {
                    void 0 === e && (e = "");
                    var n, i = c[t],
                        a = e,
                        r = function(e) {
                            a = a.replace(e, "")
                        };
                    for (n = 0; n < i; n++) d[s[n]].forEach(r);
                    return a.replace(/(\W+$)/, "").replace(/^,/, "")
                };
                var a = i(n(344)),
                    r = "%[" + Object.keys(a["default"]).sort(function(e, t) {
                        return "-" === e ? 1 : "-" === t ? -1 : 0
                    }).join("") + "]?",
                    o = function(e) {
                        return new RegExp("" + r + e)
                    },
                    s = ["millisecond", "second", "minute", "hour", "day", "month", "year"],
                    l = {
                        millisecond: 0,
                        second: 1,
                        minute: 2,
                        hour: 3,
                        day: 4,
                        month: 5,
                        year: 6
                    },
                    c = {
                        millisecond: 0,
                        second: 1,
                        minute: 2,
                        hour: 2,
                        day: 4,
                        month: 5,
                        year: 6
                    },
                    d = function(e) {
                        var t = {},
                            n = "";
                        for (n in e) e.hasOwnProperty(n) && (t[n] = e[n].map(o));
                        return t
                    }({
                        millisecond: ["L", "Q"],
                        second: ["S", "s"],
                        minute: ["M"],
                        hour: ["H", "I", "p"],
                        day: ["d", "e", "j", "a", "A"],
                        month: ["b", "B", "m"],
                        year: ["y", "Y"]
                    }),
                    u = s.length
            },
            723: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(374),
                    o = n(420),
                    s = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this, r.utcYear, r.utcMonth, r.utcWeek, r.utcDay, r.utcHour, r.utcMinute, r.utcSecond, r.utcMillisecond) || this).setTimeFormat(), t.setDomain([
                                [Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]
                            ]), t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.getType = function() {
                            return "UTC"
                        }, n.setTimeFormat = function(e) {
                            void 0 === e && (e = {});
                            var t = this._localeConverter,
                                n = e,
                                i = n.millisecond,
                                a = n.second,
                                r = n.minute,
                                o = n.hour,
                                s = n.day,
                                l = n.month,
                                c = n.year;
                            this.formatters = {
                                millisecond: {
                                    major: t.utcFormatter(i || "%I:%M:%S.%L %p"),
                                    minor: t.utcFormatter(i || "%L ms"),
                                    context: t.utcFormatter(i || "%b %d, %Y, %I:%M:%S.%L %p")
                                },
                                second: {
                                    major: t.utcFormatter(a || "%I:%M:%S %p"),
                                    minor: t.utcFormatter(a || "%S s"),
                                    context: t.utcFormatter(a || "%b %d, %Y, %I:%M:%S %p")
                                },
                                minute: {
                                    major: t.utcFormatter(r || "%I:%M %p"),
                                    minor: t.utcFormatter(r || "%M m"),
                                    context: t.utcFormatter(r || "%b %d, %Y, %I:%M %p")
                                },
                                hour: {
                                    major: t.utcFormatter(o || "%I %p"),
                                    minor: t.utcFormatter(o || "%I %p"),
                                    context: t.utcFormatter(o || "%b %d, %Y, %I %p")
                                },
                                day: {
                                    major: t.utcFormatter(s || "%b %d"),
                                    minor: t.utcFormatter(s || "%d"),
                                    context: t.utcFormatter(s || "%b %d, %Y")
                                },
                                month: {
                                    major: t.utcFormatter(l || "%b"),
                                    minor: t.utcFormatter(l || "%b"),
                                    context: t.utcFormatter(l || "%b %Y")
                                },
                                year: {
                                    major: t.utcFormatter(c || "%Y"),
                                    minor: t.utcFormatter(c || "%Y"),
                                    context: t.utcFormatter(c || "%Y")
                                }
                            }
                        }, n.tickFormat = function(e) {
                            var t = this;
                            return e ? function(n) {
                                return t._localeConverter.utcFormatter(e).format(n)
                            } : function(e, n, i) {
                                return t._timeFormat[n] ? t._localeConverter.utcFormatter(t._timeFormat[n]).format(e) : t.formatters[n][i].format(e)
                            }
                        }, n.copy = function() {
                            return (0, o.copyScale)(this, new t)
                        }, t
                    }(i(n(720))["default"]);
                t["default"] = s
            },
            724: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = function(e, t, n, f, p, g, m, v, y) {
                    var b = y,
                        _ = [],
                        x = [{
                            binUnitName: v,
                            duration: a,
                            standardBinVal: [
                                [v, 1, a],
                                [v, 2, 2 * a],
                                [v, 4, 4 * a],
                                [v, 5, 5 * a],
                                [v, 10, 10 * a],
                                [v, 20, 20 * a],
                                [v, 25, 25 * a],
                                [v, 40, 40 * a],
                                [v, 50, 50 * a],
                                [v, 100, 100 * a],
                                [v, 200, 200 * a],
                                [v, 250, 250 * a],
                                [v, 500, 500 * a]
                            ]
                        }, {
                            binUnitName: m,
                            duration: r,
                            standardBinVal: [
                                [m, 1, r, !0],
                                [m, 2, 2 * r],
                                [m, 3, 3 * r],
                                [m, 4, 4 * r],
                                [m, 5, 5 * r],
                                [m, 6, 6 * r],
                                [m, 10, 10 * r],
                                [m, 12, 12 * r],
                                [m, 15, 15 * r],
                                [m, 20, 20 * r],
                                [m, 30, 30 * r]
                            ]
                        }, {
                            binUnitName: g,
                            duration: o,
                            standardBinVal: [
                                [g, 1, o, !0],
                                [g, 2, 2 * o],
                                [g, 3, 3 * o],
                                [g, 4, 4 * o],
                                [g, 5, 5 * o],
                                [g, 6, 6 * o],
                                [g, 10, 10 * o],
                                [g, 12, 12 * o],
                                [g, 15, 15 * o],
                                [g, 20, 20 * o],
                                [g, 30, 30 * o]
                            ]
                        }, {
                            binUnitName: p,
                            duration: s,
                            standardBinVal: [
                                [p, 1, s, !0],
                                [p, 2, 2 * s],
                                [p, 3, 3 * s],
                                [p, 4, 4 * s],
                                [p, 6, 6 * s],
                                [p, 8, 8 * s],
                                [p, 12, 12 * s]
                            ]
                        }, {
                            binUnitName: f,
                            duration: l,
                            standardBinVal: [
                                [f, 1, l, !0],
                                [f, 2, 2 * l],
                                [f, 3, 3 * l],
                                [f, 5, 5 * l],
                                [f, 6, 6 * l],
                                [f, 10, 10 * l],
                                [f, 15, 15 * l]
                            ]
                        }, {
                            binUnitName: t,
                            duration: c,
                            standardBinVal: [
                                [t, 1, c],
                                [t, 2, 2 * c],
                                [t, 3, 3 * c],
                                [t, 4, 4 * c],
                                [t, 6, 6 * c]
                            ]
                        }, {
                            binUnitName: e,
                            duration: d,
                            standardBinVal: [
                                [e, 1, d]
                            ]
                        }];
                    b = function(e) {
                        if (!e) return [];
                        var t = e,
                            n = {
                                millisecond: i.MILLISECONDS_IN_SECOND,
                                second: i.SECONDS_IN_MINUTE,
                                minute: i.MINUTES_IN_HOUR,
                                hour: i.HOURS_IN_DAY,
                                day: i.DAYS_IN_MONTH,
                                month: i.MONTHS_IN_YEAR
                            };
                        for (var a in n) n.hasOwnProperty(a) && (Array.isArray(e[a]) ? t[a] = u(n[a], e[a]) : t[a] = !1);
                        Array.isArray(e.year) ? t.year = function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var i = e[n];
                                i && parseInt(i, 10) == i && i > 0 && t.push(Number(i))
                            }
                            return t.sort(function(e, t) {
                                return e - t
                            })
                        }(e.year) : t.year = !1;
                        return t
                    }(Object.assign({}, y));
                    for (var k = 0; k < x.length; k++) {
                        var S = x[k];
                        b[S.binUnitName.name()] ? b[S.binUnitName.name()].length > 0 && (_ = _.concat(h(S.binUnitName, b[S.binUnitName.name()], S.duration))) : _ = _.concat(S.standardBinVal)
                    }
                    if (0 === _.length)
                        for (var w = 0; w < x.length; w++) _ = _.concat(x[w].standardBinVal);
                    return _
                };
                var i = n(721),
                    a = 1,
                    r = i.MILLISECONDS_IN_SECOND * a,
                    o = r * i.SECONDS_IN_MINUTE,
                    s = o * i.MINUTES_IN_HOUR,
                    l = s * i.HOURS_IN_DAY,
                    c = l * i.DAYS_IN_MONTH,
                    d = l * i.DAYS_IN_YEAR;

                function u(e, t) {
                    for (var n = [], i = 0; i < t.length; i++) {
                        var a = t[i];
                        a && parseInt(a, 10) == a && a > 0 && a <= e / 2 && e % a == 0 && n.push(Number(a))
                    }
                    return n.sort(function(e, t) {
                        return e - t
                    })
                }

                function h(e, t, n) {
                    for (var i = [], a = 0; a < t.length; a++) {
                        var r = t[a];
                        i.push([e, r, r * n])
                    }
                    return i
                }
            },
            725: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = n(379),
                    r = i(n(726));
                t["default"] = function(e, t, n, i, o) {
                    void 0 === n && (n = []);
                    var s, l, c, d, u, h, f = [],
                        p = {
                            count: 0
                        },
                        g = n.length,
                        m = {};
                    if (!e) return null;
                    if (/%[_ -]?[cfLQ]/.test(e) && (f.push(a.DatetimeUnits.Millisecond), m[a.DatetimeUnits.Millisecond.name] = {}), /%[_ -]?[sSX]/.test(e) && (f.push(a.DatetimeUnits.Second), m[a.DatetimeUnits.Second.name] = {}), /%[_ -]?M/.test(e) && (f.push(a.DatetimeUnits.Minute), m[a.DatetimeUnits.Minute.name] = {}), /%[_ -]?[HI]/.test(e) && (f.push(a.DatetimeUnits.Hour), m[a.DatetimeUnits.Hour.name] = {}), /%[_ -]?[dejuwx]/.test(e) && (f.push(a.DatetimeUnits.Day), m[a.DatetimeUnits.Day.name] = {}), /%[_ -]?[bBm]/.test(e) && (f.push(a.DatetimeUnits.Month), m[a.DatetimeUnits.Month.name] = {}), /%[_ -]?[yY]/.test(e) && (f.push(a.DatetimeUnits.Year), m[a.DatetimeUnits.Year.name] = {}), !f.length) return [];
                    if (1 === g || 0 === g) return [f[0].ms, 1, f[0].ms];
                    for (s = 1; s < g; ++s) c = n[s - 1][t], (l = n[s][t] - c) && ((h = m[(d = (0, r["default"])(i, o, f, l)).unit.name])[d.multiplier] || (h[d.multiplier] = 0), u = ++h[d.multiplier], (p.count < u || p.count === u && p.unit.ms * p.multiplier > d.unit.ms * d.multiplier) && (p.count = u, Object.assign(p, d)));
                    return p.count ? [p.unit.ms, p.multiplier, p.multiplier * p.unit.ms] : [f[0].ms, 1, f[0].ms]
                }
            },
            726: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e, t, n, i) {
                    var a, r, o, s, l, c, d = n.length;
                    for (a = 0; a < d; a++)
                        for (r = t[(o = n[a]).name.toLowerCase()]; e[r] && e[r][0].name() === o.name.toLowerCase();) {
                            if (i === (l = e[r])[2]) return {
                                unit: o,
                                multiplier: l[1]
                            };
                            if (i < l[2]) return c && i < Math.round((l[2] + c[2]) / 2) ? {
                                unit: s,
                                multiplier: c[1]
                            } : {
                                unit: o,
                                multiplier: l[1]
                            };
                            c = l, s = o, r++
                        }
                    return {
                        unit: n[a - 1],
                        multiplier: Math.round(i / n[a - 1].ms)
                    }
                }
            },
            727: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(719)),
                    r = i(n(419)),
                    o = i(n(711)),
                    s = {
                        time: a["default"],
                        linear: r["default"],
                        log: o["default"]
                    };
                t["default"] = function(e) {
                    var t = e.config,
                        n = t.focusAxesY,
                        i = t.contextAxesY || [],
                        a = function(e) {
                            var t = e.type,
                                n = e.base,
                                i = s[t] || s.linear;
                            return i === o["default"] && +n > 0 ? (new i).setBase(n) : new i
                        };
                    e.addToEnv("contextScalesY", i.map(a)), e.addToEnv("focusScalesY", n.map(a))
                }
            },
            728: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(729)),
                    r = n(180),
                    o = i(n(732)),
                    s = i(n(733)),
                    l = i(n(785)),
                    c = i(n(425)),
                    d = function(e) {
                        return e.match(/^canvas/)
                    },
                    u = function(e) {
                        return e.remove()
                    },
                    h = function(e) {
                        return e.visible
                    },
                    f = function(e) {
                        return "left" === e.align
                    },
                    p = function(e) {
                        return "right" === e.align
                    },
                    g = function(e) {
                        return "top" === e.align
                    },
                    m = function(e) {
                        return "bottom" === e.align
                    };
                t["default"] = function(e) {
                    var t = [],
                        n = e.getFromEnv("baseTextStyle"),
                        i = e.getFromEnv("dataSource"),
                        v = {
                            orientation: "bottom",
                            align: "bottom",
                            tickpadding: 2,
                            visible: !0,
                            overlap: !1,
                            domainline: !1,
                            outputtimeformat: {},
                            style: {
                                "label-major": Object.assign({
                                    fill: "#818181"
                                }, n),
                                "label-context": Object.assign({
                                    fill: "#818181"
                                }, n)
                            }
                        },
                        y = {
                            tickarguments: [4, "s"],
                            ticksize: 5,
                            tickpadding: 7,
                            visible: !0,
                            overlap: !1,
                            domainline: !1,
                            style: {
                                "label-major": Object.assign({
                                    "font-size": "11px"
                                }, n),
                                "tick-mark-major": Object.assign({
                                    stroke: "#efefef"
                                }, n)
                            }
                        },
                        b = (0, a["default"])(v),
                        _ = (0, a["default"])(y),
                        x = e.config,
                        k = x.focusAxesX,
                        S = x.focusAxesY,
                        w = x.focusPanels.map(function(e) {
                            return (0, a["default"])(e, {
                                x: e.x.map(function(e) {
                                    var t = k[e.index],
                                        n = (0, r.pluck)(k[e.index].format, {});
                                    return t.timeFormatterFn = "function" == typeof n.formatter ? function(e) {
                                        return n.formatter.call(t.scale, e)
                                    } : function(e) {
                                        return t.scale.getFormattedTime && t.scale.getFormattedTime(e, i.tooltip && i.tooltip.outputtimeformat)
                                    }, (0, a["default"])(b(e), (0, l["default"])(k, e.index))
                                }),
                                y: e.y.map(function(e) {
                                    var t = S[e.index],
                                        n = (0, r.pluck)(S[e.index].format, {});
                                    return t.formatLabelPrefix = n.prefix || r.BLANKSTRING, t.formatLabelSuffix = n.suffix || r.BLANKSTRING, t.scale.setLocale((0, r.extend2)((0, r.extend2)({}, c["default"]), {
                                        prefix: t.formatLabelPrefix,
                                        suffix: t.formatLabelSuffix
                                    })), t.formatterFn = "function" == typeof n.formatter ? function(e) {
                                        return n.formatter(e) + ""
                                    } : function(i) {
                                        var a;
                                        return a = "string" == typeof n.formatter ? n.formatter : function(e, t) {
                                            var n = Math.abs(t);
                                            return 0 !== n && n < 1e-4 ? "$e" : n >= 1e-4 && n < 1 || 0 === n ? "$" : e
                                        }(function(e, t) {
                                            switch (e) {
                                                case "axis":
                                                    return "log" === t ? "$~s" : "$s";
                                                case "tooltip":
                                                case "crossline":
                                                    return "$.2s";
                                                case "referenceline":
                                                    return "$.1~s"
                                            }
                                        }(i.type, S[e.index].type), i.value), t.scale.tickFormat(4, a)(i.value)
                                    }, (0, a["default"])(_(e), (0, l["default"])(S, e.index))
                                })
                            })
                        }),
                        E = e.config.canvasAxisMap;
                    w.forEach(function(n, i) {
                        var l = n.x,
                            c = n.y,
                            d = n.plots,
                            u = "canvas_" + i;
                        E[u] || (E[u] = {
                            x: [],
                            y: []
                        }), l.filter(h).forEach(function(t, n) {
                            var a = "axesX_" + i + "_" + n;
                            t.align = t.align.toLowerCase(), ["bottom", "top"].includes(t.align) || (t.align = "bottom"), E[u].x.push(a), (0, r.componentFactory)(e, o["default"], a, 1, [t])
                        });
                        var v, y, b, _, k = {
                            left: 0,
                            right: 0
                        };
                        c.filter(h).forEach(function(t, n) {
                            var a, s = "axesY_" + i + "_" + n;
                            ("left" === (a = t.orientation) || "right" === a) && (t.align = t.orientation), t.orientation = t.align, t.domainline = k[t.align] > 0, k[t.align]++, "log" === t.type && (t.tickarguments = [4, "~s"]), E[u].y.push(s), (0, r.componentFactory)(e, o["default"], s, 1, [t])
                        }), t.push(u), (0, r.componentFactory)(e, s["default"], u, 1, [(v = {
                            plotConfigs: d,
                            dataTable: x.dataTable,
                            tableMap: e.config.focusTableMap,
                            xConfigs: l,
                            yConfigs: c,
                            enableGridLines: !0,
                            enableMouseTracking: 1,
                            enableMarkers: 1,
                            enableInteraction: 1
                        }, y = {
                            leftBorder: !1,
                            rightBorder: !1,
                            topBorder: !1,
                            bottomBorder: !1
                        }, b = v.xConfigs, _ = v.yConfigs, (b.find(f) || _.find(f)) && (y.leftBorder = !0), (b.find(p) || _.find(p)) && (y.rightBorder = !0), (b.find(g) || _.find(g)) && (y.topBorder = !0), (b.find(m) || _.find(m)) && (y.bottomBorder = !0), (0, a["default"])(v, y))])
                    }), Object.keys(e.getChildren()).filter(d).filter(function(e) {
                        return !t.includes(e)
                    }).forEach(function(t) {
                        e.getChildren(t).forEach(u)
                    }), x.focusPanels = w
                }
            },
            732: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(180),
                    o = i(n(418)),
                    s = i(n(419)),
                    l = n(195),
                    c = function(e) {
                        return e
                    },
                    d = function(e) {
                        return null == e
                    },
                    u = "top",
                    h = "left",
                    f = "major",
                    p = Math.max,
                    g = Math.min,
                    m = Math.ceil,
                    v = Math.floor,
                    y = function(e) {
                        return "t" + e + ",0"
                    },
                    b = function(e) {
                        return "t0," + e
                    },
                    _ = function(e, t, n) {
                        if (e && t) return e[t[n]]
                    },
                    x = function(e, t) {
                        void 0 === t && (t = 12);
                        var n = t <= 15 ? 0 : p(0, v(t / 10)),
                            i = "WW";
                        for (n = g(m(e / 2), n); n < e;) i += n % 2 ? "W" : "L", n++;
                        return i
                    },
                    k = function(e, t) {
                        return !(e.x > t.x + t.width || t.x > e.x + e.width) && !(e.y > t.y + t.height || t.y > e.y + e.height)
                    },
                    S = function(e) {
                        e.text = "", e.dim.width = 0, e.dim.height = 0
                    },
                    w = function(e) {
                        var t;
                        switch (e) {
                            case h:
                                t = "end";
                                break;
                            case "right":
                                t = "start";
                                break;
                            default:
                                t = "middle"
                        }
                        return t
                    },
                    E = function(e, t, n, i) {
                        var a;
                        return (a = "start" === t ? n.x : "end" === t ? n.x - e.width : n.x - e.width / 2) >= 0 && a + e.width <= i.width
                    },
                    C = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.getType = function() {
                            return "axis"
                        }, n.getName = function() {
                            return "axis"
                        }, n.__setDefaultConfig = function() {
                            var t;
                            e.prototype.__setDefaultConfig.call(this);
                            var n = this.config;
                            this.setScale(new s["default"]), this.setAlignment(h), this.setTickArguments(), this.setTickValues(), this.setReverse(!1), this.setTickSize(12), this.setTickPadding(1), this.setDomainLine(!0), this.setTicksDraw(!0), this.setLabelOffset(), this.setDayInMajor(!1), this.setStickyContextLabel(!0), n.alignDiff = 0, n.maxLabelSpace = 0, n.defaultStyle = n.style = ((t = {})["tick-mark-minor"] = {
                                stroke: "#d3d3d3",
                                "stroke-width": "1px"
                            }, t["tick-mark-major"] = {
                                stroke: "#AAAAAA",
                                "stroke-width": "1px"
                            }, t["label-major"] = {
                                fill: "#858585",
                                "font-size": "12px",
                                "font-weight": "normal",
                                "font-style": "normal"
                            }, t["label-minor"] = {
                                fill: "#9A9A9A",
                                "font-size": "11px",
                                "font-weight": "normal",
                                "font-style": "normal"
                            }, t["label-context"] = {
                                fill: "#858585",
                                "font-size": "12px",
                                "font-weight": "normal",
                                "font-style": "normal"
                            }, t._ticks = {
                                minor: {
                                    stroke: "#d3d3d3"
                                },
                                major: {
                                    stroke: "#AAAAAA"
                                },
                                context: {}
                            }, t._text = {
                                major: {
                                    fill: "#858585",
                                    "font-size": "12px",
                                    "font-weight": "normal",
                                    "font-style": "normal"
                                },
                                minor: {
                                    fill: "#9A9A9A",
                                    "font-size": "11px",
                                    "font-weight": "normal",
                                    "font-style": "normal"
                                },
                                context: {
                                    fill: "#858585",
                                    "font-size": "12px",
                                    "font-weight": "normal",
                                    "font-style": "normal"
                                }
                            }, t.line = {
                                fill: "#D6D6D6"
                            }, t.title = {
                                // dark text
                                fill: "#ffffff",
                                "font-size": "12px",
                                "font-weight": "normal",
                                "font-style": "normal"
                            }, t), this.config.prevTicks || (this.config.prevTicks = [])
                        }, n.configureAttributes = function(t) {
                            e.prototype.configureAttributes.call(this, t);
                            t.scale && this.setScale(t.scale), t.align && this.setAlignment(t.align, t.overlap), t.reverse && this.setReverse(t.reverse), t.tickarguments && this.setTickArguments.apply(this, t.tickarguments), t.title && this.setAxisName(t.title), t.skipinfo && this.setSkipInfo(t.skipinfo), t.offset && this.setLabelOffset(t.offset), t.dayinmajor && this.setDayInMajor(t.dayinmajor), t.scalemode && this.setScaleMode(t.scalemode), "undefined" != typeof t.stickycontextlabel && this.setStickyContextLabel(t.stickycontextlabel), !d(t.ticksize) && this.setTickSize(t.ticksize), !d(t.tickpadding) && this.setTickPadding(t.tickpadding), this.setDomainLine(t.domainline), this.setTicksDraw(t.drawticks), !d(t.formatterFn) && this.setTickFormat(t), t.outputtimeformat && this.setTimeFormat(t.outputtimeformat), t.style && this.parseStyle(t.style), this.config.validateLabelDimensions = (0, r.pluckNumber)(t.validateLabelDimensions, 0)
                        }, n.parseStyle = function(e) {
                            var t;
                            void 0 === e && (e = {});
                            var n, i, a, r, o, s = this.config,
                                l = s.defaultStyle,
                                c = this.getFromEnv("getStyleDef"),
                                d = this.getFromEnv("baseTextStyle"),
                                u = c(e.label),
                                h = c(e["tick-mark"]);
                            n = Object.assign({}, l["tick-mark-major"], h, c(e["tick-mark-major"])), i = Object.assign({}, l["tick-mark-minor"], h, c(e["tick-mark-minor"])), a = Object.assign({}, l["label-major"], d, u, c(e["label-major"])), r = Object.assign({}, l["label-minor"], d, u, c(e["label-minor"])), o = Object.assign({}, l["label-context"], d, u, c(e["label-context"])), s.style = ((t = {})["tick-mark-major"] = n, t["tick-mark-minor"] = i, t["label-major"] = a, t["label-minor"] = r, t["label-context"] = o, t.title = Object.assign({}, l.title, d, c(e.title)), t.line = Object.assign({}, l.line, c(e.line)), t)
                        }, n.placeAxis = function() {
                            var e, t, n, i, a, s, l, p, g, m, v, y, b, k, S, w, E, C = this.config,
                                j = C.isVertical,
                                D = this.getScale(),
                                M = this.getSkipInfo() || {},
                                T = this.getTickPadding(),
                                I = this.getFromEnv("smartLabel"),
                                L = [],
                                A = 0,
                                F = 0,
                                O = this.getAxisName(),
                                P = [];
                            for ((t = (this.getTickArguments() || []).slice(0)).push(M), t.push(C.dayInMajor), n = d(this.getTickValues()) ? D.ticks ? D.ticks.apply(D, t) : D.getDomain() : this.getTickValues(), i = d(this.getTickFormat()) ? D.tickFormat ? D.tickFormat.apply(D, this.getTickArguments()) : c : this.getTickFormat(), S = C.style["label-context"], I.setStyle(Object.assign({}, S)), w = S["font-size"] || S.fontSize, C.labelHeight = 1.2 * parseFloat(w, 10), O && (I.setStyle(Object.assign({}, C.style.title)), A += (C.axisNameDim = I.getOriSize(O, !1)).height), y = D._tickType || [], a = 0, s = n.length; a < s; a++) {
                                var N;
                                g = n[a], p = _(D._timeFormat, y, a), I.setStyle(Object.assign({}, C.style["label-" + (y[a] || f)])), m = C.isVertical ? i.formatFn({
                                    value: g,
                                    prefix: i.prefix,
                                    suffix: i.suffix,
                                    type: "axis"
                                }, p) : i(g, p, y[a]), F = Math.max(m.length, F), b = I.getOriSize(m, !1), j && (b.width = C.vLabelWidth), l = this.getTickSize(y[a]), L.push(((N = {
                                    text: m,
                                    value: g,
                                    dim: b,
                                    tickLen: l
                                })[C.x] = T + l, N)), "context" !== y[a] && P.push((j ? b.width : b.height) + l)
                            }
                            if (j && d(C.vLabelWidth))
                                for (C.vLabelWidth = 0, P = [], a = 0, s = n.length; a < s; a++) I.setStyle(Object.assign({}, C.style["label-" + (y[a] || f)])), v = +(v = C.style["label-" + (y[a] || f)]["font-size"]).toString().split("px")[0], b = I.getOriSize(x(F, v), !1), L[a].dim = b, C.vLabelWidth = Math.max(b.width, C.vLabelWidth), "context" !== y[a] && P.push((j ? b.width : b.height) + l);
                            for (C.values = L, E = this.getLabelOverlapBuffer(), A += C.prevMaxLen = (0, r.pluckNumber)((0, o["default"])(P), C.prevMaxLen, 0), k = j ? 0 : C.labelHeight, C.maxLabelSpace = A + T + E + k, a = 0, s = n.length; a < s; a++) g = L[a], C.orientation === u || C.orientation === h ? g[C.x] = C.maxLabelSpace - T - E - g.tickLen : g[C.x] = T + g.tickLen;
                            return C.axisDimension = ((e = {})[C.align] = C.maxLabelSpace, e), C.axisDimension
                        }, n.getLabelOverlapBuffer = function() {
                            var e, t, n, i, a, r = this.config,
                                o = r.values,
                                s = this.getScale()._tickType || [],
                                l = 0;
                            for (n = 0, i = o.length; n < i && (s[n] !== f && s[n] ? "minor" === s[n] && (t = o[n]) : e = o[n], !e || !t); n++);
                            if (t) switch (a = {
                                x: t.dim.width,
                                y: t.dim.height
                            }, r.k) {
                                case 1:
                                    l = Math.max(t[r.x] + a[r.x] - e[r.x], 0);
                                    break;
                                case -1:
                                    l = Math.max(e[r.x] - (t[r.x] + a[r.x]), 0)
                            }
                            return r.overlapBuffer = r.k * l / 3
                        }, n.makeBBox = function(e, t) {
                            var n;
                            void 0 === t && (t = 5);
                            var i = this.config,
                                a = this.getScale(),
                                r = {
                                    x: e.dim.width,
                                    y: e.dim.height
                                };
                            return (n = {})[i.x] = e[i.x] - t - r[i.x] / 2, n[i.xInverse] = a.getRangeValue(e.value) - t - r[i.xInverse] / 2, n.width = e.dim.width + t, n.height = e.dim.height + t, n
                        }, n.setMinorSkipIndex = function() {
                            var e, t, n, i, a, o, s, l, c, d, u = this.config,
                                h = this.getScale(),
                                p = u.values,
                                g = h._tickType || [],
                                m = [],
                                y = p.length,
                                b = 1,
                                _ = 1,
                                x = !1,
                                S = !1;
                            for (e = 0; e < y; e++) {
                                if (g[e] === f || typeof g[e] === r.UNDEF)
                                    for (t = e + 1; t < y; t++)
                                        if (g[t] === f || typeof g[t] === r.UNDEF) {
                                            i = p[e], a = p[t], m = p.slice(e + 1, t), x = !0;
                                            break
                                        }
                                if (x) break
                            }
                            if (m.length)
                                if (y = m.length, d = e, n = v(y / 2), o = this.makeBBox(i), s = this.makeBBox(a), c = this.makeBBox(m[n]), k(c, o) || k(c, s)) u.minorSkip = y;
                                else {
                                    for (e = n - 1; e >= 0; e--)
                                        if (l = this.makeBBox(m[e]), !k(l, c)) {
                                            b = n - e;
                                            break
                                        }
                                    for (e = n + 1; e < y + d; e++)
                                        if (l = this.makeBBox(m[e]), !k(l, c)) {
                                            _ = e - n;
                                            break
                                        }
                                    for (y = m.length; !S;) {
                                        for (S = !0, e = n + _; e < y; e += _)
                                            if (k(this.makeBBox(m[e]), this.makeBBox(m[e - _]))) {
                                                _++, S = !1;
                                                break
                                            }
                                        for (e = n - b; e >= 0; e -= b)
                                            if (k(this.makeBBox(m[e]), this.makeBBox(m[e + b]))) {
                                                b++, S = !1;
                                                break
                                            }
                                    }
                                    u.minorSkip = Math.max(b, _)
                                }
                        }, n.cleanseMinorTicks = function() {
                            var e, t, n, i, a, r, o, s, l, c, d, u = this.config,
                                h = this.getScale()._tickType || [],
                                p = [],
                                g = [],
                                m = u.values,
                                y = -1,
                                b = u.isVertical ? ((e = {})[u.xInverse] = "height", e[u.x] = "width", e) : ((t = {})[u.xInverse] = "width", t[u.x] = "height", t);
                            for (n = 0, a = m.length; n < a; n++) h[n] !== f && h[n] || p.push(n);
                            for (n = 0, a = p.length; n < a - 1; n++)
                                if (r = m.slice(p[n] + 1, p[n + 1]), g.push(r), d = r.length, y = -1, r.length) {
                                    for (o = v(r.length / 2), s = this.makeBBox(m[p[n]], 0), l = this.makeBBox(m[p[n + 1]], 0), i = o; i >= 0; i -= 1)
                                        if (c = this.makeBBox(r[i], 1), u.isVertical) {
                                            if (s[u.xInverse] <= c[u.xInverse] + c[b[u.xInverse]]) {
                                                y = Math.max(y, i);
                                                break
                                            }
                                        } else if (c[u.xInverse] <= s[u.xInverse] + s[b[u.xInverse]]) {
                                        y = Math.max(y, i);
                                        break
                                    }
                                    for (i = o; i < r.length; i += 1)
                                        if (c = this.makeBBox(r[i], 1), u.isVertical) {
                                            if (l[u.xInverse] + l[b[u.xInverse]] >= c[u.xInverse]) {
                                                d = Math.min(d, i);
                                                break
                                            }
                                        } else if (c[u.xInverse] + c[b[u.xInverse]] >= l[u.xInverse]) {
                                        d = Math.min(d, i);
                                        break
                                    }
                                    for (i = 0; i < r.length; i++)(i <= y || i >= d || Math.abs(o - i) % u.minorSkip) && S(r[i])
                                }
                        }, n.cleanseMajorTicks = function() {
                            var e, t, n, i, a = this.config,
                                r = this.getScale(),
                                o = a.values,
                                s = [],
                                l = [],
                                c = [],
                                d = [],
                                u = r._tickType || [],
                                h = 0,
                                p = 1,
                                g = 1,
                                m = !1;
                            if (i = o.length) {
                                for (n = 0; n < i; n++) u[n] !== f && u[n] ? "context" === u[n] && (c.push(o[n]), d.push(n)) : (s.push(o[n]), l.push(n));
                                if (d.length)
                                    for (n = 0, i = s.length; n < i; n++) + c[0].value == +s[n].value && (h = n);
                                else h = 0;
                                for (e = this.makeBBox(s[0]), n = h + 1, i = s.length; n < i; n++)
                                    if (!k(this.makeBBox(s[n]), e)) {
                                        g = n - h;
                                        break
                                    }
                                for (n = h - 1; n >= 0; n--)
                                    if (!k(this.makeBBox(s[n]), e)) {
                                        p = h - n;
                                        break
                                    }
                                for (; !m;) {
                                    for (m = !0, n = h + g; n < i; n += g)
                                        if (k(this.makeBBox(s[n]), this.makeBBox(s[n - g]))) {
                                            g++, m = !1;
                                            break
                                        }
                                    for (n = h - p; n >= 0; n -= g)
                                        if (k(this.makeBBox(s[n]), this.makeBBox(s[n + p]))) {
                                            p++, m = !1;
                                            break
                                        }
                                }
                                for (a.majorSkip = t = Math.max(p, g), n = 0, i = s.length; n < i; n++) Math.abs(n - h) % t && S(s[n])
                            }
                        }, n.draw = function() {
                            var e = this.config,
                                t = this.getFromEnv("chart").config,
                                n = this.getScale(),
                                i = this.getLinkedParent(),
                                a = n._tickType || [],
                                o = (n.getBandwidth ? function(e) {
                                    return function(t) {
                                        return +e.getRangeValue(t) + e.getBandwidth() / 2
                                    }
                                } : function(e) {
                                    return function(t) {
                                        return +e.getRangeValue(t)
                                    }
                                })(n.copy()),
                                s = n.getRange(),
                                l = n.getDomain(),
                                c = Number(s[0]),
                                d = Number(s[s.length - 1]),
                                p = this.getOrientation(),
                                g = this.getFromEnv("smartLabel"),
                                m = p === h || p === u ? e.maxLabelSpace + 2 : 0,
                                v = e.isVertical,
                                y = e.orientation,
                                b = e.xInverse,
                                _ = e.x,
                                x = e.k,
                                k = e.style;
                            this.addGraphicalElement({
                                el: "group",
                                attr: {
                                    name: "strato-axis",
                                    transform: e.groupTranslation
                                },
                                container: {
                                    id: "strato",
                                    label: "group",
                                    isParent: !0
                                },
                                id: "strato-axis",
                                component: this,
                                label: "group"
                            }), this.addGraphicalElement({
                                el: "group",
                                attr: {
                                    name: "axis-" + y
                                },
                                container: {
                                    id: "strato-axis",
                                    label: "group"
                                },
                                id: "axisGroup",
                                component: this,
                                label: "group"
                            });
                            var S, C, j, D, M, T, I, L, A, F, O, P, N, B, R, H = 0;
                            if (this.setMinorSkipIndex(), this.cleanseMinorTicks(), this.cleanseMajorTicks(), (N = this.getDomainLine()) && this.addGraphicalElement({
                                    el: "path",
                                    attr: {
                                        path: N,
                                        stroke: "#d6d6d6",
                                        fill: "none",
                                        "stroke-width": 2
                                    },
                                    container: {
                                        id: "axisGroup",
                                        label: "group",
                                        isParent: !1
                                    },
                                    css: k.line,
                                    component: this,
                                    label: "path"
                                }), (j = this.getAxisName()) && (P = parseFloat(e.style.title["font-size"] || e.style.title.fontSize, 10), g.setStyle(Object.assign({}, e.style.title)), D = g.getSmartText(j, Math.abs(c - d), 1.2 * P), v ? (M = p === h ? 0 + D.height / 2 : e.maxLabelSpace - D.height / 2, T = (c - d) / 2) : (M = (d - c) / 2, T = p === u ? 0 + D.height / 2 : e.maxLabelSpace - D.height / 2), this.addGraphicalElement({
                                    el: "text",
                                    attr: {
                                        text: D.text,
                                        x: M,
                                        y: T,
                                        opacity: k.title.opacity,
                                        "text-anchor": "middle",
                                        transform: v ? (0, r.getSuggestiveRotation)(90 * x, M, T) : "t0,0"
                                    },
                                    container: {
                                        id: "axisGroup",
                                        label: "group",
                                        isParent: !1
                                    },
                                    tooltext: t.showTooltip ? D.tooltext : r.UNDEF,
                                    css: k.title,
                                    component: this,
                                    id: "axis-name",
                                    label: "name"
                                })), this.getTicksDraw())
                                for (H = a.length - a.indexOf("context"), F = e.values.find(function(e, t) {
                                        return e.value >= l[0] && e.value <= l[1] && a[t] === f
                                    }), I = 0, L = e.values.length; I < L; I++) {
                                    var G, U;
                                    if (A = e.values[I], "context" === (C = a[I] || f) || !(A.value < l[0] || A.value > l[1]))
                                        if (!("context" === C && H > 1 && (A.value < l[0] || A.value > l[1])))
                                            if (A[b] = "context" === C && 1 === H ? this.getStickyContextLabel() || void 0 === F ? Math.max(o(A.value), A.dim.width / 2) : o(F.value) : o(A.value), A[_] += e.alignDiff, S = A.value, this.addGraphicalElement({
                                                    container: {
                                                        id: "axisGroup",
                                                        label: "group",
                                                        isParent: !1
                                                    },
                                                    attr: {
                                                        name: "tick",
                                                        transform: e.translate(A[b])
                                                    },
                                                    data: {
                                                        value: S
                                                    },
                                                    el: "group",
                                                    id: "tick-group-" + I,
                                                    component: this,
                                                    label: "group"
                                                }), "context" !== C && (B = v ? "M " + m + " 0 H " + (m + x * this.getTickSize(a[I])) : "M 0 " + m + " V " + (m + x * this.getTickSize(a[I])), this.addGraphicalElement({
                                                    el: "path",
                                                    attr: {
                                                        path: B
                                                    },
                                                    container: {
                                                        id: "tick-group-" + I,
                                                        label: "group",
                                                        isParent: !1
                                                    },
                                                    id: "tick-" + I,
                                                    css: k["tick-mark-" + (C || f)],
                                                    component: this,
                                                    label: "path"
                                                })), O = k["label-" + (C || f)]["text-anchor"] || w(p), (G = {})[b] = A[b] + e[b + "Offset"], G[_] = A[_] + e[_ + "Offset"] + ("minor" !== C ? e.overlapBuffer : 0), R = G, !e.validateLabelDimensions || E(A.dim, O, R, i.getDimension())) this.addGraphicalElement({
                                                el: "text",
                                                attr: (U = {
                                                    text: A.text + ""
                                                }, U[b] = 0 + e[b + "Offset"], U[_] = A[_] + e[_ + "Offset"] + ("minor" !== C ? e.overlapBuffer : 0), U["text-anchor"] = O, U["vertical-align"] = y === u ? "bottom" : "bottom" === y ? "top" : "middle", U.opacity = k["label-" + (C || f)].opacity, U),
                                                container: {
                                                    id: "tick-group-" + I,
                                                    label: "group",
                                                    isParent: !1
                                                },
                                                component: this,
                                                id: "tick-label-" + I,
                                                css: k["label-" + (C || f)],
                                                label: "text"
                                            })
                                }
                        }, n.updateMaxLabelSpace = function(e) {
                            var t = this.config,
                                n = this.getAlignment();
                            return t.alignDiff = e - t.maxLabelSpace, t.maxLabelSpace = t.axisDimension[n] = e, t.axisDimension
                        }, n.setDayInMajor = function(e) {
                            this.config.dayInMajor = e
                        }, n.setSkipInfo = function(e) {
                            void 0 === e && (e = {}), this.config.tickInfo = e
                        }, n.getSkipInfo = function() {
                            return this.config.tickInfo
                        }, n.setStickyContextLabel = function(e) {
                            void 0 === e && (e = !0), this.config.stickyContextLabel = e
                        }, n.getStickyContextLabel = function() {
                            return this.config.stickyContextLabel
                        }, n.setLabelOffset = function(e) {
                            void 0 === e && (e = {});
                            var t = this.config;
                            t.xOffset = (0, r.pluckNumber)(e.x, 0), t.yOffset = (0, r.pluckNumber)(e.y, 0)
                        }, n.getLabelOffset = function() {
                            return {
                                x: this.config.xOffset,
                                y: this.config.yOffset
                            }
                        }, n.getAxisName = function() {
                            return this.config.axisName
                        }, n.setAxisName = function(e) {
                            void 0 === e && (e = ""), this.config.axisName = e
                        }, n.getAlignment = function() {
                            return this.config.align
                        }, n.setAlignment = function(e, t) {
                            void 0 === t && (t = !1);
                            var n, i, a = this.config;
                            switch (e) {
                                case h:
                                    n = t ? "right" : h;
                                    break;
                                case "right":
                                    n = t ? h : "right";
                                    break;
                                case u:
                                    n = t ? "bottom" : u;
                                    break;
                                case "bottom":
                                    n = t ? u : "bottom"
                            }
                            a.align = e, a.orientation = n, a.isVertical = i = e === h || "right" === e, a.k = n === h || n === u ? -1 : 1, a.x = i ? "x" : "y", a.xInverse = i ? "y" : "x", a.translate = i ? b : y, a.translateInverse = i ? y : b
                        }, n.getOrientation = function() {
                            return this.config.orientation
                        }, n.setTranslation = function(e, t) {
                            void 0 === e && (e = 0), void 0 === t && (t = 0), this.config._translatedX = e, this.config._translatedY = t, this.config.groupTranslation = "t" + e + ", " + t
                        }, n.getTranslation = function() {
                            return {
                                x: this.config._translatedX,
                                y: this.config._translatedY
                            }
                        }, n.setDomainLine = function(e) {
                            return void 0 === e && (e = !0), this.config.drawDomainLine = e, this
                        }, n.getDomainLine = function() {
                            var e, t, n = this.config,
                                i = this.getScale().getRange(),
                                a = n.isVertical,
                                r = n.orientation,
                                o = n.maxLabelSpace,
                                s = +i[0],
                                l = +i[1];
                            return n.drawDomainLine && (e = r === h || r === u ? o + 2 : 0, t = a ? "M " + e + " " + s + " V " + l : "M " + s + " " + e + " H " + l), t
                        }, n.setTicksDraw = function(e) {
                            return void 0 === e && (e = !0), this.config.drawTicks = e, this
                        }, n.getTicksDraw = function() {
                            return this.config.drawTicks
                        }, n.setScale = function(e) {
                            this.config.scale = e
                        }, n.getScale = function() {
                            return this.config.scale
                        }, n.setReverse = function(e) {
                            this.config.isReverse = e
                        }, n.getReverse = function() {
                            return this.config.isReverse
                        }, n.setTickArguments = function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.config.tickArguments = t, this
                        }, n.getTickArguments = function() {
                            return this.config.tickArguments.slice()
                        }, n.setTickSize = function(e) {
                            return this.config.tickSizeOuter = Number(e), this.config.tickSizeInner = this.config.tickSizeOuter * (2 / 3), this
                        }, n.getTickSize = function(e) {
                            void 0 === e && (e = f);
                            var t = this.config;
                            switch (e) {
                                case "context":
                                    return t.tickSizeOuter + t.labelHeight;
                                case "minor":
                                    return t.tickSizeInner;
                                case f:
                                    return t.tickSizeOuter
                            }
                        }, n.setTickPadding = function(e) {
                            return this.config.tickPadding = Number(e), this
                        }, n.getTickPadding = function() {
                            return this.config.tickPadding
                        }, n.setTickValues = function(e) {
                            return this.config.tickValues = d(e) ? null : e.slice(), this
                        }, n.getTickValues = function() {
                            return this.config.tickValues && this.config.tickValues.slice()
                        }, n.setTickFormat = function(e) {
                            return this.config.tickFormat = {
                                formatFn: e.formatterFn,
                                prefix: e.formatLabelPrefix,
                                suffix: e.formatLabelSuffix
                            }, this
                        }, n.getTickFormat = function() {
                            return this.config.tickFormat
                        }, n.getAxisEndLabelDisplaySpace = function() {
                            var e, t, n, i, a = +this.getFromEnv("chartWidth"),
                                r = +this.getFromEnv("chartHeight"),
                                o = this.config.values,
                                s = this.getReverse(),
                                l = {};
                            return this.config.isVertical ? (n = s ? o[o.length - 1] : o[0], i = s ? o[0] : o[o.length - 1], l.top = 0 - Math.min(0, n.y - n.dim.height), l.bottom = Math.max(i.y + i.dim.height, r) - r) : (e = s ? o[o.length - 1] : o[0], t = s ? o[0] : o[o.length - 1], l.left = 0 - Math.min(0, e.x - e.dim.width), l.right = Math.max(t.x + t.dim.width, a) - a), l
                        }, n.getDimension = function() {
                            return this.config.axisDimension
                        }, n.setDimension = function(e) {
                            return this.placeAxis(e)
                        }, n.setScaleMode = function(e) {
                            this.config.scale.setMode(e)
                        }, n.getScaleMode = function() {
                            return this.config.scale.getMode()
                        }, n.setTimeFormat = function(e) {
                            var t = this.config,
                                n = t.scale;
                            t.timeFormat = e, n.setTimeFormat && n.setTimeFormat(e)
                        }, n.getTimeFormat = function() {
                            return this.config.timeFormat
                        }, t
                    }(l.SmartRenderer);
                t["default"] = C
            },
            733: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = i(n(199)),
                    o = n(184),
                    s = n(180),
                    l = i(n(734)),
                    c = i(n(738)),
                    d = i(n(740)),
                    u = i(n(742)),
                    h = i(n(744)),
                    f = i(n(746)),
                    p = i(n(748)),
                    g = i(n(749)),
                    m = i(n(750)),
                    v = i(n(751)),
                    y = i(n(752)),
                    b = i(n(782)),
                    _ = i(n(784)),
                    x = "M",
                    k = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this) || this).registerFactory("dataset", y["default"]), t.registerFactory("gridLine", u["default"]), t.registerFactory("timeMarker", l["default"]), t.registerFactory("referenceLine", c["default"]), t.registerFactory("referenceZone", d["default"]), t.registerFactory("mouseTracker", h["default"]), t.registerFactory("tooltip", f["default"], ["mouseTracker"]), t.registerFactory("wheel", p["default"]), t.registerFactory("dbTap", g["default"]), t.registerFactory("swipe", m["default"]), t.registerFactory("pinchZoom", v["default"]), t.registerFactory("verticalCrossline", b["default"], ["dataset"]), t.registerFactory("horizontalCrossline", _["default"], ["dataset"]), t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this), this.config.padding = {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, this.config.multiSeriesDatasetMap = {}
                        }, n.getName = function() {
                            return "canvas"
                        }, n.highlightDataPoints = function(e, t, n) {
                            var i, a = this.getChildren("dataset"),
                                r = this.getChildren("mouseTracker")[0];
                            a.filter(function(e) {
                                return e.config.yAxisAlign === t
                            }).forEach(function(t) {
                                (i = t.getHighlightedIndices(n)).length && (e ? (r.deactivate(), t.setHoverInEffect(i)) : (r.activate(), t.setHoverOutEffect(i)))
                            })
                        }, n.getType = function() {
                            return "canvas"
                        }, n.configureAttributes = function(e) {
                            var t, n = this.config,
                                i = this.getFromEnv("dataSource"),
                                a = i.chart && i.chart.style || {},
                                r = this.getFromEnv("getStyleDef"),
                                l = n.borderConfig || (n.borderConfig = {});
                            e.xConfigs && (this.config.xConfigs = e.xConfigs), e.yConfigs && (this.config.yConfigs = e.yConfigs), e.plotConfigs && (this.config.plotConfigs = e.plotConfigs), e.tableMap && (this.config.tableMap = e.tableMap), e.enableGridLines && (this.config.enableGridLines = e.enableGridLines), e.isContext && (this.config.isContext = e.isContext), e.dataTable && (this.config.dataTable = e.dataTable), t = r(a.canvas), ["leftBorder", "topBorder", "rightBorder", "bottomBorder"].forEach(function(n) {
                                l[n] = e[n] ? (0, s.pluckNumber)(t["stroke-width"], 2) : l[n] || 0
                            }), n.canvasBorderColor = (0, o.convertColor)((0, s.pluck)(t.stroke, "D6D6D6"), (0, s.pluckNumber)(100 * t["stroke-opacity"], 100)), n.canvasBGColor = (0, o.convertColor)((0, s.pluck)(t.fill, "ffffff"), (0, s.pluckNumber)(100 * t["fill-opacity"], 0)), n.opacity = t.opacity, n.enableMouseTracking = (0, s.pluckNumber)(e.enableMouseTracking, 1), n.enableMarkers = (0, s.pluckNumber)(e.enableMarkers, 1), n.enableTimeMarkers = (0, s.pluckNumber)(e.enableTimeMarkers, 1), n.enableReferenceLine = (0, s.pluckNumber)(e.enableReferenceLine, 1), n.enableReferenceZone = (0, s.pluckNumber)(e.enableReferenceZone, 1), n.enableInteraction = (0, s.pluckNumber)(e.enableInteraction, 0), n.includeLegend = (0, s.pluckNumber)(e.includeLegend, 1), n.gridLineDirection = (0, s.pluck)(e.gridLineDirection, "horizontal"), n.styleGridLines = (0, s.pluckNumber)(e.styleGridLines, 1), n.gridLineStyle = (0, s.pluck)(e.gridLineStyle)
                        }, n.setDimension = function(e) {
                            void 0 === e && (e = {});
                            var t = this.config,
                                n = t.borderConfig,
                                i = this.getFromEnv("chartConfig");
                            t.canvasTop = e.top || 0, t.canvasLeft = e.left || 0, t.canvasWidth = e.width || i.origRenderWidth, t.canvasHeight = e.height || i.origRenderHeight, t.canvasBGTop = t.canvasTop + n.topBorder, t.canvasBGLeft = t.canvasLeft + n.leftBorder, t.canvasBGWidth = Math.max(0, t.canvasWidth - n.rightBorder - n.leftBorder), t.canvasBGHeight = Math.max(0, t.canvasHeight - n.bottomBorder)
                        }, n.isWithinCanvas = function(e, t) {
                            var n = e,
                                i = t,
                                a = this.config,
                                r = a.canvasBGLeft,
                                o = Math.floor(r + a.canvasBGWidth),
                                s = a.canvasBGTop,
                                l = a.padding,
                                c = Math.floor(s + a.canvasBGHeight),
                                d = this.getTranslation();
                            return n = n - (d.x || 0) + (l.left || 0), i = i - (d.y || 0) + (l.top || 0), n > r && n < o && i > s && i < c
                        }, n.draw = function() {
                            this._createGroup(), this._drawCanvas(), !this.config.isContext && this._setTooltipBounding()
                        }, n._setTooltipBounding = function() {
                            var e = this.config,
                                t = this.getTranslation(),
                                n = this.getFromEnv("toolTipController"),
                                i = e.canvasLeft + (t.x || 0),
                                a = e.canvasTop + (t.y || 0);
                            n._setRelativePosition({
                                left: i,
                                right: i + e.canvasWidth,
                                top: a,
                                bottom: a + e.canvasHeight,
                                canvas: this
                            })
                        }, n._drawCanvas = function() {
                            var e, t = this.config,
                                n = t.borderConfig,
                                i = t.canvasTop + n.topBorder / 2,
                                a = t.canvasLeft + n.leftBorder / 2,
                                r = t.canvasWidth - (n.rightBorder / 2 + n.leftBorder / 2),
                                o = t.canvasHeight - (n.bottomBorder / 2 + n.topBorder / 2),
                                s = {
                                    leftBorder: [x, a, i, "V", i + o],
                                    rightBorder: [x, a + r, i, "V", i + o],
                                    topBorder: [x, a, i, "H", a + r],
                                    bottomBorder: [x, a, i + o, "H", a + r]
                                };
                            for (e in this.addGraphicalElement({
                                    el: "rect",
                                    component: this,
                                    label: "canvas",
                                    container: {
                                        id: "tropo",
                                        label: "group",
                                        isParent: !1
                                    },
                                    attr: {
                                        y: t.canvasBGTop,
                                        x: t.canvasBGLeft,
                                        width: t.canvasBGWidth,
                                        height: t.canvasBGHeight,
                                        fill: t.canvasBGColor,
                                        "stroke-width": 0,
                                        stroke: "none",
                                        opacity: t.opacity
                                    },
                                    id: "background"
                                }, !0), n) this.addGraphicalElement({
                                el: "path",
                                component: this,
                                label: "canvas",
                                container: {
                                    id: "tropo",
                                    label: "group",
                                    isParent: !1
                                },
                                attr: {
                                    path: s[e],
                                    stroke: t.canvasBorderColor,
                                    "stroke-width": n[e],
                                    opacity: t.opacity
                                },
                                id: "border"
                            }, !0)
                        }, n._createGroup = function() {
                            var e = this.config,
                                t = e.padding,
                                n = e.canvasBGLeft - t.left,
                                i = e.canvasBGTop - t.top,
                                a = e.canvasBGWidth,
                                r = e.canvasBGHeight,
                                o = ["M" + n + "," + i, "L" + (n + a) + "," + i, "L" + (n + a) + "," + (i + r), "L" + n + "," + (i + r) + "Z"];
                            this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "tropo",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "group",
                                attr: {
                                    name: "canvas-tropo",
                                    transform: e.canvasTranslation
                                },
                                id: "tropo"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "strato",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "strato",
                                attr: {
                                    name: "canvas-strato",
                                    transform: e.translate
                                },
                                id: "strato"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "meso",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "meso",
                                attr: {
                                    name: "canvas-meso",
                                    transform: e.translate,
                                    "clip-path": o
                                },
                                id: "meso"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "thermo",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "thermo",
                                attr: {
                                    name: "canvas-thermo",
                                    transform: e.translate
                                },
                                id: "thermo"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "exo",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "exo",
                                attr: {
                                    name: "canvas-exo",
                                    transform: e.translate
                                },
                                id: "exo"
                            }), this.addToEnv("dsGroupclipPath", o)
                        }, n.setTranslation = function(e, t) {
                            var n = this.config,
                                i = n.borderConfig,
                                a = n.padding;
                            n._translateX = e + i.leftBorder, n._translateY = t + i.topBorder, n.canvasTranslation = "t" + n._translateX + "," + n._translateY, n._translateX += a.left, n._translateY += a.top, n.translate = "t" + n._translateX + "," + n._translateY
                        }, n.getCanvasBorder = function() {
                            return this.config.borderConfig
                        }, n.setPadding = function(e) {
                            void 0 === e && (e = {}), Object.assign(this.config.padding, e)
                        }, t
                    }(r["default"]);
                t["default"] = k
            },
            734: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(735)),
                    r = i(n(736)),
                    o = i(n(737));
                t["default"] = function(e) {
                    var t = e.config.xConfigs;
                    e.config.enableTimeMarkers && t.forEach(function(t) {
                        var n, i, s, l = t.timemarker || [],
                            c = t.plot[0].value,
                            d = e.getFromEnv("chartConfig").dataTable.getSchema().find(function(e) {
                                return e.name === c
                            }).format,
                            u = [],
                            h = [],
                            f = [],
                            p = e.getFromEnv("chart"),
                            g = e.config.xConfigs[0].scale;
                        l.forEach(function(e) {
                            e.end ? "full" === e.type ? h.push(e) : u.push(e) : f.push(e)
                        }), n = e.attachChild(a["default"], "timeSpanMinMarker"), i = e.attachChild(r["default"], "timeSpanFullMarker"), n.configure({
                            timeMarker: u,
                            defaultFormat: d,
                            xScale: g
                        }), n.addExtEventListener("timeSpanMinMarkerHovered", function(e) {
                            e.data.senderTimeMarker !== n && n.setData({
                                hoveredIndex: e.data.hoveredIndex,
                                hoveredFromOutside: !0
                            }, !0)
                        }, p), i.configure({
                            timeMarker: h,
                            defaultFormat: d,
                            xScale: g
                        }), i.addExtEventListener("timeSpanFullMarkerHovered", function(e) {
                            e.data.senderTimeMarker !== i && i.setData({
                                hoveredIndex: e.data.hoveredIndex,
                                hoveredFromOutside: !0
                            }, !0)
                        }, p), (s = e.attachChild(o["default"], "timeInstanceMarker")).configure({
                            timeMarker: f,
                            defaultFormat: d,
                            xScale: g
                        }), s.addExtEventListener("timeInstanceMarkerHovered", function(e) {
                            e.data.senderTimeMarker !== s && s.setData({
                                hoveredMarkerIndex: e.data.hoveredMarkerIndex,
                                hoveredDomainIndex: e.data.hoveredDomainIndex,
                                hoveredFromOutside: !0
                            }, !0)
                        }, p)
                    })
                }
            },
            735: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(374),
                    s = n(366),
                    l = n(180),
                    c = i(n(342));

                function d(e) {
                    switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                        case "millisecond":
                            return !0;
                        default:
                            return !1
                    }
                }

                function u(e, t) {
                    switch (e) {
                        case "year":
                            return t ? o.utcYear : s.timeYear;
                        case "quarter":
                        case "month":
                            return t ? o.utcMonth : s.timeMonth;
                        case "week":
                            return t ? o.utcWeek : s.timeWeek;
                        case "day":
                            return t ? o.utcDay : s.timeDay;
                        case "hour":
                            return t ? o.utcHour : s.timeHour;
                        case "minute":
                            return t ? o.utcMinute : s.timeMinute;
                        case "second":
                            return t ? o.utcSecond : s.timeSecond;
                        case "millisecond":
                            return t ? o.utcMillisecond : s.timeMillisecond
                    }
                }

                function h(e, t, n, i) {
                    var a, r, o, s = !1,
                        l = i.markerDim;
                    for (r = 0, o = l.length; r < o; r++)
                        if (t >= l[r].x && t <= l[r].x + l[r].width && n >= l[r].y && n <= l[r].y + l[r].height) {
                            s = !0, e.config.previouslyHoveredIndex = i.index, a = l[r];
                            break
                        }
                    return {
                        pointIndex: i.index,
                        hovered: s,
                        pointObj: {
                            hoveredMarkerDim: a,
                            index: s && r,
                            type: i.type
                        },
                        previouslyHoveredIndex: e.config.previouslyHoveredIndex,
                        component: e
                    }
                }

                function f(e, t, n, i) {
                    return e >= n && e <= i || t <= i && t >= n || n >= e && i <= t
                }
                var p = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, a["default"])(t, e);
                    var n = t.prototype;
                    return n.__setDefaultConfig = function() {
                        e.prototype.__setDefaultConfig.call(this);
                        var t = this.config;
                        t.defaultStyle = {
                            text: {
                                fill: "#808080",
                                opacity: 1,
                                "font-size": "10px",
                                "font-weight": "normal",
                                "font-style": "normal",
                                "text-anchor": "middle",
                                "fill-opacity": 1,
                                "stroke-opacity": 1
                            },
                            marker: {
                                fill: "#62b58f",
                                opacity: .2,
                                "fill-opacity": 1,
                                "stroke-opacity": 1,
                                "border-thickness": 0,
                                "border-padding": 1,
                                "border-radius": 0,
                                "border-dash": "none",
                                "stroke-width": 1,
                                "stroke-dasharray": "none",
                                stroke: "none"
                            }
                        }, t.hoveredIndex = void 0, t.previouslyHoveredIndex = void 0, t.hoveredOpacity = .5, t.valueArr = [], t.textArr = [], t.styleArr = [], t.domainArr = [], t.markerDetails = [], t.type = "minimal"
                    }, n.getHoveredMarker = function(e, t) {
                        var n, i, a = e,
                            r = t,
                            o = this.config,
                            s = this.getLinkedParent().getTranslation(),
                            l = o.markerDetails;
                        for (a -= s.x, r -= s.y, i = l.length - 1; i >= 0 && !(n = h(this, a, r, l[i])).hovered; i--);
                        return n
                    }, n.setHoverInEffect = function(e) {
                        var t = this.getFromEnv("chart");
                        this.setData({
                            hoveredIndex: e
                        }, !0), t.fireEvent("timeSpanMinMarkerHovered", {
                            senderTimeMarker: this,
                            hoveredIndex: e,
                            hoveredFromOutside: !0
                        })
                    }, n.setHoverOutEffect = function() {
                        var e = this.getFromEnv("chart");
                        this.setData({
                            hoveredIndex: void 0
                        }, !0), e.fireEvent("timeSpanMinMarkerHovered", {
                            senderTimeMarker: this,
                            hoveredIndex: void 0,
                            hoveredFromOutside: !0
                        })
                    }, n.getToolTextConfiguration = function(e, t) {
                        var n, i = this.getFromEnv("tooltipStyle"),
                            a = i.header,
                            r = i.body,
                            o = 40,
                            s = 26,
                            l = this.getFromEnv("smartLabel");
                        return l.setStyle({
                            "font-size": a["font-size"],
                            "font-family": a["font-family"],
                            "font-weight": a["font-weight"]
                        }), o += (n = l.getOriSize(e[0])).width, s += n.height, e[1] ? (l.setStyle({
                            "font-size": r["font-size"],
                            "font-family": r["font-family"],
                            "font-weight": r["font-weight"]
                        }), s += (n = l.getOriSize(e[1])).height, o = Math.max(o, n.width), {
                            header: "<div style='margin: 5px;'>" + e[0] + "</div>",
                            body: "<div style='margin: 5px;'>" + e[1] + "</div>",
                            dimensions: {
                                width: o,
                                height: "full" !== t ? s : 0
                            }
                        }) : {
                            header: "<div style='padding: 5px;'>" + e[0] + "</div>",
                            body: "",
                            dimensions: {
                                width: o,
                                height: "full" !== t ? s : 0
                            }
                        }
                    }, n.getMarkerAndLabelConfiguration = function(e, t) {
                        var n, i, a, r, o, s, l, c, d, u, h = this.config,
                            p = this.getLinkedParent().config,
                            g = p.padding,
                            m = g.left,
                            v = g.right,
                            y = g.top,
                            b = g.bottom,
                            _ = this.config.xScale,
                            x = _.getDomain(),
                            k = h.valueArr[e],
                            S = k.repeat;
                        return n = _.getRangeValue(k.start), u = _.getRangeValue(k.end), a = "full" === (r = k.type) ? p.canvasTop + 2 + y : p.canvasTop + p.canvasHeight - 2 - y + b, o = "full" === r ? p.canvasTop - p.padding.top : p.canvasTop + p.canvasHeight - (t + 4) - y + b, s = "full" === r ? p.canvasHeight : t + 4, h.markerDetails[e].markerDim = [], h.domainArr[e] = [], h.markerDetails[e].index = e, !S && f(+k.start, +k.end, +x[0], +x[1]) ? (h.domainArr[e].push({
                            start: k.start,
                            end: k.end
                        }), h.markerDetails[e].markerDim.push({
                            x: n - m + v,
                            y: o,
                            width: u - n,
                            height: s
                        }), i = n - m + v, c = k.start, d = k.end) : S && (h.domainArr[e] = l = this.getAllValidDomains(k.start, k.end, k.repeat), l.length && (i = _.getRangeValue(l[0].start) - m + v, c = l[0].start, d = l[0].end, l.forEach(function(t) {
                            n = _.getRangeValue(t.start), u = _.getRangeValue(t.end), h.markerDetails[e].markerDim.push({
                                x: n - m + v,
                                y: o,
                                width: u - n,
                                height: s
                            }), S.multiplier < 0 && (i = n - m + v, c = t.start, d = t.end)
                        }))), h.markerDetails[e].type = r, {
                            labelConfiguration: {
                                x: i,
                                y: a,
                                width: u - n - 4,
                                startDomain: c,
                                endDomain: d
                            }
                        }
                    }, n.getAllValidDomains = function(e, t, n) {
                        var i = this.config.xScale.getDomain(),
                            a = e,
                            r = t,
                            o = [];
                        if (+a < +i[0] && n.multiplier > 0)
                            for (; !f(+a, +r, +i[0], +i[1]) && +a <= +i[1];) a = n.interval.offset(a, n.multiplier), r = n.interval.offset(r, n.multiplier);
                        for (; f(+a, +r, +i[0], +i[1]);) o.push({
                            start: a,
                            end: r
                        }), a = n.interval.offset(a, n.multiplier), r = n.interval.offset(r, n.multiplier);
                        return o
                    }, n.configureAttributes = function(t) {
                        void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                        var n, i, a, r, o, s, h, f, p, g, m, v, y = this.config,
                            b = [],
                            _ = [],
                            x = this.getFromEnv("isUTC"),
                            k = [],
                            S = this.getFromEnv("getStyleDef"),
                            w = this.getFromEnv("textStyle"),
                            E = this.getFromEnv("baseTextStyle"),
                            C = t.timeMarker || [],
                            j = Object.assign({}, w, y.defaultStyle.text, E);
                        for (C.sort(function(e, t) {
                                return +new Date(e.start) - +new Date(t.start)
                            }), h = 0, f = C.length; h < f; h++)
                            if ((p = C[h]).start && p.start !== l.BLANKSTRING && (r = (0, l.pluck)(p.timeformat, t.defaultFormat), a = (i = x ? c["default"].utcParser(r) : c["default"].parser(r)).parse(p.start), o = i.parse(p.end), a && o)) {
                                if (+a > +o) {
                                    var D = [o, a];
                                    a = D[0], o = D[1]
                                }
                                n = {
                                    start: a,
                                    end: o,
                                    startString: p.start,
                                    endString: p.end,
                                    timeFormat: r,
                                    type: p.type || y.type
                                }, p.repeat && p.repeat.unit && 0 !== Math.floor(+p.repeat.multiplier) && d(s = p.repeat.unit.toLowerCase()) && (n.repeat = {
                                    interval: u(s, x),
                                    multiplier: ("quarter" === s ? 3 : 1) * (0, l.pluckNumber)(p.repeat.multiplier, 1)
                                }), v = p.style || {}, m = Object.assign({}, j, {
                                    "vertical-align": "full" === n.type ? "top" : "bottom"
                                }, S(v.text)), g = Object.assign({}, y.defaultStyle.marker, S(v.marker)), k.push(n), b.push({
                                    text: m,
                                    "text:hover": Object.assign({}, m, S(v["text:hover"])),
                                    marker: g,
                                    "marker:hover": Object.assign({}, g, S(v["marker:hover"]))
                                }), _.push((0, l.pluck)(p.label, ""))
                            }
                        t.xScale && (y.xScale = t.xScale), y.hoveredIndex = t.hoveredIndex, t.timeMarker && (y.valueArr = k, y.styleArr = b, y.textArr = _)
                    }, n.getAllLabelsProps = function(e, t) {
                        var n, i, a, r, o, s, d, u, h, f = this.config,
                            p = this.getFromEnv("smartLabel"),
                            g = f.valueArr,
                            m = f.domainArr[e],
                            v = f.markerDetails[e],
                            y = this.getFromEnv("isUTC"),
                            b = t.x,
                            _ = t.y,
                            x = t.width,
                            k = p._lineHeight,
                            S = [],
                            w = f.textArr[e];
                        for (w && (r = p.getSmartText((0, l.parseUnsafeString)(w), x, k), S.push({
                                dim: {
                                    x: b + x / 2 + 2,
                                    y: _ - 2
                                },
                                text: (0, l.parseUnsafeString)(r.text)
                            })), i = g[e].timeFormat, u = 0, h = m.length; u < h; u++) d = [], n = m[u], a = v.markerDim[u], o = (s = y ? c["default"].utcFormatter(i) : c["default"].formatter(i)).format(n.start) + " - " + s.format(n.end), d.push(o), w && d.push(r.oriText), a.toolTextArr = d;
                        return S
                    }, n.createGroup = function() {
                        var e = this.getLinkedParent().config,
                            t = e.padding,
                            n = e.canvasBGLeft - t.left,
                            i = e.canvasBGTop - t.top,
                            a = e.canvasBGWidth,
                            r = e.canvasBGHeight,
                            o = ["M" + n + "," + i, "L" + (n + a) + "," + i, "L" + (n + a) + "," + (i + r), "L" + n + "," + (i + r) + "Z"];
                        this.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "thermo",
                                label: "group",
                                isParent: !0
                            },
                            component: this,
                            label: "timeMarker",
                            attr: {
                                name: "time-marker-min-group",
                                "clip-path": o
                            },
                            id: "timeMarker"
                        })
                    }, n.drawAllLabels = function(e, t) {
                        var n = this;
                        e.forEach(function(e, i) {
                            n.addGraphicalElement({
                                el: "text",
                                attr: {
                                    text: e.text,
                                    x: e.dim.x,
                                    y: e.dim.y,
                                    opacity: t.opacity
                                },
                                css: t,
                                container: {
                                    label: "timeMarker"
                                },
                                id: "time-marker-label-" + i,
                                component: n,
                                label: "label"
                            })
                        })
                    }, n.draw = function() {
                        var e, t, n, i, a, r, o, s, l, c, d = this.config,
                            u = this.getFromEnv("smartLabel"),
                            h = d.valueArr,
                            f = d.styleArr;
                        for (this.createGroup(), d.markerDetails = [], a = 0, c = h.length; a < c; a++)
                            if (o = a === d.hoveredIndex, d.markerDetails[a] = {}, s = o ? f[a]["text:hover"] : f[a].text, l = o ? f[a]["marker:hover"] : f[a].marker, u.setStyle({
                                    "font-size": s["font-size"] || f[a].text["font-size"],
                                    "font-family": s["font-family"] || f[a].text["font-family"],
                                    "font-weight": s["font-weight"] || f[a].text["font-weight"]
                                }), u.getOriSize(d.textArr[a]), t = this.getMarkerAndLabelConfiguration(a, d.textArr[a] ? u._lineHeight : 13), n = d.markerDetails[a].markerDim, i = t.labelConfiguration, n.length) {
                                for (e = this.getAllLabelsProps(a, i), r = 0; r < n.length; r++) this.addGraphicalElement({
                                    el: "rect",
                                    attr: {
                                        x: n[r].x,
                                        y: n[r].y,
                                        width: n[r].width,
                                        height: n[r].height,
                                        opacity: l.opacity
                                    },
                                    container: {
                                        label: "timeMarker"
                                    },
                                    css: l,
                                    id: "time-span-marker-" + a + r,
                                    component: this,
                                    label: "line"
                                });
                                this.drawAllLabels(e, s)
                            }
                    }, n.getType = function() {
                        return "timeMarker"
                    }, n.getName = function() {
                        return "timeSpanMinMarker"
                    }, t
                }(r.SmartRenderer);
                t["default"] = p
            },
            736: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.setHoverInEffect = function(e) {
                            var t = this.getFromEnv("chart");
                            this.setData({
                                hoveredIndex: e
                            }, !0), t.fireEvent("timeSpanFullMarkerHovered", {
                                senderTimeMarker: this,
                                hoveredIndex: e,
                                hoveredFromOutside: !0
                            })
                        }, n.setHoverOutEffect = function() {
                            var e = this.getFromEnv("chart");
                            this.setData({
                                hoveredIndex: void 0
                            }, !0), e.fireEvent("timeSpanFullMarkerHovered", {
                                senderTimeMarker: this,
                                hoveredIndex: void 0,
                                hoveredFromOutside: !0
                            })
                        }, n.createGroup = function() {
                            var e = this.getLinkedParent().config,
                                t = e.padding,
                                n = e.canvasBGLeft - t.left,
                                i = e.canvasBGTop - t.top,
                                a = e.canvasBGWidth,
                                r = e.canvasBGHeight,
                                o = ["M" + n + "," + i, "L" + (n + a) + "," + i, "L" + (n + a) + "," + (i + r), "L" + n + "," + (i + r) + "Z"];
                            this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "strato",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "timeMarker",
                                attr: {
                                    name: "time-marker-full-group",
                                    "clip-path": o
                                },
                                id: "timeMarker"
                            })
                        }, n.getName = function() {
                            return "timeSpanFullMarker"
                        }, t
                    }(i(n(735))["default"]);
                t["default"] = r
            },
            737: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(374),
                    s = n(366),
                    l = n(180),
                    c = i(n(342));

                function d(e) {
                    switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                        case "millisecond":
                            return !0;
                        default:
                            return !1
                    }
                }

                function u(e, t) {
                    switch (e) {
                        case "year":
                            return t ? o.utcYear : s.timeYear;
                        case "quarter":
                        case "month":
                            return t ? o.utcMonth : s.timeMonth;
                        case "week":
                            return t ? o.utcWeek : s.timeWeek;
                        case "day":
                            return t ? o.utcDay : s.timeDay;
                        case "hour":
                            return t ? o.utcHour : s.timeHour;
                        case "minute":
                            return t ? o.utcMinute : s.timeMinute;
                        case "second":
                            return t ? o.utcSecond : s.timeSecond;
                        case "millisecond":
                            return t ? o.utcMillisecond : s.timeMillisecond
                    }
                }

                function h(e, t, n, i) {
                    var a, r, o, s = !1,
                        l = i.markerDim;
                    for (r = 0, o = l.length; r < o; r++)
                        if (t >= l[r].x && t <= l[r].x + l[r].width && n >= l[r].y && n <= l[r].y + l[r].height) {
                            s = !0, e.config.previouslyHoveredIndex = i.index, a = l[r];
                            break
                        }
                    return {
                        pointIndex: i.index,
                        hovered: s,
                        pointObj: {
                            hoveredMarkerDim: a,
                            index: s && r
                        },
                        previouslyHoveredIndex: e.config.previouslyHoveredIndex,
                        component: e
                    }
                }
                var f = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, a["default"])(t, e);
                    var n = t.prototype;
                    return n.__setDefaultConfig = function() {
                        e.prototype.__setDefaultConfig.call(this), this.config.defaultStyle = {
                            text: {
                                fill: "#808080",
                                "font-size": "11px",
                                "font-weight": "normal",
                                "font-style": "normal",
                                "vertical-align": "middle",
                                "text-anchor": "middle",
                                "fill-opacity": "1",
                                "stroke-opacity": "1",
                                opacity: 1
                            },
                            marker: {
                                fill: "#f8b8b7",
                                opacity: 1,
                                stroke: "#666666",
                                r: 2,
                                "stroke-width": "1",
                                "stroke-dasharray": "none",
                                "fill-opacity": "1",
                                "stroke-opacity": "1"
                            }
                        }, this.config.hoveredMarkerIndex = void 0, this.config.hoveredDomainIndex = void 0, this.config.previouslyHoveredIndex = void 0, this.config.hoveredFromOutside = !1, this.config.hoveredLabelFill = "#ffffff", this.config.hoveredMarkerRadius = "1.5", this.config.valueArr = [], this.config.textArr = [], this.config.styleArr = [], this.config.domainArr = [], this.config.repeatationArr = [], this.config.markerDetails = [], this.config.type = "minimal"
                    }, n.getHoveredMarker = function(e, t) {
                        var n, i, a = e,
                            r = t,
                            o = this.config,
                            s = this.getLinkedParent().getTranslation(),
                            l = o.markerDetails;
                        for (a -= s.x, r -= s.y, i = l.length - 1; i >= 0 && !(n = h(this, a, r, l[i])).hovered; i--);
                        return n
                    }, n.setHoverInEffect = function(e, t, n) {
                        var i = this.getFromEnv("chart");
                        this.setData({
                            hoveredMarkerIndex: e,
                            hoveredDomainIndex: t,
                            hoveredFromOutside: n
                        }, !0), i.fireEvent("timeInstanceMarkerHovered", {
                            senderTimeMarker: this,
                            hoveredMarkerIndex: e,
                            hoveredDomainIndex: t,
                            hoveredFromOutside: !0
                        })
                    }, n.setHoverOutEffect = function() {
                        var e = this.getFromEnv("chart");
                        this.setData({
                            hoveredMarkerIndex: void 0,
                            hoveredDomainIndex: void 0
                        }, !0), e.fireEvent("timeInstanceMarkerHovered", {
                            senderTimeMarker: this,
                            hoveredMarkerIndex: void 0,
                            hoveredDomainIndex: void 0,
                            hoveredFromOutside: !0
                        })
                    }, n.getToolTextConfiguration = function(e) {
                        var t, n, i, a = this.getFromEnv("tooltipStyle"),
                            r = a.header,
                            o = a.body,
                            s = 40,
                            l = 46,
                            c = this.getFromEnv("smartLabel"),
                            d = {};
                        if (c.setStyle({
                                "font-size": r["font-size"],
                                "font-family": r["font-family"],
                                "font-weight": r["font-weight"]
                            }), s += (i = c.getOriSize(e[0])).width, l += i.height, d.header = "<div style='margin: 5px;'>" + e[0] + "</div>", d.body = "<div>", c.setStyle({
                                "font-size": o["font-size"],
                                "font-family": o["font-family"],
                                "font-weight": o["font-weight"]
                            }), e.length > 2)
                            for (d.body += "</br>", t = 1, n = e.length; t < n; t++) e[t] && (l += (i = c.getOriSize(e[t])).height, s = Math.max(s, i.width), d.body += "<div style= 'margin: 5px;'>" + t + ". " + e[t] + "</div>");
                        else 2 === e.length && e[1] && (l += (i = c.getOriSize(e[1])).height, s = Math.max(s, i.width), d.body += "<div style= 'margin: 5px;'>" + e[1] + "</div>");
                        return d.body += "</div>", d.dimensions = {
                            width: s,
                            height: l
                        }, d
                    }, n.reCalculateDimension = function(e, t, n) {
                        var i = this.config,
                            a = i.domainArr[e][t],
                            r = this.config.xScale,
                            o = this.getLinkedParent().config,
                            s = o.padding,
                            l = s.left,
                            c = s.right,
                            d = s.top,
                            u = s.bottom,
                            h = r.getRangeValue(a),
                            f = i.markerDetails[e].markerDim[t],
                            p = h - n / 2 - l + c,
                            g = o.canvasBGTop + o.canvasBGHeight - n / 2 - d + u,
                            m = 2 * n / 2,
                            v = 2 * n / 2;
                        f.x = p, f.y = g, f.width = m, f.height = v, f.thresholdX = p < o.canvasBGLeft ? p - o.canvasBGLeft : p + m > o.canvasBGLeft + o.canvasBGWidth ? p + m - (o.canvasBGLeft + o.canvasBGWidth) : 0, f.thresholdY = n / 2
                    }, n.getMarkerDimension = function(e, t) {
                        var n = this.config.xScale,
                            i = this.getLinkedParent().config,
                            a = i.padding,
                            r = a.left,
                            o = a.right,
                            s = a.top,
                            l = a.bottom,
                            c = n.getRangeValue(e) - t / 2 - r + o,
                            d = 2 * t / 2;
                        return {
                            x: c,
                            y: i.canvasBGTop + i.canvasBGHeight - t / 2 - s + l,
                            width: d,
                            height: 2 * t / 2,
                            thresholdX: c < i.canvasBGLeft ? c - i.canvasBGLeft : c + d > i.canvasBGLeft + i.canvasBGWidth ? c + d - (i.canvasBGLeft + i.canvasBGWidth) : 0,
                            thresholdY: t / 2
                        }
                    }, n.getMarkerAndLabelConfiguration = function(e, t) {
                        var n, i = this,
                            a = i.config,
                            r = i.config.xScale.getDomain(),
                            o = a.valueArr[e],
                            s = o.repeat,
                            l = parseFloat(t.text["line-height"]);
                        a.markerDetails[e].markerDim = [], a.markerDetails[e].index = e, a.domainArr[e] = [], !s && +o.start >= +r[0] && +o.start <= +r[1] ? (a.domainArr[e].push(o.start), a.markerDetails[e].markerDim.push(i.getMarkerDimension(o.start, l))) : s && (a.domainArr[e] = n = i.getAllValidDomains(o.start, o.repeat), n.length && n.forEach(function(t) {
                            a.markerDetails[e].markerDim.push(i.getMarkerDimension(t, l))
                        }))
                    }, n.getAllValidDomains = function(e, t) {
                        var n = e,
                            i = this.config.xScale.getDomain(),
                            a = [];
                        if (+n < +i[0] && t.multiplier > 0)
                            for (; + n < +i[0];) n = t.interval.offset(n, t.multiplier);
                        for (; + n <= +i[1];) a.push(n), n = t.interval.offset(n, t.multiplier);
                        return a
                    }, n.configureAttributes = function(t) {
                        void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                        var n, i, a, r, o, s, h, f, p, g, m, v, y, b, _, x = this.config,
                            k = [],
                            S = [],
                            w = this.getFromEnv("isUTC"),
                            E = [],
                            C = this.getFromEnv("getStyleDef"),
                            j = this.getFromEnv("textStyle"),
                            D = this.getFromEnv("baseTextStyle"),
                            M = t.timeMarker || [],
                            T = Object.assign({}, j, x.defaultStyle.text, D);
                        for (o = 0, s = M.length; o < s; o++)(h = M[o]).start && h.start !== l.BLANKSTRING && (r = (0, l.pluck)(h.timeformat, t.defaultFormat), (i = (w ? c["default"].utcParser(r) : c["default"].parser(r)).parse(h.start)) && (n = {
                            start: i,
                            startString: h.start,
                            timeFormat: r,
                            type: h.type || x.type
                        }, h.repeat && h.repeat.unit && 0 !== Math.floor(+h.repeat.multiplier) && d(a = h.repeat.unit.toLowerCase()) && (n.repeat = {
                            interval: u(a, w),
                            multiplier: ("quarter" === a ? 3 : 1) * (0, l.pluckNumber)(h.repeat.multiplier, 1)
                        }), f = h.style || {}, E.push(n), p = Object.assign({}, T, {}, C(f.text)), g = Object.assign({}, x.defaultStyle.marker, C(f.marker)), _ = C(f["marker:hover"]), m = Object.assign({}, g, _), v = Object.assign({}, g, C(f["marker-box"])), y = Object.assign({}, g, C(f["marker-notch"])), b = Object.assign({}, g, C(f["marker-line"])), k.push({
                            text: p,
                            "text:hover": Object.assign({}, p, C(f["text:hover"])),
                            marker: g,
                            "marker:hover": m,
                            "marker-box": v,
                            "marker-box:hover": Object.assign({}, v, _, C(f["marker-box:hover"])),
                            "marker-notch": y,
                            "marker-notch:hover": Object.assign({}, y, _, C(f["marker-notch:hover"])),
                            "marker-line": b,
                            "marker-line:hover": Object.assign({}, b, _, C(f["marker-line:hover"]))
                        }), S.push((0, l.pluck)((0, l.parseUnsafeString)(h.label), ""))));
                        t.xScale && (x.xScale = t.xScale), x.hoveredMarkerIndex = t.hoveredMarkerIndex, x.hoveredDomainIndex = t.hoveredDomainIndex, x.hoveredFromOutside = t.hoveredFromOutside, t.timeMarker && (x.valueArr = E, x.styleArr = k, x.textArr = S)
                    }, n.createToolipConfiguration = function() {
                        var e, t, n, i, a, r, o = this.config,
                            s = o.markerDetails,
                            l = o.domainArr,
                            d = o.repeatationArr,
                            u = o.valueArr,
                            h = this.getFromEnv("isUTC"),
                            f = [];
                        for (a = 0; a < l.length; a++)
                            for (e = l[a], t = u[a].timeFormat, n = h ? c["default"].utcFormatter(t) : c["default"].formatter(t), r = 0; r < e.length; r++) f = [], i = n.format(e[r]), f = f.concat([i], d[a][r].labels), s[a].markerDim[r].toolTextArr = f
                    }, n.getRepeatationArr = function() {
                        var e, t, n, i, a, r, o, s = this.config,
                            l = s.domainArr,
                            c = s.textArr,
                            d = s.markerDetails,
                            u = [];
                        for (r = 0; r < l.length; r++)
                            for (i = l[r], u[r] = [], o = 0; o < i.length; o++)
                                for (e = r, a = i[o], u[r][o] = {
                                        domainValue: a,
                                        labels: [c[r]],
                                        markerDimIndex: o
                                    }; e + 1 < l.length;) n = l[e + 1].map(function(e) {
                                    return +e
                                }), -1 !== (t = n.indexOf(+a)) && (u[r][o].labels.push(c[e + 1]), l[e + 1] = l[e + 1].filter(function(e) {
                                    return +e != +a
                                }), d[e + 1].markerDim = d[e + 1].markerDim.filter(function(e, n) {
                                    return n !== t
                                })), e++;
                        return u
                    }, n.draw = function() {
                        var e, t, n = this.config,
                            i = n.valueArr,
                            a = n.styleArr;
                        for (this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "thermo",
                                    label: "thermo",
                                    isParent: !0
                                },
                                component: this,
                                label: "timeMarkerHoverGroup",
                                attr: {
                                    name: "time-marker-hover-elem-group"
                                },
                                id: "timeMarker"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "thermo",
                                    label: "thermo",
                                    isParent: !0
                                },
                                component: this,
                                label: "timeMarker",
                                attr: {
                                    name: "time-marker-group"
                                },
                                id: "timeMarker"
                            }), n.markerDetails = [], e = 0, t = i.length; e < t; e++) n.markerDetails[e] = {}, this.getMarkerAndLabelConfiguration(e, a[e]);
                        n.repeatationArr = this.getRepeatationArr(), this.createToolipConfiguration(), this.drawTimeMarkers(), this.drawTimeMarkerLabels()
                    }, n.drawTimeMarkers = function() {
                        var e, t, n, i, a, r, o, s, l = this.config,
                            c = l.markerDetails,
                            d = this.getLinkedParent().config,
                            u = d.padding,
                            h = l.styleArr;
                        for (o = 0; o < c.length; o++)
                            for (e = c[o].markerDim, i = l.valueArr[o].type, s = 0; s < e.length; s++) n = o === l.hoveredMarkerIndex && s === l.hoveredDomainIndex, r = h[o], (a = parseFloat(n ? r["text:hover"]["line-height"] : r.text["line-height"], 10)) !== parseFloat(r.text["line-height"], 10) && this.reCalculateDimension(o, s, a), t = e[s], (n || "full" === i) && (this.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: ["M", t.x + t.width / 2, t.y + t.height / 2, "v", -d.canvasBGHeight],
                                    opacity: n ? r["marker-line:hover"].opacity : r["marker-line"].opacity
                                },
                                container: {
                                    label: "timeMarkerHoverGroup"
                                },
                                id: "time-instance-marker-path-" + o + s,
                                css: n ? r["marker-line:hover"] : r["marker-line"],
                                component: this,
                                label: "path"
                            }), this.addGraphicalElement({
                                el: "circle",
                                attr: {
                                    cx: t.x + t.width / 2,
                                    cy: d.canvasTop + l.hoveredMarkerRadius + u.bottom - u.top,
                                    r: l.hoveredMarkerRadius,
                                    opacity: n ? r["marker-notch:hover"].opacity : r["marker-notch"].opacity
                                },
                                container: {
                                    label: "timeMarkerHoverGroup"
                                },
                                css: n ? r["marker-notch:hover"] : r["marker-notch"],
                                id: "time-instance-marker-circle-" + o + s,
                                component: this,
                                label: "path"
                            })), this.addGraphicalElement({
                                el: "rect",
                                attr: {
                                    x: t.x,
                                    y: t.y,
                                    width: t.width,
                                    height: t.height,
                                    opacity: n ? r["marker-box:hover"].opacity : r["marker-box"].opacity
                                },
                                container: {
                                    label: "timeMarker"
                                },
                                css: n ? r["marker-box:hover"] : r["marker-box"],
                                id: "time-instance-marker-rect-" + o + s,
                                component: this,
                                label: "rect"
                            })
                    }, n.drawTimeMarkerLabels = function() {
                        var e, t, n, i, a, r, o, s = this.config,
                            l = s.markerDetails,
                            c = s.repeatationArr,
                            d = s.styleArr;
                        for (r = 0; r < c.length; r++)
                            for (t = c[r], o = 0; o < t.length; o++) i = t[o], n = r === s.hoveredMarkerIndex && o === s.hoveredDomainIndex, (a = i.labels.length) > 1 && (e = l[r].markerDim[i.markerDimIndex], this.addGraphicalElement({
                                el: "text",
                                attr: {
                                    x: e.x + e.width / 2,
                                    y: e.y + e.height / 2,
                                    text: a,
                                    opacity: n ? d[r]["text:hover"].opacity : d[r].text.opacity
                                },
                                container: {
                                    label: "timeMarker"
                                },
                                css: n ? d[r]["text:hover"] : d[r].text,
                                id: "time-instance-marker-text-" + r + o,
                                component: this,
                                label: "text"
                            }))
                    }, n.getType = function() {
                        return "timeMarker"
                    }, n.getName = function() {
                        return "timeInstanceMarker"
                    }, t
                }(r.SmartRenderer);
                t["default"] = f
            },
            738: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(739));
                t["default"] = function(e) {
                    e.config.yConfigs.forEach(function(t) {
                        var n = t.scale;
                        e.config.enableReferenceLine && Array.isArray(t.referenceline) && t.referenceline.forEach(function(i) {
                            var r = e.attachChild(a["default"], "referenceLine");
                            r.addEventListener("fc-mouseover", r.hoverInHandler), r.addEventListener("fc-mouseout", r.hoverOutHandler), r.configure({
                                yScale: n,
                                direction: "left" === t.align ? "right" : "left",
                                formatterFn: t.formatterFn,
                                prefix: t.formatLabelPrefix,
                                suffix: t.formatLabelSuffix,
                                referenceLine: i
                            })
                        })
                    })
                }
            },
            739: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(180),
                    s = i(n(705)),
                    l = "L",
                    c = "h",
                    d = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this) || this).hoverInHandler = function() {
                                t.setState("hovered", !0), t.asyncDraw()
                            }, t.hoverOutHandler = function() {
                                t.setState("hovered", !1), t.asyncDraw()
                            }, t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this), this.config.defaultStyle = {
                                text: {
                                    // dark text
                                    fill: "#ffffff",
                                    "vertical-align": "top",
                                    opacity: "1",
                                    "fill-opacity": "1",
                                    "stroke-opacity": "1",
                                    "font-size": "11px",
                                    "font-style": "normal"
                                },
                                marker: {
                                    fill: "#B70000",
                                    stroke: "#B70000",
                                    "fill-opacity": "1",
                                    "stroke-opacity": "1",
                                    opacity: "1",
                                    borderthickness: 0,
                                    borderpadding: 2,
                                    borderradius: 0,
                                    borderdash: "none",
                                    "stroke-width": "1"
                                }
                            }, this.config.direction = "right"
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n = this.config,
                                i = this.getFromEnv("getStyleDef"),
                                a = t.referenceLine || {};
                            n.markerStyle = i(a.style && a.style.marker), n.textStyle = i(a.style && a.style.text), n.label = (0, o.pluck)(a.label, ""), n.value = (0, o.pluckNumber)(a.value, 0), t.yScale && (n.yScale = t.yScale), t.formatterFn && (n.formatterFn = t.formatterFn), t.prefix && (n.prefix = t.prefix), t.suffix && (n.suffix = t.suffix), t.direction && (n.direction = t.direction)
                        }, n.getPathArr = function() {
                            var e, t = this.config,
                                n = t.direction,
                                i = this.getLinkedParent().config,
                                a = t.yScale,
                                r = a.getDomain(),
                                o = t.value,
                                l = [];
                            if ((0, s["default"])(r[0]) && (0, s["default"])(r[1]) && o >= r[0] && o <= r[1]) switch (e = a.getRangeValue(o), n) {
                                case "left":
                                    l = ["M", i.canvasLeft + i.canvasWidth - i.borderConfig.rightBorder, e, "h", -i.canvasWidth];
                                    break;
                                case "right":
                                    l = ["M", i.canvasLeft + i.borderConfig.leftBorder, e, "h", i.canvasWidth];
                                    break;
                                case "top":
                                case "bottom":
                                    l = ["M", e, i.canvasTop, "v", i.canvasHeight - i.borderConfig.bottomBorder]
                            }
                            return l
                        }, n.getLabelsProps = function(e, t) {
                            var n = this.config,
                                i = n.direction,
                                a = {
                                    isValidLabel: !1
                                };
                            if (e.length && n.label) switch (a.isValidLabel = !0, i) {
                                case "top":
                                    a.x = e[1], a.y = e[2], a.textAnchor = "start";
                                    break;
                                case "bottom":
                                    a.x = e[1], a.y = e[4], a.textAnchor = "start";
                                    break;
                                case "left":
                                    a.x = e[1] + e[4] + 3, a.y = e[2] + t.borderpadding, a.textAnchor = "start";
                                    break;
                                case "right":
                                    a.x = e[1] + e[4] - t.borderpadding - 1, a.y = e[2] + t.borderpadding, a.textAnchor = "end"
                            }
                            return a
                        }, n.getBulbPoints = function(e) {
                            var t = this.config.direction,
                                n = {};
                            if (e) switch (t) {
                                case "left":
                                    n.cx = e[1] + e[4] - 3, n.cy = e[2];
                                    break;
                                case "right":
                                    n.cx = e[1] + e[4] + 3, n.cy = e[2]
                            }
                            return n
                        }, n.getTagProps = function(e, t) {
                            var n, i, a, r, o = this.config,
                                s = o.value,
                                d = this.getFromEnv("smartLabel"),
                                u = this.getLinkedParent().config,
                                h = u.canvasLeft,
                                f = u.canvasWidth,
                                p = u.canvasLeft + f,
                                g = {},
                                m = {},
                                v = o.direction;
                            switch (i = o.yScale.getRangeValue(s), a = (a = (n = d.getSmartText(s)).width + 2 * e.borderpadding) > 29 ? a : 29, v) {
                                case "right":
                                    r = ["M", h + u.borderConfig.leftBorder, i, l, h - 5, i, l, h - 10, i - n.height / 2 - 2 * t.marker.borderpadding, c, -a, "v", n.height + 4 * t.marker.borderpadding, c, a, l, h - 5, i, "z"], g.x = h - 10 - a / 2, g.y = i;
                                    break;
                                case "left":
                                    r = ["M", p, i, l, p + 5, i, l, p + 10, i - n.height / 2 - 2 * t.marker.borderpadding, c, a, "v", n.height + 4 * t.marker.borderpadding, c, -a, l, p + 5, i, "z"], g.x = p + 10 + a / 2, g.y = i
                            }
                            return m.tagPath = r, m.tagTextPosition = g, m
                        }, n.draw = function() {
                            var e, t, n, i, a, r, s, l, c, d, u, h, f = this.config,
                                p = f.value,
                                g = this.getFromEnv("smartLabel"),
                                m = f.defaultStyle,
                                v = f.textStyle,
                                y = f.markerStyle,
                                b = f.label,
                                _ = this.getState("hovered"),
                                x = this.getFromEnv("baseTextStyle");
                            this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "thermo",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "refLine",
                                attr: {
                                    name: "reference-line-thermo"
                                },
                                id: "thermo"
                            }, !0), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "thermo",
                                    label: "refLine"
                                },
                                component: this,
                                label: "refLine-thermo-hover-group",
                                attr: {
                                    name: "reference-line-hover-elem-group"
                                },
                                id: "thermo"
                            }, !0), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "thermo",
                                    label: "refLine"
                                },
                                component: this,
                                label: "refLine-thermo-group",
                                attr: {
                                    name: "reference-line-group"
                                },
                                id: "thermo"
                            }, !0), Object.assign(m.text, x), e = (0, o.extend2)((0, o.extend2)({}, m.text), v), t = (0, o.extend2)((0, o.extend2)({}, m.marker), y), i = (0, o.extend2)({}, t), s = this.getPathArr(), l = this.getLabelsProps(s, t), c = this.getBulbPoints(s), s.length && (this.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: s,
                                    stroke: t.stroke || t.fill,
                                    "fill-opacity": t["fill-opacity"],
                                    "stroke-opacity": t["stroke-opacity"],
                                    "stroke-width": t["stroke-width"],
                                    "stroke-linecap": t["stroke-linecap"],
                                    opacity: t.opacity * (_ ? 1 : .4),
                                    "stroke-dasharray": t["stroke-dasharray"] || "none"
                                },
                                container: {
                                    label: "refLine-thermo-group"
                                },
                                component: this,
                                label: "line"
                            }, !0), i["stroke-width"] = _ ? t["stroke-width"] || 1 : 0, i.stroke = y && y.stroke || "#595959", this.addGraphicalElement({
                                el: "circle",
                                attr: {
                                    cx: c.cx,
                                    cy: c.cy,
                                    r: 3
                                },
                                container: {
                                    label: "refLine-thermo-group"
                                },
                                css: i,
                                component: this,
                                label: "anchor"
                            }), _ && (n = (0, o.extend2)((0, o.extend2)((0, o.extend2)({}, m), {
                                text: {
                                    fill: "#f3f3f3"
                                }
                            }), {
                                text: v,
                                marker: y
                            }), l.isValidLabel && this.addGraphicalElement({
                                el: "text",
                                attr: {
                                    text: b,
                                    x: l.x,
                                    y: l.y - t.borderpadding * ("top" === e["vertical-align"] ? -1 : 1),
                                    opacity: e.opacity,
                                    "text-anchor": l.textAnchor,
                                    "text-bound": [t.fill, t.fill, t.borderthickness, t.borderpadding, t.borderradius, t.borderdash, .2]
                                },
                                css: e,
                                container: {
                                    label: "refLine-thermo-hover-group"
                                },
                                component: this,
                                label: "label"
                            }, !0), g.setStyle({
                                fontFamily: e["font-family"],
                                fontWeight: e["font-weight"],
                                fontSize: e["font-size"],
                                fontStyle: e["font-style"]
                            }), u = (d = this.getTagProps(t, n)).tagPath, h = d.tagTextPosition, !(a = (0, o.extend2)({}, n.marker)).stroke && (a.stroke = "none"), this.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: u
                                },
                                container: {
                                    label: "refLine-thermo-hover-group"
                                },
                                css: a,
                                component: this,
                                label: "tag"
                            }, !0), !(r = (0, o.extend2)({}, n.text))["text-anchor"] && (r["text-anchor"] = "middle"), r["vertical-align"] = "middle", this.addGraphicalElement({
                                el: "text",
                                attr: {
                                    text: f.formatterFn({
                                        value: p,
                                        type: "referenceline",
                                        prefix: f.prefix,
                                        suffix: f.suffix
                                    }),
                                    x: h.x,
                                    y: h.y
                                },
                                css: r,
                                container: {
                                    label: "refLine-thermo-hover-group"
                                },
                                component: this,
                                label: "tag-text"
                            }, !0)))
                        }, t
                    }(r.SmartRenderer);
                t["default"] = d
            },
            740: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(741)),
                    r = n(180),
                    o = function(e) {
                        return void 0 === e ? void 0 : 1
                    };
                t["default"] = function(e) {
                    e.config.yConfigs.forEach(function(t) {
                        var n = t.scale,
                            i = e.getFromEnv("chart-attrib");
                        e.config.enableReferenceZone && Array.isArray(t.referencezone) && t.referencezone.forEach(function(s) {
                            if (o(s.valuemin) && o(s.valuemax)) {
                                var l = e.attachChild(a["default"], "referenceZone");
                                l.addEventListener("fc-mouseover", l.hoverInHandler), l.addEventListener("fc-mouseout", l.hoverOutHandler), l.configure({
                                    yScale: n,
                                    direction: "left" === t.align ? "right" : "left",
                                    formatterFn: t.formatterFn,
                                    prefix: t.formatLabelPrefix,
                                    suffix: t.formatLabelSuffix,
                                    referenceLine: s,
                                    extStyle: s.style || {},
                                    yAxisAlign: t.align,
                                    showTextOutline: (0, r.pluckNumber)(i.textoutline, 0)
                                }), e.addExtEventListener("referenceZoneHovered", function(t) {
                                    var n = t.data;
                                    e.highlightDataPoints(n.hovered, n.yAxisAlign, n.range)
                                }, l)
                            }
                        })
                    })
                }
            },
            741: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = n(195),
                    s = n(180),
                    l = "M",
                    c = "h",
                    d = "v",
                    u = "Z",
                    h = "L",
                    f = function(e, t) {
                        return e >= t[1] && e <= t[0]
                    },
                    p = {
                        marker: {
                            fill: "#f76260",
                            stroke: "#f76260",
                            "fill-opacity": "1",
                            "stroke-opacity": "1",
                            opacity: "1",
                            borderthickness: 0,
                            borderpadding: 2,
                            borderradius: 0,
                            borderdash: "none",
                            "stroke-width": 1
                        },
                        "marker-zone": {
                            stroke: "#f76260",
                            "fill-opacity": .2,
                            fill: "#f76260",
                            "stroke-opacity": 1,
                            "stroke-width": 0
                        },
                        "marker-zone:hover": {
                            stroke: "#f76260",
                            "fill-opacity": .3,
                            fill: "#f76260",
                            "stroke-opacity": 1,
                            "stroke-width": 1
                        },
                        "marker-notch": {
                            "stroke-width": 0,
                            stroke: "#f76260",
                            fill: "#f76260",
                            "fill-opacity": 1
                        },
                        "marker-notch:hover": {
                            "stroke-width": 1,
                            stroke: "#f76260",
                            fill: "#f76260",
                            "fill-opacity": .5
                        },
                        "marker-tag": {
                            fill: "#f76260",
                            stroke: "#f76260",
                            "fill-opacity": "1",
                            "stroke-opacity": "1",
                            opacity: "1",
                            borderthickness: 0,
                            borderpadding: 2,
                            borderradius: 0,
                            borderdash: "none",
                            "stroke-width": 1
                        },
                        "marker-notch-connector": {
                            fill: "none",
                            stroke: "#f76260",
                            "fill-opacity": "1",
                            "stroke-opacity": "1",
                            opacity: "1",
                            "stroke-width": 1
                        },
                        text: {
                            // dark text
                            fill: "#ffffff",
                            "vertical-align": "top",
                            opacity: "1",
                            "fill-opacity": "1",
                            "stroke-opacity": "1",
                            "font-size": "11px",
                            "font-style": "normal"
                        },
                        "marker-text": {
                            fill: "#f3f3f3",
                            "vertical-align": "middle",
                            "text-anchor": "middle",
                            opacity: "1",
                            "fill-opacity": "1",
                            "stroke-opacity": "1",
                            "font-size": "11px",
                            "font-style": "normal"
                        }
                    },
                    g = function(e) {
                        function t() {
                            var t;
                            t = e.call(this) || this;
                            var n, i = (0, a["default"])(t),
                                r = i.config;
                            return i.hoverInHandler = function() {
                                n = r.yScale, i.setState("hovered", !0), i.asyncDraw(), i.fireEvent("referenceZoneHovered", {
                                    hovered: !0,
                                    yAxisAlign: r.yAxisAlign,
                                    range: {
                                        minValue: n.getRangeValue(r.minValue),
                                        maxValue: n.getRangeValue(r.maxValue)
                                    }
                                })
                            }, i.hoverOutHandler = function() {
                                i.setState("hovered", !1), i.asyncDraw(), i.fireEvent("referenceZoneHovered", {
                                    hovered: !1,
                                    yAxisAlign: r.yAxisAlign,
                                    range: {
                                        minValue: n.getRangeValue(r.minValue),
                                        maxValue: n.getRangeValue(r.maxValue)
                                    }
                                })
                            }, t
                        }(0, r["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this), this.config.extStyle = {}
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n, i, a = this.config,
                                r = t.referenceLine || {};
                            if (n = (0, s.pluckNumber)(r.valuemin, 0), i = (0, s.pluckNumber)(r.valuemax, 0), a.label = (0, s.pluck)(r.label, ""), n > i) {
                                var o = [i, n];
                                n = o[0], i = o[1]
                            }
                            for (var l in a.minValue = n, a.maxValue = i, t) t.hasOwnProperty(l) && (this.config[l] = t[l]);
                            this.createStyleDefinition()
                        }, n.createStyleDefinition = function() {
                            var e = this.config,
                                t = e.extStyle,
                                n = this.getFromEnv("getStyleDef"),
                                i = this.getFromEnv("baseTextStyle"),
                                a = n(t.marker),
                                r = n(t["marker:hover"]),
                                o = n(t["marker-zone"]),
                                s = n(t["marker-zone:hover"]),
                                l = n(t["marker-tag"]),
                                c = n(t.text),
                                d = n(t["marker-text"]),
                                u = n(t["marker-notch"]),
                                h = n(t["marker-notch:hover"]),
                                f = n(t["marker-notch-connector"]),
                                g = n(t["marker-notch-connector:hover"]);
                            e.styleDefinition = {
                                marker: Object.assign({}, p.marker, a),
                                "marker:hover": Object.assign({}, p.marker, r),
                                "marker-zone": Object.assign({}, p["marker-zone"], a, o),
                                "marker-zone:hover": Object.assign({}, a, o, p["marker-zone:hover"], r, s),
                                "marker-tag": Object.assign({}, p["marker-tag"], a, l),
                                text: Object.assign({}, i, p.text, c),
                                "marker-text": Object.assign({}, i, p["marker-text"], c, d),
                                "marker-notch": Object.assign({}, p["marker-notch"], a, u),
                                "marker-notch:hover": Object.assign({}, a, u, p["marker-notch:hover"], r, h),
                                "marker-notch-connector": Object.assign({}, p["marker-notch-connector"], a, f),
                                "marker-notch-connector:hover": Object.assign({}, p["marker-notch-connector"], a, f, r, g)
                            }
                        }, n.getMarkerPath = function() {
                            var e, t, n, i = this.config,
                                a = i.direction,
                                r = this.getLinkedParent().config,
                                o = r.canvasLeft,
                                s = r.canvasWidth,
                                h = r.canvasTop,
                                f = r.canvasHeight,
                                p = o + s,
                                g = h + f,
                                m = r.borderConfig.rightBorder,
                                v = r.borderConfig.leftBorder,
                                y = r.borderConfig.topBorder,
                                b = r.borderConfig.bottomBorder,
                                _ = i.yScale,
                                x = i.minValue,
                                k = i.maxValue,
                                S = [],
                                w = [];
                            switch (n = (e = _.getRangeValue(x)) - (t = _.getRangeValue(k)), a) {
                                case "left":
                                    S = [l, p - m, t, c, -s, d, n, c, s, u], w = [l, p - m - s, t, d, n];
                                    break;
                                case "right":
                                    S = [l, o + v, t, c, s, d, n, c, -s, u], w = [l, o + v + s, t, d, n];
                                    break;
                                case "top":
                                    S = [l, e, g - b, d, -f, c, n, d, f, u], w = [l, e, g - b - f, c, n];
                                    break;
                                case "bottom":
                                    S = [l, e, h + y, d, f, c, n, d, -f, u], w = [l, e, h + y + f, c, n]
                            }
                            return {
                                connectorPath: w,
                                zonePath: S
                            }
                        }, n.getLabelsProps = function(e, t) {
                            var n = t.marker,
                                i = t.text,
                                a = this.config,
                                r = this.getLinkedParent().config,
                                o = a.direction,
                                s = {
                                    isValidLabel: !1
                                };
                            if (e.length && a.label) {
                                switch (s.isValidLabel = !0, o) {
                                    case "top":
                                    case "bottom":
                                        s.x = e[1], s.y = e[2] + e[4], s.textAnchor = "start";
                                        break;
                                    case "left":
                                        s.x = e[1] + e[4] + 3, s.y = e[2] + e[6] + n.borderpadding, s.textAnchor = "start";
                                        break;
                                    case "right":
                                        s.x = e[1] + e[4] - n.borderpadding - 1, s.y = e[2] + e[6] + n.borderpadding, s.textAnchor = "end"
                                }
                                r.canvasBGHeight < s.y ? (s.y = r.canvasBGHeight - 2 * n.borderpadding, i["vertical-align"] = "bottom") : i["vertical-align"] = "top"
                            }
                            return s
                        }, n.getBulbPoints = function(e) {
                            var t = this.config,
                                n = t.direction,
                                i = t.yScale.getRange(),
                                a = [];
                            if (e) switch (n) {
                                case "left":
                                    f(e[2], i) && a.push({
                                        cx: e[1] + e[4],
                                        cy: e[2]
                                    }), f(e[2] + e[6], i) && a.push({
                                        cx: e[1] + e[4],
                                        cy: e[2] + e[6]
                                    });
                                    break;
                                case "right":
                                    f(e[2], i) && a.push({
                                        cx: e[1] + e[4],
                                        cy: e[2]
                                    }), f(e[2] + e[6], i) && a.push({
                                        cx: e[1] + e[4],
                                        cy: e[2] + e[6]
                                    })
                            }
                            return a
                        }, n.getTagProps = function(e, t) {
                            var n, i, a, r, o = this.config,
                                s = o.minValue,
                                p = o.maxValue,
                                g = o.yScale,
                                m = g.getRange(),
                                v = this.getFromEnv("smartLabel"),
                                y = this.getLinkedParent().config,
                                b = y.canvasLeft,
                                _ = y.canvasWidth,
                                x = y.canvasLeft + _,
                                k = [],
                                S = o.direction;
                            switch (i = g.getRangeValue(s), a = g.getRangeValue(p), S) {
                                case "right":
                                    r = (r = (n = v.getSmartText(s)).width + 2 * e.borderpadding) > 29 ? r : 29, f(i, m) && k.push({
                                        tagPath: [l, b + y.borderConfig.leftBorder, i, h, b - 5, i, h, b - 10, i - n.height / 2 - 2 * t.borderpadding, c, -r, d, n.height + 4 * t.borderpadding, c, r, h, b - 5, i, u],
                                        tagTextProps: {
                                            x: b - 10 - r / 2,
                                            y: i,
                                            value: s
                                        }
                                    }), r = (r = (n = v.getSmartText(p)).width + 2 * e.borderpadding) > 29 ? r : 29, f(a, m) && k.push({
                                        tagPath: [l, b + y.borderConfig.leftBorder, a, h, b - 5, a, h, b - 10, a - n.height / 2 - 2 * t.borderpadding, c, -r, d, n.height + 4 * t.borderpadding, c, r, h, b - 5, a, u],
                                        tagTextProps: {
                                            x: b - 10 - r / 2,
                                            y: a,
                                            value: p
                                        }
                                    });
                                    break;
                                case "left":
                                    r = (r = (n = v.getSmartText(s)).width + 2 * e.borderpadding) > 29 ? r : 29, f(i, m) && k.push({
                                        tagPath: [l, x, i, h, x + 5, i, h, x + 10, i - n.height / 2 - 2 * t.borderpadding, c, r, d, n.height + 4 * t.borderpadding, c, -r, h, x + 5, i, u],
                                        tagTextProps: {
                                            x: x + 10 + r / 2,
                                            y: i,
                                            value: s
                                        }
                                    }), r = (r = (n = v.getSmartText(p)).width + 2 * e.borderpadding) > 29 ? r : 29, f(a, m) && k.push({
                                        tagPath: [l, x, a, h, x + 5, a, h, x + 10, a - n.height / 2 - 2 * t.borderpadding, c, r, d, n.height + 4 * t.borderpadding, c, -r, h, x + 5, a, u],
                                        tagTextProps: {
                                            x: x + 10 + r / 2,
                                            y: a,
                                            value: p
                                        }
                                    })
                            }
                            return k
                        }, n.draw = function() {
                            var e, t, n, i, a, r, o = this,
                                s = o.config,
                                l = o.getFromEnv("smartLabel"),
                                c = s.styleDefinition,
                                d = s.label,
                                u = o.getState("hovered"),
                                h = o.getLinkedParent().config,
                                f = h.padding,
                                p = h.canvasBGLeft - f.left - 3,
                                g = h.canvasBGTop - f.top - 3,
                                m = h.canvasBGWidth + 6,
                                v = h.canvasBGHeight + 6,
                                y = ["M" + p + "," + g, "L" + (p + m) + "," + g, "L" + (p + m) + "," + (g + v), "L" + p + "," + (g + v) + "Z"];
                            o.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "exo",
                                    label: "group",
                                    isParent: !0
                                },
                                component: o,
                                label: "refZone",
                                attr: {
                                    name: "reference-zone-exo"
                                },
                                id: "exo"
                            }, !0), o.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "exo",
                                    label: "refZone"
                                },
                                component: o,
                                label: "refZone-exo-group",
                                attr: {
                                    name: "reference-zone-group",
                                    "clip-path": y
                                },
                                id: "exo"
                            }, !0), o.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "exo",
                                    label: "refZone"
                                },
                                component: o,
                                label: "refZone-exo-hover-group",
                                attr: {
                                    name: "reference-zone-hover-elem-group"
                                },
                                id: "exo"
                            }, !0), t = (e = o.getMarkerPath()).zonePath, n = o.getLabelsProps(t, c), i = o.getBulbPoints(t), t.length && (o.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: t
                                },
                                container: {
                                    label: "refZone-exo-group"
                                },
                                css: u ? c["marker-zone:hover"] : c["marker-zone"],
                                component: o,
                                label: "line"
                            }, !0), i.forEach(function(e) {
                                o.addGraphicalElement({
                                    el: "circle",
                                    attr: {
                                        cx: e.cx,
                                        cy: e.cy,
                                        r: 3
                                    },
                                    container: {
                                        label: "refZone-exo-hover-group"
                                    },
                                    css: u ? c["marker-notch:hover"] : c["marker-notch"],
                                    component: o,
                                    label: "anchor"
                                })
                            }), o.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: e.connectorPath
                                },
                                container: {
                                    label: "refZone-exo-group"
                                },
                                css: u ? c["marker-notch-connector:hover"] : c["marker-notch-connector"],
                                component: o,
                                label: "anchorConnector"
                            }), u && (n.isValidLabel && o.addGraphicalElement({
                                el: "text",
                                attr: {
                                    text: d,
                                    x: n.x,
                                    y: n.y - c.marker.borderpadding * ("top" === c.text["vertical-align"] ? -1 : 1),
                                    "text-anchor": n.textAnchor
                                },
                                css: c.text,
                                container: {
                                    label: "refZone-exo-hover-group"
                                },
                                outlineText: s.showTextOutline,
                                component: o,
                                label: "label"
                            }, !0), l.setStyle({
                                fontFamily: c.text["font-family"],
                                fontWeight: c.text["font-weight"],
                                fontSize: c.text["font-size"],
                                fontStyle: c.text["font-style"]
                            }), o.getTagProps(c.marker, c["marker-tag"]).forEach(function(e) {
                                a = e.tagPath, r = e.tagTextProps, o.addGraphicalElement({
                                    el: "path",
                                    attr: {
                                        path: a
                                    },
                                    container: {
                                        label: "refZone-exo-hover-group"
                                    },
                                    css: c["marker-tag"],
                                    component: o,
                                    label: "tag"
                                }, !0), o.addGraphicalElement({
                                    el: "text",
                                    attr: {
                                        text: s.formatterFn({
                                            value: r.value,
                                            type: "referenceline",
                                            prefix: s.prefix,
                                            suffix: s.suffix
                                        }),
                                        x: r.x,
                                        y: r.y
                                    },
                                    css: c["marker-text"],
                                    container: {
                                        label: "refZone-exo-hover-group"
                                    },
                                    component: o,
                                    label: "tag-text"
                                }, !0)
                            })))
                        }, t
                    }(o.SmartRenderer);
                t["default"] = g
            },
            742: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(743));
                t["default"] = function(e) {
                    e.config.enableGridLines && e.attachChild(a["default"], "gridLine").configure({
                        direction: e.config.gridLineDirection,
                        styleGridLines: e.config.styleGridLines,
                        defaultStyle: e.config.gridLineStyle
                    })
                }
            },
            743: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(180),
                    s = /\S/,
                    l = "stroke-dasharray",
                    c = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this), this.config.direction = "horizontal", this.config.showgridlines = 1, this.config.showboundarygridlines = 1, this.config.style = {}, this.config.defaultStyle = {
                                stroke: "#EFEFEF",
                                "stroke-width": "1",
                                "stroke-opacity": "1"
                            }
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n = this.config;
                            for (var i in t) t.hasOwnProperty(i) && "undefined" != typeof t[i] && (n[i] = t[i])
                        }, n.getPathArr = function() {
                            var e, t, n, i, a, r, o, s, l, c, d, u, h, f, p = this.config,
                                g = this.getFromEnv("getStyleDef"),
                                m = this.getLinkedParent().config,
                                v = [],
                                y = [];
                            if ("vertical" !== p.direction ? (s = (n = m.yConfigs[0]).scale, o = "H", i = m.canvasBGLeft, a = s.getRangeValue, r = m.canvasBGLeft + m.canvasBGWidth) : (o = "V", i = (s = (n = m.xConfigs[0]).scale).getRangeValue, a = m.canvasBGTop + m.canvasBGHeight - m.padding.top, r = m.canvasBGTop - m.padding.top), n.tickarguments && (y = n.tickarguments), t = n.style || {}, p.style = g(t["grid-line"] || {}), y.push(n.skipinfo || {}), y.push(n.dayinmajor || !1), c = (e = s).ticks.apply(e, y), p.showgridlines)
                                for (l = s.getDomain(), d = 0, u = c.length; d < u; d++)(p.showboundarygridlines || 0 !== d && d !== u - 1) && (+(h = c[d]) >= +(f = l)[0] && +h <= +f[1]) && v.push(["M", "function" == typeof i ? i.call(s, c[d]) : i, "function" == typeof a ? a.call(s, c[d]) : a, o, r]);
                            return v
                        }, n.draw = function() {
                            var e = this,
                                t = e.config,
                                n = t.styleGridLines,
                                i = e.getPathArr(),
                                a = (0, o.extend2)((0, o.extend2)({}, t.defaultStyle), n && t.style);
                            a[l] && (a[l] = "string" == typeof a[l] ? a[l].split(" ").filter(function(e) {
                                return s.test(e)
                            }).map(function(e) {
                                return +e
                            }) : a[l]), e.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "strato",
                                    label: "strato",
                                    isParent: !0
                                },
                                component: e,
                                label: "gridLine",
                                attr: {
                                    name: "grid-line-group"
                                },
                                id: "gridLine"
                            }), i.forEach(function(t, n) {
                                e.addGraphicalElement({
                                    el: "path",
                                    attr: {
                                        path: t
                                    },
                                    css: a,
                                    container: {
                                        label: "gridLine"
                                    },
                                    id: "grid-line-" + n,
                                    component: e,
                                    label: "line"
                                })
                            })
                        }, t
                    }(r.SmartRenderer);
                t["default"] = c
            },
            744: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = function(e) {
                    var t;
                    e.config.enableMouseTracking && (t = e.attachChild(a["default"], "mouseTracker"), e.addToEnv("mouseTracker", t), t.config.mouseTrackerEventAdded || (t.addEvents(), t.config.mouseTrackerEventAdded = !0))
                };
                var a = i(n(745))
            },
            745: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = i(n(471)),
                    s = n(180),
                    l = function(e) {
                        return function() {
                            e.deactivate(), e.fireEvent("canvasHovered", {
                                hoveredInfo: {},
                                e: {}
                            }), clearTimeout(e.domainValidationTimer), e.domainValidationTimer = setTimeout(function() {
                                e.activate()
                            }, 100)
                        }
                    },
                    c = function(e) {
                        function t() {
                            var t, n;
                            return (t = e.call(this) || this).handler = (n = (0, a["default"])(t), function(e) {
                                n.mouseEvtHandler(e)
                            }), t.eventsList.push("fc-mouseout"), t.active = !0, t
                        }(0, r["default"])(t, e);
                        var n = t.prototype;
                        return n.mouseEvtHandler = function(e) {
                            if (this.active) {
                                var t, n, i, a, r, o, l, c, d = e.originalEvent,
                                    u = this.getLinkedParent(),
                                    h = u.getChild(void 0, "dataset"),
                                    f = u.getChild(void 0, "timeInstanceMarker")[0],
                                    p = u.getChild(void 0, "timeSpanMinMarker")[0],
                                    g = u.getChild(void 0, "timeSpanFullMarker")[0],
                                    m = h.length;
                                if (n = (t = (0, s.getMouseCoordinate)(this.getFromEnv("chart-container"), d, this.getFromEnv("chart"))).chartX, i = t.chartY, (o = f.getHoveredMarker(n, i)) && o.hovered) this.fireEvent("canvasHovered", {
                                    hoveredInfo: o,
                                    e: e,
                                    i: m,
                                    chartX: n,
                                    chartY: i
                                });
                                else if (o && void 0 !== o.previouslyHoveredIndex && (this.fireEvent("canvasHovered", {
                                        hoveredInfo: o,
                                        e: e,
                                        i: m,
                                        chartX: n,
                                        chartY: i
                                    }), f.config.previouslyHoveredIndex = void 0), (o = p.getHoveredMarker(n, i)) && o.hovered) this.fireEvent("canvasHovered", {
                                    hoveredInfo: o,
                                    e: e,
                                    i: m,
                                    chartX: n,
                                    chartY: i
                                });
                                else {
                                    for (o && void 0 !== o.previouslyHoveredIndex && (this.fireEvent("canvasHovered", {
                                            hoveredInfo: o,
                                            e: e,
                                            i: m,
                                            chartX: n,
                                            chartY: i
                                        }), p.config.previouslyHoveredIndex = void 0); m--;)(r = (a = h[m])._getHoveredPlot && a._getHoveredPlot(n, i)) && r.hovered && (l = r, c = m);
                                    if (!l) {
                                        if ((o = g.getHoveredMarker(n, i)) && o.hovered) return void this.fireEvent("canvasHovered", {
                                            hoveredInfo: o,
                                            e: e,
                                            i: m,
                                            chartX: n,
                                            chartY: i
                                        });
                                        o && void 0 !== o.previouslyHoveredIndex && (this.fireEvent("canvasHovered", {
                                            hoveredInfo: o,
                                            e: e,
                                            i: m,
                                            chartX: n,
                                            chartY: i
                                        }), g.config.previouslyHoveredIndex = void 0)
                                    }
                                    this.fireEvent("canvasHovered", {
                                        hoveredInfo: l || r,
                                        e: e,
                                        i: c,
                                        chartX: n,
                                        chartY: i
                                    })
                                }
                            }
                        }, n.addEvents = function() {
                            var e, t = this.getLinkedParent(),
                                n = this.eventsList;
                            for (e in this._removeListners(), n) t.addEventListener(n[e], this.handler);
                            this.config.onDomainValidated = l(this), this.addExtEventListener("domainValidated", this.config.onDomainValidated, this.getFromEnv("chart"))
                        }, n._removeListners = function() {
                            var e, t = this.getLinkedParent(),
                                n = this.eventsList;
                            for (e in n) t.removeEventListener(n[e], this.handler);
                            this.removeExtEventListener("domainValidated", this.config.onDomainValidated, this.getFromEnv("chart"))
                        }, n.remove = function() {
                            var t;
                            this._removeListners();
                            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                            (t = e.prototype.remove).call.apply(t, [this].concat(i))
                        }, n.activate = function() {
                            this.active = !0
                        }, n.deactivate = function() {
                            this.active = !1, l()
                        }, t
                    }(o["default"]);
                t["default"] = c
            },
            746: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = function(e) {
                    e.config.enableMouseTracking && e.attachChild(a["default"], "tooltipHover").configure()
                };
                var a = i(n(747))
            },
            747: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t.createDivString = t["default"] = void 0;
                var a = i(n(194)),
                    r = i(n(199)),
                    o = function(e, t) {
                        return void 0 === e && (e = ""), void 0 === t && (t = ""), t && "<div " + e + ">" + t + "</div>"
                    };
                t.createDivString = o;
                var s = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, a["default"])(t, e);
                    var n = t.prototype;
                    return n.configure = function() {
                        e.prototype.configure.call(this);
                        var t, n = this.config,
                            i = this.getFromEnv("chartConfig"),
                            a = this.getFromEnv("mouseTracker");
                        n.showTooltip = i.showTooltip, !n.eventAdded && this.addExtEventListener("canvasHovered", (t = this, n.eventAdded = !0, function() {
                            switch (arguments[1].hoveredInfo && arguments[1].hoveredInfo.component && arguments[1].hoveredInfo.component.getType()) {
                                case "timeMarker":
                                    t._triggerMarkerMouseActions.apply(t, arguments);
                                    break;
                                default:
                                    t._triggerMouseActions.apply(t, arguments)
                            }
                        }), a)
                    }, n.mouseoutHandler = function(e, t, n, i) {
                        var a = this.config;
                        i && i.config && (i.setHoverOutEffect([n]), i._firePlotEvent && i._firePlotEvent("fc-mouseout", n, e)), a.showTooltip && this.getFromEnv("toolTipController").hide(a.currentToolTip), delete a._lastDatasetIndex, delete a._lastPointIndex
                    }, n._triggerMarkerMouseActions = function(e) {
                        var t, n, i = e.data,
                            a = this.getFromEnv("toolTipController"),
                            r = this.getFromEnv("tooltipStyle"),
                            s = i.chartX,
                            l = i.chartY,
                            c = this.getLinkedParent(),
                            d = c.getTranslation(),
                            u = i.hoveredInfo,
                            h = u.hovered,
                            f = this.config,
                            p = f.showTooltip,
                            g = u.component,
                            m = u.pointObj.hoveredMarkerDim || {},
                            v = "",
                            y = u.hovered && g.getToolTextConfiguration(m.toolTextArr, u.pointObj.type),
                            b = c.isWithinCanvas(s - (m.thresholdX || 0), l - (m.thresholdY || 0));
                        if (h && b) {
                            var _ = y.header,
                                x = y.body;
                            v = o(r.headerStyleString, _) + o(r.bodyStyleString, x), t = s, n = m.y - y.dimensions.height + d.y, p && (f.currentToolTip = a.drawAt(t, n, v, f.currentToolTip, c)), g.setHoverInEffect(u.pointIndex, u.pointObj.index, !1)
                        } else p && a.hide(f.currentToolTip), g.setHoverOutEffect()
                    }, n._triggerMouseActions = function(e) {
                        var t, n, i, a, r, s, l, c, d, u, h = this,
                            f = e.data,
                            p = h.getFromEnv("toolTipController"),
                            g = h.getFromEnv("tooltipStyle"),
                            m = f.i,
                            v = f.e,
                            y = f.chartX,
                            b = f.chartY,
                            _ = f.hoveredInfo,
                            x = m >= 0,
                            k = h.getLinkedParent(),
                            S = k.getChild(void 0, "dataset"),
                            w = h.config,
                            E = w._lastDatasetIndex,
                            C = w._lastPointIndex,
                            j = k.getTranslation(),
                            D = "",
                            M = "",
                            T = "",
                            I = _ && _.pointIndex,
                            L = k.isWithinCanvas(y, b);
                        if (x && (_.datasetIndex = m, u = h.getMouseEvents(v, _.datasetIndex, I, _.component.getName(), _.markerObj)), (!L || (!x || u && u.fireOut) && void 0 !== E) && (u && !u.events.length ? w.mouseoutTimer = setTimeout(function() {
                                h.mouseoutHandler(v, E, C, w._lastComponentHovered)
                            }, 20) : (h.mouseoutHandler(v, E, C, w._lastComponentHovered), clearTimeout(w.mouseoutTimer))), L && S.length && w.showTooltip) {
                            if (s = _.component.getFromEnv("xScale").getRange(), S.forEach(function(e, t) {
                                    "visible" === (d = e.config).visibility && (a = e._getTooltext(x, m === t, e._getHoveredBin()), T += a, d.dataInfo[e._getHoveredBin()] && a && (r = d.dataInfo[e._getHoveredBin()], c = e))
                                }), c) {
                                var A = c._getDateForToolText(c._getHoveredBin());
                                D = A.header, M = A.body
                            }
                            T = o(g.headerStyleString, D) + o(g.bodyStyleString, M + T), (t = x ? _.pointObj : r) && "" !== T && t.endXPosition > s[0] && t.x < s[1] ? w.currentToolTip = p.drawAt(t.x + (t.width || 0) / 2 + 5 + j.x, (t.colY || t.y) + j.y, T, w.currentToolTip, k) : p.hide(w.currentToolTip)
                        }
                        if (x && (n = u.events && u.events.length)) {
                            if (w._lastDatasetIndex = _.datasetIndex, w._lastPointIndex = I, l = w._lastComponentHovered = _.component, w._lastComponentHoveredName = l && l.getName(), l.setHoverInEffect([I]), w.showTooltip && "dataMarker" === l.getType()) {
                                var F = l._getTooltext(I);
                                D = F.header, M = F.body, T = o(g.headerStyleString, D) + o(g.bodyStyleString, M), w.currentToolTip = p.draw(v, T, w.currentToolTip)
                            }
                            for (i = 0; i < n; i += 1) l && l._firePlotEvent && l && l._firePlotEvent && l._firePlotEvent(u.events[i], I, v, _)
                        }
                    }, n.getMouseEvents = function(e, t, n, i) {
                        var a = this.config,
                            r = a._lastDatasetIndex,
                            o = a._lastPointIndex,
                            s = a._lastComponentHoveredName,
                            l = {
                                fireOut: !1,
                                events: []
                            };
                        switch (e.type) {
                            case "fc-click":
                                l.events.push("fc-click");
                                break;
                            case "fc-mousemove":
                                s === i && r === t && o === n ? (clearTimeout(a.mouseoutTimer), l.events.push("fc-mousemove")) : (l.events.push("fc-mouseover"), l.fireOut = !0);
                                break;
                            case "fc-mousedown":
                                s === i && r === t && o === n || (l.fireOut = !0, l.events.push("fc-mouseover")), l.events.push("fc-mousedown");
                                break;
                            case "fc-mouseover":
                                s === i && r === t && o === n ? clearTimeout(a.mouseoutTimer) : (l.fireOut = !0, l.events.push("fc-mouseover"));
                                break;
                            case "fc-mouseup":
                                l.events.push("fc-mouseup");
                                break;
                            case "fc-mouseout":
                                l.fireOut = !0
                        }
                        return l
                    }, t
                }(r["default"]);
                t["default"] = s
            },
            748: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = function(e) {
                    var t = e.config;
                    t.enableInteraction && !t.wheelEventAdded && (e.addEventListener("fc-wheel", a(e)), t.wheelEventAdded = !0)
                };
                var i = n(180),
                    a = function(e) {
                        return function(t) {
                            var n, a, r, o, s, l, c, d, u, h, f, p = e.getLinkedParent(),
                                g = e.config.xConfigs[0].scale,
                                m = p.getContextLimit(),
                                v = g.getRange(),
                                y = v[0],
                                b = v[1],
                                _ = t.originalEvent;
                            Math.abs(_.deltaY) > Math.abs(_.deltaX) ? (n = "vertical", a = _.deltaY) : (n = "horizontal", a = _.deltaX), "vertical" === n ? (o = (0, i.getMouseCoordinate)(e.getFromEnv("chart-container"), t.originalEvent, p), l = (s = e.getTranslation()) ? s.x : 0, y -= 2 * a * (d = (c = o.chartX - l) - y) / (h = d + (u = b - c)), b += 2 * a * u / h) : (a > 0 ? g.getDomainValue(b) < m[1] : g.getDomainValue(y) > m[0]) && (b += a, y += a), r = g.getDomainValue(y), f = g.getDomainValue(b), p.setFocusLimit([r, f])
                        }
                    }
            },
            749: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = function(e) {
                    var t = e.config;
                    t.enableInteraction && !t.dbTapEventAdded && (e.addEventListener("fc-dbclick", i(e)), t.dbTapEventAdded = !0)
                };
                var i = function(e) {
                        return function(t) {
                            var n, i, r = e.getLinkedParent(),
                                o = e.config.xConfigs[0].scale,
                                s = o.getRange(),
                                l = s[0],
                                c = s[1];
                            l += a, c -= a, n = o.getDomainValue(l), i = o.getDomainValue(c), r.setFocusLimit([n, i])
                        }
                    },
                    a = 20
            },
            750: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = function(e) {
                    var t = e.config;
                    t.enableInteraction && !t.swipeEventAdded && (e.addEventListener("fc-dragstart", a(e)), e.addEventListener("fc-dragmove", r(e)), e.addEventListener("fc-dragend", o(e)), t.swipeEventAdded = !0)
                };
                var i, a = function(e) {
                        return function() {
                            i = 0, e.getChildren("mouseTracker")[0].deactivate()
                        }
                    },
                    r = function(e) {
                        return function(t) {
                            var n, a, r = e.getLinkedParent(),
                                o = e.config.xConfigs[0].scale,
                                s = r.getContextLimit(),
                                l = o.getRange(),
                                c = l[0],
                                d = l[1],
                                u = t.originalEvent.data,
                                h = u[0] - i;
                            (h < 0 ? o.getDomainValue(d) < s[1] : o.getDomainValue(c) > s[0]) && (d -= h, c -= h), n = o.getDomainValue(c), a = o.getDomainValue(d), r.setFocusLimit([n, a]), i = u[0]
                        }
                    },
                    o = function(e) {
                        return function() {
                            e.getChildren("mouseTracker")[0].activate()
                        }
                    }
            },
            751: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = function(e) {
                    var t = e.config;
                    t.enableInteraction && !t.pinchEventAdded && (e.addEventListener("fc-pinchstart", r), e.addEventListener("fc-pinchmove", o(e)), t.pinchEventAdded = !0)
                };
                var i, a = n(180),
                    r = function(e) {
                        i = e.originalEvent.data.distanceX
                    },
                    o = function(e) {
                        return function(t) {
                            var n, r, o = e.getLinkedParent(),
                                s = e.config.xConfigs[0].scale,
                                l = s.getRange(),
                                c = l[0],
                                d = l[1],
                                u = t.originalEvent.data.distanceX,
                                h = u - i,
                                f = (0, a.getMouseCoordinate)(e.getFromEnv("chart-container"), t.originalEvent, o),
                                p = e.getTranslation(),
                                g = p ? p.x : 0,
                                m = f.chartX - g,
                                v = m - c,
                                y = d - m,
                                b = v + y;
                            i = u, c += 2 * h * v / b, d -= 2 * h * y / b, n = s.getDomainValue(c), r = s.getDomainValue(d), o.setFocusLimit([n, r])
                        }
                    }
            },
            752: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(753)),
                    r = i(n(754)),
                    o = i(n(767)),
                    s = i(n(773)),
                    l = i(n(775)),
                    c = i(n(777)),
                    d = i(n(780)),
                    u = i(n(781)),
                    h = n(180),
                    f = i(n(342)),
                    p = function(e) {
                        return e.split(" - ")[0]
                    },
                    g = function(e) {
                        return e ? "visible" : "hidden"
                    },
                    m = function(e) {
                        return "ohlc" === e || "candlestick" === e
                    };
                t["default"] = function(e) {
                    var t = e.getFromEnv("chart"),
                        n = e.getFromEnv("legendMap"),
                        i = e.config,
                        v = e.getFromEnv("dataSource").plotconfig || {},
                        y = e.getFromEnv("ordinalScale"),
                        b = i.isContext ? t.config.contextAxesX : t.config.focusAxesX,
                        _ = i.isContext ? t.config.contextAxesY : t.config.focusAxesY,
                        x = i.isContext,
                        k = i.multiSeriesDatasetMap,
                        S = e.getFromEnv("prediction"),
                        w = i.dataTable.getSchema().filter(function(e) {
                            return e.name === b[0].plot[0].value
                        })[0].format,
                        E = S ? f["default"].parser(w).parse(S.date) : h.UNDEF;
                    S.dateMs = S.enabled ? E ? E.getTime() : Date.now() : h.UNDEF, x && i.plotConfigs.forEach(function(e) {
                        var t = e.plots,
                            n = t.filter(function(e) {
                                return "column" === e.plottype
                            }).length > 1 ? "area" : null;
                        t.forEach(function(e) {
                            m(e.plottype) ? (e.value = e.close || e.low || e.high || e.open || [], e.plottype = e.typeinnavigator || "line") : "column" === e.plottype && (e.plottype = e.typeinnavigator || n || (e.value.length > 1 ? "area" : "line"))
                        })
                    }), i.plotConfigs.forEach(function(t) {
                        var f = b[t.x],
                            w = _[t.y],
                            E = f.binDecider,
                            C = f.scale,
                            j = w.scale,
                            D = w.plotstyle || {},
                            M = t.plots.filter(function(e) {
                                return "column" === e.plottype
                            }),
                            T = M.length,
                            I = M.map(function(e) {
                                return e.stack ? p(e.value[0]) : e.tableInfo.filterItem || p(e.value[0])
                            }),
                            L = 0;
                        t.plots.forEach(function(t) {
                            var b, _, M, A, F, O, P, N = t.tableInfo,
                                B = N.table,
                                R = N.filterItem,
                                H = w.plot[t.plotInAxisIndex],
                                G = H.style || {},
                                U = H.connectnulldata,
                                q = B.getData().data,
                                Y = B,
                                V = f.timeFormatterFn,
                                z = [H.value],
                                W = {};
                            if (H.group && (W[H.group] = R), b = (0, h.extend2)((0, h.extend2)({}, D), G), !x && m(t.plottype)) {
                                var X = t.close || t.open || t.high || t.low;
                                (X.length > 1 || R) && (t.plottype = "line", t.value = X)
                            }
                            if (A = t.plottype, _ = v[A] || {}, M = v.generic || {}, P = function(e) {
                                    switch (e) {
                                        case "column":
                                            return o["default"];
                                        case "candlestick":
                                            return s["default"];
                                        case "ohlc":
                                            return l["default"];
                                        default:
                                            return r["default"]
                                    }
                                }(A), "column" === A && (F = L++, O = T), m(A)) {
                                var J = (0, a["default"])([t.open || [t.open], t.high || [t.high], t.low || [t.low], t.close || [t.close]].filter(function(e) {
                                        return !!e
                                    })),
                                    K = H.open,
                                    Z = H.high,
                                    $ = H.low,
                                    Q = H.close;
                                K && z.push(K), Z && z.push(Z), $ && z.push($), Q && z.push(Q), z.length > 1 && z.shift(), J.forEach(function(n) {
                                    var i = e.attachChild(P, "dataset");
                                    Y.on("resultFlushed", function(e) {
                                        var t = e.data && e.data.legendInteracted;
                                        i.setData({
                                            data: e.sender.getData().data,
                                            skipLimitCalc: x,
                                            legendInteracted: t
                                        }, !0)
                                    }), i.addToEnv("binDecider", E), i.addToEnv("xScale", C), i.addToEnv("yScale", j), i.configure({
                                        data: q,
                                        scaleX: C,
                                        scaleY: j,
                                        formatterFn: w.formatterFn,
                                        timeFormatterFn: V,
                                        yAxisAlign: (0, h.pluck)(w.align, "left"),
                                        styleConfig: b,
                                        plotCosmetics: _,
                                        genericCosmetics: M,
                                        prefix: w.formatLabelPrefix,
                                        suffix: w.formatLabelSuffix,
                                        indices: [Y.indexOf(N.position)].concat(n.map(function(e) {
                                            return Y.indexOf(e)
                                        })),
                                        primaryColor: !0,
                                        type: A,
                                        series: t.value,
                                        measures: z,
                                        calculateFromContext: x,
                                        prediction: S,
                                        useNullStyles: !x
                                    })
                                })
                            } else if (t.stack && function(e) {
                                    return "area" === e || "smooth-area" === e || "step-area" === e || "column" === e
                                }(A)) {
                                var ee = Y.indexOf(N.position),
                                    te = t.value[0].split(" - ").slice(1).join(" - ") + " - sum",
                                    ne = (new c["default"]).setValueAccessor(function(e, t) {
                                        return n[p(t)].visibility ? e[Y.indexOf(t)] : 0
                                    }).setKeysAccessor(function() {
                                        return t.value.filter(function(e) {
                                            return Y.indexOf(e) >= 0
                                        })
                                    }).setOffset("log" === j.getType() ? u["default"] : d["default"]);
                                Y.addColumns({
                                    name: te,
                                    type: "number",
                                    calcFn: function(e, i) {
                                        return t.value.reduce(function(t, a) {
                                            return n[p(a)].visibility ? t + e[i[a]] : t
                                        }, 0)
                                    }
                                });
                                var ie = ne.generate(Y.getData().data),
                                    ae = ie.length;
                                Y.on("resultFlushed", function(t) {
                                    ie = ne.generate(t.sender.getData().data);
                                    var i = t.data && t.data.legendInteracted;
                                    if (ie.forEach(function(e) {
                                            var t = R ? k[R + " - " + e.key] : k[e.key],
                                                a = e.map(function(e) {
                                                    return [e.data[ee], e[0], e[1], e.data[Y.indexOf(te)]]
                                                }),
                                                r = t.config.series,
                                                o = n[r] && n[r].visibility;
                                            o === h.UNDEF && (o = !0), t.setData({
                                                visibility: g(o),
                                                data: a,
                                                skipLimitCalc: x,
                                                legendInteracted: i
                                            }, !0)
                                        }), 0 === ie.length) {
                                        var a = e.getChildren("dataset");
                                        a && a.forEach(function(e) {
                                            e.setData({
                                                data: [],
                                                legendInteracted: i
                                            }, !0)
                                        })
                                    }
                                }), ie.forEach(function(t, n) {
                                    var a = e.attachChild(P, "dataset"),
                                        r = p(t.key),
                                        o = t.map(function(e) {
                                            return [e.data[ee], e[0], e[1], e.data[Y.indexOf(te)]]
                                        });
                                    H.stack && (W[H.stack] = r), a.addToEnv("binDecider", E), a.addToEnv("xScale", C), a.addToEnv("yScale", j), R ? k[R + " - " + t.key] = a : k[t.key] = a, a.configure({
                                        data: o,
                                        datasetIndex: n,
                                        seriesLength: ae,
                                        scaleX: C,
                                        scaleY: j,
                                        timeFormatterFn: V,
                                        groupIndex: F,
                                        yAxisAlign: (0, h.pluck)(w.align, "left"),
                                        totalGroups: O,
                                        formatterFn: w.formatterFn,
                                        prefix: w.formatLabelPrefix,
                                        suffix: w.formatLabelSuffix,
                                        styleConfig: b,
                                        plotCosmetics: _,
                                        genericCosmetics: M,
                                        connectNullData: U,
                                        indices: [0, 2, 1, 3],
                                        primaryColor: y.getRangeValue(r),
                                        type: A,
                                        series: r,
                                        enableMarkers: i.enableMarkers,
                                        measures: z,
                                        calculateFromContext: x,
                                        seriesInfo: Object.assign({}, W),
                                        prediction: S,
                                        useNullStyles: !x
                                    })
                                })
                            } else t.value.forEach(function(a) {
                                var r = e.attachChild(P, "dataset"),
                                    o = t.stack ? p(a) : R || p(a);
                                Y.on("resultFlushed", function(e) {
                                    var t = r.config.series,
                                        i = e.data && e.data.legendInteracted,
                                        a = n[t] && n[t].visibility,
                                        o = r.config.groupIndex,
                                        s = r.config.totalGroups;
                                    if (a === h.UNDEF && (a = !0), i && "column" === A) {
                                        var l = I.filter(function(e) {
                                            return n[e].visibility
                                        });
                                        o = l.findIndex(function(e) {
                                            return e === t
                                        }), s = l.length
                                    }
                                    r.setData({
                                        visibility: g(a),
                                        data: e.sender.getData().data,
                                        skipLimitCalc: x,
                                        legendInteracted: i,
                                        groupIndex: o,
                                        totalGroups: s
                                    }, !0)
                                }), t.stack && (W[t.stack] = o), r.addToEnv("binDecider", E), r.addToEnv("xScale", C), r.addToEnv("yScale", j), r.configure({
                                    data: q,
                                    scaleX: C,
                                    scaleY: j,
                                    timeFormatterFn: V,
                                    groupIndex: F,
                                    totalGroups: O,
                                    yAxisAlign: (0, h.pluck)(w.align, "left"),
                                    formatterFn: w.formatterFn,
                                    prefix: w.formatLabelPrefix,
                                    suffix: w.formatLabelSuffix,
                                    styleConfig: b,
                                    plotCosmetics: _,
                                    genericCosmetics: M,
                                    connectNullData: U,
                                    indices: [Y.indexOf(N.position), Y.indexOf(a)],
                                    primaryColor: y.getRangeValue(o),
                                    type: A,
                                    series: o,
                                    enableMarkers: i.enableMarkers,
                                    measures: z,
                                    calculateFromContext: x,
                                    seriesInfo: Object.assign({}, W),
                                    prediction: S,
                                    useNullStyles: !x
                                })
                            })
                        })
                    })
                }
            },
            754: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = i(n(694)),
                    o = n(180),
                    s = i(n(755)),
                    l = n(188),
                    c = n(184),
                    d = i(n(705)),
                    u = i(n(761)),
                    h = i(n(764)),
                    f = i(n(765)),
                    p = i(n(763)),
                    g = i(n(766)),
                    m = i(n(767)),
                    v = i(n(772)),
                    y = 3.5,
                    b = 5.5,
                    _ = function(e, t) {
                        return (e + t) / 2
                    },
                    x = function(e, t) {
                        return Object.assign(e, t)
                    },
                    k = function(e) {
                        return void 0 === e && (e = ""), "" === e ? "M0,0" : e
                    },
                    S = function(e) {
                        var t = e.x,
                            n = e.y,
                            i = e.width;
                        return {
                            y: n,
                            height: e.height,
                            x: t - .0625,
                            width: i + .125
                        }
                    },
                    w = function(e, t) {
                        return e + "M" + t.x + "," + t.y + "L" + (t.x + t.width) + "," + t.y + "L" + (t.x + t.width) + "," + (t.y + t.height) + "L" + t.x + "," + (t.y + t.height) + "Z"
                    },
                    E = function(e, t, n, i, a) {
                        var r, o;
                        return e ? (r = n - e.x, o = i - e.y, {
                            pointIndex: t,
                            hovered: Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)) <= 5,
                            pointObj: e,
                            component: a
                        }) : {
                            pointIndex: t,
                            hovered: !1,
                            component: a
                        }
                    };

                function C(e) {
                    return "area" === e || "smooth-area" === e || "step-area" === e
                }

                function j(e) {
                    return "line" === e || "smooth-line" === e || "step-line" === e
                }(0, l.addDep)({
                    name: "continuousAnimation",
                    type: "animationRule",
                    extension: v["default"]
                });
                var D = function(e) {
                    function t() {
                        var t;
                        return (t = e.call(this) || this).getHoverInConfig = function(e, t, n) {
                            return void 0 === n && (n = !1), {
                                hoverIndices: e,
                                hovered: !0,
                                radius: t ? b : y,
                                isDsHovered: t,
                                isOtherDsHovered: n
                            }
                        }, t.getHoverOutConfig = function(e) {
                            return {
                                hoverIndices: e,
                                hovered: !1
                            }
                        }, t
                    }(0, a["default"])(t, e);
                    var n = t.prototype;
                    return n.getName = function() {
                        return "continuous"
                    }, n.getHighlightedIndices = function(e) {
                        var t = this.config.dataInfo,
                            n = [];
                        return t.forEach(function(t, i) {
                            t.y <= e.minValue && t.y >= e.maxValue && n.push(i)
                        }), n
                    }, n.__setDefaultConfig = function() {
                        e.prototype.__setDefaultConfig.call(this);
                        var t = this.config;
                        t["default-stroke"] = "9194CC", t["default-fill"] = "9194CC", t["default-anchor-stroke"] = (0, c.convertColor)("#ffffff"), t.type = "line", t.plotStyle = {}, t.nullPlotStyle = {}, t.linePlotStyle = {}, t.nullLinePlotStyle = {}, t.areaPlotStyle = {}, t.nullAreaPlotStyle = {}, t.anchorStyle = {}, t.anchorHoverInStyle = {}, t.anchorHoverOutStyle = {}, t.anchorHighlightObj = {}, t.defaultLineStyle = {
                            "stroke-opacity": 1,
                            "stroke-width": 2,
                            "stroke-dasharray": "none",
                            fill: "none"
                        }, t.defaultNullLineStyle = {
                            "stroke-opacity": 1,
                            "stroke-width": 2,
                            "stroke-dasharray": [10, 5],
                            fill: "none"
                        }, t.defaultLinePredictiveStyle = {
                            "stroke-opacity": 1,
                            "stroke-width": 1,
                            "stroke-dasharray": 5,
                            fill: "none"
                        }, t.defaultAreaStyle = {
                            "stroke-opacity": 1,
                            "stroke-width": 0,
                            "fill-opacity": .6
                        }, t.defaultNullAreaStyle = {
                            "stroke-opacity": 1,
                            "stroke-width": 0,
                            "fill-opacity": .3
                        }, t.defaultAreaPredictiveStyle = {
                            "stroke-opacity": 1,
                            opacity: .5
                        }, t.defaultAnchorStyle = {
                            "fill-opacity": 1,
                            "stroke-width": 1
                        }, t.willInjectNulls = !0
                    }, n.configureAttributes = function(e) {
                        var t = this,
                            n = this.config,
                            i = this.getId(),
                            a = this.getFromEnv("getStyleDef"),
                            s = !0;
                        if (e.hasOwnProperty("hoverIndices")) e.hovered ? (n.mode = "show", n.sharedAnchorIndices = e.hoverIndices) : (n.mode = "hide", n.hideIndices = n.lastShownIndices), n.radius = e.radius, n.isDsHovered = e.isDsHovered, n.isOtherDsHovered = e.isOtherDsHovered, n.hoverMode = !0;
                        else if (Object.entries(e).forEach(function(i) {
                                var r = i[0],
                                    s = i[1];
                                if ("primaryColor" === r) {
                                    t.parsePrediction(e);
                                    var l = s,
                                        d = e.plotCosmetics,
                                        u = e.genericCosmetics,
                                        h = e.styleConfig,
                                        f = e.type,
                                        p = n.plotStyle,
                                        g = n.predictiveStyleAttributes,
                                        m = n.nullPlotStyle,
                                        v = n.linePlotStyle,
                                        y = n.predictiveStyleAttributesLine,
                                        b = n.predictiveStyleAttributesArea,
                                        _ = n.nullLinePlotStyle,
                                        k = n.areaPlotStyle,
                                        S = n.nullAreaPlotStyle,
                                        w = n.anchorStyle,
                                        E = n.anchorHoverInStyle,
                                        j = n.anchorHighlightObj,
                                        D = a(u.style && u.style.plot),
                                        M = a(u.style && u.style["plot.null"]),
                                        T = a(u.style && u.style["plot:hover"]),
                                        I = a(u.style && u.style["plot:highlight"]),
                                        L = a(u.style && u.style.line),
                                        A = a(u.style && u.style["line.null"]),
                                        F = a(u.style && u.style.area),
                                        O = a(u.style && u.style["area.null"]),
                                        P = a(u.style && u.style.anchor),
                                        N = a(u.style && u.style["anchor:hover"]),
                                        B = a(u.style && u.style["anchor:highlight"]),
                                        R = a(d.style && d.style.plot),
                                        H = a(d.style && d.style["plot.null"]),
                                        G = a(d.style && d.style["plot.predictive"]),
                                        U = a(d.style && d.style["plot:hover"]),
                                        q = a(d.style && d.style["plot:highlight"]),
                                        Y = a(d.style && d.style.line),
                                        V = a(d.style && d.style["line.null"]),
                                        z = a(d.style && d.style["line.predictive"]),
                                        W = a(d.style && d.style.area),
                                        X = a(d.style && d.style["area.null"]),
                                        J = a(d.style && d.style["area.predictive"]),
                                        K = a(d.style && d.style.anchor),
                                        Z = a(d.style && d.style["anchor:hover"]),
                                        $ = a(d.style && d.style["anchor:highlight"]),
                                        Q = a(h.plot),
                                        ee = a(h["plot.null"]),
                                        te = a(h["plot.predictive"]),
                                        ne = a(h["plot:hover"]),
                                        ie = a(h["plot:highlight"]),
                                        ae = a(h.line),
                                        re = a(h["line.null"]),
                                        oe = a(h["line.predictive"]),
                                        se = a(h.area),
                                        le = a(h["area.null"]),
                                        ce = a(h["area.predictive"]),
                                        de = a(h.anchor),
                                        ue = a(h["anchor:hover"]),
                                        he = a(h["anchor:highlight"]);
                                    n.defaultLineStyle["stroke-linecap"] = C(f) ? "butt" : "round", n.defaultNullLineStyle["stroke-linecap"] = C(f) ? "butt" : "round", n.defaultLinePredictiveStyle["stroke-linecap"] = C(f) ? "butt" : "round", [v, n.defaultLineStyle, D, L, Q, R, Y, ae].reduce(x), [_, n.defaultNullLineStyle, M, A, ee, H, V, re].reduce(x), [y, te, G, z, oe].reduce(x), [k, n.defaultAreaStyle, D, F, Q, R, W, se].reduce(x), [S, n.defaultNullAreaStyle, M, O, ee, H, X, le].reduce(x), [b, te, G, J, ce].reduce(x), [w, n.defaultAnchorStyle, D, P, Q, R, K, de].reduce(x), p.fill = k.fill = (0, c.convertColor)((0, o.pluck)(l, n["default-fill"]), 100 * k["fill-opacity"]), m.fill = S.fill = (0, c.convertColor)((0, o.pluck)(S.fill, l, n["default-fill"]), 100 * S["fill-opacity"]), g.fill = b.fill = (0, c.convertColor)((0, o.pluck)(b.fill, l, n["default-fill"]), 100 * b["fill-opacity"]), v.fill = "none", _.fill = "none", y.fill = "none", k.stroke = (0, c.convertColor)((0, o.pluck)(l, n["default-stroke"]), 100 * k["stroke-opacity"]), S.stroke = (0, c.convertColor)((0, o.pluck)(S.stroke, l, n["default-stroke"]), 100 * S["stroke-opacity"]), b.stroke = (0, c.convertColor)((0, o.pluck)(b.stroke, l, n["default-stroke"]), 100 * b["stroke-opacity"]), v.stroke = (0, c.convertColor)((0, o.pluck)(l, n["default-stroke"]), 100 * v["stroke-opacity"]), _.stroke = (0, c.convertColor)((0, o.pluck)(_.stroke, l, n["default-stroke"]), 100 * _["stroke-opacity"]), y.stroke = (0, c.convertColor)((0, o.pluck)(y.stroke, l, n["default-stroke"]), 100 * y["stroke-opacity"]), p.stroke = C(f) ? k.stroke : v.stroke, m.stroke = C(f) ? S.stroke : _.stroke, g.stroke = C(f) ? b.stroke : y.stroke, w.fill = (0, c.convertColor)((0, o.pluck)(l, n["default-stroke"])), w.stroke = n["default-anchor-stroke"], [E, w, T, N, U, ne, Z, ue].reduce(x), [j, w, I, B, q, ie, $, he].reduce(x), Object.keys(Object.assign(Object.assign({}, E), j)).forEach(function(e) {
                                        n.anchorHoverOutStyle[e] = w[e] || ""
                                    }), Object.keys(j).length || (j = n.anchorHighlightObj = (0, o.extend2)({}, n.anchorHoverOutStyle)), n.connectNullData = (0, o.pluckNumber)(n.connectNullData, d.connectnulldata, u.connectnulldata, 0), delete k["fill-opacity"], delete S["fill-opacity"], delete k["stroke-opacity"], delete S["stroke-opacity"], delete v["stroke-opacity"], delete _["stroke-opacity"], delete n.predictiveStyleAttributesArea["fill-opacity"], delete n.predictiveStyleAttributesArea["stroke-opacity"], delete n.predictiveStyleAttributesLine["stroke-opacity"]
                                } else n[r] = s
                            }), n.useNullStyles || (n.nullAreaPlotStyle = Object.assign({}, n.areaPlotStyle), n.nullLinePlotStyle = Object.assign({}, n.linePlotStyle)), s = (0, r["default"])(n.areaPlotStyle, n.nullAreaPlotStyle) && (0, r["default"])(n.linePlotStyle, n.nullLinePlotStyle), n.connectNullData && s ? n.willInjectNulls = !1 : n.willInjectNulls = !0, !n.skipLimitCalc) {
                            var l = this.getFromEnv("chart");
                            n.limit = this._calculateLimits(), l.setYScaleLimit(n.scaleY.getId(), i, n.limit.y, n.limit.baseRequired), l.setXScaleLimit(n.scaleX.getId(), i, n.limit.x)
                        }
                    }, n.parsePrediction = function(e) {
                        this.config.prediction = e.prediction || this.config.prediction, this.parsePredictiveStyleAttributes()
                    }, n.parsePredictiveStyleAttributes = function() {
                        var e = {},
                            t = this.config;
                        t.predictiveStyleAttributesLine = {}, t.predictiveStyleAttributesArea = {}, t.prediction.enabled && (Object.assign(e, t.prediction.style.plot), Object.assign(t.predictiveStyleAttributesLine, t.defaultLinePredictiveStyle, t.prediction.style.plot, t.prediction.style.line), Object.assign(t.predictiveStyleAttributesArea, t.defaultAreaPredictiveStyle, t.prediction.style.plot, t.prediction.style.area)), t.predictiveStyleAttributes = e
                    }, n.getPadding = function() {
                        var e = this.getLinkedParent().config,
                            t = this.config,
                            n = e.enableMouseTracking ? this.getValueFromPx(b) : 1,
                            i = e.enableMarkers ? this.getValueFromPx(t.dataMarkerPadding) : 0;
                        return Math.max(n, i)
                    }, n._getRelevantInfo = function() {
                        var e = this.config;
                        return {
                            firstTimeStamp: e.firstTimeStamp,
                            timeStampGap: e.timeStampGap,
                            dataInfo: e.dataInfo,
                            fill: e.plotStyle.stroke
                        }
                    }, n.allocatePosition = function() {
                        var e, t, n, i, a, r, l, c, m, v, y, x, E, j, D, M = this.config,
                            T = M.indices,
                            I = T[0],
                            L = T[1],
                            A = T[2],
                            F = T[3],
                            O = M.type,
                            P = M.data,
                            N = M.dataInfo,
                            B = [],
                            R = this.getFromEnv("binDecider"),
                            H = this.getFromEnv("xScale"),
                            G = this.getFromEnv("yScale"),
                            U = R.getRangeThreshold()[2],
                            q = Number.parseFloat(M.nullLinePlotStyle["stroke-width"]),
                            Y = Number.parseFloat(M.predictiveStyleAttributesLine["stroke-width"]),
                            V = Number.parseFloat(M.linePlotStyle["stroke-width"]),
                            z = P.length,
                            W = H.getDomain(),
                            X = W[0],
                            J = W[1],
                            K = H.showPlotOverTick();
                        if (M.repositioningDone = this._isRepositioningNeeded()) {
                            if ("visible" !== M.visibility) return;
                            N = M.dataInfo = [], M.timeStampGap = U, M.availableWidth = H.getRangeValue(U) - H.getRangeValue(0), j = +H.getDomainValue(b) - +H.getDomainValue(0), M.actualStartDomain = +X - j, M.actualEndDomain = +J + j, P.forEach(function(t, s, u) {
                                D = t[I], c = t[L], n = D.start, i = D.end, a = _(n, i), r = u[s + 1], E = t[A], y = G.getRangeValue(E || Math.max(G.getDomain()[0], 0)), x = G.getRangeValue(c), s || (m = M.firstTimeStamp = n), ("area" !== O || (0, d["default"])(y)) && ((0, d["default"])(c) && (0, d["default"])(x) ? (v = H.getBinIndex(n, m), e = {
                                    startDate: n,
                                    endDate: i,
                                    timeInstant: K ? n : a,
                                    value: c,
                                    paddingInTimestamp: j,
                                    yBaseValue: "area" === O ? E : o.UNDEF,
                                    x: H.getRangeValue(new Date(n), new Date(i)),
                                    endXPosition: H.getRangeValue(new Date(n), new Date(i)),
                                    totalStackSum: (0, o.defined)(t[F]) ? t[F] : o.UNDEF,
                                    y: x,
                                    base: y,
                                    eventArgs: {
                                        index: s,
                                        dataValue: c
                                    }
                                }, N[v] = e, r ? (B.push(e), l = _(r[I].start, r[I].end), M.willInjectNulls && l - a > 1.5 * U && B.push(null)) : z - s == 1 && B.push(e)) : M.willInjectNulls && B.push(null))
                            }), t = new s["default"](function(e) {
                                switch (e) {
                                    case "area":
                                    case "smooth-area":
                                    case "step-area":
                                        return u["default"];
                                    case "line":
                                    case "smooth-line":
                                    case "step-line":
                                    default:
                                        return h["default"]
                                }
                            }(O)).setConnectUndefineds(M.connectNullData).setChunks({
                                def: {
                                    clipAdjustment: V
                                },
                                undef: {
                                    clipAdjustment: q
                                },
                                predictive: {
                                    clipAdjustment: Y
                                }
                            }).setCurve(function(e) {
                                switch (e) {
                                    case "smooth-line":
                                    case "smooth-area":
                                        return g["default"];
                                    case "step-area":
                                    case "step-line":
                                        return f["default"];
                                    case "line":
                                    case "area":
                                    default:
                                        return p["default"]
                                }
                            }(O)).setDefined(function(e) {
                                return !!e
                            }).setChunkDecider(function(e) {
                                return e.startDate >= M.prediction.dateMs ? "predictive" : "def"
                            }).setXAccessor(function(e) {
                                return e.x
                            }).setYAccessor(function(e) {
                                return e.y
                            }), C(O) && t.setYBaseAccessor(function(e) {
                                return e.base
                            }), M.chunks = t.generate(B), M.path = k(M.chunks.def.path), M.clipPath = k(M.chunks.def.clipRects.map(S).reduce(w, "")), M.nullPath = k(M.chunks.undef.path), M.nullClipPath = k(M.chunks.undef.clipRects.map(S).reduce(w, "")), M.predictivePath = k(M.chunks.predictive.path), M.predictiveClipPath = k(M.chunks.predictive.clipRects.map(S).reduce(w, "")), C(O) && (M.topChunks = t.getLineChunkerYTop().generate(B), M.topPath = k(M.topChunks.def.path), M.topClipPath = k(M.topChunks.def.clipRects.map(S).reduce(w, "")), M.topNullPath = k(M.topChunks.undef.path), M.topNullClipPath = k(M.topChunks.undef.clipRects.map(S).reduce(w, "")), M.topPredictivePath = k(M.topChunks.predictive.path), M.topPredictiveClipPath = k(M.topChunks.predictive.clipRects.map(S).reduce(w, "")))
                        }
                    }, n._isInvalidTooltext = function(e) {
                        var t = this.config;
                        if (!e || e.timeInstant < t.actualStartDomain || e.timeInstant > t.actualEndDomain) return !0
                    }, n._drawPlot = function() {
                        var e, t = this,
                            n = t.config,
                            i = n.linePlotStyle,
                            a = n.areaPlotStyle,
                            r = n.nullLinePlotStyle,
                            s = n.nullAreaPlotStyle,
                            l = n.predictiveStyleAttributesLine,
                            c = n.predictiveStyleAttributesArea,
                            d = n.dataInfo;
                        t.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group"
                            },
                            component: t,
                            label: "group",
                            id: "meso-line",
                            attr: {
                                name: "line-common-meso",
                                visibility: n.visibility
                            }
                        }), t.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "thermo",
                                label: "group"
                            },
                            component: t,
                            label: "group",
                            id: "thermo-line",
                            attr: {
                                name: "line-common-thermo",
                                visibility: n.visibility
                            }
                        }), t.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso-line",
                                label: "group"
                            },
                            component: t,
                            label: "group",
                            id: "meso-plot",
                            attr: {
                                name: "line-plot-meso",
                                visibility: n.visibility
                            }
                        }, !0), t.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "thermo-line",
                                label: "group"
                            },
                            component: t,
                            label: "group",
                            id: "thermo-plot",
                            attr: {
                                name: "line-plot-thermo",
                                visibility: n.visibility
                            }
                        }, !0), t.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "thermo-line",
                                label: "group"
                            },
                            component: t,
                            label: "group",
                            id: "thermo-anchor",
                            attr: {
                                name: "line-anchor-thermo",
                                visibility: n.visibility
                            }
                        }, !0), n.connectNullData && t.addGraphicalElement({
                            el: "path",
                            container: {
                                label: "group",
                                id: "meso-plot"
                            },
                            attr: Object.assign({
                                path: n.nullPath,
                                "clip-path": n.nullClipPath
                            }, j(n.type) ? r : s),
                            label: "path",
                            component: t
                        }, !0), t.addGraphicalElement({
                            el: "path",
                            container: {
                                label: "group",
                                id: "meso-plot"
                            },
                            attr: Object.assign({
                                path: n.path,
                                "clip-path": n.clipPath
                            }, j(n.type) ? i : a),
                            label: "path",
                            component: t
                        }, !0), n.prediction.enabled && t.addGraphicalElement({
                            el: "path",
                            container: {
                                label: "group",
                                id: "meso-plot"
                            },
                            attr: Object.assign({
                                path: n.predictivePath,
                                "clip-path": n.predictiveClipPath
                            }, j(n.type) ? l : c),
                            label: "path",
                            component: t
                        }, !0), n.topPath && (n.connectNullData && t.addGraphicalElement({
                            el: "path",
                            container: {
                                label: "group",
                                id: "thermo-plot"
                            },
                            attr: Object.assign({
                                path: n.topNullPath,
                                "clip-path": n.topNullClipPath
                            }, r),
                            label: "topPath",
                            component: t
                        }, !0), t.addGraphicalElement({
                            el: "path",
                            container: {
                                label: "group",
                                id: "thermo-plot"
                            },
                            attr: Object.assign({
                                path: n.topPath,
                                "clip-path": n.topClipPath
                            }, i),
                            label: "topPath",
                            component: t
                        }, !0), n.prediction.enabled && t.addGraphicalElement({
                            el: "path",
                            container: {
                                label: "group",
                                id: "meso-plot"
                            },
                            attr: Object.assign({
                                path: n.topPredictivePath,
                                "clip-path": n.topPredictiveClipPath
                            }, l),
                            label: "path",
                            component: t
                        }, !0)), "show" === n.mode ? n.sharedAnchorIndices && n.sharedAnchorIndices.length && n.sharedAnchorIndices.forEach(function(i) {
                            e = d[i], n.lastShownIndices = n.sharedAnchorIndices, e && !isNaN(e.value) && t.addGraphicalElement({
                                el: "path",
                                container: {
                                    label: "group",
                                    id: "thermo-anchor"
                                },
                                attr: Object.assign({
                                    path: (0, o.polyPathToPath)([2, e.x, e.y, n.radius, 0, 0]),
                                    visibility: "show"
                                }, n.isDsHovered ? n.anchorHoverInStyle : n.isOtherDsHovered ? n.anchorStyle : n.anchorHighlightObj),
                                id: "shared-anchor-" + i,
                                label: n.dsType + "-anchor"
                            })
                        }) : n.hideIndices && n.hideIndices.length && n.hideIndices.forEach(function(i) {
                            (e = d[i]) && !isNaN(e.value) && t.addGraphicalElement({
                                el: "path",
                                container: {
                                    label: "group",
                                    id: "meso-anchor"
                                },
                                attr: {
                                    visibility: "hidden"
                                },
                                id: "shared-anchor-" + i,
                                label: n.dsType + "-anchor"
                            })
                        })
                    }, n.setHoverInEffect = function(e, t, n) {
                        this.getFromEnv("animationManager").setAnimationState("mouseOver"), this.setData(this.getHoverInConfig(e, t, n), !0)
                    }, n._getHoveredPlot = function(e, t) {
                        var n, i, a, r, o, s, l, c = e,
                            d = t,
                            u = this.getFromEnv("xScale"),
                            h = [this.getChildren("pinMarker"), this.getChildren("flagMarker")],
                            f = this.config,
                            p = "visible" === f.visibility,
                            g = f.dataInfo,
                            m = g.length,
                            v = this.getLinkedParent().getTranslation(),
                            y = v.x,
                            b = v.y;
                        if (c -= y, d -= b, l = u.getDomainValue(c - 5).getTime(), s = (l - f.firstTimeStamp) / f.timeStampGap, i = Math.floor(Math.max(s, 0)), l = u.getDomainValue(c + 5).getTime(), s = (l - f.firstTimeStamp) / f.timeStampGap, a = Math.ceil(Math.min(s, m - 1)), h.forEach(function(e) {
                                var t = e;
                                !r && t && (t = t[0]) && (r = t._checkPointOverMarker(s, c, d, f.availableWidth))
                            }), !r)
                            for (o = a; o >= i && (n = g[o], !(r = p ? E(n, o, c, d, this) : {}).hovered); o--);
                        return !r && (r = {}), r.hovered ? r.binIndexHovered = r.pointIndex : (r.binIndexHovered = u.getBinIndex(u.getDomainValue(c), f.firstTimeStamp), r.pointObj = f.dataInfo[r.binIndexHovered] || u.getBinBounds(c, f.firstTimeStamp), r.component = this), f.binIndexHovered = r.binIndexHovered, r
                    }, t
                }(m["default"]);
                t["default"] = D
            },
            755: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(657)),
                    r = i(n(756)),
                    o = i(n(416)),
                    s = i(n(418)),
                    l = i(n(417)),
                    c = i(n(423)),
                    d = i(n(713)),
                    u = i(n(761)),
                    h = i(n(764)),
                    f = function(e) {
                        return "undef" !== e[0]
                    },
                    p = (0, a["default"])(function(e) {
                        e[0];
                        return e[1].clipRects
                    }),
                    g = function(e, t) {
                        return e.x - t.x
                    },
                    m = function(e) {
                        var t = e[0],
                            n = e[1];
                        return {
                            x: t.x + t.width,
                            y: (0, l["default"])([t.y, n.y, t.y + t.height, n.y + n.height]),
                            width: n.x - (t.x + t.width),
                            height: (0, s["default"])([t.y, n.y, t.y + t.height, n.y + n.height]) - (0, l["default"])([t.y, n.y, t.y + t.height, n.y + n.height])
                        }
                    },
                    v = function(e) {
                        return !(e.width < 1 || e.height < 1)
                    },
                    y = function(e) {
                        var t = e[0],
                            n = e[1];
                        return [t, Object.assign(n, {
                            clipRects: n.clipRects.filter(v)
                        })]
                    },
                    b = (0, c["default"])("def"),
                    _ = function(e, t, n) {
                        return n.indexOf(e) > n.indexOf(t) ? e : t
                    },
                    x = {
                        def: {},
                        undef: {}
                    },
                    k = function() {
                        function e(e) {
                            void 0 === e && (e = u["default"]), this.generator = new e, this.defined = (0, c["default"])(!0), this.chunkDecider = b, this.chunks = x, this.connectUndefineds = !1
                        }
                        var t = e.prototype;
                        return t.generate = function(e) {
                            var t, n = this,
                                i = this._getChunks(),
                                a = Object.entries(i).filter(f),
                                r = this.getDefined(),
                                s = e.filter(r),
                                l = this.getConnectUndefineds(),
                                c = this._computeDefinedSegments(l ? e : s),
                                u = this.getXAccessor(),
                                h = this.getYAccessor(),
                                b = this.getYBaseAccessor(),
                                _ = "",
                                x = [];
                            return _ = l ? this.generator.generate(s) : this.generator.setDefined(r).generate(e), x = a.map(function(e) {
                                var t = e[0],
                                    i = e[1];
                                return [t, {
                                    path: _,
                                    clipRects: n._computeSegmentChunks(t, c).map(function(e) {
                                        return function(e, t) {
                                            var n = t.clipAdjustment,
                                                i = void 0 === n ? 0 : n,
                                                a = (0, o["default"])(e, h),
                                                r = a[0],
                                                s = a[1],
                                                l = (0, o["default"])(e, u),
                                                c = l[0],
                                                d = l[1],
                                                f = (0, o["default"])(e, b),
                                                p = f[0],
                                                g = f[1],
                                                m = (0, o["default"])([c, d]),
                                                v = m[0],
                                                y = m[1],
                                                _ = (0, o["default"])([r, s, p, g]),
                                                x = _[0],
                                                k = _[1],
                                                S = x - i;
                                            return {
                                                x: v,
                                                y: S,
                                                width: Math.abs(y - v),
                                                height: Math.abs(k + i - S)
                                            }
                                        }(e, i)
                                    })
                                }]
                            }), t = l ? (0, d["default"])(p(x).sort(g)).map(m).filter(v) : [], Object.fromEntries(x.map(y).concat([
                                ["undef", {
                                    path: l && t.length > 0 ? _ : "",
                                    clipRects: t
                                }]
                            ]))
                        }, t.setXAccessor = function(e) {
                            return this.generator.setXAccessor(e), this
                        }, t.getXAccessor = function() {
                            return this.generator.getXAccessor()
                        }, t.setYAccessor = function(e) {
                            return this.generator.setYAccessor(e), this
                        }, t.getYAccessor = function() {
                            return this.generator.getYAccessor()
                        }, t.setYTopAccessor = function(e) {
                            return this.generator.setYTopAccessor ? this.generator.setYTopAccessor(e) : this.generator.setYAccessor(e), this
                        }, t.getYTopAccessor = function() {
                            return this.generator.getYTopAccessor ? this.generator.getYTopAccessor() : this.generator.getYAccessor()
                        }, t.setYBaseAccessor = function(e) {
                            return this.generator.setYBaseAccessor ? this.generator.setYBaseAccessor(e) : this.generator.setYAccessor(e), this
                        }, t.getYBaseAccessor = function() {
                            return this.generator.getYBaseAccessor ? this.generator.getYBaseAccessor() : this.generator.getYAccessor()
                        }, t.setDefined = function(e) {
                            return void 0 === e && (e = (0, c["default"])(!0)), this.defined = "function" == typeof e ? e : (0, c["default"])(!!e), this
                        }, t.getDefined = function() {
                            return this.defined
                        }, t.setCurve = function(e) {
                            return this.generator.setCurve(e), this
                        }, t.getCurve = function() {
                            return this.generator.getCurve()
                        }, t.getLineChunkerYTop = function() {
                            return this._areaLineChunker().setXAccessor(this.getXAccessor()).setYAccessor(this.getYTopAccessor())
                        }, t.getLineChunkerYBase = function() {
                            return this._areaLineChunker().setXAccessor(this.getXAccessor()).setYAccessor(this.getYBaseAccessor())
                        }, t.setChunkDecider = function(e) {
                            return void 0 === e && (e = b), this.chunkDecider = e, this
                        }, t.getChunkDecider = function() {
                            return this.chunkDecider
                        }, t.setChunks = function(e) {
                            return void 0 === e && (e = x), this._userChunks = Object.assign({}, e), this.chunks = (0, r["default"])(e, x), this
                        }, t.getChunks = function() {
                            return this._userChunks || this.chunks
                        }, t._getChunks = function() {
                            return this.chunks
                        }, t.setConnectUndefineds = function(e) {
                            return void 0 === e && (e = !1), this.connectUndefineds = e, this
                        }, t.getConnectUndefineds = function() {
                            return this.connectUndefineds
                        }, t._areaLineChunker = function() {
                            return new e(h["default"]).setChunkDecider(this.getChunkDecider()).setChunks(this.getChunks()).setConnectUndefineds(this.getConnectUndefineds()).setCurve(this.getCurve()).setDefined(this.getDefined())
                        }, t._computeDefinedSegments = function(e) {
                            var t = this,
                                n = !0;
                            return e.reduce(function(e, i) {
                                if (!t.defined(i)) return n = !0, e;
                                n ? (e.push([i]), n = !1) : e[e.length - 1].push(i);
                                return e
                            }, [])
                        }, t._computeSegmentChunks = function(e, t) {
                            var n = this,
                                i = Object.keys(this.chunks);
                            return t.reduce(function(t, a) {
                                var r = !0,
                                    o = a.reduce(function(t, o, s) {
                                        var l = n.getChunkDecider()(o),
                                            c = a[s - 1],
                                            d = a[s + 1];
                                        if (l === e) r ? (t.push([o]), r = !1) : t[t.length - 1].push(o);
                                        else {
                                            var u = !1;
                                            if (null != c) _(n.getChunkDecider()(c), l, i) === e && (r ? (t.push([o]), r = !1) : t[t.length - 1].push(o), u = !0, r = !1);
                                            if (u || null == d) u || (r = !0);
                                            else _(l, n.getChunkDecider()(d), i) === e ? (t.push([o]), u = !0, r = !1) : r = !0
                                        }
                                        return t
                                    }, []);
                                return o && o.length ? t.concat(o) : t
                            }, [])
                        }, e
                    }();
                t["default"] = k
            },
            761: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(762)),
                    r = i(n(423)),
                    o = i(n(763)),
                    s = i(n(764)),
                    l = function() {
                        function e() {
                            this.xTopAccessor = function(e) {
                                return e[0]
                            }, this.xBaseAccessor = null, this.yTopAccessor = (0, r["default"])(0), this.yBaseAccessor = function(e) {
                                return e[1]
                            }, this.isDefined = (0, r["default"])(!0), this.Curve = o["default"], this.ctx = null, this._output = null
                        }
                        var t = e.prototype;
                        return t.generate = function(e) {
                            void 0 === e && (e = []);
                            var t, n, i, r, o, s = e.length,
                                l = !1,
                                c = new Array(s),
                                d = new Array(s);
                            for (null !== this.ctx && "undefined" != typeof this.ctx || (o = new a["default"], this._output = new this.Curve(o)), t = 0; t <= s; ++t) {
                                if (r = e[t], !(t < s && this.isDefined(r, t, e)) === l)
                                    if (l = !l) n = t, this._output.areaStart(), this._output.lineStart();
                                    else {
                                        for (this._output.lineEnd(), this._output.lineStart(), i = t - 1; i >= n; --i) this._output.point(c[i], d[i]);
                                        this._output.lineEnd(), this._output.areaEnd()
                                    }
                                l && (c[t] = +this.xTopAccessor(r, t, e), d[t] = +this.yTopAccessor(r, t, e), this._output.point(this.xBaseAccessor ? +this.xBaseAccessor(r, t, e) : c[t], this.yBaseAccessor ? +this.yBaseAccessor(r, t, e) : d[t]))
                            }
                            if (o) return this._output = null, o.toString()
                        }, t.setXAccessor = function(e) {
                            return void 0 === e && (e = function(e) {
                                return e[0]
                            }), this.xTopAccessor = "function" == typeof e ? e : (0, r["default"])(+e), this.xBaseAccessor = null, this
                        }, t.getXAccessor = function() {
                            return this.xTopAccessor
                        }, t.setXTopAccessor = function(e) {
                            return void 0 === e && (e = function(e) {
                                return e[0]
                            }), this.xTopAccessor = "function" == typeof e ? e : (0, r["default"])(+e), this
                        }, t.getXTopAccessor = function() {
                            return this.xTopAccessor
                        }, t.setXBaseAccessor = function(e) {
                            return this.xBaseAccessor = null == e ? null : "function" == typeof e ? e : (0, r["default"])(+e), this
                        }, t.getXBaseAccessor = function() {
                            return this.xBaseAccessor
                        }, t.setYAccessor = function(e) {
                            return void 0 === e && (e = function(e) {
                                return e[1]
                            }), this.yTopAccessor = "function" == typeof e ? e : (0, r["default"])(+e), this.yBaseAccessor = null, this
                        }, t.getYAccessor = function() {
                            return this.yTopAccessor
                        }, t.setYTopAccessor = function(e) {
                            return void 0 === e && (e = function(e) {
                                return e[1]
                            }), this.yTopAccessor = "function" == typeof e ? e : (0, r["default"])(+e), this
                        }, t.getYTopAccessor = function() {
                            return this.yTopAccessor
                        }, t.setYBaseAccessor = function(e) {
                            return this.yBaseAccessor = null == e ? null : "function" == typeof e ? e : (0, r["default"])(+e), this
                        }, t.getYBaseAccessor = function() {
                            return this.yBaseAccessor
                        }, t.setDefined = function(e) {
                            return void 0 === e && (e = (0, r["default"])(!0)), this.isDefined = "function" == typeof e ? e : (0, r["default"])(!!e), this
                        }, t.getDefined = function() {
                            return this.isDefined
                        }, t.setCurve = function(e) {
                            return void 0 === e && (e = o["default"]), this.Curve = e, null !== this.ctx && "undefined" != typeof this.ctx && (this._output = new this.Curve(this.ctx)), this
                        }, t.getCurve = function() {
                            return this.Curve
                        }, t.setContext = function(e) {
                            return null == e ? (this.ctx = null, this._output = this._ctx) : (this.ctx = e, this._output = new this.Curve(this.ctx)), this
                        }, t.getContext = function() {
                            return this.ctx
                        }, t._areaLine = function() {
                            return (new s["default"]).setDefined(this.isDefined).setCurve(this.Curve).setContext(this.ctx)
                        }, t.getLineXBase = function() {
                            return this._areaLine().setXAccessor(this.xTopAccessor).setYAccessor(this.yTopAccessor)
                        }, t.getLineYBase = function() {
                            return this._areaLine().setXAccessor(this.xTopAccessor).setYAccessor(this.yTopAccessor)
                        }, t.getLineYTop = function() {
                            return this._areaLine().setXAccessor(this.xTopAccessor).setYAccessor(this.yTopAccessor)
                        }, t.getLineXTop = function() {
                            return this._areaLine().setXAccessor(this.xBaseAccessor).setYAccessor(this.yBaseAccessor)
                        }, e
                    }();
                t["default"] = l
            },
            762: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = Math.PI,
                    a = 2 * i,
                    r = a - 1e-6,
                    o = function() {
                        function e() {
                            this._clear()
                        }
                        var t = e.prototype;
                        return t.moveTo = function(e, t) {
                            this._x0 = this._x1 = +e, this._y0 = this._y1 = +t, this.pathStr += "M" + this._x0 + "," + this._y0
                        }, t.lineTo = function(e, t) {
                            this._x1 = +e, this._y1 = +t, this.pathStr += "L" + this._x1 + "," + this._y1
                        }, t.quadraticCurveTo = function(e, t, n, i) {
                            this._x1 = +n, this._y1 = +i;
                            var a = +e,
                                r = +t;
                            this.pathStr += "Q" + a + "," + r + "," + this._x1 + "," + this._y1
                        }, t.bezierCurveTo = function(e, t, n, i, a, r) {
                            this._x1 = +a, this._y1 = +r;
                            var o = +e,
                                s = +t,
                                l = +n,
                                c = +i;
                            this.pathStr += "C" + o + "," + s + "," + l + "," + c + "," + this._x1 + "," + this._y1
                        }, t.rect = function(e, t, n, i) {
                            var a = +n,
                                r = +i;
                            this._x0 = this._x1 = +e, this._y0 = this._y1 = +t, this.pathStr += "M" + this._x0 + "," + this._y0 + "h" + a + "v" + r + "h" + -a + "Z"
                        }, t.arcTo = function(e, t, n, a, r) {
                            var o, s, l, c, d, u, h, f, p, g, m, v, y, b, _, x, k = +e,
                                S = +n,
                                w = +t,
                                E = +a,
                                C = +r;
                            l = S - k, c = E - w, h = (d = (_ = this._x1) - k) * d + (u = (x = this._y1) - w) * u, C = Math.max(C, 0), null === this._x1 ? (this._x1 = k, this._y1 = w, this.pathStr += "M" + this._x1 + "," + this._y1) : h > 1e-6 && (Math.abs(u * l - c * d) > 1e-6 && C ? (g = l * l + c * c, p = (o = S - _) * o + (s = E - x) * s, m = Math.sqrt(g), f = Math.sqrt(h), v = (b = C * Math.tan((i - Math.acos((g + h - p) / (2 * m * f))) / 2)) / f, y = b / m, Math.abs(v - 1) > 1e-6 && (this.pathStr += "L" + (k + v * d) + "," + (w + v * u)), this._x1 = k + y * l, this._y1 = w + y * c, this.pathStr += "A" + C + "," + C + ",0,0," + +(u * o > d * s) + "," + this._x1 + "," + this._y1) : (this._x1 = k, this._y1 = w, this.pathStr += "L" + this._x1 + "," + this._y1))
                        }, t.arc = function(e, t, n, o, s, l) {
                            void 0 === l && (l = !1);
                            var c = +e,
                                d = +t,
                                u = +n,
                                h = +o,
                                f = +s,
                                p = !!l,
                                g = u * Math.cos(h),
                                m = u * Math.sin(h),
                                v = c + g,
                                y = d + m,
                                b = Number(!p),
                                _ = p ? h - f : f - h;
                            Math.max(u, 0), null === this._x1 ? this.pathStr += "M" + v + "," + y : (Math.abs(this._x1 - v) > 1e-6 || Math.abs(this._y1 - y) > 1e-6) && (this.pathStr += "L" + v + "," + y), u && (_ < 0 && (_ = _ % a + a), _ > r ? (this._x1 = v, this._y1 = y, this.pathStr += "A" + u + "," + u + ",0,1," + b + "," + (c - g) + "," + (d - m), this.pathStr += "A" + u + "," + u + ",0,1," + b + "," + this._x1 + "," + this._y1) : _ > 1e-6 && (this._x1 = c + u * Math.cos(f), this._y1 = d + u * Math.sin(f), this.pathStr += "A" + u + "," + u + ",0," + +(_ >= i) + "," + b + "," + this._x1 + "," + this._y1))
                        }, t.closePath = function() {
                            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this.pathStr += "Z")
                        }, t.toString = function() {
                            return this.pathStr
                        }, t._clear = function() {
                            this._x0 = this._y0 = this._x1 = this._y1 = null, this.pathStr = ""
                        }, e
                    }();
                t["default"] = o
            },
            763: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = function() {
                    function e(e) {
                        this._ctx = e
                    }
                    var t = e.prototype;
                    return t.areaStart = function() {
                        this._line = 0
                    }, t.areaEnd = function() {
                        this._line = NaN
                    }, t.lineStart = function() {
                        this._point = 0
                    }, t.lineEnd = function() {
                        (this._line || 0 !== this._line && 1 === this._point) && this._ctx.closePath(), this._line = 1 - this._line
                    }, t.point = function(e, t) {
                        var n = +e,
                            i = +t;
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._ctx.lineTo(n, i) : this._ctx.moveTo(n, i);
                                break;
                            case 1:
                                this._point = 2;
                            default:
                                this._ctx.lineTo(n, i)
                        }
                    }, e
                }();
                t["default"] = i
            },
            764: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(762)),
                    r = i(n(423)),
                    o = i(n(763)),
                    s = function() {
                        function e() {
                            this.xAccessor = function(e) {
                                return e[0]
                            }, this.yAccessor = function(e) {
                                return e[1]
                            }, this.isDefined = (0, r["default"])(!0), this.Curve = o["default"], this.ctx = null, this._output = null
                        }
                        var t = e.prototype;
                        return t.generate = function(e) {
                            void 0 === e && (e = []);
                            var t, n, i, r = 0,
                                o = e.length;
                            for (null !== this.ctx && "undefined" != typeof this.ctx || (i = new a["default"], this._output = new this.Curve(i)), r = 0; r <= o; ++r) t = e[r], n ? r < o && this.isDefined(t, r, e) ? this._output.point(this.xAccessor(t, r, e), this.yAccessor(t, r, e)) : (this._output.lineEnd(), n = !1) : r < o && this.isDefined(t, r, e) && (n = !0, this._output.lineStart(), this._output.point(this.xAccessor(t, r, e), this.yAccessor(t, r, e)));
                            if (i) return this._output = null, i.toString()
                        }, t.setXAccessor = function(e) {
                            return void 0 === e && (e = function(e) {
                                return e[0]
                            }), this.xAccessor = "function" == typeof e ? e : (0, r["default"])(+e), this
                        }, t.getXAccessor = function() {
                            return this.xAccessor
                        }, t.setYAccessor = function(e) {
                            return void 0 === e && (e = function(e) {
                                return e[1]
                            }), this.yAccessor = "function" == typeof e ? e : (0, r["default"])(+e), this
                        }, t.getYAccessor = function() {
                            return this.yAccessor
                        }, t.setDefined = function(e) {
                            return void 0 === e && (e = (0, r["default"])(!0)), this.isDefined = "function" == typeof e ? e : (0, r["default"])(!!e), this
                        }, t.getDefined = function() {
                            return this.isDefined
                        }, t.setCurve = function(e) {
                            return void 0 === e && (e = o["default"]), this.Curve = e, "undefined" == typeof this.ctx && null === this.ctx || (this._output = new this.Curve(this.ctx)), this
                        }, t.getCurve = function() {
                            return this.Curve
                        }, t.setContext = function(e) {
                            return null == e ? (this.ctx = null, this._output = this.ctx) : (this.ctx = e, this._output = new this.Curve(this.ctx)), this
                        }, t.getContext = function() {
                            return this.ctx
                        }, e
                    }();
                t["default"] = s
            },
            765: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = t.StepAfter = t.StepBefore = void 0;
                var a = i(n(194)),
                    r = function() {
                        function e(e, t) {
                            void 0 === t && (t = .5), this._ctx = e, this._factor = t
                        }
                        var t = e.prototype;
                        return t.areaStart = function() {
                            this._line = 0
                        }, t.areaEnd = function() {
                            this._line = NaN
                        }, t.lineStart = function() {
                            this._x = this._y = NaN, this._point = 0
                        }, t.lineEnd = function() {
                            this._factor > 0 && this._factor < 1 && 2 === this._point && this._ctx.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._ctx.closePath(), this._line >= 0 && (this._factor = 1 - this._factor, this._line = 1 - this._line)
                        }, t.point = function(e, t) {
                            var n = +e,
                                i = +t;
                            switch (this._point) {
                                case 0:
                                    this._point = 1, this._line ? this._ctx.lineTo(n, i) : this._ctx.moveTo(n, i);
                                    break;
                                case 1:
                                    this._point = 2;
                                default:
                                    if (this._factor <= 0) this._ctx.lineTo(this._x, i), this._ctx.lineTo(n, i);
                                    else {
                                        var a = this._x * (1 - this._factor) + n * this._factor;
                                        this._ctx.lineTo(a, this._y), this._ctx.lineTo(a, i)
                                    }
                            }
                            this._x = n, this._y = i
                        }, e
                    }(),
                    o = function(e) {
                        function t(t) {
                            return e.call(this, t, 1) || this
                        }
                        return (0, a["default"])(t, e), t
                    }(r);
                t.StepAfter = o;
                var s = function(e) {
                    function t(t) {
                        return e.call(this, t, 0) || this
                    }
                    return (0, a["default"])(t, e), t
                }(r);
                t.StepBefore = s;
                var l = r;
                t["default"] = l
            },
            766: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = function(e) {
                        return e < 0 ? -1 : 1
                    },
                    a = function() {
                        function e(e) {
                            this._ctx = e
                        }
                        var t = e.prototype;
                        return t.areaStart = function() {
                            this._line = 0
                        }, t.areaEnd = function() {
                            this._line = NaN
                        }, t.lineStart = function() {
                            this._x0 = this._x1 = NaN, this._y0 = this._y1 = NaN, this._t0 = NaN, this._point = 0
                        }, t.lineEnd = function() {
                            switch (this._point) {
                                case 2:
                                    this._ctx.lineTo(this._x1, this._y1);
                                    break;
                                case 3:
                                    this._monotoneCurveTo(this._t0, this._slope2(this._t0))
                            }(this._line || 0 !== this._line && 1 === this._point) && this._ctx.closePath(), this._line = 1 - this._line
                        }, t.point = function(e, t) {
                            var n = NaN,
                                i = +e,
                                a = +t;
                            if (i !== this._x1 || a !== this._y1) {
                                switch (this._point) {
                                    case 0:
                                        this._point = 1, this._line ? this._ctx.lineTo(i, a) : this._ctx.moveTo(i, a);
                                        break;
                                    case 1:
                                        this._point = 2;
                                        break;
                                    case 2:
                                        this._point = 3, n = this._slope3(i, a), this._monotoneCurveTo(this._slope2(n), n);
                                        break;
                                    default:
                                        n = this._slope3(i, a), this._monotoneCurveTo(this._t0, n)
                                }
                                this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = a, this._t0 = n
                            }
                        }, t._monotoneCurveTo = function(e, t) {
                            var n = this._x0,
                                i = this._y0,
                                a = this._x1,
                                r = this._y1,
                                o = (a - n) / 3;
                            this._ctx.bezierCurveTo(n + o, i + o * e, a - o, r - o * t, a, r)
                        }, t._slope2 = function(e) {
                            var t = this._x1 - this._x0;
                            return t ? (3 * (this._y1 - this._y0) / t - e) / 2 : e
                        }, t._slope3 = function(e, t) {
                            var n = this._x1 - this._x0,
                                a = e - this._x1,
                                r = (this._y1 - this._y0) / (n || a < 0 && -0),
                                o = (t - this._y1) / (a || n < 0 && -0),
                                s = (r * a + o * n) / (n + a);
                            return (i(r) + i(o)) * Math.min(Math.abs(r), Math.abs(o), .5 * Math.abs(s)) || 0
                        }, e
                    }();
                t["default"] = a
            },
            767: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(180),
                    o = i(n(417)),
                    s = i(n(418)),
                    l = n(188),
                    c = i(n(705)),
                    d = i(n(199)),
                    u = i(n(768)),
                    h = i(n(769)),
                    f = function(e, t) {
                        return Object.assign(e, t)
                    },
                    p = function(e) {
                        return [e.start, e.end]
                    },
                    g = function(e, t, n, i) {
                        return e && t <= 0 || n[1] < i[0] || n[0] > i[1]
                    },
                    m = r.hasTouch ? r.TOUCH_THRESHOLD_PIXELS : r.CLICK_THRESHOLD_PIXELS;
                (0, l.addDep)({
                    name: "timeseriesColumnAnimation",
                    type: "animationRule",
                    extension: u["default"]
                });
                var v = function(e) {
                    function t() {
                        var t;
                        return (t = e.call(this) || this).registerFactory("markerFactory", h["default"]), t._getFirstValidData = function(e, t) {
                            var n, i = e.length;
                            for (n = 0; n < i; n++)
                                if (e[0] && e[0][t] !== r.UNDEF) return e[0][t];
                            return r.UNDEF
                        }, t.config.hoverInfo = [], t
                    }(0, a["default"])(t, e);
                    var n = t.prototype;
                    return n.getHoverInConfig = function(e) {
                        return {
                            style: this.config.hoverInStyle,
                            hoverIndices: e,
                            hovered: !0
                        }
                    }, n.getHighlightConfig = function(e) {
                        return {
                            style: this.config.highlightStyle,
                            hoverIndices: e,
                            hovered: !1
                        }
                    }, n.getHoverOutConfig = function(e) {
                        return {
                            style: this.config.hoverOutStyle,
                            hoverIndices: e,
                            hovered: !1
                        }
                    }, n.getType = function() {
                        return "dataset"
                    }, n.getName = function() {
                        return "timeseriesColumn"
                    }, n.__setDefaultConfig = function() {
                        e.prototype.__setDefaultConfig.call(this);
                        var t = this.config;
                        t["default-plotSpacePercent"] = 30, t.visibility = "visible", t.prevBoundaryInfo = {}, t.prevDataInfo = [], t.dataMarkerPadding = 0, t.style = {}, t.hoverInStyle = {}, t.highlightStyle = {}, t.hoverOutStyle = {}, t.defaultStyle = {
                            "stroke-width": 1,
                            "fill-opacity": 1,
                            "stroke-opacity": 1,
                            opacity: 1
                        }, t.defaultPredictedDataStyle = {
                            "stroke-width": 1,
                            "fill-opacity": .2,
                            "stroke-opacity": 1,
                            "stroke-dasharray": 5
                        }, t.defaultHoverInStyle = {
                            opacity: .8
                        }, t.defaultHighlightStyle = {
                            opacity: .8
                        }
                    }, n.configureAttributes = function(e) {
                        var t, n = this.getFromEnv("chart-attrib"),
                            i = this.config;
                        if (e.hasOwnProperty("hoverIndices")) i.hoverInfo.push(e), i.hoverMode = !0;
                        else {
                            for (t in e)
                                if ("primaryColor" === t) {
                                    var a = e.plotCosmetics,
                                        o = e.genericCosmetics,
                                        s = e[t],
                                        l = void 0,
                                        c = this.getFromEnv("getStyleDef"),
                                        d = c(o.style && o.style.plot),
                                        u = c(o.style && o.style["plot:hover"]),
                                        h = c(o.style && o.style["plot:highlight"]),
                                        p = c(a.style && a.style.plot),
                                        g = c(e.styleConfig && e.styleConfig.plot),
                                        m = c(a.style && a.style.column),
                                        v = c(e.styleConfig && e.styleConfig.column),
                                        y = c(a.style && a.style["plot:hover"]),
                                        b = c(a.style && a.style["plot:highlight"]),
                                        _ = c(e.styleConfig && e.styleConfig["plot:hover"]),
                                        x = c(e.styleConfig && e.styleConfig["plot:highlight"]),
                                        k = c(a.style && a.style["column:hover"]),
                                        S = c(a.style && a.style["column:highlight"]),
                                        w = c(e.styleConfig && e.styleConfig["column:hover"]),
                                        E = c(e.styleConfig && e.styleConfig["column:highlight"]),
                                        C = i.style,
                                        j = i.hoverOutStyle,
                                        D = i.hoverInStyle,
                                        M = i.highlightStyle;
                                    for (l in [C, i.defaultStyle, d, p, g, m, v].reduce(f), [D, i.defaultHoverInStyle, u, y, k, _, w].reduce(f), [M, i.defaultHighlightStyle, h, b, S, x, E].reduce(f), C.stroke = (0, r.convertColor)((0, r.pluck)(C.stroke, s, i["default-stroke"]), 100 * (0, r.pluckNumber)(C["stroke-opacity"], 1)), C.fill = (0, r.convertColor)((0, r.pluck)(s, C.stroke, i["default-fill"]), 100 * (0, r.pluckNumber)(C["fill-opacity"], 1)), D.fill && (D.fill = (0, r.convertColor)(D.fill, 100 * (0, r.pluckNumber)(D["fill-opacity"], C["fill-opacity"]))), D.stroke && (D.stroke = (0, r.convertColor)(D.stroke, 100 * (0, r.pluckNumber)(D["stroke-opacity"], C["stroke-opacity"]))), M.fill && (M.fill = (0, r.convertColor)(M.fill, 100 * (0, r.pluckNumber)(M["fill-opacity"], C["fill-opacity"]))), M.stroke && (M.stroke = (0, r.convertColor)(M.stroke, 100 * (0, r.pluckNumber)(M["stroke-opacity"], C["stroke-opacity"]))), Object.assign(Object.assign({}, D), M)) j[l] = (0, r.pluck)(C[l], "");
                                    (0, r.defined)(j["stroke-dasharray"]) && (j["stroke-dasharray"] = null), i.plotBorderThickness = C["stroke-width"], i.opacity = C.opacity, i["fill-opacity"] = C["fill-opacity"], i["stroke-opacity"] = C["stroke-opacity"], delete C.opacity, delete C["fill-opacity"], delete C["stroke-opacity"]
                                } else i[t] = e[t];
                            if (i.plotSpacePercent = (0, r.pluckNumber)(n.plotspacepercent, i["default-plotSpacePercent"]), !i.skipLimitCalc) {
                                i.limit = this._calculateLimits();
                                var T = this.getFromEnv("chart");
                                T.setYScaleLimit(i.scaleY.getId(), this.getId(), i.limit.y, i.limit.baseRequired), T.setXScaleLimit(i.scaleX.getId(), this.getId(), i.limit.x)
                            }
                        }
                        this.parsePrediction(e)
                    }, n.getValueFromPx = function(e) {
                        var t = this.getFromEnv("binDecider").getBinRange(),
                            n = t[1] - t[0],
                            i = this.getFromEnv("chart").getFocusLimit();
                        return e * (i[1] - i[0]) / (n - e)
                    }, n.getPadding = function() {
                        var e = this.config,
                            t = e.scaleX,
                            n = this.getFromEnv("binDecider").getRangeThreshold(),
                            i = 0,
                            a = this.getValueFromPx(e.dataMarkerPadding);
                        return t.showPlotOverTick() && (i = n[2] / 2), Math.max(i, a)
                    }, n._calculateLimits = function() {
                        var e, t = this.config,
                            n = t.indices,
                            i = t.data,
                            a = t.type,
                            l = t.scaleY,
                            c = t.scaleX,
                            d = t.calculateFromContext,
                            u = /continuous/.test(this.getName()),
                            h = c.showPlotOverTick(),
                            f = {},
                            m = i[0],
                            v = i[i.length - 1],
                            y = "log" === l.getType(),
                            b = "visible" === this.config.visibility,
                            _ = this.getFromEnv("chart"),
                            x = d ? _.getContextLimit() : _.getFocusLimit();
                        return e = this.getPadding(), f.x = h ? [m && m[n[0]].start - e, v && v[n[0]].start + e] : u ? [m && (m[n[0]].start + m[n[0]].end) / 2 - e, v && (v[n[0]].start + v[n[0]].end) / 2 + e] : [m && m[n[0]].start - e, v && v[n[0]].end - e], f.y = b ? [(0, o["default"])(i, function(e) {
                            var t = (0, r.pluckNumber)(e[n[2]], e[n[1]]),
                                i = p(e[0]);
                            return g(y, t, i, x) ? null : t
                        }), (0, s["default"])(i, function(e) {
                            var t = e[n[1]],
                                i = p(e[0]);
                            return g(y, t, i, x) ? null : t
                        })] : r.UNDEF, f.baseRequired = !/line/.test(a), f
                    }, n.draw = function() {
                        this._createContainer(), this._drawPlot(), this.config.hoverInfo = [], this.config.hoverMode = !1, this.config.repositioningDone = !1
                    }, n._createContainer = function() {
                        this.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group",
                                isParent: !0
                            },
                            component: this,
                            label: "group",
                            id: "meso",
                            attr: {
                                name: "dataset-meso"
                            }
                        }, !0), this.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "thermo",
                                label: "group",
                                isParent: !0
                            },
                            component: this,
                            label: "group",
                            id: "thermo",
                            attr: {
                                name: "dataset-thermo",
                                "clip-path": this.getFromEnv("dsGroupclipPath")
                            }
                        }, !0)
                    }, n.isDrawingRequired = function() {
                        var e = this.config;
                        if (e.repositioningDone || e.hoverMode) return !0
                    }, n._drawPlot = function() {
                        var e, t = this,
                            n = t.config,
                            i = n.style,
                            a = (0, r.defined)(n.opacity),
                            o = (0, r.defined)(n["stroke-opacity"]),
                            s = (0, r.defined)(n["fill-opacity"]),
                            l = !1,
                            d = t.config.predictiveStyleAttributes,
                            u = (0, r.defined)(d.predictiveOpacity),
                            h = (0, r.defined)(d.predictiveStrokeOpacity),
                            f = (0, r.defined)(d.predictiveFillOpacity),
                            p = n.dataInfo;
                        t.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group"
                            },
                            component: t,
                            label: "group",
                            id: "meso-plot",
                            attr: Object.assign({
                                name: "column-plot-meso",
                                visibility: n.visibility
                            }, i)
                        }, !0), t.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group"
                            },
                            component: t,
                            label: "group",
                            id: "meso-plot-predictive",
                            attr: Object.assign({
                                name: "column-predictive-plot-meso",
                                visibility: n.visibility
                            }, i, d)
                        }, !0), p.forEach(function(i, g) {
                            (0, c["default"])(i.value) && (e = {
                                x: i.x,
                                y: i.y,
                                width: i.width,
                                height: i.height
                            }, l = t.isPlotPredictive(i), a && (e.opacity = n.opacity), o && (e["stroke-opacity"] = n["stroke-opacity"]), s && (e["fill-opacity"] = n["fill-opacity"]), i.style && Object.assign(e, i.style), l && (u && (e.opacity = d.predictiveOpacity), h && (e["stroke-opacity"] = d.predictiveStrokeOpacity), f && (e["fill-opacity"] = d.predictiveFillOpacity)), t.addGraphicalElement({
                                el: "rect",
                                container: {
                                    label: "group",
                                    id: l ? "meso-plot-predictive" : "meso-plot"
                                },
                                props: {
                                    dataLength: p.length
                                },
                                label: "rect",
                                attr: e,
                                component: t,
                                index: g
                            }, !0), i.style = r.UNDEF)
                        }), n.hoverInfo = []
                    }, n._isRepositioningNeeded = function() {
                        var e, t = this.config,
                            n = this.getFromEnv("xScale"),
                            i = this.getFromEnv("yScale"),
                            a = n.getDomain(),
                            r = a[0],
                            o = a[1],
                            s = n.getRange(),
                            l = s[0],
                            c = s[1],
                            d = i.getDomain(),
                            u = d[0],
                            h = d[1],
                            f = i.getRange(),
                            p = f[0],
                            g = f[1],
                            m = t.prevBoundaryInfo,
                            v = t.limit.y || [],
                            y = t.prevDataInfo;
                        return (+r != +m.xDomainStart || +o != +m.xDomainEnd || +u != +m.yDomainStart || +h != +m.yDomainEnd || l !== m.xRangeStart || c !== +m.xRangeEnd || p !== m.yRangeStart || g !== +m.yRangeEnd || t.prevVisibility !== t.visibility || v[0] !== y[0] || v[1] !== y[1] || t.legendInteracted) && (t.legendInteracted = !1, e = !0, t.prevBoundaryInfo = {
                            xDomainStart: r,
                            xDomainEnd: o,
                            xRangeStart: l,
                            xRangeEnd: c,
                            yDomainStart: u,
                            yDomainEnd: h,
                            yRangeStart: p,
                            yRangeEnd: g
                        }, t.prevVisibility = t.visibility, t.prevDataInfo = v), e
                    }, n.allocatePosition = function() {
                        var e, t, n, i, a, o, s, l, d, u, h, f, p, g, m, v, y, b, _, x, k = this.config,
                            S = k.indices,
                            w = S[0],
                            E = S[1],
                            C = S[2],
                            j = S[3],
                            D = this.getFromEnv("binDecider"),
                            M = this.getFromEnv("xScale"),
                            T = this.getFromEnv("yScale"),
                            I = k.dataInfo,
                            L = k.groupIndex || 0,
                            A = k.totalGroups || 1,
                            F = k.data,
                            O = k.plotBorderThickness,
                            P = k.fillColor === k.strokeColor && O > 0,
                            N = D.getRangeThreshold()[2],
                            B = M.getDomain(),
                            R = B[0],
                            H = B[1];
                        if (k.repositioningDone = this._isRepositioningNeeded()) {
                            if ("visible" !== k.visibility) return;
                            I = k.dataInfo = [], k.availableWidth = v = M.getRangeValue(N) - M.getRangeValue(0), k.timeStampGap = N, g = Math.max(v * (1 - k.plotSpacePercent / 100), 1), t = g / A, y = Math.round(A / 2), b = A % 2 == 0 ? 0 : .5, f = y - L > 0 ? -t * (y - L - b) : t * (L - y + b), _ = +M.getDomainValue(v * (k.plotSpacePercent / 200)) - +M.getDomainValue(0), k.actualStartDomain = +R + _, k.actualEndDomain = +H - _, P && (t = Math.max(t - O, 1)), F.forEach(function(u, g) {
                                n = u[w], i = u[E], g || (m = k.firstTimeStamp = n.start), s = u[C], d = T.getRangeValue(s || Math.max(T.getDomain()[0], 0)), l = T.getRangeValue(i), (0, c["default"])(i) && (0, c["default"])(d) && (0, c["default"])(l) && (a = M.getRangeValue(new Date(n.start), new Date(n.end)), P && (a += O / 2), p = (a += f) + t, e = Math.abs(d - l), o = l > d ? d : l, x = {
                                    startDate: n.start,
                                    endDate: n.end,
                                    value: i,
                                    yBaseValue: s,
                                    yBase: d,
                                    x: a,
                                    endXPosition: p,
                                    y: o,
                                    width: t,
                                    height: e,
                                    totalStackSum: (0, r.defined)(u[j]) ? u[j] : r.UNDEF,
                                    eventArgs: {
                                        index: g,
                                        dataValue: i
                                    }
                                }, h = M.getBinIndex(n.start, m), I[h] = x)
                            })
                        }(u = k.hoverInfo) && u.forEach(function(e) {
                            e.hoverIndices.forEach(function(t) {
                                "object" == typeof I[t] && "object" == typeof e.style && (I[t].style = (0, r.extend2)(I[t].style, e.style))
                            })
                        })
                    }, n._getRelevantInfo = function() {
                        var e = this.config;
                        return {
                            firstTimeStamp: e.firstTimeStamp,
                            timeStampGap: e.timeStampGap,
                            dataInfo: e.dataInfo,
                            fill: e.style.stroke
                        }
                    }, n._getHoveredPlot = function(e, t) {
                        var n, i, a, o, s, l = e,
                            c = t,
                            d = this.getFromEnv("xScale"),
                            u = this.getLinkedParent(),
                            h = this.config,
                            f = "visible" === h.visibility,
                            p = this.getChildren("flagMarker"),
                            g = u.getTranslation(),
                            m = g ? g.x : 0,
                            v = g ? g.y : 0;
                        if ((0, r.defined)(h.firstTimeStamp)) return l -= m, c -= v, s = (d.getDomainValue(l).getTime() - h.firstTimeStamp) / h.timeStampGap, h.timeStampGap <= 1 && -1 === s && (s = 0), n = Math.ceil(s), i = Math.floor(s), p && (p = p[0]) && (a = p._checkPointOverMarker(s, l, c, h.availableWidth)), (o = a) || (f ? (o = this._checkPointerOverColumn(n, l, c)).hovered || (o = this._checkPointerOverColumn(i, l, c)) : o = {}), o.hovered ? o.binIndexHovered = o.pointIndex : (o.binIndexHovered = d.getBinIndex(d.getDomainValue(l), h.firstTimeStamp), o.pointObj = h.dataInfo[o.binIndexHovered] || d.getBinBounds(l, h.firstTimeStamp), o.component = this), h.binIndexHovered = o.binIndexHovered, o
                    }, n._getHoveredBin = function() {
                        return this.config.binIndexHovered
                    }, n._getTooltext = function(e, t, n) {
                        var i, a = this.config,
                            r = this.getName(),
                            o = function(e) {
                                switch (e) {
                                    case "line":
                                    case "smooth-line":
                                    case "step-line":
                                        return "line";
                                    case "area":
                                    case "smooth-area":
                                    case "step-area":
                                        return "area"
                                }
                            }(a.type),
                            s = this.getFromEnv("tooltipStyle").body,
                            l = this.getFromEnv("tooltipStyle").container["line-height"] || 1,
                            d = 1 === l ? s["font-size"] : l,
                            u = a.dataInfo[n],
                            h = e ? t ? 1 : .5 : 1,
                            f = "continuous" === r ? "line" === o ? a.plotStyle.stroke : a.plotStyle.fill : a.style.fill;
                        return this._isInvalidTooltext(u) ? "" : (u.tooltipValue || (i = (0, c["default"])(u.yBaseValue) ? u.yBaseValue >= 0 ? u.value - u.yBaseValue : u.yBaseValue - u.value : u.value, u.tooltipValue = (0, c["default"])(i) ? a.formatterFn({
                            value: i,
                            type: "tooltip",
                            prefix: a.prefix,
                            suffix: a.suffix
                        }) : ""), "<div style='margin-top:6px; overflow: hidden; opacity:" + h + "'>\n      <span style='float:left; height: " + d + "; width: " + d + "; position:relative;margin-right: 2px;'>\n        <span style='display:block;height:64%;width:64%;position:absolute;top:50%;transform:translateY(-50%);background-color:" + f + ";'></span>\n      </span>\n      <div style='float:left;'>" + a.series + "&nbsp</div>\n      <div style='float: right;'>&nbsp" + (u.tooltipValue || "") + "</div>\n      </div>")
                    }, n._isInvalidTooltext = function(e) {
                        var t = this.config;
                        if (!e || e.endDate < t.actualStartDomain || e.startDate > t.actualEndDomain) return !0
                    }, n._getDateForToolText = function(e) {
                        var t, n = this.config,
                            i = "",
                            a = n.dataInfo[e];
                        return this._isInvalidTooltext(a) ? {
                            body: "",
                            header: ""
                        } : (a.tooltextTime || (a.tooltextTime = n.timeFormatterFn({
                            type: "tooltip",
                            dateRange: a
                        })), !a.totalStackSumTooltip && (0, c["default"])(a.totalStackSum) && (a.totalStackSumTooltip = n.formatterFn({
                            value: a.totalStackSum,
                            type: "tooltip",
                            prefix: n.prefix,
                            suffix: n.suffix
                        })), t = "<div style='margin-bottom:8px;'>" + a.tooltextTime + "</div>", a.totalStackSumTooltip && (i = "<div style='margin-bottom: 2px;'>Total: " + a.totalStackSumTooltip + "</div>"), {
                            header: t,
                            body: i
                        })
                    }, n._checkPointerOverColumn = function(e, t, n) {
                        var i, a, o, s, l, c, d, u = this.config,
                            h = u.plotBorderThickness;
                        return (i = u.dataInfo[e]) ? (l = i.height < m ? m : i.height, s = i.width < m ? m : i.width, d = i.height < m ? i.y - (m - i.height) : i.y, h !== r.UNDEF ? c = h / 2 : h = c = 0, o = n - d + c, {
                            pointIndex: e,
                            hovered: (a = t - i.x + c) >= 0 && a <= s + h && o >= 0 && o <= l + h,
                            pointObj: i,
                            component: this
                        }) : {
                            pointIndex: e,
                            hovered: !1,
                            component: this
                        }
                    }, n._firePlotEvent = function(e, t, n, i) {
                        var a, o, s = this.config.dataInfo,
                            l = s[t] && s[t].eventArgs || {},
                            c = this.getFromEnv("chart"),
                            d = (0, r.getMouseCoordinate)(c.getFromEnv("chart-container"), n, c),
                            u = (0, r.extend2)(d, l);
                        switch (e) {
                            case "fc-mouseover":
                                c.fireChartInstanceEvent("DataPlotRollOver", u, r.UNDEF, r.UNDEF, function(e, t) {
                                    n.FusionChartsPreventEvent = !0
                                });
                                break;
                            case "fc-mouseout":
                                c.fireChartInstanceEvent("DataPlotRollOut", u);
                                break;
                            case "fc-click":
                            case "touchend":
                            case "mouseup":
                                c.fireChartInstanceEvent("DataPlotClick", u), o = (a = c.getFromEnv()) && a.linkClickFN, u.link && o && o.call({
                                    link: u.link
                                }, !0)
                        }
                    }, n.setHoverInEffect = function(e, t) {
                        this.getFromEnv("animationManager").setAnimationState("mouseOver"), this.setData(t ? this.getHoverInConfig(e) : this.getHighlightConfig(e), !0)
                    }, n.setHoverOutEffect = function(e) {
                        this.getFromEnv("animationManager").setAnimationState("mouseOut"), this.setData(this.getHoverOutConfig(e), !0)
                    }, n.getHighlightedIndices = function(e) {
                        var t = this.config.dataInfo,
                            n = [];
                        return t.forEach(function(t, i) {
                            t.y <= e.minValue && t.y >= e.maxValue && n.push(i)
                        }), n
                    }, n.show = function() {
                        this.setData({
                            visibility: "visible"
                        }, !0)
                    }, n.hide = function() {
                        this.setData({
                            visibility: "hidden"
                        }, !0)
                    }, n.isPlotPredictive = function(e) {
                        return e.startDate >= this.config.prediction.dateMs
                    }, n.parsePrediction = function(e) {
                        this.config.prediction = e.prediction || this.config.prediction, this.parsePredictiveStyleAttributes()
                    }, n.parsePredictiveStyleAttributes = function() {
                        var e, t, n = {},
                            i = this.config;
                        i.prediction.enabled && (e = i.prediction.style.plot, t = i.prediction.style.column, Object.assign(n, i.defaultPredictedDataStyle), Object.assign(n, e), Object.assign(n, t)), n.predictiveOpacity = n.opacity, n.predictiveFillOpacity = n["fill-opacity"], n.predictiveStrokeOpacity = n["stroke-opacity"], delete n.opacity, delete n["fill-opacity"], delete n["stroke-opacity"], i.predictiveStyleAttributes = n || {}
                    }, t
                }(d["default"]);
                t["default"] = v
            },
            768: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = n(180);

                function a(e, t, n) {
                    return {
                        y: n ? t : t + e,
                        height: 0
                    }
                }

                function r(e, t) {
                    var n = 1 / t,
                        i = n * e;
                    return {
                        start: i,
                        end: i + n
                    }
                }
                var o = {
                    "initial.dataset.timeseriesColumn": function() {
                        var e = this,
                            t = e.getFromEnv("yScale");
                        return void 0 !== e.config.indices[3] ? function(e) {
                            var t = e.config.datasetIndex,
                                n = e.config.seriesLength;
                            return {
                                "rect.appearing": function(i) {
                                    var o = i.index,
                                        s = e.config.dataInfo[o].yBaseValue < 0;
                                    return [{
                                        initialAttr: a(i.attr.height, i.attr.y, s),
                                        slot: "middle",
                                        startEnd: r(t, n),
                                        effect: "linear"
                                    }]
                                }
                            }
                        }(e) : {
                            "rect.appearing": function(n) {
                                var a, r, o, s, l = n.props && n.props.originalIndex || n.index,
                                    c = e.config.data[l],
                                    d = n.attr,
                                    u = t.getRangeValue(0);
                                return a = d.y, r = d.height, s = Math.sign(a + r / 2 - u), o = 1 === s ? a : a + r, c && (c._posWRT0 = s), [{
                                    initialAttr: function() {
                                        var e = {};
                                        return e.y = o, e.height = 0, e
                                    },
                                    finalAttr: {},
                                    startEnd: function() {
                                        var e = i.animHelperFN.animByWeight(n.index, n.props.dataLength, .6);
                                        return e
                                    },
                                    hookFn: function() {
                                        this.attr({
                                            opacity: 1
                                        })
                                    },
                                    effect: "easeInOutQuart",
                                    slot: "plot"
                                }]
                            },
                            "*": null
                        }
                    }
                };
                t["default"] = o
            },
            769: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = function(e) {
                    var t, n = e.getFromEnv("dataSource"),
                        i = e.config.series,
                        c = e.config,
                        d = c.measures,
                        u = c.seriesInfo,
                        h = void 0 === u ? {} : u,
                        f = c.enableMarkers,
                        p = c.visibility,
                        g = [];
                    f && (t = n.datamarker) && (t.forEach(function(e) {
                        var t = e.value,
                            n = e.series,
                            a = !0;
                        if (t && ((0, r["default"])(t) && (t = [t]), (0, o["default"])(t) && (0, r["default"])(t[0]) && (a = (0, s["default"])(t, d))), (0, l["default"])(n))
                            for (var c, u = Object.keys(n), f = u.length; a && f--;) c = u[f], (0, r["default"])(n[c]) && n[c] !== h[c] && (a = !1);
                        a && (g.push(e), e.seriesname = i)
                    }), 0 !== g.length && e.attachChild(a["default"], "flagMarker").configure({
                        data: g,
                        visibility: p
                    }))
                };
                var a = i(n(770)),
                    r = i(n(707)),
                    o = i(n(706)),
                    s = i(n(694)),
                    l = i(n(703))
            },
            770: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = i(n(199)),
                    o = i(n(342)),
                    s = n(180),
                    l = n(184),
                    c = n(722),
                    d = n(188),
                    u = i(n(771)),
                    h = i(n(412)),
                    f = i(n(703)),
                    p = 16,
                    g = 10,
                    m = 16,
                    v = function(e) {
                        if (void 0 === e && (e = []), !(0, h["default"])(e)) return {};
                        var t, n, i, a = {},
                            r = (0, f["default"])(e[0]) ? e[0] : {},
                            o = e.length;
                        for (t in r) {
                            var s = !0;
                            for (n = 1; n < o; ++n)
                                if (i = e[n], !(0, f["default"])(i) || !i.hasOwnProperty(t) || i[t] != r[t]) {
                                    s = !1;
                                    break
                                }
                            s && (a[t] = r[t])
                        }
                        return a
                    };
                (0, d.addDep)({
                    name: "flagMarkerAnimation",
                    type: "animationRule",
                    extension: u["default"]
                });
                var y = function(e) {
                    (0, a["default"])(n, e);
                    var t = n.prototype;

                    function n() {
                        var t;
                        return (t = e.call(this) || this)._getMarkerBounds = function() {
                            return {
                                width: m,
                                height: g + p
                            }
                        }, t.config.styleInfo = {}, t
                    }
                    return t.configure = function(t) {
                        e.prototype.configure.call(this, t);
                        var n, i, a = this.config,
                            r = a.styleInfo;
                        if (t.data && (this.config.data = t.data), i = t.style)
                            for (var o in n = r[t.index] || (r[t.index] = {}), i) n[o] = i[o];
                        a.skipGrouping = t.skipGrouping, (0, s.defined)(t.visibility) && (a.visibility = t.visibility)
                    }, t.setHoverInEffect = function(e) {
                        var t = this.config,
                            n = t.markerInfo[e].markers,
                            i = n[0].style || {},
                            a = {},
                            r = {},
                            o = {},
                            s = {},
                            l = this.getFromEnv("getStyleDef");
                        n.multipleMarkers ? (r = n.markers.map(function(e) {
                            return e.style && l(e.style["marker:hover"]) || {}
                        }), s = n.markers.map(function(e) {
                            return e.style && l(e.style["text:hover"]) || {}
                        }), Object.assign(a, t.defaultHoverStyle, v(r)), Object.assign(o, t.defaultHoverStyle, v(s))) : (Object.assign(a, t.defaultHoverStyle, l(i["marker:hover"])), Object.assign(o, t.defaultHoverStyle, l(i["text:hover"]))), this.getFromEnv("animationManager").setAnimationState("mouseOver"), this.setData({
                            style: {
                                marker: a,
                                text: o
                            },
                            index: e,
                            skipGrouping: !0
                        })
                    }, t.setHoverOutEffect = function(e) {
                        this.getFromEnv("animationManager").setAnimationState("mouseOut"), this.setData({
                            style: {
                                marker: {},
                                text: {}
                            },
                            index: e,
                            skipGrouping: !0
                        })
                    }, t.__setDefaultConfig = function() {
                        var e = this.config;
                        e["default-stroke-width"] = 1, e["default-fill-opacity"] = .5, e["default-stroke-opacity"] = .5, e["default-font-color"] = "#ffffff", e["default-stroke-color-multiple"] = "#8c8c8c", e["default-tooltip-background"] = "#f2eded", e.defaultMarkerStyle = {
                            "stroke-width": 1,
                            "fill-opacity": .5,
                            "stroke-opacity": .5
                        }, e.defaultTextStyle = {
                            fill: "#ffffff",
                            "font-size": "12px",
                            "line-height": "14.4px",
                            "fill-opacity": 1,
                            "stroke-opacity": 1,
                            "text-anchor": "middle",
                            "font-weight": "normal",
                            "font-style": "normal"
                        }, e.defaultHoverStyle = {
                            opacity: 1,
                            "fill-opacity": 1,
                            "stroke-opacity": 1
                        }
                    }, t.draw = function() {
                        "visible" === this.config.visibility && (this._createGroup(), this._drawMarkers())
                    }, t.getType = function() {
                        return "dataMarker"
                    }, t.getName = function() {
                        return "flagMarker"
                    }, t._checkPointOverMarker = function(e, t, n, i) {
                        for (var a, r, o, s, l, c, d = this, u = d.config, h = u.dataInfo, f = d._getMarkerBounds(), p = u.markerInfo, g = Math.ceil(e), m = Math.floor(e), v = i, y = [g, m]; v < f.width;) y.unshift(++g), y.push(--m), v += i;
                        return y.forEach(function(e) {
                            !c && p[e] && (a = h[e], r = a.x, o = a.y, s = (a.width || 0) / 2, t >= (l = r + s) - f.width / 2 && t <= l + f.width / 2 && n <= o && n >= o - f.height && (c = {
                                pointIndex: e,
                                hovered: !0,
                                pointObj: a,
                                markerObj: p[e],
                                component: d
                            }))
                        }), c
                    }, t._getTooltext = function(e) {
                        var t, n, i = this.config.markerInfo[e],
                            a = i.markers,
                            r = a.length,
                            o = i.multipleMarkers;
                        return i.formatedTime || (i.formatedTime = this.getFromEnv("xScale").getFormattedTime({
                            type: "tooltip",
                            dateRange: i
                        })), i.tooltipValue || (i.tooltipValue = this.getFromEnv("yScale").tickFormat(4, ".2s")(i.value)), t = "<div style='margin-bottom: 6px'>" + i.formatedTime + "</div>", n = "<div style='margin-bottom:6px; height: 14px;'>\n    <div style='float: left;'>" + i.seriesname + ":<span style='padding-left:8px'>" + i.tooltipValue + "</span></div>\n    </div>", a.forEach(function(e, t) {
                            o && (n += "<div style='clear: both; margin-bottom:2px; font-weight: 600;'>" + e.time + "</div>"), n += e.tooltext ? "<div style='clear: both; " + (t < r - 1 ? "margin-bottom: 6px" : "") + "'>" + (0, s.parseUnsafeString)(e.tooltext) + "</div>" : ""
                        }), {
                            header: t,
                            body: n
                        }
                    }, t.allocatePosition = function() {
                        !this.config.skipGrouping && this._groupMarkers()
                    }, t._groupMarkers = function() {
                        var e, t, n, i, a = this,
                            r = a.getLinkedParent()._getRelevantInfo(),
                            s = r.firstTimeStamp,
                            l = r.dataInfo,
                            d = a.config,
                            u = d.markerInfo = {},
                            h = a.getFromEnv("binDecider").getRangeThreshold()[0]._name,
                            f = d.data;
                        d.dataInfo = l, f.forEach(function(r) {
                            n = o["default"].parser(r.timeformat).parse(r.time), i = (0, c.getPlaceHolderIndex)(h) - (0, c.getPlaceHolderIndex)((0, c.getMinPlaceHolder)(r.timeformat)), n && i >= 0 && i <= 1 && (n = n.getTime()) >= s && (t = a.getFromEnv("xScale").getBinIndex(n, s), l[t] && (!u[t] && (e = u[t] = {
                                markers: [],
                                id: r.seriesname + r.time,
                                startDate: l[t].startDate,
                                seriesname: r.seriesname,
                                endDate: l[t].endDate
                            }), e.markers.push(r), e.markers.length > 1 && (e.multipleMarkers = !0)))
                        })
                    }, t._createGroup = function() {
                        this.addGraphicalElement({
                            el: "group",
                            container: {
                                label: "group",
                                id: "thermo",
                                isParent: !0
                            },
                            component: this,
                            label: "group",
                            attr: {
                                name: "markerGroup-thermo"
                            }
                        })
                    }, t.getStyleInformation = function(e) {
                        var t, n, i, a, r, o, c, d, u, h = this.config,
                            f = h.styleInfo,
                            p = h.markerInfo[e],
                            g = this.getFromEnv("getStyleDef"),
                            m = h.defaultMarkerStyle,
                            y = h.defaultTextStyle,
                            b = this.getLinkedParent()._getRelevantInfo(),
                            _ = this.getFromEnv("baseTextStyle");
                        return r = {}, o = {}, n = (c = f[e] || {}).marker || {}, a = p.markers[0].style || {}, t = g(a.marker), i = g(a.text), p.multipleMarkers ? (u = p.markers.map(function(e) {
                            return e.style && g(e.style.marker) || {}
                        }), d = p.markers.map(function(e) {
                            return e.style && g(e.style.text) || {}
                        }), t = v(u), i = v(d), t.fill || (t.fill = p.fill = h["default-stroke-color-multiple"]), t.stroke || (t.stroke = h["default-stroke-color-multiple"])) : (t.fill = p.fill = (0, l.convertColor)((0, s.pluck)(t.fill, b.fill), 100 * (0, s.pluck)(n["fill-opacity"], t["fill-opacity"], m["fill-opacity"])), t.stroke = p.stroke = (0, l.convertColor)((0, s.pluck)(t.stroke, b.fill), 100 * (0, s.pluck)(n["stroke-opacity"], t["stroke-opacity"], m["fill-opacity"]))), Object.assign(r, m, t, c.marker), Object.assign(o, y, _, i, c.text), {
                            marker: r,
                            text: o
                        }
                    }, t._drawMarkers = function() {
                        var e, t, n, i, a, r, o, s, l, c, d, u, h, f = this.config,
                            v = f.dataInfo,
                            y = {},
                            b = f.markerInfo;
                        for (a in b) t = v[a], d = (i = b[a]).multipleMarkers, o = i.id, e = t.y, r = t.x + (t.width || 0) / 2, c = e - g, y = this.getStyleInformation(a), n = i.markers[0], i.value = t.value, u = y.marker.opacity, h = y.text.opacity, l = {
                            path: ["M", r, e, "V", c],
                            opacity: u
                        }, this.addGraphicalElement({
                            el: "path",
                            container: {
                                label: "group"
                            },
                            id: o,
                            component: this,
                            attr: l,
                            css: y.marker,
                            label: "flagStick"
                        }, !0), l = {
                            path: "M12.4444444,0 L1.55555556,0 C0.7,0 0,0.654545455 0,1.45454545 L0,10.8363636 C0,11.3454545 0.233333333,11.7817897 0.7,12.0727273 L7,16 L13.3,12.0727273 C13.6888889,11.7818182 14,11.3454545 14,10.8363636 L14,1.45454545 C14,0.654545455 13.3,0 12.4444444,0 Z",
                            transform: "t" + (r - m / 2 + 1) + "," + (c - p),
                            opacity: u
                        }, this.addGraphicalElement({
                            el: "path",
                            container: {
                                label: "group"
                            },
                            id: o,
                            component: this,
                            attr: l,
                            css: y.marker,
                            label: "flagTriangle"
                        }, !0), (d || (s = n.identifier)) && (l = {
                            text: d ? i.markers.length : s.charAt(0),
                            x: r,
                            y: c - p / 2,
                            opacity: h
                        }, this.addGraphicalElement({
                            el: "text",
                            container: {
                                label: "group"
                            },
                            id: o,
                            component: this,
                            attr: l,
                            css: y.text,
                            label: "markerText"
                        }, !0));
                        this.styleInfo = {}
                    }, n
                }(r["default"]);
                t["default"] = y
            },
            771: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = n(180),
                    a = {
                        "initial.dataMarker.flagMarker": function() {
                            return {
                                "*.appearing": function(e) {
                                    return [{
                                        initialAttr: {
                                            opacity: 0
                                        },
                                        finalAttr: {
                                            opacity: (0, i.pluckNumber)(e.attr.opacity, 1)
                                        },
                                        slot: "final"
                                    }]
                                }
                            }
                        }
                    };
                t["default"] = a
            },
            772: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                var i = function(e, t) {
                        var n = e.getFromEnv("yScale"),
                            i = e.getFromEnv("xScale"),
                            a = n.getDomain(),
                            r = i.getDomain(),
                            o = i.getRangeValue(r[0]),
                            s = n.getRangeValue(a[0]),
                            l = n.getRangeValue(a[1]),
                            c = s - l,
                            d = c < 0 ? s : l,
                            u = "init" === t ? 0 : Math.abs(i.getRangeValue(r[1]) - o),
                            h = Math.abs(c);
                        return "M" + o + "," + d + "L" + (o + u) + "," + d + "L" + (o + u) + "," + (d + h) + "L" + o + "," + (d + h) + "Z"
                    },
                    a = {
                        "initial.dataset.continuous": function() {
                            var e = this;
                            return {
                                "group.appearing": function() {
                                    return [{
                                        initialAttr: {
                                            "clip-path": i(e, "init")
                                        },
                                        finalAttr: {
                                            "clip-path": i(e, "canvas")
                                        },
                                        slot: "middle"
                                    }]
                                },
                                "*": null
                            }
                        }
                    };
                t["default"] = a
            },
            773: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(180),
                    o = i(n(418)),
                    s = i(n(417)),
                    l = n(188),
                    c = i(n(705)),
                    d = i(n(767)),
                    u = i(n(774)),
                    h = function(e, t) {
                        return Object.assign(e, t)
                    };
                (0, l.addDep)({
                    name: "timeseriesCandlestickAnimation",
                    type: "animationRule",
                    extension: u["default"]
                });
                var f = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, a["default"])(t, e);
                    var n = t.prototype;
                    return n.getHoverInConfig = function(e) {
                        var t = this.config;
                        return {
                            bullStyle: t.bullHoverInStyle,
                            bearStyle: t.bearHoverInStyle,
                            hoverIndices: e,
                            hovered: !0
                        }
                    }, n.getHighlightConfig = function(e) {
                        var t = this.config;
                        return {
                            bullStyle: t.bullHighlightStyle,
                            bearStyle: t.bearHighlightStyle,
                            hoverIndices: e,
                            hovered: !0
                        }
                    }, n.getHoverOutConfig = function(e) {
                        var t, n = this.config,
                            i = Object.assign({}, n.bullHoverOutStyle),
                            a = Object.assign({}, n.bearHoverOutStyle);
                        for (t in i) i[t] = null;
                        for (t in a) a[t] = null;
                        return {
                            bullStyle: i,
                            bearStyle: a,
                            hoverIndices: e,
                            hovered: !1
                        }
                    }, n.__setDefaultConfig = function() {
                        var e = this.config;
                        e.bullStyle = {}, e.bullHoverInStyle = {}, e.bullHighlightStyle = {}, e.bullHoverOutStyle = {}, e.bearStyle = {}, e.bearHoverInStyle = {}, e.bearHighlightStyle = {}, e.bearHoverOutStyle = {}, e.plotSpacePercent = 40, e.dataMarkerPadding = 0, e.visibility = r.VISIBLE, e.prevBoundaryInfo = {}, e.prevDataInfo = [], e.defaultBullStyle = {
                            "stroke-width": 1,
                            opacity: 1,
                            stroke: "000000",
                            fill: "ffffff"
                        }, e.defaultBearStyle = {
                            "stroke-width": 1,
                            opacity: 1,
                            stroke: "000000",
                            fill: "868AC8"
                        }, e.defaultBullHighlightStyle = {
                            "stroke-width": 2
                        }, e.defaultBearHighlightStyle = {
                            "stroke-width": 2
                        }, e.defaultBearHoverInStyle = {
                            "stroke-width": 2
                        }, e.defaultBullHoverInStyle = {
                            "stroke-width": 2
                        }, e.legendDefaultTextStyle = {
                            "font-family": r.DEFAULT_FT_FONT,
                            "font-weight": "normal",
                            "font-style": "normal",
                            "font-size": "12px",
                            // dark text
                            fill: "#ffffff"
                        }, e.defaultBearPredictiveStyle = {
                            fill: "#62B58F"
                        }, e.defaultBullPredictiveStyle = {
                            fill: "#F76363"
                        }, e.strokeColor = "#464E56", e.hoverInfo = []
                    }, n.configureAttributes = function(e) {
                        var t, n = this.getFromEnv("dataSource"),
                            i = this.getFromEnv("getStyleDef"),
                            a = n.legend,
                            o = i(a && a.item && a.item.style && a.item.style.text),
                            l = this.config;
                        if (l.mergedLegendStyle = (0, r.extend2)((0, r.extend2)({}, l.legendDefaultTextStyle), o), e.hasOwnProperty("hoverIndices")) l.hoverInfo.push(e), l.hoverMode = !0;
                        else {
                            for (t in e)
                                if ("primaryColor" === t) {
                                    var c = e.plotCosmetics,
                                        d = e.genericCosmetics,
                                        u = l.bullStyle,
                                        f = l.bearStyle,
                                        p = l.bullHoverInStyle,
                                        g = l.bearHoverInStyle,
                                        m = l.bullHighlightStyle,
                                        v = l.bearHighlightStyle,
                                        y = l.bullHoverOutStyle,
                                        b = l.bearHoverOutStyle,
                                        _ = void 0,
                                        x = i(c.style && c.style.bear),
                                        k = i(c.style && c.style.bull),
                                        S = i(d.style && d.style.plot),
                                        w = i(d.style && d.style["plot:hover"]),
                                        E = i(d.style && d.style["plot:highlight"]),
                                        C = i(d.style && d.style.bull),
                                        j = i(d.style && d.style["bull:hover"]),
                                        D = i(d.style && d.style["bull:highlight"]),
                                        M = i(d.style && d.style.bear),
                                        T = i(d.style && d.style["bear:hover"]),
                                        I = i(d.style && d.style["bear:highlight"]),
                                        L = i(c.style && c.style["bear:hover"]),
                                        A = i(c.style && c.style["bear:highlight"]),
                                        F = i(c.style && c.style["bull:hover"]),
                                        O = i(c.style && c.style["bull:highlight"]),
                                        P = i(e.styleConfig && e.styleConfig.bear),
                                        N = i(e.styleConfig && e.styleConfig.bull),
                                        B = i(e.styleConfig && e.styleConfig["bear:hover"]),
                                        R = i(e.styleConfig && e.styleConfig["bear:highlight"]),
                                        H = i(e.styleConfig && e.styleConfig["bull:hover"]),
                                        G = i(e.styleConfig && e.styleConfig["bull:highlight"]),
                                        U = i(c.style && c.style.plot),
                                        q = i(e.styleConfig && e.styleConfig.plot),
                                        Y = i(c.style && c.style["generic:hover"]),
                                        V = i(c.style && c.style["generic:highlight"]),
                                        z = i(e.styleConfig && e.styleConfig["plot:hover"]),
                                        W = i(e.styleConfig && e.styleConfig["plot:highlight"]);
                                    for (_ in delete S.fill, delete U.fill, delete q.fill, "timeseries-ohlc" === this.getName() && (delete q.stroke, delete S.stroke, delete U.stroke), [u, l.defaultBullStyle, S, U, q, C, k, N].reduce(h), [f, l.defaultBearStyle, S, U, q, M, x, P].reduce(h), [p, l.defaultBullHoverInStyle, w, Y, z, j, F, H].reduce(h), [m, l.defaultBullHighlightStyle, E, V, W, D, O, G].reduce(h), [g, l.defaultBearHoverInStyle, w, Y, z, T, L, B].reduce(h), [v, l.defaultBearHighlightStyle, E, V, W, I, A, R].reduce(h), u.stroke = (0, r.convertColor)(u.stroke, 100 * (0, r.pluckNumber)(u["stroke-opacity"], 1)), u.fill = (0, r.convertColor)(u.fill, 100 * (0, r.pluckNumber)(u["fill-opacity"], 1)), f.stroke = (0, r.convertColor)(f.stroke, 100 * (0, r.pluckNumber)(f["fill-opacity"], 1)), f.fill = (0, r.convertColor)(f.fill, 100 * (0, r.pluckNumber)(f["fill-opacity"], 1)), p.fill && (p.fill = (0, r.convertColor)(p.fill, 100 * (0, r.pluckNumber)(p["fill-opacity"], u["fill-opacity"]))), p.stroke && (p.stroke = (0, r.convertColor)(p.stroke, 100 * (0, r.pluckNumber)(p["stroke-opacity"], u["stroke-opacity"]))), g.fill && (g.fill = (0, r.convertColor)(g.fill, 100 * (0, r.pluckNumber)(g["fill-opacity"], f["fill-opacity"]))), g.stroke && (g.stroke = (0, r.convertColor)(g.stroke, 100 * (0, r.pluckNumber)(g["stroke-opacity"], f["stroke-opacity"]))), m.fill && (m.fill = (0, r.convertColor)(m.fill, 100 * (0, r.pluckNumber)(m["fill-opacity"], u["fill-opacity"]))), m.stroke && (m.stroke = (0, r.convertColor)(m.stroke, 100 * (0, r.pluckNumber)(m["stroke-opacity"], u["stroke-opacity"]))), g.fill && (g.fill = (0, r.convertColor)(g.fill, 100 * (0, r.pluckNumber)(g["fill-opacity"], f["fill-opacity"]))), g.stroke && (g.stroke = (0, r.convertColor)(g.stroke, 100 * (0, r.pluckNumber)(g["stroke-opacity"], f["stroke-opacity"]))), l.plotBorderThickness = f["stroke-width"] = u["stroke-width"] = (0, r.pluckNumber)((0, s["default"])([f["stroke-width"], u["stroke-width"]], Number.parseFloat)), Object.assign(Object.assign({}, p), m)) y[_] = (0, r.pluck)(u[_], "");
                                    for (_ in (0, r.defined)(y["stroke-dasharray"]) && (y["stroke-dasharray"] = ""), Object.assign(Object.assign({}, g), v)) b[_] = f[_] || "";
                                    (0, r.defined)(b["stroke-dasharray"]) && (y["stroke-dasharray"] = ""), l.bullOpacity = u.opacity, l["bull-fill-opacity"] = u["fill-opacity"], l["bull-stroke-opacity"] = u["stroke-opacity"], l.bearOpacity = f.opacity, l["bear-fill-opacity"] = f["fill-opacity"], l["bear-stroke-opacity"] = f["stroke-opacity"], delete u.opacity, delete u["fill-opacity"], delete u["stroke-opacity"], delete f.opacity, delete f["fill-opacity"], delete f["stroke-opacity"]
                                } else l[t] = e[t];
                            if (!l.skipLimitCalc) {
                                l.limit = this._calculateLimits();
                                var X = this.getFromEnv("chart");
                                X.setYScaleLimit(l.scaleY.getId(), this.getId(), l.limit.y, l.limit.baseRequired), X.setXScaleLimit(l.scaleX.getId(), this.getId(), l.limit.x)
                            }
                        }
                        this.parsePrediction(e)
                    }, n.parsePrediction = function(e) {
                        this.config.prediction = e.prediction || this.config.prediction, this.parsePredictiveStyleAttributes()
                    }, n.parsePredictiveStyleAttributes = function() {
                        var e = {},
                            t = this.config;
                        t.predictiveStyleAttributesBear = {}, t.predictiveStyleAttributesBull = {}, t.prediction.enabled && (Object.assign(e, t.prediction.style.plot), Object.assign(t.predictiveStyleAttributesBear, t.defaultBearPredictiveStyle, t.prediction.style.plot, t.prediction.style.bear), Object.assign(t.predictiveStyleAttributesBull, t.defaultBullPredictiveStyle, t.prediction.style.plot, t.prediction.style.bull)), t.predictiveStyleAttributes = e || {}
                    }, n._calculateLimits = function() {
                        var e, t = this.config,
                            n = t.indices,
                            i = t.data,
                            a = t.scaleY,
                            l = t.scaleX,
                            c = t.calculateFromContext,
                            d = i[0],
                            u = i[i.length - 1],
                            h = l.showPlotOverTick(),
                            f = "visible" === this.config.visibility,
                            p = "log" === a.getType(),
                            g = this.getFromEnv("chart"),
                            m = c ? g.getContextLimit() : g.getFocusLimit(),
                            v = m[0],
                            y = m[1],
                            b = {},
                            _ = function(e) {
                                return p && e <= 0 ? null : e
                            };
                        return e = this.getPadding(), b.x = h ? [d && d[n[0]].start - e, u && u[n[0]].start + e] : [d && d[n[0]].start - e, u && u[n[0]].end - e], b.y = f ? [(0, s["default"])(i, function(e) {
                            if (!(e[0].end < v || e[0].start > y)) return (0, s["default"])([e[n[1]], e[n[2]], e[n[3]], e[n[4]]], _)
                        }), (0, o["default"])(i, function(e) {
                            if (!(e[0].end < v || e[0].start > y)) return (0, o["default"])([e[n[1]], e[n[2]], e[n[3]], e[n[4]]], _)
                        })] : r.UNDEF, b.baseRequired = !1, b
                    }, n._createContainer = function() {
                        var e = this.config,
                            t = e.bullStyle,
                            n = e.bearStyle;
                        this.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group",
                                isParent: !0
                            },
                            component: this,
                            label: "group",
                            id: "meso",
                            attr: {
                                name: "candlestick-dataset-meso"
                            }
                        }), this.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group"
                            },
                            component: this,
                            label: "group",
                            id: "meso-bull",
                            attr: Object.assign({
                                name: "bullGroup-meso",
                                visibility: e.visibility
                            }, t)
                        }), this.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group"
                            },
                            component: this,
                            label: "group",
                            id: "meso-bear",
                            attr: Object.assign({
                                name: "bearGroup-meso",
                                visibility: e.visibility
                            }, n)
                        }), this.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group"
                            },
                            component: this,
                            label: "group",
                            id: "meso-bull-predictive",
                            attr: Object.assign({
                                name: "predictive-bullGroup-meso",
                                visibility: e.visibility
                            }, t, e.predictiveStyleAttributesBull)
                        }), this.addGraphicalElement({
                            el: "group",
                            container: {
                                id: "meso",
                                label: "group"
                            },
                            component: this,
                            label: "group",
                            id: "meso-bear-predictive",
                            attr: Object.assign({
                                name: "predictive-bearGroup-meso",
                                visibility: e.visibility
                            }, n, e.predictiveStyleAttributesBear)
                        })
                    }, n.getName = function() {
                        return "timeseriesCandlestick"
                    }, n.getHighlightedIndices = function(e) {
                        var t = this.config.dataInfo,
                            n = [];
                        return t.forEach(function(t, i) {
                            t.closeValuePx <= e.minValue && t.closeValuePx >= e.maxValue && n.push(i)
                        }), n
                    }, n.allocatePosition = function() {
                        var e, t, n, i, a, o, s, l, d, u, h, f, p, g, m, v, y, b, _, x, k, S, w, E = this.getFromEnv("binDecider"),
                            C = this.getFromEnv("xScale"),
                            j = this.getFromEnv("yScale"),
                            D = this.config,
                            M = D.indices,
                            T = M[0],
                            I = M[1],
                            L = M[2],
                            A = M[3],
                            F = M[4],
                            O = D.dataInfo,
                            P = E.getRangeThreshold()[2],
                            N = C.getDomain(),
                            B = N[0],
                            R = N[1],
                            H = D.data;
                        (D.repositioningDone = this._isRepositioningNeeded()) && (D.timeStampGap = P, _ = C.getRangeValue(P) - C.getRangeValue(0), t = Math.max(_ * (1 - D.plotSpacePercent / 100) - D.plotBorderThickness, 1), w = +C.getDomainValue(_ * (D.plotSpacePercent / 200)) - +C.getDomainValue(0), D.actualStartDomain = +B + w, D.actualEndDomain = +R - w, O = D.dataInfo = [], H.forEach(function(r, _) {
                            n = r[T], u = r[I], h = r[F], f = r[L], p = r[A], _ || (m = D.firstTimeStamp = n.start), S = j.getRangeValue(h), k = j.getRangeValue(u), b = j.getRangeValue(f), y = j.getRangeValue(p), (0, c["default"])(k) && (0, c["default"])(S) && (u > h ? (l = S, s = k, d = "bear") : (s = S, l = k, d = "bull"), e = Math.max(Math.abs(l - s), 1), a = s > l ? l : s), o = C.getRangeValue(new Date(n.start), new Date(n.end)), i = o - t / 2, (g = {
                                startDate: n.start,
                                endDate: n.end
                            }).x = i, g.endXPosition = i + t, g.midX = o, g.colHeight = e || 0, g.colY = a || k || S, g.y = g.highStickYExtend = b, g.closeValuePx = j.getRangeValue(h), g.width = t, g.openValue = u, g.closeValue = h, g.highValue = f, g.lowValue = p, g.value = h, g.lowStickYEntend = y, g.height = y - b || 0, g.groupId = d || "bull", g.groupConfig = "bull" === d ? "bullConfig" : "bearConfig", v = C.getBinIndex(n.start, m), O[v] = g
                        })), (x = D.hoverInfo) && x.forEach(function(e) {
                            e.hoverIndices.forEach(function(t) {
                                "object" == typeof O[t] && (O[t].style = (0, r.extend2)(O[t].style, e[O[t].groupId + "Style"]))
                            })
                        })
                    }, n._drawPlot = function() {
                        var e, t, n = this,
                            i = n.config,
                            a = i.dataInfo,
                            o = (0, r.defined)(i.bullOpacity),
                            s = (0, r.defined)(i["bull-fill-opacity"]),
                            l = (0, r.defined)(i["bull-stroke-opacity"]),
                            c = i.predictiveStyleAttributesBull,
                            d = (0, r.defined)(c.opacity),
                            u = (0, r.defined)(c["fill-opacity"]),
                            h = (0, r.defined)(c["stroke-opacity"]),
                            f = (0, r.defined)(i.bearOpacity),
                            p = (0, r.defined)(i["bear-fill-opacity"]),
                            g = (0, r.defined)(i["bear-stroke-opacity"]),
                            m = i.predictiveStyleAttributesBear,
                            v = (0, r.defined)(m.opacity),
                            y = (0, r.defined)(m["fill-opacity"]),
                            b = (0, r.defined)(m["stroke-opacity"]),
                            _ = {},
                            x = {},
                            k = r.BLANKSTRING,
                            S = !1,
                            w = function(e, t) {
                                v && (e.opacity = m.opacity), y && (e.opacity = m["fill-opacity"]), b && (e.opacity = m["stroke-opacity"]), d && (t.opacity = c.opacity), u && (t.opacity = c["fill-opacity"]), h && (t.opacity = c["stroke-opacity"])
                            };
                        o && (_.opacity = i.bullOpacity), s && (_.opacity = i["bull-fill-opacity"]), l && (_.opacity = i["bull-stroke-opacity"]), f && (x.opacity = i.bearOpacity), p && (x.opacity = i["bear-fill-opacity"]), g && (x.opacity = i["bear-stroke-opacity"]), a.forEach(function(i, r) {
                            i.groupConfig && (t = "bull" === i.groupId ? _ : x, S = n.isPlotPredictive(i), k = S ? i.groupId + "-predictive" : i.groupId, i.colHeight > 0 ? (e = Object.assign({
                                x: i.x,
                                y: i.colY,
                                height: i.colHeight,
                                width: i.width
                            }, t), i.style && Object.assign(e, i.style), S && w(x, _), n.addGraphicalElement({
                                el: "rect",
                                component: n,
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                container: {
                                    label: "group",
                                    id: "meso-" + k
                                },
                                label: "rect",
                                attr: e
                            }, !0)) : (i.openValue || i.closeValue) && (e = Object.assign({
                                path: "M" + i.x + "," + i.colY + ",H" + (i.x + i.width)
                            }, t), i.style && Object.assign(e, i.style), S && w(x, _), n.addGraphicalElement({
                                el: "path",
                                component: n,
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                container: {
                                    label: "group",
                                    id: "meso-" + k
                                },
                                label: "line",
                                attr: e
                            }, !0)), i.highStickYExtend && (e = Object.assign({
                                path: "M" + i.midX + "," + i.highStickYExtend + ",V" + (i.colY || i.highStickYExtend + i.height),
                                "stroke-linecap": "round"
                            }, t), i.style && Object.assign(e, i.style), n.addGraphicalElement({
                                el: "path",
                                component: n,
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                container: {
                                    label: "group",
                                    id: "meso-" + i.groupId
                                },
                                label: "high",
                                attr: e
                            }, !0)), i.lowStickYEntend && (e = Object.assign({
                                path: "M" + i.midX + "," + i.lowStickYEntend + ",V" + (i.colY + i.colHeight || i.lowStickYEntend - i.height),
                                "stroke-linecap": "round"
                            }, t), i.style && Object.assign(e, i.style), n.addGraphicalElement({
                                el: "path",
                                component: n,
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                container: {
                                    label: "group",
                                    id: "meso-" + i.groupId
                                },
                                label: "low",
                                attr: e
                            }, !0)))
                        }), i.hoverInfo = []
                    }, n._getTooltext = function(e, t, n) {
                        var i, a, o = this.config,
                            s = o.dataInfo[n],
                            l = e ? t ? 1 : .5 : 1;
                        return this._isInvalidTooltext(s) ? "" : (i = (0, r.defined)(s.groupConfig), a = "<div style='margin-bottom: 5px; opacity:" + l + "'>\n      <div>" + o.series + "</div>\n      </div>", i ? (o.series ? a : "") + ["open", "high", "low", "close"].reduce(function(e, t) {
                            var n = s[t + "TooltipValue"] || (s[t + "TooltipValue"] = s[t + "Value"] && o.formatterFn({
                                value: s[t + "Value"],
                                type: "tooltip",
                                prefix: o.prefix,
                                suffix: o.suffix
                            }));
                            return e + (n !== r.UNDEF ? "<div style = 'overflow: hidden;margin-top:4px;'>\n        <div style = 'float: left;'>" + t + "</div>\n        <div style = 'float: right;'>" + n + "</div>\n       </div>" : "")
                        }, "") : a)
                    }, t
                }(d["default"]);
                t["default"] = f
            },
            774: function(e, t, n) {
                "use strict";

                function i(e) {
                    var t = /M(.*)V(.*)/g.exec(e),
                        n = t[1],
                        i = t[2];
                    return {
                        MX: parseFloat(n.split(",")[0]),
                        MY: parseFloat(n.split(",")[1]),
                        VY: i = parseFloat(i)
                    }
                }
                t.__esModule = !0, t["default"] = void 0;
                var a = {
                    "initial.dataset.timeseriesCandlestick": function() {
                        var e = this.getFromEnv("yScale").getRangeValue(0),
                            t = -1,
                            n = null,
                            a = function(e, i) {
                                if (e === t) return n;
                                var a = function(e, t) {
                                    return {
                                        start: 2e-5 * e,
                                        end: 1
                                    }
                                }(e);
                                return t = e, n = a, a
                            };
                        return {
                            "rect.appearing": function(t) {
                                var n = t.props.index;
                                t.props.dataLength;
                                return [{
                                    initialAttr: {
                                        y: e
                                    },
                                    startEnd: function() {
                                        return a(n)
                                    },
                                    effect: "easeInOutQuart",
                                    slot: "middle"
                                }]
                            },
                            "line.appearing": function(t) {
                                var n = t.attr.path,
                                    i = t.props.index,
                                    r = (t.props.dataLength, function(e) {
                                        var t = /M(.*)H(.*)/g.exec(e),
                                            n = t[1],
                                            i = t[2];
                                        return {
                                            MX: parseFloat(n.split(",")[0]),
                                            MY: parseFloat(n.split(",")[1]),
                                            HX: i = parseFloat(i)
                                        }
                                    }(n));
                                return [{
                                    initialAttr: {
                                        path: "M" + r.MX + "," + e + "H" + r.HX
                                    },
                                    finalAttr: {
                                        path: "M" + r.MX + "," + r.MY + "H" + r.HX
                                    },
                                    startEnd: function() {
                                        return a(i)
                                    },
                                    effect: "easeInOutQuart",
                                    slot: "middle"
                                }]
                            },
                            "high.appearing": function(t) {
                                var n = t.attr.path,
                                    r = t.props.index,
                                    o = (t.props.dataLength, i(n));
                                return [{
                                    initialAttr: {
                                        path: "M" + o.MX + "," + e + "V" + (o.VY + (e - o.MY))
                                    },
                                    finalAttr: {
                                        path: "M" + o.MX + "," + o.MY + "V" + o.VY
                                    },
                                    startEnd: function() {
                                        return a(r)
                                    },
                                    effect: "easeInOutQuart",
                                    slot: "middle"
                                }]
                            },
                            "low.appearing": function(t) {
                                var n = t.attr.path,
                                    r = t.props.index,
                                    o = (t.props.dataLength, i(n));
                                return [{
                                    initialAttr: {
                                        path: "M" + o.MX + "," + e + "V" + (o.VY + (e - o.MY))
                                    },
                                    finalAttr: {
                                        path: "M" + o.MX + "," + o.MY + "V" + o.VY
                                    },
                                    startEnd: function() {
                                        return a(r)
                                    },
                                    effect: "easeInOutQuart",
                                    slot: "middle"
                                }]
                            }
                        }
                    }
                };
                t["default"] = a
            },
            775: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = i(n(773)),
                    o = i(n(705)),
                    s = n(180),
                    l = n(188),
                    c = i(n(776));
                (0, l.addDep)({
                    name: "ohlcAnimation",
                    type: "animationRule",
                    extension: c["default"]
                });
                var d = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, a["default"])(t, e);
                    var n = t.prototype;
                    return n.__setDefaultConfig = function() {
                        var t = this.config;
                        e.prototype.__setDefaultConfig.call(this), t.defaultBearStyle.stroke = "868AC8", t.defaultBearPredictiveStyle = {}, t.defaultBullPredictiveStyle = {}
                    }, n._drawPlot = function() {
                        var e, t, n = this,
                            i = n.config,
                            a = i.dataInfo,
                            r = (0, s.defined)(i.bullOpacity),
                            o = (0, s.defined)(i["bull-fill-opacity"]),
                            l = (0, s.defined)(i["bull-stroke-opacity"]),
                            c = i.predictiveStyleAttributesBull,
                            d = (0, s.defined)(c.opacity),
                            u = (0, s.defined)(c["fill-opacity"]),
                            h = (0, s.defined)(c["stroke-opacity"]),
                            f = (0, s.defined)(i.bearOpacity),
                            p = (0, s.defined)(i["bear-fill-opacity"]),
                            g = (0, s.defined)(i["bear-stroke-opacity"]),
                            m = i.predictiveStyleAttributesBear,
                            v = (0, s.defined)(m.opacity),
                            y = (0, s.defined)(m["fill-opacity"]),
                            b = (0, s.defined)(m["stroke-opacity"]),
                            _ = {},
                            x = {},
                            k = "",
                            S = !1;
                        r && (_.opacity = i.bullOpacity), o && (_.opacity = i["bull-fill-opacity"]), l && (_.opacity = i["bull-stroke-opacity"]), f && (x.opacity = i.bearOpacity), p && (x.opacity = i["bear-fill-opacity"]), g && (x.opacity = i["bear-stroke-opacity"]), a.forEach(function(i, r) {
                            var o, s;
                            i.groupConfig && (S = n.isPlotPredictive(i), k = S ? i.groupId + "-predictive" : i.groupId, S && (o = x, s = _, v && (o.opacity = m.opacity), y && (o.opacity = m["fill-opacity"]), b && (o.opacity = m["stroke-opacity"]), d && (s.opacity = c.opacity), u && (s.opacity = c["fill-opacity"]), h && (s.opacity = c["stroke-opacity"])), t = "bull" === i.groupId ? _ : x, !!i.lowStickYEntend + !!i.highStickYExtend + !!i.open + !!i.close > 1 ? "bull" === i.groupId ? (e = Object.assign({
                                path: "M" + i.midX + "," + (i.highStickYExtend || i.open || i.close) + ",V" + (i.lowStickYEntend || i.close || i.open),
                                "stroke-linecap": "round"
                            }, t), i.style && Object.assign(e, i.style), n.addGraphicalElement({
                                el: "path",
                                component: n,
                                container: {
                                    label: "group",
                                    id: "meso-" + k
                                },
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                label: "highlow",
                                attr: e
                            }, !0)) : (e = Object.assign({
                                path: "M" + i.midX + "," + (i.highStickYExtend || i.close) + ",V" + (i.lowStickYEntend || i.open),
                                "stroke-linecap": "round"
                            }, t), i.style && Object.assign(e, i.style), n.addGraphicalElement({
                                el: "path",
                                component: n,
                                container: {
                                    label: "group",
                                    id: "meso-" + k
                                },
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                label: "highlow",
                                attr: e
                            }, !0)) : (i.lowStickYEntend || i.highStickYExtend) && (e = Object.assign({
                                path: "M" + i.midX + "," + (i.lowStickYEntend || i.highStickYExtend) + ",V" + (i.lowStickYEntend || i.highStickYExtend),
                                "stroke-linecap": "round"
                            }, t), i.style && Object.assign(e, i.style), n.addGraphicalElement({
                                el: "path",
                                component: n,
                                container: {
                                    label: "group",
                                    id: "meso-" + i.groupId
                                },
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                label: "highlow",
                                attr: e
                            }, !0)), i.open && (e = Object.assign({
                                path: "M" + i.midX + "," + i.open + ",H" + i.leftExtend
                            }, t), i.style && Object.assign(e, i.style), n.addGraphicalElement({
                                el: "path",
                                component: n,
                                container: {
                                    label: "group",
                                    id: "meso-" + k
                                },
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                label: "open",
                                attr: e
                            }, !0)), i.close && (e = Object.assign({
                                path: "M" + i.midX + "," + i.close + ",H" + i.rightExtend
                            }, t), i.style && Object.assign(e, i.style), n.addGraphicalElement({
                                el: "path",
                                component: n,
                                container: {
                                    label: "group",
                                    id: "meso-" + k
                                },
                                props: {
                                    index: r,
                                    dataLength: a.length
                                },
                                label: "close",
                                attr: e
                            }, !0), i.style = void 0))
                        }), i.hoverInfo = []
                    }, n.allocatePosition = function() {
                        var e, t, n, i, a, r, l, c, d, u, h, f, p, g, m, v, y, b = this.getFromEnv("binDecider"),
                            _ = this.getFromEnv("xScale"),
                            x = this.getFromEnv("yScale"),
                            k = this.config,
                            S = k.indices,
                            w = S[0],
                            E = S[1],
                            C = S[2],
                            j = S[3],
                            D = S[4],
                            M = k.dataInfo,
                            T = k.data;
                        (k.repositioningDone = this._isRepositioningNeeded()) && (k.timeStampGap = b.getRangeThreshold()[2], m = _.getRangeValue(b.getRangeThreshold()[2]) - _.getRangeValue(0), e = m * (1 - k.plotSpacePercent / 100), M = k.dataInfo = [], T.forEach(function(f, m) {
                            t = f[w], n = _.getRangeValue(new Date(t.start), new Date(t.end)), i = f[E], a = f[D], r = f[C], l = f[j], m || (d = k.firstTimeStamp = t.start), v = x.getRangeValue(a), y = x.getRangeValue(i), g = x.getRangeValue(r), p = x.getRangeValue(l), (0, o["default"])(y) && (0, o["default"])(v) && (h = i > a ? "bear" : "bull"), (u = {
                                startDate: t.start,
                                endDate: t.end
                            }).rightExtend = n + e / 2, u.leftExtend = u.x = n - e / 2, u.endXPosition = u.x + e, u.y = g, u.closeValuePx = x.getRangeValue(a), u.width = e, u.close = v, u.openValue = i, u.closeValue = a, u.highValue = r, u.lowValue = l, u.value = a, u.open = y, u.midX = n, u.groupId = h || "bull", u.lowStickYEntend = p, u.highStickYExtend = g, u.height = p - g || 0, u.colY = u.height / 2 + g - 10, u["stroke-width"] = (0, s.pluckNumber)(k["default-stroke-width"], 1), u.groupConfig = "bull" === h ? "bullConfig" : "bearConfig", c = _.getBinIndex(t.start, d), M[c] = u
                        })), (f = k.hoverInfo) && f.forEach(function(e) {
                            e.hoverIndices.forEach(function(t) {
                                "object" == typeof M[t] && (M[t].style = e[M[t].groupId + "Style"])
                            })
                        })
                    }, n.getName = function() {
                        return "timeseries-ohlc"
                    }, t
                }(r["default"]);
                t["default"] = d
            },
            776: function(e, t, n) {
                "use strict";

                function i(e, t) {
                    var n, i, a, r, o, s, l = /M(.*)V(.*)/g;
                    return t && (l = /M(.*)H(.*)/g), i = (n = l.exec(e))[1], t && (s = n[2]) || (a = n[2]), r = parseFloat(i.split(",")[0]), o = parseFloat(i.split(",")[1]), a = parseFloat(a), s = parseFloat(s), t ? {
                        MX: r,
                        MY: o,
                        HX: s
                    } : {
                        MX: r,
                        MY: o,
                        VY: a
                    }
                }
                t.__esModule = !0, t["default"] = void 0;
                var a = {
                    "initial.dataset.timeseries-ohlc": function() {
                        var e = this.getFromEnv("yScale").getRangeValue(0),
                            t = -1,
                            n = null,
                            a = function(e, i) {
                                if (e === t) return n;
                                var a = function(e, t) {
                                    return {
                                        start: 2e-5 * e,
                                        end: 1
                                    }
                                }(e);
                                return t = e, n = a, a
                            };
                        return {
                            "highlow.appearing": function(t) {
                                var n = i(t.attr.path),
                                    r = t.props.index;
                                t.props.dataLength;
                                return [{
                                    initialAttr: {
                                        path: "M" + n.MX + "," + e + "V" + (n.VY + (e - n.MY))
                                    },
                                    startEnd: a(r),
                                    effect: "easeInOutQuart"
                                }]
                            },
                            "open.appearing": function(t) {
                                var n = i(t.attr.path, !0),
                                    r = t.props.index;
                                t.props.dataLength;
                                return [{
                                    initialAttr: {
                                        path: "M" + n.MX + "," + e + "H" + n.HX
                                    },
                                    startEnd: a(r),
                                    effect: "easeInOutQuart"
                                }]
                            },
                            "close.appearing": function(t) {
                                var n = i(t.attr.path, !0),
                                    r = t.props.index;
                                t.props.dataLength;
                                return [{
                                    initialAttr: {
                                        path: "M" + n.MX + "," + e + "H" + n.HX
                                    },
                                    startEnd: a(r),
                                    effect: "easeInOutQuart"
                                }]
                            }
                        }
                    }
                };
                t["default"] = a
            },
            777: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(412)),
                    r = i(n(423)),
                    o = i(n(778)),
                    s = i(n(779)),
                    l = function(e, t) {
                        return e[t]
                    },
                    c = function() {
                        function e() {
                            this.keysAccessor = (0, r["default"])([]), this.order = o["default"], this.offset = s["default"], this.valueAccessor = l
                        }
                        var t = e.prototype;
                        return t.generate = function(e) {
                            var t, n, i = this.keysAccessor(e),
                                a = e.length,
                                r = i.length,
                                o = new Array(r);
                            for (t = 0; t < r; ++t) {
                                var s = i[t],
                                    l = new Array(a),
                                    c = void 0,
                                    d = void 0;
                                for (o[t] = l, d = 0; d < a; ++d)(c = [0, +this.valueAccessor(e[d], s, d, e)]).data = e[d], l[d] = c;
                                l.key = s
                            }
                            for (n = this.order(o), t = 0; t < r; ++t) o[n[t]].index = t;
                            return this.offset(o, n), o
                        }, t.setKeysAccessor = function(e) {
                            return void 0 === e && (e = (0, r["default"])([])), this.keysAccessor = "function" == typeof e ? e : (0, r["default"])((0, a["default"])(e) ? e.slice() : []), this
                        }, t.getKeysAccessor = function() {
                            return this.keysAccessor
                        }, t.setValueAccessor = function(e) {
                            return void 0 === e && (e = l), this.valueAccessor = "function" == typeof e ? e : (0, r["default"])(+e), this
                        }, t.getValueAccessor = function() {
                            return this.valueAccessor
                        }, t.setOrder = function(e) {
                            return void 0 === e && (e = o["default"]), this.order = "function" == typeof e ? e : (0, r["default"])((0, a["default"])(e) ? e.slice() : []), this
                        }, t.getOrder = function() {
                            return this.order
                        }, t.setOffset = function(e) {
                            return void 0 === e && (e = s["default"]), this.offset = e, this
                        }, t.getOffset = function() {
                            return this.offset
                        }, e
                    }();
                t["default"] = c
            },
            778: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e) {
                    for (var t = e.length, n = new Array(t); --t >= 0;) n[t] = t;
                    return n
                }
            },
            779: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e, t) {
                    var n = e.length;
                    if (n > 1) {
                        var i, a, r, o = e[t[0]],
                            s = o.length;
                        for (a = 1; a < n; ++a)
                            for (i = o, o = e[t[a]], r = 0; r < s; ++r) o[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1], o[r][1] += o[r][0]
                    }
                }
            },
            780: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e, t) {
                    var n = e.length;
                    if (n > 1) {
                        var i, a, r, o, s = e[t[0]].length,
                            l = 0,
                            c = 0;
                        for (c = 0; c < s; ++c)
                            for (r = o = 0, l = 0; l < n; ++l)(a = (i = e[t[l]][c])[1] - i[0]) >= 0 ? (i[0] = r, r += a, i[1] = r) : a < 0 ? (i[1] = o, o += a, i[0] = o) : i[0] = r
                    }
                }
            },
            781: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e, t) {
                    var n = e.length;
                    if (n > 1) {
                        var i, a, r, o = e[t[0]],
                            s = o.length;
                        for (a = 0; a < o.length; a++) o[a][0] = null;
                        for (a = 1; a < n; ++a)
                            for (i = o, o = e[t[a]], r = 0; r < s; ++r) o[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1], o[r][1] += o[r][0]
                    }
                }
            },
            782: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(783));
                t["default"] = function(e) {
                    var t = e.attachChild(a["default"], "verticalCrossLine"),
                        n = e.getFromEnv("dataSource");
                    t.configure({
                        scale: e.config.xConfigs[0].scale,
                        type: "vertical",
                        timeFormatterFn: e.config.xConfigs[0].timeFormatterFn,
                        inputStyle: n.crossline && n.crossline.style || {}
                    })
                }
            },
            783: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(180),
                    s = i(n(705)),
                    l = "M",
                    c = "L",
                    d = "l",
                    u = "h",
                    h = "v",
                    f = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this);
                            var t = this.config;
                            t.type = "vertical", t.value = void 0, t._defaultLineStyle = {
                                stroke: "#9a9a9a",
                                "stroke-width": 1,
                                "stroke-opacity": 1
                            }, t._defaultTextStyle = {
                                fill: "#ffffff",
                                "font-size": "10px",
                                "font-weight": "normal",
                                "font-style": "normal",
                                "text-anchor": "middle"
                            }, t._defaultTagStyle = {
                                fill: "#5f5f5f"
                            }, t._defaultPadding = 2
                        }, n.configureAttributes = function(t) {
                            e.prototype.configureAttributes.call(this, t);
                            var n, i, a = this.config,
                                r = this.getFromEnv("baseTextStyle"),
                                o = this.getFromEnv("getStyleDef");
                            for (var s in t) t.hasOwnProperty(s) && (a[s] = t[s]);
                            n = a.type, i = a.inputStyle, a._lineStyle = Object.assign({}, a._defaultLineStyle, o(i.line), o(i[n + "-line"])), a._textStyle = Object.assign({}, a._defaultTextStyle, r, o(i.label), o(i[n + "-label"])), a._tagStyle = Object.assign({}, a._defaultTagStyle, o(i.tag), o(i[n + "-tag"]))
                        }, n.getPathArr = function() {
                            var e = this.config,
                                t = "vertical" === e.type,
                                n = e.scale,
                                i = e.value,
                                a = this.getLinkedParent().config,
                                r = a.padding,
                                o = a.canvasLeft - r.left,
                                s = a.canvasTop - r.top,
                                c = a.canvasWidth,
                                d = a.canvasHeight;
                            return t ? [l, n.getRangeValue(i), s, h, d] : [l, o, n.getRangeValue(i), u, c]
                        }, n.drawVerticalCrosslineText = function() {
                            var e, t, n, i = this.config,
                                a = i.dateRange,
                                r = i.timeFormatterFn({
                                    dateRange: a,
                                    type: "crossline"
                                }),
                                d = i.value,
                                f = i.scale,
                                p = (0, o.pluckNumber)(i.padding, i._defaultPadding),
                                g = this.getLinkedParent().config,
                                m = g.padding,
                                v = g.canvasLeft - m.left,
                                y = g.canvasTop - m.top,
                                b = g.canvasWidth,
                                _ = y + g.canvasHeight,
                                x = v + b,
                                k = this.getFromEnv("smartLabel"),
                                S = 0;
                            (0, s["default"])(d) && (k.setStyle(i._textStyle), n = k.getOriSize(r), t = f.getRangeValue(d), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "thermo",
                                    label: "thermo",
                                    isParent: !0
                                },
                                component: this,
                                label: "crossline",
                                attr: {
                                    name: "veritcal-crossline-marker-group"
                                },
                                id: "crossline"
                            }), t + n.width / 2 + 2 * p > x ? (e = [l, t, _, c, t, _ + p, h, n.height + 2 * p, u, -(n.width + 4 * p), h, -(n.height + 2 * p), c, t - p, _ + p, "z"], i._textStyle["text-anchor"] = "end", S = -2 * p) : t - n.width / 2 - 2 * p < v ? (e = [l, t, _, c, t, _ + p, h, n.height + 2 * p, u, n.width + 4 * p, h, -(n.height + 2 * p), c, t + p, _ + p, "z"], i._textStyle["text-anchor"] = "start", S = 2 * p) : (e = [l, t, _, c, t - p, _ + p, c, t - n.width / 2 - 2 * p, _ + p, h, n.height + 2 * p, u, n.width + 4 * p, h, -(n.height + 2 * p), c, t + p, _ + p, "z"], i._textStyle["text-anchor"] = "middle"), this.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: e
                                },
                                css: i._tagStyle,
                                id: "vertical-crossline-marker",
                                container: {
                                    label: "crossline"
                                }
                            }), this.addGraphicalElement({
                                el: "text",
                                attr: {
                                    text: r,
                                    x: t + S,
                                    y: _ + 2 * p + n.height / 2
                                },
                                css: i._textStyle,
                                id: "vertical-crossline-text",
                                container: {
                                    label: "crossline"
                                }
                            }))
                        }, n.drawHorizontalCrosslineText = function() {
                            var e = this.config,
                                t = e.value,
                                n = e.formatterFn({
                                    value: e.text,
                                    type: "crossline",
                                    prefix: e.prefix,
                                    suffix: e.suffix
                                }),
                                i = this.getHorizontalMarkerProps();
                            (0, s["default"])(t) && (this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "strato",
                                    label: "strato",
                                    isParent: !0
                                },
                                component: this,
                                label: "crossline",
                                attr: {
                                    name: "horizontal-crossline-marker-group"
                                },
                                id: "crossline"
                            }), e._tagStyle.fill = (0, o.pluck)(e.markerFill, e._tagStyle.fill), e._tagStyle.stroke = (0, o.pluck)(e._tagStyle.stroke, e.markerFill), this.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: i.markerPath
                                },
                                css: e._tagStyle,
                                id: "horizontal-crossline-marker",
                                container: {
                                    label: "crossline"
                                }
                            }), this.addGraphicalElement({
                                el: "text",
                                attr: {
                                    text: n,
                                    x: i.markerText.x,
                                    y: i.markerText.y
                                },
                                css: e._textStyle,
                                id: "horizontal-crossline-text",
                                outlineText: e.showTextOutline,
                                container: {
                                    label: "crossline"
                                }
                            }))
                        }, n.getHorizontalMarkerProps = function() {
                            var e, t, n, i = this.config,
                                a = i.value,
                                r = i.scale,
                                s = i.yAxisAlignment,
                                c = (0, o.pluckNumber)(i.padding, i._defaultPadding),
                                f = this.getLinkedParent().config,
                                p = i.formatterFn({
                                    value: i.text,
                                    type: "crossline",
                                    prefix: i.prefix,
                                    suffix: i.suffix
                                }),
                                g = f.borderConfig,
                                m = f.padding,
                                v = f.canvasLeft + g.leftBorder - m.left,
                                y = v + (f.canvasWidth - g.rightBorder + m.left),
                                b = this.getFromEnv("smartLabel"),
                                _ = {},
                                x = {};
                            switch (b.setStyle(i._textStyle), t = b.getSmartText(p), e = r.getRangeValue(a), s) {
                                case "left":
                                    n = [l, v, e, u, -5, d, -5, -t.height / 2 - 2 * c, u, -(t.width + 2 * c), h, t.height + 4 * c, u, t.width + 2 * c, d, 5, -t.height / 2 - 2 * c], _.x = v - 10 - (t.width + 2 * c) / 2, _.y = e;
                                    break;
                                case "right":
                                    n = [l, y, e, u, 5, d, 10, -t.height / 2 - 2 * c, u, t.width + 2 * c, h, t.height + 4 * c, u, -(t.width + 2 * c), d, -10, -t.height / 2 - 2 * c], _.x = y + 10 + (t.width + 2 * c) / 2, _.y = e
                            }
                            return x.markerPath = n, x.markerText = _, x
                        }, n.draw = function() {
                            var e = this.config,
                                t = +e.value && this.getPathArr() || [];
                            this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "strato",
                                    label: "strato",
                                    isParent: !0
                                },
                                component: this,
                                label: "verticalcrossline",
                                attr: {
                                    name: "vertical-crossline-group"
                                },
                                id: "crossline"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "strato",
                                    label: "strato",
                                    isParent: !0
                                },
                                component: this,
                                label: "horizontalcrossline",
                                attr: {
                                    name: "horizontal-crossline-group"
                                },
                                id: "crossline"
                            }), t.length && this.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: t
                                },
                                css: e._lineStyle,
                                container: {
                                    label: e.type + "crossline"
                                },
                                id: e.type + "-crossline-path",
                                component: this
                            }), e.showMarker && ("vertical" === e.type ? this.drawVerticalCrosslineText() : this.drawHorizontalCrosslineText())
                        }, t
                    }(r.SmartRenderer);
                t["default"] = f
            },
            784: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(783)),
                    r = n(180);
                t["default"] = function(e) {
                    var t = e.getFromEnv("dataSource"),
                        n = e.getFromEnv("chart-attrib");
                    e.attachChild(a["default"], "horizontalCrossLine").configure({
                        type: "horizontal",
                        inputStyle: t.crossline && t.crossline.style || {},
                        showTextOutline: (0, r.pluckNumber)(n.textoutline, 0)
                    })
                }
            },
            785: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e, t) {
                    var n = e[t];
                    return Object.assign({}, n, {
                        columnname: n.columnname
                    })
                }
            },
            786: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = n(180),
                    r = i(n(787));
                t["default"] = function(e) {
                    var t, n, i = e.getFromEnv("dataSource"),
                        o = i.caption || {},
                        s = i.subcaption || {},
                        l = e.getFromEnv("getStyleDef");
                    t = o.text || "", n = l(o.style && o.style.text);
                    var c = {
                        caption: t,
                        subCaption: s.text,
                        captionCss: n,
                        subCaptionCss: l(s.style && s.style.text)
                    };
                    (0, a.componentFactory)(e, r["default"], "caption", 1, [c])
                }
            },
            787: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a, r, o = i(n(194)),
                    s = n(195),
                    l = n(180),
                    c = ((a = {})["font-size"] = "16px", a["font-style"] = "normal", a["font-weight"] = 
                    // dark text
                    "bold", a.fill = "#ffffff", a),
                    d = ((r = {})["font-size"] = "12px", r["font-style"] = "normal", r["font-weight"] = "normal", r.fill = "#B1B1B1", r),
                    u = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, o["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this);
                            var t = this.config;
                            t.captionCss = c, t.subCaptionCss = d, t.alignment = "left", t.gap = 0
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n = this.config,
                                i = this.getFromEnv("baseTextStyle");
                            Object.keys(t).forEach(function(e) {
                                return n[e] = t[e]
                            }), n.captionCss = Object.assign({}, c, i, n.captionCss || {}), n.subCaptionCss = Object.assign({}, d, i, n.subCaptionCss || {})
                        }, n.setDimension = function(e) {
                            var t, n, i, a, r = this.config,
                                o = this.getFromEnv("smartLabel"),
                                s = e.height - 10,
                                l = e.width,
                                c = 0,
                                d = 0;
                            return r.subCaption ? (c = .7 * (t = s - (a = r.gap = .02 * s)), d = r.caption ? .3 * t : s) : t = c = s, o.useEllipsesOnOverflow(!0), o.setStyle(r.captionCss), n = r.captionDim = o.getSmartText(r.caption, l, c), o.setStyle(r.subCaptionCss), i = r.subCaptionDim = o.getSmartText(r.subCaption, l, d), s = n.height + (r.subCaption ? a : 0) + i.height, s += 0 === s ? 0 : 10, r.spaceTaken = {
                                width: l,
                                height: s
                            }, {
                                height: s,
                                width: l
                            }
                        }, n.draw = function() {
                            var e, t, n = this.config,
                                i = this.getFromEnv("chart").config,
                                a = n.captionDim,
                                r = n.subCaptionDim,
                                o = n.spaceTaken,
                                s = {
                                    text: a.text
                                },
                                c = {
                                    text: r.text
                                };
                            switch (n.alignment) {
                                case "right":
                                    e = o.width, t = "end";
                                    break;
                                case "middle":
                                    e = o.width / 2, t = "middle";
                                    break;
                                case "left":
                                default:
                                    e = 0, t = "start"
                            }
                            s.x = c.x = e, s["text-anchor"] = c["text-anchor"] = t, s["vertical-align"] = c["vertical-align"] = "top", s.y = 0, c.y = n.gap + a.height, this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "strato",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "group",
                                attr: {
                                    name: "caption-strato",
                                    transform: n.translate
                                },
                                id: "strato"
                            }), n.caption && this.addGraphicalElement({
                                el: "text",
                                attr: {
                                    x: s.x,
                                    y: s.y,
                                    text: s.text,
                                    opacity: n.captionCss.opacity
                                },
                                css: n.captionCss,
                                container: {
                                    id: "strato",
                                    label: "group",
                                    isParent: !1
                                },
                                tooltext: i.showTooltip ? a.tooltext : l.UNDEF,
                                component: this,
                                id: "caption",
                                label: "text"
                            }), n.subCaption && this.addGraphicalElement({
                                el: "text",
                                attr: {
                                    x: c.x,
                                    y: c.y,
                                    text: c.text,
                                    opacity: n.subCaptionCss.opacity
                                },
                                css: n.subCaptionCss,
                                container: {
                                    id: "strato",
                                    label: "group",
                                    isParent: !1
                                },
                                tooltext: i.showTooltip ? r.tooltext : l.UNDEF,
                                component: this,
                                id: "subCaption",
                                label: "text"
                            })
                        }, t
                    }(s.SmartRenderer);
                t["default"] = u
            },
            788: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(687)),
                    r = i(n(706)),
                    o = i(n(707)),
                    s = i(n(703)),
                    l = i(n(412)),
                    c = i(n(708)),
                    d = ["column", "line", "step-line", "smooth-line", "area", "step-area", "smooth-area", "candlestick", "ohlc"],
                    u = function() {
                        return !0
                    },
                    h = function(e, t) {
                        return void 0 === e && (e = ""), void 0 === t && (t = !0), d.includes(e) ? e : t ? "line" : void 0
                    },
                    f = function(e, t, n) {
                        void 0 === n && (n = {});
                        var i = [];
                        if ((0, o["default"])(e) && t(e)) {
                            var a = (0, s["default"])(n.plot) ? Object.assign({}, n.plot) : {};
                            a.type = h(a.type || n.plottype), a.value = e, a.aggregation = a.aggregation || n.aggregation || "avg", i.push(Object.assign({}, n, {
                                plot: [a]
                            }))
                        }
                        return i
                    },
                    p = function(e, t) {
                        var n, i, a, r, o, l = h(e.type),
                            c = "candlestick" === l || "ohlc" === l,
                            d = function(e) {
                                return t(e) ? e : void 0
                            },
                            u = {};
                        if (n = (0, s["default"])(e.value) ? d(e.value.value) : d(e.value), c ? ((0, s["default"])(e.value) && (i = d(e.value.open), a = d(e.value.close), r = d(e.value.high), o = d(e.value.low)), u = i && r && o && a ? Object.assign({}, e, {
                                type: l,
                                high: r,
                                low: o,
                                open: i,
                                close: a,
                                value: null
                            }) : i || r || o || a ? Object.assign({}, e, {
                                type: l,
                                high: r,
                                low: o,
                                open: i,
                                close: a,
                                value: null
                            }) : Object.assign({}, e, {
                                type: l,
                                high: n,
                                low: n,
                                open: n,
                                close: n,
                                value: n
                            })) : u = Object.assign({}, e, {
                                type: l,
                                value: n
                            }), u.typeinnavigator = h(u.typeinnavigator, !1), c && (n || i || a || r || o) || n) return u
                    },
                    g = function(e, t) {
                        var n, i = [],
                            a = e.plot,
                            c = (0, s["default"])(a),
                            d = e.hasOwnProperty("plot") && !(c && !a.hasOwnProperty("value")) && "axis",
                            u = function(e) {
                                return (0, o["default"])(e) && t(e)
                            };
                        if (n = e, (0, s["default"])(n) && ((0, o["default"])(n.plot) || (0, r["default"])(n.plot) || (0, s["default"])(n.plot))) {
                            var h = [];
                            if (i.push(Object.assign({}, e, {
                                    plot: h
                                })), (c || (0, o["default"])(a)) && (a = [a]), (0, r["default"])(a)) a.filter(function(e) {
                                return !!e
                            }).forEach(function(t) {
                                var n;
                                if ((0, s["default"])(t)) {
                                    var i = t.type || e.plottype;
                                    n = p(Object.assign({}, t, {
                                        aggregation: t.aggregation || e.aggregation || "avg",
                                        type: i
                                    }), u)
                                } else u(t) && (n = p({
                                    value: t,
                                    type: e.plottype,
                                    aggregation: e.aggregation || "avg"
                                }, u));
                                n && h.push(n)
                            })
                        }
                        return i[0] && i[0].plot.length ? {
                            output: i,
                            action: !!((0, l["default"])(a) && a.length > i[0].plot.length) && "plot"
                        } : {
                            output: [],
                            action: d
                        }
                    },
                    m = function(e, t, n) {
                        var i = [],
                            a = [];
                        if ((0, c["default"])(e)) i = f(e, t);
                        else if ((0, s["default"])(e)) {
                            var r, o = g(e, t);
                            i = o.output, (r = o.action) && a.push(r)
                        } else if ((0, l["default"])(e)) {
                            var d = function(e, t, n) {
                                var i, a = [],
                                    r = [];
                                return e.forEach(function(e) {
                                    (0, c["default"])(e) ? a = a.concat(f(e, t, n)): (0, s["default"])(e) && (i = g(e, t), a = a.concat(i.output), i.action && r.push(i.action))
                                }), {
                                    output: a,
                                    actions: r
                                }
                            }(e, t, n);
                            i = d.output, a = d.actions
                        }
                        return {
                            output: i,
                            actions: a
                        }
                    },
                    v = function(e, t, n) {
                        void 0 === e && (e = []), void 0 === n && (n = !0);
                        var i = [],
                            r = [],
                            o = 0,
                            d = (0, s["default"])(t);
                        if (t) {
                            var h = m(t, function(t) {
                                return e.indexOf(t) >= 0
                            });
                            i = h.output, r = h.actions, o = i.length;
                            var f = r.includes("axis");
                            d ? f && (r = ["fullaxis"]) : (0, l["default"])(t) && o < t.length && (o ? !f && r.push("axis") : r = ["fullaxis"])
                        }
                        i.length || (i = m(e, u, d && t).output);
                        return n && i.forEach(function(e) {
                            if (!(0, c["default"])(e.title)) {
                                var t = e.plot.map(function(e) {
                                    return e.value
                                });
                                e.title = t.join(" - ")
                            }
                        }), {
                            expandedAxis: i,
                            actions: (0, a["default"])(r)
                        }
                    };
                t["default"] = v
            },
            789: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(729)),
                    r = i(n(790)),
                    o = i(n(703)),
                    s = i(n(412)),
                    l = i(n(793)),
                    c = function(e, t) {
                        return (0, l["default"])(t) && function(e, t) {
                            return t >= 0 && t < e.length
                        }(e, t)
                    },
                    d = function(e, t) {
                        return c(e, +t) || function(e, t) {
                            return (0, o["default"])(t) && c(e, +t.index)
                        }(e, t)
                    },
                    u = function(e) {
                        return (0, o["default"])(e) ? (0, a["default"])(e, {
                            index: +e.index
                        }) : {
                            index: +e
                        }
                    },
                    h = function(e) {
                        return (0, a["default"])(e, {
                            x: (0, s["default"])(e.x) ? e.x.map(u) : [u(e.x)],
                            y: (0, s["default"])(e.y) ? e.y.map(u) : [u(e.y)]
                        })
                    },
                    f = function(e, t) {
                        return (0, s["default"])(t) ? (0, r["default"])(function(t) {
                            return d(e, t)
                        }, t) : d(e, t)
                    };
                t["default"] = function(e, t, n, i) {
                    void 0 === e && (e = []), void 0 === t && (t = []), void 0 === n && (n = []);
                    var a, r = function(n) {
                            return (0, o["default"])(n) && f(e, n.x) && f(t, n.y)
                        },
                        l = (a = n, (0, s["default"])(a) && a.length > 0 ? a.filter(r).map(h) : r(a) ? [h(a)] : []);
                    return l.length ? l : i(e, t)
                }
            },
            793: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t["default"] = void 0;
                t["default"] = function(e) {
                    return "number" == typeof e && !isNaN(e)
                }
            },
            794: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(707)),
                    r = n(180);
                t["default"] = function(e, t, n, i, o) {
                    void 0 === e && (e = []), void 0 === t && (t = []), void 0 === n && (n = ""), void 0 === i && (i = ""), void 0 === o && (o = "");
                    var s = function(t) {
                            return (0, a["default"])(t) && e.indexOf(t) >= 0 ? t : r.UNDEF
                        },
                        l = s(n),
                        c = s(i),
                        d = s(o);
                    return t.map(function(e) {
                        var t = s(e.series) || l,
                            n = s(e.stack) || c,
                            i = s(e.group) || d;
                        return e.plot = e.plot.map(function(e) {
                            var a = e.type;
                            return "column" === a || /area/.test(a) ? (e.stack = s(e.stack) || n || t, e.group = s(e.group) || i) : (e.stack = s(e.stack) || n, e.group = s(e.group) || i || t), e
                        }), e
                    })
                }
            },
            795: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(796)),
                    r = n(180);
                t["default"] = function(e) {
                    (0, r.componentFactory)(e, a["default"], "background", 1, [{}])
                }
            },
            796: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            this.config.backgroundCss = {
                                fill: "rgba(0, 0, 0, 0)"
                            }
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n = this.config,
                                i = this.getFromEnv("chart-attrib"),
                                a = i.style && i.style.background;
                            Object.keys(t).forEach(function(e) {
                                return n[e] = t[e]
                            }), n.backgroundCss = Object.assign(n.backgroundCss, this.getFromEnv("getStyleDef")(a))
                        }, n.setDimension = function(e) {
                            void 0 === e && (e = {}), Object.assign(this.config, e)
                        }, n.draw = function() {
                            var e = this.config;
                            this.addGraphicalElement({
                                el: "rect",
                                attr: {
                                    height: e.height,
                                    width: e.width,
                                    transform: e.translate,
                                    opacity: e.backgroundCss.opacity
                                },
                                container: {
                                    id: "tropo",
                                    label: "group",
                                    isParent: !0
                                },
                                css: e.backgroundCss,
                                component: this,
                                id: "background",
                                label: "rect"
                            })
                        }, t
                    }(n(195).SmartRenderer);
                t["default"] = r
            },
            797: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(729)),
                    r = i(n(798)),
                    o = n(180),
                    s = i(n(785)),
                    l = (0, a["default"])({
                        orientation: "bottom",
                        align: "bottom",
                        visible: !0,
                        overlap: !0,
                        dayinmajor: !0,
                        stickycontextlabel: !1,
                        scalemode: "random",
                        skipinfo: {
                            minor: !0
                        },
                        offset: {
                            x: 2,
                            y: 2
                        }
                    }),
                    c = (0, a["default"])({
                        orientation: "left",
                        align: "left",
                        visible: !0,
                        overlap: !1
                    });
                t["default"] = function(e) {
                    var t = e.config,
                        n = t.contextAxesX || [],
                        i = t.contextAxesY || [],
                        d = (t.contextPanels || []).map(function(e) {
                            return (0, a["default"])(e, {
                                x: e.x.map(function(e) {
                                    return (0, a["default"])(l(e), (0, s["default"])(n, e.index))
                                }),
                                y: e.y.map(function(e) {
                                    return (0, a["default"])(c(e), (0, a["default"])((0, s["default"])(i, e.index), {
                                        plottype: "line"
                                    }))
                                }),
                                dataTable: t.dataTable
                            })
                        }),
                        u = e.config.contextTableMap,
                        h = e.getFocusLimit(),
                        f = d.map(function(e) {
                            return (0, a["default"])(e, {
                                tableMap: u,
                                values: h
                            })
                        });
                    if ((0, o.componentFactory)(e, r["default"], "timeNavigator", d.length, f), t.contextPanels = f, e.getChildren("timeNavigator")) {
                        var p = e.getChildren("timeNavigator")[0],
                            g = p.getChildren("brush"),
                            m = p.getChildren("scrollbar");
                        p.attachHandlers(), p.addExtEventListener("focusLimitChanged", function() {
                            p.config.values = e.getFocusLimit(), p.setChildDimension(), g[0] && g[0].asyncDraw && g[0].asyncDraw(), m[0] && m[0].asyncDraw && m[0].asyncDraw()
                        }, e)
                    }
                }
            },
            798: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = i(n(733)),
                    s = i(n(754)),
                    l = i(n(799)),
                    c = i(n(800)),
                    d = i(n(801)),
                    u = n(180),
                    h = {
                        stroke: "#F1F1F1",
                        "stroke-width": "1",
                        "stroke-opacity": "1"
                    },
                    f = function(e) {
                        var t = e.config,
                            n = t.xConfigs[0].style ? t.xConfigs[0].style : {},
                            i = Object.assign({}, h, e.getFromEnv("getStyleDef")(n["grid-line"]));
                        e.attachChild(o["default"], "canvas").configure({
                            xConfigs: t.xConfigs,
                            yConfigs: t.yConfigs,
                            plotConfigs: t.plotConfigs,
                            tableMap: t.tableMap,
                            enableGridLines: !0,
                            gridLineDirection: "vertical",
                            enableMarkers: !1,
                            enableReferenceLine: !1,
                            enableReferenceZone: !1,
                            leftBorder: t.border.left,
                            bottomBorder: t.border.bottom,
                            topBorder: t.border.top,
                            rightBorder: t.border.right,
                            enableTimeMarkers: !1,
                            styleGridLines: 0,
                            includeLegend: 0,
                            enableMouseTracking: 0,
                            isContext: !0,
                            dataTable: t.dataTable,
                            gridLineStyle: i
                        })
                    },
                    p = function(e) {
                        return e.scale
                    },
                    g = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this) || this)._dimensions = {}, t._translation = {}, t._scrollbarConfig = {}, t.registerFactory("timeNavigatorAxis", l["default"]), t.registerFactory("scrollbar", c["default"]), t.registerFactory("brush", d["default"]), t.registerFactory("canvas", f), t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function(t) {
                            void 0 === t && (t = {}), e.prototype.__setDefaultConfig.call(this, t);
                            var n = this.config;
                            n.startX = 0, n.startY = 0, n.scrollbarHeight = 18, n.scrollbarStart = -17.5, n.scrollbarButtonWidth = 17, n.yScalePadding = 20, n.border = {
                                left: 1,
                                right: 1,
                                top: 1,
                                bottom: 0
                            }, n.defaultButtonStyle = {
                                fill: "#e3e3e3"
                            }, n.defaultTrackStyle = {
                                fill: "#f8f8f8"
                            }, n.defaultScrollBarStyle = {
                                fill: "#e3e3e3"
                            }
                        }, n.setContextScale = function() {
                            var e, t = this.config,
                                n = this.getFromEnv("chart").getContextLimit(),
                                i = t.xConfigs.map(p)[0];
                            t.contextScale = e = i.copy(), e.minBin = i.minBin, e.setDomain([n[0], n[1]])
                        }, n.setDimension = function(e) {
                            var t = this,
                                n = this.config,
                                i = this.getChildren("canvas")[0],
                                a = this.getChildren("brush")[0],
                                r = n.border,
                                o = a.getLabelSpace();
                            this._dimensions.width = e.width, this._dimensions.height = e.height, i.setDimension({
                                left: n.startX,
                                top: o,
                                width: this._dimensions.width,
                                height: Math.max(this._dimensions.height - o - n.scrollbarHeight, 0)
                            }), this.getChildren("timeAxis").forEach(function(e) {
                                e.setTranslation(0, o), e.placeAxis()
                            }), n.xConfigs.map(p).forEach(function(e) {
                                e.setRange([r.left, t._dimensions.width - (r.left / 2 + r.right / 2)])
                            }), n.yConfigs.map(p).forEach(function(e) {
                                return e.setRange([t._dimensions.height - n.scrollbarHeight - r.top - r.bottom, o])
                            }), this.setContextScale()
                        }, n.getPosition = function() {
                            return {
                                x: this.config._translateX,
                                y: this.config._translateY
                            }
                        }, n.setChildDimension = function() {
                            var e = this.config,
                                t = this.getChildren("brush")[0],
                                n = t.getLabelSpace(),
                                i = this.getChildren("scrollbar")[0];
                            t.setMaxBrushDimensions({
                                x: e.startX,
                                y: n,
                                width: this._dimensions.width,
                                height: this._dimensions.height - n - e.scrollbarHeight
                            }), i.setDimension({
                                x: e.scrollbarStart,
                                y: this._dimensions.height - e.scrollbarHeight,
                                height: e.scrollbarHeight,
                                width: this._dimensions.width + 2 * e.scrollbarButtonWidth + 1
                            }), this.setScrollbarConfig("width", this._dimensions.width + 2 * e.scrollbarButtonWidth + 1), i.config.scrollRatio = this.getScrollRatio(), this.setScrollbarConfig("scrollRatio", i.config.scrollRatio), i.config.scrollPosition = this.getScrollPosition(), this.setScrollbarConfig("scrollPosition", i.config.scrollPosition)
                        }, n.getDimension = function() {
                            return this._dimensions
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n, i, a, r, o, s, l, c, d, h = this.config,
                                f = this.getFromEnv("dataSource"),
                                p = f.chart && f.chart.style && f.chart.style.navigator || {},
                                g = this.getFromEnv("getStyleDef"),
                                m = h.defaultButtonStyle,
                                v = h.defaultTrackStyle,
                                y = h.defaultScrollBarStyle;
                            h.style = p, n = h.style.scrollbar || {}, i = Object.assign({}, y, g(n.scroller)), r = Object.assign({}, m, g(n.button)), a = Object.assign({}, v, g(n.track)), o = i.fill, s = a.fill, l = r.fill, c = "#" + (0, u.getDarkColor)(l, 60), d = "#" + (0, u.getDarkColor)(o, 60), t.x && (h.xConfigs = t.x), t.y && (h.yConfigs = t.y), t.tableMap && (h.tableMap = t.tableMap), t.values && (h.values = t.values), t.plots && (h.plotConfigs = t.plots), h.dataTable = t.dataTable, this.addToEnv("timeNavigator", this), this.addToEnv("timeNavigatorConfig", h), this.setScrollbarConfig("anchorFill", o), this.setScrollbarConfig("anchorStroke", "none"), this.setScrollbarConfig("trackFill", s), this.setScrollbarConfig("trackStroke", "none"), this.setScrollbarConfig("buttonFill", l), this.setScrollbarConfig("buttonStroke", "none"), this.setScrollbarConfig("buttonPointerFill", c), this.setScrollbarConfig("drawStripes", 1), this.setScrollbarConfig("stripesStroke", d), this.setScrollbarConfig("restrictScrollAnchor", 0)
                        }, n.attachHandlers = function() {
                            var e, t, n, i = this;
                            i.addEventListener("fc-mouseover", i.mouseoverHandler || (i.mouseoverHandler = function() {
                                clearTimeout(i.mouseoutTimer), e = this.getChildren("brush")[0], t = e.getChildren("leftLabel")[0], n = e.getChildren("rightLabel")[0], t.config.showLabel || n.config.showLabel || (t.setData({
                                    showLabel: !0
                                }, !0), n.setData({
                                    showLabel: !0
                                }, !0))
                            })), i.addEventListener("fc-mouseup", i.mouseupHandler || (i.mouseupHandler = function() {
                                e.config.pointerReleasedOnParent = !0
                            })), i.addEventListener("fc-mouseout", i.mouseoutHandler || (i.mouseoutHandler = function() {
                                i.config.labelsGettingDragged || (i.mouseoutTimer = setTimeout(function() {
                                    t.setData({
                                        showLabel: !1
                                    }, !0), n.setData({
                                        showLabel: !1
                                    }, !0)
                                }, 20))
                            }))
                        }, n.draw = function() {
                            this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "tropo",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "group",
                                attr: {
                                    name: "timenav-tropo",
                                    transform: this.config.translate
                                },
                                id: "tropo"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "strato",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "group",
                                attr: {
                                    name: "timenav-strato",
                                    transform: this.config.translate
                                },
                                id: "strato"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "meso",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "group",
                                attr: {
                                    name: "timenav-meso",
                                    transform: this.config.translate
                                },
                                id: "meso"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "thermo",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "group",
                                attr: {
                                    name: "timenav-thermo",
                                    transform: this.config.translate
                                },
                                id: "thermo"
                            }), this.addGraphicalElement({
                                el: "group",
                                container: {
                                    id: "exo",
                                    label: "group",
                                    isParent: !0
                                },
                                component: this,
                                label: "group",
                                attr: {
                                    name: "timenav-exo",
                                    transform: this.config.translate
                                },
                                id: "exo"
                            }), this.addGraphicalElement({
                                el: "group",
                                attr: {
                                    name: "time-axis-group"
                                },
                                id: "axisTopGroup",
                                label: "group",
                                container: {
                                    id: "strato",
                                    label: "group"
                                },
                                component: this
                            }, !0), this.addGraphicalElement({
                                el: "group",
                                attr: {
                                    name: "scrollbar-group"
                                },
                                id: "scrollbarContainer",
                                label: "scrollbar",
                                container: {
                                    id: "thermo",
                                    label: "group"
                                },
                                component: this
                            }, !0), this.setChildDimension()
                        }, n.setScrollbarConfig = function(e, t) {
                            this._scrollbarConfig[e] = t
                        }, n.getScrollbarConfig = function(e) {
                            return e ? this._scrollbarConfig[e] : this._scrollbarConfig
                        }, n.validateDomain = function(e) {
                            var t = this.getFromEnv("chart"),
                                n = this.config.contextScale,
                                i = n.getDomainValue(e[0]),
                                a = n.getDomainValue(e[1]);
                            t.setFocusLimit([i, a])
                        }, n.getScrollRatio = function() {
                            var e = this.getChildren("scrollbar")[0].config,
                                t = e.width,
                                n = e.height,
                                i = 2 * Math.min(n, .5 * t);
                            return (this.getChildren("brush")[0].getCurrentBrushDimensions().width + 1) / Math.max(.001, t - i)
                        }, n.getScrollPosition = function() {
                            var e = this.getChildren("scrollbar")[0].config,
                                t = e.width,
                                n = e.height,
                                i = 2 * Math.min(n, .5 * t),
                                a = this.getChildren("brush")[0],
                                r = a.getCurrentBrushDimensions().x,
                                o = a.getCurrentBrushDimensions().width,
                                s = this.getScrollbarConfig("scrollRatio") * (t - i),
                                l = t - (i + s);
                            return (r + o / 2 - (i / 2 + s / 2 - this.config.scrollbarButtonWidth)) / l
                        }, n.getDSdef = function() {
                            return s["default"]
                        }, t
                    }(r.SmartRenderer);
                t["default"] = g
            },
            799: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(732));
                t["default"] = function(e) {
                    var t = e.getFromEnv("baseTextStyle");
                    e.attachChild(a["default"], "timeAxis"), e.getChildren("timeAxis").forEach(function(n) {
                        n.configure({
                            skipinfo: {
                                minor: !0
                            },
                            overlap: !0,
                            validateLabelDimensions: 1,
                            offset: {
                                x: 2,
                                y: 2
                            },
                            style: {
                                "label-major": Object.assign({
                                    fill: "#5f5f5f",
                                    "font-size": 11,
                                    "text-anchor": "start"
                                }, t),
                                "label-minor": Object.assign({
                                    "text-anchor": "start"
                                }, t),
                                "label-context": Object.assign({
                                    "text-anchor": "start"
                                }, t)
                            },
                            ticksize: 0,
                            domainline: !1,
                            align: "top",
                            dayinmajor: !0,
                            stickycontextlabel: !1,
                            scalemode: "random",
                            scale: e.config.xConfigs[0].scale
                        })
                    })
                }
            },
            800: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(291));
                t["default"] = function(e) {
                    var t, n = e.attachChild(a["default"], "scrollbar"),
                        i = n.getFromEnv("dataSource"),
                        r = n.getFromEnv("getStyleDef"),
                        o = i.navigator && i.navigator.scrollbar && i.navigator.scrollbar.style || {};
                    t = {
                        button: Object.assign({
                            stroke: e.getScrollbarConfig("buttonStroke"),
                            fill: e.getScrollbarConfig("buttonFill")
                        }, r(o.button)),
                        arrow: Object.assign({
                            fill: e.getScrollbarConfig("buttonPointerFill")
                        }, r(o.arrow)),
                        scroller: Object.assign({
                            stroke: e.getScrollbarConfig("anchorStroke"),
                            fill: e.getScrollbarConfig("anchorFill")
                        }, r(o.scroller)),
                        grip: Object.assign({
                            stroke: e.getScrollbarConfig("stripesStroke")
                        }, r(o.grip)),
                        track: Object.assign({
                            stroke: e.getScrollbarConfig("trackStroke"),
                            fill: e.getScrollbarConfig("trackFill")
                        }, r(o.track))
                    }, n.configure({
                        isHorizontal: !0,
                        displayFlat: !0,
                        width: e.getScrollbarConfig("width"),
                        height: e.getScrollbarConfig("height"),
                        style: t,
                        drawStripes: e.getScrollbarConfig("drawStripes"),
                        restrictScrollAnchor: e.getScrollbarConfig("restrictScrollAnchor"),
                        scrollRatio: e.getScrollbarConfig("scrollRatio")
                    }), n.attachEventHandlers({
                        scroll: function(t) {
                            var n = e.getChildren("scrollbar")[0].config,
                                i = n.width,
                                a = n.height,
                                r = e.getScrollbarConfig("scrollRatio"),
                                o = Math.min(a, .5 * i),
                                s = (i - 2 * o) * r - 1,
                                l = n.x + o + .5 + (i - 2 * o - s) * t;
                            e.validateDomain([l, l + s])
                        }
                    })
                }
            },
            801: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(802));
                t["default"] = function(e) {
                    var t = e.attachChild(a["default"], "brush"),
                        n = e.getFromEnv("dataSource");
                    t.configure({
                        values: e.config.values,
                        style: n.navigator && n.navigator.window && n.navigator.window.style || {}
                    })
                }
            },
            802: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = i(n(803)),
                    s = i(n(804)),
                    l = i(n(805)),
                    c = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this) || this)._maxDimensions = {}, t._currDimensions = {}, t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function(t) {
                            void 0 === t && (t = {}), e.prototype.__setDefaultConfig.call(this, t);
                            var n = this.config;
                            n.handleWidth = 12, n.handleHeight = 20
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n = this.config;
                            n.values = t.values, n.style = t.style, this.createChildComponents()
                        }, n.setChildDimension = function() {
                            var e = this.config,
                                t = this.getChildren("selection")[0],
                                n = this.getChildren("leftHandle")[0],
                                i = this.getChildren("rightHandle")[0],
                                a = this.getChildren("leftLabel")[0],
                                r = this.getChildren("rightLabel")[0],
                                o = this.getFromEnv("timeNavigatorConfig").contextScale,
                                s = this.getFromEnv("timeNavigatorConfig").values || [],
                                l = o.getRangeValue(s[0]),
                                c = o.getRangeValue(s[1]);
                            t.setDimension({
                                x: l,
                                y: this._maxDimensions.y,
                                width: c - l,
                                height: this._maxDimensions.height
                            }), n.setDimension({
                                x: l - e.handleWidth,
                                y: this._maxDimensions.y + this._maxDimensions.height / 2 - e.handleHeight / 2,
                                width: e.handleWidth,
                                height: e.handleHeight
                            }), i.setDimension({
                                x: c,
                                y: this._maxDimensions.y + this._maxDimensions.height / 2 - e.handleHeight / 2,
                                width: e.handleWidth,
                                height: e.handleHeight
                            }), a.setDimension({
                                x: l,
                                y: this._maxDimensions.y
                            }), r.setDimension({
                                x: c,
                                y: this._maxDimensions.y
                            }), this.setCurrentBrushDimensions({
                                x: l,
                                y: this._maxDimensions.y,
                                width: c - l,
                                height: this._maxDimensions.height - this._maxDimensions.y
                            })
                        }, n.getLabelSpace = function() {
                            var e = this.getChildren("leftLabel")[0],
                                t = this.getChildren("rightLabel")[0];
                            return Math.max(e.getLabelDimension().height, t.getLabelDimension().height)
                        }, n.draw = function() {
                            this.addGraphicalElement({
                                el: "group",
                                attr: {
                                    name: "brush-group"
                                },
                                id: "brushGroup",
                                label: "brushGroup",
                                component: this,
                                container: {
                                    id: "exo",
                                    label: "group",
                                    isParent: !0
                                }
                            })
                        }, n.hideAllLabels = function() {
                            var e = this.getChildren("leftLabel")[0],
                                t = this.getChildren("rightLabel")[0];
                            this.config.pointerReleasedOnParent || (e.config.showLabel = t.config.showLabel = !1, e.asyncDraw(), t.asyncDraw())
                        }, n.createChildComponents = function() {
                            var e, t, n, i, a, r = this.config,
                                c = this.getFromEnv("getStyleDef");
                            (a = this.attachChild(l["default"], "selection")).attachHandlers(), a.configure({
                                orientation: "horizontal",
                                style: {
                                    mask: c(r.style.mask)
                                }
                            }), (e = this.attachChild(o["default"], "leftHandle")).attachHandlers(), e.configure({
                                orientation: "horizontal",
                                type: "leftHandle",
                                style: {
                                    handle: c(r.style.handle),
                                    "handle-grip": c(r.style["handle-grip"])
                                }
                            }), (t = this.attachChild(o["default"], "rightHandle")).attachHandlers(), t.configure({
                                orientation: "horizontal",
                                type: "rightHandle",
                                style: {
                                    handle: c(r.style.handle),
                                    "handle-grip": c(r.style["handle-grip"])
                                }
                            }), (n = this.attachChild(s["default"], "leftLabel")).attachHandlers(), n.configure({
                                orientation: "horizontal",
                                type: "leftLabel",
                                value: r.values[0],
                                style: {
                                    label: c(r.style.label),
                                    labelBg: c(r.style["label-background"])
                                }
                            }), (i = this.attachChild(s["default"], "rightLabel")).attachHandlers(), i.configure({
                                orientation: "horizontal",
                                type: "rightLabel",
                                value: r.values[1],
                                style: {
                                    label: c(r.style.label),
                                    labelBg: c(r.style["label-background"])
                                }
                            })
                        }, n.setMaxBrushDimensions = function(e) {
                            this._maxDimensions = e, this.setChildDimension()
                        }, n.getMaxBrushDimensions = function() {
                            return this._maxDimensions
                        }, n.setCurrentBrushDimensions = function(e) {
                            this._currDimensions = e
                        }, n.getCurrentBrushDimensions = function() {
                            return this._currDimensions
                        }, t
                    }(r.SmartRenderer);
                t["default"] = c
            },
            803: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(180),
                    s = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this) || this)._dimensions = {}, t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this);
                            var t = this.config;
                            t._defaultHandleStyle = {
                                fill: "#dfdfdf",
                                stroke: "none",
                                cursor: "ew-resize"
                            }, t._defaultHandleGripStyle = {
                                cursor: "ew-resize",
                                stroke: "#808080",
                                "stroke-width": 1,
                                "stroke-linecap": "round"
                            }
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n = this.config;
                            n.style = {
                                handle: Object.assign({}, n._defaultHandleStyle, t.style.handle),
                                "handle-grip": Object.assign({}, n._defaultHandleGripStyle, t.style["handle-grip"])
                            }, n.orientation = t.orientation, n.type = t.type
                        }, n.setDimension = function(e) {
                            this._dimensions = e
                        }, n.getDimension = function() {
                            return this._dimensions
                        }, n.attachHandlers = function() {
                            var e, t, n, i, a, r = this,
                                s = r.getLinkedParent(),
                                l = s.getFromEnv("timeNavigator");
                            r.addEventListener("fc-dragstart", r.dragstartHandler || (r.dragstartHandler = function(n) {
                                t = (0, o.getTouchEvent)(n).clientX, e = s.getCurrentBrushDimensions()
                            })), r.addEventListener("fc-dragmove", r.dragmoveHandler || (r.dragmoveHandler = function(s) {
                                n = (0, o.getTouchEvent)(s).clientX - t, "leftHandle" === r.config.type ? (i = e.x + n, a = e.x + e.width) : (i = e.x, a = e.x + e.width + n), r.getFromEnv("animationManager").setAnimationState("timenavSqueeze"), l.validateDomain([i, a], r.config.type)
                            }))
                        }, n.draw = function() {
                            var e = this.config,
                                t = e.style.handle,
                                n = e.style["handle-grip"],
                                i = this.getDimension(),
                                a = i.x,
                                r = i.y,
                                o = i.width,
                                s = i.height;
                            this.addGraphicalElement({
                                el: "rect",
                                attr: {
                                    x: a,
                                    y: r,
                                    width: o,
                                    height: s,
                                    opacity: t.opacity
                                },
                                css: t,
                                label: "handleButton",
                                component: this,
                                container: {
                                    id: "brushGroup",
                                    label: "brushGroup",
                                    isParent: !0
                                }
                            }), this.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: "M " + (a + 3.5) + "," + (r + 6) + " v " + (s - 12) + "\n               M " + (a + 6.5) + "," + (r + 6) + " v " + (s - 12)
                                },
                                label: "handlePath",
                                component: this,
                                css: n,
                                container: {
                                    id: "brushGroup",
                                    label: "brushGroup",
                                    isParent: !0
                                }
                            })
                        }, t
                    }(r.SmartRenderer);
                t["default"] = s
            },
            804: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = i(n(342)),
                    s = n(180),
                    l = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this) || this)._dimensions = {}, t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n = this.config,
                                i = this.getFromEnv("baseTextStyle");
                            for (var a in t) t.hasOwnProperty(a) && (n[a] = t[a]);
                            n.style = {
                                label: Object.assign({}, n._defaultLabelStyle, i, n.style.label),
                                labelBg: Object.assign({}, n._defaultLabelBgStyle, n.style.labelBg)
                            }
                        }, n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this);
                            var t = this.config;
                            t.showLabel = !1, t._defaultLabelStyle = {
                                fill: "#f3f3f3",
                                "font-size": "11px",
                                "font-weight": 600,
                                "vertical-align": "middle",
                                cursor: "move"
                            }, t._defaultLabelBgStyle = {
                                fill: "#5f5f5f",
                                cursor: "move"
                            }, t["border-horizontal-padding"] = 5, t["border-vertical-padding"] = 3, t.formatter = o["default"].formatter("%b %d, %Y")
                        }, n.setDimension = function(e) {
                            this._dimensions = e
                        }, n.getDimension = function() {
                            return this._dimensions
                        }, n.attachHandlers = function() {
                            var e, t, n, i, a, r, o = this,
                                l = o.getFromEnv("animationManager"),
                                c = o.getLinkedParent(),
                                d = c.getFromEnv("timeNavigator");
                            o.addEventListener("fc-dragstart", o.dragstartHandler || (o.dragstartHandler = function(i) {
                                n = (0, s.getTouchEvent)(i).clientX, e = c.getCurrentBrushDimensions(), d.config.labelsGettingDragged = !0, t = i.originalEvent.target, c.config.pointerReleasedOnParent = !1
                            })), o.addEventListener("fc-dragmove", o.dragmoveHandler || (o.dragmoveHandler = function(t) {
                                l.setAnimationState("timenavSqueeze"), i = (0, s.getTouchEvent)(t).clientX - n, "leftLabel" === o.config.type ? (a = e.x + i, r = e.x + e.width) : (a = e.x, r = e.x + e.width + i), d.validateDomain([a, r], o.config.type)
                            })), o.addEventListener("fc-dragend", o.dragendHandler || (o.dragendHandler = function(e) {
                                l.setAnimationState("timenavSqueeze"), d.config.labelsGettingDragged = !1, t !== e.originalEvent.target && c.hideAllLabels()
                            }))
                        }, n.getLabelDimension = function() {
                            var e = this.config,
                                t = this.getFromEnv("smartLabel"),
                                n = e.formatter;
                            return t.setStyle(e.style.label), t.getOriSize(n.format(e.value))
                        }, n.draw = function() {
                            var e, t, n, i, a, r, o, s, l, c = this.config,
                                d = c.style.label,
                                u = c.style.labelBg,
                                h = this.getLinkedParent(),
                                f = this.getFromEnv("timeNavigator").config,
                                p = this.getFromEnv("smartLabel"),
                                g = h.getMaxBrushDimensions(),
                                m = this.getDimension(),
                                v = m.x,
                                y = c.formatter,
                                b = "leftLabel" === c.type ? f.values[0] : f.values[1],
                                _ = y.format(b),
                                x = m.y;
                            p.setStyle(d), n = p.getOriSize(_), "leftLabel" === c.type ? v - n.width >= g.x ? (t = "end", e = 1) : (t = "start", e = -1) : v + n.width <= g.x + g.width ? (t = "start", e = -1) : (t = "end", e = 1), d["text-anchor"] = t, c.showLabel && (r = n.width, o = n.height, s = r + 2 * c["border-horizontal-padding"], l = o + 2 * c["border-vertical-padding"], i = v - e * c["border-horizontal-padding"], a = x - (o + 2 * c["border-vertical-padding"]) / 2, this.addGraphicalElement({
                                el: "rect",
                                attr: {
                                    x: "start" === t ? v : v - s,
                                    y: x - l,
                                    width: s,
                                    height: l
                                },
                                css: u,
                                shadow: [!0, 1],
                                label: "dragableLabelBackground",
                                id: c.type + "dragableLabelBackground",
                                component: this,
                                container: {
                                    id: "brushGroup",
                                    label: "brushGroup",
                                    isParent: !0
                                }
                            }), this.addGraphicalElement({
                                el: "text",
                                attr: {
                                    x: i,
                                    y: a,
                                    text: _
                                },
                                css: d,
                                id: c.type + "dragableLabel",
                                label: "dragableLabel",
                                component: this,
                                container: {
                                    id: "brushGroup",
                                    label: "brushGroup",
                                    isParent: !0
                                }
                            }))
                        }, t
                    }(r.SmartRenderer);
                t["default"] = l
            },
            805: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(180),
                    s = ["stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-color"],
                    l = function(e) {
                        function t() {
                            var t;
                            return (t = e.call(this) || this)._dimensions = {}, t
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this), this.config.defaultStyle = {
                                fill: (0, o.toRaphaelColor)({
                                    FCcolor: {
                                        color: "#fdfdfd,#f7fffe",
                                        ratio: "0,100",
                                        angle: 90,
                                        alpha: "50,50"
                                    }
                                }),
                                stroke: "#e3e3e3",
                                "stroke-width": 1,
                                opacity: 1,
                                "fill-opacity": .5,
                                cursor: "move"
                            }
                        }, n.configureAttributes = function(t) {
                            void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                            var n = this.config,
                                i = n.defaultStyle;
                            n.style = Object.assign({}, i, t.style.mask), n.orientation = t.orientation
                        }, n.setDimension = function(e) {
                            this._dimensions = e
                        }, n.getDimension = function() {
                            return this._dimensions
                        }, n.attachHandlers = function() {
                            var e, t, n, i, a, r = this.getFromEnv("animationManager"),
                                s = this.getLinkedParent(),
                                l = s.getFromEnv("timeNavigator");
                            this.addEventListener("fc-dragstart", this.dragstartHandler || (this.dragstartHandler = function(n) {
                                t = (0, o.getTouchEvent)(n).clientX, e = s.getCurrentBrushDimensions()
                            })), this.addEventListener("fc-dragmove", this.dragmoveHandler || (this.dragmoveHandler = function(s) {
                                r.setAnimationState("timenavScroll"), n = (0, o.getTouchEvent)(s).clientX - t, i = e.x + n, a = e.x + n + e.width, l.validateDomain([i, a])
                            }))
                        }, n.draw = function() {
                            var e, t = this.config,
                                n = Object.assign({}, t.style),
                                i = Object.assign({}, t.style),
                                a = s.length,
                                r = this.getDimension();
                            for (e = 0; e < a; e++) delete n[s[e]];
                            this.addGraphicalElement({
                                el: "rect",
                                attr: {
                                    x: r.x,
                                    y: r.y,
                                    width: Math.max(r.width, 0),
                                    height: Math.max(r.height, 0),
                                    opacity: n.opacity
                                },
                                css: n,
                                id: "selectionBox",
                                label: "selectionBox",
                                component: this,
                                container: {
                                    id: "brushGroup",
                                    label: "brushGroup",
                                    isParent: !0
                                }
                            }), i.fill = "none", this.addGraphicalElement({
                                el: "path",
                                attr: {
                                    path: ["M", r.x, r.y, "v", r.height, "h", r.width, "v", -r.height],
                                    opacity: i.opacity
                                },
                                id: "selectionBoxBorder",
                                label: "selectionBoxBorder",
                                css: i,
                                component: this,
                                container: {
                                    id: "brushGroup",
                                    label: "brushGroup",
                                    isParent: !0
                                }
                            })
                        }, t
                    }(r.SmartRenderer);
                t["default"] = l
            },
            806: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = n(180),
                    r = i(n(807));
                t["default"] = function(e) {
                    var t = e.getFromEnv("dataSource").extensions || {},
                        n = (0, a.pluckNumber)(t.customrangeselector && t.customrangeselector.enabled, 1);
                    (0, a.componentFactory)(e, r["default"], "customRangeSelector", +n, [{
                        domain: e.getFocusLimit(),
                        style: t.customrangeselector && t.customrangeselector.style || {}
                    }])
                }
            },
            807: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = i(n(808)),
                    s = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.configureAttributes = function(e) {
                            void 0 === e && (e = {}), Object.assign(this.config, e)
                        }, n.updateOnLimitChange = function() {
                            this.setData({
                                domain: this.getFromEnv("chart").getFocusLimit()
                            }, !0)
                        }, n.getToolInfo = function() {
                            var e = Object.assign({}, this.config.style);
                            return e["title:hoverout"] = {
                                title: e["title-text"],
                                icon: e["title-icon"]
                            }, {
                                "selector-0": {
                                    type: "tool",
                                    def: o["default"],
                                    configuration: {
                                        domain: this.config.domain,
                                        hAlign: "right",
                                        scale: 1,
                                        marginTop: 2,
                                        marginBottom: 2,
                                        marginLeft: 2,
                                        marginRight: 2,
                                        extStyle: e
                                    }
                                }
                            }
                        }, t
                    }(r.SmartRenderer);
                t["default"] = s
            },
            808: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = i(n(809)),
                    s = n(289),
                    l = n(180),
                    c = i(n(814)),
                    d = i(n(219)),
                    u = ["hour", "minute", "second", "millisecond"];
                var h = function(e) {
                    function t(t) {
                        var n;
                        n = e.call(this, t) || this;
                        var i = (0, a["default"])(n),
                            r = i.config;
                        return r.wrapper = new d["default"], r.documentClicked = function(e) {
                            var t = (0, l.getMouseCoordinate)(i.getFromEnv("chart-container"), e, i.getFromEnv("chart")),
                                n = t.chartX,
                                a = t.chartY,
                                o = e.target;
                            i.getChildren("manager")[0].isWithinWidget(n, a) || ("fc__crs__str" === (o instanceof SVGElement && o.className.baseVal) || "fc__select__time" === o.className || o.parentElement && "fc__select__time" === o.parentElement.className || (r.wrapper.off(document, "fc-click", r.documentClicked), i.setData({}, !0)))
                        }, i.keyDownHandler = function(e) {
                            ("key" in e ? "Escape" === e.key || "Esc" === e.key : 27 === e.keyCode) && n.setData({}, !0)
                        }, i.clickHandler = function(e) {
                            var t = i,
                                n = r.domain,
                                a = t.getFromEnv("chart"),
                                o = a.getFromEnv("UTC"),
                                s = a.getFromEnv("dateAPI"),
                                l = a.getContextLimit(),
                                c = new Date(l[0]),
                                d = new Date(l[1]),
                                u = new Date(n[0]),
                                h = new Date(n[1]);
                            t.setData({
                                blockUpdate: !0,
                                interactionStyle: {
                                    text: r.extStyle["title-text:active"],
                                    icon: r.extStyle["title-icon:active"]
                                }
                            }, !0), t.getChildren("cover")[0].setData({
                                visibility: "visible"
                            }, !0), t.getChildren("manager")[0].setData({
                                visibility: "visible",
                                position: t.config.containerPos,
                                drawCalendars: !0,
                                startDate: {
                                    year: s(u, "FullYear", o),
                                    month: s(u, "Month", o) + 1,
                                    day: s(u, "Date", o),
                                    hours: s(u, "Hours", o),
                                    minutes: s(u, "Minutes", o),
                                    seconds: s(u, "Seconds", o)
                                },
                                endDate: {
                                    year: s(h, "FullYear", o),
                                    month: s(h, "Month", o) + 1,
                                    day: s(h, "Date", o),
                                    hours: s(h, "Hours", o),
                                    minutes: s(h, "Minutes", o),
                                    seconds: s(h, "Seconds", o)
                                },
                                contextStart: {
                                    year: s(c, "FullYear", o),
                                    month: s(c, "Month", o) + 1,
                                    day: s(c, "Date", o)
                                },
                                contextEnd: {
                                    year: s(d, "FullYear", o),
                                    month: s(d, "Month", o) + 1,
                                    day: s(d, "Date", o)
                                }
                            }, !0), r.wrapper.on(document, "fc-click", i.config.documentClicked), r.wrapper.on(document, "keydown", i.keyDownHandler)
                        }, i.addEventListener("fc-click", i.clickHandler), i.addEventListener("fc-mouseover", function() {
                            var e = this.config.extStyle;
                            this.setData({
                                interactionStyle: {
                                    text: e["title-text:hover"],
                                    icon: e["title-icon:hover"]
                                },
                                hoverConfig: !0
                            }, !0)
                        }.bind((0, a["default"])(n))), i.addEventListener("fc-mouseout", function() {
                            !this.config.blockUpdate && this.setData({
                                interactionStyle: this.config.extStyle["title:hoverout"],
                                hoverConfig: !0
                            }, !0)
                        }.bind((0, a["default"])(n))), i.addEventListener("beforeremove", function(e) {
                            this.removeDocumentListener(), e.detachHandler()
                        }.bind((0, a["default"])(n))), n
                    }(0, r["default"])(t, e);
                    var n = t.prototype;
                    return n.__setDefaultConfig = function() {
                        e.prototype.__setDefaultConfig.call(this);
                        var t = this.config;
                        t.containerState = 0, t.showDate = !0, t.calendarIconPath = "M15.604605,2.6231875 C15.3617479,2.39715625 15.0736134,2.284125 14.7409412,2.284125 L13.5126723,2.284125 L13.5126723,1.4275625 C13.5126723,1.0350625 13.3621849,0.69896875 13.0615126,0.41940625 C12.7606723,0.13984375 12.3993613,0 11.9769748,0 L11.3629244,0 C10.9405714,0 10.5791261,0.13984375 10.2784202,0.4194375 C9.97761345,0.69896875 9.8272605,1.03509375 9.8272605,1.42759375 L9.8272605,2.28415625 L6.14221849,2.28415625 L6.14221849,1.42759375 C6.14221849,1.03509375 5.99179832,0.699 5.69105882,0.4194375 C5.39038655,0.13984375 5.02890756,0 4.60655462,0 L3.99240336,0 C3.57015126,0 3.20863866,0.13984375 2.90789916,0.4194375 C2.60722689,0.69896875 2.45677311,1.03509375 2.45677311,1.42759375 L2.45677311,2.28415625 L1.22847059,2.28415625 C0.895697479,2.28415625 0.607831933,2.3971875 0.364705882,2.62321875 C0.121579832,2.84921875 0,3.11696875 0,3.42625 L0,14.8466563 C0,15.1557188 0.121579832,15.4234063 0.364705882,15.6495625 C0.607798319,15.8755312 0.895663866,15.9885937 1.22847059,15.9885937 L14.7407059,15.9885937 C15.0733782,15.9885937 15.3615462,15.8755625 15.6043697,15.6495625 C15.8475294,15.4235 15.9691429,15.1556875 15.9691429,14.8466563 L15.9691429,3.42621875 C15.9691092,3.11684375 15.8476303,2.84921875 15.604605,2.6231875 Z M11.0558319,1.4276875 C11.0558319,1.34434375 11.0843697,1.275875 11.1418824,1.22246875 C11.199395,1.169 11.2730084,1.14221875 11.3627227,1.14221875 L11.9767731,1.14221875 C12.066521,1.14221875 12.1398992,1.16890625 12.1976134,1.22246875 C12.2551597,1.27596875 12.2838992,1.3444375 12.2838992,1.4276875 L12.2838992,3.9971875 C12.2838992,4.0805 12.2551597,4.14884375 12.1976134,4.20240625 C12.1398655,4.2558125 12.066521,4.28265625 11.9767731,4.28265625 L11.3627227,4.28265625 C11.2730084,4.28265625 11.199395,4.2559375 11.1418824,4.20240625 C11.0843697,4.1488125 11.0558319,4.0805 11.0558319,3.9971875 L11.0558319,1.4276875 Z M3.68534454,1.4276875 C3.68534454,1.34434375 3.71408403,1.275875 3.77166387,1.22246875 C3.82927731,1.169 3.90278992,1.14221875 3.99240336,1.14221875 L4.60655462,1.14221875 C4.69620168,1.14221875 4.76984874,1.16890625 4.82729412,1.22246875 C4.88480672,1.27596875 4.91368067,1.3444375 4.91368067,1.4276875 L4.91368067,3.9971875 C4.91368067,4.0805 4.88494118,4.1489375 4.82729412,4.20240625 C4.76971429,4.2558125 4.69620168,4.28265625 4.60655462,4.28265625 L3.99240336,4.28265625 C3.90278992,4.28265625 3.82917647,4.2559375 3.77166387,4.20240625 C3.71421849,4.1488125 3.68534454,4.0805 3.68534454,3.9971875 L3.68534454,1.4276875 Z M14.7407059,14.8465 L1.22847059,14.8465 L1.22847059,5.71025 L14.7407059,5.71025 L14.7407059,14.8465 Z", t.calendarIconDim = {
                            width: 16,
                            height: 16
                        }, t.containerPos = {
                            x: 100,
                            y: 100
                        }, t.containerInfo = {
                            id: "group",
                            label: "group",
                            isParent: !0
                        }, t.spaceNotHardCoded = !0, t.hoveredState = "normal", t._iconStyle = {
                            fill: "#5648D4",
                            transform: "",
                            opacity: 1
                        }, t._textStyle = {
                            "font-size": "12px",
                            "font-style": "normal",
                            "font-weight": "600",
                            "text-anchor": "start",
                            fill: "#5648D4",
                            opacity: 1
                        }, t.prevDim = {
                            height: 0,
                            width: 0
                        }
                    }, n.configureAttributes = function(e) {
                        void 0 === e && (e = {});
                        var t, n, i = this.config,
                            a = this.getFromEnv("focusScalesX"),
                            r = !1,
                            s = this.getFromEnv("getStyleDef"),
                            l = this.getFromEnv("baseTextStyle");
                        Object.assign(i, e), !e.blockUpdate && delete i.blockUpdate, !e.interactionStyle && delete i.interactionStyle, t = i.extStyle || {}, n = i.interactionStyle || {}, this.setState("visible", !0 !== i.isHidden), i.symbolName = i.name, a.forEach(function(e) {
                            u.includes(e.getBinMin()[0].name()) && (r = !0)
                        }), this.attachChild(c["default"], "cover", "cover").configure({
                            visibility: "hidden"
                        }), this.attachChild(o["default"], "manager", "manager").configure({
                            visibility: "hidden",
                            position: i.containerPos,
                            showTime: r,
                            extStyle: t,
                            drawCalendars: !1
                        }), i.showTime = r, i._finalIconStyle = Object.assign({}, i._iconStyle, s(t["title-icon"]), s(n.icon)), i._finalTextStyle = Object.assign({}, i._textStyle, l, s(t["title-text"]), s(n.text))
                    }, n.getLabel = function() {
                        var e, t = this.config,
                            n = "",
                            i = t.showTimeInLabel,
                            a = +this.getFromEnv("chartWidth"),
                            r = this.getLinkedParent(),
                            o = this.getFromEnv("chart").getFromEnv("contextScalesX")[0],
                            s = t.domain || o.getDomain(),
                            l = this.getFromEnv("smartLabel"),
                            c = new Date(s[0]),
                            d = new Date(s[1]),
                            u = Object.assign(t.prevDim),
                            h = u;
                        return l.setStyle(t._finalTextStyle), n = o.getFormattedTime({
                            dateRange: {
                                startDate: c,
                                endDate: d
                            },
                            type: "CRS",
                            showTimeInLabel: i
                        }), e = l.getOriSize(n), Math.abs(e.width - u.width) > 10 && (h = t.prevDim = Object.assign(e)), a < 600 && (h.width + t.calendarIconDim.width) / r.props.width > .4 && (n = "", h.width = 0), t.label = n, {
                            text: n,
                            dim: h
                        }
                    }, n.getLogicalSpace = function() {
                        var e, t = this.config,
                            n = this.getChildren("manager")[0],
                            i = this.getFromEnv("focusScalesX"),
                            a = !1,
                            r = t.width,
                            o = t.height,
                            s = t.marginTop,
                            l = t.marginLeft,
                            c = t.marginRight,
                            d = t.marginBottom;
                        return i.forEach(function(e) {
                            u.includes(e.getBinMin()[0].name()) && (t.showTime = !0), e._timeFormat && (a = u.includes(e._timeFormat.major) || u.includes(e._timeFormat.minor) || a)
                        }), t.showTimeInLabel = a, n.configure({
                            showTime: t.showTime
                        }, !0), r = (e = this.getLabel().dim).width, o = e.height, (t.skipGraphics || t.isHidden || this.getState("removed")) && (r = o = d = l = c = s = 0), t.width = e.width, t.height = e.height, {
                            width: r,
                            height: o,
                            marginLeft: l,
                            marginBottom: d,
                            marginRight: c,
                            marginTop: s
                        }
                    }, n.draw = function() {
                        var e, t, n, i, a, r, o = this.config,
                            s = this.getLinkedParent();
                        this.addGraphicalElement({
                            el: "group",
                            attr: {
                                name: "range-selector-text",
                                transform: "t" + o.x + ", " + (o.y + s.props.height / 2)
                            },
                            container: o.containerInfo,
                            component: this,
                            id: "group",
                            label: "group"
                        }, !0), r = o._finalTextStyle["font-size"], e = -1 * (i = (n = .0278 * (parseFloat(r) - 12) + 1) * o.calendarIconDim.width) - 5, t = 3 * (a = n * o.calendarIconDim.height) / 4 * -1, this.addGraphicalElement({
                            el: "group",
                            attr: {
                                name: "range-selector-icon-group",
                                transform: "t" + e + ", " + t
                            },
                            container: {
                                id: "group",
                                label: "group"
                            },
                            component: this,
                            label: "group",
                            id: "icon-group"
                        }, !0), o._finalIconStyle.transform += " s" + n, this.addGraphicalElement({
                            el: "path",
                            attr: {
                                path: o.calendarIconPath
                            },
                            css: o._finalIconStyle,
                            container: {
                                id: "icon-group",
                                label: "group"
                            },
                            component: this,
                            label: "path",
                            id: "icon"
                        }, !0), this.addGraphicalElement({
                            el: "text",
                            attr: {
                                text: o.label,
                                opacity: o._finalTextStyle.opacity
                            },
                            css: o._finalTextStyle,
                            container: {
                                id: "group",
                                label: "group"
                            },
                            component: this,
                            label: "text",
                            id: "display"
                        }, !0), this.addGraphicalElement({
                            el: "rect",
                            attr: {
                                "class": "fc__crs__str",
                                fill: l.TRACKER_FILL,
                                x: e - 5,
                                y: -1 * s.props.height / 2,
                                width: i + 10 + o.width,
                                height: s.props.height
                            },
                            component: this,
                            container: {
                                label: "group",
                                id: "group"
                            },
                            css: {
                                cursor: "pointer"
                            },
                            label: "rect",
                            id: "rect"
                        }), o.containerPos = {
                            x: o.x - i / 2 - 5 * n,
                            y: o.y + s.props.height / 2 + a
                        }
                    }, n.removeDocumentListener = function() {
                        var e = this.config;
                        e.wrapper.off(document, "fc-click", e.documentClicked), e.wrapper.off(document, "keydown", this.keyDownHandler)
                    }, t
                }(s.Tool);
                t["default"] = h
            },
            809: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = t.formatDate = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = n(195),
                    s = i(n(810)),
                    l = n(180),
                    c = i(n(811)),
                    d = i(n(812)),
                    u = i(n(813)),
                    h = i(n(703)),
                    f = 11,
                    p = "cal-".length,
                    g = function(e) {
                        return (e < 10 ? "0" + e : e) + ""
                    };
                t.formatDate = g;
                var m = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, (0, a["default"])(n).addToEnv("fontParser", function(e) {
                            var t = parseFloat(e);
                            return isNaN(t) ? f : t
                        }), n
                    }(0, r["default"])(t, e);
                    var n = t.prototype;
                    return n.__setDefaultConfig = function() {
                        var e = this.config;
                        e.marginLeft = 10, e.marginRight = 10, e.marginTop = 15, e.marginBottom = 15, e.contextStart = {
                            year: 1970,
                            month: 1,
                            day: 1
                        }, e.contextEnd = {
                            year: 2070,
                            month: 1,
                            day: 1
                        }, e.calendarDim = {
                            height: 191,
                            width: 163
                        }, this._calendars = {}, e._backgroundStyle = {
                            "font-size": f + l.PXSTRING,
                            "font-family": "Verdana,sans-serif",
                            border: "1px solid #cdcdcd",
                            "background-color": "#ffffff"
                        }, e._pointerStyle = {
                            "font-size": f + l.PXSTRING,
                            "font-family": "Verdana,sans-serif",
                            "border-left": "1px solid #cdcdcd",
                            "border-right": "0px solid #cdcdcd",
                            "border-top": "1px solid #cdcdcd",
                            "border-bottom": "0px solid #cdcdcd",
                            transform: "rotate(45deg)",
                            "background-color": "#ffffff"
                        }
                    }, n.configureAttributes = function(e) {
                        void 0 === e && (e = {});
                        var t, n, i, a = this.config,
                            r = this.getCalendars(),
                            o = this.getFromEnv("getStyleDef"),
                            s = this.getFromEnv("baseTextStyle");
                        if (Object.assign(a, e), t = a.extStyle, "visible" !== a.visibility) return r.left && (r.left.dispose(), delete r.left), void(r.right && (r.right.dispose(), delete r.right));
                        this.attachChild(c["default"], "left-date", "left-date").configure({
                            label: "From: ",
                            date: a.startDate,
                            id: "left",
                            labelStyle: t.label,
                            inputStyle: t.input
                        }), this.attachChild(c["default"], "right-date", "right-date").configure({
                            label: "To: ",
                            date: a.endDate,
                            id: "right",
                            labelStyle: t.label,
                            inputStyle: t.input
                        }), a.showTime && (this.attachChild(d["default"], "left-time", "left-time").configure({
                            time: a.startDate,
                            labelStyle: t.label,
                            selectStyle: t.select
                        }), this.attachChild(d["default"], "right-time", "right-time").configure({
                            time: a.endDate,
                            labelStyle: t.label,
                            selectStyle: t.select
                        })), n = t["button-apply"] ? Object.assign({}, s, t["button-apply"]) : Object.assign({
                            color: "#ffffff",
                            "font-size": f + l.PXSTRING
                        }, s), this.attachChild(u["default"], "apply", "apply").configure({
                            label: "Apply",
                            type: "submit",
                            customStyle: n,
                            buttonStyle: n,
                            "button:hoverout": n,
                            "button:hover": t["button-apply:hover"] || {}
                        }), i = t["button-cancel"] ? Object.assign({}, s, t["button-cancel"]) : Object.assign({
                            backgroundColor: "#ffffff",
                            color: "#7A7A7A",
                            border: "0px",
                            "font-size": f + l.PXSTRING
                        }, s), this.attachChild(u["default"], "cancel", "cancel").configure({
                            label: "Cancel",
                            type: "cancel",
                            customStyle: i,
                            buttonStyle: i,
                            "button:hoverout": i,
                            "button:hover": t["button-cancel:hover"] || {}
                        }), a._finalBackgroundStyle = Object.assign(a._backgroundStyle, o(t.container)), a._finalPointerStyle = Object.assign(a._pointerStyle, o(t.container)), a._finalPointerStyle.border && (a._finalPointerStyle["border-left"] = a._finalPointerStyle["border-top"] = a._finalPointerStyle.border), a._finalPointerStyle["border-right"] = a._finalPointerStyle["border-bottom"] = "0px", delete a._finalPointerStyle.border, a.calStyle = function(e, t) {
                            var n = {};
                            if ((0, h["default"])(e))
                                for (var i in e) e.hasOwnProperty(i) && i.startsWith("cal-") && (n[i.substring(p)] = t(e[i]));
                            return n
                        }(a.extStyle, this.getFromEnv("getStyleDef"))
                    }, n.manageSpace = function() {
                        var e, t, n, i, a, r, o, s, l, c, d, u, h = this.config,
                            f = 4,
                            p = {
                                height: 0,
                                width: 0
                            },
                            g = {
                                height: 0,
                                width: 0
                            },
                            m = h.calendarDim;
                        "visible" === h.visibility && (n = this.getChildren("left-date")[0], i = this.getChildren("right-date")[0], a = this.getChildren("left-time"), r = this.getChildren("right-time"), o = this.getChildren("apply")[0], s = this.getChildren("cancel")[0], a && (p = (a = a[0]).getDimension()), r && (g = (r = r[0]).getDimension()), !p.height && (f = 2), e = n.getDimension(), t = i.getDimension(), d = o.getDimension(), u = s.getDimension(), l = Math.max(p.width, e.width, m.width), h.leftCalendarPosition = {
                            x: h.marginLeft,
                            y: h.marginTop + e.height + 8
                        }, h.rightCalendarPosition = {
                            x: h.marginLeft + l + 25,
                            y: h.marginTop + t.height + 8
                        }, n.setTranslation(h.marginLeft, h.marginTop), i.setTranslation(h.marginLeft + l + 25, h.marginTop), a && a.setTranslation(h.marginLeft, h.leftCalendarPosition.y + m.height + 16), r && r.setTranslation(h.marginLeft + l + 25, h.rightCalendarPosition.y + m.height + 16), o.setTranslation(h.marginLeft, h.leftCalendarPosition.y + m.height + 8 * f + p.height), s.setTranslation(h.marginLeft + d.width + 5, h.leftCalendarPosition.y + m.height + 8 * f + p.height), c = Math.max(h.marginLeft + d.width + 5 + u.width, h.rightCalendarPosition.x + m.width, h.marginLeft + l + 25 + g.width, h.marginLeft + l + 25 + t.width), h.width = c + h.marginRight, h.height = h.leftCalendarPosition.y + m.height + d.height + 8 * f + p.height + h.marginBottom)
                    }, n.isWithinWidget = function(e, t) {
                        var n = this.config,
                            i = n.x,
                            a = n.y,
                            r = a + n.height,
                            o = i + n.width;
                        return e > i && e < o && t > a && t < r
                    }, n.draw = function() {
                        this.manageSpace();
                        var e = this.getLinkedParent(),
                            t = this.config,
                            n = e.config.containerPos;
                        t.x = n.x - t.width / 2, t.y = n.y + 4, this.addGraphicalElement({
                            el: "html",
                            attr: {
                                x: t.x,
                                y: t.y,
                                width: t.width,
                                height: t.height,
                                type: "div",
                                fill: "ffffff",
                                display: "block",
                                "class": "fc-crs-widget",
                                visibility: t.visibility
                            },
                            css: t._backgroundStyle,
                            component: this,
                            label: "box-container",
                            id: "box-container"
                        }), this.addGraphicalElement({
                            el: "html",
                            attr: {
                                x: t.width / 2 - 10,
                                y: -8,
                                width: 15,
                                height: 15,
                                type: "div",
                                display: "block",
                                visibility: t.visibility
                            },
                            css: t._finalPointerStyle,
                            container: {
                                label: "box-container",
                                id: "box-container"
                            },
                            component: this,
                            label: "box-pointer",
                            id: "box-pointer"
                        }), t.drawCalendars && this.drawCalendars()
                    }, n.getCalendars = function() {
                        return this._calendars
                    }, n.drawCalendars = function() {
                        var e, t = this,
                            n = t.config,
                            i = t.getCalendars(),
                            a = n.leftCalendarPosition,
                            r = n.rightCalendarPosition,
                            o = t.getGraphicalElement("box-container", "box-container").element,
                            c = n.calStyle;
                        i.left ? i.left.configure({
                            weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
                            selectedDate: n.startDate,
                            posX: a.x,
                            posY: a.y,
                            rangeStart: n.contextStart,
                            rangeEnd: n.contextEnd,
                            customCssClass: c,
                            showInactiveMonths: !0,
                            container: o
                        }) : i.left = new s["default"]({
                            weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
                            selectedDate: n.startDate,
                            posX: a.x,
                            posY: a.y,
                            container: o,
                            id: "left",
                            rangeStart: n.contextStart,
                            rangeEnd: n.contextEnd,
                            showInactiveMonths: !0,
                            customCssClass: c,
                            events: {
                                onDateChange: function(e) {
                                    t.updateDate(e, "left")
                                },
                                onMonthChange: function(e) {
                                    t.updateDate(e, "left")
                                },
                                onYearChange: function(e) {
                                    t.updateDate(e, "left")
                                }
                            },
                            "font-family": l.DEFAULT_FT_FONT + " !important"
                        }), i.right ? i.right.configure({
                            weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
                            selectedDate: n.endDate,
                            posX: r.x,
                            posY: r.y,
                            rangeStart: n.contextStart,
                            rangeEnd: n.contextEnd,
                            customCssClass: c,
                            showInactiveMonths: !0,
                            container: o
                        }) : i.right = new s["default"]({
                            weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
                            selectedDate: n.endDate,
                            posX: r.x,
                            posY: r.y,
                            rangeStart: n.contextStart,
                            rangeEnd: n.contextEnd,
                            showInactiveMonths: !0,
                            customCssClass: c,
                            container: o,
                            id: "right",
                            events: {
                                onDateChange: function(e) {
                                    t.updateDate(e, "right")
                                },
                                onMonthChange: function(e) {
                                    t.updateDate(e, "right")
                                },
                                onYearChange: function(e) {
                                    t.updateDate(e, "right")
                                }
                            },
                            "font-family": l.DEFAULT_FT_FONT + " !important"
                        }), (e = i.left.getDimension()).width === n.calendarDim.width && e.height === n.calendarDim.height || (n.calendarDim = e, t.asyncDraw())
                    }, n.updateDate = function(e, t) {
                        var n = this.getChildren(t + "-date")[0],
                            i = n.getGraphicalElement("box", "box");
                        n.configure({
                            date: e
                        }), i.element.value = g(e.day) + "/" + g(e.month) + "/" + g(e.year)
                    }, n.updateCalendar = function(e, t) {
                        var n = this.config,
                            i = this.getCalendars();
                        ! function(e, t, n) {
                            var i = new Date(t.year, t.month, t.day),
                                a = new Date(n.year, n.month, n.day),
                                r = new Date(e.year, e.month, e.day);
                            return +r >= +i && +r <= +a
                        }(e, n.contextStart, n.contextEnd) ? this.getChildren(t + "-date")[0].setData({}, !0): i[t] && i[t].configure({
                            selectedDate: e
                        })
                    }, n.submitData = function(e) {
                        void 0 === e && (e = "cancel");
                        var t, n, i = this.getLinkedParent(),
                            a = i.getFromEnv("chart"),
                            r = [],
                            o = this.getCalendars(),
                            s = a.getFromEnv("UTC"),
                            l = o.left.getDate(),
                            c = o.right.getDate(),
                            d = this.getChildren("left-time"),
                            u = this.getChildren("right-time"),
                            h = {
                                hours: 0,
                                minutes: 0,
                                seconds: 0
                            },
                            f = {
                                hours: 0,
                                minutes: 0,
                                seconds: 0
                            };
                        d && (h = d[0].getTime()), u && (f = u[0].getTime()), i.setData({}, !0), "submit" === e && (t = s ? Date.UTC(l.year, l.month - 1, l.day, h.hours, h.minutes, h.seconds) : new Date(l.year, l.month - 1, l.day, h.hours, h.minutes, h.seconds), n = s ? Date.UTC(c.year, c.month - 1, c.day, f.hours, f.minutes, f.seconds) : new Date(c.year, c.month - 1, c.day, f.hours, f.minutes, f.seconds), r.push(+t), r.push(+n), a.setFocusLimit(r)), i.removeDocumentListener()
                    }, t
                }(o.SmartRenderer);
                t["default"] = m
            },
            810: function(module, exports, __webpack_require__) {
                "use strict";
                var factory;
                window, factory = function() {
                    return function(e) {
                        var t = {};

                        function n(i) {
                            if (t[i]) return t[i].exports;
                            var a = t[i] = {
                                i: i,
                                l: !1,
                                exports: {}
                            };
                            return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
                        }
                        return n.m = e, n.c = t, n.d = function(e, t, i) {
                            n.o(e, t) || Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: i
                            })
                        }, n.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }, n.t = function(e, t) {
                            if (1 & t && (e = n(e)), 8 & t) return e;
                            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                            var i = Object.create(null);
                            if (n.r(i), Object.defineProperty(i, "default", {
                                    enumerable: !0,
                                    value: e
                                }), 2 & t && "string" != typeof e)
                                for (var a in e) n.d(i, a, function(t) {
                                    return e[t]
                                }.bind(null, a));
                            return i
                        }, n.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e["default"]
                            } : function() {
                                return e
                            };
                            return n.d(t, "a", t), t
                        }, n.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, n.p = "/dist/", n(n.s = "./src/index.js")
                    }({
                        "./node_modules/core-js/es/object/assign.js":
                        /*!**************************************************!*\
                                !*** ./node_modules/core-js/es/object/assign.js ***!
                                \**************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsEsObjectAssignJs(module, exports, __webpack_require__) {
                            eval('__webpack_require__(/*! ../../modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");\nvar path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");\n\nmodule.exports = path.Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/es/object/assign.js?')
                        },
                        "./node_modules/core-js/es/string/ends-with.js":
                        /*!*****************************************************!*\
                                !*** ./node_modules/core-js/es/string/ends-with.js ***!
                                \*****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsEsStringEndsWithJs(module, exports, __webpack_require__) {
                            eval("__webpack_require__(/*! ../../modules/es.string.ends-with */ \"./node_modules/core-js/modules/es.string.ends-with.js\");\nvar entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ \"./node_modules/core-js/internals/entry-unbind.js\");\n\nmodule.exports = entryUnbind('String', 'endsWith');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/es/string/ends-with.js?")
                        },
                        "./node_modules/core-js/es/string/starts-with.js":
                        /*!*******************************************************!*\
                                !*** ./node_modules/core-js/es/string/starts-with.js ***!
                                \*******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsEsStringStartsWithJs(module, exports, __webpack_require__) {
                            eval("__webpack_require__(/*! ../../modules/es.string.starts-with */ \"./node_modules/core-js/modules/es.string.starts-with.js\");\nvar entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ \"./node_modules/core-js/internals/entry-unbind.js\");\n\nmodule.exports = entryUnbind('String', 'startsWith');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/es/string/starts-with.js?")
                        },
                        "./node_modules/core-js/features/object/assign.js":
                        /*!********************************************************!*\
                                !*** ./node_modules/core-js/features/object/assign.js ***!
                                \********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsFeaturesObjectAssignJs(module, exports, __webpack_require__) {
                            eval('module.exports = __webpack_require__(/*! ../../es/object/assign */ "./node_modules/core-js/es/object/assign.js");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/features/object/assign.js?')
                        },
                        "./node_modules/core-js/features/string/ends-with.js":
                        /*!***********************************************************!*\
                                !*** ./node_modules/core-js/features/string/ends-with.js ***!
                                \***********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsFeaturesStringEndsWithJs(module, exports, __webpack_require__) {
                            eval('module.exports = __webpack_require__(/*! ../../es/string/ends-with */ "./node_modules/core-js/es/string/ends-with.js");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/features/string/ends-with.js?')
                        },
                        "./node_modules/core-js/features/string/starts-with.js":
                        /*!*************************************************************!*\
                                !*** ./node_modules/core-js/features/string/starts-with.js ***!
                                \*************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsFeaturesStringStartsWithJs(module, exports, __webpack_require__) {
                            eval('module.exports = __webpack_require__(/*! ../../es/string/starts-with */ "./node_modules/core-js/es/string/starts-with.js");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/features/string/starts-with.js?')
                        },
                        "./node_modules/core-js/internals/a-function.js":
                        /*!******************************************************!*\
                                !*** ./node_modules/core-js/internals/a-function.js ***!
                                \******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsAFunctionJs(module, exports) {
                            eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-function.js?")
                        },
                        "./node_modules/core-js/internals/an-object.js":
                        /*!*****************************************************!*\
                                !*** ./node_modules/core-js/internals/an-object.js ***!
                                \*****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsAnObjectJs(module, exports, __webpack_require__) {
                            eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/an-object.js?")
                        },
                        "./node_modules/core-js/internals/array-includes.js":
                        /*!**********************************************************!*\
                                !*** ./node_modules/core-js/internals/array-includes.js ***!
                                \**********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsArrayIncludesJs(module, exports, __webpack_require__) {
                            eval('var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-includes.js?')
                        },
                        "./node_modules/core-js/internals/bind-context.js":
                        /*!********************************************************!*\
                                !*** ./node_modules/core-js/internals/bind-context.js ***!
                                \********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsBindContextJs(module, exports, __webpack_require__) {
                            eval('var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/bind-context.js?')
                        },
                        "./node_modules/core-js/internals/classof-raw.js":
                        /*!*******************************************************!*\
                                !*** ./node_modules/core-js/internals/classof-raw.js ***!
                                \*******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsClassofRawJs(module, exports) {
                            eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof-raw.js?")
                        },
                        "./node_modules/core-js/internals/copy-constructor-properties.js":
                        /*!***********************************************************************!*\
                                !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
                                \***********************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsCopyConstructorPropertiesJs(module, exports, __webpack_require__) {
                            eval('var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/copy-constructor-properties.js?')
                        },
                        "./node_modules/core-js/internals/correct-is-regexp-logic.js":
                        /*!*******************************************************************!*\
                                !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
                                \*******************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsCorrectIsRegexpLogicJs(module, exports, __webpack_require__) {
                            eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (e) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (f) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/correct-is-regexp-logic.js?")
                        },
                        "./node_modules/core-js/internals/create-property-descriptor.js":
                        /*!**********************************************************************!*\
                                !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
                                \**********************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsCreatePropertyDescriptorJs(module, exports) {
                            eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property-descriptor.js?")
                        },
                        "./node_modules/core-js/internals/descriptors.js":
                        /*!*******************************************************!*\
                                !*** ./node_modules/core-js/internals/descriptors.js ***!
                                \*******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsDescriptorsJs(module, exports, __webpack_require__) {
                            eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/descriptors.js?")
                        },
                        "./node_modules/core-js/internals/document-create-element.js":
                        /*!*******************************************************************!*\
                                !*** ./node_modules/core-js/internals/document-create-element.js ***!
                                \*******************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsDocumentCreateElementJs(module, exports, __webpack_require__) {
                            eval('var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");\n\nvar document = global.document;\n// typeof document.createElement is \'object\' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/document-create-element.js?')
                        },
                        "./node_modules/core-js/internals/entry-unbind.js":
                        /*!********************************************************!*\
                                !*** ./node_modules/core-js/internals/entry-unbind.js ***!
                                \********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsEntryUnbindJs(module, exports, __webpack_require__) {
                            eval('var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");\n\nvar call = Function.call;\n\nmodule.exports = function (CONSTRUCTOR, METHOD, length) {\n  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/entry-unbind.js?')
                        },
                        "./node_modules/core-js/internals/enum-bug-keys.js":
                        /*!*********************************************************!*\
                                !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
                                \*********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsEnumBugKeysJs(module, exports) {
                            eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/enum-bug-keys.js?")
                        },
                        "./node_modules/core-js/internals/export.js":
                        /*!**************************************************!*\
                                !*** ./node_modules/core-js/internals/export.js ***!
                                \**************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsExportJs(module, exports, __webpack_require__) {
                            eval('var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;\nvar hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? \'.\' : \'#\') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      hide(sourceProperty, \'sham\', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/export.js?')
                        },
                        "./node_modules/core-js/internals/fails.js":
                        /*!*************************************************!*\
                                !*** ./node_modules/core-js/internals/fails.js ***!
                                \*************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsFailsJs(module, exports) {
                            eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/fails.js?")
                        },
                        "./node_modules/core-js/internals/function-to-string.js":
                        /*!**************************************************************!*\
                                !*** ./node_modules/core-js/internals/function-to-string.js ***!
                                \**************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsFunctionToStringJs(module, exports, __webpack_require__) {
                            eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nmodule.exports = shared('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/function-to-string.js?")
                        },
                        "./node_modules/core-js/internals/get-built-in.js":
                        /*!********************************************************!*\
                                !*** ./node_modules/core-js/internals/get-built-in.js ***!
                                \********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsGetBuiltInJs(module, exports, __webpack_require__) {
                            eval('var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");\nvar global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\n\nvar aFunction = function (variable) {\n  return typeof variable == \'function\' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/get-built-in.js?')
                        },
                        "./node_modules/core-js/internals/global.js":
                        /*!**************************************************!*\
                                !*** ./node_modules/core-js/internals/global.js ***!
                                \**************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsGlobalJs(module, exports, __webpack_require__) {
                            eval("/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';\nvar check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == O && globalThis) ||\n  check(typeof window == O && window) ||\n  check(typeof self == O && self) ||\n  check(typeof global == O && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/global.js?")
                        },
                        "./node_modules/core-js/internals/has.js":
                        /*!***********************************************!*\
                                !*** ./node_modules/core-js/internals/has.js ***!
                                \***********************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsHasJs(module, exports) {
                            eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/has.js?")
                        },
                        "./node_modules/core-js/internals/hidden-keys.js":
                        /*!*******************************************************!*\
                                !*** ./node_modules/core-js/internals/hidden-keys.js ***!
                                \*******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsHiddenKeysJs(module, exports) {
                            eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hidden-keys.js?")
                        },
                        "./node_modules/core-js/internals/hide.js":
                        /*!************************************************!*\
                                !*** ./node_modules/core-js/internals/hide.js ***!
                                \************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsHideJs(module, exports, __webpack_require__) {
                            eval('var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hide.js?')
                        },
                        "./node_modules/core-js/internals/ie8-dom-define.js":
                        /*!**********************************************************!*\
                                !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
                                \**********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsIe8DomDefineJs(module, exports, __webpack_require__) {
                            eval('var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");\nvar fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");\n\n// Thank\'s IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement(\'div\'), \'a\', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/ie8-dom-define.js?')
                        },
                        "./node_modules/core-js/internals/indexed-object.js":
                        /*!**********************************************************!*\
                                !*** ./node_modules/core-js/internals/indexed-object.js ***!
                                \**********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsIndexedObjectJs(module, exports, __webpack_require__) {
                            eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/indexed-object.js?")
                        },
                        "./node_modules/core-js/internals/internal-state.js":
                        /*!**********************************************************!*\
                                !*** ./node_modules/core-js/internals/internal-state.js ***!
                                \**********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsInternalStateJs(module, exports, __webpack_require__) {
                            eval('var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");\nvar global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");\nvar hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");\nvar objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError(\'Incompatible receiver, \' + TYPE + \' required\');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey(\'state\');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    hide(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/internal-state.js?')
                        },
                        "./node_modules/core-js/internals/is-forced.js":
                        /*!*****************************************************!*\
                                !*** ./node_modules/core-js/internals/is-forced.js ***!
                                \*****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsIsForcedJs(module, exports, __webpack_require__) {
                            eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-forced.js?")
                        },
                        "./node_modules/core-js/internals/is-object.js":
                        /*!*****************************************************!*\
                                !*** ./node_modules/core-js/internals/is-object.js ***!
                                \*****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsIsObjectJs(module, exports) {
                            eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-object.js?")
                        },
                        "./node_modules/core-js/internals/is-pure.js":
                        /*!***************************************************!*\
                                !*** ./node_modules/core-js/internals/is-pure.js ***!
                                \***************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsIsPureJs(module, exports) {
                            eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-pure.js?")
                        },
                        "./node_modules/core-js/internals/is-regexp.js":
                        /*!*****************************************************!*\
                                !*** ./node_modules/core-js/internals/is-regexp.js ***!
                                \*****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsIsRegexpJs(module, exports, __webpack_require__) {
                            eval('var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");\n\nvar MATCH = wellKnownSymbol(\'match\');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == \'RegExp\');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-regexp.js?')
                        },
                        "./node_modules/core-js/internals/native-symbol.js":
                        /*!*********************************************************!*\
                                !*** ./node_modules/core-js/internals/native-symbol.js ***!
                                \*********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsNativeSymbolJs(module, exports, __webpack_require__) {
                            eval('var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-symbol.js?')
                        },
                        "./node_modules/core-js/internals/native-weak-map.js":
                        /*!***********************************************************!*\
                                !*** ./node_modules/core-js/internals/native-weak-map.js ***!
                                \***********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsNativeWeakMapJs(module, exports, __webpack_require__) {
                            eval('var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === \'function\' && /native code/.test(nativeFunctionToString.call(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-weak-map.js?')
                        },
                        "./node_modules/core-js/internals/not-a-regexp.js":
                        /*!********************************************************!*\
                                !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
                                \********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsNotARegexpJs(module, exports, __webpack_require__) {
                            eval('var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError("The method doesn\'t accept regular expressions");\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/not-a-regexp.js?')
                        },
                        "./node_modules/core-js/internals/object-assign.js":
                        /*!*********************************************************!*\
                                !*** ./node_modules/core-js/internals/object-assign.js ***!
                                \*********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsObjectAssignJs(module, exports, __webpack_require__) {
                            eval('\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");\nvar fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");\n\nvar nativeAssign = Object.assign;\n\n// `Object.assign` method\n// https://tc39.github.io/ecma262/#sec-object.assign\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !nativeAssign || fails(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var symbol = Symbol();\n  var alphabet = \'abcdefghijklmnopqrst\';\n  A[symbol] = 7;\n  alphabet.split(\'\').forEach(function (chr) { B[chr] = chr; });\n  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join(\'\') != alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : nativeAssign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-assign.js?')
                        },
                        "./node_modules/core-js/internals/object-define-property.js":
                        /*!******************************************************************!*\
                                !*** ./node_modules/core-js/internals/object-define-property.js ***!
                                \******************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsObjectDefinePropertyJs(module, exports, __webpack_require__) {
                            eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-property.js?")
                        },
                        "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
                        /*!******************************************************************************!*\
                                !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
                                \******************************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsObjectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
                            eval('var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");\nvar has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-descriptor.js?')
                        },
                        "./node_modules/core-js/internals/object-get-own-property-names.js":
                        /*!*************************************************************************!*\
                                !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
                                \*************************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
                            eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-names.js?")
                        },
                        "./node_modules/core-js/internals/object-get-own-property-symbols.js":
                        /*!***************************************************************************!*\
                                !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
                                \***************************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsObjectGetOwnPropertySymbolsJs(module, exports) {
                            eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-symbols.js?")
                        },
                        "./node_modules/core-js/internals/object-keys-internal.js":
                        /*!****************************************************************!*\
                                !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
                                \****************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsObjectKeysInternalJs(module, exports, __webpack_require__) {
                            eval('var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don\'t enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys-internal.js?')
                        },
                        "./node_modules/core-js/internals/object-keys.js":
                        /*!*******************************************************!*\
                                !*** ./node_modules/core-js/internals/object-keys.js ***!
                                \*******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsObjectKeysJs(module, exports, __webpack_require__) {
                            eval('var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys.js?')
                        },
                        "./node_modules/core-js/internals/object-property-is-enumerable.js":
                        /*!*************************************************************************!*\
                                !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
                                \*************************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsObjectPropertyIsEnumerableJs(module, exports, __webpack_require__) {
                            eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-property-is-enumerable.js?")
                        },
                        "./node_modules/core-js/internals/own-keys.js":
                        /*!****************************************************!*\
                                !*** ./node_modules/core-js/internals/own-keys.js ***!
                                \****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsOwnKeysJs(module, exports, __webpack_require__) {
                            eval('var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn(\'Reflect\', \'ownKeys\') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/own-keys.js?')
                        },
                        "./node_modules/core-js/internals/path.js":
                        /*!************************************************!*\
                                !*** ./node_modules/core-js/internals/path.js ***!
                                \************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsPathJs(module, exports, __webpack_require__) {
                            eval('module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/path.js?')
                        },
                        "./node_modules/core-js/internals/redefine.js":
                        /*!****************************************************!*\
                                !*** ./node_modules/core-js/internals/redefine.js ***!
                                \****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsRedefineJs(module, exports, __webpack_require__) {
                            eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"./node_modules/core-js/internals/function-to-string.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(nativeFunctionToString).split('toString');\n\nshared('inspectSource', function (it) {\n  return nativeFunctionToString.call(it);\n});\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else hide(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/redefine.js?")
                        },
                        "./node_modules/core-js/internals/require-object-coercible.js":
                        /*!********************************************************************!*\
                                !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
                                \********************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsRequireObjectCoercibleJs(module, exports) {
                            eval('// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError("Can\'t call method on " + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/require-object-coercible.js?')
                        },
                        "./node_modules/core-js/internals/set-global.js":
                        /*!******************************************************!*\
                                !*** ./node_modules/core-js/internals/set-global.js ***!
                                \******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsSetGlobalJs(module, exports, __webpack_require__) {
                            eval('var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\nvar hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");\n\nmodule.exports = function (key, value) {\n  try {\n    hide(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-global.js?')
                        },
                        "./node_modules/core-js/internals/shared-key.js":
                        /*!******************************************************!*\
                                !*** ./node_modules/core-js/internals/shared-key.js ***!
                                \******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsSharedKeyJs(module, exports, __webpack_require__) {
                            eval('var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");\nvar uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");\n\nvar keys = shared(\'keys\');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-key.js?')
                        },
                        "./node_modules/core-js/internals/shared.js":
                        /*!**************************************************!*\
                                !*** ./node_modules/core-js/internals/shared.js ***!
                                \**************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsSharedJs(module, exports, __webpack_require__) {
                            eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.1.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared.js?")
                        },
                        "./node_modules/core-js/internals/to-absolute-index.js":
                        /*!*************************************************************!*\
                                !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
                                \*************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsToAbsoluteIndexJs(module, exports, __webpack_require__) {
                            eval('var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-absolute-index.js?')
                        },
                        "./node_modules/core-js/internals/to-indexed-object.js":
                        /*!*************************************************************!*\
                                !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
                                \*************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsToIndexedObjectJs(module, exports, __webpack_require__) {
                            eval('// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-indexed-object.js?')
                        },
                        "./node_modules/core-js/internals/to-integer.js":
                        /*!******************************************************!*\
                                !*** ./node_modules/core-js/internals/to-integer.js ***!
                                \******************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsToIntegerJs(module, exports) {
                            eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-integer.js?")
                        },
                        "./node_modules/core-js/internals/to-length.js":
                        /*!*****************************************************!*\
                                !*** ./node_modules/core-js/internals/to-length.js ***!
                                \*****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsToLengthJs(module, exports, __webpack_require__) {
                            eval('var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-length.js?')
                        },
                        "./node_modules/core-js/internals/to-object.js":
                        /*!*****************************************************!*\
                                !*** ./node_modules/core-js/internals/to-object.js ***!
                                \*****************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsToObjectJs(module, exports, __webpack_require__) {
                            eval('var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-object.js?')
                        },
                        "./node_modules/core-js/internals/to-primitive.js":
                        /*!********************************************************!*\
                                !*** ./node_modules/core-js/internals/to-primitive.js ***!
                                \********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsToPrimitiveJs(module, exports, __webpack_require__) {
                            eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-primitive.js?")
                        },
                        "./node_modules/core-js/internals/uid.js":
                        /*!***********************************************!*\
                                !*** ./node_modules/core-js/internals/uid.js ***!
                                \***********************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsUidJs(module, exports) {
                            eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/uid.js?")
                        },
                        "./node_modules/core-js/internals/well-known-symbol.js":
                        /*!*************************************************************!*\
                                !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
                                \*************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsInternalsWellKnownSymbolJs(module, exports, __webpack_require__) {
                            eval('var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");\nvar shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");\nvar uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");\n\nvar Symbol = global.Symbol;\nvar store = shared(\'wks\');\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]\n    || (NATIVE_SYMBOL ? Symbol : uid)(\'Symbol.\' + name));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/well-known-symbol.js?')
                        },
                        "./node_modules/core-js/modules/es.object.assign.js":
                        /*!**********************************************************!*\
                                !*** ./node_modules/core-js/modules/es.object.assign.js ***!
                                \**********************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsModulesEsObjectAssignJs(module, exports, __webpack_require__) {
                            eval('var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");\n\n// `Object.assign` method\n// https://tc39.github.io/ecma262/#sec-object.assign\n$({ target: \'Object\', stat: true, forced: Object.assign !== assign }, {\n  assign: assign\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.object.assign.js?')
                        },
                        "./node_modules/core-js/modules/es.string.ends-with.js":
                        /*!*************************************************************!*\
                                !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
                                \*************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsModulesEsStringEndsWithJs(module, exports, __webpack_require__) {
                            eval('\nvar $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");\n\nvar nativeEndsWith = \'\'.endsWith;\nvar min = Math.min;\n\n// `String.prototype.endsWith` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.endswith\n$({ target: \'String\', proto: true, forced: !correctIsRegExpLogic(\'endsWith\') }, {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = String(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : min(toLength(endPosition), len);\n    var search = String(searchString);\n    return nativeEndsWith\n      ? nativeEndsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.string.ends-with.js?')
                        },
                        "./node_modules/core-js/modules/es.string.starts-with.js":
                        /*!***************************************************************!*\
                                !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
                                \***************************************************************/
                        /*! no static exports found */
                            function node_modulesCoreJsModulesEsStringStartsWithJs(module, exports, __webpack_require__) {
                            eval('\nvar $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");\n\nvar nativeStartsWith = \'\'.startsWith;\nvar min = Math.min;\n\n// `String.prototype.startsWith` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.startswith\n$({ target: \'String\', proto: true, forced: !correctIsRegExpLogic(\'startsWith\') }, {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = String(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return nativeStartsWith\n      ? nativeStartsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.string.starts-with.js?')
                        },
                        "./node_modules/css-loader/dist/cjs.js!./src/css/fc-calendar.css":
                        /*!***********************************************************************!*\
                                !*** ./node_modules/css-loader/dist/cjs.js!./src/css/fc-calendar.css ***!
                                \***********************************************************************/
                        /*! no static exports found */
                            function node_modulesCssLoaderDistCjsJsSrcCssFcCalendarCss(module, exports, __webpack_require__) {
                            eval('exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n//# sourceURL=webpack:///./src/css/fc-calendar.css?./node_modules/css-loader/dist/cjs.js')
                        },
                        "./node_modules/css-loader/dist/runtime/api.js":
                        /*!*****************************************************!*\
                                !*** ./node_modules/css-loader/dist/runtime/api.js ***!
                                \*****************************************************/
                        /*! no static exports found */
                            function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
                            eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], "{").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?')
                        },
                        "./node_modules/style-loader/lib/addStyles.js":
                        /*!****************************************************!*\
                                !*** ./node_modules/style-loader/lib/addStyles.js ***!
                                \****************************************************/
                        /*! no static exports found */
                            function node_modulesStyleLoaderLibAddStylesJs(module, exports, __webpack_require__) {
                            eval('/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === "undefined") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve "head" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }\n                // }\n                if (typeof target === \'function\') {\n                        return target();\n                }\n                if (typeof memo[target] === "undefined") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== "undefined" && DEBUG) {\n\t\tif (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === "object" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = "head";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = "bottom";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error("Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === "top") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === "bottom") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === "object" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error("[Style Loader]\\n\\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\\n Must be \'top\', \'bottom\', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement("style");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = "text/css";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement("link");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = "text/css";\n\t}\n\toptions.attrs.rel = "stylesheet";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === \'function\'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don\'t add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === "function" &&\n\t\ttypeof URL.createObjectURL === "function" &&\n\t\ttypeof URL.revokeObjectURL === "function" &&\n\t\ttypeof Blob === "function" &&\n\t\ttypeof btoa === "function"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join(\'\\n\');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? "" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute("media", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn\'t defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";\n\t}\n\n\tvar blob = new Blob([css], { type: "text/css" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?')
                        },
                        "./node_modules/style-loader/lib/urls.js":
                        /*!***********************************************!*\
                                !*** ./node_modules/style-loader/lib/urls.js ***!
                                \***********************************************/
                        /*! no static exports found */
                            function node_modulesStyleLoaderLibUrlsJs(module, exports) {
                            eval('\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function "fixes" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== "undefined" && window.location;\n\n  if (!location) {\n    throw new Error("fixUrls requires window.location");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== "string") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + "//" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, "/");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word "url" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn\'t a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn\'t a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn\'t a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^"(.*)"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^\'(.*)\'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf("//") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf("/") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with \'/\'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, ""); // Strip leading \'./\'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn "url(" + JSON.stringify(newUrl) + ")";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?')
                        },
                        "./node_modules/webpack/buildin/global.js":
                        /*!***********************************!*\
                                !*** (webpack)/buildin/global.js ***!
                                \***********************************/
                        /*! no static exports found */
                            function node_modulesWebpackBuildinGlobalJs(module, exports) {
                            eval('var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function("return this")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?')
                        },
                        "./src/css/fc-calendar.css":
                        /*!*********************************!*\
                                !*** ./src/css/fc-calendar.css ***!
                                \*********************************/
                        /*! no static exports found */
                            function srcCssFcCalendarCss(module, exports, __webpack_require__) {
                            eval('\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./fc-calendar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/fc-calendar.css");\n\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {"attrs":{"id":"fc__calendar__style"},"hmr":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/fc-calendar.css?')
                        },
                        "./src/index.js":
                        /*!**********************!*\
                                !*** ./src/index.js ***!
                                \**********************/
                        /*! exports provided: default */
                            function srcIndexJs(module, __webpack_exports__, __webpack_require__) {
                            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_features_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/features/string/starts-with.js */ \"./node_modules/core-js/features/string/starts-with.js\");\n/* harmony import */ var core_js_features_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_features_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_features_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/features/string/ends-with.js */ \"./node_modules/core-js/features/string/ends-with.js\");\n/* harmony import */ var core_js_features_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_features_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_features_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/features/object/assign.js */ \"./node_modules/core-js/features/object/assign.js\");\n/* harmony import */ var core_js_features_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_features_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_fc_calendar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/fc-calendar.css */ \"./src/css/fc-calendar.css\");\n/* harmony import */ var _css_fc_calendar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_fc_calendar_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\nvar idNo = 0;\n\nvar UNDEFINED = undefined,\n    cssMap = new Map(),\n    isObject = function isObject(x) {\n  return x !== null && _typeof(x) === 'object' && !Array.isArray(x);\n},\n    // basic calendar configaration\ndaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],\n    weekLabel = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n    monthLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n    // classes in cssStyleSheet will be applied in the gievn order\n// so that styles get applied correctly\nCLASS_PRECEDENCE_SEQUENCE = ['container', 'container:hover', 'header-container', 'header-container:hover', 'header', 'header:hover', 'year', 'year:hover', 'headername', 'headername:hover', 'yearname', 'yearname:hover', 'nav', 'nav:hover', 'navprev', 'navprev:hover', 'navnext', 'navnext:hover', 'navinactive', 'navinactive:hover', 'navmonth', 'navmonth:hover', 'navyear', 'navyear:hover', 'subheader', 'subheader:hover', 'body', 'body:hover', 'days', 'days:hover', 'indexeddays', 'indexeddays:hover', 'dateLI', 'dateLI:hover', 'date', 'date:hover', 'daycol', 'daycol:hover', 'normaldatedefault', 'normaldatedefault:hover', 'activedate', 'activedate:hover', 'disableddatedefault', 'disableddatedefault:hover', 'disableddate', 'disableddate:hover', 'weekenddefault', 'weekenddefault:hover', 'weekend', 'weekend:hover', 'selecteddatedefault', 'selecteddatedefault:hover', 'selecteddate', 'selecteddate:hover', 'highlighteddatedefault', 'highlighteddatedefault:hover', 'highlighteddate', 'highlighteddate:hover'],\n    defaultCss = {\n  dateLI: {\n    'box-sizing': 'border-box!important',\n    'float': 'left!important',\n    'list-style-type': 'none!important',\n    'width': '14.28571%!important',\n    'height': 'auto!important',\n    'padding': '2px 0 2px !important',\n    'margin': '0 !important',\n    'background-color': '#fff !important'\n  },\n  navinactive: {\n    opacity: 0,\n    cursor: 'default !important'\n  },\n  weekenddefault: {\n    'background-color': '#F7F6FF!important'\n  },\n  'normaldatedefault': {\n    cursor: 'pointer!important'\n  },\n  'normaldatedefault:hover': {\n    color: '#ffffff!important',\n    'background-color': '#dcdcdc!important'\n  },\n  'selecteddatedefault': {\n    'background-color': '#5648D4!important',\n    color: '#F3F3F3!important'\n  },\n  'selecteddatedefault:hover': {\n    'background-color': '#5648D4!important',\n    color: '#F3F3F3!important'\n  },\n  disableddatedefault: {\n    color: '#cacaca!important'\n  }\n},\n    defaultClassNames = {\n  container: 'fc-cal-container',\n  'header-container': 'fc-cal-header-container',\n  header: 'fc-cal-month-header',\n  year: 'fc-cal-year-header',\n  headername: 'fc-cal-month',\n  yearname: 'fc-cal-year',\n  nav: 'fc-cal-nav',\n  navprev: 'fc-cal-nav-prev',\n  navnext: 'fc-cal-nav-next',\n  navinactive: 'fc-cal-nav-inactive',\n  navmonth: 'fc-cal-nav-month',\n  navyear: 'fc-cal-nav-year',\n  subheader: 'fc-cal-sub-header',\n  body: 'fc-cal-body',\n  days: 'fc-cal-day',\n  indexeddays: 'fc-cal-day-',\n  // Index will be added at the end\n  dateLI: 'fc-cal-date-li',\n  date: 'fc-cal-date',\n  daycol: 'fc-cal-day-col',\n  normaldatedefault: 'fc-cal-date-normal-default',\n  activedate: 'fc-cal-date-normal',\n  disableddatedefault: 'fc-cal-date-disabled-default',\n  disableddate: 'fc-cal-date-disabled',\n  weekenddefault: 'fc-cal-weekend-default',\n  weekend: 'fc-cal-weekend',\n  selecteddatedefault: 'fc-cal-date-selected-default',\n  selecteddate: 'fc-cal-date-selected',\n  highlighteddatedefault: 'fc-cal-date-highlight-default',\n  highlighteddate: 'fc-cal-date-highlight'\n},\n    inlineStyle = {\n  container: 'box-sizing: border-box !important; -webkit-touch-callout: none !important; -webkit-user-select: none !important; -khtml-user-select: none !important; -moz-user-select: none !important; -ms-user-select: none !important; user-select: none !important; text-align: center !important; vertical-align: top !important; padding-bottom: 0 !important; margin: 0px 0px 0px 0px !important; float: left;' + 'font-size: 11px !important; max-width: 163px !important; background-color: #fff !important; border: 1px solid #a5a4a4;',\n  header: 'box-sizing: border-box !important; overflow: hidden !important; height: 26px !important; line-height: 2.4 !important' + 'font-size: 12px !important; background-color: #5648D4 !important;',\n  month: 'display: block !important; width: 100% !important; float: left !important; height: 100% !important;' + 'font-weight: bold !important; color: #F3F3F3 !important; font-size: 13px !important;',\n  year: 'display: block !important; width: 35% !important; float: right !important;',\n  monthname: 'display: inline-block !important; padding: 4px !important;',\n  yearname: 'display: inline-block !important; padding-right: 5px !important; padding-left: 5px !important;',\n  nav: 'display: inline-block !important; cursor: pointer !important; padding: 4px;',\n  navprev: 'float: left !important; padding-left: 8px !important;',\n  navnext: 'float: right !important; padding-right: 8px !important;',\n  navinactive: 'cursor: default !important;',\n  navmonth: '',\n  navyear: '',\n  subheader: 'text-transform: uppercase !important; overflow: hidden !important; color: #666 !important;',\n  days: 'box-sizing: border-box !important; display: block !important; float: left !important; width: 14.28571% !important; line-height: 2.3 !important;',\n  indexeddays: '',\n  body: 'width: 100% !important;',\n  date: 'box-sizing: border-box !important; text-align: center !important; display: block !important; margin: 0 auto !important;' + 'border: 0px solid transparent !important; width: 14.2857% !important; padding: 0px !important;',\n  dateLI: 'box-sizing: border-box !important; float: left !important; list-style-type: none !important; width: 14.28571% !important; height: auto!important;',\n  selecteddate: '',\n  disableddate: '',\n  normaldate: 'cursor: pointer !important;',\n  highlightedDate: '',\n  daycol: '',\n  weekenddefault: 'background-color: #F7F6FF!important;',\n  weekend: ''\n},\n    ulPadZeroStyle = {\n  padding: '0',\n  margin: 0\n},\n    minHeight = 300,\n    minWidth = 300,\n    PX = 'px',\n    SP = ' ',\n    BLANK = '',\n    SPACE = '&nbsp;',\n    DASH = '-',\n    SLASH = '/',\n    vAlignMultiplier = {\n  top: 0,\n  middle: -0.5,\n  bottom: -1\n},\n    hAlignMultiplier = {\n  left: 0,\n  center: -0.5,\n  right: -1\n},\n    // get id for container\ngetuid = function getuid() {\n  return \"fc_calendar-\".concat(idNo++);\n},\n    // check if the year is leap year or not\ncheckLeapYear = function checkLeapYear(year) {\n  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;\n},\n    // apply custom style to the container\nsetStyle = function setStyle(element, style) {\n  if (style && element && element.style) {\n    for (var key in style) {\n      if (style.hasOwnProperty(key)) {\n        element.style[key] = style[key];\n      }\n    }\n  }\n},\n    removeClassName = function removeClassName(className, element) {\n  var classNameList = element && element.className;\n\n  if (classNameList && className) {\n    element.className = classNameList.replace(new RegExp('(?:^|\\\\s*)' + className.trim() + '(?:\\\\s*|$)'), ' ');\n  }\n},\n    removeClassInChilds = function removeClassInChilds(parent, className) {\n  var children, i, j, l, classArr;\n\n  if (parent && parent.getElementsByClassName) {\n    classArr = className.trim().split(SP);\n\n    for (j = 0, l = classArr.length; j < l; j += 1) {\n      className = classArr[j];\n      children = parent.getElementsByClassName(className);\n\n      for (i = children.length - 1; i >= 0; i--) {\n        removeClassName(className, children[i]);\n      }\n    }\n  }\n},\n    // this function will update the calendar\n// without re-drawing the elements\ndisplayMonth = function displayMonth(calendar) {\n  var info = calendar.info,\n      graphic = calendar.graphic,\n      classNames = calendar.classNames,\n      active = info.active,\n      rangeStart = info.rangeStart,\n      rangeEnd = info.rangeEnd,\n      weekStartingDay = info.weekStartingDay,\n      highlight = info.highlight,\n      highlightClasses = info.highlightClasses,\n      showInactiveMonths = info.showInactiveMonths,\n      monthStr = graphic.monthStr,\n      yearStr = graphic.yearStr,\n      dateElements = graphic.dateElements,\n      dateLiElements = graphic.dateLiElements,\n      container = graphic.container,\n      prevMonth = graphic.prevMonth,\n      prevMonthPointer = graphic.prevMonthPointer,\n      nextMonth = graphic.nextMonth,\n      nextMonthPointer = graphic.nextMonthPointer,\n      prevYear = graphic.prevYear,\n      nextYear = graphic.nextYear,\n      month = active.month,\n      year = active.year,\n      highlightMonth = highlight && highlight[year] && highlight[year][month],\n      startingOfMonth = new Date(\"\".concat(month, \"/1/\").concat(year)),\n      monthStaringDay = startingOfMonth.getDay(),\n      monthStaringWeekDay = info.startingPos = monthStaringDay - weekStartingDay + (weekStartingDay <= monthStaringDay ? 0 : 7),\n      totalDays = daysInMonth[month - 1] + (checkLeapYear(year) && month === 2 ? 1 : 0),\n      limit = totalDays + monthStaringWeekDay,\n      startActive = validateActiveStart({\n    day: 1,\n    month: month,\n    year: year\n  }, rangeStart),\n      endActive = validateActiveEnd({\n    day: totalDays,\n    month: month,\n    year: year\n  }, rangeEnd),\n      startInactiveLimit = startActive ? 0 : rangeStart.month === month && rangeStart.year === year ? rangeStart.day - 1 : totalDays,\n      endInactiveLimit = endActive ? totalDays + 1 : rangeEnd.month === month && rangeEnd.year === year ? rangeEnd.day + 1 : 1;\n  var i,\n      j,\n      l,\n      cur,\n      highlightInfo,\n      highLightClass,\n      dateList,\n      weekenddefault,\n      weekend,\n      element,\n      disablePrevMonthLi = rangeStart && rangeStart.year === active.year && rangeStart.month === active.month,\n      disableNextMonthLi = rangeEnd && rangeEnd.year === active.year && rangeEnd.month === active.month;\n  info.curMonthInfo = {\n    start: monthStaringDay,\n    end: limit\n  };\n  dateList = graphic.calendarBody.children[0]; // remove previously applied Classes\n\n  removeClassInChilds(container, classNames.normaldatedefault);\n  removeClassInChilds(container, classNames.selecteddatedefault);\n  removeClassInChilds(container, classNames.disableddatedefault);\n  removeClassInChilds(container, classNames.activedate);\n  removeClassInChilds(container, classNames.selecteddate);\n  removeClassInChilds(container, classNames.disableddate);\n  removeClassInChilds(container, classNames.navinactive); // make navigators inactive\n\n  if (disableNextMonthLi) {\n    nextMonthPointer.className += SP + classNames.navinactive;\n  } else {\n    removeClassName(classNames.navinactive, nextMonth);\n  }\n\n  if (disablePrevMonthLi) {\n    prevMonthPointer.className += SP + classNames.navinactive;\n  } else {\n    removeClassName(classNames.navinactive, prevMonth);\n  } // remobve all highlight classes\n\n\n  while (highlightClasses.length) {\n    highLightClass = highlightClasses.pop();\n    removeClassInChilds(container, highLightClass);\n  } // If not enough list items are present, create them\n\n\n  if (dateList.childElementCount < 42) {\n    while (dateList.childElementCount < 42) {\n      i = dateList.childElementCount;\n      weekenddefault = SP + (i % 7 === 5 || i % 7 === 6 ? classNames.weekenddefault : BLANK);\n      weekend = SP + (i % 7 === 5 || i % 7 === 6 ? classNames.weekend : BLANK); // create date elements\n\n      element = createElement('li', {\n        appendTo: dateList,\n        className: weekenddefault,\n        events: {\n          click: function click() {\n            var info = calendar.info,\n                events = calendar.events,\n                selectedDate = info.selectedDate,\n                active = info.active,\n                tempDate = {\n              day: i - info.startingPos + 1,\n              month: active.month,\n              year: active.year\n            };\n\n            if (tempDate.day >= 1 && tempDate.day <= info.curMonthInfo.end - info.startingPos && validateActiveStart(tempDate, info.rangeStart) && validateActiveEnd(tempDate, info.rangeEnd)) {\n              selectedDate.day = tempDate.day;\n              selectedDate.month = tempDate.month;\n              selectedDate.year = tempDate.year;\n              setSelectedDate(calendar);\n              events.onDateChange && events.onDateChange(selectedDate);\n            }\n          }\n        }\n      });\n      dateLiElements.push(element);\n      element = createElement('span', {\n        appendTo: element,\n        className: classNames.date + SP + classNames.daycol + DASH + i % 7 + weekend,\n        innerHTML: SPACE\n      });\n      dateElements.push(element);\n    }\n  } // month and year changed\n\n\n  monthStr.innerHTML = info.monthLabel[month - 1] + SP + year; // print dates\n\n  for (i = 0, l = dateElements.length; i < l; i++) {\n    if (i < monthStaringWeekDay) {\n      // show days of previous month\n      dateElements[i].innerHTML = new Date(year, month - 1, i - monthStaringWeekDay + 1).getDate();\n      dateLiElements[i].className += SP + classNames.disableddatedefault;\n      dateElements[i].className += SP + classNames.disableddate;\n      dateLiElements[i].eventAttached && dateLiElements[i].removeEventListener('click', dateElements[i]._clickHandler);\n      dateLiElements[i].eventAttached = false;\n    } else if (i >= limit) {\n      // show days of next month\n      cur = new Date(year, month - 1, i - monthStaringWeekDay + 1).getDate();\n      dateElements[i].innerHTML = cur < 10 ? '0' + cur : cur;\n      dateLiElements[i].className += SP + classNames.disableddatedefault;\n      dateElements[i].className += SP + classNames.disableddate;\n      dateLiElements[i].eventAttached && dateLiElements[i].removeEventListener('click', dateElements[i]._clickHandler);\n      dateLiElements[i].eventAttached = false;\n    } else {\n      j = i - monthStaringWeekDay + 1;\n      dateElements[i].innerHTML = j < 10 ? '0' + j : j;\n      highlightInfo = highlightMonth && highlightMonth[j];\n\n      if (highlightInfo) {\n        highLightClass = SP + classNames.highlightedDate;\n        highlightInfo !== true && (highLightClass += SP + highlightInfo);\n        highlightClasses.push(highLightClass);\n      }\n\n      !dateLiElements[i].eventAttached && dateLiElements[i].addEventListener('click', dateLiElements[i]._clickHandler);\n      dateLiElements[i].eventAttached = true;\n      dateElements[i].className += SP + (j <= startInactiveLimit || j >= endInactiveLimit ? classNames.disableddate : classNames.activedate) + (highlightInfo ? highLightClass : BLANK);\n      dateLiElements[i].className += SP + (j <= startInactiveLimit || j >= endInactiveLimit ? classNames.disableddatedefault : classNames.normaldatedefault) + (highlightInfo ? highLightClass : BLANK);\n    }\n  } // if the selected date is on this month, heighlight it\n\n\n  setSelectedDate(calendar);\n},\n    // this function update the day labels\ndisPlayDays = function disPlayDays(calendar) {\n  var info = calendar.info,\n      weekStartingDay = info.weekStartingDay,\n      dayElements = calendar.graphic.dayElements;\n  var j;\n\n  for (j = 0; j < 7; j++) {\n    dayElements[j].innerHTML = info.weekLabel[(j + weekStartingDay) % 7];\n  }\n},\n    setSelectedDate = function setSelectedDate(calendar) {\n  var classNames = calendar.classNames,\n      _calendar$info = calendar.info,\n      selectedDate = _calendar$info.selectedDate,\n      active = _calendar$info.active,\n      startingPos = _calendar$info.startingPos,\n      _calendar$graphic = calendar.graphic,\n      container = _calendar$graphic.container,\n      dateLiElements = _calendar$graphic.dateLiElements,\n      dateElements = _calendar$graphic.dateElements; // if the selected date is on this month, heighlight it\n\n  if (selectedDate.month === active.month && selectedDate.year === active.year) {\n    // remove the class form the old element\n    removeClassInChilds(container, classNames.selecteddatedefault);\n    removeClassInChilds(container, classNames.selecteddate);\n    dateLiElements[selectedDate.day + startingPos - 1].className += SP + classNames.selecteddatedefault;\n    dateElements[selectedDate.day + startingPos - 1].className += SP + classNames.selecteddate;\n  }\n},\n    // function to create dom elements\ncreateElement = function createElement(type, options) {\n  var appendTo = options.appendTo,\n      className = options.className,\n      inline = options.inline,\n      id = options.id,\n      innerHTML = options.innerHTML,\n      events = options.events,\n      element = document.createElement(type); // set the class\n\n  className && (element.className = className); // set inline style of the element\n\n  inline && element.setAttribute('style', inline); // set the attributes\n\n  id && (element.id = id); // add the innerHTML\n\n  innerHTML && (element.innerHTML = innerHTML);\n\n  if (events) {\n    for (var event in events) {\n      element.addEventListener(event, events[event]);\n\n      if (event === 'click') {\n        element['_' + event + 'Handler'] = events[event];\n        element.eventAttached = true;\n      }\n    }\n  } // append to it's parent\n\n\n  appendTo && appendTo.appendChild(element);\n  return element;\n},\n    // initailise calendar for the first time\ninit = function init(calendar, config) {\n  var graphic = calendar.graphic,\n      weekLabel = calendar.info.weekLabel,\n      dateElements = graphic.dateElements,\n      dayElements = graphic.dayElements,\n      dateLiElements = graphic.dateLiElements,\n      fontFamily = config['font-family'] && \" font-family: \".concat(config['font-family'], \";\") || '',\n      classNames = calendar.classNames = Object.assign({}, defaultClassNames, calendar._customCssClass),\n      container = graphic.container = createElement('div', {\n    appendTo: graphic.parentElement,\n    inline: inlineStyle.container + fontFamily,\n    className: classNames.container,\n    id: calendar.id\n  }),\n      calendarHeader = graphic.calendarHeader = createElement('div', {\n    appendTo: container,\n    inline: inlineStyle.header // className: classNames.header\n\n  }),\n      headerUl = graphic.headerUl = createElement('ul', {\n    appendTo: calendarHeader,\n    className: classNames['header-container'],\n    inline: 'height: 100% !important;'\n  }),\n      headerMonthLi = graphic.headerMonthLi = createElement('li', {\n    appendTo: headerUl,\n    inline: inlineStyle.month\n  }),\n      headerMonthUl = graphic.headerMonthUl = createElement('ul', {\n    appendTo: headerMonthLi,\n    className: classNames.header,\n    inline: 'height: 100% !important;'\n  }),\n      calendarSubHeader = graphic.calendarSubHeader = createElement('div', {\n    appendTo: container,\n    // className: classNames.subHeader,\n    inline: inlineStyle.subheader\n  }),\n      weekDays = graphic.weekDays = createElement('ul', {\n    appendTo: calendarSubHeader,\n    className: classNames.subheader\n  }),\n      calendarBody = graphic.calendarBody = createElement('div', {\n    appendTo: container,\n    inline: inlineStyle.body\n  }),\n      days = graphic.days = graphic.dayCell = createElement('ul', {\n    appendTo: calendarBody,\n    inline: 'padding: 1px !important; margin: 0px !important;',\n    className: classNames.body\n  });\n  var element, i, weekend, weekenddefault; // set the container style\n\n  setStyle(container, calendar.style); // set the UL styles\n\n  setStyle(headerUl, ulPadZeroStyle);\n  setStyle(weekDays, ulPadZeroStyle);\n  setStyle(days, ulPadZeroStyle);\n  setStyle(headerMonthUl, ulPadZeroStyle); // li for previous month pointer\n\n  graphic.prevMonth = createElement('li', {\n    appendTo: headerMonthUl,\n    inline: inlineStyle.nav + SP + inlineStyle.navprev + SP,\n    events: {\n      click: function click() {\n        var info = calendar.info,\n            graphic = calendar.graphic,\n            nextMonth = (info.active && info.active.month) - 1,\n            year = info.active && info.active.year,\n            rangeStart = info.rangeStart;\n\n        if (nextMonth < 1) {\n          nextMonth = 12;\n          year--;\n        }\n\n        if (!rangeStart || year > rangeStart.year) {\n          removeClassName(classNames.navinactive, graphic.prevMonth);\n          removeClassName(classNames.navinactive, graphic.nextMonth);\n          calendar.configure({\n            active: {\n              month: nextMonth,\n              year: year\n            },\n            doNotUpdateStyle: true\n          });\n        } else if (year === rangeStart.year && nextMonth >= rangeStart.month) {\n          removeClassName(classNames.navinactive, graphic.nextMonth);\n          nextMonth === rangeStart.month && (graphic.prevMonth.className += SP + classNames.navinactive);\n          calendar.configure({\n            active: {\n              month: nextMonth,\n              year: year\n            },\n            doNotUpdateStyle: true\n          });\n        }\n      }\n    }\n  }); // span containing the left arrow\n\n  graphic.prevMonthPointer = createElement('span', {\n    appendTo: graphic.prevMonth,\n    className: classNames.navprev,\n    innerHTML: '&#10094;'\n  }); // li for month name\n\n  graphic.monthStrLi = createElement('li', {\n    appendTo: headerMonthUl,\n    inline: inlineStyle.monthname\n  }); // span containing the month name\n\n  graphic.monthStr = createElement('span', {\n    appendTo: graphic.monthStrLi,\n    className: classNames.headername\n  }); // li for next month pointer\n\n  graphic.nextMonth = createElement('li', {\n    appendTo: headerMonthUl,\n    inline: inlineStyle.nav + SP + inlineStyle.navnext + SP,\n    events: {\n      click: function click() {\n        var info = calendar.info,\n            graphic = calendar.graphic,\n            nextMonth = (info.active && info.active.month) + 1,\n            year = info.active && info.active.year,\n            rangeEnd = info.rangeEnd;\n\n        if (nextMonth > 12) {\n          nextMonth = 1;\n          year++;\n        }\n\n        if (!rangeEnd || year < rangeEnd.year) {\n          removeClassName(classNames.navinactive, graphic.prevMonth);\n          removeClassName(classNames.navinactive, graphic.nextMonth);\n          calendar.configure({\n            active: {\n              month: nextMonth,\n              year: year\n            },\n            doNotUpdateStyle: true\n          });\n        } else if (year === rangeEnd.year && nextMonth <= rangeEnd.month) {\n          nextMonth === rangeEnd.month && (graphic.nextMonth.className += SP + classNames.navinactive);\n          removeClassName(classNames.navinactive, graphic.prevMonth);\n          calendar.configure({\n            active: {\n              month: nextMonth,\n              year: year\n            },\n            doNotUpdateStyle: true\n          });\n        }\n      }\n    }\n  }); // span containing the right arrow\n\n  graphic.nextMonthPointer = createElement('span', {\n    appendTo: graphic.nextMonth,\n    className: classNames.navnext,\n    innerHTML: '&#10095;'\n  }); // Create the days of week list items\n\n  for (i = 1; i < 8; i++) {\n    weekend = SP + (i > 5 ? classNames.weekend : BLANK);\n    weekenddefault = SP + (i > 5 ? classNames.weekenddefault : BLANK); // create week elements\n\n    element = createElement('li', {\n      appendTo: weekDays,\n      inline: inlineStyle.days,\n      className: weekenddefault\n    });\n    element = createElement('span', {\n      appendTo: element,\n      innerHTML: weekLabel[i % 7],\n      inline: 'display: block !important;',\n      className: classNames.days + SP + classNames.indexeddays + i % 7 + weekend\n    });\n    dayElements.push(element);\n  } // Create the days of month list items\n\n\n  var _loop = function _loop(_i) {\n    weekenddefault = SP + (_i % 7 === 5 || _i % 7 === 6 ? classNames.weekenddefault : BLANK);\n    weekend = SP + (_i % 7 === 5 || _i % 7 === 6 ? classNames.weekend : BLANK); // create date elements\n\n    element = createElement('li', {\n      appendTo: days,\n      inline: inlineStyle.date,\n      className: classNames.dateLI + weekenddefault\n    });\n    dateLiElements.push(element);\n    element = createElement('span', {\n      appendTo: element,\n      className: classNames.date + SP + classNames.daycol + DASH + _i % 7 + weekend,\n      inline: 'display: block !important; padding: 4px 0px !important;',\n      innerHTML: SPACE,\n      events: {\n        click: function click() {\n          var info = calendar.info,\n              events = calendar.events,\n              selectedDate = info.selectedDate,\n              active = info.active,\n              tempDate = {\n            day: _i - info.startingPos + 1,\n            month: active.month,\n            year: active.year\n          };\n\n          if (tempDate.day >= 1 && tempDate.day <= info.curMonthInfo.end - info.startingPos && validateActiveStart(tempDate, info.rangeStart) && validateActiveEnd(tempDate, info.rangeEnd)) {\n            selectedDate.day = tempDate.day;\n            selectedDate.month = tempDate.month;\n            selectedDate.year = tempDate.year;\n            setSelectedDate(calendar);\n            events.onDateChange && events.onDateChange(selectedDate);\n          }\n        }\n      }\n    });\n    dateElements.push(element);\n  };\n\n  for (var _i = 0; _i < 42; _i++) {\n    _loop(_i);\n  }\n},\n    // validate active date\nvalidateActiveStart = function validateActiveStart(date, start) {\n  var day = date.day,\n      month = date.month,\n      year = date.year;\n  return !(start && (start.year > year || start.year === year && (start.month > month || start.month === month && start.day > day)));\n},\n    // validate active date\nvalidateActiveEnd = function validateActiveEnd(date, end) {\n  var day = date.day,\n      month = date.month,\n      year = date.year;\n  return !(end && (end.year < year || end.year === year && (end.month < month || end.month === month && end.day < day)));\n},\n    toCssString = function toCssString(key, obj) {\n  var className = \"fc-cal-user-\".concat(key),\n      css = '';\n\n  for (key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      css += \"\".concat(key, \": \").concat(obj[key], \"; \");\n    }\n  }\n\n  return {\n    className: className,\n    cssString: \".\".concat(className, \" { \").concat(css, \"}\")\n  };\n},\n\n/**\n * the api help in segregating the css given in string format or\n * in object format\n */\nseparateCssClass = function separateCssClass() {\n  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var classObj = {},\n      styleEle = document.getElementById('fc__calendar__style'),\n      sheet = styleEle && styleEle.sheet;\n\n  if (!sheet) {\n    return classObj;\n  }\n\n  CLASS_PRECEDENCE_SEQUENCE.forEach(function (key) {\n    if (styles.hasOwnProperty(key) || defaultCss[key]) {\n      var value = styles[key] || defaultCss[key]; // when string is given as the value it will act as class\n      // and user is suppose to define the css of the class in his\n      // stylesheet\n\n      if (typeof value === 'string') {\n        classObj[key] = value;\n      } else if (isObject(value)) {\n        // the user can pass an object as well\n        var _toCssString = toCssString(key, value),\n            className = _toCssString.className,\n            cssString = _toCssString.cssString; // the css for hover does not get return as classname since\n        // hover css class gets applied by bowser itself\n\n\n        !key.endsWith(':hover') && (classObj[key] = className);\n\n        if (!(cssMap.has(className) && cssMap.get(className).cssStr === cssString)) {\n          // the css only gets applied if the class contains new configurations\n          var rulePos = sheet.cssRules.length;\n\n          if (cssMap.has(className)) {\n            // if the class is already present i the css sheet then that css needs to be\n            // deleted and the new css class with different config willl be added in the\n            // same position to maintain the order\n            rulePos = cssMap.get(className).index;\n            sheet.deleteRule(rulePos);\n          }\n\n          cssMap.set(className, {\n            cssStr: cssString,\n            index: rulePos\n          });\n          sheet.insertRule(cssString, rulePos);\n        }\n      }\n    }\n  });\n  return classObj;\n}; // calendar constructor\n\n\nvar Calendar =\n/*#__PURE__*/\nfunction () {\n  function Calendar() {\n    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Calendar);\n\n    var calendar = this,\n        today = new Date(),\n        currentDate = {\n      day: today.getDate(),\n      month: today.getMonth() + 1,\n      year: today.getFullYear()\n    };\n    calendar._customCssClass = {};\n    calendar.graphic = {\n      parentElement: config.container || document.body,\n      dateElements: [],\n      dateLiElements: [],\n      dayElements: []\n    };\n    calendar.style = {\n      position: 'absolute',\n      top: '0px',\n      left: '0px',\n      width: minWidth + PX,\n      // height: minHeight + PX,\n      overflow: 'hidden'\n    };\n    calendar.id = config.id || getuid();\n    calendar.events = {};\n    calendar.info = {\n      selectedDate: currentDate,\n      active: {\n        month: currentDate.month,\n        year: currentDate.year\n      },\n      weekLabel: [].concat(weekLabel),\n      monthLabel: [].concat(monthLabel),\n      weekStartingDay: 1,\n      posX: 0,\n      posY: 0,\n      height: minHeight,\n      width: minWidth,\n      vAlignment: 'top',\n      hAlignment: 'left',\n      highlightClasses: []\n    };\n    calendar._customCssClass = separateCssClass(config.customCssClass); // create the elements for first time only\n\n    init(calendar, config); // configure Calendar with initial config\n\n    config.doNotUpdateStyle = true;\n    calendar.configure(config, true);\n  } // configure calendar\n\n\n  _createClass(Calendar, [{\n    key: \"configure\",\n    value: function configure(config, doRepaint) {\n      var calendar = this,\n          graphic = calendar.graphic,\n          events = calendar.events,\n          info = calendar.info,\n          style = calendar.style,\n          userEvents = config && config.events;\n      var parentElement,\n          temp,\n          positioningChanged = false;\n\n      if (!config) {\n        return;\n      }\n\n      if (!config.doNotUpdateStyle) {\n        calendar._customCssClass = separateCssClass(config.customCssClass);\n      }\n\n      calendar.classNames = Object.assign({}, defaultClassNames, calendar._customCssClass); // set container\n\n      if (config.container && (parentElement = document.getElementById(config.container))) {\n        graphic.parentElement = parentElement;\n        parentElement.appendChild(graphic.container);\n      } else if (config.container instanceof Element) {\n        graphic.parentElement = config.container;\n      } // set User applied styles\n\n\n      if (config.style && config.style.position) {\n        style.position = config.style.position;\n        setStyle(graphic.container, style);\n      } // applying visual positioning configuraions to the container\n\n\n      if (!isNaN(temp = Number(config.posX))) {\n        info.posX = temp;\n        positioningChanged = true;\n      }\n\n      if (!isNaN(temp = Number(config.posY))) {\n        info.posY = temp;\n        positioningChanged = true;\n      } // if (!isNaN(temp = Number(config.height)) && temp > minHeight) {\n      //   info.height = temp;\n      //   style.height = temp + PX;\n      //   positioningChanged = true;\n      // }\n\n\n      if (!isNaN(temp = Number(config.width)) && temp > minWidth) {\n        info.width = temp;\n        style.width = temp + PX;\n        positioningChanged = true;\n      }\n\n      if (config.vAlignment && (temp = config.vAlignment.toLowerCase()) && vAlignMultiplier[temp] !== UNDEFINED) {\n        info.vAlignment = temp;\n        positioningChanged = true;\n      }\n\n      if (config.hAlignment && (temp = config.hAlignment.toLowerCase()) && hAlignMultiplier[temp] !== UNDEFINED) {\n        info.hAlignment = temp;\n        positioningChanged = true;\n      } // set events on date, month and year change\n\n\n      if (userEvents) {\n        typeof userEvents.onDateChange === 'function' && (events.onDateChange = userEvents.onDateChange);\n        typeof userEvents.onYearChange === 'function' && (events.onYearChange = userEvents.onYearChange);\n        typeof userEvents.onMonthChange === 'function' && (events.onMonthChange = userEvents.onMonthChange);\n      }\n\n      if (config.highlight) {\n        info.highlight = config.highlight;\n        doRepaint = true;\n      } else if (config.highlight === null) {\n        delete info.highlight;\n        doRepaint = true;\n      } // set calendar date\n\n\n      if ((temp = config.selectedDate) && !isNaN(Date.parse(temp.month + SLASH + temp.day + SLASH + temp.year))) {\n        info.selectedDate = config.selectedDate; // update the active month as well\n\n        info.active.month = info.selectedDate.month;\n        info.active.year = info.selectedDate.year;\n        doRepaint = true;\n      }\n\n      if (config.showInactiveMonths !== UNDEFINED) {\n        info.showInactiveMonths = !!config.showInactiveMonths;\n      } // set active month\n\n\n      if (config.active) {\n        temp = {\n          month: config.active.month || info.active.month,\n          year: config.active.year || info.active.year\n        };\n\n        if ((info.active.month !== temp.month || info.active.year !== temp.year) && (info.showInactiveMonths || validateActiveStart(temp, info.rangeStart) && validateActiveEnd(temp, info.rangeEnd))) {\n          info.active.month = temp.month;\n          info.active.year = temp.year;\n          doRepaint = true;\n        }\n      } // set month names\n\n\n      if (config.monthLabel && config.monthLabel.length === 12) {\n        info.monthLabel = config.monthLabel;\n        doRepaint = true;\n      } // set day names\n\n\n      if (config.weekLabel && config.weekLabel.length === 7) {\n        info.weekLabel = config.weekLabel;\n        disPlayDays(calendar);\n      } // set Starting day of week\n\n\n      if (config.weekStart !== UNDEFINED && info.weekStartingDay !== config.weekStart) {\n        info.weekStartingDay = config.weekStart;\n        disPlayDays(calendar);\n      } // Set active range start\n\n\n      if (config.rangeStart && validateActiveStart(info.selectedDate, config.rangeStart)) {\n        info.rangeStart = config.rangeStart;\n        doRepaint = true;\n      } else if (config.rangeStart === null) {\n        delete info.rangeStart;\n        doRepaint = true;\n      } // Set active range end\n\n\n      if (config.rangeEnd && validateActiveEnd(info.selectedDate, config.rangeEnd)) {\n        info.rangeEnd = config.rangeEnd;\n        doRepaint = true; // Check whether the old active date is valid or not\n      } else if (config.rangeEnd === null) {\n        delete info.rangeEnd;\n        doRepaint = true;\n      } // set calendar to the desired date\n\n\n      doRepaint && displayMonth(calendar);\n\n      if (positioningChanged) {\n        style.left = info.posX + info.width * (hAlignMultiplier[info.hAlignment] || 0) + PX;\n        info.height = graphic.container && graphic.container.offsetHeight || minHeight;\n        style.top = info.posY + info.height * (vAlignMultiplier[info.vAlignment] || 0) + PX;\n        setStyle(graphic.container, style);\n      }\n    } // call show function show calendar\n\n  }, {\n    key: \"show\",\n    value: function show() {\n      var calendar = this,\n          container = calendar.graphic.container;\n      container.style.visibility = 'visible';\n      container.style.opacity = '1';\n    } // call hide function to hide calendar\n\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      var calendar = this,\n          container = calendar.graphic.container;\n      container.style.visibility = 'hidden';\n      container.style.opacity = '0';\n    } // returns the current or selected date\n\n  }, {\n    key: \"getDate\",\n    value: function getDate() {\n      return this.info.selectedDate;\n    } // add custom funcion on click\n\n  }, {\n    key: \"addEventListner\",\n    value: function addEventListner(eventName, handler) {\n      typeof handler === 'function' && this.events && (this.events[eventName] = handler);\n    } // remove custom funcion on click\n\n  }, {\n    key: \"removeEventListner\",\n    value: function removeEventListner(eventName) {\n      if (this.events && this.events[eventName]) {\n        delete this.events[eventName];\n      }\n    }\n  }, {\n    key: \"getDimension\",\n    value: function getDimension() {\n      var graphic = this.graphic;\n      return {\n        width: graphic.container.offsetWidth,\n        height: graphic.container.offsetHeight\n      };\n    } // dispose the dom elements\n\n  }, {\n    key: \"dispose\",\n    value: function dispose() {\n      var graphic = this.graphic,\n          parentElement = graphic.parentElement,\n          container = graphic.container;\n      parentElement.removeChild(container);\n    }\n  }]);\n\n  return Calendar;\n}(); // attache to the window if availabel\n// if (window) {\n//   window.FusionCalendar = Calendar;\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\n//# sourceURL=webpack:///./src/index.js?")
                        }
                    })
                }, module.exports = factory()
            },
            811: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = n(195),
                    s = n(180),
                    l = [2, 2, 4],
                    c = function(e) {
                        return (e < 10 ? "0" + e : e) + ""
                    };
                var d = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).addEventListener("blur", function(e) {
                            var t, n = this.getLinkedParent(),
                                i = (e.originalEvent.target.value + "").split("/"),
                                a = i.length;
                            if (3 === a) {
                                for (t = 0; t < a; t++)
                                    if (isNaN(i[t]) || i[t].length !== l[t]) return;
                                n.updateCalendar({
                                    day: +i[0],
                                    month: +i[1],
                                    year: +i[2]
                                }, this.config.id)
                            }
                        }.bind((0, a["default"])(n))), n
                    }(0, r["default"])(t, e);
                    var n = t.prototype;
                    return n.__setDefaultConfig = function() {
                        e.prototype.__setDefaultConfig.call(this);
                        var t = this.config;
                        t.enabled = !0, t.inputBoxWidth = 65, t._labelStyle = {
                            "font-size": "12px",
                            "font-weight": "normal",
                            "font-style": "normal",
                            // dark text
                            color: "#ffffff"
                        }, t._inputStyle = {
                            "font-size": "12px",
                            border: "1px solid #efefef",
                            "background-color": "#fcfcfc",
                            // dark text
                            color: "#ffffff",
                            width: t.inputBoxWidth + s.PXSTRING,
                            padding: "2px"
                        }, t.date = {
                            day: 8,
                            month: 10,
                            year: 2018
                        }
                    }, n.configureAttributes = function(t) {
                        void 0 === t && (t = {}), e.prototype.configureAttributes.call(this, t);
                        var n, i = this.config,
                            a = this.getFromEnv("getStyleDef"),
                            r = this.getFromEnv("baseTextStyle");
                        Object.assign(i, t), n = i.date, i.value = c(n.day) + "/" + c(n.month) + "/" + c(n.year), i._finalLabelStyle = Object.assign({}, i._labelStyle, r, a(i.labelStyle)), i._finalInputStyle = Object.assign({}, i._inputStyle, r, a(i.inputStyle)), delete i._finalInputStyle["line-height"]
                    }, n.getDimension = function() {
                        var e, t = this.config,
                            n = this.getFromEnv("smartLabel"),
                            i = this.getFromEnv("fontParser")(t._finalInputStyle["font-size"]);
                        return n.setStyle(Object.assign({}, t._finalLabelStyle)), t.labelDim = e = n.getOriSize(t.label), n.setStyle(Object.assign({}, t._finalInputStyle)), t.inputBoxWidth = n.getOriSize(t.value).width + 10, t._finalInputStyle.width = Math.max(65, t.inputBoxWidth) + s.PXSTRING, {
                            width: e.width + t.inputBoxWidth,
                            height: Math.max(n._lineHeight, 1.5 * i)
                        }
                    }, n.setTranslation = function(e, t) {
                        this.config.position = {
                            x: e,
                            y: t
                        }
                    }, n.draw = function() {
                        var e = this.config,
                            t = e.position,
                            n = e.labelDim,
                            i = e.date || {},
                            a = c(i.day) + "/" + c(i.month) + "/" + c(i.year);
                        this.addGraphicalElement({
                            el: "html",
                            attr: {
                                x: t.x,
                                y: t.y,
                                type: "div",
                                text: e.label
                            },
                            component: this,
                            css: e._finalLabelStyle,
                            container: {
                                id: "box-container",
                                label: "box-container",
                                isParent: !0
                            },
                            label: "label",
                            id: "label"
                        }), this.addGraphicalElement({
                            el: "html",
                            attr: {
                                x: t.x + n.width,
                                y: t.y - n.height / 3,
                                type: "input",
                                name: e.label,
                                value: a
                            },
                            component: this,
                            css: e._finalInputStyle,
                            container: {
                                id: "box-container",
                                label: "box-container",
                                isParent: !0
                            },
                            label: "box",
                            id: "box"
                        }), this.getGraphicalElement("box", "box").element.value = a
                    }, t
                }(o.SmartRenderer);
                t["default"] = d
            },
            812: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(180),
                    s = o.isIE11 ? 38 : 32,
                    l = "url(data:image/svg+xml;base64," + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.95 10"><defs><style>.cls-2 {fill: #444;}</style></defs><polygon class="cls-2" points="1.41 4.67 2.48 3.18 3.54 4.67 1.41 4.67" /><polygon class="cls-2" points="3.54 5.33 2.48 6.82 1.41 5.33 3.54 5.33" /></svg>') + ") no-repeat 100% 100%",
                    c = function(e) {
                        return (e < 10 ? "0" + e : e) + ""
                    },
                    d = function(e, t) {
                        void 0 === t && (t = -1);
                        var n, i = "";
                        for (n = 0; n <= e; n++) i += n === t ? '<option value="' + c(n) + '" selected>' + c(n) + "</option>" : '<option value="' + c(n) + '">' + c(n) + "</option>";
                        return i
                    },
                    u = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            var e = this.config;
                            e.enabled = !0, e.label = "Time: ", e._labelStyle = {
                                "font-size": "12px",
                                "font-weight": "normal",
                                "font-style": "normal",
                                color: "#5f5f5f"
                            }, e._selectStyle = {
                                "font-size": "12px",
                                border: "0",
                                outline: "1px solid #efefef",
                                "outline-offset": "-1px",
                                color: "#5f5f5f",
                                width: s + o.PXSTRING,
                                "padding-left": o.isIE11 || o.isFirefox ? "0px" : "5px",
                                "padding-right": o.isIE11 || o.isFirefox ? "0px" : "5px",
                                "padding-top": "5px",
                                "padding-bottom": "5px",
                                background: l,
                                "background-color": "#ffffff",
                                "-webkit-appearance": "none",
                                "-moz-appearance": "none",
                                "-o-appearance": "none",
                                "border-radius": "0px",
                                appearance: "none"
                            }, o.isIE11 && delete e._selectStyle.background
                        }, n.configureAttributes = function(e) {
                            void 0 === e && (e = {});
                            var t = this.config,
                                n = this.getFromEnv("getStyleDef"),
                                i = this.getFromEnv("baseTextStyle");
                            Object.assign(t, e), t._finalLabelStyle = Object.assign({}, t._labelStyle, i, n(t.labelStyle)), t._finalSelectStyle = Object.assign({}, t._selectStyle, i, n(t.selectStyle)), delete t._finalSelectStyle["line-height"]
                        }, n.getDimension = function() {
                            var e, t, n = this.config,
                                i = this.getFromEnv("fontParser"),
                                a = i(n._finalSelectStyle["font-size"]),
                                r = this.getFromEnv("smartLabel"),
                                s = function(e) {
                                    return e < 21 ? 2 : e < 31 ? 1.67 : e < 51 ? 1.5 : 1.25
                                }(a);
                            return r.setStyle(n._finalLabelStyle), e = n.labelDim = r.getOriSize(n.label), t = r.getOriSize(":").width, n.inputBoxWidth = Math.max(i(n._finalSelectStyle.width), 2.6 * a), n.inputBoxHeight = a * s, n.spacingMultiplier = a > 30 ? 2 : 1, n._finalSelectStyle.width = n.inputBoxWidth + o.PXSTRING, {
                                width: e.width + 3 * t + 3 * n.inputBoxWidth + 20,
                                height: Math.max(e.height, n.inputBoxHeight)
                            }
                        }, n.setTranslation = function(e, t) {
                            this.config.position = {
                                x: e,
                                y: t
                            }
                        }, n.getTime = function() {
                            var e, t, n;
                            return e = this.getGraphicalElement("hour-box", "hour-box"), t = this.getGraphicalElement("minute-box", "minute-box"), n = this.getGraphicalElement("second-box", "second-box"), {
                                hours: +e.element.value,
                                minutes: +t.element.value,
                                seconds: +n.element.value
                            }
                        }, n.draw = function() {
                            var e = this.config,
                                t = e.position,
                                n = e.labelDim,
                                i = e.time || {},
                                a = t.x,
                                r = Math.abs(n.height - e.inputBoxHeight) / 2;
                            this.addGraphicalElement({
                                el: "html",
                                attr: {
                                    x: a,
                                    y: t.y,
                                    type: "label",
                                    text: e.label
                                },
                                component: this,
                                css: e._finalLabelStyle,
                                container: {
                                    id: "box-container",
                                    label: "box-container",
                                    isParent: !0
                                },
                                label: "time-label",
                                id: "time-label"
                            }), a += n.width + 5, this.addGraphicalElement({
                                el: "html",
                                attr: {
                                    x: a,
                                    y: t.y - r,
                                    type: "select",
                                    innerHTML: d(23, i.hours),
                                    "class": "fc__select__time"
                                },
                                component: this,
                                css: e._finalSelectStyle,
                                container: {
                                    id: "box-container",
                                    label: "box-container",
                                    isParent: !0
                                },
                                label: "hour-box",
                                id: "hour-box"
                            }), a += e.inputBoxWidth, this.addGraphicalElement({
                                el: "html",
                                attr: {
                                    x: a + 3,
                                    y: t.y,
                                    type: "label",
                                    text: ":"
                                },
                                component: this,
                                css: e._finalLabelStyle,
                                container: {
                                    id: "box-container",
                                    label: "box-container",
                                    isParent: !0
                                },
                                label: "semicolon-minute",
                                id: "semicolon-minute"
                            }), a += 10 * e.spacingMultiplier, this.addGraphicalElement({
                                el: "html",
                                attr: {
                                    x: a,
                                    y: t.y - r,
                                    type: "select",
                                    innerHTML: d(59, i.minutes),
                                    "class": "fc__select__time"
                                },
                                component: this,
                                css: e._finalSelectStyle,
                                container: {
                                    id: "box-container",
                                    label: "box-container",
                                    isParent: !0
                                },
                                label: "minute-box",
                                id: "minute-box"
                            }), a += e.inputBoxWidth, this.addGraphicalElement({
                                el: "html",
                                attr: {
                                    x: a + 3,
                                    y: t.y,
                                    type: "label",
                                    text: ":"
                                },
                                component: this,
                                css: e._finalLabelStyle,
                                container: {
                                    id: "box-container",
                                    label: "box-container",
                                    isParent: !0
                                },
                                label: "semicolon-second",
                                id: "semicolon-second"
                            }), a += 10 * e.spacingMultiplier, this.addGraphicalElement({
                                el: "html",
                                attr: {
                                    x: a,
                                    y: t.y - r,
                                    type: "select",
                                    innerHTML: d(59, i.seconds),
                                    "class": "fc__select__time"
                                },
                                component: this,
                                css: e._finalSelectStyle,
                                container: {
                                    id: "box-container",
                                    label: "box-container",
                                    isParent: !0
                                },
                                label: "second-box",
                                id: "second-box"
                            })
                        }, t
                    }(r.SmartRenderer);
                t["default"] = u
            },
            813: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = n(195),
                    s = function(e) {
                        function t(t) {
                            var n;
                            n = e.call(this, t) || this;
                            var i = (0, a["default"])(n),
                                r = i.config;
                            return r.clickHandler = function() {
                                i.getLinkedParent().submitData(r.type)
                            }, r.mouseoverHandler = function() {
                                i.setData({
                                    buttonStyle: r["button:hover"]
                                }, !0)
                            }, r.mouseoutHandler = function() {
                                i.config && i.setData({
                                    buttonStyle: r["button:hoverout"]
                                }, !0)
                            }, i.addEventListener("fc-click", r.clickHandler), i.addEventListener("fc-mouseover", r.mouseoverHandler), i.addEventListener("fc-mouseout", r.mouseoutHandler), n
                        }(0, r["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            var e = this.config;
                            e.height = 10, e.width = 20, e.label = "Apply", e._buttonStyle = {
                                "-webkit-border-radius": "2px",
                                backgroundColor: "#5648D4",
                                border: "1px solid #5648D4",
                                borderRadius: "2px",
                                color: "#60634E",
                                cursor: "pointer",
                                paddingTop: "1px",
                                textAlign: "center",
                                zIndex: 21,
                                display: "flex",
                                width: 66,
                                height: 22,
                                "line-height": "9px",
                                "justify-content": "center",
                                "align-items": "center",
                                "font-size": "11px"
                            }, e.clickHandler = function() {
                                this.getLinkedParent().submitData()
                            }
                        }, n.configureAttributes = function(e) {
                            void 0 === e && (e = {});
                            var t = this.config,
                                n = this.getFromEnv("getStyleDef");
                            Object.assign(t, e), t._finalStyle = Object.assign({}, t._buttonStyle, this.getFromEnv("baseTextStyle"), n(t.customStyle), n(t.buttonStyle))
                        }, n.getDimension = function() {
                            var e = this.config,
                                t = e._finalStyle["font-size"],
                                n = this.getFromEnv("fontParser");
                            return e.width = Math.max(+e._finalStyle.width || 0, 6 * n(t)), e.height = Math.max(+e._finalStyle.height || 0, 2 * n(t)), {
                                width: e.width,
                                height: e.height
                            }
                        }, n.setTranslation = function(e, t) {
                            this.config.position = {
                                x: e,
                                y: t
                            }
                        }, n.draw = function() {
                            var e = this.config,
                                t = e.position;
                            this.addGraphicalElement({
                                el: "html",
                                attr: {
                                    text: e.label,
                                    type: "div",
                                    width: e.width,
                                    height: e.height,
                                    x: t.x,
                                    y: t.y
                                },
                                component: this,
                                container: {
                                    id: "box-container",
                                    label: "box-container",
                                    isParent: !0
                                },
                                css: e._finalStyle,
                                label: "button",
                                id: "button"
                            })
                        }, t
                    }(o.SmartRenderer);
                t["default"] = s
            },
            814: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(195),
                    o = n(180),
                    s = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }(0, a["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this), this.config.visibility = "hidden"
                        }, n.configureAttributes = function(e) {
                            void 0 === e && (e = {}), Object.assign(this.config, e)
                        }, n.draw = function() {
                            var e = +this.getFromEnv("chartHeight"),
                                t = +this.getFromEnv("chartWidth"),
                                n = this.config.visibility;
                            this.addGraphicalElement({
                                el: "html",
                                attr: {
                                    x: 0,
                                    y: 0,
                                    width: t,
                                    height: e,
                                    fill: o.TRACKER_FILL,
                                    visibility: n,
                                    type: "div"
                                },
                                component: this,
                                id: "cover",
                                label: "cover"
                            })
                        }, t
                    }(r.SmartRenderer);
                t["default"] = s
            },
            815: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = n(180),
                    r = i(n(816));
                t["default"] = function(e) {
                    var t, n = e.getChildren("standardRangeSelector"),
                        i = e.getChildren("customRangeSelector");
                    (0, a.componentFactory)(e, r["default"], "toolbar-manager"), t = e.getChildren("toolbar-manager")[0], n && n[0] && !n[0].getState("removed") ? t.register("srs", n[0]) : t.deRegister("srs"), i && i[0] && !i[0].getState("removed") ? t.register("crs", i[0]) : t.deRegister("crs"), t.configure()
                }
            },
            816: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = function(e) {
                        function t(t) {
                            var n;
                            return (n = e.call(this, t) || this)._registry = {}, n._limitChangeHandler = function() {
                                var e = (0, a["default"])(n),
                                    t = n.getRegistry();
                                for (e in t) t[e].updateOnLimitChange && t[e].updateOnLimitChange();
                                n.setData({}, !0)
                            }, n
                        }(0, r["default"])(t, e);
                        var n = t.prototype;
                        return n.configureAttributes = function(e) {
                            void 0 === e && (e = {});
                            var t, n = this.getRegistry(),
                                i = [{}],
                                a = this.getFromEnv("selectorToolbar");
                            for (t in n) n[t] && i.push(n[t].getToolInfo());
                            a.setData({
                                child: Object.assign.apply(Object, i),
                                toolbarhdirection: 1
                            }, !0), this.addExtEventListener("focusLimitChanged", this._limitChangeHandler, this.getFromEnv("chart"))
                        }, n.getRegistry = function() {
                            return this._registry
                        }, n.register = function(e, t) {
                            this._registry[e] = t
                        }, n.deRegister = function(e) {
                            delete this._registry[e]
                        }, t
                    }(n(195).SmartRenderer);
                t["default"] = o
            },
            817: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(505)),
                    r = n(180);
                t["default"] = function(e) {
                    var t, n = e.config.showLegend,
                        i = e.config.mergedLegendStyle,
                        o = i.color = (0, r.pluck)(i.fill, "#5f5f5f"),
                        s = (0, r.pluckNumber)(i.opacity, 1),
                        l = (0, r.pluckNumber)(i["fill-opacity"], 1),
                        c = Object.assign({}, e.getFromEnv("baseTextStyle"), i);
                    c["font-size"] = +(c["font-size"] + "").replace(/px/, ""), n ? ((0, r.componentFactory)(e, a["default"], "legend", 1, [{
                        drawcustomlegendicon: 1,
                        legendiconsides: 4,
                        alignlegendwithcanvas: 1,
                        legendborderthickness: 0,
                        legendiconscale: 1.3,
                        legendbgalpha: 0,
                        legendFontColor: o,
                        style: {
                            text: c
                        }
                    }]), t = e.getChildren("legend")[0], e.addToEnv("legend", t), t.setStateCosmetics("hover", function(e, t) {
                        return t.hasState("hidden") || (e.text || (e.text = {}), e.text.fill = (0, r.convertColor)(o, s * l * 100), e.text.cursor = "inherit"), e
                    }), function d(t) {
                        for (var n in void 0 === t && (t = {}), t)
                            if (t.hasOwnProperty(n)) {
                                var i = t[n];
                                i.hasOwnProperty("visibility") ? e._addLegend(i) : d(i)
                            }
                    }(e.getFromEnv("legendMap"))) : (t = e.getChildren("legend") && e.getChildren("legend")[0]) && t.remove()
                }
            },
            818: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = n(180),
                    r = i(n(819));
                t["default"] = function(e) {
                    var t, n = e.getFromEnv("dataSource").chart;
                    (0, a.componentFactory)(e, r["default"], "selectorToolbar", 1, [Object.assign({
                        toolbarhdirection: 1
                    }, n)]), t = e.getChildren("selectorToolbar")[0], e.addToEnv("selectorToolbar", t)
                }
            },
            819: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(194)),
                    r = n(289),
                    o = n(180),
                    s = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        return (0, a["default"])(t, e), t.prototype.configureAttributes = function(e) {
                            void 0 === e && (e = {});
                            var t, n, i, a, r, s = this.config,
                                l = this.getFromEnv("chartConfig");
                            if (this.props.width = (0, o.pluckNumber)(e.width, this.props.width, 0), this.props.height = (0, o.pluckNumber)(e.height, this.props.height, 0), s.orientation = (0, o.pluck)(e.toolbarorientation, s.orientation), s.hPadding = (0, o.pluck)(e.toolbarhpadding, s.hPadding), s.vPadding = (0, o.pluck)(e.toolbarvpadding, s.vPadding), s.backgroundcolor = (0, o.pluck)(e.toolbarbackgroundcolor, s.backgroundcolor), s.backgroundalpha = (0, o.pluck)(e.toolbarbackgroundalpha, s.backgroundalpha), s.bordercolor = (0, o.pluck)(e.toolbarbordercolor, s.bordercolor), s.borderalpha = (0, o.pluck)(e.toolbarborderalpha, s.borderalpha), s.borderthickness = (0, o.pluck)(e.toolbarborderthickness, s.borderthickness), s.hDirection = (0, o.pluckNumber)(e.toolbarhdirection, "r" === l.toolbarHAlign ? -1 : 1), s.vDirection = (0, o.pluckNumber)(e.toolbarvdirection, "b" === l.toolbarBAlign ? -1 : 1), s.hAlign = (0, o.pluck)(e.hAlign, "center").toLowerCase(), s.vAlign = (0, o.pluck)(e.vAlign, "middle").toLowerCase(), s.marginTop = (0, o.pluckNumber)(e.marginTop, e.spacing, s.marginTop), s.marginLeft = (0, o.pluckNumber)(e.marginLeft, e.spacing, s.marginLeft), s.marginRight = (0, o.pluckNumber)(e.marginRight, e.spacing, s.marginRight), s.marginBottom = (0, o.pluckNumber)(e.marginBottom, e.spacing, s.marginBottom), s.child = e.child || s.child, s.child)
                                for (t = s.child, i = 0, a = (n = Object.keys(s.child)).length; i < a; i++)(r = this.attachChild(t[n[i]].def, t[n[i]].type, n[i])).setData(t[n[i]].configuration, !0), r.setState("visible", !0)
                        }, t
                    }(r.ToolBar);
                t["default"] = s
            },
            820: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(821)),
                    r = n(180);
                t["default"] = function(e) {
                    (0, r.componentFactory)(e, a["default"], "multicanvasCrosslineManager", 1), e.getChildren("multicanvasCrosslineManager")[0].configure()
                }
            },
            821: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = n(195),
                    s = n(184),
                    l = n(180),
                    c = i(n(705)),
                    d = n(747);

                function u(e) {
                    var t, n;
                    for (t = 0, n = e.length; t < n; t++)
                        if (e[t] !== h && "none" !== e[t]) return (0, s.convertColor)(e[t])
                }
                var h, f = "",
                    p = function(e) {
                        return "column" === e
                    },
                    g = 5,
                    m = {},
                    v = function(e) {
                        function t() {
                            var t;
                            t = e.call(this) || this;
                            var n, i, r, o, s, v, y, b, _, x, k, S = (0, a["default"])(t);
                            return S.canvases = [], S._handler = function(e) {
                                b = S.config.multiCanvasTooltip, n = e.sender.getLinkedParent(), _ = n.config.xConfigs[0].scale, k = n.isWithinCanvas(e.data.chartX, e.data.chartY);
                                var t, a, w, E, C, j, D, M, T, I, L, A, F, O = e.data.hoveredInfo || {},
                                    P = S.getFromEnv("tooltipStyle");
                                k && O.pointObj ? (F = S.getFromEnv("chart").config.focusAxesX[0].scale.getDomain(), j = O.pointObj.startDate, D = O.pointObj.endDate, (+(r = _.getDomainValue(_.getRangeValue(j, D))) < +F[0] || +r > +F[1] || +j == +D) && (r = h)) : r = h, S.canvases.forEach(function(t) {
                                    if (s = t === n, y = t.getTranslation(), I = h, t.getChildren("verticalCrossLine")[0].setData({
                                            value: r,
                                            showMarker: s,
                                            dateRange: {
                                                startDate: j,
                                                endDate: D
                                            }
                                        }, !0), a = t.getChildren("dataset"), p(a[0].getName()) && 1 !== a.length || !O.component || "dataset" !== O.component.getType() && "dataMarker" !== O.component.getType() ? k || a.forEach(function(e) {
                                            e.setHoverOutEffect([m[e.getId()]])
                                        }) : a.forEach(function(t) {
                                            t._getHoveredPlot(e.data.chartX, e.data.chartY), T = k && t._getHoveredBin(), x = m[t.getId()], (0, l.defined)(x) && x !== T && t.setHoverOutEffect([x]), m[t.getId()] = T, O.hovered && s ? O.component === t ? t.setHoverInEffect([T], !0) : "continuous" === t.getName() ? t.setHoverInEffect([T], !1, !0) : t.setHoverOutEffect([T]) : t.setHoverInEffect([T], !1)
                                        }), b && !s && (w = t.getChildren("tooltipHover")[0], (E = w.config).showTooltip))
                                        if (v = f, i = t.getFromEnv("toolTipController"), k && O.component && "dataset" === O.component.getType())
                                            if (a.forEach(function(e, t) {
                                                    T = e._getHoveredBin(), "visible" === e.config.visibility && e.config.dataInfo[T] && (I = e.config.dataInfo[T], v += e._getTooltext(!1, !1, T), C = t)
                                                }), I) {
                                                T = a[C]._getHoveredBin();
                                                var o = a[C]._getDateForToolText(T),
                                                    c = o.header,
                                                    u = o.body,
                                                    _ = O.component.getFromEnv("xScale").getRange();
                                                "" !== (v = (0, d.createDivString)(P.headerStyleString, c) + (0, d.createDivString)(P.bodyStyleString, u + v)) && I.endXPosition > _[0] && I.x < _[1] ? E.currentToolTip = i.drawAt(I.x + (I.width || 0) / 2 + g + y.x, (I.colY || I.y) + y.y, v, E.currentToolTip, t) : i.hide(E.currentToolTip)
                                            } else i.hide(E.currentToolTip);
                                    else i.hide(E.currentToolTip)
                                }), t = n.getChildren("horizontalCrossLine")[0], O.hovered && "dataset" === O.component.getType() && k ? (M = (0, c["default"])(O.pointObj.yBaseValue) ? O.pointObj.yBaseValue >= 0 ? O.pointObj.value : O.pointObj.yBaseValue : O.pointObj.value, o = O.component.config, n.config.yConfigs.forEach(function(e) {
                                    e.scale === O.component.config.scaleY && (L = e.scale, A = e.align)
                                }), "hidden" !== o.visibility && t.setData({
                                    value: M,
                                    scale: L,
                                    yAxisAlignment: A,
                                    showMarker: !0,
                                    text: O.pointObj.value,
                                    suffix: o.suffix,
                                    prefix: o.prefix,
                                    formatterFn: o.formatterFn,
                                    markerFill: u([o.style && o.style.fill, o.plotStyle && o.plotStyle.fill, o.plotStyle && o.plotStyle.stroke])
                                }, !0)) : t.setData({
                                    value: h
                                }, !0)
                            }, t
                        }(0, r["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this), this.config.defaultFormat = "%A, %b %d, %Y", this.canvases = []
                        }, n.configure = function() {
                            e.prototype.configure.call(this);
                            var t, n, i, a = this.getLinkedParent(),
                                r = a.config.focusPanels.length;
                            for (this.config.multiCanvasTooltip = (0, l.pluckNumber)(this.getFromEnv("chart-attrib").multicanvastooltip, 1), i = 0; i < r; i++) n = a.getChildren("canvas_" + i)[0], this.canvases.push(n), t = n.getFromEnv("mouseTracker"), this.addExtEventListener("canvasHovered", this._handler, t)
                        }, t
                    }(o.SmartRenderer);
                t["default"] = v
            },
            822: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(823)),
                    r = n(180);
                t["default"] = function(e) {
                    var t = e.getFromEnv("dataSource").extensions;
                    (0, r.pluckNumber)(t && t.standardrangeselector && t.standardrangeselector.enabled, 1) ? ((0, r.componentFactory)(e, a["default"], "standardRangeSelector", 1), e.getChildren("standardRangeSelector")[0].configure({
                        currentDomain: e.getFocusLimit(),
                        totalDomain: e.getContextLimit(),
                        style: t && t.standardrangeselector && t.standardrangeselector.style || {}
                    })) : (0, r.componentFactory)(e, a["default"], "standardRangeSelector", 0)
                }
            },
            823: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = n(195),
                    s = i(n(824)),
                    l = n(290),
                    c = n(180),
                    d = n(374),
                    u = n(366),
                    h = i(n(819)),
                    f = [31536e7, 15768e7, 94608e6, 63072e6, 31536e6, 160704e5, 80352e5, 26784e5, 1296e6, 6048e5, 864e5, 432e5, 216e5, 108e5, 36e5, 18e5],
                    p = {
                        0: {
                            unit: "year",
                            multiplier: 10,
                            intervalName: "10Y"
                        },
                        1: {
                            unit: "year",
                            multiplier: 5,
                            intervalName: "5Y"
                        },
                        2: {
                            unit: "year",
                            multiplier: 3,
                            intervalName: "3Y"
                        },
                        3: {
                            unit: "year",
                            multiplier: 2,
                            intervalName: "2Y"
                        },
                        4: {
                            unit: "year",
                            multiplier: 1,
                            intervalName: "1Y",
                            tilldateName: "YTD"
                        },
                        5: {
                            unit: "month",
                            multiplier: 6,
                            intervalName: "6M"
                        },
                        6: {
                            unit: "month",
                            multiplier: 3,
                            intervalName: "3M",
                            tilldateName: "QTD"
                        },
                        7: {
                            unit: "month",
                            multiplier: 1,
                            intervalName: "1M",
                            tilldateName: "MTD"
                        },
                        8: {
                            unit: "day",
                            multiplier: 15,
                            intervalName: "15D"
                        },
                        9: {
                            unit: "day",
                            multiplier: 7,
                            intervalName: "7 Days",
                            // tilldateName: "WTD"
                        },
                        10: {
                            unit: "day",
                            multiplier: 1,
                            intervalName: "1D"
                        },
                        11: {
                            unit: "hour",
                            multiplier: 12,
                            intervalName: "12H"
                        },
                        12: {
                            unit: "hour",
                            multiplier: 6,
                            intervalName: "6H"
                        },
                        13: {
                            unit: "hour",
                            multiplier: 3,
                            intervalName: "3H"
                        },
                        14: {
                            unit: "hour",
                            multiplier: 1,
                            intervalName: "1H"
                        },
                        15: {
                            unit: "minute",
                            multiplier: 30,
                            intervalName: "30m"
                        }
                    },
                    g = function(e, t, n, i, a) {
                        void 0 === i && (i = !1);
                        var r = m(p[e].unit, this.getFromEnv("isUTC")),
                            o = 3 * n[2];
                        return i ? a - r.every(p[e].multiplier).floor(a) >= o : f[e] >= t[2] && f[e] >= o
                    },
                    m = function(e, t) {
                        switch (e) {
                            case "year":
                                return t ? d.utcYear : u.timeYear;
                            case "quarter":
                                return t ? d.utcQuarter : u.timeQuarter;
                            case "month":
                                return t ? d.utcMonth : u.timeMonth;
                            case "week":
                                return t ? d.utcWeek : u.timeWeek;
                            case "day":
                                return t ? d.utcDay : u.timeDay;
                            case "hour":
                                return t ? d.utcHour : u.timeHour;
                            case "minute":
                                return t ? d.utcMinute : u.timeMinute;
                            case "second":
                                return t ? d.utcSecond : u.timeSecond
                        }
                    },
                    v = function(e) {
                        function t() {
                            var t;
                            t = e.call(this) || this;
                            var n = (0, a["default"])(t);
                            return t._handler = function() {
                                var e, t, i, a = this.getFromEnv("chart"),
                                    r = this.config.multiplier,
                                    o = this.getFromEnv("isUTC"),
                                    s = this.config.unit,
                                    l = this.config.fixedAtEnd,
                                    c = this.config.fixedAtStart,
                                    d = a.getFocusLimit(),
                                    u = a.getContextLimit();
                                n.config.clickedButtonDetails = this.config, this.getFromEnv("animationManager").setAnimationState("selectedRange"), i = l ? u[1] : d[1], s && r ? (e = m(s, o), t = l ? e.every(r).floor(i) : e.offset(i, -r)) : c && (t = u[0]), n.config.lastSelectedButtonConfig = {
                                    fixedAtEnd: this.config.fixedAtEnd,
                                    fixedAtStart: this.config.fixedAtStart,
                                    unit: this.config.unit,
                                    multiplier: this.config.multiplier
                                }, n.config.updatedThroughButton = !0, a.setFocusLimit([t, i])
                            }, t._toolbars = {}, t
                        }(0, r["default"])(t, e);
                        var n = t.prototype;
                        return n.__setDefaultConfig = function() {
                            e.prototype.__setDefaultConfig.call(this);
                            var t = this.config;
                            t.lastSelectedButtonConfig = void 0, t.clickedButtonDetails = {}, t.labelFontSize = "12px", t.takeMaxSize = !1, t.defaultStateStyle = {
                                activated: {
                                    config: {
                                        normal: {
                                            fill: "#9e9e9e",
                                            stroke: "none",
                                            "stroke-width": 2,
                                            cursor: "pointer",
                                            "stroke-opacity": 1,
                                            "fill-opacity": 1,
                                            opacity: "1",
                                            "font-weight": 400,
                                            "font-size": "12",
                                            "line-height": 14.4,
                                            "text-anchor": "middle"
                                        },
                                        hover: {
                                            fill: "#5648D4",
                                            stroke: "none",
                                            "stroke-width": 2,
                                            cursor: "pointer",
                                            "stroke-opacity": 1,
                                            "fill-opacity": 1,
                                            opacity: "1",
                                            "font-weight": 400,
                                            "font-size": "12",
                                            "line-height": 14.4,
                                            "text-anchor": "middle"
                                        },
                                        normalBackground: {
                                            fill: "none",
                                            "fill-opacity": 1,
                                            stroke: "none",
                                            cursor: "pointer",
                                            r: "2px",
                                            "stroke-width": "1",
                                            "stroke-dasharray": "none",
                                            "stroke-opacity": "1",
                                            opacity: 1
                                        },
                                        hoverBackground: {
                                            fill: "none",
                                            "fill-opacity": 1,
                                            stroke: "none",
                                            cursor: "pointer",
                                            r: "2px",
                                            "stroke-width": "1",
                                            "stroke-dasharray": "none",
                                            "stroke-opacity": "1",
                                            opacity: 1
                                        }
                                    }
                                },
                                pressed: {
                                    config: {
                                        normal: {
                                            fill: "#5648D4",
                                            "stroke-width": 2,
                                            stroke: "none",
                                            "symbol-stroke": "#343434",
                                            cursor: "pointer",
                                            "fill-opacity": 1,
                                            "stroke-opacity": 1,
                                            opacity: "1",
                                            "font-weight": 400,
                                            "font-size": "12",
                                            "line-height": 14.4,
                                            "text-anchor": "middle"
                                        },
                                        hover: {
                                            fill: "#5648D4",
                                            "stroke-width": 2,
                                            stroke: "none",
                                            "symbol-stroke": "#5648D4",
                                            cursor: "pointer",
                                            "fill-opacity": 1,
                                            "stroke-opacity": 1,
                                            opacity: "1",
                                            "font-weight": 400,
                                            "font-size": "12",
                                            "line-height": 14.4,
                                            "text-anchor": "middle"
                                        },
                                        normalBackground: {
                                            fill: "none",
                                            "fill-opacity": 1,
                                            stroke: "none",
                                            cursor: "pointer",
                                            r: "2px",
                                            "stroke-width": "1",
                                            "stroke-dasharray": "none",
                                            "stroke-opacity": "1",
                                            opacity: 1
                                        },
                                        hoverBackground: {
                                            fill: "none",
                                            "fill-opacity": 1,
                                            stroke: "none",
                                            cursor: "pointer",
                                            r: "2px",
                                            "stroke-width": "1",
                                            "stroke-dasharray": "none",
                                            "stroke-opacity": "1",
                                            opacity: 1
                                        }
                                    }
                                }
                            }, t.stateStyle = {}
                        }, n.configureAttributes = function(t) {
                            e.prototype.configureAttributes.call(this, t);
                            var n, i, a, r, o, s, l, d, u = this.config,
                                h = this.getFromEnv("getStyleDef"),
                                f = this.getFromEnv("baseTextStyle");
                            u.contextRangeThreshold = this.getFromEnv("contextBins")[0].getRangeThreshold(), u.focusRangeThreshold = this.getFromEnv("focusBins")[0].getRangeThreshold(), u.contextMinBin = this.getFromEnv("contextBins")[0].getBinMin(), u.focusMinBin = this.getFromEnv("focusBins")[0].getBinMin(), Object.assign(u, t), l = u.style, n = Object.assign({}, f, h(l["button-text"])), i = Object.assign({}, f, h(l["button-text:hover"])), a = Object.assign({}, f, h(l["button-text:active"])), r = h(l["button-background"]), o = h(l["button-background:hover"]), s = h(l["button-background:active"]), (r.fill || r.stroke) && (u.takeMaxSize = !0), d = {
                                activated: {
                                    config: {
                                        normal: n,
                                        hover: Object.assign({}, n, i),
                                        normalBackground: r,
                                        hoverBackground: Object.assign({}, r, o)
                                    }
                                },
                                pressed: {
                                    config: {
                                        normal: Object.assign({}, n, a),
                                        hover: Object.assign({}, n, a, i),
                                        normalBackground: Object.assign({}, r, s),
                                        hoverBackground: Object.assign({}, r, s, o)
                                    }
                                }
                            }, u.stateStyle = (0, c.extend2)((0, c.extend2)({}, u.defaultStateStyle), d), u.stateStyle.separator = h(l.separator && l.separator)
                        }, n.getTillDateButtons = function(e, t, n) {
                            var i, a, r, o = [],
                                s = this.getFromEnv("chartConfig").contextLimit[1],
                                l = this.getFromEnv("UTC"),
                                d = this.getFromEnv("dateAPI"),
                                u = new Date(s),
                                h = new Date;
                            if (d(u, "FullYear", l) === d(h, "FullYear", l) && d(u, "Month", l) === d(h, "Month", l) && d(u, "Date", l) === d(h, "Date", l))
                                for (a = 0, r = f.length; a < r; a++) e >= f[a] && p[a].tilldateName && g.call(this, a, t, n, !0, s) && ((i = (0, c.extend2)({}, p[a])).fixedAtEnd = !0, i.fixedAtStart = !1, o.push(i));
                            return o
                        }, n.getSelectionButtonConfig = function() {
                            var e, t, n, i = this.config,
                                a = this.getFromEnv("isUTC"),
                                r = i.currentDomain,
                                o = i.totalDomain,
                                s = +r[1] - +r[0];
                            return t = a ? d.utcYear : u.timeYear, e = a ? d.utcMonth : u.timeMonth, n = a ? d.utcDay : u.timeDay, i.lastSelectedButtonConfig ? {
                                isTillDate: i.lastSelectedButtonConfig.fixedAtEnd && !i.lastSelectedButtonConfig.fixedAtStart,
                                isAllButton: i.lastSelectedButtonConfig.fixedAtEnd && i.lastSelectedButtonConfig.fixedAtStart,
                                isIntervalButton: !i.lastSelectedButtonConfig.fixedAtEnd && !i.lastSelectedButtonConfig.fixedAtStart,
                                multiplier: i.lastSelectedButtonConfig.multiplier,
                                unit: i.lastSelectedButtonConfig.unit
                            } : s === +o[1] - +o[0] ? {
                                isAllButton: !0
                            } : s === +r[1] - +t.floor(r[1]) ? {
                                isTillDate: !0,
                                multiplier: "1",
                                unit: "year"
                            } : s === +r[1] - +e.floor(r[1]) ? {
                                isTillDate: !0,
                                multiplier: "1",
                                unit: "month"
                            } : s === +r[1] - +e.every(3).floor(r[1]) ? {
                                isTillDate: !0,
                                multiplier: "3",
                                unit: "month"
                            } : s === +r[1] - +n.every(7).floor(r[1]) ? {
                                isTillDate: !0,
                                multiplier: "7",
                                unit: "day"
                            } : this.getHighlightedIntervalButton(s)
                        }, n.getIntervalButtons = function(e, t, n, i, a) {
                            var r, o = [],
                                s = f.length,
                                l = [],
                                c = [];
                            if (a > 0)
                                for (r = 0; r < 5; r++) {
                                    var d = Math.min(a, 1 + Math.floor(Number(p[r].multiplier) / 4));
                                    c[r] = d, o.push(31536e6 * p[r].multiplier + 864e5 * c[r])
                                }
                            for (r = s - 1; r > 0 && !(a > 0 && r < 5 && o[r] >= e) && !(f[r] >= e); r--);
                            return e && (r <= 0 ? ((a > 0 ? o[0] <= t : f[0] <= t) && g.call(this, 0, n, i) && l.push(p[0]), (a > 1 ? o[1] <= t : f[1] <= t) && g.call(this, 1, n, i) && l.push(p[1])) : r === s - 1 ? (f[r - 1] <= t && g.call(this, r - 1, n, i) && l.push(p[r - 1]), f[r] <= t && g.call(this, r, n, i) && l.push(p[r])) : ((a > 0 && r < 5 ? o[r - 1] <= t : f[r - 1] <= t) && g.call(this, r - 1, n, i) && l.push(p[r - 1]), (a > 0 && r < 5 ? o[r] <= t : f[r] <= t) && g.call(this, r, n, i) && l.push(p[r]), f[r + 1] <= t && g.call(this, r + 1, n, i) && l.push(p[r + 1]))), l
                        }, n.getHighlightedIntervalButton = function(e) {
                            var t, n, i = this.config,
                                a = i.intervalButtons,
                                r = i.currentDomain,
                                o = this.getFromEnv("isUTC"),
                                s = {};
                            for (t = a.length - 1; t >= 0 && (n = m(a[t].unit, o), +r[0] != +n.offset(r[1], -a[t].multiplier) && +r[1] != +n.offset(r[0], a[t].multiplier)); t--);
                            return -1 !== t && (s = (0, c.extend2)({
                                isIntervalButton: !0
                            }, p[t]), s = {
                                isIntervalButton: !0,
                                unit: a[t].unit,
                                multiplier: a[t].multiplier
                            }, i.lastSelectedButtonConfig = s), s
                        }, n.getToolInfo = function() {
                            var e, t, n, i, a, r, o, c, d, u = this,
                                f = u.config,
                                p = u.getFromEnv("chart"),
                                g = u.getFromEnv("selectorToolbar"),
                                m = {},
                                v = u.getFromEnv("smartLabel"),
                                y = f.stateStyle,
                                b = (o = (r = y).activated.config.normal["font-size"] || 0, c = r.activated.config.hover["font-size"] || 0, d = r.pressed.config.normal["font-size"] || 0, Math.max(parseFloat(o), parseFloat(c), parseFloat(d)) + "px" || f.labelFontSize),
                                _ = y.activated.config.normal["font-family"],
                                x = y.activated.config.normal["font-weight"],
                                k = f.currentDomain,
                                S = p.getContextLimit(),
                                w = f.contextRangeThreshold,
                                E = f.focusRangeThreshold,
                                C = f.contextMinBin,
                                j = f.focusMinBin,
                                D = 0,
                                M = 0,
                                T = f.takeMaxSize,
                                I = +k[1] - +k[0],
                                L = function(e, t) {
                                    var n, i, a = new Date(e),
                                        r = new Date(t),
                                        o = a.getFullYear(),
                                        s = r.getFullYear(),
                                        l = a.getMonth(),
                                        c = r.getMonth(),
                                        d = r.getDate(),
                                        u = 0;
                                    for (l > 1 && o++, (0 === c || 1 === c && d < 29) && s--, n = o; n <= s;)((i = n) % 4 == 0 && i % 100 != 0 || i % 400 == 0) && u++, n++;
                                    return u
                                }(+k[0], +k[1]),
                                A = +S[1] - +S[0],
                                F = "intervalToolBar-" + g.getId() + "-" + p.getId(),
                                O = "businessToolBar-" + g.getId() + "-" + p.getId(),
                                P = "allToolBar-" + g.getId() + "-" + p.getId(),
                                N = f.intervalButtons = u.getIntervalButtons(I, A, E, j, L),
                                B = f.tillDateButtons = u.getTillDateButtons(A, w, C);
                            for (v.setStyle({
                                    fontSize: b,
                                    fontFamily: _,
                                    fontWeight: x
                                }), N.forEach(function(e) {
                                    var t = v.getOriSize(e.intervalName, !1),
                                        n = t.height,
                                        i = t.width;
                                    e.height = n, e.width = i, D = Math.max(n, D), M = Math.max(i, M)
                                }), B.forEach(function(e) {
                                    var t = v.getOriSize(e.tilldateName, !1),
                                        n = t.height,
                                        i = t.width;
                                    e.height = n, e.width = i, D = Math.max(n, D), M = Math.max(i, M)
                                }), i = v.getOriSize("All", !1), D = Math.max(i.height, D), M = Math.max(i.width, M), a = u.getSelectionButtonConfig(), m[F] = {
                                    type: "tool",
                                    def: h["default"],
                                    configuration: {
                                        hAlign: "left",
                                        toolbarhdirection: 1,
                                        child: {}
                                    }
                                }, e = 0, t = N.length; e < t; e++) n = a.isIntervalButton && a.unit === N[e].unit && a.multiplier === N[e].multiplier ? "pressed" : "activated", m[F].configuration.child["intervalButton-" + g.getId() + "-" + p.getId() + "-" + e] = {
                                type: "tool",
                                def: s["default"],
                                configuration: {
                                    text: N[e].intervalName,
                                    name: "interval",
                                    width: T ? M : N[e].width,
                                    height: T ? D : N[e].height,
                                    scale: 1,
                                    marginLeft: e ? 3 : 0,
                                    marginRight: e === t - 1 ? 0 : 3,
                                    hAlign: "left",
                                    symbolStrokeWidth: "2",
                                    hoveredState: "normal",
                                    state: n,
                                    multiplier: N[e].multiplier,
                                    unit: N[e].unit,
                                    strokeWidth: 0,
                                    listener: {
                                        "fc-click": u._handler
                                    },
                                    css: y
                                }
                            };
                            if (t && (m["separator-" + g.getId() + "-" + p.getId() + "-0"] = {
                                    type: "tool",
                                    def: l.Separator,
                                    configuration: {
                                        marginLeft: 0,
                                        marginRight: 0,
                                        scale: 1,
                                        height: D < 16 ? 16 : D,
                                        width: 8,
                                        hAlign: "left",
                                        stroke: y.separator.stroke || "#dfdfdf",
                                        css: y.separator
                                    }
                                }), t = B.length) {
                                for (m[O] = {
                                        type: "tool",
                                        def: h["default"],
                                        configuration: {
                                            hAlign: "left",
                                            toolbarhdirection: 1,
                                            child: {}
                                        }
                                    }, e = 0; e < t; e++) n = a.isTillDate && a.unit === B[e].unit && a.multiplier === B[e].multiplier && +k[1] == +S[1] ? "pressed" : "activated", m[O].configuration.child["tillDateButton-" + g.getId() + "-" + p.getId() + "-" + e] = {
                                    type: "tool",
                                    def: s["default"],
                                    configuration: {
                                        text: B[e].tilldateName,
                                        name: "interval",
                                        scale: 1,
                                        width: T ? M : B[e].width,
                                        height: T ? D : B[e].height,
                                        state: n,
                                        multiplier: B[e].multiplier,
                                        unit: B[e].unit,
                                        symbolStrokeWidth: "2",
                                        hoveredState: "normal",
                                        fixedAtStart: B[e].fixedAtStart,
                                        fixedAtEnd: B[e].fixedAtEnd,
                                        marginLeft: e ? 3 : 0,
                                        marginRight: e === t - 1 ? 0 : 3,
                                        hAlign: "left",
                                        strokeWidth: 0,
                                        listener: {
                                            "fc-click": u._handler
                                        },
                                        css: y
                                    }
                                };
                                m["separator-" + g.getId() + "-" + p.getId() + "-1"] = {
                                    type: "tool",
                                    def: l.Separator,
                                    configuration: {
                                        marginLeft: 0,
                                        marginRight: 0,
                                        scale: 1,
                                        height: D < 16 ? 16 : D,
                                        classIndex: 3,
                                        itemIndex: 0,
                                        width: 8,
                                        hAlign: "left",
                                        stroke: y.separator.stroke || "#dfdfdf",
                                        css: y.separator
                                    }
                                }
                            }
                            return n = a.isAllButton ? "pressed" : "activated", m[P] = {
                                type: "tool",
                                def: h["default"],
                                configuration: {
                                    hAlign: "left",
                                    toolbarhdirection: 1,
                                    child: {}
                                }
                            }, m[P].configuration.child["allButton-" + g.getId() + "-" + p.getId() + "-0"] = {
                                type: "tool",
                                def: s["default"],
                                configuration: {
                                    state: n,
                                    width: T ? M : i.width,
                                    height: T ? D : i.height,
                                    scale: 1,
                                    text: "All",
                                    name: "interval",
                                    marginLeft: 0,
                                    marginRight: 0,
                                    hAlign: "left",
                                    hoveredState: "normal",
                                    symbolStrokeWidth: "2",
                                    strokeWidth: 0,
                                    fixedAtStart: !0,
                                    fixedAtEnd: !0,
                                    fill: "#00ff00",
                                    labelFill: "#00ff00",
                                    symbolFill: "#00ff00",
                                    listener: {
                                        "fc-click": u._handler
                                    },
                                    css: y
                                }
                            }, m
                        }, n.updateOnLimitChange = function() {
                            var e, t = this.getFromEnv("chart");
                            this.config.currentDomain = t.getFocusLimit(), e = this.config.currentDomain[1] - this.config.currentDomain[0], this.config.lastSelectedRange && this.config.lastSelectedRange !== e && !this.config.updatedThroughButton && (this.config.lastSelectedButtonConfig = void 0), this.config.lastSelectedRange = e, this.config.updatedThroughButton = !1, this.setData({}, !0)
                        }, t
                    }(o.SmartRenderer);
                t["default"] = v
            },
            824: function(e, t, n) {
                "use strict";
                var i = n(174);
                t.__esModule = !0, t["default"] = void 0;
                var a = i(n(197)),
                    r = i(n(194)),
                    o = n(290),
                    s = "hover",
                    l = "normal";
                var c = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).addEventListener("fc-mouseover", function() {
                            this.setData({
                                hoveredState: s
                            }, !0)
                        }.bind((0, a["default"])(n))), n.addEventListener("fc-mouseout", function() {
                            this.setData({
                                hoveredState: l
                            }, !0)
                        }.bind((0, a["default"])(n))), n
                    }(0, r["default"])(t, e);
                    var n = t.prototype;
                    return n.__setDefaultConfig = function() {
                        e.prototype.__setDefaultConfig.call(this);
                        var t = this.config;
                        t.containerInfo = {
                            id: "group",
                            label: "group",
                            isParent: !0
                        }, t.spaceNotHardCoded = !0, t.hoveredState = l
                    }, n.configureAttributes = function(e) {
                        void 0 === e && (e = {});
                        var t, n = this.config;
                        for (t in e) n[t] = e[t];
                        for (t in n.listener) this.addEventListener(t, n.listener[t]);
                        this.setState("visible", !0 !== n.isHidden), n.symbolName = n.name
                    }, n.getHoveredState = function() {
                        return this.config.hoveredState
                    }, n.draw = function() {
                        var e = this.config,
                            t = e.x + e.width / 2,
                            n = e.y + e.height / 2,
                            i = e.width,
                            a = e.height,
                            r = e.css,
                            o = this.getCurrentState(),
                            s = this.getHoveredState(),
                            l = r[o].config[s],
                            c = r[o].config[s + "Background"];
                        this.getState("visible") && (this.addGraphicalElement({
                            el: "group",
                            attr: {
                                name: "srs-tool"
                            },
                            container: e.containerInfo,
                            component: this,
                            id: "group",
                            label: "group"
                        }), this.addGraphicalElement({
                            el: "rect",
                            attr: {
                                x: t - i / 2 - 2,
                                y: n - a / 2 - 2,
                                width: i + 4,
                                height: a + 4,
                                opacity: c.opacity
                            },
                            css: c,
                            container: {
                                id: "group",
                                label: "group"
                            },
                            component: this,
                            id: "rect",
                            label: "rect"
                        }, !0), this.addGraphicalElement({
                            el: "text",
                            attr: {
                                x: t,
                                y: n,
                                text: e.text,
                                opacity: l.opacity
                            },
                            container: {
                                id: "group",
                                label: "group"
                            },
                            css: l,
                            component: this,
                            id: "text",
                            label: "text"
                        }, !0), "pressed" === o && this.addGraphicalElement({
                            el: "path",
                            attr: {
                                path: "M" + (t - i / 2 - 1) + ", " + (n + a / 2 + 1.5) + " h " + (i + 1),
                                opacity: l.opacity
                            },
                            container: {
                                id: "group",
                                label: "group"
                            },
                            css: {
                                stroke: l.fill,
                                "stroke-linecap": "round",
                                "stroke-opacity": l["fill-opacity"]
                            },
                            component: this,
                            id: "path",
                            label: "path"
                        }, !0))
                    }, t
                }(o.Tool);
                t["default"] = c
            }
        }
    ])
});
//# sourceMappingURL=http://localhost:3052/3.14.0-sr.1/map/eval/fusioncharts.timeseries.js.map