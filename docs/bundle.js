(function () {
    'use strict';

    var n,
        l$1,
        u$1,
        t$1,
        r$1,
        o$2,
        f$1,
        e$2 = {},
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
      (!n.__d && (n.__d = !0) && t$1.push(n) && !g$2.__r++ || o$2 !== l$1.debounceRendering) && ((o$2 = l$1.debounceRendering) || r$1)(g$2);
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
        j$2(n, _, p = p || e$2, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x$1(_, s, n) : s = P$1(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k$1(p));
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
        if (o = o && n.call(l.childNodes), a = (y = i.props || e$2).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
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
      l$1.__ && l$1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j$2(i, u = (!r && t || i).__k = v$1(d, null, [u]), o || e$2, e$2, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z$1(f, u);
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

    var o$1 = 0;

    function e$1(_, e, n, t, f) {
      var l,
          s,
          u = {};

      for (s in e) "ref" == s ? l = e[s] : u[s] = e[s];

      var a = {
        type: _,
        props: u,
        key: n,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --o$1,
        __source: t,
        __self: f
      };
      if ("function" == typeof _ && (l = _.defaultProps)) for (s in l) void 0 === u[s] && (u[s] = l[s]);
      return l$1.vnode && l$1.vnode(a), a;
    }

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

    function returnFalse$1() {
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
      const [getFocused, setFocused] = usePassiveState(onFocusedChanged, returnFalse$1);
      const [getFocusedInner, setFocusedInner] = usePassiveState(onFocusedInnerChanged, returnFalse$1);
      const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse$1);
      const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse$1);
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

      const onMouseLeave = excludes("click", exclude) ? undefined : onBlur;
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
        onMouseLeave,
        onClick,
        style: textSelectedDuringActivation ? {
          cursor: "text"
        } : undefined,
        ...{
          "data-pseudo-active": active && !textSelectedDuringActivation ? "true" : undefined
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
          const newProps = usePressEventHandlers(info.disabled ? null : e => {
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
          if (info.disabled) props["aria-disabled"] = "true";
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
          const newProps = usePressEventHandlers(info.disabled ? null : e => {
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
          if (info.disabled) props["aria-disabled"] = "true";
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
        useMenuSentinel: F(() => {
          const {
            useSentinelProps: useMenuSentinelProps,
            ...rest
          } = useFocusSentinel({
            open,
            onClose: onClose !== null && onClose !== void 0 ? onClose : () => {},
            sendFocusWithinMenu
          });
          return {
            useMenuSentinelProps,
            ...rest
          };
        }, [open, onClose, sendFocusWithinMenu]),
        focusTrapActive,
        useMenuBaseProps,
        useMenuBaseButtonProps,
        getMenuBaseLastFocusedInner,
        getMenuBaseButtonLastFocusedInner,
        open,
        onOpen,
        onClose
      };
    } // A focus sentinal is a hidden but focusable element that comes at the start or end 
    // of the out-of-place-focusable component that, when activated or focused over, closes the component
    // (if focused within 100ms of the open prop changing, instead of
    // closing, focusing the sentinel immediately asks it to focus itself).
    // This exists for things like menus which can have focus but also need a way to return
    // to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
    // to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
    // and keyboard users can escape to close a menu, screen readers and other input methods 
    // that don't use those two would become stuck.

    function useFocusSentinel(_ref2) {
      let {
        open,
        onClose,
        sendFocusWithinMenu
      } = _ref2;
      const getSendFocusWithinMenu = useStableGetter(sendFocusWithinMenu);
      const stableOnClose = useStableCallback(onClose);
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
        useSentinelProps: function (p) {
          return useMergedProps()({
            onFocus,
            onClick
          }, p);
        }
      };
    }
    function useAriaMenu(_ref3) {
      let {
        collator,
        keyNavigation,
        noTypeahead,
        noWrap,
        typeaheadTimeout,
        ...args
      } = _ref3;
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
      const useMenuButton = F(_ref4 => {
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

        function useMenuItemProps(_ref5) {
          let { ...props
          } = _ref5;
          props.role = "menuitem";
          return useMergedProps()({}, useListNavigationChildProps(props));
        }

        return {
          useMenuItemProps
        };
      }, []);

      function useMenuProps(_ref6) {
        let { ...props
        } = _ref6;
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

    function returnFalse() {
      return false;
    }

    function useAriaTooltip(_ref) {
      var _mouseoverDelay, _mouseoutDelay, _focusDelay;

      let {
        mouseoverDelay,
        mouseoutDelay,
        focusDelay
      } = _ref;
      (_mouseoverDelay = mouseoverDelay) !== null && _mouseoverDelay !== void 0 ? _mouseoverDelay : mouseoverDelay = 400;
      (_mouseoutDelay = mouseoutDelay) !== null && _mouseoutDelay !== void 0 ? _mouseoutDelay : mouseoutDelay = 40;
      (_focusDelay = focusDelay) !== null && _focusDelay !== void 0 ? _focusDelay : focusDelay = 1; // The escape key should close tooltips, but do nothing else.
      // (i.e. closing a tooltip in a dialog MUST NOT close the dialog too)
      // TODO: Tooltips are, effectively, always the topmost component,
      // so we can just have them listen to and swallow all "Escape"
      // key presses before anyone else. For a more general popup,
      // or a tooltip in a tooltip (!!) a different solution would be needed.

      useGlobalHandler(document, "keydown", e => {
        if (getOpen() && e.key === "Escape" && !e.defaultPrevented) {
          e.preventDefault();
          e.stopImmediatePropagation();
          setOpen(false);
          setTriggerHoverDelayCorrected(false);
          setTooltipHoverDelayCorrected(false);
          setTriggerFocusedDelayCorrected(false);
          setTooltipFocusedDelayCorrected(false);
        }
      }, {
        capture: true
      });
      const [open, setOpen, getOpen] = useState(false);
      const {
        useRandomIdProps: useTooltipIdProps,
        useReferencedIdProps: useTooltipIdReferencingProps
      } = useRandomId({
        prefix: "aria-tooltip-"
      });
      const [getTriggerFocused, setTriggerFocused] = usePassiveState(useStableCallback(focused => {
        const delay = focused ? focusDelay : 1;

        if (delay != null && isFinite(delay)) {
          let handle = setTimeout(() => setTriggerFocusedDelayCorrected(focused), focused ? focusDelay : 1);
          return () => clearTimeout(handle);
        }
      }), returnFalse);
      const [getTooltipFocused, setTooltipFocused] = usePassiveState(useStableCallback(focused => {
        const delay = focused ? focusDelay : 1;

        if (delay != null && isFinite(delay)) {
          let handle = setTimeout(() => setTooltipFocusedDelayCorrected(focused), delay);
          return () => clearTimeout(handle);
        }
      }), returnFalse);
      usePassiveState(useStableCallback(hovering => {
        const delay = hovering ? mouseoverDelay : mouseoutDelay;

        if (delay != null && isFinite(delay)) {
          let handle = setTimeout(() => setTriggerHoverDelayCorrected(hovering), delay);
          return () => clearTimeout(handle);
        }
      }), returnFalse);
      const [getTooltipHover, setTooltipHover] = usePassiveState(useStableCallback(hovering => {
        const delay = hovering ? mouseoverDelay : mouseoutDelay;

        if (delay != null && isFinite(delay)) {
          let handle = setTimeout(() => setTooltipHoverDelayCorrected(hovering), delay);
          return () => clearTimeout(handle);
        }
      }), returnFalse);
      const [getTriggerFocusedDelayCorrected, setTriggerFocusedDelayCorrected] = useState(false);
      const [getTriggerHoverDelayCorrected, setTriggerHoverDelayCorrected] = useState(false);
      const [getTooltipFocusedDelayCorrected, setTooltipFocusedDelayCorrected] = useState(false);
      const [getTooltipHoverDelayCorrected, setTooltipHoverDelayCorrected] = useState(false);
      y(() => {
        setOpen(getTriggerFocusedDelayCorrected || getTriggerHoverDelayCorrected);
      }, [getTriggerFocusedDelayCorrected || getTriggerHoverDelayCorrected]);
      const useTooltipTrigger = F(function useTooltipTrigger() {
        useGlobalHandler(document, "pointermove", e => {
          let target = e.target;
          setTooltipHover(target == getElement() || target.contains(getElement()));
        }, {
          capture: true
        });

        function onTouchEnd(e) {
          e.target.focus();
        }

        const {
          useHasFocusProps,
          getElement
        } = useHasFocus({
          onFocusedInnerChanged: setTriggerFocused
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
            onTouchEnd
          }, props)));
        }

        return {
          useTooltipTriggerProps
        };
      }, [useTooltipIdReferencingProps]);
      const useTooltip = F(function useTooltip() {
        const {
          useHasFocusProps,
          getElement
        } = useHasFocus({
          onFocusedInnerChanged: setTooltipFocused
        });
        useGlobalHandler(document, "pointermove", e => {
          let target = e.target;
          setTooltipHover(target == getElement() || target.contains(getElement()));
        }, {
          capture: true
        });

        function useTooltipProps(_ref3) {
          let { ...props
          } = _ref3;
          return useTooltipIdProps(useHasFocusProps(useMergedProps()({}, props)));
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
        return (e$1("div", Object.assign({ class: "demo" }, { children: [e$1("label", { children: ["Interval duration: ", e$1("input", { type: "number", value: interval, onInput: e => setInterval(e.currentTarget.valueAsNumber) }, void 0)] }, void 0), e$1("div", { children: ["The callback has been called ", fireCount, " time", fireCount === 1 ? "" : "s", "."] }, void 0)] }), void 0));
    };

    const RandomWords$1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const RovingChildContext = D(null);
    const DemoUseRovingTabIndex = g(() => {
        const [lastFocusedInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ onLastFocusedInnerChanged: setLastFocusedInner });
        const { useListNavigationChild, currentTypeahead, tabbableIndex, useListNavigationProps, navigateToIndex } = useListNavigation({ shouldFocusOnChange: getLastFocusedInner });
        //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
        return (e$1("div", Object.assign({ className: "demo" }, { children: [e$1("h2", { children: "Keyboard & List Navigation" }, void 0), e$1("h3", { children: e$1("code", { children: "useRovingTabIndex" }, void 0) }, void 0), e$1("p", { children: ["Native HTML elements offer fantastic keyboard accessability, but cover a relatively limited number of use cases. There is no native HTML tree element, for example, that allows keyboard navigation of its items, nor is it possible to combine the keyboard navigation behavior of a ", e$1("code", { children: "<select>" }, void 0), " menu with the menu in a drawer component."] }, void 0), e$1("p", { children: ["When coming across a List or a Menu or a RadioGroup or a ToggleButtonGroup or any other \"one component made up of child components\", the usual expected behavior, at least natively, is that tabbing into the component is one action, and tabbing out is another.  Navigating ", e$1("em", { children: "within" }, void 0), " the component is done with the arrow keys or other methods."] }, void 0), e$1("p", { children: ["This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through ", e$1("em", { children: "every one" }, void 0), " of its child elements is extremely important."] }, void 0), e$1("p", { children: [e$1("code", { children: "useListNavigation" }, void 0), " wraps up the functionality of a few hooks (", e$1("code", { children: "useRovingTabIndex" }, void 0), ", ", e$1("code", { children: "useLinearNavigation" }, void 0), ", ", e$1("code", { children: "useTypeaheadNavigation" }, void 0), "to allow for ARIA-compliant navigation of lists and other similar components.  For more advanced use cases, you can use the other hooks individually."] }, void 0), e$1("p", { children: [e$1("code", { children: "useListNavigation" }, void 0), " (and ", e$1("code", { children: "useRovingTabIndex" }, void 0), ") internally use ", e$1("code", { children: "useChildManager" }, void 0), ", which is how the child elements and the parent communicate with each other. This means there are virtually no restrictions on how the DOM is set up as long as you can provide the children with the ", e$1("code", { children: "useListNavigationChild" }, void 0), " hook that's returned, usually with a simple ", e$1("code", { children: "Context" }, void 0), ". If the child element itself has a focusable element, like a button, it can also be wired up to disable itself Feel free to nest them too, as long as you are aware of your ", e$1("code", { children: "Context" }, void 0), " management (i.e. remember that you need to create a new ", e$1("code", { children: "Context" }, void 0), " for each use case)."] }, void 0), e$1("label", { children: ["Tabbable index: ", e$1("input", { type: "number", value: tabbableIndex ?? undefined, onInput: e => { e.preventDefault(); navigateToIndex(e.currentTarget.valueAsNumber); } }, void 0)] }, void 0), e$1("ul", Object.assign({}, useHasFocusProps(useListNavigationProps({})), { children: e$1(RovingChildContext.Provider, Object.assign({ value: useListNavigationChild }, { children: Array.from((function* () {
                            for (let i = 0; i < 10; ++i) {
                                yield e$1(DemoUseRovingTabIndexChild, { index: i }, i);
                            }
                        })()) }), void 0) }), void 0), currentTypeahead && e$1("div", { children: ["Typeahead: ", currentTypeahead] }, void 0)] }), void 0));
    });
    const DemoUseRovingTabIndexChild = g((({ index }) => {
        const [randomWord] = useState(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
        const useRovingTabIndexChild = T$1(RovingChildContext);
        const text = `${randomWord} This is item #${index + 1}`;
        const { useListNavigationChildProps, useListNavigationSiblingProps, tabbable } = useRovingTabIndexChild({ index, text, hidden: (index == 5) });
        const props = useListNavigationChildProps({});
        return (e$1("li", Object.assign({}, props, { children: [text, " (", tabbable ? "Tabbable" : "Not tabbable", ")", e$1("input", Object.assign({}, useListNavigationSiblingProps({ type: "checkbox" })), void 0)] }), void 0));
    }));

    const DemoUseTimeout = () => {
        const [timeout, setTimeout] = l(1000);
        const [triggerIndex, setTriggerIndex] = l("");
        const [fireCount, setFireCount] = l(0);
        useTimeout({ timeout, triggerIndex, callback: () => setFireCount(i => ++i) });
        return (e$1("div", Object.assign({ class: "demo" }, { children: [e$1("label", { children: ["Timeout duration: ", e$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) }, void 0)] }, void 0), e$1("label", { children: ["Refresh key: ", e$1("input", { type: "text", value: triggerIndex, onInput: e => setTriggerIndex(e.currentTarget.value) }, void 0)] }, void 0), e$1("div", { children: ["The callback has been called ", fireCount, " time", fireCount === 1 ? "" : "s", "."] }, void 0)] }), void 0));
    };

    const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const DemoUseDroppable = () => {
        const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, useDroppableProps, dropError } = useDroppable({ effect: "copy" });
        useMergedProps()({}, { ref: s(null) });
        const p = useDroppableProps({ className: "demo droppable" });
        p.ref;
        return (e$1("div", Object.assign({}, p, { children: [droppedStrings != null && e$1("div", { children: ["Data dropped: ", e$1("ul", { children: Object.entries(droppedStrings).map(([type, value]) => e$1("li", { children: [type, ": ", value] }, void 0)) }, void 0)] }, void 0), droppedFiles != null && e$1("div", { children: ["Files dropped: ", e$1("table", { children: [e$1("thead", { children: e$1("tr", { children: [e$1("th", { children: "Name" }, void 0), e$1("th", { children: "Size" }, void 0), e$1("th", { children: "Type" }, void 0), e$1("th", { children: "Last modified" }, void 0)] }, void 0) }, void 0), e$1("tbody", { children: droppedFiles.map(f => e$1("tr", { children: [e$1("td", { children: f.name }, void 0), f.data.byteLength, e$1("td", { children: f.type }, void 0), e$1("td", { children: new Date(f.lastModified ?? 0) }, void 0)] }, void 0)) }, void 0)] }, void 0)] }, void 0), e$1("hr", {}, void 0), stringsForConsideration != null && e$1("div", { children: ["Data being considered: ", e$1("ul", { children: Array.from(stringsForConsideration).map(type => e$1("li", { children: type }, void 0)) }, void 0)] }, void 0), filesForConsideration != null && e$1("div", { children: ["Files being considered: ", e$1("ul", { children: filesForConsideration.map(f => e$1("li", { children: JSON.stringify(f) }, void 0)) }, void 0)] }, void 0), e$1("hr", {}, void 0), dropError && e$1("div", { children: dropError instanceof Error ? dropError.message : JSON.stringify(dropError) }, void 0)] }), void 0));
    };
    const DemoUseDraggable = () => {
        const { dragging, useDraggableProps, lastDropEffect, getLastDropEffect, getDragging } = useDraggable({ data: { "text/plain": "This is custom draggable content of type text/plain." } });
        return (e$1("div", Object.assign({}, useDraggableProps({ className: "demo" }), { children: "Draggable content" }), void 0));
    };
    const DemoUseFocusTrap = g(({ depth }) => {
        const [active, setActive] = useState(false);
        const { useFocusTrapProps } = useFocusTrap({ trapActive: active });
        const divProps = useFocusTrapProps({ ref: undefined, className: "focus-trap-demo" });
        if (depth == 2)
            return e$1("div", {}, void 0);
        return (e$1("div", Object.assign({ className: "demo" }, { children: [e$1("label", { children: ["Active: ", e$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } }, void 0)] }, void 0), e$1("div", Object.assign({}, divProps, { children: e$1(DemoUseFocusTrapChild, { active: active, setActive: setActive, depth: depth ?? 0 }, void 0) }), void 0)] }), void 0));
    });
    const DemoUseFocusTrapChild = g(({ setActive, active, depth }) => {
        return (e$1(d, { children: [e$1("button", { children: "Button 1" }, void 0), e$1("button", { children: "Button 2" }, void 0), e$1("button", { children: "Button 3" }, void 0), e$1("label", { children: ["Active: ", e$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } }, void 0)] }, void 0)] }, void 0));
    });
    const UseAccordionSectionContext = D(null);
    const DemoUseAccordion = g(() => {
        const [expandedIndex, setExpandedIndex] = useState(0);
        const { useAriaAccordionSection } = useAriaAccordion({ expandedIndex, setExpandedIndex });
        return (e$1(UseAccordionSectionContext.Provider, Object.assign({ value: useAriaAccordionSection }, { children: e$1("div", Object.assign({ className: "demo" }, { children: e$1("div", { children: [e$1(DemoAccordionSection, { index: 0 }, void 0), e$1(DemoAccordionSection, { index: 1 }, void 0), e$1(DemoAccordionSection, { index: 2 }, void 0)] }, void 0) }), void 0) }), void 0));
    });
    const DemoAccordionSection = g(({ index }) => {
        const useAccordionSection = T$1(UseAccordionSectionContext);
        const { expanded, useAriaAccordionSectionBody, useAriaAccordionSectionHeader } = useAccordionSection({ index });
        const { useAriaAccordionSectionBodyProps } = useAriaAccordionSectionBody();
        const { useAriaAccordionSectionHeaderProps } = useAriaAccordionSectionHeader({ tag: "button" });
        const p = useAriaAccordionSectionBodyProps({ className: "accordion-section-body", hidden: !expanded });
        p.id;
        return (e$1("div", Object.assign({ className: "accordion-section" }, { children: [e$1("button", Object.assign({}, useAriaAccordionSectionHeaderProps({ className: "accordion-section-header" }), { children: ["Header #", index + 1] }), void 0), e$1("div", Object.assign({}, p, { children: [e$1("p", { children: ["Body content #", index + 1] }, void 0), e$1("p", { children: RandomWords.join(" ") }, void 0)] }), void 0)] }), void 0));
    });
    const DemoUseCheckbox = g(() => {
        return (e$1(d, { children: [e$1("div", Object.assign({ className: "demo" }, { children: [e$1(Checkbox1, {}, void 0), e$1(Checkbox2, {}, void 0)] }), void 0), e$1(DemoUseCheckboxGroup, {}, void 0)] }, void 0));
    });
    const Checkbox1 = g(() => {
        const [checked, setChecked] = useState(false);
        const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ disabled: false, checked, labelPosition: "separate", onInput: e => setChecked(e[EventDetail].checked) });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        return (e$1("div", { children: [e$1("input", Object.assign({}, useCheckboxInputElementProps({ type: "checkbox", })), void 0), e$1("label", Object.assign({}, useCheckboxLabelElementProps({}), { children: "Label" }), void 0)] }, void 0));
    });
    const Checkbox2 = g(() => {
        const [checked, setChecked] = useState(false);
        const { useCheckboxLabelElement, useCheckboxInputElement } = useAriaCheckbox({ disabled: false, labelPosition: "wrapping", onInput: e => setChecked(e[EventDetail].checked), checked });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        return (e$1("div", { children: e$1("label", Object.assign({}, useCheckboxLabelElementProps({}), { children: [e$1("input", Object.assign({}, useCheckboxInputElementProps({ type: "checkbox" })), void 0), " Label"] }), void 0) }, void 0));
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
        return e$1("div", Object.assign({ class: "demo" }, { children: e$1(CheckboxGroupContext.Provider, Object.assign({ value: useCheckboxGroupChild }, { children: [e$1("div", { children: [e$1("input", Object.assign({}, useCheckboxInputElementProps(useCheckboxGroupCheckboxProps({}))), void 0), e$1("label", Object.assign({}, useCheckboxLabelElementProps({}), { children: "All checked?" }), void 0)] }, void 0), e$1("div", Object.assign({}, useHasFocusProps({ style: { "display": "flex", "flexDirection": "column" } }), { children: Array.from((function* () {
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
                                yield e$1(DemoUseCheckboxGroupChild, { index: i, checked: !!selectedValues.has(i), setChecked: setSelected2 }, i);
                            }
                        })()) }), void 0)] }), void 0) }), void 0);
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
        return (e$1("div", { children: [e$1("input", Object.assign({}, useCheckboxInputElementProps(useCheckboxGroupChildProps({}))), void 0), e$1("label", Object.assign({}, useCheckboxLabelElementProps({}), { children: text }), void 0)] }, void 0));
    });
    const DemoUseDialog = g(() => {
        const onClose = (() => setOpen(false));
        const [open, setOpen] = useState(false);
        const { useDialogBackdrop, useDialogBody, useDialogProps, useDialogTitle } = useAriaDialog({ open, onClose });
        const { useDialogBackdropProps } = useDialogBackdrop();
        const { useDialogBodyProps } = useDialogBody({ descriptive: true });
        const { useDialogTitleProps } = useDialogTitle();
        return (e$1("div", Object.assign({ class: "demo" }, { children: [e$1("label", { children: e$1("input", { type: "checkbox", checked: open, onInput: e => { e.preventDefault(); setOpen(e.currentTarget.checked); } }, void 0) }, void 0), e$1("div", Object.assign({}, useDialogBackdropProps({ hidden: !open }), { children: e$1("div", Object.assign({}, useDialogProps({}), { children: [e$1("div", Object.assign({}, useDialogTitleProps({}), { children: "Dialog Title" }), void 0), e$1("div", Object.assign({}, useDialogBodyProps({}), { children: [e$1("p", Object.assign({ tabIndex: -1 }, { children: "Dialog body content" }), void 0), e$1("p", { children: RandomWords.join(" ") }, void 0), e$1("p", { children: RandomWords.join(" ") }, void 0), e$1("p", { children: RandomWords.join(" ") }, void 0), e$1("p", { children: e$1("button", Object.assign({ onClick: onClose }, { children: "Close" }), void 0) }, void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0));
    });
    const ListBoxSingleItemContext = D(null);
    const DemoUseListboxSingle = g(() => {
        const [selectedIndex, setSelectedIndex] = useState(0);
        const { useListboxSingleItem, useListboxSingleLabel, useListboxSingleProps } = useAriaListboxSingle({ selectedIndex, onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectionMode: "activate" });
        return e$1("div", Object.assign({ class: "demo" }, { children: e$1(ListBoxSingleItemContext.Provider, Object.assign({ value: useListboxSingleItem }, { children: e$1("ul", Object.assign({}, useListboxSingleProps({}), { children: Array.from((function* () {
                        for (let i = 0; i < 10; ++i) {
                            yield e$1(DemoListboxSingleOption, { index: i }, i);
                        }
                    })()) }), void 0) }), void 0) }), void 0);
    });
    const DemoListboxSingleOption = g(({ index }) => {
        const { getSelected, selected, tabbable, useListboxSingleItemProps } = T$1(ListBoxSingleItemContext)({ index, text: null, tag: "li" });
        return e$1("li", Object.assign({}, useListboxSingleItemProps({}), { children: ["Number ", index + 1, " option", selected ? " (selected)" : "", tabbable ? " (tabbable)" : ""] }), void 0);
    });
    const ListBoxMultiItemContext = D(null);
    const DemoUseListboxMulti = g(() => {
        const { useListboxMultiItem, useListboxMultiLabel, useListboxMultiProps, currentTypeahead } = useAriaListboxMulti({});
        const [selectedValues, setSelectedValues] = useState(new Set());
        return e$1("div", Object.assign({ class: "demo" }, { children: e$1(ListBoxMultiItemContext.Provider, Object.assign({ value: useListboxMultiItem }, { children: [e$1("ul", Object.assign({}, useListboxMultiProps({}), { children: Array.from((function* () {
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
                                yield e$1(DemoListboxMultiOption, { index: i, selected: !!selectedValues.has(i), setSelected: setSelected2 }, i);
                            }
                        })()) }), void 0), currentTypeahead != null && e$1("p", { children: currentTypeahead }, void 0)] }), void 0) }), void 0);
    });
    const MenuItemContext = D(null);
    const DemoListboxMultiOption = g(({ index, selected, setSelected }) => {
        let text = `Number ${index + 1} option${selected ? " (selected)" : ""}`;
        const { tabbable, useListboxMultiItemProps } = T$1(ListBoxMultiItemContext)({ tag: "li", index, text, onSelect: e => setSelected(e[EventDetail].selected), selected });
        text = `Number ${index + 1} option${selected ? " (selected)" : ""}${tabbable ? " (tabbable)" : ""}`;
        return e$1("li", Object.assign({}, useListboxMultiItemProps({}), { children: text }), void 0);
    });
    const DemoMenu = g(() => {
        const [open, setOpen] = useState(false);
        const onClose = () => setOpen(false);
        const onOpen = () => setOpen(true);
        const { useHasFocusProps, getFocusedInner: getMenuFocusedInner } = useHasFocus({});
        const { useMenuButton, useMenuItem, useMenuProps } = useAriaMenu({ open, onClose, onOpen, shouldFocusOnChange: getMenuFocusedInner });
        const { useMenuButtonProps } = useMenuButton({ tag: "button" });
        return (e$1("div", Object.assign({ class: "demo" }, { children: e$1(MenuItemContext.Provider, Object.assign({ value: useMenuItem }, { children: [e$1("button", Object.assign({}, useMenuButtonProps({ onClick: e => setOpen(open => !open) }), { children: "Open menu" }), void 0), e$1("ul", Object.assign({}, useMenuProps(useHasFocusProps({})), { hidden: !open }, { children: [e$1(DemoMenuItem, { index: 0 }, void 0), e$1(DemoMenuItem, { index: 1 }, void 0), e$1(DemoMenuItem, { index: 2 }, void 0)] }), void 0)] }), void 0) }), void 0));
    });
    const DemoMenuItem = g(({ index }) => {
        const useAriaMenuItem = T$1(MenuItemContext);
        const { useMenuItemProps } = useAriaMenuItem({ index, text: null });
        return e$1("li", Object.assign({}, useMenuItemProps({}), { children: ["Item ", index + 1] }), void 0);
    });
    const TabContext = D(null);
    const TabPanelContext = D(null);
    const DemoTabs = g(() => {
        const [selectedIndex, setSelectedIndex] = useState(0);
        const [selectionMode, setSelectionMode] = useState("focus");
        const { useTabPanel, useTabsLabel, useTab, useTabsList } = useAriaTabs({ onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectedIndex, selectionMode, orientation: "block" });
        const { useTabListProps } = useTabsList();
        return (e$1(TabContext.Provider, Object.assign({ value: useTab }, { children: e$1(TabPanelContext.Provider, Object.assign({ value: useTabPanel }, { children: e$1("div", Object.assign({ class: "demo" }, { children: [e$1("label", { children: [e$1("input", { type: "checkbox", checked: selectionMode == "focus", onInput: (e) => { e.preventDefault(); setSelectionMode(e.currentTarget.checked ? "focus" : "activate"); } }, void 0), " Activate on focus?"] }, void 0), e$1("ul", Object.assign({}, useTabListProps({}), { children: [e$1(DemoTab, { index: 0 }, void 0), e$1(DemoTab, { index: 1 }, void 0), e$1(DemoTab, { index: 2 }, void 0), e$1(DemoTab, { index: 3 }, void 0), e$1(DemoTab, { index: 4 }, void 0)] }), void 0), e$1("div", { children: [e$1(DemoTabPanel, { index: 0 }, void 0), e$1(DemoTabPanel, { index: 1 }, void 0), e$1(DemoTabPanel, { index: 2 }, void 0), e$1(DemoTabPanel, { index: 3 }, void 0), e$1(DemoTabPanel, { index: 4 }, void 0)] }, void 0)] }), void 0) }), void 0) }), void 0));
    });
    const DemoTab = g(({ index }) => {
        const useTab = T$1(TabContext);
        const { useTabProps, selected } = useTab({ index, text: null, tag: "li" });
        return (e$1(d, { children: e$1("li", Object.assign({}, useTabProps({}), { children: ["Tab #", index + 1, " (", `Selected: ${selected}`, ")"] }), void 0) }, void 0));
    });
    const DemoTabPanel = g(({ index }) => {
        const useTabPanel = T$1(TabPanelContext);
        const { useTabPanelProps, visible } = useTabPanel({ index });
        return (e$1("div", Object.assign({}, useTabPanelProps({ hidden: !visible }), { children: [e$1("p", { children: ["Tab panel content #", index + 1, " (", `Selected: ${visible}`, ")."] }, void 0), e$1("p", { children: RandomWords.slice(0, Math.floor(RandomWords.length / (index + 1))).join(" ") }, void 0)] }), void 0));
    });
    const DemoTooltip = g(() => {
        const { useTooltip, useTooltipTrigger, isOpen } = useAriaTooltip({});
        const { useTooltipProps } = useTooltip();
        const { useTooltipTriggerProps } = useTooltipTrigger();
        return (e$1("div", Object.assign({ class: "demo" }, { children: e$1("p", { children: ["This is a paragraph with a ", e$1("span", Object.assign({}, useTooltipTriggerProps({}), { children: "tooltip right here." }), void 0), e$1("span", Object.assign({}, useTooltipProps({ hidden: !isOpen }), { children: "This is the tooltip content." }), void 0)] }, void 0) }), void 0));
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
        return e$1("div", Object.assign({ class: "flex", style: { flexWrap: "wrap" } }, { children: [e$1(DemoTooltip, {}, void 0), e$1(DemoTabs, {}, void 0), e$1(DemoUseTimeout, {}, void 0), e$1(DemoUseInterval, {}, void 0), e$1(DemoMenu, {}, void 0), e$1(DemoUseListboxSingle, {}, void 0), e$1(DemoUseListboxMulti, {}, void 0), e$1(DemoUseCheckbox, {}, void 0), e$1(DemoUseAccordion, {}, void 0), e$1(DemoUseDialog, {}, void 0), e$1(DemoUseRovingTabIndex, {}, void 0), e$1(DemoUseFocusTrap, {}, void 0), e$1(DemoUseDroppable, {}, void 0), e$1(DemoUseDraggable, {}, void 0), e$1("input", {}, void 0)] }), void 0);
    };
    requestAnimationFrame(() => {
        S$1(e$1(Component, {}, void 0), document.getElementById("root"));
    });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvZGlzdC9qc3hSdW50aW1lLm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXRpbWVvdXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1saXN0LW5hdmlnYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZHJhZ2dhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWRyb3BwYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ldmVudC1oYW5kbGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWFjdGl2ZS1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWhhcy1mb2N1cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1pbnRlcnZhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWZvY3VzLXRyYXAuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9wcm9wcy5qcyIsIi4uL3VzZS1idXR0b24uanMiLCIuLi91c2UtYWNjb3JkaW9uLmpzIiwiLi4vdXNlLWxhYmVsLmpzIiwiLi4vdXNlLWNoZWNrYm94LmpzIiwiLi4vdXNlLWNoZWNrYm94LWdyb3VwLmpzIiwiLi4vdXNlLW1vZGFsLmpzIiwiLi4vdXNlLWRpYWxvZy5qcyIsIi4uL3VzZS1saXN0Ym94LW11bHRpLmpzIiwiLi4vdXNlLWxpc3Rib3gtc2luZ2xlLmpzIiwiLi4vdXNlLW1lbnUuanMiLCIuLi91c2UtdGFicy5qcyIsIi4uL3VzZS10b29sdGlwLmpzIiwiZGVtb3MvdXNlLWludGVydmFsLnRzeCIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS10aW1lb3V0LnRzeCIsImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxyLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmaChvW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIHIsRnJhZ21lbnQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7RnJhZ21lbnR9ZnJvbVwicHJlYWN0XCI7dmFyIG89MDtmdW5jdGlvbiBlKF8sZSxuLHQsZil7dmFyIGwscyx1PXt9O2ZvcihzIGluIGUpXCJyZWZcIj09cz9sPWVbc106dVtzXT1lW3NdO3ZhciBhPXt0eXBlOl8scHJvcHM6dSxrZXk6bixyZWY6bCxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjotLW8sX19zb3VyY2U6dCxfX3NlbGY6Zn07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgXyYmKGw9Xy5kZWZhdWx0UHJvcHMpKWZvcihzIGluIGwpdm9pZCAwPT09dVtzXSYmKHVbc109bFtzXSk7cmV0dXJuIHIudm5vZGUmJnIudm5vZGUoYSksYX1leHBvcnR7ZSBhcyBqc3gsZSBhcyBqc3hzLGUgYXMganN4REVWfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzeFJ1bnRpbWUubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxBKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBBKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gRihuLHQpe3JldHVybiBvPTgsQShmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBUKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gZCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsQSBhcyB1c2VNZW1vLEYgYXMgdXNlQ2FsbGJhY2ssVCBhcyB1c2VDb250ZXh0LGQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBEZWJ1ZyBob29rLlxuICpcbiAqIEdpdmVuIGEgdmFsdWUgb3Igc2V0IG9mIHZhbHVlcywgZW1pdHMgYSBjb25zb2xlIGVycm9yIGlmIGFueSBvZiB0aGVtIGNoYW5nZSBmcm9tIG9uZSByZW5kZXIgdG8gdGhlIG5leHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbnN1cmVTdGFiaWxpdHkoLi4udmFsdWVzKSB7XG4gICAgdXNlSGVscGVyKHZhbHVlcy5sZW5ndGgsIDApO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIHVzZUhlbHBlcih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgICAgICBjb25zdCBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSA9IHVzZVJlZih2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHNob3duRXJyb3IgPSB1c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudCAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzaG93bkVycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGlzIGhvb2sgcmVxdWlyZXMgc29tZSBvciBhbGwgb2YgaXRzIGFyZ3VtZW50cyByZW1haW4gc3RhYmxlIGFjcm9zcyBlYWNoIHJlbmRlcjsgcGxlYXNlIGNoZWNrIHRoZSAke2luZGV4fS1pbmRleGVkIHZhbHVlIHRoYXQgd2FzIGNoZWNrZWQuYCk7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgc2hvd25FcnJvci5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxuICpcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICpcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uLiAgTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZShvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWYoVW5zZXQpO1xuICAgIGNvbnN0IHdhcm5pbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGNsZWFudXBDYWxsYmFja1JlZiA9IHVzZVJlZih1bmRlZmluZWQpO1xuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSk7XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgY2xlYW51cENhbGxiYWNrID0gY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChjbGVhbnVwQ2FsbGJhY2spXG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2soKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlcmUgYXJlIGEgY291cGxlIHBsYWNlcyB3aGVyZSB3ZSdkIGxpa2UgdG8gdXNlIG91ciBpbml0aWFsXG4gICAgLy8gdmFsdWUgaW4gcGxhY2Ugb2YgaGF2aW5nIG5vIHZhbHVlIGF0IGFsbCB5ZXQuXG4gICAgLy8gVGhpcyBpcyB0aGUgc2hhcmVkIGNvZGUgZm9yIHRoYXQsIHVzZWQgb24gbW91bnQgYW5kIHdoZW5ldmVyXG4gICAgLy8gZ2V0VmFsdWUgaXMgY2FsbGVkLlxuICAgIGNvbnN0IHRyeUVuc3VyZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgJiYgZ2V0SW5pdGlhbFZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBnZXRJbml0aWFsVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oaW5pdGlhbFZhbHVlLCB1bmRlZmluZWQpID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGNlcHRpb25zIGFyZSBpbnRlbnRpb25hbCB0byBhbGxvdyBiYWlsb3V0ICh3aXRob3V0IGV4cG9zaW5nIHRoZSBVbnNldCBzeW1ib2wpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbIC8qIGdldEluaXRpYWxWYWx1ZSBhbmQgb25DaGFuZ2UgaW50ZW50aW9uYWxseSBvbWl0dGVkICovXSk7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh3YXJuaW5nUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEdXJpbmcgb25DaGFuZ2UsIHByZWZlciB1c2luZyB0aGUgKHZhbHVlLCBwcmV2VmFsdWUpIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIGdldFZhbHVlIC0tIGl0J3MgYW1iaWd1b3VzIGFzIHRvIGlmIHlvdSdyZSBhc2tpbmcgZm9yIHRoZSBvbGQgb3IgbmV3IHZhbHVlIGF0IHRoaXMgcG9pbnQgaW4gdGltZSBmb3IgdGhpcyBjb21wb25lbnQuXCIpO1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB3ZSBjYWxsIGdldFZhbHVlLCBpZiB3ZSBoYXZlbid0IGJlZW4gZ2l2ZW4gYSB2YWx1ZSB5ZXQsXG4gICAgICAgIC8vIChhbmQgd2Ugd2VyZSBnaXZlbiBhbiBpbml0aWFsIHZhbHVlIHRvIHVzZSlcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBpbml0aWFsIHZhbHVlIGluc3RlYWQgb2Ygbm90aGluZy5cbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0KVxuICAgICAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICAgICAgcmV0dXJuICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cbiAgICAgICAgLy8gKElmIHdlIGhhdmUgYW4gaW5pdGlhbCB2YWx1ZSwgb2YgY291cnNlKVxuICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGUgYWN0dWFsIGNvZGUgdGhlIHVzZXIgY2FsbHMgdG8gKHBvc3NpYmx5KSBydW4gYSBuZXcgZWZmZWN0LlxuICAgIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2soKGFyZykgPT4ge1xuICAgICAgICBjb25zdCBwcmV2RGVwID0gdmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiBnZXRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBkZXAgPSBhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyhwcmV2RGVwKSA6IGFyZztcbiAgICAgICAgaWYgKGRlcCAhPT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gSW5kaWNhdGUgdG8gdGhlIHVzZXIgdGhhdCB0aGV5IHNob3VsZG4ndCBjYWxsIGdldFZhbHVlIGR1cmluZyBvbkNoYW5nZVxuICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIENhbGwgYW55IHJlZ2lzdGVyZCBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oZGVwLCBwcmV2RGVwKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRlcDtcbiAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbZ2V0VmFsdWUsIHNldFZhbHVlXTtcbn1cbmNvbnN0IFVuc2V0ID0gU3ltYm9sKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcGFzc2l2ZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbihsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8uY2hpbGRyZW47XG4gICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LmNoaWxkcmVuO1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHJldCA9IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jaGlsZHJlbi5qcy5tYXAiLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlaXIgYGNsYXNzYCBhbmQgYGNsYXNzTmFtZWAgcHJvcGVydGllcy5cbiAqIER1cGxpY2F0ZSBjbGFzc2VzIGFyZSByZW1vdmVkIChvcmRlciBkb2Vzbid0IG1hdHRlciBhbnl3YXkpLlxuICpcbiAqIEBwYXJhbSBsaHMgQ2xhc3NlcyBvZiB0aGUgZmlyc3QgY29tcG9uZW50XG4gKiBAcGFyYW0gcmhzIENsYXNzZXMgb2YgdGhlIHNlY29uZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhbGwgY29tYmluZWQgY2xhc3NlcyBmcm9tIGJvdGggYXJndW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2xhc3NlcyhsaHMsIHJocykge1xuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cbiAgICByZXR1cm4gbWVyZ2VDbGFzc2VzKGxocywgcmhzKTtcbn1cbmZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyhsaHMsIHJocykge1xuICAgIGNvbnN0IGxoc0NsYXNzID0gbGhzPy5jbGFzcztcbiAgICBjb25zdCBsaHNDbGFzc05hbWUgPSBsaHM/LmNsYXNzTmFtZTtcbiAgICBjb25zdCByaHNDbGFzcyA9IHJocz8uY2xhc3M7XG4gICAgY29uc3QgcmhzQ2xhc3NOYW1lID0gcmhzPy5jbGFzc05hbWU7XG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcbiAgICAgICAgbGV0IGxoc0NsYXNzZXMgPSBjbHN4KGxoc0NsYXNzLCBsaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgbGV0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgbGV0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFsbENsYXNzZXMpLmpvaW4oXCIgXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG5mdW5jdGlvbiB0eXBldGVzdCgpIHtcbiAgICBjb25zdCBjID0gW1xuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwge30pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwge30pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXG4gICAgXTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMF0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1sxXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzJdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbM10uY29uY2F0KFwiXCIpO1xuICAgIGNbNF0uY29uY2F0KFwiXCIpO1xuICAgIGNbNV0uY29uY2F0KFwiXCIpO1xuICAgIGNbNl0uY29uY2F0KFwiXCIpO1xuICAgIGNbN10uY29uY2F0KFwiXCIpO1xuICAgIGNbOF0uY29uY2F0KFwiXCIpO1xuICAgIGNbOV0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTBdLmNvbmNhdChcIlwiKTtcbiAgICBjWzExXS5jb25jYXQoXCJcIik7XG4gICAgY1sxMl0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1sxM107XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNsYXNzZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5mdW5jdGlvbiBwcm9jZXNzUmVmKGluc3RhbmNlLCByZWYpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlZihpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xuICAgIH1cbn1cbi8qKlxuICogQ29tYmluZXMgdHdvIHJlZnMgaW50byBvbmUuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHRvIGJvdGggdXNlIGl0cyBvd24gcmVmICphbmQqIGZvcndhcmQgYSByZWYgdGhhdCB3YXMgZ2l2ZW4gdG8gaXQuXG4gKiBAcGFyYW0gbGhzXG4gKiBAcGFyYW0gcmhzXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoc1Byb3BzLCByaHNQcm9wcykge1xuICAgICAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8ucmVmO1xuICAgICAgICBjb25zdCByaHMgPSByaHNQcm9wcz8ucmVmO1xuICAgICAgICBsZXQgY29tYmluZWQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xuICAgICAgICB9LCBbbGhzLCByaHNdKTtcbiAgICAgICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8qXG5mdW5jdGlvbiB0eXBldGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCByZWY6IFJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAgIGZ1bmN0aW9uIGFjY2VwdHNSZWYocmVmOiBSZWY8YW55PikgeyB9XG4gICAgZnVuY3Rpb24gYWNjZXB0c09wdGlvbmFsUmVmKHJlZjogUmVmPGFueT4gfCB1bmRlZmluZWQpIHsgfVxuXG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHByb3BzKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZjogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWY6IHVuZGVmaW5lZCB9LCB7IHJlZiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmIH0pLFxuICAgIF0gYXMgY29uc3Q7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNSZWYoY1swXSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMV0pO1xuXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbMl0pO1xuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzNdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1s0XSk7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPXG4gICAgYWNjZXB0c1JlZihjWzVdKTtcbiAgICBhY2NlcHRzUmVmKGNbNl0pO1xuICAgIGFjY2VwdHNSZWYoY1s3XSk7XG4gICAgYWNjZXB0c1JlZihjWzhdKTtcbn1cbiovXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZSkge1xuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcbn1cbi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIGxocy5zdHlsZTtcbiAgICAgICAgaWYgKCFsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpXG4gICAgICAgICAgICByZXR1cm4gcmhzLnN0eWxlO1xuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpIHtcbiAgICAgICAgICAgIC8vICh1c2VNZXJnZWRTdHlsZXMgaXNuJ3QgYSB0cnVlIGhvb2sgLS0gdGhpcyBpc24ndCBhIHZpb2xhdGlvbilcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChsaHM/LnN0eWxlKSB9LCByaHMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QocmhzPy5zdHlsZSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9naWM/Pz9cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cbiAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYCR7bGhzLnN0eWxlfTske3Jocz8uc3R5bGUgPz8gXCJcIn1gO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHM/LnN0eWxlID8/IHt9KSxcbiAgICAgICAgLi4uKHJocz8uc3R5bGUgPz8ge30pXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcbmxldCBsb2cgPSAoc3RyKSA9PiB7IGRlYnVnZ2VyOyBjb25zb2xlLndhcm4oYFRyeWluZyB0byBtZXJnZSB0d28gcHJvcHMgd2l0aCB0aGUgc2FtZSBuYW1lOiAke3N0cn1gKTsgLyogSW50ZW50aW9uYWwgKi8gfTtcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMb2dnaW5nUHJvcENvbmZsaWN0cyhsb2cyKSB7XG4gICAgbG9nID0gbG9nMjtcbn1cbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXG4gKlxuICogVGhlIGhvb2sgaXMgYXdhcmUgb2YgYW5kIGNhbiBpbnRlbGxpZ2VudGx5IG1lcmdlIGBjbGFzc05hbWVgLCBgY2xhc3NgLCBgc3R5bGVgLCBgcmVmYCwgYW5kIGFsbCBldmVudCBoYW5kbGVycy5cbiAqIEBwYXJhbSBsaHMyXG4gKiBAcGFyYW0gcmhzMlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobGhzMiwgcmhzMikge1xuICAgICAgICAvLyBGaXJzdCwgcHV0IGluIGFsbCB0aGUgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIHJlYXNvbiBhYm91dFxuICAgICAgICAvLyBhbmQgYWxsIGxocyBwcm9wcy4gV2UncmUgZ29pbmcgdG8gbWVyZ2UgaW4gcmhzIGp1c3QgYWZ0ZXIuXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IGxoc0NoaWxkcmVuLCBjbGFzczogbGhzQ2xhc3MsIGNsYXNzTmFtZTogbGhzQ2xhc3NOYW1lLCBzdHlsZTogbGhzU3R5bGUsIHJlZjogbGhzUmVmLCAuLi5saHMgfSA9IGxoczI7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IHJoc0NoaWxkcmVuLCBjbGFzczogcmhzQ2xhc3MsIGNsYXNzTmFtZTogcmhzQ2xhc3NOYW1lLCBzdHlsZTogcmhzU3R5bGUsIHJlZjogcmhzUmVmLCAuLi5yaHMgfSA9IHJoczI7XG4gICAgICAgIGxldCByZXQgPSB7XG4gICAgICAgICAgICAuLi5saHMsXG4gICAgICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMoKShsaHMyLCByaHMyKSxcbiAgICAgICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzMiwgcmhzMilcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJldC5yZWYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQucmVmO1xuICAgICAgICBpZiAocmV0LnN0eWxlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LnN0eWxlO1xuICAgICAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5jbGFzc05hbWU7XG4gICAgICAgIGlmIChyZXQuY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2hpbGRyZW47XG4gICAgICAgIC8vIE5vdywgZG8gKmV2ZXJ5dGhpbmcqIGVsc2VcbiAgICAgICAgLy8gTWVyZ2UgZXZlcnkgcmVtYWluaW5nIGV4aXN0aW5nIGVudHJ5IGluIGxocyB3aXRoIHdoYXQgd2UndmUgYWxyZWFkeSBwdXQgaW4gcmV0LlxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xuICAgICAgICBjb25zdCByaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmhzKTtcbiAgICAgICAgZm9yIChjb25zdCBbcmhzS2V5LCByaHNWYWx1ZV0gb2YgcmhzRW50cmllcykge1xuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUsIHJoc1ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59XG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9ucyhsaHMsIHJocykge1xuICAgIGlmICghbGhzKVxuICAgICAgICByZXR1cm4gcmhzO1xuICAgIGlmICghcmhzKVxuICAgICAgICByZXR1cm4gbGhzO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBsZXQgbHYgPSBsaHMoLi4uYXJncyk7XG4gICAgICAgIGxldCBydiA9IHJocyguLi5hcmdzKTtcbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2x2LCBydl0pO1xuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuZnVuY3Rpb24gcmV0dXJuTnVsbCgpIHsgcmV0dXJuIG51bGw7IH1cbi8qKlxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cbiAqXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudChhcmdzKSB7XG4gICAgY29uc3Qgb25FbGVtZW50Q2hhbmdlID0gYXJncz8ub25FbGVtZW50Q2hhbmdlO1xuICAgIC8vIExldCB1cyBzdG9yZSB0aGUgYWN0dWFsIChyZWZlcmVuY2UgdG8pIHRoZSBlbGVtZW50IHdlIGNhcHR1cmVcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25FbGVtZW50Q2hhbmdlLCByZXR1cm5OdWxsKTtcbiAgICAvLyBDcmVhdGUgYSBSZWZDYWxsYmFjayB0aGF0J3MgZmlyZWQgd2hlbiBtb3VudGVkIFxuICAgIC8vIGFuZCB0aGF0IG5vdGlmaWVzIHVzIG9mIG91ciBlbGVtZW50IHdoZW4gd2UgaGF2ZSBpdFxuICAgIGNvbnN0IG15UmVmID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBzZXRFbGVtZW50KCgpID0+IGUpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VSZWZFbGVtZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyByZWY6IG15UmVmIH0sIHByb3BzKSwgW10pO1xuICAgIC8vIFJldHVybiBib3RoIHRoZSBlbGVtZW50IGFuZCB0aGUgaG9vayB0aGF0IG1vZGlmaWVzIFxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VSZWZFbGVtZW50UHJvcHMsXG4gICAgICAgIGdldEVsZW1lbnRcbiAgICB9O1xufVxuZnVuY3Rpb24gdGVzdCgpIHtcbiAgICBmdW5jdGlvbiBmb28ocHJvcHMpIHtcbiAgICAgICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRFbGVtZW50IH0pO1xuICAgICAgICBjb25zdCBwMSA9IHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7XG4gICAgICAgIGlmIChwMS5zdHlsZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcDEuc3R5bGUgPT09IFwic3RyaW5nXCIpIHsgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHAxLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcmVmLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuZnVuY3Rpb24gZXh0cmFjdEVsZW1lbnRTaXplKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXRyaWV2ZSB0aGUgc2l6ZSBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldFwiKTtcbiAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XG4gICAgcmV0dXJuICh7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSk7XG59XG5mdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVsZW1lbnRTaXplKHsgZ2V0T2JzZXJ2ZUJveCwgb25TaXplQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoZ2V0T2JzZXJ2ZUJveCwgb25TaXplQ2hhbmdlKTtcbiAgICBjb25zdCBbZ2V0U2l6ZSwgc2V0U2l6ZV0gPSB1c2VQYXNzaXZlU3RhdGUob25TaXplQ2hhbmdlLCByZXR1cm5OdWxsKTtcbiAgICBjb25zdCBjdXJyZW50T2JzZXJ2ZUJveCA9IHVzZVJlZih1bmRlZmluZWQpO1xuICAgIGNvbnN0IG5lZWRBTmV3T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoZWxlbWVudCwgb2JzZXJ2ZUJveCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHNldFNpemUoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAod2luZG93ICYmIChcIlJlc2l6ZU9ic2VydmVyXCIgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7IGhhbmRsZVVwZGF0ZSgpOyB9KTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHsgYm94OiBvYnNlcnZlQm94IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVVwZGF0ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlKSA9PiBuZWVkQU5ld09ic2VydmVyKGUsIGdldE9ic2VydmVCb3g/LigpKSwgW10pIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChnZXRPYnNlcnZlQm94KSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudE9ic2VydmVCb3guY3VycmVudCAhPT0gZ2V0T2JzZXJ2ZUJveCgpKVxuICAgICAgICAgICAgICAgIG5lZWRBTmV3T2JzZXJ2ZXIoZ2V0RWxlbWVudCgpLCBnZXRPYnNlcnZlQm94KCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgdXNlRWxlbWVudFNpemVQcm9wczogdXNlUmVmRWxlbWVudFByb3BzXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lbGVtZW50LXNpemUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VFbGVtZW50U2l6ZSB9IGZyb20gXCIuL3VzZS1lbGVtZW50LXNpemVcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gICAgcmV0dXJuIChzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkpO1xufVxuLyoqXG4gKiBJbnNwZWN0cyB0aGUgZWxlbWVudCdzIHN0eWxlIGFuZCBkZXRlcm1pbmVzIHRoZSBsb2dpY2FsIGRpcmVjdGlvbiB0aGF0IHRleHQgZmxvd3MuXG4gKlxuICogQ2VydGFpbiBDU1MgcHJvcGVydGllcywgbGlrZSBgYmxvY2stc2l6ZWAsIHJlc3BlY3QgdGhlIGN1cnJlbnQgd3JpdGluZyBtb2RlIGFuZCB0ZXh0IGRpcmVjdGlvbi5cbiAqIEJ1dCBgdHJhbnNmb3JtYCwgYGNsaXBgLCBldGMuIGRvbid0LlxuICpcbiAqIFRoaXMgaXMgcHJvdmlkZWQgc28gdGhhdCBDU1MgcHJvcGVydGllcyBjYW4gY29uc2lzdGVudGx5IHVzZSB0aG9zZSBsb2dpY2FsIHByb3BlcnRpZXMuXG4gKlxuICogU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtd3JpdGluZy1tb2Rlcy8jbG9naWNhbC10by1waHlzaWNhbFxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxuICogKiBgZ2V0TG9naWNhbERpcmVjdGlvbmA6IHJldHJpZXZlcyBhIGBMb2dpY2FsRGlyZWN0aW9uSW5mb2AgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlbGVtZW50LiAoRnVuY3Rpb24gaXMgY29uc3RhbnQgYmV0d2VlbiByZW5kZXJzKVxuICogKiBgY29udmVydEVsZW1lbnRTaXplYDogV2hlbiB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHVzZUVsZW1lbnRTaXplYCwgYWxsb3dzIHlvdSB0byByZXRyaWV2ZSB0aGUgbG9naWNhbCBzaXplIG9mIGFuIGVsZW1lbnQgaW5zdGVhZCBvZiB0aGUgcGh5c2ljYWwgc2l6ZS5cbiAqICogYGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbmA6IEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiIHRvIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiLlxuICogKiBgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbmA6ICBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiIHRvIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2ljYWxEaXJlY3Rpb24oeyBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UgfSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UpO1xuICAgIGNvbnN0IFtnZXRDb21wdXRlZFN0eWxlcywgc2V0Q29tcHV0ZWRTdHlsZXNdID0gdXNlUGFzc2l2ZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRDb21wdXRlZFN0eWxlcyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIC8vIFRPRE86IFRoZXJlJ3Mgbm8gd2F5IHRvIHJlZnJlc2ggd2hpY2ggd3JpdGluZyBtb2RlIHdlIGhhdmUgb25jZSBtb3VudGVkLlxuICAgIC8vICAgQS4gVGhlcmUncyBubyB3YXkgdG8gd2F0Y2ggZm9yIENTUyBzdHlsZSBjaGFuZ2VzXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXG4gICAgLy8gICBDLiBJcyBub3QgbmVjZXNzYXJ5IGZvciBtb3N0IHVzZSBjYXNlcyB0aGF0IHdpbGwgbmV2ZXIgc3dpdGNoIHdyaXRpbmctbW9kZSB3aXRoaW4gYSBzaW5nbGUgY29tcG9uZW50XG4gICAgLy8gICAgICAoVGhvc2UgdGhhdCBkbyB3aWxsIG5lZWQgdG8gbW91bnQgYW5kIHVubW91bnQgdGhlIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpXG4gICAgLy9cbiAgICAvLyBBcyBhIHNvbHV0aW9uLCBoZXJlJ3MgYSBjaGVhcCB3b3JrYXJvdW5kIHRoYXQgY2hlY2tzIHdoZW4gdGhlIGVsZW1lbnQncyBzaXplIGhhcyBjaGFuZ2VkLFxuICAgIC8vIGFuZCBpZiBzbywgdGVzdHMgaWYgdGhlIHdyaXRpbmcgbW9kZSBoYXMgY2hhbmdlZCB0b28uXG4gICAgLy9cbiAgICAvLyBUaGlzIHdpbGwgd29yayBmb3IgYXQgbGVhc3Qgc29tZSBudW1iZXIgb2YgY2FzZXMsIGJ1dCBhIGJldHRlciBzb2x1dGlvbiBpcyBzdGlsbCBuZWVkZWQuXG4gICAgY29uc3QgeyB1c2VFbGVtZW50U2l6ZVByb3BzIH0gPSB1c2VFbGVtZW50U2l6ZSh7IG9uU2l6ZUNoYW5nZTogdXNlQ2FsbGJhY2soXyA9PiBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2U/LihnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpKSwgW10pIH0pO1xuICAgIGNvbnN0IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGVzKCk7XG4gICAgICAgIGlmIChjb21wdXRlZFN0eWxlcykge1xuICAgICAgICAgICAgbGV0IHcgPSBjb21wdXRlZFN0eWxlcy53cml0aW5nTW9kZTtcbiAgICAgICAgICAgIGxldCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgbGV0IHQgPSBjb21wdXRlZFN0eWxlcy50ZXh0T3JpZW50YXRpb247XG4gICAgICAgICAgICBpZiAodCA9PSBcInVwcmlnaHRcIilcbiAgICAgICAgICAgICAgICBkID0gXCJsdHJcIjtcbiAgICAgICAgICAgIHJldHVybiAoeyAuLi5Xcml0aW5nTW9kZXNbdyB8fCBcImhvcml6b250YWwtdGJcIl1bZCB8fCBcImx0clwiXSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCBbXSk7XG4gICAgLy9jb25zdCBbZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHNldExvZ2ljYWxEaXJlY3Rpb25JbmZvXSA9IHVzZVBhc3NpdmVTdGF0ZTxMb2dpY2FsRGlyZWN0aW9uSW5mbz4ob25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlKTtcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gZWxlbWVudE9yaWVudGF0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIFwiaW5saW5lXCI7XG4gICAgICAgIHJldHVybiBcImJsb2NrXCI7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsU2lkZSA9IHVzZUNhbGxiYWNrKChzaWRlLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJibG9jay1zdGFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmJsb2NrRGlyZWN0aW9uID8/IFwidHRiXCIpWzBdXTtcbiAgICAgICAgICAgIGNhc2UgXCJibG9jay1lbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVsyXV07XG4gICAgICAgICAgICBjYXNlIFwiaW5saW5lLXN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uaW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCIpWzBdXTtcbiAgICAgICAgICAgIGNhc2UgXCJpbmxpbmUtZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uaW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCIpWzJdXTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsU2lkZSA9IHVzZUNhbGxiYWNrKChzaWRlLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJsdHJcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwidHRiXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJidHRcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSk7XG4gICAgICAgIHJldHVybiBcImlubGluZS1zdGFydFwiO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGVsZW1lbnRPcmllbnRhdGlvbiA9PSBcImlubGluZVwiKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uYmxvY2tPcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0RWxlbWVudFNpemUgPSB1c2VDYWxsYmFjaygoZWxlbWVudFNpemUsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBpbmxpbmVEaXJlY3Rpb24sIGJsb2NrRGlyZWN0aW9uIH0gPSBkaXJlY3Rpb247XG4gICAgICAgICAgICAvLyBTaXplIGlzIHJlbGF0aXZlbHkgc2ltcGxlXG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICAvLyBQb3NpdGlvbiByZXF1aXJlcyB1cyB0byBzb21ldGltZXMgdXNlIG9uZSBwcm9wZXJ0eSAobGlrZSBgbGVmdGApXG4gICAgICAgICAgICAvLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiOyByZXR1cm4gXCJ0b3BcIjsgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImhlaWdodFwiOyByZXR1cm4gbnVsbDsgfVxuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjMgPSBnZXRQaHlzaWNhbExlZnRUb3AoYmxvY2tEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYyKX1gXSk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYyKX1gXSkpO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTG9naWNhbERpcmVjdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VFbGVtZW50U2l6ZVByb3BzKHByb3BzKSksIFtdKSxcbiAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaXplOiBjb252ZXJ0RWxlbWVudFNpemUsXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbixcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbixcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpZGUsXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsU2lkZVxuICAgIH07XG59XG4vLyBIZWxwZXIgZm9yIGV4dHJhY3RpbmcgaW5mbyBmcm9tIFwibHRyXCIsIFwidHRiXCIsIGV0Yy5cbmNvbnN0IE0gPSB7XG4gICAgdDogXCJ0b3BcIixcbiAgICBiOiBcImJvdHRvbVwiLFxuICAgIGw6IFwibGVmdFwiLFxuICAgIHI6IFwicmlnaHRcIlxufTtcbjtcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwibHRyXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgIGJsb2NrT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBpbmxpbmVTaXplOiBcIndpZHRoXCIsXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJsdHJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwidHRiXCJcbn07XG5jb25zdCBIb3Jpem9udGFsVGJSdGwgPSB7XG4gICAgLi4uSG9yaXpvbnRhbFRiTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcbn07XG5jb25zdCBWZXJ0aWNhbFJsTHRyID0ge1xuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJydGxcIixcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgIGlubGluZVNpemU6IFwiaGVpZ2h0XCIsXG4gICAgYmxvY2tTaXplOiBcIndpZHRoXCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJydGxcIlxufTtcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbEx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCJcbn07XG5jb25zdCBTaWRld2F5c1JsTHRyID0geyAuLi5WZXJ0aWNhbFJsTHRyIH07XG5jb25zdCBTaWRld2F5c1JsUnRsID0geyAuLi5WZXJ0aWNhbFJsUnRsIH07XG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXG59O1xuY29uc3QgVmVydGljYWxMclJ0bCA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsUnRsLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFNpZGV3YXlzTHRMdHIgPSB7XG4gICAgLi4uVmVydGljYWxMckx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxufTtcbmNvbnN0IFNpZGV3YXlzTHRSdGwgPSB7XG4gICAgLi4uU2lkZXdheXNMdEx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCJcbn07XG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XG4gICAgbHRyOiBIb3Jpem9udGFsVGJMdHIsXG4gICAgcnRsOiBIb3Jpem9udGFsVGJSdGxcbn07XG5jb25zdCBWZXJ0aWNhbFJsID0ge1xuICAgIGx0cjogVmVydGljYWxSbEx0cixcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcbn07XG5jb25zdCBWZXJ0aWNhbExyID0ge1xuICAgIGx0cjogVmVydGljYWxMckx0cixcbiAgICBydGw6IFZlcnRpY2FsTHJSdGxcbn07XG5jb25zdCBTaWRld2F5c1JsID0ge1xuICAgIGx0cjogU2lkZXdheXNSbEx0cixcbiAgICBydGw6IFNpZGV3YXlzUmxSdGxcbn07XG5jb25zdCBTaWRld2F5c0xyID0ge1xuICAgIGx0cjogU2lkZXdheXNMdEx0cixcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcbn07XG5jb25zdCBXcml0aW5nTW9kZXMgPSB7XG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcbiAgICBcInZlcnRpY2FsLWxyXCI6IFZlcnRpY2FsTHIsXG4gICAgXCJ2ZXJ0aWNhbC1ybFwiOiBWZXJ0aWNhbFJsLFxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcbiAgICBcInNpZGV3YXlzLXJsXCI6IFNpZGV3YXlzUmxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgYXMgdXNlU3RhdGVQIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBTbGlnaHRseSBlbmhhbmNlZCB2ZXJzaW9uIG9mIGB1c2VTdGF0ZWAgdGhhdCBpbmNsdWRlcyBhIGdldHRlciB0aGF0IHJlbWFpbnMgY29uc3RhbnRcbiAqIChpLmUuIHlvdSBjYW4gdXNlIGl0IGluIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaXQgYmVpbmcgYSBkZXBlbmRlbmN5KS5cbiAqXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgLy8gV2Uga2VlcCBib3RoLCBidXQgb3ZlcnJyaWRlIHRoZSBgc2V0U3RhdGVgIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlUF0gPSB1c2VTdGF0ZVAoaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhdGUpO1xuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0VmFsdWUgPSBjYWxsYmFjayhwcmV2VmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZVAodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdldFN0YXRlID0gKCkgPT4geyByZXR1cm4gcmVmLmN1cnJlbnQ7IH07XG4gICAgY29uc29sZS5hc3NlcnQocmVmLmN1cnJlbnQgPT09IHN0YXRlIHx8ICh0eXBlb2Ygc3RhdGUgPT09IFwibnVtYmVyXCIgJiYgaXNOYU4oc3RhdGUpKSk7XG4gICAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGUsIGdldFN0YXRlXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuY29uc3QgVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Xy1cIjtcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMGIxMDAwMDAwKTtcbn1cbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcbiAgICByZXR1cm4gW3JhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCldO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcbn1cbi8qKlxuICogUmV0dXJucyBhIGhvb2sgdGhhdCBtb2RpZmllcyBhIHNldCBvZiBwcm9wcyB0byBwcm92aWRlIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIGlmIG9uZSB3YXMgbm90IHByb3ZpZGVkLlxuICpcbiAqIElmIHlvdSdkIGxpa2UgdG8gdXNlIHRoZSBJRCBpbiBhIHByb3BlcnR5IHRoYXQncyAqbm90KiBuYW1lZCBgaWRgIChsaWtlIGBmb3JgIG9yIGBhcmlhLWxhYmVsbGVkYnlgIG9yIHdoYXRub3QpLCBgdXNlUmVmZXJlbmNlZElkUHJvcHNgIGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQW5kIHRoZSByYW5kb21seS1nZW5lcmF0ZWQgaWQgaXRzZWxmIGlzIGFsc28gcHJvdmlkZWQgaW4gY2FzZSB5b3Ugd2FudCB0byBoYW5kbGUgdGhlIGxvZ2ljIHlvdXJzZWxmIHdpdGhvdXQgYHVzZU1lcmdlZFByb3BzYC5cbiAqXG4gKiBVbmxpa2UgbW9zdCBvdGhlciBgdXNlKlByb3BzYCBob29rcywgdGhlc2UgYXJlIG1vc3RseSBzdGFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSYW5kb21JZCh7IHByZWZpeCB9ID0ge30pIHtcbiAgICBjb25zdCBbcmFuZG9tSWQsIHNldFJhbmRvbUlkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XG4gICAgY29uc3QgW3dhdGNoUHJlZml4VXBkYXRlcywgc2V0V2F0Y2hQcmVmaXhVcGRhdGVzLCBnZXRXYXRjaFByZWZpeFVwZGF0ZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdhdGNoUHJlZml4VXBkYXRlcyA9IGdldFdhdGNoUHJlZml4VXBkYXRlcygpO1xuICAgICAgICBpZiAod2F0Y2hQcmVmaXhVcGRhdGVzKVxuICAgICAgICAgICAgc2V0UmFuZG9tSWQoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpKTtcbiAgICAgICAgc2V0V2F0Y2hQcmVmaXhVcGRhdGVzKHRydWUpO1xuICAgIH0sIFtwcmVmaXhdKTtcbiAgICAvLyBXaGF0ZXZlciBJRCB3YXMgbW9zdCByZWNlbnRseSB1c2VkIGJ5IHRoZSBhY3R1YWwgXCJpZFwiIHByb3AuXG4gICAgLy8gVXNlZCBzbyB0aGF0IGFueSBJRC1yZWZlcmVuY2luZyBwcm9wcyBkb24ndCBuZWVkIHRvIHByb3ZpZGUgdGhlIHNhbWUgdmFsdWUuXG4gICAgLy9cbiAgICAvLyBUT0RPOiBUaGlzIGRvZXMgbWVhbiB0aGF0IG9uIHRoZSBmaXJzdCByZW5kZXIsIGlmIGp1c3QgdGhlIElEIGlzIHByb3ZpZGVkLFxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSB0ZW1wb3JhcnkgbWlzbWF0Y2gsIGJ1dCBpdCdzIGNvcnJlY3RlZCBiZWZvcmUgcmVuZGVyaW5nIGZpbmlzaGVzLlxuICAgIC8vIElzIHRoaXMgb2theT9cbiAgICBjb25zdCBbdXNlZElkLCBzZXRVc2VkSWQsIGdldFVzZWRJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IHVzZVJlZmVyZW5jZWRJZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmVmZXJlbmNlZElkUHJvcHMoaWRQcm9wTmFtZSkge1xuICAgICAgICBjb25zdCByZXQgPSBmdW5jdGlvbiAoeyBbaWRQcm9wTmFtZV06IGdpdmVuSWQsIC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZWRJZDIgPSAoZ2l2ZW5JZCA/PyB1c2VkSWQgPz8gcmFuZG9tSWQgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIGlmIChpZFByb3BOYW1lID09PSBcImlkXCIpXG4gICAgICAgICAgICAgICAgc2V0VXNlZElkKHVzZWRJZDIpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBbaWRQcm9wTmFtZV06IHVzZWRJZDIgfSwgcHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0sIFt1c2VkSWQsIHJhbmRvbUlkXSk7XG4gICAgY29uc3QgdXNlUmFuZG9tSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJhbmRvbUlkUHJvcHMocCkge1xuICAgICAgICByZXR1cm4gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJpZFwiKShwKTtcbiAgICB9LCBbdXNlUmVmZXJlbmNlZElkUHJvcHNdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByYW5kb21JZCxcbiAgICAgICAgaWQ6IHVzZWRJZCxcbiAgICAgICAgZ2V0SWQ6IGdldFVzZWRJZCxcbiAgICAgICAgdXNlUmFuZG9tSWRQcm9wcyxcbiAgICAgICAgdXNlUmVmZXJlbmNlZElkUHJvcHNcbiAgICB9O1xufVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQodSkgeyB9XG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3Moc3RyKSB7IH1cbmZ1bmN0aW9uIGFjY2VwdHNDc3MocHJvcCkgeyB9XG5mdW5jdGlvbiB0ZXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyBpZCwgcmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCgpO1xuICAgIC8vY29uc3QgcDFhOiBNZXJnZWRQcm9wczx7IGlkOiBzdHJpbmcgfSwgeyAgfT4gPSB1c2VSYW5kb21JZFByb3BzKHsgaWQ6IHVuZGVmaW5lZCB9KVxuICAgIGNvbnN0IHAxYiA9IHVzZVJhbmRvbUlkUHJvcHMoeyAuLi5wcm9wcywgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwMmEgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJiID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyAuLi5wcm9wcywgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwMmMgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwcm9wcyk7XG4gICAgY29uc3QgcDNhID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHAzYiA9IHVzZVJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyAuLi5wcm9wcywgaWQ6IHVuZGVmaW5lZCB9KSk7XG4gICAgY29uc3QgcDRhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikodXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHA0YiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHAxYik7XG4gICAgLy9wMWEuaWQ7XG4gICAgcDFiLmlkO1xuICAgIHAyYVtcImZvclwiXTtcbiAgICBwMmJbXCJmb3JcIl07XG4gICAgcDJjW1wiZm9yXCJdO1xuICAgIHAzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAzYVtcImZvclwiXT8uY29uY2F0KFwiXCIpO1xuICAgIHAzYltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xuICAgIHA0YVtcImZvclwiXT8uY29uY2F0KFwiXCIpO1xuICAgIHA0YltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xuICAgIHA0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IEl0J3MgYmVjYXVzZSBpdCByZXNvbHZlcyB0byBcImlkOiB1bmRlZmluZWQgJiBzdHJpbmdcIiAtLSB0aGlzIHNob3VsZG4ndCBoYXBwZW5cbiAgICBwNGIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMWIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKHAxYi5zdHlsZSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBwMmEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMmIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKHAyYi5zdHlsZSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBwM2Euc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwM2Iuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDRhLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwNGIuc3R5bGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJhbmRvbS1pZC5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tSWQgfSBmcm9tIFwiLi91c2UtcmFuZG9tLWlkXCI7XG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcbmNvbnN0IHRvUnVuID0gbmV3IE1hcCgpO1xuY29uc3QgY29tbWl0TmFtZSA9IChcIl9fY1wiIGluIG9wdGlvbnMgPyBcIl9fY1wiIDogXCJjb21taXRcIiBpbiBvcHRpb25zID8gXCJjb21taXRcIiA6IFwiX2NvbW1pdFwiIGluIG9wdGlvbnMgPyBcIl9jb21taXRcIiA6IFwiX19jXCIpO1xuLy8gVE9ETzogV2hldGhlciB0aGlzIGdvZXMgaW4gb3B0aW9ucy5kaWZmZWQgb3Igb3B0aW9ucy5fY29tbWl0XG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXG4vLyBSaWdodCBub3csIHVzaW5nIG9wdGlvbnMuX2NvbW1pdCBoYXMgdGhlIHByb2JsZW0gb2YgcnVubmluZ1xuLy8gKmFmdGVyKiByZWZzIGFyZSBhcHBsaWVkLCBidXQgd2UgbmVlZCB0byBjb21lIGJlZm9yZSBldmVuIHRoYXRcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxuLy8gXG4vLyBBbHNvIGl0J3MgcHJpdmF0ZS5cbmNvbnN0IG9yaWdpbmFsQ29tbWl0ID0gb3B0aW9uc1tjb21taXROYW1lXTtcbmNvbnN0IG5ld0NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcbiAgICBmb3IgKGxldCBbaWQsIGVmZmVjdEluZm9dIG9mIHRvUnVuKSB7XG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGVmZmVjdEluZm8uaW5wdXRzKSkge1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwPy4oKTtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cCA9IGVmZmVjdEluZm8uZWZmZWN0KCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGVmZmVjdEluZm8uaW5wdXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1J1bi5jbGVhcigpO1xuICAgIG9yaWdpbmFsQ29tbWl0Py4odm5vZGUsIGNvbW1pdFF1ZXVlKTtcbn07XG5vcHRpb25zW2NvbW1pdE5hbWVdID0gbmV3Q29tbWl0O1xuLyoqXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXG4gKlxuICogRXZlcnkgcmVuZGVyLCB3ZSBzZW5kIHRoZSBhcmd1bWVudHMgdG8gYmUgZXZhbHVhdGVkIGFmdGVyIGRpZmZpbmcgaGFzIGNvbXBsZXRlZCxcbiAqIHdoaWNoIGhhcHBlbnMgYmVmb3JlLlxuICpcbiAqIEBwYXJhbSBlZmZlY3RcbiAqIEBwYXJhbSBpbnB1dHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZm9yZUxheW91dEVmZmVjdChlZmZlY3QsIGlucHV0cykge1xuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XG4gICAgICAgIH07XG4gICAgfSwgW2lkXSk7XG59XG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG4gICAgcmV0dXJuICEhKCFvbGRBcmdzIHx8XG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VCZWZvcmVMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtYmVmb3JlLWxheW91dC1lZmZlY3RcIjtcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XG4vKipcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cbiAqIHJlZiBhc3NpZ25tZW50LiBUaGlzIG1lYW5zIHRoaXMgZ2V0dGVyIGlzIHNhZmUgdG8gdXNlIGFueXdoZXJlICoqKmV4Y2VwdCB0aGUgcmVuZGVyIHBoYXNlKioqLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgdXNlQmVmb3JlTGF5b3V0RWZmZWN0KCgpID0+IHsgcmVmLmN1cnJlbnQgPSB2YWx1ZTsgfSwgW3ZhbHVlXSk7XG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50ID09PSBVbnNldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVHZXR0ZXIoKSBjYW5ub3QgYmUgY2FsbGVkIGR1cmluZyByZW5kZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbi8qKlxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxuICogc28gdGhhdCBpdCBjYW4gYmUgZXhjbHVkZWQgZnJvbSB0aGUgZGVwZW5kZW5jeSBhcnJheXMgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMuXG4gKlxuICogRG8gbm90IHVzZSBkdXJpbmcgdGhlIHJlbmRlciBwaGFzZSEgIGB1c2VMYXlvdXRFZmZlY3RgIGlzIGZpbmUgdGhvdWdoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlQ2FsbGJhY2soZm4pIHtcbiAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIgPSB1c2VTdGFibGVHZXR0ZXIoZm4pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoLi4uYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudENhbGxiYWNrR2V0dGVyKCkoLi4uYXJncyk7XG4gICAgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1jYWxsYmFjay5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgYXMgdXNlRWZmZWN0TmF0aXZlLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlRWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKiBAcGFyYW0gaW1wbCBZb3UgY2FuIGNob29zZSB3aGV0aGVyIHRvIHVzZSBgdXNlRWZmZWN0YCBvciBgdXNlTGF5b3V0RWZmZWN0YCBieVxuICogcGFzc2luZyBvbmUgb2YgdGhlbSBhcyB0aGlzIGFyZ3VtZW50LiBCeSBkZWZhdWx0LCBpdCdzIGB1c2VFZmZlY3RgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCBpbXBsID0gdXNlRWZmZWN0TmF0aXZlKSB7XG4gICAgY29uc3QgcHJldklucHV0cyA9IHVzZVJlZih1bmRlZmluZWQpO1xuICAgIGNvbnN0IGVmZmVjdDIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjaGFuZ2VzID0gW107XG4gICAgICAgIGlmIChpbnB1dHMgJiYgcHJldklucHV0cy5jdXJyZW50KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWF4KHByZXZJbnB1dHMuY3VycmVudC5sZW5ndGgsIGlucHV0cy5sZW5ndGgpOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldklucHV0cy5jdXJyZW50W2ldICE9IGlucHV0c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc1tpXSA9IHsgZnJvbTogcHJldklucHV0cy5jdXJyZW50W2ldLCB0bzogaW5wdXRzW2ldIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmV0ID0gZWZmZWN0KHByZXZJbnB1dHMuY3VycmVudCwgY2hhbmdlcyk7XG4gICAgICAgIHByZXZJbnB1dHMuY3VycmVudCA9IGlucHV0cztcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICAgIGltcGwoZWZmZWN0MiwgaW5wdXRzKTtcbn1cbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IGFzIHVzZUxheW91dEVmZmVjdE5hdGl2ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCIuL3VzZS1lZmZlY3RcIjtcbi8qKlxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcbiAqIHRoYXQgYWxsb3cgYWNjZXNzaW5nIHRoZSBwcmV2aW91cyB2YWx1ZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhcyB3ZWxsIGFzIHRoZSBjaGFuZ2VzIHRoYXQgY2F1c2VkIHRoZSBob29rIHRvIGJlIGNhbGxlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICpcbiAqIEBwYXJhbSBlZmZlY3RcbiAqIEBwYXJhbSBpbnB1dHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChlZmZlY3QsIGlucHV0cykge1xuICAgIHJldHVybiB1c2VFZmZlY3QoZWZmZWN0LCBpbnB1dHMsIHVzZUxheW91dEVmZmVjdE5hdGl2ZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dCh7IHRpbWVvdXQsIGNhbGxiYWNrLCB0cmlnZ2VySW5kZXggfSkge1xuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4geyBzdGFydFRpbWVSZWYuY3VycmVudCA9IG51bGw7IGNhbGxiYWNrKCk7IH0pO1xuICAgIGNvbnN0IGdldFRpbWVvdXQgPSB1c2VTdGFibGVHZXR0ZXIodGltZW91dCk7XG4gICAgLy8gU2V0IGFueSB0aW1lIHdlIHN0YXJ0IHRpbWVvdXQuXG4gICAgLy8gVW5zZXQgYW55IHRpbWUgdGhlIHRpbWVvdXQgY29tcGxldGVzXG4gICAgY29uc3Qgc3RhcnRUaW1lUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHRpbWVvdXRJc051bGwgPSAodGltZW91dCA9PSBudWxsKTtcbiAgICAvLyBBbnkgdGltZSB0aGUgdHJpZ2dlckluZGV4IGNoYW5nZXMgKGluY2x1ZGluZyBvbiBtb3VudClcbiAgICAvLyByZXN0YXJ0IHRoZSB0aW1lb3V0LiAgVGhlIHRpbWVvdXQgZG9lcyBOT1QgcmVzZXRcbiAgICAvLyB3aGVuIHRoZSBkdXJhdGlvbiBvciBjYWxsYmFjayBjaGFuZ2VzLCBvbmx5IHRyaWdnZXJJbmRleC5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXRpbWVvdXRJc051bGwpIHtcbiAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQodGltZW91dElzTnVsbCA9PSAodGltZW91dCA9PSBudWxsKSk7XG4gICAgICAgICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSArKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoc3RhYmxlQ2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFt0cmlnZ2VySW5kZXgsIHRpbWVvdXRJc051bGxdKTtcbiAgICBjb25zdCBnZXRFbGFwc2VkVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgrKG5ldyBEYXRlKCkpKSAtICgrKHN0YXJ0VGltZVJlZi5jdXJyZW50ID8/IG5ldyBEYXRlKCkpKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ2V0UmVtYWluaW5nVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcbiAgICAgICAgcmV0dXJuIHRpbWVvdXQgPT0gbnVsbCA/IG51bGwgOiBNYXRoLm1heCgwLCB0aW1lb3V0IC0gZ2V0RWxhcHNlZFRpbWUoKSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7IGdldEVsYXBzZWRUaW1lLCBnZXRSZW1haW5pbmdUaW1lIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGltZW91dC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlTG9naWNhbERpcmVjdGlvbiB9IGZyb20gXCIuL3VzZS1sb2dpY2FsLWRpcmVjdGlvblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCIuL3VzZS10aW1lb3V0XCI7XG4vKipcbiAqIFdoZW4gdXNlZCBpbiB0YW5kZW0gd2l0aCBgdXNlUm92aW5nVGFiSW5kZXhgLCBhbGxvd3MgY29udHJvbCBvZlxuICogdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdGhlIGFycm93IGtleXMuXG4gKlxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpbmVhck5hdmlnYXRpb24oeyBpbmRleCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdCwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9QcmV2LCBtYW5hZ2VkQ2hpbGRyZW4sIG5hdmlnYXRpb25EaXJlY3Rpb24sIGRpc2FibGVBcnJvd0tleXMsIGRpc2FibGVIb21lRW5kS2V5cyB9KSB7XG4gICAgbmF2aWdhdGlvbkRpcmVjdGlvbiA/Pz0gXCJlaXRoZXJcIjtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHRhYmJhYmxlIGluZGV4IG5ldmVyIGVzY2FwZXMgdGhlIGJvdW5kcyBvZiBhbGwgYXZhaWxhYmxlIGNoaWxkcmVuXG4gICAgLy8gVE9ETzogS2VlcCB0cmFjayBvZiB0aGUgb3JpZ2luYWwgaW5kZXggYW5kIGtlZXAgaXQsIGF0IGxlYXN0IHVudGlsIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZENvdW50ID4gMCAmJiBpbmRleCA+PSBjaGlsZENvdW50KSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtpbmRleCwgY2hpbGRDb3VudCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdF0pO1xuICAgIC8vIFRoZXNlIGFsbG93IHVzIHRvIG1hbmlwdWxhdGUgd2hhdCBvdXIgY3VycmVudCB0YWJiYWJsZSBjaGlsZCBpcy5cbiAgICAvKmNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleDogbnVtYmVyKSA9PiB7IHNldEluZGV4KGluZGV4IDwgMCA/IChtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICsgaW5kZXgpIDogaW5kZXgpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldEluZGV4KChpOiBudW1iZXIgfCBudWxsKSA9PiBpID09PSBudWxsPyBudWxsISA6IGkgPj0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDE/IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxIDogKytpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpIDwgMD8gMCA6IC0taSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvU3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgwKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9FbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgtMSk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTsqL1xuICAgIGNvbnN0IGdldEluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKGluZGV4KTtcbiAgICBjb25zdCB7IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMgfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oe30pO1xuICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaW5mbyA9IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGxldCBhbGxvd3NCbG9ja05hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImJsb2NrXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcbiAgICAgICAgbGV0IGFsbG93c0lubGluZU5hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImlubGluZVwiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwicnRsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVIb21lRW5kS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVIb21lRW5kS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4geyByZXR1cm4gdXNlTG9naWNhbERpcmVjdGlvblByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgcHJvcHMpKTsgfSwgW10pLFxuICAgIH07XG59XG4vKipcbiAqIEFsbG93cyBmb3IgdGhlIHNlbGVjdGlvbiBvZiBhIG1hbmFnZWQgY2hpbGQgYnkgdHlwaW5nIHRoZSBnaXZlbiB0ZXh0IGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAqXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dCwgc2V0SW5kZXggfSkge1xuICAgIC8vIEZvciB0eXBlYWhlYWQsIGtlZXAgdHJhY2sgb2Ygd2hhdCBvdXIgY3VycmVudCBcInNlYXJjaFwiIHN0cmluZyBpcyAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgLy8gYW5kIGFsc28gY2xlYXIgaXQgZXZlcnkgMTAwMCBtcyBzaW5jZSB0aGUgbGFzdCB0aW1lIGl0IGNoYW5nZWQuXG4gICAgLy8gTmV4dCwga2VlcCBhIG1hcHBpbmcgb2YgdHlwZWFoZWFkIHZhbHVlcyB0byBpbmRpY2VzIGZvciBmYXN0ZXIgc2VhcmNoaW5nLlxuICAgIC8vIEFuZCwgZm9yIHRoZSB1c2VyJ3Mgc2FrZSwgbGV0IHRoZW0ga25vdyB3aGVuIHRoZWlyIHR5cGVhaGVhZCBjYW4ndCBtYXRjaCBhbnl0aGluZyBhbnltb3JlXG4gICAgY29uc3QgW2N1cnJlbnRUeXBlYWhlYWQsIHNldEN1cnJlbnRUeXBlYWhlYWQsIGdldEN1cnJlbnRUeXBlYWhlYWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlVGltZW91dCh7IHRpbWVvdXQ6IHR5cGVhaGVhZFRpbWVvdXQgPz8gMTAwMCwgY2FsbGJhY2s6ICgpID0+IHsgc2V0Q3VycmVudFR5cGVhaGVhZChudWxsKTsgc2V0SW52YWxpZFR5cGVhaGVhZChudWxsKTsgfSwgdHJpZ2dlckluZGV4OiBjdXJyZW50VHlwZWFoZWFkIH0pO1xuICAgIGNvbnN0IHNvcnRlZFR5cGVhaGVhZEluZm8gPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IFtpbnZhbGlkVHlwZWFoZWFkLCBzZXRJbnZhbGlkVHlwZWFoZWFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBIYW5kbGUgdHlwZWFoZWFkIGZvciBpbnB1dCBtZXRob2QgZWRpdG9ycyBhcyB3ZWxsXG4gICAgLy8gRXNzZW50aWFsbHksIHdoZW4gYWN0aXZlLCBpZ25vcmUgZnVydGhlciBrZXlzIFxuICAgIC8vIGJlY2F1c2Ugd2UncmUgd2FpdGluZyBmb3IgYSBDb21wb3NpdGlvbkVuZCBldmVudFxuICAgIGNvbnN0IFtpbWVBY3RpdmUsIHNldEltZUFjdGl2ZSwgZ2V0SW1lQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBCZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50cyBmaXJlICphZnRlcioga2V5ZG93biBldmVudHMgXG4gICAgLy8gKGJ1dCB3aXRoaW4gdGhlIHNhbWUgdGFzaywgd2hpY2gsIFRPRE8sIGNvdWxkIGJlIGJyb3dzZXItZGVwZW5kZW50KSxcbiAgICAvLyB3ZSBjYW4gdXNlIHRoaXMgdG8ga2VlcCB0cmFjayBvZiB3aGljaCBldmVudCB3ZSdyZSBsaXN0ZW5pbmcgZm9yIG9uIHRoZSBmaXJzdCBrZXlkb3duLlxuICAgIGNvbnN0IFtuZXh0VHlwZWFoZWFkQ2hhciwgc2V0TmV4dFR5cGVhaGVhZENoYXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG5leHRUeXBlYWhlYWRDaGFyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHR5cGVhaGVhZCA9PiAoKHR5cGVhaGVhZCA/PyBcIlwiKSArIG5leHRUeXBlYWhlYWRDaGFyKSk7XG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihudWxsKTtcbiAgICAgICAgfVxuICAgIH0sIFtuZXh0VHlwZWFoZWFkQ2hhcl0pO1xuICAgIGNvbnN0IGNvbXBhcmF0b3JTaGFyZWQgPSB1c2VTdGFibGVDYWxsYmFjaygoc2FmZUxocywgc2FmZVJocykgPT4ge1xuICAgICAgICBsZXQgY29tcGFyZTtcbiAgICAgICAgLy8gRm9yIHRoZSBwdXJwb3NlcyBvZiB0eXBlYWhlYWQsIG9ubHkgY29tcGFyZSBhIHN0cmluZyBvZiB0aGUgc2FtZSBzaXplIGFzIG91ciBjdXJyZW50bHkgdHlwZWQgc3RyaW5nLlxuICAgICAgICAvLyBCeSBub3JtYWxpemluZyB0aGVtIGZpcnN0LCB3ZSBlbnN1cmUgdGhpcyBieXRlLWJ5LWJ5dGUgaGFuZGxpbmcgb2YgcmF3IGNoYXJhY3RlciBkYXRhIHdvcmtzIG91dCBva2F5LlxuICAgICAgICBzYWZlTGhzID0gc2FmZUxocy5ub3JtYWxpemUoXCJORkRcIik7XG4gICAgICAgIHNhZmVSaHMgPSBzYWZlUmhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcbiAgICAgICAgaWYgKGNvbGxhdG9yKVxuICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XG4gICAgICAgIHJldHVybiBjb21wYXJlO1xuICAgIH0pO1xuICAgIGNvbnN0IGluc2VydGluZ0NvbXBhcmF0b3IgPSB1c2VTdGFibGVDYWxsYmFjaygobGhzLCByaHMpID0+IHtcbiAgICAgICAgbGV0IGNvbXBhcmU7XG4gICAgICAgIGlmICh0eXBlb2YgbGhzID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiByaHMudGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmF0b3JTaGFyZWQobGhzLCByaHMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxocyAtIHJocztcbiAgICB9KTtcbiAgICBjb25zdCB0eXBlYWhlYWRDb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XG4gICAgICAgIGxldCBjb21wYXJlO1xuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIER1cmluZyB0eXBlYWhlYWQsIGFsbCBzdHJpbmdzIGxvbmdlciB0aGFuIG91cnMgc2hvdWxkIGJlIHRydW5jYXRlZFxuICAgICAgICAgICAgLy8gc28gdGhhdCB0aGV5J3JlIGFsbCBjb25zaWRlcmVkIGVxdWFsbHkgYnkgdGhhdCBwb2ludC5cbiAgICAgICAgICAgIHJldHVybiBjb21wYXJhdG9yU2hhcmVkKGxocywgcmhzLnRleHQuc3Vic3RyaW5nKDAsIGxocy5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGhzIC0gcmhzO1xuICAgIH0pO1xuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvblN0YXJ0ID0gKGUpID0+IHsgc2V0SW1lQWN0aXZlKHRydWUpOyB9O1xuICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uRW5kID0gKGUpID0+IHtcbiAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGUuZGF0YSk7XG4gICAgICAgICAgICBzZXRJbWVBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1lQWN0aXZlID0gZ2V0SW1lQWN0aXZlKCk7XG4gICAgICAgICAgICBsZXQga2V5ID0gZS5rZXk7XG4gICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICghaW1lQWN0aXZlICYmIGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdheSB0aGF0IGRvZXNuJ3Qgc3BsaXQgVVRGLTE2IHN1cnJvZ2F0ZXMuXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0ID0+IHQgPT09IG51bGwgPyBudWxsIDogWy4uLnRdLnJldmVyc2UoKS5zbGljZSgxKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIGtleSBwcm9wZXJ0eSByZXByZXNlbnRzIHRoZSB0eXBlZCBjaGFyYWN0ZXIgT1IgdGhlIFwibmFtZWQga2V5IGF0dHJpYnV0ZVwiIG9mIHRoZSBrZXkgcHJlc3NlZC5cbiAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gZGVmaW5pdGUgd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UsIGJ1dCBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzXG4gICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gb25lLWNoYXJhY3RlciBuYW1lcywgYW5kIHRoZXJlIGFyZSBubyBub24tQVNDSUktYWxwaGEgbmFtZXMuXG4gICAgICAgICAgICAvLyBUaHVzLCBhbnkgb25lLWNoYXJhY3RlciBvciBub24tQVNDSUkgdmFsdWUgZm9yIGBrZXlgIGlzICphbG1vc3QgY2VydGFpbmx5KiBhIHR5cGVkIGNoYXJhY3Rlci5cbiAgICAgICAgICAgIGNvbnN0IGlzQ2hhcmFjdGVyS2V5ID0gKGtleS5sZW5ndGggPT09IDEgfHwgIS9eW0EtWmEtel0vLnRlc3Qoa2V5KSk7XG4gICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwiIFwiICYmIChnZXRDdXJyZW50VHlwZWFoZWFkKCkgPz8gXCJcIikudHJpbSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGJlY2F1c2UgYSBzcGFjZWJhciBjYW4ndCBldmVyIFxuICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWF0ZSBhIHR5cGVhaGVhZCwgb25seSBjb250aW51ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgIC8vIChTcGVjaWZpY2FsbHksIGxldCB0aGUgZXZlbnQgY29udGludWUgcHJvcGFnYXRpb24gaW4gdGhpcyBjYXNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBXb24ndCBiZSB0cnVlIGZvciB0aGUgZmlyc3Qga2V5ZG93blxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2lsbCBiZSBvdmVyd3JpdHRlbiBiZWZvcmUgdXNlTGF5b3V0RWZmZWN0IGlzIGNhbGxlZFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhY3R1YWxseSBhcHBseSB0aGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0sIHByb3BzKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gSGFuZGxlIGNoYW5nZXMgaW4gdHlwZWFoZWFkIHRoYXQgY2F1c2UgY2hhbmdlcyB0byB0aGUgdGFiYmFibGUgaW5kZXhcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFR5cGVhaGVhZCAmJiBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc29ydGVkVHlwZWFoZWFkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCB0eXBlYWhlYWRDb21wYXJhdG9yKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZWRUeXBlYWhlYWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBoYXMgdHlwZWQgYW4gZW50cnkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgLy8gKG9yIG1vcmUgc3BlY2lmaWNhbGx5IFwiZm9yIHdoaWNoIHRoZXJlIGlzIG5vIGVudHJ5IHRoYXQgc3RhcnRzIHdpdGggdGhhdCBpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHNldEludmFsaWRUeXBlYWhlYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgV2Uga25vdyByb3VnaGx5IHdoZXJlLCBpbiB0aGUgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MsIG91ciBuZXh0IHR5cGVhaGVhZCBsb2NhdGlvbiBpcy5cbiAgICAgICAgICAgICAgICAgIEJ1dCByb3VnaGx5IGlzbid0IGdvb2QgZW5vdWdoIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBtYXRjaGVzLlxuICAgICAgICAgICAgICAgICAgVG8gY29udmVydCBvdXIgc29ydGVkIGluZGV4IHRvIHRoZSB1bnNvcnRlZCBpbmRleCB3ZSBuZWVkLCB3ZSBoYXZlIHRvIGZpbmQgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICBlbGVtZW50IHRoYXQgbWF0Y2hlcyB1cyAqYW5kKiAoaWYgYW55IHN1Y2ggZXhpc3QpIGlzICphZnRlciogb3VyIGN1cnJlbnQgc2VsZWN0aW9uLlxuXG4gICAgICAgICAgICAgICAgICBJbiBvdGhlciB3b3JkcywgdGhlIG9ubHkgd2F5IHR5cGVhaGVhZCBtb3ZlcyBiYWNrd2FyZHMgcmVsYXRpdmUgdG8gb3VyIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIGlzIGlmIHRoZSBvbmx5IG90aGVyIG9wdGlvbiBpcyBiZWhpbmQgdXMuXG5cbiAgICAgICAgICAgICAgICAgIEl0J3Mgbm90IHNwZWNpZmllZCBpbiBXQUktQVJJQSB3aGF0IHRvIGRvIGluIHRoYXQgY2FzZS4gIEkgc3VwcG9zZSB3cmFwIGJhY2sgdG8gdGhlIHN0YXJ0P1xuICAgICAgICAgICAgICAgICAgVGhvdWdoIHRoZXJlJ3MgYWxzbyBhIGNhc2UgZm9yIGp1c3QgZ29pbmcgdXB3YXJkcyB0byB0aGUgbmVhcmVzdCB0byBwcmV2ZW50IGp1bXBpbmVzcy5cbiAgICAgICAgICAgICAgICAgIEJ1dCBpZiB5b3UncmUgYWxyZWFkeSBkb2luZyB0eXBlYWhlYWQgb24gYW4gdW5zb3J0ZWQgbGlzdCwgbGlrZSwganVtcGluZXNzIGNhbid0IGJlIGF2b2lkZWQuXG4gICAgICAgICAgICAgICAgICBJIGR1bm5vLiBHb2luZyBiYWNrIHRvIHRoZSBzdGFydCBpcyB0aGUgc2ltcGxpc3QgdGhvdWdoLlxuXG4gICAgICAgICAgICAgICAgICBCYXNpY2FsbHkgd2hhdCB0aGlzIGRvZXM6IFN0YXJ0aW5nIGZyb20gd2hlcmUgd2UgZm91bmQgb3Vyc2VsdmVzIGFmdGVyIG91ciBiaW5hcnkgc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgc2NhbiBiYWNrd2FyZHMgYW5kIGZvcndhcmRzIHRocm91Z2ggYWxsIGFkamFjZW50IGVudHJpZXMgdGhhdCBhbHNvIGNvbXBhcmUgZXF1YWxseSBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICB3ZSBjYW4gZmluZCB0aGUgb25lIHdob3NlIGB1bnNvcnRlZEluZGV4YCBpcyB0aGUgbG93ZXN0IGFtb25nc3QgYWxsIG90aGVyIGVxdWFsIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgIChhbmQgYWxzbyB0aGUgbG93ZXN0IGB1bnNvcnRlZEluZGV4YCB5YWRkYSB5YWRkYSBleGNlcHQgdGhhdCBpdCBjb21lcyBhZnRlciB1cykuXG5cbiAgICAgICAgICAgICAgICAgIFRPRE86IFRoZSBiaW5hcnkgc2VhcmNoIHN0YXJ0cyB0aGlzIG9mZiB3aXRoIGEgc29saWQgTyhsb2cgbiksIGJ1dCBvbmUtY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hlcyBhcmUsIHRoYW5rcyB0byBwaWdlb25ob2xlIHByaW5jaXBhbCwgZXZlbnR1YWxseSBndWFyYW50ZWVkIHRvIGJlY29tZVxuICAgICAgICAgICAgICAgICAgTyhuKmxvZyBuKS4gVGhpcyBpcyBhbm5veWluZyBidXQgcHJvYmFibHkgbm90IGVhc2lseSBzb2x2YWJsZT8gVGhlcmUgY291bGQgYmUgYW5cbiAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiBmb3Igb25lLWNoYXJhY3RlciBzdHJpbmdzLCBidXQgdGhhdCdzIGp1c3Qga2lja2luZyB0aGUgY2FuIGRvd25cbiAgICAgICAgICAgICAgICAgIHRoZSByb2FkLiBNYXliZSBvbmUgb3IgdHdvIGNoYXJhY3RlcnMgd291bGQgYmUgZ29vZCBlbm91Z2ggdGhvdWdoLlxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgYXJlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgY2FuZGlkYXRlcycgcG9zaXRpb25zIGluIGJvdGggb3VyIHNvcnRlZCBhcnJheSBhbmQgdGhlIHVuc29ydGVkIERPTS5cbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4QWxsID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgdHdvIGFyZSBvbmx5IHNldCBmb3IgZWxlbWVudHMgdGhhdCBhcmUgYWhlYWQgb2YgdXMsIGJ1dCB0aGUgcHJpbmNpcGxlJ3MgdGhlIHNhbWUgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQmVzdEZpdCA9ICh1KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhBbGwgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQpICYmIHUgPiAoZ2V0SW5kZXgoKSA/PyAtSW5maW5pdHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleE5leHQgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgdHlwZWFoZWFkQ29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCAmJiB0eXBlYWhlYWRDb21wYXJhdG9yKGN1cnJlbnRUeXBlYWhlYWQsIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleE5leHRdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleEFsbF0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFR5cGVhaGVhZF0pO1xuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IHRleHQsIC4uLmkgfSkgPT4ge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoZXJlIHRvIGluc2VydCB0aGlzIGl0ZW0uXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSBhbGwgaW5kZXggdmFsdWVzIHNob3VsZCBiZSB1bmlxdWUsIHRoZSByZXR1cm5lZCBzb3J0ZWRJbmRleFxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgcmVmZXIgdG8gYSBuZXcgbG9jYXRpb24gKGkuZS4gYmUgbmVnYXRpdmUpICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGluc2VydGluZ0NvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4IDwgMCB8fCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbc29ydGVkSW5kZXhdLnRleHQgPT0gdGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKC1zb3J0ZWRJbmRleCAtIDEsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBmaW5kIHdoZXJlIHdlIHdlcmUgYW5kIHJlbW92ZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFnYWluLCB3ZSBzaG91bGQgYWx3YXlzIGZpbmQgb3Vyc2VsdmVzIGJlY2F1c2UgdGhlcmUgc2hvdWxkIGJlIG5vIGR1cGxpY2F0ZSB2YWx1ZXMgaWYgZWFjaCBpbmRleCBpcyB1bmlxdWUuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGluc2VydGluZ0NvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA+PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RleHRdKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcbiAgICB9O1xufVxuLyoqXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXG4gKlxuICogSXQncyB1c2VkIGhlcmUgdG8gcXVpY2tseSBmaW5kIGEgZ29vZCBzcG90IHRvIHN0YXJ0IHNlYXJjaGluZyBmb3Igb3VyIG5leHQgdHlwZWFoZWFkIGNhbmRpZGF0ZS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB3YW50ZWQgVGhlIHZhbHVlIHlvdSdkIGxpa2UgdG8gZmluZFxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyZXMgYHdhbnRlZGAgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBpbiBgYXJyYXlgXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXG4gKiBUaGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBudW1iZXIsIG1pbnVzIG9uZSwgaXMgd2hlcmUgYHdhbnRlZGAgKndvdWxkKiBiZSBmb3VuZCBpZiBpdCAqd2FzKiBpbiBgYXJyYXlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xuICAgIHZhciBmaXJzdEluZGV4ID0gMDtcbiAgICB2YXIgbGFzdEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgdmFyIHRlc3RJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSA+PiAxO1xuICAgICAgICB2YXIgY29tcGFyaXNvblJlc3VsdCA9IGNvbXBhcmF0b3Iod2FudGVkLCBhcnJheVt0ZXN0SW5kZXhdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gdGVzdEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gdGVzdEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC1maXJzdEluZGV4IC0gMTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICogQWxsb3dzIGEgcGFyZW50IGNvbXBvbmVudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgY2VydGFpblxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cbiAqXG4gKiBUaGlzIGhvb2sgaXMgc2xpZ2h0bHkgbW9yZSBjb21wbGljYXRlZCBpbiB0aGF0IGl0IHJldHVybnMgYm90aCBhXG4gKiBwcm9wLW1vZGlmeWluZyBob29rLCBidXQgYWxzbyBhIGhvb2sgdGhhdCBlYWNoIGNoaWxkIHdpbGwgbmVlZFxuICogdG8gdXNlOiBgdXNlTWFuYWdlZENoaWxkYC4gIEl0J3Mgc3RhYmxlIGFjcm9zcyByZW5kZXJzLCBzbyBqdXN0XG4gKiB0b3NzIGl0IGludG8gYSBgQ29udGV4dGAgc28gdGhlIGNoaWxkcmVuIGNhbiBoYXZlIGFjY2VzcyB0byBpdC5cbiAqIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHRoZSBjaGlsZCB3aXRoIHRoZSBwYXJlbnQgYW5kIHByb3ZpZGVzXG4gKiBpdCB3aXRoIGFueSByZXF1ZXN0ZWQgaW5mb3JtYXRpb24sIGJ1dCBkb2Vzbid0IGRvIGFueXRoaW5nIGVsc2VcbiAqIHVudGlsIGl0IHVubW91bnRzIGFuZCByZXRyYWN0cyB0aGF0IGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRNYW5hZ2VyKCkge1xuICAgIC8vIFRoaXMgaXMgYmxpbmRseSB1cGRhdGVkIGFueSB0aW1lIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzIGl0c2VsZi5cbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXG4gICAgLy8gd2UgYWxzbyByZS1yZW5kZXIuXG4gICAgY29uc3QgW2NoaWxkVXBkYXRlSW5kZXgsIHNldENoaWxkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Nb3VudGVkLCBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCwgZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgc2V0VG90YWxDaGlsZHJlblVub3VudGVkLCBnZXRUb3RhbENoaWxkcmVuVW5vdW50ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkID0gdG90YWxDaGlsZHJlbk1vdW50ZWQgLSB0b3RhbENoaWxkcmVuVW5vdW50ZWQ7XG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdIC8qKiBUT0RPOiBBbnkgcHJvYmxlbXMgY2F1c2VkIGJ5IHVzaW5nIGFuIGFycmF5IHdoZW4gaXQgc2hvdWxkIGJlIGFuIG9iamVjdD8gKi8pO1xuICAgIGNvbnN0IG1vdW50ZWRDaGlsZHJlbiA9IHVzZVJlZihbXSk7XG4gICAgY29uc3QgbW91bnRPcmRlciA9IHVzZVJlZihuZXcgTWFwKCkpO1xuICAgIGNvbnN0IGluZGljZXNCeUVsZW1lbnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBkZWxldGVkSW5kaWNlcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xuICAgIC8vIFVzZWQgdG8ga2VlcCB0cmFjayBvZiBpbmRpY2VzIHRoYXQgaGF2ZSBcIm92ZXItbW91bnRlZFwiIGFuZCBieSBob3cgbXVjaC5cbiAgICAvLyBXZSBuZWVkIHRoaXMgc28gdGhhdCB3ZSBkb24ndCBlcmFzZSBzYXZlZCBpbmZvcm1hdGlvbiB3aGVuIGEgY29tcG9uZW50XG4gICAgLy8gXCJvdmVybW91bnRzXCIgb3ZlciBhbm90aGVyIHdoaWNoIHRoZW4sIGNvcnJlY3RseSwgc3dpdGNoZXMgKml0c2VsZiogdG8gc29tZXRoaW5nIGVsc2UuXG4gICAgLy8gSW4gZ2VuZXJhbCwgdGhpcyBzaG91bGQgb25seSBoYXBwZW4gd2hlbiBjb21wb25lbnRzIGFyZSBzd2FwcGluZyBiZXR3ZWVuIGluZGljZXMuXG4gICAgLy8gQnkgdGhlIHRpbWUgdGhleSdyZSBkb25lLCB0aGlzIG1hcCBzaG91bGQgYmUgYWxsIDBzIGFnYWluLCBhdCB3aGljaCBwb2ludFxuICAgIC8vIGl0J3Mgb2theSB0byBhY3R1YWxseSBydW4gdGhlIHVubW91bnQgY29kZS5cbiAgICAvLyBcbiAgICAvLyBUT0RPOiB0aHJvdyBhIGNvbnNvbGUuYXNzZXJ0IHNvbWV3aGVyZSB0byBtYWtlIHVwIGZvciB0aGUgbG9zdCBcbiAgICAvLyBcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVyd3JpdGUgdGhpcyBjaGlsZCdzIGluZGV4IVwiIGFzc2VydGlvbi5cbiAgICAvLyBOYW1lbHksIGlzIHRoaXMgbWFwIGFsbCAwcyB3aGVuIHRoZSBwYXJlbnQgZWxlbWVudCByZS1yZW5kZXJzPyBcbiAgICAvLyBQcm9iYWJseSBub3QgYmVjYXVzZSBvZiBzZXRDaGlsZFVwZGF0ZUluZGV4XG4gICAgY29uc3Qgb3Zlcm1vdW50Q291bnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBnZXRNb3VudEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7IHJldHVybiBtb3VudE9yZGVyLmN1cnJlbnQuZ2V0KGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5zZXQoZWxlbWVudCwgaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnQuZGVsZXRlKGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmFkZChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZm8uaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFttYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggLSAxXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pIH0pO1xuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWQoKTtcbiAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5zZXQoaW5mby5pbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcbiAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKHQgPT4gKyt0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW91bnRPcmRlci5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBtb3VudGVkQ2hpbGRyZW4uY3VycmVudFtpbmRleF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCh0ID0+ICsrdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbaW5mby5pbmRleF0pO1xuICAgICAgICAvLyBBbnkgdGltZSBvdXIgY2hpbGQgcHJvcHMgY2hhbmdlLCBtYWtlIHRoYXQgaW5mb3JtYXRpb24gYXZhaWxhYmxlIGdlbmVyYWxseS5cbiAgICAgICAgLy8gKkRvbid0IHJlLXJlbmRlciosIG90aGVyd2lzZSB3ZSdkIGJlIHN0dWNrIGluIGFuXG4gICAgICAgIC8vIGluZmluaXRlIGxvb3AgZXZlcnkgdGltZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb24gaXMgcGFzc2VkLlxuICAgICAgICAvLyBJdCBjb21lcyBpbiBmcm9tIHRoZSBwcm9wcyBzbyB0aGUgY2hpbGQgd2FzIGFscmVhZHkgdXBkYXRlZCBieSBpdCAtLVxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBwYXJlbnQgdG8gcmUtcmVuZGVyIGV2ZXJ5IHNpbmdsZSBjaGlsZCBhbnkgdGltZVxuICAgICAgICAvLyBcIm9uQ2xpY2tcIiB1cGRhdGVzIG9yIHdoYXRldmVyLiAgVGhlIHJlbGV2YW50IGNoaWxkIGFscmVhZHkga25vd3MsXG4gICAgICAgIC8vIGFuZCB0aGF0J3Mgd2hhdCBtYXR0ZXJzLlxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xuICAgICAgICB9LCBbLi4uT2JqZWN0LmVudHJpZXMoaW5mbykuZmxhdCgpXSk7XG4gICAgICAgIHJldHVybiB7IGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTWFuYWdlZENoaWxkLFxuICAgICAgICBjaGlsZENvdW50OiBjaGlsZHJlbkN1cnJlbnRseU1vdW50ZWQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQsXG4gICAgICAgIG1vdW50ZWRDaGlsZHJlbjogbW91bnRlZENoaWxkcmVuLmN1cnJlbnQsXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQ6IGluZGljZXNCeUVsZW1lbnQuY3VycmVudCxcbiAgICAgICAgdG90YWxDaGlsZHJlbk1vdW50ZWQsXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZCxcbiAgICAgICAgZ2V0TW91bnRJbmRleCxcbiAgICAgICAgZGVsZXRlZEluZGljZXM6IGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnRcbiAgICB9O1xufVxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxldHRpbmcgY2hpbGRyZW4ga25vdyB3aGVuIHRoZXkgYXJlIG9yIGFyZSBub3QgdGhlXG4gKiBjdXJyZW50IHNlbGVjdGVkL2V4cGFuZGVkL2ZvY3VzZWQvd2hhdGV2ZXIgY2hpbGQuXG4gKlxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIHdoZW4gY2hpbGRyZW4gYXJlIG1vdW50ZWQgJiB1bm1vdW50ZWQgYW5kIHN1Y2guXG4gKlxuICogV2hpbGUgaXQgd2lsbCBiZSBjYWxsZWQgb25jZSBmb3IgZXZlcnkgY2hpbGQgb24gbW91bnQsIGFmdGVyIHRoYXQgc2V0RmxhZ1xuICogaXMgZ3VhcmFudGVlZCB0byBvbmx5IGJlIGNhbGxlZCBvbmNlIG9uIGFjdGl2YXRpb24gYW5kIG9uY2Ugb24gZGVhY3RpdmF0aW9uLFxuICogc28gaXQncyBnZW5lcmFsbHkgc2FmZSB0byBwdXQgc2lkZSBlZmZlY3RzIGluc2lkZSBpZiBuZWNlc3NhcnkuXG4gKiBJdCdzIGFsc28gc2FmZSB0byBtYWtlIGl0IG5vbi1zdGFibGUuXG4gKlxuICogQHBhcmFtIGFjdGl2YXRlZEluZGV4IFdoYXQgaW5kZXggdGhlIGN1cnJlbnQgc2VsZWN0ZWQgKGV0Yy4pIGNoaWxkIGlzXG4gKiBAcGFyYW0gbGVuZ3RoIEhvdyBtYW55IGNoaWxkcmVuIGV4aXN0IChhcyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKVxuICogQHBhcmFtIHNldEZsYWcgQSBmdW5jdGlvbiB0aGF0IHByb2JhYmx5IGxvb2tzIGxpa2UgKGksIGZsYWcpID0+IG1hbmFnZWRDaGlsZHJlbltpXS5zZXRBY3RpdmUoZmxhZylcbiAqIEBwYXJhbSB1c2VFZmZlY3QgV2hpY2ggdmVyc2lvbiBvZiB1c2VFZmZlY3QgdG8gdXNlLiBEZWZhdWx0IGlzIGB1c2VMYXlvdXRFZmZlY3RgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRGbGFnKHsgYWN0aXZhdGVkSW5kZXgsIGNsb3Nlc3RGaXQsIG1hbmFnZWRDaGlsZHJlbiwgc2V0Q2hpbGRGbGFnLCBnZXRDaGlsZEZsYWcsIHVzZUVmZmVjdCB9KSB7XG4gICAgdXNlRWZmZWN0ID8/PSB1c2VMYXlvdXRFZmZlY3Q7XG4gICAgaWYgKGNsb3Nlc3RGaXQpXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBhY3RpdmF0ZWRJbmRleCA9PSBcIm51bWJlclwiIHx8IGFjdGl2YXRlZEluZGV4ID09IG51bGwpO1xuICAgIC8vIFdoZW5ldmVyIHdlIHJlLXJlbmRlciwgbWFrZSBzdXJlIHRoYXQgYW55IGNoaWxkcmVuIHRoYXQgaGF2ZSBtb3VudGVkXG4gICAgLy8gaGF2ZSB0aGVpciBmbGFncyBwcm9wZXJseSBzZXQuICBXZSBrbm93IGl0J3MgdW5zZXQgaWYgaXQgd2FzIG51bGwsXG4gICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBqdXN0IHNldCBpdCB0byB0cnVlIG9yIGZhbHNlLlxuICAgIC8vXG4gICAgLy8gQW5kLCBJIG1lYW4sIGFzIGxvbmcgYXMgd2UncmUgYWxyZWFkeSBpdGVyYXRpbmcgdGhyb3VnaCBldmVyeSBjaGlsZFxuICAgIC8vIG9uIGV2ZXJ5IHJlbmRlciB0byBjaGVjayBmb3IgbmV3bHkgbW91bnRlZCBjaGlsZHJlbiwgbWlnaHQgYXMgd2VsbFxuICAgIC8vIGp1c3QgaGFuZGxlIGNoYW5nZWQgaW4gdGhlIGFjdGl2YXRlZEluZGV4IGhlcmUgdG9vLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IFdlIGhhdmUgbGltaXRlZCBpbmZvcm1hdGlvbiBhYm91dCB3aGVuIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzXG4gICAgICAgIC8vIGFuZCBzbyB3ZSBkb24ndCBrbm93IHdoZXJlIHRvIGxvb2sgZm9yIGFueSBudWxsIGVudHJpZXMgdGhhdCBuZWVkIGNoYW5naW5nLlxuICAgICAgICAvLyBXZSBrbm93IHdoZW4gYWN0aXZhdGVkSW5kZXggY2hhbmdlcyBhbmQgd2hhdCBpdCB3YXMsIGJ1dCBub3QgbXVjaCBlbHNlLlxuICAgICAgICAvLyBMb29waW5nIG92ZXIgZXZlcnkgY2hpbGQgKndvcmtzKiwgYW5kIGl0J3Mgbm90IGFuIGV4cGVuc2l2ZSBsb29wIGJ5IGFueSBtZWFucyxcbiAgICAgICAgLy8gYnV0LCBsaWtlLCBldWdoLlxuICAgICAgICAvLyBBbHNvLCBiZWZvcmUgd2UgZG8gYW55dGhpbmcsIHNlZSBpZiB3ZSBuZWVkIHRvIFwiY29ycmVjdFwiIGFjdGl2YXRlZEluZGV4LlxuICAgICAgICAvLyBJdCBjb3VsZCBiZSBwb2ludGluZyB0byBhIGNoaWxkIHRoYXQgZG9lc24ndCBleGlzdCwgYW5kIGlmIGNsb3Nlc3RGaXQgaXMgZ2l2ZW4sXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gYWRqdXN0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGEgdmFsaWQgY2hpbGQuXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiAmJiBBcnJheS5pc0FycmF5KG1hbmFnZWRDaGlsZHJlbikgJiYgbWFuYWdlZENoaWxkcmVuW2FjdGl2YXRlZEluZGV4XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBPaCBkZWFyLiBBcmUgd2UgYWN0aXZlbHkgY29ycmVjdGluZyB0aGlzP1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXQpIHtcbiAgICAgICAgICAgICAgICAvLyBPaCBkZWFyLlxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCB1cCBhbmQgZG93biB0aGUgbGlzdCBvZiBjaGlsZHJlbiBmb3IgYW55IHRoYXQgYWN0dWFsbHkgZXhpc3QuXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaEhpZ2ggPSBhY3RpdmF0ZWRJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaExvdyA9IGFjdGl2YXRlZEluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddID09IG51bGwpIHx8IChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytzZWFyY2hIaWdoO1xuICAgICAgICAgICAgICAgICAgICAtLXNlYXJjaExvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVkSW5kZXggPSBzZWFyY2hMb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaEhpZ2ggPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hIaWdoXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoSGlnaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UndmUgZG9uZSB0aGF0LCBpZiBhbnkgdmFsaWQgY2hpbGRyZW4gZXhpc3QsIHdlJ3ZlIHJlc2V0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGl0IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgLy8gTm93IHdlJ2xsIGZhbGwgdGhyb3VnaCB0byB0aGUgZm9yIGxvb3Agc2V0IGFuZCB1bnNldCBvdXIgZmxhZ3MgYmFzZWQgb24gdGhpcyBcImNvcnJlY3RlZFwiIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY29ycmVjdCBpdCBvciBzYXZlIGl0IGFueXdoZXJlIGJlY2F1c2Ugd2UnZCB2ZXJ5IG11Y2ggbGlrZSB0byByZXR1cm4gdG8gaXRcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hpbGQgcmVtb3VudHMgaXRzZWxmLlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hbmFnZWRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNob3VsZEJlU2V0ID0gKGkgPT0gYWN0aXZhdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRDaGlsZEZsYWcoaSkgIT0gc2hvdWxkQmVTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRGbGFnKGksIHNob3VsZEJlU2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhtYW5hZ2VkQ2hpbGRyZW4pLmZvckVhY2goKFtpLCBpbmZvXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGlsZC1tYW5hZ2VyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyIH0gZnJvbSBcIi4vdXNlLWNoaWxkLW1hbmFnZXJcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqIEltcGxlbWVudHMgYSByb3ZpbmcgdGFiaW5kZXggc3lzdGVtIHdoZXJlIG9ubHkgb25lIFwiZm9jdXNhYmxlXCJcbiAqIGNvbXBvbmVudCBpbiBhIHNldCBpcyBhYmxlIHRvIHJlY2VpdmUgYSB0YWIgZm9jdXMuICpXaGljaCpcbiAqIG9mIHRob3NlIGVsZW1lbnRzIHJlY2VpdmVzIGZvY3VzIGlzIGRldGVybWluZWQgYnkgeW91LCBidXQgaXQnc1xuICogcmVjb21tZW5kZWQgdG8gb2ZmbG9hZCB0aGF0IGxvZ2ljIHRoZW4gdG8gYW5vdGhlciBob29rLCBsaWtlXG4gKiBgdXNlTGluZWFyTmF2aWdhdGlvbmAsIHdoaWNoIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGVcbiAqIGVsZW1lbnQgd2l0aCB0aGUgYXJyb3cga2V5cywgYHVzZVR5cGVhaGVhZE5hdmlnYXRpb25gLCB3aGljaFxuICogbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHR5cGVhaGVhZCwgb3JcbiAqIGB1c2VMaXN0TmF2aWdhdGlvbmAgaWYgeW91IGp1c3Qgd2FudCBldmVyeXRoaW5nIGJ1bmRsZWQgdG9nZXRoZXIuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBjaGlsZCBob29rIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gbXVzdCBiZSB1c2VkXG4gKiBieSBldmVyeSBjaGlsZCB0aGF0IHVzZXMgdGhpcyByb3ZpbmcgdGFiaW5kZXggbG9naWMuICBUaGVcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2sgKnRoYXQqIGhvb2sgcmV0dXJucyBzaG91bGQgdGhlbiBiZSB1c2VkXG4gKiBvbiB0aGUgY2hpbGQncyBlbGVtZW50LCBhcyB3ZWxsIGFzIGFueSBvdGhlciBlbGVtZW50cyB5b3UnZCBsaWtlXG4gKiB0byBiZSBleHBsaWNpdGx5IG1hZGUgdW50YWJiYWJsZSB0b28uXG4gKlxuICogYHNob3VsZEZvY3VzT25DaGFuZ2VgIHNob3VsZCByZXR1cm4gdHJ1ZSBpZiBmb2N1cyBpc1xuICogY29udGFpbmVkIHdpdGhpbiB3aGF0ZXZlciBlbGVtZW50IGNvbnRhaW5zIHRoZSByb3ZpbmcgdGFiIGluZGV4LlxuICogR2VuZXJhbGx5IGFzIHNpbXBsZSBhcyB0aGUgZm9sbG93aW5nOlxuICogYGBgXG4gKiBjb25zdCBbZm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1czxQYXJlbnRFbGVtZW50Pih7IHNldEZvY3VzZWRJbm5lciB9KTtcbiAqIGNvbnN0IGZvY3VzT25DaGFuZ2UgPSAoZm9jdXNlZElubmVyICE9IGZhbHNlKTtcbiAqIGBgYFxuICogSXQncyBub3QgaW5jbHVkZWQgaGVyZSBiZWNhdXNlIGB1c2VSb3ZpbmdUYWJJbmRleGAgZG9lc24ndCBrbm93XG4gKiBhbnl0aGluZyBhYm91dCB0aGUgY29udGFpbmVyIGVsZW1lbnQsIG9ubHkgY2hpbGRyZW4gZWxlbWVudHMuXG4gKiBBbmQganVzdCBhcyB3ZWxsISBDaGlsZHJlbiBzaG91bGQgYmUgYWxsb3dlZCBhdCB0aGUgcm9vdCxcbiAqIHJlZ2FyZGxlc3Mgb2YgaWYgaXQncyB0aGUgd2hvbGUgYXBwIG9yIGp1c3QgYSBnaXZlbiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleCh7IHNob3VsZEZvY3VzT25DaGFuZ2U6IGZvYywgdGFiYmFibGVJbmRleCB9KSB7XG4gICAgY29uc3QgZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSA9IHVzZVN0YWJsZUdldHRlcihmb2MpO1xuICAgIGNvbnN0IGdldFRhYmJhYmxlSW5kZXggPSB1c2VTdGFibGVHZXR0ZXIodGFiYmFibGVJbmRleCk7XG4gICAgY29uc3QgcHJldlRhYmJhYmxlID0gdXNlUmVmKC1JbmZpbml0eSk7XG4gICAgLy8gQ2FsbCB0aGUgaG9vayB0aGF0IGFsbG93cyB1cyB0byBjb2xsZWN0IGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gd2hvIHByb3ZpZGUgaXRcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgY2hpbGRDb3VudCwgdXNlTWFuYWdlZENoaWxkLCBpbmRpY2VzQnlFbGVtZW50LCAuLi5yZXN0IH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcbiAgICAvLyBBbnkgdGltZSB0aGUgdGFiYmFibGUgaW5kZXggY2hhbmdlcyxcbiAgICAvLyBub3RpZnkgdGhlIHByZXZpb3VzIGNoaWxkIHRoYXQgaXQncyBubyBsb25nZXIgdGFiYmFibGUsXG4gICAgLy8gYW5kIG5vdGlmeSB0aGUgbmV4dCBjaGlsZCB0aGF0IGlzIGFsbG93ZWQgdG8gYmUgdGFiYmVkIHRvLlxuICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiB0YWJiYWJsZUluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGNsb3Nlc3RGaXQ6IHRydWUsXG4gICAgICAgIHNldENoaWxkRmxhZzogKGluZGV4LCB0YWJiYWJsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2luZGV4XT8uc2V0VGFiYmFibGUodGFiYmFibGUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpbmRleCkgPT4gKG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LmdldFRhYmJhYmxlKCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICBjb25zdCBmb2N1c1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh0YWJiYWJsZUluZGV4ICE9IG51bGwpXG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bdGFiYmFibGVJbmRleF0uc2V0VGFiYmFibGUodHJ1ZSk7XG4gICAgfSwgW3RhYmJhYmxlSW5kZXhdKTtcbiAgICBjb25zdCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgW3JyYWZJbmRleCwgc2V0UnJhZkluZGV4XSA9IHVzZVN0YXRlKDEpO1xuICAgICAgICBjb25zdCByZXJlbmRlckFuZEZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRScmFmSW5kZXgoaSA9PiArK2kpOyB9LCBbXSk7XG4gICAgICAgIGNvbnN0IFt0YWJiYWJsZSwgc2V0VGFiYmFibGUsIGdldFRhYmJhYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBsZXQgbmV3SW5mbyA9IHtcbiAgICAgICAgICAgIC4uLmluZm8sXG4gICAgICAgICAgICByZXJlbmRlckFuZEZvY3VzLFxuICAgICAgICAgICAgc2V0VGFiYmFibGU6IHVzZUNhbGxiYWNrKCh0YWJiYWJsZSkgPT4geyBzZXRUYWJiYWJsZSh0YWJiYWJsZSk7IH0sIFtdKSxcbiAgICAgICAgICAgIGdldFRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZChuZXdJbmZvKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAodGFiYmFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRGb2N1c09uQ2hhbmdlID0gZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSgpKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZEZvY3VzT25DaGFuZ2UgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGUsIHJyYWZJbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXggfSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZU1hbmFnZWRDaGlsZFByb3BzKHsgdGFiSW5kZXggfSksIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcbiAgICAgICAgICAgIHRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXG4gICAgICAgIGNoaWxkQ291bnQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgZm9jdXNDdXJyZW50OiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIHdoYXRldmVyIHJlYXNvbiwgdGhlIHByZXZpb3VzbHkgdGFiYmFibGUgY2hpbGRcbiAgICAgICAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdGFiYmFibGUgd2l0aG91dCB1cyBrbm93aW5nIGFib3V0IGl0LlxuICAgICAgICAgICAgICAgIC8vIE1heWJlIGl0IHVubW91bnRlZD9cbiAgICAgICAgICAgICAgICAvLyBFaXRoZXIgd2F5LCB0cnkgdG8gZmluZCB0aGUgbmV3bHktc2VsZWN0ZWQgY2hpbGQuXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMDtcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdPy5yZXJlbmRlckFuZEZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICsrajtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSksXG4gICAgICAgIC4uLnJlc3RcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJvdmluZy10YWJpbmRleC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUm92aW5nVGFiSW5kZXggfSBmcm9tIFwiLi91c2Utcm92aW5nLXRhYmluZGV4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKlxuICogVE9ETzogVGhpcyB0YWJsZSB3YXMgc2NyYXBwZWQgd2hlbiB0aGlzIHdhcyBjaGFuZ2VkIHRvIGp1c3QgYWNjZXB0IGEgY29sbGF0b3IgZGlyZWN0bHksXG4gKiBidXQgaXQncyBub3QgYmFkIGZvciBhIGNvbGxhdGlvbiBjcmFzaCBjb3Vyc2UgYW5kIEkgbWlnaHQgdXNlIGl0IGFnYWluLlxuICogRXZlbiBqdXN0IGFzIGEgXCJ0aGlzIGlzIHdoeSBpdCdzIGltcG9ydGFudCBhbmQgZ29vZCB0byB1c2UgdGhlc2UgdGhpbmdzXCIgdGhpbmcuXG4gKlxuICogfExhbmcufFRhcmdldHxVc2VyIGlucHV0fGBiYXNlYHxgYWNjZW50YHxgY2FzZWB8YHZhcmlhbnRgfFxuICogfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18XG4gKiB8RU58SGl8SGl84pyFfOKchXzinIV84pyFfFxuICogfEVOfEhpfO+8qO+9iXzinIV84pyFfOKchXzinYx8XG4gKiB8RU58SGl8aGl84pyFfOKchXzinYx84p2MfFxuICogfEVOfEhpfEjDr3zinIV84p2MfOKdjHzinYx8XG4gKiB8RU58SGl8QnllfOKdjHzinYx84p2MfOKdjHxcbiAqIHxEQXzDpXxhYXzinIV84pyFfOKchXzinYx8XG4gKiB8REF8w6V8QUF84pyFfOKchXzinYx84p2MfFxuICogfERBfMOlfEFhfOKchXzinIV84p2MfOKdjHxcbiAqIHxFTnzDpXxhYXzinYx84p2MfOKdjHzinYx8XG4gKiB8REF8w6V8YUF84p2MfOKdjHzinYx84p2MfFxuICogfEVOfMOlfGF84pyFfOKchXzinYx84p2MfFxuICogfERBfMOlfGF84pyFfOKchXzinYx84p2MfFxuICogfEpQfO+qqnznnYB84pyFfOKchXzinIV84pyFfFxuICogfEpQfOOCq3zvvbZ84pyFfOKchXzinIV84pyFfFxuICogfEpQfOOCq3zjgYt84pyFfOKchXzinIV84p2MfFxuICogfEpQfOOCq3zjg7V84pyFfOKchXzinIV84p2MfFxuICogfEpQfOOCq3zji5V84pyFfOKchXzinYx84p2MfFxuICogfEpQfOOCq3zjgqx84pyFfOKdjHzinYx84p2MfFxuICogfEpQfOOCq3zlipt84p2MfOKdjHzinYx84p2MfFxuICogfFpIfOe0hXznuqJ84p2MfOKdjHzinYx84p2MfFxuICpcbiAqXG4gKiAoTm90ZSB0byBzZWxmOiBBdCBzb21lIHBvaW50LCB0aGlzIGZpbGUgd2lsbCBwcm9iYWJseSBiZSBub3JtYWxpemVkXG4gKiBieSBzb21lYm9keSBhbmQg76qqIHdpbGwgdHVybiBiYWNrIGludG8g552ALilcbiAqXG4gKi9cbmNvbnN0IGR1bW15ID0gbnVsbDtcbjtcbmZ1bmN0aW9uIGlkZW50aXR5KHQpIHsgcmV0dXJuIHQ7IH1cbi8qKlxuICogSW1wbGVtZW50cyBwcm9wZXIga2V5Ym9hcmQgbmF2aWdhdGlvbiBmb3IgY29tcG9uZW50cyBsaWtlIGxpc3Rib3hlcywgYnV0dG9uIGdyb3VwcywgbWVudXMsIGV0Yy5cbiAqXG4gKiBJbiB0aGUgZG9jdW1lbnQgb3JkZXIsIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgXCJmb2N1c2VkXCIgb3IgXCJ0YWJiYWJsZVwiIGVsZW1lbnQsIG1ha2luZyBpdCBhY3QgbW9yZSBsaWtlIG9uZSBjb21wbGV0ZSB1bml0IGluIGNvbXBhcmlzb24gdG8gZXZlcnl0aGluZyBhcm91bmQgaXQuXG4gKiBOYXZpZ2F0aW5nIGZvcndhcmRzL2JhY2t3YXJkcyBjYW4gYmUgZG9uZSB3aXRoIHRoZSBhcnJvdyBrZXlzLCBIb21lL0VuZCBrZXlzLCBvciBhbnkgYW55IHRleHQgZm9yIHR5cGVhaGVhZCB0byBmb2N1cyB0aGUgbmV4dCBpdGVtIHRoYXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpc3ROYXZpZ2F0aW9uKHsgaW5pdGlhbEluZGV4LCBzaG91bGRGb2N1c09uQ2hhbmdlLCBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlciB9KSB7XG4gICAgaW5kZXhNYW5nbGVyID8/PSBpZGVudGl0eTtcbiAgICBpbmRleERlbWFuZ2xlciA/Pz0gaWRlbnRpdHk7XG4gICAga2V5TmF2aWdhdGlvbiA/Pz0gXCJlaXRoZXJcIjtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcik7XG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aHJlZSB0aGluZ3MgcmVsYXRlZCB0byB0aGUgY3VycmVudGx5IHRhYmJhYmxlIGVsZW1lbnQncyBpbmRleDpcbiAgICAvLyBXaGF0IGl0IGlzLCBhbmQgd2hldGhlciwgd2hlbiB3ZSByZW5kZXIgdGhpcyBjb21wb25lbnQgYW5kIGl0J3MgY2hhbmdlZCwgdG8gYWxzbyBmb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBtYWRlIHRhYmJhYmxlLlxuICAgIGNvbnN0IFt0YWJiYWJsZUluZGV4LCBzZXRUYWJiYWJsZUluZGV4LCBnZXRUYWJiYWJsZUluZGV4XSA9IHVzZVN0YXRlKGluaXRpYWxJbmRleCA9PT0gdW5kZWZpbmVkID8gMCA6IGluaXRpYWxJbmRleCk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGluZGljZXNCeUVsZW1lbnQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIGZvY3VzQ3VycmVudCwgLi4ucmVzdCB9ID0gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlLCB0YWJiYWJsZUluZGV4IH0pO1xuICAgIC8qY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGk6IG51bWJlciB8IG51bGwpID0+IHsgc2V0VGFiYmFibGVJbmRleChpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwpIHNldFRhYmJhYmxlSW5kZXgoaW5kZXhNYW5nbGVyISgwKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIhKG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlciEoaW5kZXhEZW1hbmdsZXIhKGkgPz8gMCkgLSAxKSkgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlciEoaW5kZXhEZW1hbmdsZXIhKGkgPz8gMCkgKyAxKSkgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcbiovXG4gICAgY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGkpID0+IHtcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChpID09IG51bGwgPyBudWxsIDogdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgMCwgaSwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgodHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgMCwgMCwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleCh0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoLCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoLCAtMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoYyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgYyA/PyAwLCAoYyA/PyAwKSAtIDEsIC0xLCBpbmRleE1hbmdsZXIgPz8gaWRlbnRpdHksIGluZGV4RGVtYW5nbGVyID8/IGlkZW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIGMgPz8gMCwgKGMgPz8gMCkgKyAxLCAxLCBpbmRleE1hbmdsZXIgPz8gaWRlbnRpdHksIGluZGV4RGVtYW5nbGVyID8/IGlkZW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHNldEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaW5kZXgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvblByb3BzIH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGdldEluZGV4OiBnZXRUYWJiYWJsZUluZGV4LCBzZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dDogMTAwMCB9KTtcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG5hdmlnYXRpb25EaXJlY3Rpb246IGtleU5hdmlnYXRpb24sIGluZGV4OiBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QgfSk7XG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlTGluZWFyTmF2aWdhdGlvblByb3BzKHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpO1xuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wc10pO1xuICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZChpbmZvKTtcbiAgICAgICAgLy9jb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoaW5mbyBhcyBJKTtcbiAgICAgICAgY29uc3QgeyB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLCB0YWJiYWJsZSB9ID0gdXNlUm92aW5nVGFiSW5kZXhDaGlsZChpbmZvKTtcbiAgICAgICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKCgoeyBvbkNsaWNrOiByb3ZlVG9TZWxmLCBoaWRkZW46IGluZm8uaGlkZGVuIH0pKSksIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm92ZVRvU2VsZiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpOyB9LCBbXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wczogdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXG4gICAgICAgICAgICB0YWJiYWJsZVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIG5hdmlnYXRlVG9JbmRleF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsXG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dCxcbiAgICAgICAgbmF2aWdhdGVUb1ByZXYsXG4gICAgICAgIG5hdmlnYXRlVG9GaXJzdCxcbiAgICAgICAgbmF2aWdhdGVUb0xhc3QsXG4gICAgICAgIGZvY3VzQ3VycmVudCxcbiAgICAgICAgLi4ucmVzdFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDZWxscywgaW5pdGlhbCwgdGFyZ2V0LCBzZWFyY2hEaXJlY3Rpb24sIGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIpIHtcbiAgICBmdW5jdGlvbiBoZWxwZXIoKSB7XG4gICAgICAgIGlmIChzZWFyY2hEaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0ID49IDAgJiYgKG1hbmFnZWRDZWxsc1t0YXJnZXRdID09IG51bGwgfHwgISFtYW5hZ2VkQ2VsbHNbdGFyZ2V0XT8uaGlkZGVuKSlcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIodGFyZ2V0KSAtIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA8IDAgPyBpbml0aWFsIDogdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlYXJjaERpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA8IG1hbmFnZWRDZWxscy5sZW5ndGggJiYgbWFuYWdlZENlbGxzW3RhcmdldF0gPT0gbnVsbCB8fCAhIW1hbmFnZWRDZWxsc1t0YXJnZXRdPy5oaWRkZW4pXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKHRhcmdldCkgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPj0gbWFuYWdlZENlbGxzLmxlbmd0aCA/IGluaXRpYWwgOiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGhlbHBlcigpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0LW5hdmlnYXRpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmcsIGdldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbGFzdERyb3BFZmZlY3QsIHNldExhc3REcm9wRWZmZWN0LCBnZXRMYXN0RHJvcEVmZmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAgICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAoZWZmZWN0QWxsb3dlZCA/PyBcImFsbFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0ltYWdlKVxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0ID8/IDAsIGRyYWdJbWFnZVlPZmZzZXQgPz8gMCk7XG4gICAgICAgICAgICAgICAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttaW1lVHlwZSwgZGF0YV0gb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKG1pbWVUeXBlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uRHJhZ0VuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgb25EcmFnU3RhcnQsXG4gICAgICAgICAgICBvbkRyYWdFbmQsXG4gICAgICAgICAgICByZWZcbiAgICAgICAgfSwgcCk7XG4gICAgfSwgW2VmZmVjdEFsbG93ZWQsIGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCwgZHJhZ0ltYWdlWU9mZnNldCwgLi4uT2JqZWN0LmVudHJpZXMoZGF0YSkuZmxhdCgpXSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIGxldCByZXQgPSB7XG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxuICAgICAgICBkcmFnZ2luZyxcbiAgICAgICAgZ2V0RHJhZ2dpbmcsXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cbiAgICAgICAgLy8gVXNlZnVsIGZvciByZW1vdmluZyB0aGUgZWxlbWVudCBhZnRlcndhcmRzIGlmIGl0IHdhcyBcIm1vdmVcIlxuICAgICAgICBsYXN0RHJvcEVmZmVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRlc3RcbiAgICAgICAgICovXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyYWdnYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbjtcbjtcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVGaWxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZmlsZU5hbWU7XG4gICAgZXJyb3JUeXBlO1xuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lLCBiYXNlKSB7XG4gICAgICAgIHN1cGVyKGJhc2U/Lm1lc3NhZ2UgPz8gXCJBbiB1bnNwZWNpZmllZCBlcnJvciBvY2N1cnJlZCByZWFkaW5nIHRoZSBmaWxlLlwiKTtcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xuICAgICAgICB0aGlzLmVycm9yVHlwZSA9IGJhc2U/Lm5hbWU7XG4gICAgfVxufVxuLy9NZXJnZWRQcm9wczxVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEUsIFBpY2s8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIFwib25EcmFnRW50ZXJcIiB8IFwib25EcmFnTGVhdmVcIiB8IFwib25EcmFnT3ZlclwiIHwgXCJvbkRyb3BcIj4+LCBQPjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wcGFibGUoeyBlZmZlY3QgfSkge1xuICAgIGNvbnN0IFtmaWxlc0ZvckNvbnNpZGVyYXRpb24sIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wcGVkRmlsZXMsIHNldERyb3BwZWRGaWxlc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJvcHBlZFN0cmluZ3MsIHNldERyb3BwZWRTdHJpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wRXJyb3IsIHNldERyb3BFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIC8vIEFsbCB0aGUgcHJvbWlzZXMgZ2VuZXJhdGVkIGZyb20gdGhlIGRyb3AgZXZlbnRzLlxuICAgIC8vIFVzZWQgdG8gcHJvY2VzcyBtdWx0aXBsZSBkcm9wIGV2ZW50cyBpbiBzdWNjZXNzaW9uXG4gICAgY29uc3QgZHJvcFByb21pc2VzUmVmID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbY3VycmVudFByb21pc2VJbmRleCwgc2V0Q3VycmVudFByb21pc2VJbmRleCwgZ2V0Q3VycmVudFByb21pc2VJbmRleF0gPSB1c2VTdGF0ZSgtMSk7XG4gICAgY29uc3QgW3Byb21pc2VDb3VudCwgc2V0UHJvbWlzZUNvdW50LCBnZXRQcm9taXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxuICAgIC8vIElmIHRoZXJlIGlzIG9uZSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLCBzaW5jZSBpdCBydW5zIHRoZSBzYW1lIGNoZWNrLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xuICAgICAgICBpZiAocHJvbWlzZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtwcm9taXNlQ291bnRdKTtcbiAgICAvLyBBbnl0aW1lIG91ciBjdXJyZW50IHByb21pc2UgY2hhbmdlcyxcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxuICAgIC8vIEZpbmFsbHksIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55bW9yZSBwcm9taXNlcy5cbiAgICAvLyBJZiB0aGVyZSBhcmUsIHRoZW4gaW5jcmVhc2UgY3VycmVudFByb21pc2VDb3VudCxcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cbiAgICAvL1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiAqb2Z0ZW4qLCBidXQgbWF5YmUgaW4gdGhlIGNhc2Ugb2ZcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9taXNlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9taXNlLnRoZW4oKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkRmlsZXMoZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkU3RyaW5ncyhzdHJpbmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UncmUgZG9uZSwgYXJlIHRoZXJlIG1vcmUgcHJvbWlzZXMgaW4gdGhlIHF1ZXVlP1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBwcm9taXNlIGhhcyBzdGFydGVkLCBtb3JlIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50UHJvbWlzZUluZGV4XSk7XG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xuICAgICAgICAvL2NvbnN0IHJlZiA9IHVzZVJlZjxFPihudWxsKTtcbiAgICAgICAgLy8gSGFuZGxlIGNvbGxlY3RpbmcgdGhlIGN1cnJlbnQgZmlsZSBtZXRhZGF0YSBvciBNSU1FIHR5cGVzLlxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IChlZmZlY3QgPz8gXCJtb3ZlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01pbWVUeXBlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01pbWVUeXBlcy5hZGQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goeyB0eXBlOiBpdGVtLnR5cGUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG5ld0ZpbGVzKTtcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihuZXdNaW1lVHlwZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGUgcmVzZXR0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlc1xuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQm9pbGVycGxhdGUsIEkgZ3Vlc3NcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgY29uc3Qgb25Ecm9wID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xuICAgICAgICAgICAgY29uc3QgZHJvcEZpbGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGl0ZW0uZ2V0QXNTdHJpbmcocmVzb2x2ZSkpKS50aGVuKHN0ciA9PiBkcm9wRGF0YVt0eXBlXSA9IHN0cikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcFByb21pc2VzUmVmLmN1cnJlbnQucHVzaChQcm9taXNlLmFsbChhbGxQcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogZHJvcERhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KS5jYXRjaChleCA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IoZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRHJhZ0VudGVyLCBvbkRyYWdMZWF2ZSwgb25EcmFnT3Zlciwgb25Ecm9wIH0sIHApO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRHJvcHBhYmxlUHJvcHMsXG4gICAgICAgIGZpbGVzRm9yQ29uc2lkZXJhdGlvbixcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXG4gICAgICAgIGRyb3BwZWRGaWxlcyxcbiAgICAgICAgZHJvcHBlZFN0cmluZ3MsXG4gICAgICAgIGRyb3BFcnJvclxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJvcHBhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuLyoqXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW55ICpub24tUHJlYWN0KiBlbGVtZW50LCBhbmQgcmVtb3ZpbmcgaXQgd2hlbiB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBob29rIHVubW91bnRzLiBUaGUgY2FsbGJhY2sgZG9lcyBub3QgbmVlZCB0byBiZSBzdGFibGUgYWNyb3NzIHJlbmRlcnMuXG4gKlxuICogRHVlIHRvIHR5cGluZyBsaW1pdGF0aW9ucywgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBsaWtlIHRoaXM6XG4gKlxuICogYHVzZUV2ZW50SGFuZGxlcihlbGVtZW50LCBcImlucHV0XCIpPElucHV0RXZlbnQ+KGUgPT4ge30pYFxuICpcbiAqIFRoZSB0eXBlIGFyZ3VtZW50IGlzIG9wdGlvbmFsLCBidXQgbmFycm93cyBkb3duIHRoZSB0eXBlIGZyb20gXCJhIHVuaW9uIG9mIGFsbCBldmVudHNcIiB0byB3aGF0ZXZlciB5b3Ugc3BlY2lmeSwgYW5kIGVycm9ycyBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICpcbiAqIFRoZXJlIGlzIGEgc2VwYXJhdGUgdmVyc2lvbiB0aGF0IGF0dGFjaGVzIGV2ZW50IGhhbmRsZXJzIHRvIGEgc2V0IG9mIHByb3BzLlxuICogSXQgdGFrZXMgZGlmZmVyZW50IGV2ZW50IHN0cmluZyB0eXBlcyAob25FdmVudCB2cyBvbmV2ZW50KS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IEEgKm5vbi1QcmVhY3QqIG5vZGUgdG8gYXR0YWNoIHRoZSBldmVudCB0by5cbiAqIEByZXR1cm5zXG4gKiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxIYW5kbGVyKHRhcmdldCwgdHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIC8vIE5vdGUgdG8gc2VsZjogVGhlIHR5cGluZyBkb2Vzbid0IGltcHJvdmUgZXZlbiBpZiB0aGlzIGlzIHNwbGl0IHVwIGludG8gYSBzdWItZnVuY3Rpb24uXG4gICAgLy8gTm8gbWF0dGVyIHdoYXQsIGl0IHNlZW1zIGltcG9zc2libGUgdG8gZ2V0IHRoZSBoYW5kbGVyJ3MgZXZlbnQgb2JqZWN0IHR5cGVkIHBlcmZlY3RseS5cbiAgICAvLyBJdCBzZWVtcyBsaWtlIGl0J3MgZ3VhcmFudGVlZCB0byBhbHdheXMgYmUgYSB1bmlvbiBvZiBhbGwgYXZhaWxhYmxlIHR1cGVzLlxuICAgIC8vIEFnYWluLCBubyBtYXR0ZXIgd2hhdCBjb21iaW5hdGlvbiBvZiBzdWItIG9yIHN1Yi1zdWItZnVuY3Rpb25zIHVzZWQuXG4gICAgbGV0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyID8/ICgoKSA9PiB7IH0pKTtcbiAgICBpZiAoaGFuZGxlciA9PSBudWxsKVxuICAgICAgICBzdGFibGVIYW5kbGVyID0gbnVsbDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhYmxlSGFuZGxlcikge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9LCBbdGFyZ2V0LCB0eXBlLCBzdGFibGVIYW5kbGVyXSk7XG59XG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHdheSB0byBhZGQgYW4gZXZlbnQgaGFuZGxlciB0byBhbiBlbGVtZW50LiBVc2VmdWwgcHJpbWFyaWx5IHdoZW4gaW50ZWdyYXRpbmcgM3JkIHBhcnR5IGxpYnJhcmllcyB0aGF0IGV4cGVjdCBhIGdlbmVyaWMgXCJhZGQgZXZlbnQgaGFuZGxlclwiIGZ1bmN0aW9uLlxuICpcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gbW9kaWZ5IGEgc2V0IG9mIHByb3BzIHRvIGFwcGx5IHRoaXMgaGFuZGxlci5cbiAqXG4gKiBGb3IgdHlwaW5nIHJlYXNvbnMsIHRoaXMgZnVuY3Rpb24gaXMgc3BsaXQgaW50byB0d28uICBVc2FnZSBpcyBsaWtlIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogYGBgXG4gKiBjb25zdCB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfSA9IHVzZUxvY2FsRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PigpKFwib25Nb3VzZURvd25cIiwgZSA9PiB7ICB9KTtcbiAqIGNvbnN0IGRpdlByb3BzID0gdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyhwcm9wcyk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhYmxlSGFuZGxlciA9IHVzZVN0YWJsZUNhbGxiYWNrKGhhbmRsZXIpO1xuICAgICAgICBjb25zdCB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFt0eXBlXTogc3RhYmxlSGFuZGxlciB9LCBwcm9wcyk7XG4gICAgICAgIH0sIFt0eXBlXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfTtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZXZlbnQtaGFuZGxlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbi8qKlxuICpcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpZmZlcmVudCB3YXlzIHRoYXQgYSBmb2N1cyBldmVudCBjYW4gaGFwcGVuLiAgQXNzdW1lXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcbiAqXG4gKiAxLiBUaGUgcGFnZSBsb2Fkcy5cbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cbiAqICAgICogTm8gZm9jdXMgZXZlbnRzIGFyZSBmaXJlZC5cbiAqIDIuIFRoZSB3aW5kb3cgaXMgZm9jdXNlZCwgYW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXG4gKiAgICAqIEEgYGZvY3VzYC9gZm9jdXNpbmAgZXZlbnQgKk1JR0hUKiBiZSBmaXJlZCBmb3IgYGJvZHlgLiBEZXBlbmRpbmcgb25cbiAqICAgICAgdGhlIGJyb3dzZXIsIHRoaXMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBoYW5kbGVyIHdhcyBhdHRhY2hlZCB0byBgd2luZG93YCBvciBgZG9jdW1lbnRgLlxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXG4gKiAzLiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50IGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXG4gKiAgICAqIGBmb2N1c2AgYW5kIGBmb2N1c2luYCBhcmUgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbC5cbiAqIDQuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXG4gKiAgICAqIGBibHVyYCBhbmQgYGZvY3Vzb3V0YCBhcmUgZmlyZWQgb24gdGhlIG9sZCBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG5ldyBlbGVtZW50LlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIG5vdyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50LlxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxuICogNS4gQW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIGBib2R5YC5cbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxuICogICAgKiBgZm9jdXNpbmAgaXMgKm5vdCogZmlyZWQgb24gYGJvZHlgLlxuICpcbiAqXG4gKiBJbiBzdW1tYXJ5OlxuICogMS4gRm9jdXMgZXZlbnRzICpkbyogbm90aWZ5IHVzIG9mIGFsbCBjaGFuZ2VzIGluIGZvY3VzLCBidXQgdGhlcmUgaXMgbm8gb25lIHNpbmdsZSBjb21wcmVoZW5zaXZlIGV2ZW50IHRoYXQgcHJvdmlkZXMgdXMgd2l0aCBhbGwgYXZhaWxhYmxlIGluZm9ybWF0aW9uLlxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXG4gKiAzLiBBIGBibHVyYCB3aXRob3V0IGEgYGZvY3VzYCBjYW4gYW5kIHdpbGwgb2NjdXIuIFRoaXMgbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIHNvbGVseSB1c2UgYGZvY3VzYCB0byBkZXRlY3QgYWxsIGNoYW5nZXMuXG4gKiA0LiBBIGBibHVyYCBldmVudCB3aG9zZSBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSB3aWxsIGJlIG5vIGZvbGxvd2luZyBgZm9jdXNgIGV2ZW50LlxuICpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGR1bW15ID0gMDtcbmNvbnN0IGFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBNYXAoKTtcbmNvbnN0IGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBuZXcgTWFwKCk7XG5jb25zdCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMgPSBuZXcgTWFwKCk7XG5sZXQgd2luZG93c0ZvY3VzZWQgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBmb3JFYWNoVXBkYXRlcih3aW5kb3csIG1hcCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBbb3RoZXJXaW5kb3csIHVwZGF0ZXJzXSBvZiBtYXApIHtcbiAgICAgICAgaWYgKHdpbmRvdyA9PT0gb3RoZXJXaW5kb3cpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHVwZGF0ZXIgb2YgdXBkYXRlcnMpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVyPy4odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZm9jdXNvdXQoZSkge1xuICAgIGNvbnN0IHdpbmRvdyA9IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLCBudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEp1c3Qgd2FpdCBmb3IgdGhlIGZvY3VzaW4gZXZlbnQuXG4gICAgfVxufVxuZnVuY3Rpb24gZm9jdXNpbihlKSB7XG4gICAgY29uc3Qgd2luZG93ID0gZS50YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICBsZXQgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIGFjdGl2ZUVsZW1lbnRVcGRhdGVycywgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQpO1xuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycywgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQpO1xufVxuZnVuY3Rpb24gd2luZG93Rm9jdXMoZSkge1xuICAgIGNvbnN0IHdpbmRvdyA9IChlLnRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUudGFyZ2V0IDogZS5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgV2luZG93ID8gZS5jdXJyZW50VGFyZ2V0IDogZS50YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyk7XG4gICAgd2luZG93c0ZvY3VzZWQuc2V0KHdpbmRvdywgdHJ1ZSk7XG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMsIHRydWUpO1xufVxuZnVuY3Rpb24gd2luZG93Qmx1cihlKSB7XG4gICAgY29uc3Qgd2luZG93ID0gKGUudGFyZ2V0IGluc3RhbmNlb2YgV2luZG93ID8gZS50YXJnZXQgOiBlLmN1cnJlbnRUYXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLmN1cnJlbnRUYXJnZXQgOiBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KTtcbiAgICB3aW5kb3dzRm9jdXNlZC5zZXQod2luZG93LCBmYWxzZSk7XG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMsIGZhbHNlKTtcbn1cbi8qKlxuICogQWxsb3dzIHlvdSB0byBpbnNwZWN0IHdoaWNoIGVsZW1lbnQgaW4gdGhlIGBkb2N1bWVudGAgY3VycmVudGx5IGhhcyBmb2N1cywgd2hpY2ggd2FzIG1vc3QgcmVjZW50bHkgZm9jdXNlZCBpZiBub25lIGFyZSBjdXJyZW50bHksIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgd2luZG93IGhhcyBmb2N1cyBieSByZXR1cm5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRBY3RpdmVFbGVtZW50KClgXG4gKiAqIGBnZXRMYXN0QWN0aXZlRWxlbWVudCgpYFxuICogKiBgZ2V0V2luZG93Rm9jdXNlZCgpYFxuICogKiAqKk5vIHByb3AtbW9kaWZ5aW5nIGhvb2sgaXMgcmV0dXJuZWQgYmVjYXVzZSBub25lIGlzIG5lY2Vzc2FyeSoqXG4gKlxuICogKFRoZSBkb2N1bWVudCdzIGJvZHkgcmVjZWl2aW5nIGZvY3VzLCBsaWtlIGl0IGRvZXMgd2hlbiB5b3UgY2xpY2sgb24gYW4gZW1wdHkgYXJlYSwgaXMgY291bnRlZCBhcyBubyBlbGVtZW50IGhhdmluZyBmb2N1cyBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzKVxuICpcbiAqIFRoaXMgaXMgYSBwYXNzaXZlIGhvb2ssIHNvIGJ5IGRlZmF1bHQgaXQgcmV0dXJucyBnZXR0ZXIgZnVuY3Rpb25zIHRoYXQgcmVwb3J0IHRoaXMgaW5mb3JtYXRpb24gYnV0IHRoZSBjb21wb25lbnQgd2lsbCBub3QgcmUtcmVuZGVyIGJ5IGRlZmF1bHQgd2hlbiB0aGUgYWN0aXZlIGVsZW1lbnQgY2hhbmdlcy5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0aGUgY29tcG9uZW50IHRvIHJlLXJlbmRlciB3aGVuIHRoZSBhY3RpdmUgZWxlbWVudCBjaGFuZ2VzLCB1c2UgdGhlIGBvbipDaGFuZ2VgIGFyZ3VtZW50cyB0byBzZXQgc29tZSBzdGF0ZSBvbiB5b3VyIGVuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGl2ZUVsZW1lbnQoeyBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgICAgIGlmICgoYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpPy5zaXplID8/IDApID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2luZG93Rm9jdXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGVtIGV2ZW4gaWYgdGhleSdyZSB1bmRlZmluZWQgdG8gbW9yZSBlYXNpbHlcbiAgICAgICAgICAgICAgICAvLyBtYW5hZ2UgdGhlIFwiPjAgbWVhbnMgZG9uJ3QgYWRkIGhhbmRsZXJzXCIgbG9naWMuXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxBY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykgPz8gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsTGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykgPz8gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsV2luZG93Rm9jdXNlZFVwZGF0ZXJzID0gd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmdldCh3aW5kb3cpID8/IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5hZGQoc2V0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbG9jYWxMYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzZXRMYXN0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbG9jYWxXaW5kb3dGb2N1c2VkVXBkYXRlcnMuYWRkKHNldFdpbmRvd0ZvY3VzZWQpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zZXQod2luZG93LCBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycyk7XG4gICAgICAgICAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zZXQod2luZG93LCBsb2NhbExhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMpO1xuICAgICAgICAgICAgICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5zZXQod2luZG93LCBsb2NhbFdpbmRvd0ZvY3VzZWRVcGRhdGVycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpLmRlbGV0ZShzZXRBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KS5kZWxldGUoc2V0TGFzdEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldFdpbmRvd0ZvY3VzZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgd2luZG93Rm9jdXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIGNvbnN0IFtnZXRBY3RpdmVFbGVtZW50LCBzZXRBY3RpdmVFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2dldExhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgdW5kZWZpbmVkKTtcbiAgICBjb25zdCBbZ2V0V2luZG93Rm9jdXNlZCwgc2V0V2luZG93Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25XaW5kb3dGb2N1c2VkQ2hhbmdlLCByZXR1cm5UcnVlKTtcbiAgICByZXR1cm4geyBnZXRFbGVtZW50LCB1c2VBY3RpdmVFbGVtZW50UHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQgfTtcbn1cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7IHJldHVybiB0cnVlOyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHsgcmV0dXJuIGZhbHNlOyB9XG5mdW5jdGlvbiBub29wKCkgeyB9XG5leHBvcnQgZnVuY3Rpb24gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRDaGFuZ2VkLCBvbkZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uRm9jdXNlZENoYW5nZWQsIG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZENoYW5nZWQsIG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlKTtcbiAgICBjb25zdCBbZ2V0Rm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25Gb2N1c2VkQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRGb2N1c2VkSW5uZXIsIHNldEZvY3VzZWRJbm5lcl0gPSB1c2VQYXNzaXZlU3RhdGUob25Gb2N1c2VkSW5uZXJDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldExhc3RGb2N1c2VkLCBzZXRMYXN0Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0Rm9jdXNlZENoYW5nZWQsIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCBbZ2V0TGFzdEZvY3VzZWRJbm5lciwgc2V0TGFzdEZvY3VzZWRJbm5lcl0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IHsgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQsIHVzZUFjdGl2ZUVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCh7XG4gICAgICAgIG9uQWN0aXZlRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGFjdGl2ZUVsZW1lbnQsIHByZXZBY3RpdmVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxmRWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWQgPSAoc2VsZkVsZW1lbnQgIT0gbnVsbCAmJiAoc2VsZkVsZW1lbnQgPT0gYWN0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZElubmVyID0gKCEhc2VsZkVsZW1lbnQ/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIHNldEZvY3VzZWQoZm9jdXNlZCk7XG4gICAgICAgICAgICBzZXRGb2N1c2VkSW5uZXIoZm9jdXNlZElubmVyKTtcbiAgICAgICAgICAgIG9uQWN0aXZlRWxlbWVudENoYW5nZT8uKGFjdGl2ZUVsZW1lbnQsIHByZXZBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygobGFzdEFjdGl2ZUVsZW1lbnQsIHByZXZMYXN0QWN0aXZlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkID0gKHNlbGZFbGVtZW50ICE9IG51bGwgJiYgKHNlbGZFbGVtZW50ID09IGxhc3RBY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSAoISFzZWxmRWxlbWVudD8uY29udGFpbnMobGFzdEFjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIHNldExhc3RGb2N1c2VkKGZvY3VzZWQpO1xuICAgICAgICAgICAgc2V0TGFzdEZvY3VzZWRJbm5lcihmb2N1c2VkSW5uZXIpO1xuICAgICAgICAgICAgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZT8uKGxhc3RBY3RpdmVFbGVtZW50LCBwcmV2TGFzdEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIG9uV2luZG93Rm9jdXNlZENoYW5nZVxuICAgIH0pO1xuICAgIGNvbnN0IHVzZUhhc0ZvY3VzUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHsgcmV0dXJuIHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcyk7IH0sIFt1c2VBY3RpdmVFbGVtZW50UHJvcHNdKTtcbiAgICByZXR1cm4geyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRFbGVtZW50LCBnZXRGb2N1c2VkLCBnZXRGb2N1c2VkSW5uZXIsIGdldExhc3RGb2N1c2VkLCBnZXRMYXN0Rm9jdXNlZElubmVyLCBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWhhcy1mb2N1cy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJ2YWwoeyBpbnRlcnZhbCwgY2FsbGJhY2sgfSkge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgY29uc3QgZ2V0SW50ZXJ2YWwgPSB1c2VTdGFibGVHZXR0ZXIoaW50ZXJ2YWwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG4gICAgICAgIGxldCBsYXN0RGVsYXlVc2VkID0gaW50ZXJ2YWw7XG4gICAgICAgIGlmIChpbnRlcnZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXG4gICAgICAgIC8vIHRoYXQgY2xlYXJzIGFuZCByZXNldHMgdGhlIGludGVydmFsIGlmIGl0IGNoYW5nZXMuXG4gICAgICAgIGNvbnN0IGFkanVzdGFibGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnRlcnZhbCAhPSBsYXN0RGVsYXlVc2VkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBsYXN0RGVsYXlVc2VkID0gY3VycmVudEludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgaW50ZXJ2YWwpO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnZhbC5qcy5tYXAiLCIvKiFcbiogdGFiYmFibGUgNS4yLjFcbiogQGxpY2Vuc2UgTUlULCBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC90YWJiYWJsZS9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFsnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJywgJ2FbaHJlZl0nLCAnYnV0dG9uJywgJ1t0YWJpbmRleF0nLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScsICdkZXRhaWxzJ107XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xudmFyIG1hdGNoZXMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG5cbiAgaWYgKGluY2x1ZGVDb250YWluZXIgJiYgbWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICB9XG5cbiAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzQ29udGVudEVkaXRhYmxlID0gZnVuY3Rpb24gaXNDb250ZW50RWRpdGFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcbn07XG5cbnZhciBnZXRUYWJpbmRleCA9IGZ1bmN0aW9uIGdldFRhYmluZGV4KG5vZGUpIHtcbiAgdmFyIHRhYmluZGV4QXR0ciA9IHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG5cbiAgaWYgKCFpc05hTih0YWJpbmRleEF0dHIpKSB7XG4gICAgcmV0dXJuIHRhYmluZGV4QXR0cjtcbiAgfSAvLyBCcm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuXG5cbiAgaWYgKGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gLy8gaW4gQ2hyb21lLCA8ZGV0YWlscy8+LCA8YXVkaW8gY29udHJvbHMvPiBhbmQgPHZpZGVvIGNvbnRyb2xzLz4gZWxlbWVudHMgZ2V0IGEgZGVmYXVsdFxuICAvLyAgYHRhYkluZGV4YCBvZiAtMSB3aGVuIHRoZSAndGFiaW5kZXgnIGF0dHJpYnV0ZSBpc24ndCBzcGVjaWZpZWQgaW4gdGhlIERPTSxcbiAgLy8gIHlldCB0aGV5IGFyZSBzdGlsbCBwYXJ0IG9mIHRoZSByZWd1bGFyIHRhYiBvcmRlcjsgaW4gRkYsIHRoZXkgZ2V0IGEgZGVmYXVsdFxuICAvLyAgYHRhYkluZGV4YCBvZiAwOyBzaW5jZSBDaHJvbWUgc3RpbGwgcHV0cyB0aG9zZSBlbGVtZW50cyBpbiB0aGUgcmVndWxhciB0YWJcbiAgLy8gIG9yZGVyLCBjb25zaWRlciB0aGVpciB0YWIgaW5kZXggdG8gYmUgMC5cblxuXG4gIGlmICgobm9kZS5ub2RlTmFtZSA9PT0gJ0FVRElPJyB8fCBub2RlLm5vZGVOYW1lID09PSAnVklERU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdERVRBSUxTJykgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPT09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufTtcblxudmFyIHNvcnRPcmRlcmVkVGFiYmFibGVzID0gZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufTtcblxudmFyIGlzSW5wdXQgPSBmdW5jdGlvbiBpc0lucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJztcbn07XG5cbnZhciBpc0hpZGRlbklucHV0ID0gZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59O1xuXG52YXIgaXNEZXRhaWxzV2l0aFN1bW1hcnkgPSBmdW5jdGlvbiBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB7XG4gIHZhciByID0gbm9kZS50YWdOYW1lID09PSAnREVUQUlMUycgJiYgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGRyZW4pLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkLnRhZ05hbWUgPT09ICdTVU1NQVJZJztcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxudmFyIGdldENoZWNrZWRSYWRpbyA9IGZ1bmN0aW9uIGdldENoZWNrZWRSYWRpbyhub2RlcywgZm9ybSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQgJiYgbm9kZXNbaV0uZm9ybSA9PT0gZm9ybSkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGlzVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIGlmICghbm9kZS5uYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgcmFkaW9TY29wZSA9IG5vZGUuZm9ybSB8fCBub2RlLm93bmVyRG9jdW1lbnQ7XG5cbiAgdmFyIHF1ZXJ5UmFkaW9zID0gZnVuY3Rpb24gcXVlcnlSYWRpb3MobmFtZSkge1xuICAgIHJldHVybiByYWRpb1Njb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XG4gIH07XG5cbiAgdmFyIHJhZGlvU2V0O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MuZXNjYXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXMnLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQsIG5vZGUuZm9ybSk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufTtcblxudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufTtcblxudmFyIGlzTm9uVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59O1xuXG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihub2RlLCBkaXNwbGF5Q2hlY2spIHtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpc0RpcmVjdFN1bW1hcnkgPSBtYXRjaGVzLmNhbGwobm9kZSwgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJyk7XG4gIHZhciBub2RlVW5kZXJEZXRhaWxzID0gaXNEaXJlY3RTdW1tYXJ5ID8gbm9kZS5wYXJlbnRFbGVtZW50IDogbm9kZTtcblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsICdkZXRhaWxzOm5vdChbb3Blbl0pIConKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFkaXNwbGF5Q2hlY2sgfHwgZGlzcGxheUNoZWNrID09PSAnZnVsbCcpIHtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXNwbGF5Q2hlY2sgPT09ICdub24temVyby1hcmVhJykge1xuICAgIHZhciBfbm9kZSRnZXRCb3VuZGluZ0NsaWUgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB3aWR0aCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmhlaWdodDtcblxuICAgIHJldHVybiB3aWR0aCA9PT0gMCAmJiBoZWlnaHQgPT09IDA7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyBmb3JtIGZpZWxkcyAobmVzdGVkKSBpbnNpZGUgYSBkaXNhYmxlZCBmaWVsZHNldCBhcmUgbm90IGZvY3VzYWJsZS90YWJiYWJsZVxuLy8gIHVubGVzcyB0aGV5IGFyZSBpbiB0aGUgX2ZpcnN0XyA8bGVnZW5kPiBlbGVtZW50IG9mIHRoZSB0b3AtbW9zdCBkaXNhYmxlZFxuLy8gIGZpZWxkc2V0XG5cblxudmFyIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQgPSBmdW5jdGlvbiBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpIHtcbiAgaWYgKGlzSW5wdXQobm9kZSkgfHwgbm9kZS50YWdOYW1lID09PSAnU0VMRUNUJyB8fCBub2RlLnRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgbm9kZS50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLnRhZ05hbWUgPT09ICdGSUVMRFNFVCcgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAvLyBsb29rIGZvciB0aGUgZmlyc3QgPGxlZ2VuZD4gYXMgYW4gaW1tZWRpYXRlIGNoaWxkIG9mIHRoZSBkaXNhYmxlZFxuICAgICAgICAvLyAgPGZpZWxkc2V0PjogaWYgdGhlIG5vZGUgaXMgaW4gdGhhdCBsZWdlbmQsIGl0J2xsIGJlIGVuYWJsZWQgZXZlblxuICAgICAgICAvLyAgdGhvdWdoIHRoZSBmaWVsZHNldCBpcyBkaXNhYmxlZDsgb3RoZXJ3aXNlLCB0aGUgbm9kZSBpcyBpbiBhXG4gICAgICAgIC8vICBzZWNvbmRhcnkvc3Vic2VxdWVudCBsZWdlbmQsIG9yIHNvbWV3aGVyZSBlbHNlIHdpdGhpbiB0aGUgZmllbGRzZXRcbiAgICAgICAgLy8gIChob3dldmVyIGRlZXAgbmVzdGVkKSBhbmQgaXQnbGwgYmUgZGlzYWJsZWRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5pdGVtKGkpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdMRUdFTkQnKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbnMobm9kZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyB0aGUgbm9kZSBpc24ndCBpbiB0aGUgZmlyc3QgbGVnZW5kIChpbiBkb2Mgb3JkZXIpLCBzbyBubyBtYXR0ZXJcbiAgICAgICAgICAgIC8vICB3aGVyZSBpdCBpcyBub3csIGl0J2xsIGJlIGRpc2FibGVkXG5cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHRoZSBub2RlIGlzbid0IGluIGEgbGVnZW5kLCBzbyBubyBtYXR0ZXIgd2hlcmUgaXQgaXMgbm93LCBpdCdsbCBiZSBkaXNhYmxlZFxuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcblxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucy5kaXNwbGF5Q2hlY2spIHx8IC8vIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB8fCBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHx8IGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB8fCBnZXRUYWJpbmRleChub2RlKSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciB0YWJiYWJsZSA9IGZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICBjYW5kaWRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaSkge1xuICAgIHZhciBjYW5kaWRhdGVUYWJpbmRleCA9IGdldFRhYmluZGV4KGNhbmRpZGF0ZSk7XG5cbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIHJlZ3VsYXJUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBhLm5vZGU7XG4gIH0pLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59O1xuXG52YXIgZm9jdXNhYmxlID0gZnVuY3Rpb24gZm9jdXNhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5cbnZhciBpc0ZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbmV4cG9ydCB7IGZvY3VzYWJsZSwgaXNGb2N1c2FibGUsIGlzVGFiYmFibGUsIHRhYmJhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2luZXJ0JywgZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICAvKipcbiAgICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAgICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAgICovXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgICAvKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gICAgLyoqXG4gICAgICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICAgICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICAgKi9cbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICAgKiBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gICAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgICAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gICAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgICAqXG4gICAgICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAgICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICAgKi9cblxuICAgIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRWxlbWVudH0gKi9cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgICAvLyBXYXRjaCBmb3I6XG4gICAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydFJvb3QsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fdmlzaXROb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdmlzaXROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcblxuICAgICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdtYW5hZ2VkTm9kZXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAgICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICAgICAqXG4gICAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgICAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICAgICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAgICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE1hbmFnZXIsIFt7XG4gICAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgICAgaWYgKGluZXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25Eb2N1bWVudExvYWRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0TWFuYWdlcjtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgdmFyIHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9kaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicgKyAnW2luZXJ0XSB7XFxuJyArICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgKyAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArICd9XFxuJyArICdcXG4nICsgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICd9XFxuJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgIHZhciBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pKSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiaW1wb3J0IFwid2ljZy1pbmVydFwiO1xuaW1wb3J0IFwiYmxvY2tpbmctZWxlbWVudHNcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmNvbnN0IGJsb2NraW5nRWxlbWVudHMgPSBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cztcbi8qKlxuICogQWxsb3dzIGFuIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBieSBhcHBseWluZyB0aGUgXCJpbmVydFwiIGF0dHJpYnV0ZSB0byBhbGwgc2libGluZywgYXVudCwgYW5kIHVuY2xlIG5vZGVzLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyBjb25zZWN1dGl2ZSBjYWxscyB3aXRoIGEgbG9vc2VseSBhcHBsaWVkIHN0YWNrIG9wZXJhdGlvblxuICogKHNwZWNpZmljYWxseSB2aWEgYGJsb2NraW5nRWxlbWVudHNgLCB3aXRoIGEgc21hbGwgcG9seWZpbGwgYmVjYXVzZSBJJ20gbm90IHN1cmUgaG93IGxvbmdcbiAqIGl0J2xsIHRha2UgdG8gZmluZCBpdHMgd2F5IGludG8gdGhlIHNwZWMsIGlmIGV2ZXIpXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCbG9ja2luZ0VsZW1lbnQodGFyZ2V0KSB7XG4gICAgLyoqXG4gICAgICogUHVzaC9wb3AgdGhlIGVsZW1lbnQgZnJvbSB0aGUgYmxvY2tpbmdFbGVtZW50cyBzdGFjay5cbiAgICAgKi9cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBTb21ldGltZXMgYmxvY2tpbmdFbGVtZW50cyB3aWxsIGZhaWwgaWYsIGZvciBleGFtcGxlLFxuICAgICAgICAgICAgLy8gdGhlIHRhcmdldCBlbGVtZW50IGlzbid0IGNvbm5lY3RlZCB0byBkb2N1bWVudC5ib2R5LlxuICAgICAgICAgICAgLy8gVGhpcyBpcyByYXJlLCBidXQgaXQncyBiZXR0ZXIgdG8gZmFpbCBzaWxlbnRseSB3aXRoIHdlaXJkIHRhYmJpbmcgYmVoYXZpb3JcbiAgICAgICAgICAgIC8vIHRoYW4gdG8gY3Jhc2ggdGhlIGVudGlyZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5yZW1vdmUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gV2VsbCwgc2VtaS1zaWxlbnRseS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFt0YXJnZXRdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BFbGVtZW50KCkge1xuICAgIHJldHVybiBibG9ja2luZ0VsZW1lbnRzLnRvcDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ibG9ja2luZy1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGlzRm9jdXNhYmxlIH0gZnJvbSBcInRhYmJhYmxlXCI7XG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRUb3BFbGVtZW50LCB1c2VCbG9ja2luZ0VsZW1lbnQgfSBmcm9tIFwiLi91c2UtYmxvY2tpbmctZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuY29uc3QgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzVHJhcCh7IHRyYXBBY3RpdmUgfSkge1xuICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRFbGVtZW50IH0pO1xuICAgIC8vY29uc3QgW2xhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnRdID0gdXNlU3RhdGU8Tm9kZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQsIHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyB9ID0gdXNlQWN0aXZlRWxlbWVudCh7fSk7XG4gICAgLy8gV2hlbiB0aGUgdHJhcCBiZWNvbWVzIGFjdGl2ZSwgYmVmb3JlIHdlIGxldCB0aGUgYmxvY2tpbmdFbGVtZW50cyBob29rIHJ1bixcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHdoYXRldmVyJ3MgY3VycmVudGx5IGZvY3VzZWQgYW5kIHNhdmUgaXQuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIHRvIHdoYXRldmVyJ3MgY3VycmVudGx5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gICAgICAgICAgICBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8uc2V0KGdldFRvcEVsZW1lbnQoKSwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQoKSA/PyBkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgfVxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XG4gICAgdXNlQmxvY2tpbmdFbGVtZW50KHRyYXBBY3RpdmUgPyBlbGVtZW50IDogbnVsbCk7XG4gICAgLyoqXG4gICAgICogQW55IHRpbWUgd2UgYWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgdHJhcCxcbiAgICAgKiBjaGFuZ2UgZm9jdXMgdG8gc29tZXRoaW5nIGVsc2UgKHNvbWV0aGluZyBpblxuICAgICAqIHRoZSB0cmFwIGlmIGl0J3MgYWN0aXZlLCBvciB3aGF0ZXZlciB3ZSd2ZVxuICAgICAqIHRyYWNrZWQgaW4gZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvIGlmIG5vdClcbiAgICAgKi9cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgcmFmSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIGV4dHJhIHF1ZXVlTWljcm90YXNrIGlzIG5lZWRlZCBmb3JcbiAgICAgICAgICAgICAgICAvLyAuLi5yZWFzb25zP1xuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluZEZpcnN0Rm9jdXNhYmxlKGVsZW1lbnQpPy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyYWZIYW5kbGUpXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAvLyB0aGF0IGhhcyByZXR1cm5lZCB0byB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgICAgICAgICAgbGV0IHJhZkhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8uZ2V0KGdldFRvcEVsZW1lbnQoKSk/LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJhZkhhbmRsZSA9IDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSGFuZGxlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbdHJhcEFjdGl2ZSwgZWxlbWVudF0pO1xuICAgIGNvbnN0IHVzZUZvY3VzVHJhcFByb3BzID0gKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1tb2RhbFwiOiB0cmFwQWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSwgdXNlUmVmRWxlbWVudFByb3BzKHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcykpKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VGb2N1c1RyYXBQcm9wcyxcbiAgICAgICAgZ2V0RWxlbWVudFxuICAgIH07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW4gdGhlIGdpdmVuIG5vZGUsIG9yIG51bGwgaWYgbm9uZSBhcmUgZm91bmQuXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XG4gICAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWxlbWVudCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHsgYWNjZXB0Tm9kZTogKG5vZGUpID0+IChub2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiBpc0ZvY3VzYWJsZShub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVApIH0pO1xuICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlID0gdHJlZVdhbGtlci5maXJzdENoaWxkKCk7XG4gICAgcmV0dXJuIGZpcnN0Rm9jdXNhYmxlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWZvY3VzLXRyYXAuanMubWFwIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGMsdXNlRGVidWdWYWx1ZSBhcyBmfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgZCxGcmFnbWVudCBhcyB2LHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOmQoZChuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/ZChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1kKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OmR9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyh2LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyh2LG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9ZChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsej1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIEIobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gSChuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgWj1oLmV2ZW50O2Z1bmN0aW9uIFkoKXt9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBxKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBaJiYobj1aKG4pKSxuLnBlcnNpc3Q9WSxuLmlzUHJvcGFnYXRpb25TdG9wcGVkPSQsbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9cSxuLm5hdGl2ZUV2ZW50PW59O3ZhciBHLEo9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEs9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgdT0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBvIGluIHI9e30sZSl7dmFyIGk9ZVtvXTtWJiZcImNoaWxkcmVuXCI9PT1vJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1vJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09aXx8KFwiZGVmYXVsdFZhbHVlXCI9PT1vJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP289XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PW8mJiEwPT09aT9pPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KG8pP289XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KG8rdCkmJiF6KGUudHlwZSk/bz1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSksbi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOkgsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImV4cG9ydCBjb25zdCBFdmVudERldGFpbCA9IFN5bWJvbChcImV2ZW50LWRldGFpbFwiKTtcbmV4cG9ydCBmdW5jdGlvbiBlbmhhbmNlRXZlbnQoZSwgZGV0YWlsKSB7XG4gICAgbGV0IGV2ZW50ID0gZTtcbiAgICBldmVudFtFdmVudERldGFpbF0gPSBkZXRhaWw7XG4gICAgcmV0dXJuIGV2ZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VHbG9iYWxIYW5kbGVyLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xubGV0IHB1bHNlID0gKFwidmlicmF0ZVwiIGluIG5hdmlnYXRvcikgPyAoKCkgPT4gbmF2aWdhdG9yLnZpYnJhdGUoMTApKSA6ICgoKSA9PiB7IH0pO1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGVuYWJsZS9kaXNhYmxlIGJ1dHRvbiB2aWJyYXRpb24gcHVsc2VzIG9uIGFuIGFwcC13aWRlIHNjYWxlLlxuICpcbiAqXG4gKiBAcGFyYW0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcnVuIHdoZW4gYSBidXR0b24gaXMgdGFwcGVkLlxuICogKERlZmF1bHQgaXMgYCgpID0+IG5hdmlnYXRvci52aWJyYXRlKDEwKWAgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGl0LCBhIG5vb3Agb3RoZXJ3aXNlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QnV0dG9uVmlicmF0ZShmdW5jKSB7XG4gICAgcHVsc2UgPSBmdW5jO1xufVxuZnVuY3Rpb24gZXhjbHVkZXModGFyZ2V0LCBleGNsdWRlKSB7XG4gICAgaWYgKGV4Y2x1ZGU/Llt0YXJnZXRdKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIHNlbGVjdGlvbi5jb250YWluc05vZGUgZG9lc24ndCBhY2NvdW50IGZvciBzZWxlY3Rpb24uaXNDb2xsYXBzZWQsXG4gKiBzbyBoZXJlJ3MgYSB3b3JrYXJvdW5kIGZvciB0aGF0LlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBub2RlSGFzU2VsZWN0ZWRUZXh0KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24/LmNvbnRhaW5zTm9kZShlbGVtZW50LCB0cnVlKSAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBldmVudCBoYW5kbGVycyB0byBjcmVhdGUgYSBcInByZXNzXCItbGlrZSBldmVudCBmb3JcbiAqIGJ1dHRvbnMgYW5kIGFueXRoaW5nIGVsc2UgdGhhdCdzIFwiY2xpY2svdGFwL3ByZXNzL3RvdWNoXCItYWJsZS5cbiAqXG4gKiBOb3RhYmx5LCB0aGUgZm9sbG93aW5nIGNhc2VzIGFyZSBjb3ZlcmVkOlxuICogKiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgcHJvcGVybHkgZm9jdXNlZCwgZXZlbiBvbiBpT1MgU2FmYXJpICgqZXNwZWNpYWxseSogb24gaU9TIFNhZmFyaSlcbiAqICogRG91YmxlLWNsaWNrcyB3b24ndCBzZWxlY3QgdGV4dC5cbiAqICogQ29udmVyc2VseSwgbWFudWFsbHkgc2VsZWN0aW5nIHRleHQgd29uJ3QgaW52b2tlIGEgcHJlc3MuXG4gKiAqIEtleWJvYXJkIGV2ZW50cyAmbWRhc2g7IGBlbnRlcmAgaW1tZWRpYXRlbHkgaW52b2tlcyB0aGUgaGFuZGxlciwgd2hpbGUgYHNwYWNlYCBpbnZva2VzIGl0IG9uIGtleXVwLlxuICogKiBIYXB0aWMgZmVlZGJhY2sgKG9uLCBsaWtlLCB0aGUgb25lIGJyb3dzZXIgY29tYmluYXRpb24gdGhhdCBzdXBwb3J0cyBpdCAmbWRhc2g7IHRoaXMgY2FuIGJlIGRpc2FibGVkIGFwcC13aWRlIHdpdGggYHNldEJ1dHRvblZpYnJhdGVgKVxuICpcbiAqIEluIGFkZGl0aW9uLCB3aGVuIHRoZSBDU1MgYDphY3RpdmVgIHBzZXVkby1jbGFzcyB3b3VsZCBhcHBseSB0byBhIG5vcm1hbCBidXR0b25cbiAqIChpLmUuIHdoZW4gaG9sZGluZyB0aGUgc3BhY2ViYXIgb3IgZHVyaW5nIG1vdXNlZG93biksIGB7IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IFwidHJ1ZVwiIH1gXG4gKiBpcyBhZGRlZCB0byB0aGUgcHJvcHMuICBZb3UgY2FuIGVpdGhlciBsZXQgaXQgcGFzcyB0aHJvdWdoIGFuZCBzdHlsZSBpdCB0aHJvdWdoIG5ldyBDU1MsXG4gKiBvciBpbnNwZWN0IHRoZSByZXR1cm5lZCBwcm9wcyBmb3IgaXQgYW5kIGFkZCBlLmcuIGFuIGAuYWN0aXZlYCBjbGFzcyBmb3IgZXhpc3RpbmcgQ1NTXG4gKlxuICogQHBhcmFtIG9uQ2xpY2tTeW5jXG4gKiBAcGFyYW0gZXhjbHVkZSBXaGV0aGVyIHRoZSBwb2x5ZmlsbCBzaG91bGRuJ3QgYXBwbHkgKGNhbiBzcGVjaWZ5IGZvciBzcGVjaWZpYyBpbnRlcmFjdGlvbnMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcmVzc0V2ZW50SGFuZGxlcnMob25DbGlja1N5bmMsIGV4Y2x1ZGUpIHtcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgLy8gQSBidXR0b24gY2FuIGJlIGFjdGl2YXRlZCBpbiBtdWx0aXBsZSB3YXlzLCBzbyBvbiB0aGUgb2ZmIGNoYW5jZVxuICAgIC8vIHRoYXQgbXVsdGlwbGUgYXJlIHRyaWdnZXJlZCBhdCBvbmNlLCB3ZSBvbmx5ICphY3R1YWxseSogcmVnaXN0ZXJcbiAgICAvLyBhIHByZXNzIG9uY2UgYWxsIG9mIG91ciBcIm9uXCIgc2lnbmFscyBoYXZlIHR1cm5lZCBiYWNrIHRvIFwib2ZmXCIuXG4gICAgLy8gV2UgYXBwcm94aW1hdGUgdGhpcyBieSBqdXN0IGluY3JlbWVudGluZyB3aGVuIGFjdGl2ZSwgYW5kXG4gICAgLy8gZGVjcmVtZW50aW5nIHdoZW4gZGVhY3RpdmF0ZWQuXG4gICAgLy9cbiAgICAvLyBBcyBhbiBlbWVyZ2VuY3kgZmFpbHNhZmUsIHdoZW4gdGhlIGVsZW1lbnQgbG9vc2VzIGZvY3VzLFxuICAgIC8vIHRoaXMgaXMgcmVzZXQgYmFjayB0byAwLlxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZSwgZ2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuICAgIC8vIElmIHdlIHRoZSBjdXJyZW50IHRleHQgc2VsZWN0aW9uIGNoYW5nZXMgdG8gaW5jbHVkZSB0aGlzIGVsZW1lbnRcbiAgICAvLyBEVVJJTkcgZS5nLiBhIG1vdXNlZG93biwgdGhlbiB3ZSBkb24ndCB3YW50IHRoZSBtb3VzZXVwIHRvIFwiY291bnRcIiwgYXMgaXQgd2VyZSxcbiAgICAvLyBiZWNhdXNlIGl0cyBvbmx5IHB1cnBvc2Ugd2FzIHNlbGVjdGluZyB0ZXh0LCBub3QgY2xpY2tpbmcgYnV0dG9ucy5cbiAgICAvL1xuICAgIC8vIFRvIGNhdGNoIHRoaXMsIGFueSB0aW1lIHRoZSB0ZXh0IHNlbGVjdGlvbiBpbmNsdWRlcyB1cyB3aGlsZSBpbiB0aGUgbWlkZGxlXG4gICAgLy8gb2YgYSBjbGljaywgdGhpcyBmbGFnIGlzIHNldCwgd2hpY2ggY2FuY2VscyB0aGUgYWN0aXZhdGlvbiBvZiBhIHByZXNzLlxuICAgIC8vIFRoZSBmbGFnIGlzIHJlc2V0IGFueSB0aW1lIHRoZSBzZWxlY3Rpb24gaXMgZW1wdHkgb3IgdGhlIGJ1dHRvbiBpc1xuICAgIC8vIG5vIGxvbmdlciBhY3RpdmUuXG4gICAgY29uc3QgW3RleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24sIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUdsb2JhbEhhbmRsZXIoZG9jdW1lbnQsIFwic2VsZWN0aW9uY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uKGFjdGl2ZSA9PSAwID8gZmFsc2UgOiBub2RlSGFzU2VsZWN0ZWRUZXh0KGdldEVsZW1lbnQoKSkpO1xuICAgIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUgPT0gMClcbiAgICAgICAgICAgIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24oZmFsc2UpO1xuICAgIH0sIFthY3RpdmUgPT0gMF0pO1xuICAgIGNvbnN0IG9uQWN0aXZlU3RhcnQgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoYSA9PiArK2EpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9uQWN0aXZlU3RvcCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShhID0+IE1hdGgubWF4KDAsIC0tYSkpO1xuICAgICAgICBpZiAodGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRBY3RpdmUoKSA8PSAwKSB7XG4gICAgICAgICAgICBoYW5kbGVQcmVzcyhlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2tTeW5jKSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgZWxlbWVudCBpcyBmb2N1c2VkIGhlcmUgYmVjYXVzZSBvZiBpT1MgU2FmYXJpLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEl0J3MgYWx3YXlzIGlPUyBTYWZhcmkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaU9TIFNhZmFyaSAodGVzdGVkIG9uIDEyKSBkb3ducmlnaHQgcmVmdXNlcyB0byBhbGxvdyBcbiAgICAgICAgICAgIC8vIGVsZW1lbnRzIHRvIGJlIG1hbnVhbGx5IGZvY3VzZWQgVU5MRVNTIGl0IGhhcHBlbnMgd2l0aGluXG4gICAgICAgICAgICAvLyBhbiBldmVudCBoYW5kbGVyIGxpa2UgdGhpcy4gIEl0IGFsc28gZG9lc24ndCBmb2N1c1xuICAgICAgICAgICAgLy8gYnV0dG9ucyBieSBkZWZhdWx0IHdoZW4gY2xpY2tlZCwgdGFwcGVkLCBldGMuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSWYgaXQgYmVjb21lcyBwcm9ibGVtYXRpYyB0aGF0IGJ1dHRvbi1saWtlcyBleHBsaWNpdGx5IGJlY29tZVxuICAgICAgICAgICAgLy8gZm9jdXNlZCB3aGVuIHRoZXkgYXJlIHByZXNzZWQsIHRoZW4gYW4gYWx0ZXJuYXRpdmUgc29sdXRpb24gZm9yXG4gICAgICAgICAgICAvLyB0aGUgcXVlc3Rpb24gb2YgXCJob3cgZG8gbWVudSBidXR0b25zIGtlZXAgdGhlaXIgbWVudXMgb3BlblwiXG4gICAgICAgICAgICAvLyBhbmQgb3RoZXIgZm9jdXMtcmVsYXRlZCBub25zZW5zZSBuZWVkcyB0byBiZSBmaWd1cmVkIG91dC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBGb3IgaU9TIFNhZmFyaS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgZWxlbWVudD8uZm9jdXMoKTtcbiAgICAgICAgICAgIC8vIFdoYXRldmVyIHRoZSBicm93c2VyIHdhcyBnb2luZyB0byBkbyB3aXRoIHRoaXMgZXZlbnQsXG4gICAgICAgICAgICAvLyBmb3JnZXQgaXQuIFdlJ3JlIHR1cm5pbmcgaXQgaW50byBhIFwicHJlc3NcIiBldmVudC5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIEFsc28gc3RvcCBhbnlvbmUgZWxzZSBmcm9tIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LFxuICAgICAgICAgICAgLy8gc2luY2Ugd2UncmUgZXhwbGljaXRseSBoYW5kbGluZyBpdC5cbiAgICAgICAgICAgIC8vIChOb3RhYmx5LCB0aGlzIGFsbG93cyBsYWJlbHMgdG8gd3JhcCBpbnB1dHMsIHdpdGggdGhlbVxuICAgICAgICAgICAgLy8gYm90aCBoYXZpbmcgcHJlc3MgZXZlbnQgaGFuZGxlcnMsIHdpdGhvdXQgZG91YmxlLWZpcmluZylcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBIYXB0aWMgZmVlZGJhY2sgZm9yIHRoaXMgcHJlc3MgZXZlbnRcbiAgICAgICAgICAgIHB1bHNlKCk7XG4gICAgICAgICAgICAvLyBBY3R1YWxseSBjYWxsIG91ciBoYW5kbGVyLlxuICAgICAgICAgICAgb25DbGlja1N5bmMoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICAvLyBTdG9wIGRvdWJsZSBjbGlja3MgZnJvbSBzZWxlY3RpbmcgdGV4dCBpbiBhbiBjb21wb25lbnQgdGhhdCdzICpzdXBwb3NlZCogdG8gYmUgYWN0aW5nIGxpa2UgYSBidXR0b24sXG4gICAgICAgIC8vIGJ1dCBhbHNvIGRvbid0IHByZXZlbnQgdGhlIHVzZXIgZnJvbSBzZWxlY3RpbmcgdGhhdCB0ZXh0IG1hbnVhbGx5IGlmIHRoZXkgcmVhbGx5IHdhbnQgdG9cbiAgICAgICAgLy8gKHdoaWNoIHVzZXItc2VsZWN0OiBub25lIHdvdWxkIGRvLCBidXQgY2FuY2VsbGluZyBhIGRvdWJsZSBjbGljayBvbiBtb3VzZURvd24gZG9lc24ndClcbiAgICAgICAgaWYgKGUuZGV0YWlsID4gMSlcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKVxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VVcCA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDAgJiYgYWN0aXZlID4gMClcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZSgwKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VMZWF2ZSA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiBvbkJsdXI7XG4gICAgY29uc3Qgb25LZXlEb3duID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSAmJiBleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiICYmIG9uQ2xpY2tTeW5jICYmICFleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpKSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBhY3R1YWxseSBhY3RpdmF0ZSBpdCBvbiBhIHNwYWNlIGtleWRvd25cbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBkbyBwcmV2ZW50RGVmYXVsdCB0byBzdG9wIHRoZSBwYWdlIGZyb20gc2Nyb2xsaW5nLlxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiICYmICFleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvbkFjdGl2ZVN0YXJ0KGUpO1xuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbktleVVwID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIiBcIiAmJiAhZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSlcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmRldGFpbCA+IDEpIHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25CbHVyLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwLCBvbk1vdXNlTGVhdmUsIG9uQ2xpY2ssIHN0eWxlOiB0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uID8geyBjdXJzb3I6IFwidGV4dFwiIH0gOiB1bmRlZmluZWQsIC4uLnsgXCJkYXRhLXBzZXVkby1hY3RpdmVcIjogYWN0aXZlICYmICF0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSB9LCBwcm9wcykpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFCdXR0b24oeyB0YWcsIHByZXNzZWQsIG9uUHJlc3MgfSkge1xuICAgIGZ1bmN0aW9uIHVzZUFyaWFCdXR0b25Qcm9wcyh7IFwiYXJpYS1wcmVzc2VkXCI6IGFyaWFQcmVzc2VkLCB0YWJJbmRleCwgcm9sZSwgLi4ucCB9KSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiBvblByZXNzPy4oZW5oYW5jZUV2ZW50KGUsIHsgcHJlc3NlZDogcHJlc3NlZCA9PSBudWxsID8gbnVsbCA6ICFwcmVzc2VkIH0pKSwgdW5kZWZpbmVkKShwKTtcbiAgICAgICAgY29uc3QgYnV0dG9uUHJvcHMgPSB7IHJvbGUsIHRhYkluZGV4LCBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCA/PyAocHJlc3NlZCA9PT0gdHJ1ZSA/IFwidHJ1ZVwiIDogcHJlc3NlZCA9PT0gZmFsc2UgPyBcImZhbHNlXCIgOiB1bmRlZmluZWQpIH07XG4gICAgICAgIGNvbnN0IGRpdlByb3BzID0geyAuLi5idXR0b25Qcm9wcywgdGFiSW5kZXg6IHRhYkluZGV4ID8/IDAsIHJvbGU6IHJvbGUgPz8gXCJidXR0b25cIiB9O1xuICAgICAgICBjb25zdCBhbmNob3JQcm9wcyA9IHsgLi4uZGl2UHJvcHMgfTtcbiAgICAgICAgc3dpdGNoICh0YWcpIHtcbiAgICAgICAgICAgIGNhc2UgXCJidXR0b25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShidXR0b25Qcm9wcywgcHJvcHMpO1xuICAgICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShhbmNob3JQcm9wcywgcHJvcHMpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShkaXZQcm9wcywgcHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUFyaWFCdXR0b25Qcm9wc1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYnV0dG9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyLCB1c2VIYXNGb2N1cywgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvbih7IGV4cGFuZGVkSW5kZXgsIHNldEV4cGFuZGVkSW5kZXggfSkge1xuICAgIGNvbnN0IFtsYXN0Rm9jdXNlZEluZGV4LCBzZXRMYXN0Rm9jdXNlZEluZGV4LCBnZXRMYXN0Rm9jdXNlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjdXJyZW50Rm9jdXNlZEluZGV4LCBzZXRDdXJyZW50Rm9jdXNlZEluZGV4LCBnZXRDdXJyZW50Rm9jdXNlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHN0YWJsZVNldEV4cGFuZGVkSW5kZXggPSB1c2VTdGFibGVDYWxsYmFjayhzZXRFeHBhbmRlZEluZGV4ID8/ICgoKSA9PiB7IH0pKTtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24gfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleCgoMCkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoKG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucy5sZW5ndGggLSAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChpID0+ICgoaSA/PyAwKSAtIDEpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGkgPT4gKChpID8/IDApICsgMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb24oeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucywgbmF2aWdhdGlvbkRpcmVjdGlvbjogXCJibG9ja1wiLCBpbmRleDogbGFzdEZvY3VzZWRJbmRleCA/PyAwLCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0LCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQgfSk7XG4gICAgdXNlQ2hpbGRGbGFnKHtcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IGV4cGFuZGVkSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBvcGVuKSA9PiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0/LnNldE9wZW5Gcm9tUGFyZW50KG9wZW4pLFxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiAobWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldPy5nZXRPcGVuRnJvbVBhcmVudCgpID8/IG51bGwpXG4gICAgfSk7XG4gICAgdXNlQ2hpbGRGbGFnKHtcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IGxhc3RGb2N1c2VkSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBvcGVuKSA9PiBvcGVuICYmIG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXS5mb2N1cygpLFxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uID0gdXNlQ2FsbGJhY2soKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICBjb25zdCBbb3BlbkZyb21QYXJlbnQsIHNldE9wZW5Gcm9tUGFyZW50LCBnZXRPcGVuRnJvbVBhcmVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogYm9keVJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VCb2R5UmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRCb2R5SWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1ib2R5LVwiIH0pO1xuICAgICAgICBjb25zdCB7IHJhbmRvbUlkOiBoZWFkUmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZUhlYWRSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZEhlYWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLWFjY29yZGlvbi1zZWN0aW9uLWhlYWRlci1cIiB9KTtcbiAgICAgICAgbGV0IG9wZW4gPSAoKGFyZ3Mub3BlbiA/PyBvcGVuRnJvbVBhcmVudCkgPz8gbnVsbCk7XG4gICAgICAgIC8vIFRPRE86IENvbnZlcnQgdG8gdXNlIHVzZU1hbmFnZWRDaGlsZCBzbyB0aGF0IHRoaXMgaG9vayBcbiAgICAgICAgLy8gaXMgc3RhYmxlIHdpdGhvdXQgKGRpcmVjdGx5KSBkZXBlbmRpbmcgb24gdGhlIG9wZW4gc3RhdGUuXG4gICAgICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXIoeyB0YWcgfSkge1xuICAgICAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHtcbiAgICAgICAgICAgICAgICBvbkZvY3VzZWRDaGFuZ2VkOiB1c2VDYWxsYmFjaygoZm9jdXNlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRGb2N1c2VkSW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50Rm9jdXNlZEluZGV4KG9sZEluZGV4ID0+IG9sZEluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChnZXRDdXJyZW50Rm9jdXNlZEluZGV4KCkgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgZ2V0RWxlbWVudCgpPy5mb2N1cygpO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgY29uc3QgeyB1c2VNYW5hZ2VkQ2hpbGRQcm9wcyB9ID0gdXNlTWFuYWdlZENoaWxkU2VjdGlvbih7IGluZGV4LCBvcGVuLCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnQsIGZvY3VzIH0pO1xuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyh7IFtcImFyaWEtZXhwYW5kZWRcIl06IGFyaWFFeHBhbmRlZCwgW1wiYXJpYS1kaXNhYmxlZFwiXTogYXJpYURpc2FibGVkLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25Gb2N1cyA9ICgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChhcmdzLmluZGV4KTsgfTtcbiAgICAgICAgICAgICAgICBsZXQgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE9wZW5Gcm9tUGFyZW50KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KGFyZ3MuaW5kZXgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IHJldEIgPSB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXg6IDAgfSwgdXNlUHJlc3NFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHVuZGVmaW5lZCkocHJvcHMpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmV0MyA9IHVzZU1lcmdlZFByb3BzKCkodXNlSGVhZFJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZEJvZHlJZFByb3BzKFwiYXJpYS1jb250cm9sc1wiKSh7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiAoYXJpYUV4cGFuZGVkID8/ICghIW9wZW4pLnRvU3RyaW5nKCkpLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZGlzYWJsZWRcIjogKGFyaWFEaXNhYmxlZCA/PyAob3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkKSksXG4gICAgICAgICAgICAgICAgICAgIC4uLnVzZUhhc0ZvY3VzUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocmV0QikpXG4gICAgICAgICAgICAgICAgfSkpLCB7IG9uRm9jdXMgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyhyZXQzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHJldHVybiB7IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyUHJvcHMgfTtcbiAgICAgICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25Qcm9wcywgaW5kZXgsIG9wZW5dKTtcbiAgICAgICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5KCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5UHJvcHMoeyByb2xlLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldDEgPSB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikoeyByb2xlOiByb2xlID8/IFwicmVnaW9uXCIsIC4uLnByb3BzIH0pO1xuICAgICAgICAgICAgICAgIGxldCByZXQyID0gdXNlQm9keVJhbmRvbUlkUHJvcHMocmV0MSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleHBhbmRlZDogb3BlbixcbiAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyLFxuICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5LFxuICAgICAgICB9O1xuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHNdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbixcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjY29yZGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuLyoqXG4gKiBBZGRzIGFuIElEIGFuZCBcImFyaWEtbGFiZWxsZWRieVwiIGZvciB0d28gZWxlbWVudHMsIGFuIFwiaW5wdXRcIiBlbGVtZW50IGFuZCBhIFwibGFiZWxcIiBlbGVtZW50LlxuICpcbiAqIFJldHVybnMgdGhlIGB1c2VSZWZlcmVuY2VkSWRQcm9wc2AgaG9va3MgaWYgeW91IG5lZWQgdG8gYWxzbyBhZGQgb3RoZXIgSUQtcmVmZXJlbmNpbmcgYXR0cmlidXRlcywgbGlrZSBgZm9yYFxuICpcbiAqIEBzZWUgdXNlSW5wdXRMYWJlbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4LCBiYWNrdXBUZXh0IH0gPSB7IGxhYmVsUHJlZml4OiBcImxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJpbnB1dC1cIiB9KSB7XG4gICAgY29uc3QgW2xhYmVsRWxlbWVudCwgc2V0TGFiZWxFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtpbnB1dEVsZW1lbnQsIHNldElucHV0RWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldExhYmVsRWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0TGFiZWxFbGVtZW50IH0pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0SW5wdXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUlucHV0UmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRJbnB1dEVsZW1lbnQgfSk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VMYWJlbFJhbmRvbUlkUHJvcHMsIGlkOiBsYWJlbElkLCByYW5kb21JZDogbGFiZWxSYW5kb21JZCwgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBsYWJlbFByZWZpeCB9KTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZUlucHV0UmFuZG9tSWRQcm9wcywgaWQ6IGlucHV0SWQsIHJhbmRvbUlkOiBpbnB1dFJhbmRvbUlkLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IGlucHV0UHJlZml4IH0pO1xuICAgIGNvbnN0IGxhYmVsSGFzTW91bnRlZCA9ICEhKGxhYmVsRWxlbWVudCk7XG4gICAgY29uc3QgaW5wdXRIYXNNb3VudGVkID0gISEoaW5wdXRFbGVtZW50KTtcbiAgICBjb25zdCB1c2VHZW5lcmljTGFiZWxMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbExhYmVsKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wczogKHByb3BzKSA9PiB7IHJldHVybiB1c2VMYWJlbFJhbmRvbUlkUHJvcHModXNlTGFiZWxSZWZFbGVtZW50UHJvcHMocHJvcHMpKTsgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VHZW5lcmljTGFiZWxJbnB1dCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbElucHV0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wczogKHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkYnksIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsIC4uLnByb3BzIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHVzZUlucHV0UmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHVzZUlucHV0UmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtbGFiZWxcIjogKCFsYWJlbEhhc01vdW50ZWQgPyBiYWNrdXBUZXh0IDogYXJpYUxhYmVsKSA/PyBhcmlhTGFiZWwgfSwgcHJvcHMpKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbbGFiZWxIYXNNb3VudGVkXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsSW5wdXQsXG4gICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsLFxuICAgICAgICB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLFxuICAgICAgICB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLFxuICAgICAgICBsYWJlbElkLFxuICAgICAgICBpbnB1dElkLFxuICAgICAgICBsYWJlbEVsZW1lbnQsXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50LFxuICAgICAgICBnZXRJbnB1dEVsZW1lbnQsXG4gICAgfTtcbn1cbi8qKlxuICogSGFuZGxlcyB0aGUgYXR0cmlidXRlcyBgaWRgLCBgZm9yYCwgYW5kIGBhcmlhLWxhYmVsbGVkYnlgIGZvciB0byByZWxhdGVkIGVsZW1lbnRzLlxuICpcbiAqIEl0J3MgYXNzdW1lZCB0aGF0IHRoZSBsYWJlbCBpcyBhbiBgSFRNTExhYmVsRWxlbWVudGAsIGFuZCB0aGUgaW5wdXQgaXMgc29tZXRoaW5nIGZvciB3aGljaFxuICogdGhlIGBmb3JgIGF0dHJpYnV0ZSBjYW4gcmVmZXJlbmNlLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlucHV0TGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXggfSA9IHsgbGFiZWxQcmVmaXg6IFwibGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImlucHV0LVwiIH0pIHtcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcywgaW5wdXRJZCwgbGFiZWxJZCwgaW5wdXRFbGVtZW50LCBnZXRJbnB1dEVsZW1lbnQsIGxhYmVsRWxlbWVudCwgZ2V0TGFiZWxFbGVtZW50IH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXggfSk7XG4gICAgY29uc3QgdXNlSW5wdXRMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlSW5wdXRMYWJlbExhYmVsKHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlSW5wdXRMYWJlbExhYmVsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRoRm9yID0gdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyhcImZvclwiKShwcm9wcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aG91dEZvciA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHRhZyA9PSBcImxhYmVsXCIgPyB3aXRoRm9yIDogd2l0aG91dEZvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbElucHV0XSk7XG4gICAgY29uc3QgdXNlSW5wdXRMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlSW5wdXRMYWJlbElucHV0KCkge1xuICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbElucHV0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VJbnB1dExhYmVsSW5wdXRQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VJbnB1dExhYmVsTGFiZWwsXG4gICAgICAgIHVzZUlucHV0TGFiZWxJbnB1dCxcbiAgICAgICAgbGFiZWxJZCxcbiAgICAgICAgaW5wdXRJZCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICBsYWJlbEVsZW1lbnQsXG4gICAgICAgIGdldElucHV0RWxlbWVudCxcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50XG4gICAgfTtcbn1cbmNvbnN0IGhhbmRsZXNJbnB1dCA9ICh0YWcsIGxhYmVsUG9zaXRpb24sIHdoaWNoKSA9PiB7XG4gICAgaWYgKGxhYmVsUG9zaXRpb24gPT09IFwic2VwYXJhdGVcIikge1xuICAgICAgICBpZiAod2hpY2ggPT09IFwiaW5wdXQtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgaWYgKHdoaWNoID09PSBcImxhYmVsLWVsZW1lbnRcIilcbiAgICAgICAgICAgIHJldHVybiB0YWcgIT0gXCJpbnB1dFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYWJlbFBvc2l0aW9uID09PSBcIndyYXBwaW5nXCIpIHtcbiAgICAgICAgaWYgKHdoaWNoID09PSBcImlucHV0LWVsZW1lbnRcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHdoaWNoID09IFwibGFiZWwtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbi8qKlxuICogSGFuZGxlcyBsYWJlbCB0eXBlICh3cmFwcGluZyBvciBzZXBhcmF0ZSkgZm9yIGNoZWNrYm94ZXMsIHJhZGlvcywgc3dpdGNoZXMsIGV0Yy5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja2JveExpa2UoeyBjaGVja2VkLCBkaXNhYmxlZCwgbGFiZWxQb3NpdGlvbiwgb25JbnB1dCwgcm9sZSB9KSB7XG4gICAgY29uc3Qgc3RhYmxlT25JbnB1dCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgb25JbnB1dD8uKGUpOyB9KTtcbiAgICBjb25zdCB7IGlucHV0SWQsIGxhYmVsSWQsIHVzZUlucHV0TGFiZWxJbnB1dDogdXNlSUxJbnB1dCwgdXNlSW5wdXRMYWJlbExhYmVsOiB1c2VJTExhYmVsLCBnZXRMYWJlbEVsZW1lbnQsIGdldElucHV0RWxlbWVudCB9ID0gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtY2hlY2tib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtY2hlY2tib3gtaW5wdXQtXCIgfSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUlucHV0TGFiZWxJbnB1dFByb3BzOiB1c2VJTElucHV0UHJvcHMgfSA9IHVzZUlMSW5wdXQoKTtcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgICAgICAvLyBvbkNsaWNrIGFuZCBvbkNoYW5nZSBhcmUgYSBiaXQgbWVzc3ksIHNvIHdlIG5lZWQgdG9cbiAgICAgICAgLy8gKmFsd2F5cyogbWFrZSBzdXJlIHRoYXQgdGhlIHZpc2libGUgc3RhdGUgaXMgY29ycmVjdFxuICAgICAgICAvLyBhZnRlciBhbGwgdGhlIGV2ZW50IGR1c3Qgc2V0dGxlcy5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzI3NDUsXG4gICAgICAgIC8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8xODk5I2lzc3VlY29tbWVudC01MjU2OTAxOTRcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWcgPT0gXCJpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhZywgY2hlY2tlZF0pO1xuICAgICAgICByZXR1cm4geyBnZXRJbnB1dEVsZW1lbnQ6IGdldEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xuICAgICAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBDaHJvbWUgd29uJ3QgZmlyZSBvbklucHV0IGV2ZW50cyBmb3IgcmFkaW8gYnV0dG9ucyB0aGF0IGFyZSB0YWJJbmRleD0tMT8/XG4gICAgICAgICAgICAvLyBOZWVkcyBpbnZlc3RpZ2F0aW5nLCBidXQgb25JbnB1dCB3b3JrcyBmaW5lIGluIEZpcmVmb3hcbiAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhkaXNhYmxlZCB8fCAhaGFuZGxlc0lucHV0KHRhZywgbGFiZWxQb3NpdGlvbiwgXCJpbnB1dC1lbGVtZW50XCIpID8gdW5kZWZpbmVkIDogc3RhYmxlT25JbnB1dCwgdW5kZWZpbmVkKSh7fSk7XG4gICAgICAgICAgICBpZiAodGFnID09IFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICBwcm9wcy5vbklucHV0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHByb3BzID0gdXNlUmVmRWxlbWVudFByb3BzKHVzZUlMSW5wdXRQcm9wcyhwcm9wcykpO1xuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgd3JhcHBlZCBsYWJlbCBoYW5kbGVzIGFsbCBpbnRlcmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhpcyBlbGVtZW50IGNhbid0IGJlIGludGVyYWN0ZWQgd2l0aFxuICAgICAgICAgICAgICAgIC8vIGV2ZW4gaWYgaXQncyBhbiBpbnB1dCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHByb3BzLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIHByb3BzLm9uRm9jdXMgPSBlID0+IGdldExhYmVsRWxlbWVudCgpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGFnID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5yb2xlID0gcm9sZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtY2hlY2tlZFwiXSA9IGNoZWNrZWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gZGlzYWJsZWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGxhYmVsIGNsaWNrcyBjYW4ndCBhZmZlY3QgdGhlIGNoZWNrYm94IHdoaWxlIGl0J3MgZGlzYWJsZWRcbiAgICAgICAgICAgIHByb3BzLm9uQ2xpY2sgPSBkaXNhYmxlZCA/ICgoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH0pIDogcHJvcHMub25DbGljaztcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHAwLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlSUxJbnB1dCwgcm9sZSwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWQsIGNoZWNrZWRdKTtcbiAgICBjb25zdCB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlSW5wdXRMYWJlbExhYmVsUHJvcHM6IHVzZUlMTGFiZWxQcm9wcyB9ID0gdXNlSUxMYWJlbCh7IHRhZyB9KTtcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoZGlzYWJsZWQgfHwgIWhhbmRsZXNJbnB1dCh0YWcsIGxhYmVsUG9zaXRpb24sIFwibGFiZWwtZWxlbWVudFwiKSA/IHVuZGVmaW5lZCA6IHN0YWJsZU9uSW5wdXQsIHVuZGVmaW5lZCkoe30pO1xuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnJvbGUgPSByb2xlO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWNoZWNrZWRcIl0gPSBjaGVja2VkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgb25lIGNhc2Ugd2hlcmUgdGhlcmUncyBhbG1vc3Qgbm90aGluZyB0byBkb1xuICAgICAgICAgICAgICAgIC8vIFRoZSBtb3N0IG5vcm1hbCBjYXNlIHdoZXJlIGV2ZXJ5dGhpbmcgYWN0cyBhY2NvcmRpbmcgbm9ybWFsIEhUTUwgbWVjaGFuaWNzLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSnVzdCBtYWtlIHN1cmUgdGhhdCBsYWJlbCBjbGlja3MgY2FuJ3QgYWZmZWN0IHRoZSBjaGVja2JveCB3aGlsZSBpdCdzIGRpc2FibGVkXG4gICAgICAgICAgICBuZXdQcm9wcy5vbkNsaWNrID0gZGlzYWJsZWQgPyAoKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KSA6IG5ld1Byb3BzLm9uQ2xpY2s7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgdXNlSUxMYWJlbFByb3BzKHAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbdXNlSUxMYWJlbCwgZGlzYWJsZWQsIGNoZWNrZWQsIHJvbGUsIGxhYmVsUG9zaXRpb25dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsXG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCxcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50LFxuICAgICAgICBnZXRJbnB1dEVsZW1lbnRcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxhYmVsLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZUNoZWNrYm94TGlrZSB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFDaGVja2JveCh7IGxhYmVsUG9zaXRpb24sIGNoZWNrZWQsIG9uSW5wdXQsIGRpc2FibGVkIH0pIHtcbiAgICBjb25zdCBvbklucHV0RW5oYW5jZWQgPSAoZSkgPT4gb25JbnB1dD8uKGVuaGFuY2VFdmVudChlLCB7IGNoZWNrZWQ6ICFjaGVja2VkIH0pKTtcbiAgICBjb25zdCB7IGdldElucHV0RWxlbWVudCwgZ2V0TGFiZWxFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCB9ID0gdXNlQ2hlY2tib3hMaWtlKHsgY2hlY2tlZDogISFjaGVja2VkLCBsYWJlbFBvc2l0aW9uLCByb2xlOiBcImNoZWNrYm94XCIsIGRpc2FibGVkLCBvbklucHV0OiBvbklucHV0RW5oYW5jZWQgfSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50KHsgdGFnIH0pO1xuICAgICAgICBjb25zdCBpc01peGVkID0gKGNoZWNrZWQgPT0gXCJtaXhlZFwiKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGdldElucHV0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudCAmJiB0YWcgPT09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pbmRldGVybWluYXRlID0gaXNNaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2lzTWl4ZWQsIHRhZ10pO1xuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveElucHV0RWxlbWVudFByb3BzIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyhwMCk7XG4gICAgICAgICAgICBwcm9wcy5jaGVja2VkID8/PSAhIWNoZWNrZWQ7XG4gICAgICAgICAgICBpZiAodGFnID09IFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICBwcm9wcy50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgY2hlY2tlZCwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWRdKTtcbiAgICBjb25zdCB1c2VDaGVja2JveExhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50KHsgdGFnIH0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94TGFiZWxFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50LCBkaXNhYmxlZCwgbGFiZWxQb3NpdGlvbl0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50LFxuICAgICAgICB1c2VDaGVja2JveExhYmVsRWxlbWVudFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3guanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCwgZW5oYW5jZUV2ZW50IH0gZnJvbSBcIi4vcHJvcHNcIjtcbi8qKlxuICpcbiAqXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tib3hHcm91cCh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBzaG91bGRGb2N1c09uQ2hhbmdlLCBvblVwZGF0ZUNoaWxkcmVuOiBvblVwZGF0ZUNoaWxkcmVuVW5zdGFibGUgfSkge1xuICAgIGNvbnN0IG9uVXBkYXRlQ2hpbGRyZW4gPSB1c2VTdGFibGVDYWxsYmFjayhvblVwZGF0ZUNoaWxkcmVuVW5zdGFibGUpO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIHNob3VsZEZvY3VzT25DaGFuZ2UgfSk7XG4gICAgLy9jb25zdCBbdW5jaGVja2VkQ291bnQsIHNldFVuaGVja2VkQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2NoZWNrZWRDb3VudCwgc2V0Q2hlY2tlZENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNoZWNrZWRJbmRpY2VzID0gdXNlUmVmKG5ldyBTZXQoKSk7XG4gICAgLy9jb25zdCBbc2VsZklzQ2hlY2tlZCwgc2V0U2VsZklzQ2hlY2tlZCwgZ2V0U2VsZklzQ2hlY2tlZF0gPSB1c2VTdGF0ZTxib29sZWFuIHwgXCJtaXhlZFwiPihmYWxzZSk7XG4gICAgY29uc3QgZ2V0U2VsZklzQ2hlY2tlZFVuc3RhYmxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCI7XG4gICAgfSwgW2NoZWNrZWRDb3VudCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aF0pO1xuICAgIGNvbnN0IGdldFNlbGZJc0NoZWNrZWRTdGFibGUgPSB1c2VTdGFibGVDYWxsYmFjayhnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUpO1xuICAgIC8vIElmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSBwYXJlbnQgY2hlY2tib3gncyB2YWx1ZSwgdGhlbiB0aGlzIHJlZiBob2xkcyBhIG1lbW9yeSBvZiB3aGF0IHZhbHVlcyB3ZXJlIGhlbGQgYmVmb3JlLlxuICAgIC8vIE90aGVyd2lzZSwgaXQncyBudWxsIHdoZW4gdGhlIGxhc3QgaW5wdXQgd2FzIGZyb20gYSBjaGlsZCBjaGVja2JveC4gXG4gICAgY29uc3Qgc2F2ZWRDaGVja2VkVmFsdWVzID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG9uQ2hlY2tib3hHcm91cFBhcmVudElucHV0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxmSXNDaGVja2VkID0gZ2V0U2VsZklzQ2hlY2tlZFN0YWJsZSgpO1xuICAgICAgICBpZiAoc2VsZklzQ2hlY2tlZCA9PT0gdHJ1ZSB8fCAoc2VsZklzQ2hlY2tlZCA9PT0gZmFsc2UgJiYgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogZmFsc2UgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGZJc0NoZWNrZWQgPT09IFwibWl4ZWRcIikge1xuICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudC5zZXQoY2hpbGQuaW5kZXgsIGNoaWxkLmdldENoZWNrZWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA/PyB0cnVlIH0pKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBjaGlsZCBJRHMsIGFuZCBhbnkgdGltZSBhbnkgb2YgdGhlbSBjaGFuZ2UsIFxuICAgIC8vIGdlbmVyYXRlIGEgbmV3IHN0cmluZyB3aXRoIGFsbCBvZiB0aGVtIGNvbmNhdGVuYXRlZCB0b2dldGhlclxuICAgIC8vIChidXQgb25seSBvbmNlIHBlciByZW5kZXIpO1xuICAgIGNvbnN0IGFsbElkcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xuICAgIGNvbnN0IFthcmlhQ29udHJvbHMsIHNldEFyaWFDb250cm9sc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdXBkYXRlSW5kZXgsIHNldElkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3Qgbm90aWZ5Q2hlY2tlZCA9IHVzZUNhbGxiYWNrKChpbmRleCwgY2hlY2tlZCkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFjaGVja2VkSW5kaWNlcy5jdXJyZW50LmhhcyhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyArIDEpKTtcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmFkZChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZEluZGljZXMuY3VycmVudC5oYXMoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENvdW50KGMgPT4gKGMgLSAxKSk7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEluZGljZXMuY3VycmVudC5kZWxldGUoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3NldENoZWNrZWRDb3VudCwgY2hlY2tlZEluZGljZXNdKTtcbiAgICAvKnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgc2V0U2VsZklzQ2hlY2tlZChwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCIpXG4gICAgfSwgW3NldFNlbGZJc0NoZWNrZWQsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgsIGNoZWNrZWRDb3VudF0pOyovXG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cFBhcmVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLWNvbnRyb2xzXCI6IGFyaWFDb250cm9scyB9LCBwcm9wcyk7XG4gICAgfSwgW2FyaWFDb250cm9sc10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEFyaWFDb250cm9scyhBcnJheS5mcm9tKGFsbElkcy5jdXJyZW50KS5qb2luKFwiIFwiKSk7XG4gICAgfSwgW3VwZGF0ZUluZGV4XSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cENoaWxkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHsgaW5kZXgsIHRleHQsIGNoZWNrZWQsIGlkLCAuLi5yZXN0IH0pIHtcbiAgICAgICAgY29uc3QgZ2V0Q2hlY2tlZCA9IHVzZVN0YWJsZUdldHRlcihjaGVja2VkKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGFsbElkcy5jdXJyZW50LmFkZChpZCk7XG4gICAgICAgICAgICBzZXRJZFVwZGF0ZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuZGVsZXRlKGlkKTtcbiAgICAgICAgICAgICAgICBzZXRJZFVwZGF0ZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtpZF0pO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5Q2hlY2tlZChpbmRleCwgY2hlY2tlZCk7XG4gICAgICAgIH0sIFtpbmRleCwgY2hlY2tlZF0pO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgaW5kZXgsIHRleHQsIGlkLCBnZXRDaGVja2VkLCAuLi5yZXN0IH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFiYmFibGUsXG4gICAgICAgICAgICB1c2VDaGVja2JveEdyb3VwQ2hpbGRQcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpKSwgW3VzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wc10pXG4gICAgICAgIH07XG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIG5vdGlmeUNoZWNrZWQsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYW5hZ2VkQ2hlY2tib3hlczogbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICB1c2VDaGVja2JveEdyb3VwQ2hpbGQsXG4gICAgICAgIHVzZUNoZWNrYm94R3JvdXBQYXJlbnRQcm9wcyxcbiAgICAgICAgcGFyZW50SXNDaGVja2VkOiBnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUoKSxcbiAgICAgICAgcGFyZW50UGVyY2VudENoZWNrZWQ6IChjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSxcbiAgICAgICAgb25DaGVja2JveEdyb3VwUGFyZW50SW5wdXQsXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXG4gICAgICAgIGZvY3VzOiBmb2N1c0N1cnJlbnQsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3gtZ3JvdXAuanMubWFwIiwiaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCwgdXNlRm9jdXNUcmFwLCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogQWRkcyBldmVudCBoYW5kbGVycyBmb3IgYSBtb2RhbC1saWtlIHNvZnQtZGlzbWlzcyBpbnRlcmFjdGlvbi5cbiAqXG4gKiBUaGF0IGlzLCBhbnkgY2xpY2tzIG9yIHRhcHMgb3V0c2lkZSBvZiB0aGUgZ2l2ZW4gY29tcG9uZW50LFxuICogb3IgYW55IHRpbWUgdGhlIEVzY2FwZSBrZXkgaXMgcHJlc3NlZCB3aXRoaW4gdGhlIGNvbXBvbmVudCxcbiAqICh3aXRoIHZhcmlvdXMgYnJvd3NlciBvZGRpdGllcyByZWdhcmRpbmcgY2xpY2tzIG9uIGJsYW5rIG9yIGluZXJ0IGFyZWFzIGhhbmRsZWQpXG4gKiB0aGUgY29tcG9uZW50IHdpbGwgcmVxdWVzdCB0byBjbG9zZSBpdHNlbGYuXG4gKlxuICogT2YgY291cnNlLCBpZiB5b3UgZG9uJ3QgZG8gYW55dGhpbmcgaW4gdGhlIGBvbkNsb3NlYCBmdW5jdGlvbixcbiAqIGl0IHdvbid0IGJlIGEgc29mdCBkaXNtaXNzIGFueW1vcmUuXG4gKlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZSwgZ2V0RWxlbWVudHMgfSkge1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcbiAgICBjb25zdCBzdGFibGVHZXRFbGVtZW50cyA9IHVzZVN0YWJsZUNhbGxiYWNrKGdldEVsZW1lbnRzKTtcbiAgICBjb25zdCBnZXRPcGVuID0gdXNlU3RhYmxlR2V0dGVyKG9wZW4pO1xuICAgIGNvbnN0IG9uQmFja2Ryb3BDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIG9uQmFja2Ryb3BDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RWxlbWVudCgpPy5vd25lckRvY3VtZW50O1xuICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudD8uZGVmYXVsdFZpZXc7XG4gICAgICAgIC8vIEJhc2ljYWxseSwgXCJ3YXMgdGhpcyBldmVudCBmaXJlZCBvbiB0aGUgcm9vdC1tb3N0IGVsZW1lbnQsIG9yIGF0IGxlYXN0IGFuIGVsZW1lbnQgbm90IGNvbnRhaW5lZCBieSB0aGUgbW9kYWw/XCJcbiAgICAgICAgLy8gRWl0aGVyIGNvdWxkIGJlIGhvdyB0aGUgYnJvd3NlciBoYW5kbGVzIHRoZXNlIHNvcnRzIG9mIFwiaW50ZXJhY3Rpbmcgd2l0aCBub3RoaW5nXCIgZXZlbnRzLlxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgc3RhYmxlT25DbG9zZShcImJhY2tkcm9wXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50cyA9IHN0YWJsZUdldEVsZW1lbnRzKCk7XG4gICAgICAgIGlmIChlbGVtZW50cyAmJiBlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuICAgICAgICAgICAgbGV0IGZvdW5kSW5zaWRlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJbnNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmRJbnNpZGVDbGljaylcbiAgICAgICAgICAgICAgICBvbkNsb3NlKFwiYmFja2Ryb3BcIik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgeyB1c2VBY3RpdmVFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoe1xuICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygobmV3RWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkRm9jdXNhYmxlRWxlbWVudHMgPSBzdGFibGVHZXRFbGVtZW50cygpO1xuICAgICAgICAgICAgaWYgKHZhbGlkRm9jdXNhYmxlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsaWRGb2N1c2FibGVFbGVtZW50cykpXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRm9jdXNhYmxlRWxlbWVudHMgPSBbdmFsaWRGb2N1c2FibGVFbGVtZW50c107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZm9jdXNhYmxlIG9mIHZhbGlkRm9jdXNhYmxlRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZT8uY29udGFpbnMobmV3RWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbG9zZShcImxvc3QtZm9jdXNcIik7XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlPy5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgLy8gU2luY2UgZXZlcnl0aGluZyBlbHNlIGlzIGluZXJ0LCB3ZSBsaXN0ZW4gZm9yIGNhcHR1cmVkIGNsaWNrcyBvbiB0aGUgd2luZG93XG4gICAgICAgICAgICAvLyAod2UgZG9uJ3QgdXNlIG9uQ2xpY2sgc2luY2UgdGhhdCBkb2Vzbid0IGZpcmUgd2hlbiBjbGlja2VkIG9uIGVtcHR5L2luZXJ0IGFyZWFzKVxuICAgICAgICAgICAgLy8gTm90ZTogV2UgbmVlZCBhICpzZXBhcmF0ZSogdG91Y2ggZXZlbnQgb24gbW9iaWxlIFNhZmFyaSwgYmVjYXVzZVxuICAgICAgICAgICAgLy8gaXQgZG9lc24ndCBsZXQgY2xpY2sgZXZlbnRzIGJ1YmJsZSBvciBiZSBjYXB0dXJlZCBmcm9tIHRyYWRpdGlvbmFsbHkgbm9uLWludGVyYWN0aXZlIGVsZW1lbnRzLFxuICAgICAgICAgICAgLy8gYnV0IHRvdWNoIGV2ZW50cyB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICAgICAgY29uc3QgbW91c2VEb3duID0gKGUpID0+IHsgaWYgKGdldE9wZW4oKSlcbiAgICAgICAgICAgICAgICBvbkJhY2tkcm9wQ2xpY2soZSk7IH07XG4gICAgICAgICAgICBjb25zdCB0b3VjaFN0YXJ0ID0gKGUpID0+IHsgaWYgKGdldE9wZW4oKSlcbiAgICAgICAgICAgICAgICBvbkJhY2tkcm9wQ2xpY2soZSk7IH07XG4gICAgICAgICAgICBjb25zdCBrZXlEb3duID0gKGUpID0+IHsgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgc3RhYmxlT25DbG9zZShcImVzY2FwZVwiKTtcbiAgICAgICAgICAgIH0gfTtcbiAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd24sIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydCwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgdXNlU29mdERpc21pc3NQcm9wczogdXNlQ2FsbGJhY2socHJvcHMgPT4gdXNlQWN0aXZlRWxlbWVudFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpLCBbdXNlQWN0aXZlRWxlbWVudFByb3BzLCB1c2VSZWZFbGVtZW50UHJvcHNdKSB9O1xufVxuLyoqXG4gKiBBIGdlbmVyaWMgbW9kYWwgaG9vaywgdXNlZCBieSBtb2RhbCBkaWFsb2dzLCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgYnkgYW55dGhpbmcgdGhhdCdzIG1vZGFsIHdpdGggYSBiYWNrZHJvcC5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSkge1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcbiAgICBjb25zdCBbbW9kYWxEZXNjcmliZWRCeUJvZHksIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VIaWRlU2Nyb2xsKG9wZW4pO1xuICAgIGNvbnN0IHsgaWQ6IG1vZGFsSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1vZGFsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1vZGFsUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLVwiIH0pO1xuICAgIGNvbnN0IHsgaWQ6IGJvZHlJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLWJvZHktXCIgfSk7XG4gICAgY29uc3QgeyBpZDogdGl0bGVJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlVGl0bGVJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlVGl0bGVSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtdGl0bGUtXCIgfSk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZU1vZGFsUmVmRWxlbWVudCwgZ2V0RWxlbWVudDogZ2V0TW9kYWxFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICBjb25zdCB7IHVzZVNvZnREaXNtaXNzUHJvcHMgfSA9IHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZTogc3RhYmxlT25DbG9zZSwgZ2V0RWxlbWVudHM6IGdldE1vZGFsRWxlbWVudCB9KTtcbiAgICBjb25zdCB1c2VNb2RhbEJhY2tkcm9wID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxCYWNrZHJvcCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlTW9kYWxCYWNrZHJvcFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlclVwOiAoKSA9PiBzdGFibGVPbkNsb3NlKFwiYmFja2Ryb3BcIikgfSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VNb2RhbFByb3BzID0gZnVuY3Rpb24gKHsgXCJhcmlhLW1vZGFsXCI6IGFyaWFNb2RhbCwgcm9sZSwgLi4ucDAgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUZvY3VzVHJhcFByb3BzIH0gPSB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlOiBvcGVuIH0pO1xuICAgICAgICBjb25zdCBwMSA9IHVzZVRpdGxlUmVmZXJlbmNpbmdJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHAwKTtcbiAgICAgICAgY29uc3QgcDIgPSB1c2VNb2RhbElkUHJvcHMocDEpO1xuICAgICAgICBjb25zdCBwRmluYWwgPSB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzKFwiYXJpYS1kZXNjcmliZWRieVwiKShwMik7XG4gICAgICAgIHJldHVybiB1c2VGb2N1c1RyYXBQcm9wcyh1c2VTb2Z0RGlzbWlzc1Byb3BzKHVzZU1lcmdlZFByb3BzKCkodXNlTW9kYWxSZWZFbGVtZW50KHsgcm9sZTogXCJkaWFsb2dcIiB9KSwgbW9kYWxEZXNjcmliZWRCeUJvZHkgPyBwRmluYWwgOiBwMikpKTtcbiAgICB9O1xuICAgIGNvbnN0IHVzZU1vZGFsVGl0bGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbFRpdGxlKCkge1xuICAgICAgICBjb25zdCB1c2VNb2RhbFRpdGxlUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VUaXRsZUlkUHJvcHMocHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyB1c2VNb2RhbFRpdGxlUHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlTW9kYWxCb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxCb2R5KHsgZGVzY3JpcHRpdmUgfSkge1xuICAgICAgICBzZXRNb2RhbERlc2NyaWJlZEJ5Qm9keShkZXNjcmlwdGl2ZSk7XG4gICAgICAgIGNvbnN0IHVzZU1vZGFsQm9keVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlQm9keUlkUHJvcHMocHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyB1c2VNb2RhbEJvZHlQcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VNb2RhbFByb3BzLFxuICAgICAgICB1c2VNb2RhbFRpdGxlLFxuICAgICAgICB1c2VNb2RhbEJvZHksXG4gICAgICAgIHVzZU1vZGFsQmFja2Ryb3BcbiAgICB9O1xufVxuLyoqXG4gKiBBbGxvd3MgZm9yIGhpZGluZyB0aGUgc2Nyb2xsIGJhciBvZiB0aGUgcm9vdCBIVE1MIGVsZW1lbnRcbiAqIHdpdGhvdXQgc2hpZnRpbmcgdGhlIGxheW91dCBvZiB0aGUgcGFnZSBtb3JlIHRoYW4gYWRkaW5nIGEgZm93IHBpeGVsc1xuICogb2YgcGFkZGluZyB0byB0aGUgcm9vdCBlbGVtZW50IGlmIG5lY2Vzc2FyeS5cbiAqIEBwYXJhbSBoaWRlU2Nyb2xsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VIaWRlU2Nyb2xsKGhpZGVTY3JvbGwpIHtcbiAgICBjb25zdCBbZ2V0U2Nyb2xsYmFyV2lkdGgsIHNldFNjcm9sbGJhcldpZHRoXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZ2V0U2Nyb2xsYmFySGVpZ2h0LCBzZXRTY3JvbGxiYXJIZWlnaHRdID0gdXNlUGFzc2l2ZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChoaWRlU2Nyb2xsKSB7XG4gICAgICAgICAgICAvLyBXaGVuIHNjcm9sbGluZyBpcyByZXN1bWVkLCB3ZSdsbCBuZWVkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8ga2VlcCB0aGlzIGluZm9ybWF0aW9uIGFyb3VuZFxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAvLyBNZWFzdXJlIHRoZSB3aWR0aCBvZiB0aGUgcGFnZSAobWludXMgdGhlIHNjcm9sbGJhcilcbiAgICAgICAgICAgIGxldCB3aWR0aFdpdGhTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0V2l0aFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAvLyBBcHBseSBhIGNsYXNzIHRoYXQgaGlkZXMgdGhlIHNjcm9sbGJhci5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZG9jdW1lbnQtc2Nyb2xsLWhpZGRlblwiKTtcbiAgICAgICAgICAgIC8vIEluIGNhc2UgbXVsdGlwbGUgdGhpbmdzIGFyZSBsb2NraW5nIHNjcm9sbCwga2VlcCB0cmFjayBvZiBob3cgbWFueSBhcmUgZG9pbmcgdGhhdFxuICAgICAgICAgICAgLy8gKGp1c3QgYWRkIDEgb24gZW5hYmxlLCBzdWJ0cmFjdCAxIG9uIGRpc2FibGUpXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9ICgrKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdIHx8IFwiMFwiKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyBNZWFzdXJlIHRoZSBuZXcgd2lkdGggd2l0aG91dCBhIHNjcm9sbGJhciBcbiAgICAgICAgICAgIC8vIHNvIHdlIGNhbiB0YWtlIHRoZSBkaWZmZXJlbmNlIGFzIHRoZSBzY3JvbGxiYXIgd2lkdGguXG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRob3V0U2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodFdpdGhvdXRTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgbGV0IHNjcm9sbGJhcldpZHRoID0gKHdpZHRoV2l0aG91dFNjcm9sbEJhciAtIHdpZHRoV2l0aFNjcm9sbEJhcik7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsYmFySGVpZ2h0ID0gKGhlaWdodFdpdGhvdXRTY3JvbGxCYXIgLSBoZWlnaHRXaXRoU2Nyb2xsQmFyKTtcbiAgICAgICAgICAgIC8vIEZhaWxzYWZlIC0tIGlmIHRoaXMgbWVhc3VyaW5nIHRyaWNrIGRvZXMgc29tZXRoaW5nIHVuZXhwZWN0ZWQsIGp1c3QgaWdub3JlIGl0XG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFyV2lkdGggPiA4MClcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJXaWR0aCA9IDA7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFySGVpZ2h0ID4gODApXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFySGVpZ2h0ID0gMDtcbiAgICAgICAgICAgIC8vIE1ha2Ugb3VyIG1lYXN1cmVtZW50cyBhdmFpbGFibGUgYXMgQ1NTIHByb3BlcnRpZXMgZm9yIGdlbmVyYWwgdXNlXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsYmFyLXdpZHRoXCIsIGAke3Njcm9sbGJhcldpZHRofXB4YCk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsYmFyLWhlaWdodFwiLCBgJHtzY3JvbGxiYXJIZWlnaHR9cHhgKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxzdG9wLXRvcFwiLCBgJHtvcmlnaW5hbFNjcm9sbFRvcH1weGApO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbHN0b3AtbGVmdFwiLCBgJHtvcmlnaW5hbFNjcm9sbExlZnR9cHhgKTtcbiAgICAgICAgICAgIHNldFNjcm9sbGJhcldpZHRoKHNjcm9sbGJhcldpZHRoKTtcbiAgICAgICAgICAgIHNldFNjcm9sbGJhckhlaWdodChzY3JvbGxiYXJIZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVbmRvIGFsbCB0aGUgdGhpbmdzIHdlIGp1c3QgZGlkXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgLSAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIHRoZSBsYXN0IHNjcm9sbC1sb2NraW5nIHRoaW5nIHRvIHN0b3AsIHRoZW4gcmVtb3ZlIHRoZSBjbGFzcyB0aGF0IHN0b3BzIHNjcm9sbGluZy5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWhpZGVyc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb2N1bWVudC1zY3JvbGwtaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBbHNvLCByZXN0b3JlIHRoZSBvcmlnaW5hbCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG8gdGhpcyBieSBmb3JjaW5nIHRoZSBzY3JvbGwgYmVoYXZpb3IgdG8gbm90IGJlIHNtb290aFxuICAgICAgICAgICAgICAgICAgICAvLyAoaXQncyBpbnN0YW50IGlmIG5vdGhpbmcgaXMgc2V0IHRvIHNtb290aCwgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzc29tLXZpZXcvI3Njcm9sbGluZyksXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZywgdGhlbiByZXN0b3JpbmcgdGhlIG9yaWdpbmFsIHNjcm9sbCBiZWhhdmlvciBcbiAgICAgICAgICAgICAgICAgICAgLy8gKHdoaWNoIHdhcyBwcm9iYWJseSBhbHJlYWR5IGF1dG8gYW55d2F5LCBidXQganVzdCB0byBiZSBzYWZlKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjcm9sbEJlaGF2aW9yID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvKHsgdG9wOiBvcmlnaW5hbFNjcm9sbFRvcCwgbGVmdDogb3JpZ2luYWxTY3JvbGxMZWZ0LCBiZWhhdmlvcjogXCJhdXRvXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IG9yaWdpbmFsU2Nyb2xsQmVoYXZpb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFtoaWRlU2Nyb2xsXSk7XG4gICAgcmV0dXJuIHsgZ2V0U2Nyb2xsYmFyV2lkdGgsIGdldFNjcm9sbGJhckhlaWdodCB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1vZGFsLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiLi91c2UtbW9kYWxcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhRGlhbG9nKHsgb3Blbiwgb25DbG9zZSB9KSB7XG4gICAgLy8gVE9ETzogRGlmZmVyZW5jZXMgYmV0d2VlbiBkaWFsb2cgYW5kIG1vZGFsIGdvIGhlcmUsIHByZXN1bWFibHkuXG4gICAgLy8gTm9uLW1vZGFsIGRpYWxvZ3MgbmVlZCB0byBiZSBhYmxlIHRvIGJlIHJlcG9zaXRpb25lZCwgZXRjLlxuICAgIGNvbnN0IHsgdXNlTW9kYWxCYWNrZHJvcCwgdXNlTW9kYWxCb2R5LCB1c2VNb2RhbFByb3BzLCB1c2VNb2RhbFRpdGxlIH0gPSB1c2VNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSk7XG4gICAgY29uc3QgdXNlRGlhbG9nQmFja2Ryb3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxCYWNrZHJvcFByb3BzIH0gPSB1c2VNb2RhbEJhY2tkcm9wKCk7XG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ0JhY2tkcm9wUHJvcHM6IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9O1xuICAgIH0sIFt1c2VNb2RhbEJhY2tkcm9wXSk7XG4gICAgY29uc3QgdXNlRGlhbG9nQm9keSA9IHVzZUNhbGxiYWNrKCh7IGRlc2NyaXB0aXZlIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbEJvZHlQcm9wcyB9ID0gdXNlTW9kYWxCb2R5KHsgZGVzY3JpcHRpdmUgfSk7XG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ0JvZHlQcm9wczogdXNlTW9kYWxCb2R5UHJvcHMgfTtcbiAgICB9LCBbdXNlTW9kYWxCYWNrZHJvcF0pO1xuICAgIGNvbnN0IHVzZURpYWxvZ1Byb3BzID0gdXNlTW9kYWxQcm9wcztcbiAgICBjb25zdCB1c2VEaWFsb2dUaXRsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbFRpdGxlUHJvcHMgfSA9IHVzZU1vZGFsVGl0bGUoKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nVGl0bGVQcm9wczogdXNlTW9kYWxUaXRsZVByb3BzIH07XG4gICAgfSwgW3VzZU1vZGFsVGl0bGVdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VEaWFsb2dQcm9wcyxcbiAgICAgICAgdXNlRGlhbG9nVGl0bGUsXG4gICAgICAgIHVzZURpYWxvZ0JvZHksXG4gICAgICAgIHVzZURpYWxvZ0JhY2tkcm9wXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kaWFsb2cuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlR2VuZXJpY0xhYmVsIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hNdWx0aSh7IC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcywgZ2V0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7fSk7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dCwgdXNlR2VuZXJpY0xhYmVsTGFiZWwsIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtbGlzdGJveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1saXN0Ym94LVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIGN1cnJlbnRUeXBlYWhlYWQsIGZvY3VzQ3VycmVudCwgdGFiYmFibGVJbmRleCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRGb2N1c2VkSW5uZXIgfSk7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IFtzaGlmdEhlbGQsIHNldFNoaWZ0SGVsZCwgZ2V0U2hpZnRIZWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0eXBlYWhlYWRJblByb2dyZXNzID0gKCEhY3VycmVudFR5cGVhaGVhZCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZENvdW50OyArK2kpIHtcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpXS5zZXRUeXBlYWhlYWRJblByb2dyZXNzKHR5cGVhaGVhZEluUHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgfSwgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIGNoaWxkQ291bnRdKTtcbiAgICBjb25zdCB1c2VMaXN0Ym94TXVsdGlJdGVtID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpbmZvLnNlbGVjdGVkO1xuICAgICAgICBjb25zdCBbdHlwZWFoZWFkSW5Qcm9ncmVzcywgc2V0VHlwZWFoZWFkSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gdXNlU3RhYmxlR2V0dGVyKHNlbGVjdGVkKTtcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgICAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKGluZm8ub25TZWxlY3QgPz8gKCgpID0+IHsgfSkpO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgLi4uaW5mbywgc2V0VHlwZWFoZWFkSW5Qcm9ncmVzcyB9KTtcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBnZXRTaGlmdEhlbGQoKSkge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWQ6IHRydWUgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUl0ZW1Qcm9wcywgdGFiYmFibGUgfTtcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpSXRlbVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhpbmZvLmRpc2FibGVkID8gbnVsbCA6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyAuLi5lLCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkOiAhZ2V0U2VsZWN0ZWQoKSB9IH0pO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sIHsgc3BhY2U6IHR5cGVhaGVhZEluUHJvZ3Jlc3MgPyBcImV4Y2x1ZGVcIiA6IHVuZGVmaW5lZCB9KSh7fSk7XG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJvcHRpb25cIjtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZXRzaXplXCJdID0gKGNoaWxkQ291bnQpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtcG9zaW5zZXRcIl0gPSAoaW5mby5pbmRleCArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAodGFiYmFibGUgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoaW5mby5kaXNhYmxlZClcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBcInRydWVcIjtcbiAgICAgICAgICAgIHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHByb3BzKSkpO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIGNoaWxkQ291bnQsIHR5cGVhaGVhZEluUHJvZ3Jlc3NdKTtcbiAgICBjb25zdCB1c2VMaXN0Ym94TXVsdGlMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUxhYmVsKCkge1xuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlMYWJlbFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XG4gICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpTGFiZWxQcm9wcyB9O1xuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xuICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUl0ZW0sIHVzZUxpc3Rib3hNdWx0aVByb3BzLCB1c2VMaXN0Ym94TXVsdGlMYWJlbCwgdGFiYmFibGVJbmRleCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgZm9jdXM6IGZvY3VzQ3VycmVudCwgbWFuYWdlZENoaWxkcmVuIH07XG4gICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpUHJvcHMocHJvcHMpIHtcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibGlzdGJveFwiO1xuICAgICAgICBwcm9wc1tcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCJdID0gXCJ0cnVlXCI7XG4gICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvblByb3BzKHVzZUhhc0ZvY3VzUHJvcHModXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbktleVVwLCBvbkZvY3VzT3V0IH0sIHByb3BzKSkpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHsgaWYgKGUua2V5ID09IFwiU2hpZnRcIilcbiAgICAgICAgc2V0U2hpZnRIZWxkKHRydWUpOyB9XG4gICAgZnVuY3Rpb24gb25LZXlVcChlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXG4gICAgICAgIHNldFNoaWZ0SGVsZChmYWxzZSk7IH1cbiAgICBmdW5jdGlvbiBvbkZvY3VzT3V0KGUpIHsgc2V0U2hpZnRIZWxkKGZhbHNlKTsgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxpc3Rib3gtbXVsdGkuanMubWFwIiwiaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCwgdXNlQ2hpbGRGbGFnLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VHZW5lcmljTGFiZWwgfSBmcm9tIFwiLi91c2UtbGFiZWxcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTGlzdGJveFNpbmdsZSh7IHNlbGVjdGVkSW5kZXgsIG9uU2VsZWN0LCBzZWxlY3Rpb25Nb2RlLCAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCBbYW55SXRlbXNGb2N1c2VkLCBzZXRBbnlJdGVtc0ZvY3VzZWQsIGdldEFueUl0ZW1zRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dCwgdXNlR2VuZXJpY0xhYmVsTGFiZWwsIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsIGdldElucHV0RWxlbWVudCB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1saXN0Ym94LWxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJhcmlhLWxpc3Rib3gtXCIgfSk7XG4gICAgY29uc3QgeyB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCBuYXZpZ2F0ZVRvSW5kZXgsIG1hbmFnZWRDaGlsZHJlbiwgdGFiYmFibGVJbmRleCwgZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IC4uLmFyZ3MsIHNob3VsZEZvY3VzT25DaGFuZ2U6IGdldEFueUl0ZW1zRm9jdXNlZCB9KTtcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbElucHV0KCk7XG4gICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhvblNlbGVjdCA/PyAoKCkgPT4geyB9KSk7XG4gICAgLy8gVHJhY2sgd2hldGhlciB0aGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHRoZSBsaXN0IGJveCBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBXaGVuIGl0J3Mgbm90LCB3ZSByZXNldCB0aGUgdGFiYmFibGUgaW5kZXggYmFjayB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQuXG4gICAgY29uc3QgeyB1c2VBY3RpdmVFbGVtZW50UHJvcHMgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoeyBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChhY3RpdmVFbGVtZW50KSA9PiBzZXRBbnlJdGVtc0ZvY3VzZWQoISEoZ2V0SW5wdXRFbGVtZW50KCk/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSksIFtdKSB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWFueUl0ZW1zRm9jdXNlZClcbiAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChzZWxlY3RlZEluZGV4KTtcbiAgICB9LCBbYW55SXRlbXNGb2N1c2VkLCBzZWxlY3RlZEluZGV4LCBuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZENoaWxkcmVuW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IChtYW5hZ2VkQ2hpbGRyZW5baV0/LmdldFNlbGVjdGVkKCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoc2VsZWN0ZWRJbmRleCk7XG4gICAgfSwgW3NlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCB1c2VMaXN0Ym94U2luZ2xlSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkLCAuLi5pbmZvIH0pO1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5mby5pbmRleDtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlID09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlLCBzZWxlY3Rpb25Nb2RlLCBpbmRleF0pO1xuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzLCB0YWJiYWJsZSwgc2VsZWN0ZWQsIGdldFNlbGVjdGVkIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVJdGVtUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKGluZm8uZGlzYWJsZWQgPyBudWxsIDogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCkoe30pO1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2V0c2l6ZVwiXSA9IChjaGlsZENvdW50KS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHNlbGVjdGVkID8/IGZhbHNlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGluZm8uZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpKTtcbiAgICAgICAgfVxuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCBzZWxlY3Rpb25Nb2RlLCBjaGlsZENvdW50XSk7XG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsKCkge1xuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlTGFiZWxQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveFNpbmdsZUxhYmVsUHJvcHMgfTtcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcbiAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlSXRlbSwgdXNlTGlzdGJveFNpbmdsZVByb3BzLCB1c2VMaXN0Ym94U2luZ2xlTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGZvY3VzOiBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIG1hbmFnZWRDaGlsZHJlbiB9O1xuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVQcm9wcyhwcm9wcykge1xuICAgICAgICBwcm9wcy5yb2xlID0gXCJsaXN0Ym94XCI7XG4gICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvblByb3BzKHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHModXNlQWN0aXZlRWxlbWVudFByb3BzKHByb3BzKSkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0Ym94LXNpbmdsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VIYXNGb2N1cywgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUsIHVzZVRpbWVvdXQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZVNvZnREaXNtaXNzIH0gZnJvbSBcIi4vdXNlLW1vZGFsXCI7XG4vKipcbiAqIEEgbWVudSBpcyBhIHBvcHVwIGNvbnRyb2wgdGhhdCBjb250YWlucyBhIGxpc3Qgb2YgbWVudSBpdGVtcywgYW5kIHRoYXQncyBpdC5cbiAqIEl0IGhhcyB2ZXJ5IHdlbGwtZGVmaW5lZCBsb2dpYyBmb3IgbWFuYWdpbmcgdGhvc2UgaXRlbXMgYXMgdGhlIG1lbnUncyBzdGF0ZSBjaGFuZ2VzLlxuICpcbiAqIEEgTWVudUJhc2UgaXMganVzdCB0aGUgXCJwb3B1cFwiIHBhcnQgd2l0aG91dCB0aGUgXCJsaXN0IG9mIG1lbnUgaXRlbXNcIiBwYXJ0LiBJdCBjYW5cbiAqIChyZWFsbHksIG11c3QpIGhhdmUgaW50ZXJhY3RpdmUgY29udHJvbHMsIGJ1dCB0aGVzZSBjb250cm9scyBhcmUgYWxsb3dlZCB0byBiZSBtb3JlXG4gKiBmcmVlLWZvcm0uIFRoaXMgbWVhbnMgdGhhdCwgbGlrZSBhIGRpYWxvZywgeW91IG11c3QgdGVsbCB0aGlzIGhvb2tcbiAqIHdoZXJlIHdpdGhpbiB0aGUgcG9wdXAgdG8gc2VuZCBmb2N1cyB3aGVuIG9wZW5lZCAoZm9yIGEgbWVudSBpdCdzIGp1c3QgdGhlIGZpcnN0XG4gKiBtZW51IGl0ZW0sIGJ1dCB3aXRoIGN1c3RvbSBjb250ZW50IHlvdSdsbCBuZWVkIHRvIHByb3ZpZGUgdGhpcykuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVudUJhc2UoeyBzZW5kRm9jdXNXaXRoaW5NZW51LCAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCBnZXRTZW5kRm9jdXNXaXRoaW5NZW51ID0gdXNlU3RhYmxlR2V0dGVyKHNlbmRGb2N1c1dpdGhpbk1lbnUpO1xuICAgIGNvbnN0IFtmb2N1c1RyYXBBY3RpdmUsIHNldEZvY3VzVHJhcEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBsZXQgb25DbG9zZSA9IGFyZ3Mub25DbG9zZTtcbiAgICBsZXQgb25PcGVuID0gYXJncy5vbk9wZW47XG4gICAgbGV0IG1lbnViYXIgPSBhcmdzLm1lbnViYXI7XG4gICAgbGV0IG9wZW4gPSAobWVudWJhciA/IHRydWUgOiBhcmdzLm9wZW4pO1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlID8/ICgoKSA9PiB7IH0pKTtcbiAgICBjb25zdCBnZXRPcGVuID0gdXNlU3RhYmxlR2V0dGVyKG9wZW4pO1xuICAgIC8vIFRPRE86IEl0J3MgYXdrd2FyZCB0aGF0IHRoZSBidXR0b24gZm9jdXMgcHJvcHMgYXJlIG91dCBoZXJlIHdoZXJlIHdlIGRvbid0IGhhdmUgaXRzIHR5cGUsXG4gICAgLy8gYnV0IGZvY3VzIG1hbmFnZW1lbnQgaXMgc3VwZXIgc2Vuc2l0aXZlLCBhbmQgZXZlbiB3YWl0aW5nIGZvciBhIHVzZUxheW91dEVmZmVjdCB0byBzeW5jIHN0YXRlIGhlcmVcbiAgICAvLyB3b3VsZCBiZSB0b28gbGF0ZSwgc28gaXQgd291bGQgbG9vayBsaWtlIHRoZXJlJ3MgYSBtb21lbnQgYmV0d2VlbiBtZW51IGZvY3VzIGxvc3QgYW5kIGJ1dHRvbiBmb2N1cyBnYWluZWRcbiAgICAvLyB3aGVyZSBub3RoaW5nIGlzIGZvY3VzZWQuIFxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzLCBnZXRMYXN0Rm9jdXNlZElubmVyOiBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHsgLypvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkOiBvbk1lbnVPckJ1dHRvbkxvc3RMYXN0Rm9jdXMqL30pO1xuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlQnV0dG9uSGFzRm9jdXNQcm9wcywgZ2V0TGFzdEZvY3VzZWRJbm5lcjogZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7IC8qb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZDogb25NZW51T3JCdXR0b25Mb3N0TGFzdEZvY3VzKi99KTtcbiAgICBjb25zdCBbb3BlbmVyRWxlbWVudCwgc2V0T3BlbmVyRWxlbWVudCwgZ2V0T3BlbmVyRWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1lbnVCYXNlSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1lbnVCYXNlSWRSZWZlcmVuY2luZ1Byb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1lbnUtXCIgfSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRCdXR0b25FbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUJ1dHRvblJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0T3BlbmVyRWxlbWVudCB9KTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldE1lbnVFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZU1lbnVCYXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICBjb25zdCB7IHVzZVNvZnREaXNtaXNzUHJvcHMgfSA9IHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZTogc3RhYmxlT25DbG9zZSwgZ2V0RWxlbWVudHM6ICgpID0+IChbZ2V0QnV0dG9uRWxlbWVudCgpLCBnZXRNZW51RWxlbWVudCgpXSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Rm9jdXNUcmFwQWN0aXZlKG9wZW4pO1xuICAgIH0sIFtvcGVuXSk7XG4gICAgY29uc3QgdXNlTWVudUJhc2VQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIgJiYgZ2V0T3BlbigpKSB7XG4gICAgICAgICAgICAgICAgc3RhYmxlT25DbG9zZSgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZVNvZnREaXNtaXNzUHJvcHModXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzKHVzZU1lbnVCYXNlUmVmRWxlbWVudFByb3BzKHVzZU1lbnVCYXNlSWRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIChwcm9wcykpKSkpKTtcbiAgICB9LCBbdXNlU29mdERpc21pc3NQcm9wcywgdXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzLCB1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcywgdXNlTWVudUJhc2VJZFByb3BzXSk7XG4gICAgY29uc3QgdXNlTWVudUJhc2VCdXR0b25Qcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzKHVzZUJ1dHRvbkhhc0ZvY3VzUHJvcHModXNlTWVudUJhc2VJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHByb3BzKSkpO1xuICAgIH0sIFt1c2VCdXR0b25IYXNGb2N1c1Byb3BzLCB1c2VCdXR0b25SZWZFbGVtZW50UHJvcHMsIHVzZU1lbnVCYXNlSWRSZWZlcmVuY2luZ1Byb3BzXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VuZEZvY3VzV2l0aGluTWVudSA9IGdldFNlbmRGb2N1c1dpdGhpbk1lbnUoKTtcbiAgICAgICAgaWYgKGZvY3VzVHJhcEFjdGl2ZSkge1xuICAgICAgICAgICAgc2VuZEZvY3VzV2l0aGluTWVudT8uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9jdXNUcmFwQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lcigpKVxuICAgICAgICAgICAgICAgIGdldE9wZW5lckVsZW1lbnQoKT8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbnVsbCwgc28gd2UndmUgb25seSBqdXN0IG1vdW50ZWQgYW5kIHNob3VsZG4ndCBmb2N1cyBvdXJzZWx2ZXMuXG4gICAgICAgIH1cbiAgICB9LCBbZm9jdXNUcmFwQWN0aXZlXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTWVudVNlbnRpbmVsOiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHVzZVNlbnRpbmVsUHJvcHM6IHVzZU1lbnVTZW50aW5lbFByb3BzLCAuLi5yZXN0IH0gPSB1c2VGb2N1c1NlbnRpbmVsKHsgb3Blbiwgb25DbG9zZTogKG9uQ2xvc2UgPz8gKCgpID0+IHsgfSkpLCBzZW5kRm9jdXNXaXRoaW5NZW51IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgdXNlTWVudVNlbnRpbmVsUHJvcHMsIC4uLnJlc3QgfTtcbiAgICAgICAgfSwgW29wZW4sIG9uQ2xvc2UsIHNlbmRGb2N1c1dpdGhpbk1lbnVdKSxcbiAgICAgICAgZm9jdXNUcmFwQWN0aXZlLFxuICAgICAgICB1c2VNZW51QmFzZVByb3BzLFxuICAgICAgICB1c2VNZW51QmFzZUJ1dHRvblByb3BzLFxuICAgICAgICBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIsXG4gICAgICAgIGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lcixcbiAgICAgICAgb3BlbixcbiAgICAgICAgb25PcGVuLFxuICAgICAgICBvbkNsb3NlXG4gICAgfTtcbn1cbi8vIEEgZm9jdXMgc2VudGluYWwgaXMgYSBoaWRkZW4gYnV0IGZvY3VzYWJsZSBlbGVtZW50IHRoYXQgY29tZXMgYXQgdGhlIHN0YXJ0IG9yIGVuZCBcbi8vIG9mIHRoZSBvdXQtb2YtcGxhY2UtZm9jdXNhYmxlIGNvbXBvbmVudCB0aGF0LCB3aGVuIGFjdGl2YXRlZCBvciBmb2N1c2VkIG92ZXIsIGNsb3NlcyB0aGUgY29tcG9uZW50XG4vLyAoaWYgZm9jdXNlZCB3aXRoaW4gMTAwbXMgb2YgdGhlIG9wZW4gcHJvcCBjaGFuZ2luZywgaW5zdGVhZCBvZlxuLy8gY2xvc2luZywgZm9jdXNpbmcgdGhlIHNlbnRpbmVsIGltbWVkaWF0ZWx5IGFza3MgaXQgdG8gZm9jdXMgaXRzZWxmKS5cbi8vIFRoaXMgZXhpc3RzIGZvciB0aGluZ3MgbGlrZSBtZW51cyB3aGljaCBjYW4gaGF2ZSBmb2N1cyBidXQgYWxzbyBuZWVkIGEgd2F5IHRvIHJldHVyblxuLy8gdG8gd2hhdGV2ZXIgb3V0LW9mLXBsYWNlIHBhcmVudCB0aGV5IGNhbWUgZnJvbSB3aGVuIG5hdHVyYWxseSB0YWJiZWQgb3V0IG9mIChhcyBvcHBvc2VkXG4vLyB0byBkaWFsb2dzIHdoaWNoIGxvb3AgYmFjayBhcm91bmQgd2hlbiB0YWJiZWQgb3V0IG9mKS4gV2hpbGUgbW91c2UgdXNlcnMgY2FuIGNsaWNrIG91dCBvZiBhIG1lbnVcbi8vIGFuZCBrZXlib2FyZCB1c2VycyBjYW4gZXNjYXBlIHRvIGNsb3NlIGEgbWVudSwgc2NyZWVuIHJlYWRlcnMgYW5kIG90aGVyIGlucHV0IG1ldGhvZHMgXG4vLyB0aGF0IGRvbid0IHVzZSB0aG9zZSB0d28gd291bGQgYmVjb21lIHN0dWNrLlxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzU2VudGluZWwoeyBvcGVuLCBvbkNsb3NlLCBzZW5kRm9jdXNXaXRoaW5NZW51IH0pIHtcbiAgICBjb25zdCBnZXRTZW5kRm9jdXNXaXRoaW5NZW51ID0gdXNlU3RhYmxlR2V0dGVyKHNlbmRGb2N1c1dpdGhpbk1lbnUpO1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcbiAgICBjb25zdCBbZmlyc3RTZW50aW5lbElzQWN0aXZlLCBzZXRGaXJzdFNlbnRpbmVsSXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZVRpbWVvdXQoeyBjYWxsYmFjazogKCkgPT4geyBzZXRGaXJzdFNlbnRpbmVsSXNBY3RpdmUob3Blbik7IH0sIHRpbWVvdXQ6IDEwMCwgdHJpZ2dlckluZGV4OiBgJHtvcGVufS0ke2ZpcnN0U2VudGluZWxJc0FjdGl2ZX1gIH0pO1xuICAgIGNvbnN0IG9uRm9jdXMgPSBmaXJzdFNlbnRpbmVsSXNBY3RpdmUgPyAoKCkgPT4gc3RhYmxlT25DbG9zZSgpKSA6ICgoKSA9PiBnZXRTZW5kRm9jdXNXaXRoaW5NZW51KCk/LigpKTtcbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4gc3RhYmxlT25DbG9zZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVNlbnRpbmVsUHJvcHM6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRm9jdXMsIG9uQ2xpY2sgfSwgcCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFNZW51KHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIG5vVHlwZWFoZWFkLCBub1dyYXAsIHR5cGVhaGVhZFRpbWVvdXQsIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQ6IGZvY3VzTWVudSwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgbm9UeXBlYWhlYWQsIG5vV3JhcCwgdHlwZWFoZWFkVGltZW91dCwgc2hvdWxkRm9jdXNPbkNoYW5nZTogdXNlQ2FsbGJhY2soKCkgPT4gZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyKCkgfHwgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyKCksIFtdKSB9KTtcbiAgICBjb25zdCB7IHVzZU1lbnVTZW50aW5lbCwgZm9jdXNUcmFwQWN0aXZlLCB1c2VNZW51QmFzZUJ1dHRvblByb3BzLCB1c2VNZW51QmFzZVByb3BzLCBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIsIGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lciwgb3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VNZW51QmFzZSh7IC4uLmFyZ3MsIHNlbmRGb2N1c1dpdGhpbk1lbnU6IGZvY3VzTWVudSA/PyAoKCkgPT4geyB9KSB9KTtcbiAgICBjb25zdCB1c2VNZW51QnV0dG9uID0gdXNlQ2FsbGJhY2soKHt9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VNZW51QnV0dG9uUHJvcHM6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlTWVudUJhc2VCdXR0b25Qcm9wcyhwKTtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtaGFzcG9wdXBcIl0gPSBcIm1lbnVcIjtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZXhwYW5kZWRcIl0gPSBvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtvcGVuLCBvbkNsb3NlLCBvbk9wZW4sIHVzZU1lbnVCYXNlQnV0dG9uUHJvcHNdKTtcbiAgICAvKmNvbnN0IHVzZU1lbnVTdWJtZW51SXRlbSA9IHVzZUNhbGxiYWNrKChhcmdzOiBVc2VNZW51U3VibWVudUl0ZW1QYXJhbWV0ZXJzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTWVudVByb3BzLCB1c2VNZW51QnV0dG9uIH0gPSB1c2VBcmlhTWVudTxIVE1MRWxlbWVudCwgQ2hpbGRFbGVtZW50LCBJPihhcmdzKTtcbiAgICAgICAgY29uc3QgeyB1c2VNZW51QnV0dG9uUHJvcHMgfSA9IHVzZU1lbnVCdXR0b248RT4oeyB0YWc6IFwibGlcIiBhcyBhbnkgfSk7XG5cbiAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQ8YW55Pih7IG9uRWxlbWVudENoYW5nZTogc2V0T3BlbmVyRWxlbWVudCBhcyBPblBhc3NpdmVTdGF0ZUNoYW5nZTxhbnk+IH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICAgICAgdXNlTWVudVByb3BzLFxuICAgICAgICAgICAgdXNlTWVudVN1Ym1lbnVJdGVtUHJvcHM6IGZ1bmN0aW9uIDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHsgLi4ucHJvcHMgfTogUCkge1xuICAgICAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZW51QnV0dG9uUHJvcHModXNlTWVudUlkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtY29udHJvbHNcIikocHJvcHMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSk7Ki9cbiAgICBjb25zdCB1c2VNZW51SXRlbSA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKGFyZ3MpO1xuICAgICAgICBmdW5jdGlvbiB1c2VNZW51SXRlbVByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1cIjtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMocHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VNZW51SXRlbVByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIGZ1bmN0aW9uIHVzZU1lbnVQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudVwiO1xuICAgICAgICByZXR1cm4gdXNlTWVudUJhc2VQcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1lbnVQcm9wcyxcbiAgICAgICAgdXNlTWVudUJ1dHRvbixcbiAgICAgICAgdXNlTWVudUl0ZW0sXG4gICAgICAgIHVzZU1lbnVTZW50aW5lbCxcbiAgICAgICAgLy91c2VNZW51U3VibWVudUl0ZW0sXG4gICAgICAgIGZvY3VzTWVudSxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZW51LmpzLm1hcCIsImltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyLCB1c2VIYXNGb2N1cywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTG9naWNhbERpcmVjdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYVRhYnMoeyBzZWxlY3Rpb25Nb2RlLCBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgb3JpZW50YXRpb246IGxvZ2ljYWxPcmllbnRhdGlvbiwgLi4uYXJncyB9KSB7XG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzOiB1c2VUYWJMaXN0SGFzRm9jdXNQcm9wcywgZ2V0Rm9jdXNlZElubmVyOiBnZXRUYWJMaXN0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7fSk7XG4gICAgY29uc3QgW3BoeXNpY2FsT3JpZW50YXRpb24sIHNldFBoeXNpY2FsT3JpZW50YXRpb25dID0gdXNlU3RhdGUoXCJob3Jpem9udGFsXCIpO1xuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZTogdXNlQ2FsbGJhY2soKGxvZ2ljYWxEaXJlY3Rpb25JbmZvKSA9PiBzZXRQaHlzaWNhbE9yaWVudGF0aW9uKGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24obG9naWNhbE9yaWVudGF0aW9uLCBsb2dpY2FsRGlyZWN0aW9uSW5mbykpLCBbXSkgfSk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJMaXN0SWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRUYWJMaXN0SWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLWxpc3QtXCIgfSk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJMYWJlbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGFiZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItbGFiZWwtXCIgfSk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBuYXZpZ2F0ZVRvSW5kZXgsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQsIGN1cnJlbnRUeXBlYWhlYWQsIGZvY3VzQ3VycmVudCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRUYWJMaXN0Rm9jdXNlZElubmVyLCBrZXlOYXZpZ2F0aW9uOiBsb2dpY2FsT3JpZW50YXRpb24gfSk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRQYW5lbHMsIHVzZU1hbmFnZWRDaGlsZDogdXNlTWFuYWdlZFRhYlBhbmVsIH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcbiAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uU2VsZWN0KTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZFRhYnMubGVuZ3RoO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRUYWJzKVxuICAgICAgICAgICAgY2hpbGQuc2V0U2VsZWN0aW9uTW9kZShzZWxlY3Rpb25Nb2RlKTtcbiAgICB9LCBbc2VsZWN0aW9uTW9kZV0pO1xuICAgIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZFRhYnNbaV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSwgZ2V0Q2hpbGRGbGFnOiBpID0+IChtYW5hZ2VkVGFic1tpXT8uZ2V0U2VsZWN0ZWQoKSkgfSk7XG4gICAgdXNlQ2hpbGRGbGFnKHsgYWN0aXZhdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFBhbmVscywgc2V0Q2hpbGRGbGFnOiAoaSwgdmlzaWJsZSkgPT4gbWFuYWdlZFBhbmVsc1tpXT8uc2V0VmlzaWJsZSh2aXNpYmxlKSwgZ2V0Q2hpbGRGbGFnOiBpID0+IChtYW5hZ2VkUGFuZWxzW2ldPy5nZXRWaXNpYmxlKCkpIH0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgocHJldikgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHNlbGVjdGlvbk1vZGUgPT0gXCJhY3RpdmF0ZVwiKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHdhaXQgYSBtb21lbnQgc28gdGhhdCB0aGUgdGFiIHBhbmVsIHdlIHdhbnQgdG8gZm9jdXNcbiAgICAgICAgICAgIC8vIGlzIGFjdHVhbGx5IHZpc2libGUgKGkuZS4gd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgY2hpbGQgdG8gcmUtcmVuZGVyIGl0c2VsZikuXG4gICAgICAgICAgICAvLyBXZSBjb3VsZCwgYWx0ZXJuYXRpdmVseSwgc2lnbmFsIHRvIHRoZSBjaGlsZCB0aGF0IGl0IHNob3VsZCBmb2N1cyBpdHNlbGZcbiAgICAgICAgICAgIC8vIHRoZSBuZXh0IHRpbWUgaXQgcmVuZGVycyBpdHNlbGYgYXMgdmlzaWJsZSxcbiAgICAgICAgICAgIC8vIHdoaWNoIG1pZ2h0IGJlIGJldHRlcj9cbiAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYW5hZ2VkUGFuZWxzW3NlbGVjdGVkSW5kZXhdPy5mb2N1cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbY2hpbGRDb3VudCwgc2VsZWN0ZWRJbmRleCwgc2VsZWN0aW9uTW9kZV0pO1xuICAgIGNvbnN0IHVzZVRhYiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYihpbmZvKSB7XG4gICAgICAgIGNvbnN0IFtzZWxlY3Rpb25Nb2RlTCwgc2V0U2VsZWN0aW9uTW9kZUxdID0gdXNlU3RhdGUoc2VsZWN0aW9uTW9kZSk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgY29uc3QgW3RhYlBhbmVsSWQsIHNldFRhYlBhbmVsSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICAgICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJJZFByb3BzLCBpZDogdGFiSWQsIGdldElkOiBnZXRUYWJJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItXCIgfSk7XG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkLCB0YWJJZCwgc2V0VGFiUGFuZWxJZCwgc2V0U2VsZWN0aW9uTW9kZTogc2V0U2VsZWN0aW9uTW9kZUwsIC4uLmluZm8gfSk7XG4gICAgICAgIGNvbnN0IGdldEluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKGluZm8uaW5kZXgpO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmICh0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlTCA9PSBcImZvY3VzXCIpIHtcbiAgICAgICAgICAgICAgICBvblNlbGVjdCh7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBnZXRJbmRleCgpIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0YWJiYWJsZSwgc2VsZWN0aW9uTW9kZV0pO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4geyBtYW5hZ2VkUGFuZWxzW2luZm8uaW5kZXhdPy5zZXRUYWJJZCh0YWJJZCk7IH0sIFt0YWJJZCwgaW5mby5pbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VUYWJQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgIG9uU2VsZWN0Py4oZW5oYW5jZUV2ZW50KGUsIHsgc2VsZWN0ZWRJbmRleDogZ2V0SW5kZXgoKSB9KSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSwgdW5kZWZpbmVkKShwcm9wcyk7XG4gICAgICAgICAgICBuZXdQcm9wcy5yb2xlID0gXCJ0YWJcIjtcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9IChzZWxlY3RlZCA/PyBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1jb250cm9sc1wiXSA9IHRhYlBhbmVsSWQ7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlVGFiSWRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlUmVmRWxlbWVudFByb3BzKG5ld1Byb3BzKSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUYWJQcm9wcywgc2VsZWN0ZWQgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlVGFiUGFuZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VQYW5lbChpbmZvKSB7XG4gICAgICAgIC8vY29uc3QgW3Nob3VsZEZvY3VzLCBzZXRTaG91bGRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIGNvbnN0IFt0YWJJZCwgc2V0VGFiSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICAgICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGUsIGdldFZpc2libGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlUGFuZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFBhbmVsSWQsIGlkOiB0YWJQYW5lbElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1wYW5lbC1cIiB9KTtcbiAgICAgICAgY29uc3QgeyB1c2VNYW5hZ2VkQ2hpbGRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlTWFuYWdlZFRhYlBhbmVsKHsgLi4uaW5mbywgdGFiUGFuZWxJZCwgc2V0VGFiSWQsIGZvY3VzLCBzZXRWaXNpYmxlOiBzZXRWaXNpYmxlLCBnZXRWaXNpYmxlOiBnZXRWaXNpYmxlIH0pO1xuICAgICAgICBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBnZXRUYWJMaXN0Rm9jdXNlZElubmVyKCkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50Py5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFRhYnNbaW5mby5pbmRleF0/LnNldFRhYlBhbmVsSWQodGFiUGFuZWxJZCk7IH0sIFt0YWJQYW5lbElkLCBpbmZvLmluZGV4XSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYlBhbmVsUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtbGFiZWxsZWRieVwiXSA9IG1hbmFnZWRUYWJzW2luZm8uaW5kZXhdPy50YWJJZDtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYnBhbmVsXCI7XG4gICAgICAgICAgICBwcm9wcy50YWJJbmRleCA/Pz0gLTE7IC8vIE1ha2Ugc3VyZSB0aGUgdGFiIHBhbmVsIGlzIHRhYmJhYmxlLlxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVBhbmVsSWRQcm9wcyh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyhwcm9wcykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUYWJQYW5lbFByb3BzLCB2aXNpYmxlIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZVRhYnNMaXN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFiTGlzdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiTGlzdFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwidGFibGlzdFwiO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLW9yaWVudGF0aW9uXCJdID0gcGh5c2ljYWxPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkVGFiTGFiZWxJZChcImFyaWEtbGFiZWxsZWRieVwiKSh1c2VUYWJMaXN0SGFzRm9jdXNQcm9wcyh1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiTGlzdFByb3BzIH07XG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHBoeXNpY2FsT3JpZW50YXRpb25dKTtcbiAgICBjb25zdCB1c2VUYWJzTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWJzTGFiZWwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYnNMYWJlbFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZVRhYkxhYmVsSWRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFic0xhYmVsUHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHsgdXNlVGFiLCB1c2VUYWJQYW5lbCwgdXNlVGFic0xpc3QsIHVzZVRhYnNMYWJlbCwgdGFiYmFibGVJbmRleCwgZm9jdXNUYWJMaXN0OiBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIG1hbmFnZWRQYW5lbHMsIG1hbmFnZWRUYWJzIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGFicy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VHbG9iYWxIYW5kbGVyLCB1c2VIYXNGb2N1cywgdXNlTWVyZ2VkUHJvcHMsIHVzZVBhc3NpdmVTdGF0ZSwgdXNlUmFuZG9tSWQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFUb29sdGlwKHsgbW91c2VvdmVyRGVsYXksIG1vdXNlb3V0RGVsYXksIGZvY3VzRGVsYXkgfSkge1xuICAgIG1vdXNlb3ZlckRlbGF5ID8/PSA0MDA7XG4gICAgbW91c2VvdXREZWxheSA/Pz0gNDA7XG4gICAgZm9jdXNEZWxheSA/Pz0gMTtcbiAgICAvLyBUaGUgZXNjYXBlIGtleSBzaG91bGQgY2xvc2UgdG9vbHRpcHMsIGJ1dCBkbyBub3RoaW5nIGVsc2UuXG4gICAgLy8gKGkuZS4gY2xvc2luZyBhIHRvb2x0aXAgaW4gYSBkaWFsb2cgTVVTVCBOT1QgY2xvc2UgdGhlIGRpYWxvZyB0b28pXG4gICAgLy8gVE9ETzogVG9vbHRpcHMgYXJlLCBlZmZlY3RpdmVseSwgYWx3YXlzIHRoZSB0b3Btb3N0IGNvbXBvbmVudCxcbiAgICAvLyBzbyB3ZSBjYW4ganVzdCBoYXZlIHRoZW0gbGlzdGVuIHRvIGFuZCBzd2FsbG93IGFsbCBcIkVzY2FwZVwiXG4gICAgLy8ga2V5IHByZXNzZXMgYmVmb3JlIGFueW9uZSBlbHNlLiBGb3IgYSBtb3JlIGdlbmVyYWwgcG9wdXAsXG4gICAgLy8gb3IgYSB0b29sdGlwIGluIGEgdG9vbHRpcCAoISEpIGEgZGlmZmVyZW50IHNvbHV0aW9uIHdvdWxkIGJlIG5lZWRlZC5cbiAgICB1c2VHbG9iYWxIYW5kbGVyKGRvY3VtZW50LCBcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGdldE9wZW4oKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiAhZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRUcmlnZ2VySG92ZXJEZWxheUNvcnJlY3RlZChmYWxzZSk7XG4gICAgICAgICAgICBzZXRUb29sdGlwSG92ZXJEZWxheUNvcnJlY3RlZChmYWxzZSk7XG4gICAgICAgICAgICBzZXRUcmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFRvb2x0aXBGb2N1c2VkRGVsYXlDb3JyZWN0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuLCBnZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRvb2x0aXBJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10b29sdGlwLVwiIH0pO1xuICAgIGNvbnN0IFtnZXRUcmlnZ2VyRm9jdXNlZCwgc2V0VHJpZ2dlckZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKHVzZVN0YWJsZUNhbGxiYWNrKChmb2N1c2VkKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gZm9jdXNlZCA/IGZvY3VzRGVsYXkgOiAxO1xuICAgICAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiBpc0Zpbml0ZShkZWxheSkpIHtcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHNldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWQoZm9jdXNlZCksIGZvY3VzZWQgPyBmb2N1c0RlbGF5IDogMSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICB9KSwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRUb29sdGlwRm9jdXNlZCwgc2V0VG9vbHRpcEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKHVzZVN0YWJsZUNhbGxiYWNrKChmb2N1c2VkKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gZm9jdXNlZCA/IGZvY3VzRGVsYXkgOiAxO1xuICAgICAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiBpc0Zpbml0ZShkZWxheSkpIHtcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHNldFRvb2x0aXBGb2N1c2VkRGVsYXlDb3JyZWN0ZWQoZm9jdXNlZCksIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgfVxuICAgIH0pLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldFRyaWdnZXJIb3Zlciwgc2V0VHJpZ2dlckhvdmVyXSA9IHVzZVBhc3NpdmVTdGF0ZSh1c2VTdGFibGVDYWxsYmFjaygoaG92ZXJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBob3ZlcmluZyA/IG1vdXNlb3ZlckRlbGF5IDogbW91c2VvdXREZWxheTtcbiAgICAgICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgaXNGaW5pdGUoZGVsYXkpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBzZXRUcmlnZ2VySG92ZXJEZWxheUNvcnJlY3RlZChob3ZlcmluZyksIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgfVxuICAgIH0pLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldFRvb2x0aXBIb3Zlciwgc2V0VG9vbHRpcEhvdmVyXSA9IHVzZVBhc3NpdmVTdGF0ZSh1c2VTdGFibGVDYWxsYmFjaygoaG92ZXJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBob3ZlcmluZyA/IG1vdXNlb3ZlckRlbGF5IDogbW91c2VvdXREZWxheTtcbiAgICAgICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgaXNGaW5pdGUoZGVsYXkpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBzZXRUb29sdGlwSG92ZXJEZWxheUNvcnJlY3RlZChob3ZlcmluZyksIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgfVxuICAgIH0pLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWQsIHNldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtnZXRUcmlnZ2VySG92ZXJEZWxheUNvcnJlY3RlZCwgc2V0VHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtnZXRUb29sdGlwRm9jdXNlZERlbGF5Q29ycmVjdGVkLCBzZXRUb29sdGlwRm9jdXNlZERlbGF5Q29ycmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZ2V0VG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWQsIHNldFRvb2x0aXBIb3ZlckRlbGF5Q29ycmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRPcGVuKGdldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWQgfHwgZ2V0VHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWQpO1xuICAgIH0sIFtnZXRUcmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkIHx8IGdldFRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkXSk7XG4gICAgY29uc3QgdXNlVG9vbHRpcFRyaWdnZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUb29sdGlwVHJpZ2dlcigpIHtcbiAgICAgICAgdXNlR2xvYmFsSGFuZGxlcihkb2N1bWVudCwgXCJwb2ludGVybW92ZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHNldFRvb2x0aXBIb3Zlcih0YXJnZXQgPT0gZ2V0RWxlbWVudCgpIHx8IHRhcmdldC5jb250YWlucyhnZXRFbGVtZW50KCkpKTtcbiAgICAgICAgfSwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICBmdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZElubmVyQ2hhbmdlZDogc2V0VHJpZ2dlckZvY3VzZWQgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRvb2x0aXBUcmlnZ2VyUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBUaG91Z2ggaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgZm9jdXNpbmcgYWN0aXZhdGVzIGEgdG9vbHRpcCxcbiAgICAgICAgICAgIC8vIGl0J3MgcGVyZmVjdGx5IHJlYXNvbmFibGUgdGhhdCBhIGNoaWxkIGVsZW1lbnQgd2lsbCBiZSB0aGUgb25lIHRoYXQncyBmb2N1c2VkLFxuICAgICAgICAgICAgLy8gbm90IHRoaXMgb25lLCBzbyB3ZSBkb24ndCBzZXQgdGFiSW5kZXg9MFxuICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPz89IC0xO1xuICAgICAgICAgICAgcmV0dXJuIHVzZVRvb2x0aXBJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpKHVzZUhhc0ZvY3VzUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uVG91Y2hFbmQgfSwgcHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFRyaWdnZXJQcm9wcyB9O1xuICAgIH0sIFt1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzXSk7XG4gICAgY29uc3QgdXNlVG9vbHRpcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXAoKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRJbm5lckNoYW5nZWQ6IHNldFRvb2x0aXBGb2N1c2VkIH0pO1xuICAgICAgICB1c2VHbG9iYWxIYW5kbGVyKGRvY3VtZW50LCBcInBvaW50ZXJtb3ZlXCIsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgc2V0VG9vbHRpcEhvdmVyKHRhcmdldCA9PSBnZXRFbGVtZW50KCkgfHwgdGFyZ2V0LmNvbnRhaW5zKGdldEVsZW1lbnQoKSkpO1xuICAgICAgICB9LCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRvb2x0aXBQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VUb29sdGlwSWRQcm9wcyh1c2VIYXNGb2N1c1Byb3BzKHVzZU1lcmdlZFByb3BzKCkoe30sIHByb3BzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRvb2x0aXBQcm9wcyB9O1xuICAgIH0sIFt1c2VUb29sdGlwSWRQcm9wc10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVRvb2x0aXAsXG4gICAgICAgIHVzZVRvb2x0aXBUcmlnZ2VyLFxuICAgICAgICBpc09wZW46IG9wZW4sXG4gICAgICAgIGdldElzT3BlbjogZ2V0T3BlblxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdG9vbHRpcC5qcy5tYXAiLG51bGwsbnVsbCxudWxsLG51bGxdLCJuYW1lcyI6WyJFTVBUWV9PQkoiLCJFTVBUWV9BUlIiLCJJU19OT05fRElNRU5TSU9OQUwiLCJ2bm9kZUlkIiwiY3JlYXRlVk5vZGUiLCJ0eXBlIiwicHJvcHMiLCJrZXkiLCJfX3NvdXJjZSIsIl9fc2VsZiIsInJlZiIsImkiLCJub3JtYWxpemVkUHJvcHMiLCJ2bm9kZSIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwib3B0aW9ucyIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIm9sZEJlZm9yZURpZmYiLCJvbGRCZWZvcmVSZW5kZXIiLCJvbGRBZnRlckRpZmYiLCJkaWZmZWQiLCJvbGRDb21taXQiLCJvbGRCZWZvcmVVbm1vdW50IiwidW5tb3VudCIsImdldEhvb2tTdGF0ZSIsImluZGV4IiwiaG9va3MiLCJsZW5ndGgiLCJwdXNoIiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiaW52b2tlT3JSZXR1cm4iLCJyZWR1Y2VyIiwiaW5pdCIsImhvb2tTdGF0ZSIsIl9yZWR1Y2VyIiwibmV4dFZhbHVlIiwiYWN0aW9uIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJjYWxsYmFjayIsImFyZ3MiLCJzdGF0ZSIsImFyZ3NDaGFuZ2VkIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlTWVtbyIsImN1cnJlbnQiLCJmYWN0b3J5IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsInByb3ZpZGVyIiwic3ViIiwidmFsdWUiLCJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsImludm9rZUNsZWFudXAiLCJpbnZva2VFZmZlY3QiLCJlIiwiYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJhZiIsImRvbmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiSEFTX1JBRiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImNvbW1pdFF1ZXVlIiwic29tZSIsImZpbHRlciIsImNiIiwiaG9vayIsImNvbXAiLCJvbGRBcmdzIiwibmV3QXJncyIsImFyZyIsImYiLCJVbnNldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInRvVmFsIiwibWl4IiwiayIsInkiLCJzdHIiLCJBcnJheSIsImlzQXJyYXkiLCJ0bXAiLCJ4IiwiYXJndW1lbnRzIiwicmV0dXJuTnVsbCIsIk0iLCJ1c2VTdGF0ZVAiLCJ1c2VFZmZlY3ROYXRpdmUiLCJ1c2VMYXlvdXRFZmZlY3ROYXRpdmUiLCJyZXR1cm5GYWxzZSIsImNhbmRpZGF0ZVNlbGVjdG9ycyIsIm1hdGNoZXMiLCJFbGVtZW50IiwiaXNJbnB1dCIsIm5vZGUiLCJpc0hpZGRlbklucHV0IiwiaXNEZXRhaWxzV2l0aFN1bW1hcnkiLCJyIiwiY2hpbGQiLCJpc0hpZGRlbiIsImdldENvbXB1dGVkU3R5bGUiLCJpc0RpcmVjdFN1bW1hcnkiLCJub2RlVW5kZXJEZXRhaWxzIiwiZGlzcGxheUNoZWNrIiwid2lkdGgiLCJoZWlnaHQiLCJpc0Rpc2FibGVkRnJvbUZpZWxkc2V0IiwicGFyZW50Tm9kZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciIsImlzRm9jdXNhYmxlIiwiZ2xvYmFsIiwidGhpcyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiVHlwZUVycm9yIiwid2luZG93Iiwic2xpY2UiLCJtc01hdGNoZXNTZWxlY3RvciIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsImpvaW4iLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiU2V0IiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIl9vbk11dGF0aW9uIiwiYmluZCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImRlc3RydWN0b3IiLCJkaXNjb25uZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiaW5lcnROb2RlIiwiX3VubWFuYWdlTm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYm9keSIsImNvbnRhaW5zIiwicm9vdCIsIm5vZGVUeXBlIiwiTm9kZSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJibHVyIiwiZm9jdXMiLCJFTEVNRU5UX05PREUiLCJlbGVtZW50IiwiX2Fkb3B0SW5lcnRSb290IiwiY2FsbCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJhZGQiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwic2VsZiIsInJlY29yZCIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJhdHRyaWJ1dGVOYW1lIiwibWFuYWdlZE5vZGUiLCJnZXQiLCJzZXQiLCJhcmlhSGlkZGVuIiwiSW5lcnROb2RlIiwiaW5lcnRSb290IiwiX25vZGUiLCJfb3ZlcnJvZGVGb2N1c01ldGhvZCIsIl9pbmVydFJvb3RzIiwiX3NhdmVkVGFiSW5kZXgiLCJfZGVzdHJveWVkIiwiZW5zdXJlVW50YWJiYWJsZSIsIl90aHJvd0lmRGVzdHJveWVkIiwiZGVzdHJveWVkIiwiRXJyb3IiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJzaXplIiwiSW5lcnRNYW5hZ2VyIiwiX2RvY3VtZW50IiwiTWFwIiwiX3dhdGNoRm9ySW5lcnQiLCJhZGRJbmVydFN0eWxlIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJpbmVydCIsImhhcyIsInBhcmVudCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsInNoYWRvd1Jvb3RBbmNlc3RvciIsInNoYWRvd1Jvb3QiLCJsb2NhbE5hbWUiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIl9pIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImhhc093blByb3BlcnR5IiwiYXNzaWduIiwib2JqIiwic2hhbGxvd0RpZmZlcnMiLCJhIiwiYiIsIl9qc3hzIiwiX2pzeCIsIlJhbmRvbVdvcmRzIiwiY3JlYXRlQ29udGV4dCIsIm1lbW8iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztTQUFPO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsSUFBTUEsR0FBQUEsR0FBWSxFQUFsQjtJQUFBLElBQ01DLEdBQUFBLEdBQVksRUFEbEI7SUFBQSxJQUVNQyxHQUFBQSxHQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
