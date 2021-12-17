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
        j$2(n, _, p = p || e$1, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x$1(_, s, n) : s = P$1(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k$1(p));
      }

      for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k$1(i, h + 1)), N(w[h], w[h]));

      if (g) for (h = 0; h < g.length; h++) M$1(g[h], g[++h], g[++h]);
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
        if (o = o && n.call(l.childNodes), a = (y = i.props || e$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
          if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
          (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
        }

        if (C$1(l, p, y, r, c), v) u.__k = [];else if (_ = u.props.children, w$2(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && k$1(i, 0), c), null != o) for (_ = o.length; _--;) null != o[_] && h$1(o[_]);
        c || ("value" in p && void 0 !== (_ = p.value) && (_ !== y.value || _ !== l.value || "progress" === d && !_) && H$1(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H$1(l, "checked", _, y.checked, !1));
      }
      return l;
    }

    function M$1(n, u, i) {
      try {
        "function" == typeof n ? n(u) : n.current = u;
      } catch (n) {
        l$1.__e(n, i);
      }
    }

    function N(n, u, i) {
      var t, r;

      if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M$1(t, null, u)), null != (t = n.__c)) {
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
      l$1.__ && l$1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j$2(i, u = (!r && t || i).__k = v$1(d$1, null, [u]), o || e$1, e$1, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z$1(f, u);
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
    const toRun = new Map(); // TODO: Whether this goes in options.diffed or options._commit
    // is a post-suspense question.
    // Right now, using options._commit has the problem of running
    // *after* refs are applied, but we need to come before even that
    // so `ref={someStableFunction}` works.
    // 
    // Also it's private.

    const originalDiffed = l$1.diffed;

    l$1.diffed = function (vnode) {
      for (let [id, {
        effect,
        inputs
      }] of toRun) {
        const oldInputs = previousInputs.get(id);

        if (argsChanged(oldInputs, inputs)) {
          effect();
          previousInputs.set(id, inputs);
        }
      }

      toRun.clear();

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      originalDiffed === null || originalDiffed === void 0 ? void 0 : originalDiffed(vnode, ...args);
    };
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
        inputs
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

    const Unset$1 = Symbol("unset");
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
      const ref = s(Unset$1);
      useBeforeLayoutEffect(() => {
        ref.current = value;
      }, [value]);
      return A$1(() => {
        if (ref.current === Unset$1) {
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
     * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function
     * @param initialValue If provided, the effect will be invoked once with this value on mount.
     * @returns
     */

    function usePassiveState(onChange, getInitialValue) {
      const valueRef = s(Unset);
      const warningRef = s(false);
      const cleanupCallbackRef = s(undefined); // Shared between "dependency changed" and "component unmounted".

      const onShouldCleanUp = A$1(() => {
        let cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback) cleanupCallback();
      }, []); // There are a couple places where we'd like to use our initial
      // value in place of having no value at all yet.
      // This is the shared code for that, used on mount and whenever
      // getValue is called.

      const tryEnsureValue = useStableCallback(() => {
        if (valueRef.current === Unset && getInitialValue != undefined) {
          try {
            var _onChange;

            const initialValue = getInitialValue();
            valueRef.current = initialValue;
            cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
          } catch (ex) {// Exceptions are intentional to allow bailout (without exposing the Unset symbol)
          }
        }
      });
      const getValue = useStableCallback(() => {
        if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."); // The first time we call getValue, if we haven't been given a value yet,
        // (and we were given an initial value to use)
        // return the initial value instead of nothing.

        if (valueRef.current === Unset) tryEnsureValue();
        return valueRef.current === Unset ? undefined : valueRef.current;
      });
      h(() => {
        // Make sure we've run our effect at least once on mount.
        // (If we have an initial value, of course)
        tryEnsureValue();
      }, []); // The actual code the user calls to (possibly) run a new effect.

      const setValue = useStableCallback(arg => {
        const prevDep = getValue();
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
      });
      return [getValue, setValue];
    }
    const Unset = Symbol();

    /**
     * Allows accessing the element a ref references as soon as it does so.
     * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
     * adding a RefCallback and merging it with any existing ref that existed on the props.
     *
     * Don't forget to provide the Element as the type argument!
     *
     * @returns The element, and the sub-hook that makes it retrievable.
     */

    function useRefElement(_ref) {
      let {
        onElementChange
      } = _ref;
      // Let us store the actual (reference to) the element we capture
      const [getElement, setElement] = usePassiveState(onElementChange, () => null); // Create a RefCallback that's fired when mounted 
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

    function useElementSize(_ref) {
      let {
        observeBox,
        onSizeChange
      } = _ref;
      const [getSize, setSize] = usePassiveState(onSizeChange, () => null);
      const currentObserveBox = s(observeBox);

      const needANewObserver = (element, observeBox) => {
        if (element) {
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

          currentObserveBox.current = observeBox;

          if ("ResizeObserver" in window) {
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
      };

      const {
        getElement,
        useRefElementProps
      } = useRefElement({
        onElementChange: e => needANewObserver(e, observeBox)
      });
      y(() => {
        if (currentObserveBox.current !== observeBox) needANewObserver(getElement(), observeBox);
      }, [observeBox]);
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
      const [getComputedStyles, setComputedStyles] = usePassiveState(null);
      const {
        getElement,
        useRefElementProps
      } = useRefElement({
        onElementChange: element => {
          if (element) {
            setComputedStyles(window.getComputedStyle(element)); // The element hasn't actually been hooked up to the document yet.
            // Wait a moment so that we can properly use `getComputedStyle`
            // (since we only read it on mount)

            /*queueMicrotask(() => {
                updateLogicalInfo(element!);
            })*/
          }
        }
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
        onSizeChange: _ => onLogicalDirectionChange === null || onLogicalDirectionChange === void 0 ? void 0 : onLogicalDirectionChange(getLogicalDirectionInfo())
      });
      const getLogicalDirectionInfo = A$1(() => {
        const computedStyles = getComputedStyles();

        if (computedStyles) {
          var _d;

          let w = computedStyles.writingMode;
          let d = computedStyles.direction;
          let t = computedStyles.textOrientation;
          if (t == "upright") d = "ltr";
          return { ...WritingModes[w !== null && w !== void 0 ? w : "horizontal-tb"][(_d = d) !== null && _d !== void 0 ? _d : "ltr"]
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
      const convertToPhysicalOrientation = A$1((elementOrientation, direction) => {
        var _direction3;

        (_direction3 = direction) !== null && _direction3 !== void 0 ? _direction3 : direction = getLogicalDirectionInfo();

        if (elementOrientation == "inline") {
          var _direction4;

          if (((_direction4 = direction) === null || _direction4 === void 0 ? void 0 : _direction4.inlineOrientation) == "horizontal") return "horizontal";
          return "vertical";
        } else {
          var _direction5;

          if (((_direction5 = direction) === null || _direction5 === void 0 ? void 0 : _direction5.blockOrientation) == "vertical") return "vertical";
          return "horizontal";
        }
      }, []);
      const convertElementSize = A$1((elementSize, direction) => {
        var _direction6;

        (_direction6 = direction) !== null && _direction6 !== void 0 ? _direction6 : direction = getLogicalDirectionInfo();

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
        convertElementSize,
        convertToLogicalOrientation,
        convertToPhysicalOrientation
      };
    }
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
        let timeout = getTimeout();
        console.assert(timeoutIsNull == (timeout == null));

        if (timeout != null) {
          startTimeRef.current = +new Date();
          const handle = setTimeout(stableCallback, timeout);
          return () => clearTimeout(handle);
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

      const getIndex = useStableGetter(index);
      const {
        convertElementSize,
        getLogicalDirectionInfo,
        useLogicalDirectionProps
      } = useLogicalDirection({});

      const onKeyDown = e => {
        // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
        if (e.ctrlKey || e.metaKey) return;
        getIndex();
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
      const getMountIndex = A$1(index => {
        return mountOrder.current.get(index);
      }, []);
      const useManagedChild = A$1(info => {
        const {
          getElement,
          useRefElementProps
        } = useRefElement({
          onElementChange: element => {
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
          }
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

    const activeElementUpdaters = new Set();
    const lastActiveElementUpdaters = new Set();
    const windowFocusedUpdaters = new Set();
    let windowFocused = true;

    function focusout(e) {
      if (e.relatedTarget == null) {
        for (let f of activeElementUpdaters) f === null || f === void 0 ? void 0 : f(null);
      }
    }

    function focusin(e) {
      let currentlyFocusedElement = e.target;
      let lastFocusedElement = e.target;
      activeElementUpdaters.forEach(f => f === null || f === void 0 ? void 0 : f(currentlyFocusedElement));
      lastActiveElementUpdaters.forEach(f => f === null || f === void 0 ? void 0 : f(lastFocusedElement));
    }

    function windowFocus() {
      windowFocused = true;
      windowFocusedUpdaters.forEach(f => f === null || f === void 0 ? void 0 : f(windowFocused));
    }

    function windowBlur() {
      windowFocused = false;
      windowFocusedUpdaters.forEach(f => f === null || f === void 0 ? void 0 : f(windowFocused));
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
      const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, undefined);
      const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, undefined);
      const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, () => windowFocused);
      h(() => {
        if (activeElementUpdaters.size === 0) {
          document.addEventListener("focusin", focusin, {
            passive: true
          });
          document.addEventListener("focusout", focusout, {
            passive: true
          });
          window.addEventListener("focus", windowFocus, {
            passive: true
          });
          window.addEventListener("blur", windowBlur, {
            passive: true
          });
        } // Add them even if they're undefined to more easily
        // manage the ">0 means don't add handlers" logic.


        activeElementUpdaters.add(setActiveElement);
        lastActiveElementUpdaters.add(setLastActiveElement);
        windowFocusedUpdaters.add(setWindowFocused);
        return () => {
          activeElementUpdaters.delete(setActiveElement);
          lastActiveElementUpdaters.delete(setLastActiveElement);
          windowFocusedUpdaters.delete(setWindowFocused);

          if (activeElementUpdaters.size === 0) {
            document.removeEventListener("focusin", focusin);
            document.removeEventListener("focusout", focusout);
            window.removeEventListener("focus", windowFocus);
            window.removeEventListener("blur", windowBlur);
          }
        };
      }, []);
      return {
        getActiveElement,
        getLastActiveElement,
        getWindowFocused
      };
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
      const {
        getElement,
        useRefElementProps
      } = useRefElement({});
      const [getFocused, setFocused] = usePassiveState(onFocusedChanged, () => false);
      const [getFocusedInner, setFocusedInner] = usePassiveState(onFocusedInnerChanged, () => false);
      const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, () => false);
      const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, () => false);
      const {
        getActiveElement,
        getLastActiveElement,
        getWindowFocused
      } = useActiveElement({
        onActiveElementChange: (activeElement, prevActiveElement) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == activeElement;
          const focusedInner = !!(selfElement !== null && selfElement !== void 0 && selfElement.contains(activeElement));
          setFocused(focused);
          setFocusedInner(focusedInner);
          onActiveElementChange === null || onActiveElementChange === void 0 ? void 0 : onActiveElementChange(activeElement, prevActiveElement);
        },
        onLastActiveElementChange: (lastActiveElement, prevLastActiveElement) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == lastActiveElement;
          const focusedInner = !!(selfElement !== null && selfElement !== void 0 && selfElement.contains(lastActiveElement));
          setLastFocused(focused);
          setLastFocusedInner(focusedInner);
          onLastActiveElementChange === null || onLastActiveElementChange === void 0 ? void 0 : onLastActiveElementChange(lastActiveElement, prevLastActiveElement);
        },
        onWindowFocusedChange
      });
      const useHasFocusProps = A$1(props => {
        return useRefElementProps(props);
      }, [useRefElementProps]);
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
      const navigateToIndex = A$1(i => {
        setTabbableIndex(i);
      }, []);
      const navigateToFirst = A$1(() => {
        setTabbableIndex(indexMangler(0));
      }, []);
      const navigateToLast = A$1(() => {
        setTabbableIndex(indexMangler(managedChildren.length - 1));
      }, []);
      const navigateToPrev = A$1(() => {
        setTabbableIndex(i => indexMangler(indexDemangler(i !== null && i !== void 0 ? i : 0) - 1));
      }, [indexDemangler, indexMangler]);
      const navigateToNext = A$1(() => {
        setTabbableIndex(i => indexMangler(indexDemangler(i !== null && i !== void 0 ? i : 0) + 1));
      }, [indexDemangler, indexMangler]);
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
            onClick: roveToSelf
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
        getWindowFocused
      } = useActiveElement({}); // When the trap becomes active, before we let the blockingElements hook run,
      // keep track of whatever's currently focused and save it.

      h(() => {
        if (trapActive && element) {
          var _getLastActiveElement;

          // Save the currently focused element
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
        }, useRefElementProps(props));
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
            useRefElementProps,
            getElement
          } = useRefElement({});
          const focus = A$1(() => {
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

      function onBackdropClick(e) {
        // Basically, "was this event fired on the root-most element, or at least an element not contained by the modal?"
        // Either could be how the browser handles these sorts of "interacting with nothing" events.
        if (e.target == document.documentElement) {
          onClose("backdrop");
        }

        let elements = getElements();

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
      }

      useActiveElement({
        onLastActiveElementChange: newElement => {
          let validFocusableElements = getElements();

          if (validFocusableElements) {
            if (!Array.isArray(validFocusableElements)) validFocusableElements = [validFocusableElements];

            for (let focusable of validFocusableElements) {
              if (focusable !== null && focusable !== void 0 && focusable.contains(newElement)) return;
            }
          }

          onClose("lost-focus");
        }
      }); // Since everything else is inert, we listen for captured clicks on the window
      // (we don't use onClick since that doesn't fire when clicked on empty/inert areas)
      // Note: We need a *separate* touch event on mobile Safari, because
      // it doesn't let click events bubble or be captured from traditionally non-interactive elements,
      // but touch events work as expected.

      useGlobalHandler(window, "mousedown", !open ? null : onBackdropClick, {
        capture: true
      });
      useGlobalHandler(window, "touchstart", !open ? null : onBackdropClick, {
        capture: true
      });
      useGlobalHandler(document, "keydown", e => {
        if (e.key === "Escape") {
          onClose("escape");
        }
      });
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
        return useFocusTrapProps(useMergedProps()(useModalRefElement({
          role: "dialog"
        }), modalDescribedByBody ? pFinal : p2));
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
        inputElement
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

      useActiveElement({
        onActiveElementChange: activeElement => setAnyItemsFocused(!!(inputElement !== null && inputElement !== void 0 && inputElement.contains(activeElement)))
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
        invalidTypeahead
      };

      function useListboxSingleProps(props) {
        props.role = "listbox";
        return useListNavigationProps(useGenericLabelInputProps(props));
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
      useSoftDismiss({
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

      const useMenuSentinel = A$1(() => {
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
      const useMenuBaseProps = A$1(props => {
        function onKeyDown(e) {
          if (e.key == "Escape" && getOpen()) {
            stableOnClose();
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
          }
        }

        return useMenuBaseHasFocusProps(useMenuBaseRefElementProps(useMenuBaseIdProps(useMergedProps()({
          onKeyDown
        }, props))));
      }, [useMenuBaseHasFocusProps, useMenuBaseRefElementProps, useMenuBaseIdProps]);
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
      const useMenuButton = A$1(_ref3 => {
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
        onLogicalDirectionChange: logicalDirectionInfo => setPhysicalOrientation(convertToPhysicalOrientation(logicalOrientation, logicalDirectionInfo))
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
      const useTooltipTrigger = A$1(function useTooltipTrigger() {
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
      const useTooltip = A$1(function useTooltip() {
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
        const randomWord = d(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/], []);
        const useRovingTabIndexChild = F(RovingChildContext);
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
        return (v$1(d$1, null,
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
        const useAccordionSection = F(UseAccordionSectionContext);
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
        return (v$1(d$1, null,
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
        const useCheckboxGroupChild = F(CheckboxGroupContext);
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
        const { getSelected, selected, tabbable, useListboxSingleItemProps } = F(ListBoxSingleItemContext)({ index, text: null, tag: "li" });
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
        const { tabbable, useListboxMultiItemProps } = F(ListBoxMultiItemContext)({ tag: "li", index, text, onSelect: e => setSelected(e[EventDetail].selected), selected });
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
        const useAriaMenuItem = F(MenuItemContext);
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
        const useTab = F(TabContext);
        const { useTabProps, selected } = useTab({ index, text: null, tag: "li" });
        return (v$1(d$1, null,
            v$1("li", { ...useTabProps({}) },
                "Tab #",
                index + 1,
                " (",
                `Selected: ${selected}`,
                ")")));
    });
    const DemoTabPanel = g(({ index }) => {
        const useTabPanel = F(TabPanelContext);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLWNoaWxkcmVuLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLWNsYXNzZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXJlZnMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXN0eWxlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmVmLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZWxlbWVudC1zaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXRpbWVvdXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZHJvcHBhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWV2ZW50LWhhbmRsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYWN0aXZlLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtaGFzLWZvY3VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWludGVydmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxpc3QtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWZvY3VzLXRyYXAuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9wcm9wcy5qcyIsIi4uL3VzZS1idXR0b24uanMiLCIuLi91c2UtYWNjb3JkaW9uLmpzIiwiLi4vdXNlLWxhYmVsLmpzIiwiLi4vdXNlLWNoZWNrYm94LmpzIiwiLi4vdXNlLWNoZWNrYm94LWdyb3VwLmpzIiwiLi4vdXNlLW1vZGFsLmpzIiwiLi4vdXNlLWRpYWxvZy5qcyIsIi4uL3VzZS1saXN0Ym94LW11bHRpLmpzIiwiLi4vdXNlLWxpc3Rib3gtc2luZ2xlLmpzIiwiLi4vdXNlLW1lbnUuanMiLCIuLi91c2UtdGFicy5qcyIsIi4uL3VzZS10b29sdGlwLmpzIiwiZGVtb3MvdXNlLWludGVydmFsLnRzeCIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS10aW1lb3V0LnRzeCIsImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxvW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9cj9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxvPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKG89byYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LHIsYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxyJiZcImZvcmVpZ25PYmplY3RcIiE9PWQsbyxmLG8/b1swXTppLl9fayYmayhpLDApLGMpLG51bGwhPW8pZm9yKF89by5sZW5ndGg7Xy0tOyludWxsIT1vW19dJiZoKG9bX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT15LnZhbHVlfHxfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXt2YXIgdDtmb3IoaS5zb3J0KGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4uX192Ll9fYi10Ll9fdi5fX2J9KTt0PWkucG9wKCk7KWlmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHUscj10Ll9fYztyJiZyLl9fSCYmKHIuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e2cobil9Y2F0Y2gobil7dT1ufX0pLHUmJm4uX19lKHUsci5fX3YpKX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dSxyPW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihuLl9fYz12b2lkIDAscigpKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxoc1Byb3BzLCByaHNQcm9wcykge1xyXG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJocztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGxocztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jaGlsZHJlbi5qcy5tYXAiLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbi8qKlxyXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXHJcbiAqIER1cGxpY2F0ZSBjbGFzc2VzIGFyZSByZW1vdmVkIChvcmRlciBkb2Vzbid0IG1hdHRlciBhbnl3YXkpLlxyXG4gKlxyXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gcmhzIENsYXNzZXMgb2YgdGhlIHNlY29uZCBjb21wb25lbnRcclxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2xhc3NlcyhsaHMsIHJocykge1xyXG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xyXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXHJcbiAgICByZXR1cm4gbWVyZ2VDbGFzc2VzKGxocywgcmhzKTtcclxufVxyXG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcclxuICAgIGNvbnN0IGxoc0NsYXNzID0gbGhzPy5jbGFzcztcclxuICAgIGNvbnN0IGxoc0NsYXNzTmFtZSA9IGxocz8uY2xhc3NOYW1lO1xyXG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xyXG4gICAgY29uc3QgcmhzQ2xhc3NOYW1lID0gcmhzPy5jbGFzc05hbWU7XHJcbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xyXG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBsZXQgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XHJcbiAgICBjb25zdCBjID0gW1xyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcclxuICAgIF07XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1swXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1sxXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1syXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1szXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s2XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcclxuICAgIGNbOF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s5XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzExXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzEyXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1sxM107XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5mdW5jdGlvbiBwcm9jZXNzUmVmKGluc3RhbmNlLCByZWYpIHtcclxuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZWYoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cclxuICogQHBhcmFtIGxoc1xyXG4gKiBAcGFyYW0gcmhzXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobGhzUHJvcHMsIHJoc1Byb3BzKSB7XHJcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcclxuICAgICAgICBjb25zdCByaHMgPSByaHNQcm9wcz8ucmVmO1xyXG4gICAgICAgIGxldCBjb21iaW5lZCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcclxuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xyXG4gICAgICAgIH0sIFtsaHMsIHJoc10pO1xyXG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLypcclxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xyXG5cclxuICAgIGNvbnN0IHJlZjogUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFjY2VwdHNSZWYocmVmOiBSZWY8YW55PikgeyB9XHJcbiAgICBmdW5jdGlvbiBhY2NlcHRzT3B0aW9uYWxSZWYocmVmOiBSZWY8YW55PiB8IHVuZGVmaW5lZCkgeyB9XHJcblxyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmIH0pLFxyXG4gICAgXSBhcyBjb25zdDtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1JlZihjWzBdKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzUmVmKGNbMV0pO1xyXG5cclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzNdKTtcclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzRdKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPXHJcbiAgICBhY2NlcHRzUmVmKGNbNV0pO1xyXG4gICAgYWNjZXB0c1JlZihjWzZdKTtcclxuICAgIGFjY2VwdHNSZWYoY1s3XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbOF0pO1xyXG59XHJcbiovXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcmVmcy5qcy5tYXAiLCJmdW5jdGlvbiBzdHlsZVN0cmluZ1RvT2JqZWN0KHN0eWxlKSB7XHJcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XHJcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcclxufVxyXG4vKipcclxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cclxuICpcclxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XHJcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXHJcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcclxuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxyXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XHJcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxyXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxyXG4gICAgICAgICAgICByZXR1cm4gbGhzLnN0eWxlO1xyXG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmhzLnN0eWxlO1xyXG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxyXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpIHtcclxuICAgICAgICAgICAgLy8gKHVzZU1lcmdlZFN0eWxlcyBpc24ndCBhIHRydWUgaG9vayAtLSB0aGlzIGlzbid0IGEgdmlvbGF0aW9uKVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChsaHM/LnN0eWxlKSB9LCByaHMpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMb2dpYz8/P1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxyXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gYCR7bGhzLnN0eWxlfTske3Jocz8uc3R5bGUgPz8gXCJcIn1gO1xyXG4gICAgfVxyXG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uKGxocz8uc3R5bGUgPz8ge30pLFxyXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XHJcbmxldCBsb2cgPSAoc3RyKSA9PiB7IGRlYnVnZ2VyOyBjb25zb2xlLndhcm4oYFRyeWluZyB0byBtZXJnZSB0d28gcHJvcHMgd2l0aCB0aGUgc2FtZSBuYW1lOiAke3N0cn1gKTsgLyogSW50ZW50aW9uYWwgKi8gfTtcclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzIpIHtcclxuICAgIGxvZyA9IGxvZzI7XHJcbn1cclxuLyoqXHJcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBUaGUgaG9vayBpcyBhd2FyZSBvZiBhbmQgY2FuIGludGVsbGlnZW50bHkgbWVyZ2UgYGNsYXNzTmFtZWAsIGBjbGFzc2AsIGBzdHlsZWAsIGByZWZgLCBhbmQgYWxsIGV2ZW50IGhhbmRsZXJzLlxyXG4gKiBAcGFyYW0gbGhzMlxyXG4gKiBAcGFyYW0gcmhzMlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHMyLCByaHMyKSB7XHJcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcclxuICAgICAgICAvLyBhbmQgYWxsIGxocyBwcm9wcy4gV2UncmUgZ29pbmcgdG8gbWVyZ2UgaW4gcmhzIGp1c3QgYWZ0ZXIuXHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogbGhzQ2hpbGRyZW4sIGNsYXNzOiBsaHNDbGFzcywgY2xhc3NOYW1lOiBsaHNDbGFzc05hbWUsIHN0eWxlOiBsaHNTdHlsZSwgcmVmOiBsaHNSZWYsIC4uLmxocyB9ID0gbGhzMjtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xyXG4gICAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgICAgIC4uLmxocyxcclxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocmV0LnJlZiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcclxuICAgICAgICBpZiAocmV0LnN0eWxlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuc3R5bGU7XHJcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5jbGFzc05hbWU7XHJcbiAgICAgICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xyXG4gICAgICAgIC8vIE5vdywgZG8gKmV2ZXJ5dGhpbmcqIGVsc2VcclxuICAgICAgICAvLyBNZXJnZSBldmVyeSByZW1haW5pbmcgZXhpc3RpbmcgZW50cnkgaW4gbGhzIHdpdGggd2hhdCB3ZSd2ZSBhbHJlYWR5IHB1dCBpbiByZXQuXHJcbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcclxuICAgICAgICBjb25zdCByaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmhzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtyaHNLZXksIHJoc1ZhbHVlXSBvZiByaHNFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxyXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUsIHJoc1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJIG1lYW4sIHRoZXkncmUgdGhlIHNhbWUgdmFsdWUgYXQgbGVhc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVWdoLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGdvb2Qgc3RyYXRlZ2llcyBoZXJlLCBqdXN0IGxvZyBpdCBpZiByZXF1ZXN0ZWRcclxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zKGxocywgcmhzKSB7XHJcbiAgICBpZiAoIWxocylcclxuICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgaWYgKCFyaHMpXHJcbiAgICAgICAgcmV0dXJuIGxocztcclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBsdiA9IGxocyguLi5hcmdzKTtcclxuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XHJcbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XHJcbiAgICB9O1xyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xyXG5cclxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcclxuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XHJcblxyXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xyXG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcclxuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XHJcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xyXG4gICAgY29uc3QgbTM6IE0xID0gMDtcclxuXHJcbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xyXG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcclxuICAgIGNvbnN0IG02OiBNMiA9IDA7XHJcblxyXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcclxuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xyXG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcblxyXG5cclxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxyXG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xyXG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xyXG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xyXG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xyXG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xyXG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xyXG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xyXG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xyXG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xyXG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xyXG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xyXG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xyXG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xyXG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xyXG5cclxuXHJcbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG59XHJcbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cclxuKi8gXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgYXMgdXNlU3RhdGVQIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XHJcbiAqIChpLmUuIHlvdSBjYW4gdXNlIGl0IGluIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaXQgYmVpbmcgYSBkZXBlbmRlbmN5KS5cclxuICpcclxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgLy8gV2Uga2VlcCBib3RoLCBidXQgb3ZlcnJyaWRlIHRoZSBgc2V0U3RhdGVgIGZ1bmN0aW9uYWxpdHlcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVQXSA9IHVzZVN0YXRlUChpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcclxuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcclxuICAgIC8vIHRvIGFsc28gc2V0IG91ciByZWYgdG8gdGhlIG5ldyB2YWx1ZVxyXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IHZhbHVlO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVAocHJldlZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VmFsdWUgPSBjYWxsYmFjayhwcmV2VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSB8fCAodHlwZW9mIHN0YXRlID09PSBcIm51bWJlclwiICYmIGlzTmFOKHN0YXRlKSkpO1xyXG4gICAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGUsIGdldFN0YXRlXTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XHJcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFRhYmxlW3ZhbHVlXTtcclxufVxyXG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcclxuICAgIHJldHVybiBbcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKV07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgd2l0aCBhbiBvcHRpb25hbCBwcmVmaXguXHJcbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxyXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XHJcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBhIGhvb2sgdGhhdCBtb2RpZmllcyBhIHNldCBvZiBwcm9wcyB0byBwcm92aWRlIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIGlmIG9uZSB3YXMgbm90IHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBBbmQgdGhlIHJhbmRvbWx5LWdlbmVyYXRlZCBpZCBpdHNlbGYgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHlvdSB3YW50IHRvIGhhbmRsZSB0aGUgbG9naWMgeW91cnNlbGYgd2l0aG91dCBgdXNlTWVyZ2VkUHJvcHNgLlxyXG4gKlxyXG4gKiBVbmxpa2UgbW9zdCBvdGhlciBgdXNlKlByb3BzYCBob29rcywgdGhlc2UgYXJlIG1vc3RseSBzdGFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XHJcbiAgICBjb25zdCBbcmFuZG9tSWQsIHNldFJhbmRvbUlkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XHJcbiAgICBjb25zdCBbd2F0Y2hQcmVmaXhVcGRhdGVzLCBzZXRXYXRjaFByZWZpeFVwZGF0ZXMsIGdldFdhdGNoUHJlZml4VXBkYXRlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdhdGNoUHJlZml4VXBkYXRlcyA9IGdldFdhdGNoUHJlZml4VXBkYXRlcygpO1xyXG4gICAgICAgIGlmICh3YXRjaFByZWZpeFVwZGF0ZXMpXHJcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XHJcbiAgICAgICAgc2V0V2F0Y2hQcmVmaXhVcGRhdGVzKHRydWUpO1xyXG4gICAgfSwgW3ByZWZpeF0pO1xyXG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxyXG4gICAgLy8gVXNlZCBzbyB0aGF0IGFueSBJRC1yZWZlcmVuY2luZyBwcm9wcyBkb24ndCBuZWVkIHRvIHByb3ZpZGUgdGhlIHNhbWUgdmFsdWUuXHJcbiAgICAvL1xyXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcclxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSB0ZW1wb3JhcnkgbWlzbWF0Y2gsIGJ1dCBpdCdzIGNvcnJlY3RlZCBiZWZvcmUgcmVuZGVyaW5nIGZpbmlzaGVzLlxyXG4gICAgLy8gSXMgdGhpcyBva2F5P1xyXG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IHVzZVJlZmVyZW5jZWRJZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmVmZXJlbmNlZElkUHJvcHMoaWRQcm9wTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGZ1bmN0aW9uICh7IFtpZFByb3BOYW1lXTogZ2l2ZW5JZCwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChpZFByb3BOYW1lID09PSBcImlkXCIpXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VkSWQodXNlZElkMik7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xyXG4gICAgY29uc3QgdXNlUmFuZG9tSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJhbmRvbUlkUHJvcHMocCkge1xyXG4gICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImlkXCIpKHApO1xyXG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJhbmRvbUlkLFxyXG4gICAgICAgIGlkOiB1c2VkSWQsXHJcbiAgICAgICAgZ2V0SWQ6IGdldFVzZWRJZCxcclxuICAgICAgICB1c2VSYW5kb21JZFByb3BzLFxyXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxyXG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3Moc3RyKSB7IH1cclxuZnVuY3Rpb24gYWNjZXB0c0Nzcyhwcm9wKSB7IH1cclxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xyXG4gICAgY29uc3QgeyBpZCwgcmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCgpO1xyXG4gICAgLy9jb25zdCBwMWE6IE1lcmdlZFByb3BzPHsgaWQ6IHN0cmluZyB9LCB7ICB9PiA9IHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pXHJcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmEgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xyXG4gICAgY29uc3QgcDNhID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSkpO1xyXG4gICAgY29uc3QgcDNiID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pKTtcclxuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcclxuICAgIGNvbnN0IHA0YiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHAxYik7XHJcbiAgICAvL3AxYS5pZDtcclxuICAgIHAxYi5pZDtcclxuICAgIHAyYVtcImZvclwiXTtcclxuICAgIHAyYltcImZvclwiXTtcclxuICAgIHAyY1tcImZvclwiXTtcclxuICAgIHAzYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDNiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHAzYltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDRhW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHA0YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogSXQncyBiZWNhdXNlIGl0IHJlc29sdmVzIHRvIFwiaWQ6IHVuZGVmaW5lZCAmIHN0cmluZ1wiIC0tIHRoaXMgc2hvdWxkbid0IGhhcHBlblxyXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMWIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHAyYS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MocDJiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBwM2Euc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAzYi5zdHlsZSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcDRhLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHA0Yi5zdHlsZSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJhbmRvbS1pZC5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xyXG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcclxuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XHJcbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxyXG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXHJcbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXHJcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XHJcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxyXG4vLyBcclxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXHJcbmNvbnN0IG9yaWdpbmFsRGlmZmVkID0gb3B0aW9ucy5kaWZmZWQ7XHJcbm9wdGlvbnMuZGlmZmVkID0gKHZub2RlLCAuLi5hcmdzKSA9PiB7XHJcbiAgICBmb3IgKGxldCBbaWQsIHsgZWZmZWN0LCBpbnB1dHMgfV0gb2YgdG9SdW4pIHtcclxuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xyXG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGlucHV0cykpIHtcclxuICAgICAgICAgICAgZWZmZWN0KCk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLnNldChpZCwgaW5wdXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1J1bi5jbGVhcigpO1xyXG4gICAgb3JpZ2luYWxEaWZmZWQ/Lih2bm9kZSwgLi4uYXJncyk7XHJcbn07XHJcbi8qKlxyXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXHJcbiAqXHJcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXHJcbiAqIHdoaWNoIGhhcHBlbnMgYmVmb3JlLlxyXG4gKlxyXG4gKiBAcGFyYW0gZWZmZWN0XHJcbiAqIEBwYXJhbSBpbnB1dHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcclxuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xyXG4gICAgdG9SdW4uc2V0KGlkLCB7IGVmZmVjdCwgaW5wdXRzIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaWRdKTtcclxufVxyXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XHJcbiAgICByZXR1cm4gISEoIW9sZEFyZ3MgfHxcclxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XHJcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSkpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VCZWZvcmVMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtYmVmb3JlLWxheW91dC1lZmZlY3RcIjtcclxuY29uc3QgVW5zZXQgPSBTeW1ib2woXCJ1bnNldFwiKTtcclxuLyoqXHJcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcclxuICogaW5zaWRlIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaW5jbHVkaW5nIGl0IGluIHRoZSBkZXBlbmRlbmN5IGFycmF5LlxyXG4gKlxyXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cclxuICogcmVmIGFzc2lnbm1lbnQuIFRoaXMgbWVhbnMgdGhpcyBnZXR0ZXIgaXMgc2FmZSB0byB1c2UgYW55d2hlcmUgKioqZXhjZXB0IHRoZSByZW5kZXIgcGhhc2UqKiouXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKFVuc2V0KTtcclxuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0sIFt2YWx1ZV0pO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQgPT09IFVuc2V0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1nZXR0ZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbi8qKlxyXG4gKiBBbHRlcm5hdGUgdXNlQ2FsbGJhY2soKSB3aGljaCBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSAod3JhcHBlZCkgZnVuY3Rpb24gcmVmZXJlbmNlXHJcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxyXG4gKlxyXG4gKiBEbyBub3QgdXNlIGR1cmluZyB0aGUgcmVuZGVyIHBoYXNlISAgYHVzZUxheW91dEVmZmVjdGAgaXMgZmluZSB0aG91Z2guXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlQ2FsbGJhY2soZm4pIHtcclxuICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja0dldHRlciA9IHVzZVN0YWJsZUdldHRlcihmbik7XHJcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICByZXR1cm4gY3VycmVudENhbGxiYWNrR2V0dGVyKCkoLi4uYXJncyk7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1jYWxsYmFjay5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG4vKipcclxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cclxuICpcclxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XHJcbiAqXHJcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxyXG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cclxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xyXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cclxuICpcclxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb25cclxuICogQHBhcmFtIGluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFzc2l2ZVN0YXRlKG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpIHtcclxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcclxuICAgIGNvbnN0IHdhcm5pbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cclxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW51cENhbGxiYWNrID0gY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcclxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcclxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxyXG4gICAgLy8gVGhpcyBpcyB0aGUgc2hhcmVkIGNvZGUgZm9yIHRoYXQsIHVzZWQgb24gbW91bnQgYW5kIHdoZW5ldmVyXHJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXHJcbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgJiYgZ2V0SW5pdGlhbFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCkgPz8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcclxuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB3ZSBjYWxsIGdldFZhbHVlLCBpZiB3ZSBoYXZlbid0IGJlZW4gZ2l2ZW4gYSB2YWx1ZSB5ZXQsXHJcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXHJcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0KVxyXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xyXG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcclxuICAgIH0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cclxuICAgICAgICAvLyAoSWYgd2UgaGF2ZSBhbiBpbml0aWFsIHZhbHVlLCBvZiBjb3Vyc2UpXHJcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZVN0YWJsZUNhbGxiYWNrKChhcmcpID0+IHtcclxuICAgICAgICBjb25zdCBwcmV2RGVwID0gZ2V0VmFsdWUoKTtcclxuICAgICAgICBjb25zdCBkZXAgPSBhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyhwcmV2RGVwKSA6IGFyZztcclxuICAgICAgICBpZiAoZGVwICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBzaG91bGRuJ3QgY2FsbCBnZXRWYWx1ZSBkdXJpbmcgb25DaGFuZ2VcclxuICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJkIGNsZWFudXAgZnVuY3Rpb25cclxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XHJcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oZGVwLCBwcmV2RGVwKSA/PyB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gZGVwO1xyXG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXHJcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xyXG59XHJcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxyXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxyXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cclxuICpcclxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZSB9KSB7XHJcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXHJcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25FbGVtZW50Q2hhbmdlLCAoKSA9PiBudWxsKTtcclxuICAgIC8vIENyZWF0ZSBhIFJlZkNhbGxiYWNrIHRoYXQncyBmaXJlZCB3aGVuIG1vdW50ZWQgXHJcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcclxuICAgIGNvbnN0IG15UmVmID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAoZSlcclxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVJlZkVsZW1lbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IHJlZjogbXlSZWYgfSwgcHJvcHMpLCBbXSk7XHJcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcclxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRFbGVtZW50IH0pO1xyXG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcclxuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAxLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xyXG5mdW5jdGlvbiBleHRyYWN0RWxlbWVudFNpemUoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXRyaWV2ZSB0aGUgc2l6ZSBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldFwiKTtcclxuICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcclxuICAgIHJldHVybiAoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh7IG9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSB9KSB7XHJcbiAgICBjb25zdCBbZ2V0U2l6ZSwgc2V0U2l6ZV0gPSB1c2VQYXNzaXZlU3RhdGUob25TaXplQ2hhbmdlLCAoKSA9PiBudWxsKTtcclxuICAgIGNvbnN0IGN1cnJlbnRPYnNlcnZlQm94ID0gdXNlUmVmKG9ic2VydmVCb3gpO1xyXG4gICAgY29uc3QgbmVlZEFOZXdPYnNlcnZlciA9IChlbGVtZW50LCBvYnNlcnZlQm94KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZSh7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgPSBvYnNlcnZlQm94O1xyXG4gICAgICAgICAgICBpZiAoKFwiUmVzaXplT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHsgYm94OiBvYnNlcnZlQm94IH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBlID0+IG5lZWRBTmV3T2JzZXJ2ZXIoZSwgb2JzZXJ2ZUJveCkgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50T2JzZXJ2ZUJveC5jdXJyZW50ICE9PSBvYnNlcnZlQm94KVxyXG4gICAgICAgICAgICBuZWVkQU5ld09ic2VydmVyKGdldEVsZW1lbnQoKSwgb2JzZXJ2ZUJveCk7XHJcbiAgICB9LCBbb2JzZXJ2ZUJveF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRFbGVtZW50LFxyXG4gICAgICAgIGdldFNpemUsXHJcbiAgICAgICAgdXNlRWxlbWVudFNpemVQcm9wczogdXNlUmVmRWxlbWVudFByb3BzXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lbGVtZW50LXNpemUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlRWxlbWVudFNpemUgfSBmcm9tIFwiLi91c2UtZWxlbWVudC1zaXplXCI7XHJcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XHJcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7XHJcbn1cclxuLyoqXHJcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cclxuICpcclxuICogQ2VydGFpbiBDU1MgcHJvcGVydGllcywgbGlrZSBgYmxvY2stc2l6ZWAsIHJlc3BlY3QgdGhlIGN1cnJlbnQgd3JpdGluZyBtb2RlIGFuZCB0ZXh0IGRpcmVjdGlvbi5cclxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXHJcbiAqXHJcbiAqIFRoaXMgaXMgcHJvdmlkZWQgc28gdGhhdCBDU1MgcHJvcGVydGllcyBjYW4gY29uc2lzdGVudGx5IHVzZSB0aG9zZSBsb2dpY2FsIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMvI2xvZ2ljYWwtdG8tcGh5c2ljYWxcclxuICpcclxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XHJcbiAqICogYGdldExvZ2ljYWxEaXJlY3Rpb25gOiByZXRyaWV2ZXMgYSBgTG9naWNhbERpcmVjdGlvbkluZm9gIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gKEZ1bmN0aW9uIGlzIGNvbnN0YW50IGJldHdlZW4gcmVuZGVycylcclxuICogKiBgY29udmVydEVsZW1lbnRTaXplYDogV2hlbiB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHVzZUVsZW1lbnRTaXplYCwgYWxsb3dzIHlvdSB0byByZXRyaWV2ZSB0aGUgbG9naWNhbCBzaXplIG9mIGFuIGVsZW1lbnQgaW5zdGVhZCBvZiB0aGUgcGh5c2ljYWwgc2l6ZS5cclxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXHJcbiAqICogYGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25gOiAgQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImlubGluZVwiIG9yIFwiYmxvY2tcIiB0byBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSB9KSB7XHJcbiAgICBjb25zdCBbZ2V0Q29tcHV0ZWRTdHlsZXMsIHNldENvbXB1dGVkU3R5bGVzXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcclxuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wdXRlZFN0eWxlcyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSk7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBoYXNuJ3QgYWN0dWFsbHkgYmVlbiBob29rZWQgdXAgdG8gdGhlIGRvY3VtZW50IHlldC5cclxuICAgICAgICAgICAgICAgIC8vIFdhaXQgYSBtb21lbnQgc28gdGhhdCB3ZSBjYW4gcHJvcGVybHkgdXNlIGBnZXRDb21wdXRlZFN0eWxlYFxyXG4gICAgICAgICAgICAgICAgLy8gKHNpbmNlIHdlIG9ubHkgcmVhZCBpdCBvbiBtb3VudClcclxuICAgICAgICAgICAgICAgIC8qcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvZ2ljYWxJbmZvKGVsZW1lbnQhKTtcclxuICAgICAgICAgICAgICAgIH0pKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gVE9ETzogVGhlcmUncyBubyB3YXkgdG8gcmVmcmVzaCB3aGljaCB3cml0aW5nIG1vZGUgd2UgaGF2ZSBvbmNlIG1vdW50ZWQuXHJcbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xyXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXHJcbiAgICAvLyAgIEMuIElzIG5vdCBuZWNlc3NhcnkgZm9yIG1vc3QgdXNlIGNhc2VzIHRoYXQgd2lsbCBuZXZlciBzd2l0Y2ggd3JpdGluZy1tb2RlIHdpdGhpbiBhIHNpbmdsZSBjb21wb25lbnRcclxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxyXG4gICAgLy9cclxuICAgIC8vIEFzIGEgc29sdXRpb24sIGhlcmUncyBhIGNoZWFwIHdvcmthcm91bmQgdGhhdCBjaGVja3Mgd2hlbiB0aGUgZWxlbWVudCdzIHNpemUgaGFzIGNoYW5nZWQsXHJcbiAgICAvLyBhbmQgaWYgc28sIHRlc3RzIGlmIHRoZSB3cml0aW5nIG1vZGUgaGFzIGNoYW5nZWQgdG9vLlxyXG4gICAgLy9cclxuICAgIC8vIFRoaXMgd2lsbCB3b3JrIGZvciBhdCBsZWFzdCBzb21lIG51bWJlciBvZiBjYXNlcywgYnV0IGEgYmV0dGVyIHNvbHV0aW9uIGlzIHN0aWxsIG5lZWRlZC5cclxuICAgIGNvbnN0IHsgdXNlRWxlbWVudFNpemVQcm9wcyB9ID0gdXNlRWxlbWVudFNpemUoeyBvblNpemVDaGFuZ2U6IF8gPT4gb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlPy4oZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKSkgfSk7XHJcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGVzKCk7XHJcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XHJcbiAgICAgICAgICAgIGxldCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBsZXQgdCA9IGNvbXB1dGVkU3R5bGVzLnRleHRPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgICBkID0gXCJsdHJcIjtcclxuICAgICAgICAgICAgcmV0dXJuICh7IC4uLldyaXRpbmdNb2Rlc1t3ID8/IFwiaG9yaXpvbnRhbC10YlwiXVtkID8/IFwibHRyXCJdIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIFwiaW5saW5lXCI7XHJcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRPcmllbnRhdGlvbiA9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uYmxvY2tPcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAvLyBTaXplIGlzIHJlbGF0aXZlbHkgc2ltcGxlXHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcclxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTG9naWNhbERpcmVjdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VFbGVtZW50U2l6ZVByb3BzKHByb3BzKSksIFtdKSxcclxuICAgICAgICBnZXRFbGVtZW50LFxyXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLFxyXG4gICAgICAgIGNvbnZlcnRFbGVtZW50U2l6ZSxcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvblxyXG4gICAgfTtcclxufVxyXG47XHJcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcclxuICAgIC4uLkhvcml6b250YWxUYkx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcclxufTtcclxuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcclxuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xyXG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbFJ0bCxcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xyXG4gICAgLi4uVmVydGljYWxMckx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xyXG4gICAgLi4uU2lkZXdheXNMdEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XHJcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcclxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxMciA9IHtcclxuICAgIGx0cjogVmVydGljYWxMckx0cixcclxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxyXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcclxufTtcclxuY29uc3QgV3JpdGluZ01vZGVzID0ge1xyXG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcclxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcclxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcclxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcclxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IGFzIHVzZUVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqIEBwYXJhbSBpbXBsIFlvdSBjYW4gY2hvb3NlIHdoZXRoZXIgdG8gdXNlIGB1c2VFZmZlY3RgIG9yIGB1c2VMYXlvdXRFZmZlY3RgIGJ5XHJcbiAqIHBhc3Npbmcgb25lIG9mIHRoZW0gYXMgdGhpcyBhcmd1bWVudC4gQnkgZGVmYXVsdCwgaXQncyBgdXNlRWZmZWN0YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoZWZmZWN0LCBpbnB1dHMsIGltcGwgPSB1c2VFZmZlY3ROYXRpdmUpIHtcclxuICAgIGNvbnN0IHByZXZJbnB1dHMgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IGVmZmVjdDIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBbXTtcclxuICAgICAgICBpZiAoaW5wdXRzICYmIHByZXZJbnB1dHMuY3VycmVudCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWF4KHByZXZJbnB1dHMuY3VycmVudC5sZW5ndGgsIGlucHV0cy5sZW5ndGgpOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2SW5wdXRzLmN1cnJlbnRbaV0gIT0gaW5wdXRzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJldCA9IGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xyXG4gICAgICAgIHByZXZJbnB1dHMuY3VycmVudCA9IGlucHV0cztcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxuICAgIGltcGwoZWZmZWN0MiwgaW5wdXRzKTtcclxufVxyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IGFzIHVzZUxheW91dEVmZmVjdE5hdGl2ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcIi4vdXNlLWVmZmVjdFwiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XHJcbiAgICByZXR1cm4gdXNlRWZmZWN0KGVmZmVjdCwgaW5wdXRzLCB1c2VMYXlvdXRFZmZlY3ROYXRpdmUpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaW1lb3V0KHsgdGltZW91dCwgY2FsbGJhY2ssIHRyaWdnZXJJbmRleCB9KSB7XHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSBudWxsOyBjYWxsYmFjaygpOyB9KTtcclxuICAgIGNvbnN0IGdldFRpbWVvdXQgPSB1c2VTdGFibGVHZXR0ZXIodGltZW91dCk7XHJcbiAgICAvLyBTZXQgYW55IHRpbWUgd2Ugc3RhcnQgdGltZW91dC5cclxuICAgIC8vIFVuc2V0IGFueSB0aW1lIHRoZSB0aW1lb3V0IGNvbXBsZXRlc1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHRyaWdnZXJJbmRleCBjaGFuZ2VzIChpbmNsdWRpbmcgb24gbW91bnQpXHJcbiAgICAvLyByZXN0YXJ0IHRoZSB0aW1lb3V0LiAgVGhlIHRpbWVvdXQgZG9lcyBOT1QgcmVzZXRcclxuICAgIC8vIHdoZW4gdGhlIGR1cmF0aW9uIG9yIGNhbGxiYWNrIGNoYW5nZXMsIG9ubHkgdHJpZ2dlckluZGV4LlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aW1lb3V0SXNOdWxsID09ICh0aW1lb3V0ID09IG51bGwpKTtcclxuICAgICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dChzdGFibGVDYWxsYmFjaywgdGltZW91dCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XHJcbiAgICBjb25zdCBnZXRFbGFwc2VkVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCsobmV3IERhdGUoKSkpIC0gKCsoc3RhcnRUaW1lUmVmLmN1cnJlbnQgPz8gbmV3IERhdGUoKSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0UmVtYWluaW5nVGltZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xyXG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHsgZ2V0RWxhcHNlZFRpbWUsIGdldFJlbWFpbmluZ1RpbWUgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtdGltZW91dC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VUaW1lb3V0IH0gZnJvbSBcIi4vdXNlLXRpbWVvdXRcIjtcclxuLyoqXHJcbiAqIFdoZW4gdXNlZCBpbiB0YW5kZW0gd2l0aCBgdXNlUm92aW5nVGFiSW5kZXhgLCBhbGxvd3MgY29udHJvbCBvZlxyXG4gKiB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0aGUgYXJyb3cga2V5cy5cclxuICpcclxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgaW5kZXgsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvUHJldiwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlQXJyb3dLZXlzLCBkaXNhYmxlSG9tZUVuZEtleXMgfSkge1xyXG4gICAgbmF2aWdhdGlvbkRpcmVjdGlvbiA/Pz0gXCJlaXRoZXJcIjtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxyXG4gICAgLy8gVE9ETzogS2VlcCB0cmFjayBvZiB0aGUgb3JpZ2luYWwgaW5kZXggYW5kIGtlZXAgaXQsIGF0IGxlYXN0IHVudGlsIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZENvdW50ID4gMCAmJiBpbmRleCA+PSBjaGlsZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luZGV4LCBjaGlsZENvdW50LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0XSk7XHJcbiAgICAvLyBUaGVzZSBhbGxvdyB1cyB0byBtYW5pcHVsYXRlIHdoYXQgb3VyIGN1cnJlbnQgdGFiYmFibGUgY2hpbGQgaXMuXHJcbiAgICAvKmNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleDogbnVtYmVyKSA9PiB7IHNldEluZGV4KGluZGV4IDwgMCA/IChtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICsgaW5kZXgpIDogaW5kZXgpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA+PSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMT8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDEgOiArK2kpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA8IDA/IDAgOiAtLWkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvU3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgwKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KC0xKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pOyovXHJcbiAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmRleCk7XHJcbiAgICBjb25zdCB7IGNvbnZlcnRFbGVtZW50U2l6ZSwgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7fSk7XHJcbiAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxyXG4gICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0SW5kZXgoKTtcclxuICAgICAgICBjb25zdCBpbmZvID0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBsZXQgYWxsb3dzQmxvY2tOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJibG9ja1wiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XHJcbiAgICAgICAgbGV0IGFsbG93c0lubGluZU5hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImlubGluZVwiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwicnRsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRW5kXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVIb21lRW5kS2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4geyByZXR1cm4gdXNlTG9naWNhbERpcmVjdGlvblByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgcHJvcHMpKTsgfSwgW10pLFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIGZvciB0aGUgc2VsZWN0aW9uIG9mIGEgbWFuYWdlZCBjaGlsZCBieSB0eXBpbmcgdGhlIGdpdmVuIHRleHQgYXNzb2NpYXRlZCB3aXRoIGl0LlxyXG4gKlxyXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcclxuICAgIC8vIEZvciB0eXBlYWhlYWQsIGtlZXAgdHJhY2sgb2Ygd2hhdCBvdXIgY3VycmVudCBcInNlYXJjaFwiIHN0cmluZyBpcyAoaWYgd2UgaGF2ZSBvbmUpXHJcbiAgICAvLyBhbmQgYWxzbyBjbGVhciBpdCBldmVyeSAxMDAwIG1zIHNpbmNlIHRoZSBsYXN0IHRpbWUgaXQgY2hhbmdlZC5cclxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cclxuICAgIC8vIEFuZCwgZm9yIHRoZSB1c2VyJ3Mgc2FrZSwgbGV0IHRoZW0ga25vdyB3aGVuIHRoZWlyIHR5cGVhaGVhZCBjYW4ndCBtYXRjaCBhbnl0aGluZyBhbnltb3JlXHJcbiAgICBjb25zdCBbY3VycmVudFR5cGVhaGVhZCwgc2V0Q3VycmVudFR5cGVhaGVhZCwgZ2V0Q3VycmVudFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcclxuICAgIGNvbnN0IHNvcnRlZFR5cGVhaGVhZEluZm8gPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgW2ludmFsaWRUeXBlYWhlYWQsIHNldEludmFsaWRUeXBlYWhlYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxyXG4gICAgLy8gRXNzZW50aWFsbHksIHdoZW4gYWN0aXZlLCBpZ25vcmUgZnVydGhlciBrZXlzIFxyXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSB3YWl0aW5nIGZvciBhIENvbXBvc2l0aW9uRW5kIGV2ZW50XHJcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBCZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50cyBmaXJlICphZnRlcioga2V5ZG93biBldmVudHMgXHJcbiAgICAvLyAoYnV0IHdpdGhpbiB0aGUgc2FtZSB0YXNrLCB3aGljaCwgVE9ETywgY291bGQgYmUgYnJvd3Nlci1kZXBlbmRlbnQpLFxyXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cclxuICAgIGNvbnN0IFtuZXh0VHlwZWFoZWFkQ2hhciwgc2V0TmV4dFR5cGVhaGVhZENoYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHR5cGVhaGVhZCA9PiAoKHR5cGVhaGVhZCA/PyBcIlwiKSArIG5leHRUeXBlYWhlYWRDaGFyKSk7XHJcbiAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtuZXh0VHlwZWFoZWFkQ2hhcl0pO1xyXG4gICAgY29uc3QgY29tcGFyYXRvciA9IHVzZVN0YWJsZUNhbGxiYWNrKChsaHMsIHJocykgPT4ge1xyXG4gICAgICAgIGxldCBjb21wYXJlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGhzID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiByaHMudGV4dCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAvLyBGb3IgdGhlIHB1cnBvc2VzIG9mIHR5cGVhaGVhZCwgb25seSBjb21wYXJlIGEgc3RyaW5nIG9mIHRoZSBzYW1lIHNpemUgYXMgb3VyIGN1cnJlbnRseSB0eXBlZCBzdHJpbmcuXHJcbiAgICAgICAgICAgIC8vIEJ5IG5vcm1hbGl6aW5nIHRoZW0gZmlyc3QsIHdlIGVuc3VyZSB0aGlzIGJ5dGUtYnktYnl0ZSBoYW5kbGluZyBvZiByYXcgY2hhcmFjdGVyIGRhdGEgd29ya3Mgb3V0IG9rYXkuXHJcbiAgICAgICAgICAgIGxldCBzYWZlTGhzID0gbGhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcclxuICAgICAgICAgICAgbGV0IHNhZmVSaHMgPSByaHMudGV4dC5ub3JtYWxpemUoXCJORkRcIikuc3Vic3RyKDAsIHNhZmVMaHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKGNvbGxhdG9yKVxyXG4gICAgICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGhzIC0gcmhzO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvblN0YXJ0ID0gKGUpID0+IHsgc2V0SW1lQWN0aXZlKHRydWUpOyB9O1xyXG4gICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25FbmQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRJbWVBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1lQWN0aXZlID0gZ2V0SW1lQWN0aXZlKCk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBlLmtleTtcclxuICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXHJcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSAmJiBlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdheSB0aGF0IGRvZXNuJ3Qgc3BsaXQgVVRGLTE2IHN1cnJvZ2F0ZXMuXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHQgPT4gdCA9PT0gbnVsbCA/IG51bGwgOiBbLi4udF0ucmV2ZXJzZSgpLnNsaWNlKDEpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVGhlIGtleSBwcm9wZXJ0eSByZXByZXNlbnRzIHRoZSB0eXBlZCBjaGFyYWN0ZXIgT1IgdGhlIFwibmFtZWQga2V5IGF0dHJpYnV0ZVwiIG9mIHRoZSBrZXkgcHJlc3NlZC5cclxuICAgICAgICAgICAgLy8gVGhlcmUncyBubyBkZWZpbml0ZSB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSwgYnV0IGZvciBhbGwgaW50ZW50cyBhbmQgcHVycG9zZXNcclxuICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG5vIG9uZS1jaGFyYWN0ZXIgbmFtZXMsIGFuZCB0aGVyZSBhcmUgbm8gbm9uLUFTQ0lJLWFscGhhIG5hbWVzLlxyXG4gICAgICAgICAgICAvLyBUaHVzLCBhbnkgb25lLWNoYXJhY3RlciBvciBub24tQVNDSUkgdmFsdWUgZm9yIGBrZXlgIGlzICphbG1vc3QgY2VydGFpbmx5KiBhIHR5cGVkIGNoYXJhY3Rlci5cclxuICAgICAgICAgICAgY29uc3QgaXNDaGFyYWN0ZXJLZXkgPSAoa2V5Lmxlbmd0aCA9PT0gMSB8fCAhL15bQS1aYS16XS8udGVzdChrZXkpKTtcclxuICAgICAgICAgICAgaWYgKGlzQ2hhcmFjdGVyS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwiIFwiICYmIChnZXRDdXJyZW50VHlwZWFoZWFkKCkgPz8gXCJcIikudHJpbSgpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgYmVjYXVzZSBhIHNwYWNlYmFyIGNhbid0IGV2ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhdGUgYSB0eXBlYWhlYWQsIG9ubHkgY29udGludWUgb25lLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIChTcGVjaWZpY2FsbHksIGxldCB0aGUgZXZlbnQgY29udGludWUgcHJvcGFnYXRpb24gaW4gdGhpcyBjYXNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogV29uJ3QgYmUgdHJ1ZSBmb3IgdGhlIGZpcnN0IGtleWRvd25cclxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2lsbCBiZSBvdmVyd3JpdHRlbiBiZWZvcmUgdXNlTGF5b3V0RWZmZWN0IGlzIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGFjdHVhbGx5IGFwcGx5IHRoZSBjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24sIG9uQ29tcG9zaXRpb25TdGFydCwgb25Db21wb3NpdGlvbkVuZCwgfSwgcHJvcHMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gSGFuZGxlIGNoYW5nZXMgaW4gdHlwZWFoZWFkIHRoYXQgY2F1c2UgY2hhbmdlcyB0byB0aGUgdGFiYmFibGUgaW5kZXhcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlYWhlYWQgJiYgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgc29ydGVkVHlwZWFoZWFkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBjb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgaWYgKHNvcnRlZFR5cGVhaGVhZEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHVzZXIgaGFzIHR5cGVkIGFuIGVudHJ5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gKG9yIG1vcmUgc3BlY2lmaWNhbGx5IFwiZm9yIHdoaWNoIHRoZXJlIGlzIG5vIGVudHJ5IHRoYXQgc3RhcnRzIHdpdGggdGhhdCBpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEludmFsaWRUeXBlYWhlYWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgV2Uga25vdyByb3VnaGx5IHdoZXJlLCBpbiB0aGUgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MsIG91ciBuZXh0IHR5cGVhaGVhZCBsb2NhdGlvbiBpcy5cclxuICAgICAgICAgICAgICAgICAgQnV0IHJvdWdobHkgaXNuJ3QgZ29vZCBlbm91Z2ggaWYgdGhlcmUgYXJlIG11bHRpcGxlIG1hdGNoZXMuXHJcbiAgICAgICAgICAgICAgICAgIFRvIGNvbnZlcnQgb3VyIHNvcnRlZCBpbmRleCB0byB0aGUgdW5zb3J0ZWQgaW5kZXggd2UgbmVlZCwgd2UgaGF2ZSB0byBmaW5kIHRoZSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50IHRoYXQgbWF0Y2hlcyB1cyAqYW5kKiAoaWYgYW55IHN1Y2ggZXhpc3QpIGlzICphZnRlciogb3VyIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG5cclxuICAgICAgICAgICAgICAgICAgSW4gb3RoZXIgd29yZHMsIHRoZSBvbmx5IHdheSB0eXBlYWhlYWQgbW92ZXMgYmFja3dhcmRzIHJlbGF0aXZlIHRvIG91ciBjdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIGlzIGlmIHRoZSBvbmx5IG90aGVyIG9wdGlvbiBpcyBiZWhpbmQgdXMuXHJcblxyXG4gICAgICAgICAgICAgICAgICBJdCdzIG5vdCBzcGVjaWZpZWQgaW4gV0FJLUFSSUEgd2hhdCB0byBkbyBpbiB0aGF0IGNhc2UuICBJIHN1cHBvc2Ugd3JhcCBiYWNrIHRvIHRoZSBzdGFydD9cclxuICAgICAgICAgICAgICAgICAgVGhvdWdoIHRoZXJlJ3MgYWxzbyBhIGNhc2UgZm9yIGp1c3QgZ29pbmcgdXB3YXJkcyB0byB0aGUgbmVhcmVzdCB0byBwcmV2ZW50IGp1bXBpbmVzcy5cclxuICAgICAgICAgICAgICAgICAgQnV0IGlmIHlvdSdyZSBhbHJlYWR5IGRvaW5nIHR5cGVhaGVhZCBvbiBhbiB1bnNvcnRlZCBsaXN0LCBsaWtlLCBqdW1waW5lc3MgY2FuJ3QgYmUgYXZvaWRlZC5cclxuICAgICAgICAgICAgICAgICAgSSBkdW5uby4gR29pbmcgYmFjayB0byB0aGUgc3RhcnQgaXMgdGhlIHNpbXBsaXN0IHRob3VnaC5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEJhc2ljYWxseSB3aGF0IHRoaXMgZG9lczogU3RhcnRpbmcgZnJvbSB3aGVyZSB3ZSBmb3VuZCBvdXJzZWx2ZXMgYWZ0ZXIgb3VyIGJpbmFyeSBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICAgIHNjYW4gYmFja3dhcmRzIGFuZCBmb3J3YXJkcyB0aHJvdWdoIGFsbCBhZGphY2VudCBlbnRyaWVzIHRoYXQgYWxzbyBjb21wYXJlIGVxdWFsbHkgc28gdGhhdFxyXG4gICAgICAgICAgICAgICAgICB3ZSBjYW4gZmluZCB0aGUgb25lIHdob3NlIGB1bnNvcnRlZEluZGV4YCBpcyB0aGUgbG93ZXN0IGFtb25nc3QgYWxsIG90aGVyIGVxdWFsIHN0cmluZ3NcclxuICAgICAgICAgICAgICAgICAgKGFuZCBhbHNvIHRoZSBsb3dlc3QgYHVuc29ydGVkSW5kZXhgIHlhZGRhIHlhZGRhIGV4Y2VwdCB0aGF0IGl0IGNvbWVzIGFmdGVyIHVzKS5cclxuXHJcbiAgICAgICAgICAgICAgICAgIFRPRE86IFRoZSBiaW5hcnkgc2VhcmNoIHN0YXJ0cyB0aGlzIG9mZiB3aXRoIGEgc29saWQgTyhsb2cgbiksIGJ1dCBvbmUtY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaGVzIGFyZSwgdGhhbmtzIHRvIHBpZ2VvbmhvbGUgcHJpbmNpcGFsLCBldmVudHVhbGx5IGd1YXJhbnRlZWQgdG8gYmVjb21lXHJcbiAgICAgICAgICAgICAgICAgIE8obipsb2cgbikuIFRoaXMgaXMgYW5ub3lpbmcgYnV0IHByb2JhYmx5IG5vdCBlYXNpbHkgc29sdmFibGU/IFRoZXJlIGNvdWxkIGJlIGFuXHJcbiAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiBmb3Igb25lLWNoYXJhY3RlciBzdHJpbmdzLCBidXQgdGhhdCdzIGp1c3Qga2lja2luZyB0aGUgY2FuIGRvd25cclxuICAgICAgICAgICAgICAgICAgdGhlIHJvYWQuIE1heWJlIG9uZSBvciB0d28gY2hhcmFjdGVycyB3b3VsZCBiZSBnb29kIGVub3VnaCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgYXJlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgY2FuZGlkYXRlcycgcG9zaXRpb25zIGluIGJvdGggb3VyIHNvcnRlZCBhcnJheSBhbmQgdGhlIHVuc29ydGVkIERPTS5cclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgdHdvIGFyZSBvbmx5IHNldCBmb3IgZWxlbWVudHMgdGhhdCBhcmUgYWhlYWQgb2YgdXMsIGJ1dCB0aGUgcHJpbmNpcGxlJ3MgdGhlIHNhbWUgb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQmVzdEZpdCA9ICh1KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4QWxsID0gdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhBbGwgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0KSAmJiB1ID4gKGdldEluZGV4KCkgPz8gLUluZmluaXR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IHU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFNvcnRlZEluZGV4TmV4dCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGNvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoICYmIGNvbXBhcmF0b3IoY3VycmVudFR5cGVhaGVhZCwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2ldKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleE5leHRdLnVuc29ydGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbmRleChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbbG93ZXN0U29ydGVkSW5kZXhBbGxdLnVuc29ydGVkSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1cnJlbnRUeXBlYWhlYWRdKTtcclxuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IHRleHQsIC4uLmkgfSkgPT4ge1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoZXJlIHRvIGluc2VydCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIGFsbCBpbmRleCB2YWx1ZXMgc2hvdWxkIGJlIHVuaXF1ZSwgdGhlIHJldHVybmVkIHNvcnRlZEluZGV4XHJcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYWx3YXlzIHJlZmVyIHRvIGEgbmV3IGxvY2F0aW9uIChpLmUuIGJlIG5lZ2F0aXZlKSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKC1zb3J0ZWRJbmRleCAtIDEsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBmaW5kIHdoZXJlIHdlIHdlcmUgYW5kIHJlbW92ZSBvdXJzZWx2ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWdhaW4sIHdlIHNob3VsZCBhbHdheXMgZmluZCBvdXJzZWx2ZXMgYmVjYXVzZSB0aGVyZSBzaG91bGQgYmUgbm8gZHVwbGljYXRlIHZhbHVlcyBpZiBlYWNoIGluZGV4IGlzIHVuaXF1ZS5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBjb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA+PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydGVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKHNvcnRlZEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3RleHRdKTtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCxcclxuICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMsXHJcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcclxuICAgICAgICBpbnZhbGlkVHlwZWFoZWFkLFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogWW91ciB1c3VhbCBiaW5hcnkgc2VhcmNoIGltcGxlbWVudGF0aW9uLlxyXG4gKlxyXG4gKiBJdCdzIHVzZWQgaGVyZSB0byBxdWlja2x5IGZpbmQgYSBnb29kIHNwb3QgdG8gc3RhcnQgc2VhcmNoaW5nIGZvciBvdXIgbmV4dCB0eXBlYWhlYWQgY2FuZGlkYXRlLlxyXG4gKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaCB0aHJvdWdoXHJcbiAqIEBwYXJhbSB3YW50ZWQgVGhlIHZhbHVlIHlvdSdkIGxpa2UgdG8gZmluZFxyXG4gKiBAcGFyYW0gY29tcGFyYXRvciBDb21wYXJlcyBgd2FudGVkYCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlIGluIGBhcnJheWBcclxuICogQHJldHVybnMgQSBub24tbmVnYXRpdmUgdmFsdWUgaWYgYHdhbnRlZGAgd2FzIGZvdW5kLCBhbmQgYSBuZWdhdGl2ZSBudW1iZXIgaWYgbm90LlxyXG4gKiBUaGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBudW1iZXIsIG1pbnVzIG9uZSwgaXMgd2hlcmUgYHdhbnRlZGAgKndvdWxkKiBiZSBmb3VuZCBpZiBpdCAqd2FzKiBpbiBgYXJyYXlgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCB3YW50ZWQsIGNvbXBhcmF0b3IpIHtcclxuICAgIHZhciBmaXJzdEluZGV4ID0gMDtcclxuICAgIHZhciBsYXN0SW5kZXggPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKGZpcnN0SW5kZXggPD0gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgdmFyIHRlc3RJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSA+PiAxO1xyXG4gICAgICAgIHZhciBjb21wYXJpc29uUmVzdWx0ID0gY29tcGFyYXRvcih3YW50ZWQsIGFycmF5W3Rlc3RJbmRleF0pO1xyXG4gICAgICAgIGlmIChjb21wYXJpc29uUmVzdWx0ID4gMCkge1xyXG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gdGVzdEluZGV4ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29tcGFyaXNvblJlc3VsdCA8IDApIHtcclxuICAgICAgICAgICAgbGFzdEluZGV4ID0gdGVzdEluZGV4IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0SW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC1maXJzdEluZGV4IC0gMTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Uta2V5Ym9hcmQtbmF2aWdhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYSBwYXJlbnQgY29tcG9uZW50IHRvIGFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCBjZXJ0YWluXHJcbiAqIGNoaWxkIGNvbXBvbmVudHMgb25jZSB0aGV5IGhhdmUgcmVuZGVyZWQuXHJcbiAqXHJcbiAqIFRoaXMgaG9vayBpcyBzbGlnaHRseSBtb3JlIGNvbXBsaWNhdGVkIGluIHRoYXQgaXQgcmV0dXJucyBib3RoIGFcclxuICogcHJvcC1tb2RpZnlpbmcgaG9vaywgYnV0IGFsc28gYSBob29rIHRoYXQgZWFjaCBjaGlsZCB3aWxsIG5lZWRcclxuICogdG8gdXNlOiBgdXNlTWFuYWdlZENoaWxkYC4gIEl0J3Mgc3RhYmxlIGFjcm9zcyByZW5kZXJzLCBzbyBqdXN0XHJcbiAqIHRvc3MgaXQgaW50byBhIGBDb250ZXh0YCBzbyB0aGUgY2hpbGRyZW4gY2FuIGhhdmUgYWNjZXNzIHRvIGl0LlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJlZ2lzdGVycyB0aGUgY2hpbGQgd2l0aCB0aGUgcGFyZW50IGFuZCBwcm92aWRlc1xyXG4gKiBpdCB3aXRoIGFueSByZXF1ZXN0ZWQgaW5mb3JtYXRpb24sIGJ1dCBkb2Vzbid0IGRvIGFueXRoaW5nIGVsc2VcclxuICogdW50aWwgaXQgdW5tb3VudHMgYW5kIHJldHJhY3RzIHRoYXQgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRNYW5hZ2VyKCkge1xyXG4gICAgLy8gVGhpcyBpcyBibGluZGx5IHVwZGF0ZWQgYW55IHRpbWUgYSBjaGlsZCBtb3VudHMgb3IgdW5tb3VudHMgaXRzZWxmLlxyXG4gICAgLy8gVXNlZCB0byBtYWtlIHN1cmUgdGhhdCBhbnkgdGltZSB0aGUgYXJyYXkgb2YgbWFuYWdlZCBjaGlsZHJlbiB1cGRhdGVzLFxyXG4gICAgLy8gd2UgYWxzbyByZS1yZW5kZXIuXHJcbiAgICBjb25zdCBbY2hpbGRVcGRhdGVJbmRleCwgc2V0Q2hpbGRVcGRhdGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0b3RhbENoaWxkcmVuTW91bnRlZCwgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgc2V0VG90YWxDaGlsZHJlblVub3VudGVkLCBnZXRUb3RhbENoaWxkcmVuVW5vdW50ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGlsZHJlbkN1cnJlbnRseU1vdW50ZWQgPSB0b3RhbENoaWxkcmVuTW91bnRlZCAtIHRvdGFsQ2hpbGRyZW5Vbm91bnRlZDtcclxuICAgIGNvbnN0IG1hbmFnZWRDaGlsZHJlbiA9IHVzZVJlZihbXSAvKiogVE9ETzogQW55IHByb2JsZW1zIGNhdXNlZCBieSB1c2luZyBhbiBhcnJheSB3aGVuIGl0IHNob3VsZCBiZSBhbiBvYmplY3Q/ICovKTtcclxuICAgIGNvbnN0IG1vdW50ZWRDaGlsZHJlbiA9IHVzZVJlZihbXSk7XHJcbiAgICBjb25zdCBtb3VudE9yZGVyID0gdXNlUmVmKG5ldyBNYXAoKSk7XHJcbiAgICBjb25zdCBpbmRpY2VzQnlFbGVtZW50ID0gdXNlUmVmKG5ldyBNYXAoKSk7XHJcbiAgICBjb25zdCBkZWxldGVkSW5kaWNlcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgLy8gVXNlZCB0byBrZWVwIHRyYWNrIG9mIGluZGljZXMgdGhhdCBoYXZlIFwib3Zlci1tb3VudGVkXCIgYW5kIGJ5IGhvdyBtdWNoLlxyXG4gICAgLy8gV2UgbmVlZCB0aGlzIHNvIHRoYXQgd2UgZG9uJ3QgZXJhc2Ugc2F2ZWQgaW5mb3JtYXRpb24gd2hlbiBhIGNvbXBvbmVudFxyXG4gICAgLy8gXCJvdmVybW91bnRzXCIgb3ZlciBhbm90aGVyIHdoaWNoIHRoZW4sIGNvcnJlY3RseSwgc3dpdGNoZXMgKml0c2VsZiogdG8gc29tZXRoaW5nIGVsc2UuXHJcbiAgICAvLyBJbiBnZW5lcmFsLCB0aGlzIHNob3VsZCBvbmx5IGhhcHBlbiB3aGVuIGNvbXBvbmVudHMgYXJlIHN3YXBwaW5nIGJldHdlZW4gaW5kaWNlcy5cclxuICAgIC8vIEJ5IHRoZSB0aW1lIHRoZXkncmUgZG9uZSwgdGhpcyBtYXAgc2hvdWxkIGJlIGFsbCAwcyBhZ2FpbiwgYXQgd2hpY2ggcG9pbnRcclxuICAgIC8vIGl0J3Mgb2theSB0byBhY3R1YWxseSBydW4gdGhlIHVubW91bnQgY29kZS5cclxuICAgIC8vIFxyXG4gICAgLy8gVE9ETzogdGhyb3cgYSBjb25zb2xlLmFzc2VydCBzb21ld2hlcmUgdG8gbWFrZSB1cCBmb3IgdGhlIGxvc3QgXHJcbiAgICAvLyBcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVyd3JpdGUgdGhpcyBjaGlsZCdzIGluZGV4IVwiIGFzc2VydGlvbi5cclxuICAgIC8vIE5hbWVseSwgaXMgdGhpcyBtYXAgYWxsIDBzIHdoZW4gdGhlIHBhcmVudCBlbGVtZW50IHJlLXJlbmRlcnM/IFxyXG4gICAgLy8gUHJvYmFibHkgbm90IGJlY2F1c2Ugb2Ygc2V0Q2hpbGRVcGRhdGVJbmRleFxyXG4gICAgY29uc3Qgb3Zlcm1vdW50Q291bnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IGdldE1vdW50SW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+IHsgcmV0dXJuIG1vdW50T3JkZXIuY3VycmVudC5nZXQoaW5kZXgpOyB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VNYW5hZ2VkQ2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuc2V0KGVsZW1lbnQsIGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnQuZGVsZXRlKGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnQuYWRkKGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmZvLmluZGV4ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFttYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggLSAxXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5kZWxldGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGdldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKCk7XHJcbiAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5zZXQoaW5mby5pbmRleCwgaW5kZXgpO1xyXG4gICAgICAgICAgICBtb3VudGVkQ2hpbGRyZW4uY3VycmVudFtpbmRleF0gPSBpbmZvO1xyXG4gICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCh0ID0+ICsrdCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuZGVsZXRlKGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCh0ID0+ICsrdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW2luZm8uaW5kZXhdKTtcclxuICAgICAgICAvLyBBbnkgdGltZSBvdXIgY2hpbGQgcHJvcHMgY2hhbmdlLCBtYWtlIHRoYXQgaW5mb3JtYXRpb24gYXZhaWxhYmxlIGdlbmVyYWxseS5cclxuICAgICAgICAvLyAqRG9uJ3QgcmUtcmVuZGVyKiwgb3RoZXJ3aXNlIHdlJ2QgYmUgc3R1Y2sgaW4gYW5cclxuICAgICAgICAvLyBpbmZpbml0ZSBsb29wIGV2ZXJ5IHRpbWUgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIGlzIHBhc3NlZC5cclxuICAgICAgICAvLyBJdCBjb21lcyBpbiBmcm9tIHRoZSBwcm9wcyBzbyB0aGUgY2hpbGQgd2FzIGFscmVhZHkgdXBkYXRlZCBieSBpdCAtLVxyXG4gICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdGhlIHBhcmVudCB0byByZS1yZW5kZXIgZXZlcnkgc2luZ2xlIGNoaWxkIGFueSB0aW1lXHJcbiAgICAgICAgLy8gXCJvbkNsaWNrXCIgdXBkYXRlcyBvciB3aGF0ZXZlci4gIFRoZSByZWxldmFudCBjaGlsZCBhbHJlYWR5IGtub3dzLFxyXG4gICAgICAgIC8vIGFuZCB0aGF0J3Mgd2hhdCBtYXR0ZXJzLlxyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xyXG4gICAgICAgIH0sIFsuLi5PYmplY3QuZW50cmllcyhpbmZvKS5mbGF0KCldKTtcclxuICAgICAgICByZXR1cm4geyBnZXRFbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZU1hbmFnZWRDaGlsZCxcclxuICAgICAgICBjaGlsZENvdW50OiBjaGlsZHJlbkN1cnJlbnRseU1vdW50ZWQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudCxcclxuICAgICAgICBtb3VudGVkQ2hpbGRyZW46IG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50LFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQ6IGluZGljZXNCeUVsZW1lbnQuY3VycmVudCxcclxuICAgICAgICB0b3RhbENoaWxkcmVuTW91bnRlZCxcclxuICAgICAgICB0b3RhbENoaWxkcmVuVW5vdW50ZWQsXHJcbiAgICAgICAgZ2V0TW91bnRJbmRleCxcclxuICAgICAgICBkZWxldGVkSW5kaWNlczogZGVsZXRlZEluZGljZXMuY3VycmVudFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZXR0aW5nIGNoaWxkcmVuIGtub3cgd2hlbiB0aGV5IGFyZSBvciBhcmUgbm90IHRoZVxyXG4gKiBjdXJyZW50IHNlbGVjdGVkL2V4cGFuZGVkL2ZvY3VzZWQvd2hhdGV2ZXIgY2hpbGQuXHJcbiAqXHJcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB3aGVuIGNoaWxkcmVuIGFyZSBtb3VudGVkICYgdW5tb3VudGVkIGFuZCBzdWNoLlxyXG4gKlxyXG4gKiBXaGlsZSBpdCB3aWxsIGJlIGNhbGxlZCBvbmNlIGZvciBldmVyeSBjaGlsZCBvbiBtb3VudCwgYWZ0ZXIgdGhhdCBzZXRGbGFnXHJcbiAqIGlzIGd1YXJhbnRlZWQgdG8gb25seSBiZSBjYWxsZWQgb25jZSBvbiBhY3RpdmF0aW9uIGFuZCBvbmNlIG9uIGRlYWN0aXZhdGlvbixcclxuICogc28gaXQncyBnZW5lcmFsbHkgc2FmZSB0byBwdXQgc2lkZSBlZmZlY3RzIGluc2lkZSBpZiBuZWNlc3NhcnkuXHJcbiAqIEl0J3MgYWxzbyBzYWZlIHRvIG1ha2UgaXQgbm9uLXN0YWJsZS5cclxuICpcclxuICogQHBhcmFtIGFjdGl2YXRlZEluZGV4IFdoYXQgaW5kZXggdGhlIGN1cnJlbnQgc2VsZWN0ZWQgKGV0Yy4pIGNoaWxkIGlzXHJcbiAqIEBwYXJhbSBsZW5ndGggSG93IG1hbnkgY2hpbGRyZW4gZXhpc3QgKGFzIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgpXHJcbiAqIEBwYXJhbSBzZXRGbGFnIEEgZnVuY3Rpb24gdGhhdCBwcm9iYWJseSBsb29rcyBsaWtlIChpLCBmbGFnKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0QWN0aXZlKGZsYWcpXHJcbiAqIEBwYXJhbSB1c2VFZmZlY3QgV2hpY2ggdmVyc2lvbiBvZiB1c2VFZmZlY3QgdG8gdXNlLiBEZWZhdWx0IGlzIGB1c2VMYXlvdXRFZmZlY3RgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4LCBjbG9zZXN0Rml0LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldENoaWxkRmxhZywgZ2V0Q2hpbGRGbGFnLCB1c2VFZmZlY3QgfSkge1xyXG4gICAgdXNlRWZmZWN0ID8/PSB1c2VMYXlvdXRFZmZlY3Q7XHJcbiAgICBpZiAoY2xvc2VzdEZpdClcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiB8fCBhY3RpdmF0ZWRJbmRleCA9PSBudWxsKTtcclxuICAgIC8vIFdoZW5ldmVyIHdlIHJlLXJlbmRlciwgbWFrZSBzdXJlIHRoYXQgYW55IGNoaWxkcmVuIHRoYXQgaGF2ZSBtb3VudGVkXHJcbiAgICAvLyBoYXZlIHRoZWlyIGZsYWdzIHByb3Blcmx5IHNldC4gIFdlIGtub3cgaXQncyB1bnNldCBpZiBpdCB3YXMgbnVsbCxcclxuICAgIC8vIGluIHdoaWNoIGNhc2Ugd2UganVzdCBzZXQgaXQgdG8gdHJ1ZSBvciBmYWxzZS5cclxuICAgIC8vXHJcbiAgICAvLyBBbmQsIEkgbWVhbiwgYXMgbG9uZyBhcyB3ZSdyZSBhbHJlYWR5IGl0ZXJhdGluZyB0aHJvdWdoIGV2ZXJ5IGNoaWxkXHJcbiAgICAvLyBvbiBldmVyeSByZW5kZXIgdG8gY2hlY2sgZm9yIG5ld2x5IG1vdW50ZWQgY2hpbGRyZW4sIG1pZ2h0IGFzIHdlbGxcclxuICAgIC8vIGp1c3QgaGFuZGxlIGNoYW5nZWQgaW4gdGhlIGFjdGl2YXRlZEluZGV4IGhlcmUgdG9vLlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBXZSBoYXZlIGxpbWl0ZWQgaW5mb3JtYXRpb24gYWJvdXQgd2hlbiBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50c1xyXG4gICAgICAgIC8vIGFuZCBzbyB3ZSBkb24ndCBrbm93IHdoZXJlIHRvIGxvb2sgZm9yIGFueSBudWxsIGVudHJpZXMgdGhhdCBuZWVkIGNoYW5naW5nLlxyXG4gICAgICAgIC8vIFdlIGtub3cgd2hlbiBhY3RpdmF0ZWRJbmRleCBjaGFuZ2VzIGFuZCB3aGF0IGl0IHdhcywgYnV0IG5vdCBtdWNoIGVsc2UuXHJcbiAgICAgICAgLy8gTG9vcGluZyBvdmVyIGV2ZXJ5IGNoaWxkICp3b3JrcyosIGFuZCBpdCdzIG5vdCBhbiBleHBlbnNpdmUgbG9vcCBieSBhbnkgbWVhbnMsXHJcbiAgICAgICAgLy8gYnV0LCBsaWtlLCBldWdoLlxyXG4gICAgICAgIC8vIEFsc28sIGJlZm9yZSB3ZSBkbyBhbnl0aGluZywgc2VlIGlmIHdlIG5lZWQgdG8gXCJjb3JyZWN0XCIgYWN0aXZhdGVkSW5kZXguXHJcbiAgICAgICAgLy8gSXQgY291bGQgYmUgcG9pbnRpbmcgdG8gYSBjaGlsZCB0aGF0IGRvZXNuJ3QgZXhpc3QsIGFuZCBpZiBjbG9zZXN0Rml0IGlzIGdpdmVuLFxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gYWRqdXN0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGEgdmFsaWQgY2hpbGQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmF0ZWRJbmRleCA9PSBcIm51bWJlclwiICYmIEFycmF5LmlzQXJyYXkobWFuYWdlZENoaWxkcmVuKSAmJiBtYW5hZ2VkQ2hpbGRyZW5bYWN0aXZhdGVkSW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gT2ggZGVhci4gQXJlIHdlIGFjdGl2ZWx5IGNvcnJlY3RpbmcgdGhpcz9cclxuICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9oIGRlYXIuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggdXAgYW5kIGRvd24gdGhlIGxpc3Qgb2YgY2hpbGRyZW4gZm9yIGFueSB0aGF0IGFjdHVhbGx5IGV4aXN0LlxyXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaEhpZ2ggPSBhY3RpdmF0ZWRJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VhcmNoTG93ID0gYWN0aXZhdGVkSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSA9PSBudWxsKSB8fCAoc2VhcmNoSGlnaCA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaEhpZ2hdID09IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKytzZWFyY2hIaWdoO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tc2VhcmNoTG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaExvdyA+PSAwICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hMb3ddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA9IHNlYXJjaExvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaEhpZ2ggPCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbltzZWFyY2hIaWdoXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVkSW5kZXggPSBzZWFyY2hIaWdoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UndmUgZG9uZSB0aGF0LCBpZiBhbnkgdmFsaWQgY2hpbGRyZW4gZXhpc3QsIHdlJ3ZlIHJlc2V0IGFjdGl2YXRlZEluZGV4IHRvIHBvaW50IHRvIGl0IGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgd2UnbGwgZmFsbCB0aHJvdWdoIHRvIHRoZSBmb3IgbG9vcCBzZXQgYW5kIHVuc2V0IG91ciBmbGFncyBiYXNlZCBvbiB0aGlzIFwiY29ycmVjdGVkXCIgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgY29ycmVjdCBpdCBvciBzYXZlIGl0IGFueXdoZXJlIGJlY2F1c2Ugd2UnZCB2ZXJ5IG11Y2ggbGlrZSB0byByZXR1cm4gdG8gaXRcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGlsZCByZW1vdW50cyBpdHNlbGYuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWFuYWdlZENoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3VsZEJlU2V0ID0gKGkgPT0gYWN0aXZhdGVkSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldENoaWxkRmxhZyhpKSAhPSBzaG91bGRCZVNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG1hbmFnZWRDaGlsZHJlbikuZm9yRWFjaCgoW2ksIGluZm9dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkQmVTZXQgPSAoaSA9PSBhY3RpdmF0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRGbGFnKGksIHNob3VsZEJlU2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoaWxkLW1hbmFnZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG4vKipcclxuICogSW1wbGVtZW50cyBhIHJvdmluZyB0YWJpbmRleCBzeXN0ZW0gd2hlcmUgb25seSBvbmUgXCJmb2N1c2FibGVcIlxyXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXHJcbiAqIG9mIHRob3NlIGVsZW1lbnRzIHJlY2VpdmVzIGZvY3VzIGlzIGRldGVybWluZWQgYnkgeW91LCBidXQgaXQnc1xyXG4gKiByZWNvbW1lbmRlZCB0byBvZmZsb2FkIHRoYXQgbG9naWMgdGhlbiB0byBhbm90aGVyIGhvb2ssIGxpa2VcclxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXHJcbiAqIGVsZW1lbnQgd2l0aCB0aGUgYXJyb3cga2V5cywgYHVzZVR5cGVhaGVhZE5hdmlnYXRpb25gLCB3aGljaFxyXG4gKiBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdHlwZWFoZWFkLCBvclxyXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGNoaWxkIGhvb2sgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHVzZWRcclxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXHJcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2sgKnRoYXQqIGhvb2sgcmV0dXJucyBzaG91bGQgdGhlbiBiZSB1c2VkXHJcbiAqIG9uIHRoZSBjaGlsZCdzIGVsZW1lbnQsIGFzIHdlbGwgYXMgYW55IG90aGVyIGVsZW1lbnRzIHlvdSdkIGxpa2VcclxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxyXG4gKlxyXG4gKiBgc2hvdWxkRm9jdXNPbkNoYW5nZWAgc2hvdWxkIHJldHVybiB0cnVlIGlmIGZvY3VzIGlzXHJcbiAqIGNvbnRhaW5lZCB3aXRoaW4gd2hhdGV2ZXIgZWxlbWVudCBjb250YWlucyB0aGUgcm92aW5nIHRhYiBpbmRleC5cclxuICogR2VuZXJhbGx5IGFzIHNpbXBsZSBhcyB0aGUgZm9sbG93aW5nOlxyXG4gKiBgYGBcclxuICogY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICogY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1czxQYXJlbnRFbGVtZW50Pih7IHNldEZvY3VzZWRJbm5lciB9KTtcclxuICogY29uc3QgZm9jdXNPbkNoYW5nZSA9IChmb2N1c2VkSW5uZXIgIT0gZmFsc2UpO1xyXG4gKiBgYGBcclxuICogSXQncyBub3QgaW5jbHVkZWQgaGVyZSBiZWNhdXNlIGB1c2VSb3ZpbmdUYWJJbmRleGAgZG9lc24ndCBrbm93XHJcbiAqIGFueXRoaW5nIGFib3V0IHRoZSBjb250YWluZXIgZWxlbWVudCwgb25seSBjaGlsZHJlbiBlbGVtZW50cy5cclxuICogQW5kIGp1c3QgYXMgd2VsbCEgQ2hpbGRyZW4gc2hvdWxkIGJlIGFsbG93ZWQgYXQgdGhlIHJvb3QsXHJcbiAqIHJlZ2FyZGxlc3Mgb2YgaWYgaXQncyB0aGUgd2hvbGUgYXBwIG9yIGp1c3QgYSBnaXZlbiBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlOiBmb2MsIHRhYmJhYmxlSW5kZXggfSkge1xyXG4gICAgY29uc3QgZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSA9IHVzZVN0YWJsZUdldHRlcihmb2MpO1xyXG4gICAgY29uc3QgZ2V0VGFiYmFibGVJbmRleCA9IHVzZVN0YWJsZUdldHRlcih0YWJiYWJsZUluZGV4KTtcclxuICAgIGNvbnN0IHByZXZUYWJiYWJsZSA9IHVzZVJlZigtSW5maW5pdHkpO1xyXG4gICAgLy8gQ2FsbCB0aGUgaG9vayB0aGF0IGFsbG93cyB1cyB0byBjb2xsZWN0IGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gd2hvIHByb3ZpZGUgaXRcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBjaGlsZENvdW50LCB1c2VNYW5hZ2VkQ2hpbGQsIGluZGljZXNCeUVsZW1lbnQsIC4uLnJlc3QgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsXHJcbiAgICAvLyBub3RpZnkgdGhlIHByZXZpb3VzIGNoaWxkIHRoYXQgaXQncyBubyBsb25nZXIgdGFiYmFibGUsXHJcbiAgICAvLyBhbmQgbm90aWZ5IHRoZSBuZXh0IGNoaWxkIHRoYXQgaXMgYWxsb3dlZCB0byBiZSB0YWJiZWQgdG8uXHJcbiAgICB1c2VDaGlsZEZsYWcoe1xyXG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiB0YWJiYWJsZUluZGV4LFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcclxuICAgICAgICBjbG9zZXN0Rml0OiB0cnVlLFxyXG4gICAgICAgIHNldENoaWxkRmxhZzogKGluZGV4LCB0YWJiYWJsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LnNldFRhYmJhYmxlKHRhYmJhYmxlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldENoaWxkRmxhZzogKGluZGV4KSA9PiAobWFuYWdlZENoaWxkcmVuW2luZGV4XT8uZ2V0VGFiYmFibGUoKSA/PyBudWxsKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmb2N1c1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhYmJhYmxlSW5kZXggIT0gbnVsbClcclxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUpO1xyXG4gICAgfSwgW3RhYmJhYmxlSW5kZXhdKTtcclxuICAgIGNvbnN0IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQgPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtycmFmSW5kZXgsIHNldFJyYWZJbmRleF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgICAgICBjb25zdCByZXJlbmRlckFuZEZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRScmFmSW5kZXgoaSA9PiArK2kpOyB9LCBbXSk7XHJcbiAgICAgICAgY29uc3QgW3RhYmJhYmxlLCBzZXRUYWJiYWJsZSwgZ2V0VGFiYmFibGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgbGV0IG5ld0luZm8gPSB7XHJcbiAgICAgICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgICAgIHJlcmVuZGVyQW5kRm9jdXMsXHJcbiAgICAgICAgICAgIHNldFRhYmJhYmxlOiB1c2VDYWxsYmFjaygodGFiYmFibGUpID0+IHsgc2V0VGFiYmFibGUodGFiYmFibGUpOyB9LCBbXSksXHJcbiAgICAgICAgICAgIGdldFRhYmJhYmxlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRhYmJhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRGb2N1c09uQ2hhbmdlID0gZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSgpKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRm9jdXNPbkNoYW5nZSAmJiBcImZvY3VzXCIgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGFiYmFibGUsIHJyYWZJbmRleF0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzKHsgdGFiSW5kZXgsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4IH0sIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKHsgdGFiSW5kZXgsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyh7IHRhYkluZGV4IH0pLCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXHJcbiAgICAgICAgICAgIHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlTWFuYWdlZENoaWxkXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXHJcbiAgICAgICAgY2hpbGRDb3VudCxcclxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4sXHJcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcclxuICAgICAgICBmb2N1c0N1cnJlbnQ6IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0uZ2V0VGFiYmFibGUoKSkge1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXT8ucmVyZW5kZXJBbmRGb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRm9yIHdoYXRldmVyIHJlYXNvbiwgdGhlIHByZXZpb3VzbHkgdGFiYmFibGUgY2hpbGRcclxuICAgICAgICAgICAgICAgIC8vIGlzIG5vIGxvbmdlciB0YWJiYWJsZSB3aXRob3V0IHVzIGtub3dpbmcgYWJvdXQgaXQuXHJcbiAgICAgICAgICAgICAgICAvLyBNYXliZSBpdCB1bm1vdW50ZWQ/XHJcbiAgICAgICAgICAgICAgICAvLyBFaXRoZXIgd2F5LCB0cnkgdG8gZmluZCB0aGUgbmV3bHktc2VsZWN0ZWQgY2hpbGQuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gZ2V0VGFiYmFibGVJbmRleCgpID8/IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC0taTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICsrajtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW2dldFRhYmJhYmxlSW5kZXgoKSA/PyAwXS5nZXRUYWJiYWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltnZXRUYWJiYWJsZUluZGV4KCkgPz8gMF0/LnJlcmVuZGVyQW5kRm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtdKSxcclxuICAgICAgICAuLi5yZXN0XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xyXG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZywgZ2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xhc3REcm9wRWZmZWN0LCBzZXRMYXN0RHJvcEVmZmVjdCwgZ2V0TGFzdERyb3BFZmZlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IG9uRHJhZ1N0YXJ0ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAoZWZmZWN0QWxsb3dlZCA/PyBcImFsbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChkcmFnSW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCA/PyAwLCBkcmFnSW1hZ2VZT2Zmc2V0ID8/IDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW21pbWVUeXBlLCBkYXRhXSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShtaW1lVHlwZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9uRHJhZ0VuZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ICE9IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdERyb3BFZmZlY3QoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0LFxyXG4gICAgICAgICAgICBvbkRyYWdFbmQsXHJcbiAgICAgICAgICAgIHJlZlxyXG4gICAgICAgIH0sIHApO1xyXG4gICAgfSwgW2VmZmVjdEFsbG93ZWQsIGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCwgZHJhZ0ltYWdlWU9mZnNldCwgLi4uT2JqZWN0LmVudHJpZXMoZGF0YSkuZmxhdCgpXSk7XHJcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcclxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcclxuICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgdXNlRHJhZ2dhYmxlUHJvcHMsXHJcbiAgICAgICAgZHJhZ2dpbmcsXHJcbiAgICAgICAgZ2V0RHJhZ2dpbmcsXHJcbiAgICAgICAgLy8gU2V0IG9uY2UgYSBkcmFnIGhhcyBjb21wbGV0ZWQgd2l0aCB0aGUgcmVzdWx0aW5nIGFjdGlvblxyXG4gICAgICAgIC8vIFVzZWZ1bCBmb3IgcmVtb3ZpbmcgdGhlIGVsZW1lbnQgYWZ0ZXJ3YXJkcyBpZiBpdCB3YXMgXCJtb3ZlXCJcclxuICAgICAgICBsYXN0RHJvcEVmZmVjdCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZXN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TGFzdERyb3BFZmZlY3RcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kcmFnZ2FibGUuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG47XHJcbjtcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZUZpbGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGZpbGVOYW1lO1xyXG4gICAgZXJyb3JUeXBlO1xyXG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWUsIGJhc2UpIHtcclxuICAgICAgICBzdXBlcihiYXNlPy5tZXNzYWdlID8/IFwiQW4gdW5zcGVjaWZpZWQgZXJyb3Igb2NjdXJyZWQgcmVhZGluZyB0aGUgZmlsZS5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gYmFzZT8ubmFtZTtcclxuICAgIH1cclxufVxyXG4vL01lcmdlZFByb3BzPFVzZVJlZkVsZW1lbnRQcm9wc1JldHVyblR5cGU8RSwgUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgXCJvbkRyYWdFbnRlclwiIHwgXCJvbkRyYWdMZWF2ZVwiIHwgXCJvbkRyYWdPdmVyXCIgfCBcIm9uRHJvcFwiPj4sIFA+O1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHBhYmxlKHsgZWZmZWN0IH0pIHtcclxuICAgIGNvbnN0IFtmaWxlc0ZvckNvbnNpZGVyYXRpb24sIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdHJpbmdzRm9yQ29uc2lkZXJhdGlvbiwgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcHBlZEZpbGVzLCBzZXREcm9wcGVkRmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcHBlZFN0cmluZ3MsIHNldERyb3BwZWRTdHJpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BFcnJvciwgc2V0RHJvcEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAvLyBBbGwgdGhlIHByb21pc2VzIGdlbmVyYXRlZCBmcm9tIHRoZSBkcm9wIGV2ZW50cy5cclxuICAgIC8vIFVzZWQgdG8gcHJvY2VzcyBtdWx0aXBsZSBkcm9wIGV2ZW50cyBpbiBzdWNjZXNzaW9uXHJcbiAgICBjb25zdCBkcm9wUHJvbWlzZXNSZWYgPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQcm9taXNlSW5kZXgsIHNldEN1cnJlbnRQcm9taXNlSW5kZXgsIGdldEN1cnJlbnRQcm9taXNlSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3Byb21pc2VDb3VudCwgc2V0UHJvbWlzZUNvdW50LCBnZXRQcm9taXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAvLyBBbnkgdGltZSB3ZSBhZGQgYSBuZXcgcHJvbWlzZSwgaWYgdGhlcmUncyBubyBjdXJyZW50IHByb21pc2UgcnVubmluZywgd2UgbmVlZCB0byBzdGFydCBvbmUuXHJcbiAgICAvLyBJZiB0aGVyZSBpcyBvbmUsIHRoZW4gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZywgc2luY2UgaXQgcnVucyB0aGUgc2FtZSBjaGVjay5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb21pc2VJbmRleCA9IGdldEN1cnJlbnRQcm9taXNlSW5kZXgoKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlQ291bnQgPSBnZXRQcm9taXNlQ291bnQoKTtcclxuICAgICAgICBpZiAocHJvbWlzZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvbWlzZUNvdW50XSk7XHJcbiAgICAvLyBBbnl0aW1lIG91ciBjdXJyZW50IHByb21pc2UgY2hhbmdlcyxcclxuICAgIC8vIHdhaXQgZm9yIGl0IHRvIGZpbmlzaCwgdGhlbiBzZXQgb3VyIHN0YXRlIHRvIGl0cyByZXN1bHQuXHJcbiAgICAvLyBGaW5hbGx5LCBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueW1vcmUgcHJvbWlzZXMuXHJcbiAgICAvLyBJZiB0aGVyZSBhcmUsIHRoZW4gaW5jcmVhc2UgY3VycmVudFByb21pc2VDb3VudCxcclxuICAgIC8vIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGlzIGFnYWluLlxyXG4gICAgLy9cclxuICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiAqb2Z0ZW4qLCBidXQgbWF5YmUgaW4gdGhlIGNhc2Ugb2ZcclxuICAgIC8vIGluZGl2aWR1YWxseSBkcm9wcGluZyBhIGJ1bmNoIG9mIGxhcmdlIGZpbGVzIG9yIHNvbWV0aGluZy5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9taXNlSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZSA9IGRyb3BQcm9taXNlc1JlZi5jdXJyZW50W2N1cnJlbnRQcm9taXNlSW5kZXhdO1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvbWlzZS50aGVuKChpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5mbyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZmlsZXMsIHN0cmluZ3MgfSA9IGluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZEZpbGVzKGZpbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkU3RyaW5ncyhzdHJpbmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3JlIGRvbmUsIGFyZSB0aGVyZSBtb3JlIHByb21pc2VzIGluIHRoZSBxdWV1ZT9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlQ291bnQgPSBnZXRQcm9taXNlQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBwcm9taXNlIGhhcyBzdGFydGVkLCBtb3JlIGhhdmUgYmVlbiBhZGRlZC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdGhpcyBlZmZlY3QgYWdhaW4uXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb21pc2VJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJyZW50UHJvbWlzZUluZGV4XSk7XHJcbiAgICBjb25zdCB1c2VEcm9wcGFibGVQcm9wcyA9IChwKSA9PiB7XHJcbiAgICAgICAgLy9jb25zdCByZWYgPSB1c2VSZWY8RT4obnVsbCk7XHJcbiAgICAgICAgLy8gSGFuZGxlIGNvbGxlY3RpbmcgdGhlIGN1cnJlbnQgZmlsZSBtZXRhZGF0YSBvciBNSU1FIHR5cGVzLlxyXG4gICAgICAgIGNvbnN0IG9uRHJhZ0VudGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIElzIHRoZXJlIGEgZGVmYXVsdD8gSSBjYW4ndCBmaW5kIG9uZSBhbnl3aGVyZS5cclxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAoZWZmZWN0ID8/IFwibW92ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01pbWVUeXBlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNaW1lVHlwZXMuYWRkKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSBcImZpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKHsgdHlwZTogaXRlbS50eXBlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihuZXdGaWxlcyk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihuZXdNaW1lVHlwZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBIYW5kbGUgcmVzZXR0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlc1xyXG4gICAgICAgIGNvbnN0IG9uRHJhZ0xlYXZlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQm9pbGVycGxhdGUsIEkgZ3Vlc3NcclxuICAgICAgICBjb25zdCBvbkRyYWdPdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSGFuZGxlIGdldHRpbmcgdGhlIGRyb3AgZGF0YSBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIGNvbnN0IG9uRHJvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BEYXRhID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BGaWxlID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGl0ZW0uZ2V0QXNTdHJpbmcocmVzb2x2ZSkpKS50aGVuKHN0ciA9PiBkcm9wRGF0YVt0eXBlXSA9IHN0cikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BGaWxlLnB1c2goeyBkYXRhLCBuYW1lOiBmaWxlLm5hbWUsIHR5cGU6IGZpbGUudHlwZSwgc2l6ZTogZGF0YS5ieXRlTGVuZ3RoLCBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRyb3BQcm9taXNlc1JlZi5jdXJyZW50LnB1c2goUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcclxuICAgICAgICAgICAgICAgIHNldERyb3BFcnJvcihudWxsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogZHJvcERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXM6IGRyb3BGaWxlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KS5jYXRjaChleCA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcclxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IoZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25EcmFnRW50ZXIsIG9uRHJhZ0xlYXZlLCBvbkRyYWdPdmVyLCBvbkRyb3AgfSwgcCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VEcm9wcGFibGVQcm9wcyxcclxuICAgICAgICBmaWxlc0ZvckNvbnNpZGVyYXRpb24sXHJcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXHJcbiAgICAgICAgZHJvcHBlZEZpbGVzLFxyXG4gICAgICAgIGRyb3BwZWRTdHJpbmdzLFxyXG4gICAgICAgIGRyb3BFcnJvclxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJvcHBhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhdHRhY2hpbmcgYW4gZXZlbnQgaGFuZGxlciB0byBhbnkgKm5vbi1QcmVhY3QqIGVsZW1lbnQsIGFuZCByZW1vdmluZyBpdCB3aGVuIHRoZSBjb21wb25lbnQgdXNpbmcgdGhlIGhvb2sgdW5tb3VudHMuIFRoZSBjYWxsYmFjayBkb2VzIG5vdCBuZWVkIHRvIGJlIHN0YWJsZSBhY3Jvc3MgcmVuZGVycy5cclxuICpcclxuICogRHVlIHRvIHR5cGluZyBsaW1pdGF0aW9ucywgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBsaWtlIHRoaXM6XHJcbiAqXHJcbiAqIGB1c2VFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJpbnB1dFwiKTxJbnB1dEV2ZW50PihlID0+IHt9KWBcclxuICpcclxuICogVGhlIHR5cGUgYXJndW1lbnQgaXMgb3B0aW9uYWwsIGJ1dCBuYXJyb3dzIGRvd24gdGhlIHR5cGUgZnJvbSBcImEgdW5pb24gb2YgYWxsIGV2ZW50c1wiIHRvIHdoYXRldmVyIHlvdSBzcGVjaWZ5LCBhbmQgZXJyb3JzIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXHJcbiAqXHJcbiAqIFRoZXJlIGlzIGEgc2VwYXJhdGUgdmVyc2lvbiB0aGF0IGF0dGFjaGVzIGV2ZW50IGhhbmRsZXJzIHRvIGEgc2V0IG9mIHByb3BzLlxyXG4gKiBJdCB0YWtlcyBkaWZmZXJlbnQgZXZlbnQgc3RyaW5nIHR5cGVzIChvbkV2ZW50IHZzIG9uZXZlbnQpLlxyXG4gKlxyXG4gKiBAcGFyYW0gdGFyZ2V0IEEgKm5vbi1QcmVhY3QqIG5vZGUgdG8gYXR0YWNoIHRoZSBldmVudCB0by5cclxuICogQHJldHVybnNcclxuICogKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdsb2JhbEhhbmRsZXIodGFyZ2V0LCB0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XHJcbiAgICAvLyBOb3RlIHRvIHNlbGY6IFRoZSB0eXBpbmcgZG9lc24ndCBpbXByb3ZlIGV2ZW4gaWYgdGhpcyBpcyBzcGxpdCB1cCBpbnRvIGEgc3ViLWZ1bmN0aW9uLlxyXG4gICAgLy8gTm8gbWF0dGVyIHdoYXQsIGl0IHNlZW1zIGltcG9zc2libGUgdG8gZ2V0IHRoZSBoYW5kbGVyJ3MgZXZlbnQgb2JqZWN0IHR5cGVkIHBlcmZlY3RseS5cclxuICAgIC8vIEl0IHNlZW1zIGxpa2UgaXQncyBndWFyYW50ZWVkIHRvIGFsd2F5cyBiZSBhIHVuaW9uIG9mIGFsbCBhdmFpbGFibGUgdHVwZXMuXHJcbiAgICAvLyBBZ2Fpbiwgbm8gbWF0dGVyIHdoYXQgY29tYmluYXRpb24gb2Ygc3ViLSBvciBzdWItc3ViLWZ1bmN0aW9ucyB1c2VkLlxyXG4gICAgbGV0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGlmIChoYW5kbGVyID09IG51bGwpXHJcbiAgICAgICAgc3RhYmxlSGFuZGxlciA9IG51bGw7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGFibGVIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHN0YWJsZUhhbmRsZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RhcmdldCwgdHlwZSwgc3RhYmxlSGFuZGxlcl0pO1xyXG59XHJcbi8qKlxyXG4gKiBBbiBhbHRlcm5hdGl2ZSB3YXkgdG8gYWRkIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW4gZWxlbWVudC4gVXNlZnVsIHByaW1hcmlseSB3aGVuIGludGVncmF0aW5nIDNyZCBwYXJ0eSBsaWJyYXJpZXMgdGhhdCBleHBlY3QgYSBnZW5lcmljIFwiYWRkIGV2ZW50IGhhbmRsZXJcIiBmdW5jdGlvbi5cclxuICpcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byBtb2RpZnkgYSBzZXQgb2YgcHJvcHMgdG8gYXBwbHkgdGhpcyBoYW5kbGVyLlxyXG4gKlxyXG4gKiBGb3IgdHlwaW5nIHJlYXNvbnMsIHRoaXMgZnVuY3Rpb24gaXMgc3BsaXQgaW50byB0d28uICBVc2FnZSBpcyBsaWtlIHRoZSBmb2xsb3dpbmc6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfSA9IHVzZUxvY2FsRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PigpKFwib25Nb3VzZURvd25cIiwgZSA9PiB7ICB9KTtcclxuICogY29uc3QgZGl2UHJvcHMgPSB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzKHByb3BzKTtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxIYW5kbGVyKCkge1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCh0eXBlLCBoYW5kbGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhYmxlSGFuZGxlciA9IHVzZVN0YWJsZUNhbGxiYWNrKGhhbmRsZXIpO1xyXG4gICAgICAgIGNvbnN0IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBbdHlwZV06IHN0YWJsZUhhbmRsZXIgfSwgcHJvcHMpO1xyXG4gICAgICAgIH0sIFt0eXBlXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ldmVudC1oYW5kbGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuLyoqXHJcbiAqXHJcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpZmZlcmVudCB3YXlzIHRoYXQgYSBmb2N1cyBldmVudCBjYW4gaGFwcGVuLiAgQXNzdW1lXHJcbiAqIHRoZSBmb2xsb3dpbmcgc3RlcHMgaGFwcGVuIGluIG9yZGVyOlxyXG4gKlxyXG4gKiAxLiBUaGUgcGFnZSBsb2Fkcy5cclxuICogICAgKiBOb3RoaW5nIGlzIGZvY3VzZWQsIGJ1dCBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYGJvZHlgLlxyXG4gKiAgICAqIE5vIGZvY3VzIGV2ZW50cyBhcmUgZmlyZWQuXHJcbiAqIDIuIFRoZSB3aW5kb3cgaXMgZm9jdXNlZCwgYW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCByZW1haW5zIGFzIGBib2R5YC5cclxuICogICAgKiBBIGBmb2N1c2AvYGZvY3VzaW5gIGV2ZW50ICpNSUdIVCogYmUgZmlyZWQgZm9yIGBib2R5YC4gRGVwZW5kaW5nIG9uXHJcbiAqICAgICAgdGhlIGJyb3dzZXIsIHRoaXMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBoYW5kbGVyIHdhcyBhdHRhY2hlZCB0byBgd2luZG93YCBvciBgZG9jdW1lbnRgLlxyXG4gKiAgICAgIFByb2JhYmx5IGp1c3QgYmVzdCB0byBub3QgcmVseSBvbiBpdCwgb3IgbGlzdGVuIHRvIGB3aW5kb3dgIGZvY3VzIGV2ZW50cyBkaXJlY3RseS5cclxuICogMy4gQSBmb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCBldGMuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50IGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cclxuICogICAgKiBgZm9jdXNvdXRgIGFuZCBgYmx1cmAgYXJlICpub3QqIGZpcmVkIG9uIGBib2R5YC5cclxuICogICAgKiBgZm9jdXNgIGFuZCBgZm9jdXNpbmAgYXJlIGZpcmVkIG9uIHRoZSBuZXcgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXHJcbiAqIDQuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxyXG4gKiAgICAqICoqVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIGBib2R5YCoqIGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cclxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIG5vdyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50LlxyXG4gKiAgICAqIGBmb2N1c2luYCBpcyBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgb2xkIGVsZW1lbnQuXHJcbiAqIDUuIEFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIGBib2R5YC5cclxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXHJcbiAqICAgICogYGZvY3VzaW5gIGlzICpub3QqIGZpcmVkIG9uIGBib2R5YC5cclxuICpcclxuICpcclxuICogSW4gc3VtbWFyeTpcclxuICogMS4gRm9jdXMgZXZlbnRzICpkbyogbm90aWZ5IHVzIG9mIGFsbCBjaGFuZ2VzIGluIGZvY3VzLCBidXQgdGhlcmUgaXMgbm8gb25lIHNpbmdsZSBjb21wcmVoZW5zaXZlIGV2ZW50IHRoYXQgcHJvdmlkZXMgdXMgd2l0aCBhbGwgYXZhaWxhYmxlIGluZm9ybWF0aW9uLlxyXG4gKiAyLiBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgKmlzIG5vdCogYWx3YXlzIHRoZSBzYW1lIGFzIHdoYXQncyBiZWluZyByZWZlcmVuY2VkIGJ5IGEgZm9jdXMgZXZlbnQuIEluIHBhcnRpY3VsYXIsIGl0IG1heSBiZWNvbWUgYGJvZHlgIGF0IGFueSBhcmJpdHJhcnkgdGltZS5cclxuICogMy4gQSBgYmx1cmAgd2l0aG91dCBhIGBmb2N1c2AgY2FuIGFuZCB3aWxsIG9jY3VyLiBUaGlzIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBzb2xlbHkgdXNlIGBmb2N1c2AgdG8gZGV0ZWN0IGFsbCBjaGFuZ2VzLlxyXG4gKiA0LiBBIGBibHVyYCBldmVudCB3aG9zZSBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSB3aWxsIGJlIG5vIGZvbGxvd2luZyBgZm9jdXNgIGV2ZW50LlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICogQHJldHVybnNcclxuICovXHJcbmNvbnN0IGR1bW15ID0gMDtcclxuY29uc3QgYWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IFNldCgpO1xyXG5jb25zdCBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IFNldCgpO1xyXG5jb25zdCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMgPSBuZXcgU2V0KCk7XHJcbmxldCB3aW5kb3dGb2N1c2VkID0gdHJ1ZTtcclxuZnVuY3Rpb24gZm9jdXNvdXQoZSkge1xyXG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBhY3RpdmVFbGVtZW50VXBkYXRlcnMpXHJcbiAgICAgICAgICAgIGY/LihudWxsKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIEp1c3Qgd2FpdCBmb3IgdGhlIGZvY3VzaW4gZXZlbnQuXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZm9jdXNpbihlKSB7XHJcbiAgICBsZXQgY3VycmVudGx5Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIGxldCBsYXN0Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIGFjdGl2ZUVsZW1lbnRVcGRhdGVycy5mb3JFYWNoKGYgPT4gZj8uKGN1cnJlbnRseUZvY3VzZWRFbGVtZW50KSk7XHJcbiAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmZvckVhY2goZiA9PiBmPy4obGFzdEZvY3VzZWRFbGVtZW50KSk7XHJcbn1cclxuZnVuY3Rpb24gd2luZG93Rm9jdXMoKSB7XHJcbiAgICB3aW5kb3dGb2N1c2VkID0gdHJ1ZTtcclxuICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5mb3JFYWNoKGYgPT4gZj8uKHdpbmRvd0ZvY3VzZWQpKTtcclxufVxyXG5mdW5jdGlvbiB3aW5kb3dCbHVyKCkge1xyXG4gICAgd2luZG93Rm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmZvckVhY2goZiA9PiBmPy4od2luZG93Rm9jdXNlZCkpO1xyXG59XHJcbi8qKlxyXG4gKiBBbGxvd3MgeW91IHRvIGluc3BlY3Qgd2hpY2ggZWxlbWVudCBpbiB0aGUgYGRvY3VtZW50YCBjdXJyZW50bHkgaGFzIGZvY3VzLCB3aGljaCB3YXMgbW9zdCByZWNlbnRseSBmb2N1c2VkIGlmIG5vbmUgYXJlIGN1cnJlbnRseSwgYW5kIHdoZXRoZXIgb3Igbm90IHRoZSB3aW5kb3cgaGFzIGZvY3VzIGJ5IHJldHVybmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcclxuICogKiBgZ2V0QWN0aXZlRWxlbWVudCgpYFxyXG4gKiAqIGBnZXRMYXN0QWN0aXZlRWxlbWVudCgpYFxyXG4gKiAqIGBnZXRXaW5kb3dGb2N1c2VkKClgXHJcbiAqICogKipObyBwcm9wLW1vZGlmeWluZyBob29rIGlzIHJldHVybmVkIGJlY2F1c2Ugbm9uZSBpcyBuZWNlc3NhcnkqKlxyXG4gKlxyXG4gKiAoVGhlIGRvY3VtZW50J3MgYm9keSByZWNlaXZpbmcgZm9jdXMsIGxpa2UgaXQgZG9lcyB3aGVuIHlvdSBjbGljayBvbiBhbiBlbXB0eSBhcmVhLCBpcyBjb3VudGVkIGFzIG5vIGVsZW1lbnQgaGF2aW5nIGZvY3VzIGZvciBhbGwgaW50ZW50cyBhbmQgcHVycG9zZXMpXHJcbiAqXHJcbiAqIFRoaXMgaXMgYSBwYXNzaXZlIGhvb2ssIHNvIGJ5IGRlZmF1bHQgaXQgcmV0dXJucyBnZXR0ZXIgZnVuY3Rpb25zIHRoYXQgcmVwb3J0IHRoaXMgaW5mb3JtYXRpb24gYnV0IHRoZSBjb21wb25lbnQgd2lsbCBub3QgcmUtcmVuZGVyIGJ5IGRlZmF1bHQgd2hlbiB0aGUgYWN0aXZlIGVsZW1lbnQgY2hhbmdlcy5cclxuICpcclxuICogSWYgeW91IG5lZWQgdGhlIGNvbXBvbmVudCB0byByZS1yZW5kZXIgd2hlbiB0aGUgYWN0aXZlIGVsZW1lbnQgY2hhbmdlcywgdXNlIHRoZSBgb24qQ2hhbmdlYCBhcmd1bWVudHMgdG8gc2V0IHNvbWUgc3RhdGUgb24geW91ciBlbmQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aXZlRWxlbWVudCh7IG9uQWN0aXZlRWxlbWVudENoYW5nZSwgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZSwgb25XaW5kb3dGb2N1c2VkQ2hhbmdlIH0pIHtcclxuICAgIGNvbnN0IFtnZXRBY3RpdmVFbGVtZW50LCBzZXRBY3RpdmVFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2dldFdpbmRvd0ZvY3VzZWQsIHNldFdpbmRvd0ZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uV2luZG93Rm9jdXNlZENoYW5nZSwgKCkgPT4gd2luZG93Rm9jdXNlZCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCB0aGVtIGV2ZW4gaWYgdGhleSdyZSB1bmRlZmluZWQgdG8gbW9yZSBlYXNpbHlcclxuICAgICAgICAvLyBtYW5hZ2UgdGhlIFwiPjAgbWVhbnMgZG9uJ3QgYWRkIGhhbmRsZXJzXCIgbG9naWMuXHJcbiAgICAgICAgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzZXRBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzZXRMYXN0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmFkZChzZXRXaW5kb3dGb2N1c2VkKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZGVsZXRlKHNldEFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmRlbGV0ZShzZXRMYXN0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5kZWxldGUoc2V0V2luZG93Rm9jdXNlZCk7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHsgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRDaGFuZ2VkLCBvbkZvY3VzZWRJbm5lckNoYW5nZWQsIG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2UsIG9uV2luZG93Rm9jdXNlZENoYW5nZSB9KSB7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICBjb25zdCBbZ2V0Rm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VQYXNzaXZlU3RhdGUob25Gb2N1c2VkQ2hhbmdlZCwgKCkgPT4gZmFsc2UpO1xyXG4gICAgY29uc3QgW2dldEZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVBhc3NpdmVTdGF0ZShvbkZvY3VzZWRJbm5lckNoYW5nZWQsICgpID0+IGZhbHNlKTtcclxuICAgIGNvbnN0IFtnZXRMYXN0Rm9jdXNlZCwgc2V0TGFzdEZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEZvY3VzZWRDaGFuZ2VkLCAoKSA9PiBmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2V0TGFzdEZvY3VzZWRJbm5lciwgc2V0TGFzdEZvY3VzZWRJbm5lcl0gPSB1c2VQYXNzaXZlU3RhdGUob25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCwgKCkgPT4gZmFsc2UpO1xyXG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9ID0gdXNlQWN0aXZlRWxlbWVudCh7XHJcbiAgICAgICAgb25BY3RpdmVFbGVtZW50Q2hhbmdlOiAoYWN0aXZlRWxlbWVudCwgcHJldkFjdGl2ZUVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWQgPSAoc2VsZkVsZW1lbnQgIT0gbnVsbCAmJiAoc2VsZkVsZW1lbnQgPT0gYWN0aXZlRWxlbWVudCkpO1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSAoISFzZWxmRWxlbWVudD8uY29udGFpbnMoYWN0aXZlRWxlbWVudCkpO1xyXG4gICAgICAgICAgICBzZXRGb2N1c2VkKGZvY3VzZWQpO1xyXG4gICAgICAgICAgICBzZXRGb2N1c2VkSW5uZXIoZm9jdXNlZElubmVyKTtcclxuICAgICAgICAgICAgb25BY3RpdmVFbGVtZW50Q2hhbmdlPy4oYWN0aXZlRWxlbWVudCwgcHJldkFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25MYXN0QWN0aXZlRWxlbWVudENoYW5nZTogKGxhc3RBY3RpdmVFbGVtZW50LCBwcmV2TGFzdEFjdGl2ZUVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWQgPSAoc2VsZkVsZW1lbnQgIT0gbnVsbCAmJiAoc2VsZkVsZW1lbnQgPT0gbGFzdEFjdGl2ZUVsZW1lbnQpKTtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXNlZElubmVyID0gKCEhc2VsZkVsZW1lbnQ/LmNvbnRhaW5zKGxhc3RBY3RpdmVFbGVtZW50KSk7XHJcbiAgICAgICAgICAgIHNldExhc3RGb2N1c2VkKGZvY3VzZWQpO1xyXG4gICAgICAgICAgICBzZXRMYXN0Rm9jdXNlZElubmVyKGZvY3VzZWRJbm5lcik7XHJcbiAgICAgICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U/LihsYXN0QWN0aXZlRWxlbWVudCwgcHJldkxhc3RBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uV2luZG93Rm9jdXNlZENoYW5nZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1c2VIYXNGb2N1c1Byb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7IHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpOyB9LCBbdXNlUmVmRWxlbWVudFByb3BzXSk7XHJcbiAgICByZXR1cm4geyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRFbGVtZW50LCBnZXRGb2N1c2VkLCBnZXRGb2N1c2VkSW5uZXIsIGdldExhc3RGb2N1c2VkLCBnZXRMYXN0Rm9jdXNlZElubmVyLCBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrKTtcclxuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcclxuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xyXG4gICAgICAgIGlmIChpbnRlcnZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgIC8vIHRoYXQgY2xlYXJzIGFuZCByZXNldHMgdGhlIGludGVydmFsIGlmIGl0IGNoYW5nZXMuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0YWJsZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IGxhc3REZWxheVVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGxhc3REZWxheVVzZWQgPSBjdXJyZW50SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24gfSBmcm9tIFwiLi91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUm92aW5nVGFiSW5kZXggfSBmcm9tIFwiLi91c2Utcm92aW5nLXRhYmluZGV4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKlxyXG4gKiBUT0RPOiBUaGlzIHRhYmxlIHdhcyBzY3JhcHBlZCB3aGVuIHRoaXMgd2FzIGNoYW5nZWQgdG8ganVzdCBhY2NlcHQgYSBjb2xsYXRvciBkaXJlY3RseSxcclxuICogYnV0IGl0J3Mgbm90IGJhZCBmb3IgYSBjb2xsYXRpb24gY3Jhc2ggY291cnNlIGFuZCBJIG1pZ2h0IHVzZSBpdCBhZ2Fpbi5cclxuICogRXZlbiBqdXN0IGFzIGEgXCJ0aGlzIGlzIHdoeSBpdCdzIGltcG9ydGFudCBhbmQgZ29vZCB0byB1c2UgdGhlc2UgdGhpbmdzXCIgdGhpbmcuXHJcbiAqXHJcbiAqIHxMYW5nLnxUYXJnZXR8VXNlciBpbnB1dHxgYmFzZWB8YGFjY2VudGB8YGNhc2VgfGB2YXJpYW50YHxcclxuICogfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18XHJcbiAqIHxFTnxIaXxIaXzinIV84pyFfOKchXzinIV8XHJcbiAqIHxFTnxIaXzvvKjvvYl84pyFfOKchXzinIV84p2MfFxyXG4gKiB8RU58SGl8aGl84pyFfOKchXzinYx84p2MfFxyXG4gKiB8RU58SGl8SMOvfOKchXzinYx84p2MfOKdjHxcclxuICogfEVOfEhpfEJ5ZXzinYx84p2MfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxhYXzinIV84pyFfOKchXzinYx8XHJcbiAqIHxEQXzDpXxBQXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxBYXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxFTnzDpXxhYXzinYx84p2MfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxhQXzinYx84p2MfOKdjHzinYx8XHJcbiAqIHxFTnzDpXxhfOKchXzinIV84p2MfOKdjHxcclxuICogfERBfMOlfGF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8SlB876qqfOedgHzinIV84pyFfOKchXzinIV8XHJcbiAqIHxKUHzjgqt87722fOKchXzinIV84pyFfOKchXxcclxuICogfEpQfOOCq3zjgYt84pyFfOKchXzinIV84p2MfFxyXG4gKiB8SlB844KrfOODtXzinIV84pyFfOKchXzinYx8XHJcbiAqIHxKUHzjgqt844uVfOKchXzinIV84p2MfOKdjHxcclxuICogfEpQfOOCq3zjgqx84pyFfOKdjHzinYx84p2MfFxyXG4gKiB8SlB844KrfOWKm3zinYx84p2MfOKdjHzinYx8XHJcbiAqIHxaSHzntIV857qifOKdjHzinYx84p2MfOKdjHxcclxuICpcclxuICpcclxuICogKE5vdGUgdG8gc2VsZjogQXQgc29tZSBwb2ludCwgdGhpcyBmaWxlIHdpbGwgcHJvYmFibHkgYmUgbm9ybWFsaXplZFxyXG4gKiBieSBzb21lYm9keSBhbmQg76qqIHdpbGwgdHVybiBiYWNrIGludG8g552ALilcclxuICpcclxuICovXHJcbmNvbnN0IGR1bW15ID0gbnVsbDtcclxuO1xyXG5mdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIHByb3BlciBrZXlib2FyZCBuYXZpZ2F0aW9uIGZvciBjb21wb25lbnRzIGxpa2UgbGlzdGJveGVzLCBidXR0b24gZ3JvdXBzLCBtZW51cywgZXRjLlxyXG4gKlxyXG4gKiBJbiB0aGUgZG9jdW1lbnQgb3JkZXIsIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgXCJmb2N1c2VkXCIgb3IgXCJ0YWJiYWJsZVwiIGVsZW1lbnQsIG1ha2luZyBpdCBhY3QgbW9yZSBsaWtlIG9uZSBjb21wbGV0ZSB1bml0IGluIGNvbXBhcmlzb24gdG8gZXZlcnl0aGluZyBhcm91bmQgaXQuXHJcbiAqIE5hdmlnYXRpbmcgZm9yd2FyZHMvYmFja3dhcmRzIGNhbiBiZSBkb25lIHdpdGggdGhlIGFycm93IGtleXMsIEhvbWUvRW5kIGtleXMsIG9yIGFueSBhbnkgdGV4dCBmb3IgdHlwZWFoZWFkIHRvIGZvY3VzIHRoZSBuZXh0IGl0ZW0gdGhhdCBtYXRjaGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpc3ROYXZpZ2F0aW9uKHsgaW5pdGlhbEluZGV4LCBzaG91bGRGb2N1c09uQ2hhbmdlLCBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlciB9KSB7XHJcbiAgICBpbmRleE1hbmdsZXIgPz89IGlkZW50aXR5O1xyXG4gICAgaW5kZXhEZW1hbmdsZXIgPz89IGlkZW50aXR5O1xyXG4gICAga2V5TmF2aWdhdGlvbiA/Pz0gXCJlaXRoZXJcIjtcclxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XHJcbiAgICAvLyBXaGF0IGl0IGlzLCBhbmQgd2hldGhlciwgd2hlbiB3ZSByZW5kZXIgdGhpcyBjb21wb25lbnQgYW5kIGl0J3MgY2hhbmdlZCwgdG8gYWxzbyBmb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBtYWRlIHRhYmJhYmxlLlxyXG4gICAgY29uc3QgW3RhYmJhYmxlSW5kZXgsIHNldFRhYmJhYmxlSW5kZXgsIGdldFRhYmJhYmxlSW5kZXhdID0gdXNlU3RhdGUoaW5pdGlhbEluZGV4ID09PSB1bmRlZmluZWQgPyAwIDogaW5pdGlhbEluZGV4KTtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBpbmRpY2VzQnlFbGVtZW50LCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBmb2N1c0N1cnJlbnQsIC4uLnJlc3QgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHsgc2hvdWxkRm9jdXNPbkNoYW5nZSwgdGFiYmFibGVJbmRleCB9KTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIoMCkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIobWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDEpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIoaSA/PyAwKSAtIDEpKTsgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGkgPT4gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKGkgPz8gMCkgKyAxKSk7IH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XHJcbiAgICBjb25zdCBzZXRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaW5kZXgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgeyBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleDogZ2V0VGFiYmFibGVJbmRleCwgc2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQ6IDEwMDAgfSk7XHJcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG5hdmlnYXRpb25EaXJlY3Rpb246IGtleU5hdmlnYXRpb24sIGluZGV4OiBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QgfSk7XHJcbiAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvblByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyh1c2VUeXBlYWhlYWROYXZpZ2F0aW9uUHJvcHMocHJvcHMpKTtcclxuICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wc10pO1xyXG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyAuLi5yZXN0IH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQoaW5mbyk7XHJcbiAgICAgICAgLy9jb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoaW5mbyBhcyBJKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcywgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsIHRhYmJhYmxlIH0gPSB1c2VSb3ZpbmdUYWJJbmRleENoaWxkKGluZm8pO1xyXG4gICAgICAgIGNvbnN0IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyA9IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzKCgoeyBvbkNsaWNrOiByb3ZlVG9TZWxmIH0pKSksIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJvdmVUb1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTsgfSwgW10pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyxcclxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHM6IHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBuYXZpZ2F0ZVRvSW5kZXhdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCxcclxuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblByb3BzLFxyXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXHJcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcclxuICAgICAgICB0YWJiYWJsZUluZGV4LFxyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxyXG4gICAgICAgIG5hdmlnYXRlVG9OZXh0LFxyXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxyXG4gICAgICAgIG5hdmlnYXRlVG9GaXJzdCxcclxuICAgICAgICBuYXZpZ2F0ZVRvTGFzdCxcclxuICAgICAgICBmb2N1c0N1cnJlbnQsXHJcbiAgICAgICAgLi4ucmVzdFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjIuMVxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHt9IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNDb250ZW50RWRpdGFibGUgPSBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcblxuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHtcbiAgICByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICB9IC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG5cblxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAvLyAgeWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAvLyAgb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuXG5cbiAgaWYgKChub2RlLm5vZGVOYW1lID09PSAnQVVESU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdWSURFTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnKSAmJiBub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IG5vZGUub3duZXJEb2N1bWVudDtcblxuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcblxuICB2YXIgcmFkaW9TZXQ7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xuXG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xuXG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIGRpc3BsYXlDaGVjaykge1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IC8vIGZvcm0gZmllbGRzIChuZXN0ZWQpIGluc2lkZSBhIGRpc2FibGVkIGZpZWxkc2V0IGFyZSBub3QgZm9jdXNhYmxlL3RhYmJhYmxlXG4vLyAgdW5sZXNzIHRoZXkgYXJlIGluIHRoZSBfZmlyc3RfIDxsZWdlbmQ+IGVsZW1lbnQgb2YgdGhlIHRvcC1tb3N0IGRpc2FibGVkXG4vLyAgZmllbGRzZXRcblxuXG52YXIgaXNEaXNhYmxlZEZyb21GaWVsZHNldCA9IGZ1bmN0aW9uIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkge1xuICBpZiAoaXNJbnB1dChub2RlKSB8fCBub2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBub2RlLnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0ZJRUxEU0VUJyAmJiBwYXJlbnROb2RlLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIGxvb2sgZm9yIHRoZSBmaXJzdCA8bGVnZW5kPiBhcyBhbiBpbW1lZGlhdGUgY2hpbGQgb2YgdGhlIGRpc2FibGVkXG4gICAgICAgIC8vICA8ZmllbGRzZXQ+OiBpZiB0aGUgbm9kZSBpcyBpbiB0aGF0IGxlZ2VuZCwgaXQnbGwgYmUgZW5hYmxlZCBldmVuXG4gICAgICAgIC8vICB0aG91Z2ggdGhlIGZpZWxkc2V0IGlzIGRpc2FibGVkOyBvdGhlcndpc2UsIHRoZSBub2RlIGlzIGluIGFcbiAgICAgICAgLy8gIHNlY29uZGFyeS9zdWJzZXF1ZW50IGxlZ2VuZCwgb3Igc29tZXdoZXJlIGVsc2Ugd2l0aGluIHRoZSBmaWVsZHNldFxuICAgICAgICAvLyAgKGhvd2V2ZXIgZGVlcCBuZXN0ZWQpIGFuZCBpdCdsbCBiZSBkaXNhYmxlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oaSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0xFR0VORCcpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jb250YWlucyhub2RlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIHRoZSBub2RlIGlzbid0IGluIHRoZSBmaXJzdCBsZWdlbmQgKGluIGRvYyBvcmRlciksIHNvIG5vIG1hdHRlclxuICAgICAgICAgICAgLy8gIHdoZXJlIGl0IGlzIG5vdywgaXQnbGwgYmUgZGlzYWJsZWRcblxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gdGhlIG5vZGUgaXNuJ3QgaW4gYSBsZWdlbmQsIHNvIG5vIG1hdHRlciB3aGVyZSBpdCBpcyBub3csIGl0J2xsIGJlIGRpc2FibGVkXG5cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH0gLy8gZWxzZSwgbm9kZSdzIHRhYmJhYmxlL2ZvY3VzYWJsZSBzdGF0ZSBzaG91bGQgbm90IGJlIGFmZmVjdGVkIGJ5IGEgZmllbGRzZXQnc1xuICAvLyAgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKG5vZGUuZGlzYWJsZWQgfHwgaXNIaWRkZW5JbnB1dChub2RlKSB8fCBpc0hpZGRlbihub2RlLCBvcHRpb25zLmRpc3BsYXlDaGVjaykgfHwgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIGNhbmRpZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FuZGlkYXRlLCBpKSB7XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoY2FuZGlkYXRlKTtcblxuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIGEubm9kZTtcbiAgfSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuICByZXR1cm4gdGFiYmFibGVOb2Rlcztcbn07XG5cbnZhciBmb2N1c2FibGUgPSBmdW5jdGlvbiBmb2N1c2FibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbnZhciBpc1RhYmJhYmxlID0gZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcblxudmFyIGlzRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxuZXhwb3J0IHsgZm9jdXNhYmxlLCBpc0ZvY3VzYWJsZSwgaXNUYWJiYWJsZSwgdGFiYmFibGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCJpbXBvcnQgXCJ3aWNnLWluZXJ0XCI7XHJcbmltcG9ydCBcImJsb2NraW5nLWVsZW1lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuY29uc3QgYmxvY2tpbmdFbGVtZW50cyA9IGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzO1xyXG4vKipcclxuICogQWxsb3dzIGFuIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBieSBhcHBseWluZyB0aGUgXCJpbmVydFwiIGF0dHJpYnV0ZSB0byBhbGwgc2libGluZywgYXVudCwgYW5kIHVuY2xlIG5vZGVzLlxyXG4gKlxyXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgY29uc2VjdXRpdmUgY2FsbHMgd2l0aCBhIGxvb3NlbHkgYXBwbGllZCBzdGFjayBvcGVyYXRpb25cclxuICogKHNwZWNpZmljYWxseSB2aWEgYGJsb2NraW5nRWxlbWVudHNgLCB3aXRoIGEgc21hbGwgcG9seWZpbGwgYmVjYXVzZSBJJ20gbm90IHN1cmUgaG93IGxvbmdcclxuICogaXQnbGwgdGFrZSB0byBmaW5kIGl0cyB3YXkgaW50byB0aGUgc3BlYywgaWYgZXZlcilcclxuICogQHBhcmFtIHRhcmdldFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJsb2NraW5nRWxlbWVudCh0YXJnZXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogUHVzaC9wb3AgdGhlIGVsZW1lbnQgZnJvbSB0aGUgYmxvY2tpbmdFbGVtZW50cyBzdGFjay5cclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vIFNvbWV0aW1lcyBibG9ja2luZ0VsZW1lbnRzIHdpbGwgZmFpbCBpZiwgZm9yIGV4YW1wbGUsXHJcbiAgICAgICAgICAgIC8vIHRoZSB0YXJnZXQgZWxlbWVudCBpc24ndCBjb25uZWN0ZWQgdG8gZG9jdW1lbnQuYm9keS5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyByYXJlLCBidXQgaXQncyBiZXR0ZXIgdG8gZmFpbCBzaWxlbnRseSB3aXRoIHdlaXJkIHRhYmJpbmcgYmVoYXZpb3JcclxuICAgICAgICAgICAgLy8gdGhhbiB0byBjcmFzaCB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucmVtb3ZlKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgLy8gV2VsbCwgc2VtaS1zaWxlbnRseS5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RhcmdldF0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGJsb2NraW5nRWxlbWVudHMudG9wO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ibG9ja2luZy1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgaXNGb2N1c2FibGUgfSBmcm9tIFwidGFiYmFibGVcIjtcclxuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBnZXRUb3BFbGVtZW50LCB1c2VCbG9ja2luZ0VsZW1lbnQgfSBmcm9tIFwiLi91c2UtYmxvY2tpbmctZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5jb25zdCBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gPSBuZXcgTWFwKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlIH0pIHtcclxuICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldEVsZW1lbnQgfSk7XHJcbiAgICAvL2NvbnN0IFtsYXN0QWN0aXZlRWxlbWVudCwgc2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50XSA9IHVzZVN0YXRlPE5vZGUgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IHsgZ2V0QWN0aXZlRWxlbWVudCwgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldFdpbmRvd0ZvY3VzZWQgfSA9IHVzZUFjdGl2ZUVsZW1lbnQoe30pO1xyXG4gICAgLy8gV2hlbiB0aGUgdHJhcCBiZWNvbWVzIGFjdGl2ZSwgYmVmb3JlIHdlIGxldCB0aGUgYmxvY2tpbmdFbGVtZW50cyBob29rIHJ1bixcclxuICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdGV2ZXIncyBjdXJyZW50bHkgZm9jdXNlZCBhbmQgc2F2ZSBpdC5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRvIHdoYXRldmVyJ3MgY3VycmVudGx5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICogQW55IHRpbWUgd2UgYWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgdHJhcCxcclxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXHJcbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcclxuICAgICAqIHRyYWNrZWQgaW4gZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvIGlmIG5vdClcclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5yZWFzb25zP1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1tb2RhbFwiOiB0cmFwQWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSwgdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlRm9jdXNUcmFwUHJvcHMsXHJcbiAgICAgICAgZ2V0RWxlbWVudFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpbiB0aGUgZ2l2ZW4gbm9kZSwgb3IgbnVsbCBpZiBub25lIGFyZSBmb3VuZC5cclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3RGb2N1c2FibGUoZWxlbWVudCkge1xyXG4gICAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWxlbWVudCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHsgYWNjZXB0Tm9kZTogKG5vZGUpID0+IChub2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiBpc0ZvY3VzYWJsZShub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVApIH0pO1xyXG4gICAgY29uc3QgZmlyc3RGb2N1c2FibGUgPSB0cmVlV2Fsa2VyLmZpcnN0Q2hpbGQoKTtcclxuICAgIHJldHVybiBmaXJzdEZvY3VzYWJsZTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZm9jdXMtdHJhcC5qcy5tYXAiLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgYyx1c2VEZWJ1Z1ZhbHVlIGFzIGZ9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyBkLEZyYWdtZW50IGFzIHYscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6ZChkKG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9kKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PWQobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6ZH0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKHYsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKHYsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1kKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCx6PWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiAkKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gWigpe31mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uIHEoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1aLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WSxuLmlzRGVmYXVsdFByZXZlbnRlZD1xLG4ubmF0aXZlRXZlbnQ9bn07dmFyIEcsSj17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSz1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciB1PS0xPT09dC5pbmRleE9mKFwiLVwiKTtmb3IodmFyIG8gaW4gcj17fSxlKXt2YXIgaT1lW29dO1YmJlwiY2hpbGRyZW5cIj09PW8mJlwibm9zY3JpcHRcIj09PXR8fFwidmFsdWVcIj09PW8mJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1pfHwoXCJkZWZhdWx0VmFsdWVcIj09PW8mJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/bz1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09byYmITA9PT1pP2k9XCJcIjovb25kb3VibGVjbGljay9pLnRlc3Qobyk/bz1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3Qobyt0KSYmIXooZS50eXBlKT9vPVwib25pbnB1dFwiOi9eb25mb2N1cyQvaS50ZXN0KG8pP289XCJvbmZvY3VzaW5cIjovXm9uYmx1ciQvaS50ZXN0KG8pP289XCJvbmZvY3Vzb3V0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KG8pP289by50b0xvd2VyQ2FzZSgpOnUmJlAudGVzdChvKT9vPW8ucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PWkmJihpPXZvaWQgMCkscltvXT1pKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cixlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEouZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsSikpfW4uJCR0eXBlb2Y9aixLJiZLKG4pfTt2YXIgUT1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtRJiZRKG4pLEc9bi5fX2N9O3ZhciBYPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gRy5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxubj1cIjE3LjAuMlwiO2Z1bmN0aW9uIHRuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBlbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIHJuKG4pe3JldHVybiBlbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHVuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIG9uKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGNuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Yyx1c2VEZWJ1Z1ZhbHVlOmYsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOkIsaHlkcmF0ZTokLHVubW91bnRDb21wb25lbnRBdE5vZGU6dW4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OnRuLGNsb25lRWxlbWVudDpybixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmVuLGZpbmRET01Ob2RlOm9uLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpjbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpsbixTdHJpY3RNb2RlOnYsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6WH07ZXhwb3J0e25uIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbixCIGFzIHJlbmRlciwkIGFzIGh5ZHJhdGUsdW4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCx0biBhcyBjcmVhdGVGYWN0b3J5LHJuIGFzIGNsb25lRWxlbWVudCxlbiBhcyBpc1ZhbGlkRWxlbWVudCxvbiBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixjbiBhcyBmbHVzaFN5bmMsbG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxYIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJleHBvcnQgY29uc3QgRXZlbnREZXRhaWwgPSBTeW1ib2woXCJldmVudC1kZXRhaWxcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiBlbmhhbmNlRXZlbnQoZSwgZGV0YWlsKSB7XHJcbiAgICBsZXQgZXZlbnQgPSBlO1xyXG4gICAgZXZlbnRbRXZlbnREZXRhaWxdID0gZGV0YWlsO1xyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlR2xvYmFsSGFuZGxlciwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5sZXQgcHVsc2UgPSAoXCJ2aWJyYXRlXCIgaW4gbmF2aWdhdG9yKSA/ICgoKSA9PiBuYXZpZ2F0b3IudmlicmF0ZSgxMCkpIDogKCgpID0+IHsgfSk7XHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGVuYWJsZS9kaXNhYmxlIGJ1dHRvbiB2aWJyYXRpb24gcHVsc2VzIG9uIGFuIGFwcC13aWRlIHNjYWxlLlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcnVuIHdoZW4gYSBidXR0b24gaXMgdGFwcGVkLlxyXG4gKiAoRGVmYXVsdCBpcyBgKCkgPT4gbmF2aWdhdG9yLnZpYnJhdGUoMTApYCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgaXQsIGEgbm9vcCBvdGhlcndpc2UpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QnV0dG9uVmlicmF0ZShmdW5jKSB7XHJcbiAgICBwdWxzZSA9IGZ1bmM7XHJcbn1cclxuZnVuY3Rpb24gZXhjbHVkZXModGFyZ2V0LCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZT8uW3RhcmdldF0pXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLyoqXHJcbiAqIHNlbGVjdGlvbi5jb250YWluc05vZGUgZG9lc24ndCBhY2NvdW50IGZvciBzZWxlY3Rpb24uaXNDb2xsYXBzZWQsXHJcbiAqIHNvIGhlcmUncyBhIHdvcmthcm91bmQgZm9yIHRoYXQuXHJcbiAqXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBub2RlSGFzU2VsZWN0ZWRUZXh0KGVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChzZWxlY3Rpb24/LmNvbnRhaW5zTm9kZShlbGVtZW50LCB0cnVlKSAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4vKipcclxuICogQWRkcyB0aGUgbmVjZXNzYXJ5IGV2ZW50IGhhbmRsZXJzIHRvIGNyZWF0ZSBhIFwicHJlc3NcIi1saWtlIGV2ZW50IGZvclxyXG4gKiBidXR0b25zIGFuZCBhbnl0aGluZyBlbHNlIHRoYXQncyBcImNsaWNrL3RhcC9wcmVzcy90b3VjaFwiLWFibGUuXHJcbiAqXHJcbiAqIE5vdGFibHksIHRoZSBmb2xsb3dpbmcgY2FzZXMgYXJlIGNvdmVyZWQ6XHJcbiAqICogVGhlIHRhcmdldCBlbGVtZW50IGlzIHByb3Blcmx5IGZvY3VzZWQsIGV2ZW4gb24gaU9TIFNhZmFyaSAoKmVzcGVjaWFsbHkqIG9uIGlPUyBTYWZhcmkpXHJcbiAqICogRG91YmxlLWNsaWNrcyB3b24ndCBzZWxlY3QgdGV4dC5cclxuICogKiBDb252ZXJzZWx5LCBtYW51YWxseSBzZWxlY3RpbmcgdGV4dCB3b24ndCBpbnZva2UgYSBwcmVzcy5cclxuICogKiBLZXlib2FyZCBldmVudHMgJm1kYXNoOyBgZW50ZXJgIGltbWVkaWF0ZWx5IGludm9rZXMgdGhlIGhhbmRsZXIsIHdoaWxlIGBzcGFjZWAgaW52b2tlcyBpdCBvbiBrZXl1cC5cclxuICogKiBIYXB0aWMgZmVlZGJhY2sgKG9uLCBsaWtlLCB0aGUgb25lIGJyb3dzZXIgY29tYmluYXRpb24gdGhhdCBzdXBwb3J0cyBpdCAmbWRhc2g7IHRoaXMgY2FuIGJlIGRpc2FibGVkIGFwcC13aWRlIHdpdGggYHNldEJ1dHRvblZpYnJhdGVgKVxyXG4gKlxyXG4gKiBJbiBhZGRpdGlvbiwgd2hlbiB0aGUgQ1NTIGA6YWN0aXZlYCBwc2V1ZG8tY2xhc3Mgd291bGQgYXBwbHkgdG8gYSBub3JtYWwgYnV0dG9uXHJcbiAqIChpLmUuIHdoZW4gaG9sZGluZyB0aGUgc3BhY2ViYXIgb3IgZHVyaW5nIG1vdXNlZG93biksIGB7IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IFwidHJ1ZVwiIH1gXHJcbiAqIGlzIGFkZGVkIHRvIHRoZSBwcm9wcy4gIFlvdSBjYW4gZWl0aGVyIGxldCBpdCBwYXNzIHRocm91Z2ggYW5kIHN0eWxlIGl0IHRocm91Z2ggbmV3IENTUyxcclxuICogb3IgaW5zcGVjdCB0aGUgcmV0dXJuZWQgcHJvcHMgZm9yIGl0IGFuZCBhZGQgZS5nLiBhbiBgLmFjdGl2ZWAgY2xhc3MgZm9yIGV4aXN0aW5nIENTU1xyXG4gKlxyXG4gKiBAcGFyYW0gb25DbGlja1N5bmNcclxuICogQHBhcmFtIGV4Y2x1ZGUgV2hldGhlciB0aGUgcG9seWZpbGwgc2hvdWxkbid0IGFwcGx5IChjYW4gc3BlY2lmeSBmb3Igc3BlY2lmaWMgaW50ZXJhY3Rpb25zKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZXNzRXZlbnRIYW5kbGVycyhvbkNsaWNrU3luYywgZXhjbHVkZSkge1xyXG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xyXG4gICAgLy8gQSBidXR0b24gY2FuIGJlIGFjdGl2YXRlZCBpbiBtdWx0aXBsZSB3YXlzLCBzbyBvbiB0aGUgb2ZmIGNoYW5jZVxyXG4gICAgLy8gdGhhdCBtdWx0aXBsZSBhcmUgdHJpZ2dlcmVkIGF0IG9uY2UsIHdlIG9ubHkgKmFjdHVhbGx5KiByZWdpc3RlclxyXG4gICAgLy8gYSBwcmVzcyBvbmNlIGFsbCBvZiBvdXIgXCJvblwiIHNpZ25hbHMgaGF2ZSB0dXJuZWQgYmFjayB0byBcIm9mZlwiLlxyXG4gICAgLy8gV2UgYXBwcm94aW1hdGUgdGhpcyBieSBqdXN0IGluY3JlbWVudGluZyB3aGVuIGFjdGl2ZSwgYW5kXHJcbiAgICAvLyBkZWNyZW1lbnRpbmcgd2hlbiBkZWFjdGl2YXRlZC5cclxuICAgIC8vXHJcbiAgICAvLyBBcyBhbiBlbWVyZ2VuY3kgZmFpbHNhZmUsIHdoZW4gdGhlIGVsZW1lbnQgbG9vc2VzIGZvY3VzLFxyXG4gICAgLy8gdGhpcyBpcyByZXNldCBiYWNrIHRvIDAuXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmUsIGdldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIC8vIElmIHdlIHRoZSBjdXJyZW50IHRleHQgc2VsZWN0aW9uIGNoYW5nZXMgdG8gaW5jbHVkZSB0aGlzIGVsZW1lbnRcclxuICAgIC8vIERVUklORyBlLmcuIGEgbW91c2Vkb3duLCB0aGVuIHdlIGRvbid0IHdhbnQgdGhlIG1vdXNldXAgdG8gXCJjb3VudFwiLCBhcyBpdCB3ZXJlLFxyXG4gICAgLy8gYmVjYXVzZSBpdHMgb25seSBwdXJwb3NlIHdhcyBzZWxlY3RpbmcgdGV4dCwgbm90IGNsaWNraW5nIGJ1dHRvbnMuXHJcbiAgICAvL1xyXG4gICAgLy8gVG8gY2F0Y2ggdGhpcywgYW55IHRpbWUgdGhlIHRleHQgc2VsZWN0aW9uIGluY2x1ZGVzIHVzIHdoaWxlIGluIHRoZSBtaWRkbGVcclxuICAgIC8vIG9mIGEgY2xpY2ssIHRoaXMgZmxhZyBpcyBzZXQsIHdoaWNoIGNhbmNlbHMgdGhlIGFjdGl2YXRpb24gb2YgYSBwcmVzcy5cclxuICAgIC8vIFRoZSBmbGFnIGlzIHJlc2V0IGFueSB0aW1lIHRoZSBzZWxlY3Rpb24gaXMgZW1wdHkgb3IgdGhlIGJ1dHRvbiBpc1xyXG4gICAgLy8gbm8gbG9uZ2VyIGFjdGl2ZS5cclxuICAgIGNvbnN0IFt0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uLCBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUdsb2JhbEhhbmRsZXIoZG9jdW1lbnQsIFwic2VsZWN0aW9uY2hhbmdlXCIsIGUgPT4ge1xyXG4gICAgICAgIHNldFRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24oYWN0aXZlID09IDAgPyBmYWxzZSA6IG5vZGVIYXNTZWxlY3RlZFRleHQoZ2V0RWxlbWVudCgpKSk7XHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZSA9PSAwKVxyXG4gICAgICAgICAgICBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uKGZhbHNlKTtcclxuICAgIH0sIFthY3RpdmUgPT0gMF0pO1xyXG4gICAgY29uc3Qgb25BY3RpdmVTdGFydCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKGEgPT4gKythKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb25BY3RpdmVTdG9wID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoYSA9PiBNYXRoLm1heCgwLCAtLWEpKTtcclxuICAgICAgICBpZiAodGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldEFjdGl2ZSgpIDw9IDApIHtcclxuICAgICAgICAgICAgaGFuZGxlUHJlc3MoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoYW5kbGVQcmVzcyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKG9uQ2xpY2tTeW5jKSB7XHJcbiAgICAgICAgICAgIC8vIE5vdGU6IFRoZSBlbGVtZW50IGlzIGZvY3VzZWQgaGVyZSBiZWNhdXNlIG9mIGlPUyBTYWZhcmkuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEl0J3MgYWx3YXlzIGlPUyBTYWZhcmkuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIGlPUyBTYWZhcmkgKHRlc3RlZCBvbiAxMikgZG93bnJpZ2h0IHJlZnVzZXMgdG8gYWxsb3cgXHJcbiAgICAgICAgICAgIC8vIGVsZW1lbnRzIHRvIGJlIG1hbnVhbGx5IGZvY3VzZWQgVU5MRVNTIGl0IGhhcHBlbnMgd2l0aGluXHJcbiAgICAgICAgICAgIC8vIGFuIGV2ZW50IGhhbmRsZXIgbGlrZSB0aGlzLiAgSXQgYWxzbyBkb2Vzbid0IGZvY3VzXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbnMgYnkgZGVmYXVsdCB3aGVuIGNsaWNrZWQsIHRhcHBlZCwgZXRjLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBJZiBpdCBiZWNvbWVzIHByb2JsZW1hdGljIHRoYXQgYnV0dG9uLWxpa2VzIGV4cGxpY2l0bHkgYmVjb21lXHJcbiAgICAgICAgICAgIC8vIGZvY3VzZWQgd2hlbiB0aGV5IGFyZSBwcmVzc2VkLCB0aGVuIGFuIGFsdGVybmF0aXZlIHNvbHV0aW9uIGZvclxyXG4gICAgICAgICAgICAvLyB0aGUgcXVlc3Rpb24gb2YgXCJob3cgZG8gbWVudSBidXR0b25zIGtlZXAgdGhlaXIgbWVudXMgb3BlblwiXHJcbiAgICAgICAgICAgIC8vIGFuZCBvdGhlciBmb2N1cy1yZWxhdGVkIG5vbnNlbnNlIG5lZWRzIHRvIGJlIGZpZ3VyZWQgb3V0LlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBGb3IgaU9TIFNhZmFyaS5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Py5mb2N1cygpO1xyXG4gICAgICAgICAgICAvLyBXaGF0ZXZlciB0aGUgYnJvd3NlciB3YXMgZ29pbmcgdG8gZG8gd2l0aCB0aGlzIGV2ZW50LFxyXG4gICAgICAgICAgICAvLyBmb3JnZXQgaXQuIFdlJ3JlIHR1cm5pbmcgaXQgaW50byBhIFwicHJlc3NcIiBldmVudC5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBBbHNvIHN0b3AgYW55b25lIGVsc2UgZnJvbSBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudCxcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2UncmUgZXhwbGljaXRseSBoYW5kbGluZyBpdC5cclxuICAgICAgICAgICAgLy8gKE5vdGFibHksIHRoaXMgYWxsb3dzIGxhYmVscyB0byB3cmFwIGlucHV0cywgd2l0aCB0aGVtXHJcbiAgICAgICAgICAgIC8vIGJvdGggaGF2aW5nIHByZXNzIGV2ZW50IGhhbmRsZXJzLCB3aXRob3V0IGRvdWJsZS1maXJpbmcpXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIEhhcHRpYyBmZWVkYmFjayBmb3IgdGhpcyBwcmVzcyBldmVudFxyXG4gICAgICAgICAgICBwdWxzZSgpO1xyXG4gICAgICAgICAgICAvLyBBY3R1YWxseSBjYWxsIG91ciBoYW5kbGVyLlxyXG4gICAgICAgICAgICBvbkNsaWNrU3luYyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9uTW91c2VEb3duID0gZXhjbHVkZXMoXCJjbGlja1wiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XHJcbiAgICAgICAgLy8gU3RvcCBkb3VibGUgY2xpY2tzIGZyb20gc2VsZWN0aW5nIHRleHQgaW4gYW4gY29tcG9uZW50IHRoYXQncyAqc3VwcG9zZWQqIHRvIGJlIGFjdGluZyBsaWtlIGEgYnV0dG9uLFxyXG4gICAgICAgIC8vIGJ1dCBhbHNvIGRvbid0IHByZXZlbnQgdGhlIHVzZXIgZnJvbSBzZWxlY3RpbmcgdGhhdCB0ZXh0IG1hbnVhbGx5IGlmIHRoZXkgcmVhbGx5IHdhbnQgdG9cclxuICAgICAgICAvLyAod2hpY2ggdXNlci1zZWxlY3Q6IG5vbmUgd291bGQgZG8sIGJ1dCBjYW5jZWxsaW5nIGEgZG91YmxlIGNsaWNrIG9uIG1vdXNlRG93biBkb2Vzbid0KVxyXG4gICAgICAgIGlmIChlLmRldGFpbCA+IDEpXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApXHJcbiAgICAgICAgICAgIG9uQWN0aXZlU3RhcnQoZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25Nb3VzZVVwID0gZXhjbHVkZXMoXCJjbGlja1wiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwICYmIGFjdGl2ZSA+IDApXHJcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkJsdXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSgwKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbk1vdXNlT3V0ID0gZXhjbHVkZXMoXCJjbGlja1wiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IG9uQmx1cjtcclxuICAgIGNvbnN0IG9uS2V5RG93biA9IGV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkgJiYgZXhjbHVkZXMoXCJlbnRlclwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiICYmIG9uQ2xpY2tTeW5jICYmICFleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGFjdHVhbGx5IGFjdGl2YXRlIGl0IG9uIGEgc3BhY2Uga2V5ZG93blxyXG4gICAgICAgICAgICAvLyBidXQgd2UgZG8gcHJldmVudERlZmF1bHQgdG8gc3RvcCB0aGUgcGFnZSBmcm9tIHNjcm9sbGluZy5cclxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiICYmICFleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcclxuICAgICAgICAgICAgb25BY3RpdmVTdG9wKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvbktleVVwID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiICYmICFleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpKVxyXG4gICAgICAgICAgICBvbkFjdGl2ZVN0b3AoZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25DbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlLmRldGFpbCA+IDEpIHtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChwcm9wcykgPT4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24sIG9uS2V5VXAsIG9uQmx1ciwgb25Nb3VzZURvd24sIG9uTW91c2VVcCwgb25Nb3VzZU91dCwgb25DbGljaywgLi4ueyBcImRhdGEtcHNldWRvLWFjdGl2ZVwiOiBhY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9IH0sIHByb3BzKSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFCdXR0b24oeyB0YWcsIHByZXNzZWQsIG9uUHJlc3MgfSkge1xyXG4gICAgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvblByb3BzKHsgXCJhcmlhLXByZXNzZWRcIjogYXJpYVByZXNzZWQsIHRhYkluZGV4LCByb2xlLCAuLi5wIH0pIHtcclxuICAgICAgICBjb25zdCBwcm9wcyA9IHVzZVByZXNzRXZlbnRIYW5kbGVycygoZSkgPT4gb25QcmVzcz8uKGVuaGFuY2VFdmVudChlLCB7IHByZXNzZWQ6IHByZXNzZWQgPT0gbnVsbCA/IG51bGwgOiAhcHJlc3NlZCB9KSksIHVuZGVmaW5lZCkocCk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uUHJvcHMgPSB7IHJvbGUsIHRhYkluZGV4LCBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCA/PyAocHJlc3NlZCA9PT0gdHJ1ZSA/IFwidHJ1ZVwiIDogcHJlc3NlZCA9PT0gZmFsc2UgPyBcImZhbHNlXCIgOiB1bmRlZmluZWQpIH07XHJcbiAgICAgICAgY29uc3QgZGl2UHJvcHMgPSB7IC4uLmJ1dHRvblByb3BzLCB0YWJJbmRleDogdGFiSW5kZXggPz8gMCwgcm9sZTogcm9sZSA/PyBcImJ1dHRvblwiIH07XHJcbiAgICAgICAgY29uc3QgYW5jaG9yUHJvcHMgPSB7IC4uLmRpdlByb3BzIH07XHJcbiAgICAgICAgc3dpdGNoICh0YWcpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYnV0dG9uUHJvcHMsIHByb3BzKTtcclxuICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGFuY2hvclByb3BzLCBwcm9wcyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShkaXZQcm9wcywgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQXJpYUJ1dHRvblByb3BzXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1idXR0b24uanMubWFwIiwiaW1wb3J0IHsgdXNlQ2hpbGRGbGFnLCB1c2VDaGlsZE1hbmFnZXIsIHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVByZXNzRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb24oeyBleHBhbmRlZEluZGV4LCBzZXRFeHBhbmRlZEluZGV4IH0pIHtcclxuICAgIGNvbnN0IFtsYXN0Rm9jdXNlZEluZGV4LCBzZXRMYXN0Rm9jdXNlZEluZGV4LCBnZXRMYXN0Rm9jdXNlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc3RhYmxlU2V0RXhwYW5kZWRJbmRleCA9IHVzZVN0YWJsZUNhbGxiYWNrKHNldEV4cGFuZGVkSW5kZXggPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucywgdXNlTWFuYWdlZENoaWxkOiB1c2VNYW5hZ2VkQ2hpbGRTZWN0aW9uIH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleCgoMCkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleCgobWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLmxlbmd0aCAtIDEpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoaSA9PiAoKGkgPz8gMCkgLSAxKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGkgPT4gKChpID8/IDApICsgMSkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLCBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBcImJsb2NrXCIsIGluZGV4OiBsYXN0Rm9jdXNlZEluZGV4LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0LCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQgfSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoe1xyXG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiBleHBhbmRlZEluZGV4LFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLFxyXG4gICAgICAgIHNldENoaWxkRmxhZzogKGksIG9wZW4pID0+IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXT8uc2V0T3BlbkZyb21QYXJlbnQob3BlbiksXHJcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaSkgPT4gKG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXT8uZ2V0T3BlbkZyb21QYXJlbnQoKSA/PyBudWxsKVxyXG4gICAgfSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoe1xyXG4gICAgICAgIGFjdGl2YXRlZEluZGV4OiBsYXN0Rm9jdXNlZEluZGV4LFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLFxyXG4gICAgICAgIHNldENoaWxkRmxhZzogKGksIG9wZW4pID0+IG9wZW4gJiYgbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldLmZvY3VzKCksXHJcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaSkgPT4gZmFsc2VcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb24gPSB1c2VDYWxsYmFjaygoYXJncykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJncy5pbmRleDtcclxuICAgICAgICBjb25zdCBbb3BlbkZyb21QYXJlbnQsIHNldE9wZW5Gcm9tUGFyZW50LCBnZXRPcGVuRnJvbVBhcmVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICBjb25zdCB7IHJhbmRvbUlkOiBib2R5UmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZUJvZHlSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZEJvZHlJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLWFjY29yZGlvbi1zZWN0aW9uLWJvZHktXCIgfSk7XHJcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogaGVhZFJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VIZWFkUmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRIZWFkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1oZWFkZXItXCIgfSk7XHJcbiAgICAgICAgbGV0IG9wZW4gPSAoKGFyZ3Mub3BlbiA/PyBvcGVuRnJvbVBhcmVudCkgPz8gbnVsbCk7XHJcbiAgICAgICAgLy8gVE9ETzogQ29udmVydCB0byB1c2UgdXNlTWFuYWdlZENoaWxkIHNvIHRoYXQgdGhpcyBob29rIFxyXG4gICAgICAgIC8vIGlzIHN0YWJsZSB3aXRob3V0IChkaXJlY3RseSkgZGVwZW5kaW5nIG9uIHRoZSBvcGVuIHN0YXRlLlxyXG4gICAgICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXIoeyB0YWcgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBnZXRFbGVtZW50KCk/LmZvY3VzKCk7IH0sIFtdKTtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VNYW5hZ2VkQ2hpbGRQcm9wcyB9ID0gdXNlTWFuYWdlZENoaWxkU2VjdGlvbih7IGluZGV4LCBvcGVuLCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnQsIGZvY3VzIH0pO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlclByb3BzKHsgW1wiYXJpYS1leHBhbmRlZFwiXTogYXJpYUV4cGFuZGVkLCBbXCJhcmlhLWRpc2FibGVkXCJdOiBhcmlhRGlzYWJsZWQsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uRm9jdXMgPSAoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoYXJncy5pbmRleCk7IH07XHJcbiAgICAgICAgICAgICAgICBsZXQgb25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0T3BlbkZyb21QYXJlbnQoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhYmxlU2V0RXhwYW5kZWRJbmRleChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWJsZVNldEV4cGFuZGVkSW5kZXgoYXJncy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldEIgPSB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXg6IDAgfSwgdXNlUHJlc3NFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHVuZGVmaW5lZCkocHJvcHMpKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXQzID0gdXNlTWVyZ2VkUHJvcHMoKSh1c2VIZWFkUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHtcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogKGFyaWFFeHBhbmRlZCA/PyAoISFvcGVuKS50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZGlzYWJsZWRcIjogKGFyaWFEaXNhYmxlZCA/PyAob3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkKSksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udXNlUmVmRWxlbWVudFByb3BzKHVzZU1hbmFnZWRDaGlsZFByb3BzKHJldEIpKVxyXG4gICAgICAgICAgICAgICAgfSkpLCB7IG9uRm9jdXMgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTGluZWFyTmF2aWdhdGlvblByb3BzKHJldDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyB9O1xyXG4gICAgICAgIH0sIFt1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMsIGluZGV4LCBvcGVuXSk7XHJcbiAgICAgICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5KCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHlQcm9wcyh7IHJvbGUsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXQxID0gdXNlUmVmZXJlbmNlZEhlYWRJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHsgcm9sZTogcm9sZSA/PyBcInJlZ2lvblwiLCAuLi5wcm9wcyB9KTtcclxuICAgICAgICAgICAgICAgIGxldCByZXQyID0gdXNlQm9keVJhbmRvbUlkUHJvcHMocmV0MSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHlQcm9wc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBleHBhbmRlZDogb3BlbixcclxuICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXIsXHJcbiAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSxcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25Qcm9wc10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvblxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWNjb3JkaW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG4vKipcclxuICogQWRkcyBhbiBJRCBhbmQgXCJhcmlhLWxhYmVsbGVkYnlcIiBmb3IgdHdvIGVsZW1lbnRzLCBhbiBcImlucHV0XCIgZWxlbWVudCBhbmQgYSBcImxhYmVsXCIgZWxlbWVudC5cclxuICpcclxuICogUmV0dXJucyB0aGUgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBob29rcyBpZiB5b3UgbmVlZCB0byBhbHNvIGFkZCBvdGhlciBJRC1yZWZlcmVuY2luZyBhdHRyaWJ1dGVzLCBsaWtlIGBmb3JgXHJcbiAqXHJcbiAqIEBzZWUgdXNlSW5wdXRMYWJlbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCwgYmFja3VwVGV4dCB9ID0geyBsYWJlbFByZWZpeDogXCJsYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiaW5wdXQtXCIgfSkge1xyXG4gICAgY29uc3QgW2xhYmVsRWxlbWVudCwgc2V0TGFiZWxFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lucHV0RWxlbWVudCwgc2V0SW5wdXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRMYWJlbEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlTGFiZWxSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldExhYmVsRWxlbWVudCB9KTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0SW5wdXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUlucHV0UmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRJbnB1dEVsZW1lbnQgfSk7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZUxhYmVsUmFuZG9tSWRQcm9wcywgaWQ6IGxhYmVsSWQsIHJhbmRvbUlkOiBsYWJlbFJhbmRvbUlkLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IGxhYmVsUHJlZml4IH0pO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VJbnB1dFJhbmRvbUlkUHJvcHMsIGlkOiBpbnB1dElkLCByYW5kb21JZDogaW5wdXRSYW5kb21JZCwgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBpbnB1dFByZWZpeCB9KTtcclxuICAgIGNvbnN0IGxhYmVsSGFzTW91bnRlZCA9ICEhKGxhYmVsRWxlbWVudCk7XHJcbiAgICBjb25zdCBpbnB1dEhhc01vdW50ZWQgPSAhIShpbnB1dEVsZW1lbnQpO1xyXG4gICAgY29uc3QgdXNlR2VuZXJpY0xhYmVsTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWxMYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzOiAocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxhYmVsUmFuZG9tSWRQcm9wcyh1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyhwcm9wcykpOyB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wczogKHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkYnksIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsIC4uLnByb3BzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodXNlSW5wdXRSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlSW5wdXRSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1sYWJlbFwiOiAoIWxhYmVsSGFzTW91bnRlZCA/IGJhY2t1cFRleHQgOiBhcmlhTGFiZWwpID8/IGFyaWFMYWJlbCB9LCBwcm9wcykpKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtsYWJlbEhhc01vdW50ZWRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsSW5wdXQsXHJcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWwsXHJcbiAgICAgICAgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyxcclxuICAgICAgICB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLFxyXG4gICAgICAgIGxhYmVsSWQsXHJcbiAgICAgICAgaW5wdXRJZCxcclxuICAgICAgICBsYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LFxyXG4gICAgICAgIGdldExhYmVsRWxlbWVudCxcclxuICAgICAgICBnZXRJbnB1dEVsZW1lbnQsXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBIYW5kbGVzIHRoZSBhdHRyaWJ1dGVzIGBpZGAsIGBmb3JgLCBhbmQgYGFyaWEtbGFiZWxsZWRieWAgZm9yIHRvIHJlbGF0ZWQgZWxlbWVudHMuXHJcbiAqXHJcbiAqIEl0J3MgYXNzdW1lZCB0aGF0IHRoZSBsYWJlbCBpcyBhbiBgSFRNTExhYmVsRWxlbWVudGAsIGFuZCB0aGUgaW5wdXQgaXMgc29tZXRoaW5nIGZvciB3aGljaFxyXG4gKiB0aGUgYGZvcmAgYXR0cmlidXRlIGNhbiByZWZlcmVuY2UuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9ID0geyBsYWJlbFByZWZpeDogXCJsYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiaW5wdXQtXCIgfSkge1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dCwgdXNlR2VuZXJpY0xhYmVsTGFiZWwsIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsIGlucHV0SWQsIGxhYmVsSWQsIGlucHV0RWxlbWVudCwgZ2V0SW5wdXRFbGVtZW50LCBsYWJlbEVsZW1lbnQsIGdldExhYmVsRWxlbWVudCB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4IH0pO1xyXG4gICAgY29uc3QgdXNlSW5wdXRMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlSW5wdXRMYWJlbExhYmVsKHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlSW5wdXRMYWJlbExhYmVsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhGb3IgPSB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzKFwiZm9yXCIpKHByb3BzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhvdXRGb3IgPSBwcm9wcztcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHRhZyA9PSBcImxhYmVsXCIgPyB3aXRoRm9yIDogd2l0aG91dEZvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbElucHV0XSk7XHJcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsSW5wdXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsSW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUlucHV0TGFiZWxJbnB1dFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUlucHV0TGFiZWxMYWJlbCxcclxuICAgICAgICB1c2VJbnB1dExhYmVsSW5wdXQsXHJcbiAgICAgICAgbGFiZWxJZCxcclxuICAgICAgICBpbnB1dElkLFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBsYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50LFxyXG4gICAgICAgIGdldExhYmVsRWxlbWVudFxyXG4gICAgfTtcclxufVxyXG5jb25zdCBoYW5kbGVzSW5wdXQgPSAodGFnLCBsYWJlbFBvc2l0aW9uLCB3aGljaCkgPT4ge1xyXG4gICAgaWYgKGxhYmVsUG9zaXRpb24gPT09IFwic2VwYXJhdGVcIikge1xyXG4gICAgICAgIGlmICh3aGljaCA9PT0gXCJpbnB1dC1lbGVtZW50XCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2UgaWYgKHdoaWNoID09PSBcImxhYmVsLWVsZW1lbnRcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRhZyAhPSBcImlucHV0XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChsYWJlbFBvc2l0aW9uID09PSBcIndyYXBwaW5nXCIpIHtcclxuICAgICAgICBpZiAod2hpY2ggPT09IFwiaW5wdXQtZWxlbWVudFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHdoaWNoID09IFwibGFiZWwtZWxlbWVudFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIEhhbmRsZXMgbGFiZWwgdHlwZSAod3JhcHBpbmcgb3Igc2VwYXJhdGUpIGZvciBjaGVja2JveGVzLCByYWRpb3MsIHN3aXRjaGVzLCBldGMuXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja2JveExpa2UoeyBjaGVja2VkLCBkaXNhYmxlZCwgbGFiZWxQb3NpdGlvbiwgb25JbnB1dCwgcm9sZSB9KSB7XHJcbiAgICBjb25zdCBzdGFibGVPbklucHV0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBvbklucHV0Py4oZSk7IH0pO1xyXG4gICAgY29uc3QgeyBpbnB1dElkLCBsYWJlbElkLCB1c2VJbnB1dExhYmVsSW5wdXQ6IHVzZUlMSW5wdXQsIHVzZUlucHV0TGFiZWxMYWJlbDogdXNlSUxMYWJlbCwgZ2V0TGFiZWxFbGVtZW50LCBnZXRJbnB1dEVsZW1lbnQgfSA9IHVzZUlucHV0TGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWNoZWNrYm94LWxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJhcmlhLWNoZWNrYm94LWlucHV0LVwiIH0pO1xyXG4gICAgY29uc3QgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQoeyB0YWcgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlSW5wdXRMYWJlbElucHV0UHJvcHM6IHVzZUlMSW5wdXRQcm9wcyB9ID0gdXNlSUxJbnB1dCgpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcclxuICAgICAgICAvLyBvbkNsaWNrIGFuZCBvbkNoYW5nZSBhcmUgYSBiaXQgbWVzc3ksIHNvIHdlIG5lZWQgdG9cclxuICAgICAgICAvLyAqYWx3YXlzKiBtYWtlIHN1cmUgdGhhdCB0aGUgdmlzaWJsZSBzdGF0ZSBpcyBjb3JyZWN0XHJcbiAgICAgICAgLy8gYWZ0ZXIgYWxsIHRoZSBldmVudCBkdXN0IHNldHRsZXMuXHJcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzI3NDUsXHJcbiAgICAgICAgLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzE4OTkjaXNzdWVjb21tZW50LTUyNTY5MDE5NFxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHRhZyA9PSBcImlucHV0XCIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGFnLCBjaGVja2VkXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZ2V0SW5wdXRFbGVtZW50OiBnZXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xyXG4gICAgICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIENocm9tZSB3b24ndCBmaXJlIG9uSW5wdXQgZXZlbnRzIGZvciByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRhYkluZGV4PS0xPz9cclxuICAgICAgICAgICAgLy8gTmVlZHMgaW52ZXN0aWdhdGluZywgYnV0IG9uSW5wdXQgd29ya3MgZmluZSBpbiBGaXJlZm94XHJcbiAgICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKGRpc2FibGVkIHx8ICFoYW5kbGVzSW5wdXQodGFnLCBsYWJlbFBvc2l0aW9uLCBcImlucHV0LWVsZW1lbnRcIikgPyB1bmRlZmluZWQgOiBzdGFibGVPbklucHV0LCB1bmRlZmluZWQpKHt9KTtcclxuICAgICAgICAgICAgaWYgKHRhZyA9PSBcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbklucHV0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcHJvcHMgPSB1c2VSZWZFbGVtZW50UHJvcHModXNlSUxJbnB1dFByb3BzKHByb3BzKSk7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09IFwid3JhcHBpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgd3JhcHBlZCBsYWJlbCBoYW5kbGVzIGFsbCBpbnRlcmFjdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGlzIGVsZW1lbnQgY2FuJ3QgYmUgaW50ZXJhY3RlZCB3aXRoXHJcbiAgICAgICAgICAgICAgICAvLyBldmVuIGlmIGl0J3MgYW4gaW5wdXQgZWxlbWVudC5cclxuICAgICAgICAgICAgICAgIHByb3BzLmluZXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkZvY3VzID0gZSA9PiBnZXRMYWJlbEVsZW1lbnQoKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJpbnB1dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5yb2xlID0gcm9sZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWNoZWNrZWRcIl0gPSBjaGVja2VkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBkaXNhYmxlZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGxhYmVsIGNsaWNrcyBjYW4ndCBhZmZlY3QgdGhlIGNoZWNrYm94IHdoaWxlIGl0J3MgZGlzYWJsZWRcclxuICAgICAgICAgICAgcHJvcHMub25DbGljayA9IGRpc2FibGVkID8gKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfSkgOiBwcm9wcy5vbkNsaWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShwMCwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VJTElucHV0LCByb2xlLCBsYWJlbFBvc2l0aW9uLCBkaXNhYmxlZCwgY2hlY2tlZF0pO1xyXG4gICAgY29uc3QgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQoeyB0YWcgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlSW5wdXRMYWJlbExhYmVsUHJvcHM6IHVzZUlMTGFiZWxQcm9wcyB9ID0gdXNlSUxMYWJlbCh7IHRhZyB9KTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcclxuICAgICAgICAgICAgbGV0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKGRpc2FibGVkIHx8ICFoYW5kbGVzSW5wdXQodGFnLCBsYWJlbFBvc2l0aW9uLCBcImxhYmVsLWVsZW1lbnRcIikgPyB1bmRlZmluZWQgOiBzdGFibGVPbklucHV0LCB1bmRlZmluZWQpKHt9KTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy5yb2xlID0gcm9sZTtcclxuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtY2hlY2tlZFwiXSA9IGNoZWNrZWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBvbmUgY2FzZSB3aGVyZSB0aGVyZSdzIGFsbW9zdCBub3RoaW5nIHRvIGRvXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgbW9zdCBub3JtYWwgY2FzZSB3aGVyZSBldmVyeXRoaW5nIGFjdHMgYWNjb3JkaW5nIG5vcm1hbCBIVE1MIG1lY2hhbmljcy5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBKdXN0IG1ha2Ugc3VyZSB0aGF0IGxhYmVsIGNsaWNrcyBjYW4ndCBhZmZlY3QgdGhlIGNoZWNrYm94IHdoaWxlIGl0J3MgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmV3UHJvcHMub25DbGljayA9IGRpc2FibGVkID8gKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfSkgOiBuZXdQcm9wcy5vbkNsaWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgdXNlSUxMYWJlbFByb3BzKHAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzIH07XHJcbiAgICB9LCBbdXNlSUxMYWJlbCwgZGlzYWJsZWQsIGNoZWNrZWQsIHJvbGUsIGxhYmVsUG9zaXRpb25dKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LFxyXG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCxcclxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYWJlbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlQ2hlY2tib3hMaWtlIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQ2hlY2tib3goeyBsYWJlbFBvc2l0aW9uLCBjaGVja2VkLCBvbklucHV0LCBkaXNhYmxlZCB9KSB7XHJcbiAgICBjb25zdCBvbklucHV0RW5oYW5jZWQgPSAoZSkgPT4gb25JbnB1dD8uKGVuaGFuY2VFdmVudChlLCB7IGNoZWNrZWQ6ICFjaGVja2VkIH0pKTtcclxuICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50IH0gPSB1c2VDaGVja2JveExpa2UoeyBjaGVja2VkOiAhIWNoZWNrZWQsIGxhYmVsUG9zaXRpb24sIHJvbGU6IFwiY2hlY2tib3hcIiwgZGlzYWJsZWQsIG9uSW5wdXQ6IG9uSW5wdXRFbmhhbmNlZCB9KTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94SW5wdXRFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQoeyB0YWcgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50KHsgdGFnIH0pO1xyXG4gICAgICAgIGNvbnN0IGlzTWl4ZWQgPSAoY2hlY2tlZCA9PSBcIm1peGVkXCIpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGdldElucHV0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRFbGVtZW50ICYmIHRhZyA9PT0gXCJpbnB1dFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGlzTWl4ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbaXNNaXhlZCwgdGFnXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnRQcm9wcyB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzKHAwKTtcclxuICAgICAgICAgICAgcHJvcHMuY2hlY2tlZCA/Pz0gISFjaGVja2VkO1xyXG4gICAgICAgICAgICBpZiAodGFnID09IFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIHByb3BzLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LCBjaGVja2VkLCBsYWJlbFBvc2l0aW9uLCBkaXNhYmxlZF0pO1xyXG4gICAgY29uc3QgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudCh7IHRhZyB9KSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50KHsgdGFnIH0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50UHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveExhYmVsRWxlbWVudFByb3BzIH07XHJcbiAgICB9LCBbdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50LCBkaXNhYmxlZCwgbGFiZWxQb3NpdGlvbl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VDaGVja2JveElucHV0RWxlbWVudCxcclxuICAgICAgICB1c2VDaGVja2JveExhYmVsRWxlbWVudFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3guanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXZlbnREZXRhaWwsIGVuaGFuY2VFdmVudCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tib3hHcm91cCh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBzaG91bGRGb2N1c09uQ2hhbmdlLCBvblVwZGF0ZUNoaWxkcmVuOiBvblVwZGF0ZUNoaWxkcmVuVW5zdGFibGUgfSkge1xyXG4gICAgY29uc3Qgb25VcGRhdGVDaGlsZHJlbiA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uVXBkYXRlQ2hpbGRyZW5VbnN0YWJsZSk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdGFiYmFibGVJbmRleCwgZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBzaG91bGRGb2N1c09uQ2hhbmdlIH0pO1xyXG4gICAgLy9jb25zdCBbdW5jaGVja2VkQ291bnQsIHNldFVuaGVja2VkQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2hlY2tlZENvdW50LCBzZXRDaGVja2VkQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBjaGVja2VkSW5kaWNlcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgLy9jb25zdCBbc2VsZklzQ2hlY2tlZCwgc2V0U2VsZklzQ2hlY2tlZCwgZ2V0U2VsZklzQ2hlY2tlZF0gPSB1c2VTdGF0ZTxib29sZWFuIHwgXCJtaXhlZFwiPihmYWxzZSk7XHJcbiAgICBjb25zdCBnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCI7XHJcbiAgICB9LCBbY2hlY2tlZENvdW50LCBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoXSk7XHJcbiAgICBjb25zdCBnZXRTZWxmSXNDaGVja2VkU3RhYmxlID0gdXNlU3RhYmxlQ2FsbGJhY2soZ2V0U2VsZklzQ2hlY2tlZFVuc3RhYmxlKTtcclxuICAgIC8vIElmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSBwYXJlbnQgY2hlY2tib3gncyB2YWx1ZSwgdGhlbiB0aGlzIHJlZiBob2xkcyBhIG1lbW9yeSBvZiB3aGF0IHZhbHVlcyB3ZXJlIGhlbGQgYmVmb3JlLlxyXG4gICAgLy8gT3RoZXJ3aXNlLCBpdCdzIG51bGwgd2hlbiB0aGUgbGFzdCBpbnB1dCB3YXMgZnJvbSBhIGNoaWxkIGNoZWNrYm94LiBcclxuICAgIGNvbnN0IHNhdmVkQ2hlY2tlZFZhbHVlcyA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IG9uQ2hlY2tib3hHcm91cFBhcmVudElucHV0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZklzQ2hlY2tlZCA9IGdldFNlbGZJc0NoZWNrZWRTdGFibGUoKTtcclxuICAgICAgICBpZiAoc2VsZklzQ2hlY2tlZCA9PT0gdHJ1ZSB8fCAoc2VsZklzQ2hlY2tlZCA9PT0gZmFsc2UgJiYgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiBmYWxzZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNlbGZJc0NoZWNrZWQgPT09IFwibWl4ZWRcIikge1xyXG4gICAgICAgICAgICBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFuYWdlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudC5zZXQoY2hpbGQuaW5kZXgsIGNoaWxkLmdldENoZWNrZWQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiB0cnVlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPz8gdHJ1ZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgY2hpbGQgSURzLCBhbmQgYW55IHRpbWUgYW55IG9mIHRoZW0gY2hhbmdlLCBcclxuICAgIC8vIGdlbmVyYXRlIGEgbmV3IHN0cmluZyB3aXRoIGFsbCBvZiB0aGVtIGNvbmNhdGVuYXRlZCB0b2dldGhlclxyXG4gICAgLy8gKGJ1dCBvbmx5IG9uY2UgcGVyIHJlbmRlcik7XHJcbiAgICBjb25zdCBhbGxJZHMgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IFthcmlhQ29udHJvbHMsIHNldEFyaWFDb250cm9sc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1cGRhdGVJbmRleCwgc2V0SWRVcGRhdGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IG5vdGlmeUNoZWNrZWQgPSB1c2VDYWxsYmFjaygoaW5kZXgsIGNoZWNrZWQpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuaGFzKGluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENvdW50KGMgPT4gKGMgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmFkZChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkSW5kaWNlcy5jdXJyZW50LmhhcyhpbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIHNldENoZWNrZWRDb3VudChjID0+IChjIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZEluZGljZXMuY3VycmVudC5kZWxldGUoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NldENoZWNrZWRDb3VudCwgY2hlY2tlZEluZGljZXNdKTtcclxuICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgc2V0U2VsZklzQ2hlY2tlZChwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCIpXHJcbiAgICB9LCBbc2V0U2VsZklzQ2hlY2tlZCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgY2hlY2tlZENvdW50XSk7Ki9cclxuICAgIGNvbnN0IHVzZUNoZWNrYm94R3JvdXBQYXJlbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLWNvbnRyb2xzXCI6IGFyaWFDb250cm9scyB9LCBwcm9wcyk7XHJcbiAgICB9LCBbYXJpYUNvbnRyb2xzXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEFyaWFDb250cm9scyhBcnJheS5mcm9tKGFsbElkcy5jdXJyZW50KS5qb2luKFwiIFwiKSk7XHJcbiAgICB9LCBbdXBkYXRlSW5kZXhdKTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94R3JvdXBDaGlsZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh7IGluZGV4LCB0ZXh0LCBjaGVja2VkLCBpZCwgLi4ucmVzdCB9KSB7XHJcbiAgICAgICAgY29uc3QgZ2V0Q2hlY2tlZCA9IHVzZVN0YWJsZUdldHRlcihjaGVja2VkKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBhbGxJZHMuY3VycmVudC5hZGQoaWQpO1xyXG4gICAgICAgICAgICBzZXRJZFVwZGF0ZUluZGV4KGkgPT4gKytpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsbElkcy5jdXJyZW50LmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRJZFVwZGF0ZUluZGV4KGkgPT4gKytpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LCBbaWRdKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBub3RpZnlDaGVja2VkKGluZGV4LCBjaGVja2VkKTtcclxuICAgICAgICB9LCBbaW5kZXgsIGNoZWNrZWRdKTtcclxuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgaW5kZXgsIHRleHQsIGlkLCBnZXRDaGVja2VkLCAuLi5yZXN0IH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhYmJhYmxlLFxyXG4gICAgICAgICAgICB1c2VDaGVja2JveEdyb3VwQ2hpbGRQcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpKSwgW3VzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wc10pXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VMaXN0TmF2aWdhdGlvblByb3BzLCBub3RpZnlDaGVja2VkLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hbmFnZWRDaGVja2JveGVzOiBtYW5hZ2VkQ2hpbGRyZW4sXHJcbiAgICAgICAgdXNlQ2hlY2tib3hHcm91cENoaWxkLFxyXG4gICAgICAgIHVzZUNoZWNrYm94R3JvdXBQYXJlbnRQcm9wcyxcclxuICAgICAgICBwYXJlbnRJc0NoZWNrZWQ6IGdldFNlbGZJc0NoZWNrZWRVbnN0YWJsZSgpLFxyXG4gICAgICAgIHBhcmVudFBlcmNlbnRDaGVja2VkOiAoY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCksXHJcbiAgICAgICAgb25DaGVja2JveEdyb3VwUGFyZW50SW5wdXQsXHJcbiAgICAgICAgdGFiYmFibGVJbmRleCxcclxuICAgICAgICBmb2N1czogZm9jdXNDdXJyZW50LFxyXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXHJcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3gtZ3JvdXAuanMubWFwIiwiaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCwgdXNlRm9jdXNUcmFwLCB1c2VHbG9iYWxIYW5kbGVyLCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgZm9yIGEgbW9kYWwtbGlrZSBzb2Z0LWRpc21pc3MgaW50ZXJhY3Rpb24uXHJcbiAqXHJcbiAqIFRoYXQgaXMsIGFueSBjbGlja3Mgb3IgdGFwcyBvdXRzaWRlIG9mIHRoZSBnaXZlbiBjb21wb25lbnQsXHJcbiAqIG9yIGFueSB0aW1lIHRoZSBFc2NhcGUga2V5IGlzIHByZXNzZWQgd2l0aGluIHRoZSBjb21wb25lbnQsXHJcbiAqICh3aXRoIHZhcmlvdXMgYnJvd3NlciBvZGRpdGllcyByZWdhcmRpbmcgY2xpY2tzIG9uIGJsYW5rIG9yIGluZXJ0IGFyZWFzIGhhbmRsZWQpXHJcbiAqIHRoZSBjb21wb25lbnQgd2lsbCByZXF1ZXN0IHRvIGNsb3NlIGl0c2VsZi5cclxuICpcclxuICogT2YgY291cnNlLCBpZiB5b3UgZG9uJ3QgZG8gYW55dGhpbmcgaW4gdGhlIGBvbkNsb3NlYCBmdW5jdGlvbixcclxuICogaXQgd29uJ3QgYmUgYSBzb2Z0IGRpc21pc3MgYW55bW9yZS5cclxuICpcclxuICogQHBhcmFtIHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZSwgZ2V0RWxlbWVudHMgfSkge1xyXG4gICAgZnVuY3Rpb24gb25CYWNrZHJvcENsaWNrKGUpIHtcclxuICAgICAgICAvLyBCYXNpY2FsbHksIFwid2FzIHRoaXMgZXZlbnQgZmlyZWQgb24gdGhlIHJvb3QtbW9zdCBlbGVtZW50LCBvciBhdCBsZWFzdCBhbiBlbGVtZW50IG5vdCBjb250YWluZWQgYnkgdGhlIG1vZGFsP1wiXHJcbiAgICAgICAgLy8gRWl0aGVyIGNvdWxkIGJlIGhvdyB0aGUgYnJvd3NlciBoYW5kbGVzIHRoZXNlIHNvcnRzIG9mIFwiaW50ZXJhY3Rpbmcgd2l0aCBub3RoaW5nXCIgZXZlbnRzLlxyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgb25DbG9zZShcImJhY2tkcm9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRFbGVtZW50cygpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cyAmJiBlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSlcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kSW5zaWRlQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJbnNpZGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZEluc2lkZUNsaWNrKVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZShcImJhY2tkcm9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUFjdGl2ZUVsZW1lbnQoe1xyXG4gICAgICAgIG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2U6IG5ld0VsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRGb2N1c2FibGVFbGVtZW50cyA9IGdldEVsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZEZvY3VzYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsaWRGb2N1c2FibGVFbGVtZW50cykpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRGb2N1c2FibGVFbGVtZW50cyA9IFt2YWxpZEZvY3VzYWJsZUVsZW1lbnRzXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZvY3VzYWJsZSBvZiB2YWxpZEZvY3VzYWJsZUVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzYWJsZT8uY29udGFpbnMobmV3RWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsb3NlKFwibG9zdC1mb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFNpbmNlIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbmVydCwgd2UgbGlzdGVuIGZvciBjYXB0dXJlZCBjbGlja3Mgb24gdGhlIHdpbmRvd1xyXG4gICAgLy8gKHdlIGRvbid0IHVzZSBvbkNsaWNrIHNpbmNlIHRoYXQgZG9lc24ndCBmaXJlIHdoZW4gY2xpY2tlZCBvbiBlbXB0eS9pbmVydCBhcmVhcylcclxuICAgIC8vIE5vdGU6IFdlIG5lZWQgYSAqc2VwYXJhdGUqIHRvdWNoIGV2ZW50IG9uIG1vYmlsZSBTYWZhcmksIGJlY2F1c2VcclxuICAgIC8vIGl0IGRvZXNuJ3QgbGV0IGNsaWNrIGV2ZW50cyBidWJibGUgb3IgYmUgY2FwdHVyZWQgZnJvbSB0cmFkaXRpb25hbGx5IG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cyxcclxuICAgIC8vIGJ1dCB0b3VjaCBldmVudHMgd29yayBhcyBleHBlY3RlZC5cclxuICAgIHVzZUdsb2JhbEhhbmRsZXIod2luZG93LCBcIm1vdXNlZG93blwiLCAhb3BlbiA/IG51bGwgOiBvbkJhY2tkcm9wQ2xpY2ssIHsgY2FwdHVyZTogdHJ1ZSB9KTtcclxuICAgIHVzZUdsb2JhbEhhbmRsZXIod2luZG93LCBcInRvdWNoc3RhcnRcIiwgIW9wZW4gPyBudWxsIDogb25CYWNrZHJvcENsaWNrLCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICB1c2VHbG9iYWxIYW5kbGVyKGRvY3VtZW50LCBcImtleWRvd25cIiwgKGUpID0+IHsgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgb25DbG9zZShcImVzY2FwZVwiKTtcclxuICAgIH0gfSk7XHJcbn1cclxuLyoqXHJcbiAqIEEgZ2VuZXJpYyBtb2RhbCBob29rLCB1c2VkIGJ5IG1vZGFsIGRpYWxvZ3MsIGJ1dCBjYW4gYWxzb1xyXG4gKiBiZSB1c2VkIGJ5IGFueXRoaW5nIHRoYXQncyBtb2RhbCB3aXRoIGEgYmFja2Ryb3AuXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSkge1xyXG4gICAgY29uc3Qgc3RhYmxlT25DbG9zZSA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uQ2xvc2UpO1xyXG4gICAgY29uc3QgW21vZGFsRGVzY3JpYmVkQnlCb2R5LCBzZXRNb2RhbERlc2NyaWJlZEJ5Qm9keV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VIaWRlU2Nyb2xsKG9wZW4pO1xyXG4gICAgY29uc3QgeyBpZDogbW9kYWxJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlTW9kYWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlTW9kYWxSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtXCIgfSk7XHJcbiAgICBjb25zdCB7IGlkOiBib2R5SWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZUJvZHlJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlQm9keVJlZmVyZW5jaW5nSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tb2RhbC1ib2R5LVwiIH0pO1xyXG4gICAgY29uc3QgeyBpZDogdGl0bGVJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlVGl0bGVJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlVGl0bGVSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtdGl0bGUtXCIgfSk7XHJcbiAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wczogdXNlTW9kYWxSZWZFbGVtZW50LCBnZXRFbGVtZW50OiBnZXRNb2RhbEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xyXG4gICAgdXNlU29mdERpc21pc3MoeyBvbkNsb3NlOiBzdGFibGVPbkNsb3NlLCBnZXRFbGVtZW50czogZ2V0TW9kYWxFbGVtZW50IH0pO1xyXG4gICAgY29uc3QgdXNlTW9kYWxCYWNrZHJvcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3AoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTW9kYWxCYWNrZHJvcFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyVXA6ICgpID0+IHN0YWJsZU9uQ2xvc2UoXCJiYWNrZHJvcFwiKSB9LCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsQmFja2Ryb3BQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlTW9kYWxQcm9wcyA9IGZ1bmN0aW9uICh7IFwiYXJpYS1tb2RhbFwiOiBhcmlhTW9kYWwsIHJvbGUsIC4uLnAwIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUZvY3VzVHJhcFByb3BzIH0gPSB1c2VGb2N1c1RyYXAoeyB0cmFwQWN0aXZlOiBvcGVuIH0pO1xyXG4gICAgICAgIGNvbnN0IHAxID0gdXNlVGl0bGVSZWZlcmVuY2luZ0lkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikocDApO1xyXG4gICAgICAgIGNvbnN0IHAyID0gdXNlTW9kYWxJZFByb3BzKHAxKTtcclxuICAgICAgICBjb25zdCBwRmluYWwgPSB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzKFwiYXJpYS1kZXNjcmliZWRieVwiKShwMik7XHJcbiAgICAgICAgcmV0dXJuIHVzZUZvY3VzVHJhcFByb3BzKHVzZU1lcmdlZFByb3BzKCkodXNlTW9kYWxSZWZFbGVtZW50KHsgcm9sZTogXCJkaWFsb2dcIiB9KSwgbW9kYWxEZXNjcmliZWRCeUJvZHkgPyBwRmluYWwgOiBwMikpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVzZU1vZGFsVGl0bGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbFRpdGxlKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZU1vZGFsVGl0bGVQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVGl0bGVJZFByb3BzKHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsVGl0bGVQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlTW9kYWxCb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxCb2R5KHsgZGVzY3JpcHRpdmUgfSkge1xyXG4gICAgICAgIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5KGRlc2NyaXB0aXZlKTtcclxuICAgICAgICBjb25zdCB1c2VNb2RhbEJvZHlQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlQm9keUlkUHJvcHMocHJvcHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxCb2R5UHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTW9kYWxQcm9wcyxcclxuICAgICAgICB1c2VNb2RhbFRpdGxlLFxyXG4gICAgICAgIHVzZU1vZGFsQm9keSxcclxuICAgICAgICB1c2VNb2RhbEJhY2tkcm9wXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBBbGxvd3MgZm9yIGhpZGluZyB0aGUgc2Nyb2xsIGJhciBvZiB0aGUgcm9vdCBIVE1MIGVsZW1lbnRcclxuICogd2l0aG91dCBzaGlmdGluZyB0aGUgbGF5b3V0IG9mIHRoZSBwYWdlIG1vcmUgdGhhbiBhZGRpbmcgYSBmb3cgcGl4ZWxzXHJcbiAqIG9mIHBhZGRpbmcgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBuZWNlc3NhcnkuXHJcbiAqIEBwYXJhbSBoaWRlU2Nyb2xsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSGlkZVNjcm9sbChoaWRlU2Nyb2xsKSB7XHJcbiAgICBjb25zdCBbZ2V0U2Nyb2xsYmFyV2lkdGgsIHNldFNjcm9sbGJhcldpZHRoXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtnZXRTY3JvbGxiYXJIZWlnaHQsIHNldFNjcm9sbGJhckhlaWdodF0gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gc2Nyb2xsaW5nIGlzIHJlc3VtZWQsIHdlJ2xsIG5lZWQgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBpbmZvcm1hdGlvbiBhcm91bmRcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgLy8gTWVhc3VyZSB0aGUgd2lkdGggb2YgdGhlIHBhZ2UgKG1pbnVzIHRoZSBzY3JvbGxiYXIpXHJcbiAgICAgICAgICAgIGxldCB3aWR0aFdpdGhTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHRXaXRoU2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgLy8gQXBwbHkgYSBjbGFzcyB0aGF0IGhpZGVzIHRoZSBzY3JvbGxiYXIuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZG9jdW1lbnQtc2Nyb2xsLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgLy8gSW4gY2FzZSBtdWx0aXBsZSB0aGluZ3MgYXJlIGxvY2tpbmcgc2Nyb2xsLCBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGFyZSBkb2luZyB0aGF0XHJcbiAgICAgICAgICAgIC8vIChqdXN0IGFkZCAxIG9uIGVuYWJsZSwgc3VidHJhY3QgMSBvbiBkaXNhYmxlKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9ICgrKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdIHx8IFwiMFwiKSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIC8vIE1lYXN1cmUgdGhlIG5ldyB3aWR0aCB3aXRob3V0IGEgc2Nyb2xsYmFyIFxyXG4gICAgICAgICAgICAvLyBzbyB3ZSBjYW4gdGFrZSB0aGUgZGlmZmVyZW5jZSBhcyB0aGUgc2Nyb2xsYmFyIHdpZHRoLlxyXG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRob3V0U2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0V2l0aG91dFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxiYXJXaWR0aCA9ICh3aWR0aFdpdGhvdXRTY3JvbGxCYXIgLSB3aWR0aFdpdGhTY3JvbGxCYXIpO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsYmFySGVpZ2h0ID0gKGhlaWdodFdpdGhvdXRTY3JvbGxCYXIgLSBoZWlnaHRXaXRoU2Nyb2xsQmFyKTtcclxuICAgICAgICAgICAgLy8gRmFpbHNhZmUgLS0gaWYgdGhpcyBtZWFzdXJpbmcgdHJpY2sgZG9lcyBzb21ldGhpbmcgdW5leHBlY3RlZCwganVzdCBpZ25vcmUgaXRcclxuICAgICAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoID4gODApXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxiYXJIZWlnaHQgPiA4MClcclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhckhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIC8vIE1ha2Ugb3VyIG1lYXN1cmVtZW50cyBhdmFpbGFibGUgYXMgQ1NTIHByb3BlcnRpZXMgZm9yIGdlbmVyYWwgdXNlXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxiYXItd2lkdGhcIiwgYCR7c2Nyb2xsYmFyV2lkdGh9cHhgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1yb290LXNjcm9sbGJhci1oZWlnaHRcIiwgYCR7c2Nyb2xsYmFySGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcm9vdC1zY3JvbGxzdG9wLXRvcFwiLCBgJHtvcmlnaW5hbFNjcm9sbFRvcH1weGApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJvb3Qtc2Nyb2xsc3RvcC1sZWZ0XCIsIGAke29yaWdpbmFsU2Nyb2xsTGVmdH1weGApO1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxiYXJXaWR0aChzY3JvbGxiYXJXaWR0aCk7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGJhckhlaWdodChzY3JvbGxiYXJIZWlnaHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVW5kbyBhbGwgdGhlIHRoaW5ncyB3ZSBqdXN0IGRpZFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgLSAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2Ugd2VyZSB0aGUgbGFzdCBzY3JvbGwtbG9ja2luZyB0aGluZyB0byBzdG9wLCB0aGVuIHJlbW92ZSB0aGUgY2xhc3MgdGhhdCBzdG9wcyBzY3JvbGxpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWhpZGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxzbywgcmVzdG9yZSB0aGUgb3JpZ2luYWwgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG8gdGhpcyBieSBmb3JjaW5nIHRoZSBzY3JvbGwgYmVoYXZpb3IgdG8gbm90IGJlIHNtb290aFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIChpdCdzIGluc3RhbnQgaWYgbm90aGluZyBpcyBzZXQgdG8gc21vb3RoLCBodHRwczovL3d3dy53My5vcmcvVFIvY3Nzb20tdmlldy8jc2Nyb2xsaW5nKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcsIHRoZW4gcmVzdG9yaW5nIHRoZSBvcmlnaW5hbCBzY3JvbGwgYmVoYXZpb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKHdoaWNoIHdhcyBwcm9iYWJseSBhbHJlYWR5IGF1dG8gYW55d2F5LCBidXQganVzdCB0byBiZSBzYWZlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2Nyb2xsQmVoYXZpb3IgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvKHsgdG9wOiBvcmlnaW5hbFNjcm9sbFRvcCwgbGVmdDogb3JpZ2luYWxTY3JvbGxMZWZ0LCBiZWhhdmlvcjogXCJhdXRvXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gb3JpZ2luYWxTY3JvbGxCZWhhdmlvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaGlkZVNjcm9sbF0pO1xyXG4gICAgcmV0dXJuIHsgZ2V0U2Nyb2xsYmFyV2lkdGgsIGdldFNjcm9sbGJhckhlaWdodCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tb2RhbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiLi91c2UtbW9kYWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFEaWFsb2coeyBvcGVuLCBvbkNsb3NlIH0pIHtcclxuICAgIC8vIFRPRE86IERpZmZlcmVuY2VzIGJldHdlZW4gZGlhbG9nIGFuZCBtb2RhbCBnbyBoZXJlLCBwcmVzdW1hYmx5LlxyXG4gICAgLy8gTm9uLW1vZGFsIGRpYWxvZ3MgbmVlZCB0byBiZSBhYmxlIHRvIGJlIHJlcG9zaXRpb25lZCwgZXRjLlxyXG4gICAgY29uc3QgeyB1c2VNb2RhbEJhY2tkcm9wLCB1c2VNb2RhbEJvZHksIHVzZU1vZGFsUHJvcHMsIHVzZU1vZGFsVGl0bGUgfSA9IHVzZU1vZGFsKHsgb3Blbiwgb25DbG9zZSB9KTtcclxuICAgIGNvbnN0IHVzZURpYWxvZ0JhY2tkcm9wID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxCYWNrZHJvcFByb3BzIH0gPSB1c2VNb2RhbEJhY2tkcm9wKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nQmFja2Ryb3BQcm9wczogdXNlTW9kYWxCYWNrZHJvcFByb3BzIH07XHJcbiAgICB9LCBbdXNlTW9kYWxCYWNrZHJvcF0pO1xyXG4gICAgY29uc3QgdXNlRGlhbG9nQm9keSA9IHVzZUNhbGxiYWNrKCh7IGRlc2NyaXB0aXZlIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZU1vZGFsQm9keVByb3BzIH0gPSB1c2VNb2RhbEJvZHkoeyBkZXNjcmlwdGl2ZSB9KTtcclxuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dCb2R5UHJvcHM6IHVzZU1vZGFsQm9keVByb3BzIH07XHJcbiAgICB9LCBbdXNlTW9kYWxCYWNrZHJvcF0pO1xyXG4gICAgY29uc3QgdXNlRGlhbG9nUHJvcHMgPSB1c2VNb2RhbFByb3BzO1xyXG4gICAgY29uc3QgdXNlRGlhbG9nVGl0bGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbFRpdGxlUHJvcHMgfSA9IHVzZU1vZGFsVGl0bGUoKTtcclxuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dUaXRsZVByb3BzOiB1c2VNb2RhbFRpdGxlUHJvcHMgfTtcclxuICAgIH0sIFt1c2VNb2RhbFRpdGxlXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZURpYWxvZ1Byb3BzLFxyXG4gICAgICAgIHVzZURpYWxvZ1RpdGxlLFxyXG4gICAgICAgIHVzZURpYWxvZ0JvZHksXHJcbiAgICAgICAgdXNlRGlhbG9nQmFja2Ryb3BcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRpYWxvZy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VIYXNGb2N1cywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VQcmVzc0V2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZUdlbmVyaWNMYWJlbCB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hNdWx0aSh7IC4uLmFyZ3MgfSkge1xyXG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHt9KTtcclxuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIGN1cnJlbnRUeXBlYWhlYWQsIGZvY3VzQ3VycmVudCwgdGFiYmFibGVJbmRleCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRGb2N1c2VkSW5uZXIgfSk7XHJcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbElucHV0KCk7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgIGNvbnN0IFtzaGlmdEhlbGQsIHNldFNoaWZ0SGVsZCwgZ2V0U2hpZnRIZWxkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHR5cGVhaGVhZEluUHJvZ3Jlc3MgPSAoISFjdXJyZW50VHlwZWFoZWFkKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW2ldLnNldFR5cGVhaGVhZEluUHJvZ3Jlc3ModHlwZWFoZWFkSW5Qcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIGNoaWxkQ291bnRdKTtcclxuICAgIGNvbnN0IHVzZUxpc3Rib3hNdWx0aUl0ZW0gPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gaW5mby5zZWxlY3RlZDtcclxuICAgICAgICBjb25zdCBbdHlwZWFoZWFkSW5Qcm9ncmVzcywgc2V0VHlwZWFoZWFkSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWQgPSB1c2VTdGFibGVHZXR0ZXIoc2VsZWN0ZWQpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcclxuICAgICAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKGluZm8ub25TZWxlY3QgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyAuLi5pbmZvLCBzZXRUeXBlYWhlYWRJblByb2dyZXNzIH0pO1xyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGdldFNoaWZ0SGVsZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkOiB0cnVlIH0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGFiYmFibGVdKTtcclxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtUHJvcHMsIHRhYmJhYmxlIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpSXRlbVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgLi4uZSwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZDogIWdldFNlbGVjdGVkKCkgfSB9KTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSwgeyBzcGFjZTogdHlwZWFoZWFkSW5Qcm9ncmVzcyA/IFwiZXhjbHVkZVwiIDogdW5kZWZpbmVkIH0pKHt9KTtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZXRzaXplXCJdID0gKGNoaWxkQ291bnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHRhYmJhYmxlID8/IGZhbHNlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCBwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgY2hpbGRDb3VudCwgdHlwZWFoZWFkSW5Qcm9ncmVzc10pO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveE11bHRpTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlMYWJlbCgpIHtcclxuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlMYWJlbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMocHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlMYWJlbFByb3BzIH07XHJcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcclxuICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUl0ZW0sIHVzZUxpc3Rib3hNdWx0aVByb3BzLCB1c2VMaXN0Ym94TXVsdGlMYWJlbCwgdGFiYmFibGVJbmRleCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgZm9jdXM6IGZvY3VzQ3VycmVudCB9O1xyXG4gICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBwcm9wcy5yb2xlID0gXCJsaXN0Ym94XCI7XHJcbiAgICAgICAgcHJvcHNbXCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiXSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvblByb3BzKHVzZUhhc0ZvY3VzUHJvcHModXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbktleVVwLCBvbkZvY3VzT3V0IH0sIHByb3BzKSkpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXHJcbiAgICAgICAgc2V0U2hpZnRIZWxkKHRydWUpOyB9XHJcbiAgICBmdW5jdGlvbiBvbktleVVwKGUpIHsgaWYgKGUua2V5ID09IFwiU2hpZnRcIilcclxuICAgICAgICBzZXRTaGlmdEhlbGQoZmFsc2UpOyB9XHJcbiAgICBmdW5jdGlvbiBvbkZvY3VzT3V0KGUpIHsgc2V0U2hpZnRIZWxkKGZhbHNlKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0Ym94LW11bHRpLmpzLm1hcCIsImltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQsIHVzZUNoaWxkRmxhZywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VHZW5lcmljTGFiZWwgfSBmcm9tIFwiLi91c2UtbGFiZWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94U2luZ2xlKHsgc2VsZWN0ZWRJbmRleCwgb25TZWxlY3QsIHNlbGVjdGlvbk1vZGUsIC4uLmFyZ3MgfSkge1xyXG4gICAgY29uc3QgW2FueUl0ZW1zRm9jdXNlZCwgc2V0QW55SXRlbXNGb2N1c2VkLCBnZXRBbnlJdGVtc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dCwgdXNlR2VuZXJpY0xhYmVsTGFiZWwsIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsIGlucHV0RWxlbWVudCB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1saXN0Ym94LWxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJhcmlhLWxpc3Rib3gtXCIgfSk7XHJcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCBzZXRUYWJiYWJsZUluZGV4LCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0QW55SXRlbXNGb2N1c2VkIH0pO1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xyXG4gICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhvblNlbGVjdCA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICAvLyBUcmFjayB3aGV0aGVyIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIGxpc3QgYm94IHBhcmVudCBlbGVtZW50LlxyXG4gICAgLy8gV2hlbiBpdCdzIG5vdCwgd2UgcmVzZXQgdGhlIHRhYmJhYmxlIGluZGV4IGJhY2sgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50LlxyXG4gICAgdXNlQWN0aXZlRWxlbWVudCh7IG9uQWN0aXZlRWxlbWVudENoYW5nZTogYWN0aXZlRWxlbWVudCA9PiBzZXRBbnlJdGVtc0ZvY3VzZWQoISEoaW5wdXRFbGVtZW50Py5jb250YWlucyhhY3RpdmVFbGVtZW50KSkpIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWFueUl0ZW1zRm9jdXNlZClcclxuICAgICAgICAgICAgc2V0VGFiYmFibGVJbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH0sIFthbnlJdGVtc0ZvY3VzZWQsIHNlbGVjdGVkSW5kZXgsIHNldFRhYmJhYmxlSW5kZXhdKTtcclxuICAgIHVzZUNoaWxkRmxhZyh7XHJcbiAgICAgICAgYWN0aXZhdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIHNldENoaWxkRmxhZzogKGksIHNlbGVjdGVkKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSxcclxuICAgICAgICBnZXRDaGlsZEZsYWc6IChpKSA9PiAobWFuYWdlZENoaWxkcmVuW2ldPy5nZXRTZWxlY3RlZCgpID8/IG51bGwpXHJcbiAgICB9KTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfSwgW3NlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUl0ZW0gPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWQsIC4uLmluZm8gfSk7XHJcbiAgICAgICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5mby5pbmRleDtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlID09IFwiZm9jdXNcIikge1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3RhYmJhYmxlLCBzZWxlY3Rpb25Nb2RlLCBpbmRleF0pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtUHJvcHMsIHRhYmJhYmxlLCBzZWxlY3RlZCwgZ2V0U2VsZWN0ZWQgfTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQpKHt9KTtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZXRzaXplXCJdID0gKGNoaWxkQ291bnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHNlbGVjdGVkID8/IGZhbHNlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgc2VsZWN0aW9uTW9kZSwgY2hpbGRDb3VudF0pO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcclxuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzIH07XHJcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcclxuICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtLCB1c2VMaXN0Ym94U2luZ2xlUHJvcHMsIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCwgdGFiYmFibGVJbmRleCwgZm9jdXM6IGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9O1xyXG4gICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibGlzdGJveFwiO1xyXG4gICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvblByb3BzKHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMocHJvcHMpKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdGJveC1zaW5nbGUuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlLCB1c2VUaW1lb3V0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTb2Z0RGlzbWlzcyB9IGZyb20gXCIuL3VzZS1tb2RhbFwiO1xyXG4vKipcclxuICogQSBtZW51IGlzIGEgcG9wdXAgY29udHJvbCB0aGF0IGNvbnRhaW5zIGEgbGlzdCBvZiBtZW51IGl0ZW1zLCBhbmQgdGhhdCdzIGl0LlxyXG4gKiBJdCBoYXMgdmVyeSB3ZWxsLWRlZmluZWQgbG9naWMgZm9yIG1hbmFnaW5nIHRob3NlIGl0ZW1zIGFzIHRoZSBtZW51J3Mgc3RhdGUgY2hhbmdlcy5cclxuICpcclxuICogQSBNZW51QmFzZSBpcyBqdXN0IHRoZSBcInBvcHVwXCIgcGFydCB3aXRob3V0IHRoZSBcImxpc3Qgb2YgbWVudSBpdGVtc1wiIHBhcnQuIEl0IGNhblxyXG4gKiAocmVhbGx5LCBtdXN0KSBoYXZlIGludGVyYWN0aXZlIGNvbnRyb2xzLCBidXQgdGhlc2UgY29udHJvbHMgYXJlIGFsbG93ZWQgdG8gYmUgbW9yZVxyXG4gKiBmcmVlLWZvcm0uIFRoaXMgbWVhbnMgdGhhdCwgbGlrZSBhIGRpYWxvZywgeW91IG11c3QgdGVsbCB0aGlzIGhvb2tcclxuICogd2hlcmUgd2l0aGluIHRoZSBwb3B1cCB0byBzZW5kIGZvY3VzIHdoZW4gb3BlbmVkIChmb3IgYSBtZW51IGl0J3MganVzdCB0aGUgZmlyc3RcclxuICogbWVudSBpdGVtLCBidXQgd2l0aCBjdXN0b20gY29udGVudCB5b3UnbGwgbmVlZCB0byBwcm92aWRlIHRoaXMpLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbnVCYXNlKHsgc2VuZEZvY3VzV2l0aGluTWVudSwgLi4uYXJncyB9KSB7XHJcbiAgICBjb25zdCBnZXRTZW5kRm9jdXNXaXRoaW5NZW51ID0gdXNlU3RhYmxlR2V0dGVyKHNlbmRGb2N1c1dpdGhpbk1lbnUpO1xyXG4gICAgY29uc3QgW2ZvY3VzVHJhcEFjdGl2ZSwgc2V0Rm9jdXNUcmFwQWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgbGV0IG9uQ2xvc2UgPSBhcmdzLm9uQ2xvc2U7XHJcbiAgICBsZXQgb25PcGVuID0gYXJncy5vbk9wZW47XHJcbiAgICBsZXQgbWVudWJhciA9IGFyZ3MubWVudWJhcjtcclxuICAgIGxldCBvcGVuID0gKG1lbnViYXIgPyB0cnVlIDogYXJncy5vcGVuKTtcclxuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGNvbnN0IGdldE9wZW4gPSB1c2VTdGFibGVHZXR0ZXIob3Blbik7XHJcbiAgICAvLyBUT0RPOiBJdCdzIGF3a3dhcmQgdGhhdCB0aGUgYnV0dG9uIGZvY3VzIHByb3BzIGFyZSBvdXQgaGVyZSB3aGVyZSB3ZSBkb24ndCBoYXZlIGl0cyB0eXBlLFxyXG4gICAgLy8gYnV0IGZvY3VzIG1hbmFnZW1lbnQgaXMgc3VwZXIgc2Vuc2l0aXZlLCBhbmQgZXZlbiB3YWl0aW5nIGZvciBhIHVzZUxheW91dEVmZmVjdCB0byBzeW5jIHN0YXRlIGhlcmVcclxuICAgIC8vIHdvdWxkIGJlIHRvbyBsYXRlLCBzbyBpdCB3b3VsZCBsb29rIGxpa2UgdGhlcmUncyBhIG1vbWVudCBiZXR3ZWVuIG1lbnUgZm9jdXMgbG9zdCBhbmQgYnV0dG9uIGZvY3VzIGdhaW5lZFxyXG4gICAgLy8gd2hlcmUgbm90aGluZyBpcyBmb2N1c2VkLiBcclxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlTWVudUJhc2VIYXNGb2N1c1Byb3BzLCBnZXRMYXN0Rm9jdXNlZElubmVyOiBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHsgLypvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkOiBvbk1lbnVPckJ1dHRvbkxvc3RMYXN0Rm9jdXMqL30pO1xyXG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzOiB1c2VCdXR0b25IYXNGb2N1c1Byb3BzLCBnZXRMYXN0Rm9jdXNlZElubmVyOiBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHsgLypvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkOiBvbk1lbnVPckJ1dHRvbkxvc3RMYXN0Rm9jdXMqL30pO1xyXG4gICAgY29uc3QgW29wZW5lckVsZW1lbnQsIHNldE9wZW5lckVsZW1lbnQsIGdldE9wZW5lckVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1lbnVCYXNlSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1lbnVCYXNlSWRSZWZlcmVuY2luZ1Byb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1lbnUtXCIgfSk7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQ6IGdldEJ1dHRvbkVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRPcGVuZXJFbGVtZW50IH0pO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRNZW51RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UsIGdldEVsZW1lbnRzOiAoKSA9PiAoW2dldEJ1dHRvbkVsZW1lbnQoKSwgZ2V0TWVudUVsZW1lbnQoKV0pIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRGb2N1c1RyYXBBY3RpdmUob3Blbik7XHJcbiAgICB9LCBbb3Blbl0pO1xyXG4gICAgLy8gQSBtZW51IHNlbnRpbmFsIGlzIGEgaGlkZGVuIGJ1dCBmb2N1c2FibGUgZWxlbWVudCB0aGF0IGNvbWVzIGF0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGVsZW1lbnRcclxuICAgIC8vIHRoYXQsIHdoZW4gYWN0aXZhdGVkIG9yIGZvY3VzZWQgb3ZlciwgY2xvc2VzIHRoZSBtZW51LlxyXG4gICAgLy8gKGlmIGZvY3VzZWQgd2l0aGluIDEwMG1zIG9mIHRoZSBvcGVuIHByb3AgY2hhbmdpbmcsIGluc3RlYWQgb2ZcclxuICAgIC8vIGNsb3NpbmcgdGhlIG1lbnUsIGZvY3VzaW5nIHRoZSBzZW50aW5lbCBpbW1lZGlhdGVseSBhc2tzIHRoZSBtZW51IHRvIGZvY3VzIGl0c2VsZikuXHJcbiAgICAvLyBUaGlzIGV4aXN0cyBiZWNhdXNlIHdoaWxlIG1vdXNlIHVzZXJzIGNhbiBjbGljayBvdXQgb2YgYSBtZW51XHJcbiAgICAvLyBhbmQga2V5Ym9hcmQgdXNlcnMgY2FuIGVzY2FwZSB0byBjbG9zZSB0aGUgbWVudSxcclxuICAgIC8vIHNjcmVlbiByZWFkZXJzIGFuZCBvdGhlciBpbnB1dCBtZXRob2RzIHRoYXQgZG9uJ3QgdXNlIHRob3NlIHR3byBiZWNvbWUgc3R1Y2suXHJcbiAgICBjb25zdCB1c2VNZW51U2VudGluZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW2ZpcnN0U2VudGluZWxJc0FjdGl2ZSwgc2V0Rmlyc3RTZW50aW5lbElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICB1c2VUaW1lb3V0KHsgY2FsbGJhY2s6ICgpID0+IHsgc2V0Rmlyc3RTZW50aW5lbElzQWN0aXZlKG9wZW4pOyB9LCB0aW1lb3V0OiAxMDAsIHRyaWdnZXJJbmRleDogYCR7b3Blbn0tJHtmaXJzdFNlbnRpbmVsSXNBY3RpdmV9YCB9KTtcclxuICAgICAgICBjb25zdCBvbkZvY3VzID0gZmlyc3RTZW50aW5lbElzQWN0aXZlID8gKCgpID0+IHN0YWJsZU9uQ2xvc2UoKSkgOiAoKCkgPT4gZ2V0U2VuZEZvY3VzV2l0aGluTWVudSgpPy4oKSk7XHJcbiAgICAgICAgY29uc3Qgb25DbGljayA9ICgpID0+IHN0YWJsZU9uQ2xvc2UoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VNZW51U2VudGluZWxQcm9wczogZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25Gb2N1cywgb25DbGljayB9LCBwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbb3Blbl0pO1xyXG4gICAgY29uc3QgdXNlTWVudUJhc2VQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiICYmIGdldE9wZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lbnVCYXNlSGFzRm9jdXNQcm9wcyh1c2VNZW51QmFzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZW51QmFzZUlkUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biB9LCAocHJvcHMpKSkpKTtcclxuICAgIH0sIFt1c2VNZW51QmFzZUhhc0ZvY3VzUHJvcHMsIHVzZU1lbnVCYXNlUmVmRWxlbWVudFByb3BzLCB1c2VNZW51QmFzZUlkUHJvcHNdKTtcclxuICAgIGNvbnN0IHVzZU1lbnVCYXNlQnV0dG9uUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlQnV0dG9uUmVmRWxlbWVudFByb3BzKHVzZUJ1dHRvbkhhc0ZvY3VzUHJvcHModXNlTWVudUJhc2VJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHByb3BzKSkpO1xyXG4gICAgfSwgW3VzZUJ1dHRvbkhhc0ZvY3VzUHJvcHMsIHVzZUJ1dHRvblJlZkVsZW1lbnRQcm9wcywgdXNlTWVudUJhc2VJZFJlZmVyZW5jaW5nUHJvcHNdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VuZEZvY3VzV2l0aGluTWVudSA9IGdldFNlbmRGb2N1c1dpdGhpbk1lbnUoKTtcclxuICAgICAgICBpZiAoZm9jdXNUcmFwQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHNlbmRGb2N1c1dpdGhpbk1lbnU/LigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb2N1c1RyYXBBY3RpdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIoKSlcclxuICAgICAgICAgICAgICAgIGdldE9wZW5lckVsZW1lbnQoKT8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbnVsbCwgc28gd2UndmUgb25seSBqdXN0IG1vdW50ZWQgYW5kIHNob3VsZG4ndCBmb2N1cyBvdXJzZWx2ZXMuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ZvY3VzVHJhcEFjdGl2ZV0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VNZW51U2VudGluZWwsXHJcbiAgICAgICAgZm9jdXNUcmFwQWN0aXZlLFxyXG4gICAgICAgIHVzZU1lbnVCYXNlUHJvcHMsXHJcbiAgICAgICAgdXNlTWVudUJhc2VCdXR0b25Qcm9wcyxcclxuICAgICAgICBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIsXHJcbiAgICAgICAgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgb25PcGVuLFxyXG4gICAgICAgIG9uQ2xvc2VcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFNZW51KHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIG5vVHlwZWFoZWFkLCBub1dyYXAsIHR5cGVhaGVhZFRpbWVvdXQsIC4uLmFyZ3MgfSkge1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudDogZm9jdXNNZW51LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBub1R5cGVhaGVhZCwgbm9XcmFwLCB0eXBlYWhlYWRUaW1lb3V0LCBzaG91bGRGb2N1c09uQ2hhbmdlOiB1c2VDYWxsYmFjaygoKSA9PiBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIoKSB8fCBnZXRNZW51QmFzZUJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIoKSwgW10pIH0pO1xyXG4gICAgY29uc3QgeyB1c2VNZW51U2VudGluZWwsIGZvY3VzVHJhcEFjdGl2ZSwgdXNlTWVudUJhc2VCdXR0b25Qcm9wcywgdXNlTWVudUJhc2VQcm9wcywgZ2V0TWVudUJhc2VCdXR0b25MYXN0Rm9jdXNlZElubmVyLCBnZXRNZW51QmFzZUxhc3RGb2N1c2VkSW5uZXIsIG9wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlTWVudUJhc2UoeyAuLi5hcmdzLCBzZW5kRm9jdXNXaXRoaW5NZW51OiBmb2N1c01lbnUgPz8gKCgpID0+IHsgfSkgfSk7XHJcbiAgICBjb25zdCB1c2VNZW51QnV0dG9uID0gdXNlQ2FsbGJhY2soKHt9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlTWVudUJ1dHRvblByb3BzOiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlTWVudUJhc2VCdXR0b25Qcm9wcyhwKTtcclxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1oYXNwb3B1cFwiXSA9IFwibWVudVwiO1xyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWV4cGFuZGVkXCJdID0gb3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtvcGVuLCBvbkNsb3NlLCBvbk9wZW4sIHVzZU1lbnVCYXNlQnV0dG9uUHJvcHNdKTtcclxuICAgIC8qY29uc3QgdXNlTWVudVN1Ym1lbnVJdGVtID0gdXNlQ2FsbGJhY2soKGFyZ3M6IFVzZU1lbnVTdWJtZW51SXRlbVBhcmFtZXRlcnMpID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZU1lbnVQcm9wcywgdXNlTWVudUJ1dHRvbiB9ID0gdXNlQXJpYU1lbnU8SFRNTEVsZW1lbnQsIENoaWxkRWxlbWVudCwgST4oYXJncyk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNZW51QnV0dG9uUHJvcHMgfSA9IHVzZU1lbnVCdXR0b248RT4oeyB0YWc6IFwibGlcIiBhcyBhbnkgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50PGFueT4oeyBvbkVsZW1lbnRDaGFuZ2U6IHNldE9wZW5lckVsZW1lbnQgYXMgT25QYXNzaXZlU3RhdGVDaGFuZ2U8YW55PiB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0RWxlbWVudCxcclxuICAgICAgICAgICAgdXNlTWVudVByb3BzLFxyXG4gICAgICAgICAgICB1c2VNZW51U3VibWVudUl0ZW1Qcm9wczogZnVuY3Rpb24gPFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxFPj4oeyAuLi5wcm9wcyB9OiBQKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJtZW51aXRlbVwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZW51QnV0dG9uUHJvcHModXNlTWVudUlkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtY29udHJvbHNcIikocHJvcHMpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7Ki9cclxuICAgIGNvbnN0IHVzZU1lbnVJdGVtID0gdXNlQ2FsbGJhY2soKGFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZChhcmdzKTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VNZW51SXRlbVByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJtZW51aXRlbVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHByb3BzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZU1lbnVJdGVtUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHVzZU1lbnVQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICBwcm9wcy5yb2xlID0gXCJtZW51XCI7XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lbnVCYXNlUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyhwcm9wcykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VNZW51UHJvcHMsXHJcbiAgICAgICAgdXNlTWVudUJ1dHRvbixcclxuICAgICAgICB1c2VNZW51SXRlbSxcclxuICAgICAgICB1c2VNZW51U2VudGluZWwsXHJcbiAgICAgICAgLy91c2VNZW51U3VibWVudUl0ZW0sXHJcbiAgICAgICAgZm9jdXNNZW51LFxyXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXHJcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVudS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUHJlc3NFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYVRhYnMoeyBzZWxlY3Rpb25Nb2RlLCBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgb3JpZW50YXRpb246IGxvZ2ljYWxPcmllbnRhdGlvbiwgLi4uYXJncyB9KSB7XHJcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZVRhYkxpc3RIYXNGb2N1c1Byb3BzLCBnZXRGb2N1c2VkSW5uZXI6IGdldFRhYkxpc3RGb2N1c2VkSW5uZXIgfSA9IHVzZUhhc0ZvY3VzKHt9KTtcclxuICAgIGNvbnN0IFtwaHlzaWNhbE9yaWVudGF0aW9uLCBzZXRQaHlzaWNhbE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKFwiaG9yaXpvbnRhbFwiKTtcclxuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZTogbG9naWNhbERpcmVjdGlvbkluZm8gPT4gc2V0UGh5c2ljYWxPcmllbnRhdGlvbihjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uKGxvZ2ljYWxPcmllbnRhdGlvbiwgbG9naWNhbERpcmVjdGlvbkluZm8pKSB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGlzdElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGlzdElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1saXN0LVwiIH0pO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJMYWJlbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGFiZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItbGFiZWwtXCIgfSk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFRhYnMsIG5hdmlnYXRlVG9JbmRleCwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgdGFiYmFibGVJbmRleCwgaW52YWxpZFR5cGVhaGVhZCwgY3VycmVudFR5cGVhaGVhZCwgZm9jdXNDdXJyZW50IH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IC4uLmFyZ3MsIHNob3VsZEZvY3VzT25DaGFuZ2U6IGdldFRhYkxpc3RGb2N1c2VkSW5uZXIsIGtleU5hdmlnYXRpb246IGxvZ2ljYWxPcmllbnRhdGlvbiB9KTtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUGFuZWxzLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRUYWJQYW5lbCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XHJcbiAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uU2VsZWN0KTtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkVGFicy5sZW5ndGg7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRUYWJzKVxyXG4gICAgICAgICAgICBjaGlsZC5zZXRTZWxlY3Rpb25Nb2RlKHNlbGVjdGlvbk1vZGUpO1xyXG4gICAgfSwgW3NlbGVjdGlvbk1vZGVdKTtcclxuICAgIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZFRhYnNbaV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSwgZ2V0Q2hpbGRGbGFnOiBpID0+IChtYW5hZ2VkVGFic1tpXT8uZ2V0U2VsZWN0ZWQoKSkgfSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoeyBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkUGFuZWxzLCBzZXRDaGlsZEZsYWc6IChpLCB2aXNpYmxlKSA9PiBtYW5hZ2VkUGFuZWxzW2ldPy5zZXRWaXNpYmxlKHZpc2libGUpLCBnZXRDaGlsZEZsYWc6IGkgPT4gKG1hbmFnZWRQYW5lbHNbaV0/LmdldFZpc2libGUoKSkgfSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKHByZXYpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHNlbGVjdGlvbk1vZGUgPT0gXCJhY3RpdmF0ZVwiKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gd2FpdCBhIG1vbWVudCBzbyB0aGF0IHRoZSB0YWIgcGFuZWwgd2Ugd2FudCB0byBmb2N1c1xyXG4gICAgICAgICAgICAvLyBpcyBhY3R1YWxseSB2aXNpYmxlIChpLmUuIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGNoaWxkIHRvIHJlLXJlbmRlciBpdHNlbGYpLlxyXG4gICAgICAgICAgICAvLyBXZSBjb3VsZCwgYWx0ZXJuYXRpdmVseSwgc2lnbmFsIHRvIHRoZSBjaGlsZCB0aGF0IGl0IHNob3VsZCBmb2N1cyBpdHNlbGZcclxuICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSBpdCByZW5kZXJzIGl0c2VsZiBhcyB2aXNpYmxlLFxyXG4gICAgICAgICAgICAvLyB3aGljaCBtaWdodCBiZSBiZXR0ZXI/XHJcbiAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRQYW5lbHNbc2VsZWN0ZWRJbmRleF0/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjaGlsZENvdW50LCBzZWxlY3RlZEluZGV4LCBzZWxlY3Rpb25Nb2RlXSk7XHJcbiAgICBjb25zdCB1c2VUYWIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWIoaW5mbykge1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3Rpb25Nb2RlTCwgc2V0U2VsZWN0aW9uTW9kZUxdID0gdXNlU3RhdGUoc2VsZWN0aW9uTW9kZSk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xyXG4gICAgICAgIGNvbnN0IFt0YWJQYW5lbElkLCBzZXRUYWJQYW5lbElkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJJZFByb3BzLCBpZDogdGFiSWQsIGdldElkOiBnZXRUYWJJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItXCIgfSk7XHJcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZCwgdGFiSWQsIHNldFRhYlBhbmVsSWQsIHNldFNlbGVjdGlvbk1vZGU6IHNldFNlbGVjdGlvbk1vZGVMLCAuLi5pbmZvIH0pO1xyXG4gICAgICAgIGNvbnN0IGdldEluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKGluZm8uaW5kZXgpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlTCA9PSBcImZvY3VzXCIpIHtcclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0KHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0YWJiYWJsZSwgc2VsZWN0aW9uTW9kZV0pO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7IG1hbmFnZWRQYW5lbHNbaW5mby5pbmRleF0/LnNldFRhYklkKHRhYklkKTsgfSwgW3RhYklkLCBpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlUHJlc3NFdmVudEhhbmRsZXJzKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD8uKGVuaGFuY2VFdmVudChlLCB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSkpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9LCB1bmRlZmluZWQpKHByb3BzKTtcclxuICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IFwidGFiXCI7XHJcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9IChzZWxlY3RlZCA/PyBmYWxzZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWNvbnRyb2xzXCJdID0gdGFiUGFuZWxJZDtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVRhYklkUHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhuZXdQcm9wcykpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYlByb3BzLCBzZWxlY3RlZCB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlVGFiUGFuZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VQYW5lbChpbmZvKSB7XHJcbiAgICAgICAgLy9jb25zdCBbc2hvdWxkRm9jdXMsIHNldFNob3VsZEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICBjb25zdCBbdGFiSWQsIHNldFRhYklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGUsIGdldFZpc2libGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VQYW5lbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkUGFuZWxJZCwgaWQ6IHRhYlBhbmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLXBhbmVsLVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZU1hbmFnZWRUYWJQYW5lbCh7IC4uLmluZm8sIHRhYlBhbmVsSWQsIHNldFRhYklkLCBmb2N1cywgc2V0VmlzaWJsZTogc2V0VmlzaWJsZSwgZ2V0VmlzaWJsZTogZ2V0VmlzaWJsZSB9KTtcclxuICAgICAgICBmdW5jdGlvbiBmb2N1cygpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0VGFiTGlzdEZvY3VzZWRJbm5lcigpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Py5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFRhYnNbaW5mby5pbmRleF0/LnNldFRhYlBhbmVsSWQodGFiUGFuZWxJZCk7IH0sIFt0YWJQYW5lbElkLCBpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUGFuZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWxhYmVsbGVkYnlcIl0gPSBtYW5hZ2VkVGFic1tpbmZvLmluZGV4XT8udGFiSWQ7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYnBhbmVsXCI7XHJcbiAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID8/PSAtMTsgLy8gTWFrZSBzdXJlIHRoZSB0YWIgcGFuZWwgaXMgdGFiYmFibGUuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VQYW5lbElkUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocHJvcHMpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYlBhbmVsUHJvcHMsIHZpc2libGUgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVRhYnNMaXN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFiTGlzdCgpIHtcclxuICAgICAgICBmdW5jdGlvbiB1c2VUYWJMaXN0UHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYmxpc3RcIjtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLW9yaWVudGF0aW9uXCJdID0gcGh5c2ljYWxPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRUYWJMYWJlbElkKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHVzZVRhYkxpc3RIYXNGb2N1c1Byb3BzKHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh1c2VMaXN0TmF2aWdhdGlvblByb3BzKHByb3BzKSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiTGlzdFByb3BzIH07XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgcGh5c2ljYWxPcmllbnRhdGlvbl0pO1xyXG4gICAgY29uc3QgdXNlVGFic0xhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFic0xhYmVsKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYnNMYWJlbFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVGFiTGFiZWxJZFByb3BzKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVGFic0xhYmVsUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7IHVzZVRhYiwgdXNlVGFiUGFuZWwsIHVzZVRhYnNMaXN0LCB1c2VUYWJzTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGZvY3VzVGFiTGlzdDogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRhYnMuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlU3RhdGUsIHVzZVRpbWVvdXQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYVRvb2x0aXAoeyBtb3VzZW92ZXJEZWxheSwgbW91c2VvdXREZWxheSB9KSB7XHJcbiAgICBtb3VzZW92ZXJEZWxheSA/Pz0gNDAwO1xyXG4gICAgbW91c2VvdXREZWxheSA/Pz0gNDA7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3BlbiwgZ2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgaWYgd2UncmUgaG92aW5nIG92ZXIgdGhlIHRyaWdnZXIgd2hlbiBjb3JyZWN0aW5nIGZvciB0aGUgZ2l2ZW4gZGVsYXlzLlxyXG4gICAgY29uc3QgW2hhc0RlbGF5Q29ycmVjdGVkTW91c2VvdmVyLCBzZXRIYXNEZWxheUNvcnJlY3RlZE1vdXNlb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRvb2x0aXBJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10b29sdGlwLVwiIH0pO1xyXG4gICAgY29uc3QgW3RyaWdnZXJGb2N1c2VkSW5uZXIsIHNldFRyaWdnZXJGb2N1c2VkSW5uZXIsIGdldFRyaWdnZXJGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RyaWdnZXJIYXNNb3VzZW92ZXIsIHNldFRyaWdnZXJIYXNNb3VzZW92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Rvb2x0aXBIYXNNb3VzZW92ZXIsIHNldFRvb2x0aXBIYXNNb3VzZW92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Rvb2x0aXBIYXNGb2N1cywgc2V0VG9vbHRpcEhhc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRyaWdnZXJJbmRleCA9ICEhKCt0cmlnZ2VySGFzTW91c2VvdmVyICsgK3Rvb2x0aXBIYXNNb3VzZW92ZXIgKyArdG9vbHRpcEhhc0ZvY3VzKTtcclxuICAgIGNvbnN0IHRvb2x0aXBTaG91bGRCZVNob3duID0gKHRyaWdnZXJIYXNNb3VzZW92ZXIgfHwgdG9vbHRpcEhhc01vdXNlb3ZlciB8fCB0b29sdGlwSGFzRm9jdXMpO1xyXG4gICAgLy8gQWN0aXZhdGUgb24gdGhlIHVzdWFsIGRlbGF5IGZvciBtb3VzZW92ZXJcclxuICAgIHVzZVRpbWVvdXQoe1xyXG4gICAgICAgIHRpbWVvdXQ6IG1vdXNlb3ZlckRlbGF5LFxyXG4gICAgICAgIHRyaWdnZXJJbmRleCxcclxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRIYXNEZWxheUNvcnJlY3RlZE1vdXNlb3Zlcih0b29sdGlwU2hvdWxkQmVTaG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBGb3JjaWJseSBkZWFjdGl2YXRlIGFsbW9zdCBpbW1lZGlhdGVseSBvbiBtb3VzZW91dFxyXG4gICAgdXNlVGltZW91dCh7XHJcbiAgICAgICAgdGltZW91dDogbW91c2VvdXREZWxheSxcclxuICAgICAgICB0cmlnZ2VySW5kZXgsXHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0b29sdGlwU2hvdWxkQmVTaG93bilcclxuICAgICAgICAgICAgICAgIHNldEhhc0RlbGF5Q29ycmVjdGVkTW91c2VvdmVyKHRvb2x0aXBTaG91bGRCZVNob3duKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIElmIHdlIGhhdmUgYSAoZGVsYXktY29ycmVjdGVkKSBtb3VzZW92ZXIgb3Igd2UncmUgZm9jdXNlZCxcclxuICAgIC8vIHNob3cgdGhlIHRvb2x0aXAuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oaGFzRGVsYXlDb3JyZWN0ZWRNb3VzZW92ZXIgfHwgdHJpZ2dlckZvY3VzZWRJbm5lcik7XHJcbiAgICB9LCBbaGFzRGVsYXlDb3JyZWN0ZWRNb3VzZW92ZXIsIHRyaWdnZXJGb2N1c2VkSW5uZXJdKTtcclxuICAgIGNvbnN0IHVzZVRvb2x0aXBUcmlnZ2VyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVG9vbHRpcFRyaWdnZXIoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRW50ZXIoZSkge1xyXG4gICAgICAgICAgICBzZXRUcmlnZ2VySGFzTW91c2VvdmVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJMZWF2ZShlKSB7XHJcbiAgICAgICAgICAgIHNldFRyaWdnZXJIYXNNb3VzZW92ZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZElubmVyQ2hhbmdlZDogc2V0VHJpZ2dlckZvY3VzZWRJbm5lciB9KTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VUb29sdGlwVHJpZ2dlclByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICAvLyBOb3RlOiBUaG91Z2ggaXQncyBpbXBvcnRhbnQgdG8gbWFrZSBzdXJlIHRoYXQgZm9jdXNpbmcgYWN0aXZhdGVzIGEgdG9vbHRpcCxcclxuICAgICAgICAgICAgLy8gaXQncyBwZXJmZWN0bHkgcmVhc29uYWJsZSB0aGF0IGEgY2hpbGQgZWxlbWVudCB3aWxsIGJlIHRoZSBvbmUgdGhhdCdzIGZvY3VzZWQsXHJcbiAgICAgICAgICAgIC8vIG5vdCB0aGlzIG9uZSwgc28gd2UgZG9uJ3Qgc2V0IHRhYkluZGV4PTBcclxuICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPz89IC0xO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikodXNlSGFzRm9jdXNQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyRW50ZXIsIG9uUG9pbnRlckxlYXZlLCBvblRvdWNoRW5kIH0sIHByb3BzKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VUb29sdGlwVHJpZ2dlclByb3BzIH07XHJcbiAgICB9LCBbdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wc10pO1xyXG4gICAgY29uc3QgdXNlVG9vbHRpcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRW50ZXIoZSkge1xyXG4gICAgICAgICAgICBzZXRUb29sdGlwSGFzTW91c2VvdmVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJMZWF2ZShlKSB7XHJcbiAgICAgICAgICAgIHNldFRvb2x0aXBIYXNNb3VzZW92ZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1c2VUb29sdGlwUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoeyBvbkZvY3VzZWRJbm5lckNoYW5nZWQ6IHNldFRvb2x0aXBIYXNGb2N1cyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVRvb2x0aXBJZFByb3BzKHVzZUhhc0ZvY3VzUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlckVudGVyLCBvblBvaW50ZXJMZWF2ZSB9LCBwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFByb3BzIH07XHJcbiAgICB9LCBbdXNlVG9vbHRpcElkUHJvcHNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlVG9vbHRpcCxcclxuICAgICAgICB1c2VUb29sdGlwVHJpZ2dlcixcclxuICAgICAgICBpc09wZW46IG9wZW4sXHJcbiAgICAgICAgZ2V0SXNPcGVuOiBnZXRPcGVuXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10b29sdGlwLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIm9sZEJlZm9yZURpZmYiLCJvcHRpb25zIiwib2xkQmVmb3JlUmVuZGVyIiwib2xkQWZ0ZXJEaWZmIiwiZGlmZmVkIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsInVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsInR5cGUiLCJob29rcyIsImxlbmd0aCIsInB1c2giLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJ1bmRlZmluZWQiLCJuZXh0VmFsdWUiLCJhY3Rpb24iLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwiYXJncyIsInN0YXRlIiwiYXJnc0NoYW5nZWQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJpbml0aWFsVmFsdWUiLCJ1c2VNZW1vIiwiY3VycmVudCIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwicHJvdmlkZXIiLCJzdWIiLCJwcm9wcyIsInZhbHVlIiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsImNvbXBvbmVudCIsInNvcnQiLCJhIiwiYiIsInBvcCIsImZvckVhY2giLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwiZSIsInZub2RlIiwiYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJhZiIsImRvbmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiSEFTX1JBRiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImNvbW1pdFF1ZXVlIiwic29tZSIsImZpbHRlciIsImNiIiwiaGFzRXJyb3JlZCIsInMiLCJob29rIiwiY29tcCIsImNsZWFudXAiLCJvbGRBcmdzIiwibmV3QXJncyIsImFyZyIsImYiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0b1ZhbCIsIm1peCIsImsiLCJ5Iiwic3RyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsInRtcCIsIngiLCJhcmd1bWVudHMiLCJ1c2VTdGF0ZVAiLCJVbnNldCIsInVzZUVmZmVjdE5hdGl2ZSIsInVzZUxheW91dEVmZmVjdE5hdGl2ZSIsImNhbmRpZGF0ZVNlbGVjdG9ycyIsIm1hdGNoZXMiLCJFbGVtZW50IiwiaXNJbnB1dCIsIm5vZGUiLCJpc0hpZGRlbklucHV0IiwiaXNEZXRhaWxzV2l0aFN1bW1hcnkiLCJyIiwiY2hpbGQiLCJpc0hpZGRlbiIsImdldENvbXB1dGVkU3R5bGUiLCJpc0RpcmVjdFN1bW1hcnkiLCJub2RlVW5kZXJEZXRhaWxzIiwiZGlzcGxheUNoZWNrIiwid2lkdGgiLCJoZWlnaHQiLCJpc0Rpc2FibGVkRnJvbUZpZWxkc2V0IiwicGFyZW50Tm9kZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciIsImlzRm9jdXNhYmxlIiwiZ2xvYmFsIiwidGhpcyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiVHlwZUVycm9yIiwid2luZG93Iiwic2xpY2UiLCJtc01hdGNoZXNTZWxlY3RvciIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsImpvaW4iLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiU2V0IiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIl9vbk11dGF0aW9uIiwiYmluZCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImRlc3RydWN0b3IiLCJkaXNjb25uZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiaW5lcnROb2RlIiwiX3VubWFuYWdlTm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYm9keSIsImNvbnRhaW5zIiwicm9vdCIsIm5vZGVUeXBlIiwiTm9kZSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJibHVyIiwiZm9jdXMiLCJFTEVNRU5UX05PREUiLCJlbGVtZW50IiwiX2Fkb3B0SW5lcnRSb290IiwiY2FsbCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJhZGQiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwic2VsZiIsInJlY29yZCIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJhdHRyaWJ1dGVOYW1lIiwibWFuYWdlZE5vZGUiLCJnZXQiLCJzZXQiLCJhcmlhSGlkZGVuIiwiSW5lcnROb2RlIiwiaW5lcnRSb290IiwiX25vZGUiLCJfb3ZlcnJvZGVGb2N1c01ldGhvZCIsIl9pbmVydFJvb3RzIiwiX3NhdmVkVGFiSW5kZXgiLCJfZGVzdHJveWVkIiwiZW5zdXJlVW50YWJiYWJsZSIsIl90aHJvd0lmRGVzdHJveWVkIiwiZGVzdHJveWVkIiwiRXJyb3IiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJzaXplIiwiSW5lcnRNYW5hZ2VyIiwiX2RvY3VtZW50IiwiTWFwIiwiX3dhdGNoRm9ySW5lcnQiLCJhZGRJbmVydFN0eWxlIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJpbmVydCIsImhhcyIsInBhcmVudCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsInNoYWRvd1Jvb3RBbmNlc3RvciIsInNoYWRvd1Jvb3QiLCJsb2NhbE5hbWUiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIl9pIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImhhc093blByb3BlcnR5IiwiYXNzaWduIiwib2JqIiwic2hhbGxvd0RpZmZlcnMiLCJoIiwiUmFuZG9tV29yZHMiLCJjcmVhdGVDb250ZXh0IiwibWVtbyIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7O1NBQU87SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxPQUFBO0lBQUEsT0FBQTtJQUFBLE9BQUE7SUFBQSxJQUFNQSxHQUFBQSxHQUFZLEVBQWxCO0lBQUEsSUFDTUMsR0FBQUEsR0FBWSxFQURsQjtJQUFBLElBRU1DLEdBQUFBLEdBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
