(function () {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) s(d);
  new MutationObserver((d) => {
    for (const y of d)
      if (y.type === "childList")
        for (const g of y.addedNodes)
          g.tagName === "LINK" && g.rel === "modulepreload" && s(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(d) {
    const y = {};
    return (
      d.integrity && (y.integrity = d.integrity),
      d.referrerPolicy && (y.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (y.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (y.credentials = "omit")
        : (y.credentials = "same-origin"),
      y
    );
  }
  function s(d) {
    if (d.ep) return;
    d.ep = !0;
    const y = o(d);
    fetch(d.href, y);
  }
})();
function uh(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Of = { exports: {} },
  Un = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd;
function Py() {
  if (qd) return Un;
  qd = 1;
  var i = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.fragment");
  function o(s, d, y) {
    var g = null;
    if (
      (y !== void 0 && (g = "" + y),
      d.key !== void 0 && (g = "" + d.key),
      "key" in d)
    ) {
      y = {};
      for (var _ in d) _ !== "key" && (y[_] = d[_]);
    } else y = d;
    return (
      (d = y.ref),
      { $$typeof: i, type: s, key: g, ref: d !== void 0 ? d : null, props: y }
    );
  }
  return (Un.Fragment = f), (Un.jsx = o), (Un.jsxs = o), Un;
}
var Bd;
function Iy() {
  return Bd || ((Bd = 1), (Of.exports = Py())), Of.exports;
}
var C = Iy(),
  Rf = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function tm() {
  if (Yd) return I;
  Yd = 1;
  var i = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    y = Symbol.for("react.consumer"),
    g = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    H = Symbol.iterator;
  function X(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (H && m[H]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var W = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    Q = {};
  function Y(m, x, G) {
    (this.props = m),
      (this.context = x),
      (this.refs = Q),
      (this.updater = G || W);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (m, x) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, m, x, "setState");
    }),
    (Y.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    });
  function st() {}
  st.prototype = Y.prototype;
  function it(m, x, G) {
    (this.props = m),
      (this.context = x),
      (this.refs = Q),
      (this.updater = G || W);
  }
  var tt = (it.prototype = new st());
  (tt.constructor = it), j(tt, Y.prototype), (tt.isPureReactComponent = !0);
  var rt = Array.isArray,
    Z = { H: null, A: null, T: null, S: null, V: null },
    gt = Object.prototype.hasOwnProperty;
  function Et(m, x, G, q, V, ct) {
    return (
      (G = ct.ref),
      { $$typeof: i, type: m, key: x, ref: G !== void 0 ? G : null, props: ct }
    );
  }
  function Ht(m, x) {
    return Et(m.type, x, void 0, void 0, void 0, m.props);
  }
  function le(m) {
    return typeof m == "object" && m !== null && m.$$typeof === i;
  }
  function Zl(m) {
    var x = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (G) {
        return x[G];
      })
    );
  }
  var He = /\/+/g;
  function Qt(m, x) {
    return typeof m == "object" && m !== null && m.key != null
      ? Zl("" + m.key)
      : x.toString(36);
  }
  function El() {}
  function Tl(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (
          (typeof m.status == "string"
            ? m.then(El, El)
            : ((m.status = "pending"),
              m.then(
                function (x) {
                  m.status === "pending" &&
                    ((m.status = "fulfilled"), (m.value = x));
                },
                function (x) {
                  m.status === "pending" &&
                    ((m.status = "rejected"), (m.reason = x));
                }
              )),
          m.status)
        ) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function wt(m, x, G, q, V) {
    var ct = typeof m;
    (ct === "undefined" || ct === "boolean") && (m = null);
    var F = !1;
    if (m === null) F = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          F = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case i:
            case f:
              F = !0;
              break;
            case O:
              return (F = m._init), wt(F(m._payload), x, G, q, V);
          }
      }
    if (F)
      return (
        (V = V(m)),
        (F = q === "" ? "." + Qt(m, 0) : q),
        rt(V)
          ? ((G = ""),
            F != null && (G = F.replace(He, "$&/") + "/"),
            wt(V, x, G, "", function (We) {
              return We;
            }))
          : V != null &&
            (le(V) &&
              (V = Ht(
                V,
                G +
                  (V.key == null || (m && m.key === V.key)
                    ? ""
                    : ("" + V.key).replace(He, "$&/") + "/") +
                  F
              )),
            x.push(V)),
        1
      );
    F = 0;
    var ae = q === "" ? "." : q + ":";
    if (rt(m))
      for (var Tt = 0; Tt < m.length; Tt++)
        (q = m[Tt]), (ct = ae + Qt(q, Tt)), (F += wt(q, x, G, ct, V));
    else if (((Tt = X(m)), typeof Tt == "function"))
      for (m = Tt.call(m), Tt = 0; !(q = m.next()).done; )
        (q = q.value), (ct = ae + Qt(q, Tt++)), (F += wt(q, x, G, ct, V));
    else if (ct === "object") {
      if (typeof m.then == "function") return wt(Tl(m), x, G, q, V);
      throw (
        ((x = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (x === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : x) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return F;
  }
  function N(m, x, G) {
    if (m == null) return m;
    var q = [],
      V = 0;
    return (
      wt(m, q, "", "", function (ct) {
        return x.call(G, ct, V++);
      }),
      q
    );
  }
  function B(m) {
    if (m._status === -1) {
      var x = m._result;
      (x = x()),
        x.then(
          function (G) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = G));
          },
          function (G) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = G));
          }
        ),
        m._status === -1 && ((m._status = 0), (m._result = x));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (m) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var x = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof m == "object" &&
                m !== null &&
                typeof m.message == "string"
                  ? String(m.message)
                  : String(m),
              error: m,
            });
            if (!window.dispatchEvent(x)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", m);
            return;
          }
          console.error(m);
        };
  function St() {}
  return (
    (I.Children = {
      map: N,
      forEach: function (m, x, G) {
        N(
          m,
          function () {
            x.apply(this, arguments);
          },
          G
        );
      },
      count: function (m) {
        var x = 0;
        return (
          N(m, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (m) {
        return (
          N(m, function (x) {
            return x;
          }) || []
        );
      },
      only: function (m) {
        if (!le(m))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return m;
      },
    }),
    (I.Component = Y),
    (I.Fragment = o),
    (I.Profiler = d),
    (I.PureComponent = it),
    (I.StrictMode = s),
    (I.Suspense = D),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return Z.H.useMemoCache(m);
      },
    }),
    (I.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (I.cloneElement = function (m, x, G) {
      if (m == null)
        throw Error(
          "The argument must be a React element, but you passed " + m + "."
        );
      var q = j({}, m.props),
        V = m.key,
        ct = void 0;
      if (x != null)
        for (F in (x.ref !== void 0 && (ct = void 0),
        x.key !== void 0 && (V = "" + x.key),
        x))
          !gt.call(x, F) ||
            F === "key" ||
            F === "__self" ||
            F === "__source" ||
            (F === "ref" && x.ref === void 0) ||
            (q[F] = x[F]);
      var F = arguments.length - 2;
      if (F === 1) q.children = G;
      else if (1 < F) {
        for (var ae = Array(F), Tt = 0; Tt < F; Tt++)
          ae[Tt] = arguments[Tt + 2];
        q.children = ae;
      }
      return Et(m.type, V, void 0, void 0, ct, q);
    }),
    (I.createContext = function (m) {
      return (
        (m = {
          $$typeof: g,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: y, _context: m }),
        m
      );
    }),
    (I.createElement = function (m, x, G) {
      var q,
        V = {},
        ct = null;
      if (x != null)
        for (q in (x.key !== void 0 && (ct = "" + x.key), x))
          gt.call(x, q) &&
            q !== "key" &&
            q !== "__self" &&
            q !== "__source" &&
            (V[q] = x[q]);
      var F = arguments.length - 2;
      if (F === 1) V.children = G;
      else if (1 < F) {
        for (var ae = Array(F), Tt = 0; Tt < F; Tt++)
          ae[Tt] = arguments[Tt + 2];
        V.children = ae;
      }
      if (m && m.defaultProps)
        for (q in ((F = m.defaultProps), F)) V[q] === void 0 && (V[q] = F[q]);
      return Et(m, ct, void 0, void 0, null, V);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (m) {
      return { $$typeof: _, render: m };
    }),
    (I.isValidElement = le),
    (I.lazy = function (m) {
      return { $$typeof: O, _payload: { _status: -1, _result: m }, _init: B };
    }),
    (I.memo = function (m, x) {
      return { $$typeof: S, type: m, compare: x === void 0 ? null : x };
    }),
    (I.startTransition = function (m) {
      var x = Z.T,
        G = {};
      Z.T = G;
      try {
        var q = m(),
          V = Z.S;
        V !== null && V(G, q),
          typeof q == "object" &&
            q !== null &&
            typeof q.then == "function" &&
            q.then(St, k);
      } catch (ct) {
        k(ct);
      } finally {
        Z.T = x;
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (I.use = function (m) {
      return Z.H.use(m);
    }),
    (I.useActionState = function (m, x, G) {
      return Z.H.useActionState(m, x, G);
    }),
    (I.useCallback = function (m, x) {
      return Z.H.useCallback(m, x);
    }),
    (I.useContext = function (m) {
      return Z.H.useContext(m);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (m, x) {
      return Z.H.useDeferredValue(m, x);
    }),
    (I.useEffect = function (m, x, G) {
      var q = Z.H;
      if (typeof G == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return q.useEffect(m, x);
    }),
    (I.useId = function () {
      return Z.H.useId();
    }),
    (I.useImperativeHandle = function (m, x, G) {
      return Z.H.useImperativeHandle(m, x, G);
    }),
    (I.useInsertionEffect = function (m, x) {
      return Z.H.useInsertionEffect(m, x);
    }),
    (I.useLayoutEffect = function (m, x) {
      return Z.H.useLayoutEffect(m, x);
    }),
    (I.useMemo = function (m, x) {
      return Z.H.useMemo(m, x);
    }),
    (I.useOptimistic = function (m, x) {
      return Z.H.useOptimistic(m, x);
    }),
    (I.useReducer = function (m, x, G) {
      return Z.H.useReducer(m, x, G);
    }),
    (I.useRef = function (m) {
      return Z.H.useRef(m);
    }),
    (I.useState = function (m) {
      return Z.H.useState(m);
    }),
    (I.useSyncExternalStore = function (m, x, G) {
      return Z.H.useSyncExternalStore(m, x, G);
    }),
    (I.useTransition = function () {
      return Z.H.useTransition();
    }),
    (I.version = "19.1.0"),
    I
  );
}
var Gd;
function Gf() {
  return Gd || ((Gd = 1), (Rf.exports = tm())), Rf.exports;
}
var $t = Gf();
const em = uh($t);
var _f = { exports: {} },
  Mn = {},
  Df = { exports: {} },
  zf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd;
function lm() {
  return (
    Xd ||
      ((Xd = 1),
      (function (i) {
        function f(N, B) {
          var k = N.length;
          N.push(B);
          t: for (; 0 < k; ) {
            var St = (k - 1) >>> 1,
              m = N[St];
            if (0 < d(m, B)) (N[St] = B), (N[k] = m), (k = St);
            else break t;
          }
        }
        function o(N) {
          return N.length === 0 ? null : N[0];
        }
        function s(N) {
          if (N.length === 0) return null;
          var B = N[0],
            k = N.pop();
          if (k !== B) {
            N[0] = k;
            t: for (var St = 0, m = N.length, x = m >>> 1; St < x; ) {
              var G = 2 * (St + 1) - 1,
                q = N[G],
                V = G + 1,
                ct = N[V];
              if (0 > d(q, k))
                V < m && 0 > d(ct, q)
                  ? ((N[St] = ct), (N[V] = k), (St = V))
                  : ((N[St] = q), (N[G] = k), (St = G));
              else if (V < m && 0 > d(ct, k))
                (N[St] = ct), (N[V] = k), (St = V);
              else break t;
            }
          }
          return B;
        }
        function d(N, B) {
          var k = N.sortIndex - B.sortIndex;
          return k !== 0 ? k : N.id - B.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var y = performance;
          i.unstable_now = function () {
            return y.now();
          };
        } else {
          var g = Date,
            _ = g.now();
          i.unstable_now = function () {
            return g.now() - _;
          };
        }
        var D = [],
          S = [],
          O = 1,
          H = null,
          X = 3,
          W = !1,
          j = !1,
          Q = !1,
          Y = !1,
          st = typeof setTimeout == "function" ? setTimeout : null,
          it = typeof clearTimeout == "function" ? clearTimeout : null,
          tt = typeof setImmediate < "u" ? setImmediate : null;
        function rt(N) {
          for (var B = o(S); B !== null; ) {
            if (B.callback === null) s(S);
            else if (B.startTime <= N)
              s(S), (B.sortIndex = B.expirationTime), f(D, B);
            else break;
            B = o(S);
          }
        }
        function Z(N) {
          if (((Q = !1), rt(N), !j))
            if (o(D) !== null) (j = !0), gt || ((gt = !0), Qt());
            else {
              var B = o(S);
              B !== null && wt(Z, B.startTime - N);
            }
        }
        var gt = !1,
          Et = -1,
          Ht = 5,
          le = -1;
        function Zl() {
          return Y ? !0 : !(i.unstable_now() - le < Ht);
        }
        function He() {
          if (((Y = !1), gt)) {
            var N = i.unstable_now();
            le = N;
            var B = !0;
            try {
              t: {
                (j = !1), Q && ((Q = !1), it(Et), (Et = -1)), (W = !0);
                var k = X;
                try {
                  e: {
                    for (
                      rt(N), H = o(D);
                      H !== null && !(H.expirationTime > N && Zl());

                    ) {
                      var St = H.callback;
                      if (typeof St == "function") {
                        (H.callback = null), (X = H.priorityLevel);
                        var m = St(H.expirationTime <= N);
                        if (((N = i.unstable_now()), typeof m == "function")) {
                          (H.callback = m), rt(N), (B = !0);
                          break e;
                        }
                        H === o(D) && s(D), rt(N);
                      } else s(D);
                      H = o(D);
                    }
                    if (H !== null) B = !0;
                    else {
                      var x = o(S);
                      x !== null && wt(Z, x.startTime - N), (B = !1);
                    }
                  }
                  break t;
                } finally {
                  (H = null), (X = k), (W = !1);
                }
                B = void 0;
              }
            } finally {
              B ? Qt() : (gt = !1);
            }
          }
        }
        var Qt;
        if (typeof tt == "function")
          Qt = function () {
            tt(He);
          };
        else if (typeof MessageChannel < "u") {
          var El = new MessageChannel(),
            Tl = El.port2;
          (El.port1.onmessage = He),
            (Qt = function () {
              Tl.postMessage(null);
            });
        } else
          Qt = function () {
            st(He, 0);
          };
        function wt(N, B) {
          Et = st(function () {
            N(i.unstable_now());
          }, B);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (i.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ht = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return X;
          }),
          (i.unstable_next = function (N) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = X;
            }
            var k = X;
            X = B;
            try {
              return N();
            } finally {
              X = k;
            }
          }),
          (i.unstable_requestPaint = function () {
            Y = !0;
          }),
          (i.unstable_runWithPriority = function (N, B) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var k = X;
            X = N;
            try {
              return B();
            } finally {
              X = k;
            }
          }),
          (i.unstable_scheduleCallback = function (N, B, k) {
            var St = i.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? St + k : St))
                : (k = St),
              N)
            ) {
              case 1:
                var m = -1;
                break;
              case 2:
                m = 250;
                break;
              case 5:
                m = 1073741823;
                break;
              case 4:
                m = 1e4;
                break;
              default:
                m = 5e3;
            }
            return (
              (m = k + m),
              (N = {
                id: O++,
                callback: B,
                priorityLevel: N,
                startTime: k,
                expirationTime: m,
                sortIndex: -1,
              }),
              k > St
                ? ((N.sortIndex = k),
                  f(S, N),
                  o(D) === null &&
                    N === o(S) &&
                    (Q ? (it(Et), (Et = -1)) : (Q = !0), wt(Z, k - St)))
                : ((N.sortIndex = m),
                  f(D, N),
                  j || W || ((j = !0), gt || ((gt = !0), Qt()))),
              N
            );
          }),
          (i.unstable_shouldYield = Zl),
          (i.unstable_wrapCallback = function (N) {
            var B = X;
            return function () {
              var k = X;
              X = B;
              try {
                return N.apply(this, arguments);
              } finally {
                X = k;
              }
            };
          });
      })(zf)),
    zf
  );
}
var Ld;
function am() {
  return Ld || ((Ld = 1), (Df.exports = lm())), Df.exports;
}
var Nf = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qd;
function nm() {
  if (Qd) return Kt;
  Qd = 1;
  var i = Gf();
  function f(D) {
    var S = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        S += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      S +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var s = {
      d: {
        f: o,
        r: function () {
          throw Error(f(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function y(D, S, O) {
    var H =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: H == null ? null : "" + H,
      children: D,
      containerInfo: S,
      implementation: O,
    };
  }
  var g = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(D, S) {
    if (D === "font") return "";
    if (typeof S == "string") return S === "use-credentials" ? S : "";
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Kt.createPortal = function (D, S) {
      var O =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11))
        throw Error(f(299));
      return y(D, S, null, O);
    }),
    (Kt.flushSync = function (D) {
      var S = g.T,
        O = s.p;
      try {
        if (((g.T = null), (s.p = 2), D)) return D();
      } finally {
        (g.T = S), (s.p = O), s.d.f();
      }
    }),
    (Kt.preconnect = function (D, S) {
      typeof D == "string" &&
        (S
          ? ((S = S.crossOrigin),
            (S =
              typeof S == "string"
                ? S === "use-credentials"
                  ? S
                  : ""
                : void 0))
          : (S = null),
        s.d.C(D, S));
    }),
    (Kt.prefetchDNS = function (D) {
      typeof D == "string" && s.d.D(D);
    }),
    (Kt.preinit = function (D, S) {
      if (typeof D == "string" && S && typeof S.as == "string") {
        var O = S.as,
          H = _(O, S.crossOrigin),
          X = typeof S.integrity == "string" ? S.integrity : void 0,
          W = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
        O === "style"
          ? s.d.S(D, typeof S.precedence == "string" ? S.precedence : void 0, {
              crossOrigin: H,
              integrity: X,
              fetchPriority: W,
            })
          : O === "script" &&
            s.d.X(D, {
              crossOrigin: H,
              integrity: X,
              fetchPriority: W,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
      }
    }),
    (Kt.preinitModule = function (D, S) {
      if (typeof D == "string")
        if (typeof S == "object" && S !== null) {
          if (S.as == null || S.as === "script") {
            var O = _(S.as, S.crossOrigin);
            s.d.M(D, {
              crossOrigin: O,
              integrity: typeof S.integrity == "string" ? S.integrity : void 0,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
          }
        } else S == null && s.d.M(D);
    }),
    (Kt.preload = function (D, S) {
      if (
        typeof D == "string" &&
        typeof S == "object" &&
        S !== null &&
        typeof S.as == "string"
      ) {
        var O = S.as,
          H = _(O, S.crossOrigin);
        s.d.L(D, O, {
          crossOrigin: H,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          type: typeof S.type == "string" ? S.type : void 0,
          fetchPriority:
            typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
          referrerPolicy:
            typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
          imageSrcSet:
            typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
          imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
          media: typeof S.media == "string" ? S.media : void 0,
        });
      }
    }),
    (Kt.preloadModule = function (D, S) {
      if (typeof D == "string")
        if (S) {
          var O = _(S.as, S.crossOrigin);
          s.d.m(D, {
            as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
            crossOrigin: O,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          });
        } else s.d.m(D);
    }),
    (Kt.requestFormReset = function (D) {
      s.d.r(D);
    }),
    (Kt.unstable_batchedUpdates = function (D, S) {
      return D(S);
    }),
    (Kt.useFormState = function (D, S, O) {
      return g.H.useFormState(D, S, O);
    }),
    (Kt.useFormStatus = function () {
      return g.H.useHostTransitionStatus();
    }),
    (Kt.version = "19.1.0"),
    Kt
  );
}
var wd;
function um() {
  if (wd) return Nf.exports;
  wd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), (Nf.exports = nm()), Nf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function im() {
  if (Zd) return Mn;
  Zd = 1;
  var i = am(),
    f = Gf(),
    o = um();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function y(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function g(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function _(t) {
    if (y(t) !== t) throw Error(s(188));
  }
  function D(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = y(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return _(n), t;
          if (u === a) return _(n), e;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var c = !1, r = n.child; r; ) {
          if (r === l) {
            (c = !0), (l = n), (a = u);
            break;
          }
          if (r === a) {
            (c = !0), (a = n), (l = u);
            break;
          }
          r = r.sibling;
        }
        if (!c) {
          for (r = u.child; r; ) {
            if (r === l) {
              (c = !0), (l = u), (a = n);
              break;
            }
            if (r === a) {
              (c = !0), (a = u), (l = n);
              break;
            }
            r = r.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (l.alternate !== a) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = S(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var O = Object.assign,
    H = Symbol.for("react.element"),
    X = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    st = Symbol.for("react.provider"),
    it = Symbol.for("react.consumer"),
    tt = Symbol.for("react.context"),
    rt = Symbol.for("react.forward_ref"),
    Z = Symbol.for("react.suspense"),
    gt = Symbol.for("react.suspense_list"),
    Et = Symbol.for("react.memo"),
    Ht = Symbol.for("react.lazy"),
    le = Symbol.for("react.activity"),
    Zl = Symbol.for("react.memo_cache_sentinel"),
    He = Symbol.iterator;
  function Qt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (He && t[He]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var El = Symbol.for("react.client.reference");
  function Tl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === El ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case j:
        return "Fragment";
      case Y:
        return "Profiler";
      case Q:
        return "StrictMode";
      case Z:
        return "Suspense";
      case gt:
        return "SuspenseList";
      case le:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case W:
          return "Portal";
        case tt:
          return (t.displayName || "Context") + ".Provider";
        case it:
          return (t._context.displayName || "Context") + ".Consumer";
        case rt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Et:
          return (
            (e = t.displayName || null), e !== null ? e : Tl(t.type) || "Memo"
          );
        case Ht:
          (e = t._payload), (t = t._init);
          try {
            return Tl(t(e));
          } catch {}
      }
    return null;
  }
  var wt = Array.isArray,
    N = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    St = [],
    m = -1;
  function x(t) {
    return { current: t };
  }
  function G(t) {
    0 > m || ((t.current = St[m]), (St[m] = null), m--);
  }
  function q(t, e) {
    m++, (St[m] = t.current), (t.current = e);
  }
  var V = x(null),
    ct = x(null),
    F = x(null),
    ae = x(null);
  function Tt(t, e) {
    switch ((q(F, e), q(ct, t), q(V, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? rd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = rd(e)), (t = od(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    G(V), q(V, t);
  }
  function We() {
    G(V), G(ct), G(F);
  }
  function fi(t) {
    t.memoizedState !== null && q(ae, t);
    var e = V.current,
      l = od(e, t.type);
    e !== l && (q(ct, t), q(V, l));
  }
  function qn(t) {
    ct.current === t && (G(V), G(ct)),
      ae.current === t && (G(ae), (Rn._currentValue = k));
  }
  var si = Object.prototype.hasOwnProperty,
    ri = i.unstable_scheduleCallback,
    oi = i.unstable_cancelCallback,
    Uh = i.unstable_shouldYield,
    Mh = i.unstable_requestPaint,
    De = i.unstable_now,
    xh = i.unstable_getCurrentPriorityLevel,
    wf = i.unstable_ImmediatePriority,
    Zf = i.unstable_UserBlockingPriority,
    Bn = i.unstable_NormalPriority,
    Ch = i.unstable_LowPriority,
    Vf = i.unstable_IdlePriority,
    Hh = i.log,
    jh = i.unstable_setDisableYieldValue,
    xa = null,
    ne = null;
  function Fe(t) {
    if (
      (typeof Hh == "function" && jh(t),
      ne && typeof ne.setStrictMode == "function")
    )
      try {
        ne.setStrictMode(xa, t);
      } catch {}
  }
  var ue = Math.clz32 ? Math.clz32 : Yh,
    qh = Math.log,
    Bh = Math.LN2;
  function Yh(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((qh(t) / Bh) | 0)) | 0;
  }
  var Yn = 256,
    Gn = 4194304;
  function Al(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Xn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      c = t.pingedLanes;
    t = t.warmLanes;
    var r = a & 134217727;
    return (
      r !== 0
        ? ((a = r & ~u),
          a !== 0
            ? (n = Al(a))
            : ((c &= r),
              c !== 0
                ? (n = Al(c))
                : l || ((l = r & ~t), l !== 0 && (n = Al(l)))))
        : ((r = a & ~u),
          r !== 0
            ? (n = Al(r))
            : c !== 0
            ? (n = Al(c))
            : l || ((l = a & ~t), l !== 0 && (n = Al(l)))),
      n === 0
        ? 0
        : e !== 0 &&
          e !== n &&
          (e & u) === 0 &&
          ((u = n & -n),
          (l = e & -e),
          u >= l || (u === 32 && (l & 4194048) !== 0))
        ? e
        : n
    );
  }
  function Ca(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Gh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Kf() {
    var t = Yn;
    return (Yn <<= 1), (Yn & 4194048) === 0 && (Yn = 256), t;
  }
  function Jf() {
    var t = Gn;
    return (Gn <<= 1), (Gn & 62914560) === 0 && (Gn = 4194304), t;
  }
  function di(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ha(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Xh(t, e, l, a, n, u) {
    var c = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var r = t.entanglements,
      h = t.expirationTimes,
      E = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var z = 31 - ue(l),
        M = 1 << z;
      (r[z] = 0), (h[z] = -1);
      var T = E[z];
      if (T !== null)
        for (E[z] = null, z = 0; z < T.length; z++) {
          var A = T[z];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~M;
    }
    a !== 0 && kf(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function kf(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ue(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function $f(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ue(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function hi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function yi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Wf() {
    var t = B.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Ud(t.type));
  }
  function Lh(t, e) {
    var l = B.p;
    try {
      return (B.p = t), e();
    } finally {
      B.p = l;
    }
  }
  var Pe = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + Pe,
    Wt = "__reactProps$" + Pe,
    Vl = "__reactContainer$" + Pe,
    mi = "__reactEvents$" + Pe,
    Qh = "__reactListeners$" + Pe,
    wh = "__reactHandles$" + Pe,
    Ff = "__reactResources$" + Pe,
    ja = "__reactMarker$" + Pe;
  function vi(t) {
    delete t[Zt], delete t[Wt], delete t[mi], delete t[Qh], delete t[wh];
  }
  function Kl(t) {
    var e = t[Zt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Vl] || l[Zt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = md(t); t !== null; ) {
            if ((l = t[Zt])) return l;
            t = md(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Jl(t) {
    if ((t = t[Zt] || t[Vl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function qa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function kl(t) {
    var e = t[Ff];
    return (
      e ||
        (e = t[Ff] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function jt(t) {
    t[ja] = !0;
  }
  var Pf = new Set(),
    If = {};
  function Ol(t, e) {
    $l(t, e), $l(t + "Capture", e);
  }
  function $l(t, e) {
    for (If[t] = e, t = 0; t < e.length; t++) Pf.add(e[t]);
  }
  var Zh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ts = {},
    es = {};
  function Vh(t) {
    return si.call(es, t)
      ? !0
      : si.call(ts, t)
      ? !1
      : Zh.test(t)
      ? (es[t] = !0)
      : ((ts[t] = !0), !1);
  }
  function Ln(t, e, l) {
    if (Vh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Qn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function je(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var gi, ls;
  function Wl(t) {
    if (gi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (gi = (e && e[1]) || ""),
          (ls =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      gi +
      t +
      ls
    );
  }
  var Si = !1;
  function bi(t, e) {
    if (!t || Si) return "";
    Si = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var M = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(M.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(M, []);
                } catch (A) {
                  var T = A;
                }
                Reflect.construct(t, [], M);
              } else {
                try {
                  M.call();
                } catch (A) {
                  T = A;
                }
                t.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                T = A;
              }
              (M = t()) &&
                typeof M.catch == "function" &&
                M.catch(function () {});
            }
          } catch (A) {
            if (A && T && typeof A.stack == "string") return [A.stack, T.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        r = u[1];
      if (c && r) {
        var h = c.split(`
`),
          E = r.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < E.length && !E[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === h.length || n === E.length)
          for (
            a = h.length - 1, n = E.length - 1;
            1 <= a && 0 <= n && h[a] !== E[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== E[n])) {
                  var z =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", t.displayName)),
                    z
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (Si = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Wl(l) : "";
  }
  function Kh(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Wl(t.type);
      case 16:
        return Wl("Lazy");
      case 13:
        return Wl("Suspense");
      case 19:
        return Wl("SuspenseList");
      case 0:
      case 15:
        return bi(t.type, !1);
      case 11:
        return bi(t.type.render, !1);
      case 1:
        return bi(t.type, !0);
      case 31:
        return Wl("Activity");
      default:
        return "";
    }
  }
  function as(t) {
    try {
      var e = "";
      do (e += Kh(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function ye(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ns(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Jh(t) {
    var e = ns(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        u = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            (a = "" + c), u.call(this, c);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function wn(t) {
    t._valueTracker || (t._valueTracker = Jh(t));
  }
  function us(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = ns(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Zn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var kh = /[\n"\\]/g;
  function me(t) {
    return t.replace(kh, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function pi(t, e, l, a, n, u, c, r) {
    (t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      e != null
        ? c === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ye(e))
          : t.value !== "" + ye(e) && (t.value = "" + ye(e))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      e != null
        ? Ei(t, c, ye(e))
        : l != null
        ? Ei(t, c, ye(l))
        : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (t.name = "" + ye(r))
        : t.removeAttribute("name");
  }
  function is(t, e, l, a, n, u, c, r) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (l = l != null ? "" + ye(l) : ""),
        (e = e != null ? "" + ye(e) : l),
        r || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = r ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function Ei(t, e, l) {
    (e === "number" && Zn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function Fl(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + ye(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function cs(t, e, l) {
    if (
      e != null &&
      ((e = "" + ye(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ye(l) : "";
  }
  function fs(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(s(92));
        if (wt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = ye(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function Pl(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var $h = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ss(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || $h.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function rs(t, e, l) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var n in e)
        (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && ss(t, n, a);
    } else for (var u in e) e.hasOwnProperty(u) && ss(t, u, e[u]);
  }
  function Ti(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Wh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Fh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vn(t) {
    return Fh.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ai = null;
  function Oi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Il = null,
    ta = null;
  function os(t) {
    var e = Jl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Wt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (pi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + me("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Wt] || null;
                if (!n) throw Error(s(90));
                pi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && us(a);
          }
          break t;
        case "textarea":
          cs(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && Fl(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ri = !1;
  function ds(t, e, l) {
    if (Ri) return t(e, l);
    Ri = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ri = !1),
        (Il !== null || ta !== null) &&
          (Uu(), Il && ((e = Il), (t = ta), (ta = Il = null), os(e), t)))
      )
        for (e = 0; e < t.length; e++) os(t[e]);
    }
  }
  function Ba(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Wt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(s(231, e, typeof l));
    return l;
  }
  var qe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _i = !1;
  if (qe)
    try {
      var Ya = {};
      Object.defineProperty(Ya, "passive", {
        get: function () {
          _i = !0;
        },
      }),
        window.addEventListener("test", Ya, Ya),
        window.removeEventListener("test", Ya, Ya);
    } catch {
      _i = !1;
    }
  var Ie = null,
    Di = null,
    Kn = null;
  function hs() {
    if (Kn) return Kn;
    var t,
      e = Di,
      l = e.length,
      a,
      n = "value" in Ie ? Ie.value : Ie.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === n[u - a]; a++);
    return (Kn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Jn(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function kn() {
    return !0;
  }
  function ys() {
    return !1;
  }
  function Ft(t) {
    function e(l, a, n, u, c) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null);
      for (var r in t)
        t.hasOwnProperty(r) && ((l = t[r]), (this[r] = l ? l(u) : u[r]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? kn
          : ys),
        (this.isPropagationStopped = ys),
        this
      );
    }
    return (
      O(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = kn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = kn));
        },
        persist: function () {},
        isPersistent: kn,
      }),
      e
    );
  }
  var Rl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $n = Ft(Rl),
    Ga = O({}, Rl, { view: 0, detail: 0 }),
    Ph = Ft(Ga),
    zi,
    Ni,
    Xa,
    Wn = O({}, Ga, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Mi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Xa &&
              (Xa && t.type === "mousemove"
                ? ((zi = t.screenX - Xa.screenX), (Ni = t.screenY - Xa.screenY))
                : (Ni = zi = 0),
              (Xa = t)),
            zi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ni;
      },
    }),
    ms = Ft(Wn),
    Ih = O({}, Wn, { dataTransfer: 0 }),
    t0 = Ft(Ih),
    e0 = O({}, Ga, { relatedTarget: 0 }),
    Ui = Ft(e0),
    l0 = O({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    a0 = Ft(l0),
    n0 = O({}, Rl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    u0 = Ft(n0),
    i0 = O({}, Rl, { data: 0 }),
    vs = Ft(i0),
    c0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    f0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    s0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function r0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = s0[t])
      ? !!e[t]
      : !1;
  }
  function Mi() {
    return r0;
  }
  var o0 = O({}, Ga, {
      key: function (t) {
        if (t.key) {
          var e = c0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Jn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? f0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Mi,
      charCode: function (t) {
        return t.type === "keypress" ? Jn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Jn(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    d0 = Ft(o0),
    h0 = O({}, Wn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    gs = Ft(h0),
    y0 = O({}, Ga, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mi,
    }),
    m0 = Ft(y0),
    v0 = O({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    g0 = Ft(v0),
    S0 = O({}, Wn, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    b0 = Ft(S0),
    p0 = O({}, Rl, { newState: 0, oldState: 0 }),
    E0 = Ft(p0),
    T0 = [9, 13, 27, 32],
    xi = qe && "CompositionEvent" in window,
    La = null;
  qe && "documentMode" in document && (La = document.documentMode);
  var A0 = qe && "TextEvent" in window && !La,
    Ss = qe && (!xi || (La && 8 < La && 11 >= La)),
    bs = " ",
    ps = !1;
  function Es(t, e) {
    switch (t) {
      case "keyup":
        return T0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ts(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ea = !1;
  function O0(t, e) {
    switch (t) {
      case "compositionend":
        return Ts(e);
      case "keypress":
        return e.which !== 32 ? null : ((ps = !0), bs);
      case "textInput":
        return (t = e.data), t === bs && ps ? null : t;
      default:
        return null;
    }
  }
  function R0(t, e) {
    if (ea)
      return t === "compositionend" || (!xi && Es(t, e))
        ? ((t = hs()), (Kn = Di = Ie = null), (ea = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ss && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var _0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function As(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!_0[t.type] : e === "textarea";
  }
  function Os(t, e, l, a) {
    Il ? (ta ? ta.push(a) : (ta = [a])) : (Il = a),
      (e = qu(e, "onChange")),
      0 < e.length &&
        ((l = new $n("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var Qa = null,
    wa = null;
  function D0(t) {
    ud(t, 0);
  }
  function Fn(t) {
    var e = qa(t);
    if (us(e)) return t;
  }
  function Rs(t, e) {
    if (t === "change") return e;
  }
  var _s = !1;
  if (qe) {
    var Ci;
    if (qe) {
      var Hi = "oninput" in document;
      if (!Hi) {
        var Ds = document.createElement("div");
        Ds.setAttribute("oninput", "return;"),
          (Hi = typeof Ds.oninput == "function");
      }
      Ci = Hi;
    } else Ci = !1;
    _s = Ci && (!document.documentMode || 9 < document.documentMode);
  }
  function zs() {
    Qa && (Qa.detachEvent("onpropertychange", Ns), (wa = Qa = null));
  }
  function Ns(t) {
    if (t.propertyName === "value" && Fn(wa)) {
      var e = [];
      Os(e, wa, t, Oi(t)), ds(D0, e);
    }
  }
  function z0(t, e, l) {
    t === "focusin"
      ? (zs(), (Qa = e), (wa = l), Qa.attachEvent("onpropertychange", Ns))
      : t === "focusout" && zs();
  }
  function N0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Fn(wa);
  }
  function U0(t, e) {
    if (t === "click") return Fn(e);
  }
  function M0(t, e) {
    if (t === "input" || t === "change") return Fn(e);
  }
  function x0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ie = typeof Object.is == "function" ? Object.is : x0;
  function Za(t, e) {
    if (ie(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!si.call(e, n) || !ie(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Us(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ms(t, e) {
    var l = Us(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Us(l);
    }
  }
  function xs(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? xs(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Cs(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Zn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Zn(t.document);
    }
    return e;
  }
  function ji(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var C0 = qe && "documentMode" in document && 11 >= document.documentMode,
    la = null,
    qi = null,
    Va = null,
    Bi = !1;
  function Hs(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Bi ||
      la == null ||
      la !== Zn(a) ||
      ((a = la),
      "selectionStart" in a && ji(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Va && Za(Va, a)) ||
        ((Va = a),
        (a = qu(qi, "onSelect")),
        0 < a.length &&
          ((e = new $n("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = la))));
  }
  function _l(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var aa = {
      animationend: _l("Animation", "AnimationEnd"),
      animationiteration: _l("Animation", "AnimationIteration"),
      animationstart: _l("Animation", "AnimationStart"),
      transitionrun: _l("Transition", "TransitionRun"),
      transitionstart: _l("Transition", "TransitionStart"),
      transitioncancel: _l("Transition", "TransitionCancel"),
      transitionend: _l("Transition", "TransitionEnd"),
    },
    Yi = {},
    js = {};
  qe &&
    ((js = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete aa.animationend.animation,
      delete aa.animationiteration.animation,
      delete aa.animationstart.animation),
    "TransitionEvent" in window || delete aa.transitionend.transition);
  function Dl(t) {
    if (Yi[t]) return Yi[t];
    if (!aa[t]) return t;
    var e = aa[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in js) return (Yi[t] = e[l]);
    return t;
  }
  var qs = Dl("animationend"),
    Bs = Dl("animationiteration"),
    Ys = Dl("animationstart"),
    H0 = Dl("transitionrun"),
    j0 = Dl("transitionstart"),
    q0 = Dl("transitioncancel"),
    Gs = Dl("transitionend"),
    Xs = new Map(),
    Gi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Gi.push("scrollEnd");
  function Ae(t, e) {
    Xs.set(t, e), Ol(e, [t]);
  }
  var Ls = new WeakMap();
  function ve(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ls.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: as(e) }), Ls.set(t, e), e);
    }
    return { value: t, source: e, stack: as(e) };
  }
  var ge = [],
    na = 0,
    Xi = 0;
  function Pn() {
    for (var t = na, e = (Xi = na = 0); e < t; ) {
      var l = ge[e];
      ge[e++] = null;
      var a = ge[e];
      ge[e++] = null;
      var n = ge[e];
      ge[e++] = null;
      var u = ge[e];
      if (((ge[e++] = null), a !== null && n !== null)) {
        var c = a.pending;
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n);
      }
      u !== 0 && Qs(l, n, u);
    }
  }
  function In(t, e, l, a) {
    (ge[na++] = t),
      (ge[na++] = e),
      (ge[na++] = l),
      (ge[na++] = a),
      (Xi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Li(t, e, l, a) {
    return In(t, e, l, a), tu(t);
  }
  function ua(t, e) {
    return In(t, null, null, e), tu(t);
  }
  function Qs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ue(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function tu(t) {
    if (50 < gn) throw ((gn = 0), (Jc = null), Error(s(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ia = {};
  function B0(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ce(t, e, l, a) {
    return new B0(t, e, l, a);
  }
  function Qi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Be(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ce(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function ws(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function eu(t, e, l, a, n, u) {
    var c = 0;
    if (((a = t), typeof t == "function")) Qi(t) && (c = 1);
    else if (typeof t == "string")
      c = Gy(t, l, V.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case le:
          return (t = ce(31, l, e, n)), (t.elementType = le), (t.lanes = u), t;
        case j:
          return zl(l.children, n, u, e);
        case Q:
          (c = 8), (n |= 24);
          break;
        case Y:
          return (
            (t = ce(12, l, e, n | 2)), (t.elementType = Y), (t.lanes = u), t
          );
        case Z:
          return (t = ce(13, l, e, n)), (t.elementType = Z), (t.lanes = u), t;
        case gt:
          return (t = ce(19, l, e, n)), (t.elementType = gt), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case st:
              case tt:
                c = 10;
                break t;
              case it:
                c = 9;
                break t;
              case rt:
                c = 11;
                break t;
              case Et:
                c = 14;
                break t;
              case Ht:
                (c = 16), (a = null);
                break t;
            }
          (c = 29),
            (l = Error(s(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = ce(c, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = u), e
    );
  }
  function zl(t, e, l, a) {
    return (t = ce(7, t, a, e)), (t.lanes = l), t;
  }
  function wi(t, e, l) {
    return (t = ce(6, t, null, e)), (t.lanes = l), t;
  }
  function Zi(t, e, l) {
    return (
      (e = ce(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ca = [],
    fa = 0,
    lu = null,
    au = 0,
    Se = [],
    be = 0,
    Nl = null,
    Ye = 1,
    Ge = "";
  function Ul(t, e) {
    (ca[fa++] = au), (ca[fa++] = lu), (lu = t), (au = e);
  }
  function Zs(t, e, l) {
    (Se[be++] = Ye), (Se[be++] = Ge), (Se[be++] = Nl), (Nl = t);
    var a = Ye;
    t = Ge;
    var n = 32 - ue(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - ue(e) + n;
    if (30 < u) {
      var c = n - (n % 5);
      (u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Ye = (1 << (32 - ue(e) + n)) | (l << n) | a),
        (Ge = u + t);
    } else (Ye = (1 << u) | (l << n) | a), (Ge = t);
  }
  function Vi(t) {
    t.return !== null && (Ul(t, 1), Zs(t, 1, 0));
  }
  function Ki(t) {
    for (; t === lu; )
      (lu = ca[--fa]), (ca[fa] = null), (au = ca[--fa]), (ca[fa] = null);
    for (; t === Nl; )
      (Nl = Se[--be]),
        (Se[be] = null),
        (Ge = Se[--be]),
        (Se[be] = null),
        (Ye = Se[--be]),
        (Se[be] = null);
  }
  var kt = null,
    _t = null,
    ot = !1,
    Ml = null,
    ze = !1,
    Ji = Error(s(519));
  function xl(t) {
    var e = Error(s(418, ""));
    throw (ka(ve(e, t)), Ji);
  }
  function Vs(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Zt] = t), (e[Wt] = a), l)) {
      case "dialog":
        nt("cancel", e), nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < bn.length; l++) nt(bn[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", e), nt("load", e);
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        nt("invalid", e),
          is(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          wn(e);
        break;
      case "select":
        nt("invalid", e);
        break;
      case "textarea":
        nt("invalid", e), fs(e, a.value, a.defaultValue, a.children), wn(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      sd(e.textContent, l)
        ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)),
          a.onScroll != null && nt("scroll", e),
          a.onScrollEnd != null && nt("scrollend", e),
          a.onClick != null && (e.onclick = Bu),
          (e = !0))
        : (e = !1),
      e || xl(t);
  }
  function Ks(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 5:
        case 13:
          ze = !1;
          return;
        case 27:
        case 3:
          ze = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function Ka(t) {
    if (t !== kt) return !1;
    if (!ot) return Ks(t), (ot = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || rf(t.type, t.memoizedProps))),
        (l = !l)),
      l && _t && xl(t),
      Ks(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                _t = Re(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        _t = null;
      }
    } else
      e === 27
        ? ((e = _t), ml(t.type) ? ((t = yf), (yf = null), (_t = t)) : (_t = e))
        : (_t = kt ? Re(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ja() {
    (_t = kt = null), (ot = !1);
  }
  function Js() {
    var t = Ml;
    return (
      t !== null &&
        (te === null ? (te = t) : te.push.apply(te, t), (Ml = null)),
      t
    );
  }
  function ka(t) {
    Ml === null ? (Ml = [t]) : Ml.push(t);
  }
  var ki = x(null),
    Cl = null,
    Xe = null;
  function tl(t, e, l) {
    q(ki, e._currentValue), (e._currentValue = l);
  }
  function Le(t) {
    (t._currentValue = ki.current), G(ki);
  }
  function $i(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Wi(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var r = u;
          u = n;
          for (var h = 0; h < e.length; h++)
            if (r.context === e[h]) {
              (u.lanes |= l),
                (r = u.alternate),
                r !== null && (r.lanes |= l),
                $i(u.return, l, t),
                a || (c = null);
              break t;
            }
          u = r.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(s(341));
        (c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          $i(c, l, t),
          (c = null);
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            (n.return = c.return), (c = n);
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function $a(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(s(387));
        if (((c = c.memoizedProps), c !== null)) {
          var r = n.type;
          ie(n.pendingProps.value, c.value) ||
            (t !== null ? t.push(r) : (t = [r]));
        }
      } else if (n === ae.current) {
        if (((c = n.alternate), c === null)) throw Error(s(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Rn) : (t = [Rn]));
      }
      n = n.return;
    }
    t !== null && Wi(e, t, l, a), (e.flags |= 262144);
  }
  function nu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ie(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Hl(t) {
    (Cl = t),
      (Xe = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Vt(t) {
    return ks(Cl, t);
  }
  function uu(t, e) {
    return Cl === null && Hl(t), ks(t, e);
  }
  function ks(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Xe === null)) {
      if (t === null) throw Error(s(308));
      (Xe = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Xe = Xe.next = e;
    return l;
  }
  var Y0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    G0 = i.unstable_scheduleCallback,
    X0 = i.unstable_NormalPriority,
    xt = {
      $$typeof: tt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Fi() {
    return { controller: new Y0(), data: new Map(), refCount: 0 };
  }
  function Wa(t) {
    t.refCount--,
      t.refCount === 0 &&
        G0(X0, function () {
          t.controller.abort();
        });
  }
  var Fa = null,
    Pi = 0,
    sa = 0,
    ra = null;
  function L0(t, e) {
    if (Fa === null) {
      var l = (Fa = []);
      (Pi = 0),
        (sa = tf()),
        (ra = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Pi++, e.then($s, $s), e;
  }
  function $s() {
    if (--Pi === 0 && Fa !== null) {
      ra !== null && (ra.status = "fulfilled");
      var t = Fa;
      (Fa = null), (sa = 0), (ra = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Q0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Ws = N.S;
  N.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      L0(t, e),
      Ws !== null && Ws(t, e);
  };
  var jl = x(null);
  function Ii() {
    var t = jl.current;
    return t !== null ? t : pt.pooledCache;
  }
  function iu(t, e) {
    e === null ? q(jl, jl.current) : q(jl, e.pool);
  }
  function Fs() {
    var t = Ii();
    return t === null ? null : { parent: xt._currentValue, pool: t };
  }
  var Pa = Error(s(460)),
    Ps = Error(s(474)),
    cu = Error(s(542)),
    tc = { then: function () {} };
  function Is(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fu() {}
  function tr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(fu, fu), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), lr(t), t);
      default:
        if (typeof e.status == "string") e.then(fu, fu);
        else {
          if (((t = pt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), lr(t), t);
        }
        throw ((Ia = e), Pa);
    }
  }
  var Ia = null;
  function er() {
    if (Ia === null) throw Error(s(459));
    var t = Ia;
    return (Ia = null), t;
  }
  function lr(t) {
    if (t === Pa || t === cu) throw Error(s(483));
  }
  var el = !1;
  function ec(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function lc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ll(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function al(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (dt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = tu(t)),
        Qs(t, null, l),
        e
      );
    }
    return In(t, a, e, l), tu(t);
  }
  function tn(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), $f(t, l);
    }
  }
  function ac(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = c) : (u = u.next = c), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var nc = !1;
  function en() {
    if (nc) {
      var t = ra;
      if (t !== null) throw t;
    }
  }
  function ln(t, e, l, a) {
    nc = !1;
    var n = t.updateQueue;
    el = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var h = r,
        E = h.next;
      (h.next = null), c === null ? (u = E) : (c.next = E), (c = h);
      var z = t.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (r = z.lastBaseUpdate),
        r !== c &&
          (r === null ? (z.firstBaseUpdate = E) : (r.next = E),
          (z.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var M = n.baseState;
      (c = 0), (z = E = h = null), (r = u);
      do {
        var T = r.lane & -536870913,
          A = T !== r.lane;
        if (A ? (ut & T) === T : (a & T) === T) {
          T !== 0 && T === sa && (nc = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var $ = t,
              K = r;
            T = e;
            var vt = l;
            switch (K.tag) {
              case 1:
                if ((($ = K.payload), typeof $ == "function")) {
                  M = $.call(vt, M, T);
                  break t;
                }
                M = $;
                break t;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = K.payload),
                  (T = typeof $ == "function" ? $.call(vt, M, T) : $),
                  T == null)
                )
                  break t;
                M = O({}, M, T);
                break t;
              case 2:
                el = !0;
            }
          }
          (T = r.callback),
            T !== null &&
              ((t.flags |= 64),
              A && (t.flags |= 8192),
              (A = n.callbacks),
              A === null ? (n.callbacks = [T]) : A.push(T));
        } else
          (A = {
            lane: T,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            z === null ? ((E = z = A), (h = M)) : (z = z.next = A),
            (c |= T);
        if (((r = r.next), r === null)) {
          if (((r = n.shared.pending), r === null)) break;
          (A = r),
            (r = A.next),
            (A.next = null),
            (n.lastBaseUpdate = A),
            (n.shared.pending = null);
        }
      } while (!0);
      z === null && (h = M),
        (n.baseState = h),
        (n.firstBaseUpdate = E),
        (n.lastBaseUpdate = z),
        u === null && (n.shared.lanes = 0),
        (ol |= c),
        (t.lanes = c),
        (t.memoizedState = M);
    }
  }
  function ar(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function nr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) ar(l[t], e);
  }
  var oa = x(null),
    su = x(0);
  function ur(t, e) {
    (t = ke), q(su, t), q(oa, e), (ke = t | e.baseLanes);
  }
  function uc() {
    q(su, ke), q(oa, oa.current);
  }
  function ic() {
    (ke = su.current), G(oa), G(su);
  }
  var nl = 0,
    et = null,
    yt = null,
    Ut = null,
    ru = !1,
    da = !1,
    ql = !1,
    ou = 0,
    an = 0,
    ha = null,
    w0 = 0;
  function zt() {
    throw Error(s(321));
  }
  function cc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ie(t[l], e[l])) return !1;
    return !0;
  }
  function fc(t, e, l, a, n, u) {
    return (
      (nl = u),
      (et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (N.H = t === null || t.memoizedState === null ? Qr : wr),
      (ql = !1),
      (u = l(a, n)),
      (ql = !1),
      da && (u = cr(e, l, a, n)),
      ir(t),
      u
    );
  }
  function ir(t) {
    N.H = gu;
    var e = yt !== null && yt.next !== null;
    if (((nl = 0), (Ut = yt = et = null), (ru = !1), (an = 0), (ha = null), e))
      throw Error(s(300));
    t === null ||
      qt ||
      ((t = t.dependencies), t !== null && nu(t) && (qt = !0));
  }
  function cr(t, e, l, a) {
    et = t;
    var n = 0;
    do {
      if ((da && (ha = null), (an = 0), (da = !1), 25 <= n))
        throw Error(s(301));
      if (((n += 1), (Ut = yt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (N.H = W0), (u = e(l, a));
    } while (da);
    return u;
  }
  function Z0() {
    var t = N.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? nn(e) : e),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && (et.flags |= 1024),
      e
    );
  }
  function sc() {
    var t = ou !== 0;
    return (ou = 0), t;
  }
  function rc(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function oc(t) {
    if (ru) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      ru = !1;
    }
    (nl = 0), (Ut = yt = et = null), (da = !1), (an = ou = 0), (ha = null);
  }
  function Pt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ut === null ? (et.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut;
  }
  function Mt() {
    if (yt === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var e = Ut === null ? et.memoizedState : Ut.next;
    if (e !== null) (Ut = e), (yt = t);
    else {
      if (t === null)
        throw et.alternate === null ? Error(s(467)) : Error(s(310));
      (yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        Ut === null ? (et.memoizedState = Ut = t) : (Ut = Ut.next = t);
    }
    return Ut;
  }
  function dc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function nn(t) {
    var e = an;
    return (
      (an += 1),
      ha === null && (ha = []),
      (t = tr(ha, t, e)),
      (e = et),
      (Ut === null ? e.memoizedState : Ut.next) === null &&
        ((e = e.alternate),
        (N.H = e === null || e.memoizedState === null ? Qr : wr)),
      t
    );
  }
  function du(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return nn(t);
      if (t.$$typeof === tt) return Vt(t);
    }
    throw Error(s(438, String(t)));
  }
  function hc(t) {
    var e = null,
      l = et.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = et.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = dc()), (et.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Zl;
    return e.index++, l;
  }
  function Qe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function hu(t) {
    var e = Mt();
    return yc(e, yt, t);
  }
  function yc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        (n.next = u.next), (u.next = c);
      }
      (e.baseQueue = n = u), (a.pending = null);
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var r = (c = null),
        h = null,
        E = e,
        z = !1;
      do {
        var M = E.lane & -536870913;
        if (M !== E.lane ? (ut & M) === M : (nl & M) === M) {
          var T = E.revertLane;
          if (T === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              M === sa && (z = !0);
          else if ((nl & T) === T) {
            (E = E.next), T === sa && (z = !0);
            continue;
          } else
            (M = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              h === null ? ((r = h = M), (c = u)) : (h = h.next = M),
              (et.lanes |= T),
              (ol |= T);
          (M = E.action),
            ql && l(u, M),
            (u = E.hasEagerState ? E.eagerState : l(u, M));
        } else
          (T = {
            lane: M,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            h === null ? ((r = h = T), (c = u)) : (h = h.next = T),
            (et.lanes |= M),
            (ol |= M);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (h === null ? (c = u) : (h.next = r),
        !ie(u, t.memoizedState) && ((qt = !0), z && ((l = ra), l !== null)))
      )
        throw l;
      (t.memoizedState = u),
        (t.baseState = c),
        (t.baseQueue = h),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function mc(t) {
    var e = Mt(),
      l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do (u = t(u, c.action)), (c = c.next);
      while (c !== n);
      ie(u, e.memoizedState) || (qt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function fr(t, e, l) {
    var a = et,
      n = Mt(),
      u = ot;
    if (u) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = e();
    var c = !ie((yt || n).memoizedState, l);
    c && ((n.memoizedState = l), (qt = !0)), (n = n.queue);
    var r = or.bind(null, a, n, t);
    if (
      (un(2048, 8, r, [t]),
      n.getSnapshot !== e || c || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, yu(), rr.bind(null, a, n, l, e), null),
        pt === null)
      )
        throw Error(s(349));
      u || (nl & 124) !== 0 || sr(a, e, l);
    }
    return l;
  }
  function sr(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = et.updateQueue),
      e === null
        ? ((e = dc()), (et.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function rr(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), dr(e) && hr(t);
  }
  function or(t, e, l) {
    return l(function () {
      dr(e) && hr(t);
    });
  }
  function dr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ie(t, l);
    } catch {
      return !0;
    }
  }
  function hr(t) {
    var e = ua(t, 2);
    e !== null && de(e, t, 2);
  }
  function vc(t) {
    var e = Pt();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), ql)) {
        Fe(!0);
        try {
          l();
        } finally {
          Fe(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qe,
        lastRenderedState: t,
      }),
      e
    );
  }
  function yr(t, e, l, a) {
    return (t.baseState = l), yc(t, yt, typeof a == "function" ? a : Qe);
  }
  function V0(t, e, l, a, n) {
    if (vu(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      N.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), mr(e, u))
          : ((u.next = l.next), (e.pending = l.next = u));
    }
  }
  function mr(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = N.T,
        c = {};
      N.T = c;
      try {
        var r = l(n, a),
          h = N.S;
        h !== null && h(c, r), vr(t, e, r);
      } catch (E) {
        gc(t, e, E);
      } finally {
        N.T = u;
      }
    } else
      try {
        (u = l(n, a)), vr(t, e, u);
      } catch (E) {
        gc(t, e, E);
      }
  }
  function vr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            gr(t, e, a);
          },
          function (a) {
            return gc(t, e, a);
          }
        )
      : gr(t, e, l);
  }
  function gr(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      Sr(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), mr(t, l)));
  }
  function gc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), Sr(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Sr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function br(t, e) {
    return e;
  }
  function pr(t, e) {
    if (ot) {
      var l = pt.formState;
      if (l !== null) {
        t: {
          var a = et;
          if (ot) {
            if (_t) {
              e: {
                for (var n = _t, u = ze; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = Re(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (_t = Re(n.nextSibling)), (a = n.data === "F!");
                break t;
              }
            }
            xl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Pt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: br,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Gr.bind(null, et, a)),
      (a.dispatch = l),
      (a = vc(!1)),
      (u = Tc.bind(null, et, !1, a.queue)),
      (a = Pt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = V0.bind(null, et, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Er(t) {
    var e = Mt();
    return Tr(e, yt, t);
  }
  function Tr(t, e, l) {
    if (
      ((e = yc(t, e, br)[0]),
      (t = hu(Qe)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = nn(e);
      } catch (c) {
        throw c === Pa ? cu : c;
      }
    else a = e;
    e = Mt();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((et.flags |= 2048), ya(9, yu(), K0.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function K0(t, e) {
    t.action = e;
  }
  function Ar(t) {
    var e = Mt(),
      l = yt;
    if (l !== null) return Tr(e, l, t);
    Mt(), (e = e.memoizedState), (l = Mt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function ya(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = et.updateQueue),
      e === null && ((e = dc()), (et.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function yu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Or() {
    return Mt().memoizedState;
  }
  function mu(t, e, l, a) {
    var n = Pt();
    (a = a === void 0 ? null : a),
      (et.flags |= t),
      (n.memoizedState = ya(1 | e, yu(), l, a));
  }
  function un(t, e, l, a) {
    var n = Mt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    yt !== null && a !== null && cc(a, yt.memoizedState.deps)
      ? (n.memoizedState = ya(e, u, l, a))
      : ((et.flags |= t), (n.memoizedState = ya(1 | e, u, l, a)));
  }
  function Rr(t, e) {
    mu(8390656, 8, t, e);
  }
  function _r(t, e) {
    un(2048, 8, t, e);
  }
  function Dr(t, e) {
    return un(4, 2, t, e);
  }
  function zr(t, e) {
    return un(4, 4, t, e);
  }
  function Nr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Ur(t, e, l) {
    (l = l != null ? l.concat([t]) : null), un(4, 4, Nr.bind(null, e, t), l);
  }
  function Sc() {}
  function Mr(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && cc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function xr(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && cc(e, a[1])) return a[0];
    if (((a = t()), ql)) {
      Fe(!0);
      try {
        t();
      } finally {
        Fe(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function bc(t, e, l) {
    return l === void 0 || (nl & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = qo()), (et.lanes |= t), (ol |= t), l);
  }
  function Cr(t, e, l, a) {
    return ie(l, e)
      ? l
      : oa.current !== null
      ? ((t = bc(t, l, a)), ie(t, e) || (qt = !0), t)
      : (nl & 42) === 0
      ? ((qt = !0), (t.memoizedState = l))
      : ((t = qo()), (et.lanes |= t), (ol |= t), e);
  }
  function Hr(t, e, l, a, n) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var c = N.T,
      r = {};
    (N.T = r), Tc(t, !1, e, l);
    try {
      var h = n(),
        E = N.S;
      if (
        (E !== null && E(r, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var z = Q0(h, a);
        cn(t, e, z, oe(t));
      } else cn(t, e, a, oe(t));
    } catch (M) {
      cn(t, e, { then: function () {}, status: "rejected", reason: M }, oe());
    } finally {
      (B.p = u), (N.T = c);
    }
  }
  function J0() {}
  function pc(t, e, l, a) {
    if (t.tag !== 5) throw Error(s(476));
    var n = jr(t).queue;
    Hr(
      t,
      n,
      e,
      k,
      l === null
        ? J0
        : function () {
            return qr(t), l(a);
          }
    );
  }
  function jr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qe,
        lastRenderedState: k,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qe,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function qr(t) {
    var e = jr(t).next.queue;
    cn(t, e, {}, oe());
  }
  function Ec() {
    return Vt(Rn);
  }
  function Br() {
    return Mt().memoizedState;
  }
  function Yr() {
    return Mt().memoizedState;
  }
  function k0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = oe();
          t = ll(l);
          var a = al(e, t, l);
          a !== null && (de(a, e, l), tn(a, e, l)),
            (e = { cache: Fi() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function $0(t, e, l) {
    var a = oe();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vu(t)
        ? Xr(e, l)
        : ((l = Li(t, e, l, a)), l !== null && (de(l, t, a), Lr(l, e, a)));
  }
  function Gr(t, e, l) {
    var a = oe();
    cn(t, e, l, a);
  }
  function cn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vu(t)) Xr(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var c = e.lastRenderedState,
            r = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = r), ie(r, c)))
            return In(t, e, n, 0), pt === null && Pn(), !1;
        } catch {
        } finally {
        }
      if (((l = Li(t, e, n, a)), l !== null))
        return de(l, t, a), Lr(l, e, a), !0;
    }
    return !1;
  }
  function Tc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: tf(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vu(t))
    ) {
      if (e) throw Error(s(479));
    } else (e = Li(t, l, a, 2)), e !== null && de(e, t, 2);
  }
  function vu(t) {
    var e = t.alternate;
    return t === et || (e !== null && e === et);
  }
  function Xr(t, e) {
    da = ru = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Lr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), $f(t, l);
    }
  }
  var gu = {
      readContext: Vt,
      use: du,
      useCallback: zt,
      useContext: zt,
      useEffect: zt,
      useImperativeHandle: zt,
      useLayoutEffect: zt,
      useInsertionEffect: zt,
      useMemo: zt,
      useReducer: zt,
      useRef: zt,
      useState: zt,
      useDebugValue: zt,
      useDeferredValue: zt,
      useTransition: zt,
      useSyncExternalStore: zt,
      useId: zt,
      useHostTransitionStatus: zt,
      useFormState: zt,
      useActionState: zt,
      useOptimistic: zt,
      useMemoCache: zt,
      useCacheRefresh: zt,
    },
    Qr = {
      readContext: Vt,
      use: du,
      useCallback: function (t, e) {
        return (Pt().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Vt,
      useEffect: Rr,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          mu(4194308, 4, Nr.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return mu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        mu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Pt();
        e = e === void 0 ? null : e;
        var a = t();
        if (ql) {
          Fe(!0);
          try {
            t();
          } finally {
            Fe(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = Pt();
        if (l !== void 0) {
          var n = l(e);
          if (ql) {
            Fe(!0);
            try {
              l(e);
            } finally {
              Fe(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = $0.bind(null, et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Pt();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = vc(t);
        var e = t.queue,
          l = Gr.bind(null, et, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: Sc,
      useDeferredValue: function (t, e) {
        var l = Pt();
        return bc(l, t, e);
      },
      useTransition: function () {
        var t = vc(!1);
        return (
          (t = Hr.bind(null, et, t.queue, !0, !1)),
          (Pt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = et,
          n = Pt();
        if (ot) {
          if (l === void 0) throw Error(s(407));
          l = l();
        } else {
          if (((l = e()), pt === null)) throw Error(s(349));
          (ut & 124) !== 0 || sr(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Rr(or.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          ya(9, yu(), rr.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Pt(),
          e = pt.identifierPrefix;
        if (ot) {
          var l = Ge,
            a = Ye;
          (l = (a & ~(1 << (32 - ue(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = ou++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»");
        } else (l = w0++), (e = "«" + e + "r" + l.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ec,
      useFormState: pr,
      useActionState: pr,
      useOptimistic: function (t) {
        var e = Pt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Tc.bind(null, et, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: hc,
      useCacheRefresh: function () {
        return (Pt().memoizedState = k0.bind(null, et));
      },
    },
    wr = {
      readContext: Vt,
      use: du,
      useCallback: Mr,
      useContext: Vt,
      useEffect: _r,
      useImperativeHandle: Ur,
      useInsertionEffect: Dr,
      useLayoutEffect: zr,
      useMemo: xr,
      useReducer: hu,
      useRef: Or,
      useState: function () {
        return hu(Qe);
      },
      useDebugValue: Sc,
      useDeferredValue: function (t, e) {
        var l = Mt();
        return Cr(l, yt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = hu(Qe)[0],
          e = Mt().memoizedState;
        return [typeof t == "boolean" ? t : nn(t), e];
      },
      useSyncExternalStore: fr,
      useId: Br,
      useHostTransitionStatus: Ec,
      useFormState: Er,
      useActionState: Er,
      useOptimistic: function (t, e) {
        var l = Mt();
        return yr(l, yt, t, e);
      },
      useMemoCache: hc,
      useCacheRefresh: Yr,
    },
    W0 = {
      readContext: Vt,
      use: du,
      useCallback: Mr,
      useContext: Vt,
      useEffect: _r,
      useImperativeHandle: Ur,
      useInsertionEffect: Dr,
      useLayoutEffect: zr,
      useMemo: xr,
      useReducer: mc,
      useRef: Or,
      useState: function () {
        return mc(Qe);
      },
      useDebugValue: Sc,
      useDeferredValue: function (t, e) {
        var l = Mt();
        return yt === null ? bc(l, t, e) : Cr(l, yt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = mc(Qe)[0],
          e = Mt().memoizedState;
        return [typeof t == "boolean" ? t : nn(t), e];
      },
      useSyncExternalStore: fr,
      useId: Br,
      useHostTransitionStatus: Ec,
      useFormState: Ar,
      useActionState: Ar,
      useOptimistic: function (t, e) {
        var l = Mt();
        return yt !== null
          ? yr(l, yt, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: hc,
      useCacheRefresh: Yr,
    },
    ma = null,
    fn = 0;
  function Su(t) {
    var e = fn;
    return (fn += 1), ma === null && (ma = []), tr(ma, t, e);
  }
  function sn(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function bu(t, e) {
    throw e.$$typeof === H
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Zr(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Vr(t) {
    function e(b, v) {
      if (t) {
        var p = b.deletions;
        p === null ? ((b.deletions = [v]), (b.flags |= 16)) : p.push(v);
      }
    }
    function l(b, v) {
      if (!t) return null;
      for (; v !== null; ) e(b, v), (v = v.sibling);
      return null;
    }
    function a(b) {
      for (var v = new Map(); b !== null; )
        b.key !== null ? v.set(b.key, b) : v.set(b.index, b), (b = b.sibling);
      return v;
    }
    function n(b, v) {
      return (b = Be(b, v)), (b.index = 0), (b.sibling = null), b;
    }
    function u(b, v, p) {
      return (
        (b.index = p),
        t
          ? ((p = b.alternate),
            p !== null
              ? ((p = p.index), p < v ? ((b.flags |= 67108866), v) : p)
              : ((b.flags |= 67108866), v))
          : ((b.flags |= 1048576), v)
      );
    }
    function c(b) {
      return t && b.alternate === null && (b.flags |= 67108866), b;
    }
    function r(b, v, p, U) {
      return v === null || v.tag !== 6
        ? ((v = wi(p, b.mode, U)), (v.return = b), v)
        : ((v = n(v, p)), (v.return = b), v);
    }
    function h(b, v, p, U) {
      var L = p.type;
      return L === j
        ? z(b, v, p.props.children, U, p.key)
        : v !== null &&
          (v.elementType === L ||
            (typeof L == "object" &&
              L !== null &&
              L.$$typeof === Ht &&
              Zr(L) === v.type))
        ? ((v = n(v, p.props)), sn(v, p), (v.return = b), v)
        : ((v = eu(p.type, p.key, p.props, null, b.mode, U)),
          sn(v, p),
          (v.return = b),
          v);
    }
    function E(b, v, p, U) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== p.containerInfo ||
        v.stateNode.implementation !== p.implementation
        ? ((v = Zi(p, b.mode, U)), (v.return = b), v)
        : ((v = n(v, p.children || [])), (v.return = b), v);
    }
    function z(b, v, p, U, L) {
      return v === null || v.tag !== 7
        ? ((v = zl(p, b.mode, U, L)), (v.return = b), v)
        : ((v = n(v, p)), (v.return = b), v);
    }
    function M(b, v, p) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return (v = wi("" + v, b.mode, p)), (v.return = b), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case X:
            return (
              (p = eu(v.type, v.key, v.props, null, b.mode, p)),
              sn(p, v),
              (p.return = b),
              p
            );
          case W:
            return (v = Zi(v, b.mode, p)), (v.return = b), v;
          case Ht:
            var U = v._init;
            return (v = U(v._payload)), M(b, v, p);
        }
        if (wt(v) || Qt(v))
          return (v = zl(v, b.mode, p, null)), (v.return = b), v;
        if (typeof v.then == "function") return M(b, Su(v), p);
        if (v.$$typeof === tt) return M(b, uu(b, v), p);
        bu(b, v);
      }
      return null;
    }
    function T(b, v, p, U) {
      var L = v !== null ? v.key : null;
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return L !== null ? null : r(b, v, "" + p, U);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case X:
            return p.key === L ? h(b, v, p, U) : null;
          case W:
            return p.key === L ? E(b, v, p, U) : null;
          case Ht:
            return (L = p._init), (p = L(p._payload)), T(b, v, p, U);
        }
        if (wt(p) || Qt(p)) return L !== null ? null : z(b, v, p, U, null);
        if (typeof p.then == "function") return T(b, v, Su(p), U);
        if (p.$$typeof === tt) return T(b, v, uu(b, p), U);
        bu(b, p);
      }
      return null;
    }
    function A(b, v, p, U, L) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (b = b.get(p) || null), r(v, b, "" + U, L);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case X:
            return (
              (b = b.get(U.key === null ? p : U.key) || null), h(v, b, U, L)
            );
          case W:
            return (
              (b = b.get(U.key === null ? p : U.key) || null), E(v, b, U, L)
            );
          case Ht:
            var lt = U._init;
            return (U = lt(U._payload)), A(b, v, p, U, L);
        }
        if (wt(U) || Qt(U)) return (b = b.get(p) || null), z(v, b, U, L, null);
        if (typeof U.then == "function") return A(b, v, p, Su(U), L);
        if (U.$$typeof === tt) return A(b, v, p, uu(v, U), L);
        bu(v, U);
      }
      return null;
    }
    function $(b, v, p, U) {
      for (
        var L = null, lt = null, w = v, J = (v = 0), Yt = null;
        w !== null && J < p.length;
        J++
      ) {
        w.index > J ? ((Yt = w), (w = null)) : (Yt = w.sibling);
        var ft = T(b, w, p[J], U);
        if (ft === null) {
          w === null && (w = Yt);
          break;
        }
        t && w && ft.alternate === null && e(b, w),
          (v = u(ft, v, J)),
          lt === null ? (L = ft) : (lt.sibling = ft),
          (lt = ft),
          (w = Yt);
      }
      if (J === p.length) return l(b, w), ot && Ul(b, J), L;
      if (w === null) {
        for (; J < p.length; J++)
          (w = M(b, p[J], U)),
            w !== null &&
              ((v = u(w, v, J)),
              lt === null ? (L = w) : (lt.sibling = w),
              (lt = w));
        return ot && Ul(b, J), L;
      }
      for (w = a(w); J < p.length; J++)
        (Yt = A(w, b, J, p[J], U)),
          Yt !== null &&
            (t &&
              Yt.alternate !== null &&
              w.delete(Yt.key === null ? J : Yt.key),
            (v = u(Yt, v, J)),
            lt === null ? (L = Yt) : (lt.sibling = Yt),
            (lt = Yt));
      return (
        t &&
          w.forEach(function (pl) {
            return e(b, pl);
          }),
        ot && Ul(b, J),
        L
      );
    }
    function K(b, v, p, U) {
      if (p == null) throw Error(s(151));
      for (
        var L = null, lt = null, w = v, J = (v = 0), Yt = null, ft = p.next();
        w !== null && !ft.done;
        J++, ft = p.next()
      ) {
        w.index > J ? ((Yt = w), (w = null)) : (Yt = w.sibling);
        var pl = T(b, w, ft.value, U);
        if (pl === null) {
          w === null && (w = Yt);
          break;
        }
        t && w && pl.alternate === null && e(b, w),
          (v = u(pl, v, J)),
          lt === null ? (L = pl) : (lt.sibling = pl),
          (lt = pl),
          (w = Yt);
      }
      if (ft.done) return l(b, w), ot && Ul(b, J), L;
      if (w === null) {
        for (; !ft.done; J++, ft = p.next())
          (ft = M(b, ft.value, U)),
            ft !== null &&
              ((v = u(ft, v, J)),
              lt === null ? (L = ft) : (lt.sibling = ft),
              (lt = ft));
        return ot && Ul(b, J), L;
      }
      for (w = a(w); !ft.done; J++, ft = p.next())
        (ft = A(w, b, J, ft.value, U)),
          ft !== null &&
            (t &&
              ft.alternate !== null &&
              w.delete(ft.key === null ? J : ft.key),
            (v = u(ft, v, J)),
            lt === null ? (L = ft) : (lt.sibling = ft),
            (lt = ft));
      return (
        t &&
          w.forEach(function (Fy) {
            return e(b, Fy);
          }),
        ot && Ul(b, J),
        L
      );
    }
    function vt(b, v, p, U) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === j &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case X:
            t: {
              for (var L = p.key; v !== null; ) {
                if (v.key === L) {
                  if (((L = p.type), L === j)) {
                    if (v.tag === 7) {
                      l(b, v.sibling),
                        (U = n(v, p.props.children)),
                        (U.return = b),
                        (b = U);
                      break t;
                    }
                  } else if (
                    v.elementType === L ||
                    (typeof L == "object" &&
                      L !== null &&
                      L.$$typeof === Ht &&
                      Zr(L) === v.type)
                  ) {
                    l(b, v.sibling),
                      (U = n(v, p.props)),
                      sn(U, p),
                      (U.return = b),
                      (b = U);
                    break t;
                  }
                  l(b, v);
                  break;
                } else e(b, v);
                v = v.sibling;
              }
              p.type === j
                ? ((U = zl(p.props.children, b.mode, U, p.key)),
                  (U.return = b),
                  (b = U))
                : ((U = eu(p.type, p.key, p.props, null, b.mode, U)),
                  sn(U, p),
                  (U.return = b),
                  (b = U));
            }
            return c(b);
          case W:
            t: {
              for (L = p.key; v !== null; ) {
                if (v.key === L)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === p.containerInfo &&
                    v.stateNode.implementation === p.implementation
                  ) {
                    l(b, v.sibling),
                      (U = n(v, p.children || [])),
                      (U.return = b),
                      (b = U);
                    break t;
                  } else {
                    l(b, v);
                    break;
                  }
                else e(b, v);
                v = v.sibling;
              }
              (U = Zi(p, b.mode, U)), (U.return = b), (b = U);
            }
            return c(b);
          case Ht:
            return (L = p._init), (p = L(p._payload)), vt(b, v, p, U);
        }
        if (wt(p)) return $(b, v, p, U);
        if (Qt(p)) {
          if (((L = Qt(p)), typeof L != "function")) throw Error(s(150));
          return (p = L.call(p)), K(b, v, p, U);
        }
        if (typeof p.then == "function") return vt(b, v, Su(p), U);
        if (p.$$typeof === tt) return vt(b, v, uu(b, p), U);
        bu(b, p);
      }
      return (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
        ? ((p = "" + p),
          v !== null && v.tag === 6
            ? (l(b, v.sibling), (U = n(v, p)), (U.return = b), (b = U))
            : (l(b, v), (U = wi(p, b.mode, U)), (U.return = b), (b = U)),
          c(b))
        : l(b, v);
    }
    return function (b, v, p, U) {
      try {
        fn = 0;
        var L = vt(b, v, p, U);
        return (ma = null), L;
      } catch (w) {
        if (w === Pa || w === cu) throw w;
        var lt = ce(29, w, null, b.mode);
        return (lt.lanes = U), (lt.return = b), lt;
      } finally {
      }
    };
  }
  var va = Vr(!0),
    Kr = Vr(!1),
    pe = x(null),
    Ne = null;
  function ul(t) {
    var e = t.alternate;
    q(Ct, Ct.current & 1),
      q(pe, t),
      Ne === null &&
        (e === null || oa.current !== null || e.memoizedState !== null) &&
        (Ne = t);
  }
  function Jr(t) {
    if (t.tag === 22) {
      if ((q(Ct, Ct.current), q(pe, t), Ne === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ne = t);
      }
    } else il();
  }
  function il() {
    q(Ct, Ct.current), q(pe, pe.current);
  }
  function we(t) {
    G(pe), Ne === t && (Ne = null), G(Ct);
  }
  var Ct = x(0);
  function pu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || hf(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Ac(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : O({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Oc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = oe(),
        n = ll(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = al(t, n, a)),
        e !== null && (de(e, t, a), tn(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = oe(),
        n = ll(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = al(t, n, a)),
        e !== null && (de(e, t, a), tn(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = oe(),
        a = ll(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = al(t, a, l)),
        e !== null && (de(e, t, l), tn(e, t, l));
    },
  };
  function kr(t, e, l, a, n, u, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, c)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Za(l, a) || !Za(n, u)
        : !0
    );
  }
  function $r(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Oc.enqueueReplaceState(e, e.state, null);
  }
  function Bl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = O({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  var Eu =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Wr(t) {
    Eu(t);
  }
  function Fr(t) {
    console.error(t);
  }
  function Pr(t) {
    Eu(t);
  }
  function Tu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ir(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Rc(t, e, l) {
    return (
      (l = ll(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Tu(t, e);
      }),
      l
    );
  }
  function to(t) {
    return (t = ll(t)), (t.tag = 3), t;
  }
  function eo(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          Ir(e, l, a);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        Ir(e, l, a),
          typeof n != "function" &&
            (dl === null ? (dl = new Set([this])) : dl.add(this));
        var r = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function F0(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && $a(e, l, n, !0),
        (l = pe.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Ne === null ? $c() : l.alternate === null && Dt === 0 && (Dt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === tc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Fc(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === tc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Fc(t, a, n)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return Fc(t, a, n), $c(), !1;
    }
    if (ot)
      return (
        (e = pe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Ji && ((t = Error(s(422), { cause: a })), ka(ve(t, l))))
          : (a !== Ji && ((e = Error(s(423), { cause: a })), ka(ve(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = ve(a, l)),
            (n = Rc(t.stateNode, a, n)),
            ac(t, n),
            Dt !== 4 && (Dt = 2)),
        !1
      );
    var u = Error(s(520), { cause: a });
    if (
      ((u = ve(u, l)),
      vn === null ? (vn = [u]) : vn.push(u),
      Dt !== 4 && (Dt = 2),
      e === null)
    )
      return !0;
    (a = ve(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = Rc(l.stateNode, a, t)),
            ac(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (dl === null || !dl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = to(n)),
              eo(n, t, l, a),
              ac(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var lo = Error(s(461)),
    qt = !1;
  function Gt(t, e, l, a) {
    e.child = t === null ? Kr(e, null, l, a) : va(e, t.child, l, a);
  }
  function ao(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var r in a) r !== "ref" && (c[r] = a[r]);
    } else c = a;
    return (
      Hl(e),
      (a = fc(t, e, l, c, u, n)),
      (r = sc()),
      t !== null && !qt
        ? (rc(t, e, n), Ze(t, e, n))
        : (ot && r && Vi(e), (e.flags |= 1), Gt(t, e, a, n), e.child)
    );
  }
  function no(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Qi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), uo(t, e, u, a, n))
        : ((t = eu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Cc(t, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Za), l(c, a) && t.ref === e.ref)
      )
        return Ze(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Be(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function uo(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Za(u, a) && t.ref === e.ref)
        if (((qt = !1), (e.pendingProps = a = u), Cc(t, n)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return (e.lanes = t.lanes), Ze(t, e, n);
    }
    return _c(t, e, l, a, n);
  }
  function io(t, e, l) {
    var a = e.pendingProps,
      n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling);
          e.childLanes = u & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return co(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && iu(e, u !== null ? u.cachePool : null),
          u !== null ? ur(e, u) : uc(),
          Jr(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          co(t, e, u !== null ? u.baseLanes | l : l, l)
        );
    } else
      u !== null
        ? (iu(e, u.cachePool), ur(e, u), il(), (e.memoizedState = null))
        : (t !== null && iu(e, null), uc(), il());
    return Gt(t, e, n, l), e.child;
  }
  function co(t, e, l, a) {
    var n = Ii();
    return (
      (n = n === null ? null : { parent: xt._currentValue, pool: n }),
      (e.memoizedState = { baseLanes: l, cachePool: n }),
      t !== null && iu(e, null),
      uc(),
      Jr(e),
      t !== null && $a(t, e, a, !0),
      null
    );
  }
  function Au(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(s(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function _c(t, e, l, a, n) {
    return (
      Hl(e),
      (l = fc(t, e, l, a, void 0, n)),
      (a = sc()),
      t !== null && !qt
        ? (rc(t, e, n), Ze(t, e, n))
        : (ot && a && Vi(e), (e.flags |= 1), Gt(t, e, l, n), e.child)
    );
  }
  function fo(t, e, l, a, n, u) {
    return (
      Hl(e),
      (e.updateQueue = null),
      (l = cr(e, a, l, n)),
      ir(t),
      (a = sc()),
      t !== null && !qt
        ? (rc(t, e, u), Ze(t, e, u))
        : (ot && a && Vi(e), (e.flags |= 1), Gt(t, e, l, u), e.child)
    );
  }
  function so(t, e, l, a, n) {
    if ((Hl(e), e.stateNode === null)) {
      var u = ia,
        c = l.contextType;
      typeof c == "object" && c !== null && (u = Vt(c)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Oc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        ec(e),
        (c = l.contextType),
        (u.context = typeof c == "object" && c !== null ? Vt(c) : ia),
        (u.state = e.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (Ac(e, l, c, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((c = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && Oc.enqueueReplaceState(u, u.state, null),
          ln(e, a, u, n),
          en(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      u = e.stateNode;
      var r = e.memoizedProps,
        h = Bl(l, r);
      u.props = h;
      var E = u.context,
        z = l.contextType;
      (c = ia), typeof z == "object" && z !== null && (c = Vt(z));
      var M = l.getDerivedStateFromProps;
      (z =
        typeof M == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (r = e.pendingProps !== r),
        z ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((r || E !== c) && $r(e, u, a, c)),
        (el = !1);
      var T = e.memoizedState;
      (u.state = T),
        ln(e, a, u, n),
        en(),
        (E = e.memoizedState),
        r || T !== E || el
          ? (typeof M == "function" && (Ac(e, l, M, a), (E = e.memoizedState)),
            (h = el || kr(e, l, h, a, T, E, c))
              ? (z ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = E)),
            (u.props = a),
            (u.state = E),
            (u.context = c),
            (a = h))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (u = e.stateNode),
        lc(t, e),
        (c = e.memoizedProps),
        (z = Bl(l, c)),
        (u.props = z),
        (M = e.pendingProps),
        (T = u.context),
        (E = l.contextType),
        (h = ia),
        typeof E == "object" && E !== null && (h = Vt(E)),
        (r = l.getDerivedStateFromProps),
        (E =
          typeof r == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c !== M || T !== h) && $r(e, u, a, h)),
        (el = !1),
        (T = e.memoizedState),
        (u.state = T),
        ln(e, a, u, n),
        en();
      var A = e.memoizedState;
      c !== M ||
      T !== A ||
      el ||
      (t !== null && t.dependencies !== null && nu(t.dependencies))
        ? (typeof r == "function" && (Ac(e, l, r, a), (A = e.memoizedState)),
          (z =
            el ||
            kr(e, l, z, a, T, A, h) ||
            (t !== null && t.dependencies !== null && nu(t.dependencies)))
            ? (E ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, A, h),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, A, h)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = A)),
          (u.props = a),
          (u.state = A),
          (u.context = h),
          (a = z))
        : (typeof u.componentDidUpdate != "function" ||
            (c === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Au(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = va(e, t.child, null, n)),
              (e.child = va(e, null, l, n)))
            : Gt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Ze(t, e, n)),
      t
    );
  }
  function ro(t, e, l, a) {
    return Ja(), (e.flags |= 256), Gt(t, e, l, a), e.child;
  }
  var Dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function zc(t) {
    return { baseLanes: t, cachePool: Fs() };
  }
  function Nc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= Ee), t;
  }
  function oo(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      c && ((n = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ot) {
        if ((n ? ul(e) : il(), ot)) {
          var r = _t,
            h;
          if ((h = r)) {
            t: {
              for (h = r, r = ze; h.nodeType !== 8; ) {
                if (!r) {
                  r = null;
                  break t;
                }
                if (((h = Re(h.nextSibling)), h === null)) {
                  r = null;
                  break t;
                }
              }
              r = h;
            }
            r !== null
              ? ((e.memoizedState = {
                  dehydrated: r,
                  treeContext: Nl !== null ? { id: Ye, overflow: Ge } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (h = ce(18, null, null, 0)),
                (h.stateNode = r),
                (h.return = e),
                (e.child = h),
                (kt = e),
                (_t = null),
                (h = !0))
              : (h = !1);
          }
          h || xl(e);
        }
        if (
          ((r = e.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null))
        )
          return hf(r) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        we(e);
      }
      return (
        (r = a.children),
        (a = a.fallback),
        n
          ? (il(),
            (n = e.mode),
            (r = Ou({ mode: "hidden", children: r }, n)),
            (a = zl(a, n, l, null)),
            (r.return = e),
            (a.return = e),
            (r.sibling = a),
            (e.child = r),
            (n = e.child),
            (n.memoizedState = zc(l)),
            (n.childLanes = Nc(t, c, l)),
            (e.memoizedState = Dc),
            a)
          : (ul(e), Uc(e, r))
      );
    }
    if (
      ((h = t.memoizedState), h !== null && ((r = h.dehydrated), r !== null))
    ) {
      if (u)
        e.flags & 256
          ? (ul(e), (e.flags &= -257), (e = Mc(t, e, l)))
          : e.memoizedState !== null
          ? (il(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (il(),
            (n = a.fallback),
            (r = e.mode),
            (a = Ou({ mode: "visible", children: a.children }, r)),
            (n = zl(n, r, l, null)),
            (n.flags |= 2),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            va(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = zc(l)),
            (a.childLanes = Nc(t, c, l)),
            (e.memoizedState = Dc),
            (e = n));
      else if ((ul(e), hf(r))) {
        if (((c = r.nextSibling && r.nextSibling.dataset), c)) var E = c.dgst;
        (c = E),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = c),
          ka({ value: a, source: null, stack: null }),
          (e = Mc(t, e, l));
      } else if (
        (qt || $a(t, e, l, !1), (c = (l & t.childLanes) !== 0), qt || c)
      ) {
        if (
          ((c = pt),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : hi(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), ua(t, a), de(c, t, a), lo);
        r.data === "$?" || $c(), (e = Mc(t, e, l));
      } else
        r.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = h.treeContext),
            (_t = Re(r.nextSibling)),
            (kt = e),
            (ot = !0),
            (Ml = null),
            (ze = !1),
            t !== null &&
              ((Se[be++] = Ye),
              (Se[be++] = Ge),
              (Se[be++] = Nl),
              (Ye = t.id),
              (Ge = t.overflow),
              (Nl = e)),
            (e = Uc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (il(),
        (n = a.fallback),
        (r = e.mode),
        (h = t.child),
        (E = h.sibling),
        (a = Be(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        E !== null ? (n = Be(E, n)) : ((n = zl(n, r, l, null)), (n.flags |= 2)),
        (n.return = e),
        (a.return = e),
        (a.sibling = n),
        (e.child = a),
        (a = n),
        (n = e.child),
        (r = t.child.memoizedState),
        r === null
          ? (r = zc(l))
          : ((h = r.cachePool),
            h !== null
              ? ((E = xt._currentValue),
                (h = h.parent !== E ? { parent: E, pool: E } : h))
              : (h = Fs()),
            (r = { baseLanes: r.baseLanes | l, cachePool: h })),
        (n.memoizedState = r),
        (n.childLanes = Nc(t, c, l)),
        (e.memoizedState = Dc),
        a)
      : (ul(e),
        (l = t.child),
        (t = l.sibling),
        (l = Be(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((c = e.deletions),
          c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Uc(t, e) {
    return (
      (e = Ou({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ou(t, e) {
    return (
      (t = ce(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Mc(t, e, l) {
    return (
      va(e, t.child, null, l),
      (t = Uc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function ho(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), $i(t.return, e, l);
  }
  function xc(t, e, l, a, n) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n));
  }
  function yo(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if ((Gt(t, e, a.children, l), (a = Ct.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && ho(t, l, e);
          else if (t.tag === 19) ho(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((q(Ct, a), n)) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate),
            t !== null && pu(t) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          xc(e, !1, n, l, u);
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && pu(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        xc(e, !0, l, null, u);
        break;
      case "together":
        xc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ze(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ol |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if (($a(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Be(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = Be(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function Cc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && nu(t)));
  }
  function P0(t, e, l) {
    switch (e.tag) {
      case 3:
        Tt(e, e.stateNode.containerInfo),
          tl(e, xt, t.memoizedState.cache),
          Ja();
        break;
      case 27:
      case 5:
        fi(e);
        break;
      case 4:
        Tt(e, e.stateNode.containerInfo);
        break;
      case 10:
        tl(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ul(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? oo(t, e, l)
            : (ul(e), (t = Ze(t, e, l)), t !== null ? t.sibling : null);
        ul(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || ($a(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return yo(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          q(Ct, Ct.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), io(t, e, l);
      case 24:
        tl(e, xt, t.memoizedState.cache);
    }
    return Ze(t, e, l);
  }
  function mo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) qt = !0;
      else {
        if (!Cc(t, l) && (e.flags & 128) === 0) return (qt = !1), P0(t, e, l);
        qt = (t.flags & 131072) !== 0;
      }
    else (qt = !1), ot && (e.flags & 1048576) !== 0 && Zs(e, au, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            n = a._init;
          if (((a = n(a._payload)), (e.type = a), typeof a == "function"))
            Qi(a)
              ? ((t = Bl(a, t)), (e.tag = 1), (e = so(null, e, a, t, l)))
              : ((e.tag = 0), (e = _c(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === rt)) {
                (e.tag = 11), (e = ao(null, e, a, t, l));
                break t;
              } else if (n === Et) {
                (e.tag = 14), (e = no(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = Tl(a) || a), Error(s(306, e, "")));
          }
        }
        return e;
      case 0:
        return _c(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = Bl(a, e.pendingProps)), so(t, e, a, n, l);
      case 3:
        t: {
          if ((Tt(e, e.stateNode.containerInfo), t === null))
            throw Error(s(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          (n = u.element), lc(t, e), ln(e, a, null, l);
          var c = e.memoizedState;
          if (
            ((a = c.cache),
            tl(e, xt, a),
            a !== u.cache && Wi(e, [xt], l, !0),
            en(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = ro(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = ve(Error(s(424)), e)), ka(n), (e = ro(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                _t = Re(t.firstChild),
                  kt = e,
                  ot = !0,
                  Ml = null,
                  ze = !0,
                  l = Kr(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Ja(), a === n)) {
              e = Ze(t, e, l);
              break t;
            }
            Gt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Au(t, e),
          t === null
            ? (l = bd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ot ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Yu(F.current).createElement(l)),
                (a[Zt] = e),
                (a[Wt] = t),
                Lt(a, l, t),
                jt(a),
                (e.stateNode = a))
            : (e.memoizedState = bd(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          fi(e),
          t === null &&
            ot &&
            ((a = e.stateNode = vd(e.type, e.pendingProps, F.current)),
            (kt = e),
            (ze = !0),
            (n = _t),
            ml(e.type) ? ((yf = n), (_t = Re(a.firstChild))) : (_t = n)),
          Gt(t, e, e.pendingProps.children, l),
          Au(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ot &&
            ((n = a = _t) &&
              ((a = _y(a, e.type, e.pendingProps, ze)),
              a !== null
                ? ((e.stateNode = a),
                  (kt = e),
                  (_t = Re(a.firstChild)),
                  (ze = !1),
                  (n = !0))
                : (n = !1)),
            n || xl(e)),
          fi(e),
          (n = e.type),
          (u = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = u.children),
          rf(n, u) ? (a = null) : c !== null && rf(n, c) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = fc(t, e, Z0, null, null, l)), (Rn._currentValue = n)),
          Au(t, e),
          Gt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ot &&
            ((t = l = _t) &&
              ((l = Dy(l, e.pendingProps, ze)),
              l !== null
                ? ((e.stateNode = l), (kt = e), (_t = null), (t = !0))
                : (t = !1)),
            t || xl(e)),
          null
        );
      case 13:
        return oo(t, e, l);
      case 4:
        return (
          Tt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = va(e, null, a, l)) : Gt(t, e, a, l),
          e.child
        );
      case 11:
        return ao(t, e, e.type, e.pendingProps, l);
      case 7:
        return Gt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Gt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Gt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          tl(e, e.type, a.value),
          Gt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Hl(e),
          (n = Vt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Gt(t, e, a, l),
          e.child
        );
      case 14:
        return no(t, e, e.type, e.pendingProps, l);
      case 15:
        return uo(t, e, e.type, e.pendingProps, l);
      case 19:
        return yo(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = Ou(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = Be(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return io(t, e, l);
      case 24:
        return (
          Hl(e),
          (a = Vt(xt)),
          t === null
            ? ((n = Ii()),
              n === null &&
                ((n = pt),
                (u = Fi()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              ec(e),
              tl(e, xt, n))
            : ((t.lanes & l) !== 0 && (lc(t, e), ln(e, null, null, l), en()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  tl(e, xt, a))
                : ((a = u.cache),
                  tl(e, xt, a),
                  a !== n.cache && Wi(e, [xt], l, !0))),
          Gt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function Ve(t) {
    t.flags |= 4;
  }
  function vo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Od(e))) {
      if (
        ((e = pe.current),
        e !== null &&
          ((ut & 4194048) === ut
            ? Ne !== null
            : ((ut & 62914560) !== ut && (ut & 536870912) === 0) || e !== Ne))
      )
        throw ((Ia = tc), Ps);
      t.flags |= 8192;
    }
  }
  function Ru(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Jf() : 536870912), (t.lanes |= e), (pa |= e));
  }
  function rn(t, e) {
    if (!ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ot(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function I0(t, e, l) {
    var a = e.pendingProps;
    switch ((Ki(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(e), null;
      case 1:
        return Ot(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Le(xt),
          We(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ka(e)
              ? Ve(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Js())),
          Ot(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Ve(e),
              l !== null ? (Ot(e), vo(e, l)) : (Ot(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (Ve(e), Ot(e), vo(e, l))
              : (Ot(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && Ve(e), Ot(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        qn(e), (l = F.current);
        var n = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ve(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(s(166));
            return Ot(e), null;
          }
          (t = V.current),
            Ka(e) ? Vs(e) : ((t = vd(n, a, l)), (e.stateNode = t), Ve(e));
        }
        return Ot(e), null;
      case 5:
        if ((qn(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ve(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(s(166));
            return Ot(e), null;
          }
          if (((t = V.current), Ka(e))) Vs(e);
          else {
            switch (((n = Yu(F.current)), t)) {
              case 1:
                t = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (t = n.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (t[Zt] = e), (t[Wt] = a);
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) break t;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            e.stateNode = t;
            t: switch ((Lt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ve(e);
          }
        }
        return Ot(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ve(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(s(166));
          if (((t = F.current), Ka(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = kt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Zt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                sd(t.nodeValue, l)
              )),
              t || xl(e);
          } else (t = Yu(t).createTextNode(a)), (t[Zt] = e), (e.stateNode = t);
        }
        return Ot(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = Ka(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(s(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(s(317));
              n[Zt] = e;
            } else
              Ja(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ot(e), (n = !1);
          } else
            (n = Js()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        if ((we(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (a = e.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          Ru(e, e.updateQueue),
          Ot(e),
          null
        );
      case 4:
        return We(), t === null && nf(e.stateNode.containerInfo), Ot(e), null;
      case 10:
        return Le(e.type), Ot(e), null;
      case 19:
        if ((G(Ct), (n = e.memoizedState), n === null)) return Ot(e), null;
        if (((a = (e.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) rn(n, !1);
          else {
            if (Dt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = pu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      rn(n, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ru(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    ws(l, t), (l = l.sibling);
                  return q(Ct, (Ct.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null &&
              De() > zu &&
              ((e.flags |= 128), (a = !0), rn(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = pu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ru(e, t),
                rn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !ot)
              )
                return Ot(e), null;
            } else
              2 * De() - n.renderingStartTime > zu &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), rn(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = n.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = De()),
            (e.sibling = null),
            (t = Ct.current),
            q(Ct, a ? (t & 1) | 2 : t & 1),
            e)
          : (Ot(e), null);
      case 22:
      case 23:
        return (
          we(e),
          ic(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ot(e),
          (l = e.updateQueue),
          l !== null && Ru(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && G(jl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Le(xt),
          Ot(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function ty(t, e) {
    switch ((Ki(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Le(xt),
          We(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return qn(e), null;
      case 13:
        if (
          (we(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(s(340));
          Ja();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return G(Ct), null;
      case 4:
        return We(), null;
      case 10:
        return Le(e.type), null;
      case 22:
      case 23:
        return (
          we(e),
          ic(),
          t !== null && G(jl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Le(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function go(t, e) {
    switch ((Ki(e), e.tag)) {
      case 3:
        Le(xt), We();
        break;
      case 26:
      case 27:
      case 5:
        qn(e);
        break;
      case 4:
        We();
        break;
      case 13:
        we(e);
        break;
      case 19:
        G(Ct);
        break;
      case 10:
        Le(e.type);
        break;
      case 22:
      case 23:
        we(e), ic(), t !== null && G(jl);
        break;
      case 24:
        Le(xt);
    }
  }
  function on(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              c = l.inst;
            (a = u()), (c.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      bt(e, e.return, r);
    }
  }
  function cl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              r = c.destroy;
            if (r !== void 0) {
              (c.destroy = void 0), (n = e);
              var h = l,
                E = r;
              try {
                E();
              } catch (z) {
                bt(n, h, z);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (z) {
      bt(e, e.return, z);
    }
  }
  function So(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        nr(e, l);
      } catch (a) {
        bt(t, t.return, a);
      }
    }
  }
  function bo(t, e, l) {
    (l.props = Bl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      bt(t, e, a);
    }
  }
  function dn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      bt(t, e, n);
    }
  }
  function Ue(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          bt(t, e, n);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          bt(t, e, n);
        }
      else l.current = null;
  }
  function po(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function Hc(t, e, l) {
    try {
      var a = t.stateNode;
      Ey(a, t.type, l, e), (a[Wt] = e);
    } catch (n) {
      bt(t, t.return, n);
    }
  }
  function Eo(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ml(t.type)) ||
      t.tag === 4
    );
  }
  function jc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Eo(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ml(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function qc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Bu));
    else if (
      a !== 4 &&
      (a === 27 && ml(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (qc(t, e, l), t = t.sibling; t !== null; )
        qc(t, e, l), (t = t.sibling);
  }
  function _u(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && ml(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (_u(t, e, l), t = t.sibling; t !== null; )
        _u(t, e, l), (t = t.sibling);
  }
  function To(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Lt(e, a, l), (e[Zt] = t), (e[Wt] = l);
    } catch (u) {
      bt(t, t.return, u);
    }
  }
  var Ke = !1,
    Nt = !1,
    Bc = !1,
    Ao = typeof WeakSet == "function" ? WeakSet : Set,
    Bt = null;
  function ey(t, e) {
    if (((t = t.containerInfo), (ff = Zu), (t = Cs(t)), ji(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0,
              r = -1,
              h = -1,
              E = 0,
              z = 0,
              M = t,
              T = null;
            e: for (;;) {
              for (
                var A;
                M !== l || (n !== 0 && M.nodeType !== 3) || (r = c + n),
                  M !== u || (a !== 0 && M.nodeType !== 3) || (h = c + a),
                  M.nodeType === 3 && (c += M.nodeValue.length),
                  (A = M.firstChild) !== null;

              )
                (T = M), (M = A);
              for (;;) {
                if (M === t) break e;
                if (
                  (T === l && ++E === n && (r = c),
                  T === u && ++z === a && (h = c),
                  (A = M.nextSibling) !== null)
                )
                  break;
                (M = T), (T = M.parentNode);
              }
              M = A;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      sf = { focusedElem: t, selectionRange: l }, Zu = !1, Bt = e;
      Bt !== null;

    )
      if (
        ((e = Bt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Bt = t);
      else
        for (; Bt !== null; ) {
          switch (((e = Bt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var $ = Bl(l.type, n, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate($, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (K) {
                  bt(l, l.return, K);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  df(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      df(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Bt = t);
            break;
          }
          Bt = e.return;
        }
  }
  function Oo(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fl(t, l), a & 4 && on(5, l);
        break;
      case 1:
        if ((fl(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (c) {
              bt(l, l.return, c);
            }
          else {
            var n = Bl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              bt(l, l.return, c);
            }
          }
        a & 64 && So(l), a & 512 && dn(l, l.return);
        break;
      case 3:
        if ((fl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            nr(t, e);
          } catch (c) {
            bt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && To(l);
      case 26:
      case 5:
        fl(t, l), e === null && a & 4 && po(l), a & 512 && dn(l, l.return);
        break;
      case 12:
        fl(t, l);
        break;
      case 13:
        fl(t, l),
          a & 4 && Do(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = ry.bind(null, l)), zy(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Ke), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Nt), (n = Ke);
          var u = Nt;
          (Ke = a),
            (Nt = e) && !u ? sl(t, l, (l.subtreeFlags & 8772) !== 0) : fl(t, l),
            (Ke = n),
            (Nt = u);
        }
        break;
      case 30:
        break;
      default:
        fl(t, l);
    }
  }
  function Ro(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Ro(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && vi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var At = null,
    It = !1;
  function Je(t, e, l) {
    for (l = l.child; l !== null; ) _o(t, e, l), (l = l.sibling);
  }
  function _o(t, e, l) {
    if (ne && typeof ne.onCommitFiberUnmount == "function")
      try {
        ne.onCommitFiberUnmount(xa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Nt || Ue(l, e),
          Je(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Nt || Ue(l, e);
        var a = At,
          n = It;
        ml(l.type) && ((At = l.stateNode), (It = !1)),
          Je(t, e, l),
          En(l.stateNode),
          (At = a),
          (It = n);
        break;
      case 5:
        Nt || Ue(l, e);
      case 6:
        if (
          ((a = At),
          (n = It),
          (At = null),
          Je(t, e, l),
          (At = a),
          (It = n),
          At !== null)
        )
          if (It)
            try {
              (At.nodeType === 9
                ? At.body
                : At.nodeName === "HTML"
                ? At.ownerDocument.body
                : At
              ).removeChild(l.stateNode);
            } catch (u) {
              bt(l, e, u);
            }
          else
            try {
              At.removeChild(l.stateNode);
            } catch (u) {
              bt(l, e, u);
            }
        break;
      case 18:
        At !== null &&
          (It
            ? ((t = At),
              yd(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              Nn(t))
            : yd(At, l.stateNode));
        break;
      case 4:
        (a = At),
          (n = It),
          (At = l.stateNode.containerInfo),
          (It = !0),
          Je(t, e, l),
          (At = a),
          (It = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nt || cl(2, l, e), Nt || cl(4, l, e), Je(t, e, l);
        break;
      case 1:
        Nt ||
          (Ue(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && bo(l, e, a)),
          Je(t, e, l);
        break;
      case 21:
        Je(t, e, l);
        break;
      case 22:
        (Nt = (a = Nt) || l.memoizedState !== null), Je(t, e, l), (Nt = a);
        break;
      default:
        Je(t, e, l);
    }
  }
  function Do(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Nn(t);
      } catch (l) {
        bt(e, e.return, l);
      }
  }
  function ly(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ao()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Ao()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Yc(t, e) {
    var l = ly(t);
    e.forEach(function (a) {
      var n = oy.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function fe(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          c = e,
          r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (ml(r.type)) {
                (At = r.stateNode), (It = !1);
                break t;
              }
              break;
            case 5:
              (At = r.stateNode), (It = !1);
              break t;
            case 3:
            case 4:
              (At = r.stateNode.containerInfo), (It = !0);
              break t;
          }
          r = r.return;
        }
        if (At === null) throw Error(s(160));
        _o(u, c, n),
          (At = null),
          (It = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) zo(e, t), (e = e.sibling);
  }
  var Oe = null;
  function zo(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fe(e, t),
          se(t),
          a & 4 && (cl(3, t, t.return), on(3, t), cl(5, t, t.return));
        break;
      case 1:
        fe(e, t),
          se(t),
          a & 512 && (Nt || l === null || Ue(l, l.return)),
          a & 64 &&
            Ke &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Oe;
        if (
          (fe(e, t),
          se(t),
          a & 512 && (Nt || l === null || Ue(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n);
                  e: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[ja] ||
                          u[Zt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        Lt(u, a, l),
                        (u[Zt] = t),
                        jt(u),
                        (a = u);
                      break t;
                    case "link":
                      var c = Td("link", "href", n).get(a + (l.href || ""));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (
                            ((u = c[r]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(r, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Lt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (c = Td("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (r = 0; r < c.length; r++)
                          if (
                            ((u = c[r]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(r, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Lt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  (u[Zt] = t), jt(u), (a = u);
                }
                t.stateNode = a;
              } else Ad(n, t.type, t.stateNode);
            else t.stateNode = Ed(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Ad(n, t.type, t.stateNode)
                  : Ed(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Hc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        fe(e, t),
          se(t),
          a & 512 && (Nt || l === null || Ue(l, l.return)),
          l !== null && a & 4 && Hc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (fe(e, t),
          se(t),
          a & 512 && (Nt || l === null || Ue(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            Pl(n, "");
          } catch (A) {
            bt(t, t.return, A);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Hc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Bc = !0);
        break;
      case 6:
        if ((fe(e, t), se(t), a & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (A) {
            bt(t, t.return, A);
          }
        }
        break;
      case 3:
        if (
          ((Lu = null),
          (n = Oe),
          (Oe = Gu(e.containerInfo)),
          fe(e, t),
          (Oe = n),
          se(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Nn(e.containerInfo);
          } catch (A) {
            bt(t, t.return, A);
          }
        Bc && ((Bc = !1), No(t));
        break;
      case 4:
        (a = Oe),
          (Oe = Gu(t.stateNode.containerInfo)),
          fe(e, t),
          se(t),
          (Oe = a);
        break;
      case 12:
        fe(e, t), se(t);
        break;
      case 13:
        fe(e, t),
          se(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Zc = De()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Yc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          E = Ke,
          z = Nt;
        if (
          ((Ke = E || n),
          (Nt = z || h),
          fe(e, t),
          (Nt = z),
          (Ke = E),
          se(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || h || Ke || Nt || Yl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (((u = h.stateNode), n))
                    (c = u.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    r = h.stateNode;
                    var M = h.memoizedProps.style,
                      T =
                        M != null && M.hasOwnProperty("display")
                          ? M.display
                          : null;
                    r.style.display =
                      T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (A) {
                  bt(h, h.return, A);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (A) {
                  bt(h, h.return, A);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Yc(t, l))));
        break;
      case 19:
        fe(e, t),
          se(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Yc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fe(e, t), se(t);
    }
  }
  function se(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Eo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = jc(t);
            _u(t, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Pl(c, ""), (l.flags &= -33));
            var r = jc(t);
            _u(t, r, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              E = jc(t);
            qc(t, E, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (z) {
        bt(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function No(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        No(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function fl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Oo(t, e.alternate, e), (e = e.sibling);
  }
  function Yl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cl(4, e, e.return), Yl(e);
          break;
        case 1:
          Ue(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && bo(e, e.return, l),
            Yl(e);
          break;
        case 27:
          En(e.stateNode);
        case 26:
        case 5:
          Ue(e, e.return), Yl(e);
          break;
        case 22:
          e.memoizedState === null && Yl(e);
          break;
        case 30:
          Yl(e);
          break;
        default:
          Yl(e);
      }
      t = t.sibling;
    }
  }
  function sl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          sl(n, u, l), on(4, u);
          break;
        case 1:
          if (
            (sl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (E) {
              bt(a, a.return, E);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var r = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  ar(h[n], r);
            } catch (E) {
              bt(a, a.return, E);
            }
          }
          l && c & 64 && So(u), dn(u, u.return);
          break;
        case 27:
          To(u);
        case 26:
        case 5:
          sl(n, u, l), l && a === null && c & 4 && po(u), dn(u, u.return);
          break;
        case 12:
          sl(n, u, l);
          break;
        case 13:
          sl(n, u, l), l && c & 4 && Do(n, u);
          break;
        case 22:
          u.memoizedState === null && sl(n, u, l), dn(u, u.return);
          break;
        case 30:
          break;
        default:
          sl(n, u, l);
      }
      e = e.sibling;
    }
  }
  function Gc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Wa(l));
  }
  function Xc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Wa(t));
  }
  function Me(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Uo(t, e, l, a), (e = e.sibling);
  }
  function Uo(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Me(t, e, l, a), n & 2048 && on(9, e);
        break;
      case 1:
        Me(t, e, l, a);
        break;
      case 3:
        Me(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Wa(t)));
        break;
      case 12:
        if (n & 2048) {
          Me(t, e, l, a), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              c = u.id,
              r = u.onPostCommit;
            typeof r == "function" &&
              r(
                c,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (h) {
            bt(e, e.return, h);
          }
        } else Me(t, e, l, a);
        break;
      case 13:
        Me(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (c = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Me(t, e, l, a)
              : hn(t, e)
            : u._visibility & 2
            ? Me(t, e, l, a)
            : ((u._visibility |= 2),
              ga(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          n & 2048 && Gc(c, e);
        break;
      case 24:
        Me(t, e, l, a), n & 2048 && Xc(e.alternate, e);
        break;
      default:
        Me(t, e, l, a);
    }
  }
  function ga(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        c = e,
        r = l,
        h = a,
        E = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ga(u, c, r, h, n), on(8, c);
          break;
        case 23:
          break;
        case 22:
          var z = c.stateNode;
          c.memoizedState !== null
            ? z._visibility & 2
              ? ga(u, c, r, h, n)
              : hn(u, c)
            : ((z._visibility |= 2), ga(u, c, r, h, n)),
            n && E & 2048 && Gc(c.alternate, c);
          break;
        case 24:
          ga(u, c, r, h, n), n && E & 2048 && Xc(c.alternate, c);
          break;
        default:
          ga(u, c, r, h, n);
      }
      e = e.sibling;
    }
  }
  function hn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            hn(l, a), n & 2048 && Gc(a.alternate, a);
            break;
          case 24:
            hn(l, a), n & 2048 && Xc(a.alternate, a);
            break;
          default:
            hn(l, a);
        }
        e = e.sibling;
      }
  }
  var yn = 8192;
  function Sa(t) {
    if (t.subtreeFlags & yn)
      for (t = t.child; t !== null; ) Mo(t), (t = t.sibling);
  }
  function Mo(t) {
    switch (t.tag) {
      case 26:
        Sa(t),
          t.flags & yn &&
            t.memoizedState !== null &&
            Ly(Oe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Sa(t);
        break;
      case 3:
      case 4:
        var e = Oe;
        (Oe = Gu(t.stateNode.containerInfo)), Sa(t), (Oe = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = yn), (yn = 16777216), Sa(t), (yn = e))
            : Sa(t));
        break;
      default:
        Sa(t);
    }
  }
  function xo(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function mn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Bt = a), Ho(a, t);
        }
      xo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Co(t), (t = t.sibling);
  }
  function Co(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        mn(t), t.flags & 2048 && cl(9, t, t.return);
        break;
      case 3:
        mn(t);
        break;
      case 12:
        mn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Du(t))
          : mn(t);
        break;
      default:
        mn(t);
    }
  }
  function Du(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Bt = a), Ho(a, t);
        }
      xo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          cl(8, e, e.return), Du(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Du(e));
          break;
        default:
          Du(e);
      }
      t = t.sibling;
    }
  }
  function Ho(t, e) {
    for (; Bt !== null; ) {
      var l = Bt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          cl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Wa(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Bt = a);
      else
        t: for (l = t; Bt !== null; ) {
          a = Bt;
          var n = a.sibling,
            u = a.return;
          if ((Ro(a), a === l)) {
            Bt = null;
            break t;
          }
          if (n !== null) {
            (n.return = u), (Bt = n);
            break t;
          }
          Bt = u;
        }
    }
  }
  var ay = {
      getCacheForType: function (t) {
        var e = Vt(xt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    ny = typeof WeakMap == "function" ? WeakMap : Map,
    dt = 0,
    pt = null,
    at = null,
    ut = 0,
    ht = 0,
    re = null,
    rl = !1,
    ba = !1,
    Lc = !1,
    ke = 0,
    Dt = 0,
    ol = 0,
    Gl = 0,
    Qc = 0,
    Ee = 0,
    pa = 0,
    vn = null,
    te = null,
    wc = !1,
    Zc = 0,
    zu = 1 / 0,
    Nu = null,
    dl = null,
    Xt = 0,
    hl = null,
    Ea = null,
    Ta = 0,
    Vc = 0,
    Kc = null,
    jo = null,
    gn = 0,
    Jc = null;
  function oe() {
    if ((dt & 2) !== 0 && ut !== 0) return ut & -ut;
    if (N.T !== null) {
      var t = sa;
      return t !== 0 ? t : tf();
    }
    return Wf();
  }
  function qo() {
    Ee === 0 && (Ee = (ut & 536870912) === 0 || ot ? Kf() : 536870912);
    var t = pe.current;
    return t !== null && (t.flags |= 32), Ee;
  }
  function de(t, e, l) {
    ((t === pt && (ht === 2 || ht === 9)) || t.cancelPendingCommit !== null) &&
      (Aa(t, 0), yl(t, ut, Ee, !1)),
      Ha(t, l),
      ((dt & 2) === 0 || t !== pt) &&
        (t === pt &&
          ((dt & 2) === 0 && (Gl |= l), Dt === 4 && yl(t, ut, Ee, !1)),
        xe(t));
  }
  function Bo(t, e, l) {
    if ((dt & 6) !== 0) throw Error(s(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ca(t, e),
      n = a ? cy(t, e) : Wc(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        ba && !a && yl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !uy(l))) {
          (n = Wc(t, e, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            (c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            e = c;
            t: {
              var r = t;
              n = vn;
              var h = r.current.memoizedState.isDehydrated;
              if ((h && (Aa(r, c).flags |= 256), (c = Wc(r, c, !1)), c !== 2)) {
                if (Lc && !h) {
                  (r.errorRecoveryDisabledLanes |= u), (Gl |= u), (n = 4);
                  break t;
                }
                (u = te),
                  (te = n),
                  u !== null && (te === null ? (te = u) : te.push.apply(te, u));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Aa(t, 0), yl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              yl(a, e, Ee, !rl);
              break t;
            case 2:
              te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && ((n = Zc + 300 - De()), 10 < n)) {
            if ((yl(a, e, Ee, !rl), Xn(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = dd(
              Yo.bind(null, a, l, te, Nu, wc, e, Ee, Gl, pa, rl, u, 2, -0, 0),
              n
            );
            break t;
          }
          Yo(a, l, te, Nu, wc, e, Ee, Gl, pa, rl, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    xe(t);
  }
  function Yo(t, e, l, a, n, u, c, r, h, E, z, M, T, A) {
    if (
      ((t.timeoutHandle = -1),
      (M = e.subtreeFlags),
      (M & 8192 || (M & 16785408) === 16785408) &&
        ((On = { stylesheets: null, count: 0, unsuspend: Xy }),
        Mo(e),
        (M = Qy()),
        M !== null))
    ) {
      (t.cancelPendingCommit = M(
        Vo.bind(null, t, e, u, l, a, n, c, r, h, z, 1, T, A)
      )),
        yl(t, u, c, !E);
      return;
    }
    Vo(t, e, u, l, a, n, c, r, h);
  }
  function uy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ie(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function yl(t, e, l, a) {
    (e &= ~Qc),
      (e &= ~Gl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var u = 31 - ue(n),
        c = 1 << u;
      (a[u] = -1), (n &= ~c);
    }
    l !== 0 && kf(t, l, e);
  }
  function Uu() {
    return (dt & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function kc() {
    if (at !== null) {
      if (ht === 0) var t = at.return;
      else (t = at), (Xe = Cl = null), oc(t), (ma = null), (fn = 0), (t = at);
      for (; t !== null; ) go(t.alternate, t), (t = t.return);
      at = null;
    }
  }
  function Aa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Ay(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      kc(),
      (pt = t),
      (at = l = Be(t.current, null)),
      (ut = e),
      (ht = 0),
      (re = null),
      (rl = !1),
      (ba = Ca(t, e)),
      (Lc = !1),
      (pa = Ee = Qc = Gl = ol = Dt = 0),
      (te = vn = null),
      (wc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ue(a),
          u = 1 << n;
        (e |= t[n]), (a &= ~u);
      }
    return (ke = e), Pn(), l;
  }
  function Go(t, e) {
    (et = null),
      (N.H = gu),
      e === Pa || e === cu
        ? ((e = er()), (ht = 3))
        : e === Ps
        ? ((e = er()), (ht = 4))
        : (ht =
            e === lo
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (re = e),
      at === null && ((Dt = 1), Tu(t, ve(e, t.current)));
  }
  function Xo() {
    var t = N.H;
    return (N.H = gu), t === null ? gu : t;
  }
  function Lo() {
    var t = N.A;
    return (N.A = ay), t;
  }
  function $c() {
    (Dt = 4),
      rl || ((ut & 4194048) !== ut && pe.current !== null) || (ba = !0),
      ((ol & 134217727) === 0 && (Gl & 134217727) === 0) ||
        pt === null ||
        yl(pt, ut, Ee, !1);
  }
  function Wc(t, e, l) {
    var a = dt;
    dt |= 2;
    var n = Xo(),
      u = Lo();
    (pt !== t || ut !== e) && ((Nu = null), Aa(t, e)), (e = !1);
    var c = Dt;
    t: do
      try {
        if (ht !== 0 && at !== null) {
          var r = at,
            h = re;
          switch (ht) {
            case 8:
              kc(), (c = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pe.current === null && (e = !0);
              var E = ht;
              if (((ht = 0), (re = null), Oa(t, r, h, E), l && ba)) {
                c = 0;
                break t;
              }
              break;
            default:
              (E = ht), (ht = 0), (re = null), Oa(t, r, h, E);
          }
        }
        iy(), (c = Dt);
        break;
      } catch (z) {
        Go(t, z);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Xe = Cl = null),
      (dt = a),
      (N.H = n),
      (N.A = u),
      at === null && ((pt = null), (ut = 0), Pn()),
      c
    );
  }
  function iy() {
    for (; at !== null; ) Qo(at);
  }
  function cy(t, e) {
    var l = dt;
    dt |= 2;
    var a = Xo(),
      n = Lo();
    pt !== t || ut !== e
      ? ((Nu = null), (zu = De() + 500), Aa(t, e))
      : (ba = Ca(t, e));
    t: do
      try {
        if (ht !== 0 && at !== null) {
          e = at;
          var u = re;
          e: switch (ht) {
            case 1:
              (ht = 0), (re = null), Oa(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Is(u)) {
                (ht = 0), (re = null), wo(e);
                break;
              }
              (e = function () {
                (ht !== 2 && ht !== 9) || pt !== t || (ht = 7), xe(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              Is(u)
                ? ((ht = 0), (re = null), wo(e))
                : ((ht = 0), (re = null), Oa(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (at.tag) {
                case 26:
                  c = at.memoizedState;
                case 5:
                case 27:
                  var r = at;
                  if (!c || Od(c)) {
                    (ht = 0), (re = null);
                    var h = r.sibling;
                    if (h !== null) at = h;
                    else {
                      var E = r.return;
                      E !== null ? ((at = E), Mu(E)) : (at = null);
                    }
                    break e;
                  }
              }
              (ht = 0), (re = null), Oa(t, e, u, 5);
              break;
            case 6:
              (ht = 0), (re = null), Oa(t, e, u, 6);
              break;
            case 8:
              kc(), (Dt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        fy();
        break;
      } catch (z) {
        Go(t, z);
      }
    while (!0);
    return (
      (Xe = Cl = null),
      (N.H = a),
      (N.A = n),
      (dt = l),
      at !== null ? 0 : ((pt = null), (ut = 0), Pn(), Dt)
    );
  }
  function fy() {
    for (; at !== null && !Uh(); ) Qo(at);
  }
  function Qo(t) {
    var e = mo(t.alternate, t, ke);
    (t.memoizedProps = t.pendingProps), e === null ? Mu(t) : (at = e);
  }
  function wo(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = fo(l, e, e.pendingProps, e.type, void 0, ut);
        break;
      case 11:
        e = fo(l, e, e.pendingProps, e.type.render, e.ref, ut);
        break;
      case 5:
        oc(e);
      default:
        go(l, e), (e = at = ws(e, ke)), (e = mo(l, e, ke));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Mu(t) : (at = e);
  }
  function Oa(t, e, l, a) {
    (Xe = Cl = null), oc(e), (ma = null), (fn = 0);
    var n = e.return;
    try {
      if (F0(t, n, e, l, ut)) {
        (Dt = 1), Tu(t, ve(l, t.current)), (at = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((at = n), u);
      (Dt = 1), Tu(t, ve(l, t.current)), (at = null);
      return;
    }
    e.flags & 32768
      ? (ot || a === 1
          ? (t = !0)
          : ba || (ut & 536870912) !== 0
          ? (t = !1)
          : ((rl = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = pe.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Zo(e, t))
      : Mu(e);
  }
  function Mu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Zo(e, rl);
        return;
      }
      t = e.return;
      var l = I0(e.alternate, e, ke);
      if (l !== null) {
        at = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    Dt === 0 && (Dt = 5);
  }
  function Zo(t, e) {
    do {
      var l = ty(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (at = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    (Dt = 6), (at = null);
  }
  function Vo(t, e, l, a, n, u, c, r, h) {
    t.cancelPendingCommit = null;
    do xu();
    while (Xt !== 0);
    if ((dt & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Xi),
        Xh(t, l, u, c, r, h),
        t === pt && ((at = pt = null), (ut = 0)),
        (Ea = e),
        (hl = t),
        (Ta = l),
        (Vc = u),
        (Kc = n),
        (jo = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            dy(Bn, function () {
              return Wo(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = N.T), (N.T = null), (n = B.p), (B.p = 2), (c = dt), (dt |= 4);
        try {
          ey(t, e, l);
        } finally {
          (dt = c), (B.p = n), (N.T = a);
        }
      }
      (Xt = 1), Ko(), Jo(), ko();
    }
  }
  function Ko() {
    if (Xt === 1) {
      Xt = 0;
      var t = hl,
        e = Ea,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = N.T), (N.T = null);
        var a = B.p;
        B.p = 2;
        var n = dt;
        dt |= 4;
        try {
          zo(e, t);
          var u = sf,
            c = Cs(t.containerInfo),
            r = u.focusedElem,
            h = u.selectionRange;
          if (
            c !== r &&
            r &&
            r.ownerDocument &&
            xs(r.ownerDocument.documentElement, r)
          ) {
            if (h !== null && ji(r)) {
              var E = h.start,
                z = h.end;
              if ((z === void 0 && (z = E), "selectionStart" in r))
                (r.selectionStart = E),
                  (r.selectionEnd = Math.min(z, r.value.length));
              else {
                var M = r.ownerDocument || document,
                  T = (M && M.defaultView) || window;
                if (T.getSelection) {
                  var A = T.getSelection(),
                    $ = r.textContent.length,
                    K = Math.min(h.start, $),
                    vt = h.end === void 0 ? K : Math.min(h.end, $);
                  !A.extend && K > vt && ((c = vt), (vt = K), (K = c));
                  var b = Ms(r, K),
                    v = Ms(r, vt);
                  if (
                    b &&
                    v &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== b.node ||
                      A.anchorOffset !== b.offset ||
                      A.focusNode !== v.node ||
                      A.focusOffset !== v.offset)
                  ) {
                    var p = M.createRange();
                    p.setStart(b.node, b.offset),
                      A.removeAllRanges(),
                      K > vt
                        ? (A.addRange(p), A.extend(v.node, v.offset))
                        : (p.setEnd(v.node, v.offset), A.addRange(p));
                  }
                }
              }
            }
            for (M = [], A = r; (A = A.parentNode); )
              A.nodeType === 1 &&
                M.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof r.focus == "function" && r.focus(), r = 0;
              r < M.length;
              r++
            ) {
              var U = M[r];
              (U.element.scrollLeft = U.left), (U.element.scrollTop = U.top);
            }
          }
          (Zu = !!ff), (sf = ff = null);
        } finally {
          (dt = n), (B.p = a), (N.T = l);
        }
      }
      (t.current = e), (Xt = 2);
    }
  }
  function Jo() {
    if (Xt === 2) {
      Xt = 0;
      var t = hl,
        e = Ea,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = N.T), (N.T = null);
        var a = B.p;
        B.p = 2;
        var n = dt;
        dt |= 4;
        try {
          Oo(t, e.alternate, e);
        } finally {
          (dt = n), (B.p = a), (N.T = l);
        }
      }
      Xt = 3;
    }
  }
  function ko() {
    if (Xt === 4 || Xt === 3) {
      (Xt = 0), Mh();
      var t = hl,
        e = Ea,
        l = Ta,
        a = jo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Xt = 5)
        : ((Xt = 0), (Ea = hl = null), $o(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (dl = null),
        yi(l),
        (e = e.stateNode),
        ne && typeof ne.onCommitFiberRoot == "function")
      )
        try {
          ne.onCommitFiberRoot(xa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = N.T), (n = B.p), (B.p = 2), (N.T = null);
        try {
          for (var u = t.onRecoverableError, c = 0; c < a.length; c++) {
            var r = a[c];
            u(r.value, { componentStack: r.stack });
          }
        } finally {
          (N.T = e), (B.p = n);
        }
      }
      (Ta & 3) !== 0 && xu(),
        xe(t),
        (n = t.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? t === Jc
            ? gn++
            : ((gn = 0), (Jc = t))
          : (gn = 0),
        Sn(0);
    }
  }
  function $o(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Wa(e)));
  }
  function xu(t) {
    return Ko(), Jo(), ko(), Wo();
  }
  function Wo() {
    if (Xt !== 5) return !1;
    var t = hl,
      e = Vc;
    Vc = 0;
    var l = yi(Ta),
      a = N.T,
      n = B.p;
    try {
      (B.p = 32 > l ? 32 : l), (N.T = null), (l = Kc), (Kc = null);
      var u = hl,
        c = Ta;
      if (((Xt = 0), (Ea = hl = null), (Ta = 0), (dt & 6) !== 0))
        throw Error(s(331));
      var r = dt;
      if (
        ((dt |= 4),
        Co(u.current),
        Uo(u, u.current, c, l),
        (dt = r),
        Sn(0, !1),
        ne && typeof ne.onPostCommitFiberRoot == "function")
      )
        try {
          ne.onPostCommitFiberRoot(xa, u);
        } catch {}
      return !0;
    } finally {
      (B.p = n), (N.T = a), $o(t, e);
    }
  }
  function Fo(t, e, l) {
    (e = ve(l, e)),
      (e = Rc(t.stateNode, e, 2)),
      (t = al(t, e, 2)),
      t !== null && (Ha(t, 2), xe(t));
  }
  function bt(t, e, l) {
    if (t.tag === 3) Fo(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Fo(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (dl === null || !dl.has(a)))
          ) {
            (t = ve(l, t)),
              (l = to(2)),
              (a = al(e, l, 2)),
              a !== null && (eo(l, a, e, t), Ha(a, 2), xe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Fc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new ny();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) ||
      ((Lc = !0), n.add(l), (t = sy.bind(null, t, e, l)), e.then(t, t));
  }
  function sy(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      pt === t &&
        (ut & l) === l &&
        (Dt === 4 || (Dt === 3 && (ut & 62914560) === ut && 300 > De() - Zc)
          ? (dt & 2) === 0 && Aa(t, 0)
          : (Qc |= l),
        pa === ut && (pa = 0)),
      xe(t);
  }
  function Po(t, e) {
    e === 0 && (e = Jf()), (t = ua(t, e)), t !== null && (Ha(t, e), xe(t));
  }
  function ry(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Po(t, l);
  }
  function oy(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(e), Po(t, l);
  }
  function dy(t, e) {
    return ri(t, e);
  }
  var Cu = null,
    Ra = null,
    Pc = !1,
    Hu = !1,
    Ic = !1,
    Xl = 0;
  function xe(t) {
    t !== Ra &&
      t.next === null &&
      (Ra === null ? (Cu = Ra = t) : (Ra = Ra.next = t)),
      (Hu = !0),
      Pc || ((Pc = !0), yy());
  }
  function Sn(t, e) {
    if (!Ic && Hu) {
      Ic = !0;
      do
        for (var l = !1, a = Cu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                r = a.pingedLanes;
              (u = (1 << (31 - ue(42 | t) + 1)) - 1),
                (u &= n & ~(c & ~r)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), ld(a, u));
          } else
            (u = ut),
              (u = Xn(
                a,
                a === pt ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ca(a, u) || ((l = !0), ld(a, u));
          a = a.next;
        }
      while (l);
      Ic = !1;
    }
  }
  function hy() {
    Io();
  }
  function Io() {
    Hu = Pc = !1;
    var t = 0;
    Xl !== 0 && (Ty() && (t = Xl), (Xl = 0));
    for (var e = De(), l = null, a = Cu; a !== null; ) {
      var n = a.next,
        u = td(a, e);
      u === 0
        ? ((a.next = null),
          l === null ? (Cu = n) : (l.next = n),
          n === null && (Ra = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (Hu = !0)),
        (a = n);
    }
    Sn(t);
  }
  function td(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - ue(u),
        r = 1 << c,
        h = n[c];
      h === -1
        ? ((r & l) === 0 || (r & a) !== 0) && (n[c] = Gh(r, e))
        : h <= e && (t.expiredLanes |= r),
        (u &= ~r);
    }
    if (
      ((e = pt),
      (l = ut),
      (l = Xn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (ht === 2 || ht === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && oi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ca(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && oi(a), yi(l))) {
        case 2:
        case 8:
          l = Zf;
          break;
        case 32:
          l = Bn;
          break;
        case 268435456:
          l = Vf;
          break;
        default:
          l = Bn;
      }
      return (
        (a = ed.bind(null, t)),
        (l = ri(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && oi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ed(t, e) {
    if (Xt !== 0 && Xt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (xu() && t.callbackNode !== l) return null;
    var a = ut;
    return (
      (a = Xn(
        t,
        t === pt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Bo(t, a, e),
          td(t, De()),
          t.callbackNode != null && t.callbackNode === l
            ? ed.bind(null, t)
            : null)
    );
  }
  function ld(t, e) {
    if (xu()) return null;
    Bo(t, e, !0);
  }
  function yy() {
    Oy(function () {
      (dt & 6) !== 0 ? ri(wf, hy) : Io();
    });
  }
  function tf() {
    return Xl === 0 && (Xl = Kf()), Xl;
  }
  function ad(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Vn("" + t);
  }
  function nd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function my(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = ad((n[Wt] || null).action),
        c = a.submitter;
      c &&
        ((e = (e = c[Wt] || null)
          ? ad(e.formAction)
          : c.getAttribute("formAction")),
        e !== null && ((u = e), (c = null)));
      var r = new $n("action", "action", null, a, n);
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Xl !== 0) {
                  var h = c ? nd(n, c) : new FormData(n);
                  pc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h
                  );
                }
              } else
                typeof u == "function" &&
                  (r.preventDefault(),
                  (h = c ? nd(n, c) : new FormData(n)),
                  pc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    u,
                    h
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var ef = 0; ef < Gi.length; ef++) {
    var lf = Gi[ef],
      vy = lf.toLowerCase(),
      gy = lf[0].toUpperCase() + lf.slice(1);
    Ae(vy, "on" + gy);
  }
  Ae(qs, "onAnimationEnd"),
    Ae(Bs, "onAnimationIteration"),
    Ae(Ys, "onAnimationStart"),
    Ae("dblclick", "onDoubleClick"),
    Ae("focusin", "onFocus"),
    Ae("focusout", "onBlur"),
    Ae(H0, "onTransitionRun"),
    Ae(j0, "onTransitionStart"),
    Ae(q0, "onTransitionCancel"),
    Ae(Gs, "onTransitionEnd"),
    $l("onMouseEnter", ["mouseout", "mouseover"]),
    $l("onMouseLeave", ["mouseout", "mouseover"]),
    $l("onPointerEnter", ["pointerout", "pointerover"]),
    $l("onPointerLeave", ["pointerout", "pointerover"]),
    Ol(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ol(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ol("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ol(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ol(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ol(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var bn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Sy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(bn)
    );
  function ud(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var r = a[c],
              h = r.instance,
              E = r.currentTarget;
            if (((r = r.listener), h !== u && n.isPropagationStopped()))
              break t;
            (u = r), (n.currentTarget = E);
            try {
              u(n);
            } catch (z) {
              Eu(z);
            }
            (n.currentTarget = null), (u = h);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((r = a[c]),
              (h = r.instance),
              (E = r.currentTarget),
              (r = r.listener),
              h !== u && n.isPropagationStopped())
            )
              break t;
            (u = r), (n.currentTarget = E);
            try {
              u(n);
            } catch (z) {
              Eu(z);
            }
            (n.currentTarget = null), (u = h);
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[mi];
    l === void 0 && (l = e[mi] = new Set());
    var a = t + "__bubble";
    l.has(a) || (id(e, t, 2, !1), l.add(a));
  }
  function af(t, e, l) {
    var a = 0;
    e && (a |= 4), id(l, t, a, e);
  }
  var ju = "_reactListening" + Math.random().toString(36).slice(2);
  function nf(t) {
    if (!t[ju]) {
      (t[ju] = !0),
        Pf.forEach(function (l) {
          l !== "selectionchange" && (Sy.has(l) || af(l, !1, t), af(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ju] || ((e[ju] = !0), af("selectionchange", !1, e));
    }
  }
  function id(t, e, l, a) {
    switch (Ud(e)) {
      case 2:
        var n = Vy;
        break;
      case 8:
        n = Ky;
        break;
      default:
        n = bf;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !_i ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
        ? t.addEventListener(e, l, { passive: n })
        : t.addEventListener(e, l, !1);
  }
  function uf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var h = c.tag;
              if ((h === 3 || h === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; r !== null; ) {
            if (((c = Kl(r)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = u = c;
              continue t;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    ds(function () {
      var E = u,
        z = Oi(l),
        M = [];
      t: {
        var T = Xs.get(t);
        if (T !== void 0) {
          var A = $n,
            $ = t;
          switch (t) {
            case "keypress":
              if (Jn(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = d0;
              break;
            case "focusin":
              ($ = "focus"), (A = Ui);
              break;
            case "focusout":
              ($ = "blur"), (A = Ui);
              break;
            case "beforeblur":
            case "afterblur":
              A = Ui;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = t0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = m0;
              break;
            case qs:
            case Bs:
            case Ys:
              A = a0;
              break;
            case Gs:
              A = g0;
              break;
            case "scroll":
            case "scrollend":
              A = Ph;
              break;
            case "wheel":
              A = b0;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = u0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = gs;
              break;
            case "toggle":
            case "beforetoggle":
              A = E0;
          }
          var K = (e & 4) !== 0,
            vt = !K && (t === "scroll" || t === "scrollend"),
            b = K ? (T !== null ? T + "Capture" : null) : T;
          K = [];
          for (var v = E, p; v !== null; ) {
            var U = v;
            if (
              ((p = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                p === null ||
                b === null ||
                ((U = Ba(v, b)), U != null && K.push(pn(v, U, p))),
              vt)
            )
              break;
            v = v.return;
          }
          0 < K.length &&
            ((T = new A(T, $, null, l, z)), M.push({ event: T, listeners: K }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === "mouseover" || t === "pointerover"),
            (A = t === "mouseout" || t === "pointerout"),
            T &&
              l !== Ai &&
              ($ = l.relatedTarget || l.fromElement) &&
              (Kl($) || $[Vl]))
          )
            break t;
          if (
            (A || T) &&
            ((T =
              z.window === z
                ? z
                : (T = z.ownerDocument)
                ? T.defaultView || T.parentWindow
                : window),
            A
              ? (($ = l.relatedTarget || l.toElement),
                (A = E),
                ($ = $ ? Kl($) : null),
                $ !== null &&
                  ((vt = y($)),
                  (K = $.tag),
                  $ !== vt || (K !== 5 && K !== 27 && K !== 6)) &&
                  ($ = null))
              : ((A = null), ($ = E)),
            A !== $)
          ) {
            if (
              ((K = ms),
              (U = "onMouseLeave"),
              (b = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((K = gs),
                (U = "onPointerLeave"),
                (b = "onPointerEnter"),
                (v = "pointer")),
              (vt = A == null ? T : qa(A)),
              (p = $ == null ? T : qa($)),
              (T = new K(U, v + "leave", A, l, z)),
              (T.target = vt),
              (T.relatedTarget = p),
              (U = null),
              Kl(z) === E &&
                ((K = new K(b, v + "enter", $, l, z)),
                (K.target = p),
                (K.relatedTarget = vt),
                (U = K)),
              (vt = U),
              A && $)
            )
              e: {
                for (K = A, b = $, v = 0, p = K; p; p = _a(p)) v++;
                for (p = 0, U = b; U; U = _a(U)) p++;
                for (; 0 < v - p; ) (K = _a(K)), v--;
                for (; 0 < p - v; ) (b = _a(b)), p--;
                for (; v--; ) {
                  if (K === b || (b !== null && K === b.alternate)) break e;
                  (K = _a(K)), (b = _a(b));
                }
                K = null;
              }
            else K = null;
            A !== null && cd(M, T, A, K, !1),
              $ !== null && vt !== null && cd(M, vt, $, K, !0);
          }
        }
        t: {
          if (
            ((T = E ? qa(E) : window),
            (A = T.nodeName && T.nodeName.toLowerCase()),
            A === "select" || (A === "input" && T.type === "file"))
          )
            var L = Rs;
          else if (As(T))
            if (_s) L = M0;
            else {
              L = N0;
              var lt = z0;
            }
          else
            (A = T.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (T.type !== "checkbox" && T.type !== "radio")
                ? E && Ti(E.elementType) && (L = Rs)
                : (L = U0);
          if (L && (L = L(t, E))) {
            Os(M, L, l, z);
            break t;
          }
          lt && lt(t, T, E),
            t === "focusout" &&
              E &&
              T.type === "number" &&
              E.memoizedProps.value != null &&
              Ei(T, "number", T.value);
        }
        switch (((lt = E ? qa(E) : window), t)) {
          case "focusin":
            (As(lt) || lt.contentEditable === "true") &&
              ((la = lt), (qi = E), (Va = null));
            break;
          case "focusout":
            Va = qi = la = null;
            break;
          case "mousedown":
            Bi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Bi = !1), Hs(M, l, z);
            break;
          case "selectionchange":
            if (C0) break;
          case "keydown":
          case "keyup":
            Hs(M, l, z);
        }
        var w;
        if (xi)
          t: {
            switch (t) {
              case "compositionstart":
                var J = "onCompositionStart";
                break t;
              case "compositionend":
                J = "onCompositionEnd";
                break t;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break t;
            }
            J = void 0;
          }
        else
          ea
            ? Es(t, l) && (J = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (J = "onCompositionStart");
        J &&
          (Ss &&
            l.locale !== "ko" &&
            (ea || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && ea && (w = hs())
              : ((Ie = z),
                (Di = "value" in Ie ? Ie.value : Ie.textContent),
                (ea = !0))),
          (lt = qu(E, J)),
          0 < lt.length &&
            ((J = new vs(J, t, null, l, z)),
            M.push({ event: J, listeners: lt }),
            w ? (J.data = w) : ((w = Ts(l)), w !== null && (J.data = w)))),
          (w = A0 ? O0(t, l) : R0(t, l)) &&
            ((J = qu(E, "onBeforeInput")),
            0 < J.length &&
              ((lt = new vs("onBeforeInput", "beforeinput", null, l, z)),
              M.push({ event: lt, listeners: J }),
              (lt.data = w))),
          my(M, t, E, l, z);
      }
      ud(M, e);
    });
  }
  function pn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function qu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ba(t, l)),
          n != null && a.unshift(pn(t, n, u)),
          (n = Ba(t, e)),
          n != null && a.push(pn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function _a(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function cd(t, e, l, a, n) {
    for (var u = e._reactName, c = []; l !== null && l !== a; ) {
      var r = l,
        h = r.alternate,
        E = r.stateNode;
      if (((r = r.tag), h !== null && h === a)) break;
      (r !== 5 && r !== 26 && r !== 27) ||
        E === null ||
        ((h = E),
        n
          ? ((E = Ba(l, u)), E != null && c.unshift(pn(l, E, h)))
          : n || ((E = Ba(l, u)), E != null && c.push(pn(l, E, h)))),
        (l = l.return);
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var by = /\r\n?/g,
    py = /\u0000|\uFFFD/g;
  function fd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        by,
        `
`
      )
      .replace(py, "");
  }
  function sd(t, e) {
    return (e = fd(e)), fd(t) === e;
  }
  function Bu() {}
  function mt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Pl(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Pl(t, "" + a);
        break;
      case "className":
        Qn(t, "class", a);
        break;
      case "tabIndex":
        Qn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qn(t, l, a);
        break;
      case "style":
        rs(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Qn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Vn("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (e !== "input" && mt(t, e, "name", n.name, n, null),
                mt(t, e, "formEncType", n.formEncType, n, null),
                mt(t, e, "formMethod", n.formMethod, n, null),
                mt(t, e, "formTarget", n.formTarget, n, null))
              : (mt(t, e, "encType", n.encType, n, null),
                mt(t, e, "method", n.method, n, null),
                mt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Vn("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Bu);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Vn("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), Ln(t, "popover", a);
        break;
      case "xlinkActuate":
        je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        je(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        je(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        je(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        je(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ln(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Wh.get(l) || l), Ln(t, l, a));
    }
  }
  function cf(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        rs(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Pl(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Pl(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Bu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!If.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Wt] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && t.removeEventListener(e, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Ln(t, l, a);
          }
    }
  }
  function Lt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        nt("error", t), nt("load", t);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  mt(t, e, u, c, l, null);
              }
          }
        n && mt(t, e, "srcSet", l.srcSet, l, null),
          a && mt(t, e, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var r = (u = c = n = null),
          h = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a];
            if (z != null)
              switch (a) {
                case "name":
                  n = z;
                  break;
                case "type":
                  c = z;
                  break;
                case "checked":
                  h = z;
                  break;
                case "defaultChecked":
                  E = z;
                  break;
                case "value":
                  u = z;
                  break;
                case "defaultValue":
                  r = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(s(137, e));
                  break;
                default:
                  mt(t, e, a, z, l, null);
              }
          }
        is(t, u, r, h, E, c, n, !1), wn(t);
        return;
      case "select":
        nt("invalid", t), (a = c = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((r = l[n]), r != null))
            switch (n) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "multiple":
                a = r;
              default:
                mt(t, e, n, r, l, null);
            }
        (e = u),
          (l = c),
          (t.multiple = !!a),
          e != null ? Fl(t, !!a, e, !1) : l != null && Fl(t, !!a, l, !0);
        return;
      case "textarea":
        nt("invalid", t), (u = n = a = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((r = l[c]), r != null))
            switch (c) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                u = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(s(91));
                break;
              default:
                mt(t, e, c, r, l, null);
            }
        fs(t, a, n, u), wn(t);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && ((a = l[h]), a != null))
            switch (h) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                mt(t, e, h, a, l, null);
            }
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bn.length; a++) nt(bn[a], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                mt(t, e, E, a, l, null);
            }
        return;
      default:
        if (Ti(e)) {
          for (z in l)
            l.hasOwnProperty(z) &&
              ((a = l[z]), a !== void 0 && cf(t, e, z, a, l, void 0));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && ((a = l[r]), a != null && mt(t, e, r, a, l, null));
  }
  function Ey(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          c = null,
          r = null,
          h = null,
          E = null,
          z = null;
        for (A in l) {
          var M = l[A];
          if (l.hasOwnProperty(A) && M != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = M;
              default:
                a.hasOwnProperty(A) || mt(t, e, A, null, a, M);
            }
        }
        for (var T in a) {
          var A = a[T];
          if (((M = l[T]), a.hasOwnProperty(T) && (A != null || M != null)))
            switch (T) {
              case "type":
                u = A;
                break;
              case "name":
                n = A;
                break;
              case "checked":
                E = A;
                break;
              case "defaultChecked":
                z = A;
                break;
              case "value":
                c = A;
                break;
              case "defaultValue":
                r = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(s(137, e));
                break;
              default:
                A !== M && mt(t, e, T, A, a, M);
            }
        }
        pi(t, c, r, h, E, z, u, n);
        return;
      case "select":
        A = c = r = T = null;
        for (u in l)
          if (((h = l[u]), l.hasOwnProperty(u) && h != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                A = h;
              default:
                a.hasOwnProperty(u) || mt(t, e, u, null, a, h);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (h = l[n]),
            a.hasOwnProperty(n) && (u != null || h != null))
          )
            switch (n) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== h && mt(t, e, n, u, a, h);
            }
        (e = r),
          (l = c),
          (a = A),
          T != null
            ? Fl(t, !!l, T, !1)
            : !!a != !!l &&
              (e != null ? Fl(t, !!l, e, !0) : Fl(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        A = T = null;
        for (r in l)
          if (
            ((n = l[r]),
            l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                mt(t, e, r, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                A = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== u && mt(t, e, c, n, a, u);
            }
        cs(t, T, A);
        return;
      case "option":
        for (var $ in l)
          if (
            ((T = l[$]),
            l.hasOwnProperty($) && T != null && !a.hasOwnProperty($))
          )
            switch ($) {
              case "selected":
                t.selected = !1;
                break;
              default:
                mt(t, e, $, null, a, T);
            }
        for (h in a)
          if (
            ((T = a[h]),
            (A = l[h]),
            a.hasOwnProperty(h) && T !== A && (T != null || A != null))
          )
            switch (h) {
              case "selected":
                t.selected =
                  T && typeof T != "function" && typeof T != "symbol";
                break;
              default:
                mt(t, e, h, T, a, A);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var K in l)
          (T = l[K]),
            l.hasOwnProperty(K) &&
              T != null &&
              !a.hasOwnProperty(K) &&
              mt(t, e, K, null, a, T);
        for (E in a)
          if (
            ((T = a[E]),
            (A = l[E]),
            a.hasOwnProperty(E) && T !== A && (T != null || A != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(s(137, e));
                break;
              default:
                mt(t, e, E, T, a, A);
            }
        return;
      default:
        if (Ti(e)) {
          for (var vt in l)
            (T = l[vt]),
              l.hasOwnProperty(vt) &&
                T !== void 0 &&
                !a.hasOwnProperty(vt) &&
                cf(t, e, vt, void 0, a, T);
          for (z in a)
            (T = a[z]),
              (A = l[z]),
              !a.hasOwnProperty(z) ||
                T === A ||
                (T === void 0 && A === void 0) ||
                cf(t, e, z, T, a, A);
          return;
        }
    }
    for (var b in l)
      (T = l[b]),
        l.hasOwnProperty(b) &&
          T != null &&
          !a.hasOwnProperty(b) &&
          mt(t, e, b, null, a, T);
    for (M in a)
      (T = a[M]),
        (A = l[M]),
        !a.hasOwnProperty(M) ||
          T === A ||
          (T == null && A == null) ||
          mt(t, e, M, T, a, A);
  }
  var ff = null,
    sf = null;
  function Yu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function rd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function od(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function rf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var of = null;
  function Ty() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === of
        ? !1
        : ((of = t), !0)
      : ((of = null), !1);
  }
  var dd = typeof setTimeout == "function" ? setTimeout : void 0,
    Ay = typeof clearTimeout == "function" ? clearTimeout : void 0,
    hd = typeof Promise == "function" ? Promise : void 0,
    Oy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof hd < "u"
        ? function (t) {
            return hd.resolve(null).then(t).catch(Ry);
          }
        : dd;
  function Ry(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ml(t) {
    return t === "head";
  }
  function yd(t, e) {
    var l = e,
      a = 0,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var c = t.ownerDocument;
            if ((l & 1 && En(c.documentElement), l & 2 && En(c.body), l & 4))
              for (l = c.head, En(l), c = l.firstChild; c; ) {
                var r = c.nextSibling,
                  h = c.nodeName;
                c[ja] ||
                  h === "SCRIPT" ||
                  h === "STYLE" ||
                  (h === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(c),
                  (c = r);
              }
          }
          if (n === 0) {
            t.removeChild(u), Nn(e);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = u;
    } while (l);
    Nn(e);
  }
  function df(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          df(l), vi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function _y(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[ja])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Re(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Dy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Re(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function hf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function zy(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Re(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var yf = null;
  function md(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function vd(t, e, l) {
    switch (((e = Yu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function En(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    vi(t);
  }
  var Te = new Map(),
    gd = new Set();
  function Gu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var $e = B.d;
  B.d = { f: Ny, r: Uy, D: My, C: xy, L: Cy, m: Hy, X: qy, S: jy, M: By };
  function Ny() {
    var t = $e.f(),
      e = Uu();
    return t || e;
  }
  function Uy(t) {
    var e = Jl(t);
    e !== null && e.tag === 5 && e.type === "form" ? qr(e) : $e.r(t);
  }
  var Da = typeof document > "u" ? null : document;
  function Sd(t, e, l) {
    var a = Da;
    if (a && typeof e == "string" && e) {
      var n = me(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        gd.has(n) ||
          (gd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            Lt(e, "link", t),
            jt(e),
            a.head.appendChild(e)));
    }
  }
  function My(t) {
    $e.D(t), Sd("dns-prefetch", t, null);
  }
  function xy(t, e) {
    $e.C(t, e), Sd("preconnect", t, e);
  }
  function Cy(t, e, l) {
    $e.L(t, e, l);
    var a = Da;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + me(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + me(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + me(l.imageSizes) + '"]'))
        : (n += '[href="' + me(t) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = za(t);
          break;
        case "script":
          u = Na(t);
      }
      Te.has(u) ||
        ((t = O(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        Te.set(u, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(Tn(u))) ||
          (e === "script" && a.querySelector(An(u))) ||
          ((e = a.createElement("link")),
          Lt(e, "link", t),
          jt(e),
          a.head.appendChild(e)));
    }
  }
  function Hy(t, e) {
    $e.m(t, e);
    var l = Da;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + me(a) + '"][href="' + me(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Na(t);
      }
      if (
        !Te.has(u) &&
        ((t = O({ rel: "modulepreload", href: t }, e)),
        Te.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(An(u))) return;
        }
        (a = l.createElement("link")),
          Lt(a, "link", t),
          jt(a),
          l.head.appendChild(a);
      }
    }
  }
  function jy(t, e, l) {
    $e.S(t, e, l);
    var a = Da;
    if (a && t) {
      var n = kl(a).hoistableStyles,
        u = za(t);
      e = e || "default";
      var c = n.get(u);
      if (!c) {
        var r = { loading: 0, preload: null };
        if ((c = a.querySelector(Tn(u)))) r.loading = 5;
        else {
          (t = O({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Te.get(u)) && mf(t, l);
          var h = (c = a.createElement("link"));
          jt(h),
            Lt(h, "link", t),
            (h._p = new Promise(function (E, z) {
              (h.onload = E), (h.onerror = z);
            })),
            h.addEventListener("load", function () {
              r.loading |= 1;
            }),
            h.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            Xu(c, e, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: r }),
          n.set(u, c);
      }
    }
  }
  function qy(t, e) {
    $e.X(t, e);
    var l = Da;
    if (l && t) {
      var a = kl(l).hoistableScripts,
        n = Na(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(An(n))),
        u ||
          ((t = O({ src: t, async: !0 }, e)),
          (e = Te.get(n)) && vf(t, e),
          (u = l.createElement("script")),
          jt(u),
          Lt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function By(t, e) {
    $e.M(t, e);
    var l = Da;
    if (l && t) {
      var a = kl(l).hoistableScripts,
        n = Na(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(An(n))),
        u ||
          ((t = O({ src: t, async: !0, type: "module" }, e)),
          (e = Te.get(n)) && vf(t, e),
          (u = l.createElement("script")),
          jt(u),
          Lt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function bd(t, e, l, a) {
    var n = (n = F.current) ? Gu(n) : null;
    if (!n) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = za(l.href)),
            (l = kl(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = za(l.href);
          var u = kl(n).hoistableStyles,
            c = u.get(t);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, c),
              (u = n.querySelector(Tn(t))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              Te.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Te.set(t, l),
                u || Yy(n, t, l, c.state))),
            e && a === null)
          )
            throw Error(s(528, ""));
          return c;
        }
        if (e && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Na(l)),
              (l = kl(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function za(t) {
    return 'href="' + me(t) + '"';
  }
  function Tn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function pd(t) {
    return O({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Yy(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Lt(e, "link", l),
        jt(e),
        t.head.appendChild(e));
  }
  function Na(t) {
    return '[src="' + me(t) + '"]';
  }
  function An(t) {
    return "script[async]" + t;
  }
  function Ed(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + me(l.href) + '"]');
          if (a) return (e.instance = a), jt(a), a;
          var n = O({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            jt(a),
            Lt(a, "style", n),
            Xu(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = za(l.href);
          var u = t.querySelector(Tn(n));
          if (u) return (e.state.loading |= 4), (e.instance = u), jt(u), u;
          (a = pd(l)),
            (n = Te.get(n)) && mf(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            jt(u);
          var c = u;
          return (
            (c._p = new Promise(function (r, h) {
              (c.onload = r), (c.onerror = h);
            })),
            Lt(u, "link", a),
            (e.state.loading |= 4),
            Xu(u, l.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Na(l.src)),
            (n = t.querySelector(An(u)))
              ? ((e.instance = n), jt(n), n)
              : ((a = l),
                (n = Te.get(u)) && ((a = O({}, l)), vf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                jt(n),
                Lt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Xu(a, l.precedence, t));
    return e.instance;
  }
  function Xu(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var r = a[c];
      if (r.dataset.precedence === e) u = r;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function mf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function vf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Lu = null;
  function Td(t, e, l) {
    if (Lu === null) {
      var a = new Map(),
        n = (Lu = new Map());
      n.set(l, a);
    } else (n = Lu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[ja] ||
          u[Zt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var r = a.get(c);
        r ? r.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Ad(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Gy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Od(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var On = null;
  function Xy() {}
  function Ly(t, e, l) {
    if (On === null) throw Error(s(475));
    var a = On;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = za(l.href),
          u = t.querySelector(Tn(n));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Qu.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = u),
            jt(u);
          return;
        }
        (u = t.ownerDocument || t),
          (l = pd(l)),
          (n = Te.get(n)) && mf(l, n),
          (u = u.createElement("link")),
          jt(u);
        var c = u;
        (c._p = new Promise(function (r, h) {
          (c.onload = r), (c.onerror = h);
        })),
          Lt(u, "link", l),
          (e.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Qu.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Qy() {
    if (On === null) throw Error(s(475));
    var t = On;
    return (
      t.stylesheets && t.count === 0 && gf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && gf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Qu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) gf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var wu = null;
  function gf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (wu = new Map()),
        e.forEach(wy, t),
        (wu = null),
        Qu.call(t));
  }
  function wy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = wu.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), wu.set(t, l);
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (c = n.getAttribute("data-precedence")),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Qu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Rn = {
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function Zy(t, e, l, a, n, u, c, r) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = di(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = di(0)),
      (this.hiddenUpdates = di(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map());
  }
  function Rd(t, e, l, a, n, u, c, r, h, E, z, M) {
    return (
      (t = new Zy(t, e, l, c, r, h, E, M)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = ce(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Fi()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      ec(u),
      t
    );
  }
  function _d(t) {
    return t ? ((t = ia), t) : ia;
  }
  function Dd(t, e, l, a, n, u) {
    (n = _d(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ll(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = al(t, a, e)),
      l !== null && (de(l, t, e), tn(l, t, e));
  }
  function zd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Sf(t, e) {
    zd(t, e), (t = t.alternate) && zd(t, e);
  }
  function Nd(t) {
    if (t.tag === 13) {
      var e = ua(t, 67108864);
      e !== null && de(e, t, 67108864), Sf(t, 67108864);
    }
  }
  var Zu = !0;
  function Vy(t, e, l, a) {
    var n = N.T;
    N.T = null;
    var u = B.p;
    try {
      (B.p = 2), bf(t, e, l, a);
    } finally {
      (B.p = u), (N.T = n);
    }
  }
  function Ky(t, e, l, a) {
    var n = N.T;
    N.T = null;
    var u = B.p;
    try {
      (B.p = 8), bf(t, e, l, a);
    } finally {
      (B.p = u), (N.T = n);
    }
  }
  function bf(t, e, l, a) {
    if (Zu) {
      var n = pf(a);
      if (n === null) uf(t, e, a, Vu, l), Md(t, a);
      else if (ky(n, t, e, l, a)) a.stopPropagation();
      else if ((Md(t, a), e & 4 && -1 < Jy.indexOf(t))) {
        for (; n !== null; ) {
          var u = Jl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = Al(u.pendingLanes);
                  if (c !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var h = 1 << (31 - ue(c));
                      (r.entanglements[1] |= h), (c &= ~h);
                    }
                    xe(u), (dt & 6) === 0 && ((zu = De() + 500), Sn(0));
                  }
                }
                break;
              case 13:
                (r = ua(u, 2)), r !== null && de(r, u, 2), Uu(), Sf(u, 2);
            }
          if (((u = pf(a)), u === null && uf(t, e, a, Vu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else uf(t, e, a, null, l);
    }
  }
  function pf(t) {
    return (t = Oi(t)), Ef(t);
  }
  var Vu = null;
  function Ef(t) {
    if (((Vu = null), (t = Kl(t)), t !== null)) {
      var e = y(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = g(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Vu = t), null;
  }
  function Ud(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (xh()) {
          case wf:
            return 2;
          case Zf:
            return 8;
          case Bn:
          case Ch:
            return 32;
          case Vf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Tf = !1,
    vl = null,
    gl = null,
    Sl = null,
    _n = new Map(),
    Dn = new Map(),
    bl = [],
    Jy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Md(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        vl = null;
        break;
      case "dragenter":
      case "dragleave":
        gl = null;
        break;
      case "mouseover":
      case "mouseout":
        Sl = null;
        break;
      case "pointerover":
      case "pointerout":
        _n.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(e.pointerId);
    }
  }
  function zn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Jl(e)), e !== null && Nd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function ky(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return (vl = zn(vl, t, e, l, a, n)), !0;
      case "dragenter":
        return (gl = zn(gl, t, e, l, a, n)), !0;
      case "mouseover":
        return (Sl = zn(Sl, t, e, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return _n.set(u, zn(_n.get(u) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), Dn.set(u, zn(Dn.get(u) || null, t, e, l, a, n)), !0
        );
    }
    return !1;
  }
  function xd(t) {
    var e = Kl(t.target);
    if (e !== null) {
      var l = y(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = g(l)), e !== null)) {
            (t.blockedOn = e),
              Lh(t.priority, function () {
                if (l.tag === 13) {
                  var a = oe();
                  a = hi(a);
                  var n = ua(l, a);
                  n !== null && de(n, l, a), Sf(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ku(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = pf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (Ai = a), l.target.dispatchEvent(a), (Ai = null);
      } else return (e = Jl(l)), e !== null && Nd(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function Cd(t, e, l) {
    Ku(t) && l.delete(e);
  }
  function $y() {
    (Tf = !1),
      vl !== null && Ku(vl) && (vl = null),
      gl !== null && Ku(gl) && (gl = null),
      Sl !== null && Ku(Sl) && (Sl = null),
      _n.forEach(Cd),
      Dn.forEach(Cd);
  }
  function Ju(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Tf ||
        ((Tf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, $y)));
  }
  var ku = null;
  function Hd(t) {
    ku !== t &&
      ((ku = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        ku === t && (ku = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (Ef(a || l) === null) continue;
            break;
          }
          var u = Jl(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            pc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Nn(t) {
    function e(h) {
      return Ju(h, t);
    }
    vl !== null && Ju(vl, t),
      gl !== null && Ju(gl, t),
      Sl !== null && Ju(Sl, t),
      _n.forEach(e),
      Dn.forEach(e);
    for (var l = 0; l < bl.length; l++) {
      var a = bl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < bl.length && ((l = bl[0]), l.blockedOn === null); )
      xd(l), l.blockedOn === null && bl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[Wt] || null;
        if (typeof u == "function") c || Hd(l);
        else if (c) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (c = u[Wt] || null))) r = c.formAction;
            else if (Ef(n) !== null) continue;
          } else r = c.action;
          typeof r == "function" ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)),
            Hd(l);
        }
      }
  }
  function Af(t) {
    this._internalRoot = t;
  }
  ($u.prototype.render = Af.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var l = e.current,
        a = oe();
      Dd(l, a, t, e, null, null);
    }),
    ($u.prototype.unmount = Af.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Dd(t.current, 2, null, t, null, null), Uu(), (e[Vl] = null);
        }
      });
  function $u(t) {
    this._internalRoot = t;
  }
  $u.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Wf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < bl.length && e !== 0 && e < bl[l].priority; l++);
      bl.splice(l, 0, t), l === 0 && xd(t);
    }
  };
  var jd = f.version;
  if (jd !== "19.1.0") throw Error(s(527, jd, "19.1.0"));
  B.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = D(e)),
      (t = t !== null ? S(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Wy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wu.isDisabled && Wu.supportsFiber)
      try {
        (xa = Wu.inject(Wy)), (ne = Wu);
      } catch {}
  }
  return (
    (Mn.createRoot = function (t, e) {
      if (!d(t)) throw Error(s(299));
      var l = !1,
        a = "",
        n = Wr,
        u = Fr,
        c = Pr,
        r = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (r = e.unstable_transitionCallbacks)),
        (e = Rd(t, 1, !1, null, null, l, a, n, u, c, r, null)),
        (t[Vl] = e.current),
        nf(t),
        new Af(e)
      );
    }),
    (Mn.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(s(299));
      var a = !1,
        n = "",
        u = Wr,
        c = Fr,
        r = Pr,
        h = null,
        E = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (h = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (E = l.formState)),
        (e = Rd(t, 1, !0, e, l ?? null, a, n, u, c, r, h, E)),
        (e.context = _d(null)),
        (l = e.current),
        (a = oe()),
        (a = hi(a)),
        (n = ll(a)),
        (n.callback = null),
        al(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Ha(e, l),
        xe(e),
        (t[Vl] = e.current),
        nf(t),
        new $u(e)
      );
    }),
    (Mn.version = "19.1.0"),
    Mn
  );
}
var Vd;
function cm() {
  if (Vd) return _f.exports;
  Vd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), (_f.exports = im()), _f.exports;
}
var fm = cm();
const sm = uh(fm);
function ih(i, f) {
  return function () {
    return i.apply(f, arguments);
  };
}
const { toString: rm } = Object.prototype,
  { getPrototypeOf: Xf } = Object,
  li = ((i) => (f) => {
    const o = rm.call(f);
    return i[o] || (i[o] = o.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _e = (i) => ((i = i.toLowerCase()), (f) => li(f) === i),
  ai = (i) => (f) => typeof f === i,
  { isArray: Ua } = Array,
  Cn = ai("undefined");
function om(i) {
  return (
    i !== null &&
    !Cn(i) &&
    i.constructor !== null &&
    !Cn(i.constructor) &&
    he(i.constructor.isBuffer) &&
    i.constructor.isBuffer(i)
  );
}
const ch = _e("ArrayBuffer");
function dm(i) {
  let f;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (f = ArrayBuffer.isView(i))
      : (f = i && i.buffer && ch(i.buffer)),
    f
  );
}
const hm = ai("string"),
  he = ai("function"),
  fh = ai("number"),
  ni = (i) => i !== null && typeof i == "object",
  ym = (i) => i === !0 || i === !1,
  Fu = (i) => {
    if (li(i) !== "object") return !1;
    const f = Xf(i);
    return (
      (f === null ||
        f === Object.prototype ||
        Object.getPrototypeOf(f) === null) &&
      !(Symbol.toStringTag in i) &&
      !(Symbol.iterator in i)
    );
  },
  mm = _e("Date"),
  vm = _e("File"),
  gm = _e("Blob"),
  Sm = _e("FileList"),
  bm = (i) => ni(i) && he(i.pipe),
  pm = (i) => {
    let f;
    return (
      i &&
      ((typeof FormData == "function" && i instanceof FormData) ||
        (he(i.append) &&
          ((f = li(i)) === "formdata" ||
            (f === "object" &&
              he(i.toString) &&
              i.toString() === "[object FormData]"))))
    );
  },
  Em = _e("URLSearchParams"),
  [Tm, Am, Om, Rm] = ["ReadableStream", "Request", "Response", "Headers"].map(
    _e
  ),
  _m = (i) =>
    i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Hn(i, f, { allOwnKeys: o = !1 } = {}) {
  if (i === null || typeof i > "u") return;
  let s, d;
  if ((typeof i != "object" && (i = [i]), Ua(i)))
    for (s = 0, d = i.length; s < d; s++) f.call(null, i[s], s, i);
  else {
    const y = o ? Object.getOwnPropertyNames(i) : Object.keys(i),
      g = y.length;
    let _;
    for (s = 0; s < g; s++) (_ = y[s]), f.call(null, i[_], _, i);
  }
}
function sh(i, f) {
  f = f.toLowerCase();
  const o = Object.keys(i);
  let s = o.length,
    d;
  for (; s-- > 0; ) if (((d = o[s]), f === d.toLowerCase())) return d;
  return null;
}
const Ll =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  rh = (i) => !Cn(i) && i !== Ll;
function Cf() {
  const { caseless: i } = (rh(this) && this) || {},
    f = {},
    o = (s, d) => {
      const y = (i && sh(f, d)) || d;
      Fu(f[y]) && Fu(s)
        ? (f[y] = Cf(f[y], s))
        : Fu(s)
        ? (f[y] = Cf({}, s))
        : Ua(s)
        ? (f[y] = s.slice())
        : (f[y] = s);
    };
  for (let s = 0, d = arguments.length; s < d; s++)
    arguments[s] && Hn(arguments[s], o);
  return f;
}
const Dm = (i, f, o, { allOwnKeys: s } = {}) => (
    Hn(
      f,
      (d, y) => {
        o && he(d) ? (i[y] = ih(d, o)) : (i[y] = d);
      },
      { allOwnKeys: s }
    ),
    i
  ),
  zm = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i),
  Nm = (i, f, o, s) => {
    (i.prototype = Object.create(f.prototype, s)),
      (i.prototype.constructor = i),
      Object.defineProperty(i, "super", { value: f.prototype }),
      o && Object.assign(i.prototype, o);
  },
  Um = (i, f, o, s) => {
    let d, y, g;
    const _ = {};
    if (((f = f || {}), i == null)) return f;
    do {
      for (d = Object.getOwnPropertyNames(i), y = d.length; y-- > 0; )
        (g = d[y]), (!s || s(g, i, f)) && !_[g] && ((f[g] = i[g]), (_[g] = !0));
      i = o !== !1 && Xf(i);
    } while (i && (!o || o(i, f)) && i !== Object.prototype);
    return f;
  },
  Mm = (i, f, o) => {
    (i = String(i)),
      (o === void 0 || o > i.length) && (o = i.length),
      (o -= f.length);
    const s = i.indexOf(f, o);
    return s !== -1 && s === o;
  },
  xm = (i) => {
    if (!i) return null;
    if (Ua(i)) return i;
    let f = i.length;
    if (!fh(f)) return null;
    const o = new Array(f);
    for (; f-- > 0; ) o[f] = i[f];
    return o;
  },
  Cm = (
    (i) => (f) =>
      i && f instanceof i
  )(typeof Uint8Array < "u" && Xf(Uint8Array)),
  Hm = (i, f) => {
    const s = (i && i[Symbol.iterator]).call(i);
    let d;
    for (; (d = s.next()) && !d.done; ) {
      const y = d.value;
      f.call(i, y[0], y[1]);
    }
  },
  jm = (i, f) => {
    let o;
    const s = [];
    for (; (o = i.exec(f)) !== null; ) s.push(o);
    return s;
  },
  qm = _e("HTMLFormElement"),
  Bm = (i) =>
    i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (o, s, d) {
      return s.toUpperCase() + d;
    }),
  Kd = (
    ({ hasOwnProperty: i }) =>
    (f, o) =>
      i.call(f, o)
  )(Object.prototype),
  Ym = _e("RegExp"),
  oh = (i, f) => {
    const o = Object.getOwnPropertyDescriptors(i),
      s = {};
    Hn(o, (d, y) => {
      let g;
      (g = f(d, y, i)) !== !1 && (s[y] = g || d);
    }),
      Object.defineProperties(i, s);
  },
  Gm = (i) => {
    oh(i, (f, o) => {
      if (he(i) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
        return !1;
      const s = i[o];
      if (he(s)) {
        if (((f.enumerable = !1), "writable" in f)) {
          f.writable = !1;
          return;
        }
        f.set ||
          (f.set = () => {
            throw Error("Can not rewrite read-only method '" + o + "'");
          });
      }
    });
  },
  Xm = (i, f) => {
    const o = {},
      s = (d) => {
        d.forEach((y) => {
          o[y] = !0;
        });
      };
    return Ua(i) ? s(i) : s(String(i).split(f)), o;
  },
  Lm = () => {},
  Qm = (i, f) => (i != null && Number.isFinite((i = +i)) ? i : f);
function wm(i) {
  return !!(
    i &&
    he(i.append) &&
    i[Symbol.toStringTag] === "FormData" &&
    i[Symbol.iterator]
  );
}
const Zm = (i) => {
    const f = new Array(10),
      o = (s, d) => {
        if (ni(s)) {
          if (f.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            f[d] = s;
            const y = Ua(s) ? [] : {};
            return (
              Hn(s, (g, _) => {
                const D = o(g, d + 1);
                !Cn(D) && (y[_] = D);
              }),
              (f[d] = void 0),
              y
            );
          }
        }
        return s;
      };
    return o(i, 0);
  },
  Vm = _e("AsyncFunction"),
  Km = (i) => i && (ni(i) || he(i)) && he(i.then) && he(i.catch),
  dh = ((i, f) =>
    i
      ? setImmediate
      : f
      ? ((o, s) => (
          Ll.addEventListener(
            "message",
            ({ source: d, data: y }) => {
              d === Ll && y === o && s.length && s.shift()();
            },
            !1
          ),
          (d) => {
            s.push(d), Ll.postMessage(o, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (o) => setTimeout(o))(
    typeof setImmediate == "function",
    he(Ll.postMessage)
  ),
  Jm =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ll)
      : (typeof process < "u" && process.nextTick) || dh,
  R = {
    isArray: Ua,
    isArrayBuffer: ch,
    isBuffer: om,
    isFormData: pm,
    isArrayBufferView: dm,
    isString: hm,
    isNumber: fh,
    isBoolean: ym,
    isObject: ni,
    isPlainObject: Fu,
    isReadableStream: Tm,
    isRequest: Am,
    isResponse: Om,
    isHeaders: Rm,
    isUndefined: Cn,
    isDate: mm,
    isFile: vm,
    isBlob: gm,
    isRegExp: Ym,
    isFunction: he,
    isStream: bm,
    isURLSearchParams: Em,
    isTypedArray: Cm,
    isFileList: Sm,
    forEach: Hn,
    merge: Cf,
    extend: Dm,
    trim: _m,
    stripBOM: zm,
    inherits: Nm,
    toFlatObject: Um,
    kindOf: li,
    kindOfTest: _e,
    endsWith: Mm,
    toArray: xm,
    forEachEntry: Hm,
    matchAll: jm,
    isHTMLForm: qm,
    hasOwnProperty: Kd,
    hasOwnProp: Kd,
    reduceDescriptors: oh,
    freezeMethods: Gm,
    toObjectSet: Xm,
    toCamelCase: Bm,
    noop: Lm,
    toFiniteNumber: Qm,
    findKey: sh,
    global: Ll,
    isContextDefined: rh,
    isSpecCompliantForm: wm,
    toJSONObject: Zm,
    isAsyncFn: Vm,
    isThenable: Km,
    setImmediate: dh,
    asap: Jm,
  };
function P(i, f, o, s, d) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = i),
    (this.name = "AxiosError"),
    f && (this.code = f),
    o && (this.config = o),
    s && (this.request = s),
    d && ((this.response = d), (this.status = d.status ? d.status : null));
}
R.inherits(P, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const hh = P.prototype,
  yh = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((i) => {
  yh[i] = { value: i };
});
Object.defineProperties(P, yh);
Object.defineProperty(hh, "isAxiosError", { value: !0 });
P.from = (i, f, o, s, d, y) => {
  const g = Object.create(hh);
  return (
    R.toFlatObject(
      i,
      g,
      function (D) {
        return D !== Error.prototype;
      },
      (_) => _ !== "isAxiosError"
    ),
    P.call(g, i.message, f, o, s, d),
    (g.cause = i),
    (g.name = i.name),
    y && Object.assign(g, y),
    g
  );
};
const km = null;
function Hf(i) {
  return R.isPlainObject(i) || R.isArray(i);
}
function mh(i) {
  return R.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Jd(i, f, o) {
  return i
    ? i
        .concat(f)
        .map(function (d, y) {
          return (d = mh(d)), !o && y ? "[" + d + "]" : d;
        })
        .join(o ? "." : "")
    : f;
}
function $m(i) {
  return R.isArray(i) && !i.some(Hf);
}
const Wm = R.toFlatObject(R, {}, null, function (f) {
  return /^is[A-Z]/.test(f);
});
function ui(i, f, o) {
  if (!R.isObject(i)) throw new TypeError("target must be an object");
  (f = f || new FormData()),
    (o = R.toFlatObject(
      o,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (Q, Y) {
        return !R.isUndefined(Y[Q]);
      }
    ));
  const s = o.metaTokens,
    d = o.visitor || O,
    y = o.dots,
    g = o.indexes,
    D = (o.Blob || (typeof Blob < "u" && Blob)) && R.isSpecCompliantForm(f);
  if (!R.isFunction(d)) throw new TypeError("visitor must be a function");
  function S(j) {
    if (j === null) return "";
    if (R.isDate(j)) return j.toISOString();
    if (!D && R.isBlob(j))
      throw new P("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(j) || R.isTypedArray(j)
      ? D && typeof Blob == "function"
        ? new Blob([j])
        : Buffer.from(j)
      : j;
  }
  function O(j, Q, Y) {
    let st = j;
    if (j && !Y && typeof j == "object") {
      if (R.endsWith(Q, "{}"))
        (Q = s ? Q : Q.slice(0, -2)), (j = JSON.stringify(j));
      else if (
        (R.isArray(j) && $m(j)) ||
        ((R.isFileList(j) || R.endsWith(Q, "[]")) && (st = R.toArray(j)))
      )
        return (
          (Q = mh(Q)),
          st.forEach(function (tt, rt) {
            !(R.isUndefined(tt) || tt === null) &&
              f.append(
                g === !0 ? Jd([Q], rt, y) : g === null ? Q : Q + "[]",
                S(tt)
              );
          }),
          !1
        );
    }
    return Hf(j) ? !0 : (f.append(Jd(Y, Q, y), S(j)), !1);
  }
  const H = [],
    X = Object.assign(Wm, {
      defaultVisitor: O,
      convertValue: S,
      isVisitable: Hf,
    });
  function W(j, Q) {
    if (!R.isUndefined(j)) {
      if (H.indexOf(j) !== -1)
        throw Error("Circular reference detected in " + Q.join("."));
      H.push(j),
        R.forEach(j, function (st, it) {
          (!(R.isUndefined(st) || st === null) &&
            d.call(f, st, R.isString(it) ? it.trim() : it, Q, X)) === !0 &&
            W(st, Q ? Q.concat(it) : [it]);
        }),
        H.pop();
    }
  }
  if (!R.isObject(i)) throw new TypeError("data must be an object");
  return W(i), f;
}
function kd(i) {
  const f = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function (s) {
    return f[s];
  });
}
function Lf(i, f) {
  (this._pairs = []), i && ui(i, this, f);
}
const vh = Lf.prototype;
vh.append = function (f, o) {
  this._pairs.push([f, o]);
};
vh.toString = function (f) {
  const o = f
    ? function (s) {
        return f.call(this, s, kd);
      }
    : kd;
  return this._pairs
    .map(function (d) {
      return o(d[0]) + "=" + o(d[1]);
    }, "")
    .join("&");
};
function Fm(i) {
  return encodeURIComponent(i)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function gh(i, f, o) {
  if (!f) return i;
  const s = (o && o.encode) || Fm;
  R.isFunction(o) && (o = { serialize: o });
  const d = o && o.serialize;
  let y;
  if (
    (d
      ? (y = d(f, o))
      : (y = R.isURLSearchParams(f) ? f.toString() : new Lf(f, o).toString(s)),
    y)
  ) {
    const g = i.indexOf("#");
    g !== -1 && (i = i.slice(0, g)),
      (i += (i.indexOf("?") === -1 ? "?" : "&") + y);
  }
  return i;
}
class $d {
  constructor() {
    this.handlers = [];
  }
  use(f, o, s) {
    return (
      this.handlers.push({
        fulfilled: f,
        rejected: o,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(f) {
    this.handlers[f] && (this.handlers[f] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(f) {
    R.forEach(this.handlers, function (s) {
      s !== null && f(s);
    });
  }
}
const Sh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Pm = typeof URLSearchParams < "u" ? URLSearchParams : Lf,
  Im = typeof FormData < "u" ? FormData : null,
  tv = typeof Blob < "u" ? Blob : null,
  ev = {
    isBrowser: !0,
    classes: { URLSearchParams: Pm, FormData: Im, Blob: tv },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Qf = typeof window < "u" && typeof document < "u",
  jf = (typeof navigator == "object" && navigator) || void 0,
  lv =
    Qf &&
    (!jf || ["ReactNative", "NativeScript", "NS"].indexOf(jf.product) < 0),
  av =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  nv = (Qf && window.location.href) || "http://localhost",
  uv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Qf,
        hasStandardBrowserEnv: lv,
        hasStandardBrowserWebWorkerEnv: av,
        navigator: jf,
        origin: nv,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Jt = { ...uv, ...ev };
function iv(i, f) {
  return ui(
    i,
    new Jt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (o, s, d, y) {
          return Jt.isNode && R.isBuffer(o)
            ? (this.append(s, o.toString("base64")), !1)
            : y.defaultVisitor.apply(this, arguments);
        },
      },
      f
    )
  );
}
function cv(i) {
  return R.matchAll(/\w+|\[(\w*)]/g, i).map((f) =>
    f[0] === "[]" ? "" : f[1] || f[0]
  );
}
function fv(i) {
  const f = {},
    o = Object.keys(i);
  let s;
  const d = o.length;
  let y;
  for (s = 0; s < d; s++) (y = o[s]), (f[y] = i[y]);
  return f;
}
function bh(i) {
  function f(o, s, d, y) {
    let g = o[y++];
    if (g === "__proto__") return !0;
    const _ = Number.isFinite(+g),
      D = y >= o.length;
    return (
      (g = !g && R.isArray(d) ? d.length : g),
      D
        ? (R.hasOwnProp(d, g) ? (d[g] = [d[g], s]) : (d[g] = s), !_)
        : ((!d[g] || !R.isObject(d[g])) && (d[g] = []),
          f(o, s, d[g], y) && R.isArray(d[g]) && (d[g] = fv(d[g])),
          !_)
    );
  }
  if (R.isFormData(i) && R.isFunction(i.entries)) {
    const o = {};
    return (
      R.forEachEntry(i, (s, d) => {
        f(cv(s), d, o, 0);
      }),
      o
    );
  }
  return null;
}
function sv(i, f, o) {
  if (R.isString(i))
    try {
      return (f || JSON.parse)(i), R.trim(i);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (o || JSON.stringify)(i);
}
const jn = {
  transitional: Sh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (f, o) {
      const s = o.getContentType() || "",
        d = s.indexOf("application/json") > -1,
        y = R.isObject(f);
      if ((y && R.isHTMLForm(f) && (f = new FormData(f)), R.isFormData(f)))
        return d ? JSON.stringify(bh(f)) : f;
      if (
        R.isArrayBuffer(f) ||
        R.isBuffer(f) ||
        R.isStream(f) ||
        R.isFile(f) ||
        R.isBlob(f) ||
        R.isReadableStream(f)
      )
        return f;
      if (R.isArrayBufferView(f)) return f.buffer;
      if (R.isURLSearchParams(f))
        return (
          o.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          f.toString()
        );
      let _;
      if (y) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return iv(f, this.formSerializer).toString();
        if ((_ = R.isFileList(f)) || s.indexOf("multipart/form-data") > -1) {
          const D = this.env && this.env.FormData;
          return ui(
            _ ? { "files[]": f } : f,
            D && new D(),
            this.formSerializer
          );
        }
      }
      return y || d ? (o.setContentType("application/json", !1), sv(f)) : f;
    },
  ],
  transformResponse: [
    function (f) {
      const o = this.transitional || jn.transitional,
        s = o && o.forcedJSONParsing,
        d = this.responseType === "json";
      if (R.isResponse(f) || R.isReadableStream(f)) return f;
      if (f && R.isString(f) && ((s && !this.responseType) || d)) {
        const g = !(o && o.silentJSONParsing) && d;
        try {
          return JSON.parse(f);
        } catch (_) {
          if (g)
            throw _.name === "SyntaxError"
              ? P.from(_, P.ERR_BAD_RESPONSE, this, null, this.response)
              : _;
        }
      }
      return f;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Jt.classes.FormData, Blob: Jt.classes.Blob },
  validateStatus: function (f) {
    return f >= 200 && f < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  jn.headers[i] = {};
});
const rv = R.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  ov = (i) => {
    const f = {};
    let o, s, d;
    return (
      i &&
        i
          .split(
            `
`
          )
          .forEach(function (g) {
            (d = g.indexOf(":")),
              (o = g.substring(0, d).trim().toLowerCase()),
              (s = g.substring(d + 1).trim()),
              !(!o || (f[o] && rv[o])) &&
                (o === "set-cookie"
                  ? f[o]
                    ? f[o].push(s)
                    : (f[o] = [s])
                  : (f[o] = f[o] ? f[o] + ", " + s : s));
          }),
      f
    );
  },
  Wd = Symbol("internals");
function xn(i) {
  return i && String(i).trim().toLowerCase();
}
function Pu(i) {
  return i === !1 || i == null ? i : R.isArray(i) ? i.map(Pu) : String(i);
}
function dv(i) {
  const f = Object.create(null),
    o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = o.exec(i)); ) f[s[1]] = s[2];
  return f;
}
const hv = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function Uf(i, f, o, s, d) {
  if (R.isFunction(s)) return s.call(this, f, o);
  if ((d && (f = o), !!R.isString(f))) {
    if (R.isString(s)) return f.indexOf(s) !== -1;
    if (R.isRegExp(s)) return s.test(f);
  }
}
function yv(i) {
  return i
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (f, o, s) => o.toUpperCase() + s);
}
function mv(i, f) {
  const o = R.toCamelCase(" " + f);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(i, s + o, {
      value: function (d, y, g) {
        return this[s].call(this, f, d, y, g);
      },
      configurable: !0,
    });
  });
}
let ee = class {
  constructor(f) {
    f && this.set(f);
  }
  set(f, o, s) {
    const d = this;
    function y(_, D, S) {
      const O = xn(D);
      if (!O) throw new Error("header name must be a non-empty string");
      const H = R.findKey(d, O);
      (!H || d[H] === void 0 || S === !0 || (S === void 0 && d[H] !== !1)) &&
        (d[H || D] = Pu(_));
    }
    const g = (_, D) => R.forEach(_, (S, O) => y(S, O, D));
    if (R.isPlainObject(f) || f instanceof this.constructor) g(f, o);
    else if (R.isString(f) && (f = f.trim()) && !hv(f)) g(ov(f), o);
    else if (R.isHeaders(f)) for (const [_, D] of f.entries()) y(D, _, s);
    else f != null && y(o, f, s);
    return this;
  }
  get(f, o) {
    if (((f = xn(f)), f)) {
      const s = R.findKey(this, f);
      if (s) {
        const d = this[s];
        if (!o) return d;
        if (o === !0) return dv(d);
        if (R.isFunction(o)) return o.call(this, d, s);
        if (R.isRegExp(o)) return o.exec(d);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(f, o) {
    if (((f = xn(f)), f)) {
      const s = R.findKey(this, f);
      return !!(s && this[s] !== void 0 && (!o || Uf(this, this[s], s, o)));
    }
    return !1;
  }
  delete(f, o) {
    const s = this;
    let d = !1;
    function y(g) {
      if (((g = xn(g)), g)) {
        const _ = R.findKey(s, g);
        _ && (!o || Uf(s, s[_], _, o)) && (delete s[_], (d = !0));
      }
    }
    return R.isArray(f) ? f.forEach(y) : y(f), d;
  }
  clear(f) {
    const o = Object.keys(this);
    let s = o.length,
      d = !1;
    for (; s--; ) {
      const y = o[s];
      (!f || Uf(this, this[y], y, f, !0)) && (delete this[y], (d = !0));
    }
    return d;
  }
  normalize(f) {
    const o = this,
      s = {};
    return (
      R.forEach(this, (d, y) => {
        const g = R.findKey(s, y);
        if (g) {
          (o[g] = Pu(d)), delete o[y];
          return;
        }
        const _ = f ? yv(y) : String(y).trim();
        _ !== y && delete o[y], (o[_] = Pu(d)), (s[_] = !0);
      }),
      this
    );
  }
  concat(...f) {
    return this.constructor.concat(this, ...f);
  }
  toJSON(f) {
    const o = Object.create(null);
    return (
      R.forEach(this, (s, d) => {
        s != null && s !== !1 && (o[d] = f && R.isArray(s) ? s.join(", ") : s);
      }),
      o
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([f, o]) => f + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(f) {
    return f instanceof this ? f : new this(f);
  }
  static concat(f, ...o) {
    const s = new this(f);
    return o.forEach((d) => s.set(d)), s;
  }
  static accessor(f) {
    const s = (this[Wd] = this[Wd] = { accessors: {} }).accessors,
      d = this.prototype;
    function y(g) {
      const _ = xn(g);
      s[_] || (mv(d, g), (s[_] = !0));
    }
    return R.isArray(f) ? f.forEach(y) : y(f), this;
  }
};
ee.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
R.reduceDescriptors(ee.prototype, ({ value: i }, f) => {
  let o = f[0].toUpperCase() + f.slice(1);
  return {
    get: () => i,
    set(s) {
      this[o] = s;
    },
  };
});
R.freezeMethods(ee);
function Mf(i, f) {
  const o = this || jn,
    s = f || o,
    d = ee.from(s.headers);
  let y = s.data;
  return (
    R.forEach(i, function (_) {
      y = _.call(o, y, d.normalize(), f ? f.status : void 0);
    }),
    d.normalize(),
    y
  );
}
function ph(i) {
  return !!(i && i.__CANCEL__);
}
function Ma(i, f, o) {
  P.call(this, i ?? "canceled", P.ERR_CANCELED, f, o),
    (this.name = "CanceledError");
}
R.inherits(Ma, P, { __CANCEL__: !0 });
function Eh(i, f, o) {
  const s = o.config.validateStatus;
  !o.status || !s || s(o.status)
    ? i(o)
    : f(
        new P(
          "Request failed with status code " + o.status,
          [P.ERR_BAD_REQUEST, P.ERR_BAD_RESPONSE][
            Math.floor(o.status / 100) - 4
          ],
          o.config,
          o.request,
          o
        )
      );
}
function vv(i) {
  const f = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return (f && f[1]) || "";
}
function gv(i, f) {
  i = i || 10;
  const o = new Array(i),
    s = new Array(i);
  let d = 0,
    y = 0,
    g;
  return (
    (f = f !== void 0 ? f : 1e3),
    function (D) {
      const S = Date.now(),
        O = s[y];
      g || (g = S), (o[d] = D), (s[d] = S);
      let H = y,
        X = 0;
      for (; H !== d; ) (X += o[H++]), (H = H % i);
      if (((d = (d + 1) % i), d === y && (y = (y + 1) % i), S - g < f)) return;
      const W = O && S - O;
      return W ? Math.round((X * 1e3) / W) : void 0;
    }
  );
}
function Sv(i, f) {
  let o = 0,
    s = 1e3 / f,
    d,
    y;
  const g = (S, O = Date.now()) => {
    (o = O), (d = null), y && (clearTimeout(y), (y = null)), i.apply(null, S);
  };
  return [
    (...S) => {
      const O = Date.now(),
        H = O - o;
      H >= s
        ? g(S, O)
        : ((d = S),
          y ||
            (y = setTimeout(() => {
              (y = null), g(d);
            }, s - H)));
    },
    () => d && g(d),
  ];
}
const ti = (i, f, o = 3) => {
    let s = 0;
    const d = gv(50, 250);
    return Sv((y) => {
      const g = y.loaded,
        _ = y.lengthComputable ? y.total : void 0,
        D = g - s,
        S = d(D),
        O = g <= _;
      s = g;
      const H = {
        loaded: g,
        total: _,
        progress: _ ? g / _ : void 0,
        bytes: D,
        rate: S || void 0,
        estimated: S && _ && O ? (_ - g) / S : void 0,
        event: y,
        lengthComputable: _ != null,
        [f ? "download" : "upload"]: !0,
      };
      i(H);
    }, o);
  },
  Fd = (i, f) => {
    const o = i != null;
    return [(s) => f[0]({ lengthComputable: o, total: i, loaded: s }), f[1]];
  },
  Pd =
    (i) =>
    (...f) =>
      R.asap(() => i(...f)),
  bv = Jt.hasStandardBrowserEnv
    ? ((i, f) => (o) => (
        (o = new URL(o, Jt.origin)),
        i.protocol === o.protocol &&
          i.host === o.host &&
          (f || i.port === o.port)
      ))(
        new URL(Jt.origin),
        Jt.navigator && /(msie|trident)/i.test(Jt.navigator.userAgent)
      )
    : () => !0,
  pv = Jt.hasStandardBrowserEnv
    ? {
        write(i, f, o, s, d, y) {
          const g = [i + "=" + encodeURIComponent(f)];
          R.isNumber(o) && g.push("expires=" + new Date(o).toGMTString()),
            R.isString(s) && g.push("path=" + s),
            R.isString(d) && g.push("domain=" + d),
            y === !0 && g.push("secure"),
            (document.cookie = g.join("; "));
        },
        read(i) {
          const f = document.cookie.match(
            new RegExp("(^|;\\s*)(" + i + ")=([^;]*)")
          );
          return f ? decodeURIComponent(f[3]) : null;
        },
        remove(i) {
          this.write(i, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Ev(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function Tv(i, f) {
  return f ? i.replace(/\/?\/$/, "") + "/" + f.replace(/^\/+/, "") : i;
}
function Th(i, f, o) {
  let s = !Ev(f);
  return i && (s || o == !1) ? Tv(i, f) : f;
}
const Id = (i) => (i instanceof ee ? { ...i } : i);
function wl(i, f) {
  f = f || {};
  const o = {};
  function s(S, O, H, X) {
    return R.isPlainObject(S) && R.isPlainObject(O)
      ? R.merge.call({ caseless: X }, S, O)
      : R.isPlainObject(O)
      ? R.merge({}, O)
      : R.isArray(O)
      ? O.slice()
      : O;
  }
  function d(S, O, H, X) {
    if (R.isUndefined(O)) {
      if (!R.isUndefined(S)) return s(void 0, S, H, X);
    } else return s(S, O, H, X);
  }
  function y(S, O) {
    if (!R.isUndefined(O)) return s(void 0, O);
  }
  function g(S, O) {
    if (R.isUndefined(O)) {
      if (!R.isUndefined(S)) return s(void 0, S);
    } else return s(void 0, O);
  }
  function _(S, O, H) {
    if (H in f) return s(S, O);
    if (H in i) return s(void 0, S);
  }
  const D = {
    url: y,
    method: y,
    data: y,
    baseURL: g,
    transformRequest: g,
    transformResponse: g,
    paramsSerializer: g,
    timeout: g,
    timeoutMessage: g,
    withCredentials: g,
    withXSRFToken: g,
    adapter: g,
    responseType: g,
    xsrfCookieName: g,
    xsrfHeaderName: g,
    onUploadProgress: g,
    onDownloadProgress: g,
    decompress: g,
    maxContentLength: g,
    maxBodyLength: g,
    beforeRedirect: g,
    transport: g,
    httpAgent: g,
    httpsAgent: g,
    cancelToken: g,
    socketPath: g,
    responseEncoding: g,
    validateStatus: _,
    headers: (S, O, H) => d(Id(S), Id(O), H, !0),
  };
  return (
    R.forEach(Object.keys(Object.assign({}, i, f)), function (O) {
      const H = D[O] || d,
        X = H(i[O], f[O], O);
      (R.isUndefined(X) && H !== _) || (o[O] = X);
    }),
    o
  );
}
const Ah = (i) => {
    const f = wl({}, i);
    let {
      data: o,
      withXSRFToken: s,
      xsrfHeaderName: d,
      xsrfCookieName: y,
      headers: g,
      auth: _,
    } = f;
    (f.headers = g = ee.from(g)),
      (f.url = gh(
        Th(f.baseURL, f.url, f.allowAbsoluteUrls),
        i.params,
        i.paramsSerializer
      )),
      _ &&
        g.set(
          "Authorization",
          "Basic " +
            btoa(
              (_.username || "") +
                ":" +
                (_.password ? unescape(encodeURIComponent(_.password)) : "")
            )
        );
    let D;
    if (R.isFormData(o)) {
      if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
        g.setContentType(void 0);
      else if ((D = g.getContentType()) !== !1) {
        const [S, ...O] = D
          ? D.split(";")
              .map((H) => H.trim())
              .filter(Boolean)
          : [];
        g.setContentType([S || "multipart/form-data", ...O].join("; "));
      }
    }
    if (
      Jt.hasStandardBrowserEnv &&
      (s && R.isFunction(s) && (s = s(f)), s || (s !== !1 && bv(f.url)))
    ) {
      const S = d && y && pv.read(y);
      S && g.set(d, S);
    }
    return f;
  },
  Av = typeof XMLHttpRequest < "u",
  Ov =
    Av &&
    function (i) {
      return new Promise(function (o, s) {
        const d = Ah(i);
        let y = d.data;
        const g = ee.from(d.headers).normalize();
        let { responseType: _, onUploadProgress: D, onDownloadProgress: S } = d,
          O,
          H,
          X,
          W,
          j;
        function Q() {
          W && W(),
            j && j(),
            d.cancelToken && d.cancelToken.unsubscribe(O),
            d.signal && d.signal.removeEventListener("abort", O);
        }
        let Y = new XMLHttpRequest();
        Y.open(d.method.toUpperCase(), d.url, !0), (Y.timeout = d.timeout);
        function st() {
          if (!Y) return;
          const tt = ee.from(
              "getAllResponseHeaders" in Y && Y.getAllResponseHeaders()
            ),
            Z = {
              data:
                !_ || _ === "text" || _ === "json"
                  ? Y.responseText
                  : Y.response,
              status: Y.status,
              statusText: Y.statusText,
              headers: tt,
              config: i,
              request: Y,
            };
          Eh(
            function (Et) {
              o(Et), Q();
            },
            function (Et) {
              s(Et), Q();
            },
            Z
          ),
            (Y = null);
        }
        "onloadend" in Y
          ? (Y.onloadend = st)
          : (Y.onreadystatechange = function () {
              !Y ||
                Y.readyState !== 4 ||
                (Y.status === 0 &&
                  !(Y.responseURL && Y.responseURL.indexOf("file:") === 0)) ||
                setTimeout(st);
            }),
          (Y.onabort = function () {
            Y &&
              (s(new P("Request aborted", P.ECONNABORTED, i, Y)), (Y = null));
          }),
          (Y.onerror = function () {
            s(new P("Network Error", P.ERR_NETWORK, i, Y)), (Y = null);
          }),
          (Y.ontimeout = function () {
            let rt = d.timeout
              ? "timeout of " + d.timeout + "ms exceeded"
              : "timeout exceeded";
            const Z = d.transitional || Sh;
            d.timeoutErrorMessage && (rt = d.timeoutErrorMessage),
              s(
                new P(
                  rt,
                  Z.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED,
                  i,
                  Y
                )
              ),
              (Y = null);
          }),
          y === void 0 && g.setContentType(null),
          "setRequestHeader" in Y &&
            R.forEach(g.toJSON(), function (rt, Z) {
              Y.setRequestHeader(Z, rt);
            }),
          R.isUndefined(d.withCredentials) ||
            (Y.withCredentials = !!d.withCredentials),
          _ && _ !== "json" && (Y.responseType = d.responseType),
          S && (([X, j] = ti(S, !0)), Y.addEventListener("progress", X)),
          D &&
            Y.upload &&
            (([H, W] = ti(D)),
            Y.upload.addEventListener("progress", H),
            Y.upload.addEventListener("loadend", W)),
          (d.cancelToken || d.signal) &&
            ((O = (tt) => {
              Y &&
                (s(!tt || tt.type ? new Ma(null, i, Y) : tt),
                Y.abort(),
                (Y = null));
            }),
            d.cancelToken && d.cancelToken.subscribe(O),
            d.signal &&
              (d.signal.aborted ? O() : d.signal.addEventListener("abort", O)));
        const it = vv(d.url);
        if (it && Jt.protocols.indexOf(it) === -1) {
          s(new P("Unsupported protocol " + it + ":", P.ERR_BAD_REQUEST, i));
          return;
        }
        Y.send(y || null);
      });
    },
  Rv = (i, f) => {
    const { length: o } = (i = i ? i.filter(Boolean) : []);
    if (f || o) {
      let s = new AbortController(),
        d;
      const y = function (S) {
        if (!d) {
          (d = !0), _();
          const O = S instanceof Error ? S : this.reason;
          s.abort(
            O instanceof P ? O : new Ma(O instanceof Error ? O.message : O)
          );
        }
      };
      let g =
        f &&
        setTimeout(() => {
          (g = null), y(new P(`timeout ${f} of ms exceeded`, P.ETIMEDOUT));
        }, f);
      const _ = () => {
        i &&
          (g && clearTimeout(g),
          (g = null),
          i.forEach((S) => {
            S.unsubscribe
              ? S.unsubscribe(y)
              : S.removeEventListener("abort", y);
          }),
          (i = null));
      };
      i.forEach((S) => S.addEventListener("abort", y));
      const { signal: D } = s;
      return (D.unsubscribe = () => R.asap(_)), D;
    }
  },
  _v = function* (i, f) {
    let o = i.byteLength;
    if (o < f) {
      yield i;
      return;
    }
    let s = 0,
      d;
    for (; s < o; ) (d = s + f), yield i.slice(s, d), (s = d);
  },
  Dv = async function* (i, f) {
    for await (const o of zv(i)) yield* _v(o, f);
  },
  zv = async function* (i) {
    if (i[Symbol.asyncIterator]) {
      yield* i;
      return;
    }
    const f = i.getReader();
    try {
      for (;;) {
        const { done: o, value: s } = await f.read();
        if (o) break;
        yield s;
      }
    } finally {
      await f.cancel();
    }
  },
  th = (i, f, o, s) => {
    const d = Dv(i, f);
    let y = 0,
      g,
      _ = (D) => {
        g || ((g = !0), s && s(D));
      };
    return new ReadableStream(
      {
        async pull(D) {
          try {
            const { done: S, value: O } = await d.next();
            if (S) {
              _(), D.close();
              return;
            }
            let H = O.byteLength;
            if (o) {
              let X = (y += H);
              o(X);
            }
            D.enqueue(new Uint8Array(O));
          } catch (S) {
            throw (_(S), S);
          }
        },
        cancel(D) {
          return _(D), d.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ii =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Oh = ii && typeof ReadableStream == "function",
  Nv =
    ii &&
    (typeof TextEncoder == "function"
      ? (
          (i) => (f) =>
            i.encode(f)
        )(new TextEncoder())
      : async (i) => new Uint8Array(await new Response(i).arrayBuffer())),
  Rh = (i, ...f) => {
    try {
      return !!i(...f);
    } catch {
      return !1;
    }
  },
  Uv =
    Oh &&
    Rh(() => {
      let i = !1;
      const f = new Request(Jt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (i = !0), "half";
        },
      }).headers.has("Content-Type");
      return i && !f;
    }),
  eh = 64 * 1024,
  qf = Oh && Rh(() => R.isReadableStream(new Response("").body)),
  ei = { stream: qf && ((i) => i.body) };
ii &&
  ((i) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
      !ei[f] &&
        (ei[f] = R.isFunction(i[f])
          ? (o) => o[f]()
          : (o, s) => {
              throw new P(
                `Response type '${f}' is not supported`,
                P.ERR_NOT_SUPPORT,
                s
              );
            });
    });
  })(new Response());
const Mv = async (i) => {
    if (i == null) return 0;
    if (R.isBlob(i)) return i.size;
    if (R.isSpecCompliantForm(i))
      return (
        await new Request(Jt.origin, { method: "POST", body: i }).arrayBuffer()
      ).byteLength;
    if (R.isArrayBufferView(i) || R.isArrayBuffer(i)) return i.byteLength;
    if ((R.isURLSearchParams(i) && (i = i + ""), R.isString(i)))
      return (await Nv(i)).byteLength;
  },
  xv = async (i, f) => {
    const o = R.toFiniteNumber(i.getContentLength());
    return o ?? Mv(f);
  },
  Cv =
    ii &&
    (async (i) => {
      let {
        url: f,
        method: o,
        data: s,
        signal: d,
        cancelToken: y,
        timeout: g,
        onDownloadProgress: _,
        onUploadProgress: D,
        responseType: S,
        headers: O,
        withCredentials: H = "same-origin",
        fetchOptions: X,
      } = Ah(i);
      S = S ? (S + "").toLowerCase() : "text";
      let W = Rv([d, y && y.toAbortSignal()], g),
        j;
      const Q =
        W &&
        W.unsubscribe &&
        (() => {
          W.unsubscribe();
        });
      let Y;
      try {
        if (
          D &&
          Uv &&
          o !== "get" &&
          o !== "head" &&
          (Y = await xv(O, s)) !== 0
        ) {
          let Z = new Request(f, { method: "POST", body: s, duplex: "half" }),
            gt;
          if (
            (R.isFormData(s) &&
              (gt = Z.headers.get("content-type")) &&
              O.setContentType(gt),
            Z.body)
          ) {
            const [Et, Ht] = Fd(Y, ti(Pd(D)));
            s = th(Z.body, eh, Et, Ht);
          }
        }
        R.isString(H) || (H = H ? "include" : "omit");
        const st = "credentials" in Request.prototype;
        j = new Request(f, {
          ...X,
          signal: W,
          method: o.toUpperCase(),
          headers: O.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: st ? H : void 0,
        });
        let it = await fetch(j);
        const tt = qf && (S === "stream" || S === "response");
        if (qf && (_ || (tt && Q))) {
          const Z = {};
          ["status", "statusText", "headers"].forEach((le) => {
            Z[le] = it[le];
          });
          const gt = R.toFiniteNumber(it.headers.get("content-length")),
            [Et, Ht] = (_ && Fd(gt, ti(Pd(_), !0))) || [];
          it = new Response(
            th(it.body, eh, Et, () => {
              Ht && Ht(), Q && Q();
            }),
            Z
          );
        }
        S = S || "text";
        let rt = await ei[R.findKey(ei, S) || "text"](it, i);
        return (
          !tt && Q && Q(),
          await new Promise((Z, gt) => {
            Eh(Z, gt, {
              data: rt,
              headers: ee.from(it.headers),
              status: it.status,
              statusText: it.statusText,
              config: i,
              request: j,
            });
          })
        );
      } catch (st) {
        throw (
          (Q && Q(),
          st && st.name === "TypeError" && /fetch/i.test(st.message)
            ? Object.assign(new P("Network Error", P.ERR_NETWORK, i, j), {
                cause: st.cause || st,
              })
            : P.from(st, st && st.code, i, j))
        );
      }
    }),
  Bf = { http: km, xhr: Ov, fetch: Cv };
R.forEach(Bf, (i, f) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: f });
    } catch {}
    Object.defineProperty(i, "adapterName", { value: f });
  }
});
const lh = (i) => `- ${i}`,
  Hv = (i) => R.isFunction(i) || i === null || i === !1,
  _h = {
    getAdapter: (i) => {
      i = R.isArray(i) ? i : [i];
      const { length: f } = i;
      let o, s;
      const d = {};
      for (let y = 0; y < f; y++) {
        o = i[y];
        let g;
        if (
          ((s = o),
          !Hv(o) && ((s = Bf[(g = String(o)).toLowerCase()]), s === void 0))
        )
          throw new P(`Unknown adapter '${g}'`);
        if (s) break;
        d[g || "#" + y] = s;
      }
      if (!s) {
        const y = Object.entries(d).map(
          ([_, D]) =>
            `adapter ${_} ` +
            (D === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let g = f
          ? y.length > 1
            ? `since :
` +
              y.map(lh).join(`
`)
            : " " + lh(y[0])
          : "as no adapter specified";
        throw new P(
          "There is no suitable adapter to dispatch the request " + g,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: Bf,
  };
function xf(i) {
  if (
    (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
  )
    throw new Ma(null, i);
}
function ah(i) {
  return (
    xf(i),
    (i.headers = ee.from(i.headers)),
    (i.data = Mf.call(i, i.transformRequest)),
    ["post", "put", "patch"].indexOf(i.method) !== -1 &&
      i.headers.setContentType("application/x-www-form-urlencoded", !1),
    _h
      .getAdapter(i.adapter || jn.adapter)(i)
      .then(
        function (s) {
          return (
            xf(i),
            (s.data = Mf.call(i, i.transformResponse, s)),
            (s.headers = ee.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            ph(s) ||
              (xf(i),
              s &&
                s.response &&
                ((s.response.data = Mf.call(
                  i,
                  i.transformResponse,
                  s.response
                )),
                (s.response.headers = ee.from(s.response.headers)))),
            Promise.reject(s)
          );
        }
      )
  );
}
const Dh = "1.8.4",
  ci = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (i, f) => {
    ci[i] = function (s) {
      return typeof s === i || "a" + (f < 1 ? "n " : " ") + i;
    };
  }
);
const nh = {};
ci.transitional = function (f, o, s) {
  function d(y, g) {
    return (
      "[Axios v" +
      Dh +
      "] Transitional option '" +
      y +
      "'" +
      g +
      (s ? ". " + s : "")
    );
  }
  return (y, g, _) => {
    if (f === !1)
      throw new P(
        d(g, " has been removed" + (o ? " in " + o : "")),
        P.ERR_DEPRECATED
      );
    return (
      o &&
        !nh[g] &&
        ((nh[g] = !0),
        console.warn(
          d(
            g,
            " has been deprecated since v" +
              o +
              " and will be removed in the near future"
          )
        )),
      f ? f(y, g, _) : !0
    );
  };
};
ci.spelling = function (f) {
  return (o, s) => (console.warn(`${s} is likely a misspelling of ${f}`), !0);
};
function jv(i, f, o) {
  if (typeof i != "object")
    throw new P("options must be an object", P.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(i);
  let d = s.length;
  for (; d-- > 0; ) {
    const y = s[d],
      g = f[y];
    if (g) {
      const _ = i[y],
        D = _ === void 0 || g(_, y, i);
      if (D !== !0)
        throw new P("option " + y + " must be " + D, P.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0) throw new P("Unknown option " + y, P.ERR_BAD_OPTION);
  }
}
const Iu = { assertOptions: jv, validators: ci },
  Ce = Iu.validators;
let Ql = class {
  constructor(f) {
    (this.defaults = f),
      (this.interceptors = { request: new $d(), response: new $d() });
  }
  async request(f, o) {
    try {
      return await this._request(f, o);
    } catch (s) {
      if (s instanceof Error) {
        let d = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(d)
          : (d = new Error());
        const y = d.stack ? d.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? y &&
              !String(s.stack).endsWith(y.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + y)
            : (s.stack = y);
        } catch {}
      }
      throw s;
    }
  }
  _request(f, o) {
    typeof f == "string" ? ((o = o || {}), (o.url = f)) : (o = f || {}),
      (o = wl(this.defaults, o));
    const { transitional: s, paramsSerializer: d, headers: y } = o;
    s !== void 0 &&
      Iu.assertOptions(
        s,
        {
          silentJSONParsing: Ce.transitional(Ce.boolean),
          forcedJSONParsing: Ce.transitional(Ce.boolean),
          clarifyTimeoutError: Ce.transitional(Ce.boolean),
        },
        !1
      ),
      d != null &&
        (R.isFunction(d)
          ? (o.paramsSerializer = { serialize: d })
          : Iu.assertOptions(
              d,
              { encode: Ce.function, serialize: Ce.function },
              !0
            )),
      o.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (o.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (o.allowAbsoluteUrls = !0)),
      Iu.assertOptions(
        o,
        {
          baseUrl: Ce.spelling("baseURL"),
          withXsrfToken: Ce.spelling("withXSRFToken"),
        },
        !0
      ),
      (o.method = (o.method || this.defaults.method || "get").toLowerCase());
    let g = y && R.merge(y.common, y[o.method]);
    y &&
      R.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (j) => {
          delete y[j];
        }
      ),
      (o.headers = ee.concat(g, y));
    const _ = [];
    let D = !0;
    this.interceptors.request.forEach(function (Q) {
      (typeof Q.runWhen == "function" && Q.runWhen(o) === !1) ||
        ((D = D && Q.synchronous), _.unshift(Q.fulfilled, Q.rejected));
    });
    const S = [];
    this.interceptors.response.forEach(function (Q) {
      S.push(Q.fulfilled, Q.rejected);
    });
    let O,
      H = 0,
      X;
    if (!D) {
      const j = [ah.bind(this), void 0];
      for (
        j.unshift.apply(j, _),
          j.push.apply(j, S),
          X = j.length,
          O = Promise.resolve(o);
        H < X;

      )
        O = O.then(j[H++], j[H++]);
      return O;
    }
    X = _.length;
    let W = o;
    for (H = 0; H < X; ) {
      const j = _[H++],
        Q = _[H++];
      try {
        W = j(W);
      } catch (Y) {
        Q.call(this, Y);
        break;
      }
    }
    try {
      O = ah.call(this, W);
    } catch (j) {
      return Promise.reject(j);
    }
    for (H = 0, X = S.length; H < X; ) O = O.then(S[H++], S[H++]);
    return O;
  }
  getUri(f) {
    f = wl(this.defaults, f);
    const o = Th(f.baseURL, f.url, f.allowAbsoluteUrls);
    return gh(o, f.params, f.paramsSerializer);
  }
};
R.forEach(["delete", "get", "head", "options"], function (f) {
  Ql.prototype[f] = function (o, s) {
    return this.request(
      wl(s || {}, { method: f, url: o, data: (s || {}).data })
    );
  };
});
R.forEach(["post", "put", "patch"], function (f) {
  function o(s) {
    return function (y, g, _) {
      return this.request(
        wl(_ || {}, {
          method: f,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: y,
          data: g,
        })
      );
    };
  }
  (Ql.prototype[f] = o()), (Ql.prototype[f + "Form"] = o(!0));
});
let qv = class zh {
  constructor(f) {
    if (typeof f != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function (y) {
      o = y;
    });
    const s = this;
    this.promise.then((d) => {
      if (!s._listeners) return;
      let y = s._listeners.length;
      for (; y-- > 0; ) s._listeners[y](d);
      s._listeners = null;
    }),
      (this.promise.then = (d) => {
        let y;
        const g = new Promise((_) => {
          s.subscribe(_), (y = _);
        }).then(d);
        return (
          (g.cancel = function () {
            s.unsubscribe(y);
          }),
          g
        );
      }),
      f(function (y, g, _) {
        s.reason || ((s.reason = new Ma(y, g, _)), o(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(f) {
    if (this.reason) {
      f(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(f) : (this._listeners = [f]);
  }
  unsubscribe(f) {
    if (!this._listeners) return;
    const o = this._listeners.indexOf(f);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const f = new AbortController(),
      o = (s) => {
        f.abort(s);
      };
    return (
      this.subscribe(o),
      (f.signal.unsubscribe = () => this.unsubscribe(o)),
      f.signal
    );
  }
  static source() {
    let f;
    return {
      token: new zh(function (d) {
        f = d;
      }),
      cancel: f,
    };
  }
};
function Bv(i) {
  return function (o) {
    return i.apply(null, o);
  };
}
function Yv(i) {
  return R.isObject(i) && i.isAxiosError === !0;
}
const Yf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Yf).forEach(([i, f]) => {
  Yf[f] = i;
});
function Nh(i) {
  const f = new Ql(i),
    o = ih(Ql.prototype.request, f);
  return (
    R.extend(o, Ql.prototype, f, { allOwnKeys: !0 }),
    R.extend(o, f, null, { allOwnKeys: !0 }),
    (o.create = function (d) {
      return Nh(wl(i, d));
    }),
    o
  );
}
const Rt = Nh(jn);
Rt.Axios = Ql;
Rt.CanceledError = Ma;
Rt.CancelToken = qv;
Rt.isCancel = ph;
Rt.VERSION = Dh;
Rt.toFormData = ui;
Rt.AxiosError = P;
Rt.Cancel = Rt.CanceledError;
Rt.all = function (f) {
  return Promise.all(f);
};
Rt.spread = Bv;
Rt.isAxiosError = Yv;
Rt.mergeConfig = wl;
Rt.AxiosHeaders = ee;
Rt.formToJSON = (i) => bh(R.isHTMLForm(i) ? new FormData(i) : i);
Rt.getAdapter = _h.getAdapter;
Rt.HttpStatusCode = Yf;
Rt.default = Rt;
const {
    Axios: Wv,
    AxiosError: Fv,
    CanceledError: Pv,
    isCancel: Iv,
    CancelToken: t1,
    VERSION: e1,
    all: l1,
    Cancel: a1,
    isAxiosError: n1,
    spread: u1,
    toFormData: i1,
    AxiosHeaders: c1,
    HttpStatusCode: f1,
    formToJSON: s1,
    getAdapter: r1,
    mergeConfig: o1,
  } = Rt,
  Gv = ({ onSearch: i }) => {
    const [f, o] = $t.useState(""),
      s = async (d) => {
        d.preventDefault();
        try {
          const y = encodeURIComponent(f),
            g = await Rt.get(`https://api.pokemontcg.io/v2/cards?q=name:${y}`);
          i(f);
        } catch (y) {
          console.error("Error fetching cards:", y),
            alert(
              "Failed to fetch cards. Please check the console for details."
            ),
            i("");
        }
      };
    return C.jsxs("div", {
      className: "search-container",
      children: [
        C.jsxs("form", {
          onSubmit: s,
          className: "search-form",
          children: [
            C.jsx("input", {
              type: "text",
              className: "search-input",
              placeholder: "Find and add cards to deck...",
              value: f,
              onChange: (d) => o(d.target.value),
            }),
            C.jsx("button", {
              type: "submit",
              className: "search-button",
              children: C.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "24",
                height: "24",
                children: C.jsx("path", {
                  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
                }),
              }),
            }),
          ],
        }),
        C.jsxs("div", {
          className: "search-options",
          children: [
            C.jsx("span", { className: "search-option", children: "Advanced" }),
            C.jsx("span", {
              className: "search-option-separator",
              children: "·",
            }),
            C.jsx("span", { className: "search-option", children: "Tips" }),
          ],
        }),
      ],
    });
  },
  Xv = ({ card: i, onCardClick: f, onAddToDeck: o }) => {
    var O, H, X, W;
    const [s, d] = $t.useState(1),
      [y, g] = $t.useState(!1),
      _ = () => {
        d((j) => {
          const Q = j + 1;
          return o(i, Q), Q;
        });
      },
      D = () => {
        d((j) => {
          if (j > 1) {
            const Q = j - 1;
            return o(i, Q), Q;
          } else return g(!1), 1;
        });
      },
      S = (j) => {
        j.stopPropagation(), y ? (d(1), o(i, 1)) : g(!0);
      };
    return C.jsxs("div", {
      className: "card-item",
      onClick: () => f(i),
      children: [
        C.jsx("div", {
          className: "card-item-header",
          children:
            i.set &&
            i.set.ptcgoCode &&
            C.jsxs("div", {
              className: "card-set",
              children: ["(", i.set.ptcgoCode, ")"],
            }),
        }),
        C.jsx("img", {
          className: "card-image",
          src: (O = i.images) == null ? void 0 : O.small,
          alt: i.name,
        }),
        C.jsxs("div", {
          className: "card-item-footer",
          children: [
            C.jsxs("div", {
              className: "card-price",
              children: [
                "$",
                ((W =
                  (X = (H = i.cardmarket) == null ? void 0 : H.prices) == null
                    ? void 0
                    : X.averageSellPrice) == null
                  ? void 0
                  : W.toFixed(2)) || "N/A",
              ],
            }),
            C.jsxs("div", {
              className: `add-to-deck-button ${y ? "show-quantity" : ""}`,
              children: [
                C.jsx("button", {
                  onClick: S,
                  className: "add-icon-button",
                  title: "Add to deck",
                  children: "+",
                }),
                y &&
                  C.jsxs("div", {
                    className: "quantity-input-container",
                    children: [
                      C.jsx("button", {
                        className: "quantity-button",
                        onClick: (j) => {
                          j.stopPropagation(), D();
                        },
                        children: "-",
                      }),
                      C.jsx("input", {
                        type: "text",
                        className: "quantity-input",
                        value: s,
                        readOnly: !0,
                      }),
                      C.jsx("button", {
                        className: "quantity-button",
                        onClick: (j) => {
                          j.stopPropagation(), _();
                        },
                        children: "+",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function Lv({ card: i, onCardClick: f, quantity: o }) {
  return C.jsx("div", {
    onClick: () => {
      f(i);
    },
    className: "deck-table-card-item",
    children: C.jsxs("div", {
      className: "card-item-header",
      children: [
        o > 0 && C.jsx("span", { className: "card-quantity", children: o }),
        C.jsx("span", { className: "card-name", children: i.name }),
        i.set &&
          i.set.ptcgoCode &&
          C.jsxs("span", {
            className: "card-set",
            children: ["(", i.set.ptcgoCode, ")"],
          }),
      ],
    }),
  });
}
const Qv = ({ onCreateDeck: i }) => {
    const [f, o] = $t.useState(""),
      s = (d) => {
        d.preventDefault(), f.trim() && (i(f), o(""));
      };
    return C.jsxs("div", {
      className: "deck-creator",
      children: [
        C.jsx("h3", { children: "Create New Deck" }),
        C.jsxs("form", {
          onSubmit: s,
          children: [
            C.jsx("input", {
              type: "text",
              placeholder: "Enter deck name",
              value: f,
              onChange: (d) => o(d.target.value),
            }),
            C.jsx("button", { type: "submit", children: "Create" }),
          ],
        }),
      ],
    });
  },
  wv = ({ deck: i, onCardLeave: f, onCardClick: o }) => {
    const [s, d] = $t.useState(!1),
      y = (_) => {
        console.log("Deck created:", _), d(!1);
      },
      g = i.reduce((_, D) => {
        let S = D.supertype ? D.supertype.toLowerCase() : "unknown",
          O = null;
        S === "trainer" &&
          (D.subtypes && D.subtypes.includes("Stadium")
            ? (O = "Stadium")
            : D.subtypes && D.subtypes.includes("Item")
            ? (O = "Item")
            : D.subtypes && D.subtypes.includes("Pokémon Tool")
            ? (O = "Pokémon Tool")
            : (O = "Supporter"));
        const H = S + (O ? `-${O}` : "");
        _[H] || (_[H] = []);
        const X = _[H].findIndex((W) => W.card.id === D.id);
        return (
          X >= 0
            ? (_[H][X].quantity += 1)
            : _[H].push({ card: D, quantity: 1 }),
          _
        );
      }, {});
    return C.jsxs("div", {
      className: "deck-table",
      children: [
        C.jsxs("div", {
          className: "deck-header",
          children: [
            C.jsx("h2", { children: "My Deck" }),
            C.jsx("button", {
              className: "new-deck-button",
              onClick: () => d(!0),
              children: "+",
            }),
            C.jsxs("div", {
              className: "deck-stats",
              children: ["Total Cards: ", i.length],
            }),
          ],
        }),
        s && C.jsx(Qv, { onCreateDeck: y }),
        Object.keys(g).length === 0
          ? C.jsx("div", {
              className: "empty-deck-message",
              children:
                "Your deck is empty. Use the search bar to find and add cards.",
            })
          : C.jsx("div", {
              className: "deck-sections",
              children: Object.entries(g).map(([_, D]) => {
                const [S, O] = _.split("-");
                let H = S.charAt(0).toUpperCase() + S.slice(1);
                return (
                  O && (H += ` (${O.charAt(0).toUpperCase() + O.slice(1)})`),
                  C.jsxs(
                    "div",
                    {
                      className: "deck-section",
                      children: [
                        C.jsx("div", {
                          className: "section-header",
                          children: C.jsxs("h3", {
                            children: [
                              H,
                              " (",
                              D.reduce((X, { quantity: W }) => X + W, 0),
                              ")",
                            ],
                          }),
                        }),
                        C.jsx("div", {
                          className: "section-cards",
                          children: D.map(({ card: X, quantity: W }) =>
                            C.jsx(
                              Lv,
                              {
                                card: X,
                                quantity: W,
                                onCardLeave: f,
                                onCardClick: o,
                              },
                              X.id
                            )
                          ),
                        }),
                      ],
                    },
                    _
                  )
                );
              }),
            }),
      ],
    });
  },
  Zv = ({
    onAddToDeck: i,
    results: f,
    onCardHover: o,
    onCardLeave: s,
    onCardClick: d,
    clearSelectedCard: y,
  }) =>
    !f || f.length === 0
      ? null
      : C.jsxs("div", {
          className: "search-results",
          children: [
            C.jsx("div", {
              className: "results-header",
              children: C.jsxs("h3", {
                children: ["Search Results (", f.length, ")"],
              }),
            }),
            C.jsx("div", {
              className: "results-list",
              children: f.map((g) =>
                C.jsx(
                  Xv,
                  {
                    card: g,
                    onAddToDeck: i,
                    onCardHover: o,
                    onCardLeave: s,
                    onCardClick: d,
                  },
                  g.id
                )
              ),
            }),
          ],
        }),
  Vv = ({ card: i, onClose: f, isHovered: o }) => {
    const s = $t.useRef(null);
    return C.jsxs("div", {
      className: "card-page",
      ref: s,
      children: [
        o
          ? null
          : C.jsx("button", {
              className: "close-button",
              onClick: f,
              children: "X",
            }),
        C.jsxs("h2", {
          children: [
            C.jsx("span", { children: i.name }),
            i.set.ptcgoCode &&
              C.jsxs("span", { children: ["(", i.set.ptcgoCode, ")"] }),
          ],
        }),
        C.jsxs("div", {
          className: "card-content",
          children: [
            i.images &&
              i.images.large &&
              C.jsx("img", {
                src: i.images.large,
                alt: i.name,
                className: "card-image",
              }),
            C.jsxs("div", {
              className: "card-details",
              children: [
                C.jsxs("p", {
                  children: [
                    C.jsx("strong", { children: "Supertype:" }),
                    " ",
                    i.supertype,
                  ],
                }),
                C.jsxs("p", {
                  children: [
                    C.jsx("strong", { children: "Subtypes:" }),
                    " ",
                    i.subtypes && i.subtypes.join(", "),
                  ],
                }),
                i.hp &&
                  C.jsxs("p", {
                    children: [C.jsx("strong", { children: "HP:" }), " ", i.hp],
                  }),
                i.rules &&
                  C.jsxs("p", {
                    children: [
                      C.jsx("strong", { children: "Rules:" }),
                      " ",
                      i.rules,
                    ],
                  }),
                i.abilities &&
                  i.abilities.length > 0 &&
                  C.jsxs("div", {
                    children: [
                      C.jsx("strong", { children: "Abilities:" }),
                      C.jsx("ul", {
                        children: i.abilities.map((d, y) =>
                          C.jsxs("li", { children: [d.name, " - ", d.text] }, y)
                        ),
                      }),
                    ],
                  }),
                i.cardmarket &&
                  i.cardmarket.prices &&
                  i.cardmarket.prices.averageSellPrice &&
                  C.jsxs("p", {
                    children: [
                      C.jsx("strong", { children: "Price:" }),
                      " $",
                      i.cardmarket.prices.averageSellPrice,
                    ],
                  }),
                i.types &&
                  C.jsxs("p", {
                    children: [
                      C.jsx("strong", { children: "Types:" }),
                      " ",
                      i.types.join(", "),
                    ],
                  }),
                i.retreatCost &&
                  C.jsxs("p", {
                    children: [
                      C.jsx("strong", { children: "Retreat Cost:" }),
                      " ",
                      i.retreatCost.join(", "),
                    ],
                  }),
                i.weaknesses &&
                  i.weaknesses.length > 0 &&
                  C.jsxs("p", {
                    children: [
                      C.jsx("strong", { children: "Weaknesses:" }),
                      " ",
                      i.weaknesses
                        .map((d) => `${d.type} ${d.value}`)
                        .join(", "),
                    ],
                  }),
                i.attacks &&
                  i.attacks.length > 0 &&
                  C.jsxs("div", {
                    children: [
                      C.jsx("h3", { children: "Attacks:" }),
                      C.jsx("ul", {
                        children: i.attacks.map((d, y) =>
                          C.jsxs(
                            "li",
                            {
                              children: [
                                C.jsxs("strong", { children: [d.name, ":"] }),
                                " ",
                                d.text,
                                " Cost:",
                                " ",
                                d.cost && d.cost.join(", "),
                                ", Damage:",
                                " ",
                                d.damage,
                              ],
                            },
                            y
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function Kv() {
  const [i, f] = $t.useState([]),
    [o, s] = $t.useState(""),
    [d, y] = $t.useState([]),
    [g, _] = $t.useState(null),
    [D, S] = $t.useState(null),
    [O, H] = $t.useState(!1),
    [X, W] = $t.useState({ top: 0, left: 0 }),
    j = "https://api.pokemontcg.io/v2";
  $t.useEffect(() => {
    console.log("deck update", i);
  }, [i]);
  const Q = async (rt) => {
      try {
        return (await Rt.get(`${j}/cards`, { params: { q: `name:${rt}*` } }))
          .data.data;
      } catch (Z) {
        return console.error("Error fetching cards from PTCG API", Z), [];
      }
    },
    Y = async (rt) => {
      if (!rt.trim()) {
        y([]);
        return;
      }
      try {
        const Z = await Q(rt);
        y(Z), _(null), S(null), H(!1);
      } catch (Z) {
        console.error("Search failed", Z), y([]);
      }
    },
    st = async (rt, Z) => {
      try {
        const gt = localStorage.getItem("deckId"),
          Et = await Rt.post(`/api/DecksIndex/${gt}/addCard`, {
            deckId: gt,
            cardId: rt.id,
            quantity: Z,
          });
        Et.status === 200
          ? (console.log("Deck updated:", Et.data), f(Et.data.cards))
          : console.error("Failed to add card to deck");
      } catch (gt) {
        console.error("Error adding card to deck:", gt);
      }
      tt();
    },
    it = (rt) => {
      console.log("card", rt), S(rt);
    },
    tt = () => {
      S(null);
    };
  return C.jsxs("div", {
    className: "app-container",
    children: [
      C.jsx("header", {
        className: "app-header",
        children: C.jsx("h1", { children: "PTCG Deck Builder" }),
      }),
      C.jsxs("main", {
        className: "app-main",
        children: [
          C.jsx(Gv, { onSearch: Y }),
          C.jsxs("div", {
            className: "app-columns",
            children: [
              C.jsx("div", {
                className: "column column-deck-table",
                children: C.jsx(wv, {
                  deck: i,
                  onCardClick: it,
                  clearSelectedCard: tt,
                }),
              }),
              D
                ? C.jsx("div", {
                    children: C.jsx(Vv, { card: D, onClose: tt }),
                  })
                : null,
              d.length > 0
                ? C.jsx("div", {
                    className: "column column-search-results",
                    children: C.jsx(Zv, {
                      results: d,
                      onAddToDeck: st,
                      onCardClick: it,
                      clearSelectedCard: tt,
                    }),
                  })
                : null,
            ],
          }),
        ],
      }),
      C.jsx("footer", {
        className: "app-footer",
        children: C.jsx("p", { children: "© 2025 PTCG Deck Builder" }),
      }),
    ],
  });
}
const Jv = sm.createRoot(document.getElementById("root"));
Jv.render(C.jsx(em.StrictMode, { children: C.jsx(Kv, {}) }));
