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
     * We also only look for the selection end to only catch the
     * essense of a non-existant "selectionstop" event.
     *
     * @param element
     * @returns
     */


    function nodeSelectedTextLength(element) {
      if (element && element instanceof Node) {
        const selection = window.getSelection();

        for (let i = 0; i < ((_selection$rangeCount = selection === null || selection === void 0 ? void 0 : selection.rangeCount) !== null && _selection$rangeCount !== void 0 ? _selection$rangeCount : 0); ++i) {
          var _selection$rangeCount;

          let range = selection.getRangeAt(i);

          if (element.contains(range.endContainer) && !(selection !== null && selection !== void 0 && selection.isCollapsed)) {
            return selection.toString().length;
          }
        }
      }

      return 0;
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

      const [textSelectedDuringActivationStartTime, setTextSelectedDuringActivationStartTime] = useState(null);
      useGlobalHandler(document, "selectionchange", e => {
        setTextSelectedDuringActivationStartTime(prev => nodeSelectedTextLength(getElement()) == 0 ? null : prev != null ? prev : new Date());
      });
      useEffect(() => {
        if (active == 0) setTextSelectedDuringActivationStartTime(null);
      }, [active == 0]);
      const onActiveStart = useStableCallback(e => {
        setActive(a => ++a);
      });
      const onActiveStop = useStableCallback(e => {
        setActive(a => Math.max(0, --a));
        let currentTime = new Date();
        let timeDifference = textSelectedDuringActivationStartTime == null ? null : +currentTime - +textSelectedDuringActivationStartTime; // If we're selecting text (heuristically determined by selecting for longer than 1/4 a second, or more than 2 characters)
        // then this isn't a press event.
        // TODO: This should measure glyphs instead of characters.

        if (timeDifference && timeDifference > 250 || nodeSelectedTextLength(getElement()) >= 2) {
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
        style: textSelectedDuringActivationStartTime != null ? {
          cursor: "text"
        } : undefined,
        ...{
          "data-pseudo-active": active && textSelectedDuringActivationStartTime == null ? "true" : undefined
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
      const [triggerFocusedDelayCorrected, setTriggerFocusedDelayCorrected] = useState(false);
      const [triggerHoverDelayCorrected, setTriggerHoverDelayCorrected] = useState(false);
      const [tooltipFocusedDelayCorrected, setTooltipFocusedDelayCorrected] = useState(false);
      const [tooltipHoverDelayCorrected, setTooltipHoverDelayCorrected] = useState(false);
      y(() => {
        setOpen(triggerFocusedDelayCorrected || triggerHoverDelayCorrected || tooltipFocusedDelayCorrected || tooltipHoverDelayCorrected);
      }, [triggerFocusedDelayCorrected || triggerHoverDelayCorrected || tooltipFocusedDelayCorrected || tooltipHoverDelayCorrected]);
      const useTooltipTrigger = F(function useTooltipTrigger() {
        useGlobalHandler(document, "pointermove", e => {
          var _getElement;

          let target = e.target;
          setTriggerHover(target == getElement() || !!((_getElement = getElement()) !== null && _getElement !== void 0 && _getElement.contains(target)));
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
          var _getElement2;

          let target = e.target;
          setTooltipHover(target == getElement() || !!((_getElement2 = getElement()) !== null && _getElement2 !== void 0 && _getElement2.contains(target)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvZGlzdC9qc3hSdW50aW1lLm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcGFzc2l2ZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXRpbWVvdXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1saXN0LW5hdmlnYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYW5pbWF0aW9uLWZyYW1lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWRyYWdnYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kcm9wcGFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZXZlbnQtaGFuZGxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1hY3RpdmUtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1oYXMtZm9jdXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtaW50ZXJ2YWwuanMiLCIuLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvZGlzdC9pbmRleC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9kaXN0L2luZXJ0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL2Rpc3QvYmxvY2tpbmctZWxlbWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYmxvY2tpbmctZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1mb2N1cy10cmFwLmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvZGlzdC9jb21wYXQubWpzIiwiLi4vcHJvcHMuanMiLCIuLi91c2UtYnV0dG9uLmpzIiwiLi4vdXNlLWFjY29yZGlvbi5qcyIsIi4uL3VzZS1sYWJlbC5qcyIsIi4uL3VzZS1jaGVja2JveC5qcyIsIi4uL3VzZS1jaGVja2JveC1ncm91cC5qcyIsIi4uL3VzZS1tb2RhbC5qcyIsIi4uL3VzZS1kaWFsb2cuanMiLCIuLi91c2UtbGlzdGJveC1tdWx0aS5qcyIsIi4uL3VzZS1saXN0Ym94LXNpbmdsZS5qcyIsIi4uL3VzZS1tZW51LmpzIiwiLi4vdXNlLXRhYnMuanMiLCIuLi91c2UtdG9vbHRpcC5qcyIsImRlbW9zL3VzZS1pbnRlcnZhbC50c3giLCJkZW1vcy91c2Utcm92aW5nLXRhYi1pbmRleC50c3giLCJkZW1vcy91c2UtdGltZW91dC50c3giLCJpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxyLG8sZixlPXt9LGM9W10scz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGEobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gaChuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB2KGwsdSxpKXt2YXIgdCxyLG8sZj17fTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihvIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbb10mJihmW29dPWwuZGVmYXVsdFByb3BzW29dKTtyZXR1cm4geShsLGYsdCxyLG51bGwpfWZ1bmN0aW9uIHkobixpLHQscixvKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOnIsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09bz8rK3U6b307cmV0dXJuIG51bGw9PW8mJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBwKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBfKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGsobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2sobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ayhuKTpudWxsfWZ1bmN0aW9uIGIobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBiKG4pfX1mdW5jdGlvbiBtKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIWcuX19yKyt8fG8hPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChvPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxyKShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBuO2cuX19yPXQubGVuZ3RoOyluPXQuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdD1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQscixvO24uX19kJiYocj0odD0obD1uKS5fX3YpLl9fZSwobz1sLl9fUCkmJih1PVtdLChpPWEoe30sdCkpLl9fdj10Ll9fdisxLGoobyx0LGksbC5fX24sdm9pZCAwIT09by5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W3JdOm51bGwsdSxudWxsPT1yP2sodCk6cix0Ll9faCkseih1LHQpLHQuX19lIT1yJiZiKHQpKSl9KX1mdW5jdGlvbiB3KG4sbCx1LGksdCxyLG8sZixzLGEpe3ZhciBoLHYscCxfLGIsbSxnLHc9aSYmaS5fX2t8fGMsQT13Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShfPXUuX19rW2hdPW51bGw9PShfPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIF8/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgX3x8XCJudW1iZXJcIj09dHlwZW9mIF98fFwiYmlnaW50XCI9PXR5cGVvZiBfP3kobnVsbCxfLG51bGwsbnVsbCxfKTpBcnJheS5pc0FycmF5KF8pP3koZCx7Y2hpbGRyZW46X30sbnVsbCxudWxsLG51bGwpOl8uX19iPjA/eShfLnR5cGUsXy5wcm9wcyxfLmtleSxudWxsLF8uX192KTpfKSl7aWYoXy5fXz11LF8uX19iPXUuX19iKzEsbnVsbD09PShwPXdbaF0pfHxwJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl3W2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxBO3YrKyl7aWYoKHA9d1t2XSkmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXt3W3ZdPXZvaWQgMDticmVha31wPW51bGx9aihuLF8scD1wfHxlLHQscixvLGYscyxhKSxiPV8uX19lLCh2PV8ucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLF8pLGcucHVzaCh2LF8uX19jfHxiLF8pKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfLnR5cGUmJl8uX19rPT09cC5fX2s/Xy5fX2Q9cz14KF8scyxuKTpzPVAobixfLHAsdyxiLHMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpKTpzJiZwLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1rKHApKX1mb3IodS5fX2U9bSxoPUE7aC0tOyludWxsIT13W2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT13W2hdLl9fZSYmd1toXS5fX2U9PXUuX19kJiYodS5fX2Q9ayhpLGgrMSkpLE4od1toXSx3W2hdKSk7aWYoZylmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKU0oZ1toXSxnWysraF0sZ1srK2hdKX1mdW5jdGlvbiB4KG4sbCx1KXtmb3IodmFyIGksdD1uLl9fayxyPTA7dCYmcjx0Lmxlbmd0aDtyKyspKGk9dFtyXSkmJihpLl9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpLnR5cGU/eChpLGwsdSk6UCh1LGksaSx0LGkuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiBBKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7QShuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIFAobixsLHUsaSx0LHIpe3ZhciBvLGYsZTtpZih2b2lkIDAhPT1sLl9fZClvPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPXJ8fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PXJ8fHIucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxvPW51bGw7ZWxzZXtmb3IoZj1yLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0yKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LHIpLG89cn1yZXR1cm4gdm9pZCAwIT09bz9vOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciByO2ZvcihyIGluIHUpXCJjaGlsZHJlblwiPT09cnx8XCJrZXlcIj09PXJ8fHIgaW4gbHx8SChuLHIsbnVsbCx1W3JdLGkpO2ZvcihyIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtyXXx8XCJjaGlsZHJlblwiPT09cnx8XCJrZXlcIj09PXJ8fFwidmFsdWVcIj09PXJ8fFwiY2hlY2tlZFwiPT09cnx8dVtyXT09PWxbcl18fEgobixyLGxbcl0sdVtyXSxpKX1mdW5jdGlvbiAkKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxzLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBIKG4sbCx1LGksdCl7dmFyIHI7bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHwkKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fCQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pcj1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK3JdPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxyP1Q6SSxyKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxyP1Q6SSxyKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rW0g6aF0vLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQscixvLGYsZSxjKXt2YXIgcyxoLHYseSxwLGssYixtLGcseCxBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxvPVtlXSksKHM9bC5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKG09dS5wcm9wcyxnPShzPVAuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/Zz9nLnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9iPShoPXUuX19jPWkuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBQKG0seCk6KHUuX19jPWg9bmV3IF8obSx4KSxoLmNvbnN0cnVjdG9yPVAsaC5yZW5kZXI9TyksZyYmZy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9eCxoLl9fbj10LHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWEoe30saC5fX3MpKSxhKGguX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkseT1oLnByb3BzLHA9aC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLHgpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7aC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKG0saC5fX3MseCksbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LHAsayl9KX1oLmNvbnRleHQ9eCxoLnByb3BzPW0saC5zdGF0ZT1oLl9fcywocz1sLl9fcikmJnModSksaC5fX2Q9ITEsaC5fX3Y9dSxoLl9fUD1uLHM9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKHQ9YShhKHt9LHQpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHkscCkpLEE9bnVsbCE9cyYmcy50eXBlPT09ZCYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzLHcobixBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsaSx0LHIsbyxmLGUsYyksaC5iYXNlPXUuX19lLHUuX19oPW51bGwsaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCksaC5fX2U9ITF9ZWxzZSBudWxsPT1vJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TChpLl9fZSx1LGksdCxyLG8sZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9bykmJih1Ll9fZT1lLHUuX19oPSEhYyxvW28uaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiB6KG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBMKGwsdSxpLHQscixvLGYsYyl7dmFyIHMsYSx2LHk9aS5wcm9wcyxwPXUucHJvcHMsZD11LnR5cGUsXz0wO2lmKFwic3ZnXCI9PT1kJiYocj0hMCksbnVsbCE9bylmb3IoO188by5sZW5ndGg7XysrKWlmKChzPW9bX10pJiYocz09PWx8fChkP3MubG9jYWxOYW1lPT1kOjM9PXMubm9kZVR5cGUpKSl7bD1zLG9bX109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09ZClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocCk7bD1yP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkLHAuaXMmJnApLG89bnVsbCxjPSExfWlmKG51bGw9PT1kKXk9PT1wfHxjJiZsLmRhdGE9PT1wfHwobC5kYXRhPXApO2Vsc2V7aWYobz1vJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxhPSh5PWkucHJvcHN8fGUpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9cC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9bylmb3IoeT17fSxfPTA7XzxsLmF0dHJpYnV0ZXMubGVuZ3RoO18rKyl5W2wuYXR0cmlidXRlc1tfXS5uYW1lXT1sLmF0dHJpYnV0ZXNbX10udmFsdWU7KHZ8fGEpJiYodiYmKGEmJnYuX19odG1sPT1hLl9faHRtbHx8di5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWlmKEMobCxwLHkscixjKSx2KXUuX19rPVtdO2Vsc2UgaWYoXz11LnByb3BzLmNoaWxkcmVuLHcobCxBcnJheS5pc0FycmF5KF8pP186W19dLHUsaSx0LHImJlwiZm9yZWlnbk9iamVjdFwiIT09ZCxvLGYsbz9vWzBdOmkuX19rJiZrKGksMCksYyksbnVsbCE9bylmb3IoXz1vLmxlbmd0aDtfLS07KW51bGwhPW9bX10mJmgob1tfXSk7Y3x8KFwidmFsdWVcImluIHAmJnZvaWQgMCE9PShfPXAudmFsdWUpJiYoXyE9PWwudmFsdWV8fFwicHJvZ3Jlc3NcIj09PWQmJiFfKSYmSChsLFwidmFsdWVcIixfLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KF89cC5jaGVja2VkKSYmXyE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLF8seS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxyO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bi5fX2spZm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdJiZOKHRbcl0sdSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxoKG4uX19lKSxuLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBTKHUsaSx0KXt2YXIgcixvLGY7bC5fXyYmbC5fXyh1LGkpLG89KHI9XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxqKGksdT0oIXImJnR8fGkpLl9faz12KGQsbnVsbCxbdV0pLG98fGUsZSx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhciYmdD9bdF06bz9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIXImJnQ/dDpvP28uX19lOmkuZmlyc3RDaGlsZCxyKSx6KGYsdSl9ZnVuY3Rpb24gcShuLGwpe1MobixsLHEpfWZ1bmN0aW9uIEIobCx1LGkpe3ZhciB0LHIsbyxmPWEoe30sbC5wcm9wcyk7Zm9yKG8gaW4gdSlcImtleVwiPT1vP3Q9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTpmW29dPXVbb107cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSkseShsLnR5cGUsZix0fHxsLmtleSxyfHxsLnJlZixudWxsKX1mdW5jdGlvbiBEKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2YrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKG0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49Yy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxfLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1hKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oYSh7fSx1KSx0aGlzLnByb3BzKSksbiYmYSh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLG0odGhpcykpfSxfLnByb3RvdHlwZS5yZW5kZXI9ZCx0PVtdLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZy5fX3I9MCxmPTA7ZXhwb3J0e1MgYXMgcmVuZGVyLHEgYXMgaHlkcmF0ZSx2IGFzIGNyZWF0ZUVsZW1lbnQsdiBhcyBoLGQgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsaSBhcyBpc1ZhbGlkRWxlbWVudCxfIGFzIENvbXBvbmVudCxCIGFzIGNsb25lRWxlbWVudCxEIGFzIGNyZWF0ZUNvbnRleHQsQSBhcyB0b0NoaWxkQXJyYXksbCBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyByLEZyYWdtZW50IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e0ZyYWdtZW50fWZyb21cInByZWFjdFwiO3ZhciBvPTA7ZnVuY3Rpb24gZShfLGUsbix0LGYpe3ZhciBsLHMsdT17fTtmb3IocyBpbiBlKVwicmVmXCI9PXM/bD1lW3NdOnVbc109ZVtzXTt2YXIgYT17dHlwZTpfLHByb3BzOnUsa2V5Om4scmVmOmwsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6LS1vLF9fc291cmNlOnQsX19zZWxmOmZ9O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIF8mJihsPV8uZGVmYXVsdFByb3BzKSlmb3IocyBpbiBsKXZvaWQgMD09PXVbc10mJih1W3NdPWxbc10pO3JldHVybiByLnZub2RlJiZyLnZub2RlKGEpLGF9ZXhwb3J0e2UgYXMganN4LGUgYXMganN4cyxlIGFzIGpzeERFVn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc3hSdW50aW1lLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsQShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gQShuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEYobix0KXtyZXR1cm4gbz04LEEoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gVChuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIGQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLEEgYXMgdXNlTWVtbyxGIGFzIHVzZUNhbGxiYWNrLFQgYXMgdXNlQ29udGV4dCxkIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogRGVidWcgaG9vay5cbiAqXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRW5zdXJlU3RhYmlsaXR5KC4uLnZhbHVlcykge1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoLCAwKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xuICAgIHJldHVybjtcbiAgICBmdW5jdGlvbiB1c2VIZWxwZXIodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICAgICAgY29uc3QgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkgPSB1c2VSZWYodmFsdWUpO1xuICAgICAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnQgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhpcyBob29rIHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCB2YWx1ZSB0aGF0IHdhcyBjaGVja2VkLmApO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFNpbWlsYXIgdG8gYHVzZVN0YXRlYCwgYnV0IGZvciB2YWx1ZXMgdGhhdCBhcmVuJ3QgXCJyZW5kZXItaW1wb3J0YW50XCIgJm5kYXNoOyB1cGRhdGVzIGRvbid0IGNhdXNlIGEgcmUtcmVuZGVyIGFuZCBzbyB0aGUgdmFsdWUgc2hvdWxkbid0IGJlIHVzZWQgZHVyaW5nIHJlbmRlciAodGhvdWdoIGl0IGNlcnRhaW5seSBjYW4sIGF0IGxlYXN0IGJ5IHJlLXJlbmRlcmluZyBhZ2FpbikuXG4gKlxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKlxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpO1xuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbGV0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZXJlIGFyZSBhIGNvdXBsZSBwbGFjZXMgd2hlcmUgd2UnZCBsaWtlIHRvIHVzZSBvdXIgaW5pdGlhbFxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxuICAgIC8vIGdldFZhbHVlIGlzIGNhbGxlZC5cbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGluaXRpYWxWYWx1ZSwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcpID0+IHtcbiAgICAgICAgY29uc3QgcHJldkRlcCA9IHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVwID0gYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcocHJldkRlcCkgOiBhcmc7XG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBzaG91bGRuJ3QgY2FsbCBnZXRWYWx1ZSBkdXJpbmcgb25DaGFuZ2VcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmQgY2xlYW51cCBmdW5jdGlvblxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGRlcCwgcHJldkRlcCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkZXA7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59XG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXBhc3NpdmUtc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xuICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XG59XG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgIF07XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1syXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMTNdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cblxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdIGFzIGNvbnN0O1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcblxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSk7XG59XG4vKipcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIHJocy5zdHlsZTtcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QobGhzPy5zdHlsZSkgfSwgcmhzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xocy5zdHlsZX07JHtyaHM/LnN0eWxlID8/IFwiXCJ9YDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gbWVyZ2UgdHdvIHByb3BzIHdpdGggdGhlIHNhbWUgbmFtZTogJHtzdHJ9YCk7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ubGhzLFxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcbiAgICAgICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuLypcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcblxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTM6IE0xID0gMDtcblxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTY6IE0yID0gMDtcblxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuXG5cbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XG5cblxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxufVxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxuKi8gXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xuICAgIGNvbnN0IG9uRWxlbWVudENoYW5nZSA9IGFyZ3M/Lm9uRWxlbWVudENoYW5nZTtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRWxlbWVudENoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgZnVuY3Rpb24gZm9vKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwMS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmZ1bmN0aW9uIGV4dHJhY3RFbGVtZW50U2l6ZShlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV0cmlldmUgdGhlIHNpemUgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXRcIik7XG4gICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgIHJldHVybiAoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xufVxuZnVuY3Rpb24gcmV0dXJuTnVsbCgpIHsgcmV0dXJuIG51bGw7IH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh7IGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSk7XG4gICAgY29uc3QgW2dldFNpemUsIHNldFNpemVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU2l6ZUNoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgY29uc3QgY3VycmVudE9ic2VydmVCb3ggPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBuZWVkQU5ld09ic2VydmVyID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG9ic2VydmVCb3gpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzZXRTaXplKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiAoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4gbmVlZEFOZXdPYnNlcnZlcihlLCBnZXRPYnNlcnZlQm94Py4oKSksIFtdKSB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2ZUJveCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgIT09IGdldE9ic2VydmVCb3goKSlcbiAgICAgICAgICAgICAgICBuZWVkQU5ld09ic2VydmVyKGdldEVsZW1lbnQoKSwgZ2V0T2JzZXJ2ZUJveCgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIHVzZUVsZW1lbnRTaXplUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wc1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWxlbWVudC1zaXplLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlRWxlbWVudFNpemUgfSBmcm9tIFwiLi91c2UtZWxlbWVudC1zaXplXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcbn1cbi8qKlxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxuICpcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cbiAqXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxuICpcbiAqIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMvI2xvZ2ljYWwtdG8tcGh5c2ljYWxcbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAqICogYGdldExvZ2ljYWxEaXJlY3Rpb25gOiByZXRyaWV2ZXMgYSBgTG9naWNhbERpcmVjdGlvbkluZm9gIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gKEZ1bmN0aW9uIGlzIGNvbnN0YW50IGJldHdlZW4gcmVuZGVycylcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cbiAqICogYGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25gOiAgQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImlubGluZVwiIG9yIFwiYmxvY2tcIiB0byBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkob25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlKTtcbiAgICBjb25zdCBbZ2V0Q29tcHV0ZWRTdHlsZXMsIHNldENvbXB1dGVkU3R5bGVzXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0Q29tcHV0ZWRTdHlsZXMod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICB9KTtcbiAgICAvLyBUT0RPOiBUaGVyZSdzIG5vIHdheSB0byByZWZyZXNoIHdoaWNoIHdyaXRpbmcgbW9kZSB3ZSBoYXZlIG9uY2UgbW91bnRlZC5cbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xuICAgIC8vICAgQi4gQ2FsbGluZyBnZXRDb21wdXRlZFN0eWxlIGFmdGVyIGV2ZXJ5IHJlbmRlciBmb3IgZXZlcnkgZWxlbWVudCBnZXRzIGV4cGVuc2l2ZSBmYXN0IGFuZFxuICAgIC8vICAgQy4gSXMgbm90IG5lY2Vzc2FyeSBmb3IgbW9zdCB1c2UgY2FzZXMgdGhhdCB3aWxsIG5ldmVyIHN3aXRjaCB3cml0aW5nLW1vZGUgd2l0aGluIGEgc2luZ2xlIGNvbXBvbmVudFxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxuICAgIC8vXG4gICAgLy8gQXMgYSBzb2x1dGlvbiwgaGVyZSdzIGEgY2hlYXAgd29ya2Fyb3VuZCB0aGF0IGNoZWNrcyB3aGVuIHRoZSBlbGVtZW50J3Mgc2l6ZSBoYXMgY2hhbmdlZCxcbiAgICAvLyBhbmQgaWYgc28sIHRlc3RzIGlmIHRoZSB3cml0aW5nIG1vZGUgaGFzIGNoYW5nZWQgdG9vLlxuICAgIC8vXG4gICAgLy8gVGhpcyB3aWxsIHdvcmsgZm9yIGF0IGxlYXN0IHNvbWUgbnVtYmVyIG9mIGNhc2VzLCBidXQgYSBiZXR0ZXIgc29sdXRpb24gaXMgc3RpbGwgbmVlZGVkLlxuICAgIGNvbnN0IHsgdXNlRWxlbWVudFNpemVQcm9wcyB9ID0gdXNlRWxlbWVudFNpemUoeyBvblNpemVDaGFuZ2U6IHVzZUNhbGxiYWNrKF8gPT4gb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlPy4oZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKSksIFtdKSB9KTtcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlcygpO1xuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZXMpIHtcbiAgICAgICAgICAgIGxldCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XG4gICAgICAgICAgICBsZXQgZCA9IGNvbXB1dGVkU3R5bGVzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGxldCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXG4gICAgICAgICAgICAgICAgZCA9IFwibHRyXCI7XG4gICAgICAgICAgICByZXR1cm4gKHsgLi4uV3JpdGluZ01vZGVzW3cgfHwgXCJob3Jpem9udGFsLXRiXCJdW2QgfHwgXCJsdHJcIl0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBcImlubGluZVwiO1xuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stc3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMl1dO1xuICAgICAgICAgICAgY2FzZSBcImlubGluZS1zdGFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiaW5saW5lLWVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVsyXV07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gXCJpbmxpbmUtc3RhcnRcIjtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxMZWZ0VG9wKGRpcikgeyBpZiAoZGlyID09PSBcImx0clwiIHx8IGRpciA9PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2lkdGhcIjsgaWYgKGRpciA9PT0gXCJidHRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMiA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pKTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VSZWZFbGVtZW50UHJvcHModXNlRWxlbWVudFNpemVQcm9wcyhwcm9wcykpLCBbXSksXG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsU2l6ZTogY29udmVydEVsZW1lbnRTaXplLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaWRlLFxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbFNpZGVcbiAgICB9O1xufVxuLy8gSGVscGVyIGZvciBleHRyYWN0aW5nIGluZm8gZnJvbSBcImx0clwiLCBcInR0YlwiLCBldGMuXG5jb25zdCBNID0ge1xuICAgIHQ6IFwidG9wXCIsXG4gICAgYjogXCJib3R0b21cIixcbiAgICBsOiBcImxlZnRcIixcbiAgICByOiBcInJpZ2h0XCJcbn07XG47XG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xuICAgIC4uLkhvcml6b250YWxUYkx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXG59O1xuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcbn07XG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXG59O1xuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xuY29uc3QgVmVydGljYWxMckx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbFJ0bCxcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xuICAgIC4uLlZlcnRpY2FsTHJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcbn07XG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xuICAgIC4uLlNpZGV3YXlzTHRMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXG59O1xuY29uc3QgVmVydGljYWxSbCA9IHtcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXG59O1xuY29uc3QgVmVydGljYWxMciA9IHtcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXG59O1xuY29uc3QgU2lkZXdheXNSbCA9IHtcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXG59O1xuY29uc3QgU2lkZXdheXNMciA9IHtcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXG59O1xuY29uc3QgV3JpdGluZ01vZGVzID0ge1xuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZVAocHJldlZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFZhbHVlID0gY2FsbGJhY2socHJldlZhbHVlKTtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgICAgc2V0U3RhdGVQKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSB8fCAodHlwZW9mIHN0YXRlID09PSBcIm51bWJlclwiICYmIGlzTmFOKHN0YXRlKSkpO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBnZXRTdGF0ZV07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5mdW5jdGlvbiBiYXNlNjQodmFsdWUpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG4vKipcbiAqIFJldHVybnMgYSBob29rIHRoYXQgbW9kaWZpZXMgYSBzZXQgb2YgcHJvcHMgdG8gcHJvdmlkZSBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCBpZiBvbmUgd2FzIG5vdCBwcm92aWRlZC5cbiAqXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEFuZCB0aGUgcmFuZG9tbHktZ2VuZXJhdGVkIGlkIGl0c2VsZiBpcyBhbHNvIHByb3ZpZGVkIGluIGNhc2UgeW91IHdhbnQgdG8gaGFuZGxlIHRoZSBsb2dpYyB5b3Vyc2VsZiB3aXRob3V0IGB1c2VNZXJnZWRQcm9wc2AuXG4gKlxuICogVW5saWtlIG1vc3Qgb3RoZXIgYHVzZSpQcm9wc2AgaG9va3MsIHRoZXNlIGFyZSBtb3N0bHkgc3RhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XG4gICAgY29uc3QgW3JhbmRvbUlkLCBzZXRSYW5kb21JZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeCkpO1xuICAgIGNvbnN0IFt3YXRjaFByZWZpeFVwZGF0ZXMsIHNldFdhdGNoUHJlZml4VXBkYXRlcywgZ2V0V2F0Y2hQcmVmaXhVcGRhdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3YXRjaFByZWZpeFVwZGF0ZXMgPSBnZXRXYXRjaFByZWZpeFVwZGF0ZXMoKTtcbiAgICAgICAgaWYgKHdhdGNoUHJlZml4VXBkYXRlcylcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XG4gICAgICAgIHNldFdhdGNoUHJlZml4VXBkYXRlcyh0cnVlKTtcbiAgICB9LCBbcHJlZml4XSk7XG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxuICAgIC8vIFVzZWQgc28gdGhhdCBhbnkgSUQtcmVmZXJlbmNpbmcgcHJvcHMgZG9uJ3QgbmVlZCB0byBwcm92aWRlIHRoZSBzYW1lIHZhbHVlLlxuICAgIC8vXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcbiAgICAvLyB0aGVyZSB3aWxsIGJlIGEgdGVtcG9yYXJ5IG1pc21hdGNoLCBidXQgaXQncyBjb3JyZWN0ZWQgYmVmb3JlIHJlbmRlcmluZyBmaW5pc2hlcy5cbiAgICAvLyBJcyB0aGlzIG9rYXk/XG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCB1c2VSZWZlcmVuY2VkSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJlZmVyZW5jZWRJZFByb3BzKGlkUHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gZnVuY3Rpb24gKHsgW2lkUHJvcE5hbWVdOiBnaXZlbklkLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAoaWRQcm9wTmFtZSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgICAgIHNldFVzZWRJZCh1c2VkSWQyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xuICAgIGNvbnN0IHVzZVJhbmRvbUlkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VSYW5kb21JZFByb3BzKHApIHtcbiAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiaWRcIikocCk7XG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZG9tSWQsXG4gICAgICAgIGlkOiB1c2VkSWQsXG4gICAgICAgIGdldElkOiBnZXRVc2VkSWQsXG4gICAgICAgIHVzZVJhbmRvbUlkUHJvcHMsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzKHN0cikgeyB9XG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xuICAgIGNvbnN0IHsgaWQsIHJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoKTtcbiAgICAvL2NvbnN0IHAxYTogTWVyZ2VkUHJvcHM8eyBpZDogc3RyaW5nIH0sIHsgIH0+ID0gdXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSlcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHAyYiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xuICAgIGNvbnN0IHAzYSA9IHVzZVJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwM2IgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwNGIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwMWIpO1xuICAgIC8vcDFhLmlkO1xuICAgIHAxYi5pZDtcbiAgICBwMmFbXCJmb3JcIl07XG4gICAgcDJiW1wiZm9yXCJdO1xuICAgIHAyY1tcImZvclwiXTtcbiAgICBwM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwM2JbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGFbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBJdCdzIGJlY2F1c2UgaXQgcmVzb2x2ZXMgdG8gXCJpZDogdW5kZWZpbmVkICYgc3RyaW5nXCIgLS0gdGhpcyBzaG91bGRuJ3QgaGFwcGVuXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDFiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDJhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMmIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDNhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDNiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHA0YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDRiLnN0eWxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yYW5kb20taWQuanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xuY29uc3QgcHJldmlvdXNJbnB1dHMgPSBuZXcgTWFwKCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXAoKTtcbmNvbnN0IGNvbW1pdE5hbWUgPSAoXCJfX2NcIiBpbiBvcHRpb25zID8gXCJfX2NcIiA6IFwiY29tbWl0XCIgaW4gb3B0aW9ucyA/IFwiY29tbWl0XCIgOiBcIl9jb21taXRcIiBpbiBvcHRpb25zID8gXCJfY29tbWl0XCIgOiBcIl9fY1wiKTtcbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxuLy8gaXMgYSBwb3N0LXN1c3BlbnNlIHF1ZXN0aW9uLlxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XG4vLyBzbyBgcmVmPXtzb21lU3RhYmxlRnVuY3Rpb259YCB3b3Jrcy5cbi8vIFxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV07XG5jb25zdCBuZXdDb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG4gICAgZm9yIChsZXQgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICpcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xuICAgICAgICB9O1xuICAgIH0sIFtpZF0pO1xufVxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXG4gKlxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG4vKipcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxuICpcbiAqIERvIG5vdCB1c2UgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UhICBgdXNlTGF5b3V0RWZmZWN0YCBpcyBmaW5lIHRob3VnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IGFzIHVzZUVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBXcmFwIHRoZSBuYXRpdmUgYHVzZUVmZmVjdGAgdG8gYWRkIGFyZ3VtZW50c1xuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICogQHBhcmFtIGltcGwgWW91IGNhbiBjaG9vc2Ugd2hldGhlciB0byB1c2UgYHVzZUVmZmVjdGAgb3IgYHVzZUxheW91dEVmZmVjdGAgYnlcbiAqIHBhc3Npbmcgb25lIG9mIHRoZW0gYXMgdGhpcyBhcmd1bWVudC4gQnkgZGVmYXVsdCwgaXQncyBgdXNlRWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cywgaW1wbCA9IHVzZUVmZmVjdE5hdGl2ZSkge1xuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2hhbmdlcyA9IFtdO1xuICAgICAgICBpZiAoaW5wdXRzICYmIHByZXZJbnB1dHMuY3VycmVudCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJbnB1dHMuY3VycmVudFtpXSAhPSBpbnB1dHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICBpbXBsKGVmZmVjdDIsIGlucHV0cyk7XG59XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCBhcyB1c2VMYXlvdXRFZmZlY3ROYXRpdmUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwiLi91c2UtZWZmZWN0XCI7XG4vKipcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXG4gKiB0aGF0IGFsbG93IGFjY2Vzc2luZyB0aGUgcHJldmlvdXMgdmFsdWUgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICByZXR1cm4gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCB1c2VMYXlvdXRFZmZlY3ROYXRpdmUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRpbWVvdXQoeyB0aW1lb3V0LCBjYWxsYmFjaywgdHJpZ2dlckluZGV4IH0pIHtcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xuICAgIC8vIFNldCBhbnkgdGltZSB3ZSBzdGFydCB0aW1lb3V0LlxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xuICAgIGNvbnN0IHN0YXJ0VGltZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB0aW1lb3V0SXNOdWxsID0gKHRpbWVvdXQgPT0gbnVsbCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXG4gICAgLy8gcmVzdGFydCB0aGUgdGltZW91dC4gIFRoZSB0aW1lb3V0IGRvZXMgTk9UIHJlc2V0XG4gICAgLy8gd2hlbiB0aGUgZHVyYXRpb24gb3IgY2FsbGJhY2sgY2hhbmdlcywgb25seSB0cmlnZ2VySW5kZXguXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aW1lb3V0SXNOdWxsKSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGUgPSBzZXRUaW1lb3V0KHN0YWJsZUNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XG4gICAgY29uc3QgZ2V0RWxhcHNlZFRpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKyhuZXcgRGF0ZSgpKSkgLSAoKyhzdGFydFRpbWVSZWYuY3VycmVudCA/PyBuZXcgRGF0ZSgpKSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdldFJlbWFpbmluZ1RpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4geyBnZXRFbGFwc2VkVGltZSwgZ2V0UmVtYWluaW5nVGltZSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRpbWVvdXQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xuLyoqXG4gKiBXaGVuIHVzZWQgaW4gdGFuZGVtIHdpdGggYHVzZVJvdmluZ1RhYkluZGV4YCwgYWxsb3dzIGNvbnRyb2wgb2ZcbiAqIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHRoZSBhcnJvdyBrZXlzLlxuICpcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgaW5kZXgsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvUHJldiwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlQXJyb3dLZXlzLCBkaXNhYmxlSG9tZUVuZEtleXMgfSkge1xuICAgIG5hdmlnYXRpb25EaXJlY3Rpb24gPz89IFwiZWl0aGVyXCI7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaW5kZXgsIGNoaWxkQ291bnQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3RdKTtcbiAgICAvLyBUaGVzZSBhbGxvdyB1cyB0byBtYW5pcHVsYXRlIHdoYXQgb3VyIGN1cnJlbnQgdGFiYmFibGUgY2hpbGQgaXMuXG4gICAgLypjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpID49IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxPyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSA6ICsraSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA8IDA/IDAgOiAtLWkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoLTEpOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7Ki9cbiAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmRleCk7XG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgdXNlTG9naWNhbERpcmVjdGlvblByb3BzIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKHt9KTtcbiAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBsZXQgYWxsb3dzQmxvY2tOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJibG9ja1wiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XG4gICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gYWxsb3dzQmxvY2tOYXZpZ2F0aW9uIDogYWxsb3dzSW5saW5lTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0xhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIHByb3BzKSk7IH0sIFtdKSxcbiAgICB9O1xufVxuLyoqXG4gKiBBbGxvd3MgZm9yIHRoZSBzZWxlY3Rpb24gb2YgYSBtYW5hZ2VkIGNoaWxkIGJ5IHR5cGluZyB0aGUgZ2l2ZW4gdGV4dCBhc3NvY2lhdGVkIHdpdGggaXQuXG4gKlxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcbiAgICAvLyBGb3IgdHlwZWFoZWFkLCBrZWVwIHRyYWNrIG9mIHdoYXQgb3VyIGN1cnJlbnQgXCJzZWFyY2hcIiBzdHJpbmcgaXMgKGlmIHdlIGhhdmUgb25lKVxuICAgIC8vIGFuZCBhbHNvIGNsZWFyIGl0IGV2ZXJ5IDEwMDAgbXMgc2luY2UgdGhlIGxhc3QgdGltZSBpdCBjaGFuZ2VkLlxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cbiAgICAvLyBBbmQsIGZvciB0aGUgdXNlcidzIHNha2UsIGxldCB0aGVtIGtub3cgd2hlbiB0aGVpciB0eXBlYWhlYWQgY2FuJ3QgbWF0Y2ggYW55dGhpbmcgYW55bW9yZVxuICAgIGNvbnN0IFtjdXJyZW50VHlwZWFoZWFkLCBzZXRDdXJyZW50VHlwZWFoZWFkLCBnZXRDdXJyZW50VHlwZWFoZWFkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcbiAgICBjb25zdCBzb3J0ZWRUeXBlYWhlYWRJbmZvID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbaW52YWxpZFR5cGVhaGVhZCwgc2V0SW52YWxpZFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxuICAgIC8vIEVzc2VudGlhbGx5LCB3aGVuIGFjdGl2ZSwgaWdub3JlIGZ1cnRoZXIga2V5cyBcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHdhaXRpbmcgZm9yIGEgQ29tcG9zaXRpb25FbmQgZXZlbnRcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gQmVjYXVzZSBjb21wb3NpdGlvbiBldmVudHMgZmlyZSAqYWZ0ZXIqIGtleWRvd24gZXZlbnRzIFxuICAgIC8vIChidXQgd2l0aGluIHRoZSBzYW1lIHRhc2ssIHdoaWNoLCBUT0RPLCBjb3VsZCBiZSBicm93c2VyLWRlcGVuZGVudCksXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cbiAgICBjb25zdCBbbmV4dFR5cGVhaGVhZENoYXIsIHNldE5leHRUeXBlYWhlYWRDaGFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0eXBlYWhlYWQgPT4gKCh0eXBlYWhlYWQgPz8gXCJcIikgKyBuZXh0VHlwZWFoZWFkQ2hhcikpO1xuICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIobnVsbCk7XG4gICAgICAgIH1cbiAgICB9LCBbbmV4dFR5cGVhaGVhZENoYXJdKTtcbiAgICBjb25zdCBjb21wYXJhdG9yU2hhcmVkID0gdXNlU3RhYmxlQ2FsbGJhY2soKHNhZmVMaHMsIHNhZmVSaHMpID0+IHtcbiAgICAgICAgbGV0IGNvbXBhcmU7XG4gICAgICAgIC8vIEZvciB0aGUgcHVycG9zZXMgb2YgdHlwZWFoZWFkLCBvbmx5IGNvbXBhcmUgYSBzdHJpbmcgb2YgdGhlIHNhbWUgc2l6ZSBhcyBvdXIgY3VycmVudGx5IHR5cGVkIHN0cmluZy5cbiAgICAgICAgLy8gQnkgbm9ybWFsaXppbmcgdGhlbSBmaXJzdCwgd2UgZW5zdXJlIHRoaXMgYnl0ZS1ieS1ieXRlIGhhbmRsaW5nIG9mIHJhdyBjaGFyYWN0ZXIgZGF0YSB3b3JrcyBvdXQgb2theS5cbiAgICAgICAgc2FmZUxocyA9IHNhZmVMaHMubm9ybWFsaXplKFwiTkZEXCIpO1xuICAgICAgICBzYWZlUmhzID0gc2FmZVJocy5ub3JtYWxpemUoXCJORkRcIik7XG4gICAgICAgIGlmIChjb2xsYXRvcilcbiAgICAgICAgICAgIGNvbXBhcmUgPSBjb2xsYXRvci5jb21wYXJlKHNhZmVMaHMsIHNhZmVSaHMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb21wYXJlID0gc2FmZUxocy50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoc2FmZVJocy50b0xvd2VyQ2FzZSgpID8/IFwiXCIpO1xuICAgICAgICByZXR1cm4gY29tcGFyZTtcbiAgICB9KTtcbiAgICBjb25zdCBpbnNlcnRpbmdDb21wYXJhdG9yID0gdXNlU3RhYmxlQ2FsbGJhY2soKGxocywgcmhzKSA9PiB7XG4gICAgICAgIGxldCBjb21wYXJlO1xuICAgICAgICBpZiAodHlwZW9mIGxocyA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgcmhzLnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJhdG9yU2hhcmVkKGxocywgcmhzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaHMgLSByaHM7XG4gICAgfSk7XG4gICAgY29uc3QgdHlwZWFoZWFkQ29tcGFyYXRvciA9IHVzZVN0YWJsZUNhbGxiYWNrKChsaHMsIHJocykgPT4ge1xuICAgICAgICBsZXQgY29tcGFyZTtcbiAgICAgICAgaWYgKHR5cGVvZiBsaHMgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHJocy50ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvLyBEdXJpbmcgdHlwZWFoZWFkLCBhbGwgc3RyaW5ncyBsb25nZXIgdGhhbiBvdXJzIHNob3VsZCBiZSB0cnVuY2F0ZWRcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhleSdyZSBhbGwgY29uc2lkZXJlZCBlcXVhbGx5IGJ5IHRoYXQgcG9pbnQuXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyYXRvclNoYXJlZChsaHMsIHJocy50ZXh0LnN1YnN0cmluZygwLCBsaHMubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxocyAtIHJocztcbiAgICB9KTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25TdGFydCA9IChlKSA9PiB7IHNldEltZUFjdGl2ZSh0cnVlKTsgfTtcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvbkVuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihlLmRhdGEpO1xuICAgICAgICAgICAgc2V0SW1lQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZUFjdGl2ZSA9IGdldEltZUFjdGl2ZSgpO1xuICAgICAgICAgICAgbGV0IGtleSA9IGUua2V5O1xuICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSAmJiBlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IHNwbGl0IFVURi0xNiBzdXJyb2dhdGVzLlxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlYWhlYWQodCA9PiB0ID09PSBudWxsID8gbnVsbCA6IFsuLi50XS5yZXZlcnNlKCkuc2xpY2UoMSkucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBrZXkgcHJvcGVydHkgcmVwcmVzZW50cyB0aGUgdHlwZWQgY2hhcmFjdGVyIE9SIHRoZSBcIm5hbWVkIGtleSBhdHRyaWJ1dGVcIiBvZiB0aGUga2V5IHByZXNzZWQuXG4gICAgICAgICAgICAvLyBUaGVyZSdzIG5vIGRlZmluaXRlIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlLCBidXQgZm9yIGFsbCBpbnRlbnRzIGFuZCBwdXJwb3Nlc1xuICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG5vIG9uZS1jaGFyYWN0ZXIgbmFtZXMsIGFuZCB0aGVyZSBhcmUgbm8gbm9uLUFTQ0lJLWFscGhhIG5hbWVzLlxuICAgICAgICAgICAgLy8gVGh1cywgYW55IG9uZS1jaGFyYWN0ZXIgb3Igbm9uLUFTQ0lJIHZhbHVlIGZvciBga2V5YCBpcyAqYWxtb3N0IGNlcnRhaW5seSogYSB0eXBlZCBjaGFyYWN0ZXIuXG4gICAgICAgICAgICBjb25zdCBpc0NoYXJhY3RlcktleSA9IChrZXkubGVuZ3RoID09PSAxIHx8ICEvXltBLVphLXpdLy50ZXN0KGtleSkpO1xuICAgICAgICAgICAgaWYgKGlzQ2hhcmFjdGVyS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcIiBcIiAmJiAoZ2V0Q3VycmVudFR5cGVhaGVhZCgpID8/IFwiXCIpLnRyaW0oKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBiZWNhdXNlIGEgc3BhY2ViYXIgY2FuJ3QgZXZlciBcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhdGUgYSB0eXBlYWhlYWQsIG9ubHkgY29udGludWUgb25lLlxuICAgICAgICAgICAgICAgICAgICAvLyAoU3BlY2lmaWNhbGx5LCBsZXQgdGhlIGV2ZW50IGNvbnRpbnVlIHByb3BhZ2F0aW9uIGluIHRoaXMgY2FzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogV29uJ3QgYmUgdHJ1ZSBmb3IgdGhlIGZpcnN0IGtleWRvd25cbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gYmVmb3JlIHVzZUxheW91dEVmZmVjdCBpcyBjYWxsZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWN0dWFsbHkgYXBwbHkgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25Db21wb3NpdGlvblN0YXJ0LCBvbkNvbXBvc2l0aW9uRW5kLCB9LCBwcm9wcyk7XG4gICAgfSwgW10pO1xuICAgIC8vIEhhbmRsZSBjaGFuZ2VzIGluIHR5cGVhaGVhZCB0aGF0IGNhdXNlIGNoYW5nZXMgdG8gdGhlIHRhYmJhYmxlIGluZGV4XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlYWhlYWQgJiYgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNvcnRlZFR5cGVhaGVhZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgdHlwZWFoZWFkQ29tcGFyYXRvcik7XG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHVzZXIgaGFzIHR5cGVkIGFuIGVudHJ5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIC8vIChvciBtb3JlIHNwZWNpZmljYWxseSBcImZvciB3aGljaCB0aGVyZSBpcyBubyBlbnRyeSB0aGF0IHN0YXJ0cyB3aXRoIHRoYXQgaW5wdXRcIilcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgIFdlIGtub3cgcm91Z2hseSB3aGVyZSwgaW4gdGhlIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzLCBvdXIgbmV4dCB0eXBlYWhlYWQgbG9jYXRpb24gaXMuXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cbiAgICAgICAgICAgICAgICAgIFRvIGNvbnZlcnQgb3VyIHNvcnRlZCBpbmRleCB0byB0aGUgdW5zb3J0ZWQgaW5kZXggd2UgbmVlZCwgd2UgaGF2ZSB0byBmaW5kIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCB0aGF0IG1hdGNoZXMgdXMgKmFuZCogKGlmIGFueSBzdWNoIGV4aXN0KSBpcyAqYWZ0ZXIqIG91ciBjdXJyZW50IHNlbGVjdGlvbi5cblxuICAgICAgICAgICAgICAgICAgSW4gb3RoZXIgd29yZHMsIHRoZSBvbmx5IHdheSB0eXBlYWhlYWQgbW92ZXMgYmFja3dhcmRzIHJlbGF0aXZlIHRvIG91ciBjdXJyZW50XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbiBpcyBpZiB0aGUgb25seSBvdGhlciBvcHRpb24gaXMgYmVoaW5kIHVzLlxuXG4gICAgICAgICAgICAgICAgICBJdCdzIG5vdCBzcGVjaWZpZWQgaW4gV0FJLUFSSUEgd2hhdCB0byBkbyBpbiB0aGF0IGNhc2UuICBJIHN1cHBvc2Ugd3JhcCBiYWNrIHRvIHRoZSBzdGFydD9cbiAgICAgICAgICAgICAgICAgIFRob3VnaCB0aGVyZSdzIGFsc28gYSBjYXNlIGZvciBqdXN0IGdvaW5nIHVwd2FyZHMgdG8gdGhlIG5lYXJlc3QgdG8gcHJldmVudCBqdW1waW5lc3MuXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxuICAgICAgICAgICAgICAgICAgSSBkdW5uby4gR29pbmcgYmFjayB0byB0aGUgc3RhcnQgaXMgdGhlIHNpbXBsaXN0IHRob3VnaC5cblxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIHNjYW4gYmFja3dhcmRzIGFuZCBmb3J3YXJkcyB0aHJvdWdoIGFsbCBhZGphY2VudCBlbnRyaWVzIHRoYXQgYWxzbyBjb21wYXJlIGVxdWFsbHkgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgd2UgY2FuIGZpbmQgdGhlIG9uZSB3aG9zZSBgdW5zb3J0ZWRJbmRleGAgaXMgdGhlIGxvd2VzdCBhbW9uZ3N0IGFsbCBvdGhlciBlcXVhbCBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxuXG4gICAgICAgICAgICAgICAgICBUT0RPOiBUaGUgYmluYXJ5IHNlYXJjaCBzdGFydHMgdGhpcyBvZmYgd2l0aCBhIHNvbGlkIE8obG9nIG4pLCBidXQgb25lLWNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcbiAgICAgICAgICAgICAgICAgIE8obipsb2cgbikuIFRoaXMgaXMgYW5ub3lpbmcgYnV0IHByb2JhYmx5IG5vdCBlYXNpbHkgc29sdmFibGU/IFRoZXJlIGNvdWxkIGJlIGFuXG4gICAgICAgICAgICAgICAgICBleGNlcHRpb24gZm9yIG9uZS1jaGFyYWN0ZXIgc3RyaW5ncywgYnV0IHRoYXQncyBqdXN0IGtpY2tpbmcgdGhlIGNhbiBkb3duXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGFyZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGNhbmRpZGF0ZXMnIHBvc2l0aW9ucyBpbiBib3RoIG91ciBzb3J0ZWQgYXJyYXkgYW5kIHRoZSB1bnNvcnRlZCBET00uXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIHR3byBhcmUgb25seSBzZXQgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIGFoZWFkIG9mIHVzLCBidXQgdGhlIHByaW5jaXBsZSdzIHRoZSBzYW1lIG90aGVyd2lzZVxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUJlc3RGaXQgPSAodSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4QWxsID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0KSAmJiB1ID4gKGdldEluZGV4KCkgPz8gLUluZmluaXR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwICYmIHR5cGVhaGVhZENvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJlc3RGaXQoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgdHlwZWFoZWFkQ29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhOZXh0XS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhBbGxdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRUeXBlYWhlYWRdKTtcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyB0ZXh0LCAuLi5pIH0pID0+IHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGVyZSB0byBpbnNlcnQgdGhpcyBpdGVtLlxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgYWxsIGluZGV4IHZhbHVlcyBzaG91bGQgYmUgdW5pcXVlLCB0aGUgcmV0dXJuZWQgc29ydGVkSW5kZXhcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIHJlZmVyIHRvIGEgbmV3IGxvY2F0aW9uIChpLmUuIGJlIG5lZ2F0aXZlKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBpbnNlcnRpbmdDb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA8IDAgfHwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W3NvcnRlZEluZGV4XS50ZXh0ID09IHRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZSgtc29ydGVkSW5kZXggLSAxLCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdW5tb3VudGluZywgZmluZCB3aGVyZSB3ZSB3ZXJlIGFuZCByZW1vdmUgb3Vyc2VsdmVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBBZ2Fpbiwgd2Ugc2hvdWxkIGFsd2F5cyBmaW5kIG91cnNlbHZlcyBiZWNhdXNlIHRoZXJlIHNob3VsZCBiZSBubyBkdXBsaWNhdGUgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgdW5pcXVlLlxuICAgICAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBpbnNlcnRpbmdDb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPj0gMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0ZXh0XSk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLFxuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgfTtcbn1cbi8qKlxuICogWW91ciB1c3VhbCBiaW5hcnkgc2VhcmNoIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEl0J3MgdXNlZCBoZXJlIHRvIHF1aWNrbHkgZmluZCBhIGdvb2Qgc3BvdCB0byBzdGFydCBzZWFyY2hpbmcgZm9yIG91ciBuZXh0IHR5cGVhaGVhZCBjYW5kaWRhdGUuXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaCB0aHJvdWdoXG4gKiBAcGFyYW0gd2FudGVkIFRoZSB2YWx1ZSB5b3UnZCBsaWtlIHRvIGZpbmRcbiAqIEBwYXJhbSBjb21wYXJhdG9yIENvbXBhcmVzIGB3YW50ZWRgIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgaW4gYGFycmF5YFxuICogQHJldHVybnMgQSBub24tbmVnYXRpdmUgdmFsdWUgaWYgYHdhbnRlZGAgd2FzIGZvdW5kLCBhbmQgYSBuZWdhdGl2ZSBudW1iZXIgaWYgbm90LlxuICogVGhlIGFic29sdXRlIHZhbHVlIG9mIHRoaXMgbnVtYmVyLCBtaW51cyBvbmUsIGlzIHdoZXJlIGB3YW50ZWRgICp3b3VsZCogYmUgZm91bmQgaWYgaXQgKndhcyogaW4gYGFycmF5YFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCB3YW50ZWQsIGNvbXBhcmF0b3IpIHtcbiAgICB2YXIgZmlyc3RJbmRleCA9IDA7XG4gICAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGZpcnN0SW5kZXggPD0gbGFzdEluZGV4KSB7XG4gICAgICAgIHZhciB0ZXN0SW5kZXggPSAobGFzdEluZGV4ICsgZmlyc3RJbmRleCkgPj4gMTtcbiAgICAgICAgdmFyIGNvbXBhcmlzb25SZXN1bHQgPSBjb21wYXJhdG9yKHdhbnRlZCwgYXJyYXlbdGVzdEluZGV4XSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uUmVzdWx0ID4gMCkge1xuICAgICAgICAgICAgZmlyc3RJbmRleCA9IHRlc3RJbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyaXNvblJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHRlc3RJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtZmlyc3RJbmRleCAtIDE7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cbiAqIGNoaWxkIGNvbXBvbmVudHMgb25jZSB0aGV5IGhhdmUgcmVuZGVyZWQuXG4gKlxuICogVGhpcyBob29rIGlzIHNsaWdodGx5IG1vcmUgY29tcGxpY2F0ZWQgaW4gdGhhdCBpdCByZXR1cm5zIGJvdGggYVxuICogcHJvcC1tb2RpZnlpbmcgaG9vaywgYnV0IGFsc28gYSBob29rIHRoYXQgZWFjaCBjaGlsZCB3aWxsIG5lZWRcbiAqIHRvIHVzZTogYHVzZU1hbmFnZWRDaGlsZGAuICBJdCdzIHN0YWJsZSBhY3Jvc3MgcmVuZGVycywgc28ganVzdFxuICogdG9zcyBpdCBpbnRvIGEgYENvbnRleHRgIHNvIHRoZSBjaGlsZHJlbiBjYW4gaGF2ZSBhY2Nlc3MgdG8gaXQuXG4gKiBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyB0aGUgY2hpbGQgd2l0aCB0aGUgcGFyZW50IGFuZCBwcm92aWRlc1xuICogaXQgd2l0aCBhbnkgcmVxdWVzdGVkIGluZm9ybWF0aW9uLCBidXQgZG9lc24ndCBkbyBhbnl0aGluZyBlbHNlXG4gKiB1bnRpbCBpdCB1bm1vdW50cyBhbmQgcmV0cmFjdHMgdGhhdCBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkTWFuYWdlcigpIHtcbiAgICAvLyBUaGlzIGlzIGJsaW5kbHkgdXBkYXRlZCBhbnkgdGltZSBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50cyBpdHNlbGYuXG4gICAgLy8gVXNlZCB0byBtYWtlIHN1cmUgdGhhdCBhbnkgdGltZSB0aGUgYXJyYXkgb2YgbWFuYWdlZCBjaGlsZHJlbiB1cGRhdGVzLFxuICAgIC8vIHdlIGFsc28gcmUtcmVuZGVyLlxuICAgIGNvbnN0IFtjaGlsZFVwZGF0ZUluZGV4LCBzZXRDaGlsZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuTW91bnRlZCwgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuVW5vdW50ZWQsIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgZ2V0VG90YWxDaGlsZHJlblVub3VudGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCA9IHRvdGFsQ2hpbGRyZW5Nb3VudGVkIC0gdG90YWxDaGlsZHJlblVub3VudGVkO1xuICAgIGNvbnN0IG1hbmFnZWRDaGlsZHJlbiA9IHVzZVJlZihbXSAvKiogVE9ETzogQW55IHByb2JsZW1zIGNhdXNlZCBieSB1c2luZyBhbiBhcnJheSB3aGVuIGl0IHNob3VsZCBiZSBhbiBvYmplY3Q/ICovKTtcbiAgICBjb25zdCBtb3VudGVkQ2hpbGRyZW4gPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IG1vdW50T3JkZXIgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBpbmRpY2VzQnlFbGVtZW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gICAgY29uc3QgZGVsZXRlZEluZGljZXMgPSB1c2VSZWYobmV3IFNldCgpKTtcbiAgICAvLyBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgaW5kaWNlcyB0aGF0IGhhdmUgXCJvdmVyLW1vdW50ZWRcIiBhbmQgYnkgaG93IG11Y2guXG4gICAgLy8gV2UgbmVlZCB0aGlzIHNvIHRoYXQgd2UgZG9uJ3QgZXJhc2Ugc2F2ZWQgaW5mb3JtYXRpb24gd2hlbiBhIGNvbXBvbmVudFxuICAgIC8vIFwib3Zlcm1vdW50c1wiIG92ZXIgYW5vdGhlciB3aGljaCB0aGVuLCBjb3JyZWN0bHksIHN3aXRjaGVzICppdHNlbGYqIHRvIHNvbWV0aGluZyBlbHNlLlxuICAgIC8vIEluIGdlbmVyYWwsIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIHdoZW4gY29tcG9uZW50cyBhcmUgc3dhcHBpbmcgYmV0d2VlbiBpbmRpY2VzLlxuICAgIC8vIEJ5IHRoZSB0aW1lIHRoZXkncmUgZG9uZSwgdGhpcyBtYXAgc2hvdWxkIGJlIGFsbCAwcyBhZ2FpbiwgYXQgd2hpY2ggcG9pbnRcbiAgICAvLyBpdCdzIG9rYXkgdG8gYWN0dWFsbHkgcnVuIHRoZSB1bm1vdW50IGNvZGUuXG4gICAgLy8gXG4gICAgLy8gVE9ETzogdGhyb3cgYSBjb25zb2xlLmFzc2VydCBzb21ld2hlcmUgdG8gbWFrZSB1cCBmb3IgdGhlIGxvc3QgXG4gICAgLy8gXCJhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gb3ZlcndyaXRlIHRoaXMgY2hpbGQncyBpbmRleCFcIiBhc3NlcnRpb24uXG4gICAgLy8gTmFtZWx5LCBpcyB0aGlzIG1hcCBhbGwgMHMgd2hlbiB0aGUgcGFyZW50IGVsZW1lbnQgcmUtcmVuZGVycz8gXG4gICAgLy8gUHJvYmFibHkgbm90IGJlY2F1c2Ugb2Ygc2V0Q2hpbGRVcGRhdGVJbmRleFxuICAgIGNvbnN0IG92ZXJtb3VudENvdW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gICAgY29uc3QgZ2V0TW91bnRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyByZXR1cm4gbW91bnRPcmRlci5jdXJyZW50LmdldChpbmRleCk7IH0sIFtdKTtcbiAgICBjb25zdCB1c2VNYW5hZ2VkQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuc2V0KGVsZW1lbnQsIGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZEluZGljZXMuY3VycmVudC5hZGQoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmZvLmluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtdKSB9KTtcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKCk7XG4gICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIGluZGV4KTtcbiAgICAgICAgICAgIG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50W2luZGV4XSA9IGluZm87XG4gICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCh0ID0+ICsrdCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5kZWxldGUoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQodCA9PiArK3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW2luZm8uaW5kZXhdKTtcbiAgICAgICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZSBnZW5lcmFsbHkuXG4gICAgICAgIC8vICpEb24ndCByZS1yZW5kZXIqLCBvdGhlcndpc2Ugd2UnZCBiZSBzdHVjayBpbiBhblxuICAgICAgICAvLyBpbmZpbml0ZSBsb29wIGV2ZXJ5IHRpbWUgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIGlzIHBhc3NlZC5cbiAgICAgICAgLy8gSXQgY29tZXMgaW4gZnJvbSB0aGUgcHJvcHMgc28gdGhlIGNoaWxkIHdhcyBhbHJlYWR5IHVwZGF0ZWQgYnkgaXQgLS1cbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IHRvIHJlLXJlbmRlciBldmVyeSBzaW5nbGUgY2hpbGQgYW55IHRpbWVcbiAgICAgICAgLy8gXCJvbkNsaWNrXCIgdXBkYXRlcyBvciB3aGF0ZXZlci4gIFRoZSByZWxldmFudCBjaGlsZCBhbHJlYWR5IGtub3dzLFxuICAgICAgICAvLyBhbmQgdGhhdCdzIHdoYXQgbWF0dGVycy5cbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoKV0pO1xuICAgICAgICByZXR1cm4geyBnZXRFbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1hbmFnZWRDaGlsZCxcbiAgICAgICAgY2hpbGRDb3VudDogY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkLFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50LFxuICAgICAgICBtb3VudGVkQ2hpbGRyZW46IG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50LFxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50OiBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQsXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Nb3VudGVkLFxuICAgICAgICB0b3RhbENoaWxkcmVuVW5vdW50ZWQsXG4gICAgICAgIGdldE1vdW50SW5kZXgsXG4gICAgICAgIGRlbGV0ZWRJbmRpY2VzOiBkZWxldGVkSW5kaWNlcy5jdXJyZW50XG4gICAgfTtcbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZXR0aW5nIGNoaWxkcmVuIGtub3cgd2hlbiB0aGV5IGFyZSBvciBhcmUgbm90IHRoZVxuICogY3VycmVudCBzZWxlY3RlZC9leHBhbmRlZC9mb2N1c2VkL3doYXRldmVyIGNoaWxkLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB3aGVuIGNoaWxkcmVuIGFyZSBtb3VudGVkICYgdW5tb3VudGVkIGFuZCBzdWNoLlxuICpcbiAqIFdoaWxlIGl0IHdpbGwgYmUgY2FsbGVkIG9uY2UgZm9yIGV2ZXJ5IGNoaWxkIG9uIG1vdW50LCBhZnRlciB0aGF0IHNldEZsYWdcbiAqIGlzIGd1YXJhbnRlZWQgdG8gb25seSBiZSBjYWxsZWQgb25jZSBvbiBhY3RpdmF0aW9uIGFuZCBvbmNlIG9uIGRlYWN0aXZhdGlvbixcbiAqIHNvIGl0J3MgZ2VuZXJhbGx5IHNhZmUgdG8gcHV0IHNpZGUgZWZmZWN0cyBpbnNpZGUgaWYgbmVjZXNzYXJ5LlxuICogSXQncyBhbHNvIHNhZmUgdG8gbWFrZSBpdCBub24tc3RhYmxlLlxuICpcbiAqIEBwYXJhbSBhY3RpdmF0ZWRJbmRleCBXaGF0IGluZGV4IHRoZSBjdXJyZW50IHNlbGVjdGVkIChldGMuKSBjaGlsZCBpc1xuICogQHBhcmFtIGxlbmd0aCBIb3cgbWFueSBjaGlsZHJlbiBleGlzdCAoYXMgbWFuYWdlZENoaWxkcmVuLmxlbmd0aClcbiAqIEBwYXJhbSBzZXRGbGFnIEEgZnVuY3Rpb24gdGhhdCBwcm9iYWJseSBsb29rcyBsaWtlIChpLCBmbGFnKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0QWN0aXZlKGZsYWcpXG4gKiBAcGFyYW0gdXNlRWZmZWN0IFdoaWNoIHZlcnNpb24gb2YgdXNlRWZmZWN0IHRvIHVzZS4gRGVmYXVsdCBpcyBgdXNlTGF5b3V0RWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4LCBjbG9zZXN0Rml0LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldENoaWxkRmxhZywgZ2V0Q2hpbGRGbGFnLCB1c2VFZmZlY3QgfSkge1xuICAgIHVzZUVmZmVjdCA/Pz0gdXNlTGF5b3V0RWZmZWN0O1xuICAgIGlmIChjbG9zZXN0Rml0KVxuICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiB8fCBhY3RpdmF0ZWRJbmRleCA9PSBudWxsKTtcbiAgICAvLyBXaGVuZXZlciB3ZSByZS1yZW5kZXIsIG1ha2Ugc3VyZSB0aGF0IGFueSBjaGlsZHJlbiB0aGF0IGhhdmUgbW91bnRlZFxuICAgIC8vIGhhdmUgdGhlaXIgZmxhZ3MgcHJvcGVybHkgc2V0LiAgV2Uga25vdyBpdCdzIHVuc2V0IGlmIGl0IHdhcyBudWxsLFxuICAgIC8vIGluIHdoaWNoIGNhc2Ugd2UganVzdCBzZXQgaXQgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICAvL1xuICAgIC8vIEFuZCwgSSBtZWFuLCBhcyBsb25nIGFzIHdlJ3JlIGFscmVhZHkgaXRlcmF0aW5nIHRocm91Z2ggZXZlcnkgY2hpbGRcbiAgICAvLyBvbiBldmVyeSByZW5kZXIgdG8gY2hlY2sgZm9yIG5ld2x5IG1vdW50ZWQgY2hpbGRyZW4sIG1pZ2h0IGFzIHdlbGxcbiAgICAvLyBqdXN0IGhhbmRsZSBjaGFuZ2VkIGluIHRoZSBhY3RpdmF0ZWRJbmRleCBoZXJlIHRvby5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBXZSBoYXZlIGxpbWl0ZWQgaW5mb3JtYXRpb24gYWJvdXQgd2hlbiBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50c1xuICAgICAgICAvLyBhbmQgc28gd2UgZG9uJ3Qga25vdyB3aGVyZSB0byBsb29rIGZvciBhbnkgbnVsbCBlbnRyaWVzIHRoYXQgbmVlZCBjaGFuZ2luZy5cbiAgICAgICAgLy8gV2Uga25vdyB3aGVuIGFjdGl2YXRlZEluZGV4IGNoYW5nZXMgYW5kIHdoYXQgaXQgd2FzLCBidXQgbm90IG11Y2ggZWxzZS5cbiAgICAgICAgLy8gTG9vcGluZyBvdmVyIGV2ZXJ5IGNoaWxkICp3b3JrcyosIGFuZCBpdCdzIG5vdCBhbiBleHBlbnNpdmUgbG9vcCBieSBhbnkgbWVhbnMsXG4gICAgICAgIC8vIGJ1dCwgbGlrZSwgZXVnaC5cbiAgICAgICAgLy8gQWxzbywgYmVmb3JlIHdlIGRvIGFueXRoaW5nLCBzZWUgaWYgd2UgbmVlZCB0byBcImNvcnJlY3RcIiBhY3RpdmF0ZWRJbmRleC5cbiAgICAgICAgLy8gSXQgY291bGQgYmUgcG9pbnRpbmcgdG8gYSBjaGlsZCB0aGF0IGRvZXNuJ3QgZXhpc3QsIGFuZCBpZiBjbG9zZXN0Rml0IGlzIGdpdmVuLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGFkanVzdCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBhIHZhbGlkIGNoaWxkLlxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2YXRlZEluZGV4ID09IFwibnVtYmVyXCIgJiYgQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pICYmIG1hbmFnZWRDaGlsZHJlblthY3RpdmF0ZWRJbmRleF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gT2ggZGVhci4gQXJlIHdlIGFjdGl2ZWx5IGNvcnJlY3RpbmcgdGhpcz9cbiAgICAgICAgICAgIGlmIChjbG9zZXN0Rml0KSB7XG4gICAgICAgICAgICAgICAgLy8gT2ggZGVhci5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggdXAgYW5kIGRvd24gdGhlIGxpc3Qgb2YgY2hpbGRyZW4gZm9yIGFueSB0aGF0IGFjdHVhbGx5IGV4aXN0LlxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hIaWdoID0gYWN0aXZhdGVkSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hMb3cgPSBhY3RpdmF0ZWRJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSA9PSBudWxsKSB8fCAoc2VhcmNoSGlnaCA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaEhpZ2hdID09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICsrc2VhcmNoSGlnaDtcbiAgICAgICAgICAgICAgICAgICAgLS1zZWFyY2hMb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoTG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA9IHNlYXJjaEhpZ2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIGRvbmUgdGhhdCwgaWYgYW55IHZhbGlkIGNoaWxkcmVuIGV4aXN0LCB3ZSd2ZSByZXNldCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBpdCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIC8vIE5vdyB3ZSdsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGZvciBsb29wIHNldCBhbmQgdW5zZXQgb3VyIGZsYWdzIGJhc2VkIG9uIHRoaXMgXCJjb3JyZWN0ZWRcIiB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGNvcnJlY3QgaXQgb3Igc2F2ZSBpdCBhbnl3aGVyZSBiZWNhdXNlIHdlJ2QgdmVyeSBtdWNoIGxpa2UgdG8gcmV0dXJuIHRvIGl0XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNoaWxkIHJlbW91bnRzIGl0c2VsZi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobWFuYWdlZENoaWxkcmVuKS5mb3JFYWNoKChbaSwgaW5mb10pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkQmVTZXQgPSAoaSA9PSBhY3RpdmF0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKGdldENoaWxkRmxhZyhpKSAhPSBzaG91bGRCZVNldCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZEZsYWcoaSwgc2hvdWxkQmVTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hpbGQtbWFuYWdlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKiBJbXBsZW1lbnRzIGEgcm92aW5nIHRhYmluZGV4IHN5c3RlbSB3aGVyZSBvbmx5IG9uZSBcImZvY3VzYWJsZVwiXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXG4gKiBvZiB0aG9zZSBlbGVtZW50cyByZWNlaXZlcyBmb2N1cyBpcyBkZXRlcm1pbmVkIGJ5IHlvdSwgYnV0IGl0J3NcbiAqIHJlY29tbWVuZGVkIHRvIG9mZmxvYWQgdGhhdCBsb2dpYyB0aGVuIHRvIGFub3RoZXIgaG9vaywgbGlrZVxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXG4gKiBlbGVtZW50IHdpdGggdGhlIGFycm93IGtleXMsIGB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uYCwgd2hpY2hcbiAqIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0eXBlYWhlYWQsIG9yXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgY2hpbGQgaG9vayByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgdXNlZFxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXG4gKiBwcm9wLW1vZGlmeWluZyBob29rICp0aGF0KiBob29rIHJldHVybnMgc2hvdWxkIHRoZW4gYmUgdXNlZFxuICogb24gdGhlIGNoaWxkJ3MgZWxlbWVudCwgYXMgd2VsbCBhcyBhbnkgb3RoZXIgZWxlbWVudHMgeW91J2QgbGlrZVxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxuICpcbiAqIGBzaG91bGRGb2N1c09uQ2hhbmdlYCBzaG91bGQgcmV0dXJuIHRydWUgaWYgZm9jdXMgaXNcbiAqIGNvbnRhaW5lZCB3aXRoaW4gd2hhdGV2ZXIgZWxlbWVudCBjb250YWlucyB0aGUgcm92aW5nIHRhYiBpbmRleC5cbiAqIEdlbmVyYWxseSBhcyBzaW1wbGUgYXMgdGhlIGZvbGxvd2luZzpcbiAqIGBgYFxuICogY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXM8UGFyZW50RWxlbWVudD4oeyBzZXRGb2N1c2VkSW5uZXIgfSk7XG4gKiBjb25zdCBmb2N1c09uQ2hhbmdlID0gKGZvY3VzZWRJbm5lciAhPSBmYWxzZSk7XG4gKiBgYGBcbiAqIEl0J3Mgbm90IGluY2x1ZGVkIGhlcmUgYmVjYXVzZSBgdXNlUm92aW5nVGFiSW5kZXhgIGRvZXNuJ3Qga25vd1xuICogYW55dGhpbmcgYWJvdXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LCBvbmx5IGNoaWxkcmVuIGVsZW1lbnRzLlxuICogQW5kIGp1c3QgYXMgd2VsbCEgQ2hpbGRyZW4gc2hvdWxkIGJlIGFsbG93ZWQgYXQgdGhlIHJvb3QsXG4gKiByZWdhcmRsZXNzIG9mIGlmIGl0J3MgdGhlIHdob2xlIGFwcCBvciBqdXN0IGEgZ2l2ZW4gY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlOiBmb2MsIHRhYmJhYmxlSW5kZXggfSkge1xuICAgIGNvbnN0IGdldFNob3VsZEZvY3VzT25DaGFuZ2UgPSB1c2VTdGFibGVHZXR0ZXIoZm9jKTtcbiAgICBjb25zdCBnZXRUYWJiYWJsZUluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHRhYmJhYmxlSW5kZXgpO1xuICAgIGNvbnN0IHByZXZUYWJiYWJsZSA9IHVzZVJlZigtSW5maW5pdHkpO1xuICAgIC8vIENhbGwgdGhlIGhvb2sgdGhhdCBhbGxvd3MgdXMgdG8gY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHdobyBwcm92aWRlIGl0XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGNoaWxkQ291bnQsIHVzZU1hbmFnZWRDaGlsZCwgaW5kaWNlc0J5RWxlbWVudCwgLi4ucmVzdCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsXG4gICAgLy8gbm90aWZ5IHRoZSBwcmV2aW91cyBjaGlsZCB0aGF0IGl0J3Mgbm8gbG9uZ2VyIHRhYmJhYmxlLFxuICAgIC8vIGFuZCBub3RpZnkgdGhlIG5leHQgY2hpbGQgdGhhdCBpcyBhbGxvd2VkIHRvIGJlIHRhYmJlZCB0by5cbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogdGFiYmFibGVJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBjbG9zZXN0Rml0OiB0cnVlLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpbmRleCwgdGFiYmFibGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LnNldFRhYmJhYmxlKHRhYmJhYmxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaW5kZXgpID0+IChtYW5hZ2VkQ2hpbGRyZW5baW5kZXhdPy5nZXRUYWJiYWJsZSgpID8/IG51bGwpXG4gICAgfSk7XG4gICAgY29uc3QgZm9jdXNTZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodGFiYmFibGVJbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUpO1xuICAgIH0sIFt0YWJiYWJsZUluZGV4XSk7XG4gICAgY29uc3QgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtycmFmSW5kZXgsIHNldFJyYWZJbmRleF0gPSB1c2VTdGF0ZSgxKTtcbiAgICAgICAgY29uc3QgcmVyZW5kZXJBbmRGb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0UnJhZkluZGV4KGkgPT4gKytpKTsgfSwgW10pO1xuICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlLCBnZXRUYWJiYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgbGV0IG5ld0luZm8gPSB7XG4gICAgICAgICAgICAuLi5pbmZvLFxuICAgICAgICAgICAgcmVyZW5kZXJBbmRGb2N1cyxcbiAgICAgICAgICAgIHNldFRhYmJhYmxlOiB1c2VDYWxsYmFjaygodGFiYmFibGUpID0+IHsgc2V0VGFiYmFibGUodGFiYmFibGUpOyB9LCBbXSksXG4gICAgICAgICAgICBnZXRUYWJiYWJsZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKHRhYmJhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkRm9jdXNPbkNoYW5nZSA9IGdldFNob3VsZEZvY3VzT25DaGFuZ2UoKSgpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRGb2N1c09uQ2hhbmdlICYmIFwiZm9jdXNcIiBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlLCBycmFmSW5kZXhdKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4IH0sIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyh7IHRhYkluZGV4IH0pLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLFxuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXG4gICAgICAgICAgICB0YWJiYWJsZVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VNYW5hZ2VkQ2hpbGRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLFxuICAgICAgICBjaGlsZENvdW50LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXG4gICAgICAgIGZvY3VzQ3VycmVudDogdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZvciB3aGF0ZXZlciByZWFzb24sIHRoZSBwcmV2aW91c2x5IHRhYmJhYmxlIGNoaWxkXG4gICAgICAgICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIHRhYmJhYmxlIHdpdGhvdXQgdXMga25vd2luZyBhYm91dCBpdC5cbiAgICAgICAgICAgICAgICAvLyBNYXliZSBpdCB1bm1vdW50ZWQ/XG4gICAgICAgICAgICAgICAgLy8gRWl0aGVyIHdheSwgdHJ5IHRvIGZpbmQgdGhlIG5ld2x5LXNlbGVjdGVkIGNoaWxkLlxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGxldCBpID0gZ2V0VGFiYmFibGVJbmRleCgpID8/IDA7XG4gICAgICAgICAgICAgICAgbGV0IGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICArK2o7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW5bZ2V0VGFiYmFibGVJbmRleCgpID8/IDBdLmdldFRhYmJhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pLFxuICAgICAgICAuLi5yZXN0XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbiB9IGZyb20gXCIuL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJvdmluZ1RhYkluZGV4IH0gZnJvbSBcIi4vdXNlLXJvdmluZy10YWJpbmRleFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICpcbiAqIFRPRE86IFRoaXMgdGFibGUgd2FzIHNjcmFwcGVkIHdoZW4gdGhpcyB3YXMgY2hhbmdlZCB0byBqdXN0IGFjY2VwdCBhIGNvbGxhdG9yIGRpcmVjdGx5LFxuICogYnV0IGl0J3Mgbm90IGJhZCBmb3IgYSBjb2xsYXRpb24gY3Jhc2ggY291cnNlIGFuZCBJIG1pZ2h0IHVzZSBpdCBhZ2Fpbi5cbiAqIEV2ZW4ganVzdCBhcyBhIFwidGhpcyBpcyB3aHkgaXQncyBpbXBvcnRhbnQgYW5kIGdvb2QgdG8gdXNlIHRoZXNlIHRoaW5nc1wiIHRoaW5nLlxuICpcbiAqIHxMYW5nLnxUYXJnZXR8VXNlciBpbnB1dHxgYmFzZWB8YGFjY2VudGB8YGNhc2VgfGB2YXJpYW50YHxcbiAqIHwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfFxuICogfEVOfEhpfEhpfOKchXzinIV84pyFfOKchXxcbiAqIHxFTnxIaXzvvKjvvYl84pyFfOKchXzinIV84p2MfFxuICogfEVOfEhpfGhpfOKchXzinIV84p2MfOKdjHxcbiAqIHxFTnxIaXxIw6984pyFfOKdjHzinYx84p2MfFxuICogfEVOfEhpfEJ5ZXzinYx84p2MfOKdjHzinYx8XG4gKiB8REF8w6V8YWF84pyFfOKchXzinIV84p2MfFxuICogfERBfMOlfEFBfOKchXzinIV84p2MfOKdjHxcbiAqIHxEQXzDpXxBYXzinIV84pyFfOKdjHzinYx8XG4gKiB8RU58w6V8YWF84p2MfOKdjHzinYx84p2MfFxuICogfERBfMOlfGFBfOKdjHzinYx84p2MfOKdjHxcbiAqIHxFTnzDpXxhfOKchXzinIV84p2MfOKdjHxcbiAqIHxEQXzDpXxhfOKchXzinIV84p2MfOKdjHxcbiAqIHxKUHzvqqp8552AfOKchXzinIV84pyFfOKchXxcbiAqIHxKUHzjgqt87722fOKchXzinIV84pyFfOKchXxcbiAqIHxKUHzjgqt844GLfOKchXzinIV84pyFfOKdjHxcbiAqIHxKUHzjgqt844O1fOKchXzinIV84pyFfOKdjHxcbiAqIHxKUHzjgqt844uVfOKchXzinIV84p2MfOKdjHxcbiAqIHxKUHzjgqt844KsfOKchXzinYx84p2MfOKdjHxcbiAqIHxKUHzjgqt85YqbfOKdjHzinYx84p2MfOKdjHxcbiAqIHxaSHzntIV857qifOKdjHzinYx84p2MfOKdjHxcbiAqXG4gKlxuICogKE5vdGUgdG8gc2VsZjogQXQgc29tZSBwb2ludCwgdGhpcyBmaWxlIHdpbGwgcHJvYmFibHkgYmUgbm9ybWFsaXplZFxuICogYnkgc29tZWJvZHkgYW5kIO+qqiB3aWxsIHR1cm4gYmFjayBpbnRvIOedgC4pXG4gKlxuICovXG5jb25zdCBkdW1teSA9IG51bGw7XG47XG5mdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9XG4vKipcbiAqIEltcGxlbWVudHMgcHJvcGVyIGtleWJvYXJkIG5hdmlnYXRpb24gZm9yIGNvbXBvbmVudHMgbGlrZSBsaXN0Ym94ZXMsIGJ1dHRvbiBncm91cHMsIG1lbnVzLCBldGMuXG4gKlxuICogSW4gdGhlIGRvY3VtZW50IG9yZGVyLCB0aGVyZSB3aWxsIGJlIG9ubHkgb25lIFwiZm9jdXNlZFwiIG9yIFwidGFiYmFibGVcIiBlbGVtZW50LCBtYWtpbmcgaXQgYWN0IG1vcmUgbGlrZSBvbmUgY29tcGxldGUgdW5pdCBpbiBjb21wYXJpc29uIHRvIGV2ZXJ5dGhpbmcgYXJvdW5kIGl0LlxuICogTmF2aWdhdGluZyBmb3J3YXJkcy9iYWNrd2FyZHMgY2FuIGJlIGRvbmUgd2l0aCB0aGUgYXJyb3cga2V5cywgSG9tZS9FbmQga2V5cywgb3IgYW55IGFueSB0ZXh0IGZvciB0eXBlYWhlYWQgdG8gZm9jdXMgdGhlIG5leHQgaXRlbSB0aGF0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaXN0TmF2aWdhdGlvbih7IGluaXRpYWxJbmRleCwgc2hvdWxkRm9jdXNPbkNoYW5nZSwgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIgfSkge1xuICAgIGluZGV4TWFuZ2xlciA/Pz0gaWRlbnRpdHk7XG4gICAgaW5kZXhEZW1hbmdsZXIgPz89IGlkZW50aXR5O1xuICAgIGtleU5hdmlnYXRpb24gPz89IFwiZWl0aGVyXCI7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KGluZGV4TWFuZ2xlciwgaW5kZXhEZW1hbmdsZXIpO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XG4gICAgLy8gV2hhdCBpdCBpcywgYW5kIHdoZXRoZXIsIHdoZW4gd2UgcmVuZGVyIHRoaXMgY29tcG9uZW50IGFuZCBpdCdzIGNoYW5nZWQsIHRvIGFsc28gZm9jdXMgdGhlIGVsZW1lbnQgdGhhdCB3YXMgbWFkZSB0YWJiYWJsZS5cbiAgICBjb25zdCBbdGFiYmFibGVJbmRleCwgc2V0VGFiYmFibGVJbmRleCwgZ2V0VGFiYmFibGVJbmRleF0gPSB1c2VTdGF0ZShpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCA/IDAgOiBpbml0aWFsSW5kZXgpO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBpbmRpY2VzQnlFbGVtZW50LCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBmb2N1c0N1cnJlbnQsIC4uLnJlc3QgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHsgc2hvdWxkRm9jdXNPbkNoYW5nZSwgdGFiYmFibGVJbmRleCB9KTtcbiAgICAvKmNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpOiBudW1iZXIgfCBudWxsKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sKSBzZXRUYWJiYWJsZUluZGV4KGluZGV4TWFuZ2xlciEoMCkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaW5kZXhNYW5nbGVyIShtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIhKGluZGV4RGVtYW5nbGVyIShpID8/IDApIC0gMSkpIH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIhKGluZGV4RGVtYW5nbGVyIShpID8/IDApICsgMSkpIH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XG4qL1xuICAgIGNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpKSA9PiB7XG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaSA9PSBudWxsID8gbnVsbCA6IHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIDAsIGksIDEsIGluZGV4TWFuZ2xlciA/PyBpZGVudGl0eSwgaW5kZXhEZW1hbmdsZXIgPz8gaWRlbnRpdHkpKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIDAsIDAsIDEsIGluZGV4TWFuZ2xlciA/PyBpZGVudGl0eSwgaW5kZXhEZW1hbmdsZXIgPz8gaWRlbnRpdHkpKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgodHJ5TmF2aWdhdGVUb0luZGV4KG1hbmFnZWRDaGlsZHJlbiwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgLTEsIGluZGV4TWFuZ2xlciA/PyBpZGVudGl0eSwgaW5kZXhEZW1hbmdsZXIgPz8gaWRlbnRpdHkpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9QcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2hpbGRyZW4sIGMgPz8gMCwgKGMgPz8gMCkgLSAxLCAtMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChjID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cnlOYXZpZ2F0ZVRvSW5kZXgobWFuYWdlZENoaWxkcmVuLCBjID8/IDAsIChjID8/IDApICsgMSwgMSwgaW5kZXhNYW5nbGVyID8/IGlkZW50aXR5LCBpbmRleERlbWFuZ2xlciA/PyBpZGVudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBzZXRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xuICAgICAgICBzZXRUYWJiYWJsZUluZGV4KGluZGV4KTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgeyBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleDogZ2V0VGFiYmFibGVJbmRleCwgc2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQ6IDEwMDAgfSk7XG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb24oeyBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBrZXlOYXZpZ2F0aW9uLCBpbmRleDogZ2V0VGFiYmFibGVJbmRleCgpID8/IDAsIG1hbmFnZWRDaGlsZHJlbiwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0IH0pO1xuICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyh1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKTtcbiAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvblByb3BzLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHNdKTtcbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyAuLi5yZXN0IH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoaW5mbyk7XG4gICAgICAgIC8vY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkKGluZm8gYXMgSSk7XG4gICAgICAgIGNvbnN0IHsgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcywgdGFiYmFibGUgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQoaW5mbyk7XG4gICAgICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcygoKHsgb25DbGljazogcm92ZVRvU2VsZiwgaGlkZGVuOiBpbmZvLmhpZGRlbiB9KSkpLCBwcm9wcyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJvdmVUb1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTsgfSwgW10pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLFxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHM6IHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxuICAgICAgICAgICAgdGFiYmFibGVcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLFxuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblByb3BzLFxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxuICAgICAgICB0YWJiYWJsZUluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXG4gICAgICAgIG5hdmlnYXRlVG9JbmRleCxcbiAgICAgICAgbmF2aWdhdGVUb05leHQsXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxuICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QsXG4gICAgICAgIG5hdmlnYXRlVG9MYXN0LFxuICAgICAgICBmb2N1c0N1cnJlbnQsXG4gICAgICAgIC4uLnJlc3RcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyeU5hdmlnYXRlVG9JbmRleChtYW5hZ2VkQ2VsbHMsIGluaXRpYWwsIHRhcmdldCwgc2VhcmNoRGlyZWN0aW9uLCBpbmRleE1hbmdsZXIsIGluZGV4RGVtYW5nbGVyKSB7XG4gICAgZnVuY3Rpb24gaGVscGVyKCkge1xuICAgICAgICBpZiAoc2VhcmNoRGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCA+PSAwICYmIChtYW5hZ2VkQ2VsbHNbdGFyZ2V0XSA9PSBudWxsIHx8ICEhbWFuYWdlZENlbGxzW3RhcmdldF0/LmhpZGRlbikpXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKHRhcmdldCkgLSAxKTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPCAwID8gaW5pdGlhbCA6IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWFyY2hEaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgPCBtYW5hZ2VkQ2VsbHMubGVuZ3RoICYmIG1hbmFnZWRDZWxsc1t0YXJnZXRdID09IG51bGwgfHwgISFtYW5hZ2VkQ2VsbHNbdGFyZ2V0XT8uaGlkZGVuKVxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGluZGV4TWFuZ2xlcihpbmRleERlbWFuZ2xlcih0YXJnZXQpICsgMSk7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0ID49IG1hbmFnZWRDZWxscy5sZW5ndGggPyBpbml0aWFsIDogdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChoZWxwZXIoKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInByZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuO1xuY29uc3QgU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQmF0Y2hlZEFuaW1hdGlvbkZyYW1lcyh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcbiAgICBjb25zdCByZW1vdmVDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFjaykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5kZWxldGUoY2FsbGJhY2spOyB9LCBbXSk7XG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKGNvbnRleHRJbmZvLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgY29udGV4dEluZm8uY3VycmVudCA9IHsgYWRkQ2FsbGJhY2ssIHJlbW92ZUNhbGxiYWNrIH07XG4gICAgY29uc3QgYWxsQ2FsbGJhY2tzID0gdXNlUmVmKG51bGwpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gLTE7XG4gICAgICAgIGZ1bmN0aW9uIHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKG1zU2luY2VMYXN0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBbYmF0Y2hlZFJhZkNhbGxiYWNrLCB0YWddIG9mIGFsbENhbGxiYWNrcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYmF0Y2hlZFJhZkNhbGxiYWNrKG1zU2luY2VMYXN0LCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3goU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0SW5mby5jdXJyZW50LCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufVxuLyoqXG4gKiBUaGUgKG9wdGlvbmFsbHkgbm9uLXN0YWJsZSkgYGNhbGxiYWNrYCB5b3UgcHJvdmlkZSB3aWxsIHN0YXJ0IHJ1bm5pbmcgZXZlcnkgZnJhbWUgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gKlxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKlxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKHsgY2FsbGJhY2sgfSkge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyAoKCkgPT4geyB9KSk7XG4gICAgY29uc3QgaGFzQ2FsbGJhY2sgPSAoY2FsbGJhY2sgIT0gbnVsbCk7XG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBzdGFibGVDYWxsYmFjayhtcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQsIGhhc0NhbGxiYWNrXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYW5pbWF0aW9uLWZyYW1lLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlRHJhZ2dhYmxlKHsgZWZmZWN0QWxsb3dlZCwgZGF0YSwgZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0LCBkcmFnSW1hZ2VZT2Zmc2V0IH0pIHtcbiAgICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nLCBnZXREcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xhc3REcm9wRWZmZWN0LCBzZXRMYXN0RHJvcEVmZmVjdCwgZ2V0TGFzdERyb3BFZmZlY3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgdXNlRHJhZ2dhYmxlUHJvcHMgPSB1c2VDYWxsYmFjaygocCkgPT4ge1xuICAgICAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgICAgIGNvbnN0IG9uRHJhZ1N0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gKGVmZmVjdEFsbG93ZWQgPz8gXCJhbGxcIik7XG4gICAgICAgICAgICAgICAgaWYgKGRyYWdJbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCA/PyAwLCBkcmFnSW1hZ2VZT2Zmc2V0ID8/IDApO1xuICAgICAgICAgICAgICAgIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbWltZVR5cGUsIGRhdGFdIG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShtaW1lVHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbkRyYWdFbmQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdERyb3BFZmZlY3QoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0LFxuICAgICAgICAgICAgb25EcmFnRW5kLFxuICAgICAgICAgICAgcmVmXG4gICAgICAgIH0sIHApO1xuICAgIH0sIFtlZmZlY3RBbGxvd2VkLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQsIC4uLk9iamVjdC5lbnRyaWVzKGRhdGEpLmZsYXQoKV0pO1xuICAgIC8vIFJldHVybiBib3RoIHRoZSBlbGVtZW50IGFuZCB0aGUgaG9vayB0aGF0IG1vZGlmaWVzIFxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcbiAgICBsZXQgcmV0ID0ge1xuICAgICAgICB1c2VEcmFnZ2FibGVQcm9wcyxcbiAgICAgICAgZHJhZ2dpbmcsXG4gICAgICAgIGdldERyYWdnaW5nLFxuICAgICAgICAvLyBTZXQgb25jZSBhIGRyYWcgaGFzIGNvbXBsZXRlZCB3aXRoIHRoZSByZXN1bHRpbmcgYWN0aW9uXG4gICAgICAgIC8vIFVzZWZ1bCBmb3IgcmVtb3ZpbmcgdGhlIGVsZW1lbnQgYWZ0ZXJ3YXJkcyBpZiBpdCB3YXMgXCJtb3ZlXCJcbiAgICAgICAgbGFzdERyb3BFZmZlY3QsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXN0XG4gICAgICAgICAqL1xuICAgICAgICBnZXRMYXN0RHJvcEVmZmVjdFxuICAgIH07XG4gICAgcmV0dXJuIHJldDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kcmFnZ2FibGUuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG47XG47XG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlRmlsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGZpbGVOYW1lO1xuICAgIGVycm9yVHlwZTtcbiAgICBjb25zdHJ1Y3RvcihmaWxlTmFtZSwgYmFzZSkge1xuICAgICAgICBzdXBlcihiYXNlPy5tZXNzYWdlID8/IFwiQW4gdW5zcGVjaWZpZWQgZXJyb3Igb2NjdXJyZWQgcmVhZGluZyB0aGUgZmlsZS5cIik7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSBiYXNlPy5uYW1lO1xuICAgIH1cbn1cbi8vTWVyZ2VkUHJvcHM8VXNlUmVmRWxlbWVudFByb3BzUmV0dXJuVHlwZTxFLCBQaWNrPGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+LCBcIm9uRHJhZ0VudGVyXCIgfCBcIm9uRHJhZ0xlYXZlXCIgfCBcIm9uRHJhZ092ZXJcIiB8IFwib25Ecm9wXCI+PiwgUD47XG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHBhYmxlKHsgZWZmZWN0IH0pIHtcbiAgICBjb25zdCBbZmlsZXNGb3JDb25zaWRlcmF0aW9uLCBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N0cmluZ3NGb3JDb25zaWRlcmF0aW9uLCBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJvcHBlZEZpbGVzLCBzZXREcm9wcGVkRmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Ryb3BwZWRTdHJpbmdzLCBzZXREcm9wcGVkU3RyaW5nc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJvcEVycm9yLCBzZXREcm9wRXJyb3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICAvLyBBbGwgdGhlIHByb21pc2VzIGdlbmVyYXRlZCBmcm9tIHRoZSBkcm9wIGV2ZW50cy5cbiAgICAvLyBVc2VkIHRvIHByb2Nlc3MgbXVsdGlwbGUgZHJvcCBldmVudHMgaW4gc3VjY2Vzc2lvblxuICAgIGNvbnN0IGRyb3BQcm9taXNlc1JlZiA9IHVzZVJlZihbXSk7XG4gICAgY29uc3QgW2N1cnJlbnRQcm9taXNlSW5kZXgsIHNldEN1cnJlbnRQcm9taXNlSW5kZXgsIGdldEN1cnJlbnRQcm9taXNlSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xuICAgIGNvbnN0IFtwcm9taXNlQ291bnQsIHNldFByb21pc2VDb3VudCwgZ2V0UHJvbWlzZUNvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIC8vIEFueSB0aW1lIHdlIGFkZCBhIG5ldyBwcm9taXNlLCBpZiB0aGVyZSdzIG5vIGN1cnJlbnQgcHJvbWlzZSBydW5uaW5nLCB3ZSBuZWVkIHRvIHN0YXJ0IG9uZS5cbiAgICAvLyBJZiB0aGVyZSBpcyBvbmUsIHRoZW4gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZywgc2luY2UgaXQgcnVucyB0aGUgc2FtZSBjaGVjay5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xuICAgICAgICBjb25zdCBwcm9taXNlQ291bnQgPSBnZXRQcm9taXNlQ291bnQoKTtcbiAgICAgICAgaWYgKHByb21pc2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcHJvbWlzZUNvdW50XSk7XG4gICAgLy8gQW55dGltZSBvdXIgY3VycmVudCBwcm9taXNlIGNoYW5nZXMsXG4gICAgLy8gd2FpdCBmb3IgaXQgdG8gZmluaXNoLCB0aGVuIHNldCBvdXIgc3RhdGUgdG8gaXRzIHJlc3VsdC5cbiAgICAvLyBGaW5hbGx5LCBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueW1vcmUgcHJvbWlzZXMuXG4gICAgLy8gSWYgdGhlcmUgYXJlLCB0aGVuIGluY3JlYXNlIGN1cnJlbnRQcm9taXNlQ291bnQsXG4gICAgLy8gd2hpY2ggd2lsbCB0cmlnZ2VyIHRoaXMgYWdhaW4uXG4gICAgLy9cbiAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gKm9mdGVuKiwgYnV0IG1heWJlIGluIHRoZSBjYXNlIG9mXG4gICAgLy8gaW5kaXZpZHVhbGx5IGRyb3BwaW5nIGEgYnVuY2ggb2YgbGFyZ2UgZmlsZXMgb3Igc29tZXRoaW5nLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UHJvbWlzZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlID0gZHJvcFByb21pc2VzUmVmLmN1cnJlbnRbY3VycmVudFByb21pc2VJbmRleF07XG4gICAgICAgICAgICBjdXJyZW50UHJvbWlzZS50aGVuKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBmaWxlcywgc3RyaW5ncyB9ID0gaW5mbztcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZEZpbGVzKGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZFN0cmluZ3Moc3RyaW5ncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3JlIGRvbmUsIGFyZSB0aGVyZSBtb3JlIHByb21pc2VzIGluIHRoZSBxdWV1ZT9cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xuICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgcHJvbWlzZSBoYXMgc3RhcnRlZCwgbW9yZSBoYXZlIGJlZW4gYWRkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB0aGlzIGVmZmVjdCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFByb21pc2VJbmRleF0pO1xuICAgIGNvbnN0IHVzZURyb3BwYWJsZVByb3BzID0gKHApID0+IHtcbiAgICAgICAgLy9jb25zdCByZWYgPSB1c2VSZWY8RT4obnVsbCk7XG4gICAgICAgIC8vIEhhbmRsZSBjb2xsZWN0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlcy5cbiAgICAgICAgY29uc3Qgb25EcmFnRW50ZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gSXMgdGhlcmUgYSBkZWZhdWx0PyBJIGNhbid0IGZpbmQgb25lIGFueXdoZXJlLlxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAoZWZmZWN0ID8/IFwibW92ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNaW1lVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNaW1lVHlwZXMuYWRkKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKHsgdHlwZTogaXRlbS50eXBlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihuZXdGaWxlcyk7XG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obmV3TWltZVR5cGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gSGFuZGxlIHJlc2V0dGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXNcbiAgICAgICAgY29uc3Qgb25EcmFnTGVhdmUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEJvaWxlcnBsYXRlLCBJIGd1ZXNzXG4gICAgICAgIGNvbnN0IG9uRHJhZ092ZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGUgZ2V0dGluZyB0aGUgZHJvcCBkYXRhIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIGNvbnN0IG9uRHJvcCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgY29uc3QgZHJvcERhdGEgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGRyb3BGaWxlID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBpdGVtLmdldEFzU3RyaW5nKHJlc29sdmUpKSkudGhlbihzdHIgPT4gZHJvcERhdGFbdHlwZV0gPSBzdHIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCh7IGRhdGEsIG5hbWU6IGZpbGUubmFtZSwgdHlwZTogZmlsZS50eXBlLCBzaXplOiBkYXRhLmJ5dGVMZW5ndGgsIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoZSkgPT4geyByZWplY3QobmV3IERyb3BwYWJsZUZpbGVFcnJvcihmaWxlLm5hbWUsIHJlYWRlci5lcnJvcikpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BGaWxlLnB1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3BQcm9taXNlc1JlZi5jdXJyZW50LnB1c2goUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IGRyb3BEYXRhLFxuICAgICAgICAgICAgICAgICAgICBmaWxlczogZHJvcEZpbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvbkRyYWdFbnRlciwgb25EcmFnTGVhdmUsIG9uRHJhZ092ZXIsIG9uRHJvcCB9LCBwKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZURyb3BwYWJsZVByb3BzLFxuICAgICAgICBmaWxlc0ZvckNvbnNpZGVyYXRpb24sXG4gICAgICAgIHN0cmluZ3NGb3JDb25zaWRlcmF0aW9uLFxuICAgICAgICBkcm9wcGVkRmlsZXMsXG4gICAgICAgIGRyb3BwZWRTdHJpbmdzLFxuICAgICAgICBkcm9wRXJyb3JcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyb3BwYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbi8qKlxuICogQWxsb3dzIGF0dGFjaGluZyBhbiBldmVudCBoYW5kbGVyIHRvIGFueSAqbm9uLVByZWFjdCogZWxlbWVudCwgYW5kIHJlbW92aW5nIGl0IHdoZW4gdGhlIGNvbXBvbmVudCB1c2luZyB0aGUgaG9vayB1bm1vdW50cy4gVGhlIGNhbGxiYWNrIGRvZXMgbm90IG5lZWQgdG8gYmUgc3RhYmxlIGFjcm9zcyByZW5kZXJzLlxuICpcbiAqIER1ZSB0byB0eXBpbmcgbGltaXRhdGlvbnMsIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgbGlrZSB0aGlzOlxuICpcbiAqIGB1c2VFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJpbnB1dFwiKTxJbnB1dEV2ZW50PihlID0+IHt9KWBcbiAqXG4gKiBUaGUgdHlwZSBhcmd1bWVudCBpcyBvcHRpb25hbCwgYnV0IG5hcnJvd3MgZG93biB0aGUgdHlwZSBmcm9tIFwiYSB1bmlvbiBvZiBhbGwgZXZlbnRzXCIgdG8gd2hhdGV2ZXIgeW91IHNwZWNpZnksIGFuZCBlcnJvcnMgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAqXG4gKiBUaGVyZSBpcyBhIHNlcGFyYXRlIHZlcnNpb24gdGhhdCBhdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byBhIHNldCBvZiBwcm9wcy5cbiAqIEl0IHRha2VzIGRpZmZlcmVudCBldmVudCBzdHJpbmcgdHlwZXMgKG9uRXZlbnQgdnMgb25ldmVudCkuXG4gKlxuICogQHBhcmFtIHRhcmdldCBBICpub24tUHJlYWN0KiBub2RlIHRvIGF0dGFjaCB0aGUgZXZlbnQgdG8uXG4gKiBAcmV0dXJuc1xuICogKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlR2xvYmFsSGFuZGxlcih0YXJnZXQsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAvLyBOb3RlIHRvIHNlbGY6IFRoZSB0eXBpbmcgZG9lc24ndCBpbXByb3ZlIGV2ZW4gaWYgdGhpcyBpcyBzcGxpdCB1cCBpbnRvIGEgc3ViLWZ1bmN0aW9uLlxuICAgIC8vIE5vIG1hdHRlciB3aGF0LCBpdCBzZWVtcyBpbXBvc3NpYmxlIHRvIGdldCB0aGUgaGFuZGxlcidzIGV2ZW50IG9iamVjdCB0eXBlZCBwZXJmZWN0bHkuXG4gICAgLy8gSXQgc2VlbXMgbGlrZSBpdCdzIGd1YXJhbnRlZWQgdG8gYWx3YXlzIGJlIGEgdW5pb24gb2YgYWxsIGF2YWlsYWJsZSB0dXBlcy5cbiAgICAvLyBBZ2Fpbiwgbm8gbWF0dGVyIHdoYXQgY29tYmluYXRpb24gb2Ygc3ViLSBvciBzdWItc3ViLWZ1bmN0aW9ucyB1c2VkLlxuICAgIGxldCBzdGFibGVIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soaGFuZGxlciA/PyAoKCkgPT4geyB9KSk7XG4gICAgaWYgKGhhbmRsZXIgPT0gbnVsbClcbiAgICAgICAgc3RhYmxlSGFuZGxlciA9IG51bGw7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0YWJsZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHN0YWJsZUhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHN0YWJsZUhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfSwgW3RhcmdldCwgdHlwZSwgc3RhYmxlSGFuZGxlcl0pO1xufVxuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB3YXkgdG8gYWRkIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW4gZWxlbWVudC4gVXNlZnVsIHByaW1hcmlseSB3aGVuIGludGVncmF0aW5nIDNyZCBwYXJ0eSBsaWJyYXJpZXMgdGhhdCBleHBlY3QgYSBnZW5lcmljIFwiYWRkIGV2ZW50IGhhbmRsZXJcIiBmdW5jdGlvbi5cbiAqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBhbGxvd3MgeW91IHRvIG1vZGlmeSBhIHNldCBvZiBwcm9wcyB0byBhcHBseSB0aGlzIGhhbmRsZXIuXG4gKlxuICogRm9yIHR5cGluZyByZWFzb25zLCB0aGlzIGZ1bmN0aW9uIGlzIHNwbGl0IGludG8gdHdvLiAgVXNhZ2UgaXMgbGlrZSB0aGUgZm9sbG93aW5nOlxuICpcbiAqIGBgYFxuICogY29uc3QgeyB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzIH0gPSB1c2VMb2NhbEV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD4oKShcIm9uTW91c2VEb3duXCIsIGUgPT4geyAgfSk7XG4gKiBjb25zdCBkaXZQcm9wcyA9IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMocHJvcHMpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbEhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCh0eXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyKTtcbiAgICAgICAgY29uc3QgdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBbdHlwZV06IHN0YWJsZUhhbmRsZXIgfSwgcHJvcHMpO1xuICAgICAgICB9LCBbdHlwZV0pO1xuICAgICAgICByZXR1cm4geyB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzIH07XG4gICAgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWV2ZW50LWhhbmRsZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG4vKipcbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaWZmZXJlbnQgd2F5cyB0aGF0IGEgZm9jdXMgZXZlbnQgY2FuIGhhcHBlbi4gIEFzc3VtZVxuICogdGhlIGZvbGxvd2luZyBzdGVwcyBoYXBwZW4gaW4gb3JkZXI6XG4gKlxuICogMS4gVGhlIHBhZ2UgbG9hZHMuXG4gKiAgICAqIE5vdGhpbmcgaXMgZm9jdXNlZCwgYnV0IGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBgYm9keWAuXG4gKiAgICAqIE5vIGZvY3VzIGV2ZW50cyBhcmUgZmlyZWQuXG4gKiAyLiBUaGUgd2luZG93IGlzIGZvY3VzZWQsIGFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIHJlbWFpbnMgYXMgYGJvZHlgLlxuICogICAgKiBBIGBmb2N1c2AvYGZvY3VzaW5gIGV2ZW50ICpNSUdIVCogYmUgZmlyZWQgZm9yIGBib2R5YC4gRGVwZW5kaW5nIG9uXG4gKiAgICAgIHRoZSBicm93c2VyLCB0aGlzIGRlcGVuZHMgb24gd2hldGhlciB0aGUgaGFuZGxlciB3YXMgYXR0YWNoZWQgdG8gYHdpbmRvd2Agb3IgYGRvY3VtZW50YC5cbiAqICAgICAgUHJvYmFibHkganVzdCBiZXN0IHRvIG5vdCByZWx5IG9uIGl0LCBvciBsaXN0ZW4gdG8gYHdpbmRvd2AgZm9jdXMgZXZlbnRzIGRpcmVjdGx5LlxuICogMy4gQSBmb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCBldGMuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgYW55IGV2ZW50IGV2ZW4gZmlyZXMuXG4gKiAgICAqIGBmb2N1c291dGAgYW5kIGBibHVyYCBhcmUgKm5vdCogZmlyZWQgb24gYGJvZHlgLlxuICogICAgKiBgZm9jdXNgIGFuZCBgZm9jdXNpbmAgYXJlIGZpcmVkIG9uIHRoZSBuZXcgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXG4gKiA0LiBBIGZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIGV0Yy5cbiAqICAgICogKipUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byB0aGUgYGJvZHlgKiogYmVmb3JlIGFueSBldmVudCBldmVuIGZpcmVzLlxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIHRoZSBuZXcgZWxlbWVudC5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBub3cgc2V0IHRvIHRoZSBuZXcgZWxlbWVudC5cbiAqICAgICogYGZvY3VzaW5gIGlzIGZpcmVkIG9uIHRoZSBuZXcgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIHRoZSBvbGQgZWxlbWVudC5cbiAqIDUuIEFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byBgYm9keWAuXG4gKiAgICAqIGBibHVyYCBhbmQgYGZvY3Vzb3V0YCBhcmUgZmlyZWQgb24gdGhlIG9sZCBlbGVtZW50LiBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbC5cbiAqICAgICogYGZvY3VzaW5gIGlzICpub3QqIGZpcmVkIG9uIGBib2R5YC5cbiAqXG4gKlxuICogSW4gc3VtbWFyeTpcbiAqIDEuIEZvY3VzIGV2ZW50cyAqZG8qIG5vdGlmeSB1cyBvZiBhbGwgY2hhbmdlcyBpbiBmb2N1cywgYnV0IHRoZXJlIGlzIG5vIG9uZSBzaW5nbGUgY29tcHJlaGVuc2l2ZSBldmVudCB0aGF0IHByb3ZpZGVzIHVzIHdpdGggYWxsIGF2YWlsYWJsZSBpbmZvcm1hdGlvbi5cbiAqIDIuIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCAqaXMgbm90KiBhbHdheXMgdGhlIHNhbWUgYXMgd2hhdCdzIGJlaW5nIHJlZmVyZW5jZWQgYnkgYSBmb2N1cyBldmVudC4gSW4gcGFydGljdWxhciwgaXQgbWF5IGJlY29tZSBgYm9keWAgYXQgYW55IGFyYml0cmFyeSB0aW1lLlxuICogMy4gQSBgYmx1cmAgd2l0aG91dCBhIGBmb2N1c2AgY2FuIGFuZCB3aWxsIG9jY3VyLiBUaGlzIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBzb2xlbHkgdXNlIGBmb2N1c2AgdG8gZGV0ZWN0IGFsbCBjaGFuZ2VzLlxuICogNC4gQSBgYmx1cmAgZXZlbnQgd2hvc2UgYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwgaW5kaWNhdGVzIHRoYXQgdGhlcmUgd2lsbCBiZSBubyBmb2xsb3dpbmcgYGZvY3VzYCBldmVudC5cbiAqXG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBkdW1teSA9IDA7XG5jb25zdCBhY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBuZXcgTWFwKCk7XG5jb25zdCBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IE1hcCgpO1xuY29uc3Qgd2luZG93Rm9jdXNlZFVwZGF0ZXJzID0gbmV3IE1hcCgpO1xubGV0IHdpbmRvd3NGb2N1c2VkID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZm9yRWFjaFVwZGF0ZXIod2luZG93LCBtYXAsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgW290aGVyV2luZG93LCB1cGRhdGVyc10gb2YgbWFwKSB7XG4gICAgICAgIGlmICh3aW5kb3cgPT09IG90aGVyV2luZG93KSB7XG4gICAgICAgICAgICBmb3IgKGxldCB1cGRhdGVyIG9mIHVwZGF0ZXJzKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlcj8uKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGZvY3Vzb3V0KGUpIHtcbiAgICBjb25zdCB3aW5kb3cgPSBlLnRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgPT0gbnVsbCkge1xuICAgICAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIGFjdGl2ZUVsZW1lbnRVcGRhdGVycywgbnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBKdXN0IHdhaXQgZm9yIHRoZSBmb2N1c2luIGV2ZW50LlxuICAgIH1cbn1cbmZ1bmN0aW9uIGZvY3VzaW4oZSkge1xuICAgIGNvbnN0IHdpbmRvdyA9IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgbGV0IGN1cnJlbnRseUZvY3VzZWRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgZm9yRWFjaFVwZGF0ZXIod2luZG93LCBhY3RpdmVFbGVtZW50VXBkYXRlcnMsIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50KTtcbiAgICBmb3JFYWNoVXBkYXRlcih3aW5kb3csIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMsIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIHdpbmRvd0ZvY3VzKGUpIHtcbiAgICBjb25zdCB3aW5kb3cgPSAoZS50YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cgPyBlLnRhcmdldCA6IGUuY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUuY3VycmVudFRhcmdldCA6IGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xuICAgIHdpbmRvd3NGb2N1c2VkLnNldCh3aW5kb3csIHRydWUpO1xuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIHdpbmRvd0JsdXIoZSkge1xuICAgIGNvbnN0IHdpbmRvdyA9IChlLnRhcmdldCBpbnN0YW5jZW9mIFdpbmRvdyA/IGUudGFyZ2V0IDogZS5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgV2luZG93ID8gZS5jdXJyZW50VGFyZ2V0IDogZS50YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyk7XG4gICAgd2luZG93c0ZvY3VzZWQuc2V0KHdpbmRvdywgZmFsc2UpO1xuICAgIGZvckVhY2hVcGRhdGVyKHdpbmRvdywgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLCBmYWxzZSk7XG59XG4vKipcbiAqIEFsbG93cyB5b3UgdG8gaW5zcGVjdCB3aGljaCBlbGVtZW50IGluIHRoZSBgZG9jdW1lbnRgIGN1cnJlbnRseSBoYXMgZm9jdXMsIHdoaWNoIHdhcyBtb3N0IHJlY2VudGx5IGZvY3VzZWQgaWYgbm9uZSBhcmUgY3VycmVudGx5LCBhbmQgd2hldGhlciBvciBub3QgdGhlIHdpbmRvdyBoYXMgZm9jdXMgYnkgcmV0dXJuaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxuICogKiBgZ2V0QWN0aXZlRWxlbWVudCgpYFxuICogKiBgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQoKWBcbiAqICogYGdldFdpbmRvd0ZvY3VzZWQoKWBcbiAqICogKipObyBwcm9wLW1vZGlmeWluZyBob29rIGlzIHJldHVybmVkIGJlY2F1c2Ugbm9uZSBpcyBuZWNlc3NhcnkqKlxuICpcbiAqIChUaGUgZG9jdW1lbnQncyBib2R5IHJlY2VpdmluZyBmb2N1cywgbGlrZSBpdCBkb2VzIHdoZW4geW91IGNsaWNrIG9uIGFuIGVtcHR5IGFyZWEsIGlzIGNvdW50ZWQgYXMgbm8gZWxlbWVudCBoYXZpbmcgZm9jdXMgZm9yIGFsbCBpbnRlbnRzIGFuZCBwdXJwb3NlcylcbiAqXG4gKiBUaGlzIGlzIGEgcGFzc2l2ZSBob29rLCBzbyBieSBkZWZhdWx0IGl0IHJldHVybnMgZ2V0dGVyIGZ1bmN0aW9ucyB0aGF0IHJlcG9ydCB0aGlzIGluZm9ybWF0aW9uIGJ1dCB0aGUgY29tcG9uZW50IHdpbGwgbm90IHJlLXJlbmRlciBieSBkZWZhdWx0IHdoZW4gdGhlIGFjdGl2ZSBlbGVtZW50IGNoYW5nZXMuXG4gKlxuICogSWYgeW91IG5lZWQgdGhlIGNvbXBvbmVudCB0byByZS1yZW5kZXIgd2hlbiB0aGUgYWN0aXZlIGVsZW1lbnQgY2hhbmdlcywgdXNlIHRoZSBgb24qQ2hhbmdlYCBhcmd1bWVudHMgdG8gc2V0IHNvbWUgc3RhdGUgb24geW91ciBlbmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3RpdmVFbGVtZW50KHsgb25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UgfSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50Py5kZWZhdWx0VmlldztcbiAgICAgICAgICAgICAgICBpZiAoKGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KT8uc2l6ZSA/PyAwKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZvY3Vzb3V0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1ciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlbSBldmVuIGlmIHRoZXkncmUgdW5kZWZpbmVkIHRvIG1vcmUgZWFzaWx5XG4gICAgICAgICAgICAgICAgLy8gbWFuYWdlIHRoZSBcIj4wIG1lYW5zIGRvbid0IGFkZCBoYW5kbGVyc1wiIGxvZ2ljLlxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsQWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpID8/IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbExhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMgPSBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmdldCh3aW5kb3cpID8/IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFdpbmRvd0ZvY3VzZWRVcGRhdGVycyA9IHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5nZXQod2luZG93KSA/PyBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgbG9jYWxBY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxvY2FsTGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5hZGQoc2V0TGFzdEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxvY2FsV2luZG93Rm9jdXNlZFVwZGF0ZXJzLmFkZChzZXRXaW5kb3dGb2N1c2VkKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2V0KHdpbmRvdywgbG9jYWxBY3RpdmVFbGVtZW50VXBkYXRlcnMpO1xuICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuc2V0KHdpbmRvdywgbG9jYWxMYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzKTtcbiAgICAgICAgICAgICAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuc2V0KHdpbmRvdywgbG9jYWxXaW5kb3dGb2N1c2VkVXBkYXRlcnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5nZXQod2luZG93KS5kZWxldGUoc2V0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZ2V0KHdpbmRvdykuZGVsZXRlKHNldExhc3RBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmdldCh3aW5kb3cpLmRlbGV0ZShzZXRXaW5kb3dGb2N1c2VkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZvY3Vzb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1cik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICB9KTtcbiAgICBjb25zdCBbZ2V0QWN0aXZlRWxlbWVudCwgc2V0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25BY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtnZXRMYXN0QWN0aXZlRWxlbWVudCwgc2V0TGFzdEFjdGl2ZUVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2dldFdpbmRvd0ZvY3VzZWQsIHNldFdpbmRvd0ZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uV2luZG93Rm9jdXNlZENoYW5nZSwgcmV0dXJuVHJ1ZSk7XG4gICAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgdXNlQWN0aXZlRWxlbWVudFByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkIH07XG59XG5mdW5jdGlvbiByZXR1cm5UcnVlKCkgeyByZXR1cm4gdHJ1ZTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjdGl2ZS1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZnVuY3Rpb24gbm9vcCgpIHsgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUhhc0ZvY3VzKHsgb25Gb2N1c2VkQ2hhbmdlZCwgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2UgfSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkZvY3VzZWRDaGFuZ2VkLCBvbkZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSk7XG4gICAgY29uc3QgW2dldEZvY3VzZWQsIHNldEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRm9jdXNlZENoYW5nZWQsIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCBbZ2V0Rm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXJdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRm9jdXNlZElubmVyQ2hhbmdlZCwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRMYXN0Rm9jdXNlZCwgc2V0TGFzdEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCByZXR1cm5GYWxzZSk7XG4gICAgY29uc3QgW2dldExhc3RGb2N1c2VkSW5uZXIsIHNldExhc3RGb2N1c2VkSW5uZXJdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQsIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCB7IGdldEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50LCBnZXRXaW5kb3dGb2N1c2VkLCB1c2VBY3RpdmVFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoe1xuICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChhY3RpdmVFbGVtZW50LCBwcmV2QWN0aXZlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkID0gKHNlbGZFbGVtZW50ICE9IG51bGwgJiYgKHNlbGZFbGVtZW50ID09IGFjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbm5lciA9ICghIXNlbGZFbGVtZW50Py5jb250YWlucyhhY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBzZXRGb2N1c2VkKGZvY3VzZWQpO1xuICAgICAgICAgICAgc2V0Rm9jdXNlZElubmVyKGZvY3VzZWRJbm5lcik7XG4gICAgICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U/LihhY3RpdmVFbGVtZW50LCBwcmV2QWN0aXZlRWxlbWVudCk7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGxhc3RBY3RpdmVFbGVtZW50LCBwcmV2TGFzdEFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZCA9IChzZWxmRWxlbWVudCAhPSBudWxsICYmIChzZWxmRWxlbWVudCA9PSBsYXN0QWN0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZElubmVyID0gKCEhc2VsZkVsZW1lbnQ/LmNvbnRhaW5zKGxhc3RBY3RpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICBzZXRMYXN0Rm9jdXNlZChmb2N1c2VkKTtcbiAgICAgICAgICAgIHNldExhc3RGb2N1c2VkSW5uZXIoZm9jdXNlZElubmVyKTtcbiAgICAgICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U/LihsYXN0QWN0aXZlRWxlbWVudCwgcHJldkxhc3RBY3RpdmVFbGVtZW50KTtcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBvbldpbmRvd0ZvY3VzZWRDaGFuZ2VcbiAgICB9KTtcbiAgICBjb25zdCB1c2VIYXNGb2N1c1Byb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7IHJldHVybiB1c2VBY3RpdmVFbGVtZW50UHJvcHMocHJvcHMpOyB9LCBbdXNlQWN0aXZlRWxlbWVudFByb3BzXSk7XG4gICAgcmV0dXJuIHsgdXNlSGFzRm9jdXNQcm9wcywgZ2V0RWxlbWVudCwgZ2V0Rm9jdXNlZCwgZ2V0Rm9jdXNlZElubmVyLCBnZXRMYXN0Rm9jdXNlZCwgZ2V0TGFzdEZvY3VzZWRJbm5lciwgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xuICAgICAgICBpZiAoaW50ZXJ2YWwgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAvLyB0aGF0IGNsZWFycyBhbmQgcmVzZXRzIHRoZSBpbnRlcnZhbCBpZiBpdCBjaGFuZ2VzLlxuICAgICAgICBjb25zdCBhZGp1c3RhYmxlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbGFzdERlbGF5VXNlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgbGFzdERlbGF5VXNlZCA9IGN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGludGVydmFsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiLyohXG4qIHRhYmJhYmxlIDUuMy4xXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbnZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdhW2hyZWZdJywgJ2J1dHRvbicsICdbdGFiaW5kZXhdOm5vdChzbG90KScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgTm9FbGVtZW50ID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnO1xudmFyIG1hdGNoZXMgPSBOb0VsZW1lbnQgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xudmFyIGdldFJvb3ROb2RlID0gIU5vRWxlbWVudCAmJiBFbGVtZW50LnByb3RvdHlwZS5nZXRSb290Tm9kZSA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG59IDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudDtcbn07XG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgY29udGFpbmVyIHRvIGNoZWNrIGluXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciB0byBjaGVja1xuICogQHBhcmFtIHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICovXG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuLyoqXG4gKiBAY2FsbGJhY2sgR2V0U2hhZG93Um9vdFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRvIGNoZWNrIGZvciBzaGFkb3cgcm9vdFxuICogQHJldHVybnMge1NoYWRvd1Jvb3R8Ym9vbGVhbn0gU2hhZG93Um9vdCBpZiBhdmFpbGFibGUgb3IgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIGEgc2hhZG93Um9vdCBpcyBhdHRhY2hlZCBidXQgbm90IGF2YWlsYWJsZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENhbmRpZGF0ZXNTY29wZVxuICogQHByb3BlcnR5IHtFbGVtZW50fSBzY29wZSBjb250YWlucyBpbm5lciBjYW5kaWRhdGVzXG4gKiBAcHJvcGVydHkge0VsZW1lbnRbXX0gY2FuZGlkYXRlc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSXRlcmF0aXZlT3B0aW9uc1xuICogQHByb3BlcnR5IHtHZXRTaGFkb3dSb290fGJvb2xlYW59IGdldFNoYWRvd1Jvb3QgdHJ1ZSBpZiBzaGFkb3cgc3VwcG9ydCBpcyBlbmFibGVkOyBmYWxzeSBpZiBub3Q7XG4gKiAgaWYgYSBmdW5jdGlvbiwgaW1wbGllcyBzaGFkb3cgc3VwcG9ydCBpcyBlbmFibGVkIGFuZCBlaXRoZXIgcmV0dXJucyB0aGUgc2hhZG93IHJvb3Qgb2YgYW4gZWxlbWVudFxuICogIG9yIGEgYm9vbGVhbiBzdGF0aW5nIGlmIGl0IGhhcyBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgcm9vdFxuICogQHByb3BlcnR5IHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGZsYXR0ZW4gaWYgdHJ1ZSB0aGVuIHJlc3VsdCB3aWxsIGZsYXR0ZW4gYW55IENhbmRpZGF0ZXNTY29wZSBpbnRvIHRoZSByZXR1cm5lZCBsaXN0XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnRbXX0gZWxlbWVudHMgbGlzdCBvZiBlbGVtZW50IGNvbnRhaW5lcnMgdG8gbWF0Y2ggY2FuZGlkYXRlcyBmcm9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciBsaXN0IHRvIGNoZWNrXG4gKiBAcGFyYW0ge0l0ZXJhdGl2ZU9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVzU2NvcGU+fVxuICovXG5cblxudmFyIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShlbGVtZW50cywgaW5jbHVkZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgZWxlbWVudHNUb0NoZWNrID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG5cbiAgd2hpbGUgKGVsZW1lbnRzVG9DaGVjay5sZW5ndGgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzVG9DaGVjay5zaGlmdCgpO1xuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NMT1QnKSB7XG4gICAgICAvLyBhZGQgc2hhZG93IGRvbSBzbG90IHNjb3BlIChzbG90IGl0c2VsZiBjYW5ub3QgYmUgZm9jdXNhYmxlKVxuICAgICAgdmFyIGFzc2lnbmVkID0gZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICB2YXIgY29udGVudCA9IGFzc2lnbmVkLmxlbmd0aCA/IGFzc2lnbmVkIDogZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIHZhciBuZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAob3B0aW9ucy5mbGF0dGVuKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBuZXN0ZWRDYW5kaWRhdGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgc2NvcGU6IGVsZW1lbnQsXG4gICAgICAgICAgY2FuZGlkYXRlczogbmVzdGVkQ2FuZGlkYXRlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgY2FuZGlkYXRlIGVsZW1lbnRcbiAgICAgIHZhciB2YWxpZENhbmRpZGF0ZSA9IG1hdGNoZXMuY2FsbChlbGVtZW50LCBjYW5kaWRhdGVTZWxlY3Rvcik7XG5cbiAgICAgIGlmICh2YWxpZENhbmRpZGF0ZSAmJiBvcHRpb25zLmZpbHRlcihlbGVtZW50KSAmJiAoaW5jbHVkZUNvbnRhaW5lciB8fCAhZWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCkpKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaChlbGVtZW50KTtcbiAgICAgIH0gLy8gaXRlcmF0ZSBvdmVyIHNoYWRvdyBjb250ZW50IGlmIHBvc3NpYmxlXG5cblxuICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3QgfHwgLy8gY2hlY2sgZm9yIGFuIHVuZGlzY2xvc2VkIHNoYWRvd1xuICAgICAgdHlwZW9mIG9wdGlvbnMuZ2V0U2hhZG93Um9vdCA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zLmdldFNoYWRvd1Jvb3QoZWxlbWVudCk7XG5cbiAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgIC8vIGFkZCBzaGFkb3cgZG9tIHNjb3BlIElJRiBhIHNoYWRvdyByb290IG5vZGUgd2FzIGdpdmVuOyBvdGhlcndpc2UsIGFuIHVuZGlzY2xvc2VkXG4gICAgICAgIC8vICBzaGFkb3cgZXhpc3RzLCBzbyBsb29rIGF0IGxpZ2h0IGRvbSBjaGlsZHJlbiBhcyBmYWxsYmFjayBCVVQgY3JlYXRlIGEgc2NvcGUgZm9yIGFueVxuICAgICAgICAvLyAgY2hpbGQgY2FuZGlkYXRlcyBmb3VuZCBiZWNhdXNlIHRoZXkncmUgbGlrZWx5IHNsb3R0ZWQgZWxlbWVudHMgKGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgICAgIC8vICBjaGlsZHJlbiBvZiB0aGUgd2ViIGNvbXBvbmVudCBlbGVtZW50ICh3aGljaCBoYXMgdGhlIHNoYWRvdyksIGluIHRoZSBsaWdodCBkb20sIGJ1dFxuICAgICAgICAvLyAgc2xvdHRlZCBzb21ld2hlcmUgX2luc2lkZV8gdGhlIHVuZGlzY2xvc2VkIHNoYWRvdykgLS0gdGhlIHNjb3BlIGlzIGNyZWF0ZWQgYmVsb3csXG4gICAgICAgIC8vICBfYWZ0ZXJfIHdlIHJldHVybiBmcm9tIHRoaXMgcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgdmFyIF9uZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KHNoYWRvd1Jvb3QgPT09IHRydWUgPyBlbGVtZW50LmNoaWxkcmVuIDogc2hhZG93Um9vdC5jaGlsZHJlbiwgdHJ1ZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBfbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3BlOiBlbGVtZW50LFxuICAgICAgICAgICAgY2FuZGlkYXRlczogX25lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlcmUncyBub3Qgc2hhZG93IHNvIGp1c3QgZGlnIGludG8gdGhlIGVsZW1lbnQncyAobGlnaHQgZG9tKSBjaGlsZHJlblxuICAgICAgICAvLyAgX193aXRob3V0X18gZ2l2aW5nIHRoZSBlbGVtZW50IHNwZWNpYWwgc2NvcGUgdHJlYXRtZW50XG4gICAgICAgIGVsZW1lbnRzVG9DaGVjay51bnNoaWZ0LmFwcGx5KGVsZW1lbnRzVG9DaGVjaywgZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgZ2V0VGFiaW5kZXggPSBmdW5jdGlvbiBnZXRUYWJpbmRleChub2RlLCBpc1Njb3BlKSB7XG4gIGlmIChub2RlLnRhYkluZGV4IDwgMCkge1xuICAgIC8vIGluIENocm9tZSwgPGRldGFpbHMvPiwgPGF1ZGlvIGNvbnRyb2xzLz4gYW5kIDx2aWRlbyBjb250cm9scy8+IGVsZW1lbnRzIGdldCBhIGRlZmF1bHRcbiAgICAvLyBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAgIC8vIHlldCB0aGV5IGFyZSBzdGlsbCBwYXJ0IG9mIHRoZSByZWd1bGFyIHRhYiBvcmRlcjsgaW4gRkYsIHRoZXkgZ2V0IGEgZGVmYXVsdFxuICAgIC8vIGB0YWJJbmRleGAgb2YgMDsgc2luY2UgQ2hyb21lIHN0aWxsIHB1dHMgdGhvc2UgZWxlbWVudHMgaW4gdGhlIHJlZ3VsYXIgdGFiXG4gICAgLy8gb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuICAgIC8vIEFsc28gYnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAgIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICAgIC8vXG4gICAgLy8gaXNTY29wZSBpcyBwb3NpdGl2ZSBmb3IgY3VzdG9tIGVsZW1lbnQgd2l0aCBzaGFkb3cgcm9vdCBvciBzbG90IHRoYXQgYnkgZGVmYXVsdFxuICAgIC8vIGhhdmUgdGFiSW5kZXggLTEsIGJ1dCBuZWVkIHRvIGJlIHNvcnRlZCBieSBkb2N1bWVudCBvcmRlciBpbiBvcmRlciBmb3IgdGhlaXJcbiAgICAvLyBjb250ZW50IHRvIGJlIGluc2VydGVkIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgaWYgKChpc1Njb3BlIHx8IC9eKEFVRElPfFZJREVPfERFVEFJTFMpJC8udGVzdChub2RlLnRhZ05hbWUpIHx8IG5vZGUuaXNDb250ZW50RWRpdGFibGUpICYmIGlzTmFOKHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCkpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG5cbnZhciBzb3J0T3JkZXJlZFRhYmJhYmxlcyA9IGZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn07XG5cbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xuXG52YXIgaXNIaWRkZW5JbnB1dCA9IGZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufTtcblxudmFyIGlzRGV0YWlsc1dpdGhTdW1tYXJ5ID0gZnVuY3Rpb24gaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gJ0RFVEFJTFMnICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC50YWdOYW1lID09PSAnU1VNTUFSWSc7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBpc1RhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHJhZGlvU2NvcGUgPSBub2RlLmZvcm0gfHwgZ2V0Um9vdE5vZGUobm9kZSk7XG5cbiAgdmFyIHF1ZXJ5UmFkaW9zID0gZnVuY3Rpb24gcXVlcnlSYWRpb3MobmFtZSkge1xuICAgIHJldHVybiByYWRpb1Njb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XG4gIH07XG5cbiAgdmFyIHJhZGlvU2V0O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MuZXNjYXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXMnLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQsIG5vZGUuZm9ybSk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufTtcblxudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufTtcblxudmFyIGlzTm9uVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59O1xuXG52YXIgaXNaZXJvQXJlYSA9IGZ1bmN0aW9uIGlzWmVyb0FyZWEobm9kZSkge1xuICB2YXIgX25vZGUkZ2V0Qm91bmRpbmdDbGllID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmhlaWdodDtcblxuICByZXR1cm4gd2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwO1xufTtcblxudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4obm9kZSwgX3JlZikge1xuICB2YXIgZGlzcGxheUNoZWNrID0gX3JlZi5kaXNwbGF5Q2hlY2ssXG4gICAgICBnZXRTaGFkb3dSb290ID0gX3JlZi5nZXRTaGFkb3dSb290O1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlVW5kZXJEZXRhaWxzLCAnZGV0YWlsczpub3QoW29wZW5dKSAqJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2Z1bGwnKSB7XG4gICAgaWYgKHR5cGVvZiBnZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBmaWd1cmUgb3V0IGlmIHdlIHNob3VsZCBjb25zaWRlciB0aGUgbm9kZSB0byBiZSBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgYW5kIHVzZSB0aGVcbiAgICAgIC8vICAnbm9uLXplcm8tYXJlYScgZmFsbGJhY2tcbiAgICAgIHZhciBvcmlnaW5hbE5vZGUgPSBub2RlO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHJvb3ROb2RlID0gZ2V0Um9vdE5vZGUobm9kZSk7XG5cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgJiYgIXBhcmVudEVsZW1lbnQuc2hhZG93Um9vdCAmJiBnZXRTaGFkb3dSb290KHBhcmVudEVsZW1lbnQpID09PSB0cnVlIC8vIGNoZWNrIGlmIHRoZXJlJ3MgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG5vZGUgaGFzIGFuIHVuZGlzY2xvc2VkIHNoYWRvdyB3aGljaCBtZWFucyB3ZSBjYW4gb25seSB0cmVhdCBpdCBhcyBhIGJsYWNrIGJveCwgc28gd2VcbiAgICAgICAgICAvLyAgZmFsbCBiYWNrIHRvIGEgbm9uLXplcm8tYXJlYSB0ZXN0XG4gICAgICAgICAgcmV0dXJuIGlzWmVyb0FyZWEobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAvLyBpdGVyYXRlIHVwIHNsb3RcbiAgICAgICAgICBub2RlID0gbm9kZS5hc3NpZ25lZFNsb3Q7XG4gICAgICAgIH0gZWxzZSBpZiAoIXBhcmVudEVsZW1lbnQgJiYgcm9vdE5vZGUgIT09IG5vZGUub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIC8vIGNyb3NzIHNoYWRvdyBib3VuZGFyeVxuICAgICAgICAgIG5vZGUgPSByb290Tm9kZS5ob3N0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGl0ZXJhdGUgdXAgbm9ybWFsIGRvbVxuICAgICAgICAgIG5vZGUgPSBwYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBvcmlnaW5hbE5vZGU7XG4gICAgfSAvLyBlbHNlLCBgZ2V0U2hhZG93Um9vdGAgbWlnaHQgYmUgdHJ1ZSwgYnV0IGFsbCB0aGF0IGRvZXMgaXMgZW5hYmxlIHNoYWRvdyBET00gc3VwcG9ydFxuICAgIC8vICAoaS5lLiBpdCBkb2VzIG5vdCBhbHNvIHByZXN1bWUgdGhhdCBhbGwgbm9kZXMgbWlnaHQgaGF2ZSB1bmRpc2Nsb3NlZCBzaGFkb3dzKTsgb3JcbiAgICAvLyAgaXQgbWlnaHQgYmUgYSBmYWxzeSB2YWx1ZSwgd2hpY2ggbWVhbnMgc2hhZG93IERPTSBzdXBwb3J0IGlzIGRpc2FibGVkXG4gICAgLy8gZGlkbid0IGZpbmQgaXQgc2l0dGluZyBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgKG9yIHNoYWRvd3MgYXJlIGRpc2FibGVkKSBzbyBub3cgd2VcbiAgICAvLyAgY2FuIGp1c3QgdGVzdCB0byBzZWUgaWYgaXQgd291bGQgbm9ybWFsbHkgYmUgdmlzaWJsZSBvciBub3RcbiAgICAvLyB0aGlzIHdvcmtzIHdoZXJldmVyIHRoZSBub2RlIGlzOiBpZiB0aGVyZSdzIGF0IGxlYXN0IG9uZSBjbGllbnQgcmVjdCwgaXQnc1xuICAgIC8vICBzb21laG93IGRpc3BsYXllZDsgaXQgYWxzbyBjb3ZlcnMgdGhlIENTUyAnZGlzcGxheTogY29udGVudHMnIGNhc2Ugd2hlcmUgdGhlXG4gICAgLy8gIG5vZGUgaXRzZWxmIGlzIGhpZGRlbiBpbiBwbGFjZSBvZiBpdHMgY29udGVudHM7IGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gc2VhcmNoXG4gICAgLy8gIHVwIHRoZSBoaWVyYXJjaHkgZWl0aGVyXG5cblxuICAgIHJldHVybiAhbm9kZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDtcbiAgfSBlbHNlIGlmIChkaXNwbGF5Q2hlY2sgPT09ICdub24temVyby1hcmVhJykge1xuICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTsgLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxuXG5cbnZhciBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0ID0gZnVuY3Rpb24gaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSB7XG4gIGlmICgvXihJTlBVVHxCVVRUT058U0VMRUNUfFRFWFRBUkVBKSQvLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50OyAvLyBjaGVjayBpZiBgbm9kZWAgaXMgY29udGFpbmVkIGluIGEgZGlzYWJsZWQgPGZpZWxkc2V0PlxuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLnRhZ05hbWUgPT09ICdGSUVMRFNFVCcgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAvLyBsb29rIGZvciB0aGUgZmlyc3QgPGxlZ2VuZD4gYW1vbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudE5vZGUuY2hpbGRyZW4uaXRlbShpKTsgLy8gd2hlbiB0aGUgZmlyc3QgPGxlZ2VuZD4gKGluIGRvY3VtZW50IG9yZGVyKSBpcyBmb3VuZFxuXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdMRUdFTkQnKSB7XG4gICAgICAgICAgICAvLyBpZiBpdHMgcGFyZW50IDxmaWVsZHNldD4gaXMgbm90IG5lc3RlZCBpbiBhbm90aGVyIGRpc2FibGVkIDxmaWVsZHNldD4sXG4gICAgICAgICAgICAvLyByZXR1cm4gd2hldGhlciBgbm9kZWAgaXMgYSBkZXNjZW5kYW50IG9mIGl0cyBmaXJzdCA8bGVnZW5kPlxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMuY2FsbChwYXJlbnROb2RlLCAnZmllbGRzZXRbZGlzYWJsZWRdIConKSA/IHRydWUgOiAhY2hpbGQuY29udGFpbnMobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+IGNvbnRhaW5pbmcgYG5vZGVgIGhhcyBubyA8bGVnZW5kPlxuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcblxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucykgfHwgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCB8fCAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVzU2NvcGU+fSBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyBFbGVtZW50W11cbiAqL1xuXG5cbnZhciBzb3J0QnlPcmRlciA9IGZ1bmN0aW9uIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpIHtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgdmFyIGlzU2NvcGUgPSAhIWl0ZW0uc2NvcGU7XG4gICAgdmFyIGVsZW1lbnQgPSBpc1Njb3BlID8gaXRlbS5zY29wZSA6IGl0ZW07XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoZWxlbWVudCwgaXNTY29wZSk7XG4gICAgdmFyIGVsZW1lbnRzID0gaXNTY29wZSA/IHNvcnRCeU9yZGVyKGl0ZW0uY2FuZGlkYXRlcykgOiBlbGVtZW50O1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICBpc1Njb3BlID8gcmVndWxhclRhYmJhYmxlcy5wdXNoLmFwcGx5KHJlZ3VsYXJUYWJiYWJsZXMsIGVsZW1lbnRzKSA6IHJlZ3VsYXJUYWJiYWJsZXMucHVzaChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBpc1Njb3BlOiBpc1Njb3BlLFxuICAgICAgICBjb250ZW50OiBlbGVtZW50c1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNvcnRhYmxlKSB7XG4gICAgc29ydGFibGUuaXNTY29wZSA/IGFjYy5wdXNoLmFwcGx5KGFjYywgc29ydGFibGUuY29udGVudCkgOiBhY2MucHVzaChzb3J0YWJsZS5jb250ZW50KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xufTtcblxudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuXG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IGZhbHNlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICB9XG5cbiAgcmV0dXJuIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXM7XG5cbiAgaWYgKG9wdGlvbnMuZ2V0U2hhZG93Um9vdCkge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoW2VsXSwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCB7XG4gICAgICBmaWx0ZXI6IGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICBnZXRTaGFkb3dSb290OiBvcHRpb25zLmdldFNoYWRvd1Jvb3RcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICB9XG5cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5cbnZhciBpc0ZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbmV4cG9ydCB7IGZvY3VzYWJsZSwgaXNGb2N1c2FibGUsIGlzVGFiYmFibGUsIHRhYmJhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2luZXJ0JywgZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICAvKipcbiAgICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAgICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAgICovXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgICAvKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gICAgLyoqXG4gICAgICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICAgICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICAgKi9cbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICAgKiBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gICAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgICAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gICAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgICAqXG4gICAgICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAgICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICAgKi9cblxuICAgIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRWxlbWVudH0gKi9cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgICAvLyBXYXRjaCBmb3I6XG4gICAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydFJvb3QsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fdmlzaXROb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdmlzaXROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcblxuICAgICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdtYW5hZ2VkTm9kZXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAgICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICAgICAqXG4gICAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgICAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICAgICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAgICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE1hbmFnZXIsIFt7XG4gICAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgICAgaWYgKGluZXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25Eb2N1bWVudExvYWRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0TWFuYWdlcjtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovbm9kZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgdmFyIHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9kaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicgKyAnW2luZXJ0XSB7XFxuJyArICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgKyAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArICd9XFxuJyArICdcXG4nICsgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICd9XFxuJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgIHZhciBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pKSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiaW1wb3J0IFwid2ljZy1pbmVydFwiO1xuaW1wb3J0IFwiYmxvY2tpbmctZWxlbWVudHNcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIGJsb2NraW5nRWxlbWVudHMoKSB7IHJldHVybiBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50czsgfVxuO1xuLyoqXG4gKiBBbGxvd3MgYW4gZWxlbWVudCB0byB0cmFwIGZvY3VzIGJ5IGFwcGx5aW5nIHRoZSBcImluZXJ0XCIgYXR0cmlidXRlIHRvIGFsbCBzaWJsaW5nLCBhdW50LCBhbmQgdW5jbGUgbm9kZXMuXG4gKlxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIGNvbnNlY3V0aXZlIGNhbGxzIHdpdGggYSBsb29zZWx5IGFwcGxpZWQgc3RhY2sgb3BlcmF0aW9uXG4gKiAoc3BlY2lmaWNhbGx5IHZpYSBgYmxvY2tpbmdFbGVtZW50c2AsIHdpdGggYSBzbWFsbCBwb2x5ZmlsbCBiZWNhdXNlIEknbSBub3Qgc3VyZSBob3cgbG9uZ1xuICogaXQnbGwgdGFrZSB0byBmaW5kIGl0cyB3YXkgaW50byB0aGUgc3BlYywgaWYgZXZlcilcbiAqIEBwYXJhbSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJsb2NraW5nRWxlbWVudCh0YXJnZXQpIHtcbiAgICAvKipcbiAgICAgKiBQdXNoL3BvcCB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZ0VsZW1lbnRzIHN0YWNrLlxuICAgICAqL1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIFNvbWV0aW1lcyBibG9ja2luZ0VsZW1lbnRzIHdpbGwgZmFpbCBpZiwgZm9yIGV4YW1wbGUsXG4gICAgICAgICAgICAvLyB0aGUgdGFyZ2V0IGVsZW1lbnQgaXNuJ3QgY29ubmVjdGVkIHRvIGRvY3VtZW50LmJvZHkuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHJhcmUsIGJ1dCBpdCdzIGJldHRlciB0byBmYWlsIHNpbGVudGx5IHdpdGggd2VpcmQgdGFiYmluZyBiZWhhdmlvclxuICAgICAgICAgICAgLy8gdGhhbiB0byBjcmFzaCB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzKCkucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMoKS5yZW1vdmUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gV2VsbCwgc2VtaS1zaWxlbnRseS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFt0YXJnZXRdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BFbGVtZW50KCkge1xuICAgIHJldHVybiBibG9ja2luZ0VsZW1lbnRzKCkudG9wO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJsb2NraW5nLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgaXNGb2N1c2FibGUgfSBmcm9tIFwidGFiYmFibGVcIjtcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5jb25zdCBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZSB9KSB7XG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldEVsZW1lbnQgfSk7XG4gICAgLy9jb25zdCBbbGFzdEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VTdGF0ZTxOb2RlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCwgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHt9KTtcbiAgICAvLyBXaGVuIHRoZSB0cmFwIGJlY29tZXMgYWN0aXZlLCBiZWZvcmUgd2UgbGV0IHRoZSBibG9ja2luZ0VsZW1lbnRzIGhvb2sgcnVuLFxuICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdGV2ZXIncyBjdXJyZW50bHkgZm9jdXNlZCBhbmQgc2F2ZSBpdC5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudFxuICAgICAgICAgICAgLy8gdG8gd2hhdGV2ZXIncyBjdXJyZW50bHkgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2tcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB9XG4gICAgfSwgW3RyYXBBY3RpdmUsIGVsZW1lbnRdKTtcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcbiAgICAvKipcbiAgICAgKiBBbnkgdGltZSB3ZSBhY3RpdmF0ZSBvciBkZWFjdGl2YXRlIHRoZSB0cmFwLFxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXG4gICAgICogdGhlIHRyYXAgaWYgaXQncyBhY3RpdmUsIG9yIHdoYXRldmVyIHdlJ3ZlXG4gICAgICogdHJhY2tlZCBpbiBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gaWYgbm90KVxuICAgICAqL1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0cmFwQWN0aXZlICYmIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgZXh0cmEgcXVldWVNaWNyb3Rhc2sgaXMgbmVlZGVkIGZvclxuICAgICAgICAgICAgICAgIC8vIC4uLnJlYXNvbnM/XG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaW5kRmlyc3RGb2N1c2FibGUoZWxlbWVudCk/LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJhZkhhbmRsZSA9IDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSGFuZGxlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXMgdG8gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gICAgICAgICAgICBsZXQgcmFmSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XG4gICAgY29uc3QgdXNlRm9jdXNUcmFwUHJvcHMgPSAoKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLW1vZGFsXCI6IHRyYXBBY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9LCB1c2VSZWZFbGVtZW50UHJvcHModXNlQWN0aXZlRWxlbWVudFByb3BzKHByb3BzKSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUZvY3VzVHJhcFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpbiB0aGUgZ2l2ZW4gbm9kZSwgb3IgbnVsbCBpZiBub25lIGFyZSBmb3VuZC5cbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0Rm9jdXNhYmxlKGVsZW1lbnQpIHtcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgeyBhY2NlcHROb2RlOiAobm9kZSkgPT4gKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGlzRm9jdXNhYmxlKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCkgfSk7XG4gICAgY29uc3QgZmlyc3RGb2N1c2FibGUgPSB0cmVlV2Fsa2VyLmZpcnN0Q2hpbGQoKTtcbiAgICByZXR1cm4gZmlyc3RGb2N1c2FibGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZm9jdXMtdHJhcC5qcy5tYXAiLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgYyx1c2VEZWJ1Z1ZhbHVlIGFzIGZ9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyBkLEZyYWdtZW50IGFzIHYscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6ZChkKG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9kKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PWQobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6ZH0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKHYsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKHYsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1kKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCx6PWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBIKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBaPWguZXZlbnQ7ZnVuY3Rpb24gWSgpe31mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uIHEoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIFomJihuPVoobikpLG4ucGVyc2lzdD1ZLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9JCxuLmlzRGVmYXVsdFByZXZlbnRlZD1xLG4ubmF0aXZlRXZlbnQ9bn07dmFyIEcsSj17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSz1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciB1PS0xPT09dC5pbmRleE9mKFwiLVwiKTtmb3IodmFyIG8gaW4gcj17fSxlKXt2YXIgaT1lW29dO1YmJlwiY2hpbGRyZW5cIj09PW8mJlwibm9zY3JpcHRcIj09PXR8fFwidmFsdWVcIj09PW8mJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1pfHwoXCJkZWZhdWx0VmFsdWVcIj09PW8mJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/bz1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09byYmITA9PT1pP2k9XCJcIjovb25kb3VibGVjbGljay9pLnRlc3Qobyk/bz1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3Qobyt0KSYmIXooZS50eXBlKT9vPVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdChvKT9vPW8udG9Mb3dlckNhc2UoKTp1JiZQLnRlc3Qobyk/bz1vLnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1pJiYoaT12b2lkIDApLHJbb109aSl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9ZChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9ZChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihKLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEopKSxuLiQkdHlwZW9mPWosSyYmSyhuKX07dmFyIFE9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7USYmUShuKSxHPW4uX19jfTt2YXIgWD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIEcuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sbm49XCIxNy4wLjJcIjtmdW5jdGlvbiB0bihuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gZW4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBybihuKXtyZXR1cm4gZW4obik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiB1bihuKXtyZXR1cm4hIW4uX19rJiYocChudWxsLG4pLCEwKX1mdW5jdGlvbiBvbihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBsbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxjbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxmbj12O2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjp1LHVzZUltcGVyYXRpdmVIYW5kbGU6byx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6bCx1c2VDb250ZXh0OmMsdXNlRGVidWdWYWx1ZTpmLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjprLHJlbmRlcjpCLGh5ZHJhdGU6SCx1bm1vdW50Q29tcG9uZW50QXROb2RlOnVuLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0Ol8sY3JlYXRlRmFjdG9yeTp0bixjbG9uZUVsZW1lbnQ6cm4sY3JlYXRlUmVmOmIsRnJhZ21lbnQ6dixpc1ZhbGlkRWxlbWVudDplbixmaW5kRE9NTm9kZTpvbixDb21wb25lbnQ6YSxQdXJlQ29tcG9uZW50OkUsbWVtbzpnLGZvcndhcmRSZWY6eCxmbHVzaFN5bmM6Y24sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6bG4sU3RyaWN0TW9kZTp2LFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0Ok0sbGF6eTpGLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlh9O2V4cG9ydHtubiBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4sQiBhcyByZW5kZXIsSCBhcyBoeWRyYXRlLHVuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsdG4gYXMgY3JlYXRlRmFjdG9yeSxybiBhcyBjbG9uZUVsZW1lbnQsZW4gYXMgaXNWYWxpZEVsZW1lbnQsb24gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYsY24gYXMgZmx1c2hTeW5jLGxuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLGZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxGIGFzIGxhenksWCBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiZXhwb3J0IGNvbnN0IEV2ZW50RGV0YWlsID0gU3ltYm9sKFwiZXZlbnQtZGV0YWlsXCIpO1xuZXhwb3J0IGZ1bmN0aW9uIGVuaGFuY2VFdmVudChlLCBkZXRhaWwpIHtcbiAgICBsZXQgZXZlbnQgPSBlO1xuICAgIGV2ZW50W0V2ZW50RGV0YWlsXSA9IGRldGFpbDtcbiAgICByZXR1cm4gZXZlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUdsb2JhbEhhbmRsZXIsIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5sZXQgcHVsc2UgPSAoXCJ2aWJyYXRlXCIgaW4gbmF2aWdhdG9yKSA/ICgoKSA9PiBuYXZpZ2F0b3IudmlicmF0ZSgxMCkpIDogKCgpID0+IHsgfSk7XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gZW5hYmxlL2Rpc2FibGUgYnV0dG9uIHZpYnJhdGlvbiBwdWxzZXMgb24gYW4gYXBwLXdpZGUgc2NhbGUuXG4gKlxuICpcbiAqIEBwYXJhbSBmdW5jIFRoZSBmdW5jdGlvbiB0byBydW4gd2hlbiBhIGJ1dHRvbiBpcyB0YXBwZWQuXG4gKiAoRGVmYXVsdCBpcyBgKCkgPT4gbmF2aWdhdG9yLnZpYnJhdGUoMTApYCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgaXQsIGEgbm9vcCBvdGhlcndpc2UpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRCdXR0b25WaWJyYXRlKGZ1bmMpIHtcbiAgICBwdWxzZSA9IGZ1bmM7XG59XG5mdW5jdGlvbiBleGNsdWRlcyh0YXJnZXQsIGV4Y2x1ZGUpIHtcbiAgICBpZiAoZXhjbHVkZT8uW3RhcmdldF0pXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogc2VsZWN0aW9uLmNvbnRhaW5zTm9kZSBkb2Vzbid0IGFjY291bnQgZm9yIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCxcbiAqIHNvIGhlcmUncyBhIHdvcmthcm91bmQgZm9yIHRoYXQuXG4gKlxuICogV2UgYWxzbyBvbmx5IGxvb2sgZm9yIHRoZSBzZWxlY3Rpb24gZW5kIHRvIG9ubHkgY2F0Y2ggdGhlXG4gKiBlc3NlbnNlIG9mIGEgbm9uLWV4aXN0YW50IFwic2VsZWN0aW9uc3RvcFwiIGV2ZW50LlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBub2RlU2VsZWN0ZWRUZXh0TGVuZ3RoKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHNlbGVjdGlvbj8ucmFuZ2VDb3VudCA/PyAwKTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdChpKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNvbnRhaW5zKHJhbmdlLmVuZENvbnRhaW5lcikgJiYgIXNlbGVjdGlvbj8uaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuLyoqXG4gKiBBZGRzIHRoZSBuZWNlc3NhcnkgZXZlbnQgaGFuZGxlcnMgdG8gY3JlYXRlIGEgXCJwcmVzc1wiLWxpa2UgZXZlbnQgZm9yXG4gKiBidXR0b25zIGFuZCBhbnl0aGluZyBlbHNlIHRoYXQncyBcImNsaWNrL3RhcC9wcmVzcy90b3VjaFwiLWFibGUuXG4gKlxuICogTm90YWJseSwgdGhlIGZvbGxvd2luZyBjYXNlcyBhcmUgY292ZXJlZDpcbiAqICogVGhlIHRhcmdldCBlbGVtZW50IGlzIHByb3Blcmx5IGZvY3VzZWQsIGV2ZW4gb24gaU9TIFNhZmFyaSAoKmVzcGVjaWFsbHkqIG9uIGlPUyBTYWZhcmkpXG4gKiAqIERvdWJsZS1jbGlja3Mgd29uJ3Qgc2VsZWN0IHRleHQuXG4gKiAqIENvbnZlcnNlbHksIG1hbnVhbGx5IHNlbGVjdGluZyB0ZXh0IHdvbid0IGludm9rZSBhIHByZXNzLlxuICogKiBLZXlib2FyZCBldmVudHMgJm1kYXNoOyBgZW50ZXJgIGltbWVkaWF0ZWx5IGludm9rZXMgdGhlIGhhbmRsZXIsIHdoaWxlIGBzcGFjZWAgaW52b2tlcyBpdCBvbiBrZXl1cC5cbiAqICogSGFwdGljIGZlZWRiYWNrIChvbiwgbGlrZSwgdGhlIG9uZSBicm93c2VyIGNvbWJpbmF0aW9uIHRoYXQgc3VwcG9ydHMgaXQgJm1kYXNoOyB0aGlzIGNhbiBiZSBkaXNhYmxlZCBhcHAtd2lkZSB3aXRoIGBzZXRCdXR0b25WaWJyYXRlYClcbiAqXG4gKiBJbiBhZGRpdGlvbiwgd2hlbiB0aGUgQ1NTIGA6YWN0aXZlYCBwc2V1ZG8tY2xhc3Mgd291bGQgYXBwbHkgdG8gYSBub3JtYWwgYnV0dG9uXG4gKiAoaS5lLiB3aGVuIGhvbGRpbmcgdGhlIHNwYWNlYmFyIG9yIGR1cmluZyBtb3VzZWRvd24pLCBgeyBcImRhdGEtcHNldWRvLWFjdGl2ZVwiOiBcInRydWVcIiB9YFxuICogaXMgYWRkZWQgdG8gdGhlIHByb3BzLiAgWW91IGNhbiBlaXRoZXIgbGV0IGl0IHBhc3MgdGhyb3VnaCBhbmQgc3R5bGUgaXQgdGhyb3VnaCBuZXcgQ1NTLFxuICogb3IgaW5zcGVjdCB0aGUgcmV0dXJuZWQgcHJvcHMgZm9yIGl0IGFuZCBhZGQgZS5nLiBhbiBgLmFjdGl2ZWAgY2xhc3MgZm9yIGV4aXN0aW5nIENTU1xuICpcbiAqIEBwYXJhbSBvbkNsaWNrU3luY1xuICogQHBhcmFtIGV4Y2x1ZGUgV2hldGhlciB0aGUgcG9seWZpbGwgc2hvdWxkbid0IGFwcGx5IChjYW4gc3BlY2lmeSBmb3Igc3BlY2lmaWMgaW50ZXJhY3Rpb25zKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJlc3NFdmVudEhhbmRsZXJzKG9uQ2xpY2tTeW5jLCBleGNsdWRlKSB7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgIC8vIEEgYnV0dG9uIGNhbiBiZSBhY3RpdmF0ZWQgaW4gbXVsdGlwbGUgd2F5cywgc28gb24gdGhlIG9mZiBjaGFuY2VcbiAgICAvLyB0aGF0IG11bHRpcGxlIGFyZSB0cmlnZ2VyZWQgYXQgb25jZSwgd2Ugb25seSAqYWN0dWFsbHkqIHJlZ2lzdGVyXG4gICAgLy8gYSBwcmVzcyBvbmNlIGFsbCBvZiBvdXIgXCJvblwiIHNpZ25hbHMgaGF2ZSB0dXJuZWQgYmFjayB0byBcIm9mZlwiLlxuICAgIC8vIFdlIGFwcHJveGltYXRlIHRoaXMgYnkganVzdCBpbmNyZW1lbnRpbmcgd2hlbiBhY3RpdmUsIGFuZFxuICAgIC8vIGRlY3JlbWVudGluZyB3aGVuIGRlYWN0aXZhdGVkLlxuICAgIC8vXG4gICAgLy8gQXMgYW4gZW1lcmdlbmN5IGZhaWxzYWZlLCB3aGVuIHRoZSBlbGVtZW50IGxvb3NlcyBmb2N1cyxcbiAgICAvLyB0aGlzIGlzIHJlc2V0IGJhY2sgdG8gMC5cbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmUsIGdldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICAvLyBJZiB3ZSB0aGUgY3VycmVudCB0ZXh0IHNlbGVjdGlvbiBjaGFuZ2VzIHRvIGluY2x1ZGUgdGhpcyBlbGVtZW50XG4gICAgLy8gRFVSSU5HIGUuZy4gYSBtb3VzZWRvd24sIHRoZW4gd2UgZG9uJ3Qgd2FudCB0aGUgbW91c2V1cCB0byBcImNvdW50XCIsIGFzIGl0IHdlcmUsXG4gICAgLy8gYmVjYXVzZSBpdHMgb25seSBwdXJwb3NlIHdhcyBzZWxlY3RpbmcgdGV4dCwgbm90IGNsaWNraW5nIGJ1dHRvbnMuXG4gICAgLy9cbiAgICAvLyBUbyBjYXRjaCB0aGlzLCBhbnkgdGltZSB0aGUgdGV4dCBzZWxlY3Rpb24gaW5jbHVkZXMgdXMgd2hpbGUgaW4gdGhlIG1pZGRsZVxuICAgIC8vIG9mIGEgY2xpY2ssIHRoaXMgZmxhZyBpcyBzZXQsIHdoaWNoIGNhbmNlbHMgdGhlIGFjdGl2YXRpb24gb2YgYSBwcmVzcy5cbiAgICAvLyBUaGUgZmxhZyBpcyByZXNldCBhbnkgdGltZSB0aGUgc2VsZWN0aW9uIGlzIGVtcHR5IG9yIHRoZSBidXR0b24gaXNcbiAgICAvLyBubyBsb25nZXIgYWN0aXZlLlxuICAgIGNvbnN0IFt0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uU3RhcnRUaW1lLCBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uU3RhcnRUaW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUdsb2JhbEhhbmRsZXIoZG9jdW1lbnQsIFwic2VsZWN0aW9uY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uU3RhcnRUaW1lKHByZXYgPT4gbm9kZVNlbGVjdGVkVGV4dExlbmd0aChnZXRFbGVtZW50KCkpID09IDAgPyBudWxsIDogcHJldiAhPSBudWxsID8gcHJldiA6IG5ldyBEYXRlKCkpO1xuICAgIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUgPT0gMClcbiAgICAgICAgICAgIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb25TdGFydFRpbWUobnVsbCk7XG4gICAgfSwgW2FjdGl2ZSA9PSAwXSk7XG4gICAgY29uc3Qgb25BY3RpdmVTdGFydCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZShhID0+ICsrYSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb25BY3RpdmVTdG9wID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKGEgPT4gTWF0aC5tYXgoMCwgLS1hKSk7XG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0aW1lRGlmZmVyZW5jZSA9ICh0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uU3RhcnRUaW1lID09IG51bGwgPyBudWxsIDogK2N1cnJlbnRUaW1lIC0gK3RleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb25TdGFydFRpbWUpO1xuICAgICAgICAvLyBJZiB3ZSdyZSBzZWxlY3RpbmcgdGV4dCAoaGV1cmlzdGljYWxseSBkZXRlcm1pbmVkIGJ5IHNlbGVjdGluZyBmb3IgbG9uZ2VyIHRoYW4gMS80IGEgc2Vjb25kLCBvciBtb3JlIHRoYW4gMiBjaGFyYWN0ZXJzKVxuICAgICAgICAvLyB0aGVuIHRoaXMgaXNuJ3QgYSBwcmVzcyBldmVudC5cbiAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgbWVhc3VyZSBnbHlwaHMgaW5zdGVhZCBvZiBjaGFyYWN0ZXJzLlxuICAgICAgICBpZiAoKHRpbWVEaWZmZXJlbmNlICYmIHRpbWVEaWZmZXJlbmNlID4gMjUwKSB8fCBub2RlU2VsZWN0ZWRUZXh0TGVuZ3RoKGdldEVsZW1lbnQoKSkgPj0gMikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRBY3RpdmUoKSA8PSAwKSB7XG4gICAgICAgICAgICBoYW5kbGVQcmVzcyhlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2tTeW5jKSB7XG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgZWxlbWVudCBpcyBmb2N1c2VkIGhlcmUgYmVjYXVzZSBvZiBpT1MgU2FmYXJpLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEl0J3MgYWx3YXlzIGlPUyBTYWZhcmkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaU9TIFNhZmFyaSAodGVzdGVkIG9uIDEyKSBkb3ducmlnaHQgcmVmdXNlcyB0byBhbGxvdyBcbiAgICAgICAgICAgIC8vIGVsZW1lbnRzIHRvIGJlIG1hbnVhbGx5IGZvY3VzZWQgVU5MRVNTIGl0IGhhcHBlbnMgd2l0aGluXG4gICAgICAgICAgICAvLyBhbiBldmVudCBoYW5kbGVyIGxpa2UgdGhpcy4gIEl0IGFsc28gZG9lc24ndCBmb2N1c1xuICAgICAgICAgICAgLy8gYnV0dG9ucyBieSBkZWZhdWx0IHdoZW4gY2xpY2tlZCwgdGFwcGVkLCBldGMuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSWYgaXQgYmVjb21lcyBwcm9ibGVtYXRpYyB0aGF0IGJ1dHRvbi1saWtlcyBleHBsaWNpdGx5IGJlY29tZVxuICAgICAgICAgICAgLy8gZm9jdXNlZCB3aGVuIHRoZXkgYXJlIHByZXNzZWQsIHRoZW4gYW4gYWx0ZXJuYXRpdmUgc29sdXRpb24gZm9yXG4gICAgICAgICAgICAvLyB0aGUgcXVlc3Rpb24gb2YgXCJob3cgZG8gbWVudSBidXR0b25zIGtlZXAgdGhlaXIgbWVudXMgb3BlblwiXG4gICAgICAgICAgICAvLyBhbmQgb3RoZXIgZm9jdXMtcmVsYXRlZCBub25zZW5zZSBuZWVkcyB0byBiZSBmaWd1cmVkIG91dC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBGb3IgaU9TIFNhZmFyaS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgZWxlbWVudD8uZm9jdXMoKTtcbiAgICAgICAgICAgIC8vIFdoYXRldmVyIHRoZSBicm93c2VyIHdhcyBnb2luZyB0byBkbyB3aXRoIHRoaXMgZXZlbnQsXG4gICAgICAgICAgICAvLyBmb3JnZXQgaXQuIFdlJ3JlIHR1cm5pbmcgaXQgaW50byBhIFwicHJlc3NcIiBldmVudC5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIEFsc28gc3RvcCBhbnlvbmUgZWxzZSBmcm9tIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LFxuICAgICAgICAgICAgLy8gc2luY2Ugd2UncmUgZXhwbGljaXRseSBoYW5kbGluZyBpdC5cbiAgICAgICAgICAgIC8vIChOb3RhYmx5LCB0aGlzIGFsbG93cyBsYWJlbHMgdG8gd3JhcCBpbnB1dHMsIHdpdGggdGhlbVxuICAgICAgICAgICAgLy8gYm90aCBoYXZpbmcgcHJlc3MgZXZlbnQgaGFuZGxlcnMsIHdpdGhvdXQgZG91YmxlLWZpcmluZylcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBIYXB0aWMgZmVlZGJhY2sgZm9yIHRoaXMgcHJlc3MgZXZlbnRcbiAgICAgICAgICAgIHB1bHNlKCk7XG4gICAgICAgICAgICAvLyBBY3R1YWxseSBjYWxsIG91ciBoYW5kbGVyLlxuICAgICAgICAgICAgb25DbGlja1N5bmMoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICAvLyBTdG9wIGRvdWJsZSBjbGlja3MgZnJvbSBzZWxlY3RpbmcgdGV4dCBpbiBhbiBjb21wb25lbnQgdGhhdCdzICpzdXBwb3NlZCogdG8gYmUgYWN0aW5nIGxpa2UgYSBidXR0b24sXG4gICAgICAgIC8vIGJ1dCBhbHNvIGRvbid0IHByZXZlbnQgdGhlIHVzZXIgZnJvbSBzZWxlY3RpbmcgdGhhdCB0ZXh0IG1hbnVhbGx5IGlmIHRoZXkgcmVhbGx5IHdhbnQgdG9cbiAgICAgICAgLy8gKHdoaWNoIHVzZXItc2VsZWN0OiBub25lIHdvdWxkIGRvLCBidXQgY2FuY2VsbGluZyBhIGRvdWJsZSBjbGljayBvbiBtb3VzZURvd24gZG9lc24ndClcbiAgICAgICAgaWYgKGUuZGV0YWlsID4gMSlcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKVxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VVcCA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDAgJiYgYWN0aXZlID4gMClcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZSgwKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VMZWF2ZSA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiBvbkJsdXI7XG4gICAgY29uc3Qgb25LZXlEb3duID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSAmJiBleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiICYmIG9uQ2xpY2tTeW5jICYmICFleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpKSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBhY3R1YWxseSBhY3RpdmF0ZSBpdCBvbiBhIHNwYWNlIGtleWRvd25cbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBkbyBwcmV2ZW50RGVmYXVsdCB0byBzdG9wIHRoZSBwYWdlIGZyb20gc2Nyb2xsaW5nLlxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiICYmICFleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvbkFjdGl2ZVN0YXJ0KGUpO1xuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbktleVVwID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIiBcIiAmJiAhZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSlcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLmRldGFpbCA+IDEpIHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKHByb3BzKSA9PiB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25CbHVyLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwLCBvbk1vdXNlTGVhdmUsIG9uQ2xpY2ssIHN0eWxlOiAodGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvblN0YXJ0VGltZSAhPSBudWxsKSA/IHsgY3Vyc29yOiBcInRleHRcIiB9IDogdW5kZWZpbmVkLCAuLi57IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IGFjdGl2ZSAmJiAodGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvblN0YXJ0VGltZSA9PSBudWxsKSA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkIH0gfSwgcHJvcHMpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQnV0dG9uKHsgdGFnLCBwcmVzc2VkLCBvblByZXNzIH0pIHtcbiAgICBmdW5jdGlvbiB1c2VBcmlhQnV0dG9uUHJvcHMoeyBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCwgdGFiSW5kZXgsIHJvbGUsIC4uLnAgfSkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4gb25QcmVzcz8uKGVuaGFuY2VFdmVudChlLCB7IHByZXNzZWQ6IHByZXNzZWQgPT0gbnVsbCA/IG51bGwgOiAhcHJlc3NlZCB9KSksIHVuZGVmaW5lZCkocCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblByb3BzID0geyByb2xlLCB0YWJJbmRleCwgXCJhcmlhLXByZXNzZWRcIjogYXJpYVByZXNzZWQgPz8gKHByZXNzZWQgPT09IHRydWUgPyBcInRydWVcIiA6IHByZXNzZWQgPT09IGZhbHNlID8gXCJmYWxzZVwiIDogdW5kZWZpbmVkKSB9O1xuICAgICAgICBjb25zdCBkaXZQcm9wcyA9IHsgLi4uYnV0dG9uUHJvcHMsIHRhYkluZGV4OiB0YWJJbmRleCA/PyAwLCByb2xlOiByb2xlID8/IFwiYnV0dG9uXCIgfTtcbiAgICAgICAgY29uc3QgYW5jaG9yUHJvcHMgPSB7IC4uLmRpdlByb3BzIH07XG4gICAgICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYnV0dG9uUHJvcHMsIHByb3BzKTtcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYW5jaG9yUHJvcHMsIHByb3BzKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoZGl2UHJvcHMsIHByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VBcmlhQnV0dG9uUHJvcHNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlSGFzRm9jdXMsIHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb24oeyBleHBhbmRlZEluZGV4LCBzZXRFeHBhbmRlZEluZGV4IH0pIHtcbiAgICBjb25zdCBbbGFzdEZvY3VzZWRJbmRleCwgc2V0TGFzdEZvY3VzZWRJbmRleCwgZ2V0TGFzdEZvY3VzZWRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY3VycmVudEZvY3VzZWRJbmRleCwgc2V0Q3VycmVudEZvY3VzZWRJbmRleCwgZ2V0Q3VycmVudEZvY3VzZWRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBzdGFibGVTZXRFeHBhbmRlZEluZGV4ID0gdXNlU3RhYmxlQ2FsbGJhY2soc2V0RXhwYW5kZWRJbmRleCA/PyAoKCkgPT4geyB9KSk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucywgdXNlTWFuYWdlZENoaWxkOiB1c2VNYW5hZ2VkQ2hpbGRTZWN0aW9uIH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoKDApKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9MYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KChtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoaSA9PiAoKGkgPz8gMCkgLSAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChpID0+ICgoaSA/PyAwKSArIDEpKTsgfSwgW10pO1xuICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiYmxvY2tcIiwgaW5kZXg6IGxhc3RGb2N1c2VkSW5kZXggPz8gMCwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0IH0pO1xuICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiBleHBhbmRlZEluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucyxcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaSwgb3BlbikgPT4gbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldPy5zZXRPcGVuRnJvbVBhcmVudChvcGVuKSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaSkgPT4gKG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXT8uZ2V0T3BlbkZyb21QYXJlbnQoKSA/PyBudWxsKVxuICAgIH0pO1xuICAgIHVzZUNoaWxkRmxhZyh7XG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiBsYXN0Rm9jdXNlZEluZGV4LFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucyxcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaSwgb3BlbikgPT4gb3BlbiAmJiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0uZm9jdXMoKSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaSkgPT4gZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbiA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJncy5pbmRleDtcbiAgICAgICAgY29uc3QgW29wZW5Gcm9tUGFyZW50LCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHsgcmFuZG9tSWQ6IGJvZHlSYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtYWNjb3JkaW9uLXNlY3Rpb24tYm9keS1cIiB9KTtcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogaGVhZFJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VIZWFkUmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRIZWFkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1oZWFkZXItXCIgfSk7XG4gICAgICAgIGxldCBvcGVuID0gKChhcmdzLm9wZW4gPz8gb3BlbkZyb21QYXJlbnQpID8/IG51bGwpO1xuICAgICAgICAvLyBUT0RPOiBDb252ZXJ0IHRvIHVzZSB1c2VNYW5hZ2VkQ2hpbGQgc28gdGhhdCB0aGlzIGhvb2sgXG4gICAgICAgIC8vIGlzIHN0YWJsZSB3aXRob3V0IChkaXJlY3RseSkgZGVwZW5kaW5nIG9uIHRoZSBvcGVuIHN0YXRlLlxuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyKHsgdGFnIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlSGFzRm9jdXNQcm9wcywgZ2V0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7XG4gICAgICAgICAgICAgICAgb25Gb2N1c2VkQ2hhbmdlZDogdXNlQ2FsbGJhY2soKGZvY3VzZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50Rm9jdXNlZEluZGV4KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEZvY3VzZWRJbmRleChvbGRJbmRleCA9PiBvbGRJbmRleCA9PT0gaW5kZXggPyBudWxsIDogaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBmb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q3VycmVudEZvY3VzZWRJbmRleCgpICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnQoKT8uZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24oeyBpbmRleCwgb3Blbiwgc2V0T3BlbkZyb21QYXJlbnQsIGdldE9wZW5Gcm9tUGFyZW50LCBmb2N1cyB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyUHJvcHMoeyBbXCJhcmlhLWV4cGFuZGVkXCJdOiBhcmlhRXhwYW5kZWQsIFtcImFyaWEtZGlzYWJsZWRcIl06IGFyaWFEaXNhYmxlZCwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoYXJncy5pbmRleCk7IH07XG4gICAgICAgICAgICAgICAgbGV0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRPcGVuRnJvbVBhcmVudCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhYmxlU2V0RXhwYW5kZWRJbmRleChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhYmxlU2V0RXhwYW5kZWRJbmRleChhcmdzLmluZGV4KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCByZXRCID0gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4OiAwIH0sIHVzZVByZXNzRXZlbnRIYW5kbGVycyhvbkNsaWNrLCB1bmRlZmluZWQpKHByb3BzKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJldDMgPSB1c2VNZXJnZWRQcm9wcygpKHVzZUhlYWRSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRCb2R5SWRQcm9wcyhcImFyaWEtY29udHJvbHNcIikoe1xuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogKGFyaWFFeHBhbmRlZCA/PyAoISFvcGVuKS50b1N0cmluZygpKSxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IChhcmlhRGlzYWJsZWQgPz8gKG9wZW4gPyBcInRydWVcIiA6IHVuZGVmaW5lZCkpLFxuICAgICAgICAgICAgICAgICAgICAuLi51c2VIYXNGb2N1c1Byb3BzKHVzZU1hbmFnZWRDaGlsZFByb3BzKHJldEIpKVxuICAgICAgICAgICAgICAgIH0pKSwgeyBvbkZvY3VzIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMocmV0Myk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4geyB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlclByb3BzIH07XG4gICAgICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMsIGluZGV4LCBvcGVuXSk7XG4gICAgICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzKHsgcm9sZSwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgICAgIGxldCByZXQxID0gdXNlUmVmZXJlbmNlZEhlYWRJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHsgcm9sZTogcm9sZSA/PyBcInJlZ2lvblwiLCAuLi5wcm9wcyB9KTtcbiAgICAgICAgICAgICAgICBsZXQgcmV0MiA9IHVzZUJvZHlSYW5kb21JZFByb3BzKHJldDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHlQcm9wc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhwYW5kZWQ6IG9wZW4sXG4gICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlcixcbiAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSxcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvblByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb24sXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY2NvcmRpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcbi8qKlxuICogQWRkcyBhbiBJRCBhbmQgXCJhcmlhLWxhYmVsbGVkYnlcIiBmb3IgdHdvIGVsZW1lbnRzLCBhbiBcImlucHV0XCIgZWxlbWVudCBhbmQgYSBcImxhYmVsXCIgZWxlbWVudC5cbiAqXG4gKiBSZXR1cm5zIHRoZSBgdXNlUmVmZXJlbmNlZElkUHJvcHNgIGhvb2tzIGlmIHlvdSBuZWVkIHRvIGFsc28gYWRkIG90aGVyIElELXJlZmVyZW5jaW5nIGF0dHJpYnV0ZXMsIGxpa2UgYGZvcmBcbiAqXG4gKiBAc2VlIHVzZUlucHV0TGFiZWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCwgYmFja3VwVGV4dCB9ID0geyBsYWJlbFByZWZpeDogXCJsYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiaW5wdXQtXCIgfSkge1xuICAgIGNvbnN0IFtsYWJlbEVsZW1lbnQsIHNldExhYmVsRWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaW5wdXRFbGVtZW50LCBzZXRJbnB1dEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRMYWJlbEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlTGFiZWxSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldExhYmVsRWxlbWVudCB9KTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldElucHV0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VJbnB1dFJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0SW5wdXRFbGVtZW50IH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlTGFiZWxSYW5kb21JZFByb3BzLCBpZDogbGFiZWxJZCwgcmFuZG9tSWQ6IGxhYmVsUmFuZG9tSWQsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogbGFiZWxQcmVmaXggfSk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VJbnB1dFJhbmRvbUlkUHJvcHMsIGlkOiBpbnB1dElkLCByYW5kb21JZDogaW5wdXRSYW5kb21JZCwgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBpbnB1dFByZWZpeCB9KTtcbiAgICBjb25zdCBsYWJlbEhhc01vdW50ZWQgPSAhIShsYWJlbEVsZW1lbnQpO1xuICAgIGNvbnN0IGlucHV0SGFzTW91bnRlZCA9ICEhKGlucHV0RWxlbWVudCk7XG4gICAgY29uc3QgdXNlR2VuZXJpY0xhYmVsTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWxMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHM6IChwcm9wcykgPT4geyByZXR1cm4gdXNlTGFiZWxSYW5kb21JZFByb3BzKHVzZUxhYmVsUmVmRWxlbWVudFByb3BzKHByb3BzKSk7IH1cbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlR2VuZXJpY0xhYmVsSW5wdXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWxJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHM6ICh7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZGJ5LCBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh1c2VJbnB1dFJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyhcImFyaWEtbGFiZWxsZWRieVwiKSh1c2VJbnB1dFJlZkVsZW1lbnRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLWxhYmVsXCI6ICghbGFiZWxIYXNNb3VudGVkID8gYmFja3VwVGV4dCA6IGFyaWFMYWJlbCkgPz8gYXJpYUxhYmVsIH0sIHByb3BzKSkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2xhYmVsSGFzTW91bnRlZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUdlbmVyaWNMYWJlbElucHV0LFxuICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbCxcbiAgICAgICAgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyxcbiAgICAgICAgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyxcbiAgICAgICAgbGFiZWxJZCxcbiAgICAgICAgaW5wdXRJZCxcbiAgICAgICAgbGFiZWxFbGVtZW50LFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIGdldExhYmVsRWxlbWVudCxcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50LFxuICAgIH07XG59XG4vKipcbiAqIEhhbmRsZXMgdGhlIGF0dHJpYnV0ZXMgYGlkYCwgYGZvcmAsIGFuZCBgYXJpYS1sYWJlbGxlZGJ5YCBmb3IgdG8gcmVsYXRlZCBlbGVtZW50cy5cbiAqXG4gKiBJdCdzIGFzc3VtZWQgdGhhdCB0aGUgbGFiZWwgaXMgYW4gYEhUTUxMYWJlbEVsZW1lbnRgLCBhbmQgdGhlIGlucHV0IGlzIHNvbWV0aGluZyBmb3Igd2hpY2hcbiAqIHRoZSBgZm9yYCBhdHRyaWJ1dGUgY2FuIHJlZmVyZW5jZS5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnB1dExhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4IH0gPSB7IGxhYmVsUHJlZml4OiBcImxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJpbnB1dC1cIiB9KSB7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dCwgdXNlR2VuZXJpY0xhYmVsTGFiZWwsIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsIGlucHV0SWQsIGxhYmVsSWQsIGlucHV0RWxlbWVudCwgZ2V0SW5wdXRFbGVtZW50LCBsYWJlbEVsZW1lbnQsIGdldExhYmVsRWxlbWVudCB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4IH0pO1xuICAgIGNvbnN0IHVzZUlucHV0TGFiZWxMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUlucHV0TGFiZWxMYWJlbCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZUlucHV0TGFiZWxMYWJlbFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aEZvciA9IHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhvdXRGb3IgPSBwcm9wcztcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyh0YWcgPT0gXCJsYWJlbFwiID8gd2l0aEZvciA6IHdpdGhvdXRGb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxJbnB1dF0pO1xuICAgIGNvbnN0IHVzZUlucHV0TGFiZWxJbnB1dCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUlucHV0TGFiZWxJbnB1dCgpIHtcbiAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlSW5wdXRMYWJlbElucHV0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyhwcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlSW5wdXRMYWJlbExhYmVsLFxuICAgICAgICB1c2VJbnB1dExhYmVsSW5wdXQsXG4gICAgICAgIGxhYmVsSWQsXG4gICAgICAgIGlucHV0SWQsXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgbGFiZWxFbGVtZW50LFxuICAgICAgICBnZXRJbnB1dEVsZW1lbnQsXG4gICAgICAgIGdldExhYmVsRWxlbWVudFxuICAgIH07XG59XG5jb25zdCBoYW5kbGVzSW5wdXQgPSAodGFnLCBsYWJlbFBvc2l0aW9uLCB3aGljaCkgPT4ge1xuICAgIGlmIChsYWJlbFBvc2l0aW9uID09PSBcInNlcGFyYXRlXCIpIHtcbiAgICAgICAgaWYgKHdoaWNoID09PSBcImlucHV0LWVsZW1lbnRcIilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlIGlmICh3aGljaCA9PT0gXCJsYWJlbC1lbGVtZW50XCIpXG4gICAgICAgICAgICByZXR1cm4gdGFnICE9IFwiaW5wdXRcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAobGFiZWxQb3NpdGlvbiA9PT0gXCJ3cmFwcGluZ1wiKSB7XG4gICAgICAgIGlmICh3aGljaCA9PT0gXCJpbnB1dC1lbGVtZW50XCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh3aGljaCA9PSBcImxhYmVsLWVsZW1lbnRcIilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG4vKipcbiAqIEhhbmRsZXMgbGFiZWwgdHlwZSAod3JhcHBpbmcgb3Igc2VwYXJhdGUpIGZvciBjaGVja2JveGVzLCByYWRpb3MsIHN3aXRjaGVzLCBldGMuXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlKHsgY2hlY2tlZCwgZGlzYWJsZWQsIGxhYmVsUG9zaXRpb24sIG9uSW5wdXQsIHJvbGUgfSkge1xuICAgIGNvbnN0IHN0YWJsZU9uSW5wdXQgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IG9uSW5wdXQ/LihlKTsgfSk7XG4gICAgY29uc3QgeyBpbnB1dElkLCBsYWJlbElkLCB1c2VJbnB1dExhYmVsSW5wdXQ6IHVzZUlMSW5wdXQsIHVzZUlucHV0TGFiZWxMYWJlbDogdXNlSUxMYWJlbCwgZ2V0TGFiZWxFbGVtZW50LCBnZXRJbnB1dEVsZW1lbnQgfSA9IHVzZUlucHV0TGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWNoZWNrYm94LWxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJhcmlhLWNoZWNrYm94LWlucHV0LVwiIH0pO1xuICAgIGNvbnN0IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50KHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VJbnB1dExhYmVsSW5wdXRQcm9wczogdXNlSUxJbnB1dFByb3BzIH0gPSB1c2VJTElucHV0KCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgLy8gb25DbGljayBhbmQgb25DaGFuZ2UgYXJlIGEgYml0IG1lc3N5LCBzbyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vICphbHdheXMqIG1ha2Ugc3VyZSB0aGF0IHRoZSB2aXNpYmxlIHN0YXRlIGlzIGNvcnJlY3RcbiAgICAgICAgLy8gYWZ0ZXIgYWxsIHRoZSBldmVudCBkdXN0IHNldHRsZXMuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8yNzQ1LFxuICAgICAgICAvLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMTg5OSNpc3N1ZWNvbW1lbnQtNTI1NjkwMTk0XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgdGFnID09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0YWcsIGNoZWNrZWRdKTtcbiAgICAgICAgcmV0dXJuIHsgZ2V0SW5wdXRFbGVtZW50OiBnZXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyB9O1xuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcbiAgICAgICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiwgQ2hyb21lIHdvbid0IGZpcmUgb25JbnB1dCBldmVudHMgZm9yIHJhZGlvIGJ1dHRvbnMgdGhhdCBhcmUgdGFiSW5kZXg9LTE/P1xuICAgICAgICAgICAgLy8gTmVlZHMgaW52ZXN0aWdhdGluZywgYnV0IG9uSW5wdXQgd29ya3MgZmluZSBpbiBGaXJlZm94XG4gICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoZGlzYWJsZWQgfHwgIWhhbmRsZXNJbnB1dCh0YWcsIGxhYmVsUG9zaXRpb24sIFwiaW5wdXQtZWxlbWVudFwiKSA/IHVuZGVmaW5lZCA6IHN0YWJsZU9uSW5wdXQsIHVuZGVmaW5lZCkoe30pO1xuICAgICAgICAgICAgaWYgKHRhZyA9PSBcImlucHV0XCIpXG4gICAgICAgICAgICAgICAgcHJvcHMub25JbnB1dCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwcm9wcyA9IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VJTElucHV0UHJvcHMocHJvcHMpKTtcbiAgICAgICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09IFwid3JhcHBpbmdcIikge1xuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhlIHdyYXBwZWQgbGFiZWwgaGFuZGxlcyBhbGwgaW50ZXJhY3Rpb25zLFxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoaXMgZWxlbWVudCBjYW4ndCBiZSBpbnRlcmFjdGVkIHdpdGhcbiAgICAgICAgICAgICAgICAvLyBldmVuIGlmIGl0J3MgYW4gaW5wdXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwcm9wcy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkZvY3VzID0gZSA9PiBnZXRMYWJlbEVsZW1lbnQoKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IHJvbGU7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWNoZWNrZWRcIl0gPSBjaGVja2VkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBsYWJlbCBjbGlja3MgY2FuJ3QgYWZmZWN0IHRoZSBjaGVja2JveCB3aGlsZSBpdCdzIGRpc2FibGVkXG4gICAgICAgICAgICBwcm9wcy5vbkNsaWNrID0gZGlzYWJsZWQgPyAoKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KSA6IHByb3BzLm9uQ2xpY2s7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShwMCwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUlMSW5wdXQsIHJvbGUsIGxhYmVsUG9zaXRpb24sIGRpc2FibGVkLCBjaGVja2VkXSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUlucHV0TGFiZWxMYWJlbFByb3BzOiB1c2VJTExhYmVsUHJvcHMgfSA9IHVzZUlMTGFiZWwoeyB0YWcgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xuICAgICAgICAgICAgbGV0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKGRpc2FibGVkIHx8ICFoYW5kbGVzSW5wdXQodGFnLCBsYWJlbFBvc2l0aW9uLCBcImxhYmVsLWVsZW1lbnRcIikgPyB1bmRlZmluZWQgOiBzdGFibGVPbklucHV0LCB1bmRlZmluZWQpKHt9KTtcbiAgICAgICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09IFwid3JhcHBpbmdcIikge1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy5yb2xlID0gcm9sZTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBkaXNhYmxlZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1jaGVja2VkXCJdID0gY2hlY2tlZC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIG9uZSBjYXNlIHdoZXJlIHRoZXJlJ3MgYWxtb3N0IG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICAgICAgICAvLyBUaGUgbW9zdCBub3JtYWwgY2FzZSB3aGVyZSBldmVyeXRoaW5nIGFjdHMgYWNjb3JkaW5nIG5vcm1hbCBIVE1MIG1lY2hhbmljcy5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEp1c3QgbWFrZSBzdXJlIHRoYXQgbGFiZWwgY2xpY2tzIGNhbid0IGFmZmVjdCB0aGUgY2hlY2tib3ggd2hpbGUgaXQncyBkaXNhYmxlZFxuICAgICAgICAgICAgbmV3UHJvcHMub25DbGljayA9IGRpc2FibGVkID8gKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfSkgOiBuZXdQcm9wcy5vbkNsaWNrO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHVzZUlMTGFiZWxQcm9wcyhwMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzIH07XG4gICAgfSwgW3VzZUlMTGFiZWwsIGRpc2FibGVkLCBjaGVja2VkLCByb2xlLCBsYWJlbFBvc2l0aW9uXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LFxuICAgICAgICB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQsXG4gICAgICAgIGdldExhYmVsRWxlbWVudCxcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYWJlbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VDaGVja2JveExpa2UgfSBmcm9tIFwiLi91c2UtbGFiZWxcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQ2hlY2tib3goeyBsYWJlbFBvc2l0aW9uLCBjaGVja2VkLCBvbklucHV0LCBkaXNhYmxlZCB9KSB7XG4gICAgY29uc3Qgb25JbnB1dEVuaGFuY2VkID0gKGUpID0+IG9uSW5wdXQ/LihlbmhhbmNlRXZlbnQoZSwgeyBjaGVja2VkOiAhY2hlY2tlZCB9KSk7XG4gICAgY29uc3QgeyBnZXRJbnB1dEVsZW1lbnQsIGdldExhYmVsRWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQgfSA9IHVzZUNoZWNrYm94TGlrZSh7IGNoZWNrZWQ6ICEhY2hlY2tlZCwgbGFiZWxQb3NpdGlvbiwgcm9sZTogXCJjaGVja2JveFwiLCBkaXNhYmxlZCwgb25JbnB1dDogb25JbnB1dEVuaGFuY2VkIH0pO1xuICAgIGNvbnN0IHVzZUNoZWNrYm94SW5wdXRFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IGdldElucHV0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMgfSA9IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCh7IHRhZyB9KTtcbiAgICAgICAgY29uc3QgaXNNaXhlZCA9IChjaGVja2VkID09IFwibWl4ZWRcIik7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBnZXRJbnB1dEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChpbnB1dEVsZW1lbnQgJiYgdGFnID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGlzTWl4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtpc01peGVkLCB0YWddKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnRQcm9wcyB9O1xuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMocDApO1xuICAgICAgICAgICAgcHJvcHMuY2hlY2tlZCA/Pz0gISFjaGVja2VkO1xuICAgICAgICAgICAgaWYgKHRhZyA9PSBcImlucHV0XCIpXG4gICAgICAgICAgICAgICAgcHJvcHMudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfVxuICAgIH0sIFt1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsIGNoZWNrZWQsIGxhYmVsUG9zaXRpb24sIGRpc2FibGVkXSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMgfSA9IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCh7IHRhZyB9KTtcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveExhYmVsRWxlbWVudFByb3BzIH07XG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCwgZGlzYWJsZWQsIGxhYmVsUG9zaXRpb25dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VDaGVja2JveElucHV0RWxlbWVudCxcbiAgICAgICAgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoZWNrYm94LmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRXZlbnREZXRhaWwsIGVuaGFuY2VFdmVudCB9IGZyb20gXCIuL3Byb3BzXCI7XG4vKipcbiAqXG4gKlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrYm94R3JvdXAoeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgc2hvdWxkRm9jdXNPbkNoYW5nZSwgb25VcGRhdGVDaGlsZHJlbjogb25VcGRhdGVDaGlsZHJlblVuc3RhYmxlIH0pIHtcbiAgICBjb25zdCBvblVwZGF0ZUNoaWxkcmVuID0gdXNlU3RhYmxlQ2FsbGJhY2sob25VcGRhdGVDaGlsZHJlblVuc3RhYmxlKTtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdGFiYmFibGVJbmRleCwgZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBzaG91bGRGb2N1c09uQ2hhbmdlIH0pO1xuICAgIC8vY29uc3QgW3VuY2hlY2tlZENvdW50LCBzZXRVbmhlY2tlZENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjaGVja2VkQ291bnQsIHNldENoZWNrZWRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBjaGVja2VkSW5kaWNlcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xuICAgIC8vY29uc3QgW3NlbGZJc0NoZWNrZWQsIHNldFNlbGZJc0NoZWNrZWQsIGdldFNlbGZJc0NoZWNrZWRdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IFwibWl4ZWRcIj4oZmFsc2UpO1xuICAgIGNvbnN0IGdldFNlbGZJc0NoZWNrZWRVbnN0YWJsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcGVyY2VudGFnZSA8PSAwID8gZmFsc2UgOiBwZXJjZW50YWdlID49IDEgPyB0cnVlIDogXCJtaXhlZFwiO1xuICAgIH0sIFtjaGVja2VkQ291bnQsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcbiAgICBjb25zdCBnZXRTZWxmSXNDaGVja2VkU3RhYmxlID0gdXNlU3RhYmxlQ2FsbGJhY2soZ2V0U2VsZklzQ2hlY2tlZFVuc3RhYmxlKTtcbiAgICAvLyBJZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgcGFyZW50IGNoZWNrYm94J3MgdmFsdWUsIHRoZW4gdGhpcyByZWYgaG9sZHMgYSBtZW1vcnkgb2Ygd2hhdCB2YWx1ZXMgd2VyZSBoZWxkIGJlZm9yZS5cbiAgICAvLyBPdGhlcndpc2UsIGl0J3MgbnVsbCB3aGVuIHRoZSBsYXN0IGlucHV0IHdhcyBmcm9tIGEgY2hpbGQgY2hlY2tib3guIFxuICAgIGNvbnN0IHNhdmVkQ2hlY2tlZFZhbHVlcyA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBvbkNoZWNrYm94R3JvdXBQYXJlbnRJbnB1dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZklzQ2hlY2tlZCA9IGdldFNlbGZJc0NoZWNrZWRTdGFibGUoKTtcbiAgICAgICAgaWYgKHNlbGZJc0NoZWNrZWQgPT09IHRydWUgfHwgKHNlbGZJc0NoZWNrZWQgPT09IGZhbHNlICYmIHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IGZhbHNlIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxmSXNDaGVja2VkID09PSBcIm1peGVkXCIpIHtcbiAgICAgICAgICAgIHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFuYWdlZENoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQuc2V0KGNoaWxkLmluZGV4LCBjaGlsZC5nZXRDaGVja2VkKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiB0cnVlIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPz8gdHJ1ZSB9KSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgY2hpbGQgSURzLCBhbmQgYW55IHRpbWUgYW55IG9mIHRoZW0gY2hhbmdlLCBcbiAgICAvLyBnZW5lcmF0ZSBhIG5ldyBzdHJpbmcgd2l0aCBhbGwgb2YgdGhlbSBjb25jYXRlbmF0ZWQgdG9nZXRoZXJcbiAgICAvLyAoYnV0IG9ubHkgb25jZSBwZXIgcmVuZGVyKTtcbiAgICBjb25zdCBhbGxJZHMgPSB1c2VSZWYobmV3IFNldCgpKTtcbiAgICBjb25zdCBbYXJpYUNvbnRyb2xzLCBzZXRBcmlhQ29udHJvbHNdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3VwZGF0ZUluZGV4LCBzZXRJZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IG5vdGlmeUNoZWNrZWQgPSB1c2VDYWxsYmFjaygoaW5kZXgsIGNoZWNrZWQpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICghY2hlY2tlZEluZGljZXMuY3VycmVudC5oYXMoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENvdW50KGMgPT4gKGMgKyAxKSk7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEluZGljZXMuY3VycmVudC5hZGQoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuaGFzKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHNldENoZWNrZWRDb3VudChjID0+IChjIC0gMSkpO1xuICAgICAgICAgICAgICAgIGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuZGVsZXRlKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzZXRDaGVja2VkQ291bnQsIGNoZWNrZWRJbmRpY2VzXSk7XG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHNldFNlbGZJc0NoZWNrZWQocGVyY2VudGFnZSA8PSAwID8gZmFsc2UgOiBwZXJjZW50YWdlID49IDEgPyB0cnVlIDogXCJtaXhlZFwiKVxuICAgIH0sIFtzZXRTZWxmSXNDaGVja2VkLCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoLCBjaGVja2VkQ291bnRdKTsqL1xuICAgIGNvbnN0IHVzZUNoZWNrYm94R3JvdXBQYXJlbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1jb250cm9sc1wiOiBhcmlhQ29udHJvbHMgfSwgcHJvcHMpO1xuICAgIH0sIFthcmlhQ29udHJvbHNdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRBcmlhQ29udHJvbHMoQXJyYXkuZnJvbShhbGxJZHMuY3VycmVudCkuam9pbihcIiBcIikpO1xuICAgIH0sIFt1cGRhdGVJbmRleF0pO1xuICAgIGNvbnN0IHVzZUNoZWNrYm94R3JvdXBDaGlsZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh7IGluZGV4LCB0ZXh0LCBjaGVja2VkLCBpZCwgLi4ucmVzdCB9KSB7XG4gICAgICAgIGNvbnN0IGdldENoZWNrZWQgPSB1c2VTdGFibGVHZXR0ZXIoY2hlY2tlZCk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBhbGxJZHMuY3VycmVudC5hZGQoaWQpO1xuICAgICAgICAgICAgc2V0SWRVcGRhdGVJbmRleChpID0+ICsraSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsbElkcy5jdXJyZW50LmRlbGV0ZShpZCk7XG4gICAgICAgICAgICAgICAgc2V0SWRVcGRhdGVJbmRleChpID0+ICsraSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbaWRdKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIG5vdGlmeUNoZWNrZWQoaW5kZXgsIGNoZWNrZWQpO1xuICAgICAgICB9LCBbaW5kZXgsIGNoZWNrZWRdKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IGluZGV4LCB0ZXh0LCBpZCwgZ2V0Q2hlY2tlZCwgLi4ucmVzdCB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhYmJhYmxlLFxuICAgICAgICAgICAgdXNlQ2hlY2tib3hHcm91cENoaWxkUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKSksIFt1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHNdKVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvblByb3BzLCBub3RpZnlDaGVja2VkLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFuYWdlZENoZWNrYm94ZXM6IG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgdXNlQ2hlY2tib3hHcm91cENoaWxkLFxuICAgICAgICB1c2VDaGVja2JveEdyb3VwUGFyZW50UHJvcHMsXG4gICAgICAgIHBhcmVudElzQ2hlY2tlZDogZ2V0U2VsZklzQ2hlY2tlZFVuc3RhYmxlKCksXG4gICAgICAgIHBhcmVudFBlcmNlbnRDaGVja2VkOiAoY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCksXG4gICAgICAgIG9uQ2hlY2tib3hHcm91cFBhcmVudElucHV0LFxuICAgICAgICB0YWJiYWJsZUluZGV4LFxuICAgICAgICBmb2N1czogZm9jdXNDdXJyZW50LFxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5cbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoZWNrYm94LWdyb3VwLmpzLm1hcCIsImltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQsIHVzZUZvY3VzVHJhcCwgdXNlTWVyZ2VkUHJvcHMsIHVzZVBhc3NpdmVTdGF0ZSwgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG4vKipcbiAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgZm9yIGEgbW9kYWwtbGlrZSBzb2Z0LWRpc21pc3MgaW50ZXJhY3Rpb24uXG4gKlxuICogVGhhdCBpcywgYW55IGNsaWNrcyBvciB0YXBzIG91dHNpZGUgb2YgdGhlIGdpdmVuIGNvbXBvbmVudCxcbiAqIG9yIGFueSB0aW1lIHRoZSBFc2NhcGUga2V5IGlzIHByZXNzZWQgd2l0aGluIHRoZSBjb21wb25lbnQsXG4gKiAod2l0aCB2YXJpb3VzIGJyb3dzZXIgb2RkaXRpZXMgcmVnYXJkaW5nIGNsaWNrcyBvbiBibGFuayBvciBpbmVydCBhcmVhcyBoYW5kbGVkKVxuICogdGhlIGNvbXBvbmVudCB3aWxsIHJlcXVlc3QgdG8gY2xvc2UgaXRzZWxmLlxuICpcbiAqIE9mIGNvdXJzZSwgaWYgeW91IGRvbid0IGRvIGFueXRoaW5nIGluIHRoZSBgb25DbG9zZWAgZnVuY3Rpb24sXG4gKiBpdCB3b24ndCBiZSBhIHNvZnQgZGlzbWlzcyBhbnltb3JlLlxuICpcbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2UsIGdldEVsZW1lbnRzIH0pIHtcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSk7XG4gICAgY29uc3Qgc3RhYmxlR2V0RWxlbWVudHMgPSB1c2VTdGFibGVDYWxsYmFjayhnZXRFbGVtZW50cyk7XG4gICAgY29uc3QgZ2V0T3BlbiA9IHVzZVN0YWJsZUdldHRlcihvcGVuKTtcbiAgICBjb25zdCBvbkJhY2tkcm9wQ2xpY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiBvbkJhY2tkcm9wQ2xpY2soZSkge1xuICAgICAgICBjb25zdCBkb2N1bWVudCA9IGdldEVsZW1lbnQoKT8ub3duZXJEb2N1bWVudDtcbiAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQ/LmRlZmF1bHRWaWV3O1xuICAgICAgICAvLyBCYXNpY2FsbHksIFwid2FzIHRoaXMgZXZlbnQgZmlyZWQgb24gdGhlIHJvb3QtbW9zdCBlbGVtZW50LCBvciBhdCBsZWFzdCBhbiBlbGVtZW50IG5vdCBjb250YWluZWQgYnkgdGhlIG1vZGFsP1wiXG4gICAgICAgIC8vIEVpdGhlciBjb3VsZCBiZSBob3cgdGhlIGJyb3dzZXIgaGFuZGxlcyB0aGVzZSBzb3J0cyBvZiBcImludGVyYWN0aW5nIHdpdGggbm90aGluZ1wiIGV2ZW50cy5cbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IGRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHN0YWJsZU9uQ2xvc2UoXCJiYWNrZHJvcFwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWxlbWVudHMgPSBzdGFibGVHZXRFbGVtZW50cygpO1xuICAgICAgICBpZiAoZWxlbWVudHMgJiYgZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICAgICAgICAgIGxldCBmb3VuZEluc2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSW5zaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZvdW5kSW5zaWRlQ2xpY2spXG4gICAgICAgICAgICAgICAgb25DbG9zZShcImJhY2tkcm9wXCIpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHsgdXNlQWN0aXZlRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VBY3RpdmVFbGVtZW50KHtcbiAgICAgICAgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKG5ld0VsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWxpZEZvY3VzYWJsZUVsZW1lbnRzID0gc3RhYmxlR2V0RWxlbWVudHMoKTtcbiAgICAgICAgICAgIGlmICh2YWxpZEZvY3VzYWJsZUVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbGlkRm9jdXNhYmxlRWxlbWVudHMpKVxuICAgICAgICAgICAgICAgICAgICB2YWxpZEZvY3VzYWJsZUVsZW1lbnRzID0gW3ZhbGlkRm9jdXNhYmxlRWxlbWVudHNdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGZvY3VzYWJsZSBvZiB2YWxpZEZvY3VzYWJsZUVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2FibGU/LmNvbnRhaW5zKG5ld0VsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xvc2UoXCJsb3N0LWZvY3VzXCIpO1xuICAgICAgICB9LCBbXSlcbiAgICB9KTtcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZT8ub3duZXJEb2N1bWVudDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50Py5kZWZhdWx0VmlldztcbiAgICAgICAgICAgIC8vIFNpbmNlIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbmVydCwgd2UgbGlzdGVuIGZvciBjYXB0dXJlZCBjbGlja3Mgb24gdGhlIHdpbmRvd1xuICAgICAgICAgICAgLy8gKHdlIGRvbid0IHVzZSBvbkNsaWNrIHNpbmNlIHRoYXQgZG9lc24ndCBmaXJlIHdoZW4gY2xpY2tlZCBvbiBlbXB0eS9pbmVydCBhcmVhcylcbiAgICAgICAgICAgIC8vIE5vdGU6IFdlIG5lZWQgYSAqc2VwYXJhdGUqIHRvdWNoIGV2ZW50IG9uIG1vYmlsZSBTYWZhcmksIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGl0IGRvZXNuJ3QgbGV0IGNsaWNrIGV2ZW50cyBidWJibGUgb3IgYmUgY2FwdHVyZWQgZnJvbSB0cmFkaXRpb25hbGx5IG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cyxcbiAgICAgICAgICAgIC8vIGJ1dCB0b3VjaCBldmVudHMgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAgICAgIGNvbnN0IG1vdXNlRG93biA9IChlKSA9PiB7IGlmIChnZXRPcGVuKCkpXG4gICAgICAgICAgICAgICAgb25CYWNrZHJvcENsaWNrKGUpOyB9O1xuICAgICAgICAgICAgY29uc3QgdG91Y2hTdGFydCA9IChlKSA9PiB7IGlmIChnZXRPcGVuKCkpXG4gICAgICAgICAgICAgICAgb25CYWNrZHJvcENsaWNrKGUpOyB9O1xuICAgICAgICAgICAgY29uc3Qga2V5RG93biA9IChlKSA9PiB7IGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uQ2xvc2UoXCJlc2NhcGVcIik7XG4gICAgICAgICAgICB9IH07XG4gICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VEb3duLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgICAgICB3aW5kb3c/LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnQsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHdpbmRvdz8uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bik7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd24pO1xuICAgICAgICAgICAgICAgIHdpbmRvdz8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgICAgd2luZG93Py5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIHJldHVybiB7IHVzZVNvZnREaXNtaXNzUHJvcHM6IHVzZUNhbGxiYWNrKHByb3BzID0+IHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyh1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpKSwgW3VzZUFjdGl2ZUVsZW1lbnRQcm9wcywgdXNlUmVmRWxlbWVudFByb3BzXSkgfTtcbn1cbi8qKlxuICogQSBnZW5lcmljIG1vZGFsIGhvb2ssIHVzZWQgYnkgbW9kYWwgZGlhbG9ncywgYnV0IGNhbiBhbHNvXG4gKiBiZSB1c2VkIGJ5IGFueXRoaW5nIHRoYXQncyBtb2RhbCB3aXRoIGEgYmFja2Ryb3AuXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTW9kYWwoeyBvcGVuLCBvbkNsb3NlIH0pIHtcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSk7XG4gICAgY29uc3QgW21vZGFsRGVzY3JpYmVkQnlCb2R5LCBzZXRNb2RhbERlc2NyaWJlZEJ5Qm9keV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlSGlkZVNjcm9sbChvcGVuKTtcbiAgICBjb25zdCB7IGlkOiBtb2RhbElkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VNb2RhbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VNb2RhbFJlZmVyZW5jaW5nSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tb2RhbC1cIiB9KTtcbiAgICBjb25zdCB7IGlkOiBib2R5SWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZUJvZHlJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlQm9keVJlZmVyZW5jaW5nSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tb2RhbC1ib2R5LVwiIH0pO1xuICAgIGNvbnN0IHsgaWQ6IHRpdGxlSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRpdGxlSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVRpdGxlUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLXRpdGxlLVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VNb2RhbFJlZkVsZW1lbnQsIGdldEVsZW1lbnQ6IGdldE1vZGFsRWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgY29uc3QgeyB1c2VTb2Z0RGlzbWlzc1Byb3BzIH0gPSB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UsIGdldEVsZW1lbnRzOiBnZXRNb2RhbEVsZW1lbnQgfSk7XG4gICAgY29uc3QgdXNlTW9kYWxCYWNrZHJvcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3AoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3BQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJVcDogKCkgPT4gc3RhYmxlT25DbG9zZShcImJhY2tkcm9wXCIpIH0sIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlTW9kYWxQcm9wcyA9IGZ1bmN0aW9uICh7IFwiYXJpYS1tb2RhbFwiOiBhcmlhTW9kYWwsIHJvbGUsIC4uLnAwIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VGb2N1c1RyYXBQcm9wcyB9ID0gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZTogb3BlbiB9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VUaXRsZVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtbGFiZWxsZWRieVwiKShwMCk7XG4gICAgICAgIGNvbnN0IHAyID0gdXNlTW9kYWxJZFByb3BzKHAxKTtcbiAgICAgICAgY29uc3QgcEZpbmFsID0gdXNlQm9keVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikocDIpO1xuICAgICAgICByZXR1cm4gdXNlRm9jdXNUcmFwUHJvcHModXNlU29mdERpc21pc3NQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHVzZU1vZGFsUmVmRWxlbWVudCh7IHJvbGU6IFwiZGlhbG9nXCIgfSksIG1vZGFsRGVzY3JpYmVkQnlCb2R5ID8gcEZpbmFsIDogcDIpKSk7XG4gICAgfTtcbiAgICBjb25zdCB1c2VNb2RhbFRpdGxlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgdXNlTW9kYWxUaXRsZVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlVGl0bGVJZFByb3BzKHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxUaXRsZVByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZU1vZGFsQm9keSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQm9keSh7IGRlc2NyaXB0aXZlIH0pIHtcbiAgICAgICAgc2V0TW9kYWxEZXNjcmliZWRCeUJvZHkoZGVzY3JpcHRpdmUpO1xuICAgICAgICBjb25zdCB1c2VNb2RhbEJvZHlQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHVzZUJvZHlJZFByb3BzKHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxCb2R5UHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTW9kYWxQcm9wcyxcbiAgICAgICAgdXNlTW9kYWxUaXRsZSxcbiAgICAgICAgdXNlTW9kYWxCb2R5LFxuICAgICAgICB1c2VNb2RhbEJhY2tkcm9wXG4gICAgfTtcbn1cbi8qKlxuICogQWxsb3dzIGZvciBoaWRpbmcgdGhlIHNjcm9sbCBiYXIgb2YgdGhlIHJvb3QgSFRNTCBlbGVtZW50XG4gKiB3aXRob3V0IHNoaWZ0aW5nIHRoZSBsYXlvdXQgb2YgdGhlIHBhZ2UgbW9yZSB0aGFuIGFkZGluZyBhIGZvdyBwaXhlbHNcbiAqIG9mIHBhZGRpbmcgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBuZWNlc3NhcnkuXG4gKiBAcGFyYW0gaGlkZVNjcm9sbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSGlkZVNjcm9sbChoaWRlU2Nyb2xsKSB7XG4gICAgY29uc3QgW2dldFNjcm9sbGJhcldpZHRoLCBzZXRTY3JvbGxiYXJXaWR0aF0gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2dldFNjcm9sbGJhckhlaWdodCwgc2V0U2Nyb2xsYmFySGVpZ2h0XSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaGlkZVNjcm9sbCkge1xuICAgICAgICAgICAgLy8gV2hlbiBzY3JvbGxpbmcgaXMgcmVzdW1lZCwgd2UnbGwgbmVlZCB0byByZXN0b3JlIHRoZSBvcmlnaW5hbCBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBpbmZvcm1hdGlvbiBhcm91bmRcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgLy8gTWVhc3VyZSB0aGUgd2lkdGggb2YgdGhlIHBhZ2UgKG1pbnVzIHRoZSBzY3JvbGxiYXIpXG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRoU2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodFdpdGhTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgLy8gQXBwbHkgYSBjbGFzcyB0aGF0IGhpZGVzIHRoZSBzY3JvbGxiYXIuXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XG4gICAgICAgICAgICAvLyBJbiBjYXNlIG11bHRpcGxlIHRoaW5ncyBhcmUgbG9ja2luZyBzY3JvbGwsIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgYXJlIGRvaW5nIHRoYXRcbiAgICAgICAgICAgIC8vIChqdXN0IGFkZCAxIG9uIGVuYWJsZSwgc3VidHJhY3QgMSBvbiBkaXNhYmxlKVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgLy8gTWVhc3VyZSB0aGUgbmV3IHdpZHRoIHdpdGhvdXQgYSBzY3JvbGxiYXIgXG4gICAgICAgICAgICAvLyBzbyB3ZSBjYW4gdGFrZSB0aGUgZGlmZmVyZW5jZSBhcyB0aGUgc2Nyb2xsYmFyIHdpZHRoLlxuICAgICAgICAgICAgbGV0IHdpZHRoV2l0aG91dFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgICAgICAgICAgIGxldCBoZWlnaHRXaXRob3V0U2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGxldCBzY3JvbGxiYXJXaWR0aCA9ICh3aWR0aFdpdGhvdXRTY3JvbGxCYXIgLSB3aWR0aFdpdGhTY3JvbGxCYXIpO1xuICAgICAgICAgICAgbGV0IHNjcm9sbGJhckhlaWdodCA9IChoZWlnaHRXaXRob3V0U2Nyb2xsQmFyIC0gaGVpZ2h0V2l0aFNjcm9sbEJhcik7XG4gICAgICAgICAgICAvLyBGYWlsc2FmZSAtLSBpZiB0aGlzIG1lYXN1cmluZyB0cmljayBkb2VzIHNvbWV0aGluZyB1bmV4cGVjdGVkLCBqdXN0IGlnbm9yZSBpdFxuICAgICAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoID4gODApXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyV2lkdGggPSAwO1xuICAgICAgICAgICAgaWYgKHNjcm9sbGJhckhlaWdodCA+IDgwKVxuICAgICAgICAgICAgICAgIHNjcm9sbGJhckhlaWdodCA9IDA7XG4gICAgICAgICAgICAvLyBNYWtlIG91ciBtZWFzdXJlbWVudHMgYXZhaWxhYmxlIGFzIENTUyBwcm9wZXJ0aWVzIGZvciBnZW5lcmFsIHVzZVxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbGJhci13aWR0aFwiLCBgJHtzY3JvbGxiYXJXaWR0aH1weGApO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbGJhci1oZWlnaHRcIiwgYCR7c2Nyb2xsYmFySGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsc3RvcC10b3BcIiwgYCR7b3JpZ2luYWxTY3JvbGxUb3B9cHhgKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxzdG9wLWxlZnRcIiwgYCR7b3JpZ2luYWxTY3JvbGxMZWZ0fXB4YCk7XG4gICAgICAgICAgICBzZXRTY3JvbGxiYXJXaWR0aChzY3JvbGxiYXJXaWR0aCk7XG4gICAgICAgICAgICBzZXRTY3JvbGxiYXJIZWlnaHQoc2Nyb2xsYmFySGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVW5kbyBhbGwgdGhlIHRoaW5ncyB3ZSBqdXN0IGRpZFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID0gKCsoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gfHwgXCIwXCIpIC0gMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2Ugd2VyZSB0aGUgbGFzdCBzY3JvbGwtbG9ja2luZyB0aGluZyB0byBzdG9wLCB0aGVuIHJlbW92ZSB0aGUgY2xhc3MgdGhhdCBzdG9wcyBzY3JvbGxpbmcuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbC1oaWRlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZG9jdW1lbnQtc2Nyb2xsLWhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxzbywgcmVzdG9yZSB0aGUgb3JpZ2luYWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvIHRoaXMgYnkgZm9yY2luZyB0aGUgc2Nyb2xsIGJlaGF2aW9yIHRvIG5vdCBiZSBzbW9vdGhcbiAgICAgICAgICAgICAgICAgICAgLy8gKGl0J3MgaW5zdGFudCBpZiBub3RoaW5nIGlzIHNldCB0byBzbW9vdGgsIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3NvbS12aWV3LyNzY3JvbGxpbmcpLFxuICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcsIHRoZW4gcmVzdG9yaW5nIHRoZSBvcmlnaW5hbCBzY3JvbGwgYmVoYXZpb3IgXG4gICAgICAgICAgICAgICAgICAgIC8vICh3aGljaCB3YXMgcHJvYmFibHkgYWxyZWFkeSBhdXRvIGFueXdheSwgYnV0IGp1c3QgdG8gYmUgc2FmZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxCZWhhdmlvciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvcjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUbyh7IHRvcDogb3JpZ2luYWxTY3JvbGxUb3AsIGxlZnQ6IG9yaWdpbmFsU2Nyb2xsTGVmdCwgYmVoYXZpb3I6IFwiYXV0b1wiIH0pO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBvcmlnaW5hbFNjcm9sbEJlaGF2aW9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbaGlkZVNjcm9sbF0pO1xuICAgIHJldHVybiB7IGdldFNjcm9sbGJhcldpZHRoLCBnZXRTY3JvbGxiYXJIZWlnaHQgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tb2RhbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSBcIi4vdXNlLW1vZGFsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYURpYWxvZyh7IG9wZW4sIG9uQ2xvc2UgfSkge1xuICAgIC8vIFRPRE86IERpZmZlcmVuY2VzIGJldHdlZW4gZGlhbG9nIGFuZCBtb2RhbCBnbyBoZXJlLCBwcmVzdW1hYmx5LlxuICAgIC8vIE5vbi1tb2RhbCBkaWFsb2dzIG5lZWQgdG8gYmUgYWJsZSB0byBiZSByZXBvc2l0aW9uZWQsIGV0Yy5cbiAgICBjb25zdCB7IHVzZU1vZGFsQmFja2Ryb3AsIHVzZU1vZGFsQm9keSwgdXNlTW9kYWxQcm9wcywgdXNlTW9kYWxUaXRsZSB9ID0gdXNlTW9kYWwoeyBvcGVuLCBvbkNsb3NlIH0pO1xuICAgIGNvbnN0IHVzZURpYWxvZ0JhY2tkcm9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9ID0gdXNlTW9kYWxCYWNrZHJvcCgpO1xuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dCYWNrZHJvcFByb3BzOiB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfTtcbiAgICB9LCBbdXNlTW9kYWxCYWNrZHJvcF0pO1xuICAgIGNvbnN0IHVzZURpYWxvZ0JvZHkgPSB1c2VDYWxsYmFjaygoeyBkZXNjcmlwdGl2ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxCb2R5UHJvcHMgfSA9IHVzZU1vZGFsQm9keSh7IGRlc2NyaXB0aXZlIH0pO1xuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dCb2R5UHJvcHM6IHVzZU1vZGFsQm9keVByb3BzIH07XG4gICAgfSwgW3VzZU1vZGFsQmFja2Ryb3BdKTtcbiAgICBjb25zdCB1c2VEaWFsb2dQcm9wcyA9IHVzZU1vZGFsUHJvcHM7XG4gICAgY29uc3QgdXNlRGlhbG9nVGl0bGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxUaXRsZVByb3BzIH0gPSB1c2VNb2RhbFRpdGxlKCk7XG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ1RpdGxlUHJvcHM6IHVzZU1vZGFsVGl0bGVQcm9wcyB9O1xuICAgIH0sIFt1c2VNb2RhbFRpdGxlXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRGlhbG9nUHJvcHMsXG4gICAgICAgIHVzZURpYWxvZ1RpdGxlLFxuICAgICAgICB1c2VEaWFsb2dCb2R5LFxuICAgICAgICB1c2VEaWFsb2dCYWNrZHJvcFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZGlhbG9nLmpzLm1hcCIsImltcG9ydCB7IHVzZUhhc0ZvY3VzLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcbmltcG9ydCB7IHVzZUdlbmVyaWNMYWJlbCB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94TXVsdGkoeyAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMsIGdldEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoe30pO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCBjdXJyZW50VHlwZWFoZWFkLCBmb2N1c0N1cnJlbnQsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0Rm9jdXNlZElubmVyIH0pO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCBbc2hpZnRIZWxkLCBzZXRTaGlmdEhlbGQsIGdldFNoaWZ0SGVsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdHlwZWFoZWFkSW5Qcm9ncmVzcyA9ICghIWN1cnJlbnRUeXBlYWhlYWQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0VHlwZWFoZWFkSW5Qcm9ncmVzcyh0eXBlYWhlYWRJblByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgIH0sIFt0eXBlYWhlYWRJblByb2dyZXNzLCBjaGlsZENvdW50XSk7XG4gICAgY29uc3QgdXNlTGlzdGJveE11bHRpSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gaW5mby5zZWxlY3RlZDtcbiAgICAgICAgY29uc3QgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBnZXRTZWxlY3RlZCA9IHVzZVN0YWJsZUdldHRlcihzZWxlY3RlZCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhpbmZvLm9uU2VsZWN0ID8/ICgoKSA9PiB7IH0pKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IC4uLmluZm8sIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3MgfSk7XG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0U2hpZnRIZWxkKCkpIHtcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkOiB0cnVlIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0YWJiYWJsZV0pO1xuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtUHJvcHMsIHRhYmJhYmxlIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUl0ZW1Qcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB1c2VQcmVzc0V2ZW50SGFuZGxlcnMoaW5mby5kaXNhYmxlZCA/IG51bGwgOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgLi4uZSwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZDogIWdldFNlbGVjdGVkKCkgfSB9KTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LCB7IHNwYWNlOiB0eXBlYWhlYWRJblByb2dyZXNzID8gXCJleGNsdWRlXCIgOiB1bmRlZmluZWQgfSkoe30pO1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2V0c2l6ZVwiXSA9IChjaGlsZENvdW50KS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHRhYmJhYmxlID8/IGZhbHNlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGluZm8uZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCBwcm9wcykpKTtcbiAgICAgICAgfVxuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCBjaGlsZENvdW50LCB0eXBlYWhlYWRJblByb2dyZXNzXSk7XG4gICAgY29uc3QgdXNlTGlzdGJveE11bHRpTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlMYWJlbCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpTGFiZWxQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUxhYmVsUHJvcHMgfTtcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcbiAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtLCB1c2VMaXN0Ym94TXVsdGlQcm9wcywgdXNlTGlzdGJveE11bHRpTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIGZvY3VzOiBmb2N1c0N1cnJlbnQsIG1hbmFnZWRDaGlsZHJlbiB9O1xuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aVByb3BzKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcbiAgICAgICAgcHJvcHNbXCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiXSA9IFwidHJ1ZVwiO1xuICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VIYXNGb2N1c1Byb3BzKHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25Gb2N1c091dCB9LCBwcm9wcykpKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXG4gICAgICAgIHNldFNoaWZ0SGVsZCh0cnVlKTsgfVxuICAgIGZ1bmN0aW9uIG9uS2V5VXAoZSkgeyBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKVxuICAgICAgICBzZXRTaGlmdEhlbGQoZmFsc2UpOyB9XG4gICAgZnVuY3Rpb24gb25Gb2N1c091dChlKSB7IHNldFNoaWZ0SGVsZChmYWxzZSk7IH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0Ym94LW11bHRpLmpzLm1hcCIsImltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQsIHVzZUNoaWxkRmxhZywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlR2VuZXJpY0xhYmVsIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hTaW5nbGUoeyBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgc2VsZWN0aW9uTW9kZSwgLi4uYXJncyB9KSB7XG4gICAgY29uc3QgW2FueUl0ZW1zRm9jdXNlZCwgc2V0QW55SXRlbXNGb2N1c2VkLCBnZXRBbnlJdGVtc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBnZXRJbnB1dEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtbGlzdGJveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1saXN0Ym94LVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRBbnlJdGVtc0ZvY3VzZWQgfSk7XG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xuICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2sob25TZWxlY3QgPz8gKCgpID0+IHsgfSkpO1xuICAgIC8vIFRyYWNrIHdoZXRoZXIgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgbGlzdCBib3ggcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gV2hlbiBpdCdzIG5vdCwgd2UgcmVzZXQgdGhlIHRhYmJhYmxlIGluZGV4IGJhY2sgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50LlxuICAgIGNvbnN0IHsgdXNlQWN0aXZlRWxlbWVudFByb3BzIH0gPSB1c2VBY3RpdmVFbGVtZW50KHsgb25BY3RpdmVFbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoYWN0aXZlRWxlbWVudCkgPT4gc2V0QW55SXRlbXNGb2N1c2VkKCEhKGdldElucHV0RWxlbWVudCgpPy5jb250YWlucyhhY3RpdmVFbGVtZW50KSkpLCBbXSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhbnlJdGVtc0ZvY3VzZWQpXG4gICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoc2VsZWN0ZWRJbmRleCk7XG4gICAgfSwgW2FueUl0ZW1zRm9jdXNlZCwgc2VsZWN0ZWRJbmRleCwgbmF2aWdhdGVUb0luZGV4XSk7XG4gICAgdXNlQ2hpbGRGbGFnKHtcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgc2V0Q2hpbGRGbGFnOiAoaSwgc2VsZWN0ZWQpID0+IG1hbmFnZWRDaGlsZHJlbltpXT8uc2V0U2VsZWN0ZWQoc2VsZWN0ZWQpLFxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiAobWFuYWdlZENoaWxkcmVuW2ldPy5nZXRTZWxlY3RlZCgpID8/IG51bGwpXG4gICAgfSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgIH0sIFtzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoXSk7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUl0ZW0gPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZCwgLi4uaW5mbyB9KTtcbiAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZm8uaW5kZXg7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgdGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZSA9PSBcImZvY3VzXCIpIHtcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkSW5kZXg6IGluZGV4IH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0YWJiYWJsZSwgc2VsZWN0aW9uTW9kZSwgaW5kZXhdKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveFNpbmdsZUl0ZW1Qcm9wcywgdGFiYmFibGUsIHNlbGVjdGVkLCBnZXRTZWxlY3RlZCB9O1xuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycyhpbmZvLmRpc2FibGVkID8gbnVsbCA6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LCB1bmRlZmluZWQpKHt9KTtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm9wdGlvblwiO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNldHNpemVcIl0gPSAoY2hpbGRDb3VudCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9IChzZWxlY3RlZCA/PyBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpbmZvLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgc2VsZWN0aW9uTW9kZSwgY2hpbGRDb3VudF0pO1xuICAgIGNvbnN0IHVzZUxpc3Rib3hTaW5nbGVMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcbiAgICAgICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzIH07XG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XG4gICAgcmV0dXJuIHsgdXNlTGlzdGJveFNpbmdsZUl0ZW0sIHVzZUxpc3Rib3hTaW5nbGVQcm9wcywgdXNlTGlzdGJveFNpbmdsZUxhYmVsLCB0YWJiYWJsZUluZGV4LCBmb2N1czogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBtYW5hZ2VkQ2hpbGRyZW4gfTtcbiAgICBmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibGlzdGJveFwiO1xuICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHVzZUFjdGl2ZUVsZW1lbnRQcm9wcyhwcm9wcykpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdGJveC1zaW5nbGUuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlLCB1c2VUaW1lb3V0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VTb2Z0RGlzbWlzcyB9IGZyb20gXCIuL3VzZS1tb2RhbFwiO1xuLyoqXG4gKiBBIG1lbnUgaXMgYSBwb3B1cCBjb250cm9sIHRoYXQgY29udGFpbnMgYSBsaXN0IG9mIG1lbnUgaXRlbXMsIGFuZCB0aGF0J3MgaXQuXG4gKiBJdCBoYXMgdmVyeSB3ZWxsLWRlZmluZWQgbG9naWMgZm9yIG1hbmFnaW5nIHRob3NlIGl0ZW1zIGFzIHRoZSBtZW51J3Mgc3RhdGUgY2hhbmdlcy5cbiAqXG4gKiBBIE1lbnVCYXNlIGlzIGp1c3QgdGhlIFwicG9wdXBcIiBwYXJ0IHdpdGhvdXQgdGhlIFwibGlzdCBvZiBtZW51IGl0ZW1zXCIgcGFydC4gSXQgY2FuXG4gKiAocmVhbGx5LCBtdXN0KSBoYXZlIGludGVyYWN0aXZlIGNvbnRyb2xzLCBidXQgdGhlc2UgY29udHJvbHMgYXJlIGFsbG93ZWQgdG8gYmUgbW9yZVxuICogZnJlZS1mb3JtLiBUaGlzIG1lYW5zIHRoYXQsIGxpa2UgYSBkaWFsb2csIHlvdSBtdXN0IHRlbGwgdGhpcyBob29rXG4gKiB3aGVyZSB3aXRoaW4gdGhlIHBvcHVwIHRvIHNlbmQgZm9jdXMgd2hlbiBvcGVuZWQgKGZvciBhIG1lbnUgaXQncyBqdXN0IHRoZSBmaXJzdFxuICogbWVudSBpdGVtLCBidXQgd2l0aCBjdXN0b20gY29udGVudCB5b3UnbGwgbmVlZCB0byBwcm92aWRlIHRoaXMpLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbnVCYXNlKHsgc2VuZEZvY3VzV2l0aGluTWVudSwgLi4uYXJncyB9KSB7XG4gICAgY29uc3QgZ2V0U2VuZEZvY3VzV2l0aGluTWVudSA9IHVzZVN0YWJsZUdldHRlcihzZW5kRm9jdXNXaXRoaW5NZW51KTtcbiAgICBjb25zdCBbZm9jdXNUcmFwQWN0aXZlLCBzZXRGb2N1c1RyYXBBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgbGV0IG9uQ2xvc2UgPSBhcmdzLm9uQ2xvc2U7XG4gICAgbGV0IG9uT3BlbiA9IGFyZ3Mub25PcGVuO1xuICAgIGxldCBtZW51YmFyID0gYXJncy5tZW51YmFyO1xuICAgIGxldCBvcGVuID0gKG1lbnViYXIgPyB0cnVlIDogYXJncy5vcGVuKTtcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSA/PyAoKCkgPT4geyB9KSk7XG4gICAgY29uc3QgZ2V0T3BlbiA9IHVzZVN0YWJsZUdldHRlcihvcGVuKTtcbiAgICAvLyBUT0RPOiBJdCdzIGF3a3dhcmQgdGhhdCB0aGUgYnV0dG9uIGZvY3VzIHByb3BzIGFyZSBvdXQgaGVyZSB3aGVyZSB3ZSBkb24ndCBoYXZlIGl0cyB0eXBlLFxuICAgIC8vIGJ1dCBmb2N1cyBtYW5hZ2VtZW50IGlzIHN1cGVyIHNlbnNpdGl2ZSwgYW5kIGV2ZW4gd2FpdGluZyBmb3IgYSB1c2VMYXlvdXRFZmZlY3QgdG8gc3luYyBzdGF0ZSBoZXJlXG4gICAgLy8gd291bGQgYmUgdG9vIGxhdGUsIHNvIGl0IHdvdWxkIGxvb2sgbGlrZSB0aGVyZSdzIGEgbW9tZW50IGJldHdlZW4gbWVudSBmb2N1cyBsb3N0IGFuZCBidXR0b24gZm9jdXMgZ2FpbmVkXG4gICAgLy8gd2hlcmUgbm90aGluZyBpcyBmb2N1c2VkLiBcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcywgZ2V0TGFzdEZvY3VzZWRJbm5lcjogZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyIH0gPSB1c2VIYXNGb2N1cyh7IC8qb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZDogb25NZW51T3JCdXR0b25Mb3N0TGFzdEZvY3VzKi99KTtcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZUJ1dHRvbkhhc0ZvY3VzUHJvcHMsIGdldExhc3RGb2N1c2VkSW5uZXI6IGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoeyAvKm9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQ6IG9uTWVudU9yQnV0dG9uTG9zdExhc3RGb2N1cyovfSk7XG4gICAgY29uc3QgW29wZW5lckVsZW1lbnQsIHNldE9wZW5lckVsZW1lbnQsIGdldE9wZW5lckVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VNZW51QmFzZUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VNZW51QmFzZUlkUmVmZXJlbmNpbmdQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tZW51LVwiIH0pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0QnV0dG9uRWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VCdXR0b25SZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldE9wZW5lckVsZW1lbnQgfSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRNZW51RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgY29uc3QgeyB1c2VTb2Z0RGlzbWlzc1Byb3BzIH0gPSB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UsIGdldEVsZW1lbnRzOiAoKSA9PiAoW2dldEJ1dHRvbkVsZW1lbnQoKSwgZ2V0TWVudUVsZW1lbnQoKV0pIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEZvY3VzVHJhcEFjdGl2ZShvcGVuKTtcbiAgICB9LCBbb3Blbl0pO1xuICAgIGNvbnN0IHVzZU1lbnVCYXNlUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiICYmIGdldE9wZW4oKSkge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VTb2Z0RGlzbWlzc1Byb3BzKHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcyh1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZW51QmFzZUlkUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biB9LCAocHJvcHMpKSkpKSk7XG4gICAgfSwgW3VzZVNvZnREaXNtaXNzUHJvcHMsIHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcywgdXNlTWVudUJhc2VSZWZFbGVtZW50UHJvcHMsIHVzZU1lbnVCYXNlSWRQcm9wc10pO1xuICAgIGNvbnN0IHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZUJ1dHRvblJlZkVsZW1lbnRQcm9wcyh1c2VCdXR0b25IYXNGb2N1c1Byb3BzKHVzZU1lbnVCYXNlSWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1jb250cm9sc1wiKShwcm9wcykpKTtcbiAgICB9LCBbdXNlQnV0dG9uSGFzRm9jdXNQcm9wcywgdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzLCB1c2VNZW51QmFzZUlkUmVmZXJlbmNpbmdQcm9wc10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbmRGb2N1c1dpdGhpbk1lbnUgPSBnZXRTZW5kRm9jdXNXaXRoaW5NZW51KCk7XG4gICAgICAgIGlmIChmb2N1c1RyYXBBY3RpdmUpIHtcbiAgICAgICAgICAgIHNlbmRGb2N1c1dpdGhpbk1lbnU/LigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvY3VzVHJhcEFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIoKSlcbiAgICAgICAgICAgICAgICBnZXRPcGVuZXJFbGVtZW50KCk/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG51bGwsIHNvIHdlJ3ZlIG9ubHkganVzdCBtb3VudGVkIGFuZCBzaG91bGRuJ3QgZm9jdXMgb3Vyc2VsdmVzLlxuICAgICAgICB9XG4gICAgfSwgW2ZvY3VzVHJhcEFjdGl2ZV0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1lbnVTZW50aW5lbDogdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VTZW50aW5lbFByb3BzOiB1c2VNZW51U2VudGluZWxQcm9wcywgLi4ucmVzdCB9ID0gdXNlRm9jdXNTZW50aW5lbCh7IG9wZW4sIG9uQ2xvc2U6IChvbkNsb3NlID8/ICgoKSA9PiB7IH0pKSwgc2VuZEZvY3VzV2l0aGluTWVudSB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IHVzZU1lbnVTZW50aW5lbFByb3BzLCAuLi5yZXN0IH07XG4gICAgICAgIH0sIFtvcGVuLCBvbkNsb3NlLCBzZW5kRm9jdXNXaXRoaW5NZW51XSksXG4gICAgICAgIGZvY3VzVHJhcEFjdGl2ZSxcbiAgICAgICAgdXNlTWVudUJhc2VQcm9wcyxcbiAgICAgICAgdXNlTWVudUJhc2VCdXR0b25Qcm9wcyxcbiAgICAgICAgZ2V0TWVudUJhc2VMYXN0Rm9jdXNlZElubmVyLFxuICAgICAgICBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIsXG4gICAgICAgIG9wZW4sXG4gICAgICAgIG9uT3BlbixcbiAgICAgICAgb25DbG9zZVxuICAgIH07XG59XG4vLyBBIGZvY3VzIHNlbnRpbmFsIGlzIGEgaGlkZGVuIGJ1dCBmb2N1c2FibGUgZWxlbWVudCB0aGF0IGNvbWVzIGF0IHRoZSBzdGFydCBvciBlbmQgXG4vLyBvZiB0aGUgb3V0LW9mLXBsYWNlLWZvY3VzYWJsZSBjb21wb25lbnQgdGhhdCwgd2hlbiBhY3RpdmF0ZWQgb3IgZm9jdXNlZCBvdmVyLCBjbG9zZXMgdGhlIGNvbXBvbmVudFxuLy8gKGlmIGZvY3VzZWQgd2l0aGluIDEwMG1zIG9mIHRoZSBvcGVuIHByb3AgY2hhbmdpbmcsIGluc3RlYWQgb2Zcbi8vIGNsb3NpbmcsIGZvY3VzaW5nIHRoZSBzZW50aW5lbCBpbW1lZGlhdGVseSBhc2tzIGl0IHRvIGZvY3VzIGl0c2VsZikuXG4vLyBUaGlzIGV4aXN0cyBmb3IgdGhpbmdzIGxpa2UgbWVudXMgd2hpY2ggY2FuIGhhdmUgZm9jdXMgYnV0IGFsc28gbmVlZCBhIHdheSB0byByZXR1cm5cbi8vIHRvIHdoYXRldmVyIG91dC1vZi1wbGFjZSBwYXJlbnQgdGhleSBjYW1lIGZyb20gd2hlbiBuYXR1cmFsbHkgdGFiYmVkIG91dCBvZiAoYXMgb3Bwb3NlZFxuLy8gdG8gZGlhbG9ncyB3aGljaCBsb29wIGJhY2sgYXJvdW5kIHdoZW4gdGFiYmVkIG91dCBvZikuIFdoaWxlIG1vdXNlIHVzZXJzIGNhbiBjbGljayBvdXQgb2YgYSBtZW51XG4vLyBhbmQga2V5Ym9hcmQgdXNlcnMgY2FuIGVzY2FwZSB0byBjbG9zZSBhIG1lbnUsIHNjcmVlbiByZWFkZXJzIGFuZCBvdGhlciBpbnB1dCBtZXRob2RzIFxuLy8gdGhhdCBkb24ndCB1c2UgdGhvc2UgdHdvIHdvdWxkIGJlY29tZSBzdHVjay5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c1NlbnRpbmVsKHsgb3Blbiwgb25DbG9zZSwgc2VuZEZvY3VzV2l0aGluTWVudSB9KSB7XG4gICAgY29uc3QgZ2V0U2VuZEZvY3VzV2l0aGluTWVudSA9IHVzZVN0YWJsZUdldHRlcihzZW5kRm9jdXNXaXRoaW5NZW51KTtcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSk7XG4gICAgY29uc3QgW2ZpcnN0U2VudGluZWxJc0FjdGl2ZSwgc2V0Rmlyc3RTZW50aW5lbElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VUaW1lb3V0KHsgY2FsbGJhY2s6ICgpID0+IHsgc2V0Rmlyc3RTZW50aW5lbElzQWN0aXZlKG9wZW4pOyB9LCB0aW1lb3V0OiAxMDAsIHRyaWdnZXJJbmRleDogYCR7b3Blbn0tJHtmaXJzdFNlbnRpbmVsSXNBY3RpdmV9YCB9KTtcbiAgICBjb25zdCBvbkZvY3VzID0gZmlyc3RTZW50aW5lbElzQWN0aXZlID8gKCgpID0+IHN0YWJsZU9uQ2xvc2UoKSkgOiAoKCkgPT4gZ2V0U2VuZEZvY3VzV2l0aGluTWVudSgpPy4oKSk7XG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHN0YWJsZU9uQ2xvc2UoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VTZW50aW5lbFByb3BzOiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvbkZvY3VzLCBvbkNsaWNrIH0sIHApO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTWVudSh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBub1R5cGVhaGVhZCwgbm9XcmFwLCB0eXBlYWhlYWRUaW1lb3V0LCAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdGFiYmFibGVJbmRleCwgZm9jdXNDdXJyZW50OiBmb2N1c01lbnUsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIG5vVHlwZWFoZWFkLCBub1dyYXAsIHR5cGVhaGVhZFRpbWVvdXQsIHNob3VsZEZvY3VzT25DaGFuZ2U6IHVzZUNhbGxiYWNrKCgpID0+IGdldE1lbnVCYXNlTGFzdEZvY3VzZWRJbm5lcigpIHx8IGdldE1lbnVCYXNlQnV0dG9uTGFzdEZvY3VzZWRJbm5lcigpLCBbXSkgfSk7XG4gICAgY29uc3QgeyB1c2VNZW51U2VudGluZWwsIGZvY3VzVHJhcEFjdGl2ZSwgdXNlTWVudUJhc2VCdXR0b25Qcm9wcywgdXNlTWVudUJhc2VQcm9wcywgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyLCBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIsIG9wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlTWVudUJhc2UoeyAuLi5hcmdzLCBzZW5kRm9jdXNXaXRoaW5NZW51OiBmb2N1c01lbnUgPz8gKCgpID0+IHsgfSkgfSk7XG4gICAgY29uc3QgdXNlTWVudUJ1dHRvbiA9IHVzZUNhbGxiYWNrKCh7fSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlTWVudUJ1dHRvblByb3BzOiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMocCk7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWhhc3BvcHVwXCJdID0gXCJtZW51XCI7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWV4cGFuZGVkXCJdID0gb3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbb3Blbiwgb25DbG9zZSwgb25PcGVuLCB1c2VNZW51QmFzZUJ1dHRvblByb3BzXSk7XG4gICAgLypjb25zdCB1c2VNZW51U3VibWVudUl0ZW0gPSB1c2VDYWxsYmFjaygoYXJnczogVXNlTWVudVN1Ym1lbnVJdGVtUGFyYW1ldGVycykgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1lbnVQcm9wcywgdXNlTWVudUJ1dHRvbiB9ID0gdXNlQXJpYU1lbnU8SFRNTEVsZW1lbnQsIENoaWxkRWxlbWVudCwgST4oYXJncyk7XG4gICAgICAgIGNvbnN0IHsgdXNlTWVudUJ1dHRvblByb3BzIH0gPSB1c2VNZW51QnV0dG9uPEU+KHsgdGFnOiBcImxpXCIgYXMgYW55IH0pO1xuXG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50PGFueT4oeyBvbkVsZW1lbnRDaGFuZ2U6IHNldE9wZW5lckVsZW1lbnQgYXMgT25QYXNzaXZlU3RhdGVDaGFuZ2U8YW55PiB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgICAgIHVzZU1lbnVQcm9wcyxcbiAgICAgICAgICAgIHVzZU1lbnVTdWJtZW51SXRlbVByb3BzOiBmdW5jdGlvbiA8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+Pih7IC4uLnByb3BzIH06IFApIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJtZW51aXRlbVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVudUJ1dHRvblByb3BzKHVzZU1lbnVJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHByb3BzKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pOyovXG4gICAgY29uc3QgdXNlTWVudUl0ZW0gPSB1c2VDYWxsYmFjaygoYXJncykgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZChhcmdzKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlTWVudUl0ZW1Qcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtXCI7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlTWVudUl0ZW1Qcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICBmdW5jdGlvbiB1c2VNZW51UHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVcIjtcbiAgICAgICAgcmV0dXJuIHVzZU1lbnVCYXNlUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VNZW51UHJvcHMsXG4gICAgICAgIHVzZU1lbnVCdXR0b24sXG4gICAgICAgIHVzZU1lbnVJdGVtLFxuICAgICAgICB1c2VNZW51U2VudGluZWwsXG4gICAgICAgIC8vdXNlTWVudVN1Ym1lbnVJdGVtLFxuICAgICAgICBmb2N1c01lbnUsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVudS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFUYWJzKHsgc2VsZWN0aW9uTW9kZSwgc2VsZWN0ZWRJbmRleCwgb25TZWxlY3QsIG9yaWVudGF0aW9uOiBsb2dpY2FsT3JpZW50YXRpb24sIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHMsIGdldEZvY3VzZWRJbm5lcjogZ2V0VGFiTGlzdEZvY3VzZWRJbm5lciB9ID0gdXNlSGFzRm9jdXMoe30pO1xuICAgIGNvbnN0IFtwaHlzaWNhbE9yaWVudGF0aW9uLCBzZXRQaHlzaWNhbE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb25zdCB7IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uLCB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMgfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oeyBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2U6IHVzZUNhbGxiYWNrKChsb2dpY2FsRGlyZWN0aW9uSW5mbykgPT4gc2V0UGh5c2ljYWxPcmllbnRhdGlvbihjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uKGxvZ2ljYWxPcmllbnRhdGlvbiwgbG9naWNhbERpcmVjdGlvbkluZm8pKSwgW10pIH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGlzdElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGlzdElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1saXN0LVwiIH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGFiZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLWxhYmVsLVwiIH0pO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkVGFicywgbmF2aWdhdGVUb0luZGV4LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzLCB0YWJiYWJsZUluZGV4LCBpbnZhbGlkVHlwZWFoZWFkLCBjdXJyZW50VHlwZWFoZWFkLCBmb2N1c0N1cnJlbnQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0VGFiTGlzdEZvY3VzZWRJbm5lciwga2V5TmF2aWdhdGlvbjogbG9naWNhbE9yaWVudGF0aW9uIH0pO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUGFuZWxzLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRUYWJQYW5lbCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhvblNlbGVjdCk7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRUYWJzLmxlbmd0aDtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkVGFicylcbiAgICAgICAgICAgIGNoaWxkLnNldFNlbGVjdGlvbk1vZGUoc2VsZWN0aW9uTW9kZSk7XG4gICAgfSwgW3NlbGVjdGlvbk1vZGVdKTtcbiAgICB1c2VDaGlsZEZsYWcoeyBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkVGFicywgc2V0Q2hpbGRGbGFnOiAoaSwgc2VsZWN0ZWQpID0+IG1hbmFnZWRUYWJzW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksIGdldENoaWxkRmxhZzogaSA9PiAobWFuYWdlZFRhYnNbaV0/LmdldFNlbGVjdGVkKCkpIH0pO1xuICAgIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRQYW5lbHMsIHNldENoaWxkRmxhZzogKGksIHZpc2libGUpID0+IG1hbmFnZWRQYW5lbHNbaV0/LnNldFZpc2libGUodmlzaWJsZSksIGdldENoaWxkRmxhZzogaSA9PiAobWFuYWdlZFBhbmVsc1tpXT8uZ2V0VmlzaWJsZSgpKSB9KTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKHByZXYpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiBzZWxlY3Rpb25Nb2RlID09IFwiYWN0aXZhdGVcIikge1xuICAgICAgICAgICAgLy8gVE9ETzogV2UgbmVlZCB0byB3YWl0IGEgbW9tZW50IHNvIHRoYXQgdGhlIHRhYiBwYW5lbCB3ZSB3YW50IHRvIGZvY3VzXG4gICAgICAgICAgICAvLyBpcyBhY3R1YWxseSB2aXNpYmxlIChpLmUuIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGNoaWxkIHRvIHJlLXJlbmRlciBpdHNlbGYpLlxuICAgICAgICAgICAgLy8gV2UgY291bGQsIGFsdGVybmF0aXZlbHksIHNpZ25hbCB0byB0aGUgY2hpbGQgdGhhdCBpdCBzaG91bGQgZm9jdXMgaXRzZWxmXG4gICAgICAgICAgICAvLyB0aGUgbmV4dCB0aW1lIGl0IHJlbmRlcnMgaXRzZWxmIGFzIHZpc2libGUsXG4gICAgICAgICAgICAvLyB3aGljaCBtaWdodCBiZSBiZXR0ZXI/XG4gICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFuYWdlZFBhbmVsc1tzZWxlY3RlZEluZGV4XT8uZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW2NoaWxkQ291bnQsIHNlbGVjdGVkSW5kZXgsIHNlbGVjdGlvbk1vZGVdKTtcbiAgICBjb25zdCB1c2VUYWIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWIoaW5mbykge1xuICAgICAgICBjb25zdCBbc2VsZWN0aW9uTW9kZUwsIHNldFNlbGVjdGlvbk1vZGVMXSA9IHVzZVN0YXRlKHNlbGVjdGlvbk1vZGUpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IFt0YWJQYW5lbElkLCBzZXRUYWJQYW5lbElkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiSWRQcm9wcywgaWQ6IHRhYklkLCBnZXRJZDogZ2V0VGFiSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLVwiIH0pO1xuICAgICAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZCwgdGFiSWQsIHNldFRhYlBhbmVsSWQsIHNldFNlbGVjdGlvbk1vZGU6IHNldFNlbGVjdGlvbk1vZGVMLCAuLi5pbmZvIH0pO1xuICAgICAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmZvLmluZGV4KTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAodGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZUwgPT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3QoeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogZ2V0SW5kZXgoKSB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGUsIHNlbGVjdGlvbk1vZGVdKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFBhbmVsc1tpbmZvLmluZGV4XT8uc2V0VGFiSWQodGFiSWQpOyB9LCBbdGFiSWQsIGluZm8uaW5kZXhdKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBvblNlbGVjdD8uKGVuaGFuY2VFdmVudChlLCB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSkpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCkocHJvcHMpO1xuICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IFwidGFiXCI7XG4gICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAoc2VsZWN0ZWQgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtY29udHJvbHNcIl0gPSB0YWJQYW5lbElkO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVRhYklkUHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhuZXdQcm9wcykpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiUHJvcHMsIHNlbGVjdGVkIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZVRhYlBhbmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUGFuZWwoaW5mbykge1xuICAgICAgICAvL2NvbnN0IFtzaG91bGRGb2N1cywgc2V0U2hvdWxkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBbdGFiSWQsIHNldFRhYklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlLCBnZXRWaXNpYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVBhbmVsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRQYW5lbElkLCBpZDogdGFiUGFuZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItcGFuZWwtXCIgfSk7XG4gICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZU1hbmFnZWRUYWJQYW5lbCh7IC4uLmluZm8sIHRhYlBhbmVsSWQsIHNldFRhYklkLCBmb2N1cywgc2V0VmlzaWJsZTogc2V0VmlzaWJsZSwgZ2V0VmlzaWJsZTogZ2V0VmlzaWJsZSB9KTtcbiAgICAgICAgZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0VGFiTGlzdEZvY3VzZWRJbm5lcigpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudD8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IG1hbmFnZWRUYWJzW2luZm8uaW5kZXhdPy5zZXRUYWJQYW5lbElkKHRhYlBhbmVsSWQpOyB9LCBbdGFiUGFuZWxJZCwgaW5mby5pbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VUYWJQYW5lbFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWxhYmVsbGVkYnlcIl0gPSBtYW5hZ2VkVGFic1tpbmZvLmluZGV4XT8udGFiSWQ7XG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJ0YWJwYW5lbFwiO1xuICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPz89IC0xOyAvLyBNYWtlIHN1cmUgdGhlIHRhYiBwYW5lbCBpcyB0YWJiYWJsZS5cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VQYW5lbElkUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiUGFuZWxQcm9wcywgdmlzaWJsZSB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1c2VUYWJzTGlzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYkxpc3QoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYkxpc3RQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYmxpc3RcIjtcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1vcmllbnRhdGlvblwiXSA9IHBoeXNpY2FsT3JpZW50YXRpb247XG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHModXNlTG9naWNhbERpcmVjdGlvblByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRhYkxpc3RQcm9wcyB9O1xuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvblByb3BzLCBwaHlzaWNhbE9yaWVudGF0aW9uXSk7XG4gICAgY29uc3QgdXNlVGFic0xhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFic0xhYmVsKCkge1xuICAgICAgICBmdW5jdGlvbiB1c2VUYWJzTGFiZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VUYWJMYWJlbElkUHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRhYnNMYWJlbFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7IHVzZVRhYiwgdXNlVGFiUGFuZWwsIHVzZVRhYnNMaXN0LCB1c2VUYWJzTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGZvY3VzVGFiTGlzdDogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBtYW5hZ2VkUGFuZWxzLCBtYW5hZ2VkVGFicyB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRhYnMuanMubWFwIiwiaW1wb3J0IHsgdXNlR2xvYmFsSGFuZGxlciwgdXNlSGFzRm9jdXMsIHVzZU1lcmdlZFByb3BzLCB1c2VQYXNzaXZlU3RhdGUsIHVzZVJhbmRvbUlkLCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkgeyByZXR1cm4gZmFsc2U7IH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhVG9vbHRpcCh7IG1vdXNlb3ZlckRlbGF5LCBtb3VzZW91dERlbGF5LCBmb2N1c0RlbGF5IH0pIHtcbiAgICBtb3VzZW92ZXJEZWxheSA/Pz0gNDAwO1xuICAgIG1vdXNlb3V0RGVsYXkgPz89IDQwO1xuICAgIGZvY3VzRGVsYXkgPz89IDE7XG4gICAgLy8gVGhlIGVzY2FwZSBrZXkgc2hvdWxkIGNsb3NlIHRvb2x0aXBzLCBidXQgZG8gbm90aGluZyBlbHNlLlxuICAgIC8vIChpLmUuIGNsb3NpbmcgYSB0b29sdGlwIGluIGEgZGlhbG9nIE1VU1QgTk9UIGNsb3NlIHRoZSBkaWFsb2cgdG9vKVxuICAgIC8vIFRPRE86IFRvb2x0aXBzIGFyZSwgZWZmZWN0aXZlbHksIGFsd2F5cyB0aGUgdG9wbW9zdCBjb21wb25lbnQsXG4gICAgLy8gc28gd2UgY2FuIGp1c3QgaGF2ZSB0aGVtIGxpc3RlbiB0byBhbmQgc3dhbGxvdyBhbGwgXCJFc2NhcGVcIlxuICAgIC8vIGtleSBwcmVzc2VzIGJlZm9yZSBhbnlvbmUgZWxzZS4gRm9yIGEgbW9yZSBnZW5lcmFsIHBvcHVwLFxuICAgIC8vIG9yIGEgdG9vbHRpcCBpbiBhIHRvb2x0aXAgKCEhKSBhIGRpZmZlcmVudCBzb2x1dGlvbiB3b3VsZCBiZSBuZWVkZWQuXG4gICAgdXNlR2xvYmFsSGFuZGxlcihkb2N1bWVudCwgXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChnZXRPcGVuKCkgJiYgZS5rZXkgPT09IFwiRXNjYXBlXCIgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgc2V0VHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VHJpZ2dlckZvY3VzZWREZWxheUNvcnJlY3RlZChmYWxzZSk7XG4gICAgICAgICAgICBzZXRUb29sdGlwRm9jdXNlZERlbGF5Q29ycmVjdGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3BlbiwgZ2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUb29sdGlwSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVRvb2x0aXBJZFJlZmVyZW5jaW5nUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdG9vbHRpcC1cIiB9KTtcbiAgICBjb25zdCBbZ2V0VHJpZ2dlckZvY3VzZWQsIHNldFRyaWdnZXJGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZSh1c2VTdGFibGVDYWxsYmFjaygoZm9jdXNlZCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxheSA9IGZvY3VzZWQgPyBmb2N1c0RlbGF5IDogMTtcbiAgICAgICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgaXNGaW5pdGUoZGVsYXkpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBzZXRUcmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkKGZvY3VzZWQpLCBmb2N1c2VkID8gZm9jdXNEZWxheSA6IDEpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICB9XG4gICAgfSksIHJldHVybkZhbHNlKTtcbiAgICBjb25zdCBbZ2V0VG9vbHRpcEZvY3VzZWQsIHNldFRvb2x0aXBGb2N1c2VkXSA9IHVzZVBhc3NpdmVTdGF0ZSh1c2VTdGFibGVDYWxsYmFjaygoZm9jdXNlZCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxheSA9IGZvY3VzZWQgPyBmb2N1c0RlbGF5IDogMTtcbiAgICAgICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgaXNGaW5pdGUoZGVsYXkpKSB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBzZXRUb29sdGlwRm9jdXNlZERlbGF5Q29ycmVjdGVkKGZvY3VzZWQpLCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICB9KSwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRUcmlnZ2VySG92ZXIsIHNldFRyaWdnZXJIb3Zlcl0gPSB1c2VQYXNzaXZlU3RhdGUodXNlU3RhYmxlQ2FsbGJhY2soKGhvdmVyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaG92ZXJpbmcgPyBtb3VzZW92ZXJEZWxheSA6IG1vdXNlb3V0RGVsYXk7XG4gICAgICAgIGlmIChkZWxheSAhPSBudWxsICYmIGlzRmluaXRlKGRlbGF5KSkge1xuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0VHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWQoaG92ZXJpbmcpLCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICB9KSwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFtnZXRUb29sdGlwSG92ZXIsIHNldFRvb2x0aXBIb3Zlcl0gPSB1c2VQYXNzaXZlU3RhdGUodXNlU3RhYmxlQ2FsbGJhY2soKGhvdmVyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaG92ZXJpbmcgPyBtb3VzZW92ZXJEZWxheSA6IG1vdXNlb3V0RGVsYXk7XG4gICAgICAgIGlmIChkZWxheSAhPSBudWxsICYmIGlzRmluaXRlKGRlbGF5KSkge1xuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gc2V0VG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWQoaG92ZXJpbmcpLCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICB9KSwgcmV0dXJuRmFsc2UpO1xuICAgIGNvbnN0IFt0cmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkLCBzZXRUcmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdHJpZ2dlckhvdmVyRGVsYXlDb3JyZWN0ZWQsIHNldFRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdG9vbHRpcEZvY3VzZWREZWxheUNvcnJlY3RlZCwgc2V0VG9vbHRpcEZvY3VzZWREZWxheUNvcnJlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Rvb2x0aXBIb3ZlckRlbGF5Q29ycmVjdGVkLCBzZXRUb29sdGlwSG92ZXJEZWxheUNvcnJlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0T3Blbih0cmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkIHx8IHRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkIHx8IHRvb2x0aXBGb2N1c2VkRGVsYXlDb3JyZWN0ZWQgfHwgdG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWQpO1xuICAgIH0sIFt0cmlnZ2VyRm9jdXNlZERlbGF5Q29ycmVjdGVkIHx8IHRyaWdnZXJIb3ZlckRlbGF5Q29ycmVjdGVkIHx8IHRvb2x0aXBGb2N1c2VkRGVsYXlDb3JyZWN0ZWQgfHwgdG9vbHRpcEhvdmVyRGVsYXlDb3JyZWN0ZWRdKTtcbiAgICBjb25zdCB1c2VUb29sdGlwVHJpZ2dlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXBUcmlnZ2VyKCkge1xuICAgICAgICB1c2VHbG9iYWxIYW5kbGVyKGRvY3VtZW50LCBcInBvaW50ZXJtb3ZlXCIsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgc2V0VHJpZ2dlckhvdmVyKHRhcmdldCA9PSBnZXRFbGVtZW50KCkgfHwgISFnZXRFbGVtZW50KCk/LmNvbnRhaW5zKHRhcmdldCkpO1xuICAgICAgICB9LCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgIGZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICAgICAgZS50YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZUhhc0ZvY3VzKHsgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkOiBzZXRUcmlnZ2VyRm9jdXNlZCB9KTtcbiAgICAgICAgZnVuY3Rpb24gdXNlVG9vbHRpcFRyaWdnZXJQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIC8vIE5vdGU6IFRob3VnaCBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBmb2N1c2luZyBhY3RpdmF0ZXMgYSB0b29sdGlwLFxuICAgICAgICAgICAgLy8gaXQncyBwZXJmZWN0bHkgcmVhc29uYWJsZSB0aGF0IGEgY2hpbGQgZWxlbWVudCB3aWxsIGJlIHRoZSBvbmUgdGhhdCdzIGZvY3VzZWQsXG4gICAgICAgICAgICAvLyBub3QgdGhpcyBvbmUsIHNvIHdlIGRvbid0IHNldCB0YWJJbmRleD0wXG4gICAgICAgICAgICBwcm9wcy50YWJJbmRleCA/Pz0gLTE7XG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikodXNlSGFzRm9jdXNQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25Ub3VjaEVuZCB9LCBwcm9wcykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUb29sdGlwVHJpZ2dlclByb3BzIH07XG4gICAgfSwgW3VzZVRvb2x0aXBJZFJlZmVyZW5jaW5nUHJvcHNdKTtcbiAgICBjb25zdCB1c2VUb29sdGlwID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVG9vbHRpcCgpIHtcbiAgICAgICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZElubmVyQ2hhbmdlZDogc2V0VG9vbHRpcEZvY3VzZWQgfSk7XG4gICAgICAgIHVzZUdsb2JhbEhhbmRsZXIoZG9jdW1lbnQsIFwicG9pbnRlcm1vdmVcIiwgZSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBzZXRUb29sdGlwSG92ZXIodGFyZ2V0ID09IGdldEVsZW1lbnQoKSB8fCAhIWdldEVsZW1lbnQoKT8uY29udGFpbnModGFyZ2V0KSk7XG4gICAgICAgIH0sIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgICAgZnVuY3Rpb24gdXNlVG9vbHRpcFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZVRvb2x0aXBJZFByb3BzKHVzZUhhc0ZvY3VzUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7fSwgcHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFByb3BzIH07XG4gICAgfSwgW3VzZVRvb2x0aXBJZFByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlVG9vbHRpcCxcbiAgICAgICAgdXNlVG9vbHRpcFRyaWdnZXIsXG4gICAgICAgIGlzT3Blbjogb3BlbixcbiAgICAgICAgZ2V0SXNPcGVuOiBnZXRPcGVuXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10b29sdGlwLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsInZub2RlSWQiLCJjcmVhdGVWTm9kZSIsInR5cGUiLCJwcm9wcyIsImtleSIsIl9fc291cmNlIiwiX19zZWxmIiwicmVmIiwiaSIsIm5vcm1hbGl6ZWRQcm9wcyIsInZub2RlIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJkZWZhdWx0UHJvcHMiLCJvcHRpb25zIiwiY3VycmVudEluZGV4IiwiY3VycmVudENvbXBvbmVudCIsInByZXZSYWYiLCJjdXJyZW50SG9vayIsImFmdGVyUGFpbnRFZmZlY3RzIiwib2xkQmVmb3JlRGlmZiIsIm9sZEJlZm9yZVJlbmRlciIsIm9sZEFmdGVyRGlmZiIsImRpZmZlZCIsIm9sZENvbW1pdCIsIm9sZEJlZm9yZVVubW91bnQiLCJ1bm1vdW50IiwiZ2V0SG9va1N0YXRlIiwiaW5kZXgiLCJob29rcyIsImxlbmd0aCIsInB1c2giLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJuZXh0VmFsdWUiLCJhY3Rpb24iLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwiYXJncyIsInN0YXRlIiwiYXJnc0NoYW5nZWQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJpbml0aWFsVmFsdWUiLCJ1c2VNZW1vIiwiY3VycmVudCIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwicHJvdmlkZXIiLCJzdWIiLCJ2YWx1ZSIsImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCJmb3JFYWNoIiwiY29tcG9uZW50IiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsImUiLCJjIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmFmIiwiZG9uZSIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJIQVNfUkFGIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiY29tbWl0UXVldWUiLCJzb21lIiwiZmlsdGVyIiwiY2IiLCJob29rIiwiY29tcCIsIm9sZEFyZ3MiLCJuZXdBcmdzIiwiYXJnIiwiZiIsIlVuc2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidG9WYWwiLCJtaXgiLCJrIiwieSIsInN0ciIsIkFycmF5IiwiaXNBcnJheSIsInRtcCIsIngiLCJhcmd1bWVudHMiLCJyZXR1cm5OdWxsIiwiTSIsInVzZVN0YXRlUCIsInVzZUVmZmVjdE5hdGl2ZSIsInVzZUxheW91dEVmZmVjdE5hdGl2ZSIsImNyZWF0ZUNvbnRleHQiLCJyZXR1cm5GYWxzZSIsImNhbmRpZGF0ZVNlbGVjdG9ycyIsIk5vRWxlbWVudCIsIm1hdGNoZXMiLCJFbGVtZW50IiwiZ2V0Um9vdE5vZGUiLCJlbGVtZW50IiwiaXNJbnB1dCIsIm5vZGUiLCJpc0hpZGRlbklucHV0IiwiaXNEZXRhaWxzV2l0aFN1bW1hcnkiLCJyIiwiY2hpbGQiLCJpc1plcm9BcmVhIiwid2lkdGgiLCJoZWlnaHQiLCJpc0hpZGRlbiIsImRpc3BsYXlDaGVjayIsImdldFNoYWRvd1Jvb3QiLCJnZXRDb21wdXRlZFN0eWxlIiwiaXNEaXJlY3RTdW1tYXJ5Iiwibm9kZVVuZGVyRGV0YWlscyIsIm9yaWdpbmFsTm9kZSIsInBhcmVudEVsZW1lbnQiLCJyb290Tm9kZSIsImlzRGlzYWJsZWRGcm9tRmllbGRzZXQiLCJwYXJlbnROb2RlIiwiaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSIsImZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yIiwiaXNGb2N1c2FibGUiLCJnbG9iYWwiLCJ0aGlzIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJzbGljZSIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiam9pbiIsIkluZXJ0Um9vdCIsInJvb3RFbGVtZW50IiwiaW5lcnRNYW5hZ2VyIiwiX2luZXJ0TWFuYWdlciIsIl9yb290RWxlbWVudCIsIl9tYW5hZ2VkTm9kZXMiLCJTZXQiLCJoYXNBdHRyaWJ1dGUiLCJfc2F2ZWRBcmlhSGlkZGVuIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUiLCJfb2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiX29uTXV0YXRpb24iLCJiaW5kIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZGVzdHJ1Y3RvciIsImRpc2Nvbm5lY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwic3RhcnROb2RlIiwiX3RoaXMyIiwiY29tcG9zZWRUcmVlV2FsayIsIl92aXNpdE5vZGUiLCJhY3RpdmVFbGVtZW50IiwiZG9jdW1lbnQiLCJib2R5IiwiY29udGFpbnMiLCJyb290Iiwibm9kZVR5cGUiLCJOb2RlIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImJsdXIiLCJmb2N1cyIsIkVMRU1FTlRfTk9ERSIsIl9hZG9wdEluZXJ0Um9vdCIsImNhbGwiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiYWRkIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiZ2V0Iiwic2V0IiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsIkVycm9yIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290Iiwic2l6ZSIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIk1hcCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vbkRvY3VtZW50TG9hZGVkIiwiaW5lcnQiLCJoYXMiLCJwYXJlbnQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJzaGFkb3dSb290QW5jZXN0b3IiLCJzaGFkb3dSb290IiwibG9jYWxOYW1lIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCJfaSIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJoYXNPd25Qcm9wZXJ0eSIsImFzc2lnbiIsIm9iaiIsInNoYWxsb3dEaWZmZXJzIiwiYSIsImIiLCJfanN4cyIsIl9qc3giLCJSYW5kb21Xb3JkcyIsIm1lbW8iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztTQUFPO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsSUFBTUEsR0FBQUEsR0FBWSxFQUFsQjtJQUFBLElBQ01DLEdBQUFBLEdBQVksRUFEbEI7SUFBQSxJQUVNQyxHQUFBQSxHQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
