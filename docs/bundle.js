(function () {
    'use strict';

    var n,
        l$1,
        u$1,
        t$1,
        r$1,
        o$1,
        f$1,
        e$1 = {},
        c$1 = [],
        s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function a$1(n, l) {
      for (var u in l) n[u] = l[u];

      return n;
    }

    function h$1(n) {
      var l = n.parentNode;
      l && l.removeChild(n);
    }

    function v$1(l, u, i) {
      var t,
          r,
          o,
          f = {};

      for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];

      if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
      return y$1(l, f, t, r, null);
    }

    function y$1(n, i, t, r, o) {
      var f = {
        type: n,
        props: i,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++u$1 : o
      };
      return null == o && null != l$1.vnode && l$1.vnode(f), f;
    }

    function d(n) {
      return n.children;
    }

    function _(n, l) {
      this.props = n, this.context = l;
    }

    function k$1(n, l) {
      if (null == l) return n.__ ? k$1(n.__, n.__.__k.indexOf(n) + 1) : null;

      for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

      return "function" == typeof n.type ? k$1(n) : null;
    }

    function b$1(n) {
      var l, u;

      if (null != (n = n.__) && null != n.__c) {
        for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
          n.__e = n.__c.base = u.__e;
          break;
        }

        return b$1(n);
      }
    }

    function m$1(n) {
      (!n.__d && (n.__d = !0) && t$1.push(n) && !g$2.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(g$2);
    }

    function g$2() {
      for (var n; g$2.__r = t$1.length;) n = t$1.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      }), t$1 = [], n.some(function (n) {
        var l, u, i, t, r, o;
        n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = a$1({}, t)).__v = t.__v + 1, j$2(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? k$1(t) : r, t.__h), z$1(u, t), t.__e != r && b$1(t)));
      });
    }

    function w$2(n, l, u, i, t, r, o, f, s, a) {
      var h,
          v,
          p,
          _,
          b,
          m,
          g,
          w = i && i.__k || c$1,
          A = w.length;

      for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y$1(null, _, null, null, _) : Array.isArray(_) ? y$1(d, {
        children: _
      }, null, null, null) : _.__b > 0 ? y$1(_.type, _.props, _.key, null, _.__v) : _)) {
        if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
          if ((p = w[v]) && _.key == p.key && _.type === p.type) {
            w[v] = void 0;
            break;
          }

          p = null;
        }
        j$2(n, _, p = p || e$1, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x$1(_, s, n) : s = P$1(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k$1(p));
      }

      for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k$1(i, h + 1)), N(w[h], w[h]));

      if (g) for (h = 0; h < g.length; h++) M$2(g[h], g[++h], g[++h]);
    }

    function x$1(n, l, u) {
      for (var i, t = n.__k, r = 0; t && r < t.length; r++) (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? x$1(i, l, u) : P$1(u, i, i, t, i.__e, l));

      return l;
    }

    function A$2(n, l) {
      return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
        A$2(n, l);
      }) : l.push(n)), l;
    }

    function P$1(n, l, u, i, t, r) {
      var o, f, e;
      if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
        for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

        n.insertBefore(t, r), o = r;
      }
      return void 0 !== o ? o : t.nextSibling;
    }

    function C$1(n, l, u, i, t) {
      var r;

      for (r in u) "children" === r || "key" === r || r in l || H(n, r, null, u[r], i);

      for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || H(n, r, l[r], u[r], i);
    }

    function $$1(n, l, u) {
      "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s$1.test(l) ? u : u + "px";
    }

    function H(n, l, u, i, t) {
      var r;

      n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;else {
          if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $$1(n.style, l, "");
          if (u) for (l in u) i && u[l] === i[l] || $$1(n.style, l, u[l]);
        }
      } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? T$2 : I, r) : n.removeEventListener(l, r ? T$2 : I, r);else if ("dangerouslySetInnerHTML" !== l) {
        if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
          n[l] = null == u ? "" : u;
          break n;
        } catch (n) {}
        "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
      }
    }

    function I(n) {
      this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
    }

    function T$2(n) {
      this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
    }

    function j$2(n, u, i, t, r, o, f, e, c) {
      var s,
          h,
          v,
          y,
          p,
          k,
          b,
          m,
          g,
          x,
          A,
          P = u.type;
      if (void 0 !== u.constructor) return null;
      null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l$1.__b) && s(u);

      try {
        n: if ("function" == typeof P) {
          if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _(m, x), h.constructor = P, h.render = O$1), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a$1({}, h.__s)), a$1(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
            if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
              h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
                n && (n.__ = u);
              }), h.__h.length && f.push(h);
              break n;
            }

            null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
              h.componentDidUpdate(y, p, k);
            });
          }
          h.context = x, h.props = m, h.state = h.__s, (s = l$1.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a$1(a$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d && null == s.key ? s.props.children : s, w$2(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L$1(i.__e, u, i, t, r, o, f, c);

        (s = l$1.diffed) && s(u);
      } catch (n) {
        u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l$1.__e(n, u, i);
      }
    }

    function z$1(n, u) {
      l$1.__c && l$1.__c(u, n), n.some(function (u) {
        try {
          n = u.__h, u.__h = [], n.some(function (n) {
            n.call(u);
          });
        } catch (n) {
          l$1.__e(n, u.__v);
        }
      });
    }

    function L$1(l, u, i, t, r, o, f, c) {
      var s,
          a,
          v,
          y = i.props,
          p = u.props,
          d = u.type,
          _ = 0;
      if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) if ((s = o[_]) && (s === l || (d ? s.localName == d : 3 == s.nodeType))) {
        l = s, o[_] = null;
        break;
      }

      if (null == l) {
        if (null === d) return document.createTextNode(p);
        l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, c = !1;
      }

      if (null === d) y === p || c && l.data === p || (l.data = p);else {
        if (o = o && n.call(l.childNodes), a = (y = i.props || e$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
          if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
          (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
        }

        if (C$1(l, p, y, r, c), v) u.__k = [];else if (_ = u.props.children, w$2(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && k$1(i, 0), c), null != o) for (_ = o.length; _--;) null != o[_] && h$1(o[_]);
        c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1));
      }
      return l;
    }

    function M$2(n, u, i) {
      try {
        "function" == typeof n ? n(u) : n.current = u;
      } catch (n) {
        l$1.__e(n, i);
      }
    }

    function N(n, u, i) {
      var t, r;

      if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M$2(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
          t.componentWillUnmount();
        } catch (n) {
          l$1.__e(n, u);
        }
        t.base = t.__P = null;
      }

      if (t = n.__k) for (r = 0; r < t.length; r++) t[r] && N(t[r], u, "function" != typeof n.type);
      i || null == n.__e || h$1(n.__e), n.__e = n.__d = void 0;
    }

    function O$1(n, l, u) {
      return this.constructor(n, u);
    }

    function S$1(u, i, t) {
      var r, o, f;
      l$1.__ && l$1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j$2(i, u = (!r && t || i).__k = v$1(d, null, [u]), o || e$1, e$1, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z$1(f, u);
    }

    function D(n, l) {
      var u = {
        __c: l = "__cC" + f$1++,
        __: n,
        Consumer: function (n, l) {
          return n.children(l);
        },
        Provider: function (n) {
          var u, i;
          return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
            return i;
          }, this.shouldComponentUpdate = function (n) {
            this.props.value !== n.value && u.some(m$1);
          }, this.sub = function (n) {
            u.push(n);
            var l = n.componentWillUnmount;

            n.componentWillUnmount = function () {
              u.splice(u.indexOf(n), 1), l && l.call(n);
            };
          }), n.children;
        }
      };
      return u.Provider.__ = u.Consumer.contextType = u;
    }

    n = c$1.slice, l$1 = {
      __e: function (n, l) {
        for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
          if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
        } catch (l) {
          n = l;
        }

        throw n;
      }
    }, u$1 = 0, _.prototype.setState = function (n, l) {
      var u;
      u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), "function" == typeof n && (n = n(a$1({}, u), this.props)), n && a$1(u, n), null != n && this.__v && (l && this.__h.push(l), m$1(this));
    }, _.prototype.forceUpdate = function (n) {
      this.__v && (this.__e = !0, n && this.__h.push(n), m$1(this));
    }, _.prototype.render = d, t$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$2.__r = 0, f$1 = 0;

    var t,
        u,
        r,
        o = 0,
        i = [],
        c = l$1.__b,
        f = l$1.__r,
        e = l$1.diffed,
        a = l$1.__c,
        v = l$1.unmount;

    function m(t, r) {
      l$1.__h && l$1.__h(u, t, o || r), o = 0;
      var i = u.__H || (u.__H = {
        __: [],
        __h: []
      });
      return t >= i.__.length && i.__.push({}), i.__[t];
    }

    function l(n) {
      return o = 1, p(w$1, n);
    }

    function p(n, r, o) {
      var i = m(t++, 2);
      return i.t = n, i.__c || (i.__ = [o ? o(r) : w$1(void 0, r), function (n) {
        var t = i.t(i.__[0], n);
        i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
      }], i.__c = u), i.__;
    }

    function y(r, o) {
      var i = m(t++, 3);
      !l$1.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
    }

    function h(r, o) {
      var i = m(t++, 4);
      !l$1.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
    }

    function s(n) {
      return o = 5, A$1(function () {
        return {
          current: n
        };
      }, []);
    }

    function A$1(n, u) {
      var r = m(t++, 7);
      return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
    }

    function F(n, t) {
      return o = 8, A$1(function () {
        return n;
      }, t);
    }

    function T$1(n) {
      var r = u.context[n.__c],
          o = m(t++, 9);
      return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
    }

    function x() {
      i.forEach(function (t) {
        if (t.__P) try {
          t.__H.__h.forEach(g$1), t.__H.__h.forEach(j$1), t.__H.__h = [];
        } catch (u) {
          t.__H.__h = [], l$1.__e(u, t.__v);
        }
      }), i = [];
    }

    l$1.__b = function (n) {
      u = null, c && c(n);
    }, l$1.__r = function (n) {
      f && f(n), t = 0;
      var r = (u = n.__c).__H;
      r && (r.__h.forEach(g$1), r.__h.forEach(j$1), r.__h = []);
    }, l$1.diffed = function (t) {
      e && e(t);
      var o = t.__c;
      o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === l$1.requestAnimationFrame || ((r = l$1.requestAnimationFrame) || function (n) {
        var t,
            u = function () {
          clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
        },
            r = setTimeout(u, 100);

        b && (t = requestAnimationFrame(u));
      })(x)), u = null;
    }, l$1.__c = function (t, u) {
      u.some(function (t) {
        try {
          t.__h.forEach(g$1), t.__h = t.__h.filter(function (n) {
            return !n.__ || j$1(n);
          });
        } catch (r) {
          u.some(function (n) {
            n.__h && (n.__h = []);
          }), u = [], l$1.__e(r, t.__v);
        }
      }), a && a(t, u);
    }, l$1.unmount = function (t) {
      v && v(t);
      var u = t.__c;
      if (u && u.__H) try {
        u.__H.__.forEach(g$1);
      } catch (t) {
        l$1.__e(t, u.__v);
      }
    };
    var b = "function" == typeof requestAnimationFrame;

    function g$1(n) {
      var t = u;
      "function" == typeof n.__c && n.__c(), u = t;
    }

    function j$1(n) {
      var t = u;
      n.__c = n.__(), u = t;
    }

    function k(n, t) {
      return !n || n.length !== t.length || t.some(function (t, u) {
        return t !== n[u];
      });
    }

    function w$1(n, t) {
      return "function" == typeof t ? t(n) : t;
    }

    /**
     * Debug hook.
     *
     * Given a value or set of values, emits a console error if any of them change from one render to the next.
     */

    function useEnsureStability() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      useHelper(values.length, 0);
      values.forEach(useHelper);
      return;

      function useHelper(value, index) {
        // Make sure that the provided functions are perfectly stable across renders
        const helperToEnsureStability = s(value);
        const shownError = s(false);

        if (helperToEnsureStability.current != value) {
          if (!shownError.current) {
            console.error(`This hook requires some or all of its arguments remain stable across each render; please check the ${index}-indexed value that was checked.`);
            debugger;
            shownError.current = true;
          }
        }
      }
    }
    /**
     * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
     *
     * To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
     *
     * To summarize, it's like a `useState`-`useEffect` mashup:
     *
     * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
     * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
     * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
     * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
     *
     * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
     *
     * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
     * @param getInitialValue If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
     * @returns
     */

    function usePassiveState(onChange, getInitialValue) {
      const valueRef = s(Unset$1);
      const warningRef = s(false);
      const cleanupCallbackRef = s(undefined); // Make sure that the provided functions are perfectly stable across renders

      useEnsureStability(onChange, getInitialValue); // Shared between "dependency changed" and "component unmounted".

      const onShouldCleanUp = F(() => {
        let cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback) cleanupCallback();
      }, []); // There are a couple places where we'd like to use our initial
      // value in place of having no value at all yet.
      // This is the shared code for that, used on mount and whenever
      // getValue is called.

      const tryEnsureValue = F(() => {
        if (valueRef.current === Unset$1 && getInitialValue != undefined) {
          try {
            var _onChange;

            const initialValue = getInitialValue();
            valueRef.current = initialValue;
            cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
          } catch (ex) {// Exceptions are intentional to allow bailout (without exposing the Unset symbol)
          }
        }
      }, [
        /* getInitialValue and onChange intentionally omitted */
      ]);
      const getValue = F(() => {
        if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."); // The first time we call getValue, if we haven't been given a value yet,
        // (and we were given an initial value to use)
        // return the initial value instead of nothing.

        if (valueRef.current === Unset$1) tryEnsureValue();
        return valueRef.current === Unset$1 ? undefined : valueRef.current;
      }, []);
      h(() => {
        // Make sure we've run our effect at least once on mount.
        // (If we have an initial value, of course)
        tryEnsureValue();
      }, []); // The actual code the user calls to (possibly) run a new effect.

      const setValue = F(arg => {
        const prevDep = valueRef.current === Unset$1 ? undefined : getValue();
        const dep = arg instanceof Function ? arg(prevDep) : arg;

        if (dep !== valueRef.current) {
          var _onChange2;

          // Indicate to the user that they shouldn't call getValue during onChange
          warningRef.current = true; // Call any registerd cleanup function

          onShouldCleanUp();
          cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(dep, prevDep)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
          valueRef.current = dep; // Allow the user to normally call getValue again

          warningRef.current = false;
        }
      }, []);
      return [getValue, setValue];
    }
    const Unset$1 = Symbol();

    function useMergedChildren(lhsProps, rhsProps) {
      const lhs = lhsProps === null || lhsProps === void 0 ? void 0 : lhsProps.children;
      const rhs = rhsProps === null || rhsProps === void 0 ? void 0 : rhsProps.children;

      if (lhs == null && rhs == null) {
        return undefined;
      } else if (lhs == null) {
        return rhs;
      } else if (rhs == null) {
        return lhs;
      } else {
        let ret = v$1(d, {}, lhs, rhs);
        return ret;
      }
    }

    function toVal(mix) {
      var k,
          y,
          str = '';

      if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
      } else if (typeof mix === 'object') {
        if (Array.isArray(mix)) {
          for (k = 0; k < mix.length; k++) {
            if (mix[k]) {
              if (y = toVal(mix[k])) {
                str && (str += ' ');
                str += y;
              }
            }
          }
        } else {
          for (k in mix) {
            if (mix[k]) {
              str && (str += ' ');
              str += k;
            }
          }
        }
      }

      return str;
    }

    function clsx () {
      var i = 0,
          tmp,
          x,
          str = '';

      while (i < arguments.length) {
        if (tmp = arguments[i++]) {
          if (x = toVal(tmp)) {
            str && (str += ' ');
            str += x;
          }
        }
      }

      return str;
    }

    /**
     * Given two sets of props, merges their `class` and `className` properties.
     * Duplicate classes are removed (order doesn't matter anyway).
     *
     * @param lhs Classes of the first component
     * @param rhs Classes of the second component
     * @returns A string representing all combined classes from both arguments.
     */

    function useMergedClasses(lhs, rhs) {
      // Note: For the sake of forward compatibility, this function is labelled as
      // a hook, but as it uses no other hooks it technically isn't one.
      return mergeClasses(lhs, rhs);
    }

    function mergeClasses(lhs, rhs) {
      const lhsClass = lhs === null || lhs === void 0 ? void 0 : lhs.class;
      const lhsClassName = lhs === null || lhs === void 0 ? void 0 : lhs.className;
      const rhsClass = rhs === null || rhs === void 0 ? void 0 : rhs.class;
      const rhsClassName = rhs === null || rhs === void 0 ? void 0 : rhs.className;

      if (lhsClass || rhsClass || lhsClassName || rhsClassName) {
        let lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
        let rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
        let allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)]);
        return Array.from(allClasses).join(" ");
      } else {
        return undefined;
      }
    }

    function processRef(instance, ref) {
      if (typeof ref === "function") {
        ref(instance);
      } else if (ref != null) {
        ref.current = instance;
      } else {
        debugger; // Intentional

        console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
      }
    }
    /**
     * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
     * @param lhs
     * @param rhs
     * @returns
     */


    function useMergedRefs() {
      return function (lhsProps, rhsProps) {
        const lhs = lhsProps === null || lhsProps === void 0 ? void 0 : lhsProps.ref;
        const rhs = rhsProps === null || rhsProps === void 0 ? void 0 : rhsProps.ref;
        let combined = F(current => {
          processRef(current, lhs);
          processRef(current, rhs);
        }, [lhs, rhs]);

        if (lhs == null && rhs == null) {
          return undefined;
        } else if (lhs == null) {
          return rhs;
        } else if (rhs == null) {
          return lhs;
        } else {
          return combined;
        }
      };
    }
    /*
    function typetest<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {

        const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

        function acceptsRef(ref: Ref<any>) { }
        function acceptsOptionalRef(ref: Ref<any> | undefined) { }

        const c = [
            useMergedRefs<HTMLInputElement>()(undefined, undefined),
            useMergedRefs<HTMLInputElement>()({}, undefined),
            useMergedRefs<HTMLInputElement>()(props, undefined),
            useMergedRefs<HTMLInputElement>()(undefined, props),
            useMergedRefs<HTMLInputElement>()(props, props),
            useMergedRefs<HTMLInputElement>()({ ref }, props),
            useMergedRefs<HTMLInputElement>()({ ref }, { ref: undefined }),
            useMergedRefs<HTMLInputElement>()({ ref: undefined }, { ref }),
            useMergedRefs<HTMLInputElement>()({ ref }, { ref }),
        ] as const;

        /// @ts-expect-error
        acceptsRef(c[0]);
        /// @ts-expect-error
        acceptsRef(c[1]);

        acceptsOptionalRef(c[2]);
        acceptsOptionalRef(c[3]);
        acceptsOptionalRef(c[4]);

        /// @ts-expect-error TODO
        acceptsRef(c[5]);
        acceptsRef(c[6]);
        acceptsRef(c[7]);
        acceptsRef(c[8]);
    }
    */

    function styleStringToObject(style) {
      // TODO: This sucks D:
      return Object.fromEntries(style.split(";").map(statement => statement.split(":")));
    }
    /**
     * Merges two style objects, returning the result.
     *
     * @param style The user-given style prop for this component
     * @param obj The CSS properties you want added to the user-given style
     * @returns A CSS object containing the properties of both objects.
     */


    function useMergedStyles(lhs, rhs) {
      var _lhs$style, _rhs$style2;

      // Easy case, when there are no styles to merge return nothing.
      if (!(lhs !== null && lhs !== void 0 && lhs.style) && !(rhs !== null && rhs !== void 0 && rhs.style)) return undefined;

      if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs !== null && lhs !== void 0 && lhs.style && !(rhs !== null && rhs !== void 0 && rhs.style)) return lhs.style;
        if (!(lhs !== null && lhs !== void 0 && lhs.style) && rhs !== null && rhs !== void 0 && rhs.style) return rhs.style; // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.

        if (lhs !== null && lhs !== void 0 && lhs.style && rhs !== null && rhs !== void 0 && rhs.style) {
          // (useMergedStyles isn't a true hook -- this isn't a violation)
          if (typeof (lhs === null || lhs === void 0 ? void 0 : lhs.style) == "string") return useMergedStyles({
            style: styleStringToObject(lhs === null || lhs === void 0 ? void 0 : lhs.style)
          }, rhs);
          if (typeof (rhs === null || rhs === void 0 ? void 0 : rhs.style) == "string") return useMergedStyles(lhs, {
            style: styleStringToObject(rhs === null || rhs === void 0 ? void 0 : rhs.style)
          });
        } // Logic???


        return undefined;
      } // They're both strings, just concatenate them.


      if (typeof (lhs === null || lhs === void 0 ? void 0 : lhs.style) == "string") {
        var _rhs$style;

        return `${lhs.style};${(_rhs$style = rhs === null || rhs === void 0 ? void 0 : rhs.style) !== null && _rhs$style !== void 0 ? _rhs$style : ""}`;
      } // They're both objects, just merge them.


      return { ...((_lhs$style = lhs === null || lhs === void 0 ? void 0 : lhs.style) !== null && _lhs$style !== void 0 ? _lhs$style : {}),
        ...((_rhs$style2 = rhs === null || rhs === void 0 ? void 0 : rhs.style) !== null && _rhs$style2 !== void 0 ? _rhs$style2 : {})
      };
    }

    let log = str => {
      debugger;
      console.warn(`Trying to merge two props with the same name: ${str}`);
      /* Intentional */
    };
    /**
     * Given two sets of props, merges them and returns the result.
     *
     * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
     * @param lhs2
     * @param rhs2
     * @returns
     */

    function useMergedProps() {
      return function (lhs2, rhs2) {
        // First, put in all the properties that are easy to reason about
        // and all lhs props. We're going to merge in rhs just after.
        const {
          children: lhsChildren,
          class: lhsClass,
          className: lhsClassName,
          style: lhsStyle,
          ref: lhsRef,
          ...lhs
        } = lhs2;
        const {
          children: rhsChildren,
          class: rhsClass,
          className: rhsClassName,
          style: rhsStyle,
          ref: rhsRef,
          ...rhs
        } = rhs2;
        let ret = { ...lhs,
          ref: useMergedRefs()(lhs2, rhs2),
          style: useMergedStyles(lhs2, rhs2),
          className: useMergedClasses(lhs2, rhs2),
          children: useMergedChildren(lhs2, rhs2)
        };
        if (ret.ref === undefined) delete ret.ref;
        if (ret.style === undefined) delete ret.style;
        if (ret.className === undefined) delete ret.className;
        if (ret.children === undefined) delete ret.children; // Now, do *everything* else
        // Merge every remaining existing entry in lhs with what we've already put in ret.
        //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];

        const rhsEntries = Object.entries(rhs);

        for (const [rhsKey, rhsValue] of rhsEntries) {
          const lhsValue = lhs[rhsKey];

          if (typeof lhsValue === "function" || typeof rhsValue === "function") {
            // They're both functions that can be merged (or one's a function and the other's null).
            // Not an *easy* case, but a well-defined one.
            const merged = mergeFunctions(lhsValue, rhsValue);
            ret[rhsKey] = merged;
          } else {
            // Uh...we're here because one of them's null, right?
            if (lhsValue == null && rhsValue == null) {
              if (rhsValue === null && lhsValue === undefined) ret[rhsKey] = rhsValue;else ret[rhsKey] = lhsValue;
            }

            if (lhsValue == null) ret[rhsKey] = rhsValue;else if (rhsValue == null) ret[rhsKey] = lhsValue;else if (rhsValue == lhsValue) ; else {
              var _log;

              // Ugh.
              // No good strategies here, just log it if requested
              (_log = log) === null || _log === void 0 ? void 0 : _log(`Could not merge incompatible prop "${rhsKey}" (type: ${typeof rhsValue}, values: [${lhsValue}, ${rhsValue}])`);
              ret[rhsKey] = rhsValue;
            }
          }
        }

        return ret;
      };
    }

    function mergeFunctions(lhs, rhs) {
      if (!lhs) return rhs;
      if (!rhs) return lhs;
      return function () {
        let lv = lhs(...arguments);
        let rv = rhs(...arguments);
        if (lv instanceof Promise || rv instanceof Promise) return Promise.all([lv, rv]);
      };
    }
    /*
    function test<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {

        const id0: GenericGet<{}, "id", string> = "";
        const id3: GenericGet<{ id: undefined }, "id", string> = undefined;
        const id4: GenericGet<{ id: undefined }, "id", string> = undefined;
        const id5: GenericGet<{ id: undefined }, "id", string> = undefined;
        const id6: GenericGet<{ id: undefined }, "id", string> = undefined;
        //const id2: ZipSingle<string | undefined, string | undefined> = undefined;
        const id1: ZipObject<{ id: undefined }, { id: string }> = { id: undefined };

        type M1 = GenericGet<P, "style", string>;
        type M2 = GenericGet<{}, "style", string>;
        const m1: M1 = "";
        const m2: M1 = undefined;
        /// @ts-expect-error    Because number isn't assignable to string
        const m3: M1 = 0;

        const m4: M2 = "";
        const m5: M2 = undefined;
        /// @ts-expect-error    Because number isn't assignable to string
        const m6: M2 = 0;

        const p1: MergedProps<HTMLInputElement, {}, { id: string }> = useMergedProps<HTMLInputElement>()({}, { id: "string" });
        const p2: MergedProps<HTMLInputElement, { id: undefined }, { id: string }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: "string" });
        const p3: MergedProps<HTMLInputElement, { id: undefined }, { id: undefined }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: undefined });
        const p4: MergedProps<HTMLInputElement, {}, {}> = useMergedProps<HTMLInputElement>()({}, {});
        const p5 = useMergedProps<HTMLInputElement>()(props, {});
        const p6 = useMergedProps<HTMLInputElement>()(props, { id: undefined });
        const p7 = useMergedProps<HTMLInputElement>()(props, { id: "string" });


        p1.id?.concat("");
        p2.id?.concat("");
        /// @ts-expect-error    id can't be anything but undefined
        p3.id?.concat("");
        /// @ts-expect-error    id can't be anything but undefined
        p4.id?.concat("");


        p5.id?.concat("");
        p6.id?.concat("");
        p7.id?.concat("");

        /// @ts-expect-error    id must contain undefined
        p5.id.concat("");
        /// @ts-expect-error    id must contain undefined
        p6.id.concat("");
        /// @ts-expect-error    id must contain undefined
        p7.id.concat("");


        if (p5.allowFullScreen === undefined) {}
        else if (p5.allowFullScreen === false) {}
        else if (p5.allowFullScreen === true) {}
        else {
            acceptsNever(p5.allowFullScreen);
        }


        if (p6.allowFullScreen === undefined) {}
        else if (p6.allowFullScreen === false) {}
        else if (p6.allowFullScreen === true) {}
        else {
            acceptsNever(p6.allowFullScreen);
        }


        if (p7.allowFullScreen === undefined) {}
        else if (p7.allowFullScreen === false) {}
        else if (p7.allowFullScreen === true) {}
        else {
            acceptsNever(p7.allowFullScreen);
        }


        // Make sure it works recursively
        const r1a = useMergedProps<HTMLInputElement>()({}, p1);
        const r1b = useMergedProps<HTMLInputElement>()(props, p1);
        const r2a = useMergedProps<HTMLInputElement>()({}, p2);
        const r2b = useMergedProps<HTMLInputElement>()(props, p2);
        const r3a = useMergedProps<HTMLInputElement>()({}, p3);
        const r3b = useMergedProps<HTMLInputElement>()(props, p3);
        const r4a = useMergedProps<HTMLInputElement>()({}, p4);
        const r4b = useMergedProps<HTMLInputElement>()(props, p4);
        const r5a = useMergedProps<HTMLInputElement>()({}, p5);
        const r5b = useMergedProps<HTMLInputElement>()(props, p5);
        const r6a = useMergedProps<HTMLInputElement>()({}, p6);
        const r6b = useMergedProps<HTMLInputElement>()(props, p6);
        const r7a = useMergedProps<HTMLInputElement>()({}, p7);
        const r7b = useMergedProps<HTMLInputElement>()(props, p7);


        r1a.id?.concat("");
        r1b.id?.concat("");
        r2a.id?.concat("");
        r2b.id?.concat("");
        // @ts-expect-error    id can't be anything but undefined
        r3a.id?.concat("");
        r3b.id?.concat("");
        /// @ts-expect-error    id can't be anything but undefined
        r4a.id?.concat("");
        r4b.id?.concat("");


        r5a.id?.concat("");
        r5b.id?.concat("");
        r6a.id?.concat("");
        r6b.id?.concat("");
        r7a.id?.concat("");
        r7b.id?.concat("");

        /// @ts-expect-error    id must contain undefined
        r5a.id.concat("");
        /// @ts-expect-error    id must contain undefined
        r5b.id.concat("");
        /// @ts-expect-error    id must contain undefined
        r6a.id.concat("");
        /// @ts-expect-error    id must contain undefined
        r6b.id.concat("");
        /// @ts-expect-error    id must contain undefined
        r7a.id.concat("");
        /// @ts-expect-error    id must contain undefined
        r7b.id.concat("");


        if (r5a.allowFullScreen === undefined) {}
        else if (r5a.allowFullScreen === false) {}
        else if (r5a.allowFullScreen === true) {}
        else {
            acceptsNever(r5a.allowFullScreen);
        }


        if (r5b.allowFullScreen === undefined) {}
        else if (r5b.allowFullScreen === false) {}
        else if (r5b.allowFullScreen === true) {}
        else {
            acceptsNever(r5b.allowFullScreen);
        }


        if (r6a.allowFullScreen === undefined) {}
        else if (r6a.allowFullScreen === false) {}
        else if (r6a.allowFullScreen === true) {}
        else {
            acceptsNever(r6a.allowFullScreen);
        }


        if (r6b.allowFullScreen === undefined) {}
        else if (r6b.allowFullScreen === false) {}
        else if (r6b.allowFullScreen === true) {}
        else {
            acceptsNever(r6b.allowFullScreen);
        }


        if (r7a.allowFullScreen === undefined) {}
        else if (r7a.allowFullScreen === false) {}
        else if (r7a.allowFullScreen === true) {}
        else {
            acceptsNever(r7a.allowFullScreen);
        }


        if (r7b.allowFullScreen === undefined) {}
        else if (r7b.allowFullScreen === false) {}
        else if (r7b.allowFullScreen === true) {}
        else {
            acceptsNever(r7b.allowFullScreen);
        }

    }
    function acceptsNever(n: never) {}
    */

    function returnNull$1() {
      return null;
    }
    /**
     * Allows accessing the element a ref references as soon as it does so.
     * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
     * adding a RefCallback and merging it with any existing ref that existed on the props.
     *
     * Don't forget to provide the Element as the type argument!
     *
     * @returns The element, and the sub-hook that makes it retrievable.
     */


    function useRefElement(args) {
      const onElementChange = args === null || args === void 0 ? void 0 : args.onElementChange; // Let us store the actual (reference to) the element we capture

      const [getElement, setElement] = usePassiveState(onElementChange, returnNull$1); // Create a RefCallback that's fired when mounted 
      // and that notifies us of our element when we have it

      const myRef = F(e => {
        if (e) setElement(() => e);
      }, []);
      const useRefElementProps = F(props => useMergedProps()({
        ref: myRef
      }, props), []); // Return both the element and the hook that modifies 
      // the props and allows us to actually find the element

      return {
        useRefElementProps,
        getElement
      };
    }

    function returnNull() {
      return null;
    }

    function useElementSize(_ref) {
      let {
        getObserveBox,
        onSizeChange
      } = _ref;
      useEnsureStability(getObserveBox, onSizeChange);
      const [getSize, setSize] = usePassiveState(onSizeChange, returnNull);
      const currentObserveBox = s(undefined);
      const needANewObserver = F((element, observeBox) => {
        if (element) {
          const document = element.ownerDocument;
          const window = document.defaultView;

          const handleUpdate = () => {
            if (element.isConnected) {
              const {
                clientWidth,
                scrollWidth,
                offsetWidth,
                clientHeight,
                scrollHeight,
                offsetHeight,
                clientLeft,
                scrollLeft,
                offsetLeft,
                clientTop,
                scrollTop,
                offsetTop
              } = element;
              setSize({
                clientWidth,
                scrollWidth,
                offsetWidth,
                clientHeight,
                scrollHeight,
                offsetHeight,
                clientLeft,
                scrollLeft,
                offsetLeft,
                clientTop,
                scrollTop,
                offsetTop
              });
            }
          };

          if (window && "ResizeObserver" in window) {
            const observer = new ResizeObserver(entries => {
              handleUpdate();
            });
            observer.observe(element, {
              box: observeBox
            });
            return () => observer.disconnect();
          } else {
            document.addEventListener("resize", handleUpdate, {
              passive: true
            });
            return () => document.removeEventListener("resize", handleUpdate);
          }
        }
      }, []);
      const {
        getElement,
        useRefElementProps
      } = useRefElement({
        onElementChange: F(e => needANewObserver(e, getObserveBox === null || getObserveBox === void 0 ? void 0 : getObserveBox()), [])
      });
      y(() => {
        if (getObserveBox) {
          if (currentObserveBox.current !== getObserveBox()) needANewObserver(getElement(), getObserveBox());
        }
      });
      return {
        getElement,
        getSize,
        useElementSizeProps: useRefElementProps
      };
    }

    function capitalize(str) {
      return str[0].toUpperCase() + str.substr(1);
    }
    /**
     * Inspects the element's style and determines the logical direction that text flows.
     *
     * Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
     * But `transform`, `clip`, etc. don't.
     *
     * This is provided so that CSS properties can consistently use those logical properties.
     *
     * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
     *
     * @returns An object containing the following functions:
     * * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders)
     * * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size.
     * * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block".
     * * `convertToPhysicalOrientation`:  Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".
     */


    function useLogicalDirection(_ref) {
      let {
        onLogicalDirectionChange
      } = _ref;
      useEnsureStability(onLogicalDirectionChange);
      const [getComputedStyles, setComputedStyles] = usePassiveState(null);
      const {
        getElement,
        useRefElementProps
      } = useRefElement({
        onElementChange: F(element => {
          if (element) {
            setComputedStyles(window.getComputedStyle(element));
          }
        }, [])
      }); // TODO: There's no way to refresh which writing mode we have once mounted.
      //   A. There's no way to watch for CSS style changes
      //   B. Calling getComputedStyle after every render for every element gets expensive fast and
      //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
      //      (Those that do will need to mount and unmount the component that uses it)
      //
      // As a solution, here's a cheap workaround that checks when the element's size has changed,
      // and if so, tests if the writing mode has changed too.
      //
      // This will work for at least some number of cases, but a better solution is still needed.

      const {
        useElementSizeProps
      } = useElementSize({
        onSizeChange: F(_ => onLogicalDirectionChange === null || onLogicalDirectionChange === void 0 ? void 0 : onLogicalDirectionChange(getLogicalDirectionInfo()), [])
      });
      const getLogicalDirectionInfo = F(() => {
        const computedStyles = getComputedStyles();

        if (computedStyles) {
          let w = computedStyles.writingMode;
          let d = computedStyles.direction;
          let t = computedStyles.textOrientation;
          if (t == "upright") d = "ltr";
          return { ...WritingModes[w || "horizontal-tb"][d || "ltr"]
          };
        }

        return null;
      }, []); //const [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState<LogicalDirectionInfo>(onLogicalDirectionChange);

      const convertToLogicalOrientation = F((elementOrientation, direction) => {
        var _direction, _direction2;

        (_direction = direction) !== null && _direction !== void 0 ? _direction : direction = getLogicalDirectionInfo();
        if (((_direction2 = direction) === null || _direction2 === void 0 ? void 0 : _direction2.inlineOrientation) === elementOrientation) return "inline";
        return "block";
      }, []);
      const convertToPhysicalSide = F((side, direction) => {
        var _direction3, _direction$blockDirec, _direction4, _direction$blockDirec2, _direction5, _direction$inlineDire, _direction6, _direction$inlineDire2, _direction7;

        (_direction3 = direction) !== null && _direction3 !== void 0 ? _direction3 : direction = getLogicalDirectionInfo();

        switch (side) {
          case "block-start":
            return M$1[((_direction$blockDirec = (_direction4 = direction) === null || _direction4 === void 0 ? void 0 : _direction4.blockDirection) !== null && _direction$blockDirec !== void 0 ? _direction$blockDirec : "ttb")[0]];

          case "block-end":
            return M$1[((_direction$blockDirec2 = (_direction5 = direction) === null || _direction5 === void 0 ? void 0 : _direction5.blockDirection) !== null && _direction$blockDirec2 !== void 0 ? _direction$blockDirec2 : "ttb")[2]];

          case "inline-start":
            return M$1[((_direction$inlineDire = (_direction6 = direction) === null || _direction6 === void 0 ? void 0 : _direction6.inlineDirection) !== null && _direction$inlineDire !== void 0 ? _direction$inlineDire : "ltr")[0]];

          case "inline-end":
            return M$1[((_direction$inlineDire2 = (_direction7 = direction) === null || _direction7 === void 0 ? void 0 : _direction7.inlineDirection) !== null && _direction$inlineDire2 !== void 0 ? _direction$inlineDire2 : "ltr")[2]];
        }
      }, []);
      const convertToLogicalSide = F((side, direction) => {
        var _direction8, _direction9, _direction10;

        (_direction8 = direction) !== null && _direction8 !== void 0 ? _direction8 : direction = getLogicalDirectionInfo();

        if (((_direction9 = direction) === null || _direction9 === void 0 ? void 0 : _direction9.inlineOrientation) === "vertical") {
          switch (side) {
            case "top":
              return direction.inlineDirection === "ttb" ? "inline-start" : "inline-end";

            case "bottom":
              return direction.inlineDirection === "btt" ? "inline-start" : "inline-end";

            case "left":
              return direction.blockDirection === "ltr" ? "block-start" : "block-end";

            case "right":
              return direction.blockDirection === "rtl" ? "block-start" : "block-end";
          }
        } else if (((_direction10 = direction) === null || _direction10 === void 0 ? void 0 : _direction10.inlineOrientation) === "horizontal") {
          switch (side) {
            case "top":
              return direction.blockDirection === "ttb" ? "block-start" : "block-end";

            case "bottom":
              return direction.blockDirection === "btt" ? "block-start" : "block-end";

            case "left":
              return direction.inlineDirection === "ltr" ? "inline-start" : "inline-end";

            case "right":
              return direction.inlineDirection === "rtl" ? "inline-start" : "inline-end";
          }
        }

        debugger;
        console.assert(false);
        return "inline-start";
      }, []);
      const convertToPhysicalOrientation = F((elementOrientation, direction) => {
        var _direction11;

        (_direction11 = direction) !== null && _direction11 !== void 0 ? _direction11 : direction = getLogicalDirectionInfo();

        if (elementOrientation == "inline") {
          var _direction12;

          if (((_direction12 = direction) === null || _direction12 === void 0 ? void 0 : _direction12.inlineOrientation) == "horizontal") return "horizontal";
          return "vertical";
        } else {
          var _direction13;

          if (((_direction13 = direction) === null || _direction13 === void 0 ? void 0 : _direction13.blockOrientation) == "vertical") return "vertical";
          return "horizontal";
        }
      }, []);
      const convertElementSize = F((elementSize, direction) => {
        var _direction14;

        (_direction14 = direction) !== null && _direction14 !== void 0 ? _direction14 : direction = getLogicalDirectionInfo();

        if (direction) {
          const {
            inlineSize,
            blockSize,
            inlineDirection,
            blockDirection
          } = direction; // Size is relatively simple

          let clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
          let clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
          let offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
          let offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
          let scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
          let scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`]; // Position requires us to sometimes use one property (like `left`)
          // or sometimes two (like `left` + `width`)

          function getPhysicalLeftTop(dir) {
            if (dir === "ltr" || dir == "rtl") return "left";
            return "top";
          }

          function getPhysicalRightBottom(dir) {
            if (dir === "rtl") return "width";
            if (dir === "btt") return "height";
            return null;
          }

          const f1 = getPhysicalLeftTop(inlineDirection);
          const f2 = getPhysicalRightBottom(inlineDirection);
          const f3 = getPhysicalLeftTop(blockDirection);
          const f4 = getPhysicalRightBottom(blockDirection);
          let clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize(f2)}`]);
          let scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize(f2)}`]);
          let offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == undefined ? undefined : elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]);
          let clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
          let scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
          let offsetBlockInset = elementSize[`offset${capitalize(f3)}`] == undefined ? undefined : elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]);
          return {
            clientInlineSize,
            scrollInlineSize,
            offsetInlineSize,
            clientBlockSize,
            scrollBlockSize,
            offsetBlockSize,
            clientInlineInset,
            scrollInlineInset,
            offsetInlineInset,
            clientBlockInset,
            scrollBlockInset,
            offsetBlockInset
          };
        }

        return null;
      }, []);
      return {
        useLogicalDirectionProps: F(props => useRefElementProps(useElementSizeProps(props)), []),
        getElement,
        getLogicalDirectionInfo,
        convertToLogicalSize: convertElementSize,
        convertToLogicalOrientation,
        convertToPhysicalOrientation,
        convertToLogicalSide,
        convertToPhysicalSide
      };
    } // Helper for extracting info from "ltr", "ttb", etc.

    const M$1 = {
      t: "top",
      b: "bottom",
      l: "left",
      r: "right"
    };
    const HorizontalTbLtr = {
      inlineDirection: "ltr",
      blockDirection: "ttb",
      inlineOrientation: "horizontal",
      blockOrientation: "vertical",
      inlineSize: "width",
      blockSize: "height",
      leftRightDirection: "ltr",
      overUnderDirection: "ttb"
    };
    const HorizontalTbRtl = { ...HorizontalTbLtr,
      inlineDirection: "rtl"
    };
    const VerticalRlLtr = {
      inlineDirection: "ttb",
      blockDirection: "rtl",
      inlineOrientation: "vertical",
      blockOrientation: "horizontal",
      inlineSize: "height",
      blockSize: "width",
      leftRightDirection: "ttb",
      overUnderDirection: "rtl"
    };
    const VerticalRlRtl = { ...VerticalRlLtr,
      inlineDirection: "btt"
    };
    const SidewaysRlLtr = { ...VerticalRlLtr
    };
    const SidewaysRlRtl = { ...VerticalRlRtl
    };
    const VerticalLrLtr = { ...VerticalRlLtr,
      blockDirection: "ltr"
    };
    const VerticalLrRtl = { ...VerticalRlRtl,
      blockDirection: "ltr"
    };
    const SidewaysLtLtr = { ...VerticalLrLtr,
      inlineDirection: "btt",
      leftRightDirection: "btt",
      overUnderDirection: "ltr"
    };
    const SidewaysLtRtl = { ...SidewaysLtLtr,
      inlineDirection: "ttb"
    };
    const HorizontalTb = {
      ltr: HorizontalTbLtr,
      rtl: HorizontalTbRtl
    };
    const VerticalRl = {
      ltr: VerticalRlLtr,
      rtl: VerticalRlRtl
    };
    const VerticalLr = {
      ltr: VerticalLrLtr,
      rtl: VerticalLrRtl
    };
    const SidewaysRl = {
      ltr: SidewaysRlLtr,
      rtl: SidewaysRlRtl
    };
    const SidewaysLr = {
      ltr: SidewaysLtLtr,
      rtl: SidewaysLtRtl
    };
    const WritingModes = {
      "horizontal-tb": HorizontalTb,
      "vertical-lr": VerticalLr,
      "vertical-rl": VerticalRl,
      "sideways-lr": SidewaysLr,
      "sideways-rl": SidewaysRl
    };

    /**
     * Slightly enhanced version of `useState` that includes a getter that remains constant
     * (i.e. you can use it in `useEffect` and friends without it being a dependency).
     *
     * @param initialState
     * @returns
     */

    function useState(initialState) {
      // We keep both, but overrride the `setState` functionality
      const [state, setStateP] = l(initialState);
      const ref = s(state); // Hijack the normal setter function 
      // to also set our ref to the new value

      const setState = F(value => {
        if (typeof value === "function") {
          let callback = value;
          setStateP(prevValue => {
            let nextValue = callback(prevValue);
            ref.current = nextValue;
            return nextValue;
          });
        } else {
          ref.current = value;
          setStateP(value);
        }
      }, []);

      const getState = () => {
        return ref.current;
      };

      console.assert(ref.current === state || typeof state === "number" && isNaN(state));
      return [state, setState, getState];
    }

    const Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

    function base64(value) {
      return Table[value];
    }

    function random6Bits() {
      return Math.floor(Math.random() * 0b1000000);
    }

    function random64Bits() {
      return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
    }
    /**
     * Returns a randomly-generated ID with an optional prefix.
     * Note that if the prefix is *explicitly* set to "", then
     * IDs that are not valid under HTML4 may be generated. Oh no.
     */


    function generateRandomId(prefix) {
      return `${prefix !== null && prefix !== void 0 ? prefix : "id-"}${random64Bits().map(n => base64(n)).join("")}`;
    }
    /**
     * Returns a hook that modifies a set of props to provide a randomly-generated ID if one was not provided.
     *
     * If you'd like to use the ID in a property that's *not* named `id` (like `for` or `aria-labelledby` or whatnot), `useReferencedIdProps` is also provided.
     *
     * And the randomly-generated id itself is also provided in case you want to handle the logic yourself without `useMergedProps`.
     *
     * Unlike most other `use*Props` hooks, these are mostly stable.
     */

    function useRandomId() {
      let {
        prefix
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const [randomId, setRandomId] = useState(() => generateRandomId(prefix));
      const [watchPrefixUpdates, setWatchPrefixUpdates, getWatchPrefixUpdates] = useState(false);
      h(() => {
        const watchPrefixUpdates = getWatchPrefixUpdates();
        if (watchPrefixUpdates) setRandomId(() => generateRandomId(prefix));
        setWatchPrefixUpdates(true);
      }, [prefix]); // Whatever ID was most recently used by the actual "id" prop.
      // Used so that any ID-referencing props don't need to provide the same value.
      //
      // TODO: This does mean that on the first render, if just the ID is provided,
      // there will be a temporary mismatch, but it's corrected before rendering finishes.
      // Is this okay?

      const [usedId, setUsedId, getUsedId] = useState(undefined);
      const useReferencedIdProps = F(function useReferencedIdProps(idPropName) {
        const ret = function (_ref) {
          var _ref2, _ref3;

          let {
            [idPropName]: givenId,
            ...props
          } = _ref;
          const usedId2 = (_ref2 = (_ref3 = givenId !== null && givenId !== void 0 ? givenId : usedId) !== null && _ref3 !== void 0 ? _ref3 : randomId) !== null && _ref2 !== void 0 ? _ref2 : undefined;
          if (idPropName === "id") setUsedId(usedId2);
          return useMergedProps()({
            [idPropName]: usedId2
          }, props);
        };

        return ret;
      }, [usedId, randomId]);
      const useRandomIdProps = F(function useRandomIdProps(p) {
        return useReferencedIdProps("id")(p);
      }, [useReferencedIdProps]);
      return {
        randomId,
        id: usedId,
        getId: getUsedId,
        useRandomIdProps,
        useReferencedIdProps
      };
    }

    const previousInputs = new Map();
    const toRun = new Map();
    const commitName = "__c" in l$1 ? "__c" : "commit" in l$1 ? "commit" : "_commit" in l$1 ? "_commit" : "__c"; // TODO: Whether this goes in options.diffed or options._commit
    // is a post-suspense question.
    // Right now, using options._commit has the problem of running
    // *after* refs are applied, but we need to come before even that
    // so `ref={someStableFunction}` works.
    // 
    // Also it's private.

    const originalCommit = l$1[commitName];

    const newCommit = (vnode, commitQueue) => {
      for (let [id, effectInfo] of toRun) {
        const oldInputs = previousInputs.get(id);

        if (argsChanged(oldInputs, effectInfo.inputs)) {
          var _effectInfo$cleanup;

          (_effectInfo$cleanup = effectInfo.cleanup) === null || _effectInfo$cleanup === void 0 ? void 0 : _effectInfo$cleanup.call(effectInfo);
          effectInfo.cleanup = effectInfo.effect();
          previousInputs.set(id, effectInfo.inputs);
        }
      }

      toRun.clear();
      originalCommit === null || originalCommit === void 0 ? void 0 : originalCommit(vnode, commitQueue);
    };

    l$1[commitName] = newCommit;
    /**
     * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
     *
     * Every render, we send the arguments to be evaluated after diffing has completed,
     * which happens before.
     *
     * @param effect
     * @param inputs
     */

    function useBeforeLayoutEffect(effect, inputs) {
      const [id] = l(() => generateRandomId());
      toRun.set(id, {
        effect,
        inputs,
        cleanup: null
      });
      y(() => {
        return () => {
          toRun.delete(id);
          previousInputs.delete(id);
        };
      }, [id]);
    }

    function argsChanged(oldArgs, newArgs) {
      return !!(!oldArgs || oldArgs.length !== (newArgs === null || newArgs === void 0 ? void 0 : newArgs.length) || newArgs !== null && newArgs !== void 0 && newArgs.some((arg, index) => arg !== oldArgs[index]));
    }

    const Unset = Symbol("unset");
    /**
     * Given an input value, returns a constant getter function that can be used
     * inside of `useEffect` and friends without including it in the dependency array.
     *
     * This uses `options.diffed` in order to run before everything, even
     * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
     *
     * @param value
     * @returns
     */

    function useStableGetter(value) {
      const ref = s(Unset);
      useBeforeLayoutEffect(() => {
        ref.current = value;
      }, [value]);
      return F(() => {
        if (ref.current === Unset) {
          throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
        }

        return ref.current;
      }, []);
    }

    /**
     * Alternate useCallback() which always returns the same (wrapped) function reference
     * so that it can be excluded from the dependency arrays of `useEffect` and friends.
     *
     * Do not use during the render phase!  `useLayoutEffect` is fine though.
     */

    function useStableCallback(fn) {
      const currentCallbackGetter = useStableGetter(fn);
      return F(function () {
        return currentCallbackGetter()(...arguments);
      }, []);
    }

    /**
     * Wrap the native `useEffect` to add arguments
     * that allow accessing the previous value as the first argument,
     * as well as the changes that caused the hook to be called as the second argument.
     *
     * @param effect
     * @param inputs
     * @param impl You can choose whether to use `useEffect` or `useLayoutEffect` by
     * passing one of them as this argument. By default, it's `useEffect`.
     */

    function useEffect(effect, inputs) {
      let impl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : y;
      const prevInputs = s(undefined);

      const effect2 = () => {
        let changes = [];

        if (inputs && prevInputs.current) {
          for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
            if (prevInputs.current[i] != inputs[i]) changes[i] = {
              from: prevInputs.current[i],
              to: inputs[i]
            };
          }
        }

        const ret = effect(prevInputs.current, changes);
        prevInputs.current = inputs;
        return ret;
      };

      impl(effect2, inputs);
    }

    /**
     * Wrap the native `useLayoutEffect` to add arguments
     * that allow accessing the previous value as the first argument,
     * as well as the changes that caused the hook to be called as the second argument.
     *
     * @param effect
     * @param inputs
     */

    function useLayoutEffect(effect, inputs) {
      return useEffect(effect, inputs, h);
    }

    function useTimeout(_ref) {
      let {
        timeout,
        callback,
        triggerIndex
      } = _ref;
      const stableCallback = useStableCallback(() => {
        startTimeRef.current = null;
        callback();
      });
      const getTimeout = useStableGetter(timeout); // Set any time we start timeout.
      // Unset any time the timeout completes

      const startTimeRef = s(null);
      const timeoutIsNull = timeout == null; // Any time the triggerIndex changes (including on mount)
      // restart the timeout.  The timeout does NOT reset
      // when the duration or callback changes, only triggerIndex.

      y(() => {
        if (!timeoutIsNull) {
          let timeout = getTimeout();
          console.assert(timeoutIsNull == (timeout == null));

          if (timeout != null) {
            startTimeRef.current = +new Date();
            const handle = setTimeout(stableCallback, timeout);
            return () => clearTimeout(handle);
          }
        }
      }, [triggerIndex, timeoutIsNull]);
      const getElapsedTime = F(() => {
        var _startTimeRef$current;

        return +new Date() - +((_startTimeRef$current = startTimeRef.current) !== null && _startTimeRef$current !== void 0 ? _startTimeRef$current : new Date());
      }, []);
      const getRemainingTime = F(() => {
        const timeout = getTimeout();
        return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
      }, []);
      return {
        getElapsedTime,
        getRemainingTime
      };
    }

    /**
     * When used in tandem with `useRovingTabIndex`, allows control of
     * the tabbable index with the arrow keys.
     *
     * @see useListNavigation, which packages everything up together.
     */

    function useLinearNavigation(_ref) {
      var _navigationDirection;

      let {
        index,
        navigateToFirst,
        navigateToLast,
        navigateToNext,
        navigateToPrev,
        managedChildren,
        navigationDirection,
        disableArrowKeys,
        disableHomeEndKeys
      } = _ref;
      (_navigationDirection = navigationDirection) !== null && _navigationDirection !== void 0 ? _navigationDirection : navigationDirection = "either";
      const childCount = managedChildren.length; // Make sure the tabbable index never escapes the bounds of all available children
      // TODO: Keep track of the original index and keep it, at least until keyboard navigation.

      useLayoutEffect(() => {
        if (index !== null) {
          if (index < 0) {
            navigateToFirst();
          } else if (childCount > 0 && index >= childCount) {
            navigateToLast();
          }
        }
      }, [index, childCount, navigateToFirst, navigateToLast]); // These allow us to manipulate what our current tabbable child is.

      /*const navigateToIndex = useCallback((index: number) => { setIndex(index < 0 ? (managedChildren.length + index) : index); }, []);
      const navigateToNext = useCallback(() => { setIndex((i: number | null) => i === null? null! : i >= managedChildren.length - 1? managedChildren.length - 1 : ++i); }, []);
      const navigateToPrev = useCallback(() => { setIndex((i: number | null) => i === null? null! : i < 0? 0 : --i); }, []);
      const navigateToStart = useCallback(() => { navigateToIndex(0); }, [navigateToIndex]);
      const navigateToEnd = useCallback(() => { navigateToIndex(-1); }, [navigateToIndex]);*/

      useStableGetter(index);
      const {
        getLogicalDirectionInfo,
        useLogicalDirectionProps
      } = useLogicalDirection({});

      const onKeyDown = e => {
        // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
        if (e.ctrlKey || e.metaKey) return;
        const info = getLogicalDirectionInfo();
        let allowsBlockNavigation = navigationDirection == "block" || navigationDirection == "either";
        let allowsInlineNavigation = navigationDirection == "inline" || navigationDirection == "either";

        switch (e.key) {
          case "ArrowUp":
            {
              const propName = (info === null || info === void 0 ? void 0 : info.blockOrientation) === "vertical" ? "blockDirection" : "inlineDirection";
              const directionAllowed = !disableArrowKeys && ((info === null || info === void 0 ? void 0 : info.blockOrientation) === "vertical" ? allowsBlockNavigation : allowsInlineNavigation);

              if (directionAllowed) {
                if ((info === null || info === void 0 ? void 0 : info[propName]) === "btt") {
                  navigateToNext();
                } else {
                  navigateToPrev();
                }

                e.preventDefault();
                e.stopPropagation();
              }

              break;
            }

          case "ArrowDown":
            {
              const propName = (info === null || info === void 0 ? void 0 : info.blockOrientation) === "vertical" ? "blockDirection" : "inlineDirection";
              const directionAllowed = !disableArrowKeys && ((info === null || info === void 0 ? void 0 : info.blockOrientation) === "vertical" ? allowsBlockNavigation : allowsInlineNavigation);

              if (directionAllowed) {
                if ((info === null || info === void 0 ? void 0 : info[propName]) === "btt") {
                  navigateToPrev();
                } else {
                  navigateToNext();
                }

                e.preventDefault();
                e.stopPropagation();
              }

              break;
            }

          case "ArrowLeft":
            {
              const propName = (info === null || info === void 0 ? void 0 : info.inlineOrientation) === "horizontal" ? "inlineDirection" : "blockDirection";
              const directionAllowed = !disableArrowKeys && ((info === null || info === void 0 ? void 0 : info.inlineOrientation) === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation);

              if (directionAllowed) {
                if ((info === null || info === void 0 ? void 0 : info[propName]) === "rtl") {
                  navigateToNext();
                } else {
                  navigateToPrev();
                }

                e.preventDefault();
                e.stopPropagation();
              }

              break;
            }

          case "ArrowRight":
            {
              const propName = (info === null || info === void 0 ? void 0 : info.inlineOrientation) === "horizontal" ? "inlineDirection" : "blockDirection";
              const directionAllowed = !disableArrowKeys && ((info === null || info === void 0 ? void 0 : info.inlineOrientation) === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation);

              if (directionAllowed) {
                if ((info === null || info === void 0 ? void 0 : info[propName]) === "rtl") {
                  navigateToPrev();
                } else {
                  navigateToNext();
                }

                e.preventDefault();
                e.stopPropagation();
              }

              e.preventDefault();
              e.stopPropagation();
              break;
            }

          case "Home":
            if (!disableHomeEndKeys) {
              navigateToFirst();
              e.preventDefault();
              e.stopPropagation();
            }

            break;

          case "End":
            if (!disableHomeEndKeys) {
              navigateToLast();
              e.preventDefault();
              e.stopPropagation();
            }

            break;
        }
      };

      return {
        useLinearNavigationProps: F(props => {
          return useLogicalDirectionProps(useMergedProps()({
            onKeyDown
          }, props));
        }, [])
      };
    }
    /**
     * Allows for the selection of a managed child by typing the given text associated with it.
     *
     * @see useListNavigation, which packages everything up together.
     */

    function useTypeaheadNavigation(_ref2) {
      let {
        collator,
        getIndex,
        typeaheadTimeout,
        setIndex
      } = _ref2;
      // For typeahead, keep track of what our current "search" string is (if we have one)
      // and also clear it every 1000 ms since the last time it changed.
      // Next, keep a mapping of typeahead values to indices for faster searching.
      // And, for the user's sake, let them know when their typeahead can't match anything anymore
      const [currentTypeahead, setCurrentTypeahead, getCurrentTypeahead] = useState(null);
      useTimeout({
        timeout: typeaheadTimeout !== null && typeaheadTimeout !== void 0 ? typeaheadTimeout : 1000,
        callback: () => {
          setCurrentTypeahead(null);
          setInvalidTypeahead(null);
        },
        triggerIndex: currentTypeahead
      });
      const sortedTypeaheadInfo = s([]);
      const [invalidTypeahead, setInvalidTypeahead] = useState(false); // Handle typeahead for input method editors as well
      // Essentially, when active, ignore further keys 
      // because we're waiting for a CompositionEnd event

      const [imeActive, setImeActive, getImeActive] = useState(false); // Because composition events fire *after* keydown events 
      // (but within the same task, which, TODO, could be browser-dependent),
      // we can use this to keep track of which event we're listening for on the first keydown.

      const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
      useLayoutEffect(() => {
        if (nextTypeaheadChar !== null) {
          setCurrentTypeahead(typeahead => (typeahead !== null && typeahead !== void 0 ? typeahead : "") + nextTypeaheadChar);
          setNextTypeaheadChar(null);
        }
      }, [nextTypeaheadChar]);
      const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
        var _safeRhs$toLowerCase;

        let compare; // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
        // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.

        safeLhs = safeLhs.normalize("NFD");
        safeRhs = safeRhs.normalize("NFD");
        if (collator) compare = collator.compare(safeLhs, safeRhs);else compare = safeLhs.toLowerCase().localeCompare((_safeRhs$toLowerCase = safeRhs.toLowerCase()) !== null && _safeRhs$toLowerCase !== void 0 ? _safeRhs$toLowerCase : "");
        return compare;
      });
      const insertingComparator = useStableCallback((lhs, rhs) => {

        if (typeof lhs === "string" && typeof rhs.text === "string") {
          return comparatorShared(lhs, rhs.text);
        }

        return lhs - rhs;
      });
      const typeaheadComparator = useStableCallback((lhs, rhs) => {

        if (typeof lhs === "string" && typeof rhs.text === "string") {
          // During typeahead, all strings longer than ours should be truncated
          // so that they're all considered equally by that point.
          return comparatorShared(lhs, rhs.text.substring(0, lhs.length));
        }

        return lhs - rhs;
      });
      const useTypeaheadNavigationProps = F(function (_ref3) {
        let { ...props
        } = _ref3;

        const onCompositionStart = e => {
          setImeActive(true);
        };

        const onCompositionEnd = e => {
          setNextTypeaheadChar(e.data);
          setImeActive(false);
        };

        const onKeyDown = e => {
          const imeActive = getImeActive();
          let key = e.key; // Not handled by typeahead (i.e. assume this is a keyboard shortcut)

          if (e.ctrlKey || e.metaKey) return;

          if (!imeActive && e.key === "Backspace") {
            // Remove the last character in a way that doesn't split UTF-16 surrogates.
            setCurrentTypeahead(t => t === null ? null : [...t].reverse().slice(1).reverse().join(""));
            e.preventDefault();
            e.stopPropagation();
            return;
          } // The key property represents the typed character OR the "named key attribute" of the key pressed.
          // There's no definite way to tell the difference, but for all intents and purposes
          // there are no one-character names, and there are no non-ASCII-alpha names.
          // Thus, any one-character or non-ASCII value for `key` is *almost certainly* a typed character.


          const isCharacterKey = key.length === 1 || !/^[A-Za-z]/.test(key);

          if (isCharacterKey) {
            var _getCurrentTypeahead;

            if (key == " " && ((_getCurrentTypeahead = getCurrentTypeahead()) !== null && _getCurrentTypeahead !== void 0 ? _getCurrentTypeahead : "").trim().length == 0) ; else {
              e.preventDefault();
              e.stopPropagation(); // Note: Won't be true for the first keydown
              // but will be overwritten before useLayoutEffect is called
              // to actually apply the change

              if (!imeActive) setNextTypeaheadChar(key);
            }
          }
        };

        return useMergedProps()({
          onKeyDown,
          onCompositionStart,
          onCompositionEnd
        }, props);
      }, []); // Handle changes in typeahead that cause changes to the tabbable index

      y(() => {
        if (currentTypeahead && sortedTypeaheadInfo.current.length) {
          let sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);

          if (sortedTypeaheadIndex < 0) {
            // The user has typed an entry that doesn't exist in the list
            // (or more specifically "for which there is no entry that starts with that input")
            setInvalidTypeahead(true);
          } else {
            setInvalidTypeahead(false);
            /*
              We know roughly where, in the sorted array of strings, our next typeahead location is.
              But roughly isn't good enough if there are multiple matches.
              To convert our sorted index to the unsorted index we need, we have to find the first
              element that matches us *and* (if any such exist) is *after* our current selection.
               In other words, the only way typeahead moves backwards relative to our current
              position is if the only other option is behind us.
               It's not specified in WAI-ARIA what to do in that case.  I suppose wrap back to the start?
              Though there's also a case for just going upwards to the nearest to prevent jumpiness.
              But if you're already doing typeahead on an unsorted list, like, jumpiness can't be avoided.
              I dunno. Going back to the start is the simplist though.
               Basically what this does: Starting from where we found ourselves after our binary search,
              scan backwards and forwards through all adjacent entries that also compare equally so that
              we can find the one whose `unsortedIndex` is the lowest amongst all other equal strings
              (and also the lowest `unsortedIndex` yadda yadda except that it comes after us).
               TODO: The binary search starts this off with a solid O(log n), but one-character
              searches are, thanks to pigeonhole principal, eventually guaranteed to become
              O(n*log n). This is annoying but probably not easily solvable? There could be an
              exception for one-character strings, but that's just kicking the can down
              the road. Maybe one or two characters would be good enough though.
            */
            // These are used to keep track of the candidates' positions in both our sorted array and the unsorted DOM.

            let lowestUnsortedIndexAll = null;
            let lowestSortedIndexAll = sortedTypeaheadIndex; // These two are only set for elements that are ahead of us, but the principle's the same otherwise

            let lowestUnsortedIndexNext = null;
            let lowestSortedIndexNext = sortedTypeaheadIndex;

            const updateBestFit = u => {
              var _getIndex;

              if (lowestUnsortedIndexAll == null || u < lowestUnsortedIndexAll) {
                lowestUnsortedIndexAll = u;
                lowestSortedIndexAll = i;
              }

              if ((lowestUnsortedIndexNext == null || u < lowestUnsortedIndexNext) && u > ((_getIndex = getIndex()) !== null && _getIndex !== void 0 ? _getIndex : -Infinity)) {
                lowestUnsortedIndexNext = u;
                lowestSortedIndexNext = i;
              }
            };

            let i = sortedTypeaheadIndex;

            while (i >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
              updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
              --i;
            }

            i = sortedTypeaheadIndex;

            while (i < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
              updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
              ++i;
            }

            if (lowestUnsortedIndexNext !== null) setIndex(sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex);else if (lowestUnsortedIndexAll !== null) setIndex(sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex);
          }
        }
      }, [currentTypeahead]);
      const useTypeaheadNavigationChild = F(_ref4 => {
        let {
          text,
          ...i
        } = _ref4;
        y(() => {
          if (text) {
            // Find where to insert this item.
            // Because all index values should be unique, the returned sortedIndex
            // should always refer to a new location (i.e. be negative)                
            let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, insertingComparator);
            console.assert(sortedIndex < 0 || sortedTypeaheadInfo.current[sortedIndex].text == text);

            if (sortedIndex < 0) {
              sortedTypeaheadInfo.current.splice(-sortedIndex - 1, 0, {
                text,
                unsortedIndex: i.index
              });
            } else {
              sortedTypeaheadInfo.current.splice(sortedIndex, 0, {
                text,
                unsortedIndex: i.index
              });
            }

            return () => {
              // When unmounting, find where we were and remove ourselves.
              // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
              let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, insertingComparator);
              console.assert(sortedIndex >= 0);

              if (sortedIndex >= 0) {
                sortedTypeaheadInfo.current.splice(sortedIndex, 1);
              }
            };
          }
        }, [text]);
        return {};
      }, []);
      return {
        useTypeaheadNavigationChild,
        useTypeaheadNavigationProps,
        currentTypeahead,
        invalidTypeahead
      };
    }
    /**
     * Your usual binary search implementation.
     *
     * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
     * @param array The array to search through
     * @param wanted The value you'd like to find
     * @param comparator Compares `wanted` with the current value in `array`
     * @returns A non-negative value if `wanted` was found, and a negative number if not.
     * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
     */

    function binarySearch(array, wanted, comparator) {
      var firstIndex = 0;
      var lastIndex = array.length - 1;

      while (firstIndex <= lastIndex) {
        var testIndex = lastIndex + firstIndex >> 1;
        var comparisonResult = comparator(wanted, array[testIndex]);

        if (comparisonResult > 0) {
          firstIndex = testIndex + 1;
        } else if (comparisonResult < 0) {
          lastIndex = testIndex - 1;
        } else {
          return testIndex;
        }
      }

      return -firstIndex - 1;
    }

    /**
     * Allows a parent component to access information about certain
     * child components once they have rendered.
     *
     * This hook is slightly more complicated in that it returns both a
     * prop-modifying hook, but also a hook that each child will need
     * to use: `useManagedChild`.  It's stable across renders, so just
     * toss it into a `Context` so the children can have access to it.
     * This function registers the child with the parent and provides
     * it with any requested information, but doesn't do anything else
     * until it unmounts and retracts that information.
     */

    function useChildManager() {
      // This is blindly updated any time a child mounts or unmounts itself.
      // Used to make sure that any time the array of managed children updates,
      // we also re-render.
      const [childUpdateIndex, setChildUpdateIndex] = useState(0);
      const [totalChildrenMounted, setTotalChildrenMounted, getTotalChildrenMounted] = useState(0);
      const [totalChildrenUnounted, setTotalChildrenUnounted, getTotalChildrenUnounted] = useState(0);
      const childrenCurrentlyMounted = totalChildrenMounted - totalChildrenUnounted;
      const managedChildren = s([]
      /** TODO: Any problems caused by using an array when it should be an object? */
      );
      const mountedChildren = s([]);
      const mountOrder = s(new Map());
      const indicesByElement = s(new Map());
      const deletedIndices = s(new Set()); // Used to keep track of indices that have "over-mounted" and by how much.
      // We need this so that we don't erase saved information when a component
      // "overmounts" over another which then, correctly, switches *itself* to something else.
      // In general, this should only happen when components are swapping between indices.
      // By the time they're done, this map should be all 0s again, at which point
      // it's okay to actually run the unmount code.
      // 
      // TODO: throw a console.assert somewhere to make up for the lost 
      // "are you sure you want to overwrite this child's index!" assertion.
      // Namely, is this map all 0s when the parent element re-renders? 
      // Probably not because of setChildUpdateIndex

      const overmountCount = s(new Map());
      const getMountIndex = F(index => {
        return mountOrder.current.get(index);
      }, []);
      const useManagedChild = F(info => {
        const {
          getElement,
          useRefElementProps
        } = useRefElement({
          onElementChange: F(element => {
            if (element) {
              indicesByElement.current.set(element, info.index);
              deletedIndices.current.delete(info.index);

              if (managedChildren.current[info.index] != undefined) {
                var _overmountCount$curre;

                overmountCount.current.set(info.index, ((_overmountCount$curre = overmountCount.current.get(info.index)) !== null && _overmountCount$curre !== void 0 ? _overmountCount$curre : 0) + 1);
              }

              setChildUpdateIndex(c => ++c);
              managedChildren.current[info.index] = { ...info
              };
              return () => {
                var _overmountCount$curre2;

                setChildUpdateIndex(c => ++c);

                if (((_overmountCount$curre2 = overmountCount.current.get(info.index)) !== null && _overmountCount$curre2 !== void 0 ? _overmountCount$curre2 : 0) > 0) {
                  var _overmountCount$curre3;

                  overmountCount.current.set(info.index, ((_overmountCount$curre3 = overmountCount.current.get(info.index)) !== null && _overmountCount$curre3 !== void 0 ? _overmountCount$curre3 : 0) - 1);
                } else {
                  delete managedChildren.current[info.index];
                  deletedIndices.current.add(info.index);

                  if (typeof info.index === "number") {
                    while (managedChildren.current.length && managedChildren.current[managedChildren.current.length - 1] === undefined) managedChildren.current.length -= 1;
                  }

                  indicesByElement.current.delete(element);
                }
              };
            }
          }, [])
        });
        useLayoutEffect(() => {
          let index = getTotalChildrenMounted();
          mountOrder.current.set(info.index, index);
          mountedChildren.current[index] = info;
          setTotalChildrenMounted(t => ++t);
          return () => {
            mountOrder.current.delete(info.index);
            mountedChildren.current[index] = null;
            setTotalChildrenUnounted(t => ++t);
          };
        }, [info.index]); // Any time our child props change, make that information available generally.
        // *Don't re-render*, otherwise we'd be stuck in an
        // infinite loop every time an anonymous function is passed.
        // It comes in from the props so the child was already updated by it --
        // we don't need the parent to re-render every single child any time
        // "onClick" updates or whatever.  The relevant child already knows,
        // and that's what matters.

        useLayoutEffect(() => {
          if (managedChildren.current[info.index] != undefined) managedChildren.current[info.index] = { ...info
          };
        }, [...Object.entries(info).flat()]);
        return {
          getElement,
          useManagedChildProps: useRefElementProps
        };
      }, []);
      return {
        useManagedChild,
        childCount: childrenCurrentlyMounted,
        managedChildren: managedChildren.current,
        mountedChildren: mountedChildren.current,
        indicesByElement: indicesByElement.current,
        totalChildrenMounted,
        totalChildrenUnounted,
        getMountIndex,
        deletedIndices: deletedIndices.current
      };
    }
    /**
     * Helper function for letting children know when they are or are not the
     * current selected/expanded/focused/whatever child.
     *
     * Automatically handles when children are mounted & unmounted and such.
     *
     * While it will be called once for every child on mount, after that setFlag
     * is guaranteed to only be called once on activation and once on deactivation,
     * so it's generally safe to put side effects inside if necessary.
     * It's also safe to make it non-stable.
     *
     * @param activatedIndex What index the current selected (etc.) child is
     * @param length How many children exist (as managedChildren.length)
     * @param setFlag A function that probably looks like (i, flag) => managedChildren[i].setActive(flag)
     * @param useEffect Which version of useEffect to use. Default is `useLayoutEffect`.
     */

    function useChildFlag(_ref) {
      var _useEffect;

      let {
        activatedIndex,
        closestFit,
        managedChildren,
        setChildFlag,
        getChildFlag,
        useEffect
      } = _ref;
      (_useEffect = useEffect) !== null && _useEffect !== void 0 ? _useEffect : useEffect = useLayoutEffect;
      if (closestFit) console.assert(typeof activatedIndex == "number" || activatedIndex == null); // Whenever we re-render, make sure that any children that have mounted
      // have their flags properly set.  We know it's unset if it was null,
      // in which case we just set it to true or false.
      //
      // And, I mean, as long as we're already iterating through every child
      // on every render to check for newly mounted children, might as well
      // just handle changed in the activatedIndex here too.

      useEffect(() => {
        // TODO: We have limited information about when a child mounts or unmounts
        // and so we don't know where to look for any null entries that need changing.
        // We know when activatedIndex changes and what it was, but not much else.
        // Looping over every child *works*, and it's not an expensive loop by any means,
        // but, like, eugh.
        // Also, before we do anything, see if we need to "correct" activatedIndex.
        // It could be pointing to a child that doesn't exist, and if closestFit is given,
        // we need to adjust activatedIndex to point to a valid child.
        if (typeof activatedIndex == "number" && Array.isArray(managedChildren) && managedChildren[activatedIndex] == null) {
          // Oh dear. Are we actively correcting this?
          if (closestFit) {
            // Oh dear.
            // Search up and down the list of children for any that actually exist.
            let searchHigh = activatedIndex + 1;
            let searchLow = activatedIndex - 1;

            while (searchLow >= 0 && managedChildren[searchLow] == null || searchHigh < managedChildren.length && managedChildren[searchHigh] == null) {
              ++searchHigh;
              --searchLow;
            }

            if (searchLow >= 0 && managedChildren[searchLow] != null) {
              activatedIndex = searchLow;
            } else if (searchHigh < managedChildren.length && managedChildren[searchHigh] != null) {
              activatedIndex = searchHigh;
            } // Now that we've done that, if any valid children exist, we've reset activatedIndex to point to it instead.
            // Now we'll fall through to the for loop set and unset our flags based on this "corrected" value.
            //
            // We don't correct it or save it anywhere because we'd very much like to return to it
            // if the child remounts itself.

          }
        }

        if (Array.isArray(managedChildren)) {
          for (let i = 0; i < managedChildren.length; ++i) {
            let shouldBeSet = i == activatedIndex;

            if (getChildFlag(i) != shouldBeSet) {
              setChildFlag(i, shouldBeSet);
            }
          }
        } else {
          Object.entries(managedChildren).forEach(_ref2 => {
            let [i, info] = _ref2;
            let shouldBeSet = i == activatedIndex;

            if (getChildFlag(i) != shouldBeSet) {
              setChildFlag(i, shouldBeSet);
            }
          });
        }
      });
    }

    /**
     * Implements a roving tabindex system where only one "focusable"
     * component in a set is able to receive a tab focus. *Which*
     * of those elements receives focus is determined by you, but it's
     * recommended to offload that logic then to another hook, like
     * `useLinearNavigation`, which lets you change the tabbable
     * element with the arrow keys, `useTypeaheadNavigation`, which
     * lets you change the tabbable index with typeahead, or
     * `useListNavigation` if you just want everything bundled together.
     *
     * Note that the child hook returned by this function must be used
     * by every child that uses this roving tabindex logic.  The
     * prop-modifying hook *that* hook returns should then be used
     * on the child's element, as well as any other elements you'd like
     * to be explicitly made untabbable too.
     *
     * `shouldFocusOnChange` should return true if focus is
     * contained within whatever element contains the roving tab index.
     * Generally as simple as the following:
     * ```
     * const [focusedInner, setFocusedInner] = useState(false);
     * const { useHasFocusProps } = useHasFocus<ParentElement>({ setFocusedInner });
     * const focusOnChange = (focusedInner != false);
     * ```
     * It's not included here because `useRovingTabIndex` doesn't know
     * anything about the container element, only children elements.
     * And just as well! Children should be allowed at the root,
     * regardless of if it's the whole app or just a given component.
     */

    function useRovingTabIndex(_ref) {
      let {
        shouldFocusOnChange: foc,
        tabbableIndex
      } = _ref;
      const getShouldFocusOnChange = useStableGetter(foc);
      const getTabbableIndex = useStableGetter(tabbableIndex);
      s(-Infinity); // Call the hook that allows us to collect information from children who provide it

      const {
        managedChildren,
        childCount,
        useManagedChild,
        indicesByElement,
        ...rest
      } = useChildManager(); // Any time the tabbable index changes,
      // notify the previous child that it's no longer tabbable,
      // and notify the next child that is allowed to be tabbed to.

      useChildFlag({
        activatedIndex: tabbableIndex,
        managedChildren,
        closestFit: true,
        setChildFlag: (index, tabbable) => {
          var _managedChildren$inde;

          if (index != null) (_managedChildren$inde = managedChildren[index]) === null || _managedChildren$inde === void 0 ? void 0 : _managedChildren$inde.setTabbable(tabbable);
        },
        getChildFlag: index => {
          var _managedChildren$inde2, _managedChildren$inde3;

          return (_managedChildren$inde2 = (_managedChildren$inde3 = managedChildren[index]) === null || _managedChildren$inde3 === void 0 ? void 0 : _managedChildren$inde3.getTabbable()) !== null && _managedChildren$inde2 !== void 0 ? _managedChildren$inde2 : null;
        }
      });
      F(() => {
        if (tabbableIndex != null) managedChildren[tabbableIndex].setTabbable(true);
      }, [tabbableIndex]);
      const useRovingTabIndexChild = F(info => {
        const [rrafIndex, setRrafIndex] = useState(1);
        const rerenderAndFocus = F(() => {
          setRrafIndex(i => ++i);
        }, []);
        const [tabbable, setTabbable, getTabbable] = useState(null);
        let newInfo = { ...info,
          rerenderAndFocus,
          setTabbable: F(tabbable => {
            setTabbable(tabbable);
          }, []),
          getTabbable
        };
        const {
          getElement,
          useManagedChildProps
        } = useManagedChild(newInfo);
        y(() => {
          const element = getElement();

          if (tabbable) {
            const shouldFocusOnChange = getShouldFocusOnChange()();

            if (shouldFocusOnChange && "focus" in element) {
              requestAnimationFrame(() => {
                queueMicrotask(() => {
                  element.focus();
                });
              });
            }
          }
        }, [tabbable, rrafIndex]);

        function useRovingTabIndexSiblingProps(_ref2) {
          let {
            tabIndex,
            ...props
          } = _ref2;

          if (tabIndex == null) {
            if (tabbable) tabIndex = 0;else tabIndex = -1;
          }

          return useMergedProps()({
            tabIndex
          }, props);
        }

        function useRovingTabIndexChildProps(_ref3) {
          let {
            tabIndex,
            ...props
          } = _ref3;

          if (tabIndex == null) {
            if (tabbable) tabIndex = 0;else tabIndex = -1;
          }

          return useMergedProps()(useManagedChildProps({
            tabIndex
          }), props);
        }
        return {
          useRovingTabIndexChildProps,
          useRovingTabIndexSiblingProps,
          tabbable
        };
      }, [useManagedChild]);
      return {
        useRovingTabIndexChild,
        childCount,
        managedChildren,
        indicesByElement,
        focusCurrent: F(() => {
          var _getTabbableIndex;

          if (managedChildren[(_getTabbableIndex = getTabbableIndex()) !== null && _getTabbableIndex !== void 0 ? _getTabbableIndex : 0].getTabbable()) {
            var _managedChildren, _getTabbableIndex2;

            (_managedChildren = managedChildren[(_getTabbableIndex2 = getTabbableIndex()) !== null && _getTabbableIndex2 !== void 0 ? _getTabbableIndex2 : 0]) === null || _managedChildren === void 0 ? void 0 : _managedChildren.rerenderAndFocus();
          } else {
            var _getTabbableIndex3;

            // For whatever reason, the previously tabbable child
            // is no longer tabbable without us knowing about it.
            // Maybe it unmounted?
            // Either way, try to find the newly-selected child.
            debugger;
            let i = (_getTabbableIndex3 = getTabbableIndex()) !== null && _getTabbableIndex3 !== void 0 ? _getTabbableIndex3 : 0;
            let j = i + 1;

            while (i >= 0) {
              var _getTabbableIndex4;

              --i;

              if (managedChildren[(_getTabbableIndex4 = getTabbableIndex()) !== null && _getTabbableIndex4 !== void 0 ? _getTabbableIndex4 : 0].getTabbable()) {
                var _managedChildren2, _getTabbableIndex5;

                (_managedChildren2 = managedChildren[(_getTabbableIndex5 = getTabbableIndex()) !== null && _getTabbableIndex5 !== void 0 ? _getTabbableIndex5 : 0]) === null || _managedChildren2 === void 0 ? void 0 : _managedChildren2.rerenderAndFocus();
                return;
              }
            }

            while (j < managedChildren.length) {
              var _getTabbableIndex6;

              ++j;

              if (managedChildren[(_getTabbableIndex6 = getTabbableIndex()) !== null && _getTabbableIndex6 !== void 0 ? _getTabbableIndex6 : 0].getTabbable()) {
                var _managedChildren3, _getTabbableIndex7;

                (_managedChildren3 = managedChildren[(_getTabbableIndex7 = getTabbableIndex()) !== null && _getTabbableIndex7 !== void 0 ? _getTabbableIndex7 : 0]) === null || _managedChildren3 === void 0 ? void 0 : _managedChildren3.rerenderAndFocus();
                return;
              }
            }
          }
        }, []),
        ...rest
      };
    }

    function identity(t) {
      return t;
    }
    /**
     * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
     *
     * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
     * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
     */


    function useListNavigation(_ref) {
      var _indexMangler, _indexDemangler, _keyNavigation, _getTabbableIndex;

      let {
        initialIndex,
        shouldFocusOnChange,
        collator,
        keyNavigation,
        indexMangler,
        indexDemangler
      } = _ref;
      (_indexMangler = indexMangler) !== null && _indexMangler !== void 0 ? _indexMangler : indexMangler = identity;
      (_indexDemangler = indexDemangler) !== null && _indexDemangler !== void 0 ? _indexDemangler : indexDemangler = identity;
      (_keyNavigation = keyNavigation) !== null && _keyNavigation !== void 0 ? _keyNavigation : keyNavigation = "either";
      useEnsureStability(indexMangler, indexDemangler); // Keep track of three things related to the currently tabbable element's index:
      // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.

      const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(initialIndex === undefined ? 0 : initialIndex);
      const {
        managedChildren,
        indicesByElement,
        useRovingTabIndexChild,
        focusCurrent,
        ...rest
      } = useRovingTabIndex({
        shouldFocusOnChange,
        tabbableIndex
      });
      /*const navigateToIndex = useCallback((i: number | null) => { setTabbableIndex(i); }, []);
      const navigateToFirst = useCallback(() => { tryNavigateToIndex(managedChildren,) setTabbableIndex(indexMangler!(0)); }, []);
      const navigateToLast = useCallback(() => { setTabbableIndex(indexMangler!(managedChildren.length - 1)); }, []);
      const navigateToPrev = useCallback(() => { setTabbableIndex(i => indexMangler!(indexDemangler!(i ?? 0) - 1)) }, [indexDemangler, indexMangler]);
      const navigateToNext = useCallback(() => { setTabbableIndex(i => indexMangler!(indexDemangler!(i ?? 0) + 1)) }, [indexDemangler, indexMangler]);
      */

      const navigateToIndex = F(i => {
        var _indexMangler2, _indexDemangler2;

        setTabbableIndex(i == null ? null : tryNavigateToIndex(managedChildren, 0, i, 1, (_indexMangler2 = indexMangler) !== null && _indexMangler2 !== void 0 ? _indexMangler2 : identity, (_indexDemangler2 = indexDemangler) !== null && _indexDemangler2 !== void 0 ? _indexDemangler2 : identity));
      }, []);
      const navigateToFirst = F(() => {
        var _indexMangler3, _indexDemangler3;

        setTabbableIndex(tryNavigateToIndex(managedChildren, 0, 0, 1, (_indexMangler3 = indexMangler) !== null && _indexMangler3 !== void 0 ? _indexMangler3 : identity, (_indexDemangler3 = indexDemangler) !== null && _indexDemangler3 !== void 0 ? _indexDemangler3 : identity));
      }, []);
      const navigateToLast = F(() => {
        var _indexMangler4, _indexDemangler4;

        setTabbableIndex(tryNavigateToIndex(managedChildren, managedChildren.length, managedChildren.length, -1, (_indexMangler4 = indexMangler) !== null && _indexMangler4 !== void 0 ? _indexMangler4 : identity, (_indexDemangler4 = indexDemangler) !== null && _indexDemangler4 !== void 0 ? _indexDemangler4 : identity));
      }, []);
      const navigateToPrev = F(() => {
        setTabbableIndex(c => {
          var _indexMangler5, _indexDemangler5;

          return tryNavigateToIndex(managedChildren, c !== null && c !== void 0 ? c : 0, (c !== null && c !== void 0 ? c : 0) - 1, -1, (_indexMangler5 = indexMangler) !== null && _indexMangler5 !== void 0 ? _indexMangler5 : identity, (_indexDemangler5 = indexDemangler) !== null && _indexDemangler5 !== void 0 ? _indexDemangler5 : identity);
        });
      }, []);
      const navigateToNext = F(() => {
        setTabbableIndex(c => {
          var _indexMangler6, _indexDemangler6;

          return tryNavigateToIndex(managedChildren, c !== null && c !== void 0 ? c : 0, (c !== null && c !== void 0 ? c : 0) + 1, 1, (_indexMangler6 = indexMangler) !== null && _indexMangler6 !== void 0 ? _indexMangler6 : identity, (_indexDemangler6 = indexDemangler) !== null && _indexDemangler6 !== void 0 ? _indexDemangler6 : identity);
        });
      }, []);
      const setIndex = F(index => {
        setTabbableIndex(index);
      }, []);
      const {
        currentTypeahead,
        invalidTypeahead,
        useTypeaheadNavigationChild,
        useTypeaheadNavigationProps
      } = useTypeaheadNavigation({
        collator,
        getIndex: getTabbableIndex,
        setIndex,
        typeaheadTimeout: 1000
      });
      const {
        useLinearNavigationProps
      } = useLinearNavigation({
        navigationDirection: keyNavigation,
        index: (_getTabbableIndex = getTabbableIndex()) !== null && _getTabbableIndex !== void 0 ? _getTabbableIndex : 0,
        managedChildren,
        navigateToPrev,
        navigateToNext,
        navigateToFirst,
        navigateToLast
      });
      const useListNavigationProps = F(props => {
        return useLinearNavigationProps(useTypeaheadNavigationProps(props));
      }, [useLinearNavigationProps, useTypeaheadNavigationProps]);
      const useListNavigationChild = F(info => {
        useTypeaheadNavigationChild(info); //const { useLinearNavigationChildProps } = useLinearNavigationChild(info as I);

        const {
          useRovingTabIndexChildProps,
          useRovingTabIndexSiblingProps,
          tabbable
        } = useRovingTabIndexChild(info);

        const useListNavigationChildProps = function (_ref2) {
          let { ...props
          } = _ref2;
          return useMergedProps()(useRovingTabIndexChildProps({
            onClick: roveToSelf,
            hidden: info.hidden
          }), props);
        };

        const roveToSelf = F(() => {
          navigateToIndex(info.index);
        }, []);
        return {
          useListNavigationChildProps,
          useListNavigationSiblingProps: useRovingTabIndexSiblingProps,
          tabbable
        };
      }, [useTypeaheadNavigationChild, useRovingTabIndexChild, navigateToIndex]);
      return {
        useListNavigationChild,
        useListNavigationProps,
        currentTypeahead,
        invalidTypeahead,
        tabbableIndex,
        managedChildren,
        indicesByElement,
        navigateToIndex,
        navigateToNext,
        navigateToPrev,
        navigateToFirst,
        navigateToLast,
        focusCurrent,
        ...rest
      };
    }
    function tryNavigateToIndex(managedCells, initial, target, searchDirection, indexMangler, indexDemangler) {
      function helper() {
        if (searchDirection === -1) {
          while (target >= 0 && (managedCells[target] == null || !!((_managedCells$target = managedCells[target]) !== null && _managedCells$target !== void 0 && _managedCells$target.hidden))) {
            var _managedCells$target;

            target = indexMangler(indexDemangler(target) - 1);
          }

          return target < 0 ? initial : target;
        } else if (searchDirection === 1) {
          while (target < managedCells.length && managedCells[target] == null || !!((_managedCells$target2 = managedCells[target]) !== null && _managedCells$target2 !== void 0 && _managedCells$target2.hidden)) {
            var _managedCells$target2;

            target = indexMangler(indexDemangler(target) + 1);
          }

          return target >= managedCells.length ? initial : target;
        } else {
          return initial;
        }
      }

      return helper();
    }

    function useDraggable(_ref) {
      let {
        effectAllowed,
        data,
        dragImage,
        dragImageXOffset,
        dragImageYOffset
      } = _ref;
      const [dragging, setDragging, getDragging] = useState(false);
      const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
      const useDraggableProps = F(p => {
        const ref = s(null);

        const onDragStart = e => {
          //e.preventDefault();
          setDragging(true);

          if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = effectAllowed !== null && effectAllowed !== void 0 ? effectAllowed : "all";
            if (dragImage) e.dataTransfer.setDragImage(dragImage, dragImageXOffset !== null && dragImageXOffset !== void 0 ? dragImageXOffset : 0, dragImageYOffset !== null && dragImageYOffset !== void 0 ? dragImageYOffset : 0);
            let entries = Object.entries(data);

            for (const [mimeType, data] of entries) {
              e.dataTransfer.setData(mimeType, data);
            }
          }
        };

        const onDragEnd = e => {
          e.preventDefault();
          setDragging(false);

          if (e.dataTransfer) {
            if (e.dataTransfer.dropEffect != "none") {
              setLastDropEffect(e.dataTransfer.dropEffect);
            } else {
              setLastDropEffect(null);
            }
          }
        };

        return useMergedProps()({
          draggable: true,
          onDragStart,
          onDragEnd,
          ref
        }, p);
      }, [effectAllowed, dragImage, dragImageXOffset, dragImageYOffset, ...Object.entries(data).flat()]); // Return both the element and the hook that modifies 
      // the props and allows us to actually find the element

      let ret = {
        useDraggableProps,
        dragging,
        getDragging,
        // Set once a drag has completed with the resulting action
        // Useful for removing the element afterwards if it was "move"
        lastDropEffect,

        /**
         * Test
         */
        getLastDropEffect
      };
      return ret;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    class DroppableFileError extends Error {
      constructor(fileName, base) {
        var _base$message;

        super((_base$message = base === null || base === void 0 ? void 0 : base.message) !== null && _base$message !== void 0 ? _base$message : "An unspecified error occurred reading the file.");

        _defineProperty(this, "fileName", void 0);

        _defineProperty(this, "errorType", void 0);

        this.fileName = fileName;
        this.errorType = base === null || base === void 0 ? void 0 : base.name;
      }

    } //MergedProps<UseRefElementPropsReturnType<E, Pick<h.JSX.HTMLAttributes<E>, "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop">>, P>;

    function useDroppable(_ref) {
      let {
        effect
      } = _ref;
      const [filesForConsideration, setFilesForConsideration] = useState(null);
      const [stringsForConsideration, setStringsForConsideration] = useState(null);
      const [droppedFiles, setDroppedFiles] = useState(null);
      const [droppedStrings, setDroppedStrings] = useState(null);
      const [dropError, setDropError] = useState(undefined); // All the promises generated from the drop events.
      // Used to process multiple drop events in succession

      const dropPromisesRef = s([]);
      const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
      const [promiseCount, setPromiseCount, getPromiseCount] = useState(0); // Any time we add a new promise, if there's no current promise running, we need to start one.
      // If there is one, then we don't need to do anything, since it runs the same check.

      y(() => {
        const currentPromiseIndex = getCurrentPromiseIndex();
        const promiseCount = getPromiseCount();

        if (promiseCount > 0) {
          if (currentPromiseIndex + 1 < promiseCount) {
            setCurrentPromiseIndex(i => ++i);
          }
        }
      }, [promiseCount]); // Anytime our current promise changes,
      // wait for it to finish, then set our state to its result.
      // Finally, check to see if there are anymore promises.
      // If there are, then increase currentPromiseCount,
      // which will trigger this again.
      //
      // This shouldn't happen *often*, but maybe in the case of
      // individually dropping a bunch of large files or something.

      y(() => {
        if (currentPromiseIndex >= 0) {
          const currentPromise = dropPromisesRef.current[currentPromiseIndex];
          currentPromise.then(info => {
            if (info !== null) {
              const {
                files,
                strings
              } = info;
              setDroppedFiles(files);
              setDroppedStrings(strings);
            } // Now that we're done, are there more promises in the queue?


            const currentPromiseIndex = getCurrentPromiseIndex();
            const promiseCount = getPromiseCount();

            if (currentPromiseIndex + 1 < promiseCount) {
              // Since this promise has started, more have been added.
              // Run this effect again.
              setCurrentPromiseIndex(i => ++i);
            }
          });
        }
      }, [currentPromiseIndex]);

      const useDroppableProps = p => {
        //const ref = useRef<E>(null);
        // Handle collecting the current file metadata or MIME types.
        const onDragEnter = e => {
          e.preventDefault();

          if (e.dataTransfer) {
            // Is there a default? I can't find one anywhere.
            e.dataTransfer.dropEffect = effect !== null && effect !== void 0 ? effect : "move";
            const newMimeTypes = new Set();
            const newFiles = new Array();

            for (let item of (_e$dataTransfer$items = (_e$dataTransfer = e.dataTransfer) === null || _e$dataTransfer === void 0 ? void 0 : _e$dataTransfer.items) !== null && _e$dataTransfer$items !== void 0 ? _e$dataTransfer$items : []) {
              var _e$dataTransfer$items, _e$dataTransfer;

              const {
                kind,
                type
              } = item;

              if (kind === "string") {
                newMimeTypes.add(type);
              } else if (kind === "file") {
                newFiles.push({
                  type: item.type
                });
              }
            }

            setFilesForConsideration(newFiles);
            setStringsForConsideration(newMimeTypes);
          }
        }; // Handle resetting the current file metadata or MIME types


        const onDragLeave = e => {
          e.preventDefault();
          setFilesForConsideration(null);
          setStringsForConsideration(null);
        }; // Boilerplate, I guess


        const onDragOver = e => {
          e.preventDefault();
        }; // Handle getting the drop data asynchronously


        const onDrop = e => {
          e.preventDefault();
          setFilesForConsideration(null);
          setStringsForConsideration(null);
          let allPromises = new Array();
          const dropData = {};
          const dropFile = [];

          for (let item of (_e$dataTransfer$items2 = (_e$dataTransfer2 = e.dataTransfer) === null || _e$dataTransfer2 === void 0 ? void 0 : _e$dataTransfer2.items) !== null && _e$dataTransfer$items2 !== void 0 ? _e$dataTransfer$items2 : []) {
            var _e$dataTransfer$items2, _e$dataTransfer2;

            const {
              kind,
              type
            } = item;

            if (kind === "string") {
              allPromises.push(new Promise((resolve, reject) => item.getAsString(resolve)).then(str => dropData[type] = str));
            } else if (kind === "file") {
              const file = item.getAsFile();

              if (file) {
                allPromises.push(new Promise((resolve, reject) => {
                  let reader = new FileReader();

                  reader.onload = e => {
                    resolve();
                    const data = reader.result;
                    dropFile.push({
                      data,
                      name: file.name,
                      type: file.type,
                      size: data.byteLength,
                      lastModified: file.lastModified
                    });
                  };

                  reader.onerror = e => {
                    reject(new DroppableFileError(file.name, reader.error));
                  };

                  reader.onabort = e => {
                    reject(new DroppableFileError(file.name, reader.error));
                  };

                  reader.readAsArrayBuffer(file);
                }));
                dropFile.push();
              }
            }
          }

          dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
            setPromiseCount(i => ++i);
            setDropError(null);
            return {
              strings: dropData,
              files: dropFile
            };
          }).catch(ex => {
            debugger; // Intentional

            setPromiseCount(i => ++i);
            setDropError(ex);
            return null;
          }));
        };

        return useMergedProps()({
          onDragEnter,
          onDragLeave,
          onDragOver,
          onDrop
        }, p);
      };

      return {
        useDroppableProps,
        filesForConsideration,
        stringsForConsideration,
        droppedFiles,
        droppedStrings,
        dropError
      };
    }

    /**
     * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
     *
     * Due to typing limitations, this function must be called like this:
     *
     * `useEventHandler(element, "input")<InputEvent>(e => {})`
     *
     * The type argument is optional, but narrows down the type from "a union of all events" to whatever you specify, and errors if it doesn't exist.
     *
     * There is a separate version that attaches event handlers to a set of props.
     * It takes different event string types (onEvent vs onevent).
     *
     * @param target A *non-Preact* node to attach the event to.
     * @returns
     * *
     */

    function useGlobalHandler(target, type, handler, options) {
      // Note to self: The typing doesn't improve even if this is split up into a sub-function.
      // No matter what, it seems impossible to get the handler's event object typed perfectly.
      // It seems like it's guaranteed to always be a union of all available tupes.
      // Again, no matter what combination of sub- or sub-sub-functions used.
      let stableHandler = useStableCallback(handler !== null && handler !== void 0 ? handler : () => {});
      if (handler == null) stableHandler = null;
      y(() => {
        if (stableHandler) {
          target.addEventListener(type, stableHandler, options);
          return () => target.removeEventListener(type, stableHandler, options);
        }
      }, [target, type, stableHandler]);
    }

    const activeElementUpdaters = new Map();
    const lastActiveElementUpdaters = new Map();
    const windowFocusedUpdaters = new Map();
    let windowsFocused = new Map();

    function forEachUpdater(window, map, value) {
      for (let [otherWindow, updaters] of map) {
        if (window === otherWindow) {
          for (let updater of updaters) {
            updater === null || updater === void 0 ? void 0 : updater(value);
          }
        }
      }
    }

    function focusout(e) {
      const window = e.target.ownerDocument.defaultView;

      if (e.relatedTarget == null) {
        forEachUpdater(window, activeElementUpdaters, null);
      }
    }

    function focusin(e) {
      const window = e.target.ownerDocument.defaultView;
      let currentlyFocusedElement = e.target;
      forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement);
      forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement);
    }

    function windowFocus(e) {
      const window = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
      windowsFocused.set(window, true);
      forEachUpdater(window, windowFocusedUpdaters, true);
    }

    function windowBlur(e) {
      const window = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
      windowsFocused.set(window, false);
      forEachUpdater(window, windowFocusedUpdaters, false);
    }
    /**
     * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus by returning the following functions:
     * * `getActiveElement()`
     * * `getLastActiveElement()`
     * * `getWindowFocused()`
     * * **No prop-modifying hook is returned because none is necessary**
     *
     * (The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes)
     *
     * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
     *
     * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
     */


    function useActiveElement(_ref) {
      let {
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange
      } = _ref;
      useEnsureStability(onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange);
      const {
        getElement,
        useRefElementProps
      } = useRefElement({
        onElementChange: F(element => {
          if (element) {
            var _activeElementUpdater, _activeElementUpdater2, _activeElementUpdater3, _lastActiveElementUpd, _windowFocusedUpdater;

            const document = element.ownerDocument;
            const window = document === null || document === void 0 ? void 0 : document.defaultView;

            if (((_activeElementUpdater = (_activeElementUpdater2 = activeElementUpdaters.get(window)) === null || _activeElementUpdater2 === void 0 ? void 0 : _activeElementUpdater2.size) !== null && _activeElementUpdater !== void 0 ? _activeElementUpdater : 0) === 0) {
              document === null || document === void 0 ? void 0 : document.addEventListener("focusin", focusin, {
                passive: true
              });
              document === null || document === void 0 ? void 0 : document.addEventListener("focusout", focusout, {
                passive: true
              });
              window === null || window === void 0 ? void 0 : window.addEventListener("focus", windowFocus, {
                passive: true
              });
              window === null || window === void 0 ? void 0 : window.addEventListener("blur", windowBlur, {
                passive: true
              });
            } // Add them even if they're undefined to more easily
            // manage the ">0 means don't add handlers" logic.


            const localActiveElementUpdaters = (_activeElementUpdater3 = activeElementUpdaters.get(window)) !== null && _activeElementUpdater3 !== void 0 ? _activeElementUpdater3 : new Set();
            const localLastActiveElementUpdaters = (_lastActiveElementUpd = lastActiveElementUpdaters.get(window)) !== null && _lastActiveElementUpd !== void 0 ? _lastActiveElementUpd : new Set();
            const localWindowFocusedUpdaters = (_windowFocusedUpdater = windowFocusedUpdaters.get(window)) !== null && _windowFocusedUpdater !== void 0 ? _windowFocusedUpdater : new Set();
            localActiveElementUpdaters.add(setActiveElement);
            localLastActiveElementUpdaters.add(setLastActiveElement);
            localWindowFocusedUpdaters.add(setWindowFocused);
            activeElementUpdaters.set(window, localActiveElementUpdaters);
            lastActiveElementUpdaters.set(window, localLastActiveElementUpdaters);
            windowFocusedUpdaters.set(window, localWindowFocusedUpdaters);
            return () => {
              activeElementUpdaters.get(window).delete(setActiveElement);
              lastActiveElementUpdaters.get(window).delete(setLastActiveElement);
              windowFocusedUpdaters.get(window).delete(setWindowFocused);

              if (activeElementUpdaters.size === 0) {
                document === null || document === void 0 ? void 0 : document.removeEventListener("focusin", focusin);
                document === null || document === void 0 ? void 0 : document.removeEventListener("focusout", focusout);
                window === null || window === void 0 ? void 0 : window.removeEventListener("focus", windowFocus);
                window === null || window === void 0 ? void 0 : window.removeEventListener("blur", windowBlur);
              }
            };
          }
        }, [])
      });
      const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, undefined);
      const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, undefined);
      const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue);
      return {
        getElement,
        useActiveElementProps: useRefElementProps,
        getActiveElement,
        getLastActiveElement,
        getWindowFocused
      };
    }

    function returnTrue() {
      return true;
    }

    function returnFalse() {
      return false;
    }

    function useHasFocus(_ref) {
      let {
        onFocusedChanged,
        onFocusedInnerChanged,
        onLastFocusedChanged,
        onLastFocusedInnerChanged,
        onLastActiveElementChange,
        onActiveElementChange,
        onWindowFocusedChange
      } = _ref;
      useEnsureStability(onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, onLastActiveElementChange, onActiveElementChange, onWindowFocusedChange);
      const [getFocused, setFocused] = usePassiveState(onFocusedChanged, returnFalse);
      const [getFocusedInner, setFocusedInner] = usePassiveState(onFocusedInnerChanged, returnFalse);
      const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse);
      const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse);
      const {
        getActiveElement,
        getLastActiveElement,
        getWindowFocused,
        useActiveElementProps,
        getElement
      } = useActiveElement({
        onActiveElementChange: F((activeElement, prevActiveElement) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == activeElement;
          const focusedInner = !!(selfElement !== null && selfElement !== void 0 && selfElement.contains(activeElement));
          setFocused(focused);
          setFocusedInner(focusedInner);
          onActiveElementChange === null || onActiveElementChange === void 0 ? void 0 : onActiveElementChange(activeElement, prevActiveElement);
        }, []),
        onLastActiveElementChange: F((lastActiveElement, prevLastActiveElement) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == lastActiveElement;
          const focusedInner = !!(selfElement !== null && selfElement !== void 0 && selfElement.contains(lastActiveElement));
          setLastFocused(focused);
          setLastFocusedInner(focusedInner);
          onLastActiveElementChange === null || onLastActiveElementChange === void 0 ? void 0 : onLastActiveElementChange(lastActiveElement, prevLastActiveElement);
        }, []),
        onWindowFocusedChange
      });
      const useHasFocusProps = F(props => {
        return useActiveElementProps(props);
      }, [useActiveElementProps]);
      return {
        useHasFocusProps,
        getElement,
        getFocused,
        getFocusedInner,
        getLastFocused,
        getLastFocusedInner,
        getActiveElement,
        getLastActiveElement,
        getWindowFocused
      };
    }

    function useInterval(_ref) {
      let {
        interval,
        callback
      } = _ref;
      // Get a wrapper around the given callback that's stable
      const stableCallback = useStableCallback(callback);
      const getInterval = useStableGetter(interval);
      y(() => {
        let interval = getInterval();
        let lastDelayUsed = interval;
        if (interval == null) return; // Get a wrapper around the wrapper around the callback
        // that clears and resets the interval if it changes.

        const adjustableCallback = () => {
          stableCallback();
          const currentInterval = getInterval();

          if (currentInterval != lastDelayUsed) {
            clearInterval(handle);
            if (currentInterval != null) handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
          }
        };

        let handle = setInterval(adjustableCallback, interval);
        return () => clearInterval(handle);
      }, []);
    }

    /*!
    * tabbable 5.2.1
    * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
    */
    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
    var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    var isInput = function isInput(node) {
      return node.tagName === 'INPUT';
    };

    var isHiddenInput = function isHiddenInput(node) {
      return isInput(node) && node.type === 'hidden';
    };

    var isDetailsWithSummary = function isDetailsWithSummary(node) {
      var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
        return child.tagName === 'SUMMARY';
      });
      return r;
    };

    var isHidden = function isHidden(node, displayCheck) {
      if (getComputedStyle(node).visibility === 'hidden') {
        return true;
      }

      var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

      if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
        return true;
      }

      if (!displayCheck || displayCheck === 'full') {
        while (node) {
          if (getComputedStyle(node).display === 'none') {
            return true;
          }

          node = node.parentElement;
        }
      } else if (displayCheck === 'non-zero-area') {
        var _node$getBoundingClie = node.getBoundingClientRect(),
            width = _node$getBoundingClie.width,
            height = _node$getBoundingClie.height;

        return width === 0 && height === 0;
      }

      return false;
    }; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
    //  unless they are in the _first_ <legend> element of the top-most disabled
    //  fieldset


    var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
      if (isInput(node) || node.tagName === 'SELECT' || node.tagName === 'TEXTAREA' || node.tagName === 'BUTTON') {
        var parentNode = node.parentElement;

        while (parentNode) {
          if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
            // look for the first <legend> as an immediate child of the disabled
            //  <fieldset>: if the node is in that legend, it'll be enabled even
            //  though the fieldset is disabled; otherwise, the node is in a
            //  secondary/subsequent legend, or somewhere else within the fieldset
            //  (however deep nested) and it'll be disabled
            for (var i = 0; i < parentNode.children.length; i++) {
              var child = parentNode.children.item(i);

              if (child.tagName === 'LEGEND') {
                if (child.contains(node)) {
                  return false;
                } // the node isn't in the first legend (in doc order), so no matter
                //  where it is now, it'll be disabled


                return true;
              }
            } // the node isn't in a legend, so no matter where it is now, it'll be disabled


            return true;
          }

          parentNode = parentNode.parentElement;
        }
      } // else, node's tabbable/focusable state should not be affected by a fieldset's
      //  enabled/disabled state


      return false;
    };

    var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || // For a details element with a summary, the summary element gets the focus
      isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
      }

      return true;
    };

    var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

    var isFocusable = function isFocusable(node, options) {
      options = options || {};

      if (!node) {
        throw new Error('No node provided');
      }

      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }

      return isNodeMatchingSelectorFocusable(options, node);
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    createCommonjsModule(function (module, exports) {
      (function (global, factory) {
        factory() ;
      })(commonjsGlobal, function () {

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        /**
         * This work is licensed under the W3C Software and Document License
         * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
         */


        (function () {
          // Return early if we're not running inside of the browser.
          if (typeof window === 'undefined') {
            return;
          } // Convenience function for converting NodeLists.

          /** @type {typeof Array.prototype.slice} */


          var slice = Array.prototype.slice;
          /**
           * IE has a non-standard name for "matches".
           * @type {typeof Element.prototype.matches}
           */

          var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
          /** @type {string} */

          var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');
          /**
           * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
           * attribute.
           *
           * Its main functions are:
           *
           * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
           *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
           *   each focusable node in the subtree with the singleton `InertManager` which manages all known
           *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
           *   instance exists for each focusable node which has at least one inert root as an ancestor.
           *
           * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
           *   attribute is removed from the root node). This is handled in the destructor, which calls the
           *   `deregister` method on `InertManager` for each managed inert node.
           */


          var InertRoot = function () {
            /**
             * @param {!Element} rootElement The Element at the root of the inert subtree.
             * @param {!InertManager} inertManager The global singleton InertManager object.
             */
            function InertRoot(rootElement, inertManager) {
              _classCallCheck(this, InertRoot);
              /** @type {!InertManager} */


              this._inertManager = inertManager;
              /** @type {!Element} */

              this._rootElement = rootElement;
              /**
               * @type {!Set<!InertNode>}
               * All managed focusable nodes in this InertRoot's subtree.
               */

              this._managedNodes = new Set(); // Make the subtree hidden from assistive technology

              if (this._rootElement.hasAttribute('aria-hidden')) {
                /** @type {?string} */
                this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
              } else {
                this._savedAriaHidden = null;
              }

              this._rootElement.setAttribute('aria-hidden', 'true'); // Make all focusable elements in the subtree unfocusable and add them to _managedNodes


              this._makeSubtreeUnfocusable(this._rootElement); // Watch for:
              // - any additions in the subtree: make them unfocusable too
              // - any removals from the subtree: remove them from this inert root's managed nodes
              // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
              //   element, make that node a managed node.


              this._observer = new MutationObserver(this._onMutation.bind(this));

              this._observer.observe(this._rootElement, {
                attributes: true,
                childList: true,
                subtree: true
              });
            }
            /**
             * Call this whenever this object is about to become obsolete.  This unwinds all of the state
             * stored in this object and updates the state of all of the managed nodes.
             */


            _createClass(InertRoot, [{
              key: 'destructor',
              value: function destructor() {
                this._observer.disconnect();

                if (this._rootElement) {
                  if (this._savedAriaHidden !== null) {
                    this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
                  } else {
                    this._rootElement.removeAttribute('aria-hidden');
                  }
                }

                this._managedNodes.forEach(function (inertNode) {
                  this._unmanageNode(inertNode.node);
                }, this); // Note we cast the nulls to the ANY type here because:
                // 1) We want the class properties to be declared as non-null, or else we
                //    need even more casts throughout this code. All bets are off if an
                //    instance has been destroyed and a method is called.
                // 2) We don't want to cast "this", because we want type-aware optimizations
                //    to know which properties we're setting.


                this._observer =
                /** @type {?} */
                null;
                this._rootElement =
                /** @type {?} */
                null;
                this._managedNodes =
                /** @type {?} */
                null;
                this._inertManager =
                /** @type {?} */
                null;
              }
              /**
               * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
               */

            }, {
              key: '_makeSubtreeUnfocusable',

              /**
               * @param {!Node} startNode
               */
              value: function _makeSubtreeUnfocusable(startNode) {
                var _this2 = this;

                composedTreeWalk(startNode, function (node) {
                  return _this2._visitNode(node);
                });
                var activeElement = document.activeElement;

                if (!document.body.contains(startNode)) {
                  // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
                  var node = startNode;
                  /** @type {!ShadowRoot|undefined} */

                  var root = undefined;

                  while (node) {
                    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                      root =
                      /** @type {!ShadowRoot} */
                      node;
                      break;
                    }

                    node = node.parentNode;
                  }

                  if (root) {
                    activeElement = root.activeElement;
                  }
                }

                if (startNode.contains(activeElement)) {
                  activeElement.blur(); // In IE11, if an element is already focused, and then set to tabindex=-1
                  // calling blur() will not actually move the focus.
                  // To work around this we call focus() on the body instead.

                  if (activeElement === document.activeElement) {
                    document.body.focus();
                  }
                }
              }
              /**
               * @param {!Node} node
               */

            }, {
              key: '_visitNode',
              value: function _visitNode(node) {
                if (node.nodeType !== Node.ELEMENT_NODE) {
                  return;
                }

                var element =
                /** @type {!Element} */
                node; // If a descendant inert root becomes un-inert, its descendants will still be inert because of
                // this inert root, so all of its managed nodes need to be adopted by this InertRoot.

                if (element !== this._rootElement && element.hasAttribute('inert')) {
                  this._adoptInertRoot(element);
                }

                if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
                  this._manageNode(element);
                }
              }
              /**
               * Register the given node with this InertRoot and with InertManager.
               * @param {!Node} node
               */

            }, {
              key: '_manageNode',
              value: function _manageNode(node) {
                var inertNode = this._inertManager.register(node, this);

                this._managedNodes.add(inertNode);
              }
              /**
               * Unregister the given node with this InertRoot and with InertManager.
               * @param {!Node} node
               */

            }, {
              key: '_unmanageNode',
              value: function _unmanageNode(node) {
                var inertNode = this._inertManager.deregister(node, this);

                if (inertNode) {
                  this._managedNodes['delete'](inertNode);
                }
              }
              /**
               * Unregister the entire subtree starting at `startNode`.
               * @param {!Node} startNode
               */

            }, {
              key: '_unmanageSubtree',
              value: function _unmanageSubtree(startNode) {
                var _this3 = this;

                composedTreeWalk(startNode, function (node) {
                  return _this3._unmanageNode(node);
                });
              }
              /**
               * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
               * @param {!Element} node
               */

            }, {
              key: '_adoptInertRoot',
              value: function _adoptInertRoot(node) {
                var inertSubroot = this._inertManager.getInertRoot(node); // During initialisation this inert root may not have been registered yet,
                // so register it now if need be.


                if (!inertSubroot) {
                  this._inertManager.setInert(node, true);

                  inertSubroot = this._inertManager.getInertRoot(node);
                }

                inertSubroot.managedNodes.forEach(function (savedInertNode) {
                  this._manageNode(savedInertNode.node);
                }, this);
              }
              /**
               * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
               * @param {!Array<!MutationRecord>} records
               * @param {!MutationObserver} self
               */

            }, {
              key: '_onMutation',
              value: function _onMutation(records, self) {
                records.forEach(function (record) {
                  var target =
                  /** @type {!Element} */
                  record.target;

                  if (record.type === 'childList') {
                    // Manage added nodes
                    slice.call(record.addedNodes).forEach(function (node) {
                      this._makeSubtreeUnfocusable(node);
                    }, this); // Un-manage removed nodes

                    slice.call(record.removedNodes).forEach(function (node) {
                      this._unmanageSubtree(node);
                    }, this);
                  } else if (record.type === 'attributes') {
                    if (record.attributeName === 'tabindex') {
                      // Re-initialise inert node if tabindex changes
                      this._manageNode(target);
                    } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                      // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                      // already managed nodes from this inert subroot.
                      this._adoptInertRoot(target);

                      var inertSubroot = this._inertManager.getInertRoot(target);

                      this._managedNodes.forEach(function (managedNode) {
                        if (target.contains(managedNode.node)) {
                          inertSubroot._manageNode(managedNode.node);
                        }
                      });
                    }
                  }
                }, this);
              }
            }, {
              key: 'managedNodes',
              get: function get() {
                return new Set(this._managedNodes);
              }
              /** @return {boolean} */

            }, {
              key: 'hasSavedAriaHidden',
              get: function get() {
                return this._savedAriaHidden !== null;
              }
              /** @param {?string} ariaHidden */

            }, {
              key: 'savedAriaHidden',
              set: function set(ariaHidden) {
                this._savedAriaHidden = ariaHidden;
              }
              /** @return {?string} */
              ,
              get: function get() {
                return this._savedAriaHidden;
              }
            }]);

            return InertRoot;
          }();
          /**
           * `InertNode` initialises and manages a single inert node.
           * A node is inert if it is a descendant of one or more inert root elements.
           *
           * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
           * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
           * is intrinsically focusable or not.
           *
           * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
           * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
           * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
           * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
           * or removes the `tabindex` attribute if the element is intrinsically focusable.
           */


          var InertNode = function () {
            /**
             * @param {!Node} node A focusable element to be made inert.
             * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
             */
            function InertNode(node, inertRoot) {
              _classCallCheck(this, InertNode);
              /** @type {!Node} */


              this._node = node;
              /** @type {boolean} */

              this._overrodeFocusMethod = false;
              /**
               * @type {!Set<!InertRoot>} The set of descendant inert roots.
               *    If and only if this set becomes empty, this node is no longer inert.
               */

              this._inertRoots = new Set([inertRoot]);
              /** @type {?number} */

              this._savedTabIndex = null;
              /** @type {boolean} */

              this._destroyed = false; // Save any prior tabindex info and make this node untabbable

              this.ensureUntabbable();
            }
            /**
             * Call this whenever this object is about to become obsolete.
             * This makes the managed node focusable again and deletes all of the previously stored state.
             */


            _createClass(InertNode, [{
              key: 'destructor',
              value: function destructor() {
                this._throwIfDestroyed();

                if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
                  var element =
                  /** @type {!Element} */
                  this._node;

                  if (this._savedTabIndex !== null) {
                    element.setAttribute('tabindex', this._savedTabIndex);
                  } else {
                    element.removeAttribute('tabindex');
                  } // Use `delete` to restore native focus method.


                  if (this._overrodeFocusMethod) {
                    delete element.focus;
                  }
                } // See note in InertRoot.destructor for why we cast these nulls to ANY.


                this._node =
                /** @type {?} */
                null;
                this._inertRoots =
                /** @type {?} */
                null;
                this._destroyed = true;
              }
              /**
               * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
               * If the object has been destroyed, any attempt to access it will cause an exception.
               */

            }, {
              key: '_throwIfDestroyed',

              /**
               * Throw if user tries to access destroyed InertNode.
               */
              value: function _throwIfDestroyed() {
                if (this.destroyed) {
                  throw new Error('Trying to access destroyed InertNode');
                }
              }
              /** @return {boolean} */

            }, {
              key: 'ensureUntabbable',

              /** Save the existing tabindex value and make the node untabbable and unfocusable */
              value: function ensureUntabbable() {
                if (this.node.nodeType !== Node.ELEMENT_NODE) {
                  return;
                }

                var element =
                /** @type {!Element} */
                this.node;

                if (matches.call(element, _focusableElementsString)) {
                  if (
                  /** @type {!HTMLElement} */
                  element.tabIndex === -1 && this.hasSavedTabIndex) {
                    return;
                  }

                  if (element.hasAttribute('tabindex')) {
                    this._savedTabIndex =
                    /** @type {!HTMLElement} */
                    element.tabIndex;
                  }

                  element.setAttribute('tabindex', '-1');

                  if (element.nodeType === Node.ELEMENT_NODE) {
                    element.focus = function () {};

                    this._overrodeFocusMethod = true;
                  }
                } else if (element.hasAttribute('tabindex')) {
                  this._savedTabIndex =
                  /** @type {!HTMLElement} */
                  element.tabIndex;
                  element.removeAttribute('tabindex');
                }
              }
              /**
               * Add another inert root to this inert node's set of managing inert roots.
               * @param {!InertRoot} inertRoot
               */

            }, {
              key: 'addInertRoot',
              value: function addInertRoot(inertRoot) {
                this._throwIfDestroyed();

                this._inertRoots.add(inertRoot);
              }
              /**
               * Remove the given inert root from this inert node's set of managing inert roots.
               * If the set of managing inert roots becomes empty, this node is no longer inert,
               * so the object should be destroyed.
               * @param {!InertRoot} inertRoot
               */

            }, {
              key: 'removeInertRoot',
              value: function removeInertRoot(inertRoot) {
                this._throwIfDestroyed();

                this._inertRoots['delete'](inertRoot);

                if (this._inertRoots.size === 0) {
                  this.destructor();
                }
              }
            }, {
              key: 'destroyed',
              get: function get() {
                return (
                  /** @type {!InertNode} */
                  this._destroyed
                );
              }
            }, {
              key: 'hasSavedTabIndex',
              get: function get() {
                return this._savedTabIndex !== null;
              }
              /** @return {!Node} */

            }, {
              key: 'node',
              get: function get() {
                this._throwIfDestroyed();

                return this._node;
              }
              /** @param {?number} tabIndex */

            }, {
              key: 'savedTabIndex',
              set: function set(tabIndex) {
                this._throwIfDestroyed();

                this._savedTabIndex = tabIndex;
              }
              /** @return {?number} */
              ,
              get: function get() {
                this._throwIfDestroyed();

                return this._savedTabIndex;
              }
            }]);

            return InertNode;
          }();
          /**
           * InertManager is a per-document singleton object which manages all inert roots and nodes.
           *
           * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
           * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
           * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
           * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
           * is created for each such node, via the `_managedNodes` map.
           */


          var InertManager = function () {
            /**
             * @param {!Document} document
             */
            function InertManager(document) {
              _classCallCheck(this, InertManager);

              if (!document) {
                throw new Error('Missing required argument; InertManager needs to wrap a document.');
              }
              /** @type {!Document} */


              this._document = document;
              /**
               * All managed nodes known to this InertManager. In a map to allow looking up by Node.
               * @type {!Map<!Node, !InertNode>}
               */

              this._managedNodes = new Map();
              /**
               * All inert roots known to this InertManager. In a map to allow looking up by Node.
               * @type {!Map<!Node, !InertRoot>}
               */

              this._inertRoots = new Map();
              /**
               * Observer for mutations on `document.body`.
               * @type {!MutationObserver}
               */

              this._observer = new MutationObserver(this._watchForInert.bind(this)); // Add inert style.

              addInertStyle(document.head || document.body || document.documentElement); // Wait for document to be loaded.

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
              } else {
                this._onDocumentLoaded();
              }
            }
            /**
             * Set whether the given element should be an inert root or not.
             * @param {!Element} root
             * @param {boolean} inert
             */


            _createClass(InertManager, [{
              key: 'setInert',
              value: function setInert(root, inert) {
                if (inert) {
                  if (this._inertRoots.has(root)) {
                    // element is already inert
                    return;
                  }

                  var inertRoot = new InertRoot(root, this);
                  root.setAttribute('inert', '');

                  this._inertRoots.set(root, inertRoot); // If not contained in the document, it must be in a shadowRoot.
                  // Ensure inert styles are added there.


                  if (!this._document.body.contains(root)) {
                    var parent = root.parentNode;

                    while (parent) {
                      if (parent.nodeType === 11) {
                        addInertStyle(parent);
                      }

                      parent = parent.parentNode;
                    }
                  }
                } else {
                  if (!this._inertRoots.has(root)) {
                    // element is already non-inert
                    return;
                  }

                  var _inertRoot = this._inertRoots.get(root);

                  _inertRoot.destructor();

                  this._inertRoots['delete'](root);

                  root.removeAttribute('inert');
                }
              }
              /**
               * Get the InertRoot object corresponding to the given inert root element, if any.
               * @param {!Node} element
               * @return {!InertRoot|undefined}
               */

            }, {
              key: 'getInertRoot',
              value: function getInertRoot(element) {
                return this._inertRoots.get(element);
              }
              /**
               * Register the given InertRoot as managing the given node.
               * In the case where the node has a previously existing inert root, this inert root will
               * be added to its set of inert roots.
               * @param {!Node} node
               * @param {!InertRoot} inertRoot
               * @return {!InertNode} inertNode
               */

            }, {
              key: 'register',
              value: function register(node, inertRoot) {
                var inertNode = this._managedNodes.get(node);

                if (inertNode !== undefined) {
                  // node was already in an inert subtree
                  inertNode.addInertRoot(inertRoot);
                } else {
                  inertNode = new InertNode(node, inertRoot);
                }

                this._managedNodes.set(node, inertNode);

                return inertNode;
              }
              /**
               * De-register the given InertRoot as managing the given inert node.
               * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
               * node from the InertManager's set of managed nodes if it is destroyed.
               * If the node is not currently managed, this is essentially a no-op.
               * @param {!Node} node
               * @param {!InertRoot} inertRoot
               * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
               */

            }, {
              key: 'deregister',
              value: function deregister(node, inertRoot) {
                var inertNode = this._managedNodes.get(node);

                if (!inertNode) {
                  return null;
                }

                inertNode.removeInertRoot(inertRoot);

                if (inertNode.destroyed) {
                  this._managedNodes['delete'](node);
                }

                return inertNode;
              }
              /**
               * Callback used when document has finished loading.
               */

            }, {
              key: '_onDocumentLoaded',
              value: function _onDocumentLoaded() {
                // Find all inert roots in document and make them actually inert.
                var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
                inertElements.forEach(function (inertElement) {
                  this.setInert(inertElement, true);
                }, this); // Comment this out to use programmatic API only.

                this._observer.observe(this._document.body || this._document.documentElement, {
                  attributes: true,
                  subtree: true,
                  childList: true
                });
              }
              /**
               * Callback used when mutation observer detects attribute changes.
               * @param {!Array<!MutationRecord>} records
               * @param {!MutationObserver} self
               */

            }, {
              key: '_watchForInert',
              value: function _watchForInert(records, self) {
                var _this = this;

                records.forEach(function (record) {
                  switch (record.type) {
                    case 'childList':
                      slice.call(record.addedNodes).forEach(function (node) {
                        if (node.nodeType !== Node.ELEMENT_NODE) {
                          return;
                        }

                        var inertElements = slice.call(node.querySelectorAll('[inert]'));

                        if (matches.call(node, '[inert]')) {
                          inertElements.unshift(node);
                        }

                        inertElements.forEach(function (inertElement) {
                          this.setInert(inertElement, true);
                        }, _this);
                      }, _this);
                      break;

                    case 'attributes':
                      if (record.attributeName !== 'inert') {
                        return;
                      }

                      var target =
                      /** @type {!Element} */
                      record.target;
                      var inert = target.hasAttribute('inert');

                      _this.setInert(target, inert);

                      break;
                  }
                }, this);
              }
            }]);

            return InertManager;
          }();
          /**
           * Recursively walk the composed tree from |node|.
           * @param {!Node} node
           * @param {(function (!Element))=} callback Callback to be called for each element traversed,
           *     before descending into child nodes.
           * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
           */


          function composedTreeWalk(node, callback, shadowRootAncestor) {
            if (node.nodeType == Node.ELEMENT_NODE) {
              var element =
              /** @type {!Element} */
              node;

              if (callback) {
                callback(element);
              } // Descend into node:
              // If it has a ShadowRoot, ignore all child elements - these will be picked
              // up by the <content> or <shadow> elements. Descend straight into the
              // ShadowRoot.


              var shadowRoot =
              /** @type {!HTMLElement} */
              element.shadowRoot;

              if (shadowRoot) {
                composedTreeWalk(shadowRoot, callback);
                return;
              } // If it is a <content> element, descend into distributed elements - these
              // are elements from outside the shadow root which are rendered inside the
              // shadow DOM.


              if (element.localName == 'content') {
                var content =
                /** @type {!HTMLContentElement} */
                element; // Verifies if ShadowDom v0 is supported.

                var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];

                for (var i = 0; i < distributedNodes.length; i++) {
                  composedTreeWalk(distributedNodes[i], callback);
                }

                return;
              } // If it is a <slot> element, descend into assigned nodes - these
              // are elements from outside the shadow root which are rendered inside the
              // shadow DOM.


              if (element.localName == 'slot') {
                var slot =
                /** @type {!HTMLSlotElement} */
                element; // Verify if ShadowDom v1 is supported.

                var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({
                  flatten: true
                }) : [];

                for (var _i = 0; _i < _distributedNodes.length; _i++) {
                  composedTreeWalk(_distributedNodes[_i], callback);
                }

                return;
              }
            } // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
            // element, nor a <shadow> element recurse normally.


            var child = node.firstChild;

            while (child != null) {
              composedTreeWalk(child, callback);
              child = child.nextSibling;
            }
          }
          /**
           * Adds a style element to the node containing the inert specific styles
           * @param {!Node} node
           */


          function addInertStyle(node) {
            if (node.querySelector('style#inert-style, link#inert-style')) {
              return;
            }

            var style = document.createElement('style');
            style.setAttribute('id', 'inert-style');
            style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
            node.appendChild(style);
          }

          if (!Element.prototype.hasOwnProperty('inert')) {
            /** @type {!InertManager} */
            var inertManager = new InertManager(document);
            Object.defineProperty(Element.prototype, 'inert', {
              enumerable: true,

              /** @this {!Element} */
              get: function get() {
                return this.hasAttribute('inert');
              },

              /** @this {!Element} */
              set: function set(inert) {
                inertManager.setInert(this, inert);
              }
            });
          }
        })();
      });
    });

    /**
     * @license
     * Copyright 2016 Google Inc. All rights reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    (() => {
      var _a, _b, _c;
      /* Symbols for private properties */


      const _blockingElements = Symbol();

      const _alreadyInertElements = Symbol();

      const _topElParents = Symbol();

      const _siblingsToRestore = Symbol();

      const _parentMO = Symbol();
      /* Symbols for private static methods */


      const _topChanged = Symbol();

      const _swapInertedSibling = Symbol();

      const _inertSiblings = Symbol();

      const _restoreInertedSiblings = Symbol();

      const _getParents = Symbol();

      const _getDistributedChildren = Symbol();

      const _isInertable = Symbol();

      const _handleMutations = Symbol();

      class BlockingElementsImpl {
        constructor() {
          /**
           * The blocking elements.
           */
          this[_a] = [];
          /**
           * Used to keep track of the parents of the top element, from the element
           * itself up to body. When top changes, the old top might have been removed
           * from the document, so we need to memoize the inerted parents' siblings
           * in order to restore their inerteness when top changes.
           */

          this[_b] = [];
          /**
           * Elements that are already inert before the first blocking element is
           * pushed.
           */

          this[_c] = new Set();
        }

        destructor() {
          // Restore original inertness.
          this[_restoreInertedSiblings](this[_topElParents]); // Note we don't want to make these properties nullable on the class,
          // since then we'd need non-null casts in many places. Calling a method on
          // a BlockingElements instance after calling destructor will result in an
          // exception.


          const nullable = this;
          nullable[_blockingElements] = null;
          nullable[_topElParents] = null;
          nullable[_alreadyInertElements] = null;
        }

        get top() {
          const elems = this[_blockingElements];
          return elems[elems.length - 1] || null;
        }

        push(element) {
          if (!element || element === this.top) {
            return;
          } // Remove it from the stack, we'll bring it to the top.


          this.remove(element);

          this[_topChanged](element);

          this[_blockingElements].push(element);
        }

        remove(element) {
          const i = this[_blockingElements].indexOf(element);

          if (i === -1) {
            return false;
          }

          this[_blockingElements].splice(i, 1); // Top changed only if the removed element was the top element.


          if (i === this[_blockingElements].length) {
            this[_topChanged](this.top);
          }

          return true;
        }

        pop() {
          const top = this.top;
          top && this.remove(top);
          return top;
        }

        has(element) {
          return this[_blockingElements].indexOf(element) !== -1;
        }
        /**
         * Sets `inert` to all document elements except the new top element, its
         * parents, and its distributed content.
         */


        [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
          const toKeepInert = this[_alreadyInertElements];
          const oldParents = this[_topElParents]; // No new top, reset old top if any.

          if (!newTop) {
            this[_restoreInertedSiblings](oldParents);

            toKeepInert.clear();
            this[_topElParents] = [];
            return;
          }

          const newParents = this[_getParents](newTop); // New top is not contained in the main document!


          if (newParents[newParents.length - 1].parentNode !== document.body) {
            throw Error('Non-connected element cannot be a blocking element');
          } // Cast here because we know we'll call _inertSiblings on newParents
          // below.


          this[_topElParents] = newParents;

          const toSkip = this[_getDistributedChildren](newTop); // No previous top element.


          if (!oldParents.length) {
            this[_inertSiblings](newParents, toSkip, toKeepInert);

            return;
          }

          let i = oldParents.length - 1;
          let j = newParents.length - 1; // Find common parent. Index 0 is the element itself (so stop before it).

          while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
            i--;
            j--;
          } // If up the parents tree there are 2 elements that are siblings, swap
          // the inerted sibling.


          if (oldParents[i] !== newParents[j]) {
            this[_swapInertedSibling](oldParents[i], newParents[j]);
          } // Restore old parents siblings inertness.


          i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i)); // Make new parents siblings inert.

          j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
        }
        /**
         * Swaps inertness between two sibling elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */


        [_swapInertedSibling](oldInert, newInert) {
          const siblingsToRestore = oldInert[_siblingsToRestore]; // oldInert is not contained in siblings to restore, so we have to check
          // if it's inertable and if already inert.

          if (this[_isInertable](oldInert) && !oldInert.inert) {
            oldInert.inert = true;
            siblingsToRestore.add(oldInert);
          } // If newInert was already between the siblings to restore, it means it is
          // inertable and must be restored.


          if (siblingsToRestore.has(newInert)) {
            newInert.inert = false;
            siblingsToRestore.delete(newInert);
          }

          newInert[_parentMO] = oldInert[_parentMO];
          newInert[_siblingsToRestore] = siblingsToRestore;
          oldInert[_parentMO] = undefined;
          oldInert[_siblingsToRestore] = undefined;
        }
        /**
         * Restores original inertness to the siblings of the elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */


        [_restoreInertedSiblings](elements) {
          for (const element of elements) {
            const mo = element[_parentMO];
            mo.disconnect();
            element[_parentMO] = undefined;
            const siblings = element[_siblingsToRestore];

            for (const sibling of siblings) {
              sibling.inert = false;
            }

            element[_siblingsToRestore] = undefined;
          }
        }
        /**
         * Inerts the siblings of the elements except the elements to skip. Stores
         * the inerted siblings into the element's symbol `_siblingsToRestore`.
         * Pass `toKeepInert` to collect the already inert elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */


        [_inertSiblings](elements, toSkip, toKeepInert) {
          for (const element of elements) {
            // Assume element is not a Document, so it must have a parentNode.
            const parent = element.parentNode;
            const children = parent.children;
            const inertedSiblings = new Set();

            for (let j = 0; j < children.length; j++) {
              const sibling = children[j]; // Skip the input element, if not inertable or to be skipped.

              if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
                continue;
              } // Should be collected since already inerted.


              if (toKeepInert && sibling.inert) {
                toKeepInert.add(sibling);
              } else {
                sibling.inert = true;
                inertedSiblings.add(sibling);
              }
            } // Store the siblings that were inerted.


            element[_siblingsToRestore] = inertedSiblings; // Observe only immediate children mutations on the parent.

            const mo = new MutationObserver(this[_handleMutations].bind(this));
            element[_parentMO] = mo;
            let parentToObserve = parent; // If we're using the ShadyDOM polyfill, then our parent could be a
            // shady root, which is an object that acts like a ShadowRoot, but isn't
            // actually a node in the real DOM. Observe the real DOM parent instead.

            const maybeShadyRoot = parentToObserve;

            if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
              parentToObserve = maybeShadyRoot.host;
            }

            mo.observe(parentToObserve, {
              childList: true
            });
          }
        }
        /**
         * Handles newly added/removed nodes by toggling their inertness.
         * It also checks if the current top Blocking Element has been removed,
         * notifying and removing it.
         */


        [_handleMutations](mutations) {
          const parents = this[_topElParents];
          const toKeepInert = this[_alreadyInertElements];

          for (const mutation of mutations) {
            // If the target is a shadowRoot, get its host as we skip shadowRoots when
            // computing _topElParents.
            const target = mutation.target.host || mutation.target;
            const idx = target === document.body ? parents.length : parents.indexOf(target);
            const inertedChild = parents[idx - 1];
            const inertedSiblings = inertedChild[_siblingsToRestore]; // To restore.

            for (let i = 0; i < mutation.removedNodes.length; i++) {
              const sibling = mutation.removedNodes[i];

              if (sibling === inertedChild) {
                console.info('Detected removal of the top Blocking Element.');
                this.pop();
                return;
              }

              if (inertedSiblings.has(sibling)) {
                sibling.inert = false;
                inertedSiblings.delete(sibling);
              }
            } // To inert.


            for (let i = 0; i < mutation.addedNodes.length; i++) {
              const sibling = mutation.addedNodes[i];

              if (!this[_isInertable](sibling)) {
                continue;
              }

              if (toKeepInert && sibling.inert) {
                toKeepInert.add(sibling);
              } else {
                sibling.inert = true;
                inertedSiblings.add(sibling);
              }
            }
          }
        }
        /**
         * Returns if the element is inertable.
         */


        [_isInertable](element) {
          return false === /^(style|template|script)$/.test(element.localName);
        }
        /**
         * Returns the list of newParents of an element, starting from element
         * (included) up to `document.body` (excluded).
         */


        [_getParents](element) {
          const parents = [];
          let current = element; // Stop to body.

          while (current && current !== document.body) {
            // Skip shadow roots.
            if (current.nodeType === Node.ELEMENT_NODE) {
              parents.push(current);
            } // ShadowDom v1


            if (current.assignedSlot) {
              // Collect slots from deepest slot to top.
              while (current = current.assignedSlot) {
                parents.push(current);
              } // Continue the search on the top slot.


              current = parents.pop();
              continue;
            }

            current = current.parentNode || current.host;
          }

          return parents;
        }
        /**
         * Returns the distributed children of the element's shadow root.
         * Returns null if the element doesn't have a shadow root.
         */


        [_getDistributedChildren](element) {
          const shadowRoot = element.shadowRoot;

          if (!shadowRoot) {
            return null;
          }

          const result = new Set();
          let i;
          let j;
          let nodes;
          const slots = shadowRoot.querySelectorAll('slot');

          if (slots.length && slots[0].assignedNodes) {
            for (i = 0; i < slots.length; i++) {
              nodes = slots[i].assignedNodes({
                flatten: true
              });

              for (j = 0; j < nodes.length; j++) {
                if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                  result.add(nodes[j]);
                }
              }
            } // No need to search for <content>.

          }

          return result;
        }

      }

      document.$blockingElements = new BlockingElementsImpl();
    })();

    const blockingElements = document.$blockingElements;
    /**
     * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
     *
     * Automatically handles consecutive calls with a loosely applied stack operation
     * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
     * it'll take to find its way into the spec, if ever)
     * @param target
     */

    function useBlockingElement(target) {
      /**
       * Push/pop the element from the blockingElements stack.
       */
      h(() => {
        if (target) {
          // Sometimes blockingElements will fail if, for example,
          // the target element isn't connected to document.body.
          // This is rare, but it's better to fail silently with weird tabbing behavior
          // than to crash the entire application.
          try {
            blockingElements.push(target);
            return () => {
              blockingElements.remove(target);
            };
          } catch (ex) {
            // Well, semi-silently.
            console.error(ex);
          }
        }
      }, [target]);
    }
    function getTopElement() {
      return blockingElements.top;
    }

    const elementsToRestoreFocusTo = new Map();
    function useFocusTrap(_ref) {
      let {
        trapActive
      } = _ref;
      const [element, setElement] = useState(null);
      const {
        useRefElementProps,
        getElement
      } = useRefElement({
        onElementChange: setElement
      }); //const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState<Node | null>(null);

      const {
        getActiveElement,
        getLastActiveElement,
        getWindowFocused,
        useActiveElementProps
      } = useActiveElement({}); // When the trap becomes active, before we let the blockingElements hook run,
      // keep track of whatever's currently focused and save it.

      h(() => {
        if (trapActive && element) {
          var _getLastActiveElement;

          const document = element.ownerDocument;
          document.defaultView; // Save the currently focused element
          // to whatever's currently at the top of the stack

          elementsToRestoreFocusTo.set(getTopElement(), (_getLastActiveElement = getLastActiveElement()) !== null && _getLastActiveElement !== void 0 ? _getLastActiveElement : document.body);
        }
      }, [trapActive, element]);
      useBlockingElement(trapActive ? element : null);
      /**
       * Any time we activate or deactivate the trap,
       * change focus to something else (something in
       * the trap if it's active, or whatever we've
       * tracked in elementsToRestoreFocusTo if not)
       */

      h(() => {
        if (trapActive && element) {
          let rafHandle = requestAnimationFrame(() => {
            // TODO: This extra queueMicrotask is needed for
            // ...reasons?
            queueMicrotask(() => {
              var _findFirstFocusable;

              (_findFirstFocusable = findFirstFocusable(element)) === null || _findFirstFocusable === void 0 ? void 0 : _findFirstFocusable.focus();
              rafHandle = 0;
            });
          });
          return () => {
            if (rafHandle) cancelAnimationFrame(rafHandle);
          };
        } else if (element) {
          // Restore the focus to the element
          // that has returned to the top of the stack
          let rafHandle = requestAnimationFrame(() => {
            queueMicrotask(() => {
              var _elementsToRestoreFoc;

              (_elementsToRestoreFoc = elementsToRestoreFocusTo.get(getTopElement())) === null || _elementsToRestoreFoc === void 0 ? void 0 : _elementsToRestoreFoc.focus();
              rafHandle = 0;
            });
          });
          return () => {
            if (rafHandle) cancelAnimationFrame(rafHandle);
          };
        }
      }, [trapActive, element]);

      const useFocusTrapProps = props => {
        return useMergedProps()({
          "aria-modal": trapActive ? "true" : undefined
        }, useRefElementProps(useActiveElementProps(props)));
      };

      return {
        useFocusTrapProps,
        getElement
      };
    }
    /**
     * Returns the first focusable element contained within the given node, or null if none are found.
     * @param element
     * @returns
     */

    function findFirstFocusable(element) {
      const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
        acceptNode: node => node instanceof Element && isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      });
      const firstFocusable = treeWalker.firstChild();
      return firstFocusable;
    }

    function S(n, t) {
      for (var e in t) n[e] = t[e];

      return n;
    }

    function C(n, t) {
      for (var e in n) if ("__source" !== e && !(e in t)) return !0;

      for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

      return !1;
    }

    function E(n) {
      this.props = n;
    }

    function g(n, t) {
      function e(n) {
        var e = this.props.ref,
            r = e == n.ref;
        return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : C(this.props, n);
      }

      function r(t) {
        return this.shouldComponentUpdate = e, v$1(n, t);
      }

      return r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
    }

    (E.prototype = new _()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
      return C(this.props, n) || C(this.state, t);
    };
    var w = l$1.__b;

    l$1.__b = function (n) {
      n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), w && w(n);
    };

    var A = l$1.__e;

    l$1.__e = function (n, t, e) {
      if (n.then) for (var r, u = t; u = u.__;) if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
      A(n, t, e);
    };

    var O = l$1.unmount;

    function L() {
      this.__u = 0, this.t = null, this.__b = null;
    }

    function U(n) {
      var t = n.__.__c;
      return t && t.__e && t.__e(n);
    }

    function M() {
      this.u = null, this.o = null;
    }

    l$1.unmount = function (n) {
      var t = n.__c;
      t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
    }, (L.prototype = new _()).__c = function (n, t) {
      var e = t.__c,
          r = this;
      null == r.t && (r.t = []), r.t.push(e);

      var u = U(r.__v),
          o = !1,
          i = function () {
        o || (o = !0, e.__R = null, u ? u(l) : l());
      };

      e.__R = i;

      var l = function () {
        if (! --r.__u) {
          if (r.state.__e) {
            var n = r.state.__e;

            r.__v.__k[0] = function n(t, e, r) {
              return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
                return n(t, e, r);
              }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
            }(n, n.__c.__P, n.__c.__O);
          }

          var t;

          for (r.setState({
            __e: r.__b = null
          }); t = r.t.pop();) t.forceUpdate();
        }
      },
          c = !0 === t.__h;

      r.__u++ || c || r.setState({
        __e: r.__b = r.__v.__k[0]
      }), n.then(i, i);
    }, L.prototype.componentWillUnmount = function () {
      this.t = [];
    }, L.prototype.render = function (n, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var e = document.createElement("div"),
              r = this.__v.__k[0].__c;

          this.__v.__k[0] = function n(t, e, r) {
            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
              "function" == typeof n.__c && n.__c();
            }), t.__c.__H = null), null != (t = S({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
              return n(t, e, r);
            })), t;
          }(this.__b, e, r.__O = r.__P);
        }

        this.__b = null;
      }

      var u = t.__e && v$1(d, null, n.fallback);
      return u && (u.__h = null), [v$1(d, null, t.__e ? null : n.children), u];
    };

    var T = function (n, t, e) {
      if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
        for (; e.length > 3;) e.pop()();

        if (e[1] < e[0]) break;
        n.u = e = e[2];
      }
    };

    (M.prototype = new _()).__e = function (n) {
      var t = this,
          e = U(t.__v),
          r = t.o.get(n);
      return r[0]++, function (u) {
        var o = function () {
          t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
        };

        e ? e(o) : o();
      };
    }, M.prototype.render = function (n) {
      this.u = null, this.o = new Map();
      var t = A$2(n.children);
      n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

      for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);

      return n.children;
    }, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function () {
      var n = this;
      this.o.forEach(function (t, e) {
        T(n, e, t);
      });
    };

    var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        V = "undefined" != typeof document,
        z = function (n) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
    };

    _.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
      Object.defineProperty(_.prototype, n, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + n];
        },
        set: function (t) {
          Object.defineProperty(this, n, {
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    });
    var Z = l$1.event;

    function Y() {}

    function $() {
      return this.cancelBubble;
    }

    function q() {
      return this.defaultPrevented;
    }

    l$1.event = function (n) {
      return Z && (n = Z(n)), n.persist = Y, n.isPropagationStopped = $, n.isDefaultPrevented = q, n.nativeEvent = n;
    };

    var J = {
      configurable: !0,
      get: function () {
        return this.class;
      }
    },
        K = l$1.vnode;

    l$1.vnode = function (n) {
      var t = n.type,
          e = n.props,
          r = e;

      if ("string" == typeof t) {
        var u = -1 === t.indexOf("-");

        for (var o in r = {}, e) {
          var i = e[o];
          V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !z(e.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
        }

        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = A$2(e.children).forEach(function (n) {
          n.props.selected = -1 != r.value.indexOf(n.props.value);
        })), "select" == t && null != r.defaultValue && (r.value = A$2(e.children).forEach(function (n) {
          n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
        })), n.props = r;
      }

      t && e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J)), n.$$typeof = j, K && K(n);
    };

    var Q = l$1.__r;

    l$1.__r = function (n) {
      Q && Q(n);
    };

    const EventDetail = Symbol("event-detail");
    function enhanceEvent(e, detail) {
      let event = e;
      event[EventDetail] = detail;
      return event;
    }

    let pulse = "vibrate" in navigator ? () => navigator.vibrate(10) : () => {};

    function excludes(target, exclude) {
      if (exclude !== null && exclude !== void 0 && exclude[target]) return true;
      return false;
    }
    /**
     * selection.containsNode doesn't account for selection.isCollapsed,
     * so here's a workaround for that.
     *
     * @param element
     * @returns
     */


    function nodeHasSelectedText(element) {
      if (element && element instanceof Node) {
        const selection = window.getSelection();

        if (selection !== null && selection !== void 0 && selection.containsNode(element, true) && !selection.isCollapsed) {
          return true;
        }
      }

      return false;
    }
    /**
     * Adds the necessary event handlers to create a "press"-like event for
     * buttons and anything else that's "click/tap/press/touch"-able.
     *
     * Notably, the following cases are covered:
     * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
     * * Double-clicks won't select text.
     * * Conversely, manually selecting text won't invoke a press.
     * * Keyboard events &mdash; `enter` immediately invokes the handler, while `space` invokes it on keyup.
     * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
     *
     * In addition, when the CSS `:active` pseudo-class would apply to a normal button
     * (i.e. when holding the spacebar or during mousedown), `{ "data-pseudo-active": "true" }`
     * is added to the props.  You can either let it pass through and style it through new CSS,
     * or inspect the returned props for it and add e.g. an `.active` class for existing CSS
     *
     * @param onClickSync
     * @param exclude Whether the polyfill shouldn't apply (can specify for specific interactions)
     */


    function usePressEventHandlers(onClickSync, exclude) {
      const {
        useRefElementProps,
        getElement
      } = useRefElement({}); // A button can be activated in multiple ways, so on the off chance
      // that multiple are triggered at once, we only *actually* register
      // a press once all of our "on" signals have turned back to "off".
      // We approximate this by just incrementing when active, and
      // decrementing when deactivated.
      //
      // As an emergency failsafe, when the element looses focus,
      // this is reset back to 0.

      const [active, setActive, getActive] = useState(0); // If we the current text selection changes to include this element
      // DURING e.g. a mousedown, then we don't want the mouseup to "count", as it were,
      // because its only purpose was selecting text, not clicking buttons.
      //
      // To catch this, any time the text selection includes us while in the middle
      // of a click, this flag is set, which cancels the activation of a press.
      // The flag is reset any time the selection is empty or the button is
      // no longer active.

      const [textSelectedDuringActivation, setTextSelectedDuringActivation] = useState(false);
      useGlobalHandler(document, "selectionchange", e => {
        setTextSelectedDuringActivation(active == 0 ? false : nodeHasSelectedText(getElement()));
      });
      useEffect(() => {
        if (active == 0) setTextSelectedDuringActivation(false);
      }, [active == 0]);
      const onActiveStart = useStableCallback(e => {
        setActive(a => ++a);
      });
      const onActiveStop = useStableCallback(e => {
        setActive(a => Math.max(0, --a));

        if (textSelectedDuringActivation) {
          e.preventDefault();
          return;
        }

        if (getActive() <= 0) {
          handlePress(e);
        }
      });
      const handlePress = useStableCallback(e => {
        if (onClickSync) {
          // Note: The element is focused here because of iOS Safari.
          //
          // It's always iOS Safari.
          //
          // iOS Safari (tested on 12) downright refuses to allow 
          // elements to be manually focused UNLESS it happens within
          // an event handler like this.  It also doesn't focus
          // buttons by default when clicked, tapped, etc.
          //
          // If it becomes problematic that button-likes explicitly become
          // focused when they are pressed, then an alternative solution for
          // the question of "how do menu buttons keep their menus open"
          // and other focus-related nonsense needs to be figured out.
          //
          // For iOS Safari.
          //
          const element = getElement();
          if (element && "focus" in element) element === null || element === void 0 ? void 0 : element.focus(); // Whatever the browser was going to do with this event,
          // forget it. We're turning it into a "press" event.

          e.preventDefault(); // Also stop anyone else from listening to this event,
          // since we're explicitly handling it.
          // (Notably, this allows labels to wrap inputs, with them
          // both having press event handlers, without double-firing)

          e.stopPropagation(); // Haptic feedback for this press event

          pulse(); // Actually call our handler.

          onClickSync(e);
        }
      });
      const onMouseDown = excludes("click", exclude) ? undefined : e => {
        // Stop double clicks from selecting text in an component that's *supposed* to be acting like a button,
        // but also don't prevent the user from selecting that text manually if they really want to
        // (which user-select: none would do, but cancelling a double click on mouseDown doesn't)
        if (e.detail > 1) e.preventDefault();
        if (e.button === 0) onActiveStart(e);
      };
      const onMouseUp = excludes("click", exclude) ? undefined : e => {
        if (e.button === 0 && active > 0) onActiveStop(e);
      };

      const onBlur = e => {
        setActive(0);
      };

      const onMouseOut = excludes("click", exclude) ? undefined : onBlur;
      const onKeyDown = excludes("space", exclude) && excludes("enter", exclude) ? undefined : e => {
        if (e.key == " " && onClickSync && !excludes("space", exclude)) {
          // We don't actually activate it on a space keydown
          // but we do preventDefault to stop the page from scrolling.
          onActiveStart(e);
          e.preventDefault();
        }

        if (e.key == "Enter" && !excludes("enter", exclude)) {
          e.preventDefault();
          onActiveStart(e);
          onActiveStop(e);
        }
      };
      const onKeyUp = excludes("space", exclude) ? undefined : e => {
        if (e.key == " " && !excludes("space", exclude)) onActiveStop(e);
      };

      const onClick = e => {
        e.preventDefault();

        if (e.detail > 1) {
          e.stopImmediatePropagation();
          e.stopPropagation();
        }
      };

      return props => useRefElementProps(useMergedProps()({
        onKeyDown,
        onKeyUp,
        onBlur,
        onMouseDown,
        onMouseUp,
        onMouseOut,
        onClick,
        ...{
          "data-pseudo-active": active ? "true" : undefined
        }
      }, props));
    }

    function useAriaAccordion(_ref) {
      let {
        expandedIndex,
        setExpandedIndex
      } = _ref;
      const [lastFocusedIndex, setLastFocusedIndex, getLastFocusedIndex] = useState(null);
      const [currentFocusedIndex, setCurrentFocusedIndex, getCurrentFocusedIndex] = useState(null);
      const stableSetExpandedIndex = useStableCallback(setExpandedIndex !== null && setExpandedIndex !== void 0 ? setExpandedIndex : () => {});
      const {
        managedChildren: managedAccordionSections,
        useManagedChild: useManagedChildSection
      } = useChildManager();
      const navigateToFirst = F(() => {
        setLastFocusedIndex(0);
      }, []);
      const navigateToLast = F(() => {
        setLastFocusedIndex(managedAccordionSections.length - 1);
      }, []);
      const navigateToPrev = F(() => {
        setLastFocusedIndex(i => (i !== null && i !== void 0 ? i : 0) - 1);
      }, []);
      const navigateToNext = F(() => {
        setLastFocusedIndex(i => (i !== null && i !== void 0 ? i : 0) + 1);
      }, []);
      const {
        useLinearNavigationProps
      } = useLinearNavigation({
        managedChildren: managedAccordionSections,
        navigationDirection: "block",
        index: lastFocusedIndex !== null && lastFocusedIndex !== void 0 ? lastFocusedIndex : 0,
        navigateToFirst,
        navigateToLast,
        navigateToPrev,
        navigateToNext
      });
      useChildFlag({
        activatedIndex: expandedIndex,
        managedChildren: managedAccordionSections,
        setChildFlag: (i, open) => {
          var _managedAccordionSect;

          return (_managedAccordionSect = managedAccordionSections[i]) === null || _managedAccordionSect === void 0 ? void 0 : _managedAccordionSect.setOpenFromParent(open);
        },
        getChildFlag: i => {
          var _managedAccordionSect2, _managedAccordionSect3;

          return (_managedAccordionSect2 = (_managedAccordionSect3 = managedAccordionSections[i]) === null || _managedAccordionSect3 === void 0 ? void 0 : _managedAccordionSect3.getOpenFromParent()) !== null && _managedAccordionSect2 !== void 0 ? _managedAccordionSect2 : null;
        }
      });
      useChildFlag({
        activatedIndex: lastFocusedIndex,
        managedChildren: managedAccordionSections,
        setChildFlag: (i, open) => open && managedAccordionSections[i].focus(),
        getChildFlag: i => false
      });
      const useAriaAccordionSection = F(args => {
        var _ref2, _args$open;

        const index = args.index;
        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
        const {
          randomId: bodyRandomId,
          useRandomIdProps: useBodyRandomIdProps,
          useReferencedIdProps: useReferencedBodyIdProps
        } = useRandomId({
          prefix: "aria-accordion-section-body-"
        });
        const {
          randomId: headRandomId,
          useRandomIdProps: useHeadRandomIdProps,
          useReferencedIdProps: useReferencedHeadIdProps
        } = useRandomId({
          prefix: "aria-accordion-section-header-"
        });
        let open = (_ref2 = (_args$open = args.open) !== null && _args$open !== void 0 ? _args$open : openFromParent) !== null && _ref2 !== void 0 ? _ref2 : null; // TODO: Convert to use useManagedChild so that this hook 
        // is stable without (directly) depending on the open state.

        const useAriaAccordionSectionHeader = F(function useAriaAccordionSectionHeader(_ref3) {
          const {
            getElement,
            useHasFocusProps,
            getFocusedInner
          } = useHasFocus({
            onFocusedChanged: F(focused => {
              if (focused) setCurrentFocusedIndex(index);else setCurrentFocusedIndex(oldIndex => oldIndex === index ? null : index);
            }, [])
          });
          const focus = F(() => {
            var _getElement;

            if (getCurrentFocusedIndex() != null) (_getElement = getElement()) === null || _getElement === void 0 ? void 0 : _getElement.focus();
          }, []);
          const {
            useManagedChildProps
          } = useManagedChildSection({
            index,
            open,
            setOpenFromParent,
            getOpenFromParent,
            focus
          });

          function useAriaAccordionSectionHeaderProps(_ref4) {
            let {
              ["aria-expanded"]: ariaExpanded,
              ["aria-disabled"]: ariaDisabled,
              ...props
            } = _ref4;

            const onFocus = () => {
              setLastFocusedIndex(args.index);
            };

            let onClick = () => {
              if (getOpenFromParent()) stableSetExpandedIndex(null);else stableSetExpandedIndex(args.index);
            };

            let retB = useMergedProps()({
              tabIndex: 0
            }, usePressEventHandlers(onClick, undefined)(props));
            let ret3 = useMergedProps()(useHeadRandomIdProps(useReferencedBodyIdProps("aria-controls")({
              "aria-expanded": ariaExpanded !== null && ariaExpanded !== void 0 ? ariaExpanded : (!!open).toString(),
              "aria-disabled": ariaDisabled !== null && ariaDisabled !== void 0 ? ariaDisabled : open ? "true" : undefined,
              ...useHasFocusProps(useManagedChildProps(retB))
            })), {
              onFocus
            });
            return useLinearNavigationProps(ret3);
          }
          return {
            useAriaAccordionSectionHeaderProps
          };
        }, [useLinearNavigationProps, index, open]);
        const useAriaAccordionSectionBody = F(function useAriaAccordionSectionBody() {
          function useAriaAccordionSectionBodyProps(_ref5) {
            let {
              role,
              ...props
            } = _ref5;
            let ret1 = useReferencedHeadIdProps("aria-labelledby")({
              role: role !== null && role !== void 0 ? role : "region",
              ...props
            });
            let ret2 = useBodyRandomIdProps(ret1);
            return ret2;
          }
          return {
            useAriaAccordionSectionBodyProps
          };
        }, []);
        return {
          expanded: open,
          useAriaAccordionSectionHeader,
          useAriaAccordionSectionBody
        };
      }, [useLinearNavigationProps]);
      return {
        useAriaAccordionSection,
        managedChildren: managedAccordionSections
      };
    }

    /**
     * Adds an ID and "aria-labelledby" for two elements, an "input" element and a "label" element.
     *
     * Returns the `useReferencedIdProps` hooks if you need to also add other ID-referencing attributes, like `for`
     *
     * @see useInputLabel
     */

    function useGenericLabel() {
      let {
        labelPrefix,
        inputPrefix,
        backupText
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        labelPrefix: "label-",
        inputPrefix: "input-"
      };
      const [labelElement, setLabelElement] = l(null);
      const [inputElement, setInputElement] = l(null);
      const {
        getElement: getLabelElement,
        useRefElementProps: useLabelRefElementProps
      } = useRefElement({
        onElementChange: setLabelElement
      });
      const {
        getElement: getInputElement,
        useRefElementProps: useInputRefElementProps
      } = useRefElement({
        onElementChange: setInputElement
      });
      const {
        useRandomIdProps: useLabelRandomIdProps,
        id: labelId,
        randomId: labelRandomId,
        useReferencedIdProps: useReferencedLabelIdProps
      } = useRandomId({
        prefix: labelPrefix
      });
      const {
        useRandomIdProps: useInputRandomIdProps,
        id: inputId,
        randomId: inputRandomId,
        useReferencedIdProps: useReferencedInputIdProps
      } = useRandomId({
        prefix: inputPrefix
      });
      const labelHasMounted = !!labelElement;
      const useGenericLabelLabel = F(function useGenericLabelLabel() {
        return {
          useGenericLabelLabelProps: props => {
            return useLabelRandomIdProps(useLabelRefElementProps(props));
          }
        };
      }, []);
      const useGenericLabelInput = F(function useGenericLabelInput() {
        return {
          useGenericLabelInputProps: _ref => {
            var _ref2;

            let {
              "aria-labelledby": ariaLabelledby,
              "aria-label": ariaLabel,
              ...props
            } = _ref;
            return useInputRandomIdProps(useReferencedLabelIdProps("aria-labelledby")(useInputRefElementProps(useMergedProps()({
              "aria-label": (_ref2 = !labelHasMounted ? backupText : ariaLabel) !== null && _ref2 !== void 0 ? _ref2 : ariaLabel
            }, props))));
          }
        };
      }, [labelHasMounted]);
      return {
        useGenericLabelInput,
        useGenericLabelLabel,
        useReferencedLabelIdProps,
        useReferencedInputIdProps,
        labelId,
        inputId,
        labelElement,
        inputElement,
        getLabelElement,
        getInputElement
      };
    }
    /**
     * Handles the attributes `id`, `for`, and `aria-labelledby` for to related elements.
     *
     * It's assumed that the label is an `HTMLLabelElement`, and the input is something for which
     * the `for` attribute can reference.
     *
     */

    function useInputLabel() {
      let {
        labelPrefix,
        inputPrefix
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        labelPrefix: "label-",
        inputPrefix: "input-"
      };
      const {
        useGenericLabelInput,
        useGenericLabelLabel,
        useReferencedInputIdProps,
        useReferencedLabelIdProps,
        inputId,
        labelId,
        inputElement,
        getInputElement,
        labelElement,
        getLabelElement
      } = useGenericLabel({
        labelPrefix,
        inputPrefix
      });
      const useInputLabelLabel = F(function useInputLabelLabel(_ref3) {
        let {
          tag
        } = _ref3;
        const {
          useGenericLabelLabelProps
        } = useGenericLabelLabel();
        return {
          useInputLabelLabelProps(props) {
            const withFor = useReferencedInputIdProps("for")(props);
            const withoutFor = props;
            return useGenericLabelLabelProps(tag == "label" ? withFor : withoutFor);
          }

        };
      }, [useGenericLabelInput]);
      const useInputLabelInput = F(function useInputLabelInput() {
        const {
          useGenericLabelInputProps
        } = useGenericLabelInput();
        return {
          useInputLabelInputProps(props) {
            return useGenericLabelInputProps(props);
          }

        };
      }, [useGenericLabelLabel]);
      return {
        useInputLabelLabel,
        useInputLabelInput,
        labelId,
        inputId,
        inputElement,
        labelElement,
        getInputElement,
        getLabelElement
      };
    }

    const handlesInput = (tag, labelPosition, which) => {
      if (labelPosition === "separate") {
        if (which === "input-element") return true;else if (which === "label-element") return tag != "input";
      } else if (labelPosition === "wrapping") {
        if (which === "input-element") return false;
        if (which == "label-element") return true;
      }
    };
    /**
     * Handles label type (wrapping or separate) for checkboxes, radios, switches, etc.
     * @param param0
     * @returns
     */


    function useCheckboxLike(_ref4) {
      let {
        checked,
        disabled,
        labelPosition,
        onInput,
        role
      } = _ref4;
      const stableOnInput = useStableCallback(e => {
        e.preventDefault();
        onInput === null || onInput === void 0 ? void 0 : onInput(e);
      });
      const {
        inputId,
        labelId,
        useInputLabelInput: useILInput,
        useInputLabelLabel: useILLabel,
        getLabelElement,
        getInputElement
      } = useInputLabel({
        labelPrefix: "aria-checkbox-label-",
        inputPrefix: "aria-checkbox-input-"
      });
      const useCheckboxLikeInputElement = F(function useCheckboxInputElement(_ref5) {
        let {
          tag
        } = _ref5;
        const {
          useInputLabelInputProps: useILInputProps
        } = useILInput();
        const {
          useRefElementProps,
          getElement
        } = useRefElement({}); // onClick and onChange are a bit messy, so we need to
        // *always* make sure that the visible state is correct
        // after all the event dust settles.
        // See https://github.com/preactjs/preact/issues/2745,
        // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194

        y(() => {
          const element = getElement();

          if (element && tag == "input") {
            element.checked = checked;
          }
        }, [tag, checked]);
        return {
          getInputElement: getElement,
          useCheckboxLikeInputElementProps
        };

        function useCheckboxLikeInputElementProps(_ref6) {
          let { ...p0
          } = _ref6;
          // For some reason, Chrome won't fire onInput events for radio buttons that are tabIndex=-1??
          // Needs investigating, but onInput works fine in Firefox
          // TODO
          let props = usePressEventHandlers(disabled || !handlesInput(tag, labelPosition, "input-element") ? undefined : stableOnInput, undefined)({});
          if (tag == "input") props.onInput = e => e.preventDefault();
          props = useRefElementProps(useILInputProps(props));

          if (labelPosition == "wrapping") {
            // Because the wrapped label handles all interactions,
            // we need to make sure this element can't be interacted with
            // even if it's an input element.
            props.inert = true;
            props.tabIndex = -1;

            props.onFocus = e => getLabelElement().focus();
          } else {
            if (tag === "input") {
              props.checked = checked;
            } else {
              props.role = role;
              props.tabIndex = 0;
              props["aria-checked"] = checked ? "true" : undefined;
            }

            props["aria-disabled"] = disabled.toString();
          } // Make sure that label clicks can't affect the checkbox while it's disabled


          props.onClick = disabled ? e => {
            e.preventDefault();
          } : props.onClick;
          return useMergedProps()(p0, props);
        }
      }, [useILInput, role, labelPosition, disabled, checked]);
      const useCheckboxLikeLabelElement = F(function useCheckboxLabelElement(_ref7) {
        let {
          tag
        } = _ref7;
        const {
          useInputLabelLabelProps: useILLabelProps
        } = useILLabel({
          tag
        });

        function useCheckboxLikeLabelElementProps(_ref8) {
          let { ...p0
          } = _ref8;
          let newProps = usePressEventHandlers(disabled || !handlesInput(tag, labelPosition, "label-element") ? undefined : stableOnInput, undefined)({});

          if (labelPosition == "wrapping") {
            newProps.tabIndex = 0;
            newProps.role = role;
            newProps["aria-disabled"] = disabled.toString();
            newProps["aria-checked"] = checked.toString();
          } // Just make sure that label clicks can't affect the checkbox while it's disabled


          newProps.onClick = disabled ? e => {
            e.preventDefault();
          } : newProps.onClick;
          return useMergedProps()(newProps, useILLabelProps(p0));
        }

        return {
          useCheckboxLikeLabelElementProps
        };
      }, [useILLabel, disabled, checked, role, labelPosition]);
      return {
        useCheckboxLikeInputElement,
        useCheckboxLikeLabelElement,
        getLabelElement,
        getInputElement
      };
    }

    function useAriaCheckbox(_ref) {
      let {
        labelPosition,
        checked,
        onInput,
        disabled
      } = _ref;

      const onInputEnhanced = e => onInput === null || onInput === void 0 ? void 0 : onInput(enhanceEvent(e, {
        checked: !checked
      }));

      const {
        getInputElement,
        getLabelElement,
        useCheckboxLikeInputElement,
        useCheckboxLikeLabelElement
      } = useCheckboxLike({
        checked: !!checked,
        labelPosition,
        role: "checkbox",
        disabled,
        onInput: onInputEnhanced
      });
      const useCheckboxInputElement = F(function useCheckboxInputElement(_ref2) {
        let {
          tag
        } = _ref2;
        const {
          getInputElement,
          useCheckboxLikeInputElementProps
        } = useCheckboxLikeInputElement({
          tag
        });
        const isMixed = checked == "mixed";
        y(() => {
          const inputElement = getInputElement();

          if (inputElement && tag === "input") {
            inputElement.indeterminate = isMixed;
          }
        }, [isMixed, tag]);
        return {
          useCheckboxInputElementProps
        };

        function useCheckboxInputElementProps(_ref3) {
          var _props$checked;

          let { ...p0
          } = _ref3;
          let props = useCheckboxLikeInputElementProps(p0);
          (_props$checked = props.checked) !== null && _props$checked !== void 0 ? _props$checked : props.checked = !!checked;
          if (tag == "input") props.type = "checkbox";
          return props;
        }
      }, [useCheckboxLikeInputElement, checked, labelPosition, disabled]);
      const useCheckboxLabelElement = F(function useCheckboxLabelElement(_ref4) {
        let {
          tag
        } = _ref4;
        const {
          useCheckboxLikeLabelElementProps
        } = useCheckboxLikeLabelElement({
          tag
        });

        function useCheckboxLabelElementProps(_ref5) {
          let { ...props
          } = _ref5;
          return useCheckboxLikeLabelElementProps(props);
        }
        return {
          useCheckboxLabelElementProps
        };
      }, [useCheckboxLikeLabelElement, disabled, labelPosition]);
      return {
        useCheckboxInputElement,
        useCheckboxLabelElement
      };
    }

    /**
     *
     *
     * @param param0
     * @returns
     */

    function useCheckboxGroup(_ref) {
      let {
        collator,
        keyNavigation,
        shouldFocusOnChange,
        onUpdateChildren: onUpdateChildrenUnstable
      } = _ref;
      const onUpdateChildren = useStableCallback(onUpdateChildrenUnstable);
      const {
        managedChildren,
        useListNavigationChild,
        useListNavigationProps,
        tabbableIndex,
        focusCurrent,
        currentTypeahead,
        invalidTypeahead
      } = useListNavigation({
        collator,
        keyNavigation,
        shouldFocusOnChange
      }); //const [uncheckedCount, setUnheckedCount] = useState(0);

      const [checkedCount, setCheckedCount] = useState(0);
      const checkedIndices = s(new Set()); //const [selfIsChecked, setSelfIsChecked, getSelfIsChecked] = useState<boolean | "mixed">(false);

      const getSelfIsCheckedUnstable = F(() => {
        let percentage = checkedCount / managedChildren.length;
        return percentage <= 0 ? false : percentage >= 1 ? true : "mixed";
      }, [checkedCount, managedChildren.length]);
      const getSelfIsCheckedStable = useStableCallback(getSelfIsCheckedUnstable); // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
      // Otherwise, it's null when the last input was from a child checkbox. 

      const savedCheckedValues = s(null);
      const onCheckboxGroupParentInput = F(e => {
        e.preventDefault();
        const selfIsChecked = getSelfIsCheckedStable();

        if (selfIsChecked === true || selfIsChecked === false && savedCheckedValues.current == null) {
          return onUpdateChildren(enhanceEvent(e, {
            childrenChecked: false
          }));
        } else if (selfIsChecked === "mixed") {
          savedCheckedValues.current = new Map();

          for (let child of managedChildren) {
            savedCheckedValues.current.set(child.index, child.getChecked());
          }

          return onUpdateChildren(enhanceEvent(e, {
            childrenChecked: true
          }));
        } else {
          var _savedCheckedValues$c;

          return onUpdateChildren(enhanceEvent(e, {
            childrenChecked: (_savedCheckedValues$c = savedCheckedValues.current) !== null && _savedCheckedValues$c !== void 0 ? _savedCheckedValues$c : true
          }));
        }
      }, []); // Keep track of all child IDs, and any time any of them change, 
      // generate a new string with all of them concatenated together
      // (but only once per render);

      const allIds = s(new Set());
      const [ariaControls, setAriaControls] = useState("");
      const [updateIndex, setIdUpdateIndex] = useState(0);
      const notifyChecked = F((index, checked) => {
        if (checked === true) {
          if (!checkedIndices.current.has(index)) {
            setCheckedCount(c => c + 1);
            checkedIndices.current.add(index);
          }
        } else {
          if (checkedIndices.current.has(index)) {
            setCheckedCount(c => c - 1);
            checkedIndices.current.delete(index);
          }
        }
      }, [setCheckedCount, checkedIndices]);
      /*useEffect(() => {
          let percentage = checkedCount / managedChildren.length;
          setSelfIsChecked(percentage <= 0 ? false : percentage >= 1 ? true : "mixed")
      }, [setSelfIsChecked, managedChildren.length, checkedCount]);*/

      const useCheckboxGroupParentProps = F(props => {
        return useMergedProps()({
          "aria-controls": ariaControls
        }, props);
      }, [ariaControls]);
      useEffect(() => {
        setAriaControls(Array.from(allIds.current).join(" "));
      }, [updateIndex]);
      const useCheckboxGroupChild = F(function (_ref2) {
        let {
          index,
          text,
          checked,
          id,
          ...rest
        } = _ref2;
        const getChecked = useStableGetter(checked);
        useEffect(() => {
          allIds.current.add(id);
          setIdUpdateIndex(i => ++i);
          return () => {
            allIds.current.delete(id);
            setIdUpdateIndex(i => ++i);
          };
        }, [id]);
        useEffect(() => {
          notifyChecked(index, checked);
        }, [index, checked]);
        const {
          tabbable,
          useListNavigationChildProps,
          useListNavigationSiblingProps
        } = useListNavigationChild({
          index,
          text,
          id,
          getChecked,
          ...rest
        });
        return {
          tabbable,
          useCheckboxGroupChildProps: F(props => useMergedProps()({}, useListNavigationChildProps(useListNavigationProps(props))), [useListNavigationProps, useListNavigationChildProps])
        };
      }, [useListNavigationProps, notifyChecked, useListNavigationChild]);
      return {
        managedCheckboxes: managedChildren,
        useCheckboxGroupChild,
        useCheckboxGroupParentProps,
        parentIsChecked: getSelfIsCheckedUnstable(),
        parentPercentChecked: checkedCount / managedChildren.length,
        onCheckboxGroupParentInput,
        tabbableIndex,
        focus: focusCurrent,
        currentTypeahead,
        invalidTypeahead,
        managedChildren
      };
    }

    /**
     * Adds event handlers for a modal-like soft-dismiss interaction.
     *
     * That is, any clicks or taps outside of the given component,
     * or any time the Escape key is pressed within the component,
     * (with various browser oddities regarding clicks on blank or inert areas handled)
     * the component will request to close itself.
     *
     * Of course, if you don't do anything in the `onClose` function,
     * it won't be a soft dismiss anymore.
     *
     * @param param0
     * @returns
     */

    function useSoftDismiss(_ref) {
      let {
        onClose,
        getElements
      } = _ref;
      const stableOnClose = useStableCallback(onClose);
      const stableGetElements = useStableCallback(getElements);
      const getOpen = useStableGetter(open);
      const onBackdropClick = F(function onBackdropClick(e) {
        var _getElement;

        const document = (_getElement = getElement()) === null || _getElement === void 0 ? void 0 : _getElement.ownerDocument;
        document === null || document === void 0 ? void 0 : document.defaultView; // Basically, "was this event fired on the root-most element, or at least an element not contained by the modal?"
        // Either could be how the browser handles these sorts of "interacting with nothing" events.

        if (e.target == (document === null || document === void 0 ? void 0 : document.documentElement)) {
          stableOnClose("backdrop");
        }

        let elements = stableGetElements();

        if (elements && e.target instanceof Element) {
          if (!Array.isArray(elements)) elements = [elements];
          let foundInsideClick = false;

          for (let element of elements) {
            if (element.contains(e.target)) {
              foundInsideClick = true;
              break;
            }
          }

          if (!foundInsideClick) onClose("backdrop");
        }
      }, []);
      const {
        useActiveElementProps,
        getElement
      } = useActiveElement({
        onLastActiveElementChange: F(newElement => {
          let validFocusableElements = stableGetElements();

          if (validFocusableElements) {
            if (!Array.isArray(validFocusableElements)) validFocusableElements = [validFocusableElements];

            for (let focusable of validFocusableElements) {
              if (focusable !== null && focusable !== void 0 && focusable.contains(newElement)) return;
            }
          }

          onClose("lost-focus");
        }, [])
      });
      const {
        useRefElementProps
      } = useRefElement({
        onElementChange: F(e => {
          const document = e === null || e === void 0 ? void 0 : e.ownerDocument;
          const window = document === null || document === void 0 ? void 0 : document.defaultView; // Since everything else is inert, we listen for captured clicks on the window
          // (we don't use onClick since that doesn't fire when clicked on empty/inert areas)
          // Note: We need a *separate* touch event on mobile Safari, because
          // it doesn't let click events bubble or be captured from traditionally non-interactive elements,
          // but touch events work as expected.

          const mouseDown = e => {
            if (getOpen()) onBackdropClick(e);
          };

          const touchStart = e => {
            if (getOpen()) onBackdropClick(e);
          };

          const keyDown = e => {
            if (e.key === "Escape") {
              stableOnClose("escape");
            }
          };

          window === null || window === void 0 ? void 0 : window.addEventListener("mousedown", mouseDown, {
            capture: true
          });
          window === null || window === void 0 ? void 0 : window.addEventListener("touchstart", touchStart, {
            capture: true
          });
          window === null || window === void 0 ? void 0 : window.addEventListener("keydown", keyDown);
          return () => {
            window === null || window === void 0 ? void 0 : window.removeEventListener("mousedown", mouseDown);
            window === null || window === void 0 ? void 0 : window.removeEventListener("touchstart", touchStart);
            window === null || window === void 0 ? void 0 : window.removeEventListener("keydown", keyDown);
          };
        }, [])
      });
      return {
        useSoftDismissProps: F(props => useActiveElementProps(useRefElementProps(props)), [useActiveElementProps, useRefElementProps])
      };
    }
    /**
     * A generic modal hook, used by modal dialogs, but can also
     * be used by anything that's modal with a backdrop.
     * @param param0
     * @returns
     */

    function useModal(_ref2) {
      let {
        open,
        onClose
      } = _ref2;
      const stableOnClose = useStableCallback(onClose);
      const [modalDescribedByBody, setModalDescribedByBody] = useState(false);
      useHideScroll(open);
      const {
        id: modalId,
        useRandomIdProps: useModalIdProps,
        useReferencedIdProps: useModalReferencingIdProps
      } = useRandomId({
        prefix: "aria-modal-"
      });
      const {
        id: bodyId,
        useRandomIdProps: useBodyIdProps,
        useReferencedIdProps: useBodyReferencingIdProps
      } = useRandomId({
        prefix: "aria-modal-body-"
      });
      const {
        id: titleId,
        useRandomIdProps: useTitleIdProps,
        useReferencedIdProps: useTitleReferencingIdProps
      } = useRandomId({
        prefix: "aria-modal-title-"
      });
      const {
        useRefElementProps: useModalRefElement,
        getElement: getModalElement
      } = useRefElement({});
      const {
        useSoftDismissProps
      } = useSoftDismiss({
        onClose: stableOnClose,
        getElements: getModalElement
      });
      const useModalBackdrop = F(function useModalBackdrop() {
        function useModalBackdropProps(props) {
          return useMergedProps()({
            onPointerUp: () => stableOnClose("backdrop")
          }, props);
        }

        return {
          useModalBackdropProps
        };
      }, []);

      const useModalProps = function (_ref3) {
        let {
          "aria-modal": ariaModal,
          role,
          ...p0
        } = _ref3;
        const {
          useFocusTrapProps
        } = useFocusTrap({
          trapActive: open
        });
        const p1 = useTitleReferencingIdProps("aria-labelledby")(p0);
        const p2 = useModalIdProps(p1);
        const pFinal = useBodyReferencingIdProps("aria-describedby")(p2);
        return useFocusTrapProps(useSoftDismissProps(useMergedProps()(useModalRefElement({
          role: "dialog"
        }), modalDescribedByBody ? pFinal : p2)));
      };

      const useModalTitle = F(function useModalTitle() {
        const useModalTitleProps = function (props) {
          return useTitleIdProps(props);
        };

        return {
          useModalTitleProps
        };
      }, []);
      const useModalBody = F(function useModalBody(_ref4) {
        let {
          descriptive
        } = _ref4;
        setModalDescribedByBody(descriptive);

        const useModalBodyProps = function (props) {
          return useBodyIdProps(props);
        };

        return {
          useModalBodyProps
        };
      }, []);
      return {
        useModalProps,
        useModalTitle,
        useModalBody,
        useModalBackdrop
      };
    }
    /**
     * Allows for hiding the scroll bar of the root HTML element
     * without shifting the layout of the page more than adding a fow pixels
     * of padding to the root element if necessary.
     * @param hideScroll
     */

    function useHideScroll(hideScroll) {
      const [getScrollbarWidth, setScrollbarWidth] = usePassiveState(null);
      const [getScrollbarHeight, setScrollbarHeight] = usePassiveState(null);
      y(() => {
        if (hideScroll) {
          // When scrolling is resumed, we'll need to restore the original scroll positions
          // so we need to keep this information around
          const originalScrollTop = document.documentElement.scrollTop;
          const originalScrollLeft = document.documentElement.scrollLeft; // Measure the width of the page (minus the scrollbar)

          let widthWithScrollBar = document.documentElement.scrollWidth;
          let heightWithScrollBar = document.documentElement.scrollHeight; // Apply a class that hides the scrollbar.

          document.documentElement.classList.add("document-scroll-hidden"); // In case multiple things are locking scroll, keep track of how many are doing that
          // (just add 1 on enable, subtract 1 on disable)

          document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString(); // Measure the new width without a scrollbar 
          // so we can take the difference as the scrollbar width.

          let widthWithoutScrollBar = document.documentElement.scrollWidth;
          let heightWithoutScrollBar = document.documentElement.scrollHeight;
          let scrollbarWidth = widthWithoutScrollBar - widthWithScrollBar;
          let scrollbarHeight = heightWithoutScrollBar - heightWithScrollBar; // Failsafe -- if this measuring trick does something unexpected, just ignore it

          if (scrollbarWidth > 80) scrollbarWidth = 0;
          if (scrollbarHeight > 80) scrollbarHeight = 0; // Make our measurements available as CSS properties for general use

          document.documentElement.style.setProperty("--root-scrollbar-width", `${scrollbarWidth}px`);
          document.documentElement.style.setProperty("--root-scrollbar-height", `${scrollbarHeight}px`);
          document.documentElement.style.setProperty("--root-scrollstop-top", `${originalScrollTop}px`);
          document.documentElement.style.setProperty("--root-scrollstop-left", `${originalScrollLeft}px`);
          setScrollbarWidth(scrollbarWidth);
          setScrollbarHeight(scrollbarHeight);
          return () => {
            // Undo all the things we just did
            document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();

            if (document.documentElement.dataset["scrollHiders"] == "0") {
              // If we were the last scroll-locking thing to stop, then remove the class that stops scrolling.
              document.documentElement.removeAttribute("data-scroll-hiders");
              document.documentElement.classList.remove("document-scroll-hidden"); // Also, restore the original scroll position
              // We do this by forcing the scroll behavior to not be smooth
              // (it's instant if nothing is set to smooth, https://www.w3.org/TR/cssom-view/#scrolling),
              // scrolling, then restoring the original scroll behavior 
              // (which was probably already auto anyway, but just to be safe)

              const originalScrollBehavior = document.documentElement.style.scrollBehavior;
              document.documentElement.style.scrollBehavior = "auto";
              document.documentElement.scrollTo({
                top: originalScrollTop,
                left: originalScrollLeft,
                behavior: "auto"
              });
              document.documentElement.style.scrollBehavior = originalScrollBehavior;
            }
          };
        }
      }, [hideScroll]);
      return {
        getScrollbarWidth,
        getScrollbarHeight
      };
    }

    function useAriaDialog(_ref) {
      let {
        open,
        onClose
      } = _ref;
      // TODO: Differences between dialog and modal go here, presumably.
      // Non-modal dialogs need to be able to be repositioned, etc.
      const {
        useModalBackdrop,
        useModalBody,
        useModalProps,
        useModalTitle
      } = useModal({
        open,
        onClose
      });
      const useDialogBackdrop = F(() => {
        const {
          useModalBackdropProps
        } = useModalBackdrop();
        return {
          useDialogBackdropProps: useModalBackdropProps
        };
      }, [useModalBackdrop]);
      const useDialogBody = F(_ref2 => {
        let {
          descriptive
        } = _ref2;
        const {
          useModalBodyProps
        } = useModalBody({
          descriptive
        });
        return {
          useDialogBodyProps: useModalBodyProps
        };
      }, [useModalBackdrop]);
      const useDialogProps = useModalProps;
      const useDialogTitle = F(() => {
        const {
          useModalTitleProps
        } = useModalTitle();
        return {
          useDialogTitleProps: useModalTitleProps
        };
      }, [useModalTitle]);
      return {
        useDialogProps,
        useDialogTitle,
        useDialogBody,
        useDialogBackdrop
      };
    }

    function useAriaListboxMulti(_ref) {
      let { ...args
      } = _ref;
      const {
        useHasFocusProps,
        getFocusedInner
      } = useHasFocus({});
      const {
        useGenericLabelInput,
        useGenericLabelLabel,
        useReferencedInputIdProps,
        useReferencedLabelIdProps
      } = useGenericLabel({
        labelPrefix: "aria-listbox-label-",
        inputPrefix: "aria-listbox-"
      });
      const {
        useListNavigationChild,
        useListNavigationProps,
        navigateToIndex,
        managedChildren,
        currentTypeahead,
        focusCurrent,
        tabbableIndex,
        invalidTypeahead
      } = useListNavigation({ ...args,
        shouldFocusOnChange: getFocusedInner
      });
      const {
        useGenericLabelInputProps
      } = useGenericLabelInput();
      const childCount = managedChildren.length;
      const [shiftHeld, setShiftHeld, getShiftHeld] = useState(false);
      const typeaheadInProgress = !!currentTypeahead;
      y(() => {
        for (let i = 0; i < childCount; ++i) {
          managedChildren[i].setTypeaheadInProgress(typeaheadInProgress);
        }
      }, [typeaheadInProgress, childCount]);
      const useListboxMultiItem = F(info => {
        var _info$onSelect;

        const selected = info.selected;
        const [typeaheadInProgress, setTypeaheadInProgress] = useState(false);
        const getSelected = useStableGetter(selected);
        const {
          useRefElementProps,
          getElement
        } = useRefElement({});
        const stableOnSelect = useStableCallback((_info$onSelect = info.onSelect) !== null && _info$onSelect !== void 0 ? _info$onSelect : () => {});
        const {
          tabbable,
          useListNavigationSiblingProps,
          useListNavigationChildProps
        } = useListNavigationChild({ ...info,
          setTypeaheadInProgress
        });
        useLayoutEffect(() => {
          const element = getElement();

          if (element && getShiftHeld()) {
            stableOnSelect === null || stableOnSelect === void 0 ? void 0 : stableOnSelect({
              target: element,
              currentTarget: element,
              [EventDetail]: {
                selected: true
              }
            });
          }
        }, [tabbable]);
        return {
          useListboxMultiItemProps,
          tabbable
        };

        function useListboxMultiItemProps(props) {
          const newProps = usePressEventHandlers(e => {
            navigateToIndex(info.index);
            stableOnSelect === null || stableOnSelect === void 0 ? void 0 : stableOnSelect({ ...e,
              [EventDetail]: {
                selected: !getSelected()
              }
            });
            e.preventDefault();
          }, {
            space: typeaheadInProgress ? "exclude" : undefined
          })({});
          props.role = "option";
          props["aria-setsize"] = childCount.toString();
          props["aria-posinset"] = (info.index + 1).toString();
          props["aria-selected"] = (tabbable !== null && tabbable !== void 0 ? tabbable : false).toString();
          return useRefElementProps(useListNavigationChildProps(useMergedProps()(newProps, props)));
        }
      }, [useListNavigationChild, childCount, typeaheadInProgress]);
      const useListboxMultiLabel = F(function useListboxMultiLabel() {
        function useListboxMultiLabelProps(props) {
          const {
            useGenericLabelLabelProps
          } = useGenericLabelLabel();
          return useGenericLabelLabelProps(props);
        }

        return {
          useListboxMultiLabelProps
        };
      }, [useGenericLabelLabel]);
      return {
        useListboxMultiItem,
        useListboxMultiProps,
        useListboxMultiLabel,
        tabbableIndex,
        currentTypeahead,
        invalidTypeahead,
        focus: focusCurrent,
        managedChildren
      };

      function useListboxMultiProps(props) {
        props.role = "listbox";
        props["aria-multiselectable"] = "true";
        return useListNavigationProps(useHasFocusProps(useGenericLabelInputProps(useMergedProps()({
          onKeyDown,
          onKeyUp,
          onFocusOut
        }, props))));
      }

      function onKeyDown(e) {
        if (e.key == "Shift") setShiftHeld(true);
      }

      function onKeyUp(e) {
        if (e.key == "Shift") setShiftHeld(false);
      }

      function onFocusOut(e) {
        setShiftHeld(false);
      }
    }

    function useAriaListboxSingle(_ref) {
      let {
        selectedIndex,
        onSelect,
        selectionMode,
        ...args
      } = _ref;
      const [anyItemsFocused, setAnyItemsFocused, getAnyItemsFocused] = useState(false);
      const {
        useGenericLabelInput,
        useGenericLabelLabel,
        useReferencedInputIdProps,
        useReferencedLabelIdProps,
        getInputElement
      } = useGenericLabel({
        labelPrefix: "aria-listbox-label-",
        inputPrefix: "aria-listbox-"
      });
      const {
        useListNavigationChild,
        useListNavigationProps,
        navigateToIndex,
        managedChildren,
        tabbableIndex,
        focusCurrent,
        currentTypeahead,
        invalidTypeahead
      } = useListNavigation({ ...args,
        shouldFocusOnChange: getAnyItemsFocused
      });
      const {
        useGenericLabelInputProps
      } = useGenericLabelInput();
      const stableOnSelect = useStableCallback(onSelect !== null && onSelect !== void 0 ? onSelect : () => {}); // Track whether the currently focused element is a child of the list box parent element.
      // When it's not, we reset the tabbable index back to the currently selected element.

      const {
        useActiveElementProps
      } = useActiveElement({
        onActiveElementChange: F(activeElement => {
          var _getInputElement;

          return setAnyItemsFocused(!!((_getInputElement = getInputElement()) !== null && _getInputElement !== void 0 && _getInputElement.contains(activeElement)));
        }, [])
      });
      y(() => {
        if (!anyItemsFocused) navigateToIndex(selectedIndex);
      }, [anyItemsFocused, selectedIndex, navigateToIndex]);
      useChildFlag({
        activatedIndex: selectedIndex,
        managedChildren,
        setChildFlag: (i, selected) => {
          var _managedChildren$i;

          return (_managedChildren$i = managedChildren[i]) === null || _managedChildren$i === void 0 ? void 0 : _managedChildren$i.setSelected(selected);
        },
        getChildFlag: i => {
          var _managedChildren$i$ge, _managedChildren$i2;

          return (_managedChildren$i$ge = (_managedChildren$i2 = managedChildren[i]) === null || _managedChildren$i2 === void 0 ? void 0 : _managedChildren$i2.getSelected()) !== null && _managedChildren$i$ge !== void 0 ? _managedChildren$i$ge : null;
        }
      });
      useLayoutEffect(() => {
        navigateToIndex(selectedIndex);
      }, [selectedIndex, managedChildren.length]);
      const childCount = managedChildren.length;
      const useListboxSingleItem = F(info => {
        const [selected, setSelected, getSelected] = useState(null);
        const {
          tabbable,
          useListNavigationSiblingProps,
          useListNavigationChildProps
        } = useListNavigationChild({
          setSelected,
          getSelected,
          ...info
        });
        const {
          getElement,
          useRefElementProps
        } = useRefElement({});
        const index = info.index;
        y(() => {
          const element = getElement();

          if (element && tabbable && selectionMode == "focus") {
            stableOnSelect === null || stableOnSelect === void 0 ? void 0 : stableOnSelect({
              target: element,
              currentTarget: element,
              [EventDetail]: {
                selectedIndex: index
              }
            });
          }
        }, [tabbable, selectionMode, index]);
        return {
          useListboxSingleItemProps,
          tabbable,
          selected,
          getSelected
        };

        function useListboxSingleItemProps(props) {
          const newProps = usePressEventHandlers(e => {
            navigateToIndex(info.index);
            const element = getElement();
            if (element) stableOnSelect === null || stableOnSelect === void 0 ? void 0 : stableOnSelect({
              target: element,
              currentTarget: element,
              [EventDetail]: {
                selectedIndex: index
              }
            });
            e.preventDefault();
          }, undefined)({});
          props.role = "option";
          props["aria-setsize"] = childCount.toString();
          props["aria-posinset"] = (info.index + 1).toString();
          props["aria-selected"] = (selected !== null && selected !== void 0 ? selected : false).toString();
          return useListNavigationChildProps(useMergedProps()(newProps, useRefElementProps(props)));
        }
      }, [useListNavigationChild, selectionMode, childCount]);
      const useListboxSingleLabel = F(function useListboxSingleLabel() {
        function useListboxSingleLabelProps(props) {
          const {
            useGenericLabelLabelProps
          } = useGenericLabelLabel();
          useGenericLabelLabelProps(props);
        }

        return {
          useListboxSingleLabelProps
        };
      }, [useGenericLabelLabel]);
      return {
        useListboxSingleItem,
        useListboxSingleProps,
        useListboxSingleLabel,
        tabbableIndex,
        focus: focusCurrent,
        currentTypeahead,
        invalidTypeahead,
        managedChildren
      };

      function useListboxSingleProps(props) {
        props.role = "listbox";
        return useListNavigationProps(useGenericLabelInputProps(useActiveElementProps(props)));
      }
    }

    /**
     * A menu is a popup control that contains a list of menu items, and that's it.
     * It has very well-defined logic for managing those items as the menu's state changes.
     *
     * A MenuBase is just the "popup" part without the "list of menu items" part. It can
     * (really, must) have interactive controls, but these controls are allowed to be more
     * free-form. This means that, like a dialog, you must tell this hook
     * where within the popup to send focus when opened (for a menu it's just the first
     * menu item, but with custom content you'll need to provide this).
     *
     */

    function useMenuBase(_ref) {
      let {
        sendFocusWithinMenu,
        ...args
      } = _ref;
      const getSendFocusWithinMenu = useStableGetter(sendFocusWithinMenu);
      const [focusTrapActive, setFocusTrapActive] = useState(null);
      let onClose = args.onClose;
      let onOpen = args.onOpen;
      let menubar = args.menubar;
      let open = menubar ? true : args.open;
      const stableOnClose = useStableCallback(onClose !== null && onClose !== void 0 ? onClose : () => {});
      const getOpen = useStableGetter(open); // TODO: It's awkward that the button focus props are out here where we don't have its type,
      // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
      // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
      // where nothing is focused. 

      const {
        useHasFocusProps: useMenuBaseHasFocusProps,
        getLastFocusedInner: getMenuBaseLastFocusedInner
      } = useHasFocus({
        /*onLastFocusedInnerChanged: onMenuOrButtonLostLastFocus*/
      });
      const {
        useHasFocusProps: useButtonHasFocusProps,
        getLastFocusedInner: getMenuBaseButtonLastFocusedInner
      } = useHasFocus({
        /*onLastFocusedInnerChanged: onMenuOrButtonLostLastFocus*/
      });
      const [openerElement, setOpenerElement, getOpenerElement] = useState(null);
      const {
        useRandomIdProps: useMenuBaseIdProps,
        useReferencedIdProps: useMenuBaseIdReferencingProps
      } = useRandomId({
        prefix: "aria-menu-"
      });
      const {
        getElement: getButtonElement,
        useRefElementProps: useButtonRefElementProps
      } = useRefElement({
        onElementChange: setOpenerElement
      });
      const {
        getElement: getMenuElement,
        useRefElementProps: useMenuBaseRefElementProps
      } = useRefElement({});
      const {
        useSoftDismissProps
      } = useSoftDismiss({
        onClose: stableOnClose,
        getElements: () => [getButtonElement(), getMenuElement()]
      });
      y(() => {
        setFocusTrapActive(open);
      }, [open]); // A menu sentinal is a hidden but focusable element that comes at the start or end of the element
      // that, when activated or focused over, closes the menu.
      // (if focused within 100ms of the open prop changing, instead of
      // closing the menu, focusing the sentinel immediately asks the menu to focus itself).
      // This exists because while mouse users can click out of a menu
      // and keyboard users can escape to close the menu,
      // screen readers and other input methods that don't use those two become stuck.

      const useMenuSentinel = F(() => {
        const [firstSentinelIsActive, setFirstSentinelIsActive] = useState(false);
        useTimeout({
          callback: () => {
            setFirstSentinelIsActive(open);
          },
          timeout: 100,
          triggerIndex: `${open}-${firstSentinelIsActive}`
        });
        const onFocus = firstSentinelIsActive ? () => stableOnClose() : () => {
          var _getSendFocusWithinMe;

          return (_getSendFocusWithinMe = getSendFocusWithinMenu()) === null || _getSendFocusWithinMe === void 0 ? void 0 : _getSendFocusWithinMe();
        };

        const onClick = () => stableOnClose();

        return {
          useMenuSentinelProps: function (p) {
            return useMergedProps()({
              onFocus,
              onClick
            }, p);
          }
        };
      }, [open]);
      const useMenuBaseProps = F(props => {
        function onKeyDown(e) {
          if (e.key == "Escape" && getOpen()) {
            stableOnClose();
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
          }
        }

        return useSoftDismissProps(useMenuBaseHasFocusProps(useMenuBaseRefElementProps(useMenuBaseIdProps(useMergedProps()({
          onKeyDown
        }, props)))));
      }, [useSoftDismissProps, useMenuBaseHasFocusProps, useMenuBaseRefElementProps, useMenuBaseIdProps]);
      const useMenuBaseButtonProps = F(props => {
        return useButtonRefElementProps(useButtonHasFocusProps(useMenuBaseIdReferencingProps("aria-controls")(props)));
      }, [useButtonHasFocusProps, useButtonRefElementProps, useMenuBaseIdReferencingProps]);
      y(() => {
        const sendFocusWithinMenu = getSendFocusWithinMenu();

        if (focusTrapActive) {
          sendFocusWithinMenu === null || sendFocusWithinMenu === void 0 ? void 0 : sendFocusWithinMenu();
        } else if (focusTrapActive === false) {
          var _getOpenerElement;

          if (getMenuBaseLastFocusedInner()) (_getOpenerElement = getOpenerElement()) === null || _getOpenerElement === void 0 ? void 0 : _getOpenerElement.focus({
            preventScroll: true
          });
        } else ;
      }, [focusTrapActive]);
      return {
        useMenuSentinel,
        focusTrapActive,
        useMenuBaseProps,
        useMenuBaseButtonProps,
        getMenuBaseLastFocusedInner,
        getMenuBaseButtonLastFocusedInner,
        open,
        onOpen,
        onClose
      };
    }
    function useAriaMenu(_ref2) {
      let {
        collator,
        keyNavigation,
        noTypeahead,
        noWrap,
        typeaheadTimeout,
        ...args
      } = _ref2;
      const {
        managedChildren,
        useListNavigationChild,
        useListNavigationProps,
        tabbableIndex,
        focusCurrent: focusMenu,
        currentTypeahead,
        invalidTypeahead
      } = useListNavigation({
        collator,
        keyNavigation,
        noTypeahead,
        noWrap,
        typeaheadTimeout,
        shouldFocusOnChange: F(() => getMenuBaseLastFocusedInner() || getMenuBaseButtonLastFocusedInner(), [])
      });
      const {
        useMenuSentinel,
        focusTrapActive,
        useMenuBaseButtonProps,
        useMenuBaseProps,
        getMenuBaseButtonLastFocusedInner,
        getMenuBaseLastFocusedInner,
        open,
        onOpen,
        onClose
      } = useMenuBase({ ...args,
        sendFocusWithinMenu: focusMenu !== null && focusMenu !== void 0 ? focusMenu : () => {}
      });
      const useMenuButton = F(_ref3 => {
        return {
          useMenuButtonProps: function (p) {
            let props = useMenuBaseButtonProps(p);
            props["aria-haspopup"] = "menu";
            props["aria-expanded"] = open ? "true" : undefined;
            return props;
          }
        };
      }, [open, onClose, onOpen, useMenuBaseButtonProps]);
      /*const useMenuSubmenuItem = useCallback((args: UseMenuSubmenuItemParameters) => {
          const { useMenuProps, useMenuButton } = useAriaMenu<HTMLElement, ChildElement, I>(args);
          const { useMenuButtonProps } = useMenuButton<E>({ tag: "li" as any });
           const { getElement, useRefElementProps } = useRefElement<any>({ onElementChange: setOpenerElement as OnPassiveStateChange<any> });
           return {
              getElement,
              useMenuProps,
              useMenuSubmenuItemProps: function <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
                  props.role = "menuitem";
                  return useRefElementProps(useMenuButtonProps(useMenuIdReferencingProps("aria-controls")(props)));
              }
          }
      }, []);*/

      const useMenuItem = F(args => {
        const {
          useListNavigationChildProps
        } = useListNavigationChild(args);

        function useMenuItemProps(_ref4) {
          let { ...props
          } = _ref4;
          props.role = "menuitem";
          return useMergedProps()({}, useListNavigationChildProps(props));
        }

        return {
          useMenuItemProps
        };
      }, []);

      function useMenuProps(_ref5) {
        let { ...props
        } = _ref5;
        props.role = "menu";
        return useMenuBaseProps(useListNavigationProps(props));
      }

      return {
        useMenuProps,
        useMenuButton,
        useMenuItem,
        useMenuSentinel,
        //useMenuSubmenuItem,
        focusMenu,
        currentTypeahead,
        invalidTypeahead,
        managedChildren
      };
    }

    function useAriaTabs(_ref) {
      let {
        selectionMode,
        selectedIndex,
        onSelect,
        orientation: logicalOrientation,
        ...args
      } = _ref;
      const {
        useHasFocusProps: useTabListHasFocusProps,
        getFocusedInner: getTabListFocusedInner
      } = useHasFocus({});
      const [physicalOrientation, setPhysicalOrientation] = useState("horizontal");
      const {
        getLogicalDirectionInfo,
        convertToPhysicalOrientation,
        useLogicalDirectionProps
      } = useLogicalDirection({
        onLogicalDirectionChange: F(logicalDirectionInfo => setPhysicalOrientation(convertToPhysicalOrientation(logicalOrientation, logicalDirectionInfo)), [])
      });
      useRandomId({
        prefix: "aria-tab-list-"
      });
      const {
        useRandomIdProps: useTabLabelIdProps,
        useReferencedIdProps: useReferencedTabLabelId
      } = useRandomId({
        prefix: "aria-tab-label-"
      });
      const {
        managedChildren: managedTabs,
        navigateToIndex,
        useListNavigationChild,
        useListNavigationProps,
        tabbableIndex,
        invalidTypeahead,
        currentTypeahead,
        focusCurrent
      } = useListNavigation({ ...args,
        shouldFocusOnChange: getTabListFocusedInner,
        keyNavigation: logicalOrientation
      });
      const {
        managedChildren: managedPanels,
        useManagedChild: useManagedTabPanel
      } = useChildManager();
      useStableCallback(onSelect);
      const childCount = managedTabs.length;
      useLayoutEffect(() => {
        for (let child of managedTabs) child.setSelectionMode(selectionMode);
      }, [selectionMode]);
      useChildFlag({
        activatedIndex: selectedIndex,
        managedChildren: managedTabs,
        setChildFlag: (i, selected) => {
          var _managedTabs$i;

          return (_managedTabs$i = managedTabs[i]) === null || _managedTabs$i === void 0 ? void 0 : _managedTabs$i.setSelected(selected);
        },
        getChildFlag: i => {
          var _managedTabs$i2;

          return (_managedTabs$i2 = managedTabs[i]) === null || _managedTabs$i2 === void 0 ? void 0 : _managedTabs$i2.getSelected();
        }
      });
      useChildFlag({
        activatedIndex: selectedIndex,
        managedChildren: managedPanels,
        setChildFlag: (i, visible) => {
          var _managedPanels$i;

          return (_managedPanels$i = managedPanels[i]) === null || _managedPanels$i === void 0 ? void 0 : _managedPanels$i.setVisible(visible);
        },
        getChildFlag: i => {
          var _managedPanels$i2;

          return (_managedPanels$i2 = managedPanels[i]) === null || _managedPanels$i2 === void 0 ? void 0 : _managedPanels$i2.getVisible();
        }
      });
      useLayoutEffect(prev => {
        if (selectedIndex != null && selectionMode == "activate") {
          // TODO: We need to wait a moment so that the tab panel we want to focus
          // is actually visible (i.e. we need to wait for the child to re-render itself).
          // We could, alternatively, signal to the child that it should focus itself
          // the next time it renders itself as visible,
          // which might be better?
          queueMicrotask(() => {
            var _managedPanels$select;

            (_managedPanels$select = managedPanels[selectedIndex]) === null || _managedPanels$select === void 0 ? void 0 : _managedPanels$select.focus();
          });
        }
      }, [childCount, selectedIndex, selectionMode]);
      const useTab = F(function useTab(info) {
        const [selectionModeL, setSelectionModeL] = useState(selectionMode);
        const {
          useRefElementProps,
          getElement
        } = useRefElement({});
        const [tabPanelId, setTabPanelId] = useState(undefined);
        const {
          useRandomIdProps: useTabIdProps,
          id: tabId,
          getId: getTabId
        } = useRandomId({
          prefix: "aria-tab-"
        });
        const [selected, setSelected, getSelected] = useState(null);
        const {
          tabbable,
          useListNavigationChildProps,
          useListNavigationSiblingProps
        } = useListNavigationChild({
          setSelected,
          getSelected,
          tabId,
          setTabPanelId,
          setSelectionMode: setSelectionModeL,
          ...info
        });
        const getIndex = useStableGetter(info.index);
        y(() => {
          const element = getElement();

          if (tabbable && selectionModeL == "focus") {
            onSelect({
              target: element,
              currentTarget: element,
              [EventDetail]: {
                selectedIndex: getIndex()
              }
            });
          }
        }, [tabbable, selectionMode]);
        y(() => {
          var _managedPanels$info$i;

          (_managedPanels$info$i = managedPanels[info.index]) === null || _managedPanels$info$i === void 0 ? void 0 : _managedPanels$info$i.setTabId(tabId);
        }, [tabId, info.index]);

        function useTabProps(_ref2) {
          let { ...props
          } = _ref2;
          const newProps = usePressEventHandlers(e => {
            navigateToIndex(info.index);
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(enhanceEvent(e, {
              selectedIndex: getIndex()
            }));
            e.preventDefault();
          }, undefined)(props);
          newProps.role = "tab";
          newProps["aria-selected"] = (selected !== null && selected !== void 0 ? selected : false).toString();
          newProps["aria-controls"] = tabPanelId;
          return useMergedProps()({}, useTabIdProps(useListNavigationChildProps(useRefElementProps(newProps))));
        }

        return {
          useTabProps,
          selected
        };
      }, []);
      const useTabPanel = F(function usePanel(info) {
        //const [shouldFocus, setShouldFocus] = useState(false);
        const [tabId, setTabId] = useState(undefined);
        const [visible, setVisible, getVisible] = useState(null);
        const {
          useRandomIdProps: usePanelIdProps,
          useReferencedIdProps: useReferencedPanelId,
          id: tabPanelId
        } = useRandomId({
          prefix: "aria-tab-panel-"
        });
        const {
          useManagedChildProps,
          getElement
        } = useManagedTabPanel({ ...info,
          tabPanelId,
          setTabId,
          focus,
          setVisible: setVisible,
          getVisible: getVisible
        });

        function focus() {
          const element = getElement();

          if (element && getTabListFocusedInner()) {
            element === null || element === void 0 ? void 0 : element.focus({
              preventScroll: true
            });
          }
        }

        y(() => {
          var _managedTabs$info$ind;

          (_managedTabs$info$ind = managedTabs[info.index]) === null || _managedTabs$info$ind === void 0 ? void 0 : _managedTabs$info$ind.setTabPanelId(tabPanelId);
        }, [tabPanelId, info.index]);

        function useTabPanelProps(_ref3) {
          var _managedTabs$info$ind2, _props$tabIndex;

          let { ...props
          } = _ref3;
          props["aria-labelledby"] = (_managedTabs$info$ind2 = managedTabs[info.index]) === null || _managedTabs$info$ind2 === void 0 ? void 0 : _managedTabs$info$ind2.tabId;
          props.role = "tabpanel";
          (_props$tabIndex = props.tabIndex) !== null && _props$tabIndex !== void 0 ? _props$tabIndex : props.tabIndex = -1; // Make sure the tab panel is tabbable.

          return useMergedProps()({}, usePanelIdProps(useManagedChildProps(props)));
        }

        return {
          useTabPanelProps,
          visible
        };
      }, []);
      const useTabsList = F(function useTabList() {
        function useTabListProps(_ref4) {
          let { ...props
          } = _ref4;
          props.role = "tablist";
          props["aria-orientation"] = physicalOrientation;
          return useReferencedTabLabelId("aria-labelledby")(useTabListHasFocusProps(useLogicalDirectionProps(useListNavigationProps(props))));
        }

        return {
          useTabListProps
        };
      }, [useListNavigationProps, physicalOrientation]);
      const useTabsLabel = F(function useTabsLabel() {
        function useTabsLabelProps(_ref5) {
          let { ...props
          } = _ref5;
          return useTabLabelIdProps(props);
        }

        return {
          useTabsLabelProps
        };
      }, []);
      return {
        useTab,
        useTabPanel,
        useTabsList,
        useTabsLabel,
        tabbableIndex,
        focusTabList: focusCurrent,
        currentTypeahead,
        invalidTypeahead,
        managedPanels,
        managedTabs
      };
    }

    function useAriaTooltip(_ref) {
      var _mouseoverDelay, _mouseoutDelay;

      let {
        mouseoverDelay,
        mouseoutDelay
      } = _ref;
      (_mouseoverDelay = mouseoverDelay) !== null && _mouseoverDelay !== void 0 ? _mouseoverDelay : mouseoverDelay = 400;
      (_mouseoutDelay = mouseoutDelay) !== null && _mouseoutDelay !== void 0 ? _mouseoutDelay : mouseoutDelay = 40;
      const [open, setOpen, getOpen] = useState(false); // Used to keep track of if we're hoving over the trigger when correcting for the given delays.

      const [hasDelayCorrectedMouseover, setHasDelayCorrectedMouseover] = useState(false);
      const {
        useRandomIdProps: useTooltipIdProps,
        useReferencedIdProps: useTooltipIdReferencingProps
      } = useRandomId({
        prefix: "aria-tooltip-"
      });
      const [triggerFocusedInner, setTriggerFocusedInner, getTriggerFocusedInner] = useState(false);
      const [triggerHasMouseover, setTriggerHasMouseover] = useState(false);
      const [tooltipHasMouseover, setTooltipHasMouseover] = useState(false);
      const [tooltipHasFocus, setTooltipHasFocus] = useState(false);
      const triggerIndex = !!(+triggerHasMouseover + +tooltipHasMouseover + +tooltipHasFocus);
      const tooltipShouldBeShown = triggerHasMouseover || tooltipHasMouseover || tooltipHasFocus; // Activate on the usual delay for mouseover

      useTimeout({
        timeout: mouseoverDelay,
        triggerIndex,
        callback: () => {
          setHasDelayCorrectedMouseover(tooltipShouldBeShown);
        }
      }); // Forcibly deactivate almost immediately on mouseout

      useTimeout({
        timeout: mouseoutDelay,
        triggerIndex,
        callback: () => {
          if (!tooltipShouldBeShown) setHasDelayCorrectedMouseover(tooltipShouldBeShown);
        }
      }); // If we have a (delay-corrected) mouseover or we're focused,
      // show the tooltip.

      y(() => {
        setOpen(hasDelayCorrectedMouseover || triggerFocusedInner);
      }, [hasDelayCorrectedMouseover, triggerFocusedInner]);
      const useTooltipTrigger = F(function useTooltipTrigger() {
        function onPointerEnter(e) {
          setTriggerHasMouseover(true);
        }

        function onPointerLeave(e) {
          setTriggerHasMouseover(false);
        }

        function onTouchEnd(e) {
          e.target.focus();
        }

        const {
          useHasFocusProps
        } = useHasFocus({
          onFocusedInnerChanged: setTriggerFocusedInner
        });

        function useTooltipTriggerProps(_ref2) {
          var _props$tabIndex;

          let { ...props
          } = _ref2;
          // Note: Though it's important to make sure that focusing activates a tooltip,
          // it's perfectly reasonable that a child element will be the one that's focused,
          // not this one, so we don't set tabIndex=0
          (_props$tabIndex = props.tabIndex) !== null && _props$tabIndex !== void 0 ? _props$tabIndex : props.tabIndex = -1;
          return useTooltipIdReferencingProps("aria-describedby")(useHasFocusProps(useMergedProps()({
            onPointerEnter,
            onPointerLeave,
            onTouchEnd
          }, props)));
        }

        return {
          useTooltipTriggerProps
        };
      }, [useTooltipIdReferencingProps]);
      const useTooltip = F(function useTooltip() {
        function onPointerEnter(e) {
          setTooltipHasMouseover(true);
        }

        function onPointerLeave(e) {
          setTooltipHasMouseover(false);
        }

        function useTooltipProps(_ref3) {
          let { ...props
          } = _ref3;
          const {
            useHasFocusProps
          } = useHasFocus({
            onFocusedInnerChanged: setTooltipHasFocus
          });
          return useTooltipIdProps(useHasFocusProps(useMergedProps()({
            onPointerEnter,
            onPointerLeave
          }, props)));
        }

        return {
          useTooltipProps
        };
      }, [useTooltipIdProps]);
      return {
        useTooltip,
        useTooltipTrigger,
        isOpen: open,
        getIsOpen: getOpen
      };
    }

    const DemoUseInterval = () => {
        const [interval, setInterval] = l(1000);
        const [fireCount, setFireCount] = l(0);
        useInterval({ interval, callback: () => setFireCount(i => ++i) });
        return (v$1("div", { class: "demo" },
            v$1("label", null,
                "Interval duration: ",
                v$1("input", { type: "number", value: interval, onInput: e => setInterval(e.currentTarget.valueAsNumber) })),
            v$1("div", null,
                "The callback has been called ",
                fireCount,
                " time",
                fireCount === 1 ? "" : "s",
                ".")));
    };

    const RandomWords$1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const RovingChildContext = D(null);
    const DemoUseRovingTabIndex = g(() => {
        const [lastFocusedInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ onLastFocusedInnerChanged: setLastFocusedInner });
        const { useListNavigationChild, currentTypeahead, tabbableIndex, useListNavigationProps, navigateToIndex } = useListNavigation({ shouldFocusOnChange: getLastFocusedInner });
        //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
        return (v$1("div", { className: "demo" },
            v$1("h2", null, "Keyboard & List Navigation"),
            v$1("h3", null,
                v$1("code", null, "useRovingTabIndex")),
            v$1("p", null,
                "Native HTML elements offer fantastic keyboard accessability, but cover a relatively limited number of use cases. There is no native HTML tree element, for example, that allows keyboard navigation of its items, nor is it possible to combine the keyboard navigation behavior of a ",
                v$1("code", null, "<select>"),
                " menu with the menu in a drawer component."),
            v$1("p", null,
                "When coming across a List or a Menu or a RadioGroup or a ToggleButtonGroup or any other \"one component made up of child components\", the usual expected behavior, at least natively, is that tabbing into the component is one action, and tabbing out is another.  Navigating ",
                v$1("em", null, "within"),
                " the component is done with the arrow keys or other methods."),
            v$1("p", null,
                "This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through ",
                v$1("em", null, "every one"),
                " of its child elements is extremely important."),
            v$1("p", null,
                v$1("code", null, "useListNavigation"),
                " wraps up the functionality of a few hooks (",
                v$1("code", null, "useRovingTabIndex"),
                ", ",
                v$1("code", null, "useLinearNavigation"),
                ", ",
                v$1("code", null, "useTypeaheadNavigation"),
                "to allow for ARIA-compliant navigation of lists and other similar components.  For more advanced use cases, you can use the other hooks individually."),
            v$1("p", null,
                v$1("code", null, "useListNavigation"),
                " (and ",
                v$1("code", null, "useRovingTabIndex"),
                ") internally use ",
                v$1("code", null, "useChildManager"),
                ", which is how the child elements and the parent communicate with each other. This means there are virtually no restrictions on how the DOM is set up as long as you can provide the children with the ",
                v$1("code", null, "useListNavigationChild"),
                " hook that's returned, usually with a simple ",
                v$1("code", null, "Context"),
                ". If the child element itself has a focusable element, like a button, it can also be wired up to disable itself Feel free to nest them too, as long as you are aware of your ",
                v$1("code", null, "Context"),
                " management (i.e. remember that you need to create a new ",
                v$1("code", null, "Context"),
                " for each use case)."),
            v$1("label", null,
                "Tabbable index: ",
                v$1("input", { type: "number", value: tabbableIndex ?? undefined, onInput: e => { e.preventDefault(); navigateToIndex(e.currentTarget.valueAsNumber); } })),
            v$1("ul", { ...useHasFocusProps(useListNavigationProps({})) },
                v$1(RovingChildContext.Provider, { value: useListNavigationChild }, Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        yield v$1(DemoUseRovingTabIndexChild, { index: i, key: i });
                    }
                })()))),
            currentTypeahead && v$1("div", null,
                "Typeahead: ",
                currentTypeahead)));
    });
    const DemoUseRovingTabIndexChild = g((({ index }) => {
        const [randomWord] = useState(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
        const useRovingTabIndexChild = T$1(RovingChildContext);
        const text = `${randomWord} This is item #${index + 1}`;
        const { useListNavigationChildProps, useListNavigationSiblingProps, tabbable } = useRovingTabIndexChild({ index, text, hidden: (index == 5) });
        const props = useListNavigationChildProps({});
        return (v$1("li", { ...props },
            text,
            " (",
            tabbable ? "Tabbable" : "Not tabbable",
            ")",
            v$1("input", { ...useListNavigationSiblingProps({ type: "checkbox" }) })));
    }));

    const DemoUseTimeout = () => {
        const [timeout, setTimeout] = l(1000);
        const [triggerIndex, setTriggerIndex] = l("");
        const [fireCount, setFireCount] = l(0);
        useTimeout({ timeout, triggerIndex, callback: () => setFireCount(i => ++i) });
        return (v$1("div", { class: "demo" },
            v$1("label", null,
                "Timeout duration: ",
                v$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) })),
            v$1("label", null,
                "Refresh key: ",
                v$1("input", { type: "text", value: triggerIndex, onInput: e => setTriggerIndex(e.currentTarget.value) })),
            v$1("div", null,
                "The callback has been called ",
                fireCount,
                " time",
                fireCount === 1 ? "" : "s",
                ".")));
    };

    const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const DemoUseDroppable = () => {
        const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, useDroppableProps, dropError } = useDroppable({ effect: "copy" });
        useMergedProps()({}, { ref: s(null) });
        const p = useDroppableProps({ className: "demo droppable" });
        p.ref;
        return (v$1("div", { ...p },
            droppedStrings != null && v$1("div", null,
                "Data dropped: ",
                v$1("ul", null, Object.entries(droppedStrings).map(([type, value]) => v$1("li", null,
                    type,
                    ": ",
                    value)))),
            droppedFiles != null && v$1("div", null,
                "Files dropped: ",
                v$1("table", null,
                    v$1("thead", null,
                        v$1("tr", null,
                            v$1("th", null, "Name"),
                            v$1("th", null, "Size"),
                            v$1("th", null, "Type"),
                            v$1("th", null, "Last modified"))),
                    v$1("tbody", null, droppedFiles.map(f => v$1("tr", null,
                        v$1("td", null, f.name),
                        f.data.byteLength,
                        v$1("td", null, f.type),
                        v$1("td", null, new Date(f.lastModified ?? 0))))))),
            v$1("hr", null),
            stringsForConsideration != null && v$1("div", null,
                "Data being considered: ",
                v$1("ul", null, Array.from(stringsForConsideration).map(type => v$1("li", null, type)))),
            filesForConsideration != null && v$1("div", null,
                "Files being considered: ",
                v$1("ul", null, filesForConsideration.map(f => v$1("li", null, JSON.stringify(f))))),
            v$1("hr", null),
            dropError && v$1("div", null, dropError instanceof Error ? dropError.message : JSON.stringify(dropError))));
    };
    const DemoUseDraggable = () => {
        const { dragging, useDraggableProps, lastDropEffect, getLastDropEffect, getDragging } = useDraggable({ data: { "text/plain": "This is custom draggable content of type text/plain." } });
        return (v$1("div", { ...useDraggableProps({ className: "demo" }) }, "Draggable content"));
    };
    const DemoUseFocusTrap = g(({ depth }) => {
        const [active, setActive] = useState(false);
        const { useFocusTrapProps } = useFocusTrap({ trapActive: active });
        const divProps = useFocusTrapProps({ ref: undefined, className: "focus-trap-demo" });
        if (depth == 2)
            return v$1("div", null);
        return (v$1("div", { className: "demo" },
            v$1("label", null,
                "Active: ",
                v$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } })),
            v$1("div", { ...divProps },
                v$1(DemoUseFocusTrapChild, { active: active, setActive: setActive, depth: depth ?? 0 }))));
    });
    const DemoUseFocusTrapChild = g(({ setActive, active, depth }) => {
        return (v$1(d, null,
            v$1("button", null, "Button 1"),
            v$1("button", null, "Button 2"),
            v$1("button", null, "Button 3"),
            v$1("label", null,
                "Active: ",
                v$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } }))));
    });
    const UseAccordionSectionContext = D(null);
    const DemoUseAccordion = g(() => {
        const [expandedIndex, setExpandedIndex] = useState(0);
        const { useAriaAccordionSection } = useAriaAccordion({ expandedIndex, setExpandedIndex });
        return (v$1(UseAccordionSectionContext.Provider, { value: useAriaAccordionSection },
            v$1("div", { className: "demo" },
                v$1("div", null,
                    v$1(DemoAccordionSection, { index: 0 }),
                    v$1(DemoAccordionSection, { index: 1 }),
                    v$1(DemoAccordionSection, { index: 2 })))));
    });
    const DemoAccordionSection = g(({ index }) => {
        const useAccordionSection = T$1(UseAccordionSectionContext);
        const { expanded, useAriaAccordionSectionBody, useAriaAccordionSectionHeader } = useAccordionSection({ index });
        const { useAriaAccordionSectionBodyProps } = useAriaAccordionSectionBody();
        const { useAriaAccordionSectionHeaderProps } = useAriaAccordionSectionHeader({ tag: "button" });
        const p = useAriaAccordionSectionBodyProps({ className: "accordion-section-body", hidden: !expanded });
        p.id;
        return (v$1("div", { className: "accordion-section" },
            v$1("button", { ...useAriaAccordionSectionHeaderProps({ className: "accordion-section-header" }) },
                "Header #",
                index + 1),
            v$1("div", { ...p },
                v$1("p", null,
                    "Body content #",
                    index + 1),
                v$1("p", null, RandomWords.join(" ")))));
    });
    const DemoUseCheckbox = g(() => {
        return (v$1(d, null,
            v$1("div", { className: "demo" },
                v$1(Checkbox1, null),
                v$1(Checkbox2, null)),
            v$1(DemoUseCheckboxGroup, null)));
    });
    const Checkbox1 = g(() => {
        const [checked, setChecked] = useState(false);
        const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ disabled: false, checked, labelPosition: "separate", onInput: e => setChecked(e[EventDetail].checked) });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        return (v$1("div", null,
            v$1("input", { ...useCheckboxInputElementProps({ type: "checkbox", }) }),
            v$1("label", { ...useCheckboxLabelElementProps({}) }, "Label")));
    });
    const Checkbox2 = g(() => {
        const [checked, setChecked] = useState(false);
        const { useCheckboxLabelElement, useCheckboxInputElement } = useAriaCheckbox({ disabled: false, labelPosition: "wrapping", onInput: e => setChecked(e[EventDetail].checked), checked });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        return (v$1("div", null,
            v$1("label", { ...useCheckboxLabelElementProps({}) },
                v$1("input", { ...useCheckboxInputElementProps({ type: "checkbox" }) }),
                " Label")));
    });
    const CheckboxGroupContext = D(null);
    const DemoUseCheckboxGroup = g(() => {
        const onUpdateChildren = (event) => {
            const value = event[EventDetail].childrenChecked;
            let selectedValues = new Set();
            for (let i = 0; i < 10; ++i) {
                if (value === false) ;
                else if (value === true)
                    selectedValues.add(i);
                else if (value.get(i) === true)
                    selectedValues.add(i);
            }
            setSelectedValues(selectedValues);
        };
        const { useHasFocusProps, getFocusedInner } = useHasFocus({});
        const { useCheckboxGroupParentProps: useCheckboxGroupCheckboxProps, useCheckboxGroupChild, parentIsChecked: selfIsChecked, parentPercentChecked: percentChecked, onCheckboxGroupParentInput: onCheckboxGroupInput } = useCheckboxGroup({ shouldFocusOnChange: getFocusedInner, onUpdateChildren });
        const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ checked: selfIsChecked, disabled: false, labelPosition: "separate", onInput: onCheckboxGroupInput });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        const [selectedValues, setSelectedValues] = useState(new Set());
        return v$1("div", { class: "demo" },
            v$1(CheckboxGroupContext.Provider, { value: useCheckboxGroupChild },
                v$1("div", null,
                    v$1("input", { ...useCheckboxInputElementProps(useCheckboxGroupCheckboxProps({})) }),
                    v$1("label", { ...useCheckboxLabelElementProps({}) }, "All checked?")),
                v$1("div", { ...useHasFocusProps({ style: { "display": "flex", "flexDirection": "column" } }) }, Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        function setSelected2(selected) {
                            setSelectedValues(selectedValues => {
                                let next = new Set(selectedValues);
                                if (selected && !next.has(i)) {
                                    next.add(i);
                                    return next;
                                }
                                else if (!selected && next.has(i)) {
                                    next.delete(i);
                                    return next;
                                }
                                return selectedValues;
                            });
                        }
                        yield v$1(DemoUseCheckboxGroupChild, { key: i, index: i, checked: !!selectedValues.has(i), setChecked: setSelected2 });
                    }
                })()))));
    });
    const DemoUseCheckboxGroupChild = g(({ index, checked, setChecked }) => {
        const { randomId } = useRandomId();
        const useCheckboxGroupChild = T$1(CheckboxGroupContext);
        let text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""}`;
        const { tabbable, useCheckboxGroupChildProps } = useCheckboxGroupChild({ index, text, checked, id: randomId });
        text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""} ${tabbable ? "(tabbble)" : ""}`;
        const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ checked, disabled: false, labelPosition: "separate", onInput: e => { setChecked(e[EventDetail].checked); } });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        return (v$1("div", null,
            v$1("input", { ...useCheckboxInputElementProps(useCheckboxGroupChildProps({})) }),
            v$1("label", { ...useCheckboxLabelElementProps({}) }, text)));
    });
    const DemoUseDialog = g(() => {
        const onClose = (() => setOpen(false));
        const [open, setOpen] = useState(false);
        const { useDialogBackdrop, useDialogBody, useDialogProps, useDialogTitle } = useAriaDialog({ open, onClose });
        const { useDialogBackdropProps } = useDialogBackdrop();
        const { useDialogBodyProps } = useDialogBody({ descriptive: true });
        const { useDialogTitleProps } = useDialogTitle();
        return (v$1("div", { class: "demo" },
            v$1("label", null,
                v$1("input", { type: "checkbox", checked: open, onInput: e => { e.preventDefault(); setOpen(e.currentTarget.checked); } })),
            v$1("div", { ...useDialogBackdropProps({ hidden: !open }) },
                v$1("div", { ...useDialogProps({}) },
                    v$1("div", { ...useDialogTitleProps({}) }, "Dialog Title"),
                    v$1("div", { ...useDialogBodyProps({}) },
                        v$1("p", { tabIndex: -1 }, "Dialog body content"),
                        v$1("p", null, RandomWords.join(" ")),
                        v$1("p", null, RandomWords.join(" ")),
                        v$1("p", null, RandomWords.join(" ")),
                        v$1("p", null,
                            v$1("button", { onClick: onClose }, "Close")))))));
    });
    const ListBoxSingleItemContext = D(null);
    const DemoUseListboxSingle = g(() => {
        const [selectedIndex, setSelectedIndex] = useState(0);
        const { useListboxSingleItem, useListboxSingleLabel, useListboxSingleProps } = useAriaListboxSingle({ selectedIndex, onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectionMode: "activate" });
        return v$1("div", { class: "demo" },
            v$1(ListBoxSingleItemContext.Provider, { value: useListboxSingleItem },
                v$1("ul", { ...useListboxSingleProps({}) }, Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        yield v$1(DemoListboxSingleOption, { key: i, index: i });
                    }
                })()))));
    });
    const DemoListboxSingleOption = g(({ index }) => {
        const { getSelected, selected, tabbable, useListboxSingleItemProps } = T$1(ListBoxSingleItemContext)({ index, text: null, tag: "li" });
        return v$1("li", { ...useListboxSingleItemProps({}) },
            "Number ",
            index + 1,
            " option",
            selected ? " (selected)" : "",
            tabbable ? " (tabbable)" : "");
    });
    const ListBoxMultiItemContext = D(null);
    const DemoUseListboxMulti = g(() => {
        const { useListboxMultiItem, useListboxMultiLabel, useListboxMultiProps, currentTypeahead } = useAriaListboxMulti({});
        const [selectedValues, setSelectedValues] = useState(new Set());
        return v$1("div", { class: "demo" },
            v$1(ListBoxMultiItemContext.Provider, { value: useListboxMultiItem },
                v$1("ul", { ...useListboxMultiProps({}) }, Array.from((function* () {
                    for (let i = 0; i < 10; ++i) {
                        function setSelected2(selected) {
                            setSelectedValues(selectedValues => {
                                let next = new Set(selectedValues);
                                if (selected && !next.has(i)) {
                                    next.add(i);
                                    return next;
                                }
                                else if (!selected && next.has(i)) {
                                    next.delete(i);
                                    return next;
                                }
                                return selectedValues;
                            });
                        }
                        yield v$1(DemoListboxMultiOption, { key: i, index: i, selected: !!selectedValues.has(i), setSelected: setSelected2 });
                    }
                })())),
                currentTypeahead != null && v$1("p", null, currentTypeahead)));
    });
    const MenuItemContext = D(null);
    const DemoListboxMultiOption = g(({ index, selected, setSelected }) => {
        let text = `Number ${index + 1} option${selected ? " (selected)" : ""}`;
        const { tabbable, useListboxMultiItemProps } = T$1(ListBoxMultiItemContext)({ tag: "li", index, text, onSelect: e => setSelected(e[EventDetail].selected), selected });
        text = `Number ${index + 1} option${selected ? " (selected)" : ""}${tabbable ? " (tabbable)" : ""}`;
        return v$1("li", { ...useListboxMultiItemProps({}) }, text);
    });
    const DemoMenu = g(() => {
        const [open, setOpen] = useState(false);
        const onClose = () => setOpen(false);
        const onOpen = () => setOpen(true);
        const { useHasFocusProps, getFocusedInner: getMenuFocusedInner } = useHasFocus({});
        const { useMenuButton, useMenuItem, useMenuProps } = useAriaMenu({ open, onClose, onOpen, shouldFocusOnChange: getMenuFocusedInner });
        const { useMenuButtonProps } = useMenuButton({ tag: "button" });
        return (v$1("div", { class: "demo" },
            v$1(MenuItemContext.Provider, { value: useMenuItem },
                v$1("button", { ...useMenuButtonProps({ onClick: e => setOpen(open => !open) }) }, "Open menu"),
                v$1("ul", { ...useMenuProps(useHasFocusProps({})), hidden: !open },
                    v$1(DemoMenuItem, { index: 0 }),
                    v$1(DemoMenuItem, { index: 1 }),
                    v$1(DemoMenuItem, { index: 2 })))));
    });
    const DemoMenuItem = g(({ index }) => {
        const useAriaMenuItem = T$1(MenuItemContext);
        const { useMenuItemProps } = useAriaMenuItem({ index, text: null });
        return v$1("li", { ...useMenuItemProps({}) },
            "Item ",
            index + 1);
    });
    const TabContext = D(null);
    const TabPanelContext = D(null);
    const DemoTabs = g(() => {
        const [selectedIndex, setSelectedIndex] = useState(0);
        const [selectionMode, setSelectionMode] = useState("focus");
        const { useTabPanel, useTabsLabel, useTab, useTabsList } = useAriaTabs({ onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectedIndex, selectionMode, orientation: "block" });
        const { useTabListProps } = useTabsList();
        return (v$1(TabContext.Provider, { value: useTab },
            v$1(TabPanelContext.Provider, { value: useTabPanel },
                v$1("div", { class: "demo" },
                    v$1("label", null,
                        v$1("input", { type: "checkbox", checked: selectionMode == "focus", onInput: (e) => { e.preventDefault(); setSelectionMode(e.currentTarget.checked ? "focus" : "activate"); } }),
                        " Activate on focus?"),
                    v$1("ul", { ...useTabListProps({}) },
                        v$1(DemoTab, { index: 0 }),
                        v$1(DemoTab, { index: 1 }),
                        v$1(DemoTab, { index: 2 }),
                        v$1(DemoTab, { index: 3 }),
                        v$1(DemoTab, { index: 4 })),
                    v$1("div", null,
                        v$1(DemoTabPanel, { index: 0 }),
                        v$1(DemoTabPanel, { index: 1 }),
                        v$1(DemoTabPanel, { index: 2 }),
                        v$1(DemoTabPanel, { index: 3 }),
                        v$1(DemoTabPanel, { index: 4 }))))));
    });
    const DemoTab = g(({ index }) => {
        const useTab = T$1(TabContext);
        const { useTabProps, selected } = useTab({ index, text: null, tag: "li" });
        return (v$1(d, null,
            v$1("li", { ...useTabProps({}) },
                "Tab #",
                index + 1,
                " (",
                `Selected: ${selected}`,
                ")")));
    });
    const DemoTabPanel = g(({ index }) => {
        const useTabPanel = T$1(TabPanelContext);
        const { useTabPanelProps, visible } = useTabPanel({ index });
        return (v$1("div", { ...useTabPanelProps({ hidden: !visible }) },
            v$1("p", null,
                "Tab panel content #",
                index + 1,
                " (",
                `Selected: ${visible}`,
                ")."),
            v$1("p", null, RandomWords.slice(0, Math.floor(RandomWords.length / (index + 1))).join(" "))));
    });
    const DemoTooltip = g(() => {
        const { useTooltip, useTooltipTrigger, isOpen } = useAriaTooltip({});
        const { useTooltipProps } = useTooltip();
        const { useTooltipTriggerProps } = useTooltipTrigger();
        return (v$1("div", { class: "demo" },
            v$1("p", null,
                "This is a paragraph with a ",
                v$1("span", { ...useTooltipTriggerProps({}) }, "tooltip right here."),
                v$1("span", { ...useTooltipProps({ hidden: !isOpen }) }, "This is the tooltip content."))));
    });
    /*
    const DemoTable = memo(() => {

        const { useTableBody, useTableFoot, useTableHead, useTableProps, useTableRow } = useTable<
            HTMLTableElement, HTMLTableSectionElement, HTMLTableSectionElement, HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, HTMLTableCellElement>({});

        const { useTableHeadProps } = useTableHead({});
        const { useTableBodyProps } = useTableBody({});

        const rows: VNode<any>[] = Array.from(function* () {
            for (let i = 0; i < 10; ++i) {
                yield <TableRow rowIndex={i + 1} />;
            }
        }());


        return (
            <TableRowContext.Provider value={useTableRow}>
                <table {...useTableProps({})}>
                    <thead {...useTableHeadProps({ children: [<TableHeaderRow rowIndex={0} />] })} />
                    <tbody {...useTableBodyProps({ children: rows })} />
                </table>
            </TableRowContext.Provider>
        )

    });

    const TableRowContext = createContext<UseTableRow<HTMLTableRowElement, HTMLTableCellElement, HTMLTableCellElement>>(null!);


    const TableRow = memo(function TableRow({ rowIndex }: { rowIndex: number }) {
        const i = rowIndex - 1;
        const useTableRow = useContext(TableRowContext);
        const { rowIndexAsSorted, rowIndexAsUnsorted, useTableCell, useTableRowProps } = useTableRow({ rowIndex, location: "body" });
        const date = new Date(new Date().getFullYear(), new Date().getMonth(), (i * 7) ** 2);

        const { useTableCellProps: useTableCellProps1, useTableCellDelegateProps: useTableCellDelegateProps1 } = useTableCell({ columnIndex: 0, value: i });
        const { useTableCellProps: useTableCellProps2, useTableCellDelegateProps: useTableCellDelegateProps2 } = useTableCell({ columnIndex: 1, value: RandomWords[i] });
        const { useTableCellProps: useTableCellProps3, useTableCellDelegateProps: useTableCellDelegateProps3 } = useTableCell({ columnIndex: 2, value: date });
        return (
            <tr {...useTableRowProps({ "data-index": rowIndex } as {})}>
                <td {...useTableCellProps1(useTableCellDelegateProps1({}))}>{i}</td>
                <td {...useTableCellProps2(useTableCellDelegateProps2({}))}>{RandomWords[i]}</td>
                <td {...useTableCellProps3(useTableCellDelegateProps3({}))}>{date.toLocaleDateString()}</td>
            </tr>
        )
    })


    const TableHeaderRow = memo(function TableHeaderRow({ rowIndex }: { rowIndex: number }) {
        const useTableRow = useContext(TableRowContext);
        const { useTableHeadCell, useTableRowProps: useTableHeadRowProps } = useTableRow({ rowIndex, location: "head" });
        const { useTableHeadCellProps: useTableHeadCellProps1, useTableHeadCellDelegateProps: useTableHeadCellDelegateProps1, sortDirection: sortDirection1 } = useTableHeadCell({ tag: "th", columnIndex: 0 });
        const { useTableHeadCellProps: useTableHeadCellProps2, useTableHeadCellDelegateProps: useTableHeadCellDelegateProps2, sortDirection: sortDirection2 } = useTableHeadCell({ tag: "th", columnIndex: 1 });
        const { useTableHeadCellProps: useTableHeadCellProps3, useTableHeadCellDelegateProps: useTableHeadCellDelegateProps3, sortDirection: sortDirection3 } = useTableHeadCell({ tag: "th", columnIndex: 2 });


        return (<tr {...useTableHeadRowProps({ "data-index": rowIndex } as {})}>
            <th {...useTableHeadCellProps1(useTableHeadCellDelegateProps1({}))}>Number {sortDirection1}</th>
            <th {...useTableHeadCellProps2(useTableHeadCellDelegateProps2({}))}>String {sortDirection2}</th>
            <th {...useTableHeadCellProps3(useTableHeadCellDelegateProps3({}))}>Date {sortDirection3}</th>
        </tr>)
    })*/
    const Component = () => {
        return v$1("div", { class: "flex", style: { flexWrap: "wrap" } },
            v$1(DemoTooltip, null),
            v$1(DemoTabs, null),
            v$1(DemoUseTimeout, null),
            v$1(DemoUseInterval, null),
            v$1(DemoMenu, null),
            v$1(DemoUseListboxSingle, null),
            v$1(DemoUseListboxMulti, null),
            v$1(DemoUseCheckbox, null),
            v$1(DemoUseAccordion, null),
            v$1(DemoUseDialog, null),
            v$1(DemoUseRovingTabIndex, null),
            v$1(DemoUseFocusTrap, null),
            v$1(DemoUseDroppable, null),
            v$1(DemoUseDraggable, null),
            v$1("input", null));
    };
    requestAnimationFrame(() => {
        S$1(v$1(Component, null), document.getElementById("root"));
    });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXRpbWVvdXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1saXN0LW5hdmlnYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZHJhZ2dhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWRyb3BwYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ldmVudC1oYW5kbGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWFjdGl2ZS1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWhhcy1mb2N1cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1pbnRlcnZhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWZvY3VzLXRyYXAuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9wcm9wcy5qcyIsIi4uL3VzZS1idXR0b24uanMiLCIuLi91c2UtYWNjb3JkaW9uLmpzIiwiLi4vdXNlLWxhYmVsLmpzIiwiLi4vdXNlLWNoZWNrYm94LmpzIiwiLi4vdXNlLWNoZWNrYm94LWdyb3VwLmpzIiwiLi4vdXNlLW1vZGFsLmpzIiwiLi4vdXNlLWRpYWxvZy5qcyIsIi4uL3VzZS1saXN0Ym94LW11bHRpLmpzIiwiLi4vdXNlLWxpc3Rib3gtc2luZ2xlLmpzIiwiLi4vdXNlLW1lbnUuanMiLCIuLi91c2UtdGFicy5qcyIsIi4uL3VzZS10b29sdGlwLmpzIiwiZGVtb3MvdXNlLWludGVydmFsLnRzeCIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS10aW1lb3V0LnRzeCIsImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxyLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmaChvW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsQShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gQShuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEYobix0KXtyZXR1cm4gbz04LEEoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gVChuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIGQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLEEgYXMgdXNlTWVtbyxGIGFzIHVzZUNhbGxiYWNrLFQgYXMgdXNlQ29udGV4dCxkIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogRGVidWcgaG9vay5cbiAqXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRW5zdXJlU3RhYmlsaXR5KC4uLnZhbHVlcykge1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoLCAwKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xuICAgIHJldHVybjtcbiAgICBmdW5jdGlvbiB1c2VIZWxwZXIodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICAgICAgY29uc3QgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkgPSB1c2VSZWYodmFsdWUpO1xuICAgICAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnQgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhpcyBob29rIHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCB2YWx1ZSB0aGF0IHdhcyBjaGVja2VkLmApO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFNpbWlsYXIgdG8gYHVzZVN0YXRlYCwgYnV0IGZvciB2YWx1ZXMgdGhhdCBhcmVuJ3QgXCJyZW5kZXItaW1wb3J0YW50XCIgJm5kYXNoOyB1cGRhdGVzIGRvbid0IGNhdXNlIGEgcmUtcmVuZGVyIGFuZCBzbyB0aGUgdmFsdWUgc2hvdWxkbid0IGJlIHVzZWQgZHVyaW5nIHJlbmRlciAodGhvdWdoIGl0IGNlcnRhaW5seSBjYW4sIGF0IGxlYXN0IGJ5IHJlLXJlbmRlcmluZyBhZ2FpbikuXG4gKlxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKlxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpO1xuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbGV0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZXJlIGFyZSBhIGNvdXBsZSBwbGFjZXMgd2hlcmUgd2UnZCBsaWtlIHRvIHVzZSBvdXIgaW5pdGlhbFxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxuICAgIC8vIGdldFZhbHVlIGlzIGNhbGxlZC5cbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGluaXRpYWxWYWx1ZSwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcpID0+IHtcbiAgICAgICAgY29uc3QgcHJldkRlcCA9IHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVwID0gYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcocHJldkRlcCkgOiBhcmc7XG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBzaG91bGRuJ3QgY2FsbCBnZXRWYWx1ZSBkdXJpbmcgb25DaGFuZ2VcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmQgY2xlYW51cCBmdW5jdGlvblxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGRlcCwgcHJldkRlcCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkZXA7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59XG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXBhc3NpdmUtc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xuICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XG59XG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgIF07XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1syXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMTNdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cblxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdIGFzIGNvbnN0O1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcblxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSk7XG59XG4vKipcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIHJocy5zdHlsZTtcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QobGhzPy5zdHlsZSkgfSwgcmhzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xocy5zdHlsZX07JHtyaHM/LnN0eWxlID8/IFwiXCJ9YDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gbWVyZ2UgdHdvIHByb3BzIHdpdGggdGhlIHNhbWUgbmFtZTogJHtzdHJ9YCk7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ubGhzLFxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcbiAgICAgICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuLypcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcblxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTM6IE0xID0gMDtcblxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTY6IE0yID0gMDtcblxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuXG5cbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XG5cblxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxufVxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxuKi8gXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xuICAgIGNvbnN0IG9uRWxlbWVudENoYW5nZSA9IGFyZ3M/Lm9uRWxlbWVudENoYW5nZTtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRWxlbWVudENoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgZnVuY3Rpb24gZm9vKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwMS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmZ1bmN0aW9uIGV4dHJhY3RFbGVtZW50U2l6ZShlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV0cmlldmUgdGhlIHNpemUgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXRcIik7XG4gICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgIHJldHVybiAoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xufVxuZnVuY3Rpb24gcmV0dXJuTnVsbCgpIHsgcmV0dXJuIG51bGw7IH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh7IGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSk7XG4gICAgY29uc3QgW2dldFNpemUsIHNldFNpemVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU2l6ZUNoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgY29uc3QgY3VycmVudE9ic2VydmVCb3ggPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBuZWVkQU5ld09ic2VydmVyID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG9ic2VydmVCb3gpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzZXRTaXplKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiAoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4gbmVlZEFOZXdPYnNlcnZlcihlLCBnZXRPYnNlcnZlQm94Py4oKSksIFtdKSB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2ZUJveCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgIT09IGdldE9ic2VydmVCb3goKSlcbiAgICAgICAgICAgICAgICBuZWVkQU5ld09ic2VydmVyKGdldEVsZW1lbnQoKSwgZ2V0T2JzZXJ2ZUJveCgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIHVzZUVsZW1lbnRTaXplUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wc1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWxlbWVudC1zaXplLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlRWxlbWVudFNpemUgfSBmcm9tIFwiLi91c2UtZWxlbWVudC1zaXplXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcbn1cbi8qKlxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxuICpcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cbiAqXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxuICpcbiAqIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMvI2xvZ2ljYWwtdG8tcGh5c2ljYWxcbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAqICogYGdldExvZ2ljYWxEaXJlY3Rpb25gOiByZXRyaWV2ZXMgYSBgTG9naWNhbERpcmVjdGlvbkluZm9gIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gKEZ1bmN0aW9uIGlzIGNvbnN0YW50IGJldHdlZW4gcmVuZGVycylcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cbiAqICogYGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25gOiAgQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImlubGluZVwiIG9yIFwiYmxvY2tcIiB0byBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlKTtcbiAgICBjb25zdCBbZ2V0Q29tcHV0ZWRTdHlsZXMsIHNldENvbXB1dGVkU3R5bGVzXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0Q29tcHV0ZWRTdHlsZXMod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICB9KTtcbiAgICAvLyBUT0RPOiBUaGVyZSdzIG5vIHdheSB0byByZWZyZXNoIHdoaWNoIHdyaXRpbmcgbW9kZSB3ZSBoYXZlIG9uY2UgbW91bnRlZC5cbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xuICAgIC8vICAgQi4gQ2FsbGluZyBnZXRDb21wdXRlZFN0eWxlIGFmdGVyIGV2ZXJ5IHJlbmRlciBmb3IgZXZlcnkgZWxlbWVudCBnZXRzIGV4cGVuc2l2ZSBmYXN0IGFuZFxuICAgIC8vICAgQy4gSXMgbm90IG5lY2Vzc2FyeSBmb3IgbW9zdCB1c2UgY2FzZXMgdGhhdCB3aWxsIG5ldmVyIHN3aXRjaCB3cml0aW5nLW1vZGUgd2l0aGluIGEgc2luZ2xlIGNvbXBvbmVudFxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxuICAgIC8vXG4gICAgLy8gQXMgYSBzb2x1dGlvbiwgaGVyZSdzIGEgY2hlYXAgd29ya2Fyb3VuZCB0aGF0IGNoZWNrcyB3aGVuIHRoZSBlbGVtZW50J3Mgc2l6ZSBoYXMgY2hhbmdlZCxcbiAgICAvLyBhbmQgaWYgc28sIHRlc3RzIGlmIHRoZSB3cml0aW5nIG1vZGUgaGFzIGNoYW5nZWQgdG9vLlxuICAgIC8vXG4gICAgLy8gVGhpcyB3aWxsIHdvcmsgZm9yIGF0IGxlYXN0IHNvbWUgbnVtYmVyIG9mIGNhc2VzLCBidXQgYSBiZXR0ZXIgc29sdXRpb24gaXMgc3RpbGwgbmVlZGVkLlxuICAgIGNvbnN0IHsgdXNlRWxlbWVudFNpemVQcm9wcyB9ID0gdXNlRWxlbWVudFNpemUoeyBvblNpemVDaGFuZ2U6IHVzZUNhbGxiYWNrKF8gPT4gb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlPy4oZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKSksIFtdKSB9KTtcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlcygpO1xuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZXMpIHtcbiAgICAgICAgICAgIGxldCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XG4gICAgICAgICAgICBsZXQgZCA9IGNvbXB1dGVkU3R5bGVzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGxldCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXG4gICAgICAgICAgICAgICAgZCA9IFwibHRyXCI7XG4gICAgICAgICAgICByZXR1cm4gKHsgLi4uV3JpdGluZ01vZGVzW3cgfHwgXCJob3Jpem9udGFsLXRiXCJdW2QgfHwgXCJsdHJcIl0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBcImlubGluZVwiO1xuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stc3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMl1dO1xuICAgICAgICAgICAgY2FzZSBcImlubGluZS1zdGFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiaW5saW5lLWVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVsyXV07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gXCJpbmxpbmUtc3RhcnRcIjtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxMZWZ0VG9wKGRpcikgeyBpZiAoZGlyID09PSBcImx0clwiIHx8IGRpciA9PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2lkdGhcIjsgaWYgKGRpciA9PT0gXCJidHRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMiA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pKTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VSZWZFbGVtZW50UHJvcHModXNlRWxlbWVudFNpemVQcm9wcyhwcm9wcykpLCBbXSksXG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsU2l6ZTogY29udmVydEVsZW1lbnRTaXplLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaWRlLFxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbFNpZGVcbiAgICB9O1xufVxuLy8gSGVscGVyIGZvciBleHRyYWN0aW5nIGluZm8gZnJvbSBcImx0clwiLCBcInR0YlwiLCBldGMuXG5jb25zdCBNID0ge1xuICAgIHQ6IFwidG9wXCIsXG4gICAgYjogXCJib3R0b21cIixcbiAgICBsOiBcImxlZnRcIixcbiAgICByOiBcInJpZ2h0XCJcbn07XG47XG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xuICAgIC4uLkhvcml6b250YWxUYkx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXG59O1xuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcbn07XG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXG59O1xuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xuY29uc3QgVmVydGljYWxMckx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbFJ0bCxcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xuICAgIC4uLlZlcnRpY2FsTHJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcbn07XG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xuICAgIC4uLlNpZGV3YXlzTHRMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXG59O1xuY29uc3QgVmVydGljYWxSbCA9IHtcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXG59O1xuY29uc3QgVmVydGljYWxMciA9IHtcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXG59O1xuY29uc3QgU2lkZXdheXNSbCA9IHtcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXG59O1xuY29uc3QgU2lkZXdheXNMciA9IHtcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXG59O1xuY29uc3QgV3JpdGluZ01vZGVzID0ge1xuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZVAocHJldlZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFZhbHVlID0gY2FsbGJhY2socHJldlZhbHVlKTtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgICAgc2V0U3RhdGVQKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSB8fCAodHlwZW9mIHN0YXRlID09PSBcIm51bWJlclwiICYmIGlzTmFOKHN0YXRlKSkpO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBnZXRTdGF0ZV07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5mdW5jdGlvbiBiYXNlNjQodmFsdWUpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG4vKipcbiAqIFJldHVybnMgYSBob29rIHRoYXQgbW9kaWZpZXMgYSBzZXQgb2YgcHJvcHMgdG8gcHJvdmlkZSBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCBpZiBvbmUgd2FzIG5vdCBwcm92aWRlZC5cbiAqXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEFuZCB0aGUgcmFuZG9tbHktZ2VuZXJhdGVkIGlkIGl0c2VsZiBpcyBhbHNvIHByb3ZpZGVkIGluIGNhc2UgeW91IHdhbnQgdG8gaGFuZGxlIHRoZSBsb2dpYyB5b3Vyc2VsZiB3aXRob3V0IGB1c2VNZXJnZWRQcm9wc2AuXG4gKlxuICogVW5saWtlIG1vc3Qgb3RoZXIgYHVzZSpQcm9wc2AgaG9va3MsIHRoZXNlIGFyZSBtb3N0bHkgc3RhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XG4gICAgY29uc3QgW3JhbmRvbUlkLCBzZXRSYW5kb21JZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeCkpO1xuICAgIGNvbnN0IFt3YXRjaFByZWZpeFVwZGF0ZXMsIHNldFdhdGNoUHJlZml4VXBkYXRlcywgZ2V0V2F0Y2hQcmVmaXhVcGRhdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3YXRjaFByZWZpeFVwZGF0ZXMgPSBnZXRXYXRjaFByZWZpeFVwZGF0ZXMoKTtcbiAgICAgICAgaWYgKHdhdGNoUHJlZml4VXBkYXRlcylcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XG4gICAgICAgIHNldFdhdGNoUHJlZml4VXBkYXRlcyh0cnVlKTtcbiAgICB9LCBbcHJlZml4XSk7XG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxuICAgIC8vIFVzZWQgc28gdGhhdCBhbnkgSUQtcmVmZXJlbmNpbmcgcHJvcHMgZG9uJ3QgbmVlZCB0byBwcm92aWRlIHRoZSBzYW1lIHZhbHVlLlxuICAgIC8vXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcbiAgICAvLyB0aGVyZSB3aWxsIGJlIGEgdGVtcG9yYXJ5IG1pc21hdGNoLCBidXQgaXQncyBjb3JyZWN0ZWQgYmVmb3JlIHJlbmRlcmluZyBmaW5pc2hlcy5cbiAgICAvLyBJcyB0aGlzIG9rYXk/XG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCB1c2VSZWZlcmVuY2VkSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJlZmVyZW5jZWRJZFByb3BzKGlkUHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gZnVuY3Rpb24gKHsgW2lkUHJvcE5hbWVdOiBnaXZlbklkLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAoaWRQcm9wTmFtZSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgICAgIHNldFVzZWRJZCh1c2VkSWQyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xuICAgIGNvbnN0IHVzZVJhbmRvbUlkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VSYW5kb21JZFByb3BzKHApIHtcbiAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiaWRcIikocCk7XG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZG9tSWQsXG4gICAgICAgIGlkOiB1c2VkSWQsXG4gICAgICAgIGdldElkOiBnZXRVc2VkSWQsXG4gICAgICAgIHVzZVJhbmRvbUlkUHJvcHMsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzKHN0cikgeyB9XG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xuICAgIGNvbnN0IHsgaWQsIHJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoKTtcbiAgICAvL2NvbnN0IHAxYTogTWVyZ2VkUHJvcHM8eyBpZDogc3RyaW5nIH0sIHsgIH0+ID0gdXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSlcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHAyYiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xuICAgIGNvbnN0IHAzYSA9IHVzZVJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwM2IgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwNGIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwMWIpO1xuICAgIC8vcDFhLmlkO1xuICAgIHAxYi5pZDtcbiAgICBwMmFbXCJmb3JcIl07XG4gICAgcDJiW1wiZm9yXCJdO1xuICAgIHAyY1tcImZvclwiXTtcbiAgICBwM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwM2JbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGFbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBJdCdzIGJlY2F1c2UgaXQgcmVzb2x2ZXMgdG8gXCJpZDogdW5kZWZpbmVkICYgc3RyaW5nXCIgLS0gdGhpcyBzaG91bGRuJ3QgaGFwcGVuXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDFiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDJhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMmIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDNhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDNiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHA0YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDRiLnN0eWxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yYW5kb20taWQuanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xuY29uc3QgcHJldmlvdXNJbnB1dHMgPSBuZXcgTWFwKCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXAoKTtcbmNvbnN0IGNvbW1pdE5hbWUgPSAoXCJfX2NcIiBpbiBvcHRpb25zID8gXCJfX2NcIiA6IFwiY29tbWl0XCIgaW4gb3B0aW9ucyA/IFwiY29tbWl0XCIgOiBcIl9jb21taXRcIiBpbiBvcHRpb25zID8gXCJfY29tbWl0XCIgOiBcIl9fY1wiKTtcbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxuLy8gaXMgYSBwb3N0LXN1c3BlbnNlIHF1ZXN0aW9uLlxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XG4vLyBzbyBgcmVmPXtzb21lU3RhYmxlRnVuY3Rpb259YCB3b3Jrcy5cbi8vIFxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV07XG5jb25zdCBuZXdDb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG4gICAgZm9yIChsZXQgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICpcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xuICAgICAgICB9O1xuICAgIH0sIFtpZF0pO1xufVxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXG4gKlxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG4vKipcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxuICpcbiAqIERvIG5vdCB1c2UgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UhICBgdXNlTGF5b3V0RWZmZWN0YCBpcyBmaW5lIHRob3VnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IGFzIHVzZUVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBXcmFwIHRoZSBuYXRpdmUgYHVzZUVmZmVjdGAgdG8gYWRkIGFyZ3VtZW50c1xuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICogQHBhcmFtIGltcGwgWW91IGNhbiBjaG9vc2Ugd2hldGhlciB0byB1c2UgYHVzZUVmZmVjdGAgb3IgYHVzZUxheW91dEVmZmVjdGAgYnlcbiAqIHBhc3Npbmcgb25lIG9mIHRoZW0gYXMgdGhpcyBhcmd1bWVudC4gQnkgZGVmYXVsdCwgaXQncyBgdXNlRWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cywgaW1wbCA9IHVzZUVmZmVjdE5hdGl2ZSkge1xuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2hhbmdlcyA9IFtdO1xuICAgICAgICBpZiAoaW5wdXRzICYmIHByZXZJbnB1dHMuY3VycmVudCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJbnB1dHMuY3VycmVudFtpXSAhPSBpbnB1dHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBsKGVmZmVjdDIsIGlucHV0cyk7XG59XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCBhcyB1c2VMYXlvdXRFZmZlY3ROYXRpdmUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwiLi91c2UtZWZmZWN0XCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICByZXR1cm4gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCB1c2VMYXlvdXRFZmZlY3ROYXRpdmUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRpbWVvdXQoeyB0aW1lb3V0LCBjYWxsYmFjaywgdHJpZ2dlckluZGV4IH0pIHtcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xuICAgIC8vIFNldCBhbnkgdGltZSB3ZSBzdGFydCB0aW1lb3V0LlxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xuICAgIGNvbnN0IHN0YXJ0VGltZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB0aW1lb3V0SXNOdWxsID0gKHRpbWVvdXQgPT0gbnVsbCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXG4gICAgLy8gcmVzdGFydCB0aGUgdGltZW91dC4gIFRoZSB0aW1lb3V0IGRvZXMgTk9UIHJlc2V0XG4gICAgLy8gd2hlbiB0aGUgZHVyYXRpb24gb3IgY2FsbGJhY2sgY2hhbmdlcywgb25seSB0cmlnZ2VySW5kZXguXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aW1lb3V0SXNOdWxsKSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KHN0YWJsZUNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XG4gICAgY29uc3QgZ2V0RWxhcHNlZFRpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKyhuZXcgRGF0ZSgpKSkgLSAoKyhzdGFydFRpbWVSZWYuY3VycmVudCA/PyBuZXcgRGF0ZSgpKSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdldFJlbWFpbmluZ1RpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4geyBnZXRFbGFwc2VkVGltZSwgZ2V0UmVtYWluaW5nVGltZSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRpbWVvdXQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xuLyoqXG4gKiBXaGVuIHVzZWQgaW4gdGFuZGVtIHdpdGggYHVzZVJvdmluZ1RhYkluZGV4YCwgYWxsb3dzIGNvbnRyb2wgb2ZcbiAqIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHRoZSBhcnJvdyBrZXlzLlxuICpcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgaW5kZXgsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvUHJldiwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlQXJyb3dLZXlzLCBkaXNhYmxlSG9tZUVuZEtleXMgfSkge1xuICAgIG5hdmlnYXRpb25EaXJlY3Rpb24gPz89IFwiZWl0aGVyXCI7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaW5kZXgsIGNoaWxkQ291bnQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3RdKTtcbiAgICAvLyBUaGVzZSBhbGxvdyB1cyB0byBtYW5pcHVsYXRlIHdoYXQgb3VyIGN1cnJlbnQgdGFiYmFibGUgY2hpbGQgaXMuXG4gICAgLypjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpID49IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxPyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSA6ICsraSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA8IDA/IDAgOiAtLWkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoLTEpOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7Ki9cbiAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmRleCk7XG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgdXNlTG9naWNhbERpcmVjdGlvblByb3BzIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKHt9KTtcbiAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBsZXQgYWxsb3dzQmxvY2tOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJibG9ja1wiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XG4gICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIHByb3BzKSk7IH0sIFtdKSxcbiAgICB9O1xufVxuLyoqXG4gKiBBbGxvd3MgZm9yIHRoZSBzZWxlY3Rpb24gb2YgYSBtYW5hZ2VkIGNoaWxkIGJ5IHR5cGluZyB0aGUgZ2l2ZW4gdGV4dCBhc3NvY2lhdGVkIHdpdGggaXQuXG4gKlxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcbiAgICAvLyBGb3IgdHlwZWFoZWFkLCBrZWVwIHRyYWNrIG9mIHdoYXQgb3VyIGN1cnJlbnQgXCJzZWFyY2hcIiBzdHJpbmcgaXMgKGlmIHdlIGhhdmUgb25lKVxuICAgIC8vIGFuZCBhbHNvIGNsZWFyIGl0IGV2ZXJ5IDEwMDAgbXMgc2luY2UgdGhlIGxhc3QgdGltZSBpdCBjaGFuZ2VkLlxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cbiAgICAvLyBBbmQsIGZvciB0aGUgdXNlcidzIHNha2UsIGxldCB0aGVtIGtub3cgd2hlbiB0aGVpciB0eXBlYWhlYWQgY2FuJ3QgbWF0Y2ggYW55dGhpbmcgYW55bW9yZVxuICAgIGNvbnN0IFtjdXJyZW50VHlwZWFoZWFkLCBzZXRDdXJyZW50VHlwZWFoZWFkLCBnZXRDdXJyZW50VHlwZWFoZWFkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcbiAgICBjb25zdCBzb3J0ZWRUeXBlYWhlYWRJbmZvID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbaW52YWxpZFR5cGVhaGVhZCwgc2V0SW52YWxpZFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxuICAgIC8vIEVzc2VudGlhbGx5LCB3aGVuIGFjdGl2ZSwgaWdub3JlIGZ1cnRoZXIga2V5cyBcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHdhaXRpbmcgZm9yIGEgQ29tcG9zaXRpb25FbmQgZXZlbnRcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxuICAgIC8vIChidXQgd2l0aGluIHRoZSBzYW1lIHRhc2ssIHdoaWNoLCBUT0RPLCBjb3VsZCBiZSBicm93c2VyLWRlcGVuZGVudCksXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xuICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIobnVsbCk7XG4gICAgICAgIH1cbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcbiAgICBjb25zdCBjb21wYXJhdG9yU2hhcmVkID0gdXNlU3RhYmxlQ2FsbGJhY2soKHNhZmVMaHMsIHNhZmVSaHMpID0+IHtcbiAgICAgICAgbGV0IGNvbXBhcmU7XG4gICAgICAgIC8vIEZvciB0aGUgcHVycG9zZXMgb2YgdHlwZWFoZWFkLCBvbmx5IGNvbXBhcmUgYSBzdHJpbmcgb2YgdGhlIHNhbWUgc2l6ZSBhcyBvdXIgY3VycmVudGx5IHR5cGVkIHN0cmluZy5cbiAgICAgICAgLy8gQnkgbm9ybWFsaXppbmcgdGhlbSBmaXJzdCwgd2UgZW5zdXJlIHRoaXMgYnl0ZS1ieS1ieXRlIGhhbmRsaW5nIG9mIHJhdyBjaGFyYWN0ZXIgZGF0YSB3b3JrcyBvdXQgb2theS5cbiAgICAgICAgc2FmZUxocyA9IHNhZmVMaHMubm9ybWFsaXplKFwiTkZEXCIpO1xuICAgICAgICBzYWZlUmhzID0gc2FmZVJocy5ub3JtYWxpemUoXCJORkRcIik7XG4gICAgICAgIGlmIChjb2xsYXRvcilcbiAgICAgICAgICAgIGNvbXBhcmUgPSBjb2xsYXRvci5jb21wYXJlKHNhZmVMaHMsIHNhZmVSaHMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb21wYXJlID0gc2FmZUxocy50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoc2FmZVJocy50b0xvd2VyQ2FzZSgpID8/IFwiXCIpO1xuICAgICAgICByZXR1cm4gY29tcGFyZTtcbiAgICB9KTtcbiAgICBjb25zdCBpbnNlcnRpbmdDb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XG4gICAgICAgIGxldCBjb21wYXJlO1xuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJhdG9yU2hhcmVkKGxocywgcmhzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaHMgLSByaHM7XG4gICAgfSk7XG4gICAgY29uc3QgdHlwZWFoZWFkQ29tcGFyYXRvciA9IHVzZVN0YWJsZUNhbGxiYWNrKChsaHMsIHJocykgPT4ge1xuICAgICAgICBsZXQgY29tcGFyZTtcbiAgICAgICAgaWYgKHR5cGVvZiBsaHMgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHJocy50ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvLyBEdXJpbmcgdHlwZWFoZWFkLCBhbGwgc3RyaW5ncyBsb25nZXIgdGhhbiBvdXJzIHNob3VsZCBiZSB0cnVuY2F0ZWRcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhleSdyZSBhbGwgY29uc2lkZXJlZCBlcXVhbGx5IGJ5IHRoYXQgcG9pbnQuXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyYXRvclNoYXJlZChsaHMsIHJocy50ZXh0LnN1YnN0cmluZygwLCBsaHMubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxocyAtIHJocztcbiAgICB9KTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25TdGFydCA9IChlKSA9PiB7IHNldEltZUFjdGl2ZSh0cnVlKTsgfTtcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvbkVuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihlLmRhdGEpO1xuICAgICAgICAgICAgc2V0SW1lQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZUFjdGl2ZSA9IGdldEltZUFjdGl2ZSgpO1xuICAgICAgICAgICAgbGV0IGtleSA9IGUua2V5O1xuICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSAmJiBlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IHNwbGl0IFVURi0xNiBzdXJyb2dhdGVzLlxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlYWhlYWQodCA9PiB0ID09PSBudWxsID8gbnVsbCA6IFsuLi50XS5yZXZlcnNlKCkuc2xpY2UoMSkucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBrZXkgcHJvcGVydHkgcmVwcmVzZW50cyB0aGUgdHlwZWQgY2hhcmFjdGVyIE9SIHRoZSBcIm5hbWVkIGtleSBhdHRyaWJ1dGVcIiBvZiB0aGUga2V5IHByZXNzZWQuXG4gICAgICAgICAgICAvLyBUaGVyZSdzIG5vIGRlZmluaXRlIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlLCBidXQgZm9yIGFsbCBpbnRlbnRzIGFuZCBwdXJwb3Nlc1xuICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG5vIG9uZS1jaGFyYWN0ZXIgbmFtZXMsIGFuZCB0aGVyZSBhcmUgbm8gbm9uLUFTQ0lJLWFscGhhIG5hbWVzLlxuICAgICAgICAgICAgLy8gVGh1cywgYW55IG9uZS1jaGFyYWN0ZXIgb3Igbm9uLUFTQ0lJIHZhbHVlIGZvciBga2V5YCBpcyAqYWxtb3N0IGNlcnRhaW5seSogYSB0eXBlZCBjaGFyYWN0ZXIuXG4gICAgICAgICAgICBjb25zdCBpc0NoYXJhY3RlcktleSA9IChrZXkubGVuZ3RoID09PSAxIHx8ICEvXltBLVphLXpdLy50ZXN0KGtleSkpO1xuICAgICAgICAgICAgaWYgKGlzQ2hhcmFjdGVyS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcIiBcIiAmJiAoZ2V0Q3VycmVudFR5cGVhaGVhZCgpID8/IFwiXCIpLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBiZWNhdXNlIGEgc3BhY2ViYXIgY2FuJ3QgZXZlciBcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhdGUgYSB0eXBlYWhlYWQsIG9ubHkgY29udGludWUgb25lLlxuICAgICAgICAgICAgICAgICAgICAvLyAoU3BlY2lmaWNhbGx5LCBsZXQgdGhlIGV2ZW50IGNvbnRpbnVlIHByb3BhZ2F0aW9uIGluIHRoaXMgY2FzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogV29uJ3QgYmUgdHJ1ZSBmb3IgdGhlIGZpcnN0IGtleWRvd25cbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gYmVmb3JlIHVzZUxheW91dEVmZmVjdCBpcyBjYWxsZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWN0dWFsbHkgYXBwbHkgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25Db21wb3NpdGlvblN0YXJ0LCBvbkNvbXBvc2l0aW9uRW5kLCB9LCBwcm9wcyk7XG4gICAgfSwgW10pO1xuICAgIC8vIEhhbmRsZSBjaGFuZ2VzIGluIHR5cGVhaGVhZCB0aGF0IGNhdXNlIGNoYW5nZXMgdG8gdGhlIHRhYmJhYmxlIGluZGV4XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlYWhlYWQgJiYgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNvcnRlZFR5cGVhaGVhZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgdHlwZWFoZWFkQ29tcGFyYXRvcik7XG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHVzZXIgaGFzIHR5cGVkIGFuIGVudHJ5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIC8vIChvciBtb3JlIHNwZWNpZmljYWxseSBcImZvciB3aGljaCB0aGVyZSBpcyBubyBlbnRyeSB0aGF0IHN0YXJ0cyB3aXRoIHRoYXQgaW5wdXRcIilcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIFdlIGtub3cgcm91Z2hseSB3aGVyZSwgaW4gdGhlIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzLCBvdXIgbmV4dCB0eXBlYWhlYWQgbG9jYXRpb24gaXMuXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgIFRvIGNvbnZlcnQgb3VyIHNvcnRlZCBpbmRleCB0byB0aGUgdW5zb3J0ZWQgaW5kZXggd2UgbmVlZCwgd2UgaGF2ZSB0byBmaW5kIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCB0aGF0IG1hdGNoZXMgdXMgKmFuZCogKGlmIGFueSBzdWNoIGV4aXN0KSBpcyAqYWZ0ZXIqIG91ciBjdXJyZW50IHNlbGVjdGlvbi5cblxuICAgICAgICAgICAgICAgICAgSW4gb3RoZXIgd29yZHMsIHRoZSBvbmx5IHdheSB0eXBlYWhlYWQgbW92ZXMgYmFja3dhcmRzIHJlbGF0aXZlIHRvIG91ciBjdXJyZW50XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbiBpcyBpZiB0aGUgb25seSBvdGhlciBvcHRpb24gaXMgYmVoaW5kIHVzLlxuXG4gICAgICAgICAgICAgICAgICBJdCdzIG5vdCBzcGVjaWZpZWQgaW4gV0FJLUFSSUEgd2hhdCB0byBkbyBpbiB0aGF0IGNhc2UuICBJIHN1cHBvc2Ugd3JhcCBiYWNrIHRvIHRoZSBzdGFydD9cbiAgICAgICAgICAgICAgICAgIFRob3VnaCB0aGVyZSdzIGFsc28gYSBjYXNlIGZvciBqdXN0IGdvaW5nIHVwd2FyZHMgdG8gdGhlIG5lYXJlc3QgdG8gcHJldmVudCBqdW1waW5lc3MuXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxuICAgICAgICAgICAgICAgICAgSSBkdW5uby4gR29pbmcgYmFjayB0byB0aGUgc3RhcnQgaXMgdGhlIHNpbXBsaXN0IHRob3VnaC5cblxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIHNjYW4gYmFja3dhcmRzIGFuZCBmb3J3YXJkcyB0aHJvdWdoIGFsbCBhZGphY2VudCBlbnRyaWVzIHRoYXQgYWxzbyBjb21wYXJlIGVxdWFsbHkgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgd2UgY2FuIGZpbmQgdGhlIG9uZSB3aG9zZSBgdW5zb3J0ZWRJbmRleGAgaXMgdGhlIGxvd2VzdCBhbW9uZ3N0IGFsbCBvdGhlciBlcXVhbCBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxuXG4gICAgICAgICAgICAgICAgICBUT0RPOiBUaGUgYmluYXJ5IHNlYXJjaCBzdGFydHMgdGhpcyBvZmYgd2l0aCBhIHNvbGlkIE8obG9nIG4pLCBidXQgb25lLWNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcbiAgICAgICAgICAgICAgICAgIE8obipsb2cgbikuIFRoaXMgaXMgYW5ub3lpbmcgYnV0IHByb2JhYmx5IG5vdCBlYXNpbHkgc29sdmFibGU/IFRoZXJlIGNvdWxkIGJlIGFuXG4gICAgICAgICAgICAgICAgICBleGNlcHRpb24gZm9yIG9uZS1jaGFyYWN0ZXIgc3RyaW5ncywgYnV0IHRoYXQncyBqdXN0IGtpY2tpbmcgdGhlIGNhbiBkb3duXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGFyZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGNhbmRpZGF0ZXMnIHBvc2l0aW9ucyBpbiBib3RoIG91ciBzb3J0ZWQgYXJyYXkgYW5kIHRoZSB1bnNvcnRlZCBET00uXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIHR3byBhcmUgb25seSBzZXQgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIGFoZWFkIG9mIHVzLCBidXQgdGhlIHByaW5jaXBsZSdzIHRoZSBzYW1lIG90aGVyd2lzZVxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJlc3RGaXQgPSAodSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4QWxsID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0KSAmJiB1ID4gKGdldEluZGV4KCkgPz8gLUluZmluaXR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwICYmIHR5cGVhaGVhZENvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJlc3RGaXQoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgdHlwZWFoZWFkQ29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhOZXh0XS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhBbGxdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRUeXBlYWhlYWRdKTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyB0ZXh0LCAuLi5pIH0pID0+IHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGVyZSB0byBpbnNlcnQgdGhpcyBpdGVtLlxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgYWxsIGluZGV4IHZhbHVlcyBzaG91bGQgYmUgdW5pcXVlLCB0aGUgcmV0dXJuZWQgc29ydGVkSW5kZXhcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIHJlZmVyIHRvIGEgbmV3IGxvY2F0aW9uIChpLmUuIGJlIG5lZ2F0aXZlKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBpbnNlcnRpbmdDb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA8IDAgfHwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W3NvcnRlZEluZGV4XS50ZXh0ID09IHRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZSgtc29ydGVkSW5kZXggLSAxLCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdW5tb3VudGluZywgZmluZCB3aGVyZSB3ZSB3ZXJlIGFuZCByZW1vdmUgb3Vyc2VsdmVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBBZ2Fpbiwgd2Ugc2hvdWxkIGFsd2F5cyBmaW5kIG91cnNlbHZlcyBiZWNhdXNlIHRoZXJlIHNob3VsZCBiZSBubyBkdXBsaWNhdGUgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgdW5pcXVlLlxuICAgICAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBpbnNlcnRpbmdDb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPj0gMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0ZXh0XSk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLFxuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgfTtcbn1cbi8qKlxuICogWW91ciB1c3VhbCBiaW5hcnkgc2VhcmNoIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEl0J3MgdXNlZCBoZXJlIHRvIHF1aWNrbHkgZmluZCBhIGdvb2Qgc3BvdCB0byBzdGFydCBzZWFyY2hpbmcgZm9yIG91ciBuZXh0IHR5cGVhaGVhZCBjYW5kaWRhdGUuXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaCB0aHJvdWdoXG4gKiBAcGFyYW0gd2FudGVkIFRoZSB2YWx1ZSB5b3UnZCBsaWtlIHRvIGZpbmRcbiAqIEBwYXJhbSBjb21wYXJhdG9yIENvbXBhcmVzIGB3YW50ZWRgIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgaW4gYGFycmF5YFxuICogQHJldHVybnMgQSBub24tbmVnYXRpdmUgdmFsdWUgaWYgYHdhbnRlZGAgd2FzIGZvdW5kLCBhbmQgYSBuZWdhdGl2ZSBudW1iZXIgaWYgbm90LlxuICogVGhlIGFic29sdXRlIHZhbHVlIG9mIHRoaXMgbnVtYmVyLCBtaW51cyBvbmUsIGlzIHdoZXJlIGB3YW50ZWRgICp3b3VsZCogYmUgZm91bmQgaWYgaXQgKndhcyogaW4gYGFycmF5YFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCB3YW50ZWQsIGNvbXBhcmF0b3IpIHtcbiAgICB2YXIgZmlyc3RJbmRleCA9IDA7XG4gICAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGZpcnN0SW5kZXggPD0gbGFzdEluZGV4KSB7XG4gICAgICAgIHZhciB0ZXN0SW5kZXggPSAobGFzdEluZGV4ICsgZmlyc3RJbmRleCkgPj4gMTtcbiAgICAgICAgdmFyIGNvbXBhcmlzb25SZXN1bHQgPSBjb21wYXJhdG9yKHdhbnRlZCwgYXJyYXlbdGVzdEluZGV4XSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uUmVzdWx0ID4gMCkge1xuICAgICAgICAgICAgZmlyc3RJbmRleCA9IHRlc3RJbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyaXNvblJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHRlc3RJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtZmlyc3RJbmRleCAtIDE7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cbiAqIGNoaWxkIGNvbXBvbmVudHMgb25jZSB0aGV5IGhhdmUgcmVuZGVyZWQuXG4gKlxuICogVGhpcyBob29rIGlzIHNsaWdodGx5IG1vcmUgY29tcGxpY2F0ZWQgaW4gdGhhdCBpdCByZXR1cm5zIGJvdGggYVxuICogcHJvcC1tb2RpZnlpbmcgaG9vaywgYnV0IGFsc28gYSBob29rIHRoYXQgZWFjaCBjaGlsZCB3aWxsIG5lZWRcbiAqIHRvIHVzZTogYHVzZU1hbmFnZWRDaGlsZGAuICBJdCdzIHN0YWJsZSBhY3Jvc3MgcmVuZGVycywgc28ganVzdFxuICogdG9zcyBpdCBpbnRvIGEgYENvbnRleHRgIHNvIHRoZSBjaGlsZHJlbiBjYW4gaGF2ZSBhY2Nlc3MgdG8gaXQuXG4gKiBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyB0aGUgY2hpbGQgd2l0aCB0aGUgcGFyZW50IGFuZCBwcm92aWRlc1xuICogaXQgd2l0aCBhbnkgcmVxdWVzdGVkIGluZm9ybWF0aW9uLCBidXQgZG9lc24ndCBkbyBhbnl0aGluZyBlbHNlXG4gKiB1bnRpbCBpdCB1bm1vdW50cyBhbmQgcmV0cmFjdHMgdGhhdCBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkTWFuYWdlcigpIHtcbiAgICAvLyBUaGlzIGlzIGJsaW5kbHkgdXBkYXRlZCBhbnkgdGltZSBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50cyBpdHNlbGYuXG4gICAgLy8gVXNlZCB0byBtYWtlIHN1cmUgdGhhdCBhbnkgdGltZSB0aGUgYXJyYXkgb2YgbWFuYWdlZCBjaGlsZHJlbiB1cGRhdGVzLFxuICAgIC8vIHdlIGFsc28gcmUtcmVuZGVyLlxuICAgIGNvbnN0IFtjaGlsZFVwZGF0ZUluZGV4LCBzZXRDaGlsZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuTW91bnRlZCwgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuVW5vdW50ZWQsIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgZ2V0VG90YWxDaGlsZHJlblVub3VudGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCA9IHRvdGFsQ2hpbGRyZW5Nb3VudGVkIC0gdG90YWxDaGlsZHJlblVub3VudGVkO1xuICAgIGNvbnN0IG1hbmFnZWRDaGlsZHJlbiA9IHVzZVJlZihbXSAvKiogVE9ETzogQW55IHByb2JsZW1zIGNhdXNlZCBieSB1c2luZyBhbiBhcnJheSB3aGVuIGl0IHNob3VsZCBiZSBhbiBvYmplY3Q/ICovKTtcbiAgICBjb25zdCBtb3VudGVkQ2hpbGRyZW4gPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IG1vdW50T3JkZXIgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBpbmRpY2VzQnlFbGVtZW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gICAgY29uc3QgZGVsZXRlZEluZGljZXMgPSB1c2VSZWYobmV3IFNldCgpKTtcbiAgICAvLyBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgaW5kaWNlcyB0aGF0IGhhdmUgXCJvdmVyLW1vdW50ZWRcIiBhbmQgYnkgaG93IG11Y2guXG4gICAgLy8gV2UgbmVlZCB0aGlzIHNvIHRoYXQgd2UgZG9uJ3QgZXJhc2Ugc2F2ZWQgaW5mb3JtYXRpb24gd2hlbiBhIGNvbXBvbmVudFxuICAgIC8vIFwib3Zlcm1vdW50c1wiIG92ZXIgYW5vdGhlciB3aGljaCB0aGVuLCBjb3JyZWN0bHksIHN3aXRjaGVzICppdHNlbGYqIHRvIHNvbWV0aGluZyBlbHNlLlxuICAgIC8vIEluIGdlbmVyYWwsIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIHdoZW4gY29tcG9uZW50cyBhcmUgc3dhcHBpbmcgYmV0d2VlbiBpbmRpY2VzLlxuICAgIC8vIEJ5IHRoZSB0aW1lIHRoZXkncmUgZG9uZSwgdGhpcyBtYXAgc2hvdWxkIGJlIGFsbCAwcyBhZ2FpbiwgYXQgd2hpY2ggcG9pbnRcbiAgICAvLyBpdCdzIG9rYXkgdG8gYWN0dWFsbHkgcnVuIHRoZSB1bm1vdW50IGNvZGUuXG4gICAgLy8gXG4gICAgLy8gVE9ETzogdGhyb3cgYSBjb25zb2xlLmFzc2VydCBzb21ld2hlcmUgdG8gbWFrZSB1cCBmb3IgdGhlIGxvc3QgXG4gICAgLy8gXCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gb3ZlcndyaXRlIHRoaXMgY2hpbGQncyBpbmRleCFcIiBhc3NlcnRpb24uXG4gICAgLy8gTmFtZWx5LCBpcyB0aGlzIG1hcCBhbGwgMHMgd2hlbiB0aGUgcGFyZW50IGVsZW1lbnQgcmUtcmVuZGVycz8gXG4gICAgLy8gUHJvYmFibHkgbm90IGJlY2F1c2Ugb2Ygc2V0Q2hpbGRVcGRhdGVJbmRleFxuICAgIGNvbnN0IG92ZXJtb3VudENvdW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gICAgY29uc3QgZ2V0TW91bnRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyByZXR1cm4gbW91bnRPcmRlci5jdXJyZW50LmdldChpbmRleCk7IH0sIFtdKTtcbiAgICBjb25zdCB1c2VNYW5hZ2VkQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuc2V0KGVsZW1lbnQsIGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZEluZGljZXMuY3VycmVudC5hZGQoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmZvLmluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtdKSB9KTtcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKCk7XG4gICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgIG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50W2luZGV4XSA9IGluZm87XG4gICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCh0ID0+ICsrdCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5kZWxldGUoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQodCA9PiArK3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW2luZm8uaW5kZXhdKTtcbiAgICAgICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZSBnZW5lcmFsbHkuXG4gICAgICAgIC8vICpEb24ndCByZS1yZW5kZXIqLCBvdGhlcndpc2Ugd2UnZCBiZSBzdHVjayBpbiBhblxuICAgICAgICAvLyBpbmZpbml0ZSBsb29wIGV2ZXJ5IHRpbWUgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIGlzIHBhc3NlZC5cbiAgICAgICAgLy8gSXQgY29tZXMgaW4gZnJvbSB0aGUgcHJvcHMgc28gdGhlIGNoaWxkIHdhcyBhbHJlYWR5IHVwZGF0ZWQgYnkgaXQgLS1cbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IHRvIHJlLXJlbmRlciBldmVyeSBzaW5nbGUgY2hpbGQgYW55IHRpbWVcbiAgICAgICAgLy8gXCJvbkNsaWNrXCIgdXBkYXRlcyBvciB3aGF0ZXZlci4gIFRoZSByZWxldmFudCBjaGlsZCBhbHJlYWR5IGtub3dzLFxuICAgICAgICAvLyBhbmQgdGhhdCdzIHdoYXQgbWF0dGVycy5cbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoKV0pO1xuICAgICAgICByZXR1cm4geyBnZXRFbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1hbmFnZWRDaGlsZCxcbiAgICAgICAgY2hpbGRDb3VudDogY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkLFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50LFxuICAgICAgICBtb3VudGVkQ2hpbGRyZW46IG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50LFxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50OiBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQsXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Nb3VudGVkLFxuICAgICAgICB0b3RhbENoaWxkcmVuVW5vdW50ZWQsXG4gICAgICAgIGdldE1vdW50SW5kZXgsXG4gICAgICAgIGRlbGV0ZWRJbmRpY2VzOiBkZWxldGVkSW5kaWNlcy5jdXJyZW50XG4gICAgfTtcbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZXR0aW5nIGNoaWxkcmVuIGtub3cgd2hlbiB0aGV5IGFyZSBvciBhcmUgbm90IHRoZVxuICogY3VycmVudCBzZWxlY3RlZC9leHBhbmRlZC9mb2N1c2VkL3doYXRldmVyIGNoaWxkLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB3aGVuIGNoaWxkcmVuIGFyZSBtb3VudGVkICYgdW5tb3VudGVkIGFuZCBzdWNoLlxuICpcbiAqIFdoaWxlIGl0IHdpbGwgYmUgY2FsbGVkIG9uY2UgZm9yIGV2ZXJ5IGNoaWxkIG9uIG1vdW50LCBhZnRlciB0aGF0IHNldEZsYWdcbiAqIGlzIGd1YXJhbnRlZWQgdG8gb25seSBiZSBjYWxsZWQgb25jZSBvbiBhY3RpdmF0aW9uIGFuZCBvbmNlIG9uIGRlYWN0aXZhdGlvbixcbiAqIHNvIGl0J3MgZ2VuZXJhbGx5IHNhZmUgdG8gcHV0IHNpZGUgZWZmZWN0cyBpbnNpZGUgaWYgbmVjZXNzYXJ5LlxuICogSXQncyBhbHNvIHNhZmUgdG8gbWFrZSBpdCBub24tc3RhYmxlLlxuICpcbiAqIEBwYXJhbSBhY3RpdmF0ZWRJbmRleCBXaGF0IGluZGV4IHRoZSBjdXJyZW50IHNlbGVjdGVkIChldGMuKSBjaGlsZCBpc1xuICogQHBhcmFtIGxlbmd0aCBIb3cgbWFueSBjaGlsZHJlbiBleGlzdCAoYXMgbWFuYWdlZENoaWxkcmVuLmxlbmd0aClcbiAqIEBwYXJhbSBzZXRGbGFnIEEgZnVuY3Rpb24gdGhhdCBwcm9iYWJseSBsb29rcyBsaWtlIChpLCBmbGFnKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0QWN0aXZlKGZsYWcpXG4gKiBAcGFyYW0gdXNlRWZmZWN0IFdoaWNoIHZlcnNpb24gb2YgdXNlRWZmZWN0IHRvIHVzZS4gRGVmYXVsdCBpcyBgdXNlTGF5b3V0RWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4LCBjbG9zZXN0Rml0LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldENoaWxkRmxhZywgZ2V0Q2hpbGRGbGFnLCB1c2VFZmZlY3QgfSkge1xuICAgIHVzZUVmZmVjdCA/Pz0gdXNlTGF5b3V0RWZmZWN0O1xuICAgIGlmIChjbG9zZXN0Rml0KVxuICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiB8fCBhY3RpdmF0ZWRJbmRleCA9PSBudWxsKTtcbiAgICAvLyBXaGVuZXZlciB3ZSByZS1yZW5kZXIsIG1ha2Ugc3VyZSB0aGF0IGFueSBjaGlsZHJlbiB0aGF0IGhhdmUgbW91bnRlZFxuICAgIC8vIGhhdmUgdGhlaXIgZmxhZ3MgcHJvcGVybHkgc2V0LiAgV2Uga25vdyBpdCdzIHVuc2V0IGlmIGl0IHdhcyBudWxsLFxuICAgIC8vIGluIHdoaWNoIGNhc2Ugd2UganVzdCBzZXQgaXQgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICAvL1xuICAgIC8vIEFuZCwgSSBtZWFuLCBhcyBsb25nIGFzIHdlJ3JlIGFscmVhZHkgaXRlcmF0aW5nIHRocm91Z2ggZXZlcnkgY2hpbGRcbiAgICAvLyBvbiBldmVyeSByZW5kZXIgdG8gY2hlY2sgZm9yIG5ld2x5IG1vdW50ZWQgY2hpbGRyZW4sIG1pZ2h0IGFzIHdlbGxcbiAgICAvLyBqdXN0IGhhbmRsZSBjaGFuZ2VkIGluIHRoZSBhY3RpdmF0ZWRJbmRleCBoZXJlIHRvby5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBXZSBoYXZlIGxpbWl0ZWQgaW5mb3JtYXRpb24gYWJvdXQgd2hlbiBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50c1xuICAgICAgICAvLyBhbmQgc28gd2UgZG9uJ3Qga25vdyB3aGVyZSB0byBsb29rIGZvciBhbnkgbnVsbCBlbnRyaWVzIHRoYXQgbmVlZCBjaGFuZ2luZy5cbiAgICAgICAgLy8gV2Uga25vdyB3aGVuIGFjdGl2YXRlZEluZGV4IGNoYW5nZXMgYW5kIHdoYXQgaXQgd2FzLCBidXQgbm90IG11Y2ggZWxzZS5cbiAgICAgICAgLy8gTG9vcGluZyBvdmVyIGV2ZXJ5IGNoaWxkICp3b3JrcyosIGFuZCBpdCdzIG5vdCBhbiBleHBlbnNpdmUgbG9vcCBieSBhbnkgbWVhbnMsXG4gICAgICAgIC8vIGJ1dCwgbGlrZSwgZXVnaC5cbiAgICAgICAgLy8gQWxzbywgYmVmb3JlIHdlIGRvIGFueXRoaW5nLCBzZWUgaWYgd2UgbmVlZCB0byBcImNvcnJlY3RcIiBhY3RpdmF0ZWRJbmRleC5cbiAgICAgICAgLy8gSXQgY291bGQgYmUgcG9pbnRpbmcgdG8gYSBjaGlsZCB0aGF0IGRvZXNuJ3QgZXhpc3QsIGFuZCBpZiBjbG9zZXN0Rml0IGlzIGdpdmVuLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGFkanVzdCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBhIHZhbGlkIGNoaWxkLlxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2YXRlZEluZGV4ID09IFwibnVtYmVyXCIgJiYgQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pICYmIG1hbmFnZWRDaGlsZHJlblthY3RpdmF0ZWRJbmRleF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gT2ggZGVhci4gQXJlIHdlIGFjdGl2ZWx5IGNvcnJlY3RpbmcgdGhpcz9cbiAgICAgICAgICAgIGlmIChjbG9zZXN0Rml0KSB7XG4gICAgICAgICAgICAgICAgLy8gT2ggZGVhci5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggdXAgYW5kIGRvd24gdGhlIGxpc3Qgb2YgY2hpbGRyZW4gZm9yIGFueSB0aGF0IGFjdHVhbGx5IGV4aXN0LlxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hIaWdoID0gYWN0aXZhdGVkSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hMb3cgPSBhY3RpdmF0ZWRJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSA9PSBudWxsKSB8fCAoc2VhcmNoSGlnaCA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaEhpZ2hdID09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICsrc2VhcmNoSGlnaDtcbiAgICAgICAgICAgICAgICAgICAgLS1zZWFyY2hMb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoTG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA9IHNlYXJjaEhpZ2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIGRvbmUgdGhhdCwgaWYgYW55IHZhbGlkIGNoaWxkcmVuIGV4aXN0LCB3ZSd2ZSByZXNldCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBpdCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIC8vIE5vdyB3ZSdsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGZvciBsb29wIHNldCBhbmQgdW5zZXQgb3VyIGZsYWdzIGJhc2VkIG9uIHRoaXMgXCJjb3JyZWN0ZWRcIiB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGNvcnJlY3QgaXQgb3Igc2F2ZSBpdCBhbnl3aGVyZSBiZWNhdXNlIHdlJ2QgdmVyeSBtdWNoIGxpa2UgdG8gcmV0dXJuIHRvIGl0XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNoaWxkIHJlbW91bnRzIGl0c2VsZi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobWFuYWdlZENoaWxkcmVuKS5mb3JFYWNoKChbaSwgaW5mb10pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkQmVTZXQgPSAoaSA9PSBhY3RpdmF0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKGdldENoaWxkRmxhZyhpKSAhPSBzaG91bGRCZVNldCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZEZsYWcoaSwgc2hvdWxkQmVTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hpbGQtbWFuYWdlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKiBJbXBsZW1lbnRzIGEgcm92aW5nIHRhYmluZGV4IHN5c3RlbSB3aGVyZSBvbmx5IG9uZSBcImZvY3VzYWJsZVwiXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXG4gKiBvZiB0aG9zZSBlbGVtZW50cyByZWNlaXZlcyBmb2N1cyBpcyBkZXRlcm1pbmVkIGJ5IHlvdSwgYnV0IGl0J3NcbiAqIHJlY29tbWVuZGVkIHRvIG9mZmxvYWQgdGhhdCBsb2dpYyB0aGVuIHRvIGFub3RoZXIgaG9vaywgbGlrZVxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXG4gKiBlbGVtZW50IHdpdGggdGhlIGFycm93IGtleXMsIGB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uYCwgd2hpY2hcbiAqIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0eXBlYWhlYWQsIG9yXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgY2hpbGQgaG9vayByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgdXNlZFxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXG4gKiBwcm9wLW1vZGlmeWluZyBob29rICp0aGF0KiBob29rIHJldHVybnMgc2hvdWxkIHRoZW4gYmUgdXNlZFxuICogb24gdGhlIGNoaWxkJ3MgZWxlbWVudCwgYXMgd2VsbCBhcyBhbnkgb3RoZXIgZWxlbWVudHMgeW91J2QgbGlrZVxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxuICpcbiAqIGBzaG91bGRGb2N1c09uQ2hhbmdlYCBzaG91bGQgcmV0dXJuIHRydWUgaWYgZm9jdXMgaXNcbiAqIGNvbnRhaW5lZCB3aXRoaW4gd2hhdGV2ZXIgZWxlbWVudCBjb250YWlucyB0aGUgcm92aW5nIHRhYiBpbmRleC5cbiAqIEdlbmVyYWxseSBhcyBzaW1wbGUgYXMgdGhlIGZvbGxvd2luZzpcbiAqIGBgYFxuICogY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXM8UGFyZW50RWxlbWVudD4oeyBzZXRGb2N1c2VkSW5uZXIgfSk7XG4gKiBjb25zdCBmb2N1c09uQ2hhbmdlID0gKGZvY3VzZWRJbm5lciAhPSBmYWxzZSk7XG4gKiBgYGBcbiAqIEl0J3Mgbm90IGluY2x1ZGVkIGhlcmUgYmVjYXVzZSBgdXNlUm92aW5nVGFiSW5kZXhgIGRvZXNuJ3Qga25vd1xuICogYW55dGhpbmcgYWJvdXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LCBvbmx5IGNoaWxkcmVuIGVsZW1lbnRzLlxuICogQW5kIGp1c3QgYXMgd2VsbCEgQ2hpbGRyZW4gc2hvdWxkIGJlIGFsbG93ZWQgYXQgdGhlIHJvb3QsXG4gKiByZWdhcmRsZXNzIG9mIGlmIGl0J3MgdGhlIHdob2xlIGFwcCBvciBqdXN0IGEgZ2l2ZW4gY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlOiBmb2MsIHRhYmJhYmxlSW5kZXggfSkge1xuICAgIGNvbnN0IGdldFNob3VsZEZvY3VzT25DaGFuZ2UgPSB1c2VTdGFibGVHZXR0ZXIoZm9jKTtcbiAgICBjb25zdCBnZXRUYWJiYWJsZUluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHRhYmJhYmxlSW5kZXgpO1xuICAgIGNvbnN0IHByZXZUYWJiYWJsZSA9IHVzZVJlZigtSW5maW5pdHkpO1xuICAgIC8vIENhbGwgdGhlIGhvb2sgdGhhdCBhbGxvd3MgdXMgdG8gY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHdobyBwcm92aWRlIGl0XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGNoaWxkQ291bnQsIHVzZU1hbmFnZWRDaGlsZCwgaW5kaWNlc0J5RWxlbWVudCwgLi4ucmVzdCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsXG4gICAgLy8gbm90aWZ5IHRoZSBwcmV2aW91cyBjaGlsZCB0aGF0IGl0J3Mgbm8gbG9uZ2VyIHRhYmJhYmxlLFxuICAgIC8vIGFuZCBub3RpZnkgdGhlIG5leHQgY2hpbGQgdGhhdCBpcyBhbGxvd2VkIHRvIGJlIHRhYmJlZCB0by5cbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogdGFiYmFibGVJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBjbG9zZXN0Rml0OiB0cnVlLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpbmRleCwgdGFiYmFibGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LnNldFRhYmJhYmxlKHRhYmJhYmxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaW5kZXgpID0+IChtYW5hZ2VkQ2hpbGRyZW5baW5kZXhdPy5nZXRUYWJiYWJsZSgpID8/IG51bGwpXG4gICAgfSk7XG4gICAgY29uc3QgZm9jdXNTZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodGFiYmFibGVJbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUpO1xuICAgIH0sIFt0YWJiYWJsZUluZGV4XSk7XG4gICAgY29uc3QgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtycmFmSW5kZXgsIHNldFJyYWZJbmRleF0gPSB1c2VTdGF0ZSgxKTtcbiAgICAgICAgY29uc3QgcmVyZW5kZXJBbmRGb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0UnJhZkluZGV4KGkgPT4gKytpKTsgfSwgW10pO1xuICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlLCBnZXRUYWJiYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgbGV0IG5ld0luZm8gPSB7XG4gICAgICAgICAgICAuLi5pbmZvLFxuICAgICAgICAgICAgcmVyZW5kZXJBbmRGb2N1cyxcbiAgICAgICAgICAgIHNldFRhYmJhYmxlOiB1c2VDYWxsYmFjaygodGFiYmFibGUpID0+IHsgc2V0VGFiYmFibGUodGFiYmFibGUpOyB9LCBbXSksXG4gICAgICAgICAgICBnZXRUYWJiYWJsZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKHRhYmJhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkRm9jdXNPbkNoYW5nZSA9IGdldFNob3VsZEZvY3VzT25DaGFuZ2UoKSgpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRGb2N1c09uQ2hhbmdlICYmIFwiZm9jdXNcIiBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlLCBycmFmSW5kZXhdKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4IH0sIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyh7IHRhYkluZGV4IH0pLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLFxuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXG4gICAgICAgICAgICB0YWJiYWJsZVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VNYW5hZ2VkQ2hpbGRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLFxuICAgICAgICBjaGlsZENvdW50LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXG4gICAgICAgIGZvY3VzQ3VycmVudDogdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZvciB3aGF0ZXZlciByZWFzb24sIHRoZSBwcmV2aW91c2x5IHRhYmJhYmxlIGNoaWxkXG4gICAgICAgICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIHRhYmJhYmxlIHdpdGhvdXQgdXMga25vd2luZyBhYm91dCBpdC5cbiAgICAgICAgICAgICAgICAvLyBNYXliZSBpdCB1bm1vdW50ZWQ/XG4gICAgICAgICAgICAgICAgLy8gRWl0aGVyIHdheSwgdHJ5IHRvIGZpbmQgdGhlIG5ld2x5LXNlbGVjdGVkIGNoaWxkLlxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGxldCBpID0gZ2V0VGFiYmFibGVJbmRleCgpID8/IDA7XG4gICAgICAgICAgICAgICAgbGV0IGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICArK2o7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdLmdldFRhYmJhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pLFxuICAgICAgICAuLi5yZXN0XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbiB9IGZyb20gXCIuL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJvdmluZ1RhYkluZGV4IH0gZnJvbSBcIi4vdXNlLXJvdmluZy10YWJpbmRleFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICpcbiAqIFRPRE86IFRoaXMgdGFibGUgd2FzIHNjcmFwcGVkIHdoZW4gdGhpcyB3YXMgY2hhbmdlZCB0byBqdXN0IGFjY2VwdCBhIGNvbGxhdG9yIGRpcmVjdGx5LFxuICogYnV0IGl0J3Mgbm90IGJhZCBmb3IgYSBjb2xsYXRpb24gY3Jhc2ggY291cnNlIGFuZCBJIG1pZ2h0IHVzZSBpdCBhZ2Fpbi5cbiAqIEV2ZW4ganVzdCBhcyBhIFwidGhpcyBpcyB3aHkgaXQncyBpbXBvcnRhbnQgYW5kIGdvb2QgdG8gdXNlIHRoZXNlIHRoaW5nc1wiIHRoaW5nLlxuICpcbiAqIHxMYW5nLnxUYXJnZXR8VXNlciBpbnB1dHxgYmFzZWB8YGFjY2VudGB8YGNhc2VgfGB2YXJpYW50YHxcbiAqIHwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfFxuICogfEVOfEhpfEhpfOKchXzinIV84pyFfOKchXxcbiAqIHxFTnxIaXzvvKjvvYl84pyFfOKchXzinIV84p2MfFxuICogfEVOfEhpfGhpfOKchXzinIV84p2MfOKdjHxcbiAqIHxFTnxIaXxIw6984pyFfOKdjHzinYx84p2MfFxuICogfEVOfEhpfEJ5ZXzinYx84p2MfOKdjHzinYx8XG4gKiB8REF8w6V8YWF84pyFfOKchXzinIV84p2MfFxuICogfERBfMOlfEFBfOKchXzinIV84p2MfOKdjHxcbiAqIHxEQXzDpXxBYXzinIV84pyFfOKdjHzinYx8XG4gKiB8RU58w6V8YWF84p2MfOKdjHzinYx84p2MfFxuICogfERBfMOlfGFBfOKdjHzinYx84p2MfOKdjHxcbiAqIHxFTnzDpXxhfOKchXzinIV84p2MfOKdjHxcbiAqIHxEQXzDpXxhfOKchXzinIV84p2MfOKdjHxcbiAqIHxKUHzvqqp8552AfOKchXzinIV84pyFfOKchXxcbiAqIHxKUHzjgqt87722fOKchXzinIV84pyFfOKchXxcbiAqIHxKUHzjgqt844GLfOKchXzinIV84pyFfOKdjHxcbiAqIHxKUHzjgqt844O1fOKchXzinIV84pyFfOKdjHxcbiAqIHxKUHzjgqt844uVfOKchXzinIV84p2MfOKdjHxcbiAqIHxKUHzjgqt844KsfOKchXzinYx84p2MfOKdjHxcbiAqIHxKUHzjgqt85YqbfOKdjHzinYx84p2MfOKdjHxcbiAqIHxaSHzntIV857qifOKdjHzinYx84p2MfOKdjHxcbiAqXG4gKlxuICogKE5vdGUgdG8gc2VsZjogQXQgc29tZSBwb2ludCwgdGhpcyBmaWxlIHdpbGwgcHJvYmFibHkgYmUgbm9ybWFsaXplZFxuICogYnkgc29tZWJvZHkgYW5kIO+qqiB3aWxsIHR1cm4gYmFjayBpbnRvIOedgC4pXG4gKlxuICovXG5jb25zdCBkdW1teSA9IG51bGw7XG47XG5mdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9XG4vKipcbiAqIEltcGxlbWVudHMgcHJvcGVyIGtleWJvYXJkIG5hdmlnYXRpb24gZm9yIGNvbXBvbmVudHMgbGlrZSBsaXN0Ym94ZXMsIGJ1dHRvbiBncm91cHMsIG1lbnVzLCBldGMuXG4gKlxuICogSW4gdGhlIGRvY3VtZW50IG9yZGVyLCB0aGVyZSB3aWxsIGJlIG9ubHkgb25lIFwiZm9jdXNlZFwiIG9yIFwidGFiYmFibGVcIiBlbGVtZW50LCBtYWtpbmcgaXQgYWN0IG1vcmUgbGlrZSBvbmUgY29tcGxldGUgdW5pdCBpbiBjb21wYXJpc29uIHRvIGV2ZXJ5dGhpbmcgYXJvdW5kIGl0LlxuICogTmF2aWdhdGluZyBmb3J3YXJkcy9iYWNrd2FyZHMgY2FuIGJlIGRvbmUgd2l0aCB0aGUgYXJyb3cga2V5cywgSG9tZS9FbmQga2V5cywgb3IgYW55IGFueSB0ZXh0IGZvciB0eXBlYWhlYWQgdG8gZm9jdXMgdGhlIG5leHQgaXRlbSB0aGF0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaXN0TmF2aWdhdGlvbih7IGluaXRpYWxJbmRleCwgc2hvdWxkRm9jdXNPbkNoYW5nZSwgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIgfSkge1xuICAgIGluZGV4TWFuZ2xlciA/Pz0gaWRlbnRpdHk7XG4gICAgaW5kZXhEZW1hbmdsZXIgPz89IGlkZW50aXR5O1xuICAgIGtleU5hdmlnYXRpb24gPz89IFwiZWl0aGVyXCI7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIpO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XG4gICAgLy8gV2hhdCBpdCBpcywgYW5kIHdoZXRoZXIsIHdoZW4gd2UgcmVuZGVyIHRoaXMgY29tcG9uZW50IGFuZCBpdCdzIGNoYW5nZWQsIHRvIGFsc28gZm9jdXMgdGhlIGVsZW1lbnQgdGhhdCB3YXMgbWFkZSB0YWJiYWJsZS5cbiAgICBjb25zdCBbdGFiYmFibGVJbmRleCwgc2V0VGFiYmFibGVJbmRleCwgZ2V0VGFiYmFibGVJbmRleF0gPSB1c2VTdGF0ZShpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCA/IDAgOiBpbml0aWFsSW5kZXgpO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBpbmRpY2VzQnlFbGVtZW50LCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBmb2N1c0N1cnJlbnQsIC4uLnJlc3QgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHsgc2hvdWxkRm9jdXNPbkNoYW5nZSwgdGFiYmFibGVJbmRleCB9KTtcbiAgICAvKmNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpOiBudW1iZXIgfCBudWxsKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sKSBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlciEoMCkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaW5kZXhNYW5nbGVyIShtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIhKGluZGV4RGVtYW5nbGVyIShpID8/IDApIC0gMSkpIH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIhKGluZGV4RGVtYW5nbGVyIShpID8/IDApICsgMSkpIH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XG4qL1xuICAgIGNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpKSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaSA9PSBudWxsID8gbnVsbCA6IHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIDAsIGksIDEsIGluZGV4TWFuZ2xlciA/PyBpZGVudGl0eSwgaW5kZXhEZW1hbmdsZXIgPz8gaWRlbnRpdHkpKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIDAsIDAsIDEsIGluZGV4TWFuZ2xlciA/PyBpZGVudGl0eSwgaW5kZXhEZW1hbmdsZXIgPz8gaWRlbnRpdHkpKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgodHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgLTEsIGluZGV4TWFuZ2xlciA/PyBpZGVudGl0eSwgaW5kZXhEZW1hbmdsZXIgPz8gaWRlbnRpdHkpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIGMgPz8gMCwgKGMgPz8gMCkgLSAxLCAtMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChjID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCBjID8/IDAsIChjID8/IDApICsgMSwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBzZXRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGluZGV4KTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgeyBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleDogZ2V0VGFiYmFibGVJbmRleCwgc2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQ6IDEwMDAgfSk7XG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb24oeyBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBrZXlOYXZpZ2F0aW9uLCBpbmRleDogZ2V0VGFiYmFibGVJbmRleCgpID8/IDAsIG1hbmFnZWRDaGlsZHJlbiwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0IH0pO1xuICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyh1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKTtcbiAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvblByb3BzLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHNdKTtcbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyAuLi5yZXN0IH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoaW5mbyk7XG4gICAgICAgIC8vY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkKGluZm8gYXMgSSk7XG4gICAgICAgIGNvbnN0IHsgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcywgdGFiYmFibGUgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQoaW5mbyk7XG4gICAgICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcygoKHsgb25DbGljazogcm92ZVRvU2VsZiwgaGlkZGVuOiBpbmZvLmhpZGRlbiB9KSkpLCBwcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJvdmVUb1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTsgfSwgW10pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLFxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHM6IHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxuICAgICAgICAgICAgdGFiYmFibGVcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLFxuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblByb3BzLFxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxuICAgICAgICB0YWJiYWJsZUluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXG4gICAgICAgIG5hdmlnYXRlVG9JbmRleCxcbiAgICAgICAgbmF2aWdhdGVUb05leHQsXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxuICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QsXG4gICAgICAgIG5hdmlnYXRlVG9MYXN0LFxuICAgICAgICBmb2N1c0N1cnJlbnQsXG4gICAgICAgIC4uLnJlc3RcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIGluaXRpYWwsIHRhcmdldCwgc2VhcmNoRGlyZWN0aW9uLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKSB7XG4gICAgZnVuY3Rpb24gaGVscGVyKCkge1xuICAgICAgICBpZiAoc2VhcmNoRGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA+PSAwICYmIChtYW5hZ2VkQ2VsbHNbdGFyZ2V0XSA9PSBudWxsIHx8ICEhbWFuYWdlZENlbGxzW3RhcmdldF0/LmhpZGRlbikpXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKHRhcmdldCkgLSAxKTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPCAwID8gaW5pdGlhbCA6IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWFyY2hEaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgPCBtYW5hZ2VkQ2VsbHMubGVuZ3RoICYmIG1hbmFnZWRDZWxsc1t0YXJnZXRdID09IG51bGwgfHwgISFtYW5hZ2VkQ2VsbHNbdGFyZ2V0XT8uaGlkZGVuKVxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGluZGV4TWFuZ2xlcihpbmRleERlbWFuZ2xlcih0YXJnZXQpICsgMSk7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID49IG1hbmFnZWRDZWxscy5sZW5ndGggPyBpbml0aWFsIDogdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChoZWxwZXIoKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlRHJhZ2dhYmxlKHsgZWZmZWN0QWxsb3dlZCwgZGF0YSwgZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0LCBkcmFnSW1hZ2VZT2Zmc2V0IH0pIHtcbiAgICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nLCBnZXREcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xhc3REcm9wRWZmZWN0LCBzZXRMYXN0RHJvcEVmZmVjdCwgZ2V0TGFzdERyb3BFZmZlY3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgdXNlRHJhZ2dhYmxlUHJvcHMgPSB1c2VDYWxsYmFjaygocCkgPT4ge1xuICAgICAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgICAgIGNvbnN0IG9uRHJhZ1N0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gKGVmZmVjdEFsbG93ZWQgPz8gXCJhbGxcIik7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWdJbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCA/PyAwLCBkcmFnSW1hZ2VZT2Zmc2V0ID8/IDApO1xuICAgICAgICAgICAgICAgIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbWltZVR5cGUsIGRhdGFdIG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShtaW1lVHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbkRyYWdFbmQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdERyb3BFZmZlY3QoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0LFxuICAgICAgICAgICAgb25EcmFnRW5kLFxuICAgICAgICAgICAgcmVmXG4gICAgICAgIH0sIHApO1xuICAgIH0sIFtlZmZlY3RBbGxvd2VkLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQsIC4uLk9iamVjdC5lbnRyaWVzKGRhdGEpLmZsYXQoKV0pO1xuICAgIC8vIFJldHVybiBib3RoIHRoZSBlbGVtZW50IGFuZCB0aGUgaG9vayB0aGF0IG1vZGlmaWVzIFxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcbiAgICBsZXQgcmV0ID0ge1xuICAgICAgICB1c2VEcmFnZ2FibGVQcm9wcyxcbiAgICAgICAgZHJhZ2dpbmcsXG4gICAgICAgIGdldERyYWdnaW5nLFxuICAgICAgICAvLyBTZXQgb25jZSBhIGRyYWcgaGFzIGNvbXBsZXRlZCB3aXRoIHRoZSByZXN1bHRpbmcgYWN0aW9uXG4gICAgICAgIC8vIFVzZWZ1bCBmb3IgcmVtb3ZpbmcgdGhlIGVsZW1lbnQgYWZ0ZXJ3YXJkcyBpZiBpdCB3YXMgXCJtb3ZlXCJcbiAgICAgICAgbGFzdERyb3BFZmZlY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXN0XG4gICAgICAgICAqL1xuICAgICAgICBnZXRMYXN0RHJvcEVmZmVjdFxuICAgIH07XG4gICAgcmV0dXJuIHJldDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kcmFnZ2FibGUuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG47XG47XG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlRmlsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGZpbGVOYW1lO1xuICAgIGVycm9yVHlwZTtcbiAgICBjb25zdHJ1Y3RvcihmaWxlTmFtZSwgYmFzZSkge1xuICAgICAgICBzdXBlcihiYXNlPy5tZXNzYWdlID8/IFwiQW4gdW5zcGVjaWZpZWQgZXJyb3Igb2NjdXJyZWQgcmVhZGluZyB0aGUgZmlsZS5cIik7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSBiYXNlPy5uYW1lO1xuICAgIH1cbn1cbi8vTWVyZ2VkUHJvcHM8VXNlUmVmRWxlbWVudFByb3BzUmV0dXJuVHlwZTxFLCBQaWNrPGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+LCBcIm9uRHJhZ0VudGVyXCIgfCBcIm9uRHJhZ0xlYXZlXCIgfCBcIm9uRHJhZ092ZXJcIiB8IFwib25Ecm9wXCI+PiwgUD47XG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHBhYmxlKHsgZWZmZWN0IH0pIHtcbiAgICBjb25zdCBbZmlsZXNGb3JDb25zaWRlcmF0aW9uLCBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N0cmluZ3NGb3JDb25zaWRlcmF0aW9uLCBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJvcHBlZEZpbGVzLCBzZXREcm9wcGVkRmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Ryb3BwZWRTdHJpbmdzLCBzZXREcm9wcGVkU3RyaW5nc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJvcEVycm9yLCBzZXREcm9wRXJyb3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICAvLyBBbGwgdGhlIHByb21pc2VzIGdlbmVyYXRlZCBmcm9tIHRoZSBkcm9wIGV2ZW50cy5cbiAgICAvLyBVc2VkIHRvIHByb2Nlc3MgbXVsdGlwbGUgZHJvcCBldmVudHMgaW4gc3VjY2Vzc2lvblxuICAgIGNvbnN0IGRyb3BQcm9taXNlc1JlZiA9IHVzZVJlZihbXSk7XG4gICAgY29uc3QgW2N1cnJlbnRQcm9taXNlSW5kZXgsIHNldEN1cnJlbnRQcm9taXNlSW5kZXgsIGdldEN1cnJlbnRQcm9taXNlSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xuICAgIGNvbnN0IFtwcm9taXNlQ291bnQsIHNldFByb21pc2VDb3VudCwgZ2V0UHJvbWlzZUNvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIC8vIEFueSB0aW1lIHdlIGFkZCBhIG5ldyBwcm9taXNlLCBpZiB0aGVyZSdzIG5vIGN1cnJlbnQgcHJvbWlzZSBydW5uaW5nLCB3ZSBuZWVkIHRvIHN0YXJ0IG9uZS5cbiAgICAvLyBJZiB0aGVyZSBpcyBvbmUsIHRoZW4gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZywgc2luY2UgaXQgcnVucyB0aGUgc2FtZSBjaGVjay5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xuICAgICAgICBjb25zdCBwcm9taXNlQ291bnQgPSBnZXRQcm9taXNlQ291bnQoKTtcbiAgICAgICAgaWYgKHByb21pc2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcHJvbWlzZUNvdW50XSk7XG4gICAgLy8gQW55dGltZSBvdXIgY3VycmVudCBwcm9taXNlIGNoYW5nZXMsXG4gICAgLy8gd2FpdCBmb3IgaXQgdG8gZmluaXNoLCB0aGVuIHNldCBvdXIgc3RhdGUgdG8gaXRzIHJlc3VsdC5cbiAgICAvLyBGaW5hbGx5LCBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueW1vcmUgcHJvbWlzZXMuXG4gICAgLy8gSWYgdGhlcmUgYXJlLCB0aGVuIGluY3JlYXNlIGN1cnJlbnRQcm9taXNlQ291bnQsXG4gICAgLy8gd2hpY2ggd2lsbCB0cmlnZ2VyIHRoaXMgYWdhaW4uXG4gICAgLy9cbiAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gKm9mdGVuKiwgYnV0IG1heWJlIGluIHRoZSBjYXNlIG9mXG4gICAgLy8gaW5kaXZpZHVhbGx5IGRyb3BwaW5nIGEgYnVuY2ggb2YgbGFyZ2UgZmlsZXMgb3Igc29tZXRoaW5nLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UHJvbWlzZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlID0gZHJvcFByb21pc2VzUmVmLmN1cnJlbnRbY3VycmVudFByb21pc2VJbmRleF07XG4gICAgICAgICAgICBjdXJyZW50UHJvbWlzZS50aGVuKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBmaWxlcywgc3RyaW5ncyB9ID0gaW5mbztcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZEZpbGVzKGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZFN0cmluZ3Moc3RyaW5ncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3JlIGRvbmUsIGFyZSB0aGVyZSBtb3JlIHByb21pc2VzIGluIHRoZSBxdWV1ZT9cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xuICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgcHJvbWlzZSBoYXMgc3RhcnRlZCwgbW9yZSBoYXZlIGJlZW4gYWRkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB0aGlzIGVmZmVjdCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFByb21pc2VJbmRleF0pO1xuICAgIGNvbnN0IHVzZURyb3BwYWJsZVByb3BzID0gKHApID0+IHtcbiAgICAgICAgLy9jb25zdCByZWYgPSB1c2VSZWY8RT4obnVsbCk7XG4gICAgICAgIC8vIEhhbmRsZSBjb2xsZWN0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlcy5cbiAgICAgICAgY29uc3Qgb25EcmFnRW50ZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gSXMgdGhlcmUgYSBkZWZhdWx0PyBJIGNhbid0IGZpbmQgb25lIGFueXdoZXJlLlxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAoZWZmZWN0ID8/IFwibW92ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNaW1lVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNaW1lVHlwZXMuYWRkKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKHsgdHlwZTogaXRlbS50eXBlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihuZXdGaWxlcyk7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obmV3TWltZVR5cGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gSGFuZGxlIHJlc2V0dGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXNcbiAgICAgICAgY29uc3Qgb25EcmFnTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEJvaWxlcnBsYXRlLCBJIGd1ZXNzXG4gICAgICAgIGNvbnN0IG9uRHJhZ092ZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGUgZ2V0dGluZyB0aGUgZHJvcCBkYXRhIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIGNvbnN0IG9uRHJvcCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgY29uc3QgZHJvcERhdGEgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGRyb3BGaWxlID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBpdGVtLmdldEFzU3RyaW5nKHJlc29sdmUpKSkudGhlbihzdHIgPT4gZHJvcERhdGFbdHlwZV0gPSBzdHIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCh7IGRhdGEsIG5hbWU6IGZpbGUubmFtZSwgdHlwZTogZmlsZS50eXBlLCBzaXplOiBkYXRhLmJ5dGVMZW5ndGgsIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoZSkgPT4geyByZWplY3QobmV3IERyb3BwYWJsZUZpbGVFcnJvcihmaWxlLm5hbWUsIHJlYWRlci5lcnJvcikpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BGaWxlLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3BQcm9taXNlc1JlZi5jdXJyZW50LnB1c2goUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IGRyb3BEYXRhLFxuICAgICAgICAgICAgICAgICAgICBmaWxlczogZHJvcEZpbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvbkRyYWdFbnRlciwgb25EcmFnTGVhdmUsIG9uRHJhZ092ZXIsIG9uRHJvcCB9LCBwKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZURyb3BwYWJsZVByb3BzLFxuICAgICAgICBmaWxlc0ZvckNvbnNpZGVyYXRpb24sXG4gICAgICAgIHN0cmluZ3NGb3JDb25zaWRlcmF0aW9uLFxuICAgICAgICBkcm9wcGVkRmlsZXMsXG4gICAgICAgIGRyb3BwZWRTdHJpbmdzLFxuICAgICAgICBkcm9wRXJyb3JcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyb3BwYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbi8qKlxuICogQWxsb3dzIGF0dGFjaGluZyBhbiBldmVudCBoYW5kbGVyIHRvIGFueSAqbm9uLVByZWFjdCogZWxlbWVudCwgYW5kIHJlbW92aW5nIGl0IHdoZW4gdGhlIGNvbXBvbmVudCB1c2luZyB0aGUgaG9vayB1bm1vdW50cy4gVGhlIGNhbGxiYWNrIGRvZXMgbm90IG5lZWQgdG8gYmUgc3RhYmxlIGFjcm9zcyByZW5kZXJzLlxuICpcbiAqIER1ZSB0byB0eXBpbmcgbGltaXRhdGlvbnMsIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgbGlrZSB0aGlzOlxuICpcbiAqIGB1c2VFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJpbnB1dFwiKTxJbnB1dEV2ZW50PihlID0+IHt9KWBcbiAqXG4gKiBUaGUgdHlwZSBhcmd1bWVudCBpcyBvcHRpb25hbCwgYnV0IG5hcnJvd3MgZG93biB0aGUgdHlwZSBmcm9tIFwiYSB1bmlvbiBvZiBhbGwgZXZlbnRzXCIgdG8gd2hhdGV2ZXIgeW91IHNwZWNpZnksIGFuZCBlcnJvcnMgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAqXG4gKiBUaGVyZSBpcyBhIHNlcGFyYXRlIHZlcnNpb24gdGhhdCBhdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byBhIHNldCBvZiBwcm9wcy5cbiAqIEl0IHRha2VzIGRpZmZlcmVudCBldmVudCBzdHJpbmcgdHlwZXMgKG9uRXZlbnQgdnMgb25ldmVudCkuXG4gKlxuICogQHBhcmFtIHRhcmdldCBBICpub24tUHJlYWN0KiBub2RlIHRvIGF0dGFjaCB0aGUgZXZlbnQgdG8uXG4gKiBAcmV0dXJuc1xuICogKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlR2xvYmFsSGFuZGxlcih0YXJnZXQsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAvLyBOb3RlIHRvIHNlbGY6IFRoZSB0eXBpbmcgZG9lc24ndCBpbXByb3ZlIGV2ZW4gaWYgdGhpcyBpcyBzcGxpdCB1cCBpbnRvIGEgc3ViLWZ1bmN0aW9uLlxuICAgIC8vIE5vIG1hdHRlciB3aGF0LCBpdCBzZWVtcyBpbXBvc3NpYmxlIHRvIGdldCB0aGUgaGFuZGxlcidzIGV2ZW50IG9iamVjdCB0eXBlZCBwZXJmZWN0bHkuXG4gICAgLy8gSXQgc2VlbXMgbGlrZSBpdCdzIGd1YXJhbnRlZWQgdG8gYWx3YXlzIGJlIGEgdW5pb24gb2YgYWxsIGF2YWlsYWJsZSB0dXBlcy5cbiAgICAvLyBBZ2Fpbiwgbm8gbWF0dGVyIHdoYXQgY29tYmluYXRpb24gb2Ygc3ViLSBvciBzdWItc3ViLWZ1bmN0aW9ucyB1c2VkLlxuICAgIGxldCBzdGFibGVIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soaGFuZGxlciA/PyAoKCkgPT4geyB9KSk7XG4gICAgaWYgKGhhbmRsZXIgPT0gbnVsbClcbiAgICAgICAgc3RhYmxlSGFuZGxlciA9IG51bGw7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0YWJsZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHN0YWJsZUhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHN0YWJsZUhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfSwgW3RhcmdldCwgdHlwZSwgc3RhYmxlSGFuZGxlcl0pO1xufVxuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB3YXkgdG8gYWRkIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW4gZWxlbWVudC4gVXNlZnVsIHByaW1hcmlseSB3aGVuIGludGVncmF0aW5nIDNyZCBwYXJ0eSBsaWJyYXJpZXMgdGhhdCBleHBlY3QgYSBnZW5lcmljIFwiYWRkIGV2ZW50IGhhbmRsZXJcIiBmdW5jdGlvbi5cbiAqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBhbGxvd3MgeW91IHRvIG1vZGlmeSBhIHNldCBvZiBwcm9wcyB0byBhcHBseSB0aGlzIGhhbmRsZXIuXG4gKlxuICogRm9yIHR5cGluZyByZWFzb25zLCB0aGlzIGZ1bmN0aW9uIGlzIHNwbGl0IGludG8gdHdvLiAgVXNhZ2UgaXMgbGlrZSB0aGUgZm9sbG93aW5nOlxuICpcbiAqIGBgYFxuICogY29uc3QgeyB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzIH0gPSB1c2VMb2NhbEV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD4oKShcIm9uTW91c2VEb3duXCIsIGUgPT4geyAgfSk7XG4gKiBjb25zdCBkaXZQcm9wcyA9IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMocHJvcHMpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbEhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCh0eXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyKTtcbiAgICAgICAgY29uc3QgdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBbdHlwZV06IHN0YWJsZUhhbmRsZXIgfSwgcHJvcHMpO1xuICAgICAgICB9LCBbdHlwZV0pO1xuICAgICAgICByZXR1cm4geyB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzIH07XG4gICAgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWV2ZW50LWhhbmRsZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG4vKipcbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaWZmZXJlbnQgd2F5cyB0aGF0IGEgZm9jdXMgZXZlbnQgY2FuIGhhcHBlbi4gIEFzc3VtZVxuICogdGhlIGZvbGxvd2luZyBzdGVwcyBoYXBwZW4gaW4gb3JkZXI6XG4gKlxuICogMS4gVGhlIHBhZ2UgbG9hZHMuXG4gKiAgICAqIE5vdGhpbmcgaXMgZm9jdXNlZCwgYnV0IGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBgYm9keWAuXG4gKiAgICAqIE5vIGZvY3VzIGV2ZW50cyBhcmUgZmlyZWQuXG4gKiAyLiBUaGUgd2luZG93IGlzIGZvY3VzZWQsIGFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIHJlbWFpbnMgYXMgYGJvZHlgLlxuICogICAgKiBBIGBmb2N1c2AvYGZvY3VzaW5gIGV2ZW50ICpNSUdIVCogYmUgZmlyZWQgZm9yIGBib2R5YC4gRGVwZW5kaW5nIG9uXG4gKiAgICAgIHRoZSBicm93c2VyLCB0aGlzIGRlcGVuZHMgb24gd2hldGhlciB0aGUgaGFuZGxlciB3YXMgYXR0YWNoZWQgdG8gYHdpbmRvd2Agb3IgYGRvY3VtZW50YC5cbiAqICAgICAgUHJvYmFibHkganVzdCBiZXN0IHRvIG5vdCByZWx5IG9uIGl0LCBvciBsaXN0ZW4gdG8gYHdpbmRvd2AgZm9jdXMgZXZlbnRzIGRpcmVjdGx5LlxuICogMy4gQSBmb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXG4gKiAgICAqIGBmb2N1c291dGAgYW5kIGBibHVyYCBhcmUgKm5vdCogZmlyZWQgb24gYGJvZHlgLlxuICogICAgKiBgZm9jdXNgIGFuZCBgZm9jdXNpbmAgYXJlIGZpcmVkIG9uIHRoZSBuZXcgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXG4gKiA0LiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cbiAqICAgICogKipUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byB0aGUgYGJvZHlgKiogYmVmb3JlIGFueSBldmVudCBldmVuIGZpcmVzLlxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIHRoZSBuZXcgZWxlbWVudC5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBub3cgc2V0IHRvIHRoZSBuZXcgZWxlbWVudC5cbiAqICAgICogYGZvY3VzaW5gIGlzIGZpcmVkIG9uIHRoZSBuZXcgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIHRoZSBvbGQgZWxlbWVudC5cbiAqIDUuIEFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byBgYm9keWAuXG4gKiAgICAqIGBibHVyYCBhbmQgYGZvY3Vzb3V0YCBhcmUgZmlyZWQgb24gdGhlIG9sZCBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbC5cbiAqICAgICogYGZvY3VzaW5gIGlzICpub3QqIGZpcmVkIG9uIGBib2R5YC5cbiAqXG4gKlxuICogSW4gc3VtbWFyeTpcbiAqIDEuIEZvY3VzIGV2ZW50cyAqZG8qIG5vdGlmeSB1cyBvZiBhbGwgY2hhbmdlcyBpbiBmb2N1cywgYnV0IHRoZXJlIGlzIG5vIG9uZSBzaW5nbGUgY29tcHJlaGVuc2l2ZSBldmVudCB0aGF0IHByb3ZpZGVzIHVzIHdpdGggYWxsIGF2YWlsYWJsZSBpbmZvcm1hdGlvbi5cbiAqIDIuIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCAqaXMgbm90KiBhbHdheXMgdGhlIHNhbWUgYXMgd2hhdCdzIGJlaW5nIHJlZmVyZW5jZWQgYnkgYSBmb2N1cyBldmVudC4gSW4gcGFydGljdWxhciwgaXQgbWF5IGJlY29tZSBgYm9keWAgYXQgYW55IGFyYml0cmFyeSB0aW1lLlxuICogMy4gQSBgYmx1cmAgd2l0aG91dCBhIGBmb2N1c2AgY2FuIGFuZCB3aWxsIG9jY3VyLiBUaGlzIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBzb2xlbHkgdXNlIGBmb2N1c2AgdG8gZGV0ZWN0IGFsbCBjaGFuZ2VzLlxuICogNC4gQSBgYmx1cmAgZXZlbnQgd2hvc2UgYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlcmUgd2lsbCBiZSBubyBmb2xsb3dpbmcgYGZvY3VzYCBldmVudC5cbiAqXG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBkdW1teSA9IDA7XG5jb25zdCBhY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBuZXcgTWFwKCk7XG5jb25zdCBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IE1hcCgpO1xuY29uc3Qgd2luZG93Rm9jdXNlZFVwZGF0ZXJzID0gbmV3IE1hcCgpO1xubGV0IHdpbmRvd3NGb2N1c2VkID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZm9yRWFjaFVwZGF0ZXIod2luZG93LCBtYXAsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgW290aGVyV2luZG93LCB1cGRhdGVyc10gb2YgbWFwKSB7XG4gICAgICAgIGlmICh3aW5kb3cgPT09IG90aGVyV2luZG93KSB7XG4gICAgICAgICAgICBmb3IgKGxldCB1cGRhdGVyIG9mIHVwZGF0ZXJzKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlcj8uKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGZvY3Vzb3V0KGUpIHtcbiAgICBjb25zdCB3aW5kb3cgPSBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgPT0gbnVsbCkge1xuICAgICAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIGFjdGl2ZUVsZW1lbnRVcGRhdGVycywgbnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBKdXN0IHdhaXQgZm9yIHRoZSBmb2N1c2luIGV2ZW50LlxuICAgIH1cbn1cbmZ1bmN0aW9uIGZvY3VzaW4oZSkge1xuICAgIGNvbnN0IHdpbmRvdyA9IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgbGV0IGN1cnJlbnRseUZvY3VzZWRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCBhY3RpdmVFbGVtZW50VXBkYXRlcnMsIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50KTtcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMsIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIHdpbmRvd0ZvY3VzKGUpIHtcbiAgICBjb25zdCB3aW5kb3cgPSAoZS50YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLnRhcmdldCA6IGUuY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUuY3VycmVudFRhcmdldCA6IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xuICAgIHdpbmRvd3NGb2N1c2VkLnNldCh3aW5kb3csIHRydWUpO1xuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIHdpbmRvd0JsdXIoZSkge1xuICAgIGNvbnN0IHdpbmRvdyA9IChlLnRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUudGFyZ2V0IDogZS5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgV2luZG93ID8gZS5jdXJyZW50VGFyZ2V0IDogZS50YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyk7XG4gICAgd2luZG93c0ZvY3VzZWQuc2V0KHdpbmRvdywgZmFsc2UpO1xuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLCBmYWxzZSk7XG59XG4vKipcbiAqIEFsbG93cyB5b3UgdG8gaW5zcGVjdCB3aGljaCBlbGVtZW50IGluIHRoZSBgZG9jdW1lbnRgIGN1cnJlbnRseSBoYXMgZm9jdXMsIHdoaWNoIHdhcyBtb3N0IHJlY2VudGx5IGZvY3VzZWQgaWYgbm9uZSBhcmUgY3VycmVudGx5LCBhbmQgd2hldGhlciBvciBub3QgdGhlIHdpbmRvdyBoYXMgZm9jdXMgYnkgcmV0dXJuaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxuICogKiBgZ2V0QWN0aXZlRWxlbWVudCgpYFxuICogKiBgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQoKWBcbiAqICogYGdldFdpbmRvd0ZvY3VzZWQoKWBcbiAqICogKipObyBwcm9wLW1vZGlmeWluZyBob29rIGlzIHJldHVybmVkIGJlY2F1c2Ugbm9uZSBpcyBuZWNlc3NhcnkqKlxuICpcbiAqIChUaGUgZG9jdW1lbnQncyBib2R5IHJlY2VpdmluZyBmb2N1cywgbGlrZSBpdCBkb2VzIHdoZW4geW91IGNsaWNrIG9uIGFuIGVtcHR5IGFyZWEsIGlzIGNvdW50ZWQgYXMgbm8gZWxlbWVudCBoYXZpbmcgZm9jdXMgZm9yIGFsbCBpbnRlbnRzIGFuZCBwdXJwb3NlcylcbiAqXG4gKiBUaGlzIGlzIGEgcGFzc2l2ZSBob29rLCBzbyBieSBkZWZhdWx0IGl0IHJldHVybnMgZ2V0dGVyIGZ1bmN0aW9ucyB0aGF0IHJlcG9ydCB0aGlzIGluZm9ybWF0aW9uIGJ1dCB0aGUgY29tcG9uZW50IHdpbGwgbm90IHJlLXJlbmRlciBieSBkZWZhdWx0IHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGNoYW5nZXMuXG4gKlxuICogSWYgeW91IG5lZWQgdGhlIGNvbXBvbmVudCB0byByZS1yZW5kZXIgd2hlbiB0aGUgYWN0aXZlIGVsZW1lbnQgY2hhbmdlcywgdXNlIHRoZSBgb24qQ2hhbmdlYCBhcmd1bWVudHMgdG8gc2V0IHNvbWUgc3RhdGUgb24geW91ciBlbmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3RpdmVFbGVtZW50KHsgb25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UgfSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50Py5kZWZhdWx0VmlldztcbiAgICAgICAgICAgICAgICBpZiAoKGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KT8uc2l6ZSA/PyAwKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZvY3Vzb3V0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1ciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlbSBldmVuIGlmIHRoZXkncmUgdW5kZWZpbmVkIHRvIG1vcmUgZWFzaWx5XG4gICAgICAgICAgICAgICAgLy8gbWFuYWdlIHRoZSBcIj4wIG1lYW5zIGRvbid0IGFkZCBoYW5kbGVyc1wiIGxvZ2ljLlxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsQWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpID8/IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbExhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpID8/IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFdpbmRvd0ZvY3VzZWRVcGRhdGVycyA9IHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgbG9jYWxBY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxvY2FsTGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5hZGQoc2V0TGFzdEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxvY2FsV2luZG93Rm9jdXNlZFVwZGF0ZXJzLmFkZChzZXRXaW5kb3dGb2N1c2VkKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2V0KHdpbmRvdywgbG9jYWxBY3RpdmVFbGVtZW50VXBkYXRlcnMpO1xuICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuc2V0KHdpbmRvdywgbG9jYWxMYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzKTtcbiAgICAgICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuc2V0KHdpbmRvdywgbG9jYWxXaW5kb3dGb2N1c2VkVXBkYXRlcnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KS5kZWxldGUoc2V0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldExhc3RBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmdldCh3aW5kb3cpLmRlbGV0ZShzZXRXaW5kb3dGb2N1c2VkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZvY3Vzb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1cik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICB9KTtcbiAgICBjb25zdCBbZ2V0QWN0aXZlRWxlbWVudCwgc2V0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25BY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtnZXRMYXN0QWN0aXZlRWxlbWVudCwgc2V0TGFzdEFjdGl2ZUVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2dldFdpbmRvd0ZvY3VzZWQsIHNldFdpbmRvd0ZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uV2luZG93Rm9jdXNlZENoYW5nZSwgcmV0dXJuVHJ1ZSk7XG4gICAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgdXNlQWN0aXZlRWxlbWVudFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkIH07XG59XG5mdW5jdGlvbiByZXR1cm5UcnVlKCkgeyByZXR1cm4gdHJ1ZTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjdGl2ZS1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZnVuY3Rpb24gbm9vcCgpIHsgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUhhc0ZvY3VzKHsgb25Gb2N1c2VkQ2hhbmdlZCwgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UgfSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkZvY3VzZWRDaGFuZ2VkLCBvbkZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSk7XG4gICAgY29uc3QgW2dldEZvY3VzZWQsIHNldEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRm9jdXNlZENoYW5nZWQsIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCBbZ2V0Rm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXJdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRMYXN0Rm9jdXNlZCwgc2V0TGFzdEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldExhc3RGb2N1c2VkSW5uZXIsIHNldExhc3RGb2N1c2VkSW5uZXJdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQsIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCB7IGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkLCB1c2VBY3RpdmVFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoe1xuICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChhY3RpdmVFbGVtZW50LCBwcmV2QWN0aXZlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkID0gKHNlbGZFbGVtZW50ICE9IG51bGwgJiYgKHNlbGZFbGVtZW50ID09IGFjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbm5lciA9ICghIXNlbGZFbGVtZW50Py5jb250YWlucyhhY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBzZXRGb2N1c2VkKGZvY3VzZWQpO1xuICAgICAgICAgICAgc2V0Rm9jdXNlZElubmVyKGZvY3VzZWRJbm5lcik7XG4gICAgICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U/LihhY3RpdmVFbGVtZW50LCBwcmV2QWN0aXZlRWxlbWVudCk7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGxhc3RBY3RpdmVFbGVtZW50LCBwcmV2TGFzdEFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZCA9IChzZWxmRWxlbWVudCAhPSBudWxsICYmIChzZWxmRWxlbWVudCA9PSBsYXN0QWN0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZElubmVyID0gKCEhc2VsZkVsZW1lbnQ/LmNvbnRhaW5zKGxhc3RBY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBzZXRMYXN0Rm9jdXNlZChmb2N1c2VkKTtcbiAgICAgICAgICAgIHNldExhc3RGb2N1c2VkSW5uZXIoZm9jdXNlZElubmVyKTtcbiAgICAgICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U/LihsYXN0QWN0aXZlRWxlbWVudCwgcHJldkxhc3RBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBvbldpbmRvd0ZvY3VzZWRDaGFuZ2VcbiAgICB9KTtcbiAgICBjb25zdCB1c2VIYXNGb2N1c1Byb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7IHJldHVybiB1c2VBY3RpdmVFbGVtZW50UHJvcHMocHJvcHMpOyB9LCBbdXNlQWN0aXZlRWxlbWVudFByb3BzXSk7XG4gICAgcmV0dXJuIHsgdXNlSGFzRm9jdXNQcm9wcywgZ2V0RWxlbWVudCwgZ2V0Rm9jdXNlZCwgZ2V0Rm9jdXNlZElubmVyLCBnZXRMYXN0Rm9jdXNlZCwgZ2V0TGFzdEZvY3VzZWRJbm5lciwgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xuICAgICAgICBpZiAoaW50ZXJ2YWwgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAvLyB0aGF0IGNsZWFycyBhbmQgcmVzZXRzIHRoZSBpbnRlcnZhbCBpZiBpdCBjaGFuZ2VzLlxuICAgICAgICBjb25zdCBhZGp1c3RhYmxlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbGFzdERlbGF5VXNlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgbGFzdERlbGF5VXNlZCA9IGN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGludGVydmFsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiLyohXG4qIHRhYmJhYmxlIDUuMi4xXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbnZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdhW2hyZWZdJywgJ2J1dHRvbicsICdbdGFiaW5kZXhdJywgJ2F1ZGlvW2NvbnRyb2xzXScsICd2aWRlb1tjb250cm9sc10nLCAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnLCAnZGV0YWlscyddO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcbnZhciBtYXRjaGVzID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gKCkge30gOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxudmFyIGdldENhbmRpZGF0ZXMgPSBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKGVsLCBpbmNsdWRlQ29udGFpbmVyLCBmaWx0ZXIpIHtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3RvcikpO1xuXG4gIGlmIChpbmNsdWRlQ29udGFpbmVyICYmIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgfVxuXG4gIGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLmZpbHRlcihmaWx0ZXIpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbnZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSc7XG59O1xuXG52YXIgZ2V0VGFiaW5kZXggPSBmdW5jdGlvbiBnZXRUYWJpbmRleChub2RlKSB7XG4gIHZhciB0YWJpbmRleEF0dHIgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuXG4gIGlmICghaXNOYU4odGFiaW5kZXhBdHRyKSkge1xuICAgIHJldHVybiB0YWJpbmRleEF0dHI7XG4gIH0gLy8gQnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cblxuXG4gIGlmIChpc0NvbnRlbnRFZGl0YWJsZShub2RlKSkge1xuICAgIHJldHVybiAwO1xuICB9IC8vIGluIENocm9tZSwgPGRldGFpbHMvPiwgPGF1ZGlvIGNvbnRyb2xzLz4gYW5kIDx2aWRlbyBjb250cm9scy8+IGVsZW1lbnRzIGdldCBhIGRlZmF1bHRcbiAgLy8gIGB0YWJJbmRleGAgb2YgLTEgd2hlbiB0aGUgJ3RhYmluZGV4JyBhdHRyaWJ1dGUgaXNuJ3Qgc3BlY2lmaWVkIGluIHRoZSBET00sXG4gIC8vICB5ZXQgdGhleSBhcmUgc3RpbGwgcGFydCBvZiB0aGUgcmVndWxhciB0YWIgb3JkZXI7IGluIEZGLCB0aGV5IGdldCBhIGRlZmF1bHRcbiAgLy8gIGB0YWJJbmRleGAgb2YgMDsgc2luY2UgQ2hyb21lIHN0aWxsIHB1dHMgdGhvc2UgZWxlbWVudHMgaW4gdGhlIHJlZ3VsYXIgdGFiXG4gIC8vICBvcmRlciwgY29uc2lkZXIgdGhlaXIgdGFiIGluZGV4IHRvIGJlIDAuXG5cblxuICBpZiAoKG5vZGUubm9kZU5hbWUgPT09ICdBVURJTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ1ZJREVPJyB8fCBub2RlLm5vZGVOYW1lID09PSAnREVUQUlMUycpICYmIG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG5cbnZhciBzb3J0T3JkZXJlZFRhYmJhYmxlcyA9IGZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn07XG5cbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xuXG52YXIgaXNIaWRkZW5JbnB1dCA9IGZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufTtcblxudmFyIGlzRGV0YWlsc1dpdGhTdW1tYXJ5ID0gZnVuY3Rpb24gaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gJ0RFVEFJTFMnICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC50YWdOYW1lID09PSAnU1VNTUFSWSc7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBpc1RhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHJhZGlvU2NvcGUgPSBub2RlLmZvcm0gfHwgbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIHZhciBxdWVyeVJhZGlvcyA9IGZ1bmN0aW9uIHF1ZXJ5UmFkaW9zKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuXG4gIHZhciByYWRpb1NldDtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mod2luZG93LkNTUy5lc2NhcGUobm9kZS5uYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mobm9kZS5uYW1lKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdMb29rcyBsaWtlIHlvdSBoYXZlIGEgcmFkaW8gYnV0dG9uIHdpdGggYSBuYW1lIGF0dHJpYnV0ZSBjb250YWluaW5nIGludmFsaWQgQ1NTIHNlbGVjdG9yIGNoYXJhY3RlcnMgYW5kIG5lZWQgdGhlIENTUy5lc2NhcGUgcG9seWZpbGw6ICVzJywgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0LCBub2RlLmZvcm0pO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn07XG5cbnZhciBpc1JhZGlvID0gZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn07XG5cbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufTtcblxudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4obm9kZSwgZGlzcGxheUNoZWNrKSB7XG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlVW5kZXJEZXRhaWxzLCAnZGV0YWlsczpub3QoW29wZW5dKSAqJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2Z1bGwnKSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlzcGxheUNoZWNrID09PSAnbm9uLXplcm8tYXJlYScpIHtcbiAgICB2YXIgX25vZGUkZ2V0Qm91bmRpbmdDbGllID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgd2lkdGggPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG5cbiAgICByZXR1cm4gd2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTsgLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxuXG5cbnZhciBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0ID0gZnVuY3Rpb24gaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSB7XG4gIGlmIChpc0lucHV0KG5vZGUpIHx8IG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcgfHwgbm9kZS50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAocGFyZW50Tm9kZS50YWdOYW1lID09PSAnRklFTERTRVQnICYmIHBhcmVudE5vZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgLy8gbG9vayBmb3IgdGhlIGZpcnN0IDxsZWdlbmQ+IGFzIGFuIGltbWVkaWF0ZSBjaGlsZCBvZiB0aGUgZGlzYWJsZWRcbiAgICAgICAgLy8gIDxmaWVsZHNldD46IGlmIHRoZSBub2RlIGlzIGluIHRoYXQgbGVnZW5kLCBpdCdsbCBiZSBlbmFibGVkIGV2ZW5cbiAgICAgICAgLy8gIHRob3VnaCB0aGUgZmllbGRzZXQgaXMgZGlzYWJsZWQ7IG90aGVyd2lzZSwgdGhlIG5vZGUgaXMgaW4gYVxuICAgICAgICAvLyAgc2Vjb25kYXJ5L3N1YnNlcXVlbnQgbGVnZW5kLCBvciBzb21ld2hlcmUgZWxzZSB3aXRoaW4gdGhlIGZpZWxkc2V0XG4gICAgICAgIC8vICAoaG93ZXZlciBkZWVwIG5lc3RlZCkgYW5kIGl0J2xsIGJlIGRpc2FibGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudE5vZGUuY2hpbGRyZW4uaXRlbShpKTtcblxuICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAnTEVHRU5EJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5zKG5vZGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gdGhlIG5vZGUgaXNuJ3QgaW4gdGhlIGZpcnN0IGxlZ2VuZCAoaW4gZG9jIG9yZGVyKSwgc28gbm8gbWF0dGVyXG4gICAgICAgICAgICAvLyAgd2hlcmUgaXQgaXMgbm93LCBpdCdsbCBiZSBkaXNhYmxlZFxuXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyB0aGUgbm9kZSBpc24ndCBpbiBhIGxlZ2VuZCwgc28gbm8gbWF0dGVyIHdoZXJlIGl0IGlzIG5vdywgaXQnbGwgYmUgZGlzYWJsZWRcblxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfSAvLyBlbHNlLCBub2RlJ3MgdGFiYmFibGUvZm9jdXNhYmxlIHN0YXRlIHNob3VsZCBub3QgYmUgYWZmZWN0ZWQgYnkgYSBmaWVsZHNldCdzXG4gIC8vICBlbmFibGVkL2Rpc2FibGVkIHN0YXRlXG5cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAobm9kZS5kaXNhYmxlZCB8fCBpc0hpZGRlbklucHV0KG5vZGUpIHx8IGlzSGlkZGVuKG5vZGUsIG9wdGlvbnMuZGlzcGxheUNoZWNrKSB8fCAvLyBGb3IgYSBkZXRhaWxzIGVsZW1lbnQgd2l0aCBhIHN1bW1hcnksIHRoZSBzdW1tYXJ5IGVsZW1lbnQgZ2V0cyB0aGUgZm9jdXNcbiAgaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkgfHwgaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5kaWRhdGUsIGkpIHtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlcy5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5ub2RlO1xuICB9KS5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290RWxlbWVudCBUaGUgRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlU3VidHJlZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5zdXJlVW50YWJiYWJsZScsXG5cblxuICAgICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICAgIGlmICggLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleCA9PT0gLTEgJiYgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShpbmVydFJvb3QpO1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE5vZGU7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgICAqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICAgICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgICAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICAgICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAgICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gICAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuXG59KSkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsImltcG9ydCBcIndpY2ctaW5lcnRcIjtcbmltcG9ydCBcImJsb2NraW5nLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5jb25zdCBibG9ja2luZ0VsZW1lbnRzID0gZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHM7XG4vKipcbiAqIEFsbG93cyBhbiBlbGVtZW50IHRvIHRyYXAgZm9jdXMgYnkgYXBwbHlpbmcgdGhlIFwiaW5lcnRcIiBhdHRyaWJ1dGUgdG8gYWxsIHNpYmxpbmcsIGF1bnQsIGFuZCB1bmNsZSBub2Rlcy5cbiAqXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgY29uc2VjdXRpdmUgY2FsbHMgd2l0aCBhIGxvb3NlbHkgYXBwbGllZCBzdGFjayBvcGVyYXRpb25cbiAqIChzcGVjaWZpY2FsbHkgdmlhIGBibG9ja2luZ0VsZW1lbnRzYCwgd2l0aCBhIHNtYWxsIHBvbHlmaWxsIGJlY2F1c2UgSSdtIG5vdCBzdXJlIGhvdyBsb25nXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxuICogQHBhcmFtIHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xuICAgIC8qKlxuICAgICAqIFB1c2gvcG9wIHRoZSBlbGVtZW50IGZyb20gdGhlIGJsb2NraW5nRWxlbWVudHMgc3RhY2suXG4gICAgICovXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gU29tZXRpbWVzIGJsb2NraW5nRWxlbWVudHMgd2lsbCBmYWlsIGlmLCBmb3IgZXhhbXBsZSxcbiAgICAgICAgICAgIC8vIHRoZSB0YXJnZXQgZWxlbWVudCBpc24ndCBjb25uZWN0ZWQgdG8gZG9jdW1lbnQuYm9keS5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcmFyZSwgYnV0IGl0J3MgYmV0dGVyIHRvIGZhaWwgc2lsZW50bHkgd2l0aCB3ZWlyZCB0YWJiaW5nIGJlaGF2aW9yXG4gICAgICAgICAgICAvLyB0aGFuIHRvIGNyYXNoIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucmVtb3ZlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIFdlbGwsIHNlbWktc2lsZW50bHkuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdGFyZ2V0XSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wRWxlbWVudCgpIHtcbiAgICByZXR1cm4gYmxvY2tpbmdFbGVtZW50cy50b3A7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYmxvY2tpbmctZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBpc0ZvY3VzYWJsZSB9IGZyb20gXCJ0YWJiYWJsZVwiO1xuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0VG9wRWxlbWVudCwgdXNlQmxvY2tpbmdFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWJsb2NraW5nLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmNvbnN0IGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlIH0pIHtcbiAgICBjb25zdCBbZWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcbiAgICAvL2NvbnN0IFtsYXN0QWN0aXZlRWxlbWVudCwgc2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50XSA9IHVzZVN0YXRlPE5vZGUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCB7IGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkLCB1c2VBY3RpdmVFbGVtZW50UHJvcHMgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoe30pO1xuICAgIC8vIFdoZW4gdGhlIHRyYXAgYmVjb21lcyBhY3RpdmUsIGJlZm9yZSB3ZSBsZXQgdGhlIGJsb2NraW5nRWxlbWVudHMgaG9vayBydW4sXG4gICAgLy8ga2VlcCB0cmFjayBvZiB3aGF0ZXZlcidzIGN1cnJlbnRseSBmb2N1c2VkIGFuZCBzYXZlIGl0LlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0cmFwQWN0aXZlICYmIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XG4gICAgICAgICAgICAvLyB0byB3aGF0ZXZlcidzIGN1cnJlbnRseSBhdCB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLnNldChnZXRUb3BFbGVtZW50KCksIGdldExhc3RBY3RpdmVFbGVtZW50KCkgPz8gZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIH1cbiAgICB9LCBbdHJhcEFjdGl2ZSwgZWxlbWVudF0pO1xuICAgIHVzZUJsb2NraW5nRWxlbWVudCh0cmFwQWN0aXZlID8gZWxlbWVudCA6IG51bGwpO1xuICAgIC8qKlxuICAgICAqIEFueSB0aW1lIHdlIGFjdGl2YXRlIG9yIGRlYWN0aXZhdGUgdGhlIHRyYXAsXG4gICAgICogY2hhbmdlIGZvY3VzIHRvIHNvbWV0aGluZyBlbHNlIChzb21ldGhpbmcgaW5cbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcbiAgICAgKiB0cmFja2VkIGluIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyBpZiBub3QpXG4gICAgICovXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXG4gICAgICAgICAgICAgICAgLy8gLi4ucmVhc29ucz9cbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1cyB0byB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gdGhhdCBoYXMgcmV0dXJuZWQgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvLmdldChnZXRUb3BFbGVtZW50KCkpPy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyYWZIYW5kbGUpXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW3RyYXBBY3RpdmUsIGVsZW1lbnRdKTtcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtbW9kYWxcIjogdHJhcEFjdGl2ZSA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkIH0sIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VBY3RpdmVFbGVtZW50UHJvcHMocHJvcHMpKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRm9jdXNUcmFwUHJvcHMsXG4gICAgICAgIGdldEVsZW1lbnRcbiAgICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBjb250YWluZWQgd2l0aGluIHRoZSBnaXZlbiBub2RlLCBvciBudWxsIGlmIG5vbmUgYXJlIGZvdW5kLlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3RGb2N1c2FibGUoZWxlbWVudCkge1xuICAgIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsZW1lbnQsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7IGFjY2VwdE5vZGU6IChub2RlKSA9PiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgaXNGb2N1c2FibGUobm9kZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQKSB9KTtcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IHRyZWVXYWxrZXIuZmlyc3RDaGlsZCgpO1xuICAgIHJldHVybiBmaXJzdEZvY3VzYWJsZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb2N1cy10cmFwLmpzLm1hcCIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgZn1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIGQsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpkKGQobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2QobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9ZChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpkfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sYz0hMD09PXQuX19oO3IuX191Kyt8fGN8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PWQobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LHo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEgobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIFo9aC5ldmVudDtmdW5jdGlvbiBZKCl7fWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gcSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gWiYmKG49WihuKSksbi5wZXJzaXN0PVksbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD0kLG4uaXNEZWZhdWx0UHJldmVudGVkPXEsbi5uYXRpdmVFdmVudD1ufTt2YXIgRyxKPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxLPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHU9LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgbyBpbiByPXt9LGUpe3ZhciBpPWVbb107ViYmXCJjaGlsZHJlblwiPT09byYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWl8fChcImRlZmF1bHRWYWx1ZVwiPT09byYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9vPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1vJiYhMD09PWk/aT1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChvKT9vPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChvK3QpJiYheihlLnR5cGUpP289XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KG8pP289by50b0xvd2VyQ2FzZSgpOnUmJlAudGVzdChvKT9vPW8ucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PWkmJihpPXZvaWQgMCkscltvXT1pKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEouZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsSikpLG4uJCR0eXBlb2Y9aixLJiZLKG4pfTt2YXIgUT1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtRJiZRKG4pLEc9bi5fX2N9O3ZhciBYPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gRy5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxubj1cIjE3LjAuMlwiO2Z1bmN0aW9uIHRuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBlbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIHJuKG4pe3JldHVybiBlbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHVuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIG9uKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGNuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Yyx1c2VEZWJ1Z1ZhbHVlOmYsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOkIsaHlkcmF0ZTpILHVubW91bnRDb21wb25lbnRBdE5vZGU6dW4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OnRuLGNsb25lRWxlbWVudDpybixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmVuLGZpbmRET01Ob2RlOm9uLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpjbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpsbixTdHJpY3RNb2RlOnYsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6WH07ZXhwb3J0e25uIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbixCIGFzIHJlbmRlcixIIGFzIGh5ZHJhdGUsdW4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCx0biBhcyBjcmVhdGVGYWN0b3J5LHJuIGFzIGNsb25lRWxlbWVudCxlbiBhcyBpc1ZhbGlkRWxlbWVudCxvbiBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixjbiBhcyBmbHVzaFN5bmMsbG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxYIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJleHBvcnQgY29uc3QgRXZlbnREZXRhaWwgPSBTeW1ib2woXCJldmVudC1kZXRhaWxcIik7XG5leHBvcnQgZnVuY3Rpb24gZW5oYW5jZUV2ZW50KGUsIGRldGFpbCkge1xuICAgIGxldCBldmVudCA9IGU7XG4gICAgZXZlbnRbRXZlbnREZXRhaWxdID0gZGV0YWlsO1xuICAgIHJldHVybiBldmVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlR2xvYmFsSGFuZGxlciwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmxldCBwdWxzZSA9IChcInZpYnJhdGVcIiBpbiBuYXZpZ2F0b3IpID8gKCgpID0+IG5hdmlnYXRvci52aWJyYXRlKDEwKSkgOiAoKCkgPT4geyB9KTtcbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBlbmFibGUvZGlzYWJsZSBidXR0b24gdmlicmF0aW9uIHB1bHNlcyBvbiBhbiBhcHAtd2lkZSBzY2FsZS5cbiAqXG4gKlxuICogQHBhcmFtIGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIGEgYnV0dG9uIGlzIHRhcHBlZC5cbiAqIChEZWZhdWx0IGlzIGAoKSA9PiBuYXZpZ2F0b3IudmlicmF0ZSgxMClgIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBpdCwgYSBub29wIG90aGVyd2lzZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEJ1dHRvblZpYnJhdGUoZnVuYykge1xuICAgIHB1bHNlID0gZnVuYztcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVzKHRhcmdldCwgZXhjbHVkZSkge1xuICAgIGlmIChleGNsdWRlPy5bdGFyZ2V0XSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBzZWxlY3Rpb24uY29udGFpbnNOb2RlIGRvZXNuJ3QgYWNjb3VudCBmb3Igc2VsZWN0aW9uLmlzQ29sbGFwc2VkLFxuICogc28gaGVyZSdzIGEgd29ya2Fyb3VuZCBmb3IgdGhhdC5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gbm9kZUhhc1NlbGVjdGVkVGV4dChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoc2VsZWN0aW9uPy5jb250YWluc05vZGUoZWxlbWVudCwgdHJ1ZSkgJiYgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBBZGRzIHRoZSBuZWNlc3NhcnkgZXZlbnQgaGFuZGxlcnMgdG8gY3JlYXRlIGEgXCJwcmVzc1wiLWxpa2UgZXZlbnQgZm9yXG4gKiBidXR0b25zIGFuZCBhbnl0aGluZyBlbHNlIHRoYXQncyBcImNsaWNrL3RhcC9wcmVzcy90b3VjaFwiLWFibGUuXG4gKlxuICogTm90YWJseSwgdGhlIGZvbGxvd2luZyBjYXNlcyBhcmUgY292ZXJlZDpcbiAqICogVGhlIHRhcmdldCBlbGVtZW50IGlzIHByb3Blcmx5IGZvY3VzZWQsIGV2ZW4gb24gaU9TIFNhZmFyaSAoKmVzcGVjaWFsbHkqIG9uIGlPUyBTYWZhcmkpXG4gKiAqIERvdWJsZS1jbGlja3Mgd29uJ3Qgc2VsZWN0IHRleHQuXG4gKiAqIENvbnZlcnNlbHksIG1hbnVhbGx5IHNlbGVjdGluZyB0ZXh0IHdvbid0IGludm9rZSBhIHByZXNzLlxuICogKiBLZXlib2FyZCBldmVudHMgJm1kYXNoOyBgZW50ZXJgIGltbWVkaWF0ZWx5IGludm9rZXMgdGhlIGhhbmRsZXIsIHdoaWxlIGBzcGFjZWAgaW52b2tlcyBpdCBvbiBrZXl1cC5cbiAqICogSGFwdGljIGZlZWRiYWNrIChvbiwgbGlrZSwgdGhlIG9uZSBicm93c2VyIGNvbWJpbmF0aW9uIHRoYXQgc3VwcG9ydHMgaXQgJm1kYXNoOyB0aGlzIGNhbiBiZSBkaXNhYmxlZCBhcHAtd2lkZSB3aXRoIGBzZXRCdXR0b25WaWJyYXRlYClcbiAqXG4gKiBJbiBhZGRpdGlvbiwgd2hlbiB0aGUgQ1NTIGA6YWN0aXZlYCBwc2V1ZG8tY2xhc3Mgd291bGQgYXBwbHkgdG8gYSBub3JtYWwgYnV0dG9uXG4gKiAoaS5lLiB3aGVuIGhvbGRpbmcgdGhlIHNwYWNlYmFyIG9yIGR1cmluZyBtb3VzZWRvd24pLCBgeyBcImRhdGEtcHNldWRvLWFjdGl2ZVwiOiBcInRydWVcIiB9YFxuICogaXMgYWRkZWQgdG8gdGhlIHByb3BzLiAgWW91IGNhbiBlaXRoZXIgbGV0IGl0IHBhc3MgdGhyb3VnaCBhbmQgc3R5bGUgaXQgdGhyb3VnaCBuZXcgQ1NTLFxuICogb3IgaW5zcGVjdCB0aGUgcmV0dXJuZWQgcHJvcHMgZm9yIGl0IGFuZCBhZGQgZS5nLiBhbiBgLmFjdGl2ZWAgY2xhc3MgZm9yIGV4aXN0aW5nIENTU1xuICpcbiAqIEBwYXJhbSBvbkNsaWNrU3luY1xuICogQHBhcmFtIGV4Y2x1ZGUgV2hldGhlciB0aGUgcG9seWZpbGwgc2hvdWxkbid0IGFwcGx5IChjYW4gc3BlY2lmeSBmb3Igc3BlY2lmaWMgaW50ZXJhY3Rpb25zKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJlc3NFdmVudEhhbmRsZXJzKG9uQ2xpY2tTeW5jLCBleGNsdWRlKSB7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgIC8vIEEgYnV0dG9uIGNhbiBiZSBhY3RpdmF0ZWQgaW4gbXVsdGlwbGUgd2F5cywgc28gb24gdGhlIG9mZiBjaGFuY2VcbiAgICAvLyB0aGF0IG11bHRpcGxlIGFyZSB0cmlnZ2VyZWQgYXQgb25jZSwgd2Ugb25seSAqYWN0dWFsbHkqIHJlZ2lzdGVyXG4gICAgLy8gYSBwcmVzcyBvbmNlIGFsbCBvZiBvdXIgXCJvblwiIHNpZ25hbHMgaGF2ZSB0dXJuZWQgYmFjayB0byBcIm9mZlwiLlxuICAgIC8vIFdlIGFwcHJveGltYXRlIHRoaXMgYnkganVzdCBpbmNyZW1lbnRpbmcgd2hlbiBhY3RpdmUsIGFuZFxuICAgIC8vIGRlY3JlbWVudGluZyB3aGVuIGRlYWN0aXZhdGVkLlxuICAgIC8vXG4gICAgLy8gQXMgYW4gZW1lcmdlbmN5IGZhaWxzYWZlLCB3aGVuIHRoZSBlbGVtZW50IGxvb3NlcyBmb2N1cyxcbiAgICAvLyB0aGlzIGlzIHJlc2V0IGJhY2sgdG8gMC5cbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmUsIGdldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICAvLyBJZiB3ZSB0aGUgY3VycmVudCB0ZXh0IHNlbGVjdGlvbiBjaGFuZ2VzIHRvIGluY2x1ZGUgdGhpcyBlbGVtZW50XG4gICAgLy8gRFVSSU5HIGUuZy4gYSBtb3VzZWRvd24sIHRoZW4gd2UgZG9uJ3Qgd2FudCB0aGUgbW91c2V1cCB0byBcImNvdW50XCIsIGFzIGl0IHdlcmUsXG4gICAgLy8gYmVjYXVzZSBpdHMgb25seSBwdXJwb3NlIHdhcyBzZWxlY3RpbmcgdGV4dCwgbm90IGNsaWNraW5nIGJ1dHRvbnMuXG4gICAgLy9cbiAgICAvLyBUbyBjYXRjaCB0aGlzLCBhbnkgdGltZSB0aGUgdGV4dCBzZWxlY3Rpb24gaW5jbHVkZXMgdXMgd2hpbGUgaW4gdGhlIG1pZGRsZVxuICAgIC8vIG9mIGEgY2xpY2ssIHRoaXMgZmxhZyBpcyBzZXQsIHdoaWNoIGNhbmNlbHMgdGhlIGFjdGl2YXRpb24gb2YgYSBwcmVzcy5cbiAgICAvLyBUaGUgZmxhZyBpcyByZXNldCBhbnkgdGltZSB0aGUgc2VsZWN0aW9uIGlzIGVtcHR5IG9yIHRoZSBidXR0b24gaXNcbiAgICAvLyBubyBsb25nZXIgYWN0aXZlLlxuICAgIGNvbnN0IFt0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uLCBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VHbG9iYWxIYW5kbGVyKGRvY3VtZW50LCBcInNlbGVjdGlvbmNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgc2V0VGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbihhY3RpdmUgPT0gMCA/IGZhbHNlIDogbm9kZUhhc1NlbGVjdGVkVGV4dChnZXRFbGVtZW50KCkpKTtcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlID09IDApXG4gICAgICAgICAgICBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uKGZhbHNlKTtcbiAgICB9LCBbYWN0aXZlID09IDBdKTtcbiAgICBjb25zdCBvbkFjdGl2ZVN0YXJ0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKGEgPT4gKythKTtcbiAgICB9KTtcbiAgICBjb25zdCBvbkFjdGl2ZVN0b3AgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoYSA9PiBNYXRoLm1heCgwLCAtLWEpKTtcbiAgICAgICAgaWYgKHRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24pIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0QWN0aXZlKCkgPD0gMCkge1xuICAgICAgICAgICAgaGFuZGxlUHJlc3MoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBoYW5kbGVQcmVzcyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrU3luYykge1xuICAgICAgICAgICAgLy8gTm90ZTogVGhlIGVsZW1lbnQgaXMgZm9jdXNlZCBoZXJlIGJlY2F1c2Ugb2YgaU9TIFNhZmFyaS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBJdCdzIGFsd2F5cyBpT1MgU2FmYXJpLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGlPUyBTYWZhcmkgKHRlc3RlZCBvbiAxMikgZG93bnJpZ2h0IHJlZnVzZXMgdG8gYWxsb3cgXG4gICAgICAgICAgICAvLyBlbGVtZW50cyB0byBiZSBtYW51YWxseSBmb2N1c2VkIFVOTEVTUyBpdCBoYXBwZW5zIHdpdGhpblxuICAgICAgICAgICAgLy8gYW4gZXZlbnQgaGFuZGxlciBsaWtlIHRoaXMuICBJdCBhbHNvIGRvZXNuJ3QgZm9jdXNcbiAgICAgICAgICAgIC8vIGJ1dHRvbnMgYnkgZGVmYXVsdCB3aGVuIGNsaWNrZWQsIHRhcHBlZCwgZXRjLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIElmIGl0IGJlY29tZXMgcHJvYmxlbWF0aWMgdGhhdCBidXR0b24tbGlrZXMgZXhwbGljaXRseSBiZWNvbWVcbiAgICAgICAgICAgIC8vIGZvY3VzZWQgd2hlbiB0aGV5IGFyZSBwcmVzc2VkLCB0aGVuIGFuIGFsdGVybmF0aXZlIHNvbHV0aW9uIGZvclxuICAgICAgICAgICAgLy8gdGhlIHF1ZXN0aW9uIG9mIFwiaG93IGRvIG1lbnUgYnV0dG9ucyBrZWVwIHRoZWlyIG1lbnVzIG9wZW5cIlxuICAgICAgICAgICAgLy8gYW5kIG90aGVyIGZvY3VzLXJlbGF0ZWQgbm9uc2Vuc2UgbmVlZHMgdG8gYmUgZmlndXJlZCBvdXQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRm9yIGlPUyBTYWZhcmkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIFwiZm9jdXNcIiBpbiBlbGVtZW50KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmZvY3VzKCk7XG4gICAgICAgICAgICAvLyBXaGF0ZXZlciB0aGUgYnJvd3NlciB3YXMgZ29pbmcgdG8gZG8gd2l0aCB0aGlzIGV2ZW50LFxuICAgICAgICAgICAgLy8gZm9yZ2V0IGl0LiBXZSdyZSB0dXJuaW5nIGl0IGludG8gYSBcInByZXNzXCIgZXZlbnQuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBBbHNvIHN0b3AgYW55b25lIGVsc2UgZnJvbSBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudCxcbiAgICAgICAgICAgIC8vIHNpbmNlIHdlJ3JlIGV4cGxpY2l0bHkgaGFuZGxpbmcgaXQuXG4gICAgICAgICAgICAvLyAoTm90YWJseSwgdGhpcyBhbGxvd3MgbGFiZWxzIHRvIHdyYXAgaW5wdXRzLCB3aXRoIHRoZW1cbiAgICAgICAgICAgIC8vIGJvdGggaGF2aW5nIHByZXNzIGV2ZW50IGhhbmRsZXJzLCB3aXRob3V0IGRvdWJsZS1maXJpbmcpXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy8gSGFwdGljIGZlZWRiYWNrIGZvciB0aGlzIHByZXNzIGV2ZW50XG4gICAgICAgICAgICBwdWxzZSgpO1xuICAgICAgICAgICAgLy8gQWN0dWFsbHkgY2FsbCBvdXIgaGFuZGxlci5cbiAgICAgICAgICAgIG9uQ2xpY2tTeW5jKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcbiAgICAgICAgLy8gU3RvcCBkb3VibGUgY2xpY2tzIGZyb20gc2VsZWN0aW5nIHRleHQgaW4gYW4gY29tcG9uZW50IHRoYXQncyAqc3VwcG9zZWQqIHRvIGJlIGFjdGluZyBsaWtlIGEgYnV0dG9uLFxuICAgICAgICAvLyBidXQgYWxzbyBkb24ndCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gc2VsZWN0aW5nIHRoYXQgdGV4dCBtYW51YWxseSBpZiB0aGV5IHJlYWxseSB3YW50IHRvXG4gICAgICAgIC8vICh3aGljaCB1c2VyLXNlbGVjdDogbm9uZSB3b3VsZCBkbywgYnV0IGNhbmNlbGxpbmcgYSBkb3VibGUgY2xpY2sgb24gbW91c2VEb3duIGRvZXNuJ3QpXG4gICAgICAgIGlmIChlLmRldGFpbCA+IDEpXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMClcbiAgICAgICAgICAgIG9uQWN0aXZlU3RhcnQoZSk7XG4gICAgfTtcbiAgICBjb25zdCBvbk1vdXNlVXAgPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwICYmIGFjdGl2ZSA+IDApXG4gICAgICAgICAgICBvbkFjdGl2ZVN0b3AoZSk7XG4gICAgfTtcbiAgICBjb25zdCBvbkJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoMCk7XG4gICAgfTtcbiAgICBjb25zdCBvbk1vdXNlT3V0ID0gZXhjbHVkZXMoXCJjbGlja1wiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IG9uQmx1cjtcbiAgICBjb25zdCBvbktleURvd24gPSBleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpICYmIGV4Y2x1ZGVzKFwiZW50ZXJcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCIgXCIgJiYgb25DbGlja1N5bmMgJiYgIWV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkpIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGFjdHVhbGx5IGFjdGl2YXRlIGl0IG9uIGEgc3BhY2Uga2V5ZG93blxuICAgICAgICAgICAgLy8gYnV0IHdlIGRvIHByZXZlbnREZWZhdWx0IHRvIHN0b3AgdGhlIHBhZ2UgZnJvbSBzY3JvbGxpbmcuXG4gICAgICAgICAgICBvbkFjdGl2ZVN0YXJ0KGUpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIgJiYgIWV4Y2x1ZGVzKFwiZW50ZXJcIiwgZXhjbHVkZSkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG9uQWN0aXZlU3RhcnQoZSk7XG4gICAgICAgICAgICBvbkFjdGl2ZVN0b3AoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uS2V5VXAgPSBleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiICYmICFleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpKVxuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xuICAgIH07XG4gICAgY29uc3Qgb25DbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUuZGV0YWlsID4gMSkge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAocHJvcHMpID0+IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbktleVVwLCBvbkJsdXIsIG9uTW91c2VEb3duLCBvbk1vdXNlVXAsIG9uTW91c2VPdXQsIG9uQ2xpY2ssIC4uLnsgXCJkYXRhLXBzZXVkby1hY3RpdmVcIjogYWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSB9LCBwcm9wcykpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFCdXR0b24oeyB0YWcsIHByZXNzZWQsIG9uUHJlc3MgfSkge1xuICAgIGZ1bmN0aW9uIHVzZUFyaWFCdXR0b25Qcm9wcyh7IFwiYXJpYS1wcmVzc2VkXCI6IGFyaWFQcmVzc2VkLCB0YWJJbmRleCwgcm9sZSwgLi4ucCB9KSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiBvblByZXNzPy4oZW5oYW5jZUV2ZW50KGUsIHsgcHJlc3NlZDogcHJlc3NlZCA9PSBudWxsID8gbnVsbCA6ICFwcmVzc2VkIH0pKSwgdW5kZWZpbmVkKShwKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUHJvcHMgPSB7IHJvbGUsIHRhYkluZGV4LCBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCA/PyAocHJlc3NlZCA9PT0gdHJ1ZSA/IFwidHJ1ZVwiIDogcHJlc3NlZCA9PT0gZmFsc2UgPyBcImZhbHNlXCIgOiB1bmRlZmluZWQpIH07XG4gICAgICAgIGNvbnN0IGRpdlByb3BzID0geyAuLi5idXR0b25Qcm9wcywgdGFiSW5kZXg6IHRhYkluZGV4ID8/IDAsIHJvbGU6IHJvbGUgPz8gXCJidXR0b25cIiB9O1xuICAgICAgICBjb25zdCBhbmNob3JQcm9wcyA9IHsgLi4uZGl2UHJvcHMgfTtcbiAgICAgICAgc3dpdGNoICh0YWcpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidXR0b25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShidXR0b25Qcm9wcywgcHJvcHMpO1xuICAgICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShhbmNob3JQcm9wcywgcHJvcHMpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShkaXZQcm9wcywgcHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUFyaWFCdXR0b25Qcm9wc1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYnV0dG9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyLCB1c2VIYXNGb2N1cywgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvbih7IGV4cGFuZGVkSW5kZXgsIHNldEV4cGFuZGVkSW5kZXggfSkge1xuICAgIGNvbnN0IFtsYXN0Rm9jdXNlZEluZGV4LCBzZXRMYXN0Rm9jdXNlZEluZGV4LCBnZXRMYXN0Rm9jdXNlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjdXJyZW50Rm9jdXNlZEluZGV4LCBzZXRDdXJyZW50Rm9jdXNlZEluZGV4LCBnZXRDdXJyZW50Rm9jdXNlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHN0YWJsZVNldEV4cGFuZGVkSW5kZXggPSB1c2VTdGFibGVDYWxsYmFjayhzZXRFeHBhbmRlZEluZGV4ID8/ICgoKSA9PiB7IH0pKTtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24gfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleCgoMCkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoKG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucy5sZW5ndGggLSAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChpID0+ICgoaSA/PyAwKSAtIDEpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGkgPT4gKChpID8/IDApICsgMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb24oeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucywgbmF2aWdhdGlvbkRpcmVjdGlvbjogXCJibG9ja1wiLCBpbmRleDogbGFzdEZvY3VzZWRJbmRleCA/PyAwLCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0LCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQgfSk7XG4gICAgdXNlQ2hpbGRGbGFnKHtcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IGV4cGFuZGVkSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBvcGVuKSA9PiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0/LnNldE9wZW5Gcm9tUGFyZW50KG9wZW4pLFxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiAobWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldPy5nZXRPcGVuRnJvbVBhcmVudCgpID8/IG51bGwpXG4gICAgfSk7XG4gICAgdXNlQ2hpbGRGbGFnKHtcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IGxhc3RGb2N1c2VkSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBvcGVuKSA9PiBvcGVuICYmIG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXS5mb2N1cygpLFxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uID0gdXNlQ2FsbGJhY2soKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICBjb25zdCBbb3BlbkZyb21QYXJlbnQsIHNldE9wZW5Gcm9tUGFyZW50LCBnZXRPcGVuRnJvbVBhcmVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogYm9keVJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VCb2R5UmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRCb2R5SWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1ib2R5LVwiIH0pO1xuICAgICAgICBjb25zdCB7IHJhbmRvbUlkOiBoZWFkUmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZUhlYWRSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZEhlYWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLWFjY29yZGlvbi1zZWN0aW9uLWhlYWRlci1cIiB9KTtcbiAgICAgICAgbGV0IG9wZW4gPSAoKGFyZ3Mub3BlbiA/PyBvcGVuRnJvbVBhcmVudCkgPz8gbnVsbCk7XG4gICAgICAgIC8vIFRPRE86IENvbnZlcnQgdG8gdXNlIHVzZU1hbmFnZWRDaGlsZCBzbyB0aGF0IHRoaXMgaG9vayBcbiAgICAgICAgLy8gaXMgc3RhYmxlIHdpdGhvdXQgKGRpcmVjdGx5KSBkZXBlbmRpbmcgb24gdGhlIG9wZW4gc3RhdGUuXG4gICAgICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXIoeyB0YWcgfSkge1xuICAgICAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHtcbiAgICAgICAgICAgICAgICBvbkZvY3VzZWRDaGFuZ2VkOiB1c2VDYWxsYmFjaygoZm9jdXNlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRGb2N1c2VkSW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50Rm9jdXNlZEluZGV4KG9sZEluZGV4ID0+IG9sZEluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChnZXRDdXJyZW50Rm9jdXNlZEluZGV4KCkgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgZ2V0RWxlbWVudCgpPy5mb2N1cygpO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgY29uc3QgeyB1c2VNYW5hZ2VkQ2hpbGRQcm9wcyB9ID0gdXNlTWFuYWdlZENoaWxkU2VjdGlvbih7IGluZGV4LCBvcGVuLCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnQsIGZvY3VzIH0pO1xuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyh7IFtcImFyaWEtZXhwYW5kZWRcIl06IGFyaWFFeHBhbmRlZCwgW1wiYXJpYS1kaXNhYmxlZFwiXTogYXJpYURpc2FibGVkLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25Gb2N1cyA9ICgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChhcmdzLmluZGV4KTsgfTtcbiAgICAgICAgICAgICAgICBsZXQgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE9wZW5Gcm9tUGFyZW50KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KGFyZ3MuaW5kZXgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IHJldEIgPSB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXg6IDAgfSwgdXNlUHJlc3NFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHVuZGVmaW5lZCkocHJvcHMpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmV0MyA9IHVzZU1lcmdlZFByb3BzKCkodXNlSGVhZFJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZEJvZHlJZFByb3BzKFwiYXJpYS1jb250cm9sc1wiKSh7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiAoYXJpYUV4cGFuZGVkID8/ICghIW9wZW4pLnRvU3RyaW5nKCkpLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZGlzYWJsZWRcIjogKGFyaWFEaXNhYmxlZCA/PyAob3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkKSksXG4gICAgICAgICAgICAgICAgICAgIC4uLnVzZUhhc0ZvY3VzUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocmV0QikpXG4gICAgICAgICAgICAgICAgfSkpLCB7IG9uRm9jdXMgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyhyZXQzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHJldHVybiB7IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyUHJvcHMgfTtcbiAgICAgICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25Qcm9wcywgaW5kZXgsIG9wZW5dKTtcbiAgICAgICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5KCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5UHJvcHMoeyByb2xlLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldDEgPSB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikoeyByb2xlOiByb2xlID8/IFwicmVnaW9uXCIsIC4uLnByb3BzIH0pO1xuICAgICAgICAgICAgICAgIGxldCByZXQyID0gdXNlQm9keVJhbmRvbUlkUHJvcHMocmV0MSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleHBhbmRlZDogb3BlbixcbiAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyLFxuICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5LFxuICAgICAgICB9O1xuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHNdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbixcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjY29yZGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuLyoqXG4gKiBBZGRzIGFuIElEIGFuZCBcImFyaWEtbGFiZWxsZWRieVwiIGZvciB0d28gZWxlbWVudHMsIGFuIFwiaW5wdXRcIiBlbGVtZW50IGFuZCBhIFwibGFiZWxcIiBlbGVtZW50LlxuICpcbiAqIFJldHVybnMgdGhlIGB1c2VSZWZlcmVuY2VkSWRQcm9wc2AgaG9va3MgaWYgeW91IG5lZWQgdG8gYWxzbyBhZGQgb3RoZXIgSUQtcmVmZXJlbmNpbmcgYXR0cmlidXRlcywgbGlrZSBgZm9yYFxuICpcbiAqIEBzZWUgdXNlSW5wdXRMYWJlbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4LCBiYWNrdXBUZXh0IH0gPSB7IGxhYmVsUHJlZml4OiBcImxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJpbnB1dC1cIiB9KSB7XG4gICAgY29uc3QgW2xhYmVsRWxlbWVudCwgc2V0TGFiZWxFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtpbnB1dEVsZW1lbnQsIHNldElucHV0RWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldExhYmVsRWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0TGFiZWxFbGVtZW50IH0pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0SW5wdXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUlucHV0UmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRJbnB1dEVsZW1lbnQgfSk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VMYWJlbFJhbmRvbUlkUHJvcHMsIGlkOiBsYWJlbElkLCByYW5kb21JZDogbGFiZWxSYW5kb21JZCwgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBsYWJlbFByZWZpeCB9KTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZUlucHV0UmFuZG9tSWRQcm9wcywgaWQ6IGlucHV0SWQsIHJhbmRvbUlkOiBpbnB1dFJhbmRvbUlkLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IGlucHV0UHJlZml4IH0pO1xuICAgIGNvbnN0IGxhYmVsSGFzTW91bnRlZCA9ICEhKGxhYmVsRWxlbWVudCk7XG4gICAgY29uc3QgaW5wdXRIYXNNb3VudGVkID0gISEoaW5wdXRFbGVtZW50KTtcbiAgICBjb25zdCB1c2VHZW5lcmljTGFiZWxMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbExhYmVsKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wczogKHByb3BzKSA9PiB7IHJldHVybiB1c2VMYWJlbFJhbmRvbUlkUHJvcHModXNlTGFiZWxSZWZFbGVtZW50UHJvcHMocHJvcHMpKTsgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VHZW5lcmljTGFiZWxJbnB1dCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbElucHV0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wczogKHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkYnksIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsIC4uLnByb3BzIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHVzZUlucHV0UmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHVzZUlucHV0UmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtbGFiZWxcIjogKCFsYWJlbEhhc01vdW50ZWQgPyBiYWNrdXBUZXh0IDogYXJpYUxhYmVsKSA/PyBhcmlhTGFiZWwgfSwgcHJvcHMpKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbbGFiZWxIYXNNb3VudGVkXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsSW5wdXQsXG4gICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsLFxuICAgICAgICB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLFxuICAgICAgICB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLFxuICAgICAgICBsYWJlbElkLFxuICAgICAgICBpbnB1dElkLFxuICAgICAgICBsYWJlbEVsZW1lbnQsXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50LFxuICAgICAgICBnZXRJbnB1dEVsZW1lbnQsXG4gICAgfTtcbn1cbi8qKlxuICogSGFuZGxlcyB0aGUgYXR0cmlidXRlcyBgaWRgLCBgZm9yYCwgYW5kIGBhcmlhLWxhYmVsbGVkYnlgIGZvciB0byByZWxhdGVkIGVsZW1lbnRzLlxuICpcbiAqIEl0J3MgYXNzdW1lZCB0aGF0IHRoZSBsYWJlbCBpcyBhbiBgSFRNTExhYmVsRWxlbWVudGAsIGFuZCB0aGUgaW5wdXQgaXMgc29tZXRoaW5nIGZvciB3aGljaFxuICogdGhlIGBmb3JgIGF0dHJpYnV0ZSBjYW4gcmVmZXJlbmNlLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlucHV0TGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXggfSA9IHsgbGFiZWxQcmVmaXg6IFwibGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImlucHV0LVwiIH0pIHtcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcywgaW5wdXRJZCwgbGFiZWxJZCwgaW5wdXRFbGVtZW50LCBnZXRJbnB1dEVsZW1lbnQsIGxhYmVsRWxlbWVudCwgZ2V0TGFiZWxFbGVtZW50IH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXggfSk7XG4gICAgY29uc3QgdXNlSW5wdXRMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlSW5wdXRMYWJlbExhYmVsKHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlSW5wdXRMYWJlbExhYmVsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRoRm9yID0gdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyhcImZvclwiKShwcm9wcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aG91dEZvciA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHRhZyA9PSBcImxhYmVsXCIgPyB3aXRoRm9yIDogd2l0aG91dEZvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbElucHV0XSk7XG4gICAgY29uc3QgdXNlSW5wdXRMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlSW5wdXRMYWJlbElucHV0KCkge1xuICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbElucHV0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VJbnB1dExhYmVsSW5wdXRQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VJbnB1dExhYmVsTGFiZWwsXG4gICAgICAgIHVzZUlucHV0TGFiZWxJbnB1dCxcbiAgICAgICAgbGFiZWxJZCxcbiAgICAgICAgaW5wdXRJZCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICBsYWJlbEVsZW1lbnQsXG4gICAgICAgIGdldElucHV0RWxlbWVudCxcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50XG4gICAgfTtcbn1cbmNvbnN0IGhhbmRsZXNJbnB1dCA9ICh0YWcsIGxhYmVsUG9zaXRpb24sIHdoaWNoKSA9PiB7XG4gICAgaWYgKGxhYmVsUG9zaXRpb24gPT09IFwic2VwYXJhdGVcIikge1xuICAgICAgICBpZiAod2hpY2ggPT09IFwiaW5wdXQtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgaWYgKHdoaWNoID09PSBcImxhYmVsLWVsZW1lbnRcIilcbiAgICAgICAgICAgIHJldHVybiB0YWcgIT0gXCJpbnB1dFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYWJlbFBvc2l0aW9uID09PSBcIndyYXBwaW5nXCIpIHtcbiAgICAgICAgaWYgKHdoaWNoID09PSBcImlucHV0LWVsZW1lbnRcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHdoaWNoID09IFwibGFiZWwtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbi8qKlxuICogSGFuZGxlcyBsYWJlbCB0eXBlICh3cmFwcGluZyBvciBzZXBhcmF0ZSkgZm9yIGNoZWNrYm94ZXMsIHJhZGlvcywgc3dpdGNoZXMsIGV0Yy5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja2JveExpa2UoeyBjaGVja2VkLCBkaXNhYmxlZCwgbGFiZWxQb3NpdGlvbiwgb25JbnB1dCwgcm9sZSB9KSB7XG4gICAgY29uc3Qgc3RhYmxlT25JbnB1dCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgb25JbnB1dD8uKGUpOyB9KTtcbiAgICBjb25zdCB7IGlucHV0SWQsIGxhYmVsSWQsIHVzZUlucHV0TGFiZWxJbnB1dDogdXNlSUxJbnB1dCwgdXNlSW5wdXRMYWJlbExhYmVsOiB1c2VJTExhYmVsLCBnZXRMYWJlbEVsZW1lbnQsIGdldElucHV0RWxlbWVudCB9ID0gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtY2hlY2tib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtY2hlY2tib3gtaW5wdXQtXCIgfSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUlucHV0TGFiZWxJbnB1dFByb3BzOiB1c2VJTElucHV0UHJvcHMgfSA9IHVzZUlMSW5wdXQoKTtcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgICAgICAvLyBvbkNsaWNrIGFuZCBvbkNoYW5nZSBhcmUgYSBiaXQgbWVzc3ksIHNvIHdlIG5lZWQgdG9cbiAgICAgICAgLy8gKmFsd2F5cyogbWFrZSBzdXJlIHRoYXQgdGhlIHZpc2libGUgc3RhdGUgaXMgY29ycmVjdFxuICAgICAgICAvLyBhZnRlciBhbGwgdGhlIGV2ZW50IGR1c3Qgc2V0dGxlcy5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzI3NDUsXG4gICAgICAgIC8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8xODk5I2lzc3VlY29tbWVudC01MjU2OTAxOTRcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWcgPT0gXCJpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhZywgY2hlY2tlZF0pO1xuICAgICAgICByZXR1cm4geyBnZXRJbnB1dEVsZW1lbnQ6IGdldEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xuICAgICAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBDaHJvbWUgd29uJ3QgZmlyZSBvbklucHV0IGV2ZW50cyBmb3IgcmFkaW8gYnV0dG9ucyB0aGF0IGFyZSB0YWJJbmRleD0tMT8/XG4gICAgICAgICAgICAvLyBOZWVkcyBpbnZlc3RpZ2F0aW5nLCBidXQgb25JbnB1dCB3b3JrcyBmaW5lIGluIEZpcmVmb3hcbiAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhkaXNhYmxlZCB8fCAhaGFuZGxlc0lucHV0KHRhZywgbGFiZWxQb3NpdGlvbiwgXCJpbnB1dC1lbGVtZW50XCIpID8gdW5kZWZpbmVkIDogc3RhYmxlT25JbnB1dCwgdW5kZWZpbmVkKSh7fSk7XG4gICAgICAgICAgICBpZiAodGFnID09IFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICBwcm9wcy5vbklucHV0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHByb3BzID0gdXNlUmVmRWxlbWVudFByb3BzKHVzZUlMSW5wdXRQcm9wcyhwcm9wcykpO1xuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgd3JhcHBlZCBsYWJlbCBoYW5kbGVzIGFsbCBpbnRlcmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhpcyBlbGVtZW50IGNhbid0IGJlIGludGVyYWN0ZWQgd2l0aFxuICAgICAgICAgICAgICAgIC8vIGV2ZW4gaWYgaXQncyBhbiBpbnB1dCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHByb3BzLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIHByb3BzLm9uRm9jdXMgPSBlID0+IGdldExhYmVsRWxlbWVudCgpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGFnID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5yb2xlID0gcm9sZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtY2hlY2tlZFwiXSA9IGNoZWNrZWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gZGlzYWJsZWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGxhYmVsIGNsaWNrcyBjYW4ndCBhZmZlY3QgdGhlIGNoZWNrYm94IHdoaWxlIGl0J3MgZGlzYWJsZWRcbiAgICAgICAgICAgIHByb3BzLm9uQ2xpY2sgPSBkaXNhYmxlZCA/ICgoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH0pIDogcHJvcHMub25DbGljaztcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHAwLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlSUxJbnB1dCwgcm9sZSwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWQsIGNoZWNrZWRdKTtcbiAgICBjb25zdCB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlSW5wdXRMYWJlbExhYmVsUHJvcHM6IHVzZUlMTGFiZWxQcm9wcyB9ID0gdXNlSUxMYWJlbCh7IHRhZyB9KTtcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoZGlzYWJsZWQgfHwgIWhhbmRsZXNJbnB1dCh0YWcsIGxhYmVsUG9zaXRpb24sIFwibGFiZWwtZWxlbWVudFwiKSA/IHVuZGVmaW5lZCA6IHN0YWJsZU9uSW5wdXQsIHVuZGVmaW5lZCkoe30pO1xuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnJvbGUgPSByb2xlO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWNoZWNrZWRcIl0gPSBjaGVja2VkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgb25lIGNhc2Ugd2hlcmUgdGhlcmUncyBhbG1vc3Qgbm90aGluZyB0byBkb1xuICAgICAgICAgICAgICAgIC8vIFRoZSBtb3N0IG5vcm1hbCBjYXNlIHdoZXJlIGV2ZXJ5dGhpbmcgYWN0cyBhY2NvcmRpbmcgbm9ybWFsIEhUTUwgbWVjaGFuaWNzLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSnVzdCBtYWtlIHN1cmUgdGhhdCBsYWJlbCBjbGlja3MgY2FuJ3QgYWZmZWN0IHRoZSBjaGVja2JveCB3aGlsZSBpdCdzIGRpc2FibGVkXG4gICAgICAgICAgICBuZXdQcm9wcy5vbkNsaWNrID0gZGlzYWJsZWQgPyAoKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KSA6IG5ld1Byb3BzLm9uQ2xpY2s7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgdXNlSUxMYWJlbFByb3BzKHAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbdXNlSUxMYWJlbCwgZGlzYWJsZWQsIGNoZWNrZWQsIHJvbGUsIGxhYmVsUG9zaXRpb25dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsXG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCxcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50LFxuICAgICAgICBnZXRJbnB1dEVsZW1lbnRcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxhYmVsLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZUNoZWNrYm94TGlrZSB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFDaGVja2JveCh7IGxhYmVsUG9zaXRpb24sIGNoZWNrZWQsIG9uSW5wdXQsIGRpc2FibGVkIH0pIHtcbiAgICBjb25zdCBvbklucHV0RW5oYW5jZWQgPSAoZSkgPT4gb25JbnB1dD8uKGVuaGFuY2VFdmVudChlLCB7IGNoZWNrZWQ6ICFjaGVja2VkIH0pKTtcbiAgICBjb25zdCB7IGdldElucHV0RWxlbWVudCwgZ2V0TGFiZWxFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCB9ID0gdXNlQ2hlY2tib3hMaWtlKHsgY2hlY2tlZDogISFjaGVja2VkLCBsYWJlbFBvc2l0aW9uLCByb2xlOiBcImNoZWNrYm94XCIsIGRpc2FibGVkLCBvbklucHV0OiBvbklucHV0RW5oYW5jZWQgfSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50KHsgdGFnIH0pO1xuICAgICAgICBjb25zdCBpc01peGVkID0gKGNoZWNrZWQgPT0gXCJtaXhlZFwiKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGdldElucHV0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudCAmJiB0YWcgPT09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pbmRldGVybWluYXRlID0gaXNNaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2lzTWl4ZWQsIHRhZ10pO1xuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveElucHV0RWxlbWVudFByb3BzIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyhwMCk7XG4gICAgICAgICAgICBwcm9wcy5jaGVja2VkID8/PSAhIWNoZWNrZWQ7XG4gICAgICAgICAgICBpZiAodGFnID09IFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICBwcm9wcy50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgY2hlY2tlZCwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWRdKTtcbiAgICBjb25zdCB1c2VDaGVja2JveExhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50KHsgdGFnIH0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94TGFiZWxFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50LCBkaXNhYmxlZCwgbGFiZWxQb3NpdGlvbl0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50LFxuICAgICAgICB1c2VDaGVja2JveExhYmVsRWxlbWVudFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3guanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCwgZW5oYW5jZUV2ZW50IH0gZnJvbSBcIi4vcHJvcHNcIjtcbi8qKlxuICpcbiAqXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tib3hHcm91cCh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBzaG91bGRGb2N1c09uQ2hhbmdlLCBvblVwZGF0ZUNoaWxkcmVuOiBvblVwZGF0ZUNoaWxkcmVuVW5zdGFibGUgfSkge1xuICAgIGNvbnN0IG9uVXBkYXRlQ2hpbGRyZW4gPSB1c2VTdGFibGVDYWxsYmFjayhvblVwZGF0ZUNoaWxkcmVuVW5zdGFibGUpO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIHNob3VsZEZvY3VzT25DaGFuZ2UgfSk7XG4gICAgLy9jb25zdCBbdW5jaGVja2VkQ291bnQsIHNldFVuaGVja2VkQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2NoZWNrZWRDb3VudCwgc2V0Q2hlY2tlZENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNoZWNrZWRJbmRpY2VzID0gdXNlUmVmKG5ldyBTZXQoKSk7XG4gICAgLy9jb25zdCBbc2VsZklzQ2hlY2tlZCwgc2V0U2VsZklzQ2hlY2tlZCwgZ2V0U2VsZklzQ2hlY2tlZF0gPSB1c2VTdGF0ZTxib29sZWFuIHwgXCJtaXhlZFwiPihmYWxzZSk7XG4gICAgY29uc3QgZ2V0U2VsZklzQ2hlY2tlZFVuc3RhYmxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCI7XG4gICAgfSwgW2NoZWNrZWRDb3VudCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aF0pO1xuICAgIGNvbnN0IGdldFNlbGZJc0NoZWNrZWRTdGFibGUgPSB1c2VTdGFibGVDYWxsYmFjayhnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUpO1xuICAgIC8vIElmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSBwYXJlbnQgY2hlY2tib3gncyB2YWx1ZSwgdGhlbiB0aGlzIHJlZiBob2xkcyBhIG1lbW9yeSBvZiB3aGF0IHZhbHVlcyB3ZXJlIGhlbGQgYmVmb3JlLlxuICAgIC8vIE90aGVyd2lzZSwgaXQncyBudWxsIHdoZW4gdGhlIGxhc3QgaW5wdXQgd2FzIGZyb20gYSBjaGlsZCBjaGVja2JveC4gXG4gICAgY29uc3Qgc2F2ZWRDaGVja2VkVmFsdWVzID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG9uQ2hlY2tib3hHcm91cFBhcmVudElucHV0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxmSXNDaGVja2VkID0gZ2V0U2VsZklzQ2hlY2tlZFN0YWJsZSgpO1xuICAgICAgICBpZiAoc2VsZklzQ2hlY2tlZCA9PT0gdHJ1ZSB8fCAoc2VsZklzQ2hlY2tlZCA9PT0gZmFsc2UgJiYgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogZmFsc2UgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGZJc0NoZWNrZWQgPT09IFwibWl4ZWRcIikge1xuICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudC5zZXQoY2hpbGQuaW5kZXgsIGNoaWxkLmdldENoZWNrZWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA/PyB0cnVlIH0pKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBjaGlsZCBJRHMsIGFuZCBhbnkgdGltZSBhbnkgb2YgdGhlbSBjaGFuZ2UsIFxuICAgIC8vIGdlbmVyYXRlIGEgbmV3IHN0cmluZyB3aXRoIGFsbCBvZiB0aGVtIGNvbmNhdGVuYXRlZCB0b2dldGhlclxuICAgIC8vIChidXQgb25seSBvbmNlIHBlciByZW5kZXIpO1xuICAgIGNvbnN0IGFsbElkcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xuICAgIGNvbnN0IFthcmlhQ29udHJvbHMsIHNldEFyaWFDb250cm9sc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdXBkYXRlSW5kZXgsIHNldElkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3Qgbm90aWZ5Q2hlY2tlZCA9IHVzZUNhbGxiYWNrKChpbmRleCwgY2hlY2tlZCkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFjaGVja2VkSW5kaWNlcy5jdXJyZW50LmhhcyhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyArIDEpKTtcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmFkZChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZEluZGljZXMuY3VycmVudC5oYXMoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENvdW50KGMgPT4gKGMgLSAxKSk7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEluZGljZXMuY3VycmVudC5kZWxldGUoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3NldENoZWNrZWRDb3VudCwgY2hlY2tlZEluZGljZXNdKTtcbiAgICAvKnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgc2V0U2VsZklzQ2hlY2tlZChwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCIpXG4gICAgfSwgW3NldFNlbGZJc0NoZWNrZWQsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgsIGNoZWNrZWRDb3VudF0pOyovXG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cFBhcmVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLWNvbnRyb2xzXCI6IGFyaWFDb250cm9scyB9LCBwcm9wcyk7XG4gICAgfSwgW2FyaWFDb250cm9sc10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEFyaWFDb250cm9scyhBcnJheS5mcm9tKGFsbElkcy5jdXJyZW50KS5qb2luKFwiIFwiKSk7XG4gICAgfSwgW3VwZGF0ZUluZGV4XSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cENoaWxkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHsgaW5kZXgsIHRleHQsIGNoZWNrZWQsIGlkLCAuLi5yZXN0IH0pIHtcbiAgICAgICAgY29uc3QgZ2V0Q2hlY2tlZCA9IHVzZVN0YWJsZUdldHRlcihjaGVja2VkKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGFsbElkcy5jdXJyZW50LmFkZChpZCk7XG4gICAgICAgICAgICBzZXRJZFVwZGF0ZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuZGVsZXRlKGlkKTtcbiAgICAgICAgICAgICAgICBzZXRJZFVwZGF0ZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtpZF0pO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5Q2hlY2tlZChpbmRleCwgY2hlY2tlZCk7XG4gICAgICAgIH0sIFtpbmRleCwgY2hlY2tlZF0pO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgaW5kZXgsIHRleHQsIGlkLCBnZXRDaGVja2VkLCAuLi5yZXN0IH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFiYmFibGUsXG4gICAgICAgICAgICB1c2VDaGVja2JveEdyb3VwQ2hpbGRQcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpKSwgW3VzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wc10pXG4gICAgICAgIH07XG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIG5vdGlmeUNoZWNrZWQsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYW5hZ2VkQ2hlY2tib3hlczogbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICB1c2VDaGVja2JveEdyb3VwQ2hpbGQsXG4gICAgICAgIHVzZUNoZWNrYm94R3JvdXBQYXJlbnRQcm9wcyxcbiAgICAgICAgcGFyZW50SXNDaGVja2VkOiBnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUoKSxcbiAgICAgICAgcGFyZW50UGVyY2VudENoZWNrZWQ6IChjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSxcbiAgICAgICAgb25DaGVja2JveEdyb3VwUGFyZW50SW5wdXQsXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXG4gICAgICAgIGZvY3VzOiBmb2N1c0N1cnJlbnQsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3gtZ3JvdXAuanMubWFwIiwiaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCwgdXNlRm9jdXNUcmFwLCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogQWRkcyBldmVudCBoYW5kbGVycyBmb3IgYSBtb2RhbC1saWtlIHNvZnQtZGlzbWlzcyBpbnRlcmFjdGlvbi5cbiAqXG4gKiBUaGF0IGlzLCBhbnkgY2xpY2tzIG9yIHRhcHMgb3V0c2lkZSBvZiB0aGUgZ2l2ZW4gY29tcG9uZW50LFxuICogb3IgYW55IHRpbWUgdGhlIEVzY2FwZSBrZXkgaXMgcHJlc3NlZCB3aXRoaW4gdGhlIGNvbXBvbmVudCxcbiAqICh3aXRoIHZhcmlvdXMgYnJvd3NlciBvZGRpdGllcyByZWdhcmRpbmcgY2xpY2tzIG9uIGJsYW5rIG9yIGluZXJ0IGFyZWFzIGhhbmRsZWQpXG4gKiB0aGUgY29tcG9uZW50IHdpbGwgcmVxdWVzdCB0byBjbG9zZSBpdHNlbGYuXG4gKlxuICogT2YgY291cnNlLCBpZiB5b3UgZG9uJ3QgZG8gYW55dGhpbmcgaW4gdGhlIGBvbkNsb3NlYCBmdW5jdGlvbixcbiAqIGl0IHdvbid0IGJlIGEgc29mdCBkaXNtaXNzIGFueW1vcmUuXG4gKlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZSwgZ2V0RWxlbWVudHMgfSkge1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcbiAgICBjb25zdCBzdGFibGVHZXRFbGVtZW50cyA9IHVzZVN0YWJsZUNhbGxiYWNrKGdldEVsZW1lbnRzKTtcbiAgICBjb25zdCBnZXRPcGVuID0gdXNlU3RhYmxlR2V0dGVyKG9wZW4pO1xuICAgIGNvbnN0IG9uQmFja2Ryb3BDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIG9uQmFja2Ryb3BDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RWxlbWVudCgpPy5vd25lckRvY3VtZW50O1xuICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudD8uZGVmYXVsdFZpZXc7XG4gICAgICAgIC8vIEJhc2ljYWxseSwgXCJ3YXMgdGhpcyBldmVudCBmaXJlZCBvbiB0aGUgcm9vdC1tb3N0IGVsZW1lbnQsIG9yIGF0IGxlYXN0IGFuIGVsZW1lbnQgbm90IGNvbnRhaW5lZCBieSB0aGUgbW9kYWw/XCJcbiAgICAgICAgLy8gRWl0aGVyIGNvdWxkIGJlIGhvdyB0aGUgYnJvd3NlciBoYW5kbGVzIHRoZXNlIHNvcnRzIG9mIFwiaW50ZXJhY3Rpbmcgd2l0aCBub3RoaW5nXCIgZXZlbnRzLlxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgc3RhYmxlT25DbG9zZShcImJhY2tkcm9wXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50cyA9IHN0YWJsZUdldEVsZW1lbnRzKCk7XG4gICAgICAgIGlmIChlbGVtZW50cyAmJiBlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuICAgICAgICAgICAgbGV0IGZvdW5kSW5zaWRlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJbnNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmRJbnNpZGVDbGljaylcbiAgICAgICAgICAgICAgICBvbkNsb3NlKFwiYmFja2Ryb3BcIik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgeyB1c2VBY3RpdmVFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoe1xuICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygobmV3RWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkRm9jdXNhYmxlRWxlbWVudHMgPSBzdGFibGVHZXRFbGVtZW50cygpO1xuICAgICAgICAgICAgaWYgKHZhbGlkRm9jdXNhYmxlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsaWRGb2N1c2FibGVFbGVtZW50cykpXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRm9jdXNhYmxlRWxlbWVudHMgPSBbdmFsaWRGb2N1c2FibGVFbGVtZW50c107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZm9jdXNhYmxlIG9mIHZhbGlkRm9jdXNhYmxlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZT8uY29udGFpbnMobmV3RWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbG9zZShcImxvc3QtZm9jdXNcIik7XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlPy5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgLy8gU2luY2UgZXZlcnl0aGluZyBlbHNlIGlzIGluZXJ0LCB3ZSBsaXN0ZW4gZm9yIGNhcHR1cmVkIGNsaWNrcyBvbiB0aGUgd2luZG93XG4gICAgICAgICAgICAvLyAod2UgZG9uJ3QgdXNlIG9uQ2xpY2sgc2luY2UgdGhhdCBkb2Vzbid0IGZpcmUgd2hlbiBjbGlja2VkIG9uIGVtcHR5L2luZXJ0IGFyZWFzKVxuICAgICAgICAgICAgLy8gTm90ZTogV2UgbmVlZCBhICpzZXBhcmF0ZSogdG91Y2ggZXZlbnQgb24gbW9iaWxlIFNhZmFyaSwgYmVjYXVzZVxuICAgICAgICAgICAgLy8gaXQgZG9lc24ndCBsZXQgY2xpY2sgZXZlbnRzIGJ1YmJsZSBvciBiZSBjYXB0dXJlZCBmcm9tIHRyYWRpdGlvbmFsbHkgbm9uLWludGVyYWN0aXZlIGVsZW1lbnRzLFxuICAgICAgICAgICAgLy8gYnV0IHRvdWNoIGV2ZW50cyB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICAgICAgY29uc3QgbW91c2VEb3duID0gKGUpID0+IHsgaWYgKGdldE9wZW4oKSlcbiAgICAgICAgICAgICAgICBvbkJhY2tkcm9wQ2xpY2soZSk7IH07XG4gICAgICAgICAgICBjb25zdCB0b3VjaFN0YXJ0ID0gKGUpID0+IHsgaWYgKGdldE9wZW4oKSlcbiAgICAgICAgICAgICAgICBvbkJhY2tkcm9wQ2xpY2soZSk7IH07XG4gICAgICAgICAgICBjb25zdCBrZXlEb3duID0gKGUpID0+IHsgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgc3RhYmxlT25DbG9zZShcImVzY2FwZVwiKTtcbiAgICAgICAgICAgIH0gfTtcbiAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd24sIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydCwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgdXNlU29mdERpc21pc3NQcm9wczogdXNlQ2FsbGJhY2socHJvcHMgPT4gdXNlQWN0aXZlRWxlbWVudFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpLCBbdXNlQWN0aXZlRWxlbWVudFByb3BzLCB1c2VSZWZFbGVtZW50UHJvcHNdKSB9O1xufVxuLyoqXG4gKiBBIGdlbmVyaWMgbW9kYWwgaG9vaywgdXNlZCBieSBtb2RhbCBkaWFsb2dzLCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgYnkgYW55dGhpbmcgdGhhdCdzIG1vZGFsIHdpdGggYSBiYWNrZHJvcC5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSkge1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcbiAgICBjb25zdCBbbW9kYWxEZXNjcmliZWRCeUJvZHksIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VIaWRlU2Nyb2xsKG9wZW4pO1xuICAgIGNvbnN0IHsgaWQ6IG1vZGFsSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1vZGFsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1vZGFsUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLVwiIH0pO1xuICAgIGNvbnN0IHsgaWQ6IGJvZHlJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLWJvZHktXCIgfSk7XG4gICAgY29uc3QgeyBpZDogdGl0bGVJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlVGl0bGVJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlVGl0bGVSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtdGl0bGUtXCIgfSk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZU1vZGFsUmVmRWxlbWVudCwgZ2V0RWxlbWVudDogZ2V0TW9kYWxFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICBjb25zdCB7IHVzZVNvZnREaXNtaXNzUHJvcHMgfSA9IHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZTogc3RhYmxlT25DbG9zZSwgZ2V0RWxlbWVudHM6IGdldE1vZGFsRWxlbWVudCB9KTtcbiAgICBjb25zdCB1c2VNb2RhbEJhY2tkcm9wID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxCYWNrZHJvcCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlTW9kYWxCYWNrZHJvcFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlclVwOiAoKSA9PiBzdGFibGVPbkNsb3NlKFwiYmFja2Ryb3BcIikgfSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VNb2RhbFByb3BzID0gZnVuY3Rpb24gKHsgXCJhcmlhLW1vZGFsXCI6IGFyaWFNb2RhbCwgcm9sZSwgLi4ucDAgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUZvY3VzVHJhcFByb3BzIH0gPSB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlOiBvcGVuIH0pO1xuICAgICAgICBjb25zdCBwMSA9IHVzZVRpdGxlUmVmZXJlbmNpbmdJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHAwKTtcbiAgICAgICAgY29uc3QgcDIgPSB1c2VNb2RhbElkUHJvcHMocDEpO1xuICAgICAgICBjb25zdCBwRmluYWwgPSB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzKFwiYXJpYS1kZXNjcmliZWRieVwiKShwMik7XG4gICAgICAgIHJldHVybiB1c2VGb2N1c1RyYXBQcm9wcyh1c2VTb2Z0RGlzbWlzc1Byb3BzKHVzZU1lcmdlZFByb3BzKCkodXNlTW9kYWxSZWZFbGVtZW50KHsgcm9sZTogXCJkaWFsb2dcIiB9KSwgbW9kYWxEZXNjcmliZWRCeUJvZHkgPyBwRmluYWwgOiBwMikpKTtcbiAgICB9O1xuICAgIGNvbnN0IHVzZU1vZGFsVGl0bGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbFRpdGxlKCkge1xuICAgICAgICBjb25zdCB1c2VNb2RhbFRpdGxlUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VUaXRsZUlkUHJvcHMocHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyB1c2VNb2RhbFRpdGxlUHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlTW9kYWxCb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxCb2R5KHsgZGVzY3JpcHRpdmUgfSkge1xuICAgICAgICBzZXRNb2RhbERlc2NyaWJlZEJ5Qm9keShkZXNjcmlwdGl2ZSk7XG4gICAgICAgIGNvbnN0IHVzZU1vZGFsQm9keVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlQm9keUlkUHJvcHMocHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyB1c2VNb2RhbEJvZHlQcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VNb2RhbFByb3BzLFxuICAgICAgICB1c2VNb2RhbFRpdGxlLFxuICAgICAgICB1c2VNb2RhbEJvZHksXG4gICAgICAgIHVzZU1vZGFsQmFja2Ryb3BcbiAgICB9O1xufVxuLyoqXG4gKiBBbGxvd3MgZm9yIGhpZGluZyB0aGUgc2Nyb2xsIGJhciBvZiB0aGUgcm9vdCBIVE1MIGVsZW1lbnRcbiAqIHdpdGhvdXQgc2hpZnRpbmcgdGhlIGxheW91dCBvZiB0aGUgcGFnZSBtb3JlIHRoYW4gYWRkaW5nIGEgZm93IHBpeGVsc1xuICogb2YgcGFkZGluZyB0byB0aGUgcm9vdCBlbGVtZW50IGlmIG5lY2Vzc2FyeS5cbiAqIEBwYXJhbSBoaWRlU2Nyb2xsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VIaWRlU2Nyb2xsKGhpZGVTY3JvbGwpIHtcbiAgICBjb25zdCBbZ2V0U2Nyb2xsYmFyV2lkdGgsIHNldFNjcm9sbGJhcldpZHRoXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZ2V0U2Nyb2xsYmFySGVpZ2h0LCBzZXRTY3JvbGxiYXJIZWlnaHRdID0gdXNlUGFzc2l2ZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChoaWRlU2Nyb2xsKSB7XG4gICAgICAgICAgICAvLyBXaGVuIHNjcm9sbGluZyBpcyByZXN1bWVkLCB3ZSdsbCBuZWVkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8ga2VlcCB0aGlzIGluZm9ybWF0aW9uIGFyb3VuZFxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAvLyBNZWFzdXJlIHRoZSB3aWR0aCBvZiB0aGUgcGFnZSAobWludXMgdGhlIHNjcm9sbGJhcilcbiAgICAgICAgICAgIGxldCB3aWR0aFdpdGhTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0V2l0aFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAvLyBBcHBseSBhIGNsYXNzIHRoYXQgaGlkZXMgdGhlIHNjcm9sbGJhci5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZG9jdW1lbnQtc2Nyb2xsLWhpZGRlblwiKTtcbiAgICAgICAgICAgIC8vIEluIGNhc2UgbXVsdGlwbGUgdGhpbmdzIGFyZSBsb2NraW5nIHNjcm9sbCwga2VlcCB0cmFjayBvZiBob3cgbWFueSBhcmUgZG9pbmcgdGhhdFxuICAgICAgICAgICAgLy8gKGp1c3QgYWRkIDEgb24gZW5hYmxlLCBzdWJ0cmFjdCAxIG9uIGRpc2FibGUpXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9ICgrKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdIHx8IFwiMFwiKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyBNZWFzdXJlIHRoZSBuZXcgd2lkdGggd2l0aG91dCBhIHNjcm9sbGJhciBcbiAgICAgICAgICAgIC8vIHNvIHdlIGNhbiB0YWtlIHRoZSBkaWZmZXJlbmNlIGFzIHRoZSBzY3JvbGxiYXIgd2lkdGguXG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRob3V0U2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodFdpdGhvdXRTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgbGV0IHNjcm9sbGJhcldpZHRoID0gKHdpZHRoV2l0aG91dFNjcm9sbEJhciAtIHdpZHRoV2l0aFNjcm9sbEJhcik7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsYmFySGVpZ2h0ID0gKGhlaWdodFdpdGhvdXRTY3JvbGxCYXIgLSBoZWlnaHRXaXRoU2Nyb2xsQmFyKTtcbiAgICAgICAgICAgIC8vIEZhaWxzYWZlIC0tIGlmIHRoaXMgbWVhc3VyaW5nIHRyaWNrIGRvZXMgc29tZXRoaW5nIHVuZXhwZWN0ZWQsIGp1c3QgaWdub3JlIGl0XG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFyV2lkdGggPiA4MClcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJXaWR0aCA9IDA7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFySGVpZ2h0ID4gODApXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFySGVpZ2h0ID0gMDtcbiAgICAgICAgICAgIC8vIE1ha2Ugb3VyIG1lYXN1cmVtZW50cyBhdmFpbGFibGUgYXMgQ1NTIHByb3BlcnRpZXMgZm9yIGdlbmVyYWwgdXNlXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsYmFyLXdpZHRoXCIsIGAke3Njcm9sbGJhcldpZHRofXB4YCk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsYmFyLWhlaWdodFwiLCBgJHtzY3JvbGxiYXJIZWlnaHR9cHhgKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxzdG9wLXRvcFwiLCBgJHtvcmlnaW5hbFNjcm9sbFRvcH1weGApO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbHN0b3AtbGVmdFwiLCBgJHtvcmlnaW5hbFNjcm9sbExlZnR9cHhgKTtcbiAgICAgICAgICAgIHNldFNjcm9sbGJhcldpZHRoKHNjcm9sbGJhcldpZHRoKTtcbiAgICAgICAgICAgIHNldFNjcm9sbGJhckhlaWdodChzY3JvbGxiYXJIZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVbmRvIGFsbCB0aGUgdGhpbmdzIHdlIGp1c3QgZGlkXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgLSAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIHRoZSBsYXN0IHNjcm9sbC1sb2NraW5nIHRoaW5nIHRvIHN0b3AsIHRoZW4gcmVtb3ZlIHRoZSBjbGFzcyB0aGF0IHN0b3BzIHNjcm9sbGluZy5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWhpZGVyc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb2N1bWVudC1zY3JvbGwtaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBbHNvLCByZXN0b3JlIHRoZSBvcmlnaW5hbCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG8gdGhpcyBieSBmb3JjaW5nIHRoZSBzY3JvbGwgYmVoYXZpb3IgdG8gbm90IGJlIHNtb290aFxuICAgICAgICAgICAgICAgICAgICAvLyAoaXQncyBpbnN0YW50IGlmIG5vdGhpbmcgaXMgc2V0IHRvIHNtb290aCwgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzc29tLXZpZXcvI3Njcm9sbGluZyksXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZywgdGhlbiByZXN0b3JpbmcgdGhlIG9yaWdpbmFsIHNjcm9sbCBiZWhhdmlvciBcbiAgICAgICAgICAgICAgICAgICAgLy8gKHdoaWNoIHdhcyBwcm9iYWJseSBhbHJlYWR5IGF1dG8gYW55d2F5LCBidXQganVzdCB0byBiZSBzYWZlKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjcm9sbEJlaGF2aW9yID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvKHsgdG9wOiBvcmlnaW5hbFNjcm9sbFRvcCwgbGVmdDogb3JpZ2luYWxTY3JvbGxMZWZ0LCBiZWhhdmlvcjogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IG9yaWdpbmFsU2Nyb2xsQmVoYXZpb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFtoaWRlU2Nyb2xsXSk7XG4gICAgcmV0dXJuIHsgZ2V0U2Nyb2xsYmFyV2lkdGgsIGdldFNjcm9sbGJhckhlaWdodCB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1vZGFsLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiLi91c2UtbW9kYWxcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhRGlhbG9nKHsgb3Blbiwgb25DbG9zZSB9KSB7XG4gICAgLy8gVE9ETzogRGlmZmVyZW5jZXMgYmV0d2VlbiBkaWFsb2cgYW5kIG1vZGFsIGdvIGhlcmUsIHByZXN1bWFibHkuXG4gICAgLy8gTm9uLW1vZGFsIGRpYWxvZ3MgbmVlZCB0byBiZSBhYmxlIHRvIGJlIHJlcG9zaXRpb25lZCwgZXRjLlxuICAgIGNvbnN0IHsgdXNlTW9kYWxCYWNrZHJvcCwgdXNlTW9kYWxCb2R5LCB1c2VNb2RhbFByb3BzLCB1c2VNb2RhbFRpdGxlIH0gPSB1c2VNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSk7XG4gICAgY29uc3QgdXNlRGlhbG9nQmFja2Ryb3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxCYWNrZHJvcFByb3BzIH0gPSB1c2VNb2RhbEJhY2tkcm9wKCk7XG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ0JhY2tkcm9wUHJvcHM6IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9O1xuICAgIH0sIFt1c2VNb2RhbEJhY2tkcm9wXSk7XG4gICAgY29uc3QgdXNlRGlhbG9nQm9keSA9IHVzZUNhbGxiYWNrKCh7IGRlc2NyaXB0aXZlIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbEJvZHlQcm9wcyB9ID0gdXNlTW9kYWxCb2R5KHsgZGVzY3JpcHRpdmUgfSk7XG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ0JvZHlQcm9wczogdXNlTW9kYWxCb2R5UHJvcHMgfTtcbiAgICB9LCBbdXNlTW9kYWxCYWNrZHJvcF0pO1xuICAgIGNvbnN0IHVzZURpYWxvZ1Byb3BzID0gdXNlTW9kYWxQcm9wcztcbiAgICBjb25zdCB1c2VEaWFsb2dUaXRsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbFRpdGxlUHJvcHMgfSA9IHVzZU1vZGFsVGl0bGUoKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nVGl0bGVQcm9wczogdXNlTW9kYWxUaXRsZVByb3BzIH07XG4gICAgfSwgW3VzZU1vZGFsVGl0bGVdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VEaWFsb2dQcm9wcyxcbiAgICAgICAgdXNlRGlhbG9nVGl0bGUsXG4gICAgICAgIHVzZURpYWxvZ0JvZHksXG4gICAgICAgIHVzZURpYWxvZ0JhY2tkcm9wXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kaWFsb2cuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlR2VuZXJpY0xhYmVsIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hNdWx0aSh7IC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcywgZ2V0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7fSk7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dCwgdXNlR2VuZXJpY0xhYmVsTGFiZWwsIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtbGlzdGJveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1saXN0Ym94LVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIGN1cnJlbnRUeXBlYWhlYWQsIGZvY3VzQ3VycmVudCwgdGFiYmFibGVJbmRleCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRGb2N1c2VkSW5uZXIgfSk7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IFtzaGlmdEhlbGQsIHNldFNoaWZ0SGVsZCwgZ2V0U2hpZnRIZWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0eXBlYWhlYWRJblByb2dyZXNzID0gKCEhY3VycmVudFR5cGVhaGVhZCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZENvdW50OyArK2kpIHtcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpXS5zZXRUeXBlYWhlYWRJblByb2dyZXNzKHR5cGVhaGVhZEluUHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgfSwgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIGNoaWxkQ291bnRdKTtcbiAgICBjb25zdCB1c2VMaXN0Ym94TXVsdGlJdGVtID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpbmZvLnNlbGVjdGVkO1xuICAgICAgICBjb25zdCBbdHlwZWFoZWFkSW5Qcm9ncmVzcywgc2V0VHlwZWFoZWFkSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gdXNlU3RhYmxlR2V0dGVyKHNlbGVjdGVkKTtcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgICAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKGluZm8ub25TZWxlY3QgPz8gKCgpID0+IHsgfSkpO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgLi4uaW5mbywgc2V0VHlwZWFoZWFkSW5Qcm9ncmVzcyB9KTtcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBnZXRTaGlmdEhlbGQoKSkge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWQ6IHRydWUgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUl0ZW1Qcm9wcywgdGFiYmFibGUgfTtcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpSXRlbVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgLi4uZSwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZDogIWdldFNlbGVjdGVkKCkgfSB9KTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LCB7IHNwYWNlOiB0eXBlYWhlYWRJblByb2dyZXNzID8gXCJleGNsdWRlXCIgOiB1bmRlZmluZWQgfSkoe30pO1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2V0c2l6ZVwiXSA9IChjaGlsZENvdW50KS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHRhYmJhYmxlID8/IGZhbHNlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgcHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgY2hpbGRDb3VudCwgdHlwZWFoZWFkSW5Qcm9ncmVzc10pO1xuICAgIGNvbnN0IHVzZUxpc3Rib3hNdWx0aUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpTGFiZWwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUxhYmVsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlMYWJlbFByb3BzIH07XG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XG4gICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpSXRlbSwgdXNlTGlzdGJveE11bHRpUHJvcHMsIHVzZUxpc3Rib3hNdWx0aUxhYmVsLCB0YWJiYWJsZUluZGV4LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBmb2N1czogZm9jdXNDdXJyZW50LCBtYW5hZ2VkQ2hpbGRyZW4gfTtcbiAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlQcm9wcyhwcm9wcykge1xuICAgICAgICBwcm9wcy5yb2xlID0gXCJsaXN0Ym94XCI7XG4gICAgICAgIHByb3BzW1wiYXJpYS1tdWx0aXNlbGVjdGFibGVcIl0gPSBcInRydWVcIjtcbiAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHModXNlSGFzRm9jdXNQcm9wcyh1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24sIG9uS2V5VXAsIG9uRm9jdXNPdXQgfSwgcHJvcHMpKSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkgeyBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKVxuICAgICAgICBzZXRTaGlmdEhlbGQodHJ1ZSk7IH1cbiAgICBmdW5jdGlvbiBvbktleVVwKGUpIHsgaWYgKGUua2V5ID09IFwiU2hpZnRcIilcbiAgICAgICAgc2V0U2hpZnRIZWxkKGZhbHNlKTsgfVxuICAgIGZ1bmN0aW9uIG9uRm9jdXNPdXQoZSkgeyBzZXRTaGlmdEhlbGQoZmFsc2UpOyB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdGJveC1tdWx0aS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50LCB1c2VDaGlsZEZsYWcsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcbmltcG9ydCB7IHVzZUdlbmVyaWNMYWJlbCB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94U2luZ2xlKHsgc2VsZWN0ZWRJbmRleCwgb25TZWxlY3QsIHNlbGVjdGlvbk1vZGUsIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IFthbnlJdGVtc0ZvY3VzZWQsIHNldEFueUl0ZW1zRm9jdXNlZCwgZ2V0QW55SXRlbXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcywgZ2V0SW5wdXRFbGVtZW50IH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0QW55SXRlbXNGb2N1c2VkIH0pO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcbiAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uU2VsZWN0ID8/ICgoKSA9PiB7IH0pKTtcbiAgICAvLyBUcmFjayB3aGV0aGVyIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIGxpc3QgYm94IHBhcmVudCBlbGVtZW50LlxuICAgIC8vIFdoZW4gaXQncyBub3QsIHdlIHJlc2V0IHRoZSB0YWJiYWJsZSBpbmRleCBiYWNrIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudC5cbiAgICBjb25zdCB7IHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyB9ID0gdXNlQWN0aXZlRWxlbWVudCh7IG9uQWN0aXZlRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGFjdGl2ZUVsZW1lbnQpID0+IHNldEFueUl0ZW1zRm9jdXNlZCghIShnZXRJbnB1dEVsZW1lbnQoKT8uY29udGFpbnMoYWN0aXZlRWxlbWVudCkpKSwgW10pIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghYW55SXRlbXNGb2N1c2VkKVxuICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgIH0sIFthbnlJdGVtc0ZvY3VzZWQsIHNlbGVjdGVkSW5kZXgsIG5hdmlnYXRlVG9JbmRleF0pO1xuICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIHNldENoaWxkRmxhZzogKGksIHNlbGVjdGVkKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaSkgPT4gKG1hbmFnZWRDaGlsZHJlbltpXT8uZ2V0U2VsZWN0ZWQoKSA/PyBudWxsKVxuICAgIH0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRlVG9JbmRleChzZWxlY3RlZEluZGV4KTtcbiAgICB9LCBbc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aF0pO1xuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IHVzZUxpc3Rib3hTaW5nbGVJdGVtID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWQsIC4uLmluZm8gfSk7XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmZvLmluZGV4O1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHRhYmJhYmxlICYmIHNlbGVjdGlvbk1vZGUgPT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGUsIHNlbGVjdGlvbk1vZGUsIGluZGV4XSk7XG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtUHJvcHMsIHRhYmJhYmxlLCBzZWxlY3RlZCwgZ2V0U2VsZWN0ZWQgfTtcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUl0ZW1Qcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoKGUpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCkoe30pO1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2V0c2l6ZVwiXSA9IChjaGlsZENvdW50KS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHNlbGVjdGVkID8/IGZhbHNlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgc2VsZWN0aW9uTW9kZSwgY2hpbGRDb3VudF0pO1xuICAgIGNvbnN0IHVzZUxpc3Rib3hTaW5nbGVMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcbiAgICAgICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzIH07XG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XG4gICAgcmV0dXJuIHsgdXNlTGlzdGJveFNpbmdsZUl0ZW0sIHVzZUxpc3Rib3hTaW5nbGVQcm9wcywgdXNlTGlzdGJveFNpbmdsZUxhYmVsLCB0YWJiYWJsZUluZGV4LCBmb2N1czogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBtYW5hZ2VkQ2hpbGRyZW4gfTtcbiAgICBmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibGlzdGJveFwiO1xuICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcykpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdGJveC1zaW5nbGUuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlLCB1c2VUaW1lb3V0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VTb2Z0RGlzbWlzcyB9IGZyb20gXCIuL3VzZS1tb2RhbFwiO1xuLyoqXG4gKiBBIG1lbnUgaXMgYSBwb3B1cCBjb250cm9sIHRoYXQgY29udGFpbnMgYSBsaXN0IG9mIG1lbnUgaXRlbXMsIGFuZCB0aGF0J3MgaXQuXG4gKiBJdCBoYXMgdmVyeSB3ZWxsLWRlZmluZWQgbG9naWMgZm9yIG1hbmFnaW5nIHRob3NlIGl0ZW1zIGFzIHRoZSBtZW51J3Mgc3RhdGUgY2hhbmdlcy5cbiAqXG4gKiBBIE1lbnVCYXNlIGlzIGp1c3QgdGhlIFwicG9wdXBcIiBwYXJ0IHdpdGhvdXQgdGhlIFwibGlzdCBvZiBtZW51IGl0ZW1zXCIgcGFydC4gSXQgY2FuXG4gKiAocmVhbGx5LCBtdXN0KSBoYXZlIGludGVyYWN0aXZlIGNvbnRyb2xzLCBidXQgdGhlc2UgY29udHJvbHMgYXJlIGFsbG93ZWQgdG8gYmUgbW9yZVxuICogZnJlZS1mb3JtLiBUaGlzIG1lYW5zIHRoYXQsIGxpa2UgYSBkaWFsb2csIHlvdSBtdXN0IHRlbGwgdGhpcyBob29rXG4gKiB3aGVyZSB3aXRoaW4gdGhlIHBvcHVwIHRvIHNlbmQgZm9jdXMgd2hlbiBvcGVuZWQgKGZvciBhIG1lbnUgaXQncyBqdXN0IHRoZSBmaXJzdFxuICogbWVudSBpdGVtLCBidXQgd2l0aCBjdXN0b20gY29udGVudCB5b3UnbGwgbmVlZCB0byBwcm92aWRlIHRoaXMpLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbnVCYXNlKHsgc2VuZEZvY3VzV2l0aGluTWVudSwgLi4uYXJncyB9KSB7XG4gICAgY29uc3QgZ2V0U2VuZEZvY3VzV2l0aGluTWVudSA9IHVzZVN0YWJsZUdldHRlcihzZW5kRm9jdXNXaXRoaW5NZW51KTtcbiAgICBjb25zdCBbZm9jdXNUcmFwQWN0aXZlLCBzZXRGb2N1c1RyYXBBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgbGV0IG9uQ2xvc2UgPSBhcmdzLm9uQ2xvc2U7XG4gICAgbGV0IG9uT3BlbiA9IGFyZ3Mub25PcGVuO1xuICAgIGxldCBtZW51YmFyID0gYXJncy5tZW51YmFyO1xuICAgIGxldCBvcGVuID0gKG1lbnViYXIgPyB0cnVlIDogYXJncy5vcGVuKTtcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSA/PyAoKCkgPT4geyB9KSk7XG4gICAgY29uc3QgZ2V0T3BlbiA9IHVzZVN0YWJsZUdldHRlcihvcGVuKTtcbiAgICAvLyBUT0RPOiBJdCdzIGF3a3dhcmQgdGhhdCB0aGUgYnV0dG9uIGZvY3VzIHByb3BzIGFyZSBvdXQgaGVyZSB3aGVyZSB3ZSBkb24ndCBoYXZlIGl0cyB0eXBlLFxuICAgIC8vIGJ1dCBmb2N1cyBtYW5hZ2VtZW50IGlzIHN1cGVyIHNlbnNpdGl2ZSwgYW5kIGV2ZW4gd2FpdGluZyBmb3IgYSB1c2VMYXlvdXRFZmZlY3QgdG8gc3luYyBzdGF0ZSBoZXJlXG4gICAgLy8gd291bGQgYmUgdG9vIGxhdGUsIHNvIGl0IHdvdWxkIGxvb2sgbGlrZSB0aGVyZSdzIGEgbW9tZW50IGJldHdlZW4gbWVudSBmb2N1cyBsb3N0IGFuZCBidXR0b24gZm9jdXMgZ2FpbmVkXG4gICAgLy8gd2hlcmUgbm90aGluZyBpcyBmb2N1c2VkLiBcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcywgZ2V0TGFzdEZvY3VzZWRJbm5lcjogZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7IC8qb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZDogb25NZW51T3JCdXR0b25Mb3N0TGFzdEZvY3VzKi99KTtcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZUJ1dHRvbkhhc0ZvY3VzUHJvcHMsIGdldExhc3RGb2N1c2VkSW5uZXI6IGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoeyAvKm9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQ6IG9uTWVudU9yQnV0dG9uTG9zdExhc3RGb2N1cyovfSk7XG4gICAgY29uc3QgW29wZW5lckVsZW1lbnQsIHNldE9wZW5lckVsZW1lbnQsIGdldE9wZW5lckVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VNZW51QmFzZUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VNZW51QmFzZUlkUmVmZXJlbmNpbmdQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tZW51LVwiIH0pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0QnV0dG9uRWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VCdXR0b25SZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldE9wZW5lckVsZW1lbnQgfSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRNZW51RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgY29uc3QgeyB1c2VTb2Z0RGlzbWlzc1Byb3BzIH0gPSB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UsIGdldEVsZW1lbnRzOiAoKSA9PiAoW2dldEJ1dHRvbkVsZW1lbnQoKSwgZ2V0TWVudUVsZW1lbnQoKV0pIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEZvY3VzVHJhcEFjdGl2ZShvcGVuKTtcbiAgICB9LCBbb3Blbl0pO1xuICAgIC8vIEEgbWVudSBzZW50aW5hbCBpcyBhIGhpZGRlbiBidXQgZm9jdXNhYmxlIGVsZW1lbnQgdGhhdCBjb21lcyBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBlbGVtZW50XG4gICAgLy8gdGhhdCwgd2hlbiBhY3RpdmF0ZWQgb3IgZm9jdXNlZCBvdmVyLCBjbG9zZXMgdGhlIG1lbnUuXG4gICAgLy8gKGlmIGZvY3VzZWQgd2l0aGluIDEwMG1zIG9mIHRoZSBvcGVuIHByb3AgY2hhbmdpbmcsIGluc3RlYWQgb2ZcbiAgICAvLyBjbG9zaW5nIHRoZSBtZW51LCBmb2N1c2luZyB0aGUgc2VudGluZWwgaW1tZWRpYXRlbHkgYXNrcyB0aGUgbWVudSB0byBmb2N1cyBpdHNlbGYpLlxuICAgIC8vIFRoaXMgZXhpc3RzIGJlY2F1c2Ugd2hpbGUgbW91c2UgdXNlcnMgY2FuIGNsaWNrIG91dCBvZiBhIG1lbnVcbiAgICAvLyBhbmQga2V5Ym9hcmQgdXNlcnMgY2FuIGVzY2FwZSB0byBjbG9zZSB0aGUgbWVudSxcbiAgICAvLyBzY3JlZW4gcmVhZGVycyBhbmQgb3RoZXIgaW5wdXQgbWV0aG9kcyB0aGF0IGRvbid0IHVzZSB0aG9zZSB0d28gYmVjb21lIHN0dWNrLlxuICAgIGNvbnN0IHVzZU1lbnVTZW50aW5lbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgW2ZpcnN0U2VudGluZWxJc0FjdGl2ZSwgc2V0Rmlyc3RTZW50aW5lbElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgdXNlVGltZW91dCh7IGNhbGxiYWNrOiAoKSA9PiB7IHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZShvcGVuKTsgfSwgdGltZW91dDogMTAwLCB0cmlnZ2VySW5kZXg6IGAke29wZW59LSR7Zmlyc3RTZW50aW5lbElzQWN0aXZlfWAgfSk7XG4gICAgICAgIGNvbnN0IG9uRm9jdXMgPSBmaXJzdFNlbnRpbmVsSXNBY3RpdmUgPyAoKCkgPT4gc3RhYmxlT25DbG9zZSgpKSA6ICgoKSA9PiBnZXRTZW5kRm9jdXNXaXRoaW5NZW51KCk/LigpKTtcbiAgICAgICAgY29uc3Qgb25DbGljayA9ICgpID0+IHN0YWJsZU9uQ2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZU1lbnVTZW50aW5lbFByb3BzOiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25Gb2N1cywgb25DbGljayB9LCBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbb3Blbl0pO1xuICAgIGNvbnN0IHVzZU1lbnVCYXNlUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiICYmIGdldE9wZW4oKSkge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VTb2Z0RGlzbWlzc1Byb3BzKHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcyh1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZW51QmFzZUlkUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biB9LCAocHJvcHMpKSkpKSk7XG4gICAgfSwgW3VzZVNvZnREaXNtaXNzUHJvcHMsIHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcywgdXNlTWVudUJhc2VSZWZFbGVtZW50UHJvcHMsIHVzZU1lbnVCYXNlSWRQcm9wc10pO1xuICAgIGNvbnN0IHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZUJ1dHRvblJlZkVsZW1lbnRQcm9wcyh1c2VCdXR0b25IYXNGb2N1c1Byb3BzKHVzZU1lbnVCYXNlSWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1jb250cm9sc1wiKShwcm9wcykpKTtcbiAgICB9LCBbdXNlQnV0dG9uSGFzRm9jdXNQcm9wcywgdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzLCB1c2VNZW51QmFzZUlkUmVmZXJlbmNpbmdQcm9wc10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbmRGb2N1c1dpdGhpbk1lbnUgPSBnZXRTZW5kRm9jdXNXaXRoaW5NZW51KCk7XG4gICAgICAgIGlmIChmb2N1c1RyYXBBY3RpdmUpIHtcbiAgICAgICAgICAgIHNlbmRGb2N1c1dpdGhpbk1lbnU/LigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvY3VzVHJhcEFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIoKSlcbiAgICAgICAgICAgICAgICBnZXRPcGVuZXJFbGVtZW50KCk/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG51bGwsIHNvIHdlJ3ZlIG9ubHkganVzdCBtb3VudGVkIGFuZCBzaG91bGRuJ3QgZm9jdXMgb3Vyc2VsdmVzLlxuICAgICAgICB9XG4gICAgfSwgW2ZvY3VzVHJhcEFjdGl2ZV0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1lbnVTZW50aW5lbCxcbiAgICAgICAgZm9jdXNUcmFwQWN0aXZlLFxuICAgICAgICB1c2VNZW51QmFzZVByb3BzLFxuICAgICAgICB1c2VNZW51QmFzZUJ1dHRvblByb3BzLFxuICAgICAgICBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIsXG4gICAgICAgIGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lcixcbiAgICAgICAgb3BlbixcbiAgICAgICAgb25PcGVuLFxuICAgICAgICBvbkNsb3NlXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTWVudSh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBub1R5cGVhaGVhZCwgbm9XcmFwLCB0eXBlYWhlYWRUaW1lb3V0LCAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdGFiYmFibGVJbmRleCwgZm9jdXNDdXJyZW50OiBmb2N1c01lbnUsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIG5vVHlwZWFoZWFkLCBub1dyYXAsIHR5cGVhaGVhZFRpbWVvdXQsIHNob3VsZEZvY3VzT25DaGFuZ2U6IHVzZUNhbGxiYWNrKCgpID0+IGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lcigpIHx8IGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lcigpLCBbXSkgfSk7XG4gICAgY29uc3QgeyB1c2VNZW51U2VudGluZWwsIGZvY3VzVHJhcEFjdGl2ZSwgdXNlTWVudUJhc2VCdXR0b25Qcm9wcywgdXNlTWVudUJhc2VQcm9wcywgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyLCBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIsIG9wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlTWVudUJhc2UoeyAuLi5hcmdzLCBzZW5kRm9jdXNXaXRoaW5NZW51OiBmb2N1c01lbnUgPz8gKCgpID0+IHsgfSkgfSk7XG4gICAgY29uc3QgdXNlTWVudUJ1dHRvbiA9IHVzZUNhbGxiYWNrKCh7fSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlTWVudUJ1dHRvblByb3BzOiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMocCk7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWhhc3BvcHVwXCJdID0gXCJtZW51XCI7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWV4cGFuZGVkXCJdID0gb3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbb3Blbiwgb25DbG9zZSwgb25PcGVuLCB1c2VNZW51QmFzZUJ1dHRvblByb3BzXSk7XG4gICAgLypjb25zdCB1c2VNZW51U3VibWVudUl0ZW0gPSB1c2VDYWxsYmFjaygoYXJnczogVXNlTWVudVN1Ym1lbnVJdGVtUGFyYW1ldGVycykgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1lbnVQcm9wcywgdXNlTWVudUJ1dHRvbiB9ID0gdXNlQXJpYU1lbnU8SFRNTEVsZW1lbnQsIENoaWxkRWxlbWVudCwgST4oYXJncyk7XG4gICAgICAgIGNvbnN0IHsgdXNlTWVudUJ1dHRvblByb3BzIH0gPSB1c2VNZW51QnV0dG9uPEU+KHsgdGFnOiBcImxpXCIgYXMgYW55IH0pO1xuXG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50PGFueT4oeyBvbkVsZW1lbnRDaGFuZ2U6IHNldE9wZW5lckVsZW1lbnQgYXMgT25QYXNzaXZlU3RhdGVDaGFuZ2U8YW55PiB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgICAgIHVzZU1lbnVQcm9wcyxcbiAgICAgICAgICAgIHVzZU1lbnVTdWJtZW51SXRlbVByb3BzOiBmdW5jdGlvbiA8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+Pih7IC4uLnByb3BzIH06IFApIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJtZW51aXRlbVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVudUJ1dHRvblByb3BzKHVzZU1lbnVJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHByb3BzKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pOyovXG4gICAgY29uc3QgdXNlTWVudUl0ZW0gPSB1c2VDYWxsYmFjaygoYXJncykgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZChhcmdzKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlTWVudUl0ZW1Qcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtXCI7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlTWVudUl0ZW1Qcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICBmdW5jdGlvbiB1c2VNZW51UHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVcIjtcbiAgICAgICAgcmV0dXJuIHVzZU1lbnVCYXNlUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VNZW51UHJvcHMsXG4gICAgICAgIHVzZU1lbnVCdXR0b24sXG4gICAgICAgIHVzZU1lbnVJdGVtLFxuICAgICAgICB1c2VNZW51U2VudGluZWwsXG4gICAgICAgIC8vdXNlTWVudVN1Ym1lbnVJdGVtLFxuICAgICAgICBmb2N1c01lbnUsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVudS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFUYWJzKHsgc2VsZWN0aW9uTW9kZSwgc2VsZWN0ZWRJbmRleCwgb25TZWxlY3QsIG9yaWVudGF0aW9uOiBsb2dpY2FsT3JpZW50YXRpb24sIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHMsIGdldEZvY3VzZWRJbm5lcjogZ2V0VGFiTGlzdEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoe30pO1xuICAgIGNvbnN0IFtwaHlzaWNhbE9yaWVudGF0aW9uLCBzZXRQaHlzaWNhbE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb25zdCB7IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uLCB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMgfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oeyBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2U6IHVzZUNhbGxiYWNrKChsb2dpY2FsRGlyZWN0aW9uSW5mbykgPT4gc2V0UGh5c2ljYWxPcmllbnRhdGlvbihjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uKGxvZ2ljYWxPcmllbnRhdGlvbiwgbG9naWNhbERpcmVjdGlvbkluZm8pKSwgW10pIH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGlzdElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGlzdElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1saXN0LVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGFiZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLWxhYmVsLVwiIH0pO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkVGFicywgbmF2aWdhdGVUb0luZGV4LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBpbnZhbGlkVHlwZWFoZWFkLCBjdXJyZW50VHlwZWFoZWFkLCBmb2N1c0N1cnJlbnQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0VGFiTGlzdEZvY3VzZWRJbm5lciwga2V5TmF2aWdhdGlvbjogbG9naWNhbE9yaWVudGF0aW9uIH0pO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUGFuZWxzLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRUYWJQYW5lbCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhvblNlbGVjdCk7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRUYWJzLmxlbmd0aDtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkVGFicylcbiAgICAgICAgICAgIGNoaWxkLnNldFNlbGVjdGlvbk1vZGUoc2VsZWN0aW9uTW9kZSk7XG4gICAgfSwgW3NlbGVjdGlvbk1vZGVdKTtcbiAgICB1c2VDaGlsZEZsYWcoeyBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkVGFicywgc2V0Q2hpbGRGbGFnOiAoaSwgc2VsZWN0ZWQpID0+IG1hbmFnZWRUYWJzW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksIGdldENoaWxkRmxhZzogaSA9PiAobWFuYWdlZFRhYnNbaV0/LmdldFNlbGVjdGVkKCkpIH0pO1xuICAgIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRQYW5lbHMsIHNldENoaWxkRmxhZzogKGksIHZpc2libGUpID0+IG1hbmFnZWRQYW5lbHNbaV0/LnNldFZpc2libGUodmlzaWJsZSksIGdldENoaWxkRmxhZzogaSA9PiAobWFuYWdlZFBhbmVsc1tpXT8uZ2V0VmlzaWJsZSgpKSB9KTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKHByZXYpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiBzZWxlY3Rpb25Nb2RlID09IFwiYWN0aXZhdGVcIikge1xuICAgICAgICAgICAgLy8gVE9ETzogV2UgbmVlZCB0byB3YWl0IGEgbW9tZW50IHNvIHRoYXQgdGhlIHRhYiBwYW5lbCB3ZSB3YW50IHRvIGZvY3VzXG4gICAgICAgICAgICAvLyBpcyBhY3R1YWxseSB2aXNpYmxlIChpLmUuIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGNoaWxkIHRvIHJlLXJlbmRlciBpdHNlbGYpLlxuICAgICAgICAgICAgLy8gV2UgY291bGQsIGFsdGVybmF0aXZlbHksIHNpZ25hbCB0byB0aGUgY2hpbGQgdGhhdCBpdCBzaG91bGQgZm9jdXMgaXRzZWxmXG4gICAgICAgICAgICAvLyB0aGUgbmV4dCB0aW1lIGl0IHJlbmRlcnMgaXRzZWxmIGFzIHZpc2libGUsXG4gICAgICAgICAgICAvLyB3aGljaCBtaWdodCBiZSBiZXR0ZXI/XG4gICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFuYWdlZFBhbmVsc1tzZWxlY3RlZEluZGV4XT8uZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW2NoaWxkQ291bnQsIHNlbGVjdGVkSW5kZXgsIHNlbGVjdGlvbk1vZGVdKTtcbiAgICBjb25zdCB1c2VUYWIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWIoaW5mbykge1xuICAgICAgICBjb25zdCBbc2VsZWN0aW9uTW9kZUwsIHNldFNlbGVjdGlvbk1vZGVMXSA9IHVzZVN0YXRlKHNlbGVjdGlvbk1vZGUpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IFt0YWJQYW5lbElkLCBzZXRUYWJQYW5lbElkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiSWRQcm9wcywgaWQ6IHRhYklkLCBnZXRJZDogZ2V0VGFiSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLVwiIH0pO1xuICAgICAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZCwgdGFiSWQsIHNldFRhYlBhbmVsSWQsIHNldFNlbGVjdGlvbk1vZGU6IHNldFNlbGVjdGlvbk1vZGVMLCAuLi5pbmZvIH0pO1xuICAgICAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmZvLmluZGV4KTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAodGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZUwgPT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3QoeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogZ2V0SW5kZXgoKSB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGUsIHNlbGVjdGlvbk1vZGVdKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFBhbmVsc1tpbmZvLmluZGV4XT8uc2V0VGFiSWQodGFiSWQpOyB9LCBbdGFiSWQsIGluZm8uaW5kZXhdKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBvblNlbGVjdD8uKGVuaGFuY2VFdmVudChlLCB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSkpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCkocHJvcHMpO1xuICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IFwidGFiXCI7XG4gICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAoc2VsZWN0ZWQgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtY29udHJvbHNcIl0gPSB0YWJQYW5lbElkO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVRhYklkUHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhuZXdQcm9wcykpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiUHJvcHMsIHNlbGVjdGVkIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZVRhYlBhbmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUGFuZWwoaW5mbykge1xuICAgICAgICAvL2NvbnN0IFtzaG91bGRGb2N1cywgc2V0U2hvdWxkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBbdGFiSWQsIHNldFRhYklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlLCBnZXRWaXNpYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVBhbmVsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRQYW5lbElkLCBpZDogdGFiUGFuZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItcGFuZWwtXCIgfSk7XG4gICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZU1hbmFnZWRUYWJQYW5lbCh7IC4uLmluZm8sIHRhYlBhbmVsSWQsIHNldFRhYklkLCBmb2N1cywgc2V0VmlzaWJsZTogc2V0VmlzaWJsZSwgZ2V0VmlzaWJsZTogZ2V0VmlzaWJsZSB9KTtcbiAgICAgICAgZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0VGFiTGlzdEZvY3VzZWRJbm5lcigpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudD8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IG1hbmFnZWRUYWJzW2luZm8uaW5kZXhdPy5zZXRUYWJQYW5lbElkKHRhYlBhbmVsSWQpOyB9LCBbdGFiUGFuZWxJZCwgaW5mby5pbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VUYWJQYW5lbFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWxhYmVsbGVkYnlcIl0gPSBtYW5hZ2VkVGFic1tpbmZvLmluZGV4XT8udGFiSWQ7XG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJ0YWJwYW5lbFwiO1xuICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPz89IC0xOyAvLyBNYWtlIHN1cmUgdGhlIHRhYiBwYW5lbCBpcyB0YWJiYWJsZS5cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VQYW5lbElkUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiUGFuZWxQcm9wcywgdmlzaWJsZSB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VUYWJzTGlzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYkxpc3QoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYkxpc3RQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYmxpc3RcIjtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1vcmllbnRhdGlvblwiXSA9IHBoeXNpY2FsT3JpZW50YXRpb247XG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHModXNlTG9naWNhbERpcmVjdGlvblByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRhYkxpc3RQcm9wcyB9O1xuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvblByb3BzLCBwaHlzaWNhbE9yaWVudGF0aW9uXSk7XG4gICAgY29uc3QgdXNlVGFic0xhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFic0xhYmVsKCkge1xuICAgICAgICBmdW5jdGlvbiB1c2VUYWJzTGFiZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VUYWJMYWJlbElkUHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRhYnNMYWJlbFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7IHVzZVRhYiwgdXNlVGFiUGFuZWwsIHVzZVRhYnNMaXN0LCB1c2VUYWJzTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGZvY3VzVGFiTGlzdDogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBtYW5hZ2VkUGFuZWxzLCBtYW5hZ2VkVGFicyB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRhYnMuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlU3RhdGUsIHVzZVRpbWVvdXQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhVG9vbHRpcCh7IG1vdXNlb3ZlckRlbGF5LCBtb3VzZW91dERlbGF5IH0pIHtcbiAgICBtb3VzZW92ZXJEZWxheSA/Pz0gNDAwO1xuICAgIG1vdXNlb3V0RGVsYXkgPz89IDQwO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuLCBnZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgaWYgd2UncmUgaG92aW5nIG92ZXIgdGhlIHRyaWdnZXIgd2hlbiBjb3JyZWN0aW5nIGZvciB0aGUgZ2l2ZW4gZGVsYXlzLlxuICAgIGNvbnN0IFtoYXNEZWxheUNvcnJlY3RlZE1vdXNlb3Zlciwgc2V0SGFzRGVsYXlDb3JyZWN0ZWRNb3VzZW92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVG9vbHRpcElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRvb2x0aXAtXCIgfSk7XG4gICAgY29uc3QgW3RyaWdnZXJGb2N1c2VkSW5uZXIsIHNldFRyaWdnZXJGb2N1c2VkSW5uZXIsIGdldFRyaWdnZXJGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0cmlnZ2VySGFzTW91c2VvdmVyLCBzZXRUcmlnZ2VySGFzTW91c2VvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdG9vbHRpcEhhc01vdXNlb3Zlciwgc2V0VG9vbHRpcEhhc01vdXNlb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Rvb2x0aXBIYXNGb2N1cywgc2V0VG9vbHRpcEhhc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0cmlnZ2VySW5kZXggPSAhISgrdHJpZ2dlckhhc01vdXNlb3ZlciArICt0b29sdGlwSGFzTW91c2VvdmVyICsgK3Rvb2x0aXBIYXNGb2N1cyk7XG4gICAgY29uc3QgdG9vbHRpcFNob3VsZEJlU2hvd24gPSAodHJpZ2dlckhhc01vdXNlb3ZlciB8fCB0b29sdGlwSGFzTW91c2VvdmVyIHx8IHRvb2x0aXBIYXNGb2N1cyk7XG4gICAgLy8gQWN0aXZhdGUgb24gdGhlIHVzdWFsIGRlbGF5IGZvciBtb3VzZW92ZXJcbiAgICB1c2VUaW1lb3V0KHtcbiAgICAgICAgdGltZW91dDogbW91c2VvdmVyRGVsYXksXG4gICAgICAgIHRyaWdnZXJJbmRleCxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHNldEhhc0RlbGF5Q29ycmVjdGVkTW91c2VvdmVyKHRvb2x0aXBTaG91bGRCZVNob3duKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEZvcmNpYmx5IGRlYWN0aXZhdGUgYWxtb3N0IGltbWVkaWF0ZWx5IG9uIG1vdXNlb3V0XG4gICAgdXNlVGltZW91dCh7XG4gICAgICAgIHRpbWVvdXQ6IG1vdXNlb3V0RGVsYXksXG4gICAgICAgIHRyaWdnZXJJbmRleCxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdG9vbHRpcFNob3VsZEJlU2hvd24pXG4gICAgICAgICAgICAgICAgc2V0SGFzRGVsYXlDb3JyZWN0ZWRNb3VzZW92ZXIodG9vbHRpcFNob3VsZEJlU2hvd24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIChkZWxheS1jb3JyZWN0ZWQpIG1vdXNlb3ZlciBvciB3ZSdyZSBmb2N1c2VkLFxuICAgIC8vIHNob3cgdGhlIHRvb2x0aXAuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0T3BlbihoYXNEZWxheUNvcnJlY3RlZE1vdXNlb3ZlciB8fCB0cmlnZ2VyRm9jdXNlZElubmVyKTtcbiAgICB9LCBbaGFzRGVsYXlDb3JyZWN0ZWRNb3VzZW92ZXIsIHRyaWdnZXJGb2N1c2VkSW5uZXJdKTtcbiAgICBjb25zdCB1c2VUb29sdGlwVHJpZ2dlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXBUcmlnZ2VyKCkge1xuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJFbnRlcihlKSB7XG4gICAgICAgICAgICBzZXRUcmlnZ2VySGFzTW91c2VvdmVyKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckxlYXZlKGUpIHtcbiAgICAgICAgICAgIHNldFRyaWdnZXJIYXNNb3VzZW92ZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICAgICAgZS50YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzKHsgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkOiBzZXRUcmlnZ2VyRm9jdXNlZElubmVyIH0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VUb29sdGlwVHJpZ2dlclByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgLy8gTm90ZTogVGhvdWdoIGl0J3MgaW1wb3J0YW50IHRvIG1ha2Ugc3VyZSB0aGF0IGZvY3VzaW5nIGFjdGl2YXRlcyBhIHRvb2x0aXAsXG4gICAgICAgICAgICAvLyBpdCdzIHBlcmZlY3RseSByZWFzb25hYmxlIHRoYXQgYSBjaGlsZCBlbGVtZW50IHdpbGwgYmUgdGhlIG9uZSB0aGF0J3MgZm9jdXNlZCxcbiAgICAgICAgICAgIC8vIG5vdCB0aGlzIG9uZSwgc28gd2UgZG9uJ3Qgc2V0IHRhYkluZGV4PTBcbiAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID8/PSAtMTtcbiAgICAgICAgICAgIHJldHVybiB1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1kZXNjcmliZWRieVwiKSh1c2VIYXNGb2N1c1Byb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJFbnRlciwgb25Qb2ludGVyTGVhdmUsIG9uVG91Y2hFbmQgfSwgcHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFRyaWdnZXJQcm9wcyB9O1xuICAgIH0sIFt1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzXSk7XG4gICAgY29uc3QgdXNlVG9vbHRpcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckVudGVyKGUpIHtcbiAgICAgICAgICAgIHNldFRvb2x0aXBIYXNNb3VzZW92ZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyTGVhdmUoZSkge1xuICAgICAgICAgICAgc2V0VG9vbHRpcEhhc01vdXNlb3ZlcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXNlVG9vbHRpcFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZElubmVyQ2hhbmdlZDogc2V0VG9vbHRpcEhhc0ZvY3VzIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHVzZVRvb2x0aXBJZFByb3BzKHVzZUhhc0ZvY3VzUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlckVudGVyLCBvblBvaW50ZXJMZWF2ZSB9LCBwcm9wcykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUb29sdGlwUHJvcHMgfTtcbiAgICB9LCBbdXNlVG9vbHRpcElkUHJvcHNdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VUb29sdGlwLFxuICAgICAgICB1c2VUb29sdGlwVHJpZ2dlcixcbiAgICAgICAgaXNPcGVuOiBvcGVuLFxuICAgICAgICBnZXRJc09wZW46IGdldE9wZW5cbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRvb2x0aXAuanMubWFwIixudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOlsiRU1QVFlfT0JKIiwiRU1QVFlfQVJSIiwiSVNfTk9OX0RJTUVOU0lPTkFMIiwiY3VycmVudEluZGV4IiwiY3VycmVudENvbXBvbmVudCIsInByZXZSYWYiLCJjdXJyZW50SG9vayIsImFmdGVyUGFpbnRFZmZlY3RzIiwib2xkQmVmb3JlRGlmZiIsIm9wdGlvbnMiLCJvbGRCZWZvcmVSZW5kZXIiLCJvbGRBZnRlckRpZmYiLCJkaWZmZWQiLCJvbGRDb21taXQiLCJvbGRCZWZvcmVVbm1vdW50IiwidW5tb3VudCIsImdldEhvb2tTdGF0ZSIsImluZGV4IiwidHlwZSIsImhvb2tzIiwibGVuZ3RoIiwicHVzaCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImludm9rZU9yUmV0dXJuIiwicmVkdWNlciIsImluaXQiLCJob29rU3RhdGUiLCJfcmVkdWNlciIsInVuZGVmaW5lZCIsIm5leHRWYWx1ZSIsImFjdGlvbiIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJhcmdzIiwic3RhdGUiLCJhcmdzQ2hhbmdlZCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZU1lbW8iLCJjdXJyZW50IiwiZmFjdG9yeSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsImNvbnRleHQiLCJwcm92aWRlciIsInN1YiIsInByb3BzIiwidmFsdWUiLCJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsImludm9rZUNsZWFudXAiLCJpbnZva2VFZmZlY3QiLCJlIiwidm5vZGUiLCJjIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmFmIiwiZG9uZSIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJIQVNfUkFGIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiY29tbWl0UXVldWUiLCJzb21lIiwiZmlsdGVyIiwiY2IiLCJob29rIiwiY29tcCIsIm9sZEFyZ3MiLCJuZXdBcmdzIiwiYXJnIiwiZiIsIlVuc2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidG9WYWwiLCJtaXgiLCJrIiwieSIsInN0ciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJ0bXAiLCJ4IiwiYXJndW1lbnRzIiwicmV0dXJuTnVsbCIsIk0iLCJ1c2VTdGF0ZVAiLCJ1c2VFZmZlY3ROYXRpdmUiLCJ1c2VMYXlvdXRFZmZlY3ROYXRpdmUiLCJjYW5kaWRhdGVTZWxlY3RvcnMiLCJtYXRjaGVzIiwiRWxlbWVudCIsImlzSW5wdXQiLCJub2RlIiwiaXNIaWRkZW5JbnB1dCIsImlzRGV0YWlsc1dpdGhTdW1tYXJ5IiwiciIsImNoaWxkIiwiaXNIaWRkZW4iLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNEaXJlY3RTdW1tYXJ5Iiwibm9kZVVuZGVyRGV0YWlscyIsImRpc3BsYXlDaGVjayIsIndpZHRoIiwiaGVpZ2h0IiwiaXNEaXNhYmxlZEZyb21GaWVsZHNldCIsInBhcmVudE5vZGUiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlIiwiZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IiLCJpc0ZvY3VzYWJsZSIsImdsb2JhbCIsInRoaXMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIndpbmRvdyIsInNsaWNlIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJqb2luIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsIlNldCIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJfb25NdXRhdGlvbiIsImJpbmQiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJkZXN0cnVjdG9yIiwiZGlzY29ubmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImluZXJ0Tm9kZSIsIl91bm1hbmFnZU5vZGUiLCJzdGFydE5vZGUiLCJfdGhpczIiLCJjb21wb3NlZFRyZWVXYWxrIiwiX3Zpc2l0Tm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJkb2N1bWVudCIsImJvZHkiLCJjb250YWlucyIsInJvb3QiLCJub2RlVHlwZSIsIk5vZGUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiYmx1ciIsImZvY3VzIiwiRUxFTUVOVF9OT0RFIiwiZWxlbWVudCIsIl9hZG9wdEluZXJ0Um9vdCIsImNhbGwiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiYWRkIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiZ2V0Iiwic2V0IiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsIkVycm9yIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290Iiwic2l6ZSIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIk1hcCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vbkRvY3VtZW50TG9hZGVkIiwiaW5lcnQiLCJoYXMiLCJwYXJlbnQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJzaGFkb3dSb290QW5jZXN0b3IiLCJzaGFkb3dSb290IiwibG9jYWxOYW1lIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCJfaSIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJoYXNPd25Qcm9wZXJ0eSIsImFzc2lnbiIsIm9iaiIsInNoYWxsb3dEaWZmZXJzIiwiYSIsImIiLCJoIiwiUmFuZG9tV29yZHMiLCJjcmVhdGVDb250ZXh0IiwibWVtbyIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7O1NBQU87SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxJQUFNQSxHQUFBQSxHQUFZLEVB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
