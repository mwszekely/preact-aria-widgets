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

    D(null);

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
    * tabbable 5.3.1
    * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
    */
    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]:not(slot)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
    var NoElement = typeof Element === 'undefined';
    var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
      return element.getRootNode();
    } : function (element) {
      return element.ownerDocument;
    };

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

    var isZeroArea = function isZeroArea(node) {
      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width,
          height = _node$getBoundingClie.height;

      return width === 0 && height === 0;
    };

    var isHidden = function isHidden(node, _ref) {
      var displayCheck = _ref.displayCheck,
          getShadowRoot = _ref.getShadowRoot;

      if (getComputedStyle(node).visibility === 'hidden') {
        return true;
      }

      var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

      if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
        return true;
      }

      if (!displayCheck || displayCheck === 'full') {
        if (typeof getShadowRoot === 'function') {
          // figure out if we should consider the node to be in an undisclosed shadow and use the
          //  'non-zero-area' fallback
          var originalNode = node;

          while (node) {
            var parentElement = node.parentElement;
            var rootNode = getRootNode(node);

            if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
            ) {
              // node has an undisclosed shadow which means we can only treat it as a black box, so we
              //  fall back to a non-zero-area test
              return isZeroArea(node);
            } else if (node.assignedSlot) {
              // iterate up slot
              node = node.assignedSlot;
            } else if (!parentElement && rootNode !== node.ownerDocument) {
              // cross shadow boundary
              node = rootNode.host;
            } else {
              // iterate up normal dom
              node = parentElement;
            }
          }

          node = originalNode;
        } // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
        //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
        //  it might be a falsy value, which means shadow DOM support is disabled
        // didn't find it sitting in an undisclosed shadow (or shadows are disabled) so now we
        //  can just test to see if it would normally be visible or not
        // this works wherever the node is: if there's at least one client rect, it's
        //  somehow displayed; it also covers the CSS 'display: contents' case where the
        //  node itself is hidden in place of its contents; and there's no need to search
        //  up the hierarchy either


        return !node.getClientRects().length;
      } else if (displayCheck === 'non-zero-area') {
        return isZeroArea(node);
      }

      return false;
    }; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
    //  unless they are in the _first_ <legend> element of the top-most disabled
    //  fieldset


    var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement; // check if `node` is contained in a disabled <fieldset>

        while (parentNode) {
          if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
            // look for the first <legend> among the children of the disabled <fieldset>
            for (var i = 0; i < parentNode.children.length; i++) {
              var child = parentNode.children.item(i); // when the first <legend> (in document order) is found

              if (child.tagName === 'LEGEND') {
                // if its parent <fieldset> is not nested in another disabled <fieldset>,
                // return whether `node` is a descendant of its first <legend>
                return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
              }
            } // the disabled <fieldset> containing `node` has no <legend>


            return true;
          }

          parentNode = parentNode.parentElement;
        }
      } // else, node's tabbable/focusable state should not be affected by a fieldset's
      //  enabled/disabled state


      return false;
    };

    var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
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

    function blockingElements() {
      return document.$blockingElements;
    }
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
            blockingElements().push(target);
            return () => {
              blockingElements().remove(target);
            };
          } catch (ex) {
            // Well, semi-silently.
            console.error(ex);
          }
        }
      }, [target]);
    }
    function getTopElement() {
      return blockingElements().top;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvZGlzdC9qc3hSdW50aW1lLm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXRpbWVvdXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1saXN0LW5hdmlnYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYW5pbWF0aW9uLWZyYW1lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWRyYWdnYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kcm9wcGFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZXZlbnQtaGFuZGxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1hY3RpdmUtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1oYXMtZm9jdXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtaW50ZXJ2YWwuanMiLCIuLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvZGlzdC9pbmRleC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9kaXN0L2luZXJ0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL2Rpc3QvYmxvY2tpbmctZWxlbWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYmxvY2tpbmctZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1mb2N1cy10cmFwLmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvZGlzdC9jb21wYXQubWpzIiwiLi4vcHJvcHMuanMiLCIuLi91c2UtYnV0dG9uLmpzIiwiLi4vdXNlLWFjY29yZGlvbi5qcyIsIi4uL3VzZS1sYWJlbC5qcyIsIi4uL3VzZS1jaGVja2JveC5qcyIsIi4uL3VzZS1jaGVja2JveC1ncm91cC5qcyIsIi4uL3VzZS1tb2RhbC5qcyIsIi4uL3VzZS1kaWFsb2cuanMiLCIuLi91c2UtbGlzdGJveC1tdWx0aS5qcyIsIi4uL3VzZS1saXN0Ym94LXNpbmdsZS5qcyIsIi4uL3VzZS1tZW51LmpzIiwiLi4vdXNlLXRhYnMuanMiLCIuLi91c2UtdG9vbHRpcC5qcyIsImRlbW9zL3VzZS1pbnRlcnZhbC50c3giLCJkZW1vcy91c2Utcm92aW5nLXRhYi1pbmRleC50c3giLCJkZW1vcy91c2UtdGltZW91dC50c3giLCJpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxyLG8sZixlPXt9LGM9W10scz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGEobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gaChuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB2KGwsdSxpKXt2YXIgdCxyLG8sZj17fTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihvIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbb10mJihmW29dPWwuZGVmYXVsdFByb3BzW29dKTtyZXR1cm4geShsLGYsdCxyLG51bGwpfWZ1bmN0aW9uIHkobixpLHQscixvKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOnIsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09bz8rK3U6b307cmV0dXJuIG51bGw9PW8mJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBwKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBfKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGsobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2sobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ayhuKTpudWxsfWZ1bmN0aW9uIGIobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBiKG4pfX1mdW5jdGlvbiBtKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIWcuX19yKyt8fG8hPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChvPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxyKShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBuO2cuX19yPXQubGVuZ3RoOyluPXQuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdD1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQscixvO24uX19kJiYocj0odD0obD1uKS5fX3YpLl9fZSwobz1sLl9fUCkmJih1PVtdLChpPWEoe30sdCkpLl9fdj10Ll9fdisxLGoobyx0LGksbC5fX24sdm9pZCAwIT09by5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W3JdOm51bGwsdSxudWxsPT1yP2sodCk6cix0Ll9faCkseih1LHQpLHQuX19lIT1yJiZiKHQpKSl9KX1mdW5jdGlvbiB3KG4sbCx1LGksdCxyLG8sZixzLGEpe3ZhciBoLHYscCxfLGIsbSxnLHc9aSYmaS5fX2t8fGMsQT13Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShfPXUuX19rW2hdPW51bGw9PShfPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIF8/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgX3x8XCJudW1iZXJcIj09dHlwZW9mIF98fFwiYmlnaW50XCI9PXR5cGVvZiBfP3kobnVsbCxfLG51bGwsbnVsbCxfKTpBcnJheS5pc0FycmF5KF8pP3koZCx7Y2hpbGRyZW46X30sbnVsbCxudWxsLG51bGwpOl8uX19iPjA/eShfLnR5cGUsXy5wcm9wcyxfLmtleSxudWxsLF8uX192KTpfKSl7aWYoXy5fXz11LF8uX19iPXUuX19iKzEsbnVsbD09PShwPXdbaF0pfHxwJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl3W2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxBO3YrKyl7aWYoKHA9d1t2XSkmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXt3W3ZdPXZvaWQgMDticmVha31wPW51bGx9aihuLF8scD1wfHxlLHQscixvLGYscyxhKSxiPV8uX19lLCh2PV8ucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLF8pLGcucHVzaCh2LF8uX19jfHxiLF8pKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfLnR5cGUmJl8uX19rPT09cC5fX2s/Xy5fX2Q9cz14KF8scyxuKTpzPVAobixfLHAsdyxiLHMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpKTpzJiZwLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1rKHApKX1mb3IodS5fX2U9bSxoPUE7aC0tOyludWxsIT13W2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT13W2hdLl9fZSYmd1toXS5fX2U9PXUuX19kJiYodS5fX2Q9ayhpLGgrMSkpLE4od1toXSx3W2hdKSk7aWYoZylmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKU0oZ1toXSxnWysraF0sZ1srK2hdKX1mdW5jdGlvbiB4KG4sbCx1KXtmb3IodmFyIGksdD1uLl9fayxyPTA7dCYmcjx0Lmxlbmd0aDtyKyspKGk9dFtyXSkmJihpLl9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpLnR5cGU/eChpLGwsdSk6UCh1LGksaSx0LGkuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiBBKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7QShuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIFAobixsLHUsaSx0LHIpe3ZhciBvLGYsZTtpZih2b2lkIDAhPT1sLl9fZClvPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPXJ8fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PXJ8fHIucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxvPW51bGw7ZWxzZXtmb3IoZj1yLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0yKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LHIpLG89cn1yZXR1cm4gdm9pZCAwIT09bz9vOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciByO2ZvcihyIGluIHUpXCJjaGlsZHJlblwiPT09cnx8XCJrZXlcIj09PXJ8fHIgaW4gbHx8SChuLHIsbnVsbCx1W3JdLGkpO2ZvcihyIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtyXXx8XCJjaGlsZHJlblwiPT09cnx8XCJrZXlcIj09PXJ8fFwidmFsdWVcIj09PXJ8fFwiY2hlY2tlZFwiPT09cnx8dVtyXT09PWxbcl18fEgobixyLGxbcl0sdVtyXSxpKX1mdW5jdGlvbiAkKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxzLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBIKG4sbCx1LGksdCl7dmFyIHI7bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHwkKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fCQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pcj1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK3JdPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxyP1Q6SSxyKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxyP1Q6SSxyKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rW0g6aF0vLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQscixvLGYsZSxjKXt2YXIgcyxoLHYseSxwLGssYixtLGcseCxBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxvPVtlXSksKHM9bC5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKG09dS5wcm9wcyxnPShzPVAuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/Zz9nLnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9iPShoPXUuX19jPWkuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBQKG0seCk6KHUuX19jPWg9bmV3IF8obSx4KSxoLmNvbnN0cnVjdG9yPVAsaC5yZW5kZXI9TyksZyYmZy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9eCxoLl9fbj10LHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWEoe30saC5fX3MpKSxhKGguX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkseT1oLnByb3BzLHA9aC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLHgpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7aC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKG0saC5fX3MseCksbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LHAsayl9KX1oLmNvbnRleHQ9eCxoLnByb3BzPW0saC5zdGF0ZT1oLl9fcywocz1sLl9fcikmJnModSksaC5fX2Q9ITEsaC5fX3Y9dSxoLl9fUD1uLHM9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKHQ9YShhKHt9LHQpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHkscCkpLEE9bnVsbCE9cyYmcy50eXBlPT09ZCYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzLHcobixBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsaSx0LHIsbyxmLGUsYyksaC5iYXNlPXUuX19lLHUuX19oPW51bGwsaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCksaC5fX2U9ITF9ZWxzZSBudWxsPT1vJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TChpLl9fZSx1LGksdCxyLG8sZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9bykmJih1Ll9fZT1lLHUuX19oPSEhYyxvW28uaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiB6KG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBMKGwsdSxpLHQscixvLGYsYyl7dmFyIHMsYSx2LHk9aS5wcm9wcyxwPXUucHJvcHMsZD11LnR5cGUsXz0wO2lmKFwic3ZnXCI9PT1kJiYocj0hMCksbnVsbCE9bylmb3IoO188by5sZW5ndGg7XysrKWlmKChzPW9bX10pJiZcInNldEF0dHJpYnV0ZVwiaW4gcz09ISFkJiYoZD9zLmxvY2FsTmFtZT09PWQ6Mz09PXMubm9kZVR5cGUpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxyLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmaChvW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09eS52YWx1ZXx8XyE9PWwudmFsdWV8fFwicHJvZ3Jlc3NcIj09PWQmJiFfKSYmSChsLFwidmFsdWVcIixfLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KF89cC5jaGVja2VkKSYmXyE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLF8seS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxyO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bi5fX2spZm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdJiZOKHRbcl0sdSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxoKG4uX19lKSxuLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBTKHUsaSx0KXt2YXIgcixvLGY7bC5fXyYmbC5fXyh1LGkpLG89KHI9XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxqKGksdT0oIXImJnR8fGkpLl9faz12KGQsbnVsbCxbdV0pLG98fGUsZSx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhciYmdD9bdF06bz9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIXImJnQ/dDpvP28uX19lOmkuZmlyc3RDaGlsZCxyKSx6KGYsdSl9ZnVuY3Rpb24gcShuLGwpe1MobixsLHEpfWZ1bmN0aW9uIEIobCx1LGkpe3ZhciB0LHIsbyxmPWEoe30sbC5wcm9wcyk7Zm9yKG8gaW4gdSlcImtleVwiPT1vP3Q9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTpmW29dPXVbb107cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSkseShsLnR5cGUsZix0fHxsLmtleSxyfHxsLnJlZixudWxsKX1mdW5jdGlvbiBEKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2YrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKG0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49Yy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxfLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1hKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oYSh7fSx1KSx0aGlzLnByb3BzKSksbiYmYSh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLG0odGhpcykpfSxfLnByb3RvdHlwZS5yZW5kZXI9ZCx0PVtdLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZy5fX3I9MCxmPTA7ZXhwb3J0e1MgYXMgcmVuZGVyLHEgYXMgaHlkcmF0ZSx2IGFzIGNyZWF0ZUVsZW1lbnQsdiBhcyBoLGQgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsaSBhcyBpc1ZhbGlkRWxlbWVudCxfIGFzIENvbXBvbmVudCxCIGFzIGNsb25lRWxlbWVudCxEIGFzIGNyZWF0ZUNvbnRleHQsQSBhcyB0b0NoaWxkQXJyYXksbCBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyByLEZyYWdtZW50IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e0ZyYWdtZW50fWZyb21cInByZWFjdFwiO3ZhciBvPTA7ZnVuY3Rpb24gZShfLGUsbix0LGYpe3ZhciBsLHMsdT17fTtmb3IocyBpbiBlKVwicmVmXCI9PXM/bD1lW3NdOnVbc109ZVtzXTt2YXIgYT17dHlwZTpfLHByb3BzOnUsa2V5Om4scmVmOmwsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6LS1vLF9fc291cmNlOnQsX19zZWxmOmZ9O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIF8mJihsPV8uZGVmYXVsdFByb3BzKSlmb3IocyBpbiBsKXZvaWQgMD09PXVbc10mJih1W3NdPWxbc10pO3JldHVybiByLnZub2RlJiZyLnZub2RlKGEpLGF9ZXhwb3J0e2UgYXMganN4LGUgYXMganN4cyxlIGFzIGpzeERFVn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc3hSdW50aW1lLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXt2YXIgdDtmb3IoaS5zb3J0KGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4uX192Ll9fYi10Ll9fdi5fX2J9KTt0PWkucG9wKCk7KWlmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHUscj10Ll9fYztyJiZyLl9fSCYmKHIuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e2cobil9Y2F0Y2gobil7dT1ufX0pLHUmJm4uX19lKHUsci5fX3YpKX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dSxyPW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihuLl9fYz12b2lkIDAscigpKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBEZWJ1ZyBob29rLlxyXG4gKlxyXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eSguLi52YWx1ZXMpIHtcclxuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoLCAwKTtcclxuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XHJcbiAgICByZXR1cm47XHJcbiAgICBmdW5jdGlvbiB1c2VIZWxwZXIodmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xyXG4gICAgICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmKHZhbHVlKTtcclxuICAgICAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKGZhbHNlKTtcclxuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhpcyBob29rIHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCB2YWx1ZSB0aGF0IHdhcyBjaGVja2VkLmApO1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBzaG93bkVycm9yLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBTaW1pbGFyIHRvIGB1c2VTdGF0ZWAsIGJ1dCBmb3IgdmFsdWVzIHRoYXQgYXJlbid0IFwicmVuZGVyLWltcG9ydGFudFwiICZuZGFzaDsgdXBkYXRlcyBkb24ndCBjYXVzZSBhIHJlLXJlbmRlciBhbmQgc28gdGhlIHZhbHVlIHNob3VsZG4ndCBiZSB1c2VkIGR1cmluZyByZW5kZXIgKHRob3VnaCBpdCBjZXJ0YWlubHkgY2FuLCBhdCBsZWFzdCBieSByZS1yZW5kZXJpbmcgYWdhaW4pLlxyXG4gKlxyXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cclxuICpcclxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcclxuICpcclxuICogMS4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB0aGlzIHZlcnNpb24gb2YgYHNldFN0YXRlYCBkb2Vzbid0IHJlLXJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XHJcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxyXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXHJcbiAqIDQuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHRoZSBzaW5nbGUgXCJkZXBlbmRlbmN5XCIgaXMgYmFzZWQgb24geW91ciBjYWxscyB0byBgc2V0U3RhdGVgXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxyXG4gKlxyXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXHJcbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZShvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihVbnNldCk7XHJcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsZWFudXBDYWxsYmFja1JlZiA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xyXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpO1xyXG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXHJcbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGlmIChjbGVhbnVwQ2FsbGJhY2spXHJcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gVGhlcmUgYXJlIGEgY291cGxlIHBsYWNlcyB3aGVyZSB3ZSdkIGxpa2UgdG8gdXNlIG91ciBpbml0aWFsXHJcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cclxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxyXG4gICAgLy8gZ2V0VmFsdWUgaXMgY2FsbGVkLlxyXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oaW5pdGlhbFZhbHVlLCB1bmRlZmluZWQpID8/IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGNlcHRpb25zIGFyZSBpbnRlbnRpb25hbCB0byBhbGxvdyBiYWlsb3V0ICh3aXRob3V0IGV4cG9zaW5nIHRoZSBVbnNldCBzeW1ib2wpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbIC8qIGdldEluaXRpYWxWYWx1ZSBhbmQgb25DaGFuZ2UgaW50ZW50aW9uYWxseSBvbWl0dGVkICovXSk7XHJcbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEdXJpbmcgb25DaGFuZ2UsIHByZWZlciB1c2luZyB0aGUgKHZhbHVlLCBwcmV2VmFsdWUpIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIGdldFZhbHVlIC0tIGl0J3MgYW1iaWd1b3VzIGFzIHRvIGlmIHlvdSdyZSBhc2tpbmcgZm9yIHRoZSBvbGQgb3IgbmV3IHZhbHVlIGF0IHRoaXMgcG9pbnQgaW4gdGltZSBmb3IgdGhpcyBjb21wb25lbnQuXCIpO1xyXG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHdlIGNhbGwgZ2V0VmFsdWUsIGlmIHdlIGhhdmVuJ3QgYmVlbiBnaXZlbiBhIHZhbHVlIHlldCxcclxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBpbml0aWFsIHZhbHVlIGluc3RlYWQgb2Ygbm90aGluZy5cclxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQpXHJcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XHJcbiAgICAgICAgcmV0dXJuICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cclxuICAgICAgICAvLyAoSWYgd2UgaGF2ZSBhbiBpbml0aWFsIHZhbHVlLCBvZiBjb3Vyc2UpXHJcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcpID0+IHtcclxuICAgICAgICBjb25zdCBwcmV2RGVwID0gdmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiBnZXRWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRlcCA9IGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHByZXZEZXApIDogYXJnO1xyXG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgLy8gSW5kaWNhdGUgdG8gdGhlIHVzZXIgdGhhdCB0aGV5IHNob3VsZG4ndCBjYWxsIGdldFZhbHVlIGR1cmluZyBvbkNoYW5nZVxyXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmQgY2xlYW51cCBmdW5jdGlvblxyXG4gICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcclxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihkZXAsIHByZXZEZXApID8/IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkZXA7XHJcbiAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cclxuICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xyXG59XHJcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XHJcbiAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8uY2hpbGRyZW47XHJcbiAgICBjb25zdCByaHMgPSByaHNQcm9wcz8uY2hpbGRyZW47XHJcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHJldCA9IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuLyoqXHJcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlaXIgYGNsYXNzYCBhbmQgYGNsYXNzTmFtZWAgcHJvcGVydGllcy5cclxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBsaHMgQ2xhc3NlcyBvZiB0aGUgZmlyc3QgY29tcG9uZW50XHJcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxocywgcmhzKSB7XHJcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXHJcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cclxuICAgIHJldHVybiBtZXJnZUNsYXNzZXMobGhzLCByaHMpO1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyhsaHMsIHJocykge1xyXG4gICAgY29uc3QgbGhzQ2xhc3MgPSBsaHM/LmNsYXNzO1xyXG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XHJcbiAgICBjb25zdCByaHNDbGFzcyA9IHJocz8uY2xhc3M7XHJcbiAgICBjb25zdCByaHNDbGFzc05hbWUgPSByaHM/LmNsYXNzTmFtZTtcclxuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbGV0IGxoc0NsYXNzZXMgPSBjbHN4KGxoc0NsYXNzLCBsaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBsZXQgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFsbENsYXNzZXMpLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0eXBldGVzdCgpIHtcclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgXTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzFdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzJdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s1XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbN10uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s4XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTBdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTFdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzEzXTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNsYXNzZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xyXG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJlZihpbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxyXG4gKiBAcGFyYW0gbGhzXHJcbiAqIEBwYXJhbSByaHNcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcclxuICAgICAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8ucmVmO1xyXG4gICAgICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5yZWY7XHJcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xyXG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XHJcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XHJcbiAgICAgICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByaHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vKlxyXG5mdW5jdGlvbiB0eXBldGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XHJcblxyXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWNjZXB0c1JlZihyZWY6IFJlZjxhbnk+KSB7IH1cclxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cclxuXHJcbiAgICBjb25zdCBjID0gW1xyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWY6IHVuZGVmaW5lZCB9LCB7IHJlZiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWYgfSksXHJcbiAgICBdIGFzIGNvbnN0O1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNSZWYoY1sxXSk7XHJcblxyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbMl0pO1xyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbM10pO1xyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIFRPRE9cclxuICAgIGFjY2VwdHNSZWYoY1s1XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbNl0pO1xyXG4gICAgYWNjZXB0c1JlZihjWzddKTtcclxuICAgIGFjY2VwdHNSZWYoY1s4XSk7XHJcbn1cclxuKi9cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcclxuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcclxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpO1xyXG59XHJcbi8qKlxyXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcclxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcclxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHJocykge1xyXG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXHJcbiAgICBpZiAoIWxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcclxuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXHJcbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXHJcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XHJcbiAgICAgICAgaWYgKCFsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpXHJcbiAgICAgICAgICAgIHJldHVybiByaHMuc3R5bGU7XHJcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXHJcbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSkge1xyXG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KGxocz8uc3R5bGUpIH0sIHJocyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QocmhzPy5zdHlsZSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvZ2ljPz8/XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXHJcbiAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBgJHtsaHMuc3R5bGV9OyR7cmhzPy5zdHlsZSA/PyBcIlwifWA7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXHJcbiAgICAgICAgLi4uKHJocz8uc3R5bGUgPz8ge30pXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcclxubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIG1lcmdlIHR3byBwcm9wcyB3aXRoIHRoZSBzYW1lIG5hbWU6ICR7c3RyfWApOyAvKiBJbnRlbnRpb25hbCAqLyB9O1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xyXG4gICAgbG9nID0gbG9nMjtcclxufVxyXG4vKipcclxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXHJcbiAqIEBwYXJhbSBsaHMyXHJcbiAqIEBwYXJhbSByaHMyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcclxuICAgICAgICAvLyBGaXJzdCwgcHV0IGluIGFsbCB0aGUgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIHJlYXNvbiBhYm91dFxyXG4gICAgICAgIC8vIGFuZCBhbGwgbGhzIHByb3BzLiBXZSdyZSBnb2luZyB0byBtZXJnZSBpbiByaHMganVzdCBhZnRlci5cclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IHJoc0NoaWxkcmVuLCBjbGFzczogcmhzQ2xhc3MsIGNsYXNzTmFtZTogcmhzQ2xhc3NOYW1lLCBzdHlsZTogcmhzU3R5bGUsIHJlZjogcmhzUmVmLCAuLi5yaHMgfSA9IHJoczI7XHJcbiAgICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgICAgLi4ubGhzLFxyXG4gICAgICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMoKShsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzMiwgcmhzMilcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQucmVmO1xyXG4gICAgICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcclxuICAgICAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcclxuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2hpbGRyZW47XHJcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxyXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cclxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xyXG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVZ2guXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcclxuICAgIGlmICghbGhzKVxyXG4gICAgICAgIHJldHVybiByaHM7XHJcbiAgICBpZiAoIXJocylcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xyXG4gICAgICAgIGxldCBydiA9IHJocyguLi5hcmdzKTtcclxuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcclxuICAgIH07XHJcbn1cclxuLypcclxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XHJcblxyXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xyXG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcclxuXHJcbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XHJcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xyXG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcclxuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXHJcbiAgICBjb25zdCBtMzogTTEgPSAwO1xyXG5cclxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XHJcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xyXG4gICAgY29uc3QgbTY6IE0yID0gMDtcclxuXHJcbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xyXG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XHJcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuXHJcblxyXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XHJcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XHJcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XHJcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XHJcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XHJcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XHJcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XHJcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XHJcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XHJcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XHJcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XHJcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XHJcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XHJcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XHJcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XHJcblxyXG5cclxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcbn1cclxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxyXG4qLyBcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5mdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxyXG4vKipcclxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cclxuICogKlRoaXMgaG9vayBpdHNlbGYgcmV0dXJucyBhIGhvb2sqLS11c2VSZWZFbGVtZW50UHJvcHMgbW9kaWZpZXMgdGhlIHByb3BzIHRoYXQgeW91IHdlcmUgZ29pbmcgdG8gcGFzcyB0byBhbiBIVE1MRWxlbWVudCxcclxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXHJcbiAqXHJcbiAqIERvbid0IGZvcmdldCB0byBwcm92aWRlIHRoZSBFbGVtZW50IGFzIHRoZSB0eXBlIGFyZ3VtZW50IVxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xyXG4gICAgY29uc3Qgb25FbGVtZW50Q2hhbmdlID0gYXJncz8ub25FbGVtZW50Q2hhbmdlO1xyXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxyXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRWxlbWVudENoYW5nZSwgcmV0dXJuTnVsbCk7XHJcbiAgICAvLyBDcmVhdGUgYSBSZWZDYWxsYmFjayB0aGF0J3MgZmlyZWQgd2hlbiBtb3VudGVkIFxyXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpXHJcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VSZWZFbGVtZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyByZWY6IG15UmVmIH0sIHByb3BzKSwgW10pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHRlc3QoKSB7XHJcbiAgICBmdW5jdGlvbiBmb28ocHJvcHMpIHtcclxuICAgICAgICBjb25zdCBbZWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcclxuICAgICAgICBjb25zdCBwMSA9IHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgaWYgKHAxLnN0eWxlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcDEuc3R5bGUgPT09IFwic3RyaW5nXCIpIHsgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwMS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcmVmLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuZnVuY3Rpb24gZXh0cmFjdEVsZW1lbnRTaXplKGVsZW1lbnQpIHtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV0cmlldmUgdGhlIHNpemUgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXRcIik7XHJcbiAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XHJcbiAgICByZXR1cm4gKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcclxufVxyXG5mdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFNpemUoeyBnZXRPYnNlcnZlQm94LCBvblNpemVDaGFuZ2UgfSkge1xyXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSk7XHJcbiAgICBjb25zdCBbZ2V0U2l6ZSwgc2V0U2l6ZV0gPSB1c2VQYXNzaXZlU3RhdGUob25TaXplQ2hhbmdlLCByZXR1cm5OdWxsKTtcclxuICAgIGNvbnN0IGN1cnJlbnRPYnNlcnZlQm94ID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBuZWVkQU5ld09ic2VydmVyID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG9ic2VydmVCb3gpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcclxuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNpemUoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAod2luZG93ICYmIChcIlJlc2l6ZU9ic2VydmVyXCIgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHsgaGFuZGxlVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVVwZGF0ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4gbmVlZEFOZXdPYnNlcnZlcihlLCBnZXRPYnNlcnZlQm94Py4oKSksIFtdKSB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdldE9ic2VydmVCb3gpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgIT09IGdldE9ic2VydmVCb3goKSlcclxuICAgICAgICAgICAgICAgIG5lZWRBTmV3T2JzZXJ2ZXIoZ2V0RWxlbWVudCgpLCBnZXRPYnNlcnZlQm94KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRFbGVtZW50LFxyXG4gICAgICAgIGdldFNpemUsXHJcbiAgICAgICAgdXNlRWxlbWVudFNpemVQcm9wczogdXNlUmVmRWxlbWVudFByb3BzXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lbGVtZW50LXNpemUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlRWxlbWVudFNpemUgfSBmcm9tIFwiLi91c2UtZWxlbWVudC1zaXplXCI7XHJcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcclxufVxyXG4vKipcclxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxyXG4gKlxyXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxyXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cclxuICpcclxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cclxuICpcclxuICogU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtd3JpdGluZy1tb2Rlcy8jbG9naWNhbC10by1waHlzaWNhbFxyXG4gKlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcclxuICogKiBgZ2V0TG9naWNhbERpcmVjdGlvbmA6IHJldHJpZXZlcyBhIGBMb2dpY2FsRGlyZWN0aW9uSW5mb2AgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlbGVtZW50LiAoRnVuY3Rpb24gaXMgY29uc3RhbnQgYmV0d2VlbiByZW5kZXJzKVxyXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxyXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cclxuICogKiBgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbmA6ICBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiIHRvIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlIH0pIHtcclxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UpO1xyXG4gICAgY29uc3QgW2dldENvbXB1dGVkU3R5bGVzLCBzZXRDb21wdXRlZFN0eWxlc10gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XHJcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tcHV0ZWRTdHlsZXMod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW10pXHJcbiAgICB9KTtcclxuICAgIC8vIFRPRE86IFRoZXJlJ3Mgbm8gd2F5IHRvIHJlZnJlc2ggd2hpY2ggd3JpdGluZyBtb2RlIHdlIGhhdmUgb25jZSBtb3VudGVkLlxyXG4gICAgLy8gICBBLiBUaGVyZSdzIG5vIHdheSB0byB3YXRjaCBmb3IgQ1NTIHN0eWxlIGNoYW5nZXNcclxuICAgIC8vICAgQi4gQ2FsbGluZyBnZXRDb21wdXRlZFN0eWxlIGFmdGVyIGV2ZXJ5IHJlbmRlciBmb3IgZXZlcnkgZWxlbWVudCBnZXRzIGV4cGVuc2l2ZSBmYXN0IGFuZFxyXG4gICAgLy8gICBDLiBJcyBub3QgbmVjZXNzYXJ5IGZvciBtb3N0IHVzZSBjYXNlcyB0aGF0IHdpbGwgbmV2ZXIgc3dpdGNoIHdyaXRpbmctbW9kZSB3aXRoaW4gYSBzaW5nbGUgY29tcG9uZW50XHJcbiAgICAvLyAgICAgIChUaG9zZSB0aGF0IGRvIHdpbGwgbmVlZCB0byBtb3VudCBhbmQgdW5tb3VudCB0aGUgY29tcG9uZW50IHRoYXQgdXNlcyBpdClcclxuICAgIC8vXHJcbiAgICAvLyBBcyBhIHNvbHV0aW9uLCBoZXJlJ3MgYSBjaGVhcCB3b3JrYXJvdW5kIHRoYXQgY2hlY2tzIHdoZW4gdGhlIGVsZW1lbnQncyBzaXplIGhhcyBjaGFuZ2VkLFxyXG4gICAgLy8gYW5kIGlmIHNvLCB0ZXN0cyBpZiB0aGUgd3JpdGluZyBtb2RlIGhhcyBjaGFuZ2VkIHRvby5cclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIHdpbGwgd29yayBmb3IgYXQgbGVhc3Qgc29tZSBudW1iZXIgb2YgY2FzZXMsIGJ1dCBhIGJldHRlciBzb2x1dGlvbiBpcyBzdGlsbCBuZWVkZWQuXHJcbiAgICBjb25zdCB7IHVzZUVsZW1lbnRTaXplUHJvcHMgfSA9IHVzZUVsZW1lbnRTaXplKHsgb25TaXplQ2hhbmdlOiB1c2VDYWxsYmFjayhfID0+IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZT8uKGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCkpLCBbXSkgfSk7XHJcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGVzKCk7XHJcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XHJcbiAgICAgICAgICAgIGxldCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBsZXQgdCA9IGNvbXB1dGVkU3R5bGVzLnRleHRPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgICBkID0gXCJsdHJcIjtcclxuICAgICAgICAgICAgcmV0dXJuICh7IC4uLldyaXRpbmdNb2Rlc1t3IHx8IFwiaG9yaXpvbnRhbC10YlwiXVtkIHx8IFwibHRyXCJdIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIFwiaW5saW5lXCI7XHJcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsU2lkZSA9IHVzZUNhbGxiYWNrKChzaWRlLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJibG9jay1zdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMF1dO1xyXG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stZW5kXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVsyXV07XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmxpbmUtc3RhcnRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVswXV07XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmxpbmUtZW5kXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5pbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIilbMl1dO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxTaWRlID0gdXNlQ2FsbGJhY2soKHNpZGUsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwidHRiXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJsdHJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gXCJpbmxpbmUtc3RhcnRcIjtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRPcmllbnRhdGlvbiA9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uYmxvY2tPcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAvLyBTaXplIGlzIHJlbGF0aXZlbHkgc2ltcGxlXHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcclxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTG9naWNhbERpcmVjdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VFbGVtZW50U2l6ZVByb3BzKHByb3BzKSksIFtdKSxcclxuICAgICAgICBnZXRFbGVtZW50LFxyXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLFxyXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaXplOiBjb252ZXJ0RWxlbWVudFNpemUsXHJcbiAgICAgICAgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uLFxyXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpZGUsXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxTaWRlXHJcbiAgICB9O1xyXG59XHJcbi8vIEhlbHBlciBmb3IgZXh0cmFjdGluZyBpbmZvIGZyb20gXCJsdHJcIiwgXCJ0dGJcIiwgZXRjLlxyXG5jb25zdCBNID0ge1xyXG4gICAgdDogXCJ0b3BcIixcclxuICAgIGI6IFwiYm90dG9tXCIsXHJcbiAgICBsOiBcImxlZnRcIixcclxuICAgIHI6IFwicmlnaHRcIlxyXG59O1xyXG47XHJcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcclxuICAgIC4uLkhvcml6b250YWxUYkx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcclxufTtcclxuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcclxuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xyXG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbFJ0bCxcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xyXG4gICAgLi4uVmVydGljYWxMckx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xyXG4gICAgLi4uU2lkZXdheXNMdEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XHJcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcclxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxMciA9IHtcclxuICAgIGx0cjogVmVydGljYWxMckx0cixcclxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxyXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcclxufTtcclxuY29uc3QgV3JpdGluZ01vZGVzID0ge1xyXG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcclxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcclxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcclxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcclxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgYXMgdXNlU3RhdGVQIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XHJcbiAqIChpLmUuIHlvdSBjYW4gdXNlIGl0IGluIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaXQgYmVpbmcgYSBkZXBlbmRlbmN5KS5cclxuICpcclxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgLy8gV2Uga2VlcCBib3RoLCBidXQgb3ZlcnJyaWRlIHRoZSBgc2V0U3RhdGVgIGZ1bmN0aW9uYWxpdHlcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVQXSA9IHVzZVN0YXRlUChpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcclxuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcclxuICAgIC8vIHRvIGFsc28gc2V0IG91ciByZWYgdG8gdGhlIG5ldyB2YWx1ZVxyXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IHZhbHVlO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVAocHJldlZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VmFsdWUgPSBjYWxsYmFjayhwcmV2VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSB8fCAodHlwZW9mIHN0YXRlID09PSBcIm51bWJlclwiICYmIGlzTmFOKHN0YXRlKSkpO1xyXG4gICAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGUsIGdldFN0YXRlXTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XHJcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFRhYmxlW3ZhbHVlXTtcclxufVxyXG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcclxuICAgIHJldHVybiBbcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKV07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgd2l0aCBhbiBvcHRpb25hbCBwcmVmaXguXHJcbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxyXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XHJcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBhIGhvb2sgdGhhdCBtb2RpZmllcyBhIHNldCBvZiBwcm9wcyB0byBwcm92aWRlIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIGlmIG9uZSB3YXMgbm90IHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBBbmQgdGhlIHJhbmRvbWx5LWdlbmVyYXRlZCBpZCBpdHNlbGYgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHlvdSB3YW50IHRvIGhhbmRsZSB0aGUgbG9naWMgeW91cnNlbGYgd2l0aG91dCBgdXNlTWVyZ2VkUHJvcHNgLlxyXG4gKlxyXG4gKiBVbmxpa2UgbW9zdCBvdGhlciBgdXNlKlByb3BzYCBob29rcywgdGhlc2UgYXJlIG1vc3RseSBzdGFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XHJcbiAgICBjb25zdCBbcmFuZG9tSWQsIHNldFJhbmRvbUlkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XHJcbiAgICBjb25zdCBbd2F0Y2hQcmVmaXhVcGRhdGVzLCBzZXRXYXRjaFByZWZpeFVwZGF0ZXMsIGdldFdhdGNoUHJlZml4VXBkYXRlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdhdGNoUHJlZml4VXBkYXRlcyA9IGdldFdhdGNoUHJlZml4VXBkYXRlcygpO1xyXG4gICAgICAgIGlmICh3YXRjaFByZWZpeFVwZGF0ZXMpXHJcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XHJcbiAgICAgICAgc2V0V2F0Y2hQcmVmaXhVcGRhdGVzKHRydWUpO1xyXG4gICAgfSwgW3ByZWZpeF0pO1xyXG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxyXG4gICAgLy8gVXNlZCBzbyB0aGF0IGFueSBJRC1yZWZlcmVuY2luZyBwcm9wcyBkb24ndCBuZWVkIHRvIHByb3ZpZGUgdGhlIHNhbWUgdmFsdWUuXHJcbiAgICAvL1xyXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcclxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSB0ZW1wb3JhcnkgbWlzbWF0Y2gsIGJ1dCBpdCdzIGNvcnJlY3RlZCBiZWZvcmUgcmVuZGVyaW5nIGZpbmlzaGVzLlxyXG4gICAgLy8gSXMgdGhpcyBva2F5P1xyXG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IHVzZVJlZmVyZW5jZWRJZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmVmZXJlbmNlZElkUHJvcHMoaWRQcm9wTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGZ1bmN0aW9uICh7IFtpZFByb3BOYW1lXTogZ2l2ZW5JZCwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChpZFByb3BOYW1lID09PSBcImlkXCIpXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VkSWQodXNlZElkMik7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xyXG4gICAgY29uc3QgdXNlUmFuZG9tSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJhbmRvbUlkUHJvcHMocCkge1xyXG4gICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImlkXCIpKHApO1xyXG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJhbmRvbUlkLFxyXG4gICAgICAgIGlkOiB1c2VkSWQsXHJcbiAgICAgICAgZ2V0SWQ6IGdldFVzZWRJZCxcclxuICAgICAgICB1c2VSYW5kb21JZFByb3BzLFxyXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxyXG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3Moc3RyKSB7IH1cclxuZnVuY3Rpb24gYWNjZXB0c0Nzcyhwcm9wKSB7IH1cclxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xyXG4gICAgY29uc3QgeyBpZCwgcmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCgpO1xyXG4gICAgLy9jb25zdCBwMWE6IE1lcmdlZFByb3BzPHsgaWQ6IHN0cmluZyB9LCB7ICB9PiA9IHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pXHJcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmEgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xyXG4gICAgY29uc3QgcDNhID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSkpO1xyXG4gICAgY29uc3QgcDNiID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pKTtcclxuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcclxuICAgIGNvbnN0IHA0YiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHAxYik7XHJcbiAgICAvL3AxYS5pZDtcclxuICAgIHAxYi5pZDtcclxuICAgIHAyYVtcImZvclwiXTtcclxuICAgIHAyYltcImZvclwiXTtcclxuICAgIHAyY1tcImZvclwiXTtcclxuICAgIHAzYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDNiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHAzYltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDRhW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHA0YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogSXQncyBiZWNhdXNlIGl0IHJlc29sdmVzIHRvIFwiaWQ6IHVuZGVmaW5lZCAmIHN0cmluZ1wiIC0tIHRoaXMgc2hvdWxkbid0IGhhcHBlblxyXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMWIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHAyYS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MocDJiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBwM2Euc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAzYi5zdHlsZSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcDRhLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHA0Yi5zdHlsZSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJhbmRvbS1pZC5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xyXG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcclxuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XHJcbmNvbnN0IGNvbW1pdE5hbWUgPSAoXCJfX2NcIiBpbiBvcHRpb25zID8gXCJfX2NcIiA6IFwiY29tbWl0XCIgaW4gb3B0aW9ucyA/IFwiY29tbWl0XCIgOiBcIl9jb21taXRcIiBpbiBvcHRpb25zID8gXCJfY29tbWl0XCIgOiBcIl9fY1wiKTtcclxuLy8gVE9ETzogV2hldGhlciB0aGlzIGdvZXMgaW4gb3B0aW9ucy5kaWZmZWQgb3Igb3B0aW9ucy5fY29tbWl0XHJcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cclxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcclxuLy8gKmFmdGVyKiByZWZzIGFyZSBhcHBsaWVkLCBidXQgd2UgbmVlZCB0byBjb21lIGJlZm9yZSBldmVuIHRoYXRcclxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXHJcbi8vIFxyXG4vLyBBbHNvIGl0J3MgcHJpdmF0ZS5cclxuY29uc3Qgb3JpZ2luYWxDb21taXQgPSBvcHRpb25zW2NvbW1pdE5hbWVdO1xyXG5jb25zdCBuZXdDb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBbaWQsIGVmZmVjdEluZm9dIG9mIHRvUnVuKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkSW5wdXRzID0gcHJldmlvdXNJbnB1dHMuZ2V0KGlkKTtcclxuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcclxuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwPy4oKTtcclxuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwID0gZWZmZWN0SW5mby5lZmZlY3QoKTtcclxuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9SdW4uY2xlYXIoKTtcclxuICAgIG9yaWdpbmFsQ29tbWl0Py4odm5vZGUsIGNvbW1pdFF1ZXVlKTtcclxufTtcclxub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcclxuLyoqXHJcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cclxuICpcclxuICogRXZlcnkgcmVuZGVyLCB3ZSBzZW5kIHRoZSBhcmd1bWVudHMgdG8gYmUgZXZhbHVhdGVkIGFmdGVyIGRpZmZpbmcgaGFzIGNvbXBsZXRlZCxcclxuICogd2hpY2ggaGFwcGVucyBiZWZvcmUuXHJcbiAqXHJcbiAqIEBwYXJhbSBlZmZlY3RcclxuICogQHBhcmFtIGlucHV0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZm9yZUxheW91dEVmZmVjdChlZmZlY3QsIGlucHV0cykge1xyXG4gICAgY29uc3QgW2lkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQoKSk7XHJcbiAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtpZF0pO1xyXG59XHJcbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcclxuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxyXG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcclxuICAgICAgICBuZXdBcmdzPy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUJlZm9yZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdFwiO1xyXG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xyXG4vKipcclxuICogR2l2ZW4gYW4gaW5wdXQgdmFsdWUsIHJldHVybnMgYSBjb25zdGFudCBnZXR0ZXIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZFxyXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXHJcbiAqXHJcbiAqIFRoaXMgdXNlcyBgb3B0aW9ucy5kaWZmZWRgIGluIG9yZGVyIHRvIHJ1biBiZWZvcmUgZXZlcnl0aGluZywgZXZlblxyXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cclxuICpcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlR2V0dGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xyXG4gICAgdXNlQmVmb3JlTGF5b3V0RWZmZWN0KCgpID0+IHsgcmVmLmN1cnJlbnQgPSB2YWx1ZTsgfSwgW3ZhbHVlXSk7XHJcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWYuY3VycmVudCA9PT0gVW5zZXQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVHZXR0ZXIoKSBjYW5ub3QgYmUgY2FsbGVkIGR1cmluZyByZW5kZXIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcclxuLyoqXHJcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcclxuICogc28gdGhhdCBpdCBjYW4gYmUgZXhjbHVkZWQgZnJvbSB0aGUgZGVwZW5kZW5jeSBhcnJheXMgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMuXHJcbiAqXHJcbiAqIERvIG5vdCB1c2UgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UhICBgdXNlTGF5b3V0RWZmZWN0YCBpcyBmaW5lIHRob3VnaC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVDYWxsYmFjayhmbikge1xyXG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcclxuICAgIHJldHVybiB1c2VDYWxsYmFjaygoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIoKSguLi5hcmdzKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWNhbGxiYWNrLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCBhcyB1c2VFZmZlY3ROYXRpdmUsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlRWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXHJcbiAqIHRoYXQgYWxsb3cgYWNjZXNzaW5nIHRoZSBwcmV2aW91cyB2YWx1ZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXHJcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBlZmZlY3RcclxuICogQHBhcmFtIGlucHV0c1xyXG4gKiBAcGFyYW0gaW1wbCBZb3UgY2FuIGNob29zZSB3aGV0aGVyIHRvIHVzZSBgdXNlRWZmZWN0YCBvciBgdXNlTGF5b3V0RWZmZWN0YCBieVxyXG4gKiBwYXNzaW5nIG9uZSBvZiB0aGVtIGFzIHRoaXMgYXJndW1lbnQuIEJ5IGRlZmF1bHQsIGl0J3MgYHVzZUVmZmVjdGAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCBpbXBsID0gdXNlRWZmZWN0TmF0aXZlKSB7XHJcbiAgICBjb25zdCBwcmV2SW5wdXRzID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VzID0gW107XHJcbiAgICAgICAgaWYgKGlucHV0cyAmJiBwcmV2SW5wdXRzLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldklucHV0cy5jdXJyZW50W2ldICE9IGlucHV0c1tpXSlcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzW2ldID0geyBmcm9tOiBwcmV2SW5wdXRzLmN1cnJlbnRbaV0sIHRvOiBpbnB1dHNbaV0gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXQgPSBlZmZlY3QocHJldklucHV0cy5jdXJyZW50LCBjaGFuZ2VzKTtcclxuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbiAgICBpbXBsKGVmZmVjdDIsIGlucHV0cyk7XHJcbn1cclxuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCBhcyB1c2VMYXlvdXRFZmZlY3ROYXRpdmUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCIuL3VzZS1lZmZlY3RcIjtcclxuLyoqXHJcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXHJcbiAqIHRoYXQgYWxsb3cgYWNjZXNzaW5nIHRoZSBwcmV2aW91cyB2YWx1ZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXHJcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBlZmZlY3RcclxuICogQHBhcmFtIGlucHV0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChlZmZlY3QsIGlucHV0cykge1xyXG4gICAgcmV0dXJuIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cywgdXNlTGF5b3V0RWZmZWN0TmF0aXZlKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dCh7IHRpbWVvdXQsIGNhbGxiYWNrLCB0cmlnZ2VySW5kZXggfSkge1xyXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7IHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gbnVsbDsgY2FsbGJhY2soKTsgfSk7XHJcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xyXG4gICAgLy8gU2V0IGFueSB0aW1lIHdlIHN0YXJ0IHRpbWVvdXQuXHJcbiAgICAvLyBVbnNldCBhbnkgdGltZSB0aGUgdGltZW91dCBjb21wbGV0ZXNcclxuICAgIGNvbnN0IHN0YXJ0VGltZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHRpbWVvdXRJc051bGwgPSAodGltZW91dCA9PSBudWxsKTtcclxuICAgIC8vIEFueSB0aW1lIHRoZSB0cmlnZ2VySW5kZXggY2hhbmdlcyAoaW5jbHVkaW5nIG9uIG1vdW50KVxyXG4gICAgLy8gcmVzdGFydCB0aGUgdGltZW91dC4gIFRoZSB0aW1lb3V0IGRvZXMgTk9UIHJlc2V0XHJcbiAgICAvLyB3aGVuIHRoZSBkdXJhdGlvbiBvciBjYWxsYmFjayBjaGFuZ2VzLCBvbmx5IHRyaWdnZXJJbmRleC5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aW1lb3V0SXNOdWxsKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCh0aW1lb3V0SXNOdWxsID09ICh0aW1lb3V0ID09IG51bGwpKTtcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSArKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dChzdGFibGVDYWxsYmFjaywgdGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XHJcbiAgICBjb25zdCBnZXRFbGFwc2VkVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCsobmV3IERhdGUoKSkpIC0gKCsoc3RhcnRUaW1lUmVmLmN1cnJlbnQgPz8gbmV3IERhdGUoKSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0UmVtYWluaW5nVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xyXG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHsgZ2V0RWxhcHNlZFRpbWUsIGdldFJlbWFpbmluZ1RpbWUgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGltZW91dC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VUaW1lb3V0IH0gZnJvbSBcIi4vdXNlLXRpbWVvdXRcIjtcclxuLyoqXHJcbiAqIFdoZW4gdXNlZCBpbiB0YW5kZW0gd2l0aCBgdXNlUm92aW5nVGFiSW5kZXhgLCBhbGxvd3MgY29udHJvbCBvZlxyXG4gKiB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0aGUgYXJyb3cga2V5cy5cclxuICpcclxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgaW5kZXgsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvUHJldiwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlQXJyb3dLZXlzLCBkaXNhYmxlSG9tZUVuZEtleXMgfSkge1xyXG4gICAgbmF2aWdhdGlvbkRpcmVjdGlvbiA/Pz0gXCJlaXRoZXJcIjtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxyXG4gICAgLy8gVE9ETzogS2VlcCB0cmFjayBvZiB0aGUgb3JpZ2luYWwgaW5kZXggYW5kIGtlZXAgaXQsIGF0IGxlYXN0IHVudGlsIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZENvdW50ID4gMCAmJiBpbmRleCA+PSBjaGlsZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luZGV4LCBjaGlsZENvdW50LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0XSk7XHJcbiAgICAvLyBUaGVzZSBhbGxvdyB1cyB0byBtYW5pcHVsYXRlIHdoYXQgb3VyIGN1cnJlbnQgdGFiYmFibGUgY2hpbGQgaXMuXHJcbiAgICAvKmNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleDogbnVtYmVyKSA9PiB7IHNldEluZGV4KGluZGV4IDwgMCA/IChtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICsgaW5kZXgpIDogaW5kZXgpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA+PSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMT8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDEgOiArK2kpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA8IDA/IDAgOiAtLWkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvU3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgwKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KC0xKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pOyovXHJcbiAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmRleCk7XHJcbiAgICBjb25zdCB7IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMgfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oe30pO1xyXG4gICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcclxuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xyXG4gICAgICAgIGxldCBhbGxvd3NCbG9ja05hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImJsb2NrXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcclxuICAgICAgICBsZXQgYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA9IChuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiaW5saW5lXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiYmxvY2tEaXJlY3Rpb25cIiA6IFwiaW5saW5lRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJidHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiYmxvY2tEaXJlY3Rpb25cIiA6IFwiaW5saW5lRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJidHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwicnRsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJIb21lXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVIb21lRW5kS2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJFbmRcIjpcclxuICAgICAgICAgICAgICAgIGlmICghZGlzYWJsZUhvbWVFbmRLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7IHJldHVybiB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biB9LCBwcm9wcykpOyB9LCBbXSksXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBBbGxvd3MgZm9yIHRoZSBzZWxlY3Rpb24gb2YgYSBtYW5hZ2VkIGNoaWxkIGJ5IHR5cGluZyB0aGUgZ2l2ZW4gdGV4dCBhc3NvY2lhdGVkIHdpdGggaXQuXHJcbiAqXHJcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dCwgc2V0SW5kZXggfSkge1xyXG4gICAgLy8gRm9yIHR5cGVhaGVhZCwga2VlcCB0cmFjayBvZiB3aGF0IG91ciBjdXJyZW50IFwic2VhcmNoXCIgc3RyaW5nIGlzIChpZiB3ZSBoYXZlIG9uZSlcclxuICAgIC8vIGFuZCBhbHNvIGNsZWFyIGl0IGV2ZXJ5IDEwMDAgbXMgc2luY2UgdGhlIGxhc3QgdGltZSBpdCBjaGFuZ2VkLlxyXG4gICAgLy8gTmV4dCwga2VlcCBhIG1hcHBpbmcgb2YgdHlwZWFoZWFkIHZhbHVlcyB0byBpbmRpY2VzIGZvciBmYXN0ZXIgc2VhcmNoaW5nLlxyXG4gICAgLy8gQW5kLCBmb3IgdGhlIHVzZXIncyBzYWtlLCBsZXQgdGhlbSBrbm93IHdoZW4gdGhlaXIgdHlwZWFoZWFkIGNhbid0IG1hdGNoIGFueXRoaW5nIGFueW1vcmVcclxuICAgIGNvbnN0IFtjdXJyZW50VHlwZWFoZWFkLCBzZXRDdXJyZW50VHlwZWFoZWFkLCBnZXRDdXJyZW50VHlwZWFoZWFkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlVGltZW91dCh7IHRpbWVvdXQ6IHR5cGVhaGVhZFRpbWVvdXQgPz8gMTAwMCwgY2FsbGJhY2s6ICgpID0+IHsgc2V0Q3VycmVudFR5cGVhaGVhZChudWxsKTsgc2V0SW52YWxpZFR5cGVhaGVhZChudWxsKTsgfSwgdHJpZ2dlckluZGV4OiBjdXJyZW50VHlwZWFoZWFkIH0pO1xyXG4gICAgY29uc3Qgc29ydGVkVHlwZWFoZWFkSW5mbyA9IHVzZVJlZihbXSk7XHJcbiAgICBjb25zdCBbaW52YWxpZFR5cGVhaGVhZCwgc2V0SW52YWxpZFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBIYW5kbGUgdHlwZWFoZWFkIGZvciBpbnB1dCBtZXRob2QgZWRpdG9ycyBhcyB3ZWxsXHJcbiAgICAvLyBFc3NlbnRpYWxseSwgd2hlbiBhY3RpdmUsIGlnbm9yZSBmdXJ0aGVyIGtleXMgXHJcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHdhaXRpbmcgZm9yIGEgQ29tcG9zaXRpb25FbmQgZXZlbnRcclxuICAgIGNvbnN0IFtpbWVBY3RpdmUsIHNldEltZUFjdGl2ZSwgZ2V0SW1lQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIEJlY2F1c2UgY29tcG9zaXRpb24gZXZlbnRzIGZpcmUgKmFmdGVyKiBrZXlkb3duIGV2ZW50cyBcclxuICAgIC8vIChidXQgd2l0aGluIHRoZSBzYW1lIHRhc2ssIHdoaWNoLCBUT0RPLCBjb3VsZCBiZSBicm93c2VyLWRlcGVuZGVudCksXHJcbiAgICAvLyB3ZSBjYW4gdXNlIHRoaXMgdG8ga2VlcCB0cmFjayBvZiB3aGljaCBldmVudCB3ZSdyZSBsaXN0ZW5pbmcgZm9yIG9uIHRoZSBmaXJzdCBrZXlkb3duLlxyXG4gICAgY29uc3QgW25leHRUeXBlYWhlYWRDaGFyLCBzZXROZXh0VHlwZWFoZWFkQ2hhcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5leHRUeXBlYWhlYWRDaGFyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlYWhlYWQodHlwZWFoZWFkID0+ICgodHlwZWFoZWFkID8/IFwiXCIpICsgbmV4dFR5cGVhaGVhZENoYXIpKTtcclxuICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW25leHRUeXBlYWhlYWRDaGFyXSk7XHJcbiAgICBjb25zdCBjb21wYXJhdG9yU2hhcmVkID0gdXNlU3RhYmxlQ2FsbGJhY2soKHNhZmVMaHMsIHNhZmVSaHMpID0+IHtcclxuICAgICAgICBsZXQgY29tcGFyZTtcclxuICAgICAgICAvLyBGb3IgdGhlIHB1cnBvc2VzIG9mIHR5cGVhaGVhZCwgb25seSBjb21wYXJlIGEgc3RyaW5nIG9mIHRoZSBzYW1lIHNpemUgYXMgb3VyIGN1cnJlbnRseSB0eXBlZCBzdHJpbmcuXHJcbiAgICAgICAgLy8gQnkgbm9ybWFsaXppbmcgdGhlbSBmaXJzdCwgd2UgZW5zdXJlIHRoaXMgYnl0ZS1ieS1ieXRlIGhhbmRsaW5nIG9mIHJhdyBjaGFyYWN0ZXIgZGF0YSB3b3JrcyBvdXQgb2theS5cclxuICAgICAgICBzYWZlTGhzID0gc2FmZUxocy5ub3JtYWxpemUoXCJORkRcIik7XHJcbiAgICAgICAgc2FmZVJocyA9IHNhZmVSaHMubm9ybWFsaXplKFwiTkZEXCIpO1xyXG4gICAgICAgIGlmIChjb2xsYXRvcilcclxuICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb21wYXJlID0gc2FmZUxocy50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoc2FmZVJocy50b0xvd2VyQ2FzZSgpID8/IFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBjb21wYXJlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbnNlcnRpbmdDb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbXBhcmU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsaHMgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHJocy50ZXh0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJhdG9yU2hhcmVkKGxocywgcmhzLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGhzIC0gcmhzO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB0eXBlYWhlYWRDb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbXBhcmU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsaHMgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHJocy50ZXh0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIC8vIER1cmluZyB0eXBlYWhlYWQsIGFsbCBzdHJpbmdzIGxvbmdlciB0aGFuIG91cnMgc2hvdWxkIGJlIHRydW5jYXRlZFxyXG4gICAgICAgICAgICAvLyBzbyB0aGF0IHRoZXkncmUgYWxsIGNvbnNpZGVyZWQgZXF1YWxseSBieSB0aGF0IHBvaW50LlxyXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyYXRvclNoYXJlZChsaHMsIHJocy50ZXh0LnN1YnN0cmluZygwLCBsaHMubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaHMgLSByaHM7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uU3RhcnQgPSAoZSkgPT4geyBzZXRJbWVBY3RpdmUodHJ1ZSk7IH07XHJcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvbkVuZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldEltZUFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWVBY3RpdmUgPSBnZXRJbWVBY3RpdmUoKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGUua2V5O1xyXG4gICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcclxuICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICghaW1lQWN0aXZlICYmIGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd2F5IHRoYXQgZG9lc24ndCBzcGxpdCBVVEYtMTYgc3Vycm9nYXRlcy5cclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlYWhlYWQodCA9PiB0ID09PSBudWxsID8gbnVsbCA6IFsuLi50XS5yZXZlcnNlKCkuc2xpY2UoMSkucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUaGUga2V5IHByb3BlcnR5IHJlcHJlc2VudHMgdGhlIHR5cGVkIGNoYXJhY3RlciBPUiB0aGUgXCJuYW1lZCBrZXkgYXR0cmlidXRlXCIgb2YgdGhlIGtleSBwcmVzc2VkLlxyXG4gICAgICAgICAgICAvLyBUaGVyZSdzIG5vIGRlZmluaXRlIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlLCBidXQgZm9yIGFsbCBpbnRlbnRzIGFuZCBwdXJwb3Nlc1xyXG4gICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gb25lLWNoYXJhY3RlciBuYW1lcywgYW5kIHRoZXJlIGFyZSBubyBub24tQVNDSUktYWxwaGEgbmFtZXMuXHJcbiAgICAgICAgICAgIC8vIFRodXMsIGFueSBvbmUtY2hhcmFjdGVyIG9yIG5vbi1BU0NJSSB2YWx1ZSBmb3IgYGtleWAgaXMgKmFsbW9zdCBjZXJ0YWlubHkqIGEgdHlwZWQgY2hhcmFjdGVyLlxyXG4gICAgICAgICAgICBjb25zdCBpc0NoYXJhY3RlcktleSA9IChrZXkubGVuZ3RoID09PSAxIHx8ICEvXltBLVphLXpdLy50ZXN0KGtleSkpO1xyXG4gICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJLZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gXCIgXCIgJiYgKGdldEN1cnJlbnRUeXBlYWhlYWQoKSA/PyBcIlwiKS50cmltKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBiZWNhdXNlIGEgc3BhY2ViYXIgY2FuJ3QgZXZlciBcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWF0ZSBhIHR5cGVhaGVhZCwgb25seSBjb250aW51ZSBvbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKFNwZWNpZmljYWxseSwgbGV0IHRoZSBldmVudCBjb250aW51ZSBwcm9wYWdhdGlvbiBpbiB0aGlzIGNhc2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBXb24ndCBiZSB0cnVlIGZvciB0aGUgZmlyc3Qga2V5ZG93blxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3aWxsIGJlIG92ZXJ3cml0dGVuIGJlZm9yZSB1c2VMYXlvdXRFZmZlY3QgaXMgY2FsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWN0dWFsbHkgYXBwbHkgdGhlIGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW1lQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25Db21wb3NpdGlvblN0YXJ0LCBvbkNvbXBvc2l0aW9uRW5kLCB9LCBwcm9wcyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBIYW5kbGUgY2hhbmdlcyBpbiB0eXBlYWhlYWQgdGhhdCBjYXVzZSBjaGFuZ2VzIHRvIHRoZSB0YWJiYWJsZSBpbmRleFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFR5cGVhaGVhZCAmJiBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBzb3J0ZWRUeXBlYWhlYWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIHR5cGVhaGVhZENvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBoYXMgdHlwZWQgYW4gZW50cnkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAvLyAob3IgbW9yZSBzcGVjaWZpY2FsbHkgXCJmb3Igd2hpY2ggdGhlcmUgaXMgbm8gZW50cnkgdGhhdCBzdGFydHMgd2l0aCB0aGF0IGlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICBXZSBrbm93IHJvdWdobHkgd2hlcmUsIGluIHRoZSBzb3J0ZWQgYXJyYXkgb2Ygc3RyaW5ncywgb3VyIG5leHQgdHlwZWFoZWFkIGxvY2F0aW9uIGlzLlxyXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cclxuICAgICAgICAgICAgICAgICAgVG8gY29udmVydCBvdXIgc29ydGVkIGluZGV4IHRvIHRoZSB1bnNvcnRlZCBpbmRleCB3ZSBuZWVkLCB3ZSBoYXZlIHRvIGZpbmQgdGhlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgdGhhdCBtYXRjaGVzIHVzICphbmQqIChpZiBhbnkgc3VjaCBleGlzdCkgaXMgKmFmdGVyKiBvdXIgY3VycmVudCBzZWxlY3Rpb24uXHJcblxyXG4gICAgICAgICAgICAgICAgICBJbiBvdGhlciB3b3JkcywgdGhlIG9ubHkgd2F5IHR5cGVhaGVhZCBtb3ZlcyBiYWNrd2FyZHMgcmVsYXRpdmUgdG8gb3VyIGN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24gaXMgaWYgdGhlIG9ubHkgb3RoZXIgb3B0aW9uIGlzIGJlaGluZCB1cy5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEl0J3Mgbm90IHNwZWNpZmllZCBpbiBXQUktQVJJQSB3aGF0IHRvIGRvIGluIHRoYXQgY2FzZS4gIEkgc3VwcG9zZSB3cmFwIGJhY2sgdG8gdGhlIHN0YXJ0P1xyXG4gICAgICAgICAgICAgICAgICBUaG91Z2ggdGhlcmUncyBhbHNvIGEgY2FzZSBmb3IganVzdCBnb2luZyB1cHdhcmRzIHRvIHRoZSBuZWFyZXN0IHRvIHByZXZlbnQganVtcGluZXNzLlxyXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxyXG4gICAgICAgICAgICAgICAgICBJIGR1bm5vLiBHb2luZyBiYWNrIHRvIHRoZSBzdGFydCBpcyB0aGUgc2ltcGxpc3QgdGhvdWdoLlxyXG5cclxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcclxuICAgICAgICAgICAgICAgICAgc2NhbiBiYWNrd2FyZHMgYW5kIGZvcndhcmRzIHRocm91Z2ggYWxsIGFkamFjZW50IGVudHJpZXMgdGhhdCBhbHNvIGNvbXBhcmUgZXF1YWxseSBzbyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgIHdlIGNhbiBmaW5kIHRoZSBvbmUgd2hvc2UgYHVuc29ydGVkSW5kZXhgIGlzIHRoZSBsb3dlc3QgYW1vbmdzdCBhbGwgb3RoZXIgZXF1YWwgc3RyaW5nc1xyXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxyXG5cclxuICAgICAgICAgICAgICAgICAgVE9ETzogVGhlIGJpbmFyeSBzZWFyY2ggc3RhcnRzIHRoaXMgb2ZmIHdpdGggYSBzb2xpZCBPKGxvZyBuKSwgYnV0IG9uZS1jaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcclxuICAgICAgICAgICAgICAgICAgTyhuKmxvZyBuKS4gVGhpcyBpcyBhbm5veWluZyBidXQgcHJvYmFibHkgbm90IGVhc2lseSBzb2x2YWJsZT8gVGhlcmUgY291bGQgYmUgYW5cclxuICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uIGZvciBvbmUtY2hhcmFjdGVyIHN0cmluZ3MsIGJ1dCB0aGF0J3MganVzdCBraWNraW5nIHRoZSBjYW4gZG93blxyXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBhcmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBjYW5kaWRhdGVzJyBwb3NpdGlvbnMgaW4gYm90aCBvdXIgc29ydGVkIGFycmF5IGFuZCB0aGUgdW5zb3J0ZWQgRE9NLlxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4QWxsID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSB0d28gYXJlIG9ubHkgc2V0IGZvciBlbGVtZW50cyB0aGF0IGFyZSBhaGVhZCBvZiB1cywgYnV0IHRoZSBwcmluY2lwbGUncyB0aGUgc2FtZSBvdGhlcndpc2VcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCZXN0Rml0ID0gKHUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSB1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQpICYmIHUgPiAoZ2V0SW5kZXgoKSA/PyAtSW5maW5pdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgdHlwZWFoZWFkQ29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAtLWk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgdHlwZWFoZWFkQ29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5kZXgoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2xvd2VzdFNvcnRlZEluZGV4TmV4dF0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleEFsbF0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFR5cGVhaGVhZF0pO1xyXG4gICAgY29uc3QgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKHsgdGV4dCwgLi4uaSB9KSA9PiB7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEZpbmQgd2hlcmUgdG8gaW5zZXJ0IHRoaXMgaXRlbS5cclxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgYWxsIGluZGV4IHZhbHVlcyBzaG91bGQgYmUgdW5pcXVlLCB0aGUgcmV0dXJuZWQgc29ydGVkSW5kZXhcclxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgcmVmZXIgdG8gYSBuZXcgbG9jYXRpb24gKGkuZS4gYmUgbmVnYXRpdmUpICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHNvcnRlZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgdGV4dCwgaW5zZXJ0aW5nQ29tcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA8IDAgfHwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W3NvcnRlZEluZGV4XS50ZXh0ID09IHRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2UoLXNvcnRlZEluZGV4IC0gMSwgMCwgeyB0ZXh0LCB1bnNvcnRlZEluZGV4OiBpLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZShzb3J0ZWRJbmRleCwgMCwgeyB0ZXh0LCB1bnNvcnRlZEluZGV4OiBpLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHVubW91bnRpbmcsIGZpbmQgd2hlcmUgd2Ugd2VyZSBhbmQgcmVtb3ZlIG91cnNlbHZlcy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZ2Fpbiwgd2Ugc2hvdWxkIGFsd2F5cyBmaW5kIG91cnNlbHZlcyBiZWNhdXNlIHRoZXJlIHNob3VsZCBiZSBubyBkdXBsaWNhdGUgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgdW5pcXVlLlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGluc2VydGluZ0NvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4ID49IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGV4dF0pO1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLFxyXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyxcclxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxyXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXHJcbiAqXHJcbiAqIEl0J3MgdXNlZCBoZXJlIHRvIHF1aWNrbHkgZmluZCBhIGdvb2Qgc3BvdCB0byBzdGFydCBzZWFyY2hpbmcgZm9yIG91ciBuZXh0IHR5cGVhaGVhZCBjYW5kaWRhdGUuXHJcbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcclxuICogQHBhcmFtIHdhbnRlZCBUaGUgdmFsdWUgeW91J2QgbGlrZSB0byBmaW5kXHJcbiAqIEBwYXJhbSBjb21wYXJhdG9yIENvbXBhcmVzIGB3YW50ZWRgIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgaW4gYGFycmF5YFxyXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXHJcbiAqIFRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGlzIG51bWJlciwgbWludXMgb25lLCBpcyB3aGVyZSBgd2FudGVkYCAqd291bGQqIGJlIGZvdW5kIGlmIGl0ICp3YXMqIGluIGBhcnJheWBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xyXG4gICAgdmFyIGZpcnN0SW5kZXggPSAwO1xyXG4gICAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICB2YXIgdGVzdEluZGV4ID0gKGxhc3RJbmRleCArIGZpcnN0SW5kZXgpID4+IDE7XHJcbiAgICAgICAgdmFyIGNvbXBhcmlzb25SZXN1bHQgPSBjb21wYXJhdG9yKHdhbnRlZCwgYXJyYXlbdGVzdEluZGV4XSk7XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSB0ZXN0SW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSB0ZXN0SW5kZXggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRlc3RJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLWZpcnN0SW5kZXggLSAxO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cclxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cclxuICpcclxuICogVGhpcyBob29rIGlzIHNsaWdodGx5IG1vcmUgY29tcGxpY2F0ZWQgaW4gdGhhdCBpdCByZXR1cm5zIGJvdGggYVxyXG4gKiBwcm9wLW1vZGlmeWluZyBob29rLCBidXQgYWxzbyBhIGhvb2sgdGhhdCBlYWNoIGNoaWxkIHdpbGwgbmVlZFxyXG4gKiB0byB1c2U6IGB1c2VNYW5hZ2VkQ2hpbGRgLiAgSXQncyBzdGFibGUgYWNyb3NzIHJlbmRlcnMsIHNvIGp1c3RcclxuICogdG9zcyBpdCBpbnRvIGEgYENvbnRleHRgIHNvIHRoZSBjaGlsZHJlbiBjYW4gaGF2ZSBhY2Nlc3MgdG8gaXQuXHJcbiAqIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHRoZSBjaGlsZCB3aXRoIHRoZSBwYXJlbnQgYW5kIHByb3ZpZGVzXHJcbiAqIGl0IHdpdGggYW55IHJlcXVlc3RlZCBpbmZvcm1hdGlvbiwgYnV0IGRvZXNuJ3QgZG8gYW55dGhpbmcgZWxzZVxyXG4gKiB1bnRpbCBpdCB1bm1vdW50cyBhbmQgcmV0cmFjdHMgdGhhdCBpbmZvcm1hdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZE1hbmFnZXIoKSB7XHJcbiAgICAvLyBUaGlzIGlzIGJsaW5kbHkgdXBkYXRlZCBhbnkgdGltZSBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50cyBpdHNlbGYuXHJcbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXHJcbiAgICAvLyB3ZSBhbHNvIHJlLXJlbmRlci5cclxuICAgIGNvbnN0IFtjaGlsZFVwZGF0ZUluZGV4LCBzZXRDaGlsZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Nb3VudGVkLCBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCwgZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG90YWxDaGlsZHJlblVub3VudGVkLCBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCA9IHRvdGFsQ2hpbGRyZW5Nb3VudGVkIC0gdG90YWxDaGlsZHJlblVub3VudGVkO1xyXG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdIC8qKiBUT0RPOiBBbnkgcHJvYmxlbXMgY2F1c2VkIGJ5IHVzaW5nIGFuIGFycmF5IHdoZW4gaXQgc2hvdWxkIGJlIGFuIG9iamVjdD8gKi8pO1xyXG4gICAgY29uc3QgbW91bnRlZENoaWxkcmVuID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IG1vdW50T3JkZXIgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IGluZGljZXNCeUVsZW1lbnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IGRlbGV0ZWRJbmRpY2VzID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICAvLyBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgaW5kaWNlcyB0aGF0IGhhdmUgXCJvdmVyLW1vdW50ZWRcIiBhbmQgYnkgaG93IG11Y2guXHJcbiAgICAvLyBXZSBuZWVkIHRoaXMgc28gdGhhdCB3ZSBkb24ndCBlcmFzZSBzYXZlZCBpbmZvcm1hdGlvbiB3aGVuIGEgY29tcG9uZW50XHJcbiAgICAvLyBcIm92ZXJtb3VudHNcIiBvdmVyIGFub3RoZXIgd2hpY2ggdGhlbiwgY29ycmVjdGx5LCBzd2l0Y2hlcyAqaXRzZWxmKiB0byBzb21ldGhpbmcgZWxzZS5cclxuICAgIC8vIEluIGdlbmVyYWwsIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIHdoZW4gY29tcG9uZW50cyBhcmUgc3dhcHBpbmcgYmV0d2VlbiBpbmRpY2VzLlxyXG4gICAgLy8gQnkgdGhlIHRpbWUgdGhleSdyZSBkb25lLCB0aGlzIG1hcCBzaG91bGQgYmUgYWxsIDBzIGFnYWluLCBhdCB3aGljaCBwb2ludFxyXG4gICAgLy8gaXQncyBva2F5IHRvIGFjdHVhbGx5IHJ1biB0aGUgdW5tb3VudCBjb2RlLlxyXG4gICAgLy8gXHJcbiAgICAvLyBUT0RPOiB0aHJvdyBhIGNvbnNvbGUuYXNzZXJ0IHNvbWV3aGVyZSB0byBtYWtlIHVwIGZvciB0aGUgbG9zdCBcclxuICAgIC8vIFwiYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJ3cml0ZSB0aGlzIGNoaWxkJ3MgaW5kZXghXCIgYXNzZXJ0aW9uLlxyXG4gICAgLy8gTmFtZWx5LCBpcyB0aGlzIG1hcCBhbGwgMHMgd2hlbiB0aGUgcGFyZW50IGVsZW1lbnQgcmUtcmVuZGVycz8gXHJcbiAgICAvLyBQcm9iYWJseSBub3QgYmVjYXVzZSBvZiBzZXRDaGlsZFVwZGF0ZUluZGV4XHJcbiAgICBjb25zdCBvdmVybW91bnRDb3VudCA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG4gICAgY29uc3QgZ2V0TW91bnRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyByZXR1cm4gbW91bnRPcmRlci5jdXJyZW50LmdldChpbmRleCk7IH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5zZXQoZWxlbWVudCwgaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlZEluZGljZXMuY3VycmVudC5kZWxldGUoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJtb3VudENvdW50LmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZEluZGljZXMuY3VycmVudC5hZGQoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZm8uaW5kZXggPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W21hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAtIDFdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFtdKSB9KTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBnZXRUb3RhbENoaWxkcmVuTW91bnRlZCgpO1xyXG4gICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIGluZGV4KTtcclxuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcclxuICAgICAgICAgICAgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQodCA9PiArK3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW91bnRPcmRlci5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50W2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQodCA9PiArK3QpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIFtpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZSBnZW5lcmFsbHkuXHJcbiAgICAgICAgLy8gKkRvbid0IHJlLXJlbmRlciosIG90aGVyd2lzZSB3ZSdkIGJlIHN0dWNrIGluIGFuXHJcbiAgICAgICAgLy8gaW5maW5pdGUgbG9vcCBldmVyeSB0aW1lIGFuIGFub255bW91cyBmdW5jdGlvbiBpcyBwYXNzZWQuXHJcbiAgICAgICAgLy8gSXQgY29tZXMgaW4gZnJvbSB0aGUgcHJvcHMgc28gdGhlIGNoaWxkIHdhcyBhbHJlYWR5IHVwZGF0ZWQgYnkgaXQgLS1cclxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBwYXJlbnQgdG8gcmUtcmVuZGVyIGV2ZXJ5IHNpbmdsZSBjaGlsZCBhbnkgdGltZVxyXG4gICAgICAgIC8vIFwib25DbGlja1wiIHVwZGF0ZXMgb3Igd2hhdGV2ZXIuICBUaGUgcmVsZXZhbnQgY2hpbGQgYWxyZWFkeSBrbm93cyxcclxuICAgICAgICAvLyBhbmQgdGhhdCdzIHdoYXQgbWF0dGVycy5cclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcclxuICAgICAgICB9LCBbLi4uT2JqZWN0LmVudHJpZXMoaW5mbykuZmxhdCgpXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VNYW5hZ2VkQ2hpbGQsXHJcbiAgICAgICAgY2hpbGRDb3VudDogY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkLFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQsXHJcbiAgICAgICAgbW91bnRlZENoaWxkcmVuOiBtb3VudGVkQ2hpbGRyZW4uY3VycmVudCxcclxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50OiBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQsXHJcbiAgICAgICAgdG90YWxDaGlsZHJlbk1vdW50ZWQsXHJcbiAgICAgICAgdG90YWxDaGlsZHJlblVub3VudGVkLFxyXG4gICAgICAgIGdldE1vdW50SW5kZXgsXHJcbiAgICAgICAgZGVsZXRlZEluZGljZXM6IGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnRcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgbGV0dGluZyBjaGlsZHJlbiBrbm93IHdoZW4gdGhleSBhcmUgb3IgYXJlIG5vdCB0aGVcclxuICogY3VycmVudCBzZWxlY3RlZC9leHBhbmRlZC9mb2N1c2VkL3doYXRldmVyIGNoaWxkLlxyXG4gKlxyXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgd2hlbiBjaGlsZHJlbiBhcmUgbW91bnRlZCAmIHVubW91bnRlZCBhbmQgc3VjaC5cclxuICpcclxuICogV2hpbGUgaXQgd2lsbCBiZSBjYWxsZWQgb25jZSBmb3IgZXZlcnkgY2hpbGQgb24gbW91bnQsIGFmdGVyIHRoYXQgc2V0RmxhZ1xyXG4gKiBpcyBndWFyYW50ZWVkIHRvIG9ubHkgYmUgY2FsbGVkIG9uY2Ugb24gYWN0aXZhdGlvbiBhbmQgb25jZSBvbiBkZWFjdGl2YXRpb24sXHJcbiAqIHNvIGl0J3MgZ2VuZXJhbGx5IHNhZmUgdG8gcHV0IHNpZGUgZWZmZWN0cyBpbnNpZGUgaWYgbmVjZXNzYXJ5LlxyXG4gKiBJdCdzIGFsc28gc2FmZSB0byBtYWtlIGl0IG5vbi1zdGFibGUuXHJcbiAqXHJcbiAqIEBwYXJhbSBhY3RpdmF0ZWRJbmRleCBXaGF0IGluZGV4IHRoZSBjdXJyZW50IHNlbGVjdGVkIChldGMuKSBjaGlsZCBpc1xyXG4gKiBAcGFyYW0gbGVuZ3RoIEhvdyBtYW55IGNoaWxkcmVuIGV4aXN0IChhcyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKVxyXG4gKiBAcGFyYW0gc2V0RmxhZyBBIGZ1bmN0aW9uIHRoYXQgcHJvYmFibHkgbG9va3MgbGlrZSAoaSwgZmxhZykgPT4gbWFuYWdlZENoaWxkcmVuW2ldLnNldEFjdGl2ZShmbGFnKVxyXG4gKiBAcGFyYW0gdXNlRWZmZWN0IFdoaWNoIHZlcnNpb24gb2YgdXNlRWZmZWN0IHRvIHVzZS4gRGVmYXVsdCBpcyBgdXNlTGF5b3V0RWZmZWN0YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZEZsYWcoeyBhY3RpdmF0ZWRJbmRleCwgY2xvc2VzdEZpdCwgbWFuYWdlZENoaWxkcmVuLCBzZXRDaGlsZEZsYWcsIGdldENoaWxkRmxhZywgdXNlRWZmZWN0IH0pIHtcclxuICAgIHVzZUVmZmVjdCA/Pz0gdXNlTGF5b3V0RWZmZWN0O1xyXG4gICAgaWYgKGNsb3Nlc3RGaXQpXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodHlwZW9mIGFjdGl2YXRlZEluZGV4ID09IFwibnVtYmVyXCIgfHwgYWN0aXZhdGVkSW5kZXggPT0gbnVsbCk7XHJcbiAgICAvLyBXaGVuZXZlciB3ZSByZS1yZW5kZXIsIG1ha2Ugc3VyZSB0aGF0IGFueSBjaGlsZHJlbiB0aGF0IGhhdmUgbW91bnRlZFxyXG4gICAgLy8gaGF2ZSB0aGVpciBmbGFncyBwcm9wZXJseSBzZXQuICBXZSBrbm93IGl0J3MgdW5zZXQgaWYgaXQgd2FzIG51bGwsXHJcbiAgICAvLyBpbiB3aGljaCBjYXNlIHdlIGp1c3Qgc2V0IGl0IHRvIHRydWUgb3IgZmFsc2UuXHJcbiAgICAvL1xyXG4gICAgLy8gQW5kLCBJIG1lYW4sIGFzIGxvbmcgYXMgd2UncmUgYWxyZWFkeSBpdGVyYXRpbmcgdGhyb3VnaCBldmVyeSBjaGlsZFxyXG4gICAgLy8gb24gZXZlcnkgcmVuZGVyIHRvIGNoZWNrIGZvciBuZXdseSBtb3VudGVkIGNoaWxkcmVuLCBtaWdodCBhcyB3ZWxsXHJcbiAgICAvLyBqdXN0IGhhbmRsZSBjaGFuZ2VkIGluIHRoZSBhY3RpdmF0ZWRJbmRleCBoZXJlIHRvby5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gVE9ETzogV2UgaGF2ZSBsaW1pdGVkIGluZm9ybWF0aW9uIGFib3V0IHdoZW4gYSBjaGlsZCBtb3VudHMgb3IgdW5tb3VudHNcclxuICAgICAgICAvLyBhbmQgc28gd2UgZG9uJ3Qga25vdyB3aGVyZSB0byBsb29rIGZvciBhbnkgbnVsbCBlbnRyaWVzIHRoYXQgbmVlZCBjaGFuZ2luZy5cclxuICAgICAgICAvLyBXZSBrbm93IHdoZW4gYWN0aXZhdGVkSW5kZXggY2hhbmdlcyBhbmQgd2hhdCBpdCB3YXMsIGJ1dCBub3QgbXVjaCBlbHNlLlxyXG4gICAgICAgIC8vIExvb3Bpbmcgb3ZlciBldmVyeSBjaGlsZCAqd29ya3MqLCBhbmQgaXQncyBub3QgYW4gZXhwZW5zaXZlIGxvb3AgYnkgYW55IG1lYW5zLFxyXG4gICAgICAgIC8vIGJ1dCwgbGlrZSwgZXVnaC5cclxuICAgICAgICAvLyBBbHNvLCBiZWZvcmUgd2UgZG8gYW55dGhpbmcsIHNlZSBpZiB3ZSBuZWVkIHRvIFwiY29ycmVjdFwiIGFjdGl2YXRlZEluZGV4LlxyXG4gICAgICAgIC8vIEl0IGNvdWxkIGJlIHBvaW50aW5nIHRvIGEgY2hpbGQgdGhhdCBkb2Vzbid0IGV4aXN0LCBhbmQgaWYgY2xvc2VzdEZpdCBpcyBnaXZlbixcclxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGFkanVzdCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBhIHZhbGlkIGNoaWxkLlxyXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiAmJiBBcnJheS5pc0FycmF5KG1hbmFnZWRDaGlsZHJlbikgJiYgbWFuYWdlZENoaWxkcmVuW2FjdGl2YXRlZEluZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIE9oIGRlYXIuIEFyZSB3ZSBhY3RpdmVseSBjb3JyZWN0aW5nIHRoaXM/XHJcbiAgICAgICAgICAgIGlmIChjbG9zZXN0Rml0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPaCBkZWFyLlxyXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIHVwIGFuZCBkb3duIHRoZSBsaXN0IG9mIGNoaWxkcmVuIGZvciBhbnkgdGhhdCBhY3R1YWxseSBleGlzdC5cclxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hIaWdoID0gYWN0aXZhdGVkSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaExvdyA9IGFjdGl2YXRlZEluZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgoc2VhcmNoTG93ID49IDAgJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaExvd10gPT0gbnVsbCkgfHwgKHNlYXJjaEhpZ2ggPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hIaWdoXSA9PSBudWxsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICsrc2VhcmNoSGlnaDtcclxuICAgICAgICAgICAgICAgICAgICAtLXNlYXJjaExvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVkSW5kZXggPSBzZWFyY2hMb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoSGlnaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIGRvbmUgdGhhdCwgaWYgYW55IHZhbGlkIGNoaWxkcmVuIGV4aXN0LCB3ZSd2ZSByZXNldCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBpdCBpbnN0ZWFkLlxyXG4gICAgICAgICAgICAgICAgLy8gTm93IHdlJ2xsIGZhbGwgdGhyb3VnaCB0byB0aGUgZm9yIGxvb3Agc2V0IGFuZCB1bnNldCBvdXIgZmxhZ3MgYmFzZWQgb24gdGhpcyBcImNvcnJlY3RlZFwiIHZhbHVlLlxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGNvcnJlY3QgaXQgb3Igc2F2ZSBpdCBhbnl3aGVyZSBiZWNhdXNlIHdlJ2QgdmVyeSBtdWNoIGxpa2UgdG8gcmV0dXJuIHRvIGl0XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hpbGQgcmVtb3VudHMgaXRzZWxmLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hbmFnZWRDaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChnZXRDaGlsZEZsYWcoaSkgIT0gc2hvdWxkQmVTZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZEZsYWcoaSwgc2hvdWxkQmVTZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhtYW5hZ2VkQ2hpbGRyZW4pLmZvckVhY2goKFtpLCBpbmZvXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3VsZEJlU2V0ID0gKGkgPT0gYWN0aXZhdGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldENoaWxkRmxhZyhpKSAhPSBzaG91bGRCZVNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGlsZC1tYW5hZ2VyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQ2hpbGRGbGFnLCB1c2VDaGlsZE1hbmFnZXIgfSBmcm9tIFwiLi91c2UtY2hpbGQtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEltcGxlbWVudHMgYSByb3ZpbmcgdGFiaW5kZXggc3lzdGVtIHdoZXJlIG9ubHkgb25lIFwiZm9jdXNhYmxlXCJcclxuICogY29tcG9uZW50IGluIGEgc2V0IGlzIGFibGUgdG8gcmVjZWl2ZSBhIHRhYiBmb2N1cy4gKldoaWNoKlxyXG4gKiBvZiB0aG9zZSBlbGVtZW50cyByZWNlaXZlcyBmb2N1cyBpcyBkZXRlcm1pbmVkIGJ5IHlvdSwgYnV0IGl0J3NcclxuICogcmVjb21tZW5kZWQgdG8gb2ZmbG9hZCB0aGF0IGxvZ2ljIHRoZW4gdG8gYW5vdGhlciBob29rLCBsaWtlXHJcbiAqIGB1c2VMaW5lYXJOYXZpZ2F0aW9uYCwgd2hpY2ggbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZVxyXG4gKiBlbGVtZW50IHdpdGggdGhlIGFycm93IGtleXMsIGB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uYCwgd2hpY2hcclxuICogbGV0cyB5b3UgY2hhbmdlIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHR5cGVhaGVhZCwgb3JcclxuICogYHVzZUxpc3ROYXZpZ2F0aW9uYCBpZiB5b3UganVzdCB3YW50IGV2ZXJ5dGhpbmcgYnVuZGxlZCB0b2dldGhlci5cclxuICpcclxuICogTm90ZSB0aGF0IHRoZSBjaGlsZCBob29rIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gbXVzdCBiZSB1c2VkXHJcbiAqIGJ5IGV2ZXJ5IGNoaWxkIHRoYXQgdXNlcyB0aGlzIHJvdmluZyB0YWJpbmRleCBsb2dpYy4gIFRoZVxyXG4gKiBwcm9wLW1vZGlmeWluZyBob29rICp0aGF0KiBob29rIHJldHVybnMgc2hvdWxkIHRoZW4gYmUgdXNlZFxyXG4gKiBvbiB0aGUgY2hpbGQncyBlbGVtZW50LCBhcyB3ZWxsIGFzIGFueSBvdGhlciBlbGVtZW50cyB5b3UnZCBsaWtlXHJcbiAqIHRvIGJlIGV4cGxpY2l0bHkgbWFkZSB1bnRhYmJhYmxlIHRvby5cclxuICpcclxuICogYHNob3VsZEZvY3VzT25DaGFuZ2VgIHNob3VsZCByZXR1cm4gdHJ1ZSBpZiBmb2N1cyBpc1xyXG4gKiBjb250YWluZWQgd2l0aGluIHdoYXRldmVyIGVsZW1lbnQgY29udGFpbnMgdGhlIHJvdmluZyB0YWIgaW5kZXguXHJcbiAqIEdlbmVyYWxseSBhcyBzaW1wbGUgYXMgdGhlIGZvbGxvd2luZzpcclxuICogYGBgXHJcbiAqIGNvbnN0IFtmb2N1c2VkSW5uZXIsIHNldEZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAqIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXM8UGFyZW50RWxlbWVudD4oeyBzZXRGb2N1c2VkSW5uZXIgfSk7XHJcbiAqIGNvbnN0IGZvY3VzT25DaGFuZ2UgPSAoZm9jdXNlZElubmVyICE9IGZhbHNlKTtcclxuICogYGBgXHJcbiAqIEl0J3Mgbm90IGluY2x1ZGVkIGhlcmUgYmVjYXVzZSBgdXNlUm92aW5nVGFiSW5kZXhgIGRvZXNuJ3Qga25vd1xyXG4gKiBhbnl0aGluZyBhYm91dCB0aGUgY29udGFpbmVyIGVsZW1lbnQsIG9ubHkgY2hpbGRyZW4gZWxlbWVudHMuXHJcbiAqIEFuZCBqdXN0IGFzIHdlbGwhIENoaWxkcmVuIHNob3VsZCBiZSBhbGxvd2VkIGF0IHRoZSByb290LFxyXG4gKiByZWdhcmRsZXNzIG9mIGlmIGl0J3MgdGhlIHdob2xlIGFwcCBvciBqdXN0IGEgZ2l2ZW4gY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4KHsgc2hvdWxkRm9jdXNPbkNoYW5nZTogZm9jLCB0YWJiYWJsZUluZGV4IH0pIHtcclxuICAgIGNvbnN0IGdldFNob3VsZEZvY3VzT25DaGFuZ2UgPSB1c2VTdGFibGVHZXR0ZXIoZm9jKTtcclxuICAgIGNvbnN0IGdldFRhYmJhYmxlSW5kZXggPSB1c2VTdGFibGVHZXR0ZXIodGFiYmFibGVJbmRleCk7XHJcbiAgICBjb25zdCBwcmV2VGFiYmFibGUgPSB1c2VSZWYoLUluZmluaXR5KTtcclxuICAgIC8vIENhbGwgdGhlIGhvb2sgdGhhdCBhbGxvd3MgdXMgdG8gY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHdobyBwcm92aWRlIGl0XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgY2hpbGRDb3VudCwgdXNlTWFuYWdlZENoaWxkLCBpbmRpY2VzQnlFbGVtZW50LCAuLi5yZXN0IH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcclxuICAgIC8vIEFueSB0aW1lIHRoZSB0YWJiYWJsZSBpbmRleCBjaGFuZ2VzLFxyXG4gICAgLy8gbm90aWZ5IHRoZSBwcmV2aW91cyBjaGlsZCB0aGF0IGl0J3Mgbm8gbG9uZ2VyIHRhYmJhYmxlLFxyXG4gICAgLy8gYW5kIG5vdGlmeSB0aGUgbmV4dCBjaGlsZCB0aGF0IGlzIGFsbG93ZWQgdG8gYmUgdGFiYmVkIHRvLlxyXG4gICAgdXNlQ2hpbGRGbGFnKHtcclxuICAgICAgICBhY3RpdmF0ZWRJbmRleDogdGFiYmFibGVJbmRleCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXHJcbiAgICAgICAgY2xvc2VzdEZpdDogdHJ1ZSxcclxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpbmRleCwgdGFiYmFibGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5baW5kZXhdPy5zZXRUYWJiYWJsZSh0YWJiYWJsZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpbmRleCkgPT4gKG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LmdldFRhYmJhYmxlKCkgPz8gbnVsbClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9jdXNTZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YWJiYWJsZUluZGV4ICE9IG51bGwpXHJcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XS5zZXRUYWJiYWJsZSh0cnVlKTtcclxuICAgIH0sIFt0YWJiYWJsZUluZGV4XSk7XHJcbiAgICBjb25zdCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCBbcnJhZkluZGV4LCBzZXRScmFmSW5kZXhdID0gdXNlU3RhdGUoMSk7XHJcbiAgICAgICAgY29uc3QgcmVyZW5kZXJBbmRGb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0UnJhZkluZGV4KGkgPT4gKytpKTsgfSwgW10pO1xyXG4gICAgICAgIGNvbnN0IFt0YWJiYWJsZSwgc2V0VGFiYmFibGUsIGdldFRhYmJhYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGxldCBuZXdJbmZvID0ge1xyXG4gICAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgICByZXJlbmRlckFuZEZvY3VzLFxyXG4gICAgICAgICAgICBzZXRUYWJiYWJsZTogdXNlQ2FsbGJhY2soKHRhYmJhYmxlKSA9PiB7IHNldFRhYmJhYmxlKHRhYmJhYmxlKTsgfSwgW10pLFxyXG4gICAgICAgICAgICBnZXRUYWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wcyB9ID0gdXNlTWFuYWdlZENoaWxkKG5ld0luZm8pO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0YWJiYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkRm9jdXNPbkNoYW5nZSA9IGdldFNob3VsZEZvY3VzT25DaGFuZ2UoKSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZEZvY3VzT25DaGFuZ2UgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3RhYmJhYmxlLCBycmFmSW5kZXhdKTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyB0YWJJbmRleCB9LCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlTWFuYWdlZENoaWxkUHJvcHMoeyB0YWJJbmRleCB9KSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLFxyXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcclxuICAgICAgICAgICAgdGFiYmFibGVcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLFxyXG4gICAgICAgIGNoaWxkQ291bnQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXHJcbiAgICAgICAgZm9jdXNDdXJyZW50OiB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdLmdldFRhYmJhYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEZvciB3aGF0ZXZlciByZWFzb24sIHRoZSBwcmV2aW91c2x5IHRhYmJhYmxlIGNoaWxkXHJcbiAgICAgICAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdGFiYmFibGUgd2l0aG91dCB1cyBrbm93aW5nIGFib3V0IGl0LlxyXG4gICAgICAgICAgICAgICAgLy8gTWF5YmUgaXQgdW5tb3VudGVkP1xyXG4gICAgICAgICAgICAgICAgLy8gRWl0aGVyIHdheSwgdHJ5IHRvIGZpbmQgdGhlIG5ld2x5LXNlbGVjdGVkIGNoaWxkLlxyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGdldFRhYmJhYmxlSW5kZXgoKSA/PyAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGogPSBpICsgMTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdPy5yZXJlbmRlckFuZEZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICArK2o7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdPy5yZXJlbmRlckFuZEZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbXSksXHJcbiAgICAgICAgLi4ucmVzdFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utcm92aW5nLXRhYmluZGV4LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJvdmluZ1RhYkluZGV4IH0gZnJvbSBcIi4vdXNlLXJvdmluZy10YWJpbmRleFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG4vKipcclxuICpcclxuICogVE9ETzogVGhpcyB0YWJsZSB3YXMgc2NyYXBwZWQgd2hlbiB0aGlzIHdhcyBjaGFuZ2VkIHRvIGp1c3QgYWNjZXB0IGEgY29sbGF0b3IgZGlyZWN0bHksXHJcbiAqIGJ1dCBpdCdzIG5vdCBiYWQgZm9yIGEgY29sbGF0aW9uIGNyYXNoIGNvdXJzZSBhbmQgSSBtaWdodCB1c2UgaXQgYWdhaW4uXHJcbiAqIEV2ZW4ganVzdCBhcyBhIFwidGhpcyBpcyB3aHkgaXQncyBpbXBvcnRhbnQgYW5kIGdvb2QgdG8gdXNlIHRoZXNlIHRoaW5nc1wiIHRoaW5nLlxyXG4gKlxyXG4gKiB8TGFuZy58VGFyZ2V0fFVzZXIgaW5wdXR8YGJhc2VgfGBhY2NlbnRgfGBjYXNlYHxgdmFyaWFudGB8XHJcbiAqIHwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfFxyXG4gKiB8RU58SGl8SGl84pyFfOKchXzinIV84pyFfFxyXG4gKiB8RU58SGl877yo772JfOKchXzinIV84pyFfOKdjHxcclxuICogfEVOfEhpfGhpfOKchXzinIV84p2MfOKdjHxcclxuICogfEVOfEhpfEjDr3zinIV84p2MfOKdjHzinYx8XHJcbiAqIHxFTnxIaXxCeWV84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8REF8w6V8YWF84pyFfOKchXzinIV84p2MfFxyXG4gKiB8REF8w6V8QUF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8REF8w6V8QWF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8RU58w6V8YWF84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8REF8w6V8YUF84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8RU58w6V8YXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxhfOKchXzinIV84p2MfOKdjHxcclxuICogfEpQfO+qqnznnYB84pyFfOKchXzinIV84pyFfFxyXG4gKiB8SlB844KrfO+9tnzinIV84pyFfOKchXzinIV8XHJcbiAqIHxKUHzjgqt844GLfOKchXzinIV84pyFfOKdjHxcclxuICogfEpQfOOCq3zjg7V84pyFfOKchXzinIV84p2MfFxyXG4gKiB8SlB844KrfOOLlXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxKUHzjgqt844KsfOKchXzinYx84p2MfOKdjHxcclxuICogfEpQfOOCq3zlipt84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8Wkh857SFfOe6onzinYx84p2MfOKdjHzinYx8XHJcbiAqXHJcbiAqXHJcbiAqIChOb3RlIHRvIHNlbGY6IEF0IHNvbWUgcG9pbnQsIHRoaXMgZmlsZSB3aWxsIHByb2JhYmx5IGJlIG5vcm1hbGl6ZWRcclxuICogYnkgc29tZWJvZHkgYW5kIO+qqiB3aWxsIHR1cm4gYmFjayBpbnRvIOedgC4pXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBkdW1teSA9IG51bGw7XHJcbjtcclxuZnVuY3Rpb24gaWRlbnRpdHkodCkgeyByZXR1cm4gdDsgfVxyXG4vKipcclxuICogSW1wbGVtZW50cyBwcm9wZXIga2V5Ym9hcmQgbmF2aWdhdGlvbiBmb3IgY29tcG9uZW50cyBsaWtlIGxpc3Rib3hlcywgYnV0dG9uIGdyb3VwcywgbWVudXMsIGV0Yy5cclxuICpcclxuICogSW4gdGhlIGRvY3VtZW50IG9yZGVyLCB0aGVyZSB3aWxsIGJlIG9ubHkgb25lIFwiZm9jdXNlZFwiIG9yIFwidGFiYmFibGVcIiBlbGVtZW50LCBtYWtpbmcgaXQgYWN0IG1vcmUgbGlrZSBvbmUgY29tcGxldGUgdW5pdCBpbiBjb21wYXJpc29uIHRvIGV2ZXJ5dGhpbmcgYXJvdW5kIGl0LlxyXG4gKiBOYXZpZ2F0aW5nIGZvcndhcmRzL2JhY2t3YXJkcyBjYW4gYmUgZG9uZSB3aXRoIHRoZSBhcnJvdyBrZXlzLCBIb21lL0VuZCBrZXlzLCBvciBhbnkgYW55IHRleHQgZm9yIHR5cGVhaGVhZCB0byBmb2N1cyB0aGUgbmV4dCBpdGVtIHRoYXQgbWF0Y2hlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMaXN0TmF2aWdhdGlvbih7IGluaXRpYWxJbmRleCwgc2hvdWxkRm9jdXNPbkNoYW5nZSwgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIgfSkge1xyXG4gICAgaW5kZXhNYW5nbGVyID8/PSBpZGVudGl0eTtcclxuICAgIGluZGV4RGVtYW5nbGVyID8/PSBpZGVudGl0eTtcclxuICAgIGtleU5hdmlnYXRpb24gPz89IFwiZWl0aGVyXCI7XHJcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcik7XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRocmVlIHRoaW5ncyByZWxhdGVkIHRvIHRoZSBjdXJyZW50bHkgdGFiYmFibGUgZWxlbWVudCdzIGluZGV4OlxyXG4gICAgLy8gV2hhdCBpdCBpcywgYW5kIHdoZXRoZXIsIHdoZW4gd2UgcmVuZGVyIHRoaXMgY29tcG9uZW50IGFuZCBpdCdzIGNoYW5nZWQsIHRvIGFsc28gZm9jdXMgdGhlIGVsZW1lbnQgdGhhdCB3YXMgbWFkZSB0YWJiYWJsZS5cclxuICAgIGNvbnN0IFt0YWJiYWJsZUluZGV4LCBzZXRUYWJiYWJsZUluZGV4LCBnZXRUYWJiYWJsZUluZGV4XSA9IHVzZVN0YXRlKGluaXRpYWxJbmRleCA9PT0gdW5kZWZpbmVkID8gMCA6IGluaXRpYWxJbmRleCk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgaW5kaWNlc0J5RWxlbWVudCwgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCwgZm9jdXNDdXJyZW50LCAuLi5yZXN0IH0gPSB1c2VSb3ZpbmdUYWJJbmRleCh7IHNob3VsZEZvY3VzT25DaGFuZ2UsIHRhYmJhYmxlSW5kZXggfSk7XHJcbiAgICAvKmNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpOiBudW1iZXIgfCBudWxsKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwpIHNldFRhYmJhYmxlSW5kZXgoaW5kZXhNYW5nbGVyISgwKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9MYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlciEobWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDEpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIhKGluZGV4RGVtYW5nbGVyIShpID8/IDApIC0gMSkpIH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlciEoaW5kZXhEZW1hbmdsZXIhKGkgPz8gMCkgKyAxKSkgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcclxuKi9cclxuICAgIGNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpKSA9PiB7XHJcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChpID09IG51bGwgPyBudWxsIDogdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgMCwgaSwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgodHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgMCwgMCwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgodHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgLTEsIGluZGV4TWFuZ2xlciA/PyBpZGVudGl0eSwgaW5kZXhEZW1hbmdsZXIgPz8gaWRlbnRpdHkpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChjID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIGMgPz8gMCwgKGMgPz8gMCkgLSAxLCAtMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgYyA/PyAwLCAoYyA/PyAwKSArIDEsIDEsIGluZGV4TWFuZ2xlciA/PyBpZGVudGl0eSwgaW5kZXhEZW1hbmdsZXIgPz8gaWRlbnRpdHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgc2V0SW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGluZGV4KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHsgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXg6IGdldFRhYmJhYmxlSW5kZXgsIHNldEluZGV4LCB0eXBlYWhlYWRUaW1lb3V0OiAxMDAwIH0pO1xyXG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb24oeyBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBrZXlOYXZpZ2F0aW9uLCBpbmRleDogZ2V0VGFiYmFibGVJbmRleCgpID8/IDAsIG1hbmFnZWRDaGlsZHJlbiwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0IH0pO1xyXG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHModXNlVHlwZWFoZWFkTmF2aWdhdGlvblByb3BzKHByb3BzKSk7XHJcbiAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvblByb3BzLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHNdKTtcclxuICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkKGluZm8pO1xyXG4gICAgICAgIC8vY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkKGluZm8gYXMgSSk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLCB0YWJiYWJsZSB9ID0gdXNlUm92aW5nVGFiSW5kZXhDaGlsZChpbmZvKTtcclxuICAgICAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgPSBmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcygoKHsgb25DbGljazogcm92ZVRvU2VsZiwgaGlkZGVuOiBpbmZvLmhpZGRlbiB9KSkpLCBwcm9wcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByb3ZlVG9TZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7IH0sIFtdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsXHJcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzOiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcclxuICAgICAgICAgICAgdGFiYmFibGVcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCwgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCwgbmF2aWdhdGVUb0luZGV4XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsXHJcbiAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyxcclxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxyXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXHJcbiAgICAgICAgdGFiYmFibGVJbmRleCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcclxuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgsXHJcbiAgICAgICAgbmF2aWdhdGVUb05leHQsXHJcbiAgICAgICAgbmF2aWdhdGVUb1ByZXYsXHJcbiAgICAgICAgbmF2aWdhdGVUb0ZpcnN0LFxyXG4gICAgICAgIG5hdmlnYXRlVG9MYXN0LFxyXG4gICAgICAgIGZvY3VzQ3VycmVudCxcclxuICAgICAgICAuLi5yZXN0XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENlbGxzLCBpbml0aWFsLCB0YXJnZXQsIHNlYXJjaERpcmVjdGlvbiwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlcikge1xyXG4gICAgZnVuY3Rpb24gaGVscGVyKCkge1xyXG4gICAgICAgIGlmIChzZWFyY2hEaXJlY3Rpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgPj0gMCAmJiAobWFuYWdlZENlbGxzW3RhcmdldF0gPT0gbnVsbCB8fCAhIW1hbmFnZWRDZWxsc1t0YXJnZXRdPy5oaWRkZW4pKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKHRhcmdldCkgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldCA8IDAgPyBpbml0aWFsIDogdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWFyY2hEaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA8IG1hbmFnZWRDZWxscy5sZW5ndGggJiYgbWFuYWdlZENlbGxzW3RhcmdldF0gPT0gbnVsbCB8fCAhIW1hbmFnZWRDZWxsc1t0YXJnZXRdPy5oaWRkZW4pXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIodGFyZ2V0KSArIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID49IG1hbmFnZWRDZWxscy5sZW5ndGggPyBpbml0aWFsIDogdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChoZWxwZXIoKSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxpc3QtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJwcmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuO1xyXG5jb25zdCBTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUJhdGNoZWRBbmltYXRpb25GcmFtZXMoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcclxuICAgIGNvbnN0IHJlbW92ZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKGNhbGxiYWNrKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LmRlbGV0ZShjYWxsYmFjayk7IH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnRleHRJbmZvID0gdXNlUmVmKG51bGwpO1xyXG4gICAgaWYgKGNvbnRleHRJbmZvLmN1cnJlbnQgPT0gbnVsbClcclxuICAgICAgICBjb250ZXh0SW5mby5jdXJyZW50ID0geyBhZGRDYWxsYmFjaywgcmVtb3ZlQ2FsbGJhY2sgfTtcclxuICAgIGNvbnN0IGFsbENhbGxiYWNrcyA9IHVzZVJlZihudWxsKTtcclxuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxyXG4gICAgICAgIGFsbENhbGxiYWNrcy5jdXJyZW50ID0gbmV3IE1hcCgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gLTE7XHJcbiAgICAgICAgZnVuY3Rpb24gcmFmV2l0aEJhdGNoZWRDYWxsYmFja3MobXNTaW5jZUxhc3QpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgW2JhdGNoZWRSYWZDYWxsYmFjaywgdGFnXSBvZiBhbGxDYWxsYmFja3MuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgYmF0Y2hlZFJhZkNhbGxiYWNrKG1zU2luY2VMYXN0LCB0YWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChfanN4KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dEluZm8uY3VycmVudCwgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcclxufVxyXG4vKipcclxuICogVGhlIChvcHRpb25hbGx5IG5vbi1zdGFibGUpIGBjYWxsYmFja2AgeW91IHByb3ZpZGUgd2lsbCBzdGFydCBydW5uaW5nIGV2ZXJ5IGZyYW1lIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxyXG4gKlxyXG4gKiBQYXNzaW5nIGBudWxsYCBpcyBmaW5lIGFuZCBzaW1wbHkgc3RvcHMgdGhlIGVmZmVjdCB1bnRpbCB5b3UgcmVzdGFydCBpdCBieSBwcm92aWRpbmcgYSBub24tbnVsbCBjYWxsYmFjay5cclxuICpcclxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGNvbnN0IGhhc0NhbGxiYWNrID0gKGNhbGxiYWNrICE9IG51bGwpO1xyXG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LmFkZENhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5yZW1vdmVDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFmQ2FsbGJhY2sgPSAobXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCwgaGFzQ2FsbGJhY2tdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYW5pbWF0aW9uLWZyYW1lLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJhZ2dhYmxlKHsgZWZmZWN0QWxsb3dlZCwgZGF0YSwgZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0LCBkcmFnSW1hZ2VZT2Zmc2V0IH0pIHtcclxuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmcsIGdldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsYXN0RHJvcEVmZmVjdCwgc2V0TGFzdERyb3BFZmZlY3QsIGdldExhc3REcm9wRWZmZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgdXNlRHJhZ2dhYmxlUHJvcHMgPSB1c2VDYWxsYmFjaygocCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgICAgICBjb25zdCBvbkRyYWdTdGFydCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gKGVmZmVjdEFsbG93ZWQgPz8gXCJhbGxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0ltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQgPz8gMCwgZHJhZ0ltYWdlWU9mZnNldCA/PyAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttaW1lVHlwZSwgZGF0YV0gb2YgZW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEobWltZVR5cGUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvbkRyYWdFbmQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdERyb3BFZmZlY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBvbkRyYWdTdGFydCxcclxuICAgICAgICAgICAgb25EcmFnRW5kLFxyXG4gICAgICAgICAgICByZWZcclxuICAgICAgICB9LCBwKTtcclxuICAgIH0sIFtlZmZlY3RBbGxvd2VkLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQsIC4uLk9iamVjdC5lbnRyaWVzKGRhdGEpLmZsYXQoKV0pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxyXG4gICAgICAgIGRyYWdnaW5nLFxyXG4gICAgICAgIGdldERyYWdnaW5nLFxyXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cclxuICAgICAgICAvLyBVc2VmdWwgZm9yIHJlbW92aW5nIHRoZSBlbGVtZW50IGFmdGVyd2FyZHMgaWYgaXQgd2FzIFwibW92ZVwiXHJcbiAgICAgICAgbGFzdERyb3BFZmZlY3QsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJhZ2dhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuO1xyXG47XHJcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVGaWxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBmaWxlTmFtZTtcclxuICAgIGVycm9yVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lLCBiYXNlKSB7XHJcbiAgICAgICAgc3VwZXIoYmFzZT8ubWVzc2FnZSA/PyBcIkFuIHVuc3BlY2lmaWVkIGVycm9yIG9jY3VycmVkIHJlYWRpbmcgdGhlIGZpbGUuXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9IGJhc2U/Lm5hbWU7XHJcbiAgICB9XHJcbn1cclxuLy9NZXJnZWRQcm9wczxVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEUsIFBpY2s8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIFwib25EcmFnRW50ZXJcIiB8IFwib25EcmFnTGVhdmVcIiB8IFwib25EcmFnT3ZlclwiIHwgXCJvbkRyb3BcIj4+LCBQPjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3BwYWJsZSh7IGVmZmVjdCB9KSB7XHJcbiAgICBjb25zdCBbZmlsZXNGb3JDb25zaWRlcmF0aW9uLCBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BwZWRGaWxlcywgc2V0RHJvcHBlZEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BwZWRTdHJpbmdzLCBzZXREcm9wcGVkU3RyaW5nc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkcm9wRXJyb3IsIHNldERyb3BFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgLy8gQWxsIHRoZSBwcm9taXNlcyBnZW5lcmF0ZWQgZnJvbSB0aGUgZHJvcCBldmVudHMuXHJcbiAgICAvLyBVc2VkIHRvIHByb2Nlc3MgbXVsdGlwbGUgZHJvcCBldmVudHMgaW4gc3VjY2Vzc2lvblxyXG4gICAgY29uc3QgZHJvcFByb21pc2VzUmVmID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UHJvbWlzZUluZGV4LCBzZXRDdXJyZW50UHJvbWlzZUluZGV4LCBnZXRDdXJyZW50UHJvbWlzZUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtwcm9taXNlQ291bnQsIHNldFByb21pc2VDb3VudCwgZ2V0UHJvbWlzZUNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxyXG4gICAgLy8gSWYgdGhlcmUgaXMgb25lLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcsIHNpbmNlIGl0IHJ1bnMgdGhlIHNhbWUgY2hlY2suXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgaWYgKHByb21pc2VDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb21pc2VDb3VudF0pO1xyXG4gICAgLy8gQW55dGltZSBvdXIgY3VycmVudCBwcm9taXNlIGNoYW5nZXMsXHJcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxyXG4gICAgLy8gRmluYWxseSwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnltb3JlIHByb21pc2VzLlxyXG4gICAgLy8gSWYgdGhlcmUgYXJlLCB0aGVuIGluY3JlYXNlIGN1cnJlbnRQcm9taXNlQ291bnQsXHJcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gKm9mdGVuKiwgYnV0IG1heWJlIGluIHRoZSBjYXNlIG9mXHJcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvbWlzZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcclxuICAgICAgICAgICAgY3VycmVudFByb21pc2UudGhlbigoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZm8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BwZWRGaWxlcyhmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZFN0cmluZ3Moc3RyaW5ncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgdGhhdCB3ZSdyZSBkb25lLCBhcmUgdGhlcmUgbW9yZSBwcm9taXNlcyBpbiB0aGUgcXVldWU/XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgcHJvbWlzZSBoYXMgc3RhcnRlZCwgbW9yZSBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFByb21pc2VJbmRleF0pO1xyXG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xyXG4gICAgICAgIC8vY29uc3QgcmVmID0gdXNlUmVmPEU+KG51bGwpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBjb2xsZWN0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlcy5cclxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gKGVmZmVjdCA/PyBcIm1vdmVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNaW1lVHlwZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlLmRhdGFUcmFuc2Zlcj8uaXRlbXMgPz8gW10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWltZVR5cGVzLmFkZCh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaCh7IHR5cGU6IGl0ZW0udHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obmV3RmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obmV3TWltZVR5cGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSGFuZGxlIHJlc2V0dGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXNcclxuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJvaWxlcnBsYXRlLCBJIGd1ZXNzXHJcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICBjb25zdCBvbkRyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRmlsZSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBpdGVtLmdldEFzU3RyaW5nKHJlc29sdmUpKSkudGhlbihzdHIgPT4gZHJvcERhdGFbdHlwZV0gPSBzdHIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcm9wUHJvbWlzZXNSZWYuY3VycmVudC5wdXNoKFByb21pc2UuYWxsKGFsbFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IGRyb3BEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9taXNlQ291bnQoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRHJhZ0VudGVyLCBvbkRyYWdMZWF2ZSwgb25EcmFnT3Zlciwgb25Ecm9wIH0sIHApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlRHJvcHBhYmxlUHJvcHMsXHJcbiAgICAgICAgZmlsZXNGb3JDb25zaWRlcmF0aW9uLFxyXG4gICAgICAgIHN0cmluZ3NGb3JDb25zaWRlcmF0aW9uLFxyXG4gICAgICAgIGRyb3BwZWRGaWxlcyxcclxuICAgICAgICBkcm9wcGVkU3RyaW5ncyxcclxuICAgICAgICBkcm9wRXJyb3JcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyb3BwYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW55ICpub24tUHJlYWN0KiBlbGVtZW50LCBhbmQgcmVtb3ZpbmcgaXQgd2hlbiB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBob29rIHVubW91bnRzLiBUaGUgY2FsbGJhY2sgZG9lcyBub3QgbmVlZCB0byBiZSBzdGFibGUgYWNyb3NzIHJlbmRlcnMuXHJcbiAqXHJcbiAqIER1ZSB0byB0eXBpbmcgbGltaXRhdGlvbnMsIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgbGlrZSB0aGlzOlxyXG4gKlxyXG4gKiBgdXNlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiaW5wdXRcIik8SW5wdXRFdmVudD4oZSA9PiB7fSlgXHJcbiAqXHJcbiAqIFRoZSB0eXBlIGFyZ3VtZW50IGlzIG9wdGlvbmFsLCBidXQgbmFycm93cyBkb3duIHRoZSB0eXBlIGZyb20gXCJhIHVuaW9uIG9mIGFsbCBldmVudHNcIiB0byB3aGF0ZXZlciB5b3Ugc3BlY2lmeSwgYW5kIGVycm9ycyBpZiBpdCBkb2Vzbid0IGV4aXN0LlxyXG4gKlxyXG4gKiBUaGVyZSBpcyBhIHNlcGFyYXRlIHZlcnNpb24gdGhhdCBhdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byBhIHNldCBvZiBwcm9wcy5cclxuICogSXQgdGFrZXMgZGlmZmVyZW50IGV2ZW50IHN0cmluZyB0eXBlcyAob25FdmVudCB2cyBvbmV2ZW50KS5cclxuICpcclxuICogQHBhcmFtIHRhcmdldCBBICpub24tUHJlYWN0KiBub2RlIHRvIGF0dGFjaCB0aGUgZXZlbnQgdG8uXHJcbiAqIEByZXR1cm5zXHJcbiAqICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxIYW5kbGVyKHRhcmdldCwgdHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xyXG4gICAgLy8gTm90ZSB0byBzZWxmOiBUaGUgdHlwaW5nIGRvZXNuJ3QgaW1wcm92ZSBldmVuIGlmIHRoaXMgaXMgc3BsaXQgdXAgaW50byBhIHN1Yi1mdW5jdGlvbi5cclxuICAgIC8vIE5vIG1hdHRlciB3aGF0LCBpdCBzZWVtcyBpbXBvc3NpYmxlIHRvIGdldCB0aGUgaGFuZGxlcidzIGV2ZW50IG9iamVjdCB0eXBlZCBwZXJmZWN0bHkuXHJcbiAgICAvLyBJdCBzZWVtcyBsaWtlIGl0J3MgZ3VhcmFudGVlZCB0byBhbHdheXMgYmUgYSB1bmlvbiBvZiBhbGwgYXZhaWxhYmxlIHR1cGVzLlxyXG4gICAgLy8gQWdhaW4sIG5vIG1hdHRlciB3aGF0IGNvbWJpbmF0aW9uIG9mIHN1Yi0gb3Igc3ViLXN1Yi1mdW5jdGlvbnMgdXNlZC5cclxuICAgIGxldCBzdGFibGVIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soaGFuZGxlciA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICBpZiAoaGFuZGxlciA9PSBudWxsKVxyXG4gICAgICAgIHN0YWJsZUhhbmRsZXIgPSBudWxsO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RhYmxlSGFuZGxlcikge1xyXG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBzdGFibGVIYW5kbGVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHN0YWJsZUhhbmRsZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0YXJnZXQsIHR5cGUsIHN0YWJsZUhhbmRsZXJdKTtcclxufVxyXG4vKipcclxuICogQW4gYWx0ZXJuYXRpdmUgd2F5IHRvIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQuIFVzZWZ1bCBwcmltYXJpbHkgd2hlbiBpbnRlZ3JhdGluZyAzcmQgcGFydHkgbGlicmFyaWVzIHRoYXQgZXhwZWN0IGEgZ2VuZXJpYyBcImFkZCBldmVudCBoYW5kbGVyXCIgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gbW9kaWZ5IGEgc2V0IG9mIHByb3BzIHRvIGFwcGx5IHRoaXMgaGFuZGxlci5cclxuICpcclxuICogRm9yIHR5cGluZyByZWFzb25zLCB0aGlzIGZ1bmN0aW9uIGlzIHNwbGl0IGludG8gdHdvLiAgVXNhZ2UgaXMgbGlrZSB0aGUgZm9sbG93aW5nOlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgeyB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzIH0gPSB1c2VMb2NhbEV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD4oKShcIm9uTW91c2VEb3duXCIsIGUgPT4geyAgfSk7XHJcbiAqIGNvbnN0IGRpdlByb3BzID0gdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyhwcm9wcyk7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsSGFuZGxlcigpIHtcclxuICAgIHJldHVybiB1c2VDYWxsYmFjaygodHlwZSwgaGFuZGxlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyKTtcclxuICAgICAgICBjb25zdCB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW3R5cGVdOiBzdGFibGVIYW5kbGVyIH0sIHByb3BzKTtcclxuICAgICAgICB9LCBbdHlwZV0pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZXZlbnQtaGFuZGxlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKlxyXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaWZmZXJlbnQgd2F5cyB0aGF0IGEgZm9jdXMgZXZlbnQgY2FuIGhhcHBlbi4gIEFzc3VtZVxyXG4gKiB0aGUgZm9sbG93aW5nIHN0ZXBzIGhhcHBlbiBpbiBvcmRlcjpcclxuICpcclxuICogMS4gVGhlIHBhZ2UgbG9hZHMuXHJcbiAqICAgICogTm90aGluZyBpcyBmb2N1c2VkLCBidXQgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGBib2R5YC5cclxuICogICAgKiBObyBmb2N1cyBldmVudHMgYXJlIGZpcmVkLlxyXG4gKiAyLiBUaGUgd2luZG93IGlzIGZvY3VzZWQsIGFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgcmVtYWlucyBhcyBgYm9keWAuXHJcbiAqICAgICogQSBgZm9jdXNgL2Bmb2N1c2luYCBldmVudCAqTUlHSFQqIGJlIGZpcmVkIGZvciBgYm9keWAuIERlcGVuZGluZyBvblxyXG4gKiAgICAgIHRoZSBicm93c2VyLCB0aGlzIGRlcGVuZHMgb24gd2hldGhlciB0aGUgaGFuZGxlciB3YXMgYXR0YWNoZWQgdG8gYHdpbmRvd2Agb3IgYGRvY3VtZW50YC5cclxuICogICAgICBQcm9iYWJseSBqdXN0IGJlc3QgdG8gbm90IHJlbHkgb24gaXQsIG9yIGxpc3RlbiB0byBgd2luZG93YCBmb2N1cyBldmVudHMgZGlyZWN0bHkuXHJcbiAqIDMuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGZvY3Vzb3V0YCBhbmQgYGJsdXJgIGFyZSAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqICAgICogYGZvY3VzYCBhbmQgYGZvY3VzaW5gIGFyZSBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiA0LiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cclxuICogICAgKiAqKlRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBgYm9keWAqKiBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgbmV3IGVsZW1lbnQuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBub3cgc2V0IHRvIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgKiBgZm9jdXNpbmAgaXMgZmlyZWQgb24gdGhlIG5ldyBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIG9sZCBlbGVtZW50LlxyXG4gKiA1LiBBbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cclxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byBgYm9keWAuXHJcbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxyXG4gKiAgICAqIGBmb2N1c2luYCBpcyAqbm90KiBmaXJlZCBvbiBgYm9keWAuXHJcbiAqXHJcbiAqXHJcbiAqIEluIHN1bW1hcnk6XHJcbiAqIDEuIEZvY3VzIGV2ZW50cyAqZG8qIG5vdGlmeSB1cyBvZiBhbGwgY2hhbmdlcyBpbiBmb2N1cywgYnV0IHRoZXJlIGlzIG5vIG9uZSBzaW5nbGUgY29tcHJlaGVuc2l2ZSBldmVudCB0aGF0IHByb3ZpZGVzIHVzIHdpdGggYWxsIGF2YWlsYWJsZSBpbmZvcm1hdGlvbi5cclxuICogMi4gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgICppcyBub3QqIGFsd2F5cyB0aGUgc2FtZSBhcyB3aGF0J3MgYmVpbmcgcmVmZXJlbmNlZCBieSBhIGZvY3VzIGV2ZW50LiBJbiBwYXJ0aWN1bGFyLCBpdCBtYXkgYmVjb21lIGBib2R5YCBhdCBhbnkgYXJiaXRyYXJ5IHRpbWUuXHJcbiAqIDMuIEEgYGJsdXJgIHdpdGhvdXQgYSBgZm9jdXNgIGNhbiBhbmQgd2lsbCBvY2N1ci4gVGhpcyBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gc29sZWx5IHVzZSBgZm9jdXNgIHRvIGRldGVjdCBhbGwgY2hhbmdlcy5cclxuICogNC4gQSBgYmx1cmAgZXZlbnQgd2hvc2UgYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlcmUgd2lsbCBiZSBubyBmb2xsb3dpbmcgYGZvY3VzYCBldmVudC5cclxuICpcclxuICpcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5jb25zdCBkdW1teSA9IDA7XHJcbmNvbnN0IGFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBNYXAoKTtcclxuY29uc3QgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBNYXAoKTtcclxuY29uc3Qgd2luZG93Rm9jdXNlZFVwZGF0ZXJzID0gbmV3IE1hcCgpO1xyXG5sZXQgd2luZG93c0ZvY3VzZWQgPSBuZXcgTWFwKCk7XHJcbmZ1bmN0aW9uIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgbWFwLCB2YWx1ZSkge1xyXG4gICAgZm9yIChsZXQgW290aGVyV2luZG93LCB1cGRhdGVyc10gb2YgbWFwKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdyA9PT0gb3RoZXJXaW5kb3cpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdXBkYXRlciBvZiB1cGRhdGVycykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlcj8uKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb2N1c291dChlKSB7XHJcbiAgICBjb25zdCB3aW5kb3cgPSBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCBhY3RpdmVFbGVtZW50VXBkYXRlcnMsIG51bGwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gSnVzdCB3YWl0IGZvciB0aGUgZm9jdXNpbiBldmVudC5cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb2N1c2luKGUpIHtcclxuICAgIGNvbnN0IHdpbmRvdyA9IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICBsZXQgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCk7XHJcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMsIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50KTtcclxufVxyXG5mdW5jdGlvbiB3aW5kb3dGb2N1cyhlKSB7XHJcbiAgICBjb25zdCB3aW5kb3cgPSAoZS50YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLnRhcmdldCA6IGUuY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUuY3VycmVudFRhcmdldCA6IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xyXG4gICAgd2luZG93c0ZvY3VzZWQuc2V0KHdpbmRvdywgdHJ1ZSk7XHJcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIHdpbmRvd0ZvY3VzZWRVcGRhdGVycywgdHJ1ZSk7XHJcbn1cclxuZnVuY3Rpb24gd2luZG93Qmx1cihlKSB7XHJcbiAgICBjb25zdCB3aW5kb3cgPSAoZS50YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLnRhcmdldCA6IGUuY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUuY3VycmVudFRhcmdldCA6IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xyXG4gICAgd2luZG93c0ZvY3VzZWQuc2V0KHdpbmRvdywgZmFsc2UpO1xyXG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMsIGZhbHNlKTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIHlvdSB0byBpbnNwZWN0IHdoaWNoIGVsZW1lbnQgaW4gdGhlIGBkb2N1bWVudGAgY3VycmVudGx5IGhhcyBmb2N1cywgd2hpY2ggd2FzIG1vc3QgcmVjZW50bHkgZm9jdXNlZCBpZiBub25lIGFyZSBjdXJyZW50bHksIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgd2luZG93IGhhcyBmb2N1cyBieSByZXR1cm5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XHJcbiAqICogYGdldEFjdGl2ZUVsZW1lbnQoKWBcclxuICogKiBgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQoKWBcclxuICogKiBgZ2V0V2luZG93Rm9jdXNlZCgpYFxyXG4gKiAqICoqTm8gcHJvcC1tb2RpZnlpbmcgaG9vayBpcyByZXR1cm5lZCBiZWNhdXNlIG5vbmUgaXMgbmVjZXNzYXJ5KipcclxuICpcclxuICogKFRoZSBkb2N1bWVudCdzIGJvZHkgcmVjZWl2aW5nIGZvY3VzLCBsaWtlIGl0IGRvZXMgd2hlbiB5b3UgY2xpY2sgb24gYW4gZW1wdHkgYXJlYSwgaXMgY291bnRlZCBhcyBubyBlbGVtZW50IGhhdmluZyBmb2N1cyBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzKVxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgcGFzc2l2ZSBob29rLCBzbyBieSBkZWZhdWx0IGl0IHJldHVybnMgZ2V0dGVyIGZ1bmN0aW9ucyB0aGF0IHJlcG9ydCB0aGlzIGluZm9ybWF0aW9uIGJ1dCB0aGUgY29tcG9uZW50IHdpbGwgbm90IHJlLXJlbmRlciBieSBkZWZhdWx0IHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGNoYW5nZXMuXHJcbiAqXHJcbiAqIElmIHlvdSBuZWVkIHRoZSBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGNoYW5nZXMsIHVzZSB0aGUgYG9uKkNoYW5nZWAgYXJndW1lbnRzIHRvIHNldCBzb21lIHN0YXRlIG9uIHlvdXIgZW5kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGl2ZUVsZW1lbnQoeyBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSB9KSB7XHJcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UpO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xyXG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgICAgICAgICAgaWYgKChhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdyk/LnNpemUgPz8gMCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cywgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1ciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZW0gZXZlbiBpZiB0aGV5J3JlIHVuZGVmaW5lZCB0byBtb3JlIGVhc2lseVxyXG4gICAgICAgICAgICAgICAgLy8gbWFuYWdlIHRoZSBcIj4wIG1lYW5zIGRvbid0IGFkZCBoYW5kbGVyc1wiIGxvZ2ljLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxBY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykgPz8gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxMYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFdpbmRvd0ZvY3VzZWRVcGRhdGVycyA9IHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5hZGQoc2V0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbExhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldExhc3RBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGxvY2FsV2luZG93Rm9jdXNlZFVwZGF0ZXJzLmFkZChzZXRXaW5kb3dGb2N1c2VkKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zZXQod2luZG93LCBsb2NhbEFjdGl2ZUVsZW1lbnRVcGRhdGVycyk7XHJcbiAgICAgICAgICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLnNldCh3aW5kb3csIGxvY2FsTGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuc2V0KHdpbmRvdywgbG9jYWxXaW5kb3dGb2N1c2VkVXBkYXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldEFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldExhc3RBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldFdpbmRvd0ZvY3VzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3c/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtdKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZ2V0QWN0aXZlRWxlbWVudCwgc2V0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25BY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2dldExhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgdW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtnZXRXaW5kb3dGb2N1c2VkLCBzZXRXaW5kb3dGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZShvbldpbmRvd0ZvY3VzZWRDaGFuZ2UsIHJldHVyblRydWUpO1xyXG4gICAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgdXNlQWN0aXZlRWxlbWVudFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkIH07XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjdGl2ZS1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcclxuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxyXG5mdW5jdGlvbiBub29wKCkgeyB9XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZENoYW5nZWQsIG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZENoYW5nZWQsIG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlIH0pIHtcclxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkZvY3VzZWRDaGFuZ2VkLCBvbkZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSk7XHJcbiAgICBjb25zdCBbZ2V0Rm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25Gb2N1c2VkQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xyXG4gICAgY29uc3QgW2dldEZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkZvY3VzZWRJbm5lckNoYW5nZWQsIHJldHVybkZhbHNlKTtcclxuICAgIGNvbnN0IFtnZXRMYXN0Rm9jdXNlZCwgc2V0TGFzdEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XHJcbiAgICBjb25zdCBbZ2V0TGFzdEZvY3VzZWRJbm5lciwgc2V0TGFzdEZvY3VzZWRJbm5lcl0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xyXG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VBY3RpdmVFbGVtZW50KHtcclxuICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChhY3RpdmVFbGVtZW50LCBwcmV2QWN0aXZlRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmRWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXNlZCA9IChzZWxmRWxlbWVudCAhPSBudWxsICYmIChzZWxmRWxlbWVudCA9PSBhY3RpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbm5lciA9ICghIXNlbGZFbGVtZW50Py5jb250YWlucyhhY3RpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgICAgIHNldEZvY3VzZWQoZm9jdXNlZCk7XHJcbiAgICAgICAgICAgIHNldEZvY3VzZWRJbm5lcihmb2N1c2VkSW5uZXIpO1xyXG4gICAgICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U/LihhY3RpdmVFbGVtZW50LCBwcmV2QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgW10pLFxyXG4gICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChsYXN0QWN0aXZlRWxlbWVudCwgcHJldkxhc3RBY3RpdmVFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkID0gKHNlbGZFbGVtZW50ICE9IG51bGwgJiYgKHNlbGZFbGVtZW50ID09IGxhc3RBY3RpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbm5lciA9ICghIXNlbGZFbGVtZW50Py5jb250YWlucyhsYXN0QWN0aXZlRWxlbWVudCkpO1xyXG4gICAgICAgICAgICBzZXRMYXN0Rm9jdXNlZChmb2N1c2VkKTtcclxuICAgICAgICAgICAgc2V0TGFzdEZvY3VzZWRJbm5lcihmb2N1c2VkSW5uZXIpO1xyXG4gICAgICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlPy4obGFzdEFjdGl2ZUVsZW1lbnQsIHByZXZMYXN0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSwgW10pLFxyXG4gICAgICAgIG9uV2luZG93Rm9jdXNlZENoYW5nZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1c2VIYXNGb2N1c1Byb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7IHJldHVybiB1c2VBY3RpdmVFbGVtZW50UHJvcHMocHJvcHMpOyB9LCBbdXNlQWN0aXZlRWxlbWVudFByb3BzXSk7XHJcbiAgICByZXR1cm4geyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRFbGVtZW50LCBnZXRGb2N1c2VkLCBnZXRGb2N1c2VkSW5uZXIsIGdldExhc3RGb2N1c2VkLCBnZXRMYXN0Rm9jdXNlZElubmVyLCBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrKTtcclxuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcclxuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xyXG4gICAgICAgIGlmIChpbnRlcnZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgIC8vIHRoYXQgY2xlYXJzIGFuZCByZXNldHMgdGhlIGludGVydmFsIGlmIGl0IGNoYW5nZXMuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0YWJsZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IGxhc3REZWxheVVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGxhc3REZWxheVVzZWQgPSBjdXJyZW50SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiLyohXG4qIHRhYmJhYmxlIDUuMy4xXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbnZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdhW2hyZWZdJywgJ2J1dHRvbicsICdbdGFiaW5kZXhdOm5vdChzbG90KScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgTm9FbGVtZW50ID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnO1xudmFyIG1hdGNoZXMgPSBOb0VsZW1lbnQgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xudmFyIGdldFJvb3ROb2RlID0gIU5vRWxlbWVudCAmJiBFbGVtZW50LnByb3RvdHlwZS5nZXRSb290Tm9kZSA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG59IDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudDtcbn07XG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgY29udGFpbmVyIHRvIGNoZWNrIGluXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciB0byBjaGVja1xuICogQHBhcmFtIHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICovXG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuLyoqXG4gKiBAY2FsbGJhY2sgR2V0U2hhZG93Um9vdFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRvIGNoZWNrIGZvciBzaGFkb3cgcm9vdFxuICogQHJldHVybnMge1NoYWRvd1Jvb3R8Ym9vbGVhbn0gU2hhZG93Um9vdCBpZiBhdmFpbGFibGUgb3IgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIGEgc2hhZG93Um9vdCBpcyBhdHRhY2hlZCBidXQgbm90IGF2YWlsYWJsZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENhbmRpZGF0ZXNTY29wZVxuICogQHByb3BlcnR5IHtFbGVtZW50fSBzY29wZSBjb250YWlucyBpbm5lciBjYW5kaWRhdGVzXG4gKiBAcHJvcGVydHkge0VsZW1lbnRbXX0gY2FuZGlkYXRlc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSXRlcmF0aXZlT3B0aW9uc1xuICogQHByb3BlcnR5IHtHZXRTaGFkb3dSb290fGJvb2xlYW59IGdldFNoYWRvd1Jvb3QgdHJ1ZSBpZiBzaGFkb3cgc3VwcG9ydCBpcyBlbmFibGVkOyBmYWxzeSBpZiBub3Q7XG4gKiAgaWYgYSBmdW5jdGlvbiwgaW1wbGllcyBzaGFkb3cgc3VwcG9ydCBpcyBlbmFibGVkIGFuZCBlaXRoZXIgcmV0dXJucyB0aGUgc2hhZG93IHJvb3Qgb2YgYW4gZWxlbWVudFxuICogIG9yIGEgYm9vbGVhbiBzdGF0aW5nIGlmIGl0IGhhcyBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgcm9vdFxuICogQHByb3BlcnR5IHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGZsYXR0ZW4gaWYgdHJ1ZSB0aGVuIHJlc3VsdCB3aWxsIGZsYXR0ZW4gYW55IENhbmRpZGF0ZXNTY29wZSBpbnRvIHRoZSByZXR1cm5lZCBsaXN0XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnRbXX0gZWxlbWVudHMgbGlzdCBvZiBlbGVtZW50IGNvbnRhaW5lcnMgdG8gbWF0Y2ggY2FuZGlkYXRlcyBmcm9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciBsaXN0IHRvIGNoZWNrXG4gKiBAcGFyYW0ge0l0ZXJhdGl2ZU9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVzU2NvcGU+fVxuICovXG5cblxudmFyIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShlbGVtZW50cywgaW5jbHVkZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgZWxlbWVudHNUb0NoZWNrID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG5cbiAgd2hpbGUgKGVsZW1lbnRzVG9DaGVjay5sZW5ndGgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzVG9DaGVjay5zaGlmdCgpO1xuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NMT1QnKSB7XG4gICAgICAvLyBhZGQgc2hhZG93IGRvbSBzbG90IHNjb3BlIChzbG90IGl0c2VsZiBjYW5ub3QgYmUgZm9jdXNhYmxlKVxuICAgICAgdmFyIGFzc2lnbmVkID0gZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICB2YXIgY29udGVudCA9IGFzc2lnbmVkLmxlbmd0aCA/IGFzc2lnbmVkIDogZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIHZhciBuZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAob3B0aW9ucy5mbGF0dGVuKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBuZXN0ZWRDYW5kaWRhdGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgc2NvcGU6IGVsZW1lbnQsXG4gICAgICAgICAgY2FuZGlkYXRlczogbmVzdGVkQ2FuZGlkYXRlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgY2FuZGlkYXRlIGVsZW1lbnRcbiAgICAgIHZhciB2YWxpZENhbmRpZGF0ZSA9IG1hdGNoZXMuY2FsbChlbGVtZW50LCBjYW5kaWRhdGVTZWxlY3Rvcik7XG5cbiAgICAgIGlmICh2YWxpZENhbmRpZGF0ZSAmJiBvcHRpb25zLmZpbHRlcihlbGVtZW50KSAmJiAoaW5jbHVkZUNvbnRhaW5lciB8fCAhZWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCkpKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaChlbGVtZW50KTtcbiAgICAgIH0gLy8gaXRlcmF0ZSBvdmVyIHNoYWRvdyBjb250ZW50IGlmIHBvc3NpYmxlXG5cblxuICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3QgfHwgLy8gY2hlY2sgZm9yIGFuIHVuZGlzY2xvc2VkIHNoYWRvd1xuICAgICAgdHlwZW9mIG9wdGlvbnMuZ2V0U2hhZG93Um9vdCA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zLmdldFNoYWRvd1Jvb3QoZWxlbWVudCk7XG5cbiAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgIC8vIGFkZCBzaGFkb3cgZG9tIHNjb3BlIElJRiBhIHNoYWRvdyByb290IG5vZGUgd2FzIGdpdmVuOyBvdGhlcndpc2UsIGFuIHVuZGlzY2xvc2VkXG4gICAgICAgIC8vICBzaGFkb3cgZXhpc3RzLCBzbyBsb29rIGF0IGxpZ2h0IGRvbSBjaGlsZHJlbiBhcyBmYWxsYmFjayBCVVQgY3JlYXRlIGEgc2NvcGUgZm9yIGFueVxuICAgICAgICAvLyAgY2hpbGQgY2FuZGlkYXRlcyBmb3VuZCBiZWNhdXNlIHRoZXkncmUgbGlrZWx5IHNsb3R0ZWQgZWxlbWVudHMgKGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgICAgIC8vICBjaGlsZHJlbiBvZiB0aGUgd2ViIGNvbXBvbmVudCBlbGVtZW50ICh3aGljaCBoYXMgdGhlIHNoYWRvdyksIGluIHRoZSBsaWdodCBkb20sIGJ1dFxuICAgICAgICAvLyAgc2xvdHRlZCBzb21ld2hlcmUgX2luc2lkZV8gdGhlIHVuZGlzY2xvc2VkIHNoYWRvdykgLS0gdGhlIHNjb3BlIGlzIGNyZWF0ZWQgYmVsb3csXG4gICAgICAgIC8vICBfYWZ0ZXJfIHdlIHJldHVybiBmcm9tIHRoaXMgcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgdmFyIF9uZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KHNoYWRvd1Jvb3QgPT09IHRydWUgPyBlbGVtZW50LmNoaWxkcmVuIDogc2hhZG93Um9vdC5jaGlsZHJlbiwgdHJ1ZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBfbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3BlOiBlbGVtZW50LFxuICAgICAgICAgICAgY2FuZGlkYXRlczogX25lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlcmUncyBub3Qgc2hhZG93IHNvIGp1c3QgZGlnIGludG8gdGhlIGVsZW1lbnQncyAobGlnaHQgZG9tKSBjaGlsZHJlblxuICAgICAgICAvLyAgX193aXRob3V0X18gZ2l2aW5nIHRoZSBlbGVtZW50IHNwZWNpYWwgc2NvcGUgdHJlYXRtZW50XG4gICAgICAgIGVsZW1lbnRzVG9DaGVjay51bnNoaWZ0LmFwcGx5KGVsZW1lbnRzVG9DaGVjaywgZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgZ2V0VGFiaW5kZXggPSBmdW5jdGlvbiBnZXRUYWJpbmRleChub2RlLCBpc1Njb3BlKSB7XG4gIGlmIChub2RlLnRhYkluZGV4IDwgMCkge1xuICAgIC8vIGluIENocm9tZSwgPGRldGFpbHMvPiwgPGF1ZGlvIGNvbnRyb2xzLz4gYW5kIDx2aWRlbyBjb250cm9scy8+IGVsZW1lbnRzIGdldCBhIGRlZmF1bHRcbiAgICAvLyBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAgIC8vIHlldCB0aGV5IGFyZSBzdGlsbCBwYXJ0IG9mIHRoZSByZWd1bGFyIHRhYiBvcmRlcjsgaW4gRkYsIHRoZXkgZ2V0IGEgZGVmYXVsdFxuICAgIC8vIGB0YWJJbmRleGAgb2YgMDsgc2luY2UgQ2hyb21lIHN0aWxsIHB1dHMgdGhvc2UgZWxlbWVudHMgaW4gdGhlIHJlZ3VsYXIgdGFiXG4gICAgLy8gb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuICAgIC8vIEFsc28gYnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAgIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICAgIC8vXG4gICAgLy8gaXNTY29wZSBpcyBwb3NpdGl2ZSBmb3IgY3VzdG9tIGVsZW1lbnQgd2l0aCBzaGFkb3cgcm9vdCBvciBzbG90IHRoYXQgYnkgZGVmYXVsdFxuICAgIC8vIGhhdmUgdGFiSW5kZXggLTEsIGJ1dCBuZWVkIHRvIGJlIHNvcnRlZCBieSBkb2N1bWVudCBvcmRlciBpbiBvcmRlciBmb3IgdGhlaXJcbiAgICAvLyBjb250ZW50IHRvIGJlIGluc2VydGVkIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgaWYgKChpc1Njb3BlIHx8IC9eKEFVRElPfFZJREVPfERFVEFJTFMpJC8udGVzdChub2RlLnRhZ05hbWUpIHx8IG5vZGUuaXNDb250ZW50RWRpdGFibGUpICYmIGlzTmFOKHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCkpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG5cbnZhciBzb3J0T3JkZXJlZFRhYmJhYmxlcyA9IGZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn07XG5cbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xuXG52YXIgaXNIaWRkZW5JbnB1dCA9IGZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufTtcblxudmFyIGlzRGV0YWlsc1dpdGhTdW1tYXJ5ID0gZnVuY3Rpb24gaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gJ0RFVEFJTFMnICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC50YWdOYW1lID09PSAnU1VNTUFSWSc7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBpc1RhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHJhZGlvU2NvcGUgPSBub2RlLmZvcm0gfHwgZ2V0Um9vdE5vZGUobm9kZSk7XG5cbiAgdmFyIHF1ZXJ5UmFkaW9zID0gZnVuY3Rpb24gcXVlcnlSYWRpb3MobmFtZSkge1xuICAgIHJldHVybiByYWRpb1Njb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XG4gIH07XG5cbiAgdmFyIHJhZGlvU2V0O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MuZXNjYXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXMnLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQsIG5vZGUuZm9ybSk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufTtcblxudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufTtcblxudmFyIGlzTm9uVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59O1xuXG52YXIgaXNaZXJvQXJlYSA9IGZ1bmN0aW9uIGlzWmVyb0FyZWEobm9kZSkge1xuICB2YXIgX25vZGUkZ2V0Qm91bmRpbmdDbGllID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmhlaWdodDtcblxuICByZXR1cm4gd2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwO1xufTtcblxudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4obm9kZSwgX3JlZikge1xuICB2YXIgZGlzcGxheUNoZWNrID0gX3JlZi5kaXNwbGF5Q2hlY2ssXG4gICAgICBnZXRTaGFkb3dSb290ID0gX3JlZi5nZXRTaGFkb3dSb290O1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlVW5kZXJEZXRhaWxzLCAnZGV0YWlsczpub3QoW29wZW5dKSAqJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2Z1bGwnKSB7XG4gICAgaWYgKHR5cGVvZiBnZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBmaWd1cmUgb3V0IGlmIHdlIHNob3VsZCBjb25zaWRlciB0aGUgbm9kZSB0byBiZSBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgYW5kIHVzZSB0aGVcbiAgICAgIC8vICAnbm9uLXplcm8tYXJlYScgZmFsbGJhY2tcbiAgICAgIHZhciBvcmlnaW5hbE5vZGUgPSBub2RlO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHJvb3ROb2RlID0gZ2V0Um9vdE5vZGUobm9kZSk7XG5cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgJiYgIXBhcmVudEVsZW1lbnQuc2hhZG93Um9vdCAmJiBnZXRTaGFkb3dSb290KHBhcmVudEVsZW1lbnQpID09PSB0cnVlIC8vIGNoZWNrIGlmIHRoZXJlJ3MgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG5vZGUgaGFzIGFuIHVuZGlzY2xvc2VkIHNoYWRvdyB3aGljaCBtZWFucyB3ZSBjYW4gb25seSB0cmVhdCBpdCBhcyBhIGJsYWNrIGJveCwgc28gd2VcbiAgICAgICAgICAvLyAgZmFsbCBiYWNrIHRvIGEgbm9uLXplcm8tYXJlYSB0ZXN0XG4gICAgICAgICAgcmV0dXJuIGlzWmVyb0FyZWEobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAvLyBpdGVyYXRlIHVwIHNsb3RcbiAgICAgICAgICBub2RlID0gbm9kZS5hc3NpZ25lZFNsb3Q7XG4gICAgICAgIH0gZWxzZSBpZiAoIXBhcmVudEVsZW1lbnQgJiYgcm9vdE5vZGUgIT09IG5vZGUub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIC8vIGNyb3NzIHNoYWRvdyBib3VuZGFyeVxuICAgICAgICAgIG5vZGUgPSByb290Tm9kZS5ob3N0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGl0ZXJhdGUgdXAgbm9ybWFsIGRvbVxuICAgICAgICAgIG5vZGUgPSBwYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBvcmlnaW5hbE5vZGU7XG4gICAgfSAvLyBlbHNlLCBgZ2V0U2hhZG93Um9vdGAgbWlnaHQgYmUgdHJ1ZSwgYnV0IGFsbCB0aGF0IGRvZXMgaXMgZW5hYmxlIHNoYWRvdyBET00gc3VwcG9ydFxuICAgIC8vICAoaS5lLiBpdCBkb2VzIG5vdCBhbHNvIHByZXN1bWUgdGhhdCBhbGwgbm9kZXMgbWlnaHQgaGF2ZSB1bmRpc2Nsb3NlZCBzaGFkb3dzKTsgb3JcbiAgICAvLyAgaXQgbWlnaHQgYmUgYSBmYWxzeSB2YWx1ZSwgd2hpY2ggbWVhbnMgc2hhZG93IERPTSBzdXBwb3J0IGlzIGRpc2FibGVkXG4gICAgLy8gZGlkbid0IGZpbmQgaXQgc2l0dGluZyBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgKG9yIHNoYWRvd3MgYXJlIGRpc2FibGVkKSBzbyBub3cgd2VcbiAgICAvLyAgY2FuIGp1c3QgdGVzdCB0byBzZWUgaWYgaXQgd291bGQgbm9ybWFsbHkgYmUgdmlzaWJsZSBvciBub3RcbiAgICAvLyB0aGlzIHdvcmtzIHdoZXJldmVyIHRoZSBub2RlIGlzOiBpZiB0aGVyZSdzIGF0IGxlYXN0IG9uZSBjbGllbnQgcmVjdCwgaXQnc1xuICAgIC8vICBzb21laG93IGRpc3BsYXllZDsgaXQgYWxzbyBjb3ZlcnMgdGhlIENTUyAnZGlzcGxheTogY29udGVudHMnIGNhc2Ugd2hlcmUgdGhlXG4gICAgLy8gIG5vZGUgaXRzZWxmIGlzIGhpZGRlbiBpbiBwbGFjZSBvZiBpdHMgY29udGVudHM7IGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gc2VhcmNoXG4gICAgLy8gIHVwIHRoZSBoaWVyYXJjaHkgZWl0aGVyXG5cblxuICAgIHJldHVybiAhbm9kZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDtcbiAgfSBlbHNlIGlmIChkaXNwbGF5Q2hlY2sgPT09ICdub24temVyby1hcmVhJykge1xuICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTsgLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxuXG5cbnZhciBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0ID0gZnVuY3Rpb24gaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSB7XG4gIGlmICgvXihJTlBVVHxCVVRUT058U0VMRUNUfFRFWFRBUkVBKSQvLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50OyAvLyBjaGVjayBpZiBgbm9kZWAgaXMgY29udGFpbmVkIGluIGEgZGlzYWJsZWQgPGZpZWxkc2V0PlxuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLnRhZ05hbWUgPT09ICdGSUVMRFNFVCcgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAvLyBsb29rIGZvciB0aGUgZmlyc3QgPGxlZ2VuZD4gYW1vbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudE5vZGUuY2hpbGRyZW4uaXRlbShpKTsgLy8gd2hlbiB0aGUgZmlyc3QgPGxlZ2VuZD4gKGluIGRvY3VtZW50IG9yZGVyKSBpcyBmb3VuZFxuXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdMRUdFTkQnKSB7XG4gICAgICAgICAgICAvLyBpZiBpdHMgcGFyZW50IDxmaWVsZHNldD4gaXMgbm90IG5lc3RlZCBpbiBhbm90aGVyIGRpc2FibGVkIDxmaWVsZHNldD4sXG4gICAgICAgICAgICAvLyByZXR1cm4gd2hldGhlciBgbm9kZWAgaXMgYSBkZXNjZW5kYW50IG9mIGl0cyBmaXJzdCA8bGVnZW5kPlxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMuY2FsbChwYXJlbnROb2RlLCAnZmllbGRzZXRbZGlzYWJsZWRdIConKSA/IHRydWUgOiAhY2hpbGQuY29udGFpbnMobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+IGNvbnRhaW5pbmcgYG5vZGVgIGhhcyBubyA8bGVnZW5kPlxuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcblxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucykgfHwgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCB8fCAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVzU2NvcGU+fSBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyBFbGVtZW50W11cbiAqL1xuXG5cbnZhciBzb3J0QnlPcmRlciA9IGZ1bmN0aW9uIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpIHtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgdmFyIGlzU2NvcGUgPSAhIWl0ZW0uc2NvcGU7XG4gICAgdmFyIGVsZW1lbnQgPSBpc1Njb3BlID8gaXRlbS5zY29wZSA6IGl0ZW07XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoZWxlbWVudCwgaXNTY29wZSk7XG4gICAgdmFyIGVsZW1lbnRzID0gaXNTY29wZSA/IHNvcnRCeU9yZGVyKGl0ZW0uY2FuZGlkYXRlcykgOiBlbGVtZW50O1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICBpc1Njb3BlID8gcmVndWxhclRhYmJhYmxlcy5wdXNoLmFwcGx5KHJlZ3VsYXJUYWJiYWJsZXMsIGVsZW1lbnRzKSA6IHJlZ3VsYXJUYWJiYWJsZXMucHVzaChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBpc1Njb3BlOiBpc1Njb3BlLFxuICAgICAgICBjb250ZW50OiBlbGVtZW50c1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNvcnRhYmxlKSB7XG4gICAgc29ydGFibGUuaXNTY29wZSA/IGFjYy5wdXNoLmFwcGx5KGFjYywgc29ydGFibGUuY29udGVudCkgOiBhY2MucHVzaChzb3J0YWJsZS5jb250ZW50KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xufTtcblxudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuXG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IGZhbHNlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICB9XG5cbiAgcmV0dXJuIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXM7XG5cbiAgaWYgKG9wdGlvbnMuZ2V0U2hhZG93Um9vdCkge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoW2VsXSwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCB7XG4gICAgICBmaWx0ZXI6IGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICBnZXRTaGFkb3dSb290OiBvcHRpb25zLmdldFNoYWRvd1Jvb3RcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICB9XG5cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5cbnZhciBpc0ZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbmV4cG9ydCB7IGZvY3VzYWJsZSwgaXNGb2N1c2FibGUsIGlzVGFiYmFibGUsIHRhYmJhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2luZXJ0JywgZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICAvKipcbiAgICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAgICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAgICovXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgICAvKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gICAgLyoqXG4gICAgICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICAgICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICAgKi9cbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICAgKiBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gICAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgICAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gICAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgICAqXG4gICAgICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAgICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICAgKi9cblxuICAgIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRWxlbWVudH0gKi9cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgICAvLyBXYXRjaCBmb3I6XG4gICAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydFJvb3QsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fdmlzaXROb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdmlzaXROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcblxuICAgICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdtYW5hZ2VkTm9kZXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAgICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICAgICAqXG4gICAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgICAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICAgICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAgICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE1hbmFnZXIsIFt7XG4gICAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgICAgaWYgKGluZXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25Eb2N1bWVudExvYWRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0TWFuYWdlcjtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgdmFyIHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9kaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicgKyAnW2luZXJ0XSB7XFxuJyArICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgKyAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArICd9XFxuJyArICdcXG4nICsgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICd9XFxuJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgIHZhciBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pKSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiaW1wb3J0IFwid2ljZy1pbmVydFwiO1xyXG5pbXBvcnQgXCJibG9ja2luZy1lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmZ1bmN0aW9uIGJsb2NraW5nRWxlbWVudHMoKSB7IHJldHVybiBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50czsgfVxyXG47XHJcbi8qKlxyXG4gKiBBbGxvd3MgYW4gZWxlbWVudCB0byB0cmFwIGZvY3VzIGJ5IGFwcGx5aW5nIHRoZSBcImluZXJ0XCIgYXR0cmlidXRlIHRvIGFsbCBzaWJsaW5nLCBhdW50LCBhbmQgdW5jbGUgbm9kZXMuXHJcbiAqXHJcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyBjb25zZWN1dGl2ZSBjYWxscyB3aXRoIGEgbG9vc2VseSBhcHBsaWVkIHN0YWNrIG9wZXJhdGlvblxyXG4gKiAoc3BlY2lmaWNhbGx5IHZpYSBgYmxvY2tpbmdFbGVtZW50c2AsIHdpdGggYSBzbWFsbCBwb2x5ZmlsbCBiZWNhdXNlIEknbSBub3Qgc3VyZSBob3cgbG9uZ1xyXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxyXG4gKiBAcGFyYW0gdGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoL3BvcCB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZ0VsZW1lbnRzIHN0YWNrLlxyXG4gICAgICovXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gU29tZXRpbWVzIGJsb2NraW5nRWxlbWVudHMgd2lsbCBmYWlsIGlmLCBmb3IgZXhhbXBsZSxcclxuICAgICAgICAgICAgLy8gdGhlIHRhcmdldCBlbGVtZW50IGlzbid0IGNvbm5lY3RlZCB0byBkb2N1bWVudC5ib2R5LlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHJhcmUsIGJ1dCBpdCdzIGJldHRlciB0byBmYWlsIHNpbGVudGx5IHdpdGggd2VpcmQgdGFiYmluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICAvLyB0aGFuIHRvIGNyYXNoIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzKCkucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzKCkucmVtb3ZlKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgLy8gV2VsbCwgc2VtaS1zaWxlbnRseS5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RhcmdldF0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGJsb2NraW5nRWxlbWVudHMoKS50b3A7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJsb2NraW5nLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBpc0ZvY3VzYWJsZSB9IGZyb20gXCJ0YWJiYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XHJcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmNvbnN0IGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzVHJhcCh7IHRyYXBBY3RpdmUgfSkge1xyXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcclxuICAgIC8vY29uc3QgW2xhc3RBY3RpdmVFbGVtZW50LCBzZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnRdID0gdXNlU3RhdGU8Tm9kZSB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHt9KTtcclxuICAgIC8vIFdoZW4gdGhlIHRyYXAgYmVjb21lcyBhY3RpdmUsIGJlZm9yZSB3ZSBsZXQgdGhlIGJsb2NraW5nRWxlbWVudHMgaG9vayBydW4sXHJcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHdoYXRldmVyJ3MgY3VycmVudGx5IGZvY3VzZWQgYW5kIHNhdmUgaXQuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cmFwQWN0aXZlICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRvIHdoYXRldmVyJ3MgY3VycmVudGx5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICogQW55IHRpbWUgd2UgYWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgdHJhcCxcclxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXHJcbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcclxuICAgICAqIHRyYWNrZWQgaW4gZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvIGlmIG5vdClcclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5yZWFzb25zP1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1tb2RhbFwiOiB0cmFwQWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSwgdXNlUmVmRWxlbWVudFByb3BzKHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcykpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VGb2N1c1RyYXBQcm9wcyxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBjb250YWluZWQgd2l0aGluIHRoZSBnaXZlbiBub2RlLCBvciBudWxsIGlmIG5vbmUgYXJlIGZvdW5kLlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgeyBhY2NlcHROb2RlOiAobm9kZSkgPT4gKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGlzRm9jdXNhYmxlKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCkgfSk7XHJcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IHRyZWVXYWxrZXIuZmlyc3RDaGlsZCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Rm9jdXNhYmxlO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb2N1cy10cmFwLmpzLm1hcCIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgZn1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIGQsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpkKGQobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2QobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9ZChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpkfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sYz0hMD09PXQuX19oO3IuX191Kyt8fGN8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PWQobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LHo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uICQobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gcSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPXEsbi5uYXRpdmVFdmVudD1ufTt2YXIgRyxKPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxLPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHU9LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgbyBpbiByPXt9LGUpe3ZhciBpPWVbb107ViYmXCJjaGlsZHJlblwiPT09byYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWl8fChcImRlZmF1bHRWYWx1ZVwiPT09byYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9vPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1vJiYhMD09PWk/aT1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChvKT9vPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChvK3QpJiYheihlLnR5cGUpP289XCJvbmlucHV0XCI6L15vbmZvY3VzJC9pLnRlc3Qobyk/bz1cIm9uZm9jdXNpblwiOi9eb25ibHVyJC9pLnRlc3Qobyk/bz1cIm9uZm9jdXNvdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yLGUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSl9bi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOiQsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLCQgYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImV4cG9ydCBjb25zdCBFdmVudERldGFpbCA9IFN5bWJvbChcImV2ZW50LWRldGFpbFwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGVuaGFuY2VFdmVudChlLCBkZXRhaWwpIHtcclxuICAgIGxldCBldmVudCA9IGU7XHJcbiAgICBldmVudFtFdmVudERldGFpbF0gPSBkZXRhaWw7XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VHbG9iYWxIYW5kbGVyLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmxldCBwdWxzZSA9IChcInZpYnJhdGVcIiBpbiBuYXZpZ2F0b3IpID8gKCgpID0+IG5hdmlnYXRvci52aWJyYXRlKDEwKSkgOiAoKCkgPT4geyB9KTtcclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gZW5hYmxlL2Rpc2FibGUgYnV0dG9uIHZpYnJhdGlvbiBwdWxzZXMgb24gYW4gYXBwLXdpZGUgc2NhbGUuXHJcbiAqXHJcbiAqXHJcbiAqIEBwYXJhbSBmdW5jIFRoZSBmdW5jdGlvbiB0byBydW4gd2hlbiBhIGJ1dHRvbiBpcyB0YXBwZWQuXHJcbiAqIChEZWZhdWx0IGlzIGAoKSA9PiBuYXZpZ2F0b3IudmlicmF0ZSgxMClgIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBpdCwgYSBub29wIG90aGVyd2lzZSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRCdXR0b25WaWJyYXRlKGZ1bmMpIHtcclxuICAgIHB1bHNlID0gZnVuYztcclxufVxyXG5mdW5jdGlvbiBleGNsdWRlcyh0YXJnZXQsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlPy5bdGFyZ2V0XSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4vKipcclxuICogc2VsZWN0aW9uLmNvbnRhaW5zTm9kZSBkb2Vzbid0IGFjY291bnQgZm9yIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCxcclxuICogc28gaGVyZSdzIGEgd29ya2Fyb3VuZCBmb3IgdGhhdC5cclxuICpcclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIG5vZGVIYXNTZWxlY3RlZFRleHQoZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbj8uY29udGFpbnNOb2RlKGVsZW1lbnQsIHRydWUpICYmICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbi8qKlxyXG4gKiBBZGRzIHRoZSBuZWNlc3NhcnkgZXZlbnQgaGFuZGxlcnMgdG8gY3JlYXRlIGEgXCJwcmVzc1wiLWxpa2UgZXZlbnQgZm9yXHJcbiAqIGJ1dHRvbnMgYW5kIGFueXRoaW5nIGVsc2UgdGhhdCdzIFwiY2xpY2svdGFwL3ByZXNzL3RvdWNoXCItYWJsZS5cclxuICpcclxuICogTm90YWJseSwgdGhlIGZvbGxvd2luZyBjYXNlcyBhcmUgY292ZXJlZDpcclxuICogKiBUaGUgdGFyZ2V0IGVsZW1lbnQgaXMgcHJvcGVybHkgZm9jdXNlZCwgZXZlbiBvbiBpT1MgU2FmYXJpICgqZXNwZWNpYWxseSogb24gaU9TIFNhZmFyaSlcclxuICogKiBEb3VibGUtY2xpY2tzIHdvbid0IHNlbGVjdCB0ZXh0LlxyXG4gKiAqIENvbnZlcnNlbHksIG1hbnVhbGx5IHNlbGVjdGluZyB0ZXh0IHdvbid0IGludm9rZSBhIHByZXNzLlxyXG4gKiAqIEtleWJvYXJkIGV2ZW50cyAmbWRhc2g7IGBlbnRlcmAgaW1tZWRpYXRlbHkgaW52b2tlcyB0aGUgaGFuZGxlciwgd2hpbGUgYHNwYWNlYCBpbnZva2VzIGl0IG9uIGtleXVwLlxyXG4gKiAqIEhhcHRpYyBmZWVkYmFjayAob24sIGxpa2UsIHRoZSBvbmUgYnJvd3NlciBjb21iaW5hdGlvbiB0aGF0IHN1cHBvcnRzIGl0ICZtZGFzaDsgdGhpcyBjYW4gYmUgZGlzYWJsZWQgYXBwLXdpZGUgd2l0aCBgc2V0QnV0dG9uVmlicmF0ZWApXHJcbiAqXHJcbiAqIEluIGFkZGl0aW9uLCB3aGVuIHRoZSBDU1MgYDphY3RpdmVgIHBzZXVkby1jbGFzcyB3b3VsZCBhcHBseSB0byBhIG5vcm1hbCBidXR0b25cclxuICogKGkuZS4gd2hlbiBob2xkaW5nIHRoZSBzcGFjZWJhciBvciBkdXJpbmcgbW91c2Vkb3duKSwgYHsgXCJkYXRhLXBzZXVkby1hY3RpdmVcIjogXCJ0cnVlXCIgfWBcclxuICogaXMgYWRkZWQgdG8gdGhlIHByb3BzLiAgWW91IGNhbiBlaXRoZXIgbGV0IGl0IHBhc3MgdGhyb3VnaCBhbmQgc3R5bGUgaXQgdGhyb3VnaCBuZXcgQ1NTLFxyXG4gKiBvciBpbnNwZWN0IHRoZSByZXR1cm5lZCBwcm9wcyBmb3IgaXQgYW5kIGFkZCBlLmcuIGFuIGAuYWN0aXZlYCBjbGFzcyBmb3IgZXhpc3RpbmcgQ1NTXHJcbiAqXHJcbiAqIEBwYXJhbSBvbkNsaWNrU3luY1xyXG4gKiBAcGFyYW0gZXhjbHVkZSBXaGV0aGVyIHRoZSBwb2x5ZmlsbCBzaG91bGRuJ3QgYXBwbHkgKGNhbiBzcGVjaWZ5IGZvciBzcGVjaWZpYyBpbnRlcmFjdGlvbnMpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJlc3NFdmVudEhhbmRsZXJzKG9uQ2xpY2tTeW5jLCBleGNsdWRlKSB7XHJcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICAvLyBBIGJ1dHRvbiBjYW4gYmUgYWN0aXZhdGVkIGluIG11bHRpcGxlIHdheXMsIHNvIG9uIHRoZSBvZmYgY2hhbmNlXHJcbiAgICAvLyB0aGF0IG11bHRpcGxlIGFyZSB0cmlnZ2VyZWQgYXQgb25jZSwgd2Ugb25seSAqYWN0dWFsbHkqIHJlZ2lzdGVyXHJcbiAgICAvLyBhIHByZXNzIG9uY2UgYWxsIG9mIG91ciBcIm9uXCIgc2lnbmFscyBoYXZlIHR1cm5lZCBiYWNrIHRvIFwib2ZmXCIuXHJcbiAgICAvLyBXZSBhcHByb3hpbWF0ZSB0aGlzIGJ5IGp1c3QgaW5jcmVtZW50aW5nIHdoZW4gYWN0aXZlLCBhbmRcclxuICAgIC8vIGRlY3JlbWVudGluZyB3aGVuIGRlYWN0aXZhdGVkLlxyXG4gICAgLy9cclxuICAgIC8vIEFzIGFuIGVtZXJnZW5jeSBmYWlsc2FmZSwgd2hlbiB0aGUgZWxlbWVudCBsb29zZXMgZm9jdXMsXHJcbiAgICAvLyB0aGlzIGlzIHJlc2V0IGJhY2sgdG8gMC5cclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZSwgZ2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgLy8gSWYgd2UgdGhlIGN1cnJlbnQgdGV4dCBzZWxlY3Rpb24gY2hhbmdlcyB0byBpbmNsdWRlIHRoaXMgZWxlbWVudFxyXG4gICAgLy8gRFVSSU5HIGUuZy4gYSBtb3VzZWRvd24sIHRoZW4gd2UgZG9uJ3Qgd2FudCB0aGUgbW91c2V1cCB0byBcImNvdW50XCIsIGFzIGl0IHdlcmUsXHJcbiAgICAvLyBiZWNhdXNlIGl0cyBvbmx5IHB1cnBvc2Ugd2FzIHNlbGVjdGluZyB0ZXh0LCBub3QgY2xpY2tpbmcgYnV0dG9ucy5cclxuICAgIC8vXHJcbiAgICAvLyBUbyBjYXRjaCB0aGlzLCBhbnkgdGltZSB0aGUgdGV4dCBzZWxlY3Rpb24gaW5jbHVkZXMgdXMgd2hpbGUgaW4gdGhlIG1pZGRsZVxyXG4gICAgLy8gb2YgYSBjbGljaywgdGhpcyBmbGFnIGlzIHNldCwgd2hpY2ggY2FuY2VscyB0aGUgYWN0aXZhdGlvbiBvZiBhIHByZXNzLlxyXG4gICAgLy8gVGhlIGZsYWcgaXMgcmVzZXQgYW55IHRpbWUgdGhlIHNlbGVjdGlvbiBpcyBlbXB0eSBvciB0aGUgYnV0dG9uIGlzXHJcbiAgICAvLyBubyBsb25nZXIgYWN0aXZlLlxyXG4gICAgY29uc3QgW3RleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24sIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlR2xvYmFsSGFuZGxlcihkb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgZSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbihhY3RpdmUgPT0gMCA/IGZhbHNlIDogbm9kZUhhc1NlbGVjdGVkVGV4dChnZXRFbGVtZW50KCkpKTtcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlID09IDApXHJcbiAgICAgICAgICAgIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24oZmFsc2UpO1xyXG4gICAgfSwgW2FjdGl2ZSA9PSAwXSk7XHJcbiAgICBjb25zdCBvbkFjdGl2ZVN0YXJ0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoYSA9PiArK2EpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvbkFjdGl2ZVN0b3AgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZShhID0+IE1hdGgubWF4KDAsIC0tYSkpO1xyXG4gICAgICAgIGlmICh0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0QWN0aXZlKCkgPD0gMCkge1xyXG4gICAgICAgICAgICBoYW5kbGVQcmVzcyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAob25DbGlja1N5bmMpIHtcclxuICAgICAgICAgICAgLy8gTm90ZTogVGhlIGVsZW1lbnQgaXMgZm9jdXNlZCBoZXJlIGJlY2F1c2Ugb2YgaU9TIFNhZmFyaS5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gSXQncyBhbHdheXMgaU9TIFNhZmFyaS5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gaU9TIFNhZmFyaSAodGVzdGVkIG9uIDEyKSBkb3ducmlnaHQgcmVmdXNlcyB0byBhbGxvdyBcclxuICAgICAgICAgICAgLy8gZWxlbWVudHMgdG8gYmUgbWFudWFsbHkgZm9jdXNlZCBVTkxFU1MgaXQgaGFwcGVucyB3aXRoaW5cclxuICAgICAgICAgICAgLy8gYW4gZXZlbnQgaGFuZGxlciBsaWtlIHRoaXMuICBJdCBhbHNvIGRvZXNuJ3QgZm9jdXNcclxuICAgICAgICAgICAgLy8gYnV0dG9ucyBieSBkZWZhdWx0IHdoZW4gY2xpY2tlZCwgdGFwcGVkLCBldGMuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIElmIGl0IGJlY29tZXMgcHJvYmxlbWF0aWMgdGhhdCBidXR0b24tbGlrZXMgZXhwbGljaXRseSBiZWNvbWVcclxuICAgICAgICAgICAgLy8gZm9jdXNlZCB3aGVuIHRoZXkgYXJlIHByZXNzZWQsIHRoZW4gYW4gYWx0ZXJuYXRpdmUgc29sdXRpb24gZm9yXHJcbiAgICAgICAgICAgIC8vIHRoZSBxdWVzdGlvbiBvZiBcImhvdyBkbyBtZW51IGJ1dHRvbnMga2VlcCB0aGVpciBtZW51cyBvcGVuXCJcclxuICAgICAgICAgICAgLy8gYW5kIG90aGVyIGZvY3VzLXJlbGF0ZWQgbm9uc2Vuc2UgbmVlZHMgdG8gYmUgZmlndXJlZCBvdXQuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEZvciBpT1MgU2FmYXJpLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBcImZvY3VzXCIgaW4gZWxlbWVudClcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIC8vIFdoYXRldmVyIHRoZSBicm93c2VyIHdhcyBnb2luZyB0byBkbyB3aXRoIHRoaXMgZXZlbnQsXHJcbiAgICAgICAgICAgIC8vIGZvcmdldCBpdC4gV2UncmUgdHVybmluZyBpdCBpbnRvIGEgXCJwcmVzc1wiIGV2ZW50LlxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIEFsc28gc3RvcCBhbnlvbmUgZWxzZSBmcm9tIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LFxyXG4gICAgICAgICAgICAvLyBzaW5jZSB3ZSdyZSBleHBsaWNpdGx5IGhhbmRsaW5nIGl0LlxyXG4gICAgICAgICAgICAvLyAoTm90YWJseSwgdGhpcyBhbGxvd3MgbGFiZWxzIHRvIHdyYXAgaW5wdXRzLCB3aXRoIHRoZW1cclxuICAgICAgICAgICAgLy8gYm90aCBoYXZpbmcgcHJlc3MgZXZlbnQgaGFuZGxlcnMsIHdpdGhvdXQgZG91YmxlLWZpcmluZylcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gSGFwdGljIGZlZWRiYWNrIGZvciB0aGlzIHByZXNzIGV2ZW50XHJcbiAgICAgICAgICAgIHB1bHNlKCk7XHJcbiAgICAgICAgICAgIC8vIEFjdHVhbGx5IGNhbGwgb3VyIGhhbmRsZXIuXHJcbiAgICAgICAgICAgIG9uQ2xpY2tTeW5jKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcclxuICAgICAgICAvLyBTdG9wIGRvdWJsZSBjbGlja3MgZnJvbSBzZWxlY3RpbmcgdGV4dCBpbiBhbiBjb21wb25lbnQgdGhhdCdzICpzdXBwb3NlZCogdG8gYmUgYWN0aW5nIGxpa2UgYSBidXR0b24sXHJcbiAgICAgICAgLy8gYnV0IGFsc28gZG9uJ3QgcHJldmVudCB0aGUgdXNlciBmcm9tIHNlbGVjdGluZyB0aGF0IHRleHQgbWFudWFsbHkgaWYgdGhleSByZWFsbHkgd2FudCB0b1xyXG4gICAgICAgIC8vICh3aGljaCB1c2VyLXNlbGVjdDogbm9uZSB3b3VsZCBkbywgYnV0IGNhbmNlbGxpbmcgYSBkb3VibGUgY2xpY2sgb24gbW91c2VEb3duIGRvZXNuJ3QpXHJcbiAgICAgICAgaWYgKGUuZGV0YWlsID4gMSlcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMClcclxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDAgJiYgYWN0aXZlID4gMClcclxuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uQmx1ciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKDApO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uTW91c2VMZWF2ZSA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiBvbkJsdXI7XHJcbiAgICBjb25zdCBvbktleURvd24gPSBleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpICYmIGV4Y2x1ZGVzKFwiZW50ZXJcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIiBcIiAmJiBvbkNsaWNrU3luYyAmJiAhZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSkge1xyXG4gICAgICAgICAgICAvLyBXZSBkb24ndCBhY3R1YWxseSBhY3RpdmF0ZSBpdCBvbiBhIHNwYWNlIGtleWRvd25cclxuICAgICAgICAgICAgLy8gYnV0IHdlIGRvIHByZXZlbnREZWZhdWx0IHRvIHN0b3AgdGhlIHBhZ2UgZnJvbSBzY3JvbGxpbmcuXHJcbiAgICAgICAgICAgIG9uQWN0aXZlU3RhcnQoZSk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIiAmJiAhZXhjbHVkZXMoXCJlbnRlclwiLCBleGNsdWRlKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG9uQWN0aXZlU3RhcnQoZSk7XHJcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25LZXlVcCA9IGV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIiBcIiAmJiAhZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSlcclxuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoZS5kZXRhaWwgPiAxKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAocHJvcHMpID0+IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbktleVVwLCBvbkJsdXIsIG9uTW91c2VEb3duLCBvbk1vdXNlVXAsIG9uTW91c2VMZWF2ZSwgb25DbGljaywgc3R5bGU6IHRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24gPyB7IGN1cnNvcjogXCJ0ZXh0XCIgfSA6IHVuZGVmaW5lZCwgLi4ueyBcImRhdGEtcHNldWRvLWFjdGl2ZVwiOiBhY3RpdmUgJiYgIXRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24gPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9IH0sIHByb3BzKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFCdXR0b24oeyB0YWcsIHByZXNzZWQsIG9uUHJlc3MgfSkge1xyXG4gICAgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvblByb3BzKHsgXCJhcmlhLXByZXNzZWRcIjogYXJpYVByZXNzZWQsIHRhYkluZGV4LCByb2xlLCAuLi5wIH0pIHtcclxuICAgICAgICBjb25zdCBwcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4gb25QcmVzcz8uKGVuaGFuY2VFdmVudChlLCB7IHByZXNzZWQ6IHByZXNzZWQgPT0gbnVsbCA/IG51bGwgOiAhcHJlc3NlZCB9KSksIHVuZGVmaW5lZCkocCk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uUHJvcHMgPSB7IHJvbGUsIHRhYkluZGV4LCBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCA/PyAocHJlc3NlZCA9PT0gdHJ1ZSA/IFwidHJ1ZVwiIDogcHJlc3NlZCA9PT0gZmFsc2UgPyBcImZhbHNlXCIgOiB1bmRlZmluZWQpIH07XHJcbiAgICAgICAgY29uc3QgZGl2UHJvcHMgPSB7IC4uLmJ1dHRvblByb3BzLCB0YWJJbmRleDogdGFiSW5kZXggPz8gMCwgcm9sZTogcm9sZSA/PyBcImJ1dHRvblwiIH07XHJcbiAgICAgICAgY29uc3QgYW5jaG9yUHJvcHMgPSB7IC4uLmRpdlByb3BzIH07XHJcbiAgICAgICAgc3dpdGNoICh0YWcpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYnV0dG9uUHJvcHMsIHByb3BzKTtcclxuICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGFuY2hvclByb3BzLCBwcm9wcyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShkaXZQcm9wcywgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQXJpYUJ1dHRvblByb3BzXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1idXR0b24uanMubWFwIiwiaW1wb3J0IHsgdXNlQ2hpbGRGbGFnLCB1c2VDaGlsZE1hbmFnZXIsIHVzZUhhc0ZvY3VzLCB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uKHsgZXhwYW5kZWRJbmRleCwgc2V0RXhwYW5kZWRJbmRleCB9KSB7XHJcbiAgICBjb25zdCBbbGFzdEZvY3VzZWRJbmRleCwgc2V0TGFzdEZvY3VzZWRJbmRleCwgZ2V0TGFzdEZvY3VzZWRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjdXJyZW50Rm9jdXNlZEluZGV4LCBzZXRDdXJyZW50Rm9jdXNlZEluZGV4LCBnZXRDdXJyZW50Rm9jdXNlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgc3RhYmxlU2V0RXhwYW5kZWRJbmRleCA9IHVzZVN0YWJsZUNhbGxiYWNrKHNldEV4cGFuZGVkSW5kZXggPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucywgdXNlTWFuYWdlZENoaWxkOiB1c2VNYW5hZ2VkQ2hpbGRTZWN0aW9uIH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleCgoMCkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleCgobWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLmxlbmd0aCAtIDEpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoaSA9PiAoKGkgPz8gMCkgLSAxKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGkgPT4gKChpID8/IDApICsgMSkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLCBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBcImJsb2NrXCIsIGluZGV4OiBsYXN0Rm9jdXNlZEluZGV4ID8/IDAsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9QcmV2LCBuYXZpZ2F0ZVRvTmV4dCB9KTtcclxuICAgIHVzZUNoaWxkRmxhZyh7XHJcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IGV4cGFuZGVkSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsXHJcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaSwgb3BlbikgPT4gbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldPy5zZXRPcGVuRnJvbVBhcmVudChvcGVuKSxcclxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiAobWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldPy5nZXRPcGVuRnJvbVBhcmVudCgpID8/IG51bGwpXHJcbiAgICB9KTtcclxuICAgIHVzZUNoaWxkRmxhZyh7XHJcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IGxhc3RGb2N1c2VkSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsXHJcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaSwgb3BlbikgPT4gb3BlbiAmJiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0uZm9jdXMoKSxcclxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbiA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcmdzLmluZGV4O1xyXG4gICAgICAgIGNvbnN0IFtvcGVuRnJvbVBhcmVudCwgc2V0T3BlbkZyb21QYXJlbnQsIGdldE9wZW5Gcm9tUGFyZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgcmFuZG9tSWQ6IGJvZHlSYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtYWNjb3JkaW9uLXNlY3Rpb24tYm9keS1cIiB9KTtcclxuICAgICAgICBjb25zdCB7IHJhbmRvbUlkOiBoZWFkUmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZUhlYWRSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZEhlYWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLWFjY29yZGlvbi1zZWN0aW9uLWhlYWRlci1cIiB9KTtcclxuICAgICAgICBsZXQgb3BlbiA9ICgoYXJncy5vcGVuID8/IG9wZW5Gcm9tUGFyZW50KSA/PyBudWxsKTtcclxuICAgICAgICAvLyBUT0RPOiBDb252ZXJ0IHRvIHVzZSB1c2VNYW5hZ2VkQ2hpbGQgc28gdGhhdCB0aGlzIGhvb2sgXHJcbiAgICAgICAgLy8gaXMgc3RhYmxlIHdpdGhvdXQgKGRpcmVjdGx5KSBkZXBlbmRpbmcgb24gdGhlIG9wZW4gc3RhdGUuXHJcbiAgICAgICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlcih7IHRhZyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlSGFzRm9jdXNQcm9wcywgZ2V0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzZWRDaGFuZ2VkOiB1c2VDYWxsYmFjaygoZm9jdXNlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50Rm9jdXNlZEluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRGb2N1c2VkSW5kZXgob2xkSW5kZXggPT4gb2xkSW5kZXggPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0sIFtdKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q3VycmVudEZvY3VzZWRJbmRleCgpICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RWxlbWVudCgpPy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24oeyBpbmRleCwgb3Blbiwgc2V0T3BlbkZyb21QYXJlbnQsIGdldE9wZW5Gcm9tUGFyZW50LCBmb2N1cyB9KTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyh7IFtcImFyaWEtZXhwYW5kZWRcIl06IGFyaWFFeHBhbmRlZCwgW1wiYXJpYS1kaXNhYmxlZFwiXTogYXJpYURpc2FibGVkLCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGFyZ3MuaW5kZXgpOyB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE9wZW5Gcm9tUGFyZW50KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWJsZVNldEV4cGFuZGVkSW5kZXgobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KGFyZ3MuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCByZXRCID0gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4OiAwIH0sIHVzZVByZXNzRXZlbnRIYW5kbGVycyhvbkNsaWNrLCB1bmRlZmluZWQpKHByb3BzKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV0MyA9IHVzZU1lcmdlZFByb3BzKCkodXNlSGVhZFJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZEJvZHlJZFByb3BzKFwiYXJpYS1jb250cm9sc1wiKSh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IChhcmlhRXhwYW5kZWQgPz8gKCEhb3BlbikudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IChhcmlhRGlzYWJsZWQgPz8gKG9wZW4gPyBcInRydWVcIiA6IHVuZGVmaW5lZCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnVzZUhhc0ZvY3VzUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocmV0QikpXHJcbiAgICAgICAgICAgICAgICB9KSksIHsgb25Gb2N1cyB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMocmV0Myk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICByZXR1cm4geyB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlclByb3BzIH07XHJcbiAgICAgICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25Qcm9wcywgaW5kZXgsIG9wZW5dKTtcclxuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHkgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHkoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzKHsgcm9sZSwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldDEgPSB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikoeyByb2xlOiByb2xlID8/IFwicmVnaW9uXCIsIC4uLnByb3BzIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldDIgPSB1c2VCb2R5UmFuZG9tSWRQcm9wcyhyZXQxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGV4cGFuZGVkOiBvcGVuLFxyXG4gICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlcixcclxuICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5LFxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvblByb3BzXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uLFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY2NvcmRpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbi8qKlxyXG4gKiBBZGRzIGFuIElEIGFuZCBcImFyaWEtbGFiZWxsZWRieVwiIGZvciB0d28gZWxlbWVudHMsIGFuIFwiaW5wdXRcIiBlbGVtZW50IGFuZCBhIFwibGFiZWxcIiBlbGVtZW50LlxyXG4gKlxyXG4gKiBSZXR1cm5zIHRoZSBgdXNlUmVmZXJlbmNlZElkUHJvcHNgIGhvb2tzIGlmIHlvdSBuZWVkIHRvIGFsc28gYWRkIG90aGVyIElELXJlZmVyZW5jaW5nIGF0dHJpYnV0ZXMsIGxpa2UgYGZvcmBcclxuICpcclxuICogQHNlZSB1c2VJbnB1dExhYmVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4LCBiYWNrdXBUZXh0IH0gPSB7IGxhYmVsUHJlZml4OiBcImxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJpbnB1dC1cIiB9KSB7XHJcbiAgICBjb25zdCBbbGFiZWxFbGVtZW50LCBzZXRMYWJlbEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW5wdXRFbGVtZW50LCBzZXRJbnB1dEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldExhYmVsRWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0TGFiZWxFbGVtZW50IH0pO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRJbnB1dEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlSW5wdXRSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldElucHV0RWxlbWVudCB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlTGFiZWxSYW5kb21JZFByb3BzLCBpZDogbGFiZWxJZCwgcmFuZG9tSWQ6IGxhYmVsUmFuZG9tSWQsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogbGFiZWxQcmVmaXggfSk7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZUlucHV0UmFuZG9tSWRQcm9wcywgaWQ6IGlucHV0SWQsIHJhbmRvbUlkOiBpbnB1dFJhbmRvbUlkLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IGlucHV0UHJlZml4IH0pO1xyXG4gICAgY29uc3QgbGFiZWxIYXNNb3VudGVkID0gISEobGFiZWxFbGVtZW50KTtcclxuICAgIGNvbnN0IGlucHV0SGFzTW91bnRlZCA9ICEhKGlucHV0RWxlbWVudCk7XHJcbiAgICBjb25zdCB1c2VHZW5lcmljTGFiZWxMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbExhYmVsKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHM6IChwcm9wcykgPT4geyByZXR1cm4gdXNlTGFiZWxSYW5kb21JZFByb3BzKHVzZUxhYmVsUmVmRWxlbWVudFByb3BzKHByb3BzKSk7IH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlR2VuZXJpY0xhYmVsSW5wdXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWxJbnB1dCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzOiAoeyBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieSwgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh1c2VJbnB1dFJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyhcImFyaWEtbGFiZWxsZWRieVwiKSh1c2VJbnB1dFJlZkVsZW1lbnRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLWxhYmVsXCI6ICghbGFiZWxIYXNNb3VudGVkID8gYmFja3VwVGV4dCA6IGFyaWFMYWJlbCkgPz8gYXJpYUxhYmVsIH0sIHByb3BzKSkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW2xhYmVsSGFzTW91bnRlZF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VHZW5lcmljTGFiZWxJbnB1dCxcclxuICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbCxcclxuICAgICAgICB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLFxyXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsXHJcbiAgICAgICAgbGFiZWxJZCxcclxuICAgICAgICBpbnB1dElkLFxyXG4gICAgICAgIGxhYmVsRWxlbWVudCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50LFxyXG4gICAgICAgIGdldElucHV0RWxlbWVudCxcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIEhhbmRsZXMgdGhlIGF0dHJpYnV0ZXMgYGlkYCwgYGZvcmAsIGFuZCBgYXJpYS1sYWJlbGxlZGJ5YCBmb3IgdG8gcmVsYXRlZCBlbGVtZW50cy5cclxuICpcclxuICogSXQncyBhc3N1bWVkIHRoYXQgdGhlIGxhYmVsIGlzIGFuIGBIVE1MTGFiZWxFbGVtZW50YCwgYW5kIHRoZSBpbnB1dCBpcyBzb21ldGhpbmcgZm9yIHdoaWNoXHJcbiAqIHRoZSBgZm9yYCBhdHRyaWJ1dGUgY2FuIHJlZmVyZW5jZS5cclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnB1dExhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4IH0gPSB7IGxhYmVsUHJlZml4OiBcImxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJpbnB1dC1cIiB9KSB7XHJcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcywgaW5wdXRJZCwgbGFiZWxJZCwgaW5wdXRFbGVtZW50LCBnZXRJbnB1dEVsZW1lbnQsIGxhYmVsRWxlbWVudCwgZ2V0TGFiZWxFbGVtZW50IH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXggfSk7XHJcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsTGFiZWwoeyB0YWcgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VJbnB1dExhYmVsTGFiZWxQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aEZvciA9IHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aG91dEZvciA9IHByb3BzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHModGFnID09IFwibGFiZWxcIiA/IHdpdGhGb3IgOiB3aXRob3V0Rm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsSW5wdXRdKTtcclxuICAgIGNvbnN0IHVzZUlucHV0TGFiZWxJbnB1dCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUlucHV0TGFiZWxJbnB1dCgpIHtcclxuICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbElucHV0KCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlSW5wdXRMYWJlbElucHV0UHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlSW5wdXRMYWJlbExhYmVsLFxyXG4gICAgICAgIHVzZUlucHV0TGFiZWxJbnB1dCxcclxuICAgICAgICBsYWJlbElkLFxyXG4gICAgICAgIGlucHV0SWQsXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LFxyXG4gICAgICAgIGxhYmVsRWxlbWVudCxcclxuICAgICAgICBnZXRJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IGhhbmRsZXNJbnB1dCA9ICh0YWcsIGxhYmVsUG9zaXRpb24sIHdoaWNoKSA9PiB7XHJcbiAgICBpZiAobGFiZWxQb3NpdGlvbiA9PT0gXCJzZXBhcmF0ZVwiKSB7XHJcbiAgICAgICAgaWYgKHdoaWNoID09PSBcImlucHV0LWVsZW1lbnRcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZSBpZiAod2hpY2ggPT09IFwibGFiZWwtZWxlbWVudFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdGFnICE9IFwiaW5wdXRcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGxhYmVsUG9zaXRpb24gPT09IFwid3JhcHBpbmdcIikge1xyXG4gICAgICAgIGlmICh3aGljaCA9PT0gXCJpbnB1dC1lbGVtZW50XCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAod2hpY2ggPT0gXCJsYWJlbC1lbGVtZW50XCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogSGFuZGxlcyBsYWJlbCB0eXBlICh3cmFwcGluZyBvciBzZXBhcmF0ZSkgZm9yIGNoZWNrYm94ZXMsIHJhZGlvcywgc3dpdGNoZXMsIGV0Yy5cclxuICogQHBhcmFtIHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZSh7IGNoZWNrZWQsIGRpc2FibGVkLCBsYWJlbFBvc2l0aW9uLCBvbklucHV0LCByb2xlIH0pIHtcclxuICAgIGNvbnN0IHN0YWJsZU9uSW5wdXQgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IG9uSW5wdXQ/LihlKTsgfSk7XHJcbiAgICBjb25zdCB7IGlucHV0SWQsIGxhYmVsSWQsIHVzZUlucHV0TGFiZWxJbnB1dDogdXNlSUxJbnB1dCwgdXNlSW5wdXRMYWJlbExhYmVsOiB1c2VJTExhYmVsLCBnZXRMYWJlbEVsZW1lbnQsIGdldElucHV0RWxlbWVudCB9ID0gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtY2hlY2tib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtY2hlY2tib3gtaW5wdXQtXCIgfSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VJbnB1dExhYmVsSW5wdXRQcm9wczogdXNlSUxJbnB1dFByb3BzIH0gPSB1c2VJTElucHV0KCk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xyXG4gICAgICAgIC8vIG9uQ2xpY2sgYW5kIG9uQ2hhbmdlIGFyZSBhIGJpdCBtZXNzeSwgc28gd2UgbmVlZCB0b1xyXG4gICAgICAgIC8vICphbHdheXMqIG1ha2Ugc3VyZSB0aGF0IHRoZSB2aXNpYmxlIHN0YXRlIGlzIGNvcnJlY3RcclxuICAgICAgICAvLyBhZnRlciBhbGwgdGhlIGV2ZW50IGR1c3Qgc2V0dGxlcy5cclxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMjc0NSxcclxuICAgICAgICAvLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMTg5OSNpc3N1ZWNvbW1lbnQtNTI1NjkwMTk0XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgdGFnID09IFwiaW5wdXRcIikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0YWcsIGNoZWNrZWRdKTtcclxuICAgICAgICByZXR1cm4geyBnZXRJbnB1dEVsZW1lbnQ6IGdldEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XHJcbiAgICAgICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiwgQ2hyb21lIHdvbid0IGZpcmUgb25JbnB1dCBldmVudHMgZm9yIHJhZGlvIGJ1dHRvbnMgdGhhdCBhcmUgdGFiSW5kZXg9LTE/P1xyXG4gICAgICAgICAgICAvLyBOZWVkcyBpbnZlc3RpZ2F0aW5nLCBidXQgb25JbnB1dCB3b3JrcyBmaW5lIGluIEZpcmVmb3hcclxuICAgICAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoZGlzYWJsZWQgfHwgIWhhbmRsZXNJbnB1dCh0YWcsIGxhYmVsUG9zaXRpb24sIFwiaW5wdXQtZWxlbWVudFwiKSA/IHVuZGVmaW5lZCA6IHN0YWJsZU9uSW5wdXQsIHVuZGVmaW5lZCkoe30pO1xyXG4gICAgICAgICAgICBpZiAodGFnID09IFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uSW5wdXQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBwcm9wcyA9IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VJTElucHV0UHJvcHMocHJvcHMpKTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHRoZSB3cmFwcGVkIGxhYmVsIGhhbmRsZXMgYWxsIGludGVyYWN0aW9ucyxcclxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoaXMgZWxlbWVudCBjYW4ndCBiZSBpbnRlcmFjdGVkIHdpdGhcclxuICAgICAgICAgICAgICAgIC8vIGV2ZW4gaWYgaXQncyBhbiBpbnB1dCBlbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuaW5lcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uRm9jdXMgPSBlID0+IGdldExhYmVsRWxlbWVudCgpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnID09PSBcImlucHV0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnJvbGUgPSByb2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtY2hlY2tlZFwiXSA9IGNoZWNrZWQgPyBcInRydWVcIiA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgbGFiZWwgY2xpY2tzIGNhbid0IGFmZmVjdCB0aGUgY2hlY2tib3ggd2hpbGUgaXQncyBkaXNhYmxlZFxyXG4gICAgICAgICAgICBwcm9wcy5vbkNsaWNrID0gZGlzYWJsZWQgPyAoKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KSA6IHByb3BzLm9uQ2xpY2s7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHAwLCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZUlMSW5wdXQsIHJvbGUsIGxhYmVsUG9zaXRpb24sIGRpc2FibGVkLCBjaGVja2VkXSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudCh7IHRhZyB9KSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VJbnB1dExhYmVsTGFiZWxQcm9wczogdXNlSUxMYWJlbFByb3BzIH0gPSB1c2VJTExhYmVsKHsgdGFnIH0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3UHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoZGlzYWJsZWQgfHwgIWhhbmRsZXNJbnB1dCh0YWcsIGxhYmVsUG9zaXRpb24sIFwibGFiZWwtZWxlbWVudFwiKSA/IHVuZGVmaW5lZCA6IHN0YWJsZU9uSW5wdXQsIHVuZGVmaW5lZCkoe30pO1xyXG4gICAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PSBcIndyYXBwaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnJvbGUgPSByb2xlO1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gZGlzYWJsZWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1jaGVja2VkXCJdID0gY2hlY2tlZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIG9uZSBjYXNlIHdoZXJlIHRoZXJlJ3MgYWxtb3N0IG5vdGhpbmcgdG8gZG9cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBtb3N0IG5vcm1hbCBjYXNlIHdoZXJlIGV2ZXJ5dGhpbmcgYWN0cyBhY2NvcmRpbmcgbm9ybWFsIEhUTUwgbWVjaGFuaWNzLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEp1c3QgbWFrZSBzdXJlIHRoYXQgbGFiZWwgY2xpY2tzIGNhbid0IGFmZmVjdCB0aGUgY2hlY2tib3ggd2hpbGUgaXQncyBkaXNhYmxlZFxyXG4gICAgICAgICAgICBuZXdQcm9wcy5vbkNsaWNrID0gZGlzYWJsZWQgPyAoKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KSA6IG5ld1Byb3BzLm9uQ2xpY2s7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCB1c2VJTExhYmVsUHJvcHMocDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMgfTtcclxuICAgIH0sIFt1c2VJTExhYmVsLCBkaXNhYmxlZCwgY2hlY2tlZCwgcm9sZSwgbGFiZWxQb3NpdGlvbl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50LFxyXG4gICAgICAgIGdldExhYmVsRWxlbWVudCxcclxuICAgICAgICBnZXRJbnB1dEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxhYmVsLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VDaGVja2JveExpa2UgfSBmcm9tIFwiLi91c2UtbGFiZWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFDaGVja2JveCh7IGxhYmVsUG9zaXRpb24sIGNoZWNrZWQsIG9uSW5wdXQsIGRpc2FibGVkIH0pIHtcclxuICAgIGNvbnN0IG9uSW5wdXRFbmhhbmNlZCA9IChlKSA9PiBvbklucHV0Py4oZW5oYW5jZUV2ZW50KGUsIHsgY2hlY2tlZDogIWNoZWNrZWQgfSkpO1xyXG4gICAgY29uc3QgeyBnZXRJbnB1dEVsZW1lbnQsIGdldExhYmVsRWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQgfSA9IHVzZUNoZWNrYm94TGlrZSh7IGNoZWNrZWQ6ICEhY2hlY2tlZCwgbGFiZWxQb3NpdGlvbiwgcm9sZTogXCJjaGVja2JveFwiLCBkaXNhYmxlZCwgb25JbnB1dDogb25JbnB1dEVuaGFuY2VkIH0pO1xyXG4gICAgY29uc3QgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XHJcbiAgICAgICAgY29uc3QgeyBnZXRJbnB1dEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzIH0gPSB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQoeyB0YWcgfSk7XHJcbiAgICAgICAgY29uc3QgaXNNaXhlZCA9IChjaGVja2VkID09IFwibWl4ZWRcIik7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZ2V0SW5wdXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dEVsZW1lbnQgJiYgdGFnID09PSBcImlucHV0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pbmRldGVybWluYXRlID0gaXNNaXhlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtpc01peGVkLCB0YWddKTtcclxuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveElucHV0RWxlbWVudFByb3BzIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcclxuICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMocDApO1xyXG4gICAgICAgICAgICBwcm9wcy5jaGVja2VkID8/PSAhIWNoZWNrZWQ7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT0gXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgcHJvcHMudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsIGNoZWNrZWQsIGxhYmVsUG9zaXRpb24sIGRpc2FibGVkXSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveExhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzIH0gPSB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQoeyB0YWcgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94TGFiZWxFbGVtZW50UHJvcHMgfTtcclxuICAgIH0sIFt1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQsIGRpc2FibGVkLCBsYWJlbFBvc2l0aW9uXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50LFxyXG4gICAgICAgIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGVja2JveC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBFdmVudERldGFpbCwgZW5oYW5jZUV2ZW50IH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja2JveEdyb3VwKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIHNob3VsZEZvY3VzT25DaGFuZ2UsIG9uVXBkYXRlQ2hpbGRyZW46IG9uVXBkYXRlQ2hpbGRyZW5VbnN0YWJsZSB9KSB7XHJcbiAgICBjb25zdCBvblVwZGF0ZUNoaWxkcmVuID0gdXNlU3RhYmxlQ2FsbGJhY2sob25VcGRhdGVDaGlsZHJlblVuc3RhYmxlKTtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIHNob3VsZEZvY3VzT25DaGFuZ2UgfSk7XHJcbiAgICAvL2NvbnN0IFt1bmNoZWNrZWRDb3VudCwgc2V0VW5oZWNrZWRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGVja2VkQ291bnQsIHNldENoZWNrZWRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoZWNrZWRJbmRpY2VzID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICAvL2NvbnN0IFtzZWxmSXNDaGVja2VkLCBzZXRTZWxmSXNDaGVja2VkLCBnZXRTZWxmSXNDaGVja2VkXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBcIm1peGVkXCI+KGZhbHNlKTtcclxuICAgIGNvbnN0IGdldFNlbGZJc0NoZWNrZWRVbnN0YWJsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2UgPD0gMCA/IGZhbHNlIDogcGVyY2VudGFnZSA+PSAxID8gdHJ1ZSA6IFwibWl4ZWRcIjtcclxuICAgIH0sIFtjaGVja2VkQ291bnQsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcclxuICAgIGNvbnN0IGdldFNlbGZJc0NoZWNrZWRTdGFibGUgPSB1c2VTdGFibGVDYWxsYmFjayhnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUpO1xyXG4gICAgLy8gSWYgdGhlIHVzZXIgaGFzIGNoYW5nZWQgdGhlIHBhcmVudCBjaGVja2JveCdzIHZhbHVlLCB0aGVuIHRoaXMgcmVmIGhvbGRzIGEgbWVtb3J5IG9mIHdoYXQgdmFsdWVzIHdlcmUgaGVsZCBiZWZvcmUuXHJcbiAgICAvLyBPdGhlcndpc2UsIGl0J3MgbnVsbCB3aGVuIHRoZSBsYXN0IGlucHV0IHdhcyBmcm9tIGEgY2hpbGQgY2hlY2tib3guIFxyXG4gICAgY29uc3Qgc2F2ZWRDaGVja2VkVmFsdWVzID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgb25DaGVja2JveEdyb3VwUGFyZW50SW5wdXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBzZWxmSXNDaGVja2VkID0gZ2V0U2VsZklzQ2hlY2tlZFN0YWJsZSgpO1xyXG4gICAgICAgIGlmIChzZWxmSXNDaGVja2VkID09PSB0cnVlIHx8IChzZWxmSXNDaGVja2VkID09PSBmYWxzZSAmJiBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA9PSBudWxsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IGZhbHNlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZklzQ2hlY2tlZCA9PT0gXCJtaXhlZFwiKSB7XHJcbiAgICAgICAgICAgIHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50LnNldChjaGlsZC5pbmRleCwgY2hpbGQuZ2V0Q2hlY2tlZCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IHRydWUgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA/PyB0cnVlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBjaGlsZCBJRHMsIGFuZCBhbnkgdGltZSBhbnkgb2YgdGhlbSBjaGFuZ2UsIFxyXG4gICAgLy8gZ2VuZXJhdGUgYSBuZXcgc3RyaW5nIHdpdGggYWxsIG9mIHRoZW0gY29uY2F0ZW5hdGVkIHRvZ2V0aGVyXHJcbiAgICAvLyAoYnV0IG9ubHkgb25jZSBwZXIgcmVuZGVyKTtcclxuICAgIGNvbnN0IGFsbElkcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgY29uc3QgW2FyaWFDb250cm9scywgc2V0QXJpYUNvbnRyb2xzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VwZGF0ZUluZGV4LCBzZXRJZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgbm90aWZ5Q2hlY2tlZCA9IHVzZUNhbGxiYWNrKChpbmRleCwgY2hlY2tlZCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tlZEluZGljZXMuY3VycmVudC5oYXMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyArIDEpKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuYWRkKGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuaGFzKGluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENvdW50KGMgPT4gKGMgLSAxKSk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbc2V0Q2hlY2tlZENvdW50LCBjaGVja2VkSW5kaWNlc10pO1xyXG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBzZXRTZWxmSXNDaGVja2VkKHBlcmNlbnRhZ2UgPD0gMCA/IGZhbHNlIDogcGVyY2VudGFnZSA+PSAxID8gdHJ1ZSA6IFwibWl4ZWRcIilcclxuICAgIH0sIFtzZXRTZWxmSXNDaGVja2VkLCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoLCBjaGVja2VkQ291bnRdKTsqL1xyXG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cFBhcmVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtY29udHJvbHNcIjogYXJpYUNvbnRyb2xzIH0sIHByb3BzKTtcclxuICAgIH0sIFthcmlhQ29udHJvbHNdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0QXJpYUNvbnRyb2xzKEFycmF5LmZyb20oYWxsSWRzLmN1cnJlbnQpLmpvaW4oXCIgXCIpKTtcclxuICAgIH0sIFt1cGRhdGVJbmRleF0pO1xyXG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cENoaWxkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHsgaW5kZXgsIHRleHQsIGNoZWNrZWQsIGlkLCAuLi5yZXN0IH0pIHtcclxuICAgICAgICBjb25zdCBnZXRDaGVja2VkID0gdXNlU3RhYmxlR2V0dGVyKGNoZWNrZWQpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsbElkcy5jdXJyZW50LmFkZChpZCk7XHJcbiAgICAgICAgICAgIHNldElkVXBkYXRlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgICAgIHNldElkVXBkYXRlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIFtpZF0pO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmeUNoZWNrZWQoaW5kZXgsIGNoZWNrZWQpO1xyXG4gICAgICAgIH0sIFtpbmRleCwgY2hlY2tlZF0pO1xyXG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBpbmRleCwgdGV4dCwgaWQsIGdldENoZWNrZWQsIC4uLnJlc3QgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFiYmFibGUsXHJcbiAgICAgICAgICAgIHVzZUNoZWNrYm94R3JvdXBDaGlsZFByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSkpLCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzXSlcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIG5vdGlmeUNoZWNrZWQsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFuYWdlZENoZWNrYm94ZXM6IG1hbmFnZWRDaGlsZHJlbixcclxuICAgICAgICB1c2VDaGVja2JveEdyb3VwQ2hpbGQsXHJcbiAgICAgICAgdXNlQ2hlY2tib3hHcm91cFBhcmVudFByb3BzLFxyXG4gICAgICAgIHBhcmVudElzQ2hlY2tlZDogZ2V0U2VsZklzQ2hlY2tlZFVuc3RhYmxlKCksXHJcbiAgICAgICAgcGFyZW50UGVyY2VudENoZWNrZWQ6IChjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSxcclxuICAgICAgICBvbkNoZWNrYm94R3JvdXBQYXJlbnRJbnB1dCxcclxuICAgICAgICB0YWJiYWJsZUluZGV4LFxyXG4gICAgICAgIGZvY3VzOiBmb2N1c0N1cnJlbnQsXHJcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcclxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3gtZ3JvdXAuanMubWFwIiwiaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCwgdXNlRm9jdXNUcmFwLCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogQWRkcyBldmVudCBoYW5kbGVycyBmb3IgYSBtb2RhbC1saWtlIHNvZnQtZGlzbWlzcyBpbnRlcmFjdGlvbi5cclxuICpcclxuICogVGhhdCBpcywgYW55IGNsaWNrcyBvciB0YXBzIG91dHNpZGUgb2YgdGhlIGdpdmVuIGNvbXBvbmVudCxcclxuICogb3IgYW55IHRpbWUgdGhlIEVzY2FwZSBrZXkgaXMgcHJlc3NlZCB3aXRoaW4gdGhlIGNvbXBvbmVudCxcclxuICogKHdpdGggdmFyaW91cyBicm93c2VyIG9kZGl0aWVzIHJlZ2FyZGluZyBjbGlja3Mgb24gYmxhbmsgb3IgaW5lcnQgYXJlYXMgaGFuZGxlZClcclxuICogdGhlIGNvbXBvbmVudCB3aWxsIHJlcXVlc3QgdG8gY2xvc2UgaXRzZWxmLlxyXG4gKlxyXG4gKiBPZiBjb3Vyc2UsIGlmIHlvdSBkb24ndCBkbyBhbnl0aGluZyBpbiB0aGUgYG9uQ2xvc2VgIGZ1bmN0aW9uLFxyXG4gKiBpdCB3b24ndCBiZSBhIHNvZnQgZGlzbWlzcyBhbnltb3JlLlxyXG4gKlxyXG4gKiBAcGFyYW0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU29mdERpc21pc3MoeyBvbkNsb3NlLCBnZXRFbGVtZW50cyB9KSB7XHJcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSk7XHJcbiAgICBjb25zdCBzdGFibGVHZXRFbGVtZW50cyA9IHVzZVN0YWJsZUNhbGxiYWNrKGdldEVsZW1lbnRzKTtcclxuICAgIGNvbnN0IGdldE9wZW4gPSB1c2VTdGFibGVHZXR0ZXIob3Blbik7XHJcbiAgICBjb25zdCBvbkJhY2tkcm9wQ2xpY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiBvbkJhY2tkcm9wQ2xpY2soZSkge1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RWxlbWVudCgpPy5vd25lckRvY3VtZW50O1xyXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50Py5kZWZhdWx0VmlldztcclxuICAgICAgICAvLyBCYXNpY2FsbHksIFwid2FzIHRoaXMgZXZlbnQgZmlyZWQgb24gdGhlIHJvb3QtbW9zdCBlbGVtZW50LCBvciBhdCBsZWFzdCBhbiBlbGVtZW50IG5vdCBjb250YWluZWQgYnkgdGhlIG1vZGFsP1wiXHJcbiAgICAgICAgLy8gRWl0aGVyIGNvdWxkIGJlIGhvdyB0aGUgYnJvd3NlciBoYW5kbGVzIHRoZXNlIHNvcnRzIG9mIFwiaW50ZXJhY3Rpbmcgd2l0aCBub3RoaW5nXCIgZXZlbnRzLlxyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHN0YWJsZU9uQ2xvc2UoXCJiYWNrZHJvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gc3RhYmxlR2V0RWxlbWVudHMoKTtcclxuICAgICAgICBpZiAoZWxlbWVudHMgJiYgZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XHJcbiAgICAgICAgICAgIGxldCBmb3VuZEluc2lkZUNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSW5zaWRlQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmRJbnNpZGVDbGljaylcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2UoXCJiYWNrZHJvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB7IHVzZUFjdGl2ZUVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCh7XHJcbiAgICAgICAgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKG5ld0VsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkRm9jdXNhYmxlRWxlbWVudHMgPSBzdGFibGVHZXRFbGVtZW50cygpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRGb2N1c2FibGVFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbGlkRm9jdXNhYmxlRWxlbWVudHMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRm9jdXNhYmxlRWxlbWVudHMgPSBbdmFsaWRGb2N1c2FibGVFbGVtZW50c107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmb2N1c2FibGUgb2YgdmFsaWRGb2N1c2FibGVFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2FibGU/LmNvbnRhaW5zKG5ld0VsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbG9zZShcImxvc3QtZm9jdXNcIik7XHJcbiAgICAgICAgfSwgW10pXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcclxuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZT8ub3duZXJEb2N1bWVudDtcclxuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgICAgICAvLyBTaW5jZSBldmVyeXRoaW5nIGVsc2UgaXMgaW5lcnQsIHdlIGxpc3RlbiBmb3IgY2FwdHVyZWQgY2xpY2tzIG9uIHRoZSB3aW5kb3dcclxuICAgICAgICAgICAgLy8gKHdlIGRvbid0IHVzZSBvbkNsaWNrIHNpbmNlIHRoYXQgZG9lc24ndCBmaXJlIHdoZW4gY2xpY2tlZCBvbiBlbXB0eS9pbmVydCBhcmVhcylcclxuICAgICAgICAgICAgLy8gTm90ZTogV2UgbmVlZCBhICpzZXBhcmF0ZSogdG91Y2ggZXZlbnQgb24gbW9iaWxlIFNhZmFyaSwgYmVjYXVzZVxyXG4gICAgICAgICAgICAvLyBpdCBkb2Vzbid0IGxldCBjbGljayBldmVudHMgYnViYmxlIG9yIGJlIGNhcHR1cmVkIGZyb20gdHJhZGl0aW9uYWxseSBub24taW50ZXJhY3RpdmUgZWxlbWVudHMsXHJcbiAgICAgICAgICAgIC8vIGJ1dCB0b3VjaCBldmVudHMgd29yayBhcyBleHBlY3RlZC5cclxuICAgICAgICAgICAgY29uc3QgbW91c2VEb3duID0gKGUpID0+IHsgaWYgKGdldE9wZW4oKSlcclxuICAgICAgICAgICAgICAgIG9uQmFja2Ryb3BDbGljayhlKTsgfTtcclxuICAgICAgICAgICAgY29uc3QgdG91Y2hTdGFydCA9IChlKSA9PiB7IGlmIChnZXRPcGVuKCkpXHJcbiAgICAgICAgICAgICAgICBvbkJhY2tkcm9wQ2xpY2soZSk7IH07XHJcbiAgICAgICAgICAgIGNvbnN0IGtleURvd24gPSAoZSkgPT4geyBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgIHN0YWJsZU9uQ2xvc2UoXCJlc2NhcGVcIik7XHJcbiAgICAgICAgICAgIH0gfTtcclxuICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93biwgeyBjYXB0dXJlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnQsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgd2luZG93Py5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd24pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW10pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHVzZVNvZnREaXNtaXNzUHJvcHM6IHVzZUNhbGxiYWNrKHByb3BzID0+IHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyh1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpKSwgW3VzZUFjdGl2ZUVsZW1lbnRQcm9wcywgdXNlUmVmRWxlbWVudFByb3BzXSkgfTtcclxufVxyXG4vKipcclxuICogQSBnZW5lcmljIG1vZGFsIGhvb2ssIHVzZWQgYnkgbW9kYWwgZGlhbG9ncywgYnV0IGNhbiBhbHNvXHJcbiAqIGJlIHVzZWQgYnkgYW55dGhpbmcgdGhhdCdzIG1vZGFsIHdpdGggYSBiYWNrZHJvcC5cclxuICogQHBhcmFtIHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGFsKHsgb3Blbiwgb25DbG9zZSB9KSB7XHJcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSk7XHJcbiAgICBjb25zdCBbbW9kYWxEZXNjcmliZWRCeUJvZHksIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUhpZGVTY3JvbGwob3Blbik7XHJcbiAgICBjb25zdCB7IGlkOiBtb2RhbElkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VNb2RhbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VNb2RhbFJlZmVyZW5jaW5nSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tb2RhbC1cIiB9KTtcclxuICAgIGNvbnN0IHsgaWQ6IGJvZHlJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLWJvZHktXCIgfSk7XHJcbiAgICBjb25zdCB7IGlkOiB0aXRsZUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VUaXRsZUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VUaXRsZVJlZmVyZW5jaW5nSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tb2RhbC10aXRsZS1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VNb2RhbFJlZkVsZW1lbnQsIGdldEVsZW1lbnQ6IGdldE1vZGFsRWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICBjb25zdCB7IHVzZVNvZnREaXNtaXNzUHJvcHMgfSA9IHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZTogc3RhYmxlT25DbG9zZSwgZ2V0RWxlbWVudHM6IGdldE1vZGFsRWxlbWVudCB9KTtcclxuICAgIGNvbnN0IHVzZU1vZGFsQmFja2Ryb3AgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbEJhY2tkcm9wKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3BQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlclVwOiAoKSA9PiBzdGFibGVPbkNsb3NlKFwiYmFja2Ryb3BcIikgfSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1vZGFsUHJvcHMgPSBmdW5jdGlvbiAoeyBcImFyaWEtbW9kYWxcIjogYXJpYU1vZGFsLCByb2xlLCAuLi5wMCB9KSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VGb2N1c1RyYXBQcm9wcyB9ID0gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZTogb3BlbiB9KTtcclxuICAgICAgICBjb25zdCBwMSA9IHVzZVRpdGxlUmVmZXJlbmNpbmdJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHAwKTtcclxuICAgICAgICBjb25zdCBwMiA9IHVzZU1vZGFsSWRQcm9wcyhwMSk7XHJcbiAgICAgICAgY29uc3QgcEZpbmFsID0gdXNlQm9keVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikocDIpO1xyXG4gICAgICAgIHJldHVybiB1c2VGb2N1c1RyYXBQcm9wcyh1c2VTb2Z0RGlzbWlzc1Byb3BzKHVzZU1lcmdlZFByb3BzKCkodXNlTW9kYWxSZWZFbGVtZW50KHsgcm9sZTogXCJkaWFsb2dcIiB9KSwgbW9kYWxEZXNjcmliZWRCeUJvZHkgPyBwRmluYWwgOiBwMikpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1c2VNb2RhbFRpdGxlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxUaXRsZSgpIHtcclxuICAgICAgICBjb25zdCB1c2VNb2RhbFRpdGxlUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVRpdGxlSWRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geyB1c2VNb2RhbFRpdGxlUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1vZGFsQm9keSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQm9keSh7IGRlc2NyaXB0aXZlIH0pIHtcclxuICAgICAgICBzZXRNb2RhbERlc2NyaWJlZEJ5Qm9keShkZXNjcmlwdGl2ZSk7XHJcbiAgICAgICAgY29uc3QgdXNlTW9kYWxCb2R5UHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZUJvZHlJZFByb3BzKHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsQm9keVByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZU1vZGFsUHJvcHMsXHJcbiAgICAgICAgdXNlTW9kYWxUaXRsZSxcclxuICAgICAgICB1c2VNb2RhbEJvZHksXHJcbiAgICAgICAgdXNlTW9kYWxCYWNrZHJvcFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIGZvciBoaWRpbmcgdGhlIHNjcm9sbCBiYXIgb2YgdGhlIHJvb3QgSFRNTCBlbGVtZW50XHJcbiAqIHdpdGhvdXQgc2hpZnRpbmcgdGhlIGxheW91dCBvZiB0aGUgcGFnZSBtb3JlIHRoYW4gYWRkaW5nIGEgZm93IHBpeGVsc1xyXG4gKiBvZiBwYWRkaW5nIHRvIHRoZSByb290IGVsZW1lbnQgaWYgbmVjZXNzYXJ5LlxyXG4gKiBAcGFyYW0gaGlkZVNjcm9sbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUhpZGVTY3JvbGwoaGlkZVNjcm9sbCkge1xyXG4gICAgY29uc3QgW2dldFNjcm9sbGJhcldpZHRoLCBzZXRTY3JvbGxiYXJXaWR0aF0gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZ2V0U2Nyb2xsYmFySGVpZ2h0LCBzZXRTY3JvbGxiYXJIZWlnaHRdID0gdXNlUGFzc2l2ZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVNjcm9sbCkge1xyXG4gICAgICAgICAgICAvLyBXaGVuIHNjcm9sbGluZyBpcyByZXN1bWVkLCB3ZSdsbCBuZWVkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBrZWVwIHRoaXMgaW5mb3JtYXRpb24gYXJvdW5kXHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIC8vIE1lYXN1cmUgdGhlIHdpZHRoIG9mIHRoZSBwYWdlIChtaW51cyB0aGUgc2Nyb2xsYmFyKVxyXG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRoU2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0V2l0aFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIEFwcGx5IGEgY2xhc3MgdGhhdCBoaWRlcyB0aGUgc2Nyb2xsYmFyLlxyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgbXVsdGlwbGUgdGhpbmdzIGFyZSBsb2NraW5nIHNjcm9sbCwga2VlcCB0cmFjayBvZiBob3cgbWFueSBhcmUgZG9pbmcgdGhhdFxyXG4gICAgICAgICAgICAvLyAoanVzdCBhZGQgMSBvbiBlbmFibGUsIHN1YnRyYWN0IDEgb24gZGlzYWJsZSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAvLyBNZWFzdXJlIHRoZSBuZXcgd2lkdGggd2l0aG91dCBhIHNjcm9sbGJhciBcclxuICAgICAgICAgICAgLy8gc28gd2UgY2FuIHRha2UgdGhlIGRpZmZlcmVuY2UgYXMgdGhlIHNjcm9sbGJhciB3aWR0aC5cclxuICAgICAgICAgICAgbGV0IHdpZHRoV2l0aG91dFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgbGV0IGhlaWdodFdpdGhvdXRTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsYmFyV2lkdGggPSAod2lkdGhXaXRob3V0U2Nyb2xsQmFyIC0gd2lkdGhXaXRoU2Nyb2xsQmFyKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbGJhckhlaWdodCA9IChoZWlnaHRXaXRob3V0U2Nyb2xsQmFyIC0gaGVpZ2h0V2l0aFNjcm9sbEJhcik7XHJcbiAgICAgICAgICAgIC8vIEZhaWxzYWZlIC0tIGlmIHRoaXMgbWVhc3VyaW5nIHRyaWNrIGRvZXMgc29tZXRoaW5nIHVuZXhwZWN0ZWQsIGp1c3QgaWdub3JlIGl0XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aCA+IDgwKVxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyV2lkdGggPSAwO1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFySGVpZ2h0ID4gODApXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAvLyBNYWtlIG91ciBtZWFzdXJlbWVudHMgYXZhaWxhYmxlIGFzIENTUyBwcm9wZXJ0aWVzIGZvciBnZW5lcmFsIHVzZVxyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsYmFyLXdpZHRoXCIsIGAke3Njcm9sbGJhcldpZHRofXB4YCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxiYXItaGVpZ2h0XCIsIGAke3Njcm9sbGJhckhlaWdodH1weGApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsc3RvcC10b3BcIiwgYCR7b3JpZ2luYWxTY3JvbGxUb3B9cHhgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbHN0b3AtbGVmdFwiLCBgJHtvcmlnaW5hbFNjcm9sbExlZnR9cHhgKTtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsYmFyV2lkdGgoc2Nyb2xsYmFyV2lkdGgpO1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxiYXJIZWlnaHQoc2Nyb2xsYmFySGVpZ2h0KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFVuZG8gYWxsIHRoZSB0aGluZ3Mgd2UganVzdCBkaWRcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID0gKCsoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gfHwgXCIwXCIpIC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIHdlcmUgdGhlIGxhc3Qgc2Nyb2xsLWxvY2tpbmcgdGhpbmcgdG8gc3RvcCwgdGhlbiByZW1vdmUgdGhlIGNsYXNzIHRoYXQgc3RvcHMgc2Nyb2xsaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbC1oaWRlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb2N1bWVudC1zY3JvbGwtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFsc28sIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvIHRoaXMgYnkgZm9yY2luZyB0aGUgc2Nyb2xsIGJlaGF2aW9yIHRvIG5vdCBiZSBzbW9vdGhcclxuICAgICAgICAgICAgICAgICAgICAvLyAoaXQncyBpbnN0YW50IGlmIG5vdGhpbmcgaXMgc2V0IHRvIHNtb290aCwgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzc29tLXZpZXcvI3Njcm9sbGluZyksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nLCB0aGVuIHJlc3RvcmluZyB0aGUgb3JpZ2luYWwgc2Nyb2xsIGJlaGF2aW9yIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICh3aGljaCB3YXMgcHJvYmFibHkgYWxyZWFkeSBhdXRvIGFueXdheSwgYnV0IGp1c3QgdG8gYmUgc2FmZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjcm9sbEJlaGF2aW9yID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUbyh7IHRvcDogb3JpZ2luYWxTY3JvbGxUb3AsIGxlZnQ6IG9yaWdpbmFsU2Nyb2xsTGVmdCwgYmVoYXZpb3I6IFwiYXV0b1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IG9yaWdpbmFsU2Nyb2xsQmVoYXZpb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2hpZGVTY3JvbGxdKTtcclxuICAgIHJldHVybiB7IGdldFNjcm9sbGJhcldpZHRoLCBnZXRTY3JvbGxiYXJIZWlnaHQgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbW9kYWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSBcIi4vdXNlLW1vZGFsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhRGlhbG9nKHsgb3Blbiwgb25DbG9zZSB9KSB7XHJcbiAgICAvLyBUT0RPOiBEaWZmZXJlbmNlcyBiZXR3ZWVuIGRpYWxvZyBhbmQgbW9kYWwgZ28gaGVyZSwgcHJlc3VtYWJseS5cclxuICAgIC8vIE5vbi1tb2RhbCBkaWFsb2dzIG5lZWQgdG8gYmUgYWJsZSB0byBiZSByZXBvc2l0aW9uZWQsIGV0Yy5cclxuICAgIGNvbnN0IHsgdXNlTW9kYWxCYWNrZHJvcCwgdXNlTW9kYWxCb2R5LCB1c2VNb2RhbFByb3BzLCB1c2VNb2RhbFRpdGxlIH0gPSB1c2VNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSk7XHJcbiAgICBjb25zdCB1c2VEaWFsb2dCYWNrZHJvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9ID0gdXNlTW9kYWxCYWNrZHJvcCgpO1xyXG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ0JhY2tkcm9wUHJvcHM6IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9O1xyXG4gICAgfSwgW3VzZU1vZGFsQmFja2Ryb3BdKTtcclxuICAgIGNvbnN0IHVzZURpYWxvZ0JvZHkgPSB1c2VDYWxsYmFjaygoeyBkZXNjcmlwdGl2ZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbEJvZHlQcm9wcyB9ID0gdXNlTW9kYWxCb2R5KHsgZGVzY3JpcHRpdmUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nQm9keVByb3BzOiB1c2VNb2RhbEJvZHlQcm9wcyB9O1xyXG4gICAgfSwgW3VzZU1vZGFsQmFja2Ryb3BdKTtcclxuICAgIGNvbnN0IHVzZURpYWxvZ1Byb3BzID0gdXNlTW9kYWxQcm9wcztcclxuICAgIGNvbnN0IHVzZURpYWxvZ1RpdGxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxUaXRsZVByb3BzIH0gPSB1c2VNb2RhbFRpdGxlKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nVGl0bGVQcm9wczogdXNlTW9kYWxUaXRsZVByb3BzIH07XHJcbiAgICB9LCBbdXNlTW9kYWxUaXRsZV0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VEaWFsb2dQcm9wcyxcclxuICAgICAgICB1c2VEaWFsb2dUaXRsZSxcclxuICAgICAgICB1c2VEaWFsb2dCb2R5LFxyXG4gICAgICAgIHVzZURpYWxvZ0JhY2tkcm9wXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kaWFsb2cuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VHZW5lcmljTGFiZWwgfSBmcm9tIFwiLi91c2UtbGFiZWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94TXVsdGkoeyAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcywgZ2V0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7fSk7XHJcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1saXN0Ym94LWxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJhcmlhLWxpc3Rib3gtXCIgfSk7XHJcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCBjdXJyZW50VHlwZWFoZWFkLCBmb2N1c0N1cnJlbnQsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0Rm9jdXNlZElubmVyIH0pO1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xyXG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICBjb25zdCBbc2hpZnRIZWxkLCBzZXRTaGlmdEhlbGQsIGdldFNoaWZ0SGVsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0eXBlYWhlYWRJblByb2dyZXNzID0gKCEhY3VycmVudFR5cGVhaGVhZCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpXS5zZXRUeXBlYWhlYWRJblByb2dyZXNzKHR5cGVhaGVhZEluUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0eXBlYWhlYWRJblByb2dyZXNzLCBjaGlsZENvdW50XSk7XHJcbiAgICBjb25zdCB1c2VMaXN0Ym94TXVsdGlJdGVtID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGluZm8uc2VsZWN0ZWQ7XHJcbiAgICAgICAgY29uc3QgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gdXNlU3RhYmxlR2V0dGVyKHNlbGVjdGVkKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICAgICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhpbmZvLm9uU2VsZWN0ID8/ICgoKSA9PiB7IH0pKTtcclxuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgLi4uaW5mbywgc2V0VHlwZWFoZWFkSW5Qcm9ncmVzcyB9KTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBnZXRTaGlmdEhlbGQoKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZDogdHJ1ZSB9IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3RhYmJhYmxlXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpSXRlbVByb3BzLCB0YWJiYWJsZSB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUl0ZW1Qcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhpbmZvLmRpc2FibGVkID8gbnVsbCA6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgLi4uZSwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZDogIWdldFNlbGVjdGVkKCkgfSB9KTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSwgeyBzcGFjZTogdHlwZWFoZWFkSW5Qcm9ncmVzcyA/IFwiZXhjbHVkZVwiIDogdW5kZWZpbmVkIH0pKHt9KTtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZXRzaXplXCJdID0gKGNoaWxkQ291bnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHRhYmJhYmxlID8/IGZhbHNlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoaW5mby5kaXNhYmxlZClcclxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCBwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgY2hpbGRDb3VudCwgdHlwZWFoZWFkSW5Qcm9ncmVzc10pO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveE11bHRpTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlMYWJlbCgpIHtcclxuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlMYWJlbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMocHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlMYWJlbFByb3BzIH07XHJcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcclxuICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUl0ZW0sIHVzZUxpc3Rib3hNdWx0aVByb3BzLCB1c2VMaXN0Ym94TXVsdGlMYWJlbCwgdGFiYmFibGVJbmRleCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgZm9jdXM6IGZvY3VzQ3VycmVudCwgbWFuYWdlZENoaWxkcmVuIH07XHJcbiAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcclxuICAgICAgICBwcm9wc1tcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCJdID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHModXNlSGFzRm9jdXNQcm9wcyh1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24sIG9uS2V5VXAsIG9uRm9jdXNPdXQgfSwgcHJvcHMpKSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHsgaWYgKGUua2V5ID09IFwiU2hpZnRcIilcclxuICAgICAgICBzZXRTaGlmdEhlbGQodHJ1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIG9uS2V5VXAoZSkgeyBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKVxyXG4gICAgICAgIHNldFNoaWZ0SGVsZChmYWxzZSk7IH1cclxuICAgIGZ1bmN0aW9uIG9uRm9jdXNPdXQoZSkgeyBzZXRTaGlmdEhlbGQoZmFsc2UpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxpc3Rib3gtbXVsdGkuanMubWFwIiwiaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCwgdXNlQ2hpbGRGbGFnLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZUdlbmVyaWNMYWJlbCB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hTaW5nbGUoeyBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgc2VsZWN0aW9uTW9kZSwgLi4uYXJncyB9KSB7XHJcbiAgICBjb25zdCBbYW55SXRlbXNGb2N1c2VkLCBzZXRBbnlJdGVtc0ZvY3VzZWQsIGdldEFueUl0ZW1zRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcywgZ2V0SW5wdXRFbGVtZW50IH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRBbnlJdGVtc0ZvY3VzZWQgfSk7XHJcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbElucHV0KCk7XHJcbiAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uU2VsZWN0ID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIC8vIFRyYWNrIHdoZXRoZXIgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgbGlzdCBib3ggcGFyZW50IGVsZW1lbnQuXHJcbiAgICAvLyBXaGVuIGl0J3Mgbm90LCB3ZSByZXNldCB0aGUgdGFiYmFibGUgaW5kZXggYmFjayB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQuXHJcbiAgICBjb25zdCB7IHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyB9ID0gdXNlQWN0aXZlRWxlbWVudCh7IG9uQWN0aXZlRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGFjdGl2ZUVsZW1lbnQpID0+IHNldEFueUl0ZW1zRm9jdXNlZCghIShnZXRJbnB1dEVsZW1lbnQoKT8uY29udGFpbnMoYWN0aXZlRWxlbWVudCkpKSwgW10pIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWFueUl0ZW1zRm9jdXNlZClcclxuICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfSwgW2FueUl0ZW1zRm9jdXNlZCwgc2VsZWN0ZWRJbmRleCwgbmF2aWdhdGVUb0luZGV4XSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoe1xyXG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcclxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZENoaWxkcmVuW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksXHJcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaSkgPT4gKG1hbmFnZWRDaGlsZHJlbltpXT8uZ2V0U2VsZWN0ZWQoKSA/PyBudWxsKVxyXG4gICAgfSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG5hdmlnYXRlVG9JbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH0sIFtzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoXSk7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgIGNvbnN0IHVzZUxpc3Rib3hTaW5nbGVJdGVtID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkLCAuLi5pbmZvIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGluZm8uaW5kZXg7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgdGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZSA9PSBcImZvY3VzXCIpIHtcclxuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0YWJiYWJsZSwgc2VsZWN0aW9uTW9kZSwgaW5kZXhdKTtcclxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzLCB0YWJiYWJsZSwgc2VsZWN0ZWQsIGdldFNlbGVjdGVkIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUl0ZW1Qcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhpbmZvLmRpc2FibGVkID8gbnVsbCA6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQpKHt9KTtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZXRzaXplXCJdID0gKGNoaWxkQ291bnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHNlbGVjdGVkID8/IGZhbHNlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoaW5mby5kaXNhYmxlZClcclxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgc2VsZWN0aW9uTW9kZSwgY2hpbGRDb3VudF0pO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcclxuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzIH07XHJcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcclxuICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtLCB1c2VMaXN0Ym94U2luZ2xlUHJvcHMsIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCwgdGFiYmFibGVJbmRleCwgZm9jdXM6IGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgbWFuYWdlZENoaWxkcmVuIH07XHJcbiAgICBmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBwcm9wcy5yb2xlID0gXCJsaXN0Ym94XCI7XHJcbiAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHModXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyh1c2VBY3RpdmVFbGVtZW50UHJvcHMocHJvcHMpKSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxpc3Rib3gtc2luZ2xlLmpzLm1hcCIsImltcG9ydCB7IHVzZUhhc0ZvY3VzLCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSwgdXNlVGltZW91dCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU29mdERpc21pc3MgfSBmcm9tIFwiLi91c2UtbW9kYWxcIjtcclxuLyoqXHJcbiAqIEEgbWVudSBpcyBhIHBvcHVwIGNvbnRyb2wgdGhhdCBjb250YWlucyBhIGxpc3Qgb2YgbWVudSBpdGVtcywgYW5kIHRoYXQncyBpdC5cclxuICogSXQgaGFzIHZlcnkgd2VsbC1kZWZpbmVkIGxvZ2ljIGZvciBtYW5hZ2luZyB0aG9zZSBpdGVtcyBhcyB0aGUgbWVudSdzIHN0YXRlIGNoYW5nZXMuXHJcbiAqXHJcbiAqIEEgTWVudUJhc2UgaXMganVzdCB0aGUgXCJwb3B1cFwiIHBhcnQgd2l0aG91dCB0aGUgXCJsaXN0IG9mIG1lbnUgaXRlbXNcIiBwYXJ0LiBJdCBjYW5cclxuICogKHJlYWxseSwgbXVzdCkgaGF2ZSBpbnRlcmFjdGl2ZSBjb250cm9scywgYnV0IHRoZXNlIGNvbnRyb2xzIGFyZSBhbGxvd2VkIHRvIGJlIG1vcmVcclxuICogZnJlZS1mb3JtLiBUaGlzIG1lYW5zIHRoYXQsIGxpa2UgYSBkaWFsb2csIHlvdSBtdXN0IHRlbGwgdGhpcyBob29rXHJcbiAqIHdoZXJlIHdpdGhpbiB0aGUgcG9wdXAgdG8gc2VuZCBmb2N1cyB3aGVuIG9wZW5lZCAoZm9yIGEgbWVudSBpdCdzIGp1c3QgdGhlIGZpcnN0XHJcbiAqIG1lbnUgaXRlbSwgYnV0IHdpdGggY3VzdG9tIGNvbnRlbnQgeW91J2xsIG5lZWQgdG8gcHJvdmlkZSB0aGlzKS5cclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZW51QmFzZSh7IHNlbmRGb2N1c1dpdGhpbk1lbnUsIC4uLmFyZ3MgfSkge1xyXG4gICAgY29uc3QgZ2V0U2VuZEZvY3VzV2l0aGluTWVudSA9IHVzZVN0YWJsZUdldHRlcihzZW5kRm9jdXNXaXRoaW5NZW51KTtcclxuICAgIGNvbnN0IFtmb2N1c1RyYXBBY3RpdmUsIHNldEZvY3VzVHJhcEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGxldCBvbkNsb3NlID0gYXJncy5vbkNsb3NlO1xyXG4gICAgbGV0IG9uT3BlbiA9IGFyZ3Mub25PcGVuO1xyXG4gICAgbGV0IG1lbnViYXIgPSBhcmdzLm1lbnViYXI7XHJcbiAgICBsZXQgb3BlbiA9IChtZW51YmFyID8gdHJ1ZSA6IGFyZ3Mub3Blbik7XHJcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICBjb25zdCBnZXRPcGVuID0gdXNlU3RhYmxlR2V0dGVyKG9wZW4pO1xyXG4gICAgLy8gVE9ETzogSXQncyBhd2t3YXJkIHRoYXQgdGhlIGJ1dHRvbiBmb2N1cyBwcm9wcyBhcmUgb3V0IGhlcmUgd2hlcmUgd2UgZG9uJ3QgaGF2ZSBpdHMgdHlwZSxcclxuICAgIC8vIGJ1dCBmb2N1cyBtYW5hZ2VtZW50IGlzIHN1cGVyIHNlbnNpdGl2ZSwgYW5kIGV2ZW4gd2FpdGluZyBmb3IgYSB1c2VMYXlvdXRFZmZlY3QgdG8gc3luYyBzdGF0ZSBoZXJlXHJcbiAgICAvLyB3b3VsZCBiZSB0b28gbGF0ZSwgc28gaXQgd291bGQgbG9vayBsaWtlIHRoZXJlJ3MgYSBtb21lbnQgYmV0d2VlbiBtZW51IGZvY3VzIGxvc3QgYW5kIGJ1dHRvbiBmb2N1cyBnYWluZWRcclxuICAgIC8vIHdoZXJlIG5vdGhpbmcgaXMgZm9jdXNlZC4gXHJcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcywgZ2V0TGFzdEZvY3VzZWRJbm5lcjogZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7IC8qb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZDogb25NZW51T3JCdXR0b25Mb3N0TGFzdEZvY3VzKi99KTtcclxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlQnV0dG9uSGFzRm9jdXNQcm9wcywgZ2V0TGFzdEZvY3VzZWRJbm5lcjogZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7IC8qb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZDogb25NZW51T3JCdXR0b25Mb3N0TGFzdEZvY3VzKi99KTtcclxuICAgIGNvbnN0IFtvcGVuZXJFbGVtZW50LCBzZXRPcGVuZXJFbGVtZW50LCBnZXRPcGVuZXJFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VNZW51QmFzZUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VNZW51QmFzZUlkUmVmZXJlbmNpbmdQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tZW51LVwiIH0pO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRCdXR0b25FbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUJ1dHRvblJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0T3BlbmVyRWxlbWVudCB9KTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0TWVudUVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlTWVudUJhc2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xyXG4gICAgY29uc3QgeyB1c2VTb2Z0RGlzbWlzc1Byb3BzIH0gPSB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UsIGdldEVsZW1lbnRzOiAoKSA9PiAoW2dldEJ1dHRvbkVsZW1lbnQoKSwgZ2V0TWVudUVsZW1lbnQoKV0pIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRGb2N1c1RyYXBBY3RpdmUob3Blbik7XHJcbiAgICB9LCBbb3Blbl0pO1xyXG4gICAgY29uc3QgdXNlTWVudUJhc2VQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiICYmIGdldE9wZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVzZVNvZnREaXNtaXNzUHJvcHModXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzKHVzZU1lbnVCYXNlUmVmRWxlbWVudFByb3BzKHVzZU1lbnVCYXNlSWRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIChwcm9wcykpKSkpKTtcclxuICAgIH0sIFt1c2VTb2Z0RGlzbWlzc1Byb3BzLCB1c2VNZW51QmFzZUhhc0ZvY3VzUHJvcHMsIHVzZU1lbnVCYXNlUmVmRWxlbWVudFByb3BzLCB1c2VNZW51QmFzZUlkUHJvcHNdKTtcclxuICAgIGNvbnN0IHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzKHVzZUJ1dHRvbkhhc0ZvY3VzUHJvcHModXNlTWVudUJhc2VJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHByb3BzKSkpO1xyXG4gICAgfSwgW3VzZUJ1dHRvbkhhc0ZvY3VzUHJvcHMsIHVzZUJ1dHRvblJlZkVsZW1lbnRQcm9wcywgdXNlTWVudUJhc2VJZFJlZmVyZW5jaW5nUHJvcHNdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VuZEZvY3VzV2l0aGluTWVudSA9IGdldFNlbmRGb2N1c1dpdGhpbk1lbnUoKTtcclxuICAgICAgICBpZiAoZm9jdXNUcmFwQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHNlbmRGb2N1c1dpdGhpbk1lbnU/LigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb2N1c1RyYXBBY3RpdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIoKSlcclxuICAgICAgICAgICAgICAgIGdldE9wZW5lckVsZW1lbnQoKT8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbnVsbCwgc28gd2UndmUgb25seSBqdXN0IG1vdW50ZWQgYW5kIHNob3VsZG4ndCBmb2N1cyBvdXJzZWx2ZXMuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ZvY3VzVHJhcEFjdGl2ZV0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VNZW51U2VudGluZWw6IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VTZW50aW5lbFByb3BzOiB1c2VNZW51U2VudGluZWxQcm9wcywgLi4ucmVzdCB9ID0gdXNlRm9jdXNTZW50aW5lbCh7IG9wZW4sIG9uQ2xvc2U6IChvbkNsb3NlID8/ICgoKSA9PiB7IH0pKSwgc2VuZEZvY3VzV2l0aGluTWVudSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdXNlTWVudVNlbnRpbmVsUHJvcHMsIC4uLnJlc3QgfTtcclxuICAgICAgICB9LCBbb3Blbiwgb25DbG9zZSwgc2VuZEZvY3VzV2l0aGluTWVudV0pLFxyXG4gICAgICAgIGZvY3VzVHJhcEFjdGl2ZSxcclxuICAgICAgICB1c2VNZW51QmFzZVByb3BzLFxyXG4gICAgICAgIHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMsXHJcbiAgICAgICAgZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyLFxyXG4gICAgICAgIGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lcixcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIG9uT3BlbixcclxuICAgICAgICBvbkNsb3NlXHJcbiAgICB9O1xyXG59XHJcbi8vIEEgZm9jdXMgc2VudGluYWwgaXMgYSBoaWRkZW4gYnV0IGZvY3VzYWJsZSBlbGVtZW50IHRoYXQgY29tZXMgYXQgdGhlIHN0YXJ0IG9yIGVuZCBcclxuLy8gb2YgdGhlIG91dC1vZi1wbGFjZS1mb2N1c2FibGUgY29tcG9uZW50IHRoYXQsIHdoZW4gYWN0aXZhdGVkIG9yIGZvY3VzZWQgb3ZlciwgY2xvc2VzIHRoZSBjb21wb25lbnRcclxuLy8gKGlmIGZvY3VzZWQgd2l0aGluIDEwMG1zIG9mIHRoZSBvcGVuIHByb3AgY2hhbmdpbmcsIGluc3RlYWQgb2ZcclxuLy8gY2xvc2luZywgZm9jdXNpbmcgdGhlIHNlbnRpbmVsIGltbWVkaWF0ZWx5IGFza3MgaXQgdG8gZm9jdXMgaXRzZWxmKS5cclxuLy8gVGhpcyBleGlzdHMgZm9yIHRoaW5ncyBsaWtlIG1lbnVzIHdoaWNoIGNhbiBoYXZlIGZvY3VzIGJ1dCBhbHNvIG5lZWQgYSB3YXkgdG8gcmV0dXJuXHJcbi8vIHRvIHdoYXRldmVyIG91dC1vZi1wbGFjZSBwYXJlbnQgdGhleSBjYW1lIGZyb20gd2hlbiBuYXR1cmFsbHkgdGFiYmVkIG91dCBvZiAoYXMgb3Bwb3NlZFxyXG4vLyB0byBkaWFsb2dzIHdoaWNoIGxvb3AgYmFjayBhcm91bmQgd2hlbiB0YWJiZWQgb3V0IG9mKS4gV2hpbGUgbW91c2UgdXNlcnMgY2FuIGNsaWNrIG91dCBvZiBhIG1lbnVcclxuLy8gYW5kIGtleWJvYXJkIHVzZXJzIGNhbiBlc2NhcGUgdG8gY2xvc2UgYSBtZW51LCBzY3JlZW4gcmVhZGVycyBhbmQgb3RoZXIgaW5wdXQgbWV0aG9kcyBcclxuLy8gdGhhdCBkb24ndCB1c2UgdGhvc2UgdHdvIHdvdWxkIGJlY29tZSBzdHVjay5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzU2VudGluZWwoeyBvcGVuLCBvbkNsb3NlLCBzZW5kRm9jdXNXaXRoaW5NZW51IH0pIHtcclxuICAgIGNvbnN0IGdldFNlbmRGb2N1c1dpdGhpbk1lbnUgPSB1c2VTdGFibGVHZXR0ZXIoc2VuZEZvY3VzV2l0aGluTWVudSk7XHJcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSk7XHJcbiAgICBjb25zdCBbZmlyc3RTZW50aW5lbElzQWN0aXZlLCBzZXRGaXJzdFNlbnRpbmVsSXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlVGltZW91dCh7IGNhbGxiYWNrOiAoKSA9PiB7IHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZShvcGVuKTsgfSwgdGltZW91dDogMTAwLCB0cmlnZ2VySW5kZXg6IGAke29wZW59LSR7Zmlyc3RTZW50aW5lbElzQWN0aXZlfWAgfSk7XHJcbiAgICBjb25zdCBvbkZvY3VzID0gZmlyc3RTZW50aW5lbElzQWN0aXZlID8gKCgpID0+IHN0YWJsZU9uQ2xvc2UoKSkgOiAoKCkgPT4gZ2V0U2VuZEZvY3VzV2l0aGluTWVudSgpPy4oKSk7XHJcbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4gc3RhYmxlT25DbG9zZSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VTZW50aW5lbFByb3BzOiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRm9jdXMsIG9uQ2xpY2sgfSwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYU1lbnUoeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgbm9UeXBlYWhlYWQsIG5vV3JhcCwgdHlwZWFoZWFkVGltZW91dCwgLi4uYXJncyB9KSB7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdGFiYmFibGVJbmRleCwgZm9jdXNDdXJyZW50OiBmb2N1c01lbnUsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIG5vVHlwZWFoZWFkLCBub1dyYXAsIHR5cGVhaGVhZFRpbWVvdXQsIHNob3VsZEZvY3VzT25DaGFuZ2U6IHVzZUNhbGxiYWNrKCgpID0+IGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lcigpIHx8IGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lcigpLCBbXSkgfSk7XHJcbiAgICBjb25zdCB7IHVzZU1lbnVTZW50aW5lbCwgZm9jdXNUcmFwQWN0aXZlLCB1c2VNZW51QmFzZUJ1dHRvblByb3BzLCB1c2VNZW51QmFzZVByb3BzLCBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIsIGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lciwgb3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VNZW51QmFzZSh7IC4uLmFyZ3MsIHNlbmRGb2N1c1dpdGhpbk1lbnU6IGZvY3VzTWVudSA/PyAoKCkgPT4geyB9KSB9KTtcclxuICAgIGNvbnN0IHVzZU1lbnVCdXR0b24gPSB1c2VDYWxsYmFjaygoe30pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VNZW51QnV0dG9uUHJvcHM6IGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VNZW51QmFzZUJ1dHRvblByb3BzKHApO1xyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWhhc3BvcHVwXCJdID0gXCJtZW51XCI7XHJcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZXhwYW5kZWRcIl0gPSBvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW29wZW4sIG9uQ2xvc2UsIG9uT3BlbiwgdXNlTWVudUJhc2VCdXR0b25Qcm9wc10pO1xyXG4gICAgLypjb25zdCB1c2VNZW51U3VibWVudUl0ZW0gPSB1c2VDYWxsYmFjaygoYXJnczogVXNlTWVudVN1Ym1lbnVJdGVtUGFyYW1ldGVycykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTWVudVByb3BzLCB1c2VNZW51QnV0dG9uIH0gPSB1c2VBcmlhTWVudTxIVE1MRWxlbWVudCwgQ2hpbGRFbGVtZW50LCBJPihhcmdzKTtcclxuICAgICAgICBjb25zdCB7IHVzZU1lbnVCdXR0b25Qcm9wcyB9ID0gdXNlTWVudUJ1dHRvbjxFPih7IHRhZzogXCJsaVwiIGFzIGFueSB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQ8YW55Pih7IG9uRWxlbWVudENoYW5nZTogc2V0T3BlbmVyRWxlbWVudCBhcyBPblBhc3NpdmVTdGF0ZUNoYW5nZTxhbnk+IH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnZXRFbGVtZW50LFxyXG4gICAgICAgICAgICB1c2VNZW51UHJvcHMsXHJcbiAgICAgICAgICAgIHVzZU1lbnVTdWJtZW51SXRlbVByb3BzOiBmdW5jdGlvbiA8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+Pih7IC4uLnByb3BzIH06IFApIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lbnVCdXR0b25Qcm9wcyh1c2VNZW51SWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1jb250cm9sc1wiKShwcm9wcykpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTsqL1xyXG4gICAgY29uc3QgdXNlTWVudUl0ZW0gPSB1c2VDYWxsYmFjaygoYXJncykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKGFyZ3MpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZU1lbnVJdGVtUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMocHJvcHMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTWVudUl0ZW1Qcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gdXNlTWVudVByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVcIjtcclxuICAgICAgICByZXR1cm4gdXNlTWVudUJhc2VQcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZU1lbnVQcm9wcyxcclxuICAgICAgICB1c2VNZW51QnV0dG9uLFxyXG4gICAgICAgIHVzZU1lbnVJdGVtLFxyXG4gICAgICAgIHVzZU1lbnVTZW50aW5lbCxcclxuICAgICAgICAvL3VzZU1lbnVTdWJtZW51SXRlbSxcclxuICAgICAgICBmb2N1c01lbnUsXHJcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcclxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVudS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYVRhYnMoeyBzZWxlY3Rpb25Nb2RlLCBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgb3JpZW50YXRpb246IGxvZ2ljYWxPcmllbnRhdGlvbiwgLi4uYXJncyB9KSB7XHJcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZVRhYkxpc3RIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXI6IGdldFRhYkxpc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHt9KTtcclxuICAgIGNvbnN0IFtwaHlzaWNhbE9yaWVudGF0aW9uLCBzZXRQaHlzaWNhbE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKFwiaG9yaXpvbnRhbFwiKTtcclxuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZTogdXNlQ2FsbGJhY2soKGxvZ2ljYWxEaXJlY3Rpb25JbmZvKSA9PiBzZXRQaHlzaWNhbE9yaWVudGF0aW9uKGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24obG9naWNhbE9yaWVudGF0aW9uLCBsb2dpY2FsRGlyZWN0aW9uSW5mbykpLCBbXSkgfSk7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRhYkxpc3RJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxpc3RJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItbGlzdC1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGFiZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLWxhYmVsLVwiIH0pO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBuYXZpZ2F0ZVRvSW5kZXgsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQsIGN1cnJlbnRUeXBlYWhlYWQsIGZvY3VzQ3VycmVudCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRUYWJMaXN0Rm9jdXNlZElubmVyLCBrZXlOYXZpZ2F0aW9uOiBsb2dpY2FsT3JpZW50YXRpb24gfSk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFBhbmVscywgdXNlTWFuYWdlZENoaWxkOiB1c2VNYW5hZ2VkVGFiUGFuZWwgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xyXG4gICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhvblNlbGVjdCk7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZFRhYnMubGVuZ3RoO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkVGFicylcclxuICAgICAgICAgICAgY2hpbGQuc2V0U2VsZWN0aW9uTW9kZShzZWxlY3Rpb25Nb2RlKTtcclxuICAgIH0sIFtzZWxlY3Rpb25Nb2RlXSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoeyBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkVGFicywgc2V0Q2hpbGRGbGFnOiAoaSwgc2VsZWN0ZWQpID0+IG1hbmFnZWRUYWJzW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksIGdldENoaWxkRmxhZzogaSA9PiAobWFuYWdlZFRhYnNbaV0/LmdldFNlbGVjdGVkKCkpIH0pO1xyXG4gICAgdXNlQ2hpbGRGbGFnKHsgYWN0aXZhdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFBhbmVscywgc2V0Q2hpbGRGbGFnOiAoaSwgdmlzaWJsZSkgPT4gbWFuYWdlZFBhbmVsc1tpXT8uc2V0VmlzaWJsZSh2aXNpYmxlKSwgZ2V0Q2hpbGRGbGFnOiBpID0+IChtYW5hZ2VkUGFuZWxzW2ldPy5nZXRWaXNpYmxlKCkpIH0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KChwcmV2KSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiBzZWxlY3Rpb25Nb2RlID09IFwiYWN0aXZhdGVcIikge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHdhaXQgYSBtb21lbnQgc28gdGhhdCB0aGUgdGFiIHBhbmVsIHdlIHdhbnQgdG8gZm9jdXNcclxuICAgICAgICAgICAgLy8gaXMgYWN0dWFsbHkgdmlzaWJsZSAoaS5lLiB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjaGlsZCB0byByZS1yZW5kZXIgaXRzZWxmKS5cclxuICAgICAgICAgICAgLy8gV2UgY291bGQsIGFsdGVybmF0aXZlbHksIHNpZ25hbCB0byB0aGUgY2hpbGQgdGhhdCBpdCBzaG91bGQgZm9jdXMgaXRzZWxmXHJcbiAgICAgICAgICAgIC8vIHRoZSBuZXh0IHRpbWUgaXQgcmVuZGVycyBpdHNlbGYgYXMgdmlzaWJsZSxcclxuICAgICAgICAgICAgLy8gd2hpY2ggbWlnaHQgYmUgYmV0dGVyP1xyXG4gICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VkUGFuZWxzW3NlbGVjdGVkSW5kZXhdPy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2hpbGRDb3VudCwgc2VsZWN0ZWRJbmRleCwgc2VsZWN0aW9uTW9kZV0pO1xyXG4gICAgY29uc3QgdXNlVGFiID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFiKGluZm8pIHtcclxuICAgICAgICBjb25zdCBbc2VsZWN0aW9uTW9kZUwsIHNldFNlbGVjdGlvbk1vZGVMXSA9IHVzZVN0YXRlKHNlbGVjdGlvbk1vZGUpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcclxuICAgICAgICBjb25zdCBbdGFiUGFuZWxJZCwgc2V0VGFiUGFuZWxJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiSWRQcm9wcywgaWQ6IHRhYklkLCBnZXRJZDogZ2V0VGFiSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWQsIHRhYklkLCBzZXRUYWJQYW5lbElkLCBzZXRTZWxlY3Rpb25Nb2RlOiBzZXRTZWxlY3Rpb25Nb2RlTCwgLi4uaW5mbyB9KTtcclxuICAgICAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmZvLmluZGV4KTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAodGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZUwgPT0gXCJmb2N1c1wiKSB7XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdCh7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBnZXRJbmRleCgpIH0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGFiYmFibGUsIHNlbGVjdGlvbk1vZGVdKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4geyBtYW5hZ2VkUGFuZWxzW2luZm8uaW5kZXhdPy5zZXRUYWJJZCh0YWJJZCk7IH0sIFt0YWJJZCwgaW5mby5pbmRleF0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYlByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q/LihlbmhhbmNlRXZlbnQoZSwgeyBzZWxlY3RlZEluZGV4OiBnZXRJbmRleCgpIH0pKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSwgdW5kZWZpbmVkKShwcm9wcyk7XHJcbiAgICAgICAgICAgIG5ld1Byb3BzLnJvbGUgPSBcInRhYlwiO1xyXG4gICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAoc2VsZWN0ZWQgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1jb250cm9sc1wiXSA9IHRhYlBhbmVsSWQ7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VUYWJJZFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VSZWZFbGVtZW50UHJvcHMobmV3UHJvcHMpKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VUYWJQcm9wcywgc2VsZWN0ZWQgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVRhYlBhbmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUGFuZWwoaW5mbykge1xyXG4gICAgICAgIC8vY29uc3QgW3Nob3VsZEZvY3VzLCBzZXRTaG91bGRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgW3RhYklkLCBzZXRUYWJJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlLCBnZXRWaXNpYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlUGFuZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFBhbmVsSWQsIGlkOiB0YWJQYW5lbElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1wYW5lbC1cIiB9KTtcclxuICAgICAgICBjb25zdCB7IHVzZU1hbmFnZWRDaGlsZFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VNYW5hZ2VkVGFiUGFuZWwoeyAuLi5pbmZvLCB0YWJQYW5lbElkLCBzZXRUYWJJZCwgZm9jdXMsIHNldFZpc2libGU6IHNldFZpc2libGUsIGdldFZpc2libGU6IGdldFZpc2libGUgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gZm9jdXMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGdldFRhYkxpc3RGb2N1c2VkSW5uZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudD8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IG1hbmFnZWRUYWJzW2luZm8uaW5kZXhdPy5zZXRUYWJQYW5lbElkKHRhYlBhbmVsSWQpOyB9LCBbdGFiUGFuZWxJZCwgaW5mby5pbmRleF0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYlBhbmVsUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1sYWJlbGxlZGJ5XCJdID0gbWFuYWdlZFRhYnNbaW5mby5pbmRleF0/LnRhYklkO1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJ0YWJwYW5lbFwiO1xyXG4gICAgICAgICAgICBwcm9wcy50YWJJbmRleCA/Pz0gLTE7IC8vIE1ha2Ugc3VyZSB0aGUgdGFiIHBhbmVsIGlzIHRhYmJhYmxlLlxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlUGFuZWxJZFByb3BzKHVzZU1hbmFnZWRDaGlsZFByb3BzKHByb3BzKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VUYWJQYW5lbFByb3BzLCB2aXNpYmxlIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VUYWJzTGlzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYkxpc3QoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiTGlzdFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJ0YWJsaXN0XCI7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1vcmllbnRhdGlvblwiXSA9IHBoeXNpY2FsT3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkVGFiTGFiZWxJZChcImFyaWEtbGFiZWxsZWRieVwiKSh1c2VUYWJMaXN0SGFzRm9jdXNQcm9wcyh1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYkxpc3RQcm9wcyB9O1xyXG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHBoeXNpY2FsT3JpZW50YXRpb25dKTtcclxuICAgIGNvbnN0IHVzZVRhYnNMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYnNMYWJlbCgpIHtcclxuICAgICAgICBmdW5jdGlvbiB1c2VUYWJzTGFiZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVRhYkxhYmVsSWRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYnNMYWJlbFByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4geyB1c2VUYWIsIHVzZVRhYlBhbmVsLCB1c2VUYWJzTGlzdCwgdXNlVGFic0xhYmVsLCB0YWJiYWJsZUluZGV4LCBmb2N1c1RhYkxpc3Q6IGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgbWFuYWdlZFBhbmVscywgbWFuYWdlZFRhYnMgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGFicy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VHbG9iYWxIYW5kbGVyLCB1c2VIYXNGb2N1cywgdXNlTWVyZ2VkUHJvcHMsIHVzZVBhc3NpdmVTdGF0ZSwgdXNlUmFuZG9tSWQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkgeyByZXR1cm4gZmFsc2U7IH1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFUb29sdGlwKHsgbW91c2VvdmVyRGVsYXksIG1vdXNlb3V0RGVsYXksIGZvY3VzRGVsYXkgfSkge1xyXG4gICAgbW91c2VvdmVyRGVsYXkgPz89IDQwMDtcclxuICAgIG1vdXNlb3V0RGVsYXkgPz89IDQwO1xyXG4gICAgZm9jdXNEZWxheSA/Pz0gMTtcclxuICAgIC8vIFRoZSBlc2NhcGUga2V5IHNob3VsZCBjbG9zZSB0b29sdGlwcywgYnV0IGRvIG5vdGhpbmcgZWxzZS5cclxuICAgIC8vIChpLmUuIGNsb3NpbmcgYSB0b29sdGlwIGluIGEgZGlhbG9nIE1VU1QgTk9UIGNsb3NlIHRoZSBkaWFsb2cgdG9vKVxyXG4gICAgLy8gVE9ETzogVG9vbHRpcHMgYXJlLCBlZmZlY3RpdmVseSwgYWx3YXlzIHRoZSB0b3Btb3N0IGNvbXBvbmVudCxcclxuICAgIC8vIHNvIHdlIGNhbiBqdXN0IGhhdmUgdGhlbSBsaXN0ZW4gdG8gYW5kIHN3YWxsb3cgYWxsIFwiRXNjYXBlXCJcclxuICAgIC8vIGtleSBwcmVzc2VzIGJlZm9yZSBhbnlvbmUgZWxzZS4gRm9yIGEgbW9yZSBnZW5lcmFsIHBvcHVwLFxyXG4gICAgLy8gb3IgYSB0b29sdGlwIGluIGEgdG9vbHRpcCAoISEpIGEgZGlmZmVyZW50IHNvbHV0aW9uIHdvdWxkIGJlIG5lZWRlZC5cclxuICAgIHVzZUdsb2JhbEhhbmRsZXIoZG9jdW1lbnQsIFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChnZXRPcGVuKCkgJiYgZS5rZXkgPT09IFwiRXNjYXBlXCIgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRUcmlnZ2VySG92ZXJEZWxheUNvcnJlY3RlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFRvb2x0aXBIb3ZlckRlbGF5Q29ycmVjdGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0VHJpZ2dlckZvY3VzZWREZWxheUNvcnJlY3RlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFRvb2x0aXBGb2N1c2VkRGVsYXlDb3JyZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHsgY2FwdHVyZTogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuLCBnZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVG9vbHRpcElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRvb2x0aXAtXCIgfSk7XHJcbiAgICBjb25zdCBbZ2V0VHJpZ2dlckZvY3VzZWQsIHNldFRyaWdnZXJGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZSh1c2VTdGFibGVDYWxsYmFjaygoZm9jdXNlZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gZm9jdXNlZCA/IGZvY3VzRGVsYXkgOiAxO1xyXG4gICAgICAgIGlmIChkZWxheSAhPSBudWxsICYmIGlzRmluaXRlKGRlbGF5KSkge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBzZXRUcmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkKGZvY3VzZWQpLCBmb2N1c2VkID8gZm9jdXNEZWxheSA6IDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSksIHJldHVybkZhbHNlKTtcclxuICAgIGNvbnN0IFtnZXRUb29sdGlwRm9jdXNlZCwgc2V0VG9vbHRpcEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKHVzZVN0YWJsZUNhbGxiYWNrKChmb2N1c2VkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsYXkgPSBmb2N1c2VkID8gZm9jdXNEZWxheSA6IDE7XHJcbiAgICAgICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgaXNGaW5pdGUoZGVsYXkpKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHNldFRvb2x0aXBGb2N1c2VkRGVsYXlDb3JyZWN0ZWQoZm9jdXNlZCksIGRlbGF5KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChoYW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLCByZXR1cm5GYWxzZSk7XHJcbiAgICBjb25zdCBbZ2V0VHJpZ2dlckhvdmVyLCBzZXRUcmlnZ2VySG92ZXJdID0gdXNlUGFzc2l2ZVN0YXRlKHVzZVN0YWJsZUNhbGxiYWNrKChob3ZlcmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaG92ZXJpbmcgPyBtb3VzZW92ZXJEZWxheSA6IG1vdXNlb3V0RGVsYXk7XHJcbiAgICAgICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgaXNGaW5pdGUoZGVsYXkpKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSBzZXRUaW1lb3V0KCgpID0+IHNldFRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkKGhvdmVyaW5nKSwgZGVsYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSksIHJldHVybkZhbHNlKTtcclxuICAgIGNvbnN0IFtnZXRUb29sdGlwSG92ZXIsIHNldFRvb2x0aXBIb3Zlcl0gPSB1c2VQYXNzaXZlU3RhdGUodXNlU3RhYmxlQ2FsbGJhY2soKGhvdmVyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVsYXkgPSBob3ZlcmluZyA/IG1vdXNlb3ZlckRlbGF5IDogbW91c2VvdXREZWxheTtcclxuICAgICAgICBpZiAoZGVsYXkgIT0gbnVsbCAmJiBpc0Zpbml0ZShkZWxheSkpIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0VG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWQoaG92ZXJpbmcpLCBkZWxheSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9KSwgcmV0dXJuRmFsc2UpO1xyXG4gICAgY29uc3QgW2dldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWQsIHNldFRyaWdnZXJGb2N1c2VkRGVsYXlDb3JyZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2dldFRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkLCBzZXRUcmlnZ2VySG92ZXJEZWxheUNvcnJlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2V0VG9vbHRpcEZvY3VzZWREZWxheUNvcnJlY3RlZCwgc2V0VG9vbHRpcEZvY3VzZWREZWxheUNvcnJlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2V0VG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWQsIHNldFRvb2x0aXBIb3ZlckRlbGF5Q29ycmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihnZXRUcmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkIHx8IGdldFRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkKTtcclxuICAgIH0sIFtnZXRUcmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkIHx8IGdldFRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkXSk7XHJcbiAgICBjb25zdCB1c2VUb29sdGlwVHJpZ2dlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXBUcmlnZ2VyKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckVudGVyKGUpIHtcclxuICAgICAgICAgICAgc2V0VHJpZ2dlckhvdmVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJMZWF2ZShlKSB7XHJcbiAgICAgICAgICAgIHNldFRyaWdnZXJIb3ZlcihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzKHsgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkOiBzZXRUcmlnZ2VyRm9jdXNlZCB9KTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VUb29sdGlwVHJpZ2dlclByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICAvLyBOb3RlOiBUaG91Z2ggaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgZm9jdXNpbmcgYWN0aXZhdGVzIGEgdG9vbHRpcCxcclxuICAgICAgICAgICAgLy8gaXQncyBwZXJmZWN0bHkgcmVhc29uYWJsZSB0aGF0IGEgY2hpbGQgZWxlbWVudCB3aWxsIGJlIHRoZSBvbmUgdGhhdCdzIGZvY3VzZWQsXHJcbiAgICAgICAgICAgIC8vIG5vdCB0aGlzIG9uZSwgc28gd2UgZG9uJ3Qgc2V0IHRhYkluZGV4PTBcclxuICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPz89IC0xO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikodXNlSGFzRm9jdXNQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyRW50ZXIsIG9uUG9pbnRlckxlYXZlLCBvblRvdWNoRW5kIH0sIHByb3BzKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VUb29sdGlwVHJpZ2dlclByb3BzIH07XHJcbiAgICB9LCBbdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wc10pO1xyXG4gICAgY29uc3QgdXNlVG9vbHRpcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRW50ZXIoZSkge1xyXG4gICAgICAgICAgICBzZXRUb29sdGlwSG92ZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckxlYXZlKGUpIHtcclxuICAgICAgICAgICAgc2V0VG9vbHRpcEhvdmVyKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVG9vbHRpcFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzKHsgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkOiBzZXRUb29sdGlwRm9jdXNlZCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVRvb2x0aXBJZFByb3BzKHVzZUhhc0ZvY3VzUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlckVudGVyLCBvblBvaW50ZXJMZWF2ZSB9LCBwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFByb3BzIH07XHJcbiAgICB9LCBbdXNlVG9vbHRpcElkUHJvcHNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlVG9vbHRpcCxcclxuICAgICAgICB1c2VUb29sdGlwVHJpZ2dlcixcclxuICAgICAgICBpc09wZW46IG9wZW4sXHJcbiAgICAgICAgZ2V0SXNPcGVuOiBnZXRPcGVuXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10b29sdGlwLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsInZub2RlSWQiLCJjcmVhdGVWTm9kZSIsInR5cGUiLCJwcm9wcyIsImtleSIsIl9fc291cmNlIiwiX19zZWxmIiwicmVmIiwiaSIsIm5vcm1hbGl6ZWRQcm9wcyIsInZub2RlIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJkZWZhdWx0UHJvcHMiLCJvcHRpb25zIiwiY3VycmVudEluZGV4IiwiY3VycmVudENvbXBvbmVudCIsInByZXZSYWYiLCJjdXJyZW50SG9vayIsImFmdGVyUGFpbnRFZmZlY3RzIiwib2xkQmVmb3JlRGlmZiIsIm9sZEJlZm9yZVJlbmRlciIsIm9sZEFmdGVyRGlmZiIsImRpZmZlZCIsIm9sZENvbW1pdCIsIm9sZEJlZm9yZVVubW91bnQiLCJ1bm1vdW50IiwiZ2V0SG9va1N0YXRlIiwiaW5kZXgiLCJob29rcyIsImxlbmd0aCIsInB1c2giLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJuZXh0VmFsdWUiLCJhY3Rpb24iLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwiYXJncyIsInN0YXRlIiwiYXJnc0NoYW5nZWQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJpbml0aWFsVmFsdWUiLCJ1c2VNZW1vIiwiY3VycmVudCIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwicHJvdmlkZXIiLCJzdWIiLCJ2YWx1ZSIsImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCJjb21wb25lbnQiLCJzb3J0IiwiYSIsImIiLCJwb3AiLCJmb3JFYWNoIiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsImUiLCJjIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmFmIiwiZG9uZSIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJIQVNfUkFGIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiY29tbWl0UXVldWUiLCJzb21lIiwiZmlsdGVyIiwiY2IiLCJoYXNFcnJvcmVkIiwicyIsImhvb2siLCJjb21wIiwiY2xlYW51cCIsIm9sZEFyZ3MiLCJuZXdBcmdzIiwiYXJnIiwiZiIsIlVuc2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidG9WYWwiLCJtaXgiLCJrIiwieSIsInN0ciIsIkFycmF5IiwiaXNBcnJheSIsInRtcCIsIngiLCJhcmd1bWVudHMiLCJyZXR1cm5OdWxsIiwiTSIsInVzZVN0YXRlUCIsInVzZUVmZmVjdE5hdGl2ZSIsInVzZUxheW91dEVmZmVjdE5hdGl2ZSIsImNyZWF0ZUNvbnRleHQiLCJyZXR1cm5GYWxzZSIsImNhbmRpZGF0ZVNlbGVjdG9ycyIsIk5vRWxlbWVudCIsIm1hdGNoZXMiLCJFbGVtZW50IiwiZ2V0Um9vdE5vZGUiLCJlbGVtZW50IiwiaXNJbnB1dCIsIm5vZGUiLCJpc0hpZGRlbklucHV0IiwiaXNEZXRhaWxzV2l0aFN1bW1hcnkiLCJyIiwiY2hpbGQiLCJpc1plcm9BcmVhIiwid2lkdGgiLCJoZWlnaHQiLCJpc0hpZGRlbiIsImRpc3BsYXlDaGVjayIsImdldFNoYWRvd1Jvb3QiLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNEaXJlY3RTdW1tYXJ5Iiwibm9kZVVuZGVyRGV0YWlscyIsIm9yaWdpbmFsTm9kZSIsInBhcmVudEVsZW1lbnQiLCJyb290Tm9kZSIsImlzRGlzYWJsZWRGcm9tRmllbGRzZXQiLCJwYXJlbnROb2RlIiwiaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSIsImZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yIiwiaXNGb2N1c2FibGUiLCJnbG9iYWwiLCJ0aGlzIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJzbGljZSIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiam9pbiIsIkluZXJ0Um9vdCIsInJvb3RFbGVtZW50IiwiaW5lcnRNYW5hZ2VyIiwiX2luZXJ0TWFuYWdlciIsIl9yb290RWxlbWVudCIsIl9tYW5hZ2VkTm9kZXMiLCJTZXQiLCJoYXNBdHRyaWJ1dGUiLCJfc2F2ZWRBcmlhSGlkZGVuIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUiLCJfb2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiX29uTXV0YXRpb24iLCJiaW5kIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZGVzdHJ1Y3RvciIsImRpc2Nvbm5lY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwic3RhcnROb2RlIiwiX3RoaXMyIiwiY29tcG9zZWRUcmVlV2FsayIsIl92aXNpdE5vZGUiLCJhY3RpdmVFbGVtZW50IiwiZG9jdW1lbnQiLCJib2R5IiwiY29udGFpbnMiLCJyb290Iiwibm9kZVR5cGUiLCJOb2RlIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImJsdXIiLCJmb2N1cyIsIkVMRU1FTlRfTk9ERSIsIl9hZG9wdEluZXJ0Um9vdCIsImNhbGwiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiYWRkIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiZ2V0Iiwic2V0IiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsIkVycm9yIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290Iiwic2l6ZSIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIk1hcCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vbkRvY3VtZW50TG9hZGVkIiwiaW5lcnQiLCJoYXMiLCJwYXJlbnQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJzaGFkb3dSb290QW5jZXN0b3IiLCJzaGFkb3dSb290IiwibG9jYWxOYW1lIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCJfaSIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJoYXNPd25Qcm9wZXJ0eSIsImFzc2lnbiIsIm9iaiIsInNoYWxsb3dEaWZmZXJzIiwiX2pzeHMiLCJfanN4IiwiUmFuZG9tV29yZHMiLCJtZW1vIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7U0FBTztJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLElBQU1BLEdBQUFBLEdBQVksRUFBbEI7SUFBQSxJQUNNQyxHQUFBQSxHQUFZLEVBRGxCO0lBQUEsSUFFTUMsR0FBQUEsR0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRWxDLElBQUlDLEdBQUFBLEdBQVUsQ0FBZDs7SUFxQkEsU0FBU0MsR0FBVCxDQUFxQkMsQ0FBckIsRUFBMkJDLENBQTNCLEVBQWtDQyxDQUFsQyxFQUF1Q0MsQ0FBdkMsRUFBaURDLENBQWpELEVBQWlEQTtJQUFBQSxNQUsvQ0MsQ0FMK0NEO0lBQUFBLE1BTS9DRSxDQU4rQ0Y7SUFBQUEsTUFJNUNHLENBQUFBLEdBQWtCLEVBSjBCSDs7SUFJMUIsT0FHakJFLENBSGlCLElBR1pMLENBSFksRUFJWixTQUFMSyxDQUFLLEdBQ1JELENBQUFBLEdBQU1KLENBQUFBLENBQU1LLENBQU5MLENBREUsR0FHUk0sQ0FBQUEsQ0FBZ0JELENBQWhCQyxDQUFBQSxHQUFxQk4sQ0FBQUEsQ0FBTUssQ0FBTkwsQ0FIYjs7SUFHbUJLLE1BSXZCRSxDQUFBQSxHQUFRO0lBQ2JSLElBQUFBLElBQUFBLEVBQUFBLENBRGE7SUFFYkMsSUFBQUEsS0FBQUEsRUFBT00sQ0FGTTtJQUdiTCxJQUFBQSxHQUFBQSxFQUFBQSxDQUhhO0lBSWJHLElBQUFBLEdBQUFBLEVBQUFBLENBSmE7SUFJYkEsSUFBQUEsR0FBQUEsRUFDVyxJQUxFO0lBS0YsSUFBQSxFQUFBLEVBQ0YsSUFOSTtJQU1KLElBQUEsR0FBQSxFQUNELENBUEs7SUFPTCxJQUFBLEdBQUEsRUFDRixJQVJPO0lBUVAsSUFBQSxHQUFBLEVBQUEsS0FDSUksQ0FURztJQVNIQSxJQUFBQSxHQUFBQSxFQUNFLElBVkM7SUFVRCxJQUFBLEdBQUEsRUFDQSxJQVhDO0lBWWJDLElBQUFBLFdBQUFBLEVBQUFBLEtBQWFELENBWkE7SUFZQUEsSUFBQUEsR0FBQUEsRUFBQUEsRUFDQVgsR0FiQTtJQWNiSyxJQUFBQSxRQUFBQSxFQUFBQSxDQWRhO0lBZWJDLElBQUFBLE1BQUFBLEVBQUFBO0lBZmEsR0FKZUU7SUFtQjVCRixNQUttQixjQUFBLE9BQVRKLENBQVMsS0FBZUssQ0FBQUEsR0FBTUwsQ0FBQUEsQ0FBS1csWUFBMUIsQ0FMbkJQLEVBSzZDTyxLQUN4Q0wsQ0FEd0NLLElBQ25DTixDQURtQ00sRUFDbkNOLEtBQ3lCLENBRHpCQSxLQUNFRSxDQUFBQSxDQUFnQkQsQ0FBaEJDLENBREZGLEtBRVJFLENBQUFBLENBQWdCRCxDQUFoQkMsQ0FBQUEsR0FBcUJGLENBQUFBLENBQUlDLENBQUpELENBRmJBO0lBRWlCQyxTQUl4Qk0sR0FBQUEsQ0FBUUosS0FBUkksSUFBZUEsR0FBQUEsQ0FBUUosS0FBUkksQ0FBY0osQ0FBZEksQ0FBZkEsRUFDR0osQ0FMcUJGO0lBS3JCRTs7SUNqRVIsSUFBSUssQ0FBSjtJQUFBLElBR0lDLENBSEo7SUFBQSxJQWtCSUMsQ0FsQko7SUFBQSxJQU1JQyxDQUFBQSxHQUFjLENBTmxCO0lBQUEsSUFTSUMsQ0FBQUEsR0FBb0IsRUFUeEI7SUFBQSxJQVdJQyxDQUFBQSxHQUFnQk4sR0FBQUEsQ0FBQUEsR0FYcEI7SUFBQSxJQVlJTyxDQUFBQSxHQUFrQlAsR0FBQUEsQ0FBQUEsR0FadEI7SUFBQSxJQWFJUSxDQUFBQSxHQUFlUixHQUFBQSxDQUFRUyxNQWIzQjtJQUFBLElBY0lDLENBQUFBLEdBQVlWLEdBQUFBLENBQUFBLEdBZGhCO0lBQUEsSUFlSVcsQ0FBQUEsR0FBbUJYLEdBQUFBLENBQVFZLE9BZi9COztJQTJGQSxTQUFTQyxDQUFULENBQXNCQyxDQUF0QixFQUE2QjFCLENBQTdCLEVBQTZCQTtJQUN4QlksRUFBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsSUFDSEEsR0FBQUEsQ0FBQUEsR0FBQUEsQ0FBY0UsQ0FBZEYsRUFBZ0NjLENBQWhDZCxFQUF1Q0ksQ0FBQUEsSUFBZWhCLENBQXREWSxDQURHQSxFQUdKSSxDQUFBQSxHQUFjLENBSFZKO0lBR1UsTUFPUmUsQ0FBQUEsR0FDTGIsQ0FBQUEsQ0FBQUEsR0FBQUEsS0FDQ0EsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FBMkI7SUFBQSxJQUFBLEVBQUEsRUFDcEIsRUFEb0I7SUFDcEIsSUFBQSxHQUFBLEVBQ1U7SUFGVSxHQUQ1QkEsQ0FSYTtJQVdLLFNBR2ZZLENBQUFBLElBQVNDLENBQUFBLENBQUFBLEVBQUFBLENBQVlDLE1BQXJCRixJQUNIQyxDQUFBQSxDQUFBQSxFQUFBQSxDQUFZRSxJQUFaRixDQUFpQixFQUFqQkEsQ0FER0QsRUFHR0MsQ0FBQUEsQ0FBQUEsRUFBQUEsQ0FBWUQsQ0FBWkMsQ0FOWTtJQVliOztJQUFBLFNBQVNHLENBQVQsQ0FBa0JDLENBQWxCLEVBQWtCQTtJQUFBQSxTQUN4QmYsQ0FBQUEsR0FBYyxDQUFkQSxFQUNPZ0IsQ0FBQUEsQ0FBV0MsR0FBWEQsRUFBMkJELENBQTNCQyxDQUZpQkQ7SUFXekI7O0lBQUEsU0FBZ0JDLENBQWhCLENBQTJCRSxDQUEzQixFQUFvQ0gsQ0FBcEMsRUFBa0RJLENBQWxELEVBQWtEQTtJQUFBQSxNQUUzQ0MsQ0FBQUEsR0FBWVgsQ0FBQUEsQ0FBYVosQ0FBQUEsRUFBYlksRUFBNkIsQ0FBN0JBLENBRitCVTtJQUVGLFNBQy9DQyxDQUFBQSxDQUFVQyxDQUFWRCxHQUFxQkYsQ0FBckJFLEVBQ0tBLENBQUFBLENBQUFBLEdBQUFBLEtBQ0pBLENBQUFBLENBQUFBLEVBQUFBLEdBQW1CLENBQ2pCRCxDQUFBQSxHQUFpREEsQ0FBQUEsQ0FBS0osQ0FBTEksQ0FBakRBLEdBQU9GLEdBQUFBLENBQUFBLEtBQWV4QixDQUFmd0IsRUFBMEJGLENBQTFCRSxDQURVLEVBR2xCLFVBQUEsQ0FBQSxFQUFBO0lBQUEsUUFDT0ssQ0FBQUEsR0FBWUYsQ0FBQUEsQ0FBVUMsQ0FBVkQsQ0FBbUJBLENBQUFBLENBQUFBLEVBQUFBLENBQWlCLENBQWpCQSxDQUFuQkEsRUFBd0NHLENBQXhDSCxDQURuQjtJQUVLQSxJQUFBQSxDQUFBQSxDQUFBQSxFQUFBQSxDQUFpQixDQUFqQkEsTUFBd0JFLENBQXhCRixLQUNIQSxDQUFBQSxDQUFBQSxFQUFBQSxHQUFtQixDQUFDRSxDQUFELEVBQVlGLENBQUFBLENBQUFBLEVBQUFBLENBQWlCLENBQWpCQSxDQUFaLENBQW5CQSxFQUNBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFxQkksUUFBckJKLENBQThCLEVBQTlCQSxDQUZHQTtJQUUyQixHQVBkLENBQW5CQSxFQVlBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUF1QnRCLENBYm5Cc0IsQ0FETEEsRUFpQk9BLENBQUFBLENBQUFBLEVBbEJ3QztJQXlCekM7O0lBQUEsU0FBU0ssQ0FBVCxDQUFtQkMsQ0FBbkIsRUFBNkJDLENBQTdCLEVBQTZCQTtJQUFBQSxNQUU3QkMsQ0FBQUEsR0FBUW5CLENBQUFBLENBQWFaLENBQUFBLEVBQWJZLEVBQTZCLENBQTdCQSxDQUZxQmtCO0lBRVEsR0FDdEMvQixHQUFBQSxDQUFBQSxHQURzQyxJQUNkaUMsQ0FBQUEsQ0FBWUQsQ0FBQUEsQ0FBQUEsR0FBWkMsRUFBeUJGLENBQXpCRSxDQURjLEtBRTFDRCxDQUFBQSxDQUFBQSxFQUFBQSxHQUFlRixDQUFmRSxFQUNBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUFjRCxDQURkQyxFQUdBOUIsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsQ0FBeUNlLElBQXpDZixDQUE4QzhCLENBQTlDOUIsQ0FMMEM7SUFhckM7O0lBQUEsU0FBU2dDLENBQVQsQ0FBeUJKLENBQXpCLEVBQW1DQyxDQUFuQyxFQUFtQ0E7SUFBQUEsTUFFbkNDLENBQUFBLEdBQVFuQixDQUFBQSxDQUFhWixDQUFBQSxFQUFiWSxFQUE2QixDQUE3QkEsQ0FGMkJrQjtJQUVFLEdBQ3RDL0IsR0FBQUEsQ0FBQUEsR0FEc0MsSUFDZGlDLENBQUFBLENBQVlELENBQUFBLENBQUFBLEdBQVpDLEVBQXlCRixDQUF6QkUsQ0FEYyxLQUUxQ0QsQ0FBQUEsQ0FBQUEsRUFBQUEsR0FBZUYsQ0FBZkUsRUFDQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FBY0QsQ0FEZEMsRUFHQTlCLENBQUFBLENBQUFBLEdBQUFBLENBQWtDZSxJQUFsQ2YsQ0FBdUM4QixDQUF2QzlCLENBTDBDO0lBU3JDOztJQUFBLFNBQVNpQyxDQUFULENBQWdCQyxDQUFoQixFQUFnQkE7SUFBQUEsU0FDdEJoQyxDQUFBQSxHQUFjLENBQWRBLEVBQ09pQyxDQUFBQSxDQUFRLFlBQUE7SUFBQSxXQUFPO0lBQUVDLE1BQUFBLE9BQUFBLEVBQVNGO0lBQVgsS0FBUDtJQUFrQkEsR0FBMUJDLEVBQTJDLEVBQTNDQSxDQUZlRDtJQVV2Qjs7SUFlTyxTQUFTQyxDQUFULENBQWlCRSxDQUFqQixFQUEwQlIsQ0FBMUIsRUFBMEJBO0lBQUFBLE1BRTFCQyxDQUFBQSxHQUFRbkIsQ0FBQUEsQ0FBYVosQ0FBQUEsRUFBYlksRUFBNkIsQ0FBN0JBLENBRmtCa0I7SUFFVyxTQUN2Q0UsQ0FBQUEsQ0FBWUQsQ0FBQUEsQ0FBQUEsR0FBWkMsRUFBeUJGLENBQXpCRSxDQUFBQSxLQUNIRCxDQUFBQSxDQUFBQSxFQUFBQSxHQUFlTyxDQUFBQSxFQUFmUCxFQUNBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUFjRCxDQURkQyxFQUVBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUFpQk8sQ0FIZE4sR0FNR0QsQ0FBQUEsQ0FBQUEsRUFQb0M7SUFjckM7O0lBQUEsU0FBU1EsR0FBVCxDQUFxQlYsQ0FBckIsRUFBK0JDLENBQS9CLEVBQStCQTtJQUFBQSxTQUNyQzNCLENBQUFBLEdBQWMsQ0FBZEEsRUFDT2lDLENBQUFBLENBQVEsWUFBQTtJQUFBLFdBQU1QLENBQU47SUFBTUEsR0FBZE8sRUFBd0JOLENBQXhCTSxDQUY4Qk47SUFRL0I7O0lBQUEsU0FBU1UsQ0FBVCxDQUFvQkMsQ0FBcEIsRUFBb0JBO0lBQUFBLE1BQ3BCQyxDQUFBQSxHQUFXekMsQ0FBQUEsQ0FBaUJ3QyxPQUFqQnhDLENBQXlCd0MsQ0FBQUEsQ0FBQUEsR0FBekJ4QyxDQURTd0M7SUFBQUEsTUFNcEJWLENBQUFBLEdBQVFuQixDQUFBQSxDQUFhWixDQUFBQSxFQUFiWSxFQUE2QixDQUE3QkEsQ0FOWTZCO0lBTWlCLFNBSTNDVixDQUFBQSxDQUFBQSxDQUFBQSxHQUFpQlUsQ0FBakJWLEVBQ0tXLENBQUFBLElBRWUsUUFBaEJYLENBQUFBLENBQUFBLEVBQWdCLEtBQ25CQSxDQUFBQSxDQUFBQSxFQUFBQSxHQUFBQSxDQUFlLENBQWZBLEVBQ0FXLENBQUFBLENBQVNDLEdBQVRELENBQWF6QyxDQUFieUMsQ0FGbUIsR0FJYkEsQ0FBQUEsQ0FBU3RELEtBQVRzRCxDQUFlRSxLQU5qQkYsSUFBaUJELENBQUFBLENBQUFBLEVBTHFCO0lBa0JyQzs7SUErQlAsU0FBU0ksQ0FBVCxHQUFTQTtJQUFBQSxNQUNKQyxDQURJRDs7SUFDSkMsT0FFSjFDLENBQUFBLENBQWtCMkMsSUFBbEIzQyxDQUF1QixVQUFDNEMsQ0FBRCxFQUFJQyxDQUFKLEVBQUlBO0lBQUFBLFdBQU1ELENBQUFBLENBQUFBLEdBQUFBLENBQUFBLEdBQUFBLEdBQWtCQyxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUF4QkE7SUFBd0JBLEdBQW5EN0MsQ0FGSTBDLEVBR0dBLENBQUFBLEdBQVkxQyxDQUFBQSxDQUFrQjhDLEdBQWxCOUMsRUFIZjBDLEdBR2lDSSxJQUMvQkosQ0FBQUEsQ0FBQUEsR0FEK0JJLEVBQy9CSixJQUFBQTtJQUVKQSxJQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxDQUFrQ0ssT0FBbENMLENBQTBDTSxHQUExQ04sR0FDQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsQ0FBa0NLLE9BQWxDTCxDQUEwQ08sR0FBMUNQLENBREFBLEVBRUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLEdBQUFBLEdBQW9DLEVBRnBDQTtJQUdDLEdBTEdBLENBS0gsT0FBT1EsQ0FBUCxFQUFPQTtJQUNSUixJQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFvQyxFQUFwQ0EsRUFDQS9DLEdBQUFBLENBQUFBLEdBQUFBLENBQW9CdUQsQ0FBcEJ2RCxFQUF1QitDLENBQUFBLENBQUFBLEdBQXZCL0MsQ0FEQStDO0lBQ3VCQTtJQXRSMUIvQzs7QUFBQUEsT0FBQUEsQ0FBQUEsR0FBQUEsR0FBZ0IsVUFBQSxDQUFBLEVBQUE7SUFDZkUsRUFBQUEsQ0FBQUEsR0FBbUIsSUFBbkJBLEVBQ0lJLENBQUFBLElBQWVBLENBQUFBLENBQWNWLENBQWRVLENBRG5CSjtJQUNpQ04sQ0FGbENJLEVBS0FBLEdBQUFBLENBQUFBLEdBQUFBLEdBQWtCLFVBQUEsQ0FBQSxFQUFBO0lBQ2JPLEVBQUFBLENBQUFBLElBQWlCQSxDQUFBQSxDQUFnQlgsQ0FBaEJXLENBQWpCQSxFQUdKTixDQUFBQSxHQUFlLENBSFhNO0lBR1csTUFFVFEsQ0FBQUEsR0FBQUEsQ0FITmIsQ0FBQUEsR0FBbUJOLENBQUFBLENBQUFBLEdBR2JtQixFQUhhbkIsR0FDSjtJQUdYbUIsRUFBQUEsQ0FBQUEsS0FDSEEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBc0JxQyxPQUF0QnJDLENBQThCc0MsR0FBOUJ0QyxHQUNBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFzQnFDLE9BQXRCckMsQ0FBOEJ1QyxHQUE5QnZDLENBREFBLEVBRUFBLENBQUFBLENBQUFBLEdBQUFBLEdBQXdCLEVBSHJCQSxDQUFBQTtJQUdxQixDQWYxQmYsRUFtQkFBLEdBQUFBLENBQVFTLE1BQVJULEdBQWlCLFVBQUEsQ0FBQSxFQUFBO0lBQ1pRLEVBQUFBLENBQUFBLElBQWNBLENBQUFBLENBQWFaLENBQWJZLENBQWRBO0lBQTJCWixNQUV6QjRELENBQUFBLEdBQUk1RCxDQUFBQSxDQUFBQSxHQUZxQkE7SUFHM0I0RCxFQUFBQSxDQUFBQSxJQUFLQSxDQUFBQSxDQUFBQSxHQUFMQSxJQUFrQkEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsQ0FBMEJ4QyxNQUE1Q3dDLEtBc1NtQixNQXJTWG5ELENBQUFBLENBQWtCWSxJQUFsQlosQ0FBdUJtRCxDQUF2Qm5ELENBcVNXLElBQUtGLENBQUFBLEtBQVlILEdBQUFBLENBQVF5RCxxQkFBekIsSUFBeUJBLENBQUFBLENBQy9DdEQsQ0FBQUEsR0FBVUgsR0FBQUEsQ0FBUXlELHFCQUQ2QkEsS0F0QmpELFVBQXdCM0IsQ0FBeEIsRUFBd0JBO0lBQUFBLFFBUW5CNEIsQ0FSbUI1QjtJQUFBQSxRQUNqQjZCLENBQUFBLEdBQU8sWUFBQTtJQUNaQyxNQUFBQSxZQUFBQSxDQUFhQyxDQUFiRCxDQUFBQSxFQUNJRSxDQUFBQSxJQUFTQyxvQkFBQUEsQ0FBcUJMLENBQXJCSyxDQURiSCxFQUVBSSxVQUFBQSxDQUFXbEMsQ0FBWGtDLENBRkFKO0lBRVc5QixLQUpXQTtJQUFBQSxRQU1qQitCLENBQUFBLEdBQVVHLFVBQUFBLENBQVdMLENBQVhLLEVBaFRHLEdBZ1RIQSxDQU5PbEM7O0lBU25CZ0MsSUFBQUEsQ0FBQUEsS0FDSEosQ0FBQUEsR0FBTUQscUJBQUFBLENBQXNCRSxDQUF0QkYsQ0FESEssQ0FBQUE7SUFDeUJILEdBWW1CRixFQUVuQlgsQ0FGbUJXLENBdFM1Q0QsR0FHSnRELENBQUFBLEdBQW1CLElBSGZzRDtJQUdlLENBMUJwQnhELEVBNkJBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFrQixVQUFDSixDQUFELEVBQVFxRSxDQUFSLEVBQVFBO0lBQ3pCQSxFQUFBQSxDQUFBQSxDQUFZQyxJQUFaRCxDQUFpQixVQUFBLENBQUEsRUFBQTtJQUFBLFFBQUE7SUFFZmxCLE1BQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQTJCSyxPQUEzQkwsQ0FBbUNNLEdBQW5DTixHQUNBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUE2QkEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBMkJvQixNQUEzQnBCLENBQWtDLFVBQUEsQ0FBQSxFQUFBO0lBQUEsZUFBQSxDQUM5RHFCLENBQUFBLENBQUFBLEVBRDhELElBQ2xEZCxHQUFBQSxDQUFhYyxDQUFiZCxDQURrRDtJQUNyQ2MsT0FER3JCLENBRDdCQTtJQUlDLEtBTmMsQ0FNZCxPQUFPUSxDQUFQLEVBQU9BO0lBQ1JVLE1BQUFBLENBQUFBLENBQVlDLElBQVpELENBQWlCLFVBQUEsQ0FBQSxFQUFBO0lBQ1pULFFBQUFBLENBQUFBLENBQUFBLEdBQUFBLEtBQW9CQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUFxQixFQUF6Q0E7SUFBeUMsT0FEOUNTLEdBR0FBLENBQUFBLEdBQWMsRUFIZEEsRUFJQWpFLEdBQUFBLENBQUFBLEdBQUFBLENBQW9CdUQsQ0FBcEJ2RCxFQUF1QitDLENBQUFBLENBQUFBLEdBQXZCL0MsQ0FKQWlFO0lBSXVCbEI7SUFBQUEsR0FYekJrQixHQWVJdkQsQ0FBQUEsSUFBV0EsQ0FBQUEsQ0FBVWQsQ0FBVmMsRUFBaUJ1RCxDQUFqQnZELENBZmZ1RDtJQWVnQ0EsQ0E3Q2pDakUsRUFnREFBLEdBQUFBLENBQVFZLE9BQVJaLEdBQWtCLFVBQUEsQ0FBQSxFQUFBO0lBQ2JXLEVBQUFBLENBQUFBLElBQWtCQSxDQUFBQSxDQUFpQmYsQ0FBakJlLENBQWxCQTtJQUFtQ2YsTUFJbEN5RSxDQUprQ3pFO0lBQUFBLE1BRWpDNEQsQ0FBQUEsR0FBSTVELENBQUFBLENBQUFBLEdBRjZCQTtJQUduQzRELEVBQUFBLENBQUFBLElBQUtBLENBQUFBLENBQUFBLEdBQUxBLEtBRUhBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLEVBQUFBLENBQWdCSixPQUFoQkksQ0FBd0IsVUFBQSxDQUFBLEVBQUE7SUFBQSxRQUFBO0lBRXRCSCxNQUFBQSxHQUFBQSxDQUFjaUIsQ0FBZGpCLENBQUFBO0lBQ0MsS0FIcUIsQ0FHckIsT0FBT0UsQ0FBUCxFQUFPQTtJQUNSYyxNQUFBQSxDQUFBQSxHQUFhZCxDQUFiYztJQUFhZDtJQUFBQSxHQUpmQyxHQU9JYSxDQUFBQSxJQUFZckUsR0FBQUEsQ0FBQUEsR0FBQUEsQ0FBb0JxRSxDQUFwQnJFLEVBQWdDd0QsQ0FBQUEsQ0FBQUEsR0FBaEN4RCxDQVRid0Q7SUFTNkNBLENBN0RsRHhEO0lBMlJBLElBQUk4RCxDQUFBQSxHQUEwQyxjQUFBLE9BQXpCTCxxQkFBckI7O0lBMkNBLFNBQVNKLEdBQVQsQ0FBdUJrQixDQUF2QixFQUF1QkE7SUFBQUEsTUFHaEJDLENBQUFBLEdBQU90RSxDQUhTcUU7SUFBQUEsTUFJbEJFLENBQUFBLEdBQVVGLENBQUFBLENBQUFBLEdBSlFBO0lBS0EsZ0JBQUEsT0FBWEUsQ0FBVyxLQUNyQkYsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FBQUEsS0FBZ0IxRSxDQUFoQjBFLEVBQ0FFLENBQUFBLEVBRnFCLEdBSXRCdkUsQ0FBQUEsR0FBbUJzRSxDQUpHO0lBV3ZCOztJQUFBLFNBQVNsQixHQUFULENBQXNCaUIsQ0FBdEIsRUFBc0JBO0lBQUFBLE1BR2ZDLENBQUFBLEdBQU90RSxDQUhRcUU7SUFJckJBLEVBQUFBLENBQUFBLENBQUFBLEdBQUFBLEdBQWdCQSxDQUFBQSxDQUFBQSxFQUFBQSxFQUFoQkEsRUFDQXJFLENBQUFBLEdBQW1Cc0UsQ0FEbkJEO0lBUUQ7O0lBQUEsU0FBU3RDLENBQVQsQ0FBcUJ5QyxDQUFyQixFQUE4QkMsQ0FBOUIsRUFBOEJBO0lBQUFBLFNBQUFBLENBRTNCRCxDQUYyQkMsSUFHNUJELENBQUFBLENBQVExRCxNQUFSMEQsS0FBbUJDLENBQUFBLENBQVEzRCxNQUhDMkQsSUFJNUJBLENBQUFBLENBQVFULElBQVJTLENBQWEsVUFBQ0MsQ0FBRCxFQUFNOUQsQ0FBTixFQUFNQTtJQUFBQSxXQUFVOEQsQ0FBQUEsS0FBUUYsQ0FBQUEsQ0FBUTVELENBQVI0RCxDQUFsQjVEO0lBQTBCQSxHQUE3QzZELENBSjRCQTtJQVE5Qjs7SUFBQSxTQUFTdEQsR0FBVCxDQUF3QnVELENBQXhCLEVBQTZCQyxDQUE3QixFQUE2QkE7SUFBQUEsU0FDVCxjQUFBLE9BQUxBLENBQUssR0FBYUEsQ0FBQUEsQ0FBRUQsQ0FBRkMsQ0FBYixHQUFzQkEsQ0FEYkE7SUFDYUE7O0lDNVgxQzs7OztJQUlHOztJQUNHLFNBQVUsa0JBQVYsR0FBMEQ7SUFBQSxvQ0FBVCxNQUFTO0lBQVQsSUFBQSxNQUFTO0lBQUE7O0lBQzVELEVBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFSLEVBQWdCLENBQWhCLENBQVQ7SUFDQSxFQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsU0FBZjtJQUNBOztJQUdBLFdBQVMsU0FBVCxDQUFzQixLQUF0QixFQUFnQyxLQUFoQyxFQUE2QztJQUV6QztJQUNBLFVBQU0sdUJBQXVCLEdBQUcxQyxDQUFNLENBQUMsS0FBRCxDQUF0QztJQUNBLFVBQU0sVUFBVSxHQUFHQSxDQUFNLENBQUMsS0FBRCxDQUF6Qjs7SUFDQSxRQUFJLHVCQUF1QixDQUFDLE9BQXhCLElBQW1DLEtBQXZDLEVBQThDO0lBQzFDLFVBQUksQ0FBQyxVQUFVLENBQUMsT0FBaEIsRUFBeUI7SUFDckIsUUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLHNHQUFzRyxLQUFLLGtDQUF6SDtJQUNBO0lBQ0EsUUFBQSxVQUFVLENBQUMsT0FBWCxHQUFxQixJQUFyQjtJQUNIO0lBQ0o7SUFDSjtJQUNKO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJHOztJQUNHLFNBQVUsZUFBVixDQUE2QixRQUE3QixFQUFtRixlQUFuRixFQUE0RztJQUM5RyxRQUFNLFFBQVEsR0FBR0EsQ0FBTSxDQUFtQjJDLE9BQW5CLENBQXZCO0lBQ0EsUUFBTSxVQUFVLEdBQUczQyxDQUFNLENBQUMsS0FBRCxDQUF6QjtJQUNBLFFBQU0sa0JBQWtCLEdBQUdBLENBQU0sQ0FBMkIsU0FBM0IsQ0FBakMsQ0FIOEc7O0lBTTlHLEVBQUEsa0JBQWtCLENBQUMsUUFBRCxFQUFXLGVBQVgsQ0FBbEIsQ0FOOEc7O0lBUzlHLFFBQU0sZUFBZSxHQUFHSyxHQUFXLENBQUMsTUFBSztJQUNyQyxRQUFJLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxPQUF6QztJQUNBLFFBQUksZUFBSixFQUNJLGVBQWU7SUFDdEIsR0FKa0MsRUFJaEMsRUFKZ0MsQ0FBbkMsQ0FUOEc7SUFnQjlHO0lBQ0E7SUFDQTs7SUFDQSxRQUFNLGNBQWMsR0FBR0EsR0FBVyxDQUFDLE1BQUs7SUFDcEMsUUFBSSxRQUFRLENBQUMsT0FBVCxLQUFxQnNDLE9BQXJCLElBQThCLGVBQWUsSUFBSSxTQUFyRCxFQUFnRTtJQUM1RCxVQUFJO0lBQUE7O0lBQ0EsY0FBTSxZQUFZLEdBQUcsZUFBZSxFQUFwQztJQUNBLFFBQUEsUUFBUSxDQUFDLE9BQVQsR0FBbUIsWUFBbkI7SUFDQSxRQUFBLGtCQUFrQixDQUFDLE9BQW5CLGdCQUE4QixRQUE5QixhQUE4QixRQUE5Qix1QkFBOEIsUUFBUSxDQUFHLFlBQUgsRUFBaUIsU0FBakIsQ0FBdEMsaURBQXFFLFNBQXJFO0lBQ0gsT0FKRCxDQUtBLE9BQU8sRUFBUCxFQUFXO0lBRVY7SUFDSjtJQUNKLEdBWGlDLEVBVy9CO0lBQUM7SUFBRCxHQVgrQixDQUFsQztJQWNBLFFBQU0sUUFBUSxHQUFHdEMsR0FBVyxDQUFDLE1BQUs7SUFDOUIsUUFBSSxVQUFVLENBQUMsT0FBZixFQUNJLE9BQU8sQ0FBQyxJQUFSLENBQWEsZ01BQWIsRUFGMEI7SUFLOUI7SUFDQTs7SUFDQSxRQUFJLFFBQVEsQ0FBQyxPQUFULEtBQXFCc0MsT0FBekIsRUFDSSxjQUFjO0lBRWxCLFdBQVEsUUFBUSxDQUFDLE9BQVQsS0FBcUJBLE9BQXJCLEdBQTZCLFNBQTdCLEdBQTBDLFFBQVEsQ0FBQyxPQUEzRDtJQUNILEdBWDJCLEVBV3pCLEVBWHlCLENBQTVCO0lBYUEsRUFBQTVDLENBQWUsQ0FBQyxNQUFLO0lBQ2pCO0lBQ0E7SUFDQSxJQUFBLGNBQWM7SUFHakIsR0FOYyxFQU1aLEVBTlksQ0FBZixDQTlDOEc7O0lBdUQ5RyxRQUFNLFFBQVEsR0FBR00sR0FBVyxDQUEwQixHQUFELElBQVE7SUFDekQsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQVQsS0FBcUJzQyxPQUFyQixHQUE2QixTQUE3QixHQUF5QyxRQUFRLEVBQWpFO0lBQ0EsVUFBTSxHQUFHLEdBQUcsR0FBRyxZQUFZLFFBQWYsR0FBMEIsR0FBRyxDQUFDLE9BQUQsQ0FBN0IsR0FBMEMsR0FBdEQ7O0lBRUEsUUFBSSxHQUFHLEtBQUssUUFBUSxDQUFDLE9BQXJCLEVBQThCO0lBQUE7O0lBRTFCO0lBQ0EsTUFBQSxVQUFVLENBQUMsT0FBWCxHQUFxQixJQUFyQixDQUgwQjs7SUFNMUIsTUFBQSxlQUFlO0lBQ2YsTUFBQSxrQkFBa0IsQ0FBQyxPQUFuQixpQkFBOEIsUUFBOUIsYUFBOEIsUUFBOUIsdUJBQThCLFFBQVEsQ0FBRyxHQUFILEVBQVEsT0FBUixDQUF0QyxtREFBMEQsU0FBMUQ7SUFDQSxNQUFBLFFBQVEsQ0FBQyxPQUFULEdBQW1CLEdBQW5CLENBUjBCOztJQVcxQixNQUFBLFVBQVUsQ0FBQyxPQUFYLEdBQXFCLEtBQXJCO0lBQ0g7SUFDSixHQWpCMkIsRUFpQnpCLEVBakJ5QixDQUE1QjtJQW1CQSxTQUFPLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBUDtJQUNIO0lBRUQsTUFBTUEsT0FBSyxHQUFHLE1BQU0sRUFBcEI7O0lDM0hNLFNBQVUsaUJBQVYsQ0FBb0wsUUFBcEwsRUFBbU0sUUFBbk0sRUFBZ047SUFFbE4sUUFBTSxHQUFHLEdBQUcsUUFBSCxhQUFHLFFBQUgsdUJBQUcsUUFBUSxDQUFFLFFBQXRCO0lBQ0EsUUFBTSxHQUFHLEdBQUcsUUFBSCxhQUFHLFFBQUgsdUJBQUcsUUFBUSxDQUFFLFFBQXRCOztJQUNBLE1BQUksR0FBRyxJQUFJLElBQVAsSUFBZSxHQUFHLElBQUksSUFBMUIsRUFBZ0M7SUFDNUIsV0FBTyxTQUFQO0lBQ0gsR0FGRCxNQUdLLElBQUksR0FBRyxJQUFJLElBQVgsRUFBaUI7SUFDbEIsV0FBTyxHQUFQO0lBQ0gsR0FGSSxNQUdBLElBQUksR0FBRyxJQUFJLElBQVgsRUFBaUI7SUFDbEIsV0FBTyxHQUFQO0lBQ0gsR0FGSSxNQUdBO0lBQ0QsUUFBSSxHQUFHLEdBQUdDLEdBQWEsQ0FBQ0MsR0FBRCxFQUFXLEVBQVgsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLENBQXZCO0lBQ0EsV0FBTyxHQUFQO0lBQ0g7SUFDSjs7SUNyQkQsU0FBU0MsS0FBVCxDQUFlQyxHQUFmLEVBQW9CO0lBQ25CLE1BQUlDLENBQUo7SUFBQSxNQUFPQyxDQUFQO0lBQUEsTUFBVUMsR0FBRyxHQUFDLEVBQWQ7O0lBRUEsTUFBSSxPQUFPSCxHQUFQLEtBQWUsUUFBZixJQUEyQixPQUFPQSxHQUFQLEtBQWUsUUFBOUMsRUFBd0Q7SUFDdkRHLElBQUFBLEdBQUcsSUFBSUgsR0FBUDtJQUNBLEdBRkQsTUFFTyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtJQUNuQyxRQUFJSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsR0FBZCxDQUFKLEVBQXdCO0lBQ3ZCLFdBQUtDLENBQUMsR0FBQyxDQUFQLEVBQVVBLENBQUMsR0FBR0QsR0FBRyxDQUFDbEUsTUFBbEIsRUFBMEJtRSxDQUFDLEVBQTNCLEVBQStCO0lBQzlCLFlBQUlELEdBQUcsQ0FBQ0MsQ0FBRCxDQUFQLEVBQVk7SUFDWCxjQUFJQyxDQUFDLEdBQUdILEtBQUssQ0FBQ0MsR0FBRyxDQUFDQyxDQUFELENBQUosQ0FBYixFQUF1QjtJQUN0QkUsWUFBQUEsR0FBRyxLQUFLQSxHQUFHLElBQUksR0FBWixDQUFIO0lBQ0FBLFlBQUFBLEdBQUcsSUFBSUQsQ0FBUDtJQUNBO0lBQ0Q7SUFDRDtJQUNELEtBVEQsTUFTTztJQUNOLFdBQUtELENBQUwsSUFBVUQsR0FBVixFQUFlO0lBQ2QsWUFBSUEsR0FBRyxDQUFDQyxDQUFELENBQVAsRUFBWTtJQUNYRSxVQUFBQSxHQUFHLEtBQUtBLEdBQUcsSUFBSSxHQUFaLENBQUg7SUFDQUEsVUFBQUEsR0FBRyxJQUFJRixDQUFQO0lBQ0E7SUFDRDtJQUNEO0lBQ0Q7O0lBRUQsU0FBT0UsR0FBUDtJQUNBOztJQUVjLGlCQUFZO0lBQzFCLE1BQUkzRixDQUFDLEdBQUMsQ0FBTjtJQUFBLE1BQVM4RixHQUFUO0lBQUEsTUFBY0MsQ0FBZDtJQUFBLE1BQWlCSixHQUFHLEdBQUMsRUFBckI7O0lBQ0EsU0FBTzNGLENBQUMsR0FBR2dHLFNBQVMsQ0FBQzFFLE1BQXJCLEVBQTZCO0lBQzVCLFFBQUl3RSxHQUFHLEdBQUdFLFNBQVMsQ0FBQ2hHLENBQUMsRUFBRixDQUFuQixFQUEwQjtJQUN6QixVQUFJK0YsQ0FBQyxHQUFHUixLQUFLLENBQUNPLEdBQUQsQ0FBYixFQUFvQjtJQUNuQkgsUUFBQUEsR0FBRyxLQUFLQSxHQUFHLElBQUksR0FBWixDQUFIO0lBQ0FBLFFBQUFBLEdBQUcsSUFBSUksQ0FBUDtJQUNBO0lBQ0Q7SUFDRDs7SUFDRCxTQUFPSixHQUFQO0lBQ0E7O0lDcENEOzs7Ozs7O0lBT0c7O0lBQ0csU0FBVSxnQkFBVixDQUErSCxHQUEvSCxFQUF5SSxHQUF6SSxFQUFpSjtJQUVuSjtJQUNBO0lBQ0EsU0FBTyxZQUFZLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbkI7SUFDSDs7SUFtQkQsU0FBUyxZQUFULENBQTBILEdBQTFILEVBQW9JLEdBQXBJLEVBQTRJO0lBQ3hJLFFBQU0sUUFBUSxHQUFHLEdBQUgsYUFBRyxHQUFILHVCQUFHLEdBQUcsQ0FBRSxLQUF0QjtJQUNBLFFBQU0sWUFBWSxHQUFHLEdBQUgsYUFBRyxHQUFILHVCQUFHLEdBQUcsQ0FBRSxTQUExQjtJQUNBLFFBQU0sUUFBUSxHQUFHLEdBQUgsYUFBRyxHQUFILHVCQUFHLEdBQUcsQ0FBRSxLQUF0QjtJQUNBLFFBQU0sWUFBWSxHQUFHLEdBQUgsYUFBRyxHQUFILHVCQUFHLEdBQUcsQ0FBRSxTQUExQjs7SUFFQSxNQUFJLFFBQVEsSUFBSSxRQUFaLElBQXdCLFlBQXhCLElBQXdDLFlBQTVDLEVBQTBEO0lBQ3RELFFBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFELEVBQVcsWUFBWCxDQUFKLENBQTZCLEtBQTdCLENBQW1DLEdBQW5DLENBQWpCO0lBQ0EsUUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQUQsRUFBVyxZQUFYLENBQUosQ0FBNkIsS0FBN0IsQ0FBbUMsR0FBbkMsQ0FBakI7SUFDQSxRQUFJLFVBQVUsR0FBRyxJQUFJLEdBQUosQ0FBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFYLENBQUosRUFBNEIsR0FBRyxLQUFLLENBQUMsSUFBTixDQUFXLFVBQVgsQ0FBL0IsQ0FBUixDQUFqQjtJQUVBLFdBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFYLEVBQXVCLElBQXZCLENBQTRCLEdBQTVCLENBQVA7SUFDSCxHQU5ELE1BT0s7SUFDRCxXQUFPLFNBQVA7SUFDSDtJQUNKOztJQy9DRCxTQUFTLFVBQVQsQ0FBdUIsUUFBdkIsRUFBMkMsR0FBM0MsRUFBeUU7SUFDckUsTUFBSSxPQUFPLEdBQVAsS0FBZSxVQUFuQixFQUErQjtJQUMzQixJQUFBLEdBQUcsQ0FBQyxRQUFELENBQUg7SUFDSCxHQUZELE1BR0ssSUFBSSxHQUFHLElBQUksSUFBWCxFQUFpQjtJQUNqQixJQUFBLEdBQTJCLENBQUMsT0FBNUIsR0FBc0MsUUFBdEM7SUFDSixHQUZJLE1BR0E7SUFDRCxhQURDOztJQUVELElBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCLHVFQUF0QjtJQUNIO0lBQ0o7SUFHRDs7Ozs7SUFLRzs7O0lBQ0csU0FBVSxhQUFWLEdBQXVCO0lBQ3pCLFNBQU8sVUFBb0osUUFBcEosRUFBbUssUUFBbkssRUFBZ0w7SUFFbkwsVUFBTSxHQUFHLEdBQUcsUUFBSCxhQUFHLFFBQUgsdUJBQUcsUUFBUSxDQUFFLEdBQXRCO0lBQ0EsVUFBTSxHQUFHLEdBQUcsUUFBSCxhQUFHLFFBQUgsdUJBQUcsUUFBUSxDQUFFLEdBQXRCO0lBQ0EsUUFBSSxRQUFRLEdBQW1CN0MsR0FBVyxDQUFFLE9BQUQsSUFBc0I7SUFDN0QsTUFBQSxVQUFVLENBQUMsT0FBRCxFQUFVLEdBQVYsQ0FBVjtJQUNBLE1BQUEsVUFBVSxDQUFDLE9BQUQsRUFBVSxHQUFWLENBQVY7SUFDSCxLQUh5QyxFQUd2QyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBSHVDLENBQTFDOztJQU1BLFFBQUksR0FBRyxJQUFJLElBQVAsSUFBZSxHQUFHLElBQUksSUFBMUIsRUFBZ0M7SUFDNUIsYUFBTyxTQUFQO0lBQ0gsS0FGRCxNQUdLLElBQUksR0FBRyxJQUFJLElBQVgsRUFBaUI7SUFDbEIsYUFBTyxHQUFQO0lBQ0gsS0FGSSxNQUdBLElBQUksR0FBRyxJQUFJLElBQVgsRUFBaUI7SUFDbEIsYUFBTyxHQUFQO0lBQ0gsS0FGSSxNQUdBO0lBQ0QsYUFBTyxRQUFQO0lBQ0g7SUFDSixHQXRCRDtJQXVCSDtJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DRTs7SUNuRkYsU0FBUyxtQkFBVCxDQUE2QixLQUE3QixFQUEwQztJQUN0QztJQUNBLFNBQU8sTUFBTSxDQUFDLFdBQVAsQ0FBbUIsS0FBSyxDQUFDLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLENBQXFCLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBVixDQUFnQixHQUFoQixDQUFsQyxDQUFuQixDQUFQO0lBQ0g7SUFFRDs7Ozs7O0lBTUc7OztJQUNHLFNBQVUsZUFBVixDQUE0SyxHQUE1SyxFQUFzTCxHQUF0TCxFQUE4TDtJQUFBOztJQUVoTTtJQUNBLE1BQUksRUFBQyxHQUFELGFBQUMsR0FBRCxlQUFDLEdBQUcsQ0FBRSxLQUFOLEtBQWUsRUFBQyxHQUFELGFBQUMsR0FBRCxlQUFDLEdBQUcsQ0FBRSxLQUFOLENBQW5CLEVBQ0ksT0FBTyxTQUFQOztJQUVKLE1BQUksT0FBTyxHQUFQLElBQWMsT0FBTyxHQUF6QixFQUE4QjtJQUMxQjtJQUNBLFFBQUksR0FBRyxTQUFILElBQUEsR0FBRyxXQUFILElBQUEsR0FBRyxDQUFFLEtBQUwsSUFBYyxFQUFDLEdBQUQsYUFBQyxHQUFELGVBQUMsR0FBRyxDQUFFLEtBQU4sQ0FBbEIsRUFDSSxPQUFPLEdBQUcsQ0FBQyxLQUFYO0lBQ0osUUFBSSxFQUFDLEdBQUQsYUFBQyxHQUFELGVBQUMsR0FBRyxDQUFFLEtBQU4sS0FBZSxHQUFmLGFBQWUsR0FBZixlQUFlLEdBQUcsQ0FBRSxLQUF4QixFQUNJLE9BQU8sR0FBRyxDQUFDLEtBQVgsQ0FMc0I7SUFRMUI7O0lBQ0EsUUFBSSxHQUFHLFNBQUgsSUFBQSxHQUFHLFdBQUgsSUFBQSxHQUFHLENBQUUsS0FBTCxJQUFjLEdBQWQsYUFBYyxHQUFkLGVBQWMsR0FBRyxDQUFFLEtBQXZCLEVBQThCO0lBQzFCO0lBQ0EsVUFBSSxRQUFPLEdBQVAsYUFBTyxHQUFQLHVCQUFPLEdBQUcsQ0FBRSxLQUFaLEtBQXFCLFFBQXpCLEVBQ0ksT0FBTyxlQUFlLENBQUM7SUFBRSxRQUFBLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxHQUFELGFBQUMsR0FBRCx1QkFBQyxHQUFHLENBQUUsS0FBTjtJQUE1QixPQUFELEVBQXVELEdBQXZELENBQXRCO0lBQ0osVUFBSSxRQUFPLEdBQVAsYUFBTyxHQUFQLHVCQUFPLEdBQUcsQ0FBRSxLQUFaLEtBQXFCLFFBQXpCLEVBQ0ksT0FBTyxlQUFlLENBQUMsR0FBRCxFQUFNO0lBQUUsUUFBQSxLQUFLLEVBQUUsbUJBQW1CLENBQUMsR0FBRCxhQUFDLEdBQUQsdUJBQUMsR0FBRyxDQUFFLEtBQU47SUFBNUIsT0FBTixDQUF0QjtJQUNQLEtBZnlCOzs7SUFrQjFCLFdBQU8sU0FBUDtJQUNILEdBekIrTDs7O0lBNEJoTSxNQUFJLFFBQU8sR0FBUCxhQUFPLEdBQVAsdUJBQU8sR0FBRyxDQUFFLEtBQVosS0FBcUIsUUFBekIsRUFBbUM7SUFBQTs7SUFDL0IsV0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQVosY0FBZ0IsR0FBaEIsYUFBZ0IsR0FBaEIsdUJBQWdCLEdBQUcsQ0FBRSxLQUFyQixtREFBOEIsRUFBRSxFQUF2QztJQUNILEdBOUIrTDs7O0lBaUNoTSxTQUFPLEVBQ0gsa0JBQUksR0FBSixhQUFJLEdBQUosdUJBQUksR0FBRyxDQUFFLEtBQVQsbURBQWtCLEVBQWxCLENBREc7SUFFSCx1QkFBSSxHQUFKLGFBQUksR0FBSix1QkFBSSxHQUFHLENBQUUsS0FBVCxxREFBa0IsRUFBbEI7SUFGRyxHQUFQO0lBSUg7O0lDN0NELElBQUksR0FBRyxHQUF1QyxHQUFELElBQVE7SUFBRztJQUFVLEVBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxpREFBaUQsR0FBRyxFQUFqRTtJQUF1RTtJQUFtQixDQUE1SjtJQVVBOzs7Ozs7O0lBT0c7O0lBQ0csU0FBVSxjQUFWLEdBQXdCO0lBQzFCLFNBQU8sVUFBZ0YsSUFBaEYsRUFBeUYsSUFBekYsRUFBZ0c7SUFHbkc7SUFDQTtJQUNBLFVBQU07SUFBRSxNQUFBLFFBQVEsRUFBRSxXQUFaO0lBQXlCLE1BQUEsS0FBSyxFQUFFLFFBQWhDO0lBQTBDLE1BQUEsU0FBUyxFQUFFLFlBQXJEO0lBQW1FLE1BQUEsS0FBSyxFQUFFLFFBQTFFO0lBQW9GLE1BQUEsR0FBRyxFQUFFLE1BQXpGO0lBQWlHLFNBQUc7SUFBcEcsUUFBNEcsSUFBbEg7SUFDQSxVQUFNO0lBQUUsTUFBQSxRQUFRLEVBQUUsV0FBWjtJQUF5QixNQUFBLEtBQUssRUFBRSxRQUFoQztJQUEwQyxNQUFBLFNBQVMsRUFBRSxZQUFyRDtJQUFtRSxNQUFBLEtBQUssRUFBRSxRQUExRTtJQUFvRixNQUFBLEdBQUcsRUFBRSxNQUF6RjtJQUFpRyxTQUFHO0lBQXBHLFFBQTRHLElBQWxIO0lBRUEsUUFBSSxHQUFHLEdBQXlCLEVBQzVCLEdBQUcsR0FEeUI7SUFFNUIsTUFBQSxHQUFHLEVBQUUsYUFBYSxHQUFNLElBQU4sRUFBWSxJQUFaLENBRlU7SUFHNUIsTUFBQSxLQUFLLEVBQUUsZUFBZSxDQUFDLElBQUQsRUFBTyxJQUFQLENBSE07SUFJNUIsTUFBQSxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FKQztJQUs1QixNQUFBLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFELEVBQU8sSUFBUDtJQUxDLEtBQWhDO0lBUUEsUUFBSSxHQUFHLENBQUMsR0FBSixLQUFZLFNBQWhCLEVBQTJCLE9BQU8sR0FBRyxDQUFDLEdBQVg7SUFDM0IsUUFBSSxHQUFHLENBQUMsS0FBSixLQUFjLFNBQWxCLEVBQTZCLE9BQU8sR0FBRyxDQUFDLEtBQVg7SUFDN0IsUUFBSSxHQUFHLENBQUMsU0FBSixLQUFrQixTQUF0QixFQUFpQyxPQUFPLEdBQUcsQ0FBQyxTQUFYO0lBQ2pDLFFBQUksR0FBRyxDQUFDLFFBQUosS0FBaUIsU0FBckIsRUFBZ0MsT0FBTyxHQUFHLENBQUMsUUFBWCxDQW5CbUU7SUFzQm5HO0lBQ0E7O0lBQ0EsVUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxHQUFmLENBQW5COztJQUVBLFNBQUssTUFBTSxDQUFDLE1BQUQsRUFBUyxRQUFULENBQVgsSUFBaUMsVUFBakMsRUFBNkM7SUFFekMsWUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQUQsQ0FBcEI7O0lBRUEsVUFBSSxPQUFPLFFBQVAsS0FBb0IsVUFBcEIsSUFBa0MsT0FBTyxRQUFQLEtBQW9CLFVBQTFELEVBQXNFO0lBRWxFO0lBQ0E7SUFDQSxjQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsUUFBRCxFQUFvQixRQUFwQixDQUE3QjtJQUNBLFFBQUEsR0FBRyxDQUFDLE1BQUQsQ0FBSCxHQUE0QyxNQUE1QztJQUNILE9BTkQsTUFPSztJQUNEO0lBQ0EsWUFBSSxRQUFRLElBQUksSUFBWixJQUFvQixRQUFRLElBQUksSUFBcEMsRUFBMEM7SUFDdEMsY0FBSSxRQUFRLEtBQUssSUFBYixJQUFxQixRQUFRLEtBQUssU0FBdEMsRUFDSSxHQUFHLENBQUMsTUFBRCxDQUFILEdBQTRDLFFBQTVDLENBREosS0FHSSxHQUFHLENBQUMsTUFBRCxDQUFILEdBQTRDLFFBQTVDO0lBQ1A7O0lBQ0QsWUFBSSxRQUFRLElBQUksSUFBaEIsRUFDSSxHQUFHLENBQUMsTUFBRCxDQUFILEdBQTRDLFFBQTVDLENBREosS0FFSyxJQUFJLFFBQVEsSUFBSSxJQUFoQixFQUNELEdBQUcsQ0FBQyxNQUFELENBQUgsR0FBNEMsUUFBNUMsQ0FEQyxLQUVBLElBQUssUUFBZ0IsSUFBSSxRQUF6QixFQUFtQyxDQUFuQyxNQUtBO0lBQUE7O0lBQ0Q7SUFDQTtJQUNBLGtCQUFBLEdBQUcsVUFBSCxvQ0FBTSxzQ0FBc0MsTUFBTSxZQUFZLE9BQU8sUUFBUSxjQUFjLFFBQVEsS0FBSyxRQUFRLElBQWhIO0lBQ0EsVUFBQSxHQUFHLENBQUMsTUFBRCxDQUFILEdBQTRDLFFBQTVDO0lBQ0g7SUFDSjtJQUNKOztJQUVELFdBQU8sR0FBUDtJQUNILEdBaEVEO0lBaUVIOztJQUVELFNBQVMsY0FBVCxDQUE4RixHQUE5RixFQUF5SCxHQUF6SCxFQUFrSjtJQUU5SSxNQUFJLENBQUMsR0FBTCxFQUNJLE9BQU8sR0FBUDtJQUNKLE1BQUksQ0FBQyxHQUFMLEVBQ0ksT0FBTyxHQUFQO0lBRUosU0FBTyxZQUEyQjtJQUM5QixRQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsWUFBRCxDQUFaO0lBQ0EsUUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLFlBQUQsQ0FBWjtJQUVBLFFBQUksRUFBRSxZQUFZLE9BQWQsSUFBeUIsRUFBRSxZQUFZLE9BQTNDLEVBQ0ksT0FBTyxPQUFPLENBQUMsR0FBUixDQUFZLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBWixDQUFQO0lBQ1AsR0FORDtJQU9IO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUErS0U7O0lDMVFGLFNBQVNtRCxZQUFULEdBQW1CO0lBQUssU0FBTyxJQUFQO0lBQWM7SUFDdEM7Ozs7Ozs7O0lBUUc7OztJQUNHLFNBQVUsYUFBVixDQUEyQixJQUEzQixFQUE0RDtJQUM5RCxRQUFNLGVBQWUsR0FBRyxJQUFILGFBQUcsSUFBSCx1QkFBRyxJQUFJLENBQUUsZUFBOUIsQ0FEOEQ7O0lBRzlELFFBQU0sQ0FBQyxVQUFELEVBQWEsVUFBYixJQUEyQixlQUFlLENBQVcsZUFBWCxFQUE0QkEsWUFBNUIsQ0FBaEQsQ0FIOEQ7SUFNOUQ7O0lBQ0EsUUFBTSxLQUFLLEdBQW1CbkQsR0FBVyxDQUFFLENBQUQsSUFBTTtJQUM1QyxRQUFJLENBQUosRUFDSSxVQUFVLENBQUMsTUFBTSxDQUFQLENBQVY7SUFDUCxHQUh3QyxFQUd0QyxFQUhzQyxDQUF6QztJQUtBLFFBQU0sa0JBQWtCLEdBQUdBLEdBQVcsQ0FBdUMsS0FBZixJQUFnRSxjQUFjLEdBQVE7SUFBRSxJQUFBLEdBQUcsRUFBRTtJQUFQLEdBQVIsRUFBd0IsS0FBeEIsQ0FBdEcsRUFBMkksRUFBM0ksQ0FBdEMsQ0FaOEQ7SUFlOUQ7O0lBQ0EsU0FBTztJQUNILElBQUEsa0JBREc7SUFFSCxJQUFBO0lBRkcsR0FBUDtJQUlIOztJQ09ELFNBQVMsVUFBVCxHQUFtQjtJQUFLLFNBQU8sSUFBUDtJQUFjOztJQUNoQyxTQUFVLGNBQVYsT0FBeUc7SUFBQSxNQUF6RDtJQUFFLElBQUEsYUFBRjtJQUFpQixJQUFBO0lBQWpCLEdBQXlEO0lBRTNHLEVBQUEsa0JBQWtCLENBQUMsYUFBRCxFQUFnQixZQUFoQixDQUFsQjtJQUVBLFFBQU0sQ0FBQyxPQUFELEVBQVUsT0FBVixJQUFxQixlQUFlLENBQXFCLFlBQXJCLEVBQStFLFVBQS9FLENBQTFDO0lBRUEsUUFBTSxpQkFBaUIsR0FBR0wsQ0FBTSxDQUF1QyxTQUF2QyxDQUFoQztJQUVBLFFBQU0sZ0JBQWdCLEdBQUdLLEdBQVcsQ0FBQyxDQUFDLE9BQUQsRUFBb0IsVUFBcEIsS0FBd0U7SUFDekcsUUFBSSxPQUFKLEVBQWE7SUFDVCxZQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBekI7SUFDQSxZQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsV0FBeEI7O0lBRUEsWUFBTSxZQUFZLEdBQUcsTUFBSztJQUN0QixZQUFJLE9BQU8sQ0FBQyxXQUFaLEVBQXlCO0lBQ3JCLGdCQUFNO0lBQUUsWUFBQSxXQUFGO0lBQWUsWUFBQSxXQUFmO0lBQTRCLFlBQUEsV0FBNUI7SUFBeUMsWUFBQSxZQUF6QztJQUF1RCxZQUFBLFlBQXZEO0lBQXFFLFlBQUEsWUFBckU7SUFBbUYsWUFBQSxVQUFuRjtJQUErRixZQUFBLFVBQS9GO0lBQTJHLFlBQUEsVUFBM0c7SUFBdUgsWUFBQSxTQUF2SDtJQUFrSSxZQUFBLFNBQWxJO0lBQTZJLFlBQUE7SUFBN0ksY0FBMkosT0FBaks7SUFDQSxVQUFBLE9BQU8sQ0FBQztJQUFFLFlBQUEsV0FBRjtJQUFlLFlBQUEsV0FBZjtJQUE0QixZQUFBLFdBQTVCO0lBQXlDLFlBQUEsWUFBekM7SUFBdUQsWUFBQSxZQUF2RDtJQUFxRSxZQUFBLFlBQXJFO0lBQW1GLFlBQUEsVUFBbkY7SUFBK0YsWUFBQSxVQUEvRjtJQUEyRyxZQUFBLFVBQTNHO0lBQXVILFlBQUEsU0FBdkg7SUFBa0ksWUFBQSxTQUFsSTtJQUE2SSxZQUFBO0lBQTdJLFdBQUQsQ0FBUDtJQUNIO0lBQ0osT0FMRDs7SUFRQSxVQUFJLE1BQU0sSUFBSyxvQkFBb0IsTUFBbkMsRUFBNEM7SUFDeEMsY0FBTSxRQUFRLEdBQUcsSUFBSSxjQUFKLENBQW9CLE9BQUQsSUFBWTtJQUFHLFVBQUEsWUFBWTtJQUFLLFNBQW5ELENBQWpCO0lBRUEsUUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixPQUFqQixFQUEwQjtJQUFFLFVBQUEsR0FBRyxFQUFFO0lBQVAsU0FBMUI7SUFFQSxlQUFPLE1BQU0sUUFBUSxDQUFDLFVBQVQsRUFBYjtJQUNILE9BTkQsTUFPSztJQUNELFFBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQXBDLEVBQWtEO0lBQUUsVUFBQSxPQUFPLEVBQUU7SUFBWCxTQUFsRDtJQUNBLGVBQU8sTUFBTSxRQUFRLENBQUMsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUMsWUFBdkMsQ0FBYjtJQUNIO0lBQ0o7SUFDSixHQXpCbUMsRUF5QmpDLEVBekJpQyxDQUFwQztJQTJCQSxRQUFNO0lBQUUsSUFBQSxVQUFGO0lBQWMsSUFBQTtJQUFkLE1BQXFDLGFBQWEsQ0FBSTtJQUFFLElBQUEsZUFBZSxFQUFFQSxHQUFXLENBQUUsQ0FBRCxJQUFpQixnQkFBZ0IsQ0FBQyxDQUFELEVBQUksYUFBSixhQUFJLGFBQUosdUJBQUksYUFBYSxFQUFqQixDQUFsQyxFQUEwRCxFQUExRDtJQUE5QixHQUFKLENBQXhEO0lBRUEsRUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxRQUFJLGFBQUosRUFBbUI7SUFDZixVQUFJLGlCQUFpQixDQUFDLE9BQWxCLEtBQThCLGFBQWEsRUFBL0MsRUFDSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQVgsRUFBZSxhQUFhLEVBQTVCLENBQWhCO0lBQ1A7SUFDSixHQUxRLENBQVQ7SUFPQSxTQUFPO0lBQ0gsSUFBQSxVQURHO0lBRUgsSUFBQSxPQUZHO0lBR0gsSUFBQSxtQkFBbUIsRUFBRTtJQUhsQixHQUFQO0lBT0g7O0lDdkZELFNBQVMsVUFBVCxDQUFzQyxHQUF0QyxFQUE0QztJQUN4QyxTQUFRLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxXQUFQLEtBQXVCLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBWCxDQUEvQjtJQUNIO0lBcUJEOzs7Ozs7Ozs7Ozs7Ozs7SUFlRzs7O0lBQ0csU0FBVSxtQkFBVixPQUE0RztJQUFBLE1BQTNEO0lBQUUsSUFBQTtJQUFGLEdBQTJEO0lBRTlHLEVBQUEsa0JBQWtCLENBQUMsd0JBQUQsQ0FBbEI7SUFFQSxRQUFNLENBQUMsaUJBQUQsRUFBb0IsaUJBQXBCLElBQXlDLGVBQWUsQ0FBNkIsSUFBN0IsQ0FBOUQ7SUFHQSxRQUFNO0lBQUUsSUFBQSxVQUFGO0lBQWMsSUFBQTtJQUFkLE1BQXFDLGFBQWEsQ0FBVztJQUMvRCxJQUFBLGVBQWUsRUFBRVcsR0FBVyxDQUFFLE9BQUQsSUFBc0I7SUFDL0MsVUFBSSxPQUFKLEVBQWE7SUFDVCxRQUFBLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixDQUFELENBQWpCO0lBQ0g7SUFDSixLQUoyQixFQUkxQixFQUowQjtJQURtQyxHQUFYLENBQXhELENBUDhHO0lBZ0I5RztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsUUFBTTtJQUFFLElBQUE7SUFBRixNQUEwQixjQUFjLENBQUM7SUFBRSxJQUFBLFlBQVksRUFBRUEsR0FBVyxDQUFDLENBQUMsSUFBSSx3QkFBSixhQUFJLHdCQUFKLHVCQUFJLHdCQUF3QixDQUFHLHVCQUF1QixFQUExQixDQUE5QixFQUE2RCxFQUE3RDtJQUEzQixHQUFELENBQTlDO0lBRUEsUUFBTSx1QkFBdUIsR0FBR0EsR0FBVyxDQUFDLE1BQUs7SUFDN0MsVUFBTSxjQUFjLEdBQUcsaUJBQWlCLEVBQXhDOztJQUNBLFFBQUksY0FBSixFQUFvQjtJQUNoQixVQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsV0FBdkI7SUFDQSxVQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsU0FBdkI7SUFDQSxVQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsZUFBdkI7SUFFQSxVQUFJLENBQUMsSUFBSSxTQUFULEVBQ0ksQ0FBQyxHQUFHLEtBQUo7SUFFSixhQUFRLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQyxJQUFJLGVBQU4sQ0FBWixDQUFtQyxDQUFDLElBQUksS0FBeEM7SUFBTCxPQUFSO0lBQ0g7O0lBRUQsV0FBTyxJQUFQO0lBQ0gsR0FkMEMsRUFjeEMsRUFkd0MsQ0FBM0MsQ0EzQjhHOztJQTZDOUcsUUFBTSwyQkFBMkIsR0FBR0EsR0FBVyxDQUFDLENBQUMsa0JBQUQsRUFBMEMsU0FBMUMsS0FBaUc7SUFBQTs7SUFDN0ksa0JBQUEsU0FBUyxVQUFULHlDQUFBLFNBQVMsR0FBSyx1QkFBdUIsRUFBckM7SUFDQSxRQUFJLGdCQUFBLFNBQVMsVUFBVCxrREFBVyxpQkFBWCxNQUFpQyxrQkFBckMsRUFDSSxPQUFPLFFBQVA7SUFDSixXQUFPLE9BQVA7SUFDSCxHQUw4QyxFQUs1QyxFQUw0QyxDQUEvQztJQU9BLFFBQU0scUJBQXFCLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLElBQUQsRUFBb0UsU0FBcEUsS0FBZ0s7SUFBQTs7SUFDdE0sbUJBQUEsU0FBUyxVQUFULDJDQUFBLFNBQVMsR0FBSyx1QkFBdUIsRUFBckM7O0lBRUEsWUFBUSxJQUFSO0lBQ0ksV0FBSyxhQUFMO0lBQ0ksZUFBT29ELEdBQUMsQ0FBQyx5Q0FBQyxTQUFELGdEQUFDLFlBQVcsY0FBWix5RUFBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBRCxDQUFSOztJQUNKLFdBQUssV0FBTDtJQUNJLGVBQU9BLEdBQUMsQ0FBQywwQ0FBQyxTQUFELGdEQUFDLFlBQVcsY0FBWiwyRUFBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBRCxDQUFSOztJQUVKLFdBQUssY0FBTDtJQUNJLGVBQU9BLEdBQUMsQ0FBQyx5Q0FBQyxTQUFELGdEQUFDLFlBQVcsZUFBWix5RUFBK0IsS0FBL0IsRUFBc0MsQ0FBdEMsQ0FBRCxDQUFSOztJQUNKLFdBQUssWUFBTDtJQUNJLGVBQU9BLEdBQUMsQ0FBQywwQ0FBQyxTQUFELGdEQUFDLFlBQVcsZUFBWiwyRUFBK0IsS0FBL0IsRUFBc0MsQ0FBdEMsQ0FBRCxDQUFSO0lBVFI7SUFXSCxHQWR3QyxFQWN0QyxFQWRzQyxDQUF6QztJQWdCQSxRQUFNLG9CQUFvQixHQUFHcEQsR0FBVyxDQUFDLENBQUMsSUFBRCxFQUE0QyxTQUE1QyxLQUFnSztJQUFBOztJQUNyTSxtQkFBQSxTQUFTLFVBQVQsMkNBQUEsU0FBUyxHQUFLLHVCQUF1QixFQUFyQzs7SUFDQSxRQUFJLGdCQUFBLFNBQVMsVUFBVCxrREFBVyxpQkFBWCxNQUFpQyxVQUFyQyxFQUFpRDtJQUM3QyxjQUFRLElBQVI7SUFDSSxhQUFLLEtBQUw7SUFDSSxpQkFBTyxTQUFTLENBQUMsZUFBVixLQUE4QixLQUE5QixHQUFzQyxjQUF0QyxHQUF1RCxZQUE5RDs7SUFDSixhQUFLLFFBQUw7SUFDSSxpQkFBTyxTQUFTLENBQUMsZUFBVixLQUE4QixLQUE5QixHQUFzQyxjQUF0QyxHQUF1RCxZQUE5RDs7SUFFSixhQUFLLE1BQUw7SUFDSSxpQkFBTyxTQUFTLENBQUMsY0FBVixLQUE2QixLQUE3QixHQUFxQyxhQUFyQyxHQUFxRCxXQUE1RDs7SUFDSixhQUFLLE9BQUw7SUFDSSxpQkFBTyxTQUFTLENBQUMsY0FBVixLQUE2QixLQUE3QixHQUFxQyxhQUFyQyxHQUFxRCxXQUE1RDtJQVRSO0lBV0gsS0FaRCxNQWFLLElBQUksaUJBQUEsU0FBUyxVQUFULG9EQUFXLGlCQUFYLE1BQWlDLFlBQXJDLEVBQW1EO0lBQ3BELGNBQVEsSUFBUjtJQUNJLGFBQUssS0FBTDtJQUNJLGlCQUFPLFNBQVMsQ0FBQyxjQUFWLEtBQTZCLEtBQTdCLEdBQXFDLGFBQXJDLEdBQXFELFdBQTVEOztJQUNKLGFBQUssUUFBTDtJQUNJLGlCQUFPLFNBQVMsQ0FBQyxjQUFWLEtBQTZCLEtBQTdCLEdBQXFDLGFBQXJDLEdBQXFELFdBQTVEOztJQUVKLGFBQUssTUFBTDtJQUNJLGlCQUFPLFNBQVMsQ0FBQyxlQUFWLEtBQThCLEtBQTlCLEdBQXNDLGNBQXRDLEdBQXVELFlBQTlEOztJQUNKLGFBQUssT0FBTDtJQUNJLGlCQUFPLFNBQVMsQ0FBQyxlQUFWLEtBQThCLEtBQTlCLEdBQXNDLGNBQXRDLEdBQXVELFlBQTlEO0lBVFI7SUFXSDs7SUFFRDtJQUNBLElBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmO0lBQ0EsV0FBTyxjQUFQO0lBRUgsR0FqQ3VDLEVBaUNyQyxFQWpDcUMsQ0FBeEM7SUFtQ0EsUUFBTSw0QkFBNEIsR0FBR0EsR0FBVyxDQUFDLENBQUMsa0JBQUQsRUFBeUMsU0FBekMsS0FBZ0c7SUFBQTs7SUFDN0ksb0JBQUEsU0FBUyxVQUFULDZDQUFBLFNBQVMsR0FBSyx1QkFBdUIsRUFBckM7O0lBQ0EsUUFBSSxrQkFBa0IsSUFBSSxRQUExQixFQUFvQztJQUFBOztJQUNoQyxVQUFJLGlCQUFBLFNBQVMsVUFBVCxvREFBVyxpQkFBWCxLQUFnQyxZQUFwQyxFQUNJLE9BQU8sWUFBUDtJQUNKLGFBQU8sVUFBUDtJQUNILEtBSkQsTUFLSztJQUFBOztJQUNELFVBQUksaUJBQUEsU0FBUyxVQUFULG9EQUFXLGdCQUFYLEtBQStCLFVBQW5DLEVBQ0ksT0FBTyxVQUFQO0lBRUosYUFBTyxZQUFQO0lBQ0g7SUFDSixHQWIrQyxFQWE3QyxFQWI2QyxDQUFoRDtJQWVBLFFBQU0sa0JBQWtCLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLFdBQUQsRUFBMkIsU0FBM0IsS0FBNkc7SUFBQTs7SUFDaEosb0JBQUEsU0FBUyxVQUFULDZDQUFBLFNBQVMsR0FBSyx1QkFBdUIsRUFBckM7O0lBQ0EsUUFBSSxTQUFKLEVBQWU7SUFDWCxZQUFNO0lBQUUsUUFBQSxVQUFGO0lBQWMsUUFBQSxTQUFkO0lBQXlCLFFBQUEsZUFBekI7SUFBMEMsUUFBQTtJQUExQyxVQUE2RCxTQUFuRSxDQURXOztJQUlYLFVBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLFVBQUQsQ0FBWSxFQUFoQyxDQUFsQztJQUNBLFVBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxTQUFELENBQVcsRUFBL0IsQ0FBakM7SUFFQSxVQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxVQUFELENBQVksRUFBaEMsQ0FBbEM7SUFDQSxVQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsU0FBRCxDQUFXLEVBQS9CLENBQWpDO0lBRUEsVUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsVUFBRCxDQUFZLEVBQWhDLENBQWxDO0lBQ0EsVUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLFNBQUQsQ0FBVyxFQUEvQixDQUFqQyxDQVhXO0lBZ0JYOztJQUNBLGVBQVMsa0JBQVQsQ0FBNEIsR0FBNUIsRUFBa0Q7SUFBSSxZQUFJLEdBQUcsS0FBSyxLQUFSLElBQWlCLEdBQUcsSUFBSSxLQUE1QixFQUFtQyxPQUFPLE1BQVA7SUFBZSxlQUFPLEtBQVA7SUFBZTs7SUFDdkgsZUFBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFzRDtJQUFJLFlBQUksR0FBRyxLQUFLLEtBQVosRUFBbUIsT0FBTyxPQUFQO0lBQWdCLFlBQUksR0FBRyxLQUFLLEtBQVosRUFBbUIsT0FBTyxRQUFQO0lBQWlCLGVBQU8sSUFBUDtJQUFjOztJQUUvSSxZQUFNLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxlQUFELENBQTdCO0lBQ0EsWUFBTSxFQUFFLEdBQUcsc0JBQXNCLENBQUMsZUFBRCxDQUFqQztJQUVBLFlBQU0sRUFBRSxHQUFHLGtCQUFrQixDQUFDLGNBQUQsQ0FBN0I7SUFDQSxZQUFNLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxjQUFELENBQWpDO0lBR0EsVUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQVgsSUFBMEMsQ0FBQyxFQUFELEdBQU0sQ0FBTixHQUFVLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBL0QsQ0FBeEI7SUFDQSxVQUFJLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBWCxJQUEwQyxDQUFDLEVBQUQsR0FBTSxDQUFOLEdBQVUsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUQsQ0FBSSxFQUF4QixDQUEvRCxDQUF4QjtJQUNBLFVBQUksaUJBQWlCLEdBQUcsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUQsQ0FBSSxFQUF4QixDQUFYLElBQTBDLFNBQTFDLEdBQXNELFNBQXRELEdBQW1FLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBWCxJQUEyQyxDQUFDLEVBQUQsR0FBTSxDQUFOLEdBQVUsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUQsQ0FBSSxFQUF4QixDQUFoRSxDQUEzRjtJQUdBLFVBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUQsQ0FBSSxFQUF4QixDQUFYLElBQTBDLENBQUMsRUFBRCxHQUFNLENBQU4sR0FBVSxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQS9ELENBQXZCO0lBQ0EsVUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQVgsSUFBMEMsQ0FBQyxFQUFELEdBQU0sQ0FBTixHQUFVLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBL0QsQ0FBdkI7SUFDQSxVQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBWCxJQUEwQyxTQUExQyxHQUFzRCxTQUF0RCxHQUFtRSxXQUFXLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRCxDQUFJLEVBQXhCLENBQVgsSUFBMkMsQ0FBQyxFQUFELEdBQU0sQ0FBTixHQUFVLFdBQVcsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxFQUFELENBQUksRUFBeEIsQ0FBaEUsQ0FBMUY7SUFHQSxhQUFPO0lBQ0gsUUFBQSxnQkFERztJQUVILFFBQUEsZ0JBRkc7SUFHSCxRQUFBLGdCQUhHO0lBSUgsUUFBQSxlQUpHO0lBS0gsUUFBQSxlQUxHO0lBTUgsUUFBQSxlQU5HO0lBT0gsUUFBQSxpQkFQRztJQVFILFFBQUEsaUJBUkc7SUFTSCxRQUFBLGlCQVRHO0lBVUgsUUFBQSxnQkFWRztJQVdILFFBQUEsZ0JBWEc7SUFZSCxRQUFBO0lBWkcsT0FBUDtJQWNIOztJQUVELFdBQU8sSUFBUDtJQUVILEdBekRxQyxFQXlEbkMsRUF6RG1DLENBQXRDO0lBMkRBLFNBQU87SUFDSCxJQUFBLHdCQUF3QixFQUFFQSxHQUFXLENBQUUsS0FBRCxJQUFvQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFELENBQXBCLENBQXZELEVBQXFGLEVBQXJGLENBRGxDO0lBRUgsSUFBQSxVQUZHO0lBR0gsSUFBQSx1QkFIRztJQUlILElBQUEsb0JBQW9CLEVBQUUsa0JBSm5CO0lBS0gsSUFBQSwyQkFMRztJQU1ILElBQUEsNEJBTkc7SUFPSCxJQUFBLG9CQVBHO0lBUUgsSUFBQTtJQVJHLEdBQVA7SUFVSDs7SUFHRCxNQUFNb0QsR0FBQyxHQUFHO0lBQ04sRUFBQSxDQUFDLEVBQUUsS0FERztJQUVOLEVBQUEsQ0FBQyxFQUFFLFFBRkc7SUFHTixFQUFBLENBQUMsRUFBRSxNQUhHO0lBSU4sRUFBQSxDQUFDLEVBQUU7SUFKRyxDQUFWO0lBc0hBLE1BQU0sZUFBZSxHQUF5QjtJQUMxQyxFQUFBLGVBQWUsRUFBRSxLQUR5QjtJQUUxQyxFQUFBLGNBQWMsRUFBRSxLQUYwQjtJQUkxQyxFQUFBLGlCQUFpQixFQUFFLFlBSnVCO0lBSzFDLEVBQUEsZ0JBQWdCLEVBQUUsVUFMd0I7SUFPMUMsRUFBQSxVQUFVLEVBQUUsT0FQOEI7SUFRMUMsRUFBQSxTQUFTLEVBQUUsUUFSK0I7SUFVMUMsRUFBQSxrQkFBa0IsRUFBRSxLQVZzQjtJQVcxQyxFQUFBLGtCQUFrQixFQUFFO0lBWHNCLENBQTlDO0lBY0EsTUFBTSxlQUFlLEdBQXlCLEVBQzFDLEdBQUcsZUFEdUM7SUFFMUMsRUFBQSxlQUFlLEVBQUU7SUFGeUIsQ0FBOUM7SUFLQSxNQUFNLGFBQWEsR0FBeUI7SUFDeEMsRUFBQSxlQUFlLEVBQUUsS0FEdUI7SUFFeEMsRUFBQSxjQUFjLEVBQUUsS0FGd0I7SUFJeEMsRUFBQSxpQkFBaUIsRUFBRSxVQUpxQjtJQUt4QyxFQUFBLGdCQUFnQixFQUFFLFlBTHNCO0lBT3hDLEVBQUEsVUFBVSxFQUFFLFFBUDRCO0lBUXhDLEVBQUEsU0FBUyxFQUFFLE9BUjZCO0lBVXhDLEVBQUEsa0JBQWtCLEVBQUUsS0FWb0I7SUFXeEMsRUFBQSxrQkFBa0IsRUFBRTtJQVhvQixDQUE1QztJQWNBLE1BQU0sYUFBYSxHQUF5QixFQUN4QyxHQUFHLGFBRHFDO0lBRXhDLEVBQUEsZUFBZSxFQUFFO0lBRnVCLENBQTVDO0lBTUEsTUFBTSxhQUFhLEdBQXlCLEVBQUUsR0FBRztJQUFMLENBQTVDO0lBQ0EsTUFBTSxhQUFhLEdBQXlCLEVBQUUsR0FBRztJQUFMLENBQTVDO0lBRUEsTUFBTSxhQUFhLEdBQXlCLEVBQ3hDLEdBQUcsYUFEcUM7SUFFeEMsRUFBQSxjQUFjLEVBQUU7SUFGd0IsQ0FBNUM7SUFLQSxNQUFNLGFBQWEsR0FBeUIsRUFDeEMsR0FBRyxhQURxQztJQUV4QyxFQUFBLGNBQWMsRUFBRTtJQUZ3QixDQUE1QztJQUtBLE1BQU0sYUFBYSxHQUF5QixFQUN4QyxHQUFHLGFBRHFDO0lBRXhDLEVBQUEsZUFBZSxFQUFFLEtBRnVCO0lBSXhDLEVBQUEsa0JBQWtCLEVBQUUsS0FKb0I7SUFLeEMsRUFBQSxrQkFBa0IsRUFBRTtJQUxvQixDQUE1QztJQVFBLE1BQU0sYUFBYSxHQUF5QixFQUN4QyxHQUFHLGFBRHFDO0lBRXhDLEVBQUEsZUFBZSxFQUFFO0lBRnVCLENBQTVDO0lBT0EsTUFBTSxZQUFZLEdBQUc7SUFDakIsRUFBQSxHQUFHLEVBQUUsZUFEWTtJQUVqQixFQUFBLEdBQUcsRUFBRTtJQUZZLENBQXJCO0lBS0EsTUFBTSxVQUFVLEdBQUc7SUFDZixFQUFBLEdBQUcsRUFBRSxhQURVO0lBRWYsRUFBQSxHQUFHLEVBQUU7SUFGVSxDQUFuQjtJQUtBLE1BQU0sVUFBVSxHQUFHO0lBQ2YsRUFBQSxHQUFHLEVBQUUsYUFEVTtJQUVmLEVBQUEsR0FBRyxFQUFFO0lBRlUsQ0FBbkI7SUFLQSxNQUFNLFVBQVUsR0FBRztJQUNmLEVBQUEsR0FBRyxFQUFFLGFBRFU7SUFFZixFQUFBLEdBQUcsRUFBRTtJQUZVLENBQW5CO0lBS0EsTUFBTSxVQUFVLEdBQUc7SUFDZixFQUFBLEdBQUcsRUFBRSxhQURVO0lBRWYsRUFBQSxHQUFHLEVBQUU7SUFGVSxDQUFuQjtJQUtBLE1BQU0sWUFBWSxHQUFHO0lBQ2pCLG1CQUFpQixZQURBO0lBRWpCLGlCQUFlLFVBRkU7SUFHakIsaUJBQWUsVUFIRTtJQUlqQixpQkFBZSxVQUpFO0lBS2pCLGlCQUFlO0lBTEUsQ0FBckI7O0lDdmNBOzs7Ozs7SUFNRzs7SUFDRyxTQUFVLFFBQVYsQ0FBc0IsWUFBdEIsRUFBaUQ7SUFFbkQ7SUFDQSxRQUFNLENBQUMsS0FBRCxFQUFRLFNBQVIsSUFBcUJDLENBQVMsQ0FBQyxZQUFELENBQXBDO0lBQ0EsUUFBTSxHQUFHLEdBQUcxRCxDQUFNLENBQUMsS0FBRCxDQUFsQixDQUptRDtJQU9uRDs7SUFDQSxRQUFNLFFBQVEsR0FBR0ssR0FBVyxDQUFrQixLQUFLLElBQUc7SUFDbEQsUUFBSSxPQUFPLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7SUFDN0IsVUFBSSxRQUFRLEdBQUcsS0FBZjtJQUNBLE1BQUEsU0FBUyxDQUFDLFNBQVMsSUFBRztJQUNsQixZQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBRCxDQUF4QjtJQUNBLFFBQUEsR0FBRyxDQUFDLE9BQUosR0FBYyxTQUFkO0lBQ0EsZUFBTyxTQUFQO0lBQ0gsT0FKUSxDQUFUO0lBS0gsS0FQRCxNQVFLO0lBQ0QsTUFBQSxHQUFHLENBQUMsT0FBSixHQUFjLEtBQWQ7SUFDQSxNQUFBLFNBQVMsQ0FBQyxLQUFELENBQVQ7SUFDSDtJQUNKLEdBYjJCLEVBYXpCLEVBYnlCLENBQTVCOztJQWVBLFFBQU0sUUFBUSxHQUFHLE1BQUs7SUFBRyxXQUFPLEdBQUcsQ0FBQyxPQUFYO0lBQXFCLEdBQTlDOztJQUdBLEVBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxHQUFHLENBQUMsT0FBSixLQUFnQixLQUFoQixJQUEwQixPQUFPLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsS0FBSyxDQUFDLEtBQUQsQ0FBM0U7SUFDQSxTQUFPLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsUUFBbEIsQ0FBUDtJQUNIOztJQ2pDRCxNQUFNLEtBQUssR0FBRyxrRUFBZDs7SUFFQSxTQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBNkI7SUFDekIsU0FBTyxLQUFLLENBQUMsS0FBRCxDQUFaO0lBQ0g7O0lBRUQsU0FBUyxXQUFULEdBQW9CO0lBQ2hCLFNBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxLQUFnQixTQUEzQixDQUFQO0lBQ0g7O0lBRUQsU0FBUyxZQUFULEdBQXFCO0lBQ2pCLFNBQU8sQ0FBQyxXQUFXLEVBQVosRUFBZ0IsV0FBVyxFQUEzQixFQUErQixXQUFXLEVBQTFDLEVBQThDLFdBQVcsRUFBekQsRUFBNkQsV0FBVyxFQUF4RSxFQUE0RSxXQUFXLEVBQXZGLEVBQTJGLFdBQVcsRUFBdEcsRUFBMEcsV0FBVyxFQUFySCxFQUF5SCxXQUFXLEVBQXBJLEVBQXdJLFdBQVcsRUFBbkosRUFBdUosV0FBVyxFQUFsSyxDQUFQO0lBQ0g7SUFFRDs7OztJQUlHOzs7SUFDRyxTQUFVLGdCQUFWLENBQTJCLE1BQTNCLEVBQTBDO0lBQzVDLFNBQU8sR0FBRyxNQUFILGFBQUcsTUFBSCxjQUFHLE1BQUgsR0FBYSxLQUFLLEdBQUcsWUFBWSxHQUFHLEdBQWYsQ0FBbUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFELENBQTlCLEVBQW1DLElBQW5DLENBQXdDLEVBQXhDLENBQTJDLEVBQXZFO0lBQ0g7SUF3QkQ7Ozs7Ozs7O0lBUUc7O0lBQ0csU0FBVSxXQUFWLEdBQTREO0lBQUEsTUFBdEM7SUFBRSxJQUFBO0lBQUYsR0FBc0MsdUVBQUYsRUFBRTtJQUM5RCxRQUFNLENBQUMsUUFBRCxFQUFXLFdBQVgsSUFBMEIsUUFBUSxDQUFTLE1BQU0sZ0JBQWdCLENBQUMsTUFBRCxDQUEvQixDQUF4QztJQUNBLFFBQU0sQ0FBQyxrQkFBRCxFQUFxQixxQkFBckIsRUFBNEMscUJBQTVDLElBQXFFLFFBQVEsQ0FBQyxLQUFELENBQW5GO0lBQ0EsRUFBQU4sQ0FBZSxDQUFDLE1BQUs7SUFDakIsVUFBTSxrQkFBa0IsR0FBRyxxQkFBcUIsRUFBaEQ7SUFDQSxRQUFJLGtCQUFKLEVBQ0ksV0FBVyxDQUFDLE1BQU0sZ0JBQWdCLENBQUMsTUFBRCxDQUF2QixDQUFYO0lBQ0osSUFBQSxxQkFBcUIsQ0FBQyxJQUFELENBQXJCO0lBQ0gsR0FMYyxFQUtaLENBQUMsTUFBRCxDQUxZLENBQWYsQ0FIOEQ7SUFXOUQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFDQSxRQUFNLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsSUFBaUMsUUFBUSxDQUFxQixTQUFyQixDQUEvQztJQUVBLFFBQU0sb0JBQW9CLEdBQUdNLEdBQVcsQ0FBQyxTQUFTLG9CQUFULENBQXlFLFVBQXpFLEVBQXNGO0lBRTNILFVBQU0sR0FBRyxHQUE0QixnQkFBK0Y7SUFBQTs7SUFBQSxVQUF0QztJQUFFLFNBQUMsVUFBRCxHQUFjLE9BQWhCO0lBQXlCLFdBQUc7SUFBNUIsT0FBc0M7SUFFaEksWUFBTSxPQUFPLHFCQUFJLE9BQUosYUFBSSxPQUFKLGNBQUksT0FBSixHQUFlLE1BQWYseUNBQXlCLFFBQXpCLHlDQUFxQyxTQUFsRDtJQUNBLFVBQUksVUFBVSxLQUFLLElBQW5CLEVBQ0ksU0FBUyxDQUFDLE9BQUQsQ0FBVDtJQUVKLGFBQU8sY0FBYyxHQUFnQjtJQUFFLFNBQUMsVUFBRCxHQUFjO0lBQWhCLE9BQWhCLEVBQTJDLEtBQTNDLENBQXJCO0lBQ0gsS0FQRDs7SUFTQSxXQUFPLEdBQVA7SUFDSCxHQVp1QyxFQVlyQyxDQUFDLE1BQUQsRUFBUyxRQUFULENBWnFDLENBQXhDO0lBY0EsUUFBTSxnQkFBZ0IsR0FBcUJBLEdBQVcsQ0FBQyxTQUFTLGdCQUFULENBQWdFLENBQWhFLEVBQW9FO0lBQ3ZILFdBQU8sb0JBQW9CLENBQUMsSUFBRCxDQUFwQixDQUEyQixDQUEzQixDQUFQO0lBQ0gsR0FGcUQsRUFFbkQsQ0FBQyxvQkFBRCxDQUZtRCxDQUF0RDtJQUlBLFNBQU87SUFDSCxJQUFBLFFBREc7SUFFSCxJQUFBLEVBQUUsRUFBRSxNQUZEO0lBR0gsSUFBQSxLQUFLLEVBQUUsU0FISjtJQUlILElBQUEsZ0JBSkc7SUFLSCxJQUFBO0lBTEcsR0FBUDtJQU9IOztJQ2pHRCxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUosRUFBdkI7SUFDQSxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUosRUFBZDtJQUVBLE1BQU0sVUFBVSxHQUFJLFNBQVN4QyxHQUFULEdBQWtCLEtBQWxCLEdBQTBCLFlBQVlBLEdBQVosR0FBc0IsUUFBdEIsR0FBaUMsYUFBYUEsR0FBYixHQUF1QixTQUF2QixHQUFtQyxLQUFsSDtJQUdBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFDQSxNQUFNLGNBQWMsR0FBR0EsR0FBTyxDQUFDLFVBQUQsQ0FBOUI7O0lBQ0EsTUFBTSxTQUFTLEdBQTBCLENBQUMsS0FBRCxFQUFRLFdBQVIsS0FBdUI7SUFDNUQsT0FBSyxJQUFJLENBQUMsRUFBRCxFQUFLLFVBQUwsQ0FBVCxJQUE2QixLQUE3QixFQUFvQztJQUNoQyxVQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsR0FBZixDQUFtQixFQUFuQixDQUFsQjs7SUFDQSxRQUFJLFdBQVcsQ0FBQyxTQUFELEVBQVksVUFBVSxDQUFDLE1BQXZCLENBQWYsRUFBK0M7SUFBQTs7SUFDM0MsNkJBQUEsVUFBVSxDQUFDLE9BQVgsaUZBQUEsVUFBVTtJQUNWLE1BQUEsVUFBVSxDQUFDLE9BQVgsR0FBcUIsVUFBVSxDQUFDLE1BQVgsRUFBckI7SUFDQSxNQUFBLGNBQWMsQ0FBQyxHQUFmLENBQW1CLEVBQW5CLEVBQXVCLFVBQVUsQ0FBQyxNQUFsQztJQUNIO0lBQ0o7O0lBQ0QsRUFBQSxLQUFLLENBQUMsS0FBTjtJQUNBLEVBQUEsY0FBYyxTQUFkLElBQUEsY0FBYyxXQUFkLFlBQUEsY0FBYyxDQUFHLEtBQUgsRUFBVSxXQUFWLENBQWQ7SUFDSCxDQVhEOztBQVlBQSxPQUFPLENBQUMsVUFBRCxDQUFQLEdBQXNCLFNBQXRCO0lBRUE7Ozs7Ozs7O0lBUUc7O0lBQ0csU0FBVSxxQkFBVixDQUFnQyxNQUFoQyxFQUF3RCxNQUF4RCxFQUF1RTtJQUN6RSxRQUFNLENBQUMsRUFBRCxJQUFPa0IsQ0FBUSxDQUFDLE1BQU0sZ0JBQWdCLEVBQXZCLENBQXJCO0lBQ0EsRUFBQSxLQUFLLENBQUMsR0FBTixDQUFVLEVBQVYsRUFBYztJQUFFLElBQUEsTUFBRjtJQUFVLElBQUEsTUFBVjtJQUFrQixJQUFBLE9BQU8sRUFBRTtJQUEzQixHQUFkO0lBRUEsRUFBQVcsQ0FBUyxDQUFDLE1BQUs7SUFDWCxXQUFPLE1BQUs7SUFDUixNQUFBLEtBQUssQ0FBQyxNQUFOLENBQWEsRUFBYjtJQUNBLE1BQUEsY0FBYyxDQUFDLE1BQWYsQ0FBc0IsRUFBdEI7SUFDSCxLQUhEO0lBSUgsR0FMUSxFQUtOLENBQUMsRUFBRCxDQUxNLENBQVQ7SUFNSDs7SUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBdUMsT0FBdkMsRUFBdUQ7SUFDbkQsU0FBTyxDQUFDLEVBQ0osQ0FBQyxPQUFELElBQ0EsT0FBTyxDQUFDLE1BQVIsTUFBbUIsT0FBbkIsYUFBbUIsT0FBbkIsdUJBQW1CLE9BQU8sQ0FBRSxNQUE1QixDQURBLElBRUEsT0FGQSxhQUVBLE9BRkEsZUFFQSxPQUFPLENBQUUsSUFBVCxDQUFjLENBQUMsR0FBRCxFQUFNLEtBQU4sS0FBZ0IsR0FBRyxLQUFLLE9BQU8sQ0FBQyxLQUFELENBQTdDLENBSEksQ0FBUjtJQUtIOztJQ3hERCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBRCxDQUFwQjtJQUVBOzs7Ozs7Ozs7SUFTRzs7SUFDRyxTQUFVLGVBQVYsQ0FBNkIsS0FBN0IsRUFBcUM7SUFDdkMsUUFBTSxHQUFHLEdBQUdNLENBQU0sQ0FBSSxLQUFKLENBQWxCO0lBQ0EsRUFBQSxxQkFBcUIsQ0FBQyxNQUFLO0lBQUcsSUFBQSxHQUFHLENBQUMsT0FBSixHQUFjLEtBQWQ7SUFBc0IsR0FBL0IsRUFBaUMsQ0FBQyxLQUFELENBQWpDLENBQXJCO0lBQ0EsU0FBT0ssR0FBVyxDQUFDLE1BQUs7SUFDcEIsUUFBSSxHQUFHLENBQUMsT0FBSixLQUEyQixLQUEvQixFQUFzQztJQUNsQyxZQUFNLElBQUksS0FBSixDQUFVLHdFQUFWLENBQU47SUFDSDs7SUFDRCxXQUFPLEdBQUcsQ0FBQyxPQUFYO0lBQ0gsR0FMaUIsRUFLZixFQUxlLENBQWxCO0lBTUg7O0lDcEJEOzs7OztJQUtHOztJQUNHLFNBQVUsaUJBQVYsQ0FBK0QsRUFBL0QsRUFBb0U7SUFDdEUsUUFBTSxxQkFBcUIsR0FBRyxlQUFlLENBQUksRUFBSixDQUE3QztJQUVBLFNBQU9BLEdBQVcsQ0FBQyxZQUEwQztJQUN6RCxXQUFPLHFCQUFxQixHQUFHLFlBQUgsQ0FBNUI7SUFDSCxHQUZpQixFQUVmLEVBRmUsQ0FBbEI7SUFHSDs7SUNkRDs7Ozs7Ozs7O0lBU0c7O0lBQ0csU0FBVSxTQUFWLENBQXNDLE1BQXRDLEVBQWtJLE1BQWxJLEVBQW9LO0lBQUEsTUFBdEIsSUFBc0IsdUVBQWZzRCxDQUFlO0lBRXRLLFFBQU0sVUFBVSxHQUFHM0QsQ0FBTSxDQUFnQixTQUFoQixDQUF6Qjs7SUFDQSxRQUFNLE9BQU8sR0FBRyxNQUFLO0lBQ2pCLFFBQUksT0FBTyxHQUE2QixFQUF4Qzs7SUFDQSxRQUFJLE1BQU0sSUFBSSxVQUFVLENBQUMsT0FBekIsRUFBa0M7SUFDOUIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLFVBQVUsQ0FBQyxPQUFYLENBQW1CLE1BQTVCLEVBQW9DLE1BQU0sQ0FBQyxNQUEzQyxDQUFwQixFQUF3RSxFQUFFLENBQTFFLEVBQTZFO0lBQ3pFLFlBQUksVUFBVSxDQUFDLE9BQVgsQ0FBbUIsQ0FBbkIsS0FBeUIsTUFBTSxDQUFDLENBQUQsQ0FBbkMsRUFDSSxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWE7SUFBRSxVQUFBLElBQUksRUFBRSxVQUFVLENBQUMsT0FBWCxDQUFtQixDQUFuQixDQUFSO0lBQStCLFVBQUEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFEO0lBQXpDLFNBQWI7SUFDUDtJQUNKOztJQUNELFVBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBWixFQUFxQixPQUFyQixDQUFsQjtJQUNBLElBQUEsVUFBVSxDQUFDLE9BQVgsR0FBcUIsTUFBckI7SUFDQSxXQUFPLEdBQVA7SUFDSCxHQVhEOztJQWFBLEVBQUEsSUFBSSxDQUFDLE9BQUQsRUFBVSxNQUFWLENBQUo7SUFDSDs7SUMxQkQ7Ozs7Ozs7SUFPRzs7SUFDRyxTQUFVLGVBQVYsQ0FBNEMsTUFBNUMsRUFBd0ksTUFBeEksRUFBa0o7SUFDcEosU0FBTyxTQUFTLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUI0RCxDQUFqQixDQUFoQjtJQUNIOztJQ1dLLFNBQVUsVUFBVixPQUFvRTtJQUFBLE1BQS9DO0lBQUUsSUFBQSxPQUFGO0lBQVcsSUFBQSxRQUFYO0lBQXFCLElBQUE7SUFBckIsR0FBK0M7SUFDdEUsUUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsTUFBSztJQUFHLElBQUEsWUFBWSxDQUFDLE9BQWIsR0FBdUIsSUFBdkI7SUFBNkIsSUFBQSxRQUFRO0lBQUssR0FBbkQsQ0FBeEM7SUFDQSxRQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsT0FBRCxDQUFsQyxDQUZzRTtJQUt0RTs7SUFDQSxRQUFNLFlBQVksR0FBRzVELENBQU0sQ0FBZ0IsSUFBaEIsQ0FBM0I7SUFFQSxRQUFNLGFBQWEsR0FBSSxPQUFPLElBQUksSUFBbEMsQ0FSc0U7SUFXdEU7SUFDQTs7SUFDQSxFQUFBTixDQUFTLENBQUMsTUFBSztJQUNYLFFBQUksQ0FBQyxhQUFMLEVBQW9CO0lBQ2hCLFVBQUksT0FBTyxHQUFHLFVBQVUsRUFBeEI7SUFDQSxNQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBYSxLQUFLLE9BQU8sSUFBSSxJQUFoQixDQUE1Qjs7SUFFQSxVQUFJLE9BQU8sSUFBSSxJQUFmLEVBQXFCO0lBQ2pCLFFBQUEsWUFBWSxDQUFDLE9BQWIsR0FBdUIsQ0FBRSxJQUFJLElBQUosRUFBekI7SUFFQSxjQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUF6QjtJQUNBLGVBQU8sTUFBTSxZQUFZLENBQUMsTUFBRCxDQUF6QjtJQUNIO0lBQ0o7SUFFSixHQWJRLEVBYU4sQ0FBQyxZQUFELEVBQWUsYUFBZixDQWJNLENBQVQ7SUFlQSxRQUFNLGNBQWMsR0FBR1csR0FBVyxDQUFDLE1BQUs7SUFBQTs7SUFDcEMsV0FBUSxDQUFFLElBQUksSUFBSixFQUFILEdBQW1CLDJCQUFFLFlBQVksQ0FBQyxPQUFmLHlFQUEwQixJQUFJLElBQUosRUFBMUIsQ0FBMUI7SUFDSCxHQUZpQyxFQUUvQixFQUYrQixDQUFsQztJQUlBLFFBQU0sZ0JBQWdCLEdBQUdBLEdBQVcsQ0FBQyxNQUFLO0lBQ3RDLFVBQU0sT0FBTyxHQUFHLFVBQVUsRUFBMUI7SUFDQSxXQUFPLE9BQU8sSUFBSSxJQUFYLEdBQWtCLElBQWxCLEdBQXlCLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxFQUFZLE9BQU8sR0FBRyxjQUFjLEVBQXBDLENBQWhDO0lBQ0gsR0FIbUMsRUFHakMsRUFIaUMsQ0FBcEM7SUFLQSxTQUFPO0lBQUUsSUFBQSxjQUFGO0lBQWtCLElBQUE7SUFBbEIsR0FBUDtJQUNIOztJQ2tCRDs7Ozs7SUFLRzs7SUFDRyxTQUFVLG1CQUFWLE9BQWlQO0lBQUE7O0lBQUEsTUFBckw7SUFBRSxJQUFBLEtBQUY7SUFBUyxJQUFBLGVBQVQ7SUFBMEIsSUFBQSxjQUExQjtJQUEwQyxJQUFBLGNBQTFDO0lBQTBELElBQUEsY0FBMUQ7SUFBMEUsSUFBQSxlQUExRTtJQUEyRixJQUFBLG1CQUEzRjtJQUFnSCxJQUFBLGdCQUFoSDtJQUFrSSxJQUFBO0lBQWxJLEdBQXFMO0lBRW5QLDBCQUFBLG1CQUFtQixVQUFuQiw2REFBQSxtQkFBbUIsR0FBSyxRQUF4QjtJQUVBLFFBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxNQUFuQyxDQUptUDtJQU9uUDs7SUFDQSxFQUFBLGVBQWUsQ0FBQyxNQUFLO0lBQ2pCLFFBQUksS0FBSyxLQUFLLElBQWQsRUFBb0I7SUFDaEIsVUFBSSxLQUFLLEdBQUcsQ0FBWixFQUFlO0lBQ1gsUUFBQSxlQUFlO0lBQ2xCLE9BRkQsTUFHSyxJQUFJLFVBQVUsR0FBRyxDQUFiLElBQWtCLEtBQUssSUFBSSxVQUEvQixFQUEyQztJQUM1QyxRQUFBLGNBQWM7SUFDakI7SUFDSjtJQUNKLEdBVGMsRUFTWixDQUFDLEtBQUQsRUFBUSxVQUFSLEVBQW9CLGVBQXBCLEVBQXFDLGNBQXJDLENBVFksQ0FBZixDQVJtUDs7SUFvQm5QOzs7O0lBSXVGOztJQUV2RixFQUFpQixlQUFlLENBQUMsS0FBRDtJQUNoQyxRQUFNO0lBQUUsSUFBQSx1QkFBRjtJQUEyQixJQUFBO0lBQTNCLE1BQXdELG1CQUFtQixDQUFlLEVBQWYsQ0FBakY7O0lBRUEsUUFBTSxTQUFTLEdBQUksQ0FBRCxJQUFxQjtJQUNuQztJQUNBLFFBQUksQ0FBQyxDQUFDLE9BQUYsSUFBYSxDQUFDLENBQUMsT0FBbkIsRUFDSTtJQUVKLFVBQU0sSUFBSSxHQUFHLHVCQUF1QixFQUFwQztJQUVBLFFBQUkscUJBQXFCLEdBQUksbUJBQW1CLElBQUksT0FBdkIsSUFBa0MsbUJBQW1CLElBQUksUUFBdEY7SUFDQSxRQUFJLHNCQUFzQixHQUFJLG1CQUFtQixJQUFJLFFBQXZCLElBQW1DLG1CQUFtQixJQUFJLFFBQXhGOztJQUVBLFlBQVEsQ0FBQyxDQUFDLEdBQVY7SUFDSSxXQUFLLFNBQUw7SUFBZ0I7SUFDWixnQkFBTSxRQUFRLEdBQUksQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsZ0JBQU4sTUFBMkIsVUFBM0IsR0FBd0MsZ0JBQXhDLEdBQTJELGlCQUE3RTtJQUNBLGdCQUFNLGdCQUFnQixHQUFJLENBQUMsZ0JBQUQsS0FBc0IsQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsZ0JBQU4sTUFBMkIsVUFBM0IsR0FBd0MscUJBQXhDLEdBQWdFLHNCQUF0RixDQUExQjs7SUFDQSxjQUFJLGdCQUFKLEVBQXNCO0lBQ2xCLGdCQUFJLENBQUEsSUFBSSxTQUFKLElBQUEsSUFBSSxXQUFKLFlBQUEsSUFBSSxDQUFHLFFBQUgsQ0FBSixNQUFxQixLQUF6QixFQUFnQztJQUM1QixjQUFBLGNBQWM7SUFDakIsYUFGRCxNQUdLO0lBQ0QsY0FBQSxjQUFjO0lBQ2pCOztJQUNELFlBQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxZQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0g7O0lBQ0Q7SUFDSDs7SUFDRCxXQUFLLFdBQUw7SUFBa0I7SUFDZCxnQkFBTSxRQUFRLEdBQUksQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsZ0JBQU4sTUFBMkIsVUFBM0IsR0FBd0MsZ0JBQXhDLEdBQTJELGlCQUE3RTtJQUNBLGdCQUFNLGdCQUFnQixHQUFJLENBQUMsZ0JBQUQsS0FBc0IsQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsZ0JBQU4sTUFBMkIsVUFBM0IsR0FBd0MscUJBQXhDLEdBQWdFLHNCQUF0RixDQUExQjs7SUFDQSxjQUFJLGdCQUFKLEVBQXNCO0lBQ2xCLGdCQUFJLENBQUEsSUFBSSxTQUFKLElBQUEsSUFBSSxXQUFKLFlBQUEsSUFBSSxDQUFHLFFBQUgsQ0FBSixNQUFxQixLQUF6QixFQUFnQztJQUM1QixjQUFBLGNBQWM7SUFDakIsYUFGRCxNQUdLO0lBQ0QsY0FBQSxjQUFjO0lBQ2pCOztJQUNELFlBQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxZQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0g7O0lBQ0Q7SUFDSDs7SUFFRCxXQUFLLFdBQUw7SUFBa0I7SUFDZCxnQkFBTSxRQUFRLEdBQUksQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsaUJBQU4sTUFBNEIsWUFBNUIsR0FBMkMsaUJBQTNDLEdBQStELGdCQUFqRjtJQUNBLGdCQUFNLGdCQUFnQixHQUFJLENBQUMsZ0JBQUQsS0FBc0IsQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsaUJBQU4sTUFBNEIsWUFBNUIsR0FBMkMsc0JBQTNDLEdBQW9FLHFCQUExRixDQUExQjs7SUFDQSxjQUFJLGdCQUFKLEVBQXNCO0lBQ2xCLGdCQUFJLENBQUEsSUFBSSxTQUFKLElBQUEsSUFBSSxXQUFKLFlBQUEsSUFBSSxDQUFHLFFBQUgsQ0FBSixNQUFxQixLQUF6QixFQUFnQztJQUM1QixjQUFBLGNBQWM7SUFDakIsYUFGRCxNQUdLO0lBQ0QsY0FBQSxjQUFjO0lBQ2pCOztJQUNELFlBQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxZQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0g7O0lBQ0Q7SUFDSDs7SUFDRCxXQUFLLFlBQUw7SUFBbUI7SUFDZixnQkFBTSxRQUFRLEdBQUksQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsaUJBQU4sTUFBNEIsWUFBNUIsR0FBMkMsaUJBQTNDLEdBQStELGdCQUFqRjtJQUNBLGdCQUFNLGdCQUFnQixHQUFJLENBQUMsZ0JBQUQsS0FBc0IsQ0FBQSxJQUFJLFNBQUosSUFBQSxJQUFJLFdBQUosWUFBQSxJQUFJLENBQUUsaUJBQU4sTUFBNEIsWUFBNUIsR0FBMkMsc0JBQTNDLEdBQW9FLHFCQUExRixDQUExQjs7SUFDQSxjQUFJLGdCQUFKLEVBQXNCO0lBQ2xCLGdCQUFJLENBQUEsSUFBSSxTQUFKLElBQUEsSUFBSSxXQUFKLFlBQUEsSUFBSSxDQUFHLFFBQUgsQ0FBSixNQUFxQixLQUF6QixFQUFnQztJQUM1QixjQUFBLGNBQWM7SUFDakIsYUFGRCxNQUdLO0lBQ0QsY0FBQSxjQUFjO0lBQ2pCOztJQUNELFlBQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxZQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0g7O0lBQ0QsVUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLFVBQUEsQ0FBQyxDQUFDLGVBQUY7SUFDQTtJQUNIOztJQUNELFdBQUssTUFBTDtJQUNJLFlBQUksQ0FBQyxrQkFBTCxFQUF5QjtJQUNyQixVQUFBLGVBQWU7SUFDZixVQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0EsVUFBQSxDQUFDLENBQUMsZUFBRjtJQUNIOztJQUNEOztJQUVKLFdBQUssS0FBTDtJQUNJLFlBQUksQ0FBQyxrQkFBTCxFQUF5QjtJQUNyQixVQUFBLGNBQWM7SUFDZCxVQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0EsVUFBQSxDQUFDLENBQUMsZUFBRjtJQUNIOztJQUNEO0lBOUVSO0lBZ0ZILEdBMUZEOztJQTZGQSxTQUFPO0lBQ0gsSUFBQSx3QkFBd0IsRUFBRUEsR0FBVyxDQUFnRCxLQUEvQyxJQUEyRDtJQUFHLGFBQU8sd0JBQXdCLENBQUMsY0FBYyxHQUFpQjtJQUFFLFFBQUE7SUFBRixPQUFqQixFQUFnQyxLQUFoQyxDQUFmLENBQS9CO0lBQXVGLEtBQXRKLEVBQXdKLEVBQXhKO0lBRGxDLEdBQVA7SUFLSDtJQTJERDs7OztJQUlHOztJQUNHLFNBQVUsc0JBQVYsUUFBOEw7SUFBQSxNQUFwRjtJQUFFLElBQUEsUUFBRjtJQUFZLElBQUEsUUFBWjtJQUFzQixJQUFBLGdCQUF0QjtJQUF3QyxJQUFBO0lBQXhDLEdBQW9GO0lBR2hNO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBTSxDQUFDLGdCQUFELEVBQW1CLG1CQUFuQixFQUF3QyxtQkFBeEMsSUFBK0QsUUFBUSxDQUFnQixJQUFoQixDQUE3RTtJQUNBLEVBQUEsVUFBVSxDQUFDO0lBQUUsSUFBQSxPQUFPLEVBQUUsZ0JBQUYsYUFBRSxnQkFBRixjQUFFLGdCQUFGLEdBQXNCLElBQS9CO0lBQXFDLElBQUEsUUFBUSxFQUFFLE1BQUs7SUFBRyxNQUFBLG1CQUFtQixDQUFDLElBQUQsQ0FBbkI7SUFBMkIsTUFBQSxtQkFBbUIsQ0FBQyxJQUFELENBQW5CO0lBQTRCLEtBQTlHO0lBQWdILElBQUEsWUFBWSxFQUFFO0lBQTlILEdBQUQsQ0FBVjtJQUNBLFFBQU0sbUJBQW1CLEdBQUdMLENBQU0sQ0FBNEMsRUFBNUMsQ0FBbEM7SUFDQSxRQUFNLENBQUMsZ0JBQUQsRUFBbUIsbUJBQW5CLElBQTBDLFFBQVEsQ0FBaUIsS0FBakIsQ0FBeEQsQ0FWZ007SUFhaE07SUFDQTs7SUFDQSxRQUFNLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsWUFBMUIsSUFBMEMsUUFBUSxDQUFDLEtBQUQsQ0FBeEQsQ0FmZ007SUFrQmhNO0lBQ0E7O0lBQ0EsUUFBTSxDQUFDLGlCQUFELEVBQW9CLG9CQUFwQixJQUE0QyxRQUFRLENBQWdCLElBQWhCLENBQTFEO0lBQ0EsRUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixRQUFJLGlCQUFpQixLQUFLLElBQTFCLEVBQWdDO0lBQzVCLE1BQUEsbUJBQW1CLENBQUMsU0FBUyxJQUFLLENBQUMsU0FBRCxhQUFDLFNBQUQsY0FBQyxTQUFELEdBQWMsRUFBZCxJQUFvQixpQkFBbkMsQ0FBbkI7SUFDQSxNQUFBLG9CQUFvQixDQUFDLElBQUQsQ0FBcEI7SUFDSDtJQUNKLEdBTGMsRUFLWixDQUFDLGlCQUFELENBTFksQ0FBZjtJQVFBLFFBQU0sZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxPQUFELEVBQWtCLE9BQWxCLEtBQXFDO0lBQUE7O0lBQzVFLFFBQUksT0FBSixDQUQ0RTtJQUc1RTs7SUFDQSxJQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUixDQUFrQixLQUFsQixDQUFWO0lBQ0EsSUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsS0FBbEIsQ0FBVjtJQUVBLFFBQUksUUFBSixFQUNJLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBVCxDQUFpQixPQUFqQixFQUEwQixPQUExQixDQUFWLENBREosS0FHSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVIsR0FBc0IsYUFBdEIseUJBQW9DLE9BQU8sQ0FBQyxXQUFSLEVBQXBDLHVFQUE2RCxFQUE3RCxDQUFWO0lBRUosV0FBTyxPQUFQO0lBQ0gsR0FieUMsQ0FBMUM7SUFlQSxRQUFNLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBRCxFQUFpQixHQUFqQixLQUFxRTs7SUFHL0csUUFBSSxPQUFPLEdBQVAsS0FBZSxRQUFmLElBQTJCLE9BQU8sR0FBRyxDQUFDLElBQVgsS0FBb0IsUUFBbkQsRUFBNkQ7SUFDekQsYUFBTyxnQkFBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBRyxDQUFDLElBQVYsQ0FBdkI7SUFDSDs7SUFFRCxXQUFRLEdBQVcsR0FBSSxHQUF2QjtJQUNILEdBUjRDLENBQTdDO0lBVUEsUUFBTSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUQsRUFBaUIsR0FBakIsS0FBcUU7O0lBRy9HLFFBQUksT0FBTyxHQUFQLEtBQWUsUUFBZixJQUEyQixPQUFPLEdBQUcsQ0FBQyxJQUFYLEtBQW9CLFFBQW5ELEVBQTZEO0lBQ3pEO0lBQ0E7SUFDQSxhQUFPLGdCQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFHLENBQUMsSUFBSixDQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsR0FBRyxDQUFDLE1BQTFCLENBQU4sQ0FBdkI7SUFDSDs7SUFFRCxXQUFRLEdBQVcsR0FBSSxHQUF2QjtJQUNILEdBVjRDLENBQTdDO0lBYUEsUUFBTSwyQkFBMkIsR0FBOENLLEdBQVcsQ0FBQyxpQkFBdUU7SUFBQSxRQUFmLEVBQUUsR0FBRztJQUFMLEtBQWU7O0lBRTlKLFVBQU0sa0JBQWtCLEdBQUksQ0FBRCxJQUF3QjtJQUFHLE1BQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtJQUFvQixLQUExRTs7SUFDQSxVQUFNLGdCQUFnQixHQUFJLENBQUQsSUFBd0I7SUFDN0MsTUFBQSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSCxDQUFwQjtJQUNBLE1BQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtJQUNILEtBSEQ7O0lBS0EsVUFBTSxTQUFTLEdBQUksQ0FBRCxJQUFxQjtJQUVuQyxZQUFNLFNBQVMsR0FBRyxZQUFZLEVBQTlCO0lBRUEsVUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQVosQ0FKbUM7O0lBT25DLFVBQUksQ0FBQyxDQUFDLE9BQUYsSUFBYSxDQUFDLENBQUMsT0FBbkIsRUFDSTs7SUFFSixVQUFJLENBQUMsU0FBRCxJQUFjLENBQUMsQ0FBQyxHQUFGLEtBQVUsV0FBNUIsRUFBeUM7SUFDckM7SUFDQSxRQUFBLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBTixHQUFhLElBQWIsR0FBb0IsQ0FBQyxHQUFHLENBQUosRUFBTyxPQUFQLEdBQWlCLEtBQWpCLENBQXVCLENBQXZCLEVBQTBCLE9BQTFCLEdBQW9DLElBQXBDLENBQXlDLEVBQXpDLENBQTFCLENBQW5CO0lBQ0EsUUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLFFBQUEsQ0FBQyxDQUFDLGVBQUY7SUFDQTtJQUNILE9BaEJrQztJQW1CbkM7SUFDQTtJQUNBOzs7SUFDQSxZQUFNLGNBQWMsR0FBSSxHQUFHLENBQUMsTUFBSixLQUFlLENBQWYsSUFBb0IsQ0FBQyxZQUFZLElBQVosQ0FBaUIsR0FBakIsQ0FBN0M7O0lBQ0EsVUFBSSxjQUFKLEVBQW9CO0lBQUE7O0lBRWhCLFlBQUksR0FBRyxJQUFJLEdBQVAsSUFBYyx5QkFBQyxtQkFBbUIsRUFBcEIsdUVBQTBCLEVBQTFCLEVBQThCLElBQTlCLEdBQXFDLE1BQXJDLElBQStDLENBQWpFLEVBQW9FLENBQXBFLE1BTUs7SUFFRCxVQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0EsVUFBQSxDQUFDLENBQUMsZUFBRixHQUhDO0lBTUQ7SUFDQTs7SUFDQSxjQUFJLENBQUMsU0FBTCxFQUNJLG9CQUFvQixDQUFDLEdBQUQsQ0FBcEI7SUFDUDtJQUNKO0lBRUosS0E1Q0Q7O0lBOENBLFdBQU8sY0FBYyxHQUFpQjtJQUFFLE1BQUEsU0FBRjtJQUFhLE1BQUEsa0JBQWI7SUFBaUMsTUFBQTtJQUFqQyxLQUFqQixFQUF1RSxLQUF2RSxDQUFyQjtJQUNILEdBdkR5RixFQXVEdkYsRUF2RHVGLENBQTFGLENBbkVnTTs7SUE2SGhNLEVBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsUUFBSSxnQkFBZ0IsSUFBSSxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixNQUFwRCxFQUE0RDtJQUl4RCxVQUFJLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFyQixFQUE4QixnQkFBOUIsRUFBZ0QsbUJBQWhELENBQXZDOztJQUVBLFVBQUksb0JBQW9CLEdBQUcsQ0FBM0IsRUFBOEI7SUFDMUI7SUFDQTtJQUNBLFFBQUEsbUJBQW1CLENBQUMsSUFBRCxDQUFuQjtJQUNILE9BSkQsTUFLSztJQUNELFFBQUEsbUJBQW1CLENBQUMsS0FBRCxDQUFuQjtJQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEyQkE7O0lBQ0EsWUFBSSxzQkFBc0IsR0FBa0IsSUFBNUM7SUFDQSxZQUFJLG9CQUFvQixHQUFHLG9CQUEzQixDQWhDQzs7SUFtQ0QsWUFBSSx1QkFBdUIsR0FBa0IsSUFBN0M7SUFDQSxZQUFJLHFCQUFxQixHQUFHLG9CQUE1Qjs7SUFFQSxjQUFNLGFBQWEsR0FBSSxDQUFELElBQWM7SUFBQTs7SUFDaEMsY0FBSSxzQkFBc0IsSUFBSSxJQUExQixJQUFrQyxDQUFDLEdBQUcsc0JBQTFDLEVBQWtFO0lBQzlELFlBQUEsc0JBQXNCLEdBQUcsQ0FBekI7SUFDQSxZQUFBLG9CQUFvQixHQUFHLENBQXZCO0lBQ0g7O0lBQ0QsY0FBSSxDQUFDLHVCQUF1QixJQUFJLElBQTNCLElBQW1DLENBQUMsR0FBRyx1QkFBeEMsS0FBb0UsQ0FBQyxpQkFBSSxRQUFRLEVBQVosaURBQWtCLENBQUMsUUFBbkIsQ0FBekUsRUFBdUc7SUFDbkcsWUFBQSx1QkFBdUIsR0FBRyxDQUExQjtJQUNBLFlBQUEscUJBQXFCLEdBQUcsQ0FBeEI7SUFDSDtJQUNKLFNBVEQ7O0lBV0EsWUFBSSxDQUFDLEdBQUcsb0JBQVI7O0lBQ0EsZUFBTyxDQUFDLElBQUksQ0FBTCxJQUFVLG1CQUFtQixDQUFDLGdCQUFELEVBQW1CLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLENBQTVCLENBQW5CLENBQW5CLElBQXlFLENBQTFGLEVBQTZGO0lBQ3pGLFVBQUEsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLENBQTVCLEVBQStCLGFBQWhDLENBQWI7SUFDQSxZQUFFLENBQUY7SUFDSDs7SUFFRCxRQUFBLENBQUMsR0FBRyxvQkFBSjs7SUFDQSxlQUFPLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixNQUFoQyxJQUEwQyxtQkFBbUIsQ0FBQyxnQkFBRCxFQUFtQixtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixDQUE1QixDQUFuQixDQUFuQixJQUF5RSxDQUExSCxFQUE2SDtJQUN6SCxVQUFBLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixDQUE1QixFQUErQixhQUFoQyxDQUFiO0lBQ0EsWUFBRSxDQUFGO0lBQ0g7O0lBRUQsWUFBSSx1QkFBdUIsS0FBSyxJQUFoQyxFQUNJLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixxQkFBNUIsRUFBbUQsYUFBcEQsQ0FBUixDQURKLEtBRUssSUFBSSxzQkFBc0IsS0FBSyxJQUEvQixFQUNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixvQkFBNUIsRUFBa0QsYUFBbkQsQ0FBUjtJQUNQO0lBQ0o7SUFDSixHQS9FUSxFQStFTixDQUFDLGdCQUFELENBL0VNLENBQVQ7SUFpRkEsUUFBTSwyQkFBMkIsR0FBR1csR0FBVyxDQUErQyxTQUFzQjtJQUFBLFFBQXJCO0lBQUUsTUFBQSxJQUFGO0lBQVEsU0FBRztJQUFYLEtBQXFCO0lBRWhILElBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsVUFBSSxJQUFKLEVBQVU7SUFFTjtJQUNBO0lBQ0E7SUFDQSxZQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsbUJBQW1CLENBQUMsT0FBckIsRUFBOEIsSUFBOUIsRUFBb0MsbUJBQXBDLENBQTlCO0lBQ0EsUUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFdBQVcsR0FBRyxDQUFkLElBQW1CLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDLElBQXpDLElBQWlELElBQW5GOztJQUNBLFlBQUksV0FBVyxHQUFHLENBQWxCLEVBQXFCO0lBQ2pCLFVBQUEsbUJBQW1CLENBQUMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBbUMsQ0FBQyxXQUFELEdBQWUsQ0FBbEQsRUFBcUQsQ0FBckQsRUFBd0Q7SUFBRSxZQUFBLElBQUY7SUFBUSxZQUFBLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFBekIsV0FBeEQ7SUFDSCxTQUZELE1BR0s7SUFDRCxVQUFBLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLE1BQTVCLENBQW1DLFdBQW5DLEVBQWdELENBQWhELEVBQW1EO0lBQUUsWUFBQSxJQUFGO0lBQVEsWUFBQSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQXpCLFdBQW5EO0lBQ0g7O0lBRUQsZUFBTyxNQUFLO0lBQ1I7SUFDQTtJQUNBLGNBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFyQixFQUE4QixJQUE5QixFQUFvQyxtQkFBcEMsQ0FBOUI7SUFDQSxVQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsV0FBVyxJQUFJLENBQTlCOztJQUVBLGNBQUksV0FBVyxJQUFJLENBQW5CLEVBQXNCO0lBQ2xCLFlBQUEsbUJBQW1CLENBQUMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBbUMsV0FBbkMsRUFBZ0QsQ0FBaEQ7SUFDSDtJQUNKLFNBVEQ7SUFVSDtJQUNKLEtBMUJRLEVBMEJOLENBQUMsSUFBRCxDQTFCTSxDQUFUO0lBNEJBLFdBQU8sRUFBUDtJQUVILEdBaEM4QyxFQWdDNUMsRUFoQzRDLENBQS9DO0lBa0NBLFNBQU87SUFDSCxJQUFBLDJCQURHO0lBRUgsSUFBQSwyQkFGRztJQUlILElBQUEsZ0JBSkc7SUFLSCxJQUFBO0lBTEcsR0FBUDtJQU9IO0lBR0Q7Ozs7Ozs7OztJQVNHOztJQUNHLFNBQVUsWUFBVixDQUFtRSxLQUFuRSxFQUErRSxNQUEvRSxFQUEwRixVQUExRixFQUF1RztJQUN6RyxNQUFJLFVBQVUsR0FBRyxDQUFqQjtJQUNBLE1BQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBL0I7O0lBQ0EsU0FBTyxVQUFVLElBQUksU0FBckIsRUFBZ0M7SUFDNUIsUUFBSSxTQUFTLEdBQUksU0FBUyxHQUFHLFVBQWIsSUFBNEIsQ0FBNUM7SUFDQSxRQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxNQUFELEVBQVMsS0FBSyxDQUFDLFNBQUQsQ0FBZCxDQUFqQzs7SUFFQSxRQUFJLGdCQUFnQixHQUFHLENBQXZCLEVBQTBCO0lBQ3RCLE1BQUEsVUFBVSxHQUFHLFNBQVMsR0FBRyxDQUF6QjtJQUNILEtBRkQsTUFHSyxJQUFJLGdCQUFnQixHQUFHLENBQXZCLEVBQTBCO0lBQzNCLE1BQUEsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUF4QjtJQUNILEtBRkksTUFHQTtJQUNELGFBQU8sU0FBUDtJQUNIO0lBQ0o7O0lBRUQsU0FBTyxDQUFDLFVBQUQsR0FBYyxDQUFyQjtJQUNIOztJQ3RjRDs7Ozs7Ozs7Ozs7SUFXRzs7SUFDRyxTQUFVLGVBQVYsR0FBeUI7SUFHM0I7SUFDQTtJQUNBO0lBQ0EsUUFBTSxDQUFDLGdCQUFELEVBQW1CLG1CQUFuQixJQUEwQyxRQUFRLENBQUMsQ0FBRCxDQUF4RDtJQUNBLFFBQU0sQ0FBQyxvQkFBRCxFQUF1Qix1QkFBdkIsRUFBZ0QsdUJBQWhELElBQTJFLFFBQVEsQ0FBQyxDQUFELENBQXpGO0lBQ0EsUUFBTSxDQUFDLHFCQUFELEVBQXdCLHdCQUF4QixFQUFrRCx3QkFBbEQsSUFBOEUsUUFBUSxDQUFDLENBQUQsQ0FBNUY7SUFDQSxRQUFNLHdCQUF3QixHQUFHLG9CQUFvQixHQUFHLHFCQUF4RDtJQUNBLFFBQU0sZUFBZSxHQUFHTSxDQUFNLENBQW1DO0lBQThDO0lBQWpGLEdBQTlCO0lBQ0EsUUFBTSxlQUFlLEdBQUdBLENBQU0sQ0FBZSxFQUFmLENBQTlCO0lBQ0EsUUFBTSxVQUFVLEdBQUdBLENBQU0sQ0FBaUIsSUFBSSxHQUFKLEVBQWpCLENBQXpCO0lBQ0EsUUFBTSxnQkFBZ0IsR0FBR0EsQ0FBTSxDQUFzQixJQUFJLEdBQUosRUFBdEIsQ0FBL0I7SUFDQSxRQUFNLGNBQWMsR0FBR0EsQ0FBTSxDQUFTLElBQUksR0FBSixFQUFULENBQTdCLENBZDJCO0lBaUIzQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFDQSxRQUFNLGNBQWMsR0FBR0EsQ0FBTSxDQUFDLElBQUksR0FBSixFQUFELENBQTdCO0lBRUEsUUFBTSxhQUFhLEdBQUdLLEdBQVcsQ0FBRSxLQUFELElBQWE7SUFBRyxXQUFPLFVBQVUsQ0FBQyxPQUFYLENBQW1CLEdBQW5CLENBQXVCLEtBQXZCLENBQVA7SUFBd0MsR0FBekQsRUFBMkQsRUFBM0QsQ0FBakM7SUFFQSxRQUFNLGVBQWUsR0FBd0JBLEdBQVcsQ0FBaUMsSUFBaEMsSUFBMkM7SUFDaEcsVUFBTTtJQUFFLE1BQUEsVUFBRjtJQUFjLE1BQUE7SUFBZCxRQUFxQyxhQUFhLENBQVk7SUFBRSxNQUFBLGVBQWUsRUFBRUEsR0FBVyxDQUFFLE9BQUQsSUFBOEI7SUFDN0gsWUFBSSxPQUFKLEVBQWE7SUFDVCxVQUFBLGdCQUFnQixDQUFDLE9BQWpCLENBQXlCLEdBQXpCLENBQTZCLE9BQTdCLEVBQXNDLElBQUksQ0FBQyxLQUEzQztJQUNBLFVBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBOEIsSUFBSSxDQUFDLEtBQW5DOztJQUNBLGNBQUksZUFBZSxDQUFDLE9BQWhCLENBQXdCLElBQUksQ0FBQyxLQUE3QixLQUFpRixTQUFyRixFQUFnRztJQUFBOztJQUM1RixZQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxLQUFoQyxFQUF1QywwQkFBQyxjQUFjLENBQUMsT0FBZixDQUF1QixHQUF2QixDQUEyQixJQUFJLENBQUMsS0FBaEMsQ0FBRCx5RUFBMkMsQ0FBM0MsSUFBZ0QsQ0FBdkY7SUFDSDs7SUFFRCxVQUFBLG1CQUFtQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQVIsQ0FBbkI7SUFDQSxVQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixJQUFJLENBQUMsS0FBN0IsSUFBZ0YsRUFBRSxHQUFHO0lBQUwsV0FBaEY7SUFFQSxpQkFBTyxNQUFLO0lBQUE7O0lBQ1IsWUFBQSxtQkFBbUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQW5COztJQUNBLGdCQUFJLDJCQUFDLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxLQUFoQyxDQUFELDJFQUEyQyxDQUEzQyxJQUFnRCxDQUFwRCxFQUF1RDtJQUFBOztJQUNuRCxjQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxLQUFoQyxFQUF1QywyQkFBQyxjQUFjLENBQUMsT0FBZixDQUF1QixHQUF2QixDQUEyQixJQUFJLENBQUMsS0FBaEMsQ0FBRCwyRUFBMkMsQ0FBM0MsSUFBZ0QsQ0FBdkY7SUFDSCxhQUZELE1BR0s7SUFDRCxxQkFBTyxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsSUFBSSxDQUFDLEtBQTdCLENBQVA7SUFDQSxjQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLElBQUksQ0FBQyxLQUFoQzs7SUFFQSxrQkFBSSxPQUFPLElBQUksQ0FBQyxLQUFaLEtBQXNCLFFBQTFCLEVBQW9DO0lBQ2hDLHVCQUFPLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixNQUF4QixJQUFtQyxlQUFlLENBQUMsT0FBaEIsQ0FBaUMsZUFBZSxDQUFDLE9BQWhCLENBQWdDLE1BQWhDLEdBQXlDLENBQTFFLE1BQWlGLFNBQTNILEVBQ0ssZUFBZSxDQUFDLE9BQWhCLENBQWdDLE1BQWhDLElBQTBDLENBQTFDO0lBQ1I7O0lBQ0QsY0FBQSxnQkFBZ0IsQ0FBQyxPQUFqQixDQUF5QixNQUF6QixDQUFnQyxPQUFoQztJQUNIO0lBQ0osV0FmRDtJQWdCSDtJQUNKLE9BNUJpRyxFQTRCL0YsRUE1QitGO0lBQTlCLEtBQVosQ0FBeEQ7SUE4QkEsSUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixVQUFJLEtBQUssR0FBRyx1QkFBdUIsRUFBbkM7SUFDQSxNQUFBLFVBQVUsQ0FBQyxPQUFYLENBQW1CLEdBQW5CLENBQXVCLElBQUksQ0FBQyxLQUE1QixFQUFtQyxLQUFuQztJQUNBLE1BQUEsZUFBZSxDQUFDLE9BQWhCLENBQXdCLEtBQXhCLElBQWlDLElBQWpDO0lBQ0EsTUFBQSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQXZCO0lBQ0EsYUFBTyxNQUFLO0lBQ1IsUUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixNQUFuQixDQUEwQixJQUFJLENBQUMsS0FBL0I7SUFDQSxRQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixLQUF4QixJQUFpQyxJQUFqQztJQUNBLFFBQUEsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBUixDQUF4QjtJQUVILE9BTEQ7SUFNSCxLQVhjLEVBV1osQ0FBQyxJQUFJLENBQUMsS0FBTixDQVhZLENBQWYsQ0EvQmdHO0lBNkNoRztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsSUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixVQUFJLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixJQUFJLENBQUMsS0FBN0IsS0FBaUYsU0FBckYsRUFDSSxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsSUFBSSxDQUFDLEtBQTdCLElBQWdGLEVBQUUsR0FBRztJQUFMLE9BQWhGO0lBQ1AsS0FIYyxFQUdaLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBUCxDQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBSixDQUhZLENBQWY7SUFLQSxXQUFPO0lBQUUsTUFBQSxVQUFGO0lBQWMsTUFBQSxvQkFBb0IsRUFBRTtJQUFwQyxLQUFQO0lBQ0gsR0F6RHVELEVBeURyRCxFQXpEcUQsQ0FBeEQ7SUE0REEsU0FBTztJQUNILElBQUEsZUFERztJQUVILElBQUEsVUFBVSxFQUFFLHdCQUZUO0lBR0gsSUFBQSxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BSDlCO0lBSUgsSUFBQSxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BSjlCO0lBS0gsSUFBQSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxPQUxoQztJQU1ILElBQUEsb0JBTkc7SUFPSCxJQUFBLHFCQVBHO0lBUUgsSUFBQSxhQVJHO0lBU0gsSUFBQSxjQUFjLEVBQUUsY0FBYyxDQUFDO0lBVDVCLEdBQVA7SUFXSDtJQStDRDs7Ozs7Ozs7Ozs7Ozs7O0lBZUc7O0lBQ0csU0FBVSxZQUFWLE9BQXFNO0lBQUE7O0lBQUEsTUFBcEg7SUFBRSxJQUFBLGNBQUY7SUFBa0IsSUFBQSxVQUFsQjtJQUE4QixJQUFBLGVBQTlCO0lBQStDLElBQUEsWUFBL0M7SUFBNkQsSUFBQSxZQUE3RDtJQUEyRSxJQUFBO0lBQTNFLEdBQW9IO0lBRXZNLGdCQUFBLFNBQVMsVUFBVCx5Q0FBQSxTQUFTLEdBQUssZUFBZDtJQUVBLE1BQUksVUFBSixFQUNJLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBTyxjQUFQLElBQXlCLFFBQXpCLElBQXFDLGNBQWMsSUFBSSxJQUF0RSxFQUxtTTtJQVF2TTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsRUFBQSxTQUFTLENBQUMsTUFBSztJQUdYO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFHQTtJQUNBO0lBQ0E7SUFDQSxRQUFJLE9BQU8sY0FBUCxJQUF5QixRQUF6QixJQUFxQyxLQUFLLENBQUMsT0FBTixDQUFjLGVBQWQsQ0FBckMsSUFBdUUsZUFBZSxDQUFDLGNBQUQsQ0FBZixJQUFtQyxJQUE5RyxFQUFvSDtJQUNoSDtJQUNBLFVBQUksVUFBSixFQUFnQjtJQUNaO0lBQ0E7SUFFQSxZQUFJLFVBQVUsR0FBRyxjQUFjLEdBQUcsQ0FBbEM7SUFDQSxZQUFJLFNBQVMsR0FBRyxjQUFjLEdBQUcsQ0FBakM7O0lBRUEsZUFBUSxTQUFTLElBQUksQ0FBYixJQUFrQixlQUFlLENBQUMsU0FBRCxDQUFmLElBQThCLElBQWpELElBQTJELFVBQVUsR0FBRyxlQUFlLENBQUMsTUFBN0IsSUFBdUMsZUFBZSxDQUFDLFVBQUQsQ0FBZixJQUErQixJQUF4SSxFQUErSTtJQUMzSSxZQUFFLFVBQUY7SUFDQSxZQUFFLFNBQUY7SUFDSDs7SUFFRCxZQUFJLFNBQVMsSUFBSSxDQUFiLElBQWtCLGVBQWUsQ0FBQyxTQUFELENBQWYsSUFBOEIsSUFBcEQsRUFBMEQ7SUFDckQsVUFBQSxjQUF5QixHQUFHLFNBQTVCO0lBQ0osU0FGRCxNQUdLLElBQUksVUFBVSxHQUFHLGVBQWUsQ0FBQyxNQUE3QixJQUF1QyxlQUFlLENBQUMsVUFBRCxDQUFmLElBQStCLElBQTFFLEVBQWdGO0lBQ2hGLFVBQUEsY0FBeUIsR0FBRyxVQUE1QjtJQUNKLFNBakJXO0lBb0JaO0lBQ0E7SUFDQTtJQUNBOztJQUNIO0lBQ0o7O0lBRUQsUUFBSSxLQUFLLENBQUMsT0FBTixDQUFjLGVBQWQsQ0FBSixFQUFtQztJQUNuQyxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFwQyxFQUE0QyxFQUFFLENBQTlDLEVBQWlEO0lBQzdDLFlBQUksV0FBVyxHQUFJLENBQUMsSUFBSSxjQUF4Qjs7SUFDQSxZQUFJLFlBQVksQ0FBQyxDQUFELENBQVosSUFBd0IsV0FBNUIsRUFBeUM7SUFDckMsVUFBQSxZQUFZLENBQUMsQ0FBRCxFQUFTLFdBQVQsQ0FBWjtJQUNIO0lBQ0o7SUFBQyxLQU5GLE1BT0s7SUFDRCxNQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsZUFBZixFQUFnQyxPQUFoQyxDQUF3QyxTQUFjO0lBQUEsWUFBYixDQUFDLENBQUQsRUFBSSxJQUFKLENBQWE7SUFDbEQsWUFBSSxXQUFXLEdBQUksQ0FBQyxJQUFJLGNBQXhCOztJQUNBLFlBQUksWUFBWSxDQUFDLENBQUQsQ0FBWixJQUF3QixXQUE1QixFQUF5QztJQUNyQyxVQUFBLFlBQVksQ0FBQyxDQUFELEVBQVMsV0FBVCxDQUFaO0lBQ0g7SUFDSixPQUxEO0lBTUg7SUFDSixHQXpEUSxDQUFUO0lBMkRIOztJQ2xSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCRzs7SUFDRyxTQUFVLGlCQUFWLE9BQTBJO0lBQUEsTUFBeEU7SUFBRSxJQUFBLG1CQUFtQixFQUFFLEdBQXZCO0lBQTRCLElBQUE7SUFBNUIsR0FBd0U7SUFFNUksUUFBTSxzQkFBc0IsR0FBRyxlQUFlLENBQUMsR0FBRCxDQUE5QztJQUVBLFFBQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLGFBQUQsQ0FBeEM7SUFDQSxFQUFxQkwsQ0FBTSxDQUFDLENBQUMsUUFBRixFQUxpSDs7SUFRNUksUUFBTTtJQUFFLElBQUEsZUFBRjtJQUFtQixJQUFBLFVBQW5CO0lBQStCLElBQUEsZUFBL0I7SUFBZ0QsSUFBQSxnQkFBaEQ7SUFBa0UsT0FBRztJQUFyRSxNQUE4RSxlQUFlLEVBQW5HLENBUjRJO0lBVzVJO0lBQ0E7O0lBQ0EsRUFBQSxZQUFZLENBQUM7SUFDVCxJQUFBLGNBQWMsRUFBRSxhQURQO0lBRVQsSUFBQSxlQUZTO0lBR1QsSUFBQSxVQUFVLEVBQUUsSUFISDtJQUlULElBQUEsWUFBWSxFQUFFLENBQUMsS0FBRCxFQUFRLFFBQVIsS0FBb0I7SUFBQTs7SUFDOUIsVUFBSSxLQUFLLElBQUksSUFBYixFQUNLLHlCQUFBLGVBQWUsQ0FBQyxLQUFELENBQWYsZ0ZBQThELFdBQTlELENBQTBFLFFBQTFFO0lBQ1IsS0FQUTtJQVFULElBQUEsWUFBWSxFQUFHLEtBQUQ7SUFBQTs7SUFBQSxpRUFBWSxlQUFlLENBQUMsS0FBRCxDQUEzQiwyREFBWSx1QkFBd0IsV0FBeEIsRUFBWiwyRUFBcUQsSUFBckQ7SUFBQTtJQVJMLEdBQUQsQ0FBWjtJQVdBLEVBQWtCSyxHQUFXLENBQUMsTUFBSztJQUMvQixRQUFJLGFBQWEsSUFBSSxJQUFyQixFQUNJLGVBQWUsQ0FBQyxhQUFELENBQWYsQ0FBK0IsV0FBL0IsQ0FBMkMsSUFBM0M7SUFDUCxHQUg0QixFQUcxQixDQUFDLGFBQUQsQ0FIMEI7SUFLN0IsUUFBTSxzQkFBc0IsR0FBR0EsR0FBVyxDQUEyRCxJQUEvQixJQUE0SDtJQUU5TCxVQUFNLENBQUMsU0FBRCxFQUFZLFlBQVosSUFBNEIsUUFBUSxDQUFDLENBQUQsQ0FBMUM7SUFDQSxVQUFNLGdCQUFnQixHQUFHQSxHQUFXLENBQUMsTUFBSztJQUFHLE1BQUEsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQVIsQ0FBWjtJQUF3QixLQUFqQyxFQUFtQyxFQUFuQyxDQUFwQztJQUNBLFVBQU0sQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixXQUF4QixJQUF1QyxRQUFRLENBQWlCLElBQWpCLENBQXJEO0lBR0EsUUFBSSxPQUFPLEdBQUcsRUFDVixHQUFHLElBRE87SUFFVixNQUFBLGdCQUZVO0lBR1YsTUFBQSxXQUFXLEVBQUVBLEdBQVcsQ0FBRSxRQUFELElBQXNCO0lBQUcsUUFBQSxXQUFXLENBQUMsUUFBRCxDQUFYO0lBQXdCLE9BQWxELEVBQW9ELEVBQXBELENBSGQ7SUFJVixNQUFBO0lBSlUsS0FBZDtJQU9BLFVBQU07SUFBRSxNQUFBLFVBQUY7SUFBYyxNQUFBO0lBQWQsUUFBdUMsZUFBZSxDQUFlLE9BQWYsQ0FBNUQ7SUFFQSxJQUFBWCxDQUFTLENBQUMsTUFBSztJQUNYLFlBQU0sT0FBTyxHQUFHLFVBQVUsRUFBMUI7O0lBQ0EsVUFBSSxRQUFKLEVBQWM7SUFDVixjQUFNLG1CQUFtQixHQUFHLHNCQUFzQixJQUFsRDs7SUFDQSxZQUFJLG1CQUFtQixJQUFJLFdBQVksT0FBdkMsRUFBNEY7SUFDeEYsVUFBQSxxQkFBcUIsQ0FBQyxNQUFLO0lBQ3ZCLFlBQUEsY0FBYyxDQUFDLE1BQUs7SUFDZixjQUFBLE9BQW1ELENBQUMsS0FBcEQ7SUFDSixhQUZhLENBQWQ7SUFHSCxXQUpvQixDQUFyQjtJQUtIO0lBQ0o7SUFDSixLQVpRLEVBWU4sQ0FBQyxRQUFELEVBQVcsU0FBWCxDQVpNLENBQVQ7O0lBY0EsYUFBUyw2QkFBVCxRQUF3SDtJQUFBLFVBQXpCO0lBQUUsUUFBQSxRQUFGO0lBQVksV0FBRztJQUFmLE9BQXlCOztJQUVwSCxVQUFJLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtJQUNsQixZQUFJLFFBQUosRUFDSSxRQUFRLEdBQUcsQ0FBWCxDQURKLEtBR0ksUUFBUSxHQUFHLENBQUMsQ0FBWjtJQUNQOztJQUVELGFBQU8sY0FBYyxHQUFZO0lBQUUsUUFBQTtJQUFGLE9BQVosRUFBMEIsS0FBMUIsQ0FBckI7SUFDSDs7SUFHRCxhQUFTLDJCQUFULFFBQTZIO0lBQUEsVUFBekI7SUFBRSxRQUFBLFFBQUY7SUFBWSxXQUFHO0lBQWYsT0FBeUI7O0lBR3pILFVBQUksUUFBUSxJQUFJLElBQWhCLEVBQXNCO0lBQ2xCLFlBQUksUUFBSixFQUNJLFFBQVEsR0FBRyxDQUFYLENBREosS0FHSSxRQUFRLEdBQUcsQ0FBQyxDQUFaO0lBQ1A7O0lBRUQsYUFBTyxjQUFjLEdBQWlCLG9CQUFvQixDQUFDO0lBQUUsUUFBQTtJQUFGLE9BQUQsQ0FBckMsRUFBcUQsS0FBckQsQ0FBckI7SUFDSDtJQUVELFdBQU87SUFDSCxNQUFBLDJCQURHO0lBRUgsTUFBQSw2QkFGRztJQUdILE1BQUE7SUFIRyxLQUFQO0lBS0gsR0E3RHlDLEVBNkR2QyxDQUFDLGVBQUQsQ0E3RHVDLENBQTFDO0lBK0RBLFNBQU87SUFDSCxJQUFBLHNCQURHO0lBRUgsSUFBQSxVQUZHO0lBR0gsSUFBQSxlQUhHO0lBSUgsSUFBQSxnQkFKRztJQUtILElBQUEsWUFBWSxFQUFFVyxHQUFXLENBQUMsTUFBSztJQUFBOztJQUMzQixVQUFJLGVBQWUsc0JBQUMsZ0JBQWdCLEVBQWpCLGlFQUF1QixDQUF2QixDQUFmLENBQXlDLFdBQXpDLEVBQUosRUFBNEQ7SUFBQTs7SUFDeEQsNEJBQUEsZUFBZSx1QkFBQyxnQkFBZ0IsRUFBakIsbUVBQXVCLENBQXZCLENBQWYsc0VBQTBDLGdCQUExQztJQUNILE9BRkQsTUFHSztJQUFBOztJQUNEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxZQUFJLENBQUMseUJBQUcsZ0JBQWdCLEVBQW5CLG1FQUF5QixDQUE5QjtJQUNBLFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFaOztJQUNBLGVBQU8sQ0FBQyxJQUFJLENBQVosRUFBZTtJQUFBOztJQUNYLFlBQUUsQ0FBRjs7SUFDQSxjQUFJLGVBQWUsdUJBQUMsZ0JBQWdCLEVBQWpCLG1FQUF1QixDQUF2QixDQUFmLENBQXlDLFdBQXpDLEVBQUosRUFBNEQ7SUFBQTs7SUFDeEQsaUNBQUEsZUFBZSx1QkFBQyxnQkFBZ0IsRUFBakIsbUVBQXVCLENBQXZCLENBQWYsd0VBQTBDLGdCQUExQztJQUNBO0lBQ0g7SUFDSjs7SUFDRCxlQUFPLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBM0IsRUFBbUM7SUFBQTs7SUFDL0IsWUFBRSxDQUFGOztJQUNBLGNBQUksZUFBZSx1QkFBQyxnQkFBZ0IsRUFBakIsbUVBQXVCLENBQXZCLENBQWYsQ0FBeUMsV0FBekMsRUFBSixFQUE0RDtJQUFBOztJQUN4RCxpQ0FBQSxlQUFlLHVCQUFDLGdCQUFnQixFQUFqQixtRUFBdUIsQ0FBdkIsQ0FBZix3RUFBMEMsZ0JBQTFDO0lBQ0E7SUFDSDtJQUNKO0lBQ0o7SUFDSixLQTNCd0IsRUEyQnRCLEVBM0JzQixDQUx0QjtJQWtDSCxPQUFHO0lBbENBLEdBQVA7SUFvQ0g7O0lDN0RELFNBQVMsUUFBVCxDQUFxQixDQUFyQixFQUF5QjtJQUFJLFNBQU8sQ0FBUDtJQUFXO0lBRXhDOzs7OztJQUtHOzs7SUFDRyxTQUFVLGlCQUFWLE9BQXlOO0lBQUE7O0lBQUEsTUFBekg7SUFBRSxJQUFBLFlBQUY7SUFBZ0IsSUFBQSxtQkFBaEI7SUFBcUMsSUFBQSxRQUFyQztJQUErQyxJQUFBLGFBQS9DO0lBQThELElBQUEsWUFBOUQ7SUFBNEUsSUFBQTtJQUE1RSxHQUF5SDtJQUUzTixtQkFBQSxZQUFZLFVBQVosK0NBQUEsWUFBWSxHQUFLLFFBQWpCO0lBQ0EscUJBQUEsY0FBYyxVQUFkLG1EQUFBLGNBQWMsR0FBSyxRQUFuQjtJQUNBLG9CQUFBLGFBQWEsVUFBYixpREFBQSxhQUFhLEdBQUssUUFBbEI7SUFFQSxFQUFBLGtCQUFrQixDQUFDLFlBQUQsRUFBZSxjQUFmLENBQWxCLENBTjJOO0lBUzNOOztJQUNBLFFBQU0sQ0FBQyxhQUFELEVBQWdCLGdCQUFoQixFQUFrQyxnQkFBbEMsSUFBc0QsUUFBUSxDQUFnQixZQUFZLEtBQUssU0FBakIsR0FBNkIsQ0FBN0IsR0FBaUMsWUFBakQsQ0FBcEU7SUFDQSxRQUFNO0lBQUUsSUFBQSxlQUFGO0lBQW1CLElBQUEsZ0JBQW5CO0lBQXFDLElBQUEsc0JBQXJDO0lBQTZELElBQUEsWUFBN0Q7SUFBMkUsT0FBRztJQUE5RSxNQUF1RixpQkFBaUIsQ0FBSTtJQUFFLElBQUEsbUJBQUY7SUFBdUIsSUFBQTtJQUF2QixHQUFKLENBQTlHO0lBRUE7Ozs7O0lBS0Y7O0lBQ0UsUUFBTSxlQUFlLEdBQUdBLEdBQVcsQ0FBRSxDQUFELElBQXFCO0lBQUE7O0lBQ3JELElBQUEsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLElBQUwsR0FBWSxJQUFaLEdBQW1CLGtCQUFrQixDQUFDLGVBQUQsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsb0JBQTJCLFlBQTNCLDJEQUEyQyxRQUEzQyxzQkFBcUQsY0FBckQsK0RBQXVFLFFBQXZFLENBQXRDLENBQWhCO0lBQ0gsR0FGa0MsRUFFaEMsRUFGZ0MsQ0FBbkM7SUFHQSxRQUFNLGVBQWUsR0FBR0EsR0FBVyxDQUFDLE1BQUs7SUFBQTs7SUFDckMsSUFBQSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFELEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLG9CQUEyQixZQUEzQiwyREFBMkMsUUFBM0Msc0JBQXFELGNBQXJELCtEQUF1RSxRQUF2RSxDQUFuQixDQUFoQjtJQUNILEdBRmtDLEVBRWhDLEVBRmdDLENBQW5DO0lBR0EsUUFBTSxjQUFjLEdBQUdBLEdBQVcsQ0FBQyxNQUFLO0lBQUE7O0lBQUcsSUFBQSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFELEVBQWtCLGVBQWUsQ0FBQyxNQUFsQyxFQUEwQyxlQUFlLENBQUMsTUFBMUQsRUFBa0UsQ0FBQyxDQUFuRSxvQkFBc0UsWUFBdEUsMkRBQXNGLFFBQXRGLHNCQUFnRyxjQUFoRywrREFBa0gsUUFBbEgsQ0FBbkIsQ0FBaEI7SUFBa0ssR0FBM0ssRUFBNkssRUFBN0ssQ0FBbEM7SUFDQSxRQUFNLGNBQWMsR0FBR0EsR0FBVyxDQUFDLE1BQUs7SUFDcEMsSUFBQSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUc7SUFBQTs7SUFDakIsYUFBTyxrQkFBa0IsQ0FBQyxlQUFELEVBQWtCLENBQWxCLGFBQWtCLENBQWxCLGNBQWtCLENBQWxCLEdBQXVCLENBQXZCLEVBQTBCLENBQUMsQ0FBRCxhQUFDLENBQUQsY0FBQyxDQUFELEdBQU0sQ0FBTixJQUFXLENBQXJDLEVBQXdDLENBQUMsQ0FBekMsb0JBQTRDLFlBQTVDLDJEQUE0RCxRQUE1RCxzQkFBc0UsY0FBdEUsK0RBQXdGLFFBQXhGLENBQXpCO0lBQ0gsS0FGZSxDQUFoQjtJQUdILEdBSmlDLEVBSS9CLEVBSitCLENBQWxDO0lBS0EsUUFBTSxjQUFjLEdBQUdBLEdBQVcsQ0FBQyxNQUFLO0lBQ3BDLElBQUEsZ0JBQWdCLENBQUMsQ0FBQyxJQUFHO0lBQUE7O0lBQ2pCLGFBQU8sa0JBQWtCLENBQUMsZUFBRCxFQUFrQixDQUFsQixhQUFrQixDQUFsQixjQUFrQixDQUFsQixHQUF1QixDQUF2QixFQUEwQixDQUFDLENBQUQsYUFBQyxDQUFELGNBQUMsQ0FBRCxHQUFNLENBQU4sSUFBVyxDQUFyQyxFQUF3QyxDQUF4QyxvQkFBMkMsWUFBM0MsMkRBQTJELFFBQTNELHNCQUFxRSxjQUFyRSwrREFBdUYsUUFBdkYsQ0FBekI7SUFDSCxLQUZlLENBQWhCO0lBR0gsR0FKaUMsRUFJL0IsRUFKK0IsQ0FBbEM7SUFNQSxRQUFNLFFBQVEsR0FBR0EsR0FBVyxDQUFFLEtBQUQsSUFBd0U7SUFDakcsSUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0lBQ0gsR0FGMkIsRUFFekIsRUFGeUIsQ0FBNUI7SUFHQSxRQUFNO0lBQUUsSUFBQSxnQkFBRjtJQUFvQixJQUFBLGdCQUFwQjtJQUFzQyxJQUFBLDJCQUF0QztJQUFtRSxJQUFBO0lBQW5FLE1BQW1HLHNCQUFzQixDQUFTO0lBQUUsSUFBQSxRQUFGO0lBQVksSUFBQSxRQUFRLEVBQUUsZ0JBQXRCO0lBQXdDLElBQUEsUUFBeEM7SUFBa0QsSUFBQSxnQkFBZ0IsRUFBRTtJQUFwRSxHQUFULENBQS9IO0lBQ0EsUUFBTTtJQUFFLElBQUE7SUFBRixNQUErQixtQkFBbUIsQ0FBTTtJQUFFLElBQUEsbUJBQW1CLEVBQUUsYUFBdkI7SUFBc0MsSUFBQSxLQUFLLHVCQUFFLGdCQUFnQixFQUFsQixpRUFBd0IsQ0FBbkU7SUFBc0UsSUFBQSxlQUF0RTtJQUF1RixJQUFBLGNBQXZGO0lBQXVHLElBQUEsY0FBdkc7SUFBdUgsSUFBQSxlQUF2SDtJQUF3SSxJQUFBO0lBQXhJLEdBQU4sQ0FBeEQ7SUFFQSxRQUFNLHNCQUFzQixHQUFHQSxHQUFXLENBQWdELEtBQS9DLElBQTJEO0lBQ2xHLFdBQU8sd0JBQXdCLENBQUMsMkJBQTJCLENBQUMsS0FBRCxDQUE1QixDQUEvQjtJQUNILEdBRnlDLEVBRXZDLENBQUMsd0JBQUQsRUFBMkIsMkJBQTNCLENBRnVDLENBQTFDO0lBSUEsUUFBTSxzQkFBc0IsR0FBNENBLEdBQVcsQ0FBRSxJQUFELElBQThGO0lBRTlLLElBQW9CLDJCQUEyQixDQUFDLElBQUQsRUFGK0g7O0lBSzlLLFVBQU07SUFBRSxNQUFBLDJCQUFGO0lBQStCLE1BQUEsNkJBQS9CO0lBQThELE1BQUE7SUFBOUQsUUFBMkUsc0JBQXNCLENBQWUsSUFBZixDQUF2Rzs7SUFFQSxVQUFNLDJCQUEyQixHQUE4QyxpQkFBdUU7SUFBQSxVQUFmLEVBQUUsR0FBRztJQUFMLE9BQWU7SUFFbEosYUFBTyxjQUFjLEdBQWlCLDJCQUEyQixDQUFHO0lBQUUsUUFBQSxPQUFPLEVBQUUsVUFBWDtJQUF1QixRQUFBLE1BQU0sRUFBRSxJQUFJLENBQUM7SUFBcEMsT0FBSCxDQUE1QyxFQUFnRyxLQUFoRyxDQUFyQjtJQUNILEtBSEQ7O0lBS0EsVUFBTSxVQUFVLEdBQUdBLEdBQVcsQ0FBQyxNQUFLO0lBQUcsTUFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBZjtJQUE4QixLQUF2QyxFQUF5QyxFQUF6QyxDQUE5QjtJQUVBLFdBQU87SUFDSCxNQUFBLDJCQURHO0lBRUgsTUFBQSw2QkFBNkIsRUFBRSw2QkFGNUI7SUFHSCxNQUFBO0lBSEcsS0FBUDtJQUtILEdBbkJrRixFQW1CaEYsQ0FBQywyQkFBRCxFQUE4QixzQkFBOUIsRUFBc0QsZUFBdEQsQ0FuQmdGLENBQW5GO0lBcUJBLFNBQU87SUFDSCxJQUFBLHNCQURHO0lBRUgsSUFBQSxzQkFGRztJQUlILElBQUEsZ0JBSkc7SUFLSCxJQUFBLGdCQUxHO0lBT0gsSUFBQSxhQVBHO0lBU0gsSUFBQSxlQVRHO0lBVUgsSUFBQSxnQkFWRztJQVlILElBQUEsZUFaRztJQWFILElBQUEsY0FiRztJQWNILElBQUEsY0FkRztJQWVILElBQUEsZUFmRztJQWdCSCxJQUFBLGNBaEJHO0lBa0JILElBQUEsWUFsQkc7SUFvQkgsT0FBRztJQXBCQSxHQUFQO0lBc0JIO0lBUUssU0FBVSxrQkFBVixDQUE2RCxZQUE3RCxFQUFxRyxPQUFyRyxFQUFzSCxNQUF0SCxFQUFzSSxlQUF0SSxFQUErSixZQUEvSixFQUFvTSxjQUFwTSxFQUF5TztJQUMzTyxXQUFTLE1BQVQsR0FBZTtJQUNYLFFBQUksZUFBZSxLQUFLLENBQUMsQ0FBekIsRUFBNEI7SUFDeEIsYUFBTyxNQUFNLElBQUksQ0FBVixLQUFnQixZQUFZLENBQUMsTUFBRCxDQUFaLElBQXdCLElBQXhCLElBQWdDLENBQUMsMEJBQUMsWUFBWSxDQUFDLE1BQUQsQ0FBYixpREFBQyxxQkFBc0IsTUFBdkIsQ0FBakQsQ0FBUDtJQUFBOztJQUNJLFFBQUEsTUFBTSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBRCxDQUFkLEdBQXlCLENBQTFCLENBQXJCO0lBREo7O0lBR0EsYUFBTyxNQUFNLEdBQUcsQ0FBVCxHQUFhLE9BQWIsR0FBdUIsTUFBOUI7SUFDSCxLQUxELE1BTUssSUFBSSxlQUFlLEtBQUssQ0FBeEIsRUFBMkI7SUFDNUIsYUFBTyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQXRCLElBQWdDLFlBQVksQ0FBQyxNQUFELENBQVosSUFBd0IsSUFBeEQsSUFBZ0UsQ0FBQywyQkFBQyxZQUFZLENBQUMsTUFBRCxDQUFiLGtEQUFDLHNCQUFzQixNQUF2QixDQUF4RTtJQUFBOztJQUNJLFFBQUEsTUFBTSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBRCxDQUFkLEdBQXlCLENBQTFCLENBQXJCO0lBREo7O0lBR0EsYUFBTyxNQUFNLElBQUksWUFBWSxDQUFDLE1BQXZCLEdBQWdDLE9BQWhDLEdBQTBDLE1BQWpEO0lBQ0gsS0FMSSxNQU1BO0lBQ0QsYUFBTyxPQUFQO0lBQ0g7SUFDSjs7SUFDRCxTQUFRLE1BQU0sRUFBZDtJQUNIOztBQ2hTbUN3RCxLQUFhLENBQXFCLElBQXJCOztJQ3dDM0MsU0FBVSxZQUFWLE9BQTRJO0lBQUEsTUFBOUY7SUFBRSxJQUFBLGFBQUY7SUFBaUIsSUFBQSxJQUFqQjtJQUF1QixJQUFBLFNBQXZCO0lBQWtDLElBQUEsZ0JBQWxDO0lBQW9ELElBQUE7SUFBcEQsR0FBOEY7SUFFOUksUUFBTSxDQUFDLFFBQUQsRUFBVyxXQUFYLEVBQXdCLFdBQXhCLElBQXVDLFFBQVEsQ0FBQyxLQUFELENBQXJEO0lBQ0EsUUFBTSxDQUFDLGNBQUQsRUFBaUIsaUJBQWpCLEVBQW9DLGlCQUFwQyxJQUF5RCxRQUFRLENBQW9DLElBQXBDLENBQXZFO0lBRUEsUUFBTSxpQkFBaUIsR0FBR3hELEdBQVcsQ0FBcUMsQ0FBcEMsSUFBNEM7SUFFOUUsVUFBTSxHQUFHLEdBQUdMLENBQU0sQ0FBSSxJQUFKLENBQWxCOztJQUVBLFVBQU0sV0FBVyxHQUFJLENBQUQsSUFBaUI7SUFDakM7SUFDQSxNQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7O0lBQ0EsVUFBSSxDQUFDLENBQUMsWUFBTixFQUFvQjtJQUNoQixRQUFBLENBQUMsQ0FBQyxZQUFGLENBQWUsYUFBZixHQUFnQyxhQUFoQyxhQUFnQyxhQUFoQyxjQUFnQyxhQUFoQyxHQUFpRCxLQUFqRDtJQUNBLFlBQUksU0FBSixFQUNJLENBQUMsQ0FBQyxZQUFGLENBQWUsWUFBZixDQUE0QixTQUE1QixFQUF1QyxnQkFBdkMsYUFBdUMsZ0JBQXZDLGNBQXVDLGdCQUF2QyxHQUEyRCxDQUEzRCxFQUE4RCxnQkFBOUQsYUFBOEQsZ0JBQTlELGNBQThELGdCQUE5RCxHQUFrRixDQUFsRjtJQUVKLFlBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixDQUFkOztJQUNBLGFBQUssTUFBTSxDQUFDLFFBQUQsRUFBVyxJQUFYLENBQVgsSUFBK0IsT0FBL0IsRUFBd0M7SUFDcEMsVUFBQSxDQUFDLENBQUMsWUFBRixDQUFlLE9BQWYsQ0FBdUIsUUFBdkIsRUFBaUMsSUFBakM7SUFDSDtJQUNKO0lBQ0osS0FiRDs7SUFlQSxVQUFNLFNBQVMsR0FBSSxDQUFELElBQWlCO0lBQy9CLE1BQUEsQ0FBQyxDQUFDLGNBQUY7SUFDQSxNQUFBLFdBQVcsQ0FBQyxLQUFELENBQVg7O0lBQ0EsVUFBSSxDQUFDLENBQUMsWUFBTixFQUFvQjtJQUNoQixZQUFJLENBQUMsQ0FBQyxZQUFGLENBQWUsVUFBZixJQUE2QixNQUFqQyxFQUF5QztJQUNyQyxVQUFBLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxZQUFGLENBQWUsVUFBaEIsQ0FBakI7SUFDSCxTQUZELE1BR0s7SUFDRCxVQUFBLGlCQUFpQixDQUFDLElBQUQsQ0FBakI7SUFDSDtJQUNKO0lBQ0osS0FYRDs7SUFjQSxXQUFPLGNBQWMsR0FBTTtJQUN2QixNQUFBLFNBQVMsRUFBRSxJQURZO0lBRXZCLE1BQUEsV0FGdUI7SUFHdkIsTUFBQSxTQUh1QjtJQUl2QixNQUFBO0lBSnVCLEtBQU4sRUFLbEIsQ0FMa0IsQ0FBckI7SUFPSCxHQXhDb0MsRUF3Q2xDLENBQUMsYUFBRCxFQUFnQixTQUFoQixFQUEyQixnQkFBM0IsRUFBNkMsZ0JBQTdDLEVBQStELEdBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLEVBQWxFLENBeENrQyxDQUFyQyxDQUw4STtJQWdEOUk7O0lBQ0EsTUFBSSxHQUFHLEdBQThCO0lBQ2pDLElBQUEsaUJBRGlDO0lBRWpDLElBQUEsUUFGaUM7SUFHakMsSUFBQSxXQUhpQztJQUtqQztJQUNBO0lBQ0EsSUFBQSxjQVBpQzs7SUFTakM7O0lBRUc7SUFDSCxJQUFBO0lBWmlDLEdBQXJDO0lBZUEsU0FBTyxHQUFQO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDNURLLE1BQU8sa0JBQVAsU0FBa0MsS0FBbEMsQ0FBdUM7SUFJekMsRUFBQSxXQUFBLENBQVksUUFBWixFQUE4QixJQUE5QixFQUF1RDtJQUFBOztJQUNuRCwyQkFBTSxJQUFOLGFBQU0sSUFBTix1QkFBTSxJQUFJLENBQUUsT0FBWix5REFBdUIsaURBQXZCOztJQURtRDs7SUFBQTs7SUFFbkQsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0lBQ0EsU0FBSyxTQUFMLEdBQWtCLElBQWxCLGFBQWtCLElBQWxCLHVCQUFrQixJQUFJLENBQUUsSUFBeEI7SUFDSDs7SUFSd0M7O0lBbUJ2QyxTQUFVLFlBQVYsT0FBZ0Y7SUFBQSxNQUFsQztJQUFFLElBQUE7SUFBRixHQUFrQztJQUVsRixRQUFNLENBQUMscUJBQUQsRUFBd0Isd0JBQXhCLElBQW9ELFFBQVEsQ0FBNEIsSUFBNUIsQ0FBbEU7SUFDQSxRQUFNLENBQUMsdUJBQUQsRUFBMEIsMEJBQTFCLElBQXdELFFBQVEsQ0FBcUIsSUFBckIsQ0FBdEU7SUFFQSxRQUFNLENBQUMsWUFBRCxFQUFlLGVBQWYsSUFBa0MsUUFBUSxDQUFvQixJQUFwQixDQUFoRDtJQUNBLFFBQU0sQ0FBQyxjQUFELEVBQWlCLGlCQUFqQixJQUFzQyxRQUFRLENBQXdDLElBQXhDLENBQXBEO0lBRUEsUUFBTSxDQUFDLFNBQUQsRUFBWSxZQUFaLElBQTRCLFFBQVEsQ0FBc0IsU0FBdEIsQ0FBMUMsQ0FSa0Y7SUFXbEY7O0lBQ0EsUUFBTSxlQUFlLEdBQUdBLENBQU0sQ0FBbUYsRUFBbkYsQ0FBOUI7SUFDQSxRQUFNLENBQUMsbUJBQUQsRUFBc0Isc0JBQXRCLEVBQThDLHNCQUE5QyxJQUF3RSxRQUFRLENBQUMsQ0FBQyxDQUFGLENBQXRGO0lBQ0EsUUFBTSxDQUFDLFlBQUQsRUFBZSxlQUFmLEVBQWdDLGVBQWhDLElBQW1ELFFBQVEsQ0FBQyxDQUFELENBQWpFLENBZGtGO0lBaUJsRjs7SUFDQSxFQUFBTixDQUFTLENBQUMsTUFBSztJQUNYLFVBQU0sbUJBQW1CLEdBQUcsc0JBQXNCLEVBQWxEO0lBQ0EsVUFBTSxZQUFZLEdBQUcsZUFBZSxFQUFwQzs7SUFFQSxRQUFJLFlBQVksR0FBRyxDQUFuQixFQUFzQjtJQUNsQixVQUFLLG1CQUFtQixHQUFHLENBQXZCLEdBQTRCLFlBQWhDLEVBQThDO0lBQzFDLFFBQUEsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBUixDQUF0QjtJQUNIO0lBQ0o7SUFFSixHQVZRLEVBVU4sQ0FBQyxZQUFELENBVk0sQ0FBVCxDQWxCa0Y7SUErQmxGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUNBLEVBQUFBLENBQVMsQ0FBQyxNQUFLO0lBQ1gsUUFBSSxtQkFBbUIsSUFBSSxDQUEzQixFQUE4QjtJQUMxQixZQUFNLGNBQWMsR0FBRyxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsbUJBQXhCLENBQXZCO0lBQ0EsTUFBQSxjQUFjLENBQUMsSUFBZixDQUFxQixJQUFELElBQVM7SUFFekIsWUFBSSxJQUFJLEtBQUssSUFBYixFQUFtQjtJQUNmLGdCQUFNO0lBQUUsWUFBQSxLQUFGO0lBQVMsWUFBQTtJQUFULGNBQXFCLElBQTNCO0lBQ0EsVUFBQSxlQUFlLENBQUMsS0FBRCxDQUFmO0lBQ0EsVUFBQSxpQkFBaUIsQ0FBQyxPQUFELENBQWpCO0lBQ0gsU0FOd0I7OztJQVV6QixjQUFNLG1CQUFtQixHQUFHLHNCQUFzQixFQUFsRDtJQUNBLGNBQU0sWUFBWSxHQUFHLGVBQWUsRUFBcEM7O0lBRUEsWUFBSyxtQkFBbUIsR0FBRyxDQUF2QixHQUE0QixZQUFoQyxFQUE4QztJQUMxQztJQUNBO0lBQ0EsVUFBQSxzQkFBc0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQXRCO0lBQ0g7SUFDSixPQWxCRDtJQW1CSDtJQUNKLEdBdkJRLEVBdUJOLENBQUMsbUJBQUQsQ0F2Qk0sQ0FBVDs7SUEwQkEsUUFBTSxpQkFBaUIsR0FBb0UsQ0FBM0MsSUFBc0Y7SUFFbEk7SUFFQTtJQUNBLFVBQU0sV0FBVyxHQUFJLENBQUQsSUFBaUI7SUFDakMsTUFBQSxDQUFDLENBQUMsY0FBRjs7SUFDQSxVQUFJLENBQUMsQ0FBQyxZQUFOLEVBQW9CO0lBRWhCO0lBQ0EsUUFBQSxDQUFDLENBQUMsWUFBRixDQUFlLFVBQWYsR0FBNkIsTUFBN0IsYUFBNkIsTUFBN0IsY0FBNkIsTUFBN0IsR0FBdUMsTUFBdkM7SUFFQSxjQUFNLFlBQVksR0FBRyxJQUFJLEdBQUosRUFBckI7SUFDQSxjQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUosRUFBakI7O0lBRUEsYUFBSyxJQUFJLElBQVQsZ0RBQWlCLENBQUMsQ0FBQyxZQUFuQixvREFBaUIsZ0JBQWdCLEtBQWpDLHlFQUEwQyxFQUExQyxFQUE4QztJQUFBOztJQUMxQyxnQkFBTTtJQUFFLFlBQUEsSUFBRjtJQUFRLFlBQUE7SUFBUixjQUFpQixJQUF2Qjs7SUFFQSxjQUFJLElBQUksS0FBSyxRQUFiLEVBQXVCO0lBQ25CLFlBQUEsWUFBWSxDQUFDLEdBQWIsQ0FBaUIsSUFBakI7SUFDSCxXQUZELE1BR0ssSUFBSSxJQUFJLEtBQUssTUFBYixFQUFxQjtJQUN0QixZQUFBLFFBQVEsQ0FBQyxJQUFULENBQWM7SUFBRSxjQUFBLElBQUksRUFBRSxJQUFJLENBQUM7SUFBYixhQUFkO0lBRUg7SUFDSjs7SUFFRCxRQUFBLHdCQUF3QixDQUFDLFFBQUQsQ0FBeEI7SUFDQSxRQUFBLDBCQUEwQixDQUFDLFlBQUQsQ0FBMUI7SUFDSDtJQUNKLEtBekJELENBTGtJOzs7SUFpQ2xJLFVBQU0sV0FBVyxHQUFJLENBQUQsSUFBaUI7SUFDakMsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLE1BQUEsd0JBQXdCLENBQUMsSUFBRCxDQUF4QjtJQUNBLE1BQUEsMEJBQTBCLENBQUMsSUFBRCxDQUExQjtJQUNILEtBSkQsQ0FqQ2tJOzs7SUF3Q2xJLFVBQU0sVUFBVSxHQUFJLENBQUQsSUFBaUI7SUFDaEMsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNILEtBRkQsQ0F4Q2tJOzs7SUE2Q2xJLFVBQU0sTUFBTSxHQUFJLENBQUQsSUFBaUI7SUFDNUIsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUVBLE1BQUEsd0JBQXdCLENBQUMsSUFBRCxDQUF4QjtJQUNBLE1BQUEsMEJBQTBCLENBQUMsSUFBRCxDQUExQjtJQUVBLFVBQUksV0FBVyxHQUFHLElBQUksS0FBSixFQUFsQjtJQUVBLFlBQU0sUUFBUSxHQUFtQyxFQUFqRDtJQUNBLFlBQU0sUUFBUSxHQUFlLEVBQTdCOztJQUVBLFdBQUssSUFBSSxJQUFULGtEQUFpQixDQUFDLENBQUMsWUFBbkIscURBQWlCLGlCQUFnQixLQUFqQywyRUFBMEMsRUFBMUMsRUFBOEM7SUFBQTs7SUFDMUMsY0FBTTtJQUFFLFVBQUEsSUFBRjtJQUFRLFVBQUE7SUFBUixZQUFpQixJQUF2Qjs7SUFFQSxZQUFJLElBQUksS0FBSyxRQUFiLEVBQXVCO0lBQ25CLFVBQUEsV0FBVyxDQUFDLElBQVosQ0FBa0IsSUFBSSxPQUFKLENBQW9CLENBQUMsT0FBRCxFQUFVLE1BQVYsS0FBcUIsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsT0FBakIsQ0FBekMsQ0FBRCxDQUFzRSxJQUF0RSxDQUEyRSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUQsQ0FBUixHQUFpQixHQUFuRyxDQUFqQjtJQUNILFNBRkQsTUFHSyxJQUFJLElBQUksS0FBSyxNQUFiLEVBQXFCO0lBQ3RCLGdCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBTCxFQUFiOztJQUNBLGNBQUksSUFBSixFQUFVO0lBQ04sWUFBQSxXQUFXLENBQUMsSUFBWixDQUNJLElBQUksT0FBSixDQUFrQixDQUFDLE9BQUQsRUFBVSxNQUFWLEtBQW9CO0lBRWxDLGtCQUFJLE1BQU0sR0FBRyxJQUFJLFVBQUosRUFBYjs7SUFFQSxjQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWlCLENBQUQsSUFBTTtJQUNsQixnQkFBQSxPQUFPO0lBQ1Asc0JBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFwQjtJQUNBLGdCQUFBLFFBQVEsQ0FBQyxJQUFULENBQWM7SUFBRSxrQkFBQSxJQUFGO0lBQVEsa0JBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFuQjtJQUF5QixrQkFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQXBDO0lBQTBDLGtCQUFBLElBQUksRUFBRSxJQUFJLENBQUMsVUFBckQ7SUFBaUUsa0JBQUEsWUFBWSxFQUFFLElBQUksQ0FBQztJQUFwRixpQkFBZDtJQUNILGVBSkQ7O0lBS0EsY0FBQSxNQUFNLENBQUMsT0FBUCxHQUFrQixDQUFELElBQU07SUFBRyxnQkFBQSxNQUFNLENBQUMsSUFBSSxrQkFBSixDQUF1QixJQUFJLENBQUMsSUFBNUIsRUFBa0MsTUFBTSxDQUFDLEtBQXpDLENBQUQsQ0FBTjtJQUEwRCxlQUFwRjs7SUFDQSxjQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWtCLENBQUQsSUFBTTtJQUFHLGdCQUFBLE1BQU0sQ0FBQyxJQUFJLGtCQUFKLENBQXVCLElBQUksQ0FBQyxJQUE1QixFQUFrQyxNQUFNLENBQUMsS0FBekMsQ0FBRCxDQUFOO0lBQTBELGVBQXBGOztJQUVBLGNBQUEsTUFBTSxDQUFDLGlCQUFQLENBQXlCLElBQXpCO0lBQ0gsYUFiRCxDQURKO0lBZ0JBLFlBQUEsUUFBUSxDQUFDLElBQVQ7SUFDSDtJQUNKO0lBQ0o7O0lBR0QsTUFBQSxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsSUFBeEIsQ0FBNkIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLElBQXpCLENBQThCLE1BQUs7SUFDNUQsUUFBQSxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBUixDQUFmO0lBQ0EsUUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0lBQ0EsZUFBTztJQUNILFVBQUEsT0FBTyxFQUFFLFFBRE47SUFFSCxVQUFBLEtBQUssRUFBRTtJQUZKLFNBQVA7SUFJSCxPQVA0QixFQU8xQixLQVAwQixDQU9wQixFQUFFLElBQUc7SUFDVixpQkFEVTs7SUFFVixRQUFBLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQWY7SUFDQSxRQUFBLFlBQVksQ0FBQyxFQUFELENBQVo7SUFDQSxlQUFPLElBQVA7SUFDSCxPQVo0QixDQUE3QjtJQWFILEtBdkREOztJQTBEQSxXQUFPLGNBQWMsR0FBTTtJQUFFLE1BQUEsV0FBRjtJQUFlLE1BQUEsV0FBZjtJQUE0QixNQUFBLFVBQTVCO0lBQXdDLE1BQUE7SUFBeEMsS0FBTixFQUF3RCxDQUF4RCxDQUFyQjtJQUNILEdBeEdEOztJQTBHQSxTQUFPO0lBQ0gsSUFBQSxpQkFERztJQUVILElBQUEscUJBRkc7SUFHSCxJQUFBLHVCQUhHO0lBSUgsSUFBQSxZQUpHO0lBS0gsSUFBQSxjQUxHO0lBT0gsSUFBQTtJQVBHLEdBQVA7SUFTSDs7SUNqTkQ7Ozs7Ozs7Ozs7Ozs7OztJQWVHOztJQUNHLFNBQVUsZ0JBQVYsQ0FBZ0osTUFBaEosRUFBMkosSUFBM0osRUFBNEssT0FBNUssRUFBOE0sT0FBOU0sRUFBK1A7SUFFalE7SUFDQTtJQUNBO0lBQ0E7SUFFQSxNQUFJLGFBQWEsR0FBeUIsaUJBQWlCLENBQUMsT0FBRCxhQUFDLE9BQUQsY0FBQyxPQUFELEdBQWEsTUFBSyxFQUFsQixDQUEzRDtJQUNBLE1BQUksT0FBTyxJQUFJLElBQWYsRUFDSSxhQUFhLEdBQUcsSUFBaEI7SUFFSixFQUFBQSxDQUFTLENBQUMsTUFBSztJQUNYLFFBQUksYUFBSixFQUFtQjtJQUNmLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLElBQXhCLEVBQThCLGFBQTlCLEVBQTZDLE9BQTdDO0lBRUEsYUFBTyxNQUFNLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixJQUEzQixFQUFpQyxhQUFqQyxFQUFnRCxPQUFoRCxDQUFiO0lBQ0g7SUFDSixHQU5RLEVBTU4sQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLGFBQWYsQ0FOTSxDQUFUO0lBT0g7O0lDaENELE1BQU0scUJBQXFCLEdBQUcsSUFBSSxHQUFKLEVBQTlCO0lBQ0EsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLEdBQUosRUFBbEM7SUFDQSxNQUFNLHFCQUFxQixHQUFHLElBQUksR0FBSixFQUE5QjtJQUNBLElBQUksY0FBYyxHQUFHLElBQUksR0FBSixFQUFyQjs7SUFFQSxTQUFTLGNBQVQsQ0FBMkIsTUFBM0IsRUFBOEQsR0FBOUQsRUFBc0ksS0FBdEksRUFBOEk7SUFDMUksT0FBSyxJQUFJLENBQUMsV0FBRCxFQUFjLFFBQWQsQ0FBVCxJQUFvQyxHQUFwQyxFQUF5QztJQUNyQyxRQUFJLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0lBQ3hCLFdBQUssSUFBSSxPQUFULElBQW9CLFFBQXBCLEVBQThCO0lBQzFCLFFBQUEsT0FBTyxTQUFQLElBQUEsT0FBTyxXQUFQLFlBQUEsT0FBTyxDQUFHLEtBQUgsQ0FBUDtJQUNIO0lBQ0o7SUFDSjtJQUNKOztJQUVELFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUErQjtJQUMzQixRQUFNLE1BQU0sR0FBSSxDQUFDLENBQUMsTUFBRixDQUFxQixhQUFyQixDQUFtQyxXQUFuRDs7SUFFQSxNQUFJLENBQUMsQ0FBQyxhQUFGLElBQW1CLElBQXZCLEVBQTZCO0lBQ3pCLElBQUEsY0FBYyxDQUFDLE1BQUQsRUFBUyxxQkFBVCxFQUFnQyxJQUFoQyxDQUFkO0lBQ0g7SUFLSjs7SUFFRCxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBOEI7SUFDMUIsUUFBTSxNQUFNLEdBQUksQ0FBQyxDQUFDLE1BQUYsQ0FBcUIsYUFBckIsQ0FBbUMsV0FBbkQ7SUFDQSxNQUFJLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxNQUFoQztJQUNBLEVBQUEsY0FBYyxDQUFDLE1BQUQsRUFBUyxxQkFBVCxFQUFnQyx1QkFBaEMsQ0FBZDtJQUNBLEVBQUEsY0FBYyxDQUFDLE1BQUQsRUFBUyx5QkFBVCxFQUFvQyx1QkFBcEMsQ0FBZDtJQUNIOztJQUVELFNBQVMsV0FBVCxDQUFxQixDQUFyQixFQUFrQztJQUM5QixRQUFNLE1BQU0sR0FBSSxDQUFDLENBQUMsTUFBRixZQUFvQixNQUFwQixHQUE2QixDQUFDLENBQUMsTUFBL0IsR0FBd0MsQ0FBQyxDQUFDLGFBQUYsWUFBMkIsTUFBM0IsR0FBb0MsQ0FBQyxDQUFDLGFBQXRDLEdBQXVELENBQUMsQ0FBQyxNQUFGLENBQXFCLGFBQXJCLENBQW1DLFdBQWxKO0lBQ0EsRUFBQSxjQUFjLENBQUMsR0FBZixDQUFtQixNQUFuQixFQUEyQixJQUEzQjtJQUNBLEVBQUEsY0FBYyxDQUFDLE1BQUQsRUFBUyxxQkFBVCxFQUFnQyxJQUFoQyxDQUFkO0lBQ0g7O0lBRUQsU0FBUyxVQUFULENBQW9CLENBQXBCLEVBQWlDO0lBQzdCLFFBQU0sTUFBTSxHQUFJLENBQUMsQ0FBQyxNQUFGLFlBQW9CLE1BQXBCLEdBQTZCLENBQUMsQ0FBQyxNQUEvQixHQUF3QyxDQUFDLENBQUMsYUFBRixZQUEyQixNQUEzQixHQUFvQyxDQUFDLENBQUMsYUFBdEMsR0FBdUQsQ0FBQyxDQUFDLE1BQUYsQ0FBcUIsYUFBckIsQ0FBbUMsV0FBbEo7SUFDQSxFQUFBLGNBQWMsQ0FBQyxHQUFmLENBQW1CLE1BQW5CLEVBQTJCLEtBQTNCO0lBQ0EsRUFBQSxjQUFjLENBQUMsTUFBRCxFQUFTLHFCQUFULEVBQWdDLEtBQWhDLENBQWQ7SUFDSDtJQWtDRDs7Ozs7Ozs7Ozs7O0lBWUc7OztJQUNHLFNBQVUsZ0JBQVYsT0FBcUo7SUFBQSxNQUExRztJQUFFLElBQUEscUJBQUY7SUFBeUIsSUFBQSx5QkFBekI7SUFBb0QsSUFBQTtJQUFwRCxHQUEwRztJQUV2SixFQUFBLGtCQUFrQixDQUFDLHFCQUFELEVBQXdCLHlCQUF4QixFQUFtRCxxQkFBbkQsQ0FBbEI7SUFFQSxRQUFNO0lBQUUsSUFBQSxVQUFGO0lBQWMsSUFBQTtJQUFkLE1BQXFDLGFBQWEsQ0FBSTtJQUN4RCxJQUFBLGVBQWUsRUFBRVcsR0FBVyxDQUFFLE9BQUQsSUFBc0I7SUFFL0MsVUFBSSxPQUFKLEVBQWE7SUFBQTs7SUFDVCxjQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBekI7SUFDQSxjQUFNLE1BQU0sR0FBRyxRQUFILGFBQUcsUUFBSCx1QkFBRyxRQUFRLENBQUUsV0FBekI7O0lBRUEsWUFBSSxvREFBQyxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixDQUFELDJEQUFDLHVCQUFtQyxJQUFwQyx5RUFBNEMsQ0FBNUMsTUFBbUQsQ0FBdkQsRUFBMEQ7SUFDdEQsVUFBQSxRQUFRLFNBQVIsSUFBQSxRQUFRLFdBQVIsWUFBQSxRQUFRLENBQUUsZ0JBQVYsQ0FBMkIsU0FBM0IsRUFBc0MsT0FBdEMsRUFBK0M7SUFBRSxZQUFBLE9BQU8sRUFBRTtJQUFYLFdBQS9DO0lBQ0EsVUFBQSxRQUFRLFNBQVIsSUFBQSxRQUFRLFdBQVIsWUFBQSxRQUFRLENBQUUsZ0JBQVYsQ0FBMkIsVUFBM0IsRUFBdUMsUUFBdkMsRUFBaUQ7SUFBRSxZQUFBLE9BQU8sRUFBRTtJQUFYLFdBQWpEO0lBQ0EsVUFBQSxNQUFNLFNBQU4sSUFBQSxNQUFNLFdBQU4sWUFBQSxNQUFNLENBQUUsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsV0FBbEMsRUFBK0M7SUFBRSxZQUFBLE9BQU8sRUFBRTtJQUFYLFdBQS9DO0lBQ0EsVUFBQSxNQUFNLFNBQU4sSUFBQSxNQUFNLFdBQU4sWUFBQSxNQUFNLENBQUUsZ0JBQVIsQ0FBeUIsTUFBekIsRUFBaUMsVUFBakMsRUFBNkM7SUFBRSxZQUFBLE9BQU8sRUFBRTtJQUFYLFdBQTdDO0lBQ0gsU0FUUTtJQVlUOzs7SUFDQSxjQUFNLDBCQUEwQiw2QkFBRyxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixDQUFILDJFQUF3QyxJQUFJLEdBQUosRUFBeEU7SUFDQSxjQUFNLDhCQUE4Qiw0QkFBRyx5QkFBeUIsQ0FBQyxHQUExQixDQUE4QixNQUE5QixDQUFILHlFQUE0QyxJQUFJLEdBQUosRUFBaEY7SUFDQSxjQUFNLDBCQUEwQiw0QkFBRyxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixDQUFILHlFQUF3QyxJQUFJLEdBQUosRUFBeEU7SUFFQSxRQUFBLDBCQUEwQixDQUFDLEdBQTNCLENBQStCLGdCQUEvQjtJQUNBLFFBQUEsOEJBQThCLENBQUMsR0FBL0IsQ0FBbUMsb0JBQW5DO0lBQ0EsUUFBQSwwQkFBMEIsQ0FBQyxHQUEzQixDQUErQixnQkFBL0I7SUFFQSxRQUFBLHFCQUFxQixDQUFDLEdBQXRCLENBQTBCLE1BQTFCLEVBQWtDLDBCQUFsQztJQUNBLFFBQUEseUJBQXlCLENBQUMsR0FBMUIsQ0FBOEIsTUFBOUIsRUFBc0MsOEJBQXRDO0lBQ0EsUUFBQSxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixFQUFrQywwQkFBbEM7SUFFQSxlQUFPLE1BQUs7SUFDUixVQUFBLHFCQUFxQixDQUFDLEdBQXRCLENBQTBCLE1BQTFCLEVBQW1DLE1BQW5DLENBQTBDLGdCQUExQztJQUNBLFVBQUEseUJBQXlCLENBQUMsR0FBMUIsQ0FBOEIsTUFBOUIsRUFBdUMsTUFBdkMsQ0FBOEMsb0JBQTlDO0lBQ0EsVUFBQSxxQkFBcUIsQ0FBQyxHQUF0QixDQUEwQixNQUExQixFQUFtQyxNQUFuQyxDQUEwQyxnQkFBMUM7O0lBRUEsY0FBSSxxQkFBcUIsQ0FBQyxJQUF0QixLQUErQixDQUFuQyxFQUFzQztJQUNsQyxZQUFBLFFBQVEsU0FBUixJQUFBLFFBQVEsV0FBUixZQUFBLFFBQVEsQ0FBRSxtQkFBVixDQUE4QixTQUE5QixFQUF5QyxPQUF6QztJQUNBLFlBQUEsUUFBUSxTQUFSLElBQUEsUUFBUSxXQUFSLFlBQUEsUUFBUSxDQUFFLG1CQUFWLENBQThCLFVBQTlCLEVBQTBDLFFBQTFDO0lBQ0EsWUFBQSxNQUFNLFNBQU4sSUFBQSxNQUFNLFdBQU4sWUFBQSxNQUFNLENBQUUsbUJBQVIsQ0FBNEIsT0FBNUIsRUFBcUMsV0FBckM7SUFDQSxZQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxtQkFBUixDQUE0QixNQUE1QixFQUFvQyxVQUFwQztJQUNIO0lBQ0osU0FYRDtJQVlIO0lBQ0osS0F4QzJCLEVBd0N6QixFQXhDeUI7SUFENEIsR0FBSixDQUF4RDtJQTRDQSxRQUFNLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLElBQXVDLGVBQWUsQ0FBVyxxQkFBWCxFQUFrQyxTQUFsQyxDQUE1RDtJQUNBLFFBQU0sQ0FBQyxvQkFBRCxFQUF1QixvQkFBdkIsSUFBK0MsZUFBZSxDQUFJLHlCQUFKLEVBQStCLFNBQS9CLENBQXBFO0lBQ0EsUUFBTSxDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixJQUF1QyxlQUFlLENBQVUscUJBQVYsRUFBaUMsVUFBakMsQ0FBNUQ7SUFFQSxTQUFPO0lBQUUsSUFBQSxVQUFGO0lBQWMsSUFBQSxxQkFBcUIsRUFBRSxrQkFBckM7SUFBeUQsSUFBQSxnQkFBekQ7SUFBMkUsSUFBQSxvQkFBM0U7SUFBaUcsSUFBQTtJQUFqRyxHQUFQO0lBQ0g7O0lBRUQsU0FBUyxVQUFULEdBQW1CO0lBQUssU0FBTyxJQUFQO0lBQWM7O0lDekl0QyxTQUFTeUQsYUFBVCxHQUFvQjtJQUFLLFNBQU8sS0FBUDtJQUFlOztJQUdsQyxTQUFVLFdBQVYsT0FBa087SUFBQSxNQUE1TDtJQUFFLElBQUEsZ0JBQUY7SUFBb0IsSUFBQSxxQkFBcEI7SUFBMkMsSUFBQSxvQkFBM0M7SUFBaUUsSUFBQSx5QkFBakU7SUFBNEYsSUFBQSx5QkFBNUY7SUFBdUgsSUFBQSxxQkFBdkg7SUFBOEksSUFBQTtJQUE5SSxHQUE0TDtJQUVwTyxFQUFBLGtCQUFrQixDQUFDLGdCQUFELEVBQW1CLHFCQUFuQixFQUEwQyxvQkFBMUMsRUFBZ0UseUJBQWhFLEVBQTJGLHlCQUEzRixFQUFzSCxxQkFBdEgsRUFBNkkscUJBQTdJLENBQWxCO0lBRUEsUUFBTSxDQUFDLFVBQUQsRUFBYSxVQUFiLElBQTJCLGVBQWUsQ0FBVSxnQkFBVixFQUE0QkEsYUFBNUIsQ0FBaEQ7SUFDQSxRQUFNLENBQUMsZUFBRCxFQUFrQixlQUFsQixJQUFxQyxlQUFlLENBQVUscUJBQVYsRUFBaUNBLGFBQWpDLENBQTFEO0lBQ0EsUUFBTSxDQUFDLGNBQUQsRUFBaUIsY0FBakIsSUFBbUMsZUFBZSxDQUFVLG9CQUFWLEVBQWdDQSxhQUFoQyxDQUF4RDtJQUNBLFFBQU0sQ0FBQyxtQkFBRCxFQUFzQixtQkFBdEIsSUFBNkMsZUFBZSxDQUFVLHlCQUFWLEVBQXFDQSxhQUFyQyxDQUFsRTtJQUVBLFFBQU07SUFBRSxJQUFBLGdCQUFGO0lBQW9CLElBQUEsb0JBQXBCO0lBQTBDLElBQUEsZ0JBQTFDO0lBQTRELElBQUEscUJBQTVEO0lBQW1GLElBQUE7SUFBbkYsTUFBa0csZ0JBQWdCLENBQUk7SUFDeEgsSUFBQSxxQkFBcUIsRUFBRXpELEdBQVcsQ0FBc0UsQ0FBQyxhQUFELEVBQWdCLGlCQUFoQixLQUFxQztJQUN6SSxZQUFNLFdBQVcsR0FBRyxVQUFVLEVBQTlCO0lBQ0EsWUFBTSxPQUFPLEdBQUksV0FBVyxJQUFJLElBQWYsSUFBd0IsV0FBVyxJQUFJLGFBQXhEO0lBQ0EsWUFBTSxZQUFZLEdBQUksQ0FBQyxFQUFDLFdBQUQsYUFBQyxXQUFELGVBQUMsV0FBVyxDQUFFLFFBQWIsQ0FBc0IsYUFBdEIsQ0FBRCxDQUF2QjtJQUNBLE1BQUEsVUFBVSxDQUFDLE9BQUQsQ0FBVjtJQUNBLE1BQUEsZUFBZSxDQUFDLFlBQUQsQ0FBZjtJQUNBLE1BQUEscUJBQXFCLFNBQXJCLElBQUEscUJBQXFCLFdBQXJCLFlBQUEscUJBQXFCLENBQUcsYUFBSCxFQUFrQixpQkFBbEIsQ0FBckI7SUFDSCxLQVBpQyxFQU8vQixFQVArQixDQURzRjtJQVN4SCxJQUFBLHlCQUF5QixFQUFFQSxHQUFXLENBQTBFLENBQUMsaUJBQUQsRUFBb0IscUJBQXBCLEtBQTZDO0lBQ3pKLFlBQU0sV0FBVyxHQUFHLFVBQVUsRUFBOUI7SUFDQSxZQUFNLE9BQU8sR0FBSSxXQUFXLElBQUksSUFBZixJQUF3QixXQUFXLElBQUksaUJBQXhEO0lBQ0EsWUFBTSxZQUFZLEdBQUksQ0FBQyxFQUFDLFdBQUQsYUFBQyxXQUFELGVBQUMsV0FBVyxDQUFFLFFBQWIsQ0FBc0IsaUJBQXRCLENBQUQsQ0FBdkI7SUFDQSxNQUFBLGNBQWMsQ0FBQyxPQUFELENBQWQ7SUFDQSxNQUFBLG1CQUFtQixDQUFDLFlBQUQsQ0FBbkI7SUFDQSxNQUFBLHlCQUF5QixTQUF6QixJQUFBLHlCQUF5QixXQUF6QixZQUFBLHlCQUF5QixDQUFHLGlCQUFILEVBQXNCLHFCQUF0QixDQUF6QjtJQUNILEtBUHFDLEVBT25DLEVBUG1DLENBVGtGO0lBaUJ4SCxJQUFBO0lBakJ3SCxHQUFKLENBQXhIO0lBb0JBLFFBQU0sZ0JBQWdCLEdBQUdBLEdBQVcsQ0FBMkMsS0FBMUMsSUFBc0Q7SUFBRyxXQUFPLHFCQUFxQixDQUFDLEtBQUQsQ0FBNUI7SUFBc0MsR0FBaEcsRUFBa0csQ0FBQyxxQkFBRCxDQUFsRyxDQUFwQztJQUdBLFNBQU87SUFBRSxJQUFBLGdCQUFGO0lBQW9CLElBQUEsVUFBcEI7SUFBZ0MsSUFBQSxVQUFoQztJQUE0QyxJQUFBLGVBQTVDO0lBQTZELElBQUEsY0FBN0Q7SUFBNkUsSUFBQSxtQkFBN0U7SUFBa0csSUFBQSxnQkFBbEc7SUFBb0gsSUFBQSxvQkFBcEg7SUFBMEksSUFBQTtJQUExSSxHQUFQO0lBQ0g7O0lDMUVLLFNBQVUsV0FBVixPQUF5RDtJQUFBLE1BQW5DO0lBQUUsSUFBQSxRQUFGO0lBQVksSUFBQTtJQUFaLEdBQW1DO0lBQzNEO0lBQ0EsUUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsUUFBRCxDQUF4QztJQUNBLFFBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxRQUFELENBQW5DO0lBRUEsRUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxRQUFJLFFBQVEsR0FBRyxXQUFXLEVBQTFCO0lBQ0EsUUFBSSxhQUFhLEdBQUcsUUFBcEI7SUFFQSxRQUFJLFFBQVEsSUFBSSxJQUFoQixFQUNJLE9BTE87SUFTWDs7SUFDQSxVQUFNLGtCQUFrQixHQUFHLE1BQUs7SUFDNUIsTUFBQSxjQUFjO0lBQ2QsWUFBTSxlQUFlLEdBQUcsV0FBVyxFQUFuQzs7SUFDQSxVQUFJLGVBQWUsSUFBSSxhQUF2QixFQUFzQztJQUNsQyxRQUFBLGFBQWEsQ0FBQyxNQUFELENBQWI7SUFDQSxZQUFJLGVBQWUsSUFBSSxJQUF2QixFQUNJLE1BQU0sR0FBRyxXQUFXLENBQUMsa0JBQUQsRUFBcUIsYUFBYSxHQUFHLGVBQXJDLENBQXBCO0lBQ1A7SUFDSixLQVJEOztJQVNBLFFBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxrQkFBRCxFQUFxQixRQUFyQixDQUF4QjtJQUNBLFdBQU8sTUFBTSxhQUFhLENBQUMsTUFBRCxDQUExQjtJQUNILEdBckJRLEVBcUJOLEVBckJNLENBQVQ7SUFzQkg7Ozs7OztJQzdDRCxJQUFNcUUsa0JBQWtCLEdBQUcsQ0FBQSxPQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBLHNCQUFBLEVBQUEsaUJBQUEsRUFBQSxpQkFBQSxFQUFBLGtEQUFBLEVBQUEsK0JBQUEsRUFBM0IsU0FBMkIsQ0FBM0I7SUFlQSxJQUFNQyxTQUFTLEdBQUcsT0FBQSxPQUFBLEtBQWxCLFdBQUE7SUFFQSxJQUFNQyxPQUFPLEdBQUdELFNBQVMsR0FDckIsWUFBWSxFQURTLEdBRXJCRSxPQUFPLENBQVBBLFNBQUFBLENBQUFBLE9BQUFBLElBQ0FBLE9BQU8sQ0FBUEEsU0FBQUEsQ0FEQUEsaUJBQUFBLElBRUFBLE9BQU8sQ0FBUEEsU0FBQUEsQ0FKSixxQkFBQTtJQU1BLElBQU1DLFdBQVcsR0FDZixDQUFBLFNBQUEsSUFBY0QsT0FBTyxDQUFQQSxTQUFBQSxDQUFkLFdBQUEsR0FDSSxVQUFBLE9BQUEsRUFBQTtJQUFhRSxTQUFBQSxPQUFPLENBQXBCLFdBQWFBLEVBQUFBO0lBRGpCLENBQUEsR0FFSSxVQUFBLE9BQUEsRUFBQTtJQUFhQSxTQUFBQSxPQUFPLENBQXBCLGFBQWFBO0lBSG5CLENBQUE7O0lBd0pBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUEsSUFBQSxFQUFnQjtJQUM5QixTQUFPQyxJQUFJLENBQUpBLE9BQUFBLEtBQVAsT0FBQTtJQURGLENBQUE7O0lBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBLElBQUEsRUFBZ0I7SUFDN0JGLFNBQUFBLE9BQU8sQ0FBUEEsSUFBTyxDQUFQQSxJQUFpQkMsSUFBSSxDQUFKQSxJQUFBQSxLQUF4QixRQUFPRDtJQURULENBQUE7O0lBSUEsSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBLElBQUEsRUFBZ0I7SUFDckNDLE1BQUFBLENBQUMsR0FDTEgsSUFBSSxDQUFKQSxPQUFBQSxLQUFBQSxTQUFBQSxJQUNBLEtBQUssQ0FBTCxTQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FDU0EsSUFBSSxDQURiLFFBQUEsRUFBQSxJQUFBLENBRVEsVUFBQSxLQUFBLEVBQUE7SUFBQSxXQUFXSSxLQUFLLENBQUxBLE9BQUFBLEtBQVgsU0FBQTtJQUpWLEdBRUUsQ0FGSUQ7SUFLTixTQUFBLENBQUE7SUFORixDQUFBOztJQTREQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBLElBQUEsRUFBZ0I7SUFDUEwsTUFBQUEscUJBQUFBLEdBQUFBLElBQUksQ0FBOUIscUJBQTBCQSxFQUFBQTtJQUFBQSxNQUFsQk0sS0FBUixHQUFBLHFCQUFBLENBQUEsS0FBMEJOO0lBQUFBLE1BQVhPLE1BQWYsR0FBQSxxQkFBQSxDQUFBLE1BQTBCUDs7SUFDMUIsU0FBT00sS0FBSyxLQUFMQSxDQUFBQSxJQUFlQyxNQUFNLEtBQTVCLENBQUE7SUFGRixDQUFBOztJQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUEsSUFBQSxFQUFpRCxJQUFqRCxFQUFpRDtJQUEvQkMsTUFBQUEsWUFBK0IsR0FBQSxJQUFBLENBQS9CQSxZQUFBQTtJQUFBQSxNQUFjQyxhQUFpQixHQUFBLElBQUEsQ0FBakJBLGFBQWREOztJQUM3QkUsTUFBQUEsZ0JBQWdCLENBQWhCQSxJQUFnQixDQUFoQkEsQ0FBQUEsVUFBQUEsS0FBSixRQUFJQSxFQUFnRDtJQUNsRCxXQUFBLElBQUE7SUFDRDs7SUFFS0MsTUFBQUEsZUFBZSxHQUFHakIsT0FBTyxDQUFQQSxJQUFBQSxDQUFBQSxJQUFBQSxFQUF4QiwrQkFBd0JBLENBQWxCaUI7SUFDQUMsTUFBQUEsZ0JBQWdCLEdBQUdELGVBQWUsR0FBR1osSUFBSSxDQUFQLGFBQUEsR0FBeEMsSUFBTWE7O0lBQ0ZsQixNQUFBQSxPQUFPLENBQVBBLElBQUFBLENBQUFBLGdCQUFBQSxFQUFKLHVCQUFJQSxDQUFBQSxFQUF5RDtJQUMzRCxXQUFBLElBQUE7SUFDRDs7SUFFRCxNQUFJLENBQUEsWUFBQSxJQUFpQmMsWUFBWSxLQUFqQyxNQUFBLEVBQThDO0lBQzVDLFFBQUksT0FBQSxhQUFBLEtBQUosVUFBQSxFQUF5QztJQUN2QztJQUNBO0lBQ01LLFVBQUFBLFlBQVksR0FBbEIsSUFBTUE7O0lBQ04sYUFBQSxJQUFBLEVBQWE7SUFDWCxZQUFNQyxhQUFhLEdBQUdmLElBQUksQ0FBMUIsYUFBQTtJQUNBLFlBQU1nQixRQUFRLEdBQUduQixXQUFXLENBQTVCLElBQTRCLENBQTVCOztJQUNBLFlBQ0VrQixhQUFhLElBQ2IsQ0FBQ0EsYUFBYSxDQURkQSxVQUFBQSxJQUVBTCxhQUFhLENBQWJBLGFBQWEsQ0FBYkEsS0FIRixJQUFBO0lBQUEsVUFJRTtJQUNBO0lBQ0E7SUFDT0wsaUJBQUFBLFVBQVUsQ0FBakIsSUFBaUIsQ0FBVkE7SUFQVCxTQUFBLE1BUU8sSUFBSUwsSUFBSSxDQUFSLFlBQUEsRUFBdUI7SUFDNUI7SUFDQUEsVUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQVhBLFlBQUFBO0lBRkssU0FBQSxNQUdBLElBQUksQ0FBQSxhQUFBLElBQWtCZ0IsUUFBUSxLQUFLaEIsSUFBSSxDQUF2QyxhQUFBLEVBQXVEO0lBQzVEO0lBQ0FBLFVBQUFBLElBQUksR0FBR2dCLFFBQVEsQ0FBZmhCLElBQUFBO0lBRkssU0FBQSxNQUdBO0lBQ0w7SUFDQUEsVUFBQUEsSUFBSSxHQUFKQSxhQUFBQTtJQUNEO0lBQ0Y7O0lBQ0RBLE1BQUFBLElBQUksR0FBSkEsWUFBQUE7SUEzQjBDLEtBQUE7SUE4QjVDO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7OztJQUNBLFdBQU8sQ0FBQ0EsSUFBSSxDQUFKQSxjQUFBQSxHQUFSLE1BQUE7SUF2Q0YsR0FBQSxNQXdDTyxJQUFJUyxZQUFZLEtBQWhCLGVBQUEsRUFBc0M7SUFDcENKLFdBQUFBLFVBQVUsQ0FBakIsSUFBaUIsQ0FBVkE7SUFDUjs7SUFFRCxTQUFBLEtBQUE7SUF2REYsQ0FBQTtJQTJEQTtJQUNBOzs7SUFDQSxJQUFNWSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUEsSUFBQSxFQUFnQjtJQUM3QyxNQUFJLG1DQUFBLElBQUEsQ0FBd0NqQixJQUFJLENBQWhELE9BQUksQ0FBSixFQUEyRDtJQUN6RCxRQUFJa0IsVUFBVSxHQUFHbEIsSUFBSSxDQURvQyxhQUN6RCxDQUR5RDs7SUFHekQsV0FBQSxVQUFBLEVBQW1CO0lBQ2JrQixVQUFBQSxVQUFVLENBQVZBLE9BQUFBLEtBQUFBLFVBQUFBLElBQXFDQSxVQUFVLENBQW5ELFFBQUlBLEVBQTBEO0lBQzVEO0lBQ0EsYUFBSyxJQUFJakksQ0FBQyxHQUFWLENBQUEsRUFBZ0JBLENBQUMsR0FBR2lJLFVBQVUsQ0FBVkEsUUFBQUEsQ0FBcEIsTUFBQSxFQUFnRGpJLENBQWhELEVBQUEsRUFBcUQ7SUFDN0NtSCxjQUFBQSxLQUFLLEdBQUdjLFVBQVUsQ0FBVkEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FEcUMsQ0FDckNBLENBQVJkLENBRDZDOztJQUduRCxjQUFJQSxLQUFLLENBQUxBLE9BQUFBLEtBQUosUUFBQSxFQUFnQztJQUM5QjtJQUNBO0lBQ0EsbUJBQU9ULE9BQU8sQ0FBUEEsSUFBQUEsQ0FBQUEsVUFBQUEsRUFBQUEsc0JBQUFBLElBQUFBLElBQUFBLEdBRUgsQ0FBQ1MsS0FBSyxDQUFMQSxRQUFBQSxDQUZMLElBRUtBLENBRkw7SUFHRDtJQVh5RCxTQUFBOzs7SUFjNUQsZUFBQSxJQUFBO0lBQ0Q7O0lBQ0RjLE1BQUFBLFVBQVUsR0FBR0EsVUFBVSxDQUF2QkEsYUFBQUE7SUFDRDtJQXRCMEMsR0FBQTtJQTBCN0M7OztJQUNBLFNBQUEsS0FBQTtJQTNCRixDQUFBOztJQThCQSxJQUFNQywrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQWtDLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBeUI7SUFDL0QsTUFDRW5CLElBQUksQ0FBSkEsUUFBQUEsSUFDQUMsYUFBYSxDQURiRCxJQUNhLENBRGJBLElBRUFRLFFBQVEsQ0FBQSxJQUFBLEVBRlJSLE9BRVEsQ0FGUkE7SUFJQUUsRUFBQUEsb0JBQW9CLENBSnBCRixJQUlvQixDQUpwQkEsSUFLQWlCLHNCQUFzQixDQU54QixJQU13QixDQU54QixFQU9FO0lBQ0EsV0FBQSxLQUFBO0lBQ0Q7O0lBQ0QsU0FBQSxJQUFBO0lBWEYsQ0FBQTs7SUFtSEEsSUFBTUcsMEJBQTBCLGtCQUFtQjNCLGtCQUFrQixDQUFsQkEsTUFBQUEsQ0FBQUEsUUFBQUEsRUFBQUEsSUFBQUEsQ0FBbkQsR0FBbURBLENBQW5EOztJQUlNNEIsSUFBQUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUF5QjtJQUMzQzlILEVBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFqQkEsRUFBQUE7O0lBQ0ksTUFBQSxDQUFKLElBQUksRUFBTztJQUNULFVBQU0sSUFBQSxLQUFBLENBQU4sa0JBQU0sQ0FBTjtJQUNEOztJQUNHb0csTUFBQUEsT0FBTyxDQUFQQSxJQUFBQSxDQUFBQSxJQUFBQSxFQUFBQSwwQkFBQUEsTUFBSixLQUFJQSxFQUEwRDtJQUM1RCxXQUFBLEtBQUE7SUFDRDs7SUFDRCxTQUFPd0IsK0JBQStCLENBQUEsT0FBQSxFQUF0QyxJQUFzQyxDQUF0QztJQUNELENBVEtFOzs7OztJQ3pjTCxhQUFVQyxNQUFWLEVBQWtCeEYsT0FBbEIsRUFBMkI7SUFDMUIsSUFBK0RBLE9BQU8sRUFBdEUsQ0FBQTtJQUdELEdBSkEsRUFJQ3lGLGNBSkQsRUFJUSxZQUFZOztJQUVuQixRQUFJQyxZQUFZLEdBQUcsWUFBWTtJQUFFLGVBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUFrQzlJLEtBQWxDLEVBQXlDO0lBQUUsYUFBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxLQUFLLENBQUMyQixNQUExQixFQUFrQ3RCLENBQUMsRUFBbkMsRUFBdUM7SUFBRSxjQUFJMEksVUFBVSxHQUFHL0ksS0FBSyxDQUFDSyxDQUFELENBQXRCO0lBQTJCMEksVUFBQUEsVUFBVSxDQUFDQyxVQUFYLEdBQXdCRCxVQUFVLENBQUNDLFVBQVgsSUFBeUIsS0FBakQ7SUFBd0RELFVBQUFBLFVBQVUsQ0FBQ0UsWUFBWCxHQUEwQixJQUExQjtJQUFnQyxjQUFJLFdBQVdGLFVBQWYsRUFBMkJBLFVBQVUsQ0FBQ0csUUFBWCxHQUFzQixJQUF0QjtJQUE0QkMsVUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCTixNQUF0QixFQUE4QkMsVUFBVSxDQUFDOUksR0FBekMsRUFBOEM4SSxVQUE5QztJQUE0RDtJQUFFOztJQUFDLGFBQU8sVUFBVU0sV0FBVixFQUF1QkMsVUFBdkIsRUFBbUNDLFdBQW5DLEVBQWdEO0lBQUUsWUFBSUQsVUFBSixFQUFnQlQsZ0JBQWdCLENBQUNRLFdBQVcsQ0FBQ0csU0FBYixFQUF3QkYsVUFBeEIsQ0FBaEI7SUFBcUQsWUFBSUMsV0FBSixFQUFpQlYsZ0JBQWdCLENBQUNRLFdBQUQsRUFBY0UsV0FBZCxDQUFoQjtJQUE0QyxlQUFPRixXQUFQO0lBQXFCLE9BQWhOO0lBQW1OLEtBQTloQixFQUFuQjs7SUFFQSxhQUFTSSxlQUFULENBQXlCQyxRQUF6QixFQUFtQ0wsV0FBbkMsRUFBZ0Q7SUFBRSxVQUFJLEVBQUVLLFFBQVEsWUFBWUwsV0FBdEIsQ0FBSixFQUF3QztJQUFFLGNBQU0sSUFBSU0sU0FBSixDQUFjLG1DQUFkLENBQU47SUFBMkQ7SUFBRTs7SUFHM0o7SUFDQTtJQUNBOzs7SUFFRSxLQUFDLFlBQVk7O0lBRVgsVUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDO0lBQ0QsT0FKVTs7Ozs7SUFRWCxVQUFJQyxLQUFLLEdBQUc1RCxLQUFLLENBQUN1RCxTQUFOLENBQWdCSyxLQUE1Qjs7SUFHSjtJQUNBO0lBQ0E7O0lBQ0ksVUFBSTlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDd0MsU0FBUixDQUFrQnpDLE9BQWxCLElBQTZCQyxPQUFPLENBQUN3QyxTQUFSLENBQWtCTSxpQkFBN0Q7OztJQUdBLFVBQUlDLHdCQUF3QixHQUFHLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsdUJBQTFCLEVBQW1ELHdCQUFuRCxFQUE2RSwwQkFBN0UsRUFBeUcsd0JBQXpHLEVBQW1JLFNBQW5JLEVBQThJLFNBQTlJLEVBQXlKLFFBQXpKLEVBQW1LLFFBQW5LLEVBQTZLLE9BQTdLLEVBQXNMLG1CQUF0TCxFQUEyTUMsSUFBM00sQ0FBZ04sR0FBaE4sQ0FBL0I7O0lBR0o7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOzs7SUFFSSxVQUFJQyxTQUFTLEdBQUcsWUFBWTs7SUFFaEM7SUFDQTtJQUNBO0lBQ00saUJBQVNBLFNBQVQsQ0FBbUJDLFdBQW5CLEVBQWdDQyxZQUFoQyxFQUE4QztJQUM1Q1YsVUFBQUEsZUFBZSxDQUFDLElBQUQsRUFBT1EsU0FBUCxDQUFmOzs7O0lBR0EsZUFBS0csYUFBTCxHQUFxQkQsWUFBckI7OztJQUdBLGVBQUtFLFlBQUwsR0FBb0JILFdBQXBCOztJQUdSO0lBQ0E7SUFDQTs7SUFDUSxlQUFLSSxhQUFMLEdBQXFCLElBQUlDLEdBQUosRUFBckIsQ0FiNEM7O0lBZ0I1QyxjQUFJLEtBQUtGLFlBQUwsQ0FBa0JHLFlBQWxCLENBQStCLGFBQS9CLENBQUosRUFBbUQ7O0lBRWpELGlCQUFLQyxnQkFBTCxHQUF3QixLQUFLSixZQUFMLENBQWtCSyxZQUFsQixDQUErQixhQUEvQixDQUF4QjtJQUNELFdBSEQsTUFHTztJQUNMLGlCQUFLRCxnQkFBTCxHQUF3QixJQUF4QjtJQUNEOztJQUNELGVBQUtKLFlBQUwsQ0FBa0JNLFlBQWxCLENBQStCLGFBQS9CLEVBQThDLE1BQTlDLEVBdEI0Qzs7O0lBeUI1QyxlQUFLQyx1QkFBTCxDQUE2QixLQUFLUCxZQUFsQyxFQXpCNEM7Ozs7Ozs7SUFnQzVDLGVBQUtRLFNBQUwsR0FBaUIsSUFBSUMsZ0JBQUosQ0FBcUIsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBckIsQ0FBakI7O0lBQ0EsZUFBS0gsU0FBTCxDQUFlSSxPQUFmLENBQXVCLEtBQUtaLFlBQTVCLEVBQTBDO0lBQUVhLFlBQUFBLFVBQVUsRUFBRSxJQUFkO0lBQW9CQyxZQUFBQSxTQUFTLEVBQUUsSUFBL0I7SUFBcUNDLFlBQUFBLE9BQU8sRUFBRTtJQUE5QyxXQUExQztJQUNEOztJQUdQO0lBQ0E7SUFDQTs7O0lBR014QyxRQUFBQSxZQUFZLENBQUNxQixTQUFELEVBQVksQ0FBQztJQUN2QmhLLFVBQUFBLEdBQUcsRUFBRSxZQURrQjtJQUV2QnVELFVBQUFBLEtBQUssRUFBRSxTQUFTNkgsVUFBVCxHQUFzQjtJQUMzQixpQkFBS1IsU0FBTCxDQUFlUyxVQUFmOztJQUVBLGdCQUFJLEtBQUtqQixZQUFULEVBQXVCO0lBQ3JCLGtCQUFJLEtBQUtJLGdCQUFMLEtBQTBCLElBQTlCLEVBQW9DO0lBQ2xDLHFCQUFLSixZQUFMLENBQWtCTSxZQUFsQixDQUErQixhQUEvQixFQUE4QyxLQUFLRixnQkFBbkQ7SUFDRCxlQUZELE1BRU87SUFDTCxxQkFBS0osWUFBTCxDQUFrQmtCLGVBQWxCLENBQWtDLGFBQWxDO0lBQ0Q7SUFDRjs7SUFFRCxpQkFBS2pCLGFBQUwsQ0FBbUJ2RyxPQUFuQixDQUEyQixVQUFVeUgsU0FBVixFQUFxQjtJQUM5QyxtQkFBS0MsYUFBTCxDQUFtQkQsU0FBUyxDQUFDcEUsSUFBN0I7SUFDRCxhQUZELEVBRUcsSUFGSCxFQVgyQjs7Ozs7Ozs7SUFxQjNCLGlCQUFLeUQsU0FBTDs7SUFBaUMsZ0JBQWpDO0lBQ0EsaUJBQUtSLFlBQUw7O0lBQW9DLGdCQUFwQztJQUNBLGlCQUFLQyxhQUFMOztJQUFxQyxnQkFBckM7SUFDQSxpQkFBS0YsYUFBTDs7SUFBcUMsZ0JBQXJDO0lBQ0Q7O0lBR1Q7SUFDQTs7SUEvQitCLFNBQUQsRUFpQ3JCO0lBQ0RuSyxVQUFBQSxHQUFHLEVBQUUseUJBREo7OztJQUtUO0lBQ0E7SUFDUXVELFVBQUFBLEtBQUssRUFBRSxTQUFTb0gsdUJBQVQsQ0FBaUNjLFNBQWpDLEVBQTRDO0lBQ2pELGdCQUFJQyxNQUFNLEdBQUcsSUFBYjs7SUFFQUMsWUFBQUEsZ0JBQWdCLENBQUNGLFNBQUQsRUFBWSxVQUFVdEUsSUFBVixFQUFnQjtJQUMxQyxxQkFBT3VFLE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQnpFLElBQWxCLENBQVA7SUFDRCxhQUZlLENBQWhCO0lBSUEsZ0JBQUkwRSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0QsYUFBN0I7O0lBRUEsZ0JBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFULENBQWNDLFFBQWQsQ0FBdUJQLFNBQXZCLENBQUwsRUFBd0M7O0lBRXRDLGtCQUFJdEUsSUFBSSxHQUFHc0UsU0FBWDs7O0lBRUEsa0JBQUlRLElBQUksR0FBRzFMLFNBQVg7O0lBQ0EscUJBQU80RyxJQUFQLEVBQWE7SUFDWCxvQkFBSUEsSUFBSSxDQUFDK0UsUUFBTCxLQUFrQkMsSUFBSSxDQUFDQyxzQkFBM0IsRUFBbUQ7SUFDakRILGtCQUFBQSxJQUFJOztJQUE2QjlFLGtCQUFBQSxJQUFqQztJQUNBO0lBQ0Q7O0lBQ0RBLGdCQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2tCLFVBQVo7SUFDRDs7SUFDRCxrQkFBSTRELElBQUosRUFBVTtJQUNSSixnQkFBQUEsYUFBYSxHQUFHSSxJQUFJLENBQUNKLGFBQXJCO0lBQ0Q7SUFDRjs7SUFDRCxnQkFBSUosU0FBUyxDQUFDTyxRQUFWLENBQW1CSCxhQUFuQixDQUFKLEVBQXVDO0lBQ3JDQSxjQUFBQSxhQUFhLENBQUNRLElBQWQsR0FEcUM7Ozs7SUFLckMsa0JBQUlSLGFBQWEsS0FBS0MsUUFBUSxDQUFDRCxhQUEvQixFQUE4QztJQUM1Q0MsZ0JBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjTyxLQUFkO0lBQ0Q7SUFDRjtJQUNGOztJQUdUO0lBQ0E7O0lBN0NTLFNBakNxQixFQWdGckI7SUFDRHRNLFVBQUFBLEdBQUcsRUFBRSxZQURKO0lBRUR1RCxVQUFBQSxLQUFLLEVBQUUsU0FBU3FJLFVBQVQsQ0FBb0J6RSxJQUFwQixFQUEwQjtJQUMvQixnQkFBSUEsSUFBSSxDQUFDK0UsUUFBTCxLQUFrQkMsSUFBSSxDQUFDSSxZQUEzQixFQUF5QztJQUN2QztJQUNEOztJQUNELGdCQUFJdEYsT0FBTzs7SUFBMEJFLFlBQUFBLElBQXJDLENBSitCOzs7SUFRL0IsZ0JBQUlGLE9BQU8sS0FBSyxLQUFLbUQsWUFBakIsSUFBaUNuRCxPQUFPLENBQUNzRCxZQUFSLENBQXFCLE9BQXJCLENBQXJDLEVBQW9FO0lBQ2xFLG1CQUFLaUMsZUFBTCxDQUFxQnZGLE9BQXJCO0lBQ0Q7O0lBRUQsZ0JBQUlILE9BQU8sQ0FBQzJGLElBQVIsQ0FBYXhGLE9BQWIsRUFBc0I2Qyx3QkFBdEIsS0FBbUQ3QyxPQUFPLENBQUNzRCxZQUFSLENBQXFCLFVBQXJCLENBQXZELEVBQXlGO0lBQ3ZGLG1CQUFLbUMsV0FBTCxDQUFpQnpGLE9BQWpCO0lBQ0Q7SUFDRjs7SUFHVDtJQUNBO0lBQ0E7O0lBdEJTLFNBaEZxQixFQXdHckI7SUFDRGpILFVBQUFBLEdBQUcsRUFBRSxhQURKO0lBRUR1RCxVQUFBQSxLQUFLLEVBQUUsU0FBU21KLFdBQVQsQ0FBcUJ2RixJQUFyQixFQUEyQjtJQUNoQyxnQkFBSW9FLFNBQVMsR0FBRyxLQUFLcEIsYUFBTCxDQUFtQndDLFFBQW5CLENBQTRCeEYsSUFBNUIsRUFBa0MsSUFBbEMsQ0FBaEI7O0lBQ0EsaUJBQUtrRCxhQUFMLENBQW1CdUMsR0FBbkIsQ0FBdUJyQixTQUF2QjtJQUNEOztJQUdUO0lBQ0E7SUFDQTs7SUFWUyxTQXhHcUIsRUFvSHJCO0lBQ0R2TCxVQUFBQSxHQUFHLEVBQUUsZUFESjtJQUVEdUQsVUFBQUEsS0FBSyxFQUFFLFNBQVNpSSxhQUFULENBQXVCckUsSUFBdkIsRUFBNkI7SUFDbEMsZ0JBQUlvRSxTQUFTLEdBQUcsS0FBS3BCLGFBQUwsQ0FBbUIwQyxVQUFuQixDQUE4QjFGLElBQTlCLEVBQW9DLElBQXBDLENBQWhCOztJQUNBLGdCQUFJb0UsU0FBSixFQUFlO0lBQ2IsbUJBQUtsQixhQUFMLENBQW1CLFFBQW5CLEVBQTZCa0IsU0FBN0I7SUFDRDtJQUNGOztJQUdUO0lBQ0E7SUFDQTs7SUFaUyxTQXBIcUIsRUFrSXJCO0lBQ0R2TCxVQUFBQSxHQUFHLEVBQUUsa0JBREo7SUFFRHVELFVBQUFBLEtBQUssRUFBRSxTQUFTdUosZ0JBQVQsQ0FBMEJyQixTQUExQixFQUFxQztJQUMxQyxnQkFBSXNCLE1BQU0sR0FBRyxJQUFiOztJQUVBcEIsWUFBQUEsZ0JBQWdCLENBQUNGLFNBQUQsRUFBWSxVQUFVdEUsSUFBVixFQUFnQjtJQUMxQyxxQkFBTzRGLE1BQU0sQ0FBQ3ZCLGFBQVAsQ0FBcUJyRSxJQUFyQixDQUFQO0lBQ0QsYUFGZSxDQUFoQjtJQUdEOztJQUdUO0lBQ0E7SUFDQTs7SUFiUyxTQWxJcUIsRUFpSnJCO0lBQ0RuSCxVQUFBQSxHQUFHLEVBQUUsaUJBREo7SUFFRHVELFVBQUFBLEtBQUssRUFBRSxTQUFTaUosZUFBVCxDQUF5QnJGLElBQXpCLEVBQStCO0lBQ3BDLGdCQUFJNkYsWUFBWSxHQUFHLEtBQUs3QyxhQUFMLENBQW1COEMsWUFBbkIsQ0FBZ0M5RixJQUFoQyxDQUFuQixDQURvQzs7OztJQUtwQyxnQkFBSSxDQUFDNkYsWUFBTCxFQUFtQjtJQUNqQixtQkFBSzdDLGFBQUwsQ0FBbUIrQyxRQUFuQixDQUE0Qi9GLElBQTVCLEVBQWtDLElBQWxDOztJQUNBNkYsY0FBQUEsWUFBWSxHQUFHLEtBQUs3QyxhQUFMLENBQW1COEMsWUFBbkIsQ0FBZ0M5RixJQUFoQyxDQUFmO0lBQ0Q7O0lBRUQ2RixZQUFBQSxZQUFZLENBQUNHLFlBQWIsQ0FBMEJySixPQUExQixDQUFrQyxVQUFVc0osY0FBVixFQUEwQjtJQUMxRCxtQkFBS1YsV0FBTCxDQUFpQlUsY0FBYyxDQUFDakcsSUFBaEM7SUFDRCxhQUZELEVBRUcsSUFGSDtJQUdEOztJQUdUO0lBQ0E7SUFDQTtJQUNBOztJQXJCUyxTQWpKcUIsRUF3S3JCO0lBQ0RuSCxVQUFBQSxHQUFHLEVBQUUsYUFESjtJQUVEdUQsVUFBQUEsS0FBSyxFQUFFLFNBQVN1SCxXQUFULENBQXFCdUMsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DO0lBQ3pDRCxZQUFBQSxPQUFPLENBQUN2SixPQUFSLENBQWdCLFVBQVV5SixNQUFWLEVBQWtCO0lBQ2hDLGtCQUFJMUUsTUFBTTs7SUFBMEIwRSxjQUFBQSxNQUFNLENBQUMxRSxNQUEzQzs7SUFDQSxrQkFBSTBFLE1BQU0sQ0FBQ3pOLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7O0lBRS9COEosZ0JBQUFBLEtBQUssQ0FBQzZDLElBQU4sQ0FBV2MsTUFBTSxDQUFDQyxVQUFsQixFQUE4QjFKLE9BQTlCLENBQXNDLFVBQVVxRCxJQUFWLEVBQWdCO0lBQ3BELHVCQUFLd0QsdUJBQUwsQ0FBNkJ4RCxJQUE3QjtJQUNELGlCQUZELEVBRUcsSUFGSCxFQUYrQjs7SUFPL0J5QyxnQkFBQUEsS0FBSyxDQUFDNkMsSUFBTixDQUFXYyxNQUFNLENBQUNFLFlBQWxCLEVBQWdDM0osT0FBaEMsQ0FBd0MsVUFBVXFELElBQVYsRUFBZ0I7SUFDdEQsdUJBQUsyRixnQkFBTCxDQUFzQjNGLElBQXRCO0lBQ0QsaUJBRkQsRUFFRyxJQUZIO0lBR0QsZUFWRCxNQVVPLElBQUlvRyxNQUFNLENBQUN6TixJQUFQLEtBQWdCLFlBQXBCLEVBQWtDO0lBQ3ZDLG9CQUFJeU4sTUFBTSxDQUFDRyxhQUFQLEtBQXlCLFVBQTdCLEVBQXlDOztJQUV2Qyx1QkFBS2hCLFdBQUwsQ0FBaUI3RCxNQUFqQjtJQUNELGlCQUhELE1BR08sSUFBSUEsTUFBTSxLQUFLLEtBQUt1QixZQUFoQixJQUFnQ21ELE1BQU0sQ0FBQ0csYUFBUCxLQUF5QixPQUF6RCxJQUFvRTdFLE1BQU0sQ0FBQzBCLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBeEUsRUFBc0c7OztJQUczRyx1QkFBS2lDLGVBQUwsQ0FBcUIzRCxNQUFyQjs7SUFDQSxzQkFBSW1FLFlBQVksR0FBRyxLQUFLN0MsYUFBTCxDQUFtQjhDLFlBQW5CLENBQWdDcEUsTUFBaEMsQ0FBbkI7O0lBQ0EsdUJBQUt3QixhQUFMLENBQW1CdkcsT0FBbkIsQ0FBMkIsVUFBVTZKLFdBQVYsRUFBdUI7SUFDaEQsd0JBQUk5RSxNQUFNLENBQUNtRCxRQUFQLENBQWdCMkIsV0FBVyxDQUFDeEcsSUFBNUIsQ0FBSixFQUF1QztJQUNyQzZGLHNCQUFBQSxZQUFZLENBQUNOLFdBQWIsQ0FBeUJpQixXQUFXLENBQUN4RyxJQUFyQztJQUNEO0lBQ0YsbUJBSkQ7SUFLRDtJQUNGO0lBQ0YsYUE1QkQsRUE0QkcsSUE1Qkg7SUE2QkQ7SUFoQ0EsU0F4S3FCLEVBeU1yQjtJQUNEbkgsVUFBQUEsR0FBRyxFQUFFLGNBREo7SUFFRDROLFVBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULEdBQWU7SUFDbEIsbUJBQU8sSUFBSXRELEdBQUosQ0FBUSxLQUFLRCxhQUFiLENBQVA7SUFDRDs7O0lBSkEsU0F6TXFCLEVBaU5yQjtJQUNEckssVUFBQUEsR0FBRyxFQUFFLG9CQURKO0lBRUQ0TixVQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBVCxHQUFlO0lBQ2xCLG1CQUFPLEtBQUtwRCxnQkFBTCxLQUEwQixJQUFqQztJQUNEOzs7SUFKQSxTQWpOcUIsRUF5TnJCO0lBQ0R4SyxVQUFBQSxHQUFHLEVBQUUsaUJBREo7SUFFRDZOLFVBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULENBQWFDLFVBQWIsRUFBeUI7SUFDNUIsaUJBQUt0RCxnQkFBTCxHQUF3QnNELFVBQXhCO0lBQ0Q7O0lBSkE7SUFRREYsVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZTtJQUNsQixtQkFBTyxLQUFLcEQsZ0JBQVo7SUFDRDtJQVZBLFNBek5xQixDQUFaLENBQVo7O0lBc09BLGVBQU9SLFNBQVA7SUFDRCxPQXRSZSxFQUFoQjs7SUF5Uko7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7OztJQUdJLFVBQUkrRCxTQUFTLEdBQUcsWUFBWTs7SUFFaEM7SUFDQTtJQUNBO0lBQ00saUJBQVNBLFNBQVQsQ0FBbUI1RyxJQUFuQixFQUF5QjZHLFNBQXpCLEVBQW9DO0lBQ2xDeEUsVUFBQUEsZUFBZSxDQUFDLElBQUQsRUFBT3VFLFNBQVAsQ0FBZjs7OztJQUdBLGVBQUtFLEtBQUwsR0FBYTlHLElBQWI7OztJQUdBLGVBQUsrRyxvQkFBTCxHQUE0QixLQUE1Qjs7SUFHUjtJQUNBO0lBQ0E7O0lBQ1EsZUFBS0MsV0FBTCxHQUFtQixJQUFJN0QsR0FBSixDQUFRLENBQUMwRCxTQUFELENBQVIsQ0FBbkI7OztJQUdBLGVBQUtJLGNBQUwsR0FBc0IsSUFBdEI7OztJQUdBLGVBQUtDLFVBQUwsR0FBa0IsS0FBbEIsQ0FuQmtDOztJQXNCbEMsZUFBS0MsZ0JBQUw7SUFDRDs7SUFHUDtJQUNBO0lBQ0E7OztJQUdNM0YsUUFBQUEsWUFBWSxDQUFDb0YsU0FBRCxFQUFZLENBQUM7SUFDdkIvTixVQUFBQSxHQUFHLEVBQUUsWUFEa0I7SUFFdkJ1RCxVQUFBQSxLQUFLLEVBQUUsU0FBUzZILFVBQVQsR0FBc0I7SUFDM0IsaUJBQUttRCxpQkFBTDs7SUFFQSxnQkFBSSxLQUFLTixLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXL0IsUUFBWCxLQUF3QkMsSUFBSSxDQUFDSSxZQUEvQyxFQUE2RDtJQUMzRCxrQkFBSXRGLE9BQU87O0lBQTBCLG1CQUFLZ0gsS0FBMUM7O0lBQ0Esa0JBQUksS0FBS0csY0FBTCxLQUF3QixJQUE1QixFQUFrQztJQUNoQ25ILGdCQUFBQSxPQUFPLENBQUN5RCxZQUFSLENBQXFCLFVBQXJCLEVBQWlDLEtBQUswRCxjQUF0QztJQUNELGVBRkQsTUFFTztJQUNMbkgsZ0JBQUFBLE9BQU8sQ0FBQ3FFLGVBQVIsQ0FBd0IsVUFBeEI7SUFDRCxlQU4wRDs7O0lBUzNELGtCQUFJLEtBQUs0QyxvQkFBVCxFQUErQjtJQUM3Qix1QkFBT2pILE9BQU8sQ0FBQ3FGLEtBQWY7SUFDRDtJQUNGLGFBZjBCOzs7SUFrQjNCLGlCQUFLMkIsS0FBTDs7SUFBNkIsZ0JBQTdCO0lBQ0EsaUJBQUtFLFdBQUw7O0lBQW1DLGdCQUFuQztJQUNBLGlCQUFLRSxVQUFMLEdBQWtCLElBQWxCO0lBQ0Q7O0lBR1Q7SUFDQTtJQUNBOztJQTVCK0IsU0FBRCxFQThCckI7SUFDRHJPLFVBQUFBLEdBQUcsRUFBRSxtQkFESjs7O0lBS1Q7SUFDQTtJQUNRdUQsVUFBQUEsS0FBSyxFQUFFLFNBQVNnTCxpQkFBVCxHQUE2QjtJQUNsQyxnQkFBSSxLQUFLQyxTQUFULEVBQW9CO0lBQ2xCLG9CQUFNLElBQUlDLEtBQUosQ0FBVSxzQ0FBVixDQUFOO0lBQ0Q7SUFDRjs7O0lBWEEsU0E5QnFCLEVBNkNyQjtJQUNEek8sVUFBQUEsR0FBRyxFQUFFLGtCQURKOzs7SUFLRHVELFVBQUFBLEtBQUssRUFBRSxTQUFTK0ssZ0JBQVQsR0FBNEI7SUFDakMsZ0JBQUksS0FBS25ILElBQUwsQ0FBVStFLFFBQVYsS0FBdUJDLElBQUksQ0FBQ0ksWUFBaEMsRUFBOEM7SUFDNUM7SUFDRDs7SUFDRCxnQkFBSXRGLE9BQU87O0lBQTBCLGlCQUFLRSxJQUExQzs7SUFDQSxnQkFBSUwsT0FBTyxDQUFDMkYsSUFBUixDQUFheEYsT0FBYixFQUFzQjZDLHdCQUF0QixDQUFKLEVBQXFEO0lBQ25EOztJQUFnQzdDLGNBQUFBLE9BQU8sQ0FBQ3lILFFBQVIsS0FBcUIsQ0FBQyxDQUF0QixJQUEyQixLQUFLQyxnQkFBaEUsRUFBa0Y7SUFDaEY7SUFDRDs7SUFFRCxrQkFBSTFILE9BQU8sQ0FBQ3NELFlBQVIsQ0FBcUIsVUFBckIsQ0FBSixFQUFzQztJQUNwQyxxQkFBSzZELGNBQUw7O0lBQWlEbkgsZ0JBQUFBLE9BQU8sQ0FBQ3lILFFBQXpEO0lBQ0Q7O0lBQ0R6SCxjQUFBQSxPQUFPLENBQUN5RCxZQUFSLENBQXFCLFVBQXJCLEVBQWlDLElBQWpDOztJQUNBLGtCQUFJekQsT0FBTyxDQUFDaUYsUUFBUixLQUFxQkMsSUFBSSxDQUFDSSxZQUE5QixFQUE0QztJQUMxQ3RGLGdCQUFBQSxPQUFPLENBQUNxRixLQUFSLEdBQWdCLFlBQVksRUFBNUI7O0lBQ0EscUJBQUs0QixvQkFBTCxHQUE0QixJQUE1QjtJQUNEO0lBQ0YsYUFiRCxNQWFPLElBQUlqSCxPQUFPLENBQUNzRCxZQUFSLENBQXFCLFVBQXJCLENBQUosRUFBc0M7SUFDM0MsbUJBQUs2RCxjQUFMOztJQUFpRG5ILGNBQUFBLE9BQU8sQ0FBQ3lILFFBQXpEO0lBQ0F6SCxjQUFBQSxPQUFPLENBQUNxRSxlQUFSLENBQXdCLFVBQXhCO0lBQ0Q7SUFDRjs7SUFHVDtJQUNBO0lBQ0E7O0lBaENTLFNBN0NxQixFQStFckI7SUFDRHRMLFVBQUFBLEdBQUcsRUFBRSxjQURKO0lBRUR1RCxVQUFBQSxLQUFLLEVBQUUsU0FBU3FMLFlBQVQsQ0FBc0JaLFNBQXRCLEVBQWlDO0lBQ3RDLGlCQUFLTyxpQkFBTDs7SUFDQSxpQkFBS0osV0FBTCxDQUFpQnZCLEdBQWpCLENBQXFCb0IsU0FBckI7SUFDRDs7SUFHVDtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQVpTLFNBL0VxQixFQTZGckI7SUFDRGhPLFVBQUFBLEdBQUcsRUFBRSxpQkFESjtJQUVEdUQsVUFBQUEsS0FBSyxFQUFFLFNBQVNzTCxlQUFULENBQXlCYixTQUF6QixFQUFvQztJQUN6QyxpQkFBS08saUJBQUw7O0lBQ0EsaUJBQUtKLFdBQUwsQ0FBaUIsUUFBakIsRUFBMkJILFNBQTNCOztJQUNBLGdCQUFJLEtBQUtHLFdBQUwsQ0FBaUJXLElBQWpCLEtBQTBCLENBQTlCLEVBQWlDO0lBQy9CLG1CQUFLMUQsVUFBTDtJQUNEO0lBQ0Y7SUFSQSxTQTdGcUIsRUFzR3JCO0lBQ0RwTCxVQUFBQSxHQUFHLEVBQUUsV0FESjtJQUVENE4sVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZTtJQUNsQjs7SUFBaUMsbUJBQUtTO0lBQXRDO0lBRUQ7SUFMQSxTQXRHcUIsRUE0R3JCO0lBQ0RyTyxVQUFBQSxHQUFHLEVBQUUsa0JBREo7SUFFRDROLFVBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFULEdBQWU7SUFDbEIsbUJBQU8sS0FBS1EsY0FBTCxLQUF3QixJQUEvQjtJQUNEOzs7SUFKQSxTQTVHcUIsRUFvSHJCO0lBQ0RwTyxVQUFBQSxHQUFHLEVBQUUsTUFESjtJQUVENE4sVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZTtJQUNsQixpQkFBS1csaUJBQUw7O0lBQ0EsbUJBQU8sS0FBS04sS0FBWjtJQUNEOzs7SUFMQSxTQXBIcUIsRUE2SHJCO0lBQ0RqTyxVQUFBQSxHQUFHLEVBQUUsZUFESjtJQUVENk4sVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYWEsUUFBYixFQUF1QjtJQUMxQixpQkFBS0gsaUJBQUw7O0lBQ0EsaUJBQUtILGNBQUwsR0FBc0JNLFFBQXRCO0lBQ0Q7O0lBTEE7SUFTRGQsVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZTtJQUNsQixpQkFBS1csaUJBQUw7O0lBQ0EsbUJBQU8sS0FBS0gsY0FBWjtJQUNEO0lBWkEsU0E3SHFCLENBQVosQ0FBWjs7SUE0SUEsZUFBT0wsU0FBUDtJQUNELE9BakxlLEVBQWhCOztJQW9MSjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOzs7SUFHSSxVQUFJZ0IsWUFBWSxHQUFHLFlBQVk7O0lBRW5DO0lBQ0E7SUFDTSxpQkFBU0EsWUFBVCxDQUFzQmpELFFBQXRCLEVBQWdDO0lBQzlCdEMsVUFBQUEsZUFBZSxDQUFDLElBQUQsRUFBT3VGLFlBQVAsQ0FBZjs7SUFFQSxjQUFJLENBQUNqRCxRQUFMLEVBQWU7SUFDYixrQkFBTSxJQUFJMkMsS0FBSixDQUFVLG1FQUFWLENBQU47SUFDRDs7OztJQUdELGVBQUtPLFNBQUwsR0FBaUJsRCxRQUFqQjs7SUFHUjtJQUNBO0lBQ0E7O0lBQ1EsZUFBS3pCLGFBQUwsR0FBcUIsSUFBSTRFLEdBQUosRUFBckI7O0lBR1I7SUFDQTtJQUNBOztJQUNRLGVBQUtkLFdBQUwsR0FBbUIsSUFBSWMsR0FBSixFQUFuQjs7SUFHUjtJQUNBO0lBQ0E7O0lBQ1EsZUFBS3JFLFNBQUwsR0FBaUIsSUFBSUMsZ0JBQUosQ0FBcUIsS0FBS3FFLGNBQUwsQ0FBb0JuRSxJQUFwQixDQUF5QixJQUF6QixDQUFyQixDQUFqQixDQTFCOEI7O0lBNkI5Qm9FLFVBQUFBLGFBQWEsQ0FBQ3JELFFBQVEsQ0FBQ3NELElBQVQsSUFBaUJ0RCxRQUFRLENBQUNDLElBQTFCLElBQWtDRCxRQUFRLENBQUN1RCxlQUE1QyxDQUFiLENBN0I4Qjs7SUFnQzlCLGNBQUl2RCxRQUFRLENBQUN3RCxVQUFULEtBQXdCLFNBQTVCLEVBQXVDO0lBQ3JDeEQsWUFBQUEsUUFBUSxDQUFDeUQsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLEtBQUtDLGlCQUFMLENBQXVCekUsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBOUM7SUFDRCxXQUZELE1BRU87SUFDTCxpQkFBS3lFLGlCQUFMO0lBQ0Q7SUFDRjs7SUFHUDtJQUNBO0lBQ0E7SUFDQTs7O0lBR003RyxRQUFBQSxZQUFZLENBQUNvRyxZQUFELEVBQWUsQ0FBQztJQUMxQi9PLFVBQUFBLEdBQUcsRUFBRSxVQURxQjtJQUUxQnVELFVBQUFBLEtBQUssRUFBRSxTQUFTMkosUUFBVCxDQUFrQmpCLElBQWxCLEVBQXdCd0QsS0FBeEIsRUFBK0I7SUFDcEMsZ0JBQUlBLEtBQUosRUFBVztJQUNULGtCQUFJLEtBQUt0QixXQUFMLENBQWlCdUIsR0FBakIsQ0FBcUJ6RCxJQUFyQixDQUFKLEVBQWdDOztJQUU5QjtJQUNEOztJQUVELGtCQUFJK0IsU0FBUyxHQUFHLElBQUloRSxTQUFKLENBQWNpQyxJQUFkLEVBQW9CLElBQXBCLENBQWhCO0lBQ0FBLGNBQUFBLElBQUksQ0FBQ3ZCLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsRUFBM0I7O0lBQ0EsbUJBQUt5RCxXQUFMLENBQWlCTixHQUFqQixDQUFxQjVCLElBQXJCLEVBQTJCK0IsU0FBM0IsRUFSUzs7OztJQVdULGtCQUFJLENBQUMsS0FBS2dCLFNBQUwsQ0FBZWpELElBQWYsQ0FBb0JDLFFBQXBCLENBQTZCQyxJQUE3QixDQUFMLEVBQXlDO0lBQ3ZDLG9CQUFJMEQsTUFBTSxHQUFHMUQsSUFBSSxDQUFDNUQsVUFBbEI7O0lBQ0EsdUJBQU9zSCxNQUFQLEVBQWU7SUFDYixzQkFBSUEsTUFBTSxDQUFDekQsUUFBUCxLQUFvQixFQUF4QixFQUE0QjtJQUMxQmlELG9CQUFBQSxhQUFhLENBQUNRLE1BQUQsQ0FBYjtJQUNEOztJQUNEQSxrQkFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUN0SCxVQUFoQjtJQUNEO0lBQ0Y7SUFDRixhQXBCRCxNQW9CTztJQUNMLGtCQUFJLENBQUMsS0FBSzhGLFdBQUwsQ0FBaUJ1QixHQUFqQixDQUFxQnpELElBQXJCLENBQUwsRUFBaUM7O0lBRS9CO0lBQ0Q7O0lBRUQsa0JBQUkyRCxVQUFVLEdBQUcsS0FBS3pCLFdBQUwsQ0FBaUJQLEdBQWpCLENBQXFCM0IsSUFBckIsQ0FBakI7O0lBQ0EyRCxjQUFBQSxVQUFVLENBQUN4RSxVQUFYOztJQUNBLG1CQUFLK0MsV0FBTCxDQUFpQixRQUFqQixFQUEyQmxDLElBQTNCOztJQUNBQSxjQUFBQSxJQUFJLENBQUNYLGVBQUwsQ0FBcUIsT0FBckI7SUFDRDtJQUNGOztJQUdUO0lBQ0E7SUFDQTtJQUNBOztJQXhDa0MsU0FBRCxFQTBDeEI7SUFDRHRMLFVBQUFBLEdBQUcsRUFBRSxjQURKO0lBRUR1RCxVQUFBQSxLQUFLLEVBQUUsU0FBUzBKLFlBQVQsQ0FBc0JoRyxPQUF0QixFQUErQjtJQUNwQyxtQkFBTyxLQUFLa0gsV0FBTCxDQUFpQlAsR0FBakIsQ0FBcUIzRyxPQUFyQixDQUFQO0lBQ0Q7O0lBR1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBYlMsU0ExQ3dCLEVBeUR4QjtJQUNEakgsVUFBQUEsR0FBRyxFQUFFLFVBREo7SUFFRHVELFVBQUFBLEtBQUssRUFBRSxTQUFTb0osUUFBVCxDQUFrQnhGLElBQWxCLEVBQXdCNkcsU0FBeEIsRUFBbUM7SUFDeEMsZ0JBQUl6QyxTQUFTLEdBQUcsS0FBS2xCLGFBQUwsQ0FBbUJ1RCxHQUFuQixDQUF1QnpHLElBQXZCLENBQWhCOztJQUNBLGdCQUFJb0UsU0FBUyxLQUFLaEwsU0FBbEIsRUFBNkI7O0lBRTNCZ0wsY0FBQUEsU0FBUyxDQUFDcUQsWUFBVixDQUF1QlosU0FBdkI7SUFDRCxhQUhELE1BR087SUFDTHpDLGNBQUFBLFNBQVMsR0FBRyxJQUFJd0MsU0FBSixDQUFjNUcsSUFBZCxFQUFvQjZHLFNBQXBCLENBQVo7SUFDRDs7SUFFRCxpQkFBSzNELGFBQUwsQ0FBbUJ3RCxHQUFuQixDQUF1QjFHLElBQXZCLEVBQTZCb0UsU0FBN0I7O0lBRUEsbUJBQU9BLFNBQVA7SUFDRDs7SUFHVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQXhCUyxTQXpEd0IsRUFtRnhCO0lBQ0R2TCxVQUFBQSxHQUFHLEVBQUUsWUFESjtJQUVEdUQsVUFBQUEsS0FBSyxFQUFFLFNBQVNzSixVQUFULENBQW9CMUYsSUFBcEIsRUFBMEI2RyxTQUExQixFQUFxQztJQUMxQyxnQkFBSXpDLFNBQVMsR0FBRyxLQUFLbEIsYUFBTCxDQUFtQnVELEdBQW5CLENBQXVCekcsSUFBdkIsQ0FBaEI7O0lBQ0EsZ0JBQUksQ0FBQ29FLFNBQUwsRUFBZ0I7SUFDZCxxQkFBTyxJQUFQO0lBQ0Q7O0lBRURBLFlBQUFBLFNBQVMsQ0FBQ3NELGVBQVYsQ0FBMEJiLFNBQTFCOztJQUNBLGdCQUFJekMsU0FBUyxDQUFDaUQsU0FBZCxFQUF5QjtJQUN2QixtQkFBS25FLGFBQUwsQ0FBbUIsUUFBbkIsRUFBNkJsRCxJQUE3QjtJQUNEOztJQUVELG1CQUFPb0UsU0FBUDtJQUNEOztJQUdUO0lBQ0E7O0lBbEJTLFNBbkZ3QixFQXVHeEI7SUFDRHZMLFVBQUFBLEdBQUcsRUFBRSxtQkFESjtJQUVEdUQsVUFBQUEsS0FBSyxFQUFFLFNBQVNpTSxpQkFBVCxHQUE2Qjs7SUFFbEMsZ0JBQUlLLGFBQWEsR0FBR2pHLEtBQUssQ0FBQzZDLElBQU4sQ0FBVyxLQUFLdUMsU0FBTCxDQUFlYyxnQkFBZixDQUFnQyxTQUFoQyxDQUFYLENBQXBCO0lBQ0FELFlBQUFBLGFBQWEsQ0FBQy9MLE9BQWQsQ0FBc0IsVUFBVWlNLFlBQVYsRUFBd0I7SUFDNUMsbUJBQUs3QyxRQUFMLENBQWM2QyxZQUFkLEVBQTRCLElBQTVCO0lBQ0QsYUFGRCxFQUVHLElBRkgsRUFIa0M7O0lBUWxDLGlCQUFLbkYsU0FBTCxDQUFlSSxPQUFmLENBQXVCLEtBQUtnRSxTQUFMLENBQWVqRCxJQUFmLElBQXVCLEtBQUtpRCxTQUFMLENBQWVLLGVBQTdELEVBQThFO0lBQUVwRSxjQUFBQSxVQUFVLEVBQUUsSUFBZDtJQUFvQkUsY0FBQUEsT0FBTyxFQUFFLElBQTdCO0lBQW1DRCxjQUFBQSxTQUFTLEVBQUU7SUFBOUMsYUFBOUU7SUFDRDs7SUFHVDtJQUNBO0lBQ0E7SUFDQTs7SUFqQlMsU0F2R3dCLEVBMEh4QjtJQUNEbEwsVUFBQUEsR0FBRyxFQUFFLGdCQURKO0lBRUR1RCxVQUFBQSxLQUFLLEVBQUUsU0FBUzJMLGNBQVQsQ0FBd0I3QixPQUF4QixFQUFpQ0MsSUFBakMsRUFBdUM7SUFDNUMsZ0JBQUkwQyxLQUFLLEdBQUcsSUFBWjs7SUFDQTNDLFlBQUFBLE9BQU8sQ0FBQ3ZKLE9BQVIsQ0FBZ0IsVUFBVXlKLE1BQVYsRUFBa0I7SUFDaEMsc0JBQVFBLE1BQU0sQ0FBQ3pOLElBQWY7SUFDRSxxQkFBSyxXQUFMO0lBQ0U4SixrQkFBQUEsS0FBSyxDQUFDNkMsSUFBTixDQUFXYyxNQUFNLENBQUNDLFVBQWxCLEVBQThCMUosT0FBOUIsQ0FBc0MsVUFBVXFELElBQVYsRUFBZ0I7SUFDcEQsd0JBQUlBLElBQUksQ0FBQytFLFFBQUwsS0FBa0JDLElBQUksQ0FBQ0ksWUFBM0IsRUFBeUM7SUFDdkM7SUFDRDs7SUFDRCx3QkFBSXNELGFBQWEsR0FBR2pHLEtBQUssQ0FBQzZDLElBQU4sQ0FBV3RGLElBQUksQ0FBQzJJLGdCQUFMLENBQXNCLFNBQXRCLENBQVgsQ0FBcEI7O0lBQ0Esd0JBQUloSixPQUFPLENBQUMyRixJQUFSLENBQWF0RixJQUFiLEVBQW1CLFNBQW5CLENBQUosRUFBbUM7SUFDakMwSSxzQkFBQUEsYUFBYSxDQUFDSSxPQUFkLENBQXNCOUksSUFBdEI7SUFDRDs7SUFDRDBJLG9CQUFBQSxhQUFhLENBQUMvTCxPQUFkLENBQXNCLFVBQVVpTSxZQUFWLEVBQXdCO0lBQzVDLDJCQUFLN0MsUUFBTCxDQUFjNkMsWUFBZCxFQUE0QixJQUE1QjtJQUNELHFCQUZELEVBRUdDLEtBRkg7SUFHRCxtQkFYRCxFQVdHQSxLQVhIO0lBWUE7O0lBQ0YscUJBQUssWUFBTDtJQUNFLHNCQUFJekMsTUFBTSxDQUFDRyxhQUFQLEtBQXlCLE9BQTdCLEVBQXNDO0lBQ3BDO0lBQ0Q7O0lBQ0Qsc0JBQUk3RSxNQUFNOztJQUEwQjBFLGtCQUFBQSxNQUFNLENBQUMxRSxNQUEzQztJQUNBLHNCQUFJNEcsS0FBSyxHQUFHNUcsTUFBTSxDQUFDMEIsWUFBUCxDQUFvQixPQUFwQixDQUFaOztJQUNBeUYsa0JBQUFBLEtBQUssQ0FBQzlDLFFBQU4sQ0FBZXJFLE1BQWYsRUFBdUI0RyxLQUF2Qjs7SUFDQTtJQXRCSjtJQXdCRCxhQXpCRCxFQXlCRyxJQXpCSDtJQTBCRDtJQTlCQSxTQTFId0IsQ0FBZixDQUFaOztJQTJKQSxlQUFPVixZQUFQO0lBQ0QsT0E5TWtCLEVBQW5COztJQWlOSjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7OztJQUdJLGVBQVNwRCxnQkFBVCxDQUEwQnhFLElBQTFCLEVBQWdDM0UsUUFBaEMsRUFBMEMwTixrQkFBMUMsRUFBOEQ7SUFDNUQsWUFBSS9JLElBQUksQ0FBQytFLFFBQUwsSUFBaUJDLElBQUksQ0FBQ0ksWUFBMUIsRUFBd0M7SUFDdEMsY0FBSXRGLE9BQU87O0lBQTBCRSxVQUFBQSxJQUFyQzs7SUFDQSxjQUFJM0UsUUFBSixFQUFjO0lBQ1pBLFlBQUFBLFFBQVEsQ0FBQ3lFLE9BQUQsQ0FBUjtJQUNELFdBSnFDOzs7Ozs7SUFVdEMsY0FBSWtKLFVBQVU7O0lBQThCbEosVUFBQUEsT0FBTyxDQUFDa0osVUFBcEQ7O0lBQ0EsY0FBSUEsVUFBSixFQUFnQjtJQUNkeEUsWUFBQUEsZ0JBQWdCLENBQUN3RSxVQUFELEVBQWEzTixRQUFiLENBQWhCO0lBQ0E7SUFDRCxXQWRxQzs7Ozs7SUFtQnRDLGNBQUl5RSxPQUFPLENBQUNtSixTQUFSLElBQXFCLFNBQXpCLEVBQW9DO0lBQ2xDLGdCQUFJQyxPQUFPOztJQUFxQ3BKLFlBQUFBLE9BQWhELENBRGtDOztJQUdsQyxnQkFBSXFKLGdCQUFnQixHQUFHRCxPQUFPLENBQUNFLG1CQUFSLEdBQThCRixPQUFPLENBQUNFLG1CQUFSLEVBQTlCLEdBQThELEVBQXJGOztJQUNBLGlCQUFLLElBQUluUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa1EsZ0JBQWdCLENBQUM1TyxNQUFyQyxFQUE2Q3RCLENBQUMsRUFBOUMsRUFBa0Q7SUFDaER1TCxjQUFBQSxnQkFBZ0IsQ0FBQzJFLGdCQUFnQixDQUFDbFEsQ0FBRCxDQUFqQixFQUFzQm9DLFFBQXRCLENBQWhCO0lBQ0Q7O0lBQ0Q7SUFDRCxXQTNCcUM7Ozs7O0lBZ0N0QyxjQUFJeUUsT0FBTyxDQUFDbUosU0FBUixJQUFxQixNQUF6QixFQUFpQztJQUMvQixnQkFBSUksSUFBSTs7SUFBa0N2SixZQUFBQSxPQUExQyxDQUQrQjs7SUFHL0IsZ0JBQUl3SixpQkFBaUIsR0FBR0QsSUFBSSxDQUFDRSxhQUFMLEdBQXFCRixJQUFJLENBQUNFLGFBQUwsQ0FBbUI7SUFBRUMsY0FBQUEsT0FBTyxFQUFFO0lBQVgsYUFBbkIsQ0FBckIsR0FBNkQsRUFBckY7O0lBQ0EsaUJBQUssSUFBSUMsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBR0gsaUJBQWlCLENBQUMvTyxNQUF4QyxFQUFnRGtQLEVBQUUsRUFBbEQsRUFBc0Q7SUFDcERqRixjQUFBQSxnQkFBZ0IsQ0FBQzhFLGlCQUFpQixDQUFDRyxFQUFELENBQWxCLEVBQXdCcE8sUUFBeEIsQ0FBaEI7SUFDRDs7SUFDRDtJQUNEO0lBQ0YsU0ExQzJEOzs7O0lBOEM1RCxZQUFJK0UsS0FBSyxHQUFHSixJQUFJLENBQUMwSixVQUFqQjs7SUFDQSxlQUFPdEosS0FBSyxJQUFJLElBQWhCLEVBQXNCO0lBQ3BCb0UsVUFBQUEsZ0JBQWdCLENBQUNwRSxLQUFELEVBQVEvRSxRQUFSLENBQWhCO0lBQ0ErRSxVQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ3VKLFdBQWQ7SUFDRDtJQUNGOztJQUdMO0lBQ0E7SUFDQTs7O0lBQ0ksZUFBUzNCLGFBQVQsQ0FBdUJoSSxJQUF2QixFQUE2QjtJQUMzQixZQUFJQSxJQUFJLENBQUM0SixhQUFMLENBQW1CLHFDQUFuQixDQUFKLEVBQStEO0lBQzdEO0lBQ0Q7O0lBQ0QsWUFBSUMsS0FBSyxHQUFHbEYsUUFBUSxDQUFDckcsYUFBVCxDQUF1QixPQUF2QixDQUFaO0lBQ0F1TCxRQUFBQSxLQUFLLENBQUN0RyxZQUFOLENBQW1CLElBQW5CLEVBQXlCLGFBQXpCO0lBQ0FzRyxRQUFBQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IsT0FBTyxhQUFQLEdBQXVCLDJCQUF2QixHQUFxRCxzQkFBckQsR0FBOEUsS0FBOUUsR0FBc0YsSUFBdEYsR0FBNkYsd0JBQTdGLEdBQXdILGdDQUF4SCxHQUEySiw2QkFBM0osR0FBMkwsNEJBQTNMLEdBQTBOLHdCQUExTixHQUFxUCxLQUF6UTtJQUNBOUosUUFBQUEsSUFBSSxDQUFDK0osV0FBTCxDQUFpQkYsS0FBakI7SUFDRDs7SUFFRCxVQUFJLENBQUNqSyxPQUFPLENBQUN3QyxTQUFSLENBQWtCNEgsY0FBbEIsQ0FBaUMsT0FBakMsQ0FBTCxFQUFnRDs7SUFFOUMsWUFBSWpILFlBQVksR0FBRyxJQUFJNkUsWUFBSixDQUFpQmpELFFBQWpCLENBQW5CO0lBRUE1QyxRQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JwQyxPQUFPLENBQUN3QyxTQUE5QixFQUF5QyxPQUF6QyxFQUFrRDtJQUNoRFIsVUFBQUEsVUFBVSxFQUFFLElBRG9DOzs7SUFHaEQ2RSxVQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBVCxHQUFlO0lBQ2xCLG1CQUFPLEtBQUtyRCxZQUFMLENBQWtCLE9BQWxCLENBQVA7SUFDRCxXQUwrQzs7O0lBT2hEc0QsVUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYTRCLEtBQWIsRUFBb0I7SUFDdkJ2RixZQUFBQSxZQUFZLENBQUNnRCxRQUFiLENBQXNCLElBQXRCLEVBQTRCdUMsS0FBNUI7SUFDRDtJQVQrQyxTQUFsRDtJQVdEO0lBQ0YsS0F0ekJEO0lBd3pCRCxHQXYwQkEsQ0FBRDs7O0lDQUE7Ozs7Ozs7Ozs7Ozs7OztJQWVHO0lBNkNILENBQUMsTUFBSzs7SUFDSjs7O0lBQ0EsUUFBTSxpQkFBaUIsR0FBRyxNQUFNLEVBQWhDOztJQUNBLFFBQU0scUJBQXFCLEdBQUcsTUFBTSxFQUFwQzs7SUFDQSxRQUFNLGFBQWEsR0FBRyxNQUFNLEVBQTVCOztJQUNBLFFBQU0sa0JBQWtCLEdBQUcsTUFBTSxFQUFqQzs7SUFDQSxRQUFNLFNBQVMsR0FBRyxNQUFNLEVBQXhCO0lBRUE7OztJQUNBLFFBQU0sV0FBVyxHQUFHLE1BQU0sRUFBMUI7O0lBQ0EsUUFBTSxtQkFBbUIsR0FBRyxNQUFNLEVBQWxDOztJQUNBLFFBQU0sY0FBYyxHQUFHLE1BQU0sRUFBN0I7O0lBQ0EsUUFBTSx1QkFBdUIsR0FBRyxNQUFNLEVBQXRDOztJQUNBLFFBQU0sV0FBVyxHQUFHLE1BQU0sRUFBMUI7O0lBQ0EsUUFBTSx1QkFBdUIsR0FBRyxNQUFNLEVBQXRDOztJQUNBLFFBQU0sWUFBWSxHQUFHLE1BQU0sRUFBM0I7O0lBQ0EsUUFBTSxnQkFBZ0IsR0FBRyxNQUFNLEVBQS9COztJQXNCQSxRQUFNLG9CQUFOLENBQTBCO0lBQTFCLElBQUEsV0FBQSxHQUFBO0lBQ0U7O0lBRUc7SUFDSSxXQUFBLEVBQUEsSUFBK0MsRUFBL0M7SUFFUDs7Ozs7SUFLRzs7SUFDSSxXQUFBLEVBQUEsSUFBc0MsRUFBdEM7SUFFUDs7O0lBR0c7O0lBQ0ksV0FBQSxFQUFBLElBQTBCLElBQUksR0FBSixFQUExQjtJQTZUUjs7SUEzVEMsSUFBQSxVQUFVLEdBQUE7SUFDUjtJQUNBLFdBQUssdUJBQUwsRUFBOEIsS0FBSyxhQUFMLENBQTlCLEVBRlE7SUFJUjtJQUNBO0lBQ0E7OztJQUNBLFlBQU0sUUFBUSxHQUFHLElBQWpCO0lBS0EsTUFBQSxRQUFRLENBQUMsaUJBQUQsQ0FBUixHQUE4QixJQUE5QjtJQUNBLE1BQUEsUUFBUSxDQUFDLGFBQUQsQ0FBUixHQUEwQixJQUExQjtJQUNBLE1BQUEsUUFBUSxDQUFDLHFCQUFELENBQVIsR0FBa0MsSUFBbEM7SUFDRDs7SUFFTSxRQUFILEdBQUcsR0FBQTtJQUNMLFlBQU0sS0FBSyxHQUFHLEtBQUssaUJBQUwsQ0FBZDtJQUNBLGFBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBaEIsQ0FBTCxJQUEyQixJQUFsQztJQUNEOztJQUVELElBQUEsSUFBSSxDQUFDLE9BQUQsRUFBcUI7SUFDdkIsVUFBSSxDQUFDLE9BQUQsSUFBWSxPQUFPLEtBQUssS0FBSyxHQUFqQyxFQUFzQztJQUNwQztJQUNELE9BSHNCOzs7SUFLdkIsV0FBSyxNQUFMLENBQVksT0FBWjs7SUFDQSxXQUFLLFdBQUwsRUFBa0IsT0FBbEI7O0lBQ0EsV0FBSyxpQkFBTCxFQUF3QixJQUF4QixDQUE2QixPQUE3QjtJQUNEOztJQUVELElBQUEsTUFBTSxDQUFDLE9BQUQsRUFBcUI7SUFDekIsWUFBTSxDQUFDLEdBQUcsS0FBSyxpQkFBTCxFQUF3QixPQUF4QixDQUFnQyxPQUFoQyxDQUFWOztJQUNBLFVBQUksQ0FBQyxLQUFLLENBQUMsQ0FBWCxFQUFjO0lBQ1osZUFBTyxLQUFQO0lBQ0Q7O0lBQ0QsV0FBSyxpQkFBTCxFQUF3QixNQUF4QixDQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUx5Qjs7O0lBT3pCLFVBQUksQ0FBQyxLQUFLLEtBQUssaUJBQUwsRUFBd0IsTUFBbEMsRUFBMEM7SUFDeEMsYUFBSyxXQUFMLEVBQWtCLEtBQUssR0FBdkI7SUFDRDs7SUFDRCxhQUFPLElBQVA7SUFDRDs7SUFFRCxJQUFBLEdBQUcsR0FBQTtJQUNELFlBQU0sR0FBRyxHQUFHLEtBQUssR0FBakI7SUFDQSxNQUFBLEdBQUcsSUFBSSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVA7SUFDQSxhQUFPLEdBQVA7SUFDRDs7SUFFRCxJQUFBLEdBQUcsQ0FBQyxPQUFELEVBQXFCO0lBQ3RCLGFBQU8sS0FBSyxpQkFBTCxFQUF3QixPQUF4QixDQUFnQyxPQUFoQyxNQUE2QyxDQUFDLENBQXJEO0lBQ0Q7SUFFRDs7O0lBR0c7OztJQUNnQixNQUFaLEVBQUEsR0EzRUMsaUJBMkVELEVBM0VrQixFQUFBLEdBUWpCLGFBbUVELEVBbkVjLEVBQUEsR0FNYixxQkE2REQsRUFBQyxXQUFXLEdBQUUsTUFBRixFQUFvQztJQUNyRCxZQUFNLFdBQVcsR0FBRyxLQUFLLHFCQUFMLENBQXBCO0lBQ0EsWUFBTSxVQUFVLEdBQUcsS0FBSyxhQUFMLENBQW5CLENBRnFEOztJQUlyRCxVQUFJLENBQUMsTUFBTCxFQUFhO0lBQ1gsYUFBSyx1QkFBTCxFQUE4QixVQUE5Qjs7SUFDQSxRQUFBLFdBQVcsQ0FBQyxLQUFaO0lBQ0EsYUFBSyxhQUFMLElBQXNCLEVBQXRCO0lBQ0E7SUFDRDs7SUFFRCxZQUFNLFVBQVUsR0FBRyxLQUFLLFdBQUwsRUFBa0IsTUFBbEIsQ0FBbkIsQ0FYcUQ7OztJQWFyRCxVQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBWCxHQUFvQixDQUFyQixDQUFWLENBQWtDLFVBQWxDLEtBQWlELFFBQVEsQ0FBQyxJQUE5RCxFQUFvRTtJQUNsRSxjQUFNLEtBQUssQ0FBQyxvREFBRCxDQUFYO0lBQ0QsT0Fmb0Q7SUFpQnJEOzs7SUFDQSxXQUFLLGFBQUwsSUFBc0IsVUFBdEI7O0lBRUEsWUFBTSxNQUFNLEdBQUcsS0FBSyx1QkFBTCxFQUE4QixNQUE5QixDQUFmLENBcEJxRDs7O0lBdUJyRCxVQUFJLENBQUMsVUFBVSxDQUFDLE1BQWhCLEVBQXdCO0lBQ3RCLGFBQUssY0FBTCxFQUFxQixVQUFyQixFQUFpQyxNQUFqQyxFQUF5QyxXQUF6Qzs7SUFDQTtJQUNEOztJQUVELFVBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFYLEdBQW9CLENBQTVCO0lBQ0EsVUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQVgsR0FBb0IsQ0FBNUIsQ0E3QnFEOztJQStCckQsYUFBTyxDQUFDLEdBQUcsQ0FBSixJQUFTLENBQUMsR0FBRyxDQUFiLElBQWtCLFVBQVUsQ0FBQyxDQUFELENBQVYsS0FBa0IsVUFBVSxDQUFDLENBQUQsQ0FBckQsRUFBMEQ7SUFDeEQsUUFBQSxDQUFDO0lBQ0QsUUFBQSxDQUFDO0lBQ0YsT0FsQ29EO0lBb0NyRDs7O0lBQ0EsVUFBSSxVQUFVLENBQUMsQ0FBRCxDQUFWLEtBQWtCLFVBQVUsQ0FBQyxDQUFELENBQWhDLEVBQXFDO0lBQ25DLGFBQUssbUJBQUwsRUFBMEIsVUFBVSxDQUFDLENBQUQsQ0FBcEMsRUFBeUMsVUFBVSxDQUFDLENBQUQsQ0FBbkQ7SUFDRCxPQXZDb0Q7OztJQXlDckQsTUFBQSxDQUFDLEdBQUcsQ0FBSixJQUFTLEtBQUssdUJBQUwsRUFBOEIsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBOUIsQ0FBVCxDQXpDcUQ7O0lBMkNyRCxNQUFBLENBQUMsR0FBRyxDQUFKLElBQVMsS0FBSyxjQUFMLEVBQXFCLFVBQVUsQ0FBQyxLQUFYLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQXJCLEVBQTZDLE1BQTdDLEVBQXFELElBQXJELENBQVQ7SUFDRDtJQUVEOzs7OztJQUtHOzs7SUFDd0IsS0FBbkIsbUJBQW1CLEVBQ3ZCLFFBRHVCLEVBQ0ssUUFETCxFQUNvQztJQUM3RCxZQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxrQkFBRCxDQUFsQyxDQUQ2RDtJQUc3RDs7SUFDQSxVQUFJLEtBQUssWUFBTCxFQUFtQixRQUFuQixLQUFnQyxDQUFDLFFBQVEsQ0FBQyxLQUE5QyxFQUFxRDtJQUNuRCxRQUFBLFFBQVEsQ0FBQyxLQUFULEdBQWlCLElBQWpCO0lBQ0EsUUFBQSxpQkFBaUIsQ0FBQyxHQUFsQixDQUFzQixRQUF0QjtJQUNELE9BUDREO0lBUzdEOzs7SUFDQSxVQUFJLGlCQUFpQixDQUFDLEdBQWxCLENBQXNCLFFBQXRCLENBQUosRUFBcUM7SUFDbkMsUUFBQSxRQUFRLENBQUMsS0FBVCxHQUFpQixLQUFqQjtJQUNBLFFBQUEsaUJBQWlCLENBQUMsTUFBbEIsQ0FBeUIsUUFBekI7SUFDRDs7SUFDRCxNQUFBLFFBQVEsQ0FBQyxTQUFELENBQVIsR0FBc0IsUUFBUSxDQUFDLFNBQUQsQ0FBOUI7SUFDQSxNQUFBLFFBQVEsQ0FBQyxrQkFBRCxDQUFSLEdBQStCLGlCQUEvQjtJQUNDLE1BQUEsUUFBa0MsQ0FBQyxTQUFELENBQWxDLEdBQWdELFNBQWhEO0lBQ0EsTUFBQSxRQUFrQyxDQUFDLGtCQUFELENBQWxDLEdBQXlELFNBQXpEO0lBQ0Y7SUFFRDs7Ozs7SUFLRzs7O0lBQzRCLEtBQXZCLHVCQUF1QixFQUFFLFFBQUYsRUFBOEI7SUFDM0QsV0FBSyxNQUFNLE9BQVgsSUFBc0IsUUFBdEIsRUFBZ0M7SUFDOUIsY0FBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLFNBQUQsQ0FBbEI7SUFDQSxRQUFBLEVBQUUsQ0FBQyxVQUFIO0lBQ0MsUUFBQSxPQUFpQyxDQUFDLFNBQUQsQ0FBakMsR0FBK0MsU0FBL0M7SUFDRCxjQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0JBQUQsQ0FBeEI7O0lBQ0EsYUFBSyxNQUFNLE9BQVgsSUFBc0IsUUFBdEIsRUFBZ0M7SUFDOUIsVUFBQSxPQUFPLENBQUMsS0FBUixHQUFnQixLQUFoQjtJQUNEOztJQUNBLFFBQUEsT0FBaUMsQ0FBQyxrQkFBRCxDQUFqQyxHQUF3RCxTQUF4RDtJQUNGO0lBQ0Y7SUFFRDs7Ozs7OztJQU9HOzs7SUFDbUIsS0FBZCxjQUFjLEVBQ2xCLFFBRGtCLEVBQ2lCLE1BRGpCLEVBRWxCLFdBRmtCLEVBRWdCO0lBQ3BDLFdBQUssTUFBTSxPQUFYLElBQXNCLFFBQXRCLEVBQWdDO0lBQzlCO0lBQ0EsY0FBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQXZCO0lBQ0EsY0FBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQXhCO0lBQ0EsY0FBTSxlQUFlLEdBQUcsSUFBSSxHQUFKLEVBQXhCOztJQUNBLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQTdCLEVBQXFDLENBQUMsRUFBdEMsRUFBMEM7SUFDeEMsZ0JBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFELENBQXhCLENBRHdDOztJQUd4QyxjQUFJLE9BQU8sS0FBSyxPQUFaLElBQXVCLENBQUMsS0FBSyxZQUFMLEVBQW1CLE9BQW5CLENBQXhCLElBQ0MsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFQLENBQVcsT0FBWCxDQURmLEVBQ3FDO0lBQ25DO0lBQ0QsV0FOdUM7OztJQVF4QyxjQUFJLFdBQVcsSUFBSSxPQUFPLENBQUMsS0FBM0IsRUFBa0M7SUFDaEMsWUFBQSxXQUFXLENBQUMsR0FBWixDQUFnQixPQUFoQjtJQUNELFdBRkQsTUFFTztJQUNMLFlBQUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsSUFBaEI7SUFDQSxZQUFBLGVBQWUsQ0FBQyxHQUFoQixDQUFvQixPQUFwQjtJQUNEO0lBQ0YsU0FuQjZCOzs7SUFxQjlCLFFBQUEsT0FBTyxDQUFDLGtCQUFELENBQVAsR0FBOEIsZUFBOUIsQ0FyQjhCOztJQXVCOUIsY0FBTSxFQUFFLEdBQUcsSUFBSSxnQkFBSixDQUFxQixLQUFLLGdCQUFMLEVBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQXJCLENBQVg7SUFDQSxRQUFBLE9BQU8sQ0FBQyxTQUFELENBQVAsR0FBcUIsRUFBckI7SUFDQSxZQUFJLGVBQWUsR0FBRyxNQUF0QixDQXpCOEI7SUEyQjlCO0lBQ0E7O0lBQ0EsY0FBTSxjQUFjLEdBQUcsZUFBdkI7O0lBQ0EsWUFBSSxjQUFjLENBQUMsT0FBZixJQUEwQixjQUFjLENBQUMsSUFBN0MsRUFBbUQ7SUFDakQsVUFBQSxlQUFlLEdBQUcsY0FBYyxDQUFDLElBQWpDO0lBQ0Q7O0lBQ0QsUUFBQSxFQUFFLENBQUMsT0FBSCxDQUFXLGVBQVgsRUFBNEI7SUFDMUIsVUFBQSxTQUFTLEVBQUU7SUFEZSxTQUE1QjtJQUdEO0lBQ0Y7SUFFRDs7OztJQUlHOzs7SUFDcUIsS0FBaEIsZ0JBQWdCLEVBQUUsU0FBRixFQUE2QjtJQUNuRCxZQUFNLE9BQU8sR0FBRyxLQUFLLGFBQUwsQ0FBaEI7SUFDQSxZQUFNLFdBQVcsR0FBRyxLQUFLLHFCQUFMLENBQXBCOztJQUNBLFdBQUssTUFBTSxRQUFYLElBQXVCLFNBQXZCLEVBQWtDO0lBQ2hDO0lBQ0E7SUFDQSxjQUFNLE1BQU0sR0FBSSxRQUFRLENBQUMsTUFBVCxDQUErQixJQUEvQixJQUF1QyxRQUFRLENBQUMsTUFBaEU7SUFDQSxjQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQXBCLEdBQ1IsT0FBTyxDQUFDLE1BREEsR0FFUixPQUFPLENBQUMsT0FBUixDQUFnQixNQUFoQixDQUZKO0lBR0EsY0FBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFQLENBQTVCO0lBQ0EsY0FBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLGtCQUFELENBQXBDLENBUmdDOztJQVdoQyxhQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFULENBQXNCLE1BQTFDLEVBQWtELENBQUMsRUFBbkQsRUFBdUQ7SUFDckQsZ0JBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxZQUFULENBQXNCLENBQXRCLENBQWhCOztJQUNBLGNBQUksT0FBTyxLQUFLLFlBQWhCLEVBQThCO0lBQzVCLFlBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSwrQ0FBYjtJQUNBLGlCQUFLLEdBQUw7SUFDQTtJQUNEOztJQUNELGNBQUksZUFBZSxDQUFDLEdBQWhCLENBQW9CLE9BQXBCLENBQUosRUFBa0M7SUFDaEMsWUFBQSxPQUFPLENBQUMsS0FBUixHQUFnQixLQUFoQjtJQUNBLFlBQUEsZUFBZSxDQUFDLE1BQWhCLENBQXVCLE9BQXZCO0lBQ0Q7SUFDRixTQXRCK0I7OztJQXlCaEMsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsVUFBVCxDQUFvQixNQUF4QyxFQUFnRCxDQUFDLEVBQWpELEVBQXFEO0lBQ25ELGdCQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVCxDQUFvQixDQUFwQixDQUFoQjs7SUFDQSxjQUFJLENBQUMsS0FBSyxZQUFMLEVBQW1CLE9BQW5CLENBQUwsRUFBa0M7SUFDaEM7SUFDRDs7SUFDRCxjQUFJLFdBQVcsSUFBSSxPQUFPLENBQUMsS0FBM0IsRUFBa0M7SUFDaEMsWUFBQSxXQUFXLENBQUMsR0FBWixDQUFnQixPQUFoQjtJQUNELFdBRkQsTUFFTztJQUNMLFlBQUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsSUFBaEI7SUFDQSxZQUFBLGVBQWUsQ0FBQyxHQUFoQixDQUFvQixPQUFwQjtJQUNEO0lBQ0Y7SUFDRjtJQUNGO0lBRUQ7O0lBRUc7OztJQUNpQixLQUFaLFlBQVksRUFBRSxPQUFGLEVBQXNCO0lBQ3hDLGFBQU8sVUFBVSw0QkFBNEIsSUFBNUIsQ0FBaUMsT0FBTyxDQUFDLFNBQXpDLENBQWpCO0lBQ0Q7SUFFRDs7O0lBR0c7OztJQUNnQixLQUFYLFdBQVcsRUFBRSxPQUFGLEVBQXNCO0lBQ3ZDLFlBQU0sT0FBTyxHQUFHLEVBQWhCO0lBQ0EsVUFBSSxPQUFPLEdBQStCLE9BQTFDLENBRnVDOztJQUl2QyxhQUFPLE9BQU8sSUFBSSxPQUFPLEtBQUssUUFBUSxDQUFDLElBQXZDLEVBQTZDO0lBQzNDO0lBQ0EsWUFBSSxPQUFPLENBQUMsUUFBUixLQUFxQixJQUFJLENBQUMsWUFBOUIsRUFBNEM7SUFDMUMsVUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLE9BQWI7SUFDRCxTQUowQzs7O0lBTTNDLFlBQUksT0FBTyxDQUFDLFlBQVosRUFBMEI7SUFDeEI7SUFDQSxpQkFBTyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQXpCLEVBQXVDO0lBQ3JDLFlBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxPQUFiO0lBQ0QsV0FKdUI7OztJQU14QixVQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBUixFQUFWO0lBQ0E7SUFDRDs7SUFDRCxRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBUixJQUNMLE9BQThCLENBQUMsSUFEcEM7SUFFRDs7SUFDRCxhQUFPLE9BQVA7SUFDRDtJQUVEOzs7SUFHRzs7O0lBQzRCLEtBQXZCLHVCQUF1QixFQUFFLE9BQUYsRUFBc0I7SUFFbkQsWUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQTNCOztJQUNBLFVBQUksQ0FBQyxVQUFMLEVBQWlCO0lBQ2YsZUFBTyxJQUFQO0lBQ0Q7O0lBQ0QsWUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFKLEVBQWY7SUFDQSxVQUFJLENBQUo7SUFDQSxVQUFJLENBQUo7SUFDQSxVQUFJLEtBQUo7SUFDQSxZQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsZ0JBQVgsQ0FBNEIsTUFBNUIsQ0FBZDs7SUFDQSxVQUFJLEtBQUssQ0FBQyxNQUFOLElBQWdCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxhQUE3QixFQUE0QztJQUMxQyxhQUFLLENBQUMsR0FBRyxDQUFULEVBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUF0QixFQUE4QixDQUFDLEVBQS9CLEVBQW1DO0lBQ2pDLFVBQUEsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxhQUFULENBQXVCO0lBQzdCLFlBQUEsT0FBTyxFQUFFO0lBRG9CLFdBQXZCLENBQVI7O0lBR0EsZUFBSyxDQUFDLEdBQUcsQ0FBVCxFQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBdEIsRUFBOEIsQ0FBQyxFQUEvQixFQUFtQztJQUNqQyxnQkFBSSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsUUFBVCxLQUFzQixJQUFJLENBQUMsWUFBL0IsRUFBNkM7SUFDM0MsY0FBQSxNQUFNLENBQUMsR0FBUCxDQUFXLEtBQUssQ0FBQyxDQUFELENBQWhCO0lBQ0Q7SUFDRjtJQUNGLFNBVnlDOztJQVkzQzs7SUFDRCxhQUFPLE1BQVA7SUFDRDs7SUE5VXVCOztJQWlWekIsRUFBQSxRQUF5QyxDQUFDLGlCQUExQyxHQUNHLElBQUksb0JBQUosRUFESDtJQUVGLENBelhEOztJQ3ZEQSxTQUFTLGdCQUFULEdBQXlCO0lBQUssU0FBUSxRQUFnQixDQUFDLGlCQUF6QjtJQUFnRTtJQUM5Rjs7Ozs7OztJQU9HOztJQUNHLFNBQVUsa0JBQVYsQ0FBZ0QsTUFBaEQsRUFBZ0U7SUFFbEU7O0lBRUc7SUFDSCxFQUFBN00sQ0FBZSxDQUFDLE1BQUs7SUFDakIsUUFBSSxNQUFKLEVBQVk7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBLFVBQUk7SUFDQSxRQUFBLGdCQUFnQixHQUFHLElBQW5CLENBQXdCLE1BQXhCO0lBQ0EsZUFBTyxNQUFLO0lBQ1IsVUFBQSxnQkFBZ0IsR0FBRyxNQUFuQixDQUEwQixNQUExQjtJQUNILFNBRkQ7SUFHSCxPQUxELENBTUEsT0FBTyxFQUFQLEVBQVc7SUFDUDtJQUNBLFFBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxFQUFkO0lBQ0g7SUFDSjtJQUNKLEdBakJjLEVBaUJaLENBQUMsTUFBRCxDQWpCWSxDQUFmO0lBa0JIO0lBRUssU0FBVSxhQUFWLEdBQXVCO0lBQ3pCLFNBQU8sZ0JBQWdCLEdBQUcsR0FBMUI7SUFDSDs7SUNsQkQsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLEdBQUosRUFBakM7SUFFTSxTQUFVLFlBQVYsT0FBb0Y7SUFBQSxNQUF0QztJQUFFLElBQUE7SUFBRixHQUFzQztJQUN0RixRQUFNLENBQUMsT0FBRCxFQUFVLFVBQVYsSUFBd0IsUUFBUSxDQUFXLElBQVgsQ0FBdEM7SUFDQSxRQUFNO0lBQUUsSUFBQSxrQkFBRjtJQUFzQixJQUFBO0lBQXRCLE1BQXFDLGFBQWEsQ0FBSTtJQUFFLElBQUEsZUFBZSxFQUFFO0lBQW5CLEdBQUosQ0FBeEQsQ0FGc0Y7O0lBSXRGLFFBQU07SUFBRSxJQUFBLGdCQUFGO0lBQW9CLElBQUEsb0JBQXBCO0lBQTBDLElBQUEsZ0JBQTFDO0lBQTRELElBQUE7SUFBNUQsTUFBc0YsZ0JBQWdCLENBQUMsRUFBRCxDQUE1RyxDQUpzRjtJQVF0Rjs7SUFDQSxFQUFBQSxDQUFlLENBQUMsTUFBSztJQUNqQixRQUFJLFVBQVUsSUFBSSxPQUFsQixFQUEyQjtJQUFBOztJQUN2QixZQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBekI7SUFDQSxNQUFlLFFBQVEsQ0FBQyxZQUZEO0lBS3ZCOztJQUNBLE1BQUEsd0JBQXdCLENBQUMsR0FBekIsQ0FBNkIsYUFBYSxFQUExQywyQkFBK0Msb0JBQW9CLEVBQW5FLHlFQUF1RyxRQUFRLENBQUMsSUFBaEg7SUFDSDtJQUNKLEdBVGMsRUFTWixDQUFDLFVBQUQsRUFBYSxPQUFiLENBVFksQ0FBZjtJQVdBLEVBQUEsa0JBQWtCLENBQUMsVUFBVSxHQUFHLE9BQUgsR0FBYSxJQUF4QixDQUFsQjtJQUVBOzs7OztJQUtHOztJQUNILEVBQUFBLENBQWUsQ0FBQyxNQUFLO0lBQ2pCLFFBQUksVUFBVSxJQUFJLE9BQWxCLEVBQTJCO0lBRXZCLFVBQUksU0FBUyxHQUFHLHFCQUFxQixDQUFDLE1BQUs7SUFDdkM7SUFDQTtJQUNBLFFBQUEsY0FBYyxDQUFDLE1BQUs7SUFBQTs7SUFDaEIsaUNBQUEsa0JBQWtCLENBQUMsT0FBRCxDQUFsQiw0RUFBNkIsS0FBN0I7SUFDQSxVQUFBLFNBQVMsR0FBRyxDQUFaO0lBQ0gsU0FIYSxDQUFkO0lBSUgsT0FQb0MsQ0FBckM7SUFTQSxhQUFPLE1BQUs7SUFDUixZQUFJLFNBQUosRUFDSSxvQkFBb0IsQ0FBQyxTQUFELENBQXBCO0lBQ1AsT0FIRDtJQUlILEtBZkQsTUFnQkssSUFBSSxPQUFKLEVBQWE7SUFFZDtJQUNBO0lBQ0EsVUFBSSxTQUFTLEdBQUcscUJBQXFCLENBQUMsTUFBSztJQUN2QyxRQUFBLGNBQWMsQ0FBQyxNQUFLO0lBQUE7O0lBQ2hCLG1DQUFBLHdCQUF3QixDQUFDLEdBQXpCLENBQTZCLGFBQWEsRUFBMUMsaUZBQStDLEtBQS9DO0lBQ0EsVUFBQSxTQUFTLEdBQUcsQ0FBWjtJQUNILFNBSGEsQ0FBZDtJQUlILE9BTG9DLENBQXJDO0lBT0EsYUFBTyxNQUFLO0lBQ1IsWUFBSSxTQUFKLEVBQ0ksb0JBQW9CLENBQUMsU0FBRCxDQUFwQjtJQUNQLE9BSEQ7SUFJSDtJQUNKLEdBakNjLEVBaUNaLENBQUMsVUFBRCxFQUFhLE9BQWIsQ0FqQ1ksQ0FBZjs7SUFtQ0EsUUFBTSxpQkFBaUIsR0FBcUUsS0FBM0MsSUFBMEY7SUFDdkksV0FBTyxjQUFjLEdBQU07SUFBRSxvQkFBYyxVQUFVLEdBQUUsTUFBRixHQUFXO0lBQXJDLEtBQU4sRUFBOEQsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBRCxDQUF0QixDQUFoRixDQUFyQjtJQUNILEdBRkQ7O0lBS0EsU0FBTztJQUNILElBQUEsaUJBREc7SUFFSCxJQUFBO0lBRkcsR0FBUDtJQUlIO0lBRUQ7Ozs7SUFJRzs7SUFDRyxTQUFVLGtCQUFWLENBQTZCLE9BQTdCLEVBQTBDO0lBQzVDLFFBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVLENBQUMsWUFBOUMsRUFBNEQ7SUFBRSxJQUFBLFVBQVUsRUFBRyxJQUFELElBQVcsSUFBSSxZQUFZLE9BQWhCLElBQTJCLFdBQVcsQ0FBQyxJQUFELENBQXRDLEdBQStDLFVBQVUsQ0FBQyxhQUExRCxHQUEwRSxVQUFVLENBQUM7SUFBOUcsR0FBNUQsQ0FBbkI7SUFDQSxRQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsVUFBWCxFQUF2QjtJQUNBLFNBQU8sY0FBUDtJQUNIOztJQ3JHTSxTQUFTd08sQ0FBVCxDQUFnQkMsQ0FBaEIsRUFBcUJ0UixDQUFyQixFQUFxQkE7SUFBQUEsT0FDdEIsSUFBSUssQ0FEa0JMLElBQ2JBLENBRGFBLEVBQ05zUixDQUFBQSxDQUFJalIsQ0FBSmlSLENBQUFBLEdBQVN0UixDQUFBQSxDQUFNSyxDQUFOTCxDQUFUc1I7O0lBQWVqUixTQUNQaVIsQ0FET2pSO0lBVTlCOztJQUFBLFNBQVNrUixDQUFULENBQXdCM04sQ0FBeEIsRUFBMkJDLENBQTNCLEVBQTJCQTtJQUFBQSxPQUM1QixJQUFJeEQsQ0FEd0J3RCxJQUNuQkQsQ0FEbUJDLEVBQ25CRCxJQUFhLGVBQU52RCxDQUFNLElBQU5BLEVBQXNCQSxDQUFBQSxJQUFLd0QsQ0FBM0J4RCxDQUFQdUQsRUFBc0MsT0FBQSxDQUFPLENBQVA7O0lBQU8sT0FDdEQsSUFBSXZELENBRGtELElBQzdDd0QsQ0FENkMsRUFDN0NBLElBQWEsZUFBTnhELENBQU0sSUFBY3VELENBQUFBLENBQUV2RCxDQUFGdUQsQ0FBQUEsS0FBU0MsQ0FBQUEsQ0FBRXhELENBQUZ3RCxDQUFwQ0EsRUFBMEMsT0FBQSxDQUFPLENBQVA7O0lBQU8sU0FBQSxDQUN4RCxDQUR3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0l6RCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBRCxDQUExQjtJQUVELFNBQVUsWUFBVixDQUErRCxDQUEvRCxFQUFxRSxNQUFyRSxFQUFtRjtJQUNyRixNQUFJLEtBQUssR0FBRyxDQUFaO0lBQ0EsRUFBQSxLQUFLLENBQUMsV0FBRCxDQUFMLEdBQXFCLE1BQXJCO0lBQ0EsU0FBTyxLQUFQO0lBQ0g7O0lDekJELElBQUksS0FBSyxHQUFJLGFBQWEsU0FBZCxHQUE0QixNQUFNLFNBQVMsQ0FBQyxPQUFWLENBQWtCLEVBQWxCLENBQWxDLEdBQTRELE1BQUssRUFBN0U7O0lBZ0NBLFNBQVMsUUFBVCxDQUF5QyxNQUF6QyxFQUE4RSxPQUE5RSxFQUFrTTtJQUM5TCxNQUFJLE9BQUosYUFBSSxPQUFKLGVBQUksT0FBTyxDQUFHLE1BQUgsQ0FBWCxFQUNJLE9BQU8sSUFBUDtJQUVKLFNBQU8sS0FBUDtJQUNIO0lBRUQ7Ozs7OztJQU1HOzs7SUFDSCxTQUFTLG1CQUFULENBQTZCLE9BQTdCLEVBQXdEO0lBQ3BELE1BQUksT0FBTyxJQUFJLE9BQU8sWUFBWSxJQUFsQyxFQUF3QztJQUNwQyxVQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBUCxFQUFsQjs7SUFDQSxRQUFJLFNBQVMsU0FBVCxJQUFBLFNBQVMsV0FBVCxJQUFBLFNBQVMsQ0FBRSxZQUFYLENBQXdCLE9BQXhCLEVBQWlDLElBQWpDLEtBQTBDLENBQUMsU0FBUyxDQUFDLFdBQXpELEVBQXNFO0lBQ2xFLGFBQU8sSUFBUDtJQUNIO0lBQ0o7O0lBRUQsU0FBTyxLQUFQO0lBQ0g7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JHOzs7SUFDRyxTQUFVLHFCQUFWLENBQXVELFdBQXZELEVBQThILE9BQTlILEVBQWtQO0lBRXBQLFFBQU07SUFBRSxJQUFBLGtCQUFGO0lBQXNCLElBQUE7SUFBdEIsTUFBcUMsYUFBYSxDQUFJLEVBQUosQ0FBeEQsQ0FGb1A7SUFLcFA7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsUUFBTSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLElBQWlDLFFBQVEsQ0FBQyxDQUFELENBQS9DLENBWm9QO0lBZXBQO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUNBLFFBQU0sQ0FBQyw0QkFBRCxFQUErQiwrQkFBL0IsSUFBa0UsUUFBUSxDQUFDLEtBQUQsQ0FBaEY7SUFFQSxFQUFBLGdCQUFnQixDQUFDLFFBQUQsRUFBVyxpQkFBWCxFQUE4QixDQUFDLElBQUc7SUFDOUMsSUFBQSwrQkFBK0IsQ0FBQyxNQUFNLElBQUksQ0FBVixHQUFjLEtBQWQsR0FBc0IsbUJBQW1CLENBQUMsVUFBVSxFQUFYLENBQTFDLENBQS9CO0lBQ0gsR0FGZSxDQUFoQjtJQUlBLEVBQUEsU0FBUyxDQUFDLE1BQUs7SUFDWCxRQUFJLE1BQU0sSUFBSSxDQUFkLEVBQ0ksK0JBQStCLENBQUMsS0FBRCxDQUEvQjtJQUNQLEdBSFEsRUFHTixDQUFDLE1BQU0sSUFBSSxDQUFYLENBSE0sQ0FBVDtJQUtBLFFBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFtQyxDQUFELElBQU07SUFDM0UsSUFBQSxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBUixDQUFUO0lBQ0gsR0FGc0MsQ0FBdkM7SUFJQSxRQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBbUMsQ0FBRCxJQUFNO0lBQzFFLElBQUEsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxFQUFFLENBQWQsQ0FBTixDQUFUOztJQUdBLFFBQUksNEJBQUosRUFBa0M7SUFDOUIsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBO0lBQ0g7O0lBRUQsUUFBSSxTQUFTLE1BQU0sQ0FBbkIsRUFBc0I7SUFDbEIsTUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYO0lBQ0g7SUFDSixHQVpxQyxDQUF0QztJQWNBLFFBQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFtQyxDQUFELElBQU07SUFDekUsUUFBSSxXQUFKLEVBQWlCO0lBRWI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxZQUFNLE9BQU8sR0FBRyxVQUFVLEVBQTFCO0lBQ0EsVUFBSSxPQUFPLElBQUksV0FBWSxPQUEzQixFQUNLLE9BQTZDLFNBQTdDLElBQUEsT0FBNkMsV0FBN0MsWUFBQSxPQUE2QyxDQUFFLEtBQS9DLEdBcEJRO0lBdUJiOztJQUNBLE1BQUEsQ0FBQyxDQUFDLGNBQUYsR0F4QmE7SUEyQmI7SUFDQTtJQUNBOztJQUNBLE1BQUEsQ0FBQyxDQUFDLGVBQUYsR0E5QmE7O0lBaUNiLE1BQUEsS0FBSyxHQWpDUTs7SUFvQ2IsTUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYO0lBQ0g7SUFDSixHQXZDb0MsQ0FBckM7SUF5Q0EsUUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQVIsR0FBNkIsU0FBN0IsR0FBMEMsQ0FBRCxJQUFtQztJQUM1RjtJQUNBO0lBQ0E7SUFDQSxRQUFJLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBZixFQUNJLENBQUMsQ0FBQyxjQUFGO0lBR0osUUFBSSxDQUFDLENBQUMsTUFBRixLQUFhLENBQWpCLEVBQ0ksYUFBYSxDQUFDLENBQUQsQ0FBYjtJQUNQLEdBVkQ7SUFXQSxRQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBUixHQUE2QixTQUE3QixHQUEwQyxDQUFELElBQW1DO0lBQzFGLFFBQUksQ0FBQyxDQUFDLE1BQUYsS0FBYSxDQUFiLElBQWtCLE1BQU0sR0FBRyxDQUEvQixFQUNJLFlBQVksQ0FBQyxDQUFELENBQVo7SUFDUCxHQUhEOztJQUtBLFFBQU0sTUFBTSxHQUFJLENBQUQsSUFBOEI7SUFDekMsSUFBQSxTQUFTLENBQUMsQ0FBRCxDQUFUO0lBQ0gsR0FGRDs7SUFLQSxRQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBUixHQUE2QixTQUE3QixHQUF5QyxNQUE5RDtJQUVBLFFBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFSLElBQThCLFFBQVEsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUF0QyxHQUEyRCxTQUEzRCxHQUF3RSxDQUFELElBQXNDO0lBQzNILFFBQUksQ0FBQyxDQUFDLEdBQUYsSUFBUyxHQUFULElBQWdCLFdBQWhCLElBQStCLENBQUMsUUFBUSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQTVDLEVBQWdFO0lBQzVEO0lBQ0E7SUFDQSxNQUFBLGFBQWEsQ0FBQyxDQUFELENBQWI7SUFDQSxNQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0g7O0lBRUQsUUFBSSxDQUFDLENBQUMsR0FBRixJQUFTLE9BQVQsSUFBb0IsQ0FBQyxRQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBakMsRUFBcUQ7SUFDakQsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLE1BQUEsYUFBYSxDQUFDLENBQUQsQ0FBYjtJQUNBLE1BQUEsWUFBWSxDQUFDLENBQUQsQ0FBWjtJQUNIO0lBQ0osR0FiRDtJQWVBLFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFSLEdBQTZCLFNBQTdCLEdBQTBDLENBQUQsSUFBc0M7SUFDM0YsUUFBSSxDQUFDLENBQUMsR0FBRixJQUFTLEdBQVQsSUFBZ0IsQ0FBQyxRQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBN0IsRUFDSSxZQUFZLENBQUMsQ0FBRCxDQUFaO0lBQ1AsR0FIRDs7SUFLQSxRQUFNLE9BQU8sR0FBSSxDQUFELElBQW1DO0lBQy9DLElBQUEsQ0FBQyxDQUFDLGNBQUY7O0lBQ0EsUUFBSSxDQUFDLENBQUMsTUFBRixHQUFXLENBQWYsRUFBa0I7SUFDZCxNQUFBLENBQUMsQ0FBQyx3QkFBRjtJQUNBLE1BQUEsQ0FBQyxDQUFDLGVBQUY7SUFDSDtJQUNKLEdBTkQ7O0lBUUEsU0FBMkMsS0FBcEMsSUFBaUQsa0JBQWtCLENBQUMsY0FBYyxHQUFNO0lBQUUsSUFBQSxTQUFGO0lBQWEsSUFBQSxPQUFiO0lBQXNCLElBQUEsTUFBdEI7SUFBOEIsSUFBQSxXQUE5QjtJQUEyQyxJQUFBLFNBQTNDO0lBQXNELElBQUEsWUFBdEQ7SUFBb0UsSUFBQSxPQUFwRTtJQUE2RSxJQUFBLEtBQUssRUFBRSw0QkFBNEIsR0FBRTtJQUFFLE1BQUEsTUFBTSxFQUFFO0lBQVYsS0FBRixHQUF1QixTQUF2STtJQUFrSixPQUFHO0lBQUUsNEJBQXNCLE1BQU0sSUFBSSxDQUFDLDRCQUFYLEdBQTBDLE1BQTFDLEdBQW1EO0lBQTNFO0lBQXJKLEdBQU4sRUFBMlAsS0FBM1AsQ0FBZixDQUExRTtJQUNIOztJQzdLSyxTQUFVLGdCQUFWLE9BQXVKO0lBQUEsTUFBL0Q7SUFBRSxJQUFBLGFBQUY7SUFBaUIsSUFBQTtJQUFqQixHQUErRDtJQUV6SixRQUFNLENBQUMsZ0JBQUQsRUFBbUIsbUJBQW5CLEVBQXdDLG1CQUF4QyxJQUErRCxRQUFRLENBQWdCLElBQWhCLENBQTdFO0lBQ0EsUUFBTSxDQUFDLG1CQUFELEVBQXNCLHNCQUF0QixFQUE4QyxzQkFBOUMsSUFBd0UsUUFBUSxDQUFnQixJQUFoQixDQUF0RjtJQUNBLFFBQU0sc0JBQXNCLEdBQUcsaUJBQWlCLENBQUMsZ0JBQUQsYUFBQyxnQkFBRCxjQUFDLGdCQUFELEdBQXNCLE1BQUssRUFBM0IsQ0FBaEQ7SUFFQSxRQUFNO0lBQUUsSUFBQSxlQUFlLEVBQUUsd0JBQW5CO0lBQTZDLElBQUEsZUFBZSxFQUFFO0lBQTlELE1BQXlGLGVBQWUsRUFBOUc7SUFFQSxRQUFNLGVBQWUsR0FBR1YsR0FBVyxDQUFDLE1BQUs7SUFBRyxJQUFBLG1CQUFtQixDQUFFLENBQUYsQ0FBbkI7SUFBMkIsR0FBcEMsRUFBc0MsRUFBdEMsQ0FBbkM7SUFDQSxRQUFNLGNBQWMsR0FBR0EsR0FBVyxDQUFDLE1BQUs7SUFBRyxJQUFBLG1CQUFtQixDQUFFLHdCQUF3QixDQUFDLE1BQXpCLEdBQWtDLENBQXBDLENBQW5CO0lBQTZELEdBQXRFLEVBQXdFLEVBQXhFLENBQWxDO0lBQ0EsUUFBTSxjQUFjLEdBQUdBLEdBQVcsQ0FBQyxNQUFLO0lBQUcsSUFBQSxtQkFBbUIsQ0FBQyxDQUFDLElBQUssQ0FBQyxDQUFELGFBQUMsQ0FBRCxjQUFDLENBQUQsR0FBTSxDQUFOLElBQVcsQ0FBbEIsQ0FBbkI7SUFBMEMsR0FBbkQsRUFBcUQsRUFBckQsQ0FBbEM7SUFDQSxRQUFNLGNBQWMsR0FBR0EsR0FBVyxDQUFDLE1BQUs7SUFBRyxJQUFBLG1CQUFtQixDQUFDLENBQUMsSUFBSyxDQUFDLENBQUQsYUFBQyxDQUFELGNBQUMsQ0FBRCxHQUFNLENBQU4sSUFBVyxDQUFsQixDQUFuQjtJQUEwQyxHQUFuRCxFQUFxRCxFQUFyRCxDQUFsQztJQUNBLFFBQU07SUFBRSxJQUFBO0lBQUYsTUFBK0IsbUJBQW1CLENBQWU7SUFBRSxJQUFBLGVBQWUsRUFBRSx3QkFBbkI7SUFBNkMsSUFBQSxtQkFBbUIsRUFBRSxPQUFsRTtJQUEyRSxJQUFBLEtBQUssRUFBRSxnQkFBRixhQUFFLGdCQUFGLGNBQUUsZ0JBQUYsR0FBc0IsQ0FBdEc7SUFBeUcsSUFBQSxlQUF6RztJQUEwSCxJQUFBLGNBQTFIO0lBQTBJLElBQUEsY0FBMUk7SUFBMEosSUFBQTtJQUExSixHQUFmLENBQXhEO0lBRUEsRUFBQSxZQUFZLENBQUM7SUFDVCxJQUFBLGNBQWMsRUFBRSxhQURQO0lBRVQsSUFBQSxlQUFlLEVBQUUsd0JBRlI7SUFHVCxJQUFBLFlBQVksRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKO0lBQUE7O0lBQUEsc0NBQWEsd0JBQXdCLENBQUMsQ0FBRCxDQUFyQywwREFBYSxzQkFBNkIsaUJBQTdCLENBQStDLElBQS9DLENBQWI7SUFBQSxLQUhMO0lBSVQsSUFBQSxZQUFZLEVBQUcsQ0FBRDtJQUFBOztJQUFBLGlFQUFRLHdCQUF3QixDQUFDLENBQUQsQ0FBaEMsMkRBQVEsdUJBQTZCLGlCQUE3QixFQUFSLDJFQUE0RCxJQUE1RDtJQUFBO0lBSkwsR0FBRCxDQUFaO0lBT0EsRUFBQSxZQUFZLENBQUM7SUFDVCxJQUFBLGNBQWMsRUFBRSxnQkFEUDtJQUVULElBQUEsZUFBZSxFQUFFLHdCQUZSO0lBR1QsSUFBQSxZQUFZLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixLQUFhLElBQUksSUFBSSx3QkFBd0IsQ0FBQyxDQUFELENBQXhCLENBQTRCLEtBQTVCLEVBSDFCO0lBSVQsSUFBQSxZQUFZLEVBQUcsQ0FBRCxJQUFPO0lBSlosR0FBRCxDQUFaO0lBT0EsUUFBTSx1QkFBdUIsR0FBR0EsR0FBVyxDQUF5QyxJQUFELElBQTZGO0lBQUE7O0lBRTVLLFVBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFuQjtJQUVBLFVBQU0sQ0FBQyxjQUFELEVBQWlCLGlCQUFqQixFQUFvQyxpQkFBcEMsSUFBeUQsUUFBUSxDQUFpQixJQUFqQixDQUF2RTtJQUlBLFVBQU07SUFBRSxNQUFBLFFBQVEsRUFBRSxZQUFaO0lBQTBCLE1BQUEsZ0JBQWdCLEVBQUUsb0JBQTVDO0lBQWtFLE1BQUEsb0JBQW9CLEVBQUU7SUFBeEYsUUFBcUgsV0FBVyxDQUFDO0lBQUUsTUFBQSxNQUFNLEVBQUU7SUFBVixLQUFELENBQXRJO0lBQ0EsVUFBTTtJQUFFLE1BQUEsUUFBUSxFQUFFLFlBQVo7SUFBMEIsTUFBQSxnQkFBZ0IsRUFBRSxvQkFBNUM7SUFBa0UsTUFBQSxvQkFBb0IsRUFBRTtJQUF4RixRQUFxSCxXQUFXLENBQUM7SUFBRSxNQUFBLE1BQU0sRUFBRTtJQUFWLEtBQUQsQ0FBdEk7SUFFQSxRQUFJLElBQUksMEJBQUssSUFBSSxDQUFDLElBQVYsbURBQWtCLGNBQWxCLHlDQUFxQyxJQUE3QyxDQVg0SztJQWM1Szs7SUFDQSxVQUFNLDZCQUE2QixHQUFHQSxHQUFXLENBQUMsU0FBUyw2QkFBVCxRQUErRTtJQUU3SCxZQUFNO0lBQUUsUUFBQSxVQUFGO0lBQWMsUUFBQSxnQkFBZDtJQUFnQyxRQUFBO0lBQWhDLFVBQW9ELFdBQVcsQ0FBZTtJQUNoRixRQUFBLGdCQUFnQixFQUFFQSxHQUFXLENBQUUsT0FBRCxJQUFxQjtJQUMvQyxjQUFJLE9BQUosRUFDSSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCLENBREosS0FHSSxzQkFBc0IsQ0FBQyxRQUFRLElBQUksUUFBUSxLQUFLLEtBQWIsR0FBcUIsSUFBckIsR0FBNEIsS0FBekMsQ0FBdEI7SUFFUCxTQU40QixFQU0xQixFQU4wQjtJQURtRCxPQUFmLENBQXJFO0lBU0EsWUFBTSxLQUFLLEdBQUdBLEdBQVcsQ0FBQyxNQUFLO0lBQUE7O0lBQzNCLFlBQUksc0JBQXNCLE1BQU0sSUFBaEMsRUFDSyxlQUFBLFVBQVUsWUFBVixrREFBcUQsS0FBckQ7SUFDUixPQUh3QixFQUd0QixFQUhzQixDQUF6QjtJQUlBLFlBQU07SUFBRSxRQUFBO0lBQUYsVUFBMkIsc0JBQXNCLENBQWU7SUFBRSxRQUFBLEtBQUY7SUFBUyxRQUFBLElBQVQ7SUFBZSxRQUFBLGlCQUFmO0lBQWtDLFFBQUEsaUJBQWxDO0lBQXFELFFBQUE7SUFBckQsT0FBZixDQUF2RDs7SUFFQSxlQUFTLGtDQUFULFFBQW1NO0lBQUEsWUFBakY7SUFBRSxXQUFDLGVBQUQsR0FBbUIsWUFBckI7SUFBbUMsV0FBQyxlQUFELEdBQW1CLFlBQXREO0lBQW9FLGFBQUc7SUFBdkUsU0FBaUY7O0lBRS9MLGNBQU0sT0FBTyxHQUFHLE1BQUs7SUFBRyxVQUFBLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFOLENBQW5CO0lBQWtDLFNBQTFEOztJQUNBLFlBQUksT0FBTyxHQUFHLE1BQUs7SUFDZixjQUFJLGlCQUFpQixFQUFyQixFQUNJLHNCQUFzQixDQUFDLElBQUQsQ0FBdEIsQ0FESixLQUdJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFOLENBQXRCO0lBQ1AsU0FMRDs7SUFPQSxZQUFJLElBQUksR0FBRyxjQUFjLEdBQWlCO0lBQUUsVUFBQSxRQUFRLEVBQUU7SUFBWixTQUFqQixFQUFrQyxxQkFBcUIsQ0FBZSxPQUFmLEVBQXdCLFNBQXhCLENBQXJCLENBQXdELEtBQXhELENBQWxDLENBQXpCO0lBRUEsWUFBSSxJQUFJLEdBQ0YsY0FBYyxHQUFpQixvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFELENBQXhCLENBQTBDO0lBQzVGLDJCQUFrQixZQUFsQixhQUFrQixZQUFsQixjQUFrQixZQUFsQixHQUFrQyxDQUFDLENBQUMsQ0FBQyxJQUFILEVBQVMsUUFBVCxFQUQwRDtJQUU1RiwyQkFBa0IsWUFBbEIsYUFBa0IsWUFBbEIsY0FBa0IsWUFBbEIsR0FBbUMsSUFBSSxHQUFHLE1BQUgsR0FBWSxTQUZ5QztJQUc1RixhQUFHLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLElBQUQsQ0FBckI7SUFIeUUsU0FBMUMsQ0FBRCxDQUFyQyxFQUlYO0lBQUUsVUFBQTtJQUFGLFNBSlcsQ0FEcEI7SUFRQSxlQUFPLHdCQUF3QixDQUFDLElBQUQsQ0FBL0I7SUFDSDtJQUVELGFBQU87SUFBRSxRQUFBO0lBQUYsT0FBUDtJQUNILEtBekNnRCxFQXlDOUMsQ0FBQyx3QkFBRCxFQUEyQixLQUEzQixFQUFrQyxJQUFsQyxDQXpDOEMsQ0FBakQ7SUE0Q0EsVUFBTSwyQkFBMkIsR0FBR0EsR0FBVyxDQUFDLFNBQVMsMkJBQVQsR0FBb0M7SUFDaEYsZUFBUyxnQ0FBVCxRQUF3SDtJQUFBLFlBQXJCO0lBQUUsVUFBQSxJQUFGO0lBQVEsYUFBRztJQUFYLFNBQXFCO0lBQ3BILFlBQUksSUFBSSxHQUFHLHdCQUF3QixDQUFDLGlCQUFELENBQXhCLENBQTRDO0lBQUUsVUFBQSxJQUFJLEVBQUUsSUFBRixhQUFFLElBQUYsY0FBRSxJQUFGLEdBQVUsUUFBaEI7SUFBMEIsYUFBRztJQUE3QixTQUE1QyxDQUFYO0lBQ0EsWUFBSSxJQUFJLEdBQUcsb0JBQW9CLENBQUMsSUFBRCxDQUEvQjtJQUNBLGVBQU8sSUFBUDtJQUNIO0lBQ0QsYUFBTztJQUNILFFBQUE7SUFERyxPQUFQO0lBR0gsS0FUOEMsRUFTNUMsRUFUNEMsQ0FBL0M7SUFXQSxXQUFPO0lBQ0gsTUFBQSxRQUFRLEVBQUUsSUFEUDtJQUVILE1BQUEsNkJBRkc7SUFHSCxNQUFBO0lBSEcsS0FBUDtJQUtILEdBM0UwQyxFQTJFeEMsQ0FBQyx3QkFBRCxDQTNFd0MsQ0FBM0M7SUE2RUEsU0FBTztJQUNILElBQUEsdUJBREc7SUFFSCxJQUFBLGVBQWUsRUFBRTtJQUZkLEdBQVA7SUFJSDs7SUNySkQ7Ozs7OztJQU1HOztJQUNHLFNBQVUsZUFBVixHQUFnSjtJQUFBLE1BQXRIO0lBQUUsSUFBQSxXQUFGO0lBQWUsSUFBQSxXQUFmO0lBQTRCLElBQUE7SUFBNUIsR0FBc0gsdUVBQWhEO0lBQUUsSUFBQSxXQUFXLEVBQUUsUUFBZjtJQUF5QixJQUFBLFdBQVcsRUFBRTtJQUF0QyxHQUFnRDtJQUVsSixRQUFNLENBQUMsWUFBRCxFQUFlLGVBQWYsSUFBa0N0QixDQUFRLENBQWlCLElBQWpCLENBQWhEO0lBQ0EsUUFBTSxDQUFDLFlBQUQsRUFBZSxlQUFmLElBQWtDQSxDQUFRLENBQWlCLElBQWpCLENBQWhEO0lBQ0EsUUFBTTtJQUFFLElBQUEsVUFBVSxFQUFFLGVBQWQ7SUFBK0IsSUFBQSxrQkFBa0IsRUFBRTtJQUFuRCxNQUErRSxhQUFhLENBQU07SUFBRSxJQUFBLGVBQWUsRUFBRTtJQUFuQixHQUFOLENBQWxHO0lBQ0EsUUFBTTtJQUFFLElBQUEsVUFBVSxFQUFFLGVBQWQ7SUFBK0IsSUFBQSxrQkFBa0IsRUFBRTtJQUFuRCxNQUErRSxhQUFhLENBQU07SUFBRSxJQUFBLGVBQWUsRUFBRTtJQUFuQixHQUFOLENBQWxHO0lBQ0EsUUFBTTtJQUFFLElBQUEsZ0JBQWdCLEVBQUUscUJBQXBCO0lBQTJDLElBQUEsRUFBRSxFQUFFLE9BQS9DO0lBQXdELElBQUEsUUFBUSxFQUFFLGFBQWxFO0lBQWlGLElBQUEsb0JBQW9CLEVBQUU7SUFBdkcsTUFBcUksV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXRKO0lBQ0EsUUFBTTtJQUFFLElBQUEsZ0JBQWdCLEVBQUUscUJBQXBCO0lBQTJDLElBQUEsRUFBRSxFQUFFLE9BQS9DO0lBQXdELElBQUEsUUFBUSxFQUFFLGFBQWxFO0lBQWlGLElBQUEsb0JBQW9CLEVBQUU7SUFBdkcsTUFBcUksV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXRKO0lBRUEsUUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFFLFlBQTNCO0lBR0EsUUFBTSxvQkFBb0IsR0FBR3NCLEdBQVcsQ0FBQyxTQUFTLG9CQUFULEdBQTZCO0lBQ2xFLFdBQU87SUFDSCxNQUFBLHlCQUF5QixFQUFzQyxLQUFwQyxJQUFnRDtJQUFHLGVBQU8scUJBQXFCLENBQUMsdUJBQXVCLENBQUMsS0FBRCxDQUF4QixDQUE1QjtJQUErRDtJQUQxSSxLQUFQO0lBR0gsR0FKdUMsRUFJckMsRUFKcUMsQ0FBeEM7SUFNQSxRQUFNLG9CQUFvQixHQUFHQSxHQUFXLENBQUMsU0FBUyxvQkFBVCxHQUE2QjtJQUNsRSxXQUFPO0lBQ0gsTUFBQSx5QkFBeUIsRUFBRSxRQUFtSDtJQUFBOztJQUFBLFlBQS9FO0lBQUUsNkJBQW1CLGNBQXJCO0lBQXFDLHdCQUFjLFNBQW5EO0lBQThELGFBQUc7SUFBakUsU0FBK0U7SUFDMUksZUFBUSxxQkFBcUIsQ0FDekIseUJBQXlCLENBQUMsaUJBQUQsQ0FBekIsQ0FDSSx1QkFBdUIsQ0FDbkIsY0FBYyxHQUFNO0lBQUUsaUNBQWUsQ0FBQyxlQUFELEdBQW1CLFVBQW5CLEdBQWdDLFNBQS9DLHlDQUE2RDtJQUEvRCxTQUFOLEVBQWtGLEtBQWxGLENBREssQ0FEM0IsQ0FEeUIsQ0FBN0I7SUFPSDtJQVRFLEtBQVA7SUFXSCxHQVp1QyxFQVlyQyxDQUFDLGVBQUQsQ0FacUMsQ0FBeEM7SUFjQSxTQUFPO0lBQ0gsSUFBQSxvQkFERztJQUVILElBQUEsb0JBRkc7SUFHSCxJQUFBLHlCQUhHO0lBSUgsSUFBQSx5QkFKRztJQUtILElBQUEsT0FMRztJQU1ILElBQUEsT0FORztJQU9ILElBQUEsWUFQRztJQVFILElBQUEsWUFSRztJQVNILElBQUEsZUFURztJQVVILElBQUE7SUFWRyxHQUFQO0lBYUg7SUFZRDs7Ozs7O0lBTUc7O0lBQ0csU0FBVSxhQUFWLEdBQXVHO0lBQUEsTUFBL0U7SUFBRSxJQUFBLFdBQUY7SUFBZSxJQUFBO0lBQWYsR0FBK0UsdUVBQWhEO0lBQUUsSUFBQSxXQUFXLEVBQUUsUUFBZjtJQUF5QixJQUFBLFdBQVcsRUFBRTtJQUF0QyxHQUFnRDtJQUV6RyxRQUFNO0lBQUUsSUFBQSxvQkFBRjtJQUF3QixJQUFBLG9CQUF4QjtJQUE4QyxJQUFBLHlCQUE5QztJQUF5RSxJQUFBLHlCQUF6RTtJQUFvRyxJQUFBLE9BQXBHO0lBQTZHLElBQUEsT0FBN0c7SUFBc0gsSUFBQSxZQUF0SDtJQUFvSSxJQUFBLGVBQXBJO0lBQXFKLElBQUEsWUFBcko7SUFBbUssSUFBQTtJQUFuSyxNQUF1TCxlQUFlLENBQUM7SUFBRSxJQUFBLFdBQUY7SUFBZSxJQUFBO0lBQWYsR0FBRCxDQUE1TTtJQUVBLFFBQU0sa0JBQWtCLEdBQXVCQSxHQUFXLENBQUMsU0FBUyxrQkFBVCxRQUE0RTtJQUFBLFFBQTdCO0lBQUUsTUFBQTtJQUFGLEtBQTZCO0lBQ25JLFVBQU07SUFBRSxNQUFBO0lBQUYsUUFBZ0Msb0JBQW9CLEVBQTFEO0lBRUEsV0FBTztJQUNILE1BQUEsdUJBQXVCLENBQW9DLEtBQXBDLEVBQTRDO0lBQy9ELGNBQU0sT0FBTyxHQUFHLHlCQUF5QixDQUFDLEtBQUQsQ0FBekIsQ0FBaUMsS0FBakMsQ0FBaEI7SUFDQSxjQUFNLFVBQVUsR0FBRyxLQUFuQjtJQUVBLGVBQU8seUJBQXlCLENBQUMsR0FBRyxJQUFJLE9BQVAsR0FBaUIsT0FBakIsR0FBMkIsVUFBNUIsQ0FBaEM7SUFDSDs7SUFORSxLQUFQO0lBUUgsR0FYeUQsRUFXdkQsQ0FBQyxvQkFBRCxDQVh1RCxDQUExRDtJQWFBLFFBQU0sa0JBQWtCLEdBQXVCQSxHQUFXLENBQUMsU0FBUyxrQkFBVCxHQUEyQjtJQUNsRixVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQWdDLG9CQUFvQixFQUExRDtJQUVBLFdBQU87SUFDSCxNQUFBLHVCQUF1QixDQUFvQyxLQUFwQyxFQUE0QztJQUMvRCxlQUFPLHlCQUF5QixDQUFDLEtBQUQsQ0FBaEM7SUFDSDs7SUFIRSxLQUFQO0lBS0gsR0FSeUQsRUFRdkQsQ0FBQyxvQkFBRCxDQVJ1RCxDQUExRDtJQVVBLFNBQU87SUFDSCxJQUFBLGtCQURHO0lBRUgsSUFBQSxrQkFGRztJQUdILElBQUEsT0FIRztJQUlILElBQUEsT0FKRztJQUtILElBQUEsWUFMRztJQU1ILElBQUEsWUFORztJQU9ILElBQUEsZUFQRztJQVFILElBQUE7SUFSRyxHQUFQO0lBVUg7O0lBZ0JELE1BQU0sWUFBWSxHQUFHLENBQW9CLEdBQXBCLEVBQTBDLGFBQTFDLEVBQWtGLEtBQWxGLEtBQThIO0lBQy9JLE1BQUksYUFBYSxLQUFLLFVBQXRCLEVBQWtDO0lBQzlCLFFBQUksS0FBSyxLQUFLLGVBQWQsRUFDSSxPQUFPLElBQVAsQ0FESixLQUVLLElBQUksS0FBSyxLQUFLLGVBQWQsRUFDRCxPQUFPLEdBQUcsSUFBSSxPQUFkO0lBQ1AsR0FMRCxNQU1LLElBQUksYUFBYSxLQUFLLFVBQXRCLEVBQWtDO0lBQ25DLFFBQUksS0FBSyxLQUFLLGVBQWQsRUFDSSxPQUFPLEtBQVA7SUFDSixRQUFJLEtBQUssSUFBSSxlQUFiLEVBQ0ksT0FBTyxJQUFQO0lBQ1A7SUFDSixDQWJEO0lBd0JBOzs7O0lBSUc7OztJQUNHLFNBQVUsZUFBVixRQUFvTDtJQUFBLE1BQXBHO0lBQUUsSUFBQSxPQUFGO0lBQVcsSUFBQSxRQUFYO0lBQXFCLElBQUEsYUFBckI7SUFBb0MsSUFBQSxPQUFwQztJQUE2QyxJQUFBO0lBQTdDLEdBQW9HO0lBRXRMLFFBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFFLENBQUQsSUFBdUU7SUFBRyxJQUFBLENBQUMsQ0FBQyxjQUFGO0lBQW9CLElBQUEsT0FBTyxTQUFQLElBQUEsT0FBTyxXQUFQLFlBQUEsT0FBTyxDQUFHLENBQUgsQ0FBUDtJQUFpRCxHQUFoSixDQUF2QztJQUVBLFFBQU07SUFBRSxJQUFBLE9BQUY7SUFBVyxJQUFBLE9BQVg7SUFBb0IsSUFBQSxrQkFBa0IsRUFBRSxVQUF4QztJQUFvRCxJQUFBLGtCQUFrQixFQUFFLFVBQXhFO0lBQW9GLElBQUEsZUFBcEY7SUFBcUcsSUFBQTtJQUFyRyxNQUF5SCxhQUFhLENBQUM7SUFBRSxJQUFBLFdBQVcsRUFBRSxzQkFBZjtJQUF1QyxJQUFBLFdBQVcsRUFBRTtJQUFwRCxHQUFELENBQTVJO0lBS0EsUUFBTSwyQkFBMkIsR0FBMkNBLEdBQVcsQ0FBQyxTQUFTLHVCQUFULFFBQXNFO0lBQUEsUUFBckM7SUFBRSxNQUFBO0lBQUYsS0FBcUM7SUFDMUosVUFBTTtJQUFFLE1BQUEsdUJBQXVCLEVBQUU7SUFBM0IsUUFBK0MsVUFBVSxFQUEvRDtJQUNBLFVBQU07SUFBRSxNQUFBLGtCQUFGO0lBQXNCLE1BQUE7SUFBdEIsUUFBcUMsYUFBYSxDQUFZLEVBQVosQ0FBeEQsQ0FGMEo7SUFLMUo7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsSUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxZQUFNLE9BQU8sR0FBRyxVQUFVLEVBQTFCOztJQUNBLFVBQUksT0FBTyxJQUFJLEdBQUcsSUFBSSxPQUF0QixFQUErQjtJQUMxQixRQUFBLE9BQXVDLENBQUMsT0FBeEMsR0FBa0QsT0FBbEQ7SUFDSjtJQUNKLEtBTFEsRUFLTixDQUFDLEdBQUQsRUFBTSxPQUFOLENBTE0sQ0FBVDtJQU9BLFdBQU87SUFBRSxNQUFBLGVBQWUsRUFBRSxVQUFuQjtJQUErQixNQUFBO0lBQS9CLEtBQVA7O0lBR0EsYUFBUyxnQ0FBVCxRQUFpRztJQUFBLFVBQVosRUFBRSxHQUFHO0lBQUwsT0FBWTtJQUU3RjtJQUNBO0lBQ0E7SUFDQSxVQUFJLEtBQUssR0FBb0MscUJBQXFCLENBQVksUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUQsRUFBTSxhQUFOLEVBQXFCLGVBQXJCLENBQXpCLEdBQWlFLFNBQWpFLEdBQTZFLGFBQXpGLEVBQXdHLFNBQXhHLENBQXJCLENBQXdJLEVBQXhJLENBQTdDO0lBRUEsVUFBSSxHQUFHLElBQUksT0FBWCxFQUNJLEtBQUssQ0FBQyxPQUFOLEdBQWlCLENBQUQsSUFBYyxDQUFDLENBQUMsY0FBRixFQUE5QjtJQUVKLE1BQUEsS0FBSyxHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxLQUFELENBQWhCLENBQTFCOztJQUdBLFVBQUksYUFBYSxJQUFJLFVBQXJCLEVBQWlDO0lBQzdCO0lBQ0E7SUFDQTtJQUNBLFFBQUEsS0FBSyxDQUFDLEtBQU4sR0FBYyxJQUFkO0lBQ0EsUUFBQSxLQUFLLENBQUMsUUFBTixHQUFpQixDQUFDLENBQWxCOztJQUNBLFFBQUEsS0FBSyxDQUFDLE9BQU4sR0FBZ0IsQ0FBQyxJQUFJLGVBQWUsR0FBRyxLQUFsQixFQUFyQjtJQUNILE9BUEQsTUFRSztJQUNELFlBQUksR0FBRyxLQUFLLE9BQVosRUFBcUI7SUFDakIsVUFBQSxLQUFLLENBQUMsT0FBTixHQUFnQixPQUFoQjtJQUNILFNBRkQsTUFHSztJQUNELFVBQUEsS0FBSyxDQUFDLElBQU4sR0FBYSxJQUFiO0lBQ0EsVUFBQSxLQUFLLENBQUMsUUFBTixHQUFpQixDQUFqQjtJQUNBLFVBQUEsS0FBSyxDQUFDLGNBQUQsQ0FBTCxHQUF3QixPQUFPLEdBQUcsTUFBSCxHQUFZLFNBQTNDO0lBQ0g7O0lBQ0QsUUFBQSxLQUFLLENBQUMsZUFBRCxDQUFMLEdBQXlCLFFBQVEsQ0FBQyxRQUFULEVBQXpCO0lBRUgsT0FoQzRGOzs7SUFtQzdGLE1BQUEsS0FBSyxDQUFDLE9BQU4sR0FBZ0IsUUFBUSxHQUFJLENBQUQsSUFBTTtJQUFHLFFBQUEsQ0FBQyxDQUFDLGNBQUY7SUFBbUIsT0FBL0IsR0FBb0MsS0FBSyxDQUFDLE9BQWxFO0lBRUEsYUFBTyxjQUFjLEdBQWMsRUFBZCxFQUFrQixLQUFsQixDQUFyQjtJQUNIO0lBQ0osR0ExRHNGLEVBMERwRixDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLGFBQW5CLEVBQWtDLFFBQWxDLEVBQTRDLE9BQTVDLENBMURvRixDQUF2RjtJQTREQSxRQUFNLDJCQUEyQixHQUFHVyxHQUFXLENBQUMsU0FBUyx1QkFBVCxRQUFzRTtJQUFBLFFBQXJDO0lBQUUsTUFBQTtJQUFGLEtBQXFDO0lBQ2xILFVBQU07SUFBRSxNQUFBLHVCQUF1QixFQUFFO0lBQTNCLFFBQStDLFVBQVUsQ0FBWTtJQUFFLE1BQUE7SUFBRixLQUFaLENBQS9EOztJQUVBLGFBQVMsZ0NBQVQsUUFBaUc7SUFBQSxVQUFaLEVBQUUsR0FBRztJQUFMLE9BQVk7SUFFN0YsVUFBSSxRQUFRLEdBQW9DLHFCQUFxQixDQUFZLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFELEVBQU0sYUFBTixFQUFxQixlQUFyQixDQUF6QixHQUFpRSxTQUFqRSxHQUE2RSxhQUF6RixFQUF3RyxTQUF4RyxDQUFyQixDQUF3SSxFQUF4SSxDQUFoRDs7SUFFQSxVQUFJLGFBQWEsSUFBSSxVQUFyQixFQUFpQztJQUM3QixRQUFBLFFBQVEsQ0FBQyxRQUFULEdBQW9CLENBQXBCO0lBQ0EsUUFBQSxRQUFRLENBQUMsSUFBVCxHQUFnQixJQUFoQjtJQUNBLFFBQUEsUUFBUSxDQUFDLGVBQUQsQ0FBUixHQUE0QixRQUFRLENBQUMsUUFBVCxFQUE1QjtJQUNBLFFBQUEsUUFBUSxDQUFDLGNBQUQsQ0FBUixHQUEyQixPQUFPLENBQUMsUUFBUixFQUEzQjtJQUNILE9BVDRGOzs7SUFpQjdGLE1BQUEsUUFBUSxDQUFDLE9BQVQsR0FBbUIsUUFBUSxHQUFJLENBQUQsSUFBTTtJQUFHLFFBQUEsQ0FBQyxDQUFDLGNBQUY7SUFBbUIsT0FBL0IsR0FBbUMsUUFBUSxDQUFDLE9BQXZFO0lBRUEsYUFBTyxjQUFjLEdBQWMsUUFBZCxFQUF3QixlQUFlLENBQUMsRUFBRCxDQUF2QyxDQUFyQjtJQUNIOztJQUVELFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUVILEdBM0I4QyxFQTJCNUMsQ0FBQyxVQUFELEVBQWEsUUFBYixFQUF1QixPQUF2QixFQUFnQyxJQUFoQyxFQUFzQyxhQUF0QyxDQTNCNEMsQ0FBL0M7SUE4QkEsU0FBTztJQUNILElBQUEsMkJBREc7SUFFSCxJQUFBLDJCQUZHO0lBR0gsSUFBQSxlQUhHO0lBSUgsSUFBQTtJQUpHLEdBQVA7SUFRSDs7SUM1UEssU0FBVSxlQUFWLE9BQThLO0lBQUEsTUFBOUY7SUFBRSxJQUFBLGFBQUY7SUFBaUIsSUFBQSxPQUFqQjtJQUEwQixJQUFBLE9BQTFCO0lBQW1DLElBQUE7SUFBbkMsR0FBOEY7O0lBRWhMLFFBQU0sZUFBZSxHQUFJLENBQUQsSUFBMEQsT0FBMUQsYUFBMEQsT0FBMUQsdUJBQTBELE9BQU8sQ0FBRyxZQUFZLENBQUMsQ0FBRCxFQUE2QztJQUFFLElBQUEsT0FBTyxFQUFFLENBQUM7SUFBWixHQUE3QyxDQUFmLENBQXpGOztJQUNBLFFBQU07SUFBRSxJQUFBLGVBQUY7SUFBbUIsSUFBQSxlQUFuQjtJQUFvQyxJQUFBLDJCQUFwQztJQUFpRSxJQUFBO0lBQWpFLE1BQWlHLGVBQWUsQ0FBdUI7SUFBRSxJQUFBLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBYjtJQUFzQixJQUFBLGFBQXRCO0lBQXFDLElBQUEsSUFBSSxFQUFFLFVBQTNDO0lBQXVELElBQUEsUUFBdkQ7SUFBaUUsSUFBQSxPQUFPLEVBQUU7SUFBMUUsR0FBdkIsQ0FBdEg7SUFFQSxRQUFNLHVCQUF1QixHQUF1Q0EsR0FBVyxDQUFDLFNBQVMsdUJBQVQsUUFBc0U7SUFBQSxRQUFyQztJQUFFLE1BQUE7SUFBRixLQUFxQztJQUNsSixVQUFNO0lBQUUsTUFBQSxlQUFGO0lBQW1CLE1BQUE7SUFBbkIsUUFBd0QsMkJBQTJCLENBQUM7SUFBRSxNQUFBO0lBQUYsS0FBRCxDQUF6RjtJQUNBLFVBQU0sT0FBTyxHQUFJLE9BQU8sSUFBSSxPQUE1QjtJQUVBLElBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsWUFBTSxZQUFZLEdBQUcsZUFBZSxFQUFwQzs7SUFDQSxVQUFJLFlBQVksSUFBSSxHQUFHLEtBQUssT0FBNUIsRUFBcUM7SUFDaEMsUUFBQSxZQUFvQixDQUFDLGFBQXJCLEdBQXFDLE9BQXJDO0lBQ0o7SUFDSixLQUxRLEVBS04sQ0FBQyxPQUFELEVBQVUsR0FBVixDQUxNLENBQVQ7SUFPQSxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7O0lBRUEsYUFBUyw0QkFBVCxRQUE2RjtJQUFBOztJQUFBLFVBQVosRUFBRSxHQUFHO0lBQUwsT0FBWTtJQUV6RixVQUFJLEtBQUssR0FBb0MsZ0NBQWdDLENBQUMsRUFBRCxDQUE3RTtJQUNBLHdCQUFBLEtBQUssQ0FBQyxPQUFOLDJEQUFBLEtBQUssQ0FBQyxPQUFOLEdBQWtCLENBQUMsQ0FBQyxPQUFwQjtJQUVBLFVBQUksR0FBRyxJQUFJLE9BQVgsRUFDSSxLQUFLLENBQUMsSUFBTixHQUFhLFVBQWI7SUFFSixhQUFPLEtBQVA7SUFDSDtJQUNKLEdBdkI4RSxFQXVCNUUsQ0FBQywyQkFBRCxFQUE4QixPQUE5QixFQUF1QyxhQUF2QyxFQUFzRCxRQUF0RCxDQXZCNEUsQ0FBL0U7SUF5QkEsUUFBTSx1QkFBdUIsR0FBR1csR0FBVyxDQUFDLFNBQVMsdUJBQVQsUUFBc0U7SUFBQSxRQUFyQztJQUFFLE1BQUE7SUFBRixLQUFxQztJQUM5RyxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQXVDLDJCQUEyQixDQUFDO0lBQUUsTUFBQTtJQUFGLEtBQUQsQ0FBeEU7O0lBRUEsYUFBUyw0QkFBVCxRQUFnRztJQUFBLFVBQWYsRUFBRSxHQUFHO0lBQUwsT0FBZTtJQUM1RixhQUFPLGdDQUFnQyxDQUFDLEtBQUQsQ0FBdkM7SUFDSDtJQUVELFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUNILEdBUjBDLEVBUXhDLENBQUMsMkJBQUQsRUFBOEIsUUFBOUIsRUFBd0MsYUFBeEMsQ0FSd0MsQ0FBM0M7SUFXQSxTQUFPO0lBQ0gsSUFBQSx1QkFERztJQUVILElBQUE7SUFGRyxHQUFQO0lBS0g7O0lDQ0Q7Ozs7O0lBS0c7O0lBQ0csU0FBVSxnQkFBVixPQUFvTztJQUFBLE1BQXRJO0lBQUUsSUFBQSxRQUFGO0lBQVksSUFBQSxhQUFaO0lBQTJCLElBQUEsbUJBQTNCO0lBQWdELElBQUEsZ0JBQWdCLEVBQUU7SUFBbEUsR0FBc0k7SUFFdE8sUUFBTSxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQyx3QkFBRCxDQUExQztJQUNBLFFBQU07SUFBRSxJQUFBLGVBQUY7SUFBbUIsSUFBQSxzQkFBbkI7SUFBMkMsSUFBQSxzQkFBM0M7SUFBbUUsSUFBQSxhQUFuRTtJQUFrRixJQUFBLFlBQWxGO0lBQWdHLElBQUEsZ0JBQWhHO0lBQWtILElBQUE7SUFBbEgsTUFBdUksaUJBQWlCLENBQWtCO0lBQUUsSUFBQSxRQUFGO0lBQVksSUFBQSxhQUFaO0lBQTJCLElBQUE7SUFBM0IsR0FBbEIsQ0FBOUosQ0FIc087O0lBT3RPLFFBQU0sQ0FBQyxZQUFELEVBQWUsZUFBZixJQUFrQyxRQUFRLENBQUMsQ0FBRCxDQUFoRDtJQUNBLFFBQU0sY0FBYyxHQUFHTCxDQUFNLENBQUMsSUFBSSxHQUFKLEVBQUQsQ0FBN0IsQ0FSc087O0lBV3RPLFFBQU0sd0JBQXdCLEdBQUdLLEdBQVcsQ0FBQyxNQUFLO0lBQzlDLFFBQUksVUFBVSxHQUFHLFlBQVksR0FBRyxlQUFlLENBQUMsTUFBaEQ7SUFDQSxXQUFPLFVBQVUsSUFBSSxDQUFkLEdBQWtCLEtBQWxCLEdBQTBCLFVBQVUsSUFBSSxDQUFkLEdBQWtCLElBQWxCLEdBQXlCLE9BQTFEO0lBQ0gsR0FIMkMsRUFHekMsQ0FBQyxZQUFELEVBQWUsZUFBZSxDQUFDLE1BQS9CLENBSHlDLENBQTVDO0lBS0EsUUFBTSxzQkFBc0IsR0FBRyxpQkFBaUIsQ0FBQyx3QkFBRCxDQUFoRCxDQWhCc087SUFtQnRPOztJQUNBLFFBQU0sa0JBQWtCLEdBQUdMLENBQU0sQ0FBd0MsSUFBeEMsQ0FBakM7SUFDQSxRQUFNLDBCQUEwQixHQUFHSyxHQUFXLENBQUUsQ0FBRCxJQUF5QztJQUVwRixJQUFBLENBQUMsQ0FBQyxjQUFGO0lBRUEsVUFBTSxhQUFhLEdBQUcsc0JBQXNCLEVBQTVDOztJQUNBLFFBQUksYUFBYSxLQUFLLElBQWxCLElBQTJCLGFBQWEsS0FBSyxLQUFsQixJQUEyQixrQkFBa0IsQ0FBQyxPQUFuQixJQUE4QixJQUF4RixFQUErRjtJQUMzRixhQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFELEVBQUk7SUFBRSxRQUFBLGVBQWUsRUFBRTtJQUFuQixPQUFKLENBQWIsQ0FBdkI7SUFDSCxLQUZELE1BR0ssSUFBSSxhQUFhLEtBQUssT0FBdEIsRUFBK0I7SUFFaEMsTUFBQSxrQkFBa0IsQ0FBQyxPQUFuQixHQUE2QixJQUFJLEdBQUosRUFBN0I7O0lBQ0EsV0FBSyxJQUFJLEtBQVQsSUFBa0IsZUFBbEIsRUFBbUM7SUFDL0IsUUFBQSxrQkFBa0IsQ0FBQyxPQUFuQixDQUEyQixHQUEzQixDQUErQixLQUFLLENBQUMsS0FBckMsRUFBNEMsS0FBSyxDQUFDLFVBQU4sRUFBNUM7SUFDSDs7SUFFRCxhQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFELEVBQUk7SUFBRSxRQUFBLGVBQWUsRUFBRTtJQUFuQixPQUFKLENBQWIsQ0FBdkI7SUFDSCxLQVJJLE1BU0E7SUFBQTs7SUFDRCxhQUFPLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFELEVBQUk7SUFBRSxRQUFBLGVBQWUsMkJBQUUsa0JBQWtCLENBQUMsT0FBckIseUVBQWdDO0lBQWpELE9BQUosQ0FBYixDQUF2QjtJQUNIO0lBQ0osR0FwQjZDLEVBb0IzQyxFQXBCMkMsQ0FBOUMsQ0FyQnNPO0lBNEN0TztJQUNBOztJQUNBLFFBQU0sTUFBTSxHQUFHTCxDQUFNLENBQUMsSUFBSSxHQUFKLEVBQUQsQ0FBckI7SUFDQSxRQUFNLENBQUMsWUFBRCxFQUFlLGVBQWYsSUFBa0MsUUFBUSxDQUFDLEVBQUQsQ0FBaEQ7SUFDQSxRQUFNLENBQUMsV0FBRCxFQUFjLGdCQUFkLElBQWtDLFFBQVEsQ0FBQyxDQUFELENBQWhEO0lBRUEsUUFBTSxhQUFhLEdBQUdLLEdBQVcsQ0FBQyxDQUFDLEtBQUQsRUFBZ0IsT0FBaEIsS0FBOEM7SUFDNUUsUUFBSSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7SUFDbEIsVUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLEtBQTNCLENBQUwsRUFBd0M7SUFDcEMsUUFBQSxlQUFlLENBQUMsQ0FBQyxJQUFLLENBQUMsR0FBRyxDQUFYLENBQWY7SUFDQSxRQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLEtBQTNCO0lBQ0g7SUFDSixLQUxELE1BTUs7SUFDRCxVQUFJLGNBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLENBQTJCLEtBQTNCLENBQUosRUFBdUM7SUFDbkMsUUFBQSxlQUFlLENBQUMsQ0FBQyxJQUFLLENBQUMsR0FBRyxDQUFYLENBQWY7SUFDQSxRQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLE1BQXZCLENBQThCLEtBQTlCO0lBQ0g7SUFDSjtJQUNKLEdBYmdDLEVBYTlCLENBQUMsZUFBRCxFQUFrQixjQUFsQixDQWI4QixDQUFqQztJQWVBOzs7SUFHK0Q7O0lBRS9ELFFBQU0sMkJBQTJCLEdBQThDQSxHQUFXLENBQWdELEtBQS9DLElBQTJEO0lBQ2xKLFdBQU8sY0FBYyxHQUFpQjtJQUFFLHVCQUFpQjtJQUFuQixLQUFqQixFQUFvRCxLQUFwRCxDQUFyQjtJQUNILEdBRnlGLEVBRXZGLENBQUMsWUFBRCxDQUZ1RixDQUExRjtJQUlBLEVBQUEsU0FBUyxDQUFDLE1BQUs7SUFDWCxJQUFBLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBTixDQUFXLE1BQU0sQ0FBQyxPQUFsQixFQUEyQixJQUEzQixDQUFnQyxHQUFoQyxDQUFELENBQWY7SUFDSCxHQUZRLEVBRU4sQ0FBQyxXQUFELENBRk0sQ0FBVDtJQUlBLFFBQU0scUJBQXFCLEdBQTJDQSxHQUFXLENBQUMsaUJBQW1GO0lBQUEsUUFBekU7SUFBRSxNQUFBLEtBQUY7SUFBUyxNQUFBLElBQVQ7SUFBZSxNQUFBLE9BQWY7SUFBd0IsTUFBQSxFQUF4QjtJQUE0QixTQUFHO0lBQS9CLEtBQXlFO0lBRWpLLFVBQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxPQUFELENBQWxDO0lBRUEsSUFBQSxTQUFTLENBQUMsTUFBSztJQUNYLE1BQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxHQUFmLENBQW1CLEVBQW5CO0lBQ0EsTUFBQSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFSLENBQWhCO0lBRUEsYUFBTyxNQUFLO0lBQ1IsUUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLE1BQWYsQ0FBc0IsRUFBdEI7SUFDQSxRQUFBLGdCQUFnQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQVIsQ0FBaEI7SUFDSCxPQUhEO0lBSUgsS0FSUSxFQVFOLENBQUMsRUFBRCxDQVJNLENBQVQ7SUFXQSxJQUFBLFNBQVMsQ0FBQyxNQUFLO0lBQ1gsTUFBQSxhQUFhLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBYjtJQUNILEtBRlEsRUFFTixDQUFDLEtBQUQsRUFBUSxPQUFSLENBRk0sQ0FBVDtJQUlBLFVBQU07SUFBRSxNQUFBLFFBQUY7SUFBWSxNQUFBLDJCQUFaO0lBQXlDLE1BQUE7SUFBekMsUUFBMkUsc0JBQXNCLENBQUM7SUFBRSxNQUFBLEtBQUY7SUFBUyxNQUFBLElBQVQ7SUFBZSxNQUFBLEVBQWY7SUFBbUIsTUFBQSxVQUFuQjtJQUErQixTQUFHO0lBQWxDLEtBQUQsQ0FBdkc7SUFFQSxXQUFPO0lBQ0gsTUFBQSxRQURHO0lBRUgsTUFBQSwwQkFBMEIsRUFBRUEsR0FBVyxDQUFnRCxLQUEvQyxJQUE0RCxjQUFjLEdBQWlCLEVBQWpCLEVBQXFCLDJCQUEyQixDQUFDLHNCQUFzQixDQUFDLEtBQUQsQ0FBdkIsQ0FBaEQsQ0FBM0UsRUFBNkosQ0FBQyxzQkFBRCxFQUF5QiwyQkFBekIsQ0FBN0o7SUFGcEMsS0FBUDtJQU1ILEdBM0JnRixFQTJCOUUsQ0FBQyxzQkFBRCxFQUF5QixhQUF6QixFQUF3QyxzQkFBeEMsQ0EzQjhFLENBQWpGO0lBNkJBLFNBQU87SUFDSCxJQUFBLGlCQUFpQixFQUFFLGVBRGhCO0lBRUgsSUFBQSxxQkFGRztJQUdILElBQUEsMkJBSEc7SUFJSCxJQUFBLGVBQWUsRUFBRSx3QkFBd0IsRUFKdEM7SUFLSCxJQUFBLG9CQUFvQixFQUFHLFlBQVksR0FBRyxlQUFlLENBQUMsTUFMbkQ7SUFNSCxJQUFBLDBCQU5HO0lBT0gsSUFBQSxhQVBHO0lBUUgsSUFBQSxLQUFLLEVBQUUsWUFSSjtJQVNILElBQUEsZ0JBVEc7SUFVSCxJQUFBLGdCQVZHO0lBV0gsSUFBQTtJQVhHLEdBQVA7SUFhSDs7SUN6S0Q7Ozs7Ozs7Ozs7Ozs7SUFhRzs7SUFDRyxTQUFVLGNBQVYsT0FBOEY7SUFBQSxNQUFyRDtJQUFFLElBQUEsT0FBRjtJQUFXLElBQUE7SUFBWCxHQUFxRDtJQUVoRyxRQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxPQUFELENBQXZDO0lBQ0EsUUFBTSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxXQUFELENBQTNDO0lBQ0EsUUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUQsQ0FBL0I7SUFFQSxRQUFNLGVBQWUsR0FBR0EsR0FBVyxDQUFDLFNBQVMsZUFBVCxDQUF5QixDQUF6QixFQUFvRDtJQUFBOztJQUNwRixVQUFNLFFBQVEsa0JBQUcsVUFBVSxFQUFiLGdEQUFHLFlBQWMsYUFBL0I7SUFDQSxJQUFlLFFBQUgsYUFBRyxRQUFILHVCQUFHLFFBQVEsQ0FBRSxZQUYyRDtJQUtwRjs7SUFDQSxRQUFJLENBQUMsQ0FBQyxNQUFGLEtBQVksUUFBWixhQUFZLFFBQVosdUJBQVksUUFBUSxDQUFFLGVBQXRCLENBQUosRUFBMkM7SUFDdkMsTUFBQSxhQUFhLENBQUMsVUFBRCxDQUFiO0lBQ0g7O0lBRUQsUUFBSSxRQUFRLEdBQUcsaUJBQWlCLEVBQWhDOztJQUVBLFFBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFGLFlBQW9CLE9BQXBDLEVBQTZDO0lBQ3pDLFVBQUksQ0FBQyxLQUFLLENBQUMsT0FBTixDQUFjLFFBQWQsQ0FBTCxFQUNJLFFBQVEsR0FBRyxDQUFDLFFBQUQsQ0FBWDtJQUVKLFVBQUksZ0JBQWdCLEdBQUcsS0FBdkI7O0lBRUEsV0FBSyxJQUFJLE9BQVQsSUFBb0IsUUFBcEIsRUFBOEI7SUFDMUIsWUFBSSxPQUFPLENBQUMsUUFBUixDQUFpQixDQUFDLENBQUMsTUFBbkIsQ0FBSixFQUFnQztJQUM1QixVQUFBLGdCQUFnQixHQUFHLElBQW5CO0lBQ0E7SUFDSDtJQUNKOztJQUVELFVBQUksQ0FBQyxnQkFBTCxFQUNJLE9BQU8sQ0FBQyxVQUFELENBQVA7SUFDUDtJQUNKLEdBNUJrQyxFQTRCaEMsRUE1QmdDLENBQW5DO0lBOEJBLFFBQU07SUFBRSxJQUFBLHFCQUFGO0lBQXlCLElBQUE7SUFBekIsTUFBd0MsZ0JBQWdCLENBQUk7SUFDOUQsSUFBQSx5QkFBeUIsRUFBRUEsR0FBVyxDQUFFLFVBQUQsSUFBeUI7SUFDNUQsVUFBSSxzQkFBc0IsR0FBRyxpQkFBaUIsRUFBOUM7O0lBRUEsVUFBSSxzQkFBSixFQUE0QjtJQUN4QixZQUFJLENBQUMsS0FBSyxDQUFDLE9BQU4sQ0FBYyxzQkFBZCxDQUFMLEVBQ0ksc0JBQXNCLEdBQUcsQ0FBQyxzQkFBRCxDQUF6Qjs7SUFFSixhQUFLLElBQUksU0FBVCxJQUFzQixzQkFBdEIsRUFBOEM7SUFDMUMsY0FBSSxTQUFKLGFBQUksU0FBSixlQUFJLFNBQVMsQ0FBRSxRQUFYLENBQW9CLFVBQXBCLENBQUosRUFDSTtJQUNQO0lBQ0o7O0lBRUQsTUFBQSxPQUFPLENBQUMsWUFBRCxDQUFQO0lBQ0gsS0FkcUMsRUFjbkMsRUFkbUM7SUFEd0IsR0FBSixDQUE5RDtJQW1CQSxRQUFNO0lBQUUsSUFBQTtJQUFGLE1BQXlCLGFBQWEsQ0FBSTtJQUM1QyxJQUFBLGVBQWUsRUFBRUEsR0FBVyxDQUFFLENBQUQsSUFBZ0I7SUFDekMsWUFBTSxRQUFRLEdBQUcsQ0FBSCxhQUFHLENBQUgsdUJBQUcsQ0FBQyxDQUFFLGFBQXBCO0lBQ0EsWUFBTSxNQUFNLEdBQUcsUUFBSCxhQUFHLFFBQUgsdUJBQUcsUUFBUSxDQUFFLFdBQXpCLENBRnlDO0lBS3pDO0lBQ0E7SUFDQTtJQUNBOztJQUNBLFlBQU0sU0FBUyxHQUFJLENBQUQsSUFBa0I7SUFBRyxZQUFJLE9BQU8sRUFBWCxFQUFlLGVBQWUsQ0FBQyxDQUFELENBQWY7SUFBcUIsT0FBM0U7O0lBQ0EsWUFBTSxVQUFVLEdBQUksQ0FBRCxJQUFrQjtJQUFHLFlBQUksT0FBTyxFQUFYLEVBQWUsZUFBZSxDQUFDLENBQUQsQ0FBZjtJQUFxQixPQUE1RTs7SUFDQSxZQUFNLE9BQU8sR0FBSSxDQUFELElBQXFCO0lBQUcsWUFBSSxDQUFDLENBQUMsR0FBRixLQUFVLFFBQWQsRUFBd0I7SUFBRSxVQUFBLGFBQWEsQ0FBQyxRQUFELENBQWI7SUFBMEI7SUFBRSxPQUE5Rjs7SUFFQSxNQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxnQkFBUixDQUF5QixXQUF6QixFQUFzQyxTQUF0QyxFQUFpRDtJQUFFLFFBQUEsT0FBTyxFQUFFO0lBQVgsT0FBakQ7SUFDQSxNQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxVQUF2QyxFQUFtRDtJQUFFLFFBQUEsT0FBTyxFQUFFO0lBQVgsT0FBbkQ7SUFDQSxNQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxnQkFBUixDQUF5QixTQUF6QixFQUFvQyxPQUFwQztJQUVBLGFBQU8sTUFBSztJQUNSLFFBQUEsTUFBTSxTQUFOLElBQUEsTUFBTSxXQUFOLFlBQUEsTUFBTSxDQUFFLG1CQUFSLENBQTRCLFdBQTVCLEVBQXlDLFNBQXpDO0lBQ0EsUUFBQSxNQUFNLFNBQU4sSUFBQSxNQUFNLFdBQU4sWUFBQSxNQUFNLENBQUUsbUJBQVIsQ0FBNEIsWUFBNUIsRUFBMEMsVUFBMUM7SUFDQSxRQUFBLE1BQU0sU0FBTixJQUFBLE1BQU0sV0FBTixZQUFBLE1BQU0sQ0FBRSxtQkFBUixDQUE0QixTQUE1QixFQUF1QyxPQUF2QztJQUNILE9BSkQ7SUFLSCxLQXRCMkIsRUFzQnpCLEVBdEJ5QjtJQURnQixHQUFKLENBQTVDO0lBMEJBLFNBQU87SUFBRSxJQUFBLG1CQUFtQixFQUFFQSxHQUFXLENBQStCLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFELENBQW5CLENBQTdELEVBQTBGLENBQUMscUJBQUQsRUFBd0Isa0JBQXhCLENBQTFGO0lBQWxDLEdBQVA7SUFDSDtJQUVEOzs7OztJQUtHOztJQUNHLFNBQVUsUUFBVixRQUF3RztJQUFBLE1BQW5EO0lBQUUsSUFBQSxJQUFGO0lBQVEsSUFBQTtJQUFSLEdBQW1EO0lBRTFHLFFBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDLE9BQUQsQ0FBdkM7SUFFQSxRQUFNLENBQUMsb0JBQUQsRUFBdUIsdUJBQXZCLElBQWtELFFBQVEsQ0FBQyxLQUFELENBQWhFO0lBQ0EsRUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiO0lBRUEsUUFBTTtJQUFFLElBQUEsRUFBRSxFQUFFLE9BQU47SUFBZSxJQUFBLGdCQUFnQixFQUFFLGVBQWpDO0lBQWtELElBQUEsb0JBQW9CLEVBQUU7SUFBeEUsTUFBdUcsV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXhIO0lBQ0EsUUFBTTtJQUFFLElBQUEsRUFBRSxFQUFFLE1BQU47SUFBYyxJQUFBLGdCQUFnQixFQUFFLGNBQWhDO0lBQWdELElBQUEsb0JBQW9CLEVBQUU7SUFBdEUsTUFBb0csV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXJIO0lBQ0EsUUFBTTtJQUFFLElBQUEsRUFBRSxFQUFFLE9BQU47SUFBZSxJQUFBLGdCQUFnQixFQUFFLGVBQWpDO0lBQWtELElBQUEsb0JBQW9CLEVBQUU7SUFBeEUsTUFBdUcsV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQXhIO0lBRUEsUUFBTTtJQUFFLElBQUEsa0JBQWtCLEVBQUUsa0JBQXRCO0lBQTBDLElBQUEsVUFBVSxFQUFFO0lBQXRELE1BQTBFLGFBQWEsQ0FBZSxFQUFmLENBQTdGO0lBQ0EsUUFBTTtJQUFFLElBQUE7SUFBRixNQUEwQixjQUFjLENBQUM7SUFBRSxJQUFBLE9BQU8sRUFBRSxhQUFYO0lBQTBCLElBQUEsV0FBVyxFQUFFO0lBQXZDLEdBQUQsQ0FBOUM7SUFFQSxRQUFNLGdCQUFnQixHQUFHQSxHQUFXLENBQUMsU0FBUyxnQkFBVCxHQUF5QjtJQUUxRCxhQUFTLHFCQUFULENBQWdGLEtBQWhGLEVBQXdGO0lBQ3BGLGFBQU8sY0FBYyxHQUFvQjtJQUFFLFFBQUEsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDLFVBQUQ7SUFBbEMsT0FBcEIsRUFBc0UsS0FBdEUsQ0FBckI7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFDSCxHQVBtQyxFQU9qQyxFQVBpQyxDQUFwQzs7SUFTQSxRQUFNLGFBQWEsR0FBRyxpQkFBbUc7SUFBQSxRQUEzQztJQUFFLG9CQUFjLFNBQWhCO0lBQTJCLE1BQUEsSUFBM0I7SUFBaUMsU0FBRztJQUFwQyxLQUEyQztJQUNySCxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQXdCLFlBQVksQ0FBZTtJQUFFLE1BQUEsVUFBVSxFQUFFO0lBQWQsS0FBZixDQUExQztJQUNBLFVBQU0sRUFBRSxHQUFHLDBCQUEwQixDQUFDLGlCQUFELENBQTFCLENBQThDLEVBQTlDLENBQVg7SUFDQSxVQUFNLEVBQUUsR0FBRyxlQUFlLENBQUMsRUFBRCxDQUExQjtJQUNBLFVBQU0sTUFBTSxHQUFHLHlCQUF5QixDQUFDLGtCQUFELENBQXpCLENBQThDLEVBQTlDLENBQWY7SUFDQSxXQUFPLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLGNBQWMsR0FBaUIsa0JBQWtCLENBQUM7SUFBRSxNQUFBLElBQUksRUFBRTtJQUFSLEtBQUQsQ0FBbkMsRUFBeUQsb0JBQW9CLEdBQUcsTUFBSCxHQUFZLEVBQXpGLENBQWYsQ0FBcEIsQ0FBeEI7SUFDSCxHQU5EOztJQVFBLFFBQU0sYUFBYSxHQUFHQSxHQUFXLENBQUMsU0FBUyxhQUFULEdBQXNCO0lBRXBELFVBQU0sa0JBQWtCLEdBQUcsVUFBd0QsS0FBeEQsRUFBZ0U7SUFDdkYsYUFBTyxlQUFlLENBQUMsS0FBRCxDQUF0QjtJQUNILEtBRkQ7O0lBSUEsV0FBTztJQUFFLE1BQUE7SUFBRixLQUFQO0lBQ0gsR0FQZ0MsRUFPOUIsRUFQOEIsQ0FBakM7SUFTQSxRQUFNLFlBQVksR0FBR0EsR0FBVyxDQUFDLFNBQVMsWUFBVCxRQUE0RjtJQUFBLFFBQXpDO0lBQUUsTUFBQTtJQUFGLEtBQXlDO0lBQ3pILElBQUEsdUJBQXVCLENBQUMsV0FBRCxDQUF2Qjs7SUFFQSxVQUFNLGlCQUFpQixHQUFHLFVBQXVELEtBQXZELEVBQStEO0lBQ3JGLGFBQU8sY0FBYyxDQUFDLEtBQUQsQ0FBckI7SUFDSCxLQUZEOztJQUlBLFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUNILEdBUitCLEVBUTdCLEVBUjZCLENBQWhDO0lBWUEsU0FBTztJQUNILElBQUEsYUFERztJQUVILElBQUEsYUFGRztJQUdILElBQUEsWUFIRztJQUlILElBQUE7SUFKRyxHQUFQO0lBTUg7SUFHRDs7Ozs7SUFLRzs7SUFDRyxTQUFVLGFBQVYsQ0FBd0IsVUFBeEIsRUFBMkM7SUFDN0MsUUFBTSxDQUFDLGlCQUFELEVBQW9CLGlCQUFwQixJQUF5QyxlQUFlLENBQWdCLElBQWhCLENBQTlEO0lBQ0EsUUFBTSxDQUFDLGtCQUFELEVBQXFCLGtCQUFyQixJQUEyQyxlQUFlLENBQWdCLElBQWhCLENBQWhFO0lBRUEsRUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxRQUFJLFVBQUosRUFBZ0I7SUFFWjtJQUNBO0lBQ0EsWUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUFuRDtJQUNBLFlBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsVUFBcEQsQ0FMWTs7SUFRWixVQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxlQUFULENBQXlCLFdBQWxEO0lBQ0EsVUFBSSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUFuRCxDQVRZOztJQVlaLE1BQUEsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsU0FBekIsQ0FBbUMsR0FBbkMsQ0FBdUMsd0JBQXZDLEVBWlk7SUFlWjs7SUFDQSxNQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLE9BQXpCLENBQWlDLGNBQWpDLElBQW1ELENBQUMsRUFBRSxRQUFRLENBQUMsZUFBVCxDQUF5QixPQUF6QixDQUFpQyxjQUFqQyxLQUFvRCxHQUF0RCxJQUE2RCxDQUE5RCxFQUFpRSxRQUFqRSxFQUFuRCxDQWhCWTtJQW1CWjs7SUFDQSxVQUFJLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxlQUFULENBQXlCLFdBQXJEO0lBQ0EsVUFBSSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUF0RDtJQUNBLFVBQUksY0FBYyxHQUFJLHFCQUFxQixHQUFHLGtCQUE5QztJQUNBLFVBQUksZUFBZSxHQUFJLHNCQUFzQixHQUFHLG1CQUFoRCxDQXZCWTs7SUEwQlosVUFBSSxjQUFjLEdBQUcsRUFBckIsRUFDSSxjQUFjLEdBQUcsQ0FBakI7SUFDSixVQUFJLGVBQWUsR0FBRyxFQUF0QixFQUNJLGVBQWUsR0FBRyxDQUFsQixDQTdCUTs7SUFnQ1osTUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixLQUF6QixDQUErQixXQUEvQixDQUEyQyx3QkFBM0MsRUFBcUUsR0FBRyxjQUFjLElBQXRGO0lBQ0EsTUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixLQUF6QixDQUErQixXQUEvQixDQUEyQyx5QkFBM0MsRUFBc0UsR0FBRyxlQUFlLElBQXhGO0lBQ0EsTUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixLQUF6QixDQUErQixXQUEvQixDQUEyQyx1QkFBM0MsRUFBb0UsR0FBRyxpQkFBaUIsSUFBeEY7SUFDQSxNQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLEtBQXpCLENBQStCLFdBQS9CLENBQTJDLHdCQUEzQyxFQUFxRSxHQUFHLGtCQUFrQixJQUExRjtJQUVBLE1BQUEsaUJBQWlCLENBQUMsY0FBRCxDQUFqQjtJQUNBLE1BQUEsa0JBQWtCLENBQUMsZUFBRCxDQUFsQjtJQUVBLGFBQU8sTUFBSztJQUNSO0lBQ0EsUUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixPQUF6QixDQUFpQyxjQUFqQyxJQUFtRCxDQUFDLEVBQUUsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsT0FBekIsQ0FBaUMsY0FBakMsS0FBb0QsR0FBdEQsSUFBNkQsQ0FBOUQsRUFBaUUsUUFBakUsRUFBbkQ7O0lBQ0EsWUFBSSxRQUFRLENBQUMsZUFBVCxDQUF5QixPQUF6QixDQUFpQyxjQUFqQyxLQUFvRCxHQUF4RCxFQUE2RDtJQUV6RDtJQUNBLFVBQUEsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsZUFBekIsQ0FBeUMsb0JBQXpDO0lBQ0EsVUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixDQUFtQyxNQUFuQyxDQUEwQyx3QkFBMUMsRUFKeUQ7SUFPekQ7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsZ0JBQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsS0FBekIsQ0FBK0IsY0FBOUQ7SUFDQSxVQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLEtBQXpCLENBQStCLGNBQS9CLEdBQWdELE1BQWhEO0lBQ0EsVUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixRQUF6QixDQUFrQztJQUFFLFlBQUEsR0FBRyxFQUFFLGlCQUFQO0lBQTBCLFlBQUEsSUFBSSxFQUFFLGtCQUFoQztJQUFvRCxZQUFBLFFBQVEsRUFBRTtJQUE5RCxXQUFsQztJQUNBLFVBQUEsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsS0FBekIsQ0FBK0IsY0FBL0IsR0FBZ0Qsc0JBQWhEO0lBQ0g7SUFDSixPQW5CRDtJQXFCSDtJQUNKLEdBL0RRLEVBK0ROLENBQUMsVUFBRCxDQS9ETSxDQUFUO0lBaUVBLFNBQU87SUFBRSxJQUFBLGlCQUFGO0lBQXFCLElBQUE7SUFBckIsR0FBUDtJQUNIOztJQ3JRSyxTQUFVLGFBQVYsT0FBaUo7SUFBQSxNQUF0RjtJQUFFLElBQUEsSUFBRjtJQUFRLElBQUE7SUFBUixHQUFzRjtJQUNuSjtJQUNBO0lBQ0EsUUFBTTtJQUFFLElBQUEsZ0JBQUY7SUFBb0IsSUFBQSxZQUFwQjtJQUFrQyxJQUFBLGFBQWxDO0lBQWlELElBQUE7SUFBakQsTUFBbUUsUUFBUSxDQUFnQjtJQUFFLElBQUEsSUFBRjtJQUFRLElBQUE7SUFBUixHQUFoQixDQUFqRjtJQUVBLFFBQU0saUJBQWlCLEdBQUdXLEdBQVcsQ0FBQyxNQUE0QjtJQUM5RCxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQTRCLGdCQUFnQixFQUFsRDtJQUNBLFdBQU87SUFBRSxNQUFBLHNCQUFzQixFQUFFO0lBQTFCLEtBQVA7SUFDSCxHQUhvQyxFQUdsQyxDQUFDLGdCQUFELENBSGtDLENBQXJDO0lBS0EsUUFBTSxhQUFhLEdBQUdBLEdBQVcsQ0FBQyxTQUFpRTtJQUFBLFFBQTdDO0lBQUUsTUFBQTtJQUFGLEtBQTZDO0lBQy9GLFVBQU07SUFBRSxNQUFBO0lBQUYsUUFBd0IsWUFBWSxDQUFJO0lBQUUsTUFBQTtJQUFGLEtBQUosQ0FBMUM7SUFDQSxXQUFPO0lBQUUsTUFBQSxrQkFBa0IsRUFBRTtJQUF0QixLQUFQO0lBQ0gsR0FIZ0MsRUFHOUIsQ0FBQyxnQkFBRCxDQUg4QixDQUFqQztJQUlBLFFBQU0sY0FBYyxHQUFHLGFBQXZCO0lBRUEsUUFBTSxjQUFjLEdBQUdBLEdBQVcsQ0FBQyxNQUF3QjtJQUN2RCxVQUFNO0lBQUUsTUFBQTtJQUFGLFFBQXlCLGFBQWEsRUFBNUM7SUFDQSxXQUFPO0lBQUUsTUFBQSxtQkFBbUIsRUFBRTtJQUF2QixLQUFQO0lBQ0gsR0FIaUMsRUFHL0IsQ0FBQyxhQUFELENBSCtCLENBQWxDO0lBS0EsU0FBTztJQUNILElBQUEsY0FERztJQUVILElBQUEsY0FGRztJQUdILElBQUEsYUFIRztJQUlILElBQUE7SUFKRyxHQUFQO0lBTUg7O0lDR0ssU0FBVSxtQkFBVixPQUFrTDtJQUFBLE1BQXRDLEVBQUUsR0FBRztJQUFMLEdBQXNDO0lBR3BMLFFBQU07SUFBRSxJQUFBLGdCQUFGO0lBQW9CLElBQUE7SUFBcEIsTUFBd0MsV0FBVyxDQUFJLEVBQUosQ0FBekQ7SUFFQSxRQUFNO0lBQUUsSUFBQSxvQkFBRjtJQUF3QixJQUFBLG9CQUF4QjtJQUE4QyxJQUFBLHlCQUE5QztJQUF5RSxJQUFBO0lBQXpFLE1BQXVHLGVBQWUsQ0FBQztJQUFFLElBQUEsV0FBVyxFQUFFLHFCQUFmO0lBQXNDLElBQUEsV0FBVyxFQUFFO0lBQW5ELEdBQUQsQ0FBNUg7SUFDQSxRQUFNO0lBQUUsSUFBQSxzQkFBRjtJQUEwQixJQUFBLHNCQUExQjtJQUFrRCxJQUFBLGVBQWxEO0lBQW1FLElBQUEsZUFBbkU7SUFBb0YsSUFBQSxnQkFBcEY7SUFBc0csSUFBQSxZQUF0RztJQUFvSCxJQUFBLGFBQXBIO0lBQW1JLElBQUE7SUFBbkksTUFBd0osaUJBQWlCLENBQXNELEVBQUUsR0FBRyxJQUFMO0lBQVcsSUFBQSxtQkFBbUIsRUFBRTtJQUFoQyxHQUF0RCxDQUEvSztJQUNBLFFBQU07SUFBRSxJQUFBO0lBQUYsTUFBZ0Msb0JBQW9CLEVBQTFEO0lBRUEsUUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLE1BQW5DO0lBRUEsUUFBTSxDQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFlBQTFCLElBQTBDLFFBQVEsQ0FBQyxLQUFELENBQXhEO0lBRUEsUUFBTSxtQkFBbUIsR0FBSSxDQUFDLENBQUMsZ0JBQS9CO0lBRUEsRUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFVBQXBCLEVBQWdDLEVBQUUsQ0FBbEMsRUFBcUM7SUFDakMsTUFBQSxlQUFlLENBQUMsQ0FBRCxDQUFmLENBQW1CLHNCQUFuQixDQUEwQyxtQkFBMUM7SUFDSDtJQUNKLEdBSlEsRUFJTixDQUFDLG1CQUFELEVBQXNCLFVBQXRCLENBSk0sQ0FBVDtJQU1BLFFBQU0sbUJBQW1CLEdBQXlDVyxHQUFXLENBQUUsSUFBRCxJQUF5RDtJQUFBOztJQUVuSSxVQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBdEI7SUFDQSxVQUFNLENBQUMsbUJBQUQsRUFBc0Isc0JBQXRCLElBQWdELFFBQVEsQ0FBQyxLQUFELENBQTlEO0lBQ0EsVUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLFFBQUQsQ0FBbkM7SUFDQSxVQUFNO0lBQUUsTUFBQSxrQkFBRjtJQUFzQixNQUFBO0lBQXRCLFFBQXFDLGFBQWEsQ0FBSSxFQUFKLENBQXhEO0lBQ0EsVUFBTSxjQUFjLEdBQUcsaUJBQWlCLG1CQUFDLElBQUksQ0FBQyxRQUFOLDJEQUFtQixNQUFLLEVBQXhCLENBQXhDO0lBRUEsVUFBTTtJQUFFLE1BQUEsUUFBRjtJQUFZLE1BQUEsNkJBQVo7SUFBMkMsTUFBQTtJQUEzQyxRQUEyRSxzQkFBc0IsQ0FBQyxFQUFFLEdBQUcsSUFBTDtJQUFXLE1BQUE7SUFBWCxLQUFELENBQXZHO0lBRUEsSUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixZQUFNLE9BQU8sR0FBRyxVQUFVLEVBQTFCOztJQUNBLFVBQUksT0FBTyxJQUFJLFlBQVksRUFBM0IsRUFBK0I7SUFDM0IsUUFBQSxjQUFjLFNBQWQsSUFBQSxjQUFjLFdBQWQsWUFBQSxjQUFjLENBQUc7SUFBRSxVQUFBLE1BQU0sRUFBRSxPQUFWO0lBQW1CLFVBQUEsYUFBYSxFQUFFLE9BQWxDO0lBQTJDLFdBQUMsV0FBRCxHQUFlO0lBQUUsWUFBQSxRQUFRLEVBQUU7SUFBWjtJQUExRCxTQUFILENBQWQ7SUFDSDtJQUNKLEtBTGMsRUFLWixDQUFDLFFBQUQsQ0FMWSxDQUFmO0lBT0EsV0FBTztJQUFFLE1BQUEsd0JBQUY7SUFBNEIsTUFBQTtJQUE1QixLQUFQOztJQUVBLGFBQVMsd0JBQVQsQ0FBcUUsS0FBckUsRUFBNkU7SUFDekUsWUFBTSxRQUFRLEdBQTRCLHFCQUFxQixDQUFJLElBQUksQ0FBQyxRQUFMLEdBQWUsSUFBZixHQUF1QixDQUFELElBQU07SUFDM0YsUUFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBZjtJQUNBLFFBQUEsY0FBYyxTQUFkLElBQUEsY0FBYyxXQUFkLFlBQUEsY0FBYyxDQUFHLEVBQUUsR0FBRyxDQUFMO0lBQVEsV0FBQyxXQUFELEdBQWU7SUFBRSxZQUFBLFFBQVEsRUFBRSxDQUFDLFdBQVc7SUFBeEI7SUFBdkIsU0FBSCxDQUFkO0lBQ0EsUUFBQSxDQUFDLENBQUMsY0FBRjtJQUNILE9BSjhELEVBSTVEO0lBQUUsUUFBQSxLQUFLLEVBQUUsbUJBQW1CLEdBQUcsU0FBSCxHQUFlO0lBQTNDLE9BSjRELENBQXJCLENBSWlCLEVBSmpCLENBQTFDO0lBTUEsTUFBQSxLQUFLLENBQUMsSUFBTixHQUFhLFFBQWI7SUFDQSxNQUFBLEtBQUssQ0FBQyxjQUFELENBQUwsR0FBeUIsVUFBRCxDQUFhLFFBQWIsRUFBeEI7SUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsQ0FBQyxJQUFJLENBQUMsS0FBTCxHQUFhLENBQWQsRUFBaUIsUUFBakIsRUFBekI7SUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsQ0FBQyxRQUFELGFBQUMsUUFBRCxjQUFDLFFBQUQsR0FBYSxLQUFiLEVBQW9CLFFBQXBCLEVBQXpCO0lBQ0EsVUFBSSxJQUFJLENBQUMsUUFBVCxFQUNJLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsTUFBekI7SUFFSixhQUFPLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLGNBQWMsR0FBTSxRQUFOLEVBQWdCLEtBQWhCLENBQWYsQ0FBNUIsQ0FBekI7SUFDSDtJQUVKLEdBcEM0RSxFQW9DMUUsQ0FBQyxzQkFBRCxFQUF5QixVQUF6QixFQUFxQyxtQkFBckMsQ0FwQzBFLENBQTdFO0lBc0NBLFFBQU0sb0JBQW9CLEdBQUdBLEdBQVcsQ0FBQyxTQUFTLG9CQUFULEdBQTZCO0lBQ2xFLGFBQVMseUJBQVQsQ0FBc0UsS0FBdEUsRUFBOEU7SUFDMUUsWUFBTTtJQUFFLFFBQUE7SUFBRixVQUFnQyxvQkFBb0IsRUFBMUQ7SUFDQSxhQUFPLHlCQUF5QixDQUFDLEtBQUQsQ0FBaEM7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFDSCxHQVB1QyxFQU9yQyxDQUFDLG9CQUFELENBUHFDLENBQXhDO0lBU0EsU0FBTztJQUFFLElBQUEsbUJBQUY7SUFBdUIsSUFBQSxvQkFBdkI7SUFBNkMsSUFBQSxvQkFBN0M7SUFBbUUsSUFBQSxhQUFuRTtJQUFrRixJQUFBLGdCQUFsRjtJQUFvRyxJQUFBLGdCQUFwRztJQUFzSCxJQUFBLEtBQUssRUFBRSxZQUE3SDtJQUEySSxJQUFBO0lBQTNJLEdBQVA7O0lBR0EsV0FBUyxvQkFBVCxDQUFpRSxLQUFqRSxFQUF5RTtJQUNyRSxJQUFBLEtBQUssQ0FBQyxJQUFOLEdBQWEsU0FBYjtJQUNBLElBQUEsS0FBSyxDQUFDLHNCQUFELENBQUwsR0FBZ0MsTUFBaEM7SUFDQSxXQUFPLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLGNBQWMsR0FBTTtJQUFFLE1BQUEsU0FBRjtJQUFhLE1BQUEsT0FBYjtJQUFzQixNQUFBO0lBQXRCLEtBQU4sRUFBMEMsS0FBMUMsQ0FBZixDQUExQixDQUFqQixDQUE3QjtJQUNIOztJQUlELFdBQVMsU0FBVCxDQUFtQixDQUFuQixFQUFtQztJQUFJLFFBQUksQ0FBQyxDQUFDLEdBQUYsSUFBUyxPQUFiLEVBQXNCLFlBQVksQ0FBQyxJQUFELENBQVo7SUFBcUI7O0lBQ2xGLFdBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFpQztJQUFJLFFBQUksQ0FBQyxDQUFDLEdBQUYsSUFBUyxPQUFiLEVBQXNCLFlBQVksQ0FBQyxLQUFELENBQVo7SUFBc0I7O0lBQ2pGLFdBQVMsVUFBVCxDQUFvQixDQUFwQixFQUFpQztJQUFJLElBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtJQUFzQjtJQUU5RDs7SUNoRkssU0FBVSxvQkFBVixPQUE2TjtJQUFBLE1BQS9FO0lBQUUsSUFBQSxhQUFGO0lBQWlCLElBQUEsUUFBakI7SUFBMkIsSUFBQSxhQUEzQjtJQUEwQyxPQUFHO0lBQTdDLEdBQStFO0lBRS9OLFFBQU0sQ0FBQyxlQUFELEVBQWtCLGtCQUFsQixFQUFzQyxrQkFBdEMsSUFBNEQsUUFBUSxDQUFDLEtBQUQsQ0FBMUU7SUFFQSxRQUFNO0lBQUUsSUFBQSxvQkFBRjtJQUF3QixJQUFBLG9CQUF4QjtJQUE4QyxJQUFBLHlCQUE5QztJQUF5RSxJQUFBLHlCQUF6RTtJQUFvRyxJQUFBO0lBQXBHLE1BQXdILGVBQWUsQ0FBQztJQUFFLElBQUEsV0FBVyxFQUFFLHFCQUFmO0lBQXNDLElBQUEsV0FBVyxFQUFFO0lBQW5ELEdBQUQsQ0FBN0k7SUFDQSxRQUFNO0lBQUUsSUFBQSxzQkFBRjtJQUEwQixJQUFBLHNCQUExQjtJQUFrRCxJQUFBLGVBQWxEO0lBQW1FLElBQUEsZUFBbkU7SUFBb0YsSUFBQSxhQUFwRjtJQUFtRyxJQUFBLFlBQW5HO0lBQWlILElBQUEsZ0JBQWpIO0lBQW1JLElBQUE7SUFBbkksTUFBd0osaUJBQWlCLENBQWtCLEVBQUUsR0FBRyxJQUFMO0lBQVcsSUFBQSxtQkFBbUIsRUFBRTtJQUFoQyxHQUFsQixDQUEvSztJQUNBLFFBQU07SUFBRSxJQUFBO0lBQUYsTUFBZ0Msb0JBQW9CLEVBQTFEO0lBQ0EsUUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsUUFBRCxhQUFDLFFBQUQsY0FBQyxRQUFELEdBQWMsTUFBSyxFQUFuQixDQUF4QyxDQVArTjtJQVUvTjs7SUFDQSxRQUFNO0lBQUUsSUFBQTtJQUFGLE1BQTRCLGdCQUFnQixDQUFDO0lBQUUsSUFBQSxxQkFBcUIsRUFBRUEsR0FBVyxDQUFFLGFBQUQ7SUFBQTs7SUFBQSxhQUFnQyxrQkFBa0IsQ0FBQyxDQUFDLHNCQUFFLGVBQWUsRUFBakIsNkNBQUUsaUJBQW1CLFFBQW5CLENBQTRCLGFBQTVCLENBQUYsQ0FBRixDQUFsRDtJQUFBLEtBQUQsRUFBcUcsRUFBckc7SUFBcEMsR0FBRCxDQUFsRDtJQUNBLEVBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsUUFBSSxDQUFDLGVBQUwsRUFDSSxlQUFlLENBQUMsYUFBRCxDQUFmO0lBQ1AsR0FIUSxFQUdOLENBQUMsZUFBRCxFQUFrQixhQUFsQixFQUFpQyxlQUFqQyxDQUhNLENBQVQ7SUFLQSxFQUFBLFlBQVksQ0FBQztJQUNULElBQUEsY0FBYyxFQUFFLGFBRFA7SUFFVCxJQUFBLGVBRlM7SUFHVCxJQUFBLFlBQVksRUFBRSxDQUFDLENBQUQsRUFBSSxRQUFKO0lBQUE7O0lBQUEsbUNBQWlCLGVBQWUsQ0FBQyxDQUFELENBQWhDLHVEQUFpQixtQkFBb0IsV0FBcEIsQ0FBZ0MsUUFBaEMsQ0FBakI7SUFBQSxLQUhMO0lBSVQsSUFBQSxZQUFZLEVBQUcsQ0FBRDtJQUFBOztJQUFBLDZEQUFRLGVBQWUsQ0FBQyxDQUFELENBQXZCLHdEQUFRLG9CQUFvQixXQUFwQixFQUFSLHlFQUE2QyxJQUE3QztJQUFBO0lBSkwsR0FBRCxDQUFaO0lBT0EsRUFBQSxlQUFlLENBQUMsTUFBSztJQUNqQixJQUFBLGVBQWUsQ0FBQyxhQUFELENBQWY7SUFDSCxHQUZjLEVBRVosQ0FBQyxhQUFELEVBQWdCLGVBQWUsQ0FBQyxNQUFoQyxDQUZZLENBQWY7SUFJQSxRQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsTUFBbkM7SUFFQSxRQUFNLG9CQUFvQixHQUEwQ1csR0FBVyxDQUFFLElBQUQsSUFBd0c7SUFFcEwsVUFBTSxDQUFDLFFBQUQsRUFBVyxXQUFYLEVBQXdCLFdBQXhCLElBQXVDLFFBQVEsQ0FBaUIsSUFBakIsQ0FBckQ7SUFDQSxVQUFNO0lBQUUsTUFBQSxRQUFGO0lBQVksTUFBQSw2QkFBWjtJQUEyQyxNQUFBO0lBQTNDLFFBQTJFLHNCQUFzQixDQUFDO0lBQUUsTUFBQSxXQUFGO0lBQWUsTUFBQSxXQUFmO0lBQTRCLFNBQUc7SUFBL0IsS0FBRCxDQUF2RztJQUNBLFVBQU07SUFBRSxNQUFBLFVBQUY7SUFBYyxNQUFBO0lBQWQsUUFBcUMsYUFBYSxDQUFlLEVBQWYsQ0FBeEQ7SUFDQSxVQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBbkI7SUFFQSxJQUFBWCxDQUFTLENBQUMsTUFBSztJQUNYLFlBQU0sT0FBTyxHQUFHLFVBQVUsRUFBMUI7O0lBQ0EsVUFBSSxPQUFPLElBQUksUUFBWCxJQUF1QixhQUFhLElBQUksT0FBNUMsRUFBcUQ7SUFDakQsUUFBQSxjQUFjLFNBQWQsSUFBQSxjQUFjLFdBQWQsWUFBQSxjQUFjLENBQUc7SUFBRSxVQUFBLE1BQU0sRUFBRSxPQUFWO0lBQW1CLFVBQUEsYUFBYSxFQUFFLE9BQWxDO0lBQTJDLFdBQUMsV0FBRCxHQUFlO0lBQUUsWUFBQSxhQUFhLEVBQUU7SUFBakI7SUFBMUQsU0FBSCxDQUFkO0lBQ0g7SUFDSixLQUxRLEVBS04sQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixLQUExQixDQUxNLENBQVQ7SUFPQSxXQUFPO0lBQUUsTUFBQSx5QkFBRjtJQUE2QixNQUFBLFFBQTdCO0lBQXVDLE1BQUEsUUFBdkM7SUFBaUQsTUFBQTtJQUFqRCxLQUFQOztJQUVBLGFBQVMseUJBQVQsQ0FBc0UsS0FBdEUsRUFBOEU7SUFDMUUsWUFBTSxRQUFRLEdBQTRCLHFCQUFxQixDQUFJLElBQUksQ0FBQyxRQUFMLEdBQWUsSUFBZixHQUF1QixDQUFELElBQU07SUFDM0YsUUFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBZjtJQUNBLGNBQU0sT0FBTyxHQUFHLFVBQVUsRUFBMUI7SUFDQSxZQUFJLE9BQUosRUFDSSxjQUFjLFNBQWQsSUFBQSxjQUFjLFdBQWQsWUFBQSxjQUFjLENBQUc7SUFBRSxVQUFBLE1BQU0sRUFBRSxPQUFWO0lBQW1CLFVBQUEsYUFBYSxFQUFFLE9BQWxDO0lBQTJDLFdBQUMsV0FBRCxHQUFlO0lBQUUsWUFBQSxhQUFhLEVBQUU7SUFBakI7SUFBMUQsU0FBSCxDQUFkO0lBQ0osUUFBQSxDQUFDLENBQUMsY0FBRjtJQUNILE9BTjhELEVBTTVELFNBTjRELENBQXJCLENBTTVCLEVBTjRCLENBQTFDO0lBUUEsTUFBQSxLQUFLLENBQUMsSUFBTixHQUFhLFFBQWI7SUFDQSxNQUFBLEtBQUssQ0FBQyxjQUFELENBQUwsR0FBeUIsVUFBRCxDQUFhLFFBQWIsRUFBeEI7SUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsQ0FBQyxJQUFJLENBQUMsS0FBTCxHQUFhLENBQWQsRUFBaUIsUUFBakIsRUFBekI7SUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsQ0FBQyxRQUFELGFBQUMsUUFBRCxjQUFDLFFBQUQsR0FBYSxLQUFiLEVBQW9CLFFBQXBCLEVBQXpCO0lBQ0EsVUFBSSxJQUFJLENBQUMsUUFBVCxFQUNJLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsTUFBekI7SUFFSixhQUFPLDJCQUEyQixDQUFDLGNBQWMsR0FBaUIsUUFBakIsRUFBMkIsa0JBQWtCLENBQUMsS0FBRCxDQUE3QyxDQUFmLENBQWxDO0lBQ0g7SUFDSixHQWxDOEUsRUFrQzVFLENBQUMsc0JBQUQsRUFBeUIsYUFBekIsRUFBd0MsVUFBeEMsQ0FsQzRFLENBQS9FO0lBcUNBLFFBQU0scUJBQXFCLEdBQUdXLEdBQVcsQ0FBQyxTQUFTLHFCQUFULEdBQThCO0lBQ3BFLGFBQVMsMEJBQVQsQ0FBdUUsS0FBdkUsRUFBK0U7SUFDM0UsWUFBTTtJQUFFLFFBQUE7SUFBRixVQUFnQyxvQkFBb0IsRUFBMUQ7SUFDQSxNQUFBLHlCQUF5QixDQUFDLEtBQUQsQ0FBekI7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFDSCxHQVB3QyxFQU90QyxDQUFDLG9CQUFELENBUHNDLENBQXpDO0lBVUEsU0FBTztJQUFFLElBQUEsb0JBQUY7SUFBd0IsSUFBQSxxQkFBeEI7SUFBK0MsSUFBQSxxQkFBL0M7SUFBc0UsSUFBQSxhQUF0RTtJQUFxRixJQUFBLEtBQUssRUFBRSxZQUE1RjtJQUEwRyxJQUFBLGdCQUExRztJQUE0SCxJQUFBLGdCQUE1SDtJQUE4SSxJQUFBO0lBQTlJLEdBQVA7O0lBR0EsV0FBUyxxQkFBVCxDQUE4RSxLQUE5RSxFQUFzRjtJQUNsRixJQUFBLEtBQUssQ0FBQyxJQUFOLEdBQWEsU0FBYjtJQUNBLFdBQU8sc0JBQXNCLENBQUMseUJBQXlCLENBQUMscUJBQXFCLENBQUMsS0FBRCxDQUF0QixDQUExQixDQUE3QjtJQUNIO0lBQ0o7O0lDN0REOzs7Ozs7Ozs7O0lBVUc7O0lBQ0csU0FBVSxXQUFWLE9BQTRHO0lBQUEsTUFBdkQ7SUFBRSxJQUFBLG1CQUFGO0lBQXVCLE9BQUc7SUFBMUIsR0FBdUQ7SUFHOUcsUUFBTSxzQkFBc0IsR0FBRyxlQUFlLENBQUMsbUJBQUQsQ0FBOUM7SUFDQSxRQUFNLENBQUMsZUFBRCxFQUFrQixrQkFBbEIsSUFBd0MsUUFBUSxDQUFpQixJQUFqQixDQUF0RDtJQUVBLE1BQUksT0FBTyxHQUFJLElBQW9DLENBQUMsT0FBcEQ7SUFDQSxNQUFJLE1BQU0sR0FBSSxJQUFvQyxDQUFDLE1BQW5EO0lBQ0EsTUFBSSxPQUFPLEdBQUksSUFBb0MsQ0FBQyxPQUFwRDtJQUNBLE1BQUksSUFBSSxHQUFJLE9BQU8sR0FBRyxJQUFILEdBQVcsSUFBMkIsQ0FBQyxJQUExRDtJQUNBLFFBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDLE9BQUQsYUFBQyxPQUFELGNBQUMsT0FBRCxHQUFhLE1BQUssRUFBbEIsQ0FBdkM7SUFDQSxRQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsSUFBRCxDQUEvQixDQVg4RztJQWM5RztJQUNBO0lBQ0E7O0lBQ0EsUUFBTTtJQUFFLElBQUEsZ0JBQWdCLEVBQUUsd0JBQXBCO0lBQThDLElBQUEsbUJBQW1CLEVBQUU7SUFBbkUsTUFBbUcsV0FBVyxDQUFJO0lBQUU7SUFBRixHQUFKLENBQXBIO0lBQ0EsUUFBTTtJQUFFLElBQUEsZ0JBQWdCLEVBQUUsc0JBQXBCO0lBQTRDLElBQUEsbUJBQW1CLEVBQUU7SUFBakUsTUFBdUcsV0FBVyxDQUFNO0lBQUU7SUFBRixHQUFOLENBQXhIO0lBRUEsUUFBTSxDQUFDLGFBQUQsRUFBZ0IsZ0JBQWhCLEVBQWtDLGdCQUFsQyxJQUFzRCxRQUFRLENBQXNDLElBQXRDLENBQXBFO0lBRUEsUUFBTTtJQUFFLElBQUEsZ0JBQWdCLEVBQUUsa0JBQXBCO0lBQXdDLElBQUEsb0JBQW9CLEVBQUU7SUFBOUQsTUFBZ0csV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFELENBQWpIO0lBRUEsUUFBTTtJQUFFLElBQUEsVUFBVSxFQUFFLGdCQUFkO0lBQWdDLElBQUEsa0JBQWtCLEVBQUU7SUFBcEQsTUFBaUYsYUFBYSxDQUFNO0lBQUUsSUFBQSxlQUFlLEVBQUU7SUFBbkIsR0FBTixDQUFwRztJQUVBLFFBQU07SUFBRSxJQUFBLFVBQVUsRUFBRSxjQUFkO0lBQThCLElBQUEsa0JBQWtCLEVBQUU7SUFBbEQsTUFBaUYsYUFBYSxDQUFNLEVBQU4sQ0FBcEc7SUFDQSxRQUFNO0lBQUUsSUFBQTtJQUFGLE1BQTBCLGNBQWMsQ0FBTTtJQUFFLElBQUEsT0FBTyxFQUFFLGFBQVg7SUFBMEIsSUFBQSxXQUFXLEVBQUUsTUFBTyxDQUFDLGdCQUFnQixFQUFqQixFQUFxQixjQUFjLEVBQW5DO0lBQTlDLEdBQU4sQ0FBOUM7SUFFQSxFQUFBWCxDQUFTLENBQUMsTUFBSztJQUNYLElBQUEsa0JBQWtCLENBQUMsSUFBRCxDQUFsQjtJQUNILEdBRlEsRUFFTixDQUFDLElBQUQsQ0FGTSxDQUFUO0lBTUEsUUFBTSxnQkFBZ0IsR0FBR1csR0FBVyxDQUFpRCxLQUFoRCxJQUE0RDtJQUM3RixhQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBbUM7SUFDL0IsVUFBSSxDQUFDLENBQUMsR0FBRixJQUFTLFFBQVQsSUFBcUIsT0FBTyxFQUFoQyxFQUFvQztJQUNoQyxRQUFBLGFBQWE7SUFDYixRQUFBLENBQUMsQ0FBQyxlQUFGO0lBQ0EsUUFBQSxDQUFDLENBQUMsd0JBQUY7SUFDQSxRQUFBLENBQUMsQ0FBQyxjQUFGO0lBQ0g7SUFDSjs7SUFFRCxXQUFPLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLDBCQUEwQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsR0FBa0I7SUFBRSxNQUFBO0lBQUYsS0FBbEIsRUFBa0MsS0FBbEMsQ0FBZixDQUFuQixDQUEzQixDQUF6QixDQUExQjtJQUNILEdBWG1DLEVBV2pDLENBQUMsbUJBQUQsRUFBc0Isd0JBQXRCLEVBQWdELDBCQUFoRCxFQUE0RSxrQkFBNUUsQ0FYaUMsQ0FBcEM7SUFhQSxRQUFNLHNCQUFzQixHQUFHQSxHQUFXLENBQXVDLEtBQXRDLElBQWtEO0lBQ3pGLFdBQU8sd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsNkJBQTZCLENBQUMsZUFBRCxDQUE3QixDQUErQyxLQUEvQyxDQUFELENBQXZCLENBQS9CO0lBQ0gsR0FGeUMsRUFFdkMsQ0FBQyxzQkFBRCxFQUF5Qix3QkFBekIsRUFBbUQsNkJBQW5ELENBRnVDLENBQTFDO0lBS0EsRUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFDWCxVQUFNLG1CQUFtQixHQUFHLHNCQUFzQixFQUFsRDs7SUFFQSxRQUFJLGVBQUosRUFBcUI7SUFDakIsTUFBQSxtQkFBbUIsU0FBbkIsSUFBQSxtQkFBbUIsV0FBbkIsWUFBQSxtQkFBbUI7SUFDdEIsS0FGRCxNQUdLLElBQUksZUFBZSxLQUFLLEtBQXhCLEVBQStCO0lBQUE7O0lBQ2hDLFVBQUksMkJBQTJCLEVBQS9CLEVBQ0kscUJBQUEsZ0JBQWdCLFlBQWhCLDhEQUFvQixLQUFwQixDQUEwQjtJQUFFLFFBQUEsYUFBYSxFQUFFO0lBQWpCLE9BQTFCO0lBQ1AsS0FISSxNQUlBO0lBR1IsR0FiUSxFQWFOLENBQUMsZUFBRCxDQWJNLENBQVQ7SUFlQSxTQUFPO0lBQ0gsSUFBQSxlQUFlLEVBQUVXLEdBQVcsQ0FBQyxNQUF3QjtJQUNqRCxZQUFNO0lBQUUsUUFBQSxnQkFBZ0IsRUFBRSxvQkFBcEI7SUFBMEMsV0FBRztJQUE3QyxVQUFzRCxnQkFBZ0IsQ0FBSTtJQUFFLFFBQUEsSUFBRjtJQUFRLFFBQUEsT0FBTyxFQUFHLE9BQUgsYUFBRyxPQUFILGNBQUcsT0FBSCxHQUFlLE1BQUssRUFBbkM7SUFBMkMsUUFBQTtJQUEzQyxPQUFKLENBQTVFO0lBQ0EsYUFBTztJQUFFLFFBQUEsb0JBQUY7SUFBd0IsV0FBRztJQUEzQixPQUFQO0lBQ0gsS0FIMkIsRUFHekIsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixtQkFBaEIsQ0FIeUIsQ0FEekI7SUFLSCxJQUFBLGVBTEc7SUFNSCxJQUFBLGdCQU5HO0lBT0gsSUFBQSxzQkFQRztJQVFILElBQUEsMkJBUkc7SUFTSCxJQUFBLGlDQVRHO0lBVUgsSUFBQSxJQVZHO0lBV0gsSUFBQSxNQVhHO0lBWUgsSUFBQTtJQVpHLEdBQVA7SUFjSDtJQUlEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ00sU0FBVSxnQkFBVixRQUE4SjtJQUFBLE1BQWhIO0lBQUUsSUFBQSxJQUFGO0lBQVEsSUFBQSxPQUFSO0lBQWlCLElBQUE7SUFBakIsR0FBZ0g7SUFDaEssUUFBTSxzQkFBc0IsR0FBRyxlQUFlLENBQUMsbUJBQUQsQ0FBOUM7SUFDQSxRQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxPQUFELENBQXZDO0lBRUEsUUFBTSxDQUFDLHFCQUFELEVBQXdCLHdCQUF4QixJQUFvRCxRQUFRLENBQUMsS0FBRCxDQUFsRTtJQUNBLEVBQUEsVUFBVSxDQUFDO0lBQUUsSUFBQSxRQUFRLEVBQUUsTUFBSztJQUFHLE1BQUEsd0JBQXdCLENBQUMsSUFBRCxDQUF4QjtJQUFpQyxLQUFyRDtJQUF1RCxJQUFBLE9BQU8sRUFBRSxHQUFoRTtJQUFxRSxJQUFBLFlBQVksRUFBRSxHQUFHLElBQUksSUFBSSxxQkFBcUI7SUFBbkgsR0FBRCxDQUFWO0lBR0EsUUFBTSxPQUFPLEdBQUcscUJBQXFCLEdBQUksTUFBTSxhQUFhLEVBQXZCLEdBQThCO0lBQUE7O0lBQUEsb0NBQU0sc0JBQXNCLEVBQTVCLDBEQUFNLHVCQUFOO0lBQUEsR0FBbkU7O0lBQ0EsUUFBTSxPQUFPLEdBQUcsTUFBTSxhQUFhLEVBQW5DOztJQUVBLFNBQU87SUFDSCxJQUFBLGdCQUFnQixFQUFFLFVBQTZDLENBQTdDLEVBQWlEO0lBQy9ELGFBQU8sY0FBYyxHQUFNO0lBQUUsUUFBQSxPQUFGO0lBQVcsUUFBQTtJQUFYLE9BQU4sRUFBNEIsQ0FBNUIsQ0FBckI7SUFDSDtJQUhFLEdBQVA7SUFLSDtJQUVLLFNBQVUsV0FBVixRQUFpTjtJQUFBLE1BQWxHO0lBQUUsSUFBQSxRQUFGO0lBQVksSUFBQSxhQUFaO0lBQTJCLElBQUEsV0FBM0I7SUFBd0MsSUFBQSxNQUF4QztJQUFnRCxJQUFBLGdCQUFoRDtJQUFrRSxPQUFHO0lBQXJFLEdBQWtHO0lBSW5OLFFBQU07SUFDRixJQUFBLGVBREU7SUFFRixJQUFBLHNCQUZFO0lBR0YsSUFBQSxzQkFIRTtJQUlGLElBQUEsYUFKRTtJQUtGLElBQUEsWUFBWSxFQUFFLFNBTFo7SUFNRixJQUFBLGdCQU5FO0lBT0YsSUFBQTtJQVBFLE1BUUYsaUJBQWlCLENBQWtCO0lBQUUsSUFBQSxRQUFGO0lBQVksSUFBQSxhQUFaO0lBQTJCLElBQUEsV0FBM0I7SUFBd0MsSUFBQSxNQUF4QztJQUFnRCxJQUFBLGdCQUFoRDtJQUFrRSxJQUFBLG1CQUFtQixFQUFFQSxHQUFXLENBQUMsTUFBZSwyQkFBMkIsTUFBTSxpQ0FBaUMsRUFBbEYsRUFBc0YsRUFBdEY7SUFBbEcsR0FBbEIsQ0FSckI7SUFXQSxRQUFNO0lBQ0YsSUFBQSxlQURFO0lBRUYsSUFBQSxlQUZFO0lBR0YsSUFBQSxzQkFIRTtJQUlGLElBQUEsZ0JBSkU7SUFLRixJQUFBLGlDQUxFO0lBTUYsSUFBQSwyQkFORTtJQU9GLElBQUEsSUFQRTtJQVFGLElBQUEsTUFSRTtJQVNGLElBQUE7SUFURSxNQVVGLFdBQVcsQ0FBZ0IsRUFBRSxHQUFHLElBQUw7SUFBVyxJQUFBLG1CQUFtQixFQUFFLFNBQUYsYUFBRSxTQUFGLGNBQUUsU0FBRixHQUFnQixNQUFLO0lBQW5ELEdBQWhCLENBVmY7SUFZQSxRQUFNLGFBQWEsR0FBR0EsR0FBVyxDQUFDLFNBQW9EO0lBRWxGLFdBQU87SUFDSCxNQUFBLGtCQUFrQixFQUFFLFVBQTZDLENBQTdDLEVBQWlEO0lBQ2pFLFlBQUksS0FBSyxHQUFHLHNCQUFzQixDQUFDLENBQUQsQ0FBbEM7SUFDQSxRQUFBLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsTUFBekI7SUFDQSxRQUFBLEtBQUssQ0FBQyxlQUFELENBQUwsR0FBeUIsSUFBSSxHQUFHLE1BQUgsR0FBWSxTQUF6QztJQUNBLGVBQU8sS0FBUDtJQUNIO0lBTkUsS0FBUDtJQVFILEdBVmdDLEVBVTlCLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsTUFBaEIsRUFBd0Isc0JBQXhCLENBVjhCLENBQWpDO0lBWUE7Ozs7Ozs7Ozs7Ozs7O0lBZ0JBLFFBQU0sV0FBVyxHQUFpQ0EsR0FBVyxDQUFFLElBQUQsSUFBMEM7SUFHcEcsVUFBTTtJQUFFLE1BQUE7SUFBRixRQUFrQyxzQkFBc0IsQ0FBQyxJQUFELENBQTlEOztJQUVBLGFBQVMsZ0JBQVQsUUFBNEU7SUFBQSxVQUFmLEVBQUUsR0FBRztJQUFMLE9BQWU7SUFDeEUsTUFBQSxLQUFLLENBQUMsSUFBTixHQUFhLFVBQWI7SUFDQSxhQUFPLGNBQWMsR0FBTSxFQUFOLEVBQVUsMkJBQTJCLENBQUMsS0FBRCxDQUFyQyxDQUFyQjtJQUNIOztJQUVELFdBQU87SUFBRSxNQUFBO0lBQUYsS0FBUDtJQUNILEdBWDRELEVBVzFELEVBWDBELENBQTdEOztJQWNBLFdBQVMsWUFBVCxRQUFvRjtJQUFBLFFBQWYsRUFBRSxHQUFHO0lBQUwsS0FBZTtJQUNoRixJQUFBLEtBQUssQ0FBQyxJQUFOLEdBQWEsTUFBYjtJQUNBLFdBQU8sZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsS0FBRCxDQUF2QixDQUF2QjtJQUNIOztJQUdELFNBQU87SUFDSCxJQUFBLFlBREc7SUFFSCxJQUFBLGFBRkc7SUFJSCxJQUFBLFdBSkc7SUFLSCxJQUFBLGVBTEc7SUFNSDtJQUVBLElBQUEsU0FSRztJQVVILElBQUEsZ0JBVkc7SUFXSCxJQUFBLGdCQVhHO0lBYUgsSUFBQTtJQWJHLEdBQVA7SUFnQkg7O0lDeE9LLFNBQVUsV0FBVixPQUEyTjtJQUFBLE1BQTNHO0lBQUUsSUFBQSxhQUFGO0lBQWlCLElBQUEsYUFBakI7SUFBZ0MsSUFBQSxRQUFoQztJQUEwQyxJQUFBLFdBQVcsRUFBRSxrQkFBdkQ7SUFBMkUsT0FBRztJQUE5RSxHQUEyRztJQUU3TixRQUFNO0lBQUUsSUFBQSxnQkFBZ0IsRUFBRSx1QkFBcEI7SUFBNkMsSUFBQSxlQUFlLEVBQUU7SUFBOUQsTUFBeUYsV0FBVyxDQUFjLEVBQWQsQ0FBMUc7SUFDQSxRQUFNLENBQUMsbUJBQUQsRUFBc0Isc0JBQXRCLElBQWdELFFBQVEsQ0FBNEIsWUFBNUIsQ0FBOUQ7SUFDQSxRQUFNO0lBQUUsSUFBQSx1QkFBRjtJQUEyQixJQUFBLDRCQUEzQjtJQUF5RCxJQUFBO0lBQXpELE1BQXNGLG1CQUFtQixDQUFjO0lBQUUsSUFBQSx3QkFBd0IsRUFBRUEsR0FBVyxDQUFFLG9CQUFELElBQXVELHNCQUFzQixDQUFDLDRCQUE0QixDQUFDLGtCQUFELEVBQXFCLG9CQUFyQixDQUE3QixDQUE5RSxFQUF3SixFQUF4SjtJQUF2QyxHQUFkLENBQS9HO0lBRUEsRUFBOEYsV0FBVyxDQUFDO0lBQUUsSUFBQSxNQUFNLEVBQUU7SUFBVixHQUFEO0lBQ3pHLFFBQU07SUFBRSxJQUFBLGdCQUFnQixFQUFFLGtCQUFwQjtJQUF3QyxJQUFBLG9CQUFvQixFQUFFO0lBQTlELE1BQTBGLFdBQVcsQ0FBQztJQUFFLElBQUEsTUFBTSxFQUFFO0lBQVYsR0FBRCxDQUEzRztJQUVBLFFBQU07SUFBRSxJQUFBLGVBQWUsRUFBRSxXQUFuQjtJQUFnQyxJQUFBLGVBQWhDO0lBQWlELElBQUEsc0JBQWpEO0lBQXlFLElBQUEsc0JBQXpFO0lBQWlHLElBQUEsYUFBakc7SUFBZ0gsSUFBQSxnQkFBaEg7SUFBa0ksSUFBQSxnQkFBbEk7SUFBb0osSUFBQTtJQUFwSixNQUFxSyxpQkFBaUIsQ0FBeUIsRUFBRSxHQUFHLElBQUw7SUFBVyxJQUFBLG1CQUFtQixFQUFFLHNCQUFoQztJQUF3RCxJQUFBLGFBQWEsRUFBRTtJQUF2RSxHQUF6QixDQUE1TDtJQUNBLFFBQU07SUFBRSxJQUFBLGVBQWUsRUFBRSxhQUFuQjtJQUFrQyxJQUFBLGVBQWUsRUFBRTtJQUFuRCxNQUEwRSxlQUFlLEVBQS9GO0lBRUEsRUFBdUIsaUJBQWlCLENBQUMsUUFBRDtJQUN4QyxRQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBL0I7SUFHQSxFQUFBLGVBQWUsQ0FBQyxNQUFLO0lBQ2pCLFNBQUssSUFBSSxLQUFULElBQWtCLFdBQWxCLEVBQ0ksS0FBSyxDQUFDLGdCQUFOLENBQXVCLGFBQXZCO0lBQ1AsR0FIYyxFQUdaLENBQUMsYUFBRCxDQUhZLENBQWY7SUFNQSxFQUFBLFlBQVksQ0FBQztJQUFFLElBQUEsY0FBYyxFQUFFLGFBQWxCO0lBQWlDLElBQUEsZUFBZSxFQUFFLFdBQWxEO0lBQStELElBQUEsWUFBWSxFQUFFLENBQUMsQ0FBRCxFQUFJLFFBQUo7SUFBQTs7SUFBQSwrQkFBaUIsV0FBVyxDQUFDLENBQUQsQ0FBNUIsbURBQWlCLGVBQWdCLFdBQWhCLENBQTRCLFFBQTVCLENBQWpCO0lBQUEsS0FBN0U7SUFBcUksSUFBQSxZQUFZLEVBQUUsQ0FBQztJQUFBOztJQUFBLGdDQUFLLFdBQVcsQ0FBQyxDQUFELENBQWhCLG9EQUFLLGdCQUFnQixXQUFoQixFQUFMO0lBQUE7SUFBcEosR0FBRCxDQUFaO0lBQ0EsRUFBQSxZQUFZLENBQUM7SUFBRSxJQUFBLGNBQWMsRUFBRSxhQUFsQjtJQUFpQyxJQUFBLGVBQWUsRUFBRSxhQUFsRDtJQUFpRSxJQUFBLFlBQVksRUFBRSxDQUFDLENBQUQsRUFBSSxPQUFKO0lBQUE7O0lBQUEsaUNBQWdCLGFBQWEsQ0FBQyxDQUFELENBQTdCLHFEQUFnQixpQkFBa0IsVUFBbEIsQ0FBNkIsT0FBN0IsQ0FBaEI7SUFBQSxLQUEvRTtJQUFzSSxJQUFBLFlBQVksRUFBRSxDQUFDO0lBQUE7O0lBQUEsa0NBQUssYUFBYSxDQUFDLENBQUQsQ0FBbEIsc0RBQUssa0JBQWtCLFVBQWxCLEVBQUw7SUFBQTtJQUFySixHQUFELENBQVo7SUFFQSxFQUFBLGVBQWUsQ0FBRSxJQUFELElBQVM7SUFDckIsUUFBSSxhQUFhLElBQUksSUFBakIsSUFBeUIsYUFBYSxJQUFJLFVBQTlDLEVBQTBEO0lBQ3REO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxNQUFBLGNBQWMsQ0FBQyxNQUFLO0lBQUE7O0lBQ2hCLGlDQUFBLGFBQWEsQ0FBQyxhQUFELENBQWIsZ0ZBQThCLEtBQTlCO0lBQ0gsT0FGYSxDQUFkO0lBR0g7SUFDSixHQVhjLEVBV1osQ0FBQyxVQUFELEVBQWEsYUFBYixFQUE0QixhQUE1QixDQVhZLENBQWY7SUFjQSxRQUFNLE1BQU0sR0FBbUNBLEdBQVcsQ0FBQyxTQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBOEQ7SUFDckgsVUFBTSxDQUFDLGNBQUQsRUFBaUIsaUJBQWpCLElBQXNDLFFBQVEsQ0FBdUIsYUFBdkIsQ0FBcEQ7SUFDQSxVQUFNO0lBQUUsTUFBQSxrQkFBRjtJQUFzQixNQUFBO0lBQXRCLFFBQXFDLGFBQWEsQ0FBYSxFQUFiLENBQXhEO0lBQ0EsVUFBTSxDQUFDLFVBQUQsRUFBYSxhQUFiLElBQThCLFFBQVEsQ0FBcUIsU0FBckIsQ0FBNUM7SUFDQSxVQUFNO0lBQUUsTUFBQSxnQkFBZ0IsRUFBRSxhQUFwQjtJQUFtQyxNQUFBLEVBQUUsRUFBRSxLQUF2QztJQUE4QyxNQUFBLEtBQUssRUFBRTtJQUFyRCxRQUFrRSxXQUFXLENBQUM7SUFBRSxNQUFBLE1BQU0sRUFBRTtJQUFWLEtBQUQsQ0FBbkY7SUFDQSxVQUFNLENBQUMsUUFBRCxFQUFXLFdBQVgsRUFBd0IsV0FBeEIsSUFBdUMsUUFBUSxDQUFpQixJQUFqQixDQUFyRDtJQUNBLFVBQU07SUFBRSxNQUFBLFFBQUY7SUFBWSxNQUFBLDJCQUFaO0lBQXlDLE1BQUE7SUFBekMsUUFBMkUsc0JBQXNCLENBQUM7SUFBRSxNQUFBLFdBQUY7SUFBZSxNQUFBLFdBQWY7SUFBNEIsTUFBQSxLQUE1QjtJQUFtQyxNQUFBLGFBQW5DO0lBQWtELE1BQUEsZ0JBQWdCLEVBQUUsaUJBQXBFO0lBQXVGLFNBQUc7SUFBMUYsS0FBRCxDQUF2RztJQUNBLFVBQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBTixDQUFoQztJQUVBLElBQUFYLENBQVMsQ0FBQyxNQUFLO0lBQ1gsWUFBTSxPQUFPLEdBQUcsVUFBVSxFQUExQjs7SUFDQSxVQUFJLFFBQVEsSUFBSSxjQUFjLElBQUksT0FBbEMsRUFBMkM7SUFDdkMsUUFBQSxRQUFRLENBQUM7SUFBRSxVQUFBLE1BQU0sRUFBRSxPQUFWO0lBQW1CLFVBQUEsYUFBYSxFQUFFLE9BQWxDO0lBQTJDLFdBQUMsV0FBRCxHQUFlO0lBQUUsWUFBQSxhQUFhLEVBQUUsUUFBUTtJQUF6QjtJQUExRCxTQUFELENBQVI7SUFDSDtJQUNKLEtBTFEsRUFLTixDQUFDLFFBQUQsRUFBVyxhQUFYLENBTE0sQ0FBVDtJQU9BLElBQUFBLENBQVMsQ0FBQyxNQUFLO0lBQUE7O0lBQUcsK0JBQUEsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFOLENBQWIsZ0ZBQTJCLFFBQTNCLENBQW9DLEtBQXBDO0lBQTRDLEtBQXJELEVBQXVELENBQUMsS0FBRCxFQUFRLElBQUksQ0FBQyxLQUFiLENBQXZELENBQVQ7O0lBR0EsYUFBUyxXQUFULFFBQWdGO0lBQUEsVUFBZixFQUFFLEdBQUc7SUFBTCxPQUFlO0lBQzVFLFlBQU0sUUFBUSxHQUFxQyxxQkFBcUIsQ0FBYyxDQUFELElBQU07SUFDdkYsUUFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBZjtJQUNBLFFBQUEsUUFBUSxTQUFSLElBQUEsUUFBUSxXQUFSLFlBQUEsUUFBUSxDQUFHLFlBQVksQ0FBQyxDQUFELEVBQUk7SUFBRSxVQUFBLGFBQWEsRUFBRSxRQUFRO0lBQXpCLFNBQUosQ0FBZixDQUFSO0lBQ0EsUUFBQSxDQUFDLENBQUMsY0FBRjtJQUNILE9BSnVFLEVBSXJFLFNBSnFFLENBQXJCLENBSXJDLEtBSnFDLENBQW5EO0lBTUEsTUFBQSxRQUFRLENBQUMsSUFBVCxHQUFnQixLQUFoQjtJQUNBLE1BQUEsUUFBUSxDQUFDLGVBQUQsQ0FBUixHQUE0QixDQUFDLFFBQUQsYUFBQyxRQUFELGNBQUMsUUFBRCxHQUFhLEtBQWIsRUFBb0IsUUFBcEIsRUFBNUI7SUFDQSxNQUFBLFFBQVEsQ0FBQyxlQUFELENBQVIsR0FBNEIsVUFBNUI7SUFFQSxhQUFPLGNBQWMsR0FBZSxFQUFmLEVBQW1CLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFELENBQW5CLENBQTVCLENBQWhDLENBQXJCO0lBQ0g7O0lBRUQsV0FBTztJQUFFLE1BQUEsV0FBRjtJQUFlLE1BQUE7SUFBZixLQUFQO0lBQ0gsR0FsQ3lELEVBa0N2RCxFQWxDdUQsQ0FBMUQ7SUFvQ0EsUUFBTSxXQUFXLEdBQWlDVyxHQUFXLENBQUMsU0FBUyxRQUFULENBQWtCLElBQWxCLEVBQTZDO0lBQ3ZHO0lBQ0EsVUFBTSxDQUFDLEtBQUQsRUFBUSxRQUFSLElBQW9CLFFBQVEsQ0FBcUIsU0FBckIsQ0FBbEM7SUFDQSxVQUFNLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsVUFBdEIsSUFBb0MsUUFBUSxDQUFpQixJQUFqQixDQUFsRDtJQUNBLFVBQU07SUFBRSxNQUFBLGdCQUFnQixFQUFFLGVBQXBCO0lBQXFDLE1BQUEsb0JBQW9CLEVBQUUsb0JBQTNEO0lBQWlGLE1BQUEsRUFBRSxFQUFFO0lBQXJGLFFBQW9HLFdBQVcsQ0FBQztJQUFFLE1BQUEsTUFBTSxFQUFFO0lBQVYsS0FBRCxDQUFySDtJQUNBLFVBQU07SUFBRSxNQUFBLG9CQUFGO0lBQXdCLE1BQUE7SUFBeEIsUUFBdUMsa0JBQWtCLENBQWtCLEVBQUUsR0FBRyxJQUFMO0lBQVcsTUFBQSxVQUFYO0lBQXVCLE1BQUEsUUFBdkI7SUFBaUMsTUFBQSxLQUFqQztJQUF3QyxNQUFBLFVBQVUsRUFBRSxVQUFwRDtJQUFnRSxNQUFBLFVBQVUsRUFBRTtJQUE1RSxLQUFsQixDQUEvRDs7SUFFQSxhQUFTLEtBQVQsR0FBYztJQUNWLFlBQU0sT0FBTyxHQUFHLFVBQVUsRUFBMUI7O0lBQ0EsVUFBSSxPQUFPLElBQUksc0JBQXNCLEVBQXJDLEVBQXlDO0lBQ3BDLFFBQUEsT0FBcUQsU0FBckQsSUFBQSxPQUFxRCxXQUFyRCxZQUFBLE9BQXFELENBQUUsS0FBdkQsQ0FBNkQ7SUFBRSxVQUFBLGFBQWEsRUFBRTtJQUFqQixTQUE3RDtJQUNKO0lBQ0o7O0lBRUQsSUFBQVgsQ0FBUyxDQUFDLE1BQUs7SUFBQTs7SUFBRywrQkFBQSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBWCxnRkFBeUIsYUFBekIsQ0FBdUMsVUFBdkM7SUFBb0QsS0FBN0QsRUFBK0QsQ0FBQyxVQUFELEVBQWEsSUFBSSxDQUFDLEtBQWxCLENBQS9ELENBQVQ7O0lBRUEsYUFBUyxnQkFBVCxRQUEwRjtJQUFBOztJQUFBLFVBQWYsRUFBRSxHQUFHO0lBQUwsT0FBZTtJQUN0RixNQUFBLEtBQUssQ0FBQyxpQkFBRCxDQUFMLDZCQUEyQixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQU4sQ0FBdEMsMkRBQTJCLHVCQUF5QixLQUFwRDtJQUNBLE1BQUEsS0FBSyxDQUFDLElBQU4sR0FBYSxVQUFiO0lBQ0EseUJBQUEsS0FBSyxDQUFDLFFBQU4sNkRBQUEsS0FBSyxDQUFDLFFBQU4sR0FBbUIsQ0FBQyxDQUFwQixDQUhzRjs7SUFJdEYsYUFBTyxjQUFjLEdBQW9CLEVBQXBCLEVBQXdCLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFELENBQXJCLENBQXZDLENBQXJCO0lBQ0g7O0lBRUQsV0FBTztJQUFFLE1BQUEsZ0JBQUY7SUFBb0IsTUFBQTtJQUFwQixLQUFQO0lBQ0gsR0F4QjRELEVBd0IxRCxFQXhCMEQsQ0FBN0Q7SUEyQkEsUUFBTSxXQUFXLEdBQTZCVyxHQUFXLENBQUMsU0FBUyxVQUFULEdBQW1CO0lBRXpFLGFBQVMsZUFBVCxRQUFxRjtJQUFBLFVBQWYsRUFBRSxHQUFHO0lBQUwsT0FBZTtJQUNqRixNQUFBLEtBQUssQ0FBQyxJQUFOLEdBQWEsU0FBYjtJQUNBLE1BQUEsS0FBSyxDQUFDLGtCQUFELENBQUwsR0FBNEIsbUJBQTVCO0lBQ0EsYUFBTyx1QkFBdUIsQ0FBQyxpQkFBRCxDQUF2QixDQUEyQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFELENBQXZCLENBQXpCLENBQWxFLENBQVA7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFDSCxHQVR3RCxFQVN0RCxDQUFDLHNCQUFELEVBQXlCLG1CQUF6QixDQVRzRCxDQUF6RDtJQVlBLFFBQU0sWUFBWSxHQUFHQSxHQUFXLENBQUMsU0FBUyxZQUFULEdBQXFCO0lBQ2xELGFBQVMsaUJBQVQsUUFBNkU7SUFBQSxVQUFmLEVBQUUsR0FBRztJQUFMLE9BQWU7SUFDekUsYUFBTyxrQkFBa0IsQ0FBQyxLQUFELENBQXpCO0lBQ0g7O0lBRUQsV0FBTztJQUFFLE1BQUE7SUFBRixLQUFQO0lBQ0gsR0FOK0IsRUFNN0IsRUFONkIsQ0FBaEM7SUFRQSxTQUFPO0lBQUUsSUFBQSxNQUFGO0lBQVUsSUFBQSxXQUFWO0lBQXVCLElBQUEsV0FBdkI7SUFBb0MsSUFBQSxZQUFwQztJQUFrRCxJQUFBLGFBQWxEO0lBQWlFLElBQUEsWUFBWSxFQUFFLFlBQS9FO0lBQTZGLElBQUEsZ0JBQTdGO0lBQStHLElBQUEsZ0JBQS9HO0lBQWlJLElBQUEsYUFBakk7SUFBZ0osSUFBQTtJQUFoSixHQUFQO0lBRUg7O0lDL0pELFNBQVMsV0FBVCxHQUFvQjtJQUFLLFNBQU8sS0FBUDtJQUFlOztJQUVsQyxTQUFVLGNBQVYsT0FBZ0o7SUFBQTs7SUFBQSxNQUF2SDtJQUFFLElBQUEsY0FBRjtJQUFrQixJQUFBLGFBQWxCO0lBQWlDLElBQUE7SUFBakMsR0FBdUg7SUFFbEoscUJBQUEsY0FBYyxVQUFkLG1EQUFBLGNBQWMsR0FBSyxHQUFuQjtJQUNBLG9CQUFBLGFBQWEsVUFBYixpREFBQSxhQUFhLEdBQUssRUFBbEI7SUFDQSxpQkFBQSxVQUFVLFVBQVYsMkNBQUEsVUFBVSxHQUFLLENBQWYsQ0FKa0o7SUFPbEo7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFDQSxFQUFBLGdCQUFnQixDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXVCLENBQUQsSUFBcUI7SUFDdkQsUUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLEdBQUYsS0FBVSxRQUF2QixJQUFtQyxDQUFDLENBQUMsQ0FBQyxnQkFBMUMsRUFBNEQ7SUFDeEQsTUFBQSxDQUFDLENBQUMsY0FBRjtJQUNBLE1BQUEsQ0FBQyxDQUFDLHdCQUFGO0lBQ0EsTUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0lBQ0EsTUFBQSw2QkFBNkIsQ0FBQyxLQUFELENBQTdCO0lBQ0EsTUFBQSw2QkFBNkIsQ0FBQyxLQUFELENBQTdCO0lBQ0EsTUFBQSwrQkFBK0IsQ0FBQyxLQUFELENBQS9CO0lBQ0EsTUFBQSwrQkFBK0IsQ0FBQyxLQUFELENBQS9CO0lBQ0g7SUFDSixHQVZlLEVBVWI7SUFBRSxJQUFBLE9BQU8sRUFBRTtJQUFYLEdBVmEsQ0FBaEI7SUFZQSxRQUFNLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsT0FBaEIsSUFBMkIsUUFBUSxDQUFDLEtBQUQsQ0FBekM7SUFFQSxRQUFNO0lBQUUsSUFBQSxnQkFBZ0IsRUFBRSxpQkFBcEI7SUFBdUMsSUFBQSxvQkFBb0IsRUFBRTtJQUE3RCxNQUE4RixXQUFXLENBQUM7SUFBRSxJQUFBLE1BQU0sRUFBRTtJQUFWLEdBQUQsQ0FBL0c7SUFFQSxRQUFNLENBQUMsaUJBQUQsRUFBb0IsaUJBQXBCLElBQXlDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBRSxPQUFELElBQXFCO0lBQ2xHLFVBQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxVQUFILEdBQWdCLENBQXJDOztJQUNBLFFBQUksS0FBSyxJQUFJLElBQVQsSUFBaUIsUUFBUSxDQUFDLEtBQUQsQ0FBN0IsRUFBc0M7SUFDbEMsVUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sK0JBQStCLENBQUMsT0FBRCxDQUF0QyxFQUFpRCxPQUFPLEdBQUcsVUFBSCxHQUFnQixDQUF4RSxDQUF2QjtJQUNBLGFBQU8sTUFBTSxZQUFZLENBQUMsTUFBRCxDQUF6QjtJQUNIO0lBQ0osR0FOK0UsQ0FBbEIsRUFNMUQsV0FOMEQsQ0FBOUQ7SUFPQSxRQUFNLENBQUMsaUJBQUQsRUFBb0IsaUJBQXBCLElBQXlDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBRSxPQUFELElBQXFCO0lBQ2xHLFVBQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxVQUFILEdBQWdCLENBQXJDOztJQUNBLFFBQUksS0FBSyxJQUFJLElBQVQsSUFBaUIsUUFBUSxDQUFDLEtBQUQsQ0FBN0IsRUFBc0M7SUFDbEMsVUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sK0JBQStCLENBQUMsT0FBRCxDQUF0QyxFQUFpRCxLQUFqRCxDQUF2QjtJQUNBLGFBQU8sTUFBTSxZQUFZLENBQUMsTUFBRCxDQUF6QjtJQUNIO0lBQ0osR0FOK0UsQ0FBbEIsRUFNMUQsV0FOMEQsQ0FBOUQ7SUFPQSxRQUFNLENBQUMsZUFBRCxFQUFrQixlQUFsQixJQUFxQyxlQUFlLENBQUMsaUJBQWlCLENBQUUsUUFBRCxJQUFzQjtJQUMvRixVQUFNLEtBQUssR0FBRyxRQUFRLEdBQUcsY0FBSCxHQUFvQixhQUExQzs7SUFDQSxRQUFJLEtBQUssSUFBSSxJQUFULElBQWlCLFFBQVEsQ0FBQyxLQUFELENBQTdCLEVBQXNDO0lBQ2xDLFVBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLDZCQUE2QixDQUFDLFFBQUQsQ0FBcEMsRUFBZ0QsS0FBaEQsQ0FBdkI7SUFDQSxhQUFPLE1BQU0sWUFBWSxDQUFDLE1BQUQsQ0FBekI7SUFDSDtJQUNKLEdBTjJFLENBQWxCLEVBTXRELFdBTnNELENBQTFEO0lBT0EsUUFBTSxDQUFDLGVBQUQsRUFBa0IsZUFBbEIsSUFBcUMsZUFBZSxDQUFDLGlCQUFpQixDQUFFLFFBQUQsSUFBc0I7SUFDL0YsVUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLGNBQUgsR0FBb0IsYUFBMUM7O0lBQ0EsUUFBSSxLQUFLLElBQUksSUFBVCxJQUFpQixRQUFRLENBQUMsS0FBRCxDQUE3QixFQUFzQztJQUNsQyxVQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSw2QkFBNkIsQ0FBQyxRQUFELENBQXBDLEVBQWdELEtBQWhELENBQXZCO0lBQ0EsYUFBTyxNQUFNLFlBQVksQ0FBQyxNQUFELENBQXpCO0lBQ0g7SUFDSixHQU4yRSxDQUFsQixFQU10RCxXQU5zRCxDQUExRDtJQU9BLFFBQU0sQ0FBQywrQkFBRCxFQUFrQywrQkFBbEMsSUFBcUUsUUFBUSxDQUFDLEtBQUQsQ0FBbkY7SUFDQSxRQUFNLENBQUMsNkJBQUQsRUFBZ0MsNkJBQWhDLElBQWlFLFFBQVEsQ0FBQyxLQUFELENBQS9FO0lBQ0EsUUFBTSxDQUFDLCtCQUFELEVBQWtDLCtCQUFsQyxJQUFxRSxRQUFRLENBQUMsS0FBRCxDQUFuRjtJQUNBLFFBQU0sQ0FBQyw2QkFBRCxFQUFnQyw2QkFBaEMsSUFBaUUsUUFBUSxDQUFDLEtBQUQsQ0FBL0U7SUFFQSxFQUFBWCxDQUFTLENBQUMsTUFBSztJQUNYLElBQUEsT0FBTyxDQUFDLCtCQUErQixJQUFJLDZCQUFwQyxDQUFQO0lBQ0gsR0FGUSxFQUVOLENBQUMsK0JBQStCLElBQUksNkJBQXBDLENBRk0sQ0FBVDtJQUlBLFFBQU0saUJBQWlCLEdBQXNCVyxHQUFXLENBQUMsU0FBUyxpQkFBVCxHQUEwQjtJQUUvRSxhQUFTLGNBQVQsQ0FBd0IsQ0FBeEIsRUFBcUM7SUFDakMsTUFBQSxlQUFlLENBQUMsSUFBRCxDQUFmO0lBQ0g7O0lBRUQsYUFBUyxjQUFULENBQXdCLENBQXhCLEVBQXFDO0lBQ2pDLE1BQUEsZUFBZSxDQUFDLEtBQUQsQ0FBZjtJQUNIOztJQUVELGFBQVMsVUFBVCxDQUFvQixDQUFwQixFQUFpQztJQUM1QixNQUFBLENBQUMsQ0FBQyxNQUFGLENBQWlCLEtBQWpCO0lBQ0o7O0lBRUQsVUFBTTtJQUFFLE1BQUE7SUFBRixRQUF1QixXQUFXLENBQWM7SUFBRSxNQUFBLHFCQUFxQixFQUFFO0lBQXpCLEtBQWQsQ0FBeEM7O0lBR0EsYUFBUyxzQkFBVCxRQUE0RjtJQUFBOztJQUFBLFVBQWYsRUFBRSxHQUFHO0lBQUwsT0FBZTtJQUN4RjtJQUNBO0lBQ0E7SUFDQSx5QkFBQSxLQUFLLENBQUMsUUFBTiw2REFBQSxLQUFLLENBQUMsUUFBTixHQUFtQixDQUFDLENBQXBCO0lBQ0EsYUFBTyw0QkFBNEIsQ0FBQyxrQkFBRCxDQUE1QixDQUNILGdCQUFnQixDQUNaLGNBQWMsR0FBZ0I7SUFBRSxRQUFBLGNBQUY7SUFBa0IsUUFBQSxjQUFsQjtJQUFrQyxRQUFBO0lBQWxDLE9BQWhCLEVBQWlFLEtBQWpFLENBREYsQ0FEYixDQUFQO0lBS0g7O0lBRUQsV0FBTztJQUFFLE1BQUE7SUFBRixLQUFQO0lBRUgsR0EvQnVELEVBK0JyRCxDQUFDLDRCQUFELENBL0JxRCxDQUF4RDtJQWlDQSxRQUFNLFVBQVUsR0FBR0EsR0FBVyxDQUFDLFNBQVMsVUFBVCxHQUFtQjtJQUU5QyxhQUFTLGNBQVQsQ0FBd0IsQ0FBeEIsRUFBcUM7SUFDakMsTUFBQSxlQUFlLENBQUMsSUFBRCxDQUFmO0lBQ0g7O0lBRUQsYUFBUyxjQUFULENBQXdCLENBQXhCLEVBQXFDO0lBQ2pDLE1BQUEsZUFBZSxDQUFDLEtBQUQsQ0FBZjtJQUNIOztJQUVELGFBQVMsZUFBVCxRQUFxRjtJQUFBLFVBQWYsRUFBRSxHQUFHO0lBQUwsT0FBZTtJQUNqRixZQUFNO0lBQUUsUUFBQTtJQUFGLFVBQXVCLFdBQVcsQ0FBYztJQUFFLFFBQUEscUJBQXFCLEVBQUU7SUFBekIsT0FBZCxDQUF4QztJQUNBLGFBQU8saUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFnQjtJQUFFLFFBQUEsY0FBRjtJQUFrQixRQUFBO0lBQWxCLE9BQWhCLEVBQW9ELEtBQXBELENBQWYsQ0FBakIsQ0FBeEI7SUFDSDs7SUFFRCxXQUFPO0lBQUUsTUFBQTtJQUFGLEtBQVA7SUFDSCxHQWhCNkIsRUFnQjNCLENBQUMsaUJBQUQsQ0FoQjJCLENBQTlCO0lBa0JBLFNBQU87SUFDSCxJQUFBLFVBREc7SUFFSCxJQUFBLGlCQUZHO0lBR0gsSUFBQSxNQUFNLEVBQUUsSUFITDtJQUlILElBQUEsU0FBUyxFQUFFO0lBSlIsR0FBUDtJQU1IOztJQzlITSxNQUFNLGVBQWUsR0FBRztRQUMzQixNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHdEIsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsRSxRQUNJMlAsYUFBSyxLQUFLLEVBQUMsTUFBTSxhQUNiQSxpREFBMEJDLGVBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQUksWUFBUSxFQUNwSUQseURBQW1DLFNBQVMsV0FBTyxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLGlCQUFRLFlBQ25GLEVBQ1Q7SUFDTCxDQUFDOztJQ1pELE1BQU1FLGFBQVcsR0FBRywrYkFBK2IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFL2QsTUFBTSxrQkFBa0IsR0FBRy9LLENBQWEsQ0FBb0UsSUFBSyxDQUFDLENBQUE7SUFDM0csTUFBTSxxQkFBcUIsR0FBR2dMLENBQUksQ0FBQztRQUV0QyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEYsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsV0FBVyxDQUFtQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUMvRyxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxHQUFHLGlCQUFpQixDQUE0QyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQzs7UUFHeE4sUUFDSUgsYUFBSyxTQUFTLEVBQUMsTUFBTSxhQUNqQkMsNkRBQXVDLEVBQ3ZDQSxzQkFBSUEsc0RBQThCLFdBQUssRUFFdkNELGdUQUd3RUMsd0JBQU8sVUFBVSxXQUFRLDBEQUE4QyxFQUUvSUQsMlNBRWlIQyx5Q0FBZSw0RUFDNUgsRUFDSkQseU1BQ21MQyw0Q0FBa0IsOERBQ2pNLEVBRUpELHNCQUNJQyxzREFBOEIsa0RBQTRDQSxzREFBOEIsUUFBRUEsd0RBQWdDLFFBQUVBLDJEQUFtQyxxS0FFL0ssRUFFSkQsc0JBQ0lDLHNEQUE4QixZQUFNQSxzREFBOEIsdUJBQWlCQSxvREFBNEIsNk1BQ1VBLDJEQUFtQyxtREFBNkNBLDRDQUFvQixtTEFFaEtBLDRDQUFvQiwrREFBeURBLDRDQUFvQixvQ0FDOUosRUFDSkQsOENBQXVCQyxlQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLGFBQWEsSUFBSSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLFdBQUksWUFBUSxFQUNoTEEsZUFBUSxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUNoREEsSUFBQyxrQkFBa0IsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLHNCQUFzQixZQUNyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtnQ0FDekIsTUFBTUEsSUFBQywwQkFBMEIsSUFBQyxLQUFLLEVBQUUsQ0FBQyxJQUFPLENBQUMsQ0FBSSxDQUFBOzZCQUN6RDt5QkFDSixHQUFHLENBQUMsV0FDcUIsV0FDN0IsRUFDSixnQkFBZ0IsSUFBSUQsdUNBQWlCLGdCQUFnQixZQUFPLFlBQzNELEVBQ1I7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUdGLE1BQU0sMEJBQTBCLEdBQUdHLENBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFxQjtRQUNsRSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU1ELGFBQVcsQ0FBQyxLQUFLLDBEQUF5RCxDQUFDLENBQUM7UUFDaEgsTUFBTSxzQkFBc0IsR0FBR3RPLENBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzlELE1BQU0sSUFBSSxHQUFHLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3hELE1BQU0sRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0ksTUFBTSxLQUFLLEdBQUcsMkJBQTJCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsUUFDSW9PLGVBQVEsS0FBSyxhQUFHLElBQUksUUFBSSxRQUFRLEdBQUUsVUFBVSxHQUFHLGNBQWMsT0FBRUMsa0JBQVcsNkJBQTZCLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsV0FBSSxZQUFLLEVBQ3pJO0lBQ0wsQ0FBQyxFQUFFOztJQ2xFSSxNQUFNLGNBQWMsR0FBRztRQUMxQixNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHNVAsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHQSxDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRTdFLFFBQ0kyUCxhQUFLLEtBQUssRUFBQyxNQUFNLGFBQ2JBLGdEQUF5QkMsZUFBTyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBSSxZQUFRLEVBQ2pJRCwyQ0FBb0JDLGVBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQUksWUFBUSxFQUM1SEQseURBQW1DLFNBQVMsV0FBTyxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLGlCQUFRLFlBQ25GLEVBQ1Q7SUFDTCxDQUFDOztJQ0FELE1BQU0sV0FBVyxHQUFHLCtiQUErYixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQU0vZCxNQUFNLGdCQUFnQixHQUFHO1FBQ3JCLE1BQU0sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxHQUFHLFlBQVksQ0FBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUV4SixjQUFjLEVBQW9CLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFMU8sQ0FBTSxDQUFtQixJQUFLLENBQUMsRUFBRSxFQUFDO1FBRWhHLE1BQU0sQ0FBQyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUVuRCxDQUFDLENBQUMsSUFBSTtRQUVoQixRQUNJME8sZ0JBQVMsQ0FBQyxhQUVMLGNBQWMsSUFBSSxJQUFJLElBQUlBLDBDQUFtQkMsc0JBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQXNELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUtELHVCQUFLLElBQUksUUFBSSxLQUFLLFlBQU0sQ0FBQyxXQUFNLFlBQU0sRUFDbk0sWUFBWSxJQUFJLElBQUksSUFBSUEsMkNBQW9CQSwwQkFDekNDLHlCQUFPRCx1QkFBSUMsdUNBQWEsRUFBQUEsdUNBQWEsRUFBQUEsdUNBQWEsRUFBQUEsZ0RBQXNCLFlBQUssV0FBUSxFQUNyRkEseUJBQVEsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUlELHVCQUFJQyxzQkFBSyxDQUFDLENBQUMsSUFBSSxXQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUNBLHNCQUFLLENBQUMsQ0FBQyxJQUFJLFdBQU0sRUFBQUEsc0JBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsV0FBTSxZQUFLLENBQUMsV0FBUyxZQUMxSSxZQUFNLEVBQ2RBLHFCQUFNLEVBRUwsdUJBQXVCLElBQUksSUFBSSxJQUFJRCxtREFBNEJDLHNCQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJQSxzQkFBSyxJQUFJLFdBQU0sQ0FBQyxXQUFNLFlBQU0sRUFDaEoscUJBQXFCLElBQUksSUFBSSxJQUFJRCxvREFBNkJDLHNCQUFLLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUlBLHNCQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxXQUFNLFlBQU0sRUFFNUlBLHFCQUFNLEVBQ0wsU0FBUyxJQUFJQSx1QkFBTSxTQUFTLFlBQVksS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBTyxZQUNuRyxFQUNUO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRztRQUNyQixNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsR0FBRyxZQUFZLENBQWlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLHNEQUFzRCxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBR3pNLFFBQ0lBLGdCQUFTLGlCQUFpQixDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLDBDQUUzQyxFQUFDO0lBQ2YsQ0FBQyxDQUFBO0lBR0QsTUFBTSxnQkFBZ0IsR0FBR0UsQ0FBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQXNCO1FBRXhELE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLFlBQVksQ0FBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVuRixNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUNyRixJQUFJLEtBQUssSUFBSSxDQUFDO1lBQ1YsT0FBT0Ysc0JBQU8sQ0FBQztRQUVuQixRQUNJRCxhQUFLLFNBQVMsRUFBQyxNQUFNLGFBQ2pCQSxzQ0FBZUMsZUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFdBQUksWUFBUSxFQUM1SUEsZ0JBQVMsUUFBUSxZQUNiQSxJQUFDLHFCQUFxQixJQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBSSxXQUNoRixZQUNKLEVBQ1I7SUFDTixDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0scUJBQXFCLEdBQUdFLENBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQTRFO1FBR3RJLFFBQ0lILHNCQUNJQywrQ0FBeUIsRUFDekJBLCtDQUF5QixFQUN6QkEsK0NBQXlCLEVBQ3pCRCxzQ0FBZUMsZUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFdBQUksWUFBUSxZQUU3SSxFQUNMO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLDBCQUEwQixHQUFHOUssQ0FBYSxDQUE2QyxJQUFLLENBQUMsQ0FBQztJQUNwRyxNQUFNLGdCQUFnQixHQUFHZ0wsQ0FBSSxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRXJFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxHQUFHLGdCQUFnQixDQUFvQyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7UUFFNUgsUUFDSUYsSUFBQywwQkFBMEIsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLHVCQUF1QixZQUMvREEsYUFBSyxTQUFTLEVBQUMsTUFBTSxZQUNqQkQsd0JBQ0lDLElBQUMsb0JBQW9CLElBQUMsS0FBSyxFQUFFLENBQUMsV0FBSSxFQUNsQ0EsSUFBQyxvQkFBb0IsSUFBQyxLQUFLLEVBQUUsQ0FBQyxXQUFJLEVBQ2xDQSxJQUFDLG9CQUFvQixJQUFDLEtBQUssRUFBRSxDQUFDLFdBQUksWUFDaEMsV0FDSixXQUM0QixFQUN6QztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxvQkFBb0IsR0FBR0UsQ0FBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQXFCO1FBRTNELE1BQU0sbUJBQW1CLEdBQUd2TyxDQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNuRSxNQUFNLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRWhILE1BQU0sRUFBRSxnQ0FBZ0MsRUFBRSxHQUFHLDJCQUEyQixFQUFrQixDQUFDO1FBQzNGLE1BQU0sRUFBRSxrQ0FBa0MsRUFBRSxHQUFHLDZCQUE2QixDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFaEcsTUFBTSxDQUFDLEdBQUcsZ0NBQWdDLENBQUMsRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN2RyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ0wsUUFDSW9PLGFBQUssU0FBUyxFQUFDLG1CQUFtQixhQUM5QkEsbUJBQVksa0NBQWtDLENBQUMsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyx5QkFBVyxLQUFLLEdBQUcsQ0FBQyxZQUFVLEVBQ3ZIQSxnQkFBUyxDQUFDLGFBQUVBLHdDQUFrQixLQUFLLEdBQUcsQ0FBQyxZQUFLLEVBQUFDLHFCQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQUssWUFBTSxZQUM5RSxFQUNUO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLGVBQWUsR0FBR0UsQ0FBSSxDQUFDO1FBRXpCLFFBQ0lILHNCQUNJQSxhQUFLLFNBQVMsRUFBQyxNQUFNLGFBQ2pCQyxJQUFDLFNBQVMsYUFBRyxFQUNiQSxJQUFDLFNBQVMsYUFBRyxZQUNYLEVBQ05BLElBQUMsb0JBQW9CLGFBQUcsWUFDekIsRUFDTjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBS0gsTUFBTSxTQUFTLEdBQUdFLENBQUksQ0FBQztRQUVuQixNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxlQUFlLENBQXFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVOLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxHQUFHLHVCQUF1QixDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkYsTUFBTSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsdUJBQXVCLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVuRixRQUNJSCx3QkFDSUMsa0JBQVcsNEJBQTRCLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxHQUFHLENBQUMsV0FBSSxFQUNsRUEsa0JBQVcsNEJBQTRCLENBQUMsRUFBRSxDQUFDLDhCQUFlLFlBQ3hELEVBQ1Q7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sU0FBUyxHQUFHRSxDQUFJLENBQUM7UUFFbkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsTUFBTSxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLEdBQUcsZUFBZSxDQUFxQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM1TixNQUFNLEVBQUUsNEJBQTRCLEVBQUUsR0FBRyx1QkFBdUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxHQUFHLHVCQUF1QixDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFbkYsUUFDSUYsdUJBQ0lELGtCQUFXLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxhQUFFQyxrQkFBVyw0QkFBNEIsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxXQUFJLHNCQUFjLFdBQzFILEVBQ1Q7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0sb0JBQW9CLEdBQUc5SyxDQUFhLENBQXFFLElBQUssQ0FBQyxDQUFDO0lBRXRILE1BQU0sb0JBQW9CLEdBQUdnTCxDQUFJLENBQUM7UUFFOUIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEtBQXNFO1lBQzVGLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxlQUFlLENBQUM7WUFDakQsSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztZQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBb0I7cUJBQ3BDLElBQUksS0FBSyxLQUFLLElBQUk7b0JBQ25CLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJO29CQUMxQixjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBRTdCO1lBRUQsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckMsQ0FBQztRQUdGLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsR0FBRyxXQUFXLENBQWlCLEVBQUUsQ0FBQyxDQUFBO1FBQzdFLE1BQU0sRUFBRSwyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSwwQkFBMEIsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLGdCQUFnQixDQUE4QyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDaFYsTUFBTSxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLEdBQUcsZUFBZSxDQUFxQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxvQkFBMkIsRUFBRSxDQUFDLENBQUM7UUFFL04sTUFBTSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsdUJBQXVCLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNuRixNQUFNLEVBQUUsNEJBQTRCLEVBQUUsR0FBRyx1QkFBdUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxRQUFRLENBQWMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRzdFLE9BQU9GLGFBQUssS0FBSyxFQUFDLE1BQU0sWUFDcEJELElBQUMsb0JBQW9CLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxxQkFBcUIsYUFDdkRBLHdCQUNJQyxrQkFBVyw0QkFBNEIsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFJLEVBQzlFQSxrQkFBVyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMscUNBQXNCLFlBQy9ELEVBQ05BLGdCQUFTLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxZQUVqRixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtnQ0FDekIsU0FBUyxZQUFZLENBQUMsUUFBaUI7b0NBRW5DLGlCQUFpQixDQUFDLGNBQWM7d0NBQzVCLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUVuQyxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7NENBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NENBQ1osT0FBTyxJQUFJLENBQUM7eUNBQ2Y7NkNBQ0ksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRDQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRDQUNmLE9BQU8sSUFBSSxDQUFDO3lDQUNmO3dDQUVELE9BQU8sY0FBYyxDQUFDO3FDQUN6QixDQUFDLENBQUM7aUNBRU47Z0NBRUQsTUFBTUEsSUFBQyx5QkFBeUIsSUFBUyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsWUFBWSxJQUF2RSxDQUFDLENBQTBFLENBQUE7NkJBQ3BIO3lCQUNKLEdBQUcsQ0FBQyxXQUNILFlBQ3NCLFdBQzlCLENBQUE7SUFDVixDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0seUJBQXlCLEdBQUdFLENBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQWdHO1FBQ2hLLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxNQUFNLHFCQUFxQixHQUFHdk8sQ0FBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLEdBQUcsVUFBVSxLQUFLLEdBQUcsQ0FBQyxhQUFhLE9BQU8sR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDeEUsTUFBTSxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0csSUFBSSxHQUFHLFVBQVUsS0FBSyxHQUFHLENBQUMsYUFBYSxPQUFPLEdBQUcsV0FBVyxHQUFHLEVBQUUsSUFBSSxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ25HLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLGVBQWUsQ0FBcUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLE1BQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpPLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxHQUFHLHVCQUF1QixDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkYsTUFBTSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsdUJBQXVCLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVuRixRQUFRb08sd0JBQ0pDLGtCQUFXLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQUksRUFDM0VBLGtCQUFXLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxZQUFHLElBQUksV0FBUyxZQUN6RCxFQUNKO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFHSCxNQUFNLGFBQWEsR0FBR0UsQ0FBSSxDQUFDO1FBQ3ZCLE1BQU0sT0FBTyxJQUFJLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLEdBQUcsYUFBYSxDQUFpQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzlILE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxHQUFHLGlCQUFpQixFQUFrQixDQUFDO1FBQ3ZFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxHQUFHLGFBQWEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ2pELFFBQ0lILGFBQUssS0FBSyxFQUFDLE1BQU0sYUFDYkMseUJBQU9BLGVBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUEsRUFBRSxXQUFJLFdBQVEsRUFDL0hBLGdCQUFTLHNCQUFzQixDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsWUFDOUNELGdCQUFTLGNBQWMsQ0FBQyxFQUFFLENBQUMsYUFDdkJDLGdCQUFTLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxxQ0FBb0IsRUFDcERELGdCQUFTLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxhQUMzQkMsV0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLDRDQUF5QixFQUN4Q0EscUJBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBSyxFQUM5QkEscUJBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBSyxFQUM5QkEscUJBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBSyxFQUM5QkEscUJBQUdBLGdCQUFRLE9BQU8sRUFBRSxPQUFPLDhCQUFnQixXQUFJLFlBQzdDLFlBQ0osV0FDSixZQUNKLEVBQ1Q7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0sd0JBQXdCLEdBQUc5SyxDQUFhLENBQStFLElBQUssQ0FBQyxDQUFDO0lBQ3BJLE1BQU0sb0JBQW9CLEdBQUdnTCxDQUFJLENBQUM7UUFDOUIsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxNQUFNLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxvQkFBb0IsQ0FBMkUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFHM1IsT0FBT0YsYUFBSyxLQUFLLEVBQUMsTUFBTSxZQUNwQkEsSUFBQyx3QkFBd0IsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLG9CQUFvQixZQUMxREEsZUFBUSxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsWUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7NEJBQ3pCLE1BQU1BLElBQUMsdUJBQXVCLElBQVMsS0FBSyxFQUFFLENBQUMsSUFBWCxDQUFDLENBQWMsQ0FBQTt5QkFDdEQ7cUJBQ0osR0FBRyxDQUFDLFdBQ0osV0FDMkIsV0FDbEMsQ0FBQTtJQUNWLENBQUMsQ0FBQyxDQUFDO0lBSUgsTUFBTSx1QkFBdUIsR0FBR0UsQ0FBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQXNCO1FBQy9ELE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxHQUFHdk8sQ0FBVSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5SSxPQUFPb08sZUFBUSx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsd0JBQVUsS0FBSyxHQUFHLENBQUMsYUFBUyxRQUFRLEdBQUcsYUFBYSxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsYUFBYSxHQUFHLEVBQUUsWUFBTSxDQUFBO0lBQzlJLENBQUMsQ0FBQyxDQUFDO0lBTUgsTUFBTSx1QkFBdUIsR0FBRzdLLENBQWEsQ0FBNkUsSUFBSyxDQUFDLENBQUM7SUFDakksTUFBTSxtQkFBbUIsR0FBR2dMLENBQUksQ0FBQztRQUU3QixNQUFNLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxtQkFBbUIsQ0FBMEUsRUFBRSxDQUFDLENBQUM7UUFFL0wsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLFFBQVEsQ0FBYyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFHN0UsT0FBT0YsYUFBSyxLQUFLLEVBQUMsTUFBTSxZQUNwQkQsSUFBQyx1QkFBdUIsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLG1CQUFtQixhQUN4REMsZUFBUSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsWUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0NBQ3pCLFNBQVMsWUFBWSxDQUFDLFFBQWlCO29DQUVuQyxpQkFBaUIsQ0FBQyxjQUFjO3dDQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzt3Q0FFbkMsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRDQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRDQUNaLE9BQU8sSUFBSSxDQUFDO3lDQUNmOzZDQUNJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTs0Q0FDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0Q0FDZixPQUFPLElBQUksQ0FBQzt5Q0FDZjt3Q0FFRCxPQUFPLGNBQWMsQ0FBQztxQ0FDekIsQ0FBQyxDQUFDO2lDQUVOO2dDQUVELE1BQU1BLElBQUMsc0JBQXNCLElBQVMsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksSUFBekUsQ0FBQyxDQUE0RSxDQUFBOzZCQUNuSDt5QkFDSixHQUFHLENBQUMsV0FDSixFQUNKLGdCQUFnQixJQUFJLElBQUksSUFBSUEscUJBQUksZ0JBQWdCLFdBQUssWUFDdkIsV0FDakMsQ0FBQTtJQUNWLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxlQUFlLEdBQUc5SyxDQUFhLENBQStDLElBQUssQ0FBQyxDQUFDO0lBQzNGLE1BQU0sc0JBQXNCLEdBQUdnTCxDQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUE4RTtRQUM3SSxJQUFJLElBQUksR0FBRyxVQUFVLEtBQUssR0FBRyxDQUFDLFVBQVUsUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN4RSxNQUFNLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLEdBQUd2TyxDQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM5SyxJQUFJLEdBQUcsVUFBVSxLQUFLLEdBQUcsQ0FBQyxVQUFVLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxHQUFHLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDcEcsT0FBT3FPLGVBQVEsd0JBQXdCLENBQUMsRUFBRSxDQUFDLFlBQUcsSUFBSSxXQUFNLENBQUE7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLFFBQVEsR0FBR0UsQ0FBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxXQUFXLENBQW1CLEVBQUUsQ0FBQyxDQUFBO1FBRXBHLE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLFdBQVcsQ0FBb0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFFekwsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsYUFBYSxDQUFvQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ2xGLFFBQ0lGLGFBQUssS0FBSyxFQUFDLE1BQU0sWUFDYkQsSUFBQyxlQUFlLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxXQUFXLGFBQ3hDQyxtQkFBWSxrQkFBa0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0NBQW9CLEVBQzVGRCxlQUFRLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksYUFDckRDLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLFdBQUksRUFDMUJBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLFdBQUksRUFDMUJBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLFdBQUksWUFDekIsWUFDa0IsV0FFekIsRUFDVDtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxZQUFZLEdBQUdFLENBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFxQjtRQUNuRCxNQUFNLGVBQWUsR0FBR3ZPLENBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwRCxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEUsT0FBT29PLGVBQVEsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLHNCQUFRLEtBQUssR0FBRyxDQUFDLFlBQU0sQ0FBQTtJQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUVGLE1BQU0sVUFBVSxHQUFHN0ssQ0FBYSxDQUFvQyxJQUFLLENBQUMsQ0FBQztJQUMzRSxNQUFNLGVBQWUsR0FBR0EsQ0FBYSxDQUFvQyxJQUFLLENBQUMsQ0FBQztJQUNoRixNQUFNLFFBQVEsR0FBR2dMLENBQUksQ0FBQztRQUNsQixNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQXVCLE9BQU8sQ0FBQyxDQUFDO1FBRWxGLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxXQUFXLENBQXdELEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVyUCxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFFMUMsUUFDSUYsSUFBQyxVQUFVLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxNQUFNLFlBQzlCQSxJQUFDLGVBQWUsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLFdBQVcsWUFDeENELGFBQUssS0FBSyxFQUFDLE1BQU0sYUFDYkEsMEJBQU9DLGVBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsYUFBYSxJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFBLEVBQUUsV0FBSSxtQ0FBMkIsRUFFeE1ELGVBQVEsZUFBZSxDQUFDLEVBQUUsQ0FBQyxhQUFFQyxJQUFDLE9BQU8sSUFBQyxLQUFLLEVBQUUsQ0FBQyxXQUFJLEVBQUFBLElBQUMsT0FBTyxJQUFDLEtBQUssRUFBRSxDQUFDLFdBQUksRUFBQUEsSUFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLENBQUMsV0FBSSxFQUFBQSxJQUFDLE9BQU8sSUFBQyxLQUFLLEVBQUUsQ0FBQyxXQUFJLEVBQUFBLElBQUMsT0FBTyxJQUFDLEtBQUssRUFBRSxDQUFDLFdBQUksWUFBSyxFQUMzSUQsd0JBQUtDLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLFdBQUksRUFBQUEsSUFBQyxZQUFZLElBQUMsS0FBSyxFQUFFLENBQUMsV0FBSSxFQUFBQSxJQUFDLFlBQVksSUFBQyxLQUFLLEVBQUUsQ0FBQyxXQUFJLEVBQUFBLElBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxDQUFDLFdBQUksRUFBQUEsSUFBQyxZQUFZLElBQUMsS0FBSyxFQUFFLENBQUMsV0FBSSxZQUFNLFlBQzNJLFdBQ2lCLFdBQ1QsRUFDekI7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sT0FBTyxHQUFHRSxDQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBcUI7UUFDOUMsTUFBTSxNQUFNLEdBQUd2TyxDQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUUxRSxRQUFRcU8scUJBQ0pELGVBQVEsV0FBVyxDQUFDLEVBQUUsQ0FBQyxzQkFBUSxLQUFLLEdBQUcsQ0FBQyxRQUFJLGFBQWEsUUFBUSxFQUFFLGlCQUFPLFdBQzNFLEVBQUM7SUFDUixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sWUFBWSxHQUFHRyxDQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBcUI7UUFDbkQsTUFBTSxXQUFXLEdBQUd2TyxDQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7UUFFNUQsUUFDSW9PLGdCQUFTLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsYUFDM0NBLDZDQUF1QixLQUFLLEdBQUcsQ0FBQyxRQUFJLGFBQWEsT0FBTyxFQUFFLGtCQUFPLEVBQ2pFQyxxQkFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQUssWUFDbkYsRUFDVDtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxXQUFXLEdBQUdFLENBQUksQ0FBQztRQUNyQixNQUFNLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRSxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsVUFBVSxFQUFtQixDQUFDO1FBQzFELE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxHQUFHLGlCQUFpQixFQUFtQixDQUFDO1FBQ3hFLFFBQ0lGLGFBQUssS0FBSyxFQUFDLE1BQU0sWUFDYkQscURBQThCQyxpQkFBVSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsNENBQTRCLEVBQUFBLGlCQUFVLGVBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLHFEQUFxQyxZQUFJLFdBQ25MLEVBQ1Q7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnRUEsTUFBTSxTQUFTLEdBQUc7UUFDZCxPQUFPRCxhQUFLLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUNoREMsSUFBQyxXQUFXLGFBQUcsRUFFZkEsSUFBQyxRQUFRLGFBQUcsRUFDWkEsSUFBQyxjQUFjLGFBQUcsRUFDbEJBLElBQUMsZUFBZSxhQUFHLEVBQ25CQSxJQUFDLFFBQVEsYUFBRyxFQUNaQSxJQUFDLG9CQUFvQixhQUFHLEVBQ3hCQSxJQUFDLG1CQUFtQixhQUFHLEVBQ3ZCQSxJQUFDLGVBQWUsYUFBRyxFQUNuQkEsSUFBQyxnQkFBZ0IsYUFBRyxFQUNwQkEsSUFBQyxhQUFhLGFBQUcsRUFDakJBLElBQUMscUJBQXFCLGFBQUcsRUFHekJBLElBQUMsZ0JBQWdCLGFBQUcsRUFDcEJBLElBQUMsZ0JBQWdCLGFBQUcsRUFDcEJBLElBQUMsZ0JBQWdCLGFBQUcsRUFDcEJBLHdCQUFTLFlBQ1AsQ0FBQTtJQUNWLENBQUMsQ0FBQTtJQUVELHFCQUFxQixDQUFDO1FBQ2xCRyxHQUFNLENBQUNILElBQUMsU0FBUyxhQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQzs7Ozs7OyJ9
