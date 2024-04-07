(() => {
  "use strict";
  var e = {
      208: (e, n, t) => {
        t.d(n, { A: () => c });
        var r = t(601),
          a = t.n(r),
          i = t(314),
          o = t.n(i)()(a());
        o.push([
          e.id,
          '* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Nunito", sans-serif;\n}\n.radios {\n  display: flex;\n}\nheader {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\ninput[type="radio"] {\n  appearance: none;\n}\n.active{\n    background-color: cyan;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgb(46, 140, 142);\n  background: linear-gradient(\n    180deg,\n    rgba(46, 140, 142, 1) 0%,\n    rgba(38, 107, 129, 1) 100%\n  );\n  height: 100vh;\n}\n.details > img {\n  width: 70px;\n}\n#card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.cardName {\n  font-size: 2.5em;\n}\n.cardDetails {\n  font-size: 2em;\n}\n.cardHeader {\n  gap: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.details {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 1.5em;\n  padding: 20px;\n}\n.data {\n  display: grid;\n  grid-template: 1fr 1fr 1fr/1fr 1fr 1fr;\n  gap: 50px;\n}\n.position {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.position > p {\n  padding: 6px;\n}\n',
          "",
        ]);
        const c = o;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, a, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var o = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (o[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var d = [].concat(e[l]);
                (r && o[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  a &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = a))
                      : (d[4] = "".concat(a))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var i = {}, o = [], c = 0; c < e.length; c++) {
            var s = e[c],
              l = r.base ? s[0] + r.base : s[0],
              d = i[l] || 0,
              u = "".concat(l, " ").concat(d);
            i[l] = d + 1;
            var p = t(u),
              m = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(m);
            else {
              var f = a(m, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: u, updater: f, references: 1 });
            }
            o.push(u);
          }
          return o;
        }
        function a(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var i = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var o = 0; o < i.length; o++) {
              var c = t(i[o]);
              n[c].references--;
            }
            for (var s = r(e, a), l = 0; l < i.length; l++) {
              var d = t(i[l]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            i = s;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var a = void 0 !== t.layer;
                a &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  a && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var i = (n[r] = { id: r, exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      async function e(e, n) {
        try {
          const t = await (function (e, n) {
              return fetch(
                `https://api.weatherapi.com/v1/current.json?key=5589a5b1b0f545c1a04164843240304&q=${e}`,
              )
                .then((e) => {
                  if (!e.ok) throw new Error("Failed to fetch weather data");
                  return e.json();
                })
                .then((e) => {
                  const t = e.current;
                  return {
                    temperature: n ? t.temp_f : t.temp_c,
                    feelsLike: n ? t.feelslike_f : t.feelslike_c,
                    precipation: n ? t.precip_in : t.precip_mm,
                    humidity: t.humidity,
                    icon: t.condition.icon,
                    windSpeed: n ? t.wind_mph : t.wind_kph,
                    pressure: n ? t.pressure_in : t.pressure_mb,
                    visibility: n ? t.vis_miles : t.vis_km,
                    cloudiness: t.cloud,
                    uv: t.uv,
                    details: e.location,
                  };
                });
            })(e, n),
            r = t.details,
            a = new Date(1e3 * r.localtime_epoch),
            i = document.getElementById("card"),
            o = document.createElement("div");
          (o.className = "details"), (i.innerHTML = "");
          const c = document.createElement("div");
          c.className = "cardHeader";
          const s = document.createElement("p");
          (s.className = "cardName"), (s.innerText = `${r.name}, ${r.country}`);
          const l = document.createElement("p");
          (l.className = "cardDetails"),
            (l.innerText = `${a.toLocaleString("default", { weekday: "long" })} ${a.getDate()} ${a.toLocaleString("default", { month: "long" })} ${a.getFullYear()} | ${a.getHours()}:${a.getMinutes()}`),
            c.appendChild(s),
            c.appendChild(l),
            i.appendChild(c);
          const d = document.createElement("img");
          (d.src = t.icon), o.appendChild(d);
          const u = document.createElement("div");
          (u.className = "data"),
            Object.entries(t).forEach(([e, t]) => {
              if ("icon" !== e && "details" !== e) {
                const r = (function (e, n) {
                    let t, r;
                    switch (n) {
                      case "temperature":
                        (t = e ? "°F" : "°C"), (r = n);
                        break;
                      case "feelsLike":
                        (t = e ? "°F" : "°C"), (r = "feels like");
                        break;
                      case "cloudiness":
                      case "humidity":
                        (t = "%"), (r = n);
                        break;
                      case "precipation":
                        (t = e ? "in" : "mm"), (r = n);
                        break;
                      case "windSpeed":
                        (t = e ? "mph" : "kph"), (r = "wind speed");
                        break;
                      case "pressure":
                        (t = e ? "in" : "mb"), (r = n);
                        break;
                      case "visibility":
                        (t = e ? "miles" : "km"), (r = n);
                        break;
                      case "uv":
                        (t = ""), (r = n);
                    }
                    return [r, t];
                  })(n, e),
                  a = r[0],
                  i = r[1],
                  o = document.createElement("div");
                o.className = "position";
                const c = document.createElement("p");
                c.innerText = a;
                const s = document.createElement("p");
                (s.innerText = t + i),
                  o.appendChild(c),
                  o.appendChild(s),
                  u.appendChild(o);
              }
            }),
            o.appendChild(u),
            i.appendChild(o);
        } catch (e) {
          console.error("Error creating card:", e);
        }
      }
      var n = t(72),
        r = t.n(n),
        a = t(825),
        i = t.n(a),
        o = t(659),
        c = t.n(o),
        s = t(56),
        l = t.n(s),
        d = t(540),
        u = t.n(d),
        p = t(113),
        m = t.n(p),
        f = t(208),
        h = {};
      (h.styleTagTransform = m()),
        (h.setAttributes = l()),
        (h.insert = c().bind(null, "head")),
        (h.domAPI = i()),
        (h.insertStyleElement = u()),
        r()(f.A, h),
        f.A && f.A.locals && f.A.locals;
      let v = !1;
      function y() {
        e(document.getElementById("city").value, v);
      }
      e("phoenix", v),
        document
          .getElementById("selectCity")
          .addEventListener("submit", (e) => {
            y(), e.preventDefault();
          }),
        document.querySelectorAll(".selectButton").forEach((e) => {
          const n = document.getElementById("selectUsa"),
            t = document.getElementById("selectWorld");
          e.addEventListener("click", function () {
            this === n
              ? ((this.className = "selectButton active"),
                (t.className = "selectButton"),
                (v = !0))
              : ((this.className = "selectButton active"),
                (n.className = "selectButton"),
                (v = !1)),
              y();
          });
        });
    })();
})();
