var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function _createForOfIteratorHelper(r, t) {
    var n = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!n) {
        if (Array.isArray(r) || (n = _unsupportedIterableToArray(r)) || t && r && "number" == typeof r.length) {
            n && (r = n);
            var e = 0, o = function r() {
            };
            return {
                s: o, n: function t() {
                    return e >= r.length ? {done: !0} : {done: !1, value: r[e++]}
                }, e: function r(t) {
                    throw t
                }, f: o
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var a = !0, u = !1, i;
    return {
        s: function t() {
            n = n.call(r)
        }, n: function r() {
            var t = n.next();
            return a = t.done, t
        }, e: function r(t) {
            u = !0, i = t
        }, f: function r() {
            try {
                a || null == n.return || n.return()
            } finally {
                if (u) throw i
            }
        }
    }
}

function _unsupportedIterableToArray(r, t) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, t);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        return "Object" === n && r.constructor && (n = r.constructor.name), "Map" === n || "Set" === n ? Array.from(r) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(r, t) : void 0
    }
}

function _arrayLikeToArray(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n];
    return e
}

!function (r, t) {
    try {
        var n = function t(n) {
                if (!n || "string" != typeof n) return !1;
                var o = e(n);
                if (!V.includes(r.btoa(o))) return !1;
                if (!I.test(n)) return !1;
                var u = w("eid:rbox:common-eid-keywords");
                if (a(u, n)) return !1;
                var i = L("eid:tfa:common-eid-keywords", "");
                return !a(i, n)
            }, e = function r(t) {
                return t.slice(t.indexOf("@") + 1)
            }, o = function r() {
                if (null !== _) return _;
                try {
                    (_ = window.localStorage).setItem("~~~", "!"), _.removeItem("~~~")
                } catch (r) {
                    _ = null
                }
                return _
            }, a = function r(t, n) {
                return !(!n || !t || "string" != typeof t) && t.split(",").some(function (r) {
                    return n.includes(r)
                });
                var e
            }, u = function t() {
                return r._trcIsUTactive ? U : null
            }, i = function t() {
                r._trcIsUTactive && (U = [])
            }, c = function r() {
                return o() ? Object.keys(_) : []
            }, f = function r(t) {
                return t && "string" == typeof t ? t.match(Q) : null
            }, l = function r() {
                var t, n = _createForOfIteratorHelper(c()), e;
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var o = e.value, a = _[o];
                        if ("string" == typeof a) {
                            var u = f(a);
                            u && u.forEach(function (r) {
                                b(r.toLowerCase())
                            })
                        }
                    }
                } catch (r) {
                    n.e(r)
                } finally {
                    n.f()
                }
            }, d = function r(t) {
                return !U.includes(t) && (U.push(t), !0)
            }, b = function r(t) {
                if (n(t)) {
                    W(t, function (r) {
                        if (d(r)) {
                            var n = m(t);
                            p(r, n)
                        }
                    });
                    var e = t.replace(T, "");
                    t !== e && W(e, function (r) {
                        if (d(r)) {
                            var t = m(e);
                            p(r, t)
                        }
                    })
                }
            }, m = function t(n) {
                var e;
                return (L("eid:send-eid-encoded", !0) || w("eid:send-eid-encoded")) && s() && r.btoa ? r.btoa(n) : null
            }, s = function r() {
                return 4444 === Math.floor(1e5 * Math.random())
            }, y = function r() {
                try {
                    return _ && _["taboola global:user-id"]
                } catch (r) {
                    return null
                }
            }, v = function t() {
                var n = r.TFASC && r.TFASC.tfaUserId && "function" == typeof r.TFASC.tfaUserId.getUserId ? r.TFASC.tfaUserId.getUserId() : null,
                    e = r.TRC.pageManager && "function" == typeof r.TRC.pageManager.getUserId ? r.TRC.pageManager.getUserId() : null,
                    o = y();
                return n || e || o
            }, p = function r(t, n) {
                var e = v();
                if (t && e) {
                    var o = [];
                    h("uils", e, o), h(Y, Z(t), o), n && h(A, n, o);
                    var a = new Image, u;
                    return (L("tfa:add-referrer-policy-when-firing-pixel", !0) || w("rbox:add-referrer-policy-when-firing-pixel")) && (a.referrerPolicy = "no-referrer-when-downgrade"), a.src = "".concat(C(), "//web.archive.org/web/20250902070952/https://trc.taboola.com/sg/tfa-eid/1/um/?").concat(o.join("&")), a
                }
            }, Z = function r(t) {
                try {
                    for (var n = t.slice(0, j) + S + t.slice(j), e = "", o = 0; o < n.length; o++) e += String.fromCharCode(n.charCodeAt(o) + N);
                    return e
                } catch (r) {
                    return t
                }
            }, g = function r(t) {
                return Array.from(new Uint8Array(t), function (r) {
                    return r.toString(16).padStart(2, "0")
                }).join("")
            }, W = function r(t, n) {
                var e = (new TextEncoder).encode(t), o = R.subtle.digest("SHA-256", e);
                o instanceof Promise ? o.then(g).then(n) : o instanceof CryptoOperation && n(g(o.result))
            }, h = function r(t, n, e) {
                if (e && n && t) {
                    var o = encodeURIComponent(t), a = encodeURIComponent(n);
                    e.push("".concat(o, "=").concat(a))
                }
            }, L = function t(n, e) {
                return r._tfa && r._tfa.config && "function" == typeof r._tfa.config.safeGet ? r._tfa.config.safeGet(n, e) : null
            }, w = function r(t) {
                var n;
                return (TRCImpl ? TRCImpl.global : {})[t]
            }, C = function r() {
                return G
            }, F = function n() {
                X || "function" != typeof TextEncoder ? X = !0 : ("complete" === t.readyState ? l() : r.addEventListener("load", function () {
                    return l()
                }), X = !0)
            }, Y = "eflp", A = "deit", G = "https:", Q = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi,
            I = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            S = "RUl2QU54VNERVSF", j = 17, N = 5, T = /\+(.*?)(?=@)/,
            V = ["Z21haWwuY29t", "b3V0bG9vay5jb20=", "aG90bWFpbC5jb20=", "bGl2ZS5jb20=", "bXNuLmNvbQ==", "aWNsb3VkLmNvbQ==", "bWUuY29t", "bWFjLmNvbQ==", "eWFob28uY29t", "eW1haWwuY29t", "cm9ja2V0bWFpbC5jb20=", "YW9sLmNvbQ==", "em9oby5jb20=", "Y29tY2FzdC5uZXQ=", "dmVyaXpvbi5uZXQ=", "YmVsbC5uZXQ=", "YXR0Lm5ldA==", "c2JjZ2xvYmFsLm5ldA==", "cm9nZXJzLmNvbQ==", "aHVzaG1haWwuY29t", "MTYzLmNvbQ==", "MTI2LmNvbQ==", "c2luYS5jb20=", "YWxpeXVuLmNvbQ==", "bWFpbC5ydQ==", "eWFuZGV4LnJ1", "eWFuZGV4LmNvbQ==", "Z214LmNvbQ==", "Z214LmRl", "Z214Lm5ldA==", "d2ViLmRl", "b3JhbmdlLmZy", "bGFwb3N0ZS5uZXQ=", "bGliZXJvLml0", "dmlyZ2lsaW8uaXQ=", "c2V6bmFtLmN6", "d3AucGw=", "b25ldC5wbA==", "bWFpbGJveC5vcmc=", "dHV0YW5vdGEuY29t", "cG9zdGVvLmRl", "dGVsZW5ldC5iZQ==", "Y2VudHJ1bS5jeg==", "ZW1haWwuY3o=", "dC1vbmxpbmUuZGU=", "ZnJlZW5ldC5kZQ==", "MWFuZDEuY29t", "aW9ub3MuY29t", "bWFpbC5kZQ==", "ZnJlZS5mcg==", "c2ZyLmZy", "dGltLml0", "dGFsa3RhbGsubmV0", "YnRpbnRlcm5ldC5jb20=", "c2t5LmNvbQ==", "d2FsbGEuY28uaWw=", "eWFob28uY28uanA=", "bmF2ZXIuY29t", "ZGF1bS5uZXQ=", "ZG9jb21vLm5lLmpw", "cHJvdG9uLm1l", "cHJvdG9ubWFpbC5jb20=", "ZmFzdG1haWwuY29t", "ZmFzdG1haWwuZm0=", "bWFpbC5jb20=", "dW9sLmNvbS5icg==", "ZmliZXJ0ZWwuY29tLmFy", "dGVsa29tc2EubmV0", "c3RjLmNvbS5zYQ==", "YmlncG9uZC5jb20=", "b3B0dXNuZXQuY29tLmF1", "eHRyYS5jby5ueg==", "YWZyaWNhb25saW5lLmNvLmtl", "ZXRoaW9uZXQuZXQ=", "cmVkaWZmbWFpbC5jb20="],
            R = window.crypto || window.msCrypto, X = !1, U = [], _ = null;
        F()
    } catch (r) {
        __trcError("Error running eidls - tag loader", r)
    }
}(window, document);

}
/*
     FILE ARCHIVED ON 07:09:52 Sep 02, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:59:12 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.585
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 18.512
  LoadShardBlock: 349.665 (6)
  PetaboxLoader3.datanode: 328.335 (7)
  load_resource: 127.976
  PetaboxLoader3.resolve: 101.509
*/