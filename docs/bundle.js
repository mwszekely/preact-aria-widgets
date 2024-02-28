"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ../node_modules/.pnpm/preact@10.19.5/node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var h = Array.isArray;
  function v(n2, l4) {
    for (var u5 in l4)
      n2[u5] = l4[u5];
    return n2;
  }
  function p(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function y(l4, u5, t3) {
    var i5, o4, r4, f5 = {};
    for (r4 in u5)
      "key" == r4 ? i5 = u5[r4] : "ref" == r4 ? o4 = u5[r4] : f5[r4] = u5[r4];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l4 && null != l4.defaultProps)
      for (r4 in l4.defaultProps)
        void 0 === f5[r4] && (f5[r4] = l4.defaultProps[r4]);
    return d(l4, f5, i5, o4, null);
  }
  function d(n2, t3, i5, o4, r4) {
    var f5 = { type: n2, props: t3, key: i5, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r4 ? ++u : r4, __i: -1, __u: 0 };
    return null == r4 && null != l.vnode && l.vnode(f5), f5;
  }
  function g(n2) {
    return n2.children;
  }
  function b(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function m(n2, l4) {
    if (null == l4)
      return n2.__ ? m(n2.__, n2.__i + 1) : null;
    for (var u5; l4 < n2.__k.length; l4++)
      if (null != (u5 = n2.__k[l4]) && null != u5.__e)
        return u5.__e;
    return "function" == typeof n2.type ? m(n2) : null;
  }
  function w(n2, u5, t3) {
    var i5, o4 = n2.__v, r4 = o4.__e, f5 = n2.__P;
    if (f5)
      return (i5 = v({}, o4)).__v = o4.__v + 1, l.vnode && l.vnode(i5), M(f5, i5, o4, n2.__n, void 0 !== f5.ownerSVGElement, 32 & o4.__u ? [r4] : null, u5, null == r4 ? m(o4) : r4, !!(32 & o4.__u), t3), i5.__v = o4.__v, i5.__.__k[i5.__i] = i5, i5.__d = void 0, i5.__e != r4 && k(i5), i5;
  }
  function k(n2) {
    var l4, u5;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
        if (null != (u5 = n2.__k[l4]) && null != u5.__e) {
          n2.__e = n2.__c.base = u5.__e;
          break;
        }
      return k(n2);
    }
  }
  function x(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !C.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(C);
  }
  function C() {
    var n2, u5, t3, o4 = [], r4 = [];
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (t3 = i.length, u5 = w(n2, o4, r4) || u5, 0 === t3 || i.length > t3 ? (j(o4, u5, r4), r4.length = o4.length = 0, u5 = void 0, i.sort(f)) : u5 && l.__c && l.__c(u5, s));
    u5 && j(o4, u5, r4), C.__r = 0;
  }
  function P(n2, l4, u5, t3, i5, o4, r4, f5, e3, a4, h4) {
    var v4, p4, y4, d4, _3, g4 = t3 && t3.__k || s, b3 = l4.length;
    for (u5.__d = e3, S(u5, l4, g4), e3 = u5.__d, v4 = 0; v4 < b3; v4++)
      null != (y4 = u5.__k[v4]) && "boolean" != typeof y4 && "function" != typeof y4 && (p4 = -1 === y4.__i ? c : g4[y4.__i] || c, y4.__i = v4, M(n2, y4, p4, i5, o4, r4, f5, e3, a4, h4), d4 = y4.__e, y4.ref && p4.ref != y4.ref && (p4.ref && N(p4.ref, null, y4), h4.push(y4.ref, y4.__c || d4, y4)), null == _3 && null != d4 && (_3 = d4), 65536 & y4.__u || p4.__k === y4.__k ? e3 = $(y4, e3, n2) : "function" == typeof y4.type && void 0 !== y4.__d ? e3 = y4.__d : d4 && (e3 = d4.nextSibling), y4.__d = void 0, y4.__u &= -196609);
    u5.__d = e3, u5.__e = _3;
  }
  function S(n2, l4, u5) {
    var t3, i5, o4, r4, f5, e3 = l4.length, c4 = u5.length, s4 = c4, a4 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      null != (i5 = n2.__k[t3] = null == (i5 = l4[t3]) || "boolean" == typeof i5 || "function" == typeof i5 ? null : "string" == typeof i5 || "number" == typeof i5 || "bigint" == typeof i5 || i5.constructor == String ? d(null, i5, null, null, i5) : h(i5) ? d(g, { children: i5 }, null, null, null) : void 0 === i5.constructor && i5.__b > 0 ? d(i5.type, i5.props, i5.key, i5.ref ? i5.ref : null, i5.__v) : i5) ? (i5.__ = n2, i5.__b = n2.__b + 1, f5 = I(i5, u5, r4 = t3 + a4, s4), i5.__i = f5, o4 = null, -1 !== f5 && (s4--, (o4 = u5[f5]) && (o4.__u |= 131072)), null == o4 || null === o4.__v ? (-1 == f5 && a4--, "function" != typeof i5.type && (i5.__u |= 65536)) : f5 !== r4 && (f5 === r4 + 1 ? a4++ : f5 > r4 ? s4 > e3 - r4 ? a4 += f5 - r4 : a4-- : a4 = f5 < r4 && f5 == r4 - 1 ? f5 - r4 : 0, f5 !== t3 + a4 && (i5.__u |= 65536))) : (o4 = u5[t3]) && null == o4.key && o4.__e && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = m(o4)), O(o4, o4, false), u5[t3] = null, s4--);
    if (s4)
      for (t3 = 0; t3 < c4; t3++)
        null != (o4 = u5[t3]) && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = m(o4)), O(o4, o4));
  }
  function $(n2, l4, u5) {
    var t3, i5;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i5 = 0; t3 && i5 < t3.length; i5++)
        t3[i5] && (t3[i5].__ = n2, l4 = $(t3[i5], l4, u5));
      return l4;
    }
    n2.__e != l4 && (u5.insertBefore(n2.__e, l4 || null), l4 = n2.__e);
    do {
      l4 = l4 && l4.nextSibling;
    } while (null != l4 && 8 === l4.nodeType);
    return l4;
  }
  function H(n2, l4) {
    return l4 = l4 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
      H(n3, l4);
    }) : l4.push(n2)), l4;
  }
  function I(n2, l4, u5, t3) {
    var i5 = n2.key, o4 = n2.type, r4 = u5 - 1, f5 = u5 + 1, e3 = l4[u5];
    if (null === e3 || e3 && i5 == e3.key && o4 === e3.type)
      return u5;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r4 >= 0 || f5 < l4.length; ) {
        if (r4 >= 0) {
          if ((e3 = l4[r4]) && 0 == (131072 & e3.__u) && i5 == e3.key && o4 === e3.type)
            return r4;
          r4--;
        }
        if (f5 < l4.length) {
          if ((e3 = l4[f5]) && 0 == (131072 & e3.__u) && i5 == e3.key && o4 === e3.type)
            return f5;
          f5++;
        }
      }
    return -1;
  }
  function T(n2, l4, u5) {
    "-" === l4[0] ? n2.setProperty(l4, null == u5 ? "" : u5) : n2[l4] = null == u5 ? "" : "number" != typeof u5 || a.test(l4) ? u5 : u5 + "px";
  }
  function A(n2, l4, u5, t3, i5) {
    var o4;
    n:
      if ("style" === l4)
        if ("string" == typeof u5)
          n2.style.cssText = u5;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l4 in t3)
              u5 && l4 in u5 || T(n2.style, l4, "");
          if (u5)
            for (l4 in u5)
              t3 && u5[l4] === t3[l4] || T(n2.style, l4, u5[l4]);
        }
      else if ("o" === l4[0] && "n" === l4[1])
        o4 = l4 !== (l4 = l4.replace(/(PointerCapture)$|Capture$/i, "$1")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o4] = u5, u5 ? t3 ? u5.u = t3.u : (u5.u = Date.now(), n2.addEventListener(l4, o4 ? L : D, o4)) : n2.removeEventListener(l4, o4 ? L : D, o4);
      else {
        if (i5)
          l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l4 && "height" !== l4 && "href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && "rowSpan" !== l4 && "colSpan" !== l4 && "role" !== l4 && l4 in n2)
          try {
            n2[l4] = null == u5 ? "" : u5;
            break n;
          } catch (n3) {
          }
        "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l4[4] ? n2.removeAttribute(l4) : n2.setAttribute(l4, u5));
      }
  }
  function D(n2) {
    if (this.l) {
      var u5 = this.l[n2.type + false];
      if (n2.t) {
        if (n2.t <= u5.u)
          return;
      } else
        n2.t = Date.now();
      return u5(l.event ? l.event(n2) : n2);
    }
  }
  function L(n2) {
    if (this.l)
      return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function M(n2, u5, t3, i5, o4, r4, f5, e3, c4, s4) {
    var a4, p4, y4, d4, _3, m4, w5, k3, x4, C4, S2, $3, H3, I3, T4, A3 = u5.type;
    if (void 0 !== u5.constructor)
      return null;
    128 & t3.__u && (c4 = !!(32 & t3.__u), r4 = [e3 = u5.__e = t3.__e]), (a4 = l.__b) && a4(u5);
    n:
      if ("function" == typeof A3)
        try {
          if (k3 = u5.props, x4 = (a4 = A3.contextType) && i5[a4.__c], C4 = a4 ? x4 ? x4.props.value : a4.__ : i5, t3.__c ? w5 = (p4 = u5.__c = t3.__c).__ = p4.__E : ("prototype" in A3 && A3.prototype.render ? u5.__c = p4 = new A3(k3, C4) : (u5.__c = p4 = new b(k3, C4), p4.constructor = A3, p4.render = q), x4 && x4.sub(p4), p4.props = k3, p4.state || (p4.state = {}), p4.context = C4, p4.__n = i5, y4 = p4.__d = true, p4.__h = [], p4._sb = []), null == p4.__s && (p4.__s = p4.state), null != A3.getDerivedStateFromProps && (p4.__s == p4.state && (p4.__s = v({}, p4.__s)), v(p4.__s, A3.getDerivedStateFromProps(k3, p4.__s))), d4 = p4.props, _3 = p4.state, p4.__v = u5, y4)
            null == A3.getDerivedStateFromProps && null != p4.componentWillMount && p4.componentWillMount(), null != p4.componentDidMount && p4.__h.push(p4.componentDidMount);
          else {
            if (null == A3.getDerivedStateFromProps && k3 !== d4 && null != p4.componentWillReceiveProps && p4.componentWillReceiveProps(k3, C4), !p4.__e && (null != p4.shouldComponentUpdate && false === p4.shouldComponentUpdate(k3, p4.__s, C4) || u5.__v === t3.__v)) {
              for (u5.__v !== t3.__v && (p4.props = k3, p4.state = p4.__s, p4.__d = false), u5.__e = t3.__e, u5.__k = t3.__k, u5.__k.forEach(function(n3) {
                n3 && (n3.__ = u5);
              }), S2 = 0; S2 < p4._sb.length; S2++)
                p4.__h.push(p4._sb[S2]);
              p4._sb = [], p4.__h.length && f5.push(p4);
              break n;
            }
            null != p4.componentWillUpdate && p4.componentWillUpdate(k3, p4.__s, C4), null != p4.componentDidUpdate && p4.__h.push(function() {
              p4.componentDidUpdate(d4, _3, m4);
            });
          }
          if (p4.context = C4, p4.props = k3, p4.__P = n2, p4.__e = false, $3 = l.__r, H3 = 0, "prototype" in A3 && A3.prototype.render) {
            for (p4.state = p4.__s, p4.__d = false, $3 && $3(u5), a4 = p4.render(p4.props, p4.state, p4.context), I3 = 0; I3 < p4._sb.length; I3++)
              p4.__h.push(p4._sb[I3]);
            p4._sb = [];
          } else
            do {
              p4.__d = false, $3 && $3(u5), a4 = p4.render(p4.props, p4.state, p4.context), p4.state = p4.__s;
            } while (p4.__d && ++H3 < 25);
          p4.state = p4.__s, null != p4.getChildContext && (i5 = v(v({}, i5), p4.getChildContext())), y4 || null == p4.getSnapshotBeforeUpdate || (m4 = p4.getSnapshotBeforeUpdate(d4, _3)), P(n2, h(T4 = null != a4 && a4.type === g && null == a4.key ? a4.props.children : a4) ? T4 : [T4], u5, t3, i5, o4, r4, f5, e3, c4, s4), p4.base = u5.__e, u5.__u &= -161, p4.__h.length && f5.push(p4), w5 && (p4.__E = p4.__ = null);
        } catch (n3) {
          u5.__v = null, c4 || null != r4 ? (u5.__e = e3, u5.__u |= c4 ? 160 : 32, r4[r4.indexOf(e3)] = null) : (u5.__e = t3.__e, u5.__k = t3.__k), l.__e(n3, u5, t3);
        }
      else
        null == r4 && u5.__v === t3.__v ? (u5.__k = t3.__k, u5.__e = t3.__e) : u5.__e = z(t3.__e, u5, t3, i5, o4, r4, f5, c4, s4);
    (a4 = l.diffed) && a4(u5);
  }
  function j(n2, u5, t3) {
    for (var i5 = 0; i5 < t3.length; i5++)
      N(t3[i5], t3[++i5], t3[++i5]);
    l.__c && l.__c(u5, n2), n2.some(function(u6) {
      try {
        n2 = u6.__h, u6.__h = [], n2.some(function(n3) {
          n3.call(u6);
        });
      } catch (n3) {
        l.__e(n3, u6.__v);
      }
    });
  }
  function z(l4, u5, t3, i5, o4, r4, f5, e3, s4) {
    var a4, v4, y4, d4, _3, g4, b3, w5 = t3.props, k3 = u5.props, x4 = u5.type;
    if ("svg" === x4 && (o4 = true), null != r4) {
      for (a4 = 0; a4 < r4.length; a4++)
        if ((_3 = r4[a4]) && "setAttribute" in _3 == !!x4 && (x4 ? _3.localName === x4 : 3 === _3.nodeType)) {
          l4 = _3, r4[a4] = null;
          break;
        }
    }
    if (null == l4) {
      if (null === x4)
        return document.createTextNode(k3);
      l4 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", x4) : document.createElement(x4, k3.is && k3), r4 = null, e3 = false;
    }
    if (null === x4)
      w5 === k3 || e3 && l4.data === k3 || (l4.data = k3);
    else {
      if (r4 = r4 && n.call(l4.childNodes), w5 = t3.props || c, !e3 && null != r4)
        for (w5 = {}, a4 = 0; a4 < l4.attributes.length; a4++)
          w5[(_3 = l4.attributes[a4]).name] = _3.value;
      for (a4 in w5)
        _3 = w5[a4], "children" == a4 || ("dangerouslySetInnerHTML" == a4 ? y4 = _3 : "key" === a4 || a4 in k3 || A(l4, a4, null, _3, o4));
      for (a4 in k3)
        _3 = k3[a4], "children" == a4 ? d4 = _3 : "dangerouslySetInnerHTML" == a4 ? v4 = _3 : "value" == a4 ? g4 = _3 : "checked" == a4 ? b3 = _3 : "key" === a4 || e3 && "function" != typeof _3 || w5[a4] === _3 || A(l4, a4, _3, w5[a4], o4);
      if (v4)
        e3 || y4 && (v4.__html === y4.__html || v4.__html === l4.innerHTML) || (l4.innerHTML = v4.__html), u5.__k = [];
      else if (y4 && (l4.innerHTML = ""), P(l4, h(d4) ? d4 : [d4], u5, t3, i5, o4 && "foreignObject" !== x4, r4, f5, r4 ? r4[0] : t3.__k && m(t3, 0), e3, s4), null != r4)
        for (a4 = r4.length; a4--; )
          null != r4[a4] && p(r4[a4]);
      e3 || (a4 = "value", void 0 !== g4 && (g4 !== l4[a4] || "progress" === x4 && !g4 || "option" === x4 && g4 !== w5[a4]) && A(l4, a4, g4, w5[a4], false), a4 = "checked", void 0 !== b3 && b3 !== l4[a4] && A(l4, a4, b3, w5[a4], false));
    }
    return l4;
  }
  function N(n2, u5, t3) {
    try {
      "function" == typeof n2 ? n2(u5) : n2.current = u5;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function O(n2, u5, t3) {
    var i5, o4;
    if (l.unmount && l.unmount(n2), (i5 = n2.ref) && (i5.current && i5.current !== n2.__e || N(i5, null, u5)), null != (i5 = n2.__c)) {
      if (i5.componentWillUnmount)
        try {
          i5.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u5);
        }
      i5.base = i5.__P = null, n2.__c = void 0;
    }
    if (i5 = n2.__k)
      for (o4 = 0; o4 < i5.length; o4++)
        i5[o4] && O(i5[o4], u5, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l4, u5) {
    return this.constructor(n2, u5);
  }
  function B(u5, t3, i5) {
    var o4, r4, f5, e3;
    l.__ && l.__(u5, t3), r4 = (o4 = "function" == typeof i5) ? null : i5 && i5.__k || t3.__k, f5 = [], e3 = [], M(t3, u5 = (!o4 && i5 || t3).__k = y(g, null, [u5]), r4 || c, c, void 0 !== t3.ownerSVGElement, !o4 && i5 ? [i5] : r4 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f5, !o4 && i5 ? i5 : r4 ? r4.__e : t3.firstChild, o4, e3), u5.__d = void 0, j(f5, u5, e3);
  }
  function F(l4, u5, t3) {
    var i5, o4, r4, f5, e3 = v({}, l4.props);
    for (r4 in l4.type && l4.type.defaultProps && (f5 = l4.type.defaultProps), u5)
      "key" == r4 ? i5 = u5[r4] : "ref" == r4 ? o4 = u5[r4] : e3[r4] = void 0 === u5[r4] && void 0 !== f5 ? f5[r4] : u5[r4];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), d(l4.type, e3, i5 || l4.key, o4 || l4.ref, null);
  }
  function G(n2, l4) {
    var u5 = { __c: l4 = "__cC" + e++, __: n2, Consumer: function(n3, l5) {
      return n3.children(l5);
    }, Provider: function(n3) {
      var u6, t3;
      return this.getChildContext || (u6 = [], (t3 = {})[l4] = this, this.getChildContext = function() {
        return t3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u6.some(function(n5) {
          n5.__e = true, x(n5);
        });
      }, this.sub = function(n4) {
        u6.push(n4);
        var l5 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u6.splice(u6.indexOf(n4), 1), l5 && l5.call(n4);
        };
      }), n3.children;
    } };
    return u5.Provider.__ = u5.Consumer.contextType = u5;
  }
  n = s.slice, l = { __e: function(n2, l4, u5, t3) {
    for (var i5, o4, r4; l4 = l4.__; )
      if ((i5 = l4.__c) && !i5.__)
        try {
          if ((o4 = i5.constructor) && null != o4.getDerivedStateFromError && (i5.setState(o4.getDerivedStateFromError(n2)), r4 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n2, t3 || {}), r4 = i5.__d), r4)
            return i5.__E = i5;
        } catch (l5) {
          n2 = l5;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l4) {
    var u5;
    u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u5), this.props)), n2 && v(u5, n2), null != n2 && this.__v && (l4 && this._sb.push(l4), x(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), x(this));
  }, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l4) {
    return n2.__v.__b - l4.__v.__b;
  }, C.__r = 0, e = 0;

  // ../node_modules/.pnpm/preact@10.19.5/node_modules/preact/devtools/dist/devtools.module.js
  "undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.19.5", l, { Fragment: g, Component: b });

  // ../node_modules/.pnpm/preact@10.19.5/node_modules/preact/debug/dist/debug.module.js
  var o2 = {};
  function a2(e3) {
    return e3.type === g ? "Fragment" : "function" == typeof e3.type ? e3.type.displayName || e3.type.name : "string" == typeof e3.type ? e3.type : "#text";
  }
  var i2 = [];
  var s2 = [];
  function c2() {
    return i2.length > 0 ? i2[i2.length - 1] : null;
  }
  var l2 = false;
  function u2(e3) {
    return "function" == typeof e3.type && e3.type != g;
  }
  function f2(n2) {
    for (var e3 = [n2], t3 = n2; null != t3.__o; )
      e3.push(t3.__o), t3 = t3.__o;
    return e3.reduce(function(n3, e4) {
      n3 += "  in " + a2(e4);
      var t4 = e4.__source;
      return t4 ? n3 += " (at " + t4.fileName + ":" + t4.lineNumber + ")" : l2 || (l2 = true, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n3 + "\n";
    }, "");
  }
  var p2 = "function" == typeof WeakMap;
  function d2(n2) {
    var e3 = [];
    return n2.__k ? (n2.__k.forEach(function(n3) {
      n3 && "function" == typeof n3.type ? e3.push.apply(e3, d2(n3)) : n3 && "string" == typeof n3.type && e3.push(n3.type);
    }), e3) : e3;
  }
  function h2(n2) {
    return n2 ? "function" == typeof n2.type ? null === n2.__ ? null !== n2.__e && null !== n2.__e.parentNode ? n2.__e.parentNode.localName : "" : h2(n2.__) : n2.type : "";
  }
  var v2 = b.prototype.setState;
  function y2(n2) {
    return "table" === n2 || "tfoot" === n2 || "tbody" === n2 || "thead" === n2 || "td" === n2 || "tr" === n2 || "th" === n2;
  }
  b.prototype.setState = function(n2, e3) {
    return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f2(c2())), v2.call(this, n2, e3);
  };
  var m2 = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/;
  var b2 = b.prototype.forceUpdate;
  function w2(n2) {
    var e3 = n2.props, t3 = a2(n2), o4 = "";
    for (var r4 in e3)
      if (e3.hasOwnProperty(r4) && "children" !== r4) {
        var i5 = e3[r4];
        "function" == typeof i5 && (i5 = "function " + (i5.displayName || i5.name) + "() {}"), i5 = Object(i5) !== i5 || i5.toString ? i5 + "" : Object.prototype.toString.call(i5), o4 += " " + r4 + "=" + JSON.stringify(i5);
      }
    var s4 = e3.children;
    return "<" + t3 + o4 + (s4 && s4.length ? ">..</" + t3 + ">" : " />");
  }
  b.prototype.forceUpdate = function(n2) {
    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f2(c2())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f2(this.__v)), b2.call(this, n2);
  }, function() {
    !function() {
      var n3 = l.__b, t4 = l.diffed, o4 = l.__, r5 = l.vnode, a4 = l.__r;
      l.diffed = function(n4) {
        u2(n4) && s2.pop(), i2.pop(), t4 && t4(n4);
      }, l.__b = function(e3) {
        u2(e3) && i2.push(e3), n3 && n3(e3);
      }, l.__ = function(n4, e3) {
        s2 = [], o4 && o4(n4, e3);
      }, l.vnode = function(n4) {
        n4.__o = s2.length > 0 ? s2[s2.length - 1] : null, r5 && r5(n4);
      }, l.__r = function(n4) {
        u2(n4) && s2.push(n4), a4 && a4(n4);
      };
    }();
    var n2 = false, t3 = l.__b, r4 = l.diffed, c4 = l.vnode, l4 = l.__r, v4 = l.__e, b3 = l.__, g4 = l.__h, E3 = p2 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, k3 = [];
    l.__e = function(n3, e3, t4, o4) {
      if (e3 && e3.__c && "function" == typeof n3.then) {
        var r5 = n3;
        n3 = new Error("Missing Suspense. The throwing component was: " + a2(e3));
        for (var i5 = e3; i5; i5 = i5.__)
          if (i5.__c && i5.__c.__c) {
            n3 = r5;
            break;
          }
        if (n3 instanceof Error)
          throw n3;
      }
      try {
        (o4 = o4 || {}).componentStack = f2(e3), v4(n3, e3, t4, o4), "function" != typeof n3.then && setTimeout(function() {
          throw n3;
        });
      } catch (n4) {
        throw n4;
      }
    }, l.__ = function(n3, e3) {
      if (!e3)
        throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
      var t4;
      switch (e3.nodeType) {
        case 1:
        case 11:
        case 9:
          t4 = true;
          break;
        default:
          t4 = false;
      }
      if (!t4) {
        var o4 = a2(n3);
        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + e3 + " instead: render(<" + o4 + " />, " + e3 + ");");
      }
      b3 && b3(n3, e3);
    }, l.__b = function(e3) {
      var r5 = e3.type;
      if (n2 = true, void 0 === r5)
        throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + w2(e3) + "\n\n" + f2(e3));
      if (null != r5 && "object" == typeof r5) {
        if (void 0 !== r5.__k && void 0 !== r5.__e)
          throw new Error("Invalid type passed to createElement(): " + r5 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a2(e3) + " = " + w2(r5) + ";\n  let vnode = <My" + a2(e3) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f2(e3));
        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r5) ? "array" : r5));
      }
      if (void 0 !== e3.ref && "function" != typeof e3.ref && "object" != typeof e3.ref && !("$$typeof" in e3))
        throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e3.ref + "] instead\n" + w2(e3) + "\n\n" + f2(e3));
      if ("string" == typeof e3.type) {
        for (var i5 in e3.props)
          if ("o" === i5[0] && "n" === i5[1] && "function" != typeof e3.props[i5] && null != e3.props[i5])
            throw new Error(`Component's "` + i5 + '" property should be a function, but got [' + typeof e3.props[i5] + "] instead\n" + w2(e3) + "\n\n" + f2(e3));
      }
      if ("function" == typeof e3.type && e3.type.propTypes) {
        if ("Lazy" === e3.type.displayName && E3 && !E3.lazyPropTypes.has(e3.type)) {
          var s4 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
          try {
            var c5 = e3.type();
            E3.lazyPropTypes.set(e3.type, true), console.warn(s4 + "Component wrapped in lazy() is " + a2(c5));
          } catch (n3) {
            console.warn(s4 + "We will log the wrapped component's name once it is loaded.");
          }
        }
        var l5 = e3.props;
        e3.type.__f && delete (l5 = function(n3, e4) {
          for (var t4 in e4)
            n3[t4] = e4[t4];
          return n3;
        }({}, l5)).ref, function(n3, e4, t4, r6, a4) {
          Object.keys(n3).forEach(function(t5) {
            var i6;
            try {
              i6 = n3[t5](e4, t5, r6, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n4) {
              i6 = n4;
            }
            i6 && !(i6.message in o2) && (o2[i6.message] = true, console.error("Failed prop type: " + i6.message + (a4 && "\n" + a4() || "")));
          });
        }(e3.type.propTypes, l5, 0, a2(e3), function() {
          return f2(e3);
        });
      }
      t3 && t3(e3);
    }, l.__r = function(e3) {
      l4 && l4(e3), n2 = true;
    }, l.__h = function(e3, t4, o4) {
      if (!e3 || !n2)
        throw new Error("Hook can only be invoked from render methods.");
      g4 && g4(e3, t4, o4);
    };
    var _3 = function(n3, e3) {
      return { get: function() {
        var t4 = "get" + n3 + e3;
        k3 && k3.indexOf(t4) < 0 && (k3.push(t4), console.warn("getting vnode." + n3 + " is deprecated, " + e3));
      }, set: function() {
        var t4 = "set" + n3 + e3;
        k3 && k3.indexOf(t4) < 0 && (k3.push(t4), console.warn("setting vnode." + n3 + " is not allowed, " + e3));
      } };
    }, I3 = { nodeName: _3("nodeName", "use vnode.type"), attributes: _3("attributes", "use vnode.props"), children: _3("children", "use vnode.props.children") }, T4 = Object.create({}, I3);
    l.vnode = function(n3) {
      var e3 = n3.props;
      if (null !== n3.type && null != e3 && ("__source" in e3 || "__self" in e3)) {
        var t4 = n3.props = {};
        for (var o4 in e3) {
          var r5 = e3[o4];
          "__source" === o4 ? n3.__source = r5 : "__self" === o4 ? n3.__self = r5 : t4[o4] = r5;
        }
      }
      n3.__proto__ = T4, c4 && c4(n3);
    }, l.diffed = function(e3) {
      var t4, o4 = e3.type, i5 = e3.__;
      if (e3.__k && e3.__k.forEach(function(n3) {
        if ("object" == typeof n3 && n3 && void 0 === n3.type) {
          var t5 = Object.keys(n3).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t5 + "}.\n\n" + f2(e3));
        }
      }), "string" == typeof o4 && (y2(o4) || "p" === o4)) {
        var s4 = h2(i5);
        if ("" !== s4)
          "table" === o4 && "td" !== s4 && y2(s4) ? (console.log(s4, i5.__e), console.error("Improper nesting of table. Your <table> should not have a table-node parent." + w2(e3) + "\n\n" + f2(e3))) : "thead" !== o4 && "tfoot" !== o4 && "tbody" !== o4 || "table" === s4 ? "tr" === o4 && "thead" !== s4 && "tfoot" !== s4 && "tbody" !== s4 && "table" !== s4 ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + w2(e3) + "\n\n" + f2(e3)) : "td" === o4 && "tr" !== s4 ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + w2(e3) + "\n\n" + f2(e3)) : "th" === o4 && "tr" !== s4 && console.error("Improper nesting of table. Your <th> should have a <tr>." + w2(e3) + "\n\n" + f2(e3)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + w2(e3) + "\n\n" + f2(e3));
        else if ("p" === o4) {
          var c5 = d2(e3).filter(function(n3) {
            return m2.test(n3);
          });
          c5.length && console.error("Improper nesting of paragraph. Your <p> should not have " + c5.join(", ") + "as child-elements." + w2(e3) + "\n\n" + f2(e3));
        }
      }
      if (n2 = false, r4 && r4(e3), null != e3.__k)
        for (var l5 = [], u5 = 0; u5 < e3.__k.length; u5++) {
          var p4 = e3.__k[u5];
          if (p4 && null != p4.key) {
            var v5 = p4.key;
            if (-1 !== l5.indexOf(v5)) {
              console.error('Following component has two or more children with the same key attribute: "' + v5 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + w2(e3) + "\n\n" + f2(e3));
              break;
            }
            l5.push(v5);
          }
        }
      if (null != e3.__c && null != e3.__c.__H) {
        var b4 = e3.__c.__H.__;
        if (b4)
          for (var g5 = 0; g5 < b4.length; g5 += 1) {
            var E4 = b4[g5];
            if (E4.__H) {
              for (var k4 = 0; k4 < E4.__H.length; k4++)
                if ((t4 = E4.__H[k4]) != t4) {
                  var _4 = a2(e3);
                  throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + g5 + " in component " + _4 + " was called with NaN.");
                }
            }
          }
      }
    };
  }();

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e3) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default = arrayMap;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var trimmedEndIndex_default = trimmedEndIndex;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
  }
  var baseTrim_default = baseTrim;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol_default(value)) {
      return NAN;
    }
    if (isObject_default(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject_default(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim_default(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_default = toNumber;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
  function noop() {
  }
  var noop_default = noop;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  var copyArray_default = copyArray;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
  var objectProto3 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto3;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
  var objectProto4 = Object.prototype;
  var hasOwnProperty2 = objectProto4.hasOwnProperty;
  var propertyIsEnumerable = objectProto4.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e3) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty3 = objectProto5.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty4.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/now.js
  var now = function() {
    return root_default.Date.now();
  };
  var now_default = now;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max;
  var nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_default(wait) || 0;
    if (isObject_default(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now_default();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now_default());
    }
    function debounced() {
      var time = now_default(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_default = debounce;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseValues.js
  function baseValues(object, props) {
    return arrayMap_default(props, function(key) {
      return object[key];
    });
  }
  var baseValues_default = baseValues;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js
  function values(object) {
    return object == null ? [] : baseValues_default(object, keys_default(object));
  }
  var values_default = values;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRandom.js
  var nativeFloor = Math.floor;
  var nativeRandom = Math.random;
  function baseRandom(lower, upper) {
    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
  }
  var baseRandom_default = baseRandom;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shuffleSelf.js
  function shuffleSelf(array, size) {
    var index = -1, length = array.length, lastIndex = length - 1;
    size = size === void 0 ? length : size;
    while (++index < size) {
      var rand = baseRandom_default(index, lastIndex), value = array[rand];
      array[rand] = array[index];
      array[index] = value;
    }
    array.length = size;
    return array;
  }
  var shuffleSelf_default = shuffleSelf;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayShuffle.js
  function arrayShuffle(array) {
    return shuffleSelf_default(copyArray_default(array));
  }
  var arrayShuffle_default = arrayShuffle;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseShuffle.js
  function baseShuffle(collection) {
    return shuffleSelf_default(values_default(collection));
  }
  var baseShuffle_default = baseShuffle;

  // ../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/shuffle.js
  function shuffle(collection) {
    var func = isArray_default(collection) ? arrayShuffle_default : baseShuffle_default;
    return func(collection);
  }
  var shuffle_default = shuffle;

  // ../node_modules/.pnpm/preact@10.19.5/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u3;
  var i3;
  var o3 = 0;
  var f3 = [];
  var c3 = [];
  var e2 = l;
  var a3 = e2.__b;
  var v3 = e2.__r;
  var l3 = e2.diffed;
  var m3 = e2.__c;
  var s3 = e2.unmount;
  var d3 = e2.__;
  function h3(n2, t3) {
    e2.__h && e2.__h(r2, n2, o3 || t3), o3 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u5.__.length && u5.__.push({ __V: c3 }), u5.__[n2];
  }
  function p3(n2) {
    return o3 = 1, y3(D2, n2);
  }
  function y3(n2, u5, i5) {
    var o4 = h3(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i5 ? i5(u5) : D2(void 0, u5), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t3, n3);
      t3 !== r4 && (o4.__N = [r4, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f5 = function(n3, t3, r4) {
        if (!o4.__c.__H)
          return true;
        var u6 = o4.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u6.every(function(n4) {
          return !n4.__N;
        }))
          return !c4 || c4.call(this, n3, t3, r4);
        var i6 = false;
        return u6.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i6 = true);
          }
        }), !(!i6 && o4.__c.props === n3) && (!c4 || c4.call(this, n3, t3, r4));
      };
      r2.u = true;
      var c4 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r4) {
        if (this.__e) {
          var u6 = c4;
          c4 = void 0, f5(n3, t3, r4), c4 = u6;
        }
        e3 && e3.call(this, n3, t3, r4);
      }, r2.shouldComponentUpdate = f5;
    }
    return o4.__N || o4.__;
  }
  function _(n2, u5) {
    var i5 = h3(t2++, 3);
    !e2.__s && C2(i5.__H, u5) && (i5.__ = n2, i5.i = u5, r2.__H.__h.push(i5));
  }
  function A2(n2, u5) {
    var i5 = h3(t2++, 4);
    !e2.__s && C2(i5.__H, u5) && (i5.__ = n2, i5.i = u5, r2.__h.push(i5));
  }
  function F2(n2) {
    return o3 = 5, q2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, t3, r4) {
    o3 = 6, A2(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r4 ? r4 : r4.concat(n2));
  }
  function q2(n2, r4) {
    var u5 = h3(t2++, 7);
    return C2(u5.__H, r4) ? (u5.__V = n2(), u5.i = r4, u5.__h = n2, u5.__V) : u5.__;
  }
  function x2(n2, t3) {
    return o3 = 8, q2(function() {
      return n2;
    }, t3);
  }
  function P2(n2) {
    var u5 = r2.context[n2.__c], i5 = h3(t2++, 9);
    return i5.c = n2, u5 ? (null == i5.__ && (i5.__ = true, u5.sub(r2)), u5.props.value) : n2.__;
  }
  function g2() {
    var n2 = h3(t2++, 11);
    if (!n2.__) {
      for (var u5 = r2.__v; null !== u5 && !u5.__m && null !== u5.__; )
        u5 = u5.__;
      var i5 = u5.__m || (u5.__m = [0, 0]);
      n2.__ = "P" + i5[0] + "-" + i5[1]++;
    }
    return n2.__;
  }
  function j2() {
    for (var n2; n2 = f3.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], e2.__e(t3, n2.__v);
        }
  }
  e2.__b = function(n2) {
    r2 = null, a3 && a3(n2);
  }, e2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d3 && d3(n2, t3);
  }, e2.__r = function(n2) {
    v3 && v3(n2), t2 = 0;
    var i5 = (r2 = n2.__c).__H;
    i5 && (u3 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c3, n3.__N = n3.i = void 0;
    })) : (i5.__h.forEach(z2), i5.__h.forEach(B2), i5.__h = [], t2 = 0)), u3 = r2;
  }, e2.diffed = function(n2) {
    l3 && l3(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f3.push(t3) && i3 === e2.requestAnimationFrame || ((i3 = e2.requestAnimationFrame) || w3)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c3 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c3;
    })), u3 = r2 = null;
  }, e2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r4) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], e2.__e(r4, n3.__v);
      }
    }), m3 && m3(n2, t3);
  }, e2.unmount = function(n2) {
    s3 && s3(n2);
    var t3, r4 = n2.__c;
    r4 && r4.__H && (r4.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r4.__H = void 0, t3 && e2.__e(t3, r4.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w3(n2) {
    var t3, r4 = function() {
      clearTimeout(u5), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u5 = setTimeout(r4, 100);
    k2 && (t3 = requestAnimationFrame(r4));
  }
  function z2(n2) {
    var t3 = r2, u5 = n2.__c;
    "function" == typeof u5 && (n2.__c = void 0, u5()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r4) {
      return t4 !== n2[r4];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // ../node_modules/.pnpm/preact@10.19.5/node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C3(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r4 in t3)
      if ("__source" !== r4 && n2[r4] !== t3[r4])
        return true;
    return false;
  }
  function E2(n2, t3) {
    this.props = n2, this.context = t3;
  }
  function w4(n2, e3) {
    function r4(n3) {
      var t3 = this.props.ref, r5 = t3 == n3.ref;
      return !r5 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r5 : C3(this.props, n3);
    }
    function u5(e4) {
      return this.shouldComponentUpdate = r4, y(n2, e4);
    }
    return u5.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u5.prototype.isReactComponent = true, u5.__f = true, u5;
  }
  (E2.prototype = new b()).isPureReactComponent = true, E2.prototype.shouldComponentUpdate = function(n2, t3) {
    return C3(this.props, n2) || C3(this.state, t3);
  };
  var x3 = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x3 && x3(n2);
  };
  var R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function N2(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = R, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  var O2 = l.__e;
  l.__e = function(n2, t3, e3, r4) {
    if (n2.then) {
      for (var u5, o4 = t3; o4 = o4.__; )
        if ((u5 = o4.__c) && u5.__c)
          return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u5.__c(n2, t3);
    }
    O2(n2, t3, e3, r4);
  };
  var T3 = l.unmount;
  function F3(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return F3(n3, t3, e3);
    })), n2;
  }
  function I2(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return I2(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function M2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), T3 && T3(n2);
  }, (L2.prototype = new b()).__c = function(n2, t3) {
    var e3 = t3.__c, r4 = this;
    null == r4.t && (r4.t = []), r4.t.push(e3);
    var u5 = U(r4.__v), o4 = false, i5 = function() {
      o4 || (o4 = true, e3.__R = null, u5 ? u5(l4) : l4());
    };
    e3.__R = i5;
    var l4 = function() {
      if (!--r4.__u) {
        if (r4.state.__a) {
          var n3 = r4.state.__a;
          r4.__v.__k[0] = I2(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r4.setState({ __a: r4.__b = null }); t4 = r4.t.pop(); )
          t4.forceUpdate();
      }
    };
    r4.__u++ || 32 & t3.__u || r4.setState({ __a: r4.__b = r4.__v.__k[0] }), n2.then(i5, i5);
  }, L2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, L2.prototype.render = function(n2, e3) {
    if (this.__b) {
      if (this.__v.__k) {
        var r4 = document.createElement("div"), o4 = this.__v.__k[0].__c;
        this.__v.__k[0] = F3(this.__b, r4, o4.__O = o4.__P);
      }
      this.__b = null;
    }
    var i5 = e3.__a && y(g, null, n2.fallback);
    return i5 && (i5.__u &= -33), [y(g, null, e3.__a ? null : n2.children), i5];
  };
  var V2 = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  function W(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function P3(n2) {
    var e3 = this, r4 = n2.i;
    e3.componentWillUnmount = function() {
      B(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r4 && e3.componentWillUnmount(), e3.l || (e3.i = r4, e3.l = { nodeType: 1, parentNode: r4, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), B(y(W, { context: e3.context }, n2.__v), e3.l);
  }
  function j3(n2, e3) {
    var r4 = y(P3, { __v: n2, i: e3 });
    return r4.containerInfo = e3, r4;
  }
  (M2.prototype = new b()).__a = function(n2) {
    var t3 = this, e3 = U(t3.__v), r4 = t3.o.get(n2);
    return r4[0]++, function(u5) {
      var o4 = function() {
        t3.props.revealOrder ? (r4.push(u5), V2(t3, n2, r4)) : u5();
      };
      e3 ? e3(o4) : o4();
    };
  }, M2.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t3 = H(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
    for (var e3 = t3.length; e3--; )
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      V2(n2, e3, t3);
    });
  };
  var z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var H2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Z = /[A-Z0-9]/g;
  var Y = "undefined" != typeof document;
  var $2 = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
    Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
      return this["UNSAFE_" + t3];
    }, set: function(n2) {
      Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
    } });
  });
  var J = l.event;
  function K() {
  }
  function Q() {
    return this.cancelBubble;
  }
  function X() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return J && (n2 = J(n2)), n2.persist = K, n2.isPropagationStopped = Q, n2.isDefaultPrevented = X, n2.nativeEvent = n2;
  };
  var nn;
  var tn = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var en = l.vnode;
  l.vnode = function(n2) {
    "string" == typeof n2.type && function(n3) {
      var t3 = n3.props, e3 = n3.type, u5 = {};
      for (var o4 in t3) {
        var i5 = t3[o4];
        if (!("value" === o4 && "defaultValue" in t3 && null == i5 || Y && "children" === o4 && "noscript" === e3 || "class" === o4 || "className" === o4)) {
          var l4 = o4.toLowerCase();
          "defaultValue" === o4 && "value" in t3 && null == t3.value ? o4 = "value" : "download" === o4 && true === i5 ? i5 = "" : "translate" === l4 && "no" === i5 ? i5 = false : "ondoubleclick" === l4 ? o4 = "ondblclick" : "onchange" !== l4 || "input" !== e3 && "textarea" !== e3 || $2(t3.type) ? "onfocus" === l4 ? o4 = "onfocusin" : "onblur" === l4 ? o4 = "onfocusout" : H2.test(o4) ? o4 = l4 : -1 === e3.indexOf("-") && B3.test(o4) ? o4 = o4.replace(Z, "-$&").toLowerCase() : null === i5 && (i5 = void 0) : l4 = o4 = "oninput", "oninput" === l4 && u5[o4 = l4] && (o4 = "oninputCapture"), u5[o4] = i5;
        }
      }
      "select" == e3 && u5.multiple && Array.isArray(u5.value) && (u5.value = H(t3.children).forEach(function(n4) {
        n4.props.selected = -1 != u5.value.indexOf(n4.props.value);
      })), "select" == e3 && null != u5.defaultValue && (u5.value = H(t3.children).forEach(function(n4) {
        n4.props.selected = u5.multiple ? -1 != u5.defaultValue.indexOf(n4.props.value) : u5.defaultValue == n4.props.value;
      })), t3.class && !t3.className ? (u5.class = t3.class, Object.defineProperty(u5, "className", tn)) : (t3.className && !t3.class || t3.class && t3.className) && (u5.class = u5.className = t3.className), n3.props = u5;
    }(n2), n2.$$typeof = z3, en && en(n2);
  };
  var rn = l.__r;
  l.__r = function(n2) {
    rn && rn(n2), nn = n2.__c;
  };
  var un = l.diffed;
  l.diffed = function(n2) {
    un && un(n2);
    var t3 = n2.props, e3 = n2.__e;
    null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), nn = null;
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/lib-shared.js
  var EventMapping = {
    abort: "onAbort",
    animationend: "onAnimationEnd",
    animationstart: "onAnimationStart",
    animationiteration: "onAnimationIteration",
    beforeinput: "onBeforeInput",
    blur: "onBlur",
    canplay: "onCanPlay",
    canplaythrough: "onCanPlayThrough",
    change: "onChange",
    click: "onClick",
    compositionend: "onCompositionEnd",
    compositionstart: "onCompositionStart",
    compositionupdate: "onCompositionUpdate",
    contextmenu: "onContextMenu",
    cut: "onCut",
    drag: "onDrag",
    dragend: "onDragEnd",
    dragenter: "onDragEnter",
    dragleave: "onDragLeave",
    dragover: "onDragOver",
    dragstart: "onDragStart",
    drop: "onDrop",
    durationchange: "onDurationChange",
    emptied: "onEmptied",
    ended: "onEnded",
    error: "onError",
    focus: "onFocus",
    gotpointercapture: "onGotPointerCapture",
    input: "onInput",
    invalid: "onInvalid",
    keydown: "onKeyDown",
    keypress: "onKeyPress",
    keyup: "onKeyUp",
    load: "onLoad",
    loadeddata: "onLoadedData",
    loadedmetadata: "onLoadedMetadata",
    loadstart: "onLoadStart",
    lostpointercapture: "onLostPointerCapture",
    mousedown: "onMouseDown",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseover: "onMouseOver",
    mouseup: "onMouseUp",
    paste: "onPaste",
    pause: "onPause",
    play: "onPlay",
    playing: "onPlaying",
    pointercancel: "onPointerCancel",
    pointerdown: "onPointerDown",
    pointerenter: "onPointerEnter",
    pointerleave: "onPointerLeave",
    pointermove: "onPointerMove",
    pointerout: "onPointerOut",
    pointerover: "onPointerOver",
    pointerup: "onPointerUp",
    progress: "onProgress",
    reset: "onReset",
    scroll: "onScroll",
    seeked: "onSeeked",
    seeking: "onSeeking",
    select: "onSelect",
    stalled: "onStalled",
    submit: "onSubmit",
    suspend: "onSuspend",
    timeupdate: "onTimeUpdate",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    transitionend: "onTransitionEnd",
    volumechange: "onVolumeChange",
    waiting: "onWaiting",
    wheel: "onWheel",
    fullscreenchange: null,
    animationcancel: null,
    auxclick: null,
    cancel: null,
    close: null,
    copy: null,
    cuechange: null,
    fullscreenerror: null,
    ratechange: null,
    resize: null,
    scrollend: null,
    securitypolicyviolation: null,
    selectionchange: null,
    selectstart: null,
    slotchange: null,
    transitioncancel: null,
    transitionrun: null,
    transitionstart: null,
    webkitanimationend: null,
    webkitanimationiteration: null,
    webkitanimationstart: null,
    webkittransitionend: null
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/use-before-layout-effect.js
  var toRun = /* @__PURE__ */ new Map();
  var commitName = "diffed";
  var newCommit = (vnode, ...args) => {
    for (const [_id, effectInfo] of toRun) {
      const oldInputs = effectInfo.prevInputs;
      if (argsChanged(oldInputs, effectInfo.inputs)) {
        effectInfo.cleanup?.();
        effectInfo.cleanup = effectInfo.effect();
        effectInfo.prevInputs = effectInfo.inputs;
      }
    }
    toRun.clear();
    originalCommit?.(vnode, ...args);
  };
  var originalCommit = l[commitName];
  l[commitName] = newCommit;
  var incrementingId = 0;
  function nextId() {
    let next = ++incrementingId;
    if (incrementingId >= Number.MAX_SAFE_INTEGER)
      incrementingId = -Number.MAX_SAFE_INTEGER;
    return next;
  }
  var useBeforeLayoutEffect = function useBeforeLayoutEffect2(effect, inputs) {
    const ref = F2(null);
    ref.current ??= nextId();
    const id = ref.current;
    if (effect)
      toRun.set(id, { effect, inputs, cleanup: null });
    else
      toRun.delete(id);
  };
  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== newArgs?.length || newArgs?.some((arg, index) => arg !== oldArgs[index]));
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/lib-preact.js
  var useCallback = x2;
  function debounceRendering(f5) {
    (l.debounceRendering ?? queueMicrotask)(f5);
  }
  var onfocusin = "onfocusin";
  var onfocusout = "onfocusout";
  var EventMapping2 = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
    ...EventMapping
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-passive-state.js
  function useEnsureStability(parentHookName, ...values2) {
    if (true)
      return;
    const helperToEnsureStability = F2([]);
    const shownError = F2([]);
    useHelper(values2.length, -1);
    values2.forEach(useHelper);
    return;
    function useHelper(value, i5) {
      const index = i5 + 1;
      if (helperToEnsureStability.current[index] === void 0)
        helperToEnsureStability.current[index] = value;
      if (helperToEnsureStability.current[index] != value) {
        if (!shownError.current[index]) {
          debugger;
          console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i5}-indexed argument (${i5 >= 0 ? JSON.stringify(values2[i5]) : "the number of supposedly stable elements"}).`);
          shownError.current[index] = true;
        }
      }
    }
  }
  function usePassiveState(onChange, getInitialValue, customDebounceRendering) {
    const valueRef = F2(Unset);
    const reasonRef = F2(Unset);
    const warningRef = F2(false);
    const dependencyToCompareAgainst = F2(Unset);
    const cleanupCallbackRef = F2(void 0);
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    const onShouldCleanUp = useCallback(() => {
      const cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback)
        cleanupCallback();
    }, []);
    const tryEnsureValue = useCallback(() => {
      if (valueRef.current === Unset && getInitialValue != void 0) {
        try {
          const initialValue = getInitialValue();
          valueRef.current = initialValue;
          cleanupCallbackRef.current = onChange?.(initialValue, void 0, void 0) ?? void 0;
        } catch (ex) {
        }
      }
    }, [
      /* getInitialValue and onChange intentionally omitted */
    ]);
    const getValue = useCallback(() => {
      if (warningRef.current)
        console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
      if (valueRef.current === Unset)
        tryEnsureValue();
      return valueRef.current === Unset ? void 0 : valueRef.current;
    }, []);
    A2(() => {
      tryEnsureValue();
    }, []);
    const setValue = useCallback((arg, reason) => {
      const nextValue = arg instanceof Function ? arg(valueRef.current === Unset ? void 0 : valueRef.current) : arg;
      if (
        /*dependencyToCompareAgainst.current === Unset &&*/
        nextValue !== valueRef.current
      ) {
        dependencyToCompareAgainst.current = valueRef.current;
        valueRef.current = nextValue;
        reasonRef.current = reason;
        (customDebounceRendering ?? debounceRendering)(() => {
          const nextReason = reasonRef.current;
          const nextDep = valueRef.current;
          const prevDep = dependencyToCompareAgainst.current;
          if (dependencyToCompareAgainst.current != valueRef.current) {
            valueRef.current = dependencyToCompareAgainst.current = Unset;
            warningRef.current = true;
            try {
              onShouldCleanUp();
              valueRef.current = nextDep;
              cleanupCallbackRef.current = onChange?.(nextDep, prevDep === Unset ? void 0 : prevDep, nextReason) ?? void 0;
            } finally {
              warningRef.current = false;
            }
          }
          dependencyToCompareAgainst.current = Unset;
        });
      }
    }, []);
    return [getValue, setValue];
  }
  var Unset = Symbol();
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function returnNull() {
    return null;
  }
  function returnZero() {
    return 0;
  }
  function runImmediately(f5) {
    f5();
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-stable-getter.js
  var Unset2 = Symbol("unset");
  var useStableGetter = function useStableGetter2(value) {
    const ref = F2(Unset2);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return useCallback(() => {
      if (ref.current === Unset2) {
        throw new Error("Value retrieved from useStableGetter() cannot be called during render.");
      }
      return ref.current;
    }, []);
  };
  function useMemoObject(t3) {
    return q2(() => {
      return t3;
    }, Object.values(t3));
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-stable-callback.js
  var map = /* @__PURE__ */ new WeakMap();
  function isStableGetter(obj) {
    return false;
    return map.get(obj) ?? false;
  }
  function setIsStableGetter(obj) {
    return obj;
    map.set(obj, true);
    return obj;
  }
  var useStableCallback = function useStableCallback2(fn, noDeps) {
    useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter(fn));
    if (isStableGetter(fn))
      return fn;
    if (noDeps == null) {
      const currentCallbackGetter = useStableGetter(fn);
      return setIsStableGetter(useCallback((...args) => {
        return currentCallbackGetter()(...args);
      }, []));
    } else {
      console.assert(noDeps.length === 0);
      return setIsStableGetter(useCallback(fn, []));
    }
  };
  var useStableMergedCallback = function useStableMergedCallback2(...fns) {
    return useStableCallback((...args) => {
      for (let i5 = 0; i5 < fns.length; ++i5) {
        fns[i5]?.(...args);
      }
    });
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/mode.js
  globalThis["process"] ??= {};
  globalThis["process"]["env"] ??= {};
  globalThis["process"]["env"]["NODE_ENV"] = "production";

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/use-call-count.js
  window.requestIdleCallback ??= (callback) => {
    return setTimeout(() => {
      callback({ didTimeout: false, timeRemaining: () => {
        return 0;
      } });
    }, 5);
  };
  function monitored(hook) {
    const h4 = hook;
    if (false) {
      return function(...args) {
        const r4 = F2(++i);
        monitorCallCount(h4);
        const start = performance.mark(`${h4.name}-start-${r4.current}`);
        const ret = h4(...args);
        const end = performance.mark(`${h4.name}-end-${r4.current}`);
        performance.measure(h4.name, start.name, end.name);
        return ret;
      };
    } else {
      return hook;
    }
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-event-handler.js
  var useGlobalHandler = monitored(function useGlobalHandler2(target, type, handler, options, mode) {
    mode ||= "grouped";
    useEnsureStability("useGlobalHandler", mode);
    if (mode === "grouped") {
      useGlobalHandlerGrouped(target, type, handler, options);
    } else {
      useGlobalHandlerSingle(target, type, handler, options);
    }
  });
  var mapThing = /* @__PURE__ */ new Map();
  function doMapThing(op, target, type, handler, options) {
    if (handler) {
      const optionsKey = JSON.stringify(options);
      const byType = mapThing.get(target) || /* @__PURE__ */ new Map();
      const byOptions = byType.get(type) || /* @__PURE__ */ new Map();
      const info = byOptions.get(optionsKey) || { listener: null, listeners: /* @__PURE__ */ new Set() };
      op(info, handler);
      byOptions.set(optionsKey, info);
      byType.set(type, byOptions);
      mapThing.set(target, byType);
    }
  }
  function addToMapThing(target, type, handler, options) {
    doMapThing((info, h4) => {
      info.listeners.add(h4);
      if (info.listener == null)
        target.addEventListener(type, info.listener = (e3) => info.listeners.forEach((fn) => fn(e3)), options);
    }, target, type, handler, options);
  }
  function removeFromMapThing(target, type, handler, options) {
    doMapThing((info, h4) => {
      info.listeners.delete(h4);
      if (info.listener == null)
        target.removeEventListener(type, info.listener = (e3) => info.listeners.forEach((fn) => fn(e3)), options);
    }, target, type, handler, options);
  }
  function useGlobalHandlerGrouped(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => {
    }));
    if (handler == null)
      stableHandler = null;
    _(() => {
      if (stableHandler) {
        addToMapThing(target, type, stableHandler, options);
        return () => removeFromMapThing(target, type, stableHandler, options);
      }
    }, [target, type, stableHandler]);
  }
  function useGlobalHandlerSingle(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => {
    }));
    if (handler == null)
      stableHandler = null;
    _(() => {
      if (stableHandler) {
        target.addEventListener(type, stableHandler, options);
        return () => target.removeEventListener(type, stableHandler, options);
      }
    }, [target, type, stableHandler]);
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/assert.js
  function assertEmptyObject(_a) {
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/dismissal/use-backdrop-dismiss.js
  var useBackdropDismiss = monitored(function useBackdropDismiss2({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const getOpen = useStableGetter(open);
    const onClose = useStableGetter(onCloseUnstable);
    const onBackdropClick = useCallback(function onBackdropClick2(e3) {
      if (!getOpen())
        return;
      let element = getElement();
      let foundInsideClick = false;
      if (e3.target && element && element.contains(e3.target)) {
        foundInsideClick = true;
      }
      if (!foundInsideClick) {
        onClose()?.(e3);
      }
    }, []);
    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/event.js
  var EventDetail = Symbol("event-detail");
  function getEventDetail(e3) {
    return e3[EventDetail];
  }
  function enhanceEvent(e3, detail) {
    const event = e3 ?? {};
    event[EventDetail] ??= {};
    Object.assign(event[EventDetail], detail);
    return event;
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/dismissal/use-escape-dismiss.js
  var MagicWindowKey = "__preact-prop-helpers-escape-key-dismiss__";
  function getElementDepth(element) {
    let depth = 0;
    let parent = element.parentElement;
    while (parent) {
      depth += 1;
      parent = parent.parentElement;
    }
    return depth;
  }
  var useEscapeDismiss = monitored(function useEscapeDismiss2({ escapeDismissParameters: { onDismissEscape: onClose, dismissEscapeActive: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const stableOnClose = useStableGetter(onClose);
    const getDocument2 = useStableCallback(unstableGetDocument);
    const getDepth = useStableGetter(parentDepth + 1);
    _(() => {
      const document2 = getDocument2();
      const window2 = document2.defaultView;
      window2[MagicWindowKey] ??= { microtaskQueued: false, elementQueue: /* @__PURE__ */ new Map() };
      const info = window2[MagicWindowKey];
      if (open) {
        window2.addEventListener("keydown", handler, { capture: true });
        return () => {
          const element = getElement();
          if (element && info.elementQueue)
            info.elementQueue.delete(element);
          window2.removeEventListener("keydown", handler, { capture: true });
        };
      }
      function handler(e3) {
        if (e3.key == "Escape") {
          e3.preventDefault();
          e3.stopPropagation();
          const onClose2 = () => {
            stableOnClose()?.(enhanceEvent(e3, { reason: "escape" }));
          };
          const element = getElement();
          if (element) {
            const treeDepth = getElementDepth(element);
            const depth = getDepth();
            info.elementQueue.set(element, { depth, onClose: onClose2, treeDepth });
          }
          if (!info.microtaskQueued) {
            info.microtaskQueued = true;
            setTimeout(() => {
              const { elementQueue } = info;
              info.microtaskQueued = false;
              info.elementQueue = /* @__PURE__ */ new Map();
              let deepestDepth = -Infinity;
              let deepestTreeDepth = -Infinity;
              let _deepestElement = null;
              let deepestOnClose = null;
              for (const [element2, { depth, onClose: onClose3, treeDepth }] of elementQueue) {
                let tieBroken = false;
                if (depth == deepestDepth) {
                  if (treeDepth > deepestTreeDepth) {
                    tieBroken = true;
                  }
                }
                if (depth > deepestDepth || depth == deepestDepth && tieBroken) {
                  deepestDepth = depth;
                  _deepestElement = element2;
                  deepestTreeDepth = treeDepth;
                  deepestOnClose = onClose3;
                }
              }
              deepestOnClose?.();
            }, 0);
          }
        }
      }
    }, [open]);
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/dismissal/use-lost-focus-dismiss.js
  var useLostFocusDismiss = monitored(function useLostFocusDismiss2({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }) {
    const { getElement: getSourceElement, ...void2 } = refElementSourceReturn ?? {};
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const stableOnClose = useStableGetter(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = useCallback((newElement, _prevElement, e3) => {
      const open2 = getOpen();
      const sourceElement = getSourceElement?.();
      const popupElement = getPopupElement();
      if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
        if (open2) {
          console.assert(e3 != null);
          stableOnClose()?.(e3);
        }
      }
    }, [getSourceElement]);
    return { activeElementParameters: { onLastActiveElementChange } };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-merged-children.js
  var useMergedChildren = function useMergedChildren2(lhs, rhs) {
    if (lhs == null && rhs == null) {
      return void 0;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return y(g, {}, lhs, rhs);
    }
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-merged-classes.js
  var useMergedClasses = function useMergedClasses2(...classes) {
    let classesSet = /* @__PURE__ */ new Set();
    for (let c4 of classes) {
      if (typeof c4 == "string" && c4.trim())
        classesSet.add(c4);
    }
    if (classesSet.size) {
      return Array.from(classesSet).join(" ");
    } else {
      return void 0;
    }
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-merged-refs.js
  function processRef(instance, ref) {
    if (typeof ref === "function") {
      ref(instance);
    } else if (ref != null) {
      ref.current = instance;
    } else {
      debugger;
      console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
  }
  var useMergedRefs = function useMergedRefs2(rhs, lhs) {
    const combined = useStableCallback(function combined2(current) {
      processRef(current, lhs);
      processRef(current, rhs);
    });
    if (lhs == null && rhs == null) {
      return void 0;
    } else if (lhs == null) {
      if (false)
        console.assert(typeof rhs == "function" || "current" in rhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
      return rhs;
    } else if (rhs == null) {
      if (false)
        console.assert(typeof lhs == "function" || "current" in lhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
      return lhs;
    } else {
      return combined;
    }
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-merged-styles.js
  function styleStringToObject(style) {
    return Object.fromEntries(style.split(";").map((statement) => statement.split(":")));
  }
  var useMergedStyles = function useMergedStyles2(lhs, rhs) {
    if (!lhs && !rhs)
      return void 0;
    if (typeof lhs != typeof rhs) {
      if (lhs && !rhs)
        return lhs;
      if (!lhs && rhs)
        return rhs;
      if (lhs && rhs) {
        if (typeof lhs == "string")
          return useMergedStyles2(styleStringToObject(lhs), rhs);
        if (typeof rhs == "string")
          return useMergedStyles2(lhs, styleStringToObject(rhs));
      }
      return void 0;
    }
    if (typeof lhs == "string") {
      return `${lhs};${rhs ?? ""}`;
    }
    return {
      ...lhs ?? {},
      ...rhs ?? {}
    };
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-merged-props.js
  var log = console.warn;
  var useMergedProps = function useMergedProps2(...allProps) {
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
      useMergedPropsHelper(ret, nextProps);
    }
    return ret;
  };
  var knowns = /* @__PURE__ */ new Set(["children", "ref", "className", "class", "style"]);
  var mergeUnknown = function mergeUnknown2(key, lhsValue, rhsValue) {
    if (typeof lhsValue === "function" || typeof rhsValue === "function") {
      const merged = mergeFunctions(lhsValue, rhsValue);
      return merged;
    } else {
      if (lhsValue == null && rhsValue == null) {
        if (rhsValue === null && lhsValue === void 0)
          return rhsValue;
        else
          return lhsValue;
      }
      if (lhsValue == null)
        return rhsValue;
      else if (rhsValue == null)
        return lhsValue;
      else if (rhsValue == lhsValue) {
        return rhsValue;
      } else {
        log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
        return rhsValue;
      }
    }
  };
  var useMergedPropsHelper = function useMergedPropsHelper2(target, mods) {
    target.ref = useMergedRefs(target.ref, mods.ref);
    target.style = useMergedStyles(target.style, mods.style);
    target.className = useMergedClasses(target["class"], target.className, mods["class"], mods.className);
    target.children = useMergedChildren(target.children, mods.children);
    if (target.ref === void 0)
      delete target.ref;
    if (target.style === void 0)
      delete target.style;
    if (target.className === void 0)
      delete target.className;
    if (target["class"] === void 0)
      delete target["class"];
    if (target.children === void 0)
      delete target.children;
    for (const rhsKeyU in mods) {
      const rhsKey = rhsKeyU;
      if (knowns.has(rhsKey))
        continue;
      target[rhsKey] = mergeUnknown(rhsKey, target[rhsKey], mods[rhsKey]);
    }
  };
  var mergeFunctions = function mergeFunctions2(lhs, rhs) {
    if (!lhs)
      return rhs;
    if (!rhs)
      return lhs;
    return (...args) => {
      const lv = lhs(...args);
      const rv = rhs(...args);
      if (lv instanceof Promise || rv instanceof Promise)
        return Promise.all([lv, rv]);
    };
  };

  // ../node_modules/.pnpm/tabbable@6.2.0/node_modules/tabbable/dist/index.esm.js
  var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
  var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
  var NoElement = typeof Element === "undefined";
  var matches = NoElement ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    var _element$getRootNode;
    return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
  } : function(element) {
    return element === null || element === void 0 ? void 0 : element.ownerDocument;
  };
  var isInert = function isInert2(node, lookUp) {
    var _node$getAttribute;
    if (lookUp === void 0) {
      lookUp = true;
    }
    var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
    var inert = inertAtt === "" || inertAtt === "true";
    var result = inert || lookUp && node && isInert2(node.parentNode);
    return result;
  };
  var isContentEditable = function isContentEditable2(node) {
    var _node$getAttribute2;
    var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
    return attValue === "" || attValue === "true";
  };
  var hasTabIndex = function hasTabIndex2(node) {
    return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
  };
  var getTabIndex = function getTabIndex2(node) {
    if (!node) {
      throw new Error("No node provided");
    }
    if (node.tabIndex < 0) {
      if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
        return 0;
      }
    }
    return node.tabIndex;
  };
  var isInput = function isInput2(node) {
    return node.tagName === "INPUT";
  };
  var isHiddenInput = function isHiddenInput2(node) {
    return isInput(node) && node.type === "hidden";
  };
  var isDetailsWithSummary = function isDetailsWithSummary2(node) {
    var r4 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
      return child.tagName === "SUMMARY";
    });
    return r4;
  };
  var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for (var i5 = 0; i5 < nodes.length; i5++) {
      if (nodes[i5].checked && nodes[i5].form === form) {
        return nodes[i5];
      }
    }
  };
  var isTabbableRadio = function isTabbableRadio2(node) {
    if (!node.name) {
      return true;
    }
    var radioScope = node.form || getRootNode(node);
    var queryRadios = function queryRadios2(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
      radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
      try {
        radioSet = queryRadios(node.name);
      } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
      }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  };
  var isRadio = function isRadio2(node) {
    return isInput(node) && node.type === "radio";
  };
  var isNonTabbableRadio = function isNonTabbableRadio2(node) {
    return isRadio(node) && !isTabbableRadio(node);
  };
  var isNodeAttached = function isNodeAttached2(node) {
    var _nodeRoot;
    var nodeRoot = node && getRootNode(node);
    var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
    var attached = false;
    if (nodeRoot && nodeRoot !== node) {
      var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
      attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
      while (!attached && nodeRootHost) {
        var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
        nodeRoot = getRootNode(nodeRootHost);
        nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
        attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
      }
    }
    return attached;
  };
  var isZeroArea = function isZeroArea2(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
  };
  var isHidden = function isHidden2(node, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (getComputedStyle(node).visibility === "hidden") {
      return true;
    }
    var isDirectSummary = matches.call(node, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
      return true;
    }
    if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
      if (typeof getShadowRoot === "function") {
        var originalNode = node;
        while (node) {
          var parentElement = node.parentElement;
          var rootNode = getRootNode(node);
          if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
            return isZeroArea(node);
          } else if (node.assignedSlot) {
            node = node.assignedSlot;
          } else if (!parentElement && rootNode !== node.ownerDocument) {
            node = rootNode.host;
          } else {
            node = parentElement;
          }
        }
        node = originalNode;
      }
      if (isNodeAttached(node)) {
        return !node.getClientRects().length;
      }
      if (displayCheck !== "legacy-full") {
        return true;
      }
    } else if (displayCheck === "non-zero-area") {
      return isZeroArea(node);
    }
    return false;
  };
  var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
      var parentNode = node.parentElement;
      while (parentNode) {
        if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
          for (var i5 = 0; i5 < parentNode.children.length; i5++) {
            var child = parentNode.children.item(i5);
            if (child.tagName === "LEGEND") {
              return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
            }
          }
          return true;
        }
        parentNode = parentNode.parentElement;
      }
    }
    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
    if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
    //  because we're limited in the type of selectors we can use in JSDom (see related
    //  note related to `candidateSelectors`)
    isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
    isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }
    return true;
  };
  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
    if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
      return false;
    }
    return true;
  };
  var isTabbable = function isTabbable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, candidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorTabbable(options, node);
  };
  var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
  var isFocusable = function isFocusable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/stack.js
  function useStack() {
    if (false) {
      const stack = q2(generateStack, []);
      const getStack = useCallback(() => stack, []);
      return getStack;
    } else {
      return returnEmptyString;
    }
  }
  function returnEmptyString() {
    return "";
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/focus.js
  function focus(e3) {
    if (false) {
      console.log(`Focus changed to ${(e3?.tagName || "").toLowerCase().padStart(6)}:`, e3);
      console.log(generateStack());
    }
    e3?.focus?.();
  }
  function findBackupFocus(unmountingElement) {
    if (unmountingElement == null)
      return globalThis.document.body;
    let document2 = unmountingElement.ownerDocument;
    const walker = document2.createTreeWalker(document2.body, NodeFilter.SHOW_ELEMENT);
    let node = walker.firstChild();
    let bestCandidateBefore = null;
    let bestCandidateAfter = null;
    let w5 = false;
    while (node) {
      let pos = node.compareDocumentPosition(unmountingElement);
      if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
        if (!w5)
          console.warn("Can't focus anything near a disconnected element");
        w5 = true;
      }
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
        if (node instanceof Element) {
          if (isTabbable(node)) {
            bestCandidateAfter = node;
            break;
          }
        }
      } else if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
        if (node instanceof Element) {
          if (isTabbable(node)) {
            bestCandidateBefore = node;
          }
        }
      }
      node = walker.nextNode();
    }
    return bestCandidateAfter ?? bestCandidateBefore ?? document2.body;
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/timing/use-timeout.js
  var useTimeout = monitored(function useTimeout2({ timeout, callback, triggerIndex }) {
    const stableCallback = useStableCallback(() => {
      startTimeRef.current = null;
      callback();
    });
    const getTimeout = useStableGetter(timeout);
    const startTimeRef = F2(null);
    const timeoutIsNull = timeout == null;
    _(() => {
      if (!timeoutIsNull) {
        const timeout2 = getTimeout();
        console.assert(timeoutIsNull == (timeout2 == null));
        if (timeout2 != null) {
          startTimeRef.current = +/* @__PURE__ */ new Date();
          const handle = setTimeout(stableCallback, timeout2);
          return () => clearTimeout(handle);
        }
      }
    }, [triggerIndex, timeoutIsNull]);
    const getElapsedTime = useCallback(() => {
      return +/* @__PURE__ */ new Date() - +(startTimeRef.current ?? /* @__PURE__ */ new Date());
    }, []);
    const getRemainingTime = useCallback(() => {
      const timeout2 = getTimeout();
      return timeout2 == null ? null : Math.max(0, timeout2 - getElapsedTime());
    }, []);
    return { getElapsedTime, getRemainingTime };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/use-tag-props.js
  function useTagProps(props, tag) {
    if (false) {
      const [id] = p3(() => ++idIndex);
      const propsIdTag = `data-props-${tag}-${id}`;
      const getStack = useStack();
      console.assert(!(props && typeof props == "object" && tag in props));
      useTimeout({
        callback: () => {
          let element = document.querySelectorAll(`[${propsIdTag}]`);
          if (element.length != 1) {
            console.error("A hook returned props that were not properly spread to any HTMLElement:");
            console.log(getStack());
            debugger;
          }
        },
        timeout: 250,
        triggerIndex: tag
      });
      return q2(() => {
        return {
          ...props,
          [propsIdTag]: true
          /*, [tag as never]: true*/
        };
      }, [props, tag]);
    } else {
      return props;
    }
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/keyboard-navigation/use-linear-navigation.js
  var useLinearNavigation = function useLinearNavigation2({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, rearrangeableChildrenReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }) {
    let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexDemangler, indexMangler);
    const navigateAbsolute = useCallback((requestedIndexMangled, searchDirection, e3, fromUserInteraction, mode) => {
      const highestChildIndex = getHighestIndex();
      const lowestChildIndex = getLowestIndex();
      const _original = getTabbableIndex() ?? 0;
      const targetDemangled = indexDemangler(requestedIndexMangled);
      const { status, valueDemangled } = tryNavigateToIndex({ isValid: isValidForLinearNavigation, lowestChildIndex, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetDemangled });
      if (status == "past-end") {
        if (navigatePastEnd == "wrap") {
          if (mode == "single")
            navigateToFirst(e3, fromUserInteraction);
          else {
            if (false)
              navigateToFirst(e3, fromUserInteraction);
            else
              navigateToLast(e3, fromUserInteraction);
          }
          return "stop";
        } else if (navigatePastEnd == "passthrough") {
          return "passthrough";
        } else {
          navigatePastEnd();
          return "stop";
        }
      } else if (status == "past-start") {
        if (navigatePastStart == "wrap") {
          if (mode == "single") {
            navigateToLast(e3, fromUserInteraction);
          } else {
            if (false)
              navigateToLast(e3, fromUserInteraction);
            else
              navigateToFirst(e3, fromUserInteraction);
          }
          return "stop";
        } else if (navigatePastStart == "passthrough") {
          return "passthrough";
        } else {
          navigatePastStart();
          return "stop";
        }
      } else {
        setTabbableIndex(valueDemangled, e3, fromUserInteraction);
        onNavigateLinear?.(valueDemangled, e3);
        return "stop";
      }
    }, []);
    const navigateToFirst = useStableCallback((e3, fromUserInteraction) => {
      return navigateAbsolute(getLowestIndex(), -1, e3, fromUserInteraction, "single");
    });
    const navigateToLast = useStableCallback((e3, fromUserInteraction) => {
      return navigateAbsolute(getHighestIndex(), 1, e3, fromUserInteraction, "single");
    });
    const navigateRelative2 = useStableCallback((e3, offset, fromUserInteraction, mode) => {
      const _highestChildIndex = getHighestIndex();
      const searchDirection = Math.sign(offset) || 1;
      const original = getTabbableIndex() ?? 0;
      const targetMangled = indexMangler(original) + offset;
      return navigateAbsolute(targetMangled, searchDirection, e3, fromUserInteraction, mode);
    });
    const navigateToNext = useStableCallback((e3, fromUserInteraction) => {
      return navigateRelative2(e3, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e3, fromUserInteraction) => {
      return navigateRelative2(e3, -1, fromUserInteraction, "single");
    });
    const stableProps = F2(useTagProps({
      onKeyDown: useStableCallback((e3) => {
        if (e3.metaKey)
          return;
        const allowsVerticalNavigation = arrowKeyDirection == "vertical" || arrowKeyDirection == "either";
        const allowsHorizontalNavigation = arrowKeyDirection == "horizontal" || arrowKeyDirection == "either";
        let childRange = getHighestIndex() - getLowestIndex();
        let paginatedRange = getPaginatedRange() ?? childRange;
        let truePageNavigationSize = pageNavigationSize;
        if (truePageNavigationSize != null && truePageNavigationSize < 1) {
          truePageNavigationSize = Math.round(truePageNavigationSize * Math.max(10, paginatedRange + 1));
        }
        let result = "passthrough";
        let keyPressIsValidForOrientation = true;
        switch (e3.key) {
          case "ArrowUp":
          case "ArrowDown":
            keyPressIsValidForOrientation = allowsVerticalNavigation;
            break;
          case "ArrowLeft":
          case "ArrowRight":
            keyPressIsValidForOrientation = allowsHorizontalNavigation;
            break;
        }
        if (keyPressIsValidForOrientation) {
          switch (e3.key) {
            case "ArrowUp":
            case "ArrowLeft":
              result = navigateToPrev(e3, true);
              break;
            case "ArrowDown":
            case "ArrowRight":
              result = navigateToNext(e3, true);
              break;
            case "PageUp":
            case "PageDown":
              if (truePageNavigationSize == null)
                break;
              else if (truePageNavigationSize > 0)
                result = navigateRelative2(e3, truePageNavigationSize * (e3.key.endsWith("n") ? 1 : -1), true, "page");
              break;
            case "Home":
            case "End":
              if (!disableHomeEndKeys) {
                if (e3.key.endsWith("e"))
                  navigateToFirst(e3, true);
                else
                  navigateToLast(e3, true);
                result = "stop";
              }
              break;
          }
        }
        if (result && result != "passthrough") {
          e3.preventDefault();
          e3.stopPropagation();
        }
      })
    }, "data-linear-navigation"));
    return {
      linearNavigationReturn: {},
      propsStable: stableProps.current
    };
  };
  function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }) {
    if (searchDirection === -1) {
      let bestUpResult = void 0;
      bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
      bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
      return bestUpResult || { valueDemangled: targetDemangled, status: "normal" };
    } else {
      let bestDownResult = void 0;
      bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
      bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
      return bestDownResult || { valueDemangled: targetDemangled, status: "normal" };
    }
  }
  function tryNavigateUp({ isValid, indexDemangler, indexMangler, lowestChildIndex: lower, targetDemangled }) {
    while (targetDemangled >= lower && !isValid(targetDemangled)) {
      targetDemangled = indexDemangler(indexMangler(targetDemangled) - 1);
    }
    if (!isValid(targetDemangled)) {
      return void 0;
    }
    if (targetDemangled < lower) {
      return { valueDemangled: indexDemangler(lower), status: "past-start" };
    } else {
      return { valueDemangled: targetDemangled, status: "normal" };
    }
  }
  function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex: upper }) {
    while (targetDemangled <= upper && !isValid(targetDemangled)) {
      targetDemangled = indexDemangler(indexMangler(targetDemangled) + 1);
    }
    if (!isValid(targetDemangled)) {
      return void 0;
    }
    if (targetDemangled > upper) {
      return { valueDemangled: indexDemangler(upper), status: "past-end" };
    } else {
      return { valueDemangled: targetDemangled, status: "normal" };
    }
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-managed-children.js
  var useManagedChildren = monitored(function useManagedChildren2(parentParameters) {
    const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
    assertEmptyObject(rest);
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
    const getHighestIndex = useCallback(() => {
      return managedChildrenArray.current.highestIndex;
    }, []);
    const getLowestIndex = useCallback(() => {
      return managedChildrenArray.current.lowestIndex;
    }, []);
    const managedChildrenArray = F2({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });
    const forEachChild = useCallback((f5) => {
      for (const child of managedChildrenArray.current.arr) {
        if (child) {
          if (f5(child) == "break")
            return;
        }
      }
      for (const field in managedChildrenArray.current.rec) {
        const child = managedChildrenArray.current.rec[field];
        if (child) {
          if (f5(child) == "break")
            return;
        }
      }
    }, []);
    const getManagedChildInfo = useCallback((index) => {
      if (typeof index == "number")
        return managedChildrenArray.current.arr[index];
      else
        return managedChildrenArray.current.rec[index];
    }, []);
    const hasRemoteULEChildMounted = F2(null);
    const remoteULEChildMounted = useCallback((index, mounted) => {
      if (!hasRemoteULEChildMounted.current) {
        hasRemoteULEChildMounted.current = {
          mounts: /* @__PURE__ */ new Set(),
          unmounts: /* @__PURE__ */ new Set()
        };
        debounceRendering(() => {
          if (onChildrenCountChange || onChildrenMountChange) {
            onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
            onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
            hasRemoteULEChildMounted.current = null;
          }
        });
      }
      if (mounted) {
        if (typeof index == "number") {
          managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
          managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
        }
      } else {
        if (typeof index == "number") {
          delete managedChildrenArray.current.arr[index];
          let shave = 0;
          while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == void 0) {
            ++shave;
          }
          managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
        } else
          delete managedChildrenArray.current.rec[index];
        if (typeof index == "number") {
          managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
        }
      }
      hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
    }, [
      /* Must remain stable */
    ]);
    const managedChildren = useMemoObject({
      ...{ _: managedChildrenArray.current },
      forEach: forEachChild,
      getAt: getManagedChildInfo,
      getHighestIndex,
      getLowestIndex,
      _arraySlice: useCallback(() => {
        let ret = managedChildrenArray.current.arr.slice();
        const max = getHighestIndex();
        for (let i5 = 0; i5 <= max; ++i5) {
          if (ret[i5] == null)
            ret[i5] = { index: i5 };
        }
        return ret;
      }, [])
    });
    const getChildren = useCallback(() => managedChildren, []);
    return {
      context: useMemoObject({
        managedChildContext: useMemoObject({
          managedChildrenArray: managedChildrenArray.current,
          remoteULEChildMounted,
          //remoteULEChildChanged,
          getChildren
        })
      }),
      managedChildrenReturn: { getChildren }
    };
  });
  var useManagedChild = monitored(function useManagedChild2({ context, info }) {
    const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted } } = context ?? { managedChildContext: {} };
    const index = info.index;
    A2(() => {
      if (managedChildrenArray == null)
        return;
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = { ...info };
      } else {
        managedChildrenArray.rec[index] = { ...info };
      }
    });
    A2(() => {
      remoteULEChildMounted?.(index, true);
      return () => remoteULEChildMounted?.(index, false);
    }, [index]);
    return {
      managedChildReturn: { getChildren }
    };
  });
  function useChildrenFlag({ getChildren, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null);
    const getClosestFit = useCallback((requestedIndex) => {
      const children = getChildren();
      let closestDistance = Infinity;
      let closestIndex = null;
      children.forEach((child) => {
        if (child != null && isValid(child)) {
          console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
          const newDistance = Math.abs(child.index - requestedIndex);
          if (newDistance < closestDistance || newDistance == closestDistance && child.index < requestedIndex) {
            closestDistance = newDistance;
            closestIndex = child.index;
          }
        }
      });
      return closestIndex;
    }, [
      /* Must remain stable! */
    ]);
    if (closestFit) {
      console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
    }
    const reevaluateClosestFit = useStableCallback((reason) => {
      const children = getChildren();
      const requestedIndex = getRequestedIndex();
      const currentIndex = getCurrentIndex();
      const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
      if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
        console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        const closestFitIndex = getClosestFit(requestedIndex);
        setCurrentIndex(closestFitIndex, reason);
        if (currentChild)
          setAt(currentChild, false, closestFitIndex, currentIndex);
        if (closestFitIndex != null) {
          const closestFitChild = children.getAt(closestFitIndex);
          console.assert(closestFitChild != null, "Internal logic???");
          setAt(closestFitChild, true, closestFitIndex, currentIndex);
          onClosestFit(closestFitIndex);
        } else {
          onClosestFit(null);
        }
      }
    });
    const reasonRef = F2(void 0);
    const changeIndex = useCallback((arg, reason) => {
      const children = getChildren();
      const requestedIndex = arg instanceof Function ? arg(getRequestedIndex()) : arg;
      reasonRef.current = reason;
      setRequestedIndex(requestedIndex, reason);
      const currentIndex = getCurrentIndex();
      if (currentIndex == requestedIndex)
        return requestedIndex;
      let newMatchingChild = requestedIndex == null ? null : children.getAt(requestedIndex);
      const oldMatchingChild = currentIndex == null ? null : children.getAt(currentIndex);
      if (requestedIndex == null) {
        setCurrentIndex(null, reason);
        if (oldMatchingChild)
          setAt(oldMatchingChild, false, requestedIndex, currentIndex);
        return null;
      } else {
        const childIsValid = newMatchingChild && isValid(newMatchingChild);
        if (childIsValid || !closestFit) {
          setCurrentIndex(requestedIndex, reason);
          if (oldMatchingChild)
            setAt(oldMatchingChild, false, requestedIndex, currentIndex);
          if (newMatchingChild)
            setAt(newMatchingChild, true, requestedIndex, currentIndex);
          return requestedIndex;
        } else {
          console.assert(closestFit);
          console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
          const closestFitIndex = getClosestFit(requestedIndex);
          setCurrentIndex(closestFitIndex, reason);
          if (closestFitIndex != null) {
            newMatchingChild = children.getAt(closestFitIndex);
            console.assert(newMatchingChild != null, "Internal logic???");
            if (oldMatchingChild)
              setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
            setAt(newMatchingChild, true, closestFitIndex, currentIndex);
            return closestFitIndex;
          } else {
            if (oldMatchingChild)
              setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
            return null;
          }
        }
      }
    }, []);
    A2(() => {
      changeIndex(initialIndex ?? null, reasonRef.current);
    }, []);
    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-state.js
  var useState = function useState2(initialState) {
    const getStack = useStack();
    const [state, setStateP] = p3(initialState);
    const ref = F2(state);
    const setState = F2((value) => {
      if (false) {
        window._setState_stack = getStack();
      }
      if (typeof value === "function") {
        const callback = value;
        setStateP((prevValue) => {
          const nextValue = callback(prevValue);
          if (ref.current !== nextValue) {
            ref.current = nextValue;
          }
          ref.current = nextValue;
          return nextValue;
        });
      } else {
        if (ref.current !== value) {
          ref.current = value;
        }
        ref.current = value;
        setStateP(value);
      }
    });
    const getState = useCallback(() => {
      return ref.current;
    }, []);
    return [state, setState.current, getState];
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/keyboard-navigation/use-roving-tabindex.js
  var useRovingTabIndex = monitored(function useRovingTabIndex2({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, ...void1 }) {
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";
    const lastFocused = F2(null);
    assertEmptyObject(void1);
    const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
    const getUntabbable = useStableGetter(untabbable);
    const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
      const children = getChildren();
      return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
        let nextIndex = typeof updater === "function" ? updater(prevIndex ?? null) : updater;
        const untabbable2 = getUntabbable();
        let parentElement = getElement();
        console.assert(!!parentElement);
        if (nextIndex != null)
          setLastNonNullIndex(nextIndex, reason);
        if (untabbable2) {
          if (!parentElement.contains(document.activeElement) && untabbableBehavior != "leave-child-focused")
            focusSelfParent(parentElement);
          return null;
        }
        if (nextIndex == null) {
          if (!parentElement.contains(document.activeElement) && untabbableBehavior != "leave-child-focused")
            focusSelfParent(parentElement);
          return null;
        }
        if (prevIndex != nextIndex) {
          const nextChild = children.getAt(nextIndex);
          if (nextChild != null && fromUserInteraction) {
            const element = nextChild.getElement();
            if (element) {
              if (document.activeElement == document.body || document.activeElement == null || !element.contains(document.activeElement)) {
                nextChild.focusSelf(element);
              }
            }
          }
        }
        if (nextIndex != null)
          setLastNonNullIndex(nextIndex, reason);
        return nextIndex ?? 0;
      }, reason);
    });
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, useCallback(() => initiallyTabbedIndex ?? 0, []));
    _(() => {
      let shouldFocusParentAfterwards = getElement()?.contains(document.activeElement);
      if (untabbable)
        changeTabbableIndex(null, void 0);
      else {
        changeTabbableIndex(getLastNonNullIndex(), void 0);
      }
      if (shouldFocusParentAfterwards) {
        focusSelf(true);
      }
    }, [untabbable]);
    const getTabbableAt = useCallback((child) => {
      return child.getLocallyTabbable();
    }, []);
    const setTabbableAt = useCallback((child, t3) => {
      child.setLocallyTabbable(t3);
    }, []);
    const isTabbableValid = useStableCallback((child) => {
      return !child.untabbable;
    });
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
      initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
      onIndexChange: useStableCallback((n2, p4, r4) => {
        if (!(n2 == null && untabbable) && n2 != getLastNonNullIndex())
          onTabbableIndexChange?.(n2, p4, r4);
      }),
      getChildren,
      closestFit: true,
      getAt: getTabbableAt,
      isValid: isTabbableValid,
      setAt: setTabbableAt,
      onClosestFit: (index) => {
        if (document.activeElement == null || document.activeElement == document.body) {
          let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
          if (index == null || childElement == null)
            findBackupFocus(getElement()).focus();
          else
            getChildren().getAt(index)?.focusSelf(childElement);
        }
      }
    });
    const focusSelf = useCallback((force, reason) => {
      const children = getChildren();
      let index = getTabbableIndex();
      const untabbable2 = getUntabbable();
      if (!untabbable2) {
        index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
      }
      if (untabbable2) {
        if (document.activeElement != getElement() && (force || untabbableBehavior != "leave-child-focused")) {
          focusSelfParent(getElement());
        }
      } else if (!untabbable2 && index != null) {
        const element = children.getAt(index)?.getElement();
        children.getAt(index)?.focusSelf?.(element);
      } else
        setTabbableIndex(null, reason, true);
    }, []);
    const rovingTabIndexContext = useMemoObject({
      setTabbableIndex,
      parentFocusSelf: focusSelf,
      getInitiallyTabbedIndex: useCallback(() => {
        return initiallyTabbedIndex ?? (untabbable ? null : 0);
      }, []),
      reevaluateClosestFit,
      getUntabbable: useStableGetter(untabbable),
      getUntabbableBehavior: useStableGetter(untabbableBehavior),
      giveParentFocusedElement: useCallback((e3) => {
        lastFocused.current = e3;
      }, [])
    });
    return {
      managedChildrenParameters: { onChildrenMountChange: useCallback(() => {
        reevaluateClosestFit(void 0);
      }, [reevaluateClosestFit]) },
      rovingTabIndexReturn: { setTabbableIndex, getTabbableIndex, focusSelf },
      context: useMemoObject({ rovingTabIndexContext }),
      props: useTagProps({
        // Note: Making this -1 instead of null is partially intentional --
        // it gives us time during useEffect to move focus back to the last focused element
        // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
        // focus the child because focus wasn't within the list). 
        // It's also just consistent. 
        tabIndex: untabbable ? 0 : -1,
        // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
        onFocus: useStableCallback((e3) => {
          const parentElement = getElement();
          console.assert(!!parentElement);
          if (e3.target == getElement()) {
            if (!untabbable) {
              focusSelf(false, e3);
            }
          }
        })
      }, "data-roving-tab-index")
    };
  });
  var useRovingTabIndexChild = monitored(function useRovingTabIndexChild2({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, getUntabbable: getParentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }) {
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    _(() => {
      reevaluateClosestFit(void 0);
    }, [!!iAmUntabbable]);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    _(() => {
      if (tabbable) {
        giveParentFocusedElement(getElement());
      }
    }, [tabbable]);
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e3) => {
          if (focused) {
            const parentIsUntabbable = getParentIsUntabbable();
            const untabbableBehavior = getUntabbableBehavior();
            if (!parentIsUntabbable && !iAmUntabbable || untabbableBehavior != "focus-parent")
              setTabbableIndex(index, e3, false);
            else
              parentFocusSelf(false);
          }
        })
      },
      rovingTabIndexChildReturn: {
        tabbable,
        getTabbable
      },
      info: { setLocallyTabbable: setTabbable, getLocallyTabbable: getTabbable },
      props: useTagProps({
        tabIndex: tabbable ? 0 : -1,
        ...{ inert: iAmUntabbable }
        // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
      }, "data-roving-tab-index-child")
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/keyboard-navigation/use-typeahead-navigation.js
  var useTypeaheadNavigation = monitored(function useTypeaheadNavigation2({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
      const handle = setTimeout(() => {
        setCurrentTypeahead(null, void 0);
        setTypeaheadStatus("none");
      }, typeaheadTimeout ?? 1e3);
      updateBasedOnTypeaheadChange(currentTypeahead, reason);
      return () => clearTimeout(handle);
    }));
    const sortedTypeaheadInfo = F2([]);
    const [typeaheadStatus, setTypeaheadStatus] = useState("none");
    const [, setImeActive, getImeActive] = useState(false);
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
    A2(() => {
      if (nextTypeaheadChar !== null) {
        setCurrentTypeahead((typeahead) => (typeahead ?? "") + nextTypeaheadChar, void 0);
        setNextTypeaheadChar(null);
      }
    }, [nextTypeaheadChar]);
    const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
      let compare;
      safeLhs = safeLhs.normalize("NFD");
      safeRhs = safeRhs.normalize("NFD");
      if (collator)
        compare = collator.compare(safeLhs, safeRhs);
      else
        compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
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
        let trimmedRet = comparatorShared(lhs, rhs.text.substring(0, lhs.length));
        return trimmedRet;
      }
      return lhs - rhs;
    });
    const isDisabled = useStableGetter(noTypeahead);
    const propsStable = F2(useTagProps({
      onKeyDown: useStableCallback((e3) => {
        if (isDisabled())
          return;
        const imeActive = getImeActive();
        const key = e3.key;
        if (e3.ctrlKey || e3.metaKey)
          return;
        if (!imeActive && e3.key === "Backspace") {
          setCurrentTypeahead((t3) => t3 == null ? null : [...t3].reverse().slice(1).reverse().join(""), e3);
          e3.preventDefault();
          e3.stopPropagation();
          return;
        }
        const isCharacterKey = key.length === 1 || !/^[A-Za-z]/.test(key);
        if (isCharacterKey) {
          if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) {
          } else {
            e3.preventDefault();
            e3.stopPropagation();
            if (!imeActive)
              setNextTypeaheadChar(key);
          }
        }
      }),
      onCompositionStart: useStableCallback((e3) => {
        setNextTypeaheadChar(e3.data);
        setImeActive(false);
      }),
      onCompositionEnd: useStableCallback((_e) => {
        setImeActive(true);
      })
    }, "data-typeahead-navigation"));
    const excludeSpace = useStableCallback(() => {
      return typeaheadStatus != "none";
    });
    return {
      context: useMemoObject({
        typeaheadNavigationContext: useMemoObject({
          insertingComparator,
          sortedTypeaheadInfo: sortedTypeaheadInfo.current,
          excludeSpace
        })
      }),
      typeaheadNavigationReturn: {
        getCurrentTypeahead,
        typeaheadStatus
      },
      propsStable: propsStable.current
    };
    function updateBasedOnTypeaheadChange(currentTypeahead, reason) {
      if (currentTypeahead && sortedTypeaheadInfo.current.length) {
        const sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);
        if (sortedTypeaheadIndex < 0) {
          setTypeaheadStatus("invalid");
        } else {
          setTypeaheadStatus("valid");
          let lowestUnsortedIndexAll = null;
          let lowestSortedIndexAll = sortedTypeaheadIndex;
          let lowestUnsortedIndexNext = null;
          let lowestSortedIndexNext = sortedTypeaheadIndex;
          const updateBestFit = (unsortedIndex) => {
            if (!isValidForTypeaheadNavigation(unsortedIndex))
              return;
            if (lowestUnsortedIndexAll == null || unsortedIndex < lowestUnsortedIndexAll) {
              lowestUnsortedIndexAll = unsortedIndex;
              lowestSortedIndexAll = i5;
            }
            if ((lowestUnsortedIndexNext == null || unsortedIndex < lowestUnsortedIndexNext) && unsortedIndex > (getIndex() ?? -Infinity)) {
              lowestUnsortedIndexNext = unsortedIndex;
              lowestSortedIndexNext = i5;
            }
          };
          let i5 = sortedTypeaheadIndex;
          while (i5 >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i5]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i5].unsortedIndex);
            --i5;
          }
          i5 = sortedTypeaheadIndex;
          while (i5 < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i5]) == 0) {
            updateBestFit(sortedTypeaheadInfo.current[i5].unsortedIndex);
            ++i5;
          }
          let toSet = null;
          if (lowestUnsortedIndexNext !== null)
            toSet = sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex;
          else if (lowestUnsortedIndexAll !== null)
            toSet = sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex;
          if (toSet != null) {
            setIndex(toSet, reason, true);
            onNavigateTypeahead?.(toSet, reason);
          }
        }
      }
    }
  });
  var useTypeaheadNavigationChild = monitored(function useTypeaheadNavigationChild2({
    info: { index, ...void1 },
    //textContentReturn: { getTextContent, ...void5 },
    context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } },
    ...void4
  }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    const onTextContentChange = useCallback((text) => {
      if (text) {
        const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
        console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
        if (sortedIndex < 0) {
          sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, { text, unsortedIndex: index });
        } else {
          sortedTypeaheadInfo.splice(sortedIndex, 0, { text, unsortedIndex: index });
        }
        return () => {
          const sortedIndex2 = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
          console.assert(sortedIndex2 < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex2].text, { unsortedIndex: index, text }) == 0);
          if (sortedIndex2 >= 0) {
            sortedTypeaheadInfo.splice(sortedIndex2, 1);
          }
        };
      }
    }, []);
    return {
      textContentParameters: { onTextContentChange },
      pressParameters: { excludeSpace }
    };
  });
  function binarySearch(array, wanted, comparator) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
      const testIndex = lastIndex + firstIndex >> 1;
      const comparisonResult = comparator(wanted, array[testIndex]);
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

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/keyboard-navigation/use-list-navigation-partial.js
  var useListNavigation = monitored(function useListNavigation2({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, ...void1 }) {
    const { props: propsRTI, rovingTabIndexReturn, managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn });
    const { propsStable: propsStableTN, typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation({ rovingTabIndexReturn, typeaheadNavigationParameters });
    const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
      managedChildrenParameters,
      rovingTabIndexReturn,
      typeaheadNavigationReturn,
      context: useMemoObject({
        ...contextRovingTabIndex,
        ...contextTypeahead
      }),
      linearNavigationReturn,
      props: useMergedProps(propsStableLN, propsStableTN, propsRTI)
    };
  });
  var useListNavigationChild = monitored(function useListNavigationChild2({ info: { index, untabbable, ...void1 }, context, refElementReturn, ...void2 }) {
    const { props, ...rticr } = useRovingTabIndexChild({ context, info: { index, untabbable }, refElementReturn });
    const { ...tncr } = useTypeaheadNavigationChild({ context, info: { index } });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      props,
      ...tncr,
      ...rticr
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/keyboard-navigation/use-grid-navigation-partial.js
  var useGridNavigation = monitored(function useGridNavigation2({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }) {
    const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
      let t3 = initiallyTabbableColumn ?? 0;
      return { actual: t3, ideal: t3 };
    }));
    const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, props, ...void1 } = useListNavigation({
      linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
      ...listNavigationParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    const gridNavigationRowContext = useMemoObject({
      //rowIsUntabbableBecauseOfGrid: !!untabbable,
      setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
      getTabbableColumn,
      setTabbableColumn
    });
    return {
      props,
      managedChildrenParameters,
      context: useMemoObject({
        gridNavigationRowContext,
        rovingTabIndexContext,
        typeaheadNavigationContext
      }),
      linearNavigationReturn,
      rovingTabIndexReturn,
      typeaheadNavigationReturn
    };
  });
  var useGridNavigationRow = monitored(function useGridNavigationRow2({
    // Stuff for the row as a child of the parent grid
    info: { index, untabbable, ...void3 },
    context: contextFromParent,
    // Stuff for the row as a parent of child cells
    linearNavigationParameters,
    rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 },
    managedChildrenReturn,
    typeaheadNavigationParameters,
    // Both/neither
    refElementReturn,
    ...void1
  }) {
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
    const getIndex = useStableCallback(() => {
      return index;
    });
    const whenThisRowIsFocused = useStableCallback((e3) => {
      const { getChildren } = managedChildrenReturn;
      if (contextFromParent.rovingTabIndexContext.getUntabbable()) {
        contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
      } else {
        let { ideal, actual: _actual } = getTabbableColumn();
        let index2 = ideal ?? 0;
        let child = getChildren().getAt(index2);
        let lowestIndex = getChildren().getLowestIndex();
        let highestIndex = getChildren().getHighestIndex();
        while ((!child || child.untabbable) && index2 > lowestIndex) {
          --index2;
          child = getChildren().getAt(index2);
        }
        while ((!child || child.untabbable) && index2 <= highestIndex) {
          ++index2;
          child = getChildren().getAt(index2);
        }
        if (child) {
          const e4 = child.getElement();
          child.focusSelf(e4);
        } else {
          focus(e3);
        }
      }
    }, []);
    const focusSelf = whenThisRowIsFocused;
    const { props: propsLNC, info: { getLocallyTabbable, setLocallyTabbable, ...void2 }, hasCurrentFocusParameters, pressParameters, rovingTabIndexChildReturn, textContentParameters, ...void6 } = useListNavigationChild({ info: { index, untabbable }, refElementReturn, context: contextFromParent });
    const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
    const { props: propsLN, context: contextULN, linearNavigationReturn, managedChildrenParameters, rovingTabIndexReturn, typeaheadNavigationReturn, ...void5 } = useListNavigation({
      managedChildrenReturn,
      refElementReturn,
      typeaheadNavigationParameters,
      rearrangeableChildrenReturn: { indexDemangler: identity_default, indexMangler: identity_default },
      rovingTabIndexParameters: {
        untabbableBehavior: "leave-child-focused",
        focusSelfParent: whenThisRowIsFocused,
        untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
        initiallyTabbedIndex,
        onTabbableIndexChange: useStableCallback((v4, p4, r4) => {
          setTabbableColumn({ ideal: v4, actual: v4 }, r4);
          onTabbableIndexChange?.(v4, p4, r4);
        })
      },
      linearNavigationParameters: {
        onNavigateLinear: useStableCallback((next, event) => {
          setTabbableColumn((prev) => ({ ideal: next, actual: prev?.actual ?? next }), event);
        }),
        disableHomeEndKeys: true,
        pageNavigationSize: 0,
        arrowKeyDirection: "horizontal",
        ...linearNavigationParameters
      },
      paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    const { setTabbableIndex } = rovingTabIndexReturn;
    const gridNavigationCellContext = useMemoObject({
      //allChildCellsAreUntabbable,
      setTabbableRow,
      getRowIndex: getIndex,
      getTabbableColumn,
      setTabbableColumn,
      setTabbableCell: setTabbableIndex
    });
    propsLN.tabIndex = propsLNC.tabIndex = -1;
    const props = useMergedProps(propsLN, propsLNC, {
      // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
      onFocus: useStableCallback((e3) => whenThisRowIsFocused(e3.currentTarget))
    });
    const contextToChildren = useMemoObject({
      gridNavigationCellContext,
      ...contextULN
    });
    return {
      context: contextToChildren,
      props: useTagProps(props, "data-use-grid-navigation-partial-row"),
      info: { focusSelf, getLocallyTabbable, setLocallyTabbable },
      hasCurrentFocusParameters,
      pressParameters,
      rovingTabIndexChildReturn,
      textContentParameters,
      linearNavigationReturn,
      managedChildrenParameters,
      rovingTabIndexReturn,
      typeaheadNavigationReturn
    };
  });
  var useGridNavigationCell = monitored(function useGridNavigationCell2({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }) {
    colSpan ??= 1;
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, rovingTabIndexChildReturn, textContentParameters, pressParameters, props, info: infoLs, ...void2 } = useListNavigationChild({
      info: { index, untabbable },
      context: { rovingTabIndexContext, typeaheadNavigationContext },
      refElementReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    return {
      info: infoLs,
      props: useMergedProps(props, { onClick: (e3) => setTabbableColumn((prev) => ({ ideal: index, actual: prev?.actual ?? index }), e3) }),
      rovingTabIndexChildReturn,
      textContentParameters,
      pressParameters,
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e3) => {
          ocfic1?.(focused, prev, e3);
          if (focused) {
            setTabbableRow(getRowIndex(), e3, false);
            setTabbableColumn((prev2) => {
              return { actual: index, ideal: prev2?.ideal ?? index };
            }, e3);
            setTabbableCell((prev2) => {
              if (prev2 != null && (prev2 < index || prev2 > index + colSpan)) {
                return prev2;
              }
              return index;
            }, e3, false);
          }
        })
      }
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/processed-children/use-paginated-children.js
  var usePaginatedChildren = monitored(function usePaginatedChildren2({ managedChildrenReturn: { getChildren }, rearrangeableChildrenReturn: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused } }) {
    const parentIsPaginated = paginationMin != null || paginationMax != null;
    const lastPagination = F2({ paginationMax: null, paginationMin: null });
    const refreshPagination = useCallback((paginationMin2, paginationMax2) => {
      const childMax = getChildren().getHighestIndex() + 1;
      const childMin = getChildren().getLowestIndex();
      for (let i5 = childMin; i5 <= childMax; ++i5) {
        const visible = i5 >= (paginationMin2 ?? -Infinity) && i5 < (paginationMax2 ?? Infinity);
        getChildren().getAt(indexDemangler(i5))?.setPaginationVisible(visible);
        if (visible && (paginationMax2 != null || paginationMin2 != null))
          getChildren().getAt(indexDemangler(i5))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
      }
    }, [
      /* Must be empty */
    ]);
    _(() => {
      let tabbableIndex = getTabbableIndex();
      if (tabbableIndex != null) {
        let shouldFocus = getAnyFocused() || false;
        setTimeout(() => {
          if (paginationMin != null && tabbableIndex < paginationMin) {
            setTabbableIndex(paginationMin, void 0, shouldFocus);
          } else if (paginationMax != null && tabbableIndex >= paginationMax) {
            let next = paginationMax - 1;
            if (next == -1)
              next = null;
            setTabbableIndex(next, void 0, shouldFocus);
          }
        }, 1);
      }
      refreshPagination(paginationMin, paginationMax);
      lastPagination.current.paginationMax = paginationMax ?? null;
      lastPagination.current.paginationMin = paginationMin ?? null;
    }, [paginationMax, paginationMin]);
    const pmin = F2(paginationMin);
    const pmax = F2(paginationMax);
    pmin.current = paginationMin;
    pmax.current = paginationMax;
    const getDefaultPaginationVisible = useCallback((i5) => {
      return i5 >= (pmin.current ?? -Infinity) && i5 < (pmax.current ?? Infinity);
    }, []);
    const paginatedChildContext = q2(() => ({
      parentIsPaginated,
      getDefaultPaginationVisible
    }), [parentIsPaginated]);
    const getPaginationMin = useStableGetter(paginationMin);
    const getPaginationMax = useStableGetter(paginationMax);
    A2(() => {
      const paginationMin2 = getPaginationMin();
      const paginationMax2 = getPaginationMax();
      const count = childCount ?? 0;
      if (paginationMax2 != null || paginationMin2 != null) {
        const min = paginationMin2 ?? 0;
        const max = paginationMax2 ?? count;
        for (let i5 = min; i5 < max; ++i5) {
          getChildren().getAt(i5)?.setChildCountIfPaginated(count);
        }
      }
    }, [childCount]);
    return {
      context: q2(() => ({ paginatedChildContext }), [paginatedChildContext]),
      paginatedChildrenReturn: { refreshPagination }
    };
  });
  var usePaginatedChild = monitored(function usePaginatedChild2({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
    return {
      props: useTagProps(!parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? void 0, "aria-posinset": index + 1 }, "data-paginated-children-child"),
      paginatedChildReturn: {
        /*paginatedVisible,*/
        parentIsPaginated,
        hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false
      },
      info: {
        setPaginationVisible: setPaginatedVisible,
        setChildCountIfPaginated
      }
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-force-update.js
  var useForceUpdate = monitored(function useForceUpdate2() {
    const [, set] = p3(0);
    return F2(() => set((i5) => ++i5)).current;
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/processed-children/use-rearrangeable-children.js
  function useCreateProcessedChildrenContext() {
    const sortRef = F2(null);
    const shuffleRef = F2(null);
    const reverseRef = F2(null);
    const rearrangeRef = F2(null);
    const indexManglerRef = F2(null);
    const indexDemanglerRef = F2(null);
    const indexMangler = useStableCallback((i5) => {
      return (indexManglerRef.current ?? identity_default)(i5);
    }, []);
    const indexDemangler = useStableCallback((i5) => {
      return (indexDemanglerRef.current ?? identity_default)(i5);
    }, []);
    const sort = useStableCallback((i5) => {
      return (sortRef.current ?? identity_default)(i5);
    }, []);
    const shuffle2 = useStableCallback(() => {
      return (shuffleRef.current ?? identity_default)();
    }, []);
    const reverse = useStableCallback(() => {
      return (reverseRef.current ?? identity_default)();
    }, []);
    const rearrange = useStableCallback((original, ordered) => {
      (rearrangeRef.current ?? noop_default)(original, ordered);
    }, []);
    const provideManglers = useStableCallback(({ indexDemangler: indexDemangler2, indexMangler: indexMangler2, reverse: reverse2, shuffle: shuffle3, sort: sort2 }) => {
      indexManglerRef.current = indexMangler2;
      indexDemanglerRef.current = indexDemangler2;
      reverseRef.current = reverse2;
      shuffleRef.current = shuffle3;
      sortRef.current = sort2;
    });
    const rearrangeableChildrenContext = useMemoObject({ provideManglers });
    const context = useMemoObject({ rearrangeableChildrenContext });
    return {
      context,
      indexDemangler,
      indexMangler,
      rearrange,
      reverse,
      shuffle: shuffle2,
      sort
    };
  }
  var useRearrangeableChildren = monitored(function useRearrangeableChildren2({ rearrangeableChildrenParameters: { getIndex, onRearranged, compare: userCompare, children, adjust }, managedChildrenReturn: { getChildren }, context: { rearrangeableChildrenContext: { provideManglers } } }) {
    useEnsureStability("useRearrangeableChildren", getIndex);
    const mangleMap = F2(/* @__PURE__ */ new Map());
    const demangleMap = F2(/* @__PURE__ */ new Map());
    const indexMangler = useCallback((n2) => mangleMap.current.get(n2) ?? n2, []);
    const indexDemangler = useCallback((n2) => demangleMap.current.get(n2) ?? n2, []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    const shuffle2 = useCallback(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const shuffledRows = shuffle_default(originalRows);
      return rearrange(originalRows, shuffledRows);
    }, [
      /* Must remain stable */
    ]);
    const reverse = useCallback(() => {
      const managedRows = getChildren();
      const originalRows = managedRows._arraySlice();
      const reversedRows = managedRows._arraySlice().reverse();
      return rearrange(originalRows, reversedRows);
    }, [
      /* Must remain stable */
    ]);
    const forceUpdateRef = F2(null);
    const rearrange = useCallback((originalRows, sortedRows) => {
      mangleMap.current.clear();
      demangleMap.current.clear();
      for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
        if (sortedRows[indexAsSorted]) {
          const indexAsUnsorted = sortedRows[indexAsSorted].index;
          mangleMap.current.set(indexAsUnsorted, indexAsSorted);
          demangleMap.current.set(indexAsSorted, indexAsUnsorted);
        }
      }
      onRearrangedGetter()?.();
      forceUpdateRef.current?.();
    }, []);
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const sort = useCallback((direction) => {
      const managedRows = getChildren();
      const compare = getCompare();
      const originalRows = managedRows._arraySlice();
      const sortedRows = compare ? originalRows.sort((lhsRow, rhsRow) => {
        const lhsValue = lhsRow;
        const rhsValue = rhsRow;
        const result = compare(lhsValue, rhsValue);
        if (direction[0] == "d")
          return -result;
        return result;
      }) : managedRows._arraySlice();
      return rearrange(originalRows, sortedRows);
    }, [
      /* Must remain stable */
    ]);
    console.assert(Array.isArray(children));
    const forceUpdate = useForceUpdate();
    console.assert(forceUpdateRef.current == null || forceUpdateRef.current == forceUpdate);
    forceUpdateRef.current = forceUpdate;
    let sorted = children.slice().map((child) => {
      if (false) {
        console.assert(getIndex(child) != null, `getIndex(vnode) must return its 0-based numeric index (e.g. its \`index\` prop)`);
      }
      const mangledIndex = (child == null ? null : indexMangler(getIndex(child))) ?? null;
      const demangledIndex = (child == null ? null : getIndex(child)) ?? null;
      return {
        child,
        sort: mangledIndex ?? -1,
        mangledIndex,
        demangledIndex
      };
    }).sort((lhs, rhs) => lhs.sort - rhs.sort).map(({ child, mangledIndex, demangledIndex }) => {
      if (child)
        return (adjust || identity_default)(y(child.type, { ...child.props, key: demangledIndex }), { mangledIndex, demangledIndex }) ?? null;
      return null;
    });
    A2(() => {
      provideManglers({
        indexDemangler,
        indexMangler,
        reverse,
        shuffle: shuffle2,
        sort
      });
    }, []);
    return {
      rearrangeableChildrenReturn: {
        indexMangler,
        indexDemangler,
        rearrange,
        shuffle: shuffle2,
        reverse,
        sort,
        children: sorted
      }
    };
  });
  function defaultCompare(lhs, rhs) {
    return compare1(lhs?.index, rhs?.index);
    function compare1(lhs2, rhs2) {
      if (lhs2 == null || rhs2 == null) {
        if (lhs2 == null)
          return -1;
        if (rhs2 == null)
          return 1;
      }
      return lhs2 - rhs2;
    }
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/processed-children/use-staggered-children.js
  var useStaggeredChildren = monitored(function useStaggeredChildren2({
    managedChildrenReturn: { getChildren },
    staggeredChildrenParameters: { staggered, childCount }
    //refElementReturn: { getElement }
  }) {
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
    const timeoutHandle = F2(-1);
    const resetEmergencyTimeout = useCallback(() => {
      if (timeoutHandle.current != -1)
        clearTimeout(timeoutHandle.current);
      timeoutHandle.current = setTimeout(() => {
        timeoutHandle.current = setTimeout(() => {
          timeoutHandle.current = -1;
          let target = getTargetStaggerIndex();
          setDisplayedStaggerIndex((prev) => {
            let next = Math.min(target || 0, (prev || 0) + 1);
            while (next <= (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible() == true)
              ++next;
            return next;
          });
        }, 10);
      }, 100);
    }, [
      /* Must be empty */
    ]);
    _(() => {
      if (timeoutHandle.current == -1) {
        resetEmergencyTimeout();
        let current = getDisplayedStaggerIndex();
        let next = Math.min(childCount ?? 0, (current ?? 0) + 1);
        setDisplayedStaggerIndex(next);
      }
    }, [childCount]);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(useCallback((newIndex, prevIndex) => {
      if (newIndex == null || !s4.current) {
        return;
      }
      setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
      queueMicrotask(() => {
        for (let i5 = (prevIndex ?? 0) - 1; i5 <= newIndex; ++i5) {
          getChildren().getAt(i5)?.setStaggeredVisible(true);
        }
      });
      resetEmergencyTimeout();
    }, [
      /* Must be empty */
    ]), returnNull);
    const parentIsStaggered = !!staggered;
    const getChildCount = useStableGetter(childCount);
    const childCallsThisToTellTheParentToMountTheNextOne = useCallback((justMountedChildIndex) => {
      setDisplayedStaggerIndex((prevIndex) => {
        let next = Math.min(
          getTargetStaggerIndex() ?? 0,
          // Don't go higher than the highest child
          1 + Math.max(prevIndex ?? 0, justMountedChildIndex)
          // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
        );
        while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) {
          ++next;
        }
        return next;
      });
    }, []);
    const s4 = F2(parentIsStaggered);
    s4.current = parentIsStaggered;
    const getDefaultStaggeredVisible = useCallback((i5) => {
      if (s4.current) {
        const staggerIndex = getDisplayedStaggerIndex();
        if (staggerIndex == null)
          return false;
        return i5 < staggerIndex;
      } else {
        return true;
      }
    }, []);
    const intersectionObserver = F2(null);
    const elementToIndex = F2(/* @__PURE__ */ new Map());
    const setElementToIndexMap = useCallback((index, element) => {
      elementToIndex.current.set(element, index);
    }, []);
    const getIntersectionObserver = useCallback(() => intersectionObserver.current, []);
    const staggeredChildContext = q2(() => ({
      parentIsStaggered,
      childCallsThisToTellTheParentToMountTheNextOne,
      getDefaultStaggeredVisible,
      getIntersectionObserver,
      setElementToIndexMap
    }), [parentIsStaggered]);
    _(() => {
      const io = intersectionObserver.current = new IntersectionObserver((entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const index = elementToIndex.current.get(entry.target);
            if (index != null) {
              getChildren().getAt(index)?.setStaggeredVisible(true);
            }
          }
        }
      });
      return () => io.disconnect();
    }, []);
    return {
      staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
      context: q2(() => ({
        staggeredChildContext
      }), [staggeredChildContext])
    };
  });
  var useStaggeredChild = monitored(function useStaggeredChild2({
    info: { index },
    //refElementReturn: { getElement },
    context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } }
  }) {
    const [staggeredVisible, setStaggeredVisible, getStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    const becauseScreen = F2(false);
    const [_getOnScreen, _setOnScreen] = usePassiveState(useStableCallback((next, _prev, _reason) => {
      if (staggeredVisible)
        return;
      if (next) {
        const io = getIntersectionObserver();
        io?.unobserve(e3.current);
        setStaggeredVisible(true);
        becauseScreen.current = true;
      }
    }), returnFalse);
    const childUseEffect = useCallback(() => {
      if (!becauseScreen.current && (parentIsStaggered && staggeredVisible)) {
        if (parentIsStaggered && staggeredVisible) {
          childCallsThisToTellTheParentToMountTheNextOne(index);
        } else if (!parentIsStaggered) {
          childCallsThisToTellTheParentToMountTheNextOne(index);
        }
      }
    }, [index, parentIsStaggered && staggeredVisible]);
    const e3 = F2(null);
    return {
      props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() }, "data-staggered-children-child"),
      staggeredChildReturn: { parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false, childUseEffect },
      info: { setStaggeredVisible, getStaggeredVisible },
      refElementParameters: {
        onElementChange: useStableCallback((element) => {
          setElementToIndexMap(index, element);
          e3.current = element || e3.current;
          const io = getIntersectionObserver();
          if (e3.current) {
            io?.observe(e3.current);
          } else {
            io?.unobserve(e3.current);
          }
        })
      }
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/processed-children/use-processed-children.js
  var useProcessedChildren = monitored(function useProcessedChildren2({ rearrangeableChildrenParameters: { onRearranged, children: childrenUnsorted, ...rearrangeableChildrenParameters }, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters }) {
    const childCount = childrenUnsorted.length;
    const { paginationMax, paginationMin } = paginatedChildrenParameters;
    const { staggered } = staggeredChildrenParameters;
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const { rearrangeableChildrenReturn } = useRearrangeableChildren({
      rearrangeableChildrenParameters: {
        onRearranged: useStableCallback(() => {
          refreshPagination(paginationMin, paginationMax);
          onRearranged?.();
        }),
        children: childrenUnsorted,
        ...rearrangeableChildrenParameters
      },
      managedChildrenReturn,
      context
    });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, context: { paginatedChildContext } } = usePaginatedChildren({
      managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
      rovingTabIndexReturn: context.processedChildrenContext,
      childrenHaveFocusReturn: context.processedChildrenContext,
      paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
      rearrangeableChildrenReturn
    });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({
      managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
      staggeredChildrenParameters: { staggered, childCount }
      //refElementReturn: { getElement: context.processedChildrenContext.getElement }
    });
    return {
      rearrangeableChildrenReturn,
      staggeredChildrenReturn,
      paginatedChildrenReturn,
      context: useMemoObject({
        staggeredChildContext,
        paginatedChildContext,
        managedChildContext
      })
    };
  });
  var useProcessedChild = monitored(function useProcessedChild2({ context, info: { index, ...uinfo } }) {
    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible, getStaggeredVisible }, staggeredChildReturn, props: propsStaggered, refElementParameters } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
    const { managedChildReturn } = useManagedChild({
      context,
      info: {
        index,
        setChildCountIfPaginated,
        setPaginationVisible,
        setStaggeredVisible,
        getStaggeredVisible,
        ...uinfo
      }
    });
    const propsRet = useMergedProps(propsStaggered, propsPaginated);
    return {
      props: propsRet,
      managedChildReturn,
      paginatedChildReturn,
      staggeredChildReturn,
      refElementParameters
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/selection/use-multi-selection.js
  function useMultiSelection({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }) {
    const selectedIndices = F2(/* @__PURE__ */ new Set());
    const unselectedIndices = F2(/* @__PURE__ */ new Set());
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const startOfShiftSelect = F2(null);
    let shiftKeyHeld = F2(false);
    let ctrlKeyHeld = F2(false);
    const notifyParentOfChildSelectChange = useStableCallback((event, index, selected, previous) => {
      console.assert(selected != previous);
      if (selected == void 0) {
        if (previous === true) {
          console.assert(selectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
          selectedIndices.current.delete(index);
        } else if (previous === false) {
          console.assert(unselectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
          unselectedIndices.current.delete(index);
        } else {
          console.assert(false, `The child at index ${index} was not selected or unselected but a secret third thing: ${selected}`);
        }
      } else if (selected) {
        if (previous != void 0) {
          console.assert(unselectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though it was not unselected before, somehow.`);
          unselectedIndices.current.delete(index);
        }
        console.assert(!selectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though there is already a selected child with that index.`);
        selectedIndices.current.add(index);
        startOfShiftSelect.current = index;
      } else {
        if (previous != void 0) {
          console.assert(selectedIndices.current.has(index), `The multi-select child at index ${index} changed to unselected even though it was not selected before, somehow.`);
          selectedIndices.current.delete(index);
        }
        console.assert(!unselectedIndices.current.has(index), `The multi-select child at index ${index} was marked as unselected even though there is already an unselected child with that index.`);
        unselectedIndices.current.add(index);
      }
      const childCount = selectedIndices.current.size + unselectedIndices.current.size;
      const selectedPercent = childCount == 0 ? 0 : selectedIndices.current.size / childCount;
      console.assert(selectedPercent >= 0 && selectedPercent <= 1);
      onSelectionChange?.(enhanceEvent(event, { selectedPercent, selectedIndices: selectedIndices.current }));
    });
    const changeAllChildren = useStableCallback((event, shouldBeSelected) => {
      getChildren().forEach((child) => {
        if (!child.getMultiSelectionDisabled()) {
          child.setSelectedFromParent(event, shouldBeSelected(child.index));
        }
      });
    });
    const doContiguousSelection = useStableCallback((event, endIndex) => {
      let originalEnd = endIndex;
      let temp = 0;
      let startIndex = startOfShiftSelect.current || 0;
      if (startIndex <= endIndex) {
        ++startIndex;
      } else {
        --startIndex;
        temp = endIndex;
        endIndex = startIndex;
        startIndex = temp;
      }
      console.assert(startIndex <= endIndex);
      if (startIndex <= endIndex) {
        changeAllChildren(event, (childIndex) => {
          if (childIndex >= startIndex && childIndex <= endIndex) {
            return !getChildren().getAt(childIndex)?.getMultiSelected();
          } else {
            return !!getChildren().getAt(childIndex)?.getMultiSelected();
          }
        });
      }
      startOfShiftSelect.current = originalEnd;
    });
    const onCompositeFocusChange = useStableCallback((anyFocused, _prevAnyFocused, _event) => {
      if (!anyFocused) {
        ctrlKeyHeld.current = shiftKeyHeld.current = false;
      }
    });
    let nextCtrlAIsUndo = F2(false);
    useGlobalHandler(document, "keydown", useStableCallback((e3) => {
      shiftKeyHeld.current = e3.shiftKey || e3.key == "Shift";
      ctrlKeyHeld.current = e3.ctrlKey || e3.key == "Control";
      if (getAnyFocused()) {
        if (e3.code == "KeyA" && e3.ctrlKey && !e3.repeat) {
          if (multiSelectionMode != "disabled") {
            changeAllChildren(e3, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
            e3.preventDefault();
            e3.stopPropagation();
            nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
          }
        }
      }
    }), { capture: true });
    useGlobalHandler(document, "keyup", (e3) => {
      if (e3.key == "Shift")
        shiftKeyHeld.current = false;
      if (e3.key == "Control")
        ctrlKeyHeld.current = false;
    }, { passive: true, capture: true });
    return {
      context: useMemoObject({
        multiSelectionContext: useMemoObject({
          doContiguousSelection,
          notifyParentOfChildSelectChange,
          multiSelectionAriaPropName,
          multiSelectionMode,
          changeAllChildren,
          getCtrlKeyDown: useCallback(() => ctrlKeyHeld.current, []),
          getShiftKeyDown: useCallback(() => shiftKeyHeld.current, []),
          getAnyFocused
        })
      }),
      childrenHaveFocusParameters: { onCompositeFocusChange },
      multiSelectionReturn: {},
      propsStable: useMemoObject({})
    };
  }
  function useMultiSelectionChild({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
    const pressFreebie = F2(false);
    const onPressSync = (e3) => {
      if (!multiSelectionDisabled) {
        if (multiSelectionMode == "activation") {
          if (e3.shiftKey) {
            doContiguousSelection(e3, index);
          } else {
            onMultiSelectChange?.(enhanceEvent(e3, { multiSelected: !getLocalSelected() }));
          }
        } else {
          if (e3.ctrlKey) {
            onMultiSelectChange?.(enhanceEvent(e3, { multiSelected: !getLocalSelected() }));
          } else {
            pressFreebie.current = true;
            focus(e3.currentTarget);
            onCurrentFocusedInnerChanged(true, false, e3);
          }
        }
      }
    };
    const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);
    const changeMultiSelected = useStableCallback((e3, selected) => {
      console.assert(selected != null);
      console.assert(!multiSelectionDisabled);
      console.assert(multiSelectIsEnabled);
      let prevSelected = getLocalSelected();
      if (prevSelected != selected) {
        setLocalSelected(selected);
        notifyParentOfChildSelectChange(e3, index, selected, prevSelected);
      }
    });
    const multiSelectIsEnabled = multiSelectionMode != "disabled";
    A2(() => {
      if (multiSelectIsEnabled) {
        notifyParentOfChildSelectChange(null, index, getLocalSelected(), void 0);
        return () => notifyParentOfChildSelectChange(null, index, void 0, getLocalSelected());
      }
    }, [index, multiSelectIsEnabled]);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, event) => {
      if (focused) {
        if (multiSelectionMode == "focus") {
          let any = getAnyFocused();
          console.log("any focused: ", any);
          const subSelectionMode = getShiftKeyDown() ? "toggle" : getCtrlKeyDown() ? "skip" : "set";
          let newIndex = index;
          switch (subSelectionMode) {
            case "set":
              if (any || pressFreebie.current) {
                changeAllChildren(event, (index2) => index2 == newIndex);
              }
              break;
            case "toggle":
              doContiguousSelection(event, index);
              break;
            case "skip":
              debugger;
              break;
          }
        }
      }
      pressFreebie.current = false;
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected) => {
      console.assert(onMultiSelectChange != null);
      onMultiSelectChange?.(enhanceEvent(event, { multiSelected }));
    });
    return {
      multiSelectionChildReturn: {
        changeMultiSelected,
        multiSelected: localSelected,
        getMultiSelected: getLocalSelected,
        multiSelectionMode
      },
      pressParameters: {
        onPressSync
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged
      },
      props: { [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? void 0 : localSelected ? "true" : "false" },
      info: {
        getMultiSelected: getLocalSelected,
        setSelectedFromParent,
        getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
      }
    };
  }
  function useMultiSelectionChildDeclarative({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }) {
    let reasonRef = F2(void 0);
    _(() => {
      if (multiSelected != null)
        changeMultiSelected(reasonRef.current, multiSelected);
    }, [multiSelected]);
    const omsc = useStableCallback((e3) => {
      reasonRef.current = e3;
      return onMultiSelectedChange?.(e3);
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected2) => {
      onMultiSelectedChange?.(enhanceEvent(event, { multiSelected: multiSelected2 }));
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      multiSelectionChildParameters: {
        onMultiSelectChange: omsc
      },
      info: { setSelectedFromParent }
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/selection/use-single-selection.js
  var useSingleSelection = monitored(function useSingleSelection2({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 }, ...void4 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop_default);
    const getSelectedAt = useCallback((m4) => {
      return m4.getSingleSelected();
    }, []);
    const setSelectedAt = useCallback((m4, t3, newSelectedIndex, prevSelectedIndex) => {
      if (m4.untabbable) {
        console.assert(false);
      }
      const directionComparison = newSelectedIndex == m4.index ? prevSelectedIndex : newSelectedIndex;
      const direction = directionComparison == null ? null : m4.index - directionComparison;
      if (newSelectedIndex == null)
        console.assert(t3 == false);
      if (t3)
        console.assert(newSelectedIndex === m4.index);
      m4.setLocalSingleSelected(t3, direction);
    }, []);
    const isSelectedValid = useCallback((m4) => {
      return !m4.untabbable;
    }, []);
    const { changeIndex: changeSingleSelectedIndex, getCurrentIndex: getSingleSelectedIndex } = useChildrenFlag({
      getChildren,
      onIndexChange: null,
      initialIndex: initiallySingleSelectedIndex,
      getAt: getSelectedAt,
      setAt: setSelectedAt,
      isValid: isSelectedValid,
      closestFit: false,
      onClosestFit: null
    });
    return {
      singleSelectionReturn: useMemoObject({
        getSingleSelectedIndex,
        changeSingleSelectedIndex
      }),
      context: useMemoObject({
        singleSelectionContext: useMemoObject({
          getSingleSelectedIndex,
          onSingleSelectedIndexChange,
          singleSelectionAriaPropName,
          singleSelectionMode
        })
      }),
      childrenHaveFocusParameters: {
        onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
          if (!anyFocused) {
            const selectedIndex = getSingleSelectedIndex();
            if (selectedIndex != null)
              setTabbableIndex(selectedIndex, reason, false);
          }
        })
      }
    };
  });
  var useSingleSelectionChild = monitored(function useSingleSelectionChild2({ singleSelectionChildParameters: { singleSelectionDisabled, ...void5 }, context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    useEnsureStability("useSingleSelectionChild", getSingleSelectedIndex, onSingleSelectedIndexChange);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : getSingleSelectedIndex() - index);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e3) => {
      if (!singleSelectionDisabled && singleSelectionMode == "focus" && focused && !untabbable) {
        onSingleSelectedIndexChange(enhanceEvent(e3, { selectedIndex: index }));
      }
    });
    const onPressSync = useStableCallback((e3) => {
      if (!singleSelectionDisabled && !untabbable) {
        if (singleSelectionMode == "activation")
          onSingleSelectedIndexChange(enhanceEvent(e3, { selectedIndex: index }));
      } else {
        focus(e3.currentTarget);
      }
    });
    const propParts = ariaPropName?.split("-") ?? [];
    return {
      info: {
        setLocalSingleSelected: useStableCallback((selected, direction2) => {
          setLocalSelected(selected);
          setDirection(direction2);
        }),
        getSingleSelected: getLocalSelected,
        singleSelected: localSelected
      },
      singleSelectionChildReturn: {
        singleSelected: localSelected,
        getSingleSelected: getLocalSelected,
        singleSelectedOffset: direction,
        singleSelectionMode,
        getSingleSelectedOffset: getDirection
      },
      props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
        [`${propParts[0]}-${propParts[1]}`]: localSelected ? propParts[1] == "current" ? `${propParts[2]}` : `true` : "false"
      }, "data-single-selection-child"),
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
      pressParameters: { onPressSync }
    };
  });
  function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSingleSelectedIndex }, singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange } }) {
    let s4 = singleSelectedIndex ?? null;
    let reasonRef = F2(void 0);
    _(() => {
      changeSingleSelectedIndex(s4, reasonRef.current);
    }, [s4]);
    const osic = useCallback((e3) => {
      reasonRef.current = e3;
      return onSingleSelectedIndexChange?.(e3);
    }, [onSingleSelectedIndexChange]);
    return { singleSelectionParameters: { onSingleSelectedIndexChange: osic } };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/selection/use-selection.js
  function useSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }) {
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...void3 }, context: contextSS, singleSelectionReturn, ...void1 } = useSingleSelection({ managedChildrenReturn, rovingTabIndexReturn, singleSelectionParameters });
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc2, ...void4 }, context: contextMS, multiSelectionReturn, propsStable, ...void2 } = useMultiSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
      propsStable,
      childrenHaveFocusParameters: { onCompositeFocusChange: useStableMergedCallback(ocfc1, ocfc2) },
      context: useMemoObject({ ...contextSS, ...contextMS }),
      multiSelectionReturn,
      singleSelectionReturn
    };
  }
  function useSelectionChild({ context, info: { index, untabbable, ...void2 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void3 }) {
    const { props: p1, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters: { onPressSync: opc1 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, singleSelectionChildReturn } = useSingleSelectionChild({ context, info: { index, untabbable }, singleSelectionChildParameters });
    const { props: p22, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, pressParameters: { onPressSync: opc2 }, multiSelectionChildReturn, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...void4 } = useMultiSelectionChild({ context, info: { index }, multiSelectionChildParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
      info: {
        getMultiSelected,
        setSelectedFromParent,
        getSingleSelected,
        setLocalSingleSelected,
        singleSelected,
        getMultiSelectionDisabled
      },
      multiSelectionChildReturn,
      pressParameters: { onPressSync: useStableMergedCallback(opc1, opc2) },
      props: useMergedProps(p1, p22),
      singleSelectionChildReturn
    };
  }
  function useSelectionDeclarative(args) {
    return useSingleSelectionDeclarative(args);
  }
  function useSelectionChildDeclarative(args) {
    return useMultiSelectionChildDeclarative(args);
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-ref-element.js
  var useRefElement = function useRefElement2(args) {
    const nonElementWarn = F2(false);
    if (nonElementWarn.current) {
      nonElementWarn.current = false;
      console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
    }
    const { onElementChange, onMount, onUnmount } = args.refElementParameters || {};
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    const handler = useCallback((e3, prevValue) => {
      if (!(e3 == null || e3 instanceof Element)) {
        console.assert(e3 == null || e3 instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
        nonElementWarn.current = true;
      }
      const cleanup = onElementChange?.(e3, prevValue);
      if (prevValue)
        onUnmount?.(prevValue);
      if (e3)
        onMount?.(e3);
      return cleanup;
    }, []);
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = F2(useTagProps({ ref: setElement }, "data-use-ref-element"));
    return {
      propsStable: propsStable.current,
      refElementReturn: {
        getElement
      }
    };
  };

  // ../node_modules/.pnpm/github.com+mwszekely+map-and-set-extensions@350d567c32944f93981c3165a9911bf4cea7fa8a/node_modules/map-and-set-extensions/dist/es/index.js
  var _BimapMixed_implLeft;
  var _BimapMixed_implRight;
  _BimapMixed_implLeft = /* @__PURE__ */ new WeakMap(), _BimapMixed_implRight = /* @__PURE__ */ new WeakMap();
  function add(map2, key, value) {
    var _a;
    let set = (_a = map2.get(key)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
    set.add(value);
    map2.set(key, set);
    return map2;
  }
  function del(map2, key, value) {
    var _a;
    let set = (_a = map2.get(key)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
    let ret = set.delete(value);
    map2.set(key, set);
    return ret;
  }
  function has$1(map2, key, value) {
    var _a, _b;
    return (_b = (_a = map2.get(key)) === null || _a === void 0 ? void 0 : _a.has(value)) !== null && _b !== void 0 ? _b : false;
  }
  var mapOfSets = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    add,
    delete: del,
    has: has$1
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-active-element.js
  var activeElementUpdaters = /* @__PURE__ */ new Map();
  var lastActiveElementUpdaters = /* @__PURE__ */ new Map();
  var windowFocusedUpdaters = /* @__PURE__ */ new Map();
  var windowsFocusedUpdaters = /* @__PURE__ */ new Map();
  function forEachUpdater(window2, map2, value, reason) {
    const updaters = map2.get(window2);
    if (updaters) {
      for (const updater of updaters) {
        const { lastSent, send } = updater;
        if (value !== lastSent) {
          send(value, reason);
          updater.lastSent = value;
        }
      }
    }
  }
  function focusout(e3) {
    const window2 = e3.target.ownerDocument.defaultView;
    if (e3.relatedTarget == null) {
      forEachUpdater(window2, activeElementUpdaters, null, e3);
    } else {
    }
  }
  function focusin(e3) {
    const window2 = e3.target.ownerDocument.defaultView;
    const currentlyFocusedElement = e3.target;
    forEachUpdater(window2, activeElementUpdaters, currentlyFocusedElement, e3);
    forEachUpdater(window2, lastActiveElementUpdaters, currentlyFocusedElement, e3);
  }
  function windowFocus(e3) {
    const window2 = e3.target instanceof Window ? e3.target : e3.currentTarget instanceof Window ? e3.currentTarget : e3.target.ownerDocument.defaultView;
    windowsFocusedUpdaters.set(window2, true);
    forEachUpdater(window2, windowFocusedUpdaters, true, e3);
  }
  function windowBlur(e3) {
    const window2 = e3.target instanceof Window ? e3.target : e3.currentTarget instanceof Window ? e3.currentTarget : e3.target.ownerDocument.defaultView;
    windowsFocusedUpdaters.set(window2, false);
    forEachUpdater(window2, windowFocusedUpdaters, false, e3);
  }
  var useActiveElement = monitored(function useActiveElement2({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument: getDocument2 } }) {
    useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument2);
    _(() => {
      const document2 = getDocument2();
      const window2 = document2?.defaultView;
      if ((activeElementUpdaters.get(window2)?.size ?? 0) === 0) {
        document2?.addEventListener("focusin", focusin, { passive: true });
        document2?.addEventListener("focusout", focusout, { passive: true });
        window2?.addEventListener("focus", windowFocus, { passive: true });
        window2?.addEventListener("blur", windowBlur, { passive: true });
      }
      const laeu = { send: setActiveElement, lastSent: void 0 };
      const llaeu = { send: setLastActiveElement, lastSent: void 0 };
      const lwfu = { send: setWindowFocused, lastSent: void 0 };
      mapOfSets.add(activeElementUpdaters, window2, laeu);
      mapOfSets.add(lastActiveElementUpdaters, window2, llaeu);
      mapOfSets.add(windowFocusedUpdaters, window2, lwfu);
      return () => {
        mapOfSets.delete(activeElementUpdaters, window2, laeu);
        mapOfSets.delete(lastActiveElementUpdaters, window2, llaeu);
        mapOfSets.delete(windowFocusedUpdaters, window2, lwfu);
        if (activeElementUpdaters.size === 0) {
          document2?.removeEventListener("focusin", focusin);
          document2?.removeEventListener("focusout", focusout);
          window2?.removeEventListener("focus", windowFocus);
          window2?.removeEventListener("blur", windowBlur);
        }
      };
    }, []);
    const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, returnNull, runImmediately);
    const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, returnNull, runImmediately);
    const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue, runImmediately);
    return { activeElementReturn: { getActiveElement, getLastActiveElement, getWindowFocused } };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/use-dismiss.js
  var useDismiss = monitored(function useDismiss2({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument: getDocument2, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }) {
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
    const void8 = useBackdropDismiss({
      refElementPopupReturn,
      backdropDismissParameters: {
        dismissBackdropActive: dismissBackdropActive && dismissActive,
        onDismissBackdrop: useStableCallback((e3) => {
          onDismissBackdrop?.(e3);
          onDismiss(e3, "backdrop");
        })
      }
    });
    const void9 = useEscapeDismiss({
      refElementPopupReturn,
      escapeDismissParameters: {
        dismissEscapeActive: dismissEscapeActive && dismissActive,
        getDocument: getDocument2,
        onDismissEscape: useStableCallback((e3) => {
          onDismissEscape?.(e3);
          onDismiss(e3, "escape");
        }),
        parentDepth
      }
    });
    const { activeElementParameters: { onLastActiveElementChange: olaec2, ...void1 } } = useLostFocusDismiss({
      lostFocusDismissParameters: {
        dismissLostFocusActive: dismissLostFocusActive && dismissActive,
        onDismissLostFocus: useStableCallback((e3) => {
          onDismissLostFocus?.(e3);
          onDismiss(e3, "lost-focus");
        })
      },
      refElementPopupReturn,
      refElementSourceReturn
    });
    const { activeElementReturn: { getActiveElement: _getActiveElement, getLastActiveElement: _getLastActiveElement, getWindowFocused: _getWindowFocused } } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: useStableMergedCallback(olaec2, olaec1),
        onActiveElementChange,
        onWindowFocusedChange,
        getDocument: getDocument2
      }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
      refElementSourceReturn,
      refElementPopupReturn,
      propsStableSource,
      propsStablePopup
    };
  });

  // ../node_modules/.pnpm/blocking-elements@0.1.1/node_modules/blocking-elements/dist/blocking-elements.js
  (() => {
    var _a, _b, _c;
    const _blockingElements = Symbol();
    const _alreadyInertElements = Symbol();
    const _topElParents = Symbol();
    const _siblingsToRestore = Symbol();
    const _parentMO = Symbol();
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
        this[_a] = [];
        this[_b] = [];
        this[_c] = /* @__PURE__ */ new Set();
      }
      destructor() {
        this[_restoreInertedSiblings](this[_topElParents]);
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
        }
        this.remove(element);
        this[_topChanged](element);
        this[_blockingElements].push(element);
      }
      remove(element) {
        const i5 = this[_blockingElements].indexOf(element);
        if (i5 === -1) {
          return false;
        }
        this[_blockingElements].splice(i5, 1);
        if (i5 === this[_blockingElements].length) {
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
        const oldParents = this[_topElParents];
        if (!newTop) {
          this[_restoreInertedSiblings](oldParents);
          toKeepInert.clear();
          this[_topElParents] = [];
          return;
        }
        const newParents = this[_getParents](newTop);
        if (newParents[newParents.length - 1].parentNode !== document.body) {
          throw Error("Non-connected element cannot be a blocking element");
        }
        this[_topElParents] = newParents;
        const toSkip = this[_getDistributedChildren](newTop);
        if (!oldParents.length) {
          this[_inertSiblings](newParents, toSkip, toKeepInert);
          return;
        }
        let i5 = oldParents.length - 1;
        let j4 = newParents.length - 1;
        while (i5 > 0 && j4 > 0 && oldParents[i5] === newParents[j4]) {
          i5--;
          j4--;
        }
        if (oldParents[i5] !== newParents[j4]) {
          this[_swapInertedSibling](oldParents[i5], newParents[j4]);
        }
        i5 > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i5));
        j4 > 0 && this[_inertSiblings](newParents.slice(0, j4), toSkip, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_swapInertedSibling](oldInert, newInert) {
        const siblingsToRestore = oldInert[_siblingsToRestore];
        if (this[_isInertable](oldInert) && !oldInert.inert) {
          oldInert.inert = true;
          siblingsToRestore.add(oldInert);
        }
        if (siblingsToRestore.has(newInert)) {
          newInert.inert = false;
          siblingsToRestore.delete(newInert);
        }
        newInert[_parentMO] = oldInert[_parentMO];
        newInert[_siblingsToRestore] = siblingsToRestore;
        oldInert[_parentMO] = void 0;
        oldInert[_siblingsToRestore] = void 0;
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
          element[_parentMO] = void 0;
          const siblings = element[_siblingsToRestore];
          for (const sibling of siblings) {
            sibling.inert = false;
          }
          element[_siblingsToRestore] = void 0;
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
          const parent = element.parentNode;
          const children = parent.children;
          const inertedSiblings = /* @__PURE__ */ new Set();
          for (let j4 = 0; j4 < children.length; j4++) {
            const sibling = children[j4];
            if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
              continue;
            }
            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
            }
          }
          element[_siblingsToRestore] = inertedSiblings;
          const mo = new MutationObserver(this[_handleMutations].bind(this));
          element[_parentMO] = mo;
          let parentToObserve = parent;
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
          const target = mutation.target.host || mutation.target;
          const idx = target === document.body ? parents.length : parents.indexOf(target);
          const inertedChild = parents[idx - 1];
          const inertedSiblings = inertedChild[_siblingsToRestore];
          for (let i5 = 0; i5 < mutation.removedNodes.length; i5++) {
            const sibling = mutation.removedNodes[i5];
            if (sibling === inertedChild) {
              console.info("Detected removal of the top Blocking Element.");
              this.pop();
              return;
            }
            if (inertedSiblings.has(sibling)) {
              sibling.inert = false;
              inertedSiblings.delete(sibling);
            }
          }
          for (let i5 = 0; i5 < mutation.addedNodes.length; i5++) {
            const sibling = mutation.addedNodes[i5];
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
        let current = element;
        while (current && current !== document.body) {
          if (current.nodeType === Node.ELEMENT_NODE) {
            parents.push(current);
          }
          if (current.assignedSlot) {
            while (current = current.assignedSlot) {
              parents.push(current);
            }
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
        const result = /* @__PURE__ */ new Set();
        let i5;
        let j4;
        let nodes;
        const slots = shadowRoot.querySelectorAll("slot");
        if (slots.length && slots[0].assignedNodes) {
          for (i5 = 0; i5 < slots.length; i5++) {
            nodes = slots[i5].assignedNodes({
              flatten: true
            });
            for (j4 = 0; j4 < nodes.length; j4++) {
              if (nodes[j4].nodeType === Node.ELEMENT_NODE) {
                result.add(nodes[j4]);
              }
            }
          }
        }
        return result;
      }
    }
    document.$blockingElements = new BlockingElementsImpl();
  })();

  // ../node_modules/.pnpm/wicg-inert@3.1.2/node_modules/wicg-inert/dist/inert.esm.js
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  (function() {
    if (typeof window === "undefined") {
      return;
    }
    var slice = Array.prototype.slice;
    var matches2 = Element.prototype.matches || Element.prototype.msMatchesSelector;
    var _focusableElementsString = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(",");
    var InertRoot = function() {
      function InertRoot2(rootElement, inertManager2) {
        _classCallCheck(this, InertRoot2);
        this._inertManager = inertManager2;
        this._rootElement = rootElement;
        this._managedNodes = /* @__PURE__ */ new Set();
        if (this._rootElement.hasAttribute("aria-hidden")) {
          this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden");
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute("aria-hidden", "true");
        this._makeSubtreeUnfocusable(this._rootElement);
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
      }
      _createClass(InertRoot2, [{
        key: "destructor",
        value: function destructor() {
          this._observer.disconnect();
          if (this._rootElement) {
            if (this._savedAriaHidden !== null) {
              this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden);
            } else {
              this._rootElement.removeAttribute("aria-hidden");
            }
          }
          this._managedNodes.forEach(function(inertNode) {
            this._unmanageNode(inertNode.node);
          }, this);
          this._observer = /** @type {?} */
          null;
          this._rootElement = /** @type {?} */
          null;
          this._managedNodes = /** @type {?} */
          null;
          this._inertManager = /** @type {?} */
          null;
        }
        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */
      }, {
        key: "_makeSubtreeUnfocusable",
        /**
         * @param {!Node} startNode
         */
        value: function _makeSubtreeUnfocusable(startNode) {
          var _this2 = this;
          composedTreeWalk(startNode, function(node2) {
            return _this2._visitNode(node2);
          });
          var activeElement = document.activeElement;
          if (!document.body.contains(startNode)) {
            var node = startNode;
            var root2 = void 0;
            while (node) {
              if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                root2 = /** @type {!ShadowRoot} */
                node;
                break;
              }
              node = node.parentNode;
            }
            if (root2) {
              activeElement = root2.activeElement;
            }
          }
          if (startNode.contains(activeElement)) {
            activeElement.blur();
            if (activeElement === document.activeElement) {
              document.body.focus();
            }
          }
        }
        /**
         * @param {!Node} node
         */
      }, {
        key: "_visitNode",
        value: function _visitNode(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = (
            /** @type {!HTMLElement} */
            node
          );
          if (element !== this._rootElement && element.hasAttribute("inert")) {
            this._adoptInertRoot(element);
          }
          if (matches2.call(element, _focusableElementsString) || element.hasAttribute("tabindex")) {
            this._manageNode(element);
          }
        }
        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_manageNode",
        value: function _manageNode(node) {
          var inertNode = this._inertManager.register(node, this);
          this._managedNodes.add(inertNode);
        }
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_unmanageNode",
        value: function _unmanageNode(node) {
          var inertNode = this._inertManager.deregister(node, this);
          if (inertNode) {
            this._managedNodes["delete"](inertNode);
          }
        }
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: "_unmanageSubtree",
        value: function _unmanageSubtree(startNode) {
          var _this3 = this;
          composedTreeWalk(startNode, function(node) {
            return _this3._unmanageNode(node);
          });
        }
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: "_adoptInertRoot",
        value: function _adoptInertRoot(node) {
          var inertSubroot = this._inertManager.getInertRoot(node);
          if (!inertSubroot) {
            this._inertManager.setInert(node, true);
            inertSubroot = this._inertManager.getInertRoot(node);
          }
          inertSubroot.managedNodes.forEach(function(savedInertNode) {
            this._manageNode(savedInertNode.node);
          }, this);
        }
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_onMutation",
        value: function _onMutation(records, self2) {
          records.forEach(function(record) {
            var target = (
              /** @type {!HTMLElement} */
              record.target
            );
            if (record.type === "childList") {
              slice.call(record.addedNodes).forEach(function(node) {
                this._makeSubtreeUnfocusable(node);
              }, this);
              slice.call(record.removedNodes).forEach(function(node) {
                this._unmanageSubtree(node);
              }, this);
            } else if (record.type === "attributes") {
              if (record.attributeName === "tabindex") {
                this._manageNode(target);
              } else if (target !== this._rootElement && record.attributeName === "inert" && target.hasAttribute("inert")) {
                this._adoptInertRoot(target);
                var inertSubroot = this._inertManager.getInertRoot(target);
                this._managedNodes.forEach(function(managedNode) {
                  if (target.contains(managedNode.node)) {
                    inertSubroot._manageNode(managedNode.node);
                  }
                });
              }
            }
          }, this);
        }
      }, {
        key: "managedNodes",
        get: function get() {
          return new Set(this._managedNodes);
        }
        /** @return {boolean} */
      }, {
        key: "hasSavedAriaHidden",
        get: function get() {
          return this._savedAriaHidden !== null;
        }
        /** @param {?string} ariaHidden */
      }, {
        key: "savedAriaHidden",
        set: function set(ariaHidden) {
          this._savedAriaHidden = ariaHidden;
        },
        get: function get() {
          return this._savedAriaHidden;
        }
      }]);
      return InertRoot2;
    }();
    var InertNode = function() {
      function InertNode2(node, inertRoot) {
        _classCallCheck(this, InertNode2);
        this._node = node;
        this._overrodeFocusMethod = false;
        this._inertRoots = /* @__PURE__ */ new Set([inertRoot]);
        this._savedTabIndex = null;
        this._destroyed = false;
        this.ensureUntabbable();
      }
      _createClass(InertNode2, [{
        key: "destructor",
        value: function destructor() {
          this._throwIfDestroyed();
          if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var element = (
              /** @type {!HTMLElement} */
              this._node
            );
            if (this._savedTabIndex !== null) {
              element.setAttribute("tabindex", this._savedTabIndex);
            } else {
              element.removeAttribute("tabindex");
            }
            if (this._overrodeFocusMethod) {
              delete element.focus;
            }
          }
          this._node = /** @type {?} */
          null;
          this._inertRoots = /** @type {?} */
          null;
          this._destroyed = true;
        }
        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */
      }, {
        key: "_throwIfDestroyed",
        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function _throwIfDestroyed() {
          if (this.destroyed) {
            throw new Error("Trying to access destroyed InertNode");
          }
        }
        /** @return {boolean} */
      }, {
        key: "ensureUntabbable",
        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function ensureUntabbable() {
          if (this.node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = (
            /** @type {!HTMLElement} */
            this.node
          );
          if (matches2.call(element, _focusableElementsString)) {
            if (
              /** @type {!HTMLElement} */
              element.tabIndex === -1 && this.hasSavedTabIndex
            ) {
              return;
            }
            if (element.hasAttribute("tabindex")) {
              this._savedTabIndex = /** @type {!HTMLElement} */
              element.tabIndex;
            }
            element.setAttribute("tabindex", "-1");
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.focus = function() {
              };
              this._overrodeFocusMethod = true;
            }
          } else if (element.hasAttribute("tabindex")) {
            this._savedTabIndex = /** @type {!HTMLElement} */
            element.tabIndex;
            element.removeAttribute("tabindex");
          }
        }
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "addInertRoot",
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
        key: "removeInertRoot",
        value: function removeInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots["delete"](inertRoot);
          if (this._inertRoots.size === 0) {
            this.destructor();
          }
        }
      }, {
        key: "destroyed",
        get: function get() {
          return (
            /** @type {!InertNode} */
            this._destroyed
          );
        }
      }, {
        key: "hasSavedTabIndex",
        get: function get() {
          return this._savedTabIndex !== null;
        }
        /** @return {!Node} */
      }, {
        key: "node",
        get: function get() {
          this._throwIfDestroyed();
          return this._node;
        }
        /** @param {?number} tabIndex */
      }, {
        key: "savedTabIndex",
        set: function set(tabIndex) {
          this._throwIfDestroyed();
          this._savedTabIndex = tabIndex;
        },
        get: function get() {
          this._throwIfDestroyed();
          return this._savedTabIndex;
        }
      }]);
      return InertNode2;
    }();
    var InertManager = function() {
      function InertManager2(document2) {
        _classCallCheck(this, InertManager2);
        if (!document2) {
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        }
        this._document = document2;
        this._managedNodes = /* @__PURE__ */ new Map();
        this._inertRoots = /* @__PURE__ */ new Map();
        this._observer = new MutationObserver(this._watchForInert.bind(this));
        addInertStyle(document2.head || document2.body || document2.documentElement);
        if (document2.readyState === "loading") {
          document2.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }
      _createClass(InertManager2, [{
        key: "setInert",
        value: function setInert(root2, inert) {
          if (inert) {
            if (this._inertRoots.has(root2)) {
              return;
            }
            var inertRoot = new InertRoot(root2, this);
            root2.setAttribute("inert", "");
            this._inertRoots.set(root2, inertRoot);
            if (!this._document.body.contains(root2)) {
              var parent = root2.parentNode;
              while (parent) {
                if (parent.nodeType === 11) {
                  addInertStyle(parent);
                }
                parent = parent.parentNode;
              }
            }
          } else {
            if (!this._inertRoots.has(root2)) {
              return;
            }
            var _inertRoot = this._inertRoots.get(root2);
            _inertRoot.destructor();
            this._inertRoots["delete"](root2);
            root2.removeAttribute("inert");
          }
        }
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: "getInertRoot",
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
        key: "register",
        value: function register(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (inertNode !== void 0) {
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
        key: "deregister",
        value: function deregister(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (!inertNode) {
            return null;
          }
          inertNode.removeInertRoot(inertRoot);
          if (inertNode.destroyed) {
            this._managedNodes["delete"](node);
          }
          return inertNode;
        }
        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: "_onDocumentLoaded",
        value: function _onDocumentLoaded() {
          var inertElements = slice.call(this._document.querySelectorAll("[inert]"));
          inertElements.forEach(function(inertElement) {
            this.setInert(inertElement, true);
          }, this);
          this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
        }
        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_watchForInert",
        value: function _watchForInert(records, self2) {
          var _this = this;
          records.forEach(function(record) {
            switch (record.type) {
              case "childList":
                slice.call(record.addedNodes).forEach(function(node) {
                  if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }
                  var inertElements = slice.call(node.querySelectorAll("[inert]"));
                  if (matches2.call(node, "[inert]")) {
                    inertElements.unshift(node);
                  }
                  inertElements.forEach(function(inertElement) {
                    this.setInert(inertElement, true);
                  }, _this);
                }, _this);
                break;
              case "attributes":
                if (record.attributeName !== "inert") {
                  return;
                }
                var target = (
                  /** @type {!HTMLElement} */
                  record.target
                );
                var inert = target.hasAttribute("inert");
                _this.setInert(target, inert);
                break;
            }
          }, this);
        }
      }]);
      return InertManager2;
    }();
    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        var element = (
          /** @type {!HTMLElement} */
          node
        );
        if (callback) {
          callback(element);
        }
        var shadowRoot = (
          /** @type {!HTMLElement} */
          element.shadowRoot
        );
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback, shadowRoot);
          return;
        }
        if (element.localName == "content") {
          var content = (
            /** @type {!HTMLContentElement} */
            element
          );
          var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
          for (var i5 = 0; i5 < distributedNodes.length; i5++) {
            composedTreeWalk(distributedNodes[i5], callback, shadowRootAncestor);
          }
          return;
        }
        if (element.localName == "slot") {
          var slot = (
            /** @type {!HTMLSlotElement} */
            element
          );
          var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
          for (var _i = 0; _i < _distributedNodes.length; _i++) {
            composedTreeWalk(_distributedNodes[_i], callback, shadowRootAncestor);
          }
          return;
        }
      }
      var child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback, shadowRootAncestor);
        child = child.nextSibling;
      }
    }
    function addInertStyle(node) {
      if (node.querySelector("style#inert-style, link#inert-style")) {
        return;
      }
      var style = document.createElement("style");
      style.setAttribute("id", "inert-style");
      style.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n";
      node.appendChild(style);
    }
    if (!HTMLElement.prototype.hasOwnProperty("inert")) {
      var inertManager = new InertManager(document);
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: true,
        /** @this {!HTMLElement} */
        get: function get() {
          return this.hasAttribute("inert");
        },
        /** @this {!HTMLElement} */
        set: function set(inert) {
          inertManager.setInert(this, inert);
        }
      });
    }
  })();

  // ../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
  function r3(e3) {
    var t3, f5, n2 = "";
    if ("string" == typeof e3 || "number" == typeof e3)
      n2 += e3;
    else if ("object" == typeof e3)
      if (Array.isArray(e3)) {
        var o4 = e3.length;
        for (t3 = 0; t3 < o4; t3++)
          e3[t3] && (f5 = r3(e3[t3])) && (n2 && (n2 += " "), n2 += f5);
      } else
        for (f5 in e3)
          e3[f5] && (n2 && (n2 += " "), n2 += f5);
    return n2;
  }
  function clsx() {
    for (var e3, t3, f5 = 0, n2 = "", o4 = arguments.length; f5 < o4; f5++)
      (e3 = arguments[f5]) && (t3 = r3(e3)) && (n2 && (n2 += " "), n2 += t3);
    return n2;
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-document-class.js
  function getDocument(element) {
    return element?.ownerDocument ?? document ?? window.document ?? globalThis.document;
  }
  var useDocumentClass = monitored(function useDocumentClass2(className, active, element) {
    element ??= getDocument().documentElement;
    className = clsx(className);
    _(() => {
      if (element) {
        if (active !== false) {
          element.classList.add(className);
          return () => element.classList.remove(className);
        }
      }
    }, [className, active, element]);
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-blocking-element.js
  function blockingElements() {
    return getDocument().$blockingElements;
  }
  var useBlockingElement = monitored(function useBlockingElement2({ activeElementParameters: { getDocument: getDocument2, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const stableGetTarget = useStableCallback(getTarget);
    useActiveElement({
      activeElementParameters: {
        getDocument: getDocument2,
        onActiveElementChange,
        onWindowFocusedChange,
        onLastActiveElementChange: useStableCallback((e3, prev, reason) => {
          onLastActiveElementChange?.(e3, prev, reason);
          if (e3) {
            if (enabled)
              setLastActiveWhenOpen(e3, reason);
            else
              setLastActiveWhenClosed(e3, reason);
          }
        })
      }
    });
    const [getTop, setTop] = usePassiveState(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
    A2(() => {
      const target = stableGetTarget();
      if (enabled) {
        try {
          blockingElements().push(target);
          setTop(target);
          return () => {
            blockingElements().remove(target);
          };
        } catch (ex) {
          console.error(ex);
        }
      }
    }, [enabled]);
    return { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/use-focus-trap.js
  var useFocusTrap = monitored(function useFocusTrap2({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }) {
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    _(() => {
      if (trapActive) {
        let top = getTop();
        const lastFocusedInThisComponent = getLastActiveWhenOpen();
        if (false) {
          focusSelf(lastFocusedInThisComponent, () => lastFocusedInThisComponent);
        } else {
          top ??= refElementReturn.getElement();
          console.assert(!!top);
          if (top)
            focusSelf(top, () => findFirstFocusable(top));
        }
      } else {
        const lastActive = getLastActiveWhenClosed();
        let currentFocus = document.activeElement;
        let top = refElementReturn.getElement();
        if (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus)) {
          if (lastActive)
            focusOpener(lastActive);
        }
      }
    }, [trapActive]);
    const { getElement } = refElementReturn;
    const { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen } = useBlockingElement({
      activeElementParameters,
      blockingElementParameters: {
        enabled: trapActive && !onlyMoveFocus,
        getTarget: getElement
      }
    });
    return {
      props: useTagProps({ "aria-modal": trapActive ? "true" : void 0 }, "data-focus-trap")
    };
  });
  function findFirstFocusable(element) {
    return findFirstCondition(element, (node) => node instanceof Element && isFocusable(node));
  }
  function findFirstCondition(element, filter) {
    if (element && filter(element))
      return element;
    console.assert(!!element);
    element ??= document.body;
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
    const firstFocusable = treeWalker.firstChild();
    return firstFocusable;
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/use-grid-navigation-selection.js
  var useGridNavigationSelection = monitored(function useGridNavigationSelection2({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void2 }) {
    const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, props, rovingTabIndexReturn, typeaheadNavigationReturn } = useGridNavigation({
      gridNavigationParameters,
      linearNavigationParameters,
      managedChildrenReturn,
      rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
      typeaheadNavigationParameters,
      paginatedChildrenParameters,
      rearrangeableChildrenReturn,
      refElementReturn
    });
    const { childrenHaveFocusParameters, context: { singleSelectionContext, multiSelectionContext }, multiSelectionReturn, propsStable, singleSelectionReturn, ...void1 } = useSelection({
      managedChildrenReturn,
      rovingTabIndexReturn,
      singleSelectionParameters,
      multiSelectionParameters,
      childrenHaveFocusReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      context: useMemoObject({
        gridNavigationRowContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext
      }),
      childrenHaveFocusParameters,
      linearNavigationReturn,
      managedChildrenParameters,
      props: useMergedProps(props, propsStable),
      rovingTabIndexReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn
    };
  });
  var useGridNavigationSelectionRow = monitored(function useGridNavigationSelectionRow2({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, singleSelectionChildReturn, multiSelectionChildReturn, pressParameters: { onPressSync, ...void4 }, ...void2 } = useSelectionChild({ info: mcp1, context, singleSelectionChildParameters, multiSelectionChildParameters });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentParameters, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow({ context, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
      context: contextGridNavigation,
      linearNavigationReturn,
      info: {
        getLocallyTabbable,
        getSingleSelected,
        singleSelected,
        setLocallyTabbable,
        setLocalSingleSelected,
        focusSelf,
        getMultiSelected,
        setSelectedFromParent,
        getMultiSelectionDisabled
      },
      managedChildrenParameters,
      pressParameters: { onPressSync, excludeSpace },
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
      props: useMergedProps(propsGridNavigation, propsSelection),
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      textContentParameters,
      typeaheadNavigationReturn
    };
  });
  var useGridNavigationSelectionCell = monitored(function useGridNavigationSelectionCell2(p4) {
    return useGridNavigationCell(p4);
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-detail/use-list-navigation-selection.js
  var useListNavigationSelection = monitored(function useListNavigationSelection2({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void3 }) {
    const { context: contextSS, propsStable, ...retSS } = useSelection({
      childrenHaveFocusReturn,
      rovingTabIndexReturn: { setTabbableIndex: useStableCallback((...a4) => {
        rovingTabIndexReturn.setTabbableIndex(...a4);
      }) },
      managedChildrenReturn,
      singleSelectionParameters,
      multiSelectionParameters
    });
    const { context: contextLN, props, rovingTabIndexReturn, ...retLN } = useListNavigation({
      rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
      linearNavigationParameters,
      paginatedChildrenParameters,
      typeaheadNavigationParameters,
      managedChildrenReturn,
      refElementReturn,
      rearrangeableChildrenReturn
    });
    assertEmptyObject(void3);
    return {
      rovingTabIndexReturn,
      ...retSS,
      ...retLN,
      context: useMemoObject({
        ...contextLN,
        ...contextSS
      }),
      props: useMergedProps(props, propsStable)
    };
  });
  var useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild2({ info: { index, untabbable, ...void2 }, context, refElementReturn, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, multiSelectionChildReturn, singleSelectionChildReturn, props: propsSS, pressParameters: { onPressSync }, ...void9 } = useSelectionChild({
      info: { index, untabbable },
      context,
      multiSelectionChildParameters,
      singleSelectionChildParameters
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentParameters, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
      info: { index, untabbable },
      context,
      refElementReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void6);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
      hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
      pressParameters: { onPressSync, excludeSpace },
      info: { ...infoSS, ...infoLN },
      rovingTabIndexChildReturn,
      multiSelectionChildReturn,
      singleSelectionChildReturn,
      textContentParameters,
      propsChild: propsSS,
      propsTabbable: propsLN
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-text-content.js
  var useTextContent = function useTextContent2({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }) {
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    _(() => {
      const element = getElement();
      if (element) {
        const textContent = getText(element);
        if (textContent) {
          setTextContent(textContent);
        }
      }
    });
    return { textContentReturn: { getTextContent } };
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-children-have-focus.js
  var useChildrenHaveFocus = monitored(function useChildrenHaveFocus2(args) {
    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;
    const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e3) => {
      console.assert(anyFocused >= 0 && anyFocused <= 1);
      setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e3);
    }), returnZero, setTimeout);
    return {
      childrenHaveFocusReturn: { getAnyFocused },
      context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) })
    };
  });
  var useChildrenHaveFocusChild = monitored(function useChildrenHaveFocusChild2({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    return {
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e3) => {
          if (focused) {
            setFocusCount((p4) => (p4 ?? 0) + 1, e3);
          } else if (!focused && prev) {
            setFocusCount((p4) => (p4 ?? 0) - 1, e3);
          }
        })
      }
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-has-current-focus.js
  var useHasCurrentFocus = monitored(function useHasCurrentFocus2(args) {
    const { hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged }, refElementReturn: { getElement } } = args;
    useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
    const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, runImmediately);
    const onFocusIn = useCallback((e3) => {
      setFocusedInner(true, e3);
      setFocused(e3.target == getElement(), e3);
    }, []);
    const onFocusOut = useCallback((e3) => {
      setFocusedInner(false, e3);
      setFocused(false, e3);
    }, []);
    _(() => {
      return () => {
        setFocused(false, void 0);
        setFocusedInner(false, void 0);
      };
    }, []);
    const propsStable = F2({
      [onfocusin]: onFocusIn,
      [onfocusout]: onFocusOut
    });
    return {
      hasCurrentFocusReturn: {
        propsStable: propsStable.current,
        getCurrentFocused: getFocused,
        getCurrentFocusedInner: getFocusedInner
      }
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-use/use-grid-navigation-complete.js
  var useCompleteGridNavigation = monitored(function useCompleteGridNavigation2({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, ...void1 }) {
    assertEmptyObject(void1);
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i5) => {
      const child = getChildren().getAt(i5);
      if (child == null)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { refElementReturn, propsStable, ...void2 } = useRefElement({ refElementParameters });
    const { context: contextProcessing, indexDemangler, indexMangler, rearrange, reverse, shuffle: shuffle2, sort } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback(() => childrenHaveFocusReturn.getAnyFocused());
    const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, rovingTabIndexReturn, linearNavigationReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelection({
      gridNavigationParameters,
      singleSelectionParameters,
      multiSelectionParameters,
      paginatedChildrenParameters,
      refElementReturn,
      linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
      managedChildrenReturn: { getChildren },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      childrenHaveFocusReturn: { getAnyFocused },
      rearrangeableChildrenReturn: { indexDemangler, indexMangler }
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
    const c22 = useMemoObject({
      processedChildrenContext,
      ...contextProcessing
    });
    const context = useMemoObject({
      singleSelectionContext,
      multiSelectionContext,
      managedChildContext,
      rovingTabIndexContext,
      typeaheadNavigationContext,
      childrenHaveFocusChildContext,
      gridNavigationRowContext,
      contextProcessing: c22
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      contextChildren: context,
      contextProcessing: c22,
      props: useMergedProps(props, propsStable),
      refElementReturn,
      managedChildrenReturn,
      rovingTabIndexReturn,
      childrenHaveFocusReturn,
      linearNavigationReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn,
      rearrangeableChildrenReturn: { rearrange, reverse, shuffle: shuffle2, sort }
    };
  });
  var useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows2({ context, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, managedChildrenParameters }) {
    const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn } = useProcessedChildren({
      paginatedChildrenParameters,
      rearrangeableChildrenParameters,
      staggeredChildrenParameters,
      managedChildrenParameters,
      //refElementReturn: context.processedChildrenContext,
      context
    });
    return {
      context: contextRPS,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    };
  });
  var useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow2({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const isValidForNavigation = useCallback((i5) => {
      const child = getChildren().getAt(i5);
      if (child == null)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters: {} });
    const parameters = {
      rovingTabIndexParameters,
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      linearNavigationParameters: { isValidForLinearNavigation: isValidForNavigation, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, ...linearNavigationParameters },
      managedChildrenReturn: { getChildren },
      refElementReturn,
      context: contextIncomingForRowAsChildOfTable,
      info: { index, untabbable },
      //textContentReturn: { getTextContent: useStableCallback(() => textContentReturn.getTextContent()) },
      singleSelectionChildParameters,
      multiSelectionChildParameters
    };
    const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, textContentParameters: { onTextContentChange: otcc2 }, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p32, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = useGridNavigationSelectionRow(parameters);
    const { textContentReturn, ...void7 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
    const completeInfo = {
      getElement: refElementReturn.getElement,
      index,
      untabbable,
      ...infoRowReturn
    };
    const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const { managedChildReturn, ...void4 } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } });
    const context = useMemoObject({
      ...contextGNR,
      ...contextMC
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
      refElementReturn,
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: ocfc1,
        onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic3)
      }
    });
    const props = useMergedProps(propsStable, p32, hasCurrentFocusReturn.propsStable);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    return {
      pressParameters,
      hasCurrentFocusReturn,
      managedChildrenReturn,
      context,
      textContentReturn,
      managedChildReturn,
      linearNavigationReturn,
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      typeaheadNavigationReturn,
      refElementReturn,
      props
    };
  });
  var useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell2({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }) {
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentParameters: { onTextContentChange: otcc2 }, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSelectionCell({
      gridNavigationCellParameters,
      info: { index, untabbable },
      context,
      refElementReturn
      //textContentReturn: { getTextContent: useStableCallback((): string | null => textContentReturn.getTextContent()) },
    });
    const { textContentReturn, ...void3 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: null,
        ...hasCurrentFocusParameters
      },
      refElementReturn
    });
    const baseInfo = {
      getElement: refElementReturn.getElement,
      getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
      setLocallyTabbable: info2.setLocallyTabbable,
      focusSelf,
      index,
      untabbable
    };
    const { managedChildReturn } = useManagedChild({ context, info: { ...baseInfo, ...customUserInfo } });
    const props = useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable);
    return {
      props,
      refElementReturn,
      rovingTabIndexChildReturn,
      pressParameters: { excludeSpace: useStableCallback(() => es1?.() || false) },
      hasCurrentFocusReturn,
      managedChildReturn,
      textContentReturn
    };
  });
  function useCompleteGridNavigationDeclarative({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }) {
    const ret2 = useCompleteGridNavigation({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
        onSingleSelectedIndexChange: useStableCallback((...e3) => onSingleSelectedIndexChange?.(...e3)),
        ...singleSelectionParameters
      },
      ...normalGridNavParameters
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
      singleSelectionDeclarativeParameters,
      singleSelectionReturn: ret2.singleSelectionReturn
    });
    return ret2;
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-use/use-list-navigation-complete.js
  var useCompleteListNavigation = monitored(function useCompleteListNavigation2({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    //staggeredChildrenParameters,
    refElementParameters,
    ...void1
  }) {
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i5) => {
      const child = getChildren().getAt(i5);
      if (!child)
        return false;
      if (child.untabbable)
        return false;
      return true;
    }, []);
    const { propsStable: propsRef, refElementReturn } = useRefElement({ refElementParameters });
    const { context: contextProcessing, indexDemangler, indexMangler, rearrange, reverse, shuffle: shuffle2, sort } = useCreateProcessedChildrenContext();
    const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, props, ...void2 } = useListNavigationSelection({
      managedChildrenReturn: { getChildren },
      linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
      typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
      rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
      singleSelectionParameters,
      multiSelectionParameters,
      paginatedChildrenParameters,
      refElementReturn,
      childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) },
      rearrangeableChildrenReturn: { indexDemangler, indexMangler }
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const mcr = useManagedChildren({
      managedChildrenParameters: {
        onChildrenMountChange,
        ...mcp1
      }
    });
    const { context: { managedChildContext: managedChildRTIContext }, managedChildrenReturn } = mcr;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const { getAnyFocused } = childrenHaveFocusReturn;
    const contextChildren = useMemoObject({
      childrenHaveFocusChildContext,
      rovingTabIndexContext,
      singleSelectionContext,
      multiSelectionContext,
      typeaheadNavigationContext,
      managedChildContext: managedChildRTIContext
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
    return {
      contextChildren,
      contextProcessing: useMemoObject({
        processedChildrenContext,
        ...contextProcessing
      }),
      props: useMergedProps(props, propsRef),
      managedChildrenReturn,
      linearNavigationReturn,
      rovingTabIndexReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      typeaheadNavigationReturn,
      childrenHaveFocusReturn,
      refElementReturn,
      rearrangeableChildrenReturn: { reverse, shuffle: shuffle2, rearrange, sort }
    };
  });
  var useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren2({ context, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, managedChildrenParameters }) {
    const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn } = useProcessedChildren({
      paginatedChildrenParameters,
      rearrangeableChildrenParameters,
      staggeredChildrenParameters,
      managedChildrenParameters,
      //refElementReturn: context.processedChildrenContext,
      context
    });
    return {
      context: contextRPS,
      paginatedChildrenReturn,
      rearrangeableChildrenReturn,
      staggeredChildrenReturn
    };
  });
  var useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild2({
    info: { index, focusSelf, untabbable, ...customUserInfo },
    // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters: { getText, onTextContentChange: otcc1, ...void10 },
    refElementParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 },
    ...void1
  }) {
    const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, pressParameters: { excludeSpace, onPressSync, ...void2 }, textContentParameters: { onTextContentChange: otcc2, ...void8 }, singleSelectionChildReturn, multiSelectionChildReturn, info: infoFromListNav, rovingTabIndexChildReturn, propsChild, propsTabbable, ...void4 } = useListNavigationSelectionChild({
      info: { index, untabbable },
      context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
      singleSelectionChildParameters,
      multiSelectionChildParameters,
      refElementReturn
    });
    const { textContentReturn, ...void9 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
    const allStandardInfo = {
      index,
      focusSelf,
      getElement: refElementReturn.getElement,
      untabbable,
      ...infoFromListNav
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
      hasCurrentFocusParameters: {
        onCurrentFocusedInnerChanged,
        onCurrentFocusedChanged
      },
      refElementReturn
    });
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    assertEmptyObject(void10);
    return {
      propsChild: props,
      propsTabbable,
      pressParameters: {
        onPressSync,
        excludeSpace
      },
      textContentReturn,
      refElementReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      hasCurrentFocusReturn,
      managedChildReturn,
      rovingTabIndexChildReturn
    };
  });
  function useCompleteListNavigationDeclarative({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }) {
    const ret = useCompleteListNavigation({
      singleSelectionParameters: {
        initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
        // Needs to be a (stable) callback because of declaration order
        onSingleSelectedIndexChange: useStableCallback((...e3) => onSingleSelectedIndexChange?.(...e3)),
        ...singleSelectionParameters
      },
      ...rest
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
  }
  function useCompleteListNavigationChildDeclarative({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, info: i1, ...rest }) {
    const { multiSelectionChildParameters: { onMultiSelectChange }, info: i22, ...void2 } = useSelectionChildDeclarative({
      multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
      multiSelectionChildReturn: {
        changeMultiSelected: useStableCallback((...args) => {
          ret.multiSelectionChildReturn.changeMultiSelected(...args);
        })
      }
    });
    const ret = useCompleteListNavigationChild({
      multiSelectionChildParameters: {
        initiallyMultiSelected: multiSelected,
        onMultiSelectChange: useStableCallback((e3) => {
          onMultiSelectChange(e3);
        }),
        ...multiSelectionChildParameters
      },
      info: { ...i1, ...i22 },
      ...rest
    });
    const { multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, multiSelectionChildReturn };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-use/use-modal.js
  var useModal = monitored(function useModal2({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument: getDocument2, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }) {
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
      dismissParameters: { dismissActive: dismissActive && modalActive, onDismiss },
      escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth },
      activeElementParameters: { getDocument: getDocument2, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
      backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop },
      lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus }
    });
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: { onElementChange, onMount, onUnmount } });
    const { props } = useFocusTrap({
      focusTrapParameters: { trapActive: trapActive && modalActive, ...focusTrapParameters },
      activeElementParameters: { getDocument: getDocument2, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
      refElementReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    return {
      propsFocusContainer: useMergedProps(propsStable, props),
      refElementPopupReturn,
      refElementSourceReturn,
      propsStablePopup,
      propsStableSource
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+async-to-sync@624c049a849d0a02039c1ec14f78617394daabce/node_modules/async-to-sync/dist/index.js
  function isPromise(p4) {
    return p4 instanceof Promise;
  }
  var Unset3 = Symbol("Unset");
  function asyncToSync({ asyncInput, onInvoke, onInvoked, onFinally: onFinallyAny, onReject, onResolve, onHasError, onHasResult, onError, onReturnValue, capture, onAsyncDebounce, onSyncDebounce, onPending, throttle, wait }) {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture = Unset3;
    const onFinally = () => {
      onFinallyAny?.();
      onPending?.(pending = false);
      let nothingElseToDo = !asyncDebouncing;
      onAsyncDebounce?.(asyncDebouncing = false);
      if (nothingElseToDo) {
      } else {
        console.assert(currentCapture !== Unset3);
        if (currentCapture != Unset3) {
          onSyncDebounce?.(syncDebouncing = true);
          syncDebounced();
        }
      }
    };
    const sync = (...args) => {
      onPending?.(pending = true);
      console.assert(syncDebouncing == false);
      onHasError?.(null);
      onHasResult?.(null);
      let promiseOrReturn;
      let hadSyncError = false;
      try {
        onInvoke?.();
        promiseOrReturn = asyncInput(...args);
        onHasError?.(false);
      } catch (ex) {
        hadSyncError = true;
        onError?.(ex);
        onInvoked?.("throw");
      }
      if (isPromise(promiseOrReturn)) {
        onInvoked?.("async");
        promiseOrReturn.then((r4) => {
          onResolve?.();
          onHasResult?.(true);
          onReturnValue?.(r4);
          return r4;
        }).catch((e3) => {
          onReject?.();
          onHasError?.(true);
          onError?.(e3);
          return e3;
        }).finally(onFinally);
      } else {
        onInvoked?.("sync");
        if (!hadSyncError) {
          onResolve?.();
          onHasResult?.(true);
          onHasError?.(false);
        } else {
          onReject?.();
          onHasResult?.(false);
          onHasError?.(true);
        }
        onReturnValue?.(promiseOrReturn);
        onPending?.(pending = false);
        onFinally();
      }
    };
    const lodashOptions = {
      leading: !wait,
      trailing: true
    };
    if (throttle) {
      if (wait == null || wait < throttle)
        wait = throttle;
      lodashOptions.maxWait = throttle;
    }
    const syncDebounced = debounce_default(() => {
      onSyncDebounce?.(syncDebouncing = false);
      if (!pending) {
        console.assert(currentCapture != Unset3);
        sync(...currentCapture);
      } else {
        onAsyncDebounce?.(asyncDebouncing = true);
      }
    }, wait || void 0, lodashOptions);
    return {
      syncOutput: (...args) => {
        currentCapture = capture?.(...args) ?? [];
        onSyncDebounce?.(syncDebouncing = true);
        syncDebounced();
      },
      flushSyncDebounce: () => {
        syncDebounced.flush();
      },
      cancelSyncDebounce: () => {
        syncDebounced.cancel();
      }
    };
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-async.js
  function identityCapture(...t3) {
    return t3;
  }
  var AsyncFunction = async function() {
  }.constructor;
  var useAsync = monitored(function useAsync2(asyncHandler, options) {
    const [pending, setPending, _getPending] = useState(false);
    const [result, setResult, _getResult] = useState(void 0);
    const [error, setError, _getError] = useState(void 0);
    const [hasError, setHasError, _getHasError] = useState(false);
    const [hasResult, setHasResult, _getHasResult] = useState(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    const [invocationResult, setInvocationResult] = useState(asyncHandler instanceof AsyncFunction ? "async" : null);
    const [runCount, setRunCount] = useState(0);
    const [settleCount, setSettleCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);
    const incrementCallCount = useCallback(() => {
      setRunCount((c4) => c4 + 1);
    }, []);
    const incrementResolveCount = useCallback(() => {
      setResolveCount((c4) => c4 + 1);
    }, []);
    const incrementRejectCount = useCallback(() => {
      setRejectCount((c4) => c4 + 1);
    }, []);
    const incrementFinallyCount = useCallback(() => {
      setSettleCount((c4) => c4 + 1);
    }, []);
    let { throttle, debounce: debounce2, capture: captureUnstable } = options ?? {};
    const captureStable = useStableCallback(captureUnstable ?? identityCapture);
    const asyncHandlerStable = useStableCallback(asyncHandler ?? identity_default);
    const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = q2(() => {
      return asyncToSync({
        asyncInput: asyncHandlerStable,
        capture: captureStable,
        onAsyncDebounce: setAsyncDebouncing,
        onError: setError,
        onPending: setPending,
        onReturnValue: setResult,
        onSyncDebounce: setSyncDebouncing,
        onHasError: setHasError,
        onHasResult: setHasResult,
        onInvoked: setInvocationResult,
        onInvoke: incrementCallCount,
        onFinally: incrementFinallyCount,
        onReject: incrementRejectCount,
        onResolve: incrementResolveCount,
        throttle: options?.throttle ?? void 0,
        wait: options?.debounce ?? void 0
      });
    }, [throttle, debounce2]);
    _(() => {
      return () => cancelSyncDebounce();
    }, [cancelSyncDebounce]);
    return {
      syncHandler: syncOutput,
      pending,
      result,
      error,
      hasError: hasError || false,
      hasResult: hasResult || false,
      resolveCount,
      rejectCount,
      settleCount,
      debouncingAsync: asyncDebouncing,
      debouncingSync: syncDebouncing,
      invocationResult,
      callCount: runCount,
      flushDebouncedPromise: flushSyncDebounce
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-async-handler.js
  var useAsyncHandler = monitored(function useAsyncHandler2({ asyncHandler, capture: originalCapture, ...restAsyncOptions }) {
    const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(void 0);
    const [hasCapture, setHasCapture] = useState(false);
    const capture = useStableCallback((e3) => {
      const captured = originalCapture(e3);
      setCurrentCapture(captured);
      setHasCapture(true);
      return [captured, e3];
    });
    return {
      getCurrentCapture,
      currentCapture,
      hasCapture,
      ...useAsync(asyncHandler, { capture, ...restAsyncOptions })
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-use/use-press.js
  function pressLog(...args) {
    if (window.__log_press_events)
      console.log(...args);
  }
  function supportsPointerEvents() {
    return "onpointerup" in window;
  }
  var justHandledManualClickEvent = false;
  var manualClickTimeout1 = null;
  var manualClickTimeout2 = null;
  function onHandledManualClickEvent() {
    pressLog("manual-click");
    justHandledManualClickEvent = true;
    if (manualClickTimeout1 != null)
      clearTimeout(manualClickTimeout1);
    if (manualClickTimeout2 != null)
      clearTimeout(manualClickTimeout2);
    manualClickTimeout1 = setTimeout(() => {
      pressLog("manual-click halfway");
      manualClickTimeout2 = setTimeout(() => {
        pressLog("manual-click clear");
        justHandledManualClickEvent = false;
      }, 50);
    }, 200);
  }
  document.addEventListener("click", (e3) => {
    if (justHandledManualClickEvent) {
      justHandledManualClickEvent = false;
      manualClickTimeout1 != null && clearTimeout(manualClickTimeout1);
      manualClickTimeout2 != null && clearTimeout(manualClickTimeout2);
      e3.preventDefault();
      e3.stopPropagation();
    }
  }, { capture: true });
  var usePress = monitored(function usePress2(args) {
    const { refElementReturn: { getElement }, pressParameters: { focusSelf, onPressSync, allowRepeatPresses, longPressThreshold, excludeEnter: ee, excludePointer: ep, excludeSpace: es, onPressingChange: opc } } = args;
    const excludeEnter = useStableCallback(ee ?? returnFalse);
    const excludeSpace = useStableCallback(es ?? returnFalse);
    const excludePointer = useStableCallback(ep ?? returnFalse);
    const onPressingChange = useStableCallback(opc ?? noop_default);
    const [getIsPressing, setIsPressing] = usePassiveState(onPressingChange, returnFalse);
    const hasPressEvent = onPressSync != null;
    const [longPress, setLongPress] = useState(null);
    const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
    const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
    const [hovering, setHovering, getHovering] = useState(false);
    const onTouchStart = useStableCallback((e3) => {
      e3.preventDefault();
      e3.stopPropagation();
      setIsPressing(true, e3);
      setPointerDownStartedHere(true);
      setHovering(true);
      setLongPress(false);
      const element = getElement();
      if (element)
        focusSelf(element);
    });
    const onTouchMove = useCallback((e3) => {
      pressLog("touchmove", e3);
      e3.preventDefault();
      e3.stopPropagation();
      const element = getElement();
      const touch = e3.touches[0];
      const offsets = [
        [0, 0],
        [-touch.radiusX || 0, -touch.radiusY || 0],
        [+touch.radiusX || 0, -touch.radiusY || 0],
        [-touch.radiusX || 0, +touch.radiusY || 0],
        [+touch.radiusX || 0, +touch.radiusY || 0]
      ];
      let hoveringAtAnyPoint = false;
      for (const [x4, y4] of offsets) {
        const elementAtTouch = document.elementFromPoint((touch?.clientX ?? 0) + x4, (touch?.clientY ?? 0) + y4);
        hoveringAtAnyPoint ||= element?.contains(elementAtTouch) ?? false;
      }
      setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e3);
      setHovering(hoveringAtAnyPoint);
    }, []);
    const preventClickEventsOnIosSafari = useCallback((e3) => {
      e3.preventDefault();
      e3.stopPropagation();
    }, []);
    const onTouchEnd = useCallback((e3) => {
      pressLog("touchend", e3);
      e3.preventDefault();
      e3.stopPropagation();
      const hovering2 = getHovering();
      const pointerDownStartedHere2 = getPointerDownStartedHere();
      if (pointerDownStartedHere2 && hovering2) {
        onHandledManualClickEvent();
        handlePress(e3);
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setIsPressing(false, e3);
    }, []);
    const onPointerDown = useStableCallback((e3) => {
      pressLog("pointerdown", e3);
      if (!excludePointer()) {
        if (e3.buttons & 1) {
          e3.preventDefault();
          e3.stopPropagation();
          setIsPressing(true, e3);
          setPointerDownStartedHere(true);
          setHovering(true);
          setLongPress(false);
          const element = getElement();
          if (element)
            focusSelf(element);
        }
      }
    });
    const onPointerMove = useStableCallback((e3) => {
      pressLog("pointermove", e3);
      let listeningForPress = getPointerDownStartedHere();
      if (!(e3.buttons & 1))
        setPointerDownStartedHere(listeningForPress = false);
      if (listeningForPress) {
        const element = getElement();
        const elementAtPointer = document.elementFromPoint(e3.clientX, e3.clientY);
        const hovering2 = element == elementAtPointer || element?.contains(elementAtPointer) || false;
        setHovering(hovering2);
        setIsPressing(hovering2 && getPointerDownStartedHere(), e3);
      }
    });
    const onPointerUp = useCallback((e3) => {
      pressLog("pointerup", e3);
      const hovering2 = getHovering();
      const pointerDownStartedHere2 = getPointerDownStartedHere();
      if (!excludePointer()) {
        if (pointerDownStartedHere2 && hovering2) {
          onHandledManualClickEvent();
          handlePress(e3);
          e3.preventDefault();
          e3.stopPropagation();
        }
      }
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setLongPress(false);
      setIsPressing(false, e3);
    }, []);
    const onPointerEnter = useCallback((_e) => {
      pressLog("pointerenter", _e);
      setHovering(true);
    }, []);
    const onPointerLeave = useCallback((_e) => {
      pressLog("pointerleave", _e);
      setHovering(false);
      setLongPress(false);
    }, []);
    useTimeout({
      callback: () => {
        const element = getElement();
        setLongPress(pointerDownStartedHere && getHovering());
        if (element && pointerDownStartedHere && getHovering()) {
          focusSelf(element);
          if (longPressThreshold) {
            setWaitingForSpaceUp(false);
            setHovering(false);
            setPointerDownStartedHere(false);
          }
        }
      },
      timeout: longPressThreshold ?? null,
      triggerIndex: longPress ? true : pointerDownStartedHere && getHovering()
    });
    const handlePress = useStableCallback((e3) => {
      pressLog("handlepress", e3);
      setWaitingForSpaceUp(false);
      setHovering(false);
      setPointerDownStartedHere(false);
      setLongPress(null);
      if (onPressSync) {
        const element = getElement();
        if (element)
          focusSelf(element);
        e3.preventDefault();
        e3.stopPropagation();
        try {
          pulse();
        } finally {
          onPressSync(e3);
        }
      }
    });
    const onKeyDown = useStableCallback((e3) => {
      pressLog("keydown", e3);
      if (onPressSync) {
        if (e3.key == " " && !excludeSpace()) {
          setWaitingForSpaceUp(true);
          setIsPressing(true, e3);
          e3.preventDefault();
        }
        if (e3.key == "Enter" && !excludeEnter() && (!e3.repeat || (allowRepeatPresses ?? false))) {
          setIsPressing(true, e3);
          handlePress(e3);
          requestAnimationFrame(() => {
            setIsPressing(false, e3);
          });
        }
      }
    });
    const onKeyUp = useStableCallback((e3) => {
      pressLog("keyup", e3);
      const waitingForSpaceUp2 = getWaitingForSpaceUp();
      if (waitingForSpaceUp2 && e3.key == " " && !excludeSpace()) {
        handlePress(e3);
        setIsPressing(false, e3);
      }
    });
    const onClick = useStableCallback((e3) => {
      pressLog("click", e3);
      const element = getElement();
      if (onPressSync) {
        if (e3.detail > 1) {
          if ("stopImmediatePropagation" in e3)
            e3.stopImmediatePropagation();
          e3.stopPropagation();
        } else {
          if (justHandledManualClickEvent) {
            justHandledManualClickEvent = false;
          } else {
            console.assert(justHandledManualClickEvent == false, "Logic???");
            if (e3.target && element?.contains(e3.target)) {
              if (getHovering()) {
              } else {
                debugger;
                console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e3);
                console.assert(justHandledManualClickEvent == false, "Logic???");
              }
              setIsPressing(true, e3);
              requestAnimationFrame(() => {
                setIsPressing(false, e3);
              });
              handlePress(e3);
            }
          }
        }
      }
    });
    const onFocusOut = useStableCallback((e3) => {
      pressLog("focusout", e3);
      setWaitingForSpaceUp(false);
      setIsPressing(false, e3);
    });
    const p4 = supportsPointerEvents();
    return {
      pressReturn: {
        pressing: pointerDownStartedHere && hovering || waitingForSpaceUp || false,
        getIsPressing,
        longPress
      },
      props: {
        onKeyDown,
        onKeyUp,
        onTouchStart: !hasPressEvent ? void 0 : !p4 ? onTouchStart : void 0,
        onTouchCancel: !hasPressEvent ? void 0 : !p4 ? onTouchEnd : void 0,
        onTouchMove: !hasPressEvent ? void 0 : !p4 ? onTouchMove : void 0,
        onTouchEnd: !hasPressEvent ? void 0 : !p4 ? onTouchEnd : preventClickEventsOnIosSafari,
        onPointerDown: !hasPressEvent ? void 0 : p4 ? onPointerDown : void 0,
        onPointerCancel: !hasPressEvent ? void 0 : p4 ? onPointerDown : void 0,
        onPointerMove: !pointerDownStartedHere || !hasPressEvent ? void 0 : p4 ? onPointerMove : void 0,
        onPointerUp: !hasPressEvent ? void 0 : p4 ? onPointerUp : void 0,
        onPointerEnter: !hasPressEvent ? void 0 : p4 ? onPointerEnter : void 0,
        onPointerLeave: !hasPressEvent ? void 0 : p4 ? onPointerLeave : void 0,
        [onfocusout]: onFocusOut,
        onClick
      }
    };
  });
  var pulse = "vibrate" in navigator && navigator.vibrate instanceof Function ? () => navigator.vibrate(10) : () => {
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-use/use-random-id.js
  var useRandomId = monitored(function useRandomId2({ randomIdParameters: { prefix, otherReferencerProp } }) {
    const id = prefix + g2();
    useEnsureStability("useRandomId", prefix, id);
    const referencerElementProps = F2(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = F2({ id });
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
    return {
      propsReferencer: referencerElementProps.current,
      propsSource: sourceElementProps.current,
      randomIdReturn: {
        id
      }
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/component-use/use-random-dual-ids.js
  var useRandomDualIds = monitored(function useRandomDualIds2({ randomIdInputParameters, randomIdLabelParameters }) {
    const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId({ randomIdParameters: randomIdInputParameters });
    const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId({ randomIdParameters: randomIdLabelParameters });
    return {
      propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
      propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
      randomIdInputReturn,
      randomIdLabelReturn
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-draggable.js
  var useDraggable = monitored(function useDraggable2({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
    const [dragging, setDragging, getDragging] = useState(false);
    const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
    const onDragStart = (e3) => {
      setDragging(true);
      if (e3.dataTransfer) {
        e3.dataTransfer.effectAllowed = effectAllowed ?? "all";
        if (dragImage)
          e3.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
        const entries = Object.entries(data);
        for (const [mimeType, data2] of entries) {
          e3.dataTransfer.setData(mimeType, data2);
        }
      }
    };
    const onDragEnd = (e3) => {
      e3.preventDefault();
      setDragging(false);
      if (e3.dataTransfer) {
        if (e3.dataTransfer.dropEffect != "none") {
          setLastDropEffect(e3.dataTransfer.dropEffect);
        } else {
          setLastDropEffect(null);
        }
      }
    };
    const ret = {
      propsUnstable: {
        draggable: true,
        onDragStart,
        onDragEnd
      },
      dragging,
      getDragging,
      lastDropEffect,
      getLastDropEffect
    };
    return ret;
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-droppable.js
  var DroppableFileError = class extends Error {
    fileName;
    errorType;
    constructor(fileName, base) {
      super(base?.message ?? "An unspecified error occurred reading the file.");
      this.fileName = fileName;
      this.errorType = base?.name;
    }
  };
  var useDroppable = monitored(function useDroppable2({ effect }) {
    const [filesForConsideration, setFilesForConsideration] = useState(null);
    const [stringsForConsideration, setStringsForConsideration] = useState(null);
    const [droppedFiles, setDroppedFiles] = useState(null);
    const [droppedStrings, setDroppedStrings] = useState(null);
    const [dropError, setDropError] = useState(void 0);
    const dropPromisesRef = F2([]);
    const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
    const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
    _(() => {
      const currentPromiseIndex2 = getCurrentPromiseIndex();
      const promiseCount2 = getPromiseCount();
      if (promiseCount2 > 0) {
        if (currentPromiseIndex2 + 1 < promiseCount2) {
          setCurrentPromiseIndex((i5) => ++i5);
        }
      }
    }, [promiseCount]);
    _(() => {
      if (currentPromiseIndex >= 0) {
        const currentPromise = dropPromisesRef.current[currentPromiseIndex];
        currentPromise.then((info) => {
          if (info !== null) {
            const { files, strings } = info;
            setDroppedFiles(files);
            setDroppedStrings(strings);
          }
          const currentPromiseIndex2 = getCurrentPromiseIndex();
          const promiseCount2 = getPromiseCount();
          if (currentPromiseIndex2 + 1 < promiseCount2) {
            setCurrentPromiseIndex((i5) => ++i5);
          }
        });
      }
    }, [currentPromiseIndex]);
    const onDragEnter = useStableCallback((e3) => {
      e3.preventDefault();
      if (e3.dataTransfer) {
        e3.dataTransfer.dropEffect = effect ?? "move";
        const newMimeTypes = /* @__PURE__ */ new Set();
        const newFiles = new Array();
        for (const item of e3.dataTransfer?.items ?? []) {
          const { kind, type } = item;
          if (kind === "string") {
            newMimeTypes.add(type);
          } else if (kind === "file") {
            newFiles.push({ type: item.type });
          }
        }
        setFilesForConsideration(newFiles);
        setStringsForConsideration(newMimeTypes);
      }
    });
    const onDragLeave = useStableCallback((e3) => {
      e3.preventDefault();
      setFilesForConsideration(null);
      setStringsForConsideration(null);
    });
    const onDragOver = useStableCallback((e3) => {
      e3.preventDefault();
    });
    const onDrop = useStableCallback((e3) => {
      e3.preventDefault();
      setFilesForConsideration(null);
      setStringsForConsideration(null);
      const allPromises = new Array();
      const dropData = {};
      const dropFile = [];
      for (const item of e3.dataTransfer?.items ?? []) {
        const { kind, type } = item;
        if (kind === "string") {
          allPromises.push(new Promise((resolve, _reject) => item.getAsString(resolve)).then((str) => dropData[type] = str));
        } else if (kind === "file") {
          const file = item.getAsFile();
          if (file) {
            allPromises.push(new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = (_3) => {
                resolve();
                const data = reader.result;
                dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
              };
              reader.onerror = (_3) => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.onabort = (_3) => {
                reject(new DroppableFileError(file.name, reader.error));
              };
              reader.readAsArrayBuffer(file);
            }));
            dropFile.push();
          }
        }
      }
      dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
        setPromiseCount((i5) => ++i5);
        setDropError(null);
        return {
          strings: dropData,
          files: dropFile
        };
      }).catch((ex) => {
        debugger;
        setPromiseCount((i5) => ++i5);
        setDropError(ex);
        return null;
      }));
    });
    const propsStable = F2({ onDragEnter, onDragLeave, onDragOver, onDrop });
    return {
      propsStable: propsStable.current,
      filesForConsideration,
      stringsForConsideration,
      droppedFiles,
      droppedStrings,
      dropError
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-hide-scroll.js
  var useHideScroll = monitored(function useHideScroll2(hideScroll) {
    const [getScrollbarWidth, setScrollbarWidth] = usePassiveState(null);
    const [getScrollbarHeight, setScrollbarHeight] = usePassiveState(null);
    _(() => {
      if (hideScroll) {
        const originalScrollTop = document.documentElement.scrollTop;
        const originalScrollLeft = document.documentElement.scrollLeft;
        const widthWithScrollBar = document.documentElement.scrollWidth;
        const heightWithScrollBar = document.documentElement.scrollHeight;
        document.documentElement.classList.add("document-scroll-hidden");
        document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();
        const widthWithoutScrollBar = document.documentElement.scrollWidth;
        const heightWithoutScrollBar = document.documentElement.scrollHeight;
        let scrollbarWidth = widthWithoutScrollBar - widthWithScrollBar;
        let scrollbarHeight = heightWithoutScrollBar - heightWithScrollBar;
        if (scrollbarWidth > 80)
          scrollbarWidth = 0;
        if (scrollbarHeight > 80)
          scrollbarHeight = 0;
        document.documentElement.style.setProperty("--root-scrollbar-width", `${scrollbarWidth}px`);
        document.documentElement.style.setProperty("--root-scrollbar-height", `${scrollbarHeight}px`);
        document.documentElement.style.setProperty("--root-scrollstop-top", `${originalScrollTop}px`);
        document.documentElement.style.setProperty("--root-scrollstop-left", `${originalScrollLeft}px`);
        setScrollbarWidth(scrollbarWidth);
        setScrollbarHeight(scrollbarHeight);
        return () => {
          document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();
          if (document.documentElement.dataset["scrollHiders"] == "0") {
            document.documentElement.removeAttribute("data-scroll-hiders");
            document.documentElement.classList.remove("document-scroll-hidden");
            const originalScrollBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            document.documentElement.scrollTo({ top: originalScrollTop, left: originalScrollLeft, behavior: "auto" });
            document.documentElement.style.scrollBehavior = originalScrollBehavior;
          }
        };
      }
    }, [hideScroll]);
    return { getScrollbarWidth, getScrollbarHeight };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-imperative-props.js
  var templateElement = null;
  function htmlToElement(parent, html) {
    const document2 = parent.ownerDocument;
    templateElement ??= document2.createElement("template");
    templateElement.innerHTML = html.trim();
    return templateElement.content.firstChild;
  }
  var ImperativeElement = w4(N2(ImperativeElementU));
  var useImperativeProps = monitored(function useImperativeProps2({ refElementReturn: { getElement } }) {
    const currentImperativeProps = F2({ className: /* @__PURE__ */ new Set(), style: {}, children: null, html: null, others: {} });
    const hasClass = useCallback((cls) => {
      return currentImperativeProps.current.className.has(cls);
    }, []);
    const setClass = useCallback((cls, enabled) => {
      if (hasClass(cls) == !enabled) {
        getElement()?.classList[enabled ? "add" : "remove"](cls);
        currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
      }
    }, []);
    const setStyle = useCallback((prop, value) => {
      const element = getElement();
      if (element) {
        if (currentImperativeProps.current.style[prop] != value) {
          currentImperativeProps.current.style[prop] = value;
          if (prop.startsWith("--")) {
            if (value != null)
              element.style.setProperty(prop, `${value}`);
            else
              element.style.removeProperty(prop);
          } else {
            element.style[prop] = value ?? "";
          }
        }
      }
    }, []);
    const setChildren = useCallback((children) => {
      let e3 = getElement();
      if (e3 && currentImperativeProps.current.children != children) {
        currentImperativeProps.current.children = children;
        currentImperativeProps.current.html = null;
        e3.textContent = children;
      }
    }, []);
    const dangerouslySetInnerHTML = useCallback((children) => {
      let e3 = getElement();
      if (e3 && currentImperativeProps.current.html != children) {
        currentImperativeProps.current.children = null;
        currentImperativeProps.current.html = children;
        e3.innerHTML = children;
      }
    }, []);
    const dangerouslyAppendHTML = useCallback((children) => {
      let e3 = getElement();
      if (e3 && children) {
        const newChild = htmlToElement(e3, children);
        console.assert(newChild && newChild instanceof Node);
        if (newChild && newChild instanceof Node) {
          currentImperativeProps.current.children = null;
          currentImperativeProps.current.html ||= "";
          currentImperativeProps.current.html += children;
          e3.appendChild(newChild);
          return newChild;
        }
      }
      return null;
    }, []);
    const getAttribute = useCallback((prop) => {
      return currentImperativeProps.current.others[prop];
    }, []);
    const setAttribute = useCallback((prop, value) => {
      if (value != null) {
        if (getAttribute(prop) != value) {
          currentImperativeProps.current.others[prop] = value;
          getElement()?.setAttribute(prop, value);
        }
      } else {
        if (getAttribute(prop) != void 0) {
          delete currentImperativeProps.current.others[prop];
          getElement()?.removeAttribute(prop);
        }
      }
    }, []);
    const setEventHandler = useCallback((type, handler, options) => {
      const element = getElement();
      const mappedKey = EventMapping2[type];
      if (element) {
        if (handler) {
          element.addEventListener(type, handler, options);
          currentImperativeProps.current.others[mappedKey] = handler;
        } else if (currentImperativeProps.current.others[mappedKey]) {
          element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
          currentImperativeProps.current.others[mappedKey] = void 0;
        }
      }
    }, []);
    return {
      imperativePropsReturn: F2({
        hasClass,
        setClass,
        setStyle,
        getAttribute,
        setAttribute,
        setEventHandler,
        setChildren,
        dangerouslySetInnerHTML,
        dangerouslyAppendHTML
      }).current,
      props: useMergedProps({ className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style }, currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {}, { children: currentImperativeProps.current.children }, currentImperativeProps.current.others)
    };
  });
  function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps({ refElementReturn });
    T2(handle, () => imperativeHandle);
    return y(Tag, useMergedProps(propsStable, imperativeProps, props, { ref }));
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/util/random-id.js
  var Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  function base64(value) {
    return Table[value];
  }
  function random6Bits() {
    return Math.floor(Math.random() * 64);
  }
  function random64Bits() {
    return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
  }
  function generateRandomId(prefix) {
    return `${prefix ?? "id-"}${random64Bits().map((n2) => base64(n2)).join("")}`;
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/dom-helpers/use-portal-children.js
  var usePortalChildren = monitored(function usePortalChildren2({ target }) {
    const [pushChild, setPushChild] = useState(null);
    const [updateChild, setUpdateChild] = useState(null);
    const [removeChild, setRemoveChild] = useState(null);
    const pushChildStable = useStableCallback((child) => {
      return pushChild?.(child) ?? -1;
    });
    const updateChildStable = useStableCallback((index, child) => {
      return updateChild?.(index, child);
    });
    const removeChildStable = useStableCallback((index) => {
      return removeChild?.(index);
    });
    const element = q2(() => {
      return target == null ? null : typeof target == "string" ? document.getElementById(target) : target;
    }, [target]);
    const children = !element ? null : j3(y(PortalChildren, { setPushChild, setUpdateChild, setRemoveChild }), element);
    return {
      children,
      pushChild: pushChildStable,
      updateChild: updateChildStable,
      removeChild: removeChildStable,
      portalElement: element
    };
  });
  function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }) {
    const [children, setChildren, getChildren] = useState([]);
    const pushChild = useCallback((child) => {
      const randomKey = generateRandomId();
      let index = getChildren().length;
      setChildren((prev) => [...prev, F(child, { key: randomKey, index })]);
      return index;
    }, []);
    const updateChild = useCallback((index, child) => {
      const key = getChildren()[index]?.key;
      console.assert(!!key);
      if (key) {
        setChildren((prev) => {
          let newChildren = prev.slice();
          newChildren.splice(index, 1, F(child, { key, index }));
          return newChildren;
        });
        return index;
      }
    }, []);
    const removeChild = useCallback((index) => {
      const key = getChildren()[index]?.key;
      console.assert(!!key);
      if (key) {
        setChildren((prev) => {
          let newChildren = prev.slice();
          newChildren.splice(index, 1);
          return newChildren;
        });
        return index;
      }
    }, []);
    A2(() => {
      setPushChild((_3) => pushChild);
    }, [pushChild]);
    A2(() => {
      setUpdateChild((_3) => updateChild);
    }, [updateChild]);
    A2(() => {
      setRemoveChild((_3) => removeChild);
    }, [removeChild]);
    return y(g, {}, children);
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-element-size.js
  var useElementSize = monitored(function useElementSize2({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }) {
    const { onElementChange, onMount, onUnmount } = refElementParameters || {};
    useEnsureStability("useElementSize", getObserveBox, onSizeChange, onElementChange, onMount, onUnmount);
    const [getSize, setSize] = usePassiveState(onSizeChange, returnNull, runImmediately);
    const currentObserveBox = F2(void 0);
    const needANewObserver = useCallback((element, observeBox) => {
      if (element) {
        const document2 = getDocument(element);
        const window2 = document2.defaultView;
        const handleUpdate = (entries) => {
          if (element.isConnected) {
            const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
            setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop }, entries);
          }
        };
        if (window2 && "ResizeObserver" in window2) {
          const observer = new ResizeObserver((entries) => {
            handleUpdate(entries);
          });
          observer.observe(element, { box: observeBox });
          return () => observer.disconnect();
        } else {
          document2.addEventListener("resize", handleUpdate, { passive: true });
          return () => document2.removeEventListener("resize", handleUpdate);
        }
      }
    }, []);
    const { refElementReturn, ...rest } = useRefElement({
      refElementParameters: {
        onElementChange: useCallback((e3, p4, r4) => {
          needANewObserver(e3, getObserveBox?.());
          onElementChange?.(e3, p4, r4);
        }, []),
        onMount,
        onUnmount
      }
    });
    const { getElement } = refElementReturn;
    _(() => {
      if (getObserveBox) {
        if (currentObserveBox.current !== getObserveBox())
          needANewObserver(getElement(), getObserveBox());
      }
    });
    return {
      elementSizeReturn: { getSize },
      refElementReturn,
      ...rest
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-has-last-focus.js
  var useHasLastFocus = monitored(function useHasLastFocus2(args) {
    const { refElementReturn: { getElement }, activeElementParameters: { onLastActiveElementChange, ...activeElementParameters }, hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ...void1 } } = args;
    assertEmptyObject(void1);
    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, runImmediately);
    const { activeElementReturn } = useActiveElement({
      activeElementParameters: {
        onLastActiveElementChange: useCallback((lastActiveElement, prevLastActiveElement, e3) => {
          const selfElement = getElement();
          const focused = selfElement != null && selfElement == lastActiveElement;
          const focusedInner = !!selfElement?.contains(lastActiveElement);
          setLastFocused(focused, e3);
          setLastFocusedInner(focusedInner, e3);
          onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement, e3);
        }, []),
        ...activeElementParameters
      }
    });
    _(() => {
      return () => {
        setLastFocused(false, void 0);
        setLastFocusedInner(false, void 0);
      };
    }, []);
    return {
      activeElementReturn,
      hasLastFocusReturn: {
        getLastFocused,
        getLastFocusedInner
      }
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-logical-direction.js
  function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  var useLogicalDirection = monitored(function useLogicalDirection2({ ...void1 }) {
    assertEmptyObject(void1);
    const getLogicalDirectionInfo = useCallback((computedStyles) => {
      if (computedStyles) {
        const w5 = computedStyles.writingMode;
        let d4 = computedStyles.direction;
        const t3 = computedStyles.textOrientation;
        if (t3 == "upright")
          d4 = "ltr";
        return { ...WritingModes[w5 || "horizontal-tb"][d4 || "ltr"] };
      }
      return null;
    }, []);
    const convertToLogicalOrientation = useCallback((computedStyles, elementOrientation, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (direction?.inlineOrientation === elementOrientation)
        return "inline";
      return "block";
    }, []);
    const convertToPhysicalSide = useCallback((computedStyles, side, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      switch (side) {
        case "block-start":
          return M3[(direction?.blockDirection ?? "ttb")[0]];
        case "block-end":
          return M3[(direction?.blockDirection ?? "ttb")[2]];
        case "inline-start":
          return M3[(direction?.inlineDirection ?? "ltr")[0]];
        case "inline-end":
          return M3[(direction?.inlineDirection ?? "ltr")[2]];
      }
    }, []);
    const convertToLogicalSide = useCallback((computedStyles, side, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (direction?.inlineOrientation === "vertical") {
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
      } else if (direction?.inlineOrientation === "horizontal") {
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
    const convertToPhysicalOrientation = useCallback((computedStyles, elementOrientation, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (elementOrientation == "inline") {
        if (direction?.inlineOrientation == "horizontal")
          return "horizontal";
        return "vertical";
      } else {
        if (direction?.blockOrientation == "vertical")
          return "vertical";
        return "horizontal";
      }
    }, []);
    const convertElementSize = useCallback((computedStyles, elementSize, direction) => {
      direction ??= getLogicalDirectionInfo(computedStyles);
      if (direction) {
        const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;
        const clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
        const clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
        const offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
        const offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
        const scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
        const scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`];
        const f1 = getPhysicalLeftTop(inlineDirection);
        const f22 = getPhysicalRightBottom(inlineDirection);
        const f32 = getPhysicalLeftTop(blockDirection);
        const f42 = getPhysicalRightBottom(blockDirection);
        const clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`client${capitalize(f22)}`]);
        const scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`scroll${capitalize(f22)}`]);
        const offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == void 0 ? void 0 : elementSize[`offset${capitalize(f1)}`] + (!f22 ? 0 : elementSize[`offset${capitalize(f22)}`]);
        const clientBlockInset = elementSize[`client${capitalize(f32)}`] + (!f42 ? 0 : elementSize[`client${capitalize(f42)}`]);
        const scrollBlockInset = elementSize[`scroll${capitalize(f32)}`] + (!f42 ? 0 : elementSize[`scroll${capitalize(f42)}`]);
        const offsetBlockInset = elementSize[`offset${capitalize(f32)}`] == void 0 ? void 0 : elementSize[`offset${capitalize(f32)}`] + (!f42 ? 0 : elementSize[`offset${capitalize(f42)}`]);
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
      logicalDirectionReturn: {
        getLogicalDirectionInfo,
        convertToLogicalSize: convertElementSize,
        convertToLogicalOrientation,
        convertToPhysicalOrientation,
        convertToLogicalSide,
        convertToPhysicalSide
      }
    };
  });
  function getPhysicalLeftTop(dir) {
    if (dir === "ltr" || dir == "rtl")
      return "left";
    return "top";
  }
  function getPhysicalRightBottom(dir) {
    if (dir === "rtl")
      return "width";
    if (dir === "btt")
      return "height";
    return null;
  }
  var M3 = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right"
  };
  var HorizontalTbLtr = {
    inlineDirection: "ltr",
    blockDirection: "ttb",
    inlineOrientation: "horizontal",
    blockOrientation: "vertical",
    inlineSize: "width",
    blockSize: "height",
    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
  };
  var HorizontalTbRtl = {
    ...HorizontalTbLtr,
    inlineDirection: "rtl"
  };
  var VerticalRlLtr = {
    inlineDirection: "ttb",
    blockDirection: "rtl",
    inlineOrientation: "vertical",
    blockOrientation: "horizontal",
    inlineSize: "height",
    blockSize: "width",
    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
  };
  var VerticalRlRtl = {
    ...VerticalRlLtr,
    inlineDirection: "btt"
  };
  var SidewaysRlLtr = { ...VerticalRlLtr };
  var SidewaysRlRtl = { ...VerticalRlRtl };
  var VerticalLrLtr = {
    ...VerticalRlLtr,
    blockDirection: "ltr"
  };
  var VerticalLrRtl = {
    ...VerticalRlRtl,
    blockDirection: "ltr"
  };
  var SidewaysLtLtr = {
    ...VerticalLrLtr,
    inlineDirection: "btt",
    leftRightDirection: "btt",
    overUnderDirection: "ltr"
  };
  var SidewaysLtRtl = {
    ...SidewaysLtLtr,
    inlineDirection: "ttb"
  };
  var HorizontalTb = {
    ltr: HorizontalTbLtr,
    rtl: HorizontalTbRtl
  };
  var VerticalRl = {
    ltr: VerticalRlLtr,
    rtl: VerticalRlRtl
  };
  var VerticalLr = {
    ltr: VerticalLrLtr,
    rtl: VerticalLrRtl
  };
  var SidewaysRl = {
    ltr: SidewaysRlLtr,
    rtl: SidewaysRlRtl
  };
  var SidewaysLr = {
    ltr: SidewaysLtLtr,
    rtl: SidewaysLtRtl
  };
  var WritingModes = {
    "horizontal-tb": HorizontalTb,
    "vertical-lr": VerticalLr,
    "vertical-rl": VerticalRl,
    "sideways-lr": SidewaysLr,
    "sideways-rl": SidewaysRl
  };

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-media-query.js
  var useMediaQuery = monitored(function useMediaQuery2(query, defaultGuess) {
    const queryList = F2();
    const [matches2, setMatches, getMatches] = useState(defaultGuess ?? null);
    console.assert(!query || query.startsWith("("));
    A2(() => {
      if (!query)
        return;
      queryList.current = matchMedia(query);
      setMatches(queryList.current.matches || false);
      const handler = (e3) => {
        setMatches(e3.matches);
      };
      queryList.current.addEventListener("change", handler, { passive: true });
      return () => queryList.current?.removeEventListener("change", handler);
    }, [query]);
    return {
      matches: matches2,
      getMatches
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-mutation-observer.js
  var useMutationObserver = monitored(function useMutationObserver2({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }) {
    const { onElementChange, ...rest } = refElementParameters || {};
    if (typeof attributeFilter === "string")
      attributeFilter = [attributeFilter];
    const attributeKey = attributeFilter?.join(";");
    const attributes = !!onAttributes;
    const characterData = !!onCharacterData;
    const childList = !!onChildList;
    const stableOnChildList = useStableCallback(onChildList ?? (() => {
    }));
    const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => {
    }));
    const stableOnAttributes = useStableCallback(onAttributes ?? (() => {
    }));
    const [_getMo, setMo] = usePassiveState(useStableCallback((observer) => {
      const element = getElement();
      if (element && observer && (!!attributeKey || !!characterData || !!childList)) {
        observer.observe(element, {
          attributeFilter,
          attributeOldValue,
          attributes,
          characterData,
          characterDataOldValue,
          childList,
          subtree
        });
        return () => observer.disconnect();
      }
    }), returnNull, runImmediately);
    const onNeedMutationObserverReset = useCallback((element) => {
      if (element) {
        queueMicrotask(() => {
          setMo(new MutationObserver((a4) => {
            for (const mutation of a4) {
              switch (mutation.type) {
                case "childList":
                  stableOnChildList(mutation);
                  break;
                case "attributes":
                  stableOnAttributes(mutation);
                  break;
                case "characterData":
                  stableOnCharacterData(mutation);
                  break;
              }
            }
          }));
        });
      }
    }, []);
    _(() => {
      onNeedMutationObserverReset(getElement());
    }, [attributeKey, attributeOldValue, characterDataOldValue, subtree]);
    const { refElementReturn, propsStable } = useRefElement({
      refElementParameters: {
        onElementChange: useStableCallback((e3, p4, r4) => {
          onElementChange?.(e3, p4, r4);
          onNeedMutationObserverReset(e3);
        }),
        ...rest
      }
    });
    const { getElement } = refElementReturn;
    return {
      refElementReturn,
      propsStable
    };
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/observers/use-url.js
  var useUrl = monitored(function useUrl2(onUrlChange) {
    const [getUrl, setUrl] = usePassiveState(useStableCallback(onUrlChange), useCallback(() => window.location.toString(), []));
    useGlobalHandler(window, "hashchange", (e3) => {
      setUrl(window.location.toString(), e3);
    });
    useGlobalHandler(window, "popstate", (e3) => {
      console.assert(window.location.toString() === document.location.toString());
      setUrl(window.location.toString(), e3);
    });
    return [getUrl, useCallback((newUrlOrSetter, action) => {
      if (typeof newUrlOrSetter == "function") {
        setUrl((prev) => {
          let newUrl = newUrlOrSetter(prev);
          history[`${action ?? "replace"}State`]({}, document.title, newUrl);
          return newUrl;
        }, void 0);
      } else {
        history[`${action ?? "replace"}State`]({}, document.title, newUrlOrSetter);
        setUrl(newUrlOrSetter, void 0);
      }
    }, [])];
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-async-effect.js
  var useAsyncEffect = monitored(function useAsyncEffect2(effect, inputs, options) {
    const { syncHandler, ...rest } = useAsync(effect, { ...options, capture: null, debounce: null, throttle: null });
    _(syncHandler, inputs);
    return rest;
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-effect-debug.js
  var useEffectDebug = monitored(function useEffectDebug2(effect, inputs, impl = _) {
    const prevInputs = F2(void 0);
    const effect2 = () => {
      const changes = [];
      if (inputs && prevInputs.current) {
        for (let i5 = 0; i5 < Math.max(prevInputs.current.length, inputs.length); ++i5) {
          if (prevInputs.current[i5] != inputs[i5])
            changes[i5] = { from: prevInputs.current[i5], to: inputs[i5] };
        }
      }
      const ret = effect(prevInputs.current, changes);
      prevInputs.current = inputs;
      return ret;
    };
    impl(effect2, inputs);
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-layout-effect-debug.js
  var useLayoutEffectDebug = monitored(function useLayoutEffectDebug2(effect, inputs) {
    return useEffectDebug(effect, inputs, A2);
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/preact-extensions/use-persistent-state.js
  function getFromLocalStorage(key, converter = JSON.parse, storage = localStorage) {
    try {
      const item = storage.getItem(key);
      if (item == null)
        return null;
      return converter(item);
    } catch (e3) {
      debugger;
      return null;
    }
  }
  function storeToLocalStorage(key, value, converter = JSON.stringify, storage = localStorage) {
    try {
      if (value == null)
        storage.removeItem(key);
      else
        storage.setItem(key, converter(value));
    } catch (e3) {
      debugger;
    }
  }
  function usePersistentState(key, initialValue, fromString = JSON.parse, toString = JSON.stringify, storage = localStorage) {
    const [localCopy, setLocalCopy, getLocalCopy] = useState(() => (key ? getFromLocalStorage(key, fromString, storage) : null) ?? initialValue);
    const getInitialValue = useStableGetter(initialValue);
    A2(() => {
      if (key) {
        const newCopy = getFromLocalStorage(key, fromString, storage);
        setLocalCopy(newCopy ?? getInitialValue());
      }
    }, [key, storage]);
    useGlobalHandler(window, "storage", useStableCallback((e3) => {
      if (key && e3.key === key && e3.storageArea == storage) {
        const newValue = e3.newValue;
        if (newValue != null)
          setLocalCopy(fromString(newValue));
        else
          setLocalCopy(initialValue);
      }
    }));
    const setValueWrapper = useStableCallback((valueOrSetter) => {
      const value = typeof valueOrSetter === "function" ? valueOrSetter(getLocalCopy()) : valueOrSetter;
      setLocalCopy(valueOrSetter);
      if (key) {
        storeToLocalStorage(key, value, toString, storage);
        if (typeof value == "object" && value instanceof Date) {
          console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
        }
      }
    });
    const getValue = useStableCallback(() => {
      const trueValue = !key ? void 0 : getFromLocalStorage(key, fromString, storage);
      return trueValue ?? localCopy;
    });
    return [localCopy, setValueWrapper, getValue];
  }

  // ../node_modules/.pnpm/preact@10.19.5/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f4 = 0;
  var i4 = Array.isArray;
  function u4(e3, t3, n2, o4, i5, u5) {
    var a4, c4, p4 = {};
    for (c4 in t3)
      "ref" == c4 ? a4 = t3[c4] : p4[c4] = t3[c4];
    var l4 = { type: e3, props: p4, key: n2, ref: a4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f4, __i: -1, __u: 0, __source: i5, __self: u5 };
    if ("function" == typeof e3 && (a4 = e3.defaultProps))
      for (c4 in a4)
        void 0 === p4[c4] && (p4[c4] = a4[c4]);
    return l.vnode && l.vnode(l4), l4;
  }

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/timing/use-animation-frame.js
  var SharedAnimationFrameContext = G(null);
  var useAnimationFrame = monitored(function useAnimationFrame2({ callback }) {
    const stableCallback = useStableCallback(callback ?? noop_default);
    const hasCallback = callback != null;
    const sharedAnimationFrameContext = P2(SharedAnimationFrameContext);
    _(() => {
      if (sharedAnimationFrameContext) {
        if (hasCallback) {
          sharedAnimationFrameContext.addCallback(stableCallback);
        } else {
          sharedAnimationFrameContext.removeCallback(stableCallback);
        }
      } else {
        if (hasCallback) {
          const rafCallback = (ms) => {
            handle = requestAnimationFrame(rafCallback);
            stableCallback(ms);
          };
          let handle = requestAnimationFrame(rafCallback);
          return () => cancelAnimationFrame(handle);
        }
      }
    }, [sharedAnimationFrameContext, hasCallback]);
  });

  // ../node_modules/.pnpm/github.com+mwszekely+preact-prop-helpers@0a628584b6dce3f80db35ec0418a8e4c550dc04a_preact@10.1_mek4biazgju3r2m27vyzcg4lie/node_modules/preact-prop-helpers/dist/preact/timing/use-interval.js
  var useInterval = monitored(function useInterval2({ interval, callback }) {
    const stableCallback = useStableCallback(callback);
    const getInterval = useStableGetter(interval);
    _(() => {
      const interval2 = getInterval();
      let lastDelayUsed = interval2;
      if (interval2 == null)
        return;
      const adjustableCallback = () => {
        stableCallback();
        const currentInterval = getInterval();
        if (currentInterval != lastDelayUsed) {
          clearInterval(handle);
          if (currentInterval != null)
            handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
        }
      };
      let handle = setInterval(adjustableCallback, interval2);
      return () => clearInterval(handle);
    }, []);
  });

  // ../dist/props.js
  function useContextWithWarning(context, parentContextName) {
    let ret = P2(context);
    if (ret == null) {
      debugger;
      console.error(`This child is missing its parent ${parentContextName} context`);
    }
    return ret;
  }
  function noop2() {
    return;
  }
  var Prefices = {
    accordionSectionHeaderButton: "ashb-",
    accordionSectionBody: "asb-",
    checkboxLikeInput: "cbli-",
    checkboxLikeLabel: "cbll-",
    dialog: "mdl-",
    dialogTitle: "mdlt-",
    drawer: "mdw-",
    drawerTitle: "mdwt-",
    gridlist: "gl-",
    gridlistLabel: "gll-",
    listbox: "lb-",
    listboxLabel: "lbl-",
    menu: "menu-",
    progressIndicator: "pi-",
    progressLabel: "pl-",
    radioGroup: "rg-",
    radioGroupLabel: "rgl-",
    radio: "rb-",
    radioLabel: "rbl-",
    sliderThumb: "st-",
    table: "tb-",
    tableLabel: "tbl-",
    tablist: "tl-",
    tablistLabel: "tll-",
    tooltip: "tt-",
    toolbar: "tlb-",
    toolbarLabel: "tlbl-"
  };

  // ../dist/use-button.js
  var useButton = monitored(function useButton2({ buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 }, pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 }, refElementParameters, ...void2 }) {
    const { refElementReturn, propsStable: propsRef, ...void5 } = useRefElement({ refElementParameters });
    const { pressReturn, props: propsPress, ...void4 } = usePress({
      refElementReturn,
      pressParameters: {
        onPressSync: useStableCallback((e3) => {
          if (!disabled) {
            const p4 = pressed == null ? void 0 : !pressed;
            onPressSync?.(enhanceEvent(e3, { pressed: p4 }));
          }
        }),
        focusSelf,
        allowRepeatPresses,
        excludeEnter: returnFalse,
        excludePointer: returnFalse,
        excludeSpace,
        longPressThreshold,
        onPressingChange
      }
    });
    const baseProps = { "aria-pressed": pressed === true ? "true" : pressed === false ? "false" : void 0 };
    const buttonProps = { ...baseProps, disabled: disabled && disabled != "soft" ? true : false, "aria-disabled": disabled === "soft" ? "true" : void 0, role: role == "button" ? void 0 : role };
    const divProps = { ...baseProps, tabIndex: disabled === "hard" ? -1 : 0, role: role || "button", "aria-disabled": disabled ? "true" : void 0 };
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
      pressReturn,
      props: useMergedProps(propsPress, propsRef, tagButton == "button" ? buttonProps : divProps),
      refElementReturn
    };
  });

  // ../dist/use-accordion.js
  var useAccordion = monitored(function useAccordion2({ accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters }, typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters }, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters }, ...void1 }) {
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, initialIndex ?? null);
    if (localStorageIndex != null)
      initialIndex = localStorageIndex;
    const { managedChildrenReturn, context: { managedChildContext } } = useManagedChildren({
      managedChildrenParameters: {
        onChildrenMountChange: useStableCallback((m4, u5) => {
          ocmc2(void 0);
          ocmc1?.(m4, u5);
        }),
        onAfterChildLayoutEffect,
        onChildrenCountChange,
        ...managedChildrenParameters
      }
    });
    const { getChildren } = managedChildrenReturn;
    const isValidByChild = useCallback((c4) => c4 && !c4.disabled && !c4.untabbable, []);
    const isValidByIndex = useCallback((c4) => {
      const child = getChildren().getAt(c4);
      if (child) {
        return isValidByChild(child);
      }
      return false;
    }, []);
    const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag({
      initialIndex,
      getChildren,
      getAt: useCallback((child) => {
        return child.getOpenFromParent() ?? false;
      }, []),
      setAt: useCallback((child, open) => {
        return child.setOpenFromParent(open);
      }, []),
      isValid: isValidByChild,
      onIndexChange: null,
      closestFit: false,
      onClosestFit: null
    });
    const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag({
      initialIndex,
      getChildren,
      getAt: useCallback((child) => {
        return child.getMostRecentlyTabbed() ?? false;
      }, []),
      setAt: useCallback((child, tabbed) => {
        return child.setMostRecentlyTabbed(tabbed);
      }, []),
      isValid: isValidByChild,
      closestFit: true,
      onIndexChange: useCallback((i5) => {
        if (i5 != null) {
          const element = getChildren().getAt(i5)?.getElement();
          if (element)
            getChildren().getAt(i5)?.focusSelf(element);
        }
      }, []),
      onClosestFit: useStableCallback((index) => {
        if (document.activeElement == null || document.activeElement == document.body) {
          if (index != null) {
            let backupIndex = 0;
            let usedBackup = false;
            let element = getChildren().getAt(index)?.getElement();
            while (element == null && backupIndex <= getChildren().getHighestIndex()) {
              element = getChildren().getAt(backupIndex)?.getElement();
              ++backupIndex;
              usedBackup = true;
            }
            if (usedBackup)
              findBackupFocus(element).focus();
            else if (element)
              getChildren().getAt(index)?.focusSelf(element);
          }
        }
      })
    });
    const changeExpandedIndex = useStableCallback((value, r4) => {
      changeExpandedIndexLocalOnly(value, r4);
      setLocalStorageIndex(value);
    });
    const rovingTabIndexReturn = useMemoObject({
      getTabbableIndex: getTabbedIndex,
      setTabbableIndex: changeTabbedIndex
    });
    const { context: { typeaheadNavigationContext }, typeaheadNavigationReturn, propsStable: propsTN, ...void2 } = useTypeaheadNavigation({
      rovingTabIndexReturn,
      typeaheadNavigationParameters: {
        isValidForTypeaheadNavigation: isValidByIndex,
        collator,
        noTypeahead,
        onNavigateTypeahead,
        typeaheadTimeout,
        ...typeaheadNavigationParameters
      }
    });
    assertEmptyObject(accordionParameters);
    assertEmptyObject(linearNavigationParameters);
    assertEmptyObject(managedChildrenParameters);
    assertEmptyObject(typeaheadNavigationParameters);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      typeaheadNavigationReturn,
      context: useMemoObject({
        managedChildContext,
        typeaheadNavigationContext,
        accordionSectionContext: useMemoObject({
          changeExpandedIndex,
          changeTabbedIndex,
          getExpandedIndex: getCurrentExpandedIndex,
          getTabbedIndex,
          stableTypeaheadProps: propsTN
        }),
        linearNavigationParameters: useMemoObject({
          getHighestIndex: useCallback(() => getChildren().getHighestIndex(), []),
          getLowestIndex: useCallback(() => getChildren().getLowestIndex(), []),
          indexMangler: identity_default,
          indexDemangler: identity_default,
          isValidForLinearNavigation: isValidByIndex,
          arrowKeyDirection: orientation ?? "vertical",
          disableHomeEndKeys,
          navigatePastEnd,
          navigatePastStart,
          pageNavigationSize,
          onNavigateLinear,
          ...linearNavigationParameters
        }),
        rovingTabIndexReturn
      }),
      managedChildrenReturn,
      accordionReturn: useMemoObject({ changeExpandedIndex })
    };
  });
  var useAccordionSection = monitored(function useAccordionSection2({ buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters }, accordionSectionParameters: { open: openFromUser, bodyRole, ...void3 }, info: { index, untabbable, ...void4 }, textContentParameters: { getText, onTextContentChange: otcc1, ...void5 }, context, refElementBodyParameters, refElementHeaderButtonParameters, pressParameters: { focusSelf, ...pressParameters }, ...void1 }) {
    const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
    const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState(null);
    const { accordionSectionContext: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn } = context;
    const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionHeaderButton, otherReferencerProp: "aria-controls" } });
    const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionBody, otherReferencerProp: "aria-labelledby" } });
    const open = openFromUser ?? openFromParent ?? false;
    const { refElementReturn: refElementBodyReturn, propsStable: bodyRefElementProps } = useRefElement({ refElementParameters: refElementBodyParameters });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
      refElementReturn: { getElement: useStableCallback(() => {
        return refElementHeaderButtonReturn.getElement();
      }) },
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged: null,
        onCurrentFocusedInnerChanged: useStableCallback((focused, _prev) => {
          if (focused) {
            setCurrentFocusedIndex(index, void 0);
            setMostRecentlyTabbed(true);
          }
        })
      }
    });
    const { managedChildReturn: { getChildren: _getSections }, ...void9 } = useManagedChild({
      context,
      info: {
        index,
        disabled: disabled || false,
        focusSelf,
        getMostRecentlyTabbed,
        getOpenFromParent,
        untabbable,
        setMostRecentlyTabbed,
        setOpenFromParent,
        getElement: useStableCallback(() => {
          return refElementHeaderButtonReturn.getElement();
        })
      }
    });
    const { propsStable: propsLN, linearNavigationReturn, ...void10 } = useLinearNavigation({
      linearNavigationParameters,
      rovingTabIndexReturn,
      paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
      rearrangeableChildrenReturn: { indexMangler: identity_default, indexDemangler: identity_default }
    });
    const {
      pressParameters: { excludeSpace, ...void11 },
      //textContentReturn,
      textContentParameters: { onTextContentChange: otcc2, ...void13 },
      ...void2
    } = useTypeaheadNavigationChild({
      info: { index },
      //refElementReturn: { getElement: useStableCallback((): HeaderButtonElement | null => refElementHeaderButtonReturn.getElement()) },
      //textContentParameters: { getText, },
      context
    });
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: { onElementChange: null, onMount: null, onUnmount: null } });
    const { textContentReturn } = useTextContent({
      refElementReturn,
      textContentParameters: { getText, onTextContentChange: useStableCallback((...a4) => {
        otcc1?.(...a4);
        otcc2?.(...a4);
      }) }
    });
    const { pressReturn, props, refElementReturn: refElementHeaderButtonReturn, ...void12 } = useButton({
      buttonParameters: {
        pressed: null,
        role: "button",
        disabled,
        tagButton,
        onPressSync: (e3) => {
          setCurrentFocusedIndex(index, e3);
          if (getOpenFromParent())
            changeExpandedIndex(null, e3);
          else
            changeExpandedIndex(index, e3);
          userOnPress?.(e3);
        },
        ...buttonParameters
      },
      pressParameters: {
        excludeSpace,
        focusSelf,
        allowRepeatPresses: false,
        longPressThreshold: null,
        onPressingChange: null,
        ...pressParameters
      },
      refElementParameters: refElementHeaderButtonParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(pressParameters);
    assertEmptyObject(buttonParameters);
    assertEmptyObject(void9);
    assertEmptyObject(void10);
    assertEmptyObject(void11);
    assertEmptyObject(void12);
    assertEmptyObject(void13);
    return {
      pressReturn,
      refElementBodyReturn,
      refElementHeaderButtonReturn,
      linearNavigationReturn,
      textContentReturn,
      hasCurrentFocusReturn,
      accordionSectionReturn: {
        mostRecentlyTabbed: !!mostRecentlyTabbed,
        expanded: open,
        focused: getCurrentFocusedIndex() == index
      },
      propsHeaderButton: useMergedProps(props, hasCurrentFocusReturn.propsStable, propsHeadReferencer, propsHeadSource, propsLN, stableTypeaheadProps, { "aria-expanded": open ?? false }),
      propsBody: useMergedProps(bodyRefElementProps, propsBodyReferencer, propsBodySource, {
        role: bodyRole,
        tabIndex: -1
      }),
      propsHeader: propsStable
    };
  });

  // ../dist/use-checkbox-group.js
  var useCheckboxGroup = monitored(function useCheckboxGroup2({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation, ...void2 }, multiSelectionParameters, refElementParameters, typeaheadNavigationParameters, ...void1 }) {
    const { contextChildren, contextProcessing: _contextProcessing, linearNavigationReturn, managedChildrenReturn, props, rearrangeableChildrenReturn, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, multiSelectionReturn, refElementReturn, ...void3 } = useCompleteListNavigation({
      linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
      rovingTabIndexParameters: { focusSelfParent: focus, ...rovingTabIndexParameters },
      singleSelectionParameters: { initiallySingleSelectedIndex: null, onSingleSelectedIndexChange: null, singleSelectionAriaPropName: null, singleSelectionMode: "disabled" },
      paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
      multiSelectionParameters,
      refElementParameters,
      typeaheadNavigationParameters
    });
    assertEmptyObject(void3);
    const { getChildren } = managedChildrenReturn;
    const children = getChildren();
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const allIds = F2(/* @__PURE__ */ new Set());
    const updateParentControlIds = useStableCallback((setter) => {
      setter?.(Array.from(allIds.current).join(" "));
    });
    const [getControlsSetterOnParentCheckbox, setControlsSetterOnParentCheckbox] = usePassiveState(updateParentControlIds, returnNull);
    const [_getUpdateIndex, setUpdateIndex] = usePassiveState(useStableCallback(() => {
      updateParentControlIds(getControlsSetterOnParentCheckbox());
    }), returnZero, setTimeout);
    const getSelfIsChecked = x2((percentChecked) => {
      return percentChecked <= 0 ? false : percentChecked >= 1 ? true : "mixed";
    }, []);
    const onAnyChildCheckedUpdate = useStableCallback((setter, percentChecked) => {
      setter?.(getSelfIsChecked(percentChecked));
    });
    const [getTotalChildren, setTotalChildren] = usePassiveState(x2((totalChildren) => {
      onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(getTotalChecked(), totalChildren));
    }, []), returnZero);
    const [getTotalChecked, setTotalChecked] = usePassiveState(x2((totalChecked) => {
      onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(totalChecked, getTotalChildren()));
    }, []), returnZero);
    const getPercentChecked = x2((totalChecked, totalChildren) => {
      if (totalChildren > 0)
        return totalChecked / totalChildren;
      else
        return totalChecked == 0 ? 0 : 1;
    }, []);
    const [getSetParentCheckboxChecked, setSetParentCheckboxChecked] = usePassiveState(useStableCallback((setter) => {
      onAnyChildCheckedUpdate(setter, getPercentChecked(getTotalChecked(), getTotalChildren()));
    }));
    const onCheckboxGroupParentInput = x2(async (e3) => {
      e3.preventDefault();
      const selfIsChecked = getSelfIsChecked(getPercentChecked(getTotalChecked(), getTotalChildren()));
      const nextChecked = selfIsChecked === false ? "mixed" : selfIsChecked === "mixed" ? true : false;
      let willChangeAny = false;
      const promises = [];
      children.forEach((child) => {
        if (child.checkboxChildType == "child")
          willChangeAny ||= child.getChecked() != child.getLastUserChecked();
      });
      children.forEach((child) => {
        if (child.checkboxChildType == "child") {
          const prevChecked = child.getChecked();
          let checked;
          if (nextChecked == "mixed") {
            if (willChangeAny)
              checked = child.getLastUserChecked();
            else
              checked = true;
          } else {
            checked = nextChecked;
          }
          if (checked != prevChecked) {
            const promise = child.setCheckedFromParentInput(checked, e3);
            if (promise) {
              promises.push(promise);
            }
          }
        }
      });
      await Promise.all(promises);
    }, []);
    return {
      refElementReturn,
      linearNavigationReturn,
      childrenHaveFocusReturn,
      context: useMemoObject({
        ...contextChildren,
        checkboxGroupChildrenContext: useMemoObject({
          setUpdateIndex,
          allIds: allIds.current,
          setTotalChecked,
          setTotalChildren
        }),
        checkboxGroupParentContext: useMemoObject({
          setControlsSetterOnParentCheckbox,
          setSetParentCheckboxChecked,
          getPercentChecked,
          getTotalChecked,
          getTotalChildren,
          onCheckboxGroupParentInput
        })
      }),
      props,
      rearrangeableChildrenReturn,
      singleSelectionReturn,
      managedChildrenReturn,
      rovingTabIndexReturn,
      typeaheadNavigationReturn,
      multiSelectionReturn
    };
  });
  var useCheckboxGroupParent = monitored(function useCheckboxGroupParent2({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters, multiSelectionChildParameters, singleSelectionChildParameters, ...void1 }) {
    const { hasCurrentFocusReturn, managedChildReturn, pressParameters, textContentReturn, refElementReturn, propsChild, propsTabbable, rovingTabIndexChildReturn, singleSelectionChildReturn, multiSelectionChildReturn, ...void2 } = useCompleteListNavigationChild({
      context,
      hasCurrentFocusParameters,
      refElementParameters,
      info: {
        ...info,
        checkboxChildType: "parent",
        // These 3 are child-only
        getLastUserChecked: null,
        setCheckedFromParentInput: null,
        getChecked: null
      },
      textContentParameters,
      multiSelectionChildParameters,
      singleSelectionChildParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const [ariaControls, setControls] = useState("");
    A2(() => {
      setControlsSetterOnParentCheckbox(() => setControls, void 0);
    }, [setControls]);
    const [checked, setChecked] = useState(false);
    _(() => {
      setSetParentCheckboxChecked(() => setChecked, void 0);
    }, []);
    const checkboxGroupParentReturn = { checked, onParentCheckedChange: onCheckboxGroupParentInput, getPercent: useStableCallback(() => {
      return getPercentChecked(getTotalChecked(), getTotalChildren());
    }) };
    return {
      checkboxGroupParentReturn,
      hasCurrentFocusReturn,
      managedChildReturn,
      textContentReturn,
      refElementReturn,
      propsChild: useMergedProps({ "aria-controls": ariaControls }, propsChild),
      propsTabbable,
      rovingTabIndexChildReturn,
      singleSelectionChildReturn,
      pressParameters,
      multiSelectionChildReturn
    };
  });
  var useCheckboxGroupChild = monitored(function useCheckboxGroupChild2({ checkboxGroupChildParameters, context, info: { focusSelf, index, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, multiSelectionChildParameters: { multiSelectionDisabled, onMultiSelectChange, ...void5 }, ...void4 }) {
    const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked } } = context;
    const { checked, onChangeFromParent, ...void1 } = checkboxGroupChildParameters;
    const getChecked = useStableGetter(checked);
    const [getLastUserChecked, setLastUserChecked] = usePassiveState(null, returnFalse);
    const onChildCheckedChange = useStableCallback((checked2) => {
      setLastUserChecked(checked2, void 0);
    });
    const onControlIdChanged = x2((next, prev) => {
      if (prev)
        allIds.delete(prev);
      if (next)
        allIds.add(next);
      if (!!next || !!prev) {
        setUpdateIndex((i5) => (i5 ?? 0) + 1, void 0);
      }
    }, []);
    _(() => {
      setTotalChildren((c4) => (c4 ?? 0) + 1, void 0);
      return () => setTotalChildren((c4) => (c4 ?? 0) - 1, void 0);
    }, []);
    _(() => {
      if (checked) {
        setTotalChecked((c4) => (c4 ?? 0) + 1, void 0);
        return () => setTotalChecked((c4) => (c4 ?? 0) - 1, void 0);
      }
    }, [checked]);
    const { hasCurrentFocusReturn, managedChildReturn, refElementReturn, textContentReturn, propsChild, propsTabbable, singleSelectionChildReturn: _singleSelectionChildReturn, rovingTabIndexChildReturn, pressParameters, multiSelectionChildReturn, ...void2 } = useCompleteListNavigationChild({
      info: {
        checkboxChildType: "child",
        getLastUserChecked,
        getChecked,
        setCheckedFromParentInput: onChangeFromParent,
        focusSelf,
        index,
        untabbable
      },
      context,
      textContentParameters,
      hasCurrentFocusParameters,
      refElementParameters,
      singleSelectionChildParameters: { singleSelectionDisabled: true },
      multiSelectionChildParameters: { initiallyMultiSelected: !!checked, multiSelectionDisabled, onMultiSelectChange }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
      checkboxGroupChildReturn: {
        onChildCheckedChange,
        onControlIdChanged
      },
      textContentReturn,
      hasCurrentFocusReturn,
      managedChildReturn,
      refElementReturn,
      propsChild,
      propsTabbable,
      pressParameters,
      rovingTabIndexChildReturn,
      multiSelectionChildReturn
    };
  });

  // ../dist/use-label.js
  function useLabel({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }) {
    const nativeHTMLBehavior = tagInput == "input" && tagLabel == "label" && labelPosition != "wrapping";
    const synthetic = !nativeHTMLBehavior;
    let _comment;
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useRandomDualIds({
      randomIdInputParameters: { ...randomIdInputParameters, otherReferencerProp: !synthetic && labelPosition === "separate" ? "for" : null },
      randomIdLabelParameters: { ...randomIdLabelParameters, otherReferencerProp: synthetic ? "aria-labelledby" : null }
    });
    const { refElementReturn, propsStable: propsRef } = useRefElement({ refElementParameters: {} });
    if (labelPosition == "none") {
      propsInput["aria-label"] = ariaLabel;
      propsInput["aria-labelledby"] = void 0;
      propsLabel["for"] = void 0;
    }
    const { pressReturn, props: propsPress } = usePress({
      pressParameters: {
        excludeEnter: returnTrue,
        excludeSpace: returnTrue,
        onPressSync: onLabelClick,
        focusSelf: noop2,
        allowRepeatPresses: false,
        excludePointer: null,
        longPressThreshold: null,
        onPressingChange: null
      },
      refElementReturn
    });
    return {
      pressReturn,
      propsInput,
      propsLabel: useMergedProps(propsLabel, propsRef, propsPress),
      randomIdInputReturn,
      randomIdLabelReturn
    };
  }
  var useLabelSynthetic = monitored(function useLabelSynthetic2({ labelParameters: { ariaLabel, onLabelClick }, ...rest }) {
    return useLabel({
      labelParameters: {
        ariaLabel,
        labelPosition: ariaLabel == null ? "separate" : "none",
        tagInput: "div",
        tagLabel: "div",
        onLabelClick
      },
      ...rest
    });
  });

  // ../dist/use-checkbox-like.js
  function preventDefault(e3) {
    e3.preventDefault();
  }
  var useCheckboxLike = monitored(function useCheckboxLike2({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, onPressSync: onInputSync, ...void2 }, ...void3 }) {
    const { getElement: getInputElement } = refElementInputReturn;
    const { getElement: getLabelElement } = refElementLabelReturn;
    const { tagInput, tagLabel, labelPosition } = labelParameters;
    _(() => {
      const element = getInputElement();
      if (element && tagInput == "input") {
        element.indeterminate = checked === "mixed";
        element.checked = checked === true;
      }
    }, [tagInput, checked ?? false]);
    const { randomIdInputReturn, randomIdLabelReturn, propsInput, propsLabel, pressReturn } = useLabel({
      labelParameters: {
        ...labelParameters,
        onLabelClick: useStableCallback((e3) => {
          if (!disabled && tagInput != "input" && tagLabel != "label" && labelPosition != "separate") {
            focusSelf();
            onInputSync?.(e3);
          }
        })
      },
      randomIdInputParameters,
      randomIdLabelParameters
    });
    const focusSelf = useStableCallback(() => {
      let elementToFocus = null;
      if (labelPosition == "wrapping")
        elementToFocus = getLabelElement();
      else
        elementToFocus = getInputElement();
      focus(elementToFocus);
    });
    const onClickInputSync = labelPosition == "wrapping" ? void 0 : onInputSync;
    const onClickLabelSync = onInputSync;
    const { pressReturn: pressInputReturn, props: propsPressInput } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: disabled ? void 0 : onClickInputSync }, refElementReturn: refElementInputReturn });
    const { pressReturn: pressLabelReturn, props: propsPressLabel } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: disabled ? void 0 : onClickLabelSync }, refElementReturn: refElementLabelReturn });
    const propsUnstableInput = {};
    const propsUnstableLabel = {};
    propsUnstableInput.onClick = preventDefault;
    propsUnstableLabel.onClick = preventDefault;
    propsUnstableInput.onInput = preventDefault;
    propsUnstableInput.onChange = preventDefault;
    propsUnstableInput.type = role == "radio" ? "radio" : "checkbox";
    switch (labelPosition) {
      case "none":
      case "separate": {
        if (tagInput == "input") {
          propsUnstableInput.checked = checked === true;
          if (disabled === true || disabled === "hard")
            propsUnstableInput.disabled = true;
          else if (disabled == "soft")
            propsUnstableInput["aria-disabled"] = "true";
        } else {
          propsUnstableInput.role = role;
          propsUnstableInput.tabIndex = 0;
          propsUnstableInput["aria-checked"] = checked ?? false;
          propsUnstableInput["aria-disabled"] = !!disabled;
        }
        if (tagLabel != "label") {
        } else {
        }
        break;
      }
      case "wrapping": {
        if (tagInput == "input") {
          propsUnstableInput.checked = checked === true;
          propsUnstableInput.disabled = disabled === true;
          propsUnstableInput.inert = true;
          propsUnstableInput.tabIndex = -1;
          propsUnstableInput.role = "presentation";
          propsUnstableInput["aria-hidden"] = "true";
          propsUnstableInput.onFocus = (_3) => focus(getLabelElement?.());
        } else {
        }
        propsUnstableLabel.role = role;
        propsUnstableLabel.tabIndex = 0;
        propsUnstableLabel["aria-checked"] = checked ?? false;
        propsUnstableLabel["aria-disabled"] = !!disabled;
        break;
      }
    }
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      randomIdInputReturn,
      randomIdLabelReturn,
      pressInputReturn,
      pressLabelReturn,
      checkboxLikeInputReturn: { propsUnstable: propsUnstableInput },
      checkboxLikeLabelReturn: { propsUnstable: propsUnstableLabel },
      propsInput: useMergedProps(propsInput, propsUnstableInput, propsPressInput),
      propsLabel: useMergedProps(propsLabel, propsUnstableLabel, propsPressLabel),
      checkboxLikeReturn: { focusSelf },
      pressReturn
    };
  });

  // ../dist/use-checkbox.js
  var useCheckbox = monitored(function useCheckbox2({ checkboxLikeParameters: { checked, disabled, ...void2 }, checkboxParameters: { onCheckedChange, ...void4 }, labelParameters, pressParameters, ...void1 }) {
    const { tagInput, labelPosition } = labelParameters;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
    const { propsInput, propsLabel, checkboxLikeInputReturn, checkboxLikeLabelReturn, checkboxLikeReturn, pressInputReturn, pressLabelReturn, pressReturn, randomIdInputReturn, randomIdLabelReturn, ...void3 } = useCheckboxLike({
      randomIdInputParameters: { prefix: Prefices.checkboxLikeInput },
      randomIdLabelParameters: { prefix: Prefices.checkboxLikeLabel },
      refElementInputReturn,
      refElementLabelReturn,
      checkboxLikeParameters: { role: "checkbox", checked, disabled },
      pressParameters: {
        onPressSync: useStableCallback((e3) => {
          onCheckedChange?.(enhanceEvent(e3, { checked: !checked, previous: checked }));
        }),
        ...pressParameters
      },
      labelParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
      checkboxReturn: { propsUnstable: { type: tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : void 0 } },
      propsInput: useMergedProps(propsInput, propsRefInput),
      propsLabel: useMergedProps(propsLabel, propsRefLabel),
      checkboxLikeInputReturn,
      checkboxLikeLabelReturn,
      checkboxLikeReturn,
      pressInputReturn,
      pressLabelReturn,
      pressReturn,
      randomIdInputReturn,
      randomIdLabelReturn
    };
  });

  // ../dist/use-dialog.js
  var useDialog = monitored(function useDialog2({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }) {
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn, ...void2 } = useModal({
      dismissParameters: { dismissActive: true, ...dismissParameters },
      backdropDismissParameters: { onDismissBackdrop: null, ...backdropDismissParameters },
      lostFocusDismissParameters: { onDismissLostFocus: null, dismissLostFocusActive: false },
      escapeDismissParameters: { onDismissEscape: null, ...escapeDismissParameters },
      modalParameters,
      refElementParameters,
      activeElementParameters,
      focusTrapParameters: { trapActive: true, onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel, pressReturn, randomIdInputReturn: _randomIdInputReturn, randomIdLabelReturn: _randomIdLabelReturn, ...void3 } = useLabelSynthetic({
      labelParameters: {
        ...labelParameters,
        onLabelClick: useStableCallback(() => {
          const e3 = refElementPopupReturn.getElement();
          focusTrapParameters.focusPopup(e3, () => findFirstFocusable(e3));
        })
      },
      randomIdInputParameters: { prefix: Prefices.dialog },
      randomIdLabelParameters: { prefix: Prefices.dialogTitle }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      propsFocusContainer,
      propsDialog: useMergedProps(propsStablePopup, propsInput),
      propsSource: { ...propsStableSource },
      propsTitle: propsLabel,
      pressReturn,
      refElementPopupReturn,
      refElementSourceReturn
    };
  });

  // ../dist/use-drawer.js
  var useDrawer = monitored(function useDrawer2({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, labelParameters, backdropDismissParameters, lostFocusDismissParameters, modalParameters, refElementParameters, ...void1 }) {
    const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn, ...void2 } = useModal({
      dismissParameters: { dismissActive: true, ...dismissParameters },
      escapeDismissParameters: { onDismissEscape: null, ...escapeDismissParameters },
      backdropDismissParameters: { onDismissBackdrop: null, ...backdropDismissParameters },
      lostFocusDismissParameters: { onDismissLostFocus: null, ...lostFocusDismissParameters },
      activeElementParameters,
      modalParameters,
      refElementParameters,
      focusTrapParameters: { onlyMoveFocus: false, ...focusTrapParameters }
    });
    const { propsInput, propsLabel, pressReturn: _pressReturn, randomIdInputReturn: _randomIdInputReturn, randomIdLabelReturn: _randomIdLabelReturn, ...void3 } = useLabelSynthetic({
      labelParameters: {
        ...labelParameters,
        onLabelClick: useStableCallback(() => {
          const e3 = refElementPopupReturn.getElement();
          focusTrapParameters.focusPopup(e3, () => findFirstFocusable(e3));
        })
      },
      randomIdInputParameters: { prefix: Prefices.drawer },
      randomIdLabelParameters: { prefix: Prefices.drawerTitle }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      propsFocusContainer,
      propsDrawer: useMergedProps(propsStablePopup, propsInput),
      propsTitle: propsLabel,
      propsSource: { ...propsStableSource },
      refElementPopupReturn,
      refElementSourceReturn
    };
  });

  // ../dist/use-gridlist.js
  var useGridlist = monitored(function useGridlist2({ labelParameters, listboxParameters: { groupingType, ...void1 }, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _gridlistId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
      labelParameters: {
        ...labelParameters,
        onLabelClick: useStableCallback(() => {
          rovingTabIndexReturn.focusSelf();
        })
      },
      randomIdInputParameters: { prefix: Prefices.gridlist },
      randomIdLabelParameters: { prefix: Prefices.gridlistLabel }
    });
    const { contextChildren, props, rovingTabIndexReturn, singleSelectionReturn: _singleSelectionReturn, ...restRet } = useCompleteGridNavigationDeclarative({
      singleSelectionDeclarativeParameters,
      rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
      gridNavigationParameters,
      linearNavigationParameters,
      multiSelectionParameters,
      paginatedChildrenParameters,
      refElementParameters,
      singleSelectionParameters,
      typeaheadNavigationParameters
    });
    let propsGridlist = useMergedProps(props, propsLabelList, { "aria-multiselectable": contextChildren.multiSelectionContext.multiSelectionMode != "disabled" ? "true" : void 0 });
    let fullContext = useMemoObject({
      ...contextChildren,
      gridlistRowContext: useMemoObject({
        //selectionLimit
      })
    });
    if (groupingType == "group")
      propsGridlist.role = "group";
    else if (groupingType == "with-groups") {
      propsGridlist = { role: "grid" };
      fullContext = null;
    } else {
      propsGridlist.role = "grid";
    }
    return {
      contextChildren: fullContext,
      rovingTabIndexReturn,
      propsGridlist,
      propsGridlistLabel: propsLabelLabel,
      ...restRet
    };
  });
  var useGridlistRow = monitored(function useGridlistRow2({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    const { context: cx2, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, pressParameters, multiSelectionChildReturn, refElementReturn, ...void2 } = useCompleteGridNavigationRow({
      linearNavigationParameters,
      info,
      context: cx1,
      rovingTabIndexParameters,
      textContentParameters,
      typeaheadNavigationParameters,
      hasCurrentFocusParameters,
      singleSelectionChildParameters,
      multiSelectionChildParameters
    });
    if (cx1.multiSelectionContext.multiSelectionMode == "disabled")
      console.assert(selected == null);
    props.role = "row";
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      pressParameters,
      linearNavigationReturn,
      managedChildrenReturn,
      managedChildReturn,
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      multiSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn,
      context: cx2,
      hasCurrentFocusReturn,
      refElementReturn,
      props
    };
  });
  var useGridlistCell = monitored(function useGridlistCell2({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p4 }) {
    const { props, refElementReturn, ...info } = useCompleteGridNavigationCell(p4);
    assertEmptyObject(void1);
    const { pressReturn, props: propsPress } = usePress({
      pressParameters: { onPressSync, focusSelf: p4.info.focusSelf, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: info.pressParameters.excludeSpace, longPressThreshold, onPressingChange },
      refElementReturn
    });
    return {
      ...info,
      propsPress,
      propsCell: { role: "gridcell" },
      propsTabbable: props,
      refElementReturn,
      pressReturn
    };
  });

  // ../dist/use-listbox.js
  var useListbox = monitored(function useListbox2({ labelParameters, listboxParameters: { groupingType, orientation }, linearNavigationParameters, singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void2 }, singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex, ...void3 }, rovingTabIndexParameters, ...restParams }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
      labelParameters: {
        ...labelParameters,
        onLabelClick: useStableCallback(() => {
          rovingTabIndexReturn.focusSelf();
        })
      },
      randomIdInputParameters: { prefix: Prefices.listbox },
      randomIdLabelParameters: { prefix: Prefices.listboxLabel }
    });
    let { contextChildren, contextProcessing, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn: _singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
      rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
      singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
      singleSelectionParameters: { singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected", singleSelectionMode },
      linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
      multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange },
      ...restParams
    });
    if (groupingType == "group")
      props.role = "group";
    else if (groupingType == "with-groups") {
      props = { role: "listbox" };
      contextChildren = null;
      contextProcessing = null;
    } else {
      props.role = "listbox";
    }
    return {
      ...restRet,
      contextChildren,
      contextProcessing,
      rovingTabIndexReturn,
      propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": multiSelectionMode != "disabled" ? true : void 0 }),
      propsListboxLabel: propsLabelLabel
    };
  });
  var useListboxItem = monitored(function useListboxItem2({ context, listboxParameters, pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, singleSelectionChildParameters: { singleSelectionDisabled }, ...restParams }) {
    const { propsChild, propsTabbable, refElementReturn, pressParameters: { onPressSync, excludeSpace, ...void2 }, ...restRet } = useCompleteListNavigationChildDeclarative({
      context,
      singleSelectionChildParameters: { singleSelectionDisabled },
      ...restParams
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(listboxParameters);
    propsChild.role = "option";
    propsChild["aria-disabled"] = singleSelectionDisabled ? "true" : void 0;
    const { pressReturn, props: propsPress } = usePress({
      refElementReturn,
      pressParameters: {
        onPressSync,
        focusSelf: restParams.info.focusSelf,
        excludeSpace,
        allowRepeatPresses,
        excludeEnter,
        excludePointer,
        longPressThreshold,
        onPressingChange
      }
    });
    return {
      pressReturn,
      refElementReturn,
      props: useMergedProps(propsChild, propsTabbable, propsPress),
      ...restRet
    };
  });

  // ../dist/use-menu-surface.js
  var useMenuSurface = monitored(function useMenuSurface2({ dismissParameters, focusTrapParameters, activeElementParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, modalParameters, escapeDismissParameters, ...void2 }) {
    const { refElementReturn: { getElement: getButtonElement }, propsStable: propsRefTrigger, ...void4 } = useRefElement({ refElementParameters: { onElementChange: void 0 } });
    const { refElementReturn: { getElement: getMenuElement, ...void5 }, propsStable: propsRefSurface, ...void6 } = useRefElement({ refElementParameters: { onElementChange: void 0 } });
    const { propsFocusContainer, propsStablePopup: propsPopup, propsStableSource: ps2, refElementPopupReturn, refElementSourceReturn } = useModal({
      dismissParameters: { dismissActive: true, ...dismissParameters },
      backdropDismissParameters: { dismissBackdropActive: true, onDismissBackdrop: null },
      lostFocusDismissParameters: { dismissLostFocusActive: true, onDismissLostFocus: null },
      escapeDismissParameters: { dismissEscapeActive: true, onDismissEscape: null, ...escapeDismissParameters },
      modalParameters,
      refElementParameters: {},
      activeElementParameters,
      focusTrapParameters: {
        onlyMoveFocus: true,
        trapActive: true,
        focusOpener: useStableCallback(() => {
          const buttonElement = getButtonElement();
          focus(buttonElement);
        }),
        ...focusTrapParameters
      }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    const propsSurface = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);
    const propsTarget = useMergedProps({
      role,
      id: surfaceId
    });
    const propsTrigger = useMergedProps({
      "aria-expanded": modalParameters.active,
      "aria-haspopup": role
    }, propsRefTrigger, ps2, { "aria-controls": surfaceId });
    const propsSentinel = useFocusSentinel({
      focusSentinel: {
        sendFocusToMenu: useStableCallback(() => {
          return focusTrapParameters.focusPopup(getMenuElement(), () => findFirstFocusable(getMenuElement()));
        }),
        onClose: useStableCallback((e3) => {
          dismissParameters.onDismiss(e3, "lost-focus");
        }),
        open: modalParameters.active
      }
    });
    return {
      propsSentinel,
      propsSurface,
      propsTarget,
      propsTrigger,
      refElementPopupReturn,
      refElementSourceReturn
    };
  });
  var useFocusSentinel = monitored(function useFocusSentinel2({ focusSentinel: { open, onClose, sendFocusToMenu } }) {
    const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
    const stableOnClose = useStableCallback(onClose);
    const [sentinelIsActive, setSentinelIsActive] = useState(false);
    useTimeout({ callback: () => {
      setSentinelIsActive(open);
    }, timeout: 100, triggerIndex: `${open}-${sentinelIsActive}` });
    const onFocus = sentinelIsActive ? (e3) => stableOnClose(e3) : () => getSendFocusWithinMenu()?.();
    const onClick = (e3) => stableOnClose(e3);
    return {
      tabIndex: sentinelIsActive ? 0 : -1,
      onFocus,
      onClick
    };
  });

  // ../dist/use-toolbar.js
  var useToolbar = monitored(function useToolbar2({ linearNavigationParameters, toolbarParameters: { orientation, role, disabled }, labelParameters, rovingTabIndexParameters, singleSelectionParameters, singleSelectionDeclarativeParameters, ...listNavParameters }) {
    if (singleSelectionDeclarativeParameters.singleSelectedIndex !== void 0) {
      console.assert(singleSelectionParameters.singleSelectionMode != "disabled");
    }
    const { contextChildren, contextProcessing, props, ...listNavReturn } = useCompleteListNavigationDeclarative({
      ...listNavParameters,
      rovingTabIndexParameters: { ...rovingTabIndexParameters, untabbable: disabled, focusSelfParent: focus },
      singleSelectionDeclarativeParameters,
      paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
      linearNavigationParameters: { ...linearNavigationParameters, arrowKeyDirection: orientation },
      singleSelectionParameters
    });
    const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic({
      labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
      randomIdInputParameters: { prefix: Prefices.toolbar },
      randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
    });
    return {
      contextChildren: useMemoObject({ ...contextChildren, toolbarContext: useMemoObject({}) }),
      contextProcessing,
      propsLabel,
      propsToolbar: useMergedProps({
        ...propsToolbar,
        role: role ?? void 0,
        tabIndex: disabled ? 0 : -1,
        "aria-disabled": disabled ? "true" : void 0
      }, props),
      randomIdInputReturn,
      randomIdLabelReturn,
      ...listNavReturn
    };
  });
  var useToolbarChild = monitored(function useToolbarChild2({ context, info, toolbarChildParameters: { disabledProp }, ...args }) {
    const { propsChild, propsTabbable, ...listNavReturn } = useCompleteListNavigationChild({ info, context, ...args });
    return {
      propsChild: useMergedProps(propsChild, { [disabledProp]: args.singleSelectionChildParameters.singleSelectionDisabled || args.multiSelectionChildParameters.multiSelectionDisabled ? true : void 0 }),
      propsTabbable,
      ...listNavReturn
    };
  });

  // ../dist/use-menubar.js
  var useMenubar = monitored(function useMenubar2(args) {
    const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
    return {
      propsMenubar,
      ...restReturn
    };
  });
  var useMenubarChild = monitored(function useMenubarChild2({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }) {
    const focusSelf = x2((e3) => focus(e3), []);
    assertEmptyObject(void1);
    const { propsChild, propsTabbable, pressParameters: { onPressSync, excludeSpace }, ...restRet } = useToolbarChild({
      ...restParams,
      toolbarChildParameters: { disabledProp: "aria-disabled" }
    });
    const { pressReturn, props: propsPress } = usePress({
      pressParameters: {
        focusSelf,
        excludeSpace,
        onPressSync: useStableCallback((e3) => {
          onPressSync?.(e3);
          opu?.(e3);
        }),
        allowRepeatPresses: false,
        excludeEnter: returnFalse,
        excludePointer: returnFalse,
        longPressThreshold: null,
        onPressingChange
      },
      refElementReturn: restRet.refElementReturn
    });
    propsChild.role = role;
    return {
      props: useMergedProps(propsChild, propsTabbable, propsPress),
      pressReturn,
      ...restRet
    };
  });

  // ../dist/use-menu.js
  var useMenu = monitored(function useMenu2({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, activeElementParameters, toolbarParameters, modalParameters, ...restParams }) {
    const { contextChildren, propsLabel: propsButtonAsMenuLabel, propsMenubar, randomIdInputReturn, rovingTabIndexReturn, ...restRet } = useMenubar({
      toolbarParameters: { role: "menu", ...toolbarParameters },
      labelParameters: { ariaLabel: null },
      ...restParams
    });
    const onKeyDown = useStableCallback((e3) => {
      const isOpen = modalParameters.active;
      if (!isOpen) {
        switch (e3.key) {
          case "ArrowUp": {
            if (openDirection == "up") {
              onOpen();
              e3.preventDefault();
              e3.stopPropagation();
            }
            break;
          }
          case "ArrowDown": {
            if (openDirection == "down") {
              onOpen();
              e3.preventDefault();
              e3.stopPropagation();
            }
            break;
          }
          case "ArrowLeft": {
            if (openDirection == "left") {
              onOpen();
              e3.preventDefault();
              e3.stopPropagation();
            }
            break;
          }
          case "ArrowRight": {
            if (openDirection == "right") {
              onOpen();
              e3.preventDefault();
              e3.stopPropagation();
            }
            break;
          }
        }
      }
    });
    const { propsTarget, propsTrigger, refElementSourceReturn, ...restRet2 } = useMenuSurface({
      menuSurfaceParameters: {
        ...menuSurfaceParameters,
        surfaceId: randomIdInputReturn.id,
        role: "menu"
      },
      escapeDismissParameters,
      modalParameters,
      dismissParameters,
      activeElementParameters,
      focusTrapParameters: {
        focusPopup: () => {
          rovingTabIndexReturn.focusSelf();
        }
      }
    });
    return {
      ...restRet,
      ...restRet2,
      context: useMemoObject({
        ...contextChildren,
        menu: useMemoObject({
          closeFromMenuItemClicked: useStableCallback((e3) => {
            dismissParameters.onDismiss(e3, "item-clicked");
          })
        })
      }),
      refElementSourceReturn,
      rovingTabIndexReturn,
      randomIdInputReturn,
      propsTarget: useMergedProps(propsTarget, propsMenubar),
      propsTrigger: useMergedProps({ onKeyDown }, propsTrigger, propsButtonAsMenuLabel)
    };
  });
  var useMenuItem = monitored(function useMenuItem2(p4) {
    const ret = useMenubarChild(p4);
    return {
      ...ret,
      menuItemReturn: { closeMenu: p4.context.menu.closeFromMenuItemClicked }
    };
  });

  // ../dist/use-notify.js
  var NotificationProviderContext = G(null);
  var useNotificationProvider = monitored(function useNotificationProvider2({ targetAssertive, targetPolite }) {
    const { children: childrenPolite, pushChild: notifyPolite, portalElement: politeElement } = usePortalChildren({ target: targetPolite });
    const { children: childrenAssertive, pushChild: notifyAssertive, portalElement: assertiveElement } = usePortalChildren({ target: targetAssertive });
    console.assert(politeElement?.getAttribute("aria-live") == "polite");
    console.assert(assertiveElement?.getAttribute("aria-live") == "assertive");
    const notify = x2((mode, child) => {
      return mode == "assertive" ? notifyAssertive(child) : notifyPolite(child);
    }, [notifyAssertive, notifyPolite]);
    return {
      notify,
      context: q2(() => ({ notify }), [notify]),
      children: u4(g, { children: [childrenPolite, childrenAssertive] })
    };
  });
  function useNotify() {
    return useContextWithWarning(NotificationProviderContext, "notification provider").notify;
  }

  // ../dist/use-progress.js
  var useProgress = monitored(function useProgress2({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagProgressIndicator, ...void1 }, ...void2 }) {
    const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn, pressReturn, ...void3 } = useLabelSynthetic({
      labelParameters: { ...labelParameters, onLabelClick: null },
      randomIdInputParameters: { prefix: Prefices.progressIndicator },
      randomIdLabelParameters: { prefix: Prefices.progressLabel }
    });
    propsInput.tabIndex = -1;
    const busy = value && value != "disabled";
    const disabled = value == "disabled";
    if (typeof value != "number") {
      value = null;
      max ??= 100;
    }
    const indicatorProps = tagProgressIndicator === "progress" ? {
      max,
      value: value ?? void 0,
      "aria-valuemin": 0,
      "aria-valuenow": value == null ? void 0 : value
    } : {
      "aria-valuemin": 0,
      "aria-valuemax": max == null ? void 0 : max,
      "aria-valuetext": valueText == null ? void 0 : `${valueText}`,
      "aria-valuenow": value == null ? void 0 : value,
      role: "progressbar"
    };
    if (disabled) {
      indicatorProps["aria-hidden"] = true;
    }
    const labelProps = {
      "aria-hidden": !busy ? "true" : void 0
    };
    const regionProps = {
      "aria-busy": !!busy,
      "aria-describedby": randomIdInputReturn.id
    };
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      propsProgressIndicator: useMergedProps(indicatorProps, propsInput),
      propsProgressLabel: useMergedProps(labelProps, propsLabel),
      propsProgressRegion: regionProps,
      randomIdInputReturn,
      randomIdLabelReturn,
      pressReturn
    };
  });
  var useProgressWithHandler = monitored(function useProgressWithHandler2({ labelParameters, progressIndicatorParameters, asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters }, progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 }, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const notify = useNotify();
    const asyncInfo = useAsyncHandler({
      ...asyncHandlerParameters,
      asyncHandler: (...args) => {
        try {
          let promiseOrValue = asyncHandler?.(...args);
          if (promiseOrValue && "then" in promiseOrValue) {
            if (notifyPending)
              notify("assertive", notifyPending);
            return promiseOrValue.then((value) => {
              if (notifySuccess)
                notify("assertive", notifySuccess);
              return value;
            });
          }
          return promiseOrValue;
        } catch (ex) {
          if (notifyFailure)
            notify("assertive", notifyFailure);
          throw ex;
        }
      }
    });
    const { propsProgressIndicator, propsProgressLabel, propsProgressRegion } = useProgress({
      labelParameters,
      progressIndicatorParameters: {
        max: 1,
        value: forciblyPending || asyncInfo.pending ? "indeterminate" : "disabled",
        valueText: null,
        ...progressIndicatorParameters
      }
    });
    return {
      propsProgressIndicator,
      propsProgressLabel,
      propsProgressRegion,
      asyncHandlerReturn: asyncInfo
    };
  });

  // ../dist/use-radio-group.js
  var useRadioGroup = monitored(function useRadioGroup2({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, typeaheadNavigationParameters, refElementParameters, singleSelectionParameters: { singleSelectionMode, ...void4 }, ...void1 }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const nameToIndex = F2(/* @__PURE__ */ new Map());
    const indexToName = F2(/* @__PURE__ */ new Map());
    _(() => {
      setSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
    }, [selectedValue]);
    const { propsInput: propsGroup1, propsLabel } = useLabelSynthetic({
      labelParameters: {
        onLabelClick: useStableCallback(() => {
          rovingTabIndexReturn.focusSelf();
        }),
        ...labelParameters
      },
      randomIdLabelParameters: { prefix: Prefices.radioGroupLabel },
      randomIdInputParameters: { prefix: Prefices.radioGroup }
    });
    const { contextChildren, props: propsGroup2, singleSelectionReturn, multiSelectionReturn: _multiSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, linearNavigationReturn, rearrangeableChildrenReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, contextProcessing: _contextProcessing, refElementReturn, ...void3 } = useCompleteListNavigationDeclarative({
      singleSelectionDeclarativeParameters: {
        singleSelectedIndex: selectedIndex,
        onSingleSelectedIndexChange: useStableCallback((e3) => {
          setSelectedIndex(e3[EventDetail].selectedIndex);
          onSelectedValueChange?.(enhanceEvent(e3, { selectedValue: indexToName.current.get(e3[EventDetail].selectedIndex) }));
        })
      },
      singleSelectionParameters: { singleSelectionMode, singleSelectionAriaPropName: null },
      multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
      paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
      rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
      linearNavigationParameters,
      typeaheadNavigationParameters,
      refElementParameters
    });
    const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
      propsRadioGroup,
      propsRadioGroupLabel: propsLabel,
      rovingTabIndexReturn,
      linearNavigationReturn,
      refElementReturn,
      managedChildrenReturn,
      radioGroupReturn: { selectedIndex },
      singleSelectionReturn,
      rearrangeableChildrenReturn,
      typeaheadNavigationReturn,
      childrenHaveFocusReturn,
      context: q2(() => ({
        ...contextChildren,
        radioContext: { name, indexToName: indexToName.current, nameToIndex: nameToIndex.current }
      }), [name])
    };
  });
  var useRadio = monitored(function useRadio2({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }) {
    const index = info.index;
    const { name, indexToName, nameToIndex } = context.radioContext;
    const { tagInput, labelPosition } = labelParameters;
    const { pressParameters: { excludeSpace, onPressSync }, singleSelectionChildReturn, propsTabbable, propsChild: listNavigationSingleSelectionChildProps, ...listNavRet } = useCompleteListNavigationChildDeclarative({
      info: {
        focusSelf: useStableCallback((_e) => {
          return checkboxLikeRet.checkboxLikeReturn.focusSelf();
        }),
        ...info
      },
      context,
      textContentParameters,
      hasCurrentFocusParameters,
      refElementParameters,
      singleSelectionChildParameters: { singleSelectionDisabled: !!disabled },
      multiSelectionChildParameters: { multiSelectionDisabled: true },
      multiSelectionChildDeclarativeParameters: { multiSelected: false, onMultiSelectedChange: null }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const { singleSelected: checked } = singleSelectionChildReturn;
    const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
    const { propsInput, propsLabel, ...checkboxLikeRet } = useCheckboxLike({
      checkboxLikeParameters: {
        checked: checked ?? false,
        disabled,
        role: "radio"
      },
      pressParameters: { excludeSpace, longPressThreshold, onPressSync },
      labelParameters,
      randomIdInputParameters: { prefix: Prefices.radio },
      randomIdLabelParameters: { prefix: Prefices.radioLabel },
      refElementInputReturn,
      refElementLabelReturn
    });
    A2(() => {
      nameToIndex.set(value, index);
      indexToName.set(index, value);
      return () => {
        nameToIndex.delete(value);
        indexToName.delete(index);
      };
    }, [value, index]);
    if (tagInput == "input") {
      propsInput.name = name;
      propsInput.checked = checked ?? false;
      propsInput.type = "radio";
    } else {
      propsInput["aria-checked"] = checked ?? false;
    }
    const propsIfInputHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsInput);
    const propsInput2 = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);
    const propsIfLabelHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsLabel);
    const propsLabel2 = useMergedProps(propsRefLabel, labelPosition == "wrapping" ? propsIfLabelHandlesFocus : propsLabel);
    const ret = {
      propsInput: propsInput2,
      propsLabel: propsLabel2,
      singleSelectionChildReturn,
      ...checkboxLikeRet,
      ...listNavRet
    };
    return ret;
  });

  // ../dist/use-slider.js
  var useSlider = monitored(function useSlider2({ sliderParameters: { max, min }, managedChildrenParameters }) {
    const { context, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const baseIdRef = F2(null);
    if (baseIdRef.current === null)
      baseIdRef.current = generateRandomId(Prefices.sliderThumb);
    return {
      context: q2(() => ({
        ...context,
        sliderContext: {
          min,
          max,
          baseId: baseIdRef.current
        }
      }), [min, max]),
      managedChildrenReturn
    };
  });
  var useSliderThumb = monitored(function useSliderThumb2({ sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 }, info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, ...void1 }) {
    const { managedChildReturn } = useManagedChild({ info, context });
    const { getChildren: _getThumbs } = managedChildReturn;
    const min = minOverride ?? minParent;
    const max = maxOverride ?? maxParent;
    let newProps = tag == "input" ? { min, max, value, type: "range" } : { "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": value };
    newProps = { ...newProps, "aria-label": label, "aria-valuetext": valueText ?? void 0, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
    if (tag == "input") {
      newProps.onInput = (e3) => {
        onValueChange?.(enhanceEvent(e3, { value: e3.currentTarget.valueAsNumber }));
      };
    } else {
      throw new Error("Unimplemented");
    }
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
      sliderThumbReturn: {
        min,
        max
      },
      managedChildReturn,
      propsSliderThumb: newProps
    };
  });

  // ../dist/use-table.js
  var useTable = monitored(function useTable2({ labelParameters, tableParameters: { tagTable }, singleSelectionParameters: { singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionMode, ...void2 }, ...void3 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const [getSortBody, setSortBody] = usePassiveState(null, returnNull);
    const [_sortDirection, setSortDirection, getSortDirection] = useState("ascending");
    const [_sortColumn, setSortColumn, getSortColumn] = useState(null);
    const sortByColumn = x2((column) => {
      let nextSortDirection = getSortDirection();
      let nextSortIndex = getSortColumn();
      if (column == nextSortIndex) {
        setSortDirection(nextSortDirection = nextSortDirection == "ascending" ? "descending" : "ascending");
      } else {
        setSortColumn(nextSortIndex = column);
      }
      const sortBody = getSortBody();
      console.assert(!!sortBody);
      if (!sortBody) {
        debugger;
        console.error("An attempt was made to sort a table with a head but no body");
      } else {
        sortBody();
      }
      return { column: nextSortIndex, direction: nextSortDirection };
    }, []);
    const { propsInput: propsLabelList, propsLabel: propsLabelLabel } = useLabelSynthetic({
      labelParameters: { ...labelParameters, onLabelClick: null },
      randomIdInputParameters: { prefix: Prefices.table },
      randomIdLabelParameters: { prefix: Prefices.tableLabel }
    });
    return {
      propsTable: useMergedProps({ role: tagTable == "table" ? void 0 : "grid", "aria-multiselectable": multiSelectionMode != "disabled" ? "true" : void 0 }, propsLabelList),
      propsLabel: propsLabelLabel,
      context: useMemoObject({
        tableContext: useMemoObject({
          sortByColumn,
          setSortBodyFunction: setSortBody,
          getCurrentSortColumn: getSortColumn,
          getCurrentSortDirection: getSortDirection,
          singleSelectionMode,
          multiSelectionMode
        })
      })
    };
  });
  var naturalSectionTypes = /* @__PURE__ */ new Set(["thead", "tbody", "tfoot"]);
  var useTableSection = monitored(function useTableSection2({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, gridNavigationParameters, paginatedChildrenParameters, tableSectionParameters: { tagTableSection, location }, typeaheadNavigationParameters, contextChildren: { tableContext, ...void3 }, refElementParameters, ...void1 }) {
    const { childrenHaveFocusReturn, contextChildren, contextProcessing, refElementReturn, linearNavigationReturn, managedChildrenReturn, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, rearrangeableChildrenReturn, ...void2 } = useCompleteGridNavigation({
      linearNavigationParameters,
      rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
      singleSelectionParameters: { ...singleSelectionParameters, singleSelectionMode: tableContext.singleSelectionMode },
      multiSelectionParameters: { ...multiSelectionParameters, multiSelectionMode: tableContext.multiSelectionMode },
      paginatedChildrenParameters,
      typeaheadNavigationParameters,
      gridNavigationParameters,
      refElementParameters
    });
    if (!naturalSectionTypes.has(tagTableSection)) {
      props.role = "rowgroup";
    }
    _(() => {
      if (location == "body") {
        tableContext.setSortBodyFunction(() => {
          return () => {
            rearrangeableChildrenReturn.sort(tableContext.getCurrentSortDirection());
          };
        });
      }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      childrenHaveFocusReturn,
      contextChildren: {
        ...contextChildren,
        tableContext
      },
      contextProcessing,
      refElementReturn,
      linearNavigationReturn,
      managedChildrenReturn,
      rovingTabIndexReturn,
      singleSelectionReturn,
      multiSelectionReturn,
      rearrangeableChildrenReturn,
      typeaheadNavigationReturn,
      propsTableSection: props
    };
  });
  var useTableRow = monitored(function useTableRow2({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    assertEmptyObject(void1);
    const {
      context: cx2,
      managedChildrenReturn,
      props: { ...props },
      ...restRet
      // props
    } = useCompleteGridNavigationRow({
      textContentParameters,
      hasCurrentFocusParameters,
      context: { ...cx1 },
      info,
      linearNavigationParameters,
      rovingTabIndexParameters,
      singleSelectionChildParameters,
      multiSelectionChildParameters,
      // gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: cx1.tableContext.getCurrentSortColumn },
      typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity, onNavigateTypeahead: null }
    });
    props.role = "row";
    if (selected) {
      switch (cx1.singleSelectionContext.singleSelectionAriaPropName) {
        case "aria-checked":
        case "aria-pressed":
        case "aria-selected":
          props[cx1.singleSelectionContext.singleSelectionAriaPropName ?? "aria-selected"] = "true";
          break;
        default: {
          console.assert(false, cx1.singleSelectionContext.singleSelectionAriaPropName + " is not valid for multi-select -- prefer checked, selected, or pressed");
        }
      }
    }
    return {
      context: useMemoObject({
        ...cx2,
        tableContext: cx1.tableContext
      }),
      props,
      managedChildrenReturn,
      ...restRet
    };
  });
  var useTableCell = monitored(function useTableCell2({ tableCellParameters: { tagTableCell }, info, ...p4 }) {
    const { props, ...ret } = useCompleteGridNavigationCell({
      info,
      ...p4
    });
    return {
      propsFocus: props,
      propsCell: { role: tagTableCell != "th" && tagTableCell != "td" ? "gridcell" : void 0 },
      ...ret,
      tableCellReturn: {
        sortByThisColumn: useStableCallback(() => {
          return p4.context.tableContext.sortByColumn(info.index);
        }, [])
      }
    };
  });

  // ../dist/use-tabs.js
  var useTabs = monitored(function useTabs2({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange: ssi, singleSelectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }) {
    const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, 0);
    if (localStorageIndex != null)
      initiallySingleSelectedIndex = localStorageIndex;
    const baseId = generateRandomId("aria-tabs-");
    const getTabId = x2((index) => {
      return baseId + "-tab-" + index;
    }, []);
    const getPanelId = x2((index) => {
      return baseId + "-panel-" + index;
    }, []);
    const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren({
      managedChildrenParameters: {
        onChildrenMountChange: useStableCallback((_m, _u) => {
          reevaluateClosestFit(void 0);
        })
      }
    });
    const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({
      getChildren: panelChildrenReturn.getChildren,
      closestFit: false,
      onClosestFit: null,
      initialIndex: null,
      getAt: useStableCallback((i5) => {
        return i5.getVisible() ?? false;
      }, []),
      setAt: useStableCallback((i5, b3, n2, p4) => {
        return i5.setVisibleIndex(n2, p4);
      }, []),
      isValid: returnTrue,
      onIndexChange: null
    });
    A2(() => {
      changeVisiblePanel(initiallySingleSelectedIndex ?? null, void 0);
    }, []);
    const { propsInput, propsLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
      labelParameters: { ...labelParameters, onLabelClick: useStableCallback(() => listNavRet1.rovingTabIndexReturn.focusSelf()) },
      randomIdInputParameters: { prefix: Prefices.tablist },
      randomIdLabelParameters: { prefix: Prefices.tablistLabel }
    });
    const { props: listNavigationSingleSelectionProps, contextChildren, ...listNavRet1 } = useCompleteListNavigation({
      linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
      rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
      singleSelectionParameters: {
        onSingleSelectedIndexChange: useStableCallback((e3) => {
          ssi?.(e3);
          changeVisiblePanel(e3[EventDetail].selectedIndex, e3);
          setLocalStorageIndex(e3[EventDetail].selectedIndex);
          changeSingleSelectedIndex(e3[EventDetail].selectedIndex, e3);
        }),
        singleSelectionAriaPropName: "aria-selected",
        singleSelectionMode: singleSelectionMode ?? "focus",
        initiallySingleSelectedIndex: initiallySingleSelectedIndex ?? null,
        ...singleSelectionParameters
      },
      multiSelectionParameters: {
        multiSelectionAriaPropName: null,
        multiSelectionMode: "disabled",
        onSelectionChange: null
      },
      paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
      ...restParams
    });
    const { singleSelectionReturn: { changeSingleSelectedIndex } } = listNavRet1;
    return {
      contextPanels: useMemoObject({
        ...managedChildContext,
        tabPanelContext: useMemoObject({
          getPanelId,
          getTabId,
          getVisibleIndex,
          setSelectedIndex: changeSingleSelectedIndex
        })
      }),
      contextTabs: useMemoObject({
        ...contextChildren,
        tabsContext: useMemoObject({ getTabId, getPanelId, getVisibleIndex, setSelectedIndex: changeSingleSelectedIndex })
      }),
      propsContainer: useMergedProps(listNavigationSingleSelectionProps, propsInput, {
        role: role ?? "tablist",
        "aria-orientation": orientation ?? "horizontal"
      }),
      propsLabel,
      ...listNavRet1
    };
  });
  var useTab = monitored(function useTab2({ info: { focusSelf: focusSelfParent, index, untabbable, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context, hasCurrentFocusParameters, refElementParameters, singleSelectionChildParameters, ...void3 }) {
    const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, pressParameters: { onPressSync, excludeSpace, ...void1 }, refElementReturn, ...listNavRet2 } = useCompleteListNavigationChild({
      context,
      info: { index, focusSelf: focusSelfParent, untabbable, ...info },
      textContentParameters,
      hasCurrentFocusParameters,
      refElementParameters,
      singleSelectionChildParameters,
      multiSelectionChildParameters: { initiallyMultiSelected: false, multiSelectionDisabled: true, onMultiSelectChange: null }
    });
    const { pressReturn, props: propsPressStable } = usePress({
      pressParameters: {
        onPressSync,
        focusSelf: focusSelfChild,
        allowRepeatPresses: false,
        excludeEnter: returnFalse,
        excludePointer: returnFalse,
        excludeSpace,
        longPressThreshold,
        onPressingChange
      },
      refElementReturn
    });
    const { singleSelectionChildReturn: { singleSelected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
    const { getPanelId, getTabId } = context.tabsContext;
    const panelId = getPanelId(index);
    const tabId = getTabId(index);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
      pressReturn,
      refElementReturn,
      props: useMergedProps(propsPressStable, listNavigationSingleSelectionChildProps, propsTabbable, {
        "data-tabbable": tabbable.toString(),
        "data-selected": singleSelected.toString(),
        role: "tab",
        "aria-controls": panelId,
        id: tabId
      }),
      ...listNavRet2
    };
  });
  var useTabPanel = monitored(function useTabPanel2({ info, context }) {
    const { index } = info;
    const { tabPanelContext: { getVisibleIndex: g4, getPanelId, getTabId } } = context;
    const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g4());
    const [isVisible, setIsVisible, _getIsVisible] = useState(null);
    useManagedChild({
      context,
      info: {
        getVisible: useStableCallback(() => {
          return getLastKnownVisibleIndex() == index;
        }),
        setVisibleIndex: useStableCallback((newIndex, prevIndex) => {
          let changeIndex = newIndex == index ? prevIndex : newIndex;
          if (changeIndex != null)
            setLastKnownVisibleIndex(changeIndex);
          if (newIndex == index) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }),
        ...info
      }
    });
    const panelId = getPanelId(info.index);
    const tabId = getTabId(info.index);
    return {
      props: useMergedProps({
        role: "tabpanel",
        "aria-labelledby": tabId,
        id: panelId,
        inert: !isVisible
      }),
      tabPanelReturn: {
        visibleOffset: lastKnownVisibleIndex == null ? null : index - lastKnownVisibleIndex,
        visible: isVisible,
        getVisible: useStableCallback(() => {
          return getLastKnownVisibleIndex() === index;
        })
      }
    };
  });

  // ../dist/use-toasts.js
  var useToasts = monitored(function useToasts2({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }) {
    const currentIndexQueue = F2([]);
    const getMaxVisibleCount = useStableGetter(visibleCount);
    const nextIndexToStartAt = F2(0);
    const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
    const { context, managedChildrenReturn, ..._childInfo } = useManagedChildren({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmu } });
    const { getChildren: getToastQueue } = managedChildrenReturn;
    const toastQueue = getToastQueue();
    const showHighestPriorityToast = x2(() => {
      const max = Math.min(getMaxVisibleCount(), currentIndexQueue.current.length);
      let start = nextIndexToStartAt.current;
      for (let i5 = start; i5 < max; ++i5) {
        const highestPriorityToast = toastQueue.getAt(currentIndexQueue.current[i5]);
        console.assert(!!highestPriorityToast);
        highestPriorityToast?.show();
      }
      nextIndexToStartAt.current = max;
    }, []);
    const onAnyToastMounted = x2((toastIndex) => {
      currentIndexQueue.current.push(toastIndex);
      toastQueue.getAt(toastIndex)?.setNumberAheadOfMe(currentIndexQueue.current.length - 1);
      showHighestPriorityToast();
    }, []);
    const onAnyToastDismissed = x2((_index) => {
      const removalIndex = currentIndexQueue.current.findIndex((i5) => i5 == _index);
      toastQueue.forEach((c4) => {
        c4.setNumberAheadOfMe((prev) => {
          if (prev < 0)
            return prev - 1;
          else
            return prev;
        });
      });
      toastQueue.getAt(_index)?.setNumberAheadOfMe(-1);
      toastQueue.forEach((c4) => {
        c4.setNumberAheadOfMe((prev) => {
          if (prev > removalIndex)
            return prev - 1;
          else
            return prev;
        });
      });
      currentIndexQueue.current.splice(removalIndex, 1);
      showHighestPriorityToast();
    }, []);
    const [_mouseOver2, setMouseOver, _getMouseOver] = useState(false);
    useGlobalHandler(document, "pointermove", (e3) => {
      const mouseOver = e3.target != null && e3.target instanceof Node && (getElement()?.contains(e3.target) || getElement() == e3.target);
      setMouseOver(mouseOver);
    });
    const toastContext = {
      onAnyToastDismissed,
      getMaxVisibleCount,
      onAnyToastMounted
    };
    const props = useMergedProps(useMergedProps(propsStable, { class: "toasts-container" }));
    return {
      context: {
        ...context,
        toastContext
      },
      managedChildrenReturn,
      props
    };
  });
  var useToast = monitored(function useToast2({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }) {
    const { getMaxVisibleCount, onAnyToastDismissed, onAnyToastMounted } = context.toastContext;
    const [numberOfToastsAheadOfUs, setNumberOfToastsAheadOfUs] = useState(Infinity);
    const getIndex = useStableGetter(index);
    const [dismissed2, setDismissed2, getDismissed2] = useState(false);
    const [showing2, setShowing2, getShowing2] = useState(false);
    const [triggerIndex, setTriggerIndex] = useState(1);
    const notify = useNotify();
    const dismiss = x2(() => {
      if (!getDismissed2())
        onAnyToastDismissed(getIndex());
      setDismissed2(true);
      setShowing2(false);
    }, []);
    const show = useStableCallback(() => {
      notify(politeness ?? "polite", u4("p", { children }));
      setShowing2(true);
    });
    _(() => {
      if (!getDismissed2() && !getShowing2()) {
        if (numberOfToastsAheadOfUs >= 0 && numberOfToastsAheadOfUs < getMaxVisibleCount()) {
          show();
        }
      }
    }, [numberOfToastsAheadOfUs]);
    const focus2 = x2(() => {
      const element = getElement();
      if (element) {
        const firstFocusable = findFirstFocusable(element);
        focus(firstFocusable);
      }
    }, []);
    const { managedChildReturn } = useManagedChild({ info: { index, focus: focus2, setNumberAheadOfMe: setNumberOfToastsAheadOfUs, show, ...info }, context });
    const resetDismissTimer = x2(() => {
      setTriggerIndex((i5) => ++i5);
    }, []);
    _(() => {
      onAnyToastMounted(index);
    }, []);
    const dismissTimeoutKey = timeout == null || numberOfToastsAheadOfUs != 0 ? null : isFinite(timeout) ? timeout : timeout > 0 ? null : 0;
    useTimeout({
      timeout: dismissTimeoutKey,
      callback: () => {
        if (showing2)
          dismiss();
      },
      triggerIndex: showing2 ? triggerIndex : false
    });
    const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
    return {
      toastReturn: {
        dismissed: dismissed2,
        showing: showing2,
        numberOfToastsAheadOfUs,
        dismiss,
        resetDismissTimer
      },
      managedChildReturn,
      props: propsStable
    };
  });

  // ../dist/use-tooltip.js
  var _hasHover2 = matchMedia("(any-hover: hover)");
  var mediaQuery = matchMedia("(hover: hover)");
  var pageCurrentlyUsingHover = mediaQuery.matches;
  var allCallbacks = /* @__PURE__ */ new Set();
  mediaQuery.onchange = (ev) => {
    pageCurrentlyUsingHover = ev.matches;
    allCallbacks.forEach((fn) => fn(ev.matches));
  };
  var useTooltip = monitored(function useTooltip2({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay, usesLongPress }, activeElementParameters, escapeDismissParameters, pressReturn: { longPress, ...void2 }, ...void1 }) {
    useGlobalHandler(window, "mouseout", x2((e3) => {
      if (e3.relatedTarget == null)
        onHoverChanged(false, "popup");
    }, []));
    const [usesHover, setUsesHover] = useState(pageCurrentlyUsingHover);
    _(() => {
      let handler = (ev) => {
        setUsesHover(ev.matches);
      };
      mediaQuery.addEventListener("change", handler, { passive: true });
      return () => mediaQuery.removeEventListener("change", handler, {});
    });
    const [openLocal, setOpenLocal] = useState(false);
    const [getState, setState] = usePassiveState(useStableCallback((nextState, _prevState) => {
      if (hoverTimeoutHandle.current) {
        clearTimeout(hoverTimeoutHandle.current);
        hoverTimeoutHandle.current = null;
      }
      if (nextState == null)
        inputState.current = null;
      switch (nextState) {
        case "focused-popup":
        case "focused-trigger":
          onStatus("focus");
          break;
        case "hovering-popup":
        case "hovering-trigger":
          onStatus("hover");
          break;
        default:
          onStatus(null);
          break;
      }
      setOpenLocal(!!nextState);
    }), returnNull);
    let { propsReferencer: propsTrigger, propsSource: propsPopup } = useRandomId({ randomIdParameters: { prefix: Prefices.tooltip, otherReferencerProp: tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby" } });
    const { refElementReturn: { getElement: getTriggerElement }, propsStable: triggerRefProps } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: { getElement: getPopupElement }, propsStable: popupRefProps } = useRefElement({ refElementParameters: {} });
    let inputState = F2(null);
    let hoverTimeoutHandle = F2(null);
    const onHoverChanged = useStableCallback((hovering, which) => {
      if (hoverTimeoutHandle.current)
        clearTimeout(hoverTimeoutHandle.current);
      if (hovering) {
        inputState.current = "hover";
        if (usesLongPress && !usesHover) {
        } else {
          hoverTimeoutHandle.current = setTimeout(() => {
            setState(`hovering-${which}`);
            hoverTimeoutHandle.current = null;
          }, hoverDelay || 0);
        }
      } else {
        setState(null);
        inputState.current = null;
      }
    });
    const onCurrentFocusedInnerChanged = x2((focused, which) => {
      if (inputState.current != "hover") {
        if (focused) {
          inputState.current = "focus";
          setState(`focused-${which}`);
        } else {
          setState(null);
          inputState.current = null;
        }
      } else {
        setState(null);
        inputState.current = null;
      }
    }, []);
    const onTriggerCurrentFocusedInnerChanged = x2((focused) => onCurrentFocusedInnerChanged(focused, "trigger"), [onCurrentFocusedInnerChanged]);
    const onPopupCurrentFocusedInnerChanged = x2((focused) => onCurrentFocusedInnerChanged(focused, "popup"), [onCurrentFocusedInnerChanged]);
    const { hasCurrentFocusReturn: triggerFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onTriggerCurrentFocusedInnerChanged }, refElementReturn: { getElement: getTriggerElement } });
    const { hasCurrentFocusReturn: popupFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onPopupCurrentFocusedInnerChanged }, refElementReturn: { getElement: getPopupElement } });
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
      backdropDismissParameters: {
        dismissBackdropActive: true,
        // we handle this ourselves, but for mobile devices with a sorta virtualish cursor this helps. 
        onDismissBackdrop: null
      },
      lostFocusDismissParameters: {
        dismissLostFocusActive: false,
        // and it interferes with our own focus logic (or, our onClose there does)
        onDismissLostFocus: null
      },
      dismissParameters: {
        dismissActive: openLocal,
        onDismiss: useStableCallback((_e, _reason) => {
          setState(null);
        })
      },
      activeElementParameters,
      escapeDismissParameters: {
        dismissEscapeActive: true,
        onDismissEscape: null,
        ...escapeDismissParameters
      }
    });
    const otherPopupProps = {
      onPointerEnter: x2(() => {
        onHoverChanged(true, "popup");
      }, [])
      //onPointerLeave: useCallback(() => { onHoverChanged(false, "popup") }, [])
    };
    const otherTriggerProps = {
      onPointerEnter: x2(() => {
        onHoverChanged(true, "trigger");
      }, []),
      onPointerUp: x2(() => {
        onHoverChanged(false, "trigger");
      }, []),
      onClick: useStableCallback((e3) => {
        if (!usesHover) {
          if (usesLongPress) {
          } else {
            onCurrentFocusedInnerChanged(true, "trigger");
            focus(e3.currentTarget);
          }
        } else {
          onHoverChanged(true, "trigger");
        }
      })
      //onPointerLeave: useCallback(() => { onHoverChanged(false, "trigger") }, [])
    };
    useGlobalHandler(document, "pointermove", !openLocal ? null : (e3) => {
      const popupElement = getPopupElement();
      const triggerElement = getTriggerElement();
      const mouseElement = e3.target;
      let overPopup = popupElement?.contains(mouseElement);
      let overTrigger = triggerElement?.contains(mouseElement);
      if (!overPopup && !overTrigger && inputState.current == "hover") {
        onHoverChanged(false, "popup");
      }
    }, { capture: true, passive: true });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    _(() => {
      if (usesLongPress && !usesHover) {
        if (longPress) {
          inputState.current = null;
          onCurrentFocusedInnerChanged(true, "trigger");
          focus(getTriggerElement());
        }
      }
    }, [longPress, usesHover, usesLongPress]);
    return {
      refElementPopupReturn,
      refElementSourceReturn,
      propsPopup: useMergedProps(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
      propsTrigger: useMergedProps(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback((e3) => focus(e3.currentTarget)) }, otherTriggerProps, propsStableSource),
      tooltipReturn: {
        getState
        //stateIsFocus,
        //stateIsMouse
      }
    };
  });

  // ../dist/component/util.js
  function useComponent(imperativeHandle, render, Context, info) {
    T2(imperativeHandle, () => info);
    if (Context) {
      return u4(Context.Provider, { value: info.context, children: render(info) });
    } else {
      return render(info);
    }
  }
  function useComponentC(imperativeHandle, render, ContextChildren, ContextProcessing, info) {
    T2(imperativeHandle, () => info);
    let ch = render(info);
    if (ContextChildren) {
      ch = u4(ContextChildren.Provider, { value: info.contextChildren, children: ch });
    }
    if (ContextProcessing) {
      ch = u4(ContextProcessing.Provider, { value: info.contextProcessing, children: ch });
    }
    return ch;
  }
  var ContextDefaults = {
    collator: G(null),
    pageNavigationSize: G(0.1),
    typeaheadTimeout: G(1e3),
    focusSelf: G((e3) => e3.focus?.()),
    noTypeahead: G(false),
    getIndex: G((v4) => v4.props.index),
    disableArrowKeys: G(false),
    disableHomeEndKeys: G(false),
    getWindow: G(() => globalThis.window),
    getDocument: G(() => globalThis.document),
    focusOpener: G((e3) => focus(e3)),
    getText: G((e3) => e3?.textContent ?? ""),
    singleSelectionMode: G("activation"),
    multiSelectionMode: G("activation")
  };
  function useDefault(context, userValue) {
    const defaultValue = P2(ContextDefaults[context]);
    return userValue ?? defaultValue;
  }
  var ParentDepthContext = G(0);
  function useDefaultRenderPortal({ portalId, children }) {
    const portalRef = F2(null);
    portalRef.current ??= document.getElementById(portalId);
    if (portalRef.current)
      return j3(children, portalRef.current);
    else
      return children;
  }

  // ../dist/component/accordion.js
  var AccordionSectionContext = G(null);
  var Accordion = w4(function Accordion2({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, AccordionSectionContext, useAccordion({
      accordionParameters: { orientation, initialIndex, localStorageKey: localStorageKey ?? null },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      linearNavigationParameters: {
        onNavigateLinear,
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }
    }));
  });
  var AccordionSection = w4(function AccordionSection2({ open, index, tagButton, disabled, bodyRole, untabbable, getText, imperativeHandle, onPressSync, focusSelf, render, info, onElementChange, onMount, onUnmount, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useAccordionSection({
      buttonParameters: { disabled: disabled ?? false, tagButton, onPressSync },
      pressParameters: { focusSelf: useDefault("focusSelf", focusSelf) },
      accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
      info: { index, untabbable: untabbable || false, ...info },
      refElementHeaderButtonParameters: { onElementChange, onMount, onUnmount },
      refElementBodyParameters: {},
      textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
      context: useContextWithWarning(AccordionSectionContext, "accordion section")
    }));
  });

  // ../dist/component/button.js
  var Button = w4(function Button2({ tagButton, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeSpace, onPressingChange, onPressSync, focusSelf, role, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useButton({
      buttonParameters: { onPressSync, role, tagButton, pressed, disabled },
      pressParameters: { longPressThreshold, allowRepeatPresses, excludeSpace, onPressingChange, focusSelf: useDefault("focusSelf", focusSelf) },
      refElementParameters: { onElementChange, onMount, onUnmount }
    }));
  });

  // ../dist/component/checkbox-group.js
  var UseCheckboxGroupChildContext = G(null);
  var CheckboxGroup = w4(function CheckboxGroup2({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, UseCheckboxGroupChildContext, useCheckboxGroup({
      linearNavigationParameters: {
        onNavigateLinear,
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      checkboxGroupParameters: {
        orientation: orientation ?? "vertical"
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        untabbable: untabbable || false
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      refElementParameters: { onElementChange, onMount, onUnmount },
      multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "activation", onSelectionChange }
    }));
  });
  var CheckboxGroupParent = w4(function CheckboxGroupParent2({
    render,
    index,
    focusSelf,
    untabbable,
    imperativeHandle,
    getText,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onUnmount,
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    onTextContentChange,
    //info,
    ..._rest
  }) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    return useComponent(imperativeHandle, render, null, useCheckboxGroupParent({
      info: {
        index,
        untabbable: untabbable || false,
        focusSelf
      },
      context,
      textContentParameters: {
        getText: useDefault("getText", getText),
        onTextContentChange
      },
      hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
      refElementParameters: { onElementChange, onMount, onUnmount },
      multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange },
      singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false }
    }));
  });
  var CheckboxGroupChild = w4(function CheckboxGroupChild2({
    index,
    render,
    checked,
    onChangeFromParent,
    untabbable,
    getText,
    focusSelf,
    //info,
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onUnmount,
    multiSelectionDisabled,
    onMultiSelectChange,
    onTextContentChange,
    ...void1
  }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useCheckboxGroupChild({
      checkboxGroupChildParameters: {
        checked,
        onChangeFromParent
      },
      info: {
        index,
        untabbable: untabbable || false,
        focusSelf
      },
      textContentParameters: {
        getText: useDefault("getText", getText),
        onTextContentChange
      },
      context: useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group"),
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged,
        onCurrentFocusedInnerChanged
      },
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, onMultiSelectChange }
    }));
  });

  // ../dist/component/checkbox.js
  function defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }) {
    return function(info) {
      const inputProps = makePropsInput(info);
      const { children, ...labelProps } = makePropsLabel(info);
      if (labelPosition == "wrapping") {
        const input = y(tagInput, inputProps);
        const label = y(tagLabel, { ...labelProps, children: u4(g, { children: [input, children] }) });
        return u4(g, { children: label });
      } else if (labelPosition == "separate") {
        const input = y(tagInput, inputProps);
        const label = y(tagLabel, { children, ...labelProps });
        return u4(g, { children: [input, label] });
      } else {
        console.assert(!!inputProps["aria-label"]);
        return y(tagInput, inputProps);
      }
    };
  }
  var Checkbox = w4(function Checkbox2({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, longPressThreshold, excludeSpace, imperativeHandle, render, onCheckedChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useCheckbox({
      checkboxLikeParameters: { checked, disabled: disabled ?? false },
      labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
      pressParameters: { excludeSpace, longPressThreshold },
      checkboxParameters: { onCheckedChange }
    }));
  });

  // ../dist/component/dialog.js
  var Dialog = w4(function Dialog2({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, focusOpener, getDocument: getDocument2, imperativeHandle, parentDepth, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, focusPopup, ariaLabel, onElementChange, onMount, onUnmount, render }) {
    const defaultParentDepth = P2(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    return u4(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useDialog({
      dismissParameters: {
        onDismiss
      },
      backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
      //lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
      modalParameters: { active },
      refElementParameters: { onElementChange, onMount, onUnmount },
      escapeDismissParameters: {
        dismissEscapeActive: dismissEscapeActive || false,
        parentDepth: parentDepth ?? defaultParentDepth
      },
      activeElementParameters: {
        getDocument: useDefault("getDocument", getDocument2),
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange
      },
      focusTrapParameters: {
        focusOpener: useDefault("focusOpener", focusOpener),
        focusPopup
      },
      labelParameters: { ariaLabel }
    })) });
  });

  // ../dist/component/drawer.js
  var Drawer = w4(function Drawer2({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument: getDocument2, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, ...void1 }) {
    const defaultParentDepth = P2(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    assertEmptyObject(void1);
    return u4(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useDrawer({
      dismissParameters: {
        onDismiss
      },
      backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
      lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
      modalParameters: { active },
      refElementParameters: { onElementChange, onMount, onUnmount },
      escapeDismissParameters: {
        parentDepth: parentDepth ?? defaultParentDepth,
        dismissEscapeActive: dismissEscapeActive || false
      },
      activeElementParameters: {
        getDocument: useDefault("getDocument", getDocument2),
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange
      },
      focusTrapParameters: {
        focusOpener: useDefault("focusOpener", focusOpener),
        focusPopup,
        trapActive: trapActive ?? false
      },
      labelParameters: { ariaLabel }
    })) });
  });

  // ../dist/component/gridlist.js
  var GridlistContext = G(null);
  var GridlistRowContext = G(null);
  var GridlistRowsContext = G(null);
  var ProcessedChildContext = G(null);
  var Gridlist = w4(function Gridlist2({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, pageNavigationSize, untabbable, paginationMax, paginationMin, onTabbableColumnChange, ariaLabel, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, initiallyTabbableColumn, ...void1 }) {
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, GridlistContext, GridlistRowsContext, useGridlist({
      linearNavigationParameters: {
        onNavigateLinear,
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        untabbable: untabbable || false
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      listboxParameters: {
        groupingType
      },
      gridNavigationParameters: {
        onTabbableColumnChange,
        initiallyTabbableColumn: initiallyTabbableColumn || 0
      },
      labelParameters: {
        ariaLabel
      },
      paginatedChildrenParameters: {
        paginationMax,
        paginationMin
      },
      singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
      multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange },
      singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
      refElementParameters: { onElementChange, onMount, onUnmount }
    }));
  });
  var GridlistRows = w4(function GridlistRows2({ render, adjust, children, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }) {
    return useComponent(imperativeHandle, render, ProcessedChildContext, useCompleteGridNavigationRows({
      context: P2(GridlistRowsContext),
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenCountChange,
        onChildrenMountChange
      },
      paginatedChildrenParameters: {
        paginationMax,
        paginationMin
      },
      rearrangeableChildrenParameters: {
        adjust,
        children,
        compare,
        getIndex: useDefault("getIndex", getIndex),
        onRearranged
      },
      staggeredChildrenParameters: {
        staggered: staggered || false
      }
    }));
  });
  var GridlistRow = w4(function GridlistRow2({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, collator, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onMultiSelectChange, onNavigateTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { propsStable, refElementReturn } = useRefElement({
      refElementParameters: {
        onElementChange: useStableCallback((...a4) => {
          oec1?.(...a4);
          oec2?.(...a4);
        }),
        onMount,
        onUnmount
      }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i22 } = useProcessedChild({
      context: useContextWithWarning(ProcessedChildContext, "ListboxChildren"),
      info: { index }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i22;
    const props2 = useMergedProps(props, propsStable);
    const processedGridlistRowReturn = {
      hidden: true,
      ...i22,
      props: props2,
      refElementReturn,
      managedChildReturn: { getChildren }
    };
    const retIfHidden = render(processedGridlistRowReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
      return retIfHidden;
    } else {
      return u4(GridlistRowInner, { index, render, collator, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onMultiSelectChange, onNavigateTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getText, imperativeHandle, multiSelectionDisabled, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, untabbable, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, childUseEffect, onTextContentChange, props: props2, ...void1 });
    }
  });
  var GridlistRowInner = w4(function GridlistRowInner2({ index, collator, untabbable, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getText, render, initiallyTabbedIndex, onNavigateTypeahead, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, childUseEffect, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, props: props1, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { context, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, multiSelectionChildReturn, pressParameters, props: props2, rovingTabIndexChildReturn, rovingTabIndexReturn, refElementReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn } = useGridlistRow({
      info: {
        index,
        untabbable: untabbable || false
        //...uinfo
      },
      context: useContextWithWarning(GridlistContext, "gridlist"),
      gridlistRowParameters: { selected },
      textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
      linearNavigationParameters: {
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap"
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged,
        onCurrentFocusedInnerChanged
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        initiallyTabbedIndex,
        untabbable: untabbable || false
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
      multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    });
    _(childUseEffect, [childUseEffect]);
    return useComponent(imperativeHandle, render, GridlistRowContext, {
      context,
      hasCurrentFocusReturn,
      linearNavigationReturn,
      managedChildrenReturn,
      managedChildReturn,
      multiSelectionChildReturn,
      pressParameters,
      props: useMergedProps(props1, props2),
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn,
      refElementReturn,
      paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
      staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered }
    });
  });
  var GridlistChild = w4(function GridlistChild2({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, imperativeHandle, onTextContentChange, info: subInfo }) {
    const context = useContextWithWarning(GridlistRowContext, "gridlist row");
    console.assert(context != null, `This GridlistChild is not contained within a GridlistRow that is contained within a Gridlist`);
    const defaultFocusSelf = useStableCallback((e3) => {
      focus(e3);
    }, []);
    const info = useGridlistCell({
      info: {
        index,
        untabbable: untabbable || false,
        focusSelf: focusSelf ?? defaultFocusSelf,
        ...subInfo
      },
      context,
      gridNavigationCellParameters: { colSpan: colSpan ?? 1 },
      textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
      pressParameters: { onPressSync, longPressThreshold, onPressingChange }
    });
    T2(imperativeHandle, () => info);
    return render(info);
  });

  // ../dist/component/heading.js
  function overwriteWithWarning(a4, ..._t) {
    return a4;
  }
  var HeadingLevelContext = G(0);
  var Heading = w4(function Heading2({ children, heading, tag, ...props }) {
    const headingLevelBeforeUs = P2(HeadingLevelContext);
    const newHeadingLevel = headingLevelBeforeUs + 1;
    if (tag == null) {
      if (newHeadingLevel <= 6) {
        tag = `h${newHeadingLevel}`;
      } else {
        tag = "div";
        overwriteWithWarning("Heading", props, "aria-level", `${newHeadingLevel}`);
      }
    }
    return u4(g, { children: u4(HeadingReset, { newLevel: headingLevelBeforeUs + 1, children: [y(tag, props, heading), children] }) });
  });
  var HeadingReset = w4(function HeadingReset2({ newLevel, children }) {
    return u4(HeadingLevelContext.Provider, { value: newLevel - 1, children });
  });

  // ../dist/component/listbox.js
  var ListboxContext = G(null);
  var ListboxChildrenContext = G(null);
  var ListboxChildContext = G(null);
  var ListboxGroupContext = G(null);
  var GroupedListbox = w4(function GroupedListbox2({ ariaLabel, orientation, render, onElementChange, onMount, onUnmount }) {
    const info = useListbox({
      labelParameters: { ariaLabel },
      linearNavigationParameters: {
        navigatePastEnd: "passthrough",
        navigatePastStart: "passthrough",
        disableHomeEndKeys: true,
        pageNavigationSize: 1,
        onNavigateLinear: null
      },
      paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
      listboxParameters: { groupingType: "with-groups", orientation: orientation ?? "vertical" },
      rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
      typeaheadNavigationParameters: {
        collator: null,
        noTypeahead: true,
        typeaheadTimeout: Infinity,
        onNavigateTypeahead: null
      },
      refElementParameters: { onElementChange, onMount, onUnmount },
      singleSelectionParameters: { singleSelectionMode: "disabled", singleSelectionAriaPropName: null },
      multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
      singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange: null, singleSelectedIndex: null }
    });
    return u4(ListboxGroupContext.Provider, { value: info, children: render(info) });
  });
  var Listbox = w4(function Listbox2({ ariaLabel, collator, disableHomeEndKeys, singleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, pageNavigationSize, untabbable, typeaheadTimeout, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, singleSelectionAriaPropName, singleSelectionMode, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, paginationMax, paginationMin, ...void1 }) {
    const listboxGroupInfo = P2(ListboxGroupContext);
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, ListboxContext, ListboxChildrenContext, useListbox({
      labelParameters: { ariaLabel },
      linearNavigationParameters: {
        onNavigateLinear,
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      paginatedChildrenParameters: {
        paginationMax,
        paginationMin
      },
      listboxParameters: {
        groupingType: listboxGroupInfo == null ? "without-groups" : "group",
        orientation: orientation ?? "vertical"
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        untabbable: untabbable ?? false
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      refElementParameters: { onElementChange, onMount, onUnmount },
      singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode: singleSelectionMode || "disabled" },
      singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
      multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange }
    }));
  });
  var ListboxChildren = w4(function ListboxChildren2({ children, render, adjust, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }) {
    const r4 = useCompleteListNavigationChildren({
      context: P2(ListboxChildrenContext),
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenCountChange,
        onChildrenMountChange
      },
      paginatedChildrenParameters: {
        paginationMax,
        paginationMin
      },
      rearrangeableChildrenParameters: {
        adjust,
        children,
        compare,
        getIndex: useDefault("getIndex", getIndex),
        onRearranged
      },
      staggeredChildrenParameters: {
        staggered: staggered || false
      }
    });
    return useComponent(imperativeHandle, render, ListboxChildContext, r4);
  });
  var ListboxItem = w4(function ListboxItemOuter({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    assertEmptyObject(void1);
    const { propsStable, refElementReturn } = useRefElement({
      refElementParameters: {
        onElementChange: useStableCallback((...a4) => {
          oec1?.(...a4);
          oec2?.(...a4);
        }),
        onMount,
        onUnmount
      }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i22 } = useProcessedChild({
      context: useContextWithWarning(ListboxChildContext, "ListboxChildren"),
      info: { index }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i22;
    const props2 = useMergedProps(props, propsStable);
    const processedListboxItemReturn = {
      hidden: true,
      ...i22,
      props: props2,
      refElementReturn,
      managedChildReturn: { getChildren }
    };
    T2(imperativeHandle, () => processedListboxItemReturn);
    let retIfHidden = render(processedListboxItemReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
      return retIfHidden;
    } else {
      return u4(ListboxItemInner, { index, render, allowRepeatPresses, excludeEnter, excludePointer, focusSelf, getText, imperativeHandle, longPressThreshold, multiSelected, multiSelectionDisabled, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMount, onMultiSelectedChange, onPressingChange, onUnmount, singleSelectionDisabled, untabbable, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, childUseEffect, onTextContentChange, props: props2, ...void1 });
    }
  });
  var ListboxItemInner = w4(function ListboxItemInner2({ getText, untabbable, index, render, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, imperativeHandle, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, props: props1, childUseEffect, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = x2((e3) => {
      focus(e3);
    }, []);
    assertEmptyObject(void1);
    _(childUseEffect, [childUseEffect]);
    const { hasCurrentFocusReturn, managedChildReturn, multiSelectionChildReturn, pressReturn, props: props2, refElementReturn, rovingTabIndexChildReturn, singleSelectionChildReturn, textContentReturn } = useListboxItem({
      info: {
        index,
        untabbable: untabbable || false,
        focusSelf: focusSelf ?? focusSelfDefault
      },
      context,
      listboxParameters: {},
      pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
      textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
      hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
      refElementParameters: { onElementChange, onMount, onUnmount },
      singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
      multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
      multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected: multiSelected || false }
    });
    return useComponent(imperativeHandle, render, null, {
      hasCurrentFocusReturn,
      multiSelectionChildReturn,
      pressReturn,
      props: useMergedProps(props1, props2),
      refElementReturn,
      rovingTabIndexChildReturn,
      singleSelectionChildReturn,
      textContentReturn,
      managedChildReturn,
      staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
      paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }
    });
  });

  // ../dist/component/menu.js
  var MenuItemContext = G(null);
  var Menu = w4(function Menu2({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, singleSelectionAriaPropName, singleSelectionMode, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, pageNavigationSize, parentDepth, disabled, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument: getDocument2, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, render, imperativeHandle, ...void1 }) {
    const defaultParentDepth = P2(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    untabbable ||= false;
    assertEmptyObject(void1);
    return u4(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, MenuItemContext, useMenu({
      linearNavigationParameters: {
        onNavigateLinear,
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap"
      },
      escapeDismissParameters: { parentDepth: parentDepth || 1 },
      dismissParameters: { onDismiss },
      modalParameters: { active },
      refElementParameters: { onElementChange, onMount, onUnmount },
      activeElementParameters: {
        getDocument: useDefault("getDocument", getDocument2),
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange
      },
      menuParameters: {
        openDirection,
        onOpen
      },
      menuSurfaceParameters: {},
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        untabbable
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      toolbarParameters: {
        orientation,
        disabled: disabled || false
      },
      singleSelectionParameters: {
        singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected",
        singleSelectionMode: singleSelectionMode || "disabled"
      },
      multiSelectionParameters: {
        multiSelectionAriaPropName,
        multiSelectionMode: multiSelectionMode || "disabled",
        onSelectionChange
      },
      singleSelectionDeclarativeParameters: {
        singleSelectedIndex,
        onSingleSelectedIndexChange
      }
    })) });
  });
  var MenuItem = w4(function MenuItem2({ index, untabbable, onPress, getText, role, focusSelf, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(MenuItemContext, "menu");
    const defaultFocusSelf = x2((e3) => focus(e3), []);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useMenuItem({
      info: {
        index,
        untabbable: untabbable || false,
        focusSelf: focusSelf ?? defaultFocusSelf,
        ...uinfo
      },
      context,
      textContentParameters: {
        getText: useDefault("getText", getText),
        onTextContentChange
      },
      menuItemParameters: {
        onPress,
        role: role ?? "menuitem"
      },
      pressParameters: {
        onPressingChange
      },
      hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
      refElementParameters: { onElementChange, onMount, onUnmount },
      singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
      multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
  });

  // ../dist/component/menubar.js
  var MenubarItemContext = G(null);
  var Menubar = w4(function Menubar2({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, noTypeahead, untabbable, onTabbableIndexChange, disabled, singleSelectedIndex, onSingleSelectedIndexChange, typeaheadTimeout, role, ariaLabel, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }) {
    assertEmptyObject(void1);
    const info = useMenubar({
      linearNavigationParameters: {
        onNavigateLinear,
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      toolbarParameters: {
        orientation,
        role: role ?? "menubar",
        disabled: disabled || false
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        untabbable: untabbable || false
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      labelParameters: {
        ariaLabel
      },
      singleSelectionParameters: {
        singleSelectionAriaPropName,
        singleSelectionMode: singleSelectionMode || "activation"
      },
      multiSelectionParameters: {
        multiSelectionAriaPropName,
        multiSelectionMode: multiSelectionMode || "activation",
        onSelectionChange
      },
      singleSelectionDeclarativeParameters: {
        singleSelectedIndex,
        onSingleSelectedIndexChange
      },
      refElementParameters: { onElementChange, onMount, onUnmount }
    });
    T2(imperativeHandle, () => info);
    return u4(MenubarItemContext.Provider, { value: info.contextChildren, children: render(info) });
  });
  var MenubarItem = w4(function MenubarItem2({ index, render, focusSelf, untabbable, getText, onPress, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const defaultFocusSelf = x2((e3) => focus(e3), []);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useMenubarChild({
      info: { index, untabbable: untabbable || false, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo },
      context: useContextWithWarning(MenubarItemContext, "menubar"),
      textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
      menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
      pressParameters: { onPressingChange },
      hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
      refElementParameters: { onElementChange, onMount, onUnmount },
      singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
      multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
  });

  // ../dist/component/progress.js
  var Progress = w4(function Progress2({ tagProgressIndicator, ariaLabel, max, render, value, valueText, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useProgress({
      labelParameters: { ariaLabel },
      progressIndicatorParameters: {
        max: max ?? 100,
        value: value ?? "indeterminate",
        valueText,
        tagProgressIndicator
      }
    }));
  });
  var ProgressWithHandler = w4(function ProgressWithHandler2({ ariaLabel, forciblyPending, render, tagProgressIndicator, asyncHandler, capture, debounce: debounce2, throttle, notifyFailure, notifyPending, notifySuccess, imperativeHandle, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useProgressWithHandler({
      asyncHandlerParameters: { asyncHandler, capture, debounce: debounce2, throttle },
      labelParameters: { ariaLabel },
      progressIndicatorParameters: { tagProgressIndicator },
      progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess }
    }));
  });

  // ../dist/component/radio-group.js
  var RadioContext = G(null);
  var RadioGroup = w4(function RadioGroup2({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, singleSelectionMode, ...void1 }) {
    untabbable ??= false;
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, RadioContext, useRadioGroup({
      singleSelectionParameters: { singleSelectionMode: singleSelectionMode ?? "focus" },
      linearNavigationParameters: {
        onNavigateLinear,
        arrowKeyDirection: arrowKeyDirection ?? "either",
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      labelParameters: { ariaLabel },
      radioGroupParameters: { name, selectedValue, onSelectedValueChange },
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        untabbable
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      refElementParameters: { onElementChange, onMount, onUnmount }
    }));
  });
  var Radio = w4(function Radio2({ disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    return useComponent(imperativeHandle, render, null, useRadio({
      radioParameters: { value },
      checkboxLikeParameters: { disabled: disabled ?? false },
      info: { index, untabbable: untabbable || false },
      context,
      labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
      textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
      pressParameters: { longPressThreshold },
      hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
      refElementParameters: { onElementChange, onMount, onUnmount }
    }));
  });

  // ../dist/component/slider.js
  var SliderThumbContext = G(null);
  function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, render, imperativeHandle, onChildrenCountChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, SliderThumbContext, useSlider({
      managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange },
      sliderParameters: { max, min }
    }));
  }
  function SliderThumb({ label, tag, value, max, min, index, render, valueText, imperativeHandle, onValueChange, info, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useSliderThumb({
      context: useContextWithWarning(SliderThumbContext, "slider"),
      info: { index, ...info },
      sliderThumbParameters: { label, tag, value, max, min, valueText, onValueChange }
    }));
  }

  // ../dist/component/table.js
  var TableContext = G(null);
  var TableSectionContext = G(null);
  var TableRowsContext = G(null);
  var ProcessedRowContext = G(null);
  var TableRowContext = G(null);
  var Table2 = w4(function Table3({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, TableContext, useTable({
      labelParameters: { ariaLabel },
      tableParameters: { tagTable },
      singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled" },
      multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled" }
    }));
  });
  var TableSection = w4(function TableSection2({ disableHomeEndKeys, initiallySingleSelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, render, location, imperativeHandle, multiSelectionAriaPropName, onSelectionChange, singleSelectionAriaPropName, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection, onElementChange, onMount, onUnmount, initiallyTabbableColumn, ...void1 }) {
    assertEmptyObject(void1);
    return useComponentC(imperativeHandle, render, TableSectionContext, TableRowsContext, useTableSection({
      gridNavigationParameters: {
        onTabbableColumnChange,
        initiallyTabbableColumn: initiallyTabbableColumn || 0
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      linearNavigationParameters: {
        onNavigateLinear,
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      paginatedChildrenParameters: {
        paginationMax,
        paginationMin
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        untabbable: untabbable || false
      },
      singleSelectionParameters: {
        initiallySingleSelectedIndex,
        onSingleSelectedIndexChange,
        singleSelectionAriaPropName
      },
      multiSelectionParameters: {
        multiSelectionAriaPropName,
        onSelectionChange
      },
      contextChildren: useContextWithWarning(TableContext, "table"),
      tableSectionParameters: {
        tagTableSection,
        location
      },
      refElementParameters: { onElementChange, onMount, onUnmount }
    }));
  });
  var TableRows = w4(function TableRows2({ render, adjust, children, compare, getIndex, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onRearranged, paginationMax, paginationMin, staggered }) {
    return useComponent(imperativeHandle, render, ProcessedRowContext, useCompleteGridNavigationRows({
      context: P2(TableRowsContext),
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenCountChange,
        onChildrenMountChange
      },
      paginatedChildrenParameters: {
        paginationMax,
        paginationMin
      },
      rearrangeableChildrenParameters: {
        adjust,
        children,
        compare,
        getIndex: useDefault("getIndex", getIndex),
        onRearranged
      },
      staggeredChildrenParameters: {
        staggered: staggered || false
      }
    }));
  });
  var TableRow = w4(function TableRow2({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, multiSelectionDisabled, singleSelectionDisabled, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, onMultiSelectChange, onTabbableIndexChange, selected, tagTableRow, onTextContentChange, ...void1 }) {
    assertEmptyObject(void1);
    const { propsStable, refElementReturn } = useRefElement({
      refElementParameters: {
        onElementChange: useStableCallback((...a4) => {
          oec1?.(...a4);
          oec2?.(...a4);
        }),
        onMount,
        onUnmount
      }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i22 } = useProcessedChild({
      context: useContextWithWarning(ProcessedRowContext, "ListboxChildren"),
      info: { index }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i22;
    const props2 = useMergedProps(props, propsStable);
    const processedTableRowReturn = {
      hidden: true,
      ...i22,
      props: props2,
      refElementReturn,
      managedChildReturn: { getChildren }
    };
    const retIfHidden = render(processedTableRowReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
      return retIfHidden;
    } else {
      return u4(TableRowInner, { index, render, initiallyMultiSelected, initiallyTabbedIndex, navigatePastEnd, navigatePastStart, onMultiSelectChange, onTabbableIndexChange, selected, tagTableRow, getText, imperativeHandle, multiSelectionDisabled, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, untabbable, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, childUseEffect, onTextContentChange, props: props2, ...void1 });
    }
  });
  var TableRowInner = w4(function TableRowInner2({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, initiallyTabbedIndex, untabbable, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, render, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, childUseEffect, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, onTextContentChange, props: props1, ...void1 }) {
    assertEmptyObject(void1);
    const { props: props2, context, hasCurrentFocusReturn, linearNavigationReturn, managedChildReturn, managedChildrenReturn, multiSelectionChildReturn, pressParameters, refElementReturn, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn } = useTableRow({
      info: {
        index,
        untabbable: untabbable || false
      },
      context: useContextWithWarning(TableSectionContext, "table section"),
      textContentParameters: {
        getText: useDefault("getText", getText),
        onTextContentChange
      },
      tableRowParameters: {
        selected,
        tagTableRow: tagTableRow || "tr"
      },
      hasCurrentFocusParameters: {
        onCurrentFocusedChanged,
        onCurrentFocusedInnerChanged
      },
      linearNavigationParameters: {
        navigatePastEnd: navigatePastEnd || "wrap",
        navigatePastStart: navigatePastStart || "wrap"
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange: onTabbableIndexChange || null,
        initiallyTabbedIndex: initiallyTabbedIndex ?? null,
        untabbable: untabbable || false
      },
      singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
      multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    });
    _(childUseEffect, [childUseEffect]);
    return useComponent(imperativeHandle, render, TableRowContext, {
      context,
      hasCurrentFocusReturn,
      linearNavigationReturn,
      managedChildrenReturn,
      managedChildReturn,
      multiSelectionChildReturn,
      pressParameters,
      props: useMergedProps(props1, props2),
      rovingTabIndexChildReturn,
      rovingTabIndexReturn,
      singleSelectionChildReturn,
      textContentReturn,
      typeaheadNavigationReturn,
      refElementReturn,
      paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
      staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered }
    });
  });
  var TableCell = w4(function TableCell2({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, onTextContentChange, info: uinfo, ...void1 }) {
    const defaultFocusSelf = useStableCallback((e3) => {
      focus(e3);
    }, []);
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useTableCell({
      info: {
        index,
        focusSelf: focusSelf ?? defaultFocusSelf,
        untabbable: untabbable || false,
        getSortValue,
        ...uinfo
      },
      context: useContextWithWarning(TableRowContext, "table row"),
      gridNavigationCellParameters: {
        colSpan: colSpan ?? 1
      },
      tableCellParameters: {
        tagTableCell
      },
      textContentParameters: {
        getText: useDefault("getText", getText),
        onTextContentChange
      }
    }));
  });

  // ../dist/component/tabs.js
  var TabsContext = G(null);
  var TabPanelsContext = G(null);
  var Tabs = w4(function Tabs2({ ariaLabel, collator, disableHomeEndKeys, initiallySingleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, orientation, pageNavigationSize, localStorageKey, singleSelectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, ...void1 }) {
    untabbable ??= false;
    assertEmptyObject(void1);
    const info = useTabs({
      labelParameters: { ariaLabel },
      linearNavigationParameters: {
        onNavigateLinear,
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      rovingTabIndexParameters: {
        onTabbableIndexChange,
        untabbable
      },
      singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionMode: singleSelectionMode || "focus" },
      tabsParameters: {
        orientation,
        role,
        localStorageKey
      },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      refElementParameters: { onElementChange, onMount, onUnmount }
    });
    const { contextPanels, contextTabs } = info;
    T2(imperativeHandle, () => info);
    return u4(TabsContext.Provider, { value: contextTabs, children: u4(TabPanelsContext.Provider, { value: contextPanels, children: render(info) }) });
  });
  var Tab = w4(function Tab2({ focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, onTextContentChange, info: uinfo, ...void1 }) {
    assertEmptyObject(void1);
    const context = useContextWithWarning(TabsContext, "tabs");
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = x2((e3) => {
      focus(e3);
    }, []);
    return useComponent(imperativeHandle, render, null, useTab({
      info: {
        index,
        untabbable: untabbable || false,
        focusSelf: focusSelf ?? focusSelfDefault,
        ...uinfo
      },
      context,
      hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
      refElementParameters: { onElementChange, onMount, onUnmount },
      pressParameters: { focusSelf: focusSelfDefault, longPressThreshold, onPressingChange },
      textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
      singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false }
    }));
  });
  var TabPanel = w4(function TabPanel2({ index, render, info: uinfo }) {
    const context = useContextWithWarning(TabPanelsContext, "tabs");
    const info = useTabPanel({
      context,
      info: { index, ...uinfo }
    });
    return render(info);
  });

  // ../dist/component/toasts.js
  var ToastContext = G(null);
  function Toasts({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount, imperativeHandle, onChildrenCountChange, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, ToastContext, useToasts({
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenMountChange,
        onChildrenCountChange
      },
      toastsParameters: {
        visibleCount
      }
    }));
  }
  function Toast({ render, index, timeout, politeness, children, info, imperativeHandle }) {
    return useComponent(imperativeHandle, render, null, useToast({
      toastParameters: {
        timeout,
        politeness,
        children
      },
      info: {
        index,
        ...info
      },
      context: useContextWithWarning(ToastContext, "toasts provider")
    }));
  }

  // ../dist/component/toolbar.js
  var ToolbarContext = G(null);
  var ProcessedChildrenContext = G(null);
  var Toolbar = w4(function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, navigatePastEnd, navigatePastStart, pageNavigationSize, singleSelectedIndex, onSingleSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, ariaLabel, imperativeHandle, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount }) {
    return useComponentC(imperativeHandle, render, ToolbarContext, ProcessedChildrenContext, useToolbar({
      linearNavigationParameters: {
        onNavigateLinear,
        disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
        navigatePastEnd: navigatePastEnd ?? "wrap",
        navigatePastStart: navigatePastStart ?? "wrap",
        pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
      },
      toolbarParameters: {
        orientation,
        disabled: disabled || false,
        role: role ?? "toolbar"
      },
      rovingTabIndexParameters: { onTabbableIndexChange, untabbable: untabbable || false },
      typeaheadNavigationParameters: {
        onNavigateTypeahead,
        collator: useDefault("collator", collator),
        noTypeahead: useDefault("noTypeahead", noTypeahead),
        typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
      },
      labelParameters: { ariaLabel },
      singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode },
      multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange },
      singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange },
      refElementParameters: { onElementChange, onMount, onUnmount }
    }));
  });
  var ToolbarChild = w4(function ToolbarChild2({ index, render, focusSelf, getText, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ToolbarContext, "toolbar");
    const focusSelfDefault = x2((e3) => {
      focus(e3);
    }, []);
    focusSelf ??= focusSelfDefault;
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useToolbarChild({
      context,
      toolbarChildParameters: { disabledProp },
      info: {
        index,
        focusSelf,
        untabbable: untabbable || false,
        ...uinfo
      },
      textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
      hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
      refElementParameters: { onElementChange, onMount, onUnmount },
      singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
      multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
    }));
  });

  // ../dist/component/tooltip.js
  var Tooltip = w4(function TooltipU({ onStatus, getDocument: getDocument2, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType, usesLongPress, longPress, ...void1 }) {
    const defaultParentDepth = P2(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    assertEmptyObject(void1);
    return u4(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useTooltip({
      escapeDismissParameters: {
        getDocument: useDefault("getDocument", getDocument2),
        parentDepth: parentDepth ?? defaultParentDepth
      },
      activeElementParameters: {
        getDocument: useDefault("getDocument", getDocument2),
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange
      },
      tooltipParameters: {
        onStatus,
        tooltipSemanticType,
        hoverDelay: hoverDelay ?? null,
        usesLongPress: usesLongPress || false
      },
      pressReturn: { longPress: longPress || false }
    })) });
  });

  // demos/accordion.tsx
  var accordion_exports = {};
  __export(accordion_exports, {
    Blurb: () => Blurb,
    Code: () => Code,
    Demo: () => Demo
  });
  function DemoAccordion({ children }) {
    return /* @__PURE__ */ u4(Accordion, { orientation: "vertical", render: (_info) => {
      return /* @__PURE__ */ u4("div", { id: "accordion-demo", children });
    } });
  }
  var DemoAccordionSection = w4(function DemoAccordionSection2({ index, body, heading, disabled, open }) {
    return /* @__PURE__ */ u4(
      AccordionSection,
      {
        index,
        tagButton: "button",
        open,
        disabled,
        render: (info) => /* @__PURE__ */ u4(Heading, { ...info.propsHeader, tag: "div", heading: /* @__PURE__ */ u4(g, { children: [
          /* @__PURE__ */ u4("span", { children: heading }),
          /* @__PURE__ */ u4("button", { ...info.propsHeaderButton, children: "Toggle open" })
        ] }), children: /* @__PURE__ */ u4("p", { ...info.propsBody, hidden: !info.accordionSectionReturn.expanded, children: body }) })
      }
    );
  });
  function Blurb() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/", children: "In accordance with the ARIA guidelines for Accordion patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "Each section's header and body are linked via ID; the body is ",
          /* @__PURE__ */ u4("code", { children: "labelled-by" }),
          " the header and the header ",
          /* @__PURE__ */ u4("code", { children: "control" }),
          "s the body."
        ] }),
        /* @__PURE__ */ u4("li", { children: "The header is a button and responds to keyboard, mouse, touch, etc. events, regardless of the element used." }),
        /* @__PURE__ */ u4("li", { children: [
          "If the header element is not a ",
          /* @__PURE__ */ u4("code", { children: "<button>" }),
          " element, it is given that ",
          /* @__PURE__ */ u4("code", { children: "role" }),
          "."
        ] }),
        /* @__PURE__ */ u4("li", { children: "Up/down & Home/End keys navigate through the list, as does Tab and Shift+Tab" }),
        /* @__PURE__ */ u4("li", {})
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: [
        "The ",
        /* @__PURE__ */ u4("code", { children: "render" }),
        " prop each ",
        /* @__PURE__ */ u4("code", { children: "AccordionSection" }),
        " takes must wrap the header button with a ",
        /* @__PURE__ */ u4("a", { href: "https://w3c.github.io/aria/#heading", children: "heading" }),
        " (e.g. ",
        /* @__PURE__ */ u4("code", { children: "h3" }),
        ", or ",
        /* @__PURE__ */ u4("code", { children: "<Heading>" }),
        "). See the default implementation for an example."
      ] }) })
    ] });
  }
  function Code() {
    return /* @__PURE__ */ u4("code", { children: `<Accordion render={...}>
    <AccordionSection index={0} render={...} />
    <AccordionSection index={1} render={...} />
    <AccordionSection index={2} render={...} />
</Accordion>` });
  }
  function Demo() {
    const [count, setCount] = p3(5);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb, {}),
      /* @__PURE__ */ u4(Code, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of accordion sections"
      ] }),
      /* @__PURE__ */ u4(DemoAccordion, { children: /* @__PURE__ */ u4(g, { children: Array.from(function* () {
        yield /* @__PURE__ */ u4(DemoAccordionSection, { index: 0, heading: "Accordion section #0", body: "Body content #0", disabled: false });
        yield /* @__PURE__ */ u4(DemoAccordionSection, { index: 1, heading: "Accordion section #1", body: "Body content #1", disabled: false });
        yield /* @__PURE__ */ u4(DemoAccordionSection, { index: 2, heading: "Accordion section #2 (disabled)", body: "Body content #2", disabled: true });
        yield /* @__PURE__ */ u4(DemoAccordionSection, { index: 3, heading: "Accordion section #3 (forced open)", body: "Body content #3", disabled: false, open: true });
        yield /* @__PURE__ */ u4(DemoAccordionSection, { index: 4, heading: "Accordion section #4 (forced closed)", body: "Body content #4", disabled: false, open: false });
        for (let i5 = 5; i5 < count; ++i5) {
          yield /* @__PURE__ */ u4(DemoAccordionSection, { index: i5, heading: `Accordion section #${i5}`, body: `BodyContent #${i5}`, disabled: false });
        }
      }()).slice(0, count) }) })
    ] });
  }

  // demos/button.tsx
  var button_exports = {};
  __export(button_exports, {
    Blurb: () => Blurb2,
    Code: () => Code2,
    Demo: () => Demo2
  });
  function Blurb2() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/button/", children: "In accordance with the ARIA guidelines for Button patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "Whether using an actual ",
          /* @__PURE__ */ u4("code", { children: "<button>" }),
          ", or something else like a ",
          /* @__PURE__ */ u4("code", { children: "<div>" }),
          ", the proper roles and event handlers will be applied."
        ] }),
        /* @__PURE__ */ u4("li", { children: "Buttons can be toggled (pressed or unpressed)." }),
        /* @__PURE__ */ u4("li", { children: [
          "The button responds to keyboard, mouse, touch, etc. events, regardless of the element used.",
          /* @__PURE__ */ u4("ul", { children: [
            /* @__PURE__ */ u4("li", { children: "Double-clicks do not select text, but text is still selectable without it counting as a press/click" }),
            /* @__PURE__ */ u4("li", { children: "When Enter is pressed, the button is immediately activated" }),
            /* @__PURE__ */ u4("li", { children: "When Space is pressed, the button is activated once released" }),
            /* @__PURE__ */ u4("li", { children: "iOS Safari properly focuses the button" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: [
        "If your button contains only an icon (or other non-descriptive content, etc.), you must provide an ",
        /* @__PURE__ */ u4("code", { children: "aria-label" }),
        " manually stating what happens when the button is pressed."
      ] }) })
    ] });
  }
  function Code2() {
    return /* @__PURE__ */ u4("code", { children: `<Button tag="button">Button</Button>
    <Button tag="div">Div</Button>` });
  }
  function Demo2() {
    const [pressed, setPressed] = useState(false);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb2, {}),
      /* @__PURE__ */ u4(Code2, {}),
      /* @__PURE__ */ u4(DemoButton, { disabled: false, tag: "button" }),
      /* @__PURE__ */ u4(DemoButton, { disabled: "soft", tag: "button" }),
      /* @__PURE__ */ u4(DemoButton, { disabled: "hard", tag: "button" }),
      /* @__PURE__ */ u4(DemoButton, { disabled: false, tag: "div" }),
      /* @__PURE__ */ u4(DemoButton, { disabled: "soft", tag: "div" }),
      /* @__PURE__ */ u4(DemoButton, { disabled: "hard", tag: "div" }),
      /* @__PURE__ */ u4(
        Button,
        {
          tagButton: "button",
          pressed,
          onPressSync: (e3) => setPressed(e3[EventDetail].pressed),
          render: (info) => {
            return /* @__PURE__ */ u4(g, { children: /* @__PURE__ */ u4("button", { ...info.props, children: `Toggle button (${pressed ? "pressed" : "unpressed"})` }) });
          }
        }
      )
    ] });
  }
  function DemoButton({ tag: Tag, disabled }) {
    const onPress = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      alert("Button clicked");
    };
    return /* @__PURE__ */ u4(
      ProgressWithHandler,
      {
        capture: (e3) => void 0,
        tagProgressIndicator: "progress",
        asyncHandler: onPress,
        render: (progressInfo) => {
          return /* @__PURE__ */ u4(
            Button,
            {
              disabled,
              tagButton: Tag,
              onPressSync: progressInfo.asyncHandlerReturn.syncHandler,
              render: (info) => {
                let progressBar = /* @__PURE__ */ u4(g, { children: [
                  /* @__PURE__ */ u4("label", { ...progressInfo.propsProgressLabel, children: "Async handler progress" }),
                  /* @__PURE__ */ u4("progress", { ...progressInfo.propsProgressIndicator })
                ] });
                return /* @__PURE__ */ u4(g, { children: [
                  /* @__PURE__ */ u4(Tag, { ...info.props, children: `${Tag} ${disabled ? ` disabled (${disabled == "soft" ? "soft" : "hard"})` : ""}` }),
                  progressInfo.asyncHandlerReturn.pending && progressBar
                ] });
              }
            }
          );
        }
      }
    );
  }

  // demos/checkbox-group.tsx
  var checkbox_group_exports = {};
  __export(checkbox_group_exports, {
    Blurb: () => Blurb3,
    Code: () => Code3,
    Demo: () => Demo3
  });
  function DemoCheckbox({ index }) {
    const [checked, setChecked] = useState(false);
    const ref = F2(null);
    return /* @__PURE__ */ u4(
      CheckboxGroupChild,
      {
        checked,
        index,
        focusSelf: () => ref.current?.checkboxLikeReturn.focusSelf(),
        onChangeFromParent: async (checked2) => {
          await new Promise((resolve) => setTimeout(resolve, Math.random() * 2e3));
          setChecked(checked2);
        },
        render: (info) => {
          return /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
            Checkbox,
            {
              imperativeHandle: ref,
              checked,
              disabled: false,
              ariaLabel: null,
              onCheckedChange: (e3) => {
                const checked2 = e3[EventDetail].checked;
                setChecked(checked2);
                info.checkboxGroupChildReturn.onChildCheckedChange(checked2);
              },
              labelPosition: "separate",
              tagInput: "input",
              tagLabel: "label",
              render: defaultRenderCheckboxLike({
                labelPosition: "separate",
                tagInput: "input",
                tagLabel: "label",
                makePropsInput: (info2) => useMergedProps(info.propsChild, info.propsTabbable, info2.propsInput),
                makePropsLabel: (info2) => ({ children: `Checkbox #${index}`, ...info2.propsLabel })
              })
            }
          ) });
        }
      }
    );
  }
  function Blurb3() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        "Checkbox groups are an alternative to multi-select lists. There is no role of ",
        /* @__PURE__ */ u4("code", { children: "checkboxgroup" }),
        ", but this aims to be an ARIA-compliant implementation of a checkbox group."
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "All normal ",
          /* @__PURE__ */ u4("code", { children: "Checkbox" }),
          " functionality is supported on each individual checkbox."
        ] }),
        /* @__PURE__ */ u4("li", { children: 'The parent checkbox switches between 3 states, remembering the last state that caused it to be "mixed".' }),
        /* @__PURE__ */ u4("li", { children: [
          `The parent's "mixed" state changes all children back to whatever state the user had most recently created; the distinction is drawn when a child calls `,
          /* @__PURE__ */ u4("code", { children: "onChildCheckedChange" }),
          ' during its event handler. This call is what notifies the parent checkbox what to use when switching to that "mixed" state.'
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "The children are treated as a composite component with list navigation; see ",
          /* @__PURE__ */ u4("code", { children: "AiraSingleSelectList" }),
          " for more information"
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          /* @__PURE__ */ u4("code", { children: "aria-controls" }),
          " is set on the parent Checkbox to contain the IDs of all child checkboxes. This has no effect on any technology that I am aware of, but it's there just in case."
        ] })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          /* @__PURE__ */ u4("code", { children: "CheckboxGroupParent" }),
          " has supports child checkboxes being asyncronous (e.g. if each child's ",
          /* @__PURE__ */ u4("code", { children: "onChangeFromParent" }),
          " is async, then the parent's ",
          /* @__PURE__ */ u4("code", { children: "onParentCheckedChange" }),
          " will asyncronously wait for all of them), but you must apply any relevant labelling of this circumstance yourself."
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "As mentioned, ",
          /* @__PURE__ */ u4("code", { children: "aria-controls" }),
          " basically does nothing. Please ensure you're using good labelling here; it is assumed that the parent checkbox provides sufficient labelling for all the children, which how the demo example identifies these elements. If you have a separate label, you will need to wrap the children in a ",
          /* @__PURE__ */ u4("code", { children: "role=group" }),
          " that references that label by overriding ",
          /* @__PURE__ */ u4("code", { children: "render" }),
          "."
        ] })
      ] })
    ] });
  }
  function Code3() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo3() {
    const [count, setCount] = useState(5);
    const [pending, setPending] = useState(false);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb3, {}),
      /* @__PURE__ */ u4(Code3, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of checkboxes"
      ] }),
      /* @__PURE__ */ u4("div", { children: [
        /* @__PURE__ */ u4("p", { children: [
          /* @__PURE__ */ u4("strong", { children: "Note:" }),
          " Each checkbox (in this demo only!) takes a random amount of time to update when modified via the parent checkbox to test async handling."
        ] }),
        /* @__PURE__ */ u4(
          CheckboxGroup,
          {
            orientation: "vertical",
            render: (info2) => {
              const ref = F2(null);
              return /* @__PURE__ */ u4("div", { ...info2.props, ...{
                children: /* @__PURE__ */ u4(g, { children: [
                  /* @__PURE__ */ u4(
                    CheckboxGroupParent,
                    {
                      index: 0,
                      focusSelf: () => ref.current?.checkboxLikeReturn.focusSelf(),
                      render: (info3) => /* @__PURE__ */ u4(
                        Checkbox,
                        {
                          imperativeHandle: ref,
                          disabled: pending,
                          checked: info3.checkboxGroupParentReturn.checked,
                          onCheckedChange: useStableCallback((event) => {
                            const checked = event[EventDetail].checked;
                            setPending(true);
                            info3.checkboxGroupParentReturn.onParentCheckedChange(event).finally(() => setPending(false));
                          }),
                          ariaLabel: "Parent checkbox",
                          labelPosition: "separate",
                          tagInput: "input",
                          tagLabel: "label",
                          render: defaultRenderCheckboxLike({
                            labelPosition: "separate",
                            makePropsInput: (info4) => useMergedProps(info4.propsInput, info3.propsChild, info3.propsTabbable),
                            makePropsLabel: (info4) => ({ children: "Parent checkbox", ...info4.propsLabel }),
                            tagInput: "input",
                            tagLabel: "label"
                          })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ u4("div", { style: { display: "flex", flexDirection: "column" }, children: /* @__PURE__ */ u4(g, { children: Array.from(function* () {
                    for (let i5 = 0; i5 < count; ++i5) {
                      yield /* @__PURE__ */ u4(DemoCheckbox, { index: i5 + 1 }, i5);
                    }
                  }()) }) })
                ] })
              } });
            }
          }
        )
      ] })
    ] });
  }

  // demos/checkbox.tsx
  var checkbox_exports = {};
  __export(checkbox_exports, {
    Blurb: () => Blurb4,
    Code: () => Code4,
    Demo: () => Demo4
  });
  function Blurb4() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/", children: "In accordance with the ARIA guidelines for Checkbox patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: "Toggles between checked and unchecked when pressed (clicked, Enter pressed, Space released, etc.)" }),
        /* @__PURE__ */ u4("li", { children: [
          "Can be ",
          /* @__PURE__ */ u4("code", { children: "mixed" }),
          " instead, though ",
          /* @__PURE__ */ u4("code", { children: "onInput" }),
          " will only ever be called with ",
          /* @__PURE__ */ u4("code", { children: "true" }),
          " or ",
          /* @__PURE__ */ u4("code", { children: "false" })
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "Supports using ",
          /* @__PURE__ */ u4("code", { children: "<input>" }),
          "s and ",
          /* @__PURE__ */ u4("code", { children: "<label>" }),
          "s, as well as just plain ol' ",
          /* @__PURE__ */ u4("code", { children: "<div>" }),
          "s on either/both"
        ] }),
        /* @__PURE__ */ u4("li", { children: "The checkbox and label can be sibling elements, like normal, or the label can wrap the input for a larger hit area. In all cases, the appropriate roles/event handlers will be applied to each element." }),
        /* @__PURE__ */ u4("li", { children: "When selecting the text of a checkbox's label, this does not change the checkbox's state" }),
        /* @__PURE__ */ u4("li", { children: "Double-clicking the label checks & un-checks the checkbox instead of selecting the label's text" }),
        /* @__PURE__ */ u4("li", { children: "Checkbox groups (with a tri-state parent) are a separate component/hook" })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: [
        "If your checkbox does not have a visible label (achievable by by overriding the ",
        /* @__PURE__ */ u4("code", { children: "render" }),
        " prop and setting ",
        /* @__PURE__ */ u4("code", { children: "labelPosition" }),
        ' to be "separate"), you must pass ',
        /* @__PURE__ */ u4("code", { children: "aria-label" }),
        " as a prop to the checkbox manually. Not providing one will print an error to the console, but it it not required by the type system."
      ] }) })
    ] });
  }
  function Code4() {
    return /* @__PURE__ */ u4("code", { children: `<Checkbox checked={true} labelPosition="separate" tagInput="input" tagLabel="label">Label text</Checkbox>` });
  }
  function Demo4() {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb4, {}),
      /* @__PURE__ */ u4(Code4, {}),
      /* @__PURE__ */ u4(Checkbox, { checked: disabled, onCheckedChange: (e3) => setDisabled(e3[EventDetail].checked), ariaLabel: null, labelPosition: "separate", tagInput: "input", tagLabel: "label", render: (info) => /* @__PURE__ */ u4(g, { children: [
        /* @__PURE__ */ u4("input", { ...info.propsInput }),
        /* @__PURE__ */ u4("label", { ...info.propsLabel, children: "Disabled" })
      ] }) }),
      /* @__PURE__ */ u4(Button, { tagButton: "button", onPressSync: () => {
        setChecked("mixed");
      }, render: (info) => /* @__PURE__ */ u4("button", { ...info.props, children: "Change to mixed" }) }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "separate", disabled, tagInput: "input", tagLabel: "label" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "wrapping", disabled, tagInput: "input", tagLabel: "label" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "wrapping2", disabled, tagInput: "input", tagLabel: "label" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "separate", disabled, tagInput: "div", tagLabel: "label" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "wrapping", disabled, tagInput: "div", tagLabel: "label" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "separate", disabled, tagInput: "input", tagLabel: "div" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "wrapping", disabled, tagInput: "input", tagLabel: "div" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "separate", disabled, tagInput: "div", tagLabel: "div" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "wrapping", disabled, tagInput: "div", tagLabel: "div" }),
      /* @__PURE__ */ u4(DemoCheckbox2, { checked, setChecked, labelPosition: "hidden", disabled, tagInput: "input", tagLabel: "label" })
    ] });
  }
  function DemoCheckbox2({ labelPosition, tagInput, tagLabel, disabled, checked, setChecked }) {
    return /* @__PURE__ */ u4("div", { style: { border: "1px solid black" }, children: [
      /* @__PURE__ */ u4(
        Checkbox,
        {
          ariaLabel: null,
          disabled,
          checked,
          onCheckedChange: (e3) => {
            debugger;
            setChecked(e3[EventDetail].checked);
          },
          labelPosition: labelPosition == "hidden" ? "separate" : labelPosition == "wrapping2" ? "separate" : labelPosition,
          tagInput,
          tagLabel,
          render: defaultRenderCheckboxLike({
            labelPosition: labelPosition == "wrapping2" ? "separate" : labelPosition,
            tagInput,
            tagLabel,
            makePropsInput: (info) => useMergedProps(info.propsInput, { "aria-label": labelPosition == "hidden" ? `Hidden label (technically separate), ${tagInput} and ${tagLabel} ${checked ? "checked" : "not checked"}` : void 0 }),
            makePropsLabel: (info) => useMergedProps(info.propsLabel, { children: `${labelPosition}, ${tagInput} and ${tagLabel}, ${checked ? "checked" : "not checked"}` })
          })
        }
      ),
      labelPosition == "hidden" && /* @__PURE__ */ u4("div", { children: [
        "(This is not a label -- the actual label is via the ",
        /* @__PURE__ */ u4("code", { children: "aria-label" }),
        " prop)"
      ] })
    ] });
  }

  // demos/dialog.tsx
  var dialog_exports = {};
  __export(dialog_exports, {
    Blurb: () => Blurb5,
    Code: () => Code5,
    Demo: () => Demo5
  });
  function Blurb5() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/", children: "In accordance with the ARIA guidelines for Modal Dialog patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: "Dialogs block all other elements on the page from receiving focus/interaction and being perceivable to screen readers." }),
        /* @__PURE__ */ u4("li", { children: "Dialogs can be dismissed by pressing Escape or clicking the element designated as the backdrop, both of which can be cancelled/ignored if you need" }),
        /* @__PURE__ */ u4("li", { children: "When opened, the dialog will focus its title or body content as appropriate, however read below under Things Not Handled for caveats." }),
        /* @__PURE__ */ u4("li", { children: "When closed for any reason, the element that was responsible for opening the dialog will be focused." })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "By default, when opened, a dialog will focus its body content or title content depending on ",
          /* @__PURE__ */ u4("code", { children: "bodyIsOnlySemantic" }),
          ", which indicates that the dialog's body contains no interactive elements. This may not be suitable for all situations."
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "It is ",
          /* @__PURE__ */ u4("em", { children: "hightly" }),
          " recommended to override ",
          /* @__PURE__ */ u4("code", { children: "focusSelf" }),
          " for all dialogs you create, and have it focus whatever element makes the most sense for your particular dialog.",
          /* @__PURE__ */ u4("ul", { children: [
            /* @__PURE__ */ u4("li", { children: "Dialogs that act like a form should focus the first interactive element" }),
            /* @__PURE__ */ u4("li", { children: 'Dialogs that perform destructive actions should focus the "Cancel" button' }),
            /* @__PURE__ */ u4("li", { children: "In some cases, it's best to focus the first paragraph of the body." })
          ] }),
          "In all cases, consider that the first focused element will both be how keyboard users interact with the dialog, but also the first thing a screen reader will read aloud."
        ] })
      ] })
    ] });
  }
  function Code5() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo5() {
    const [open, setOpen] = useState(false);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb5, {}),
      /* @__PURE__ */ u4(Code5, {}),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        Dialog,
        {
          active: open,
          onDismiss: () => setOpen(false),
          dismissBackdropActive: true,
          dismissEscapeActive: true,
          focusOpener: (e3) => {
            e3.focus();
          },
          parentDepth: 0,
          focusPopup: (e3, f5) => {
            f5()?.focus();
          },
          ariaLabel: null,
          render: (info) => {
            return /* @__PURE__ */ u4(g, { children: [
              /* @__PURE__ */ u4("button", { ...info.propsSource, onClick: () => setOpen((o4) => !o4), children: "Open dialog" }),
              useDefaultRenderPortal({
                portalId: "portal",
                children: /* @__PURE__ */ u4("div", { ...info.propsFocusContainer, hidden: !open, children: /* @__PURE__ */ u4("div", { ...info.propsDialog, children: [
                  /* @__PURE__ */ u4("div", { ...info.propsTitle, children: "Dialog title" }),
                  /* @__PURE__ */ u4("div", { children: "Dialog body" }),
                  /* @__PURE__ */ u4("button", { onClick: () => setOpen(false), children: "Close dialog" })
                ] }) })
              })
            ] });
          }
        }
      ) })
    ] });
  }

  // demos/gridlist.tsx
  var gridlist_exports = {};
  __export(gridlist_exports, {
    Blurb: () => Blurb6,
    Code: () => Code6,
    Demo: () => Demo6
  });
  function Blurb6() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        "Because Listboxes are not allowed to contain interactive content, a Gridlist is semantically a list that ",
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/grid/", children: "complies with the ARIA pattern for grids" }),
        "."
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: "In terms of keyboard navigation and tabbing through elements, a Gridlist is like a Listbox, but in two dimensions, like a Table." }),
        /* @__PURE__ */ u4("li", { children: "The rows of a Gridlist are sortable. It is possible to have multiple, independently sortable sections within the same Gridlist." })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "It's up to you to make sure that any interactive elements within a Gridlist respond to focus management properly with ",
          /* @__PURE__ */ u4("code", { children: "focusSelf" }),
          " prop and a properly placed ",
          /* @__PURE__ */ u4("code", { children: [
            "tabIndex=",
            "{",
            "info.rovingTabIndex.tabbable? 0 : -1",
            "}"
          ] }),
          " in the ",
          /* @__PURE__ */ u4("code", { children: "render" }),
          " prop."
        ] }),
        /* @__PURE__ */ u4("li", { children: "Any given row in a Gridlist can be marked as selected, but this is up to you to handle manually at the moment" })
      ] })
    ] });
  }
  function Code6() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function DemoGridlistChild1({ row }) {
    const text = "Gridlist child " + row;
    return /* @__PURE__ */ u4(GridlistChild, { focusSelf: (e3) => e3.focus(), index: 0, render: (info) => {
      return /* @__PURE__ */ u4("div", { ...useMergedProps(info.propsCell, info.propsTabbable, info.propsPress), children: text });
    } });
  }
  function DemoGridlistChild2({ tabbable }) {
    const cb = F2(null);
    const [b3, setB] = useState(false);
    return /* @__PURE__ */ u4(
      GridlistChild,
      {
        focusSelf: (e3) => {
          debugger;
          cb.current?.checkboxLikeReturn.focusSelf();
        },
        index: 1,
        render: (info) => {
          return /* @__PURE__ */ u4("div", { ...useMergedProps(info.propsCell), children: /* @__PURE__ */ u4(
            Checkbox,
            {
              ariaLabel: "Whether this item is selected",
              imperativeHandle: cb,
              labelPosition: "separate",
              tagInput: "input",
              tagLabel: "label",
              checked: b3,
              disabled: false,
              onCheckedChange: (checked) => setB(getEventDetail(checked).checked),
              render: (infoCheckbox) => {
                return /* @__PURE__ */ u4(g, { children: /* @__PURE__ */ u4("input", { ...useMergedProps(infoCheckbox.propsInput, info.propsTabbable, info.propsPress) }) });
              }
            }
          ) });
        }
      }
    );
  }
  function Demo6() {
    const [count, setCount] = useState(5);
    const [selectedIndex, setSelectedIndex] = useState(null);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb6, {}),
      /* @__PURE__ */ u4(Code6, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of table rows"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        Gridlist,
        {
          ariaLabel: null,
          singleSelectionAriaPropName: "aria-selected",
          groupingType: "without-groups",
          singleSelectionMode: "activation",
          singleSelectedIndex: selectedIndex,
          onSingleSelectedIndexChange: (e3) => setSelectedIndex(e3[EventDetail].selectedIndex),
          render: (infoGridlist) => {
            infoGridlist.rovingTabIndexReturn.getTabbableIndex();
            return /* @__PURE__ */ u4(g, { children: [
              /* @__PURE__ */ u4("label", { ...infoGridlist.propsGridlistLabel, children: "Gridlist demo" }),
              /* @__PURE__ */ u4("ul", { ...infoGridlist.propsGridlist, children: /* @__PURE__ */ u4(
                GridlistRows,
                {
                  staggered: true,
                  render: (rowsInfo) => {
                    return /* @__PURE__ */ u4(g, { children: rowsInfo.rearrangeableChildrenReturn.children });
                  },
                  children: Array.from(function* () {
                    for (let i5 = 0; i5 < count; ++i5) {
                      yield /* @__PURE__ */ u4(
                        GridlistRow,
                        {
                          selected: null,
                          index: i5,
                          render: (rowInfo) => {
                            if (rowInfo.staggeredChildReturn.hideBecauseStaggered || rowInfo.paginatedChildReturn.hideBecausePaginated)
                              return /* @__PURE__ */ u4("li", { ...rowInfo.props });
                            return /* @__PURE__ */ u4("li", { ...rowInfo.props, children: [
                              /* @__PURE__ */ u4(DemoGridlistChild1, { row: i5 }),
                              i5 != 2 && /* @__PURE__ */ u4(DemoGridlistChild2, { tabbable: rowInfo.rovingTabIndexChildReturn?.tabbable || false })
                            ] });
                          }
                        }
                      );
                    }
                  }())
                }
              ) })
            ] });
          }
        }
      ) })
    ] });
  }

  // demos/listbox-multi.tsx
  var listbox_multi_exports = {};
  __export(listbox_multi_exports, {
    Blurb: () => Blurb7,
    Code: () => Code7,
    Demo: () => Demo7
  });
  var DemoListItem = w4(function DemoListItem2({ index }) {
    const [selected, setSelected] = useState(false);
    const labelText = `List item #${index}${selected ? " (selected)" : ""}`;
    return /* @__PURE__ */ u4(
      ListboxItem,
      {
        multiSelected: selected,
        index,
        onMultiSelectedChange: (e3) => setSelected(e3[EventDetail].multiSelected),
        render: (info) => {
          if (!info.singleSelectionChildReturn)
            return /* @__PURE__ */ u4("li", { ...info.props });
          return /* @__PURE__ */ u4("li", { ...info.props, children: labelText });
        }
      }
    );
  });
  function Blurb7() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/", children: "In accordance with the ARIA guidelines for Listbox patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "The children are treated as a composite component with list navigation; see ",
          /* @__PURE__ */ u4("code", { children: "AiraSingleSelectList" }),
          " for more information"
        ] }),
        /* @__PURE__ */ u4("li", { children: 'The parent checkbox switches between 3 states, remembering the last state that caused it to be "mixed".' }),
        /* @__PURE__ */ u4("li", { children: [
          "The parent checkbox reacts to each child's ",
          /* @__PURE__ */ u4("code", { children: "checked" }),
          " prop and updates its own internal ",
          /* @__PURE__ */ u4("code", { children: "checked" }),
          " attribute (be aware of this if they're asyncronous, as you'll want to ensure they all resolve on the same tick with ",
          /* @__PURE__ */ u4("code", { children: "Promise.all" }),
          " to not clobber the user's inputs)."
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "The children are treated as a composite component with list navigation; see ",
          /* @__PURE__ */ u4("code", { children: "AiraSingleSelectList" }),
          " for more information"
        ] }),
        /* @__PURE__ */ u4("li", { children: "Grouping is supported" }),
        /* @__PURE__ */ u4("li", { children: "Sorting/reordering is supported, though not provided by default, as it's mutually exclusive with grouping." })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "It is assumed that the parent checkbox provides sufficient labelling for all the children, which how the demo example identifies these elements. If you have a separate label, you will need to wrap the children in a ",
          /* @__PURE__ */ u4("code", { children: "role=group" }),
          " that references that label by overriding ",
          /* @__PURE__ */ u4("code", { children: "render" }),
          "."
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "See the caveat above for when each child's ",
          /* @__PURE__ */ u4("code", { children: "onInput" }),
          " takes a variable amount of time to actually update the ",
          /* @__PURE__ */ u4("code", { children: "checked" }),
          " prop, as it can clobber the user's last input when clicking on the parent"
        ] })
      ] })
    ] });
  }
  function Code7() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo7() {
    const [count, setCount] = useState(5);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb7, {}),
      /* @__PURE__ */ u4(Code7, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of list items"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        Listbox,
        {
          singleSelectedIndex: null,
          ariaLabel: null,
          multiSelectionAriaPropName: "aria-selected",
          orientation: "vertical",
          multiSelectionMode: "activation",
          render: (info) => {
            return /* @__PURE__ */ u4(g, { children: [
              /* @__PURE__ */ u4("label", { ...info.propsListboxLabel }),
              /* @__PURE__ */ u4("ul", { ...info.propsListbox, children: /* @__PURE__ */ u4(
                ListboxChildren,
                {
                  staggered: true,
                  render: (info2) => {
                    return /* @__PURE__ */ u4(g, { children: info2.rearrangeableChildrenReturn.children });
                  },
                  children: Array.from(function* () {
                    for (let i5 = 0; i5 < count; ++i5) {
                      yield /* @__PURE__ */ u4(DemoListItem, { index: i5 }, i5);
                    }
                  }())
                }
              ) })
            ] });
          }
        }
      ) })
    ] });
  }

  // demos/listbox-single.tsx
  var listbox_single_exports = {};
  __export(listbox_single_exports, {
    Blurb: () => Blurb8,
    Code: () => Code8,
    Demo: () => Demo8
  });
  var DemoListItem3 = w4(function DemoListItem4({ index }) {
    return /* @__PURE__ */ u4(
      ListboxItem,
      {
        index,
        focusSelf: (e3) => e3.focus(),
        render: (info) => {
          if (!info.singleSelectionChildReturn)
            return /* @__PURE__ */ u4("li", { ...info.props });
          const selected = info.singleSelectionChildReturn.singleSelected;
          return /* @__PURE__ */ u4("li", { ...useMergedProps(info.props), children: `List item #${index}${selected ? " (selected)" : ""}` });
        }
      }
    );
  });
  function Blurb8() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/", children: "In accordance with the ARIA guidelines for Listbox patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "In terms of keyboard navigation and tabbing through elements, a Listbox is considered a ",
          /* @__PURE__ */ u4("strong", { children: "single" }),
          " tab stop; in other words, no matter how many list items there are in a Listbox, it only takes one press of the Tab button to go through it.",
          /* @__PURE__ */ u4("ul", { children: [
            /* @__PURE__ */ u4("li", { children: "When a Listbox is tabbed into, the most recently selected item is given focus" }),
            /* @__PURE__ */ u4("li", { children: "Pressing Tab again navigates out of the listbox; no other list items are tabbable other than the one currently designated." }),
            /* @__PURE__ */ u4("li", { children: "Pressing the arrow keys navigates through the Listbox one item at a time" }),
            /* @__PURE__ */ u4("li", { children: "Pressing the Home/End keys move focus to the first/last items respectively" }),
            /* @__PURE__ */ u4("li", { children: "Typing any sequence of text starts typeahead that navigates to the next item that matches what's being typed" }),
            /* @__PURE__ */ u4("li", { children: "Focus & selection management is as optimized as possible; only two children re-render at a time when focus or selection changes" }),
            /* @__PURE__ */ u4("li", { children: "These apply generally to all composite components with a variable number of children (Tab Lists, Radio Groups, Multi-Select Listboxes etc.)" })
          ] })
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "Rather than each individual list item knowing whether it is selected or not (as with multi-select lists), here the parent knows the ",
          /* @__PURE__ */ u4("code", { children: "selectedIndex" }),
          " and simply notifies the (max two) relevant children any time it changes."
        ] }),
        /* @__PURE__ */ u4("li", { children: "Grouping is supported" }),
        /* @__PURE__ */ u4("li", { children: "Sorting/reordering is supported. Each group is sorted independently." })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: "Listboxes do not support interactive content within them (e.g. a dropdown menu), as ARIA specifies that this is a different pattern." }) })
    ] });
  }
  function Code8() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function ListboxDemo({ count, label }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    return /* @__PURE__ */ u4(
      Listbox,
      {
        singleSelectedIndex: selectedIndex,
        onSingleSelectedIndexChange: (e3) => setSelectedIndex(e3[EventDetail].selectedIndex),
        singleSelectionAriaPropName: "aria-selected",
        render: (info) => {
          return /* @__PURE__ */ u4(g, { children: [
            /* @__PURE__ */ u4("label", { ...info.propsListboxLabel, children: label }),
            /* @__PURE__ */ u4("ol", { ...info.propsListbox, children: /* @__PURE__ */ u4(
              ListboxChildren,
              {
                staggered: true,
                render: (info2) => {
                  return /* @__PURE__ */ u4(g, { children: info2.rearrangeableChildrenReturn.children });
                },
                children: Array.from(function* () {
                  for (let i5 = 0; i5 < count; ++i5) {
                    yield /* @__PURE__ */ u4(DemoListItem3, { index: i5 }, i5);
                  }
                }())
              }
            ) })
          ] });
        },
        singleSelectionMode: "activation",
        ariaLabel: null,
        orientation: "vertical"
      }
    );
  }
  function Demo8() {
    const [count, setCount] = useState(5);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb8, {}),
      /* @__PURE__ */ u4(Code8, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of list items"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(ListboxDemo, { count, label: "Single-select listbox demo without groups" }) }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        GroupedListbox,
        {
          orientation: "vertical",
          ariaLabel: null,
          render: (info) => {
            return /* @__PURE__ */ u4(g, { children: [
              /* @__PURE__ */ u4("label", { ...info.propsListboxLabel, children: "Single-select listbox demo with groups" }),
              /* @__PURE__ */ u4("div", { ...info.propsListbox, children: [
                /* @__PURE__ */ u4(ListboxDemo, { count, label: "Group #0" }),
                /* @__PURE__ */ u4(ListboxDemo, { count, label: "Group #1" }),
                /* @__PURE__ */ u4(ListboxDemo, { count, label: "Group #2" })
              ] })
            ] });
          }
        }
      ) })
    ] });
  }

  // demos/menu.tsx
  var menu_exports = {};
  __export(menu_exports, {
    Blurb: () => Blurb9,
    Code: () => Code9,
    Demo: () => Demo9
  });
  function DemoListItem5({ index }) {
    return /* @__PURE__ */ u4(
      MenuItem,
      {
        index,
        getSortValue: returnZero,
        role: "menuitem",
        onPress: (e3) => alert(`Menu item #${index} pressed`),
        render: (info) => /* @__PURE__ */ u4("li", { ...info.props, children: `Menu item #${index}` })
      }
    );
  }
  function Blurb9() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/", children: "In accordance with the ARIA guidelines for Listbox patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "The children are treated as a composite component with list navigation; see ",
          /* @__PURE__ */ u4("code", { children: "AiraSingleSelectList" }),
          " for more information"
        ] }),
        /* @__PURE__ */ u4("li", { children: "When opened, the menu will focus the first element within it. When closed (by pressing escape, pressing the button again, or tabbing out of the menu), the button that opened it will have focus restored to it." }),
        /* @__PURE__ */ u4("li", { children: "When the menu is closed because another element on the page was focused instead, focus will not be modified." })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: [
        "Unlike most components, the label of a menu is implicitly the button that opens it and is not a separate, standalone element. If this button doesn't label the menu well, you must use the ",
        /* @__PURE__ */ u4("code", { children: "ariaLabel" }),
        " prop to compensate."
      ] }) })
    ] });
  }
  function Code9() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo9() {
    const [count, setCount] = useState(5);
    const [open, setOpen] = useState(false);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb9, {}),
      /* @__PURE__ */ u4(Code9, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of menu items"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        Menu,
        {
          orientation: "vertical",
          onOpen: () => setOpen(true),
          onDismiss: () => setOpen(false),
          active: open,
          openDirection: "down",
          render: (info) => {
            return /* @__PURE__ */ u4(g, { children: [
              /* @__PURE__ */ u4("button", { ...info.propsTrigger, onClick: () => setOpen((o4) => !o4), children: "Menu trigger" }),
              useDefaultRenderPortal({
                portalId: "portal",
                children: /* @__PURE__ */ u4("div", { ...info.propsSurface, hidden: !open, children: [
                  /* @__PURE__ */ u4("div", { ...info.propsSentinel }),
                  /* @__PURE__ */ u4("ul", { ...info.propsTarget, children: Array.from(function* () {
                    for (let i5 = 0; i5 < count; ++i5) {
                      yield /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(DemoListItem5, { index: i5 }, i5) });
                    }
                  }()) }),
                  /* @__PURE__ */ u4("div", { ...info.propsSentinel })
                ] })
              })
            ] });
          }
        }
      ) })
    ] });
  }

  // demos/radio.tsx
  var radio_exports = {};
  __export(radio_exports, {
    Blurb: () => Blurb10,
    Code: () => Code10,
    Demo: () => Demo10
  });
  var DemoRadioButton = w4(function DemoRadioButton2({ index }) {
    return /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
      Radio,
      {
        index,
        disabled: false,
        labelPosition: "separate",
        value: index,
        tagInput: "input",
        tagLabel: "label",
        ariaLabel: null,
        render: (info) => {
          return /* @__PURE__ */ u4(g, { children: [
            /* @__PURE__ */ u4("input", { ...info.propsInput, name: "radio-demo" }),
            /* @__PURE__ */ u4("label", { ...info.propsLabel, children: [
              "Radio #",
              index
            ] })
          ] });
        }
      }
    ) });
  });
  function Blurb10() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/", children: "In accordance with the ARIA guidelines for Radio Button patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "The children are treated as a composite component with list navigation; see ",
          /* @__PURE__ */ u4("code", { children: "AiraSingleSelectList" }),
          " for more information"
        ] }),
        /* @__PURE__ */ u4("li", { children: "The input & label support the same text-selection affordances as Checkboxes (labels can be selected, but double-clicking doesn't select the text and selecting text doesn't count as an input)" }),
        /* @__PURE__ */ u4("li", { children: "Selection state is handled by the parent; instead of specifying whether any given radio button is checked or not, the parent notifies each child of the necessary changes." })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "If your checkbox does not have a visible label (achievable by by overriding the ",
          /* @__PURE__ */ u4("code", { children: "render" }),
          " prop and setting ",
          /* @__PURE__ */ u4("code", { children: "labelPosition" }),
          ' to be "separate"), you must pass ',
          /* @__PURE__ */ u4("code", { children: "aria-label" }),
          " as a prop to the checkbox manually. Not providing one will print an error to the console, but it it not required by the type system."
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "The above also applies to the radio group as a whole; ARIA requires that all Radio Buttons be contained within an element with a specific role which is labelled either by an element (handled for you) or ",
          /* @__PURE__ */ u4("code", { children: "aria-label" }),
          " (specified by you manually on the input)."
        ] })
      ] })
    ] });
  }
  function Code10() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo10() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [count, setCount] = useState(5);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb10, {}),
      /* @__PURE__ */ u4(Code10, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of radio buttons"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        RadioGroup,
        {
          name: "radio-demo",
          ariaLabel: null,
          selectedValue,
          arrowKeyDirection: "vertical",
          onSelectedValueChange: (e3) => {
            setSelectedValue(e3[EventDetail].selectedValue);
          },
          render: (info) => {
            return /* @__PURE__ */ u4(g, { children: [
              /* @__PURE__ */ u4("label", { ...info.propsRadioGroupLabel, children: "Radio group demo" }),
              /* @__PURE__ */ u4("div", { ...info.propsRadioGroup, children: Array.from(function* () {
                for (let i5 = 0; i5 < count; ++i5) {
                  yield /* @__PURE__ */ u4(DemoRadioButton, { index: i5 }, i5);
                }
              }()) })
            ] });
          }
        }
      ) })
    ] });
  }

  // demos/slider.tsx
  var slider_exports = {};
  __export(slider_exports, {
    Blurb: () => Blurb11,
    Code: () => Code11,
    Demo: () => Demo11
  });
  function DemoSliderThumb({ index }) {
    const [value, setValue] = useState(0);
    return /* @__PURE__ */ u4(
      SliderThumb,
      {
        index,
        tag: "input",
        label: `Slider thumb #${index}`,
        value,
        onValueChange: (e3) => setValue(e3[EventDetail].value),
        min: 0,
        max: 10,
        render: (info) => {
          return /* @__PURE__ */ u4("input", { ...info.propsSliderThumb });
        }
      }
    );
  }
  function Blurb11() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/", children: "In accordance with the ARIA guidelines for Listbox patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "The children are treated as a composite component with list navigation; see ",
          /* @__PURE__ */ u4("code", { children: "AiraSingleSelectList" }),
          " for more information"
        ] }),
        /* @__PURE__ */ u4("li", { children: "When opened, the menu will focus the first element within it. When closed (by pressing escape, pressing the button again, or tabbing out of the menu), the button that opened it will have focus restored to it." }),
        /* @__PURE__ */ u4("li", { children: "When the menu is closed because another element on the page was focused instead, focus will not be modified." })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: "TODO" }) })
    ] });
  }
  function Code11() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo11() {
    const [count, setCount] = useState(5);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb11, {}),
      /* @__PURE__ */ u4(Code11, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of slider thumbs"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        Slider,
        {
          min: 0,
          max: 10,
          render: (info) => {
            return /* @__PURE__ */ u4(g, { children: Array.from(function* () {
              for (let i5 = 0; i5 < count; ++i5) {
                yield /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(DemoSliderThumb, { index: i5 }, i5) });
              }
            }()) });
          }
        }
      ) })
    ] });
  }

  // demos/table.tsx
  var table_exports = {};
  __export(table_exports, {
    Blurb: () => Blurb12,
    Code: () => Code12,
    Demo: () => Demo12
  });
  function Blurb12() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        "This is an implementation of an interactive data table that complies with ",
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/table/", children: "the ARIA guidelines for Table patterns" }),
        "."
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "In terms of keyboard navigation and tabbing through elements, a Table is considered a ",
          /* @__PURE__ */ u4("strong", { children: "single" }),
          " tab stop; in other words, no matter how many cells there are in a table (including if the cells contain interactive elements), it only takes one press of the Tab button to go through it.",
          /* @__PURE__ */ u4("ul", { children: [
            /* @__PURE__ */ u4("li", { children: [
              "Pressing the arrow keys navigates through the cells of the Table. You can override each cell's ",
              /* @__PURE__ */ u4("code", { children: "focusSelf" }),
              " prop to handle child elements."
            ] }),
            /* @__PURE__ */ u4("li", { children: "Most other rules of list navigation apply (as in Listboxes), but in two dimensions." })
          ] })
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "The body rows are sortable via each cell's ",
          /* @__PURE__ */ u4("code", { children: "value" }),
          " prop. As a result of this, each row must be a ",
          /* @__PURE__ */ u4("em", { children: "direct" }),
          " child of the body, like as a normal array of children with no intervening JSX."
        ] })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "If you don't need all the sorting and focus management and such, there's no reason not to just use the good old ",
          /* @__PURE__ */ u4("code", { children: "<table>" }),
          " element."
        ] }),
        /* @__PURE__ */ u4("li", { children: [
          "It's up to you to make sure that any interactive elements within a table cell respond to focus management properly with the aforementioned ",
          /* @__PURE__ */ u4("code", { children: "focusSelf" }),
          " prop and a properly placed ",
          /* @__PURE__ */ u4("code", { children: [
            "tabIndex=",
            "{",
            "info.rovingTabIndex.tabbable? 0 : -1",
            "}"
          ] }),
          " in the ",
          /* @__PURE__ */ u4("code", { children: "render" }),
          " prop."
        ] })
      ] })
    ] });
  }
  function Code12() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function DemoInput({ index }) {
    const [v4, setV] = useState("");
    return /* @__PURE__ */ u4(
      TableCell,
      {
        focusSelf: (e3) => {
          e3.focus();
        },
        tagTableCell: "td",
        index,
        getSortValue: useStableGetter(v4),
        render: (info) => {
          return /* @__PURE__ */ u4("td", { ...info.propsCell, children: /* @__PURE__ */ u4("input", { ...info.propsFocus, type: "text", onInput: x2((e3) => {
            setV(e3.currentTarget.value);
            e3.preventDefault();
          }, []), value: v4 }) });
        }
      }
    );
  }
  function DemoTableCell({ index, header }) {
    const r4 = F2(Math.random());
    if (header) {
      const ref = F2(null);
      const text = `Header #${index}`;
      return /* @__PURE__ */ u4(
        TableCell,
        {
          focusSelf: (e3) => ref.current?.focus(),
          tagTableCell: "th",
          index,
          getSortValue: returnZero,
          render: (info) => /* @__PURE__ */ u4("th", { ...info.propsCell, children: [
            text,
            /* @__PURE__ */ u4("button", { ...useMergedProps(info.propsFocus, { ref }), onClick: () => {
              info.tableCellReturn.sortByThisColumn();
            }, children: "Sort" })
          ] })
        }
      );
    } else {
      switch (index) {
        case 0:
          return /* @__PURE__ */ u4(DemoInput, { index });
        default:
          return /* @__PURE__ */ u4(TableCell, { focusSelf: (e3) => e3.focus(), tagTableCell: "td", index, getSortValue: useStableGetter(r4.current), render: (info) => {
            return /* @__PURE__ */ u4("td", { ...info.propsFocus, ...info.propsCell, children: r4.current.toString() });
          } });
      }
    }
  }
  function Demo12() {
    const [count, setCount] = useState(5);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb12, {}),
      /* @__PURE__ */ u4(Code12, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of table rows"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        Table2,
        {
          ariaLabel: null,
          multiSelectionMode: "activation",
          tagTable: "table",
          render: (infoTable) => {
            return /* @__PURE__ */ u4(g, { children: [
              /* @__PURE__ */ u4("label", { ...infoTable.propsLabel, children: "Table demo" }),
              /* @__PURE__ */ u4("table", { ...infoTable.propsTable, children: [
                /* @__PURE__ */ u4(
                  TableSection,
                  {
                    tagTableSection: "thead",
                    location: "head",
                    render: (infoSection) => {
                      return /* @__PURE__ */ u4("thead", { ...infoSection.propsTableSection, children: /* @__PURE__ */ u4(
                        TableRow,
                        {
                          index: 0,
                          tagTableRow: "tr",
                          render: (info) => {
                            return /* @__PURE__ */ u4("tr", { ...info.props, children: [
                              /* @__PURE__ */ u4(DemoTableCell, { header: true, index: 0 }, 0),
                              /* @__PURE__ */ u4(DemoTableCell, { header: true, index: 1 }, 1),
                              /* @__PURE__ */ u4(DemoTableCell, { header: true, index: 2 }, 2)
                            ] });
                          }
                        }
                      ) });
                    }
                  }
                ),
                /* @__PURE__ */ u4(
                  TableSection,
                  {
                    tagTableSection: "tbody",
                    location: "body",
                    multiSelectionAriaPropName: "aria-selected",
                    render: (infoSection) => {
                      return /* @__PURE__ */ u4("tbody", { ...infoSection.propsTableSection, children: infoSection.rearrangeableChildrenReturn.useRearrangedChildren(Array.from(function* () {
                        for (let i5 = 0; i5 < count; ++i5) {
                          yield /* @__PURE__ */ u4(
                            TableRow,
                            {
                              tagTableRow: "tr",
                              index: i5,
                              render: (infoRow) => {
                                return /* @__PURE__ */ u4("tr", { ...infoRow.props, children: [
                                  /* @__PURE__ */ u4(DemoTableCell, { index: 0 }, 0),
                                  /* @__PURE__ */ u4(DemoTableCell, { index: 1 }, 1),
                                  /* @__PURE__ */ u4(DemoTableCell, { index: 2 }, 2)
                                ] });
                              }
                            },
                            i5
                          );
                        }
                      }())) });
                    }
                  }
                )
              ] })
            ] });
          }
        }
      ) })
    ] });
  }

  // demos/tabs.tsx
  var tabs_exports = {};
  __export(tabs_exports, {
    Blurb: () => Blurb13,
    Code: () => Code13,
    Demo: () => Demo13
  });
  function Blurb13() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/", children: "In accordance with the ARIA guidelines for Tab and Tab Panel patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: [
        "The tabs are treated as a composite component with list navigation; see ",
        /* @__PURE__ */ u4("code", { children: "AiraSingleSelectList" }),
        " for more information"
      ] }) }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: "TODO" }) })
    ] });
  }
  function Code13() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo13() {
    const [count, setCount] = useState(5);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb13, {}),
      /* @__PURE__ */ u4(Code13, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of tabs"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        Tabs,
        {
          ariaLabel: null,
          orientation: "horizontal",
          render: (info) => {
            return /* @__PURE__ */ u4(g, { children: [
              /* @__PURE__ */ u4("label", { ...info.propsLabel, children: "Tabs example" }),
              /* @__PURE__ */ u4("ul", { ...info.propsContainer, style: { display: "flex" }, children: Array.from(function* () {
                for (let i5 = 0; i5 < count; ++i5) {
                  yield /* @__PURE__ */ u4(DemoTab, { i: i5 });
                }
              }()) }),
              /* @__PURE__ */ u4("div", { children: Array.from(function* () {
                for (let i5 = 0; i5 < count; ++i5) {
                  yield /* @__PURE__ */ u4(DemoTabPanel, { i: i5 });
                }
              }()) })
            ] });
          }
        }
      ) })
    ] });
  }
  var DemoTab = w4(function DemoTab2({ i: i5 }) {
    return /* @__PURE__ */ u4(Tab, { focusSelf: (e3) => e3.focus(), index: i5, render: (info) => /* @__PURE__ */ u4("li", { ...info.props, style: { marginLeft: "2em" }, children: [
      "Tab #",
      i5,
      " (offset: ",
      info.singleSelectionChildReturn.singleSelectedOffset ?? "null",
      ") ",
      info.singleSelectionChildReturn.singleSelected && "(visible)"
    ] }), getSortValue: returnZero }, i5);
  });
  var DemoTabPanel = w4(function DemoTabPanel2({ i: i5 }) {
    return /* @__PURE__ */ u4(TabPanel, { index: i5, render: (info) => /* @__PURE__ */ u4("div", { ...info.props, hidden: !info.tabPanelReturn.visible, children: [
      "Tab panel #",
      i5,
      " (offset: ",
      info.tabPanelReturn.visibleOffset ?? "null",
      ")"
    ] }) }, i5);
  });

  // demos/toast.tsx
  var toast_exports = {};
  __export(toast_exports, {
    Blurb: () => Blurb14,
    Code: () => Code14,
    Demo: () => Demo14
  });
  function Blurb14() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/alert/", children: "Toasts (aka snackbars) are implemented using the Alert pattern." }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: "Pushing a toasts causes its contents to be shown visibly (and audibly with a screen reader)" }),
        /* @__PURE__ */ u4("li", { children: "Only new toasts are announced" }),
        /* @__PURE__ */ u4("li", { children: "Toasts are shown as soon as they are pushed, but you can control the maximum number shown at once with" }),
        /* @__PURE__ */ u4("li", { children: "Toasts can be dismissed in any order" }),
        /* @__PURE__ */ u4("li", { children: "Toasts can be set to auto-dismiss." })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: 'Auto-dismiss behavior is very situational. An auto-dismissed toast should only refer to information that can be viewed elsewhere; "X files deleted" can be double-checked in the Recycle Bin, "X has logged in" which you can along with everyone else in a tab somewhere, etc. This obviously cannot be checked programmatically.' }),
        /* @__PURE__ */ u4("li", { children: "TODO: Focus management related to toasts that have interactive content" }),
        /* @__PURE__ */ u4("li", { children: "TODO: Toasts are still announced even when the current browser tab is hidden instead of saving them for when the user returns" }),
        /* @__PURE__ */ u4("li", { children: "TODO: Toasts still auto-dismiss when they have focus/are being interacted with" })
      ] })
    ] });
  }
  function Code14() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo14() {
    const currentIndex = F2(0);
    const [toasts, setToasts] = useState([]);
    const pushToast = x2(() => {
      const index = currentIndex.current;
      currentIndex.current += 1;
      const c4 = /* @__PURE__ */ u4(g, { children: [
        "This the toast with an index of ",
        index,
        "."
      ] });
      const nt = /* @__PURE__ */ u4(Toast, { children: c4, index, render: ({ toastReturn: { dismiss, showing, dismissed, numberOfToastsAheadOfUs } }) => {
        const c5 = /* @__PURE__ */ u4(g, { children: [
          "This the toast with an index of ",
          index,
          ". (#",
          numberOfToastsAheadOfUs,
          " in the queue to be shown)."
        ] });
        return /* @__PURE__ */ u4("div", { style: showing ? {} : { opacity: 0.5 }, children: [
          c5,
          " ",
          /* @__PURE__ */ u4("button", { disabled: dismissed, onClick: dismiss, children: "Click to dismiss" })
        ] });
      }, timeout: null }, index);
      setToasts((t3) => [...t3, nt]);
    }, []);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb14, {}),
      /* @__PURE__ */ u4(Code14, {}),
      /* @__PURE__ */ u4("button", { onClick: pushToast, children: "Push a toast" }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(Toasts, { visibleCount: 3, render: (info) => {
        return /* @__PURE__ */ u4("div", { ...info.props, children: toasts });
      } }) })
    ] });
  }

  // demos/toolbar.tsx
  var toolbar_exports = {};
  __export(toolbar_exports, {
    Blurb: () => Blurb15,
    Code: () => Code15,
    Demo: () => Demo15
  });
  var DemoListItem6 = w4(function DemoListItem7({ index }) {
    return /* @__PURE__ */ u4(
      ToolbarChild,
      {
        index,
        focusSelf: (e3) => e3.focus(),
        getSortValue: returnZero,
        disabledProp: "disabled",
        render: (info2) => {
          return /* @__PURE__ */ u4(
            Button,
            {
              tagButton: "button",
              pressed: false,
              render: (info3) => /* @__PURE__ */ u4("button", { ...useMergedProps(info2.propsChild, info2.propsTabbable, info3.props), children: [
                "Toolbar child #",
                index
              ] })
            }
          );
        }
      }
    );
  });
  function Blurb15() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/", children: "In accordance with the ARIA guidelines for Toolbar patterns," }),
        " this widget supports the following:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: "A Toolbar is a single widget for the purposes of keyboard navigation, like a Listbox." }),
        /* @__PURE__ */ u4("li", { children: 'Toolbars are well-suited for "button group" patterns as well. Multiple groups can be contained within a single Toolbar, even multiple different types of components.' })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: /* @__PURE__ */ u4("li", { children: [
        "You must label the Toolbar with ",
        /* @__PURE__ */ u4("code", { children: "aria-label" }),
        "."
      ] }) })
    ] });
  }
  function Code15() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo15() {
    const [count, setCount] = useState(5);
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb15, {}),
      /* @__PURE__ */ u4(Code15, {}),
      /* @__PURE__ */ u4("label", { children: [
        /* @__PURE__ */ u4("input", { type: "number", min: 0, value: count, onInput: (e3) => setCount(e3.currentTarget.valueAsNumber) }),
        " # of list items"
      ] }),
      /* @__PURE__ */ u4("div", { children: /* @__PURE__ */ u4(
        Toolbar,
        {
          orientation: "horizontal",
          role: "toolbar",
          singleSelectionAriaPropName: "aria-pressed",
          singleSelectionMode: "activation",
          multiSelectionMode: "disabled",
          ariaLabel: null,
          render: (info) => /* @__PURE__ */ u4(g, { children: [
            /* @__PURE__ */ u4("label", { ...info.propsLabel, children: "Toolbar demo" }),
            /* @__PURE__ */ u4("div", { ...info.propsToolbar, children: Array.from(function* () {
              for (let i5 = 0; i5 < count; ++i5) {
                yield /* @__PURE__ */ u4(DemoListItem6, { index: i5 }, i5);
              }
            }()) })
          ] })
        }
      ) })
    ] });
  }

  // demos/tooltip.tsx
  var tooltip_exports = {};
  __export(tooltip_exports, {
    Blurb: () => Blurb16,
    Code: () => Code16,
    Demo: () => Demo16
  });
  function Blurb16() {
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4("p", { children: [
        /* @__PURE__ */ u4("a", { href: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/", children: "Tooltips have yet to be well defined in many areas" }),
        ", but this implementation aims to support common use cases:"
      ] }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: "Hovering or focusing the trigger element shows the tooltip" }),
        /* @__PURE__ */ u4("li", { children: "The tooltip stays shown when it itself is hovered/focused as well, so that the text inside can be selected" }),
        /* @__PURE__ */ u4("li", { children: "Moving the mouse between the trigger and the tooltip has some tolerance associated with immediately hiding the tooltip." }),
        /* @__PURE__ */ u4("li", { children: "Hovering, focusing, and re-hovering can each have a custom delay associated with it" }),
        /* @__PURE__ */ u4("li", { children: "When not using a pointer that can hover, tooltips can be activated with a long press (from `usePress`, used by buttons, checkboxes, list items, etc.)" })
      ] }),
      /* @__PURE__ */ u4("p", { children: /* @__PURE__ */ u4("strong", { children: [
        "Things ",
        /* @__PURE__ */ u4("em", { children: "not" }),
        " handled:"
      ] }) }),
      /* @__PURE__ */ u4("ul", { children: [
        /* @__PURE__ */ u4("li", { children: [
          "You must ensure that either the tooltip contains a focusable element (a button, link, ",
          /* @__PURE__ */ u4("code", { children: '<div tabIndex="-1" />' }),
          ", etc.)"
        ] }),
        /* @__PURE__ */ u4("li", { children: "Long presses on mobile devices are not yet handled (e.g. a long press on a button triggers a tooltip but does not activate the button)" })
      ] })
    ] });
  }
  function Code16() {
    return /* @__PURE__ */ u4("code", { children: `` });
  }
  function Demo16() {
    const [tooltipStatusText, setTooltipStatusText] = p3(null);
    const [tooltipStatusButton, setTooltipStatusButton] = p3(null);
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { pressReturn, props } = usePress({ pressParameters: { allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: null, focusSelf: (e3) => e3.focus(), longPressThreshold: 1e3, onPressingChange: null, onPressSync: () => alert("Button clicked") }, refElementReturn });
    return /* @__PURE__ */ u4(g, { children: [
      /* @__PURE__ */ u4(Blurb16, {}),
      /* @__PURE__ */ u4(Code16, {}),
      /* @__PURE__ */ u4("div", { children: [
        "The following text triggers a tooltip:",
        /* @__PURE__ */ u4(
          Tooltip,
          {
            tooltipSemanticType: "description",
            onStatus: setTooltipStatusText,
            hoverDelay: 500,
            render: (info) => {
              return /* @__PURE__ */ u4(g, { children: [
                /* @__PURE__ */ u4("span", { tabIndex: 0, ...info.propsTrigger, children: "Tooltip-triggering text that is hoverable and focusable: " }),
                useDefaultRenderPortal({
                  portalId: "portal",
                  children: /* @__PURE__ */ u4("div", { ...info.propsPopup, hidden: !tooltipStatusText, children: "This text describes the triggering text in more detail." })
                })
              ] });
            }
          }
        )
      ] }),
      /* @__PURE__ */ u4("div", { children: [
        "Also, this is a button with a tooltip. It behaves slightly differently:",
        /* @__PURE__ */ u4(
          Tooltip,
          {
            tooltipSemanticType: "description",
            onStatus: setTooltipStatusButton,
            hoverDelay: 500,
            usesLongPress: true,
            longPress: pressReturn.longPress,
            render: (info) => {
              return /* @__PURE__ */ u4(g, { children: [
                /* @__PURE__ */ u4("button", { ...useMergedProps(info.propsTrigger, propsStable, props), children: "Button with a tooltip " }),
                useDefaultRenderPortal({
                  portalId: "portal",
                  children: /* @__PURE__ */ u4("div", { ...info.propsPopup, hidden: !tooltipStatusButton, children: "Tooltip for the button" })
                })
              ] });
            }
          }
        )
      ] })
    ] });
  }

  // index.tsx
  var Component = () => {
    const { children, context } = useNotificationProvider({ targetAssertive: "aria-notifications-assertive", targetPolite: "aria-notifications-polite" });
    return /* @__PURE__ */ u4(NotificationProviderContext.Provider, { value: context, children: [
      children,
      /* @__PURE__ */ u4(Heading, { heading: "Demos", children: [
        /* @__PURE__ */ u4(Heading, { heading: "Accordion", children: /* @__PURE__ */ u4(Demo, {}) }),
        /* @__PURE__ */ u4(Heading, { heading: "Button", children: /* @__PURE__ */ u4(Demo2, {}) }),
        /* @__PURE__ */ u4(Heading, { heading: "Checkbox", children: /* @__PURE__ */ u4(Demo4, {}) }),
        /* @__PURE__ */ u4(Heading, { heading: "Checkbox Group", children: /* @__PURE__ */ u4(Demo3, {}) }),
        /* @__PURE__ */ u4(Heading, { heading: "Dialog", children: /* @__PURE__ */ u4(Demo5, {}) }),
        /* @__PURE__ */ u4(Heading, { heading: "Gridlist", children: /* @__PURE__ */ u4(Demo6, {}) }),
        /* @__PURE__ */ u4(Heading, { heading: "Single-select Listbox", children: /* @__PURE__ */ u4(Demo8, {}) }),
        /* @__PURE__ */ u4(Heading, { heading: "Multi-select Listbox", children: /* @__PURE__ */ u4(Demo7, {}) })
      ] })
    ] });
  };
  requestAnimationFrame(() => {
    B(/* @__PURE__ */ u4(Component, {}), document.getElementById("root"));
    console.log(
      accordion_exports,
      button_exports,
      checkbox_group_exports,
      checkbox_exports,
      dialog_exports,
      gridlist_exports,
      listbox_multi_exports,
      listbox_single_exports,
      menu_exports,
      radio_exports,
      slider_exports,
      table_exports,
      tabs_exports,
      toast_exports,
      toolbar_exports,
      tooltip_exports
    );
  });
})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

blocking-elements/dist/blocking-elements.js:
  (**
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
   *)
*/
//# sourceMappingURL=bundle.js.map
