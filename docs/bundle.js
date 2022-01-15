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
      (_keyNavigation = keyNavigation) !== null && _keyNavigation !== void 0 ? _keyNavigation : keyNavigation = "either"; // Keep track of three things related to the currently tabbable element's index:
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
      const navigateToIndex = F(i => {
        setTabbableIndex(i);
      }, []);
      const navigateToFirst = F(() => {
        setTabbableIndex(indexMangler(0));
      }, []);
      const navigateToLast = F(() => {
        setTabbableIndex(indexMangler(managedChildren.length - 1));
      }, []);
      const navigateToPrev = F(() => {
        setTabbableIndex(i => indexMangler(indexDemangler(i !== null && i !== void 0 ? i : 0) - 1));
      }, [indexDemangler, indexMangler]);
      const navigateToNext = F(() => {
        setTabbableIndex(i => indexMangler(indexDemangler(i !== null && i !== void 0 ? i : 0) + 1));
      }, [indexDemangler, indexMangler]);
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
            onClick: roveToSelf
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
        setTabbableIndex,
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
        setTabbableIndex,
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
        if (!anyItemsFocused) setTabbableIndex(selectedIndex);
      }, [anyItemsFocused, selectedIndex, setTabbableIndex]);
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
        const { useHasFocusProps, getFocusedInner } = useHasFocus({});
        const { useListNavigationChild, currentTypeahead, setTabbableIndex, tabbableIndex, useListNavigationProps } = useListNavigation({ shouldFocusOnChange: getFocusedInner });
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
                v$1("code", null, "every one"),
                " of its child elements is extremely important. This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through ",
                v$1("code", null, "every one"),
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
                v$1("input", { type: "number", value: tabbableIndex ?? undefined, onInput: e => { e.preventDefault(); setTabbableIndex(e.currentTarget.valueAsNumber); } })),
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
    const DemoUseRovingTabIndexChild = (({ index }) => {
        const randomWord = A$1(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/], []);
        const useRovingTabIndexChild = T$1(RovingChildContext);
        const text = `${randomWord} This is item #${index + 1}`;
        const { useListNavigationChildProps, useListNavigationSiblingProps } = useRovingTabIndexChild({ index, text });
        const props = useListNavigationChildProps({});
        return (v$1("li", { ...props },
            text,
            " (",
            props.tabIndex,
            ")",
            v$1("input", { ...useListNavigationSiblingProps({ type: "checkbox" }) })));
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXRpbWVvdXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZHJvcHBhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWV2ZW50LWhhbmRsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYWN0aXZlLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtaGFzLWZvY3VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWludGVydmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxpc3QtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWZvY3VzLXRyYXAuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9wcm9wcy5qcyIsIi4uL3VzZS1idXR0b24uanMiLCIuLi91c2UtYWNjb3JkaW9uLmpzIiwiLi4vdXNlLWxhYmVsLmpzIiwiLi4vdXNlLWNoZWNrYm94LmpzIiwiLi4vdXNlLWNoZWNrYm94LWdyb3VwLmpzIiwiLi4vdXNlLW1vZGFsLmpzIiwiLi4vdXNlLWRpYWxvZy5qcyIsIi4uL3VzZS1saXN0Ym94LW11bHRpLmpzIiwiLi4vdXNlLWxpc3Rib3gtc2luZ2xlLmpzIiwiLi4vdXNlLW1lbnUuanMiLCIuLi91c2UtdGFicy5qcyIsIi4uL3VzZS10b29sdGlwLmpzIiwiZGVtb3MvdXNlLWludGVydmFsLnRzeCIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS10aW1lb3V0LnRzeCIsImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxyLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmaChvW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsQShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gQShuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEYobix0KXtyZXR1cm4gbz04LEEoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gVChuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIGQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLEEgYXMgdXNlTWVtbyxGIGFzIHVzZUNhbGxiYWNrLFQgYXMgdXNlQ29udGV4dCxkIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogRGVidWcgaG9vay5cbiAqXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRW5zdXJlU3RhYmlsaXR5KC4uLnZhbHVlcykge1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoLCAwKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xuICAgIHJldHVybjtcbiAgICBmdW5jdGlvbiB1c2VIZWxwZXIodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICAgICAgY29uc3QgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkgPSB1c2VSZWYodmFsdWUpO1xuICAgICAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnQgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhpcyBob29rIHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCB2YWx1ZSB0aGF0IHdhcyBjaGVja2VkLmApO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFNpbWlsYXIgdG8gYHVzZVN0YXRlYCwgYnV0IGZvciB2YWx1ZXMgdGhhdCBhcmVuJ3QgXCJyZW5kZXItaW1wb3J0YW50XCIgJm5kYXNoOyB1cGRhdGVzIGRvbid0IGNhdXNlIGEgcmUtcmVuZGVyIGFuZCBzbyB0aGUgdmFsdWUgc2hvdWxkbid0IGJlIHVzZWQgZHVyaW5nIHJlbmRlciAodGhvdWdoIGl0IGNlcnRhaW5seSBjYW4sIGF0IGxlYXN0IGJ5IHJlLXJlbmRlcmluZyBhZ2FpbikuXG4gKlxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKlxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpO1xuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbGV0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZXJlIGFyZSBhIGNvdXBsZSBwbGFjZXMgd2hlcmUgd2UnZCBsaWtlIHRvIHVzZSBvdXIgaW5pdGlhbFxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxuICAgIC8vIGdldFZhbHVlIGlzIGNhbGxlZC5cbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGluaXRpYWxWYWx1ZSwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcpID0+IHtcbiAgICAgICAgY29uc3QgcHJldkRlcCA9IHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVwID0gYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcocHJldkRlcCkgOiBhcmc7XG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBzaG91bGRuJ3QgY2FsbCBnZXRWYWx1ZSBkdXJpbmcgb25DaGFuZ2VcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmQgY2xlYW51cCBmdW5jdGlvblxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGRlcCwgcHJldkRlcCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkZXA7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59XG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXBhc3NpdmUtc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xuICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XG59XG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgIF07XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1syXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMTNdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cblxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdIGFzIGNvbnN0O1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcblxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSk7XG59XG4vKipcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIHJocy5zdHlsZTtcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QobGhzPy5zdHlsZSkgfSwgcmhzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xocy5zdHlsZX07JHtyaHM/LnN0eWxlID8/IFwiXCJ9YDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gbWVyZ2UgdHdvIHByb3BzIHdpdGggdGhlIHNhbWUgbmFtZTogJHtzdHJ9YCk7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ubGhzLFxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcbiAgICAgICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuLypcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcblxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTM6IE0xID0gMDtcblxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTY6IE0yID0gMDtcblxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuXG5cbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XG5cblxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxufVxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxuKi8gXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xuICAgIGNvbnN0IG9uRWxlbWVudENoYW5nZSA9IGFyZ3M/Lm9uRWxlbWVudENoYW5nZTtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRWxlbWVudENoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgZnVuY3Rpb24gZm9vKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwMS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmZ1bmN0aW9uIGV4dHJhY3RFbGVtZW50U2l6ZShlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV0cmlldmUgdGhlIHNpemUgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXRcIik7XG4gICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgIHJldHVybiAoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xufVxuZnVuY3Rpb24gcmV0dXJuTnVsbCgpIHsgcmV0dXJuIG51bGw7IH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh7IGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSk7XG4gICAgY29uc3QgW2dldFNpemUsIHNldFNpemVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU2l6ZUNoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgY29uc3QgY3VycmVudE9ic2VydmVCb3ggPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBuZWVkQU5ld09ic2VydmVyID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG9ic2VydmVCb3gpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzZXRTaXplKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiAoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4gbmVlZEFOZXdPYnNlcnZlcihlLCBnZXRPYnNlcnZlQm94Py4oKSksIFtdKSB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2ZUJveCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgIT09IGdldE9ic2VydmVCb3goKSlcbiAgICAgICAgICAgICAgICBuZWVkQU5ld09ic2VydmVyKGdldEVsZW1lbnQoKSwgZ2V0T2JzZXJ2ZUJveCgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIHVzZUVsZW1lbnRTaXplUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wc1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWxlbWVudC1zaXplLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlRWxlbWVudFNpemUgfSBmcm9tIFwiLi91c2UtZWxlbWVudC1zaXplXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcbn1cbi8qKlxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxuICpcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cbiAqXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxuICpcbiAqIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMvI2xvZ2ljYWwtdG8tcGh5c2ljYWxcbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAqICogYGdldExvZ2ljYWxEaXJlY3Rpb25gOiByZXRyaWV2ZXMgYSBgTG9naWNhbERpcmVjdGlvbkluZm9gIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gKEZ1bmN0aW9uIGlzIGNvbnN0YW50IGJldHdlZW4gcmVuZGVycylcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cbiAqICogYGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25gOiAgQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImlubGluZVwiIG9yIFwiYmxvY2tcIiB0byBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlKTtcbiAgICBjb25zdCBbZ2V0Q29tcHV0ZWRTdHlsZXMsIHNldENvbXB1dGVkU3R5bGVzXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0Q29tcHV0ZWRTdHlsZXMod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICB9KTtcbiAgICAvLyBUT0RPOiBUaGVyZSdzIG5vIHdheSB0byByZWZyZXNoIHdoaWNoIHdyaXRpbmcgbW9kZSB3ZSBoYXZlIG9uY2UgbW91bnRlZC5cbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xuICAgIC8vICAgQi4gQ2FsbGluZyBnZXRDb21wdXRlZFN0eWxlIGFmdGVyIGV2ZXJ5IHJlbmRlciBmb3IgZXZlcnkgZWxlbWVudCBnZXRzIGV4cGVuc2l2ZSBmYXN0IGFuZFxuICAgIC8vICAgQy4gSXMgbm90IG5lY2Vzc2FyeSBmb3IgbW9zdCB1c2UgY2FzZXMgdGhhdCB3aWxsIG5ldmVyIHN3aXRjaCB3cml0aW5nLW1vZGUgd2l0aGluIGEgc2luZ2xlIGNvbXBvbmVudFxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxuICAgIC8vXG4gICAgLy8gQXMgYSBzb2x1dGlvbiwgaGVyZSdzIGEgY2hlYXAgd29ya2Fyb3VuZCB0aGF0IGNoZWNrcyB3aGVuIHRoZSBlbGVtZW50J3Mgc2l6ZSBoYXMgY2hhbmdlZCxcbiAgICAvLyBhbmQgaWYgc28sIHRlc3RzIGlmIHRoZSB3cml0aW5nIG1vZGUgaGFzIGNoYW5nZWQgdG9vLlxuICAgIC8vXG4gICAgLy8gVGhpcyB3aWxsIHdvcmsgZm9yIGF0IGxlYXN0IHNvbWUgbnVtYmVyIG9mIGNhc2VzLCBidXQgYSBiZXR0ZXIgc29sdXRpb24gaXMgc3RpbGwgbmVlZGVkLlxuICAgIGNvbnN0IHsgdXNlRWxlbWVudFNpemVQcm9wcyB9ID0gdXNlRWxlbWVudFNpemUoeyBvblNpemVDaGFuZ2U6IHVzZUNhbGxiYWNrKF8gPT4gb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlPy4oZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKSksIFtdKSB9KTtcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlcygpO1xuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZXMpIHtcbiAgICAgICAgICAgIGxldCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XG4gICAgICAgICAgICBsZXQgZCA9IGNvbXB1dGVkU3R5bGVzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGxldCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXG4gICAgICAgICAgICAgICAgZCA9IFwibHRyXCI7XG4gICAgICAgICAgICByZXR1cm4gKHsgLi4uV3JpdGluZ01vZGVzW3cgfHwgXCJob3Jpem9udGFsLXRiXCJdW2QgfHwgXCJsdHJcIl0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBcImlubGluZVwiO1xuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stc3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMl1dO1xuICAgICAgICAgICAgY2FzZSBcImlubGluZS1zdGFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiaW5saW5lLWVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVsyXV07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gXCJpbmxpbmUtc3RhcnRcIjtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxMZWZ0VG9wKGRpcikgeyBpZiAoZGlyID09PSBcImx0clwiIHx8IGRpciA9PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2lkdGhcIjsgaWYgKGRpciA9PT0gXCJidHRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMiA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pKTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VSZWZFbGVtZW50UHJvcHModXNlRWxlbWVudFNpemVQcm9wcyhwcm9wcykpLCBbXSksXG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsU2l6ZTogY29udmVydEVsZW1lbnRTaXplLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaWRlLFxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbFNpZGVcbiAgICB9O1xufVxuLy8gSGVscGVyIGZvciBleHRyYWN0aW5nIGluZm8gZnJvbSBcImx0clwiLCBcInR0YlwiLCBldGMuXG5jb25zdCBNID0ge1xuICAgIHQ6IFwidG9wXCIsXG4gICAgYjogXCJib3R0b21cIixcbiAgICBsOiBcImxlZnRcIixcbiAgICByOiBcInJpZ2h0XCJcbn07XG47XG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xuICAgIC4uLkhvcml6b250YWxUYkx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXG59O1xuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcbn07XG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXG59O1xuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xuY29uc3QgVmVydGljYWxMckx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbFJ0bCxcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xuICAgIC4uLlZlcnRpY2FsTHJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcbn07XG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xuICAgIC4uLlNpZGV3YXlzTHRMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXG59O1xuY29uc3QgVmVydGljYWxSbCA9IHtcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXG59O1xuY29uc3QgVmVydGljYWxMciA9IHtcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXG59O1xuY29uc3QgU2lkZXdheXNSbCA9IHtcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXG59O1xuY29uc3QgU2lkZXdheXNMciA9IHtcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXG59O1xuY29uc3QgV3JpdGluZ01vZGVzID0ge1xuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZVAocHJldlZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFZhbHVlID0gY2FsbGJhY2socHJldlZhbHVlKTtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgICAgc2V0U3RhdGVQKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSB8fCAodHlwZW9mIHN0YXRlID09PSBcIm51bWJlclwiICYmIGlzTmFOKHN0YXRlKSkpO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBnZXRTdGF0ZV07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5mdW5jdGlvbiBiYXNlNjQodmFsdWUpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG4vKipcbiAqIFJldHVybnMgYSBob29rIHRoYXQgbW9kaWZpZXMgYSBzZXQgb2YgcHJvcHMgdG8gcHJvdmlkZSBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCBpZiBvbmUgd2FzIG5vdCBwcm92aWRlZC5cbiAqXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEFuZCB0aGUgcmFuZG9tbHktZ2VuZXJhdGVkIGlkIGl0c2VsZiBpcyBhbHNvIHByb3ZpZGVkIGluIGNhc2UgeW91IHdhbnQgdG8gaGFuZGxlIHRoZSBsb2dpYyB5b3Vyc2VsZiB3aXRob3V0IGB1c2VNZXJnZWRQcm9wc2AuXG4gKlxuICogVW5saWtlIG1vc3Qgb3RoZXIgYHVzZSpQcm9wc2AgaG9va3MsIHRoZXNlIGFyZSBtb3N0bHkgc3RhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XG4gICAgY29uc3QgW3JhbmRvbUlkLCBzZXRSYW5kb21JZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeCkpO1xuICAgIGNvbnN0IFt3YXRjaFByZWZpeFVwZGF0ZXMsIHNldFdhdGNoUHJlZml4VXBkYXRlcywgZ2V0V2F0Y2hQcmVmaXhVcGRhdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3YXRjaFByZWZpeFVwZGF0ZXMgPSBnZXRXYXRjaFByZWZpeFVwZGF0ZXMoKTtcbiAgICAgICAgaWYgKHdhdGNoUHJlZml4VXBkYXRlcylcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XG4gICAgICAgIHNldFdhdGNoUHJlZml4VXBkYXRlcyh0cnVlKTtcbiAgICB9LCBbcHJlZml4XSk7XG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxuICAgIC8vIFVzZWQgc28gdGhhdCBhbnkgSUQtcmVmZXJlbmNpbmcgcHJvcHMgZG9uJ3QgbmVlZCB0byBwcm92aWRlIHRoZSBzYW1lIHZhbHVlLlxuICAgIC8vXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcbiAgICAvLyB0aGVyZSB3aWxsIGJlIGEgdGVtcG9yYXJ5IG1pc21hdGNoLCBidXQgaXQncyBjb3JyZWN0ZWQgYmVmb3JlIHJlbmRlcmluZyBmaW5pc2hlcy5cbiAgICAvLyBJcyB0aGlzIG9rYXk/XG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCB1c2VSZWZlcmVuY2VkSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJlZmVyZW5jZWRJZFByb3BzKGlkUHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gZnVuY3Rpb24gKHsgW2lkUHJvcE5hbWVdOiBnaXZlbklkLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAoaWRQcm9wTmFtZSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgICAgIHNldFVzZWRJZCh1c2VkSWQyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xuICAgIGNvbnN0IHVzZVJhbmRvbUlkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VSYW5kb21JZFByb3BzKHApIHtcbiAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiaWRcIikocCk7XG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZG9tSWQsXG4gICAgICAgIGlkOiB1c2VkSWQsXG4gICAgICAgIGdldElkOiBnZXRVc2VkSWQsXG4gICAgICAgIHVzZVJhbmRvbUlkUHJvcHMsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzKHN0cikgeyB9XG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xuICAgIGNvbnN0IHsgaWQsIHJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoKTtcbiAgICAvL2NvbnN0IHAxYTogTWVyZ2VkUHJvcHM8eyBpZDogc3RyaW5nIH0sIHsgIH0+ID0gdXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSlcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHAyYiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xuICAgIGNvbnN0IHAzYSA9IHVzZVJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwM2IgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwNGIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwMWIpO1xuICAgIC8vcDFhLmlkO1xuICAgIHAxYi5pZDtcbiAgICBwMmFbXCJmb3JcIl07XG4gICAgcDJiW1wiZm9yXCJdO1xuICAgIHAyY1tcImZvclwiXTtcbiAgICBwM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwM2JbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGFbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBJdCdzIGJlY2F1c2UgaXQgcmVzb2x2ZXMgdG8gXCJpZDogdW5kZWZpbmVkICYgc3RyaW5nXCIgLS0gdGhpcyBzaG91bGRuJ3QgaGFwcGVuXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDFiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDJhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMmIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDNhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDNiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHA0YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDRiLnN0eWxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yYW5kb20taWQuanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xuY29uc3QgcHJldmlvdXNJbnB1dHMgPSBuZXcgTWFwKCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXAoKTtcbmNvbnN0IGNvbW1pdE5hbWUgPSAoXCJfX2NcIiBpbiBvcHRpb25zID8gXCJfX2NcIiA6IFwiY29tbWl0XCIgaW4gb3B0aW9ucyA/IFwiY29tbWl0XCIgOiBcIl9jb21taXRcIiBpbiBvcHRpb25zID8gXCJfY29tbWl0XCIgOiBcIl9fY1wiKTtcbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxuLy8gaXMgYSBwb3N0LXN1c3BlbnNlIHF1ZXN0aW9uLlxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XG4vLyBzbyBgcmVmPXtzb21lU3RhYmxlRnVuY3Rpb259YCB3b3Jrcy5cbi8vIFxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV07XG5jb25zdCBuZXdDb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG4gICAgZm9yIChsZXQgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICpcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xuICAgICAgICB9O1xuICAgIH0sIFtpZF0pO1xufVxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXG4gKlxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG4vKipcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxuICpcbiAqIERvIG5vdCB1c2UgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UhICBgdXNlTGF5b3V0RWZmZWN0YCBpcyBmaW5lIHRob3VnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IGFzIHVzZUVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBXcmFwIHRoZSBuYXRpdmUgYHVzZUVmZmVjdGAgdG8gYWRkIGFyZ3VtZW50c1xuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICogQHBhcmFtIGltcGwgWW91IGNhbiBjaG9vc2Ugd2hldGhlciB0byB1c2UgYHVzZUVmZmVjdGAgb3IgYHVzZUxheW91dEVmZmVjdGAgYnlcbiAqIHBhc3Npbmcgb25lIG9mIHRoZW0gYXMgdGhpcyBhcmd1bWVudC4gQnkgZGVmYXVsdCwgaXQncyBgdXNlRWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cywgaW1wbCA9IHVzZUVmZmVjdE5hdGl2ZSkge1xuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2hhbmdlcyA9IFtdO1xuICAgICAgICBpZiAoaW5wdXRzICYmIHByZXZJbnB1dHMuY3VycmVudCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJbnB1dHMuY3VycmVudFtpXSAhPSBpbnB1dHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBsKGVmZmVjdDIsIGlucHV0cyk7XG59XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCBhcyB1c2VMYXlvdXRFZmZlY3ROYXRpdmUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwiLi91c2UtZWZmZWN0XCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICByZXR1cm4gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCB1c2VMYXlvdXRFZmZlY3ROYXRpdmUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRpbWVvdXQoeyB0aW1lb3V0LCBjYWxsYmFjaywgdHJpZ2dlckluZGV4IH0pIHtcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xuICAgIC8vIFNldCBhbnkgdGltZSB3ZSBzdGFydCB0aW1lb3V0LlxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xuICAgIGNvbnN0IHN0YXJ0VGltZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB0aW1lb3V0SXNOdWxsID0gKHRpbWVvdXQgPT0gbnVsbCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXG4gICAgLy8gcmVzdGFydCB0aGUgdGltZW91dC4gIFRoZSB0aW1lb3V0IGRvZXMgTk9UIHJlc2V0XG4gICAgLy8gd2hlbiB0aGUgZHVyYXRpb24gb3IgY2FsbGJhY2sgY2hhbmdlcywgb25seSB0cmlnZ2VySW5kZXguXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aW1lb3V0SXNOdWxsKSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KHN0YWJsZUNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XG4gICAgY29uc3QgZ2V0RWxhcHNlZFRpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKyhuZXcgRGF0ZSgpKSkgLSAoKyhzdGFydFRpbWVSZWYuY3VycmVudCA/PyBuZXcgRGF0ZSgpKSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdldFJlbWFpbmluZ1RpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4geyBnZXRFbGFwc2VkVGltZSwgZ2V0UmVtYWluaW5nVGltZSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRpbWVvdXQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xuLyoqXG4gKiBXaGVuIHVzZWQgaW4gdGFuZGVtIHdpdGggYHVzZVJvdmluZ1RhYkluZGV4YCwgYWxsb3dzIGNvbnRyb2wgb2ZcbiAqIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHRoZSBhcnJvdyBrZXlzLlxuICpcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgaW5kZXgsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvUHJldiwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlQXJyb3dLZXlzLCBkaXNhYmxlSG9tZUVuZEtleXMgfSkge1xuICAgIG5hdmlnYXRpb25EaXJlY3Rpb24gPz89IFwiZWl0aGVyXCI7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaW5kZXgsIGNoaWxkQ291bnQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3RdKTtcbiAgICAvLyBUaGVzZSBhbGxvdyB1cyB0byBtYW5pcHVsYXRlIHdoYXQgb3VyIGN1cnJlbnQgdGFiYmFibGUgY2hpbGQgaXMuXG4gICAgLypjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpID49IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxPyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSA6ICsraSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA8IDA/IDAgOiAtLWkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoLTEpOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7Ki9cbiAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmRleCk7XG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgdXNlTG9naWNhbERpcmVjdGlvblByb3BzIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKHt9KTtcbiAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBsZXQgYWxsb3dzQmxvY2tOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJibG9ja1wiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XG4gICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIHByb3BzKSk7IH0sIFtdKSxcbiAgICB9O1xufVxuLyoqXG4gKiBBbGxvd3MgZm9yIHRoZSBzZWxlY3Rpb24gb2YgYSBtYW5hZ2VkIGNoaWxkIGJ5IHR5cGluZyB0aGUgZ2l2ZW4gdGV4dCBhc3NvY2lhdGVkIHdpdGggaXQuXG4gKlxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcbiAgICAvLyBGb3IgdHlwZWFoZWFkLCBrZWVwIHRyYWNrIG9mIHdoYXQgb3VyIGN1cnJlbnQgXCJzZWFyY2hcIiBzdHJpbmcgaXMgKGlmIHdlIGhhdmUgb25lKVxuICAgIC8vIGFuZCBhbHNvIGNsZWFyIGl0IGV2ZXJ5IDEwMDAgbXMgc2luY2UgdGhlIGxhc3QgdGltZSBpdCBjaGFuZ2VkLlxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cbiAgICAvLyBBbmQsIGZvciB0aGUgdXNlcidzIHNha2UsIGxldCB0aGVtIGtub3cgd2hlbiB0aGVpciB0eXBlYWhlYWQgY2FuJ3QgbWF0Y2ggYW55dGhpbmcgYW55bW9yZVxuICAgIGNvbnN0IFtjdXJyZW50VHlwZWFoZWFkLCBzZXRDdXJyZW50VHlwZWFoZWFkLCBnZXRDdXJyZW50VHlwZWFoZWFkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcbiAgICBjb25zdCBzb3J0ZWRUeXBlYWhlYWRJbmZvID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbaW52YWxpZFR5cGVhaGVhZCwgc2V0SW52YWxpZFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxuICAgIC8vIEVzc2VudGlhbGx5LCB3aGVuIGFjdGl2ZSwgaWdub3JlIGZ1cnRoZXIga2V5cyBcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHdhaXRpbmcgZm9yIGEgQ29tcG9zaXRpb25FbmQgZXZlbnRcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxuICAgIC8vIChidXQgd2l0aGluIHRoZSBzYW1lIHRhc2ssIHdoaWNoLCBUT0RPLCBjb3VsZCBiZSBicm93c2VyLWRlcGVuZGVudCksXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xuICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIobnVsbCk7XG4gICAgICAgIH1cbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcbiAgICBjb25zdCBjb21wYXJhdG9yU2hhcmVkID0gdXNlU3RhYmxlQ2FsbGJhY2soKHNhZmVMaHMsIHNhZmVSaHMpID0+IHtcbiAgICAgICAgbGV0IGNvbXBhcmU7XG4gICAgICAgIC8vIEZvciB0aGUgcHVycG9zZXMgb2YgdHlwZWFoZWFkLCBvbmx5IGNvbXBhcmUgYSBzdHJpbmcgb2YgdGhlIHNhbWUgc2l6ZSBhcyBvdXIgY3VycmVudGx5IHR5cGVkIHN0cmluZy5cbiAgICAgICAgLy8gQnkgbm9ybWFsaXppbmcgdGhlbSBmaXJzdCwgd2UgZW5zdXJlIHRoaXMgYnl0ZS1ieS1ieXRlIGhhbmRsaW5nIG9mIHJhdyBjaGFyYWN0ZXIgZGF0YSB3b3JrcyBvdXQgb2theS5cbiAgICAgICAgc2FmZUxocyA9IHNhZmVMaHMubm9ybWFsaXplKFwiTkZEXCIpO1xuICAgICAgICBzYWZlUmhzID0gc2FmZVJocy5ub3JtYWxpemUoXCJORkRcIik7XG4gICAgICAgIGlmIChjb2xsYXRvcilcbiAgICAgICAgICAgIGNvbXBhcmUgPSBjb2xsYXRvci5jb21wYXJlKHNhZmVMaHMsIHNhZmVSaHMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb21wYXJlID0gc2FmZUxocy50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoc2FmZVJocy50b0xvd2VyQ2FzZSgpID8/IFwiXCIpO1xuICAgICAgICByZXR1cm4gY29tcGFyZTtcbiAgICB9KTtcbiAgICBjb25zdCBpbnNlcnRpbmdDb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XG4gICAgICAgIGxldCBjb21wYXJlO1xuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJhdG9yU2hhcmVkKGxocywgcmhzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaHMgLSByaHM7XG4gICAgfSk7XG4gICAgY29uc3QgdHlwZWFoZWFkQ29tcGFyYXRvciA9IHVzZVN0YWJsZUNhbGxiYWNrKChsaHMsIHJocykgPT4ge1xuICAgICAgICBsZXQgY29tcGFyZTtcbiAgICAgICAgaWYgKHR5cGVvZiBsaHMgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHJocy50ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvLyBEdXJpbmcgdHlwZWFoZWFkLCBhbGwgc3RyaW5ncyBsb25nZXIgdGhhbiBvdXJzIHNob3VsZCBiZSB0cnVuY2F0ZWRcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhleSdyZSBhbGwgY29uc2lkZXJlZCBlcXVhbGx5IGJ5IHRoYXQgcG9pbnQuXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyYXRvclNoYXJlZChsaHMsIHJocy50ZXh0LnN1YnN0cmluZygwLCBsaHMubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxocyAtIHJocztcbiAgICB9KTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25TdGFydCA9IChlKSA9PiB7IHNldEltZUFjdGl2ZSh0cnVlKTsgfTtcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvbkVuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihlLmRhdGEpO1xuICAgICAgICAgICAgc2V0SW1lQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZUFjdGl2ZSA9IGdldEltZUFjdGl2ZSgpO1xuICAgICAgICAgICAgbGV0IGtleSA9IGUua2V5O1xuICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSAmJiBlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IHNwbGl0IFVURi0xNiBzdXJyb2dhdGVzLlxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlYWhlYWQodCA9PiB0ID09PSBudWxsID8gbnVsbCA6IFsuLi50XS5yZXZlcnNlKCkuc2xpY2UoMSkucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBrZXkgcHJvcGVydHkgcmVwcmVzZW50cyB0aGUgdHlwZWQgY2hhcmFjdGVyIE9SIHRoZSBcIm5hbWVkIGtleSBhdHRyaWJ1dGVcIiBvZiB0aGUga2V5IHByZXNzZWQuXG4gICAgICAgICAgICAvLyBUaGVyZSdzIG5vIGRlZmluaXRlIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlLCBidXQgZm9yIGFsbCBpbnRlbnRzIGFuZCBwdXJwb3Nlc1xuICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG5vIG9uZS1jaGFyYWN0ZXIgbmFtZXMsIGFuZCB0aGVyZSBhcmUgbm8gbm9uLUFTQ0lJLWFscGhhIG5hbWVzLlxuICAgICAgICAgICAgLy8gVGh1cywgYW55IG9uZS1jaGFyYWN0ZXIgb3Igbm9uLUFTQ0lJIHZhbHVlIGZvciBga2V5YCBpcyAqYWxtb3N0IGNlcnRhaW5seSogYSB0eXBlZCBjaGFyYWN0ZXIuXG4gICAgICAgICAgICBjb25zdCBpc0NoYXJhY3RlcktleSA9IChrZXkubGVuZ3RoID09PSAxIHx8ICEvXltBLVphLXpdLy50ZXN0KGtleSkpO1xuICAgICAgICAgICAgaWYgKGlzQ2hhcmFjdGVyS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcIiBcIiAmJiAoZ2V0Q3VycmVudFR5cGVhaGVhZCgpID8/IFwiXCIpLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBiZWNhdXNlIGEgc3BhY2ViYXIgY2FuJ3QgZXZlciBcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhdGUgYSB0eXBlYWhlYWQsIG9ubHkgY29udGludWUgb25lLlxuICAgICAgICAgICAgICAgICAgICAvLyAoU3BlY2lmaWNhbGx5LCBsZXQgdGhlIGV2ZW50IGNvbnRpbnVlIHByb3BhZ2F0aW9uIGluIHRoaXMgY2FzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogV29uJ3QgYmUgdHJ1ZSBmb3IgdGhlIGZpcnN0IGtleWRvd25cbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gYmVmb3JlIHVzZUxheW91dEVmZmVjdCBpcyBjYWxsZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWN0dWFsbHkgYXBwbHkgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25Db21wb3NpdGlvblN0YXJ0LCBvbkNvbXBvc2l0aW9uRW5kLCB9LCBwcm9wcyk7XG4gICAgfSwgW10pO1xuICAgIC8vIEhhbmRsZSBjaGFuZ2VzIGluIHR5cGVhaGVhZCB0aGF0IGNhdXNlIGNoYW5nZXMgdG8gdGhlIHRhYmJhYmxlIGluZGV4XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlYWhlYWQgJiYgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNvcnRlZFR5cGVhaGVhZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgdHlwZWFoZWFkQ29tcGFyYXRvcik7XG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHVzZXIgaGFzIHR5cGVkIGFuIGVudHJ5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIC8vIChvciBtb3JlIHNwZWNpZmljYWxseSBcImZvciB3aGljaCB0aGVyZSBpcyBubyBlbnRyeSB0aGF0IHN0YXJ0cyB3aXRoIHRoYXQgaW5wdXRcIilcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIFdlIGtub3cgcm91Z2hseSB3aGVyZSwgaW4gdGhlIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzLCBvdXIgbmV4dCB0eXBlYWhlYWQgbG9jYXRpb24gaXMuXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgIFRvIGNvbnZlcnQgb3VyIHNvcnRlZCBpbmRleCB0byB0aGUgdW5zb3J0ZWQgaW5kZXggd2UgbmVlZCwgd2UgaGF2ZSB0byBmaW5kIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCB0aGF0IG1hdGNoZXMgdXMgKmFuZCogKGlmIGFueSBzdWNoIGV4aXN0KSBpcyAqYWZ0ZXIqIG91ciBjdXJyZW50IHNlbGVjdGlvbi5cblxuICAgICAgICAgICAgICAgICAgSW4gb3RoZXIgd29yZHMsIHRoZSBvbmx5IHdheSB0eXBlYWhlYWQgbW92ZXMgYmFja3dhcmRzIHJlbGF0aXZlIHRvIG91ciBjdXJyZW50XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbiBpcyBpZiB0aGUgb25seSBvdGhlciBvcHRpb24gaXMgYmVoaW5kIHVzLlxuXG4gICAgICAgICAgICAgICAgICBJdCdzIG5vdCBzcGVjaWZpZWQgaW4gV0FJLUFSSUEgd2hhdCB0byBkbyBpbiB0aGF0IGNhc2UuICBJIHN1cHBvc2Ugd3JhcCBiYWNrIHRvIHRoZSBzdGFydD9cbiAgICAgICAgICAgICAgICAgIFRob3VnaCB0aGVyZSdzIGFsc28gYSBjYXNlIGZvciBqdXN0IGdvaW5nIHVwd2FyZHMgdG8gdGhlIG5lYXJlc3QgdG8gcHJldmVudCBqdW1waW5lc3MuXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxuICAgICAgICAgICAgICAgICAgSSBkdW5uby4gR29pbmcgYmFjayB0byB0aGUgc3RhcnQgaXMgdGhlIHNpbXBsaXN0IHRob3VnaC5cblxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIHNjYW4gYmFja3dhcmRzIGFuZCBmb3J3YXJkcyB0aHJvdWdoIGFsbCBhZGphY2VudCBlbnRyaWVzIHRoYXQgYWxzbyBjb21wYXJlIGVxdWFsbHkgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgd2UgY2FuIGZpbmQgdGhlIG9uZSB3aG9zZSBgdW5zb3J0ZWRJbmRleGAgaXMgdGhlIGxvd2VzdCBhbW9uZ3N0IGFsbCBvdGhlciBlcXVhbCBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxuXG4gICAgICAgICAgICAgICAgICBUT0RPOiBUaGUgYmluYXJ5IHNlYXJjaCBzdGFydHMgdGhpcyBvZmYgd2l0aCBhIHNvbGlkIE8obG9nIG4pLCBidXQgb25lLWNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcbiAgICAgICAgICAgICAgICAgIE8obipsb2cgbikuIFRoaXMgaXMgYW5ub3lpbmcgYnV0IHByb2JhYmx5IG5vdCBlYXNpbHkgc29sdmFibGU/IFRoZXJlIGNvdWxkIGJlIGFuXG4gICAgICAgICAgICAgICAgICBleGNlcHRpb24gZm9yIG9uZS1jaGFyYWN0ZXIgc3RyaW5ncywgYnV0IHRoYXQncyBqdXN0IGtpY2tpbmcgdGhlIGNhbiBkb3duXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGFyZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGNhbmRpZGF0ZXMnIHBvc2l0aW9ucyBpbiBib3RoIG91ciBzb3J0ZWQgYXJyYXkgYW5kIHRoZSB1bnNvcnRlZCBET00uXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIHR3byBhcmUgb25seSBzZXQgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIGFoZWFkIG9mIHVzLCBidXQgdGhlIHByaW5jaXBsZSdzIHRoZSBzYW1lIG90aGVyd2lzZVxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJlc3RGaXQgPSAodSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4QWxsID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0KSAmJiB1ID4gKGdldEluZGV4KCkgPz8gLUluZmluaXR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwICYmIHR5cGVhaGVhZENvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJlc3RGaXQoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgdHlwZWFoZWFkQ29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhOZXh0XS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhBbGxdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRUeXBlYWhlYWRdKTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyB0ZXh0LCAuLi5pIH0pID0+IHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGVyZSB0byBpbnNlcnQgdGhpcyBpdGVtLlxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgYWxsIGluZGV4IHZhbHVlcyBzaG91bGQgYmUgdW5pcXVlLCB0aGUgcmV0dXJuZWQgc29ydGVkSW5kZXhcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIHJlZmVyIHRvIGEgbmV3IGxvY2F0aW9uIChpLmUuIGJlIG5lZ2F0aXZlKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBpbnNlcnRpbmdDb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA8IDAgfHwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W3NvcnRlZEluZGV4XS50ZXh0ID09IHRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZSgtc29ydGVkSW5kZXggLSAxLCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdW5tb3VudGluZywgZmluZCB3aGVyZSB3ZSB3ZXJlIGFuZCByZW1vdmUgb3Vyc2VsdmVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBBZ2Fpbiwgd2Ugc2hvdWxkIGFsd2F5cyBmaW5kIG91cnNlbHZlcyBiZWNhdXNlIHRoZXJlIHNob3VsZCBiZSBubyBkdXBsaWNhdGUgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgdW5pcXVlLlxuICAgICAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBpbnNlcnRpbmdDb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPj0gMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0ZXh0XSk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLFxuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgfTtcbn1cbi8qKlxuICogWW91ciB1c3VhbCBiaW5hcnkgc2VhcmNoIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEl0J3MgdXNlZCBoZXJlIHRvIHF1aWNrbHkgZmluZCBhIGdvb2Qgc3BvdCB0byBzdGFydCBzZWFyY2hpbmcgZm9yIG91ciBuZXh0IHR5cGVhaGVhZCBjYW5kaWRhdGUuXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaCB0aHJvdWdoXG4gKiBAcGFyYW0gd2FudGVkIFRoZSB2YWx1ZSB5b3UnZCBsaWtlIHRvIGZpbmRcbiAqIEBwYXJhbSBjb21wYXJhdG9yIENvbXBhcmVzIGB3YW50ZWRgIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgaW4gYGFycmF5YFxuICogQHJldHVybnMgQSBub24tbmVnYXRpdmUgdmFsdWUgaWYgYHdhbnRlZGAgd2FzIGZvdW5kLCBhbmQgYSBuZWdhdGl2ZSBudW1iZXIgaWYgbm90LlxuICogVGhlIGFic29sdXRlIHZhbHVlIG9mIHRoaXMgbnVtYmVyLCBtaW51cyBvbmUsIGlzIHdoZXJlIGB3YW50ZWRgICp3b3VsZCogYmUgZm91bmQgaWYgaXQgKndhcyogaW4gYGFycmF5YFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCB3YW50ZWQsIGNvbXBhcmF0b3IpIHtcbiAgICB2YXIgZmlyc3RJbmRleCA9IDA7XG4gICAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGZpcnN0SW5kZXggPD0gbGFzdEluZGV4KSB7XG4gICAgICAgIHZhciB0ZXN0SW5kZXggPSAobGFzdEluZGV4ICsgZmlyc3RJbmRleCkgPj4gMTtcbiAgICAgICAgdmFyIGNvbXBhcmlzb25SZXN1bHQgPSBjb21wYXJhdG9yKHdhbnRlZCwgYXJyYXlbdGVzdEluZGV4XSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uUmVzdWx0ID4gMCkge1xuICAgICAgICAgICAgZmlyc3RJbmRleCA9IHRlc3RJbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyaXNvblJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHRlc3RJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtZmlyc3RJbmRleCAtIDE7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cbiAqIGNoaWxkIGNvbXBvbmVudHMgb25jZSB0aGV5IGhhdmUgcmVuZGVyZWQuXG4gKlxuICogVGhpcyBob29rIGlzIHNsaWdodGx5IG1vcmUgY29tcGxpY2F0ZWQgaW4gdGhhdCBpdCByZXR1cm5zIGJvdGggYVxuICogcHJvcC1tb2RpZnlpbmcgaG9vaywgYnV0IGFsc28gYSBob29rIHRoYXQgZWFjaCBjaGlsZCB3aWxsIG5lZWRcbiAqIHRvIHVzZTogYHVzZU1hbmFnZWRDaGlsZGAuICBJdCdzIHN0YWJsZSBhY3Jvc3MgcmVuZGVycywgc28ganVzdFxuICogdG9zcyBpdCBpbnRvIGEgYENvbnRleHRgIHNvIHRoZSBjaGlsZHJlbiBjYW4gaGF2ZSBhY2Nlc3MgdG8gaXQuXG4gKiBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyB0aGUgY2hpbGQgd2l0aCB0aGUgcGFyZW50IGFuZCBwcm92aWRlc1xuICogaXQgd2l0aCBhbnkgcmVxdWVzdGVkIGluZm9ybWF0aW9uLCBidXQgZG9lc24ndCBkbyBhbnl0aGluZyBlbHNlXG4gKiB1bnRpbCBpdCB1bm1vdW50cyBhbmQgcmV0cmFjdHMgdGhhdCBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkTWFuYWdlcigpIHtcbiAgICAvLyBUaGlzIGlzIGJsaW5kbHkgdXBkYXRlZCBhbnkgdGltZSBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50cyBpdHNlbGYuXG4gICAgLy8gVXNlZCB0byBtYWtlIHN1cmUgdGhhdCBhbnkgdGltZSB0aGUgYXJyYXkgb2YgbWFuYWdlZCBjaGlsZHJlbiB1cGRhdGVzLFxuICAgIC8vIHdlIGFsc28gcmUtcmVuZGVyLlxuICAgIGNvbnN0IFtjaGlsZFVwZGF0ZUluZGV4LCBzZXRDaGlsZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuTW91bnRlZCwgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuVW5vdW50ZWQsIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgZ2V0VG90YWxDaGlsZHJlblVub3VudGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCA9IHRvdGFsQ2hpbGRyZW5Nb3VudGVkIC0gdG90YWxDaGlsZHJlblVub3VudGVkO1xuICAgIGNvbnN0IG1hbmFnZWRDaGlsZHJlbiA9IHVzZVJlZihbXSAvKiogVE9ETzogQW55IHByb2JsZW1zIGNhdXNlZCBieSB1c2luZyBhbiBhcnJheSB3aGVuIGl0IHNob3VsZCBiZSBhbiBvYmplY3Q/ICovKTtcbiAgICBjb25zdCBtb3VudGVkQ2hpbGRyZW4gPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IG1vdW50T3JkZXIgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBpbmRpY2VzQnlFbGVtZW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gICAgY29uc3QgZGVsZXRlZEluZGljZXMgPSB1c2VSZWYobmV3IFNldCgpKTtcbiAgICAvLyBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgaW5kaWNlcyB0aGF0IGhhdmUgXCJvdmVyLW1vdW50ZWRcIiBhbmQgYnkgaG93IG11Y2guXG4gICAgLy8gV2UgbmVlZCB0aGlzIHNvIHRoYXQgd2UgZG9uJ3QgZXJhc2Ugc2F2ZWQgaW5mb3JtYXRpb24gd2hlbiBhIGNvbXBvbmVudFxuICAgIC8vIFwib3Zlcm1vdW50c1wiIG92ZXIgYW5vdGhlciB3aGljaCB0aGVuLCBjb3JyZWN0bHksIHN3aXRjaGVzICppdHNlbGYqIHRvIHNvbWV0aGluZyBlbHNlLlxuICAgIC8vIEluIGdlbmVyYWwsIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIHdoZW4gY29tcG9uZW50cyBhcmUgc3dhcHBpbmcgYmV0d2VlbiBpbmRpY2VzLlxuICAgIC8vIEJ5IHRoZSB0aW1lIHRoZXkncmUgZG9uZSwgdGhpcyBtYXAgc2hvdWxkIGJlIGFsbCAwcyBhZ2FpbiwgYXQgd2hpY2ggcG9pbnRcbiAgICAvLyBpdCdzIG9rYXkgdG8gYWN0dWFsbHkgcnVuIHRoZSB1bm1vdW50IGNvZGUuXG4gICAgLy8gXG4gICAgLy8gVE9ETzogdGhyb3cgYSBjb25zb2xlLmFzc2VydCBzb21ld2hlcmUgdG8gbWFrZSB1cCBmb3IgdGhlIGxvc3QgXG4gICAgLy8gXCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gb3ZlcndyaXRlIHRoaXMgY2hpbGQncyBpbmRleCFcIiBhc3NlcnRpb24uXG4gICAgLy8gTmFtZWx5LCBpcyB0aGlzIG1hcCBhbGwgMHMgd2hlbiB0aGUgcGFyZW50IGVsZW1lbnQgcmUtcmVuZGVycz8gXG4gICAgLy8gUHJvYmFibHkgbm90IGJlY2F1c2Ugb2Ygc2V0Q2hpbGRVcGRhdGVJbmRleFxuICAgIGNvbnN0IG92ZXJtb3VudENvdW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gICAgY29uc3QgZ2V0TW91bnRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyByZXR1cm4gbW91bnRPcmRlci5jdXJyZW50LmdldChpbmRleCk7IH0sIFtdKTtcbiAgICBjb25zdCB1c2VNYW5hZ2VkQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuc2V0KGVsZW1lbnQsIGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZEluZGljZXMuY3VycmVudC5hZGQoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmZvLmluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtdKSB9KTtcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKCk7XG4gICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgIG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50W2luZGV4XSA9IGluZm87XG4gICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCh0ID0+ICsrdCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5kZWxldGUoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQodCA9PiArK3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW2luZm8uaW5kZXhdKTtcbiAgICAgICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZSBnZW5lcmFsbHkuXG4gICAgICAgIC8vICpEb24ndCByZS1yZW5kZXIqLCBvdGhlcndpc2Ugd2UnZCBiZSBzdHVjayBpbiBhblxuICAgICAgICAvLyBpbmZpbml0ZSBsb29wIGV2ZXJ5IHRpbWUgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIGlzIHBhc3NlZC5cbiAgICAgICAgLy8gSXQgY29tZXMgaW4gZnJvbSB0aGUgcHJvcHMgc28gdGhlIGNoaWxkIHdhcyBhbHJlYWR5IHVwZGF0ZWQgYnkgaXQgLS1cbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IHRvIHJlLXJlbmRlciBldmVyeSBzaW5nbGUgY2hpbGQgYW55IHRpbWVcbiAgICAgICAgLy8gXCJvbkNsaWNrXCIgdXBkYXRlcyBvciB3aGF0ZXZlci4gIFRoZSByZWxldmFudCBjaGlsZCBhbHJlYWR5IGtub3dzLFxuICAgICAgICAvLyBhbmQgdGhhdCdzIHdoYXQgbWF0dGVycy5cbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoKV0pO1xuICAgICAgICByZXR1cm4geyBnZXRFbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1hbmFnZWRDaGlsZCxcbiAgICAgICAgY2hpbGRDb3VudDogY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkLFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50LFxuICAgICAgICBtb3VudGVkQ2hpbGRyZW46IG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50LFxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50OiBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQsXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Nb3VudGVkLFxuICAgICAgICB0b3RhbENoaWxkcmVuVW5vdW50ZWQsXG4gICAgICAgIGdldE1vdW50SW5kZXgsXG4gICAgICAgIGRlbGV0ZWRJbmRpY2VzOiBkZWxldGVkSW5kaWNlcy5jdXJyZW50XG4gICAgfTtcbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZXR0aW5nIGNoaWxkcmVuIGtub3cgd2hlbiB0aGV5IGFyZSBvciBhcmUgbm90IHRoZVxuICogY3VycmVudCBzZWxlY3RlZC9leHBhbmRlZC9mb2N1c2VkL3doYXRldmVyIGNoaWxkLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB3aGVuIGNoaWxkcmVuIGFyZSBtb3VudGVkICYgdW5tb3VudGVkIGFuZCBzdWNoLlxuICpcbiAqIFdoaWxlIGl0IHdpbGwgYmUgY2FsbGVkIG9uY2UgZm9yIGV2ZXJ5IGNoaWxkIG9uIG1vdW50LCBhZnRlciB0aGF0IHNldEZsYWdcbiAqIGlzIGd1YXJhbnRlZWQgdG8gb25seSBiZSBjYWxsZWQgb25jZSBvbiBhY3RpdmF0aW9uIGFuZCBvbmNlIG9uIGRlYWN0aXZhdGlvbixcbiAqIHNvIGl0J3MgZ2VuZXJhbGx5IHNhZmUgdG8gcHV0IHNpZGUgZWZmZWN0cyBpbnNpZGUgaWYgbmVjZXNzYXJ5LlxuICogSXQncyBhbHNvIHNhZmUgdG8gbWFrZSBpdCBub24tc3RhYmxlLlxuICpcbiAqIEBwYXJhbSBhY3RpdmF0ZWRJbmRleCBXaGF0IGluZGV4IHRoZSBjdXJyZW50IHNlbGVjdGVkIChldGMuKSBjaGlsZCBpc1xuICogQHBhcmFtIGxlbmd0aCBIb3cgbWFueSBjaGlsZHJlbiBleGlzdCAoYXMgbWFuYWdlZENoaWxkcmVuLmxlbmd0aClcbiAqIEBwYXJhbSBzZXRGbGFnIEEgZnVuY3Rpb24gdGhhdCBwcm9iYWJseSBsb29rcyBsaWtlIChpLCBmbGFnKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0QWN0aXZlKGZsYWcpXG4gKiBAcGFyYW0gdXNlRWZmZWN0IFdoaWNoIHZlcnNpb24gb2YgdXNlRWZmZWN0IHRvIHVzZS4gRGVmYXVsdCBpcyBgdXNlTGF5b3V0RWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4LCBjbG9zZXN0Rml0LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldENoaWxkRmxhZywgZ2V0Q2hpbGRGbGFnLCB1c2VFZmZlY3QgfSkge1xuICAgIHVzZUVmZmVjdCA/Pz0gdXNlTGF5b3V0RWZmZWN0O1xuICAgIGlmIChjbG9zZXN0Rml0KVxuICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiB8fCBhY3RpdmF0ZWRJbmRleCA9PSBudWxsKTtcbiAgICAvLyBXaGVuZXZlciB3ZSByZS1yZW5kZXIsIG1ha2Ugc3VyZSB0aGF0IGFueSBjaGlsZHJlbiB0aGF0IGhhdmUgbW91bnRlZFxuICAgIC8vIGhhdmUgdGhlaXIgZmxhZ3MgcHJvcGVybHkgc2V0LiAgV2Uga25vdyBpdCdzIHVuc2V0IGlmIGl0IHdhcyBudWxsLFxuICAgIC8vIGluIHdoaWNoIGNhc2Ugd2UganVzdCBzZXQgaXQgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICAvL1xuICAgIC8vIEFuZCwgSSBtZWFuLCBhcyBsb25nIGFzIHdlJ3JlIGFscmVhZHkgaXRlcmF0aW5nIHRocm91Z2ggZXZlcnkgY2hpbGRcbiAgICAvLyBvbiBldmVyeSByZW5kZXIgdG8gY2hlY2sgZm9yIG5ld2x5IG1vdW50ZWQgY2hpbGRyZW4sIG1pZ2h0IGFzIHdlbGxcbiAgICAvLyBqdXN0IGhhbmRsZSBjaGFuZ2VkIGluIHRoZSBhY3RpdmF0ZWRJbmRleCBoZXJlIHRvby5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBXZSBoYXZlIGxpbWl0ZWQgaW5mb3JtYXRpb24gYWJvdXQgd2hlbiBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50c1xuICAgICAgICAvLyBhbmQgc28gd2UgZG9uJ3Qga25vdyB3aGVyZSB0byBsb29rIGZvciBhbnkgbnVsbCBlbnRyaWVzIHRoYXQgbmVlZCBjaGFuZ2luZy5cbiAgICAgICAgLy8gV2Uga25vdyB3aGVuIGFjdGl2YXRlZEluZGV4IGNoYW5nZXMgYW5kIHdoYXQgaXQgd2FzLCBidXQgbm90IG11Y2ggZWxzZS5cbiAgICAgICAgLy8gTG9vcGluZyBvdmVyIGV2ZXJ5IGNoaWxkICp3b3JrcyosIGFuZCBpdCdzIG5vdCBhbiBleHBlbnNpdmUgbG9vcCBieSBhbnkgbWVhbnMsXG4gICAgICAgIC8vIGJ1dCwgbGlrZSwgZXVnaC5cbiAgICAgICAgLy8gQWxzbywgYmVmb3JlIHdlIGRvIGFueXRoaW5nLCBzZWUgaWYgd2UgbmVlZCB0byBcImNvcnJlY3RcIiBhY3RpdmF0ZWRJbmRleC5cbiAgICAgICAgLy8gSXQgY291bGQgYmUgcG9pbnRpbmcgdG8gYSBjaGlsZCB0aGF0IGRvZXNuJ3QgZXhpc3QsIGFuZCBpZiBjbG9zZXN0Rml0IGlzIGdpdmVuLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGFkanVzdCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBhIHZhbGlkIGNoaWxkLlxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2YXRlZEluZGV4ID09IFwibnVtYmVyXCIgJiYgQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pICYmIG1hbmFnZWRDaGlsZHJlblthY3RpdmF0ZWRJbmRleF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gT2ggZGVhci4gQXJlIHdlIGFjdGl2ZWx5IGNvcnJlY3RpbmcgdGhpcz9cbiAgICAgICAgICAgIGlmIChjbG9zZXN0Rml0KSB7XG4gICAgICAgICAgICAgICAgLy8gT2ggZGVhci5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggdXAgYW5kIGRvd24gdGhlIGxpc3Qgb2YgY2hpbGRyZW4gZm9yIGFueSB0aGF0IGFjdHVhbGx5IGV4aXN0LlxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hIaWdoID0gYWN0aXZhdGVkSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hMb3cgPSBhY3RpdmF0ZWRJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSA9PSBudWxsKSB8fCAoc2VhcmNoSGlnaCA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaEhpZ2hdID09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICsrc2VhcmNoSGlnaDtcbiAgICAgICAgICAgICAgICAgICAgLS1zZWFyY2hMb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoTG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA9IHNlYXJjaEhpZ2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIGRvbmUgdGhhdCwgaWYgYW55IHZhbGlkIGNoaWxkcmVuIGV4aXN0LCB3ZSd2ZSByZXNldCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBpdCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIC8vIE5vdyB3ZSdsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGZvciBsb29wIHNldCBhbmQgdW5zZXQgb3VyIGZsYWdzIGJhc2VkIG9uIHRoaXMgXCJjb3JyZWN0ZWRcIiB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGNvcnJlY3QgaXQgb3Igc2F2ZSBpdCBhbnl3aGVyZSBiZWNhdXNlIHdlJ2QgdmVyeSBtdWNoIGxpa2UgdG8gcmV0dXJuIHRvIGl0XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNoaWxkIHJlbW91bnRzIGl0c2VsZi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobWFuYWdlZENoaWxkcmVuKS5mb3JFYWNoKChbaSwgaW5mb10pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkQmVTZXQgPSAoaSA9PSBhY3RpdmF0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKGdldENoaWxkRmxhZyhpKSAhPSBzaG91bGRCZVNldCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZEZsYWcoaSwgc2hvdWxkQmVTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hpbGQtbWFuYWdlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKiBJbXBsZW1lbnRzIGEgcm92aW5nIHRhYmluZGV4IHN5c3RlbSB3aGVyZSBvbmx5IG9uZSBcImZvY3VzYWJsZVwiXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXG4gKiBvZiB0aG9zZSBlbGVtZW50cyByZWNlaXZlcyBmb2N1cyBpcyBkZXRlcm1pbmVkIGJ5IHlvdSwgYnV0IGl0J3NcbiAqIHJlY29tbWVuZGVkIHRvIG9mZmxvYWQgdGhhdCBsb2dpYyB0aGVuIHRvIGFub3RoZXIgaG9vaywgbGlrZVxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXG4gKiBlbGVtZW50IHdpdGggdGhlIGFycm93IGtleXMsIGB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uYCwgd2hpY2hcbiAqIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0eXBlYWhlYWQsIG9yXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgY2hpbGQgaG9vayByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgdXNlZFxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXG4gKiBwcm9wLW1vZGlmeWluZyBob29rICp0aGF0KiBob29rIHJldHVybnMgc2hvdWxkIHRoZW4gYmUgdXNlZFxuICogb24gdGhlIGNoaWxkJ3MgZWxlbWVudCwgYXMgd2VsbCBhcyBhbnkgb3RoZXIgZWxlbWVudHMgeW91J2QgbGlrZVxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxuICpcbiAqIGBzaG91bGRGb2N1c09uQ2hhbmdlYCBzaG91bGQgcmV0dXJuIHRydWUgaWYgZm9jdXMgaXNcbiAqIGNvbnRhaW5lZCB3aXRoaW4gd2hhdGV2ZXIgZWxlbWVudCBjb250YWlucyB0aGUgcm92aW5nIHRhYiBpbmRleC5cbiAqIEdlbmVyYWxseSBhcyBzaW1wbGUgYXMgdGhlIGZvbGxvd2luZzpcbiAqIGBgYFxuICogY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXM8UGFyZW50RWxlbWVudD4oeyBzZXRGb2N1c2VkSW5uZXIgfSk7XG4gKiBjb25zdCBmb2N1c09uQ2hhbmdlID0gKGZvY3VzZWRJbm5lciAhPSBmYWxzZSk7XG4gKiBgYGBcbiAqIEl0J3Mgbm90IGluY2x1ZGVkIGhlcmUgYmVjYXVzZSBgdXNlUm92aW5nVGFiSW5kZXhgIGRvZXNuJ3Qga25vd1xuICogYW55dGhpbmcgYWJvdXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LCBvbmx5IGNoaWxkcmVuIGVsZW1lbnRzLlxuICogQW5kIGp1c3QgYXMgd2VsbCEgQ2hpbGRyZW4gc2hvdWxkIGJlIGFsbG93ZWQgYXQgdGhlIHJvb3QsXG4gKiByZWdhcmRsZXNzIG9mIGlmIGl0J3MgdGhlIHdob2xlIGFwcCBvciBqdXN0IGEgZ2l2ZW4gY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlOiBmb2MsIHRhYmJhYmxlSW5kZXggfSkge1xuICAgIGNvbnN0IGdldFNob3VsZEZvY3VzT25DaGFuZ2UgPSB1c2VTdGFibGVHZXR0ZXIoZm9jKTtcbiAgICBjb25zdCBnZXRUYWJiYWJsZUluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHRhYmJhYmxlSW5kZXgpO1xuICAgIGNvbnN0IHByZXZUYWJiYWJsZSA9IHVzZVJlZigtSW5maW5pdHkpO1xuICAgIC8vIENhbGwgdGhlIGhvb2sgdGhhdCBhbGxvd3MgdXMgdG8gY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHdobyBwcm92aWRlIGl0XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGNoaWxkQ291bnQsIHVzZU1hbmFnZWRDaGlsZCwgaW5kaWNlc0J5RWxlbWVudCwgLi4ucmVzdCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsXG4gICAgLy8gbm90aWZ5IHRoZSBwcmV2aW91cyBjaGlsZCB0aGF0IGl0J3Mgbm8gbG9uZ2VyIHRhYmJhYmxlLFxuICAgIC8vIGFuZCBub3RpZnkgdGhlIG5leHQgY2hpbGQgdGhhdCBpcyBhbGxvd2VkIHRvIGJlIHRhYmJlZCB0by5cbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogdGFiYmFibGVJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBjbG9zZXN0Rml0OiB0cnVlLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpbmRleCwgdGFiYmFibGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LnNldFRhYmJhYmxlKHRhYmJhYmxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaW5kZXgpID0+IChtYW5hZ2VkQ2hpbGRyZW5baW5kZXhdPy5nZXRUYWJiYWJsZSgpID8/IG51bGwpXG4gICAgfSk7XG4gICAgY29uc3QgZm9jdXNTZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodGFiYmFibGVJbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUpO1xuICAgIH0sIFt0YWJiYWJsZUluZGV4XSk7XG4gICAgY29uc3QgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtycmFmSW5kZXgsIHNldFJyYWZJbmRleF0gPSB1c2VTdGF0ZSgxKTtcbiAgICAgICAgY29uc3QgcmVyZW5kZXJBbmRGb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0UnJhZkluZGV4KGkgPT4gKytpKTsgfSwgW10pO1xuICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlLCBnZXRUYWJiYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgbGV0IG5ld0luZm8gPSB7XG4gICAgICAgICAgICAuLi5pbmZvLFxuICAgICAgICAgICAgcmVyZW5kZXJBbmRGb2N1cyxcbiAgICAgICAgICAgIHNldFRhYmJhYmxlOiB1c2VDYWxsYmFjaygodGFiYmFibGUpID0+IHsgc2V0VGFiYmFibGUodGFiYmFibGUpOyB9LCBbXSksXG4gICAgICAgICAgICBnZXRUYWJiYWJsZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKHRhYmJhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkRm9jdXNPbkNoYW5nZSA9IGdldFNob3VsZEZvY3VzT25DaGFuZ2UoKSgpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRGb2N1c09uQ2hhbmdlICYmIFwiZm9jdXNcIiBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlLCBycmFmSW5kZXhdKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4IH0sIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyh7IHRhYkluZGV4IH0pLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLFxuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXG4gICAgICAgICAgICB0YWJiYWJsZVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VNYW5hZ2VkQ2hpbGRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLFxuICAgICAgICBjaGlsZENvdW50LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXG4gICAgICAgIGZvY3VzQ3VycmVudDogdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZvciB3aGF0ZXZlciByZWFzb24sIHRoZSBwcmV2aW91c2x5IHRhYmJhYmxlIGNoaWxkXG4gICAgICAgICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIHRhYmJhYmxlIHdpdGhvdXQgdXMga25vd2luZyBhYm91dCBpdC5cbiAgICAgICAgICAgICAgICAvLyBNYXliZSBpdCB1bm1vdW50ZWQ/XG4gICAgICAgICAgICAgICAgLy8gRWl0aGVyIHdheSwgdHJ5IHRvIGZpbmQgdGhlIG5ld2x5LXNlbGVjdGVkIGNoaWxkLlxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGxldCBpID0gZ2V0VGFiYmFibGVJbmRleCgpID8/IDA7XG4gICAgICAgICAgICAgICAgbGV0IGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICArK2o7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdLmdldFRhYmJhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pLFxuICAgICAgICAuLi5yZXN0XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmcsIGdldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbGFzdERyb3BFZmZlY3QsIHNldExhc3REcm9wRWZmZWN0LCBnZXRMYXN0RHJvcEVmZmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAgICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAoZWZmZWN0QWxsb3dlZCA/PyBcImFsbFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0ltYWdlKVxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0ID8/IDAsIGRyYWdJbWFnZVlPZmZzZXQgPz8gMCk7XG4gICAgICAgICAgICAgICAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttaW1lVHlwZSwgZGF0YV0gb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKG1pbWVUeXBlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uRHJhZ0VuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgb25EcmFnU3RhcnQsXG4gICAgICAgICAgICBvbkRyYWdFbmQsXG4gICAgICAgICAgICByZWZcbiAgICAgICAgfSwgcCk7XG4gICAgfSwgW2VmZmVjdEFsbG93ZWQsIGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCwgZHJhZ0ltYWdlWU9mZnNldCwgLi4uT2JqZWN0LmVudHJpZXMoZGF0YSkuZmxhdCgpXSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIGxldCByZXQgPSB7XG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxuICAgICAgICBkcmFnZ2luZyxcbiAgICAgICAgZ2V0RHJhZ2dpbmcsXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cbiAgICAgICAgLy8gVXNlZnVsIGZvciByZW1vdmluZyB0aGUgZWxlbWVudCBhZnRlcndhcmRzIGlmIGl0IHdhcyBcIm1vdmVcIlxuICAgICAgICBsYXN0RHJvcEVmZmVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRlc3RcbiAgICAgICAgICovXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyYWdnYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbjtcbjtcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVGaWxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZmlsZU5hbWU7XG4gICAgZXJyb3JUeXBlO1xuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lLCBiYXNlKSB7XG4gICAgICAgIHN1cGVyKGJhc2U/Lm1lc3NhZ2UgPz8gXCJBbiB1bnNwZWNpZmllZCBlcnJvciBvY2N1cnJlZCByZWFkaW5nIHRoZSBmaWxlLlwiKTtcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xuICAgICAgICB0aGlzLmVycm9yVHlwZSA9IGJhc2U/Lm5hbWU7XG4gICAgfVxufVxuLy9NZXJnZWRQcm9wczxVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEUsIFBpY2s8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIFwib25EcmFnRW50ZXJcIiB8IFwib25EcmFnTGVhdmVcIiB8IFwib25EcmFnT3ZlclwiIHwgXCJvbkRyb3BcIj4+LCBQPjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wcGFibGUoeyBlZmZlY3QgfSkge1xuICAgIGNvbnN0IFtmaWxlc0ZvckNvbnNpZGVyYXRpb24sIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wcGVkRmlsZXMsIHNldERyb3BwZWRGaWxlc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJvcHBlZFN0cmluZ3MsIHNldERyb3BwZWRTdHJpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wRXJyb3IsIHNldERyb3BFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIC8vIEFsbCB0aGUgcHJvbWlzZXMgZ2VuZXJhdGVkIGZyb20gdGhlIGRyb3AgZXZlbnRzLlxuICAgIC8vIFVzZWQgdG8gcHJvY2VzcyBtdWx0aXBsZSBkcm9wIGV2ZW50cyBpbiBzdWNjZXNzaW9uXG4gICAgY29uc3QgZHJvcFByb21pc2VzUmVmID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbY3VycmVudFByb21pc2VJbmRleCwgc2V0Q3VycmVudFByb21pc2VJbmRleCwgZ2V0Q3VycmVudFByb21pc2VJbmRleF0gPSB1c2VTdGF0ZSgtMSk7XG4gICAgY29uc3QgW3Byb21pc2VDb3VudCwgc2V0UHJvbWlzZUNvdW50LCBnZXRQcm9taXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxuICAgIC8vIElmIHRoZXJlIGlzIG9uZSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLCBzaW5jZSBpdCBydW5zIHRoZSBzYW1lIGNoZWNrLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xuICAgICAgICBpZiAocHJvbWlzZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtwcm9taXNlQ291bnRdKTtcbiAgICAvLyBBbnl0aW1lIG91ciBjdXJyZW50IHByb21pc2UgY2hhbmdlcyxcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxuICAgIC8vIEZpbmFsbHksIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55bW9yZSBwcm9taXNlcy5cbiAgICAvLyBJZiB0aGVyZSBhcmUsIHRoZW4gaW5jcmVhc2UgY3VycmVudFByb21pc2VDb3VudCxcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cbiAgICAvL1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiAqb2Z0ZW4qLCBidXQgbWF5YmUgaW4gdGhlIGNhc2Ugb2ZcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9taXNlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9taXNlLnRoZW4oKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkRmlsZXMoZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkU3RyaW5ncyhzdHJpbmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UncmUgZG9uZSwgYXJlIHRoZXJlIG1vcmUgcHJvbWlzZXMgaW4gdGhlIHF1ZXVlP1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBwcm9taXNlIGhhcyBzdGFydGVkLCBtb3JlIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50UHJvbWlzZUluZGV4XSk7XG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xuICAgICAgICAvL2NvbnN0IHJlZiA9IHVzZVJlZjxFPihudWxsKTtcbiAgICAgICAgLy8gSGFuZGxlIGNvbGxlY3RpbmcgdGhlIGN1cnJlbnQgZmlsZSBtZXRhZGF0YSBvciBNSU1FIHR5cGVzLlxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IChlZmZlY3QgPz8gXCJtb3ZlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01pbWVUeXBlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01pbWVUeXBlcy5hZGQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goeyB0eXBlOiBpdGVtLnR5cGUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG5ld0ZpbGVzKTtcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihuZXdNaW1lVHlwZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGUgcmVzZXR0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlc1xuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQm9pbGVycGxhdGUsIEkgZ3Vlc3NcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgY29uc3Qgb25Ecm9wID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xuICAgICAgICAgICAgY29uc3QgZHJvcEZpbGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGl0ZW0uZ2V0QXNTdHJpbmcocmVzb2x2ZSkpKS50aGVuKHN0ciA9PiBkcm9wRGF0YVt0eXBlXSA9IHN0cikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcFByb21pc2VzUmVmLmN1cnJlbnQucHVzaChQcm9taXNlLmFsbChhbGxQcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogZHJvcERhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KS5jYXRjaChleCA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IoZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRHJhZ0VudGVyLCBvbkRyYWdMZWF2ZSwgb25EcmFnT3Zlciwgb25Ecm9wIH0sIHApO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRHJvcHBhYmxlUHJvcHMsXG4gICAgICAgIGZpbGVzRm9yQ29uc2lkZXJhdGlvbixcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXG4gICAgICAgIGRyb3BwZWRGaWxlcyxcbiAgICAgICAgZHJvcHBlZFN0cmluZ3MsXG4gICAgICAgIGRyb3BFcnJvclxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJvcHBhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuLyoqXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW55ICpub24tUHJlYWN0KiBlbGVtZW50LCBhbmQgcmVtb3ZpbmcgaXQgd2hlbiB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBob29rIHVubW91bnRzLiBUaGUgY2FsbGJhY2sgZG9lcyBub3QgbmVlZCB0byBiZSBzdGFibGUgYWNyb3NzIHJlbmRlcnMuXG4gKlxuICogRHVlIHRvIHR5cGluZyBsaW1pdGF0aW9ucywgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBsaWtlIHRoaXM6XG4gKlxuICogYHVzZUV2ZW50SGFuZGxlcihlbGVtZW50LCBcImlucHV0XCIpPElucHV0RXZlbnQ+KGUgPT4ge30pYFxuICpcbiAqIFRoZSB0eXBlIGFyZ3VtZW50IGlzIG9wdGlvbmFsLCBidXQgbmFycm93cyBkb3duIHRoZSB0eXBlIGZyb20gXCJhIHVuaW9uIG9mIGFsbCBldmVudHNcIiB0byB3aGF0ZXZlciB5b3Ugc3BlY2lmeSwgYW5kIGVycm9ycyBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICpcbiAqIFRoZXJlIGlzIGEgc2VwYXJhdGUgdmVyc2lvbiB0aGF0IGF0dGFjaGVzIGV2ZW50IGhhbmRsZXJzIHRvIGEgc2V0IG9mIHByb3BzLlxuICogSXQgdGFrZXMgZGlmZmVyZW50IGV2ZW50IHN0cmluZyB0eXBlcyAob25FdmVudCB2cyBvbmV2ZW50KS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IEEgKm5vbi1QcmVhY3QqIG5vZGUgdG8gYXR0YWNoIHRoZSBldmVudCB0by5cbiAqIEByZXR1cm5zXG4gKiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxIYW5kbGVyKHRhcmdldCwgdHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIC8vIE5vdGUgdG8gc2VsZjogVGhlIHR5cGluZyBkb2Vzbid0IGltcHJvdmUgZXZlbiBpZiB0aGlzIGlzIHNwbGl0IHVwIGludG8gYSBzdWItZnVuY3Rpb24uXG4gICAgLy8gTm8gbWF0dGVyIHdoYXQsIGl0IHNlZW1zIGltcG9zc2libGUgdG8gZ2V0IHRoZSBoYW5kbGVyJ3MgZXZlbnQgb2JqZWN0IHR5cGVkIHBlcmZlY3RseS5cbiAgICAvLyBJdCBzZWVtcyBsaWtlIGl0J3MgZ3VhcmFudGVlZCB0byBhbHdheXMgYmUgYSB1bmlvbiBvZiBhbGwgYXZhaWxhYmxlIHR1cGVzLlxuICAgIC8vIEFnYWluLCBubyBtYXR0ZXIgd2hhdCBjb21iaW5hdGlvbiBvZiBzdWItIG9yIHN1Yi1zdWItZnVuY3Rpb25zIHVzZWQuXG4gICAgbGV0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyID8/ICgoKSA9PiB7IH0pKTtcbiAgICBpZiAoaGFuZGxlciA9PSBudWxsKVxuICAgICAgICBzdGFibGVIYW5kbGVyID0gbnVsbDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhYmxlSGFuZGxlcikge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9LCBbdGFyZ2V0LCB0eXBlLCBzdGFibGVIYW5kbGVyXSk7XG59XG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHdheSB0byBhZGQgYW4gZXZlbnQgaGFuZGxlciB0byBhbiBlbGVtZW50LiBVc2VmdWwgcHJpbWFyaWx5IHdoZW4gaW50ZWdyYXRpbmcgM3JkIHBhcnR5IGxpYnJhcmllcyB0aGF0IGV4cGVjdCBhIGdlbmVyaWMgXCJhZGQgZXZlbnQgaGFuZGxlclwiIGZ1bmN0aW9uLlxuICpcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gbW9kaWZ5IGEgc2V0IG9mIHByb3BzIHRvIGFwcGx5IHRoaXMgaGFuZGxlci5cbiAqXG4gKiBGb3IgdHlwaW5nIHJlYXNvbnMsIHRoaXMgZnVuY3Rpb24gaXMgc3BsaXQgaW50byB0d28uICBVc2FnZSBpcyBsaWtlIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogYGBgXG4gKiBjb25zdCB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfSA9IHVzZUxvY2FsRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PigpKFwib25Nb3VzZURvd25cIiwgZSA9PiB7ICB9KTtcbiAqIGNvbnN0IGRpdlByb3BzID0gdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyhwcm9wcyk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhYmxlSGFuZGxlciA9IHVzZVN0YWJsZUNhbGxiYWNrKGhhbmRsZXIpO1xuICAgICAgICBjb25zdCB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFt0eXBlXTogc3RhYmxlSGFuZGxlciB9LCBwcm9wcyk7XG4gICAgICAgIH0sIFt0eXBlXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfTtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZXZlbnQtaGFuZGxlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbi8qKlxuICpcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpZmZlcmVudCB3YXlzIHRoYXQgYSBmb2N1cyBldmVudCBjYW4gaGFwcGVuLiAgQXNzdW1lXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcbiAqXG4gKiAxLiBUaGUgcGFnZSBsb2Fkcy5cbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cbiAqICAgICogTm8gZm9jdXMgZXZlbnRzIGFyZSBmaXJlZC5cbiAqIDIuIFRoZSB3aW5kb3cgaXMgZm9jdXNlZCwgYW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXG4gKiAgICAqIEEgYGZvY3VzYC9gZm9jdXNpbmAgZXZlbnQgKk1JR0hUKiBiZSBmaXJlZCBmb3IgYGJvZHlgLiBEZXBlbmRpbmcgb25cbiAqICAgICAgdGhlIGJyb3dzZXIsIHRoaXMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBoYW5kbGVyIHdhcyBhdHRhY2hlZCB0byBgd2luZG93YCBvciBgZG9jdW1lbnRgLlxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXG4gKiAzLiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50IGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXG4gKiAgICAqIGBmb2N1c2AgYW5kIGBmb2N1c2luYCBhcmUgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbC5cbiAqIDQuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXG4gKiAgICAqIGBibHVyYCBhbmQgYGZvY3Vzb3V0YCBhcmUgZmlyZWQgb24gdGhlIG9sZCBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG5ldyBlbGVtZW50LlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIG5vdyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50LlxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxuICogNS4gQW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIGBib2R5YC5cbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxuICogICAgKiBgZm9jdXNpbmAgaXMgKm5vdCogZmlyZWQgb24gYGJvZHlgLlxuICpcbiAqXG4gKiBJbiBzdW1tYXJ5OlxuICogMS4gRm9jdXMgZXZlbnRzICpkbyogbm90aWZ5IHVzIG9mIGFsbCBjaGFuZ2VzIGluIGZvY3VzLCBidXQgdGhlcmUgaXMgbm8gb25lIHNpbmdsZSBjb21wcmVoZW5zaXZlIGV2ZW50IHRoYXQgcHJvdmlkZXMgdXMgd2l0aCBhbGwgYXZhaWxhYmxlIGluZm9ybWF0aW9uLlxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXG4gKiAzLiBBIGBibHVyYCB3aXRob3V0IGEgYGZvY3VzYCBjYW4gYW5kIHdpbGwgb2NjdXIuIFRoaXMgbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIHNvbGVseSB1c2UgYGZvY3VzYCB0byBkZXRlY3QgYWxsIGNoYW5nZXMuXG4gKiA0LiBBIGBibHVyYCBldmVudCB3aG9zZSBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSB3aWxsIGJlIG5vIGZvbGxvd2luZyBgZm9jdXNgIGV2ZW50LlxuICpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGR1bW15ID0gMDtcbmNvbnN0IGFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBNYXAoKTtcbmNvbnN0IGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBuZXcgTWFwKCk7XG5jb25zdCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMgPSBuZXcgTWFwKCk7XG5sZXQgd2luZG93c0ZvY3VzZWQgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBmb3JFYWNoVXBkYXRlcih3aW5kb3csIG1hcCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBbb3RoZXJXaW5kb3csIHVwZGF0ZXJzXSBvZiBtYXApIHtcbiAgICAgICAgaWYgKHdpbmRvdyA9PT0gb3RoZXJXaW5kb3cpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHVwZGF0ZXIgb2YgdXBkYXRlcnMpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVyPy4odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZm9jdXNvdXQoZSkge1xuICAgIGNvbnN0IHdpbmRvdyA9IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLCBudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEp1c3Qgd2FpdCBmb3IgdGhlIGZvY3VzaW4gZXZlbnQuXG4gICAgfVxufVxuZnVuY3Rpb24gZm9jdXNpbihlKSB7XG4gICAgY29uc3Qgd2luZG93ID0gZS50YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICBsZXQgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIGFjdGl2ZUVsZW1lbnRVcGRhdGVycywgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQpO1xuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycywgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQpO1xufVxuZnVuY3Rpb24gd2luZG93Rm9jdXMoZSkge1xuICAgIGNvbnN0IHdpbmRvdyA9IChlLnRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUudGFyZ2V0IDogZS5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgV2luZG93ID8gZS5jdXJyZW50VGFyZ2V0IDogZS50YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyk7XG4gICAgd2luZG93c0ZvY3VzZWQuc2V0KHdpbmRvdywgdHJ1ZSk7XG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMsIHRydWUpO1xufVxuZnVuY3Rpb24gd2luZG93Qmx1cihlKSB7XG4gICAgY29uc3Qgd2luZG93ID0gKGUudGFyZ2V0IGluc3RhbmNlb2YgV2luZG93ID8gZS50YXJnZXQgOiBlLmN1cnJlbnRUYXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLmN1cnJlbnRUYXJnZXQgOiBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KTtcbiAgICB3aW5kb3dzRm9jdXNlZC5zZXQod2luZG93LCBmYWxzZSk7XG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMsIGZhbHNlKTtcbn1cbi8qKlxuICogQWxsb3dzIHlvdSB0byBpbnNwZWN0IHdoaWNoIGVsZW1lbnQgaW4gdGhlIGBkb2N1bWVudGAgY3VycmVudGx5IGhhcyBmb2N1cywgd2hpY2ggd2FzIG1vc3QgcmVjZW50bHkgZm9jdXNlZCBpZiBub25lIGFyZSBjdXJyZW50bHksIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgd2luZG93IGhhcyBmb2N1cyBieSByZXR1cm5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRBY3RpdmVFbGVtZW50KClgXG4gKiAqIGBnZXRMYXN0QWN0aXZlRWxlbWVudCgpYFxuICogKiBgZ2V0V2luZG93Rm9jdXNlZCgpYFxuICogKiAqKk5vIHByb3AtbW9kaWZ5aW5nIGhvb2sgaXMgcmV0dXJuZWQgYmVjYXVzZSBub25lIGlzIG5lY2Vzc2FyeSoqXG4gKlxuICogKFRoZSBkb2N1bWVudCdzIGJvZHkgcmVjZWl2aW5nIGZvY3VzLCBsaWtlIGl0IGRvZXMgd2hlbiB5b3UgY2xpY2sgb24gYW4gZW1wdHkgYXJlYSwgaXMgY291bnRlZCBhcyBubyBlbGVtZW50IGhhdmluZyBmb2N1cyBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzKVxuICpcbiAqIFRoaXMgaXMgYSBwYXNzaXZlIGhvb2ssIHNvIGJ5IGRlZmF1bHQgaXQgcmV0dXJucyBnZXR0ZXIgZnVuY3Rpb25zIHRoYXQgcmVwb3J0IHRoaXMgaW5mb3JtYXRpb24gYnV0IHRoZSBjb21wb25lbnQgd2lsbCBub3QgcmUtcmVuZGVyIGJ5IGRlZmF1bHQgd2hlbiB0aGUgYWN0aXZlIGVsZW1lbnQgY2hhbmdlcy5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0aGUgY29tcG9uZW50IHRvIHJlLXJlbmRlciB3aGVuIHRoZSBhY3RpdmUgZWxlbWVudCBjaGFuZ2VzLCB1c2UgdGhlIGBvbipDaGFuZ2VgIGFyZ3VtZW50cyB0byBzZXQgc29tZSBzdGF0ZSBvbiB5b3VyIGVuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGl2ZUVsZW1lbnQoeyBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgICAgIGlmICgoYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpPy5zaXplID8/IDApID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2luZG93Rm9jdXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGVtIGV2ZW4gaWYgdGhleSdyZSB1bmRlZmluZWQgdG8gbW9yZSBlYXNpbHlcbiAgICAgICAgICAgICAgICAvLyBtYW5hZ2UgdGhlIFwiPjAgbWVhbnMgZG9uJ3QgYWRkIGhhbmRsZXJzXCIgbG9naWMuXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxBY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykgPz8gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsTGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykgPz8gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsV2luZG93Rm9jdXNlZFVwZGF0ZXJzID0gd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmdldCh3aW5kb3cpID8/IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5hZGQoc2V0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbG9jYWxMYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzZXRMYXN0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbG9jYWxXaW5kb3dGb2N1c2VkVXBkYXRlcnMuYWRkKHNldFdpbmRvd0ZvY3VzZWQpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zZXQod2luZG93LCBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycyk7XG4gICAgICAgICAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zZXQod2luZG93LCBsb2NhbExhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMpO1xuICAgICAgICAgICAgICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5zZXQod2luZG93LCBsb2NhbFdpbmRvd0ZvY3VzZWRVcGRhdGVycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpLmRlbGV0ZShzZXRBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KS5kZWxldGUoc2V0TGFzdEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldFdpbmRvd0ZvY3VzZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2luZG93Rm9jdXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIGNvbnN0IFtnZXRBY3RpdmVFbGVtZW50LCBzZXRBY3RpdmVFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2dldExhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgdW5kZWZpbmVkKTtcbiAgICBjb25zdCBbZ2V0V2luZG93Rm9jdXNlZCwgc2V0V2luZG93Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25XaW5kb3dGb2N1c2VkQ2hhbmdlLCByZXR1cm5UcnVlKTtcbiAgICByZXR1cm4geyBnZXRFbGVtZW50LCB1c2VBY3RpdmVFbGVtZW50UHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQgfTtcbn1cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7IHJldHVybiB0cnVlOyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHsgcmV0dXJuIGZhbHNlOyB9XG5mdW5jdGlvbiBub29wKCkgeyB9XG5leHBvcnQgZnVuY3Rpb24gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRDaGFuZ2VkLCBvbkZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uRm9jdXNlZENoYW5nZWQsIG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZENoYW5nZWQsIG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlKTtcbiAgICBjb25zdCBbZ2V0Rm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25Gb2N1c2VkQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRGb2N1c2VkSW5uZXIsIHNldEZvY3VzZWRJbm5lcl0gPSB1c2VQYXNzaXZlU3RhdGUob25Gb2N1c2VkSW5uZXJDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldExhc3RGb2N1c2VkLCBzZXRMYXN0Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0Rm9jdXNlZENoYW5nZWQsIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCBbZ2V0TGFzdEZvY3VzZWRJbm5lciwgc2V0TGFzdEZvY3VzZWRJbm5lcl0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IHsgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQsIHVzZUFjdGl2ZUVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCh7XG4gICAgICAgIG9uQWN0aXZlRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGFjdGl2ZUVsZW1lbnQsIHByZXZBY3RpdmVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxmRWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWQgPSAoc2VsZkVsZW1lbnQgIT0gbnVsbCAmJiAoc2VsZkVsZW1lbnQgPT0gYWN0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZElubmVyID0gKCEhc2VsZkVsZW1lbnQ/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIHNldEZvY3VzZWQoZm9jdXNlZCk7XG4gICAgICAgICAgICBzZXRGb2N1c2VkSW5uZXIoZm9jdXNlZElubmVyKTtcbiAgICAgICAgICAgIG9uQWN0aXZlRWxlbWVudENoYW5nZT8uKGFjdGl2ZUVsZW1lbnQsIHByZXZBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygobGFzdEFjdGl2ZUVsZW1lbnQsIHByZXZMYXN0QWN0aXZlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkID0gKHNlbGZFbGVtZW50ICE9IG51bGwgJiYgKHNlbGZFbGVtZW50ID09IGxhc3RBY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSAoISFzZWxmRWxlbWVudD8uY29udGFpbnMobGFzdEFjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIHNldExhc3RGb2N1c2VkKGZvY3VzZWQpO1xuICAgICAgICAgICAgc2V0TGFzdEZvY3VzZWRJbm5lcihmb2N1c2VkSW5uZXIpO1xuICAgICAgICAgICAgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZT8uKGxhc3RBY3RpdmVFbGVtZW50LCBwcmV2TGFzdEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIG9uV2luZG93Rm9jdXNlZENoYW5nZVxuICAgIH0pO1xuICAgIGNvbnN0IHVzZUhhc0ZvY3VzUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHsgcmV0dXJuIHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcyk7IH0sIFt1c2VBY3RpdmVFbGVtZW50UHJvcHNdKTtcbiAgICByZXR1cm4geyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRFbGVtZW50LCBnZXRGb2N1c2VkLCBnZXRGb2N1c2VkSW5uZXIsIGdldExhc3RGb2N1c2VkLCBnZXRMYXN0Rm9jdXNlZElubmVyLCBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWhhcy1mb2N1cy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJ2YWwoeyBpbnRlcnZhbCwgY2FsbGJhY2sgfSkge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgY29uc3QgZ2V0SW50ZXJ2YWwgPSB1c2VTdGFibGVHZXR0ZXIoaW50ZXJ2YWwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG4gICAgICAgIGxldCBsYXN0RGVsYXlVc2VkID0gaW50ZXJ2YWw7XG4gICAgICAgIGlmIChpbnRlcnZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXG4gICAgICAgIC8vIHRoYXQgY2xlYXJzIGFuZCByZXNldHMgdGhlIGludGVydmFsIGlmIGl0IGNoYW5nZXMuXG4gICAgICAgIGNvbnN0IGFkanVzdGFibGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnRlcnZhbCAhPSBsYXN0RGVsYXlVc2VkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBsYXN0RGVsYXlVc2VkID0gY3VycmVudEludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgaW50ZXJ2YWwpO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnZhbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24gfSBmcm9tIFwiLi91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VSb3ZpbmdUYWJJbmRleCB9IGZyb20gXCIuL3VzZS1yb3ZpbmctdGFiaW5kZXhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqXG4gKiBUT0RPOiBUaGlzIHRhYmxlIHdhcyBzY3JhcHBlZCB3aGVuIHRoaXMgd2FzIGNoYW5nZWQgdG8ganVzdCBhY2NlcHQgYSBjb2xsYXRvciBkaXJlY3RseSxcbiAqIGJ1dCBpdCdzIG5vdCBiYWQgZm9yIGEgY29sbGF0aW9uIGNyYXNoIGNvdXJzZSBhbmQgSSBtaWdodCB1c2UgaXQgYWdhaW4uXG4gKiBFdmVuIGp1c3QgYXMgYSBcInRoaXMgaXMgd2h5IGl0J3MgaW1wb3J0YW50IGFuZCBnb29kIHRvIHVzZSB0aGVzZSB0aGluZ3NcIiB0aGluZy5cbiAqXG4gKiB8TGFuZy58VGFyZ2V0fFVzZXIgaW5wdXR8YGJhc2VgfGBhY2NlbnRgfGBjYXNlYHxgdmFyaWFudGB8XG4gKiB8LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXxcbiAqIHxFTnxIaXxIaXzinIV84pyFfOKchXzinIV8XG4gKiB8RU58SGl877yo772JfOKchXzinIV84pyFfOKdjHxcbiAqIHxFTnxIaXxoaXzinIV84pyFfOKdjHzinYx8XG4gKiB8RU58SGl8SMOvfOKchXzinYx84p2MfOKdjHxcbiAqIHxFTnxIaXxCeWV84p2MfOKdjHzinYx84p2MfFxuICogfERBfMOlfGFhfOKchXzinIV84pyFfOKdjHxcbiAqIHxEQXzDpXxBQXzinIV84pyFfOKdjHzinYx8XG4gKiB8REF8w6V8QWF84pyFfOKchXzinYx84p2MfFxuICogfEVOfMOlfGFhfOKdjHzinYx84p2MfOKdjHxcbiAqIHxEQXzDpXxhQXzinYx84p2MfOKdjHzinYx8XG4gKiB8RU58w6V8YXzinIV84pyFfOKdjHzinYx8XG4gKiB8REF8w6V8YXzinIV84pyFfOKdjHzinYx8XG4gKiB8SlB876qqfOedgHzinIV84pyFfOKchXzinIV8XG4gKiB8SlB844KrfO+9tnzinIV84pyFfOKchXzinIV8XG4gKiB8SlB844KrfOOBi3zinIV84pyFfOKchXzinYx8XG4gKiB8SlB844KrfOODtXzinIV84pyFfOKchXzinYx8XG4gKiB8SlB844KrfOOLlXzinIV84pyFfOKdjHzinYx8XG4gKiB8SlB844KrfOOCrHzinIV84p2MfOKdjHzinYx8XG4gKiB8SlB844KrfOWKm3zinYx84p2MfOKdjHzinYx8XG4gKiB8Wkh857SFfOe6onzinYx84p2MfOKdjHzinYx8XG4gKlxuICpcbiAqIChOb3RlIHRvIHNlbGY6IEF0IHNvbWUgcG9pbnQsIHRoaXMgZmlsZSB3aWxsIHByb2JhYmx5IGJlIG5vcm1hbGl6ZWRcbiAqIGJ5IHNvbWVib2R5IGFuZCDvqqogd2lsbCB0dXJuIGJhY2sgaW50byDnnYAuKVxuICpcbiAqL1xuY29uc3QgZHVtbXkgPSBudWxsO1xuO1xuZnVuY3Rpb24gaWRlbnRpdHkodCkgeyByZXR1cm4gdDsgfVxuLyoqXG4gKiBJbXBsZW1lbnRzIHByb3BlciBrZXlib2FyZCBuYXZpZ2F0aW9uIGZvciBjb21wb25lbnRzIGxpa2UgbGlzdGJveGVzLCBidXR0b24gZ3JvdXBzLCBtZW51cywgZXRjLlxuICpcbiAqIEluIHRoZSBkb2N1bWVudCBvcmRlciwgdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBcImZvY3VzZWRcIiBvciBcInRhYmJhYmxlXCIgZWxlbWVudCwgbWFraW5nIGl0IGFjdCBtb3JlIGxpa2Ugb25lIGNvbXBsZXRlIHVuaXQgaW4gY29tcGFyaXNvbiB0byBldmVyeXRoaW5nIGFyb3VuZCBpdC5cbiAqIE5hdmlnYXRpbmcgZm9yd2FyZHMvYmFja3dhcmRzIGNhbiBiZSBkb25lIHdpdGggdGhlIGFycm93IGtleXMsIEhvbWUvRW5kIGtleXMsIG9yIGFueSBhbnkgdGV4dCBmb3IgdHlwZWFoZWFkIHRvIGZvY3VzIHRoZSBuZXh0IGl0ZW0gdGhhdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTGlzdE5hdmlnYXRpb24oeyBpbml0aWFsSW5kZXgsIHNob3VsZEZvY3VzT25DaGFuZ2UsIGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyIH0pIHtcbiAgICBpbmRleE1hbmdsZXIgPz89IGlkZW50aXR5O1xuICAgIGluZGV4RGVtYW5nbGVyID8/PSBpZGVudGl0eTtcbiAgICBrZXlOYXZpZ2F0aW9uID8/PSBcImVpdGhlclwiO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XG4gICAgLy8gV2hhdCBpdCBpcywgYW5kIHdoZXRoZXIsIHdoZW4gd2UgcmVuZGVyIHRoaXMgY29tcG9uZW50IGFuZCBpdCdzIGNoYW5nZWQsIHRvIGFsc28gZm9jdXMgdGhlIGVsZW1lbnQgdGhhdCB3YXMgbWFkZSB0YWJiYWJsZS5cbiAgICBjb25zdCBbdGFiYmFibGVJbmRleCwgc2V0VGFiYmFibGVJbmRleCwgZ2V0VGFiYmFibGVJbmRleF0gPSB1c2VTdGF0ZShpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCA/IDAgOiBpbml0aWFsSW5kZXgpO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBpbmRpY2VzQnlFbGVtZW50LCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBmb2N1c0N1cnJlbnQsIC4uLnJlc3QgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHsgc2hvdWxkRm9jdXNPbkNoYW5nZSwgdGFiYmFibGVJbmRleCB9KTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaSkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlcigwKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIobWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDEpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGkgPT4gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKGkgPz8gMCkgLSAxKSk7IH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIoaSA/PyAwKSArIDEpKTsgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcbiAgICBjb25zdCBzZXRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGluZGV4KTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgeyBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleDogZ2V0VGFiYmFibGVJbmRleCwgc2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQ6IDEwMDAgfSk7XG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb24oeyBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBrZXlOYXZpZ2F0aW9uLCBpbmRleDogZ2V0VGFiYmFibGVJbmRleCgpID8/IDAsIG1hbmFnZWRDaGlsZHJlbiwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0IH0pO1xuICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyh1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKTtcbiAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvblByb3BzLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHNdKTtcbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyAuLi5yZXN0IH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoaW5mbyk7XG4gICAgICAgIC8vY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkKGluZm8gYXMgSSk7XG4gICAgICAgIGNvbnN0IHsgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcywgdGFiYmFibGUgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQoaW5mbyk7XG4gICAgICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcygoKHsgb25DbGljazogcm92ZVRvU2VsZiB9KSkpLCBwcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJvdmVUb1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTsgfSwgW10pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLFxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHM6IHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxuICAgICAgICAgICAgdGFiYmFibGVcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLFxuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblByb3BzLFxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxuICAgICAgICB0YWJiYWJsZUluZGV4LFxuICAgICAgICBzZXRUYWJiYWJsZUluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXG4gICAgICAgIG5hdmlnYXRlVG9JbmRleCxcbiAgICAgICAgbmF2aWdhdGVUb05leHQsXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxuICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QsXG4gICAgICAgIG5hdmlnYXRlVG9MYXN0LFxuICAgICAgICBmb2N1c0N1cnJlbnQsXG4gICAgICAgIC4uLnJlc3RcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxpc3QtbmF2aWdhdGlvbi5qcy5tYXAiLCIvKiFcbiogdGFiYmFibGUgNS4yLjFcbiogQGxpY2Vuc2UgTUlULCBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC90YWJiYWJsZS9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFsnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJywgJ2FbaHJlZl0nLCAnYnV0dG9uJywgJ1t0YWJpbmRleF0nLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScsICdkZXRhaWxzJ107XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xudmFyIG1hdGNoZXMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG5cbiAgaWYgKGluY2x1ZGVDb250YWluZXIgJiYgbWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICB9XG5cbiAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzQ29udGVudEVkaXRhYmxlID0gZnVuY3Rpb24gaXNDb250ZW50RWRpdGFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcbn07XG5cbnZhciBnZXRUYWJpbmRleCA9IGZ1bmN0aW9uIGdldFRhYmluZGV4KG5vZGUpIHtcbiAgdmFyIHRhYmluZGV4QXR0ciA9IHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG5cbiAgaWYgKCFpc05hTih0YWJpbmRleEF0dHIpKSB7XG4gICAgcmV0dXJuIHRhYmluZGV4QXR0cjtcbiAgfSAvLyBCcm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuXG5cbiAgaWYgKGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gLy8gaW4gQ2hyb21lLCA8ZGV0YWlscy8+LCA8YXVkaW8gY29udHJvbHMvPiBhbmQgPHZpZGVvIGNvbnRyb2xzLz4gZWxlbWVudHMgZ2V0IGEgZGVmYXVsdFxuICAvLyAgYHRhYkluZGV4YCBvZiAtMSB3aGVuIHRoZSAndGFiaW5kZXgnIGF0dHJpYnV0ZSBpc24ndCBzcGVjaWZpZWQgaW4gdGhlIERPTSxcbiAgLy8gIHlldCB0aGV5IGFyZSBzdGlsbCBwYXJ0IG9mIHRoZSByZWd1bGFyIHRhYiBvcmRlcjsgaW4gRkYsIHRoZXkgZ2V0IGEgZGVmYXVsdFxuICAvLyAgYHRhYkluZGV4YCBvZiAwOyBzaW5jZSBDaHJvbWUgc3RpbGwgcHV0cyB0aG9zZSBlbGVtZW50cyBpbiB0aGUgcmVndWxhciB0YWJcbiAgLy8gIG9yZGVyLCBjb25zaWRlciB0aGVpciB0YWIgaW5kZXggdG8gYmUgMC5cblxuXG4gIGlmICgobm9kZS5ub2RlTmFtZSA9PT0gJ0FVRElPJyB8fCBub2RlLm5vZGVOYW1lID09PSAnVklERU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdERVRBSUxTJykgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPT09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufTtcblxudmFyIHNvcnRPcmRlcmVkVGFiYmFibGVzID0gZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufTtcblxudmFyIGlzSW5wdXQgPSBmdW5jdGlvbiBpc0lucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJztcbn07XG5cbnZhciBpc0hpZGRlbklucHV0ID0gZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59O1xuXG52YXIgaXNEZXRhaWxzV2l0aFN1bW1hcnkgPSBmdW5jdGlvbiBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB7XG4gIHZhciByID0gbm9kZS50YWdOYW1lID09PSAnREVUQUlMUycgJiYgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGRyZW4pLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkLnRhZ05hbWUgPT09ICdTVU1NQVJZJztcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxudmFyIGdldENoZWNrZWRSYWRpbyA9IGZ1bmN0aW9uIGdldENoZWNrZWRSYWRpbyhub2RlcywgZm9ybSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQgJiYgbm9kZXNbaV0uZm9ybSA9PT0gZm9ybSkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGlzVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIGlmICghbm9kZS5uYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgcmFkaW9TY29wZSA9IG5vZGUuZm9ybSB8fCBub2RlLm93bmVyRG9jdW1lbnQ7XG5cbiAgdmFyIHF1ZXJ5UmFkaW9zID0gZnVuY3Rpb24gcXVlcnlSYWRpb3MobmFtZSkge1xuICAgIHJldHVybiByYWRpb1Njb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XG4gIH07XG5cbiAgdmFyIHJhZGlvU2V0O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MuZXNjYXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXMnLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQsIG5vZGUuZm9ybSk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufTtcblxudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufTtcblxudmFyIGlzTm9uVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59O1xuXG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihub2RlLCBkaXNwbGF5Q2hlY2spIHtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpc0RpcmVjdFN1bW1hcnkgPSBtYXRjaGVzLmNhbGwobm9kZSwgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJyk7XG4gIHZhciBub2RlVW5kZXJEZXRhaWxzID0gaXNEaXJlY3RTdW1tYXJ5ID8gbm9kZS5wYXJlbnRFbGVtZW50IDogbm9kZTtcblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsICdkZXRhaWxzOm5vdChbb3Blbl0pIConKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFkaXNwbGF5Q2hlY2sgfHwgZGlzcGxheUNoZWNrID09PSAnZnVsbCcpIHtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXNwbGF5Q2hlY2sgPT09ICdub24temVyby1hcmVhJykge1xuICAgIHZhciBfbm9kZSRnZXRCb3VuZGluZ0NsaWUgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB3aWR0aCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmhlaWdodDtcblxuICAgIHJldHVybiB3aWR0aCA9PT0gMCAmJiBoZWlnaHQgPT09IDA7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyBmb3JtIGZpZWxkcyAobmVzdGVkKSBpbnNpZGUgYSBkaXNhYmxlZCBmaWVsZHNldCBhcmUgbm90IGZvY3VzYWJsZS90YWJiYWJsZVxuLy8gIHVubGVzcyB0aGV5IGFyZSBpbiB0aGUgX2ZpcnN0XyA8bGVnZW5kPiBlbGVtZW50IG9mIHRoZSB0b3AtbW9zdCBkaXNhYmxlZFxuLy8gIGZpZWxkc2V0XG5cblxudmFyIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQgPSBmdW5jdGlvbiBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpIHtcbiAgaWYgKGlzSW5wdXQobm9kZSkgfHwgbm9kZS50YWdOYW1lID09PSAnU0VMRUNUJyB8fCBub2RlLnRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgbm9kZS50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLnRhZ05hbWUgPT09ICdGSUVMRFNFVCcgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAvLyBsb29rIGZvciB0aGUgZmlyc3QgPGxlZ2VuZD4gYXMgYW4gaW1tZWRpYXRlIGNoaWxkIG9mIHRoZSBkaXNhYmxlZFxuICAgICAgICAvLyAgPGZpZWxkc2V0PjogaWYgdGhlIG5vZGUgaXMgaW4gdGhhdCBsZWdlbmQsIGl0J2xsIGJlIGVuYWJsZWQgZXZlblxuICAgICAgICAvLyAgdGhvdWdoIHRoZSBmaWVsZHNldCBpcyBkaXNhYmxlZDsgb3RoZXJ3aXNlLCB0aGUgbm9kZSBpcyBpbiBhXG4gICAgICAgIC8vICBzZWNvbmRhcnkvc3Vic2VxdWVudCBsZWdlbmQsIG9yIHNvbWV3aGVyZSBlbHNlIHdpdGhpbiB0aGUgZmllbGRzZXRcbiAgICAgICAgLy8gIChob3dldmVyIGRlZXAgbmVzdGVkKSBhbmQgaXQnbGwgYmUgZGlzYWJsZWRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5pdGVtKGkpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdMRUdFTkQnKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbnMobm9kZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyB0aGUgbm9kZSBpc24ndCBpbiB0aGUgZmlyc3QgbGVnZW5kIChpbiBkb2Mgb3JkZXIpLCBzbyBubyBtYXR0ZXJcbiAgICAgICAgICAgIC8vICB3aGVyZSBpdCBpcyBub3csIGl0J2xsIGJlIGRpc2FibGVkXG5cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHRoZSBub2RlIGlzbid0IGluIGEgbGVnZW5kLCBzbyBubyBtYXR0ZXIgd2hlcmUgaXQgaXMgbm93LCBpdCdsbCBiZSBkaXNhYmxlZFxuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcblxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucy5kaXNwbGF5Q2hlY2spIHx8IC8vIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB8fCBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHx8IGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB8fCBnZXRUYWJpbmRleChub2RlKSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciB0YWJiYWJsZSA9IGZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICBjYW5kaWRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaSkge1xuICAgIHZhciBjYW5kaWRhdGVUYWJpbmRleCA9IGdldFRhYmluZGV4KGNhbmRpZGF0ZSk7XG5cbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIHJlZ3VsYXJUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBhLm5vZGU7XG4gIH0pLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59O1xuXG52YXIgZm9jdXNhYmxlID0gZnVuY3Rpb24gZm9jdXNhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5cbnZhciBpc0ZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbmV4cG9ydCB7IGZvY3VzYWJsZSwgaXNGb2N1c2FibGUsIGlzVGFiYmFibGUsIHRhYmJhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2luZXJ0JywgZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICAvKipcbiAgICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAgICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAgICovXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgICAvKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gICAgLyoqXG4gICAgICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICAgICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICAgKi9cbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICAgKiBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gICAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgICAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gICAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgICAqXG4gICAgICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAgICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICAgKi9cblxuICAgIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRWxlbWVudH0gKi9cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgICAvLyBXYXRjaCBmb3I6XG4gICAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydFJvb3QsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fdmlzaXROb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdmlzaXROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcblxuICAgICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdtYW5hZ2VkTm9kZXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAgICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICAgICAqXG4gICAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgICAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICAgICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAgICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE1hbmFnZXIsIFt7XG4gICAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgICAgaWYgKGluZXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25Eb2N1bWVudExvYWRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0TWFuYWdlcjtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgdmFyIHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9kaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicgKyAnW2luZXJ0XSB7XFxuJyArICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgKyAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArICd9XFxuJyArICdcXG4nICsgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICd9XFxuJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgIHZhciBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pKSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiaW1wb3J0IFwid2ljZy1pbmVydFwiO1xuaW1wb3J0IFwiYmxvY2tpbmctZWxlbWVudHNcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmNvbnN0IGJsb2NraW5nRWxlbWVudHMgPSBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cztcbi8qKlxuICogQWxsb3dzIGFuIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBieSBhcHBseWluZyB0aGUgXCJpbmVydFwiIGF0dHJpYnV0ZSB0byBhbGwgc2libGluZywgYXVudCwgYW5kIHVuY2xlIG5vZGVzLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyBjb25zZWN1dGl2ZSBjYWxscyB3aXRoIGEgbG9vc2VseSBhcHBsaWVkIHN0YWNrIG9wZXJhdGlvblxuICogKHNwZWNpZmljYWxseSB2aWEgYGJsb2NraW5nRWxlbWVudHNgLCB3aXRoIGEgc21hbGwgcG9seWZpbGwgYmVjYXVzZSBJJ20gbm90IHN1cmUgaG93IGxvbmdcbiAqIGl0J2xsIHRha2UgdG8gZmluZCBpdHMgd2F5IGludG8gdGhlIHNwZWMsIGlmIGV2ZXIpXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCbG9ja2luZ0VsZW1lbnQodGFyZ2V0KSB7XG4gICAgLyoqXG4gICAgICogUHVzaC9wb3AgdGhlIGVsZW1lbnQgZnJvbSB0aGUgYmxvY2tpbmdFbGVtZW50cyBzdGFjay5cbiAgICAgKi9cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBTb21ldGltZXMgYmxvY2tpbmdFbGVtZW50cyB3aWxsIGZhaWwgaWYsIGZvciBleGFtcGxlLFxuICAgICAgICAgICAgLy8gdGhlIHRhcmdldCBlbGVtZW50IGlzbid0IGNvbm5lY3RlZCB0byBkb2N1bWVudC5ib2R5LlxuICAgICAgICAgICAgLy8gVGhpcyBpcyByYXJlLCBidXQgaXQncyBiZXR0ZXIgdG8gZmFpbCBzaWxlbnRseSB3aXRoIHdlaXJkIHRhYmJpbmcgYmVoYXZpb3JcbiAgICAgICAgICAgIC8vIHRoYW4gdG8gY3Jhc2ggdGhlIGVudGlyZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5yZW1vdmUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gV2VsbCwgc2VtaS1zaWxlbnRseS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFt0YXJnZXRdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BFbGVtZW50KCkge1xuICAgIHJldHVybiBibG9ja2luZ0VsZW1lbnRzLnRvcDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ibG9ja2luZy1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGlzRm9jdXNhYmxlIH0gZnJvbSBcInRhYmJhYmxlXCI7XG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRUb3BFbGVtZW50LCB1c2VCbG9ja2luZ0VsZW1lbnQgfSBmcm9tIFwiLi91c2UtYmxvY2tpbmctZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuY29uc3QgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzVHJhcCh7IHRyYXBBY3RpdmUgfSkge1xuICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRFbGVtZW50IH0pO1xuICAgIC8vY29uc3QgW2xhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnRdID0gdXNlU3RhdGU8Tm9kZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQsIHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyB9ID0gdXNlQWN0aXZlRWxlbWVudCh7fSk7XG4gICAgLy8gV2hlbiB0aGUgdHJhcCBiZWNvbWVzIGFjdGl2ZSwgYmVmb3JlIHdlIGxldCB0aGUgYmxvY2tpbmdFbGVtZW50cyBob29rIHJ1bixcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHdoYXRldmVyJ3MgY3VycmVudGx5IGZvY3VzZWQgYW5kIHNhdmUgaXQuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIHRvIHdoYXRldmVyJ3MgY3VycmVudGx5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gICAgICAgICAgICBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8uc2V0KGdldFRvcEVsZW1lbnQoKSwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQoKSA/PyBkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgfVxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XG4gICAgdXNlQmxvY2tpbmdFbGVtZW50KHRyYXBBY3RpdmUgPyBlbGVtZW50IDogbnVsbCk7XG4gICAgLyoqXG4gICAgICogQW55IHRpbWUgd2UgYWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgdHJhcCxcbiAgICAgKiBjaGFuZ2UgZm9jdXMgdG8gc29tZXRoaW5nIGVsc2UgKHNvbWV0aGluZyBpblxuICAgICAqIHRoZSB0cmFwIGlmIGl0J3MgYWN0aXZlLCBvciB3aGF0ZXZlciB3ZSd2ZVxuICAgICAqIHRyYWNrZWQgaW4gZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvIGlmIG5vdClcbiAgICAgKi9cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgcmFmSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIGV4dHJhIHF1ZXVlTWljcm90YXNrIGlzIG5lZWRlZCBmb3JcbiAgICAgICAgICAgICAgICAvLyAuLi5yZWFzb25zP1xuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluZEZpcnN0Rm9jdXNhYmxlKGVsZW1lbnQpPy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyYWZIYW5kbGUpXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAvLyB0aGF0IGhhcyByZXR1cm5lZCB0byB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8uZ2V0KGdldFRvcEVsZW1lbnQoKSk/LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJhZkhhbmRsZSA9IDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSGFuZGxlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbdHJhcEFjdGl2ZSwgZWxlbWVudF0pO1xuICAgIGNvbnN0IHVzZUZvY3VzVHJhcFByb3BzID0gKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1tb2RhbFwiOiB0cmFwQWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSwgdXNlUmVmRWxlbWVudFByb3BzKHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcykpKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VGb2N1c1RyYXBQcm9wcyxcbiAgICAgICAgZ2V0RWxlbWVudFxuICAgIH07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW4gdGhlIGdpdmVuIG5vZGUsIG9yIG51bGwgaWYgbm9uZSBhcmUgZm91bmQuXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XG4gICAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWxlbWVudCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHsgYWNjZXB0Tm9kZTogKG5vZGUpID0+IChub2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiBpc0ZvY3VzYWJsZShub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVApIH0pO1xuICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlID0gdHJlZVdhbGtlci5maXJzdENoaWxkKCk7XG4gICAgcmV0dXJuIGZpcnN0Rm9jdXNhYmxlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWZvY3VzLXRyYXAuanMubWFwIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGMsdXNlRGVidWdWYWx1ZSBhcyBmfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgZCxGcmFnbWVudCBhcyB2LHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOmQoZChuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/ZChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1kKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OmR9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyh2LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyh2LG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9ZChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsej1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIEIobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gSChuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgWj1oLmV2ZW50O2Z1bmN0aW9uIFkoKXt9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBxKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBaJiYobj1aKG4pKSxuLnBlcnNpc3Q9WSxuLmlzUHJvcGFnYXRpb25TdG9wcGVkPSQsbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9cSxuLm5hdGl2ZUV2ZW50PW59O3ZhciBHLEo9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEs9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgdT0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBvIGluIHI9e30sZSl7dmFyIGk9ZVtvXTtWJiZcImNoaWxkcmVuXCI9PT1vJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1vJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09aXx8KFwiZGVmYXVsdFZhbHVlXCI9PT1vJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP289XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PW8mJiEwPT09aT9pPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KG8pP289XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KG8rdCkmJiF6KGUudHlwZSk/bz1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSksbi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOkgsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImV4cG9ydCBjb25zdCBFdmVudERldGFpbCA9IFN5bWJvbChcImV2ZW50LWRldGFpbFwiKTtcbmV4cG9ydCBmdW5jdGlvbiBlbmhhbmNlRXZlbnQoZSwgZGV0YWlsKSB7XG4gICAgbGV0IGV2ZW50ID0gZTtcbiAgICBldmVudFtFdmVudERldGFpbF0gPSBkZXRhaWw7XG4gICAgcmV0dXJuIGV2ZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VHbG9iYWxIYW5kbGVyLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xubGV0IHB1bHNlID0gKFwidmlicmF0ZVwiIGluIG5hdmlnYXRvcikgPyAoKCkgPT4gbmF2aWdhdG9yLnZpYnJhdGUoMTApKSA6ICgoKSA9PiB7IH0pO1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGVuYWJsZS9kaXNhYmxlIGJ1dHRvbiB2aWJyYXRpb24gcHVsc2VzIG9uIGFuIGFwcC13aWRlIHNjYWxlLlxuICpcbiAqXG4gKiBAcGFyYW0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcnVuIHdoZW4gYSBidXR0b24gaXMgdGFwcGVkLlxuICogKERlZmF1bHQgaXMgYCgpID0+IG5hdmlnYXRvci52aWJyYXRlKDEwKWAgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGl0LCBhIG5vb3Agb3RoZXJ3aXNlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QnV0dG9uVmlicmF0ZShmdW5jKSB7XG4gICAgcHVsc2UgPSBmdW5jO1xufVxuZnVuY3Rpb24gZXhjbHVkZXModGFyZ2V0LCBleGNsdWRlKSB7XG4gICAgaWYgKGV4Y2x1ZGU/Llt0YXJnZXRdKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIHNlbGVjdGlvbi5jb250YWluc05vZGUgZG9lc24ndCBhY2NvdW50IGZvciBzZWxlY3Rpb24uaXNDb2xsYXBzZWQsXG4gKiBzbyBoZXJlJ3MgYSB3b3JrYXJvdW5kIGZvciB0aGF0LlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBub2RlSGFzU2VsZWN0ZWRUZXh0KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24/LmNvbnRhaW5zTm9kZShlbGVtZW50LCB0cnVlKSAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBldmVudCBoYW5kbGVycyB0byBjcmVhdGUgYSBcInByZXNzXCItbGlrZSBldmVudCBmb3JcbiAqIGJ1dHRvbnMgYW5kIGFueXRoaW5nIGVsc2UgdGhhdCdzIFwiY2xpY2svdGFwL3ByZXNzL3RvdWNoXCItYWJsZS5cbiAqXG4gKiBOb3RhYmx5LCB0aGUgZm9sbG93aW5nIGNhc2VzIGFyZSBjb3ZlcmVkOlxuICogKiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgcHJvcGVybHkgZm9jdXNlZCwgZXZlbiBvbiBpT1MgU2FmYXJpICgqZXNwZWNpYWxseSogb24gaU9TIFNhZmFyaSlcbiAqICogRG91YmxlLWNsaWNrcyB3b24ndCBzZWxlY3QgdGV4dC5cbiAqICogQ29udmVyc2VseSwgbWFudWFsbHkgc2VsZWN0aW5nIHRleHQgd29uJ3QgaW52b2tlIGEgcHJlc3MuXG4gKiAqIEtleWJvYXJkIGV2ZW50cyAmbWRhc2g7IGBlbnRlcmAgaW1tZWRpYXRlbHkgaW52b2tlcyB0aGUgaGFuZGxlciwgd2hpbGUgYHNwYWNlYCBpbnZva2VzIGl0IG9uIGtleXVwLlxuICogKiBIYXB0aWMgZmVlZGJhY2sgKG9uLCBsaWtlLCB0aGUgb25lIGJyb3dzZXIgY29tYmluYXRpb24gdGhhdCBzdXBwb3J0cyBpdCAmbWRhc2g7IHRoaXMgY2FuIGJlIGRpc2FibGVkIGFwcC13aWRlIHdpdGggYHNldEJ1dHRvblZpYnJhdGVgKVxuICpcbiAqIEluIGFkZGl0aW9uLCB3aGVuIHRoZSBDU1MgYDphY3RpdmVgIHBzZXVkby1jbGFzcyB3b3VsZCBhcHBseSB0byBhIG5vcm1hbCBidXR0b25cbiAqIChpLmUuIHdoZW4gaG9sZGluZyB0aGUgc3BhY2ViYXIgb3IgZHVyaW5nIG1vdXNlZG93biksIGB7IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IFwidHJ1ZVwiIH1gXG4gKiBpcyBhZGRlZCB0byB0aGUgcHJvcHMuICBZb3UgY2FuIGVpdGhlciBsZXQgaXQgcGFzcyB0aHJvdWdoIGFuZCBzdHlsZSBpdCB0aHJvdWdoIG5ldyBDU1MsXG4gKiBvciBpbnNwZWN0IHRoZSByZXR1cm5lZCBwcm9wcyBmb3IgaXQgYW5kIGFkZCBlLmcuIGFuIGAuYWN0aXZlYCBjbGFzcyBmb3IgZXhpc3RpbmcgQ1NTXG4gKlxuICogQHBhcmFtIG9uQ2xpY2tTeW5jXG4gKiBAcGFyYW0gZXhjbHVkZSBXaGV0aGVyIHRoZSBwb2x5ZmlsbCBzaG91bGRuJ3QgYXBwbHkgKGNhbiBzcGVjaWZ5IGZvciBzcGVjaWZpYyBpbnRlcmFjdGlvbnMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcmVzc0V2ZW50SGFuZGxlcnMob25DbGlja1N5bmMsIGV4Y2x1ZGUpIHtcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgLy8gQSBidXR0b24gY2FuIGJlIGFjdGl2YXRlZCBpbiBtdWx0aXBsZSB3YXlzLCBzbyBvbiB0aGUgb2ZmIGNoYW5jZVxuICAgIC8vIHRoYXQgbXVsdGlwbGUgYXJlIHRyaWdnZXJlZCBhdCBvbmNlLCB3ZSBvbmx5ICphY3R1YWxseSogcmVnaXN0ZXJcbiAgICAvLyBhIHByZXNzIG9uY2UgYWxsIG9mIG91ciBcIm9uXCIgc2lnbmFscyBoYXZlIHR1cm5lZCBiYWNrIHRvIFwib2ZmXCIuXG4gICAgLy8gV2UgYXBwcm94aW1hdGUgdGhpcyBieSBqdXN0IGluY3JlbWVudGluZyB3aGVuIGFjdGl2ZSwgYW5kXG4gICAgLy8gZGVjcmVtZW50aW5nIHdoZW4gZGVhY3RpdmF0ZWQuXG4gICAgLy9cbiAgICAvLyBBcyBhbiBlbWVyZ2VuY3kgZmFpbHNhZmUsIHdoZW4gdGhlIGVsZW1lbnQgbG9vc2VzIGZvY3VzLFxuICAgIC8vIHRoaXMgaXMgcmVzZXQgYmFjayB0byAwLlxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZSwgZ2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuICAgIC8vIElmIHdlIHRoZSBjdXJyZW50IHRleHQgc2VsZWN0aW9uIGNoYW5nZXMgdG8gaW5jbHVkZSB0aGlzIGVsZW1lbnRcbiAgICAvLyBEVVJJTkcgZS5nLiBhIG1vdXNlZG93biwgdGhlbiB3ZSBkb24ndCB3YW50IHRoZSBtb3VzZXVwIHRvIFwiY291bnRcIiwgYXMgaXQgd2VyZSxcbiAgICAvLyBiZWNhdXNlIGl0cyBvbmx5IHB1cnBvc2Ugd2FzIHNlbGVjdGluZyB0ZXh0LCBub3QgY2xpY2tpbmcgYnV0dG9ucy5cbiAgICAvL1xuICAgIC8vIFRvIGNhdGNoIHRoaXMsIGFueSB0aW1lIHRoZSB0ZXh0IHNlbGVjdGlvbiBpbmNsdWRlcyB1cyB3aGlsZSBpbiB0aGUgbWlkZGxlXG4gICAgLy8gb2YgYSBjbGljaywgdGhpcyBmbGFnIGlzIHNldCwgd2hpY2ggY2FuY2VscyB0aGUgYWN0aXZhdGlvbiBvZiBhIHByZXNzLlxuICAgIC8vIFRoZSBmbGFnIGlzIHJlc2V0IGFueSB0aW1lIHRoZSBzZWxlY3Rpb24gaXMgZW1wdHkgb3IgdGhlIGJ1dHRvbiBpc1xuICAgIC8vIG5vIGxvbmdlciBhY3RpdmUuXG4gICAgY29uc3QgW3RleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24sIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUdsb2JhbEhhbmRsZXIoZG9jdW1lbnQsIFwic2VsZWN0aW9uY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uKGFjdGl2ZSA9PSAwID8gZmFsc2UgOiBub2RlSGFzU2VsZWN0ZWRUZXh0KGdldEVsZW1lbnQoKSkpO1xuICAgIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUgPT0gMClcbiAgICAgICAgICAgIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24oZmFsc2UpO1xuICAgIH0sIFthY3RpdmUgPT0gMF0pO1xuICAgIGNvbnN0IG9uQWN0aXZlU3RhcnQgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoYSA9PiArK2EpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9uQWN0aXZlU3RvcCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShhID0+IE1hdGgubWF4KDAsIC0tYSkpO1xuICAgICAgICBpZiAodGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRBY3RpdmUoKSA8PSAwKSB7XG4gICAgICAgICAgICBoYW5kbGVQcmVzcyhlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2tTeW5jKSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgZWxlbWVudCBpcyBmb2N1c2VkIGhlcmUgYmVjYXVzZSBvZiBpT1MgU2FmYXJpLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEl0J3MgYWx3YXlzIGlPUyBTYWZhcmkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaU9TIFNhZmFyaSAodGVzdGVkIG9uIDEyKSBkb3ducmlnaHQgcmVmdXNlcyB0byBhbGxvdyBcbiAgICAgICAgICAgIC8vIGVsZW1lbnRzIHRvIGJlIG1hbnVhbGx5IGZvY3VzZWQgVU5MRVNTIGl0IGhhcHBlbnMgd2l0aGluXG4gICAgICAgICAgICAvLyBhbiBldmVudCBoYW5kbGVyIGxpa2UgdGhpcy4gIEl0IGFsc28gZG9lc24ndCBmb2N1c1xuICAgICAgICAgICAgLy8gYnV0dG9ucyBieSBkZWZhdWx0IHdoZW4gY2xpY2tlZCwgdGFwcGVkLCBldGMuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSWYgaXQgYmVjb21lcyBwcm9ibGVtYXRpYyB0aGF0IGJ1dHRvbi1saWtlcyBleHBsaWNpdGx5IGJlY29tZVxuICAgICAgICAgICAgLy8gZm9jdXNlZCB3aGVuIHRoZXkgYXJlIHByZXNzZWQsIHRoZW4gYW4gYWx0ZXJuYXRpdmUgc29sdXRpb24gZm9yXG4gICAgICAgICAgICAvLyB0aGUgcXVlc3Rpb24gb2YgXCJob3cgZG8gbWVudSBidXR0b25zIGtlZXAgdGhlaXIgbWVudXMgb3BlblwiXG4gICAgICAgICAgICAvLyBhbmQgb3RoZXIgZm9jdXMtcmVsYXRlZCBub25zZW5zZSBuZWVkcyB0byBiZSBmaWd1cmVkIG91dC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBGb3IgaU9TIFNhZmFyaS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgZWxlbWVudD8uZm9jdXMoKTtcbiAgICAgICAgICAgIC8vIFdoYXRldmVyIHRoZSBicm93c2VyIHdhcyBnb2luZyB0byBkbyB3aXRoIHRoaXMgZXZlbnQsXG4gICAgICAgICAgICAvLyBmb3JnZXQgaXQuIFdlJ3JlIHR1cm5pbmcgaXQgaW50byBhIFwicHJlc3NcIiBldmVudC5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIEFsc28gc3RvcCBhbnlvbmUgZWxzZSBmcm9tIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LFxuICAgICAgICAgICAgLy8gc2luY2Ugd2UncmUgZXhwbGljaXRseSBoYW5kbGluZyBpdC5cbiAgICAgICAgICAgIC8vIChOb3RhYmx5LCB0aGlzIGFsbG93cyBsYWJlbHMgdG8gd3JhcCBpbnB1dHMsIHdpdGggdGhlbVxuICAgICAgICAgICAgLy8gYm90aCBoYXZpbmcgcHJlc3MgZXZlbnQgaGFuZGxlcnMsIHdpdGhvdXQgZG91YmxlLWZpcmluZylcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBIYXB0aWMgZmVlZGJhY2sgZm9yIHRoaXMgcHJlc3MgZXZlbnRcbiAgICAgICAgICAgIHB1bHNlKCk7XG4gICAgICAgICAgICAvLyBBY3R1YWxseSBjYWxsIG91ciBoYW5kbGVyLlxuICAgICAgICAgICAgb25DbGlja1N5bmMoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICAvLyBTdG9wIGRvdWJsZSBjbGlja3MgZnJvbSBzZWxlY3RpbmcgdGV4dCBpbiBhbiBjb21wb25lbnQgdGhhdCdzICpzdXBwb3NlZCogdG8gYmUgYWN0aW5nIGxpa2UgYSBidXR0b24sXG4gICAgICAgIC8vIGJ1dCBhbHNvIGRvbid0IHByZXZlbnQgdGhlIHVzZXIgZnJvbSBzZWxlY3RpbmcgdGhhdCB0ZXh0IG1hbnVhbGx5IGlmIHRoZXkgcmVhbGx5IHdhbnQgdG9cbiAgICAgICAgLy8gKHdoaWNoIHVzZXItc2VsZWN0OiBub25lIHdvdWxkIGRvLCBidXQgY2FuY2VsbGluZyBhIGRvdWJsZSBjbGljayBvbiBtb3VzZURvd24gZG9lc24ndClcbiAgICAgICAgaWYgKGUuZGV0YWlsID4gMSlcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKVxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VVcCA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDAgJiYgYWN0aXZlID4gMClcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZSgwKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VPdXQgPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogb25CbHVyO1xuICAgIGNvbnN0IG9uS2V5RG93biA9IGV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkgJiYgZXhjbHVkZXMoXCJlbnRlclwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIiBcIiAmJiBvbkNsaWNrU3luYyAmJiAhZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSkge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgYWN0dWFsbHkgYWN0aXZhdGUgaXQgb24gYSBzcGFjZSBrZXlkb3duXG4gICAgICAgICAgICAvLyBidXQgd2UgZG8gcHJldmVudERlZmF1bHQgdG8gc3RvcCB0aGUgcGFnZSBmcm9tIHNjcm9sbGluZy5cbiAgICAgICAgICAgIG9uQWN0aXZlU3RhcnQoZSk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIiAmJiAhZXhjbHVkZXMoXCJlbnRlclwiLCBleGNsdWRlKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25LZXlVcCA9IGV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCIgXCIgJiYgIWV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkpXG4gICAgICAgICAgICBvbkFjdGl2ZVN0b3AoZSk7XG4gICAgfTtcbiAgICBjb25zdCBvbkNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5kZXRhaWwgPiAxKSB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChwcm9wcykgPT4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24sIG9uS2V5VXAsIG9uQmx1ciwgb25Nb3VzZURvd24sIG9uTW91c2VVcCwgb25Nb3VzZU91dCwgb25DbGljaywgLi4ueyBcImRhdGEtcHNldWRvLWFjdGl2ZVwiOiBhY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9IH0sIHByb3BzKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvbih7IHRhZywgcHJlc3NlZCwgb25QcmVzcyB9KSB7XG4gICAgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvblByb3BzKHsgXCJhcmlhLXByZXNzZWRcIjogYXJpYVByZXNzZWQsIHRhYkluZGV4LCByb2xlLCAuLi5wIH0pIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoKGUpID0+IG9uUHJlc3M/LihlbmhhbmNlRXZlbnQoZSwgeyBwcmVzc2VkOiBwcmVzc2VkID09IG51bGwgPyBudWxsIDogIXByZXNzZWQgfSkpLCB1bmRlZmluZWQpKHApO1xuICAgICAgICBjb25zdCBidXR0b25Qcm9wcyA9IHsgcm9sZSwgdGFiSW5kZXgsIFwiYXJpYS1wcmVzc2VkXCI6IGFyaWFQcmVzc2VkID8/IChwcmVzc2VkID09PSB0cnVlID8gXCJ0cnVlXCIgOiBwcmVzc2VkID09PSBmYWxzZSA/IFwiZmFsc2VcIiA6IHVuZGVmaW5lZCkgfTtcbiAgICAgICAgY29uc3QgZGl2UHJvcHMgPSB7IC4uLmJ1dHRvblByb3BzLCB0YWJJbmRleDogdGFiSW5kZXggPz8gMCwgcm9sZTogcm9sZSA/PyBcImJ1dHRvblwiIH07XG4gICAgICAgIGNvbnN0IGFuY2hvclByb3BzID0geyAuLi5kaXZQcm9wcyB9O1xuICAgICAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGJ1dHRvblByb3BzLCBwcm9wcyk7XG4gICAgICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGFuY2hvclByb3BzLCBwcm9wcyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGRpdlByb3BzLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlQXJpYUJ1dHRvblByb3BzXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1idXR0b24uanMubWFwIiwiaW1wb3J0IHsgdXNlQ2hpbGRGbGFnLCB1c2VDaGlsZE1hbmFnZXIsIHVzZUhhc0ZvY3VzLCB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uKHsgZXhwYW5kZWRJbmRleCwgc2V0RXhwYW5kZWRJbmRleCB9KSB7XG4gICAgY29uc3QgW2xhc3RGb2N1c2VkSW5kZXgsIHNldExhc3RGb2N1c2VkSW5kZXgsIGdldExhc3RGb2N1c2VkSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2N1cnJlbnRGb2N1c2VkSW5kZXgsIHNldEN1cnJlbnRGb2N1c2VkSW5kZXgsIGdldEN1cnJlbnRGb2N1c2VkSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgc3RhYmxlU2V0RXhwYW5kZWRJbmRleCA9IHVzZVN0YWJsZUNhbGxiYWNrKHNldEV4cGFuZGVkSW5kZXggPz8gKCgpID0+IHsgfSkpO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsIHVzZU1hbmFnZWRDaGlsZDogdXNlTWFuYWdlZENoaWxkU2VjdGlvbiB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KCgwKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleCgobWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLmxlbmd0aCAtIDEpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGkgPT4gKChpID8/IDApIC0gMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoaSA9PiAoKGkgPz8gMCkgKyAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLCBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBcImJsb2NrXCIsIGluZGV4OiBsYXN0Rm9jdXNlZEluZGV4ID8/IDAsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9QcmV2LCBuYXZpZ2F0ZVRvTmV4dCB9KTtcbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogZXhwYW5kZWRJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsXG4gICAgICAgIHNldENoaWxkRmxhZzogKGksIG9wZW4pID0+IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXT8uc2V0T3BlbkZyb21QYXJlbnQob3BlbiksXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IChtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0/LmdldE9wZW5Gcm9tUGFyZW50KCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogbGFzdEZvY3VzZWRJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsXG4gICAgICAgIHNldENoaWxkRmxhZzogKGksIG9wZW4pID0+IG9wZW4gJiYgbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldLmZvY3VzKCksXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb24gPSB1c2VDYWxsYmFjaygoYXJncykgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgICAgIGNvbnN0IFtvcGVuRnJvbVBhcmVudCwgc2V0T3BlbkZyb21QYXJlbnQsIGdldE9wZW5Gcm9tUGFyZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHJhbmRvbUlkOiBib2R5UmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZUJvZHlSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZEJvZHlJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLWFjY29yZGlvbi1zZWN0aW9uLWJvZHktXCIgfSk7XG4gICAgICAgIGNvbnN0IHsgcmFuZG9tSWQ6IGhlYWRSYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlSGVhZFJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtYWNjb3JkaW9uLXNlY3Rpb24taGVhZGVyLVwiIH0pO1xuICAgICAgICBsZXQgb3BlbiA9ICgoYXJncy5vcGVuID8/IG9wZW5Gcm9tUGFyZW50KSA/PyBudWxsKTtcbiAgICAgICAgLy8gVE9ETzogQ29udmVydCB0byB1c2UgdXNlTWFuYWdlZENoaWxkIHNvIHRoYXQgdGhpcyBob29rIFxuICAgICAgICAvLyBpcyBzdGFibGUgd2l0aG91dCAoZGlyZWN0bHkpIGRlcGVuZGluZyBvbiB0aGUgb3BlbiBzdGF0ZS5cbiAgICAgICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlcih7IHRhZyB9KSB7XG4gICAgICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZUhhc0ZvY3VzUHJvcHMsIGdldEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoe1xuICAgICAgICAgICAgICAgIG9uRm9jdXNlZENoYW5nZWQ6IHVzZUNhbGxiYWNrKChmb2N1c2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEZvY3VzZWRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRGb2N1c2VkSW5kZXgob2xkSW5kZXggPT4gb2xkSW5kZXggPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZm9jdXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGdldEN1cnJlbnRGb2N1c2VkSW5kZXgoKSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50KCk/LmZvY3VzKCk7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICBjb25zdCB7IHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGRTZWN0aW9uKHsgaW5kZXgsIG9wZW4sIHNldE9wZW5Gcm9tUGFyZW50LCBnZXRPcGVuRnJvbVBhcmVudCwgZm9jdXMgfSk7XG4gICAgICAgICAgICBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlclByb3BzKHsgW1wiYXJpYS1leHBhbmRlZFwiXTogYXJpYUV4cGFuZGVkLCBbXCJhcmlhLWRpc2FibGVkXCJdOiBhcmlhRGlzYWJsZWQsIC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGFyZ3MuaW5kZXgpOyB9O1xuICAgICAgICAgICAgICAgIGxldCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0T3BlbkZyb21QYXJlbnQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWJsZVNldEV4cGFuZGVkSW5kZXgobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWJsZVNldEV4cGFuZGVkSW5kZXgoYXJncy5pbmRleCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgcmV0QiA9IHVzZU1lcmdlZFByb3BzKCkoeyB0YWJJbmRleDogMCB9LCB1c2VQcmVzc0V2ZW50SGFuZGxlcnMob25DbGljaywgdW5kZWZpbmVkKShwcm9wcykpO1xuICAgICAgICAgICAgICAgIGxldCByZXQzID0gdXNlTWVyZ2VkUHJvcHMoKSh1c2VIZWFkUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHtcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IChhcmlhRXhwYW5kZWQgPz8gKCEhb3BlbikudG9TdHJpbmcoKSksXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiAoYXJpYURpc2FibGVkID8/IChvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQpKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udXNlSGFzRm9jdXNQcm9wcyh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyhyZXRCKSlcbiAgICAgICAgICAgICAgICB9KSksIHsgb25Gb2N1cyB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTGluZWFyTmF2aWdhdGlvblByb3BzKHJldDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgcmV0dXJuIHsgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyB9O1xuICAgICAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvblByb3BzLCBpbmRleCwgb3Blbl0pO1xuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHkgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHkoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHlQcm9wcyh7IHJvbGUsIC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0MSA9IHVzZVJlZmVyZW5jZWRIZWFkSWRQcm9wcyhcImFyaWEtbGFiZWxsZWRieVwiKSh7IHJvbGU6IHJvbGUgPz8gXCJyZWdpb25cIiwgLi4ucHJvcHMgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHJldDIgPSB1c2VCb2R5UmFuZG9tSWRQcm9wcyhyZXQxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5UHJvcHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4cGFuZGVkOiBvcGVuLFxuICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXIsXG4gICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHksXG4gICAgICAgIH07XG4gICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25Qcm9wc10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uLFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWNjb3JkaW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG4vKipcbiAqIEFkZHMgYW4gSUQgYW5kIFwiYXJpYS1sYWJlbGxlZGJ5XCIgZm9yIHR3byBlbGVtZW50cywgYW4gXCJpbnB1dFwiIGVsZW1lbnQgYW5kIGEgXCJsYWJlbFwiIGVsZW1lbnQuXG4gKlxuICogUmV0dXJucyB0aGUgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBob29rcyBpZiB5b3UgbmVlZCB0byBhbHNvIGFkZCBvdGhlciBJRC1yZWZlcmVuY2luZyBhdHRyaWJ1dGVzLCBsaWtlIGBmb3JgXG4gKlxuICogQHNlZSB1c2VJbnB1dExhYmVsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXgsIGJhY2t1cFRleHQgfSA9IHsgbGFiZWxQcmVmaXg6IFwibGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImlucHV0LVwiIH0pIHtcbiAgICBjb25zdCBbbGFiZWxFbGVtZW50LCBzZXRMYWJlbEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lucHV0RWxlbWVudCwgc2V0SW5wdXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0TGFiZWxFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUxhYmVsUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRMYWJlbEVsZW1lbnQgfSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRJbnB1dEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlSW5wdXRSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldElucHV0RWxlbWVudCB9KTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZUxhYmVsUmFuZG9tSWRQcm9wcywgaWQ6IGxhYmVsSWQsIHJhbmRvbUlkOiBsYWJlbFJhbmRvbUlkLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IGxhYmVsUHJlZml4IH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlSW5wdXRSYW5kb21JZFByb3BzLCBpZDogaW5wdXRJZCwgcmFuZG9tSWQ6IGlucHV0UmFuZG9tSWQsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogaW5wdXRQcmVmaXggfSk7XG4gICAgY29uc3QgbGFiZWxIYXNNb3VudGVkID0gISEobGFiZWxFbGVtZW50KTtcbiAgICBjb25zdCBpbnB1dEhhc01vdW50ZWQgPSAhIShpbnB1dEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzOiAocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxhYmVsUmFuZG9tSWRQcm9wcyh1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyhwcm9wcykpOyB9XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzOiAoeyBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieSwgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAodXNlSW5wdXRSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlSW5wdXRSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1sYWJlbFwiOiAoIWxhYmVsSGFzTW91bnRlZCA/IGJhY2t1cFRleHQgOiBhcmlhTGFiZWwpID8/IGFyaWFMYWJlbCB9LCBwcm9wcykpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtsYWJlbEhhc01vdW50ZWRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VHZW5lcmljTGFiZWxJbnB1dCxcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWwsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsXG4gICAgICAgIGxhYmVsSWQsXG4gICAgICAgIGlucHV0SWQsXG4gICAgICAgIGxhYmVsRWxlbWVudCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXG4gICAgICAgIGdldElucHV0RWxlbWVudCxcbiAgICB9O1xufVxuLyoqXG4gKiBIYW5kbGVzIHRoZSBhdHRyaWJ1dGVzIGBpZGAsIGBmb3JgLCBhbmQgYGFyaWEtbGFiZWxsZWRieWAgZm9yIHRvIHJlbGF0ZWQgZWxlbWVudHMuXG4gKlxuICogSXQncyBhc3N1bWVkIHRoYXQgdGhlIGxhYmVsIGlzIGFuIGBIVE1MTGFiZWxFbGVtZW50YCwgYW5kIHRoZSBpbnB1dCBpcyBzb21ldGhpbmcgZm9yIHdoaWNoXG4gKiB0aGUgYGZvcmAgYXR0cmlidXRlIGNhbiByZWZlcmVuY2UuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9ID0geyBsYWJlbFByZWZpeDogXCJsYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiaW5wdXQtXCIgfSkge1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBpbnB1dElkLCBsYWJlbElkLCBpbnB1dEVsZW1lbnQsIGdldElucHV0RWxlbWVudCwgbGFiZWxFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9KTtcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsTGFiZWwoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VJbnB1dExhYmVsTGFiZWxQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhGb3IgPSB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzKFwiZm9yXCIpKHByb3BzKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRob3V0Rm9yID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHModGFnID09IFwibGFiZWxcIiA/IHdpdGhGb3IgOiB3aXRob3V0Rm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsSW5wdXRdKTtcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsSW5wdXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZUlucHV0TGFiZWxJbnB1dFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMocHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUlucHV0TGFiZWxMYWJlbCxcbiAgICAgICAgdXNlSW5wdXRMYWJlbElucHV0LFxuICAgICAgICBsYWJlbElkLFxuICAgICAgICBpbnB1dElkLFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIGxhYmVsRWxlbWVudCxcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50LFxuICAgICAgICBnZXRMYWJlbEVsZW1lbnRcbiAgICB9O1xufVxuY29uc3QgaGFuZGxlc0lucHV0ID0gKHRhZywgbGFiZWxQb3NpdGlvbiwgd2hpY2gpID0+IHtcbiAgICBpZiAobGFiZWxQb3NpdGlvbiA9PT0gXCJzZXBhcmF0ZVwiKSB7XG4gICAgICAgIGlmICh3aGljaCA9PT0gXCJpbnB1dC1lbGVtZW50XCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAod2hpY2ggPT09IFwibGFiZWwtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIHRhZyAhPSBcImlucHV0XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhYmVsUG9zaXRpb24gPT09IFwid3JhcHBpbmdcIikge1xuICAgICAgICBpZiAod2hpY2ggPT09IFwiaW5wdXQtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAod2hpY2ggPT0gXCJsYWJlbC1lbGVtZW50XCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuLyoqXG4gKiBIYW5kbGVzIGxhYmVsIHR5cGUgKHdyYXBwaW5nIG9yIHNlcGFyYXRlKSBmb3IgY2hlY2tib3hlcywgcmFkaW9zLCBzd2l0Y2hlcywgZXRjLlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZSh7IGNoZWNrZWQsIGRpc2FibGVkLCBsYWJlbFBvc2l0aW9uLCBvbklucHV0LCByb2xlIH0pIHtcbiAgICBjb25zdCBzdGFibGVPbklucHV0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBvbklucHV0Py4oZSk7IH0pO1xuICAgIGNvbnN0IHsgaW5wdXRJZCwgbGFiZWxJZCwgdXNlSW5wdXRMYWJlbElucHV0OiB1c2VJTElucHV0LCB1c2VJbnB1dExhYmVsTGFiZWw6IHVzZUlMTGFiZWwsIGdldExhYmVsRWxlbWVudCwgZ2V0SW5wdXRFbGVtZW50IH0gPSB1c2VJbnB1dExhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1pbnB1dC1cIiB9KTtcbiAgICBjb25zdCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlSW5wdXRMYWJlbElucHV0UHJvcHM6IHVzZUlMSW5wdXRQcm9wcyB9ID0gdXNlSUxJbnB1dCgpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIC8vIG9uQ2xpY2sgYW5kIG9uQ2hhbmdlIGFyZSBhIGJpdCBtZXNzeSwgc28gd2UgbmVlZCB0b1xuICAgICAgICAvLyAqYWx3YXlzKiBtYWtlIHN1cmUgdGhhdCB0aGUgdmlzaWJsZSBzdGF0ZSBpcyBjb3JyZWN0XG4gICAgICAgIC8vIGFmdGVyIGFsbCB0aGUgZXZlbnQgZHVzdCBzZXR0bGVzLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMjc0NSxcbiAgICAgICAgLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzE4OTkjaXNzdWVjb21tZW50LTUyNTY5MDE5NFxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHRhZyA9PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFnLCBjaGVja2VkXSk7XG4gICAgICAgIHJldHVybiB7IGdldElucHV0RWxlbWVudDogZ2V0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMgfTtcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XG4gICAgICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIENocm9tZSB3b24ndCBmaXJlIG9uSW5wdXQgZXZlbnRzIGZvciByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRhYkluZGV4PS0xPz9cbiAgICAgICAgICAgIC8vIE5lZWRzIGludmVzdGlnYXRpbmcsIGJ1dCBvbklucHV0IHdvcmtzIGZpbmUgaW4gRmlyZWZveFxuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKGRpc2FibGVkIHx8ICFoYW5kbGVzSW5wdXQodGFnLCBsYWJlbFBvc2l0aW9uLCBcImlucHV0LWVsZW1lbnRcIikgPyB1bmRlZmluZWQgOiBzdGFibGVPbklucHV0LCB1bmRlZmluZWQpKHt9KTtcbiAgICAgICAgICAgIGlmICh0YWcgPT0gXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHByb3BzLm9uSW5wdXQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcHJvcHMgPSB1c2VSZWZFbGVtZW50UHJvcHModXNlSUxJbnB1dFByb3BzKHByb3BzKSk7XG4gICAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PSBcIndyYXBwaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHRoZSB3cmFwcGVkIGxhYmVsIGhhbmRsZXMgYWxsIGludGVyYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGlzIGVsZW1lbnQgY2FuJ3QgYmUgaW50ZXJhY3RlZCB3aXRoXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiBpdCdzIGFuIGlucHV0IGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcHJvcHMuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgcHJvcHMub25Gb2N1cyA9IGUgPT4gZ2V0TGFiZWxFbGVtZW50KCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0YWcgPT09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnJvbGUgPSByb2xlO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1jaGVja2VkXCJdID0gY2hlY2tlZCA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBkaXNhYmxlZC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgbGFiZWwgY2xpY2tzIGNhbid0IGFmZmVjdCB0aGUgY2hlY2tib3ggd2hpbGUgaXQncyBkaXNhYmxlZFxuICAgICAgICAgICAgcHJvcHMub25DbGljayA9IGRpc2FibGVkID8gKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfSkgOiBwcm9wcy5vbkNsaWNrO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkocDAsIHByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIFt1c2VJTElucHV0LCByb2xlLCBsYWJlbFBvc2l0aW9uLCBkaXNhYmxlZCwgY2hlY2tlZF0pO1xuICAgIGNvbnN0IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VJbnB1dExhYmVsTGFiZWxQcm9wczogdXNlSUxMYWJlbFByb3BzIH0gPSB1c2VJTExhYmVsKHsgdGFnIH0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhkaXNhYmxlZCB8fCAhaGFuZGxlc0lucHV0KHRhZywgbGFiZWxQb3NpdGlvbiwgXCJsYWJlbC1lbGVtZW50XCIpID8gdW5kZWZpbmVkIDogc3RhYmxlT25JbnB1dCwgdW5kZWZpbmVkKSh7fSk7XG4gICAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PSBcIndyYXBwaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IHJvbGU7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gZGlzYWJsZWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtY2hlY2tlZFwiXSA9IGNoZWNrZWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBvbmUgY2FzZSB3aGVyZSB0aGVyZSdzIGFsbW9zdCBub3RoaW5nIHRvIGRvXG4gICAgICAgICAgICAgICAgLy8gVGhlIG1vc3Qgbm9ybWFsIGNhc2Ugd2hlcmUgZXZlcnl0aGluZyBhY3RzIGFjY29yZGluZyBub3JtYWwgSFRNTCBtZWNoYW5pY3MuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBKdXN0IG1ha2Ugc3VyZSB0aGF0IGxhYmVsIGNsaWNrcyBjYW4ndCBhZmZlY3QgdGhlIGNoZWNrYm94IHdoaWxlIGl0J3MgZGlzYWJsZWRcbiAgICAgICAgICAgIG5ld1Byb3BzLm9uQ2xpY2sgPSBkaXNhYmxlZCA/ICgoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH0pIDogbmV3UHJvcHMub25DbGljaztcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCB1c2VJTExhYmVsUHJvcHMocDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyB9O1xuICAgIH0sIFt1c2VJTExhYmVsLCBkaXNhYmxlZCwgY2hlY2tlZCwgcm9sZSwgbGFiZWxQb3NpdGlvbl0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCxcbiAgICAgICAgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50LFxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXG4gICAgICAgIGdldElucHV0RWxlbWVudFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGFiZWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlQ2hlY2tib3hMaWtlIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUNoZWNrYm94KHsgbGFiZWxQb3NpdGlvbiwgY2hlY2tlZCwgb25JbnB1dCwgZGlzYWJsZWQgfSkge1xuICAgIGNvbnN0IG9uSW5wdXRFbmhhbmNlZCA9IChlKSA9PiBvbklucHV0Py4oZW5oYW5jZUV2ZW50KGUsIHsgY2hlY2tlZDogIWNoZWNrZWQgfSkpO1xuICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50IH0gPSB1c2VDaGVja2JveExpa2UoeyBjaGVja2VkOiAhIWNoZWNrZWQsIGxhYmVsUG9zaXRpb24sIHJvbGU6IFwiY2hlY2tib3hcIiwgZGlzYWJsZWQsIG9uSW5wdXQ6IG9uSW5wdXRFbmhhbmNlZCB9KTtcbiAgICBjb25zdCB1c2VDaGVja2JveElucHV0RWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50KHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyBnZXRJbnB1dEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzIH0gPSB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQoeyB0YWcgfSk7XG4gICAgICAgIGNvbnN0IGlzTWl4ZWQgPSAoY2hlY2tlZCA9PSBcIm1peGVkXCIpO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZ2V0SW5wdXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoaW5wdXRFbGVtZW50ICYmIHRhZyA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBpc01peGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbaXNNaXhlZCwgdGFnXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94SW5wdXRFbGVtZW50UHJvcHMgfTtcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzKHAwKTtcbiAgICAgICAgICAgIHByb3BzLmNoZWNrZWQgPz89ICEhY2hlY2tlZDtcbiAgICAgICAgICAgIGlmICh0YWcgPT0gXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHByb3BzLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LCBjaGVja2VkLCBsYWJlbFBvc2l0aW9uLCBkaXNhYmxlZF0pO1xuICAgIGNvbnN0IHVzZUNoZWNrYm94TGFiZWxFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzIH0gPSB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQoeyB0YWcgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50UHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRQcm9wcyB9O1xuICAgIH0sIFt1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQsIGRpc2FibGVkLCBsYWJlbFBvc2l0aW9uXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQsXG4gICAgICAgIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGVja2JveC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEV2ZW50RGV0YWlsLCBlbmhhbmNlRXZlbnQgfSBmcm9tIFwiLi9wcm9wc1wiO1xuLyoqXG4gKlxuICpcbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja2JveEdyb3VwKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIHNob3VsZEZvY3VzT25DaGFuZ2UsIG9uVXBkYXRlQ2hpbGRyZW46IG9uVXBkYXRlQ2hpbGRyZW5VbnN0YWJsZSB9KSB7XG4gICAgY29uc3Qgb25VcGRhdGVDaGlsZHJlbiA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uVXBkYXRlQ2hpbGRyZW5VbnN0YWJsZSk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgc2hvdWxkRm9jdXNPbkNoYW5nZSB9KTtcbiAgICAvL2NvbnN0IFt1bmNoZWNrZWRDb3VudCwgc2V0VW5oZWNrZWRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY2hlY2tlZENvdW50LCBzZXRDaGVja2VkQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgY2hlY2tlZEluZGljZXMgPSB1c2VSZWYobmV3IFNldCgpKTtcbiAgICAvL2NvbnN0IFtzZWxmSXNDaGVja2VkLCBzZXRTZWxmSXNDaGVja2VkLCBnZXRTZWxmSXNDaGVja2VkXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBcIm1peGVkXCI+KGZhbHNlKTtcbiAgICBjb25zdCBnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2UgPD0gMCA/IGZhbHNlIDogcGVyY2VudGFnZSA+PSAxID8gdHJ1ZSA6IFwibWl4ZWRcIjtcbiAgICB9LCBbY2hlY2tlZENvdW50LCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoXSk7XG4gICAgY29uc3QgZ2V0U2VsZklzQ2hlY2tlZFN0YWJsZSA9IHVzZVN0YWJsZUNhbGxiYWNrKGdldFNlbGZJc0NoZWNrZWRVbnN0YWJsZSk7XG4gICAgLy8gSWYgdGhlIHVzZXIgaGFzIGNoYW5nZWQgdGhlIHBhcmVudCBjaGVja2JveCdzIHZhbHVlLCB0aGVuIHRoaXMgcmVmIGhvbGRzIGEgbWVtb3J5IG9mIHdoYXQgdmFsdWVzIHdlcmUgaGVsZCBiZWZvcmUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpdCdzIG51bGwgd2hlbiB0aGUgbGFzdCBpbnB1dCB3YXMgZnJvbSBhIGNoaWxkIGNoZWNrYm94LiBcbiAgICBjb25zdCBzYXZlZENoZWNrZWRWYWx1ZXMgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgb25DaGVja2JveEdyb3VwUGFyZW50SW5wdXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGZJc0NoZWNrZWQgPSBnZXRTZWxmSXNDaGVja2VkU3RhYmxlKCk7XG4gICAgICAgIGlmIChzZWxmSXNDaGVja2VkID09PSB0cnVlIHx8IChzZWxmSXNDaGVja2VkID09PSBmYWxzZSAmJiBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA9PSBudWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiBmYWxzZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZklzQ2hlY2tlZCA9PT0gXCJtaXhlZFwiKSB7XG4gICAgICAgICAgICBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50LnNldChjaGlsZC5pbmRleCwgY2hpbGQuZ2V0Q2hlY2tlZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogdHJ1ZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID8/IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIGNoaWxkIElEcywgYW5kIGFueSB0aW1lIGFueSBvZiB0aGVtIGNoYW5nZSwgXG4gICAgLy8gZ2VuZXJhdGUgYSBuZXcgc3RyaW5nIHdpdGggYWxsIG9mIHRoZW0gY29uY2F0ZW5hdGVkIHRvZ2V0aGVyXG4gICAgLy8gKGJ1dCBvbmx5IG9uY2UgcGVyIHJlbmRlcik7XG4gICAgY29uc3QgYWxsSWRzID0gdXNlUmVmKG5ldyBTZXQoKSk7XG4gICAgY29uc3QgW2FyaWFDb250cm9scywgc2V0QXJpYUNvbnRyb2xzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt1cGRhdGVJbmRleCwgc2V0SWRVcGRhdGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBub3RpZnlDaGVja2VkID0gdXNlQ2FsbGJhY2soKGluZGV4LCBjaGVja2VkKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuaGFzKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHNldENoZWNrZWRDb3VudChjID0+IChjICsgMSkpO1xuICAgICAgICAgICAgICAgIGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuYWRkKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjaGVja2VkSW5kaWNlcy5jdXJyZW50LmhhcyhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyAtIDEpKTtcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbc2V0Q2hlY2tlZENvdW50LCBjaGVja2VkSW5kaWNlc10pO1xuICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBzZXRTZWxmSXNDaGVja2VkKHBlcmNlbnRhZ2UgPD0gMCA/IGZhbHNlIDogcGVyY2VudGFnZSA+PSAxID8gdHJ1ZSA6IFwibWl4ZWRcIilcbiAgICB9LCBbc2V0U2VsZklzQ2hlY2tlZCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgY2hlY2tlZENvdW50XSk7Ki9cbiAgICBjb25zdCB1c2VDaGVja2JveEdyb3VwUGFyZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtY29udHJvbHNcIjogYXJpYUNvbnRyb2xzIH0sIHByb3BzKTtcbiAgICB9LCBbYXJpYUNvbnRyb2xzXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0QXJpYUNvbnRyb2xzKEFycmF5LmZyb20oYWxsSWRzLmN1cnJlbnQpLmpvaW4oXCIgXCIpKTtcbiAgICB9LCBbdXBkYXRlSW5kZXhdKTtcbiAgICBjb25zdCB1c2VDaGVja2JveEdyb3VwQ2hpbGQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyBpbmRleCwgdGV4dCwgY2hlY2tlZCwgaWQsIC4uLnJlc3QgfSkge1xuICAgICAgICBjb25zdCBnZXRDaGVja2VkID0gdXNlU3RhYmxlR2V0dGVyKGNoZWNrZWQpO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuYWRkKGlkKTtcbiAgICAgICAgICAgIHNldElkVXBkYXRlSW5kZXgoaSA9PiArK2kpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGxJZHMuY3VycmVudC5kZWxldGUoaWQpO1xuICAgICAgICAgICAgICAgIHNldElkVXBkYXRlSW5kZXgoaSA9PiArK2kpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW2lkXSk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBub3RpZnlDaGVja2VkKGluZGV4LCBjaGVja2VkKTtcbiAgICAgICAgfSwgW2luZGV4LCBjaGVja2VkXSk7XG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBpbmRleCwgdGV4dCwgaWQsIGdldENoZWNrZWQsIC4uLnJlc3QgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWJiYWJsZSxcbiAgICAgICAgICAgIHVzZUNoZWNrYm94R3JvdXBDaGlsZFByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSkpLCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzXSlcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbm90aWZ5Q2hlY2tlZCwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1hbmFnZWRDaGVja2JveGVzOiBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIHVzZUNoZWNrYm94R3JvdXBDaGlsZCxcbiAgICAgICAgdXNlQ2hlY2tib3hHcm91cFBhcmVudFByb3BzLFxuICAgICAgICBwYXJlbnRJc0NoZWNrZWQ6IGdldFNlbGZJc0NoZWNrZWRVbnN0YWJsZSgpLFxuICAgICAgICBwYXJlbnRQZXJjZW50Q2hlY2tlZDogKGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgpLFxuICAgICAgICBvbkNoZWNrYm94R3JvdXBQYXJlbnRJbnB1dCxcbiAgICAgICAgdGFiYmFibGVJbmRleCxcbiAgICAgICAgZm9jdXM6IGZvY3VzQ3VycmVudCxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGVja2JveC1ncm91cC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50LCB1c2VGb2N1c1RyYXAsIHVzZU1lcmdlZFByb3BzLCB1c2VQYXNzaXZlU3RhdGUsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciBhIG1vZGFsLWxpa2Ugc29mdC1kaXNtaXNzIGludGVyYWN0aW9uLlxuICpcbiAqIFRoYXQgaXMsIGFueSBjbGlja3Mgb3IgdGFwcyBvdXRzaWRlIG9mIHRoZSBnaXZlbiBjb21wb25lbnQsXG4gKiBvciBhbnkgdGltZSB0aGUgRXNjYXBlIGtleSBpcyBwcmVzc2VkIHdpdGhpbiB0aGUgY29tcG9uZW50LFxuICogKHdpdGggdmFyaW91cyBicm93c2VyIG9kZGl0aWVzIHJlZ2FyZGluZyBjbGlja3Mgb24gYmxhbmsgb3IgaW5lcnQgYXJlYXMgaGFuZGxlZClcbiAqIHRoZSBjb21wb25lbnQgd2lsbCByZXF1ZXN0IHRvIGNsb3NlIGl0c2VsZi5cbiAqXG4gKiBPZiBjb3Vyc2UsIGlmIHlvdSBkb24ndCBkbyBhbnl0aGluZyBpbiB0aGUgYG9uQ2xvc2VgIGZ1bmN0aW9uLFxuICogaXQgd29uJ3QgYmUgYSBzb2Z0IGRpc21pc3MgYW55bW9yZS5cbiAqXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU29mdERpc21pc3MoeyBvbkNsb3NlLCBnZXRFbGVtZW50cyB9KSB7XG4gICAgY29uc3Qgc3RhYmxlT25DbG9zZSA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uQ2xvc2UpO1xuICAgIGNvbnN0IHN0YWJsZUdldEVsZW1lbnRzID0gdXNlU3RhYmxlQ2FsbGJhY2soZ2V0RWxlbWVudHMpO1xuICAgIGNvbnN0IGdldE9wZW4gPSB1c2VTdGFibGVHZXR0ZXIob3Blbik7XG4gICAgY29uc3Qgb25CYWNrZHJvcENsaWNrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gb25CYWNrZHJvcENsaWNrKGUpIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBnZXRFbGVtZW50KCk/Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50Py5kZWZhdWx0VmlldztcbiAgICAgICAgLy8gQmFzaWNhbGx5LCBcIndhcyB0aGlzIGV2ZW50IGZpcmVkIG9uIHRoZSByb290LW1vc3QgZWxlbWVudCwgb3IgYXQgbGVhc3QgYW4gZWxlbWVudCBub3QgY29udGFpbmVkIGJ5IHRoZSBtb2RhbD9cIlxuICAgICAgICAvLyBFaXRoZXIgY291bGQgYmUgaG93IHRoZSBicm93c2VyIGhhbmRsZXMgdGhlc2Ugc29ydHMgb2YgXCJpbnRlcmFjdGluZyB3aXRoIG5vdGhpbmdcIiBldmVudHMuXG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBzdGFibGVPbkNsb3NlKFwiYmFja2Ryb3BcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsZW1lbnRzID0gc3RhYmxlR2V0RWxlbWVudHMoKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzICYmIGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XG4gICAgICAgICAgICBsZXQgZm91bmRJbnNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZEluc2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmb3VuZEluc2lkZUNsaWNrKVxuICAgICAgICAgICAgICAgIG9uQ2xvc2UoXCJiYWNrZHJvcFwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IHVzZUFjdGl2ZUVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCh7XG4gICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChuZXdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsaWRGb2N1c2FibGVFbGVtZW50cyA9IHN0YWJsZUdldEVsZW1lbnRzKCk7XG4gICAgICAgICAgICBpZiAodmFsaWRGb2N1c2FibGVFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWxpZEZvY3VzYWJsZUVsZW1lbnRzKSlcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRGb2N1c2FibGVFbGVtZW50cyA9IFt2YWxpZEZvY3VzYWJsZUVsZW1lbnRzXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmb2N1c2FibGUgb2YgdmFsaWRGb2N1c2FibGVFbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNhYmxlPy5jb250YWlucyhuZXdFbGVtZW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsb3NlKFwibG9zdC1mb2N1c1wiKTtcbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGU/Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudD8uZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAvLyBTaW5jZSBldmVyeXRoaW5nIGVsc2UgaXMgaW5lcnQsIHdlIGxpc3RlbiBmb3IgY2FwdHVyZWQgY2xpY2tzIG9uIHRoZSB3aW5kb3dcbiAgICAgICAgICAgIC8vICh3ZSBkb24ndCB1c2Ugb25DbGljayBzaW5jZSB0aGF0IGRvZXNuJ3QgZmlyZSB3aGVuIGNsaWNrZWQgb24gZW1wdHkvaW5lcnQgYXJlYXMpXG4gICAgICAgICAgICAvLyBOb3RlOiBXZSBuZWVkIGEgKnNlcGFyYXRlKiB0b3VjaCBldmVudCBvbiBtb2JpbGUgU2FmYXJpLCBiZWNhdXNlXG4gICAgICAgICAgICAvLyBpdCBkb2Vzbid0IGxldCBjbGljayBldmVudHMgYnViYmxlIG9yIGJlIGNhcHR1cmVkIGZyb20gdHJhZGl0aW9uYWxseSBub24taW50ZXJhY3RpdmUgZWxlbWVudHMsXG4gICAgICAgICAgICAvLyBidXQgdG91Y2ggZXZlbnRzIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICAgICAgICBjb25zdCBtb3VzZURvd24gPSAoZSkgPT4geyBpZiAoZ2V0T3BlbigpKVxuICAgICAgICAgICAgICAgIG9uQmFja2Ryb3BDbGljayhlKTsgfTtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoU3RhcnQgPSAoZSkgPT4geyBpZiAoZ2V0T3BlbigpKVxuICAgICAgICAgICAgICAgIG9uQmFja2Ryb3BDbGljayhlKTsgfTtcbiAgICAgICAgICAgIGNvbnN0IGtleURvd24gPSAoZSkgPT4geyBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICBzdGFibGVPbkNsb3NlKFwiZXNjYXBlXCIpO1xuICAgICAgICAgICAgfSB9O1xuICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93biwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0LCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd24pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VEb3duKTtcbiAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXSlcbiAgICB9KTtcbiAgICByZXR1cm4geyB1c2VTb2Z0RGlzbWlzc1Byb3BzOiB1c2VDYWxsYmFjayhwcm9wcyA9PiB1c2VBY3RpdmVFbGVtZW50UHJvcHModXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSksIFt1c2VBY3RpdmVFbGVtZW50UHJvcHMsIHVzZVJlZkVsZW1lbnRQcm9wc10pIH07XG59XG4vKipcbiAqIEEgZ2VuZXJpYyBtb2RhbCBob29rLCB1c2VkIGJ5IG1vZGFsIGRpYWxvZ3MsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCBieSBhbnl0aGluZyB0aGF0J3MgbW9kYWwgd2l0aCBhIGJhY2tkcm9wLlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGFsKHsgb3Blbiwgb25DbG9zZSB9KSB7XG4gICAgY29uc3Qgc3RhYmxlT25DbG9zZSA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uQ2xvc2UpO1xuICAgIGNvbnN0IFttb2RhbERlc2NyaWJlZEJ5Qm9keSwgc2V0TW9kYWxEZXNjcmliZWRCeUJvZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUhpZGVTY3JvbGwob3Blbik7XG4gICAgY29uc3QgeyBpZDogbW9kYWxJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlTW9kYWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlTW9kYWxSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtXCIgfSk7XG4gICAgY29uc3QgeyBpZDogYm9keUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VCb2R5SWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZUJvZHlSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtYm9keS1cIiB9KTtcbiAgICBjb25zdCB7IGlkOiB0aXRsZUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VUaXRsZUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VUaXRsZVJlZmVyZW5jaW5nSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tb2RhbC10aXRsZS1cIiB9KTtcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wczogdXNlTW9kYWxSZWZFbGVtZW50LCBnZXRFbGVtZW50OiBnZXRNb2RhbEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgIGNvbnN0IHsgdXNlU29mdERpc21pc3NQcm9wcyB9ID0gdXNlU29mdERpc21pc3MoeyBvbkNsb3NlOiBzdGFibGVPbkNsb3NlLCBnZXRFbGVtZW50czogZ2V0TW9kYWxFbGVtZW50IH0pO1xuICAgIGNvbnN0IHVzZU1vZGFsQmFja2Ryb3AgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbEJhY2tkcm9wKCkge1xuICAgICAgICBmdW5jdGlvbiB1c2VNb2RhbEJhY2tkcm9wUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyVXA6ICgpID0+IHN0YWJsZU9uQ2xvc2UoXCJiYWNrZHJvcFwiKSB9LCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxCYWNrZHJvcFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZU1vZGFsUHJvcHMgPSBmdW5jdGlvbiAoeyBcImFyaWEtbW9kYWxcIjogYXJpYU1vZGFsLCByb2xlLCAuLi5wMCB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlRm9jdXNUcmFwUHJvcHMgfSA9IHVzZUZvY3VzVHJhcCh7IHRyYXBBY3RpdmU6IG9wZW4gfSk7XG4gICAgICAgIGNvbnN0IHAxID0gdXNlVGl0bGVSZWZlcmVuY2luZ0lkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikocDApO1xuICAgICAgICBjb25zdCBwMiA9IHVzZU1vZGFsSWRQcm9wcyhwMSk7XG4gICAgICAgIGNvbnN0IHBGaW5hbCA9IHVzZUJvZHlSZWZlcmVuY2luZ0lkUHJvcHMoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpKHAyKTtcbiAgICAgICAgcmV0dXJuIHVzZUZvY3VzVHJhcFByb3BzKHVzZVNvZnREaXNtaXNzUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh1c2VNb2RhbFJlZkVsZW1lbnQoeyByb2xlOiBcImRpYWxvZ1wiIH0pLCBtb2RhbERlc2NyaWJlZEJ5Qm9keSA/IHBGaW5hbCA6IHAyKSkpO1xuICAgIH07XG4gICAgY29uc3QgdXNlTW9kYWxUaXRsZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsVGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHVzZU1vZGFsVGl0bGVQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHVzZVRpdGxlSWRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsVGl0bGVQcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VNb2RhbEJvZHkgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbEJvZHkoeyBkZXNjcmlwdGl2ZSB9KSB7XG4gICAgICAgIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5KGRlc2NyaXB0aXZlKTtcbiAgICAgICAgY29uc3QgdXNlTW9kYWxCb2R5UHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VCb2R5SWRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsQm9keVByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1vZGFsUHJvcHMsXG4gICAgICAgIHVzZU1vZGFsVGl0bGUsXG4gICAgICAgIHVzZU1vZGFsQm9keSxcbiAgICAgICAgdXNlTW9kYWxCYWNrZHJvcFxuICAgIH07XG59XG4vKipcbiAqIEFsbG93cyBmb3IgaGlkaW5nIHRoZSBzY3JvbGwgYmFyIG9mIHRoZSByb290IEhUTUwgZWxlbWVudFxuICogd2l0aG91dCBzaGlmdGluZyB0aGUgbGF5b3V0IG9mIHRoZSBwYWdlIG1vcmUgdGhhbiBhZGRpbmcgYSBmb3cgcGl4ZWxzXG4gKiBvZiBwYWRkaW5nIHRvIHRoZSByb290IGVsZW1lbnQgaWYgbmVjZXNzYXJ5LlxuICogQHBhcmFtIGhpZGVTY3JvbGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUhpZGVTY3JvbGwoaGlkZVNjcm9sbCkge1xuICAgIGNvbnN0IFtnZXRTY3JvbGxiYXJXaWR0aCwgc2V0U2Nyb2xsYmFyV2lkdGhdID0gdXNlUGFzc2l2ZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtnZXRTY3JvbGxiYXJIZWlnaHQsIHNldFNjcm9sbGJhckhlaWdodF0gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGhpZGVTY3JvbGwpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gc2Nyb2xsaW5nIGlzIHJlc3VtZWQsIHdlJ2xsIG5lZWQgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgc2Nyb2xsIHBvc2l0aW9uc1xuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBrZWVwIHRoaXMgaW5mb3JtYXRpb24gYXJvdW5kXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIC8vIE1lYXN1cmUgdGhlIHdpZHRoIG9mIHRoZSBwYWdlIChtaW51cyB0aGUgc2Nyb2xsYmFyKVxuICAgICAgICAgICAgbGV0IHdpZHRoV2l0aFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgICAgICAgICAgIGxldCBoZWlnaHRXaXRoU2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIC8vIEFwcGx5IGEgY2xhc3MgdGhhdCBoaWRlcyB0aGUgc2Nyb2xsYmFyLlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkb2N1bWVudC1zY3JvbGwtaGlkZGVuXCIpO1xuICAgICAgICAgICAgLy8gSW4gY2FzZSBtdWx0aXBsZSB0aGluZ3MgYXJlIGxvY2tpbmcgc2Nyb2xsLCBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGFyZSBkb2luZyB0aGF0XG4gICAgICAgICAgICAvLyAoanVzdCBhZGQgMSBvbiBlbmFibGUsIHN1YnRyYWN0IDEgb24gZGlzYWJsZSlcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID0gKCsoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gfHwgXCIwXCIpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIC8vIE1lYXN1cmUgdGhlIG5ldyB3aWR0aCB3aXRob3V0IGEgc2Nyb2xsYmFyIFxuICAgICAgICAgICAgLy8gc28gd2UgY2FuIHRha2UgdGhlIGRpZmZlcmVuY2UgYXMgdGhlIHNjcm9sbGJhciB3aWR0aC5cbiAgICAgICAgICAgIGxldCB3aWR0aFdpdGhvdXRTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0V2l0aG91dFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsYmFyV2lkdGggPSAod2lkdGhXaXRob3V0U2Nyb2xsQmFyIC0gd2lkdGhXaXRoU2Nyb2xsQmFyKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxiYXJIZWlnaHQgPSAoaGVpZ2h0V2l0aG91dFNjcm9sbEJhciAtIGhlaWdodFdpdGhTY3JvbGxCYXIpO1xuICAgICAgICAgICAgLy8gRmFpbHNhZmUgLS0gaWYgdGhpcyBtZWFzdXJpbmcgdHJpY2sgZG9lcyBzb21ldGhpbmcgdW5leHBlY3RlZCwganVzdCBpZ25vcmUgaXRcbiAgICAgICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aCA+IDgwKVxuICAgICAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoID0gMDtcbiAgICAgICAgICAgIGlmIChzY3JvbGxiYXJIZWlnaHQgPiA4MClcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJIZWlnaHQgPSAwO1xuICAgICAgICAgICAgLy8gTWFrZSBvdXIgbWVhc3VyZW1lbnRzIGF2YWlsYWJsZSBhcyBDU1MgcHJvcGVydGllcyBmb3IgZ2VuZXJhbCB1c2VcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxiYXItd2lkdGhcIiwgYCR7c2Nyb2xsYmFyV2lkdGh9cHhgKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxiYXItaGVpZ2h0XCIsIGAke3Njcm9sbGJhckhlaWdodH1weGApO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbHN0b3AtdG9wXCIsIGAke29yaWdpbmFsU2Nyb2xsVG9wfXB4YCk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsc3RvcC1sZWZ0XCIsIGAke29yaWdpbmFsU2Nyb2xsTGVmdH1weGApO1xuICAgICAgICAgICAgc2V0U2Nyb2xsYmFyV2lkdGgoc2Nyb2xsYmFyV2lkdGgpO1xuICAgICAgICAgICAgc2V0U2Nyb2xsYmFySGVpZ2h0KHNjcm9sbGJhckhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFVuZG8gYWxsIHRoZSB0aGluZ3Mgd2UganVzdCBkaWRcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9ICgrKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdIHx8IFwiMFwiKSAtIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIHdlcmUgdGhlIGxhc3Qgc2Nyb2xsLWxvY2tpbmcgdGhpbmcgdG8gc3RvcCwgdGhlbiByZW1vdmUgdGhlIGNsYXNzIHRoYXQgc3RvcHMgc2Nyb2xsaW5nLlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zY3JvbGwtaGlkZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFsc28sIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkbyB0aGlzIGJ5IGZvcmNpbmcgdGhlIHNjcm9sbCBiZWhhdmlvciB0byBub3QgYmUgc21vb3RoXG4gICAgICAgICAgICAgICAgICAgIC8vIChpdCdzIGluc3RhbnQgaWYgbm90aGluZyBpcyBzZXQgdG8gc21vb3RoLCBodHRwczovL3d3dy53My5vcmcvVFIvY3Nzb20tdmlldy8jc2Nyb2xsaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nLCB0aGVuIHJlc3RvcmluZyB0aGUgb3JpZ2luYWwgc2Nyb2xsIGJlaGF2aW9yIFxuICAgICAgICAgICAgICAgICAgICAvLyAod2hpY2ggd2FzIHByb2JhYmx5IGFscmVhZHkgYXV0byBhbnl3YXksIGJ1dCBqdXN0IHRvIGJlIHNhZmUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsQmVoYXZpb3IgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3I7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG8oeyB0b3A6IG9yaWdpbmFsU2Nyb2xsVG9wLCBsZWZ0OiBvcmlnaW5hbFNjcm9sbExlZnQsIGJlaGF2aW9yOiBcImF1dG9cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gb3JpZ2luYWxTY3JvbGxCZWhhdmlvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW2hpZGVTY3JvbGxdKTtcbiAgICByZXR1cm4geyBnZXRTY3JvbGxiYXJXaWR0aCwgZ2V0U2Nyb2xsYmFySGVpZ2h0IH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbW9kYWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gXCIuL3VzZS1tb2RhbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFEaWFsb2coeyBvcGVuLCBvbkNsb3NlIH0pIHtcbiAgICAvLyBUT0RPOiBEaWZmZXJlbmNlcyBiZXR3ZWVuIGRpYWxvZyBhbmQgbW9kYWwgZ28gaGVyZSwgcHJlc3VtYWJseS5cbiAgICAvLyBOb24tbW9kYWwgZGlhbG9ncyBuZWVkIHRvIGJlIGFibGUgdG8gYmUgcmVwb3NpdGlvbmVkLCBldGMuXG4gICAgY29uc3QgeyB1c2VNb2RhbEJhY2tkcm9wLCB1c2VNb2RhbEJvZHksIHVzZU1vZGFsUHJvcHMsIHVzZU1vZGFsVGl0bGUgfSA9IHVzZU1vZGFsKHsgb3Blbiwgb25DbG9zZSB9KTtcbiAgICBjb25zdCB1c2VEaWFsb2dCYWNrZHJvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfSA9IHVzZU1vZGFsQmFja2Ryb3AoKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nQmFja2Ryb3BQcm9wczogdXNlTW9kYWxCYWNrZHJvcFByb3BzIH07XG4gICAgfSwgW3VzZU1vZGFsQmFja2Ryb3BdKTtcbiAgICBjb25zdCB1c2VEaWFsb2dCb2R5ID0gdXNlQ2FsbGJhY2soKHsgZGVzY3JpcHRpdmUgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1vZGFsQm9keVByb3BzIH0gPSB1c2VNb2RhbEJvZHkoeyBkZXNjcmlwdGl2ZSB9KTtcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nQm9keVByb3BzOiB1c2VNb2RhbEJvZHlQcm9wcyB9O1xuICAgIH0sIFt1c2VNb2RhbEJhY2tkcm9wXSk7XG4gICAgY29uc3QgdXNlRGlhbG9nUHJvcHMgPSB1c2VNb2RhbFByb3BzO1xuICAgIGNvbnN0IHVzZURpYWxvZ1RpdGxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1vZGFsVGl0bGVQcm9wcyB9ID0gdXNlTW9kYWxUaXRsZSgpO1xuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dUaXRsZVByb3BzOiB1c2VNb2RhbFRpdGxlUHJvcHMgfTtcbiAgICB9LCBbdXNlTW9kYWxUaXRsZV0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZURpYWxvZ1Byb3BzLFxuICAgICAgICB1c2VEaWFsb2dUaXRsZSxcbiAgICAgICAgdXNlRGlhbG9nQm9keSxcbiAgICAgICAgdXNlRGlhbG9nQmFja2Ryb3BcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRpYWxvZy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VIYXNGb2N1cywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VHZW5lcmljTGFiZWwgfSBmcm9tIFwiLi91c2UtbGFiZWxcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTGlzdGJveE11bHRpKHsgLi4uYXJncyB9KSB7XG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHt9KTtcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1saXN0Ym94LWxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJhcmlhLWxpc3Rib3gtXCIgfSk7XG4gICAgY29uc3QgeyB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCBuYXZpZ2F0ZVRvSW5kZXgsIG1hbmFnZWRDaGlsZHJlbiwgY3VycmVudFR5cGVhaGVhZCwgZm9jdXNDdXJyZW50LCB0YWJiYWJsZUluZGV4LCBpbnZhbGlkVHlwZWFoZWFkIH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IC4uLmFyZ3MsIHNob3VsZEZvY3VzT25DaGFuZ2U6IGdldEZvY3VzZWRJbm5lciB9KTtcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbElucHV0KCk7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgY29uc3QgW3NoaWZ0SGVsZCwgc2V0U2hpZnRIZWxkLCBnZXRTaGlmdEhlbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHR5cGVhaGVhZEluUHJvZ3Jlc3MgPSAoISFjdXJyZW50VHlwZWFoZWFkKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2ldLnNldFR5cGVhaGVhZEluUHJvZ3Jlc3ModHlwZWFoZWFkSW5Qcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICB9LCBbdHlwZWFoZWFkSW5Qcm9ncmVzcywgY2hpbGRDb3VudF0pO1xuICAgIGNvbnN0IHVzZUxpc3Rib3hNdWx0aUl0ZW0gPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGluZm8uc2VsZWN0ZWQ7XG4gICAgICAgIGNvbnN0IFt0eXBlYWhlYWRJblByb2dyZXNzLCBzZXRUeXBlYWhlYWRJblByb2dyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWQgPSB1c2VTdGFibGVHZXR0ZXIoc2VsZWN0ZWQpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2soaW5mby5vblNlbGVjdCA/PyAoKCkgPT4geyB9KSk7XG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyAuLi5pbmZvLCBzZXRUeXBlYWhlYWRJblByb2dyZXNzIH0pO1xuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGdldFNoaWZ0SGVsZCgpKSB7XG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZDogdHJ1ZSB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGVdKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpSXRlbVByb3BzLCB0YWJiYWJsZSB9O1xuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlJdGVtUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyAuLi5lLCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkOiAhZ2V0U2VsZWN0ZWQoKSB9IH0pO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sIHsgc3BhY2U6IHR5cGVhaGVhZEluUHJvZ3Jlc3MgPyBcImV4Y2x1ZGVcIiA6IHVuZGVmaW5lZCB9KSh7fSk7XG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJvcHRpb25cIjtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZXRzaXplXCJdID0gKGNoaWxkQ291bnQpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtcG9zaW5zZXRcIl0gPSAoaW5mby5pbmRleCArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAodGFiYmFibGUgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCBwcm9wcykpKTtcbiAgICAgICAgfVxuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCBjaGlsZENvdW50LCB0eXBlYWhlYWRJblByb2dyZXNzXSk7XG4gICAgY29uc3QgdXNlTGlzdGJveE11bHRpTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlMYWJlbCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpTGFiZWxQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUxhYmVsUHJvcHMgfTtcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcbiAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtLCB1c2VMaXN0Ym94TXVsdGlQcm9wcywgdXNlTGlzdGJveE11bHRpTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIGZvY3VzOiBmb2N1c0N1cnJlbnQsIG1hbmFnZWRDaGlsZHJlbiB9O1xuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aVByb3BzKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcbiAgICAgICAgcHJvcHNbXCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiXSA9IFwidHJ1ZVwiO1xuICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VIYXNGb2N1c1Byb3BzKHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25Gb2N1c091dCB9LCBwcm9wcykpKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXG4gICAgICAgIHNldFNoaWZ0SGVsZCh0cnVlKTsgfVxuICAgIGZ1bmN0aW9uIG9uS2V5VXAoZSkgeyBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKVxuICAgICAgICBzZXRTaGlmdEhlbGQoZmFsc2UpOyB9XG4gICAgZnVuY3Rpb24gb25Gb2N1c091dChlKSB7IHNldFNoaWZ0SGVsZChmYWxzZSk7IH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0Ym94LW11bHRpLmpzLm1hcCIsImltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQsIHVzZUNoaWxkRmxhZywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlR2VuZXJpY0xhYmVsIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hTaW5nbGUoeyBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgc2VsZWN0aW9uTW9kZSwgLi4uYXJncyB9KSB7XG4gICAgY29uc3QgW2FueUl0ZW1zRm9jdXNlZCwgc2V0QW55SXRlbXNGb2N1c2VkLCBnZXRBbnlJdGVtc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBnZXRJbnB1dEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtbGlzdGJveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1saXN0Ym94LVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldFRhYmJhYmxlSW5kZXgsIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRBbnlJdGVtc0ZvY3VzZWQgfSk7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xuICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2sob25TZWxlY3QgPz8gKCgpID0+IHsgfSkpO1xuICAgIC8vIFRyYWNrIHdoZXRoZXIgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgbGlzdCBib3ggcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gV2hlbiBpdCdzIG5vdCwgd2UgcmVzZXQgdGhlIHRhYmJhYmxlIGluZGV4IGJhY2sgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50LlxuICAgIGNvbnN0IHsgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHsgb25BY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoYWN0aXZlRWxlbWVudCkgPT4gc2V0QW55SXRlbXNGb2N1c2VkKCEhKGdldElucHV0RWxlbWVudCgpPy5jb250YWlucyhhY3RpdmVFbGVtZW50KSkpLCBbXSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhbnlJdGVtc0ZvY3VzZWQpXG4gICAgICAgICAgICBzZXRUYWJiYWJsZUluZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgIH0sIFthbnlJdGVtc0ZvY3VzZWQsIHNlbGVjdGVkSW5kZXgsIHNldFRhYmJhYmxlSW5kZXhdKTtcbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZENoaWxkcmVuW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IChtYW5hZ2VkQ2hpbGRyZW5baV0/LmdldFNlbGVjdGVkKCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoc2VsZWN0ZWRJbmRleCk7XG4gICAgfSwgW3NlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCB1c2VMaXN0Ym94U2luZ2xlSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkLCAuLi5pbmZvIH0pO1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5mby5pbmRleDtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlID09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlLCBzZWxlY3Rpb25Nb2RlLCBpbmRleF0pO1xuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzLCB0YWJiYWJsZSwgc2VsZWN0ZWQsIGdldFNlbGVjdGVkIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVJdGVtUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LCB1bmRlZmluZWQpKHt9KTtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm9wdGlvblwiO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNldHNpemVcIl0gPSAoY2hpbGRDb3VudCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9IChzZWxlY3RlZCA/PyBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSkpO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHNlbGVjdGlvbk1vZGUsIGNoaWxkQ291bnRdKTtcbiAgICBjb25zdCB1c2VMaXN0Ym94U2luZ2xlTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlTGFiZWwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlTGFiZWxQcm9wcyB9O1xuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xuICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtLCB1c2VMaXN0Ym94U2luZ2xlUHJvcHMsIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCwgdGFiYmFibGVJbmRleCwgZm9jdXM6IGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgbWFuYWdlZENoaWxkcmVuIH07XG4gICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcbiAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHModXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyh1c2VBY3RpdmVFbGVtZW50UHJvcHMocHJvcHMpKSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxpc3Rib3gtc2luZ2xlLmpzLm1hcCIsImltcG9ydCB7IHVzZUhhc0ZvY3VzLCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSwgdXNlVGltZW91dCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU29mdERpc21pc3MgfSBmcm9tIFwiLi91c2UtbW9kYWxcIjtcbi8qKlxuICogQSBtZW51IGlzIGEgcG9wdXAgY29udHJvbCB0aGF0IGNvbnRhaW5zIGEgbGlzdCBvZiBtZW51IGl0ZW1zLCBhbmQgdGhhdCdzIGl0LlxuICogSXQgaGFzIHZlcnkgd2VsbC1kZWZpbmVkIGxvZ2ljIGZvciBtYW5hZ2luZyB0aG9zZSBpdGVtcyBhcyB0aGUgbWVudSdzIHN0YXRlIGNoYW5nZXMuXG4gKlxuICogQSBNZW51QmFzZSBpcyBqdXN0IHRoZSBcInBvcHVwXCIgcGFydCB3aXRob3V0IHRoZSBcImxpc3Qgb2YgbWVudSBpdGVtc1wiIHBhcnQuIEl0IGNhblxuICogKHJlYWxseSwgbXVzdCkgaGF2ZSBpbnRlcmFjdGl2ZSBjb250cm9scywgYnV0IHRoZXNlIGNvbnRyb2xzIGFyZSBhbGxvd2VkIHRvIGJlIG1vcmVcbiAqIGZyZWUtZm9ybS4gVGhpcyBtZWFucyB0aGF0LCBsaWtlIGEgZGlhbG9nLCB5b3UgbXVzdCB0ZWxsIHRoaXMgaG9va1xuICogd2hlcmUgd2l0aGluIHRoZSBwb3B1cCB0byBzZW5kIGZvY3VzIHdoZW4gb3BlbmVkIChmb3IgYSBtZW51IGl0J3MganVzdCB0aGUgZmlyc3RcbiAqIG1lbnUgaXRlbSwgYnV0IHdpdGggY3VzdG9tIGNvbnRlbnQgeW91J2xsIG5lZWQgdG8gcHJvdmlkZSB0aGlzKS5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZW51QmFzZSh7IHNlbmRGb2N1c1dpdGhpbk1lbnUsIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IGdldFNlbmRGb2N1c1dpdGhpbk1lbnUgPSB1c2VTdGFibGVHZXR0ZXIoc2VuZEZvY3VzV2l0aGluTWVudSk7XG4gICAgY29uc3QgW2ZvY3VzVHJhcEFjdGl2ZSwgc2V0Rm9jdXNUcmFwQWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGxldCBvbkNsb3NlID0gYXJncy5vbkNsb3NlO1xuICAgIGxldCBvbk9wZW4gPSBhcmdzLm9uT3BlbjtcbiAgICBsZXQgbWVudWJhciA9IGFyZ3MubWVudWJhcjtcbiAgICBsZXQgb3BlbiA9IChtZW51YmFyID8gdHJ1ZSA6IGFyZ3Mub3Blbik7XG4gICAgY29uc3Qgc3RhYmxlT25DbG9zZSA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uQ2xvc2UgPz8gKCgpID0+IHsgfSkpO1xuICAgIGNvbnN0IGdldE9wZW4gPSB1c2VTdGFibGVHZXR0ZXIob3Blbik7XG4gICAgLy8gVE9ETzogSXQncyBhd2t3YXJkIHRoYXQgdGhlIGJ1dHRvbiBmb2N1cyBwcm9wcyBhcmUgb3V0IGhlcmUgd2hlcmUgd2UgZG9uJ3QgaGF2ZSBpdHMgdHlwZSxcbiAgICAvLyBidXQgZm9jdXMgbWFuYWdlbWVudCBpcyBzdXBlciBzZW5zaXRpdmUsIGFuZCBldmVuIHdhaXRpbmcgZm9yIGEgdXNlTGF5b3V0RWZmZWN0IHRvIHN5bmMgc3RhdGUgaGVyZVxuICAgIC8vIHdvdWxkIGJlIHRvbyBsYXRlLCBzbyBpdCB3b3VsZCBsb29rIGxpa2UgdGhlcmUncyBhIG1vbWVudCBiZXR3ZWVuIG1lbnUgZm9jdXMgbG9zdCBhbmQgYnV0dG9uIGZvY3VzIGdhaW5lZFxuICAgIC8vIHdoZXJlIG5vdGhpbmcgaXMgZm9jdXNlZC4gXG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzOiB1c2VNZW51QmFzZUhhc0ZvY3VzUHJvcHMsIGdldExhc3RGb2N1c2VkSW5uZXI6IGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoeyAvKm9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQ6IG9uTWVudU9yQnV0dG9uTG9zdExhc3RGb2N1cyovfSk7XG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzOiB1c2VCdXR0b25IYXNGb2N1c1Byb3BzLCBnZXRMYXN0Rm9jdXNlZElubmVyOiBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHsgLypvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkOiBvbk1lbnVPckJ1dHRvbkxvc3RMYXN0Rm9jdXMqL30pO1xuICAgIGNvbnN0IFtvcGVuZXJFbGVtZW50LCBzZXRPcGVuZXJFbGVtZW50LCBnZXRPcGVuZXJFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlTWVudUJhc2VJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlTWVudUJhc2VJZFJlZmVyZW5jaW5nUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbWVudS1cIiB9KTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldEJ1dHRvbkVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRPcGVuZXJFbGVtZW50IH0pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0TWVudUVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlTWVudUJhc2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgIGNvbnN0IHsgdXNlU29mdERpc21pc3NQcm9wcyB9ID0gdXNlU29mdERpc21pc3MoeyBvbkNsb3NlOiBzdGFibGVPbkNsb3NlLCBnZXRFbGVtZW50czogKCkgPT4gKFtnZXRCdXR0b25FbGVtZW50KCksIGdldE1lbnVFbGVtZW50KCldKSB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRGb2N1c1RyYXBBY3RpdmUob3Blbik7XG4gICAgfSwgW29wZW5dKTtcbiAgICAvLyBBIG1lbnUgc2VudGluYWwgaXMgYSBoaWRkZW4gYnV0IGZvY3VzYWJsZSBlbGVtZW50IHRoYXQgY29tZXMgYXQgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgZWxlbWVudFxuICAgIC8vIHRoYXQsIHdoZW4gYWN0aXZhdGVkIG9yIGZvY3VzZWQgb3ZlciwgY2xvc2VzIHRoZSBtZW51LlxuICAgIC8vIChpZiBmb2N1c2VkIHdpdGhpbiAxMDBtcyBvZiB0aGUgb3BlbiBwcm9wIGNoYW5naW5nLCBpbnN0ZWFkIG9mXG4gICAgLy8gY2xvc2luZyB0aGUgbWVudSwgZm9jdXNpbmcgdGhlIHNlbnRpbmVsIGltbWVkaWF0ZWx5IGFza3MgdGhlIG1lbnUgdG8gZm9jdXMgaXRzZWxmKS5cbiAgICAvLyBUaGlzIGV4aXN0cyBiZWNhdXNlIHdoaWxlIG1vdXNlIHVzZXJzIGNhbiBjbGljayBvdXQgb2YgYSBtZW51XG4gICAgLy8gYW5kIGtleWJvYXJkIHVzZXJzIGNhbiBlc2NhcGUgdG8gY2xvc2UgdGhlIG1lbnUsXG4gICAgLy8gc2NyZWVuIHJlYWRlcnMgYW5kIG90aGVyIGlucHV0IG1ldGhvZHMgdGhhdCBkb24ndCB1c2UgdGhvc2UgdHdvIGJlY29tZSBzdHVjay5cbiAgICBjb25zdCB1c2VNZW51U2VudGluZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IFtmaXJzdFNlbnRpbmVsSXNBY3RpdmUsIHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIHVzZVRpbWVvdXQoeyBjYWxsYmFjazogKCkgPT4geyBzZXRGaXJzdFNlbnRpbmVsSXNBY3RpdmUob3Blbik7IH0sIHRpbWVvdXQ6IDEwMCwgdHJpZ2dlckluZGV4OiBgJHtvcGVufS0ke2ZpcnN0U2VudGluZWxJc0FjdGl2ZX1gIH0pO1xuICAgICAgICBjb25zdCBvbkZvY3VzID0gZmlyc3RTZW50aW5lbElzQWN0aXZlID8gKCgpID0+IHN0YWJsZU9uQ2xvc2UoKSkgOiAoKCkgPT4gZ2V0U2VuZEZvY3VzV2l0aGluTWVudSgpPy4oKSk7XG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiBzdGFibGVPbkNsb3NlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VNZW51U2VudGluZWxQcm9wczogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRm9jdXMsIG9uQ2xpY2sgfSwgcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW29wZW5dKTtcbiAgICBjb25zdCB1c2VNZW51QmFzZVByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCJFc2NhcGVcIiAmJiBnZXRPcGVuKCkpIHtcbiAgICAgICAgICAgICAgICBzdGFibGVPbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlU29mdERpc21pc3NQcm9wcyh1c2VNZW51QmFzZUhhc0ZvY3VzUHJvcHModXNlTWVudUJhc2VSZWZFbGVtZW50UHJvcHModXNlTWVudUJhc2VJZFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgKHByb3BzKSkpKSkpO1xuICAgIH0sIFt1c2VTb2Z0RGlzbWlzc1Byb3BzLCB1c2VNZW51QmFzZUhhc0ZvY3VzUHJvcHMsIHVzZU1lbnVCYXNlUmVmRWxlbWVudFByb3BzLCB1c2VNZW51QmFzZUlkUHJvcHNdKTtcbiAgICBjb25zdCB1c2VNZW51QmFzZUJ1dHRvblByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VCdXR0b25SZWZFbGVtZW50UHJvcHModXNlQnV0dG9uSGFzRm9jdXNQcm9wcyh1c2VNZW51QmFzZUlkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtY29udHJvbHNcIikocHJvcHMpKSk7XG4gICAgfSwgW3VzZUJ1dHRvbkhhc0ZvY3VzUHJvcHMsIHVzZUJ1dHRvblJlZkVsZW1lbnRQcm9wcywgdXNlTWVudUJhc2VJZFJlZmVyZW5jaW5nUHJvcHNdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZW5kRm9jdXNXaXRoaW5NZW51ID0gZ2V0U2VuZEZvY3VzV2l0aGluTWVudSgpO1xuICAgICAgICBpZiAoZm9jdXNUcmFwQWN0aXZlKSB7XG4gICAgICAgICAgICBzZW5kRm9jdXNXaXRoaW5NZW51Py4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb2N1c1RyYXBBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyKCkpXG4gICAgICAgICAgICAgICAgZ2V0T3BlbmVyRWxlbWVudCgpPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBudWxsLCBzbyB3ZSd2ZSBvbmx5IGp1c3QgbW91bnRlZCBhbmQgc2hvdWxkbid0IGZvY3VzIG91cnNlbHZlcy5cbiAgICAgICAgfVxuICAgIH0sIFtmb2N1c1RyYXBBY3RpdmVdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VNZW51U2VudGluZWwsXG4gICAgICAgIGZvY3VzVHJhcEFjdGl2ZSxcbiAgICAgICAgdXNlTWVudUJhc2VQcm9wcyxcbiAgICAgICAgdXNlTWVudUJhc2VCdXR0b25Qcm9wcyxcbiAgICAgICAgZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyLFxuICAgICAgICBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIsXG4gICAgICAgIG9wZW4sXG4gICAgICAgIG9uT3BlbixcbiAgICAgICAgb25DbG9zZVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYU1lbnUoeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgbm9UeXBlYWhlYWQsIG5vV3JhcCwgdHlwZWFoZWFkVGltZW91dCwgLi4uYXJncyB9KSB7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudDogZm9jdXNNZW51LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBub1R5cGVhaGVhZCwgbm9XcmFwLCB0eXBlYWhlYWRUaW1lb3V0LCBzaG91bGRGb2N1c09uQ2hhbmdlOiB1c2VDYWxsYmFjaygoKSA9PiBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIoKSB8fCBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIoKSwgW10pIH0pO1xuICAgIGNvbnN0IHsgdXNlTWVudVNlbnRpbmVsLCBmb2N1c1RyYXBBY3RpdmUsIHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMsIHVzZU1lbnVCYXNlUHJvcHMsIGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lciwgZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyLCBvcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZU1lbnVCYXNlKHsgLi4uYXJncywgc2VuZEZvY3VzV2l0aGluTWVudTogZm9jdXNNZW51ID8/ICgoKSA9PiB7IH0pIH0pO1xuICAgIGNvbnN0IHVzZU1lbnVCdXR0b24gPSB1c2VDYWxsYmFjaygoe30pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZU1lbnVCdXR0b25Qcm9wczogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VNZW51QmFzZUJ1dHRvblByb3BzKHApO1xuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1oYXNwb3B1cFwiXSA9IFwibWVudVwiO1xuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1leHBhbmRlZFwiXSA9IG9wZW4gPyBcInRydWVcIiA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW29wZW4sIG9uQ2xvc2UsIG9uT3BlbiwgdXNlTWVudUJhc2VCdXR0b25Qcm9wc10pO1xuICAgIC8qY29uc3QgdXNlTWVudVN1Ym1lbnVJdGVtID0gdXNlQ2FsbGJhY2soKGFyZ3M6IFVzZU1lbnVTdWJtZW51SXRlbVBhcmFtZXRlcnMpID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VNZW51UHJvcHMsIHVzZU1lbnVCdXR0b24gfSA9IHVzZUFyaWFNZW51PEhUTUxFbGVtZW50LCBDaGlsZEVsZW1lbnQsIEk+KGFyZ3MpO1xuICAgICAgICBjb25zdCB7IHVzZU1lbnVCdXR0b25Qcm9wcyB9ID0gdXNlTWVudUJ1dHRvbjxFPih7IHRhZzogXCJsaVwiIGFzIGFueSB9KTtcblxuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudDxhbnk+KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRPcGVuZXJFbGVtZW50IGFzIE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPGFueT4gfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgICAgICB1c2VNZW51UHJvcHMsXG4gICAgICAgICAgICB1c2VNZW51U3VibWVudUl0ZW1Qcm9wczogZnVuY3Rpb24gPFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxFPj4oeyAuLi5wcm9wcyB9OiBQKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1cIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lbnVCdXR0b25Qcm9wcyh1c2VNZW51SWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1jb250cm9sc1wiKShwcm9wcykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTsqL1xuICAgIGNvbnN0IHVzZU1lbnVJdGVtID0gdXNlQ2FsbGJhY2soKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoYXJncyk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZU1lbnVJdGVtUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJtZW51aXRlbVwiO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyhwcm9wcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZU1lbnVJdGVtUHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgZnVuY3Rpb24gdXNlTWVudVByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICBwcm9wcy5yb2xlID0gXCJtZW51XCI7XG4gICAgICAgIHJldHVybiB1c2VNZW51QmFzZVByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTWVudVByb3BzLFxuICAgICAgICB1c2VNZW51QnV0dG9uLFxuICAgICAgICB1c2VNZW51SXRlbSxcbiAgICAgICAgdXNlTWVudVNlbnRpbmVsLFxuICAgICAgICAvL3VzZU1lbnVTdWJtZW51SXRlbSxcbiAgICAgICAgZm9jdXNNZW51LFxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5cbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lbnUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2hpbGRGbGFnLCB1c2VDaGlsZE1hbmFnZXIsIHVzZUhhc0ZvY3VzLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VMb2dpY2FsRGlyZWN0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhVGFicyh7IHNlbGVjdGlvbk1vZGUsIHNlbGVjdGVkSW5kZXgsIG9uU2VsZWN0LCBvcmllbnRhdGlvbjogbG9naWNhbE9yaWVudGF0aW9uLCAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZVRhYkxpc3RIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXI6IGdldFRhYkxpc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHt9KTtcbiAgICBjb25zdCBbcGh5c2ljYWxPcmllbnRhdGlvbiwgc2V0UGh5c2ljYWxPcmllbnRhdGlvbl0gPSB1c2VTdGF0ZShcImhvcml6b250YWxcIik7XG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiwgdXNlTG9naWNhbERpcmVjdGlvblByb3BzIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlOiB1c2VDYWxsYmFjaygobG9naWNhbERpcmVjdGlvbkluZm8pID0+IHNldFBoeXNpY2FsT3JpZW50YXRpb24oY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbihsb2dpY2FsT3JpZW50YXRpb24sIGxvZ2ljYWxEaXJlY3Rpb25JbmZvKSksIFtdKSB9KTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRhYkxpc3RJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxpc3RJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItbGlzdC1cIiB9KTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRhYkxhYmVsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRUYWJMYWJlbElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1sYWJlbC1cIiB9KTtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFRhYnMsIG5hdmlnYXRlVG9JbmRleCwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdGFiYmFibGVJbmRleCwgaW52YWxpZFR5cGVhaGVhZCwgY3VycmVudFR5cGVhaGVhZCwgZm9jdXNDdXJyZW50IH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IC4uLmFyZ3MsIHNob3VsZEZvY3VzT25DaGFuZ2U6IGdldFRhYkxpc3RGb2N1c2VkSW5uZXIsIGtleU5hdmlnYXRpb246IGxvZ2ljYWxPcmllbnRhdGlvbiB9KTtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFBhbmVscywgdXNlTWFuYWdlZENoaWxkOiB1c2VNYW5hZ2VkVGFiUGFuZWwgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xuICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2sob25TZWxlY3QpO1xuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkVGFicy5sZW5ndGg7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFuYWdlZFRhYnMpXG4gICAgICAgICAgICBjaGlsZC5zZXRTZWxlY3Rpb25Nb2RlKHNlbGVjdGlvbk1vZGUpO1xuICAgIH0sIFtzZWxlY3Rpb25Nb2RlXSk7XG4gICAgdXNlQ2hpbGRGbGFnKHsgYWN0aXZhdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFRhYnMsIHNldENoaWxkRmxhZzogKGksIHNlbGVjdGVkKSA9PiBtYW5hZ2VkVGFic1tpXT8uc2V0U2VsZWN0ZWQoc2VsZWN0ZWQpLCBnZXRDaGlsZEZsYWc6IGkgPT4gKG1hbmFnZWRUYWJzW2ldPy5nZXRTZWxlY3RlZCgpKSB9KTtcbiAgICB1c2VDaGlsZEZsYWcoeyBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUGFuZWxzLCBzZXRDaGlsZEZsYWc6IChpLCB2aXNpYmxlKSA9PiBtYW5hZ2VkUGFuZWxzW2ldPy5zZXRWaXNpYmxlKHZpc2libGUpLCBnZXRDaGlsZEZsYWc6IGkgPT4gKG1hbmFnZWRQYW5lbHNbaV0/LmdldFZpc2libGUoKSkgfSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KChwcmV2KSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgc2VsZWN0aW9uTW9kZSA9PSBcImFjdGl2YXRlXCIpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gd2FpdCBhIG1vbWVudCBzbyB0aGF0IHRoZSB0YWIgcGFuZWwgd2Ugd2FudCB0byBmb2N1c1xuICAgICAgICAgICAgLy8gaXMgYWN0dWFsbHkgdmlzaWJsZSAoaS5lLiB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjaGlsZCB0byByZS1yZW5kZXIgaXRzZWxmKS5cbiAgICAgICAgICAgIC8vIFdlIGNvdWxkLCBhbHRlcm5hdGl2ZWx5LCBzaWduYWwgdG8gdGhlIGNoaWxkIHRoYXQgaXQgc2hvdWxkIGZvY3VzIGl0c2VsZlxuICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSBpdCByZW5kZXJzIGl0c2VsZiBhcyB2aXNpYmxlLFxuICAgICAgICAgICAgLy8gd2hpY2ggbWlnaHQgYmUgYmV0dGVyP1xuICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hbmFnZWRQYW5lbHNbc2VsZWN0ZWRJbmRleF0/LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtjaGlsZENvdW50LCBzZWxlY3RlZEluZGV4LCBzZWxlY3Rpb25Nb2RlXSk7XG4gICAgY29uc3QgdXNlVGFiID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFiKGluZm8pIHtcbiAgICAgICAgY29uc3QgW3NlbGVjdGlvbk1vZGVMLCBzZXRTZWxlY3Rpb25Nb2RlTF0gPSB1c2VTdGF0ZShzZWxlY3Rpb25Nb2RlKTtcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgICAgICBjb25zdCBbdGFiUGFuZWxJZCwgc2V0VGFiUGFuZWxJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgICAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRhYklkUHJvcHMsIGlkOiB0YWJJZCwgZ2V0SWQ6IGdldFRhYklkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1cIiB9KTtcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWQsIHRhYklkLCBzZXRUYWJQYW5lbElkLCBzZXRTZWxlY3Rpb25Nb2RlOiBzZXRTZWxlY3Rpb25Nb2RlTCwgLi4uaW5mbyB9KTtcbiAgICAgICAgY29uc3QgZ2V0SW5kZXggPSB1c2VTdGFibGVHZXR0ZXIoaW5mby5pbmRleCk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKHRhYmJhYmxlICYmIHNlbGVjdGlvbk1vZGVMID09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgIG9uU2VsZWN0KHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlLCBzZWxlY3Rpb25Nb2RlXSk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IG1hbmFnZWRQYW5lbHNbaW5mby5pbmRleF0/LnNldFRhYklkKHRhYklkKTsgfSwgW3RhYklkLCBpbmZvLmluZGV4XSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYlByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoKGUpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q/LihlbmhhbmNlRXZlbnQoZSwgeyBzZWxlY3RlZEluZGV4OiBnZXRJbmRleCgpIH0pKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LCB1bmRlZmluZWQpKHByb3BzKTtcbiAgICAgICAgICAgIG5ld1Byb3BzLnJvbGUgPSBcInRhYlwiO1xuICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHNlbGVjdGVkID8/IGZhbHNlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWNvbnRyb2xzXCJdID0gdGFiUGFuZWxJZDtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VUYWJJZFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VSZWZFbGVtZW50UHJvcHMobmV3UHJvcHMpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRhYlByb3BzLCBzZWxlY3RlZCB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VUYWJQYW5lbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVBhbmVsKGluZm8pIHtcbiAgICAgICAgLy9jb25zdCBbc2hvdWxkRm9jdXMsIHNldFNob3VsZEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgY29uc3QgW3RhYklkLCBzZXRUYWJJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgICAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZSwgZ2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VQYW5lbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkUGFuZWxJZCwgaWQ6IHRhYlBhbmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLXBhbmVsLVwiIH0pO1xuICAgICAgICBjb25zdCB7IHVzZU1hbmFnZWRDaGlsZFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VNYW5hZ2VkVGFiUGFuZWwoeyAuLi5pbmZvLCB0YWJQYW5lbElkLCBzZXRUYWJJZCwgZm9jdXMsIHNldFZpc2libGU6IHNldFZpc2libGUsIGdldFZpc2libGU6IGdldFZpc2libGUgfSk7XG4gICAgICAgIGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGdldFRhYkxpc3RGb2N1c2VkSW5uZXIoKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4geyBtYW5hZ2VkVGFic1tpbmZvLmluZGV4XT8uc2V0VGFiUGFuZWxJZCh0YWJQYW5lbElkKTsgfSwgW3RhYlBhbmVsSWQsIGluZm8uaW5kZXhdKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUGFuZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1sYWJlbGxlZGJ5XCJdID0gbWFuYWdlZFRhYnNbaW5mby5pbmRleF0/LnRhYklkO1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwidGFicGFuZWxcIjtcbiAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID8/PSAtMTsgLy8gTWFrZSBzdXJlIHRoZSB0YWIgcGFuZWwgaXMgdGFiYmFibGUuXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlUGFuZWxJZFByb3BzKHVzZU1hbmFnZWRDaGlsZFByb3BzKHByb3BzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRhYlBhbmVsUHJvcHMsIHZpc2libGUgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlVGFic0xpc3QgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWJMaXN0KCkge1xuICAgICAgICBmdW5jdGlvbiB1c2VUYWJMaXN0UHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJ0YWJsaXN0XCI7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtb3JpZW50YXRpb25cIl0gPSBwaHlzaWNhbE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRUYWJMYWJlbElkKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHVzZVRhYkxpc3RIYXNGb2N1c1Byb3BzKHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUYWJMaXN0UHJvcHMgfTtcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgcGh5c2ljYWxPcmllbnRhdGlvbl0pO1xuICAgIGNvbnN0IHVzZVRhYnNMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYnNMYWJlbCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFic0xhYmVsUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlVGFiTGFiZWxJZFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUYWJzTGFiZWxQcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4geyB1c2VUYWIsIHVzZVRhYlBhbmVsLCB1c2VUYWJzTGlzdCwgdXNlVGFic0xhYmVsLCB0YWJiYWJsZUluZGV4LCBmb2N1c1RhYkxpc3Q6IGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgbWFuYWdlZFBhbmVscywgbWFuYWdlZFRhYnMgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10YWJzLmpzLm1hcCIsImltcG9ydCB7IHVzZUhhc0ZvY3VzLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVN0YXRlLCB1c2VUaW1lb3V0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYVRvb2x0aXAoeyBtb3VzZW92ZXJEZWxheSwgbW91c2VvdXREZWxheSB9KSB7XG4gICAgbW91c2VvdmVyRGVsYXkgPz89IDQwMDtcbiAgICBtb3VzZW91dERlbGF5ID8/PSA0MDtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3BlbiwgZ2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gVXNlZCB0byBrZWVwIHRyYWNrIG9mIGlmIHdlJ3JlIGhvdmluZyBvdmVyIHRoZSB0cmlnZ2VyIHdoZW4gY29ycmVjdGluZyBmb3IgdGhlIGdpdmVuIGRlbGF5cy5cbiAgICBjb25zdCBbaGFzRGVsYXlDb3JyZWN0ZWRNb3VzZW92ZXIsIHNldEhhc0RlbGF5Q29ycmVjdGVkTW91c2VvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRvb2x0aXBJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10b29sdGlwLVwiIH0pO1xuICAgIGNvbnN0IFt0cmlnZ2VyRm9jdXNlZElubmVyLCBzZXRUcmlnZ2VyRm9jdXNlZElubmVyLCBnZXRUcmlnZ2VyRm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdHJpZ2dlckhhc01vdXNlb3Zlciwgc2V0VHJpZ2dlckhhc01vdXNlb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Rvb2x0aXBIYXNNb3VzZW92ZXIsIHNldFRvb2x0aXBIYXNNb3VzZW92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0b29sdGlwSGFzRm9jdXMsIHNldFRvb2x0aXBIYXNGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdHJpZ2dlckluZGV4ID0gISEoK3RyaWdnZXJIYXNNb3VzZW92ZXIgKyArdG9vbHRpcEhhc01vdXNlb3ZlciArICt0b29sdGlwSGFzRm9jdXMpO1xuICAgIGNvbnN0IHRvb2x0aXBTaG91bGRCZVNob3duID0gKHRyaWdnZXJIYXNNb3VzZW92ZXIgfHwgdG9vbHRpcEhhc01vdXNlb3ZlciB8fCB0b29sdGlwSGFzRm9jdXMpO1xuICAgIC8vIEFjdGl2YXRlIG9uIHRoZSB1c3VhbCBkZWxheSBmb3IgbW91c2VvdmVyXG4gICAgdXNlVGltZW91dCh7XG4gICAgICAgIHRpbWVvdXQ6IG1vdXNlb3ZlckRlbGF5LFxuICAgICAgICB0cmlnZ2VySW5kZXgsXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBzZXRIYXNEZWxheUNvcnJlY3RlZE1vdXNlb3Zlcih0b29sdGlwU2hvdWxkQmVTaG93bik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBGb3JjaWJseSBkZWFjdGl2YXRlIGFsbW9zdCBpbW1lZGlhdGVseSBvbiBtb3VzZW91dFxuICAgIHVzZVRpbWVvdXQoe1xuICAgICAgICB0aW1lb3V0OiBtb3VzZW91dERlbGF5LFxuICAgICAgICB0cmlnZ2VySW5kZXgsXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRvb2x0aXBTaG91bGRCZVNob3duKVxuICAgICAgICAgICAgICAgIHNldEhhc0RlbGF5Q29ycmVjdGVkTW91c2VvdmVyKHRvb2x0aXBTaG91bGRCZVNob3duKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIElmIHdlIGhhdmUgYSAoZGVsYXktY29ycmVjdGVkKSBtb3VzZW92ZXIgb3Igd2UncmUgZm9jdXNlZCxcbiAgICAvLyBzaG93IHRoZSB0b29sdGlwLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldE9wZW4oaGFzRGVsYXlDb3JyZWN0ZWRNb3VzZW92ZXIgfHwgdHJpZ2dlckZvY3VzZWRJbm5lcik7XG4gICAgfSwgW2hhc0RlbGF5Q29ycmVjdGVkTW91c2VvdmVyLCB0cmlnZ2VyRm9jdXNlZElubmVyXSk7XG4gICAgY29uc3QgdXNlVG9vbHRpcFRyaWdnZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUb29sdGlwVHJpZ2dlcigpIHtcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRW50ZXIoZSkge1xuICAgICAgICAgICAgc2V0VHJpZ2dlckhhc01vdXNlb3Zlcih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJMZWF2ZShlKSB7XG4gICAgICAgICAgICBzZXRUcmlnZ2VySGFzTW91c2VvdmVyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZElubmVyQ2hhbmdlZDogc2V0VHJpZ2dlckZvY3VzZWRJbm5lciB9KTtcbiAgICAgICAgZnVuY3Rpb24gdXNlVG9vbHRpcFRyaWdnZXJQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIC8vIE5vdGU6IFRob3VnaCBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBmb2N1c2luZyBhY3RpdmF0ZXMgYSB0b29sdGlwLFxuICAgICAgICAgICAgLy8gaXQncyBwZXJmZWN0bHkgcmVhc29uYWJsZSB0aGF0IGEgY2hpbGQgZWxlbWVudCB3aWxsIGJlIHRoZSBvbmUgdGhhdCdzIGZvY3VzZWQsXG4gICAgICAgICAgICAvLyBub3QgdGhpcyBvbmUsIHNvIHdlIGRvbid0IHNldCB0YWJJbmRleD0wXG4gICAgICAgICAgICBwcm9wcy50YWJJbmRleCA/Pz0gLTE7XG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikodXNlSGFzRm9jdXNQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyRW50ZXIsIG9uUG9pbnRlckxlYXZlLCBvblRvdWNoRW5kIH0sIHByb3BzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRvb2x0aXBUcmlnZ2VyUHJvcHMgfTtcbiAgICB9LCBbdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wc10pO1xuICAgIGNvbnN0IHVzZVRvb2x0aXAgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUb29sdGlwKCkge1xuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJFbnRlcihlKSB7XG4gICAgICAgICAgICBzZXRUb29sdGlwSGFzTW91c2VvdmVyKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckxlYXZlKGUpIHtcbiAgICAgICAgICAgIHNldFRvb2x0aXBIYXNNb3VzZW92ZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRvb2x0aXBQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRJbm5lckNoYW5nZWQ6IHNldFRvb2x0aXBIYXNGb2N1cyB9KTtcbiAgICAgICAgICAgIHJldHVybiB1c2VUb29sdGlwSWRQcm9wcyh1c2VIYXNGb2N1c1Byb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJFbnRlciwgb25Qb2ludGVyTGVhdmUgfSwgcHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFByb3BzIH07XG4gICAgfSwgW3VzZVRvb2x0aXBJZFByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlVG9vbHRpcCxcbiAgICAgICAgdXNlVG9vbHRpcFRyaWdnZXIsXG4gICAgICAgIGlzT3Blbjogb3BlbixcbiAgICAgICAgZ2V0SXNPcGVuOiBnZXRPcGVuXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10b29sdGlwLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIm9sZEJlZm9yZURpZmYiLCJvcHRpb25zIiwib2xkQmVmb3JlUmVuZGVyIiwib2xkQWZ0ZXJEaWZmIiwiZGlmZmVkIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsInVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsInR5cGUiLCJob29rcyIsImxlbmd0aCIsInB1c2giLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJ1bmRlZmluZWQiLCJuZXh0VmFsdWUiLCJhY3Rpb24iLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwiYXJncyIsInN0YXRlIiwiYXJnc0NoYW5nZWQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJpbml0aWFsVmFsdWUiLCJ1c2VNZW1vIiwiY3VycmVudCIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwicHJvdmlkZXIiLCJzdWIiLCJwcm9wcyIsInZhbHVlIiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwiZSIsInZub2RlIiwiYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJhZiIsImRvbmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiSEFTX1JBRiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImNvbW1pdFF1ZXVlIiwic29tZSIsImZpbHRlciIsImNiIiwiaG9vayIsImNvbXAiLCJvbGRBcmdzIiwibmV3QXJncyIsImFyZyIsImYiLCJVbnNldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInRvVmFsIiwibWl4IiwiayIsInkiLCJzdHIiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwidG1wIiwieCIsImFyZ3VtZW50cyIsInJldHVybk51bGwiLCJNIiwidXNlU3RhdGVQIiwidXNlRWZmZWN0TmF0aXZlIiwidXNlTGF5b3V0RWZmZWN0TmF0aXZlIiwiY2FuZGlkYXRlU2VsZWN0b3JzIiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJpc0lucHV0Iiwibm9kZSIsImlzSGlkZGVuSW5wdXQiLCJpc0RldGFpbHNXaXRoU3VtbWFyeSIsInIiLCJjaGlsZCIsImlzSGlkZGVuIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImlzRGlyZWN0U3VtbWFyeSIsIm5vZGVVbmRlckRldGFpbHMiLCJkaXNwbGF5Q2hlY2siLCJ3aWR0aCIsImhlaWdodCIsImlzRGlzYWJsZWRGcm9tRmllbGRzZXQiLCJwYXJlbnROb2RlIiwiaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSIsImZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yIiwiaXNGb2N1c2FibGUiLCJnbG9iYWwiLCJ0aGlzIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJzbGljZSIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiam9pbiIsIkluZXJ0Um9vdCIsInJvb3RFbGVtZW50IiwiaW5lcnRNYW5hZ2VyIiwiX2luZXJ0TWFuYWdlciIsIl9yb290RWxlbWVudCIsIl9tYW5hZ2VkTm9kZXMiLCJTZXQiLCJoYXNBdHRyaWJ1dGUiLCJfc2F2ZWRBcmlhSGlkZGVuIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUiLCJfb2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiX29uTXV0YXRpb24iLCJiaW5kIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZGVzdHJ1Y3RvciIsImRpc2Nvbm5lY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwic3RhcnROb2RlIiwiX3RoaXMyIiwiY29tcG9zZWRUcmVlV2FsayIsIl92aXNpdE5vZGUiLCJhY3RpdmVFbGVtZW50IiwiZG9jdW1lbnQiLCJib2R5IiwiY29udGFpbnMiLCJyb290Iiwibm9kZVR5cGUiLCJOb2RlIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImJsdXIiLCJmb2N1cyIsIkVMRU1FTlRfTk9ERSIsImVsZW1lbnQiLCJfYWRvcHRJbmVydFJvb3QiLCJjYWxsIiwiX21hbmFnZU5vZGUiLCJyZWdpc3RlciIsImFkZCIsImRlcmVnaXN0ZXIiLCJfdW5tYW5hZ2VTdWJ0cmVlIiwiX3RoaXMzIiwiaW5lcnRTdWJyb290IiwiZ2V0SW5lcnRSb290Iiwic2V0SW5lcnQiLCJtYW5hZ2VkTm9kZXMiLCJzYXZlZEluZXJ0Tm9kZSIsInJlY29yZHMiLCJzZWxmIiwicmVjb3JkIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImF0dHJpYnV0ZU5hbWUiLCJtYW5hZ2VkTm9kZSIsImdldCIsInNldCIsImFyaWFIaWRkZW4iLCJJbmVydE5vZGUiLCJpbmVydFJvb3QiLCJfbm9kZSIsIl9vdmVycm9kZUZvY3VzTWV0aG9kIiwiX2luZXJ0Um9vdHMiLCJfc2F2ZWRUYWJJbmRleCIsIl9kZXN0cm95ZWQiLCJlbnN1cmVVbnRhYmJhYmxlIiwiX3Rocm93SWZEZXN0cm95ZWQiLCJkZXN0cm95ZWQiLCJFcnJvciIsInRhYkluZGV4IiwiaGFzU2F2ZWRUYWJJbmRleCIsImFkZEluZXJ0Um9vdCIsInJlbW92ZUluZXJ0Um9vdCIsInNpemUiLCJJbmVydE1hbmFnZXIiLCJfZG9jdW1lbnQiLCJNYXAiLCJfd2F0Y2hGb3JJbmVydCIsImFkZEluZXJ0U3R5bGUiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25Eb2N1bWVudExvYWRlZCIsImluZXJ0IiwiaGFzIiwicGFyZW50IiwiX2luZXJ0Um9vdCIsImluZXJ0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5lcnRFbGVtZW50IiwiX3RoaXMiLCJ1bnNoaWZ0Iiwic2hhZG93Um9vdEFuY2VzdG9yIiwic2hhZG93Um9vdCIsImxvY2FsTmFtZSIsImNvbnRlbnQiLCJkaXN0cmlidXRlZE5vZGVzIiwiZ2V0RGlzdHJpYnV0ZWROb2RlcyIsInNsb3QiLCJfZGlzdHJpYnV0ZWROb2RlcyIsImFzc2lnbmVkTm9kZXMiLCJmbGF0dGVuIiwiX2kiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiaGFzT3duUHJvcGVydHkiLCJhc3NpZ24iLCJvYmoiLCJzaGFsbG93RGlmZmVycyIsImEiLCJiIiwiaCIsIlJhbmRvbVdvcmRzIiwiY3JlYXRlQ29udGV4dCIsIm1lbW8iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztTQUFPO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsSUFBTUEsR0FBQUEsR0FBWSxFQUFsQjtJQUFBLElBQ01DLEdBQUFBLEdBQVksRUFEbEI7SUFBQSxJQUVNQyxHQUFBQSxHQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDbEMsSUFBSUMsQ0FBSjtJQUFBLElBR0lDLENBSEo7SUFBQSxJQWtCSUMsQ0FsQko7SUFBQSxJQU1JQyxDQUFBQSxHQUFjLENBTmxCO0lBQUEsSUFTSUMsQ0FBQUEsR0FBb0IsRUFUeEI7SUFBQSxJQVdJQyxDQUFBQSxHQUFnQkMsR0FBQUEsQ0FBQUEsR0FYcEI7SUFBQSxJQVlJQyxDQUFBQSxHQUFrQkQsR0FBQUEsQ0FBQUEsR0FadEI7SUFBQSxJQWFJRSxDQUFBQSxHQUFlRixHQUFBQSxDQUFRRyxNQWIzQjtJQUFBLElBY0lDLENBQUFBLEdBQVlKLEdBQUFBLENBQUFBLEdBZGhCO0lBQUEsSUFlSUssQ0FBQUEsR0FBbUJMLEdBQUFBLENBQVFNLE9BZi9COztJQXVGQSxTQUFTQyxDQUFULENBQXNCQyxDQUF0QixFQUE2QkMsQ0FBN0IsRUFBNkJBO0lBQ3hCVCxFQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxJQUNIQSxHQUFBQSxDQUFBQSxHQUFBQSxDQUFjTCxDQUFkSyxFQUFnQ1EsQ0FBaENSLEVBQXVDSCxDQUFBQSxJQUFlWSxDQUF0RFQsQ0FER0EsRUFHSkgsQ0FBQUEsR0FBYyxDQUhWRztJQUdVLE1BT1JVLENBQUFBLEdBQ0xmLENBQUFBLENBQUFBLEdBQUFBLEtBQ0NBLENBQUFBLENBQUFBLEdBQUFBLEdBQTJCO0lBQUEsSUFBQSxFQUFBLEVBQ3BCLEVBRG9CO0lBQ3BCLElBQUEsR0FBQSxFQUNVO0lBRlUsR0FENUJBLENBUmE7SUFXSyxTQUdmYSxDQUFBQSxJQUFTRSxDQUFBQSxDQUFBQSxFQUFBQSxDQUFZQyxNQUFyQkgsSUFDSEUsQ0FBQUEsQ0FBQUEsRUFBQUEsQ0FBWUUsSUFBWkYsQ0FBaUIsRUFBakJBLENBREdGLEVBR0dFLENBQUFBLENBQUFBLEVBQUFBLENBQVlGLENBQVpFLENBTlk7SUFZYjs7SUFBQSxTQUFTRyxDQUFULENBQWtCQyxDQUFsQixFQUFrQkE7SUFBQUEsU0FDeEJqQixDQUFBQSxHQUFjLENBQWRBLEVBQ09rQixDQUFBQSxDQUFXQyxHQUFYRCxFQUEyQkQsQ0FBM0JDLENBRmlCRDtJQVd6Qjs7SUFBQSxTQUFnQkMsQ0FBaEIsQ0FBMkJFLENBQTNCLEVBQW9DSCxDQUFwQyxFQUFrREksQ0FBbEQsRUFBa0RBO0lBQUFBLE1BRTNDQyxDQUFBQSxHQUFZWixDQUFBQSxDQUFhYixDQUFBQSxFQUFiYSxFQUE2QixDQUE3QkEsQ0FGK0JXO0lBRUYsU0FDL0NDLENBQUFBLENBQVVDLENBQVZELEdBQXFCRixDQUFyQkUsRUFDS0EsQ0FBQUEsQ0FBQUEsR0FBQUEsS0FDSkEsQ0FBQUEsQ0FBQUEsRUFBQUEsR0FBbUIsQ0FDakJELENBQUFBLEdBQWlEQSxDQUFBQSxDQUFLSixDQUFMSSxDQUFqREEsR0FBT0YsR0FBQUEsQ0FBQUEsS0FBZUssQ0FBZkwsRUFBMEJGLENBQTFCRSxDQURVLEVBR2xCLFVBQUEsQ0FBQSxFQUFBO0lBQUEsUUFDT00sQ0FBQUEsR0FBWUgsQ0FBQUEsQ0FBVUMsQ0FBVkQsQ0FBbUJBLENBQUFBLENBQUFBLEVBQUFBLENBQWlCLENBQWpCQSxDQUFuQkEsRUFBd0NJLENBQXhDSixDQURuQjtJQUVLQSxJQUFBQSxDQUFBQSxDQUFBQSxFQUFBQSxDQUFpQixDQUFqQkEsTUFBd0JHLENBQXhCSCxLQUNIQSxDQUFBQSxDQUFBQSxFQUFBQSxHQUFtQixDQUFDRyxDQUFELEVBQVlILENBQUFBLENBQUFBLEVBQUFBLENBQWlCLENBQWpCQSxDQUFaLENBQW5CQSxFQUNBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFxQkssUUFBckJMLENBQThCLEVBQTlCQSxDQUZHQTtJQUUyQixHQVBkLENBQW5CQSxFQVlBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUF1QnhCLENBYm5Cd0IsQ0FETEEsRUFpQk9BLENBQUFBLENBQUFBLEVBbEJ3QztJQXlCekM7O0lBQUEsU0FBU00sQ0FBVCxDQUFtQkMsQ0FBbkIsRUFBNkJDLENBQTdCLEVBQTZCQTtJQUFBQSxNQUU3QkMsQ0FBQUEsR0FBUXJCLENBQUFBLENBQWFiLENBQUFBLEVBQWJhLEVBQTZCLENBQTdCQSxDQUZxQm9CO0lBRVEsR0FDdEMzQixHQUFBQSxDQUFBQSxHQURzQyxJQUNkNkIsQ0FBQUEsQ0FBWUQsQ0FBQUEsQ0FBQUEsR0FBWkMsRUFBeUJGLENBQXpCRSxDQURjLEtBRTFDRCxDQUFBQSxDQUFBQSxFQUFBQSxHQUFlRixDQUFmRSxFQUNBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUFjRCxDQURkQyxFQUdBakMsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsQ0FBeUNpQixJQUF6Q2pCLENBQThDaUMsQ0FBOUNqQyxDQUwwQztJQWFyQzs7SUFBQSxTQUFTbUMsQ0FBVCxDQUF5QkosQ0FBekIsRUFBbUNDLENBQW5DLEVBQW1DQTtJQUFBQSxNQUVuQ0MsQ0FBQUEsR0FBUXJCLENBQUFBLENBQWFiLENBQUFBLEVBQWJhLEVBQTZCLENBQTdCQSxDQUYyQm9CO0lBRUUsR0FDdEMzQixHQUFBQSxDQUFBQSxHQURzQyxJQUNkNkIsQ0FBQUEsQ0FBWUQsQ0FBQUEsQ0FBQUEsR0FBWkMsRUFBeUJGLENBQXpCRSxDQURjLEtBRTFDRCxDQUFBQSxDQUFBQSxFQUFBQSxHQUFlRixDQUFmRSxFQUNBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUFjRCxDQURkQyxFQUdBakMsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBa0NpQixJQUFsQ2pCLENBQXVDaUMsQ0FBdkNqQyxDQUwwQztJQVNyQzs7SUFBQSxTQUFTb0MsQ0FBVCxDQUFnQkMsQ0FBaEIsRUFBZ0JBO0lBQUFBLFNBQ3RCbkMsQ0FBQUEsR0FBYyxDQUFkQSxFQUNPb0MsR0FBQUEsQ0FBUSxZQUFBO0lBQUEsV0FBTztJQUFFQyxNQUFBQSxPQUFBQSxFQUFTRjtJQUFYLEtBQVA7SUFBa0JBLEdBQTFCQyxFQUEyQyxFQUEzQ0EsQ0FGZUQ7SUFVdkI7O0lBZU8sU0FBU0MsR0FBVCxDQUFpQkUsQ0FBakIsRUFBMEJSLENBQTFCLEVBQTBCQTtJQUFBQSxNQUUxQkMsQ0FBQUEsR0FBUXJCLENBQUFBLENBQWFiLENBQUFBLEVBQWJhLEVBQTZCLENBQTdCQSxDQUZrQm9CO0lBRVcsU0FDdkNFLENBQUFBLENBQVlELENBQUFBLENBQUFBLEdBQVpDLEVBQXlCRixDQUF6QkUsQ0FBQUEsS0FDSEQsQ0FBQUEsQ0FBQUEsRUFBQUEsR0FBZU8sQ0FBQUEsRUFBZlAsRUFDQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FBY0QsQ0FEZEMsRUFFQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FBaUJPLENBSGROLEdBTUdELENBQUFBLENBQUFBLEVBUG9DO0lBY3JDOztJQUFBLFNBQVNRLENBQVQsQ0FBcUJWLENBQXJCLEVBQStCQyxDQUEvQixFQUErQkE7SUFBQUEsU0FDckM5QixDQUFBQSxHQUFjLENBQWRBLEVBQ09vQyxHQUFBQSxDQUFRLFlBQUE7SUFBQSxXQUFNUCxDQUFOO0lBQU1BLEdBQWRPLEVBQXdCTixDQUF4Qk0sQ0FGOEJOO0lBUS9COztJQUFBLFNBQVNVLEdBQVQsQ0FBb0JDLENBQXBCLEVBQW9CQTtJQUFBQSxNQUNwQkMsQ0FBQUEsR0FBVzVDLENBQUFBLENBQWlCMkMsT0FBakIzQyxDQUF5QjJDLENBQUFBLENBQUFBLEdBQXpCM0MsQ0FEUzJDO0lBQUFBLE1BTXBCVixDQUFBQSxHQUFRckIsQ0FBQUEsQ0FBYWIsQ0FBQUEsRUFBYmEsRUFBNkIsQ0FBN0JBLENBTlkrQjtJQU1pQixTQUkzQ1YsQ0FBQUEsQ0FBQUEsQ0FBQUEsR0FBaUJVLENBQWpCVixFQUNLVyxDQUFBQSxJQUVlLFFBQWhCWCxDQUFBQSxDQUFBQSxFQUFnQixLQUNuQkEsQ0FBQUEsQ0FBQUEsRUFBQUEsR0FBQUEsQ0FBZSxDQUFmQSxFQUNBVyxDQUFBQSxDQUFTQyxHQUFURCxDQUFhNUMsQ0FBYjRDLENBRm1CLEdBSWJBLENBQUFBLENBQVNFLEtBQVRGLENBQWVHLEtBTmpCSCxJQUFpQkQsQ0FBQUEsQ0FBQUEsRUFMcUI7SUFrQnJDOztJQStCUCxTQUFTSyxDQUFULEdBQVNBO0lBQ1I3QyxFQUFBQSxDQUFBQSxDQUFrQjhDLE9BQWxCOUMsQ0FBMEIsVUFBQSxDQUFBLEVBQUE7SUFBQSxRQUNyQitDLENBQUFBLENBQUFBLEdBRHFCLEVBQ3JCQSxJQUFBQTtJQUVGQSxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxDQUFrQ0QsT0FBbENDLENBQTBDQyxHQUExQ0QsR0FDQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsQ0FBa0NELE9BQWxDQyxDQUEwQ0UsR0FBMUNGLENBREFBLEVBRUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLEdBQUFBLEdBQW9DLEVBRnBDQTtJQUdDLEtBTENBLENBS0QsT0FBT0csQ0FBUCxFQUFPQTtJQUNSSCxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFvQyxFQUFwQ0EsRUFDQTdDLEdBQUFBLENBQUFBLEdBQUFBLENBQW9CZ0QsQ0FBcEJoRCxFQUF1QjZDLENBQUFBLENBQUFBLEdBQXZCN0MsQ0FEQTZDO0lBQ3VCQTtJQUFBQSxHQVIxQi9DLEdBWUFBLENBQUFBLEdBQW9CLEVBWnBCQTtJQXZRREU7O0FBQUFBLE9BQUFBLENBQUFBLEdBQUFBLEdBQWdCLFVBQUEsQ0FBQSxFQUFBO0lBQ2ZMLEVBQUFBLENBQUFBLEdBQW1CLElBQW5CQSxFQUNJSSxDQUFBQSxJQUFlQSxDQUFBQSxDQUFja0QsQ0FBZGxELENBRG5CSjtJQUNpQ3NELENBRmxDakQsRUFLQUEsR0FBQUEsQ0FBQUEsR0FBQUEsR0FBa0IsVUFBQSxDQUFBLEVBQUE7SUFDYkMsRUFBQUEsQ0FBQUEsSUFBaUJBLENBQUFBLENBQWdCZ0QsQ0FBaEJoRCxDQUFqQkEsRUFHSlAsQ0FBQUEsR0FBZSxDQUhYTztJQUdXLE1BRVRTLENBQUFBLEdBQUFBLENBSE5mLENBQUFBLEdBQW1Cc0QsQ0FBQUEsQ0FBQUEsR0FHYnZDLEVBSGF1QyxHQUNKO0lBR1h2QyxFQUFBQSxDQUFBQSxLQUNIQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFzQmtDLE9BQXRCbEMsQ0FBOEJvQyxHQUE5QnBDLEdBQ0FBLENBQUFBLENBQUFBLEdBQUFBLENBQXNCa0MsT0FBdEJsQyxDQUE4QnFDLEdBQTlCckMsQ0FEQUEsRUFFQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FBd0IsRUFIckJBLENBQUFBO0lBR3FCLENBZjFCVixFQW1CQUEsR0FBQUEsQ0FBUUcsTUFBUkgsR0FBaUIsVUFBQSxDQUFBLEVBQUE7SUFDWkUsRUFBQUEsQ0FBQUEsSUFBY0EsQ0FBQUEsQ0FBYStDLENBQWIvQyxDQUFkQTtJQUEyQitDLE1BRXpCQyxDQUFBQSxHQUFJRCxDQUFBQSxDQUFBQSxHQUZxQkE7SUFHM0JDLEVBQUFBLENBQUFBLElBQUtBLENBQUFBLENBQUFBLEdBQUxBLElBQWtCQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxDQUEwQnZDLE1BQTVDdUMsS0FpU21CLE1BaFNYcEQsQ0FBQUEsQ0FBa0JjLElBQWxCZCxDQUF1Qm9ELENBQXZCcEQsQ0FnU1csSUFBS0YsQ0FBQUEsS0FBWUksR0FBQUEsQ0FBUW1ELHFCQUF6QixJQUF5QkEsQ0FBQUEsQ0FDL0N2RCxDQUFBQSxHQUFVSSxHQUFBQSxDQUFRbUQscUJBRDZCQSxLQXRCakQsVUFBd0J6QixDQUF4QixFQUF3QkE7SUFBQUEsUUFRbkIwQixDQVJtQjFCO0lBQUFBLFFBQ2pCMkIsQ0FBQUEsR0FBTyxZQUFBO0lBQ1pDLE1BQUFBLFlBQUFBLENBQWFDLENBQWJELENBQUFBLEVBQ0lFLENBQUFBLElBQVNDLG9CQUFBQSxDQUFxQkwsQ0FBckJLLENBRGJILEVBRUFJLFVBQUFBLENBQVdoQyxDQUFYZ0MsQ0FGQUo7SUFFVzVCLEtBSldBO0lBQUFBLFFBTWpCNkIsQ0FBQUEsR0FBVUcsVUFBQUEsQ0FBV0wsQ0FBWEssRUEzU0csR0EyU0hBLENBTk9oQzs7SUFTbkI4QixJQUFBQSxDQUFBQSxLQUNISixDQUFBQSxHQUFNRCxxQkFBQUEsQ0FBc0JFLENBQXRCRixDQURISyxDQUFBQTtJQUN5QkgsR0FZbUJGLEVBRW5CUixDQUZtQlEsQ0FqUzVDRCxHQUdKdkQsQ0FBQUEsR0FBbUIsSUFIZnVEO0lBR2UsQ0ExQnBCbEQsRUE2QkFBLEdBQUFBLENBQUFBLEdBQUFBLEdBQWtCLFVBQUNpRCxDQUFELEVBQVFVLENBQVIsRUFBUUE7SUFDekJBLEVBQUFBLENBQUFBLENBQVlDLElBQVpELENBQWlCLFVBQUEsQ0FBQSxFQUFBO0lBQUEsUUFBQTtJQUVmZCxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUEyQkQsT0FBM0JDLENBQW1DQyxHQUFuQ0QsR0FDQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FBNkJBLENBQUFBLENBQUFBLEdBQUFBLENBQTJCZ0IsTUFBM0JoQixDQUFrQyxVQUFBLENBQUEsRUFBQTtJQUFBLGVBQUEsQ0FDOURpQixDQUFBQSxDQUFBQSxFQUQ4RCxJQUNsRGYsR0FBQUEsQ0FBYWUsQ0FBYmYsQ0FEa0Q7SUFDckNlLE9BREdqQixDQUQ3QkE7SUFJQyxLQU5jLENBTWQsT0FBT0csQ0FBUCxFQUFPQTtJQUNSVyxNQUFBQSxDQUFBQSxDQUFZQyxJQUFaRCxDQUFpQixVQUFBLENBQUEsRUFBQTtJQUNaVCxRQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxLQUFvQkEsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FBcUIsRUFBekNBO0lBQXlDLE9BRDlDUyxHQUdBQSxDQUFBQSxHQUFjLEVBSGRBLEVBSUEzRCxHQUFBQSxDQUFBQSxHQUFBQSxDQUFvQmdELENBQXBCaEQsRUFBdUI2QyxDQUFBQSxDQUFBQSxHQUF2QjdDLENBSkEyRDtJQUl1QmQ7SUFBQUEsR0FYekJjLEdBZUl2RCxDQUFBQSxJQUFXQSxDQUFBQSxDQUFVNkMsQ0FBVjdDLEVBQWlCdUQsQ0FBakJ2RCxDQWZmdUQ7SUFlZ0NBLENBN0NqQzNELEVBZ0RBQSxHQUFBQSxDQUFRTSxPQUFSTixHQUFrQixVQUFBLENBQUEsRUFBQTtJQUNiSyxFQUFBQSxDQUFBQSxJQUFrQkEsQ0FBQUEsQ0FBaUI0QyxDQUFqQjVDLENBQWxCQTtJQUFtQzRDLE1BRWpDQyxDQUFBQSxHQUFJRCxDQUFBQSxDQUFBQSxHQUY2QkE7SUFFN0JBLE1BQ05DLENBQUFBLElBQUtBLENBQUFBLENBQUFBLEdBRENELEVBQ0RDLElBQUFBO0lBRVBBLElBQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLEVBQUFBLENBQWdCTixPQUFoQk0sQ0FBd0JKLEdBQXhCSTtJQUNDLEdBSE1BLENBR04sT0FBT0YsQ0FBUCxFQUFPQTtJQUNSaEQsSUFBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsQ0FBb0JnRCxDQUFwQmhELEVBQXVCa0QsQ0FBQUEsQ0FBQUEsR0FBdkJsRDtJQUF1QmtEO0lBQUFBLENBeEQxQmxEO0lBc1JBLElBQUl3RCxDQUFBQSxHQUEwQyxjQUFBLE9BQXpCTCxxQkFBckI7O0lBMkNBLFNBQVNMLEdBQVQsQ0FBdUJpQixDQUF2QixFQUF1QkE7SUFBQUEsTUFHaEJDLENBQUFBLEdBQU9yRSxDQUhTb0U7SUFJTSxnQkFBQSxPQUFqQkEsQ0FBQUEsQ0FBQUEsR0FBaUIsSUFBWUEsQ0FBQUEsQ0FBQUEsR0FBQUEsRUFBWixFQUM1QnBFLENBQUFBLEdBQW1CcUUsQ0FEUztJQVE3Qjs7SUFBQSxTQUFTakIsR0FBVCxDQUFzQmdCLENBQXRCLEVBQXNCQTtJQUFBQSxNQUdmQyxDQUFBQSxHQUFPckUsQ0FIUW9FO0lBSXJCQSxFQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUFnQkEsQ0FBQUEsQ0FBQUEsRUFBQUEsRUFBaEJBLEVBQ0FwRSxDQUFBQSxHQUFtQnFFLENBRG5CRDtJQVFEOztJQUFBLFNBQVNsQyxDQUFULENBQXFCb0MsQ0FBckIsRUFBOEJDLENBQTlCLEVBQThCQTtJQUFBQSxTQUFBQSxDQUUzQkQsQ0FGMkJDLElBRzVCRCxDQUFBQSxDQUFRdEQsTUFBUnNELEtBQW1CQyxDQUFBQSxDQUFRdkQsTUFIQ3VELElBSTVCQSxDQUFBQSxDQUFRTixJQUFSTSxDQUFhLFVBQUNDLENBQUQsRUFBTTNELENBQU4sRUFBTUE7SUFBQUEsV0FBVTJELENBQUFBLEtBQVFGLENBQUFBLENBQVF6RCxDQUFSeUQsQ0FBbEJ6RDtJQUEwQkEsR0FBN0MwRCxDQUo0QkE7SUFROUI7O0lBQUEsU0FBU2xELEdBQVQsQ0FBd0JtRCxDQUF4QixFQUE2QkMsQ0FBN0IsRUFBNkJBO0lBQUFBLFNBQ1QsY0FBQSxPQUFMQSxDQUFLLEdBQWFBLENBQUFBLENBQUVELENBQUZDLENBQWIsR0FBc0JBLENBRGJBO0lBQ2FBOztJQ25YMUM7Ozs7SUFJRzs7SUFDRyxTQUFVLGtCQUFWLEdBQTBEO0lBQUEsb0NBQVQsTUFBUztJQUFULElBQUEsTUFBUztJQUFBOztJQUM1RCxFQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBUixFQUFnQixDQUFoQixDQUFUO0lBQ0EsRUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLFNBQWY7SUFDQTs7SUFHQSxXQUFTLFNBQVQsQ0FBc0IsS0FBdEIsRUFBZ0MsS0FBaEMsRUFBNkM7SUFFekM7SUFDQSxVQUFNLHVCQUF1QixHQUFHckMsQ0FBTSxDQUFDLEtBQUQsQ0FBdEM7SUFDQSxVQUFNLFVBQVUsR0FBR0EsQ0FBTSxDQUFDLEtBQUQsQ0FBekI7O0lBQ0EsUUFBSSx1QkFBdUIsQ0FBQyxPQUF4QixJQUFtQyxLQUF2QyxFQUE4QztJQUMxQyxVQUFJLENBQUMsVUFBVSxDQUFDLE9BQWhCLEVBQXlCO0lBQ3JCLFFBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxzR0FBc0csS0FBSyxrQ0FBekg7SUFDQTtJQUNBLFFBQUEsVUFBVSxDQUFDLE9BQVgsR0FBcUIsSUFBckI7SUFDSDtJQUNKO0lBQ0o7SUFDSjtJQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCRzs7SUFDRyxTQUFVLGVBQVYsQ0FBNkIsUUFBN0IsRUFBbUYsZUFBbkYsRUFBNEc7SUFDOUcsUUFBTSxRQUFRLEdBQUdBLENBQU0sQ0FBbUJzQyxPQUFuQixDQUF2QjtJQUNBLFFBQU0sVUFBVSxHQUFHdEMsQ0FBTSxDQUFDLEtBQUQsQ0FBekI7SUFDQSxRQUFNLGtCQUFrQixHQUFHQSxDQUFNLENBQTJCLFNBQTNCLENBQWpDLENBSDhHOztJQU05RyxFQUFBLGtCQUFrQixDQUFDLFFBQUQsRUFBVyxlQUFYLENBQWxCLENBTjhHOztJQVM5RyxRQUFNLGVBQWUsR0FBR0ssQ0FBVyxDQUFDLE1BQUs7SUFDckMsUUFBSSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsT0FBekM7SUFDQSxRQUFJLGVBQUosRUFDSSxlQUFlO0lBQ3RCLEdBSmtDLEVBSWhDLEVBSmdDLENBQW5DLENBVDhHO0lBZ0I5RztJQUNBO0lBQ0E7O0lBQ0EsUUFBTSxjQUFjLEdBQUdBLENBQVcsQ0FBQyxNQUFLO0lBQ3BDLFFBQUksUUFBUSxDQUFDLE9BQVQsS0FBcUJpQyxPQUFyQixJQUE4QixlQUFlLElBQUksU0FBckQsRUFBZ0U7SUFDNUQsVUFBSTtJQUFBOztJQUNBLGNBQU0sWUFBWSxHQUFHLGVBQWUsRUFBcEM7SUFDQSxRQUFBLFFBQVEsQ0FBQyxPQUFULEdBQW1CLFlBQW5CO0lBQ0EsUUFBQSxrQkFBa0IsQ0FBQyxPQUFuQixnQkFBOEIsUUFBOUIsYUFBOEIsUUFBOUIsdUJBQThCLFFBQVEsQ0FBRyxZQUFILEVBQWlCLFNBQWpCLENBQXRDLGlEQUFxRSxTQUFyRTtJQUNILE9BSkQsQ0FLQSxPQUFPLEVBQVAsRUFBVztJQUVWO0lBQ0o7SUFDSixHQVhpQyxFQVcvQjtJQUFDO0lBQUQsR0FYK0IsQ0FBbEM7SUFjQSxRQUFNLFFBQVEsR0FBR2pDLENBQVcsQ0FBQyxNQUFLO0lBQzlCLFFBQUksVUFBVSxDQUFDLE9BQWYsRUFDSSxPQUFPLENBQUMsSUFBUixDQUFhLGdNQUFiLEVBRjBCO0lBSzlCO0lBQ0E7O0lBQ0EsUUFBSSxRQUFRLENBQUMsT0FBVCxLQUFxQmlDLE9BQXpCLEVBQ0ksY0FBYztJQUVsQixXQUFRLFFBQVEsQ0FBQyxPQUFULEtBQXFCQSxPQUFyQixHQUE2QixTQUE3QixHQUEwQyxRQUFRLENBQUMsT0FBM0Q7SUFDSCxHQVgyQixFQVd6QixFQVh5QixDQUE1QjtJQWFBLEVBQUF2QyxDQUFlLENBQUMsTUFBSztJQUNqQjtJQUNBO0lBQ0EsSUFBQSxjQUFjO0lBR2pCLEdBTmMsRUFNWixFQU5ZLENBQWYsQ0E5QzhHOztJQXVEOUcsUUFBTSxRQUFRLEdBQUdNLENBQVcsQ0FBMEIsR0FBRCxJQUFRO0lBQ3pELFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFULEtBQXFCaUMsT0FBckIsR0FBNkIsU0FBN0IsR0FBeUMsUUFBUSxFQUFqRTtJQUNBLFVBQU0sR0FBRyxHQUFHLEdBQUcsWUFBWSxRQUFmLEdBQTBCLEdBQUcsQ0FBQyxPQUFELENBQTdCLEdBQTBDLEdBQXREOztJQUVBLFFBQUksR0FBRyxLQUFLLFFBQVEsQ0FBQyxPQUFyQixFQUE4QjtJQUFBOztJQUUxQjtJQUNBLE1BQUEsVUFBVSxDQUFDLE9BQVgsR0FBcUIsSUFBckIsQ0FIMEI7O0lBTTFCLE1BQUEsZUFBZTtJQUNmLE1BQUEsa0JBQWtCLENBQUMsT0FBbkIsaUJBQThCLFFBQTlCLGFBQThCLFFBQTlCLHVCQUE4QixRQUFRLENBQUcsR0FBSCxFQUFRLE9BQVIsQ0FBdEMsbURBQTBELFNBQTFEO0lBQ0EsTUFBQSxRQUFRLENBQUMsT0FBVCxHQUFtQixHQUFuQixDQVIwQjs7SUFXMUIsTUFBQSxVQUFVLENBQUMsT0FBWCxHQUFxQixLQUFyQjtJQUNIO0lBQ0osR0FqQjJCLEVBaUJ6QixFQWpCeUIsQ0FBNUI7SUFtQkEsU0FBTyxDQUFDLFFBQUQsRUFBVyxRQUFYLENBQVA7SUFDSDtJQUVELE1BQU1BLE9BQUssR0FBRyxNQUFNLEVBQXBCOztJQzNITSxTQUFVLGlCQUFWLENBQW9MLFFBQXBMLEVBQW1NLFFBQW5NLEVBQWdOO0lBRWxOLFFBQU0sR0FBRyxHQUFHLFFBQUgsYUFBRyxRQUFILHVCQUFHLFFBQVEsQ0FBRSxRQUF0QjtJQUNBLFFBQU0sR0FBRyxHQUFHLFFBQUgsYUFBRyxRQUFILHVCQUFHLFFBQVEsQ0FBRSxRQUF0Qjs7SUFDQSxNQUFJLEdBQUcsSUFBSSxJQUFQLElBQWUsR0FBRyxJQUFJLElBQTFCLEVBQWdDO0lBQzVCLFdBQU8sU0FBUDtJQUNILEdBRkQsTUFHSyxJQUFJLEdBQUcsSUFBSSxJQUFYLEVBQWlCO0lBQ2xCLFdBQU8sR0FBUDtJQUNILEdBRkksTUFHQSxJQUFJLEdBQUcsSUFBSSxJQUFYLEVBQWlCO0lBQ2xCLFdBQU8sR0FBUDtJQUNILEdBRkksTUFHQTtJQUNELFFBQUksR0FBRyxHQUFHQyxHQUFhLENBQUNDLENBQUQsRUFBVyxFQUFYLEVBQWUsR0FBZixFQUFvQixHQUFwQixDQUF2QjtJQUNBLFdBQU8sR0FBUDtJQUNIO0lBQ0o7O0lDckJELFNBQVNDLEtBQVQsQ0FBZUMsR0FBZixFQUFvQjtJQUNuQixNQUFJQyxDQUFKO0lBQUEsTUFBT0MsQ0FBUDtJQUFBLE1BQVVDLEdBQUcsR0FBQyxFQUFkOztJQUVBLE1BQUksT0FBT0gsR0FBUCxLQUFlLFFBQWYsSUFBMkIsT0FBT0EsR0FBUCxLQUFlLFFBQTlDLEVBQXdEO0lBQ3ZERyxJQUFBQSxHQUFHLElBQUlILEdBQVA7SUFDQSxHQUZELE1BRU8sSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7SUFDbkMsUUFBSUksS0FBSyxDQUFDQyxPQUFOLENBQWNMLEdBQWQsQ0FBSixFQUF3QjtJQUN2QixXQUFLQyxDQUFDLEdBQUMsQ0FBUCxFQUFVQSxDQUFDLEdBQUdELEdBQUcsQ0FBQzlELE1BQWxCLEVBQTBCK0QsQ0FBQyxFQUEzQixFQUErQjtJQUM5QixZQUFJRCxHQUFHLENBQUNDLENBQUQsQ0FBUCxFQUFZO0lBQ1gsY0FBSUMsQ0FBQyxHQUFHSCxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBRCxDQUFKLENBQWIsRUFBdUI7SUFDdEJFLFlBQUFBLEdBQUcsS0FBS0EsR0FBRyxJQUFJLEdBQVosQ0FBSDtJQUNBQSxZQUFBQSxHQUFHLElBQUlELENBQVA7SUFDQTtJQUNEO0lBQ0Q7SUFDRCxLQVRELE1BU087SUFDTixXQUFLRCxDQUFMLElBQVVELEdBQVYsRUFBZTtJQUNkLFlBQUlBLEdBQUcsQ0FBQ0MsQ0FBRCxDQUFQLEVBQVk7SUFDWEUsVUFBQUEsR0FBRyxLQUFLQSxHQUFHLElBQUksR0FBWixDQUFIO0lBQ0FBLFVBQUFBLEdBQUcsSUFBSUYsQ0FBUDtJQUNBO0lBQ0Q7SUFDRDtJQUNEOztJQUVELFNBQU9FLEdBQVA7SUFDQTs7SUFFYyxpQkFBWTtJQUMxQixNQUFJRyxDQUFDLEdBQUMsQ0FBTjtJQUFBLE1BQVNDLEdBQVQ7SUFBQSxNQUFjQyxDQUFkO0lBQUEsTUFBaUJMLEdBQUcsR0FBQyxFQUFyQjs7SUFDQSxTQUFPRyxDQUFDLEdBQUdHLFNBQVMsQ0FBQ3ZFLE1BQXJCLEVBQTZCO0lBQzVCLFFBQUlxRSxHQUFHLEdBQUdFLFNBQVMsQ0FBQ0gsQ0FBQyxFQUFGLENBQW5CLEVBQTBCO0lBQ3pCLFVBQUlFLENBQUMsR0FBR1QsS0FBSyxDQUFDUSxHQUFELENBQWIsRUFBb0I7SUFDbkJKLFFBQUFBLEdBQUcsS0FBS0EsR0FBRyxJQUFJLEdBQVosQ0FBSDtJQUNBQSxRQUFBQSxHQUFHLElBQUlLLENBQVA7SUFDQTtJQUNEO0lBQ0Q7O0lBQ0QsU0FBT0wsR0FBUDtJQUNBOztJQ3BDRDs7Ozs7OztJQU9HOztJQUNHLFNBQVUsZ0JBQVYsQ0FBK0gsR0FBL0gsRUFBeUksR0FBekksRUFBaUo7SUFFbko7SUFDQTtJQUNBLFNBQU8sWUFBWSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQW5CO0lBQ0g7O0lBbUJELFNBQVMsWUFBVCxDQUEwSCxHQUExSCxFQUFvSSxHQUFwSSxFQUE0STtJQUN4SSxRQUFNLFFBQVEsR0FBRyxHQUFILGFBQUcsR0FBSCx1QkFBRyxHQUFHLENBQUUsS0FBdEI7SUFDQSxRQUFNLFlBQVksR0FBRyxHQUFILGFBQUcsR0FBSCx1QkFBRyxHQUFHLENBQUUsU0FBMUI7SUFDQSxRQUFNLFFBQVEsR0FBRyxHQUFILGFBQUcsR0FBSCx1QkFBRyxHQUFHLENBQUUsS0FBdEI7SUFDQSxRQUFNLFlBQVksR0FBRyxHQUFILGFBQUcsR0FBSCx1QkFBRyxHQUFHLENBQUUsU0FBMUI7O0lBRUEsTUFBSSxRQUFRLElBQUksUUFBWixJQUF3QixZQUF4QixJQUF3QyxZQUE1QyxFQUEwRDtJQUN0RCxRQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBRCxFQUFXLFlBQVgsQ0FBSixDQUE2QixLQUE3QixDQUFtQyxHQUFuQyxDQUFqQjtJQUNBLFFBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFELEVBQVcsWUFBWCxDQUFKLENBQTZCLEtBQTdCLENBQW1DLEdBQW5DLENBQWpCO0lBQ0EsUUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFKLENBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFOLENBQVcsVUFBWCxDQUFKLEVBQTRCLEdBQUcsS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFYLENBQS9CLENBQVIsQ0FBakI7SUFFQSxXQUFPLEtBQUssQ0FBQyxJQUFOLENBQVcsVUFBWCxFQUF1QixJQUF2QixDQUE0QixHQUE1QixDQUFQO0lBQ0gsR0FORCxNQU9LO0lBQ0QsV0FBTyxTQUFQO0lBQ0g7SUFDSjs7SUMvQ0QsU0FBUyxVQUFULENBQXVCLFFBQXZCLEVBQTJDLEdBQTNDLEVBQXlFO0lBQ3JFLE1BQUksT0FBTyxHQUFQLEtBQWUsVUFBbkIsRUFBK0I7SUFDM0IsSUFBQSxHQUFHLENBQUMsUUFBRCxDQUFIO0lBQ0gsR0FGRCxNQUdLLElBQUksR0FBRyxJQUFJLElBQVgsRUFBaUI7SUFDakIsSUFBQSxHQUEyQixDQUFDLE9BQTVCLEdBQXNDLFFBQXRDO0lBQ0osR0FGSSxNQUdBO0lBQ0QsYUFEQzs7SUFFRCxJQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZixFQUFzQix1RUFBdEI7SUFDSDtJQUNKO0lBR0Q7Ozs7O0lBS0c7OztJQUNHLFNBQVUsYUFBVixHQUF1QjtJQUN6QixTQUFPLFVBQW9KLFFBQXBKLEVBQW1LLFFBQW5LLEVBQWdMO0lBRW5MLFVBQU0sR0FBRyxHQUFHLFFBQUgsYUFBRyxRQUFILHVCQUFHLFFBQVEsQ0FBRSxHQUF0QjtJQUNBLFVBQU0sR0FBRyxHQUFHLFFBQUgsYUFBRyxRQUFILHVCQUFHLFFBQVEsQ0FBRSxHQUF0QjtJQUNBLFFBQUksUUFBUSxHQUFtQnhDLENBQVcsQ0FBRSxPQUFELElBQXNCO0lBQzdELE1BQUEsVUFBVSxDQUFDLE9BQUQsRUFBVSxHQUFWLENBQVY7SUFDQSxNQUFBLFVBQVUsQ0FBQyxPQUFELEVBQVUsR0FBVixDQUFWO0lBQ0gsS0FIeUMsRUFHdkMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUh1QyxDQUExQzs7SUFNQSxRQUFJLEdBQUcsSUFBSSxJQUFQLElBQWUsR0FBRyxJQUFJLElBQTFCLEVBQWdDO0lBQzVCLGFBQU8sU0FBUDtJQUNILEtBRkQsTUFHSyxJQUFJLEdBQUcsSUFBSSxJQUFYLEVBQWlCO0lBQ2xCLGFBQU8sR0FBUDtJQUNILEtBRkksTUFHQSxJQUFJLEdBQUcsSUFBSSxJQUFYLEVBQWlCO0lBQ2xCLGFBQU8sR0FBUDtJQUNILEtBRkksTUFHQTtJQUNELGFBQU8sUUFBUDtJQUNIO0lBQ0osR0F0QkQ7SUF1Qkg7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQ0U7O0lDbkZGLFNBQVMsbUJBQVQsQ0FBNkIsS0FBN0IsRUFBMEM7SUFDdEM7SUFDQSxTQUFPLE1BQU0sQ0FBQyxXQUFQLENBQW1CLEtBQUssQ0FBQyxLQUFOLENBQVksR0FBWixFQUFpQixHQUFqQixDQUFxQixTQUFTLElBQUksU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBbEMsQ0FBbkIsQ0FBUDtJQUNIO0lBRUQ7Ozs7OztJQU1HOzs7SUFDRyxTQUFVLGVBQVYsQ0FBNEssR0FBNUssRUFBc0wsR0FBdEwsRUFBOEw7SUFBQTs7SUFFaE07SUFDQSxNQUFJLEVBQUMsR0FBRCxhQUFDLEdBQUQsZUFBQyxHQUFHLENBQUUsS0FBTixLQUFlLEVBQUMsR0FBRCxhQUFDLEdBQUQsZUFBQyxHQUFHLENBQUUsS0FBTixDQUFuQixFQUNJLE9BQU8sU0FBUDs7SUFFSixNQUFJLE9BQU8sR0FBUCxJQUFjLE9BQU8sR0FBekIsRUFBOEI7SUFDMUI7SUFDQSxRQUFJLEdBQUcsU0FBSCxJQUFBLEdBQUcsV0FBSCxJQUFBLEdBQUcsQ0FBRSxLQUFMLElBQWMsRUFBQyxHQUFELGFBQUMsR0FBRCxlQUFDLEdBQUcsQ0FBRSxLQUFOLENBQWxCLEVBQ0ksT0FBTyxHQUFHLENBQUMsS0FBWDtJQUNKLFFBQUksRUFBQyxHQUFELGFBQUMsR0FBRCxlQUFDLEdBQUcsQ0FBRSxLQUFOLEtBQWUsR0FBZixhQUFlLEdBQWYsZUFBZSxHQUFHLENBQUUsS0FBeEIsRUFDSSxPQUFPLEdBQUcsQ0FBQyxLQUFYLENBTHNCO0lBUTFCOztJQUNBLFFBQUksR0FBRyxTQUFILElBQUEsR0FBRyxXQUFILElBQUEsR0FBRyxDQUFFLEtBQUwsSUFBYyxHQUFkLGFBQWMsR0FBZCxlQUFjLEdBQUcsQ0FBRSxLQUF2QixFQUE4QjtJQUMxQjtJQUNBLFVBQUksUUFBTyxHQUFQLGFBQU8sR0FBUCx1QkFBTyxHQUFHLENBQUUsS0FBWixLQUFxQixRQUF6QixFQUNJLE9BQU8sZUFBZSxDQUFDO0lBQUUsUUFBQSxLQUFLLEVBQUUsbUJBQW1CLENBQUMsR0FBRCxhQUFDLEdBQUQsdUJBQUMsR0FBRyxDQUFFLEtBQU47SUFBNUIsT0FBRCxFQUF1RCxHQUF2RCxDQUF0QjtJQUNKLFVBQUksUUFBTyxHQUFQLGFBQU8sR0FBUCx1QkFBTyxHQUFHLENBQUUsS0FBWixLQUFxQixRQUF6QixFQUNJLE9BQU8sZUFBZSxDQUFDLEdBQUQsRUFBTTtJQUFFLFFBQUEsS0FBSyxFQUFFLG1CQUFtQixDQUFDLEdBQUQsYUFBQyxHQUFELHVCQUFDLEdBQUcsQ0FBRSxLQUFOO0lBQTVCLE9BQU4sQ0FBdEI7SUFDUCxLQWZ5Qjs7O0lBa0IxQixXQUFPLFNBQVA7SUFDSCxHQXpCK0w7OztJQTRCaE0sTUFBSSxRQUFPLEdBQVAsYUFBTyxHQUFQLHVCQUFPLEdBQUcsQ0FBRSxLQUFaLEtBQXFCLFFBQXpCLEVBQW1DO0lBQUE7O0lBQy9CLFdBQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFaLGNBQWdCLEdBQWhCLGFBQWdCLEdBQWhCLHVCQUFnQixHQUFHLENBQUUsS0FBckIsbURBQThCLEVBQUUsRUFBdkM7SUFDSCxHQTlCK0w7OztJQWlDaE0sU0FBTyxFQUNILGtCQUFJLEdBQUosYUFBSSxHQUFKLHVCQUFJLEdBQUcsQ0FBRSxLQUFULG1EQUFrQixFQUFsQixDQURHO0lBRUgsdUJBQUksR0FBSixhQUFJLEdBQUosdUJBQUksR0FBRyxDQUFFLEtBQVQscURBQWtCLEVBQWxCO0lBRkcsR0FBUDtJQUlIOztJQzdDRCxJQUFJLEdBQUcsR0FBdUMsR0FBRCxJQUFRO0lBQUc7SUFBVSxFQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsaURBQWlELEdBQUcsRUFBakU7SUFBdUU7SUFBbUIsQ0FBNUo7SUFVQTs7Ozs7OztJQU9HOztJQUNHLFNBQVUsY0FBVixHQUF3QjtJQUMxQixTQUFPLFVBQWdGLElBQWhGLEVBQXlGLElBQXpGLEVBQWdHO0lBR25HO0lBQ0E7SUFDQSxVQUFNO0lBQUUsTUFBQSxRQUFRLEVBQUUsV0FBWjtJQUF5QixNQUFBLEtBQUssRUFBRSxRQUFoQztJQUEwQyxNQUFBLFNBQVMsRUFBRSxZQUFyRDtJQUFtRSxNQUFBLEtBQUssRUFBRSxRQUExRTtJQUFvRixNQUFBLEdBQUcsRUFBRSxNQUF6RjtJQUFpRyxTQUFHO0lBQXBHLFFBQTRHLElBQWxIO0lBQ0EsVUFBTTtJQUFFLE1BQUEsUUFBUSxFQUFFLFdBQVo7SUFBeUIsTUFBQSxLQUFLLEVBQUUsUUFBaEM7SUFBMEMsTUFBQSxTQUFTLEVBQUUsWUFBckQ7SUFBbUUsTUFBQSxLQUFLLEVBQUUsUUFBMUU7SUFBb0YsTUFBQSxHQUFHLEVBQUUsTUFBekY7SUFBaUcsU0FBRztJQUFwRyxRQUE0RyxJQUFsSDtJQUVBLFFBQUksR0FBRyxHQUF5QixFQUM1QixHQUFHLEdBRHlCO0lBRTVCLE1BQUEsR0FBRyxFQUFFLGFBQWEsR0FBTSxJQUFOLEVBQVksSUFBWixDQUZVO0lBRzVCLE1BQUEsS0FBSyxFQUFFLGVBQWUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUhNO0lBSTVCLE1BQUEsU0FBUyxFQUFFLGdCQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLENBSkM7SUFLNUIsTUFBQSxRQUFRLEVBQUUsaUJBQWlCLENBQUMsSUFBRCxFQUFPLElBQVA7SUFMQyxLQUFoQztJQVFBLFFBQUksR0FBRyxDQUFDLEdBQUosS0FBWSxTQUFoQixFQUEyQixPQUFPLEdBQUcsQ0FBQyxHQUFYO0lBQzNCLFFBQUksR0FBRyxDQUFDLEtBQUosS0FBYyxTQUFsQixFQUE2QixPQUFPLEdBQUcsQ0FBQyxLQUFYO0lBQzdCLFFBQUksR0FBRyxDQUFDLFNBQUosS0FBa0IsU0FBdEIsRUFBaUMsT0FBTyxHQUFHLENBQUMsU0FBWDtJQUNqQyxRQUFJLEdBQUcsQ0FBQyxRQUFKLEtBQWlCLFNBQXJCLEVBQWdDLE9BQU8sR0FBRyxDQUFDLFFBQVgsQ0FuQm1FO0lBc0JuRztJQUNBOztJQUNBLFVBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsR0FBZixDQUFuQjs7SUFFQSxTQUFLLE1BQU0sQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUFYLElBQWlDLFVBQWpDLEVBQTZDO0lBRXpDLFlBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFELENBQXBCOztJQUVBLFVBQUksT0FBTyxRQUFQLEtBQW9CLFVBQXBCLElBQWtDLE9BQU8sUUFBUCxLQUFvQixVQUExRCxFQUFzRTtJQUVsRTtJQUNBO0lBQ0EsY0FBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLFFBQUQsRUFBb0IsUUFBcEIsQ0FBN0I7SUFDQSxRQUFBLEdBQUcsQ0FBQyxNQUFELENBQUgsR0FBNEMsTUFBNUM7SUFDSCxPQU5ELE1BT0s7SUFDRDtJQUNBLFlBQUksUUFBUSxJQUFJLElBQVosSUFBb0IsUUFBUSxJQUFJLElBQXBDLEVBQTBDO0lBQ3RDLGNBQUksUUFBUSxLQUFLLElBQWIsSUFBcUIsUUFBUSxLQUFLLFNBQXRDLEVBQ0ksR0FBRyxDQUFDLE1BQUQsQ0FBSCxHQUE0QyxRQUE1QyxDQURKLEtBR0ksR0FBRyxDQUFDLE1BQUQsQ0FBSCxHQUE0QyxRQUE1QztJQUNQOztJQUNELFlBQUksUUFBUSxJQUFJLElBQWhCLEVBQ0ksR0FBRyxDQUFDLE1BQUQsQ0FBSCxHQUE0QyxRQUE1QyxDQURKLEtBRUssSUFBSSxRQUFRLElBQUksSUFBaEIsRUFDRCxHQUFHLENBQUMsTUFBRCxDQUFILEdBQTRDLFFBQTVDLENBREMsS0FFQSxJQUFLLFFBQWdCLElBQUksUUFBekIsRUFBbUMsQ0FBbkMsTUFLQTtJQUFBOztJQUNEO0lBQ0E7SUFDQSxrQkFBQSxHQUFHLFVBQUgsb0NBQU0sc0NBQXNDLE1BQU0sWUFBWSxPQUFPLFFBQVEsY0FBYyxRQUFRLEtBQUssUUFBUSxJQUFoSDtJQUNBLFVBQUEsR0FBRyxDQUFDLE1BQUQsQ0FBSCxHQUE0QyxRQUE1QztJQUNIO0lBQ0o7SUFDSjs7SUFFRCxXQUFPLEdBQVA7SUFDSCxHQWhFRDtJQWlFSDs7SUFFRCxTQUFTLGNBQVQsQ0FBOEYsR0FBOUYsRUFBeUgsR0FBekgsRUFBa0o7SUFFOUksTUFBSSxDQUFDLEdBQUwsRUFDSSxPQUFPLEdBQVA7SUFDSixNQUFJLENBQUMsR0FBTCxFQUNJLE9BQU8sR0FBUDtJQUVKLFNBQU8sWUFBMkI7SUFDOUIsUUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLFlBQUQsQ0FBWjtJQUNBLFFBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFELENBQVo7SUFFQSxRQUFJLEVBQUUsWUFBWSxPQUFkLElBQXlCLEVBQUUsWUFBWSxPQUEzQyxFQUNJLE9BQU8sT0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQVosQ0FBUDtJQUNQLEdBTkQ7SUFPSDtJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0tFOztJQzFRRixTQUFTK0MsWUFBVCxHQUFtQjtJQUFLLFNBQU8sSUFBUDtJQUFjO0lBQ3RDOzs7Ozs7OztJQVFHOzs7SUFDRyxTQUFVLGFBQVYsQ0FBMkIsSUFBM0IsRUFBNEQ7SUFDOUQsUUFBTSxlQUFlLEdBQUcsSUFBSCxhQUFHLElBQUgsdUJBQUcsSUFBSSxDQUFFLGVBQTlCLENBRDhEOztJQUc5RCxRQUFNLENBQUMsVUFBRCxFQUFhLFVBQWIsSUFBMkIsZUFBZSxDQUFXLGVBQVgsRUFBNEJBLFlBQTVCLENBQWhELENBSDhEO0lBTTlEOztJQUNBLFFBQU0sS0FBSyxHQUFtQi9DLENBQVcsQ0FBRSxDQUFELElBQU07SUFDNUMsUUFBSSxDQUFKLEVBQ0ksVUFBVSxDQUFDLE1BQU0sQ0FBUCxDQUFWO0lBQ1AsR0FId0MsRUFHdEMsRUFIc0MsQ0FBekM7SUFLQSxRQUFNLGtCQUFrQixHQUFHQSxDQUFXLENBQXVDLEtBQWYsSUFBZ0UsY0FBYyxHQUFRO0lBQUUsSUFBQSxHQUFHLEVBQUU7SUFBUCxHQUFSLEVBQXdCLEtBQXhCLENBQXRHLEVBQTJJLEVBQTNJLENBQXRDLENBWjhEO0lBZTlEOztJQUNBLFNBQU87SUFDSCxJQUFBLGtCQURHO0lBRUgsSUFBQTtJQUZHLEdBQVA7SUFJSDs7SUNPRCxTQUFTLFVBQVQsR0FBbUI7SUFBSyxTQUFPLElBQVA7SUFBYzs7SUFDaEMsU0FBVSxjQUFWLE9BQXlHO0lBQUEsTUFBekQ7SUFBRSxJQUFBLGFBQUY7SUFBaUIsSUFBQTtJQUFqQixHQUF5RDtJQUUzRyxFQUFBLGtCQUFrQixDQUFDLGFBQUQsRUFBZ0IsWUFBaEIsQ0FBbEI7SUFFQSxRQUFNLENBQUMsT0FBRCxFQUFVLE9BQVYsSUFBcUIsZUFBZSxDQUFxQixZQUFyQixFQUErRSxVQUEvRSxDQUExQztJQUVBLFFBQU0saUJBQWlCLEdBQUdMLENBQU0sQ0FBdUMsU0FBdkMsQ0FBaEM7SUFFQSxRQUFNLGdCQUFnQixHQUFHSyxDQUFXLENBQUMsQ0FBQyxPQUFELEVBQW9CLFVBQXBCLEtBQXdFO0lBQ3pHLFFBQUksT0FBSixFQUFhO0lBQ1QsWUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGFBQXpCO0lBQ0EsWUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQXhCOztJQUVBLFlBQU0sWUFBWSxHQUFHLE1BQUs7SUFDdEIsWUFBSSxPQUFPLENBQUMsV0FBWixFQUF5QjtJQUNyQixnQkFBTTtJQUFFLFlBQUEsV0FBRjtJQUFlLFlBQUEsV0FBZjtJQUE0QixZQUFBLFdBQTVCO0lBQXlDLFlBQUEsWUFBekM7SUFBdUQsWUFBQSxZQUF2RDtJQUFxRSxZQUFBLFlBQXJFO0lBQW1GLFlBQUEsVUFBbkY7SUFBK0YsWUFBQSxVQUEvRjtJQUEyRyxZQUFBLFVBQTNHO0lBQXVILFlBQUEsU0FBdkg7SUFBa0ksWUFBQSxTQUFsSTtJQUE2SSxZQUFBO0lBQTdJLGNBQTJKLE9BQWpLO0lBQ0EsVUFBQSxPQUFPLENBQUM7SUFBRSxZQUFBLFdBQUY7SUFBZSxZQUFBLFdBQWY7SUFBNEIsWUFBQSxXQUE1QjtJQUF5QyxZQUFBLFlBQXpDO0lBQXVELFlBQUEsWUFBdkQ7SUFBcUUsWUFBQSxZQUFyRTtJQUFtRixZQUFBLFVBQW5GO0lBQStGLFlBQUEsVUFBL0Y7SUFBMkcsWUFBQSxVQUEzRztJQUF1SCxZQUFBLFNBQXZIO0lBQWtJLFlBQUEsU0FBbEk7SUFBNkksWUFBQTtJQUE3SSxXQUFELENBQVA7SUFDSDtJQUNKLE9BTEQ7O0lBUUEsVUFBSSxNQUFNLElBQUssb0JBQW9CLE1BQW5DLEVBQTRDO0lBQ3hDLGNBQU0sUUFBUSxHQUFHLElBQUksY0FBSixDQUFvQixPQUFELElBQVk7SUFBRyxVQUFBLFlBQVk7SUFBSyxTQUFuRCxDQUFqQjtJQUVBLFFBQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEI7SUFBRSxVQUFBLEdBQUcsRUFBRTtJQUFQLFNBQTFCO0lBRUEsZUFBTyxNQUFNLFFBQVEsQ0FBQyxVQUFULEVBQWI7SUFDSCxPQU5ELE1BT0s7SUFDRCxRQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFwQyxFQUFrRDtJQUFFLFVBQUEsT0FBTyxFQUFFO0lBQVgsU0FBbEQ7SUFDQSxlQUFPLE1BQU0sUUFBUSxDQUFDLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDLFlBQXZDLENBQWI7SUFDSDtJQUNKO0lBQ0osR0F6Qm1DLEVBeUJqQyxFQXpCaUMsQ0FBcEM7SUEyQkEsUUFBTTtJQUFFLElBQUEsVUFBRjtJQUFjLElBQUE7SUFBZCxNQUFxQyxhQUFhLENBQUk7SUFBRSxJQUFBLGVBQWUsRUFBRUEsQ0FBVyxDQUFFLENBQUQsSUFBaUIsZ0JBQWdCLENBQUMsQ0FBRCxFQUFJLGFBQUosYUFBSSxhQUFKLHVCQUFJLGFBQWEsRUFBakIsQ0FBbEMsRUFBMEQsRUFBMUQ7SUFBOUIsR0FBSixDQUF4RDtJQUVBLEVBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsUUFBSSxhQUFKLEVBQW1CO0lBQ2YsVUFBSSxpQkFBaUIsQ0FBQyxPQUFsQixLQUE4QixhQUFhLEVBQS9DLEVBQ0ksZ0JBQWdCLENBQUMsVUFBVSxFQUFYLEVBQWUsYUFBYSxFQUE1QixDQUFoQjtJQUNQO0lBQ0osR0FMUSxDQUFUO0lBT0EsU0FBTztJQUNILElBQUEsVUFERztJQUVILElBQUEsT0FGRztJQUdILElBQUEsbUJBQW1CLEVBQUU7SUFIbEIsR0FBUDtJQU9IOztJQ3ZGRCxTQUFTLFVBQVQsQ0FBc0MsR0FBdEMsRUFBNEM7SUFDeEMsU0FBUSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sV0FBUCxLQUF1QixHQUFHLENBQUMsTUFBSixDQUFXLENBQVgsQ0FBL0I7SUFDSDtJQXFCRDs7Ozs7Ozs7Ozs7Ozs7O0lBZUc7OztJQUNHLFNBQVUsbUJBQVYsT0FBNEc7SUFBQSxNQUEzRDtJQUFFLElBQUE7SUFBRixHQUEyRDtJQUU5RyxFQUFBLGtCQUFrQixDQUFDLHdCQUFELENBQWxCO0lBRUEsUUFBTSxDQUFDLGlCQUFELEVBQW9CLGlCQUFwQixJQUF5QyxlQUFlLENBQTZCLElBQTdCLENBQTlEO0lBR0EsUUFBTTtJQUFFLElBQUEsVUFBRjtJQUFjLElBQUE7SUFBZCxNQUFxQyxhQUFhLENBQVc7SUFDL0QsSUFBQSxlQUFlLEVBQUVXLENBQVcsQ0FBRSxPQUFELElBQXNCO0lBQy9DLFVBQUksT0FBSixFQUFhO0lBQ1QsUUFBQSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsQ0FBRCxDQUFqQjtJQUNIO0lBQ0osS0FKMkIsRUFJMUIsRUFKMEI7SUFEbUMsR0FBWCxDQUF4RCxDQVA4RztJQWdCOUc7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUNBLFFBQU07SUFBRSxJQUFBO0lBQUYsTUFBMEIsY0FBYyxDQUFDO0lBQUUsSUFBQSxZQUFZLEVBQUVBLENBQVcsQ0FBQyxDQUFDLElBQUksd0JBQUosYUFBSSx3QkFBSix1QkFBSSx3QkFBd0IsQ0FBRyx1QkFBdUIsRUFBMUIsQ0FBOUIsRUFBNkQsRUFBN0Q7SUFBM0IsR0FBRCxDQUE5QztJQUVBLFFBQU0sdUJBQXVCLEdBQUdBLENBQVcsQ0FBQyxNQUFLO0lBQzdDLFVBQU0sY0FBYyxHQUFHLGlCQUFpQixFQUF4Qzs7SUFDQSxRQUFJLGNBQUosRUFBb0I7SUFDaEIsVUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLFdBQXZCO0lBQ0EsVUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLFNBQXZCO0lBQ0EsVUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLGVBQXZCO0lBRUEsVUFBSSxDQUFDLElBQUksU0FBVCxFQUNJLENBQUMsR0FBRyxLQUFKO0lBRUosYUFBUSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUMsSUFBSSxlQUFOLENBQVosQ0FBbUMsQ0FBQyxJQUFJLEtBQXhDO0lBQUwsT0FBUjtJQUNIOztJQUVELFdBQU8sSUFBUDtJQUNILEdBZDBDLEVBY3hDLEVBZHdDLENBQTNDLENBM0I4Rzs7SUE2QzlHLFFBQU0sMkJBQTJCLEdBQUdBLENBQVcsQ0FBQyxDQUFDLGtCQUFELEVBQTBDLFNBQTFDLEtBQWlHO0lBQUE7O0lBQzdJLGtCQUFBLFNBQVMsVUFBVCx5Q0FBQSxTQUFTLEdBQUssdUJBQXVCLEVBQXJDO0lBQ0EsUUFBSSxnQkFBQSxTQUFTLFVBQVQsa0RBQVcsaUJBQVgsTUFBaUMsa0JBQXJDLEVBQ0ksT0FBTyxRQUFQO0lBQ0osV0FBTyxPQUFQO0lBQ0gsR0FMOEMsRUFLNUMsRUFMNEMsQ0FBL0M7SUFPQSxRQUFNLHFCQUFxQixHQUFHQSxDQUFXLENBQUMsQ0FBQyxJQUFELEVBQW9FLFNBQXBFLEtBQWdLO0lBQUE7O0lBQ3RNLG1CQUFBLFNBQVMsVUFBVCwyQ0FBQSxTQUFTLEdBQUssdUJBQXVCLEVBQXJDOztJQUVBLFlBQVEsSUFBUjtJQUNJLFdBQUssYUFBTDtJQUNJLGVBQU9nRCxHQUFDLENBQUMseUNBQUMsU0FBRCxnREFBQyxZQUFXLGNBQVoseUVBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQUQsQ0FBUjs7SUFDSixXQUFLLFdBQUw7SUFDSSxlQUFPQSxHQUFDLENBQUMsMENBQUMsU0FBRCxnREFBQyxZQUFXLGNBQVosMkVBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQUQsQ0FBUjs7SUFFSixXQUFLLGNBQUw7SUFDSSxlQUFPQSxHQUFDLENBQUMseUNBQUMsU0FBRCxnREFBQyxZQUFXLGVBQVoseUVBQStCLEtBQS9CLEVBQXNDLENBQXRDLENBQUQsQ0FBUjs7SUFDSixXQUFLLFlBQUw7SUFDSSxlQUFPQSxHQUFDLENBQUMsMENBQUMsU0FBRCxnREFBQyxZQUFXLGVBQVosMkVBQStCLEtBQS9CLEVBQXNDLENBQXRDLENBQUQsQ0FBUjtJQVRSO0lBV0gsR0Fkd0MsRUFjdEMsRUFkc0MsQ0FBekM7SUFnQkEsUUFBTSxvQkFBb0IsR0FBR2hELENBQVcsQ0FBQyxDQUFDLElBQUQsRUFBNEMsU0FBNUMsS0FBZ0s7SUFBQTs7SUFDck0sbUJBQUEsU0FBUyxVQUFULDJDQUFBLFNBQVMsR0FBSyx1QkFBdUIsRUFBckM7O0lBQ0EsUUFBSSxnQkFBQSxTQUFTLFVBQVQsa0RBQVcsaUJBQVgsTUFBaUMsVUFBckMsRUFBaUQ7SUFDN0MsY0FBUSxJQUFSO0lBQ0ksYUFBSyxLQUFMO0lBQ0ksaUJBQU8sU0FBUyxDQUFDLGVBQVYsS0FBOEIsS0FBOUIsR0FBc0MsY0FBdEMsR0FBdUQsWUFBOUQ7O0lBQ0osYUFBSyxRQUFMO0lBQ0ksaUJBQU8sU0FBUyxDQUFDLGVBQVYsS0FBOEIsS0FBOUIsR0FBc0MsY0FBdEMsR0FBdUQsWUFBOUQ7O0lBRUosYUFBSyxNQUFMO0lBQ0ksaUJBQU8sU0FBUyxDQUFDLGNBQVYsS0FBNkIsS0FBN0IsR0FBcUMsYUFBckMsR0FBcUQsV0FBNUQ7O0lBQ0osYUFBSyxPQUFMO0lBQ0ksaUJBQU8sU0FBUyxDQUFDLGNBQVYsS0FBNkIsS0FBN0IsR0FBcUMsYUFBckMsR0FBcUQsV0FBNUQ7SUFUUjtJQVdILEtBWkQsTUFhSyxJQUFJLGlCQUFBLFNBQVMsVUFBVCxvREFBVyxpQkFBWCxNQUFpQyxZQUFyQyxFQUFtRDtJQUNwRCxjQUFRLElBQVI7SUFDSSxhQUFLLEtBQUw7SUFDSSxpQkFBTyxTQUFTLENBQUMsY0FBVixLQUE2QixLQUE3QixHQUFxQyxhQUFyQyxHQUFxRCxXQUE1RDs7SUFDSixhQUFLLFFBQUw7SUFDSSxpQkFBTyxTQUFTLENBQUMsY0FBVixLQUE2QixLQUE3QixHQUFxQyxhQUFyQyxHQUFxRCxXQUE1RDs7SUFFSixhQUFLLE1BQUw7SUFDSSxpQkFBTyxTQUFTLENBQUMsZUFBVixLQUE4QixLQUE5QixHQUFzQyxjQUF0QyxHQUF1RCxZQUE5RDs7SUFDSixhQUFLLE9BQUw7SUFDSSxpQkFBTyxTQUFTLENBQUMsZUFBVixLQUE4QixLQUE5QixHQUFzQyxjQUF0QyxHQUF1RCxZQUE5RDtJQVRSO0lBV0g7O0lBRUQ7SUFDQSxJQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZjtJQUNBLFdBQU8sY0FBUDtJQUVILEdBakN1QyxFQWlDckMsRUFqQ3FDLENBQXhDO0lBbUNBLFFBQU0sNEJBQTRCLEdBQUdBLENBQVcsQ0FBQyxDQUFDLGtCQUFELEVBQXlDLFNBQXpDLEtBQWdHO0lBQUE7O0lBQzdJLG9CQUFBLFNBQVMsVUFBVCw2Q0FBQSxTQUFTLEdBQUssdUJBQXVCLEVBQXJDOztJQUNBLFFBQUksa0JBQWtCLElBQUksUUFBMUIsRUFBb0M7SUFBQTs7SUFDaEMsVUFBSSxpQkFBQSxTQUFTLFVBQVQsb0RBQVcsaUJBQVgsS0FBZ0MsWUFBcEMsRUFDSSxPQUFPLFlBQVA7SUFDSixhQUFPLFVBQVA7SUFDSCxLQUpELE1BS0s7SUFBQTs7SUFDRCxVQUFJLGlCQUFBLFNBQVMsVUFBVCxvREFBVyxnQkFBWCxLQUErQixVQUFuQyxFQUNJLE9BQU8sVUFBUDtJQUVKLGFBQU8sWUFBUDtJQUNIO0lBQ0osR0FiK0MsRUFhN0MsRUFiNkMsQ0FBaEQ7SUFlQSxRQUFNLGtCQUFrQixHQUFHQSxDQUFXLENBQUMsQ0FBQyxXQUFELEVBQTJCLFNBQTNCLEtBQTZHO0lBQUE7O0lBQ2hKLG9CQUFBLFNBQVMsVUFBVCw2Q0FBQSxTQUFTLEdBQUssdUJBQXVCLEVBQXJDOztJQUNBLFFBQUksU0FBSixFQUFlO0lBQ1gsWUFBTTtJQUFFLFFBQUEsVUFBRjtJQUFjLFFBQUEsU0FBZDtJQUF5QixRQUFBLGVBQXpCO0lBQTBDLFFBQUE7SUFBMUMsVUFBNkQsU0FBbkUsQ0FEVzs7SUFJWCxVQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxVQUFELENBQVksRUFBaEMsQ0FBbEM7SUFDQSxVQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsU0FBRCxDQUFXLEVBQS9CLENBQWpDO0lBRUEsVUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsVUFBRCxDQUFZLEVBQWhDLENBQWxDO0lBQ0EsVUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLFNBQUQsQ0FBVyxFQUEvQixDQUFqQztJQUVBLFVBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLFVBQUQsQ0FBWSxFQUFoQyxDQUFsQztJQUNBLFVBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxTQUFELENBQVcsRUFBL0IsQ0FBakMsQ0FYVztJQWdCWDs7SUFDQSxlQUFTLGtCQUFULENBQTRCLEdBQTVCLEVBQWtEO0lBQUksWUFBSSxHQUFHLEtBQUssS0FBUixJQUFpQixHQUFHLElBQUksS0FBNUIsRUFBbUMsT0FBTyxNQUFQO0lBQWUsZUFBTyxLQUFQO0lBQWU7O0lBQ3ZILGVBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBc0Q7SUFBSSxZQUFJLEdBQUcsS0FBSyxLQUFaLEVBQW1CLE9BQU8sT0FBUDtJQUFnQixZQUFJLEdBQUcsS0FBSyxLQUFaLEVBQW1CLE9BQU8sUUFBUDtJQUFpQixlQUFPLElBQVA7SUFBYzs7SUFFL0ksWUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsZUFBRCxDQUE3QjtJQUNBLFlBQU0sRUFBRSxHQUFHLHNCQUFzQixDQUFDLGVBQUQsQ0FBakM7SUFFQSxZQUFNLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxjQUFELENBQTdCO0lBQ0EsWUFBTSxFQUFFLEdBQUcsc0JBQXNCLENBQUMsY0FBRCxDQUFqQztJQUdBLFVBQUksaUJBQWlCLEdBQUcsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUQsQ0FBSSxFQUF4QixDQUFYLElBQTBDLENBQUMsRUFBRCxHQUFNLENBQU4sR0FBVSxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQS9ELENBQXhCO0lBQ0EsVUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQVgsSUFBMEMsQ0FBQyxFQUFELEdBQU0sQ0FBTixHQUFVLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBL0QsQ0FBeEI7SUFDQSxVQUFJLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBWCxJQUEwQyxTQUExQyxHQUFzRCxTQUF0RCxHQUFtRSxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQVgsSUFBMkMsQ0FBQyxFQUFELEdBQU0sQ0FBTixHQUFVLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBaEUsQ0FBM0Y7SUFHQSxVQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBWCxJQUEwQyxDQUFDLEVBQUQsR0FBTSxDQUFOLEdBQVUsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUQsQ0FBSSxFQUF4QixDQUEvRCxDQUF2QjtJQUNBLFVBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUQsQ0FBSSxFQUF4QixDQUFYLElBQTBDLENBQUMsRUFBRCxHQUFNLENBQU4sR0FBVSxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQS9ELENBQXZCO0lBQ0EsVUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQVgsSUFBMEMsU0FBMUMsR0FBc0QsU0FBdEQsR0FBbUUsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUQsQ0FBSSxFQUF4QixDQUFYLElBQTJDLENBQUMsRUFBRCxHQUFNLENBQU4sR0FBVSxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQWhFLENBQTFGO0lBR0EsYUFBTztJQUNILFFBQUEsZ0JBREc7SUFFSCxRQUFBLGdCQUZHO0lBR0gsUUFBQSxnQkFIRztJQUlILFFBQUEsZUFKRztJQUtILFFBQUEsZUFMRztJQU1ILFFBQUEsZUFORztJQU9ILFFBQUEsaUJBUEc7SUFRSCxRQUFBLGlCQVJHO0lBU0gsUUFBQSxpQkFURztJQVVILFFBQUEsZ0JBVkc7SUFXSCxRQUFBLGdCQVhHO0lBWUgsUUFBQTtJQVpHLE9BQVA7SUFjSDs7SUFFRCxXQUFPLElBQVA7SUFFSCxHQXpEcUMsRUF5RG5DLEVBekRtQyxDQUF0QztJQTJEQSxTQUFPO0lBQ0gsSUFBQSx3QkFBd0IsRUFBRUEsQ0FBVyxDQUFFLEtBQUQsSUFBb0Msa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsS0FBRCxDQUFwQixDQUF2RCxFQUFxRixFQUFyRixDQURsQztJQUVILElBQUEsVUFGRztJQUdILElBQUEsdUJBSEc7SUFJSCxJQUFBLG9CQUFvQixFQUFFLGtCQUpuQjtJQUtILElBQUEsMkJBTEc7SUFNSCxJQUFBLDRCQU5HO0lBT0gsSUFBQSxvQkFQRztJQVFILElBQUE7SUFSRyxHQUFQO0lBVUg7O0lBR0QsTUFBTWdELEdBQUMsR0FBRztJQUNOLEVBQUEsQ0FBQyxFQUFFLEtBREc7SUFFTixFQUFBLENBQUMsRUFBRSxRQUZHO0lBR04sRUFBQSxDQUFDLEVBQUUsTUFIRztJQUlOLEVBQUEsQ0FBQyxFQUFFO0lBSkcsQ0FBVjtJQXNIQSxNQUFNLGVBQWUsR0FBeUI7SUFDMUMsRUFBQSxlQUFlLEVBQUUsS0FEeUI7SUFFMUMsRUFBQSxjQUFjLEVBQUUsS0FGMEI7SUFJMUMsRUFBQSxpQkFBaUIsRUFBRSxZQUp1QjtJQUsxQyxFQUFBLGdCQUFnQixFQUFFLFVBTHdCO0lBTzFDLEVBQUEsVUFBVSxFQUFFLE9BUDhCO0lBUTFDLEVBQUEsU0FBUyxFQUFFLFFBUitCO0lBVTFDLEVBQUEsa0JBQWtCLEVBQUUsS0FWc0I7SUFXMUMsRUFBQSxrQkFBa0IsRUFBRTtJQVhzQixDQUE5QztJQWNBLE1BQU0sZUFBZSxHQUF5QixFQUMxQyxHQUFHLGVBRHVDO0lBRTFDLEVBQUEsZUFBZSxFQUFFO0lBRnlCLENBQTlDO0lBS0EsTUFBTSxhQUFhLEdBQXlCO0lBQ3hDLEVBQUEsZUFBZSxFQUFFLEtBRHVCO0lBRXhDLEVBQUEsY0FBYyxFQUFFLEtBRndCO0lBSXhDLEVBQUEsaUJBQWlCLEVBQUUsVUFKcUI7SUFLeEMsRUFBQSxnQkFBZ0IsRUFBRSxZQUxzQjtJQU94QyxFQUFBLFVBQVUsRUFBRSxRQVA0QjtJQVF4QyxFQUFBLFNBQVMsRUFBRSxPQVI2QjtJQVV4QyxFQUFBLGtCQUFrQixFQUFFLEtBVm9CO0lBV3hDLEVBQUEsa0JBQWtCLEVBQUU7SUFYb0IsQ0FBNUM7SUFjQSxNQUFNLGFBQWEsR0FBeUIsRUFDeEMsR0FBRyxhQURxQztJQUV4QyxFQUFBLGVBQWUsRUFBRTtJQUZ1QixDQUE1QztJQU1BLE1BQU0sYUFBYSxHQUF5QixFQUFFLEdBQUc7SUFBTCxDQUE1QztJQUNBLE1BQU0sYUFBYSxHQUF5QixFQUFFLEdBQUc7SUFBTCxDQUE1QztJQUVBLE1BQU0sYUFBYSxHQUF5QixFQUN4QyxHQUFHLGFBRHFDO0lBRXhDLEVBQUEsY0FBYyxFQUFFO0lBRndCLENBQTVDO0lBS0EsTUFBTSxhQUFhLEdBQXlCLEVBQ3hDLEdBQUcsYUFEcUM7SUFFeEMsRUFBQSxjQUFjLEVBQUU7SUFGd0IsQ0FBNUM7SUFLQSxNQUFNLGFBQWEsR0FBeUIsRUFDeEMsR0FBRyxhQURxQztJQUV4QyxFQUFBLGVBQWUsRUFBRSxLQUZ1QjtJQUl4QyxFQUFBLGtCQUFrQixFQUFFLEtBSm9CO0lBS3hDLEVBQUEsa0JBQWtCLEVBQUU7SUFMb0IsQ0FBNUM7SUFRQSxNQUFNLGFBQWEsR0FBeUIsRUFDeEMsR0FBRyxhQURxQztJQUV4QyxFQUFBLGVBQWUsRUFBRTtJQUZ1QixDQUE1QztJQU9BLE1BQU0sWUFBWSxHQUFHO0lBQ2pCLEVBQUEsR0FBRyxFQUFFLGVBRFk7SUFFakIsRUFBQSxHQUFHLEVBQUU7SUFGWSxDQUFyQjtJQUtBLE1BQU0sVUFBVSxHQUFHO0lBQ2YsRUFBQSxHQUFHLEVBQUUsYUFEVTtJQUVmLEVBQUEsR0FBRyxFQUFFO0lBRlUsQ0FBbkI7SUFLQSxNQUFNLFVBQVUsR0FBRztJQUNmLEVBQUEsR0FBRyxFQUFFLGFBRFU7SUFFZixFQUFBLEdBQUcsRUFBRTtJQUZVLENBQW5CO0lBS0EsTUFBTSxVQUFVLEdBQUc7SUFDZixFQUFBLEdBQUcsRUFBRSxhQURVO0lBRWYsRUFBQSxHQUFHLEVBQUU7SUFGVSxDQUFuQjtJQUtBLE1BQU0sVUFBVSxHQUFHO0lBQ2YsRUFBQSxHQUFHLEVBQUUsYUFEVTtJQUVmLEVBQUEsR0FBRyxFQUFFO0lBRlUsQ0FBbkI7SUFLQSxNQUFNLFlBQVksR0FBRztJQUNqQixtQkFBaUIsWUFEQTtJQUVqQixpQkFBZSxVQUZFO0lBR2pCLGlCQUFlLFVBSEU7SUFJakIsaUJBQWUsVUFKRTtJQUtqQixpQkFBZTtJQUxFLENBQXJCOztJQ3ZjQTs7Ozs7O0lBTUc7O0lBQ0csU0FBVSxRQUFWLENBQXNCLFlBQXRCLEVBQWlEO0lBRW5EO0lBQ0EsUUFBTSxDQUFDLEtBQUQsRUFBUSxTQUFSLElBQXFCQyxDQUFTLENBQUMsWUFBRCxDQUFwQztJQUNBLFFBQU0sR0FBRyxHQUFHdEQsQ0FBTSxDQUFDLEtBQUQsQ0FBbEIsQ0FKbUQ7SUFPbkQ7O0lBQ0EsUUFBTSxRQUFRLEdBQUdLLENBQVcsQ0FBa0IsS0FBSyxJQUFHO0lBQ2xELFFBQUksT0FBTyxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0lBQzdCLFVBQUksUUFBUSxHQUFHLEtBQWY7SUFDQSxNQUFBLFNBQVMsQ0FBQyxTQUFTLElBQUc7SUFDbEIsWUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQUQsQ0FBeEI7SUFDQSxRQUFBLEdBQUcsQ0FBQyxPQUFKLEdBQWMsU0FBZDtJQUNBLGVBQU8sU0FBUDtJQUNILE9BSlEsQ0FBVDtJQUtILEtBUEQsTUFRSztJQUNELE1BQUEsR0FBRyxDQUFDLE9BQUosR0FBYyxLQUFkO0lBQ0EsTUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0lBQ0g7SUFDSixHQWIyQixFQWF6QixFQWJ5QixDQUE1Qjs7SUFlQSxRQUFNLFFBQVEsR0FBRyxNQUFLO0lBQUcsV0FBTyxHQUFHLENBQUMsT0FBWDtJQUFxQixHQUE5Qzs7SUFHQSxFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsR0FBRyxDQUFDLE9BQUosS0FBZ0IsS0FBaEIsSUFBMEIsT0FBTyxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLEtBQUssQ0FBQyxLQUFELENBQTNFO0lBQ0EsU0FBTyxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLFFBQWxCLENBQVA7SUFDSDs7SUNqQ0QsTUFBTSxLQUFLLEdBQUcsa0VBQWQ7O0lBRUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQTZCO0lBQ3pCLFNBQU8sS0FBSyxDQUFDLEtBQUQsQ0FBWjtJQUNIOztJQUVELFNBQVMsV0FBVCxHQUFvQjtJQUNoQixTQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsU0FBM0IsQ0FBUDtJQUNIOztJQUVELFNBQVMsWUFBVCxHQUFxQjtJQUNqQixTQUFPLENBQUMsV0FBVyxFQUFaLEVBQWdCLFdBQVcsRUFBM0IsRUFBK0IsV0FBVyxFQUExQyxFQUE4QyxXQUFXLEVBQXpELEVBQTZELFdBQVcsRUFBeEUsRUFBNEUsV0FBVyxFQUF2RixFQUEyRixXQUFXLEVBQXRHLEVBQTBHLFdBQVcsRUFBckgsRUFBeUgsV0FBVyxFQUFwSSxFQUF3SSxXQUFXLEVBQW5KLEVBQXVKLFdBQVcsRUFBbEssQ0FBUDtJQUNIO0lBRUQ7Ozs7SUFJRzs7O0lBQ0csU0FBVSxnQkFBVixDQUEyQixNQUEzQixFQUEwQztJQUM1QyxTQUFPLEdBQUcsTUFBSCxhQUFHLE1BQUgsY0FBRyxNQUFILEdBQWEsS0FBSyxHQUFHLFlBQVksR0FBRyxHQUFmLENBQW1CLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBRCxDQUE5QixFQUFtQyxJQUFuQyxDQUF3QyxFQUF4QyxDQUEyQyxFQUF2RTtJQUNIO0lBd0JEOzs7Ozs7OztJQVFHOztJQUNHLFNBQVUsV0FBVixHQUE0RDtJQUFBLE1BQXRDO0lBQUUsSUFBQTtJQUFGLEdBQXNDLHVFQUFGLEVBQUU7SUFDOUQsUUFBTSxDQUFDLFFBQUQsRUFBVyxXQUFYLElBQTBCLFFBQVEsQ0FBUyxNQUFNLGdCQUFnQixDQUFDLE1BQUQsQ0FBL0IsQ0FBeEM7SUFDQSxRQUFNLENBQUMsa0JBQUQsRUFBcUIscUJBQXJCLEVBQTRDLHFCQUE1QyxJQUFxRSxRQUFRLENBQUMsS0FBRCxDQUFuRjtJQUNBLEVBQUFOLENBQWUsQ0FBQyxNQUFLO0lBQ2pCLFVBQU0sa0JBQWtCLEdBQUcscUJBQXFCLEVBQWhEO0lBQ0EsUUFBSSxrQkFBSixFQUNJLFdBQVcsQ0FBQyxNQUFNLGdCQUFnQixDQUFDLE1BQUQsQ0FBdkIsQ0FBWDtJQUNKLElBQUEscUJBQXFCLENBQUMsSUFBRCxDQUFyQjtJQUNILEdBTGMsRUFLWixDQUFDLE1BQUQsQ0FMWSxDQUFmLENBSDhEO0lBVzlEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsUUFBTSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLElBQWlDLFFBQVEsQ0FBcUIsU0FBckIsQ0FBL0M7SUFFQSxRQUFNLG9CQUFvQixHQUFHTSxDQUFXLENBQUMsU0FBUyxvQkFBVCxDQUF5RSxVQUF6RSxFQUFzRjtJQUUzSCxVQUFNLEdBQUcsR0FBNEIsZ0JBQStGO0lBQUE7O0lBQUEsVUFBdEM7SUFBRSxTQUFDLFVBQUQsR0FBYyxPQUFoQjtJQUF5QixXQUFHO0lBQTVCLE9BQXNDO0lBRWhJLFlBQU0sT0FBTyxxQkFBSSxPQUFKLGFBQUksT0FBSixjQUFJLE9BQUosR0FBZSxNQUFmLHlDQUF5QixRQUF6Qix5Q0FBcUMsU0FBbEQ7SUFDQSxVQUFJLFVBQVUsS0FBSyxJQUFuQixFQUNJLFNBQVMsQ0FBQyxPQUFELENBQVQ7SUFFSixhQUFPLGNBQWMsR0FBZ0I7SUFBRSxTQUFDLFVBQUQsR0FBYztJQUFoQixPQUFoQixFQUEyQyxLQUEzQyxDQUFyQjtJQUNILEtBUEQ7O0lBU0EsV0FBTyxHQUFQO0lBQ0gsR0FadUMsRUFZckMsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQVpxQyxDQUF4QztJQWNBLFFBQU0sZ0JBQWdCLEdBQXFCQSxDQUFXLENBQUMsU0FBUyxnQkFBVCxDQUFnRSxDQUFoRSxFQUFvRTtJQUN2SCxXQUFPLG9CQUFvQixDQUFDLElBQUQsQ0FBcEIsQ0FBMkIsQ0FBM0IsQ0FBUDtJQUNILEdBRnFELEVBRW5ELENBQUMsb0JBQUQsQ0FGbUQsQ0FBdEQ7SUFJQSxTQUFPO0lBQ0gsSUFBQSxRQURHO0lBRUgsSUFBQSxFQUFFLEVBQUUsTUFGRDtJQUdILElBQUEsS0FBSyxFQUFFLFNBSEo7SUFJSCxJQUFBLGdCQUpHO0lBS0gsSUFBQTtJQUxHLEdBQVA7SUFPSDs7SUNqR0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxHQUFKLEVBQXZCO0lBQ0EsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFKLEVBQWQ7SUFFQSxNQUFNLFVBQVUsR0FBSSxTQUFTcEMsR0FBVCxHQUFrQixLQUFsQixHQUEwQixZQUFZQSxHQUFaLEdBQXNCLFFBQXRCLEdBQWlDLGFBQWFBLEdBQWIsR0FBdUIsU0FBdkIsR0FBbUMsS0FBbEg7SUFHQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsTUFBTSxjQUFjLEdBQUdBLEdBQU8sQ0FBQyxVQUFELENBQTlCOztJQUNBLE1BQU0sU0FBUyxHQUEwQixDQUFDLEtBQUQsRUFBUSxXQUFSLEtBQXVCO0lBQzVELE9BQUssSUFBSSxDQUFDLEVBQUQsRUFBSyxVQUFMLENBQVQsSUFBNkIsS0FBN0IsRUFBb0M7SUFDaEMsVUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLEdBQWYsQ0FBbUIsRUFBbkIsQ0FBbEI7O0lBQ0EsUUFBSSxXQUFXLENBQUMsU0FBRCxFQUFZLFVBQVUsQ0FBQyxNQUF2QixDQUFmLEVBQStDO0lBQUE7O0lBQzNDLDZCQUFBLFVBQVUsQ0FBQyxPQUFYLGlGQUFBLFVBQVU7SUFDVixNQUFBLFVBQVUsQ0FBQyxPQUFYLEdBQXFCLFVBQVUsQ0FBQyxNQUFYLEVBQXJCO0lBQ0EsTUFBQSxjQUFjLENBQUMsR0FBZixDQUFtQixFQUFuQixFQUF1QixVQUFVLENBQUMsTUFBbEM7SUFDSDtJQUNKOztJQUNELEVBQUEsS0FBSyxDQUFDLEtBQU47SUFDQSxFQUFBLGNBQWMsU0FBZCxJQUFBLGNBQWMsV0FBZCxZQUFBLGNBQWMsQ0FBRyxLQUFILEVBQVUsV0FBVixDQUFkO0lBQ0gsQ0FYRDs7QUFZQUEsT0FBTyxDQUFDLFVBQUQsQ0FBUCxHQUFzQixTQUF0QjtJQUVBOzs7Ozs7OztJQVFHOztJQUNHLFNBQVUscUJBQVYsQ0FBZ0MsTUFBaEMsRUFBd0QsTUFBeEQsRUFBdUU7SUFDekUsUUFBTSxDQUFDLEVBQUQsSUFBT2EsQ0FBUSxDQUFDLE1BQU0sZ0JBQWdCLEVBQXZCLENBQXJCO0lBQ0EsRUFBQSxLQUFLLENBQUMsR0FBTixDQUFVLEVBQVYsRUFBYztJQUFFLElBQUEsTUFBRjtJQUFVLElBQUEsTUFBVjtJQUFrQixJQUFBLE9BQU8sRUFBRTtJQUEzQixHQUFkO0lBRUEsRUFBQVksQ0FBUyxDQUFDLE1BQUs7SUFDWCxXQUFPLE1BQUs7SUFDUixNQUFBLEtBQUssQ0FBQyxNQUFOLENBQWEsRUFBYjtJQUNBLE1BQUEsY0FBYyxDQUFDLE1BQWYsQ0FBc0IsRUFBdEI7SUFDSCxLQUhEO0lBSUgsR0FMUSxFQUtOLENBQUMsRUFBRCxDQUxNLENBQVQ7SUFNSDs7SUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBdUMsT0FBdkMsRUFBdUQ7SUFDbkQsU0FBTyxDQUFDLEVBQ0osQ0FBQyxPQUFELElBQ0EsT0FBTyxDQUFDLE1BQVIsTUFBbUIsT0FBbkIsYUFBbUIsT0FBbkIsdUJBQW1CLE9BQU8sQ0FBRSxNQUE1QixDQURBLElBRUEsT0FGQSxhQUVBLE9BRkEsZUFFQSxPQUFPLENBQUUsSUFBVCxDQUFjLENBQUMsR0FBRCxFQUFNLEtBQU4sS0FBZ0IsR0FBRyxLQUFLLE9BQU8sQ0FBQyxLQUFELENBQTdDLENBSEksQ0FBUjtJQUtIOztJQ3hERCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBRCxDQUFwQjtJQUVBOzs7Ozs7Ozs7SUFTRzs7SUFDRyxTQUFVLGVBQVYsQ0FBNkIsS0FBN0IsRUFBcUM7SUFDdkMsUUFBTSxHQUFHLEdBQUdNLENBQU0sQ0FBSSxLQUFKLENBQWxCO0lBQ0EsRUFBQSxxQkFBcUIsQ0FBQyxNQUFLO0lBQUcsSUFBQSxHQUFHLENBQUMsT0FBSixHQUFjLEtBQWQ7SUFBc0IsR0FBL0IsRUFBaUMsQ0FBQyxLQUFELENBQWpDLENBQXJCO0lBQ0EsU0FBT0ssQ0FBVyxDQUFDLE1BQUs7SUFDcEIsUUFBSSxHQUFHLENBQUMsT0FBSixLQUEyQixLQUEvQixFQUFzQztJQUNsQyxZQUFNLElBQUksS0FBSixDQUFVLHdFQUFWLENBQU47SUFDSDs7SUFDRCxXQUFPLEdBQUcsQ0FBQyxPQUFYO0lBQ0gsR0FMaUIsRUFLZixFQUxlLENBQWxCO0lBTUg7O0lDcEJEOzs7OztJQUtHOztJQUNHLFNBQVUsaUJBQVYsQ0FBK0QsRUFBL0QsRUFBb0U7SUFDdEUsUUFBTSxxQkFBcUIsR0FBRyxlQUFlLENBQUksRUFBSixDQUE3QztJQUVBLFNBQU9BLENBQVcsQ0FBQyxZQUEwQztJQUN6RCxXQUFPLHFCQUFxQixHQUFHLFlBQUgsQ0FBNUI7SUFDSCxHQUZpQixFQUVmLEVBRmUsQ0FBbEI7SUFHSDs7SUNkRDs7Ozs7Ozs7O0lBU0c7O0lBQ0csU0FBVSxTQUFWLENBQXNDLE1BQXRDLEVBQWtJLE1BQWxJLEVBQW9LO0lBQUEsTUFBdEIsSUFBc0IsdUVBQWZrRCxDQUFlO0lBRXRLLFFBQU0sVUFBVSxHQUFHdkQsQ0FBTSxDQUFnQixTQUFoQixDQUF6Qjs7SUFDQSxRQUFNLE9BQU8sR0FBRyxNQUFLO0lBQ2pCLFFBQUksT0FBTyxHQUE2QixFQUF4Qzs7SUFDQSxRQUFJLE1BQU0sSUFBSSxVQUFVLENBQUMsT0FBekIsRUFBa0M7SUFDOUIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLFVBQVUsQ0FBQyxPQUFYLENBQW1CLE1BQTVCLEVBQW9DLE1BQU0sQ0FBQyxNQUEzQyxDQUFwQixFQUF3RSxFQUFFLENBQTFFLEVBQTZFO0lBQ3pFLFlBQUksVUFBVSxDQUFDLE9BQVgsQ0FBbUIsQ0FBbkIsS0FBeUIsTUFBTSxDQUFDLENBQUQsQ0FBbkMsRUFDSSxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWE7SUFBRSxVQUFBLElBQUksRUFBRSxVQUFVLENBQUMsT0FBWCxDQUFtQixDQUFuQixDQUFSO0lBQStCLFVBQUEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFEO0lBQXpDLFNBQWI7SUFDUDtJQUNKOztJQUNELFVBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBWixFQUFxQixPQUFyQixDQUFsQjtJQUNBLElBQUEsVUFBVSxDQUFDLE9BQVgsR0FBcUIsTUFBckI7SUFDQSxXQUFPLEdBQVA7SUFDSCxHQVhEOztJQWFBLEVBQUEsSUFBSSxDQUFDLE9BQUQsRUFBVSxNQUFWLENBQUo7SUFDSDs7SUMxQkQ7Ozs7Ozs7SUFPRzs7SUFDRyxTQUFVLGVBQVYsQ0FBNEMsTUFBNUMsRUFBd0ksTUFBeEksRUFBa0o7SUFDcEosU0FBTyxTQUFTLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUJ3RCxDQUFqQixDQUFoQjtJQUNIOztJQ1dLLFNBQVUsVUFBVixPQUFvRTtJQUFBLE1BQS9DO0lBQUUsSUFBQSxPQUFGO0lBQVcsSUFBQSxRQUFYO0lBQXFCLElBQUE7SUFBckIsR0FBK0M7SUFDdEUsUUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsTUFBSztJQUFHLElBQUEsWUFBWSxDQUFDLE9BQWIsR0FBdUIsSUFBdkI7SUFBNkIsSUFBQSxRQUFRO0lBQUssR0FBbkQsQ0FBeEM7SUFDQSxRQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsT0FBRCxDQUFsQyxDQUZzRTtJQUt0RTs7SUFDQSxRQUFNLFlBQVksR0FBR3hELENBQU0sQ0FBZ0IsSUFBaEIsQ0FBM0I7SUFFQSxRQUFNLGFBQWEsR0FBSSxPQUFPLElBQUksSUFBbEMsQ0FSc0U7SUFXdEU7SUFDQTs7SUFDQSxFQUFBTixDQUFTLENBQUMsTUFBSztJQUNYLFFBQUksQ0FBQyxhQUFMLEVBQW9CO0lBQ2hCLFVBQUksT0FBTyxHQUFHLFVBQVUsRUFBeEI7SUFDQSxNQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBYSxLQUFLLE9BQU8sSUFBSSxJQUFoQixDQUE1Qjs7SUFFQSxVQUFJLE9BQU8sSUFBSSxJQUFmLEVBQXFCO0lBQ2pCLFFBQUEsWUFBWSxDQUFDLE9BQWIsR0FBdUIsQ0FBRSxJQUFJLElBQUosRUFBekI7SUFFQSxjQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUF6QjtJQUNBLGVBQU8sTUFBTSxZQUFZLENBQUMsTUFBRCxDQUF6QjtJQUNIO0lBQ0o7SUFFSixHQWJRLEVBYU4sQ0FBQyxZQUFELEVBQWUsYUFBZixDQWJNLENBQVQ7SUFlQSxRQUFNLGNBQWMsR0FBR1csQ0FBVyxDQUFDLE1BQUs7SUFBQTs7SUFDcEMsV0FBUSxDQUFFLElBQUksSUFBSixFQUFILEdBQW1CLDJCQUFFLFlBQVksQ0FBQyxPQUFmLHlFQUEwQixJQUFJLElBQUosRUFBMUIsQ0FBMUI7SUFDSCxHQUZpQyxFQUUvQixFQUYrQixDQUFsQztJQUlBLFFBQU0sZ0JBQWdCLEdBQUdBLENBQVcsQ0FBQyxNQUFLO0lBQ3RDLFVBQU0sT0FBTyxHQUFHLFVBQVUsRUFBMUI7SUFDQSxXQUFPLE9BQU8sSUFBSSxJQUFYLEdBQWtCLElBQWxCLEdBQXlCLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxFQUFZLE9BQU8sR0FBRyxjQUFjLEVBQXBDLENBQWhDO0lBQ0gsR0FIbUMsRUFHakMsRUFIaUMsQ0FBcEM7SUFLQSxTQUFPO0lBQUUsSUFBQSxjQUFGO0lBQWtCLElBQUE7SUFBbEIsR0FBUDtJQUNIOztJQ2tCRDs7Ozs7SUFLRzs7SUFDRyxTQUFVLG1CQUFWLE9BQWlQO0lBQUE7O0lBQUEsTUFBckw7SUFBRSxJQUFBLEtBQUY7SUFBUyxJQUFBLGVBQVQ7SUFBMEIsSUFBQSxjQUExQjtJQUEwQyxJQUFBLGNBQTFDO0lBQTBELElBQUEsY0FBMUQ7SUFBMEUsSUFBQSxlQUExRTtJQUEyRixJQUFBLG1CQUEzRjtJQUFnSCxJQUFBLGdCQUFoSDtJQUFrSSxJQUFBO0lBQWxJLEdBQXFMO0lBRW5QLDBCQUFBLG1CQUFtQixVQUFuQiw2REFBQSxtQkFBbUIsR0FBSyxRQUF4QjtJQUVBLFFBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxNQUFuQyxDQUptUDtJQU9uUDs7SUFDQSxFQUFBLGVBQWUsQ0FBQyxNQUFLO0lBQ2pCLFFBQUksS0FBSyxLQUFLLElBQWQsRUFBb0I7SUFDaEIsVUFBSSxLQUFLLEdBQUcsQ0FBWixFQUFlO0lBQ1gsUUFBQSxlQUFlO0lBQ2xCLE9BRkQsTUFHSyxJQUFJLFVBQVUsR0FBRyxDQUFiLElBQWtCLEtBQUssSUFBSSxVQUEvQixFQUEyQztJQUM1QyxRQUFBLGNBQWM7SUFDakI7SUFDSjtJQUNKLEdBVGMsRUFTWixDQUFDLEtBQUQsRUFBUSxVQUFSLEVBQW9CLGVBQXBCLEVBQXFDLGNBQXJDLENBVFksQ0FBZixDQVJtUDs7SUFvQm5QOzs7O0lBSXVGOztJQUV2RixFQUFpQixlQUFlLENBQUMsS0FBRDtJQUNoQyxRQUFNO0lBQUUsSUFBQSx1QkFBRjtJQUEyQixJQUFBO0lBQTNCLE1BQXdELG1CQUFtQixDQUFlLEVBQWYsQ0FBakY7O0lBRUEsUUFBTSxTQUFTLEdBQUksQ0FBRCxJQUFxQjtJQUNuQztJQUNBLFFBQUksQ0FBQyxDQUFDLE9BQUYsSUFBYSxDQUFDLENBQUMsT0FBbkIsRUFDSTtJQUVKLFVBQU0sSUFBSSxHQUFHLHVCQUF1QixFQUFwQztJQUVBLFFBQUkscUJBQXFCLEdBQUksbUJBQW1CLElBQUksT0FBdkIsSUFBa0MsbUJBQW1CLElBQUksUUFBdEY7SUFDQSxRQUFJLHNCQUFzQixHQUFJLG1CQUFtQixJQUFJLFFBQXZCLElBQW1DLG1CQUFtQixJQUFJLFFBQXhGOztJQUVBLFlBQVEsQ0FBQyxDQUFDLEdBQVY7SUFDSSxXQUFLLFNBQUw7SUFBZ0I7SUFDWixnQkFBTSxRQUFRLEdBQUksQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsZ0JBQU4sTUFBMkIsVUFBM0IsR0FBd0MsZ0JBQXhDLEdBQTJELGlCQUE3RTtJQUNBLGdCQUFNLGdCQUFnQixHQUFJLENBQUMsZ0JBQUQsS0FBc0IsQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsZ0JBQU4sTUFBMkIsVUFBM0IsR0FBd0MscUJBQXhDLEdBQWdFLHNCQUF0RixDQUExQjs7SUFDQSxjQUFJLGdCQUFKLEVBQXNCO0lBQ2xCLGdCQUFJLENBQUEsSUFBSSxTQUFKLElBQUEsSUFBSSxXQUFKLFlBQUEsSUFBSSxDQUFHLFFBQUgsQ0FBSixNQUFxQixLQUF6QixFQUFnQztJQUM1QixjQUFBLGNBQWM7SUFDakIsYUFGRCxNQUdLO0lBQ0QsY0FBQSxjQUFjO0lBQ2pCOztJQUNELFlBQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxZQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0g7O0lBQ0Q7SUFDSDs7SUFDRCxXQUFLLFdBQUw7SUFBa0I7SUFDZCxnQkFBTSxRQUFRLEdBQUksQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsZ0JBQU4sTUFBMkIsVUFBM0IsR0FBd0MsZ0JBQXhDLEdBQTJELGlCQUE3RTtJQUNBLGdCQUFNLGdCQUFnQixHQUFJLENBQUMsZ0JBQUQsS0FBc0IsQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsZ0JBQU4sTUFBMkIsVUFBM0IsR0FBd0MscUJBQXhDLEdBQWdFLHNCQUF0RixDQUExQjs7SUFDQSxjQUFJLGdCQUFKLEVBQXNCO0lBQ2xCLGdCQUFJLENBQUEsSUFBSSxTQUFKLElBQUEsSUFBSSxXQUFKLFlBQUEsSUFBSSxDQUFHLFFBQUgsQ0FBSixNQUFxQixLQUF6QixFQUFnQztJQUM1QixjQUFBLGNBQWM7SUFDakIsYUFGRCxNQUdLO0lBQ0QsY0FBQSxjQUFjO0lBQ2pCOztJQUNELFlBQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxZQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0g7O0lBQ0Q7SUFDSDs7SUFFRCxXQUFLLFdBQUw7SUFBa0I7SUFDZCxnQkFBTSxRQUFRLEdBQUksQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsaUJBQU4sTUFBNEIsWUFBNUIsR0FBMkMsaUJBQTNDLEdBQStELGdCQUFqRjtJQUNBLGdCQUFNLGdCQUFnQixHQUFJLENBQUMsZ0JBQUQsS0FBc0IsQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsaUJBQU4sTUFBNEIsWUFBNUIsR0FBMkMsc0JBQTNDLEdBQW9FLHFCQUExRixDQUExQjs7SUFDQSxjQUFJLGdCQUFKLEVBQXNCO0lBQ2xCLGdCQUFJLENBQUEsSUFBSSxTQUFKLElBQUEsSUFBSSxXQUFKLFlBQUEsSUFBSSxDQUFHLFFBQUgsQ0FBSixNQUFxQixLQUF6QixFQUFnQztJQUM1QixjQUFBLGNBQWM7SUFDakIsYUFGRCxNQUdLO0lBQ0QsY0FBQSxjQUFjO0lBQ2pCOztJQUNELFlBQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxZQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0g7O0lBQ0Q7SUFDSDs7SUFDRCxXQUFLLFlBQUw7SUFBbUI7SUFDZixnQkFBTSxRQUFRLEdBQUksQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsaUJBQU4sTUFBNEIsWUFBNUIsR0FBMkMsaUJBQTNDLEdBQStELGdCQUFqRjtJQUNBLGdCQUFNLGdCQUFnQixHQUFJLENBQUMsZ0JBQUQsS0FBc0IsQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsaUJBQU4sTUFBNEIsWUFBNUIsR0FBMkMsc0JBQTNDLEdBQW9FLHFCQUExRixDQUExQjs7SUFDQSxjQUFJLGdCQUFKLEVBQXNCO0lBQ2xCLGdCQUFJLENBQUEsSUFBSSxTQUFKLElBQUEsSUFBSSxXQUFKLFlBQUEsSUFBSSxDQUFHLFFBQUgsQ0FBSixNQUFxQixLQUF6QixFQUFnQztJQUM1QixjQUFBLGNBQWM7SUFDakIsYUFGRCxNQUdLO0lBQ0QsY0FBQSxjQUFjO0lBQ2pCOztJQUNELFlBQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxZQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0g7O0lBQ0QsVUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLFVBQUEsQ0FBQyxDQUFDLGVBQUY7SUFDQTtJQUNIOztJQUNELFdBQUssTUFBTDtJQUNJLFlBQUksQ0FBQyxrQkFBTCxFQUF5QjtJQUNyQixVQUFBLGVBQWU7SUFDZixVQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0EsVUFBQSxDQUFDLENBQUMsZUFBRjtJQUNIOztJQUNEOztJQUVKLFdBQUssS0FBTDtJQUNJLFlBQUksQ0FBQyxrQkFBTCxFQUF5QjtJQUNyQixVQUFBLGNBQWM7SUFDZCxVQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0EsVUFBQSxDQUFDLENBQUMsZUFBRjtJQUNIOztJQUNEO0lBOUVSO0lBZ0ZILEdBMUZEOztJQTZGQSxTQUFPO0lBQ0gsSUFBQSx3QkFBd0IsRUFBRUEsQ0FBVyxDQUFnRCxLQUEvQyxJQUEyRDtJQUFHLGFBQU8sd0JBQXdCLENBQUMsY0FBYyxHQUFpQjtJQUFFLFFBQUE7SUFBRixPQUFqQixFQUFnQyxLQUFoQyxDQUFmLENBQS9CO0lBQXVGLEtBQXRKLEVBQXdKLEVBQXhKO0lBRGxDLEdBQVA7SUFLSDtJQTJERDs7OztJQUlHOztJQUNHLFNBQVUsc0JBQVYsUUFBOEw7SUFBQSxNQUFwRjtJQUFFLElBQUEsUUFBRjtJQUFZLElBQUEsUUFBWjtJQUFzQixJQUFBLGdCQUF0QjtJQUF3QyxJQUFBO0lBQXhDLEdBQW9GO0lBR2hNO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBTSxDQUFDLGdCQUFELEVBQW1CLG1CQUFuQixFQUF3QyxtQkFBeEMsSUFBK0QsUUFBUSxDQUFnQixJQUFoQixDQUE3RTtJQUNBLEVBQUEsVUFBVSxDQUFDO0lBQUUsSUFBQSxPQUFPLEVBQUUsZ0JBQUYsYUFBRSxnQkFBRixjQUFFLGdCQUFGLEdBQXNCLElBQS9CO0lBQXFDLElBQUEsUUFBUSxFQUFFLE1BQUs7SUFBRyxNQUFBLG1CQUFtQixDQUFDLElBQUQsQ0FBbkI7SUFBMkIsTUFBQSxtQkFBbUIsQ0FBQyxJQUFELENBQW5CO0lBQTRCLEtBQTlHO0lBQWdILElBQUEsWUFBWSxFQUFFO0lBQTlILEdBQUQsQ0FBVjtJQUNBLFFBQU0sbUJBQW1CLEdBQUdMLENBQU0sQ0FBNEMsRUFBNUMsQ0FBbEM7SUFDQSxRQUFNLENBQUMsZ0JBQUQsRUFBbUIsbUJBQW5CLElBQTBDLFFBQVEsQ0FBaUIsS0FBakIsQ0FBeEQsQ0FWZ007SUFhaE07SUFDQTs7SUFDQSxRQUFNLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsWUFBMUIsSUFBMEMsUUFBUSxDQUFDLEtBQUQsQ0FBeEQsQ0FmZ007SUFrQmhNO0lBQ0E7O0lBQ0EsUUFBTSxDQUFDLGlCQUFELEVBQW9CLG9CQUFwQixJQUE0QyxRQUFRLENBQWdCLElBQWhCLENBQTFEO0lBQ0EsRUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixRQUFJLGlCQUFpQixLQUFLLElBQTFCLEVBQWdDO0lBQzVCLE1BQUEsbUJBQW1CLENBQUMsU0FBUyxJQUFLLENBQUMsU0FBRCxhQUFDLFNBQUQsY0FBQyxTQUFELEdBQWMsRUFBZCxJQUFvQixpQkFBbkMsQ0FBbkI7SUFDQSxNQUFBLG9CQUFvQixDQUFDLElBQUQsQ0FBcEI7SUFDSDtJQUNKLEdBTGMsRUFLWixDQUFDLGlCQUFELENBTFksQ0FBZjtJQVFBLFFBQU0sZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxPQUFELEVBQWtCLE9BQWxCLEtBQXFDO0lBQUE7O0lBQzVFLFFBQUksT0FBSixDQUQ0RTtJQUc1RTs7SUFDQSxJQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUixDQUFrQixLQUFsQixDQUFWO0lBQ0EsSUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsS0FBbEIsQ0FBVjtJQUVBLFFBQUksUUFBSixFQUNJLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBVCxDQUFpQixPQUFqQixFQUEwQixPQUExQixDQUFWLENBREosS0FHSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVIsR0FBc0IsYUFBdEIseUJBQW9DLE9BQU8sQ0FBQyxXQUFSLEVBQXBDLHVFQUE2RCxFQUE3RCxDQUFWO0lBRUosV0FBTyxPQUFQO0lBQ0gsR0FieUMsQ0FBMUM7SUFlQSxRQUFNLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBRCxFQUFpQixHQUFqQixLQUFxRTs7SUFHL0csUUFBSSxPQUFPLEdBQVAsS0FBZSxRQUFmLElBQTJCLE9BQU8sR0FBRyxDQUFDLElBQVgsS0FBb0IsUUFBbkQsRUFBNkQ7SUFDekQsYUFBTyxnQkFBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBRyxDQUFDLElBQVYsQ0FBdkI7SUFDSDs7SUFFRCxXQUFRLEdBQVcsR0FBSSxHQUF2QjtJQUNILEdBUjRDLENBQTdDO0lBVUEsUUFBTSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUQsRUFBaUIsR0FBakIsS0FBcUU7O0lBRy9HLFFBQUksT0FBTyxHQUFQLEtBQWUsUUFBZixJQUEyQixPQUFPLEdBQUcsQ0FBQyxJQUFYLEtBQW9CLFFBQW5ELEVBQTZEO0lBQ3pEO0lBQ0E7SUFDQSxhQUFPLGdCQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFHLENBQUMsSUFBSixDQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsR0FBRyxDQUFDLE1BQTFCLENBQU4sQ0FBdkI7SUFDSDs7SUFFRCxXQUFRLEdBQVcsR0FBSSxHQUF2QjtJQUNILEdBVjRDLENBQTdDO0lBYUEsUUFBTSwyQkFBMkIsR0FBOENLLENBQVcsQ0FBQyxpQkFBdUU7SUFBQSxRQUFmLEVBQUUsR0FBRztJQUFMLEtBQWU7O0lBRTlKLFVBQU0sa0JBQWtCLEdBQUksQ0FBRCxJQUF3QjtJQUFHLE1BQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtJQUFvQixLQUExRTs7SUFDQSxVQUFNLGdCQUFnQixHQUFJLENBQUQsSUFBd0I7SUFDN0MsTUFBQSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSCxDQUFwQjtJQUNBLE1BQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtJQUNILEtBSEQ7O0lBS0EsVUFBTSxTQUFTLEdBQUksQ0FBRCxJQUFxQjtJQUVuQyxZQUFNLFNBQVMsR0FBRyxZQUFZLEVBQTlCO0lBRUEsVUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQVosQ0FKbUM7O0lBT25DLFVBQUksQ0FBQyxDQUFDLE9BQUYsSUFBYSxDQUFDLENBQUMsT0FBbkIsRUFDSTs7SUFFSixVQUFJLENBQUMsU0FBRCxJQUFjLENBQUMsQ0FBQyxHQUFGLEtBQVUsV0FBNUIsRUFBeUM7SUFDckM7SUFDQSxRQUFBLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBTixHQUFhLElBQWIsR0FBb0IsQ0FBQyxHQUFHLENBQUosRUFBTyxPQUFQLEdBQWlCLEtBQWpCLENBQXVCLENBQXZCLEVBQTBCLE9BQTFCLEdBQW9DLElBQXBDLENBQXlDLEVBQXpDLENBQTFCLENBQW5CO0lBQ0EsUUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLFFBQUEsQ0FBQyxDQUFDLGVBQUY7SUFDQTtJQUNILE9BaEJrQztJQW1CbkM7SUFDQTtJQUNBOzs7SUFDQSxZQUFNLGNBQWMsR0FBSSxHQUFHLENBQUMsTUFBSixLQUFlLENBQWYsSUFBb0IsQ0FBQyxZQUFZLElBQVosQ0FBaUIsR0FBakIsQ0FBN0M7O0lBQ0EsVUFBSSxjQUFKLEVBQW9CO0lBQUE7O0lBRWhCLFlBQUksR0FBRyxJQUFJLEdBQVAsSUFBYyx5QkFBQyxtQkFBbUIsRUFBcEIsdUVBQTBCLEVBQTFCLEVBQThCLElBQTlCLEdBQXFDLE1BQXJDLElBQStDLENBQWpFLEVBQW9FLENBQXBFLE1BTUs7SUFFRCxVQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0EsVUFBQSxDQUFDLENBQUMsZUFBRixHQUhDO0lBTUQ7SUFDQTs7SUFDQSxjQUFJLENBQUMsU0FBTCxFQUNJLG9CQUFvQixDQUFDLEdBQUQsQ0FBcEI7SUFDUDtJQUNKO0lBRUosS0E1Q0Q7O0lBOENBLFdBQU8sY0FBYyxHQUFpQjtJQUFFLE1BQUEsU0FBRjtJQUFhLE1BQUEsa0JBQWI7SUFBaUMsTUFBQTtJQUFqQyxLQUFqQixFQUF1RSxLQUF2RSxDQUFyQjtJQUNILEdBdkR5RixFQXVEdkYsRUF2RHVGLENBQTFGLENBbkVnTTs7SUE2SGhNLEVBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsUUFBSSxnQkFBZ0IsSUFBSSxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixNQUFwRCxFQUE0RDtJQUl4RCxVQUFJLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFyQixFQUE4QixnQkFBOUIsRUFBZ0QsbUJBQWhELENBQXZDOztJQUVBLFVBQUksb0JBQW9CLEdBQUcsQ0FBM0IsRUFBOEI7SUFDMUI7SUFDQTtJQUNBLFFBQUEsbUJBQW1CLENBQUMsSUFBRCxDQUFuQjtJQUNILE9BSkQsTUFLSztJQUNELFFBQUEsbUJBQW1CLENBQUMsS0FBRCxDQUFuQjtJQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEyQkE7O0lBQ0EsWUFBSSxzQkFBc0IsR0FBa0IsSUFBNUM7SUFDQSxZQUFJLG9CQUFvQixHQUFHLG9CQUEzQixDQWhDQzs7SUFtQ0QsWUFBSSx1QkFBdUIsR0FBa0IsSUFBN0M7SUFDQSxZQUFJLHFCQUFxQixHQUFHLG9CQUE1Qjs7SUFFQSxjQUFNLGFBQWEsR0FBSSxDQUFELElBQWM7SUFBQTs7SUFDaEMsY0FBSSxzQkFBc0IsSUFBSSxJQUExQixJQUFrQyxDQUFDLEdBQUcsc0JBQTFDLEVBQWtFO0lBQzlELFlBQUEsc0JBQXNCLEdBQUcsQ0FBekI7SUFDQSxZQUFBLG9CQUFvQixHQUFHLENBQXZCO0lBQ0g7O0lBQ0QsY0FBSSxDQUFDLHVCQUF1QixJQUFJLElBQTNCLElBQW1DLENBQUMsR0FBRyx1QkFBeEMsS0FBb0UsQ0FBQyxpQkFBSSxRQUFRLEVBQVosaURBQWtCLENBQUMsUUFBbkIsQ0FBekUsRUFBdUc7SUFDbkcsWUFBQSx1QkFBdUIsR0FBRyxDQUExQjtJQUNBLFlBQUEscUJBQXFCLEdBQUcsQ0FBeEI7SUFDSDtJQUNKLFNBVEQ7O0lBV0EsWUFBSSxDQUFDLEdBQUcsb0JBQVI7O0lBQ0EsZUFBTyxDQUFDLElBQUksQ0FBTCxJQUFVLG1CQUFtQixDQUFDLGdCQUFELEVBQW1CLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLENBQTVCLENBQW5CLENBQW5CLElBQXlFLENBQTFGLEVBQTZGO0lBQ3pGLFVBQUEsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLENBQTVCLEVBQStCLGFBQWhDLENBQWI7SUFDQSxZQUFFLENBQUY7SUFDSDs7SUFFRCxRQUFBLENBQUMsR0FBRyxvQkFBSjs7SUFDQSxlQUFPLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixNQUFoQyxJQUEwQyxtQkFBbUIsQ0FBQyxnQkFBRCxFQUFtQixtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixDQUE1QixDQUFuQixDQUFuQixJQUF5RSxDQUExSCxFQUE2SDtJQUN6SCxVQUFBLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixDQUE1QixFQUErQixhQUFoQyxDQUFiO0lBQ0EsWUFBRSxDQUFGO0lBQ0g7O0lBRUQsWUFBSSx1QkFBdUIsS0FBSyxJQUFoQyxFQUNJLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixxQkFBNUIsRUFBbUQsYUFBcEQsQ0FBUixDQURKLEtBRUssSUFBSSxzQkFBc0IsS0FBSyxJQUEvQixFQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixvQkFBNUIsRUFBa0QsYUFBbkQsQ0FBUjtJQUNQO0lBQ0o7SUFDSixHQS9FUSxFQStFTixDQUFDLGdCQUFELENBL0VNLENBQVQ7SUFpRkEsUUFBTSwyQkFBMkIsR0FBR1csQ0FBVyxDQUErQyxTQUFzQjtJQUFBLFFBQXJCO0lBQUUsTUFBQSxJQUFGO0lBQVEsU0FBRztJQUFYLEtBQXFCO0lBRWhILElBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsVUFBSSxJQUFKLEVBQVU7SUFFTjtJQUNBO0lBQ0E7SUFDQSxZQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsbUJBQW1CLENBQUMsT0FBckIsRUFBOEIsSUFBOUIsRUFBb0MsbUJBQXBDLENBQTlCO0lBQ0EsUUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFdBQVcsR0FBRyxDQUFkLElBQW1CLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDLElBQXpDLElBQWlELElBQW5GOztJQUNBLFlBQUksV0FBVyxHQUFHLENBQWxCLEVBQXFCO0lBQ2pCLFVBQUEsbUJBQW1CLENBQUMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBbUMsQ0FBQyxXQUFELEdBQWUsQ0FBbEQsRUFBcUQsQ0FBckQsRUFBd0Q7SUFBRSxZQUFBLElBQUY7SUFBUSxZQUFBLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFBekIsV0FBeEQ7SUFDSCxTQUZELE1BR0s7SUFDRCxVQUFBLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLE1BQTVCLENBQW1DLFdBQW5DLEVBQWdELENBQWhELEVBQW1EO0lBQUUsWUFBQSxJQUFGO0lBQVEsWUFBQSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQXpCLFdBQW5EO0lBQ0g7O0lBRUQsZUFBTyxNQUFLO0lBQ1I7SUFDQTtJQUNBLGNBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFyQixFQUE4QixJQUE5QixFQUFvQyxtQkFBcEMsQ0FBOUI7SUFDQSxVQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsV0FBVyxJQUFJLENBQTlCOztJQUVBLGNBQUksV0FBVyxJQUFJLENBQW5CLEVBQXNCO0lBQ2xCLFlBQUEsbUJBQW1CLENBQUMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBbUMsV0FBbkMsRUFBZ0QsQ0FBaEQ7SUFDSDtJQUNKLFNBVEQ7SUFVSDtJQUNKLEtBMUJRLEVBMEJOLENBQUMsSUFBRCxDQTFCTSxDQUFUO0lBNEJBLFdBQU8sRUFBUDtJQUVILEdBaEM4QyxFQWdDNUMsRUFoQzRDLENBQS9DO0lBa0NBLFNBQU87SUFDSCxJQUFBLDJCQURHO0lBRUgsSUFBQSwyQkFGRztJQUlILElBQUEsZ0JBSkc7SUFLSCxJQUFBO0lBTEcsR0FBUDtJQU9IO0lBR0Q7Ozs7Ozs7OztJQVNHOztJQUNHLFNBQVUsWUFBVixDQUFtRSxLQUFuRSxFQUErRSxNQUEvRSxFQUEwRixVQUExRixFQUF1RztJQUN6RyxNQUFJLFVBQVUsR0FBRyxDQUFqQjtJQUNBLE1BQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBL0I7O0lBQ0EsU0FBTyxVQUFVLElBQUksU0FBckIsRUFBZ0M7SUFDNUIsUUFBSSxTQUFTLEdBQUksU0FBUyxHQUFHLFVBQWIsSUFBNEIsQ0FBNUM7SUFDQSxRQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxNQUFELEVBQVMsS0FBSyxDQUFDLFNBQUQsQ0FBZCxDQUFqQzs7SUFFQSxRQUFJLGdCQUFnQixHQUFHLENBQXZCLEVBQTBCO0lBQ3RCLE1BQUEsVUFBVSxHQUFHLFNBQVMsR0FBRyxDQUF6QjtJQUNILEtBRkQsTUFHSyxJQUFJLGdCQUFnQixHQUFHLENBQXZCLEVBQTBCO0lBQzNCLE1BQUEsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUF4QjtJQUNILEtBRkksTUFHQTtJQUNELGFBQU8sU0FBUDtJQUNIO0lBQ0o7O0lBRUQsU0FBTyxDQUFDLFVBQUQsR0FBYyxDQUFyQjtJQUNIOztJQ3RjRDs7Ozs7Ozs7Ozs7SUFXRzs7SUFDRyxTQUFVLGVBQVYsR0FBeUI7SUFHM0I7SUFDQTtJQUNBO0lBQ0EsUUFBTSxDQUFDLGdCQUFELEVBQW1CLG1CQUFuQixJQUEwQyxRQUFRLENBQUMsQ0FBRCxDQUF4RDtJQUNBLFFBQU0sQ0FBQyxvQkFBRCxFQUF1Qix1QkFBdkIsRUFBZ0QsdUJBQWhELElBQTJFLFFBQVEsQ0FBQyxDQUFELENBQXpGO0lBQ0EsUUFBTSxDQUFDLHFCQUFELEVBQXdCLHdCQUF4QixFQUFrRCx3QkFBbEQsSUFBOEUsUUFBUSxDQUFDLENBQUQsQ0FBNUY7SUFDQSxRQUFNLHdCQUF3QixHQUFHLG9CQUFvQixHQUFHLHFCQUF4RDtJQUNBLFFBQU0sZUFBZSxHQUFHTSxDQUFNLENBQW1DO0lBQThDO0lBQWpGLEdBQTlCO0lBQ0EsUUFBTSxlQUFlLEdBQUdBLENBQU0sQ0FBZSxFQUFmLENBQTlCO0lBQ0EsUUFBTSxVQUFVLEdBQUdBLENBQU0sQ0FBaUIsSUFBSSxHQUFKLEVBQWpCLENBQXpCO0lBQ0EsUUFBTSxnQkFBZ0IsR0FBR0EsQ0FBTSxDQUFzQixJQUFJLEdBQUosRUFBdEIsQ0FBL0I7SUFDQSxRQUFNLGNBQWMsR0FBR0EsQ0FBTSxDQUFTLElBQUksR0FBSixFQUFULENBQTdCLENBZDJCO0lBaUIzQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFDQSxRQUFNLGNBQWMsR0FBR0EsQ0FBTSxDQUFDLElBQUksR0FBSixFQUFELENBQTdCO0lBRUEsUUFBTSxhQUFhLEdBQUdLLENBQVcsQ0FBRSxLQUFELElBQWE7SUFBRyxXQUFPLFVBQVUsQ0FBQyxPQUFYLENBQW1CLEdBQW5CLENBQXVCLEtBQXZCLENBQVA7SUFBd0MsR0FBekQsRUFBMkQsRUFBM0QsQ0FBakM7SUFFQSxRQUFNLGVBQWUsR0FBd0JBLENBQVcsQ0FBaUMsSUFBaEMsSUFBMkM7SUFDaEcsVUFBTTtJQUFFLE1BQUEsVUFBRjtJQUFjLE1BQUE7SUFBZCxRQUFxQyxhQUFhLENBQVk7SUFBRSxNQUFBLGVBQWUsRUFBRUEsQ0FBVyxDQUFFLE9BQUQsSUFBOEI7SUFDN0gsWUFBSSxPQUFKLEVBQWE7SUFDVCxVQUFBLGdCQUFnQixDQUFDLE9BQWpCLENBQXlCLEdBQXpCLENBQTZCLE9BQTdCLEVBQXNDLElBQUksQ0FBQyxLQUEzQztJQUNBLFVBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBOEIsSUFBSSxDQUFDLEtBQW5DOztJQUNBLGNBQUksZUFBZSxDQUFDLE9BQWhCLENBQXdCLElBQUksQ0FBQyxLQUE3QixLQUFpRixTQUFyRixFQUFnRztJQUFBOztJQUM1RixZQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxLQUFoQyxFQUF1QywwQkFBQyxjQUFjLENBQUMsT0FBZixDQUF1QixHQUF2QixDQUEyQixJQUFJLENBQUMsS0FBaEMsQ0FBRCx5RUFBMkMsQ0FBM0MsSUFBZ0QsQ0FBdkY7SUFDSDs7SUFFRCxVQUFBLG1CQUFtQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQVIsQ0FBbkI7SUFDQSxVQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixJQUFJLENBQUMsS0FBN0IsSUFBZ0YsRUFBRSxHQUFHO0lBQUwsV0FBaEY7SUFFQSxpQkFBTyxNQUFLO0lBQUE7O0lBQ1IsWUFBQSxtQkFBbUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQW5COztJQUNBLGdCQUFJLDJCQUFDLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxLQUFoQyxDQUFELDJFQUEyQyxDQUEzQyxJQUFnRCxDQUFwRCxFQUF1RDtJQUFBOztJQUNuRCxjQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxLQUFoQyxFQUF1QywyQkFBQyxjQUFjLENBQUMsT0FBZixDQUF1QixHQUF2QixDQUEyQixJQUFJLENBQUMsS0FBaEMsQ0FBRCwyRUFBMkMsQ0FBM0MsSUFBZ0QsQ0FBdkY7SUFDSCxhQUZELE1BR0s7SUFDRCxxQkFBTyxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsSUFBSSxDQUFDLEtBQTdCLENBQVA7SUFDQSxjQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxLQUFoQzs7SUFFQSxrQkFBSSxPQUFPLElBQUksQ0FBQyxLQUFaLEtBQXNCLFFBQTFCLEVBQW9DO0lBQ2hDLHVCQUFPLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixNQUF4QixJQUFtQyxlQUFlLENBQUMsT0FBaEIsQ0FBaUMsZUFBZSxDQUFDLE9BQWhCLENBQWdDLE1BQWhDLEdBQXlDLENBQTFFLE1BQWlGLFNBQTNILEVBQ0ssZUFBZSxDQUFDLE9BQWhCLENBQWdDLE1BQWhDLElBQTBDLENBQTFDO0lBQ1I7O0lBQ0QsY0FBQSxnQkFBZ0IsQ0FBQyxPQUFqQixDQUF5QixNQUF6QixDQUFnQyxPQUFoQztJQUNIO0lBQ0osV0FmRDtJQWdCSDtJQUNKLE9BNUJpRyxFQTRCL0YsRUE1QitGO0lBQTlCLEtBQVosQ0FBeEQ7SUE4QkEsSUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixVQUFJLEtBQUssR0FBRyx1QkFBdUIsRUFBbkM7SUFDQSxNQUFBLFVBQVUsQ0FBQyxPQUFYLENBQW1CLEdBQW5CLENBQXVCLElBQUksQ0FBQyxLQUE1QixFQUFtQyxLQUFuQztJQUNBLE1BQUEsZUFBZSxDQUFDLE9BQWhCLENBQXdCLEtBQXhCLElBQWlDLElBQWpDO0lBQ0EsTUFBQSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQXZCO0lBQ0EsYUFBTyxNQUFLO0lBQ1IsUUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixNQUFuQixDQUEwQixJQUFJLENBQUMsS0FBL0I7SUFDQSxRQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixLQUF4QixJQUFpQyxJQUFqQztJQUNBLFFBQUEsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBUixDQUF4QjtJQUVILE9BTEQ7SUFNSCxLQVhjLEVBV1osQ0FBQyxJQUFJLENBQUMsS0FBTixDQVhZLENBQWYsQ0EvQmdHO0lBNkNoRztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsSUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixVQUFJLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixJQUFJLENBQUMsS0FBN0IsS0FBaUYsU0FBckYsRUFDSSxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsSUFBSSxDQUFDLEtBQTdCLElBQWdGLEVBQUUsR0FBRztJQUFMLE9BQWhGO0lBQ1AsS0FIYyxFQUdaLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBUCxDQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBSixDQUhZLENBQWY7SUFLQSxXQUFPO0lBQUUsTUFBQSxVQUFGO0lBQWMsTUFBQSxvQkFBb0IsRUFBRTtJQUFwQyxLQUFQO0lBQ0gsR0F6RHVELEVBeURyRCxFQXpEcUQsQ0FBeEQ7SUE0REEsU0FBTztJQUNILElBQUEsZUFERztJQUVILElBQUEsVUFBVSxFQUFFLHdCQUZUO0lBR0gsSUFBQSxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BSDlCO0lBSUgsSUFBQSxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BSjlCO0lBS0gsSUFBQSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxPQUxoQztJQU1ILElBQUEsb0JBTkc7SUFPSCxJQUFBLHFCQVBHO0lBUUgsSUFBQSxhQVJHO0lBU0gsSUFBQSxjQUFjLEVBQUUsY0FBYyxDQUFDO0lBVDVCLEdBQVA7SUFXSDtJQStDRDs7Ozs7Ozs7Ozs7Ozs7O0lBZUc7O0lBQ0csU0FBVSxZQUFWLE9BQXFNO0lBQUE7O0lBQUEsTUFBcEg7SUFBRSxJQUFBLGNBQUY7SUFBa0IsSUFBQSxVQUFsQjtJQUE4QixJQUFBLGVBQTlCO0lBQStDLElBQUEsWUFBL0M7SUFBNkQsSUFBQSxZQUE3RDtJQUEyRSxJQUFBO0lBQTNFLEdBQW9IO0lBRXZNLGdCQUFBLFNBQVMsVUFBVCx5Q0FBQSxTQUFTLEdBQUssZUFBZDtJQUVBLE1BQUksVUFBSixFQUNJLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBTyxjQUFQLElBQXlCLFFBQXpCLElBQXFDLGNBQWMsSUFBSSxJQUF0RSxFQUxtTTtJQVF2TTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsRUFBQSxTQUFTLENBQUMsTUFBSztJQUdYO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFHQTtJQUNBO0lBQ0E7SUFDQSxRQUFJLE9BQU8sY0FBUCxJQUF5QixRQUF6QixJQUFxQyxLQUFLLENBQUMsT0FBTixDQUFjLGVBQWQsQ0FBckMsSUFBdUUsZUFBZSxDQUFDLGNBQUQsQ0FBZixJQUFtQyxJQUE5RyxFQUFvSDtJQUNoSDtJQUNBLFVBQUksVUFBSixFQUFnQjtJQUNaO0lBQ0E7SUFFQSxZQUFJLFVBQVUsR0FBRyxjQUFjLEdBQUcsQ0FBbEM7SUFDQSxZQUFJLFNBQVMsR0FBRyxjQUFjLEdBQUcsQ0FBakM7O0lBRUEsZUFBUSxTQUFTLElBQUksQ0FBYixJQUFrQixlQUFlLENBQUMsU0FBRCxDQUFmLElBQThCLElBQWpELElBQTJELFVBQVUsR0FBRyxlQUFlLENBQUMsTUFBN0IsSUFBdUMsZUFBZSxDQUFDLFVBQUQsQ0FBZixJQUErQixJQUF4SSxFQUErSTtJQUMzSSxZQUFFLFVBQUY7SUFDQSxZQUFFLFNBQUY7SUFDSDs7SUFFRCxZQUFJLFNBQVMsSUFBSSxDQUFiLElBQWtCLGVBQWUsQ0FBQyxTQUFELENBQWYsSUFBOEIsSUFBcEQsRUFBMEQ7SUFDckQsVUFBQSxjQUF5QixHQUFHLFNBQTVCO0lBQ0osU0FGRCxNQUdLLElBQUksVUFBVSxHQUFHLGVBQWUsQ0FBQyxNQUE3QixJQUF1QyxlQUFlLENBQUMsVUFBRCxDQUFmLElBQStCLElBQTFFLEVBQWdGO0lBQ2hGLFVBQUEsY0FBeUIsR0FBRyxVQUE1QjtJQUNKLFNBakJXO0lBb0JaO0lBQ0E7SUFDQTtJQUNBOztJQUNIO0lBQ0o7O0lBRUQsUUFBSSxLQUFLLENBQUMsT0FBTixDQUFjLGVBQWQsQ0FBSixFQUFtQztJQUNuQyxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFwQyxFQUE0QyxFQUFFLENBQTlDLEVBQWlEO0lBQzdDLFlBQUksV0FBVyxHQUFJLENBQUMsSUFBSSxjQUF4Qjs7SUFDQSxZQUFJLFlBQVksQ0FBQyxDQUFELENBQVosSUFBd0IsV0FBNUIsRUFBeUM7SUFDckMsVUFBQSxZQUFZLENBQUMsQ0FBRCxFQUFTLFdBQVQsQ0FBWjtJQUNIO0lBQ0o7SUFBQyxLQU5GLE1BT0s7SUFDRCxNQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsZUFBZixFQUFnQyxPQUFoQyxDQUF3QyxTQUFjO0lBQUEsWUFBYixDQUFDLENBQUQsRUFBSSxJQUFKLENBQWE7SUFDbEQsWUFBSSxXQUFXLEdBQUksQ0FBQyxJQUFJLGNBQXhCOztJQUNBLFlBQUksWUFBWSxDQUFDLENBQUQsQ0FBWixJQUF3QixXQUE1QixFQUF5QztJQUNyQyxVQUFBLFlBQVksQ0FBQyxDQUFELEVBQVMsV0FBVCxDQUFaO0lBQ0g7SUFDSixPQUxEO0lBTUg7SUFDSixHQXpEUSxDQUFUO0lBMkRIOztJQ2xSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCRzs7SUFDRyxTQUFVLGlCQUFWLE9BQTBJO0lBQUEsTUFBeEU7SUFBRSxJQUFBLG1CQUFtQixFQUFFLEdBQXZCO0lBQTRCLElBQUE7SUFBNUIsR0FBd0U7SUFFNUksUUFBTSxzQkFBc0IsR0FBRyxlQUFlLENBQUMsR0FBRCxDQUE5QztJQUVBLFFBQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLGFBQUQsQ0FBeEM7SUFDQSxFQUFxQkwsQ0FBTSxDQUFDLENBQUMsUUFBRixFQUxpSDs7SUFRNUksUUFBTTtJQUFFLElBQUEsZUFBRjtJQUFtQixJQUFBLFVBQW5CO0lBQStCLElBQUEsZUFBL0I7SUFBZ0QsSUFBQSxnQkFBaEQ7SUFBa0UsT0FBRztJQUFyRSxNQUE4RSxlQUFlLEVBQW5HLENBUjRJO0lBVzVJO0lBQ0E7O0lBQ0EsRUFBQSxZQUFZLENBQUM7SUFDVCxJQUFBLGNBQWMsRUFBRSxhQURQO0lBRVQsSUFBQSxlQUZTO0lBR1QsSUFBQSxVQUFVLEVBQUUsSUFISDtJQUlULElBQUEsWUFBWSxFQUFFLENBQUMsS0FBRCxFQUFRLFFBQVIsS0FBb0I7SUFBQTs7SUFDOUIsVUFBSSxLQUFLLElBQUksSUFBYixFQUNLLHlCQUFBLGVBQWUsQ0FBQyxLQUFELENBQWYsZ0ZBQThELFdBQTlELENBQTBFLFFBQTFFO0lBQ1IsS0FQUTtJQVFULElBQUEsWUFBWSxFQUFHLEtBQUQ7SUFBQTs7SUFBQSxpRUFBWSxlQUFlLENBQUMsS0FBRCxDQUEzQiwyREFBWSx1QkFBd0IsV0FBeEIsRUFBWiwyRUFBcUQsSUFBckQ7SUFBQTtJQVJMLEdBQUQsQ0FBWjtJQVdBLEVBQWtCSyxDQUFXLENBQUMsTUFBSztJQUMvQixRQUFJLGFBQWEsSUFBSSxJQUFyQixFQUNJLGVBQWUsQ0FBQyxhQUFELENBQWYsQ0FBK0IsV0FBL0IsQ0FBMkMsSUFBM0M7SUFDUCxHQUg0QixFQUcxQixDQUFDLGFBQUQsQ0FIMEI7SUFLN0IsUUFBTSxzQkFBc0IsR0FBR0EsQ0FBVyxDQUEyRCxJQUEvQixJQUE0SDtJQUU5TCxVQUFNLENBQUMsU0FBRCxFQUFZLFlBQVosSUFBNEIsUUFBUSxDQUFDLENBQUQsQ0FBMUM7SUFDQSxVQUFNLGdCQUFnQixHQUFHQSxDQUFXLENBQUMsTUFBSztJQUFHLE1BQUEsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQVIsQ0FBWjtJQUF3QixLQUFqQyxFQUFtQyxFQUFuQyxDQUFwQztJQUNBLFVBQU0sQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixXQUF4QixJQUF1QyxRQUFRLENBQWlCLElBQWpCLENBQXJEO0lBR0EsUUFBSSxPQUFPLEdBQUcsRUFDVixHQUFHLElBRE87SUFFVixNQUFBLGdCQUZVO0lBR1YsTUFBQSxXQUFXLEVBQUVBLENBQVcsQ0FBRSxRQUFELElBQXNCO0lBQUcsUUFBQSxXQUFXLENBQUMsUUFBRCxDQUFYO0lBQXdCLE9BQWxELEVBQW9ELEVBQXBELENBSGQ7SUFJVixNQUFBO0lBSlUsS0FBZDtJQU9BLFVBQU07SUFBRSxNQUFBLFVBQUY7SUFBYyxNQUFBO0lBQWQsUUFBdUMsZUFBZSxDQUFlLE9BQWYsQ0FBNUQ7SUFFQSxJQUFBWCxDQUFTLENBQUMsTUFBSztJQUNYLFlBQU0sT0FBTyxHQUFHLFVBQVUsRUFBMUI7O0lBQ0EsVUFBSSxRQUFKLEVBQWM7SUFDVixjQUFNLG1CQUFtQixHQUFHLHNCQUFzQixJQUFsRDs7SUFDQSxZQUFJLG1CQUFtQixJQUFJLFdBQVksT0FBdkMsRUFBNEY7SUFDeEYsVUFBQSxxQkFBcUIsQ0FBQyxNQUFLO0lBQ3ZCLFlBQUEsY0FBYyxDQUFDLE1BQUs7SUFDZixjQUFBLE9BQW1ELENBQUMsS0FBcEQ7SUFDSixhQUZhLENBQWQ7SUFHSCxXQUpvQixDQUFyQjtJQUtIO0lBQ0o7SUFDSixLQVpRLEVBWU4sQ0FBQyxRQUFELEVBQVcsU0FBWCxDQVpNLENBQVQ7O0lBY0EsYUFBUyw2QkFBVCxRQUF3SDtJQUFBLFVBQXpCO0lBQUUsUUFBQSxRQUFGO0lBQVksV0FBRztJQUFmLE9BQXlCOztJQUVwSCxVQUFJLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtJQUNsQixZQUFJLFFBQUosRUFDSSxRQUFRLEdBQUcsQ0FBWCxDQURKLEtBR0ksUUFBUSxHQUFHLENBQUMsQ0FBWjtJQUNQOztJQUVELGFBQU8sY0FBYyxHQUFZO0lBQUUsUUFBQTtJQUFGLE9BQVosRUFBMEIsS0FBMUIsQ0FBckI7SUFDSDs7SUFHRCxhQUFTLDJCQUFULFFBQTZIO0lBQUEsVUFBekI7SUFBRSxRQUFBLFFBQUY7SUFBWSxXQUFHO0lBQWYsT0FBeUI7O0lBR3pILFVBQUksUUFBUSxJQUFJLElBQWhCLEVBQXNCO0lBQ2xCLFlBQUksUUFBSixFQUNJLFFBQVEsR0FBRyxDQUFYLENBREosS0FHSSxRQUFRLEdBQUcsQ0FBQyxDQUFaO0lBQ1A7O0lBRUQsYUFBTyxjQUFjLEdBQWlCLG9CQUFvQixDQUFDO0lBQUUsUUFBQTtJQUFGLE9BQUQsQ0FBckMsRUFBcUQsS0FBckQsQ0FBckI7SUFDSDtJQUVELFdBQU87SUFDSCxNQUFBLDJCQURHO0lBRUgsTUFBQSw2QkFGRztJQUdILE1BQUE7SUFIRyxLQUFQO0lBS0gsR0E3RHlDLEVBNkR2QyxDQUFDLGVBQUQsQ0E3RHVDLENBQTFDO0lBK0RBLFNBQU87SUFDSCxJQUFBLHNCQURHO0lBRUgsSUFBQSxVQUZHO0lBR0gsSUFBQSxlQUhHO0lBSUgsSUFBQSxnQkFKRztJQUtILElBQUEsWUFBWSxFQUFFVyxDQUFXLENBQUMsTUFBSztJQUFBOztJQUMzQixVQUFJLGVBQWUsc0JBQUMsZ0JBQWdCLEVBQWpCLGlFQUF1QixDQUF2QixDQUFmLENBQXlDLFdBQXpDLEVBQUosRUFBNEQ7SUFBQTs7SUFDeEQsNEJBQUEsZUFBZSx1QkFBQyxnQkFBZ0IsRUFBakIsbUVBQXVCLENBQXZCLENBQWYsc0VBQTBDLGdCQUExQztJQUNILE9BRkQsTUFHSztJQUFBOztJQUNEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxZQUFJLENBQUMseUJBQUcsZ0JBQWdCLEVBQW5CLG1FQUF5QixDQUE5QjtJQUNBLFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFaOztJQUNBLGVBQU8sQ0FBQyxJQUFJLENBQVosRUFBZTtJQUFBOztJQUNYLFlBQUUsQ0FBRjs7SUFDQSxjQUFJLGVBQWUsdUJBQUMsZ0JBQWdCLEVBQWpCLG1FQUF1QixDQUF2QixDQUFmLENBQXlDLFdBQXpDLEVBQUosRUFBNEQ7SUFBQTs7SUFDeEQsaUNBQUEsZUFBZSx1QkFBQyxnQkFBZ0IsRUFBakIsbUVBQXVCLENBQXZCLENBQWYsd0VBQTBDLGdCQUExQztJQUNBO0lBQ0g7SUFDSjs7SUFDRCxlQUFPLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBM0IsRUFBbUM7SUFBQTs7SUFDL0IsWUFBRSxDQUFGOztJQUNBLGNBQUksZUFBZSx1QkFBQyxnQkFBZ0IsRUFBakIsbUVBQXVCLENBQXZCLENBQWYsQ0FBeUMsV0FBekMsRUFBSixFQUE0RDtJQUFBOztJQUN4RCxpQ0FBQSxlQUFlLHVCQUFDLGdCQUFnQixFQUFqQixtRUFBdUIsQ0FBdkIsQ0FBZix3RUFBMEMsZ0JBQTFDO0lBQ0E7SUFDSDtJQUNKO0lBQ0o7SUFDSixLQTNCd0IsRUEyQnRCLEVBM0JzQixDQUx0QjtJQWtDSCxPQUFHO0lBbENBLEdBQVA7SUFvQ0g7O0lDeExLLFNBQVUsWUFBVixPQUE0STtJQUFBLE1BQTlGO0lBQUUsSUFBQSxhQUFGO0lBQWlCLElBQUEsSUFBakI7SUFBdUIsSUFBQSxTQUF2QjtJQUFrQyxJQUFBLGdCQUFsQztJQUFvRCxJQUFBO0lBQXBELEdBQThGO0lBRTlJLFFBQU0sQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixXQUF4QixJQUF1QyxRQUFRLENBQUMsS0FBRCxDQUFyRDtJQUNBLFFBQU0sQ0FBQyxjQUFELEVBQWlCLGlCQUFqQixFQUFvQyxpQkFBcEMsSUFBeUQsUUFBUSxDQUFvQyxJQUFwQyxDQUF2RTtJQUVBLFFBQU0saUJBQWlCLEdBQUdBLENBQVcsQ0FBcUMsQ0FBcEMsSUFBNEM7SUFFOUUsVUFBTSxHQUFHLEdBQUdMLENBQU0sQ0FBSSxJQUFKLENBQWxCOztJQUVBLFVBQU0sV0FBVyxHQUFJLENBQUQsSUFBaUI7SUFDakM7SUFDQSxNQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7O0lBQ0EsVUFBSSxDQUFDLENBQUMsWUFBTixFQUFvQjtJQUNoQixRQUFBLENBQUMsQ0FBQyxZQUFGLENBQWUsYUFBZixHQUFnQyxhQUFoQyxhQUFnQyxhQUFoQyxjQUFnQyxhQUFoQyxHQUFpRCxLQUFqRDtJQUNBLFlBQUksU0FBSixFQUNJLENBQUMsQ0FBQyxZQUFGLENBQWUsWUFBZixDQUE0QixTQUE1QixFQUF1QyxnQkFBdkMsYUFBdUMsZ0JBQXZDLGNBQXVDLGdCQUF2QyxHQUEyRCxDQUEzRCxFQUE4RCxnQkFBOUQsYUFBOEQsZ0JBQTlELGNBQThELGdCQUE5RCxHQUFrRixDQUFsRjtJQUVKLFlBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixDQUFkOztJQUNBLGFBQUssTUFBTSxDQUFDLFFBQUQsRUFBVyxJQUFYLENBQVgsSUFBK0IsT0FBL0IsRUFBd0M7SUFDcEMsVUFBQSxDQUFDLENBQUMsWUFBRixDQUFlLE9BQWYsQ0FBdUIsUUFBdkIsRUFBaUMsSUFBakM7SUFDSDtJQUNKO0lBQ0osS0FiRDs7SUFlQSxVQUFNLFNBQVMsR0FBSSxDQUFELElBQWlCO0lBQy9CLE1BQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxNQUFBLFdBQVcsQ0FBQyxLQUFELENBQVg7O0lBQ0EsVUFBSSxDQUFDLENBQUMsWUFBTixFQUFvQjtJQUNoQixZQUFJLENBQUMsQ0FBQyxZQUFGLENBQWUsVUFBZixJQUE2QixNQUFqQyxFQUF5QztJQUNyQyxVQUFBLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxZQUFGLENBQWUsVUFBaEIsQ0FBakI7SUFDSCxTQUZELE1BR0s7SUFDRCxVQUFBLGlCQUFpQixDQUFDLElBQUQsQ0FBakI7SUFDSDtJQUNKO0lBQ0osS0FYRDs7SUFjQSxXQUFPLGNBQWMsR0FBTTtJQUN2QixNQUFBLFNBQVMsRUFBRSxJQURZO0lBRXZCLE1BQUEsV0FGdUI7SUFHdkIsTUFBQSxTQUh1QjtJQUl2QixNQUFBO0lBSnVCLEtBQU4sRUFLbEIsQ0FMa0IsQ0FBckI7SUFPSCxHQXhDb0MsRUF3Q2xDLENBQUMsYUFBRCxFQUFnQixTQUFoQixFQUEyQixnQkFBM0IsRUFBNkMsZ0JBQTdDLEVBQStELEdBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLEVBQWxFLENBeENrQyxDQUFyQyxDQUw4STtJQWdEOUk7O0lBQ0EsTUFBSSxHQUFHLEdBQThCO0lBQ2pDLElBQUEsaUJBRGlDO0lBRWpDLElBQUEsUUFGaUM7SUFHakMsSUFBQSxXQUhpQztJQUtqQztJQUNBO0lBQ0EsSUFBQSxjQVBpQzs7SUFTakM7O0lBRUc7SUFDSCxJQUFBO0lBWmlDLEdBQXJDO0lBZUEsU0FBTyxHQUFQO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDNURLLE1BQU8sa0JBQVAsU0FBa0MsS0FBbEMsQ0FBdUM7SUFJekMsRUFBQSxXQUFBLENBQVksUUFBWixFQUE4QixJQUE5QixFQUF1RDtJQUFBOztJQUNuRCwyQkFBTSxJQUFOLGFBQU0sSUFBTix1QkFBTSxJQUFJLENBQUUsT0FBWix5REFBdUIsaURBQXZCOztJQURtRDs7SUFBQTs7SUFFbkQsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0lBQ0EsU0FBSyxTQUFMLEdBQWtCLElBQWxCLGFBQWtCLElBQWxCLHVCQUFrQixJQUFJLENBQUUsSUFBeEI7SUFDSDs7SUFSd0M7O0lBbUJ2QyxTQUFVLFlBQVYsT0FBZ0Y7SUFBQSxNQUFsQztJQUFFLElBQUE7SUFBRixHQUFrQztJQUVsRixRQUFNLENBQUMscUJBQUQsRUFBd0Isd0JBQXhCLElBQW9ELFFBQVEsQ0FBNEIsSUFBNUIsQ0FBbEU7SUFDQSxRQUFNLENBQUMsdUJBQUQsRUFBMEIsMEJBQTFCLElBQXdELFFBQVEsQ0FBcUIsSUFBckIsQ0FBdEU7SUFFQSxRQUFNLENBQUMsWUFBRCxFQUFlLGVBQWYsSUFBa0MsUUFBUSxDQUFvQixJQUFwQixDQUFoRDtJQUNBLFFBQU0sQ0FBQyxjQUFELEVBQWlCLGlCQUFqQixJQUFzQyxRQUFRLENBQXdDLElBQXhDLENBQXBEO0lBRUEsUUFBTSxDQUFDLFNBQUQsRUFBWSxZQUFaLElBQTRCLFFBQVEsQ0FBc0IsU0FBdEIsQ0FBMUMsQ0FSa0Y7SUFXbEY7O0lBQ0EsUUFBTSxlQUFlLEdBQUdBLENBQU0sQ0FBbUYsRUFBbkYsQ0FBOUI7SUFDQSxRQUFNLENBQUMsbUJBQUQsRUFBc0Isc0JBQXRCLEVBQThDLHNCQUE5QyxJQUF3RSxRQUFRLENBQUMsQ0FBQyxDQUFGLENBQXRGO0lBQ0EsUUFBTSxDQUFDLFlBQUQsRUFBZSxlQUFmLEVBQWdDLGVBQWhDLElBQW1ELFFBQVEsQ0FBQyxDQUFELENBQWpFLENBZGtGO0lBaUJsRjs7SUFDQSxFQUFBTixDQUFTLENBQUMsTUFBSztJQUNYLFVBQU0sbUJBQW1CLEdBQUcsc0JBQXNCLEVBQWxEO0lBQ0EsVUFBTSxZQUFZLEdBQUcsZUFBZSxFQUFwQzs7SUFFQSxRQUFJLFlBQVksR0FBRyxDQUFuQixFQUFzQjtJQUNsQixVQUFLLG1CQUFtQixHQUFHLENBQXZCLEdBQTRCLFlBQWhDLEVBQThDO0lBQzFDLFFBQUEsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBUixDQUF0QjtJQUNIO0lBQ0o7SUFFSixHQVZRLEVBVU4sQ0FBQyxZQUFELENBVk0sQ0FBVCxDQWxCa0Y7SUErQmxGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUNBLEVBQUFBLENBQVMsQ0FBQyxNQUFLO0lBQ1gsUUFBSSxtQkFBbUIsSUFBSSxDQUEzQixFQUE4QjtJQUMxQixZQUFNLGNBQWMsR0FBRyxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsbUJBQXhCLENBQXZCO0lBQ0EsTUFBQSxjQUFjLENBQUMsSUFBZixDQUFxQixJQUFELElBQVM7SUFFekIsWUFBSSxJQUFJLEtBQUssSUFBYixFQUFtQjtJQUNmLGdCQUFNO0lBQUUsWUFBQSxLQUFGO0lBQVMsWUFBQTtJQUFULGNBQXFCLElBQTNCO0lBQ0EsVUFBQSxlQUFlLENBQUMsS0FBRCxDQUFmO0lBQ0EsVUFBQSxpQkFBaUIsQ0FBQyxPQUFELENBQWpCO0lBQ0gsU0FOd0I7OztJQVV6QixjQUFNLG1CQUFtQixHQUFHLHNCQUFzQixFQUFsRDtJQUNBLGNBQU0sWUFBWSxHQUFHLGVBQWUsRUFBcEM7O0lBRUEsWUFBSyxtQkFBbUIsR0FBRyxDQUF2QixHQUE0QixZQUFoQyxFQUE4QztJQUMxQztJQUNBO0lBQ0EsVUFBQSxzQkFBc0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQXRCO0lBQ0g7SUFDSixPQWxCRDtJQW1CSDtJQUNKLEdBdkJRLEVBdUJOLENBQUMsbUJBQUQsQ0F2Qk0sQ0FBVDs7SUEwQkEsUUFBTSxpQkFBaUIsR0FBb0UsQ0FBM0MsSUFBc0Y7SUFFbEk7SUFFQTtJQUNBLFVBQU0sV0FBVyxHQUFJLENBQUQsSUFBaUI7SUFDakMsTUFBQSxDQUFDLENBQUMsY0FBRjs7SUFDQSxVQUFJLENBQUMsQ0FBQyxZQUFOLEVBQW9CO0lBRWhCO0lBQ0EsUUFBQSxDQUFDLENBQUMsWUFBRixDQUFlLFVBQWYsR0FBNkIsTUFBN0IsYUFBNkIsTUFBN0IsY0FBNkIsTUFBN0IsR0FBdUMsTUFBdkM7SUFFQSxjQUFNLFlBQVksR0FBRyxJQUFJLEdBQUosRUFBckI7SUFDQSxjQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUosRUFBakI7O0lBRUEsYUFBSyxJQUFJLElBQVQsZ0RBQWlCLENBQUMsQ0FBQyxZQUFuQixvREFBaUIsZ0JBQWdCLEtBQWpDLHlFQUEwQyxFQUExQyxFQUE4QztJQUFBOztJQUMxQyxnQkFBTTtJQUFFLFlBQUEsSUFBRjtJQUFRLFlBQUE7SUFBUixjQUFpQixJQUF2Qjs7SUFFQSxjQUFJLElBQUksS0FBSyxRQUFiLEVBQXVCO0lBQ25CLFlBQUEsWUFBWSxDQUFDLEdBQWIsQ0FBaUIsSUFBakI7SUFDSCxXQUZELE1BR0ssSUFBSSxJQUFJLEtBQUssTUFBYixFQUFxQjtJQUN0QixZQUFBLFFBQVEsQ0FBQyxJQUFULENBQWM7SUFBRSxjQUFBLElBQUksRUFBRSxJQUFJLENBQUM7SUFBYixhQUFkO0lBRUg7SUFDSjs7SUFFRCxRQUFBLHdCQUF3QixDQUFDLFFBQUQsQ0FBeEI7SUFDQSxRQUFBLDBCQUEwQixDQUFDLFlBQUQsQ0FBMUI7SUFDSDtJQUNKLEtBekJELENBTGtJOzs7SUFpQ2xJLFVBQU0sV0FBVyxHQUFJLENBQUQsSUFBaUI7SUFDakMsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLE1BQUEsd0JBQXdCLENBQUMsSUFBRCxDQUF4QjtJQUNBLE1BQUEsMEJBQTBCLENBQUMsSUFBRCxDQUExQjtJQUNILEtBSkQsQ0FqQ2tJOzs7SUF3Q2xJLFVBQU0sVUFBVSxHQUFJLENBQUQsSUFBaUI7SUFDaEMsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNILEtBRkQsQ0F4Q2tJOzs7SUE2Q2xJLFVBQU0sTUFBTSxHQUFJLENBQUQsSUFBaUI7SUFDNUIsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUVBLE1BQUEsd0JBQXdCLENBQUMsSUFBRCxDQUF4QjtJQUNBLE1BQUEsMEJBQTBCLENBQUMsSUFBRCxDQUExQjtJQUVBLFVBQUksV0FBVyxHQUFHLElBQUksS0FBSixFQUFsQjtJQUVBLFlBQU0sUUFBUSxHQUFtQyxFQUFqRDtJQUNBLFlBQU0sUUFBUSxHQUFlLEVBQTdCOztJQUVBLFdBQUssSUFBSSxJQUFULGtEQUFpQixDQUFDLENBQUMsWUFBbkIscURBQWlCLGlCQUFnQixLQUFqQywyRUFBMEMsRUFBMUMsRUFBOEM7SUFBQTs7SUFDMUMsY0FBTTtJQUFFLFVBQUEsSUFBRjtJQUFRLFVBQUE7SUFBUixZQUFpQixJQUF2Qjs7SUFFQSxZQUFJLElBQUksS0FBSyxRQUFiLEVBQXVCO0lBQ25CLFVBQUEsV0FBVyxDQUFDLElBQVosQ0FBa0IsSUFBSSxPQUFKLENBQW9CLENBQUMsT0FBRCxFQUFVLE1BQVYsS0FBcUIsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsT0FBakIsQ0FBekMsQ0FBRCxDQUFzRSxJQUF0RSxDQUEyRSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUQsQ0FBUixHQUFpQixHQUFuRyxDQUFqQjtJQUNILFNBRkQsTUFHSyxJQUFJLElBQUksS0FBSyxNQUFiLEVBQXFCO0lBQ3RCLGdCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBTCxFQUFiOztJQUNBLGNBQUksSUFBSixFQUFVO0lBQ04sWUFBQSxXQUFXLENBQUMsSUFBWixDQUNJLElBQUksT0FBSixDQUFrQixDQUFDLE9BQUQsRUFBVSxNQUFWLEtBQW9CO0lBRWxDLGtCQUFJLE1BQU0sR0FBRyxJQUFJLFVBQUosRUFBYjs7SUFFQSxjQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWlCLENBQUQsSUFBTTtJQUNsQixnQkFBQSxPQUFPO0lBQ1Asc0JBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFwQjtJQUNBLGdCQUFBLFFBQVEsQ0FBQyxJQUFULENBQWM7SUFBRSxrQkFBQSxJQUFGO0lBQVEsa0JBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFuQjtJQUF5QixrQkFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQXBDO0lBQTBDLGtCQUFBLElBQUksRUFBRSxJQUFJLENBQUMsVUFBckQ7SUFBaUUsa0JBQUEsWUFBWSxFQUFFLElBQUksQ0FBQztJQUFwRixpQkFBZDtJQUNILGVBSkQ7O0lBS0EsY0FBQSxNQUFNLENBQUMsT0FBUCxHQUFrQixDQUFELElBQU07SUFBRyxnQkFBQSxNQUFNLENBQUMsSUFBSSxrQkFBSixDQUF1QixJQUFJLENBQUMsSUFBNUIsRUFBa0MsTUFBTSxDQUFDLEtBQXpDLENBQUQsQ0FBTjtJQUEwRCxlQUFwRjs7SUFDQSxjQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWtCLENBQUQsSUFBTTtJQUFHLGdCQUFBLE1BQU0sQ0FBQyxJQUFJLGtCQUFKLENBQXVCLElBQUksQ0FBQyxJQUE1QixFQUFrQyxNQUFNLENBQUMsS0FBekMsQ0FBRCxDQUFOO0lBQTBELGVBQXBGOztJQUVBLGNBQUEsTUFBTSxDQUFDLGlCQUFQLENBQXlCLElBQXpCO0lBQ0gsYUFiRCxDQURKO0lBZ0JBLFlBQUEsUUFBUSxDQUFDLElBQVQ7SUFDSDtJQUNKO0lBQ0o7O0lBR0QsTUFBQSxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsSUFBeEIsQ0FBNkIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLElBQXpCLENBQThCLE1BQUs7SUFDNUQsUUFBQSxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBUixDQUFmO0lBQ0EsUUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0lBQ0EsZUFBTztJQUNILFVBQUEsT0FBTyxFQUFFLFFBRE47SUFFSCxVQUFBLEtBQUssRUFBRTtJQUZKLFNBQVA7SUFJSCxPQVA0QixFQU8xQixLQVAwQixDQU9wQixFQUFFLElBQUc7SUFDVixpQkFEVTs7SUFFVixRQUFBLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQWY7SUFDQSxRQUFBLFlBQVksQ0FBQyxFQUFELENBQVo7SUFDQSxlQUFPLElBQVA7SUFDSCxPQVo0QixDQUE3QjtJQWFILEtBdkREOztJQTBEQSxXQUFPLGNBQWMsR0FBTTtJQUFFLE1BQUEsV0FBRjtJQUFlLE1BQUEsV0FBZjtJQUE0QixNQUFBLFVBQTVCO0lBQXdDLE1BQUE7SUFBeEMsS0FBTixFQUF3RCxDQUF4RCxDQUFyQjtJQUNILEdBeEdEOztJQTBHQSxTQUFPO0lBQ0gsSUFBQSxpQkFERztJQUVILElBQUEscUJBRkc7SUFHSCxJQUFBLHVCQUhHO0lBSUgsSUFBQSxZQUpHO0lBS0gsSUFBQSxjQUxHO0lBT0gsSUFBQTtJQVBHLEdBQVA7SUFTSDs7SUNqTkQ7Ozs7Ozs7Ozs7Ozs7OztJQWVHOztJQUNHLFNBQVUsZ0JBQVYsQ0FBZ0osTUFBaEosRUFBMkosSUFBM0osRUFBNEssT0FBNUssRUFBOE0sT0FBOU0sRUFBK1A7SUFFalE7SUFDQTtJQUNBO0lBQ0E7SUFFQSxNQUFJLGFBQWEsR0FBeUIsaUJBQWlCLENBQUMsT0FBRCxhQUFDLE9BQUQsY0FBQyxPQUFELEdBQWEsTUFBSyxFQUFsQixDQUEzRDtJQUNBLE1BQUksT0FBTyxJQUFJLElBQWYsRUFDSSxhQUFhLEdBQUcsSUFBaEI7SUFFSixFQUFBQSxDQUFTLENBQUMsTUFBSztJQUNYLFFBQUksYUFBSixFQUFtQjtJQUNmLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLElBQXhCLEVBQThCLGFBQTlCLEVBQTZDLE9BQTdDO0lBRUEsYUFBTyxNQUFNLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixJQUEzQixFQUFpQyxhQUFqQyxFQUFnRCxPQUFoRCxDQUFiO0lBQ0g7SUFDSixHQU5RLEVBTU4sQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLGFBQWYsQ0FOTSxDQUFUO0lBT0g7O0lDaENELE1BQU0scUJBQXFCLEdBQUcsSUFBSSxHQUFKLEVBQTlCO0lBQ0EsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLEdBQUosRUFBbEM7SUFDQSxNQUFNLHFCQUFxQixHQUFHLElBQUksR0FBSixFQUE5QjtJQUNBLElBQUksY0FBYyxHQUFHLElBQUksR0FBSixFQUFyQjs7SUFFQSxTQUFTLGNBQVQsQ0FBMkIsTUFBM0IsRUFBOEQsR0FBOUQsRUFBc0ksS0FBdEksRUFBOEk7SUFDMUksT0FBSyxJQUFJLENBQUMsV0FBRCxFQUFjLFFBQWQsQ0FBVCxJQUFvQyxHQUFwQyxFQUF5QztJQUNyQyxRQUFJLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0lBQ3hCLFdBQUssSUFBSSxPQUFULElBQW9CLFFBQXBCLEVBQThCO0lBQzFCLFFBQUEsT0FBTyxTQUFQLElBQUEsT0FBTyxXQUFQLFlBQUEsT0FBTyxDQUFHLEtBQUgsQ0FBUDtJQUNIO0lBQ0o7SUFDSjtJQUNKOztJQUVELFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUErQjtJQUMzQixRQUFNLE1BQU0sR0FBSSxDQUFDLENBQUMsTUFBRixDQUFxQixhQUFyQixDQUFtQyxXQUFuRDs7SUFFQSxNQUFJLENBQUMsQ0FBQyxhQUFGLElBQW1CLElBQXZCLEVBQTZCO0lBQ3pCLElBQUEsY0FBYyxDQUFDLE1BQUQsRUFBUyxxQkFBVCxFQUFnQyxJQUFoQyxDQUFkO0lBQ0g7SUFLSjs7SUFFRCxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBOEI7SUFDMUIsUUFBTSxNQUFNLEdBQUksQ0FBQyxDQUFDLE1BQUYsQ0FBcUIsYUFBckIsQ0FBbUMsV0FBbkQ7SUFDQSxNQUFJLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxNQUFoQztJQUNBLEVBQUEsY0FBYyxDQUFDLE1BQUQsRUFBUyxxQkFBVCxFQUFnQyx1QkFBaEMsQ0FBZDtJQUNBLEVBQUEsY0FBYyxDQUFDLE1BQUQsRUFBUyx5QkFBVCxFQUFvQyx1QkFBcEMsQ0FBZDtJQUNIOztJQUVELFNBQVMsV0FBVCxDQUFxQixDQUFyQixFQUFrQztJQUM5QixRQUFNLE1BQU0sR0FBSSxDQUFDLENBQUMsTUFBRixZQUFvQixNQUFwQixHQUE2QixDQUFDLENBQUMsTUFBL0IsR0FBd0MsQ0FBQyxDQUFDLGFBQUYsWUFBMkIsTUFBM0IsR0FBb0MsQ0FBQyxDQUFDLGFBQXRDLEdBQXVELENBQUMsQ0FBQyxNQUFGLENBQXFCLGFBQXJCLENBQW1DLFdBQWxKO0lBQ0EsRUFBQSxjQUFjLENBQUMsR0FBZixDQUFtQixNQUFuQixFQUEyQixJQUEzQjtJQUNBLEVBQUEsY0FBYyxDQUFDLE1BQUQsRUFBUyxxQkFBVCxFQUFnQyxJQUFoQyxDQUFkO0lBQ0g7O0lBRUQsU0FBUyxVQUFULENBQW9CLENBQXBCLEVBQWlDO0lBQzdCLFFBQU0sTUFBTSxHQUFJLENBQUMsQ0FBQyxNQUFGLFlBQW9CLE1BQXBCLEdBQTZCLENBQUMsQ0FBQyxNQUEvQixHQUF3QyxDQUFDLENBQUMsYUFBRixZQUEyQixNQUEzQixHQUFvQyxDQUFDLENBQUMsYUFBdEMsR0FBdUQsQ0FBQyxDQUFDLE1BQUYsQ0FBcUIsYUFBckIsQ0FBbUMsV0FBbEo7SUFDQSxFQUFBLGNBQWMsQ0FBQyxHQUFmLENBQW1CLE1BQW5CLEVBQTJCLEtBQTNCO0lBQ0EsRUFBQSxjQUFjLENBQUMsTUFBRCxFQUFTLHFCQUFULEVBQWdDLEtBQWhDLENBQWQ7SUFDSDtJQWtDRDs7Ozs7Ozs7Ozs7O0lBWUc7OztJQUNHLFNBQVUsZ0JBQVYsT0FBcUo7SUFBQSxNQUExRztJQUFFLElBQUEscUJBQUY7SUFBeUIsSUFBQSx5QkFBekI7SUFBb0QsSUFBQTtJQUFwRCxHQUEwRztJQUV2SixFQUFBLGtCQUFrQixDQUFDLHFCQUFELEVBQXdCLHlCQUF4QixFQUFtRCxxQkFBbkQsQ0FBbEI7SUFFQSxRQUFNO0lBQUUsSUFBQSxVQUFGO0lBQWMsSUFBQTtJQUFkLE1BQXFDLGFBQWEsQ0FBSTtJQUN4RCxJQUFBLGVBQWUsRUFBRVcsQ0FBVyxDQUFFLE9BQUQsSUFBc0I7SUFFL0MsVUFBSSxPQUFKLEVBQWE7SUFBQTs7SUFDVCxjQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBekI7SUFDQSxjQUFNLE1BQU0sR0FBRyxRQUFILGFBQUcsUUFBSCx1QkFBRyxRQUFRLENBQUUsV0FBekI7O0lBRUEsWUFBSSxvREFBQyxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixDQUFELDJEQUFDLHVCQUFtQyxJQUFwQyx5RUFBNEMsQ0FBNUMsTUFBbUQsQ0FBdkQsRUFBMEQ7SUFDdEQsVUFBQSxRQUFRLFNBQVIsSUFBQSxRQUFRLFdBQVIsWUFBQSxRQUFRLENBQUUsZ0JBQVYsQ0FBMkIsU0FBM0IsRUFBc0MsT0FBdEMsRUFBK0M7SUFBRSxZQUFBLE9BQU8sRUFBRTtJQUFYLFdBQS9DO0lBQ0EsVUFBQSxRQUFRLFNBQVIsSUFBQSxRQUFRLFdBQVIsWUFBQSxRQUFRLENBQUUsZ0JBQVYsQ0FBMkIsVUFBM0IsRUFBdUMsUUFBdkMsRUFBaUQ7SUFBRSxZQUFBLE9BQU8sRUFBRTtJQUFYLFdBQWpEO0lBQ0EsVUFBQSxNQUFNLFNBQU4sSUFBQSxNQUFNLFdBQU4sWUFBQSxNQUFNLENBQUUsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsV0FBbEMsRUFBK0M7SUFBRSxZQUFBLE9BQU8sRUFBRTtJQUFYLFdBQS9DO0lBQ0EsVUFBQSxNQUFNLFNBQU4sSUFBQSxNQUFNLFdBQU4sWUFBQSxNQUFNLENBQUUsZ0JBQVIsQ0FBeUIsTUFBekIsRUFBaUMsVUFBakMsRUFBNkM7SUFBRSxZQUFBLE9BQU8sRUFBRTtJQUFYLFdBQTdDO0lBQ0gsU0FUUTtJQVlUOzs7SUFDQSxjQUFNLDBCQUEwQiw2QkFBRyxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixDQUFILDJFQUF3QyxJQUFJLEdBQUosRUFBeEU7SUFDQSxjQUFNLDhCQUE4Qiw0QkFBRyx5QkFBeUIsQ0FBQyxHQUExQixDQUE4QixNQUE5QixDQUFILHlFQUE0QyxJQUFJLEdBQUosRUFBaEY7SUFDQSxjQUFNLDBCQUEwQiw0QkFBRyxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixDQUFILHlFQUF3QyxJQUFJLEdBQUosRUFBeEU7SUFFQSxRQUFBLDBCQUEwQixDQUFDLEdBQTNCLENBQStCLGdCQUEvQjtJQUNBLFFBQUEsOEJBQThCLENBQUMsR0FBL0IsQ0FBbUMsb0JBQW5DO0lBQ0EsUUFBQSwwQkFBMEIsQ0FBQyxHQUEzQixDQUErQixnQkFBL0I7SUFFQSxRQUFBLHFCQUFxQixDQUFDLEdBQXRCLENBQTBCLE1BQTFCLEVBQWtDLDBCQUFsQztJQUNBLFFBQUEseUJBQXlCLENBQUMsR0FBMUIsQ0FBOEIsTUFBOUIsRUFBc0MsOEJBQXRDO0lBQ0EsUUFBQSxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixFQUFrQywwQkFBbEM7SUFFQSxlQUFPLE1BQUs7SUFDUixVQUFBLHFCQUFxQixDQUFDLEdBQXRCLENBQTBCLE1BQTFCLEVBQW1DLE1BQW5DLENBQTBDLGdCQUExQztJQUNBLFVBQUEseUJBQXlCLENBQUMsR0FBMUIsQ0FBOEIsTUFBOUIsRUFBdUMsTUFBdkMsQ0FBOEMsb0JBQTlDO0lBQ0EsVUFBQSxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixFQUFtQyxNQUFuQyxDQUEwQyxnQkFBMUM7O0lBRUEsY0FBSSxxQkFBcUIsQ0FBQyxJQUF0QixLQUErQixDQUFuQyxFQUFzQztJQUNsQyxZQUFBLFFBQVEsU0FBUixJQUFBLFFBQVEsV0FBUixZQUFBLFFBQVEsQ0FBRSxtQkFBVixDQUE4QixTQUE5QixFQUF5QyxPQUF6QztJQUNBLFlBQUEsUUFBUSxTQUFSLElBQUEsUUFBUSxXQUFSLFlBQUEsUUFBUSxDQUFFLG1CQUFWLENBQThCLFVBQTlCLEVBQTBDLFFBQTFDO0lBQ0EsWUFBQSxNQUFNLFNBQU4sSUFBQSxNQUFNLFdBQU4sWUFBQSxNQUFNLENBQUUsbUJBQVIsQ0FBNEIsT0FBNUIsRUFBcUMsV0FBckM7SUFDQSxZQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxtQkFBUixDQUE0QixNQUE1QixFQUFvQyxVQUFwQztJQUNIO0lBQ0osU0FYRDtJQVlIO0lBQ0osS0F4QzJCLEVBd0N6QixFQXhDeUI7SUFENEIsR0FBSixDQUF4RDtJQTRDQSxRQUFNLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLElBQXVDLGVBQWUsQ0FBVyxxQkFBWCxFQUFrQyxTQUFsQyxDQUE1RDtJQUNBLFFBQU0sQ0FBQyxvQkFBRCxFQUF1QixvQkFBdkIsSUFBK0MsZUFBZSxDQUFJLHlCQUFKLEVBQStCLFNBQS9CLENBQXBFO0lBQ0EsUUFBTSxDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixJQUF1QyxlQUFlLENBQVUscUJBQVYsRUFBaUMsVUFBakMsQ0FBNUQ7SUFFQSxTQUFPO0lBQUUsSUFBQSxVQUFGO0lBQWMsSUFBQSxxQkFBcUIsRUFBRSxrQkFBckM7SUFBeUQsSUFBQSxnQkFBekQ7SUFBMkUsSUFBQSxvQkFBM0U7SUFBaUcsSUFBQTtJQUFqRyxHQUFQO0lBQ0g7O0lBRUQsU0FBUyxVQUFULEdBQW1CO0lBQUssU0FBTyxJQUFQO0lBQWM7O0lDekl0QyxTQUFTLFdBQVQsR0FBb0I7SUFBSyxTQUFPLEtBQVA7SUFBZTs7SUFHbEMsU0FBVSxXQUFWLE9BQWtPO0lBQUEsTUFBNUw7SUFBRSxJQUFBLGdCQUFGO0lBQW9CLElBQUEscUJBQXBCO0lBQTJDLElBQUEsb0JBQTNDO0lBQWlFLElBQUEseUJBQWpFO0lBQTRGLElBQUEseUJBQTVGO0lBQXVILElBQUEscUJBQXZIO0lBQThJLElBQUE7SUFBOUksR0FBNEw7SUFFcE8sRUFBQSxrQkFBa0IsQ0FBQyxnQkFBRCxFQUFtQixxQkFBbkIsRUFBMEMsb0JBQTFDLEVBQWdFLHlCQUFoRSxFQUEyRix5QkFBM0YsRUFBc0gscUJBQXRILEVBQTZJLHFCQUE3SSxDQUFsQjtJQUVBLFFBQU0sQ0FBQyxVQUFELEVBQWEsVUFBYixJQUEyQixlQUFlLENBQVUsZ0JBQVYsRUFBNEIsV0FBNUIsQ0FBaEQ7SUFDQSxRQUFNLENBQUMsZUFBRCxFQUFrQixlQUFsQixJQUFxQyxlQUFlLENBQVUscUJBQVYsRUFBaUMsV0FBakMsQ0FBMUQ7SUFDQSxRQUFNLENBQUMsY0FBRCxFQUFpQixjQUFqQixJQUFtQyxlQUFlLENBQVUsb0JBQVYsRUFBZ0MsV0FBaEMsQ0FBeEQ7SUFDQSxRQUFNLENBQUMsbUJBQUQsRUFBc0IsbUJBQXRCLElBQTZDLGVBQWUsQ0FBVSx5QkFBVixFQUFxQyxXQUFyQyxDQUFsRTtJQUVBLFFBQU07SUFBRSxJQUFBLGdCQUFGO0lBQW9CLElBQUEsb0JBQXBCO0lBQTBDLElBQUEsZ0JBQTFDO0lBQTRELElBQUEscUJBQTVEO0lBQW1GLElBQUE7SUFBbkYsTUFBa0csZ0JBQWdCLENBQUk7SUFDeEgsSUFBQSxxQkFBcUIsRUFBRUEsQ0FBVyxDQUFzRSxDQUFDLGFBQUQsRUFBZ0IsaUJBQWhCLEtBQXFDO0lBQ3pJLFlBQU0sV0FBVyxHQUFHLFVBQVUsRUFBOUI7SUFDQSxZQUFNLE9BQU8sR0FBSSxXQUFXLElBQUksSUFBZixJQUF3QixXQUFXLElBQUksYUFBeEQ7SUFDQSxZQUFNLFlBQVksR0FBSSxDQUFDLEVBQUMsV0FBRCxhQUFDLFdBQUQsZUFBQyxXQUFXLENBQUUsUUFBYixDQUFzQixhQUF0QixDQUFELENBQXZCO0lBQ0EsTUFBQSxVQUFVLENBQUMsT0FBRCxDQUFWO0lBQ0EsTUFBQSxlQUFlLENBQUMsWUFBRCxDQUFmO0lBQ0EsTUFBQSxxQkFBcUIsU0FBckIsSUFBQSxxQkFBcUIsV0FBckIsWUFBQSxxQkFBcUIsQ0FBRyxhQUFILEVBQWtCLGlCQUFsQixDQUFyQjtJQUNILEtBUGlDLEVBTy9CLEVBUCtCLENBRHNGO0lBU3hILElBQUEseUJBQXlCLEVBQUVBLENBQVcsQ0FBMEUsQ0FBQyxpQkFBRCxFQUFvQixxQkFBcEIsS0FBNkM7SUFDekosWUFBTSxXQUFXLEdBQUcsVUFBVSxFQUE5QjtJQUNBLFlBQU0sT0FBTyxHQUFJLFdBQVcsSUFBSSxJQUFmLElBQXdCLFdBQVcsSUFBSSxpQkFBeEQ7SUFDQSxZQUFNLFlBQVksR0FBSSxDQUFDLEVBQUMsV0FBRCxhQUFDLFdBQUQsZUFBQyxXQUFXLENBQUUsUUFBYixDQUFzQixpQkFBdEIsQ0FBRCxDQUF2QjtJQUNBLE1BQUEsY0FBYyxDQUFDLE9BQUQsQ0FBZDtJQUNBLE1BQUEsbUJBQW1CLENBQUMsWUFBRCxDQUFuQjtJQUNBLE1BQUEseUJBQXlCLFNBQXpCLElBQUEseUJBQXlCLFdBQXpCLFlBQUEseUJBQXlCLENBQUcsaUJBQUgsRUFBc0IscUJBQXRCLENBQXpCO0lBQ0gsS0FQcUMsRUFPbkMsRUFQbUMsQ0FUa0Y7SUFpQnhILElBQUE7SUFqQndILEdBQUosQ0FBeEg7SUFvQkEsUUFBTSxnQkFBZ0IsR0FBR0EsQ0FBVyxDQUEyQyxLQUExQyxJQUFzRDtJQUFHLFdBQU8scUJBQXFCLENBQUMsS0FBRCxDQUE1QjtJQUFzQyxHQUFoRyxFQUFrRyxDQUFDLHFCQUFELENBQWxHLENBQXBDO0lBR0EsU0FBTztJQUFFLElBQUEsZ0JBQUY7SUFBb0IsSUFBQSxVQUFwQjtJQUFnQyxJQUFBLFVBQWhDO0lBQTRDLElBQUEsZUFBNUM7SUFBNkQsSUFBQSxjQUE3RDtJQUE2RSxJQUFBLG1CQUE3RTtJQUFrRyxJQUFBLGdCQUFsRztJQUFvSCxJQUFBLG9CQUFwSDtJQUEwSSxJQUFBO0lBQTFJLEdBQVA7SUFDSDs7SUMxRUssU0FBVSxXQUFWLE9BQXlEO0lBQUEsTUFBbkM7SUFBRSxJQUFBLFFBQUY7SUFBWSxJQUFBO0lBQVosR0FBbUM7SUFDM0Q7SUFDQSxRQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxRQUFELENBQXhDO0lBQ0EsUUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLFFBQUQsQ0FBbkM7SUFFQSxFQUFBWCxDQUFTLENBQUMsTUFBSztJQUNYLFFBQUksUUFBUSxHQUFHLFdBQVcsRUFBMUI7SUFDQSxRQUFJLGFBQWEsR0FBRyxRQUFwQjtJQUVBLFFBQUksUUFBUSxJQUFJLElBQWhCLEVBQ0ksT0FMTztJQVNYOztJQUNBLFVBQU0sa0JBQWtCLEdBQUcsTUFBSztJQUM1QixNQUFBLGNBQWM7SUFDZCxZQUFNLGVBQWUsR0FBRyxXQUFXLEVBQW5DOztJQUNBLFVBQUksZUFBZSxJQUFJLGFBQXZCLEVBQXNDO0lBQ2xDLFFBQUEsYUFBYSxDQUFDLE1BQUQsQ0FBYjtJQUNBLFlBQUksZUFBZSxJQUFJLElBQXZCLEVBQ0ksTUFBTSxHQUFHLFdBQVcsQ0FBQyxrQkFBRCxFQUFxQixhQUFhLEdBQUcsZUFBckMsQ0FBcEI7SUFDUDtJQUNKLEtBUkQ7O0lBU0EsUUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLGtCQUFELEVBQXFCLFFBQXJCLENBQXhCO0lBQ0EsV0FBTyxNQUFNLGFBQWEsQ0FBQyxNQUFELENBQTFCO0lBQ0gsR0FyQlEsRUFxQk4sRUFyQk0sQ0FBVDtJQXNCSDs7SUN5SEQsU0FBUyxRQUFULENBQXFCLENBQXJCLEVBQXlCO0lBQUksU0FBTyxDQUFQO0lBQVc7SUFFeEM7Ozs7O0lBS0c7OztJQUNHLFNBQVUsaUJBQVYsT0FBeU47SUFBQTs7SUFBQSxNQUF6SDtJQUFFLElBQUEsWUFBRjtJQUFnQixJQUFBLG1CQUFoQjtJQUFxQyxJQUFBLFFBQXJDO0lBQStDLElBQUEsYUFBL0M7SUFBOEQsSUFBQSxZQUE5RDtJQUE0RSxJQUFBO0lBQTVFLEdBQXlIO0lBRTNOLG1CQUFBLFlBQVksVUFBWiwrQ0FBQSxZQUFZLEdBQUssUUFBakI7SUFDQSxxQkFBQSxjQUFjLFVBQWQsbURBQUEsY0FBYyxHQUFLLFFBQW5CO0lBQ0Esb0JBQUEsYUFBYSxVQUFiLGlEQUFBLGFBQWEsR0FBSyxRQUFsQixDQUoyTjtJQU8zTjs7SUFDQSxRQUFNLENBQUMsYUFBRCxFQUFnQixnQkFBaEIsRUFBa0MsZ0JBQWxDLElBQXNELFFBQVEsQ0FBZ0IsWUFBWSxLQUFLLFNBQWpCLEdBQTZCLENBQTdCLEdBQWlDLFlBQWpELENBQXBFO0lBQ0EsUUFBTTtJQUFFLElBQUEsZUFBRjtJQUFtQixJQUFBLGdCQUFuQjtJQUFxQyxJQUFBLHNCQUFyQztJQUE2RCxJQUFBLFlBQTdEO0lBQTJFLE9BQUc7SUFBOUUsTUFBdUYsaUJBQWlCLENBQUk7SUFBRSxJQUFBLG1CQUFGO0lBQXVCLElBQUE7SUFBdkIsR0FBSixDQUE5RztJQUVBLFFBQU0sZUFBZSxHQUFHVyxDQUFXLENBQUUsQ0FBRCxJQUFxQjtJQUFHLElBQUEsZ0JBQWdCLENBQUMsQ0FBRCxDQUFoQjtJQUFzQixHQUEvQyxFQUFpRCxFQUFqRCxDQUFuQztJQUNBLFFBQU0sZUFBZSxHQUFHQSxDQUFXLENBQUMsTUFBSztJQUFHLElBQUEsZ0JBQWdCLENBQUMsWUFBYSxDQUFDLENBQUQsQ0FBZCxDQUFoQjtJQUFxQyxHQUE5QyxFQUFnRCxFQUFoRCxDQUFuQztJQUNBLFFBQU0sY0FBYyxHQUFHQSxDQUFXLENBQUMsTUFBSztJQUFHLElBQUEsZ0JBQWdCLENBQUMsWUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFoQixHQUF5QixDQUExQixDQUFkLENBQWhCO0lBQThELEdBQXZFLEVBQXlFLEVBQXpFLENBQWxDO0lBQ0EsUUFBTSxjQUFjLEdBQUdBLENBQVcsQ0FBQyxNQUFLO0lBQUcsSUFBQSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksWUFBYSxDQUFDLGNBQWUsQ0FBQyxDQUFELGFBQUMsQ0FBRCxjQUFDLENBQUQsR0FBTSxDQUFOLENBQWYsR0FBMEIsQ0FBM0IsQ0FBbkIsQ0FBaEI7SUFBbUUsR0FBNUUsRUFBOEUsQ0FBQyxjQUFELEVBQWlCLFlBQWpCLENBQTlFLENBQWxDO0lBQ0EsUUFBTSxjQUFjLEdBQUdBLENBQVcsQ0FBQyxNQUFLO0lBQUcsSUFBQSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksWUFBYSxDQUFDLGNBQWUsQ0FBQyxDQUFELGFBQUMsQ0FBRCxjQUFDLENBQUQsR0FBTSxDQUFOLENBQWYsR0FBMEIsQ0FBM0IsQ0FBbkIsQ0FBaEI7SUFBbUUsR0FBNUUsRUFBOEUsQ0FBQyxjQUFELEVBQWlCLFlBQWpCLENBQTlFLENBQWxDO0lBRUEsUUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBRSxLQUFELElBQXdFO0lBQ2pHLElBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQjtJQUNILEdBRjJCLEVBRXpCLEVBRnlCLENBQTVCO0lBR0EsUUFBTTtJQUFFLElBQUEsZ0JBQUY7SUFBb0IsSUFBQSxnQkFBcEI7SUFBc0MsSUFBQSwyQkFBdEM7SUFBbUUsSUFBQTtJQUFuRSxNQUFtRyxzQkFBc0IsQ0FBUztJQUFFLElBQUEsUUFBRjtJQUFZLElBQUEsUUFBUSxFQUFFLGdCQUF0QjtJQUF3QyxJQUFBLFFBQXhDO0lBQWtELElBQUEsZ0JBQWdCLEVBQUU7SUFBcEUsR0FBVCxDQUEvSDtJQUNBLFFBQU07SUFBRSxJQUFBO0lBQUYsTUFBK0IsbUJBQW1CLENBQU07SUFBRSxJQUFBLG1CQUFtQixFQUFFLGFBQXZCO0lBQXNDLElBQUEsS0FBSyx1QkFBRSxnQkFBZ0IsRUFBbEIsaUVBQXdCLENBQW5FO0lBQXNFLElBQUEsZUFBdEU7SUFBdUYsSUFBQSxjQUF2RjtJQUF1RyxJQUFBLGNBQXZHO0lBQXVILElBQUEsZUFBdkg7SUFBd0ksSUFBQTtJQUF4SSxHQUFOLENBQXhEO0lBRUEsUUFBTSxzQkFBc0IsR0FBR0EsQ0FBVyxDQUFnRCxLQUEvQyxJQUEyRDtJQUNsRyxXQUFPLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLEtBQUQsQ0FBNUIsQ0FBL0I7SUFDSCxHQUZ5QyxFQUV2QyxDQUFDLHdCQUFELEVBQTJCLDJCQUEzQixDQUZ1QyxDQUExQztJQUlBLFFBQU0sc0JBQXNCLEdBQTRDQSxDQUFXLENBQUUsSUFBRCxJQUE4RjtJQUU5SyxJQUFvQiwyQkFBMkIsQ0FBQyxJQUFELEVBRitIOztJQUs5SyxVQUFNO0lBQUUsTUFBQSwyQkFBRjtJQUErQixNQUFBLDZCQUEvQjtJQUE4RCxNQUFBO0lBQTlELFFBQTJFLHNCQUFzQixDQUFlLElBQWYsQ0FBdkc7O0lBRUEsVUFBTSwyQkFBMkIsR0FBOEMsaUJBQXVFO0lBQUEsVUFBZixFQUFFLEdBQUc7SUFBTCxPQUFlO0lBRWxKLGFBQU8sY0FBYyxHQUFpQiwyQkFBMkIsQ0FBRztJQUFFLFFBQUEsT0FBTyxFQUFFO0lBQVgsT0FBSCxDQUE1QyxFQUEyRSxLQUEzRSxDQUFyQjtJQUNILEtBSEQ7O0lBS0EsVUFBTSxVQUFVLEdBQUdBLENBQVcsQ0FBQyxNQUFLO0lBQUcsTUFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBZjtJQUE4QixLQUF2QyxFQUF5QyxFQUF6QyxDQUE5QjtJQUVBLFdBQU87SUFDSCxNQUFBLDJCQURHO0lBRUgsTUFBQSw2QkFBNkIsRUFBRSw2QkFGNUI7SUFHSCxNQUFBO0lBSEcsS0FBUDtJQUtILEdBbkJrRixFQW1CaEYsQ0FBQywyQkFBRCxFQUE4QixzQkFBOUIsRUFBc0QsZUFBdEQsQ0FuQmdGLENBQW5GO0lBcUJBLFNBQU87SUFDSCxJQUFBLHNCQURHO0lBRUgsSUFBQSxzQkFGRztJQUlILElBQUEsZ0JBSkc7SUFLSCxJQUFBLGdCQUxHO0lBT0gsSUFBQSxhQVBHO0lBUUgsSUFBQSxnQkFSRztJQVVILElBQUEsZUFWRztJQVdILElBQUEsZ0JBWEc7SUFhSCxJQUFBLGVBYkc7SUFjSCxJQUFBLGNBZEc7SUFlSCxJQUFBLGNBZkc7SUFnQkgsSUFBQSxlQWhCRztJQWlCSCxJQUFBLGNBakJHO0lBbUJILElBQUEsWUFuQkc7SUFxQkgsT0FBRztJQXJCQSxHQUFQO0lBdUJIOzs7Ozs7SUNyUEQsSUFBTW9ELGtCQUFrQixHQUFHLENBQUEsT0FBQSxFQUFBLFFBQUEsRUFBQSxVQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFBQSxZQUFBLEVBQUEsaUJBQUEsRUFBQSxpQkFBQSxFQUFBLGtEQUFBLEVBQUEsK0JBQUEsRUFBM0IsU0FBMkIsQ0FBM0I7SUFlQSxJQUFNQyxPQUFPLEdBQ1gsT0FBQSxPQUFBLEtBQUEsV0FBQSxHQUNJLFlBQVksRUFEaEIsR0FFSUMsT0FBTyxDQUFQQSxTQUFBQSxDQUFBQSxPQUFBQSxJQUNBQSxPQUFPLENBQVBBLFNBQUFBLENBREFBLGlCQUFBQSxJQUVBQSxPQUFPLENBQVBBLFNBQUFBLENBTE4scUJBQUE7O0lBMERBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUEsSUFBQSxFQUFnQjtJQUM5QixTQUFPQyxJQUFJLENBQUpBLE9BQUFBLEtBQVAsT0FBQTtJQURGLENBQUE7O0lBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBLElBQUEsRUFBZ0I7SUFDcEMsU0FBT0YsT0FBTyxDQUFQQSxJQUFPLENBQVBBLElBQWlCQyxJQUFJLENBQUpBLElBQUFBLEtBQXhCLFFBQUE7SUFERixDQUFBOztJQUlBLElBQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQSxJQUFBLEVBQWdCO0lBQzNDLE1BQU1DLENBQUMsR0FDTEgsSUFBSSxDQUFKQSxPQUFBQSxLQUFBQSxTQUFBQSxJQUNBLEtBQUssQ0FBTCxTQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FDU0EsSUFBSSxDQURiLFFBQUEsRUFBQSxJQUFBLENBRVEsVUFBQSxLQUFBLEVBQUE7SUFBQSxXQUFXSSxLQUFLLENBQUxBLE9BQUFBLEtBQVgsU0FBQTtJQUpWLEdBRUUsQ0FGRjtJQUtBLFNBQUEsQ0FBQTtJQU5GLENBQUE7O0lBNkRBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUEsSUFBQSxFQUFBLFlBQUEsRUFBOEI7SUFDN0MsTUFBSUMsZ0JBQWdCLENBQWhCQSxJQUFnQixDQUFoQkEsQ0FBQUEsVUFBQUEsS0FBSixRQUFBLEVBQW9EO0lBQ2xELFdBQUEsSUFBQTtJQUNEOztJQUVELE1BQU1DLGVBQWUsR0FBR1YsT0FBTyxDQUFQQSxJQUFBQSxDQUFBQSxJQUFBQSxFQUF4QiwrQkFBd0JBLENBQXhCO0lBQ0EsTUFBTVcsZ0JBQWdCLEdBQUdELGVBQWUsR0FBR1AsSUFBSSxDQUFQLGFBQUEsR0FBeEMsSUFBQTs7SUFDQSxNQUFJSCxPQUFPLENBQVBBLElBQUFBLENBQUFBLGdCQUFBQSxFQUFKLHVCQUFJQSxDQUFKLEVBQTZEO0lBQzNELFdBQUEsSUFBQTtJQUNEOztJQUNELE1BQUksQ0FBQSxZQUFBLElBQWlCWSxZQUFZLEtBQWpDLE1BQUEsRUFBOEM7SUFDNUMsV0FBQSxJQUFBLEVBQWE7SUFDWCxVQUFJSCxnQkFBZ0IsQ0FBaEJBLElBQWdCLENBQWhCQSxDQUFBQSxPQUFBQSxLQUFKLE1BQUEsRUFBK0M7SUFDN0MsZUFBQSxJQUFBO0lBQ0Q7O0lBQ0ROLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFYQSxhQUFBQTtJQUNEO0lBTkgsR0FBQSxNQU9PLElBQUlTLFlBQVksS0FBaEIsZUFBQSxFQUFzQztJQUMzQyxRQUFBLHFCQUFBLEdBQTBCVCxJQUFJLENBQTlCLHFCQUEwQkEsRUFBMUI7SUFBQSxRQUFRVSxLQUFSLEdBQUEscUJBQUEsQ0FBQSxLQUFBO0lBQUEsUUFBZUMsTUFBZixHQUFBLHFCQUFBLENBQUEsTUFBQTs7SUFDQSxXQUFPRCxLQUFLLEtBQUxBLENBQUFBLElBQWVDLE1BQU0sS0FBNUIsQ0FBQTtJQUNEOztJQUVELFNBQUEsS0FBQTtJQXRCRixDQUFBO0lBMEJBO0lBQ0E7OztJQUNBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQSxJQUFBLEVBQWdCO0lBQzdDLE1BQ0ViLE9BQU8sQ0FBUEEsSUFBTyxDQUFQQSxJQUNBQyxJQUFJLENBQUpBLE9BQUFBLEtBREFELFFBQUFBLElBRUFDLElBQUksQ0FBSkEsT0FBQUEsS0FGQUQsVUFBQUEsSUFHQUMsSUFBSSxDQUFKQSxPQUFBQSxLQUpGLFFBQUEsRUFLRTtJQUNBLFFBQUlhLFVBQVUsR0FBR2IsSUFBSSxDQUFyQixhQUFBOztJQUNBLFdBQUEsVUFBQSxFQUFtQjtJQUNqQixVQUFJYSxVQUFVLENBQVZBLE9BQUFBLEtBQUFBLFVBQUFBLElBQXFDQSxVQUFVLENBQW5ELFFBQUEsRUFBOEQ7SUFDNUQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLGFBQUssSUFBSTFCLENBQUMsR0FBVixDQUFBLEVBQWdCQSxDQUFDLEdBQUcwQixVQUFVLENBQVZBLFFBQUFBLENBQXBCLE1BQUEsRUFBZ0QxQixDQUFoRCxFQUFBLEVBQXFEO0lBQ25ELGNBQU1pQixLQUFLLEdBQUdTLFVBQVUsQ0FBVkEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBZCxDQUFjQSxDQUFkOztJQUNBLGNBQUlULEtBQUssQ0FBTEEsT0FBQUEsS0FBSixRQUFBLEVBQWdDO0lBQzlCLGdCQUFJQSxLQUFLLENBQUxBLFFBQUFBLENBQUosSUFBSUEsQ0FBSixFQUEwQjtJQUN4QixxQkFBQSxLQUFBO0lBRjRCLGFBQUE7SUFNOUI7OztJQUNBLG1CQUFBLElBQUE7SUFDRDtJQWhCeUQsU0FBQTs7O0lBb0I1RCxlQUFBLElBQUE7SUFDRDs7SUFFRFMsTUFBQUEsVUFBVSxHQUFHQSxVQUFVLENBQXZCQSxhQUFBQTtJQUNEO0lBakMwQyxHQUFBO0lBcUM3Qzs7O0lBQ0EsU0FBQSxLQUFBO0lBdENGLENBQUE7O0lBeUNBLElBQU1DLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUF5QjtJQUMvRCxNQUNFZCxJQUFJLENBQUpBLFFBQUFBLElBQ0FDLGFBQWEsQ0FEYkQsSUFDYSxDQURiQSxJQUVBSyxRQUFRLENBQUEsSUFBQSxFQUFPakcsT0FBTyxDQUZ0QjRGLFlBRVEsQ0FGUkE7SUFJQUUsRUFBQUEsb0JBQW9CLENBSnBCRixJQUlvQixDQUpwQkEsSUFLQVksc0JBQXNCLENBTnhCLElBTXdCLENBTnhCLEVBT0U7SUFDQSxXQUFBLEtBQUE7SUFDRDs7SUFDRCxTQUFBLElBQUE7SUFYRixDQUFBOztJQWlGQSxJQUFNRywwQkFBMEIsa0JBQW1CbkIsa0JBQWtCLENBQWxCQSxNQUFBQSxDQUFBQSxRQUFBQSxFQUFBQSxJQUFBQSxDQUFuRCxHQUFtREEsQ0FBbkQ7O1FBSU1vQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQXlCO0lBQzNDNUcsRUFBQUEsT0FBTyxHQUFHQSxPQUFPLElBQWpCQSxFQUFBQTs7SUFDQSxNQUFJLENBQUosSUFBQSxFQUFXO0lBQ1QsVUFBTSxJQUFBLEtBQUEsQ0FBTixrQkFBTSxDQUFOO0lBQ0Q7O0lBQ0QsTUFBSXlGLE9BQU8sQ0FBUEEsSUFBQUEsQ0FBQUEsSUFBQUEsRUFBQUEsMEJBQUFBLE1BQUosS0FBQSxFQUE4RDtJQUM1RCxXQUFBLEtBQUE7SUFDRDs7SUFDRCxTQUFPaUIsK0JBQStCLENBQUEsT0FBQSxFQUF0QyxJQUFzQyxDQUF0QztJQUNEOzs7Ozs7Ozs7O0lDalRBLGFBQVVHLE1BQVYsRUFBa0IxRSxPQUFsQixFQUEyQjtJQUMxQixJQUErREEsT0FBTyxFQUF0RSxDQUFBO0lBR0QsR0FKQSxFQUlDMkUsY0FKRCxFQUlRLFlBQVk7O0lBRW5CLFFBQUlDLFlBQVksR0FBRyxZQUFZO0lBQUUsZUFBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDeEUsS0FBbEMsRUFBeUM7SUFBRSxhQUFLLElBQUlzQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdEMsS0FBSyxDQUFDOUIsTUFBMUIsRUFBa0NvRSxDQUFDLEVBQW5DLEVBQXVDO0lBQUUsY0FBSW1DLFVBQVUsR0FBR3pFLEtBQUssQ0FBQ3NDLENBQUQsQ0FBdEI7SUFBMkJtQyxVQUFBQSxVQUFVLENBQUNDLFVBQVgsR0FBd0JELFVBQVUsQ0FBQ0MsVUFBWCxJQUF5QixLQUFqRDtJQUF3REQsVUFBQUEsVUFBVSxDQUFDRSxZQUFYLEdBQTBCLElBQTFCO0lBQWdDLGNBQUksV0FBV0YsVUFBZixFQUEyQkEsVUFBVSxDQUFDRyxRQUFYLEdBQXNCLElBQXRCO0lBQTRCQyxVQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JOLE1BQXRCLEVBQThCQyxVQUFVLENBQUNNLEdBQXpDLEVBQThDTixVQUE5QztJQUE0RDtJQUFFOztJQUFDLGFBQU8sVUFBVU8sV0FBVixFQUF1QkMsVUFBdkIsRUFBbUNDLFdBQW5DLEVBQWdEO0lBQUUsWUFBSUQsVUFBSixFQUFnQlYsZ0JBQWdCLENBQUNTLFdBQVcsQ0FBQ0csU0FBYixFQUF3QkYsVUFBeEIsQ0FBaEI7SUFBcUQsWUFBSUMsV0FBSixFQUFpQlgsZ0JBQWdCLENBQUNTLFdBQUQsRUFBY0UsV0FBZCxDQUFoQjtJQUE0QyxlQUFPRixXQUFQO0lBQXFCLE9BQWhOO0lBQW1OLEtBQTloQixFQUFuQjs7SUFFQSxhQUFTSSxlQUFULENBQXlCQyxRQUF6QixFQUFtQ0wsV0FBbkMsRUFBZ0Q7SUFBRSxVQUFJLEVBQUVLLFFBQVEsWUFBWUwsV0FBdEIsQ0FBSixFQUF3QztJQUFFLGNBQU0sSUFBSU0sU0FBSixDQUFjLG1DQUFkLENBQU47SUFBMkQ7SUFBRTs7SUFHM0o7SUFDQTtJQUNBOzs7SUFFRSxLQUFDLFlBQVk7O0lBRVgsVUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDO0lBQ0QsT0FKVTs7Ozs7SUFRWCxVQUFJQyxLQUFLLEdBQUdwRCxLQUFLLENBQUMrQyxTQUFOLENBQWdCSyxLQUE1Qjs7SUFHSjtJQUNBO0lBQ0E7O0lBQ0ksVUFBSXhDLE9BQU8sR0FBR0MsT0FBTyxDQUFDa0MsU0FBUixDQUFrQm5DLE9BQWxCLElBQTZCQyxPQUFPLENBQUNrQyxTQUFSLENBQWtCTSxpQkFBN0Q7OztJQUdBLFVBQUlDLHdCQUF3QixHQUFHLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsdUJBQTFCLEVBQW1ELHdCQUFuRCxFQUE2RSwwQkFBN0UsRUFBeUcsd0JBQXpHLEVBQW1JLFNBQW5JLEVBQThJLFNBQTlJLEVBQXlKLFFBQXpKLEVBQW1LLFFBQW5LLEVBQTZLLE9BQTdLLEVBQXNMLG1CQUF0TCxFQUEyTUMsSUFBM00sQ0FBZ04sR0FBaE4sQ0FBL0I7O0lBR0o7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOzs7SUFFSSxVQUFJQyxTQUFTLEdBQUcsWUFBWTs7SUFFaEM7SUFDQTtJQUNBO0lBQ00saUJBQVNBLFNBQVQsQ0FBbUJDLFdBQW5CLEVBQWdDQyxZQUFoQyxFQUE4QztJQUM1Q1YsVUFBQUEsZUFBZSxDQUFDLElBQUQsRUFBT1EsU0FBUCxDQUFmOzs7O0lBR0EsZUFBS0csYUFBTCxHQUFxQkQsWUFBckI7OztJQUdBLGVBQUtFLFlBQUwsR0FBb0JILFdBQXBCOztJQUdSO0lBQ0E7SUFDQTs7SUFDUSxlQUFLSSxhQUFMLEdBQXFCLElBQUlDLEdBQUosRUFBckIsQ0FiNEM7O0lBZ0I1QyxjQUFJLEtBQUtGLFlBQUwsQ0FBa0JHLFlBQWxCLENBQStCLGFBQS9CLENBQUosRUFBbUQ7O0lBRWpELGlCQUFLQyxnQkFBTCxHQUF3QixLQUFLSixZQUFMLENBQWtCSyxZQUFsQixDQUErQixhQUEvQixDQUF4QjtJQUNELFdBSEQsTUFHTztJQUNMLGlCQUFLRCxnQkFBTCxHQUF3QixJQUF4QjtJQUNEOztJQUNELGVBQUtKLFlBQUwsQ0FBa0JNLFlBQWxCLENBQStCLGFBQS9CLEVBQThDLE1BQTlDLEVBdEI0Qzs7O0lBeUI1QyxlQUFLQyx1QkFBTCxDQUE2QixLQUFLUCxZQUFsQyxFQXpCNEM7Ozs7Ozs7SUFnQzVDLGVBQUtRLFNBQUwsR0FBaUIsSUFBSUMsZ0JBQUosQ0FBcUIsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBckIsQ0FBakI7O0lBQ0EsZUFBS0gsU0FBTCxDQUFlSSxPQUFmLENBQXVCLEtBQUtaLFlBQTVCLEVBQTBDO0lBQUVhLFlBQUFBLFVBQVUsRUFBRSxJQUFkO0lBQW9CQyxZQUFBQSxTQUFTLEVBQUUsSUFBL0I7SUFBcUNDLFlBQUFBLE9BQU8sRUFBRTtJQUE5QyxXQUExQztJQUNEOztJQUdQO0lBQ0E7SUFDQTs7O0lBR016QyxRQUFBQSxZQUFZLENBQUNzQixTQUFELEVBQVksQ0FBQztJQUN2QmIsVUFBQUEsR0FBRyxFQUFFLFlBRGtCO0lBRXZCOUUsVUFBQUEsS0FBSyxFQUFFLFNBQVMrRyxVQUFULEdBQXNCO0lBQzNCLGlCQUFLUixTQUFMLENBQWVTLFVBQWY7O0lBRUEsZ0JBQUksS0FBS2pCLFlBQVQsRUFBdUI7SUFDckIsa0JBQUksS0FBS0ksZ0JBQUwsS0FBMEIsSUFBOUIsRUFBb0M7SUFDbEMscUJBQUtKLFlBQUwsQ0FBa0JNLFlBQWxCLENBQStCLGFBQS9CLEVBQThDLEtBQUtGLGdCQUFuRDtJQUNELGVBRkQsTUFFTztJQUNMLHFCQUFLSixZQUFMLENBQWtCa0IsZUFBbEIsQ0FBa0MsYUFBbEM7SUFDRDtJQUNGOztJQUVELGlCQUFLakIsYUFBTCxDQUFtQjlGLE9BQW5CLENBQTJCLFVBQVVnSCxTQUFWLEVBQXFCO0lBQzlDLG1CQUFLQyxhQUFMLENBQW1CRCxTQUFTLENBQUNoRSxJQUE3QjtJQUNELGFBRkQsRUFFRyxJQUZILEVBWDJCOzs7Ozs7OztJQXFCM0IsaUJBQUtxRCxTQUFMOztJQUFpQyxnQkFBakM7SUFDQSxpQkFBS1IsWUFBTDs7SUFBb0MsZ0JBQXBDO0lBQ0EsaUJBQUtDLGFBQUw7O0lBQXFDLGdCQUFyQztJQUNBLGlCQUFLRixhQUFMOztJQUFxQyxnQkFBckM7SUFDRDs7SUFHVDtJQUNBOztJQS9CK0IsU0FBRCxFQWlDckI7SUFDRGhCLFVBQUFBLEdBQUcsRUFBRSx5QkFESjs7O0lBS1Q7SUFDQTtJQUNROUUsVUFBQUEsS0FBSyxFQUFFLFNBQVNzRyx1QkFBVCxDQUFpQ2MsU0FBakMsRUFBNEM7SUFDakQsZ0JBQUlDLE1BQU0sR0FBRyxJQUFiOztJQUVBQyxZQUFBQSxnQkFBZ0IsQ0FBQ0YsU0FBRCxFQUFZLFVBQVVsRSxJQUFWLEVBQWdCO0lBQzFDLHFCQUFPbUUsTUFBTSxDQUFDRSxVQUFQLENBQWtCckUsSUFBbEIsQ0FBUDtJQUNELGFBRmUsQ0FBaEI7SUFJQSxnQkFBSXNFLGFBQWEsR0FBR0MsUUFBUSxDQUFDRCxhQUE3Qjs7SUFFQSxnQkFBSSxDQUFDQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsUUFBZCxDQUF1QlAsU0FBdkIsQ0FBTCxFQUF3Qzs7SUFFdEMsa0JBQUlsRSxJQUFJLEdBQUdrRSxTQUFYOzs7SUFFQSxrQkFBSVEsSUFBSSxHQUFHakosU0FBWDs7SUFDQSxxQkFBT3VFLElBQVAsRUFBYTtJQUNYLG9CQUFJQSxJQUFJLENBQUMyRSxRQUFMLEtBQWtCQyxJQUFJLENBQUNDLHNCQUEzQixFQUFtRDtJQUNqREgsa0JBQUFBLElBQUk7O0lBQTZCMUUsa0JBQUFBLElBQWpDO0lBQ0E7SUFDRDs7SUFDREEsZ0JBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDYSxVQUFaO0lBQ0Q7O0lBQ0Qsa0JBQUk2RCxJQUFKLEVBQVU7SUFDUkosZ0JBQUFBLGFBQWEsR0FBR0ksSUFBSSxDQUFDSixhQUFyQjtJQUNEO0lBQ0Y7O0lBQ0QsZ0JBQUlKLFNBQVMsQ0FBQ08sUUFBVixDQUFtQkgsYUFBbkIsQ0FBSixFQUF1QztJQUNyQ0EsY0FBQUEsYUFBYSxDQUFDUSxJQUFkLEdBRHFDOzs7O0lBS3JDLGtCQUFJUixhQUFhLEtBQUtDLFFBQVEsQ0FBQ0QsYUFBL0IsRUFBOEM7SUFDNUNDLGdCQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY08sS0FBZDtJQUNEO0lBQ0Y7SUFDRjs7SUFHVDtJQUNBOztJQTdDUyxTQWpDcUIsRUFnRnJCO0lBQ0RuRCxVQUFBQSxHQUFHLEVBQUUsWUFESjtJQUVEOUUsVUFBQUEsS0FBSyxFQUFFLFNBQVN1SCxVQUFULENBQW9CckUsSUFBcEIsRUFBMEI7SUFDL0IsZ0JBQUlBLElBQUksQ0FBQzJFLFFBQUwsS0FBa0JDLElBQUksQ0FBQ0ksWUFBM0IsRUFBeUM7SUFDdkM7SUFDRDs7SUFDRCxnQkFBSUMsT0FBTzs7SUFBMEJqRixZQUFBQSxJQUFyQyxDQUorQjs7O0lBUS9CLGdCQUFJaUYsT0FBTyxLQUFLLEtBQUtwQyxZQUFqQixJQUFpQ29DLE9BQU8sQ0FBQ2pDLFlBQVIsQ0FBcUIsT0FBckIsQ0FBckMsRUFBb0U7SUFDbEUsbUJBQUtrQyxlQUFMLENBQXFCRCxPQUFyQjtJQUNEOztJQUVELGdCQUFJcEYsT0FBTyxDQUFDc0YsSUFBUixDQUFhRixPQUFiLEVBQXNCMUMsd0JBQXRCLEtBQW1EMEMsT0FBTyxDQUFDakMsWUFBUixDQUFxQixVQUFyQixDQUF2RCxFQUF5RjtJQUN2RixtQkFBS29DLFdBQUwsQ0FBaUJILE9BQWpCO0lBQ0Q7SUFDRjs7SUFHVDtJQUNBO0lBQ0E7O0lBdEJTLFNBaEZxQixFQXdHckI7SUFDRHJELFVBQUFBLEdBQUcsRUFBRSxhQURKO0lBRUQ5RSxVQUFBQSxLQUFLLEVBQUUsU0FBU3NJLFdBQVQsQ0FBcUJwRixJQUFyQixFQUEyQjtJQUNoQyxnQkFBSWdFLFNBQVMsR0FBRyxLQUFLcEIsYUFBTCxDQUFtQnlDLFFBQW5CLENBQTRCckYsSUFBNUIsRUFBa0MsSUFBbEMsQ0FBaEI7O0lBQ0EsaUJBQUs4QyxhQUFMLENBQW1Cd0MsR0FBbkIsQ0FBdUJ0QixTQUF2QjtJQUNEOztJQUdUO0lBQ0E7SUFDQTs7SUFWUyxTQXhHcUIsRUFvSHJCO0lBQ0RwQyxVQUFBQSxHQUFHLEVBQUUsZUFESjtJQUVEOUUsVUFBQUEsS0FBSyxFQUFFLFNBQVNtSCxhQUFULENBQXVCakUsSUFBdkIsRUFBNkI7SUFDbEMsZ0JBQUlnRSxTQUFTLEdBQUcsS0FBS3BCLGFBQUwsQ0FBbUIyQyxVQUFuQixDQUE4QnZGLElBQTlCLEVBQW9DLElBQXBDLENBQWhCOztJQUNBLGdCQUFJZ0UsU0FBSixFQUFlO0lBQ2IsbUJBQUtsQixhQUFMLENBQW1CLFFBQW5CLEVBQTZCa0IsU0FBN0I7SUFDRDtJQUNGOztJQUdUO0lBQ0E7SUFDQTs7SUFaUyxTQXBIcUIsRUFrSXJCO0lBQ0RwQyxVQUFBQSxHQUFHLEVBQUUsa0JBREo7SUFFRDlFLFVBQUFBLEtBQUssRUFBRSxTQUFTMEksZ0JBQVQsQ0FBMEJ0QixTQUExQixFQUFxQztJQUMxQyxnQkFBSXVCLE1BQU0sR0FBRyxJQUFiOztJQUVBckIsWUFBQUEsZ0JBQWdCLENBQUNGLFNBQUQsRUFBWSxVQUFVbEUsSUFBVixFQUFnQjtJQUMxQyxxQkFBT3lGLE1BQU0sQ0FBQ3hCLGFBQVAsQ0FBcUJqRSxJQUFyQixDQUFQO0lBQ0QsYUFGZSxDQUFoQjtJQUdEOztJQUdUO0lBQ0E7SUFDQTs7SUFiUyxTQWxJcUIsRUFpSnJCO0lBQ0Q0QixVQUFBQSxHQUFHLEVBQUUsaUJBREo7SUFFRDlFLFVBQUFBLEtBQUssRUFBRSxTQUFTb0ksZUFBVCxDQUF5QmxGLElBQXpCLEVBQStCO0lBQ3BDLGdCQUFJMEYsWUFBWSxHQUFHLEtBQUs5QyxhQUFMLENBQW1CK0MsWUFBbkIsQ0FBZ0MzRixJQUFoQyxDQUFuQixDQURvQzs7OztJQUtwQyxnQkFBSSxDQUFDMEYsWUFBTCxFQUFtQjtJQUNqQixtQkFBSzlDLGFBQUwsQ0FBbUJnRCxRQUFuQixDQUE0QjVGLElBQTVCLEVBQWtDLElBQWxDOztJQUNBMEYsY0FBQUEsWUFBWSxHQUFHLEtBQUs5QyxhQUFMLENBQW1CK0MsWUFBbkIsQ0FBZ0MzRixJQUFoQyxDQUFmO0lBQ0Q7O0lBRUQwRixZQUFBQSxZQUFZLENBQUNHLFlBQWIsQ0FBMEI3SSxPQUExQixDQUFrQyxVQUFVOEksY0FBVixFQUEwQjtJQUMxRCxtQkFBS1YsV0FBTCxDQUFpQlUsY0FBYyxDQUFDOUYsSUFBaEM7SUFDRCxhQUZELEVBRUcsSUFGSDtJQUdEOztJQUdUO0lBQ0E7SUFDQTtJQUNBOztJQXJCUyxTQWpKcUIsRUF3S3JCO0lBQ0Q0QixVQUFBQSxHQUFHLEVBQUUsYUFESjtJQUVEOUUsVUFBQUEsS0FBSyxFQUFFLFNBQVN5RyxXQUFULENBQXFCd0MsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DO0lBQ3pDRCxZQUFBQSxPQUFPLENBQUMvSSxPQUFSLENBQWdCLFVBQVVpSixNQUFWLEVBQWtCO0lBQ2hDLGtCQUFJNUUsTUFBTTs7SUFBMEI0RSxjQUFBQSxNQUFNLENBQUM1RSxNQUEzQzs7SUFDQSxrQkFBSTRFLE1BQU0sQ0FBQ3BMLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7O0lBRS9Cd0gsZ0JBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBV2MsTUFBTSxDQUFDQyxVQUFsQixFQUE4QmxKLE9BQTlCLENBQXNDLFVBQVVnRCxJQUFWLEVBQWdCO0lBQ3BELHVCQUFLb0QsdUJBQUwsQ0FBNkJwRCxJQUE3QjtJQUNELGlCQUZELEVBRUcsSUFGSCxFQUYrQjs7SUFPL0JxQyxnQkFBQUEsS0FBSyxDQUFDOEMsSUFBTixDQUFXYyxNQUFNLENBQUNFLFlBQWxCLEVBQWdDbkosT0FBaEMsQ0FBd0MsVUFBVWdELElBQVYsRUFBZ0I7SUFDdEQsdUJBQUt3RixnQkFBTCxDQUFzQnhGLElBQXRCO0lBQ0QsaUJBRkQsRUFFRyxJQUZIO0lBR0QsZUFWRCxNQVVPLElBQUlpRyxNQUFNLENBQUNwTCxJQUFQLEtBQWdCLFlBQXBCLEVBQWtDO0lBQ3ZDLG9CQUFJb0wsTUFBTSxDQUFDRyxhQUFQLEtBQXlCLFVBQTdCLEVBQXlDOztJQUV2Qyx1QkFBS2hCLFdBQUwsQ0FBaUIvRCxNQUFqQjtJQUNELGlCQUhELE1BR08sSUFBSUEsTUFBTSxLQUFLLEtBQUt3QixZQUFoQixJQUFnQ29ELE1BQU0sQ0FBQ0csYUFBUCxLQUF5QixPQUF6RCxJQUFvRS9FLE1BQU0sQ0FBQzJCLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBeEUsRUFBc0c7OztJQUczRyx1QkFBS2tDLGVBQUwsQ0FBcUI3RCxNQUFyQjs7SUFDQSxzQkFBSXFFLFlBQVksR0FBRyxLQUFLOUMsYUFBTCxDQUFtQitDLFlBQW5CLENBQWdDdEUsTUFBaEMsQ0FBbkI7O0lBQ0EsdUJBQUt5QixhQUFMLENBQW1COUYsT0FBbkIsQ0FBMkIsVUFBVXFKLFdBQVYsRUFBdUI7SUFDaEQsd0JBQUloRixNQUFNLENBQUNvRCxRQUFQLENBQWdCNEIsV0FBVyxDQUFDckcsSUFBNUIsQ0FBSixFQUF1QztJQUNyQzBGLHNCQUFBQSxZQUFZLENBQUNOLFdBQWIsQ0FBeUJpQixXQUFXLENBQUNyRyxJQUFyQztJQUNEO0lBQ0YsbUJBSkQ7SUFLRDtJQUNGO0lBQ0YsYUE1QkQsRUE0QkcsSUE1Qkg7SUE2QkQ7SUFoQ0EsU0F4S3FCLEVBeU1yQjtJQUNENEIsVUFBQUEsR0FBRyxFQUFFLGNBREo7SUFFRDBFLFVBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULEdBQWU7SUFDbEIsbUJBQU8sSUFBSXZELEdBQUosQ0FBUSxLQUFLRCxhQUFiLENBQVA7SUFDRDs7O0lBSkEsU0F6TXFCLEVBaU5yQjtJQUNEbEIsVUFBQUEsR0FBRyxFQUFFLG9CQURKO0lBRUQwRSxVQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBVCxHQUFlO0lBQ2xCLG1CQUFPLEtBQUtyRCxnQkFBTCxLQUEwQixJQUFqQztJQUNEOzs7SUFKQSxTQWpOcUIsRUF5TnJCO0lBQ0RyQixVQUFBQSxHQUFHLEVBQUUsaUJBREo7SUFFRDJFLFVBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULENBQWFDLFVBQWIsRUFBeUI7SUFDNUIsaUJBQUt2RCxnQkFBTCxHQUF3QnVELFVBQXhCO0lBQ0Q7O0lBSkE7SUFRREYsVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZTtJQUNsQixtQkFBTyxLQUFLckQsZ0JBQVo7SUFDRDtJQVZBLFNBek5xQixDQUFaLENBQVo7O0lBc09BLGVBQU9SLFNBQVA7SUFDRCxPQXRSZSxFQUFoQjs7SUF5Uko7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7OztJQUdJLFVBQUlnRSxTQUFTLEdBQUcsWUFBWTs7SUFFaEM7SUFDQTtJQUNBO0lBQ00saUJBQVNBLFNBQVQsQ0FBbUJ6RyxJQUFuQixFQUF5QjBHLFNBQXpCLEVBQW9DO0lBQ2xDekUsVUFBQUEsZUFBZSxDQUFDLElBQUQsRUFBT3dFLFNBQVAsQ0FBZjs7OztJQUdBLGVBQUtFLEtBQUwsR0FBYTNHLElBQWI7OztJQUdBLGVBQUs0RyxvQkFBTCxHQUE0QixLQUE1Qjs7SUFHUjtJQUNBO0lBQ0E7O0lBQ1EsZUFBS0MsV0FBTCxHQUFtQixJQUFJOUQsR0FBSixDQUFRLENBQUMyRCxTQUFELENBQVIsQ0FBbkI7OztJQUdBLGVBQUtJLGNBQUwsR0FBc0IsSUFBdEI7OztJQUdBLGVBQUtDLFVBQUwsR0FBa0IsS0FBbEIsQ0FuQmtDOztJQXNCbEMsZUFBS0MsZ0JBQUw7SUFDRDs7SUFHUDtJQUNBO0lBQ0E7OztJQUdNN0YsUUFBQUEsWUFBWSxDQUFDc0YsU0FBRCxFQUFZLENBQUM7SUFDdkI3RSxVQUFBQSxHQUFHLEVBQUUsWUFEa0I7SUFFdkI5RSxVQUFBQSxLQUFLLEVBQUUsU0FBUytHLFVBQVQsR0FBc0I7SUFDM0IsaUJBQUtvRCxpQkFBTDs7SUFFQSxnQkFBSSxLQUFLTixLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXaEMsUUFBWCxLQUF3QkMsSUFBSSxDQUFDSSxZQUEvQyxFQUE2RDtJQUMzRCxrQkFBSUMsT0FBTzs7SUFBMEIsbUJBQUswQixLQUExQzs7SUFDQSxrQkFBSSxLQUFLRyxjQUFMLEtBQXdCLElBQTVCLEVBQWtDO0lBQ2hDN0IsZ0JBQUFBLE9BQU8sQ0FBQzlCLFlBQVIsQ0FBcUIsVUFBckIsRUFBaUMsS0FBSzJELGNBQXRDO0lBQ0QsZUFGRCxNQUVPO0lBQ0w3QixnQkFBQUEsT0FBTyxDQUFDbEIsZUFBUixDQUF3QixVQUF4QjtJQUNELGVBTjBEOzs7SUFTM0Qsa0JBQUksS0FBSzZDLG9CQUFULEVBQStCO0lBQzdCLHVCQUFPM0IsT0FBTyxDQUFDRixLQUFmO0lBQ0Q7SUFDRixhQWYwQjs7O0lBa0IzQixpQkFBSzRCLEtBQUw7O0lBQTZCLGdCQUE3QjtJQUNBLGlCQUFLRSxXQUFMOztJQUFtQyxnQkFBbkM7SUFDQSxpQkFBS0UsVUFBTCxHQUFrQixJQUFsQjtJQUNEOztJQUdUO0lBQ0E7SUFDQTs7SUE1QitCLFNBQUQsRUE4QnJCO0lBQ0RuRixVQUFBQSxHQUFHLEVBQUUsbUJBREo7OztJQUtUO0lBQ0E7SUFDUTlFLFVBQUFBLEtBQUssRUFBRSxTQUFTbUssaUJBQVQsR0FBNkI7SUFDbEMsZ0JBQUksS0FBS0MsU0FBVCxFQUFvQjtJQUNsQixvQkFBTSxJQUFJQyxLQUFKLENBQVUsc0NBQVYsQ0FBTjtJQUNEO0lBQ0Y7OztJQVhBLFNBOUJxQixFQTZDckI7SUFDRHZGLFVBQUFBLEdBQUcsRUFBRSxrQkFESjs7O0lBS0Q5RSxVQUFBQSxLQUFLLEVBQUUsU0FBU2tLLGdCQUFULEdBQTRCO0lBQ2pDLGdCQUFJLEtBQUtoSCxJQUFMLENBQVUyRSxRQUFWLEtBQXVCQyxJQUFJLENBQUNJLFlBQWhDLEVBQThDO0lBQzVDO0lBQ0Q7O0lBQ0QsZ0JBQUlDLE9BQU87O0lBQTBCLGlCQUFLakYsSUFBMUM7O0lBQ0EsZ0JBQUlILE9BQU8sQ0FBQ3NGLElBQVIsQ0FBYUYsT0FBYixFQUFzQjFDLHdCQUF0QixDQUFKLEVBQXFEO0lBQ25EOztJQUFnQzBDLGNBQUFBLE9BQU8sQ0FBQ21DLFFBQVIsS0FBcUIsQ0FBQyxDQUF0QixJQUEyQixLQUFLQyxnQkFBaEUsRUFBa0Y7SUFDaEY7SUFDRDs7SUFFRCxrQkFBSXBDLE9BQU8sQ0FBQ2pDLFlBQVIsQ0FBcUIsVUFBckIsQ0FBSixFQUFzQztJQUNwQyxxQkFBSzhELGNBQUw7O0lBQWlEN0IsZ0JBQUFBLE9BQU8sQ0FBQ21DLFFBQXpEO0lBQ0Q7O0lBQ0RuQyxjQUFBQSxPQUFPLENBQUM5QixZQUFSLENBQXFCLFVBQXJCLEVBQWlDLElBQWpDOztJQUNBLGtCQUFJOEIsT0FBTyxDQUFDTixRQUFSLEtBQXFCQyxJQUFJLENBQUNJLFlBQTlCLEVBQTRDO0lBQzFDQyxnQkFBQUEsT0FBTyxDQUFDRixLQUFSLEdBQWdCLFlBQVksRUFBNUI7O0lBQ0EscUJBQUs2QixvQkFBTCxHQUE0QixJQUE1QjtJQUNEO0lBQ0YsYUFiRCxNQWFPLElBQUkzQixPQUFPLENBQUNqQyxZQUFSLENBQXFCLFVBQXJCLENBQUosRUFBc0M7SUFDM0MsbUJBQUs4RCxjQUFMOztJQUFpRDdCLGNBQUFBLE9BQU8sQ0FBQ21DLFFBQXpEO0lBQ0FuQyxjQUFBQSxPQUFPLENBQUNsQixlQUFSLENBQXdCLFVBQXhCO0lBQ0Q7SUFDRjs7SUFHVDtJQUNBO0lBQ0E7O0lBaENTLFNBN0NxQixFQStFckI7SUFDRG5DLFVBQUFBLEdBQUcsRUFBRSxjQURKO0lBRUQ5RSxVQUFBQSxLQUFLLEVBQUUsU0FBU3dLLFlBQVQsQ0FBc0JaLFNBQXRCLEVBQWlDO0lBQ3RDLGlCQUFLTyxpQkFBTDs7SUFDQSxpQkFBS0osV0FBTCxDQUFpQnZCLEdBQWpCLENBQXFCb0IsU0FBckI7SUFDRDs7SUFHVDtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQVpTLFNBL0VxQixFQTZGckI7SUFDRDlFLFVBQUFBLEdBQUcsRUFBRSxpQkFESjtJQUVEOUUsVUFBQUEsS0FBSyxFQUFFLFNBQVN5SyxlQUFULENBQXlCYixTQUF6QixFQUFvQztJQUN6QyxpQkFBS08saUJBQUw7O0lBQ0EsaUJBQUtKLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkJILFNBQTNCOztJQUNBLGdCQUFJLEtBQUtHLFdBQUwsQ0FBaUJXLElBQWpCLEtBQTBCLENBQTlCLEVBQWlDO0lBQy9CLG1CQUFLM0QsVUFBTDtJQUNEO0lBQ0Y7SUFSQSxTQTdGcUIsRUFzR3JCO0lBQ0RqQyxVQUFBQSxHQUFHLEVBQUUsV0FESjtJQUVEMEUsVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZTtJQUNsQjs7SUFBaUMsbUJBQUtTO0lBQXRDO0lBRUQ7SUFMQSxTQXRHcUIsRUE0R3JCO0lBQ0RuRixVQUFBQSxHQUFHLEVBQUUsa0JBREo7SUFFRDBFLFVBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULEdBQWU7SUFDbEIsbUJBQU8sS0FBS1EsY0FBTCxLQUF3QixJQUEvQjtJQUNEOzs7SUFKQSxTQTVHcUIsRUFvSHJCO0lBQ0RsRixVQUFBQSxHQUFHLEVBQUUsTUFESjtJQUVEMEUsVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZTtJQUNsQixpQkFBS1csaUJBQUw7O0lBQ0EsbUJBQU8sS0FBS04sS0FBWjtJQUNEOzs7SUFMQSxTQXBIcUIsRUE2SHJCO0lBQ0QvRSxVQUFBQSxHQUFHLEVBQUUsZUFESjtJQUVEMkUsVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYWEsUUFBYixFQUF1QjtJQUMxQixpQkFBS0gsaUJBQUw7O0lBQ0EsaUJBQUtILGNBQUwsR0FBc0JNLFFBQXRCO0lBQ0Q7O0lBTEE7SUFTRGQsVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZTtJQUNsQixpQkFBS1csaUJBQUw7O0lBQ0EsbUJBQU8sS0FBS0gsY0FBWjtJQUNEO0lBWkEsU0E3SHFCLENBQVosQ0FBWjs7SUE0SUEsZUFBT0wsU0FBUDtJQUNELE9BakxlLEVBQWhCOztJQW9MSjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOzs7SUFHSSxVQUFJZ0IsWUFBWSxHQUFHLFlBQVk7O0lBRW5DO0lBQ0E7SUFDTSxpQkFBU0EsWUFBVCxDQUFzQmxELFFBQXRCLEVBQWdDO0lBQzlCdEMsVUFBQUEsZUFBZSxDQUFDLElBQUQsRUFBT3dGLFlBQVAsQ0FBZjs7SUFFQSxjQUFJLENBQUNsRCxRQUFMLEVBQWU7SUFDYixrQkFBTSxJQUFJNEMsS0FBSixDQUFVLG1FQUFWLENBQU47SUFDRDs7OztJQUdELGVBQUtPLFNBQUwsR0FBaUJuRCxRQUFqQjs7SUFHUjtJQUNBO0lBQ0E7O0lBQ1EsZUFBS3pCLGFBQUwsR0FBcUIsSUFBSTZFLEdBQUosRUFBckI7O0lBR1I7SUFDQTtJQUNBOztJQUNRLGVBQUtkLFdBQUwsR0FBbUIsSUFBSWMsR0FBSixFQUFuQjs7SUFHUjtJQUNBO0lBQ0E7O0lBQ1EsZUFBS3RFLFNBQUwsR0FBaUIsSUFBSUMsZ0JBQUosQ0FBcUIsS0FBS3NFLGNBQUwsQ0FBb0JwRSxJQUFwQixDQUF5QixJQUF6QixDQUFyQixDQUFqQixDQTFCOEI7O0lBNkI5QnFFLFVBQUFBLGFBQWEsQ0FBQ3RELFFBQVEsQ0FBQ3VELElBQVQsSUFBaUJ2RCxRQUFRLENBQUNDLElBQTFCLElBQWtDRCxRQUFRLENBQUN3RCxlQUE1QyxDQUFiLENBN0I4Qjs7SUFnQzlCLGNBQUl4RCxRQUFRLENBQUN5RCxVQUFULEtBQXdCLFNBQTVCLEVBQXVDO0lBQ3JDekQsWUFBQUEsUUFBUSxDQUFDMEQsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLEtBQUtDLGlCQUFMLENBQXVCMUUsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBOUM7SUFDRCxXQUZELE1BRU87SUFDTCxpQkFBSzBFLGlCQUFMO0lBQ0Q7SUFDRjs7SUFHUDtJQUNBO0lBQ0E7SUFDQTs7O0lBR00vRyxRQUFBQSxZQUFZLENBQUNzRyxZQUFELEVBQWUsQ0FBQztJQUMxQjdGLFVBQUFBLEdBQUcsRUFBRSxVQURxQjtJQUUxQjlFLFVBQUFBLEtBQUssRUFBRSxTQUFTOEksUUFBVCxDQUFrQmxCLElBQWxCLEVBQXdCeUQsS0FBeEIsRUFBK0I7SUFDcEMsZ0JBQUlBLEtBQUosRUFBVztJQUNULGtCQUFJLEtBQUt0QixXQUFMLENBQWlCdUIsR0FBakIsQ0FBcUIxRCxJQUFyQixDQUFKLEVBQWdDOztJQUU5QjtJQUNEOztJQUVELGtCQUFJZ0MsU0FBUyxHQUFHLElBQUlqRSxTQUFKLENBQWNpQyxJQUFkLEVBQW9CLElBQXBCLENBQWhCO0lBQ0FBLGNBQUFBLElBQUksQ0FBQ3ZCLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsRUFBM0I7O0lBQ0EsbUJBQUswRCxXQUFMLENBQWlCTixHQUFqQixDQUFxQjdCLElBQXJCLEVBQTJCZ0MsU0FBM0IsRUFSUzs7OztJQVdULGtCQUFJLENBQUMsS0FBS2dCLFNBQUwsQ0FBZWxELElBQWYsQ0FBb0JDLFFBQXBCLENBQTZCQyxJQUE3QixDQUFMLEVBQXlDO0lBQ3ZDLG9CQUFJMkQsTUFBTSxHQUFHM0QsSUFBSSxDQUFDN0QsVUFBbEI7O0lBQ0EsdUJBQU93SCxNQUFQLEVBQWU7SUFDYixzQkFBSUEsTUFBTSxDQUFDMUQsUUFBUCxLQUFvQixFQUF4QixFQUE0QjtJQUMxQmtELG9CQUFBQSxhQUFhLENBQUNRLE1BQUQsQ0FBYjtJQUNEOztJQUNEQSxrQkFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUN4SCxVQUFoQjtJQUNEO0lBQ0Y7SUFDRixhQXBCRCxNQW9CTztJQUNMLGtCQUFJLENBQUMsS0FBS2dHLFdBQUwsQ0FBaUJ1QixHQUFqQixDQUFxQjFELElBQXJCLENBQUwsRUFBaUM7O0lBRS9CO0lBQ0Q7O0lBRUQsa0JBQUk0RCxVQUFVLEdBQUcsS0FBS3pCLFdBQUwsQ0FBaUJQLEdBQWpCLENBQXFCNUIsSUFBckIsQ0FBakI7O0lBQ0E0RCxjQUFBQSxVQUFVLENBQUN6RSxVQUFYOztJQUNBLG1CQUFLZ0QsV0FBTCxDQUFpQixRQUFqQixFQUEyQm5DLElBQTNCOztJQUNBQSxjQUFBQSxJQUFJLENBQUNYLGVBQUwsQ0FBcUIsT0FBckI7SUFDRDtJQUNGOztJQUdUO0lBQ0E7SUFDQTtJQUNBOztJQXhDa0MsU0FBRCxFQTBDeEI7SUFDRG5DLFVBQUFBLEdBQUcsRUFBRSxjQURKO0lBRUQ5RSxVQUFBQSxLQUFLLEVBQUUsU0FBUzZJLFlBQVQsQ0FBc0JWLE9BQXRCLEVBQStCO0lBQ3BDLG1CQUFPLEtBQUs0QixXQUFMLENBQWlCUCxHQUFqQixDQUFxQnJCLE9BQXJCLENBQVA7SUFDRDs7SUFHVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFiUyxTQTFDd0IsRUF5RHhCO0lBQ0RyRCxVQUFBQSxHQUFHLEVBQUUsVUFESjtJQUVEOUUsVUFBQUEsS0FBSyxFQUFFLFNBQVN1SSxRQUFULENBQWtCckYsSUFBbEIsRUFBd0IwRyxTQUF4QixFQUFtQztJQUN4QyxnQkFBSTFDLFNBQVMsR0FBRyxLQUFLbEIsYUFBTCxDQUFtQndELEdBQW5CLENBQXVCdEcsSUFBdkIsQ0FBaEI7O0lBQ0EsZ0JBQUlnRSxTQUFTLEtBQUt2SSxTQUFsQixFQUE2Qjs7SUFFM0J1SSxjQUFBQSxTQUFTLENBQUNzRCxZQUFWLENBQXVCWixTQUF2QjtJQUNELGFBSEQsTUFHTztJQUNMMUMsY0FBQUEsU0FBUyxHQUFHLElBQUl5QyxTQUFKLENBQWN6RyxJQUFkLEVBQW9CMEcsU0FBcEIsQ0FBWjtJQUNEOztJQUVELGlCQUFLNUQsYUFBTCxDQUFtQnlELEdBQW5CLENBQXVCdkcsSUFBdkIsRUFBNkJnRSxTQUE3Qjs7SUFFQSxtQkFBT0EsU0FBUDtJQUNEOztJQUdUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBeEJTLFNBekR3QixFQW1GeEI7SUFDRHBDLFVBQUFBLEdBQUcsRUFBRSxZQURKO0lBRUQ5RSxVQUFBQSxLQUFLLEVBQUUsU0FBU3lJLFVBQVQsQ0FBb0J2RixJQUFwQixFQUEwQjBHLFNBQTFCLEVBQXFDO0lBQzFDLGdCQUFJMUMsU0FBUyxHQUFHLEtBQUtsQixhQUFMLENBQW1Cd0QsR0FBbkIsQ0FBdUJ0RyxJQUF2QixDQUFoQjs7SUFDQSxnQkFBSSxDQUFDZ0UsU0FBTCxFQUFnQjtJQUNkLHFCQUFPLElBQVA7SUFDRDs7SUFFREEsWUFBQUEsU0FBUyxDQUFDdUQsZUFBVixDQUEwQmIsU0FBMUI7O0lBQ0EsZ0JBQUkxQyxTQUFTLENBQUNrRCxTQUFkLEVBQXlCO0lBQ3ZCLG1CQUFLcEUsYUFBTCxDQUFtQixRQUFuQixFQUE2QjlDLElBQTdCO0lBQ0Q7O0lBRUQsbUJBQU9nRSxTQUFQO0lBQ0Q7O0lBR1Q7SUFDQTs7SUFsQlMsU0FuRndCLEVBdUd4QjtJQUNEcEMsVUFBQUEsR0FBRyxFQUFFLG1CQURKO0lBRUQ5RSxVQUFBQSxLQUFLLEVBQUUsU0FBU29MLGlCQUFULEdBQTZCOztJQUVsQyxnQkFBSUssYUFBYSxHQUFHbEcsS0FBSyxDQUFDOEMsSUFBTixDQUFXLEtBQUt1QyxTQUFMLENBQWVjLGdCQUFmLENBQWdDLFNBQWhDLENBQVgsQ0FBcEI7SUFDQUQsWUFBQUEsYUFBYSxDQUFDdkwsT0FBZCxDQUFzQixVQUFVeUwsWUFBVixFQUF3QjtJQUM1QyxtQkFBSzdDLFFBQUwsQ0FBYzZDLFlBQWQsRUFBNEIsSUFBNUI7SUFDRCxhQUZELEVBRUcsSUFGSCxFQUhrQzs7SUFRbEMsaUJBQUtwRixTQUFMLENBQWVJLE9BQWYsQ0FBdUIsS0FBS2lFLFNBQUwsQ0FBZWxELElBQWYsSUFBdUIsS0FBS2tELFNBQUwsQ0FBZUssZUFBN0QsRUFBOEU7SUFBRXJFLGNBQUFBLFVBQVUsRUFBRSxJQUFkO0lBQW9CRSxjQUFBQSxPQUFPLEVBQUUsSUFBN0I7SUFBbUNELGNBQUFBLFNBQVMsRUFBRTtJQUE5QyxhQUE5RTtJQUNEOztJQUdUO0lBQ0E7SUFDQTtJQUNBOztJQWpCUyxTQXZHd0IsRUEwSHhCO0lBQ0QvQixVQUFBQSxHQUFHLEVBQUUsZ0JBREo7SUFFRDlFLFVBQUFBLEtBQUssRUFBRSxTQUFTOEssY0FBVCxDQUF3QjdCLE9BQXhCLEVBQWlDQyxJQUFqQyxFQUF1QztJQUM1QyxnQkFBSTBDLEtBQUssR0FBRyxJQUFaOztJQUNBM0MsWUFBQUEsT0FBTyxDQUFDL0ksT0FBUixDQUFnQixVQUFVaUosTUFBVixFQUFrQjtJQUNoQyxzQkFBUUEsTUFBTSxDQUFDcEwsSUFBZjtJQUNFLHFCQUFLLFdBQUw7SUFDRXdILGtCQUFBQSxLQUFLLENBQUM4QyxJQUFOLENBQVdjLE1BQU0sQ0FBQ0MsVUFBbEIsRUFBOEJsSixPQUE5QixDQUFzQyxVQUFVZ0QsSUFBVixFQUFnQjtJQUNwRCx3QkFBSUEsSUFBSSxDQUFDMkUsUUFBTCxLQUFrQkMsSUFBSSxDQUFDSSxZQUEzQixFQUF5QztJQUN2QztJQUNEOztJQUNELHdCQUFJdUQsYUFBYSxHQUFHbEcsS0FBSyxDQUFDOEMsSUFBTixDQUFXbkYsSUFBSSxDQUFDd0ksZ0JBQUwsQ0FBc0IsU0FBdEIsQ0FBWCxDQUFwQjs7SUFDQSx3QkFBSTNJLE9BQU8sQ0FBQ3NGLElBQVIsQ0FBYW5GLElBQWIsRUFBbUIsU0FBbkIsQ0FBSixFQUFtQztJQUNqQ3VJLHNCQUFBQSxhQUFhLENBQUNJLE9BQWQsQ0FBc0IzSSxJQUF0QjtJQUNEOztJQUNEdUksb0JBQUFBLGFBQWEsQ0FBQ3ZMLE9BQWQsQ0FBc0IsVUFBVXlMLFlBQVYsRUFBd0I7SUFDNUMsMkJBQUs3QyxRQUFMLENBQWM2QyxZQUFkLEVBQTRCLElBQTVCO0lBQ0QscUJBRkQsRUFFR0MsS0FGSDtJQUdELG1CQVhELEVBV0dBLEtBWEg7SUFZQTs7SUFDRixxQkFBSyxZQUFMO0lBQ0Usc0JBQUl6QyxNQUFNLENBQUNHLGFBQVAsS0FBeUIsT0FBN0IsRUFBc0M7SUFDcEM7SUFDRDs7SUFDRCxzQkFBSS9FLE1BQU07O0lBQTBCNEUsa0JBQUFBLE1BQU0sQ0FBQzVFLE1BQTNDO0lBQ0Esc0JBQUk4RyxLQUFLLEdBQUc5RyxNQUFNLENBQUMyQixZQUFQLENBQW9CLE9BQXBCLENBQVo7O0lBQ0EwRixrQkFBQUEsS0FBSyxDQUFDOUMsUUFBTixDQUFldkUsTUFBZixFQUF1QjhHLEtBQXZCOztJQUNBO0lBdEJKO0lBd0JELGFBekJELEVBeUJHLElBekJIO0lBMEJEO0lBOUJBLFNBMUh3QixDQUFmLENBQVo7O0lBMkpBLGVBQU9WLFlBQVA7SUFDRCxPQTlNa0IsRUFBbkI7O0lBaU5KO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7O0lBR0ksZUFBU3JELGdCQUFULENBQTBCcEUsSUFBMUIsRUFBZ0NsRSxRQUFoQyxFQUEwQzhNLGtCQUExQyxFQUE4RDtJQUM1RCxZQUFJNUksSUFBSSxDQUFDMkUsUUFBTCxJQUFpQkMsSUFBSSxDQUFDSSxZQUExQixFQUF3QztJQUN0QyxjQUFJQyxPQUFPOztJQUEwQmpGLFVBQUFBLElBQXJDOztJQUNBLGNBQUlsRSxRQUFKLEVBQWM7SUFDWkEsWUFBQUEsUUFBUSxDQUFDbUosT0FBRCxDQUFSO0lBQ0QsV0FKcUM7Ozs7OztJQVV0QyxjQUFJNEQsVUFBVTs7SUFBOEI1RCxVQUFBQSxPQUFPLENBQUM0RCxVQUFwRDs7SUFDQSxjQUFJQSxVQUFKLEVBQWdCO0lBQ2R6RSxZQUFBQSxnQkFBZ0IsQ0FBQ3lFLFVBQUQsRUFBYS9NLFFBQWIsQ0FBaEI7SUFDQTtJQUNELFdBZHFDOzs7OztJQW1CdEMsY0FBSW1KLE9BQU8sQ0FBQzZELFNBQVIsSUFBcUIsU0FBekIsRUFBb0M7SUFDbEMsZ0JBQUlDLE9BQU87O0lBQXFDOUQsWUFBQUEsT0FBaEQsQ0FEa0M7O0lBR2xDLGdCQUFJK0QsZ0JBQWdCLEdBQUdELE9BQU8sQ0FBQ0UsbUJBQVIsR0FBOEJGLE9BQU8sQ0FBQ0UsbUJBQVIsRUFBOUIsR0FBOEQsRUFBckY7O0lBQ0EsaUJBQUssSUFBSTlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2SixnQkFBZ0IsQ0FBQ2pPLE1BQXJDLEVBQTZDb0UsQ0FBQyxFQUE5QyxFQUFrRDtJQUNoRGlGLGNBQUFBLGdCQUFnQixDQUFDNEUsZ0JBQWdCLENBQUM3SixDQUFELENBQWpCLEVBQXNCckQsUUFBdEIsQ0FBaEI7SUFDRDs7SUFDRDtJQUNELFdBM0JxQzs7Ozs7SUFnQ3RDLGNBQUltSixPQUFPLENBQUM2RCxTQUFSLElBQXFCLE1BQXpCLEVBQWlDO0lBQy9CLGdCQUFJSSxJQUFJOztJQUFrQ2pFLFlBQUFBLE9BQTFDLENBRCtCOztJQUcvQixnQkFBSWtFLGlCQUFpQixHQUFHRCxJQUFJLENBQUNFLGFBQUwsR0FBcUJGLElBQUksQ0FBQ0UsYUFBTCxDQUFtQjtJQUFFQyxjQUFBQSxPQUFPLEVBQUU7SUFBWCxhQUFuQixDQUFyQixHQUE2RCxFQUFyRjs7SUFDQSxpQkFBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHSCxpQkFBaUIsQ0FBQ3BPLE1BQXhDLEVBQWdEdU8sRUFBRSxFQUFsRCxFQUFzRDtJQUNwRGxGLGNBQUFBLGdCQUFnQixDQUFDK0UsaUJBQWlCLENBQUNHLEVBQUQsQ0FBbEIsRUFBd0J4TixRQUF4QixDQUFoQjtJQUNEOztJQUNEO0lBQ0Q7SUFDRixTQTFDMkQ7Ozs7SUE4QzVELFlBQUlzRSxLQUFLLEdBQUdKLElBQUksQ0FBQ3VKLFVBQWpCOztJQUNBLGVBQU9uSixLQUFLLElBQUksSUFBaEIsRUFBc0I7SUFDcEJnRSxVQUFBQSxnQkFBZ0IsQ0FBQ2hFLEtBQUQsRUFBUXRFLFFBQVIsQ0FBaEI7SUFDQXNFLFVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDb0osV0FBZDtJQUNEO0lBQ0Y7O0lBR0w7SUFDQTtJQUNBOzs7SUFDSSxlQUFTM0IsYUFBVCxDQUF1QjdILElBQXZCLEVBQTZCO0lBQzNCLFlBQUlBLElBQUksQ0FBQ3lKLGFBQUwsQ0FBbUIscUNBQW5CLENBQUosRUFBK0Q7SUFDN0Q7SUFDRDs7SUFDRCxZQUFJQyxLQUFLLEdBQUduRixRQUFRLENBQUM3RixhQUFULENBQXVCLE9BQXZCLENBQVo7SUFDQWdMLFFBQUFBLEtBQUssQ0FBQ3ZHLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUIsYUFBekI7SUFDQXVHLFFBQUFBLEtBQUssQ0FBQ0MsV0FBTixHQUFvQixPQUFPLGFBQVAsR0FBdUIsMkJBQXZCLEdBQXFELHNCQUFyRCxHQUE4RSxLQUE5RSxHQUFzRixJQUF0RixHQUE2Rix3QkFBN0YsR0FBd0gsZ0NBQXhILEdBQTJKLDZCQUEzSixHQUEyTCw0QkFBM0wsR0FBME4sd0JBQTFOLEdBQXFQLEtBQXpRO0lBQ0EzSixRQUFBQSxJQUFJLENBQUM0SixXQUFMLENBQWlCRixLQUFqQjtJQUNEOztJQUVELFVBQUksQ0FBQzVKLE9BQU8sQ0FBQ2tDLFNBQVIsQ0FBa0I2SCxjQUFsQixDQUFpQyxPQUFqQyxDQUFMLEVBQWdEOztJQUU5QyxZQUFJbEgsWUFBWSxHQUFHLElBQUk4RSxZQUFKLENBQWlCbEQsUUFBakIsQ0FBbkI7SUFFQTdDLFFBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQjdCLE9BQU8sQ0FBQ2tDLFNBQTlCLEVBQXlDLE9BQXpDLEVBQWtEO0lBQ2hEVCxVQUFBQSxVQUFVLEVBQUUsSUFEb0M7OztJQUdoRCtFLFVBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULEdBQWU7SUFDbEIsbUJBQU8sS0FBS3RELFlBQUwsQ0FBa0IsT0FBbEIsQ0FBUDtJQUNELFdBTCtDOzs7SUFPaER1RCxVQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBVCxDQUFhNEIsS0FBYixFQUFvQjtJQUN2QnhGLFlBQUFBLFlBQVksQ0FBQ2lELFFBQWIsQ0FBc0IsSUFBdEIsRUFBNEJ1QyxLQUE1QjtJQUNEO0lBVCtDLFNBQWxEO0lBV0Q7SUFDRixLQXR6QkQ7SUF3ekJELEdBdjBCQSxDQUFEOzs7SUNBQTs7Ozs7Ozs7Ozs7Ozs7O0lBZUc7SUE2Q0gsQ0FBQyxNQUFLOztJQUNKOzs7SUFDQSxRQUFNLGlCQUFpQixHQUFHLE1BQU0sRUFBaEM7O0lBQ0EsUUFBTSxxQkFBcUIsR0FBRyxNQUFNLEVBQXBDOztJQUNBLFFBQU0sYUFBYSxHQUFHLE1BQU0sRUFBNUI7O0lBQ0EsUUFBTSxrQkFBa0IsR0FBRyxNQUFNLEVBQWpDOztJQUNBLFFBQU0sU0FBUyxHQUFHLE1BQU0sRUFBeEI7SUFFQTs7O0lBQ0EsUUFBTSxXQUFXLEdBQUcsTUFBTSxFQUExQjs7SUFDQSxRQUFNLG1CQUFtQixHQUFHLE1BQU0sRUFBbEM7O0lBQ0EsUUFBTSxjQUFjLEdBQUcsTUFBTSxFQUE3Qjs7SUFDQSxRQUFNLHVCQUF1QixHQUFHLE1BQU0sRUFBdEM7O0lBQ0EsUUFBTSxXQUFXLEdBQUcsTUFBTSxFQUExQjs7SUFDQSxRQUFNLHVCQUF1QixHQUFHLE1BQU0sRUFBdEM7O0lBQ0EsUUFBTSxZQUFZLEdBQUcsTUFBTSxFQUEzQjs7SUFDQSxRQUFNLGdCQUFnQixHQUFHLE1BQU0sRUFBL0I7O0lBc0JBLFFBQU0sb0JBQU4sQ0FBMEI7SUFBMUIsSUFBQSxXQUFBLEdBQUE7SUFDRTs7SUFFRztJQUNJLFdBQUEsRUFBQSxJQUErQyxFQUEvQztJQUVQOzs7OztJQUtHOztJQUNJLFdBQUEsRUFBQSxJQUFzQyxFQUF0QztJQUVQOzs7SUFHRzs7SUFDSSxXQUFBLEVBQUEsSUFBMEIsSUFBSSxHQUFKLEVBQTFCO0lBNlRSOztJQTNUQyxJQUFBLFVBQVUsR0FBQTtJQUNSO0lBQ0EsV0FBSyx1QkFBTCxFQUE4QixLQUFLLGFBQUwsQ0FBOUIsRUFGUTtJQUlSO0lBQ0E7SUFDQTs7O0lBQ0EsWUFBTSxRQUFRLEdBQUcsSUFBakI7SUFLQSxNQUFBLFFBQVEsQ0FBQyxpQkFBRCxDQUFSLEdBQThCLElBQTlCO0lBQ0EsTUFBQSxRQUFRLENBQUMsYUFBRCxDQUFSLEdBQTBCLElBQTFCO0lBQ0EsTUFBQSxRQUFRLENBQUMscUJBQUQsQ0FBUixHQUFrQyxJQUFsQztJQUNEOztJQUVNLFFBQUgsR0FBRyxHQUFBO0lBQ0wsWUFBTSxLQUFLLEdBQUcsS0FBSyxpQkFBTCxDQUFkO0lBQ0EsYUFBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU4sR0FBZSxDQUFoQixDQUFMLElBQTJCLElBQWxDO0lBQ0Q7O0lBRUQsSUFBQSxJQUFJLENBQUMsT0FBRCxFQUFxQjtJQUN2QixVQUFJLENBQUMsT0FBRCxJQUFZLE9BQU8sS0FBSyxLQUFLLEdBQWpDLEVBQXNDO0lBQ3BDO0lBQ0QsT0FIc0I7OztJQUt2QixXQUFLLE1BQUwsQ0FBWSxPQUFaOztJQUNBLFdBQUssV0FBTCxFQUFrQixPQUFsQjs7SUFDQSxXQUFLLGlCQUFMLEVBQXdCLElBQXhCLENBQTZCLE9BQTdCO0lBQ0Q7O0lBRUQsSUFBQSxNQUFNLENBQUMsT0FBRCxFQUFxQjtJQUN6QixZQUFNLENBQUMsR0FBRyxLQUFLLGlCQUFMLEVBQXdCLE9BQXhCLENBQWdDLE9BQWhDLENBQVY7O0lBQ0EsVUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFYLEVBQWM7SUFDWixlQUFPLEtBQVA7SUFDRDs7SUFDRCxXQUFLLGlCQUFMLEVBQXdCLE1BQXhCLENBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBTHlCOzs7SUFPekIsVUFBSSxDQUFDLEtBQUssS0FBSyxpQkFBTCxFQUF3QixNQUFsQyxFQUEwQztJQUN4QyxhQUFLLFdBQUwsRUFBa0IsS0FBSyxHQUF2QjtJQUNEOztJQUNELGFBQU8sSUFBUDtJQUNEOztJQUVELElBQUEsR0FBRyxHQUFBO0lBQ0QsWUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFqQjtJQUNBLE1BQUEsR0FBRyxJQUFJLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUDtJQUNBLGFBQU8sR0FBUDtJQUNEOztJQUVELElBQUEsR0FBRyxDQUFDLE9BQUQsRUFBcUI7SUFDdEIsYUFBTyxLQUFLLGlCQUFMLEVBQXdCLE9BQXhCLENBQWdDLE9BQWhDLE1BQTZDLENBQUMsQ0FBckQ7SUFDRDtJQUVEOzs7SUFHRzs7O0lBQ2dCLE1BQVosRUFBQSxHQTNFQyxpQkEyRUQsRUEzRWtCLEVBQUEsR0FRakIsYUFtRUQsRUFuRWMsRUFBQSxHQU1iLHFCQTZERCxFQUFDLFdBQVcsR0FBRSxNQUFGLEVBQW9DO0lBQ3JELFlBQU0sV0FBVyxHQUFHLEtBQUsscUJBQUwsQ0FBcEI7SUFDQSxZQUFNLFVBQVUsR0FBRyxLQUFLLGFBQUwsQ0FBbkIsQ0FGcUQ7O0lBSXJELFVBQUksQ0FBQyxNQUFMLEVBQWE7SUFDWCxhQUFLLHVCQUFMLEVBQThCLFVBQTlCOztJQUNBLFFBQUEsV0FBVyxDQUFDLEtBQVo7SUFDQSxhQUFLLGFBQUwsSUFBc0IsRUFBdEI7SUFDQTtJQUNEOztJQUVELFlBQU0sVUFBVSxHQUFHLEtBQUssV0FBTCxFQUFrQixNQUFsQixDQUFuQixDQVhxRDs7O0lBYXJELFVBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFYLEdBQW9CLENBQXJCLENBQVYsQ0FBa0MsVUFBbEMsS0FBaUQsUUFBUSxDQUFDLElBQTlELEVBQW9FO0lBQ2xFLGNBQU0sS0FBSyxDQUFDLG9EQUFELENBQVg7SUFDRCxPQWZvRDtJQWlCckQ7OztJQUNBLFdBQUssYUFBTCxJQUFzQixVQUF0Qjs7SUFFQSxZQUFNLE1BQU0sR0FBRyxLQUFLLHVCQUFMLEVBQThCLE1BQTlCLENBQWYsQ0FwQnFEOzs7SUF1QnJELFVBQUksQ0FBQyxVQUFVLENBQUMsTUFBaEIsRUFBd0I7SUFDdEIsYUFBSyxjQUFMLEVBQXFCLFVBQXJCLEVBQWlDLE1BQWpDLEVBQXlDLFdBQXpDOztJQUNBO0lBQ0Q7O0lBRUQsVUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQVgsR0FBb0IsQ0FBNUI7SUFDQSxVQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBWCxHQUFvQixDQUE1QixDQTdCcUQ7O0lBK0JyRCxhQUFPLENBQUMsR0FBRyxDQUFKLElBQVMsQ0FBQyxHQUFHLENBQWIsSUFBa0IsVUFBVSxDQUFDLENBQUQsQ0FBVixLQUFrQixVQUFVLENBQUMsQ0FBRCxDQUFyRCxFQUEwRDtJQUN4RCxRQUFBLENBQUM7SUFDRCxRQUFBLENBQUM7SUFDRixPQWxDb0Q7SUFvQ3JEOzs7SUFDQSxVQUFJLFVBQVUsQ0FBQyxDQUFELENBQVYsS0FBa0IsVUFBVSxDQUFDLENBQUQsQ0FBaEMsRUFBcUM7SUFDbkMsYUFBSyxtQkFBTCxFQUEwQixVQUFVLENBQUMsQ0FBRCxDQUFwQyxFQUF5QyxVQUFVLENBQUMsQ0FBRCxDQUFuRDtJQUNELE9BdkNvRDs7O0lBeUNyRCxNQUFBLENBQUMsR0FBRyxDQUFKLElBQVMsS0FBSyx1QkFBTCxFQUE4QixVQUFVLENBQUMsS0FBWCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUE5QixDQUFULENBekNxRDs7SUEyQ3JELE1BQUEsQ0FBQyxHQUFHLENBQUosSUFBUyxLQUFLLGNBQUwsRUFBcUIsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBckIsRUFBNkMsTUFBN0MsRUFBcUQsSUFBckQsQ0FBVDtJQUNEO0lBRUQ7Ozs7O0lBS0c7OztJQUN3QixLQUFuQixtQkFBbUIsRUFDdkIsUUFEdUIsRUFDSyxRQURMLEVBQ29DO0lBQzdELFlBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGtCQUFELENBQWxDLENBRDZEO0lBRzdEOztJQUNBLFVBQUksS0FBSyxZQUFMLEVBQW1CLFFBQW5CLEtBQWdDLENBQUMsUUFBUSxDQUFDLEtBQTlDLEVBQXFEO0lBQ25ELFFBQUEsUUFBUSxDQUFDLEtBQVQsR0FBaUIsSUFBakI7SUFDQSxRQUFBLGlCQUFpQixDQUFDLEdBQWxCLENBQXNCLFFBQXRCO0lBQ0QsT0FQNEQ7SUFTN0Q7OztJQUNBLFVBQUksaUJBQWlCLENBQUMsR0FBbEIsQ0FBc0IsUUFBdEIsQ0FBSixFQUFxQztJQUNuQyxRQUFBLFFBQVEsQ0FBQyxLQUFULEdBQWlCLEtBQWpCO0lBQ0EsUUFBQSxpQkFBaUIsQ0FBQyxNQUFsQixDQUF5QixRQUF6QjtJQUNEOztJQUNELE1BQUEsUUFBUSxDQUFDLFNBQUQsQ0FBUixHQUFzQixRQUFRLENBQUMsU0FBRCxDQUE5QjtJQUNBLE1BQUEsUUFBUSxDQUFDLGtCQUFELENBQVIsR0FBK0IsaUJBQS9CO0lBQ0MsTUFBQSxRQUFrQyxDQUFDLFNBQUQsQ0FBbEMsR0FBZ0QsU0FBaEQ7SUFDQSxNQUFBLFFBQWtDLENBQUMsa0JBQUQsQ0FBbEMsR0FBeUQsU0FBekQ7SUFDRjtJQUVEOzs7OztJQUtHOzs7SUFDNEIsS0FBdkIsdUJBQXVCLEVBQUUsUUFBRixFQUE4QjtJQUMzRCxXQUFLLE1BQU0sT0FBWCxJQUFzQixRQUF0QixFQUFnQztJQUM5QixjQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsU0FBRCxDQUFsQjtJQUNBLFFBQUEsRUFBRSxDQUFDLFVBQUg7SUFDQyxRQUFBLE9BQWlDLENBQUMsU0FBRCxDQUFqQyxHQUErQyxTQUEvQztJQUNELGNBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBRCxDQUF4Qjs7SUFDQSxhQUFLLE1BQU0sT0FBWCxJQUFzQixRQUF0QixFQUFnQztJQUM5QixVQUFBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLEtBQWhCO0lBQ0Q7O0lBQ0EsUUFBQSxPQUFpQyxDQUFDLGtCQUFELENBQWpDLEdBQXdELFNBQXhEO0lBQ0Y7SUFDRjtJQUVEOzs7Ozs7O0lBT0c7OztJQUNtQixLQUFkLGNBQWMsRUFDbEIsUUFEa0IsRUFDaUIsTUFEakIsRUFFbEIsV0FGa0IsRUFFZ0I7SUFDcEMsV0FBSyxNQUFNLE9BQVgsSUFBc0IsUUFBdEIsRUFBZ0M7SUFDOUI7SUFDQSxjQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBdkI7SUFDQSxjQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBeEI7SUFDQSxjQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUosRUFBeEI7O0lBQ0EsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBN0IsRUFBcUMsQ0FBQyxFQUF0QyxFQUEwQztJQUN4QyxnQkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUQsQ0FBeEIsQ0FEd0M7O0lBR3hDLGNBQUksT0FBTyxLQUFLLE9BQVosSUFBdUIsQ0FBQyxLQUFLLFlBQUwsRUFBbUIsT0FBbkIsQ0FBeEIsSUFDQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQVAsQ0FBVyxPQUFYLENBRGYsRUFDcUM7SUFDbkM7SUFDRCxXQU51Qzs7O0lBUXhDLGNBQUksV0FBVyxJQUFJLE9BQU8sQ0FBQyxLQUEzQixFQUFrQztJQUNoQyxZQUFBLFdBQVcsQ0FBQyxHQUFaLENBQWdCLE9BQWhCO0lBQ0QsV0FGRCxNQUVPO0lBQ0wsWUFBQSxPQUFPLENBQUMsS0FBUixHQUFnQixJQUFoQjtJQUNBLFlBQUEsZUFBZSxDQUFDLEdBQWhCLENBQW9CLE9BQXBCO0lBQ0Q7SUFDRixTQW5CNkI7OztJQXFCOUIsUUFBQSxPQUFPLENBQUMsa0JBQUQsQ0FBUCxHQUE4QixlQUE5QixDQXJCOEI7O0lBdUI5QixjQUFNLEVBQUUsR0FBRyxJQUFJLGdCQUFKLENBQXFCLEtBQUssZ0JBQUwsRUFBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBckIsQ0FBWDtJQUNBLFFBQUEsT0FBTyxDQUFDLFNBQUQsQ0FBUCxHQUFxQixFQUFyQjtJQUNBLFlBQUksZUFBZSxHQUFHLE1BQXRCLENBekI4QjtJQTJCOUI7SUFDQTs7SUFDQSxjQUFNLGNBQWMsR0FBRyxlQUF2Qjs7SUFDQSxZQUFJLGNBQWMsQ0FBQyxPQUFmLElBQTBCLGNBQWMsQ0FBQyxJQUE3QyxFQUFtRDtJQUNqRCxVQUFBLGVBQWUsR0FBRyxjQUFjLENBQUMsSUFBakM7SUFDRDs7SUFDRCxRQUFBLEVBQUUsQ0FBQyxPQUFILENBQVcsZUFBWCxFQUE0QjtJQUMxQixVQUFBLFNBQVMsRUFBRTtJQURlLFNBQTVCO0lBR0Q7SUFDRjtJQUVEOzs7O0lBSUc7OztJQUNxQixLQUFoQixnQkFBZ0IsRUFBRSxTQUFGLEVBQTZCO0lBQ25ELFlBQU0sT0FBTyxHQUFHLEtBQUssYUFBTCxDQUFoQjtJQUNBLFlBQU0sV0FBVyxHQUFHLEtBQUsscUJBQUwsQ0FBcEI7O0lBQ0EsV0FBSyxNQUFNLFFBQVgsSUFBdUIsU0FBdkIsRUFBa0M7SUFDaEM7SUFDQTtJQUNBLGNBQU0sTUFBTSxHQUFJLFFBQVEsQ0FBQyxNQUFULENBQStCLElBQS9CLElBQXVDLFFBQVEsQ0FBQyxNQUFoRTtJQUNBLGNBQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBcEIsR0FDUixPQUFPLENBQUMsTUFEQSxHQUVSLE9BQU8sQ0FBQyxPQUFSLENBQWdCLE1BQWhCLENBRko7SUFHQSxjQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQVAsQ0FBNUI7SUFDQSxjQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsa0JBQUQsQ0FBcEMsQ0FSZ0M7O0lBV2hDLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsTUFBMUMsRUFBa0QsQ0FBQyxFQUFuRCxFQUF1RDtJQUNyRCxnQkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsQ0FBdEIsQ0FBaEI7O0lBQ0EsY0FBSSxPQUFPLEtBQUssWUFBaEIsRUFBOEI7SUFDNUIsWUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLCtDQUFiO0lBQ0EsaUJBQUssR0FBTDtJQUNBO0lBQ0Q7O0lBQ0QsY0FBSSxlQUFlLENBQUMsR0FBaEIsQ0FBb0IsT0FBcEIsQ0FBSixFQUFrQztJQUNoQyxZQUFBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLEtBQWhCO0lBQ0EsWUFBQSxlQUFlLENBQUMsTUFBaEIsQ0FBdUIsT0FBdkI7SUFDRDtJQUNGLFNBdEIrQjs7O0lBeUJoQyxhQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxVQUFULENBQW9CLE1BQXhDLEVBQWdELENBQUMsRUFBakQsRUFBcUQ7SUFDbkQsZ0JBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFULENBQW9CLENBQXBCLENBQWhCOztJQUNBLGNBQUksQ0FBQyxLQUFLLFlBQUwsRUFBbUIsT0FBbkIsQ0FBTCxFQUFrQztJQUNoQztJQUNEOztJQUNELGNBQUksV0FBVyxJQUFJLE9BQU8sQ0FBQyxLQUEzQixFQUFrQztJQUNoQyxZQUFBLFdBQVcsQ0FBQyxHQUFaLENBQWdCLE9BQWhCO0lBQ0QsV0FGRCxNQUVPO0lBQ0wsWUFBQSxPQUFPLENBQUMsS0FBUixHQUFnQixJQUFoQjtJQUNBLFlBQUEsZUFBZSxDQUFDLEdBQWhCLENBQW9CLE9BQXBCO0lBQ0Q7SUFDRjtJQUNGO0lBQ0Y7SUFFRDs7SUFFRzs7O0lBQ2lCLEtBQVosWUFBWSxFQUFFLE9BQUYsRUFBc0I7SUFDeEMsYUFBTyxVQUFVLDRCQUE0QixJQUE1QixDQUFpQyxPQUFPLENBQUMsU0FBekMsQ0FBakI7SUFDRDtJQUVEOzs7SUFHRzs7O0lBQ2dCLEtBQVgsV0FBVyxFQUFFLE9BQUYsRUFBc0I7SUFDdkMsWUFBTSxPQUFPLEdBQUcsRUFBaEI7SUFDQSxVQUFJLE9BQU8sR0FBK0IsT0FBMUMsQ0FGdUM7O0lBSXZDLGFBQU8sT0FBTyxJQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsSUFBdkMsRUFBNkM7SUFDM0M7SUFDQSxZQUFJLE9BQU8sQ0FBQyxRQUFSLEtBQXFCLElBQUksQ0FBQyxZQUE5QixFQUE0QztJQUMxQyxVQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsT0FBYjtJQUNELFNBSjBDOzs7SUFNM0MsWUFBSSxPQUFPLENBQUMsWUFBWixFQUEwQjtJQUN4QjtJQUNBLGlCQUFPLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBekIsRUFBdUM7SUFDckMsWUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLE9BQWI7SUFDRCxXQUp1Qjs7O0lBTXhCLFVBQUEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFSLEVBQVY7SUFDQTtJQUNEOztJQUNELFFBQUEsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFSLElBQ0wsT0FBOEIsQ0FBQyxJQURwQztJQUVEOztJQUNELGFBQU8sT0FBUDtJQUNEO0lBRUQ7OztJQUdHOzs7SUFDNEIsS0FBdkIsdUJBQXVCLEVBQUUsT0FBRixFQUFzQjtJQUVuRCxZQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBM0I7O0lBQ0EsVUFBSSxDQUFDLFVBQUwsRUFBaUI7SUFDZixlQUFPLElBQVA7SUFDRDs7SUFDRCxZQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUosRUFBZjtJQUNBLFVBQUksQ0FBSjtJQUNBLFVBQUksQ0FBSjtJQUNBLFVBQUksS0FBSjtJQUNBLFlBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxnQkFBWCxDQUE0QixNQUE1QixDQUFkOztJQUNBLFVBQUksS0FBSyxDQUFDLE1BQU4sSUFBZ0IsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLGFBQTdCLEVBQTRDO0lBQzFDLGFBQUssQ0FBQyxHQUFHLENBQVQsRUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQXRCLEVBQThCLENBQUMsRUFBL0IsRUFBbUM7SUFDakMsVUFBQSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLGFBQVQsQ0FBdUI7SUFDN0IsWUFBQSxPQUFPLEVBQUU7SUFEb0IsV0FBdkIsQ0FBUjs7SUFHQSxlQUFLLENBQUMsR0FBRyxDQUFULEVBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUF0QixFQUE4QixDQUFDLEVBQS9CLEVBQW1DO0lBQ2pDLGdCQUFJLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxRQUFULEtBQXNCLElBQUksQ0FBQyxZQUEvQixFQUE2QztJQUMzQyxjQUFBLE1BQU0sQ0FBQyxHQUFQLENBQVcsS0FBSyxDQUFDLENBQUQsQ0FBaEI7SUFDRDtJQUNGO0lBQ0YsU0FWeUM7O0lBWTNDOztJQUNELGFBQU8sTUFBUDtJQUNEOztJQTlVdUI7O0lBaVZ6QixFQUFBLFFBQXlDLENBQUMsaUJBQTFDLEdBQ0csSUFBSSxvQkFBSixFQURIO0lBRUYsQ0F6WEQ7O0lDdkRBLE1BQU0sZ0JBQWdCLEdBQUksUUFBZ0IsQ0FBQyxpQkFBM0M7SUFDQTs7Ozs7OztJQU9HOztJQUNHLFNBQVUsa0JBQVYsQ0FBZ0QsTUFBaEQsRUFBZ0U7SUFFbEU7O0lBRUc7SUFDSCxFQUFBak0sQ0FBZSxDQUFDLE1BQUs7SUFDakIsUUFBSSxNQUFKLEVBQVk7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBLFVBQUk7SUFDQSxRQUFBLGdCQUFnQixDQUFDLElBQWpCLENBQXNCLE1BQXRCO0lBQ0EsZUFBTyxNQUFLO0lBQ1IsVUFBQSxnQkFBZ0IsQ0FBQyxNQUFqQixDQUF3QixNQUF4QjtJQUNILFNBRkQ7SUFHSCxPQUxELENBTUEsT0FBTyxFQUFQLEVBQVc7SUFDUDtJQUNBLFFBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxFQUFkO0lBQ0g7SUFDSjtJQUNKLEdBakJjLEVBaUJaLENBQUMsTUFBRCxDQWpCWSxDQUFmO0lBa0JIO0lBRUssU0FBVSxhQUFWLEdBQXVCO0lBQ3pCLFNBQU8sZ0JBQWdCLENBQUMsR0FBeEI7SUFDSDs7SUNsQkQsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLEdBQUosRUFBakM7SUFFTSxTQUFVLFlBQVYsT0FBb0Y7SUFBQSxNQUF0QztJQUFFLElBQUE7SUFBRixHQUFzQztJQUN0RixRQUFNLENBQUMsT0FBRCxFQUFVLFVBQVYsSUFBd0IsUUFBUSxDQUFXLElBQVgsQ0FBdEM7SUFDQSxRQUFNO0lBQUUsSUFBQSxrQkFBRjtJQUFzQixJQUFBO0lBQXRCLE1BQXFDLGFBQWEsQ0FBSTtJQUFFLElBQUEsZUFBZSxFQUFFO0lBQW5CLEdBQUosQ0FBeEQsQ0FGc0Y7O0lBSXRGLFFBQU07SUFBRSxJQUFBLGdCQUFGO0lBQW9CLElBQUEsb0JBQXBCO0lBQTBDLElBQUEsZ0JBQTFDO0lBQTRELElBQUE7SUFBNUQsTUFBc0YsZ0JBQWdCLENBQUMsRUFBRCxDQUE1RyxDQUpzRjtJQVF0Rjs7SUFDQSxFQUFBQSxDQUFlLENBQUMsTUFBSztJQUNqQixRQUFJLFVBQVUsSUFBSSxPQUFsQixFQUEyQjtJQUFBOztJQUN2QixZQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBekI7SUFDQSxNQUFlLFFBQVEsQ0FBQyxZQUZEO0lBS3ZCOztJQUNBLE1BQUEsd0JBQXdCLENBQUMsR0FBekIsQ0FBNkIsYUFBYSxFQUExQywyQkFBK0Msb0JBQW9CLEVBQW5FLHlFQUF1RyxRQUFRLENBQUMsSUFBaEg7SUFDSDtJQUNKLEdBVGMsRUFTWixDQUFDLFVBQUQsRUFBYSxPQUFiLENBVFksQ0FBZjtJQVdBLEVBQUEsa0JBQWtCLENBQUMsVUFBVSxHQUFHLE9BQUgsR0FBYSxJQUF4QixDQUFsQjtJQUVBOzs7OztJQUtHOztJQUNILEVBQUFBLENBQWUsQ0FBQyxNQUFLO0lBQ2pCLFFBQUksVUFBVSxJQUFJLE9BQWxCLEVBQTJCO0lBRXZCLFVBQUksU0FBUyxHQUFHLHFCQUFxQixDQUFDLE1BQUs7SUFDdkM7SUFDQTtJQUNBLFFBQUEsY0FBYyxDQUFDLE1BQUs7SUFBQTs7SUFDaEIsaUNBQUEsa0JBQWtCLENBQUMsT0FBRCxDQUFsQiw0RUFBNkIsS0FBN0I7SUFDQSxVQUFBLFNBQVMsR0FBRyxDQUFaO0lBQ0gsU0FIYSxDQUFkO0lBSUgsT0FQb0MsQ0FBckM7SUFTQSxhQUFPLE1BQUs7SUFDUixZQUFJLFNBQUosRUFDSSxvQkFBb0IsQ0FBQyxTQUFELENBQXBCO0lBQ1AsT0FIRDtJQUlILEtBZkQsTUFnQkssSUFBSSxPQUFKLEVBQWE7SUFFZDtJQUNBO0lBQ0EsVUFBSSxTQUFTLEdBQUcscUJBQXFCLENBQUMsTUFBSztJQUN2QyxRQUFBLGNBQWMsQ0FBQyxNQUFLO0lBQUE7O0lBQ2hCLG1DQUFBLHdCQUF3QixDQUFDLEdBQXpCLENBQTZCLGFBQWEsRUFBMUMsaUZBQStDLEtBQS9DO0lBQ0EsVUFBQSxTQUFTLEdBQUcsQ0FBWjtJQUNILFNBSGEsQ0FBZDtJQUlILE9BTG9DLENBQXJDO0lBT0EsYUFBTyxNQUFLO0lBQ1IsWUFBSSxTQUFKLEVBQ0ksb0JBQW9CLENBQUMsU0FBRCxDQUFwQjtJQUNQLE9BSEQ7SUFJSDtJQUNKLEdBakNjLEVBaUNaLENBQUMsVUFBRCxFQUFhLE9BQWIsQ0FqQ1ksQ0FBZjs7SUFtQ0EsUUFBTSxpQkFBaUIsR0FBcUUsS0FBM0MsSUFBMEY7SUFDdkksV0FBTyxjQUFjLEdBQU07SUFBRSxvQkFBYyxVQUFVLEdBQUUsTUFBRixHQUFXO0lBQXJDLEtBQU4sRUFBOEQsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBRCxDQUF0QixDQUFoRixDQUFyQjtJQUNILEdBRkQ7O0lBS0EsU0FBTztJQUNILElBQUEsaUJBREc7SUFFSCxJQUFBO0lBRkcsR0FBUDtJQUlIO0lBRUQ7Ozs7SUFJRzs7SUFDRyxTQUFVLGtCQUFWLENBQTZCLE9BQTdCLEVBQTBDO0lBQzVDLFFBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVLENBQUMsWUFBOUMsRUFBNEQ7SUFBRSxJQUFBLFVBQVUsRUFBRyxJQUFELElBQVcsSUFBSSxZQUFZLE9BQWhCLElBQTJCLFdBQVcsQ0FBQyxJQUFELENBQXRDLEdBQStDLFVBQVUsQ0FBQyxhQUExRCxHQUEwRSxVQUFVLENBQUM7SUFBOUcsR0FBNUQsQ0FBbkI7SUFDQSxRQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsVUFBWCxFQUF2QjtJQUNBLFNBQU8sY0FBUDtJQUNIOztJQ3JHTSxTQUFTNE4sQ0FBVCxDQUFnQkMsQ0FBaEIsRUFBcUJsTixDQUFyQixFQUFxQkE7SUFBQUEsT0FDdEIsSUFBSXNDLENBRGtCdEMsSUFDYkEsQ0FEYUEsRUFDTmtOLENBQUFBLENBQUk1SyxDQUFKNEssQ0FBQUEsR0FBU2xOLENBQUFBLENBQU1zQyxDQUFOdEMsQ0FBVGtOOztJQUFlNUssU0FDUDRLLENBRE81SztJQVU5Qjs7SUFBQSxTQUFTNkssQ0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQTJCQTtJQUFBQSxPQUM1QixJQUFJL0ssQ0FEd0IrSyxJQUNuQkQsQ0FEbUJDLEVBQ25CRCxJQUFhLGVBQU45SyxDQUFNLElBQU5BLEVBQXNCQSxDQUFBQSxJQUFLK0ssQ0FBM0IvSyxDQUFQOEssRUFBc0MsT0FBQSxDQUFPLENBQVA7O0lBQU8sT0FDdEQsSUFBSTlLLENBRGtELElBQzdDK0ssQ0FENkMsRUFDN0NBLElBQWEsZUFBTi9LLENBQU0sSUFBYzhLLENBQUFBLENBQUU5SyxDQUFGOEssQ0FBQUEsS0FBU0MsQ0FBQUEsQ0FBRS9LLENBQUYrSyxDQUFwQ0EsRUFBMEMsT0FBQSxDQUFPLENBQVA7O0lBQU8sU0FBQSxDQUN4RCxDQUR3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0l6RCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBRCxDQUExQjtJQUVELFNBQVUsWUFBVixDQUErRCxDQUEvRCxFQUFxRSxNQUFyRSxFQUFtRjtJQUNyRixNQUFJLEtBQUssR0FBRyxDQUFaO0lBQ0EsRUFBQSxLQUFLLENBQUMsV0FBRCxDQUFMLEdBQXFCLE1BQXJCO0lBQ0EsU0FBTyxLQUFQO0lBQ0g7O0lDekJELElBQUksS0FBSyxHQUFJLGFBQWEsU0FBZCxHQUE0QixNQUFNLFNBQVMsQ0FBQyxPQUFWLENBQWtCLEVBQWxCLENBQWxDLEdBQTRELE1BQUssRUFBN0U7O0lBZ0NBLFNBQVMsUUFBVCxDQUF5QyxNQUF6QyxFQUE4RSxPQUE5RSxFQUFrTTtJQUM5TCxNQUFJLE9BQUosYUFBSSxPQUFKLGVBQUksT0FBTyxDQUFHLE1BQUgsQ0FBWCxFQUNJLE9BQU8sSUFBUDtJQUVKLFNBQU8sS0FBUDtJQUNIO0lBRUQ7Ozs7OztJQU1HOzs7SUFDSCxTQUFTLG1CQUFULENBQTZCLE9BQTdCLEVBQXdEO0lBQ3BELE1BQUksT0FBTyxJQUFJLE9BQU8sWUFBWSxJQUFsQyxFQUF3QztJQUNwQyxVQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBUCxFQUFsQjs7SUFDQSxRQUFJLFNBQVMsU0FBVCxJQUFBLFNBQVMsV0FBVCxJQUFBLFNBQVMsQ0FBRSxZQUFYLENBQXdCLE9BQXhCLEVBQWlDLElBQWpDLEtBQTBDLENBQUMsU0FBUyxDQUFDLFdBQXpELEVBQXNFO0lBQ2xFLGFBQU8sSUFBUDtJQUNIO0lBQ0o7O0lBRUQsU0FBTyxLQUFQO0lBQ0g7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JHOzs7SUFDRyxTQUFVLHFCQUFWLENBQXVELFdBQXZELEVBQThILE9BQTlILEVBQWtQO0lBRXBQLFFBQU07SUFBRSxJQUFBLGtCQUFGO0lBQXNCLElBQUE7SUFBdEIsTUFBcUMsYUFBYSxDQUFJLEVBQUosQ0FBeEQsQ0FGb1A7SUFLcFA7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsUUFBTSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLElBQWlDLFFBQVEsQ0FBQyxDQUFELENBQS9DLENBWm9QO0lBZXBQO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUNBLFFBQU0sQ0FBQyw0QkFBRCxFQUErQiwrQkFBL0IsSUFBa0UsUUFBUSxDQUFDLEtBQUQsQ0FBaEY7SUFFQSxFQUFBLGdCQUFnQixDQUFDLFFBQUQsRUFBVyxpQkFBWCxFQUE4QixDQUFDLElBQUc7SUFDOUMsSUFBQSwrQkFBK0IsQ0FBQyxNQUFNLElBQUksQ0FBVixHQUFjLEtBQWQsR0FBc0IsbUJBQW1CLENBQUMsVUFBVSxFQUFYLENBQTFDLENBQS9CO0lBQ0gsR0FGZSxDQUFoQjtJQUlBLEVBQUEsU0FBUyxDQUFDLE1BQUs7SUFDWCxRQUFJLE1BQU0sSUFBSSxDQUFkLEVBQ0ksK0JBQStCLENBQUMsS0FBRCxDQUEvQjtJQUNQLEdBSFEsRUFHTixDQUFDLE1BQU0sSUFBSSxDQUFYLENBSE0sQ0FBVDtJQUtBLFFBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFtQyxDQUFELElBQU07SUFDM0UsSUFBQSxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBUixDQUFUO0lBQ0gsR0FGc0MsQ0FBdkM7SUFJQSxRQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBbUMsQ0FBRCxJQUFNO0lBQzFFLElBQUEsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxFQUFFLENBQWQsQ0FBTixDQUFUOztJQUdBLFFBQUksNEJBQUosRUFBa0M7SUFDOUIsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBO0lBQ0g7O0lBRUQsUUFBSSxTQUFTLE1BQU0sQ0FBbkIsRUFBc0I7SUFDbEIsTUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYO0lBQ0g7SUFDSixHQVpxQyxDQUF0QztJQWNBLFFBQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFtQyxDQUFELElBQU07SUFDekUsUUFBSSxXQUFKLEVBQWlCO0lBRWI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxZQUFNLE9BQU8sR0FBRyxVQUFVLEVBQTFCO0lBQ0EsVUFBSSxPQUFPLElBQUksV0FBWSxPQUEzQixFQUNLLE9BQTZDLFNBQTdDLElBQUEsT0FBNkMsV0FBN0MsWUFBQSxPQUE2QyxDQUFFLEtBQS9DLEdBcEJRO0lBdUJiOztJQUNBLE1BQUEsQ0FBQyxDQUFDLGNBQUYsR0F4QmE7SUEyQmI7SUFDQTtJQUNBOztJQUNBLE1BQUEsQ0FBQyxDQUFDLGVBQUYsR0E5QmE7O0lBaUNiLE1BQUEsS0FBSyxHQWpDUTs7SUFvQ2IsTUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYO0lBQ0g7SUFDSixHQXZDb0MsQ0FBckM7SUF5Q0EsUUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQVIsR0FBNkIsU0FBN0IsR0FBMEMsQ0FBRCxJQUFtQztJQUM1RjtJQUNBO0lBQ0E7SUFDQSxRQUFJLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBZixFQUNJLENBQUMsQ0FBQyxjQUFGO0lBR0osUUFBSSxDQUFDLENBQUMsTUFBRixLQUFhLENBQWpCLEVBQ0ksYUFBYSxDQUFDLENBQUQsQ0FBYjtJQUNQLEdBVkQ7SUFXQSxRQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBUixHQUE2QixTQUE3QixHQUEwQyxDQUFELElBQW1DO0lBQzFGLFFBQUksQ0FBQyxDQUFDLE1BQUYsS0FBYSxDQUFiLElBQWtCLE1BQU0sR0FBRyxDQUEvQixFQUNJLFlBQVksQ0FBQyxDQUFELENBQVo7SUFDUCxHQUhEOztJQUtBLFFBQU0sTUFBTSxHQUFJLENBQUQsSUFBOEI7SUFDekMsSUFBQSxTQUFTLENBQUMsQ0FBRCxDQUFUO0lBQ0gsR0FGRDs7SUFLQSxRQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBUixHQUE2QixTQUE3QixHQUF5QyxNQUE1RDtJQUVBLFFBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFSLElBQThCLFFBQVEsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUF0QyxHQUEyRCxTQUEzRCxHQUF3RSxDQUFELElBQXNDO0lBQzNILFFBQUksQ0FBQyxDQUFDLEdBQUYsSUFBUyxHQUFULElBQWdCLFdBQWhCLElBQStCLENBQUMsUUFBUSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQTVDLEVBQWdFO0lBQzVEO0lBQ0E7SUFDQSxNQUFBLGFBQWEsQ0FBQyxDQUFELENBQWI7SUFDQSxNQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0g7O0lBRUQsUUFBSSxDQUFDLENBQUMsR0FBRixJQUFTLE9BQVQsSUFBb0IsQ0FBQyxRQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBakMsRUFBcUQ7SUFDakQsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLE1BQUEsYUFBYSxDQUFDLENBQUQsQ0FBYjtJQUNBLE1BQUEsWUFBWSxDQUFDLENBQUQsQ0FBWjtJQUNIO0lBQ0osR0FiRDtJQWVBLFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFSLEdBQTZCLFNBQTdCLEdBQTBDLENBQUQsSUFBc0M7SUFDM0YsUUFBSSxDQUFDLENBQUMsR0FBRixJQUFTLEdBQVQsSUFBZ0IsQ0FBQyxRQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBN0IsRUFDSSxZQUFZLENBQUMsQ0FBRCxDQUFaO0lBQ1AsR0FIRDs7SUFLQSxRQUFNLE9BQU8sR0FBSSxDQUFELElBQW1DO0lBQy9DLElBQUEsQ0FBQyxDQUFDLGNBQUY7O0lBQ0EsUUFBSSxDQUFDLENBQUMsTUFBRixHQUFXLENBQWYsRUFBa0I7SUFDZCxNQUFBLENBQUMsQ0FBQyx3QkFBRjtJQUNBLE1BQUEsQ0FBQyxDQUFDLGVBQUY7SUFDSDtJQUNKLEdBTkQ7O0lBUUEsU0FBMkMsS0FBcEMsSUFBaUQsa0JBQWtCLENBQUMsY0FBYyxHQUFNO0lBQUUsSUFBQSxTQUFGO0lBQWEsSUFBQSxPQUFiO0lBQXNCLElBQUEsTUFBdEI7SUFBOEIsSUFBQSxXQUE5QjtJQUEyQyxJQUFBLFNBQTNDO0lBQXNELElBQUEsVUFBdEQ7SUFBa0UsSUFBQSxPQUFsRTtJQUEyRSxPQUFHO0lBQUUsNEJBQXNCLE1BQU0sR0FBRyxNQUFILEdBQVk7SUFBMUM7SUFBOUUsR0FBTixFQUFtSixLQUFuSixDQUFmLENBQTFFO0lBQ0g7O0lDN0tLLFNBQVUsZ0JBQVYsT0FBdUo7SUFBQSxNQUEvRDtJQUFFLElBQUEsYUFBRjtJQUFpQixJQUFBO0lBQWpCLEdBQStEO0lBRXpKLFFBQU0sQ0FBQyxnQkFBRCxFQUFtQixtQkFBbkIsRUFBd0MsbUJBQXhDLElBQStELFFBQVEsQ0FBZ0IsSUFBaEIsQ0FBN0U7SUFDQSxRQUFNLENBQUMsbUJBQUQsRUFBc0Isc0JBQXRCLEVBQThDLHNCQUE5QyxJQUF3RSxRQUFRLENBQWdCLElBQWhCLENBQXRGO0lBQ0EsUUFBTSxzQkFBc0IsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBRCxhQUFDLGdCQUFELGNBQUMsZ0JBQUQsR0FBc0IsTUFBSyxFQUEzQixDQUFoRDtJQUVBLFFBQU07SUFBRSxJQUFBLGVBQWUsRUFBRSx3QkFBbkI7SUFBNkMsSUFBQSxlQUFlLEVBQUU7SUFBOUQsTUFBeUYsZUFBZSxFQUE5RztJQUVBLFFBQU0sZUFBZSxHQUFHMU4sQ0FBVyxDQUFDLE1BQUs7SUFBRyxJQUFBLG1CQUFtQixDQUFFLENBQUYsQ0FBbkI7SUFBMkIsR0FBcEMsRUFBc0MsRUFBdEMsQ0FBbkM7SUFDQSxRQUFNLGNBQWMsR0FBR0EsQ0FBVyxDQUFDLE1BQUs7SUFBRyxJQUFBLG1CQUFtQixDQUFFLHdCQUF3QixDQUFDLE1BQXpCLEdBQWtDLENBQXBDLENBQW5CO0lBQTZELEdBQXRFLEVBQXdFLEVBQXhFLENBQWxDO0lBQ0EsUUFBTSxjQUFjLEdBQUdBLENBQVcsQ0FBQyxNQUFLO0lBQUcsSUFBQSxtQkFBbUIsQ0FBQyxDQUFDLElBQUssQ0FBQyxDQUFELGFBQUMsQ0FBRCxjQUFDLENBQUQsR0FBTSxDQUFOLElBQVcsQ0FBbEIsQ0FBbkI7SUFBMEMsR0FBbkQsRUFBcUQsRUFBckQsQ0FBbEM7SUFDQSxRQUFNLGNBQWMsR0FBR0EsQ0FBVyxDQUFDLE1BQUs7SUFBRyxJQUFBLG1CQUFtQixDQUFDLENBQUMsSUFBSyxDQUFDLENBQUQsYUFBQyxDQUFELGNBQUMsQ0FBRCxHQUFNLENBQU4sSUFBVyxDQUFsQixDQUFuQjtJQUEwQyxHQUFuRCxFQUFxRCxFQUFyRCxDQUFsQztJQUNBLFFBQU07SUFBRSxJQUFBO0lBQUYsTUFBK0IsbUJBQW1CLENBQWU7SUFBRSxJQUFBLGVBQWUsRUFBRSx3QkFBbkI7SUFBNkMsSUFBQSxtQkFBbUIsRUFBRSxPQUFsRTtJQUEyRSxJQUFBLEtBQUssRUFBRSxnQkFBRixhQUFFLGdCQUFGLGNBQUUsZ0JBQUYsR0FBc0IsQ0FBdEc7SUFBeUcsSUFBQSxlQUF6RztJQUEwSCxJQUFBLGNBQTFIO0lBQTBJLElBQUEsY0FBMUk7SUFBMEosSUFBQTtJQUExSixHQUFmLENBQXhEO0lBRUEsRUFBQSxZQUFZLENBQUM7SUFDVCxJQUFBLGNBQWMsRUFBRSxhQURQO0lBRVQsSUFBQSxlQUFlLEVBQUUsd0JBRlI7SUFHVCxJQUFBLFlBQVksRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKO0lBQUE7O0lBQUEsc0NBQWEsd0JBQXdCLENBQUMsQ0FBRCxDQUFyQywwREFBYSxzQkFBNkIsaUJBQTdCLENBQStDLElBQS9DLENBQWI7SUFBQSxLQUhMO0lBSVQsSUFBQSxZQUFZLEVBQUcsQ0FBRDtJQUFBOztJQUFBLGlFQUFRLHdCQUF3QixDQUFDLENBQUQsQ0FBaEMsMkRBQVEsdUJBQTZCLGlCQUE3QixFQUFSLDJFQUE0RCxJQUE1RDtJQUFBO0lBSkwsR0FBRCxDQUFaO0lBT0EsRUFBQSxZQUFZLENBQUM7SUFDVCxJQUFBLGNBQWMsRUFBRSxnQkFEUDtJQUVULElBQUEsZUFBZSxFQUFFLHdCQUZSO0lBR1QsSUFBQSxZQUFZLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixLQUFhLElBQUksSUFBSSx3QkFBd0IsQ0FBQyxDQUFELENBQXhCLENBQTRCLEtBQTVCLEVBSDFCO0lBSVQsSUFBQSxZQUFZLEVBQUcsQ0FBRCxJQUFPO0lBSlosR0FBRCxDQUFaO0lBT0EsUUFBTSx1QkFBdUIsR0FBR0EsQ0FBVyxDQUF5QyxJQUFELElBQTZGO0lBQUE7O0lBRTVLLFVBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFuQjtJQUVBLFVBQU0sQ0FBQyxjQUFELEVBQWlCLGlCQUFqQixFQUFvQyxpQkFBcEMsSUFBeUQsUUFBUSxDQUFpQixJQUFqQixDQUF2RTtJQUlBLFVBQU07SUFBRSxNQUFBLFFBQVEsRUFBRSxZQUFaO0lBQTBCLE1BQUEsZ0JBQWdCLEVBQUUsb0JBQTVDO0lBQWtFLE1BQUEsb0JBQW9CLEVBQUU7SUFBeEYsUUFBcUgsV0FBVyxDQUFDO0lBQUUsTUFBQSxNQUFNLEVBQUU7SUFBVixLQUFELENBQXRJO0lBQ0EsVUFBTTtJQUFFLE1BQUEsUUFBUSxFQUFFLFlBQVo7SUFBMEIsTUFBQSxnQkFBZ0IsRUFBRSxvQkFBNUM7SUFBa0UsTUFBQSxvQkFBb0IsRUFBRTtJQUF4RixRQUFxSCxXQUFXLENBQUM7SUFBRSxNQUFBLE1BQU0sRUFBRTtJQUFWLEtBQUQsQ0FBdEk7SUFFQSxRQUFJLElBQUksMEJBQUssSUFBSSxDQUFDLElBQVYsbURBQWtCLGNBQWxCLHlDQUFxQyxJQUE3QyxDQVg0SztJQWM1Szs7SUFDQSxVQUFNLDZCQUE2QixHQUFHQSxDQUFXLENBQUMsU0FBUyw2QkFBVCxRQUErRTtJQUU3SCxZQUFNO0lBQUUsUUFBQSxVQUFGO0lBQWMsUUFBQSxnQkFBZDtJQUFnQyxRQUFBO0lBQWhDLFVBQW9ELFdBQVcsQ0FBZTtJQUNoRixRQUFBLGdCQUFnQixFQUFFQSxDQUFXLENBQUUsT0FBRCxJQUFxQjtJQUMvQyxjQUFJLE9BQUosRUFDSSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCLENBREosS0FHSSxzQkFBc0IsQ0FBQyxRQUFRLElBQUksUUFBUSxLQUFLLEtBQWIsR0FBcUIsSUFBckIsR0FBNEIsS0FBekMsQ0FBdEI7SUFFUCxTQU40QixFQU0xQixFQU4wQjtJQURtRCxPQUFmLENBQXJFO0lBU0EsWUFBTSxLQUFLLEdBQUdBLENBQVcsQ0FBQyxNQUFLO0lBQUE7O0lBQzNCLFlBQUksc0JBQXNCLE1BQU0sSUFBaEMsRUFDSyxlQUFBLFVBQVUsWUFBVixrREFBcUQsS0FBckQ7SUFDUixPQUh3QixFQUd0QixFQUhzQixDQUF6QjtJQUlBLFlBQU07SUFBRSxRQUFBO0lBQUYsVUFBMkIsc0JBQXNCLENBQWU7SUFBRSxRQUFBLEtBQUY7SUFBUyxRQUFBLElBQVQ7SUFBZSxRQUFBLGlCQUFmO0lBQWtDLFFBQUEsaUJBQWxDO0lBQXFELFFBQUE7SUFBckQsT0FBZixDQUF2RDs7SUFFQSxlQUFTLGtDQUFULFFBQW1NO0lBQUEsWUFBakY7SUFBRSxXQUFDLGVBQUQsR0FBbUIsWUFBckI7SUFBbUMsV0FBQyxlQUFELEdBQW1CLFlBQXREO0lBQW9FLGFBQUc7SUFBdkUsU0FBaUY7O0lBRS9MLGNBQU0sT0FBTyxHQUFHLE1BQUs7SUFBRyxVQUFBLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFOLENBQW5CO0lBQWtDLFNBQTFEOztJQUNBLFlBQUksT0FBTyxHQUFHLE1BQUs7SUFDZixjQUFJLGlCQUFpQixFQUFyQixFQUNJLHNCQUFzQixDQUFDLElBQUQsQ0FBdEIsQ0FESixLQUdJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFOLENBQXRCO0lBQ1AsU0FMRDs7SUFPQSxZQUFJLElBQUksR0FBRyxjQUFjLEdBQWlCO0lBQUUsVUFBQSxRQUFRLEVBQUU7SUFBWixTQUFqQixFQUFrQyxxQkFBcUIsQ0FBZSxPQUFmLEVBQXdCLFNBQXhCLENBQXJCLENBQXdELEtBQXhELENBQWxDLENBQXpCO0lBRUEsWUFBSSxJQUFJLEdBQ0YsY0FBYyxHQUFpQixvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFELENBQXhCLENBQTBDO0lBQzVGLDJCQUFrQixZQUFsQixhQUFrQixZQUFsQixjQUFrQixZQUFsQixHQUFrQyxDQUFDLENBQUMsQ0FBQyxJQUFILEVBQVMsUUFBVCxFQUQwRDtJQUU1RiwyQkFBa0IsWUFBbEIsYUFBa0IsWUFBbEIsY0FBa0IsWUFBbEIsR0FBbUMsSUFBSSxHQUFHLE1BQUgsR0FBWSxTQUZ5QztJQUc1RixhQUFHLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLElBQUQsQ0FBckI7SUFIeUUsU0FBMUMsQ0FBRCxDQUFyQyxFQUlYO0lBQUUsVUFBQTtJQUFGLFNBSlcsQ0FEcEI7SUFRQSxlQUFPLHdCQUF3QixDQUFDLElBQUQsQ0FBL0I7SUFDSDtJQUVELGFBQU87SUFBRSxRQUFBO0lBQUYsT0FBUDtJQUNILEtBekNnRCxFQXlDOUMsQ0FBQyx3QkFBRCxFQUEyQixLQUEzQixFQUFrQyxJQUFsQyxDQXpDOEMsQ0FBakQ7SUE0Q0EsVUFBTSwyQkFBMkIsR0FBR0EsQ0FBVyxDQUFDLFNBQVMsMkJBQVQsR0FBb0M7SUFDaEYsZUFBUyxnQ0FBVCxRQUF3SDtJQUFBLFlBQXJCO0lBQUUsVUFBQSxJQUFGO0lBQVEsYUFBRztJQUFYLFNBQXFCO0lBQ3BILFlBQUksSUFBSSxHQUFHLHdCQUF3QixDQUFDLGlCQUFELENBQXhCLENBQTRDO0lBQUUsVUFBQSxJQUFJLEVBQUUsSUFBRixhQUFFLElBQUYsY0FBRSxJQUFGLEdBQVUsUUFBaEI7SUFBMEIsYUFBRztJQUE3QixTQUE1QyxDQUFYO0lBQ0EsWUFBSSxJQUFJLEdBQUcsb0JBQW9CLENBQUMsSUFBRCxDQUEvQjtJQUNBLGVBQU8sSUFBUDtJQUNIO0lBQ0QsYUFBTztJQUNILFFBQUE7SUFERyxPQUFQO0lBR0gsS0FUOEMsRUFTNUMsRUFUNEMsQ0FBL0M7SUFXQSxXQUFPO0lBQ0gsTUFBQSxRQUFRLEVBQUUsSUFEUDtJQUVILE1BQUEsNkJBRkc7SUFHSCxNQUFBO0lBSEcsS0FBUDtJQUtILEdBM0UwQyxFQTJFeEMsQ0FBQyx3QkFBRCxDQTNFd0MsQ0FBM0M7SUE2RUEsU0FBTztJQUNILElBQUEsdUJBREc7SUFFSCxJQUFBLGVBQWUsRUFBRTtJQUZkLEdBQVA7SUFJSDs7SUNySkQ7Ozs7OztJQU1HOztJQUNHLFNBQVUsZUFBVixHQUFnSjtJQUFBLE1BQXRIO0lBQUUsSUFBQSxXQUFGO0lBQWUsSUFBQSxXQUFmO0lBQTRCLElBQUE7SUFBNUIsR0FBc0gsdUVBQWhEO0lBQUUsSUFBQSxXQUFXLEVBQUUsUUFBZjtJQUF5QixJQUFBLFdBQVcsRUFBRTtJQUF0QyxHQUFnRDtJQUVsSixRQUFNLENBQUMsWUFBRCxFQUFlLGVBQWYsSUFBa0N2QixDQUFRLENBQWlCLElBQWpCLENBQWhEO0lBQ0EsUUFBTSxDQUFDLFlBQUQsRUFBZSxlQUFmLElBQWtDQSxDQUFRLENBQWlCLElBQWpCLENBQWhEO0lBQ0EsUUFBTTtJQUFFLElBQUEsVUFBVSxFQUFFLGVBQWQ7SUFBK0IsSUFBQSxrQkFBa0IsRUFBRTtJQUFuRCxNQUErRSxhQUFhLENBQU07SUFBRSxJQUFBLGVBQWUsRUFBRTtJQUFuQixHQUFOLENBQWxHO0lBQ0EsUUFBTTtJQUFFLElBQUEsVUFBVSxFQUFFLGVBQWQ7SUFBK0IsSUFBQSxrQkFBa0IsRUFBRTtJQUFuRCxNQUErRSxhQUFhLENBQU07SUFBRSxJQUFBLGVBQWUsRUFBRTtJQUFuQixHQUFOLENBQWxHO0lBQ0EsUUFBTTtJQUFFLElBQUEsZ0JBQWdCLEVBQUUscUJBQXBCO0lBQTJDLElBQUEsRUFBRSxFQUFFLE9BQS9DO0lBQXdELElBQUEsUUFBUSxFQUFFLGFBQWxFO0lBQWlGLElBQUEsb0JBQW9CLEVBQUU7SUFBdkcsTUFBcUksV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXRKO0lBQ0EsUUFBTTtJQUFFLElBQUEsZ0JBQWdCLEVBQUUscUJBQXBCO0lBQTJDLElBQUEsRUFBRSxFQUFFLE9BQS9DO0lBQXdELElBQUEsUUFBUSxFQUFFLGFBQWxFO0lBQWlGLElBQUEsb0JBQW9CLEVBQUU7SUFBdkcsTUFBcUksV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXRKO0lBRUEsUUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFFLFlBQTNCO0lBR0EsUUFBTSxvQkFBb0IsR0FBR3VCLENBQVcsQ0FBQyxTQUFTLG9CQUFULEdBQTZCO0lBQ2xFLFdBQU87SUFDSCxNQUFBLHlCQUF5QixFQUFzQyxLQUFwQyxJQUFnRDtJQUFHLGVBQU8scUJBQXFCLENBQUMsdUJBQXVCLENBQUMsS0FBRCxDQUF4QixDQUE1QjtJQUErRDtJQUQxSSxLQUFQO0lBR0gsR0FKdUMsRUFJckMsRUFKcUMsQ0FBeEM7SUFNQSxRQUFNLG9CQUFvQixHQUFHQSxDQUFXLENBQUMsU0FBUyxvQkFBVCxHQUE2QjtJQUNsRSxXQUFPO0lBQ0gsTUFBQSx5QkFBeUIsRUFBRSxRQUFtSDtJQUFBOztJQUFBLFlBQS9FO0lBQUUsNkJBQW1CLGNBQXJCO0lBQXFDLHdCQUFjLFNBQW5EO0lBQThELGFBQUc7SUFBakUsU0FBK0U7SUFDMUksZUFBUSxxQkFBcUIsQ0FDekIseUJBQXlCLENBQUMsaUJBQUQsQ0FBekIsQ0FDSSx1QkFBdUIsQ0FDbkIsY0FBYyxHQUFNO0lBQUUsaUNBQWUsQ0FBQyxlQUFELEdBQW1CLFVBQW5CLEdBQWdDLFNBQS9DLHlDQUE2RDtJQUEvRCxTQUFOLEVBQWtGLEtBQWxGLENBREssQ0FEM0IsQ0FEeUIsQ0FBN0I7SUFPSDtJQVRFLEtBQVA7SUFXSCxHQVp1QyxFQVlyQyxDQUFDLGVBQUQsQ0FacUMsQ0FBeEM7SUFjQSxTQUFPO0lBQ0gsSUFBQSxvQkFERztJQUVILElBQUEsb0JBRkc7SUFHSCxJQUFBLHlCQUhHO0lBSUgsSUFBQSx5QkFKRztJQUtILElBQUEsT0FMRztJQU1ILElBQUEsT0FORztJQU9ILElBQUEsWUFQRztJQVFILElBQUEsWUFSRztJQVNILElBQUEsZUFURztJQVVILElBQUE7SUFWRyxHQUFQO0lBYUg7SUFZRDs7Ozs7O0lBTUc7O0lBQ0csU0FBVSxhQUFWLEdBQXVHO0lBQUEsTUFBL0U7SUFBRSxJQUFBLFdBQUY7SUFBZSxJQUFBO0lBQWYsR0FBK0UsdUVBQWhEO0lBQUUsSUFBQSxXQUFXLEVBQUUsUUFBZjtJQUF5QixJQUFBLFdBQVcsRUFBRTtJQUF0QyxHQUFnRDtJQUV6RyxRQUFNO0lBQUUsSUFBQSxvQkFBRjtJQUF3QixJQUFBLG9CQUF4QjtJQUE4QyxJQUFBLHlCQUE5QztJQUF5RSxJQUFBLHlCQUF6RTtJQUFvRyxJQUFBLE9BQXBHO0lBQTZHLElBQUEsT0FBN0c7SUFBc0gsSUFBQSxZQUF0SDtJQUFvSSxJQUFBLGVBQXBJO0lBQXFKLElBQUEsWUFBcko7SUFBbUssSUFBQTtJQUFuSyxNQUF1TCxlQUFlLENBQUM7SUFBRSxJQUFBLFdBQUY7SUFBZSxJQUFBO0lBQWYsR0FBRCxDQUE1TTtJQUVBLFFBQU0sa0JBQWtCLEdBQXVCQSxDQUFXLENBQUMsU0FBUyxrQkFBVCxRQUE0RTtJQUFBLFFBQTdCO0lBQUUsTUFBQTtJQUFGLEtBQTZCO0lBQ25JLFVBQU07SUFBRSxNQUFBO0lBQUYsUUFBZ0Msb0JBQW9CLEVBQTFEO0lBRUEsV0FBTztJQUNILE1BQUEsdUJBQXVCLENBQW9DLEtBQXBDLEVBQTRDO0lBQy9ELGNBQU0sT0FBTyxHQUFHLHlCQUF5QixDQUFDLEtBQUQsQ0FBekIsQ0FBaUMsS0FBakMsQ0FBaEI7SUFDQSxjQUFNLFVBQVUsR0FBRyxLQUFuQjtJQUVBLGVBQU8seUJBQXlCLENBQUMsR0FBRyxJQUFJLE9BQVAsR0FBaUIsT0FBakIsR0FBMkIsVUFBNUIsQ0FBaEM7SUFDSDs7SUFORSxLQUFQO0lBUUgsR0FYeUQsRUFXdkQsQ0FBQyxvQkFBRCxDQVh1RCxDQUExRDtJQWFBLFFBQU0sa0JBQWtCLEdBQXVCQSxDQUFXLENBQUMsU0FBUyxrQkFBVCxHQUEyQjtJQUNsRixVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQWdDLG9CQUFvQixFQUExRDtJQUVBLFdBQU87SUFDSCxNQUFBLHVCQUF1QixDQUFvQyxLQUFwQyxFQUE0QztJQUMvRCxlQUFPLHlCQUF5QixDQUFDLEtBQUQsQ0FBaEM7SUFDSDs7SUFIRSxLQUFQO0lBS0gsR0FSeUQsRUFRdkQsQ0FBQyxvQkFBRCxDQVJ1RCxDQUExRDtJQVVBLFNBQU87SUFDSCxJQUFBLGtCQURHO0lBRUgsSUFBQSxrQkFGRztJQUdILElBQUEsT0FIRztJQUlILElBQUEsT0FKRztJQUtILElBQUEsWUFMRztJQU1ILElBQUEsWUFORztJQU9ILElBQUEsZUFQRztJQVFILElBQUE7SUFSRyxHQUFQO0lBVUg7O0lBZ0JELE1BQU0sWUFBWSxHQUFHLENBQW9CLEdBQXBCLEVBQTBDLGFBQTFDLEVBQWtGLEtBQWxGLEtBQThIO0lBQy9JLE1BQUksYUFBYSxLQUFLLFVBQXRCLEVBQWtDO0lBQzlCLFFBQUksS0FBSyxLQUFLLGVBQWQsRUFDSSxPQUFPLElBQVAsQ0FESixLQUVLLElBQUksS0FBSyxLQUFLLGVBQWQsRUFDRCxPQUFPLEdBQUcsSUFBSSxPQUFkO0lBQ1AsR0FMRCxNQU1LLElBQUksYUFBYSxLQUFLLFVBQXRCLEVBQWtDO0lBQ25DLFFBQUksS0FBSyxLQUFLLGVBQWQsRUFDSSxPQUFPLEtBQVA7SUFDSixRQUFJLEtBQUssSUFBSSxlQUFiLEVBQ0ksT0FBTyxJQUFQO0lBQ1A7SUFDSixDQWJEO0lBd0JBOzs7O0lBSUc7OztJQUNHLFNBQVUsZUFBVixRQUFvTDtJQUFBLE1BQXBHO0lBQUUsSUFBQSxPQUFGO0lBQVcsSUFBQSxRQUFYO0lBQXFCLElBQUEsYUFBckI7SUFBb0MsSUFBQSxPQUFwQztJQUE2QyxJQUFBO0lBQTdDLEdBQW9HO0lBRXRMLFFBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFFLENBQUQsSUFBdUU7SUFBRyxJQUFBLENBQUMsQ0FBQyxjQUFGO0lBQW9CLElBQUEsT0FBTyxTQUFQLElBQUEsT0FBTyxXQUFQLFlBQUEsT0FBTyxDQUFHLENBQUgsQ0FBUDtJQUFpRCxHQUFoSixDQUF2QztJQUVBLFFBQU07SUFBRSxJQUFBLE9BQUY7SUFBVyxJQUFBLE9BQVg7SUFBb0IsSUFBQSxrQkFBa0IsRUFBRSxVQUF4QztJQUFvRCxJQUFBLGtCQUFrQixFQUFFLFVBQXhFO0lBQW9GLElBQUEsZUFBcEY7SUFBcUcsSUFBQTtJQUFyRyxNQUF5SCxhQUFhLENBQUM7SUFBRSxJQUFBLFdBQVcsRUFBRSxzQkFBZjtJQUF1QyxJQUFBLFdBQVcsRUFBRTtJQUFwRCxHQUFELENBQTVJO0lBS0EsUUFBTSwyQkFBMkIsR0FBMkNBLENBQVcsQ0FBQyxTQUFTLHVCQUFULFFBQXNFO0lBQUEsUUFBckM7SUFBRSxNQUFBO0lBQUYsS0FBcUM7SUFDMUosVUFBTTtJQUFFLE1BQUEsdUJBQXVCLEVBQUU7SUFBM0IsUUFBK0MsVUFBVSxFQUEvRDtJQUNBLFVBQU07SUFBRSxNQUFBLGtCQUFGO0lBQXNCLE1BQUE7SUFBdEIsUUFBcUMsYUFBYSxDQUFZLEVBQVosQ0FBeEQsQ0FGMEo7SUFLMUo7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsSUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxZQUFNLE9BQU8sR0FBRyxVQUFVLEVBQTFCOztJQUNBLFVBQUksT0FBTyxJQUFJLEdBQUcsSUFBSSxPQUF0QixFQUErQjtJQUMxQixRQUFBLE9BQXVDLENBQUMsT0FBeEMsR0FBa0QsT0FBbEQ7SUFDSjtJQUNKLEtBTFEsRUFLTixDQUFDLEdBQUQsRUFBTSxPQUFOLENBTE0sQ0FBVDtJQU9BLFdBQU87SUFBRSxNQUFBLGVBQWUsRUFBRSxVQUFuQjtJQUErQixNQUFBO0lBQS9CLEtBQVA7O0lBR0EsYUFBUyxnQ0FBVCxRQUFpRztJQUFBLFVBQVosRUFBRSxHQUFHO0lBQUwsT0FBWTtJQUU3RjtJQUNBO0lBQ0E7SUFDQSxVQUFJLEtBQUssR0FBb0MscUJBQXFCLENBQVksUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUQsRUFBTSxhQUFOLEVBQXFCLGVBQXJCLENBQXpCLEdBQWlFLFNBQWpFLEdBQTZFLGFBQXpGLEVBQXdHLFNBQXhHLENBQXJCLENBQXdJLEVBQXhJLENBQTdDO0lBRUEsVUFBSSxHQUFHLElBQUksT0FBWCxFQUNJLEtBQUssQ0FBQyxPQUFOLEdBQWlCLENBQUQsSUFBYyxDQUFDLENBQUMsY0FBRixFQUE5QjtJQUVKLE1BQUEsS0FBSyxHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxLQUFELENBQWhCLENBQTFCOztJQUdBLFVBQUksYUFBYSxJQUFJLFVBQXJCLEVBQWlDO0lBQzdCO0lBQ0E7SUFDQTtJQUNBLFFBQUEsS0FBSyxDQUFDLEtBQU4sR0FBYyxJQUFkO0lBQ0EsUUFBQSxLQUFLLENBQUMsUUFBTixHQUFpQixDQUFDLENBQWxCOztJQUNBLFFBQUEsS0FBSyxDQUFDLE9BQU4sR0FBZ0IsQ0FBQyxJQUFJLGVBQWUsR0FBRyxLQUFsQixFQUFyQjtJQUNILE9BUEQsTUFRSztJQUNELFlBQUksR0FBRyxLQUFLLE9BQVosRUFBcUI7SUFDakIsVUFBQSxLQUFLLENBQUMsT0FBTixHQUFnQixPQUFoQjtJQUNILFNBRkQsTUFHSztJQUNELFVBQUEsS0FBSyxDQUFDLElBQU4sR0FBYSxJQUFiO0lBQ0EsVUFBQSxLQUFLLENBQUMsUUFBTixHQUFpQixDQUFqQjtJQUNBLFVBQUEsS0FBSyxDQUFDLGNBQUQsQ0FBTCxHQUF3QixPQUFPLEdBQUcsTUFBSCxHQUFZLFNBQTNDO0lBQ0g7O0lBQ0QsUUFBQSxLQUFLLENBQUMsZUFBRCxDQUFMLEdBQXlCLFFBQVEsQ0FBQyxRQUFULEVBQXpCO0lBRUgsT0FoQzRGOzs7SUFtQzdGLE1BQUEsS0FBSyxDQUFDLE9BQU4sR0FBZ0IsUUFBUSxHQUFJLENBQUQsSUFBTTtJQUFHLFFBQUEsQ0FBQyxDQUFDLGNBQUY7SUFBbUIsT0FBL0IsR0FBb0MsS0FBSyxDQUFDLE9BQWxFO0lBRUEsYUFBTyxjQUFjLEdBQWMsRUFBZCxFQUFrQixLQUFsQixDQUFyQjtJQUNIO0lBQ0osR0ExRHNGLEVBMERwRixDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLGFBQW5CLEVBQWtDLFFBQWxDLEVBQTRDLE9BQTVDLENBMURvRixDQUF2RjtJQTREQSxRQUFNLDJCQUEyQixHQUFHVyxDQUFXLENBQUMsU0FBUyx1QkFBVCxRQUFzRTtJQUFBLFFBQXJDO0lBQUUsTUFBQTtJQUFGLEtBQXFDO0lBQ2xILFVBQU07SUFBRSxNQUFBLHVCQUF1QixFQUFFO0lBQTNCLFFBQStDLFVBQVUsQ0FBWTtJQUFFLE1BQUE7SUFBRixLQUFaLENBQS9EOztJQUVBLGFBQVMsZ0NBQVQsUUFBaUc7SUFBQSxVQUFaLEVBQUUsR0FBRztJQUFMLE9BQVk7SUFFN0YsVUFBSSxRQUFRLEdBQW9DLHFCQUFxQixDQUFZLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFELEVBQU0sYUFBTixFQUFxQixlQUFyQixDQUF6QixHQUFpRSxTQUFqRSxHQUE2RSxhQUF6RixFQUF3RyxTQUF4RyxDQUFyQixDQUF3SSxFQUF4SSxDQUFoRDs7SUFFQSxVQUFJLGFBQWEsSUFBSSxVQUFyQixFQUFpQztJQUM3QixRQUFBLFFBQVEsQ0FBQyxRQUFULEdBQW9CLENBQXBCO0lBQ0EsUUFBQSxRQUFRLENBQUMsSUFBVCxHQUFnQixJQUFoQjtJQUNBLFFBQUEsUUFBUSxDQUFDLGVBQUQsQ0FBUixHQUE0QixRQUFRLENBQUMsUUFBVCxFQUE1QjtJQUNBLFFBQUEsUUFBUSxDQUFDLGNBQUQsQ0FBUixHQUEyQixPQUFPLENBQUMsUUFBUixFQUEzQjtJQUNILE9BVDRGOzs7SUFpQjdGLE1BQUEsUUFBUSxDQUFDLE9BQVQsR0FBbUIsUUFBUSxHQUFJLENBQUQsSUFBTTtJQUFHLFFBQUEsQ0FBQyxDQUFDLGNBQUY7SUFBbUIsT0FBL0IsR0FBbUMsUUFBUSxDQUFDLE9BQXZFO0lBRUEsYUFBTyxjQUFjLEdBQWMsUUFBZCxFQUF3QixlQUFlLENBQUMsRUFBRCxDQUF2QyxDQUFyQjtJQUNIOztJQUVELFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUVILEdBM0I4QyxFQTJCNUMsQ0FBQyxVQUFELEVBQWEsUUFBYixFQUF1QixPQUF2QixFQUFnQyxJQUFoQyxFQUFzQyxhQUF0QyxDQTNCNEMsQ0FBL0M7SUE4QkEsU0FBTztJQUNILElBQUEsMkJBREc7SUFFSCxJQUFBLDJCQUZHO0lBR0gsSUFBQSxlQUhHO0lBSUgsSUFBQTtJQUpHLEdBQVA7SUFRSDs7SUM1UEssU0FBVSxlQUFWLE9BQThLO0lBQUEsTUFBOUY7SUFBRSxJQUFBLGFBQUY7SUFBaUIsSUFBQSxPQUFqQjtJQUEwQixJQUFBLE9BQTFCO0lBQW1DLElBQUE7SUFBbkMsR0FBOEY7O0lBRWhMLFFBQU0sZUFBZSxHQUFJLENBQUQsSUFBMEQsT0FBMUQsYUFBMEQsT0FBMUQsdUJBQTBELE9BQU8sQ0FBRyxZQUFZLENBQUMsQ0FBRCxFQUE2QztJQUFFLElBQUEsT0FBTyxFQUFFLENBQUM7SUFBWixHQUE3QyxDQUFmLENBQXpGOztJQUNBLFFBQU07SUFBRSxJQUFBLGVBQUY7SUFBbUIsSUFBQSxlQUFuQjtJQUFvQyxJQUFBLDJCQUFwQztJQUFpRSxJQUFBO0lBQWpFLE1BQWlHLGVBQWUsQ0FBdUI7SUFBRSxJQUFBLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBYjtJQUFzQixJQUFBLGFBQXRCO0lBQXFDLElBQUEsSUFBSSxFQUFFLFVBQTNDO0lBQXVELElBQUEsUUFBdkQ7SUFBaUUsSUFBQSxPQUFPLEVBQUU7SUFBMUUsR0FBdkIsQ0FBdEg7SUFFQSxRQUFNLHVCQUF1QixHQUF1Q0EsQ0FBVyxDQUFDLFNBQVMsdUJBQVQsUUFBc0U7SUFBQSxRQUFyQztJQUFFLE1BQUE7SUFBRixLQUFxQztJQUNsSixVQUFNO0lBQUUsTUFBQSxlQUFGO0lBQW1CLE1BQUE7SUFBbkIsUUFBd0QsMkJBQTJCLENBQUM7SUFBRSxNQUFBO0lBQUYsS0FBRCxDQUF6RjtJQUNBLFVBQU0sT0FBTyxHQUFJLE9BQU8sSUFBSSxPQUE1QjtJQUVBLElBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsWUFBTSxZQUFZLEdBQUcsZUFBZSxFQUFwQzs7SUFDQSxVQUFJLFlBQVksSUFBSSxHQUFHLEtBQUssT0FBNUIsRUFBcUM7SUFDaEMsUUFBQSxZQUFvQixDQUFDLGFBQXJCLEdBQXFDLE9BQXJDO0lBQ0o7SUFDSixLQUxRLEVBS04sQ0FBQyxPQUFELEVBQVUsR0FBVixDQUxNLENBQVQ7SUFPQSxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7O0lBRUEsYUFBUyw0QkFBVCxRQUE2RjtJQUFBOztJQUFBLFVBQVosRUFBRSxHQUFHO0lBQUwsT0FBWTtJQUV6RixVQUFJLEtBQUssR0FBb0MsZ0NBQWdDLENBQUMsRUFBRCxDQUE3RTtJQUNBLHdCQUFBLEtBQUssQ0FBQyxPQUFOLDJEQUFBLEtBQUssQ0FBQyxPQUFOLEdBQWtCLENBQUMsQ0FBQyxPQUFwQjtJQUVBLFVBQUksR0FBRyxJQUFJLE9BQVgsRUFDSSxLQUFLLENBQUMsSUFBTixHQUFhLFVBQWI7SUFFSixhQUFPLEtBQVA7SUFDSDtJQUNKLEdBdkI4RSxFQXVCNUUsQ0FBQywyQkFBRCxFQUE4QixPQUE5QixFQUF1QyxhQUF2QyxFQUFzRCxRQUF0RCxDQXZCNEUsQ0FBL0U7SUF5QkEsUUFBTSx1QkFBdUIsR0FBR1csQ0FBVyxDQUFDLFNBQVMsdUJBQVQsUUFBc0U7SUFBQSxRQUFyQztJQUFFLE1BQUE7SUFBRixLQUFxQztJQUM5RyxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQXVDLDJCQUEyQixDQUFDO0lBQUUsTUFBQTtJQUFGLEtBQUQsQ0FBeEU7O0lBRUEsYUFBUyw0QkFBVCxRQUFnRztJQUFBLFVBQWYsRUFBRSxHQUFHO0lBQUwsT0FBZTtJQUM1RixhQUFPLGdDQUFnQyxDQUFDLEtBQUQsQ0FBdkM7SUFDSDtJQUVELFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUNILEdBUjBDLEVBUXhDLENBQUMsMkJBQUQsRUFBOEIsUUFBOUIsRUFBd0MsYUFBeEMsQ0FSd0MsQ0FBM0M7SUFXQSxTQUFPO0lBQ0gsSUFBQSx1QkFERztJQUVILElBQUE7SUFGRyxHQUFQO0lBS0g7O0lDQ0Q7Ozs7O0lBS0c7O0lBQ0csU0FBVSxnQkFBVixPQUFvTztJQUFBLE1BQXRJO0lBQUUsSUFBQSxRQUFGO0lBQVksSUFBQSxhQUFaO0lBQTJCLElBQUEsbUJBQTNCO0lBQWdELElBQUEsZ0JBQWdCLEVBQUU7SUFBbEUsR0FBc0k7SUFFdE8sUUFBTSxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQyx3QkFBRCxDQUExQztJQUNBLFFBQU07SUFBRSxJQUFBLGVBQUY7SUFBbUIsSUFBQSxzQkFBbkI7SUFBMkMsSUFBQSxzQkFBM0M7SUFBbUUsSUFBQSxhQUFuRTtJQUFrRixJQUFBLFlBQWxGO0lBQWdHLElBQUEsZ0JBQWhHO0lBQWtILElBQUE7SUFBbEgsTUFBdUksaUJBQWlCLENBQWtCO0lBQUUsSUFBQSxRQUFGO0lBQVksSUFBQSxhQUFaO0lBQTJCLElBQUE7SUFBM0IsR0FBbEIsQ0FBOUosQ0FIc087O0lBT3RPLFFBQU0sQ0FBQyxZQUFELEVBQWUsZUFBZixJQUFrQyxRQUFRLENBQUMsQ0FBRCxDQUFoRDtJQUNBLFFBQU0sY0FBYyxHQUFHTCxDQUFNLENBQUMsSUFBSSxHQUFKLEVBQUQsQ0FBN0IsQ0FSc087O0lBV3RPLFFBQU0sd0JBQXdCLEdBQUdLLENBQVcsQ0FBQyxNQUFLO0lBQzlDLFFBQUksVUFBVSxHQUFHLFlBQVksR0FBRyxlQUFlLENBQUMsTUFBaEQ7SUFDQSxXQUFPLFVBQVUsSUFBSSxDQUFkLEdBQWtCLEtBQWxCLEdBQTBCLFVBQVUsSUFBSSxDQUFkLEdBQWtCLElBQWxCLEdBQXlCLE9BQTFEO0lBQ0gsR0FIMkMsRUFHekMsQ0FBQyxZQUFELEVBQWUsZUFBZSxDQUFDLE1BQS9CLENBSHlDLENBQTVDO0lBS0EsUUFBTSxzQkFBc0IsR0FBRyxpQkFBaUIsQ0FBQyx3QkFBRCxDQUFoRCxDQWhCc087SUFtQnRPOztJQUNBLFFBQU0sa0JBQWtCLEdBQUdMLENBQU0sQ0FBd0MsSUFBeEMsQ0FBakM7SUFDQSxRQUFNLDBCQUEwQixHQUFHSyxDQUFXLENBQUUsQ0FBRCxJQUF5QztJQUVwRixJQUFBLENBQUMsQ0FBQyxjQUFGO0lBRUEsVUFBTSxhQUFhLEdBQUcsc0JBQXNCLEVBQTVDOztJQUNBLFFBQUksYUFBYSxLQUFLLElBQWxCLElBQTJCLGFBQWEsS0FBSyxLQUFsQixJQUEyQixrQkFBa0IsQ0FBQyxPQUFuQixJQUE4QixJQUF4RixFQUErRjtJQUMzRixhQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFELEVBQUk7SUFBRSxRQUFBLGVBQWUsRUFBRTtJQUFuQixPQUFKLENBQWIsQ0FBdkI7SUFDSCxLQUZELE1BR0ssSUFBSSxhQUFhLEtBQUssT0FBdEIsRUFBK0I7SUFFaEMsTUFBQSxrQkFBa0IsQ0FBQyxPQUFuQixHQUE2QixJQUFJLEdBQUosRUFBN0I7O0lBQ0EsV0FBSyxJQUFJLEtBQVQsSUFBa0IsZUFBbEIsRUFBbUM7SUFDL0IsUUFBQSxrQkFBa0IsQ0FBQyxPQUFuQixDQUEyQixHQUEzQixDQUErQixLQUFLLENBQUMsS0FBckMsRUFBNEMsS0FBSyxDQUFDLFVBQU4sRUFBNUM7SUFDSDs7SUFFRCxhQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFELEVBQUk7SUFBRSxRQUFBLGVBQWUsRUFBRTtJQUFuQixPQUFKLENBQWIsQ0FBdkI7SUFDSCxLQVJJLE1BU0E7SUFBQTs7SUFDRCxhQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFELEVBQUk7SUFBRSxRQUFBLGVBQWUsMkJBQUUsa0JBQWtCLENBQUMsT0FBckIseUVBQWdDO0lBQWpELE9BQUosQ0FBYixDQUF2QjtJQUNIO0lBQ0osR0FwQjZDLEVBb0IzQyxFQXBCMkMsQ0FBOUMsQ0FyQnNPO0lBNEN0TztJQUNBOztJQUNBLFFBQU0sTUFBTSxHQUFHTCxDQUFNLENBQUMsSUFBSSxHQUFKLEVBQUQsQ0FBckI7SUFDQSxRQUFNLENBQUMsWUFBRCxFQUFlLGVBQWYsSUFBa0MsUUFBUSxDQUFDLEVBQUQsQ0FBaEQ7SUFDQSxRQUFNLENBQUMsV0FBRCxFQUFjLGdCQUFkLElBQWtDLFFBQVEsQ0FBQyxDQUFELENBQWhEO0lBRUEsUUFBTSxhQUFhLEdBQUdLLENBQVcsQ0FBQyxDQUFDLEtBQUQsRUFBZ0IsT0FBaEIsS0FBOEM7SUFDNUUsUUFBSSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7SUFDbEIsVUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLEtBQTNCLENBQUwsRUFBd0M7SUFDcEMsUUFBQSxlQUFlLENBQUMsQ0FBQyxJQUFLLENBQUMsR0FBRyxDQUFYLENBQWY7SUFDQSxRQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLEtBQTNCO0lBQ0g7SUFDSixLQUxELE1BTUs7SUFDRCxVQUFJLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLEtBQTNCLENBQUosRUFBdUM7SUFDbkMsUUFBQSxlQUFlLENBQUMsQ0FBQyxJQUFLLENBQUMsR0FBRyxDQUFYLENBQWY7SUFDQSxRQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLE1BQXZCLENBQThCLEtBQTlCO0lBQ0g7SUFDSjtJQUNKLEdBYmdDLEVBYTlCLENBQUMsZUFBRCxFQUFrQixjQUFsQixDQWI4QixDQUFqQztJQWVBOzs7SUFHK0Q7O0lBRS9ELFFBQU0sMkJBQTJCLEdBQThDQSxDQUFXLENBQWdELEtBQS9DLElBQTJEO0lBQ2xKLFdBQU8sY0FBYyxHQUFpQjtJQUFFLHVCQUFpQjtJQUFuQixLQUFqQixFQUFvRCxLQUFwRCxDQUFyQjtJQUNILEdBRnlGLEVBRXZGLENBQUMsWUFBRCxDQUZ1RixDQUExRjtJQUlBLEVBQUEsU0FBUyxDQUFDLE1BQUs7SUFDWCxJQUFBLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBTixDQUFXLE1BQU0sQ0FBQyxPQUFsQixFQUEyQixJQUEzQixDQUFnQyxHQUFoQyxDQUFELENBQWY7SUFDSCxHQUZRLEVBRU4sQ0FBQyxXQUFELENBRk0sQ0FBVDtJQUlBLFFBQU0scUJBQXFCLEdBQTJDQSxDQUFXLENBQUMsaUJBQW1GO0lBQUEsUUFBekU7SUFBRSxNQUFBLEtBQUY7SUFBUyxNQUFBLElBQVQ7SUFBZSxNQUFBLE9BQWY7SUFBd0IsTUFBQSxFQUF4QjtJQUE0QixTQUFHO0lBQS9CLEtBQXlFO0lBRWpLLFVBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxPQUFELENBQWxDO0lBRUEsSUFBQSxTQUFTLENBQUMsTUFBSztJQUNYLE1BQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxHQUFmLENBQW1CLEVBQW5CO0lBQ0EsTUFBQSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQWhCO0lBRUEsYUFBTyxNQUFLO0lBQ1IsUUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLE1BQWYsQ0FBc0IsRUFBdEI7SUFDQSxRQUFBLGdCQUFnQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQVIsQ0FBaEI7SUFDSCxPQUhEO0lBSUgsS0FSUSxFQVFOLENBQUMsRUFBRCxDQVJNLENBQVQ7SUFXQSxJQUFBLFNBQVMsQ0FBQyxNQUFLO0lBQ1gsTUFBQSxhQUFhLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBYjtJQUNILEtBRlEsRUFFTixDQUFDLEtBQUQsRUFBUSxPQUFSLENBRk0sQ0FBVDtJQUlBLFVBQU07SUFBRSxNQUFBLFFBQUY7SUFBWSxNQUFBLDJCQUFaO0lBQXlDLE1BQUE7SUFBekMsUUFBMkUsc0JBQXNCLENBQUM7SUFBRSxNQUFBLEtBQUY7SUFBUyxNQUFBLElBQVQ7SUFBZSxNQUFBLEVBQWY7SUFBbUIsTUFBQSxVQUFuQjtJQUErQixTQUFHO0lBQWxDLEtBQUQsQ0FBdkc7SUFFQSxXQUFPO0lBQ0gsTUFBQSxRQURHO0lBRUgsTUFBQSwwQkFBMEIsRUFBRUEsQ0FBVyxDQUFnRCxLQUEvQyxJQUE0RCxjQUFjLEdBQWlCLEVBQWpCLEVBQXFCLDJCQUEyQixDQUFDLHNCQUFzQixDQUFDLEtBQUQsQ0FBdkIsQ0FBaEQsQ0FBM0UsRUFBNkosQ0FBQyxzQkFBRCxFQUF5QiwyQkFBekIsQ0FBN0o7SUFGcEMsS0FBUDtJQU1ILEdBM0JnRixFQTJCOUUsQ0FBQyxzQkFBRCxFQUF5QixhQUF6QixFQUF3QyxzQkFBeEMsQ0EzQjhFLENBQWpGO0lBNkJBLFNBQU87SUFDSCxJQUFBLGlCQUFpQixFQUFFLGVBRGhCO0lBRUgsSUFBQSxxQkFGRztJQUdILElBQUEsMkJBSEc7SUFJSCxJQUFBLGVBQWUsRUFBRSx3QkFBd0IsRUFKdEM7SUFLSCxJQUFBLG9CQUFvQixFQUFHLFlBQVksR0FBRyxlQUFlLENBQUMsTUFMbkQ7SUFNSCxJQUFBLDBCQU5HO0lBT0gsSUFBQSxhQVBHO0lBUUgsSUFBQSxLQUFLLEVBQUUsWUFSSjtJQVNILElBQUEsZ0JBVEc7SUFVSCxJQUFBLGdCQVZHO0lBV0gsSUFBQTtJQVhHLEdBQVA7SUFhSDs7SUN6S0Q7Ozs7Ozs7Ozs7Ozs7SUFhRzs7SUFDRyxTQUFVLGNBQVYsT0FBOEY7SUFBQSxNQUFyRDtJQUFFLElBQUEsT0FBRjtJQUFXLElBQUE7SUFBWCxHQUFxRDtJQUVoRyxRQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxPQUFELENBQXZDO0lBQ0EsUUFBTSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxXQUFELENBQTNDO0lBQ0EsUUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUQsQ0FBL0I7SUFFQSxRQUFNLGVBQWUsR0FBR0EsQ0FBVyxDQUFDLFNBQVMsZUFBVCxDQUF5QixDQUF6QixFQUFvRDtJQUFBOztJQUNwRixVQUFNLFFBQVEsa0JBQUcsVUFBVSxFQUFiLGdEQUFHLFlBQWMsYUFBL0I7SUFDQSxJQUFlLFFBQUgsYUFBRyxRQUFILHVCQUFHLFFBQVEsQ0FBRSxZQUYyRDtJQUtwRjs7SUFDQSxRQUFJLENBQUMsQ0FBQyxNQUFGLEtBQVksUUFBWixhQUFZLFFBQVosdUJBQVksUUFBUSxDQUFFLGVBQXRCLENBQUosRUFBMkM7SUFDdkMsTUFBQSxhQUFhLENBQUMsVUFBRCxDQUFiO0lBQ0g7O0lBRUQsUUFBSSxRQUFRLEdBQUcsaUJBQWlCLEVBQWhDOztJQUVBLFFBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFGLFlBQW9CLE9BQXBDLEVBQTZDO0lBQ3pDLFVBQUksQ0FBQyxLQUFLLENBQUMsT0FBTixDQUFjLFFBQWQsQ0FBTCxFQUNJLFFBQVEsR0FBRyxDQUFDLFFBQUQsQ0FBWDtJQUVKLFVBQUksZ0JBQWdCLEdBQUcsS0FBdkI7O0lBRUEsV0FBSyxJQUFJLE9BQVQsSUFBb0IsUUFBcEIsRUFBOEI7SUFDMUIsWUFBSSxPQUFPLENBQUMsUUFBUixDQUFpQixDQUFDLENBQUMsTUFBbkIsQ0FBSixFQUFnQztJQUM1QixVQUFBLGdCQUFnQixHQUFHLElBQW5CO0lBQ0E7SUFDSDtJQUNKOztJQUVELFVBQUksQ0FBQyxnQkFBTCxFQUNJLE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDUDtJQUNKLEdBNUJrQyxFQTRCaEMsRUE1QmdDLENBQW5DO0lBOEJBLFFBQU07SUFBRSxJQUFBLHFCQUFGO0lBQXlCLElBQUE7SUFBekIsTUFBd0MsZ0JBQWdCLENBQUk7SUFDOUQsSUFBQSx5QkFBeUIsRUFBRUEsQ0FBVyxDQUFFLFVBQUQsSUFBeUI7SUFDNUQsVUFBSSxzQkFBc0IsR0FBRyxpQkFBaUIsRUFBOUM7O0lBRUEsVUFBSSxzQkFBSixFQUE0QjtJQUN4QixZQUFJLENBQUMsS0FBSyxDQUFDLE9BQU4sQ0FBYyxzQkFBZCxDQUFMLEVBQ0ksc0JBQXNCLEdBQUcsQ0FBQyxzQkFBRCxDQUF6Qjs7SUFFSixhQUFLLElBQUksU0FBVCxJQUFzQixzQkFBdEIsRUFBOEM7SUFDMUMsY0FBSSxTQUFKLGFBQUksU0FBSixlQUFJLFNBQVMsQ0FBRSxRQUFYLENBQW9CLFVBQXBCLENBQUosRUFDSTtJQUNQO0lBQ0o7O0lBRUQsTUFBQSxPQUFPLENBQUMsWUFBRCxDQUFQO0lBQ0gsS0FkcUMsRUFjbkMsRUFkbUM7SUFEd0IsR0FBSixDQUE5RDtJQW1CQSxRQUFNO0lBQUUsSUFBQTtJQUFGLE1BQXlCLGFBQWEsQ0FBSTtJQUM1QyxJQUFBLGVBQWUsRUFBRUEsQ0FBVyxDQUFFLENBQUQsSUFBZ0I7SUFDekMsWUFBTSxRQUFRLEdBQUcsQ0FBSCxhQUFHLENBQUgsdUJBQUcsQ0FBQyxDQUFFLGFBQXBCO0lBQ0EsWUFBTSxNQUFNLEdBQUcsUUFBSCxhQUFHLFFBQUgsdUJBQUcsUUFBUSxDQUFFLFdBQXpCLENBRnlDO0lBS3pDO0lBQ0E7SUFDQTtJQUNBOztJQUNBLFlBQU0sU0FBUyxHQUFJLENBQUQsSUFBa0I7SUFBRyxZQUFJLE9BQU8sRUFBWCxFQUFlLGVBQWUsQ0FBQyxDQUFELENBQWY7SUFBcUIsT0FBM0U7O0lBQ0EsWUFBTSxVQUFVLEdBQUksQ0FBRCxJQUFrQjtJQUFHLFlBQUksT0FBTyxFQUFYLEVBQWUsZUFBZSxDQUFDLENBQUQsQ0FBZjtJQUFxQixPQUE1RTs7SUFDQSxZQUFNLE9BQU8sR0FBSSxDQUFELElBQXFCO0lBQUcsWUFBSSxDQUFDLENBQUMsR0FBRixLQUFVLFFBQWQsRUFBd0I7SUFBRSxVQUFBLGFBQWEsQ0FBQyxRQUFELENBQWI7SUFBMEI7SUFBRSxPQUE5Rjs7SUFFQSxNQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxnQkFBUixDQUF5QixXQUF6QixFQUFzQyxTQUF0QyxFQUFpRDtJQUFFLFFBQUEsT0FBTyxFQUFFO0lBQVgsT0FBakQ7SUFDQSxNQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxVQUF2QyxFQUFtRDtJQUFFLFFBQUEsT0FBTyxFQUFFO0lBQVgsT0FBbkQ7SUFDQSxNQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxnQkFBUixDQUF5QixTQUF6QixFQUFvQyxPQUFwQztJQUVBLGFBQU8sTUFBSztJQUNSLFFBQUEsTUFBTSxTQUFOLElBQUEsTUFBTSxXQUFOLFlBQUEsTUFBTSxDQUFFLG1CQUFSLENBQTRCLFdBQTVCLEVBQXlDLFNBQXpDO0lBQ0EsUUFBQSxNQUFNLFNBQU4sSUFBQSxNQUFNLFdBQU4sWUFBQSxNQUFNLENBQUUsbUJBQVIsQ0FBNEIsWUFBNUIsRUFBMEMsVUFBMUM7SUFDQSxRQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxtQkFBUixDQUE0QixTQUE1QixFQUF1QyxPQUF2QztJQUNILE9BSkQ7SUFLSCxLQXRCMkIsRUFzQnpCLEVBdEJ5QjtJQURnQixHQUFKLENBQTVDO0lBMEJBLFNBQU87SUFBRSxJQUFBLG1CQUFtQixFQUFFQSxDQUFXLENBQStCLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFELENBQW5CLENBQTdELEVBQTBGLENBQUMscUJBQUQsRUFBd0Isa0JBQXhCLENBQTFGO0lBQWxDLEdBQVA7SUFDSDtJQUVEOzs7OztJQUtHOztJQUNHLFNBQVUsUUFBVixRQUF3RztJQUFBLE1BQW5EO0lBQUUsSUFBQSxJQUFGO0lBQVEsSUFBQTtJQUFSLEdBQW1EO0lBRTFHLFFBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDLE9BQUQsQ0FBdkM7SUFFQSxRQUFNLENBQUMsb0JBQUQsRUFBdUIsdUJBQXZCLElBQWtELFFBQVEsQ0FBQyxLQUFELENBQWhFO0lBQ0EsRUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiO0lBRUEsUUFBTTtJQUFFLElBQUEsRUFBRSxFQUFFLE9BQU47SUFBZSxJQUFBLGdCQUFnQixFQUFFLGVBQWpDO0lBQWtELElBQUEsb0JBQW9CLEVBQUU7SUFBeEUsTUFBdUcsV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXhIO0lBQ0EsUUFBTTtJQUFFLElBQUEsRUFBRSxFQUFFLE1BQU47SUFBYyxJQUFBLGdCQUFnQixFQUFFLGNBQWhDO0lBQWdELElBQUEsb0JBQW9CLEVBQUU7SUFBdEUsTUFBb0csV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXJIO0lBQ0EsUUFBTTtJQUFFLElBQUEsRUFBRSxFQUFFLE9BQU47SUFBZSxJQUFBLGdCQUFnQixFQUFFLGVBQWpDO0lBQWtELElBQUEsb0JBQW9CLEVBQUU7SUFBeEUsTUFBdUcsV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXhIO0lBRUEsUUFBTTtJQUFFLElBQUEsa0JBQWtCLEVBQUUsa0JBQXRCO0lBQTBDLElBQUEsVUFBVSxFQUFFO0lBQXRELE1BQTBFLGFBQWEsQ0FBZSxFQUFmLENBQTdGO0lBQ0EsUUFBTTtJQUFFLElBQUE7SUFBRixNQUEwQixjQUFjLENBQUM7SUFBRSxJQUFBLE9BQU8sRUFBRSxhQUFYO0lBQTBCLElBQUEsV0FBVyxFQUFFO0lBQXZDLEdBQUQsQ0FBOUM7SUFFQSxRQUFNLGdCQUFnQixHQUFHQSxDQUFXLENBQUMsU0FBUyxnQkFBVCxHQUF5QjtJQUUxRCxhQUFTLHFCQUFULENBQWdGLEtBQWhGLEVBQXdGO0lBQ3BGLGFBQU8sY0FBYyxHQUFvQjtJQUFFLFFBQUEsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDLFVBQUQ7SUFBbEMsT0FBcEIsRUFBc0UsS0FBdEUsQ0FBckI7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFDSCxHQVBtQyxFQU9qQyxFQVBpQyxDQUFwQzs7SUFTQSxRQUFNLGFBQWEsR0FBRyxpQkFBbUc7SUFBQSxRQUEzQztJQUFFLG9CQUFjLFNBQWhCO0lBQTJCLE1BQUEsSUFBM0I7SUFBaUMsU0FBRztJQUFwQyxLQUEyQztJQUNySCxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQXdCLFlBQVksQ0FBZTtJQUFFLE1BQUEsVUFBVSxFQUFFO0lBQWQsS0FBZixDQUExQztJQUNBLFVBQU0sRUFBRSxHQUFHLDBCQUEwQixDQUFDLGlCQUFELENBQTFCLENBQThDLEVBQTlDLENBQVg7SUFDQSxVQUFNLEVBQUUsR0FBRyxlQUFlLENBQUMsRUFBRCxDQUExQjtJQUNBLFVBQU0sTUFBTSxHQUFHLHlCQUF5QixDQUFDLGtCQUFELENBQXpCLENBQThDLEVBQTlDLENBQWY7SUFDQSxXQUFPLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLGNBQWMsR0FBaUIsa0JBQWtCLENBQUM7SUFBRSxNQUFBLElBQUksRUFBRTtJQUFSLEtBQUQsQ0FBbkMsRUFBeUQsb0JBQW9CLEdBQUcsTUFBSCxHQUFZLEVBQXpGLENBQWYsQ0FBcEIsQ0FBeEI7SUFDSCxHQU5EOztJQVFBLFFBQU0sYUFBYSxHQUFHQSxDQUFXLENBQUMsU0FBUyxhQUFULEdBQXNCO0lBRXBELFVBQU0sa0JBQWtCLEdBQUcsVUFBd0QsS0FBeEQsRUFBZ0U7SUFDdkYsYUFBTyxlQUFlLENBQUMsS0FBRCxDQUF0QjtJQUNILEtBRkQ7O0lBSUEsV0FBTztJQUFFLE1BQUE7SUFBRixLQUFQO0lBQ0gsR0FQZ0MsRUFPOUIsRUFQOEIsQ0FBakM7SUFTQSxRQUFNLFlBQVksR0FBR0EsQ0FBVyxDQUFDLFNBQVMsWUFBVCxRQUE0RjtJQUFBLFFBQXpDO0lBQUUsTUFBQTtJQUFGLEtBQXlDO0lBQ3pILElBQUEsdUJBQXVCLENBQUMsV0FBRCxDQUF2Qjs7SUFFQSxVQUFNLGlCQUFpQixHQUFHLFVBQXVELEtBQXZELEVBQStEO0lBQ3JGLGFBQU8sY0FBYyxDQUFDLEtBQUQsQ0FBckI7SUFDSCxLQUZEOztJQUlBLFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUNILEdBUitCLEVBUTdCLEVBUjZCLENBQWhDO0lBWUEsU0FBTztJQUNILElBQUEsYUFERztJQUVILElBQUEsYUFGRztJQUdILElBQUEsWUFIRztJQUlILElBQUE7SUFKRyxHQUFQO0lBTUg7SUFHRDs7Ozs7SUFLRzs7SUFDRyxTQUFVLGFBQVYsQ0FBd0IsVUFBeEIsRUFBMkM7SUFDN0MsUUFBTSxDQUFDLGlCQUFELEVBQW9CLGlCQUFwQixJQUF5QyxlQUFlLENBQWdCLElBQWhCLENBQTlEO0lBQ0EsUUFBTSxDQUFDLGtCQUFELEVBQXFCLGtCQUFyQixJQUEyQyxlQUFlLENBQWdCLElBQWhCLENBQWhFO0lBRUEsRUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxRQUFJLFVBQUosRUFBZ0I7SUFFWjtJQUNBO0lBQ0EsWUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUFuRDtJQUNBLFlBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsVUFBcEQsQ0FMWTs7SUFRWixVQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxlQUFULENBQXlCLFdBQWxEO0lBQ0EsVUFBSSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUFuRCxDQVRZOztJQVlaLE1BQUEsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsU0FBekIsQ0FBbUMsR0FBbkMsQ0FBdUMsd0JBQXZDLEVBWlk7SUFlWjs7SUFDQSxNQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLE9BQXpCLENBQWlDLGNBQWpDLElBQW1ELENBQUMsRUFBRSxRQUFRLENBQUMsZUFBVCxDQUF5QixPQUF6QixDQUFpQyxjQUFqQyxLQUFvRCxHQUF0RCxJQUE2RCxDQUE5RCxFQUFpRSxRQUFqRSxFQUFuRCxDQWhCWTtJQW1CWjs7SUFDQSxVQUFJLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxlQUFULENBQXlCLFdBQXJEO0lBQ0EsVUFBSSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUF0RDtJQUNBLFVBQUksY0FBYyxHQUFJLHFCQUFxQixHQUFHLGtCQUE5QztJQUNBLFVBQUksZUFBZSxHQUFJLHNCQUFzQixHQUFHLG1CQUFoRCxDQXZCWTs7SUEwQlosVUFBSSxjQUFjLEdBQUcsRUFBckIsRUFDSSxjQUFjLEdBQUcsQ0FBakI7SUFDSixVQUFJLGVBQWUsR0FBRyxFQUF0QixFQUNJLGVBQWUsR0FBRyxDQUFsQixDQTdCUTs7SUFnQ1osTUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixLQUF6QixDQUErQixXQUEvQixDQUEyQyx3QkFBM0MsRUFBcUUsR0FBRyxjQUFjLElBQXRGO0lBQ0EsTUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixLQUF6QixDQUErQixXQUEvQixDQUEyQyx5QkFBM0MsRUFBc0UsR0FBRyxlQUFlLElBQXhGO0lBQ0EsTUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixLQUF6QixDQUErQixXQUEvQixDQUEyQyx1QkFBM0MsRUFBb0UsR0FBRyxpQkFBaUIsSUFBeEY7SUFDQSxNQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLEtBQXpCLENBQStCLFdBQS9CLENBQTJDLHdCQUEzQyxFQUFxRSxHQUFHLGtCQUFrQixJQUExRjtJQUVBLE1BQUEsaUJBQWlCLENBQUMsY0FBRCxDQUFqQjtJQUNBLE1BQUEsa0JBQWtCLENBQUMsZUFBRCxDQUFsQjtJQUVBLGFBQU8sTUFBSztJQUNSO0lBQ0EsUUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixPQUF6QixDQUFpQyxjQUFqQyxJQUFtRCxDQUFDLEVBQUUsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsT0FBekIsQ0FBaUMsY0FBakMsS0FBb0QsR0FBdEQsSUFBNkQsQ0FBOUQsRUFBaUUsUUFBakUsRUFBbkQ7O0lBQ0EsWUFBSSxRQUFRLENBQUMsZUFBVCxDQUF5QixPQUF6QixDQUFpQyxjQUFqQyxLQUFvRCxHQUF4RCxFQUE2RDtJQUV6RDtJQUNBLFVBQUEsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsZUFBekIsQ0FBeUMsb0JBQXpDO0lBQ0EsVUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixDQUFtQyxNQUFuQyxDQUEwQyx3QkFBMUMsRUFKeUQ7SUFPekQ7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsZ0JBQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsS0FBekIsQ0FBK0IsY0FBOUQ7SUFDQSxVQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLEtBQXpCLENBQStCLGNBQS9CLEdBQWdELE1BQWhEO0lBQ0EsVUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixRQUF6QixDQUFrQztJQUFFLFlBQUEsR0FBRyxFQUFFLGlCQUFQO0lBQTBCLFlBQUEsSUFBSSxFQUFFLGtCQUFoQztJQUFvRCxZQUFBLFFBQVEsRUFBRTtJQUE5RCxXQUFsQztJQUNBLFVBQUEsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsS0FBekIsQ0FBK0IsY0FBL0IsR0FBZ0Qsc0JBQWhEO0lBQ0g7SUFDSixPQW5CRDtJQXFCSDtJQUNKLEdBL0RRLEVBK0ROLENBQUMsVUFBRCxDQS9ETSxDQUFUO0lBaUVBLFNBQU87SUFBRSxJQUFBLGlCQUFGO0lBQXFCLElBQUE7SUFBckIsR0FBUDtJQUNIOztJQ3JRSyxTQUFVLGFBQVYsT0FBaUo7SUFBQSxNQUF0RjtJQUFFLElBQUEsSUFBRjtJQUFRLElBQUE7SUFBUixHQUFzRjtJQUNuSjtJQUNBO0lBQ0EsUUFBTTtJQUFFLElBQUEsZ0JBQUY7SUFBb0IsSUFBQSxZQUFwQjtJQUFrQyxJQUFBLGFBQWxDO0lBQWlELElBQUE7SUFBakQsTUFBbUUsUUFBUSxDQUFnQjtJQUFFLElBQUEsSUFBRjtJQUFRLElBQUE7SUFBUixHQUFoQixDQUFqRjtJQUVBLFFBQU0saUJBQWlCLEdBQUdXLENBQVcsQ0FBQyxNQUE0QjtJQUM5RCxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQTRCLGdCQUFnQixFQUFsRDtJQUNBLFdBQU87SUFBRSxNQUFBLHNCQUFzQixFQUFFO0lBQTFCLEtBQVA7SUFDSCxHQUhvQyxFQUdsQyxDQUFDLGdCQUFELENBSGtDLENBQXJDO0lBS0EsUUFBTSxhQUFhLEdBQUdBLENBQVcsQ0FBQyxTQUFpRTtJQUFBLFFBQTdDO0lBQUUsTUFBQTtJQUFGLEtBQTZDO0lBQy9GLFVBQU07SUFBRSxNQUFBO0lBQUYsUUFBd0IsWUFBWSxDQUFJO0lBQUUsTUFBQTtJQUFGLEtBQUosQ0FBMUM7SUFDQSxXQUFPO0lBQUUsTUFBQSxrQkFBa0IsRUFBRTtJQUF0QixLQUFQO0lBQ0gsR0FIZ0MsRUFHOUIsQ0FBQyxnQkFBRCxDQUg4QixDQUFqQztJQUlBLFFBQU0sY0FBYyxHQUFHLGFBQXZCO0lBRUEsUUFBTSxjQUFjLEdBQUdBLENBQVcsQ0FBQyxNQUF3QjtJQUN2RCxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQXlCLGFBQWEsRUFBNUM7SUFDQSxXQUFPO0lBQUUsTUFBQSxtQkFBbUIsRUFBRTtJQUF2QixLQUFQO0lBQ0gsR0FIaUMsRUFHL0IsQ0FBQyxhQUFELENBSCtCLENBQWxDO0lBS0EsU0FBTztJQUNILElBQUEsY0FERztJQUVILElBQUEsY0FGRztJQUdILElBQUEsYUFIRztJQUlILElBQUE7SUFKRyxHQUFQO0lBTUg7O0lDQ0ssU0FBVSxtQkFBVixPQUFrTDtJQUFBLE1BQXRDLEVBQUUsR0FBRztJQUFMLEdBQXNDO0lBR3BMLFFBQU07SUFBRSxJQUFBLGdCQUFGO0lBQW9CLElBQUE7SUFBcEIsTUFBd0MsV0FBVyxDQUFJLEVBQUosQ0FBekQ7SUFFQSxRQUFNO0lBQUUsSUFBQSxvQkFBRjtJQUF3QixJQUFBLG9CQUF4QjtJQUE4QyxJQUFBLHlCQUE5QztJQUF5RSxJQUFBO0lBQXpFLE1BQXVHLGVBQWUsQ0FBQztJQUFFLElBQUEsV0FBVyxFQUFFLHFCQUFmO0lBQXNDLElBQUEsV0FBVyxFQUFFO0lBQW5ELEdBQUQsQ0FBNUg7SUFDQSxRQUFNO0lBQUUsSUFBQSxzQkFBRjtJQUEwQixJQUFBLHNCQUExQjtJQUFrRCxJQUFBLGVBQWxEO0lBQW1FLElBQUEsZUFBbkU7SUFBb0YsSUFBQSxnQkFBcEY7SUFBc0csSUFBQSxZQUF0RztJQUFvSCxJQUFBLGFBQXBIO0lBQW1JLElBQUE7SUFBbkksTUFBd0osaUJBQWlCLENBQXNELEVBQUUsR0FBRyxJQUFMO0lBQVcsSUFBQSxtQkFBbUIsRUFBRTtJQUFoQyxHQUF0RCxDQUEvSztJQUNBLFFBQU07SUFBRSxJQUFBO0lBQUYsTUFBZ0Msb0JBQW9CLEVBQTFEO0lBRUEsUUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLE1BQW5DO0lBRUEsUUFBTSxDQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFlBQTFCLElBQTBDLFFBQVEsQ0FBQyxLQUFELENBQXhEO0lBRUEsUUFBTSxtQkFBbUIsR0FBSSxDQUFDLENBQUMsZ0JBQS9CO0lBRUEsRUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFVBQXBCLEVBQWdDLEVBQUUsQ0FBbEMsRUFBcUM7SUFDakMsTUFBQSxlQUFlLENBQUMsQ0FBRCxDQUFmLENBQW1CLHNCQUFuQixDQUEwQyxtQkFBMUM7SUFDSDtJQUNKLEdBSlEsRUFJTixDQUFDLG1CQUFELEVBQXNCLFVBQXRCLENBSk0sQ0FBVDtJQU1BLFFBQU0sbUJBQW1CLEdBQXlDVyxDQUFXLENBQUUsSUFBRCxJQUF5RDtJQUFBOztJQUVuSSxVQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBdEI7SUFDQSxVQUFNLENBQUMsbUJBQUQsRUFBc0Isc0JBQXRCLElBQWdELFFBQVEsQ0FBQyxLQUFELENBQTlEO0lBQ0EsVUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLFFBQUQsQ0FBbkM7SUFDQSxVQUFNO0lBQUUsTUFBQSxrQkFBRjtJQUFzQixNQUFBO0lBQXRCLFFBQXFDLGFBQWEsQ0FBSSxFQUFKLENBQXhEO0lBQ0EsVUFBTSxjQUFjLEdBQUcsaUJBQWlCLG1CQUFDLElBQUksQ0FBQyxRQUFOLDJEQUFtQixNQUFLLEVBQXhCLENBQXhDO0lBRUEsVUFBTTtJQUFFLE1BQUEsUUFBRjtJQUFZLE1BQUEsNkJBQVo7SUFBMkMsTUFBQTtJQUEzQyxRQUEyRSxzQkFBc0IsQ0FBQyxFQUFFLEdBQUcsSUFBTDtJQUFXLE1BQUE7SUFBWCxLQUFELENBQXZHO0lBRUEsSUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixZQUFNLE9BQU8sR0FBRyxVQUFVLEVBQTFCOztJQUNBLFVBQUksT0FBTyxJQUFJLFlBQVksRUFBM0IsRUFBK0I7SUFDM0IsUUFBQSxjQUFjLFNBQWQsSUFBQSxjQUFjLFdBQWQsWUFBQSxjQUFjLENBQUc7SUFBRSxVQUFBLE1BQU0sRUFBRSxPQUFWO0lBQW1CLFVBQUEsYUFBYSxFQUFFLE9BQWxDO0lBQTJDLFdBQUMsV0FBRCxHQUFlO0lBQUUsWUFBQSxRQUFRLEVBQUU7SUFBWjtJQUExRCxTQUFILENBQWQ7SUFDSDtJQUNKLEtBTGMsRUFLWixDQUFDLFFBQUQsQ0FMWSxDQUFmO0lBT0EsV0FBTztJQUFFLE1BQUEsd0JBQUY7SUFBNEIsTUFBQTtJQUE1QixLQUFQOztJQUVBLGFBQVMsd0JBQVQsQ0FBcUUsS0FBckUsRUFBNkU7SUFDekUsWUFBTSxRQUFRLEdBQTRCLHFCQUFxQixDQUFLLENBQUQsSUFBTTtJQUNyRSxRQUFBLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBTixDQUFmO0lBQ0EsUUFBQSxjQUFjLFNBQWQsSUFBQSxjQUFjLFdBQWQsWUFBQSxjQUFjLENBQUcsRUFBRSxHQUFHLENBQUw7SUFBUSxXQUFDLFdBQUQsR0FBZTtJQUFFLFlBQUEsUUFBUSxFQUFFLENBQUMsV0FBVztJQUF4QjtJQUF2QixTQUFILENBQWQ7SUFDQSxRQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0gsT0FKOEQsRUFJNUQ7SUFBRSxRQUFBLEtBQUssRUFBRSxtQkFBbUIsR0FBRyxTQUFILEdBQWU7SUFBM0MsT0FKNEQsQ0FBckIsQ0FJaUIsRUFKakIsQ0FBMUM7SUFNQSxNQUFBLEtBQUssQ0FBQyxJQUFOLEdBQWEsUUFBYjtJQUNBLE1BQUEsS0FBSyxDQUFDLGNBQUQsQ0FBTCxHQUF5QixVQUFELENBQWEsUUFBYixFQUF4QjtJQUNBLE1BQUEsS0FBSyxDQUFDLGVBQUQsQ0FBTCxHQUF5QixDQUFDLElBQUksQ0FBQyxLQUFMLEdBQWEsQ0FBZCxFQUFpQixRQUFqQixFQUF6QjtJQUNBLE1BQUEsS0FBSyxDQUFDLGVBQUQsQ0FBTCxHQUF5QixDQUFDLFFBQUQsYUFBQyxRQUFELGNBQUMsUUFBRCxHQUFhLEtBQWIsRUFBb0IsUUFBcEIsRUFBekI7SUFFQSxhQUFPLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLGNBQWMsR0FBTSxRQUFOLEVBQWdCLEtBQWhCLENBQWYsQ0FBNUIsQ0FBekI7SUFDSDtJQUVKLEdBbEM0RSxFQWtDMUUsQ0FBQyxzQkFBRCxFQUF5QixVQUF6QixFQUFxQyxtQkFBckMsQ0FsQzBFLENBQTdFO0lBb0NBLFFBQU0sb0JBQW9CLEdBQUdBLENBQVcsQ0FBQyxTQUFTLG9CQUFULEdBQTZCO0lBQ2xFLGFBQVMseUJBQVQsQ0FBc0UsS0FBdEUsRUFBOEU7SUFDMUUsWUFBTTtJQUFFLFFBQUE7SUFBRixVQUFnQyxvQkFBb0IsRUFBMUQ7SUFDQSxhQUFPLHlCQUF5QixDQUFDLEtBQUQsQ0FBaEM7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFDSCxHQVB1QyxFQU9yQyxDQUFDLG9CQUFELENBUHFDLENBQXhDO0lBU0EsU0FBTztJQUFFLElBQUEsbUJBQUY7SUFBdUIsSUFBQSxvQkFBdkI7SUFBNkMsSUFBQSxvQkFBN0M7SUFBbUUsSUFBQSxhQUFuRTtJQUFrRixJQUFBLGdCQUFsRjtJQUFvRyxJQUFBLGdCQUFwRztJQUFzSCxJQUFBLEtBQUssRUFBRSxZQUE3SDtJQUEySSxJQUFBO0lBQTNJLEdBQVA7O0lBR0EsV0FBUyxvQkFBVCxDQUFpRSxLQUFqRSxFQUF5RTtJQUNyRSxJQUFBLEtBQUssQ0FBQyxJQUFOLEdBQWEsU0FBYjtJQUNBLElBQUEsS0FBSyxDQUFDLHNCQUFELENBQUwsR0FBZ0MsTUFBaEM7SUFDQSxXQUFPLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLGNBQWMsR0FBTTtJQUFFLE1BQUEsU0FBRjtJQUFhLE1BQUEsT0FBYjtJQUFzQixNQUFBO0lBQXRCLEtBQU4sRUFBMEMsS0FBMUMsQ0FBZixDQUExQixDQUFqQixDQUE3QjtJQUNIOztJQUlELFdBQVMsU0FBVCxDQUFtQixDQUFuQixFQUFtQztJQUFJLFFBQUksQ0FBQyxDQUFDLEdBQUYsSUFBUyxPQUFiLEVBQXNCLFlBQVksQ0FBQyxJQUFELENBQVo7SUFBcUI7O0lBQ2xGLFdBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFpQztJQUFJLFFBQUksQ0FBQyxDQUFDLEdBQUYsSUFBUyxPQUFiLEVBQXNCLFlBQVksQ0FBQyxLQUFELENBQVo7SUFBc0I7O0lBQ2pGLFdBQVMsVUFBVCxDQUFvQixDQUFwQixFQUFpQztJQUFJLElBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtJQUFzQjtJQUU5RDs7SUM5RUssU0FBVSxvQkFBVixPQUE2TjtJQUFBLE1BQS9FO0lBQUUsSUFBQSxhQUFGO0lBQWlCLElBQUEsUUFBakI7SUFBMkIsSUFBQSxhQUEzQjtJQUEwQyxPQUFHO0lBQTdDLEdBQStFO0lBRS9OLFFBQU0sQ0FBQyxlQUFELEVBQWtCLGtCQUFsQixFQUFzQyxrQkFBdEMsSUFBNEQsUUFBUSxDQUFDLEtBQUQsQ0FBMUU7SUFFQSxRQUFNO0lBQUUsSUFBQSxvQkFBRjtJQUF3QixJQUFBLG9CQUF4QjtJQUE4QyxJQUFBLHlCQUE5QztJQUF5RSxJQUFBLHlCQUF6RTtJQUFvRyxJQUFBO0lBQXBHLE1BQXdILGVBQWUsQ0FBQztJQUFFLElBQUEsV0FBVyxFQUFFLHFCQUFmO0lBQXNDLElBQUEsV0FBVyxFQUFFO0lBQW5ELEdBQUQsQ0FBN0k7SUFDQSxRQUFNO0lBQUUsSUFBQSxzQkFBRjtJQUEwQixJQUFBLHNCQUExQjtJQUFrRCxJQUFBLGVBQWxEO0lBQW1FLElBQUEsZUFBbkU7SUFBb0YsSUFBQSxnQkFBcEY7SUFBc0csSUFBQSxhQUF0RztJQUFxSCxJQUFBLFlBQXJIO0lBQW1JLElBQUEsZ0JBQW5JO0lBQXFKLElBQUE7SUFBckosTUFBMEssaUJBQWlCLENBQWtCLEVBQUUsR0FBRyxJQUFMO0lBQVcsSUFBQSxtQkFBbUIsRUFBRTtJQUFoQyxHQUFsQixDQUFqTTtJQUNBLFFBQU07SUFBRSxJQUFBO0lBQUYsTUFBZ0Msb0JBQW9CLEVBQTFEO0lBQ0EsUUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsUUFBRCxhQUFDLFFBQUQsY0FBQyxRQUFELEdBQWMsTUFBSyxFQUFuQixDQUF4QyxDQVArTjtJQVUvTjs7SUFDQSxRQUFNO0lBQUUsSUFBQTtJQUFGLE1BQTRCLGdCQUFnQixDQUFDO0lBQUUsSUFBQSxxQkFBcUIsRUFBRUEsQ0FBVyxDQUFFLGFBQUQ7SUFBQTs7SUFBQSxhQUFnQyxrQkFBa0IsQ0FBQyxDQUFDLHNCQUFFLGVBQWUsRUFBakIsNkNBQUUsaUJBQW1CLFFBQW5CLENBQTRCLGFBQTVCLENBQUYsQ0FBRixDQUFsRDtJQUFBLEtBQUQsRUFBcUcsRUFBckc7SUFBcEMsR0FBRCxDQUFsRDtJQUNBLEVBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsUUFBSSxDQUFDLGVBQUwsRUFDSSxnQkFBZ0IsQ0FBQyxhQUFELENBQWhCO0lBQ1AsR0FIUSxFQUdOLENBQUMsZUFBRCxFQUFrQixhQUFsQixFQUFpQyxnQkFBakMsQ0FITSxDQUFUO0lBS0EsRUFBQSxZQUFZLENBQUM7SUFDVCxJQUFBLGNBQWMsRUFBRSxhQURQO0lBRVQsSUFBQSxlQUZTO0lBR1QsSUFBQSxZQUFZLEVBQUUsQ0FBQyxDQUFELEVBQUksUUFBSjtJQUFBOztJQUFBLG1DQUFpQixlQUFlLENBQUMsQ0FBRCxDQUFoQyx1REFBaUIsbUJBQW9CLFdBQXBCLENBQWdDLFFBQWhDLENBQWpCO0lBQUEsS0FITDtJQUlULElBQUEsWUFBWSxFQUFHLENBQUQ7SUFBQTs7SUFBQSw2REFBUSxlQUFlLENBQUMsQ0FBRCxDQUF2Qix3REFBUSxvQkFBb0IsV0FBcEIsRUFBUix5RUFBNkMsSUFBN0M7SUFBQTtJQUpMLEdBQUQsQ0FBWjtJQU9BLEVBQUEsZUFBZSxDQUFDLE1BQUs7SUFDakIsSUFBQSxlQUFlLENBQUMsYUFBRCxDQUFmO0lBQ0gsR0FGYyxFQUVaLENBQUMsYUFBRCxFQUFnQixlQUFlLENBQUMsTUFBaEMsQ0FGWSxDQUFmO0lBSUEsUUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLE1BQW5DO0lBRUEsUUFBTSxvQkFBb0IsR0FBMENXLENBQVcsQ0FBRSxJQUFELElBQXdHO0lBRXBMLFVBQU0sQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixXQUF4QixJQUF1QyxRQUFRLENBQWlCLElBQWpCLENBQXJEO0lBQ0EsVUFBTTtJQUFFLE1BQUEsUUFBRjtJQUFZLE1BQUEsNkJBQVo7SUFBMkMsTUFBQTtJQUEzQyxRQUEyRSxzQkFBc0IsQ0FBQztJQUFFLE1BQUEsV0FBRjtJQUFlLE1BQUEsV0FBZjtJQUE0QixTQUFHO0lBQS9CLEtBQUQsQ0FBdkc7SUFDQSxVQUFNO0lBQUUsTUFBQSxVQUFGO0lBQWMsTUFBQTtJQUFkLFFBQXFDLGFBQWEsQ0FBZSxFQUFmLENBQXhEO0lBQ0EsVUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQW5CO0lBRUEsSUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxZQUFNLE9BQU8sR0FBRyxVQUFVLEVBQTFCOztJQUNBLFVBQUksT0FBTyxJQUFJLFFBQVgsSUFBdUIsYUFBYSxJQUFJLE9BQTVDLEVBQXFEO0lBQ2pELFFBQUEsY0FBYyxTQUFkLElBQUEsY0FBYyxXQUFkLFlBQUEsY0FBYyxDQUFHO0lBQUUsVUFBQSxNQUFNLEVBQUUsT0FBVjtJQUFtQixVQUFBLGFBQWEsRUFBRSxPQUFsQztJQUEyQyxXQUFDLFdBQUQsR0FBZTtJQUFFLFlBQUEsYUFBYSxFQUFFO0lBQWpCO0lBQTFELFNBQUgsQ0FBZDtJQUNIO0lBQ0osS0FMUSxFQUtOLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsS0FBMUIsQ0FMTSxDQUFUO0lBT0EsV0FBTztJQUFFLE1BQUEseUJBQUY7SUFBNkIsTUFBQSxRQUE3QjtJQUF1QyxNQUFBLFFBQXZDO0lBQWlELE1BQUE7SUFBakQsS0FBUDs7SUFFQSxhQUFTLHlCQUFULENBQXNFLEtBQXRFLEVBQThFO0lBQzFFLFlBQU0sUUFBUSxHQUE0QixxQkFBcUIsQ0FBSyxDQUFELElBQU07SUFDckUsUUFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBZjtJQUNBLGNBQU0sT0FBTyxHQUFHLFVBQVUsRUFBMUI7SUFDQSxZQUFJLE9BQUosRUFDSSxjQUFjLFNBQWQsSUFBQSxjQUFjLFdBQWQsWUFBQSxjQUFjLENBQUc7SUFBRSxVQUFBLE1BQU0sRUFBRSxPQUFWO0lBQW1CLFVBQUEsYUFBYSxFQUFFLE9BQWxDO0lBQTJDLFdBQUMsV0FBRCxHQUFlO0lBQUUsWUFBQSxhQUFhLEVBQUU7SUFBakI7SUFBMUQsU0FBSCxDQUFkO0lBQ0osUUFBQSxDQUFDLENBQUMsY0FBRjtJQUNILE9BTjhELEVBTTVELFNBTjRELENBQXJCLENBTTVCLEVBTjRCLENBQTFDO0lBUUEsTUFBQSxLQUFLLENBQUMsSUFBTixHQUFhLFFBQWI7SUFDQSxNQUFBLEtBQUssQ0FBQyxjQUFELENBQUwsR0FBeUIsVUFBRCxDQUFhLFFBQWIsRUFBeEI7SUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsQ0FBQyxJQUFJLENBQUMsS0FBTCxHQUFhLENBQWQsRUFBaUIsUUFBakIsRUFBekI7SUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsQ0FBQyxRQUFELGFBQUMsUUFBRCxjQUFDLFFBQUQsR0FBYSxLQUFiLEVBQW9CLFFBQXBCLEVBQXpCO0lBRUEsYUFBTywyQkFBMkIsQ0FBQyxjQUFjLEdBQWlCLFFBQWpCLEVBQTJCLGtCQUFrQixDQUFDLEtBQUQsQ0FBN0MsQ0FBZixDQUFsQztJQUNIO0lBQ0osR0FoQzhFLEVBZ0M1RSxDQUFDLHNCQUFELEVBQXlCLGFBQXpCLEVBQXdDLFVBQXhDLENBaEM0RSxDQUEvRTtJQW1DQSxRQUFNLHFCQUFxQixHQUFHVyxDQUFXLENBQUMsU0FBUyxxQkFBVCxHQUE4QjtJQUNwRSxhQUFTLDBCQUFULENBQXVFLEtBQXZFLEVBQStFO0lBQzNFLFlBQU07SUFBRSxRQUFBO0lBQUYsVUFBZ0Msb0JBQW9CLEVBQTFEO0lBQ0EsTUFBQSx5QkFBeUIsQ0FBQyxLQUFELENBQXpCO0lBQ0g7O0lBRUQsV0FBTztJQUFFLE1BQUE7SUFBRixLQUFQO0lBQ0gsR0FQd0MsRUFPdEMsQ0FBQyxvQkFBRCxDQVBzQyxDQUF6QztJQVVBLFNBQU87SUFBRSxJQUFBLG9CQUFGO0lBQXdCLElBQUEscUJBQXhCO0lBQStDLElBQUEscUJBQS9DO0lBQXNFLElBQUEsYUFBdEU7SUFBcUYsSUFBQSxLQUFLLEVBQUUsWUFBNUY7SUFBMEcsSUFBQSxnQkFBMUc7SUFBNEgsSUFBQSxnQkFBNUg7SUFBOEksSUFBQTtJQUE5SSxHQUFQOztJQUdBLFdBQVMscUJBQVQsQ0FBOEUsS0FBOUUsRUFBc0Y7SUFDbEYsSUFBQSxLQUFLLENBQUMsSUFBTixHQUFhLFNBQWI7SUFDQSxXQUFPLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFDLEtBQUQsQ0FBdEIsQ0FBMUIsQ0FBN0I7SUFDSDtJQUNKOztJQ3pERDs7Ozs7Ozs7OztJQVVHOztJQUNHLFNBQVUsV0FBVixPQUE0RztJQUFBLE1BQXZEO0lBQUUsSUFBQSxtQkFBRjtJQUF1QixPQUFHO0lBQTFCLEdBQXVEO0lBRzlHLFFBQU0sc0JBQXNCLEdBQUcsZUFBZSxDQUFDLG1CQUFELENBQTlDO0lBQ0EsUUFBTSxDQUFDLGVBQUQsRUFBa0Isa0JBQWxCLElBQXdDLFFBQVEsQ0FBaUIsSUFBakIsQ0FBdEQ7SUFFQSxNQUFJLE9BQU8sR0FBSSxJQUFvQyxDQUFDLE9BQXBEO0lBQ0EsTUFBSSxNQUFNLEdBQUksSUFBb0MsQ0FBQyxNQUFuRDtJQUNBLE1BQUksT0FBTyxHQUFJLElBQW9DLENBQUMsT0FBcEQ7SUFDQSxNQUFJLElBQUksR0FBSSxPQUFPLEdBQUcsSUFBSCxHQUFXLElBQTJCLENBQUMsSUFBMUQ7SUFDQSxRQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxPQUFELGFBQUMsT0FBRCxjQUFDLE9BQUQsR0FBYSxNQUFLLEVBQWxCLENBQXZDO0lBQ0EsUUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUQsQ0FBL0IsQ0FYOEc7SUFjOUc7SUFDQTtJQUNBOztJQUNBLFFBQU07SUFBRSxJQUFBLGdCQUFnQixFQUFFLHdCQUFwQjtJQUE4QyxJQUFBLG1CQUFtQixFQUFFO0lBQW5FLE1BQW1HLFdBQVcsQ0FBSTtJQUFFO0lBQUYsR0FBSixDQUFwSDtJQUNBLFFBQU07SUFBRSxJQUFBLGdCQUFnQixFQUFFLHNCQUFwQjtJQUE0QyxJQUFBLG1CQUFtQixFQUFFO0lBQWpFLE1BQXVHLFdBQVcsQ0FBTTtJQUFFO0lBQUYsR0FBTixDQUF4SDtJQUVBLFFBQU0sQ0FBQyxhQUFELEVBQWdCLGdCQUFoQixFQUFrQyxnQkFBbEMsSUFBc0QsUUFBUSxDQUFzQyxJQUF0QyxDQUFwRTtJQUVBLFFBQU07SUFBRSxJQUFBLGdCQUFnQixFQUFFLGtCQUFwQjtJQUF3QyxJQUFBLG9CQUFvQixFQUFFO0lBQTlELE1BQWdHLFdBQVcsQ0FBQztJQUFFLElBQUEsTUFBTSxFQUFFO0lBQVYsR0FBRCxDQUFqSDtJQUVBLFFBQU07SUFBRSxJQUFBLFVBQVUsRUFBRSxnQkFBZDtJQUFnQyxJQUFBLGtCQUFrQixFQUFFO0lBQXBELE1BQWlGLGFBQWEsQ0FBTTtJQUFFLElBQUEsZUFBZSxFQUFFO0lBQW5CLEdBQU4sQ0FBcEc7SUFFQSxRQUFNO0lBQUUsSUFBQSxVQUFVLEVBQUUsY0FBZDtJQUE4QixJQUFBLGtCQUFrQixFQUFFO0lBQWxELE1BQWlGLGFBQWEsQ0FBTSxFQUFOLENBQXBHO0lBQ0EsUUFBTTtJQUFFLElBQUE7SUFBRixNQUEwQixjQUFjLENBQU07SUFBRSxJQUFBLE9BQU8sRUFBRSxhQUFYO0lBQTBCLElBQUEsV0FBVyxFQUFFLE1BQU8sQ0FBQyxnQkFBZ0IsRUFBakIsRUFBcUIsY0FBYyxFQUFuQztJQUE5QyxHQUFOLENBQTlDO0lBRUEsRUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxJQUFBLGtCQUFrQixDQUFDLElBQUQsQ0FBbEI7SUFDSCxHQUZRLEVBRU4sQ0FBQyxJQUFELENBRk0sQ0FBVCxDQTdCOEc7SUFtQzlHO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFDQSxRQUFNLGVBQWUsR0FBR1csQ0FBVyxDQUFDLE1BQXdCO0lBQ3hELFVBQU0sQ0FBQyxxQkFBRCxFQUF3Qix3QkFBeEIsSUFBb0QsUUFBUSxDQUFDLEtBQUQsQ0FBbEU7SUFDQSxJQUFBLFVBQVUsQ0FBQztJQUFFLE1BQUEsUUFBUSxFQUFFLE1BQUs7SUFBRyxRQUFBLHdCQUF3QixDQUFDLElBQUQsQ0FBeEI7SUFBaUMsT0FBckQ7SUFBdUQsTUFBQSxPQUFPLEVBQUUsR0FBaEU7SUFBcUUsTUFBQSxZQUFZLEVBQUUsR0FBRyxJQUFJLElBQUkscUJBQXFCO0lBQW5ILEtBQUQsQ0FBVjtJQUdBLFVBQU0sT0FBTyxHQUFHLHFCQUFxQixHQUFJLE1BQU0sYUFBYSxFQUF2QixHQUE4QjtJQUFBOztJQUFBLHNDQUFNLHNCQUFzQixFQUE1QiwwREFBTSx1QkFBTjtJQUFBLEtBQW5FOztJQUNBLFVBQU0sT0FBTyxHQUFHLE1BQU0sYUFBYSxFQUFuQzs7SUFFQSxXQUFPO0lBQ0gsTUFBQSxvQkFBb0IsRUFBRSxVQUE2QyxDQUE3QyxFQUFpRDtJQUNuRSxlQUFPLGNBQWMsR0FBTTtJQUFFLFVBQUEsT0FBRjtJQUFXLFVBQUE7SUFBWCxTQUFOLEVBQTRCLENBQTVCLENBQXJCO0lBQ0g7SUFIRSxLQUFQO0lBS0gsR0Fia0MsRUFhaEMsQ0FBQyxJQUFELENBYmdDLENBQW5DO0lBZ0JBLFFBQU0sZ0JBQWdCLEdBQUdBLENBQVcsQ0FBaUQsS0FBaEQsSUFBNEQ7SUFDN0YsYUFBUyxTQUFULENBQW1CLENBQW5CLEVBQW1DO0lBQy9CLFVBQUksQ0FBQyxDQUFDLEdBQUYsSUFBUyxRQUFULElBQXFCLE9BQU8sRUFBaEMsRUFBb0M7SUFDaEMsUUFBQSxhQUFhO0lBQ2IsUUFBQSxDQUFDLENBQUMsZUFBRjtJQUNBLFFBQUEsQ0FBQyxDQUFDLHdCQUFGO0lBQ0EsUUFBQSxDQUFDLENBQUMsY0FBRjtJQUNIO0lBQ0o7O0lBRUQsV0FBTyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEIsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEdBQWtCO0lBQUUsTUFBQTtJQUFGLEtBQWxCLEVBQWtDLEtBQWxDLENBQWYsQ0FBbkIsQ0FBM0IsQ0FBekIsQ0FBMUI7SUFDSCxHQVhtQyxFQVdqQyxDQUFDLG1CQUFELEVBQXNCLHdCQUF0QixFQUFnRCwwQkFBaEQsRUFBNEUsa0JBQTVFLENBWGlDLENBQXBDO0lBYUEsUUFBTSxzQkFBc0IsR0FBR0EsQ0FBVyxDQUF1QyxLQUF0QyxJQUFrRDtJQUN6RixXQUFPLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixDQUFDLGVBQUQsQ0FBN0IsQ0FBK0MsS0FBL0MsQ0FBRCxDQUF2QixDQUEvQjtJQUNILEdBRnlDLEVBRXZDLENBQUMsc0JBQUQsRUFBeUIsd0JBQXpCLEVBQW1ELDZCQUFuRCxDQUZ1QyxDQUExQztJQUtBLEVBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsVUFBTSxtQkFBbUIsR0FBRyxzQkFBc0IsRUFBbEQ7O0lBRUEsUUFBSSxlQUFKLEVBQXFCO0lBQ2pCLE1BQUEsbUJBQW1CLFNBQW5CLElBQUEsbUJBQW1CLFdBQW5CLFlBQUEsbUJBQW1CO0lBQ3RCLEtBRkQsTUFHSyxJQUFJLGVBQWUsS0FBSyxLQUF4QixFQUErQjtJQUFBOztJQUNoQyxVQUFJLDJCQUEyQixFQUEvQixFQUNJLHFCQUFBLGdCQUFnQixZQUFoQiw4REFBb0IsS0FBcEIsQ0FBMEI7SUFBRSxRQUFBLGFBQWEsRUFBRTtJQUFqQixPQUExQjtJQUNQLEtBSEksTUFJQTtJQUdSLEdBYlEsRUFhTixDQUFDLGVBQUQsQ0FiTSxDQUFUO0lBZUEsU0FBTztJQUNILElBQUEsZUFERztJQUVILElBQUEsZUFGRztJQUdILElBQUEsZ0JBSEc7SUFJSCxJQUFBLHNCQUpHO0lBS0gsSUFBQSwyQkFMRztJQU1ILElBQUEsaUNBTkc7SUFPSCxJQUFBLElBUEc7SUFRSCxJQUFBLE1BUkc7SUFTSCxJQUFBO0lBVEcsR0FBUDtJQVdIO0lBRUssU0FBVSxXQUFWLFFBQWlOO0lBQUEsTUFBbEc7SUFBRSxJQUFBLFFBQUY7SUFBWSxJQUFBLGFBQVo7SUFBMkIsSUFBQSxXQUEzQjtJQUF3QyxJQUFBLE1BQXhDO0lBQWdELElBQUEsZ0JBQWhEO0lBQWtFLE9BQUc7SUFBckUsR0FBa0c7SUFJbk4sUUFBTTtJQUNGLElBQUEsZUFERTtJQUVGLElBQUEsc0JBRkU7SUFHRixJQUFBLHNCQUhFO0lBSUYsSUFBQSxhQUpFO0lBS0YsSUFBQSxZQUFZLEVBQUUsU0FMWjtJQU1GLElBQUEsZ0JBTkU7SUFPRixJQUFBO0lBUEUsTUFRRixpQkFBaUIsQ0FBa0I7SUFBRSxJQUFBLFFBQUY7SUFBWSxJQUFBLGFBQVo7SUFBMkIsSUFBQSxXQUEzQjtJQUF3QyxJQUFBLE1BQXhDO0lBQWdELElBQUEsZ0JBQWhEO0lBQWtFLElBQUEsbUJBQW1CLEVBQUVXLENBQVcsQ0FBQyxNQUFlLDJCQUEyQixNQUFNLGlDQUFpQyxFQUFsRixFQUFzRixFQUF0RjtJQUFsRyxHQUFsQixDQVJyQjtJQVdBLFFBQU07SUFDRixJQUFBLGVBREU7SUFFRixJQUFBLGVBRkU7SUFHRixJQUFBLHNCQUhFO0lBSUYsSUFBQSxnQkFKRTtJQUtGLElBQUEsaUNBTEU7SUFNRixJQUFBLDJCQU5FO0lBT0YsSUFBQSxJQVBFO0lBUUYsSUFBQSxNQVJFO0lBU0YsSUFBQTtJQVRFLE1BVUYsV0FBVyxDQUFnQixFQUFFLEdBQUcsSUFBTDtJQUFXLElBQUEsbUJBQW1CLEVBQUUsU0FBRixhQUFFLFNBQUYsY0FBRSxTQUFGLEdBQWdCLE1BQUs7SUFBbkQsR0FBaEIsQ0FWZjtJQVlBLFFBQU0sYUFBYSxHQUFHQSxDQUFXLENBQUMsU0FBb0Q7SUFFbEYsV0FBTztJQUNILE1BQUEsa0JBQWtCLEVBQUUsVUFBNkMsQ0FBN0MsRUFBaUQ7SUFDakUsWUFBSSxLQUFLLEdBQUcsc0JBQXNCLENBQUMsQ0FBRCxDQUFsQztJQUNBLFFBQUEsS0FBSyxDQUFDLGVBQUQsQ0FBTCxHQUF5QixNQUF6QjtJQUNBLFFBQUEsS0FBSyxDQUFDLGVBQUQsQ0FBTCxHQUF5QixJQUFJLEdBQUcsTUFBSCxHQUFZLFNBQXpDO0lBQ0EsZUFBTyxLQUFQO0lBQ0g7SUFORSxLQUFQO0lBUUgsR0FWZ0MsRUFVOUIsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixNQUFoQixFQUF3QixzQkFBeEIsQ0FWOEIsQ0FBakM7SUFZQTs7Ozs7Ozs7Ozs7Ozs7SUFnQkEsUUFBTSxXQUFXLEdBQWlDQSxDQUFXLENBQUUsSUFBRCxJQUEwQztJQUdwRyxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQWtDLHNCQUFzQixDQUFDLElBQUQsQ0FBOUQ7O0lBRUEsYUFBUyxnQkFBVCxRQUE0RTtJQUFBLFVBQWYsRUFBRSxHQUFHO0lBQUwsT0FBZTtJQUN4RSxNQUFBLEtBQUssQ0FBQyxJQUFOLEdBQWEsVUFBYjtJQUNBLGFBQU8sY0FBYyxHQUFNLEVBQU4sRUFBVSwyQkFBMkIsQ0FBQyxLQUFELENBQXJDLENBQXJCO0lBQ0g7O0lBRUQsV0FBTztJQUFFLE1BQUE7SUFBRixLQUFQO0lBQ0gsR0FYNEQsRUFXMUQsRUFYMEQsQ0FBN0Q7O0lBY0EsV0FBUyxZQUFULFFBQW9GO0lBQUEsUUFBZixFQUFFLEdBQUc7SUFBTCxLQUFlO0lBQ2hGLElBQUEsS0FBSyxDQUFDLElBQU4sR0FBYSxNQUFiO0lBQ0EsV0FBTyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFELENBQXZCLENBQXZCO0lBQ0g7O0lBR0QsU0FBTztJQUNILElBQUEsWUFERztJQUVILElBQUEsYUFGRztJQUlILElBQUEsV0FKRztJQUtILElBQUEsZUFMRztJQU1IO0lBRUEsSUFBQSxTQVJHO0lBVUgsSUFBQSxnQkFWRztJQVdILElBQUEsZ0JBWEc7SUFhSCxJQUFBO0lBYkcsR0FBUDtJQWdCSDs7SUMvTkssU0FBVSxXQUFWLE9BQTJOO0lBQUEsTUFBM0c7SUFBRSxJQUFBLGFBQUY7SUFBaUIsSUFBQSxhQUFqQjtJQUFnQyxJQUFBLFFBQWhDO0lBQTBDLElBQUEsV0FBVyxFQUFFLGtCQUF2RDtJQUEyRSxPQUFHO0lBQTlFLEdBQTJHO0lBRTdOLFFBQU07SUFBRSxJQUFBLGdCQUFnQixFQUFFLHVCQUFwQjtJQUE2QyxJQUFBLGVBQWUsRUFBRTtJQUE5RCxNQUF5RixXQUFXLENBQWMsRUFBZCxDQUExRztJQUNBLFFBQU0sQ0FBQyxtQkFBRCxFQUFzQixzQkFBdEIsSUFBZ0QsUUFBUSxDQUE0QixZQUE1QixDQUE5RDtJQUNBLFFBQU07SUFBRSxJQUFBLHVCQUFGO0lBQTJCLElBQUEsNEJBQTNCO0lBQXlELElBQUE7SUFBekQsTUFBc0YsbUJBQW1CLENBQWM7SUFBRSxJQUFBLHdCQUF3QixFQUFFQSxDQUFXLENBQUUsb0JBQUQsSUFBdUQsc0JBQXNCLENBQUMsNEJBQTRCLENBQUMsa0JBQUQsRUFBcUIsb0JBQXJCLENBQTdCLENBQTlFLEVBQXdKLEVBQXhKO0lBQXZDLEdBQWQsQ0FBL0c7SUFFQSxFQUE4RixXQUFXLENBQUM7SUFBRSxJQUFBLE1BQU0sRUFBRTtJQUFWLEdBQUQ7SUFDekcsUUFBTTtJQUFFLElBQUEsZ0JBQWdCLEVBQUUsa0JBQXBCO0lBQXdDLElBQUEsb0JBQW9CLEVBQUU7SUFBOUQsTUFBMEYsV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQTNHO0lBRUEsUUFBTTtJQUFFLElBQUEsZUFBZSxFQUFFLFdBQW5CO0lBQWdDLElBQUEsZUFBaEM7SUFBaUQsSUFBQSxzQkFBakQ7SUFBeUUsSUFBQSxzQkFBekU7SUFBaUcsSUFBQSxhQUFqRztJQUFnSCxJQUFBLGdCQUFoSDtJQUFrSSxJQUFBLGdCQUFsSTtJQUFvSixJQUFBO0lBQXBKLE1BQXFLLGlCQUFpQixDQUF5QixFQUFFLEdBQUcsSUFBTDtJQUFXLElBQUEsbUJBQW1CLEVBQUUsc0JBQWhDO0lBQXdELElBQUEsYUFBYSxFQUFFO0lBQXZFLEdBQXpCLENBQTVMO0lBQ0EsUUFBTTtJQUFFLElBQUEsZUFBZSxFQUFFLGFBQW5CO0lBQWtDLElBQUEsZUFBZSxFQUFFO0lBQW5ELE1BQTBFLGVBQWUsRUFBL0Y7SUFFQSxFQUF1QixpQkFBaUIsQ0FBQyxRQUFEO0lBQ3hDLFFBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUEvQjtJQUdBLEVBQUEsZUFBZSxDQUFDLE1BQUs7SUFDakIsU0FBSyxJQUFJLEtBQVQsSUFBa0IsV0FBbEIsRUFDSSxLQUFLLENBQUMsZ0JBQU4sQ0FBdUIsYUFBdkI7SUFDUCxHQUhjLEVBR1osQ0FBQyxhQUFELENBSFksQ0FBZjtJQU1BLEVBQUEsWUFBWSxDQUFDO0lBQUUsSUFBQSxjQUFjLEVBQUUsYUFBbEI7SUFBaUMsSUFBQSxlQUFlLEVBQUUsV0FBbEQ7SUFBK0QsSUFBQSxZQUFZLEVBQUUsQ0FBQyxDQUFELEVBQUksUUFBSjtJQUFBOztJQUFBLCtCQUFpQixXQUFXLENBQUMsQ0FBRCxDQUE1QixtREFBaUIsZUFBZ0IsV0FBaEIsQ0FBNEIsUUFBNUIsQ0FBakI7SUFBQSxLQUE3RTtJQUFxSSxJQUFBLFlBQVksRUFBRSxDQUFDO0lBQUE7O0lBQUEsZ0NBQUssV0FBVyxDQUFDLENBQUQsQ0FBaEIsb0RBQUssZ0JBQWdCLFdBQWhCLEVBQUw7SUFBQTtJQUFwSixHQUFELENBQVo7SUFDQSxFQUFBLFlBQVksQ0FBQztJQUFFLElBQUEsY0FBYyxFQUFFLGFBQWxCO0lBQWlDLElBQUEsZUFBZSxFQUFFLGFBQWxEO0lBQWlFLElBQUEsWUFBWSxFQUFFLENBQUMsQ0FBRCxFQUFJLE9BQUo7SUFBQTs7SUFBQSxpQ0FBZ0IsYUFBYSxDQUFDLENBQUQsQ0FBN0IscURBQWdCLGlCQUFrQixVQUFsQixDQUE2QixPQUE3QixDQUFoQjtJQUFBLEtBQS9FO0lBQXNJLElBQUEsWUFBWSxFQUFFLENBQUM7SUFBQTs7SUFBQSxrQ0FBSyxhQUFhLENBQUMsQ0FBRCxDQUFsQixzREFBSyxrQkFBa0IsVUFBbEIsRUFBTDtJQUFBO0lBQXJKLEdBQUQsQ0FBWjtJQUVBLEVBQUEsZUFBZSxDQUFFLElBQUQsSUFBUztJQUNyQixRQUFJLGFBQWEsSUFBSSxJQUFqQixJQUF5QixhQUFhLElBQUksVUFBOUMsRUFBMEQ7SUFDdEQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLE1BQUEsY0FBYyxDQUFDLE1BQUs7SUFBQTs7SUFDaEIsaUNBQUEsYUFBYSxDQUFDLGFBQUQsQ0FBYixnRkFBOEIsS0FBOUI7SUFDSCxPQUZhLENBQWQ7SUFHSDtJQUNKLEdBWGMsRUFXWixDQUFDLFVBQUQsRUFBYSxhQUFiLEVBQTRCLGFBQTVCLENBWFksQ0FBZjtJQWNBLFFBQU0sTUFBTSxHQUFtQ0EsQ0FBVyxDQUFDLFNBQVMsTUFBVCxDQUFnQixJQUFoQixFQUE4RDtJQUNySCxVQUFNLENBQUMsY0FBRCxFQUFpQixpQkFBakIsSUFBc0MsUUFBUSxDQUF1QixhQUF2QixDQUFwRDtJQUNBLFVBQU07SUFBRSxNQUFBLGtCQUFGO0lBQXNCLE1BQUE7SUFBdEIsUUFBcUMsYUFBYSxDQUFhLEVBQWIsQ0FBeEQ7SUFDQSxVQUFNLENBQUMsVUFBRCxFQUFhLGFBQWIsSUFBOEIsUUFBUSxDQUFxQixTQUFyQixDQUE1QztJQUNBLFVBQU07SUFBRSxNQUFBLGdCQUFnQixFQUFFLGFBQXBCO0lBQW1DLE1BQUEsRUFBRSxFQUFFLEtBQXZDO0lBQThDLE1BQUEsS0FBSyxFQUFFO0lBQXJELFFBQWtFLFdBQVcsQ0FBQztJQUFFLE1BQUEsTUFBTSxFQUFFO0lBQVYsS0FBRCxDQUFuRjtJQUNBLFVBQU0sQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixXQUF4QixJQUF1QyxRQUFRLENBQWlCLElBQWpCLENBQXJEO0lBQ0EsVUFBTTtJQUFFLE1BQUEsUUFBRjtJQUFZLE1BQUEsMkJBQVo7SUFBeUMsTUFBQTtJQUF6QyxRQUEyRSxzQkFBc0IsQ0FBQztJQUFFLE1BQUEsV0FBRjtJQUFlLE1BQUEsV0FBZjtJQUE0QixNQUFBLEtBQTVCO0lBQW1DLE1BQUEsYUFBbkM7SUFBa0QsTUFBQSxnQkFBZ0IsRUFBRSxpQkFBcEU7SUFBdUYsU0FBRztJQUExRixLQUFELENBQXZHO0lBQ0EsVUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFOLENBQWhDO0lBRUEsSUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxZQUFNLE9BQU8sR0FBRyxVQUFVLEVBQTFCOztJQUNBLFVBQUksUUFBUSxJQUFJLGNBQWMsSUFBSSxPQUFsQyxFQUEyQztJQUN2QyxRQUFBLFFBQVEsQ0FBQztJQUFFLFVBQUEsTUFBTSxFQUFFLE9BQVY7SUFBbUIsVUFBQSxhQUFhLEVBQUUsT0FBbEM7SUFBMkMsV0FBQyxXQUFELEdBQWU7SUFBRSxZQUFBLGFBQWEsRUFBRSxRQUFRO0lBQXpCO0lBQTFELFNBQUQsQ0FBUjtJQUNIO0lBQ0osS0FMUSxFQUtOLENBQUMsUUFBRCxFQUFXLGFBQVgsQ0FMTSxDQUFUO0lBT0EsSUFBQUEsQ0FBUyxDQUFDLE1BQUs7SUFBQTs7SUFBRywrQkFBQSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBYixnRkFBMkIsUUFBM0IsQ0FBb0MsS0FBcEM7SUFBNEMsS0FBckQsRUFBdUQsQ0FBQyxLQUFELEVBQVEsSUFBSSxDQUFDLEtBQWIsQ0FBdkQsQ0FBVDs7SUFHQSxhQUFTLFdBQVQsUUFBZ0Y7SUFBQSxVQUFmLEVBQUUsR0FBRztJQUFMLE9BQWU7SUFDNUUsWUFBTSxRQUFRLEdBQXFDLHFCQUFxQixDQUFjLENBQUQsSUFBTTtJQUN2RixRQUFBLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBTixDQUFmO0lBQ0EsUUFBQSxRQUFRLFNBQVIsSUFBQSxRQUFRLFdBQVIsWUFBQSxRQUFRLENBQUcsWUFBWSxDQUFDLENBQUQsRUFBSTtJQUFFLFVBQUEsYUFBYSxFQUFFLFFBQVE7SUFBekIsU0FBSixDQUFmLENBQVI7SUFDQSxRQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0gsT0FKdUUsRUFJckUsU0FKcUUsQ0FBckIsQ0FJckMsS0FKcUMsQ0FBbkQ7SUFNQSxNQUFBLFFBQVEsQ0FBQyxJQUFULEdBQWdCLEtBQWhCO0lBQ0EsTUFBQSxRQUFRLENBQUMsZUFBRCxDQUFSLEdBQTRCLENBQUMsUUFBRCxhQUFDLFFBQUQsY0FBQyxRQUFELEdBQWEsS0FBYixFQUFvQixRQUFwQixFQUE1QjtJQUNBLE1BQUEsUUFBUSxDQUFDLGVBQUQsQ0FBUixHQUE0QixVQUE1QjtJQUVBLGFBQU8sY0FBYyxHQUFlLEVBQWYsRUFBbUIsYUFBYSxDQUFDLDJCQUEyQixDQUFDLGtCQUFrQixDQUFDLFFBQUQsQ0FBbkIsQ0FBNUIsQ0FBaEMsQ0FBckI7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQSxXQUFGO0lBQWUsTUFBQTtJQUFmLEtBQVA7SUFDSCxHQWxDeUQsRUFrQ3ZELEVBbEN1RCxDQUExRDtJQW9DQSxRQUFNLFdBQVcsR0FBaUNXLENBQVcsQ0FBQyxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBNkM7SUFDdkc7SUFDQSxVQUFNLENBQUMsS0FBRCxFQUFRLFFBQVIsSUFBb0IsUUFBUSxDQUFxQixTQUFyQixDQUFsQztJQUNBLFVBQU0sQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixVQUF0QixJQUFvQyxRQUFRLENBQWlCLElBQWpCLENBQWxEO0lBQ0EsVUFBTTtJQUFFLE1BQUEsZ0JBQWdCLEVBQUUsZUFBcEI7SUFBcUMsTUFBQSxvQkFBb0IsRUFBRSxvQkFBM0Q7SUFBaUYsTUFBQSxFQUFFLEVBQUU7SUFBckYsUUFBb0csV0FBVyxDQUFDO0lBQUUsTUFBQSxNQUFNLEVBQUU7SUFBVixLQUFELENBQXJIO0lBQ0EsVUFBTTtJQUFFLE1BQUEsb0JBQUY7SUFBd0IsTUFBQTtJQUF4QixRQUF1QyxrQkFBa0IsQ0FBa0IsRUFBRSxHQUFHLElBQUw7SUFBVyxNQUFBLFVBQVg7SUFBdUIsTUFBQSxRQUF2QjtJQUFpQyxNQUFBLEtBQWpDO0lBQXdDLE1BQUEsVUFBVSxFQUFFLFVBQXBEO0lBQWdFLE1BQUEsVUFBVSxFQUFFO0lBQTVFLEtBQWxCLENBQS9EOztJQUVBLGFBQVMsS0FBVCxHQUFjO0lBQ1YsWUFBTSxPQUFPLEdBQUcsVUFBVSxFQUExQjs7SUFDQSxVQUFJLE9BQU8sSUFBSSxzQkFBc0IsRUFBckMsRUFBeUM7SUFDcEMsUUFBQSxPQUFxRCxTQUFyRCxJQUFBLE9BQXFELFdBQXJELFlBQUEsT0FBcUQsQ0FBRSxLQUF2RCxDQUE2RDtJQUFFLFVBQUEsYUFBYSxFQUFFO0lBQWpCLFNBQTdEO0lBQ0o7SUFDSjs7SUFFRCxJQUFBWCxDQUFTLENBQUMsTUFBSztJQUFBOztJQUFHLCtCQUFBLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBTixDQUFYLGdGQUF5QixhQUF6QixDQUF1QyxVQUF2QztJQUFvRCxLQUE3RCxFQUErRCxDQUFDLFVBQUQsRUFBYSxJQUFJLENBQUMsS0FBbEIsQ0FBL0QsQ0FBVDs7SUFFQSxhQUFTLGdCQUFULFFBQTBGO0lBQUE7O0lBQUEsVUFBZixFQUFFLEdBQUc7SUFBTCxPQUFlO0lBQ3RGLE1BQUEsS0FBSyxDQUFDLGlCQUFELENBQUwsNkJBQTJCLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBTixDQUF0QywyREFBMkIsdUJBQXlCLEtBQXBEO0lBQ0EsTUFBQSxLQUFLLENBQUMsSUFBTixHQUFhLFVBQWI7SUFDQSx5QkFBQSxLQUFLLENBQUMsUUFBTiw2REFBQSxLQUFLLENBQUMsUUFBTixHQUFtQixDQUFDLENBQXBCLENBSHNGOztJQUl0RixhQUFPLGNBQWMsR0FBb0IsRUFBcEIsRUFBd0IsZUFBZSxDQUFDLG9CQUFvQixDQUFDLEtBQUQsQ0FBckIsQ0FBdkMsQ0FBckI7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQSxnQkFBRjtJQUFvQixNQUFBO0lBQXBCLEtBQVA7SUFDSCxHQXhCNEQsRUF3QjFELEVBeEIwRCxDQUE3RDtJQTJCQSxRQUFNLFdBQVcsR0FBNkJXLENBQVcsQ0FBQyxTQUFTLFVBQVQsR0FBbUI7SUFFekUsYUFBUyxlQUFULFFBQXFGO0lBQUEsVUFBZixFQUFFLEdBQUc7SUFBTCxPQUFlO0lBQ2pGLE1BQUEsS0FBSyxDQUFDLElBQU4sR0FBYSxTQUFiO0lBQ0EsTUFBQSxLQUFLLENBQUMsa0JBQUQsQ0FBTCxHQUE0QixtQkFBNUI7SUFDQSxhQUFPLHVCQUF1QixDQUFDLGlCQUFELENBQXZCLENBQTJDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLEtBQUQsQ0FBdkIsQ0FBekIsQ0FBbEUsQ0FBUDtJQUNIOztJQUVELFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUNILEdBVHdELEVBU3RELENBQUMsc0JBQUQsRUFBeUIsbUJBQXpCLENBVHNELENBQXpEO0lBWUEsUUFBTSxZQUFZLEdBQUdBLENBQVcsQ0FBQyxTQUFTLFlBQVQsR0FBcUI7SUFDbEQsYUFBUyxpQkFBVCxRQUE2RTtJQUFBLFVBQWYsRUFBRSxHQUFHO0lBQUwsT0FBZTtJQUN6RSxhQUFPLGtCQUFrQixDQUFDLEtBQUQsQ0FBekI7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFDSCxHQU4rQixFQU03QixFQU42QixDQUFoQztJQVFBLFNBQU87SUFBRSxJQUFBLE1BQUY7SUFBVSxJQUFBLFdBQVY7SUFBdUIsSUFBQSxXQUF2QjtJQUFvQyxJQUFBLFlBQXBDO0lBQWtELElBQUEsYUFBbEQ7SUFBaUUsSUFBQSxZQUFZLEVBQUUsWUFBL0U7SUFBNkYsSUFBQSxnQkFBN0Y7SUFBK0csSUFBQSxnQkFBL0c7SUFBaUksSUFBQSxhQUFqSTtJQUFnSixJQUFBO0lBQWhKLEdBQVA7SUFFSDs7SUMvSkssU0FBVSxjQUFWLE9BQStHO0lBQUE7O0lBQUEsTUFBdEY7SUFBRSxJQUFBLGNBQUY7SUFBa0IsSUFBQTtJQUFsQixHQUFzRjtJQUVqSCxxQkFBQSxjQUFjLFVBQWQsbURBQUEsY0FBYyxHQUFLLEdBQW5CO0lBQ0Esb0JBQUEsYUFBYSxVQUFiLGlEQUFBLGFBQWEsR0FBSyxFQUFsQjtJQUVBLFFBQU0sQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixPQUFoQixJQUEyQixRQUFRLENBQUMsS0FBRCxDQUF6QyxDQUxpSDs7SUFRakgsUUFBTSxDQUFDLDBCQUFELEVBQTZCLDZCQUE3QixJQUE4RCxRQUFRLENBQUMsS0FBRCxDQUE1RTtJQUVBLFFBQU07SUFBRSxJQUFBLGdCQUFnQixFQUFFLGlCQUFwQjtJQUF1QyxJQUFBLG9CQUFvQixFQUFFO0lBQTdELE1BQThGLFdBQVcsQ0FBQztJQUFFLElBQUEsTUFBTSxFQUFFO0lBQVYsR0FBRCxDQUEvRztJQUVBLFFBQU0sQ0FBQyxtQkFBRCxFQUFzQixzQkFBdEIsRUFBOEMsc0JBQTlDLElBQXdFLFFBQVEsQ0FBQyxLQUFELENBQXRGO0lBQ0EsUUFBTSxDQUFDLG1CQUFELEVBQXNCLHNCQUF0QixJQUFnRCxRQUFRLENBQUMsS0FBRCxDQUE5RDtJQUNBLFFBQU0sQ0FBQyxtQkFBRCxFQUFzQixzQkFBdEIsSUFBZ0QsUUFBUSxDQUFDLEtBQUQsQ0FBOUQ7SUFDQSxRQUFNLENBQUMsZUFBRCxFQUFrQixrQkFBbEIsSUFBd0MsUUFBUSxDQUFDLEtBQUQsQ0FBdEQ7SUFFQSxRQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBRCxHQUF1QixDQUFDLG1CQUF4QixHQUE4QyxDQUFDLGVBQWpELENBQXRCO0lBQ0EsUUFBTSxvQkFBb0IsR0FBSSxtQkFBbUIsSUFBSSxtQkFBdkIsSUFBOEMsZUFBNUUsQ0FsQmlIOztJQXFCakgsRUFBQSxVQUFVLENBQUM7SUFDUCxJQUFBLE9BQU8sRUFBRSxjQURGO0lBRVAsSUFBQSxZQUZPO0lBR1AsSUFBQSxRQUFRLEVBQUUsTUFBSztJQUNYLE1BQUEsNkJBQTZCLENBQUMsb0JBQUQsQ0FBN0I7SUFDSDtJQUxNLEdBQUQsQ0FBVixDQXJCaUg7O0lBOEJqSCxFQUFBLFVBQVUsQ0FBQztJQUNQLElBQUEsT0FBTyxFQUFFLGFBREY7SUFFUCxJQUFBLFlBRk87SUFHUCxJQUFBLFFBQVEsRUFBRSxNQUFLO0lBQ1gsVUFBSSxDQUFDLG9CQUFMLEVBQ0ksNkJBQTZCLENBQUMsb0JBQUQsQ0FBN0I7SUFDUDtJQU5NLEdBQUQsQ0FBVixDQTlCaUg7SUF3Q2pIOztJQUNBLEVBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsSUFBQSxPQUFPLENBQUMsMEJBQTBCLElBQUksbUJBQS9CLENBQVA7SUFDSCxHQUZRLEVBRU4sQ0FBQywwQkFBRCxFQUE2QixtQkFBN0IsQ0FGTSxDQUFUO0lBSUEsUUFBTSxpQkFBaUIsR0FBc0JXLENBQVcsQ0FBQyxTQUFTLGlCQUFULEdBQTBCO0lBRS9FLGFBQVMsY0FBVCxDQUF3QixDQUF4QixFQUFxQztJQUNqQyxNQUFBLHNCQUFzQixDQUFDLElBQUQsQ0FBdEI7SUFDSDs7SUFFRCxhQUFTLGNBQVQsQ0FBd0IsQ0FBeEIsRUFBcUM7SUFDakMsTUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCO0lBQ0g7O0lBRUQsYUFBUyxVQUFULENBQW9CLENBQXBCLEVBQWlDO0lBQzVCLE1BQUEsQ0FBQyxDQUFDLE1BQUYsQ0FBaUIsS0FBakI7SUFDSjs7SUFFRCxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQXVCLFdBQVcsQ0FBYztJQUFFLE1BQUEscUJBQXFCLEVBQUU7SUFBekIsS0FBZCxDQUF4Qzs7SUFHQSxhQUFTLHNCQUFULFFBQTRGO0lBQUE7O0lBQUEsVUFBZixFQUFFLEdBQUc7SUFBTCxPQUFlO0lBQ3hGO0lBQ0E7SUFDQTtJQUNBLHlCQUFBLEtBQUssQ0FBQyxRQUFOLDZEQUFBLEtBQUssQ0FBQyxRQUFOLEdBQW1CLENBQUMsQ0FBcEI7SUFDQSxhQUFPLDRCQUE0QixDQUFDLGtCQUFELENBQTVCLENBQ0gsZ0JBQWdCLENBQ1IsY0FBYyxHQUFnQjtJQUFFLFFBQUEsY0FBRjtJQUFrQixRQUFBLGNBQWxCO0lBQWtDLFFBQUE7SUFBbEMsT0FBaEIsRUFBaUUsS0FBakUsQ0FETixDQURiLENBQVA7SUFLSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFFSCxHQS9CdUQsRUErQnJELENBQUMsNEJBQUQsQ0EvQnFELENBQXhEO0lBaUNBLFFBQU0sVUFBVSxHQUFHQSxDQUFXLENBQUMsU0FBUyxVQUFULEdBQW1CO0lBRTlDLGFBQVMsY0FBVCxDQUF3QixDQUF4QixFQUFxQztJQUNqQyxNQUFBLHNCQUFzQixDQUFDLElBQUQsQ0FBdEI7SUFDSDs7SUFFRCxhQUFTLGNBQVQsQ0FBd0IsQ0FBeEIsRUFBcUM7SUFDakMsTUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCO0lBQ0g7O0lBRUQsYUFBUyxlQUFULFFBQXFGO0lBQUEsVUFBZixFQUFFLEdBQUc7SUFBTCxPQUFlO0lBQ2pGLFlBQU07SUFBRSxRQUFBO0lBQUYsVUFBdUIsV0FBVyxDQUFjO0lBQUUsUUFBQSxxQkFBcUIsRUFBRTtJQUF6QixPQUFkLENBQXhDO0lBQ0EsYUFBTyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEdBQWdCO0lBQUUsUUFBQSxjQUFGO0lBQWtCLFFBQUE7SUFBbEIsT0FBaEIsRUFBb0QsS0FBcEQsQ0FBZixDQUFqQixDQUF4QjtJQUNIOztJQUVELFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUNILEdBaEI2QixFQWdCM0IsQ0FBQyxpQkFBRCxDQWhCMkIsQ0FBOUI7SUFrQkEsU0FBTztJQUNILElBQUEsVUFERztJQUVILElBQUEsaUJBRkc7SUFHSCxJQUFBLE1BQU0sRUFBRSxJQUhMO0lBSUgsSUFBQSxTQUFTLEVBQUU7SUFKUixHQUFQO0lBTUg7O0lDeEdNLE1BQU0sZUFBZSxHQUFHO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUd2QixDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0MsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBR0EsQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxFLFFBQ0lrUCxhQUFLLEtBQUssRUFBQyxNQUFNO1lBQ2JBOztnQkFBMEJBLGVBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUksQ0FBUTtZQUNwSUE7O2dCQUFtQyxTQUFTOztnQkFBTyxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHO29CQUFRLENBQ25GLEVBQ1Q7SUFDTCxDQUFDOztJQ1pELE1BQU1DLGFBQVcsR0FBRywrYkFBK2IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFL2QsTUFBTSxrQkFBa0IsR0FBR0MsQ0FBYSxDQUFvRSxJQUFLLENBQUMsQ0FBQTtJQUMzRyxNQUFNLHFCQUFxQixHQUFHQyxDQUFJLENBQUM7UUFFdEMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxHQUFHLFdBQVcsQ0FBbUIsRUFBRSxDQUFDLENBQUE7UUFDL0UsTUFBTSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLGlCQUFpQixDQUE0QyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFck4sUUFDSUgsYUFBSyxTQUFTLEVBQUMsTUFBTTtZQUNqQkEsNkNBQXVDO1lBQ3ZDQTtnQkFBSUEsc0NBQThCLENBQUs7WUFFdkNBOztnQkFHd0VBLGtCQUFPLFVBQVUsQ0FBUTs2REFBOEM7WUFFL0lBOztnQkFFaUhBLHlCQUFlOytFQUM1SDtZQUNKQTs7Z0JBQ21MQSw4QkFBc0I7O2dCQUN0QkEsOEJBQXNCO2lFQUNyTTtZQUVKQTtnQkFDSUEsc0NBQThCOztnQkFBNENBLHNDQUE4Qjs7Z0JBQUVBLHdDQUFnQzs7Z0JBQUVBLDJDQUFtQzt3S0FFL0s7WUFFSkE7Z0JBQ0lBLHNDQUE4Qjs7Z0JBQU1BLHNDQUE4Qjs7Z0JBQWlCQSxvQ0FBNEI7O2dCQUNVQSwyQ0FBbUM7O2dCQUE2Q0EsNEJBQW9COztnQkFFaEtBLDRCQUFvQjs7Z0JBQXlEQSw0QkFBb0I7dUNBQzlKO1lBQ0pBOztnQkFBdUJBLGVBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsYUFBYSxJQUFJLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxHQUFJLENBQVE7WUFDakxBLGVBQVEsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2hEQSxJQUFDLGtCQUFrQixDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUsc0JBQXNCLElBQ3JELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUN6QixNQUFNQSxJQUFDLDBCQUEwQixJQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFBO3FCQUN6RDtpQkFDSixHQUFHLENBQUMsQ0FDcUIsQ0FDN0I7WUFDSixnQkFBZ0IsSUFBSUE7O2dCQUFpQixnQkFBZ0IsQ0FBTyxDQUMzRCxFQUNSO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFHRixNQUFNLDBCQUEwQixJQUFJLENBQUMsRUFBRSxLQUFLLEVBQXFCO1FBQzdELE1BQU0sVUFBVSxHQUFHOU4sR0FBTyxDQUFDLE1BQU0rTixhQUFXLENBQUMsS0FBSywwREFBeUQsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqSCxNQUFNLHNCQUFzQixHQUFHM04sR0FBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFVLGtCQUFrQixLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDeEQsTUFBTSxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLEdBQUcsc0JBQXNCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUvRyxNQUFNLEtBQUssR0FBRywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QyxRQUNJME4sZUFBUSxLQUFLO1lBQUcsSUFBSTs7WUFBSSxLQUFLLENBQUMsUUFBUTs7WUFBRUEsa0JBQVcsNkJBQTZCLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsR0FBSSxDQUFLLEVBQ2xIO0lBQ0wsQ0FBQyxDQUFDOztJQ2pFSyxNQUFNLGNBQWMsR0FBRztRQUMxQixNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHbFAsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHQSxDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRTdFLFFBQ0lrUCxhQUFLLEtBQUssRUFBQyxNQUFNO1lBQ2JBOztnQkFBeUJBLGVBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUksQ0FBUTtZQUNqSUE7O2dCQUFvQkEsZUFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBSSxDQUFRO1lBQzVIQTs7Z0JBQW1DLFNBQVM7O2dCQUFPLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUc7b0JBQVEsQ0FDbkYsRUFDVDtJQUNMLENBQUM7O0lDQUQsTUFBTSxXQUFXLEdBQUcsK2JBQStiLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBTS9kLE1BQU0sZ0JBQWdCLEdBQUc7UUFDckIsTUFBTSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEdBQUcsWUFBWSxDQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRXhKLGNBQWMsRUFBb0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUVoTyxDQUFNLENBQW1CLElBQUssQ0FBQyxFQUFFLEVBQUM7UUFFaEcsTUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELENBQUMsQ0FBQyxJQUFJO1FBRWhCLFFBQ0lnTyxnQkFBUyxDQUFDO1lBRUwsY0FBYyxJQUFJLElBQUksSUFBSUE7O2dCQUFtQkEsZ0JBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQXNELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUtBO29CQUFLLElBQUk7O29CQUFJLEtBQUssQ0FBTSxDQUFDLENBQU0sQ0FBTTtZQUNuTSxZQUFZLElBQUksSUFBSSxJQUFJQTs7Z0JBQW9CQTtvQkFDekNBO3dCQUFPQTs0QkFBSUEsdUJBQWE7NEJBQUFBLHVCQUFhOzRCQUFBQSx1QkFBYTs0QkFBQUEsZ0NBQXNCLENBQUssQ0FBUTtvQkFDckZBLG1CQUFRLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJQTt3QkFBSUEsZ0JBQUssQ0FBQyxDQUFDLElBQUksQ0FBTTt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7d0JBQUNBLGdCQUFLLENBQUMsQ0FBQyxJQUFJLENBQU07d0JBQUFBLGdCQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQU0sQ0FBSyxDQUFDLENBQVMsQ0FDMUksQ0FBTTtZQUNkQSxlQUFNO1lBRUwsdUJBQXVCLElBQUksSUFBSSxJQUFJQTs7Z0JBQTRCQSxnQkFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSUEsZ0JBQUssSUFBSSxDQUFNLENBQUMsQ0FBTSxDQUFNO1lBQ2hKLHFCQUFxQixJQUFJLElBQUksSUFBSUE7O2dCQUE2QkEsZ0JBQUsscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSUEsZ0JBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBTSxDQUFDLENBQU0sQ0FBTTtZQUU1SUEsZUFBTTtZQUNMLFNBQVMsSUFBSUEsaUJBQU0sU0FBUyxZQUFZLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQU8sQ0FDbkcsRUFDVDtJQUNMLENBQUMsQ0FBQTtJQUVELE1BQU0sZ0JBQWdCLEdBQUc7UUFDckIsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLEdBQUcsWUFBWSxDQUFpQixFQUFFLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxzREFBc0QsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUd6TSxRQUNJQSxnQkFBUyxpQkFBaUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyx3QkFFM0MsRUFBQztJQUNmLENBQUMsQ0FBQTtJQUdELE1BQU0sZ0JBQWdCLEdBQUdHLENBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFzQjtRQUV4RCxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxZQUFZLENBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFbkYsTUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDckYsSUFBSSxLQUFLLElBQUksQ0FBQztZQUNWLE9BQU9ILGdCQUFPLENBQUM7UUFFbkIsUUFDSUEsYUFBSyxTQUFTLEVBQUMsTUFBTTtZQUNqQkE7O2dCQUFlQSxlQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBSSxDQUFRO1lBQzVJQSxnQkFBUyxRQUFRO2dCQUNiQSxJQUFDLHFCQUFxQixJQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBSSxDQUNoRixDQUNKLEVBQ1I7SUFDTixDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0scUJBQXFCLEdBQUdHLENBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQTRFO1FBR3RJLFFBQ0lIO1lBQ0lBLCtCQUF5QjtZQUN6QkEsK0JBQXlCO1lBQ3pCQSwrQkFBeUI7WUFDekJBOztnQkFBZUEsZUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUksQ0FBUSxDQUU3SSxFQUNMO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLDBCQUEwQixHQUFHRSxDQUFhLENBQTZDLElBQUssQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sZ0JBQWdCLEdBQUdDLENBQUksQ0FBQztRQUUxQixNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFnQixDQUFDLENBQUMsQ0FBQztRQUVyRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBb0MsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO1FBRTVILFFBQ0lILElBQUMsMEJBQTBCLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSx1QkFBdUI7WUFDL0RBLGFBQUssU0FBUyxFQUFDLE1BQU07Z0JBQ2pCQTtvQkFDSUEsSUFBQyxvQkFBb0IsSUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFJO29CQUNsQ0EsSUFBQyxvQkFBb0IsSUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFJO29CQUNsQ0EsSUFBQyxvQkFBb0IsSUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFJLENBQ2hDLENBQ0osQ0FDNEIsRUFDekM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sb0JBQW9CLEdBQUdHLENBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFxQjtRQUUzRCxNQUFNLG1CQUFtQixHQUFHN04sR0FBVSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbkUsTUFBTSxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxHQUFHLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUVoSCxNQUFNLEVBQUUsZ0NBQWdDLEVBQUUsR0FBRywyQkFBMkIsRUFBa0IsQ0FBQztRQUMzRixNQUFNLEVBQUUsa0NBQWtDLEVBQUUsR0FBRyw2QkFBNkIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRWhHLE1BQU0sQ0FBQyxHQUFHLGdDQUFnQyxDQUFDLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNMLFFBQ0kwTixhQUFLLFNBQVMsRUFBQyxtQkFBbUI7WUFDOUJBLG1CQUFZLGtDQUFrQyxDQUFDLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFLENBQUM7O2dCQUFXLEtBQUssR0FBRyxDQUFDLENBQVU7WUFDdkhBLGdCQUFTLENBQUM7Z0JBQUVBOztvQkFBa0IsS0FBSyxHQUFHLENBQUMsQ0FBSztnQkFBQUEsZUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFLLENBQU0sQ0FDOUUsRUFDVDtJQUNMLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxlQUFlLEdBQUdHLENBQUksQ0FBQztRQUV6QixRQUNJSDtZQUNJQSxhQUFLLFNBQVMsRUFBQyxNQUFNO2dCQUNqQkEsSUFBQyxTQUFTLE9BQUc7Z0JBQ2JBLElBQUMsU0FBUyxPQUFHLENBQ1g7WUFDTkEsSUFBQyxvQkFBb0IsT0FBRyxDQUN6QixFQUNOO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFLSCxNQUFNLFNBQVMsR0FBR0csQ0FBSSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLGVBQWUsQ0FBcUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNU4sTUFBTSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsdUJBQXVCLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNuRixNQUFNLEVBQUUsNEJBQTRCLEVBQUUsR0FBRyx1QkFBdUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRW5GLFFBQ0lIO1lBQ0lBLGtCQUFXLDRCQUE0QixDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsR0FBRyxDQUFDLEdBQUk7WUFDbEVBLGtCQUFXLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxZQUFlLENBQ3hELEVBQ1Q7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sU0FBUyxHQUFHRyxDQUFJLENBQUM7UUFFbkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsTUFBTSxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLEdBQUcsZUFBZSxDQUFxQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM1TixNQUFNLEVBQUUsNEJBQTRCLEVBQUUsR0FBRyx1QkFBdUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxHQUFHLHVCQUF1QixDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFbkYsUUFDSUg7WUFDSUEsa0JBQVcsNEJBQTRCLENBQUMsRUFBRSxDQUFDO2dCQUFFQSxrQkFBVyw0QkFBNEIsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxHQUFJO3lCQUFjLENBQzFILEVBQ1Q7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0sb0JBQW9CLEdBQUdFLENBQWEsQ0FBcUUsSUFBSyxDQUFDLENBQUM7SUFFdEgsTUFBTSxvQkFBb0IsR0FBR0MsQ0FBSSxDQUFDO1FBRTlCLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFzRTtZQUM1RixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQ2pELElBQUksY0FBYyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7WUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDekIsSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFLENBQW9CO3FCQUNwQyxJQUFJLEtBQUssS0FBSyxJQUFJO29CQUNuQixjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSTtvQkFDMUIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUU3QjtZQUVELGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3JDLENBQUM7UUFHRixNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLEdBQUcsV0FBVyxDQUFpQixFQUFFLENBQUMsQ0FBQTtRQUM3RSxNQUFNLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsMEJBQTBCLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBOEMsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ2hWLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLGVBQWUsQ0FBcUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsb0JBQTJCLEVBQUUsQ0FBQyxDQUFDO1FBRS9OLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxHQUFHLHVCQUF1QixDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkYsTUFBTSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsdUJBQXVCLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNuRixNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEdBQUcsUUFBUSxDQUFjLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUc3RSxPQUFPSCxhQUFLLEtBQUssRUFBQyxNQUFNO1lBQ3BCQSxJQUFDLG9CQUFvQixDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUscUJBQXFCO2dCQUN2REE7b0JBQ0lBLGtCQUFXLDRCQUE0QixDQUFDLDZCQUE2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUk7b0JBQzlFQSxrQkFBVyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsbUJBQXNCLENBQy9EO2dCQUNOQSxnQkFBUyxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFFakYsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7d0JBQ3pCLFNBQVMsWUFBWSxDQUFDLFFBQWlCOzRCQUVuQyxpQkFBaUIsQ0FBQyxjQUFjO2dDQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQ0FFbkMsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO29DQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUNaLE9BQU8sSUFBSSxDQUFDO2lDQUNmO3FDQUNJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQ0FDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDZixPQUFPLElBQUksQ0FBQztpQ0FDZjtnQ0FFRCxPQUFPLGNBQWMsQ0FBQzs2QkFDekIsQ0FBQyxDQUFDO3lCQUVOO3dCQUVELE1BQU1BLElBQUMseUJBQXlCLElBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsWUFBWSxHQUFJLENBQUE7cUJBQ3BIO2lCQUNKLEdBQUcsQ0FBQyxDQUNILENBQ3NCLENBQzlCLENBQUE7SUFDVixDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0seUJBQXlCLEdBQUdHLENBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQWdHO1FBQ2hLLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxNQUFNLHFCQUFxQixHQUFHN04sR0FBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLEdBQUcsVUFBVSxLQUFLLEdBQUcsQ0FBQyxhQUFhLE9BQU8sR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDeEUsTUFBTSxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0csSUFBSSxHQUFHLFVBQVUsS0FBSyxHQUFHLENBQUMsYUFBYSxPQUFPLEdBQUcsV0FBVyxHQUFHLEVBQUUsSUFBSSxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ25HLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLGVBQWUsQ0FBcUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLE1BQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpPLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxHQUFHLHVCQUF1QixDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkYsTUFBTSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsdUJBQXVCLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVuRixRQUFRME47WUFDSkEsa0JBQVcsNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBSTtZQUMzRUEsa0JBQVcsNEJBQTRCLENBQUMsRUFBRSxDQUFDLElBQUcsSUFBSSxDQUFTLENBQ3pELEVBQ0o7SUFDTixDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0sYUFBYSxHQUFHRyxDQUFJLENBQUM7UUFDdkIsTUFBTSxPQUFPLElBQUksTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsR0FBRyxhQUFhLENBQWlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDOUgsTUFBTSxFQUFFLHNCQUFzQixFQUFFLEdBQUcsaUJBQWlCLEVBQWtCLENBQUM7UUFDdkUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsYUFBYSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFDakQsUUFDSUgsYUFBSyxLQUFLLEVBQUMsTUFBTTtZQUNiQTtnQkFBT0EsZUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxFQUFFLEdBQUksQ0FBUTtZQUMvSEEsZ0JBQVMsc0JBQXNCLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDOUNBLGdCQUFTLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZCQSxnQkFBUyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsbUJBQW9CO29CQUNwREEsZ0JBQVMsa0JBQWtCLENBQUMsRUFBRSxDQUFDO3dCQUMzQkEsV0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLDBCQUF5Qjt3QkFDeENBLGVBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBSzt3QkFDOUJBLGVBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBSzt3QkFDOUJBLGVBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBSzt3QkFDOUJBOzRCQUFHQSxnQkFBUSxPQUFPLEVBQUUsT0FBTyxZQUFnQixDQUFJLENBQzdDLENBQ0osQ0FDSixDQUNKLEVBQ1Q7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0sd0JBQXdCLEdBQUdFLENBQWEsQ0FBK0UsSUFBSyxDQUFDLENBQUM7SUFDcEksTUFBTSxvQkFBb0IsR0FBR0MsQ0FBSSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLEdBQUcsb0JBQW9CLENBQTJFLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRzNSLE9BQU9ILGFBQUssS0FBSyxFQUFDLE1BQU07WUFDcEJBLElBQUMsd0JBQXdCLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzFEQSxlQUFRLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTt3QkFDekIsTUFBTUEsSUFBQyx1QkFBdUIsSUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUksQ0FBQTtxQkFDdEQ7aUJBQ0osR0FBRyxDQUFDLENBQ0osQ0FDMkIsQ0FDbEMsQ0FBQTtJQUNWLENBQUMsQ0FBQyxDQUFDO0lBSUgsTUFBTSx1QkFBdUIsR0FBR0csQ0FBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQXNCO1FBQy9ELE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxHQUFHN04sR0FBVSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5SSxPQUFPME4sZUFBUSx5QkFBeUIsQ0FBQyxFQUFFLENBQUM7O1lBQVUsS0FBSyxHQUFHLENBQUM7O1lBQVMsUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFO1lBQUUsUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFLENBQU0sQ0FBQTtJQUM5SSxDQUFDLENBQUMsQ0FBQztJQU1ILE1BQU0sdUJBQXVCLEdBQUdFLENBQWEsQ0FBNkUsSUFBSyxDQUFDLENBQUM7SUFDakksTUFBTSxtQkFBbUIsR0FBR0MsQ0FBSSxDQUFDO1FBRTdCLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLG1CQUFtQixDQUEwRSxFQUFFLENBQUMsQ0FBQztRQUUvTCxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEdBQUcsUUFBUSxDQUFjLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUc3RSxPQUFPSCxhQUFLLEtBQUssRUFBQyxNQUFNO1lBQ3BCQSxJQUFDLHVCQUF1QixDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUsbUJBQW1CO2dCQUN4REEsZUFBUSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsSUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7d0JBQ3pCLFNBQVMsWUFBWSxDQUFDLFFBQWlCOzRCQUVuQyxpQkFBaUIsQ0FBQyxjQUFjO2dDQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQ0FFbkMsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO29DQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUNaLE9BQU8sSUFBSSxDQUFDO2lDQUNmO3FDQUNJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQ0FDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDZixPQUFPLElBQUksQ0FBQztpQ0FDZjtnQ0FFRCxPQUFPLGNBQWMsQ0FBQzs2QkFDekIsQ0FBQyxDQUFDO3lCQUVOO3dCQUVELE1BQU1BLElBQUMsc0JBQXNCLElBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsWUFBWSxHQUFJLENBQUE7cUJBQ25IO2lCQUNKLEdBQUcsQ0FBQyxDQUNKO2dCQUNKLGdCQUFnQixJQUFJLElBQUksSUFBSUEsZUFBSSxnQkFBZ0IsQ0FBSyxDQUN2QixDQUNqQyxDQUFBO0lBQ1YsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBR0UsQ0FBYSxDQUErQyxJQUFLLENBQUMsQ0FBQztJQUMzRixNQUFNLHNCQUFzQixHQUFHQyxDQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUE4RTtRQUM3SSxJQUFJLElBQUksR0FBRyxVQUFVLEtBQUssR0FBRyxDQUFDLFVBQVUsUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN4RSxNQUFNLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLEdBQUc3TixHQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM5SyxJQUFJLEdBQUcsVUFBVSxLQUFLLEdBQUcsQ0FBQyxVQUFVLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxHQUFHLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDcEcsT0FBTzBOLGVBQVEsd0JBQXdCLENBQUMsRUFBRSxDQUFDLElBQUcsSUFBSSxDQUFNLENBQUE7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFFBQVEsR0FBR0csQ0FBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxXQUFXLENBQW1CLEVBQUUsQ0FBQyxDQUFBO1FBRXBHLE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLFdBQVcsQ0FBb0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFFekwsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsYUFBYSxDQUFvQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ2xGLFFBQ0lILGFBQUssS0FBSyxFQUFDLE1BQU07WUFDYkEsSUFBQyxlQUFlLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxXQUFXO2dCQUN4Q0EsbUJBQVksa0JBQWtCLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFvQjtnQkFDNUZBLGVBQVEsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSTtvQkFDckRBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUk7b0JBQzFCQSxJQUFDLFlBQVksSUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFJO29CQUMxQkEsSUFBQyxZQUFZLElBQUMsS0FBSyxFQUFFLENBQUMsR0FBSSxDQUN6QixDQUNrQixDQUV6QixFQUNUO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFlBQVksR0FBR0csQ0FBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQXFCO1FBQ25ELE1BQU0sZUFBZSxHQUFHN04sR0FBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwRSxPQUFPME4sZUFBUSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7O1lBQVEsS0FBSyxHQUFHLENBQUMsQ0FBTSxDQUFBO0lBQzlELENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxVQUFVLEdBQUdFLENBQWEsQ0FBb0MsSUFBSyxDQUFDLENBQUM7SUFDM0UsTUFBTSxlQUFlLEdBQUdBLENBQWEsQ0FBb0MsSUFBSyxDQUFDLENBQUM7SUFDaEYsTUFBTSxRQUFRLEdBQUdDLENBQUksQ0FBQztRQUNsQixNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQXVCLE9BQU8sQ0FBQyxDQUFDO1FBRWxGLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxXQUFXLENBQXdELEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVyUCxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFFMUMsUUFDSUgsSUFBQyxVQUFVLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxNQUFNO1lBQzlCQSxJQUFDLGVBQWUsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLFdBQVc7Z0JBQ3hDQSxhQUFLLEtBQUssRUFBQyxNQUFNO29CQUNiQTt3QkFBT0EsZUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxhQUFhLElBQUksT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUEsRUFBRSxHQUFJOzhDQUEyQjtvQkFFeE1BLGVBQVEsZUFBZSxDQUFDLEVBQUUsQ0FBQzt3QkFBRUEsSUFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLENBQUMsR0FBSTt3QkFBQUEsSUFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLENBQUMsR0FBSTt3QkFBQUEsSUFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLENBQUMsR0FBSTt3QkFBQUEsSUFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLENBQUMsR0FBSTt3QkFBQUEsSUFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLENBQUMsR0FBSSxDQUFLO29CQUMzSUE7d0JBQUtBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUk7d0JBQUFBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUk7d0JBQUFBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUk7d0JBQUFBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUk7d0JBQUFBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLEdBQUksQ0FBTSxDQUMzSSxDQUNpQixDQUNULEVBQ3pCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBR0csQ0FBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQXFCO1FBQzlDLE1BQU0sTUFBTSxHQUFHN04sR0FBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFFMUUsUUFBUTBOO1lBQ0pBLGVBQVEsV0FBVyxDQUFDLEVBQUUsQ0FBQzs7Z0JBQVEsS0FBSyxHQUFHLENBQUM7O2dCQUFJLGFBQWEsUUFBUSxFQUFFO29CQUFPLENBQzNFLEVBQUM7SUFDUixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sWUFBWSxHQUFHRyxDQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBcUI7UUFDbkQsTUFBTSxXQUFXLEdBQUc3TixHQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7UUFFNUQsUUFDSTBOLGdCQUFTLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0NBOztnQkFBdUIsS0FBSyxHQUFHLENBQUM7O2dCQUFJLGFBQWEsT0FBTyxFQUFFO3FCQUFPO1lBQ2pFQSxlQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBSyxDQUNuRixFQUNUO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFdBQVcsR0FBR0csQ0FBSSxDQUFDO1FBQ3JCLE1BQU0sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxVQUFVLEVBQW1CLENBQUM7UUFDMUQsTUFBTSxFQUFFLHNCQUFzQixFQUFFLEdBQUcsaUJBQWlCLEVBQW1CLENBQUM7UUFDeEUsUUFDSUgsYUFBSyxLQUFLLEVBQUMsTUFBTTtZQUNiQTs7Z0JBQThCQSxpQkFBVSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsMEJBQTRCO2dCQUFBQSxpQkFBVSxlQUFlLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxtQ0FBcUMsQ0FBSSxDQUNuTCxFQUNUO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0VBLE1BQU0sU0FBUyxHQUFHO1FBQ2QsT0FBT0EsYUFBSyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7WUFDaERBLElBQUMsV0FBVyxPQUFHO1lBRWZBLElBQUMsUUFBUSxPQUFHO1lBQ1pBLElBQUMsY0FBYyxPQUFHO1lBQ2xCQSxJQUFDLGVBQWUsT0FBRztZQUNuQkEsSUFBQyxRQUFRLE9BQUc7WUFDWkEsSUFBQyxvQkFBb0IsT0FBRztZQUN4QkEsSUFBQyxtQkFBbUIsT0FBRztZQUN2QkEsSUFBQyxlQUFlLE9BQUc7WUFDbkJBLElBQUMsZ0JBQWdCLE9BQUc7WUFDcEJBLElBQUMsYUFBYSxPQUFHO1lBQ2pCQSxJQUFDLHFCQUFxQixPQUFHO1lBR3pCQSxJQUFDLGdCQUFnQixPQUFHO1lBQ3BCQSxJQUFDLGdCQUFnQixPQUFHO1lBQ3BCQSxJQUFDLGdCQUFnQixPQUFHO1lBQ3BCQSxrQkFBUyxDQUNQLENBQUE7SUFDVixDQUFDLENBQUE7SUFFRCxxQkFBcUIsQ0FBQztRQUNsQkksR0FBTSxDQUFDSixJQUFDLFNBQVMsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUM7Ozs7OzsifQ==
