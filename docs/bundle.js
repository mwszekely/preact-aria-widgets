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
      const comparator = useStableCallback((lhs, rhs) => {
        let compare;

        if (typeof lhs === "string" && typeof rhs.text === "string") {
          var _safeRhs$toLowerCase;

          // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
          // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
          let safeLhs = lhs.normalize("NFD");
          let safeRhs = rhs.text.normalize("NFD").substr(0, safeLhs.length);
          if (collator) compare = collator.compare(safeLhs, safeRhs);else compare = safeLhs.toLowerCase().localeCompare((_safeRhs$toLowerCase = safeRhs.toLowerCase()) !== null && _safeRhs$toLowerCase !== void 0 ? _safeRhs$toLowerCase : "");
          return compare;
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
          let sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, comparator);

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

            while (i >= 0 && comparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
              updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
              --i;
            }

            i = sortedTypeaheadIndex;

            while (i < sortedTypeaheadInfo.current.length && comparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
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
            let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, comparator);
            console.assert(sortedIndex < 0);

            if (sortedIndex < 0) {
              sortedTypeaheadInfo.current.splice(-sortedIndex - 1, 0, {
                text,
                unsortedIndex: i.index
              });
            }

            return () => {
              // When unmounting, find where we were and remove ourselves.
              // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
              let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, comparator);
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
      const [lastFocusedIndex, setLastFocusedIndex, getLastFocusedIndex] = useState(0);
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
        index: lastFocusedIndex,
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
            useRefElementProps,
            getElement
          } = useRefElement({});
          const focus = F(() => {
            var _getElement;

            (_getElement = getElement()) === null || _getElement === void 0 ? void 0 : _getElement.focus();
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
              ...useRefElementProps(useManagedChildProps(retB))
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
        useAriaAccordionSection
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
        invalidTypeahead
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
      useSoftDismiss({
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
        return useFocusTrapProps(useMergedProps()(useModalRefElement({
          role: "dialog"
        }), modalDescribedByBody ? pFinal : p2));
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
        focus: focusCurrent
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
        invalidTypeahead
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
        invalidTypeahead
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
        invalidTypeahead
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXRpbWVvdXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZHJvcHBhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWV2ZW50LWhhbmRsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYWN0aXZlLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtaGFzLWZvY3VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWludGVydmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxpc3QtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWZvY3VzLXRyYXAuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9wcm9wcy5qcyIsIi4uL3VzZS1idXR0b24uanMiLCIuLi91c2UtYWNjb3JkaW9uLmpzIiwiLi4vdXNlLWxhYmVsLmpzIiwiLi4vdXNlLWNoZWNrYm94LmpzIiwiLi4vdXNlLWNoZWNrYm94LWdyb3VwLmpzIiwiLi4vdXNlLW1vZGFsLmpzIiwiLi4vdXNlLWRpYWxvZy5qcyIsIi4uL3VzZS1saXN0Ym94LW11bHRpLmpzIiwiLi4vdXNlLWxpc3Rib3gtc2luZ2xlLmpzIiwiLi4vdXNlLW1lbnUuanMiLCIuLi91c2UtdGFicy5qcyIsIi4uL3VzZS10b29sdGlwLmpzIiwiZGVtb3MvdXNlLWludGVydmFsLnRzeCIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS10aW1lb3V0LnRzeCIsImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxyLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmaChvW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsQShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gQShuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEYobix0KXtyZXR1cm4gbz04LEEoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gVChuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIGQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLEEgYXMgdXNlTWVtbyxGIGFzIHVzZUNhbGxiYWNrLFQgYXMgdXNlQ29udGV4dCxkIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogRGVidWcgaG9vay5cbiAqXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRW5zdXJlU3RhYmlsaXR5KC4uLnZhbHVlcykge1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoLCAwKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xuICAgIHJldHVybjtcbiAgICBmdW5jdGlvbiB1c2VIZWxwZXIodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICAgICAgY29uc3QgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkgPSB1c2VSZWYodmFsdWUpO1xuICAgICAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnQgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhpcyBob29rIHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCB2YWx1ZSB0aGF0IHdhcyBjaGVja2VkLmApO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFNpbWlsYXIgdG8gYHVzZVN0YXRlYCwgYnV0IGZvciB2YWx1ZXMgdGhhdCBhcmVuJ3QgXCJyZW5kZXItaW1wb3J0YW50XCIgJm5kYXNoOyB1cGRhdGVzIGRvbid0IGNhdXNlIGEgcmUtcmVuZGVyIGFuZCBzbyB0aGUgdmFsdWUgc2hvdWxkbid0IGJlIHVzZWQgZHVyaW5nIHJlbmRlciAodGhvdWdoIGl0IGNlcnRhaW5seSBjYW4sIGF0IGxlYXN0IGJ5IHJlLXJlbmRlcmluZyBhZ2FpbikuXG4gKlxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKlxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpO1xuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbGV0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZXJlIGFyZSBhIGNvdXBsZSBwbGFjZXMgd2hlcmUgd2UnZCBsaWtlIHRvIHVzZSBvdXIgaW5pdGlhbFxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxuICAgIC8vIGdldFZhbHVlIGlzIGNhbGxlZC5cbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGluaXRpYWxWYWx1ZSwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcpID0+IHtcbiAgICAgICAgY29uc3QgcHJldkRlcCA9IHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVwID0gYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcocHJldkRlcCkgOiBhcmc7XG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBzaG91bGRuJ3QgY2FsbCBnZXRWYWx1ZSBkdXJpbmcgb25DaGFuZ2VcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmQgY2xlYW51cCBmdW5jdGlvblxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGRlcCwgcHJldkRlcCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkZXA7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59XG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXBhc3NpdmUtc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xuICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XG59XG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgIF07XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1syXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMTNdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cblxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdIGFzIGNvbnN0O1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcblxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSk7XG59XG4vKipcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIHJocy5zdHlsZTtcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QobGhzPy5zdHlsZSkgfSwgcmhzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xocy5zdHlsZX07JHtyaHM/LnN0eWxlID8/IFwiXCJ9YDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gbWVyZ2UgdHdvIHByb3BzIHdpdGggdGhlIHNhbWUgbmFtZTogJHtzdHJ9YCk7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ubGhzLFxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcbiAgICAgICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuLypcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcblxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTM6IE0xID0gMDtcblxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTY6IE0yID0gMDtcblxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuXG5cbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XG5cblxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxufVxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxuKi8gXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xuICAgIGNvbnN0IG9uRWxlbWVudENoYW5nZSA9IGFyZ3M/Lm9uRWxlbWVudENoYW5nZTtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRWxlbWVudENoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgZnVuY3Rpb24gZm9vKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwMS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmZ1bmN0aW9uIGV4dHJhY3RFbGVtZW50U2l6ZShlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV0cmlldmUgdGhlIHNpemUgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXRcIik7XG4gICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgIHJldHVybiAoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xufVxuZnVuY3Rpb24gcmV0dXJuTnVsbCgpIHsgcmV0dXJuIG51bGw7IH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh7IGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSk7XG4gICAgY29uc3QgW2dldFNpemUsIHNldFNpemVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU2l6ZUNoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgY29uc3QgY3VycmVudE9ic2VydmVCb3ggPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBuZWVkQU5ld09ic2VydmVyID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG9ic2VydmVCb3gpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzZXRTaXplKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiAoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4gbmVlZEFOZXdPYnNlcnZlcihlLCBnZXRPYnNlcnZlQm94Py4oKSksIFtdKSB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2ZUJveCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgIT09IGdldE9ic2VydmVCb3goKSlcbiAgICAgICAgICAgICAgICBuZWVkQU5ld09ic2VydmVyKGdldEVsZW1lbnQoKSwgZ2V0T2JzZXJ2ZUJveCgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIHVzZUVsZW1lbnRTaXplUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wc1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWxlbWVudC1zaXplLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlRWxlbWVudFNpemUgfSBmcm9tIFwiLi91c2UtZWxlbWVudC1zaXplXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcbn1cbi8qKlxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxuICpcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cbiAqXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxuICpcbiAqIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMvI2xvZ2ljYWwtdG8tcGh5c2ljYWxcbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAqICogYGdldExvZ2ljYWxEaXJlY3Rpb25gOiByZXRyaWV2ZXMgYSBgTG9naWNhbERpcmVjdGlvbkluZm9gIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gKEZ1bmN0aW9uIGlzIGNvbnN0YW50IGJldHdlZW4gcmVuZGVycylcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cbiAqICogYGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25gOiAgQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImlubGluZVwiIG9yIFwiYmxvY2tcIiB0byBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlKTtcbiAgICBjb25zdCBbZ2V0Q29tcHV0ZWRTdHlsZXMsIHNldENvbXB1dGVkU3R5bGVzXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0Q29tcHV0ZWRTdHlsZXMod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICB9KTtcbiAgICAvLyBUT0RPOiBUaGVyZSdzIG5vIHdheSB0byByZWZyZXNoIHdoaWNoIHdyaXRpbmcgbW9kZSB3ZSBoYXZlIG9uY2UgbW91bnRlZC5cbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xuICAgIC8vICAgQi4gQ2FsbGluZyBnZXRDb21wdXRlZFN0eWxlIGFmdGVyIGV2ZXJ5IHJlbmRlciBmb3IgZXZlcnkgZWxlbWVudCBnZXRzIGV4cGVuc2l2ZSBmYXN0IGFuZFxuICAgIC8vICAgQy4gSXMgbm90IG5lY2Vzc2FyeSBmb3IgbW9zdCB1c2UgY2FzZXMgdGhhdCB3aWxsIG5ldmVyIHN3aXRjaCB3cml0aW5nLW1vZGUgd2l0aGluIGEgc2luZ2xlIGNvbXBvbmVudFxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxuICAgIC8vXG4gICAgLy8gQXMgYSBzb2x1dGlvbiwgaGVyZSdzIGEgY2hlYXAgd29ya2Fyb3VuZCB0aGF0IGNoZWNrcyB3aGVuIHRoZSBlbGVtZW50J3Mgc2l6ZSBoYXMgY2hhbmdlZCxcbiAgICAvLyBhbmQgaWYgc28sIHRlc3RzIGlmIHRoZSB3cml0aW5nIG1vZGUgaGFzIGNoYW5nZWQgdG9vLlxuICAgIC8vXG4gICAgLy8gVGhpcyB3aWxsIHdvcmsgZm9yIGF0IGxlYXN0IHNvbWUgbnVtYmVyIG9mIGNhc2VzLCBidXQgYSBiZXR0ZXIgc29sdXRpb24gaXMgc3RpbGwgbmVlZGVkLlxuICAgIGNvbnN0IHsgdXNlRWxlbWVudFNpemVQcm9wcyB9ID0gdXNlRWxlbWVudFNpemUoeyBvblNpemVDaGFuZ2U6IHVzZUNhbGxiYWNrKF8gPT4gb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlPy4oZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKSksIFtdKSB9KTtcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlcygpO1xuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZXMpIHtcbiAgICAgICAgICAgIGxldCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XG4gICAgICAgICAgICBsZXQgZCA9IGNvbXB1dGVkU3R5bGVzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGxldCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXG4gICAgICAgICAgICAgICAgZCA9IFwibHRyXCI7XG4gICAgICAgICAgICByZXR1cm4gKHsgLi4uV3JpdGluZ01vZGVzW3cgfHwgXCJob3Jpem9udGFsLXRiXCJdW2QgfHwgXCJsdHJcIl0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBcImlubGluZVwiO1xuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stc3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMl1dO1xuICAgICAgICAgICAgY2FzZSBcImlubGluZS1zdGFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiaW5saW5lLWVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVsyXV07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gXCJpbmxpbmUtc3RhcnRcIjtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxMZWZ0VG9wKGRpcikgeyBpZiAoZGlyID09PSBcImx0clwiIHx8IGRpciA9PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2lkdGhcIjsgaWYgKGRpciA9PT0gXCJidHRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMiA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pKTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VSZWZFbGVtZW50UHJvcHModXNlRWxlbWVudFNpemVQcm9wcyhwcm9wcykpLCBbXSksXG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsU2l6ZTogY29udmVydEVsZW1lbnRTaXplLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaWRlLFxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbFNpZGVcbiAgICB9O1xufVxuLy8gSGVscGVyIGZvciBleHRyYWN0aW5nIGluZm8gZnJvbSBcImx0clwiLCBcInR0YlwiLCBldGMuXG5jb25zdCBNID0ge1xuICAgIHQ6IFwidG9wXCIsXG4gICAgYjogXCJib3R0b21cIixcbiAgICBsOiBcImxlZnRcIixcbiAgICByOiBcInJpZ2h0XCJcbn07XG47XG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xuICAgIC4uLkhvcml6b250YWxUYkx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXG59O1xuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcbn07XG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXG59O1xuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xuY29uc3QgVmVydGljYWxMckx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbFJ0bCxcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xuICAgIC4uLlZlcnRpY2FsTHJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcbn07XG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xuICAgIC4uLlNpZGV3YXlzTHRMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXG59O1xuY29uc3QgVmVydGljYWxSbCA9IHtcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXG59O1xuY29uc3QgVmVydGljYWxMciA9IHtcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXG59O1xuY29uc3QgU2lkZXdheXNSbCA9IHtcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXG59O1xuY29uc3QgU2lkZXdheXNMciA9IHtcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXG59O1xuY29uc3QgV3JpdGluZ01vZGVzID0ge1xuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZVAocHJldlZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFZhbHVlID0gY2FsbGJhY2socHJldlZhbHVlKTtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgICAgc2V0U3RhdGVQKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSB8fCAodHlwZW9mIHN0YXRlID09PSBcIm51bWJlclwiICYmIGlzTmFOKHN0YXRlKSkpO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBnZXRTdGF0ZV07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5mdW5jdGlvbiBiYXNlNjQodmFsdWUpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG4vKipcbiAqIFJldHVybnMgYSBob29rIHRoYXQgbW9kaWZpZXMgYSBzZXQgb2YgcHJvcHMgdG8gcHJvdmlkZSBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCBpZiBvbmUgd2FzIG5vdCBwcm92aWRlZC5cbiAqXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEFuZCB0aGUgcmFuZG9tbHktZ2VuZXJhdGVkIGlkIGl0c2VsZiBpcyBhbHNvIHByb3ZpZGVkIGluIGNhc2UgeW91IHdhbnQgdG8gaGFuZGxlIHRoZSBsb2dpYyB5b3Vyc2VsZiB3aXRob3V0IGB1c2VNZXJnZWRQcm9wc2AuXG4gKlxuICogVW5saWtlIG1vc3Qgb3RoZXIgYHVzZSpQcm9wc2AgaG9va3MsIHRoZXNlIGFyZSBtb3N0bHkgc3RhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XG4gICAgY29uc3QgW3JhbmRvbUlkLCBzZXRSYW5kb21JZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeCkpO1xuICAgIGNvbnN0IFt3YXRjaFByZWZpeFVwZGF0ZXMsIHNldFdhdGNoUHJlZml4VXBkYXRlcywgZ2V0V2F0Y2hQcmVmaXhVcGRhdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3YXRjaFByZWZpeFVwZGF0ZXMgPSBnZXRXYXRjaFByZWZpeFVwZGF0ZXMoKTtcbiAgICAgICAgaWYgKHdhdGNoUHJlZml4VXBkYXRlcylcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XG4gICAgICAgIHNldFdhdGNoUHJlZml4VXBkYXRlcyh0cnVlKTtcbiAgICB9LCBbcHJlZml4XSk7XG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxuICAgIC8vIFVzZWQgc28gdGhhdCBhbnkgSUQtcmVmZXJlbmNpbmcgcHJvcHMgZG9uJ3QgbmVlZCB0byBwcm92aWRlIHRoZSBzYW1lIHZhbHVlLlxuICAgIC8vXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcbiAgICAvLyB0aGVyZSB3aWxsIGJlIGEgdGVtcG9yYXJ5IG1pc21hdGNoLCBidXQgaXQncyBjb3JyZWN0ZWQgYmVmb3JlIHJlbmRlcmluZyBmaW5pc2hlcy5cbiAgICAvLyBJcyB0aGlzIG9rYXk/XG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCB1c2VSZWZlcmVuY2VkSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJlZmVyZW5jZWRJZFByb3BzKGlkUHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gZnVuY3Rpb24gKHsgW2lkUHJvcE5hbWVdOiBnaXZlbklkLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAoaWRQcm9wTmFtZSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgICAgIHNldFVzZWRJZCh1c2VkSWQyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xuICAgIGNvbnN0IHVzZVJhbmRvbUlkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VSYW5kb21JZFByb3BzKHApIHtcbiAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiaWRcIikocCk7XG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZG9tSWQsXG4gICAgICAgIGlkOiB1c2VkSWQsXG4gICAgICAgIGdldElkOiBnZXRVc2VkSWQsXG4gICAgICAgIHVzZVJhbmRvbUlkUHJvcHMsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzKHN0cikgeyB9XG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xuICAgIGNvbnN0IHsgaWQsIHJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoKTtcbiAgICAvL2NvbnN0IHAxYTogTWVyZ2VkUHJvcHM8eyBpZDogc3RyaW5nIH0sIHsgIH0+ID0gdXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSlcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHAyYiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xuICAgIGNvbnN0IHAzYSA9IHVzZVJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwM2IgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwNGIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwMWIpO1xuICAgIC8vcDFhLmlkO1xuICAgIHAxYi5pZDtcbiAgICBwMmFbXCJmb3JcIl07XG4gICAgcDJiW1wiZm9yXCJdO1xuICAgIHAyY1tcImZvclwiXTtcbiAgICBwM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwM2JbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGFbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBJdCdzIGJlY2F1c2UgaXQgcmVzb2x2ZXMgdG8gXCJpZDogdW5kZWZpbmVkICYgc3RyaW5nXCIgLS0gdGhpcyBzaG91bGRuJ3QgaGFwcGVuXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDFiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDJhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMmIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDNhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDNiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHA0YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDRiLnN0eWxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yYW5kb20taWQuanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xuY29uc3QgcHJldmlvdXNJbnB1dHMgPSBuZXcgTWFwKCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXAoKTtcbmNvbnN0IGNvbW1pdE5hbWUgPSAoXCJfX2NcIiBpbiBvcHRpb25zID8gXCJfX2NcIiA6IFwiY29tbWl0XCIgaW4gb3B0aW9ucyA/IFwiY29tbWl0XCIgOiBcIl9jb21taXRcIiBpbiBvcHRpb25zID8gXCJfY29tbWl0XCIgOiBcIl9fY1wiKTtcbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxuLy8gaXMgYSBwb3N0LXN1c3BlbnNlIHF1ZXN0aW9uLlxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XG4vLyBzbyBgcmVmPXtzb21lU3RhYmxlRnVuY3Rpb259YCB3b3Jrcy5cbi8vIFxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV07XG5jb25zdCBuZXdDb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG4gICAgZm9yIChsZXQgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICpcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xuICAgICAgICB9O1xuICAgIH0sIFtpZF0pO1xufVxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXG4gKlxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG4vKipcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxuICpcbiAqIERvIG5vdCB1c2UgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UhICBgdXNlTGF5b3V0RWZmZWN0YCBpcyBmaW5lIHRob3VnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IGFzIHVzZUVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBXcmFwIHRoZSBuYXRpdmUgYHVzZUVmZmVjdGAgdG8gYWRkIGFyZ3VtZW50c1xuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICogQHBhcmFtIGltcGwgWW91IGNhbiBjaG9vc2Ugd2hldGhlciB0byB1c2UgYHVzZUVmZmVjdGAgb3IgYHVzZUxheW91dEVmZmVjdGAgYnlcbiAqIHBhc3Npbmcgb25lIG9mIHRoZW0gYXMgdGhpcyBhcmd1bWVudC4gQnkgZGVmYXVsdCwgaXQncyBgdXNlRWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cywgaW1wbCA9IHVzZUVmZmVjdE5hdGl2ZSkge1xuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2hhbmdlcyA9IFtdO1xuICAgICAgICBpZiAoaW5wdXRzICYmIHByZXZJbnB1dHMuY3VycmVudCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJbnB1dHMuY3VycmVudFtpXSAhPSBpbnB1dHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBsKGVmZmVjdDIsIGlucHV0cyk7XG59XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCBhcyB1c2VMYXlvdXRFZmZlY3ROYXRpdmUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwiLi91c2UtZWZmZWN0XCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICByZXR1cm4gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCB1c2VMYXlvdXRFZmZlY3ROYXRpdmUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRpbWVvdXQoeyB0aW1lb3V0LCBjYWxsYmFjaywgdHJpZ2dlckluZGV4IH0pIHtcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xuICAgIC8vIFNldCBhbnkgdGltZSB3ZSBzdGFydCB0aW1lb3V0LlxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xuICAgIGNvbnN0IHN0YXJ0VGltZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB0aW1lb3V0SXNOdWxsID0gKHRpbWVvdXQgPT0gbnVsbCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXG4gICAgLy8gcmVzdGFydCB0aGUgdGltZW91dC4gIFRoZSB0aW1lb3V0IGRvZXMgTk9UIHJlc2V0XG4gICAgLy8gd2hlbiB0aGUgZHVyYXRpb24gb3IgY2FsbGJhY2sgY2hhbmdlcywgb25seSB0cmlnZ2VySW5kZXguXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aW1lb3V0SXNOdWxsKSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KHN0YWJsZUNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XG4gICAgY29uc3QgZ2V0RWxhcHNlZFRpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKyhuZXcgRGF0ZSgpKSkgLSAoKyhzdGFydFRpbWVSZWYuY3VycmVudCA/PyBuZXcgRGF0ZSgpKSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdldFJlbWFpbmluZ1RpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4geyBnZXRFbGFwc2VkVGltZSwgZ2V0UmVtYWluaW5nVGltZSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRpbWVvdXQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xuLyoqXG4gKiBXaGVuIHVzZWQgaW4gdGFuZGVtIHdpdGggYHVzZVJvdmluZ1RhYkluZGV4YCwgYWxsb3dzIGNvbnRyb2wgb2ZcbiAqIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHRoZSBhcnJvdyBrZXlzLlxuICpcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgaW5kZXgsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvUHJldiwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlQXJyb3dLZXlzLCBkaXNhYmxlSG9tZUVuZEtleXMgfSkge1xuICAgIG5hdmlnYXRpb25EaXJlY3Rpb24gPz89IFwiZWl0aGVyXCI7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaW5kZXgsIGNoaWxkQ291bnQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3RdKTtcbiAgICAvLyBUaGVzZSBhbGxvdyB1cyB0byBtYW5pcHVsYXRlIHdoYXQgb3VyIGN1cnJlbnQgdGFiYmFibGUgY2hpbGQgaXMuXG4gICAgLypjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpID49IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxPyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSA6ICsraSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA8IDA/IDAgOiAtLWkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoLTEpOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7Ki9cbiAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmRleCk7XG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgdXNlTG9naWNhbERpcmVjdGlvblByb3BzIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKHt9KTtcbiAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBsZXQgYWxsb3dzQmxvY2tOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJibG9ja1wiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XG4gICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIHByb3BzKSk7IH0sIFtdKSxcbiAgICB9O1xufVxuLyoqXG4gKiBBbGxvd3MgZm9yIHRoZSBzZWxlY3Rpb24gb2YgYSBtYW5hZ2VkIGNoaWxkIGJ5IHR5cGluZyB0aGUgZ2l2ZW4gdGV4dCBhc3NvY2lhdGVkIHdpdGggaXQuXG4gKlxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcbiAgICAvLyBGb3IgdHlwZWFoZWFkLCBrZWVwIHRyYWNrIG9mIHdoYXQgb3VyIGN1cnJlbnQgXCJzZWFyY2hcIiBzdHJpbmcgaXMgKGlmIHdlIGhhdmUgb25lKVxuICAgIC8vIGFuZCBhbHNvIGNsZWFyIGl0IGV2ZXJ5IDEwMDAgbXMgc2luY2UgdGhlIGxhc3QgdGltZSBpdCBjaGFuZ2VkLlxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cbiAgICAvLyBBbmQsIGZvciB0aGUgdXNlcidzIHNha2UsIGxldCB0aGVtIGtub3cgd2hlbiB0aGVpciB0eXBlYWhlYWQgY2FuJ3QgbWF0Y2ggYW55dGhpbmcgYW55bW9yZVxuICAgIGNvbnN0IFtjdXJyZW50VHlwZWFoZWFkLCBzZXRDdXJyZW50VHlwZWFoZWFkLCBnZXRDdXJyZW50VHlwZWFoZWFkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcbiAgICBjb25zdCBzb3J0ZWRUeXBlYWhlYWRJbmZvID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbaW52YWxpZFR5cGVhaGVhZCwgc2V0SW52YWxpZFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxuICAgIC8vIEVzc2VudGlhbGx5LCB3aGVuIGFjdGl2ZSwgaWdub3JlIGZ1cnRoZXIga2V5cyBcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHdhaXRpbmcgZm9yIGEgQ29tcG9zaXRpb25FbmQgZXZlbnRcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxuICAgIC8vIChidXQgd2l0aGluIHRoZSBzYW1lIHRhc2ssIHdoaWNoLCBUT0RPLCBjb3VsZCBiZSBicm93c2VyLWRlcGVuZGVudCksXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xuICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIobnVsbCk7XG4gICAgICAgIH1cbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcbiAgICBjb25zdCBjb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XG4gICAgICAgIGxldCBjb21wYXJlO1xuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIEZvciB0aGUgcHVycG9zZXMgb2YgdHlwZWFoZWFkLCBvbmx5IGNvbXBhcmUgYSBzdHJpbmcgb2YgdGhlIHNhbWUgc2l6ZSBhcyBvdXIgY3VycmVudGx5IHR5cGVkIHN0cmluZy5cbiAgICAgICAgICAgIC8vIEJ5IG5vcm1hbGl6aW5nIHRoZW0gZmlyc3QsIHdlIGVuc3VyZSB0aGlzIGJ5dGUtYnktYnl0ZSBoYW5kbGluZyBvZiByYXcgY2hhcmFjdGVyIGRhdGEgd29ya3Mgb3V0IG9rYXkuXG4gICAgICAgICAgICBsZXQgc2FmZUxocyA9IGxocy5ub3JtYWxpemUoXCJORkRcIik7XG4gICAgICAgICAgICBsZXQgc2FmZVJocyA9IHJocy50ZXh0Lm5vcm1hbGl6ZShcIk5GRFwiKS5zdWJzdHIoMCwgc2FmZUxocy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGNvbGxhdG9yKVxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSBjb2xsYXRvci5jb21wYXJlKHNhZmVMaHMsIHNhZmVSaHMpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGhzIC0gcmhzO1xuICAgIH0pO1xuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvblN0YXJ0ID0gKGUpID0+IHsgc2V0SW1lQWN0aXZlKHRydWUpOyB9O1xuICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uRW5kID0gKGUpID0+IHtcbiAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGUuZGF0YSk7XG4gICAgICAgICAgICBzZXRJbWVBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1lQWN0aXZlID0gZ2V0SW1lQWN0aXZlKCk7XG4gICAgICAgICAgICBsZXQga2V5ID0gZS5rZXk7XG4gICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICghaW1lQWN0aXZlICYmIGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdheSB0aGF0IGRvZXNuJ3Qgc3BsaXQgVVRGLTE2IHN1cnJvZ2F0ZXMuXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0ID0+IHQgPT09IG51bGwgPyBudWxsIDogWy4uLnRdLnJldmVyc2UoKS5zbGljZSgxKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIGtleSBwcm9wZXJ0eSByZXByZXNlbnRzIHRoZSB0eXBlZCBjaGFyYWN0ZXIgT1IgdGhlIFwibmFtZWQga2V5IGF0dHJpYnV0ZVwiIG9mIHRoZSBrZXkgcHJlc3NlZC5cbiAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gZGVmaW5pdGUgd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UsIGJ1dCBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzXG4gICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gb25lLWNoYXJhY3RlciBuYW1lcywgYW5kIHRoZXJlIGFyZSBubyBub24tQVNDSUktYWxwaGEgbmFtZXMuXG4gICAgICAgICAgICAvLyBUaHVzLCBhbnkgb25lLWNoYXJhY3RlciBvciBub24tQVNDSUkgdmFsdWUgZm9yIGBrZXlgIGlzICphbG1vc3QgY2VydGFpbmx5KiBhIHR5cGVkIGNoYXJhY3Rlci5cbiAgICAgICAgICAgIGNvbnN0IGlzQ2hhcmFjdGVyS2V5ID0gKGtleS5sZW5ndGggPT09IDEgfHwgIS9eW0EtWmEtel0vLnRlc3Qoa2V5KSk7XG4gICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwiIFwiICYmIChnZXRDdXJyZW50VHlwZWFoZWFkKCkgPz8gXCJcIikudHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGJlY2F1c2UgYSBzcGFjZWJhciBjYW4ndCBldmVyIFxuICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWF0ZSBhIHR5cGVhaGVhZCwgb25seSBjb250aW51ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgIC8vIChTcGVjaWZpY2FsbHksIGxldCB0aGUgZXZlbnQgY29udGludWUgcHJvcGFnYXRpb24gaW4gdGhpcyBjYXNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBXb24ndCBiZSB0cnVlIGZvciB0aGUgZmlyc3Qga2V5ZG93blxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2lsbCBiZSBvdmVyd3JpdHRlbiBiZWZvcmUgdXNlTGF5b3V0RWZmZWN0IGlzIGNhbGxlZFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhY3R1YWxseSBhcHBseSB0aGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0sIHByb3BzKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gSGFuZGxlIGNoYW5nZXMgaW4gdHlwZWFoZWFkIHRoYXQgY2F1c2UgY2hhbmdlcyB0byB0aGUgdGFiYmFibGUgaW5kZXhcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFR5cGVhaGVhZCAmJiBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc29ydGVkVHlwZWFoZWFkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBjb21wYXJhdG9yKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZWRUeXBlYWhlYWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBoYXMgdHlwZWQgYW4gZW50cnkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgLy8gKG9yIG1vcmUgc3BlY2lmaWNhbGx5IFwiZm9yIHdoaWNoIHRoZXJlIGlzIG5vIGVudHJ5IHRoYXQgc3RhcnRzIHdpdGggdGhhdCBpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHNldEludmFsaWRUeXBlYWhlYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgV2Uga25vdyByb3VnaGx5IHdoZXJlLCBpbiB0aGUgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MsIG91ciBuZXh0IHR5cGVhaGVhZCBsb2NhdGlvbiBpcy5cbiAgICAgICAgICAgICAgICAgIEJ1dCByb3VnaGx5IGlzbid0IGdvb2QgZW5vdWdoIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBtYXRjaGVzLlxuICAgICAgICAgICAgICAgICAgVG8gY29udmVydCBvdXIgc29ydGVkIGluZGV4IHRvIHRoZSB1bnNvcnRlZCBpbmRleCB3ZSBuZWVkLCB3ZSBoYXZlIHRvIGZpbmQgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICBlbGVtZW50IHRoYXQgbWF0Y2hlcyB1cyAqYW5kKiAoaWYgYW55IHN1Y2ggZXhpc3QpIGlzICphZnRlciogb3VyIGN1cnJlbnQgc2VsZWN0aW9uLlxuXG4gICAgICAgICAgICAgICAgICBJbiBvdGhlciB3b3JkcywgdGhlIG9ubHkgd2F5IHR5cGVhaGVhZCBtb3ZlcyBiYWNrd2FyZHMgcmVsYXRpdmUgdG8gb3VyIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIGlzIGlmIHRoZSBvbmx5IG90aGVyIG9wdGlvbiBpcyBiZWhpbmQgdXMuXG5cbiAgICAgICAgICAgICAgICAgIEl0J3Mgbm90IHNwZWNpZmllZCBpbiBXQUktQVJJQSB3aGF0IHRvIGRvIGluIHRoYXQgY2FzZS4gIEkgc3VwcG9zZSB3cmFwIGJhY2sgdG8gdGhlIHN0YXJ0P1xuICAgICAgICAgICAgICAgICAgVGhvdWdoIHRoZXJlJ3MgYWxzbyBhIGNhc2UgZm9yIGp1c3QgZ29pbmcgdXB3YXJkcyB0byB0aGUgbmVhcmVzdCB0byBwcmV2ZW50IGp1bXBpbmVzcy5cbiAgICAgICAgICAgICAgICAgIEJ1dCBpZiB5b3UncmUgYWxyZWFkeSBkb2luZyB0eXBlYWhlYWQgb24gYW4gdW5zb3J0ZWQgbGlzdCwgbGlrZSwganVtcGluZXNzIGNhbid0IGJlIGF2b2lkZWQuXG4gICAgICAgICAgICAgICAgICBJIGR1bm5vLiBHb2luZyBiYWNrIHRvIHRoZSBzdGFydCBpcyB0aGUgc2ltcGxpc3QgdGhvdWdoLlxuXG4gICAgICAgICAgICAgICAgICBCYXNpY2FsbHkgd2hhdCB0aGlzIGRvZXM6IFN0YXJ0aW5nIGZyb20gd2hlcmUgd2UgZm91bmQgb3Vyc2VsdmVzIGFmdGVyIG91ciBiaW5hcnkgc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgc2NhbiBiYWNrd2FyZHMgYW5kIGZvcndhcmRzIHRocm91Z2ggYWxsIGFkamFjZW50IGVudHJpZXMgdGhhdCBhbHNvIGNvbXBhcmUgZXF1YWxseSBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICB3ZSBjYW4gZmluZCB0aGUgb25lIHdob3NlIGB1bnNvcnRlZEluZGV4YCBpcyB0aGUgbG93ZXN0IGFtb25nc3QgYWxsIG90aGVyIGVxdWFsIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgIChhbmQgYWxzbyB0aGUgbG93ZXN0IGB1bnNvcnRlZEluZGV4YCB5YWRkYSB5YWRkYSBleGNlcHQgdGhhdCBpdCBjb21lcyBhZnRlciB1cykuXG5cbiAgICAgICAgICAgICAgICAgIFRPRE86IFRoZSBiaW5hcnkgc2VhcmNoIHN0YXJ0cyB0aGlzIG9mZiB3aXRoIGEgc29saWQgTyhsb2cgbiksIGJ1dCBvbmUtY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hlcyBhcmUsIHRoYW5rcyB0byBwaWdlb25ob2xlIHByaW5jaXBhbCwgZXZlbnR1YWxseSBndWFyYW50ZWVkIHRvIGJlY29tZVxuICAgICAgICAgICAgICAgICAgTyhuKmxvZyBuKS4gVGhpcyBpcyBhbm5veWluZyBidXQgcHJvYmFibHkgbm90IGVhc2lseSBzb2x2YWJsZT8gVGhlcmUgY291bGQgYmUgYW5cbiAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiBmb3Igb25lLWNoYXJhY3RlciBzdHJpbmdzLCBidXQgdGhhdCdzIGp1c3Qga2lja2luZyB0aGUgY2FuIGRvd25cbiAgICAgICAgICAgICAgICAgIHRoZSByb2FkLiBNYXliZSBvbmUgb3IgdHdvIGNoYXJhY3RlcnMgd291bGQgYmUgZ29vZCBlbm91Z2ggdGhvdWdoLlxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgYXJlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgY2FuZGlkYXRlcycgcG9zaXRpb25zIGluIGJvdGggb3VyIHNvcnRlZCBhcnJheSBhbmQgdGhlIHVuc29ydGVkIERPTS5cbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4QWxsID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgdHdvIGFyZSBvbmx5IHNldCBmb3IgZWxlbWVudHMgdGhhdCBhcmUgYWhlYWQgb2YgdXMsIGJ1dCB0aGUgcHJpbmNpcGxlJ3MgdGhlIHNhbWUgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQmVzdEZpdCA9ICh1KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhBbGwgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQpICYmIHUgPiAoZ2V0SW5kZXgoKSA/PyAtSW5maW5pdHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleE5leHQgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCAmJiBjb21wYXJhdG9yKGN1cnJlbnRUeXBlYWhlYWQsIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleE5leHRdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleEFsbF0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFR5cGVhaGVhZF0pO1xuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IHRleHQsIC4uLmkgfSkgPT4ge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoZXJlIHRvIGluc2VydCB0aGlzIGl0ZW0uXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSBhbGwgaW5kZXggdmFsdWVzIHNob3VsZCBiZSB1bmlxdWUsIHRoZSByZXR1cm5lZCBzb3J0ZWRJbmRleFxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgcmVmZXIgdG8gYSBuZXcgbG9jYXRpb24gKGkuZS4gYmUgbmVnYXRpdmUpICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4IDwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKC1zb3J0ZWRJbmRleCAtIDEsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBmaW5kIHdoZXJlIHdlIHdlcmUgYW5kIHJlbW92ZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFnYWluLCB3ZSBzaG91bGQgYWx3YXlzIGZpbmQgb3Vyc2VsdmVzIGJlY2F1c2UgdGhlcmUgc2hvdWxkIGJlIG5vIGR1cGxpY2F0ZSB2YWx1ZXMgaWYgZWFjaCBpbmRleCBpcyB1bmlxdWUuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA+PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RleHRdKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcbiAgICB9O1xufVxuLyoqXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXG4gKlxuICogSXQncyB1c2VkIGhlcmUgdG8gcXVpY2tseSBmaW5kIGEgZ29vZCBzcG90IHRvIHN0YXJ0IHNlYXJjaGluZyBmb3Igb3VyIG5leHQgdHlwZWFoZWFkIGNhbmRpZGF0ZS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB3YW50ZWQgVGhlIHZhbHVlIHlvdSdkIGxpa2UgdG8gZmluZFxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyZXMgYHdhbnRlZGAgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBpbiBgYXJyYXlgXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXG4gKiBUaGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBudW1iZXIsIG1pbnVzIG9uZSwgaXMgd2hlcmUgYHdhbnRlZGAgKndvdWxkKiBiZSBmb3VuZCBpZiBpdCAqd2FzKiBpbiBgYXJyYXlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xuICAgIHZhciBmaXJzdEluZGV4ID0gMDtcbiAgICB2YXIgbGFzdEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgdmFyIHRlc3RJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSA+PiAxO1xuICAgICAgICB2YXIgY29tcGFyaXNvblJlc3VsdCA9IGNvbXBhcmF0b3Iod2FudGVkLCBhcnJheVt0ZXN0SW5kZXhdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gdGVzdEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gdGVzdEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC1maXJzdEluZGV4IC0gMTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICogQWxsb3dzIGEgcGFyZW50IGNvbXBvbmVudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgY2VydGFpblxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cbiAqXG4gKiBUaGlzIGhvb2sgaXMgc2xpZ2h0bHkgbW9yZSBjb21wbGljYXRlZCBpbiB0aGF0IGl0IHJldHVybnMgYm90aCBhXG4gKiBwcm9wLW1vZGlmeWluZyBob29rLCBidXQgYWxzbyBhIGhvb2sgdGhhdCBlYWNoIGNoaWxkIHdpbGwgbmVlZFxuICogdG8gdXNlOiBgdXNlTWFuYWdlZENoaWxkYC4gIEl0J3Mgc3RhYmxlIGFjcm9zcyByZW5kZXJzLCBzbyBqdXN0XG4gKiB0b3NzIGl0IGludG8gYSBgQ29udGV4dGAgc28gdGhlIGNoaWxkcmVuIGNhbiBoYXZlIGFjY2VzcyB0byBpdC5cbiAqIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHRoZSBjaGlsZCB3aXRoIHRoZSBwYXJlbnQgYW5kIHByb3ZpZGVzXG4gKiBpdCB3aXRoIGFueSByZXF1ZXN0ZWQgaW5mb3JtYXRpb24sIGJ1dCBkb2Vzbid0IGRvIGFueXRoaW5nIGVsc2VcbiAqIHVudGlsIGl0IHVubW91bnRzIGFuZCByZXRyYWN0cyB0aGF0IGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRNYW5hZ2VyKCkge1xuICAgIC8vIFRoaXMgaXMgYmxpbmRseSB1cGRhdGVkIGFueSB0aW1lIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzIGl0c2VsZi5cbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXG4gICAgLy8gd2UgYWxzbyByZS1yZW5kZXIuXG4gICAgY29uc3QgW2NoaWxkVXBkYXRlSW5kZXgsIHNldENoaWxkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Nb3VudGVkLCBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCwgZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgc2V0VG90YWxDaGlsZHJlblVub3VudGVkLCBnZXRUb3RhbENoaWxkcmVuVW5vdW50ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkID0gdG90YWxDaGlsZHJlbk1vdW50ZWQgLSB0b3RhbENoaWxkcmVuVW5vdW50ZWQ7XG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdIC8qKiBUT0RPOiBBbnkgcHJvYmxlbXMgY2F1c2VkIGJ5IHVzaW5nIGFuIGFycmF5IHdoZW4gaXQgc2hvdWxkIGJlIGFuIG9iamVjdD8gKi8pO1xuICAgIGNvbnN0IG1vdW50ZWRDaGlsZHJlbiA9IHVzZVJlZihbXSk7XG4gICAgY29uc3QgbW91bnRPcmRlciA9IHVzZVJlZihuZXcgTWFwKCkpO1xuICAgIGNvbnN0IGluZGljZXNCeUVsZW1lbnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBkZWxldGVkSW5kaWNlcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xuICAgIC8vIFVzZWQgdG8ga2VlcCB0cmFjayBvZiBpbmRpY2VzIHRoYXQgaGF2ZSBcIm92ZXItbW91bnRlZFwiIGFuZCBieSBob3cgbXVjaC5cbiAgICAvLyBXZSBuZWVkIHRoaXMgc28gdGhhdCB3ZSBkb24ndCBlcmFzZSBzYXZlZCBpbmZvcm1hdGlvbiB3aGVuIGEgY29tcG9uZW50XG4gICAgLy8gXCJvdmVybW91bnRzXCIgb3ZlciBhbm90aGVyIHdoaWNoIHRoZW4sIGNvcnJlY3RseSwgc3dpdGNoZXMgKml0c2VsZiogdG8gc29tZXRoaW5nIGVsc2UuXG4gICAgLy8gSW4gZ2VuZXJhbCwgdGhpcyBzaG91bGQgb25seSBoYXBwZW4gd2hlbiBjb21wb25lbnRzIGFyZSBzd2FwcGluZyBiZXR3ZWVuIGluZGljZXMuXG4gICAgLy8gQnkgdGhlIHRpbWUgdGhleSdyZSBkb25lLCB0aGlzIG1hcCBzaG91bGQgYmUgYWxsIDBzIGFnYWluLCBhdCB3aGljaCBwb2ludFxuICAgIC8vIGl0J3Mgb2theSB0byBhY3R1YWxseSBydW4gdGhlIHVubW91bnQgY29kZS5cbiAgICAvLyBcbiAgICAvLyBUT0RPOiB0aHJvdyBhIGNvbnNvbGUuYXNzZXJ0IHNvbWV3aGVyZSB0byBtYWtlIHVwIGZvciB0aGUgbG9zdCBcbiAgICAvLyBcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVyd3JpdGUgdGhpcyBjaGlsZCdzIGluZGV4IVwiIGFzc2VydGlvbi5cbiAgICAvLyBOYW1lbHksIGlzIHRoaXMgbWFwIGFsbCAwcyB3aGVuIHRoZSBwYXJlbnQgZWxlbWVudCByZS1yZW5kZXJzPyBcbiAgICAvLyBQcm9iYWJseSBub3QgYmVjYXVzZSBvZiBzZXRDaGlsZFVwZGF0ZUluZGV4XG4gICAgY29uc3Qgb3Zlcm1vdW50Q291bnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBnZXRNb3VudEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7IHJldHVybiBtb3VudE9yZGVyLmN1cnJlbnQuZ2V0KGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5zZXQoZWxlbWVudCwgaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnQuZGVsZXRlKGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmFkZChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZm8uaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFttYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggLSAxXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pIH0pO1xuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWQoKTtcbiAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5zZXQoaW5mby5pbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcbiAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKHQgPT4gKyt0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW91bnRPcmRlci5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBtb3VudGVkQ2hpbGRyZW4uY3VycmVudFtpbmRleF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCh0ID0+ICsrdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbaW5mby5pbmRleF0pO1xuICAgICAgICAvLyBBbnkgdGltZSBvdXIgY2hpbGQgcHJvcHMgY2hhbmdlLCBtYWtlIHRoYXQgaW5mb3JtYXRpb24gYXZhaWxhYmxlIGdlbmVyYWxseS5cbiAgICAgICAgLy8gKkRvbid0IHJlLXJlbmRlciosIG90aGVyd2lzZSB3ZSdkIGJlIHN0dWNrIGluIGFuXG4gICAgICAgIC8vIGluZmluaXRlIGxvb3AgZXZlcnkgdGltZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gaXMgcGFzc2VkLlxuICAgICAgICAvLyBJdCBjb21lcyBpbiBmcm9tIHRoZSBwcm9wcyBzbyB0aGUgY2hpbGQgd2FzIGFscmVhZHkgdXBkYXRlZCBieSBpdCAtLVxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBwYXJlbnQgdG8gcmUtcmVuZGVyIGV2ZXJ5IHNpbmdsZSBjaGlsZCBhbnkgdGltZVxuICAgICAgICAvLyBcIm9uQ2xpY2tcIiB1cGRhdGVzIG9yIHdoYXRldmVyLiAgVGhlIHJlbGV2YW50IGNoaWxkIGFscmVhZHkga25vd3MsXG4gICAgICAgIC8vIGFuZCB0aGF0J3Mgd2hhdCBtYXR0ZXJzLlxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xuICAgICAgICB9LCBbLi4uT2JqZWN0LmVudHJpZXMoaW5mbykuZmxhdCgpXSk7XG4gICAgICAgIHJldHVybiB7IGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTWFuYWdlZENoaWxkLFxuICAgICAgICBjaGlsZENvdW50OiBjaGlsZHJlbkN1cnJlbnRseU1vdW50ZWQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQsXG4gICAgICAgIG1vdW50ZWRDaGlsZHJlbjogbW91bnRlZENoaWxkcmVuLmN1cnJlbnQsXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQ6IGluZGljZXNCeUVsZW1lbnQuY3VycmVudCxcbiAgICAgICAgdG90YWxDaGlsZHJlbk1vdW50ZWQsXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZCxcbiAgICAgICAgZ2V0TW91bnRJbmRleCxcbiAgICAgICAgZGVsZXRlZEluZGljZXM6IGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnRcbiAgICB9O1xufVxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxldHRpbmcgY2hpbGRyZW4ga25vdyB3aGVuIHRoZXkgYXJlIG9yIGFyZSBub3QgdGhlXG4gKiBjdXJyZW50IHNlbGVjdGVkL2V4cGFuZGVkL2ZvY3VzZWQvd2hhdGV2ZXIgY2hpbGQuXG4gKlxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIHdoZW4gY2hpbGRyZW4gYXJlIG1vdW50ZWQgJiB1bm1vdW50ZWQgYW5kIHN1Y2guXG4gKlxuICogV2hpbGUgaXQgd2lsbCBiZSBjYWxsZWQgb25jZSBmb3IgZXZlcnkgY2hpbGQgb24gbW91bnQsIGFmdGVyIHRoYXQgc2V0RmxhZ1xuICogaXMgZ3VhcmFudGVlZCB0byBvbmx5IGJlIGNhbGxlZCBvbmNlIG9uIGFjdGl2YXRpb24gYW5kIG9uY2Ugb24gZGVhY3RpdmF0aW9uLFxuICogc28gaXQncyBnZW5lcmFsbHkgc2FmZSB0byBwdXQgc2lkZSBlZmZlY3RzIGluc2lkZSBpZiBuZWNlc3NhcnkuXG4gKiBJdCdzIGFsc28gc2FmZSB0byBtYWtlIGl0IG5vbi1zdGFibGUuXG4gKlxuICogQHBhcmFtIGFjdGl2YXRlZEluZGV4IFdoYXQgaW5kZXggdGhlIGN1cnJlbnQgc2VsZWN0ZWQgKGV0Yy4pIGNoaWxkIGlzXG4gKiBAcGFyYW0gbGVuZ3RoIEhvdyBtYW55IGNoaWxkcmVuIGV4aXN0IChhcyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKVxuICogQHBhcmFtIHNldEZsYWcgQSBmdW5jdGlvbiB0aGF0IHByb2JhYmx5IGxvb2tzIGxpa2UgKGksIGZsYWcpID0+IG1hbmFnZWRDaGlsZHJlbltpXS5zZXRBY3RpdmUoZmxhZylcbiAqIEBwYXJhbSB1c2VFZmZlY3QgV2hpY2ggdmVyc2lvbiBvZiB1c2VFZmZlY3QgdG8gdXNlLiBEZWZhdWx0IGlzIGB1c2VMYXlvdXRFZmZlY3RgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRGbGFnKHsgYWN0aXZhdGVkSW5kZXgsIGNsb3Nlc3RGaXQsIG1hbmFnZWRDaGlsZHJlbiwgc2V0Q2hpbGRGbGFnLCBnZXRDaGlsZEZsYWcsIHVzZUVmZmVjdCB9KSB7XG4gICAgdXNlRWZmZWN0ID8/PSB1c2VMYXlvdXRFZmZlY3Q7XG4gICAgaWYgKGNsb3Nlc3RGaXQpXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBhY3RpdmF0ZWRJbmRleCA9PSBcIm51bWJlclwiIHx8IGFjdGl2YXRlZEluZGV4ID09IG51bGwpO1xuICAgIC8vIFdoZW5ldmVyIHdlIHJlLXJlbmRlciwgbWFrZSBzdXJlIHRoYXQgYW55IGNoaWxkcmVuIHRoYXQgaGF2ZSBtb3VudGVkXG4gICAgLy8gaGF2ZSB0aGVpciBmbGFncyBwcm9wZXJseSBzZXQuICBXZSBrbm93IGl0J3MgdW5zZXQgaWYgaXQgd2FzIG51bGwsXG4gICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBqdXN0IHNldCBpdCB0byB0cnVlIG9yIGZhbHNlLlxuICAgIC8vXG4gICAgLy8gQW5kLCBJIG1lYW4sIGFzIGxvbmcgYXMgd2UncmUgYWxyZWFkeSBpdGVyYXRpbmcgdGhyb3VnaCBldmVyeSBjaGlsZFxuICAgIC8vIG9uIGV2ZXJ5IHJlbmRlciB0byBjaGVjayBmb3IgbmV3bHkgbW91bnRlZCBjaGlsZHJlbiwgbWlnaHQgYXMgd2VsbFxuICAgIC8vIGp1c3QgaGFuZGxlIGNoYW5nZWQgaW4gdGhlIGFjdGl2YXRlZEluZGV4IGhlcmUgdG9vLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IFdlIGhhdmUgbGltaXRlZCBpbmZvcm1hdGlvbiBhYm91dCB3aGVuIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzXG4gICAgICAgIC8vIGFuZCBzbyB3ZSBkb24ndCBrbm93IHdoZXJlIHRvIGxvb2sgZm9yIGFueSBudWxsIGVudHJpZXMgdGhhdCBuZWVkIGNoYW5naW5nLlxuICAgICAgICAvLyBXZSBrbm93IHdoZW4gYWN0aXZhdGVkSW5kZXggY2hhbmdlcyBhbmQgd2hhdCBpdCB3YXMsIGJ1dCBub3QgbXVjaCBlbHNlLlxuICAgICAgICAvLyBMb29waW5nIG92ZXIgZXZlcnkgY2hpbGQgKndvcmtzKiwgYW5kIGl0J3Mgbm90IGFuIGV4cGVuc2l2ZSBsb29wIGJ5IGFueSBtZWFucyxcbiAgICAgICAgLy8gYnV0LCBsaWtlLCBldWdoLlxuICAgICAgICAvLyBBbHNvLCBiZWZvcmUgd2UgZG8gYW55dGhpbmcsIHNlZSBpZiB3ZSBuZWVkIHRvIFwiY29ycmVjdFwiIGFjdGl2YXRlZEluZGV4LlxuICAgICAgICAvLyBJdCBjb3VsZCBiZSBwb2ludGluZyB0byBhIGNoaWxkIHRoYXQgZG9lc24ndCBleGlzdCwgYW5kIGlmIGNsb3Nlc3RGaXQgaXMgZ2l2ZW4sXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gYWRqdXN0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGEgdmFsaWQgY2hpbGQuXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiAmJiBBcnJheS5pc0FycmF5KG1hbmFnZWRDaGlsZHJlbikgJiYgbWFuYWdlZENoaWxkcmVuW2FjdGl2YXRlZEluZGV4XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBPaCBkZWFyLiBBcmUgd2UgYWN0aXZlbHkgY29ycmVjdGluZyB0aGlzP1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXQpIHtcbiAgICAgICAgICAgICAgICAvLyBPaCBkZWFyLlxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCB1cCBhbmQgZG93biB0aGUgbGlzdCBvZiBjaGlsZHJlbiBmb3IgYW55IHRoYXQgYWN0dWFsbHkgZXhpc3QuXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaEhpZ2ggPSBhY3RpdmF0ZWRJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaExvdyA9IGFjdGl2YXRlZEluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddID09IG51bGwpIHx8IChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytzZWFyY2hIaWdoO1xuICAgICAgICAgICAgICAgICAgICAtLXNlYXJjaExvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVkSW5kZXggPSBzZWFyY2hMb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaEhpZ2ggPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hIaWdoXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoSGlnaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UndmUgZG9uZSB0aGF0LCBpZiBhbnkgdmFsaWQgY2hpbGRyZW4gZXhpc3QsIHdlJ3ZlIHJlc2V0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGl0IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgLy8gTm93IHdlJ2xsIGZhbGwgdGhyb3VnaCB0byB0aGUgZm9yIGxvb3Agc2V0IGFuZCB1bnNldCBvdXIgZmxhZ3MgYmFzZWQgb24gdGhpcyBcImNvcnJlY3RlZFwiIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY29ycmVjdCBpdCBvciBzYXZlIGl0IGFueXdoZXJlIGJlY2F1c2Ugd2UnZCB2ZXJ5IG11Y2ggbGlrZSB0byByZXR1cm4gdG8gaXRcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hpbGQgcmVtb3VudHMgaXRzZWxmLlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hbmFnZWRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNob3VsZEJlU2V0ID0gKGkgPT0gYWN0aXZhdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRDaGlsZEZsYWcoaSkgIT0gc2hvdWxkQmVTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRGbGFnKGksIHNob3VsZEJlU2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhtYW5hZ2VkQ2hpbGRyZW4pLmZvckVhY2goKFtpLCBpbmZvXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGlsZC1tYW5hZ2VyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyIH0gZnJvbSBcIi4vdXNlLWNoaWxkLW1hbmFnZXJcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqIEltcGxlbWVudHMgYSByb3ZpbmcgdGFiaW5kZXggc3lzdGVtIHdoZXJlIG9ubHkgb25lIFwiZm9jdXNhYmxlXCJcbiAqIGNvbXBvbmVudCBpbiBhIHNldCBpcyBhYmxlIHRvIHJlY2VpdmUgYSB0YWIgZm9jdXMuICpXaGljaCpcbiAqIG9mIHRob3NlIGVsZW1lbnRzIHJlY2VpdmVzIGZvY3VzIGlzIGRldGVybWluZWQgYnkgeW91LCBidXQgaXQnc1xuICogcmVjb21tZW5kZWQgdG8gb2ZmbG9hZCB0aGF0IGxvZ2ljIHRoZW4gdG8gYW5vdGhlciBob29rLCBsaWtlXG4gKiBgdXNlTGluZWFyTmF2aWdhdGlvbmAsIHdoaWNoIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGVcbiAqIGVsZW1lbnQgd2l0aCB0aGUgYXJyb3cga2V5cywgYHVzZVR5cGVhaGVhZE5hdmlnYXRpb25gLCB3aGljaFxuICogbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHR5cGVhaGVhZCwgb3JcbiAqIGB1c2VMaXN0TmF2aWdhdGlvbmAgaWYgeW91IGp1c3Qgd2FudCBldmVyeXRoaW5nIGJ1bmRsZWQgdG9nZXRoZXIuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBjaGlsZCBob29rIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gbXVzdCBiZSB1c2VkXG4gKiBieSBldmVyeSBjaGlsZCB0aGF0IHVzZXMgdGhpcyByb3ZpbmcgdGFiaW5kZXggbG9naWMuICBUaGVcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2sgKnRoYXQqIGhvb2sgcmV0dXJucyBzaG91bGQgdGhlbiBiZSB1c2VkXG4gKiBvbiB0aGUgY2hpbGQncyBlbGVtZW50LCBhcyB3ZWxsIGFzIGFueSBvdGhlciBlbGVtZW50cyB5b3UnZCBsaWtlXG4gKiB0byBiZSBleHBsaWNpdGx5IG1hZGUgdW50YWJiYWJsZSB0b28uXG4gKlxuICogYHNob3VsZEZvY3VzT25DaGFuZ2VgIHNob3VsZCByZXR1cm4gdHJ1ZSBpZiBmb2N1cyBpc1xuICogY29udGFpbmVkIHdpdGhpbiB3aGF0ZXZlciBlbGVtZW50IGNvbnRhaW5zIHRoZSByb3ZpbmcgdGFiIGluZGV4LlxuICogR2VuZXJhbGx5IGFzIHNpbXBsZSBhcyB0aGUgZm9sbG93aW5nOlxuICogYGBgXG4gKiBjb25zdCBbZm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1czxQYXJlbnRFbGVtZW50Pih7IHNldEZvY3VzZWRJbm5lciB9KTtcbiAqIGNvbnN0IGZvY3VzT25DaGFuZ2UgPSAoZm9jdXNlZElubmVyICE9IGZhbHNlKTtcbiAqIGBgYFxuICogSXQncyBub3QgaW5jbHVkZWQgaGVyZSBiZWNhdXNlIGB1c2VSb3ZpbmdUYWJJbmRleGAgZG9lc24ndCBrbm93XG4gKiBhbnl0aGluZyBhYm91dCB0aGUgY29udGFpbmVyIGVsZW1lbnQsIG9ubHkgY2hpbGRyZW4gZWxlbWVudHMuXG4gKiBBbmQganVzdCBhcyB3ZWxsISBDaGlsZHJlbiBzaG91bGQgYmUgYWxsb3dlZCBhdCB0aGUgcm9vdCxcbiAqIHJlZ2FyZGxlc3Mgb2YgaWYgaXQncyB0aGUgd2hvbGUgYXBwIG9yIGp1c3QgYSBnaXZlbiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleCh7IHNob3VsZEZvY3VzT25DaGFuZ2U6IGZvYywgdGFiYmFibGVJbmRleCB9KSB7XG4gICAgY29uc3QgZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSA9IHVzZVN0YWJsZUdldHRlcihmb2MpO1xuICAgIGNvbnN0IGdldFRhYmJhYmxlSW5kZXggPSB1c2VTdGFibGVHZXR0ZXIodGFiYmFibGVJbmRleCk7XG4gICAgY29uc3QgcHJldlRhYmJhYmxlID0gdXNlUmVmKC1JbmZpbml0eSk7XG4gICAgLy8gQ2FsbCB0aGUgaG9vayB0aGF0IGFsbG93cyB1cyB0byBjb2xsZWN0IGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gd2hvIHByb3ZpZGUgaXRcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgY2hpbGRDb3VudCwgdXNlTWFuYWdlZENoaWxkLCBpbmRpY2VzQnlFbGVtZW50LCAuLi5yZXN0IH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcbiAgICAvLyBBbnkgdGltZSB0aGUgdGFiYmFibGUgaW5kZXggY2hhbmdlcyxcbiAgICAvLyBub3RpZnkgdGhlIHByZXZpb3VzIGNoaWxkIHRoYXQgaXQncyBubyBsb25nZXIgdGFiYmFibGUsXG4gICAgLy8gYW5kIG5vdGlmeSB0aGUgbmV4dCBjaGlsZCB0aGF0IGlzIGFsbG93ZWQgdG8gYmUgdGFiYmVkIHRvLlxuICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiB0YWJiYWJsZUluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGNsb3Nlc3RGaXQ6IHRydWUsXG4gICAgICAgIHNldENoaWxkRmxhZzogKGluZGV4LCB0YWJiYWJsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2luZGV4XT8uc2V0VGFiYmFibGUodGFiYmFibGUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpbmRleCkgPT4gKG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LmdldFRhYmJhYmxlKCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICBjb25zdCBmb2N1c1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh0YWJiYWJsZUluZGV4ICE9IG51bGwpXG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bdGFiYmFibGVJbmRleF0uc2V0VGFiYmFibGUodHJ1ZSk7XG4gICAgfSwgW3RhYmJhYmxlSW5kZXhdKTtcbiAgICBjb25zdCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgW3JyYWZJbmRleCwgc2V0UnJhZkluZGV4XSA9IHVzZVN0YXRlKDEpO1xuICAgICAgICBjb25zdCByZXJlbmRlckFuZEZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRScmFmSW5kZXgoaSA9PiArK2kpOyB9LCBbXSk7XG4gICAgICAgIGNvbnN0IFt0YWJiYWJsZSwgc2V0VGFiYmFibGUsIGdldFRhYmJhYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBsZXQgbmV3SW5mbyA9IHtcbiAgICAgICAgICAgIC4uLmluZm8sXG4gICAgICAgICAgICByZXJlbmRlckFuZEZvY3VzLFxuICAgICAgICAgICAgc2V0VGFiYmFibGU6IHVzZUNhbGxiYWNrKCh0YWJiYWJsZSkgPT4geyBzZXRUYWJiYWJsZSh0YWJiYWJsZSk7IH0sIFtdKSxcbiAgICAgICAgICAgIGdldFRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZChuZXdJbmZvKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAodGFiYmFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRGb2N1c09uQ2hhbmdlID0gZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSgpKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZEZvY3VzT25DaGFuZ2UgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGUsIHJyYWZJbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXggfSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZU1hbmFnZWRDaGlsZFByb3BzKHsgdGFiSW5kZXggfSksIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcbiAgICAgICAgICAgIHRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXG4gICAgICAgIGNoaWxkQ291bnQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgZm9jdXNDdXJyZW50OiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHdoYXRldmVyIHJlYXNvbiwgdGhlIHByZXZpb3VzbHkgdGFiYmFibGUgY2hpbGRcbiAgICAgICAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdGFiYmFibGUgd2l0aG91dCB1cyBrbm93aW5nIGFib3V0IGl0LlxuICAgICAgICAgICAgICAgIC8vIE1heWJlIGl0IHVubW91bnRlZD9cbiAgICAgICAgICAgICAgICAvLyBFaXRoZXIgd2F5LCB0cnkgdG8gZmluZCB0aGUgbmV3bHktc2VsZWN0ZWQgY2hpbGQuXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMDtcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdPy5yZXJlbmRlckFuZEZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICsrajtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSksXG4gICAgICAgIC4uLnJlc3RcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJvdmluZy10YWJpbmRleC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURyYWdnYWJsZSh7IGVmZmVjdEFsbG93ZWQsIGRhdGEsIGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCwgZHJhZ0ltYWdlWU9mZnNldCB9KSB7XG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZywgZ2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsYXN0RHJvcEVmZmVjdCwgc2V0TGFzdERyb3BFZmZlY3QsIGdldExhc3REcm9wRWZmZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHVzZURyYWdnYWJsZVByb3BzID0gdXNlQ2FsbGJhY2soKHApID0+IHtcbiAgICAgICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgICAgICBjb25zdCBvbkRyYWdTdGFydCA9IChlKSA9PiB7XG4gICAgICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IChlZmZlY3RBbGxvd2VkID8/IFwiYWxsXCIpO1xuICAgICAgICAgICAgICAgIGlmIChkcmFnSW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQgPz8gMCwgZHJhZ0ltYWdlWU9mZnNldCA/PyAwKTtcbiAgICAgICAgICAgICAgICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW21pbWVUeXBlLCBkYXRhXSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEobWltZVR5cGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25EcmFnRW5kID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ICE9IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdERyb3BFZmZlY3QobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICBvbkRyYWdTdGFydCxcbiAgICAgICAgICAgIG9uRHJhZ0VuZCxcbiAgICAgICAgICAgIHJlZlxuICAgICAgICB9LCBwKTtcbiAgICB9LCBbZWZmZWN0QWxsb3dlZCwgZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0LCBkcmFnSW1hZ2VZT2Zmc2V0LCAuLi5PYmplY3QuZW50cmllcyhkYXRhKS5mbGF0KCldKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgbGV0IHJldCA9IHtcbiAgICAgICAgdXNlRHJhZ2dhYmxlUHJvcHMsXG4gICAgICAgIGRyYWdnaW5nLFxuICAgICAgICBnZXREcmFnZ2luZyxcbiAgICAgICAgLy8gU2V0IG9uY2UgYSBkcmFnIGhhcyBjb21wbGV0ZWQgd2l0aCB0aGUgcmVzdWx0aW5nIGFjdGlvblxuICAgICAgICAvLyBVc2VmdWwgZm9yIHJlbW92aW5nIHRoZSBlbGVtZW50IGFmdGVyd2FyZHMgaWYgaXQgd2FzIFwibW92ZVwiXG4gICAgICAgIGxhc3REcm9wRWZmZWN0LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGVzdFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TGFzdERyb3BFZmZlY3RcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJhZ2dhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuO1xuO1xuZXhwb3J0IGNsYXNzIERyb3BwYWJsZUZpbGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBmaWxlTmFtZTtcbiAgICBlcnJvclR5cGU7XG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWUsIGJhc2UpIHtcbiAgICAgICAgc3VwZXIoYmFzZT8ubWVzc2FnZSA/PyBcIkFuIHVuc3BlY2lmaWVkIGVycm9yIG9jY3VycmVkIHJlYWRpbmcgdGhlIGZpbGUuXCIpO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gYmFzZT8ubmFtZTtcbiAgICB9XG59XG4vL01lcmdlZFByb3BzPFVzZVJlZkVsZW1lbnRQcm9wc1JldHVyblR5cGU8RSwgUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgXCJvbkRyYWdFbnRlclwiIHwgXCJvbkRyYWdMZWF2ZVwiIHwgXCJvbkRyYWdPdmVyXCIgfCBcIm9uRHJvcFwiPj4sIFA+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3BwYWJsZSh7IGVmZmVjdCB9KSB7XG4gICAgY29uc3QgW2ZpbGVzRm9yQ29uc2lkZXJhdGlvbiwgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdHJpbmdzRm9yQ29uc2lkZXJhdGlvbiwgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Ryb3BwZWRGaWxlcywgc2V0RHJvcHBlZEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wcGVkU3RyaW5ncywgc2V0RHJvcHBlZFN0cmluZ3NdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Ryb3BFcnJvciwgc2V0RHJvcEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgLy8gQWxsIHRoZSBwcm9taXNlcyBnZW5lcmF0ZWQgZnJvbSB0aGUgZHJvcCBldmVudHMuXG4gICAgLy8gVXNlZCB0byBwcm9jZXNzIG11bHRpcGxlIGRyb3AgZXZlbnRzIGluIHN1Y2Nlc3Npb25cbiAgICBjb25zdCBkcm9wUHJvbWlzZXNSZWYgPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50UHJvbWlzZUluZGV4LCBzZXRDdXJyZW50UHJvbWlzZUluZGV4LCBnZXRDdXJyZW50UHJvbWlzZUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcbiAgICBjb25zdCBbcHJvbWlzZUNvdW50LCBzZXRQcm9taXNlQ291bnQsIGdldFByb21pc2VDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICAvLyBBbnkgdGltZSB3ZSBhZGQgYSBuZXcgcHJvbWlzZSwgaWYgdGhlcmUncyBubyBjdXJyZW50IHByb21pc2UgcnVubmluZywgd2UgbmVlZCB0byBzdGFydCBvbmUuXG4gICAgLy8gSWYgdGhlcmUgaXMgb25lLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcsIHNpbmNlIGl0IHJ1bnMgdGhlIHNhbWUgY2hlY2suXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb21pc2VJbmRleCA9IGdldEN1cnJlbnRQcm9taXNlSW5kZXgoKTtcbiAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XG4gICAgICAgIGlmIChwcm9taXNlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3Byb21pc2VDb3VudF0pO1xuICAgIC8vIEFueXRpbWUgb3VyIGN1cnJlbnQgcHJvbWlzZSBjaGFuZ2VzLFxuICAgIC8vIHdhaXQgZm9yIGl0IHRvIGZpbmlzaCwgdGhlbiBzZXQgb3VyIHN0YXRlIHRvIGl0cyByZXN1bHQuXG4gICAgLy8gRmluYWxseSwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnltb3JlIHByb21pc2VzLlxuICAgIC8vIElmIHRoZXJlIGFyZSwgdGhlbiBpbmNyZWFzZSBjdXJyZW50UHJvbWlzZUNvdW50LFxuICAgIC8vIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGlzIGFnYWluLlxuICAgIC8vXG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuICpvZnRlbiosIGJ1dCBtYXliZSBpbiB0aGUgY2FzZSBvZlxuICAgIC8vIGluZGl2aWR1YWxseSBkcm9wcGluZyBhIGJ1bmNoIG9mIGxhcmdlIGZpbGVzIG9yIHNvbWV0aGluZy5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFByb21pc2VJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZSA9IGRyb3BQcm9taXNlc1JlZi5jdXJyZW50W2N1cnJlbnRQcm9taXNlSW5kZXhdO1xuICAgICAgICAgICAgY3VycmVudFByb21pc2UudGhlbigoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZmlsZXMsIHN0cmluZ3MgfSA9IGluZm87XG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BwZWRGaWxlcyhmaWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BwZWRTdHJpbmdzKHN0cmluZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBOb3cgdGhhdCB3ZSdyZSBkb25lLCBhcmUgdGhlcmUgbW9yZSBwcm9taXNlcyBpbiB0aGUgcXVldWU/XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2VJbmRleCA9IGdldEN1cnJlbnRQcm9taXNlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlQ291bnQgPSBnZXRQcm9taXNlQ291bnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGlzIHByb21pc2UgaGFzIHN0YXJ0ZWQsIG1vcmUgaGF2ZSBiZWVuIGFkZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdGhpcyBlZmZlY3QgYWdhaW4uXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRQcm9taXNlSW5kZXhdKTtcbiAgICBjb25zdCB1c2VEcm9wcGFibGVQcm9wcyA9IChwKSA9PiB7XG4gICAgICAgIC8vY29uc3QgcmVmID0gdXNlUmVmPEU+KG51bGwpO1xuICAgICAgICAvLyBIYW5kbGUgY29sbGVjdGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXMuXG4gICAgICAgIGNvbnN0IG9uRHJhZ0VudGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIC8vIElzIHRoZXJlIGEgZGVmYXVsdD8gSSBjYW4ndCBmaW5kIG9uZSBhbnl3aGVyZS5cbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gKGVmZmVjdCA/PyBcIm1vdmVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWltZVR5cGVzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlLmRhdGFUcmFuc2Zlcj8uaXRlbXMgPz8gW10pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWltZVR5cGVzLmFkZCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaCh7IHR5cGU6IGl0ZW0udHlwZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obmV3RmlsZXMpO1xuICAgICAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG5ld01pbWVUeXBlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIEhhbmRsZSByZXNldHRpbmcgdGhlIGN1cnJlbnQgZmlsZSBtZXRhZGF0YSBvciBNSU1FIHR5cGVzXG4gICAgICAgIGNvbnN0IG9uRHJhZ0xlYXZlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBCb2lsZXJwbGF0ZSwgSSBndWVzc1xuICAgICAgICBjb25zdCBvbkRyYWdPdmVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSGFuZGxlIGdldHRpbmcgdGhlIGRyb3AgZGF0YSBhc3luY2hyb25vdXNseVxuICAgICAgICBjb25zdCBvbkRyb3AgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBsZXQgYWxsUHJvbWlzZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGNvbnN0IGRyb3BEYXRhID0ge307XG4gICAgICAgICAgICBjb25zdCBkcm9wRmlsZSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlLmRhdGFUcmFuc2Zlcj8uaXRlbXMgPz8gW10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaCgobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gaXRlbS5nZXRBc1N0cmluZyhyZXNvbHZlKSkpLnRoZW4oc3RyID0+IGRyb3BEYXRhW3R5cGVdID0gc3RyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BGaWxlLnB1c2goeyBkYXRhLCBuYW1lOiBmaWxlLm5hbWUsIHR5cGU6IGZpbGUudHlwZSwgc2l6ZTogZGF0YS5ieXRlTGVuZ3RoLCBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoZSkgPT4geyByZWplY3QobmV3IERyb3BwYWJsZUZpbGVFcnJvcihmaWxlLm5hbWUsIHJlYWRlci5lcnJvcikpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wUHJvbWlzZXNSZWYuY3VycmVudC5wdXNoKFByb21pc2UuYWxsKGFsbFByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQcm9taXNlQ291bnQoaSA9PiArK2kpO1xuICAgICAgICAgICAgICAgIHNldERyb3BFcnJvcihudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdzOiBkcm9wRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZXM6IGRyb3BGaWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGV4ID0+IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICBzZXRQcm9taXNlQ291bnQoaSA9PiArK2kpO1xuICAgICAgICAgICAgICAgIHNldERyb3BFcnJvcihleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25EcmFnRW50ZXIsIG9uRHJhZ0xlYXZlLCBvbkRyYWdPdmVyLCBvbkRyb3AgfSwgcCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VEcm9wcGFibGVQcm9wcyxcbiAgICAgICAgZmlsZXNGb3JDb25zaWRlcmF0aW9uLFxuICAgICAgICBzdHJpbmdzRm9yQ29uc2lkZXJhdGlvbixcbiAgICAgICAgZHJvcHBlZEZpbGVzLFxuICAgICAgICBkcm9wcGVkU3RyaW5ncyxcbiAgICAgICAgZHJvcEVycm9yXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kcm9wcGFibGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG4vKipcbiAqIEFsbG93cyBhdHRhY2hpbmcgYW4gZXZlbnQgaGFuZGxlciB0byBhbnkgKm5vbi1QcmVhY3QqIGVsZW1lbnQsIGFuZCByZW1vdmluZyBpdCB3aGVuIHRoZSBjb21wb25lbnQgdXNpbmcgdGhlIGhvb2sgdW5tb3VudHMuIFRoZSBjYWxsYmFjayBkb2VzIG5vdCBuZWVkIHRvIGJlIHN0YWJsZSBhY3Jvc3MgcmVuZGVycy5cbiAqXG4gKiBEdWUgdG8gdHlwaW5nIGxpbWl0YXRpb25zLCB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGxpa2UgdGhpczpcbiAqXG4gKiBgdXNlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiaW5wdXRcIik8SW5wdXRFdmVudD4oZSA9PiB7fSlgXG4gKlxuICogVGhlIHR5cGUgYXJndW1lbnQgaXMgb3B0aW9uYWwsIGJ1dCBuYXJyb3dzIGRvd24gdGhlIHR5cGUgZnJvbSBcImEgdW5pb24gb2YgYWxsIGV2ZW50c1wiIHRvIHdoYXRldmVyIHlvdSBzcGVjaWZ5LCBhbmQgZXJyb3JzIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gKlxuICogVGhlcmUgaXMgYSBzZXBhcmF0ZSB2ZXJzaW9uIHRoYXQgYXR0YWNoZXMgZXZlbnQgaGFuZGxlcnMgdG8gYSBzZXQgb2YgcHJvcHMuXG4gKiBJdCB0YWtlcyBkaWZmZXJlbnQgZXZlbnQgc3RyaW5nIHR5cGVzIChvbkV2ZW50IHZzIG9uZXZlbnQpLlxuICpcbiAqIEBwYXJhbSB0YXJnZXQgQSAqbm9uLVByZWFjdCogbm9kZSB0byBhdHRhY2ggdGhlIGV2ZW50IHRvLlxuICogQHJldHVybnNcbiAqICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdsb2JhbEhhbmRsZXIodGFyZ2V0LCB0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgLy8gTm90ZSB0byBzZWxmOiBUaGUgdHlwaW5nIGRvZXNuJ3QgaW1wcm92ZSBldmVuIGlmIHRoaXMgaXMgc3BsaXQgdXAgaW50byBhIHN1Yi1mdW5jdGlvbi5cbiAgICAvLyBObyBtYXR0ZXIgd2hhdCwgaXQgc2VlbXMgaW1wb3NzaWJsZSB0byBnZXQgdGhlIGhhbmRsZXIncyBldmVudCBvYmplY3QgdHlwZWQgcGVyZmVjdGx5LlxuICAgIC8vIEl0IHNlZW1zIGxpa2UgaXQncyBndWFyYW50ZWVkIHRvIGFsd2F5cyBiZSBhIHVuaW9uIG9mIGFsbCBhdmFpbGFibGUgdHVwZXMuXG4gICAgLy8gQWdhaW4sIG5vIG1hdHRlciB3aGF0IGNvbWJpbmF0aW9uIG9mIHN1Yi0gb3Igc3ViLXN1Yi1mdW5jdGlvbnMgdXNlZC5cbiAgICBsZXQgc3RhYmxlSGFuZGxlciA9IHVzZVN0YWJsZUNhbGxiYWNrKGhhbmRsZXIgPz8gKCgpID0+IHsgfSkpO1xuICAgIGlmIChoYW5kbGVyID09IG51bGwpXG4gICAgICAgIHN0YWJsZUhhbmRsZXIgPSBudWxsO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzdGFibGVIYW5kbGVyKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBzdGFibGVIYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBzdGFibGVIYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0sIFt0YXJnZXQsIHR5cGUsIHN0YWJsZUhhbmRsZXJdKTtcbn1cbi8qKlxuICogQW4gYWx0ZXJuYXRpdmUgd2F5IHRvIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQuIFVzZWZ1bCBwcmltYXJpbHkgd2hlbiBpbnRlZ3JhdGluZyAzcmQgcGFydHkgbGlicmFyaWVzIHRoYXQgZXhwZWN0IGEgZ2VuZXJpYyBcImFkZCBldmVudCBoYW5kbGVyXCIgZnVuY3Rpb24uXG4gKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byBtb2RpZnkgYSBzZXQgb2YgcHJvcHMgdG8gYXBwbHkgdGhpcyBoYW5kbGVyLlxuICpcbiAqIEZvciB0eXBpbmcgcmVhc29ucywgdGhpcyBmdW5jdGlvbiBpcyBzcGxpdCBpbnRvIHR3by4gIFVzYWdlIGlzIGxpa2UgdGhlIGZvbGxvd2luZzpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHsgdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyB9ID0gdXNlTG9jYWxFdmVudEhhbmRsZXI8SFRNTERpdkVsZW1lbnQ+KCkoXCJvbk1vdXNlRG93blwiLCBlID0+IHsgIH0pO1xuICogY29uc3QgZGl2UHJvcHMgPSB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzKHByb3BzKTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxIYW5kbGVyKCkge1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygodHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICBjb25zdCBzdGFibGVIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soaGFuZGxlcik7XG4gICAgICAgIGNvbnN0IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW3R5cGVdOiBzdGFibGVIYW5kbGVyIH0sIHByb3BzKTtcbiAgICAgICAgfSwgW3R5cGVdKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyB9O1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ldmVudC1oYW5kbGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuLyoqXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgZGlmZmVyZW50IHdheXMgdGhhdCBhIGZvY3VzIGV2ZW50IGNhbiBoYXBwZW4uICBBc3N1bWVcbiAqIHRoZSBmb2xsb3dpbmcgc3RlcHMgaGFwcGVuIGluIG9yZGVyOlxuICpcbiAqIDEuIFRoZSBwYWdlIGxvYWRzLlxuICogICAgKiBOb3RoaW5nIGlzIGZvY3VzZWQsIGJ1dCBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYGJvZHlgLlxuICogICAgKiBObyBmb2N1cyBldmVudHMgYXJlIGZpcmVkLlxuICogMi4gVGhlIHdpbmRvdyBpcyBmb2N1c2VkLCBhbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCByZW1haW5zIGFzIGBib2R5YC5cbiAqICAgICogQSBgZm9jdXNgL2Bmb2N1c2luYCBldmVudCAqTUlHSFQqIGJlIGZpcmVkIGZvciBgYm9keWAuIERlcGVuZGluZyBvblxuICogICAgICB0aGUgYnJvd3NlciwgdGhpcyBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIGhhbmRsZXIgd2FzIGF0dGFjaGVkIHRvIGB3aW5kb3dgIG9yIGBkb2N1bWVudGAuXG4gKiAgICAgIFByb2JhYmx5IGp1c3QgYmVzdCB0byBub3QgcmVseSBvbiBpdCwgb3IgbGlzdGVuIHRvIGB3aW5kb3dgIGZvY3VzIGV2ZW50cyBkaXJlY3RseS5cbiAqIDMuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byB0aGUgbmV3IGVsZW1lbnQgYmVmb3JlIGFueSBldmVudCBldmVuIGZpcmVzLlxuICogICAgKiBgZm9jdXNvdXRgIGFuZCBgYmx1cmAgYXJlICpub3QqIGZpcmVkIG9uIGBib2R5YC5cbiAqICAgICogYGZvY3VzYCBhbmQgYGZvY3VzaW5gIGFyZSBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxuICogNC4gQSBmb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCBldGMuXG4gKiAgICAqICoqVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIGBib2R5YCoqIGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgbmV3IGVsZW1lbnQuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgbm93IHNldCB0byB0aGUgbmV3IGVsZW1lbnQuXG4gKiAgICAqIGBmb2N1c2luYCBpcyBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgb2xkIGVsZW1lbnQuXG4gKiA1LiBBbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gYGJvZHlgLlxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXG4gKiAgICAqIGBmb2N1c2luYCBpcyAqbm90KiBmaXJlZCBvbiBgYm9keWAuXG4gKlxuICpcbiAqIEluIHN1bW1hcnk6XG4gKiAxLiBGb2N1cyBldmVudHMgKmRvKiBub3RpZnkgdXMgb2YgYWxsIGNoYW5nZXMgaW4gZm9jdXMsIGJ1dCB0aGVyZSBpcyBubyBvbmUgc2luZ2xlIGNvbXByZWhlbnNpdmUgZXZlbnQgdGhhdCBwcm92aWRlcyB1cyB3aXRoIGFsbCBhdmFpbGFibGUgaW5mb3JtYXRpb24uXG4gKiAyLiBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgKmlzIG5vdCogYWx3YXlzIHRoZSBzYW1lIGFzIHdoYXQncyBiZWluZyByZWZlcmVuY2VkIGJ5IGEgZm9jdXMgZXZlbnQuIEluIHBhcnRpY3VsYXIsIGl0IG1heSBiZWNvbWUgYGJvZHlgIGF0IGFueSBhcmJpdHJhcnkgdGltZS5cbiAqIDMuIEEgYGJsdXJgIHdpdGhvdXQgYSBgZm9jdXNgIGNhbiBhbmQgd2lsbCBvY2N1ci4gVGhpcyBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gc29sZWx5IHVzZSBgZm9jdXNgIHRvIGRldGVjdCBhbGwgY2hhbmdlcy5cbiAqIDQuIEEgYGJsdXJgIGV2ZW50IHdob3NlIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsIGluZGljYXRlcyB0aGF0IHRoZXJlIHdpbGwgYmUgbm8gZm9sbG93aW5nIGBmb2N1c2AgZXZlbnQuXG4gKlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHJldHVybnNcbiAqL1xuY29uc3QgZHVtbXkgPSAwO1xuY29uc3QgYWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IE1hcCgpO1xuY29uc3QgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBNYXAoKTtcbmNvbnN0IHdpbmRvd0ZvY3VzZWRVcGRhdGVycyA9IG5ldyBNYXAoKTtcbmxldCB3aW5kb3dzRm9jdXNlZCA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgbWFwLCB2YWx1ZSkge1xuICAgIGZvciAobGV0IFtvdGhlcldpbmRvdywgdXBkYXRlcnNdIG9mIG1hcCkge1xuICAgICAgICBpZiAod2luZG93ID09PSBvdGhlcldpbmRvdykge1xuICAgICAgICAgICAgZm9yIChsZXQgdXBkYXRlciBvZiB1cGRhdGVycykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZXI/Lih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBmb2N1c291dChlKSB7XG4gICAgY29uc3Qgd2luZG93ID0gZS50YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCBhY3RpdmVFbGVtZW50VXBkYXRlcnMsIG51bGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSnVzdCB3YWl0IGZvciB0aGUgZm9jdXNpbiBldmVudC5cbiAgICB9XG59XG5mdW5jdGlvbiBmb2N1c2luKGUpIHtcbiAgICBjb25zdCB3aW5kb3cgPSBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIGxldCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCk7XG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCk7XG59XG5mdW5jdGlvbiB3aW5kb3dGb2N1cyhlKSB7XG4gICAgY29uc3Qgd2luZG93ID0gKGUudGFyZ2V0IGluc3RhbmNlb2YgV2luZG93ID8gZS50YXJnZXQgOiBlLmN1cnJlbnRUYXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLmN1cnJlbnRUYXJnZXQgOiBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KTtcbiAgICB3aW5kb3dzRm9jdXNlZC5zZXQod2luZG93LCB0cnVlKTtcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIHdpbmRvd0ZvY3VzZWRVcGRhdGVycywgdHJ1ZSk7XG59XG5mdW5jdGlvbiB3aW5kb3dCbHVyKGUpIHtcbiAgICBjb25zdCB3aW5kb3cgPSAoZS50YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLnRhcmdldCA6IGUuY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUuY3VycmVudFRhcmdldCA6IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xuICAgIHdpbmRvd3NGb2N1c2VkLnNldCh3aW5kb3csIGZhbHNlKTtcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIHdpbmRvd0ZvY3VzZWRVcGRhdGVycywgZmFsc2UpO1xufVxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGluc3BlY3Qgd2hpY2ggZWxlbWVudCBpbiB0aGUgYGRvY3VtZW50YCBjdXJyZW50bHkgaGFzIGZvY3VzLCB3aGljaCB3YXMgbW9zdCByZWNlbnRseSBmb2N1c2VkIGlmIG5vbmUgYXJlIGN1cnJlbnRseSwgYW5kIHdoZXRoZXIgb3Igbm90IHRoZSB3aW5kb3cgaGFzIGZvY3VzIGJ5IHJldHVybmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAqICogYGdldEFjdGl2ZUVsZW1lbnQoKWBcbiAqICogYGdldExhc3RBY3RpdmVFbGVtZW50KClgXG4gKiAqIGBnZXRXaW5kb3dGb2N1c2VkKClgXG4gKiAqICoqTm8gcHJvcC1tb2RpZnlpbmcgaG9vayBpcyByZXR1cm5lZCBiZWNhdXNlIG5vbmUgaXMgbmVjZXNzYXJ5KipcbiAqXG4gKiAoVGhlIGRvY3VtZW50J3MgYm9keSByZWNlaXZpbmcgZm9jdXMsIGxpa2UgaXQgZG9lcyB3aGVuIHlvdSBjbGljayBvbiBhbiBlbXB0eSBhcmVhLCBpcyBjb3VudGVkIGFzIG5vIGVsZW1lbnQgaGF2aW5nIGZvY3VzIGZvciBhbGwgaW50ZW50cyBhbmQgcHVycG9zZXMpXG4gKlxuICogVGhpcyBpcyBhIHBhc3NpdmUgaG9vaywgc28gYnkgZGVmYXVsdCBpdCByZXR1cm5zIGdldHRlciBmdW5jdGlvbnMgdGhhdCByZXBvcnQgdGhpcyBpbmZvcm1hdGlvbiBidXQgdGhlIGNvbXBvbmVudCB3aWxsIG5vdCByZS1yZW5kZXIgYnkgZGVmYXVsdCB3aGVuIHRoZSBhY3RpdmUgZWxlbWVudCBjaGFuZ2VzLlxuICpcbiAqIElmIHlvdSBuZWVkIHRoZSBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGNoYW5nZXMsIHVzZSB0aGUgYG9uKkNoYW5nZWAgYXJndW1lbnRzIHRvIHNldCBzb21lIHN0YXRlIG9uIHlvdXIgZW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aXZlRWxlbWVudCh7IG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudD8uZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAgICAgaWYgKChhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdyk/LnNpemUgPz8gMCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZvY3VzaW4sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHdpbmRvd0JsdXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZW0gZXZlbiBpZiB0aGV5J3JlIHVuZGVmaW5lZCB0byBtb3JlIGVhc2lseVxuICAgICAgICAgICAgICAgIC8vIG1hbmFnZSB0aGUgXCI+MCBtZWFucyBkb24ndCBhZGQgaGFuZGxlcnNcIiBsb2dpYy5cbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxMYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxXaW5kb3dGb2N1c2VkVXBkYXRlcnMgPSB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZ2V0KHdpbmRvdykgPz8gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGxvY2FsQWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzZXRBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBsb2NhbExhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldExhc3RBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBsb2NhbFdpbmRvd0ZvY3VzZWRVcGRhdGVycy5hZGQoc2V0V2luZG93Rm9jdXNlZCk7XG4gICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNldCh3aW5kb3csIGxvY2FsQWN0aXZlRWxlbWVudFVwZGF0ZXJzKTtcbiAgICAgICAgICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNldCh3aW5kb3csIGxvY2FsTGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyk7XG4gICAgICAgICAgICAgICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLnNldCh3aW5kb3csIGxvY2FsV2luZG93Rm9jdXNlZFVwZGF0ZXJzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpLmRlbGV0ZShzZXRMYXN0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5nZXQod2luZG93KS5kZWxldGUoc2V0V2luZG93Rm9jdXNlZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZvY3VzaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHdpbmRvd0JsdXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG4gICAgY29uc3QgW2dldEFjdGl2ZUVsZW1lbnQsIHNldEFjdGl2ZUVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uQWN0aXZlRWxlbWVudENoYW5nZSwgdW5kZWZpbmVkKTtcbiAgICBjb25zdCBbZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtnZXRXaW5kb3dGb2N1c2VkLCBzZXRXaW5kb3dGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbldpbmRvd0ZvY3VzZWRDaGFuZ2UsIHJldHVyblRydWUpO1xuICAgIHJldHVybiB7IGdldEVsZW1lbnQsIHVzZUFjdGl2ZUVsZW1lbnRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzLCBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xufVxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHsgcmV0dXJuIHRydWU7IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY3RpdmUtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkgeyByZXR1cm4gZmFsc2U7IH1cbmZ1bmN0aW9uIG5vb3AoKSB7IH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZENoYW5nZWQsIG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZENoYW5nZWQsIG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25Gb2N1c2VkQ2hhbmdlZCwgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UpO1xuICAgIGNvbnN0IFtnZXRGb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkZvY3VzZWRDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldEZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkZvY3VzZWRJbm5lckNoYW5nZWQsIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCBbZ2V0TGFzdEZvY3VzZWQsIHNldExhc3RGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkxhc3RGb2N1c2VkQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRMYXN0Rm9jdXNlZElubmVyLCBzZXRMYXN0Rm9jdXNlZElubmVyXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VBY3RpdmVFbGVtZW50KHtcbiAgICAgICAgb25BY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoYWN0aXZlRWxlbWVudCwgcHJldkFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZCA9IChzZWxmRWxlbWVudCAhPSBudWxsICYmIChzZWxmRWxlbWVudCA9PSBhY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSAoISFzZWxmRWxlbWVudD8uY29udGFpbnMoYWN0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgc2V0Rm9jdXNlZChmb2N1c2VkKTtcbiAgICAgICAgICAgIHNldEZvY3VzZWRJbm5lcihmb2N1c2VkSW5uZXIpO1xuICAgICAgICAgICAgb25BY3RpdmVFbGVtZW50Q2hhbmdlPy4oYWN0aXZlRWxlbWVudCwgcHJldkFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChsYXN0QWN0aXZlRWxlbWVudCwgcHJldkxhc3RBY3RpdmVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxmRWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWQgPSAoc2VsZkVsZW1lbnQgIT0gbnVsbCAmJiAoc2VsZkVsZW1lbnQgPT0gbGFzdEFjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbm5lciA9ICghIXNlbGZFbGVtZW50Py5jb250YWlucyhsYXN0QWN0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgc2V0TGFzdEZvY3VzZWQoZm9jdXNlZCk7XG4gICAgICAgICAgICBzZXRMYXN0Rm9jdXNlZElubmVyKGZvY3VzZWRJbm5lcik7XG4gICAgICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlPy4obGFzdEFjdGl2ZUVsZW1lbnQsIHByZXZMYXN0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgb25XaW5kb3dGb2N1c2VkQ2hhbmdlXG4gICAgfSk7XG4gICAgY29uc3QgdXNlSGFzRm9jdXNQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4geyByZXR1cm4gdXNlQWN0aXZlRWxlbWVudFByb3BzKHByb3BzKTsgfSwgW3VzZUFjdGl2ZUVsZW1lbnRQcm9wc10pO1xuICAgIHJldHVybiB7IHVzZUhhc0ZvY3VzUHJvcHMsIGdldEVsZW1lbnQsIGdldEZvY3VzZWQsIGdldEZvY3VzZWRJbm5lciwgZ2V0TGFzdEZvY3VzZWQsIGdldExhc3RGb2N1c2VkSW5uZXIsIGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaGFzLWZvY3VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnZhbCh7IGludGVydmFsLCBjYWxsYmFjayB9KSB7XG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICBjb25zdCBnZXRJbnRlcnZhbCA9IHVzZVN0YWJsZUdldHRlcihpbnRlcnZhbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICAgICAgbGV0IGxhc3REZWxheVVzZWQgPSBpbnRlcnZhbDtcbiAgICAgICAgaWYgKGludGVydmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgY2FsbGJhY2tcbiAgICAgICAgLy8gdGhhdCBjbGVhcnMgYW5kIHJlc2V0cyB0aGUgaW50ZXJ2YWwgaWYgaXQgY2hhbmdlcy5cbiAgICAgICAgY29uc3QgYWRqdXN0YWJsZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc3RhYmxlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IGxhc3REZWxheVVzZWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnRlcnZhbCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGxhc3REZWxheVVzZWQgPSBjdXJyZW50SW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBpbnRlcnZhbCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGhhbmRsZSk7XG4gICAgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVydmFsLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbiB9IGZyb20gXCIuL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJvdmluZ1RhYkluZGV4IH0gZnJvbSBcIi4vdXNlLXJvdmluZy10YWJpbmRleFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICpcbiAqIFRPRE86IFRoaXMgdGFibGUgd2FzIHNjcmFwcGVkIHdoZW4gdGhpcyB3YXMgY2hhbmdlZCB0byBqdXN0IGFjY2VwdCBhIGNvbGxhdG9yIGRpcmVjdGx5LFxuICogYnV0IGl0J3Mgbm90IGJhZCBmb3IgYSBjb2xsYXRpb24gY3Jhc2ggY291cnNlIGFuZCBJIG1pZ2h0IHVzZSBpdCBhZ2Fpbi5cbiAqIEV2ZW4ganVzdCBhcyBhIFwidGhpcyBpcyB3aHkgaXQncyBpbXBvcnRhbnQgYW5kIGdvb2QgdG8gdXNlIHRoZXNlIHRoaW5nc1wiIHRoaW5nLlxuICpcbiAqIHxMYW5nLnxUYXJnZXR8VXNlciBpbnB1dHxgYmFzZWB8YGFjY2VudGB8YGNhc2VgfGB2YXJpYW50YHxcbiAqIHwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfFxuICogfEVOfEhpfEhpfOKchXzinIV84pyFfOKchXxcbiAqIHxFTnxIaXzvvKjvvYl84pyFfOKchXzinIV84p2MfFxuICogfEVOfEhpfGhpfOKchXzinIV84p2MfOKdjHxcbiAqIHxFTnxIaXxIw6984pyFfOKdjHzinYx84p2MfFxuICogfEVOfEhpfEJ5ZXzinYx84p2MfOKdjHzinYx8XG4gKiB8REF8w6V8YWF84pyFfOKchXzinIV84p2MfFxuICogfERBfMOlfEFBfOKchXzinIV84p2MfOKdjHxcbiAqIHxEQXzDpXxBYXzinIV84pyFfOKdjHzinYx8XG4gKiB8RU58w6V8YWF84p2MfOKdjHzinYx84p2MfFxuICogfERBfMOlfGFBfOKdjHzinYx84p2MfOKdjHxcbiAqIHxFTnzDpXxhfOKchXzinIV84p2MfOKdjHxcbiAqIHxEQXzDpXxhfOKchXzinIV84p2MfOKdjHxcbiAqIHxKUHzvqqp8552AfOKchXzinIV84pyFfOKchXxcbiAqIHxKUHzjgqt87722fOKchXzinIV84pyFfOKchXxcbiAqIHxKUHzjgqt844GLfOKchXzinIV84pyFfOKdjHxcbiAqIHxKUHzjgqt844O1fOKchXzinIV84pyFfOKdjHxcbiAqIHxKUHzjgqt844uVfOKchXzinIV84p2MfOKdjHxcbiAqIHxKUHzjgqt844KsfOKchXzinYx84p2MfOKdjHxcbiAqIHxKUHzjgqt85YqbfOKdjHzinYx84p2MfOKdjHxcbiAqIHxaSHzntIV857qifOKdjHzinYx84p2MfOKdjHxcbiAqXG4gKlxuICogKE5vdGUgdG8gc2VsZjogQXQgc29tZSBwb2ludCwgdGhpcyBmaWxlIHdpbGwgcHJvYmFibHkgYmUgbm9ybWFsaXplZFxuICogYnkgc29tZWJvZHkgYW5kIO+qqiB3aWxsIHR1cm4gYmFjayBpbnRvIOedgC4pXG4gKlxuICovXG5jb25zdCBkdW1teSA9IG51bGw7XG47XG5mdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9XG4vKipcbiAqIEltcGxlbWVudHMgcHJvcGVyIGtleWJvYXJkIG5hdmlnYXRpb24gZm9yIGNvbXBvbmVudHMgbGlrZSBsaXN0Ym94ZXMsIGJ1dHRvbiBncm91cHMsIG1lbnVzLCBldGMuXG4gKlxuICogSW4gdGhlIGRvY3VtZW50IG9yZGVyLCB0aGVyZSB3aWxsIGJlIG9ubHkgb25lIFwiZm9jdXNlZFwiIG9yIFwidGFiYmFibGVcIiBlbGVtZW50LCBtYWtpbmcgaXQgYWN0IG1vcmUgbGlrZSBvbmUgY29tcGxldGUgdW5pdCBpbiBjb21wYXJpc29uIHRvIGV2ZXJ5dGhpbmcgYXJvdW5kIGl0LlxuICogTmF2aWdhdGluZyBmb3J3YXJkcy9iYWNrd2FyZHMgY2FuIGJlIGRvbmUgd2l0aCB0aGUgYXJyb3cga2V5cywgSG9tZS9FbmQga2V5cywgb3IgYW55IGFueSB0ZXh0IGZvciB0eXBlYWhlYWQgdG8gZm9jdXMgdGhlIG5leHQgaXRlbSB0aGF0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaXN0TmF2aWdhdGlvbih7IGluaXRpYWxJbmRleCwgc2hvdWxkRm9jdXNPbkNoYW5nZSwgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIgfSkge1xuICAgIGluZGV4TWFuZ2xlciA/Pz0gaWRlbnRpdHk7XG4gICAgaW5kZXhEZW1hbmdsZXIgPz89IGlkZW50aXR5O1xuICAgIGtleU5hdmlnYXRpb24gPz89IFwiZWl0aGVyXCI7XG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aHJlZSB0aGluZ3MgcmVsYXRlZCB0byB0aGUgY3VycmVudGx5IHRhYmJhYmxlIGVsZW1lbnQncyBpbmRleDpcbiAgICAvLyBXaGF0IGl0IGlzLCBhbmQgd2hldGhlciwgd2hlbiB3ZSByZW5kZXIgdGhpcyBjb21wb25lbnQgYW5kIGl0J3MgY2hhbmdlZCwgdG8gYWxzbyBmb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBtYWRlIHRhYmJhYmxlLlxuICAgIGNvbnN0IFt0YWJiYWJsZUluZGV4LCBzZXRUYWJiYWJsZUluZGV4LCBnZXRUYWJiYWJsZUluZGV4XSA9IHVzZVN0YXRlKGluaXRpYWxJbmRleCA9PT0gdW5kZWZpbmVkID8gMCA6IGluaXRpYWxJbmRleCk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGluZGljZXNCeUVsZW1lbnQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIGZvY3VzQ3VycmVudCwgLi4ucmVzdCB9ID0gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlLCB0YWJiYWJsZUluZGV4IH0pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaW5kZXhNYW5nbGVyKDApKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9MYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlcihtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIoaSA/PyAwKSAtIDEpKTsgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlcihpbmRleERlbWFuZ2xlcihpID8/IDApICsgMSkpOyB9LCBbaW5kZXhEZW1hbmdsZXIsIGluZGV4TWFuZ2xlcl0pO1xuICAgIGNvbnN0IHNldEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaW5kZXgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvblByb3BzIH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGdldEluZGV4OiBnZXRUYWJiYWJsZUluZGV4LCBzZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dDogMTAwMCB9KTtcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG5hdmlnYXRpb25EaXJlY3Rpb246IGtleU5hdmlnYXRpb24sIGluZGV4OiBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QgfSk7XG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlTGluZWFyTmF2aWdhdGlvblByb3BzKHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpO1xuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wc10pO1xuICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZChpbmZvKTtcbiAgICAgICAgLy9jb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoaW5mbyBhcyBJKTtcbiAgICAgICAgY29uc3QgeyB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLCB0YWJiYWJsZSB9ID0gdXNlUm92aW5nVGFiSW5kZXhDaGlsZChpbmZvKTtcbiAgICAgICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKCgoeyBvbkNsaWNrOiByb3ZlVG9TZWxmIH0pKSksIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm92ZVRvU2VsZiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpOyB9LCBbXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wczogdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXG4gICAgICAgICAgICB0YWJiYWJsZVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIG5hdmlnYXRlVG9JbmRleF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsXG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dCxcbiAgICAgICAgbmF2aWdhdGVUb1ByZXYsXG4gICAgICAgIG5hdmlnYXRlVG9GaXJzdCxcbiAgICAgICAgbmF2aWdhdGVUb0xhc3QsXG4gICAgICAgIGZvY3VzQ3VycmVudCxcbiAgICAgICAgLi4ucmVzdFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjIuMVxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHt9IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNDb250ZW50RWRpdGFibGUgPSBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcblxuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHtcbiAgICByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICB9IC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG5cblxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAvLyAgeWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAvLyAgb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuXG5cbiAgaWYgKChub2RlLm5vZGVOYW1lID09PSAnQVVESU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdWSURFTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnKSAmJiBub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IG5vZGUub3duZXJEb2N1bWVudDtcblxuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcblxuICB2YXIgcmFkaW9TZXQ7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xuXG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xuXG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIGRpc3BsYXlDaGVjaykge1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IC8vIGZvcm0gZmllbGRzIChuZXN0ZWQpIGluc2lkZSBhIGRpc2FibGVkIGZpZWxkc2V0IGFyZSBub3QgZm9jdXNhYmxlL3RhYmJhYmxlXG4vLyAgdW5sZXNzIHRoZXkgYXJlIGluIHRoZSBfZmlyc3RfIDxsZWdlbmQ+IGVsZW1lbnQgb2YgdGhlIHRvcC1tb3N0IGRpc2FibGVkXG4vLyAgZmllbGRzZXRcblxuXG52YXIgaXNEaXNhYmxlZEZyb21GaWVsZHNldCA9IGZ1bmN0aW9uIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkge1xuICBpZiAoaXNJbnB1dChub2RlKSB8fCBub2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBub2RlLnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0ZJRUxEU0VUJyAmJiBwYXJlbnROb2RlLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIGxvb2sgZm9yIHRoZSBmaXJzdCA8bGVnZW5kPiBhcyBhbiBpbW1lZGlhdGUgY2hpbGQgb2YgdGhlIGRpc2FibGVkXG4gICAgICAgIC8vICA8ZmllbGRzZXQ+OiBpZiB0aGUgbm9kZSBpcyBpbiB0aGF0IGxlZ2VuZCwgaXQnbGwgYmUgZW5hYmxlZCBldmVuXG4gICAgICAgIC8vICB0aG91Z2ggdGhlIGZpZWxkc2V0IGlzIGRpc2FibGVkOyBvdGhlcndpc2UsIHRoZSBub2RlIGlzIGluIGFcbiAgICAgICAgLy8gIHNlY29uZGFyeS9zdWJzZXF1ZW50IGxlZ2VuZCwgb3Igc29tZXdoZXJlIGVsc2Ugd2l0aGluIHRoZSBmaWVsZHNldFxuICAgICAgICAvLyAgKGhvd2V2ZXIgZGVlcCBuZXN0ZWQpIGFuZCBpdCdsbCBiZSBkaXNhYmxlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oaSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0xFR0VORCcpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jb250YWlucyhub2RlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIHRoZSBub2RlIGlzbid0IGluIHRoZSBmaXJzdCBsZWdlbmQgKGluIGRvYyBvcmRlciksIHNvIG5vIG1hdHRlclxuICAgICAgICAgICAgLy8gIHdoZXJlIGl0IGlzIG5vdywgaXQnbGwgYmUgZGlzYWJsZWRcblxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gdGhlIG5vZGUgaXNuJ3QgaW4gYSBsZWdlbmQsIHNvIG5vIG1hdHRlciB3aGVyZSBpdCBpcyBub3csIGl0J2xsIGJlIGRpc2FibGVkXG5cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH0gLy8gZWxzZSwgbm9kZSdzIHRhYmJhYmxlL2ZvY3VzYWJsZSBzdGF0ZSBzaG91bGQgbm90IGJlIGFmZmVjdGVkIGJ5IGEgZmllbGRzZXQnc1xuICAvLyAgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKG5vZGUuZGlzYWJsZWQgfHwgaXNIaWRkZW5JbnB1dChub2RlKSB8fCBpc0hpZGRlbihub2RlLCBvcHRpb25zLmRpc3BsYXlDaGVjaykgfHwgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIGNhbmRpZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FuZGlkYXRlLCBpKSB7XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoY2FuZGlkYXRlKTtcblxuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIGEubm9kZTtcbiAgfSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuICByZXR1cm4gdGFiYmFibGVOb2Rlcztcbn07XG5cbnZhciBmb2N1c2FibGUgPSBmdW5jdGlvbiBmb2N1c2FibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbnZhciBpc1RhYmJhYmxlID0gZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcblxudmFyIGlzRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxuZXhwb3J0IHsgZm9jdXNhYmxlLCBpc0ZvY3VzYWJsZSwgaXNUYWJiYWJsZSwgdGFiYmFibGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCJpbXBvcnQgXCJ3aWNnLWluZXJ0XCI7XG5pbXBvcnQgXCJibG9ja2luZy1lbGVtZW50c1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuY29uc3QgYmxvY2tpbmdFbGVtZW50cyA9IGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzO1xuLyoqXG4gKiBBbGxvd3MgYW4gZWxlbWVudCB0byB0cmFwIGZvY3VzIGJ5IGFwcGx5aW5nIHRoZSBcImluZXJ0XCIgYXR0cmlidXRlIHRvIGFsbCBzaWJsaW5nLCBhdW50LCBhbmQgdW5jbGUgbm9kZXMuXG4gKlxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIGNvbnNlY3V0aXZlIGNhbGxzIHdpdGggYSBsb29zZWx5IGFwcGxpZWQgc3RhY2sgb3BlcmF0aW9uXG4gKiAoc3BlY2lmaWNhbGx5IHZpYSBgYmxvY2tpbmdFbGVtZW50c2AsIHdpdGggYSBzbWFsbCBwb2x5ZmlsbCBiZWNhdXNlIEknbSBub3Qgc3VyZSBob3cgbG9uZ1xuICogaXQnbGwgdGFrZSB0byBmaW5kIGl0cyB3YXkgaW50byB0aGUgc3BlYywgaWYgZXZlcilcbiAqIEBwYXJhbSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJsb2NraW5nRWxlbWVudCh0YXJnZXQpIHtcbiAgICAvKipcbiAgICAgKiBQdXNoL3BvcCB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZ0VsZW1lbnRzIHN0YWNrLlxuICAgICAqL1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIFNvbWV0aW1lcyBibG9ja2luZ0VsZW1lbnRzIHdpbGwgZmFpbCBpZiwgZm9yIGV4YW1wbGUsXG4gICAgICAgICAgICAvLyB0aGUgdGFyZ2V0IGVsZW1lbnQgaXNuJ3QgY29ubmVjdGVkIHRvIGRvY3VtZW50LmJvZHkuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHJhcmUsIGJ1dCBpdCdzIGJldHRlciB0byBmYWlsIHNpbGVudGx5IHdpdGggd2VpcmQgdGFiYmluZyBiZWhhdmlvclxuICAgICAgICAgICAgLy8gdGhhbiB0byBjcmFzaCB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnJlbW92ZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBXZWxsLCBzZW1pLXNpbGVudGx5LlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3RhcmdldF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGJsb2NraW5nRWxlbWVudHMudG9wO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJsb2NraW5nLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgaXNGb2N1c2FibGUgfSBmcm9tIFwidGFiYmFibGVcIjtcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5jb25zdCBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZSB9KSB7XG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldEVsZW1lbnQgfSk7XG4gICAgLy9jb25zdCBbbGFzdEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VTdGF0ZTxOb2RlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHt9KTtcbiAgICAvLyBXaGVuIHRoZSB0cmFwIGJlY29tZXMgYWN0aXZlLCBiZWZvcmUgd2UgbGV0IHRoZSBibG9ja2luZ0VsZW1lbnRzIGhvb2sgcnVuLFxuICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdGV2ZXIncyBjdXJyZW50bHkgZm9jdXNlZCBhbmQgc2F2ZSBpdC5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudFxuICAgICAgICAgICAgLy8gdG8gd2hhdGV2ZXIncyBjdXJyZW50bHkgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2tcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB9XG4gICAgfSwgW3RyYXBBY3RpdmUsIGVsZW1lbnRdKTtcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcbiAgICAvKipcbiAgICAgKiBBbnkgdGltZSB3ZSBhY3RpdmF0ZSBvciBkZWFjdGl2YXRlIHRoZSB0cmFwLFxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXG4gICAgICogdGhlIHRyYXAgaWYgaXQncyBhY3RpdmUsIG9yIHdoYXRldmVyIHdlJ3ZlXG4gICAgICogdHJhY2tlZCBpbiBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gaWYgbm90KVxuICAgICAqL1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0cmFwQWN0aXZlICYmIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgZXh0cmEgcXVldWVNaWNyb3Rhc2sgaXMgbmVlZGVkIGZvclxuICAgICAgICAgICAgICAgIC8vIC4uLnJlYXNvbnM/XG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaW5kRmlyc3RGb2N1c2FibGUoZWxlbWVudCk/LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJhZkhhbmRsZSA9IDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSGFuZGxlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXMgdG8gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gICAgICAgICAgICBsZXQgcmFmSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XG4gICAgY29uc3QgdXNlRm9jdXNUcmFwUHJvcHMgPSAoKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLW1vZGFsXCI6IHRyYXBBY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9LCB1c2VSZWZFbGVtZW50UHJvcHModXNlQWN0aXZlRWxlbWVudFByb3BzKHByb3BzKSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUZvY3VzVHJhcFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpbiB0aGUgZ2l2ZW4gbm9kZSwgb3IgbnVsbCBpZiBub25lIGFyZSBmb3VuZC5cbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0Rm9jdXNhYmxlKGVsZW1lbnQpIHtcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgeyBhY2NlcHROb2RlOiAobm9kZSkgPT4gKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGlzRm9jdXNhYmxlKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCkgfSk7XG4gICAgY29uc3QgZmlyc3RGb2N1c2FibGUgPSB0cmVlV2Fsa2VyLmZpcnN0Q2hpbGQoKTtcbiAgICByZXR1cm4gZmlyc3RGb2N1c2FibGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZm9jdXMtdHJhcC5qcy5tYXAiLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgYyx1c2VEZWJ1Z1ZhbHVlIGFzIGZ9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyBkLEZyYWdtZW50IGFzIHYscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6ZChkKG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9kKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PWQobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6ZH0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKHYsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKHYsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1kKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCx6PWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBIKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBaPWguZXZlbnQ7ZnVuY3Rpb24gWSgpe31mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uIHEoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIFomJihuPVoobikpLG4ucGVyc2lzdD1ZLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9JCxuLmlzRGVmYXVsdFByZXZlbnRlZD1xLG4ubmF0aXZlRXZlbnQ9bn07dmFyIEcsSj17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSz1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciB1PS0xPT09dC5pbmRleE9mKFwiLVwiKTtmb3IodmFyIG8gaW4gcj17fSxlKXt2YXIgaT1lW29dO1YmJlwiY2hpbGRyZW5cIj09PW8mJlwibm9zY3JpcHRcIj09PXR8fFwidmFsdWVcIj09PW8mJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1pfHwoXCJkZWZhdWx0VmFsdWVcIj09PW8mJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/bz1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09byYmITA9PT1pP2k9XCJcIjovb25kb3VibGVjbGljay9pLnRlc3Qobyk/bz1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3Qobyt0KSYmIXooZS50eXBlKT9vPVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdChvKT9vPW8udG9Mb3dlckNhc2UoKTp1JiZQLnRlc3Qobyk/bz1vLnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1pJiYoaT12b2lkIDApLHJbb109aSl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9ZChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9ZChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihKLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEopKSxuLiQkdHlwZW9mPWosSyYmSyhuKX07dmFyIFE9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7USYmUShuKSxHPW4uX19jfTt2YXIgWD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIEcuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sbm49XCIxNy4wLjJcIjtmdW5jdGlvbiB0bihuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gZW4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBybihuKXtyZXR1cm4gZW4obik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiB1bihuKXtyZXR1cm4hIW4uX19rJiYocChudWxsLG4pLCEwKX1mdW5jdGlvbiBvbihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBsbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxjbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxmbj12O2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjp1LHVzZUltcGVyYXRpdmVIYW5kbGU6byx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6bCx1c2VDb250ZXh0OmMsdXNlRGVidWdWYWx1ZTpmLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjprLHJlbmRlcjpCLGh5ZHJhdGU6SCx1bm1vdW50Q29tcG9uZW50QXROb2RlOnVuLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0Ol8sY3JlYXRlRmFjdG9yeTp0bixjbG9uZUVsZW1lbnQ6cm4sY3JlYXRlUmVmOmIsRnJhZ21lbnQ6dixpc1ZhbGlkRWxlbWVudDplbixmaW5kRE9NTm9kZTpvbixDb21wb25lbnQ6YSxQdXJlQ29tcG9uZW50OkUsbWVtbzpnLGZvcndhcmRSZWY6eCxmbHVzaFN5bmM6Y24sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6bG4sU3RyaWN0TW9kZTp2LFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0Ok0sbGF6eTpGLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlh9O2V4cG9ydHtubiBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4sQiBhcyByZW5kZXIsSCBhcyBoeWRyYXRlLHVuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsdG4gYXMgY3JlYXRlRmFjdG9yeSxybiBhcyBjbG9uZUVsZW1lbnQsZW4gYXMgaXNWYWxpZEVsZW1lbnQsb24gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYsY24gYXMgZmx1c2hTeW5jLGxuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLGZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxGIGFzIGxhenksWCBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiZXhwb3J0IGNvbnN0IEV2ZW50RGV0YWlsID0gU3ltYm9sKFwiZXZlbnQtZGV0YWlsXCIpO1xuZXhwb3J0IGZ1bmN0aW9uIGVuaGFuY2VFdmVudChlLCBkZXRhaWwpIHtcbiAgICBsZXQgZXZlbnQgPSBlO1xuICAgIGV2ZW50W0V2ZW50RGV0YWlsXSA9IGRldGFpbDtcbiAgICByZXR1cm4gZXZlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUdsb2JhbEhhbmRsZXIsIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5sZXQgcHVsc2UgPSAoXCJ2aWJyYXRlXCIgaW4gbmF2aWdhdG9yKSA/ICgoKSA9PiBuYXZpZ2F0b3IudmlicmF0ZSgxMCkpIDogKCgpID0+IHsgfSk7XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gZW5hYmxlL2Rpc2FibGUgYnV0dG9uIHZpYnJhdGlvbiBwdWxzZXMgb24gYW4gYXBwLXdpZGUgc2NhbGUuXG4gKlxuICpcbiAqIEBwYXJhbSBmdW5jIFRoZSBmdW5jdGlvbiB0byBydW4gd2hlbiBhIGJ1dHRvbiBpcyB0YXBwZWQuXG4gKiAoRGVmYXVsdCBpcyBgKCkgPT4gbmF2aWdhdG9yLnZpYnJhdGUoMTApYCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgaXQsIGEgbm9vcCBvdGhlcndpc2UpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRCdXR0b25WaWJyYXRlKGZ1bmMpIHtcbiAgICBwdWxzZSA9IGZ1bmM7XG59XG5mdW5jdGlvbiBleGNsdWRlcyh0YXJnZXQsIGV4Y2x1ZGUpIHtcbiAgICBpZiAoZXhjbHVkZT8uW3RhcmdldF0pXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogc2VsZWN0aW9uLmNvbnRhaW5zTm9kZSBkb2Vzbid0IGFjY291bnQgZm9yIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCxcbiAqIHNvIGhlcmUncyBhIHdvcmthcm91bmQgZm9yIHRoYXQuXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIG5vZGVIYXNTZWxlY3RlZFRleHQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKHNlbGVjdGlvbj8uY29udGFpbnNOb2RlKGVsZW1lbnQsIHRydWUpICYmICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogQWRkcyB0aGUgbmVjZXNzYXJ5IGV2ZW50IGhhbmRsZXJzIHRvIGNyZWF0ZSBhIFwicHJlc3NcIi1saWtlIGV2ZW50IGZvclxuICogYnV0dG9ucyBhbmQgYW55dGhpbmcgZWxzZSB0aGF0J3MgXCJjbGljay90YXAvcHJlc3MvdG91Y2hcIi1hYmxlLlxuICpcbiAqIE5vdGFibHksIHRoZSBmb2xsb3dpbmcgY2FzZXMgYXJlIGNvdmVyZWQ6XG4gKiAqIFRoZSB0YXJnZXQgZWxlbWVudCBpcyBwcm9wZXJseSBmb2N1c2VkLCBldmVuIG9uIGlPUyBTYWZhcmkgKCplc3BlY2lhbGx5KiBvbiBpT1MgU2FmYXJpKVxuICogKiBEb3VibGUtY2xpY2tzIHdvbid0IHNlbGVjdCB0ZXh0LlxuICogKiBDb252ZXJzZWx5LCBtYW51YWxseSBzZWxlY3RpbmcgdGV4dCB3b24ndCBpbnZva2UgYSBwcmVzcy5cbiAqICogS2V5Ym9hcmQgZXZlbnRzICZtZGFzaDsgYGVudGVyYCBpbW1lZGlhdGVseSBpbnZva2VzIHRoZSBoYW5kbGVyLCB3aGlsZSBgc3BhY2VgIGludm9rZXMgaXQgb24ga2V5dXAuXG4gKiAqIEhhcHRpYyBmZWVkYmFjayAob24sIGxpa2UsIHRoZSBvbmUgYnJvd3NlciBjb21iaW5hdGlvbiB0aGF0IHN1cHBvcnRzIGl0ICZtZGFzaDsgdGhpcyBjYW4gYmUgZGlzYWJsZWQgYXBwLXdpZGUgd2l0aCBgc2V0QnV0dG9uVmlicmF0ZWApXG4gKlxuICogSW4gYWRkaXRpb24sIHdoZW4gdGhlIENTUyBgOmFjdGl2ZWAgcHNldWRvLWNsYXNzIHdvdWxkIGFwcGx5IHRvIGEgbm9ybWFsIGJ1dHRvblxuICogKGkuZS4gd2hlbiBob2xkaW5nIHRoZSBzcGFjZWJhciBvciBkdXJpbmcgbW91c2Vkb3duKSwgYHsgXCJkYXRhLXBzZXVkby1hY3RpdmVcIjogXCJ0cnVlXCIgfWBcbiAqIGlzIGFkZGVkIHRvIHRoZSBwcm9wcy4gIFlvdSBjYW4gZWl0aGVyIGxldCBpdCBwYXNzIHRocm91Z2ggYW5kIHN0eWxlIGl0IHRocm91Z2ggbmV3IENTUyxcbiAqIG9yIGluc3BlY3QgdGhlIHJldHVybmVkIHByb3BzIGZvciBpdCBhbmQgYWRkIGUuZy4gYW4gYC5hY3RpdmVgIGNsYXNzIGZvciBleGlzdGluZyBDU1NcbiAqXG4gKiBAcGFyYW0gb25DbGlja1N5bmNcbiAqIEBwYXJhbSBleGNsdWRlIFdoZXRoZXIgdGhlIHBvbHlmaWxsIHNob3VsZG4ndCBhcHBseSAoY2FuIHNwZWNpZnkgZm9yIHNwZWNpZmljIGludGVyYWN0aW9ucylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZXNzRXZlbnRIYW5kbGVycyhvbkNsaWNrU3luYywgZXhjbHVkZSkge1xuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAvLyBBIGJ1dHRvbiBjYW4gYmUgYWN0aXZhdGVkIGluIG11bHRpcGxlIHdheXMsIHNvIG9uIHRoZSBvZmYgY2hhbmNlXG4gICAgLy8gdGhhdCBtdWx0aXBsZSBhcmUgdHJpZ2dlcmVkIGF0IG9uY2UsIHdlIG9ubHkgKmFjdHVhbGx5KiByZWdpc3RlclxuICAgIC8vIGEgcHJlc3Mgb25jZSBhbGwgb2Ygb3VyIFwib25cIiBzaWduYWxzIGhhdmUgdHVybmVkIGJhY2sgdG8gXCJvZmZcIi5cbiAgICAvLyBXZSBhcHByb3hpbWF0ZSB0aGlzIGJ5IGp1c3QgaW5jcmVtZW50aW5nIHdoZW4gYWN0aXZlLCBhbmRcbiAgICAvLyBkZWNyZW1lbnRpbmcgd2hlbiBkZWFjdGl2YXRlZC5cbiAgICAvL1xuICAgIC8vIEFzIGFuIGVtZXJnZW5jeSBmYWlsc2FmZSwgd2hlbiB0aGUgZWxlbWVudCBsb29zZXMgZm9jdXMsXG4gICAgLy8gdGhpcyBpcyByZXNldCBiYWNrIHRvIDAuXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlLCBnZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XG4gICAgLy8gSWYgd2UgdGhlIGN1cnJlbnQgdGV4dCBzZWxlY3Rpb24gY2hhbmdlcyB0byBpbmNsdWRlIHRoaXMgZWxlbWVudFxuICAgIC8vIERVUklORyBlLmcuIGEgbW91c2Vkb3duLCB0aGVuIHdlIGRvbid0IHdhbnQgdGhlIG1vdXNldXAgdG8gXCJjb3VudFwiLCBhcyBpdCB3ZXJlLFxuICAgIC8vIGJlY2F1c2UgaXRzIG9ubHkgcHVycG9zZSB3YXMgc2VsZWN0aW5nIHRleHQsIG5vdCBjbGlja2luZyBidXR0b25zLlxuICAgIC8vXG4gICAgLy8gVG8gY2F0Y2ggdGhpcywgYW55IHRpbWUgdGhlIHRleHQgc2VsZWN0aW9uIGluY2x1ZGVzIHVzIHdoaWxlIGluIHRoZSBtaWRkbGVcbiAgICAvLyBvZiBhIGNsaWNrLCB0aGlzIGZsYWcgaXMgc2V0LCB3aGljaCBjYW5jZWxzIHRoZSBhY3RpdmF0aW9uIG9mIGEgcHJlc3MuXG4gICAgLy8gVGhlIGZsYWcgaXMgcmVzZXQgYW55IHRpbWUgdGhlIHNlbGVjdGlvbiBpcyBlbXB0eSBvciB0aGUgYnV0dG9uIGlzXG4gICAgLy8gbm8gbG9uZ2VyIGFjdGl2ZS5cbiAgICBjb25zdCBbdGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbiwgc2V0VGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlR2xvYmFsSGFuZGxlcihkb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24oYWN0aXZlID09IDAgPyBmYWxzZSA6IG5vZGVIYXNTZWxlY3RlZFRleHQoZ2V0RWxlbWVudCgpKSk7XG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PSAwKVxuICAgICAgICAgICAgc2V0VGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbihmYWxzZSk7XG4gICAgfSwgW2FjdGl2ZSA9PSAwXSk7XG4gICAgY29uc3Qgb25BY3RpdmVTdGFydCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShhID0+ICsrYSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb25BY3RpdmVTdG9wID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKGEgPT4gTWF0aC5tYXgoMCwgLS1hKSk7XG4gICAgICAgIGlmICh0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldEFjdGl2ZSgpIDw9IDApIHtcbiAgICAgICAgICAgIGhhbmRsZVByZXNzKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaGFuZGxlUHJlc3MgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBpZiAob25DbGlja1N5bmMpIHtcbiAgICAgICAgICAgIC8vIE5vdGU6IFRoZSBlbGVtZW50IGlzIGZvY3VzZWQgaGVyZSBiZWNhdXNlIG9mIGlPUyBTYWZhcmkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSXQncyBhbHdheXMgaU9TIFNhZmFyaS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpT1MgU2FmYXJpICh0ZXN0ZWQgb24gMTIpIGRvd25yaWdodCByZWZ1c2VzIHRvIGFsbG93IFxuICAgICAgICAgICAgLy8gZWxlbWVudHMgdG8gYmUgbWFudWFsbHkgZm9jdXNlZCBVTkxFU1MgaXQgaGFwcGVucyB3aXRoaW5cbiAgICAgICAgICAgIC8vIGFuIGV2ZW50IGhhbmRsZXIgbGlrZSB0aGlzLiAgSXQgYWxzbyBkb2Vzbid0IGZvY3VzXG4gICAgICAgICAgICAvLyBidXR0b25zIGJ5IGRlZmF1bHQgd2hlbiBjbGlja2VkLCB0YXBwZWQsIGV0Yy5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBJZiBpdCBiZWNvbWVzIHByb2JsZW1hdGljIHRoYXQgYnV0dG9uLWxpa2VzIGV4cGxpY2l0bHkgYmVjb21lXG4gICAgICAgICAgICAvLyBmb2N1c2VkIHdoZW4gdGhleSBhcmUgcHJlc3NlZCwgdGhlbiBhbiBhbHRlcm5hdGl2ZSBzb2x1dGlvbiBmb3JcbiAgICAgICAgICAgIC8vIHRoZSBxdWVzdGlvbiBvZiBcImhvdyBkbyBtZW51IGJ1dHRvbnMga2VlcCB0aGVpciBtZW51cyBvcGVuXCJcbiAgICAgICAgICAgIC8vIGFuZCBvdGhlciBmb2N1cy1yZWxhdGVkIG5vbnNlbnNlIG5lZWRzIHRvIGJlIGZpZ3VyZWQgb3V0LlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEZvciBpT1MgU2FmYXJpLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBcImZvY3VzXCIgaW4gZWxlbWVudClcbiAgICAgICAgICAgICAgICBlbGVtZW50Py5mb2N1cygpO1xuICAgICAgICAgICAgLy8gV2hhdGV2ZXIgdGhlIGJyb3dzZXIgd2FzIGdvaW5nIHRvIGRvIHdpdGggdGhpcyBldmVudCxcbiAgICAgICAgICAgIC8vIGZvcmdldCBpdC4gV2UncmUgdHVybmluZyBpdCBpbnRvIGEgXCJwcmVzc1wiIGV2ZW50LlxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gQWxzbyBzdG9wIGFueW9uZSBlbHNlIGZyb20gbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQsXG4gICAgICAgICAgICAvLyBzaW5jZSB3ZSdyZSBleHBsaWNpdGx5IGhhbmRsaW5nIGl0LlxuICAgICAgICAgICAgLy8gKE5vdGFibHksIHRoaXMgYWxsb3dzIGxhYmVscyB0byB3cmFwIGlucHV0cywgd2l0aCB0aGVtXG4gICAgICAgICAgICAvLyBib3RoIGhhdmluZyBwcmVzcyBldmVudCBoYW5kbGVycywgd2l0aG91dCBkb3VibGUtZmlyaW5nKVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vIEhhcHRpYyBmZWVkYmFjayBmb3IgdGhpcyBwcmVzcyBldmVudFxuICAgICAgICAgICAgcHVsc2UoKTtcbiAgICAgICAgICAgIC8vIEFjdHVhbGx5IGNhbGwgb3VyIGhhbmRsZXIuXG4gICAgICAgICAgICBvbkNsaWNrU3luYyhlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG9uTW91c2VEb3duID0gZXhjbHVkZXMoXCJjbGlja1wiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XG4gICAgICAgIC8vIFN0b3AgZG91YmxlIGNsaWNrcyBmcm9tIHNlbGVjdGluZyB0ZXh0IGluIGFuIGNvbXBvbmVudCB0aGF0J3MgKnN1cHBvc2VkKiB0byBiZSBhY3RpbmcgbGlrZSBhIGJ1dHRvbixcbiAgICAgICAgLy8gYnV0IGFsc28gZG9uJ3QgcHJldmVudCB0aGUgdXNlciBmcm9tIHNlbGVjdGluZyB0aGF0IHRleHQgbWFudWFsbHkgaWYgdGhleSByZWFsbHkgd2FudCB0b1xuICAgICAgICAvLyAod2hpY2ggdXNlci1zZWxlY3Q6IG5vbmUgd291bGQgZG8sIGJ1dCBjYW5jZWxsaW5nIGEgZG91YmxlIGNsaWNrIG9uIG1vdXNlRG93biBkb2Vzbid0KVxuICAgICAgICBpZiAoZS5kZXRhaWwgPiAxKVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApXG4gICAgICAgICAgICBvbkFjdGl2ZVN0YXJ0KGUpO1xuICAgIH07XG4gICAgY29uc3Qgb25Nb3VzZVVwID0gZXhjbHVkZXMoXCJjbGlja1wiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCAmJiBhY3RpdmUgPiAwKVxuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xuICAgIH07XG4gICAgY29uc3Qgb25CbHVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKDApO1xuICAgIH07XG4gICAgY29uc3Qgb25Nb3VzZU91dCA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiBvbkJsdXI7XG4gICAgY29uc3Qgb25LZXlEb3duID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSAmJiBleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiICYmIG9uQ2xpY2tTeW5jICYmICFleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpKSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBhY3R1YWxseSBhY3RpdmF0ZSBpdCBvbiBhIHNwYWNlIGtleWRvd25cbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBkbyBwcmV2ZW50RGVmYXVsdCB0byBzdG9wIHRoZSBwYWdlIGZyb20gc2Nyb2xsaW5nLlxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiICYmICFleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvbkFjdGl2ZVN0YXJ0KGUpO1xuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbktleVVwID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIiBcIiAmJiAhZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSlcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmRldGFpbCA+IDEpIHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25CbHVyLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwLCBvbk1vdXNlT3V0LCBvbkNsaWNrLCAuLi57IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IGFjdGl2ZSA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkIH0gfSwgcHJvcHMpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQnV0dG9uKHsgdGFnLCBwcmVzc2VkLCBvblByZXNzIH0pIHtcbiAgICBmdW5jdGlvbiB1c2VBcmlhQnV0dG9uUHJvcHMoeyBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCwgdGFiSW5kZXgsIHJvbGUsIC4uLnAgfSkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4gb25QcmVzcz8uKGVuaGFuY2VFdmVudChlLCB7IHByZXNzZWQ6IHByZXNzZWQgPT0gbnVsbCA/IG51bGwgOiAhcHJlc3NlZCB9KSksIHVuZGVmaW5lZCkocCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblByb3BzID0geyByb2xlLCB0YWJJbmRleCwgXCJhcmlhLXByZXNzZWRcIjogYXJpYVByZXNzZWQgPz8gKHByZXNzZWQgPT09IHRydWUgPyBcInRydWVcIiA6IHByZXNzZWQgPT09IGZhbHNlID8gXCJmYWxzZVwiIDogdW5kZWZpbmVkKSB9O1xuICAgICAgICBjb25zdCBkaXZQcm9wcyA9IHsgLi4uYnV0dG9uUHJvcHMsIHRhYkluZGV4OiB0YWJJbmRleCA/PyAwLCByb2xlOiByb2xlID8/IFwiYnV0dG9uXCIgfTtcbiAgICAgICAgY29uc3QgYW5jaG9yUHJvcHMgPSB7IC4uLmRpdlByb3BzIH07XG4gICAgICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYnV0dG9uUHJvcHMsIHByb3BzKTtcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYW5jaG9yUHJvcHMsIHByb3BzKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoZGl2UHJvcHMsIHByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VBcmlhQnV0dG9uUHJvcHNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvbih7IGV4cGFuZGVkSW5kZXgsIHNldEV4cGFuZGVkSW5kZXggfSkge1xuICAgIGNvbnN0IFtsYXN0Rm9jdXNlZEluZGV4LCBzZXRMYXN0Rm9jdXNlZEluZGV4LCBnZXRMYXN0Rm9jdXNlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHN0YWJsZVNldEV4cGFuZGVkSW5kZXggPSB1c2VTdGFibGVDYWxsYmFjayhzZXRFeHBhbmRlZEluZGV4ID8/ICgoKSA9PiB7IH0pKTtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24gfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleCgoMCkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoKG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucy5sZW5ndGggLSAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChpID0+ICgoaSA/PyAwKSAtIDEpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGkgPT4gKChpID8/IDApICsgMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb24oeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucywgbmF2aWdhdGlvbkRpcmVjdGlvbjogXCJibG9ja1wiLCBpbmRleDogbGFzdEZvY3VzZWRJbmRleCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0IH0pO1xuICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiBleHBhbmRlZEluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucyxcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaSwgb3BlbikgPT4gbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldPy5zZXRPcGVuRnJvbVBhcmVudChvcGVuKSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaSkgPT4gKG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXT8uZ2V0T3BlbkZyb21QYXJlbnQoKSA/PyBudWxsKVxuICAgIH0pO1xuICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiBsYXN0Rm9jdXNlZEluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucyxcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaSwgb3BlbikgPT4gb3BlbiAmJiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0uZm9jdXMoKSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaSkgPT4gZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbiA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJncy5pbmRleDtcbiAgICAgICAgY29uc3QgW29wZW5Gcm9tUGFyZW50LCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHsgcmFuZG9tSWQ6IGJvZHlSYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtYWNjb3JkaW9uLXNlY3Rpb24tYm9keS1cIiB9KTtcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogaGVhZFJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VIZWFkUmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRIZWFkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1oZWFkZXItXCIgfSk7XG4gICAgICAgIGxldCBvcGVuID0gKChhcmdzLm9wZW4gPz8gb3BlbkZyb21QYXJlbnQpID8/IG51bGwpO1xuICAgICAgICAvLyBUT0RPOiBDb252ZXJ0IHRvIHVzZSB1c2VNYW5hZ2VkQ2hpbGQgc28gdGhhdCB0aGlzIGhvb2sgXG4gICAgICAgIC8vIGlzIHN0YWJsZSB3aXRob3V0IChkaXJlY3RseSkgZGVwZW5kaW5nIG9uIHRoZSBvcGVuIHN0YXRlLlxuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyKHsgdGFnIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBnZXRFbGVtZW50KCk/LmZvY3VzKCk7IH0sIFtdKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24oeyBpbmRleCwgb3Blbiwgc2V0T3BlbkZyb21QYXJlbnQsIGdldE9wZW5Gcm9tUGFyZW50LCBmb2N1cyB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyUHJvcHMoeyBbXCJhcmlhLWV4cGFuZGVkXCJdOiBhcmlhRXhwYW5kZWQsIFtcImFyaWEtZGlzYWJsZWRcIl06IGFyaWFEaXNhYmxlZCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoYXJncy5pbmRleCk7IH07XG4gICAgICAgICAgICAgICAgbGV0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRPcGVuRnJvbVBhcmVudCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhYmxlU2V0RXhwYW5kZWRJbmRleChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhYmxlU2V0RXhwYW5kZWRJbmRleChhcmdzLmluZGV4KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCByZXRCID0gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4OiAwIH0sIHVzZVByZXNzRXZlbnRIYW5kbGVycyhvbkNsaWNrLCB1bmRlZmluZWQpKHByb3BzKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJldDMgPSB1c2VNZXJnZWRQcm9wcygpKHVzZUhlYWRSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRCb2R5SWRQcm9wcyhcImFyaWEtY29udHJvbHNcIikoe1xuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogKGFyaWFFeHBhbmRlZCA/PyAoISFvcGVuKS50b1N0cmluZygpKSxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IChhcmlhRGlzYWJsZWQgPz8gKG9wZW4gPyBcInRydWVcIiA6IHVuZGVmaW5lZCkpLFxuICAgICAgICAgICAgICAgICAgICAuLi51c2VSZWZFbGVtZW50UHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocmV0QikpXG4gICAgICAgICAgICAgICAgfSkpLCB7IG9uRm9jdXMgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyhyZXQzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHJldHVybiB7IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyUHJvcHMgfTtcbiAgICAgICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25Qcm9wcywgaW5kZXgsIG9wZW5dKTtcbiAgICAgICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5KCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5UHJvcHMoeyByb2xlLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldDEgPSB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikoeyByb2xlOiByb2xlID8/IFwicmVnaW9uXCIsIC4uLnByb3BzIH0pO1xuICAgICAgICAgICAgICAgIGxldCByZXQyID0gdXNlQm9keVJhbmRvbUlkUHJvcHMocmV0MSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleHBhbmRlZDogb3BlbixcbiAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyLFxuICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5LFxuICAgICAgICB9O1xuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHNdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvblxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWNjb3JkaW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG4vKipcbiAqIEFkZHMgYW4gSUQgYW5kIFwiYXJpYS1sYWJlbGxlZGJ5XCIgZm9yIHR3byBlbGVtZW50cywgYW4gXCJpbnB1dFwiIGVsZW1lbnQgYW5kIGEgXCJsYWJlbFwiIGVsZW1lbnQuXG4gKlxuICogUmV0dXJucyB0aGUgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBob29rcyBpZiB5b3UgbmVlZCB0byBhbHNvIGFkZCBvdGhlciBJRC1yZWZlcmVuY2luZyBhdHRyaWJ1dGVzLCBsaWtlIGBmb3JgXG4gKlxuICogQHNlZSB1c2VJbnB1dExhYmVsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXgsIGJhY2t1cFRleHQgfSA9IHsgbGFiZWxQcmVmaXg6IFwibGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImlucHV0LVwiIH0pIHtcbiAgICBjb25zdCBbbGFiZWxFbGVtZW50LCBzZXRMYWJlbEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lucHV0RWxlbWVudCwgc2V0SW5wdXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0TGFiZWxFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUxhYmVsUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRMYWJlbEVsZW1lbnQgfSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRJbnB1dEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlSW5wdXRSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldElucHV0RWxlbWVudCB9KTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZUxhYmVsUmFuZG9tSWRQcm9wcywgaWQ6IGxhYmVsSWQsIHJhbmRvbUlkOiBsYWJlbFJhbmRvbUlkLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IGxhYmVsUHJlZml4IH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlSW5wdXRSYW5kb21JZFByb3BzLCBpZDogaW5wdXRJZCwgcmFuZG9tSWQ6IGlucHV0UmFuZG9tSWQsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogaW5wdXRQcmVmaXggfSk7XG4gICAgY29uc3QgbGFiZWxIYXNNb3VudGVkID0gISEobGFiZWxFbGVtZW50KTtcbiAgICBjb25zdCBpbnB1dEhhc01vdW50ZWQgPSAhIShpbnB1dEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzOiAocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxhYmVsUmFuZG9tSWRQcm9wcyh1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyhwcm9wcykpOyB9XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzOiAoeyBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieSwgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAodXNlSW5wdXRSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlSW5wdXRSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1sYWJlbFwiOiAoIWxhYmVsSGFzTW91bnRlZCA/IGJhY2t1cFRleHQgOiBhcmlhTGFiZWwpID8/IGFyaWFMYWJlbCB9LCBwcm9wcykpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtsYWJlbEhhc01vdW50ZWRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VHZW5lcmljTGFiZWxJbnB1dCxcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWwsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsXG4gICAgICAgIGxhYmVsSWQsXG4gICAgICAgIGlucHV0SWQsXG4gICAgICAgIGxhYmVsRWxlbWVudCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXG4gICAgICAgIGdldElucHV0RWxlbWVudCxcbiAgICB9O1xufVxuLyoqXG4gKiBIYW5kbGVzIHRoZSBhdHRyaWJ1dGVzIGBpZGAsIGBmb3JgLCBhbmQgYGFyaWEtbGFiZWxsZWRieWAgZm9yIHRvIHJlbGF0ZWQgZWxlbWVudHMuXG4gKlxuICogSXQncyBhc3N1bWVkIHRoYXQgdGhlIGxhYmVsIGlzIGFuIGBIVE1MTGFiZWxFbGVtZW50YCwgYW5kIHRoZSBpbnB1dCBpcyBzb21ldGhpbmcgZm9yIHdoaWNoXG4gKiB0aGUgYGZvcmAgYXR0cmlidXRlIGNhbiByZWZlcmVuY2UuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9ID0geyBsYWJlbFByZWZpeDogXCJsYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiaW5wdXQtXCIgfSkge1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBpbnB1dElkLCBsYWJlbElkLCBpbnB1dEVsZW1lbnQsIGdldElucHV0RWxlbWVudCwgbGFiZWxFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9KTtcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsTGFiZWwoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VJbnB1dExhYmVsTGFiZWxQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhGb3IgPSB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzKFwiZm9yXCIpKHByb3BzKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRob3V0Rm9yID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHModGFnID09IFwibGFiZWxcIiA/IHdpdGhGb3IgOiB3aXRob3V0Rm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsSW5wdXRdKTtcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsSW5wdXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZUlucHV0TGFiZWxJbnB1dFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMocHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUlucHV0TGFiZWxMYWJlbCxcbiAgICAgICAgdXNlSW5wdXRMYWJlbElucHV0LFxuICAgICAgICBsYWJlbElkLFxuICAgICAgICBpbnB1dElkLFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIGxhYmVsRWxlbWVudCxcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50LFxuICAgICAgICBnZXRMYWJlbEVsZW1lbnRcbiAgICB9O1xufVxuY29uc3QgaGFuZGxlc0lucHV0ID0gKHRhZywgbGFiZWxQb3NpdGlvbiwgd2hpY2gpID0+IHtcbiAgICBpZiAobGFiZWxQb3NpdGlvbiA9PT0gXCJzZXBhcmF0ZVwiKSB7XG4gICAgICAgIGlmICh3aGljaCA9PT0gXCJpbnB1dC1lbGVtZW50XCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAod2hpY2ggPT09IFwibGFiZWwtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIHRhZyAhPSBcImlucHV0XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhYmVsUG9zaXRpb24gPT09IFwid3JhcHBpbmdcIikge1xuICAgICAgICBpZiAod2hpY2ggPT09IFwiaW5wdXQtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAod2hpY2ggPT0gXCJsYWJlbC1lbGVtZW50XCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuLyoqXG4gKiBIYW5kbGVzIGxhYmVsIHR5cGUgKHdyYXBwaW5nIG9yIHNlcGFyYXRlKSBmb3IgY2hlY2tib3hlcywgcmFkaW9zLCBzd2l0Y2hlcywgZXRjLlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZSh7IGNoZWNrZWQsIGRpc2FibGVkLCBsYWJlbFBvc2l0aW9uLCBvbklucHV0LCByb2xlIH0pIHtcbiAgICBjb25zdCBzdGFibGVPbklucHV0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBvbklucHV0Py4oZSk7IH0pO1xuICAgIGNvbnN0IHsgaW5wdXRJZCwgbGFiZWxJZCwgdXNlSW5wdXRMYWJlbElucHV0OiB1c2VJTElucHV0LCB1c2VJbnB1dExhYmVsTGFiZWw6IHVzZUlMTGFiZWwsIGdldExhYmVsRWxlbWVudCwgZ2V0SW5wdXRFbGVtZW50IH0gPSB1c2VJbnB1dExhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1pbnB1dC1cIiB9KTtcbiAgICBjb25zdCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlSW5wdXRMYWJlbElucHV0UHJvcHM6IHVzZUlMSW5wdXRQcm9wcyB9ID0gdXNlSUxJbnB1dCgpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIC8vIG9uQ2xpY2sgYW5kIG9uQ2hhbmdlIGFyZSBhIGJpdCBtZXNzeSwgc28gd2UgbmVlZCB0b1xuICAgICAgICAvLyAqYWx3YXlzKiBtYWtlIHN1cmUgdGhhdCB0aGUgdmlzaWJsZSBzdGF0ZSBpcyBjb3JyZWN0XG4gICAgICAgIC8vIGFmdGVyIGFsbCB0aGUgZXZlbnQgZHVzdCBzZXR0bGVzLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMjc0NSxcbiAgICAgICAgLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzE4OTkjaXNzdWVjb21tZW50LTUyNTY5MDE5NFxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHRhZyA9PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFnLCBjaGVja2VkXSk7XG4gICAgICAgIHJldHVybiB7IGdldElucHV0RWxlbWVudDogZ2V0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMgfTtcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XG4gICAgICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIENocm9tZSB3b24ndCBmaXJlIG9uSW5wdXQgZXZlbnRzIGZvciByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRhYkluZGV4PS0xPz9cbiAgICAgICAgICAgIC8vIE5lZWRzIGludmVzdGlnYXRpbmcsIGJ1dCBvbklucHV0IHdvcmtzIGZpbmUgaW4gRmlyZWZveFxuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKGRpc2FibGVkIHx8ICFoYW5kbGVzSW5wdXQodGFnLCBsYWJlbFBvc2l0aW9uLCBcImlucHV0LWVsZW1lbnRcIikgPyB1bmRlZmluZWQgOiBzdGFibGVPbklucHV0LCB1bmRlZmluZWQpKHt9KTtcbiAgICAgICAgICAgIGlmICh0YWcgPT0gXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHByb3BzLm9uSW5wdXQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcHJvcHMgPSB1c2VSZWZFbGVtZW50UHJvcHModXNlSUxJbnB1dFByb3BzKHByb3BzKSk7XG4gICAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PSBcIndyYXBwaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHRoZSB3cmFwcGVkIGxhYmVsIGhhbmRsZXMgYWxsIGludGVyYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGlzIGVsZW1lbnQgY2FuJ3QgYmUgaW50ZXJhY3RlZCB3aXRoXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiBpdCdzIGFuIGlucHV0IGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcHJvcHMuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgcHJvcHMub25Gb2N1cyA9IGUgPT4gZ2V0TGFiZWxFbGVtZW50KCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0YWcgPT09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnJvbGUgPSByb2xlO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1jaGVja2VkXCJdID0gY2hlY2tlZCA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBkaXNhYmxlZC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgbGFiZWwgY2xpY2tzIGNhbid0IGFmZmVjdCB0aGUgY2hlY2tib3ggd2hpbGUgaXQncyBkaXNhYmxlZFxuICAgICAgICAgICAgcHJvcHMub25DbGljayA9IGRpc2FibGVkID8gKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfSkgOiBwcm9wcy5vbkNsaWNrO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkocDAsIHByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIFt1c2VJTElucHV0LCByb2xlLCBsYWJlbFBvc2l0aW9uLCBkaXNhYmxlZCwgY2hlY2tlZF0pO1xuICAgIGNvbnN0IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VJbnB1dExhYmVsTGFiZWxQcm9wczogdXNlSUxMYWJlbFByb3BzIH0gPSB1c2VJTExhYmVsKHsgdGFnIH0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhkaXNhYmxlZCB8fCAhaGFuZGxlc0lucHV0KHRhZywgbGFiZWxQb3NpdGlvbiwgXCJsYWJlbC1lbGVtZW50XCIpID8gdW5kZWZpbmVkIDogc3RhYmxlT25JbnB1dCwgdW5kZWZpbmVkKSh7fSk7XG4gICAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PSBcIndyYXBwaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IHJvbGU7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gZGlzYWJsZWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtY2hlY2tlZFwiXSA9IGNoZWNrZWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBvbmUgY2FzZSB3aGVyZSB0aGVyZSdzIGFsbW9zdCBub3RoaW5nIHRvIGRvXG4gICAgICAgICAgICAgICAgLy8gVGhlIG1vc3Qgbm9ybWFsIGNhc2Ugd2hlcmUgZXZlcnl0aGluZyBhY3RzIGFjY29yZGluZyBub3JtYWwgSFRNTCBtZWNoYW5pY3MuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBKdXN0IG1ha2Ugc3VyZSB0aGF0IGxhYmVsIGNsaWNrcyBjYW4ndCBhZmZlY3QgdGhlIGNoZWNrYm94IHdoaWxlIGl0J3MgZGlzYWJsZWRcbiAgICAgICAgICAgIG5ld1Byb3BzLm9uQ2xpY2sgPSBkaXNhYmxlZCA/ICgoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH0pIDogbmV3UHJvcHMub25DbGljaztcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCB1c2VJTExhYmVsUHJvcHMocDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyB9O1xuICAgIH0sIFt1c2VJTExhYmVsLCBkaXNhYmxlZCwgY2hlY2tlZCwgcm9sZSwgbGFiZWxQb3NpdGlvbl0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCxcbiAgICAgICAgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50LFxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXG4gICAgICAgIGdldElucHV0RWxlbWVudFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGFiZWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlQ2hlY2tib3hMaWtlIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUNoZWNrYm94KHsgbGFiZWxQb3NpdGlvbiwgY2hlY2tlZCwgb25JbnB1dCwgZGlzYWJsZWQgfSkge1xuICAgIGNvbnN0IG9uSW5wdXRFbmhhbmNlZCA9IChlKSA9PiBvbklucHV0Py4oZW5oYW5jZUV2ZW50KGUsIHsgY2hlY2tlZDogIWNoZWNrZWQgfSkpO1xuICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50IH0gPSB1c2VDaGVja2JveExpa2UoeyBjaGVja2VkOiAhIWNoZWNrZWQsIGxhYmVsUG9zaXRpb24sIHJvbGU6IFwiY2hlY2tib3hcIiwgZGlzYWJsZWQsIG9uSW5wdXQ6IG9uSW5wdXRFbmhhbmNlZCB9KTtcbiAgICBjb25zdCB1c2VDaGVja2JveElucHV0RWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50KHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyBnZXRJbnB1dEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzIH0gPSB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQoeyB0YWcgfSk7XG4gICAgICAgIGNvbnN0IGlzTWl4ZWQgPSAoY2hlY2tlZCA9PSBcIm1peGVkXCIpO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZ2V0SW5wdXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoaW5wdXRFbGVtZW50ICYmIHRhZyA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBpc01peGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbaXNNaXhlZCwgdGFnXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94SW5wdXRFbGVtZW50UHJvcHMgfTtcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzKHAwKTtcbiAgICAgICAgICAgIHByb3BzLmNoZWNrZWQgPz89ICEhY2hlY2tlZDtcbiAgICAgICAgICAgIGlmICh0YWcgPT0gXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHByb3BzLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LCBjaGVja2VkLCBsYWJlbFBvc2l0aW9uLCBkaXNhYmxlZF0pO1xuICAgIGNvbnN0IHVzZUNoZWNrYm94TGFiZWxFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzIH0gPSB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQoeyB0YWcgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50UHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRQcm9wcyB9O1xuICAgIH0sIFt1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQsIGRpc2FibGVkLCBsYWJlbFBvc2l0aW9uXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQsXG4gICAgICAgIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGVja2JveC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEV2ZW50RGV0YWlsLCBlbmhhbmNlRXZlbnQgfSBmcm9tIFwiLi9wcm9wc1wiO1xuLyoqXG4gKlxuICpcbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja2JveEdyb3VwKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIHNob3VsZEZvY3VzT25DaGFuZ2UsIG9uVXBkYXRlQ2hpbGRyZW46IG9uVXBkYXRlQ2hpbGRyZW5VbnN0YWJsZSB9KSB7XG4gICAgY29uc3Qgb25VcGRhdGVDaGlsZHJlbiA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uVXBkYXRlQ2hpbGRyZW5VbnN0YWJsZSk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgc2hvdWxkRm9jdXNPbkNoYW5nZSB9KTtcbiAgICAvL2NvbnN0IFt1bmNoZWNrZWRDb3VudCwgc2V0VW5oZWNrZWRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY2hlY2tlZENvdW50LCBzZXRDaGVja2VkQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgY2hlY2tlZEluZGljZXMgPSB1c2VSZWYobmV3IFNldCgpKTtcbiAgICAvL2NvbnN0IFtzZWxmSXNDaGVja2VkLCBzZXRTZWxmSXNDaGVja2VkLCBnZXRTZWxmSXNDaGVja2VkXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBcIm1peGVkXCI+KGZhbHNlKTtcbiAgICBjb25zdCBnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2UgPD0gMCA/IGZhbHNlIDogcGVyY2VudGFnZSA+PSAxID8gdHJ1ZSA6IFwibWl4ZWRcIjtcbiAgICB9LCBbY2hlY2tlZENvdW50LCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoXSk7XG4gICAgY29uc3QgZ2V0U2VsZklzQ2hlY2tlZFN0YWJsZSA9IHVzZVN0YWJsZUNhbGxiYWNrKGdldFNlbGZJc0NoZWNrZWRVbnN0YWJsZSk7XG4gICAgLy8gSWYgdGhlIHVzZXIgaGFzIGNoYW5nZWQgdGhlIHBhcmVudCBjaGVja2JveCdzIHZhbHVlLCB0aGVuIHRoaXMgcmVmIGhvbGRzIGEgbWVtb3J5IG9mIHdoYXQgdmFsdWVzIHdlcmUgaGVsZCBiZWZvcmUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpdCdzIG51bGwgd2hlbiB0aGUgbGFzdCBpbnB1dCB3YXMgZnJvbSBhIGNoaWxkIGNoZWNrYm94LiBcbiAgICBjb25zdCBzYXZlZENoZWNrZWRWYWx1ZXMgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgb25DaGVja2JveEdyb3VwUGFyZW50SW5wdXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGZJc0NoZWNrZWQgPSBnZXRTZWxmSXNDaGVja2VkU3RhYmxlKCk7XG4gICAgICAgIGlmIChzZWxmSXNDaGVja2VkID09PSB0cnVlIHx8IChzZWxmSXNDaGVja2VkID09PSBmYWxzZSAmJiBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA9PSBudWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiBmYWxzZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZklzQ2hlY2tlZCA9PT0gXCJtaXhlZFwiKSB7XG4gICAgICAgICAgICBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50LnNldChjaGlsZC5pbmRleCwgY2hpbGQuZ2V0Q2hlY2tlZCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogdHJ1ZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID8/IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIGNoaWxkIElEcywgYW5kIGFueSB0aW1lIGFueSBvZiB0aGVtIGNoYW5nZSwgXG4gICAgLy8gZ2VuZXJhdGUgYSBuZXcgc3RyaW5nIHdpdGggYWxsIG9mIHRoZW0gY29uY2F0ZW5hdGVkIHRvZ2V0aGVyXG4gICAgLy8gKGJ1dCBvbmx5IG9uY2UgcGVyIHJlbmRlcik7XG4gICAgY29uc3QgYWxsSWRzID0gdXNlUmVmKG5ldyBTZXQoKSk7XG4gICAgY29uc3QgW2FyaWFDb250cm9scywgc2V0QXJpYUNvbnRyb2xzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt1cGRhdGVJbmRleCwgc2V0SWRVcGRhdGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBub3RpZnlDaGVja2VkID0gdXNlQ2FsbGJhY2soKGluZGV4LCBjaGVja2VkKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuaGFzKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHNldENoZWNrZWRDb3VudChjID0+IChjICsgMSkpO1xuICAgICAgICAgICAgICAgIGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuYWRkKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjaGVja2VkSW5kaWNlcy5jdXJyZW50LmhhcyhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyAtIDEpKTtcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbc2V0Q2hlY2tlZENvdW50LCBjaGVja2VkSW5kaWNlc10pO1xuICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBzZXRTZWxmSXNDaGVja2VkKHBlcmNlbnRhZ2UgPD0gMCA/IGZhbHNlIDogcGVyY2VudGFnZSA+PSAxID8gdHJ1ZSA6IFwibWl4ZWRcIilcbiAgICB9LCBbc2V0U2VsZklzQ2hlY2tlZCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgY2hlY2tlZENvdW50XSk7Ki9cbiAgICBjb25zdCB1c2VDaGVja2JveEdyb3VwUGFyZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtY29udHJvbHNcIjogYXJpYUNvbnRyb2xzIH0sIHByb3BzKTtcbiAgICB9LCBbYXJpYUNvbnRyb2xzXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0QXJpYUNvbnRyb2xzKEFycmF5LmZyb20oYWxsSWRzLmN1cnJlbnQpLmpvaW4oXCIgXCIpKTtcbiAgICB9LCBbdXBkYXRlSW5kZXhdKTtcbiAgICBjb25zdCB1c2VDaGVja2JveEdyb3VwQ2hpbGQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyBpbmRleCwgdGV4dCwgY2hlY2tlZCwgaWQsIC4uLnJlc3QgfSkge1xuICAgICAgICBjb25zdCBnZXRDaGVja2VkID0gdXNlU3RhYmxlR2V0dGVyKGNoZWNrZWQpO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuYWRkKGlkKTtcbiAgICAgICAgICAgIHNldElkVXBkYXRlSW5kZXgoaSA9PiArK2kpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGxJZHMuY3VycmVudC5kZWxldGUoaWQpO1xuICAgICAgICAgICAgICAgIHNldElkVXBkYXRlSW5kZXgoaSA9PiArK2kpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW2lkXSk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBub3RpZnlDaGVja2VkKGluZGV4LCBjaGVja2VkKTtcbiAgICAgICAgfSwgW2luZGV4LCBjaGVja2VkXSk7XG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBpbmRleCwgdGV4dCwgaWQsIGdldENoZWNrZWQsIC4uLnJlc3QgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWJiYWJsZSxcbiAgICAgICAgICAgIHVzZUNoZWNrYm94R3JvdXBDaGlsZFByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSkpLCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzXSlcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbm90aWZ5Q2hlY2tlZCwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1hbmFnZWRDaGVja2JveGVzOiBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIHVzZUNoZWNrYm94R3JvdXBDaGlsZCxcbiAgICAgICAgdXNlQ2hlY2tib3hHcm91cFBhcmVudFByb3BzLFxuICAgICAgICBwYXJlbnRJc0NoZWNrZWQ6IGdldFNlbGZJc0NoZWNrZWRVbnN0YWJsZSgpLFxuICAgICAgICBwYXJlbnRQZXJjZW50Q2hlY2tlZDogKGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgpLFxuICAgICAgICBvbkNoZWNrYm94R3JvdXBQYXJlbnRJbnB1dCxcbiAgICAgICAgdGFiYmFibGVJbmRleCxcbiAgICAgICAgZm9jdXM6IGZvY3VzQ3VycmVudCxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3gtZ3JvdXAuanMubWFwIiwiaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCwgdXNlRm9jdXNUcmFwLCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogQWRkcyBldmVudCBoYW5kbGVycyBmb3IgYSBtb2RhbC1saWtlIHNvZnQtZGlzbWlzcyBpbnRlcmFjdGlvbi5cbiAqXG4gKiBUaGF0IGlzLCBhbnkgY2xpY2tzIG9yIHRhcHMgb3V0c2lkZSBvZiB0aGUgZ2l2ZW4gY29tcG9uZW50LFxuICogb3IgYW55IHRpbWUgdGhlIEVzY2FwZSBrZXkgaXMgcHJlc3NlZCB3aXRoaW4gdGhlIGNvbXBvbmVudCxcbiAqICh3aXRoIHZhcmlvdXMgYnJvd3NlciBvZGRpdGllcyByZWdhcmRpbmcgY2xpY2tzIG9uIGJsYW5rIG9yIGluZXJ0IGFyZWFzIGhhbmRsZWQpXG4gKiB0aGUgY29tcG9uZW50IHdpbGwgcmVxdWVzdCB0byBjbG9zZSBpdHNlbGYuXG4gKlxuICogT2YgY291cnNlLCBpZiB5b3UgZG9uJ3QgZG8gYW55dGhpbmcgaW4gdGhlIGBvbkNsb3NlYCBmdW5jdGlvbixcbiAqIGl0IHdvbid0IGJlIGEgc29mdCBkaXNtaXNzIGFueW1vcmUuXG4gKlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZSwgZ2V0RWxlbWVudHMgfSkge1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcbiAgICBjb25zdCBzdGFibGVHZXRFbGVtZW50cyA9IHVzZVN0YWJsZUNhbGxiYWNrKGdldEVsZW1lbnRzKTtcbiAgICBjb25zdCBnZXRPcGVuID0gdXNlU3RhYmxlR2V0dGVyKG9wZW4pO1xuICAgIGNvbnN0IG9uQmFja2Ryb3BDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIG9uQmFja2Ryb3BDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RWxlbWVudCgpPy5vd25lckRvY3VtZW50O1xuICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudD8uZGVmYXVsdFZpZXc7XG4gICAgICAgIC8vIEJhc2ljYWxseSwgXCJ3YXMgdGhpcyBldmVudCBmaXJlZCBvbiB0aGUgcm9vdC1tb3N0IGVsZW1lbnQsIG9yIGF0IGxlYXN0IGFuIGVsZW1lbnQgbm90IGNvbnRhaW5lZCBieSB0aGUgbW9kYWw/XCJcbiAgICAgICAgLy8gRWl0aGVyIGNvdWxkIGJlIGhvdyB0aGUgYnJvd3NlciBoYW5kbGVzIHRoZXNlIHNvcnRzIG9mIFwiaW50ZXJhY3Rpbmcgd2l0aCBub3RoaW5nXCIgZXZlbnRzLlxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgc3RhYmxlT25DbG9zZShcImJhY2tkcm9wXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50cyA9IHN0YWJsZUdldEVsZW1lbnRzKCk7XG4gICAgICAgIGlmIChlbGVtZW50cyAmJiBlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuICAgICAgICAgICAgbGV0IGZvdW5kSW5zaWRlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJbnNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmRJbnNpZGVDbGljaylcbiAgICAgICAgICAgICAgICBvbkNsb3NlKFwiYmFja2Ryb3BcIik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgeyB1c2VBY3RpdmVFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoe1xuICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygobmV3RWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkRm9jdXNhYmxlRWxlbWVudHMgPSBzdGFibGVHZXRFbGVtZW50cygpO1xuICAgICAgICAgICAgaWYgKHZhbGlkRm9jdXNhYmxlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsaWRGb2N1c2FibGVFbGVtZW50cykpXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRm9jdXNhYmxlRWxlbWVudHMgPSBbdmFsaWRGb2N1c2FibGVFbGVtZW50c107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZm9jdXNhYmxlIG9mIHZhbGlkRm9jdXNhYmxlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZT8uY29udGFpbnMobmV3RWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbG9zZShcImxvc3QtZm9jdXNcIik7XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlPy5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgLy8gU2luY2UgZXZlcnl0aGluZyBlbHNlIGlzIGluZXJ0LCB3ZSBsaXN0ZW4gZm9yIGNhcHR1cmVkIGNsaWNrcyBvbiB0aGUgd2luZG93XG4gICAgICAgICAgICAvLyAod2UgZG9uJ3QgdXNlIG9uQ2xpY2sgc2luY2UgdGhhdCBkb2Vzbid0IGZpcmUgd2hlbiBjbGlja2VkIG9uIGVtcHR5L2luZXJ0IGFyZWFzKVxuICAgICAgICAgICAgLy8gTm90ZTogV2UgbmVlZCBhICpzZXBhcmF0ZSogdG91Y2ggZXZlbnQgb24gbW9iaWxlIFNhZmFyaSwgYmVjYXVzZVxuICAgICAgICAgICAgLy8gaXQgZG9lc24ndCBsZXQgY2xpY2sgZXZlbnRzIGJ1YmJsZSBvciBiZSBjYXB0dXJlZCBmcm9tIHRyYWRpdGlvbmFsbHkgbm9uLWludGVyYWN0aXZlIGVsZW1lbnRzLFxuICAgICAgICAgICAgLy8gYnV0IHRvdWNoIGV2ZW50cyB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICAgICAgY29uc3QgbW91c2VEb3duID0gKGUpID0+IHsgaWYgKGdldE9wZW4oKSlcbiAgICAgICAgICAgICAgICBvbkJhY2tkcm9wQ2xpY2soZSk7IH07XG4gICAgICAgICAgICBjb25zdCB0b3VjaFN0YXJ0ID0gKGUpID0+IHsgaWYgKGdldE9wZW4oKSlcbiAgICAgICAgICAgICAgICBvbkJhY2tkcm9wQ2xpY2soZSk7IH07XG4gICAgICAgICAgICBjb25zdCBrZXlEb3duID0gKGUpID0+IHsgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgc3RhYmxlT25DbG9zZShcImVzY2FwZVwiKTtcbiAgICAgICAgICAgIH0gfTtcbiAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd24sIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydCwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgdXNlU29mdERpc21pc3NQcm9wczogdXNlQ2FsbGJhY2socHJvcHMgPT4gdXNlQWN0aXZlRWxlbWVudFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpLCBbdXNlQWN0aXZlRWxlbWVudFByb3BzLCB1c2VSZWZFbGVtZW50UHJvcHNdKSB9O1xufVxuLyoqXG4gKiBBIGdlbmVyaWMgbW9kYWwgaG9vaywgdXNlZCBieSBtb2RhbCBkaWFsb2dzLCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgYnkgYW55dGhpbmcgdGhhdCdzIG1vZGFsIHdpdGggYSBiYWNrZHJvcC5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSkge1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcbiAgICBjb25zdCBbbW9kYWxEZXNjcmliZWRCeUJvZHksIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VIaWRlU2Nyb2xsKG9wZW4pO1xuICAgIGNvbnN0IHsgaWQ6IG1vZGFsSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1vZGFsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1vZGFsUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLVwiIH0pO1xuICAgIGNvbnN0IHsgaWQ6IGJvZHlJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLWJvZHktXCIgfSk7XG4gICAgY29uc3QgeyBpZDogdGl0bGVJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlVGl0bGVJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlVGl0bGVSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtdGl0bGUtXCIgfSk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZU1vZGFsUmVmRWxlbWVudCwgZ2V0RWxlbWVudDogZ2V0TW9kYWxFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UsIGdldEVsZW1lbnRzOiBnZXRNb2RhbEVsZW1lbnQgfSk7XG4gICAgY29uc3QgdXNlTW9kYWxCYWNrZHJvcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3AoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3BQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJVcDogKCkgPT4gc3RhYmxlT25DbG9zZShcImJhY2tkcm9wXCIpIH0sIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlTW9kYWxQcm9wcyA9IGZ1bmN0aW9uICh7IFwiYXJpYS1tb2RhbFwiOiBhcmlhTW9kYWwsIHJvbGUsIC4uLnAwIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VGb2N1c1RyYXBQcm9wcyB9ID0gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZTogb3BlbiB9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VUaXRsZVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtbGFiZWxsZWRieVwiKShwMCk7XG4gICAgICAgIGNvbnN0IHAyID0gdXNlTW9kYWxJZFByb3BzKHAxKTtcbiAgICAgICAgY29uc3QgcEZpbmFsID0gdXNlQm9keVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikocDIpO1xuICAgICAgICByZXR1cm4gdXNlRm9jdXNUcmFwUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh1c2VNb2RhbFJlZkVsZW1lbnQoeyByb2xlOiBcImRpYWxvZ1wiIH0pLCBtb2RhbERlc2NyaWJlZEJ5Qm9keSA/IHBGaW5hbCA6IHAyKSk7XG4gICAgfTtcbiAgICBjb25zdCB1c2VNb2RhbFRpdGxlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgdXNlTW9kYWxUaXRsZVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlVGl0bGVJZFByb3BzKHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxUaXRsZVByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZU1vZGFsQm9keSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQm9keSh7IGRlc2NyaXB0aXZlIH0pIHtcbiAgICAgICAgc2V0TW9kYWxEZXNjcmliZWRCeUJvZHkoZGVzY3JpcHRpdmUpO1xuICAgICAgICBjb25zdCB1c2VNb2RhbEJvZHlQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHVzZUJvZHlJZFByb3BzKHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxCb2R5UHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTW9kYWxQcm9wcyxcbiAgICAgICAgdXNlTW9kYWxUaXRsZSxcbiAgICAgICAgdXNlTW9kYWxCb2R5LFxuICAgICAgICB1c2VNb2RhbEJhY2tkcm9wXG4gICAgfTtcbn1cbi8qKlxuICogQWxsb3dzIGZvciBoaWRpbmcgdGhlIHNjcm9sbCBiYXIgb2YgdGhlIHJvb3QgSFRNTCBlbGVtZW50XG4gKiB3aXRob3V0IHNoaWZ0aW5nIHRoZSBsYXlvdXQgb2YgdGhlIHBhZ2UgbW9yZSB0aGFuIGFkZGluZyBhIGZvdyBwaXhlbHNcbiAqIG9mIHBhZGRpbmcgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBuZWNlc3NhcnkuXG4gKiBAcGFyYW0gaGlkZVNjcm9sbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSGlkZVNjcm9sbChoaWRlU2Nyb2xsKSB7XG4gICAgY29uc3QgW2dldFNjcm9sbGJhcldpZHRoLCBzZXRTY3JvbGxiYXJXaWR0aF0gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2dldFNjcm9sbGJhckhlaWdodCwgc2V0U2Nyb2xsYmFySGVpZ2h0XSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaGlkZVNjcm9sbCkge1xuICAgICAgICAgICAgLy8gV2hlbiBzY3JvbGxpbmcgaXMgcmVzdW1lZCwgd2UnbGwgbmVlZCB0byByZXN0b3JlIHRoZSBvcmlnaW5hbCBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBpbmZvcm1hdGlvbiBhcm91bmRcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgLy8gTWVhc3VyZSB0aGUgd2lkdGggb2YgdGhlIHBhZ2UgKG1pbnVzIHRoZSBzY3JvbGxiYXIpXG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRoU2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodFdpdGhTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgLy8gQXBwbHkgYSBjbGFzcyB0aGF0IGhpZGVzIHRoZSBzY3JvbGxiYXIuXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XG4gICAgICAgICAgICAvLyBJbiBjYXNlIG11bHRpcGxlIHRoaW5ncyBhcmUgbG9ja2luZyBzY3JvbGwsIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgYXJlIGRvaW5nIHRoYXRcbiAgICAgICAgICAgIC8vIChqdXN0IGFkZCAxIG9uIGVuYWJsZSwgc3VidHJhY3QgMSBvbiBkaXNhYmxlKVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgLy8gTWVhc3VyZSB0aGUgbmV3IHdpZHRoIHdpdGhvdXQgYSBzY3JvbGxiYXIgXG4gICAgICAgICAgICAvLyBzbyB3ZSBjYW4gdGFrZSB0aGUgZGlmZmVyZW5jZSBhcyB0aGUgc2Nyb2xsYmFyIHdpZHRoLlxuICAgICAgICAgICAgbGV0IHdpZHRoV2l0aG91dFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgICAgICAgICAgIGxldCBoZWlnaHRXaXRob3V0U2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGxldCBzY3JvbGxiYXJXaWR0aCA9ICh3aWR0aFdpdGhvdXRTY3JvbGxCYXIgLSB3aWR0aFdpdGhTY3JvbGxCYXIpO1xuICAgICAgICAgICAgbGV0IHNjcm9sbGJhckhlaWdodCA9IChoZWlnaHRXaXRob3V0U2Nyb2xsQmFyIC0gaGVpZ2h0V2l0aFNjcm9sbEJhcik7XG4gICAgICAgICAgICAvLyBGYWlsc2FmZSAtLSBpZiB0aGlzIG1lYXN1cmluZyB0cmljayBkb2VzIHNvbWV0aGluZyB1bmV4cGVjdGVkLCBqdXN0IGlnbm9yZSBpdFxuICAgICAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoID4gODApXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyV2lkdGggPSAwO1xuICAgICAgICAgICAgaWYgKHNjcm9sbGJhckhlaWdodCA+IDgwKVxuICAgICAgICAgICAgICAgIHNjcm9sbGJhckhlaWdodCA9IDA7XG4gICAgICAgICAgICAvLyBNYWtlIG91ciBtZWFzdXJlbWVudHMgYXZhaWxhYmxlIGFzIENTUyBwcm9wZXJ0aWVzIGZvciBnZW5lcmFsIHVzZVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbGJhci13aWR0aFwiLCBgJHtzY3JvbGxiYXJXaWR0aH1weGApO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbGJhci1oZWlnaHRcIiwgYCR7c2Nyb2xsYmFySGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsc3RvcC10b3BcIiwgYCR7b3JpZ2luYWxTY3JvbGxUb3B9cHhgKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxzdG9wLWxlZnRcIiwgYCR7b3JpZ2luYWxTY3JvbGxMZWZ0fXB4YCk7XG4gICAgICAgICAgICBzZXRTY3JvbGxiYXJXaWR0aChzY3JvbGxiYXJXaWR0aCk7XG4gICAgICAgICAgICBzZXRTY3JvbGxiYXJIZWlnaHQoc2Nyb2xsYmFySGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVW5kbyBhbGwgdGhlIHRoaW5ncyB3ZSBqdXN0IGRpZFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID0gKCsoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gfHwgXCIwXCIpIC0gMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2Ugd2VyZSB0aGUgbGFzdCBzY3JvbGwtbG9ja2luZyB0aGluZyB0byBzdG9wLCB0aGVuIHJlbW92ZSB0aGUgY2xhc3MgdGhhdCBzdG9wcyBzY3JvbGxpbmcuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbC1oaWRlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZG9jdW1lbnQtc2Nyb2xsLWhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxzbywgcmVzdG9yZSB0aGUgb3JpZ2luYWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvIHRoaXMgYnkgZm9yY2luZyB0aGUgc2Nyb2xsIGJlaGF2aW9yIHRvIG5vdCBiZSBzbW9vdGhcbiAgICAgICAgICAgICAgICAgICAgLy8gKGl0J3MgaW5zdGFudCBpZiBub3RoaW5nIGlzIHNldCB0byBzbW9vdGgsIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3NvbS12aWV3LyNzY3JvbGxpbmcpLFxuICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcsIHRoZW4gcmVzdG9yaW5nIHRoZSBvcmlnaW5hbCBzY3JvbGwgYmVoYXZpb3IgXG4gICAgICAgICAgICAgICAgICAgIC8vICh3aGljaCB3YXMgcHJvYmFibHkgYWxyZWFkeSBhdXRvIGFueXdheSwgYnV0IGp1c3QgdG8gYmUgc2FmZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxCZWhhdmlvciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvcjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUbyh7IHRvcDogb3JpZ2luYWxTY3JvbGxUb3AsIGxlZnQ6IG9yaWdpbmFsU2Nyb2xsTGVmdCwgYmVoYXZpb3I6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBvcmlnaW5hbFNjcm9sbEJlaGF2aW9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbaGlkZVNjcm9sbF0pO1xuICAgIHJldHVybiB7IGdldFNjcm9sbGJhcldpZHRoLCBnZXRTY3JvbGxiYXJIZWlnaHQgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tb2RhbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSBcIi4vdXNlLW1vZGFsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYURpYWxvZyh7IG9wZW4sIG9uQ2xvc2UgfSkge1xuICAgIC8vIFRPRE86IERpZmZlcmVuY2VzIGJldHdlZW4gZGlhbG9nIGFuZCBtb2RhbCBnbyBoZXJlLCBwcmVzdW1hYmx5LlxuICAgIC8vIE5vbi1tb2RhbCBkaWFsb2dzIG5lZWQgdG8gYmUgYWJsZSB0byBiZSByZXBvc2l0aW9uZWQsIGV0Yy5cbiAgICBjb25zdCB7IHVzZU1vZGFsQmFja2Ryb3AsIHVzZU1vZGFsQm9keSwgdXNlTW9kYWxQcm9wcywgdXNlTW9kYWxUaXRsZSB9ID0gdXNlTW9kYWwoeyBvcGVuLCBvbkNsb3NlIH0pO1xuICAgIGNvbnN0IHVzZURpYWxvZ0JhY2tkcm9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9ID0gdXNlTW9kYWxCYWNrZHJvcCgpO1xuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dCYWNrZHJvcFByb3BzOiB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfTtcbiAgICB9LCBbdXNlTW9kYWxCYWNrZHJvcF0pO1xuICAgIGNvbnN0IHVzZURpYWxvZ0JvZHkgPSB1c2VDYWxsYmFjaygoeyBkZXNjcmlwdGl2ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxCb2R5UHJvcHMgfSA9IHVzZU1vZGFsQm9keSh7IGRlc2NyaXB0aXZlIH0pO1xuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dCb2R5UHJvcHM6IHVzZU1vZGFsQm9keVByb3BzIH07XG4gICAgfSwgW3VzZU1vZGFsQmFja2Ryb3BdKTtcbiAgICBjb25zdCB1c2VEaWFsb2dQcm9wcyA9IHVzZU1vZGFsUHJvcHM7XG4gICAgY29uc3QgdXNlRGlhbG9nVGl0bGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxUaXRsZVByb3BzIH0gPSB1c2VNb2RhbFRpdGxlKCk7XG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ1RpdGxlUHJvcHM6IHVzZU1vZGFsVGl0bGVQcm9wcyB9O1xuICAgIH0sIFt1c2VNb2RhbFRpdGxlXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRGlhbG9nUHJvcHMsXG4gICAgICAgIHVzZURpYWxvZ1RpdGxlLFxuICAgICAgICB1c2VEaWFsb2dCb2R5LFxuICAgICAgICB1c2VEaWFsb2dCYWNrZHJvcFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZGlhbG9nLmpzLm1hcCIsImltcG9ydCB7IHVzZUhhc0ZvY3VzLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcbmltcG9ydCB7IHVzZUdlbmVyaWNMYWJlbCB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94TXVsdGkoeyAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMsIGdldEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoe30pO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCBjdXJyZW50VHlwZWFoZWFkLCBmb2N1c0N1cnJlbnQsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0Rm9jdXNlZElubmVyIH0pO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCBbc2hpZnRIZWxkLCBzZXRTaGlmdEhlbGQsIGdldFNoaWZ0SGVsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdHlwZWFoZWFkSW5Qcm9ncmVzcyA9ICghIWN1cnJlbnRUeXBlYWhlYWQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0VHlwZWFoZWFkSW5Qcm9ncmVzcyh0eXBlYWhlYWRJblByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgIH0sIFt0eXBlYWhlYWRJblByb2dyZXNzLCBjaGlsZENvdW50XSk7XG4gICAgY29uc3QgdXNlTGlzdGJveE11bHRpSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gaW5mby5zZWxlY3RlZDtcbiAgICAgICAgY29uc3QgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBnZXRTZWxlY3RlZCA9IHVzZVN0YWJsZUdldHRlcihzZWxlY3RlZCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhpbmZvLm9uU2VsZWN0ID8/ICgoKSA9PiB7IH0pKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IC4uLmluZm8sIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3MgfSk7XG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0U2hpZnRIZWxkKCkpIHtcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkOiB0cnVlIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0YWJiYWJsZV0pO1xuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtUHJvcHMsIHRhYmJhYmxlIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUl0ZW1Qcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoKGUpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IC4uLmUsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWQ6ICFnZXRTZWxlY3RlZCgpIH0gfSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSwgeyBzcGFjZTogdHlwZWFoZWFkSW5Qcm9ncmVzcyA/IFwiZXhjbHVkZVwiIDogdW5kZWZpbmVkIH0pKHt9KTtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm9wdGlvblwiO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNldHNpemVcIl0gPSAoY2hpbGRDb3VudCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9ICh0YWJiYWJsZSA/PyBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHByb3BzKSkpO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIGNoaWxkQ291bnQsIHR5cGVhaGVhZEluUHJvZ3Jlc3NdKTtcbiAgICBjb25zdCB1c2VMaXN0Ym94TXVsdGlMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUxhYmVsKCkge1xuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlMYWJlbFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XG4gICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpTGFiZWxQcm9wcyB9O1xuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xuICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUl0ZW0sIHVzZUxpc3Rib3hNdWx0aVByb3BzLCB1c2VMaXN0Ym94TXVsdGlMYWJlbCwgdGFiYmFibGVJbmRleCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgZm9jdXM6IGZvY3VzQ3VycmVudCB9O1xuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aVByb3BzKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcbiAgICAgICAgcHJvcHNbXCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiXSA9IFwidHJ1ZVwiO1xuICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VIYXNGb2N1c1Byb3BzKHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25Gb2N1c091dCB9LCBwcm9wcykpKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXG4gICAgICAgIHNldFNoaWZ0SGVsZCh0cnVlKTsgfVxuICAgIGZ1bmN0aW9uIG9uS2V5VXAoZSkgeyBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKVxuICAgICAgICBzZXRTaGlmdEhlbGQoZmFsc2UpOyB9XG4gICAgZnVuY3Rpb24gb25Gb2N1c091dChlKSB7IHNldFNoaWZ0SGVsZChmYWxzZSk7IH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0Ym94LW11bHRpLmpzLm1hcCIsImltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQsIHVzZUNoaWxkRmxhZywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlR2VuZXJpY0xhYmVsIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hTaW5nbGUoeyBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgc2VsZWN0aW9uTW9kZSwgLi4uYXJncyB9KSB7XG4gICAgY29uc3QgW2FueUl0ZW1zRm9jdXNlZCwgc2V0QW55SXRlbXNGb2N1c2VkLCBnZXRBbnlJdGVtc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBnZXRJbnB1dEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtbGlzdGJveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1saXN0Ym94LVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldFRhYmJhYmxlSW5kZXgsIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRBbnlJdGVtc0ZvY3VzZWQgfSk7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xuICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2sob25TZWxlY3QgPz8gKCgpID0+IHsgfSkpO1xuICAgIC8vIFRyYWNrIHdoZXRoZXIgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgbGlzdCBib3ggcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gV2hlbiBpdCdzIG5vdCwgd2UgcmVzZXQgdGhlIHRhYmJhYmxlIGluZGV4IGJhY2sgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50LlxuICAgIGNvbnN0IHsgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHsgb25BY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoYWN0aXZlRWxlbWVudCkgPT4gc2V0QW55SXRlbXNGb2N1c2VkKCEhKGdldElucHV0RWxlbWVudCgpPy5jb250YWlucyhhY3RpdmVFbGVtZW50KSkpLCBbXSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhbnlJdGVtc0ZvY3VzZWQpXG4gICAgICAgICAgICBzZXRUYWJiYWJsZUluZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgIH0sIFthbnlJdGVtc0ZvY3VzZWQsIHNlbGVjdGVkSW5kZXgsIHNldFRhYmJhYmxlSW5kZXhdKTtcbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZENoaWxkcmVuW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IChtYW5hZ2VkQ2hpbGRyZW5baV0/LmdldFNlbGVjdGVkKCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoc2VsZWN0ZWRJbmRleCk7XG4gICAgfSwgW3NlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCB1c2VMaXN0Ym94U2luZ2xlSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkLCAuLi5pbmZvIH0pO1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5mby5pbmRleDtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlID09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlLCBzZWxlY3Rpb25Nb2RlLCBpbmRleF0pO1xuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzLCB0YWJiYWJsZSwgc2VsZWN0ZWQsIGdldFNlbGVjdGVkIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVJdGVtUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LCB1bmRlZmluZWQpKHt9KTtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm9wdGlvblwiO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNldHNpemVcIl0gPSAoY2hpbGRDb3VudCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9IChzZWxlY3RlZCA/PyBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSkpO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHNlbGVjdGlvbk1vZGUsIGNoaWxkQ291bnRdKTtcbiAgICBjb25zdCB1c2VMaXN0Ym94U2luZ2xlTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlTGFiZWwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlTGFiZWxQcm9wcyB9O1xuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xuICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtLCB1c2VMaXN0Ym94U2luZ2xlUHJvcHMsIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCwgdGFiYmFibGVJbmRleCwgZm9jdXM6IGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9O1xuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVQcm9wcyhwcm9wcykge1xuICAgICAgICBwcm9wcy5yb2xlID0gXCJsaXN0Ym94XCI7XG4gICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvblByb3BzKHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHModXNlQWN0aXZlRWxlbWVudFByb3BzKHByb3BzKSkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0Ym94LXNpbmdsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VIYXNGb2N1cywgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUsIHVzZVRpbWVvdXQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZVNvZnREaXNtaXNzIH0gZnJvbSBcIi4vdXNlLW1vZGFsXCI7XG4vKipcbiAqIEEgbWVudSBpcyBhIHBvcHVwIGNvbnRyb2wgdGhhdCBjb250YWlucyBhIGxpc3Qgb2YgbWVudSBpdGVtcywgYW5kIHRoYXQncyBpdC5cbiAqIEl0IGhhcyB2ZXJ5IHdlbGwtZGVmaW5lZCBsb2dpYyBmb3IgbWFuYWdpbmcgdGhvc2UgaXRlbXMgYXMgdGhlIG1lbnUncyBzdGF0ZSBjaGFuZ2VzLlxuICpcbiAqIEEgTWVudUJhc2UgaXMganVzdCB0aGUgXCJwb3B1cFwiIHBhcnQgd2l0aG91dCB0aGUgXCJsaXN0IG9mIG1lbnUgaXRlbXNcIiBwYXJ0LiBJdCBjYW5cbiAqIChyZWFsbHksIG11c3QpIGhhdmUgaW50ZXJhY3RpdmUgY29udHJvbHMsIGJ1dCB0aGVzZSBjb250cm9scyBhcmUgYWxsb3dlZCB0byBiZSBtb3JlXG4gKiBmcmVlLWZvcm0uIFRoaXMgbWVhbnMgdGhhdCwgbGlrZSBhIGRpYWxvZywgeW91IG11c3QgdGVsbCB0aGlzIGhvb2tcbiAqIHdoZXJlIHdpdGhpbiB0aGUgcG9wdXAgdG8gc2VuZCBmb2N1cyB3aGVuIG9wZW5lZCAoZm9yIGEgbWVudSBpdCdzIGp1c3QgdGhlIGZpcnN0XG4gKiBtZW51IGl0ZW0sIGJ1dCB3aXRoIGN1c3RvbSBjb250ZW50IHlvdSdsbCBuZWVkIHRvIHByb3ZpZGUgdGhpcykuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVudUJhc2UoeyBzZW5kRm9jdXNXaXRoaW5NZW51LCAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCBnZXRTZW5kRm9jdXNXaXRoaW5NZW51ID0gdXNlU3RhYmxlR2V0dGVyKHNlbmRGb2N1c1dpdGhpbk1lbnUpO1xuICAgIGNvbnN0IFtmb2N1c1RyYXBBY3RpdmUsIHNldEZvY3VzVHJhcEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBsZXQgb25DbG9zZSA9IGFyZ3Mub25DbG9zZTtcbiAgICBsZXQgb25PcGVuID0gYXJncy5vbk9wZW47XG4gICAgbGV0IG1lbnViYXIgPSBhcmdzLm1lbnViYXI7XG4gICAgbGV0IG9wZW4gPSAobWVudWJhciA/IHRydWUgOiBhcmdzLm9wZW4pO1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlID8/ICgoKSA9PiB7IH0pKTtcbiAgICBjb25zdCBnZXRPcGVuID0gdXNlU3RhYmxlR2V0dGVyKG9wZW4pO1xuICAgIC8vIFRPRE86IEl0J3MgYXdrd2FyZCB0aGF0IHRoZSBidXR0b24gZm9jdXMgcHJvcHMgYXJlIG91dCBoZXJlIHdoZXJlIHdlIGRvbid0IGhhdmUgaXRzIHR5cGUsXG4gICAgLy8gYnV0IGZvY3VzIG1hbmFnZW1lbnQgaXMgc3VwZXIgc2Vuc2l0aXZlLCBhbmQgZXZlbiB3YWl0aW5nIGZvciBhIHVzZUxheW91dEVmZmVjdCB0byBzeW5jIHN0YXRlIGhlcmVcbiAgICAvLyB3b3VsZCBiZSB0b28gbGF0ZSwgc28gaXQgd291bGQgbG9vayBsaWtlIHRoZXJlJ3MgYSBtb21lbnQgYmV0d2VlbiBtZW51IGZvY3VzIGxvc3QgYW5kIGJ1dHRvbiBmb2N1cyBnYWluZWRcbiAgICAvLyB3aGVyZSBub3RoaW5nIGlzIGZvY3VzZWQuIFxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzLCBnZXRMYXN0Rm9jdXNlZElubmVyOiBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHsgLypvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkOiBvbk1lbnVPckJ1dHRvbkxvc3RMYXN0Rm9jdXMqL30pO1xuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlQnV0dG9uSGFzRm9jdXNQcm9wcywgZ2V0TGFzdEZvY3VzZWRJbm5lcjogZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7IC8qb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZDogb25NZW51T3JCdXR0b25Mb3N0TGFzdEZvY3VzKi99KTtcbiAgICBjb25zdCBbb3BlbmVyRWxlbWVudCwgc2V0T3BlbmVyRWxlbWVudCwgZ2V0T3BlbmVyRWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1lbnVCYXNlSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1lbnVCYXNlSWRSZWZlcmVuY2luZ1Byb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1lbnUtXCIgfSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRCdXR0b25FbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUJ1dHRvblJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0T3BlbmVyRWxlbWVudCB9KTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldE1lbnVFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZU1lbnVCYXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICBjb25zdCB7IHVzZVNvZnREaXNtaXNzUHJvcHMgfSA9IHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZTogc3RhYmxlT25DbG9zZSwgZ2V0RWxlbWVudHM6ICgpID0+IChbZ2V0QnV0dG9uRWxlbWVudCgpLCBnZXRNZW51RWxlbWVudCgpXSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Rm9jdXNUcmFwQWN0aXZlKG9wZW4pO1xuICAgIH0sIFtvcGVuXSk7XG4gICAgLy8gQSBtZW51IHNlbnRpbmFsIGlzIGEgaGlkZGVuIGJ1dCBmb2N1c2FibGUgZWxlbWVudCB0aGF0IGNvbWVzIGF0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGVsZW1lbnRcbiAgICAvLyB0aGF0LCB3aGVuIGFjdGl2YXRlZCBvciBmb2N1c2VkIG92ZXIsIGNsb3NlcyB0aGUgbWVudS5cbiAgICAvLyAoaWYgZm9jdXNlZCB3aXRoaW4gMTAwbXMgb2YgdGhlIG9wZW4gcHJvcCBjaGFuZ2luZywgaW5zdGVhZCBvZlxuICAgIC8vIGNsb3NpbmcgdGhlIG1lbnUsIGZvY3VzaW5nIHRoZSBzZW50aW5lbCBpbW1lZGlhdGVseSBhc2tzIHRoZSBtZW51IHRvIGZvY3VzIGl0c2VsZikuXG4gICAgLy8gVGhpcyBleGlzdHMgYmVjYXVzZSB3aGlsZSBtb3VzZSB1c2VycyBjYW4gY2xpY2sgb3V0IG9mIGEgbWVudVxuICAgIC8vIGFuZCBrZXlib2FyZCB1c2VycyBjYW4gZXNjYXBlIHRvIGNsb3NlIHRoZSBtZW51LFxuICAgIC8vIHNjcmVlbiByZWFkZXJzIGFuZCBvdGhlciBpbnB1dCBtZXRob2RzIHRoYXQgZG9uJ3QgdXNlIHRob3NlIHR3byBiZWNvbWUgc3R1Y2suXG4gICAgY29uc3QgdXNlTWVudVNlbnRpbmVsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBbZmlyc3RTZW50aW5lbElzQWN0aXZlLCBzZXRGaXJzdFNlbnRpbmVsSXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICB1c2VUaW1lb3V0KHsgY2FsbGJhY2s6ICgpID0+IHsgc2V0Rmlyc3RTZW50aW5lbElzQWN0aXZlKG9wZW4pOyB9LCB0aW1lb3V0OiAxMDAsIHRyaWdnZXJJbmRleDogYCR7b3Blbn0tJHtmaXJzdFNlbnRpbmVsSXNBY3RpdmV9YCB9KTtcbiAgICAgICAgY29uc3Qgb25Gb2N1cyA9IGZpcnN0U2VudGluZWxJc0FjdGl2ZSA/ICgoKSA9PiBzdGFibGVPbkNsb3NlKCkpIDogKCgpID0+IGdldFNlbmRGb2N1c1dpdGhpbk1lbnUoKT8uKCkpO1xuICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4gc3RhYmxlT25DbG9zZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlTWVudVNlbnRpbmVsUHJvcHM6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvbkZvY3VzLCBvbkNsaWNrIH0sIHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtvcGVuXSk7XG4gICAgY29uc3QgdXNlTWVudUJhc2VQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIgJiYgZ2V0T3BlbigpKSB7XG4gICAgICAgICAgICAgICAgc3RhYmxlT25DbG9zZSgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZVNvZnREaXNtaXNzUHJvcHModXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzKHVzZU1lbnVCYXNlUmVmRWxlbWVudFByb3BzKHVzZU1lbnVCYXNlSWRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIChwcm9wcykpKSkpKTtcbiAgICB9LCBbdXNlU29mdERpc21pc3NQcm9wcywgdXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzLCB1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcywgdXNlTWVudUJhc2VJZFByb3BzXSk7XG4gICAgY29uc3QgdXNlTWVudUJhc2VCdXR0b25Qcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzKHVzZUJ1dHRvbkhhc0ZvY3VzUHJvcHModXNlTWVudUJhc2VJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHByb3BzKSkpO1xuICAgIH0sIFt1c2VCdXR0b25IYXNGb2N1c1Byb3BzLCB1c2VCdXR0b25SZWZFbGVtZW50UHJvcHMsIHVzZU1lbnVCYXNlSWRSZWZlcmVuY2luZ1Byb3BzXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VuZEZvY3VzV2l0aGluTWVudSA9IGdldFNlbmRGb2N1c1dpdGhpbk1lbnUoKTtcbiAgICAgICAgaWYgKGZvY3VzVHJhcEFjdGl2ZSkge1xuICAgICAgICAgICAgc2VuZEZvY3VzV2l0aGluTWVudT8uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9jdXNUcmFwQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lcigpKVxuICAgICAgICAgICAgICAgIGdldE9wZW5lckVsZW1lbnQoKT8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbnVsbCwgc28gd2UndmUgb25seSBqdXN0IG1vdW50ZWQgYW5kIHNob3VsZG4ndCBmb2N1cyBvdXJzZWx2ZXMuXG4gICAgICAgIH1cbiAgICB9LCBbZm9jdXNUcmFwQWN0aXZlXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTWVudVNlbnRpbmVsLFxuICAgICAgICBmb2N1c1RyYXBBY3RpdmUsXG4gICAgICAgIHVzZU1lbnVCYXNlUHJvcHMsXG4gICAgICAgIHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMsXG4gICAgICAgIGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lcixcbiAgICAgICAgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyLFxuICAgICAgICBvcGVuLFxuICAgICAgICBvbk9wZW4sXG4gICAgICAgIG9uQ2xvc2VcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFNZW51KHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIG5vVHlwZWFoZWFkLCBub1dyYXAsIHR5cGVhaGVhZFRpbWVvdXQsIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQ6IGZvY3VzTWVudSwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgbm9UeXBlYWhlYWQsIG5vV3JhcCwgdHlwZWFoZWFkVGltZW91dCwgc2hvdWxkRm9jdXNPbkNoYW5nZTogdXNlQ2FsbGJhY2soKCkgPT4gZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyKCkgfHwgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyKCksIFtdKSB9KTtcbiAgICBjb25zdCB7IHVzZU1lbnVTZW50aW5lbCwgZm9jdXNUcmFwQWN0aXZlLCB1c2VNZW51QmFzZUJ1dHRvblByb3BzLCB1c2VNZW51QmFzZVByb3BzLCBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIsIGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lciwgb3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VNZW51QmFzZSh7IC4uLmFyZ3MsIHNlbmRGb2N1c1dpdGhpbk1lbnU6IGZvY3VzTWVudSA/PyAoKCkgPT4geyB9KSB9KTtcbiAgICBjb25zdCB1c2VNZW51QnV0dG9uID0gdXNlQ2FsbGJhY2soKHt9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VNZW51QnV0dG9uUHJvcHM6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlTWVudUJhc2VCdXR0b25Qcm9wcyhwKTtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtaGFzcG9wdXBcIl0gPSBcIm1lbnVcIjtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZXhwYW5kZWRcIl0gPSBvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtvcGVuLCBvbkNsb3NlLCBvbk9wZW4sIHVzZU1lbnVCYXNlQnV0dG9uUHJvcHNdKTtcbiAgICAvKmNvbnN0IHVzZU1lbnVTdWJtZW51SXRlbSA9IHVzZUNhbGxiYWNrKChhcmdzOiBVc2VNZW51U3VibWVudUl0ZW1QYXJhbWV0ZXJzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTWVudVByb3BzLCB1c2VNZW51QnV0dG9uIH0gPSB1c2VBcmlhTWVudTxIVE1MRWxlbWVudCwgQ2hpbGRFbGVtZW50LCBJPihhcmdzKTtcbiAgICAgICAgY29uc3QgeyB1c2VNZW51QnV0dG9uUHJvcHMgfSA9IHVzZU1lbnVCdXR0b248RT4oeyB0YWc6IFwibGlcIiBhcyBhbnkgfSk7XG5cbiAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQ8YW55Pih7IG9uRWxlbWVudENoYW5nZTogc2V0T3BlbmVyRWxlbWVudCBhcyBPblBhc3NpdmVTdGF0ZUNoYW5nZTxhbnk+IH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICAgICAgdXNlTWVudVByb3BzLFxuICAgICAgICAgICAgdXNlTWVudVN1Ym1lbnVJdGVtUHJvcHM6IGZ1bmN0aW9uIDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHsgLi4ucHJvcHMgfTogUCkge1xuICAgICAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZW51QnV0dG9uUHJvcHModXNlTWVudUlkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtY29udHJvbHNcIikocHJvcHMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSk7Ki9cbiAgICBjb25zdCB1c2VNZW51SXRlbSA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKGFyZ3MpO1xuICAgICAgICBmdW5jdGlvbiB1c2VNZW51SXRlbVByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1cIjtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMocHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VNZW51SXRlbVByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIGZ1bmN0aW9uIHVzZU1lbnVQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudVwiO1xuICAgICAgICByZXR1cm4gdXNlTWVudUJhc2VQcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1lbnVQcm9wcyxcbiAgICAgICAgdXNlTWVudUJ1dHRvbixcbiAgICAgICAgdXNlTWVudUl0ZW0sXG4gICAgICAgIHVzZU1lbnVTZW50aW5lbCxcbiAgICAgICAgLy91c2VNZW51U3VibWVudUl0ZW0sXG4gICAgICAgIGZvY3VzTWVudSxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVudS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFUYWJzKHsgc2VsZWN0aW9uTW9kZSwgc2VsZWN0ZWRJbmRleCwgb25TZWxlY3QsIG9yaWVudGF0aW9uOiBsb2dpY2FsT3JpZW50YXRpb24sIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHMsIGdldEZvY3VzZWRJbm5lcjogZ2V0VGFiTGlzdEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoe30pO1xuICAgIGNvbnN0IFtwaHlzaWNhbE9yaWVudGF0aW9uLCBzZXRQaHlzaWNhbE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb25zdCB7IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uLCB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMgfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oeyBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2U6IHVzZUNhbGxiYWNrKChsb2dpY2FsRGlyZWN0aW9uSW5mbykgPT4gc2V0UGh5c2ljYWxPcmllbnRhdGlvbihjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uKGxvZ2ljYWxPcmllbnRhdGlvbiwgbG9naWNhbERpcmVjdGlvbkluZm8pKSwgW10pIH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGlzdElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGlzdElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1saXN0LVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGFiZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLWxhYmVsLVwiIH0pO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkVGFicywgbmF2aWdhdGVUb0luZGV4LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBpbnZhbGlkVHlwZWFoZWFkLCBjdXJyZW50VHlwZWFoZWFkLCBmb2N1c0N1cnJlbnQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0VGFiTGlzdEZvY3VzZWRJbm5lciwga2V5TmF2aWdhdGlvbjogbG9naWNhbE9yaWVudGF0aW9uIH0pO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUGFuZWxzLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRUYWJQYW5lbCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhvblNlbGVjdCk7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRUYWJzLmxlbmd0aDtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkVGFicylcbiAgICAgICAgICAgIGNoaWxkLnNldFNlbGVjdGlvbk1vZGUoc2VsZWN0aW9uTW9kZSk7XG4gICAgfSwgW3NlbGVjdGlvbk1vZGVdKTtcbiAgICB1c2VDaGlsZEZsYWcoeyBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkVGFicywgc2V0Q2hpbGRGbGFnOiAoaSwgc2VsZWN0ZWQpID0+IG1hbmFnZWRUYWJzW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksIGdldENoaWxkRmxhZzogaSA9PiAobWFuYWdlZFRhYnNbaV0/LmdldFNlbGVjdGVkKCkpIH0pO1xuICAgIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRQYW5lbHMsIHNldENoaWxkRmxhZzogKGksIHZpc2libGUpID0+IG1hbmFnZWRQYW5lbHNbaV0/LnNldFZpc2libGUodmlzaWJsZSksIGdldENoaWxkRmxhZzogaSA9PiAobWFuYWdlZFBhbmVsc1tpXT8uZ2V0VmlzaWJsZSgpKSB9KTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKHByZXYpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiBzZWxlY3Rpb25Nb2RlID09IFwiYWN0aXZhdGVcIikge1xuICAgICAgICAgICAgLy8gVE9ETzogV2UgbmVlZCB0byB3YWl0IGEgbW9tZW50IHNvIHRoYXQgdGhlIHRhYiBwYW5lbCB3ZSB3YW50IHRvIGZvY3VzXG4gICAgICAgICAgICAvLyBpcyBhY3R1YWxseSB2aXNpYmxlIChpLmUuIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGNoaWxkIHRvIHJlLXJlbmRlciBpdHNlbGYpLlxuICAgICAgICAgICAgLy8gV2UgY291bGQsIGFsdGVybmF0aXZlbHksIHNpZ25hbCB0byB0aGUgY2hpbGQgdGhhdCBpdCBzaG91bGQgZm9jdXMgaXRzZWxmXG4gICAgICAgICAgICAvLyB0aGUgbmV4dCB0aW1lIGl0IHJlbmRlcnMgaXRzZWxmIGFzIHZpc2libGUsXG4gICAgICAgICAgICAvLyB3aGljaCBtaWdodCBiZSBiZXR0ZXI/XG4gICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFuYWdlZFBhbmVsc1tzZWxlY3RlZEluZGV4XT8uZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW2NoaWxkQ291bnQsIHNlbGVjdGVkSW5kZXgsIHNlbGVjdGlvbk1vZGVdKTtcbiAgICBjb25zdCB1c2VUYWIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWIoaW5mbykge1xuICAgICAgICBjb25zdCBbc2VsZWN0aW9uTW9kZUwsIHNldFNlbGVjdGlvbk1vZGVMXSA9IHVzZVN0YXRlKHNlbGVjdGlvbk1vZGUpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IFt0YWJQYW5lbElkLCBzZXRUYWJQYW5lbElkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiSWRQcm9wcywgaWQ6IHRhYklkLCBnZXRJZDogZ2V0VGFiSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLVwiIH0pO1xuICAgICAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZCwgdGFiSWQsIHNldFRhYlBhbmVsSWQsIHNldFNlbGVjdGlvbk1vZGU6IHNldFNlbGVjdGlvbk1vZGVMLCAuLi5pbmZvIH0pO1xuICAgICAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmZvLmluZGV4KTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAodGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZUwgPT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3QoeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogZ2V0SW5kZXgoKSB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGUsIHNlbGVjdGlvbk1vZGVdKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFBhbmVsc1tpbmZvLmluZGV4XT8uc2V0VGFiSWQodGFiSWQpOyB9LCBbdGFiSWQsIGluZm8uaW5kZXhdKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBvblNlbGVjdD8uKGVuaGFuY2VFdmVudChlLCB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSkpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCkocHJvcHMpO1xuICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IFwidGFiXCI7XG4gICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAoc2VsZWN0ZWQgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtY29udHJvbHNcIl0gPSB0YWJQYW5lbElkO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVRhYklkUHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhuZXdQcm9wcykpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiUHJvcHMsIHNlbGVjdGVkIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZVRhYlBhbmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUGFuZWwoaW5mbykge1xuICAgICAgICAvL2NvbnN0IFtzaG91bGRGb2N1cywgc2V0U2hvdWxkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBbdGFiSWQsIHNldFRhYklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlLCBnZXRWaXNpYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVBhbmVsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRQYW5lbElkLCBpZDogdGFiUGFuZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItcGFuZWwtXCIgfSk7XG4gICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZU1hbmFnZWRUYWJQYW5lbCh7IC4uLmluZm8sIHRhYlBhbmVsSWQsIHNldFRhYklkLCBmb2N1cywgc2V0VmlzaWJsZTogc2V0VmlzaWJsZSwgZ2V0VmlzaWJsZTogZ2V0VmlzaWJsZSB9KTtcbiAgICAgICAgZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0VGFiTGlzdEZvY3VzZWRJbm5lcigpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudD8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IG1hbmFnZWRUYWJzW2luZm8uaW5kZXhdPy5zZXRUYWJQYW5lbElkKHRhYlBhbmVsSWQpOyB9LCBbdGFiUGFuZWxJZCwgaW5mby5pbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VUYWJQYW5lbFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWxhYmVsbGVkYnlcIl0gPSBtYW5hZ2VkVGFic1tpbmZvLmluZGV4XT8udGFiSWQ7XG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJ0YWJwYW5lbFwiO1xuICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPz89IC0xOyAvLyBNYWtlIHN1cmUgdGhlIHRhYiBwYW5lbCBpcyB0YWJiYWJsZS5cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VQYW5lbElkUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiUGFuZWxQcm9wcywgdmlzaWJsZSB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VUYWJzTGlzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYkxpc3QoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYkxpc3RQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYmxpc3RcIjtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1vcmllbnRhdGlvblwiXSA9IHBoeXNpY2FsT3JpZW50YXRpb247XG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHModXNlTG9naWNhbERpcmVjdGlvblByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRhYkxpc3RQcm9wcyB9O1xuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvblByb3BzLCBwaHlzaWNhbE9yaWVudGF0aW9uXSk7XG4gICAgY29uc3QgdXNlVGFic0xhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFic0xhYmVsKCkge1xuICAgICAgICBmdW5jdGlvbiB1c2VUYWJzTGFiZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VUYWJMYWJlbElkUHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRhYnNMYWJlbFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7IHVzZVRhYiwgdXNlVGFiUGFuZWwsIHVzZVRhYnNMaXN0LCB1c2VUYWJzTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGZvY3VzVGFiTGlzdDogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGFicy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VIYXNGb2N1cywgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VTdGF0ZSwgdXNlVGltZW91dCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFUb29sdGlwKHsgbW91c2VvdmVyRGVsYXksIG1vdXNlb3V0RGVsYXkgfSkge1xuICAgIG1vdXNlb3ZlckRlbGF5ID8/PSA0MDA7XG4gICAgbW91c2VvdXREZWxheSA/Pz0gNDA7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW4sIGdldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIC8vIFVzZWQgdG8ga2VlcCB0cmFjayBvZiBpZiB3ZSdyZSBob3Zpbmcgb3ZlciB0aGUgdHJpZ2dlciB3aGVuIGNvcnJlY3RpbmcgZm9yIHRoZSBnaXZlbiBkZWxheXMuXG4gICAgY29uc3QgW2hhc0RlbGF5Q29ycmVjdGVkTW91c2VvdmVyLCBzZXRIYXNEZWxheUNvcnJlY3RlZE1vdXNlb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUb29sdGlwSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVRvb2x0aXBJZFJlZmVyZW5jaW5nUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdG9vbHRpcC1cIiB9KTtcbiAgICBjb25zdCBbdHJpZ2dlckZvY3VzZWRJbm5lciwgc2V0VHJpZ2dlckZvY3VzZWRJbm5lciwgZ2V0VHJpZ2dlckZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3RyaWdnZXJIYXNNb3VzZW92ZXIsIHNldFRyaWdnZXJIYXNNb3VzZW92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0b29sdGlwSGFzTW91c2VvdmVyLCBzZXRUb29sdGlwSGFzTW91c2VvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdG9vbHRpcEhhc0ZvY3VzLCBzZXRUb29sdGlwSGFzRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRyaWdnZXJJbmRleCA9ICEhKCt0cmlnZ2VySGFzTW91c2VvdmVyICsgK3Rvb2x0aXBIYXNNb3VzZW92ZXIgKyArdG9vbHRpcEhhc0ZvY3VzKTtcbiAgICBjb25zdCB0b29sdGlwU2hvdWxkQmVTaG93biA9ICh0cmlnZ2VySGFzTW91c2VvdmVyIHx8IHRvb2x0aXBIYXNNb3VzZW92ZXIgfHwgdG9vbHRpcEhhc0ZvY3VzKTtcbiAgICAvLyBBY3RpdmF0ZSBvbiB0aGUgdXN1YWwgZGVsYXkgZm9yIG1vdXNlb3ZlclxuICAgIHVzZVRpbWVvdXQoe1xuICAgICAgICB0aW1lb3V0OiBtb3VzZW92ZXJEZWxheSxcbiAgICAgICAgdHJpZ2dlckluZGV4LFxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgc2V0SGFzRGVsYXlDb3JyZWN0ZWRNb3VzZW92ZXIodG9vbHRpcFNob3VsZEJlU2hvd24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gRm9yY2libHkgZGVhY3RpdmF0ZSBhbG1vc3QgaW1tZWRpYXRlbHkgb24gbW91c2VvdXRcbiAgICB1c2VUaW1lb3V0KHtcbiAgICAgICAgdGltZW91dDogbW91c2VvdXREZWxheSxcbiAgICAgICAgdHJpZ2dlckluZGV4LFxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0b29sdGlwU2hvdWxkQmVTaG93bilcbiAgICAgICAgICAgICAgICBzZXRIYXNEZWxheUNvcnJlY3RlZE1vdXNlb3Zlcih0b29sdGlwU2hvdWxkQmVTaG93bik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgKGRlbGF5LWNvcnJlY3RlZCkgbW91c2VvdmVyIG9yIHdlJ3JlIGZvY3VzZWQsXG4gICAgLy8gc2hvdyB0aGUgdG9vbHRpcC5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRPcGVuKGhhc0RlbGF5Q29ycmVjdGVkTW91c2VvdmVyIHx8IHRyaWdnZXJGb2N1c2VkSW5uZXIpO1xuICAgIH0sIFtoYXNEZWxheUNvcnJlY3RlZE1vdXNlb3ZlciwgdHJpZ2dlckZvY3VzZWRJbm5lcl0pO1xuICAgIGNvbnN0IHVzZVRvb2x0aXBUcmlnZ2VyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVG9vbHRpcFRyaWdnZXIoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckVudGVyKGUpIHtcbiAgICAgICAgICAgIHNldFRyaWdnZXJIYXNNb3VzZW92ZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyTGVhdmUoZSkge1xuICAgICAgICAgICAgc2V0VHJpZ2dlckhhc01vdXNlb3ZlcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRJbm5lckNoYW5nZWQ6IHNldFRyaWdnZXJGb2N1c2VkSW5uZXIgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRvb2x0aXBUcmlnZ2VyUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBUaG91Z2ggaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgZm9jdXNpbmcgYWN0aXZhdGVzIGEgdG9vbHRpcCxcbiAgICAgICAgICAgIC8vIGl0J3MgcGVyZmVjdGx5IHJlYXNvbmFibGUgdGhhdCBhIGNoaWxkIGVsZW1lbnQgd2lsbCBiZSB0aGUgb25lIHRoYXQncyBmb2N1c2VkLFxuICAgICAgICAgICAgLy8gbm90IHRoaXMgb25lLCBzbyB3ZSBkb24ndCBzZXQgdGFiSW5kZXg9MFxuICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPz89IC0xO1xuICAgICAgICAgICAgcmV0dXJuIHVzZVRvb2x0aXBJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpKHVzZUhhc0ZvY3VzUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlckVudGVyLCBvblBvaW50ZXJMZWF2ZSwgb25Ub3VjaEVuZCB9LCBwcm9wcykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUb29sdGlwVHJpZ2dlclByb3BzIH07XG4gICAgfSwgW3VzZVRvb2x0aXBJZFJlZmVyZW5jaW5nUHJvcHNdKTtcbiAgICBjb25zdCB1c2VUb29sdGlwID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVG9vbHRpcCgpIHtcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRW50ZXIoZSkge1xuICAgICAgICAgICAgc2V0VG9vbHRpcEhhc01vdXNlb3Zlcih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJMZWF2ZShlKSB7XG4gICAgICAgICAgICBzZXRUb29sdGlwSGFzTW91c2VvdmVyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1c2VUb29sdGlwUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzKHsgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkOiBzZXRUb29sdGlwSGFzRm9jdXMgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUHJvcHModXNlSGFzRm9jdXNQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyRW50ZXIsIG9uUG9pbnRlckxlYXZlIH0sIHByb3BzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRvb2x0aXBQcm9wcyB9O1xuICAgIH0sIFt1c2VUb29sdGlwSWRQcm9wc10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVRvb2x0aXAsXG4gICAgICAgIHVzZVRvb2x0aXBUcmlnZ2VyLFxuICAgICAgICBpc09wZW46IG9wZW4sXG4gICAgICAgIGdldElzT3BlbjogZ2V0T3BlblxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdG9vbHRpcC5qcy5tYXAiLG51bGwsbnVsbCxudWxsLG51bGxdLCJuYW1lcyI6WyJFTVBUWV9PQkoiLCJFTVBUWV9BUlIiLCJJU19OT05fRElNRU5TSU9OQUwiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50Q29tcG9uZW50IiwicHJldlJhZiIsImN1cnJlbnRIb29rIiwiYWZ0ZXJQYWludEVmZmVjdHMiLCJvbGRCZWZvcmVEaWZmIiwib3B0aW9ucyIsIm9sZEJlZm9yZVJlbmRlciIsIm9sZEFmdGVyRGlmZiIsImRpZmZlZCIsIm9sZENvbW1pdCIsIm9sZEJlZm9yZVVubW91bnQiLCJ1bm1vdW50IiwiZ2V0SG9va1N0YXRlIiwiaW5kZXgiLCJ0eXBlIiwiaG9va3MiLCJsZW5ndGgiLCJwdXNoIiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiaW52b2tlT3JSZXR1cm4iLCJyZWR1Y2VyIiwiaW5pdCIsImhvb2tTdGF0ZSIsIl9yZWR1Y2VyIiwidW5kZWZpbmVkIiwibmV4dFZhbHVlIiwiYWN0aW9uIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJjYWxsYmFjayIsImFyZ3MiLCJzdGF0ZSIsImFyZ3NDaGFuZ2VkIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlTWVtbyIsImN1cnJlbnQiLCJmYWN0b3J5IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsInByb3ZpZGVyIiwic3ViIiwicHJvcHMiLCJ2YWx1ZSIsImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCJmb3JFYWNoIiwiY29tcG9uZW50IiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsImUiLCJ2bm9kZSIsImMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsIkhBU19SQUYiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJjb21taXRRdWV1ZSIsInNvbWUiLCJmaWx0ZXIiLCJjYiIsImhvb2siLCJjb21wIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwiVW5zZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0b1ZhbCIsIm1peCIsImsiLCJ5Iiwic3RyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsInRtcCIsIngiLCJhcmd1bWVudHMiLCJyZXR1cm5OdWxsIiwiTSIsInVzZVN0YXRlUCIsInVzZUVmZmVjdE5hdGl2ZSIsInVzZUxheW91dEVmZmVjdE5hdGl2ZSIsImNhbmRpZGF0ZVNlbGVjdG9ycyIsIm1hdGNoZXMiLCJFbGVtZW50IiwiaXNJbnB1dCIsIm5vZGUiLCJpc0hpZGRlbklucHV0IiwiaXNEZXRhaWxzV2l0aFN1bW1hcnkiLCJyIiwiY2hpbGQiLCJpc0hpZGRlbiIsImdldENvbXB1dGVkU3R5bGUiLCJpc0RpcmVjdFN1bW1hcnkiLCJub2RlVW5kZXJEZXRhaWxzIiwiZGlzcGxheUNoZWNrIiwid2lkdGgiLCJoZWlnaHQiLCJpc0Rpc2FibGVkRnJvbUZpZWxkc2V0IiwicGFyZW50Tm9kZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciIsImlzRm9jdXNhYmxlIiwiZ2xvYmFsIiwidGhpcyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiVHlwZUVycm9yIiwid2luZG93Iiwic2xpY2UiLCJtc01hdGNoZXNTZWxlY3RvciIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsImpvaW4iLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiU2V0IiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIl9vbk11dGF0aW9uIiwiYmluZCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImRlc3RydWN0b3IiLCJkaXNjb25uZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiaW5lcnROb2RlIiwiX3VubWFuYWdlTm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYm9keSIsImNvbnRhaW5zIiwicm9vdCIsIm5vZGVUeXBlIiwiTm9kZSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJibHVyIiwiZm9jdXMiLCJFTEVNRU5UX05PREUiLCJlbGVtZW50IiwiX2Fkb3B0SW5lcnRSb290IiwiY2FsbCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJhZGQiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwic2VsZiIsInJlY29yZCIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJhdHRyaWJ1dGVOYW1lIiwibWFuYWdlZE5vZGUiLCJnZXQiLCJzZXQiLCJhcmlhSGlkZGVuIiwiSW5lcnROb2RlIiwiaW5lcnRSb290IiwiX25vZGUiLCJfb3ZlcnJvZGVGb2N1c01ldGhvZCIsIl9pbmVydFJvb3RzIiwiX3NhdmVkVGFiSW5kZXgiLCJfZGVzdHJveWVkIiwiZW5zdXJlVW50YWJiYWJsZSIsIl90aHJvd0lmRGVzdHJveWVkIiwiZGVzdHJveWVkIiwiRXJyb3IiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJzaXplIiwiSW5lcnRNYW5hZ2VyIiwiX2RvY3VtZW50IiwiTWFwIiwiX3dhdGNoRm9ySW5lcnQiLCJhZGRJbmVydFN0eWxlIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJpbmVydCIsImhhcyIsInBhcmVudCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsInNoYWRvd1Jvb3RBbmNlc3RvciIsInNoYWRvd1Jvb3QiLCJsb2NhbE5hbWUiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIl9pIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImhhc093blByb3BlcnR5IiwiYXNzaWduIiwib2JqIiwic2hhbGxvd0RpZmZlcnMiLCJhIiwiYiIsImgiLCJSYW5kb21Xb3JkcyIsImNyZWF0ZUNvbnRleHQiLCJtZW1vIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7U0FBTztJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLElBQU1BLEdBQUFB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
