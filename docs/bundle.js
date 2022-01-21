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

    function d$1(n) {
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

      for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y$1(null, _, null, null, _) : Array.isArray(_) ? y$1(d$1, {
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

      for (r in u) "children" === r || "key" === r || r in l || H$1(n, r, null, u[r], i);

      for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || H$1(n, r, l[r], u[r], i);
    }

    function $(n, l, u) {
      "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s$1.test(l) ? u : u + "px";
    }

    function H$1(n, l, u, i, t) {
      var r;

      n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;else {
          if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
          if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
        }
      } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? T$1 : I, r) : n.removeEventListener(l, r ? T$1 : I, r);else if ("dangerouslySetInnerHTML" !== l) {
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

    function T$1(n) {
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
          h.context = x, h.props = m, h.state = h.__s, (s = l$1.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a$1(a$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d$1 && null == s.key ? s.props.children : s, w$2(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
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
      if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
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
        c || ("value" in p && void 0 !== (_ = p.value) && (_ !== y.value || _ !== l.value || "progress" === d && !_) && H$1(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H$1(l, "checked", _, y.checked, !1));
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
      l$1.__ && l$1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j$2(i, u = (!r && t || i).__k = v$1(d$1, null, [u]), o || e$2, e$2, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z$1(f, u);
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
    }, _.prototype.render = d$1, t$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$2.__r = 0, f$1 = 0;

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
      return o = 5, d(function () {
        return {
          current: n
        };
      }, []);
    }

    function d(n, u) {
      var r = m(t++, 7);
      return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
    }

    function A$1(n, t) {
      return o = 8, d(function () {
        return n;
      }, t);
    }

    function F(n) {
      var r = u.context[n.__c],
          o = m(t++, 9);
      return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
    }

    function x() {
      var t;

      for (i.sort(function (n, t) {
        return n.__v.__b - t.__v.__b;
      }); t = i.pop();) if (t.__P) try {
        t.__H.__h.forEach(g$1), t.__H.__h.forEach(j$1), t.__H.__h = [];
      } catch (u) {
        t.__H.__h = [], l$1.__e(u, t.__v);
      }
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
      var u,
          r = t.__c;
      r && r.__H && (r.__H.__.forEach(function (n) {
        try {
          g$1(n);
        } catch (n) {
          u = n;
        }
      }), u && l$1.__e(u, r.__v));
    };
    var b = "function" == typeof requestAnimationFrame;

    function g$1(n) {
      var t = u,
          r = n.__c;
      "function" == typeof r && (n.__c = void 0, r()), u = t;
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

      const onShouldCleanUp = A$1(() => {
        let cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback) cleanupCallback();
      }, []); // There are a couple places where we'd like to use our initial
      // value in place of having no value at all yet.
      // This is the shared code for that, used on mount and whenever
      // getValue is called.

      const tryEnsureValue = A$1(() => {
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
      const getValue = A$1(() => {
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

      const setValue = A$1(arg => {
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
        let ret = v$1(d$1, {}, lhs, rhs);
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
        let combined = A$1(current => {
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

      const myRef = A$1(e => {
        if (e) setElement(() => e);
      }, []);
      const useRefElementProps = A$1(props => useMergedProps()({
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
      const needANewObserver = A$1((element, observeBox) => {
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
        onElementChange: A$1(e => needANewObserver(e, getObserveBox === null || getObserveBox === void 0 ? void 0 : getObserveBox()), [])
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
        onElementChange: A$1(element => {
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
        onSizeChange: A$1(_ => onLogicalDirectionChange === null || onLogicalDirectionChange === void 0 ? void 0 : onLogicalDirectionChange(getLogicalDirectionInfo()), [])
      });
      const getLogicalDirectionInfo = A$1(() => {
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

      const convertToLogicalOrientation = A$1((elementOrientation, direction) => {
        var _direction, _direction2;

        (_direction = direction) !== null && _direction !== void 0 ? _direction : direction = getLogicalDirectionInfo();
        if (((_direction2 = direction) === null || _direction2 === void 0 ? void 0 : _direction2.inlineOrientation) === elementOrientation) return "inline";
        return "block";
      }, []);
      const convertToPhysicalSide = A$1((side, direction) => {
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
      const convertToLogicalSide = A$1((side, direction) => {
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
      const convertToPhysicalOrientation = A$1((elementOrientation, direction) => {
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
      const convertElementSize = A$1((elementSize, direction) => {
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
        useLogicalDirectionProps: A$1(props => useRefElementProps(useElementSizeProps(props)), []),
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

      const setState = A$1(value => {
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
      const useReferencedIdProps = A$1(function useReferencedIdProps(idPropName) {
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
      const useRandomIdProps = A$1(function useRandomIdProps(p) {
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
      return A$1(() => {
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
      return A$1(function () {
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
      const getElapsedTime = A$1(() => {
        var _startTimeRef$current;

        return +new Date() - +((_startTimeRef$current = startTimeRef.current) !== null && _startTimeRef$current !== void 0 ? _startTimeRef$current : new Date());
      }, []);
      const getRemainingTime = A$1(() => {
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
        useLinearNavigationProps: A$1(props => {
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
      const useTypeaheadNavigationProps = A$1(function (_ref3) {
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
      const useTypeaheadNavigationChild = A$1(_ref4 => {
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
      const getMountIndex = A$1(index => {
        return mountOrder.current.get(index);
      }, []);
      const useManagedChild = A$1(info => {
        const {
          getElement,
          useRefElementProps
        } = useRefElement({
          onElementChange: A$1(element => {
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
      A$1(() => {
        if (tabbableIndex != null) managedChildren[tabbableIndex].setTabbable(true);
      }, [tabbableIndex]);
      const useRovingTabIndexChild = A$1(info => {
        const [rrafIndex, setRrafIndex] = useState(1);
        const rerenderAndFocus = A$1(() => {
          setRrafIndex(i => ++i);
        }, []);
        const [tabbable, setTabbable, getTabbable] = useState(null);
        let newInfo = { ...info,
          rerenderAndFocus,
          setTabbable: A$1(tabbable => {
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
        focusCurrent: A$1(() => {
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

      const navigateToIndex = A$1(i => {
        var _indexMangler2, _indexDemangler2;

        setTabbableIndex(i == null ? null : tryNavigateToIndex(managedChildren, 0, i, 1, (_indexMangler2 = indexMangler) !== null && _indexMangler2 !== void 0 ? _indexMangler2 : identity, (_indexDemangler2 = indexDemangler) !== null && _indexDemangler2 !== void 0 ? _indexDemangler2 : identity));
      }, []);
      const navigateToFirst = A$1(() => {
        var _indexMangler3, _indexDemangler3;

        setTabbableIndex(tryNavigateToIndex(managedChildren, 0, 0, 1, (_indexMangler3 = indexMangler) !== null && _indexMangler3 !== void 0 ? _indexMangler3 : identity, (_indexDemangler3 = indexDemangler) !== null && _indexDemangler3 !== void 0 ? _indexDemangler3 : identity));
      }, []);
      const navigateToLast = A$1(() => {
        var _indexMangler4, _indexDemangler4;

        setTabbableIndex(tryNavigateToIndex(managedChildren, managedChildren.length, managedChildren.length, -1, (_indexMangler4 = indexMangler) !== null && _indexMangler4 !== void 0 ? _indexMangler4 : identity, (_indexDemangler4 = indexDemangler) !== null && _indexDemangler4 !== void 0 ? _indexDemangler4 : identity));
      }, []);
      const navigateToPrev = A$1(() => {
        setTabbableIndex(c => {
          var _indexMangler5, _indexDemangler5;

          return tryNavigateToIndex(managedChildren, c !== null && c !== void 0 ? c : 0, (c !== null && c !== void 0 ? c : 0) - 1, -1, (_indexMangler5 = indexMangler) !== null && _indexMangler5 !== void 0 ? _indexMangler5 : identity, (_indexDemangler5 = indexDemangler) !== null && _indexDemangler5 !== void 0 ? _indexDemangler5 : identity);
        });
      }, []);
      const navigateToNext = A$1(() => {
        setTabbableIndex(c => {
          var _indexMangler6, _indexDemangler6;

          return tryNavigateToIndex(managedChildren, c !== null && c !== void 0 ? c : 0, (c !== null && c !== void 0 ? c : 0) + 1, 1, (_indexMangler6 = indexMangler) !== null && _indexMangler6 !== void 0 ? _indexMangler6 : identity, (_indexDemangler6 = indexDemangler) !== null && _indexDemangler6 !== void 0 ? _indexDemangler6 : identity);
        });
      }, []);
      const setIndex = A$1(index => {
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
      const useListNavigationProps = A$1(props => {
        return useLinearNavigationProps(useTypeaheadNavigationProps(props));
      }, [useLinearNavigationProps, useTypeaheadNavigationProps]);
      const useListNavigationChild = A$1(info => {
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

        const roveToSelf = A$1(() => {
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
      const useDraggableProps = A$1(p => {
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
        onElementChange: A$1(element => {
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
        onActiveElementChange: A$1((activeElement, prevActiveElement) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == activeElement;
          const focusedInner = !!(selfElement !== null && selfElement !== void 0 && selfElement.contains(activeElement));
          setFocused(focused);
          setFocusedInner(focusedInner);
          onActiveElementChange === null || onActiveElementChange === void 0 ? void 0 : onActiveElementChange(activeElement, prevActiveElement);
        }, []),
        onLastActiveElementChange: A$1((lastActiveElement, prevLastActiveElement) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == lastActiveElement;
          const focusedInner = !!(selfElement !== null && selfElement !== void 0 && selfElement.contains(lastActiveElement));
          setLastFocused(focused);
          setLastFocusedInner(focusedInner);
          onLastActiveElementChange === null || onLastActiveElementChange === void 0 ? void 0 : onLastActiveElementChange(lastActiveElement, prevLastActiveElement);
        }, []),
        onWindowFocusedChange
      });
      const useHasFocusProps = A$1(props => {
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

    (function (module, exports) {
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
    })();

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

      var u = t.__e && v$1(d$1, null, n.fallback);
      return u && (u.__h = null), [v$1(d$1, null, t.__e ? null : n.children), u];
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
    var H = l$1.event;

    function Z() {}

    function Y() {
      return this.cancelBubble;
    }

    function q() {
      return this.defaultPrevented;
    }

    l$1.event = function (n) {
      return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = q, n.nativeEvent = n;
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
          V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
        }

        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = A$2(e.children).forEach(function (n) {
          n.props.selected = -1 != r.value.indexOf(n.props.value);
        })), "select" == t && null != r.defaultValue && (r.value = A$2(e.children).forEach(function (n) {
          n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
        })), n.props = r, e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J));
      }

      n.$$typeof = j, K && K(n);
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
      const navigateToFirst = A$1(() => {
        setLastFocusedIndex(0);
      }, []);
      const navigateToLast = A$1(() => {
        setLastFocusedIndex(managedAccordionSections.length - 1);
      }, []);
      const navigateToPrev = A$1(() => {
        setLastFocusedIndex(i => (i !== null && i !== void 0 ? i : 0) - 1);
      }, []);
      const navigateToNext = A$1(() => {
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
      const useAriaAccordionSection = A$1(args => {
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

        const useAriaAccordionSectionHeader = A$1(function useAriaAccordionSectionHeader(_ref3) {
          const {
            getElement,
            useHasFocusProps,
            getFocusedInner
          } = useHasFocus({
            onFocusedChanged: A$1(focused => {
              if (focused) setCurrentFocusedIndex(index);else setCurrentFocusedIndex(oldIndex => oldIndex === index ? null : index);
            }, [])
          });
          const focus = A$1(() => {
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
        const useAriaAccordionSectionBody = A$1(function useAriaAccordionSectionBody() {
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
      const useGenericLabelLabel = A$1(function useGenericLabelLabel() {
        return {
          useGenericLabelLabelProps: props => {
            return useLabelRandomIdProps(useLabelRefElementProps(props));
          }
        };
      }, []);
      const useGenericLabelInput = A$1(function useGenericLabelInput() {
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
      const useInputLabelLabel = A$1(function useInputLabelLabel(_ref3) {
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
      const useInputLabelInput = A$1(function useInputLabelInput() {
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
      const useCheckboxLikeInputElement = A$1(function useCheckboxInputElement(_ref5) {
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
      const useCheckboxLikeLabelElement = A$1(function useCheckboxLabelElement(_ref7) {
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
      const useCheckboxInputElement = A$1(function useCheckboxInputElement(_ref2) {
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
      const useCheckboxLabelElement = A$1(function useCheckboxLabelElement(_ref4) {
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

      const getSelfIsCheckedUnstable = A$1(() => {
        let percentage = checkedCount / managedChildren.length;
        return percentage <= 0 ? false : percentage >= 1 ? true : "mixed";
      }, [checkedCount, managedChildren.length]);
      const getSelfIsCheckedStable = useStableCallback(getSelfIsCheckedUnstable); // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
      // Otherwise, it's null when the last input was from a child checkbox. 

      const savedCheckedValues = s(null);
      const onCheckboxGroupParentInput = A$1(e => {
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
      const notifyChecked = A$1((index, checked) => {
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

      const useCheckboxGroupParentProps = A$1(props => {
        return useMergedProps()({
          "aria-controls": ariaControls
        }, props);
      }, [ariaControls]);
      useEffect(() => {
        setAriaControls(Array.from(allIds.current).join(" "));
      }, [updateIndex]);
      const useCheckboxGroupChild = A$1(function (_ref2) {
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
          useCheckboxGroupChildProps: A$1(props => useMergedProps()({}, useListNavigationChildProps(useListNavigationProps(props))), [useListNavigationProps, useListNavigationChildProps])
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
      const onBackdropClick = A$1(function onBackdropClick(e) {
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
        onLastActiveElementChange: A$1(newElement => {
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
        onElementChange: A$1(e => {
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
        useSoftDismissProps: A$1(props => useActiveElementProps(useRefElementProps(props)), [useActiveElementProps, useRefElementProps])
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
      const useModalBackdrop = A$1(function useModalBackdrop() {
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

      const useModalTitle = A$1(function useModalTitle() {
        const useModalTitleProps = function (props) {
          return useTitleIdProps(props);
        };

        return {
          useModalTitleProps
        };
      }, []);
      const useModalBody = A$1(function useModalBody(_ref4) {
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
      const useDialogBackdrop = A$1(() => {
        const {
          useModalBackdropProps
        } = useModalBackdrop();
        return {
          useDialogBackdropProps: useModalBackdropProps
        };
      }, [useModalBackdrop]);
      const useDialogBody = A$1(_ref2 => {
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
      const useDialogTitle = A$1(() => {
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
      const useListboxMultiItem = A$1(info => {
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
      const useListboxMultiLabel = A$1(function useListboxMultiLabel() {
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
        onActiveElementChange: A$1(activeElement => {
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
      const useListboxSingleItem = A$1(info => {
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
      const useListboxSingleLabel = A$1(function useListboxSingleLabel() {
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
      const useMenuBaseProps = A$1(props => {
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
      const useMenuBaseButtonProps = A$1(props => {
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
        useMenuSentinel: A$1(() => {
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
        shouldFocusOnChange: A$1(() => getMenuBaseLastFocusedInner() || getMenuBaseButtonLastFocusedInner(), [])
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
      const useMenuButton = A$1(_ref4 => {
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

      const useMenuItem = A$1(args => {
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
        onLogicalDirectionChange: A$1(logicalDirectionInfo => setPhysicalOrientation(convertToPhysicalOrientation(logicalOrientation, logicalDirectionInfo)), [])
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
      const useTab = A$1(function useTab(info) {
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
      const useTabPanel = A$1(function usePanel(info) {
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
      const useTabsList = A$1(function useTabList() {
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
      const useTabsLabel = A$1(function useTabsLabel() {
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
      const [getTriggerHover, setTriggerHover] = usePassiveState(useStableCallback(hovering => {
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
      const useTooltipTrigger = A$1(function useTooltipTrigger() {
        function onPointerEnter(e) {
          setTriggerHover(true);
        }

        function onPointerLeave(e) {
          setTriggerHover(false);
        }

        function onTouchEnd(e) {
          e.target.focus();
        }

        const {
          useHasFocusProps
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
            onPointerEnter,
            onPointerLeave,
            onTouchEnd
          }, props)));
        }

        return {
          useTooltipTriggerProps
        };
      }, [useTooltipIdReferencingProps]);
      const useTooltip = A$1(function useTooltip() {
        function onPointerEnter(e) {
          setTooltipHover(true);
        }

        function onPointerLeave(e) {
          setTooltipHover(false);
        }

        function useTooltipProps(_ref3) {
          let { ...props
          } = _ref3;
          const {
            useHasFocusProps
          } = useHasFocus({
            onFocusedInnerChanged: setTooltipFocused
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
        return (e$1("div", { class: "demo", children: [e$1("label", { children: ["Interval duration: ", e$1("input", { type: "number", value: interval, onInput: e => setInterval(e.currentTarget.valueAsNumber) }, void 0)] }, void 0), e$1("div", { children: ["The callback has been called ", fireCount, " time", fireCount === 1 ? "" : "s", "."] }, void 0)] }, void 0));
    };

    const RandomWords$1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const RovingChildContext = D(null);
    const DemoUseRovingTabIndex = g(() => {
        const [lastFocusedInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ onLastFocusedInnerChanged: setLastFocusedInner });
        const { useListNavigationChild, currentTypeahead, tabbableIndex, useListNavigationProps, navigateToIndex } = useListNavigation({ shouldFocusOnChange: getLastFocusedInner });
        //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
        return (e$1("div", { className: "demo", children: [e$1("h2", { children: "Keyboard & List Navigation" }, void 0), e$1("h3", { children: e$1("code", { children: "useRovingTabIndex" }, void 0) }, void 0), e$1("p", { children: ["Native HTML elements offer fantastic keyboard accessability, but cover a relatively limited number of use cases. There is no native HTML tree element, for example, that allows keyboard navigation of its items, nor is it possible to combine the keyboard navigation behavior of a ", e$1("code", { children: "<select>" }, void 0), " menu with the menu in a drawer component."] }, void 0), e$1("p", { children: ["When coming across a List or a Menu or a RadioGroup or a ToggleButtonGroup or any other \"one component made up of child components\", the usual expected behavior, at least natively, is that tabbing into the component is one action, and tabbing out is another.  Navigating ", e$1("em", { children: "within" }, void 0), " the component is done with the arrow keys or other methods."] }, void 0), e$1("p", { children: ["This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through ", e$1("em", { children: "every one" }, void 0), " of its child elements is extremely important."] }, void 0), e$1("p", { children: [e$1("code", { children: "useListNavigation" }, void 0), " wraps up the functionality of a few hooks (", e$1("code", { children: "useRovingTabIndex" }, void 0), ", ", e$1("code", { children: "useLinearNavigation" }, void 0), ", ", e$1("code", { children: "useTypeaheadNavigation" }, void 0), "to allow for ARIA-compliant navigation of lists and other similar components.  For more advanced use cases, you can use the other hooks individually."] }, void 0), e$1("p", { children: [e$1("code", { children: "useListNavigation" }, void 0), " (and ", e$1("code", { children: "useRovingTabIndex" }, void 0), ") internally use ", e$1("code", { children: "useChildManager" }, void 0), ", which is how the child elements and the parent communicate with each other. This means there are virtually no restrictions on how the DOM is set up as long as you can provide the children with the ", e$1("code", { children: "useListNavigationChild" }, void 0), " hook that's returned, usually with a simple ", e$1("code", { children: "Context" }, void 0), ". If the child element itself has a focusable element, like a button, it can also be wired up to disable itself Feel free to nest them too, as long as you are aware of your ", e$1("code", { children: "Context" }, void 0), " management (i.e. remember that you need to create a new ", e$1("code", { children: "Context" }, void 0), " for each use case)."] }, void 0), e$1("label", { children: ["Tabbable index: ", e$1("input", { type: "number", value: tabbableIndex ?? undefined, onInput: e => { e.preventDefault(); navigateToIndex(e.currentTarget.valueAsNumber); } }, void 0)] }, void 0), e$1("ul", { ...useHasFocusProps(useListNavigationProps({})), children: e$1(RovingChildContext.Provider, { value: useListNavigationChild, children: Array.from((function* () {
                            for (let i = 0; i < 10; ++i) {
                                yield e$1(DemoUseRovingTabIndexChild, { index: i }, i);
                            }
                        })()) }, void 0) }, void 0), currentTypeahead && e$1("div", { children: ["Typeahead: ", currentTypeahead] }, void 0)] }, void 0));
    });
    const DemoUseRovingTabIndexChild = g((({ index }) => {
        const [randomWord] = useState(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
        const useRovingTabIndexChild = F(RovingChildContext);
        const text = `${randomWord} This is item #${index + 1}`;
        const { useListNavigationChildProps, useListNavigationSiblingProps, tabbable } = useRovingTabIndexChild({ index, text, hidden: (index == 5) });
        const props = useListNavigationChildProps({});
        return (e$1("li", { ...props, children: [text, " (", tabbable ? "Tabbable" : "Not tabbable", ")", e$1("input", { ...useListNavigationSiblingProps({ type: "checkbox" }) }, void 0)] }, void 0));
    }));

    const DemoUseTimeout = () => {
        const [timeout, setTimeout] = l(1000);
        const [triggerIndex, setTriggerIndex] = l("");
        const [fireCount, setFireCount] = l(0);
        useTimeout({ timeout, triggerIndex, callback: () => setFireCount(i => ++i) });
        return (e$1("div", { class: "demo", children: [e$1("label", { children: ["Timeout duration: ", e$1("input", { type: "number", value: timeout, onInput: e => setTimeout(e.currentTarget.valueAsNumber) }, void 0)] }, void 0), e$1("label", { children: ["Refresh key: ", e$1("input", { type: "text", value: triggerIndex, onInput: e => setTriggerIndex(e.currentTarget.value) }, void 0)] }, void 0), e$1("div", { children: ["The callback has been called ", fireCount, " time", fireCount === 1 ? "" : "s", "."] }, void 0)] }, void 0));
    };

    const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
    const DemoUseDroppable = () => {
        const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, useDroppableProps, dropError } = useDroppable({ effect: "copy" });
        useMergedProps()({}, { ref: s(null) });
        const p = useDroppableProps({ className: "demo droppable" });
        p.ref;
        return (e$1("div", { ...p, children: [droppedStrings != null && e$1("div", { children: ["Data dropped: ", e$1("ul", { children: Object.entries(droppedStrings).map(([type, value]) => e$1("li", { children: [type, ": ", value] }, void 0)) }, void 0)] }, void 0), droppedFiles != null && e$1("div", { children: ["Files dropped: ", e$1("table", { children: [e$1("thead", { children: e$1("tr", { children: [e$1("th", { children: "Name" }, void 0), e$1("th", { children: "Size" }, void 0), e$1("th", { children: "Type" }, void 0), e$1("th", { children: "Last modified" }, void 0)] }, void 0) }, void 0), e$1("tbody", { children: droppedFiles.map(f => e$1("tr", { children: [e$1("td", { children: f.name }, void 0), f.data.byteLength, e$1("td", { children: f.type }, void 0), e$1("td", { children: new Date(f.lastModified ?? 0) }, void 0)] }, void 0)) }, void 0)] }, void 0)] }, void 0), e$1("hr", {}, void 0), stringsForConsideration != null && e$1("div", { children: ["Data being considered: ", e$1("ul", { children: Array.from(stringsForConsideration).map(type => e$1("li", { children: type }, void 0)) }, void 0)] }, void 0), filesForConsideration != null && e$1("div", { children: ["Files being considered: ", e$1("ul", { children: filesForConsideration.map(f => e$1("li", { children: JSON.stringify(f) }, void 0)) }, void 0)] }, void 0), e$1("hr", {}, void 0), dropError && e$1("div", { children: dropError instanceof Error ? dropError.message : JSON.stringify(dropError) }, void 0)] }, void 0));
    };
    const DemoUseDraggable = () => {
        const { dragging, useDraggableProps, lastDropEffect, getLastDropEffect, getDragging } = useDraggable({ data: { "text/plain": "This is custom draggable content of type text/plain." } });
        return (e$1("div", { ...useDraggableProps({ className: "demo" }), children: "Draggable content" }, void 0));
    };
    const DemoUseFocusTrap = g(({ depth }) => {
        const [active, setActive] = useState(false);
        const { useFocusTrapProps } = useFocusTrap({ trapActive: active });
        const divProps = useFocusTrapProps({ ref: undefined, className: "focus-trap-demo" });
        if (depth == 2)
            return e$1("div", {}, void 0);
        return (e$1("div", { className: "demo", children: [e$1("label", { children: ["Active: ", e$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } }, void 0)] }, void 0), e$1("div", { ...divProps, children: e$1(DemoUseFocusTrapChild, { active: active, setActive: setActive, depth: depth ?? 0 }, void 0) }, void 0)] }, void 0));
    });
    const DemoUseFocusTrapChild = g(({ setActive, active, depth }) => {
        return (e$1(d$1, { children: [e$1("button", { children: "Button 1" }, void 0), e$1("button", { children: "Button 2" }, void 0), e$1("button", { children: "Button 3" }, void 0), e$1("label", { children: ["Active: ", e$1("input", { type: "checkbox", checked: active, onInput: e => { e.preventDefault(); setActive(e.currentTarget.checked); } }, void 0)] }, void 0)] }, void 0));
    });
    const UseAccordionSectionContext = D(null);
    const DemoUseAccordion = g(() => {
        const [expandedIndex, setExpandedIndex] = useState(0);
        const { useAriaAccordionSection } = useAriaAccordion({ expandedIndex, setExpandedIndex });
        return (e$1(UseAccordionSectionContext.Provider, { value: useAriaAccordionSection, children: e$1("div", { className: "demo", children: e$1("div", { children: [e$1(DemoAccordionSection, { index: 0 }, void 0), e$1(DemoAccordionSection, { index: 1 }, void 0), e$1(DemoAccordionSection, { index: 2 }, void 0)] }, void 0) }, void 0) }, void 0));
    });
    const DemoAccordionSection = g(({ index }) => {
        const useAccordionSection = F(UseAccordionSectionContext);
        const { expanded, useAriaAccordionSectionBody, useAriaAccordionSectionHeader } = useAccordionSection({ index });
        const { useAriaAccordionSectionBodyProps } = useAriaAccordionSectionBody();
        const { useAriaAccordionSectionHeaderProps } = useAriaAccordionSectionHeader({ tag: "button" });
        const p = useAriaAccordionSectionBodyProps({ className: "accordion-section-body", hidden: !expanded });
        p.id;
        return (e$1("div", { className: "accordion-section", children: [e$1("button", { ...useAriaAccordionSectionHeaderProps({ className: "accordion-section-header" }), children: ["Header #", index + 1] }, void 0), e$1("div", { ...p, children: [e$1("p", { children: ["Body content #", index + 1] }, void 0), e$1("p", { children: RandomWords.join(" ") }, void 0)] }, void 0)] }, void 0));
    });
    const DemoUseCheckbox = g(() => {
        return (e$1(d$1, { children: [e$1("div", { className: "demo", children: [e$1(Checkbox1, {}, void 0), e$1(Checkbox2, {}, void 0)] }, void 0), e$1(DemoUseCheckboxGroup, {}, void 0)] }, void 0));
    });
    const Checkbox1 = g(() => {
        const [checked, setChecked] = useState(false);
        const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ disabled: false, checked, labelPosition: "separate", onInput: e => setChecked(e[EventDetail].checked) });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        return (e$1("div", { children: [e$1("input", { ...useCheckboxInputElementProps({ type: "checkbox", }) }, void 0), e$1("label", { ...useCheckboxLabelElementProps({}), children: "Label" }, void 0)] }, void 0));
    });
    const Checkbox2 = g(() => {
        const [checked, setChecked] = useState(false);
        const { useCheckboxLabelElement, useCheckboxInputElement } = useAriaCheckbox({ disabled: false, labelPosition: "wrapping", onInput: e => setChecked(e[EventDetail].checked), checked });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        return (e$1("div", { children: e$1("label", { ...useCheckboxLabelElementProps({}), children: [e$1("input", { ...useCheckboxInputElementProps({ type: "checkbox" }) }, void 0), " Label"] }, void 0) }, void 0));
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
        return e$1("div", { class: "demo", children: e$1(CheckboxGroupContext.Provider, { value: useCheckboxGroupChild, children: [e$1("div", { children: [e$1("input", { ...useCheckboxInputElementProps(useCheckboxGroupCheckboxProps({})) }, void 0), e$1("label", { ...useCheckboxLabelElementProps({}), children: "All checked?" }, void 0)] }, void 0), e$1("div", { ...useHasFocusProps({ style: { "display": "flex", "flexDirection": "column" } }), children: Array.from((function* () {
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
                        })()) }, void 0)] }, void 0) }, void 0);
    });
    const DemoUseCheckboxGroupChild = g(({ index, checked, setChecked }) => {
        const { randomId } = useRandomId();
        const useCheckboxGroupChild = F(CheckboxGroupContext);
        let text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""}`;
        const { tabbable, useCheckboxGroupChildProps } = useCheckboxGroupChild({ index, text, checked, id: randomId });
        text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""} ${tabbable ? "(tabbble)" : ""}`;
        const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ checked, disabled: false, labelPosition: "separate", onInput: e => { setChecked(e[EventDetail].checked); } });
        const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
        return (e$1("div", { children: [e$1("input", { ...useCheckboxInputElementProps(useCheckboxGroupChildProps({})) }, void 0), e$1("label", { ...useCheckboxLabelElementProps({}), children: text }, void 0)] }, void 0));
    });
    const DemoUseDialog = g(() => {
        const onClose = (() => setOpen(false));
        const [open, setOpen] = useState(false);
        const { useDialogBackdrop, useDialogBody, useDialogProps, useDialogTitle } = useAriaDialog({ open, onClose });
        const { useDialogBackdropProps } = useDialogBackdrop();
        const { useDialogBodyProps } = useDialogBody({ descriptive: true });
        const { useDialogTitleProps } = useDialogTitle();
        return (e$1("div", { class: "demo", children: [e$1("label", { children: e$1("input", { type: "checkbox", checked: open, onInput: e => { e.preventDefault(); setOpen(e.currentTarget.checked); } }, void 0) }, void 0), e$1("div", { ...useDialogBackdropProps({ hidden: !open }), children: e$1("div", { ...useDialogProps({}), children: [e$1("div", { ...useDialogTitleProps({}), children: "Dialog Title" }, void 0), e$1("div", { ...useDialogBodyProps({}), children: [e$1("p", { tabIndex: -1, children: "Dialog body content" }, void 0), e$1("p", { children: RandomWords.join(" ") }, void 0), e$1("p", { children: RandomWords.join(" ") }, void 0), e$1("p", { children: RandomWords.join(" ") }, void 0), e$1("p", { children: e$1("button", { onClick: onClose, children: "Close" }, void 0) }, void 0)] }, void 0)] }, void 0) }, void 0)] }, void 0));
    });
    const ListBoxSingleItemContext = D(null);
    const DemoUseListboxSingle = g(() => {
        const [selectedIndex, setSelectedIndex] = useState(0);
        const { useListboxSingleItem, useListboxSingleLabel, useListboxSingleProps } = useAriaListboxSingle({ selectedIndex, onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectionMode: "activate" });
        return e$1("div", { class: "demo", children: e$1(ListBoxSingleItemContext.Provider, { value: useListboxSingleItem, children: e$1("ul", { ...useListboxSingleProps({}), children: Array.from((function* () {
                        for (let i = 0; i < 10; ++i) {
                            yield e$1(DemoListboxSingleOption, { index: i }, i);
                        }
                    })()) }, void 0) }, void 0) }, void 0);
    });
    const DemoListboxSingleOption = g(({ index }) => {
        const { getSelected, selected, tabbable, useListboxSingleItemProps } = F(ListBoxSingleItemContext)({ index, text: null, tag: "li" });
        return e$1("li", { ...useListboxSingleItemProps({}), children: ["Number ", index + 1, " option", selected ? " (selected)" : "", tabbable ? " (tabbable)" : ""] }, void 0);
    });
    const ListBoxMultiItemContext = D(null);
    const DemoUseListboxMulti = g(() => {
        const { useListboxMultiItem, useListboxMultiLabel, useListboxMultiProps, currentTypeahead } = useAriaListboxMulti({});
        const [selectedValues, setSelectedValues] = useState(new Set());
        return e$1("div", { class: "demo", children: e$1(ListBoxMultiItemContext.Provider, { value: useListboxMultiItem, children: [e$1("ul", { ...useListboxMultiProps({}), children: Array.from((function* () {
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
                        })()) }, void 0), currentTypeahead != null && e$1("p", { children: currentTypeahead }, void 0)] }, void 0) }, void 0);
    });
    const MenuItemContext = D(null);
    const DemoListboxMultiOption = g(({ index, selected, setSelected }) => {
        let text = `Number ${index + 1} option${selected ? " (selected)" : ""}`;
        const { tabbable, useListboxMultiItemProps } = F(ListBoxMultiItemContext)({ tag: "li", index, text, onSelect: e => setSelected(e[EventDetail].selected), selected });
        text = `Number ${index + 1} option${selected ? " (selected)" : ""}${tabbable ? " (tabbable)" : ""}`;
        return e$1("li", { ...useListboxMultiItemProps({}), children: text }, void 0);
    });
    const DemoMenu = g(() => {
        const [open, setOpen] = useState(false);
        const onClose = () => setOpen(false);
        const onOpen = () => setOpen(true);
        const { useHasFocusProps, getFocusedInner: getMenuFocusedInner } = useHasFocus({});
        const { useMenuButton, useMenuItem, useMenuProps } = useAriaMenu({ open, onClose, onOpen, shouldFocusOnChange: getMenuFocusedInner });
        const { useMenuButtonProps } = useMenuButton({ tag: "button" });
        return (e$1("div", { class: "demo", children: e$1(MenuItemContext.Provider, { value: useMenuItem, children: [e$1("button", { ...useMenuButtonProps({ onClick: e => setOpen(open => !open) }), children: "Open menu" }, void 0), e$1("ul", { ...useMenuProps(useHasFocusProps({})), hidden: !open, children: [e$1(DemoMenuItem, { index: 0 }, void 0), e$1(DemoMenuItem, { index: 1 }, void 0), e$1(DemoMenuItem, { index: 2 }, void 0)] }, void 0)] }, void 0) }, void 0));
    });
    const DemoMenuItem = g(({ index }) => {
        const useAriaMenuItem = F(MenuItemContext);
        const { useMenuItemProps } = useAriaMenuItem({ index, text: null });
        return e$1("li", { ...useMenuItemProps({}), children: ["Item ", index + 1] }, void 0);
    });
    const TabContext = D(null);
    const TabPanelContext = D(null);
    const DemoTabs = g(() => {
        const [selectedIndex, setSelectedIndex] = useState(0);
        const [selectionMode, setSelectionMode] = useState("focus");
        const { useTabPanel, useTabsLabel, useTab, useTabsList } = useAriaTabs({ onSelect: e => setSelectedIndex(e[EventDetail].selectedIndex), selectedIndex, selectionMode, orientation: "block" });
        const { useTabListProps } = useTabsList();
        return (e$1(TabContext.Provider, { value: useTab, children: e$1(TabPanelContext.Provider, { value: useTabPanel, children: e$1("div", { class: "demo", children: [e$1("label", { children: [e$1("input", { type: "checkbox", checked: selectionMode == "focus", onInput: (e) => { e.preventDefault(); setSelectionMode(e.currentTarget.checked ? "focus" : "activate"); } }, void 0), " Activate on focus?"] }, void 0), e$1("ul", { ...useTabListProps({}), children: [e$1(DemoTab, { index: 0 }, void 0), e$1(DemoTab, { index: 1 }, void 0), e$1(DemoTab, { index: 2 }, void 0), e$1(DemoTab, { index: 3 }, void 0), e$1(DemoTab, { index: 4 }, void 0)] }, void 0), e$1("div", { children: [e$1(DemoTabPanel, { index: 0 }, void 0), e$1(DemoTabPanel, { index: 1 }, void 0), e$1(DemoTabPanel, { index: 2 }, void 0), e$1(DemoTabPanel, { index: 3 }, void 0), e$1(DemoTabPanel, { index: 4 }, void 0)] }, void 0)] }, void 0) }, void 0) }, void 0));
    });
    const DemoTab = g(({ index }) => {
        const useTab = F(TabContext);
        const { useTabProps, selected } = useTab({ index, text: null, tag: "li" });
        return (e$1(d$1, { children: e$1("li", { ...useTabProps({}), children: ["Tab #", index + 1, " (", `Selected: ${selected}`, ")"] }, void 0) }, void 0));
    });
    const DemoTabPanel = g(({ index }) => {
        const useTabPanel = F(TabPanelContext);
        const { useTabPanelProps, visible } = useTabPanel({ index });
        return (e$1("div", { ...useTabPanelProps({ hidden: !visible }), children: [e$1("p", { children: ["Tab panel content #", index + 1, " (", `Selected: ${visible}`, ")."] }, void 0), e$1("p", { children: RandomWords.slice(0, Math.floor(RandomWords.length / (index + 1))).join(" ") }, void 0)] }, void 0));
    });
    const DemoTooltip = g(() => {
        const { useTooltip, useTooltipTrigger, isOpen } = useAriaTooltip({});
        const { useTooltipProps } = useTooltip();
        const { useTooltipTriggerProps } = useTooltipTrigger();
        return (e$1("div", { class: "demo", children: e$1("p", { children: ["This is a paragraph with a ", e$1("span", { ...useTooltipTriggerProps({}), children: "tooltip right here." }, void 0), e$1("span", { ...useTooltipProps({ hidden: !isOpen }), children: "This is the tooltip content." }, void 0)] }, void 0) }, void 0));
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
        return e$1("div", { class: "flex", style: { flexWrap: "wrap" }, children: [e$1(DemoTooltip, {}, void 0), e$1(DemoTabs, {}, void 0), e$1(DemoUseTimeout, {}, void 0), e$1(DemoUseInterval, {}, void 0), e$1(DemoMenu, {}, void 0), e$1(DemoUseListboxSingle, {}, void 0), e$1(DemoUseListboxMulti, {}, void 0), e$1(DemoUseCheckbox, {}, void 0), e$1(DemoUseAccordion, {}, void 0), e$1(DemoUseDialog, {}, void 0), e$1(DemoUseRovingTabIndex, {}, void 0), e$1(DemoUseFocusTrap, {}, void 0), e$1(DemoUseDroppable, {}, void 0), e$1(DemoUseDraggable, {}, void 0), e$1("input", {}, void 0)] }, void 0);
    };
    requestAnimationFrame(() => {
        S$1(e$1(Component, {}, void 0), document.getElementById("root"));
    });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvZGlzdC9qc3hSdW50aW1lLm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXRpbWVvdXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1saXN0LW5hdmlnYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZHJhZ2dhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWRyb3BwYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ldmVudC1oYW5kbGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWFjdGl2ZS1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWhhcy1mb2N1cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1pbnRlcnZhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWZvY3VzLXRyYXAuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9wcm9wcy5qcyIsIi4uL3VzZS1idXR0b24uanMiLCIuLi91c2UtYWNjb3JkaW9uLmpzIiwiLi4vdXNlLWxhYmVsLmpzIiwiLi4vdXNlLWNoZWNrYm94LmpzIiwiLi4vdXNlLWNoZWNrYm94LWdyb3VwLmpzIiwiLi4vdXNlLW1vZGFsLmpzIiwiLi4vdXNlLWRpYWxvZy5qcyIsIi4uL3VzZS1saXN0Ym94LW11bHRpLmpzIiwiLi4vdXNlLWxpc3Rib3gtc2luZ2xlLmpzIiwiLi4vdXNlLW1lbnUuanMiLCIuLi91c2UtdGFicy5qcyIsIi4uL3VzZS10b29sdGlwLmpzIiwiZGVtb3MvdXNlLWludGVydmFsLnRzeCIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS10aW1lb3V0LnRzeCIsImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxvW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9cj9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxvPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKG89byYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LHIsYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxyJiZcImZvcmVpZ25PYmplY3RcIiE9PWQsbyxmLG8/b1swXTppLl9fayYmayhpLDApLGMpLG51bGwhPW8pZm9yKF89by5sZW5ndGg7Xy0tOyludWxsIT1vW19dJiZoKG9bX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT15LnZhbHVlfHxfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIHIsRnJhZ21lbnQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7RnJhZ21lbnR9ZnJvbVwicHJlYWN0XCI7dmFyIG89MDtmdW5jdGlvbiBlKF8sZSxuLHQsZil7dmFyIGwscyx1PXt9O2ZvcihzIGluIGUpXCJyZWZcIj09cz9sPWVbc106dVtzXT1lW3NdO3ZhciBhPXt0eXBlOl8scHJvcHM6dSxrZXk6bixyZWY6bCxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjotLW8sX19zb3VyY2U6dCxfX3NlbGY6Zn07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgXyYmKGw9Xy5kZWZhdWx0UHJvcHMpKWZvcihzIGluIGwpdm9pZCAwPT09dVtzXSYmKHVbc109bFtzXSk7cmV0dXJuIHIudm5vZGUmJnIudm5vZGUoYSksYX1leHBvcnR7ZSBhcyBqc3gsZSBhcyBqc3hzLGUgYXMganN4REVWfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzeFJ1bnRpbWUubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxkKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBkKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gQShuLHQpe3JldHVybiBvPTgsZChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gVCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe3ZhciB0O2ZvcihpLnNvcnQoZnVuY3Rpb24obix0KXtyZXR1cm4gbi5fX3YuX19iLXQuX192Ll9fYn0pO3Q9aS5wb3AoKTspaWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdSxyPXQuX19jO3ImJnIuX19IJiYoci5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7ZyhuKX1jYXRjaChuKXt1PW59fSksdSYmbi5fX2UodSxyLl9fdikpfTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11LHI9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKG4uX19jPXZvaWQgMCxyKCkpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLGQgYXMgdXNlTWVtbyxBIGFzIHVzZUNhbGxiYWNrLEYgYXMgdXNlQ29udGV4dCxUIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIERlYnVnIGhvb2suXHJcbiAqXHJcbiAqIEdpdmVuIGEgdmFsdWUgb3Igc2V0IG9mIHZhbHVlcywgZW1pdHMgYSBjb25zb2xlIGVycm9yIGlmIGFueSBvZiB0aGVtIGNoYW5nZSBmcm9tIG9uZSByZW5kZXIgdG8gdGhlIG5leHQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRW5zdXJlU3RhYmlsaXR5KC4uLnZhbHVlcykge1xyXG4gICAgdXNlSGVscGVyKHZhbHVlcy5sZW5ndGgsIDApO1xyXG4gICAgdmFsdWVzLmZvckVhY2godXNlSGVscGVyKTtcclxuICAgIHJldHVybjtcclxuICAgIGZ1bmN0aW9uIHVzZUhlbHBlcih2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXHJcbiAgICAgICAgY29uc3QgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkgPSB1c2VSZWYodmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHNob3duRXJyb3IgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50ICE9IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGlzIGhvb2sgcmVxdWlyZXMgc29tZSBvciBhbGwgb2YgaXRzIGFyZ3VtZW50cyByZW1haW4gc3RhYmxlIGFjcm9zcyBlYWNoIHJlbmRlcjsgcGxlYXNlIGNoZWNrIHRoZSAke2luZGV4fS1pbmRleGVkIHZhbHVlIHRoYXQgd2FzIGNoZWNrZWQuYCk7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFNpbWlsYXIgdG8gYHVzZVN0YXRlYCwgYnV0IGZvciB2YWx1ZXMgdGhhdCBhcmVuJ3QgXCJyZW5kZXItaW1wb3J0YW50XCIgJm5kYXNoOyB1cGRhdGVzIGRvbid0IGNhdXNlIGEgcmUtcmVuZGVyIGFuZCBzbyB0aGUgdmFsdWUgc2hvdWxkbid0IGJlIHVzZWQgZHVyaW5nIHJlbmRlciAodGhvdWdoIGl0IGNlcnRhaW5seSBjYW4sIGF0IGxlYXN0IGJ5IHJlLXJlbmRlcmluZyBhZ2FpbikuXHJcbiAqXHJcbiAqIFRvIGNvbXBlbnNhdGUgZm9yIHRoaXMsIHlvdSBzaG91bGQgcGFzcyBhIGB1c2VFZmZlY3RgLWVzcXVlIGNhbGxiYWNrIHRoYXQgaXMgcnVuIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSnVzdCBsaWtlIGB1c2VFZmZlY3RgLCB0aGlzIGNhbGxiYWNrIGNhbiByZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQncyBydW4gYmVmb3JlIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSWYgeW91IHdvdWxkIGxpa2UgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKG9yLCBzYXksIHdoZW4gdGhlIHZhbHVlIG1lZXRzIHNvbWUgY3JpdGVyaWEpLCB0aGlzIGlzIHdoZXJlIHlvdSdsbCB3YW50IHRvIHB1dCBpbiBhIGNhbGwgdG8gYSBgc2V0U3RhdGVgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxyXG4gKlxyXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcclxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXHJcbiAqIDMuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHlvdSB0cmlnZ2VyIHRoZSBlZmZlY3QgZnVuY3Rpb24gXCJyZW1vdGVseVwiIGluc3RlYWQgb2YgaXQgcnVubmluZyBhZnRlciByZW5kZXJpbmdcclxuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcclxuICpcclxuICogTm90ZSB0aGF0IHdoaWxlIGNhbGxpbmcgYHNldFN0YXRlYCBkb2Vzbid0IGNhdXNlIGFueSByZS1yZW5kZXJzLCB5b3UgY2FuIGRvIHRoYXQgd2l0aGluIHlvdXIgYG9uQ2hhbmdlYCBmdW5jdGlvbiwgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzIHZpYSB0aGF0IGBzZXRTdGF0ZWAuXHJcbiAqXHJcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uLiAgTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cclxuICogQHBhcmFtIGdldEluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFzc2l2ZVN0YXRlKG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpIHtcclxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcclxuICAgIGNvbnN0IHdhcm5pbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXHJcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSk7XHJcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cclxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW51cENhbGxiYWNrID0gY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcclxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcclxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxyXG4gICAgLy8gVGhpcyBpcyB0aGUgc2hhcmVkIGNvZGUgZm9yIHRoYXQsIHVzZWQgb24gbW91bnQgYW5kIHdoZW5ldmVyXHJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXHJcbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgJiYgZ2V0SW5pdGlhbFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCkgPz8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFsgLyogZ2V0SW5pdGlhbFZhbHVlIGFuZCBvbkNoYW5nZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgKi9dKTtcclxuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICh3YXJuaW5nUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkR1cmluZyBvbkNoYW5nZSwgcHJlZmVyIHVzaW5nIHRoZSAodmFsdWUsIHByZXZWYWx1ZSkgYXJndW1lbnRzIGluc3RlYWQgb2YgZ2V0VmFsdWUgLS0gaXQncyBhbWJpZ3VvdXMgYXMgdG8gaWYgeW91J3JlIGFza2luZyBmb3IgdGhlIG9sZCBvciBuZXcgdmFsdWUgYXQgdGhpcyBwb2ludCBpbiB0aW1lIGZvciB0aGlzIGNvbXBvbmVudC5cIik7XHJcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxyXG4gICAgICAgIC8vIChhbmQgd2Ugd2VyZSBnaXZlbiBhbiBpbml0aWFsIHZhbHVlIHRvIHVzZSlcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGluaXRpYWwgdmFsdWUgaW5zdGVhZCBvZiBub3RoaW5nLlxyXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcclxuICAgICAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcclxuICAgICAgICByZXR1cm4gKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSd2ZSBydW4gb3VyIGVmZmVjdCBhdCBsZWFzdCBvbmNlIG9uIG1vdW50LlxyXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcclxuICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cclxuICAgIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2soKGFyZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByZXZEZXAgPSB2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IGdldFZhbHVlKCk7XHJcbiAgICAgICAgY29uc3QgZGVwID0gYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcocHJldkRlcCkgOiBhcmc7XHJcbiAgICAgICAgaWYgKGRlcCAhPT0gdmFsdWVSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAvLyBJbmRpY2F0ZSB0byB0aGUgdXNlciB0aGF0IHRoZXkgc2hvdWxkbid0IGNhbGwgZ2V0VmFsdWUgZHVyaW5nIG9uQ2hhbmdlXHJcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIENhbGwgYW55IHJlZ2lzdGVyZCBjbGVhbnVwIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xyXG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGRlcCwgcHJldkRlcCkgPz8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRlcDtcclxuICAgICAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbm9ybWFsbHkgY2FsbCBnZXRWYWx1ZSBhZ2FpblxyXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XHJcbn1cclxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXBhc3NpdmUtc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbihsaHNQcm9wcywgcmhzUHJvcHMpIHtcclxuICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5jaGlsZHJlbjtcclxuICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5jaGlsZHJlbjtcclxuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByaHM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBsaHM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgcmV0ID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwge30sIGxocywgcmhzKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG4vKipcclxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxyXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cclxuICpcclxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcclxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhbGwgY29tYmluZWQgY2xhc3NlcyBmcm9tIGJvdGggYXJndW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcclxuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcclxuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxyXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGxocywgcmhzKSB7XHJcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XHJcbiAgICBjb25zdCBsaHNDbGFzc05hbWUgPSBsaHM/LmNsYXNzTmFtZTtcclxuICAgIGNvbnN0IHJoc0NsYXNzID0gcmhzPy5jbGFzcztcclxuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xyXG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHR5cGV0ZXN0KCkge1xyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXHJcbiAgICBdO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMF0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMl0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbM10uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s0XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNl0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s3XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbOV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMl0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMTNdO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ29tYmluZXMgdHdvIHJlZnMgaW50byBvbmUuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHRvIGJvdGggdXNlIGl0cyBvd24gcmVmICphbmQqIGZvcndhcmQgYSByZWYgdGhhdCB3YXMgZ2l2ZW4gdG8gaXQuXHJcbiAqIEBwYXJhbSBsaHNcclxuICogQHBhcmFtIHJoc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoc1Byb3BzLCByaHNQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5yZWY7XHJcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcclxuICAgICAgICBsZXQgY29tYmluZWQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XHJcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcclxuICAgICAgICB9LCBbbGhzLCByaHNdKTtcclxuICAgICAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJocztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxocztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHR5cGV0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcclxuXHJcbiAgICBjb25zdCByZWY6IFJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxyXG4gICAgZnVuY3Rpb24gYWNjZXB0c09wdGlvbmFsUmVmKHJlZjogUmVmPGFueT4gfCB1bmRlZmluZWQpIHsgfVxyXG5cclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZjogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZjogdW5kZWZpbmVkIH0sIHsgcmVmIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcclxuICAgIF0gYXMgY29uc3Q7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNSZWYoY1swXSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcclxuXHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1syXSk7XHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1s0XSk7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xyXG4gICAgYWNjZXB0c1JlZihjWzVdKTtcclxuICAgIGFjY2VwdHNSZWYoY1s2XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xyXG4gICAgYWNjZXB0c1JlZihjWzhdKTtcclxufVxyXG4qL1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZSkge1xyXG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxyXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSk7XHJcbn1cclxuLyoqXHJcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxyXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XHJcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cclxuICAgIGlmICghbGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xyXG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cclxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcclxuICAgICAgICAgICAgcmV0dXJuIGxocy5zdHlsZTtcclxuICAgICAgICBpZiAoIWxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJocy5zdHlsZTtcclxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cclxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIC8vICh1c2VNZXJnZWRTdHlsZXMgaXNuJ3QgYSB0cnVlIGhvb2sgLS0gdGhpcyBpc24ndCBhIHZpb2xhdGlvbilcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QobGhzPy5zdHlsZSkgfSwgcmhzKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChyaHM/LnN0eWxlKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTG9naWM/Pz9cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cclxuICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2xocy5zdHlsZX07JHtyaHM/LnN0eWxlID8/IFwiXCJ9YDtcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLihsaHM/LnN0eWxlID8/IHt9KSxcclxuICAgICAgICAuLi4ocmhzPy5zdHlsZSA/PyB7fSlcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1zdHlsZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xyXG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gbWVyZ2UgdHdvIHByb3BzIHdpdGggdGhlIHNhbWUgbmFtZTogJHtzdHJ9YCk7IC8qIEludGVudGlvbmFsICovIH07XHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMb2dnaW5nUHJvcENvbmZsaWN0cyhsb2cyKSB7XHJcbiAgICBsb2cgPSBsb2cyO1xyXG59XHJcbi8qKlxyXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZW0gYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICpcclxuICogVGhlIGhvb2sgaXMgYXdhcmUgb2YgYW5kIGNhbiBpbnRlbGxpZ2VudGx5IG1lcmdlIGBjbGFzc05hbWVgLCBgY2xhc3NgLCBgc3R5bGVgLCBgcmVmYCwgYW5kIGFsbCBldmVudCBoYW5kbGVycy5cclxuICogQHBhcmFtIGxoczJcclxuICogQHBhcmFtIHJoczJcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobGhzMiwgcmhzMikge1xyXG4gICAgICAgIC8vIEZpcnN0LCBwdXQgaW4gYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gcmVhc29uIGFib3V0XHJcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IGxoc0NoaWxkcmVuLCBjbGFzczogbGhzQ2xhc3MsIGNsYXNzTmFtZTogbGhzQ2xhc3NOYW1lLCBzdHlsZTogbGhzU3R5bGUsIHJlZjogbGhzUmVmLCAuLi5saHMgfSA9IGxoczI7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogcmhzQ2hpbGRyZW4sIGNsYXNzOiByaHNDbGFzcywgY2xhc3NOYW1lOiByaHNDbGFzc05hbWUsIHN0eWxlOiByaHNTdHlsZSwgcmVmOiByaHNSZWYsIC4uLnJocyB9ID0gcmhzMjtcclxuICAgICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICAgICAuLi5saHMsXHJcbiAgICAgICAgICAgIHJlZjogdXNlTWVyZ2VkUmVmcygpKGxoczIsIHJoczIpLFxyXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiB1c2VNZXJnZWRDaGlsZHJlbihsaHMyLCByaHMyKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJldC5yZWYgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5yZWY7XHJcbiAgICAgICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LnN0eWxlO1xyXG4gICAgICAgIGlmIChyZXQuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xyXG4gICAgICAgIGlmIChyZXQuY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5jaGlsZHJlbjtcclxuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXHJcbiAgICAgICAgLy8gTWVyZ2UgZXZlcnkgcmVtYWluaW5nIGV4aXN0aW5nIGVudHJ5IGluIGxocyB3aXRoIHdoYXQgd2UndmUgYWxyZWFkeSBwdXQgaW4gcmV0LlxyXG4gICAgICAgIC8vY29uc3QgbGhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGxocykgYXMgW2tleW9mIFQsIFRba2V5b2YgVF1dW107XHJcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbcmhzS2V5LCByaHNWYWx1ZV0gb2YgcmhzRW50cmllcykge1xyXG4gICAgICAgICAgICBjb25zdCBsaHNWYWx1ZSA9IGxoc1tyaHNLZXldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XHJcbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nPy4oYENvdWxkIG5vdCBtZXJnZSBpbmNvbXBhdGlibGUgcHJvcCBcIiR7cmhzS2V5fVwiICh0eXBlOiAke3R5cGVvZiByaHNWYWx1ZX0sIHZhbHVlczogWyR7bGhzVmFsdWV9LCAke3Joc1ZhbHVlfV0pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9ucyhsaHMsIHJocykge1xyXG4gICAgaWYgKCFsaHMpXHJcbiAgICAgICAgcmV0dXJuIHJocztcclxuICAgIGlmICghcmhzKVxyXG4gICAgICAgIHJldHVybiBsaHM7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgbHYgPSBsaHMoLi4uYXJncyk7XHJcbiAgICAgICAgbGV0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xyXG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2x2LCBydl0pO1xyXG4gICAgfTtcclxufVxyXG4vKlxyXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcclxuXHJcbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XHJcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xyXG5cclxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcclxuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XHJcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xyXG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcclxuICAgIGNvbnN0IG0zOiBNMSA9IDA7XHJcblxyXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcclxuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXHJcbiAgICBjb25zdCBtNjogTTIgPSAwO1xyXG5cclxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XHJcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcclxuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG5cclxuXHJcbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcclxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcclxuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcclxuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcclxuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcclxuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcclxuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcclxuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcclxuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcclxuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcclxuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcclxuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcclxuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcclxuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcclxuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcclxuXHJcblxyXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XHJcbiovIFxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XHJcbi8qKlxyXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxyXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxyXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cclxuICpcclxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudChhcmdzKSB7XHJcbiAgICBjb25zdCBvbkVsZW1lbnRDaGFuZ2UgPSBhcmdzPy5vbkVsZW1lbnRDaGFuZ2U7XHJcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXHJcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25FbGVtZW50Q2hhbmdlLCByZXR1cm5OdWxsKTtcclxuICAgIC8vIENyZWF0ZSBhIFJlZkNhbGxiYWNrIHRoYXQncyBmaXJlZCB3aGVuIG1vdW50ZWQgXHJcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcclxuICAgIGNvbnN0IG15UmVmID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAoZSlcclxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVJlZkVsZW1lbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IHJlZjogbXlSZWYgfSwgcHJvcHMpLCBbXSk7XHJcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcclxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRFbGVtZW50IH0pO1xyXG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcclxuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAxLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xyXG5mdW5jdGlvbiBleHRyYWN0RWxlbWVudFNpemUoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXRyaWV2ZSB0aGUgc2l6ZSBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldFwiKTtcclxuICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcclxuICAgIHJldHVybiAoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh7IGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSB9KSB7XHJcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoZ2V0T2JzZXJ2ZUJveCwgb25TaXplQ2hhbmdlKTtcclxuICAgIGNvbnN0IFtnZXRTaXplLCBzZXRTaXplXSA9IHVzZVBhc3NpdmVTdGF0ZShvblNpemVDaGFuZ2UsIHJldHVybk51bGwpO1xyXG4gICAgY29uc3QgY3VycmVudE9ic2VydmVCb3ggPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IG5lZWRBTmV3T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoZWxlbWVudCwgb2JzZXJ2ZUJveCkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZSh7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cgJiYgKFwiUmVzaXplT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHsgYm94OiBvYnNlcnZlQm94IH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlKSA9PiBuZWVkQU5ld09ic2VydmVyKGUsIGdldE9ic2VydmVCb3g/LigpKSwgW10pIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZ2V0T2JzZXJ2ZUJveCkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudE9ic2VydmVCb3guY3VycmVudCAhPT0gZ2V0T2JzZXJ2ZUJveCgpKVxyXG4gICAgICAgICAgICAgICAgbmVlZEFOZXdPYnNlcnZlcihnZXRFbGVtZW50KCksIGdldE9ic2VydmVCb3goKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0U2l6ZSxcclxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHNcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFbGVtZW50U2l6ZSB9IGZyb20gXCIuL3VzZS1lbGVtZW50LXNpemVcIjtcclxuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xyXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xyXG4gICAgcmV0dXJuIChzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkpO1xyXG59XHJcbi8qKlxyXG4gKiBJbnNwZWN0cyB0aGUgZWxlbWVudCdzIHN0eWxlIGFuZCBkZXRlcm1pbmVzIHRoZSBsb2dpY2FsIGRpcmVjdGlvbiB0aGF0IHRleHQgZmxvd3MuXHJcbiAqXHJcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXHJcbiAqIEJ1dCBgdHJhbnNmb3JtYCwgYGNsaXBgLCBldGMuIGRvbid0LlxyXG4gKlxyXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXHJcbiAqXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxyXG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXHJcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXHJcbiAqICogYGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbmA6IEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiIHRvIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiLlxyXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2ljYWxEaXJlY3Rpb24oeyBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UgfSkge1xyXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XHJcbiAgICBjb25zdCBbZ2V0Q29tcHV0ZWRTdHlsZXMsIHNldENvbXB1dGVkU3R5bGVzXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcclxuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wdXRlZFN0eWxlcyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbXSlcclxuICAgIH0pO1xyXG4gICAgLy8gVE9ETzogVGhlcmUncyBubyB3YXkgdG8gcmVmcmVzaCB3aGljaCB3cml0aW5nIG1vZGUgd2UgaGF2ZSBvbmNlIG1vdW50ZWQuXHJcbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xyXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXHJcbiAgICAvLyAgIEMuIElzIG5vdCBuZWNlc3NhcnkgZm9yIG1vc3QgdXNlIGNhc2VzIHRoYXQgd2lsbCBuZXZlciBzd2l0Y2ggd3JpdGluZy1tb2RlIHdpdGhpbiBhIHNpbmdsZSBjb21wb25lbnRcclxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxyXG4gICAgLy9cclxuICAgIC8vIEFzIGEgc29sdXRpb24sIGhlcmUncyBhIGNoZWFwIHdvcmthcm91bmQgdGhhdCBjaGVja3Mgd2hlbiB0aGUgZWxlbWVudCdzIHNpemUgaGFzIGNoYW5nZWQsXHJcbiAgICAvLyBhbmQgaWYgc28sIHRlc3RzIGlmIHRoZSB3cml0aW5nIG1vZGUgaGFzIGNoYW5nZWQgdG9vLlxyXG4gICAgLy9cclxuICAgIC8vIFRoaXMgd2lsbCB3b3JrIGZvciBhdCBsZWFzdCBzb21lIG51bWJlciBvZiBjYXNlcywgYnV0IGEgYmV0dGVyIHNvbHV0aW9uIGlzIHN0aWxsIG5lZWRlZC5cclxuICAgIGNvbnN0IHsgdXNlRWxlbWVudFNpemVQcm9wcyB9ID0gdXNlRWxlbWVudFNpemUoeyBvblNpemVDaGFuZ2U6IHVzZUNhbGxiYWNrKF8gPT4gb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlPy4oZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKSksIFtdKSB9KTtcclxuICAgIGNvbnN0IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZXMoKTtcclxuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZXMpIHtcclxuICAgICAgICAgICAgbGV0IHcgPSBjb21wdXRlZFN0eWxlcy53cml0aW5nTW9kZTtcclxuICAgICAgICAgICAgbGV0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGxldCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xyXG4gICAgICAgICAgICBpZiAodCA9PSBcInVwcmlnaHRcIilcclxuICAgICAgICAgICAgICAgIGQgPSBcImx0clwiO1xyXG4gICAgICAgICAgICByZXR1cm4gKHsgLi4uV3JpdGluZ01vZGVzW3cgfHwgXCJob3Jpem9udGFsLXRiXCJdW2QgfHwgXCJsdHJcIl0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy9jb25zdCBbZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHNldExvZ2ljYWxEaXJlY3Rpb25JbmZvXSA9IHVzZVBhc3NpdmVTdGF0ZTxMb2dpY2FsRGlyZWN0aW9uSW5mbz4ob25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gZWxlbWVudE9yaWVudGF0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcclxuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxTaWRlID0gdXNlQ2FsbGJhY2soKHNpZGUsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJsb2NrLXN0YXJ0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVswXV07XHJcbiAgICAgICAgICAgIGNhc2UgXCJibG9jay1lbmRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmJsb2NrRGlyZWN0aW9uID8/IFwidHRiXCIpWzJdXTtcclxuICAgICAgICAgICAgY2FzZSBcImlubGluZS1zdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uaW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCIpWzBdXTtcclxuICAgICAgICAgICAgY2FzZSBcImlubGluZS1lbmRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVsyXV07XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwidHRiXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJidHRcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBcImlubGluZS1zdGFydFwiO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBjb252ZXJ0RWxlbWVudFNpemUgPSB1c2VDYWxsYmFjaygoZWxlbWVudFNpemUsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBpbmxpbmVEaXJlY3Rpb24sIGJsb2NrRGlyZWN0aW9uIH0gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxyXG4gICAgICAgICAgICAvLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYyKX1gXSkpO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tJbnNldCxcclxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlUmVmRWxlbWVudFByb3BzKHVzZUVsZW1lbnRTaXplUHJvcHMocHJvcHMpKSwgW10pLFxyXG4gICAgICAgIGdldEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sXHJcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpemU6IGNvbnZlcnRFbGVtZW50U2l6ZSxcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbixcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsU2lkZSxcclxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbFNpZGVcclxuICAgIH07XHJcbn1cclxuLy8gSGVscGVyIGZvciBleHRyYWN0aW5nIGluZm8gZnJvbSBcImx0clwiLCBcInR0YlwiLCBldGMuXHJcbmNvbnN0IE0gPSB7XHJcbiAgICB0OiBcInRvcFwiLFxyXG4gICAgYjogXCJib3R0b21cIixcclxuICAgIGw6IFwibGVmdFwiLFxyXG4gICAgcjogXCJyaWdodFwiXHJcbn07XHJcbjtcclxuY29uc3QgSG9yaXpvbnRhbFRiTHRyID0ge1xyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwidHRiXCIsXHJcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICBpbmxpbmVTaXplOiBcIndpZHRoXCIsXHJcbiAgICBibG9ja1NpemU6IFwiaGVpZ2h0XCIsXHJcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwidHRiXCJcclxufTtcclxuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xyXG4gICAgLi4uSG9yaXpvbnRhbFRiTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbFJsTHRyID0ge1xyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXHJcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxyXG4gICAgYmxvY2tTaXplOiBcIndpZHRoXCIsXHJcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwidHRiXCIsXHJcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcclxufTtcclxuY29uc3QgVmVydGljYWxSbFJ0bCA9IHtcclxuICAgIC4uLlZlcnRpY2FsUmxMdHIsXHJcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCJcclxufTtcclxuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xyXG5jb25zdCBTaWRld2F5c1JsUnRsID0geyAuLi5WZXJ0aWNhbFJsUnRsIH07XHJcbmNvbnN0IFZlcnRpY2FsTHJMdHIgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsUnRsLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHRMdHIgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbExyTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImJ0dFwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcImx0clwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHRSdGwgPSB7XHJcbiAgICAuLi5TaWRld2F5c0x0THRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYiA9IHtcclxuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxyXG4gICAgcnRsOiBIb3Jpem9udGFsVGJSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxSbCA9IHtcclxuICAgIGx0cjogVmVydGljYWxSbEx0cixcclxuICAgIHJ0bDogVmVydGljYWxSbFJ0bFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyID0ge1xyXG4gICAgbHRyOiBWZXJ0aWNhbExyTHRyLFxyXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmwgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzUmxSdGxcclxufTtcclxuY29uc3QgU2lkZXdheXNMciA9IHtcclxuICAgIGx0cjogU2lkZXdheXNMdEx0cixcclxuICAgIHJ0bDogU2lkZXdheXNMdFJ0bFxyXG59O1xyXG5jb25zdCBXcml0aW5nTW9kZXMgPSB7XHJcbiAgICBcImhvcml6b250YWwtdGJcIjogSG9yaXpvbnRhbFRiLFxyXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxyXG4gICAgXCJ2ZXJ0aWNhbC1ybFwiOiBWZXJ0aWNhbFJsLFxyXG4gICAgXCJzaWRld2F5cy1sclwiOiBTaWRld2F5c0xyLFxyXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sb2dpY2FsLWRpcmVjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBTbGlnaHRseSBlbmhhbmNlZCB2ZXJzaW9uIG9mIGB1c2VTdGF0ZWAgdGhhdCBpbmNsdWRlcyBhIGdldHRlciB0aGF0IHJlbWFpbnMgY29uc3RhbnRcclxuICogKGkuZS4geW91IGNhbiB1c2UgaXQgaW4gYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpdCBiZWluZyBhIGRlcGVuZGVuY3kpLlxyXG4gKlxyXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLyBXZSBrZWVwIGJvdGgsIGJ1dCBvdmVycnJpZGUgdGhlIGBzZXRTdGF0ZWAgZnVuY3Rpb25hbGl0eVxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhdGUpO1xyXG4gICAgLy8gSGlqYWNrIHRoZSBub3JtYWwgc2V0dGVyIGZ1bmN0aW9uIFxyXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXHJcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0U3RhdGVQKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xyXG4gICAgY29uc29sZS5hc3NlcnQocmVmLmN1cnJlbnQgPT09IHN0YXRlIHx8ICh0eXBlb2Ygc3RhdGUgPT09IFwibnVtYmVyXCIgJiYgaXNOYU4oc3RhdGUpKSk7XHJcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgZ2V0U3RhdGVdO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuY29uc3QgVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Xy1cIjtcclxuZnVuY3Rpb24gYmFzZTY0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbTZCaXRzKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XHJcbn1cclxuZnVuY3Rpb24gcmFuZG9tNjRCaXRzKCkge1xyXG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cclxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXHJcbiAqIElEcyB0aGF0IGFyZSBub3QgdmFsaWQgdW5kZXIgSFRNTDQgbWF5IGJlIGdlbmVyYXRlZC4gT2ggbm8uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcclxuICAgIHJldHVybiBgJHtwcmVmaXggPz8gXCJpZC1cIn0ke3JhbmRvbTY0Qml0cygpLm1hcChuID0+IGJhc2U2NChuKSkuam9pbihcIlwiKX1gO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgaG9vayB0aGF0IG1vZGlmaWVzIGEgc2V0IG9mIHByb3BzIHRvIHByb3ZpZGUgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgaWYgb25lIHdhcyBub3QgcHJvdmlkZWQuXHJcbiAqXHJcbiAqIElmIHlvdSdkIGxpa2UgdG8gdXNlIHRoZSBJRCBpbiBhIHByb3BlcnR5IHRoYXQncyAqbm90KiBuYW1lZCBgaWRgIChsaWtlIGBmb3JgIG9yIGBhcmlhLWxhYmVsbGVkYnlgIG9yIHdoYXRub3QpLCBgdXNlUmVmZXJlbmNlZElkUHJvcHNgIGlzIGFsc28gcHJvdmlkZWQuXHJcbiAqXHJcbiAqIEFuZCB0aGUgcmFuZG9tbHktZ2VuZXJhdGVkIGlkIGl0c2VsZiBpcyBhbHNvIHByb3ZpZGVkIGluIGNhc2UgeW91IHdhbnQgdG8gaGFuZGxlIHRoZSBsb2dpYyB5b3Vyc2VsZiB3aXRob3V0IGB1c2VNZXJnZWRQcm9wc2AuXHJcbiAqXHJcbiAqIFVubGlrZSBtb3N0IG90aGVyIGB1c2UqUHJvcHNgIGhvb2tzLCB0aGVzZSBhcmUgbW9zdGx5IHN0YWJsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VSYW5kb21JZCh7IHByZWZpeCB9ID0ge30pIHtcclxuICAgIGNvbnN0IFtyYW5kb21JZCwgc2V0UmFuZG9tSWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpKTtcclxuICAgIGNvbnN0IFt3YXRjaFByZWZpeFVwZGF0ZXMsIHNldFdhdGNoUHJlZml4VXBkYXRlcywgZ2V0V2F0Y2hQcmVmaXhVcGRhdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2F0Y2hQcmVmaXhVcGRhdGVzID0gZ2V0V2F0Y2hQcmVmaXhVcGRhdGVzKCk7XHJcbiAgICAgICAgaWYgKHdhdGNoUHJlZml4VXBkYXRlcylcclxuICAgICAgICAgICAgc2V0UmFuZG9tSWQoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpKTtcclxuICAgICAgICBzZXRXYXRjaFByZWZpeFVwZGF0ZXModHJ1ZSk7XHJcbiAgICB9LCBbcHJlZml4XSk7XHJcbiAgICAvLyBXaGF0ZXZlciBJRCB3YXMgbW9zdCByZWNlbnRseSB1c2VkIGJ5IHRoZSBhY3R1YWwgXCJpZFwiIHByb3AuXHJcbiAgICAvLyBVc2VkIHNvIHRoYXQgYW55IElELXJlZmVyZW5jaW5nIHByb3BzIGRvbid0IG5lZWQgdG8gcHJvdmlkZSB0aGUgc2FtZSB2YWx1ZS5cclxuICAgIC8vXHJcbiAgICAvLyBUT0RPOiBUaGlzIGRvZXMgbWVhbiB0aGF0IG9uIHRoZSBmaXJzdCByZW5kZXIsIGlmIGp1c3QgdGhlIElEIGlzIHByb3ZpZGVkLFxyXG4gICAgLy8gdGhlcmUgd2lsbCBiZSBhIHRlbXBvcmFyeSBtaXNtYXRjaCwgYnV0IGl0J3MgY29ycmVjdGVkIGJlZm9yZSByZW5kZXJpbmcgZmluaXNoZXMuXHJcbiAgICAvLyBJcyB0aGlzIG9rYXk/XHJcbiAgICBjb25zdCBbdXNlZElkLCBzZXRVc2VkSWQsIGdldFVzZWRJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgdXNlUmVmZXJlbmNlZElkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VSZWZlcmVuY2VkSWRQcm9wcyhpZFByb3BOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gZnVuY3Rpb24gKHsgW2lkUHJvcE5hbWVdOiBnaXZlbklkLCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZWRJZDIgPSAoZ2l2ZW5JZCA/PyB1c2VkSWQgPz8gcmFuZG9tSWQgPz8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgaWYgKGlkUHJvcE5hbWUgPT09IFwiaWRcIilcclxuICAgICAgICAgICAgICAgIHNldFVzZWRJZCh1c2VkSWQyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBbaWRQcm9wTmFtZV06IHVzZWRJZDIgfSwgcHJvcHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sIFt1c2VkSWQsIHJhbmRvbUlkXSk7XHJcbiAgICBjb25zdCB1c2VSYW5kb21JZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmFuZG9tSWRQcm9wcyhwKSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiaWRcIikocCk7XHJcbiAgICB9LCBbdXNlUmVmZXJlbmNlZElkUHJvcHNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmFuZG9tSWQsXHJcbiAgICAgICAgaWQ6IHVzZWRJZCxcclxuICAgICAgICBnZXRJZDogZ2V0VXNlZElkLFxyXG4gICAgICAgIHVzZVJhbmRvbUlkUHJvcHMsXHJcbiAgICAgICAgdXNlUmVmZXJlbmNlZElkUHJvcHNcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQodSkgeyB9XHJcbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzcyhzdHIpIHsgfVxyXG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxyXG5mdW5jdGlvbiB0ZXN0KHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGlkLCByYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKCk7XHJcbiAgICAvL2NvbnN0IHAxYTogTWVyZ2VkUHJvcHM8eyBpZDogc3RyaW5nIH0sIHsgIH0+ID0gdXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSlcclxuICAgIGNvbnN0IHAxYiA9IHVzZVJhbmRvbUlkUHJvcHMoeyAuLi5wcm9wcywgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHAyYSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHAyYiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmMgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwcm9wcyk7XHJcbiAgICBjb25zdCBwM2EgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgaWQ6IHVuZGVmaW5lZCB9KSk7XHJcbiAgICBjb25zdCBwM2IgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSkpO1xyXG4gICAgY29uc3QgcDRhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikodXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSkpO1xyXG4gICAgY29uc3QgcDRiID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocDFiKTtcclxuICAgIC8vcDFhLmlkO1xyXG4gICAgcDFiLmlkO1xyXG4gICAgcDJhW1wiZm9yXCJdO1xyXG4gICAgcDJiW1wiZm9yXCJdO1xyXG4gICAgcDJjW1wiZm9yXCJdO1xyXG4gICAgcDNhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwM2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHAzYVtcImZvclwiXT8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDNiW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNGFbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHA0YltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDRhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBJdCdzIGJlY2F1c2UgaXQgcmVzb2x2ZXMgdG8gXCJpZDogdW5kZWZpbmVkICYgc3RyaW5nXCIgLS0gdGhpcyBzaG91bGRuJ3QgaGFwcGVuXHJcbiAgICBwNGIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAxYi5zdHlsZSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKHAxYi5zdHlsZSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcDJhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMmIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMmIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHAzYS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDNiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBwNGEuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDRiLnN0eWxlKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcmFuZG9tLWlkLmpzLm1hcCIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tSWQgfSBmcm9tIFwiLi91c2UtcmFuZG9tLWlkXCI7XHJcbmNvbnN0IHByZXZpb3VzSW5wdXRzID0gbmV3IE1hcCgpO1xyXG5jb25zdCB0b1J1biA9IG5ldyBNYXAoKTtcclxuY29uc3QgY29tbWl0TmFtZSA9IChcIl9fY1wiIGluIG9wdGlvbnMgPyBcIl9fY1wiIDogXCJjb21taXRcIiBpbiBvcHRpb25zID8gXCJjb21taXRcIiA6IFwiX2NvbW1pdFwiIGluIG9wdGlvbnMgPyBcIl9jb21taXRcIiA6IFwiX19jXCIpO1xyXG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcclxuLy8gaXMgYSBwb3N0LXN1c3BlbnNlIHF1ZXN0aW9uLlxyXG4vLyBSaWdodCBub3csIHVzaW5nIG9wdGlvbnMuX2NvbW1pdCBoYXMgdGhlIHByb2JsZW0gb2YgcnVubmluZ1xyXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxyXG4vLyBzbyBgcmVmPXtzb21lU3RhYmxlRnVuY3Rpb259YCB3b3Jrcy5cclxuLy8gXHJcbi8vIEFsc28gaXQncyBwcml2YXRlLlxyXG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV07XHJcbmNvbnN0IG5ld0NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcclxuICAgIGZvciAobGV0IFtpZCwgZWZmZWN0SW5mb10gb2YgdG9SdW4pIHtcclxuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xyXG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGVmZmVjdEluZm8uaW5wdXRzKSkge1xyXG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXA/LigpO1xyXG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xyXG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGVmZmVjdEluZm8uaW5wdXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1J1bi5jbGVhcigpO1xyXG4gICAgb3JpZ2luYWxDb21taXQ/Lih2bm9kZSwgY29tbWl0UXVldWUpO1xyXG59O1xyXG5vcHRpb25zW2NvbW1pdE5hbWVdID0gbmV3Q29tbWl0O1xyXG4vKipcclxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxyXG4gKlxyXG4gKiBFdmVyeSByZW5kZXIsIHdlIHNlbmQgdGhlIGFyZ3VtZW50cyB0byBiZSBldmFsdWF0ZWQgYWZ0ZXIgZGlmZmluZyBoYXMgY29tcGxldGVkLFxyXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmVmb3JlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XHJcbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcclxuICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuZGVsZXRlKGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2lkXSk7XHJcbn1cclxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xyXG4gICAgcmV0dXJuICEhKCFvbGRBcmdzIHx8XHJcbiAgICAgICAgb2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3M/Lmxlbmd0aCB8fFxyXG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XHJcbi8qKlxyXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cclxuICpcclxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXHJcbiAqIHJlZiBhc3NpZ25tZW50LiBUaGlzIG1lYW5zIHRoaXMgZ2V0dGVyIGlzIHNhZmUgdG8gdXNlIGFueXdoZXJlICoqKmV4Y2VwdCB0aGUgcmVuZGVyIHBoYXNlKioqLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihVbnNldCk7XHJcbiAgICB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoKCkgPT4geyByZWYuY3VycmVudCA9IHZhbHVlOyB9LCBbdmFsdWVdKTtcclxuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50ID09PSBVbnNldCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHJldHJpZXZlZCBmcm9tIHVzZVN0YWJsZUdldHRlcigpIGNhbm5vdCBiZSBjYWxsZWQgZHVyaW5nIHJlbmRlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG4vKipcclxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxyXG4gKiBzbyB0aGF0IGl0IGNhbiBiZSBleGNsdWRlZCBmcm9tIHRoZSBkZXBlbmRlbmN5IGFycmF5cyBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcy5cclxuICpcclxuICogRG8gbm90IHVzZSBkdXJpbmcgdGhlIHJlbmRlciBwaGFzZSEgIGB1c2VMYXlvdXRFZmZlY3RgIGlzIGZpbmUgdGhvdWdoLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIgPSB1c2VTdGFibGVHZXR0ZXIoZm4pO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IGFzIHVzZUVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqIEBwYXJhbSBpbXBsIFlvdSBjYW4gY2hvb3NlIHdoZXRoZXIgdG8gdXNlIGB1c2VFZmZlY3RgIG9yIGB1c2VMYXlvdXRFZmZlY3RgIGJ5XHJcbiAqIHBhc3Npbmcgb25lIG9mIHRoZW0gYXMgdGhpcyBhcmd1bWVudC4gQnkgZGVmYXVsdCwgaXQncyBgdXNlRWZmZWN0YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoZWZmZWN0LCBpbnB1dHMsIGltcGwgPSB1c2VFZmZlY3ROYXRpdmUpIHtcclxuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IGVmZmVjdDIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBbXTtcclxuICAgICAgICBpZiAoaW5wdXRzICYmIHByZXZJbnB1dHMuY3VycmVudCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWF4KHByZXZJbnB1dHMuY3VycmVudC5sZW5ndGgsIGlucHV0cy5sZW5ndGgpOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2SW5wdXRzLmN1cnJlbnRbaV0gIT0gaW5wdXRzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xyXG4gICAgICAgIHByZXZJbnB1dHMuY3VycmVudCA9IGlucHV0cztcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxuICAgIGltcGwoZWZmZWN0MiwgaW5wdXRzKTtcclxufVxyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IGFzIHVzZUxheW91dEVmZmVjdE5hdGl2ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcIi4vdXNlLWVmZmVjdFwiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XHJcbiAgICByZXR1cm4gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCB1c2VMYXlvdXRFZmZlY3ROYXRpdmUpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaW1lb3V0KHsgdGltZW91dCwgY2FsbGJhY2ssIHRyaWdnZXJJbmRleCB9KSB7XHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcclxuICAgIGNvbnN0IGdldFRpbWVvdXQgPSB1c2VTdGFibGVHZXR0ZXIodGltZW91dCk7XHJcbiAgICAvLyBTZXQgYW55IHRpbWUgd2Ugc3RhcnQgdGltZW91dC5cclxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXHJcbiAgICAvLyByZXN0YXJ0IHRoZSB0aW1lb3V0LiAgVGhlIHRpbWVvdXQgZG9lcyBOT1QgcmVzZXRcclxuICAgIC8vIHdoZW4gdGhlIGR1cmF0aW9uIG9yIGNhbGxiYWNrIGNoYW5nZXMsIG9ubHkgdHJpZ2dlckluZGV4LlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRpbWVvdXRJc051bGwpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xyXG4gICAgICAgICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVSZWYuY3VycmVudCA9ICsobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KHN0YWJsZUNhbGxiYWNrLCB0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmlnZ2VySW5kZXgsIHRpbWVvdXRJc051bGxdKTtcclxuICAgIGNvbnN0IGdldEVsYXBzZWRUaW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKyhuZXcgRGF0ZSgpKSkgLSAoKyhzdGFydFRpbWVSZWYuY3VycmVudCA/PyBuZXcgRGF0ZSgpKSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBnZXRSZW1haW5pbmdUaW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVvdXQgPT0gbnVsbCA/IG51bGwgOiBNYXRoLm1heCgwLCB0aW1lb3V0IC0gZ2V0RWxhcHNlZFRpbWUoKSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4geyBnZXRFbGFwc2VkVGltZSwgZ2V0UmVtYWluaW5nVGltZSB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10aW1lb3V0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlTG9naWNhbERpcmVjdGlvbiB9IGZyb20gXCIuL3VzZS1sb2dpY2FsLWRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xyXG4vKipcclxuICogV2hlbiB1c2VkIGluIHRhbmRlbSB3aXRoIGB1c2VSb3ZpbmdUYWJJbmRleGAsIGFsbG93cyBjb250cm9sIG9mXHJcbiAqIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHRoZSBhcnJvdyBrZXlzLlxyXG4gKlxyXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpbmVhck5hdmlnYXRpb24oeyBpbmRleCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdCwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9QcmV2LCBtYW5hZ2VkQ2hpbGRyZW4sIG5hdmlnYXRpb25EaXJlY3Rpb24sIGRpc2FibGVBcnJvd0tleXMsIGRpc2FibGVIb21lRW5kS2V5cyB9KSB7XHJcbiAgICBuYXZpZ2F0aW9uRGlyZWN0aW9uID8/PSBcImVpdGhlclwiO1xyXG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHRhYmJhYmxlIGluZGV4IG5ldmVyIGVzY2FwZXMgdGhlIGJvdW5kcyBvZiBhbGwgYXZhaWxhYmxlIGNoaWxkcmVuXHJcbiAgICAvLyBUT0RPOiBLZWVwIHRyYWNrIG9mIHRoZSBvcmlnaW5hbCBpbmRleCBhbmQga2VlcCBpdCwgYXQgbGVhc3QgdW50aWwga2V5Ym9hcmQgbmF2aWdhdGlvbi5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkQ291bnQgPiAwICYmIGluZGV4ID49IGNoaWxkQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbaW5kZXgsIGNoaWxkQ291bnQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3RdKTtcclxuICAgIC8vIFRoZXNlIGFsbG93IHVzIHRvIG1hbmlwdWxhdGUgd2hhdCBvdXIgY3VycmVudCB0YWJiYWJsZSBjaGlsZCBpcy5cclxuICAgIC8qY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHsgc2V0SW5kZXgoaW5kZXggPCAwID8gKG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggKyBpbmRleCkgOiBpbmRleCk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpID49IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxPyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSA6ICsraSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpIDwgMD8gMCA6IC0taSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9TdGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KDApOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoLTEpOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7Ki9cclxuICAgIGNvbnN0IGdldEluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKGluZGV4KTtcclxuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7fSk7XHJcbiAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxyXG4gICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgbGV0IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA9IChuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiYmxvY2tcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xyXG4gICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkhvbWVcIjpcclxuICAgICAgICAgICAgICAgIGlmICghZGlzYWJsZUhvbWVFbmRLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkVuZFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIHByb3BzKSk7IH0sIFtdKSxcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIEFsbG93cyBmb3IgdGhlIHNlbGVjdGlvbiBvZiBhIG1hbmFnZWQgY2hpbGQgYnkgdHlwaW5nIHRoZSBnaXZlbiB0ZXh0IGFzc29jaWF0ZWQgd2l0aCBpdC5cclxuICpcclxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGdldEluZGV4LCB0eXBlYWhlYWRUaW1lb3V0LCBzZXRJbmRleCB9KSB7XHJcbiAgICAvLyBGb3IgdHlwZWFoZWFkLCBrZWVwIHRyYWNrIG9mIHdoYXQgb3VyIGN1cnJlbnQgXCJzZWFyY2hcIiBzdHJpbmcgaXMgKGlmIHdlIGhhdmUgb25lKVxyXG4gICAgLy8gYW5kIGFsc28gY2xlYXIgaXQgZXZlcnkgMTAwMCBtcyBzaW5jZSB0aGUgbGFzdCB0aW1lIGl0IGNoYW5nZWQuXHJcbiAgICAvLyBOZXh0LCBrZWVwIGEgbWFwcGluZyBvZiB0eXBlYWhlYWQgdmFsdWVzIHRvIGluZGljZXMgZm9yIGZhc3RlciBzZWFyY2hpbmcuXHJcbiAgICAvLyBBbmQsIGZvciB0aGUgdXNlcidzIHNha2UsIGxldCB0aGVtIGtub3cgd2hlbiB0aGVpciB0eXBlYWhlYWQgY2FuJ3QgbWF0Y2ggYW55dGhpbmcgYW55bW9yZVxyXG4gICAgY29uc3QgW2N1cnJlbnRUeXBlYWhlYWQsIHNldEN1cnJlbnRUeXBlYWhlYWQsIGdldEN1cnJlbnRUeXBlYWhlYWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VUaW1lb3V0KHsgdGltZW91dDogdHlwZWFoZWFkVGltZW91dCA/PyAxMDAwLCBjYWxsYmFjazogKCkgPT4geyBzZXRDdXJyZW50VHlwZWFoZWFkKG51bGwpOyBzZXRJbnZhbGlkVHlwZWFoZWFkKG51bGwpOyB9LCB0cmlnZ2VySW5kZXg6IGN1cnJlbnRUeXBlYWhlYWQgfSk7XHJcbiAgICBjb25zdCBzb3J0ZWRUeXBlYWhlYWRJbmZvID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IFtpbnZhbGlkVHlwZWFoZWFkLCBzZXRJbnZhbGlkVHlwZWFoZWFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIEhhbmRsZSB0eXBlYWhlYWQgZm9yIGlucHV0IG1ldGhvZCBlZGl0b3JzIGFzIHdlbGxcclxuICAgIC8vIEVzc2VudGlhbGx5LCB3aGVuIGFjdGl2ZSwgaWdub3JlIGZ1cnRoZXIga2V5cyBcclxuICAgIC8vIGJlY2F1c2Ugd2UncmUgd2FpdGluZyBmb3IgYSBDb21wb3NpdGlvbkVuZCBldmVudFxyXG4gICAgY29uc3QgW2ltZUFjdGl2ZSwgc2V0SW1lQWN0aXZlLCBnZXRJbWVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxyXG4gICAgLy8gKGJ1dCB3aXRoaW4gdGhlIHNhbWUgdGFzaywgd2hpY2gsIFRPRE8sIGNvdWxkIGJlIGJyb3dzZXItZGVwZW5kZW50KSxcclxuICAgIC8vIHdlIGNhbiB1c2UgdGhpcyB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50IHdlJ3JlIGxpc3RlbmluZyBmb3Igb24gdGhlIGZpcnN0IGtleWRvd24uXHJcbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobmV4dFR5cGVhaGVhZENoYXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xyXG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcclxuICAgIGNvbnN0IGNvbXBhcmF0b3JTaGFyZWQgPSB1c2VTdGFibGVDYWxsYmFjaygoc2FmZUxocywgc2FmZVJocykgPT4ge1xyXG4gICAgICAgIGxldCBjb21wYXJlO1xyXG4gICAgICAgIC8vIEZvciB0aGUgcHVycG9zZXMgb2YgdHlwZWFoZWFkLCBvbmx5IGNvbXBhcmUgYSBzdHJpbmcgb2YgdGhlIHNhbWUgc2l6ZSBhcyBvdXIgY3VycmVudGx5IHR5cGVkIHN0cmluZy5cclxuICAgICAgICAvLyBCeSBub3JtYWxpemluZyB0aGVtIGZpcnN0LCB3ZSBlbnN1cmUgdGhpcyBieXRlLWJ5LWJ5dGUgaGFuZGxpbmcgb2YgcmF3IGNoYXJhY3RlciBkYXRhIHdvcmtzIG91dCBva2F5LlxyXG4gICAgICAgIHNhZmVMaHMgPSBzYWZlTGhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcclxuICAgICAgICBzYWZlUmhzID0gc2FmZVJocy5ub3JtYWxpemUoXCJORkRcIik7XHJcbiAgICAgICAgaWYgKGNvbGxhdG9yKVxyXG4gICAgICAgICAgICBjb21wYXJlID0gY29sbGF0b3IuY29tcGFyZShzYWZlTGhzLCBzYWZlUmhzKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGluc2VydGluZ0NvbXBhcmF0b3IgPSB1c2VTdGFibGVDYWxsYmFjaygobGhzLCByaHMpID0+IHtcclxuICAgICAgICBsZXQgY29tcGFyZTtcclxuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmF0b3JTaGFyZWQobGhzLCByaHMudGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaHMgLSByaHM7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHR5cGVhaGVhZENvbXBhcmF0b3IgPSB1c2VTdGFibGVDYWxsYmFjaygobGhzLCByaHMpID0+IHtcclxuICAgICAgICBsZXQgY29tcGFyZTtcclxuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgLy8gRHVyaW5nIHR5cGVhaGVhZCwgYWxsIHN0cmluZ3MgbG9uZ2VyIHRoYW4gb3VycyBzaG91bGQgYmUgdHJ1bmNhdGVkXHJcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhleSdyZSBhbGwgY29uc2lkZXJlZCBlcXVhbGx5IGJ5IHRoYXQgcG9pbnQuXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJhdG9yU2hhcmVkKGxocywgcmhzLnRleHQuc3Vic3RyaW5nKDAsIGxocy5sZW5ndGgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxocyAtIHJocztcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXNlVHlwZWFoZWFkTmF2aWdhdGlvblByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25TdGFydCA9IChlKSA9PiB7IHNldEltZUFjdGl2ZSh0cnVlKTsgfTtcclxuICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uRW5kID0gKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoZS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0SW1lQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZUFjdGl2ZSA9IGdldEltZUFjdGl2ZSgpO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gZS5rZXk7XHJcbiAgICAgICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxyXG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCFpbWVBY3RpdmUgJiYgZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IHNwbGl0IFVURi0xNiBzdXJyb2dhdGVzLlxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0ID0+IHQgPT09IG51bGwgPyBudWxsIDogWy4uLnRdLnJldmVyc2UoKS5zbGljZSgxKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFRoZSBrZXkgcHJvcGVydHkgcmVwcmVzZW50cyB0aGUgdHlwZWQgY2hhcmFjdGVyIE9SIHRoZSBcIm5hbWVkIGtleSBhdHRyaWJ1dGVcIiBvZiB0aGUga2V5IHByZXNzZWQuXHJcbiAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gZGVmaW5pdGUgd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UsIGJ1dCBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzXHJcbiAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBubyBvbmUtY2hhcmFjdGVyIG5hbWVzLCBhbmQgdGhlcmUgYXJlIG5vIG5vbi1BU0NJSS1hbHBoYSBuYW1lcy5cclxuICAgICAgICAgICAgLy8gVGh1cywgYW55IG9uZS1jaGFyYWN0ZXIgb3Igbm9uLUFTQ0lJIHZhbHVlIGZvciBga2V5YCBpcyAqYWxtb3N0IGNlcnRhaW5seSogYSB0eXBlZCBjaGFyYWN0ZXIuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2hhcmFjdGVyS2V5ID0gKGtleS5sZW5ndGggPT09IDEgfHwgIS9eW0EtWmEtel0vLnRlc3Qoa2V5KSk7XHJcbiAgICAgICAgICAgIGlmIChpc0NoYXJhY3RlcktleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcIiBcIiAmJiAoZ2V0Q3VycmVudFR5cGVhaGVhZCgpID8/IFwiXCIpLnRyaW0oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGJlY2F1c2UgYSBzcGFjZWJhciBjYW4ndCBldmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGluaXRpYXRlIGEgdHlwZWFoZWFkLCBvbmx5IGNvbnRpbnVlIG9uZS5cclxuICAgICAgICAgICAgICAgICAgICAvLyAoU3BlY2lmaWNhbGx5LCBsZXQgdGhlIGV2ZW50IGNvbnRpbnVlIHByb3BhZ2F0aW9uIGluIHRoaXMgY2FzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IFdvbid0IGJlIHRydWUgZm9yIHRoZSBmaXJzdCBrZXlkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gYmVmb3JlIHVzZUxheW91dEVmZmVjdCBpcyBjYWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhY3R1YWxseSBhcHBseSB0aGUgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWVBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0sIHByb3BzKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIEhhbmRsZSBjaGFuZ2VzIGluIHR5cGVhaGVhZCB0aGF0IGNhdXNlIGNoYW5nZXMgdG8gdGhlIHRhYmJhYmxlIGluZGV4XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50VHlwZWFoZWFkICYmIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHNvcnRlZFR5cGVhaGVhZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgdHlwZWFoZWFkQ29tcGFyYXRvcik7XHJcbiAgICAgICAgICAgIGlmIChzb3J0ZWRUeXBlYWhlYWRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSB1c2VyIGhhcyB0eXBlZCBhbiBlbnRyeSB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgICAgIC8vIChvciBtb3JlIHNwZWNpZmljYWxseSBcImZvciB3aGljaCB0aGVyZSBpcyBubyBlbnRyeSB0aGF0IHN0YXJ0cyB3aXRoIHRoYXQgaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIHNldEludmFsaWRUeXBlYWhlYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgIFdlIGtub3cgcm91Z2hseSB3aGVyZSwgaW4gdGhlIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzLCBvdXIgbmV4dCB0eXBlYWhlYWQgbG9jYXRpb24gaXMuXHJcbiAgICAgICAgICAgICAgICAgIEJ1dCByb3VnaGx5IGlzbid0IGdvb2QgZW5vdWdoIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBtYXRjaGVzLlxyXG4gICAgICAgICAgICAgICAgICBUbyBjb252ZXJ0IG91ciBzb3J0ZWQgaW5kZXggdG8gdGhlIHVuc29ydGVkIGluZGV4IHdlIG5lZWQsIHdlIGhhdmUgdG8gZmluZCB0aGUgZmlyc3RcclxuICAgICAgICAgICAgICAgICAgZWxlbWVudCB0aGF0IG1hdGNoZXMgdXMgKmFuZCogKGlmIGFueSBzdWNoIGV4aXN0KSBpcyAqYWZ0ZXIqIG91ciBjdXJyZW50IHNlbGVjdGlvbi5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEluIG90aGVyIHdvcmRzLCB0aGUgb25seSB3YXkgdHlwZWFoZWFkIG1vdmVzIGJhY2t3YXJkcyByZWxhdGl2ZSB0byBvdXIgY3VycmVudFxyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbiBpcyBpZiB0aGUgb25seSBvdGhlciBvcHRpb24gaXMgYmVoaW5kIHVzLlxyXG5cclxuICAgICAgICAgICAgICAgICAgSXQncyBub3Qgc3BlY2lmaWVkIGluIFdBSS1BUklBIHdoYXQgdG8gZG8gaW4gdGhhdCBjYXNlLiAgSSBzdXBwb3NlIHdyYXAgYmFjayB0byB0aGUgc3RhcnQ/XHJcbiAgICAgICAgICAgICAgICAgIFRob3VnaCB0aGVyZSdzIGFsc28gYSBjYXNlIGZvciBqdXN0IGdvaW5nIHVwd2FyZHMgdG8gdGhlIG5lYXJlc3QgdG8gcHJldmVudCBqdW1waW5lc3MuXHJcbiAgICAgICAgICAgICAgICAgIEJ1dCBpZiB5b3UncmUgYWxyZWFkeSBkb2luZyB0eXBlYWhlYWQgb24gYW4gdW5zb3J0ZWQgbGlzdCwgbGlrZSwganVtcGluZXNzIGNhbid0IGJlIGF2b2lkZWQuXHJcbiAgICAgICAgICAgICAgICAgIEkgZHVubm8uIEdvaW5nIGJhY2sgdG8gdGhlIHN0YXJ0IGlzIHRoZSBzaW1wbGlzdCB0aG91Z2guXHJcblxyXG4gICAgICAgICAgICAgICAgICBCYXNpY2FsbHkgd2hhdCB0aGlzIGRvZXM6IFN0YXJ0aW5nIGZyb20gd2hlcmUgd2UgZm91bmQgb3Vyc2VsdmVzIGFmdGVyIG91ciBiaW5hcnkgc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgICBzY2FuIGJhY2t3YXJkcyBhbmQgZm9yd2FyZHMgdGhyb3VnaCBhbGwgYWRqYWNlbnQgZW50cmllcyB0aGF0IGFsc28gY29tcGFyZSBlcXVhbGx5IHNvIHRoYXRcclxuICAgICAgICAgICAgICAgICAgd2UgY2FuIGZpbmQgdGhlIG9uZSB3aG9zZSBgdW5zb3J0ZWRJbmRleGAgaXMgdGhlIGxvd2VzdCBhbW9uZ3N0IGFsbCBvdGhlciBlcXVhbCBzdHJpbmdzXHJcbiAgICAgICAgICAgICAgICAgIChhbmQgYWxzbyB0aGUgbG93ZXN0IGB1bnNvcnRlZEluZGV4YCB5YWRkYSB5YWRkYSBleGNlcHQgdGhhdCBpdCBjb21lcyBhZnRlciB1cykuXHJcblxyXG4gICAgICAgICAgICAgICAgICBUT0RPOiBUaGUgYmluYXJ5IHNlYXJjaCBzdGFydHMgdGhpcyBvZmYgd2l0aCBhIHNvbGlkIE8obG9nIG4pLCBidXQgb25lLWNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hlcyBhcmUsIHRoYW5rcyB0byBwaWdlb25ob2xlIHByaW5jaXBhbCwgZXZlbnR1YWxseSBndWFyYW50ZWVkIHRvIGJlY29tZVxyXG4gICAgICAgICAgICAgICAgICBPKG4qbG9nIG4pLiBUaGlzIGlzIGFubm95aW5nIGJ1dCBwcm9iYWJseSBub3QgZWFzaWx5IHNvbHZhYmxlPyBUaGVyZSBjb3VsZCBiZSBhblxyXG4gICAgICAgICAgICAgICAgICBleGNlcHRpb24gZm9yIG9uZS1jaGFyYWN0ZXIgc3RyaW5ncywgYnV0IHRoYXQncyBqdXN0IGtpY2tpbmcgdGhlIGNhbiBkb3duXHJcbiAgICAgICAgICAgICAgICAgIHRoZSByb2FkLiBNYXliZSBvbmUgb3IgdHdvIGNoYXJhY3RlcnMgd291bGQgYmUgZ29vZCBlbm91Z2ggdGhvdWdoLlxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGFyZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGNhbmRpZGF0ZXMnIHBvc2l0aW9ucyBpbiBib3RoIG91ciBzb3J0ZWQgYXJyYXkgYW5kIHRoZSB1bnNvcnRlZCBET00uXHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhBbGwgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcclxuICAgICAgICAgICAgICAgIC8vIFRoZXNlIHR3byBhcmUgb25seSBzZXQgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIGFoZWFkIG9mIHVzLCBidXQgdGhlIHByaW5jaXBsZSdzIHRoZSBzYW1lIG90aGVyd2lzZVxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleE5leHQgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJlc3RGaXQgPSAodSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9IHU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4QWxsID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCkgJiYgdSA+IChnZXRJbmRleCgpID8/IC1JbmZpbml0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSB1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleE5leHQgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiB0eXBlYWhlYWRDb21wYXJhdG9yKGN1cnJlbnRUeXBlYWhlYWQsIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJlc3RGaXQoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldLnVuc29ydGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0taTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCAmJiB0eXBlYWhlYWRDb21wYXJhdG9yKGN1cnJlbnRUeXBlYWhlYWQsIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJlc3RGaXQoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldLnVuc29ydGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhOZXh0XS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5kZXgoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2xvd2VzdFNvcnRlZEluZGV4QWxsXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJyZW50VHlwZWFoZWFkXSk7XHJcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyB0ZXh0LCAuLi5pIH0pID0+IHtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGVyZSB0byBpbnNlcnQgdGhpcyBpdGVtLlxyXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSBhbGwgaW5kZXggdmFsdWVzIHNob3VsZCBiZSB1bmlxdWUsIHRoZSByZXR1cm5lZCBzb3J0ZWRJbmRleFxyXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGFsd2F5cyByZWZlciB0byBhIG5ldyBsb2NhdGlvbiAoaS5lLiBiZSBuZWdhdGl2ZSkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBpbnNlcnRpbmdDb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4IDwgMCB8fCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbc29ydGVkSW5kZXhdLnRleHQgPT0gdGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc29ydGVkSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZSgtc29ydGVkSW5kZXggLSAxLCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdW5tb3VudGluZywgZmluZCB3aGVyZSB3ZSB3ZXJlIGFuZCByZW1vdmUgb3Vyc2VsdmVzLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFnYWluLCB3ZSBzaG91bGQgYWx3YXlzIGZpbmQgb3Vyc2VsdmVzIGJlY2F1c2UgdGhlcmUgc2hvdWxkIGJlIG5vIGR1cGxpY2F0ZSB2YWx1ZXMgaWYgZWFjaCBpbmRleCBpcyB1bmlxdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnRlZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgdGV4dCwgaW5zZXJ0aW5nQ29tcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPj0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZShzb3J0ZWRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0ZXh0XSk7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsXHJcbiAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvblByb3BzLFxyXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXHJcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIFlvdXIgdXN1YWwgYmluYXJ5IHNlYXJjaCBpbXBsZW1lbnRhdGlvbi5cclxuICpcclxuICogSXQncyB1c2VkIGhlcmUgdG8gcXVpY2tseSBmaW5kIGEgZ29vZCBzcG90IHRvIHN0YXJ0IHNlYXJjaGluZyBmb3Igb3VyIG5leHQgdHlwZWFoZWFkIGNhbmRpZGF0ZS5cclxuICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2ggdGhyb3VnaFxyXG4gKiBAcGFyYW0gd2FudGVkIFRoZSB2YWx1ZSB5b3UnZCBsaWtlIHRvIGZpbmRcclxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyZXMgYHdhbnRlZGAgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBpbiBgYXJyYXlgXHJcbiAqIEByZXR1cm5zIEEgbm9uLW5lZ2F0aXZlIHZhbHVlIGlmIGB3YW50ZWRgIHdhcyBmb3VuZCwgYW5kIGEgbmVnYXRpdmUgbnVtYmVyIGlmIG5vdC5cclxuICogVGhlIGFic29sdXRlIHZhbHVlIG9mIHRoaXMgbnVtYmVyLCBtaW51cyBvbmUsIGlzIHdoZXJlIGB3YW50ZWRgICp3b3VsZCogYmUgZm91bmQgaWYgaXQgKndhcyogaW4gYGFycmF5YFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaChhcnJheSwgd2FudGVkLCBjb21wYXJhdG9yKSB7XHJcbiAgICB2YXIgZmlyc3RJbmRleCA9IDA7XHJcbiAgICB2YXIgbGFzdEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuICAgIHdoaWxlIChmaXJzdEluZGV4IDw9IGxhc3RJbmRleCkge1xyXG4gICAgICAgIHZhciB0ZXN0SW5kZXggPSAobGFzdEluZGV4ICsgZmlyc3RJbmRleCkgPj4gMTtcclxuICAgICAgICB2YXIgY29tcGFyaXNvblJlc3VsdCA9IGNvbXBhcmF0b3Iod2FudGVkLCBhcnJheVt0ZXN0SW5kZXhdKTtcclxuICAgICAgICBpZiAoY29tcGFyaXNvblJlc3VsdCA+IDApIHtcclxuICAgICAgICAgICAgZmlyc3RJbmRleCA9IHRlc3RJbmRleCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmlzb25SZXN1bHQgPCAwKSB7XHJcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHRlc3RJbmRleCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGVzdEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtZmlyc3RJbmRleCAtIDE7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWtleWJvYXJkLW5hdmlnYXRpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG4vKipcclxuICogQWxsb3dzIGEgcGFyZW50IGNvbXBvbmVudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgY2VydGFpblxyXG4gKiBjaGlsZCBjb21wb25lbnRzIG9uY2UgdGhleSBoYXZlIHJlbmRlcmVkLlxyXG4gKlxyXG4gKiBUaGlzIGhvb2sgaXMgc2xpZ2h0bHkgbW9yZSBjb21wbGljYXRlZCBpbiB0aGF0IGl0IHJldHVybnMgYm90aCBhXHJcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2ssIGJ1dCBhbHNvIGEgaG9vayB0aGF0IGVhY2ggY2hpbGQgd2lsbCBuZWVkXHJcbiAqIHRvIHVzZTogYHVzZU1hbmFnZWRDaGlsZGAuICBJdCdzIHN0YWJsZSBhY3Jvc3MgcmVuZGVycywgc28ganVzdFxyXG4gKiB0b3NzIGl0IGludG8gYSBgQ29udGV4dGAgc28gdGhlIGNoaWxkcmVuIGNhbiBoYXZlIGFjY2VzcyB0byBpdC5cclxuICogVGhpcyBmdW5jdGlvbiByZWdpc3RlcnMgdGhlIGNoaWxkIHdpdGggdGhlIHBhcmVudCBhbmQgcHJvdmlkZXNcclxuICogaXQgd2l0aCBhbnkgcmVxdWVzdGVkIGluZm9ybWF0aW9uLCBidXQgZG9lc24ndCBkbyBhbnl0aGluZyBlbHNlXHJcbiAqIHVudGlsIGl0IHVubW91bnRzIGFuZCByZXRyYWN0cyB0aGF0IGluZm9ybWF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkTWFuYWdlcigpIHtcclxuICAgIC8vIFRoaXMgaXMgYmxpbmRseSB1cGRhdGVkIGFueSB0aW1lIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzIGl0c2VsZi5cclxuICAgIC8vIFVzZWQgdG8gbWFrZSBzdXJlIHRoYXQgYW55IHRpbWUgdGhlIGFycmF5IG9mIG1hbmFnZWQgY2hpbGRyZW4gdXBkYXRlcyxcclxuICAgIC8vIHdlIGFsc28gcmUtcmVuZGVyLlxyXG4gICAgY29uc3QgW2NoaWxkVXBkYXRlSW5kZXgsIHNldENoaWxkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG90YWxDaGlsZHJlbk1vdW50ZWQsIHNldFRvdGFsQ2hpbGRyZW5Nb3VudGVkLCBnZXRUb3RhbENoaWxkcmVuTW91bnRlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuVW5vdW50ZWQsIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgZ2V0VG90YWxDaGlsZHJlblVub3VudGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkID0gdG90YWxDaGlsZHJlbk1vdW50ZWQgLSB0b3RhbENoaWxkcmVuVW5vdW50ZWQ7XHJcbiAgICBjb25zdCBtYW5hZ2VkQ2hpbGRyZW4gPSB1c2VSZWYoW10gLyoqIFRPRE86IEFueSBwcm9ibGVtcyBjYXVzZWQgYnkgdXNpbmcgYW4gYXJyYXkgd2hlbiBpdCBzaG91bGQgYmUgYW4gb2JqZWN0PyAqLyk7XHJcbiAgICBjb25zdCBtb3VudGVkQ2hpbGRyZW4gPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgbW91bnRPcmRlciA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG4gICAgY29uc3QgaW5kaWNlc0J5RWxlbWVudCA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG4gICAgY29uc3QgZGVsZXRlZEluZGljZXMgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIC8vIFVzZWQgdG8ga2VlcCB0cmFjayBvZiBpbmRpY2VzIHRoYXQgaGF2ZSBcIm92ZXItbW91bnRlZFwiIGFuZCBieSBob3cgbXVjaC5cclxuICAgIC8vIFdlIG5lZWQgdGhpcyBzbyB0aGF0IHdlIGRvbid0IGVyYXNlIHNhdmVkIGluZm9ybWF0aW9uIHdoZW4gYSBjb21wb25lbnRcclxuICAgIC8vIFwib3Zlcm1vdW50c1wiIG92ZXIgYW5vdGhlciB3aGljaCB0aGVuLCBjb3JyZWN0bHksIHN3aXRjaGVzICppdHNlbGYqIHRvIHNvbWV0aGluZyBlbHNlLlxyXG4gICAgLy8gSW4gZ2VuZXJhbCwgdGhpcyBzaG91bGQgb25seSBoYXBwZW4gd2hlbiBjb21wb25lbnRzIGFyZSBzd2FwcGluZyBiZXR3ZWVuIGluZGljZXMuXHJcbiAgICAvLyBCeSB0aGUgdGltZSB0aGV5J3JlIGRvbmUsIHRoaXMgbWFwIHNob3VsZCBiZSBhbGwgMHMgYWdhaW4sIGF0IHdoaWNoIHBvaW50XHJcbiAgICAvLyBpdCdzIG9rYXkgdG8gYWN0dWFsbHkgcnVuIHRoZSB1bm1vdW50IGNvZGUuXHJcbiAgICAvLyBcclxuICAgIC8vIFRPRE86IHRocm93IGEgY29uc29sZS5hc3NlcnQgc29tZXdoZXJlIHRvIG1ha2UgdXAgZm9yIHRoZSBsb3N0IFxyXG4gICAgLy8gXCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gb3ZlcndyaXRlIHRoaXMgY2hpbGQncyBpbmRleCFcIiBhc3NlcnRpb24uXHJcbiAgICAvLyBOYW1lbHksIGlzIHRoaXMgbWFwIGFsbCAwcyB3aGVuIHRoZSBwYXJlbnQgZWxlbWVudCByZS1yZW5kZXJzPyBcclxuICAgIC8vIFByb2JhYmx5IG5vdCBiZWNhdXNlIG9mIHNldENoaWxkVXBkYXRlSW5kZXhcclxuICAgIGNvbnN0IG92ZXJtb3VudENvdW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XHJcbiAgICBjb25zdCBnZXRNb3VudEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7IHJldHVybiBtb3VudE9yZGVyLmN1cnJlbnQuZ2V0KGluZGV4KTsgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlTWFuYWdlZENoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LnNldChlbGVtZW50LCBpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJtb3VudENvdW50LmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmFkZChpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5mby5pbmRleCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgW10pIH0pO1xyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKCk7XHJcbiAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5zZXQoaW5mby5pbmRleCwgaW5kZXgpO1xyXG4gICAgICAgICAgICBtb3VudGVkQ2hpbGRyZW4uY3VycmVudFtpbmRleF0gPSBpbmZvO1xyXG4gICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCh0ID0+ICsrdCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuZGVsZXRlKGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCh0ID0+ICsrdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW2luZm8uaW5kZXhdKTtcclxuICAgICAgICAvLyBBbnkgdGltZSBvdXIgY2hpbGQgcHJvcHMgY2hhbmdlLCBtYWtlIHRoYXQgaW5mb3JtYXRpb24gYXZhaWxhYmxlIGdlbmVyYWxseS5cclxuICAgICAgICAvLyAqRG9uJ3QgcmUtcmVuZGVyKiwgb3RoZXJ3aXNlIHdlJ2QgYmUgc3R1Y2sgaW4gYW5cclxuICAgICAgICAvLyBpbmZpbml0ZSBsb29wIGV2ZXJ5IHRpbWUgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIGlzIHBhc3NlZC5cclxuICAgICAgICAvLyBJdCBjb21lcyBpbiBmcm9tIHRoZSBwcm9wcyBzbyB0aGUgY2hpbGQgd2FzIGFscmVhZHkgdXBkYXRlZCBieSBpdCAtLVxyXG4gICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdGhlIHBhcmVudCB0byByZS1yZW5kZXIgZXZlcnkgc2luZ2xlIGNoaWxkIGFueSB0aW1lXHJcbiAgICAgICAgLy8gXCJvbkNsaWNrXCIgdXBkYXRlcyBvciB3aGF0ZXZlci4gIFRoZSByZWxldmFudCBjaGlsZCBhbHJlYWR5IGtub3dzLFxyXG4gICAgICAgIC8vIGFuZCB0aGF0J3Mgd2hhdCBtYXR0ZXJzLlxyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xyXG4gICAgICAgIH0sIFsuLi5PYmplY3QuZW50cmllcyhpbmZvKS5mbGF0KCldKTtcclxuICAgICAgICByZXR1cm4geyBnZXRFbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZU1hbmFnZWRDaGlsZCxcclxuICAgICAgICBjaGlsZENvdW50OiBjaGlsZHJlbkN1cnJlbnRseU1vdW50ZWQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudCxcclxuICAgICAgICBtb3VudGVkQ2hpbGRyZW46IG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50LFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQ6IGluZGljZXNCeUVsZW1lbnQuY3VycmVudCxcclxuICAgICAgICB0b3RhbENoaWxkcmVuTW91bnRlZCxcclxuICAgICAgICB0b3RhbENoaWxkcmVuVW5vdW50ZWQsXHJcbiAgICAgICAgZ2V0TW91bnRJbmRleCxcclxuICAgICAgICBkZWxldGVkSW5kaWNlczogZGVsZXRlZEluZGljZXMuY3VycmVudFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZXR0aW5nIGNoaWxkcmVuIGtub3cgd2hlbiB0aGV5IGFyZSBvciBhcmUgbm90IHRoZVxyXG4gKiBjdXJyZW50IHNlbGVjdGVkL2V4cGFuZGVkL2ZvY3VzZWQvd2hhdGV2ZXIgY2hpbGQuXHJcbiAqXHJcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB3aGVuIGNoaWxkcmVuIGFyZSBtb3VudGVkICYgdW5tb3VudGVkIGFuZCBzdWNoLlxyXG4gKlxyXG4gKiBXaGlsZSBpdCB3aWxsIGJlIGNhbGxlZCBvbmNlIGZvciBldmVyeSBjaGlsZCBvbiBtb3VudCwgYWZ0ZXIgdGhhdCBzZXRGbGFnXHJcbiAqIGlzIGd1YXJhbnRlZWQgdG8gb25seSBiZSBjYWxsZWQgb25jZSBvbiBhY3RpdmF0aW9uIGFuZCBvbmNlIG9uIGRlYWN0aXZhdGlvbixcclxuICogc28gaXQncyBnZW5lcmFsbHkgc2FmZSB0byBwdXQgc2lkZSBlZmZlY3RzIGluc2lkZSBpZiBuZWNlc3NhcnkuXHJcbiAqIEl0J3MgYWxzbyBzYWZlIHRvIG1ha2UgaXQgbm9uLXN0YWJsZS5cclxuICpcclxuICogQHBhcmFtIGFjdGl2YXRlZEluZGV4IFdoYXQgaW5kZXggdGhlIGN1cnJlbnQgc2VsZWN0ZWQgKGV0Yy4pIGNoaWxkIGlzXHJcbiAqIEBwYXJhbSBsZW5ndGggSG93IG1hbnkgY2hpbGRyZW4gZXhpc3QgKGFzIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgpXHJcbiAqIEBwYXJhbSBzZXRGbGFnIEEgZnVuY3Rpb24gdGhhdCBwcm9iYWJseSBsb29rcyBsaWtlIChpLCBmbGFnKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0QWN0aXZlKGZsYWcpXHJcbiAqIEBwYXJhbSB1c2VFZmZlY3QgV2hpY2ggdmVyc2lvbiBvZiB1c2VFZmZlY3QgdG8gdXNlLiBEZWZhdWx0IGlzIGB1c2VMYXlvdXRFZmZlY3RgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4LCBjbG9zZXN0Rml0LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldENoaWxkRmxhZywgZ2V0Q2hpbGRGbGFnLCB1c2VFZmZlY3QgfSkge1xyXG4gICAgdXNlRWZmZWN0ID8/PSB1c2VMYXlvdXRFZmZlY3Q7XHJcbiAgICBpZiAoY2xvc2VzdEZpdClcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiB8fCBhY3RpdmF0ZWRJbmRleCA9PSBudWxsKTtcclxuICAgIC8vIFdoZW5ldmVyIHdlIHJlLXJlbmRlciwgbWFrZSBzdXJlIHRoYXQgYW55IGNoaWxkcmVuIHRoYXQgaGF2ZSBtb3VudGVkXHJcbiAgICAvLyBoYXZlIHRoZWlyIGZsYWdzIHByb3Blcmx5IHNldC4gIFdlIGtub3cgaXQncyB1bnNldCBpZiBpdCB3YXMgbnVsbCxcclxuICAgIC8vIGluIHdoaWNoIGNhc2Ugd2UganVzdCBzZXQgaXQgdG8gdHJ1ZSBvciBmYWxzZS5cclxuICAgIC8vXHJcbiAgICAvLyBBbmQsIEkgbWVhbiwgYXMgbG9uZyBhcyB3ZSdyZSBhbHJlYWR5IGl0ZXJhdGluZyB0aHJvdWdoIGV2ZXJ5IGNoaWxkXHJcbiAgICAvLyBvbiBldmVyeSByZW5kZXIgdG8gY2hlY2sgZm9yIG5ld2x5IG1vdW50ZWQgY2hpbGRyZW4sIG1pZ2h0IGFzIHdlbGxcclxuICAgIC8vIGp1c3QgaGFuZGxlIGNoYW5nZWQgaW4gdGhlIGFjdGl2YXRlZEluZGV4IGhlcmUgdG9vLlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBXZSBoYXZlIGxpbWl0ZWQgaW5mb3JtYXRpb24gYWJvdXQgd2hlbiBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50c1xyXG4gICAgICAgIC8vIGFuZCBzbyB3ZSBkb24ndCBrbm93IHdoZXJlIHRvIGxvb2sgZm9yIGFueSBudWxsIGVudHJpZXMgdGhhdCBuZWVkIGNoYW5naW5nLlxyXG4gICAgICAgIC8vIFdlIGtub3cgd2hlbiBhY3RpdmF0ZWRJbmRleCBjaGFuZ2VzIGFuZCB3aGF0IGl0IHdhcywgYnV0IG5vdCBtdWNoIGVsc2UuXHJcbiAgICAgICAgLy8gTG9vcGluZyBvdmVyIGV2ZXJ5IGNoaWxkICp3b3JrcyosIGFuZCBpdCdzIG5vdCBhbiBleHBlbnNpdmUgbG9vcCBieSBhbnkgbWVhbnMsXHJcbiAgICAgICAgLy8gYnV0LCBsaWtlLCBldWdoLlxyXG4gICAgICAgIC8vIEFsc28sIGJlZm9yZSB3ZSBkbyBhbnl0aGluZywgc2VlIGlmIHdlIG5lZWQgdG8gXCJjb3JyZWN0XCIgYWN0aXZhdGVkSW5kZXguXHJcbiAgICAgICAgLy8gSXQgY291bGQgYmUgcG9pbnRpbmcgdG8gYSBjaGlsZCB0aGF0IGRvZXNuJ3QgZXhpc3QsIGFuZCBpZiBjbG9zZXN0Rml0IGlzIGdpdmVuLFxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gYWRqdXN0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGEgdmFsaWQgY2hpbGQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmF0ZWRJbmRleCA9PSBcIm51bWJlclwiICYmIEFycmF5LmlzQXJyYXkobWFuYWdlZENoaWxkcmVuKSAmJiBtYW5hZ2VkQ2hpbGRyZW5bYWN0aXZhdGVkSW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gT2ggZGVhci4gQXJlIHdlIGFjdGl2ZWx5IGNvcnJlY3RpbmcgdGhpcz9cclxuICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9oIGRlYXIuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggdXAgYW5kIGRvd24gdGhlIGxpc3Qgb2YgY2hpbGRyZW4gZm9yIGFueSB0aGF0IGFjdHVhbGx5IGV4aXN0LlxyXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaEhpZ2ggPSBhY3RpdmF0ZWRJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VhcmNoTG93ID0gYWN0aXZhdGVkSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSA9PSBudWxsKSB8fCAoc2VhcmNoSGlnaCA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaEhpZ2hdID09IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKytzZWFyY2hIaWdoO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tc2VhcmNoTG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA9IHNlYXJjaExvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaEhpZ2ggPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hIaWdoXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVkSW5kZXggPSBzZWFyY2hIaWdoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UndmUgZG9uZSB0aGF0LCBpZiBhbnkgdmFsaWQgY2hpbGRyZW4gZXhpc3QsIHdlJ3ZlIHJlc2V0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGl0IGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgd2UnbGwgZmFsbCB0aHJvdWdoIHRvIHRoZSBmb3IgbG9vcCBzZXQgYW5kIHVuc2V0IG91ciBmbGFncyBiYXNlZCBvbiB0aGlzIFwiY29ycmVjdGVkXCIgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY29ycmVjdCBpdCBvciBzYXZlIGl0IGFueXdoZXJlIGJlY2F1c2Ugd2UnZCB2ZXJ5IG11Y2ggbGlrZSB0byByZXR1cm4gdG8gaXRcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGlsZCByZW1vdW50cyBpdHNlbGYuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWFuYWdlZENoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3VsZEJlU2V0ID0gKGkgPT0gYWN0aXZhdGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldENoaWxkRmxhZyhpKSAhPSBzaG91bGRCZVNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG1hbmFnZWRDaGlsZHJlbikuZm9yRWFjaCgoW2ksIGluZm9dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkQmVTZXQgPSAoaSA9PSBhY3RpdmF0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRGbGFnKGksIHNob3VsZEJlU2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoaWxkLW1hbmFnZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG4vKipcclxuICogSW1wbGVtZW50cyBhIHJvdmluZyB0YWJpbmRleCBzeXN0ZW0gd2hlcmUgb25seSBvbmUgXCJmb2N1c2FibGVcIlxyXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXHJcbiAqIG9mIHRob3NlIGVsZW1lbnRzIHJlY2VpdmVzIGZvY3VzIGlzIGRldGVybWluZWQgYnkgeW91LCBidXQgaXQnc1xyXG4gKiByZWNvbW1lbmRlZCB0byBvZmZsb2FkIHRoYXQgbG9naWMgdGhlbiB0byBhbm90aGVyIGhvb2ssIGxpa2VcclxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXHJcbiAqIGVsZW1lbnQgd2l0aCB0aGUgYXJyb3cga2V5cywgYHVzZVR5cGVhaGVhZE5hdmlnYXRpb25gLCB3aGljaFxyXG4gKiBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdHlwZWFoZWFkLCBvclxyXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGNoaWxkIGhvb2sgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHVzZWRcclxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXHJcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2sgKnRoYXQqIGhvb2sgcmV0dXJucyBzaG91bGQgdGhlbiBiZSB1c2VkXHJcbiAqIG9uIHRoZSBjaGlsZCdzIGVsZW1lbnQsIGFzIHdlbGwgYXMgYW55IG90aGVyIGVsZW1lbnRzIHlvdSdkIGxpa2VcclxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxyXG4gKlxyXG4gKiBgc2hvdWxkRm9jdXNPbkNoYW5nZWAgc2hvdWxkIHJldHVybiB0cnVlIGlmIGZvY3VzIGlzXHJcbiAqIGNvbnRhaW5lZCB3aXRoaW4gd2hhdGV2ZXIgZWxlbWVudCBjb250YWlucyB0aGUgcm92aW5nIHRhYiBpbmRleC5cclxuICogR2VuZXJhbGx5IGFzIHNpbXBsZSBhcyB0aGUgZm9sbG93aW5nOlxyXG4gKiBgYGBcclxuICogY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICogY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1czxQYXJlbnRFbGVtZW50Pih7IHNldEZvY3VzZWRJbm5lciB9KTtcclxuICogY29uc3QgZm9jdXNPbkNoYW5nZSA9IChmb2N1c2VkSW5uZXIgIT0gZmFsc2UpO1xyXG4gKiBgYGBcclxuICogSXQncyBub3QgaW5jbHVkZWQgaGVyZSBiZWNhdXNlIGB1c2VSb3ZpbmdUYWJJbmRleGAgZG9lc24ndCBrbm93XHJcbiAqIGFueXRoaW5nIGFib3V0IHRoZSBjb250YWluZXIgZWxlbWVudCwgb25seSBjaGlsZHJlbiBlbGVtZW50cy5cclxuICogQW5kIGp1c3QgYXMgd2VsbCEgQ2hpbGRyZW4gc2hvdWxkIGJlIGFsbG93ZWQgYXQgdGhlIHJvb3QsXHJcbiAqIHJlZ2FyZGxlc3Mgb2YgaWYgaXQncyB0aGUgd2hvbGUgYXBwIG9yIGp1c3QgYSBnaXZlbiBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlOiBmb2MsIHRhYmJhYmxlSW5kZXggfSkge1xyXG4gICAgY29uc3QgZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSA9IHVzZVN0YWJsZUdldHRlcihmb2MpO1xyXG4gICAgY29uc3QgZ2V0VGFiYmFibGVJbmRleCA9IHVzZVN0YWJsZUdldHRlcih0YWJiYWJsZUluZGV4KTtcclxuICAgIGNvbnN0IHByZXZUYWJiYWJsZSA9IHVzZVJlZigtSW5maW5pdHkpO1xyXG4gICAgLy8gQ2FsbCB0aGUgaG9vayB0aGF0IGFsbG93cyB1cyB0byBjb2xsZWN0IGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gd2hvIHByb3ZpZGUgaXRcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBjaGlsZENvdW50LCB1c2VNYW5hZ2VkQ2hpbGQsIGluZGljZXNCeUVsZW1lbnQsIC4uLnJlc3QgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsXHJcbiAgICAvLyBub3RpZnkgdGhlIHByZXZpb3VzIGNoaWxkIHRoYXQgaXQncyBubyBsb25nZXIgdGFiYmFibGUsXHJcbiAgICAvLyBhbmQgbm90aWZ5IHRoZSBuZXh0IGNoaWxkIHRoYXQgaXMgYWxsb3dlZCB0byBiZSB0YWJiZWQgdG8uXHJcbiAgICB1c2VDaGlsZEZsYWcoe1xyXG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiB0YWJiYWJsZUluZGV4LFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcclxuICAgICAgICBjbG9zZXN0Rml0OiB0cnVlLFxyXG4gICAgICAgIHNldENoaWxkRmxhZzogKGluZGV4LCB0YWJiYWJsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LnNldFRhYmJhYmxlKHRhYmJhYmxlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldENoaWxkRmxhZzogKGluZGV4KSA9PiAobWFuYWdlZENoaWxkcmVuW2luZGV4XT8uZ2V0VGFiYmFibGUoKSA/PyBudWxsKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmb2N1c1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhYmJhYmxlSW5kZXggIT0gbnVsbClcclxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUpO1xyXG4gICAgfSwgW3RhYmJhYmxlSW5kZXhdKTtcclxuICAgIGNvbnN0IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtycmFmSW5kZXgsIHNldFJyYWZJbmRleF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgICAgICBjb25zdCByZXJlbmRlckFuZEZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRScmFmSW5kZXgoaSA9PiArK2kpOyB9LCBbXSk7XHJcbiAgICAgICAgY29uc3QgW3RhYmJhYmxlLCBzZXRUYWJiYWJsZSwgZ2V0VGFiYmFibGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgbGV0IG5ld0luZm8gPSB7XHJcbiAgICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICAgIHJlcmVuZGVyQW5kRm9jdXMsXHJcbiAgICAgICAgICAgIHNldFRhYmJhYmxlOiB1c2VDYWxsYmFjaygodGFiYmFibGUpID0+IHsgc2V0VGFiYmFibGUodGFiYmFibGUpOyB9LCBbXSksXHJcbiAgICAgICAgICAgIGdldFRhYmJhYmxlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRhYmJhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRGb2N1c09uQ2hhbmdlID0gZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSgpKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRm9jdXNPbkNoYW5nZSAmJiBcImZvY3VzXCIgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGFiYmFibGUsIHJyYWZJbmRleF0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzKHsgdGFiSW5kZXgsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4IH0sIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKHsgdGFiSW5kZXgsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyh7IHRhYkluZGV4IH0pLCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXHJcbiAgICAgICAgICAgIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlTWFuYWdlZENoaWxkXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXHJcbiAgICAgICAgY2hpbGRDb3VudCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcclxuICAgICAgICBmb2N1c0N1cnJlbnQ6IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRm9yIHdoYXRldmVyIHJlYXNvbiwgdGhlIHByZXZpb3VzbHkgdGFiYmFibGUgY2hpbGRcclxuICAgICAgICAgICAgICAgIC8vIGlzIG5vIGxvbmdlciB0YWJiYWJsZSB3aXRob3V0IHVzIGtub3dpbmcgYWJvdXQgaXQuXHJcbiAgICAgICAgICAgICAgICAvLyBNYXliZSBpdCB1bm1vdW50ZWQ/XHJcbiAgICAgICAgICAgICAgICAvLyBFaXRoZXIgd2F5LCB0cnkgdG8gZmluZCB0aGUgbmV3bHktc2VsZWN0ZWQgY2hpbGQuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gZ2V0VGFiYmFibGVJbmRleCgpID8/IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC0taTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICsrajtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtdKSxcclxuICAgICAgICAuLi5yZXN0XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24gfSBmcm9tIFwiLi91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUm92aW5nVGFiSW5kZXggfSBmcm9tIFwiLi91c2Utcm92aW5nLXRhYmluZGV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKlxyXG4gKiBUT0RPOiBUaGlzIHRhYmxlIHdhcyBzY3JhcHBlZCB3aGVuIHRoaXMgd2FzIGNoYW5nZWQgdG8ganVzdCBhY2NlcHQgYSBjb2xsYXRvciBkaXJlY3RseSxcclxuICogYnV0IGl0J3Mgbm90IGJhZCBmb3IgYSBjb2xsYXRpb24gY3Jhc2ggY291cnNlIGFuZCBJIG1pZ2h0IHVzZSBpdCBhZ2Fpbi5cclxuICogRXZlbiBqdXN0IGFzIGEgXCJ0aGlzIGlzIHdoeSBpdCdzIGltcG9ydGFudCBhbmQgZ29vZCB0byB1c2UgdGhlc2UgdGhpbmdzXCIgdGhpbmcuXHJcbiAqXHJcbiAqIHxMYW5nLnxUYXJnZXR8VXNlciBpbnB1dHxgYmFzZWB8YGFjY2VudGB8YGNhc2VgfGB2YXJpYW50YHxcclxuICogfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18XHJcbiAqIHxFTnxIaXxIaXzinIV84pyFfOKchXzinIV8XHJcbiAqIHxFTnxIaXzvvKjvvYl84pyFfOKchXzinIV84p2MfFxyXG4gKiB8RU58SGl8aGl84pyFfOKchXzinYx84p2MfFxyXG4gKiB8RU58SGl8SMOvfOKchXzinYx84p2MfOKdjHxcclxuICogfEVOfEhpfEJ5ZXzinYx84p2MfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxhYXzinIV84pyFfOKchXzinYx8XHJcbiAqIHxEQXzDpXxBQXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxBYXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxFTnzDpXxhYXzinYx84p2MfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxhQXzinYx84p2MfOKdjHzinYx8XHJcbiAqIHxFTnzDpXxhfOKchXzinIV84p2MfOKdjHxcclxuICogfERBfMOlfGF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8SlB876qqfOedgHzinIV84pyFfOKchXzinIV8XHJcbiAqIHxKUHzjgqt87722fOKchXzinIV84pyFfOKchXxcclxuICogfEpQfOOCq3zjgYt84pyFfOKchXzinIV84p2MfFxyXG4gKiB8SlB844KrfOODtXzinIV84pyFfOKchXzinYx8XHJcbiAqIHxKUHzjgqt844uVfOKchXzinIV84p2MfOKdjHxcclxuICogfEpQfOOCq3zjgqx84pyFfOKdjHzinYx84p2MfFxyXG4gKiB8SlB844KrfOWKm3zinYx84p2MfOKdjHzinYx8XHJcbiAqIHxaSHzntIV857qifOKdjHzinYx84p2MfOKdjHxcclxuICpcclxuICpcclxuICogKE5vdGUgdG8gc2VsZjogQXQgc29tZSBwb2ludCwgdGhpcyBmaWxlIHdpbGwgcHJvYmFibHkgYmUgbm9ybWFsaXplZFxyXG4gKiBieSBzb21lYm9keSBhbmQg76qqIHdpbGwgdHVybiBiYWNrIGludG8g552ALilcclxuICpcclxuICovXHJcbmNvbnN0IGR1bW15ID0gbnVsbDtcclxuO1xyXG5mdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIHByb3BlciBrZXlib2FyZCBuYXZpZ2F0aW9uIGZvciBjb21wb25lbnRzIGxpa2UgbGlzdGJveGVzLCBidXR0b24gZ3JvdXBzLCBtZW51cywgZXRjLlxyXG4gKlxyXG4gKiBJbiB0aGUgZG9jdW1lbnQgb3JkZXIsIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgXCJmb2N1c2VkXCIgb3IgXCJ0YWJiYWJsZVwiIGVsZW1lbnQsIG1ha2luZyBpdCBhY3QgbW9yZSBsaWtlIG9uZSBjb21wbGV0ZSB1bml0IGluIGNvbXBhcmlzb24gdG8gZXZlcnl0aGluZyBhcm91bmQgaXQuXHJcbiAqIE5hdmlnYXRpbmcgZm9yd2FyZHMvYmFja3dhcmRzIGNhbiBiZSBkb25lIHdpdGggdGhlIGFycm93IGtleXMsIEhvbWUvRW5kIGtleXMsIG9yIGFueSBhbnkgdGV4dCBmb3IgdHlwZWFoZWFkIHRvIGZvY3VzIHRoZSBuZXh0IGl0ZW0gdGhhdCBtYXRjaGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpc3ROYXZpZ2F0aW9uKHsgaW5pdGlhbEluZGV4LCBzaG91bGRGb2N1c09uQ2hhbmdlLCBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlciB9KSB7XHJcbiAgICBpbmRleE1hbmdsZXIgPz89IGlkZW50aXR5O1xyXG4gICAgaW5kZXhEZW1hbmdsZXIgPz89IGlkZW50aXR5O1xyXG4gICAga2V5TmF2aWdhdGlvbiA/Pz0gXCJlaXRoZXJcIjtcclxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKTtcclxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XHJcbiAgICAvLyBXaGF0IGl0IGlzLCBhbmQgd2hldGhlciwgd2hlbiB3ZSByZW5kZXIgdGhpcyBjb21wb25lbnQgYW5kIGl0J3MgY2hhbmdlZCwgdG8gYWxzbyBmb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBtYWRlIHRhYmJhYmxlLlxyXG4gICAgY29uc3QgW3RhYmJhYmxlSW5kZXgsIHNldFRhYmJhYmxlSW5kZXgsIGdldFRhYmJhYmxlSW5kZXhdID0gdXNlU3RhdGUoaW5pdGlhbEluZGV4ID09PSB1bmRlZmluZWQgPyAwIDogaW5pdGlhbEluZGV4KTtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBpbmRpY2VzQnlFbGVtZW50LCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBmb2N1c0N1cnJlbnQsIC4uLnJlc3QgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHsgc2hvdWxkRm9jdXNPbkNoYW5nZSwgdGFiYmFibGVJbmRleCB9KTtcclxuICAgIC8qY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGk6IG51bWJlciB8IG51bGwpID0+IHsgc2V0VGFiYmFibGVJbmRleChpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCkgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIhKDApKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaW5kZXhNYW5nbGVyIShtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlciEoaW5kZXhEZW1hbmdsZXIhKGkgPz8gMCkgLSAxKSkgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGkgPT4gaW5kZXhNYW5nbGVyIShpbmRleERlbWFuZ2xlciEoaSA/PyAwKSArIDEpKSB9LCBbaW5kZXhEZW1hbmdsZXIsIGluZGV4TWFuZ2xlcl0pO1xyXG4qL1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGkpID0+IHtcclxuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGkgPT0gbnVsbCA/IG51bGwgOiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCAwLCBpLCAxLCBpbmRleE1hbmdsZXIgPz8gaWRlbnRpdHksIGluZGV4RGVtYW5nbGVyID8/IGlkZW50aXR5KSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleCh0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCAwLCAwLCAxLCBpbmRleE1hbmdsZXIgPz8gaWRlbnRpdHksIGluZGV4RGVtYW5nbGVyID8/IGlkZW50aXR5KSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleCh0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoLCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoLCAtMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgYyA/PyAwLCAoYyA/PyAwKSAtIDEsIC0xLCBpbmRleE1hbmdsZXIgPz8gaWRlbnRpdHksIGluZGV4RGVtYW5nbGVyID8/IGlkZW50aXR5KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCBjID8/IDAsIChjID8/IDApICsgMSwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBzZXRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaW5kZXgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgeyBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleDogZ2V0VGFiYmFibGVJbmRleCwgc2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQ6IDEwMDAgfSk7XHJcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG5hdmlnYXRpb25EaXJlY3Rpb246IGtleU5hdmlnYXRpb24sIGluZGV4OiBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QgfSk7XHJcbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvblByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyh1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKTtcclxuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wc10pO1xyXG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyAuLi5yZXN0IH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoaW5mbyk7XHJcbiAgICAgICAgLy9jb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoaW5mbyBhcyBJKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcywgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsIHRhYmJhYmxlIH0gPSB1c2VSb3ZpbmdUYWJJbmRleENoaWxkKGluZm8pO1xyXG4gICAgICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKCgoeyBvbkNsaWNrOiByb3ZlVG9TZWxmLCBoaWRkZW46IGluZm8uaGlkZGVuIH0pKSksIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJvdmVUb1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTsgfSwgW10pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyxcclxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHM6IHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBuYXZpZ2F0ZVRvSW5kZXhdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCxcclxuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblByb3BzLFxyXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXHJcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcclxuICAgICAgICB0YWJiYWJsZUluZGV4LFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcclxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50LFxyXG4gICAgICAgIG5hdmlnYXRlVG9JbmRleCxcclxuICAgICAgICBuYXZpZ2F0ZVRvTmV4dCxcclxuICAgICAgICBuYXZpZ2F0ZVRvUHJldixcclxuICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QsXHJcbiAgICAgICAgbmF2aWdhdGVUb0xhc3QsXHJcbiAgICAgICAgZm9jdXNDdXJyZW50LFxyXG4gICAgICAgIC4uLnJlc3RcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIGluaXRpYWwsIHRhcmdldCwgc2VhcmNoRGlyZWN0aW9uLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKSB7XHJcbiAgICBmdW5jdGlvbiBoZWxwZXIoKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaERpcmVjdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA+PSAwICYmIChtYW5hZ2VkQ2VsbHNbdGFyZ2V0XSA9PSBudWxsIHx8ICEhbWFuYWdlZENlbGxzW3RhcmdldF0/LmhpZGRlbikpXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIodGFyZ2V0KSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0IDwgMCA/IGluaXRpYWwgOiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNlYXJjaERpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0IDwgbWFuYWdlZENlbGxzLmxlbmd0aCAmJiBtYW5hZ2VkQ2VsbHNbdGFyZ2V0XSA9PSBudWxsIHx8ICEhbWFuYWdlZENlbGxzW3RhcmdldF0/LmhpZGRlbilcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGluZGV4TWFuZ2xlcihpbmRleERlbWFuZ2xlcih0YXJnZXQpICsgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPj0gbWFuYWdlZENlbGxzLmxlbmd0aCA/IGluaXRpYWwgOiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGhlbHBlcigpKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJhZ2dhYmxlKHsgZWZmZWN0QWxsb3dlZCwgZGF0YSwgZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0LCBkcmFnSW1hZ2VZT2Zmc2V0IH0pIHtcclxuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmcsIGdldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsYXN0RHJvcEVmZmVjdCwgc2V0TGFzdERyb3BFZmZlY3QsIGdldExhc3REcm9wRWZmZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgdXNlRHJhZ2dhYmxlUHJvcHMgPSB1c2VDYWxsYmFjaygocCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgICAgICBjb25zdCBvbkRyYWdTdGFydCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gKGVmZmVjdEFsbG93ZWQgPz8gXCJhbGxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0ltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQgPz8gMCwgZHJhZ0ltYWdlWU9mZnNldCA/PyAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttaW1lVHlwZSwgZGF0YV0gb2YgZW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEobWltZVR5cGUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvbkRyYWdFbmQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdERyb3BFZmZlY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBvbkRyYWdTdGFydCxcclxuICAgICAgICAgICAgb25EcmFnRW5kLFxyXG4gICAgICAgICAgICByZWZcclxuICAgICAgICB9LCBwKTtcclxuICAgIH0sIFtlZmZlY3RBbGxvd2VkLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQsIC4uLk9iamVjdC5lbnRyaWVzKGRhdGEpLmZsYXQoKV0pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxyXG4gICAgICAgIGRyYWdnaW5nLFxyXG4gICAgICAgIGdldERyYWdnaW5nLFxyXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cclxuICAgICAgICAvLyBVc2VmdWwgZm9yIHJlbW92aW5nIHRoZSBlbGVtZW50IGFmdGVyd2FyZHMgaWYgaXQgd2FzIFwibW92ZVwiXHJcbiAgICAgICAgbGFzdERyb3BFZmZlY3QsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJhZ2dhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuO1xyXG47XHJcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVGaWxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBmaWxlTmFtZTtcclxuICAgIGVycm9yVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lLCBiYXNlKSB7XHJcbiAgICAgICAgc3VwZXIoYmFzZT8ubWVzc2FnZSA/PyBcIkFuIHVuc3BlY2lmaWVkIGVycm9yIG9jY3VycmVkIHJlYWRpbmcgdGhlIGZpbGUuXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9IGJhc2U/Lm5hbWU7XHJcbiAgICB9XHJcbn1cclxuLy9NZXJnZWRQcm9wczxVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEUsIFBpY2s8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIFwib25EcmFnRW50ZXJcIiB8IFwib25EcmFnTGVhdmVcIiB8IFwib25EcmFnT3ZlclwiIHwgXCJvbkRyb3BcIj4+LCBQPjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3BwYWJsZSh7IGVmZmVjdCB9KSB7XHJcbiAgICBjb25zdCBbZmlsZXNGb3JDb25zaWRlcmF0aW9uLCBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BwZWRGaWxlcywgc2V0RHJvcHBlZEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BwZWRTdHJpbmdzLCBzZXREcm9wcGVkU3RyaW5nc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkcm9wRXJyb3IsIHNldERyb3BFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgLy8gQWxsIHRoZSBwcm9taXNlcyBnZW5lcmF0ZWQgZnJvbSB0aGUgZHJvcCBldmVudHMuXHJcbiAgICAvLyBVc2VkIHRvIHByb2Nlc3MgbXVsdGlwbGUgZHJvcCBldmVudHMgaW4gc3VjY2Vzc2lvblxyXG4gICAgY29uc3QgZHJvcFByb21pc2VzUmVmID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UHJvbWlzZUluZGV4LCBzZXRDdXJyZW50UHJvbWlzZUluZGV4LCBnZXRDdXJyZW50UHJvbWlzZUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtwcm9taXNlQ291bnQsIHNldFByb21pc2VDb3VudCwgZ2V0UHJvbWlzZUNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxyXG4gICAgLy8gSWYgdGhlcmUgaXMgb25lLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcsIHNpbmNlIGl0IHJ1bnMgdGhlIHNhbWUgY2hlY2suXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgaWYgKHByb21pc2VDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb21pc2VDb3VudF0pO1xyXG4gICAgLy8gQW55dGltZSBvdXIgY3VycmVudCBwcm9taXNlIGNoYW5nZXMsXHJcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxyXG4gICAgLy8gRmluYWxseSwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnltb3JlIHByb21pc2VzLlxyXG4gICAgLy8gSWYgdGhlcmUgYXJlLCB0aGVuIGluY3JlYXNlIGN1cnJlbnRQcm9taXNlQ291bnQsXHJcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gKm9mdGVuKiwgYnV0IG1heWJlIGluIHRoZSBjYXNlIG9mXHJcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvbWlzZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcclxuICAgICAgICAgICAgY3VycmVudFByb21pc2UudGhlbigoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZm8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BwZWRGaWxlcyhmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZFN0cmluZ3Moc3RyaW5ncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgdGhhdCB3ZSdyZSBkb25lLCBhcmUgdGhlcmUgbW9yZSBwcm9taXNlcyBpbiB0aGUgcXVldWU/XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgcHJvbWlzZSBoYXMgc3RhcnRlZCwgbW9yZSBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFByb21pc2VJbmRleF0pO1xyXG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xyXG4gICAgICAgIC8vY29uc3QgcmVmID0gdXNlUmVmPEU+KG51bGwpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBjb2xsZWN0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlcy5cclxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gKGVmZmVjdCA/PyBcIm1vdmVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNaW1lVHlwZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlLmRhdGFUcmFuc2Zlcj8uaXRlbXMgPz8gW10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWltZVR5cGVzLmFkZCh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaCh7IHR5cGU6IGl0ZW0udHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obmV3RmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obmV3TWltZVR5cGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSGFuZGxlIHJlc2V0dGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXNcclxuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJvaWxlcnBsYXRlLCBJIGd1ZXNzXHJcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICBjb25zdCBvbkRyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRmlsZSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBpdGVtLmdldEFzU3RyaW5nKHJlc29sdmUpKSkudGhlbihzdHIgPT4gZHJvcERhdGFbdHlwZV0gPSBzdHIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcm9wUHJvbWlzZXNSZWYuY3VycmVudC5wdXNoKFByb21pc2UuYWxsKGFsbFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IGRyb3BEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9taXNlQ291bnQoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRHJhZ0VudGVyLCBvbkRyYWdMZWF2ZSwgb25EcmFnT3Zlciwgb25Ecm9wIH0sIHApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlRHJvcHBhYmxlUHJvcHMsXHJcbiAgICAgICAgZmlsZXNGb3JDb25zaWRlcmF0aW9uLFxyXG4gICAgICAgIHN0cmluZ3NGb3JDb25zaWRlcmF0aW9uLFxyXG4gICAgICAgIGRyb3BwZWRGaWxlcyxcclxuICAgICAgICBkcm9wcGVkU3RyaW5ncyxcclxuICAgICAgICBkcm9wRXJyb3JcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyb3BwYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW55ICpub24tUHJlYWN0KiBlbGVtZW50LCBhbmQgcmVtb3ZpbmcgaXQgd2hlbiB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBob29rIHVubW91bnRzLiBUaGUgY2FsbGJhY2sgZG9lcyBub3QgbmVlZCB0byBiZSBzdGFibGUgYWNyb3NzIHJlbmRlcnMuXHJcbiAqXHJcbiAqIER1ZSB0byB0eXBpbmcgbGltaXRhdGlvbnMsIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgbGlrZSB0aGlzOlxyXG4gKlxyXG4gKiBgdXNlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiaW5wdXRcIik8SW5wdXRFdmVudD4oZSA9PiB7fSlgXHJcbiAqXHJcbiAqIFRoZSB0eXBlIGFyZ3VtZW50IGlzIG9wdGlvbmFsLCBidXQgbmFycm93cyBkb3duIHRoZSB0eXBlIGZyb20gXCJhIHVuaW9uIG9mIGFsbCBldmVudHNcIiB0byB3aGF0ZXZlciB5b3Ugc3BlY2lmeSwgYW5kIGVycm9ycyBpZiBpdCBkb2Vzbid0IGV4aXN0LlxyXG4gKlxyXG4gKiBUaGVyZSBpcyBhIHNlcGFyYXRlIHZlcnNpb24gdGhhdCBhdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byBhIHNldCBvZiBwcm9wcy5cclxuICogSXQgdGFrZXMgZGlmZmVyZW50IGV2ZW50IHN0cmluZyB0eXBlcyAob25FdmVudCB2cyBvbmV2ZW50KS5cclxuICpcclxuICogQHBhcmFtIHRhcmdldCBBICpub24tUHJlYWN0KiBub2RlIHRvIGF0dGFjaCB0aGUgZXZlbnQgdG8uXHJcbiAqIEByZXR1cm5zXHJcbiAqICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxIYW5kbGVyKHRhcmdldCwgdHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xyXG4gICAgLy8gTm90ZSB0byBzZWxmOiBUaGUgdHlwaW5nIGRvZXNuJ3QgaW1wcm92ZSBldmVuIGlmIHRoaXMgaXMgc3BsaXQgdXAgaW50byBhIHN1Yi1mdW5jdGlvbi5cclxuICAgIC8vIE5vIG1hdHRlciB3aGF0LCBpdCBzZWVtcyBpbXBvc3NpYmxlIHRvIGdldCB0aGUgaGFuZGxlcidzIGV2ZW50IG9iamVjdCB0eXBlZCBwZXJmZWN0bHkuXHJcbiAgICAvLyBJdCBzZWVtcyBsaWtlIGl0J3MgZ3VhcmFudGVlZCB0byBhbHdheXMgYmUgYSB1bmlvbiBvZiBhbGwgYXZhaWxhYmxlIHR1cGVzLlxyXG4gICAgLy8gQWdhaW4sIG5vIG1hdHRlciB3aGF0IGNvbWJpbmF0aW9uIG9mIHN1Yi0gb3Igc3ViLXN1Yi1mdW5jdGlvbnMgdXNlZC5cclxuICAgIGxldCBzdGFibGVIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soaGFuZGxlciA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICBpZiAoaGFuZGxlciA9PSBudWxsKVxyXG4gICAgICAgIHN0YWJsZUhhbmRsZXIgPSBudWxsO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RhYmxlSGFuZGxlcikge1xyXG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBzdGFibGVIYW5kbGVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHN0YWJsZUhhbmRsZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0YXJnZXQsIHR5cGUsIHN0YWJsZUhhbmRsZXJdKTtcclxufVxyXG4vKipcclxuICogQW4gYWx0ZXJuYXRpdmUgd2F5IHRvIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQuIFVzZWZ1bCBwcmltYXJpbHkgd2hlbiBpbnRlZ3JhdGluZyAzcmQgcGFydHkgbGlicmFyaWVzIHRoYXQgZXhwZWN0IGEgZ2VuZXJpYyBcImFkZCBldmVudCBoYW5kbGVyXCIgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gbW9kaWZ5IGEgc2V0IG9mIHByb3BzIHRvIGFwcGx5IHRoaXMgaGFuZGxlci5cclxuICpcclxuICogRm9yIHR5cGluZyByZWFzb25zLCB0aGlzIGZ1bmN0aW9uIGlzIHNwbGl0IGludG8gdHdvLiAgVXNhZ2UgaXMgbGlrZSB0aGUgZm9sbG93aW5nOlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgeyB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzIH0gPSB1c2VMb2NhbEV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD4oKShcIm9uTW91c2VEb3duXCIsIGUgPT4geyAgfSk7XHJcbiAqIGNvbnN0IGRpdlByb3BzID0gdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyhwcm9wcyk7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsSGFuZGxlcigpIHtcclxuICAgIHJldHVybiB1c2VDYWxsYmFjaygodHlwZSwgaGFuZGxlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyKTtcclxuICAgICAgICBjb25zdCB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW3R5cGVdOiBzdGFibGVIYW5kbGVyIH0sIHByb3BzKTtcclxuICAgICAgICB9LCBbdHlwZV0pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZXZlbnQtaGFuZGxlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaWZmZXJlbnQgd2F5cyB0aGF0IGEgZm9jdXMgZXZlbnQgY2FuIGhhcHBlbi4gIEFzc3VtZVxyXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcclxuICpcclxuICogMS4gVGhlIHBhZ2UgbG9hZHMuXHJcbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cclxuICogICAgKiBObyBmb2N1cyBldmVudHMgYXJlIGZpcmVkLlxyXG4gKiAyLiBUaGUgd2luZG93IGlzIGZvY3VzZWQsIGFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXHJcbiAqICAgICogQSBgZm9jdXNgL2Bmb2N1c2luYCBldmVudCAqTUlHSFQqIGJlIGZpcmVkIGZvciBgYm9keWAuIERlcGVuZGluZyBvblxyXG4gKiAgICAgIHRoZSBicm93c2VyLCB0aGlzIGRlcGVuZHMgb24gd2hldGhlciB0aGUgaGFuZGxlciB3YXMgYXR0YWNoZWQgdG8gYHdpbmRvd2Agb3IgYGRvY3VtZW50YC5cclxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXHJcbiAqIDMuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqICAgICogYGZvY3VzYCBhbmQgYGZvY3VzaW5gIGFyZSBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiA0LiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cclxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgbmV3IGVsZW1lbnQuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBub3cgc2V0IHRvIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxyXG4gKiA1LiBBbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cclxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byBgYm9keWAuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiAgICAqIGBmb2N1c2luYCBpcyAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqXHJcbiAqXHJcbiAqIEluIHN1bW1hcnk6XHJcbiAqIDEuIEZvY3VzIGV2ZW50cyAqZG8qIG5vdGlmeSB1cyBvZiBhbGwgY2hhbmdlcyBpbiBmb2N1cywgYnV0IHRoZXJlIGlzIG5vIG9uZSBzaW5nbGUgY29tcHJlaGVuc2l2ZSBldmVudCB0aGF0IHByb3ZpZGVzIHVzIHdpdGggYWxsIGF2YWlsYWJsZSBpbmZvcm1hdGlvbi5cclxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXHJcbiAqIDMuIEEgYGJsdXJgIHdpdGhvdXQgYSBgZm9jdXNgIGNhbiBhbmQgd2lsbCBvY2N1ci4gVGhpcyBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gc29sZWx5IHVzZSBgZm9jdXNgIHRvIGRldGVjdCBhbGwgY2hhbmdlcy5cclxuICogNC4gQSBgYmx1cmAgZXZlbnQgd2hvc2UgYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlcmUgd2lsbCBiZSBubyBmb2xsb3dpbmcgYGZvY3VzYCBldmVudC5cclxuICpcclxuICpcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5jb25zdCBkdW1teSA9IDA7XHJcbmNvbnN0IGFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBNYXAoKTtcclxuY29uc3QgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBNYXAoKTtcclxuY29uc3Qgd2luZG93Rm9jdXNlZFVwZGF0ZXJzID0gbmV3IE1hcCgpO1xyXG5sZXQgd2luZG93c0ZvY3VzZWQgPSBuZXcgTWFwKCk7XHJcbmZ1bmN0aW9uIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgbWFwLCB2YWx1ZSkge1xyXG4gICAgZm9yIChsZXQgW290aGVyV2luZG93LCB1cGRhdGVyc10gb2YgbWFwKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdyA9PT0gb3RoZXJXaW5kb3cpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdXBkYXRlciBvZiB1cGRhdGVycykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlcj8uKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb2N1c291dChlKSB7XHJcbiAgICBjb25zdCB3aW5kb3cgPSBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCBhY3RpdmVFbGVtZW50VXBkYXRlcnMsIG51bGwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gSnVzdCB3YWl0IGZvciB0aGUgZm9jdXNpbiBldmVudC5cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb2N1c2luKGUpIHtcclxuICAgIGNvbnN0IHdpbmRvdyA9IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICBsZXQgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCk7XHJcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMsIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50KTtcclxufVxyXG5mdW5jdGlvbiB3aW5kb3dGb2N1cyhlKSB7XHJcbiAgICBjb25zdCB3aW5kb3cgPSAoZS50YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLnRhcmdldCA6IGUuY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUuY3VycmVudFRhcmdldCA6IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xyXG4gICAgd2luZG93c0ZvY3VzZWQuc2V0KHdpbmRvdywgdHJ1ZSk7XHJcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIHdpbmRvd0ZvY3VzZWRVcGRhdGVycywgdHJ1ZSk7XHJcbn1cclxuZnVuY3Rpb24gd2luZG93Qmx1cihlKSB7XHJcbiAgICBjb25zdCB3aW5kb3cgPSAoZS50YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLnRhcmdldCA6IGUuY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUuY3VycmVudFRhcmdldCA6IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xyXG4gICAgd2luZG93c0ZvY3VzZWQuc2V0KHdpbmRvdywgZmFsc2UpO1xyXG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMsIGZhbHNlKTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIHlvdSB0byBpbnNwZWN0IHdoaWNoIGVsZW1lbnQgaW4gdGhlIGBkb2N1bWVudGAgY3VycmVudGx5IGhhcyBmb2N1cywgd2hpY2ggd2FzIG1vc3QgcmVjZW50bHkgZm9jdXNlZCBpZiBub25lIGFyZSBjdXJyZW50bHksIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgd2luZG93IGhhcyBmb2N1cyBieSByZXR1cm5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XHJcbiAqICogYGdldEFjdGl2ZUVsZW1lbnQoKWBcclxuICogKiBgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQoKWBcclxuICogKiBgZ2V0V2luZG93Rm9jdXNlZCgpYFxyXG4gKiAqICoqTm8gcHJvcC1tb2RpZnlpbmcgaG9vayBpcyByZXR1cm5lZCBiZWNhdXNlIG5vbmUgaXMgbmVjZXNzYXJ5KipcclxuICpcclxuICogKFRoZSBkb2N1bWVudCdzIGJvZHkgcmVjZWl2aW5nIGZvY3VzLCBsaWtlIGl0IGRvZXMgd2hlbiB5b3UgY2xpY2sgb24gYW4gZW1wdHkgYXJlYSwgaXMgY291bnRlZCBhcyBubyBlbGVtZW50IGhhdmluZyBmb2N1cyBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzKVxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgcGFzc2l2ZSBob29rLCBzbyBieSBkZWZhdWx0IGl0IHJldHVybnMgZ2V0dGVyIGZ1bmN0aW9ucyB0aGF0IHJlcG9ydCB0aGlzIGluZm9ybWF0aW9uIGJ1dCB0aGUgY29tcG9uZW50IHdpbGwgbm90IHJlLXJlbmRlciBieSBkZWZhdWx0IHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGNoYW5nZXMuXHJcbiAqXHJcbiAqIElmIHlvdSBuZWVkIHRoZSBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGNoYW5nZXMsIHVzZSB0aGUgYG9uKkNoYW5nZWAgYXJndW1lbnRzIHRvIHNldCBzb21lIHN0YXRlIG9uIHlvdXIgZW5kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGl2ZUVsZW1lbnQoeyBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSB9KSB7XHJcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UpO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xyXG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgICAgICAgICAgaWYgKChhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdyk/LnNpemUgPz8gMCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cywgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1ciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZW0gZXZlbiBpZiB0aGV5J3JlIHVuZGVmaW5lZCB0byBtb3JlIGVhc2lseVxyXG4gICAgICAgICAgICAgICAgLy8gbWFuYWdlIHRoZSBcIj4wIG1lYW5zIGRvbid0IGFkZCBoYW5kbGVyc1wiIGxvZ2ljLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxBY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykgPz8gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxMYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFdpbmRvd0ZvY3VzZWRVcGRhdGVycyA9IHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5hZGQoc2V0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbExhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldExhc3RBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGxvY2FsV2luZG93Rm9jdXNlZFVwZGF0ZXJzLmFkZChzZXRXaW5kb3dGb2N1c2VkKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zZXQod2luZG93LCBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycyk7XHJcbiAgICAgICAgICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNldCh3aW5kb3csIGxvY2FsTGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuc2V0KHdpbmRvdywgbG9jYWxXaW5kb3dGb2N1c2VkVXBkYXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldEFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldExhc3RBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldFdpbmRvd0ZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtdKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZ2V0QWN0aXZlRWxlbWVudCwgc2V0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25BY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2dldExhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgdW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtnZXRXaW5kb3dGb2N1c2VkLCBzZXRXaW5kb3dGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbldpbmRvd0ZvY3VzZWRDaGFuZ2UsIHJldHVyblRydWUpO1xyXG4gICAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgdXNlQWN0aXZlRWxlbWVudFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkIH07XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjdGl2ZS1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcclxuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxyXG5mdW5jdGlvbiBub29wKCkgeyB9XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZENoYW5nZWQsIG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZENoYW5nZWQsIG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlIH0pIHtcclxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkZvY3VzZWRDaGFuZ2VkLCBvbkZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSk7XHJcbiAgICBjb25zdCBbZ2V0Rm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25Gb2N1c2VkQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xyXG4gICAgY29uc3QgW2dldEZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkZvY3VzZWRJbm5lckNoYW5nZWQsIHJldHVybkZhbHNlKTtcclxuICAgIGNvbnN0IFtnZXRMYXN0Rm9jdXNlZCwgc2V0TGFzdEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XHJcbiAgICBjb25zdCBbZ2V0TGFzdEZvY3VzZWRJbm5lciwgc2V0TGFzdEZvY3VzZWRJbm5lcl0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xyXG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VBY3RpdmVFbGVtZW50KHtcclxuICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChhY3RpdmVFbGVtZW50LCBwcmV2QWN0aXZlRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmRWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXNlZCA9IChzZWxmRWxlbWVudCAhPSBudWxsICYmIChzZWxmRWxlbWVudCA9PSBhY3RpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbm5lciA9ICghIXNlbGZFbGVtZW50Py5jb250YWlucyhhY3RpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgICAgIHNldEZvY3VzZWQoZm9jdXNlZCk7XHJcbiAgICAgICAgICAgIHNldEZvY3VzZWRJbm5lcihmb2N1c2VkSW5uZXIpO1xyXG4gICAgICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U/LihhY3RpdmVFbGVtZW50LCBwcmV2QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgW10pLFxyXG4gICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChsYXN0QWN0aXZlRWxlbWVudCwgcHJldkxhc3RBY3RpdmVFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkID0gKHNlbGZFbGVtZW50ICE9IG51bGwgJiYgKHNlbGZFbGVtZW50ID09IGxhc3RBY3RpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbm5lciA9ICghIXNlbGZFbGVtZW50Py5jb250YWlucyhsYXN0QWN0aXZlRWxlbWVudCkpO1xyXG4gICAgICAgICAgICBzZXRMYXN0Rm9jdXNlZChmb2N1c2VkKTtcclxuICAgICAgICAgICAgc2V0TGFzdEZvY3VzZWRJbm5lcihmb2N1c2VkSW5uZXIpO1xyXG4gICAgICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlPy4obGFzdEFjdGl2ZUVsZW1lbnQsIHByZXZMYXN0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgW10pLFxyXG4gICAgICAgIG9uV2luZG93Rm9jdXNlZENoYW5nZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1c2VIYXNGb2N1c1Byb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7IHJldHVybiB1c2VBY3RpdmVFbGVtZW50UHJvcHMocHJvcHMpOyB9LCBbdXNlQWN0aXZlRWxlbWVudFByb3BzXSk7XHJcbiAgICByZXR1cm4geyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRFbGVtZW50LCBnZXRGb2N1c2VkLCBnZXRGb2N1c2VkSW5uZXIsIGdldExhc3RGb2N1c2VkLCBnZXRMYXN0Rm9jdXNlZElubmVyLCBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrKTtcclxuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcclxuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xyXG4gICAgICAgIGlmIChpbnRlcnZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgIC8vIHRoYXQgY2xlYXJzIGFuZCByZXNldHMgdGhlIGludGVydmFsIGlmIGl0IGNoYW5nZXMuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0YWJsZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IGxhc3REZWxheVVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGxhc3REZWxheVVzZWQgPSBjdXJyZW50SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiLyohXG4qIHRhYmJhYmxlIDUuMi4xXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbnZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdhW2hyZWZdJywgJ2J1dHRvbicsICdbdGFiaW5kZXhdJywgJ2F1ZGlvW2NvbnRyb2xzXScsICd2aWRlb1tjb250cm9sc10nLCAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnLCAnZGV0YWlscyddO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcbnZhciBtYXRjaGVzID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gKCkge30gOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxudmFyIGdldENhbmRpZGF0ZXMgPSBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKGVsLCBpbmNsdWRlQ29udGFpbmVyLCBmaWx0ZXIpIHtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3RvcikpO1xuXG4gIGlmIChpbmNsdWRlQ29udGFpbmVyICYmIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgfVxuXG4gIGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLmZpbHRlcihmaWx0ZXIpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbnZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSc7XG59O1xuXG52YXIgZ2V0VGFiaW5kZXggPSBmdW5jdGlvbiBnZXRUYWJpbmRleChub2RlKSB7XG4gIHZhciB0YWJpbmRleEF0dHIgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuXG4gIGlmICghaXNOYU4odGFiaW5kZXhBdHRyKSkge1xuICAgIHJldHVybiB0YWJpbmRleEF0dHI7XG4gIH0gLy8gQnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cblxuXG4gIGlmIChpc0NvbnRlbnRFZGl0YWJsZShub2RlKSkge1xuICAgIHJldHVybiAwO1xuICB9IC8vIGluIENocm9tZSwgPGRldGFpbHMvPiwgPGF1ZGlvIGNvbnRyb2xzLz4gYW5kIDx2aWRlbyBjb250cm9scy8+IGVsZW1lbnRzIGdldCBhIGRlZmF1bHRcbiAgLy8gIGB0YWJJbmRleGAgb2YgLTEgd2hlbiB0aGUgJ3RhYmluZGV4JyBhdHRyaWJ1dGUgaXNuJ3Qgc3BlY2lmaWVkIGluIHRoZSBET00sXG4gIC8vICB5ZXQgdGhleSBhcmUgc3RpbGwgcGFydCBvZiB0aGUgcmVndWxhciB0YWIgb3JkZXI7IGluIEZGLCB0aGV5IGdldCBhIGRlZmF1bHRcbiAgLy8gIGB0YWJJbmRleGAgb2YgMDsgc2luY2UgQ2hyb21lIHN0aWxsIHB1dHMgdGhvc2UgZWxlbWVudHMgaW4gdGhlIHJlZ3VsYXIgdGFiXG4gIC8vICBvcmRlciwgY29uc2lkZXIgdGhlaXIgdGFiIGluZGV4IHRvIGJlIDAuXG5cblxuICBpZiAoKG5vZGUubm9kZU5hbWUgPT09ICdBVURJTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ1ZJREVPJyB8fCBub2RlLm5vZGVOYW1lID09PSAnREVUQUlMUycpICYmIG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG5cbnZhciBzb3J0T3JkZXJlZFRhYmJhYmxlcyA9IGZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn07XG5cbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xuXG52YXIgaXNIaWRkZW5JbnB1dCA9IGZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufTtcblxudmFyIGlzRGV0YWlsc1dpdGhTdW1tYXJ5ID0gZnVuY3Rpb24gaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gJ0RFVEFJTFMnICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC50YWdOYW1lID09PSAnU1VNTUFSWSc7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBpc1RhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHJhZGlvU2NvcGUgPSBub2RlLmZvcm0gfHwgbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIHZhciBxdWVyeVJhZGlvcyA9IGZ1bmN0aW9uIHF1ZXJ5UmFkaW9zKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuXG4gIHZhciByYWRpb1NldDtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mod2luZG93LkNTUy5lc2NhcGUobm9kZS5uYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mobm9kZS5uYW1lKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdMb29rcyBsaWtlIHlvdSBoYXZlIGEgcmFkaW8gYnV0dG9uIHdpdGggYSBuYW1lIGF0dHJpYnV0ZSBjb250YWluaW5nIGludmFsaWQgQ1NTIHNlbGVjdG9yIGNoYXJhY3RlcnMgYW5kIG5lZWQgdGhlIENTUy5lc2NhcGUgcG9seWZpbGw6ICVzJywgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0LCBub2RlLmZvcm0pO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn07XG5cbnZhciBpc1JhZGlvID0gZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn07XG5cbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufTtcblxudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4obm9kZSwgZGlzcGxheUNoZWNrKSB7XG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlVW5kZXJEZXRhaWxzLCAnZGV0YWlsczpub3QoW29wZW5dKSAqJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2Z1bGwnKSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlzcGxheUNoZWNrID09PSAnbm9uLXplcm8tYXJlYScpIHtcbiAgICB2YXIgX25vZGUkZ2V0Qm91bmRpbmdDbGllID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgd2lkdGggPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG5cbiAgICByZXR1cm4gd2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTsgLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxuXG5cbnZhciBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0ID0gZnVuY3Rpb24gaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSB7XG4gIGlmIChpc0lucHV0KG5vZGUpIHx8IG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcgfHwgbm9kZS50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAocGFyZW50Tm9kZS50YWdOYW1lID09PSAnRklFTERTRVQnICYmIHBhcmVudE5vZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgLy8gbG9vayBmb3IgdGhlIGZpcnN0IDxsZWdlbmQ+IGFzIGFuIGltbWVkaWF0ZSBjaGlsZCBvZiB0aGUgZGlzYWJsZWRcbiAgICAgICAgLy8gIDxmaWVsZHNldD46IGlmIHRoZSBub2RlIGlzIGluIHRoYXQgbGVnZW5kLCBpdCdsbCBiZSBlbmFibGVkIGV2ZW5cbiAgICAgICAgLy8gIHRob3VnaCB0aGUgZmllbGRzZXQgaXMgZGlzYWJsZWQ7IG90aGVyd2lzZSwgdGhlIG5vZGUgaXMgaW4gYVxuICAgICAgICAvLyAgc2Vjb25kYXJ5L3N1YnNlcXVlbnQgbGVnZW5kLCBvciBzb21ld2hlcmUgZWxzZSB3aXRoaW4gdGhlIGZpZWxkc2V0XG4gICAgICAgIC8vICAoaG93ZXZlciBkZWVwIG5lc3RlZCkgYW5kIGl0J2xsIGJlIGRpc2FibGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudE5vZGUuY2hpbGRyZW4uaXRlbShpKTtcblxuICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAnTEVHRU5EJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5zKG5vZGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gdGhlIG5vZGUgaXNuJ3QgaW4gdGhlIGZpcnN0IGxlZ2VuZCAoaW4gZG9jIG9yZGVyKSwgc28gbm8gbWF0dGVyXG4gICAgICAgICAgICAvLyAgd2hlcmUgaXQgaXMgbm93LCBpdCdsbCBiZSBkaXNhYmxlZFxuXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyB0aGUgbm9kZSBpc24ndCBpbiBhIGxlZ2VuZCwgc28gbm8gbWF0dGVyIHdoZXJlIGl0IGlzIG5vdywgaXQnbGwgYmUgZGlzYWJsZWRcblxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfSAvLyBlbHNlLCBub2RlJ3MgdGFiYmFibGUvZm9jdXNhYmxlIHN0YXRlIHNob3VsZCBub3QgYmUgYWZmZWN0ZWQgYnkgYSBmaWVsZHNldCdzXG4gIC8vICBlbmFibGVkL2Rpc2FibGVkIHN0YXRlXG5cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAobm9kZS5kaXNhYmxlZCB8fCBpc0hpZGRlbklucHV0KG5vZGUpIHx8IGlzSGlkZGVuKG5vZGUsIG9wdGlvbnMuZGlzcGxheUNoZWNrKSB8fCAvLyBGb3IgYSBkZXRhaWxzIGVsZW1lbnQgd2l0aCBhIHN1bW1hcnksIHRoZSBzdW1tYXJ5IGVsZW1lbnQgZ2V0cyB0aGUgZm9jdXNcbiAgaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkgfHwgaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5kaWRhdGUsIGkpIHtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlcy5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5ub2RlO1xuICB9KS5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290RWxlbWVudCBUaGUgRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlU3VidHJlZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5zdXJlVW50YWJiYWJsZScsXG5cblxuICAgICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICAgIGlmICggLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleCA9PT0gLTEgJiYgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShpbmVydFJvb3QpO1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE5vZGU7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgICAqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICAgICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgICAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICAgICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAgICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gICAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuXG59KSkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsImltcG9ydCBcIndpY2ctaW5lcnRcIjtcclxuaW1wb3J0IFwiYmxvY2tpbmctZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5jb25zdCBibG9ja2luZ0VsZW1lbnRzID0gZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHM7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYW4gZWxlbWVudCB0byB0cmFwIGZvY3VzIGJ5IGFwcGx5aW5nIHRoZSBcImluZXJ0XCIgYXR0cmlidXRlIHRvIGFsbCBzaWJsaW5nLCBhdW50LCBhbmQgdW5jbGUgbm9kZXMuXHJcbiAqXHJcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyBjb25zZWN1dGl2ZSBjYWxscyB3aXRoIGEgbG9vc2VseSBhcHBsaWVkIHN0YWNrIG9wZXJhdGlvblxyXG4gKiAoc3BlY2lmaWNhbGx5IHZpYSBgYmxvY2tpbmdFbGVtZW50c2AsIHdpdGggYSBzbWFsbCBwb2x5ZmlsbCBiZWNhdXNlIEknbSBub3Qgc3VyZSBob3cgbG9uZ1xyXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxyXG4gKiBAcGFyYW0gdGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoL3BvcCB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZ0VsZW1lbnRzIHN0YWNrLlxyXG4gICAgICovXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gU29tZXRpbWVzIGJsb2NraW5nRWxlbWVudHMgd2lsbCBmYWlsIGlmLCBmb3IgZXhhbXBsZSxcclxuICAgICAgICAgICAgLy8gdGhlIHRhcmdldCBlbGVtZW50IGlzbid0IGNvbm5lY3RlZCB0byBkb2N1bWVudC5ib2R5LlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHJhcmUsIGJ1dCBpdCdzIGJldHRlciB0byBmYWlsIHNpbGVudGx5IHdpdGggd2VpcmQgdGFiYmluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICAvLyB0aGFuIHRvIGNyYXNoIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnB1c2godGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5yZW1vdmUodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZWxsLCBzZW1pLXNpbGVudGx5LlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbdGFyZ2V0XSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gYmxvY2tpbmdFbGVtZW50cy50b3A7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJsb2NraW5nLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBpc0ZvY3VzYWJsZSB9IGZyb20gXCJ0YWJiYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XHJcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmNvbnN0IGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzVHJhcCh7IHRyYXBBY3RpdmUgfSkge1xyXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcclxuICAgIC8vY29uc3QgW2xhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnRdID0gdXNlU3RhdGU8Tm9kZSB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHt9KTtcclxuICAgIC8vIFdoZW4gdGhlIHRyYXAgYmVjb21lcyBhY3RpdmUsIGJlZm9yZSB3ZSBsZXQgdGhlIGJsb2NraW5nRWxlbWVudHMgaG9vayBydW4sXHJcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHdoYXRldmVyJ3MgY3VycmVudGx5IGZvY3VzZWQgYW5kIHNhdmUgaXQuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cmFwQWN0aXZlICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRvIHdoYXRldmVyJ3MgY3VycmVudGx5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICogQW55IHRpbWUgd2UgYWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgdHJhcCxcclxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXHJcbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcclxuICAgICAqIHRyYWNrZWQgaW4gZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvIGlmIG5vdClcclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5yZWFzb25zP1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1tb2RhbFwiOiB0cmFwQWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSwgdXNlUmVmRWxlbWVudFByb3BzKHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcykpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VGb2N1c1RyYXBQcm9wcyxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBjb250YWluZWQgd2l0aGluIHRoZSBnaXZlbiBub2RlLCBvciBudWxsIGlmIG5vbmUgYXJlIGZvdW5kLlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgeyBhY2NlcHROb2RlOiAobm9kZSkgPT4gKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGlzRm9jdXNhYmxlKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCkgfSk7XHJcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IHRyZWVXYWxrZXIuZmlyc3RDaGlsZCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Rm9jdXNhYmxlO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb2N1cy10cmFwLmpzLm1hcCIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgZn1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIGQsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpkKGQobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2QobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9ZChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpkfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sYz0hMD09PXQuX19oO3IuX191Kyt8fGN8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PWQobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LHo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uICQobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gcSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPXEsbi5uYXRpdmVFdmVudD1ufTt2YXIgRyxKPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxLPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHU9LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgbyBpbiByPXt9LGUpe3ZhciBpPWVbb107ViYmXCJjaGlsZHJlblwiPT09byYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWl8fChcImRlZmF1bHRWYWx1ZVwiPT09byYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9vPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1vJiYhMD09PWk/aT1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChvKT9vPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChvK3QpJiYheihlLnR5cGUpP289XCJvbmlucHV0XCI6L15vbmZvY3VzJC9pLnRlc3Qobyk/bz1cIm9uZm9jdXNpblwiOi9eb25ibHVyJC9pLnRlc3Qobyk/bz1cIm9uZm9jdXNvdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yLGUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSl9bi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOiQsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLCQgYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImV4cG9ydCBjb25zdCBFdmVudERldGFpbCA9IFN5bWJvbChcImV2ZW50LWRldGFpbFwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGVuaGFuY2VFdmVudChlLCBkZXRhaWwpIHtcclxuICAgIGxldCBldmVudCA9IGU7XHJcbiAgICBldmVudFtFdmVudERldGFpbF0gPSBkZXRhaWw7XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VHbG9iYWxIYW5kbGVyLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmxldCBwdWxzZSA9IChcInZpYnJhdGVcIiBpbiBuYXZpZ2F0b3IpID8gKCgpID0+IG5hdmlnYXRvci52aWJyYXRlKDEwKSkgOiAoKCkgPT4geyB9KTtcclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gZW5hYmxlL2Rpc2FibGUgYnV0dG9uIHZpYnJhdGlvbiBwdWxzZXMgb24gYW4gYXBwLXdpZGUgc2NhbGUuXHJcbiAqXHJcbiAqXHJcbiAqIEBwYXJhbSBmdW5jIFRoZSBmdW5jdGlvbiB0byBydW4gd2hlbiBhIGJ1dHRvbiBpcyB0YXBwZWQuXHJcbiAqIChEZWZhdWx0IGlzIGAoKSA9PiBuYXZpZ2F0b3IudmlicmF0ZSgxMClgIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBpdCwgYSBub29wIG90aGVyd2lzZSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRCdXR0b25WaWJyYXRlKGZ1bmMpIHtcclxuICAgIHB1bHNlID0gZnVuYztcclxufVxyXG5mdW5jdGlvbiBleGNsdWRlcyh0YXJnZXQsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlPy5bdGFyZ2V0XSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4vKipcclxuICogc2VsZWN0aW9uLmNvbnRhaW5zTm9kZSBkb2Vzbid0IGFjY291bnQgZm9yIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCxcclxuICogc28gaGVyZSdzIGEgd29ya2Fyb3VuZCBmb3IgdGhhdC5cclxuICpcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIG5vZGVIYXNTZWxlY3RlZFRleHQoZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbj8uY29udGFpbnNOb2RlKGVsZW1lbnQsIHRydWUpICYmICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbi8qKlxyXG4gKiBBZGRzIHRoZSBuZWNlc3NhcnkgZXZlbnQgaGFuZGxlcnMgdG8gY3JlYXRlIGEgXCJwcmVzc1wiLWxpa2UgZXZlbnQgZm9yXHJcbiAqIGJ1dHRvbnMgYW5kIGFueXRoaW5nIGVsc2UgdGhhdCdzIFwiY2xpY2svdGFwL3ByZXNzL3RvdWNoXCItYWJsZS5cclxuICpcclxuICogTm90YWJseSwgdGhlIGZvbGxvd2luZyBjYXNlcyBhcmUgY292ZXJlZDpcclxuICogKiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgcHJvcGVybHkgZm9jdXNlZCwgZXZlbiBvbiBpT1MgU2FmYXJpICgqZXNwZWNpYWxseSogb24gaU9TIFNhZmFyaSlcclxuICogKiBEb3VibGUtY2xpY2tzIHdvbid0IHNlbGVjdCB0ZXh0LlxyXG4gKiAqIENvbnZlcnNlbHksIG1hbnVhbGx5IHNlbGVjdGluZyB0ZXh0IHdvbid0IGludm9rZSBhIHByZXNzLlxyXG4gKiAqIEtleWJvYXJkIGV2ZW50cyAmbWRhc2g7IGBlbnRlcmAgaW1tZWRpYXRlbHkgaW52b2tlcyB0aGUgaGFuZGxlciwgd2hpbGUgYHNwYWNlYCBpbnZva2VzIGl0IG9uIGtleXVwLlxyXG4gKiAqIEhhcHRpYyBmZWVkYmFjayAob24sIGxpa2UsIHRoZSBvbmUgYnJvd3NlciBjb21iaW5hdGlvbiB0aGF0IHN1cHBvcnRzIGl0ICZtZGFzaDsgdGhpcyBjYW4gYmUgZGlzYWJsZWQgYXBwLXdpZGUgd2l0aCBgc2V0QnV0dG9uVmlicmF0ZWApXHJcbiAqXHJcbiAqIEluIGFkZGl0aW9uLCB3aGVuIHRoZSBDU1MgYDphY3RpdmVgIHBzZXVkby1jbGFzcyB3b3VsZCBhcHBseSB0byBhIG5vcm1hbCBidXR0b25cclxuICogKGkuZS4gd2hlbiBob2xkaW5nIHRoZSBzcGFjZWJhciBvciBkdXJpbmcgbW91c2Vkb3duKSwgYHsgXCJkYXRhLXBzZXVkby1hY3RpdmVcIjogXCJ0cnVlXCIgfWBcclxuICogaXMgYWRkZWQgdG8gdGhlIHByb3BzLiAgWW91IGNhbiBlaXRoZXIgbGV0IGl0IHBhc3MgdGhyb3VnaCBhbmQgc3R5bGUgaXQgdGhyb3VnaCBuZXcgQ1NTLFxyXG4gKiBvciBpbnNwZWN0IHRoZSByZXR1cm5lZCBwcm9wcyBmb3IgaXQgYW5kIGFkZCBlLmcuIGFuIGAuYWN0aXZlYCBjbGFzcyBmb3IgZXhpc3RpbmcgQ1NTXHJcbiAqXHJcbiAqIEBwYXJhbSBvbkNsaWNrU3luY1xyXG4gKiBAcGFyYW0gZXhjbHVkZSBXaGV0aGVyIHRoZSBwb2x5ZmlsbCBzaG91bGRuJ3QgYXBwbHkgKGNhbiBzcGVjaWZ5IGZvciBzcGVjaWZpYyBpbnRlcmFjdGlvbnMpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJlc3NFdmVudEhhbmRsZXJzKG9uQ2xpY2tTeW5jLCBleGNsdWRlKSB7XHJcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICAvLyBBIGJ1dHRvbiBjYW4gYmUgYWN0aXZhdGVkIGluIG11bHRpcGxlIHdheXMsIHNvIG9uIHRoZSBvZmYgY2hhbmNlXHJcbiAgICAvLyB0aGF0IG11bHRpcGxlIGFyZSB0cmlnZ2VyZWQgYXQgb25jZSwgd2Ugb25seSAqYWN0dWFsbHkqIHJlZ2lzdGVyXHJcbiAgICAvLyBhIHByZXNzIG9uY2UgYWxsIG9mIG91ciBcIm9uXCIgc2lnbmFscyBoYXZlIHR1cm5lZCBiYWNrIHRvIFwib2ZmXCIuXHJcbiAgICAvLyBXZSBhcHByb3hpbWF0ZSB0aGlzIGJ5IGp1c3QgaW5jcmVtZW50aW5nIHdoZW4gYWN0aXZlLCBhbmRcclxuICAgIC8vIGRlY3JlbWVudGluZyB3aGVuIGRlYWN0aXZhdGVkLlxyXG4gICAgLy9cclxuICAgIC8vIEFzIGFuIGVtZXJnZW5jeSBmYWlsc2FmZSwgd2hlbiB0aGUgZWxlbWVudCBsb29zZXMgZm9jdXMsXHJcbiAgICAvLyB0aGlzIGlzIHJlc2V0IGJhY2sgdG8gMC5cclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZSwgZ2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgLy8gSWYgd2UgdGhlIGN1cnJlbnQgdGV4dCBzZWxlY3Rpb24gY2hhbmdlcyB0byBpbmNsdWRlIHRoaXMgZWxlbWVudFxyXG4gICAgLy8gRFVSSU5HIGUuZy4gYSBtb3VzZWRvd24sIHRoZW4gd2UgZG9uJ3Qgd2FudCB0aGUgbW91c2V1cCB0byBcImNvdW50XCIsIGFzIGl0IHdlcmUsXHJcbiAgICAvLyBiZWNhdXNlIGl0cyBvbmx5IHB1cnBvc2Ugd2FzIHNlbGVjdGluZyB0ZXh0LCBub3QgY2xpY2tpbmcgYnV0dG9ucy5cclxuICAgIC8vXHJcbiAgICAvLyBUbyBjYXRjaCB0aGlzLCBhbnkgdGltZSB0aGUgdGV4dCBzZWxlY3Rpb24gaW5jbHVkZXMgdXMgd2hpbGUgaW4gdGhlIG1pZGRsZVxyXG4gICAgLy8gb2YgYSBjbGljaywgdGhpcyBmbGFnIGlzIHNldCwgd2hpY2ggY2FuY2VscyB0aGUgYWN0aXZhdGlvbiBvZiBhIHByZXNzLlxyXG4gICAgLy8gVGhlIGZsYWcgaXMgcmVzZXQgYW55IHRpbWUgdGhlIHNlbGVjdGlvbiBpcyBlbXB0eSBvciB0aGUgYnV0dG9uIGlzXHJcbiAgICAvLyBubyBsb25nZXIgYWN0aXZlLlxyXG4gICAgY29uc3QgW3RleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24sIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlR2xvYmFsSGFuZGxlcihkb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgZSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbihhY3RpdmUgPT0gMCA/IGZhbHNlIDogbm9kZUhhc1NlbGVjdGVkVGV4dChnZXRFbGVtZW50KCkpKTtcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlID09IDApXHJcbiAgICAgICAgICAgIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24oZmFsc2UpO1xyXG4gICAgfSwgW2FjdGl2ZSA9PSAwXSk7XHJcbiAgICBjb25zdCBvbkFjdGl2ZVN0YXJ0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoYSA9PiArK2EpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvbkFjdGl2ZVN0b3AgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZShhID0+IE1hdGgubWF4KDAsIC0tYSkpO1xyXG4gICAgICAgIGlmICh0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0QWN0aXZlKCkgPD0gMCkge1xyXG4gICAgICAgICAgICBoYW5kbGVQcmVzcyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAob25DbGlja1N5bmMpIHtcclxuICAgICAgICAgICAgLy8gTm90ZTogVGhlIGVsZW1lbnQgaXMgZm9jdXNlZCBoZXJlIGJlY2F1c2Ugb2YgaU9TIFNhZmFyaS5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gSXQncyBhbHdheXMgaU9TIFNhZmFyaS5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gaU9TIFNhZmFyaSAodGVzdGVkIG9uIDEyKSBkb3ducmlnaHQgcmVmdXNlcyB0byBhbGxvdyBcclxuICAgICAgICAgICAgLy8gZWxlbWVudHMgdG8gYmUgbWFudWFsbHkgZm9jdXNlZCBVTkxFU1MgaXQgaGFwcGVucyB3aXRoaW5cclxuICAgICAgICAgICAgLy8gYW4gZXZlbnQgaGFuZGxlciBsaWtlIHRoaXMuICBJdCBhbHNvIGRvZXNuJ3QgZm9jdXNcclxuICAgICAgICAgICAgLy8gYnV0dG9ucyBieSBkZWZhdWx0IHdoZW4gY2xpY2tlZCwgdGFwcGVkLCBldGMuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIElmIGl0IGJlY29tZXMgcHJvYmxlbWF0aWMgdGhhdCBidXR0b24tbGlrZXMgZXhwbGljaXRseSBiZWNvbWVcclxuICAgICAgICAgICAgLy8gZm9jdXNlZCB3aGVuIHRoZXkgYXJlIHByZXNzZWQsIHRoZW4gYW4gYWx0ZXJuYXRpdmUgc29sdXRpb24gZm9yXHJcbiAgICAgICAgICAgIC8vIHRoZSBxdWVzdGlvbiBvZiBcImhvdyBkbyBtZW51IGJ1dHRvbnMga2VlcCB0aGVpciBtZW51cyBvcGVuXCJcclxuICAgICAgICAgICAgLy8gYW5kIG90aGVyIGZvY3VzLXJlbGF0ZWQgbm9uc2Vuc2UgbmVlZHMgdG8gYmUgZmlndXJlZCBvdXQuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEZvciBpT1MgU2FmYXJpLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBcImZvY3VzXCIgaW4gZWxlbWVudClcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIC8vIFdoYXRldmVyIHRoZSBicm93c2VyIHdhcyBnb2luZyB0byBkbyB3aXRoIHRoaXMgZXZlbnQsXHJcbiAgICAgICAgICAgIC8vIGZvcmdldCBpdC4gV2UncmUgdHVybmluZyBpdCBpbnRvIGEgXCJwcmVzc1wiIGV2ZW50LlxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIEFsc28gc3RvcCBhbnlvbmUgZWxzZSBmcm9tIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LFxyXG4gICAgICAgICAgICAvLyBzaW5jZSB3ZSdyZSBleHBsaWNpdGx5IGhhbmRsaW5nIGl0LlxyXG4gICAgICAgICAgICAvLyAoTm90YWJseSwgdGhpcyBhbGxvd3MgbGFiZWxzIHRvIHdyYXAgaW5wdXRzLCB3aXRoIHRoZW1cclxuICAgICAgICAgICAgLy8gYm90aCBoYXZpbmcgcHJlc3MgZXZlbnQgaGFuZGxlcnMsIHdpdGhvdXQgZG91YmxlLWZpcmluZylcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gSGFwdGljIGZlZWRiYWNrIGZvciB0aGlzIHByZXNzIGV2ZW50XHJcbiAgICAgICAgICAgIHB1bHNlKCk7XHJcbiAgICAgICAgICAgIC8vIEFjdHVhbGx5IGNhbGwgb3VyIGhhbmRsZXIuXHJcbiAgICAgICAgICAgIG9uQ2xpY2tTeW5jKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcclxuICAgICAgICAvLyBTdG9wIGRvdWJsZSBjbGlja3MgZnJvbSBzZWxlY3RpbmcgdGV4dCBpbiBhbiBjb21wb25lbnQgdGhhdCdzICpzdXBwb3NlZCogdG8gYmUgYWN0aW5nIGxpa2UgYSBidXR0b24sXHJcbiAgICAgICAgLy8gYnV0IGFsc28gZG9uJ3QgcHJldmVudCB0aGUgdXNlciBmcm9tIHNlbGVjdGluZyB0aGF0IHRleHQgbWFudWFsbHkgaWYgdGhleSByZWFsbHkgd2FudCB0b1xyXG4gICAgICAgIC8vICh3aGljaCB1c2VyLXNlbGVjdDogbm9uZSB3b3VsZCBkbywgYnV0IGNhbmNlbGxpbmcgYSBkb3VibGUgY2xpY2sgb24gbW91c2VEb3duIGRvZXNuJ3QpXHJcbiAgICAgICAgaWYgKGUuZGV0YWlsID4gMSlcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMClcclxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDAgJiYgYWN0aXZlID4gMClcclxuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uQmx1ciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKDApO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uTW91c2VPdXQgPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogb25CbHVyO1xyXG4gICAgY29uc3Qgb25LZXlEb3duID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSAmJiBleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gXCIgXCIgJiYgb25DbGlja1N5bmMgJiYgIWV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkpIHtcclxuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgYWN0dWFsbHkgYWN0aXZhdGUgaXQgb24gYSBzcGFjZSBrZXlkb3duXHJcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBkbyBwcmV2ZW50RGVmYXVsdCB0byBzdG9wIHRoZSBwYWdlIGZyb20gc2Nyb2xsaW5nLlxyXG4gICAgICAgICAgICBvbkFjdGl2ZVN0YXJ0KGUpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIgJiYgIWV4Y2x1ZGVzKFwiZW50ZXJcIiwgZXhjbHVkZSkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvbkFjdGl2ZVN0YXJ0KGUpO1xyXG4gICAgICAgICAgICBvbkFjdGl2ZVN0b3AoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uS2V5VXAgPSBleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gXCIgXCIgJiYgIWV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkpXHJcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGUuZGV0YWlsID4gMSkge1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKHByb3BzKSA9PiB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25CbHVyLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwLCBvbk1vdXNlT3V0LCBvbkNsaWNrLCAuLi57IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IGFjdGl2ZSAmJiAhdGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkIH0gfSwgcHJvcHMpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvbih7IHRhZywgcHJlc3NlZCwgb25QcmVzcyB9KSB7XHJcbiAgICBmdW5jdGlvbiB1c2VBcmlhQnV0dG9uUHJvcHMoeyBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCwgdGFiSW5kZXgsIHJvbGUsIC4uLnAgfSkge1xyXG4gICAgICAgIGNvbnN0IHByb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiBvblByZXNzPy4oZW5oYW5jZUV2ZW50KGUsIHsgcHJlc3NlZDogcHJlc3NlZCA9PSBudWxsID8gbnVsbCA6ICFwcmVzc2VkIH0pKSwgdW5kZWZpbmVkKShwKTtcclxuICAgICAgICBjb25zdCBidXR0b25Qcm9wcyA9IHsgcm9sZSwgdGFiSW5kZXgsIFwiYXJpYS1wcmVzc2VkXCI6IGFyaWFQcmVzc2VkID8/IChwcmVzc2VkID09PSB0cnVlID8gXCJ0cnVlXCIgOiBwcmVzc2VkID09PSBmYWxzZSA/IFwiZmFsc2VcIiA6IHVuZGVmaW5lZCkgfTtcclxuICAgICAgICBjb25zdCBkaXZQcm9wcyA9IHsgLi4uYnV0dG9uUHJvcHMsIHRhYkluZGV4OiB0YWJJbmRleCA/PyAwLCByb2xlOiByb2xlID8/IFwiYnV0dG9uXCIgfTtcclxuICAgICAgICBjb25zdCBhbmNob3JQcm9wcyA9IHsgLi4uZGl2UHJvcHMgfTtcclxuICAgICAgICBzd2l0Y2ggKHRhZykge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShidXR0b25Qcm9wcywgcHJvcHMpO1xyXG4gICAgICAgICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYW5jaG9yUHJvcHMsIHByb3BzKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGRpdlByb3BzLCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VBcmlhQnV0dG9uUHJvcHNcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlSGFzRm9jdXMsIHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb24oeyBleHBhbmRlZEluZGV4LCBzZXRFeHBhbmRlZEluZGV4IH0pIHtcclxuICAgIGNvbnN0IFtsYXN0Rm9jdXNlZEluZGV4LCBzZXRMYXN0Rm9jdXNlZEluZGV4LCBnZXRMYXN0Rm9jdXNlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRGb2N1c2VkSW5kZXgsIHNldEN1cnJlbnRGb2N1c2VkSW5kZXgsIGdldEN1cnJlbnRGb2N1c2VkSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBzdGFibGVTZXRFeHBhbmRlZEluZGV4ID0gdXNlU3RhYmxlQ2FsbGJhY2soc2V0RXhwYW5kZWRJbmRleCA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24gfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KCgwKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9MYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KChtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChpID0+ICgoaSA/PyAwKSAtIDEpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoaSA9PiAoKGkgPz8gMCkgKyAxKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiYmxvY2tcIiwgaW5kZXg6IGxhc3RGb2N1c2VkSW5kZXggPz8gMCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0IH0pO1xyXG4gICAgdXNlQ2hpbGRGbGFnKHtcclxuICAgICAgICBhY3RpdmF0ZWRJbmRleDogZXhwYW5kZWRJbmRleCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucyxcclxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBvcGVuKSA9PiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0/LnNldE9wZW5Gcm9tUGFyZW50KG9wZW4pLFxyXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IChtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0/LmdldE9wZW5Gcm9tUGFyZW50KCkgPz8gbnVsbClcclxuICAgIH0pO1xyXG4gICAgdXNlQ2hpbGRGbGFnKHtcclxuICAgICAgICBhY3RpdmF0ZWRJbmRleDogbGFzdEZvY3VzZWRJbmRleCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucyxcclxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBvcGVuKSA9PiBvcGVuICYmIG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXS5mb2N1cygpLFxyXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uID0gdXNlQ2FsbGJhY2soKGFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFyZ3MuaW5kZXg7XHJcbiAgICAgICAgY29uc3QgW29wZW5Gcm9tUGFyZW50LCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogYm9keVJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VCb2R5UmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRCb2R5SWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1ib2R5LVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgcmFuZG9tSWQ6IGhlYWRSYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlSGVhZFJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtYWNjb3JkaW9uLXNlY3Rpb24taGVhZGVyLVwiIH0pO1xyXG4gICAgICAgIGxldCBvcGVuID0gKChhcmdzLm9wZW4gPz8gb3BlbkZyb21QYXJlbnQpID8/IG51bGwpO1xyXG4gICAgICAgIC8vIFRPRE86IENvbnZlcnQgdG8gdXNlIHVzZU1hbmFnZWRDaGlsZCBzbyB0aGF0IHRoaXMgaG9vayBcclxuICAgICAgICAvLyBpcyBzdGFibGUgd2l0aG91dCAoZGlyZWN0bHkpIGRlcGVuZGluZyBvbiB0aGUgb3BlbiBzdGF0ZS5cclxuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyKHsgdGFnIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHtcclxuICAgICAgICAgICAgICAgIG9uRm9jdXNlZENoYW5nZWQ6IHVzZUNhbGxiYWNrKChmb2N1c2VkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRGb2N1c2VkSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEZvY3VzZWRJbmRleChvbGRJbmRleCA9PiBvbGRJbmRleCA9PT0gaW5kZXggPyBudWxsIDogaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSwgW10pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChnZXRDdXJyZW50Rm9jdXNlZEluZGV4KCkgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50KCk/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIFtdKTtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VNYW5hZ2VkQ2hpbGRQcm9wcyB9ID0gdXNlTWFuYWdlZENoaWxkU2VjdGlvbih7IGluZGV4LCBvcGVuLCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnQsIGZvY3VzIH0pO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlclByb3BzKHsgW1wiYXJpYS1leHBhbmRlZFwiXTogYXJpYUV4cGFuZGVkLCBbXCJhcmlhLWRpc2FibGVkXCJdOiBhcmlhRGlzYWJsZWQsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoYXJncy5pbmRleCk7IH07XHJcbiAgICAgICAgICAgICAgICBsZXQgb25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0T3BlbkZyb21QYXJlbnQoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhYmxlU2V0RXhwYW5kZWRJbmRleChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWJsZVNldEV4cGFuZGVkSW5kZXgoYXJncy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldEIgPSB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXg6IDAgfSwgdXNlUHJlc3NFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHVuZGVmaW5lZCkocHJvcHMpKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXQzID0gdXNlTWVyZ2VkUHJvcHMoKSh1c2VIZWFkUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHtcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogKGFyaWFFeHBhbmRlZCA/PyAoISFvcGVuKS50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZGlzYWJsZWRcIjogKGFyaWFEaXNhYmxlZCA/PyAob3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkKSksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udXNlSGFzRm9jdXNQcm9wcyh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyhyZXRCKSlcclxuICAgICAgICAgICAgICAgIH0pKSwgeyBvbkZvY3VzIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyhyZXQzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyUHJvcHMgfTtcclxuICAgICAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvblByb3BzLCBpbmRleCwgb3Blbl0pO1xyXG4gICAgICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5UHJvcHMoeyByb2xlLCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV0MSA9IHVzZVJlZmVyZW5jZWRIZWFkSWRQcm9wcyhcImFyaWEtbGFiZWxsZWRieVwiKSh7IHJvbGU6IHJvbGUgPz8gXCJyZWdpb25cIiwgLi4ucHJvcHMgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV0MiA9IHVzZUJvZHlSYW5kb21JZFByb3BzKHJldDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5UHJvcHNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXhwYW5kZWQ6IG9wZW4sXHJcbiAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyLFxyXG4gICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHksXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb24sXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjY29yZGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcclxuLyoqXHJcbiAqIEFkZHMgYW4gSUQgYW5kIFwiYXJpYS1sYWJlbGxlZGJ5XCIgZm9yIHR3byBlbGVtZW50cywgYW4gXCJpbnB1dFwiIGVsZW1lbnQgYW5kIGEgXCJsYWJlbFwiIGVsZW1lbnQuXHJcbiAqXHJcbiAqIFJldHVybnMgdGhlIGB1c2VSZWZlcmVuY2VkSWRQcm9wc2AgaG9va3MgaWYgeW91IG5lZWQgdG8gYWxzbyBhZGQgb3RoZXIgSUQtcmVmZXJlbmNpbmcgYXR0cmlidXRlcywgbGlrZSBgZm9yYFxyXG4gKlxyXG4gKiBAc2VlIHVzZUlucHV0TGFiZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXgsIGJhY2t1cFRleHQgfSA9IHsgbGFiZWxQcmVmaXg6IFwibGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImlucHV0LVwiIH0pIHtcclxuICAgIGNvbnN0IFtsYWJlbEVsZW1lbnQsIHNldExhYmVsRWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpbnB1dEVsZW1lbnQsIHNldElucHV0RWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0TGFiZWxFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUxhYmVsUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRMYWJlbEVsZW1lbnQgfSk7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldElucHV0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VJbnB1dFJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0SW5wdXRFbGVtZW50IH0pO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VMYWJlbFJhbmRvbUlkUHJvcHMsIGlkOiBsYWJlbElkLCByYW5kb21JZDogbGFiZWxSYW5kb21JZCwgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBsYWJlbFByZWZpeCB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlSW5wdXRSYW5kb21JZFByb3BzLCBpZDogaW5wdXRJZCwgcmFuZG9tSWQ6IGlucHV0UmFuZG9tSWQsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogaW5wdXRQcmVmaXggfSk7XHJcbiAgICBjb25zdCBsYWJlbEhhc01vdW50ZWQgPSAhIShsYWJlbEVsZW1lbnQpO1xyXG4gICAgY29uc3QgaW5wdXRIYXNNb3VudGVkID0gISEoaW5wdXRFbGVtZW50KTtcclxuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wczogKHByb3BzKSA9PiB7IHJldHVybiB1c2VMYWJlbFJhbmRvbUlkUHJvcHModXNlTGFiZWxSZWZFbGVtZW50UHJvcHMocHJvcHMpKTsgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VHZW5lcmljTGFiZWxJbnB1dCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbElucHV0KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHM6ICh7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZGJ5LCBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHVzZUlucHV0UmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHVzZUlucHV0UmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtbGFiZWxcIjogKCFsYWJlbEhhc01vdW50ZWQgPyBiYWNrdXBUZXh0IDogYXJpYUxhYmVsKSA/PyBhcmlhTGFiZWwgfSwgcHJvcHMpKSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbbGFiZWxIYXNNb3VudGVkXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUdlbmVyaWNMYWJlbElucHV0LFxyXG4gICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsLFxyXG4gICAgICAgIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsXHJcbiAgICAgICAgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyxcclxuICAgICAgICBsYWJlbElkLFxyXG4gICAgICAgIGlucHV0SWQsXHJcbiAgICAgICAgbGFiZWxFbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50LFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogSGFuZGxlcyB0aGUgYXR0cmlidXRlcyBgaWRgLCBgZm9yYCwgYW5kIGBhcmlhLWxhYmVsbGVkYnlgIGZvciB0byByZWxhdGVkIGVsZW1lbnRzLlxyXG4gKlxyXG4gKiBJdCdzIGFzc3VtZWQgdGhhdCB0aGUgbGFiZWwgaXMgYW4gYEhUTUxMYWJlbEVsZW1lbnRgLCBhbmQgdGhlIGlucHV0IGlzIHNvbWV0aGluZyBmb3Igd2hpY2hcclxuICogdGhlIGBmb3JgIGF0dHJpYnV0ZSBjYW4gcmVmZXJlbmNlLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlucHV0TGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXggfSA9IHsgbGFiZWxQcmVmaXg6IFwibGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImlucHV0LVwiIH0pIHtcclxuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBpbnB1dElkLCBsYWJlbElkLCBpbnB1dEVsZW1lbnQsIGdldElucHV0RWxlbWVudCwgbGFiZWxFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9KTtcclxuICAgIGNvbnN0IHVzZUlucHV0TGFiZWxMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUlucHV0TGFiZWxMYWJlbCh7IHRhZyB9KSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUlucHV0TGFiZWxMYWJlbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRoRm9yID0gdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyhcImZvclwiKShwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRob3V0Rm9yID0gcHJvcHM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyh0YWcgPT0gXCJsYWJlbFwiID8gd2l0aEZvciA6IHdpdGhvdXRGb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxJbnB1dF0pO1xyXG4gICAgY29uc3QgdXNlSW5wdXRMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlSW5wdXRMYWJlbElucHV0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VJbnB1dExhYmVsSW5wdXRQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMocHJvcHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VJbnB1dExhYmVsTGFiZWwsXHJcbiAgICAgICAgdXNlSW5wdXRMYWJlbElucHV0LFxyXG4gICAgICAgIGxhYmVsSWQsXHJcbiAgICAgICAgaW5wdXRJZCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgbGFiZWxFbGVtZW50LFxyXG4gICAgICAgIGdldElucHV0RWxlbWVudCxcclxuICAgICAgICBnZXRMYWJlbEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuY29uc3QgaGFuZGxlc0lucHV0ID0gKHRhZywgbGFiZWxQb3NpdGlvbiwgd2hpY2gpID0+IHtcclxuICAgIGlmIChsYWJlbFBvc2l0aW9uID09PSBcInNlcGFyYXRlXCIpIHtcclxuICAgICAgICBpZiAod2hpY2ggPT09IFwiaW5wdXQtZWxlbWVudFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlIGlmICh3aGljaCA9PT0gXCJsYWJlbC1lbGVtZW50XCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0YWcgIT0gXCJpbnB1dFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGFiZWxQb3NpdGlvbiA9PT0gXCJ3cmFwcGluZ1wiKSB7XHJcbiAgICAgICAgaWYgKHdoaWNoID09PSBcImlucHV0LWVsZW1lbnRcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh3aGljaCA9PSBcImxhYmVsLWVsZW1lbnRcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBIYW5kbGVzIGxhYmVsIHR5cGUgKHdyYXBwaW5nIG9yIHNlcGFyYXRlKSBmb3IgY2hlY2tib3hlcywgcmFkaW9zLCBzd2l0Y2hlcywgZXRjLlxyXG4gKiBAcGFyYW0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlKHsgY2hlY2tlZCwgZGlzYWJsZWQsIGxhYmVsUG9zaXRpb24sIG9uSW5wdXQsIHJvbGUgfSkge1xyXG4gICAgY29uc3Qgc3RhYmxlT25JbnB1dCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgb25JbnB1dD8uKGUpOyB9KTtcclxuICAgIGNvbnN0IHsgaW5wdXRJZCwgbGFiZWxJZCwgdXNlSW5wdXRMYWJlbElucHV0OiB1c2VJTElucHV0LCB1c2VJbnB1dExhYmVsTGFiZWw6IHVzZUlMTGFiZWwsIGdldExhYmVsRWxlbWVudCwgZ2V0SW5wdXRFbGVtZW50IH0gPSB1c2VJbnB1dExhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1pbnB1dC1cIiB9KTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50KHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUlucHV0TGFiZWxJbnB1dFByb3BzOiB1c2VJTElucHV0UHJvcHMgfSA9IHVzZUlMSW5wdXQoKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICAgICAgLy8gb25DbGljayBhbmQgb25DaGFuZ2UgYXJlIGEgYml0IG1lc3N5LCBzbyB3ZSBuZWVkIHRvXHJcbiAgICAgICAgLy8gKmFsd2F5cyogbWFrZSBzdXJlIHRoYXQgdGhlIHZpc2libGUgc3RhdGUgaXMgY29ycmVjdFxyXG4gICAgICAgIC8vIGFmdGVyIGFsbCB0aGUgZXZlbnQgZHVzdCBzZXR0bGVzLlxyXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8yNzQ1LFxyXG4gICAgICAgIC8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8xODk5I2lzc3VlY29tbWVudC01MjU2OTAxOTRcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWcgPT0gXCJpbnB1dFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3RhZywgY2hlY2tlZF0pO1xyXG4gICAgICAgIHJldHVybiB7IGdldElucHV0RWxlbWVudDogZ2V0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMgfTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcclxuICAgICAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBDaHJvbWUgd29uJ3QgZmlyZSBvbklucHV0IGV2ZW50cyBmb3IgcmFkaW8gYnV0dG9ucyB0aGF0IGFyZSB0YWJJbmRleD0tMT8/XHJcbiAgICAgICAgICAgIC8vIE5lZWRzIGludmVzdGlnYXRpbmcsIGJ1dCBvbklucHV0IHdvcmtzIGZpbmUgaW4gRmlyZWZveFxyXG4gICAgICAgICAgICAvLyBUT0RPXHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhkaXNhYmxlZCB8fCAhaGFuZGxlc0lucHV0KHRhZywgbGFiZWxQb3NpdGlvbiwgXCJpbnB1dC1lbGVtZW50XCIpID8gdW5kZWZpbmVkIDogc3RhYmxlT25JbnB1dCwgdW5kZWZpbmVkKSh7fSk7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT0gXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgcHJvcHMub25JbnB1dCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHByb3BzID0gdXNlUmVmRWxlbWVudFByb3BzKHVzZUlMSW5wdXRQcm9wcyhwcm9wcykpO1xyXG4gICAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PSBcIndyYXBwaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhlIHdyYXBwZWQgbGFiZWwgaGFuZGxlcyBhbGwgaW50ZXJhY3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhpcyBlbGVtZW50IGNhbid0IGJlIGludGVyYWN0ZWQgd2l0aFxyXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiBpdCdzIGFuIGlucHV0IGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbmVydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25Gb2N1cyA9IGUgPT4gZ2V0TGFiZWxFbGVtZW50KCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWcgPT09IFwiaW5wdXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IHJvbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1jaGVja2VkXCJdID0gY2hlY2tlZCA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gZGlzYWJsZWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBsYWJlbCBjbGlja3MgY2FuJ3QgYWZmZWN0IHRoZSBjaGVja2JveCB3aGlsZSBpdCdzIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2xpY2sgPSBkaXNhYmxlZCA/ICgoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH0pIDogcHJvcHMub25DbGljaztcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkocDAsIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlSUxJbnB1dCwgcm9sZSwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWQsIGNoZWNrZWRdKTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUlucHV0TGFiZWxMYWJlbFByb3BzOiB1c2VJTExhYmVsUHJvcHMgfSA9IHVzZUlMTGFiZWwoeyB0YWcgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhkaXNhYmxlZCB8fCAhaGFuZGxlc0lucHV0KHRhZywgbGFiZWxQb3NpdGlvbiwgXCJsYWJlbC1lbGVtZW50XCIpID8gdW5kZWZpbmVkIDogc3RhYmxlT25JbnB1dCwgdW5kZWZpbmVkKSh7fSk7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09IFwid3JhcHBpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvcHMudGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IHJvbGU7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBkaXNhYmxlZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWNoZWNrZWRcIl0gPSBjaGVja2VkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgb25lIGNhc2Ugd2hlcmUgdGhlcmUncyBhbG1vc3Qgbm90aGluZyB0byBkb1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIG1vc3Qgbm9ybWFsIGNhc2Ugd2hlcmUgZXZlcnl0aGluZyBhY3RzIGFjY29yZGluZyBub3JtYWwgSFRNTCBtZWNoYW5pY3MuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSnVzdCBtYWtlIHN1cmUgdGhhdCBsYWJlbCBjbGlja3MgY2FuJ3QgYWZmZWN0IHRoZSBjaGVja2JveCB3aGlsZSBpdCdzIGRpc2FibGVkXHJcbiAgICAgICAgICAgIG5ld1Byb3BzLm9uQ2xpY2sgPSBkaXNhYmxlZCA/ICgoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH0pIDogbmV3UHJvcHMub25DbGljaztcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHVzZUlMTGFiZWxQcm9wcyhwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyB9O1xyXG4gICAgfSwgW3VzZUlMTGFiZWwsIGRpc2FibGVkLCBjaGVja2VkLCByb2xlLCBsYWJlbFBvc2l0aW9uXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCxcclxuICAgICAgICB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50LFxyXG4gICAgICAgIGdldElucHV0RWxlbWVudFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGFiZWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IHVzZUNoZWNrYm94TGlrZSB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUNoZWNrYm94KHsgbGFiZWxQb3NpdGlvbiwgY2hlY2tlZCwgb25JbnB1dCwgZGlzYWJsZWQgfSkge1xyXG4gICAgY29uc3Qgb25JbnB1dEVuaGFuY2VkID0gKGUpID0+IG9uSW5wdXQ/LihlbmhhbmNlRXZlbnQoZSwgeyBjaGVja2VkOiAhY2hlY2tlZCB9KSk7XHJcbiAgICBjb25zdCB7IGdldElucHV0RWxlbWVudCwgZ2V0TGFiZWxFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCB9ID0gdXNlQ2hlY2tib3hMaWtlKHsgY2hlY2tlZDogISFjaGVja2VkLCBsYWJlbFBvc2l0aW9uLCByb2xlOiBcImNoZWNrYm94XCIsIGRpc2FibGVkLCBvbklucHV0OiBvbklucHV0RW5oYW5jZWQgfSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveElucHV0RWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50KHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IGdldElucHV0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMgfSA9IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCh7IHRhZyB9KTtcclxuICAgICAgICBjb25zdCBpc01peGVkID0gKGNoZWNrZWQgPT0gXCJtaXhlZFwiKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBnZXRJbnB1dEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudCAmJiB0YWcgPT09IFwiaW5wdXRcIikge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBpc01peGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2lzTWl4ZWQsIHRhZ10pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94SW5wdXRFbGVtZW50UHJvcHMgfTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyhwMCk7XHJcbiAgICAgICAgICAgIHByb3BzLmNoZWNrZWQgPz89ICEhY2hlY2tlZDtcclxuICAgICAgICAgICAgaWYgKHRhZyA9PSBcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgY2hlY2tlZCwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWRdKTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94TGFiZWxFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQoeyB0YWcgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMgfSA9IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCh7IHRhZyB9KTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRQcm9wcyB9O1xyXG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCwgZGlzYWJsZWQsIGxhYmVsUG9zaXRpb25dKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoZWNrYm94LmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IEV2ZW50RGV0YWlsLCBlbmhhbmNlRXZlbnQgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG4vKipcclxuICpcclxuICpcclxuICogQHBhcmFtIHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrYm94R3JvdXAoeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgc2hvdWxkRm9jdXNPbkNoYW5nZSwgb25VcGRhdGVDaGlsZHJlbjogb25VcGRhdGVDaGlsZHJlblVuc3RhYmxlIH0pIHtcclxuICAgIGNvbnN0IG9uVXBkYXRlQ2hpbGRyZW4gPSB1c2VTdGFibGVDYWxsYmFjayhvblVwZGF0ZUNoaWxkcmVuVW5zdGFibGUpO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgc2hvdWxkRm9jdXNPbkNoYW5nZSB9KTtcclxuICAgIC8vY29uc3QgW3VuY2hlY2tlZENvdW50LCBzZXRVbmhlY2tlZENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoZWNrZWRDb3VudCwgc2V0Q2hlY2tlZENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hlY2tlZEluZGljZXMgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIC8vY29uc3QgW3NlbGZJc0NoZWNrZWQsIHNldFNlbGZJc0NoZWNrZWQsIGdldFNlbGZJc0NoZWNrZWRdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IFwibWl4ZWRcIj4oZmFsc2UpO1xyXG4gICAgY29uc3QgZ2V0U2VsZklzQ2hlY2tlZFVuc3RhYmxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudGFnZSA8PSAwID8gZmFsc2UgOiBwZXJjZW50YWdlID49IDEgPyB0cnVlIDogXCJtaXhlZFwiO1xyXG4gICAgfSwgW2NoZWNrZWRDb3VudCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aF0pO1xyXG4gICAgY29uc3QgZ2V0U2VsZklzQ2hlY2tlZFN0YWJsZSA9IHVzZVN0YWJsZUNhbGxiYWNrKGdldFNlbGZJc0NoZWNrZWRVbnN0YWJsZSk7XHJcbiAgICAvLyBJZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgcGFyZW50IGNoZWNrYm94J3MgdmFsdWUsIHRoZW4gdGhpcyByZWYgaG9sZHMgYSBtZW1vcnkgb2Ygd2hhdCB2YWx1ZXMgd2VyZSBoZWxkIGJlZm9yZS5cclxuICAgIC8vIE90aGVyd2lzZSwgaXQncyBudWxsIHdoZW4gdGhlIGxhc3QgaW5wdXQgd2FzIGZyb20gYSBjaGlsZCBjaGVja2JveC4gXHJcbiAgICBjb25zdCBzYXZlZENoZWNrZWRWYWx1ZXMgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBvbkNoZWNrYm94R3JvdXBQYXJlbnRJbnB1dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGZJc0NoZWNrZWQgPSBnZXRTZWxmSXNDaGVja2VkU3RhYmxlKCk7XHJcbiAgICAgICAgaWYgKHNlbGZJc0NoZWNrZWQgPT09IHRydWUgfHwgKHNlbGZJc0NoZWNrZWQgPT09IGZhbHNlICYmIHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID09IG51bGwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogZmFsc2UgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmSXNDaGVja2VkID09PSBcIm1peGVkXCIpIHtcclxuICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQuc2V0KGNoaWxkLmluZGV4LCBjaGlsZC5nZXRDaGVja2VkKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogdHJ1ZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID8/IHRydWUgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIC8vIEtlZXAgdHJhY2sgb2YgYWxsIGNoaWxkIElEcywgYW5kIGFueSB0aW1lIGFueSBvZiB0aGVtIGNoYW5nZSwgXHJcbiAgICAvLyBnZW5lcmF0ZSBhIG5ldyBzdHJpbmcgd2l0aCBhbGwgb2YgdGhlbSBjb25jYXRlbmF0ZWQgdG9nZXRoZXJcclxuICAgIC8vIChidXQgb25seSBvbmNlIHBlciByZW5kZXIpO1xyXG4gICAgY29uc3QgYWxsSWRzID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICBjb25zdCBbYXJpYUNvbnRyb2xzLCBzZXRBcmlhQ29udHJvbHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXBkYXRlSW5kZXgsIHNldElkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBub3RpZnlDaGVja2VkID0gdXNlQ2FsbGJhY2soKGluZGV4LCBjaGVja2VkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja2VkSW5kaWNlcy5jdXJyZW50LmhhcyhpbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIHNldENoZWNrZWRDb3VudChjID0+IChjICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZEluZGljZXMuY3VycmVudC5hZGQoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZEluZGljZXMuY3VycmVudC5oYXMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyAtIDEpKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuZGVsZXRlKGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXRDaGVja2VkQ291bnQsIGNoZWNrZWRJbmRpY2VzXSk7XHJcbiAgICAvKnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIHNldFNlbGZJc0NoZWNrZWQocGVyY2VudGFnZSA8PSAwID8gZmFsc2UgOiBwZXJjZW50YWdlID49IDEgPyB0cnVlIDogXCJtaXhlZFwiKVxyXG4gICAgfSwgW3NldFNlbGZJc0NoZWNrZWQsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgsIGNoZWNrZWRDb3VudF0pOyovXHJcbiAgICBjb25zdCB1c2VDaGVja2JveEdyb3VwUGFyZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1jb250cm9sc1wiOiBhcmlhQ29udHJvbHMgfSwgcHJvcHMpO1xyXG4gICAgfSwgW2FyaWFDb250cm9sc10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBcmlhQ29udHJvbHMoQXJyYXkuZnJvbShhbGxJZHMuY3VycmVudCkuam9pbihcIiBcIikpO1xyXG4gICAgfSwgW3VwZGF0ZUluZGV4XSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveEdyb3VwQ2hpbGQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyBpbmRleCwgdGV4dCwgY2hlY2tlZCwgaWQsIC4uLnJlc3QgfSkge1xyXG4gICAgICAgIGNvbnN0IGdldENoZWNrZWQgPSB1c2VTdGFibGVHZXR0ZXIoY2hlY2tlZCk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuYWRkKGlkKTtcclxuICAgICAgICAgICAgc2V0SWRVcGRhdGVJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGxJZHMuY3VycmVudC5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0SWRVcGRhdGVJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW2lkXSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgbm90aWZ5Q2hlY2tlZChpbmRleCwgY2hlY2tlZCk7XHJcbiAgICAgICAgfSwgW2luZGV4LCBjaGVja2VkXSk7XHJcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IGluZGV4LCB0ZXh0LCBpZCwgZ2V0Q2hlY2tlZCwgLi4ucmVzdCB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWJiYWJsZSxcclxuICAgICAgICAgICAgdXNlQ2hlY2tib3hHcm91cENoaWxkUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKSksIFt1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHNdKVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbm90aWZ5Q2hlY2tlZCwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYW5hZ2VkQ2hlY2tib3hlczogbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIHVzZUNoZWNrYm94R3JvdXBDaGlsZCxcclxuICAgICAgICB1c2VDaGVja2JveEdyb3VwUGFyZW50UHJvcHMsXHJcbiAgICAgICAgcGFyZW50SXNDaGVja2VkOiBnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUoKSxcclxuICAgICAgICBwYXJlbnRQZXJjZW50Q2hlY2tlZDogKGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgpLFxyXG4gICAgICAgIG9uQ2hlY2tib3hHcm91cFBhcmVudElucHV0LFxyXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXHJcbiAgICAgICAgZm9jdXM6IGZvY3VzQ3VycmVudCxcclxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxyXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGVja2JveC1ncm91cC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50LCB1c2VGb2N1c1RyYXAsIHVzZU1lcmdlZFByb3BzLCB1c2VQYXNzaXZlU3RhdGUsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciBhIG1vZGFsLWxpa2Ugc29mdC1kaXNtaXNzIGludGVyYWN0aW9uLlxyXG4gKlxyXG4gKiBUaGF0IGlzLCBhbnkgY2xpY2tzIG9yIHRhcHMgb3V0c2lkZSBvZiB0aGUgZ2l2ZW4gY29tcG9uZW50LFxyXG4gKiBvciBhbnkgdGltZSB0aGUgRXNjYXBlIGtleSBpcyBwcmVzc2VkIHdpdGhpbiB0aGUgY29tcG9uZW50LFxyXG4gKiAod2l0aCB2YXJpb3VzIGJyb3dzZXIgb2RkaXRpZXMgcmVnYXJkaW5nIGNsaWNrcyBvbiBibGFuayBvciBpbmVydCBhcmVhcyBoYW5kbGVkKVxyXG4gKiB0aGUgY29tcG9uZW50IHdpbGwgcmVxdWVzdCB0byBjbG9zZSBpdHNlbGYuXHJcbiAqXHJcbiAqIE9mIGNvdXJzZSwgaWYgeW91IGRvbid0IGRvIGFueXRoaW5nIGluIHRoZSBgb25DbG9zZWAgZnVuY3Rpb24sXHJcbiAqIGl0IHdvbid0IGJlIGEgc29mdCBkaXNtaXNzIGFueW1vcmUuXHJcbiAqXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2UsIGdldEVsZW1lbnRzIH0pIHtcclxuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcclxuICAgIGNvbnN0IHN0YWJsZUdldEVsZW1lbnRzID0gdXNlU3RhYmxlQ2FsbGJhY2soZ2V0RWxlbWVudHMpO1xyXG4gICAgY29uc3QgZ2V0T3BlbiA9IHVzZVN0YWJsZUdldHRlcihvcGVuKTtcclxuICAgIGNvbnN0IG9uQmFja2Ryb3BDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIG9uQmFja2Ryb3BDbGljayhlKSB7XHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBnZXRFbGVtZW50KCk/Lm93bmVyRG9jdW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgIC8vIEJhc2ljYWxseSwgXCJ3YXMgdGhpcyBldmVudCBmaXJlZCBvbiB0aGUgcm9vdC1tb3N0IGVsZW1lbnQsIG9yIGF0IGxlYXN0IGFuIGVsZW1lbnQgbm90IGNvbnRhaW5lZCBieSB0aGUgbW9kYWw/XCJcclxuICAgICAgICAvLyBFaXRoZXIgY291bGQgYmUgaG93IHRoZSBicm93c2VyIGhhbmRsZXMgdGhlc2Ugc29ydHMgb2YgXCJpbnRlcmFjdGluZyB3aXRoIG5vdGhpbmdcIiBldmVudHMuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgc3RhYmxlT25DbG9zZShcImJhY2tkcm9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBzdGFibGVHZXRFbGVtZW50cygpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cyAmJiBlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSlcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kSW5zaWRlQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJbnNpZGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZEluc2lkZUNsaWNrKVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZShcImJhY2tkcm9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHsgdXNlQWN0aXZlRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VBY3RpdmVFbGVtZW50KHtcclxuICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygobmV3RWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRGb2N1c2FibGVFbGVtZW50cyA9IHN0YWJsZUdldEVsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZEZvY3VzYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsaWRGb2N1c2FibGVFbGVtZW50cykpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRGb2N1c2FibGVFbGVtZW50cyA9IFt2YWxpZEZvY3VzYWJsZUVsZW1lbnRzXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZvY3VzYWJsZSBvZiB2YWxpZEZvY3VzYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZT8uY29udGFpbnMobmV3RWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsb3NlKFwibG9zdC1mb2N1c1wiKTtcclxuICAgICAgICB9LCBbXSlcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xyXG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlPy5vd25lckRvY3VtZW50O1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudD8uZGVmYXVsdFZpZXc7XHJcbiAgICAgICAgICAgIC8vIFNpbmNlIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbmVydCwgd2UgbGlzdGVuIGZvciBjYXB0dXJlZCBjbGlja3Mgb24gdGhlIHdpbmRvd1xyXG4gICAgICAgICAgICAvLyAod2UgZG9uJ3QgdXNlIG9uQ2xpY2sgc2luY2UgdGhhdCBkb2Vzbid0IGZpcmUgd2hlbiBjbGlja2VkIG9uIGVtcHR5L2luZXJ0IGFyZWFzKVxyXG4gICAgICAgICAgICAvLyBOb3RlOiBXZSBuZWVkIGEgKnNlcGFyYXRlKiB0b3VjaCBldmVudCBvbiBtb2JpbGUgU2FmYXJpLCBiZWNhdXNlXHJcbiAgICAgICAgICAgIC8vIGl0IGRvZXNuJ3QgbGV0IGNsaWNrIGV2ZW50cyBidWJibGUgb3IgYmUgY2FwdHVyZWQgZnJvbSB0cmFkaXRpb25hbGx5IG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cyxcclxuICAgICAgICAgICAgLy8gYnV0IHRvdWNoIGV2ZW50cyB3b3JrIGFzIGV4cGVjdGVkLlxyXG4gICAgICAgICAgICBjb25zdCBtb3VzZURvd24gPSAoZSkgPT4geyBpZiAoZ2V0T3BlbigpKVxyXG4gICAgICAgICAgICAgICAgb25CYWNrZHJvcENsaWNrKGUpOyB9O1xyXG4gICAgICAgICAgICBjb25zdCB0b3VjaFN0YXJ0ID0gKGUpID0+IHsgaWYgKGdldE9wZW4oKSlcclxuICAgICAgICAgICAgICAgIG9uQmFja2Ryb3BDbGljayhlKTsgfTtcclxuICAgICAgICAgICAgY29uc3Qga2V5RG93biA9IChlKSA9PiB7IGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25DbG9zZShcImVzY2FwZVwiKTtcclxuICAgICAgICAgICAgfSB9O1xyXG4gICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VEb3duLCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydCwgeyBjYXB0dXJlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd24pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93bik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCBbXSlcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgdXNlU29mdERpc21pc3NQcm9wczogdXNlQ2FsbGJhY2socHJvcHMgPT4gdXNlQWN0aXZlRWxlbWVudFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpLCBbdXNlQWN0aXZlRWxlbWVudFByb3BzLCB1c2VSZWZFbGVtZW50UHJvcHNdKSB9O1xyXG59XHJcbi8qKlxyXG4gKiBBIGdlbmVyaWMgbW9kYWwgaG9vaywgdXNlZCBieSBtb2RhbCBkaWFsb2dzLCBidXQgY2FuIGFsc29cclxuICogYmUgdXNlZCBieSBhbnl0aGluZyB0aGF0J3MgbW9kYWwgd2l0aCBhIGJhY2tkcm9wLlxyXG4gKiBAcGFyYW0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTW9kYWwoeyBvcGVuLCBvbkNsb3NlIH0pIHtcclxuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcclxuICAgIGNvbnN0IFttb2RhbERlc2NyaWJlZEJ5Qm9keSwgc2V0TW9kYWxEZXNjcmliZWRCeUJvZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlSGlkZVNjcm9sbChvcGVuKTtcclxuICAgIGNvbnN0IHsgaWQ6IG1vZGFsSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1vZGFsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1vZGFsUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLVwiIH0pO1xyXG4gICAgY29uc3QgeyBpZDogYm9keUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VCb2R5SWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZUJvZHlSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtYm9keS1cIiB9KTtcclxuICAgIGNvbnN0IHsgaWQ6IHRpdGxlSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRpdGxlSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVRpdGxlUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLXRpdGxlLVwiIH0pO1xyXG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZU1vZGFsUmVmRWxlbWVudCwgZ2V0RWxlbWVudDogZ2V0TW9kYWxFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcclxuICAgIGNvbnN0IHsgdXNlU29mdERpc21pc3NQcm9wcyB9ID0gdXNlU29mdERpc21pc3MoeyBvbkNsb3NlOiBzdGFibGVPbkNsb3NlLCBnZXRFbGVtZW50czogZ2V0TW9kYWxFbGVtZW50IH0pO1xyXG4gICAgY29uc3QgdXNlTW9kYWxCYWNrZHJvcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3AoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTW9kYWxCYWNrZHJvcFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyVXA6ICgpID0+IHN0YWJsZU9uQ2xvc2UoXCJiYWNrZHJvcFwiKSB9LCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlTW9kYWxQcm9wcyA9IGZ1bmN0aW9uICh7IFwiYXJpYS1tb2RhbFwiOiBhcmlhTW9kYWwsIHJvbGUsIC4uLnAwIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUZvY3VzVHJhcFByb3BzIH0gPSB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlOiBvcGVuIH0pO1xyXG4gICAgICAgIGNvbnN0IHAxID0gdXNlVGl0bGVSZWZlcmVuY2luZ0lkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikocDApO1xyXG4gICAgICAgIGNvbnN0IHAyID0gdXNlTW9kYWxJZFByb3BzKHAxKTtcclxuICAgICAgICBjb25zdCBwRmluYWwgPSB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzKFwiYXJpYS1kZXNjcmliZWRieVwiKShwMik7XHJcbiAgICAgICAgcmV0dXJuIHVzZUZvY3VzVHJhcFByb3BzKHVzZVNvZnREaXNtaXNzUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh1c2VNb2RhbFJlZkVsZW1lbnQoeyByb2xlOiBcImRpYWxvZ1wiIH0pLCBtb2RhbERlc2NyaWJlZEJ5Qm9keSA/IHBGaW5hbCA6IHAyKSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVzZU1vZGFsVGl0bGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbFRpdGxlKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZU1vZGFsVGl0bGVQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVGl0bGVJZFByb3BzKHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsVGl0bGVQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlTW9kYWxCb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxCb2R5KHsgZGVzY3JpcHRpdmUgfSkge1xyXG4gICAgICAgIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5KGRlc2NyaXB0aXZlKTtcclxuICAgICAgICBjb25zdCB1c2VNb2RhbEJvZHlQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlQm9keUlkUHJvcHMocHJvcHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxCb2R5UHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTW9kYWxQcm9wcyxcclxuICAgICAgICB1c2VNb2RhbFRpdGxlLFxyXG4gICAgICAgIHVzZU1vZGFsQm9keSxcclxuICAgICAgICB1c2VNb2RhbEJhY2tkcm9wXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBBbGxvd3MgZm9yIGhpZGluZyB0aGUgc2Nyb2xsIGJhciBvZiB0aGUgcm9vdCBIVE1MIGVsZW1lbnRcclxuICogd2l0aG91dCBzaGlmdGluZyB0aGUgbGF5b3V0IG9mIHRoZSBwYWdlIG1vcmUgdGhhbiBhZGRpbmcgYSBmb3cgcGl4ZWxzXHJcbiAqIG9mIHBhZGRpbmcgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBuZWNlc3NhcnkuXHJcbiAqIEBwYXJhbSBoaWRlU2Nyb2xsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSGlkZVNjcm9sbChoaWRlU2Nyb2xsKSB7XHJcbiAgICBjb25zdCBbZ2V0U2Nyb2xsYmFyV2lkdGgsIHNldFNjcm9sbGJhcldpZHRoXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtnZXRTY3JvbGxiYXJIZWlnaHQsIHNldFNjcm9sbGJhckhlaWdodF0gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gc2Nyb2xsaW5nIGlzIHJlc3VtZWQsIHdlJ2xsIG5lZWQgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBpbmZvcm1hdGlvbiBhcm91bmRcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgLy8gTWVhc3VyZSB0aGUgd2lkdGggb2YgdGhlIHBhZ2UgKG1pbnVzIHRoZSBzY3JvbGxiYXIpXHJcbiAgICAgICAgICAgIGxldCB3aWR0aFdpdGhTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHRXaXRoU2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgLy8gQXBwbHkgYSBjbGFzcyB0aGF0IGhpZGVzIHRoZSBzY3JvbGxiYXIuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZG9jdW1lbnQtc2Nyb2xsLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgLy8gSW4gY2FzZSBtdWx0aXBsZSB0aGluZ3MgYXJlIGxvY2tpbmcgc2Nyb2xsLCBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGFyZSBkb2luZyB0aGF0XHJcbiAgICAgICAgICAgIC8vIChqdXN0IGFkZCAxIG9uIGVuYWJsZSwgc3VidHJhY3QgMSBvbiBkaXNhYmxlKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9ICgrKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdIHx8IFwiMFwiKSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIC8vIE1lYXN1cmUgdGhlIG5ldyB3aWR0aCB3aXRob3V0IGEgc2Nyb2xsYmFyIFxyXG4gICAgICAgICAgICAvLyBzbyB3ZSBjYW4gdGFrZSB0aGUgZGlmZmVyZW5jZSBhcyB0aGUgc2Nyb2xsYmFyIHdpZHRoLlxyXG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRob3V0U2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0V2l0aG91dFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxiYXJXaWR0aCA9ICh3aWR0aFdpdGhvdXRTY3JvbGxCYXIgLSB3aWR0aFdpdGhTY3JvbGxCYXIpO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsYmFySGVpZ2h0ID0gKGhlaWdodFdpdGhvdXRTY3JvbGxCYXIgLSBoZWlnaHRXaXRoU2Nyb2xsQmFyKTtcclxuICAgICAgICAgICAgLy8gRmFpbHNhZmUgLS0gaWYgdGhpcyBtZWFzdXJpbmcgdHJpY2sgZG9lcyBzb21ldGhpbmcgdW5leHBlY3RlZCwganVzdCBpZ25vcmUgaXRcclxuICAgICAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoID4gODApXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxiYXJIZWlnaHQgPiA4MClcclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhckhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIC8vIE1ha2Ugb3VyIG1lYXN1cmVtZW50cyBhdmFpbGFibGUgYXMgQ1NTIHByb3BlcnRpZXMgZm9yIGdlbmVyYWwgdXNlXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxiYXItd2lkdGhcIiwgYCR7c2Nyb2xsYmFyV2lkdGh9cHhgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbGJhci1oZWlnaHRcIiwgYCR7c2Nyb2xsYmFySGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxzdG9wLXRvcFwiLCBgJHtvcmlnaW5hbFNjcm9sbFRvcH1weGApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsc3RvcC1sZWZ0XCIsIGAke29yaWdpbmFsU2Nyb2xsTGVmdH1weGApO1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxiYXJXaWR0aChzY3JvbGxiYXJXaWR0aCk7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGJhckhlaWdodChzY3JvbGxiYXJIZWlnaHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVW5kbyBhbGwgdGhlIHRoaW5ncyB3ZSBqdXN0IGRpZFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgLSAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2Ugd2VyZSB0aGUgbGFzdCBzY3JvbGwtbG9ja2luZyB0aGluZyB0byBzdG9wLCB0aGVuIHJlbW92ZSB0aGUgY2xhc3MgdGhhdCBzdG9wcyBzY3JvbGxpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWhpZGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxzbywgcmVzdG9yZSB0aGUgb3JpZ2luYWwgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG8gdGhpcyBieSBmb3JjaW5nIHRoZSBzY3JvbGwgYmVoYXZpb3IgdG8gbm90IGJlIHNtb290aFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIChpdCdzIGluc3RhbnQgaWYgbm90aGluZyBpcyBzZXQgdG8gc21vb3RoLCBodHRwczovL3d3dy53My5vcmcvVFIvY3Nzb20tdmlldy8jc2Nyb2xsaW5nKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcsIHRoZW4gcmVzdG9yaW5nIHRoZSBvcmlnaW5hbCBzY3JvbGwgYmVoYXZpb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKHdoaWNoIHdhcyBwcm9iYWJseSBhbHJlYWR5IGF1dG8gYW55d2F5LCBidXQganVzdCB0byBiZSBzYWZlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsQmVoYXZpb3IgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvKHsgdG9wOiBvcmlnaW5hbFNjcm9sbFRvcCwgbGVmdDogb3JpZ2luYWxTY3JvbGxMZWZ0LCBiZWhhdmlvcjogXCJhdXRvXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gb3JpZ2luYWxTY3JvbGxCZWhhdmlvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaGlkZVNjcm9sbF0pO1xyXG4gICAgcmV0dXJuIHsgZ2V0U2Nyb2xsYmFyV2lkdGgsIGdldFNjcm9sbGJhckhlaWdodCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tb2RhbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiLi91c2UtbW9kYWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFEaWFsb2coeyBvcGVuLCBvbkNsb3NlIH0pIHtcclxuICAgIC8vIFRPRE86IERpZmZlcmVuY2VzIGJldHdlZW4gZGlhbG9nIGFuZCBtb2RhbCBnbyBoZXJlLCBwcmVzdW1hYmx5LlxyXG4gICAgLy8gTm9uLW1vZGFsIGRpYWxvZ3MgbmVlZCB0byBiZSBhYmxlIHRvIGJlIHJlcG9zaXRpb25lZCwgZXRjLlxyXG4gICAgY29uc3QgeyB1c2VNb2RhbEJhY2tkcm9wLCB1c2VNb2RhbEJvZHksIHVzZU1vZGFsUHJvcHMsIHVzZU1vZGFsVGl0bGUgfSA9IHVzZU1vZGFsKHsgb3Blbiwgb25DbG9zZSB9KTtcclxuICAgIGNvbnN0IHVzZURpYWxvZ0JhY2tkcm9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxCYWNrZHJvcFByb3BzIH0gPSB1c2VNb2RhbEJhY2tkcm9wKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nQmFja2Ryb3BQcm9wczogdXNlTW9kYWxCYWNrZHJvcFByb3BzIH07XHJcbiAgICB9LCBbdXNlTW9kYWxCYWNrZHJvcF0pO1xyXG4gICAgY29uc3QgdXNlRGlhbG9nQm9keSA9IHVzZUNhbGxiYWNrKCh7IGRlc2NyaXB0aXZlIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZU1vZGFsQm9keVByb3BzIH0gPSB1c2VNb2RhbEJvZHkoeyBkZXNjcmlwdGl2ZSB9KTtcclxuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dCb2R5UHJvcHM6IHVzZU1vZGFsQm9keVByb3BzIH07XHJcbiAgICB9LCBbdXNlTW9kYWxCYWNrZHJvcF0pO1xyXG4gICAgY29uc3QgdXNlRGlhbG9nUHJvcHMgPSB1c2VNb2RhbFByb3BzO1xyXG4gICAgY29uc3QgdXNlRGlhbG9nVGl0bGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbFRpdGxlUHJvcHMgfSA9IHVzZU1vZGFsVGl0bGUoKTtcclxuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dUaXRsZVByb3BzOiB1c2VNb2RhbFRpdGxlUHJvcHMgfTtcclxuICAgIH0sIFt1c2VNb2RhbFRpdGxlXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZURpYWxvZ1Byb3BzLFxyXG4gICAgICAgIHVzZURpYWxvZ1RpdGxlLFxyXG4gICAgICAgIHVzZURpYWxvZ0JvZHksXHJcbiAgICAgICAgdXNlRGlhbG9nQmFja2Ryb3BcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRpYWxvZy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VIYXNGb2N1cywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZUdlbmVyaWNMYWJlbCB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hNdWx0aSh7IC4uLmFyZ3MgfSkge1xyXG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHt9KTtcclxuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIGN1cnJlbnRUeXBlYWhlYWQsIGZvY3VzQ3VycmVudCwgdGFiYmFibGVJbmRleCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRGb2N1c2VkSW5uZXIgfSk7XHJcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbElucHV0KCk7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgIGNvbnN0IFtzaGlmdEhlbGQsIHNldFNoaWZ0SGVsZCwgZ2V0U2hpZnRIZWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHR5cGVhaGVhZEluUHJvZ3Jlc3MgPSAoISFjdXJyZW50VHlwZWFoZWFkKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2ldLnNldFR5cGVhaGVhZEluUHJvZ3Jlc3ModHlwZWFoZWFkSW5Qcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIGNoaWxkQ291bnRdKTtcclxuICAgIGNvbnN0IHVzZUxpc3Rib3hNdWx0aUl0ZW0gPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gaW5mby5zZWxlY3RlZDtcclxuICAgICAgICBjb25zdCBbdHlwZWFoZWFkSW5Qcm9ncmVzcywgc2V0VHlwZWFoZWFkSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWQgPSB1c2VTdGFibGVHZXR0ZXIoc2VsZWN0ZWQpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcclxuICAgICAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKGluZm8ub25TZWxlY3QgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyAuLi5pbmZvLCBzZXRUeXBlYWhlYWRJblByb2dyZXNzIH0pO1xyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGdldFNoaWZ0SGVsZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkOiB0cnVlIH0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGFiYmFibGVdKTtcclxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtUHJvcHMsIHRhYmJhYmxlIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpSXRlbVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKGluZm8uZGlzYWJsZWQgPyBudWxsIDogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyAuLi5lLCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkOiAhZ2V0U2VsZWN0ZWQoKSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9LCB7IHNwYWNlOiB0eXBlYWhlYWRJblByb2dyZXNzID8gXCJleGNsdWRlXCIgOiB1bmRlZmluZWQgfSkoe30pO1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJvcHRpb25cIjtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNldHNpemVcIl0gPSAoY2hpbGRDb3VudCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAodGFiYmFibGUgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChpbmZvLmRpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHByb3BzKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCBjaGlsZENvdW50LCB0eXBlYWhlYWRJblByb2dyZXNzXSk7XHJcbiAgICBjb25zdCB1c2VMaXN0Ym94TXVsdGlMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUxhYmVsKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUxhYmVsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUxhYmVsUHJvcHMgfTtcclxuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xyXG4gICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpSXRlbSwgdXNlTGlzdGJveE11bHRpUHJvcHMsIHVzZUxpc3Rib3hNdWx0aUxhYmVsLCB0YWJiYWJsZUluZGV4LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBmb2N1czogZm9jdXNDdXJyZW50LCBtYW5hZ2VkQ2hpbGRyZW4gfTtcclxuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibGlzdGJveFwiO1xyXG4gICAgICAgIHByb3BzW1wiYXJpYS1tdWx0aXNlbGVjdGFibGVcIl0gPSBcInRydWVcIjtcclxuICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VIYXNGb2N1c1Byb3BzKHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25Gb2N1c091dCB9LCBwcm9wcykpKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkgeyBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKVxyXG4gICAgICAgIHNldFNoaWZ0SGVsZCh0cnVlKTsgfVxyXG4gICAgZnVuY3Rpb24gb25LZXlVcChlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXHJcbiAgICAgICAgc2V0U2hpZnRIZWxkKGZhbHNlKTsgfVxyXG4gICAgZnVuY3Rpb24gb25Gb2N1c091dChlKSB7IHNldFNoaWZ0SGVsZChmYWxzZSk7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdGJveC1tdWx0aS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50LCB1c2VDaGlsZEZsYWcsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlR2VuZXJpY0xhYmVsIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTGlzdGJveFNpbmdsZSh7IHNlbGVjdGVkSW5kZXgsIG9uU2VsZWN0LCBzZWxlY3Rpb25Nb2RlLCAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IFthbnlJdGVtc0ZvY3VzZWQsIHNldEFueUl0ZW1zRm9jdXNlZCwgZ2V0QW55SXRlbXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBnZXRJbnB1dEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtbGlzdGJveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1saXN0Ym94LVwiIH0pO1xyXG4gICAgY29uc3QgeyB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCBuYXZpZ2F0ZVRvSW5kZXgsIG1hbmFnZWRDaGlsZHJlbiwgdGFiYmFibGVJbmRleCwgZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IC4uLmFyZ3MsIHNob3VsZEZvY3VzT25DaGFuZ2U6IGdldEFueUl0ZW1zRm9jdXNlZCB9KTtcclxuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcclxuICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2sob25TZWxlY3QgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgLy8gVHJhY2sgd2hldGhlciB0aGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHRoZSBsaXN0IGJveCBwYXJlbnQgZWxlbWVudC5cclxuICAgIC8vIFdoZW4gaXQncyBub3QsIHdlIHJlc2V0IHRoZSB0YWJiYWJsZSBpbmRleCBiYWNrIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudC5cclxuICAgIGNvbnN0IHsgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHsgb25BY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoYWN0aXZlRWxlbWVudCkgPT4gc2V0QW55SXRlbXNGb2N1c2VkKCEhKGdldElucHV0RWxlbWVudCgpPy5jb250YWlucyhhY3RpdmVFbGVtZW50KSkpLCBbXSkgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghYW55SXRlbXNGb2N1c2VkKVxyXG4gICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9LCBbYW55SXRlbXNGb2N1c2VkLCBzZWxlY3RlZEluZGV4LCBuYXZpZ2F0ZVRvSW5kZXhdKTtcclxuICAgIHVzZUNoaWxkRmxhZyh7XHJcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIHNldENoaWxkRmxhZzogKGksIHNlbGVjdGVkKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSxcclxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiAobWFuYWdlZENoaWxkcmVuW2ldPy5nZXRTZWxlY3RlZCgpID8/IG51bGwpXHJcbiAgICB9KTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfSwgW3NlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUl0ZW0gPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWQsIC4uLmluZm8gfSk7XHJcbiAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5mby5pbmRleDtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlID09IFwiZm9jdXNcIikge1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3RhYmJhYmxlLCBzZWxlY3Rpb25Nb2RlLCBpbmRleF0pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtUHJvcHMsIHRhYmJhYmxlLCBzZWxlY3RlZCwgZ2V0U2VsZWN0ZWQgfTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKGluZm8uZGlzYWJsZWQgPyBudWxsIDogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkSW5kZXg6IGluZGV4IH0gfSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCkoe30pO1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJvcHRpb25cIjtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNldHNpemVcIl0gPSAoY2hpbGRDb3VudCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAoc2VsZWN0ZWQgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChpbmZvLmRpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCBzZWxlY3Rpb25Nb2RlLCBjaGlsZENvdW50XSk7XHJcbiAgICBjb25zdCB1c2VMaXN0Ym94U2luZ2xlTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlTGFiZWwoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xyXG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveFNpbmdsZUxhYmVsUHJvcHMgfTtcclxuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xyXG4gICAgcmV0dXJuIHsgdXNlTGlzdGJveFNpbmdsZUl0ZW0sIHVzZUxpc3Rib3hTaW5nbGVQcm9wcywgdXNlTGlzdGJveFNpbmdsZUxhYmVsLCB0YWJiYWJsZUluZGV4LCBmb2N1czogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBtYW5hZ2VkQ2hpbGRyZW4gfTtcclxuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcclxuICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcykpKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdGJveC1zaW5nbGUuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlLCB1c2VUaW1lb3V0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTb2Z0RGlzbWlzcyB9IGZyb20gXCIuL3VzZS1tb2RhbFwiO1xyXG4vKipcclxuICogQSBtZW51IGlzIGEgcG9wdXAgY29udHJvbCB0aGF0IGNvbnRhaW5zIGEgbGlzdCBvZiBtZW51IGl0ZW1zLCBhbmQgdGhhdCdzIGl0LlxyXG4gKiBJdCBoYXMgdmVyeSB3ZWxsLWRlZmluZWQgbG9naWMgZm9yIG1hbmFnaW5nIHRob3NlIGl0ZW1zIGFzIHRoZSBtZW51J3Mgc3RhdGUgY2hhbmdlcy5cclxuICpcclxuICogQSBNZW51QmFzZSBpcyBqdXN0IHRoZSBcInBvcHVwXCIgcGFydCB3aXRob3V0IHRoZSBcImxpc3Qgb2YgbWVudSBpdGVtc1wiIHBhcnQuIEl0IGNhblxyXG4gKiAocmVhbGx5LCBtdXN0KSBoYXZlIGludGVyYWN0aXZlIGNvbnRyb2xzLCBidXQgdGhlc2UgY29udHJvbHMgYXJlIGFsbG93ZWQgdG8gYmUgbW9yZVxyXG4gKiBmcmVlLWZvcm0uIFRoaXMgbWVhbnMgdGhhdCwgbGlrZSBhIGRpYWxvZywgeW91IG11c3QgdGVsbCB0aGlzIGhvb2tcclxuICogd2hlcmUgd2l0aGluIHRoZSBwb3B1cCB0byBzZW5kIGZvY3VzIHdoZW4gb3BlbmVkIChmb3IgYSBtZW51IGl0J3MganVzdCB0aGUgZmlyc3RcclxuICogbWVudSBpdGVtLCBidXQgd2l0aCBjdXN0b20gY29udGVudCB5b3UnbGwgbmVlZCB0byBwcm92aWRlIHRoaXMpLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbnVCYXNlKHsgc2VuZEZvY3VzV2l0aGluTWVudSwgLi4uYXJncyB9KSB7XHJcbiAgICBjb25zdCBnZXRTZW5kRm9jdXNXaXRoaW5NZW51ID0gdXNlU3RhYmxlR2V0dGVyKHNlbmRGb2N1c1dpdGhpbk1lbnUpO1xyXG4gICAgY29uc3QgW2ZvY3VzVHJhcEFjdGl2ZSwgc2V0Rm9jdXNUcmFwQWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgbGV0IG9uQ2xvc2UgPSBhcmdzLm9uQ2xvc2U7XHJcbiAgICBsZXQgb25PcGVuID0gYXJncy5vbk9wZW47XHJcbiAgICBsZXQgbWVudWJhciA9IGFyZ3MubWVudWJhcjtcclxuICAgIGxldCBvcGVuID0gKG1lbnViYXIgPyB0cnVlIDogYXJncy5vcGVuKTtcclxuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGNvbnN0IGdldE9wZW4gPSB1c2VTdGFibGVHZXR0ZXIob3Blbik7XHJcbiAgICAvLyBUT0RPOiBJdCdzIGF3a3dhcmQgdGhhdCB0aGUgYnV0dG9uIGZvY3VzIHByb3BzIGFyZSBvdXQgaGVyZSB3aGVyZSB3ZSBkb24ndCBoYXZlIGl0cyB0eXBlLFxyXG4gICAgLy8gYnV0IGZvY3VzIG1hbmFnZW1lbnQgaXMgc3VwZXIgc2Vuc2l0aXZlLCBhbmQgZXZlbiB3YWl0aW5nIGZvciBhIHVzZUxheW91dEVmZmVjdCB0byBzeW5jIHN0YXRlIGhlcmVcclxuICAgIC8vIHdvdWxkIGJlIHRvbyBsYXRlLCBzbyBpdCB3b3VsZCBsb29rIGxpa2UgdGhlcmUncyBhIG1vbWVudCBiZXR3ZWVuIG1lbnUgZm9jdXMgbG9zdCBhbmQgYnV0dG9uIGZvY3VzIGdhaW5lZFxyXG4gICAgLy8gd2hlcmUgbm90aGluZyBpcyBmb2N1c2VkLiBcclxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzLCBnZXRMYXN0Rm9jdXNlZElubmVyOiBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHsgLypvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkOiBvbk1lbnVPckJ1dHRvbkxvc3RMYXN0Rm9jdXMqL30pO1xyXG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzOiB1c2VCdXR0b25IYXNGb2N1c1Byb3BzLCBnZXRMYXN0Rm9jdXNlZElubmVyOiBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHsgLypvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkOiBvbk1lbnVPckJ1dHRvbkxvc3RMYXN0Rm9jdXMqL30pO1xyXG4gICAgY29uc3QgW29wZW5lckVsZW1lbnQsIHNldE9wZW5lckVsZW1lbnQsIGdldE9wZW5lckVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1lbnVCYXNlSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1lbnVCYXNlSWRSZWZlcmVuY2luZ1Byb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1lbnUtXCIgfSk7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldEJ1dHRvbkVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRPcGVuZXJFbGVtZW50IH0pO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRNZW51RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICBjb25zdCB7IHVzZVNvZnREaXNtaXNzUHJvcHMgfSA9IHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZTogc3RhYmxlT25DbG9zZSwgZ2V0RWxlbWVudHM6ICgpID0+IChbZ2V0QnV0dG9uRWxlbWVudCgpLCBnZXRNZW51RWxlbWVudCgpXSkgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEZvY3VzVHJhcEFjdGl2ZShvcGVuKTtcclxuICAgIH0sIFtvcGVuXSk7XHJcbiAgICBjb25zdCB1c2VNZW51QmFzZVByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIgJiYgZ2V0T3BlbigpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFibGVPbkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXNlU29mdERpc21pc3NQcm9wcyh1c2VNZW51QmFzZUhhc0ZvY3VzUHJvcHModXNlTWVudUJhc2VSZWZFbGVtZW50UHJvcHModXNlTWVudUJhc2VJZFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgKHByb3BzKSkpKSkpO1xyXG4gICAgfSwgW3VzZVNvZnREaXNtaXNzUHJvcHMsIHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcywgdXNlTWVudUJhc2VSZWZFbGVtZW50UHJvcHMsIHVzZU1lbnVCYXNlSWRQcm9wc10pO1xyXG4gICAgY29uc3QgdXNlTWVudUJhc2VCdXR0b25Qcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VCdXR0b25SZWZFbGVtZW50UHJvcHModXNlQnV0dG9uSGFzRm9jdXNQcm9wcyh1c2VNZW51QmFzZUlkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtY29udHJvbHNcIikocHJvcHMpKSk7XHJcbiAgICB9LCBbdXNlQnV0dG9uSGFzRm9jdXNQcm9wcywgdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzLCB1c2VNZW51QmFzZUlkUmVmZXJlbmNpbmdQcm9wc10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZW5kRm9jdXNXaXRoaW5NZW51ID0gZ2V0U2VuZEZvY3VzV2l0aGluTWVudSgpO1xyXG4gICAgICAgIGlmIChmb2N1c1RyYXBBY3RpdmUpIHtcclxuICAgICAgICAgICAgc2VuZEZvY3VzV2l0aGluTWVudT8uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvY3VzVHJhcEFjdGl2ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lcigpKVxyXG4gICAgICAgICAgICAgICAgZ2V0T3BlbmVyRWxlbWVudCgpPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBudWxsLCBzbyB3ZSd2ZSBvbmx5IGp1c3QgbW91bnRlZCBhbmQgc2hvdWxkbid0IGZvY3VzIG91cnNlbHZlcy5cclxuICAgICAgICB9XHJcbiAgICB9LCBbZm9jdXNUcmFwQWN0aXZlXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZU1lbnVTZW50aW5lbDogdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZVNlbnRpbmVsUHJvcHM6IHVzZU1lbnVTZW50aW5lbFByb3BzLCAuLi5yZXN0IH0gPSB1c2VGb2N1c1NlbnRpbmVsKHsgb3Blbiwgb25DbG9zZTogKG9uQ2xvc2UgPz8gKCgpID0+IHsgfSkpLCBzZW5kRm9jdXNXaXRoaW5NZW51IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyB1c2VNZW51U2VudGluZWxQcm9wcywgLi4ucmVzdCB9O1xyXG4gICAgICAgIH0sIFtvcGVuLCBvbkNsb3NlLCBzZW5kRm9jdXNXaXRoaW5NZW51XSksXHJcbiAgICAgICAgZm9jdXNUcmFwQWN0aXZlLFxyXG4gICAgICAgIHVzZU1lbnVCYXNlUHJvcHMsXHJcbiAgICAgICAgdXNlTWVudUJhc2VCdXR0b25Qcm9wcyxcclxuICAgICAgICBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIsXHJcbiAgICAgICAgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgb25PcGVuLFxyXG4gICAgICAgIG9uQ2xvc2VcclxuICAgIH07XHJcbn1cclxuLy8gQSBmb2N1cyBzZW50aW5hbCBpcyBhIGhpZGRlbiBidXQgZm9jdXNhYmxlIGVsZW1lbnQgdGhhdCBjb21lcyBhdCB0aGUgc3RhcnQgb3IgZW5kIFxyXG4vLyBvZiB0aGUgb3V0LW9mLXBsYWNlLWZvY3VzYWJsZSBjb21wb25lbnQgdGhhdCwgd2hlbiBhY3RpdmF0ZWQgb3IgZm9jdXNlZCBvdmVyLCBjbG9zZXMgdGhlIGNvbXBvbmVudFxyXG4vLyAoaWYgZm9jdXNlZCB3aXRoaW4gMTAwbXMgb2YgdGhlIG9wZW4gcHJvcCBjaGFuZ2luZywgaW5zdGVhZCBvZlxyXG4vLyBjbG9zaW5nLCBmb2N1c2luZyB0aGUgc2VudGluZWwgaW1tZWRpYXRlbHkgYXNrcyBpdCB0byBmb2N1cyBpdHNlbGYpLlxyXG4vLyBUaGlzIGV4aXN0cyBmb3IgdGhpbmdzIGxpa2UgbWVudXMgd2hpY2ggY2FuIGhhdmUgZm9jdXMgYnV0IGFsc28gbmVlZCBhIHdheSB0byByZXR1cm5cclxuLy8gdG8gd2hhdGV2ZXIgb3V0LW9mLXBsYWNlIHBhcmVudCB0aGV5IGNhbWUgZnJvbSB3aGVuIG5hdHVyYWxseSB0YWJiZWQgb3V0IG9mIChhcyBvcHBvc2VkXHJcbi8vIHRvIGRpYWxvZ3Mgd2hpY2ggbG9vcCBiYWNrIGFyb3VuZCB3aGVuIHRhYmJlZCBvdXQgb2YpLiBXaGlsZSBtb3VzZSB1c2VycyBjYW4gY2xpY2sgb3V0IG9mIGEgbWVudVxyXG4vLyBhbmQga2V5Ym9hcmQgdXNlcnMgY2FuIGVzY2FwZSB0byBjbG9zZSBhIG1lbnUsIHNjcmVlbiByZWFkZXJzIGFuZCBvdGhlciBpbnB1dCBtZXRob2RzIFxyXG4vLyB0aGF0IGRvbid0IHVzZSB0aG9zZSB0d28gd291bGQgYmVjb21lIHN0dWNrLlxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNTZW50aW5lbCh7IG9wZW4sIG9uQ2xvc2UsIHNlbmRGb2N1c1dpdGhpbk1lbnUgfSkge1xyXG4gICAgY29uc3QgZ2V0U2VuZEZvY3VzV2l0aGluTWVudSA9IHVzZVN0YWJsZUdldHRlcihzZW5kRm9jdXNXaXRoaW5NZW51KTtcclxuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcclxuICAgIGNvbnN0IFtmaXJzdFNlbnRpbmVsSXNBY3RpdmUsIHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VUaW1lb3V0KHsgY2FsbGJhY2s6ICgpID0+IHsgc2V0Rmlyc3RTZW50aW5lbElzQWN0aXZlKG9wZW4pOyB9LCB0aW1lb3V0OiAxMDAsIHRyaWdnZXJJbmRleDogYCR7b3Blbn0tJHtmaXJzdFNlbnRpbmVsSXNBY3RpdmV9YCB9KTtcclxuICAgIGNvbnN0IG9uRm9jdXMgPSBmaXJzdFNlbnRpbmVsSXNBY3RpdmUgPyAoKCkgPT4gc3RhYmxlT25DbG9zZSgpKSA6ICgoKSA9PiBnZXRTZW5kRm9jdXNXaXRoaW5NZW51KCk/LigpKTtcclxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiBzdGFibGVPbkNsb3NlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVNlbnRpbmVsUHJvcHM6IGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25Gb2N1cywgb25DbGljayB9LCBwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTWVudSh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBub1R5cGVhaGVhZCwgbm9XcmFwLCB0eXBlYWhlYWRUaW1lb3V0LCAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQ6IGZvY3VzTWVudSwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgbm9UeXBlYWhlYWQsIG5vV3JhcCwgdHlwZWFoZWFkVGltZW91dCwgc2hvdWxkRm9jdXNPbkNoYW5nZTogdXNlQ2FsbGJhY2soKCkgPT4gZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyKCkgfHwgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyKCksIFtdKSB9KTtcclxuICAgIGNvbnN0IHsgdXNlTWVudVNlbnRpbmVsLCBmb2N1c1RyYXBBY3RpdmUsIHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMsIHVzZU1lbnVCYXNlUHJvcHMsIGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lciwgZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyLCBvcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZU1lbnVCYXNlKHsgLi4uYXJncywgc2VuZEZvY3VzV2l0aGluTWVudTogZm9jdXNNZW51ID8/ICgoKSA9PiB7IH0pIH0pO1xyXG4gICAgY29uc3QgdXNlTWVudUJ1dHRvbiA9IHVzZUNhbGxiYWNrKCh7fSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZU1lbnVCdXR0b25Qcm9wczogZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMocCk7XHJcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtaGFzcG9wdXBcIl0gPSBcIm1lbnVcIjtcclxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1leHBhbmRlZFwiXSA9IG9wZW4gPyBcInRydWVcIiA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbb3Blbiwgb25DbG9zZSwgb25PcGVuLCB1c2VNZW51QmFzZUJ1dHRvblByb3BzXSk7XHJcbiAgICAvKmNvbnN0IHVzZU1lbnVTdWJtZW51SXRlbSA9IHVzZUNhbGxiYWNrKChhcmdzOiBVc2VNZW51U3VibWVudUl0ZW1QYXJhbWV0ZXJzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNZW51UHJvcHMsIHVzZU1lbnVCdXR0b24gfSA9IHVzZUFyaWFNZW51PEhUTUxFbGVtZW50LCBDaGlsZEVsZW1lbnQsIEk+KGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTWVudUJ1dHRvblByb3BzIH0gPSB1c2VNZW51QnV0dG9uPEU+KHsgdGFnOiBcImxpXCIgYXMgYW55IH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudDxhbnk+KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRPcGVuZXJFbGVtZW50IGFzIE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPGFueT4gfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXHJcbiAgICAgICAgICAgIHVzZU1lbnVQcm9wcyxcclxuICAgICAgICAgICAgdXNlTWVudVN1Ym1lbnVJdGVtUHJvcHM6IGZ1bmN0aW9uIDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHsgLi4ucHJvcHMgfTogUCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1cIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVudUJ1dHRvblByb3BzKHVzZU1lbnVJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHByb3BzKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pOyovXHJcbiAgICBjb25zdCB1c2VNZW51SXRlbSA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoYXJncyk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTWVudUl0ZW1Qcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1cIjtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyhwcm9wcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VNZW51SXRlbVByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB1c2VNZW51UHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudVwiO1xyXG4gICAgICAgIHJldHVybiB1c2VNZW51QmFzZVByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTWVudVByb3BzLFxyXG4gICAgICAgIHVzZU1lbnVCdXR0b24sXHJcbiAgICAgICAgdXNlTWVudUl0ZW0sXHJcbiAgICAgICAgdXNlTWVudVNlbnRpbmVsLFxyXG4gICAgICAgIC8vdXNlTWVudVN1Ym1lbnVJdGVtLFxyXG4gICAgICAgIGZvY3VzTWVudSxcclxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxyXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZW51LmpzLm1hcCIsImltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyLCB1c2VIYXNGb2N1cywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTG9naWNhbERpcmVjdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhVGFicyh7IHNlbGVjdGlvbk1vZGUsIHNlbGVjdGVkSW5kZXgsIG9uU2VsZWN0LCBvcmllbnRhdGlvbjogbG9naWNhbE9yaWVudGF0aW9uLCAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHMsIGdldEZvY3VzZWRJbm5lcjogZ2V0VGFiTGlzdEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoe30pO1xyXG4gICAgY29uc3QgW3BoeXNpY2FsT3JpZW50YXRpb24sIHNldFBoeXNpY2FsT3JpZW50YXRpb25dID0gdXNlU3RhdGUoXCJob3Jpem9udGFsXCIpO1xyXG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiwgdXNlTG9naWNhbERpcmVjdGlvblByb3BzIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlOiB1c2VDYWxsYmFjaygobG9naWNhbERpcmVjdGlvbkluZm8pID0+IHNldFBoeXNpY2FsT3JpZW50YXRpb24oY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbihsb2dpY2FsT3JpZW50YXRpb24sIGxvZ2ljYWxEaXJlY3Rpb25JbmZvKSksIFtdKSB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGlzdElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGlzdElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1saXN0LVwiIH0pO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJMYWJlbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGFiZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItbGFiZWwtXCIgfSk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFRhYnMsIG5hdmlnYXRlVG9JbmRleCwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdGFiYmFibGVJbmRleCwgaW52YWxpZFR5cGVhaGVhZCwgY3VycmVudFR5cGVhaGVhZCwgZm9jdXNDdXJyZW50IH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IC4uLmFyZ3MsIHNob3VsZEZvY3VzT25DaGFuZ2U6IGdldFRhYkxpc3RGb2N1c2VkSW5uZXIsIGtleU5hdmlnYXRpb246IGxvZ2ljYWxPcmllbnRhdGlvbiB9KTtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUGFuZWxzLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRUYWJQYW5lbCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XHJcbiAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uU2VsZWN0KTtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkVGFicy5sZW5ndGg7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRUYWJzKVxyXG4gICAgICAgICAgICBjaGlsZC5zZXRTZWxlY3Rpb25Nb2RlKHNlbGVjdGlvbk1vZGUpO1xyXG4gICAgfSwgW3NlbGVjdGlvbk1vZGVdKTtcclxuICAgIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZFRhYnNbaV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSwgZ2V0Q2hpbGRGbGFnOiBpID0+IChtYW5hZ2VkVGFic1tpXT8uZ2V0U2VsZWN0ZWQoKSkgfSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoeyBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUGFuZWxzLCBzZXRDaGlsZEZsYWc6IChpLCB2aXNpYmxlKSA9PiBtYW5hZ2VkUGFuZWxzW2ldPy5zZXRWaXNpYmxlKHZpc2libGUpLCBnZXRDaGlsZEZsYWc6IGkgPT4gKG1hbmFnZWRQYW5lbHNbaV0/LmdldFZpc2libGUoKSkgfSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKHByZXYpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHNlbGVjdGlvbk1vZGUgPT0gXCJhY3RpdmF0ZVwiKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gd2FpdCBhIG1vbWVudCBzbyB0aGF0IHRoZSB0YWIgcGFuZWwgd2Ugd2FudCB0byBmb2N1c1xyXG4gICAgICAgICAgICAvLyBpcyBhY3R1YWxseSB2aXNpYmxlIChpLmUuIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGNoaWxkIHRvIHJlLXJlbmRlciBpdHNlbGYpLlxyXG4gICAgICAgICAgICAvLyBXZSBjb3VsZCwgYWx0ZXJuYXRpdmVseSwgc2lnbmFsIHRvIHRoZSBjaGlsZCB0aGF0IGl0IHNob3VsZCBmb2N1cyBpdHNlbGZcclxuICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSBpdCByZW5kZXJzIGl0c2VsZiBhcyB2aXNpYmxlLFxyXG4gICAgICAgICAgICAvLyB3aGljaCBtaWdodCBiZSBiZXR0ZXI/XHJcbiAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRQYW5lbHNbc2VsZWN0ZWRJbmRleF0/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjaGlsZENvdW50LCBzZWxlY3RlZEluZGV4LCBzZWxlY3Rpb25Nb2RlXSk7XHJcbiAgICBjb25zdCB1c2VUYWIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWIoaW5mbykge1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3Rpb25Nb2RlTCwgc2V0U2VsZWN0aW9uTW9kZUxdID0gdXNlU3RhdGUoc2VsZWN0aW9uTW9kZSk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xyXG4gICAgICAgIGNvbnN0IFt0YWJQYW5lbElkLCBzZXRUYWJQYW5lbElkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJJZFByb3BzLCBpZDogdGFiSWQsIGdldElkOiBnZXRUYWJJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItXCIgfSk7XHJcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZCwgdGFiSWQsIHNldFRhYlBhbmVsSWQsIHNldFNlbGVjdGlvbk1vZGU6IHNldFNlbGVjdGlvbk1vZGVMLCAuLi5pbmZvIH0pO1xyXG4gICAgICAgIGNvbnN0IGdldEluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKGluZm8uaW5kZXgpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlTCA9PSBcImZvY3VzXCIpIHtcclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0KHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0YWJiYWJsZSwgc2VsZWN0aW9uTW9kZV0pO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IG1hbmFnZWRQYW5lbHNbaW5mby5pbmRleF0/LnNldFRhYklkKHRhYklkKTsgfSwgW3RhYklkLCBpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD8uKGVuaGFuY2VFdmVudChlLCB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSkpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQpKHByb3BzKTtcclxuICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IFwidGFiXCI7XHJcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9IChzZWxlY3RlZCA/PyBmYWxzZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWNvbnRyb2xzXCJdID0gdGFiUGFuZWxJZDtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVRhYklkUHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhuZXdQcm9wcykpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYlByb3BzLCBzZWxlY3RlZCB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlVGFiUGFuZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VQYW5lbChpbmZvKSB7XHJcbiAgICAgICAgLy9jb25zdCBbc2hvdWxkRm9jdXMsIHNldFNob3VsZEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICBjb25zdCBbdGFiSWQsIHNldFRhYklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGUsIGdldFZpc2libGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VQYW5lbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkUGFuZWxJZCwgaWQ6IHRhYlBhbmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLXBhbmVsLVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZU1hbmFnZWRUYWJQYW5lbCh7IC4uLmluZm8sIHRhYlBhbmVsSWQsIHNldFRhYklkLCBmb2N1cywgc2V0VmlzaWJsZTogc2V0VmlzaWJsZSwgZ2V0VmlzaWJsZTogZ2V0VmlzaWJsZSB9KTtcclxuICAgICAgICBmdW5jdGlvbiBmb2N1cygpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0VGFiTGlzdEZvY3VzZWRJbm5lcigpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Py5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFRhYnNbaW5mby5pbmRleF0/LnNldFRhYlBhbmVsSWQodGFiUGFuZWxJZCk7IH0sIFt0YWJQYW5lbElkLCBpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUGFuZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWxhYmVsbGVkYnlcIl0gPSBtYW5hZ2VkVGFic1tpbmZvLmluZGV4XT8udGFiSWQ7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYnBhbmVsXCI7XHJcbiAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID8/PSAtMTsgLy8gTWFrZSBzdXJlIHRoZSB0YWIgcGFuZWwgaXMgdGFiYmFibGUuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VQYW5lbElkUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocHJvcHMpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYlBhbmVsUHJvcHMsIHZpc2libGUgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVRhYnNMaXN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFiTGlzdCgpIHtcclxuICAgICAgICBmdW5jdGlvbiB1c2VUYWJMaXN0UHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYmxpc3RcIjtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLW9yaWVudGF0aW9uXCJdID0gcGh5c2ljYWxPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRUYWJMYWJlbElkKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHVzZVRhYkxpc3RIYXNGb2N1c1Byb3BzKHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiTGlzdFByb3BzIH07XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgcGh5c2ljYWxPcmllbnRhdGlvbl0pO1xyXG4gICAgY29uc3QgdXNlVGFic0xhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFic0xhYmVsKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYnNMYWJlbFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVGFiTGFiZWxJZFByb3BzKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVGFic0xhYmVsUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7IHVzZVRhYiwgdXNlVGFiUGFuZWwsIHVzZVRhYnNMaXN0LCB1c2VUYWJzTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGZvY3VzVGFiTGlzdDogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBtYW5hZ2VkUGFuZWxzLCBtYW5hZ2VkVGFicyB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10YWJzLmpzLm1hcCIsImltcG9ydCB7IHVzZUdsb2JhbEhhbmRsZXIsIHVzZUhhc0ZvY3VzLCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSYW5kb21JZCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYVRvb2x0aXAoeyBtb3VzZW92ZXJEZWxheSwgbW91c2VvdXREZWxheSwgZm9jdXNEZWxheSB9KSB7XHJcbiAgICBtb3VzZW92ZXJEZWxheSA/Pz0gNDAwO1xyXG4gICAgbW91c2VvdXREZWxheSA/Pz0gNDA7XHJcbiAgICBmb2N1c0RlbGF5ID8/PSAxO1xyXG4gICAgLy8gVGhlIGVzY2FwZSBrZXkgc2hvdWxkIGNsb3NlIHRvb2x0aXBzLCBidXQgZG8gbm90aGluZyBlbHNlLlxyXG4gICAgLy8gKGkuZS4gY2xvc2luZyBhIHRvb2x0aXAgaW4gYSBkaWFsb2cgTVVTVCBOT1QgY2xvc2UgdGhlIGRpYWxvZyB0b28pXHJcbiAgICAvLyBUT0RPOiBUb29sdGlwcyBhcmUsIGVmZmVjdGl2ZWx5LCBhbHdheXMgdGhlIHRvcG1vc3QgY29tcG9uZW50LFxyXG4gICAgLy8gc28gd2UgY2FuIGp1c3QgaGF2ZSB0aGVtIGxpc3RlbiB0byBhbmQgc3dhbGxvdyBhbGwgXCJFc2NhcGVcIlxyXG4gICAgLy8ga2V5IHByZXNzZXMgYmVmb3JlIGFueW9uZSBlbHNlLiBGb3IgYSBtb3JlIGdlbmVyYWwgcG9wdXAsXHJcbiAgICAvLyBvciBhIHRvb2x0aXAgaW4gYSB0b29sdGlwICghISkgYSBkaWZmZXJlbnQgc29sdXRpb24gd291bGQgYmUgbmVlZGVkLlxyXG4gICAgdXNlR2xvYmFsSGFuZGxlcihkb2N1bWVudCwgXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGdldE9wZW4oKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiAhZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0VG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRUcmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0VG9vbHRpcEZvY3VzZWREZWxheUNvcnJlY3RlZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgeyBjYXB0dXJlOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW4sIGdldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUb29sdGlwSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVRvb2x0aXBJZFJlZmVyZW5jaW5nUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdG9vbHRpcC1cIiB9KTtcclxuICAgIGNvbnN0IFtnZXRUcmlnZ2VyRm9jdXNlZCwgc2V0VHJpZ2dlckZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKHVzZVN0YWJsZUNhbGxiYWNrKChmb2N1c2VkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsYXkgPSBmb2N1c2VkID8gZm9jdXNEZWxheSA6IDE7XHJcbiAgICAgICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgaXNGaW5pdGUoZGVsYXkpKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHNldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWQoZm9jdXNlZCksIGZvY3VzZWQgPyBmb2N1c0RlbGF5IDogMSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9KSwgcmV0dXJuRmFsc2UpO1xyXG4gICAgY29uc3QgW2dldFRvb2x0aXBGb2N1c2VkLCBzZXRUb29sdGlwRm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUodXNlU3RhYmxlQ2FsbGJhY2soKGZvY3VzZWQpID0+IHtcclxuICAgICAgICBjb25zdCBkZWxheSA9IGZvY3VzZWQgPyBmb2N1c0RlbGF5IDogMTtcclxuICAgICAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiBpc0Zpbml0ZShkZWxheSkpIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0VG9vbHRpcEZvY3VzZWREZWxheUNvcnJlY3RlZChmb2N1c2VkKSwgZGVsYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSksIHJldHVybkZhbHNlKTtcclxuICAgIGNvbnN0IFtnZXRUcmlnZ2VySG92ZXIsIHNldFRyaWdnZXJIb3Zlcl0gPSB1c2VQYXNzaXZlU3RhdGUodXNlU3RhYmxlQ2FsbGJhY2soKGhvdmVyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsYXkgPSBob3ZlcmluZyA/IG1vdXNlb3ZlckRlbGF5IDogbW91c2VvdXREZWxheTtcclxuICAgICAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiBpc0Zpbml0ZShkZWxheSkpIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0VHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWQoaG92ZXJpbmcpLCBkZWxheSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9KSwgcmV0dXJuRmFsc2UpO1xyXG4gICAgY29uc3QgW2dldFRvb2x0aXBIb3Zlciwgc2V0VG9vbHRpcEhvdmVyXSA9IHVzZVBhc3NpdmVTdGF0ZSh1c2VTdGFibGVDYWxsYmFjaygoaG92ZXJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBkZWxheSA9IGhvdmVyaW5nID8gbW91c2VvdmVyRGVsYXkgOiBtb3VzZW91dERlbGF5O1xyXG4gICAgICAgIGlmIChkZWxheSAhPSBudWxsICYmIGlzRmluaXRlKGRlbGF5KSkge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBzZXRUb29sdGlwSG92ZXJEZWxheUNvcnJlY3RlZChob3ZlcmluZyksIGRlbGF5KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChoYW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLCByZXR1cm5GYWxzZSk7XHJcbiAgICBjb25zdCBbZ2V0VHJpZ2dlckZvY3VzZWREZWxheUNvcnJlY3RlZCwgc2V0VHJpZ2dlckZvY3VzZWREZWxheUNvcnJlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2V0VHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWQsIHNldFRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnZXRUb29sdGlwRm9jdXNlZERlbGF5Q29ycmVjdGVkLCBzZXRUb29sdGlwRm9jdXNlZERlbGF5Q29ycmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtnZXRUb29sdGlwSG92ZXJEZWxheUNvcnJlY3RlZCwgc2V0VG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGdldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWQgfHwgZ2V0VHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWQpO1xyXG4gICAgfSwgW2dldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWQgfHwgZ2V0VHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWRdKTtcclxuICAgIGNvbnN0IHVzZVRvb2x0aXBUcmlnZ2VyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVG9vbHRpcFRyaWdnZXIoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRW50ZXIoZSkge1xyXG4gICAgICAgICAgICBzZXRUcmlnZ2VySG92ZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckxlYXZlKGUpIHtcclxuICAgICAgICAgICAgc2V0VHJpZ2dlckhvdmVyKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRJbm5lckNoYW5nZWQ6IHNldFRyaWdnZXJGb2N1c2VkIH0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVRvb2x0aXBUcmlnZ2VyUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIC8vIE5vdGU6IFRob3VnaCBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBmb2N1c2luZyBhY3RpdmF0ZXMgYSB0b29sdGlwLFxyXG4gICAgICAgICAgICAvLyBpdCdzIHBlcmZlY3RseSByZWFzb25hYmxlIHRoYXQgYSBjaGlsZCBlbGVtZW50IHdpbGwgYmUgdGhlIG9uZSB0aGF0J3MgZm9jdXNlZCxcclxuICAgICAgICAgICAgLy8gbm90IHRoaXMgb25lLCBzbyB3ZSBkb24ndCBzZXQgdGFiSW5kZXg9MFxyXG4gICAgICAgICAgICBwcm9wcy50YWJJbmRleCA/Pz0gLTE7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1kZXNjcmliZWRieVwiKSh1c2VIYXNGb2N1c1Byb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJFbnRlciwgb25Qb2ludGVyTGVhdmUsIG9uVG91Y2hFbmQgfSwgcHJvcHMpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRvb2x0aXBUcmlnZ2VyUHJvcHMgfTtcclxuICAgIH0sIFt1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzXSk7XHJcbiAgICBjb25zdCB1c2VUb29sdGlwID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVG9vbHRpcCgpIHtcclxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIHNldFRvb2x0aXBIb3Zlcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyTGVhdmUoZSkge1xyXG4gICAgICAgICAgICBzZXRUb29sdGlwSG92ZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1c2VUb29sdGlwUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRJbm5lckNoYW5nZWQ6IHNldFRvb2x0aXBGb2N1c2VkIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUHJvcHModXNlSGFzRm9jdXNQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyRW50ZXIsIG9uUG9pbnRlckxlYXZlIH0sIHByb3BzKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VUb29sdGlwUHJvcHMgfTtcclxuICAgIH0sIFt1c2VUb29sdGlwSWRQcm9wc10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VUb29sdGlwLFxyXG4gICAgICAgIHVzZVRvb2x0aXBUcmlnZ2VyLFxyXG4gICAgICAgIGlzT3Blbjogb3BlbixcclxuICAgICAgICBnZXRJc09wZW46IGdldE9wZW5cclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRvb2x0aXAuanMubWFwIixudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOlsiRU1QVFlfT0JKIiwiRU1QVFlfQVJSIiwiSVNfTk9OX0RJTUVOU0lPTkFMIiwidm5vZGVJZCIsImNyZWF0ZVZOb2RlIiwidHlwZSIsInByb3BzIiwia2V5IiwiX19zb3VyY2UiLCJfX3NlbGYiLCJyZWYiLCJpIiwibm9ybWFsaXplZFByb3BzIiwidm5vZGUiLCJ1bmRlZmluZWQiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRQcm9wcyIsIm9wdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50Q29tcG9uZW50IiwicHJldlJhZiIsImN1cnJlbnRIb29rIiwiYWZ0ZXJQYWludEVmZmVjdHMiLCJvbGRCZWZvcmVEaWZmIiwib2xkQmVmb3JlUmVuZGVyIiwib2xkQWZ0ZXJEaWZmIiwiZGlmZmVkIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsInVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsImhvb2tzIiwibGVuZ3RoIiwicHVzaCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImludm9rZU9yUmV0dXJuIiwicmVkdWNlciIsImluaXQiLCJob29rU3RhdGUiLCJfcmVkdWNlciIsIm5leHRWYWx1ZSIsImFjdGlvbiIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJhcmdzIiwic3RhdGUiLCJhcmdzQ2hhbmdlZCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZU1lbW8iLCJjdXJyZW50IiwiZmFjdG9yeSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsImNvbnRleHQiLCJwcm92aWRlciIsInN1YiIsInZhbHVlIiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsImNvbXBvbmVudCIsInNvcnQiLCJhIiwiYiIsInBvcCIsImZvckVhY2giLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwiZSIsImMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsIkhBU19SQUYiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJjb21taXRRdWV1ZSIsInNvbWUiLCJmaWx0ZXIiLCJjYiIsImhhc0Vycm9yZWQiLCJzIiwiaG9vayIsImNvbXAiLCJjbGVhbnVwIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwiVW5zZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0b1ZhbCIsIm1peCIsImsiLCJ5Iiwic3RyIiwiQXJyYXkiLCJpc0FycmF5IiwidG1wIiwieCIsImFyZ3VtZW50cyIsInJldHVybk51bGwiLCJNIiwidXNlU3RhdGVQIiwidXNlRWZmZWN0TmF0aXZlIiwidXNlTGF5b3V0RWZmZWN0TmF0aXZlIiwicmV0dXJuRmFsc2UiLCJjYW5kaWRhdGVTZWxlY3RvcnMiLCJtYXRjaGVzIiwiRWxlbWVudCIsImlzSW5wdXQiLCJub2RlIiwiaXNIaWRkZW5JbnB1dCIsImlzRGV0YWlsc1dpdGhTdW1tYXJ5IiwiciIsImNoaWxkIiwiaXNIaWRkZW4iLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNEaXJlY3RTdW1tYXJ5Iiwibm9kZVVuZGVyRGV0YWlscyIsImRpc3BsYXlDaGVjayIsIndpZHRoIiwiaGVpZ2h0IiwiaXNEaXNhYmxlZEZyb21GaWVsZHNldCIsInBhcmVudE5vZGUiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlIiwiZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IiLCJpc0ZvY3VzYWJsZSIsImdsb2JhbCIsInRoaXMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIndpbmRvdyIsInNsaWNlIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJqb2luIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsIlNldCIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJfb25NdXRhdGlvbiIsImJpbmQiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJkZXN0cnVjdG9yIiwiZGlzY29ubmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImluZXJ0Tm9kZSIsIl91bm1hbmFnZU5vZGUiLCJzdGFydE5vZGUiLCJfdGhpczIiLCJjb21wb3NlZFRyZWVXYWxrIiwiX3Zpc2l0Tm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJkb2N1bWVudCIsImJvZHkiLCJjb250YWlucyIsInJvb3QiLCJub2RlVHlwZSIsIk5vZGUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiYmx1ciIsImZvY3VzIiwiRUxFTUVOVF9OT0RFIiwiZWxlbWVudCIsIl9hZG9wdEluZXJ0Um9vdCIsImNhbGwiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiYWRkIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiZ2V0Iiwic2V0IiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsIkVycm9yIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290Iiwic2l6ZSIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIk1hcCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vbkRvY3VtZW50TG9hZGVkIiwiaW5lcnQiLCJoYXMiLCJwYXJlbnQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJzaGFkb3dSb290QW5jZXN0b3IiLCJzaGFkb3dSb290IiwibG9jYWxOYW1lIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCJfaSIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJoYXNPd25Qcm9wZXJ0eSIsImFzc2lnbiIsIm9iaiIsInNoYWxsb3dEaWZmZXJzIiwiX2pzeHMiLCJfanN4IiwiUmFuZG9tV29yZHMiLCJjcmVhdGVDb250ZXh0IiwibWVtbyIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7O1NBQU87SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxJQUFNQSxHQUFBQSxHQUFZLEVBQWxCO0lBQUEsSUFDTUMsR0FBQUEsR0FBWSxFQURsQjtJQUFBLElBRU1DLEdBQUFBLEdBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VsQyxJQUFJQyxHQUFBQSxHQUFVLENBQWQ7O0lBcUJBLFNBQVNDLEdBQVQsQ0FBcUJDLENBQXJCLEVBQTJCQyxDQUEz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
