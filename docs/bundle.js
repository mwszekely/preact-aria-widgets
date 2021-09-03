(function (useModal) {
	'use strict';

	var n,l$1,u$1,t$1,o$1,r$2,f$1,e$1={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$1(l,f,t,o,null)}function y$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null!=l$1.vnode&&l$1.vnode(f),f}function d$1(n){return n.children}function _$1(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||r$2!==l$1.debounceRendering)&&((r$2=l$1.debounceRendering)||o$1)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$1(t):o,t.__h),z(u,t),t.__e!=o&&b$1(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$1,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x$1(_,s,n):s=P$1(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$1(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x$1(t,l,u):P$1(u,t,t,n.__k,t.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$1:I,o):n.removeEventListener(l,o?T$1:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$1(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _$1(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$1.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$1(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h$1(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!o&&t||i).__k=v$1(d$1,null,[u]),r||e$1,e$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u);}function D(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$1=0,_$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_$1.prototype.render=d$1,t$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

	var t,u,r$1,o=0,i=[],c=l$1.__b,f=l$1.__r,e=l$1.diffed,a=l$1.__c,v=l$1.unmount;function m(t,r){l$1.__h&&l$1.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function s(n){return o=5,d(function(){return {current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}),i=[];}l$1.__b=function(n){u=null,c&&c(n);},l$1.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},l$1.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r$1===l$1.requestAnimationFrame||((r$1=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),a&&a(t,u);},l$1.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){l$1.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g$1(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

	function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=l$1.__e;l$1.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function M(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(M.prototype=new _$1).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};_$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var G={configurable:!0,get:function(){return this.class}},J=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=j,J&&J(n);};var K=l$1.__r;l$1.__r=function(n){K&&K(n);};

	function toVal(mix) {
		var k, y, str='';

		if (typeof mix === 'string' || typeof mix === 'number') {
			str += mix;
		} else if (typeof mix === 'object') {
			if (Array.isArray(mix)) {
				for (k=0; k < mix.length; k++) {
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
		var i=0, tmp, x, str='';
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
	    const lhsClass = lhs?.class;
	    const lhsClassName = lhs?.className;
	    const rhsClass = rhs?.class;
	    const rhsClassName = rhs?.className;
	    if (lhsClass || rhsClass || lhsClassName || rhsClassName) {
	        let lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
	        let rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
	        let allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)]);
	        return Array.from(allClasses).join(" ");
	    }
	    else {
	        return undefined;
	    }
	}

	function processRef(instance, ref) {
	    if (typeof ref === "function") {
	        ref(instance);
	    }
	    else if (ref != null) {
	        ref.current = instance;
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
	        const lhs = lhsProps?.ref;
	        const rhs = rhsProps?.ref;
	        if (lhs == null && rhs == null) {
	            return undefined;
	        }
	        else if (lhs == null) {
	            return rhs;
	        }
	        else if (rhs == null) {
	            return lhs;
	        }
	        else {
	            let ret = A$1((current) => {
	                processRef(current, lhs);
	                processRef(current, rhs);
	            }, [lhs, rhs]);
	            return ret;
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

	/**
	 * Merges two style objects, returning the result.
	 *
	 * @param style The user-given style prop for this component
	 * @param obj The CSS properties you want added to the user-given style
	 * @returns A CSS object containing the properties of both objects.
	 */
	function useMergedStyles(lhs, rhs) {
	    // Easy case, when there are no styles to merge return nothing.
	    if (!lhs && !rhs)
	        return undefined;
	    if (typeof lhs != typeof rhs) {
	        // Easy cases, when one is null and the other isn't.
	        if (lhs && !rhs)
	            return lhs;
	        if (!lhs && rhs)
	            return rhs;
	        // They're both non-null but different types.
	        // Convert the string type to an object bag type and run it again.
	        if (lhs && rhs) {
	            if (typeof lhs == "string")
	                return useMergedStyles({ style: Object.fromEntries(lhs.split(";").map(statement => statement.split(":"))) }, rhs);
	            if (typeof rhs == "string")
	                return useMergedStyles(lhs, { style: Object.fromEntries(lhs.split(";").map(statement => statement.split(":"))) });
	        }
	        // Logic???
	        return undefined;
	    }
	    // They're both strings, just concatenate them.
	    if (typeof lhs == "string") {
	        return `${lhs};${rhs}`; // TODO: Improve the typing to make this possible
	    }
	    // They're both objects, just merge them.
	    return {
	        ...(lhs?.style ?? {}),
	        ...(rhs?.style ?? {})
	    };
	}

	let log = (str) => { debugger; /* Intentional */ };
	// Generally too complex
	//Pick<h.JSX.HTMLAttributes<E>, keyof h.JSX.HTMLAttributes<E> & (keyof T | keyof U)>; 
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
	        const { class: lhsClass, className: lhsClassName, style: lhsStyle, ref: lhsRef, ...lhs } = lhs2;
	        const { class: rhsClass, className: rhsClassName, style: rhsStyle, ref: rhsRef, ...rhs } = rhs2;
	        let ret = {
	            ...lhs,
	            ref: useMergedRefs()(lhs2, rhs2),
	            style: useMergedStyles(lhs2, rhs2),
	            className: useMergedClasses(lhs2, rhs2)
	        };
	        // Now, do *everything* else
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
	            }
	            else {
	                // Uh...we're here because one of them's null, right?
	                if (lhsValue == null && rhsValue == null) {
	                    if (rhsValue === null && lhsValue === undefined)
	                        ret[rhsKey] = rhsValue;
	                    else
	                        ret[rhsKey] = lhsValue;
	                }
	                if (lhsValue == null)
	                    ret[rhsKey] = rhsValue;
	                else if (rhsValue == null)
	                    ret[rhsKey] = lhsValue;
	                else if (rhsValue == lhsValue) ;
	                else {
	                    // Ugh.
	                    // No good strategies here, just log it if requested
	                    log?.();
	                    ret[rhsKey] = rhsValue;
	                }
	            }
	        }
	        return ret;
	    };
	}
	function mergeFunctions(lhs, rhs) {
	    if (!lhs)
	        return rhs;
	    if (!rhs)
	        return lhs;
	    return (...args) => {
	        lhs?.(...args);
	        rhs?.(...args);
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
	    // We keep both
	    const [state, setState] = l(initialState);
	    const ref = s(state);
	    // Hijack the normal setter function 
	    // to also set our ref to the new value
	    const set = A$1((value) => {
	        if (typeof value === "function") {
	            let callback = value;
	            setState(prevValue => {
	                let nextValue = callback(prevValue);
	                ref.current = nextValue;
	                return nextValue;
	            });
	        }
	        else {
	            ref.current = value;
	            setState(value);
	        }
	    }, []);
	    const get = () => { return ref.current; };
	    console.assert(ref.current === state);
	    return [state, set, get];
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
	function useRefElement() {
	    // Let us store the actual (reference to) the element we capture
	    const [element, setElement, getElement] = useState(null);
	    // Create a RefCallback that's fired when mounted 
	    // and that notifies us of our element when we have it
	    const myRef = A$1((e) => {
	        if (e)
	            setElement(() => e);
	    }, []);
	    const useRefElementProps = A$1((props) => useMergedProps()({ ref: myRef }, props), []);
	    // Return both the element and the hook that modifies 
	    // the props and allows us to actually find the element
	    return {
	        useRefElementProps,
	        element,
	        getElement
	    };
	}

	function useElementSize({ observeBox } = {}) {
	    const { element, useRefElementProps } = useRefElement();
	    const [size, setSize, getSize] = useState(null);
	    y(() => {
	        if (element) {
	            const handleUpdate = () => {
	                const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
	                setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop });
	            };
	            if (!("ResizeObserver" in window)) {
	                document.addEventListener("resize", handleUpdate, { passive: true });
	                return () => document.removeEventListener("resize", handleUpdate);
	            }
	            else {
	                const observer = new ResizeObserver((entries) => { handleUpdate(); });
	                observer.observe(element, { box: observeBox });
	                return () => observer.disconnect();
	            }
	        }
	    }, [element, observeBox]);
	    return {
	        element,
	        elementSize: size,
	        getElementSize: getSize,
	        useElementSizeProps: useRefElementProps
	    };
	}

	function capitalize(str) {
	    return (str[0].toUpperCase() + str.substr(1));
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
	function useLogicalDirection(element) {
	    const [writingMode, setWritingMode] = l(null);
	    const [direction, setDirection] = l(null);
	    const [textOrientation, setTextOrientation] = l(null);
	    const writingModeRef = s(writingMode);
	    const directionRef = s(direction);
	    const textOrientationRef = s(textOrientation);
	    h(() => { writingModeRef.current = writingMode; }, [writingMode]);
	    h(() => { directionRef.current = direction; }, [direction]);
	    h(() => { textOrientationRef.current = textOrientation; }, [textOrientation]);
	    h(() => {
	        if (element) {
	            const computedStyles = window.getComputedStyle(element);
	            const w = computedStyles.writingMode;
	            const t = computedStyles.textOrientation;
	            const d = computedStyles.direction;
	            setWritingMode(w || "horizontal-tb");
	            setDirection(d || "rtl");
	            setTextOrientation(t || "mixed");
	        }
	    });
	    const getLogicalDirection = A$1(() => {
	        let writingMode = writingModeRef.current;
	        let direction = directionRef.current;
	        let textOrientation = textOrientationRef.current;
	        if (!writingMode || !direction || !textOrientation)
	            return null;
	        if (textOrientation == "upright")
	            direction = "ltr";
	        return {
	            ...WritingModes[writingMode ?? "horizontal-tb"][direction ?? "ltr"]
	        };
	    }, [writingModeRef, directionRef, textOrientationRef]);
	    const convertToLogicalOrientation = A$1((elementOrientation, direction) => {
	        direction ??= getLogicalDirection();
	        if (direction?.inlineOrientation === elementOrientation)
	            return "inline";
	        return "block";
	    }, [getLogicalDirection]);
	    const convertToPhysicalOrientation = A$1((elementOrientation, direction) => {
	        direction ??= getLogicalDirection();
	        if (elementOrientation == "inline") {
	            if (direction?.inlineOrientation == "horizontal")
	                return "horizontal";
	            return "vertical";
	        }
	        else {
	            if (direction?.blockOrientation == "vertical")
	                return "vertical";
	            return "horizontal";
	        }
	    }, [getLogicalDirection]);
	    const convertElementSize = A$1((elementSize, direction) => {
	        direction ??= getLogicalDirection();
	        if (direction) {
	            const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;
	            // Size is relatively simple
	            let clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
	            let clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
	            let offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
	            let offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
	            let scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
	            let scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`];
	            // Position requires us to sometimes use one property (like `left`)
	            // or sometimes two (like `left` + `width`)
	            function getPhysicalLeftTop(dir) { if (dir === "ltr" || dir == "rtl")
	                return "left"; return "top"; }
	            function getPhysicalRightBottom(dir) { if (dir === "rtl")
	                return "width"; if (dir === "btt")
	                return "height"; return null; }
	            const f1 = getPhysicalLeftTop(inlineDirection);
	            const f2 = getPhysicalRightBottom(inlineDirection);
	            const f3 = getPhysicalLeftTop(blockDirection);
	            const f4 = getPhysicalRightBottom(blockDirection);
	            let clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize(f2)}`]);
	            let scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize(f2)}`]);
	            let offsetInlineInset = elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]);
	            let clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
	            let scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
	            let offsetBlockInset = elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]);
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
	                offsetBlockInset,
	            };
	        }
	        return null;
	    }, [getLogicalDirection]);
	    return {
	        getLogicalDirection,
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
	const HorizontalTbRtl = {
	    ...HorizontalTbLtr,
	    inlineDirection: "rtl",
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
	const VerticalRlRtl = {
	    ...VerticalRlLtr,
	    inlineDirection: "btt"
	};
	const SidewaysRlLtr = { ...VerticalRlLtr };
	const SidewaysRlRtl = { ...VerticalRlRtl };
	const VerticalLrLtr = {
	    ...VerticalRlLtr,
	    blockDirection: "ltr",
	};
	const VerticalLrRtl = {
	    ...VerticalRlRtl,
	    blockDirection: "ltr",
	};
	const SidewaysLtLtr = {
	    ...VerticalLrLtr,
	    inlineDirection: "btt",
	    leftRightDirection: "btt",
	    overUnderDirection: "ltr"
	};
	const SidewaysLtRtl = {
	    ...SidewaysLtLtr,
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
	 * Given an input value, returns a constant getter function that can be used
	 * inside of `useEffect` and friends without including it in the dependency array.
	 *
	 * Use with caution, and **do not use the getter in useLayoutEffect!!**
	 * `setState`'s getter does not have this problem, but then you're using your own state
	 * instead of an existing value, which might not always be feasible.
	 *
	 * Weigh your options, and hopefully one of them gets the job done.
	 *
	 * @param value
	 * @returns
	 */
	function useStableGetter(value) {
	    const ref = s(value);
	    _(ref, () => value);
	    return A$1(() => { return ref.current; }, []);
	}

	/**
	 * Alternate useCallback() which always returns the same (wrapped) function reference
	 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
	 *
	 * DO NOT USE THE RESULT IN useLayoutEffect!!
	 *
	 * TODO: Investigate options.diffed if the useLayoutEffect limitation becomes limitlessly limiting.
	 *
	 * Source: https://github.com/facebook/react/issues/14099#issuecomment-659298422
	 */
	function useStableCallback(fn) {
	    const currentCallbackGetter = useStableGetter(fn);
	    return A$1((...args) => {
	        const currentFunc = currentCallbackGetter();
	        if (!currentFunc) {
	            throw new Error('Callback retrieved from useStableCallback() cannot be called from useLayoutEffect().');
	        }
	        return currentFunc(...args);
	    }, []);
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
	    const prevInputs = s(inputs);
	    const effect2 = () => {
	        let changes = [];
	        for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
	            if (prevInputs.current[i] != inputs[i])
	                changes[i] = { from: prevInputs.current[i], to: inputs[i] };
	        }
	        effect(prevInputs.current, changes);
	        prevInputs.current = inputs;
	    };
	    h(effect2, inputs);
	}

	function useTimeout({ timeout, callback, triggerIndex }) {
	    const stableCallback = useStableCallback(callback);
	    const getTimeout = useStableGetter(timeout);
	    const timeoutIsNull = (timeout == null);
	    y(() => {
	        const timeout = getTimeout();
	        console.assert(timeoutIsNull == (timeout == null));
	        if (timeout) {
	            const handle = setTimeout(stableCallback, timeout);
	            return () => clearTimeout(handle);
	        }
	    }, [triggerIndex, timeoutIsNull]);
	}

	function useAnimationFrame({ callback }) {
	    // Get a wrapper around the given callback that's stable
	    const stableCallback = useStableCallback(callback ?? (() => { }));
	    const hasCallback = (callback != null);
	    y(() => {
	        if (hasCallback) {
	            // Get a wrapper around the wrapper around the callback
	            // that also calls `requestAnimationFrame` again.
	            const rafCallback = (ms) => {
	                handle = requestAnimationFrame(rafCallback);
	                stableCallback(ms);
	            };
	            let handle = requestAnimationFrame(rafCallback);
	            return () => cancelAnimationFrame(handle);
	        }
	    }, [hasCallback]);
	}

	// Used instead of undefined in case undefined is a 
	// type that's frequently used in the used use case.
	const NeverSet = Symbol("never-set");
	/**
	 * Returns a value that does not change between renders. The provided getter will only be called once, just in case it's expensive.
	 *
	 * Optionally, the value can depend on a set of arguments that will be passed to the getter.
	 *
	 * Effectively, this is `useMemo`, except it passes its dependencies to the factory function.
	 *
	 * @param getter A function that returns the value you want to use
	 * @param args Optional arguments to pass to the function. The function will only be called again if these change.
	 * @returns
	 */
	function useConstant(getter, ...args) {
	    const [value, setValue] = useState(NeverSet);
	    h(() => { setValue(prev => getter(...args)); }, args);
	    if (value === NeverSet)
	        return getter(...args);
	    return value;
	}

	function useDraggable({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
	    const [dragging, setDragging, getDragging] = useState(false);
	    const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
	    const useDraggableProps = A$1((p) => {
	        const ref = s(null);
	        const { element, useRefElementProps } = useRefElement();
	        const onDragStart = (e) => {
	            //e.preventDefault();
	            setDragging(true);
	            if (e.dataTransfer) {
	                e.dataTransfer.effectAllowed = (effectAllowed ?? "all");
	                if (dragImage)
	                    e.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
	                let entries = Object.entries(data);
	                for (const [mimeType, data] of entries) {
	                    e.dataTransfer.setData(mimeType, data);
	                }
	            }
	        };
	        const onDragEnd = (e) => {
	            e.preventDefault();
	            setDragging(false);
	            if (e.dataTransfer) {
	                if (e.dataTransfer.dropEffect != "none") {
	                    setLastDropEffect(e.dataTransfer.dropEffect);
	                }
	                else {
	                    setLastDropEffect(null);
	                }
	            }
	        };
	        return useMergedProps()(useRefElementProps({
	            draggable: true,
	            onDragStart,
	            onDragEnd,
	            ref
	        }), p);
	    }, [effectAllowed, dragImage, dragImageXOffset, dragImageYOffset, ...Object.entries(data).flat()]);
	    // Return both the element and the hook that modifies 
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

	class DroppableFileError extends Error {
	    fileName;
	    errorType;
	    constructor(fileName, base) {
	        super(base?.message ?? "An unspecified error occurred reading the file.");
	        this.fileName = fileName;
	        this.errorType = base?.name;
	    }
	}
	//MergedProps<UseRefElementPropsReturnType<E, Pick<h.JSX.HTMLAttributes<E>, "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop">>, P>;
	function useDroppable({ effect }) {
	    const [filesForConsideration, setFilesForConsideration] = useState(null);
	    const [stringsForConsideration, setStringsForConsideration] = useState(null);
	    const [droppedFiles, setDroppedFiles] = useState(null);
	    const [droppedStrings, setDroppedStrings] = useState(null);
	    const [dropError, setDropError] = useState(undefined);
	    // All the promises generated from the drop events.
	    // Used to process multiple drop events in succession
	    const dropPromisesRef = s([]);
	    const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
	    const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
	    const { element, useRefElementProps, getElement } = useRefElement();
	    // Any time we add a new promise, if there's no current promise running, we need to start one.
	    // If there is one, then we don't need to do anything, since it runs the same check.
	    y(() => {
	        const currentPromiseIndex = getCurrentPromiseIndex();
	        const promiseCount = getPromiseCount();
	        if (promiseCount > 0) {
	            if ((currentPromiseIndex + 1) < promiseCount) {
	                setCurrentPromiseIndex(i => ++i);
	            }
	        }
	    }, [promiseCount]);
	    // Anytime our current promise changes,
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
	            currentPromise.then((info) => {
	                if (info !== null) {
	                    const { files, strings } = info;
	                    setDroppedFiles(files);
	                    setDroppedStrings(strings);
	                }
	                // Now that we're done, are there more promises in the queue?
	                const currentPromiseIndex = getCurrentPromiseIndex();
	                const promiseCount = getPromiseCount();
	                if ((currentPromiseIndex + 1) < promiseCount) {
	                    // Since this promise has started, more have been added.
	                    // Run this effect again.
	                    setCurrentPromiseIndex(i => ++i);
	                }
	            });
	        }
	    }, [currentPromiseIndex]);
	    const useDroppableProps = (p) => {
	        //const ref = useRef<E>(null);
	        // Handle collecting the current file metadata or MIME types.
	        const onDragEnter = (e) => {
	            e.preventDefault();
	            if (e.dataTransfer) {
	                // Is there a default? I can't find one anywhere.
	                e.dataTransfer.dropEffect = (effect ?? "move");
	                const newMimeTypes = new Set();
	                const newFiles = new Array();
	                for (let item of e.dataTransfer?.items ?? []) {
	                    const { kind, type } = item;
	                    if (kind === "string") {
	                        newMimeTypes.add(type);
	                    }
	                    else if (kind === "file") {
	                        newFiles.push({ type: item.type });
	                    }
	                }
	                setFilesForConsideration(newFiles);
	                setStringsForConsideration(newMimeTypes);
	            }
	        };
	        // Handle resetting the current file metadata or MIME types
	        const onDragLeave = (e) => {
	            e.preventDefault();
	            setFilesForConsideration(null);
	            setStringsForConsideration(null);
	        };
	        // Boilerplate, I guess
	        const onDragOver = (e) => {
	            e.preventDefault();
	        };
	        // Handle getting the drop data asynchronously
	        const onDrop = (e) => {
	            e.preventDefault();
	            setFilesForConsideration(null);
	            setStringsForConsideration(null);
	            let allPromises = new Array();
	            const dropData = {};
	            const dropFile = [];
	            for (let item of e.dataTransfer?.items ?? []) {
	                const { kind, type } = item;
	                if (kind === "string") {
	                    allPromises.push((new Promise((resolve, reject) => item.getAsString(resolve))).then(str => dropData[type] = str));
	                }
	                else if (kind === "file") {
	                    const file = item.getAsFile();
	                    if (file) {
	                        allPromises.push(new Promise((resolve, reject) => {
	                            let reader = new FileReader();
	                            reader.onload = (e) => {
	                                resolve();
	                                const data = reader.result;
	                                dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
	                            };
	                            reader.onerror = (e) => { reject(new DroppableFileError(file.name, reader.error)); };
	                            reader.onabort = (e) => { reject(new DroppableFileError(file.name, reader.error)); };
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
	        return useMergedProps()(useRefElementProps({ onDragEnter, onDragLeave, onDragOver, onDrop }), p);
	    };
	    return {
	        useDroppableProps,
	        filesForConsideration,
	        stringsForConsideration,
	        droppedFiles,
	        droppedStrings,
	        dropError,
	        element,
	        getElement
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
	    const stableHandler = useStableCallback(handler ?? (() => { }));
	    y(() => {
	        target.addEventListener(type, stableHandler, options);
	        return () => target.removeEventListener(type, stableHandler, options);
	    }, [target, type, stableHandler]);
	}

	/**
	 *
	 * There are several different ways that a focus event can happen.  Assume
	 * the following steps happen in order:
	 *
	 * 1. The page loads.
	 *    * Nothing is focused, but `document.activeElement` is `body`.
	 *    * No focus events are fired.
	 * 2. The window is focused, an unfocusable element is clicked, text is selected, etc.
	 *    * The `activeElement` remains as `body`.
	 *    * A `focus`/`focusin` event *MIGHT* be fired for `body`. Depending on
	 *      the browser, this depends on whether the handler was attached to `window` or `document`.
	 *      Probably just best to not rely on it, or listen to `window` focus events directly.
	 * 3. A focusable element is clicked, etc.
	 *    * The `activeElement` is set to the new element before any event even fires.
	 *    * `focusout` and `blur` are *not* fired on `body`.
	 *    * `focus` and `focusin` are fired on the new element. `relatedTarget` is null.
	 * 4. A focusable element is clicked, etc.
	 *    * **The `activeElement` is set to the `body`** before any event even fires.
	 *    * `blur` and `focusout` are fired on the old element. `relatedTarget` is the new element.
	 *    * The `activeElement` is now set to the new element.
	 *    * `focusin` is fired on the new element. `relatedTarget` is the old element.
	 * 5. An unfocusable element is clicked, text is selected, etc.
	 *    * The `activeElement` is set to `body`.
	 *    * `blur` and `focusout` are fired on the old element. `relatedTarget` is null.
	 *    * `focusin` is *not* fired on `body`.
	 *
	 *
	 * In summary:
	 * 1. Focus events *do* notify us of all changes in focus, but there is no one single comprehensive event that provides us with all available information.
	 * 2. `document.activeElement` *is not* always the same as what's being referenced by a focus event. In particular, it may become `body` at any arbitrary time.
	 * 3. A `blur` without a `focus` can and will occur. This means it is not possible to solely use `focus` to detect all changes.
	 * 4. A `blur` event whose `relatedTarget` is null indicates that there will be no following `focus` event.
	 *
	 *
	 * @param callback
	 * @returns
	 */
	let currentlyFocusedElement = null;
	let lastFocusedElement = null;
	function getLastFocusedElement() {
	    return lastFocusedElement;
	}
	function getCurrentlyFocusedElement() {
	    return currentlyFocusedElement;
	}
	const updaters = new Set();
	function focusout(e) {
	    if (e.relatedTarget == null) {
	        currentlyFocusedElement = null;
	        for (let f of updaters) {
	            f();
	        }
	    }
	}
	function focusin(e) {
	    currentlyFocusedElement = lastFocusedElement = e.target;
	    for (let f of updaters) {
	        f();
	    }
	}
	let windowFocused = true;
	function windowFocus() {
	    windowFocused = true;
	    for (let f of updaters) {
	        f();
	    }
	}
	function windowBlur() {
	    windowFocused = false;
	    for (let f of updaters) {
	        f();
	    }
	}
	function useActiveElement() {
	    // TODO: Is this actually better than using proper state management?
	    const [i, setI] = useState(0);
	    h(() => {
	        const F = () => setI(i => ++i);
	        if (updaters.size === 0) {
	            document.addEventListener("focusin", focusin, { passive: true });
	            document.addEventListener("focusout", focusout, { passive: true });
	            window.addEventListener("focus", windowFocus, { passive: true });
	            window.addEventListener("blur", windowBlur, { passive: true });
	        }
	        updaters.add(F);
	        return () => {
	            updaters.delete(F);
	            if (updaters.size === 0) {
	                document.removeEventListener("focusin", focusin);
	                document.removeEventListener("focusout", focusout);
	                window.removeEventListener("focus", windowFocus);
	                window.removeEventListener("blur", windowBlur);
	            }
	        };
	    }, []);
	    return {
	        activeElement: currentlyFocusedElement,
	        lastActiveElement: lastFocusedElement,
	        getActiveElement: getCurrentlyFocusedElement,
	        getLastActiveElement: getLastFocusedElement,
	        windowFocused
	    };
	}

	function useHasFocus({} = {}) {
	    //const [focusedElement, setFocusedElement, getFocusedElement] = useState<EventTarget | null>(null);
	    //const [focused, setFocused] = useState(false);
	    //const [focusedInner, setFocusedInner] = useState(false);
	    const { element, getElement, useRefElementProps } = useRefElement();
	    const { activeElement, lastActiveElement } = useActiveElement();
	    const useHasFocusProps = A$1((props) => {
	        return useRefElementProps(props);
	    }, []);
	    const focused = d(() => { return element == activeElement; }, [element, activeElement]);
	    const focusedInner = d(() => { return element?.contains(activeElement) ?? false; }, [element, activeElement]);
	    const lastFocused = d(() => { return element == lastActiveElement; }, [element, lastActiveElement]);
	    const lastFocusedInner = d(() => { return element?.contains(lastActiveElement) ?? false; }, [element, lastActiveElement]);
	    return {
	        useHasFocusProps,
	        focusedElement: activeElement,
	        lastFocusedElement: lastActiveElement,
	        focused,
	        focusedInner,
	        lastFocused,
	        lastFocusedInner
	    };
	}

	function useInterval({ interval, callback }) {
	    // Get a wrapper around the given callback that's stable
	    const stableCallback = useStableCallback(callback);
	    const getInterval = useStableGetter(interval);
	    y(() => {
	        let interval = getInterval();
	        let lastDelayUsed = interval;
	        if (interval == null)
	            return;
	        // Get a wrapper around the wrapper around the callback
	        // that clears and resets the interval if it changes.
	        const adjustableCallback = () => {
	            stableCallback();
	            const currentInterval = getInterval();
	            if (currentInterval != lastDelayUsed) {
	                clearInterval(handle);
	                if (currentInterval != null)
	                    handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
	            }
	        };
	        let handle = setInterval(adjustableCallback, interval);
	        return () => clearInterval(handle);
	    }, []);
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
	    return `${prefix ?? "id-"}${random64Bits().map(n => base64(n)).join("")}`;
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
	function useRandomId({ prefix } = {}) {
	    const randomId = useConstant(generateRandomId, prefix);
	    // Whatever ID was most recently used by the actual "id" prop.
	    // Used so that any ID-referencing props don't need to provide the same value.
	    //
	    // TODO: This does mean that on the first render, if just the ID is provided,
	    // there will be a temporary mismatch, but it's corrected before rendering finishes.
	    // Is this okay?
	    const [usedId, setUsedId, getUsedId] = useState(undefined);
	    const useReferencedIdProps = A$1(function useReferencedIdProps(idPropName) {
	        const ret = function ({ [idPropName]: givenId, ...props }) {
	            const usedId2 = (givenId ?? usedId ?? randomId ?? undefined);
	            if (idPropName === "id")
	                setUsedId(usedId2);
	            return useMergedProps()({ [idPropName]: usedId2 }, props);
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
	    const managedChildren = s([]);
	    const indicesByElement = s(new Map());
	    const useManagedChild = A$1((info) => {
	        const { element, getElement, useRefElementProps } = useRefElement();
	        // As soon as the component mounts, notify the parent and request a rerender.
	        useLayoutEffect(([prevElement, prevIndex], changes) => {
	            if (element) {
	                indicesByElement.current.set(element, info.index);
	                if (managedChildren.current[info.index] != undefined) {
	                    console.assert(info.index == undefined, "Two children with the same index were added, which may result in unexpected behavior.");
	                    debugger; // Intentional
	                }
	                setChildUpdateIndex(c => ++c);
	                managedChildren.current[info.index] = { ...info };
	                return () => {
	                    setChildUpdateIndex(c => ++c);
	                    delete managedChildren.current[info.index];
	                    indicesByElement.current.delete(element);
	                };
	            }
	        }, [element, info.index]);
	        // Any time our child props change, make that information available generally.
	        // *Don't re-render*, otherwise we'd be stuck in an
	        // infinite loop every time an anonymous function is passed.
	        // It comes in from the props so the child was already updated by it --
	        // we don't need the parent to re-render every single child any time
	        // "onClick" updates or whatever.  The relevant child already knows,
	        // and that's what matters.
	        useLayoutEffect(() => {
	            if (managedChildren.current[info.index] != undefined)
	                managedChildren.current[info.index] = { ...info };
	        }, [...Object.entries(info).flat()]);
	        return { element, getElement, useManagedChildProps: useRefElementProps };
	    }, []);
	    return {
	        useManagedChild,
	        managedChildren: managedChildren.current,
	        indicesByElement: indicesByElement.current
	    };
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
	 */
	function useRovingTabIndex({ tabbableIndex }) {
	    const { focused, focusedInner, useHasFocusProps } = useHasFocus();
	    const getTabbableIndex = useStableGetter(tabbableIndex);
	    // Keep track of three things related to the currently tabbable element's index:
	    // What it is,
	    // What it was the last time,
	    // Whether, when we render this component and it's changed, to also focus the element that was made tabbable.
	    // For this reason, boolean | null is semantically intentional, if technically unnecessary -- 
	    // true or false imply a change just happened and that tabbableIndex != prevTabbable.current, and null implies no change.
	    //const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(0);
	    const prevTabbable = s(-Infinity);
	    // Call the hook that allows us to collect information from children who provide it
	    const { managedChildren, useManagedChild, indicesByElement } = useChildManager();
	    const childCount = managedChildren.length;
	    // Doesn't do anything, but here because there's a pretty decent chance it might in the future.
	    const useRovingTabIndexProps = A$1((props) => useMergedProps()(useHasFocusProps({}), props), []);
	    const focusOnChange = (focusedInner != false);
	    // Any time the tabbable index changes,
	    // notify the previous child that it's no longer tabbable,
	    // and notify the next child that is allowed to be tabbed to.
	    useLayoutEffect(() => {
	        if (tabbableIndex != prevTabbable.current) {
	            if (managedChildren[tabbableIndex]) {
	                managedChildren[prevTabbable.current]?.setTabbable(false, undefined);
	                managedChildren[tabbableIndex].setTabbable(true, focusOnChange ? "focus" : undefined);
	                prevTabbable.current = tabbableIndex;
	            }
	        }
	    }, [tabbableIndex, focusOnChange]);
	    const focusSelf = A$1(() => {
	        managedChildren[tabbableIndex].setTabbable(true, "focus");
	    }, [tabbableIndex]);
	    const useRovingTabIndexChild = A$1((info) => {
	        const setTabbable = A$1((tabbable, shouldFocus) => {
	            setTabbable2(tabbable);
	            if (tabbable && shouldFocus)
	                setShouldFocus(!!shouldFocus);
	        }, []);
	        let newInfo = {
	            ...info,
	            setTabbable
	        };
	        const { element, getElement, useManagedChildProps } = useManagedChild(newInfo);
	        const [tabbable, setTabbable2] = useState(getTabbableIndex() == info.index);
	        const [shouldFocus, setShouldFocus] = useState(false);
	        function useRovingTabIndexSiblingProps({ tabIndex, ...props }) {
	            if (tabIndex == null) {
	                if (tabbable)
	                    tabIndex = 0;
	                else
	                    tabIndex = -1;
	            }
	            return useMergedProps()({ tabIndex }, props);
	        }
	        function useRovingTabIndexChildProps({ tabIndex, ...props }) {
	            //const { element, useRefElementProps } = useRefElement<ChildElement>();
	            useLayoutEffect(() => {
	                if (element && shouldFocus && "focus" in element) {
	                    requestAnimationFrame(() => {
	                        queueMicrotask(() => {
	                            element.focus();
	                        });
	                    });
	                    setShouldFocus(false);
	                }
	            }, [element, shouldFocus]);
	            if (tabIndex == null) {
	                if (tabbable)
	                    tabIndex = 0;
	                else
	                    tabIndex = -1;
	            }
	            return useMergedProps()(useManagedChildProps({ tabIndex }), props);
	        }
	        return {
	            useRovingTabIndexChildProps,
	            useRovingTabIndexSiblingProps,
	            tabbable
	        };
	    }, [useManagedChild]);
	    return {
	        useRovingTabIndexProps,
	        useRovingTabIndexChild,
	        childCount,
	        managedChildren,
	        indicesByElement,
	        focusSelf
	    };
	}

	/**
	 * When used in tandem with `useRovingTabIndex`, allows control of
	 * the tabbable index with the arrow keys.
	 *
	 * @see useListNavigation, which packages everything up together.
	 */
	function useLinearNavigation({ getIndex, setIndex, managedChildren, navigationDirection }) {
	    navigationDirection ??= "either";
	    const index = getIndex();
	    const childCount = managedChildren.length;
	    // Make sure the tabbable index never escapes the bounds of all available children
	    // TODO: Keep track of the original index and keep it, at least until keyboard navigation.
	    useLayoutEffect(() => {
	        if (index < 0) {
	            setIndex(0);
	        }
	        else if (childCount > 0 && index >= childCount) {
	            setIndex(childCount - 1);
	        }
	    }, [index, childCount]);
	    // These allow us to manipulate what our current tabbable child is.
	    const navigateToIndex = A$1((index) => { setIndex(index < 0 ? (managedChildren.length + index) : index); }, []);
	    const navigateToNext = A$1(() => { setIndex(i => ++i); }, []);
	    const navigateToPrev = A$1(() => { setIndex(i => --i); }, []);
	    const navigateToStart = A$1(() => { navigateToIndex(0); }, [navigateToIndex]);
	    const navigateToEnd = A$1(() => { navigateToIndex(-1); }, [navigateToIndex]);
	    const { useRefElementProps, getElement: getParentElement } = useRefElement();
	    const { convertElementSize, getLogicalDirection } = useLogicalDirection(getParentElement());
	    const useLinearNavigationProps = function ({ ...props }) {
	        return useRefElementProps(props);
	    };
	    const useLinearNavigationChild = A$1(() => {
	        const useLinearNavigationChildProps = (props) => {
	            const onKeyDown = (e) => {
	                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
	                if (e.ctrlKey || e.metaKey)
	                    return;
	                const info = getLogicalDirection();
	                let allowsBlockNavigation = (navigationDirection == "block" || navigationDirection == "either");
	                let allowsInlineNavigation = (navigationDirection == "inline" || navigationDirection == "either");
	                switch (e.key) {
	                    case "ArrowUp": {
	                        const propName = (info?.blockOrientation === "vertical" ? "blockDirection" : "inlineDirection");
	                        const directionAllowed = (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation);
	                        if (directionAllowed) {
	                            if (info?.[propName] === "btt") {
	                                navigateToNext();
	                            }
	                            else {
	                                navigateToPrev();
	                            }
	                            e.preventDefault();
	                            e.stopPropagation();
	                        }
	                        break;
	                    }
	                    case "ArrowDown": {
	                        const propName = (info?.blockOrientation === "vertical" ? "blockDirection" : "inlineDirection");
	                        const directionAllowed = (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation);
	                        if (directionAllowed) {
	                            if (info?.[propName] === "btt") {
	                                navigateToPrev();
	                            }
	                            else {
	                                navigateToNext();
	                            }
	                            e.preventDefault();
	                            e.stopPropagation();
	                        }
	                        break;
	                    }
	                    case "ArrowLeft": {
	                        const propName = (info?.inlineOrientation === "horizontal" ? "inlineDirection" : "blockDirection");
	                        const directionAllowed = (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation);
	                        if (directionAllowed) {
	                            if (info?.[propName] === "rtl") {
	                                navigateToNext();
	                            }
	                            else {
	                                navigateToPrev();
	                            }
	                            e.preventDefault();
	                            e.stopPropagation();
	                        }
	                        break;
	                    }
	                    case "ArrowRight": {
	                        const propName = (info?.inlineOrientation === "horizontal" ? "inlineDirection" : "blockDirection");
	                        const directionAllowed = (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation);
	                        if (directionAllowed) {
	                            if (info?.[propName] === "rtl") {
	                                navigateToPrev();
	                            }
	                            else {
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
	                        navigateToStart();
	                        e.preventDefault();
	                        e.stopPropagation();
	                        break;
	                    case "End":
	                        navigateToEnd();
	                        e.preventDefault();
	                        e.stopPropagation();
	                        break;
	                }
	            };
	            return useMergedProps()({ onKeyDown }, props);
	        };
	        return {
	            useLinearNavigationChildProps
	        };
	    }, []);
	    return {
	        useLinearNavigationProps,
	        useLinearNavigationChild,
	        navigateToIndex,
	        navigateToNext,
	        navigateToPrev,
	        navigateToStart,
	        navigateToEnd,
	    };
	}
	/**
	 * Allows for the selection of a managed child by typing the given text associated with it.
	 *
	 * @see useListNavigation, which packages everything up together.
	 */
	function useTypeaheadNavigation({ collator, getIndex, typeaheadTimeout, setIndex }) {
	    // For typeahead, keep track of what our current "search" string is (if we have one)
	    // and also clear it every 1000 ms since the last time it changed.
	    // Next, keep a mapping of typeahead values to indices for faster searching.
	    // And, for the user's sake, let them know when their typeahead can't match anything anymore
	    const [currentTypeahead, setCurrentTypeahead, getCurrentTypeahead] = useState(null);
	    useTimeout({ timeout: typeaheadTimeout ?? 1000, callback: () => { setCurrentTypeahead(null); setInvalidTypeahead(null); }, triggerIndex: currentTypeahead });
	    const sortedTypeaheadInfo = s([]);
	    const [invalidTypeahead, setInvalidTypeahead] = useState(false);
	    // Handle typeahead for input method editors as well
	    // Essentially, when active, ignore further keys 
	    // because we're waiting for a CompositionEnd event
	    const [imeActive, setImeActive, getImeActive] = useState(false);
	    // Because composition events fire *after* keydown events 
	    // (but within the same task, which, TODO, could be browser-dependent),
	    // we can use this to keep track of which event we're listening for on the first keydown.
	    const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
	    useLayoutEffect(() => {
	        if (nextTypeaheadChar !== null) {
	            setCurrentTypeahead(typeahead => ((typeahead ?? "") + nextTypeaheadChar));
	            setNextTypeaheadChar(null);
	        }
	    }, [nextTypeaheadChar]);
	    const comparator = useStableCallback((lhs, rhs) => {
	        let compare;
	        // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
	        // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
	        let safeLhs = lhs.normalize("NFD");
	        let safeRhs = rhs.text.normalize("NFD").substr(0, safeLhs.length);
	        if (collator)
	            compare = collator.compare(safeLhs, safeRhs);
	        else
	            compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
	        return compare;
	    });
	    // Handle changes in typeahead that cause changes to the tabbable index
	    y(() => {
	        if (currentTypeahead && sortedTypeaheadInfo.current.length) {
	            let sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, comparator);
	            if (sortedTypeaheadIndex < 0) {
	                // The user has typed an entry that doesn't exist in the list
	                // (or more specifically "for which there is no entry that starts with that input")
	                setInvalidTypeahead(true);
	            }
	            else {
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
	                let lowestSortedIndexAll = sortedTypeaheadIndex;
	                // These two are only set for elements that are ahead of us, but the principle's the same otherwise
	                let lowestUnsortedIndexNext = null;
	                let lowestSortedIndexNext = sortedTypeaheadIndex;
	                const updateBestFit = (u) => {
	                    if (lowestUnsortedIndexAll == null || u < lowestUnsortedIndexAll) {
	                        lowestUnsortedIndexAll = u;
	                        lowestSortedIndexAll = i;
	                    }
	                    if ((lowestUnsortedIndexNext == null || u < lowestUnsortedIndexNext) && u > getIndex()) {
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
	                if (lowestUnsortedIndexNext !== null)
	                    setIndex(sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex);
	                else if (lowestUnsortedIndexAll !== null)
	                    setIndex(sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex);
	            }
	        }
	    }, [currentTypeahead]);
	    const useTypeaheadNavigationProps = (p) => p;
	    const useTypeaheadNavigationChild = A$1(({ text, ...i }) => {
	        y(() => {
	            if (text) {
	                // Find where to insert this item.
	                // Because all index values should be unique, the returned sortedIndex
	                // should always refer to a new location (i.e. be negative)                
	                let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, comparator);
	                console.assert(sortedIndex < 0);
	                if (sortedIndex < 0) {
	                    sortedTypeaheadInfo.current.splice(-sortedIndex - 1, 0, { text, unsortedIndex: i.index });
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
	        const useTypeaheadNavigationChildProps = function ({ ...props }) {
	            const { useRefElementProps, element } = useRefElement();
	            const onCompositionStart = (e) => { setImeActive(true); };
	            const onCompositionEnd = (e) => {
	                setNextTypeaheadChar(e.data);
	                setImeActive(false);
	            };
	            const onKeyDown = (e) => {
	                const imeActive = getImeActive();
	                let key = e.key;
	                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
	                if (e.ctrlKey || e.metaKey)
	                    return;
	                if (!imeActive && e.key === "Backspace") {
	                    // Remove the last character in a way that doesn't split UTF-16 surrogates.
	                    setCurrentTypeahead(t => t === null ? null : [...t].reverse().slice(1).reverse().join(""));
	                    e.preventDefault();
	                    e.stopPropagation();
	                    return;
	                }
	                // The key property represents the typed character OR the "named key attribute" of the key pressed.
	                // There's no definite way to tell the difference, but for all intents and purposes
	                // there are no one-character names, and there are no non-ASCII-alpha names.
	                // Thus, any one-character or non-ASCII value for `key` is *almost certainly* a typed character.
	                const isCharacterKey = (key.length === 1 || !/^[A-Za-z]/.test(key));
	                if (isCharacterKey) {
	                    if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) ;
	                    else {
	                        e.preventDefault();
	                        e.stopPropagation();
	                        // Note: Won't be true for the first keydown
	                        // but will be overwritten before useLayoutEffect is called
	                        // to actually apply the change
	                        if (!imeActive)
	                            setNextTypeaheadChar(key);
	                    }
	                }
	            };
	            return useMergedProps()(useRefElementProps({ onKeyDown, onCompositionStart, onCompositionEnd, }), props);
	        };
	        return {
	            useTypeaheadNavigationChildProps
	        };
	    }, []);
	    return {
	        useTypeaheadNavigationChild,
	        useTypeaheadNavigationProps,
	        currentTypeahead,
	        invalidTypeahead,
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
	        var testIndex = (lastIndex + firstIndex) >> 1;
	        var comparisonResult = comparator(wanted, array[testIndex]);
	        if (comparisonResult > 0) {
	            firstIndex = testIndex + 1;
	        }
	        else if (comparisonResult < 0) {
	            lastIndex = testIndex - 1;
	        }
	        else {
	            return testIndex;
	        }
	    }
	    return -firstIndex - 1;
	}

	/**
	 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
	 *
	 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
	 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
	 */
	function useListNavigation({ collator, keyNavigation }) {
	    keyNavigation ??= "either";
	    // Keep track of three things related to the currently tabbable element's index:
	    // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
	    const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(0);
	    const setIndex = A$1((index) => {
	        setTabbableIndex(index);
	    }, []);
	    const { childCount, managedChildren, indicesByElement, useRovingTabIndexProps, useRovingTabIndexChild, focusSelf } = useRovingTabIndex({ tabbableIndex: tabbableIndex });
	    const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild, useTypeaheadNavigationProps } = useTypeaheadNavigation({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
	    const { navigateToEnd, navigateToIndex, navigateToNext, navigateToPrev, navigateToStart, useLinearNavigationChild, useLinearNavigationProps } = useLinearNavigation({ getIndex: getTabbableIndex, setIndex, managedChildren });
	    // Any time the tabbable index changes, notify the previous
	    // and next child as such, and optionally focus that next one.
	    /*useLayoutEffect(([prevTabbableIndex]) => {
	        console.log(`Notifying children of index change from ${prevTabbableIndex} to ${tabbableIndex}`);
	        managedChildren[prevTabbableIndex]?.setTabbable(false);
	        managedChildren[tabbableIndex]?.setTabbable(true)
	    }, [tabbableIndex])*/
	    const useListNavigationProps = function (props) {
	        const p1 = useLinearNavigationProps(props);
	        const p2 = useTypeaheadNavigationProps(p1);
	        let ret = useRovingTabIndexProps(p2);
	        return ret;
	    };
	    const useListNavigationChild = A$1((info) => {
	        const { useTypeaheadNavigationChildProps } = useTypeaheadNavigationChild(info);
	        const { useLinearNavigationChildProps } = useLinearNavigationChild();
	        const { useRovingTabIndexChildProps, useRovingTabIndexSiblingProps, tabbable } = useRovingTabIndexChild(info);
	        const useListNavigationChildProps = function ({ ...props }) {
	            return useMergedProps()(useRovingTabIndexChildProps(useTypeaheadNavigationChildProps(useLinearNavigationChildProps({ onClick: roveToSelf }))), props);
	        };
	        const roveToSelf = A$1(() => { navigateToIndex(info.index); }, []);
	        return {
	            useListNavigationChildProps,
	            useListNavigationSiblingProps: useRovingTabIndexSiblingProps,
	            tabbable,
	            //roveToSelf,
	            //element
	        };
	    }, [useTypeaheadNavigationChild, useLinearNavigationChild, useRovingTabIndexChild, navigateToIndex]);
	    return {
	        useListNavigationProps,
	        useListNavigationChild,
	        currentTypeahead,
	        invalidTypeahead,
	        tabbableIndex,
	        setTabbableIndex,
	        managedChildren,
	        indicesByElement,
	        navigateToIndex,
	        navigateToNext,
	        navigateToPrev,
	        navigateToStart,
	        navigateToEnd,
	        focusSelf
	    };
	}

	/*!
	* tabbable 5.2.0
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
	};

	var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
	  if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) ||
	  /* For a details element with a summary, the summary element gets the focused  */
	  isDetailsWithSummary(node)) {
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
	            this[_restoreInertedSiblings](this[_topElParents]);
	            // Note we don't want to make these properties nullable on the class,
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
	            }
	            // Remove it from the stack, we'll bring it to the top.
	            this.remove(element);
	            this[_topChanged](element);
	            this[_blockingElements].push(element);
	        }
	        remove(element) {
	            const i = this[_blockingElements].indexOf(element);
	            if (i === -1) {
	                return false;
	            }
	            this[_blockingElements].splice(i, 1);
	            // Top changed only if the removed element was the top element.
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
	            const oldParents = this[_topElParents];
	            // No new top, reset old top if any.
	            if (!newTop) {
	                this[_restoreInertedSiblings](oldParents);
	                toKeepInert.clear();
	                this[_topElParents] = [];
	                return;
	            }
	            const newParents = this[_getParents](newTop);
	            // New top is not contained in the main document!
	            if (newParents[newParents.length - 1].parentNode !== document.body) {
	                throw Error('Non-connected element cannot be a blocking element');
	            }
	            // Cast here because we know we'll call _inertSiblings on newParents
	            // below.
	            this[_topElParents] = newParents;
	            const toSkip = this[_getDistributedChildren](newTop);
	            // No previous top element.
	            if (!oldParents.length) {
	                this[_inertSiblings](newParents, toSkip, toKeepInert);
	                return;
	            }
	            let i = oldParents.length - 1;
	            let j = newParents.length - 1;
	            // Find common parent. Index 0 is the element itself (so stop before it).
	            while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
	                i--;
	                j--;
	            }
	            // If up the parents tree there are 2 elements that are siblings, swap
	            // the inerted sibling.
	            if (oldParents[i] !== newParents[j]) {
	                this[_swapInertedSibling](oldParents[i], newParents[j]);
	            }
	            // Restore old parents siblings inertness.
	            i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
	            // Make new parents siblings inert.
	            j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
	        }
	        /**
	         * Swaps inertness between two sibling elements.
	         * Sets the property `inert` over the attribute since the inert spec
	         * doesn't specify if it should be reflected.
	         * https://html.spec.whatwg.org/multipage/interaction.html#inert
	         */
	        [_swapInertedSibling](oldInert, newInert) {
	            const siblingsToRestore = oldInert[_siblingsToRestore];
	            // oldInert is not contained in siblings to restore, so we have to check
	            // if it's inertable and if already inert.
	            if (this[_isInertable](oldInert) && !oldInert.inert) {
	                oldInert.inert = true;
	                siblingsToRestore.add(oldInert);
	            }
	            // If newInert was already between the siblings to restore, it means it is
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
	                    const sibling = children[j];
	                    // Skip the input element, if not inertable or to be skipped.
	                    if (sibling === element || !this[_isInertable](sibling) ||
	                        (toSkip && toSkip.has(sibling))) {
	                        continue;
	                    }
	                    // Should be collected since already inerted.
	                    if (toKeepInert && sibling.inert) {
	                        toKeepInert.add(sibling);
	                    }
	                    else {
	                        sibling.inert = true;
	                        inertedSiblings.add(sibling);
	                    }
	                }
	                // Store the siblings that were inerted.
	                element[_siblingsToRestore] = inertedSiblings;
	                // Observe only immediate children mutations on the parent.
	                const mo = new MutationObserver(this[_handleMutations].bind(this));
	                element[_parentMO] = mo;
	                let parentToObserve = parent;
	                // If we're using the ShadyDOM polyfill, then our parent could be a
	                // shady root, which is an object that acts like a ShadowRoot, but isn't
	                // actually a node in the real DOM. Observe the real DOM parent instead.
	                const maybeShadyRoot = parentToObserve;
	                if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
	                    parentToObserve = maybeShadyRoot.host;
	                }
	                mo.observe(parentToObserve, {
	                    childList: true,
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
	                const idx = target === document.body ?
	                    parents.length :
	                    parents.indexOf(target);
	                const inertedChild = parents[idx - 1];
	                const inertedSiblings = inertedChild[_siblingsToRestore];
	                // To restore.
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
	                }
	                // To inert.
	                for (let i = 0; i < mutation.addedNodes.length; i++) {
	                    const sibling = mutation.addedNodes[i];
	                    if (!this[_isInertable](sibling)) {
	                        continue;
	                    }
	                    if (toKeepInert && sibling.inert) {
	                        toKeepInert.add(sibling);
	                    }
	                    else {
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
	            // Stop to body.
	            while (current && current !== document.body) {
	                // Skip shadow roots.
	                if (current.nodeType === Node.ELEMENT_NODE) {
	                    parents.push(current);
	                }
	                // ShadowDom v1
	                if (current.assignedSlot) {
	                    // Collect slots from deepest slot to top.
	                    while (current = current.assignedSlot) {
	                        parents.push(current);
	                    }
	                    // Continue the search on the top slot.
	                    current = parents.pop();
	                    continue;
	                }
	                current = current.parentNode ||
	                    current.host;
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
	                        flatten: true,
	                    });
	                    for (j = 0; j < nodes.length; j++) {
	                        if (nodes[j].nodeType === Node.ELEMENT_NODE) {
	                            result.add(nodes[j]);
	                        }
	                    }
	                }
	                // No need to search for <content>.
	            }
	            return result;
	        }
	    }
	    document.$blockingElements =
	        new BlockingElementsImpl();
	})();

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	  factory() ;
	}(commonjsGlobal, (function () {
	  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  /**
	   * This work is licensed under the W3C Software and Document License
	   * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
	   */

	  (function () {
	    // Return early if we're not running inside of the browser.
	    if (typeof window === 'undefined') {
	      return;
	    }

	    // Convenience function for converting NodeLists.
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
	        this._managedNodes = new Set();

	        // Make the subtree hidden from assistive technology
	        if (this._rootElement.hasAttribute('aria-hidden')) {
	          /** @type {?string} */
	          this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
	        } else {
	          this._savedAriaHidden = null;
	        }
	        this._rootElement.setAttribute('aria-hidden', 'true');

	        // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
	        this._makeSubtreeUnfocusable(this._rootElement);

	        // Watch for:
	        // - any additions in the subtree: make them unfocusable too
	        // - any removals from the subtree: remove them from this inert root's managed nodes
	        // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
	        //   element, make that node a managed node.
	        this._observer = new MutationObserver(this._onMutation.bind(this));
	        this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
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
	          }, this);

	          // Note we cast the nulls to the ANY type here because:
	          // 1) We want the class properties to be declared as non-null, or else we
	          //    need even more casts throughout this code. All bets are off if an
	          //    instance has been destroyed and a method is called.
	          // 2) We don't want to cast "this", because we want type-aware optimizations
	          //    to know which properties we're setting.
	          this._observer = /** @type {?} */null;
	          this._rootElement = /** @type {?} */null;
	          this._managedNodes = /** @type {?} */null;
	          this._inertManager = /** @type {?} */null;
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
	                root = /** @type {!ShadowRoot} */node;
	                break;
	              }
	              node = node.parentNode;
	            }
	            if (root) {
	              activeElement = root.activeElement;
	            }
	          }
	          if (startNode.contains(activeElement)) {
	            activeElement.blur();
	            // In IE11, if an element is already focused, and then set to tabindex=-1
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
	          var element = /** @type {!Element} */node;

	          // If a descendant inert root becomes un-inert, its descendants will still be inert because of
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
	          var inertSubroot = this._inertManager.getInertRoot(node);

	          // During initialisation this inert root may not have been registered yet,
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
	            var target = /** @type {!Element} */record.target;
	            if (record.type === 'childList') {
	              // Manage added nodes
	              slice.call(record.addedNodes).forEach(function (node) {
	                this._makeSubtreeUnfocusable(node);
	              }, this);

	              // Un-manage removed nodes
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
	        this._destroyed = false;

	        // Save any prior tabindex info and make this node untabbable
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
	            var element = /** @type {!Element} */this._node;
	            if (this._savedTabIndex !== null) {
	              element.setAttribute('tabindex', this._savedTabIndex);
	            } else {
	              element.removeAttribute('tabindex');
	            }

	            // Use `delete` to restore native focus method.
	            if (this._overrodeFocusMethod) {
	              delete element.focus;
	            }
	          }

	          // See note in InertRoot.destructor for why we cast these nulls to ANY.
	          this._node = /** @type {?} */null;
	          this._inertRoots = /** @type {?} */null;
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
	          var element = /** @type {!Element} */this.node;
	          if (matches.call(element, _focusableElementsString)) {
	            if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
	              return;
	            }

	            if (element.hasAttribute('tabindex')) {
	              this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
	            }
	            element.setAttribute('tabindex', '-1');
	            if (element.nodeType === Node.ELEMENT_NODE) {
	              element.focus = function () {};
	              this._overrodeFocusMethod = true;
	            }
	          } else if (element.hasAttribute('tabindex')) {
	            this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
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
	          return (/** @type {!InertNode} */this._destroyed
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
	        this._observer = new MutationObserver(this._watchForInert.bind(this));

	        // Add inert style.
	        addInertStyle(document.head || document.body || document.documentElement);

	        // Wait for document to be loaded.
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
	            this._inertRoots.set(root, inertRoot);
	            // If not contained in the document, it must be in a shadowRoot.
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
	          }, this);

	          // Comment this out to use programmatic API only.
	          this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
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
	                var target = /** @type {!Element} */record.target;
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
	        var element = /** @type {!Element} */node;
	        if (callback) {
	          callback(element);
	        }

	        // Descend into node:
	        // If it has a ShadowRoot, ignore all child elements - these will be picked
	        // up by the <content> or <shadow> elements. Descend straight into the
	        // ShadowRoot.
	        var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
	        if (shadowRoot) {
	          composedTreeWalk(shadowRoot, callback);
	          return;
	        }

	        // If it is a <content> element, descend into distributed elements - these
	        // are elements from outside the shadow root which are rendered inside the
	        // shadow DOM.
	        if (element.localName == 'content') {
	          var content = /** @type {!HTMLContentElement} */element;
	          // Verifies if ShadowDom v0 is supported.
	          var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
	          for (var i = 0; i < distributedNodes.length; i++) {
	            composedTreeWalk(distributedNodes[i], callback);
	          }
	          return;
	        }

	        // If it is a <slot> element, descend into assigned nodes - these
	        // are elements from outside the shadow root which are rendered inside the
	        // shadow DOM.
	        if (element.localName == 'slot') {
	          var slot = /** @type {!HTMLSlotElement} */element;
	          // Verify if ShadowDom v1 is supported.
	          var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
	          for (var _i = 0; _i < _distributedNodes.length; _i++) {
	            composedTreeWalk(_distributedNodes[_i], callback);
	          }
	          return;
	        }
	      }

	      // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
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

	})));
	});

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
	            blockingElements.push(target);
	            return () => {
	                blockingElements.remove(target);
	            };
	        }
	    }, [target]);
	}
	function getTopElement() {
	    return blockingElements.top;
	}

	const elementsToRestoreFocusTo = new Map();
	function useFocusTrap({ trapActive }) {
	    const { element, useRefElementProps, getElement } = useRefElement();
	    const { getLastActiveElement } = useActiveElement();
	    // When the trap becomes active, before we let the blockingElements hook run,
	    // keep track of whatever's currently focused and save it.
	    h(() => {
	        if (trapActive && element) {
	            // Save the currently focused element
	            // to whatever's currently at the top of the stack
	            elementsToRestoreFocusTo.set(getTopElement(), getLastActiveElement() ?? document.body);
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
	                    findFirstFocusable(element)?.focus();
	                    rafHandle = 0;
	                });
	            });
	            return () => {
	                if (rafHandle)
	                    cancelAnimationFrame(rafHandle);
	            };
	        }
	        else if (element) {
	            // Restore the focus to the element
	            // that has returned to the top of the stack
	            let rafHandle = requestAnimationFrame(() => {
	                queueMicrotask(() => {
	                    elementsToRestoreFocusTo.get(getTopElement())?.focus();
	                    rafHandle = 0;
	                });
	            });
	            return () => {
	                if (rafHandle)
	                    cancelAnimationFrame(rafHandle);
	            };
	        }
	    }, [trapActive, element]);
	    const useFocusTrapProps = ((props) => {
	        return useMergedProps()({ "aria-modal": trapActive ? "true" : undefined }, useRefElementProps(props));
	    });
	    return {
	        useFocusTrapProps,
	        element,
	        getElement
	    };
	}
	/**
	 * Returns the first focusable element contained within the given node, or null if none are found.
	 * @param element
	 * @returns
	 */
	function findFirstFocusable(element) {
	    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (node instanceof Element && isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
	    const firstFocusable = treeWalker.firstChild();
	    return firstFocusable;
	}

	const RandomWords$1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
	const RovingChildContext = D(null);
	const DemoUseRovingTabIndex = g(() => {
	    const { useListNavigationChild, useListNavigationProps, currentTypeahead, setTabbableIndex, tabbableIndex } = useListNavigation({});
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
	            v$1("input", { type: "number", value: tabbableIndex, onInput: e => { e.preventDefault(); setTabbableIndex(e.currentTarget.valueAsNumber); } })),
	        v$1("ul", { ...useListNavigationProps({}) },
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
	    const randomWord = useConstant(() => RandomWords$1[index /*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
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

	const EventDetail = Symbol("event-detail");
	function enhanceEvent(e, detail) {
	    let event = e;
	    event[EventDetail] = detail;
	    return event;
	}
	/**
	 * Helper function for letting children know when they are or are not the
	 * current selected/expanded/focused/whatever child.
	 *
	 * Automatically handles when children are mounted & unmounted and such.
	 *
	 * @param activatedIndex What index the current selected (etc.) child is
	 * @param length How many children exist (as managedChildren.length)
	 * @param setFlag A function that probably looks like (i, flag) => managedChildren[i].setOpen(flag)
	 */
	function useChildFlag(activatedIndex, length, setFlag) {
	    // Any time a new activated index is given, 
	    // collapse the old section and expand the new one.
	    const [prevActivatedIndex, setPrevActivatedIndex, getPrevActivatedIndex] = useState(null);
	    const [prevChildCount, setPrevChildCount, getPrevChildCount] = useState(length);
	    h(() => {
	        // Close any new panels that might have mounted (their open prop is null right now if so)
	        for (let i = (getPrevChildCount() ?? 0); i < length; ++i) {
	            setFlag(i, i === activatedIndex);
	        }
	        setPrevChildCount(length);
	        // Collapse the currently activated panel
	        const prevActivatedIndex = getPrevActivatedIndex();
	        if (prevActivatedIndex != null && prevActivatedIndex <= length)
	            setFlag(prevActivatedIndex, false);
	        // Expand the next panel
	        if (activatedIndex != null && activatedIndex <= length) {
	            setFlag(activatedIndex, true);
	            setPrevActivatedIndex(activatedIndex);
	        }
	    }, [activatedIndex, length]);
	}

	let pulse = ("vibrate" in navigator) ? (() => navigator.vibrate(10)) : (() => { });
	function excludes(target, exclude) {
	    if (exclude == "exclude")
	        return true;
	    return !!exclude?.[target];
	}
	/**
	 * Easy way to "polyfill" button-like interactions onto, e.g., a div.
	 *
	 * Adds click, space on keyDown, and enter on keyUp, as well as haptic
	 * feedback via a momentary vibration pulse when there's an onClick handler provided
	 * (this can be disabled app-wide with `setButtonVibrate`).
	 *
	 * In addition, when the CSS `:active` pseudo-class would apply to a normal button
	 * (i.e. when holding the spacebar or during mousedown), `{ "data-pseudo-active": "true" }`
	 * is added to the props.  You can either let it pass through and style it through new CSS,
	 * or inspect the returned props for it and add e.g. an `.active` class for existing CSS
	 *
	 * @param onClick
	 * @param exclude Whether the polyfill should apply (can specify for specific interactions)
	 */
	function useButtonLikeEventHandlers(onClickSync, exclude) {
	    //type E = Ev extends h.JSX.TargetedEvent<infer E, any>? E : EventTarget;
	    const [active, setActive] = useState(false);
	    const onKeyUp = excludes("space", exclude) ? undefined : (e) => {
	        if (e.key == " " && onClickSync) {
	            e.preventDefault();
	            onClickSync(e);
	            setActive(false);
	        }
	    };
	    const onMouseDown = excludes("click", exclude) ? undefined : (e) => {
	        if (e.button === 0)
	            setActive(true);
	    };
	    const onBlur = (e) => {
	        setActive(false);
	    };
	    const onMouseUp = excludes("click", exclude) ? undefined : onBlur;
	    const onMouseOut = excludes("click", exclude) ? undefined : onBlur;
	    const onKeyDown = excludes("space", exclude) && excludes("enter", exclude) ? undefined : (e) => {
	        if (e.key == " " && onClickSync && !excludes("space", exclude)) {
	            // We don't actually activate it on a space keydown
	            // but we do preventDefault to stop the page from scrolling.
	            setActive(true);
	            e.preventDefault();
	        }
	        if (e.key == "Enter" && onClickSync && !excludes("enter", exclude)) {
	            e.preventDefault();
	            onClickSync(e);
	        }
	    };
	    const onClick2 = excludes("click", exclude) ? undefined : ((e) => {
	        if (onClickSync && !excludes("click", exclude)) {
	            pulse();
	            onClickSync(e);
	        }
	    });
	    return (props) => useMergedProps()({ onKeyDown, onKeyUp, onClick: onClick2, onBlur, onMouseDown, onMouseUp, onMouseOut, ...{ "data-pseudo-active": active ? "true" : undefined } }, props);
	}

	function useAriaAccordion({ expandedIndex, setExpandedIndex }) {
	    const [lastFocusedIndex, setLastFocusedIndex, getLastFocusedIndex] = useState(0);
	    const stableSetExpandedIndex = useStableCallback(setExpandedIndex ?? (() => { }));
	    const { managedChildren: managedAccordionSections, useManagedChild: useManagedChildSection } = useChildManager();
	    const { useLinearNavigationProps, useLinearNavigationChild } = useLinearNavigation({ managedChildren: managedAccordionSections, navigationDirection: "block", getIndex: getLastFocusedIndex, setIndex: setLastFocusedIndex });
	    // Any time list management changes the focused index, manually focus the child
	    // TODO: Can this be cut?
	    useLayoutEffect(() => {
	        if (lastFocusedIndex != null && lastFocusedIndex >= 0)
	            managedAccordionSections[lastFocusedIndex]?.focus();
	    }, [lastFocusedIndex]);
	    useChildFlag(expandedIndex, managedAccordionSections.length, (i, open) => managedAccordionSections[i]?.setOpenFromParent(open));
	    const useAriaAccordionSection = A$1((args) => {
	        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
	        const { randomId: bodyRandomId, useRandomIdProps: useBodyRandomIdProps, useReferencedIdProps: useReferencedBodyIdProps } = useRandomId({ prefix: "aria-accordion-section-body-" });
	        const { randomId: headRandomId, useRandomIdProps: useHeadRandomIdProps, useReferencedIdProps: useReferencedHeadIdProps } = useRandomId({ prefix: "aria-accordion-section-header-" });
	        let open = ((args.open ?? openFromParent) ?? null);
	        // TODO: Convert to use useManagedChild so that this hook 
	        // is stable without (directly) depending on the open state.
	        const useAriaAccordionSectionHeader = A$1(function useAriaAccordionSectionHeader({ tag }) {
	            const { useRefElementProps, element } = useRefElement();
	            const focus = A$1(() => { element?.focus(); }, [element]);
	            const { useManagedChildProps } = useManagedChildSection({ index: args.index, open: open, setOpenFromParent, focus });
	            const { useLinearNavigationChildProps } = useLinearNavigationChild();
	            function useAriaAccordionSectionHeaderProps({ ["aria-expanded"]: ariaExpanded, ["aria-disabled"]: ariaDisabled, ...props }) {
	                const onFocus = () => { setLastFocusedIndex(args.index); };
	                let onClick = () => {
	                    if (getOpenFromParent())
	                        stableSetExpandedIndex(null);
	                    else
	                        stableSetExpandedIndex(args.index);
	                };
	                let retA = useMergedProps()({ onClick }, props);
	                let retB = useMergedProps()({ tabIndex: 0 }, useButtonLikeEventHandlers(onClick)(props));
	                let ret3 = useMergedProps()(useHeadRandomIdProps(useReferencedBodyIdProps("aria-controls")({
	                    "aria-expanded": (ariaExpanded ?? (!!open).toString()),
	                    "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
	                    ...useRefElementProps(useManagedChildProps(tag === "button" ? retA : retB))
	                })), { onFocus });
	                return useLinearNavigationChildProps(ret3);
	            }
	            return { useAriaAccordionSectionHeaderProps };
	        }, [open]);
	        const useAriaAccordionSectionBody = A$1(function useAriaAccordionSectionBody() {
	            function useAriaAccordionSectionBodyProps({ role, ...props }) {
	                let ret1 = useReferencedHeadIdProps("aria-labelledby")({ role: role ?? "region", ...props });
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
	            useAriaAccordionSectionBody,
	        };
	    }, [useLinearNavigationChild]);
	    function useAriaAccordionProps(props) {
	        return useLinearNavigationProps(props);
	    }
	    return {
	        useAriaAccordionSection,
	        useAriaAccordionProps
	    };
	}

	/**
	 * Adds event handlers for a modal-like soft-dismiss interaction.
	 *
	 * That is, any clicks or taps outside of the given element,
	 * or any time the Escape key is pressed within the element,
	 * (with various browser oddities regarding clicks on blank or inert areas handled)
	 * the modal will request to close itself.
	 * @param param0
	 * @returns
	 */
	function useModalSoftDismiss({ onClose }) {
	    const { element, useRefElementProps } = useRefElement();
	    function onBackdropClick(e) {
	        // Basically, "was this event fired on the root-most element, or at least an element not contained by the modal?"
	        // Either could be how the browser handles these sorts of "interacting with nothing" events.
	        if (e.target == document.documentElement || !(element && e.target instanceof Element && element instanceof Element && element.contains(e.target))) {
	            onClose("backdrop");
	        }
	    }
	    // Since everything else is inert, we listen for captured clicks on the window
	    // (we don't use onClick since that doesn't fire when clicked on empty/inert areas)
	    // Note: We need a *separate* touch event on mobile Safari, because
	    // it doesn't let click events bubble or be captured from traditionally non-interactive elements,
	    // but touch events work as expected.
	    useGlobalHandler(window, "mousedown", !open ? null : onBackdropClick, { capture: true });
	    useGlobalHandler(window, "touchstart", !open ? null : onBackdropClick, { capture: true });
	    const onKeyDown = (e) => {
	        if (e.key === "Escape") {
	            onClose("escape");
	        }
	    };
	    return { useModalSoftDismissProps: (props) => useMergedProps()(useRefElementProps({ onKeyDown }), props) };
	}
	/**
	 * A generic modal hook, used by modal dialogs, but can also
	 * be used by anything that's modal with a backdrop.
	 * @param param0
	 * @returns
	 */
	function useAriaModal({ open, onClose }) {
	    const [modalDescribedByBody, setModalDescribedByBody] = useState(false);
	    useHideScroll(open);
	    const { id: modalId, useRandomIdProps: useModalIdProps, useReferencedIdProps: useModalReferencingIdProps } = useRandomId({ prefix: "aria-modal-" });
	    const { id: bodyId, useRandomIdProps: useBodyIdProps, useReferencedIdProps: useBodyReferencingIdProps } = useRandomId({ prefix: "aria-modal-body-" });
	    const { id: titleId, useRandomIdProps: useTitleIdProps, useReferencedIdProps: useTitleReferencingIdProps } = useRandomId({ prefix: "aria-modal-title-" });
	    const { useModalSoftDismissProps } = useModalSoftDismiss({ onClose });
	    const useModalBackdrop = A$1(function useModalBackdrop() {
	        function useModalBackdropProps(props) {
	            return useMergedProps()({}, props);
	        }
	        return { useModalBackdropProps };
	    }, []);
	    const useModalProps = function ({ "aria-modal": ariaModal, role, ...p0 }) {
	        const { useFocusTrapProps } = useFocusTrap({ trapActive: open });
	        const p1 = useTitleReferencingIdProps("aria-labelledby")(p0);
	        const p2 = useModalIdProps(p1);
	        const pFinal = useBodyReferencingIdProps("aria-describedby")(p2);
	        return useFocusTrapProps(useMergedProps()(useModalSoftDismissProps({ role: "dialog" }), modalDescribedByBody ? pFinal : p2));
	    };
	    const useModalTitle = A$1(function useModalTitle() {
	        const useModalTitleProps = function (props) {
	            return useTitleIdProps(props);
	        };
	        return { useModalTitleProps };
	    }, []);
	    const useModalBody = A$1(function useModalBody({ descriptive }) {
	        setModalDescribedByBody(descriptive);
	        const useModalBodyProps = function (props) {
	            return useBodyIdProps(props);
	        };
	        return { useModalBodyProps };
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
	    const [scrollbarWidth, setScrollbarWidth, getScrollbarWidth] = useState(null);
	    y(() => {
	        if (hideScroll) {
	            let widthWithScrollBar = document.documentElement.scrollWidth;
	            document.documentElement.classList.add("document-scroll-hidden");
	            document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();
	            let widthWithoutScrollBar = document.documentElement.scrollWidth;
	            let scrollbarWidth = (widthWithoutScrollBar - widthWithScrollBar);
	            // Failsafe -- if this measuring trick does something unexpected, just ignore it
	            if (scrollbarWidth > 80)
	                scrollbarWidth = 0;
	            document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
	            setScrollbarWidth(scrollbarWidth);
	            return () => {
	                document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();
	                if (document.documentElement.dataset["scrollHiders"] == "0") {
	                    document.documentElement.removeAttribute("data-scroll-hiders");
	                    document.documentElement.classList.remove("document-scroll-hidden");
	                }
	            };
	        }
	    }, [hideScroll]);
	    return { scrollbarWidth, getScrollbarWidth };
	}

	function useAriaDialog({ open, onClose }) {
	    // TODO: Differences between dialog and modal go here, presumably
	    const { useModalBackdrop, useModalBody, useModalProps, useModalTitle } = useAriaModal({ open, onClose });
	    return {
	        useDialogProps: useModalProps,
	        useDialogTitle: useModalTitle,
	        useDialogBody: useModalBody,
	        useDialogBackdrop: useModalBackdrop
	    };
	}

	/**
	 * Adds an ID and "aria-labelledby" for two elements, an "input" element and a "label" element.
	 *
	 * Returns the `useReferencedIdProps` hooks if you need to also add other ID-referencing attributes, like `for`
	 *
	 * @see useInputLabel
	 */
	function useGenericLabel({ labelPrefix, inputPrefix, backupText } = { labelPrefix: "label-", inputPrefix: "input-" }) {
	    const { element: labelElement, getElement: getLabelElement, useRefElementProps: useLabelRefElementProps } = useRefElement();
	    const { element: inputElement, getElement: getInputElement, useRefElementProps: useInputRefElementProps } = useRefElement();
	    const { useRandomIdProps: useLabelRandomIdProps, id: labelId, randomId: labelRandomId, useReferencedIdProps: useReferencedLabelIdProps } = useRandomId({ prefix: labelPrefix });
	    const { useRandomIdProps: useInputRandomIdProps, id: inputId, randomId: inputRandomId, useReferencedIdProps: useReferencedInputIdProps } = useRandomId({ prefix: inputPrefix });
	    const labelHasMounted = !!(labelElement);
	    const useGenericLabelLabel = A$1(function useGenericLabelLabel() {
	        return {
	            useGenericLabelLabelProps: (props) => { return useLabelRandomIdProps(useLabelRefElementProps(props)); }
	        };
	    }, []);
	    const useGenericLabelInput = A$1(function useGenericLabelInput() {
	        return {
	            useGenericLabelInputProps: ({ "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, ...props }) => {
	                return (useInputRandomIdProps(useReferencedLabelIdProps("aria-labelledby")(useInputRefElementProps(useMergedProps()({ "aria-label": (!labelHasMounted ? backupText : ariaLabel) ?? ariaLabel }, props)))));
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
	        getInputElement,
	    };
	}
	/**
	 * Handles the attributes `id`, `for`, and `aria-labelledby` for to related elements.
	 *
	 * It's assumed that the label is an `HTMLLabelElement`, and the input is something for which
	 * the `for` attribute can reference.
	 *
	 */
	function useInputLabel({ labelPrefix, inputPrefix } = { labelPrefix: "label-", inputPrefix: "input-" }) {
	    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps, inputId, labelId, inputElement, getInputElement, labelElement, getLabelElement } = useGenericLabel({ labelPrefix, inputPrefix });
	    const useInputLabelLabel = A$1(function useInputLabelLabel({ tag }) {
	        const { useGenericLabelLabelProps } = useGenericLabelLabel();
	        return {
	            useInputLabelLabelProps(props) {
	                const withFor = useReferencedInputIdProps("for")(props);
	                const withoutFor = props;
	                return useGenericLabelLabelProps(tag == "label" ? withFor : withoutFor);
	            }
	        };
	    }, [useGenericLabelInput]);
	    const useInputLabelInput = A$1(function useInputLabelInput() {
	        const { useGenericLabelInputProps } = useGenericLabelInput();
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
	/**
	 * Handles label type (wrapping or separate) for checkboxes, radios, switches, etc.
	 * @param param0
	 * @returns
	 */
	function useCheckboxLike({ disabled, labelPosition, onInput, role }) {
	    const stableOnInput = useStableCallback((e) => { e.preventDefault(); onInput?.(e); });
	    const { inputId, labelId, useInputLabelInput: useILInput, useInputLabelLabel: useILLabel, getLabelElement, getInputElement } = useInputLabel({ labelPrefix: "aria-checkbox-label-", inputPrefix: "aria-checkbox-input-" });
	    const useCheckboxLikeInputElement = A$1(function useCheckboxInputElement({ tag }) {
	        const { useInputLabelInputProps: useILInputProps } = useILInput();
	        const { element, useRefElementProps } = useRefElement();
	        return { inputElement: element, useCheckboxLikeInputElementProps };
	        function useCheckboxLikeInputElementProps({ ...p0 }) {
	            let props = useButtonLikeEventHandlers(stableOnInput, disabled ? "exclude" : tag != "input" || labelPosition == "wrapping" ? undefined : "exclude")({});
	            if (tag == "input" && labelPosition == "separate") {
	                if (!disabled) {
	                    if (role != "radio")
	                        props.onInput = stableOnInput;
	                    else {
	                        // For some reason, Chrome won't fire onInput events for radio buttons that are tabIndex=-1??
	                        // Needs investigating, but onInput works fine in Firefox
	                        // TODO
	                        props.onClick = stableOnInput;
	                    }
	                }
	            }
	            props = useRefElementProps(useILInputProps(props));
	            if (labelPosition == "wrapping") {
	                // Because the wrapped label handles all interactions,
	                // we need to make sure this element can't be interacted with
	                // even if it's an input element.
	                props.inert = true;
	                props.tabIndex = -1;
	                props.onFocus = e => getLabelElement().focus();
	            }
	            else {
	                if (tag != "input") {
	                    props.role = role;
	                    props.tabIndex = 0;
	                }
	                props["aria-disabled"] = disabled.toString();
	            }
	            return useMergedProps()(p0, props);
	        }
	    }, [useILInput, role, labelPosition, disabled]);
	    const useCheckboxLikeLabelElement = A$1(function useCheckboxLabelElement({ tag }) {
	        const { useInputLabelLabelProps: useILLabelProps } = useILLabel({ tag });
	        function useCheckboxLikeLabelElementProps({ ...p0 }) {
	            let newProps = useButtonLikeEventHandlers(stableOnInput, disabled || (labelPosition == "separate" && tag == "label") ? "exclude" : undefined)({});
	            if (labelPosition == "wrapping") {
	                newProps.tabIndex = 0;
	                newProps.role = role;
	                newProps["aria-disabled"] = disabled.toString();
	            }
	            return useMergedProps()(newProps, useILLabelProps(p0));
	        }
	        return { useCheckboxLikeLabelElementProps };
	    }, [useILLabel, role, labelPosition]);
	    return {
	        useCheckboxLikeInputElement,
	        useCheckboxLikeLabelElement,
	        getLabelElement,
	        getInputElement
	    };
	}

	function useAriaCheckbox({ labelPosition, checked, onInput, disabled }) {
	    const onInputEnhanced = (e) => onInput?.(enhanceEvent(e, { checked: !checked }));
	    const { getInputElement, getLabelElement, useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike({ labelPosition, role: "checkbox", disabled, onInput: onInputEnhanced });
	    const useCheckboxInputElement = A$1(function useCheckboxInputElement({ tag }) {
	        const { inputElement, useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement({ tag });
	        const isMixed = (checked == "mixed");
	        h(() => {
	            if (inputElement) {
	                if (tag === "input") {
	                    inputElement.indeterminate = isMixed;
	                }
	            }
	        }, [inputElement, isMixed, tag]);
	        return { useCheckboxInputElementProps };
	        function useCheckboxInputElementProps({ ...p0 }) {
	            let props = useCheckboxLikeInputElementProps(p0);
	            props.checked ??= !!checked;
	            if (labelPosition == "separate") {
	                props["aria-checked"] = checked.toString();
	                if (tag != "input")
	                    props.tabIndex = 0;
	            }
	            if (tag == "input")
	                props.type = "checkbox";
	            return props;
	        }
	    }, [checked, labelPosition, disabled]);
	    const useCheckboxLabelElement = A$1(function useCheckboxLabelElement({ tag }) {
	        const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement({ tag });
	        function useCheckboxLabelElementProps({ ...props }) {
	            if (labelPosition == "wrapping") {
	                props["aria-checked"] = checked.toString();
	                if (tag != "input")
	                    props.tabIndex = 0;
	            }
	            return useCheckboxLikeLabelElementProps(props);
	        }
	        return { useCheckboxLabelElementProps };
	    }, [useCheckboxLikeLabelElement, disabled, labelPosition]);
	    return {
	        useCheckboxInputElement,
	        useCheckboxLabelElement
	    };
	}

	/**
	 * Wrap the native `useEffect` to add arguments
	 * that allow accessing the previous value as the first argument,
	 * as well as the changes that caused the hook to be called as the second argument.
	 *
	 * @param effect
	 * @param inputs
	 */
	function useEffect(effect, inputs) {
	    const prevInputs = s(inputs);
	    const effect2 = () => {
	        let changes = [];
	        for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
	            if (prevInputs.current[i] != inputs[i])
	                changes[i] = { from: prevInputs.current[i], to: inputs[i] };
	        }
	        effect(prevInputs.current, changes);
	        prevInputs.current = inputs;
	    };
	    y(effect2, inputs);
	}

	/**
	 * Refers to three different types of elements:
	 *
	 * 1. The parent checkbox, that represents the state of all the child checkboxes.
	 * 2. The child container, that is probably a <div> element that contains all the child checkboxes.
	 * 3. The child checkboxes.
	 *
	 * @param param0
	 * @returns
	 */
	function useCheckboxGroup({ collator, keyNavigation }) {
	    const { managedChildren, useListNavigationChild, useListNavigationProps } = useListNavigation({ collator, keyNavigation });
	    //const [uncheckedCount, setUnheckedCount] = useState(0);
	    const [checkedCount, setCheckedCount] = useState(0);
	    const checkedIndices = s(new Set());
	    const [selfIsChecked, setSelfIsChecked, getSelfIsChecked] = useState(false);
	    // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
	    // Otherwise, it's null when the last input was from a child checkbox. 
	    const savedCheckedValues = s(null);
	    const onCheckboxGroupInput = A$1((e) => {
	        // The first time we start interacting with the parent checkbox,
	        // save the current child states
	        if (savedCheckedValues.current == null) {
	            savedCheckedValues.current = new Map();
	            for (let child of managedChildren) {
	                savedCheckedValues.current.set(child.index, child.getChecked());
	            }
	        }
	        const selfIsChecked = getSelfIsChecked();
	        if (selfIsChecked === true) {
	            for (let child of managedChildren) {
	                child.setChecked(false);
	            }
	        }
	        else if (selfIsChecked === "mixed") {
	            for (let child of managedChildren) {
	                child.setChecked(true);
	            }
	        }
	        else {
	            for (let child of managedChildren) {
	                child.setChecked(savedCheckedValues.current.get(child.index) ?? false);
	            }
	        }
	    }, []);
	    // Keep track of all child IDs, and any time any of them change, 
	    // generate a new string with all of them concatenated together
	    // (but only once per render);
	    const allIds = s(new Set());
	    const [ariaControls, setAriaControls] = useState("");
	    const [updateIndex, setIdUpdateIndex] = useState(0);
	    const notifyChecked = A$1((index, checked) => {
	        if (checked === true) {
	            if (!checkedIndices.current.has(index)) {
	                setCheckedCount(c => (c + 1));
	                checkedIndices.current.add(index);
	            }
	        }
	        else {
	            if (checkedIndices.current.has(index)) {
	                setCheckedCount(c => (c - 1));
	                checkedIndices.current.delete(index);
	            }
	        }
	    }, [setCheckedCount, checkedIndices]);
	    useEffect(() => {
	        let percentage = checkedCount / managedChildren.length;
	        setSelfIsChecked(percentage <= 0 ? false : percentage >= 1 ? true : "mixed");
	    }, [setSelfIsChecked, managedChildren.length, checkedCount]);
	    function useCheckboxGroupCheckboxProps(props) {
	        return useMergedProps()({ "aria-controls": ariaControls }, props);
	    }
	    useEffect(() => {
	        setAriaControls(Array.from(allIds.current).join(" "));
	    }, [updateIndex]);
	    const useCheckboxGroupChild = A$1(function ({ index, text, checked, id, setChecked }) {
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
	        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild({ index, text, id, getChecked, setChecked });
	        const onInput = A$1(() => { savedCheckedValues.current = null; }, [savedCheckedValues]);
	        return {
	            tabbable,
	            useCheckboxGroupChildProps: (props) => useMergedProps()({ onInput }, useListNavigationChildProps(props))
	        };
	    }, [notifyChecked, useListNavigationChild]);
	    return { useCheckboxGroupChild, useCheckboxGroupCheckboxProps, useCheckboxChildrenContainerProps: useListNavigationProps, selfIsChecked, percentChecked: (checkedCount / managedChildren.length), onCheckboxGroupInput };
	}

	function useAriaListboxSingle({ selectedIndex, onSelect, selectionMode, ...args }) {
	    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps, inputElement } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" });
	    const { useListNavigationChild, useListNavigationProps, navigateToIndex, managedChildren, setTabbableIndex, ...listRest } = useListNavigation(args);
	    useStableCallback(onSelect);
	    const { useGenericLabelInputProps } = useGenericLabelInput();
	    /*useLayoutEffect(([prevSelectedIndex]) => {
	        navigateToIndex(selectedIndex);
	        managedChildren[prevSelectedIndex]?.setSelected(false);
	        managedChildren[selectedIndex]?.setSelected(true);
	    }, [selectedIndex, managedChildren.length]);*/
	    useChildFlag(selectedIndex, managedChildren.length, (i, selected) => managedChildren[i]?.setSelected(selected));
	    useLayoutEffect(([]) => {
	        navigateToIndex(selectedIndex);
	    }, [selectedIndex, managedChildren.length]);
	    const childCount = managedChildren.length;
	    const { lastActiveElement } = useActiveElement();
	    let anyRadiosFocused = (!!inputElement?.contains(lastActiveElement));
	    y(() => {
	        if (!anyRadiosFocused)
	            setTabbableIndex(selectedIndex);
	    }, [anyRadiosFocused, selectedIndex, setTabbableIndex]);
	    //const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: (e: Event) => indicesByElement.get(e.target!) ?? -1 });
	    //const onSelect = getSyncHandler(asyncInfo.pending ? null : asyncOnSelect);
	    const useListboxSingleItem = A$1((info) => {
	        const [selected, setSelected, getSelected] = useState(false);
	        const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ setSelected, ...info });
	        const { element, useRefElementProps } = useRefElement();
	        const index = info.index;
	        y(() => {
	            if (element && tabbable && selectionMode == "focus") {
	                onSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
	            }
	        }, [element, tabbable, selectionMode, index]);
	        return { useListboxSingleItemProps, tabbable, selected, getSelected };
	        function useListboxSingleItemProps(props) {
	            const newProps = useButtonLikeEventHandlers((e) => {
	                navigateToIndex(info.index);
	                if (element)
	                    onSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
	                e.preventDefault();
	            })({});
	            props.role = "option";
	            props["aria-setsize"] = (childCount).toString();
	            props["aria-posinset"] = (info.index + 1).toString();
	            props["aria-selected"] = selected.toString();
	            return useListNavigationChildProps(useMergedProps()(newProps, useRefElementProps(props)));
	        }
	    }, [useListNavigationChild, selectionMode, childCount]);
	    const useListboxSingleLabel = A$1(function useListboxSingleLabel() {
	        function useListboxSingleLabelProps(props) {
	            const { useGenericLabelLabelProps } = useGenericLabelLabel();
	            useGenericLabelLabelProps(props);
	        }
	        return { useListboxSingleLabelProps };
	    }, [useGenericLabelLabel]);
	    return { useListboxSingleItem, useListboxSingleProps, useListboxSingleLabel, ...listRest };
	    function useListboxSingleProps(props) {
	        props.role = "listbox";
	        return useListNavigationProps(useGenericLabelInputProps(props));
	    }
	}
	function useAriaListboxMulti({ ...args }) {
	    const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" });
	    const { useListNavigationChild, useListNavigationProps, navigateToIndex, managedChildren, currentTypeahead, ...listRest } = useListNavigation(args);
	    const { useGenericLabelInputProps } = useGenericLabelInput();
	    const childCount = managedChildren.length;
	    const [shiftHeld, setShiftHeld, getShiftHeld] = useState(false);
	    const typeaheadInProgress = (!!currentTypeahead);
	    y(() => {
	        for (let i = 0; i < childCount; ++i) {
	            managedChildren[i].setTypeaheadInProgress(typeaheadInProgress);
	        }
	    }, [typeaheadInProgress, childCount]);
	    const useListboxMultiItem = A$1((info) => {
	        const selected = info.selected;
	        //const onSelectAsync = info.onSelect;
	        const [typeaheadInProgress, setTypeaheadInProgress] = useState(false);
	        const getSelected = useStableGetter(selected);
	        const stableOnSelect = useStableCallback(info.onSelect);
	        const { element, useRefElementProps } = useRefElement();
	        //const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: e => !selected });
	        //const onSelect = getSyncHandler(asyncInfo.pending ? null : (onSelectAsync ?? null));
	        const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ ...info, setTypeaheadInProgress });
	        useLayoutEffect(() => {
	            if (element && getShiftHeld()) {
	                stableOnSelect({ target: element, currentTarget: element, [EventDetail]: { selected: true } });
	            }
	        }, [element, tabbable]);
	        return { useListboxMultiItemProps, tabbable };
	        function useListboxMultiItemProps(props) {
	            const newProps = useButtonLikeEventHandlers((e) => {
	                //const event = e as any as ({ selected: boolean } & Pick<h.JSX.TargetedEvent<Element>, "target" | "currentTarget">);
	                navigateToIndex(info.index);
	                //event.selected = !getSelected();
	                stableOnSelect?.({ ...e, [EventDetail]: { selected: !getSelected() } });
	                //stableOnSelect?.(event);
	                e.preventDefault();
	            }, {
	                space: typeaheadInProgress ? "exclude" : undefined
	            })({});
	            props.role = "option";
	            props["aria-setsize"] = (childCount).toString();
	            props["aria-posinset"] = (info.index + 1).toString();
	            props["aria-selected"] = tabbable.toString();
	            return useRefElementProps(useListNavigationChildProps(useMergedProps()(newProps, props)));
	        }
	    }, [useListNavigationChild, childCount, typeaheadInProgress]);
	    const useListboxMultiLabel = A$1(function useListboxMultiLabel() {
	        function useListboxMultiLabelProps(props) {
	            const { useGenericLabelLabelProps } = useGenericLabelLabel();
	            return useGenericLabelLabelProps(props);
	        }
	        return { useListboxMultiLabelProps };
	    }, [useGenericLabelLabel]);
	    return { useListboxMultiItem, useListboxMultiProps, useListboxMultiLabel, currentTypeahead, ...listRest };
	    function useListboxMultiProps(props) {
	        props.role = "listbox";
	        props["aria-multiselectable"] = "true";
	        return useListNavigationProps(useGenericLabelInputProps(useMergedProps()({ onKeyDown, onKeyUp, onBlur }, props)));
	    }
	    function onKeyDown(e) { if (e.key == "Shift")
	        setShiftHeld(true); }
	    function onKeyUp(e) { if (e.key == "Shift")
	        setShiftHeld(false); }
	    function onBlur(e) { setShiftHeld(false); }
	}

	function r() {
	    requestAnimationFrame(r);
	}
	requestAnimationFrame(r);
	function useAriaMenu({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, ...args }) {
	    const [focusTrapActive, setFocusTrapActive] = l(false);
	    let onClose = args.onClose;
	    let onOpen = args.onOpen;
	    let menubar = args.menubar;
	    let open = (menubar ? true : args.open);
	    const stableOnClose = useStableCallback(onClose ?? (() => { }));
	    const { managedChildren, useListNavigationChild, useListNavigationProps, tabbableIndex, focusSelf: focusMenu } = useListNavigation({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout });
	    const { useRandomIdProps: useMenuIdProps, useReferencedIdProps: useMenuIdReferencingProps } = useRandomId({ prefix: "aria-menu-" });
	    const [openerElement, setOpenerElement] = l(null);
	    // TODO: It's awkward that the button focus props are out here where we don't have its type,
	    // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
	    // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
	    // where nothing is focused. 
	    const { focusedInner: menuHasFocus, useHasFocusProps: useMenuHasFocusProps, } = useHasFocus();
	    const { focusedInner: buttonHasFocus, useHasFocusProps: useButtonHasFocusProps } = useHasFocus();
	    const { activeElement, lastActiveElement, windowFocused } = useActiveElement();
	    const { useModalSoftDismissProps } = useModal.useModalSoftDismiss({ onClose: stableOnClose });
	    y(() => {
	        setFocusTrapActive(open);
	    }, [open]);
	    y(() => {
	        if (focusTrapActive)
	            focusMenu();
	        else
	            openerElement?.focus();
	    }, [focusTrapActive]);
	    // Focus management is really finicky, and there's always going to be 
	    // an edge case where nothing's focused for two consecutive frames 
	    // on iOS or whatever, which would immediately close the menu 
	    // any time it's been opened. So any time it *looks* like we should close,
	    // try waiting 100ms. If it's still true then, then yeah, we should close.
	    let shouldClose = (focusTrapActive && windowFocused && !menuHasFocus && !buttonHasFocus);
	    useTimeout({
	        timeout: 100,
	        callback: () => {
	            if (shouldClose) {
	                onClose?.();
	            }
	        },
	        triggerIndex: `${shouldClose}`
	    });
	    // A menu sentinal is a hidden but focusable element that comes at the start or end of the element
	    // that, when activated or focused over, closes the menu.
	    // (if focused within 100ms of the open prop changing, instead of
	    // closing the menu, focusing the sentinel immediately asks the menu to focus itself).
	    // This exists because while mouse users can click out of a menu
	    // and keyboard users can escape to close the menu,
	    // screen readers and other input methods that don't use those two become stuck.
	    const useMenuSentinel = A$1(() => {
	        const [firstSentinelIsActive, setFirstSentinelIsActive] = l(false);
	        useTimeout({ callback: () => { setFirstSentinelIsActive(open); }, timeout: 100, triggerIndex: `${firstSentinelIsActive}` });
	        const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => focusMenu());
	        const onClick = () => stableOnClose();
	        return {
	            useMenuSentinelProps: function (p) {
	                return useMergedProps()({ onFocus, onClick }, p);
	            }
	        };
	    }, [open]);
	    const useMenuButton = A$1(({ tag }) => {
	        const { element, getElement, useRefElementProps } = useRefElement();
	        useLayoutEffect(() => { setOpenerElement(element); }, [element]);
	        return {
	            useMenuButtonProps: function (p) {
	                let props = useRefElementProps(useMergedProps()({ onClick: () => { return open ? onClose?.() : onOpen?.(); } }, useMenuIdReferencingProps("aria-controls")(useButtonHasFocusProps(p))));
	                props["aria-haspopup"] = "menu";
	                props["aria-expanded"] = open ? "true" : undefined;
	                return props;
	            }
	        };
	    }, [open, onClose, onOpen, useMenuIdReferencingProps]);
	    const useMenuSubmenuItem = A$1((args) => {
	        const { useMenuProps, useMenuButton } = useAriaMenu(args);
	        const { useMenuButtonProps } = useMenuButton({ tag: "li" });
	        const { element, getElement, useRefElementProps } = useRefElement();
	        useLayoutEffect(() => { setOpenerElement(element); }, [element]);
	        return {
	            element,
	            getElement,
	            useMenuProps,
	            useMenuSubmenuItemProps: function ({ ...props }) {
	                props.role = "menuitem";
	                return useRefElementProps(useMenuButtonProps(useMenuIdReferencingProps("aria-controls")(props)));
	            }
	        };
	    }, []);
	    const useMenuItem = A$1((args) => {
	        const { useListNavigationChildProps } = useListNavigationChild(args);
	        // const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: _ => void (0) });
	        // const onClick = getSyncHandler(asyncInfo.pending ? null : (args.onClick ?? null));
	        const onClick = args.onClick;
	        function useMenuItemProps({ ...props }) {
	            props.role = "menuitem";
	            return useMergedProps()({ onClick }, useListNavigationChildProps(props));
	        }
	        return { useMenuItemProps };
	    }, []);
	    const useMenuItemCheckbox = A$1((args) => {
	        //const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: _ => !args.checked });
	        //const onClick = getSyncHandler(asyncInfo.pending ? null : args.onChange);
	        const onClick = (e) => args.onChange(enhanceEvent(e, { checked: !args.checked }));
	        function useMenuItemProps({ ...props }) {
	            props.role = "menuitemcheckbox";
	            return useMergedProps()({ onClick }, props);
	        }
	        return { useMenuItemProps };
	    }, []);
	    function useMenuProps({ ...props }) {
	        props.role = "menu";
	        function onKeyDown(e) {
	            if (e.key == "Escape" && onClose) {
	                onClose();
	            }
	        }
	        return useMenuIdProps(useListNavigationProps(useMenuHasFocusProps(useMergedProps()({ onKeyDown }, useModalSoftDismissProps(props)))));
	    }
	    return {
	        useMenuProps,
	        useMenuButton,
	        useMenuItem,
	        useMenuSentinel,
	        useMenuItemCheckbox,
	        useMenuSubmenuItem,
	        focusMenu
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

	function useAriaTabs({ selectionMode, selectedIndex, onSelect, orientation: logicalOrientation, ...args }) {
	    const { element: listElement, useRefElementProps } = useRefElement();
	    const { getLogicalDirection, convertToPhysicalOrientation } = useLogicalDirection(listElement);
	    const physicalOrientation = convertToPhysicalOrientation(logicalOrientation);
	    useRandomId({ prefix: "aria-tab-list-" });
	    const { useRandomIdProps: useTabLabelIdProps, useReferencedIdProps: useReferencedTabLabelId } = useRandomId({ prefix: "aria-tab-label-" });
	    const { managedChildren: managedTabs, navigateToIndex, useListNavigationChild, useListNavigationProps } = useListNavigation({ ...args, keyNavigation: logicalOrientation });
	    const { managedChildren: managedPanels, useManagedChild: useManagedTabPanel } = useChildManager();
	    useStableCallback(onSelect);
	    const childCount = managedTabs.length;
	    const { useHasFocusProps: useTabListHasFocusProps, focusedInner: tabListFocused } = useHasFocus();
	    useLayoutEffect(() => {
	        for (let child of managedTabs)
	            child.setSelectionMode(selectionMode);
	    }, [selectionMode]);
	    useChildFlag(selectedIndex, managedTabs.length, (i, selected) => managedTabs[i]?.setSelected(selected));
	    useChildFlag(selectedIndex, managedPanels.length, (i, visible) => managedPanels[i]?.setVisible(visible));
	    useLayoutEffect(([prevChildCount, prevSelectedIndex]) => {
	        if (selectedIndex != null && selectionMode == "activate") {
	            managedPanels[selectedIndex]?.focus();
	        }
	    }, [childCount, selectedIndex, selectionMode]);
	    const getTabListIsFocused = useStableGetter(tabListFocused);
	    const useTab = A$1(function useTab(info) {
	        //const [selectedTabId, setSelectedTabId, getSelectedTabId] = useState<string | undefined>(undefined);
	        const [selectionModeL, setSelectionModeL] = useState(selectionMode);
	        const { element, useRefElementProps } = useRefElement();
	        const [tabPanelId, setTabPanelId] = useState(undefined);
	        const { useRandomIdProps: useTabIdProps, id: tabId, getId: getTabId } = useRandomId({ prefix: "aria-tab-" });
	        const [selected, setSelected, getSelected] = useState(null);
	        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild({ ...info, setSelected, tabId, setTabPanelId, setSelectionMode: setSelectionModeL });
	        const getIndex = useStableGetter(info.index);
	        // const { getSyncHandler, ...asyncInfo } = useAsyncHandler<Element>()({ capture: (e: unknown) => info.index });
	        // const onSelect = getSyncHandler(asyncInfo.pending? null : (stableAsyncOnSelect ?? null));
	        y(() => {
	            if (tabbable && selectionModeL == "focus") {
	                onSelect({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: getIndex() } });
	            }
	        }, [tabbable, selectionModeL, element]);
	        y(() => { managedPanels[info.index]?.setTabId(tabId); }, [tabId, info.index]);
	        /*useEffect(() => {
	            if (selected)
	                setSelectedTabId(tabId);
	        }, [selected, tabId])*/
	        function useTabProps({ ...props }) {
	            const newProps = useButtonLikeEventHandlers((e) => {
	                navigateToIndex(info.index);
	                onSelect?.(enhanceEvent(e, { selectedIndex: getIndex() }));
	                e.preventDefault();
	            })(props);
	            newProps.role = "tab";
	            newProps["aria-selected"] = (selected ?? false).toString();
	            newProps["aria-controls"] = tabPanelId;
	            return useMergedProps()({}, useTabIdProps(useListNavigationChildProps(useRefElementProps(newProps))));
	        }
	        return { useTabProps, selected };
	    }, []);
	    const useTabPanel = A$1(function usePanel(info) {
	        //const [selectedTabPanelId, setSelectedTabPanelId, getSelectedTabPanelId] = useState<string | undefined>(undefined);
	        const [shouldFocus, setShouldFocus] = useState(false);
	        const [tabId, setTabId] = useState(undefined);
	        const [selected, setSelected, getSelected] = useState(null);
	        const { useRandomIdProps: usePanelIdProps, useReferencedIdProps: useReferencedPanelId, id: tabPanelId } = useRandomId({ prefix: "aria-tab-panel-" });
	        const { element, useManagedChildProps } = useManagedTabPanel({ ...info, tabPanelId, setTabId, focus, setVisible: setSelected });
	        function focus() {
	            if (getTabListIsFocused()) {
	                setShouldFocus(true);
	            }
	        }
	        y(() => {
	            if (shouldFocus) {
	                element?.focus();
	                setShouldFocus(false);
	            }
	        }, [element, shouldFocus]);
	        y(() => { managedTabs[info.index]?.setTabPanelId(tabPanelId); }, [tabPanelId, info.index]);
	        function useTabPanelProps({ ...props }) {
	            props["aria-labelledby"] = managedTabs[info.index]?.tabId;
	            props.role = "tabpanel";
	            props.tabIndex ??= -1; // Make sure the tab panel is tabbable.
	            return useMergedProps()({}, usePanelIdProps(useManagedChildProps(props)));
	        }
	        return { useTabPanelProps, selected };
	    }, []);
	    const useTabsList = A$1(function useTabList() {
	        function useTabListProps({ ...props }) {
	            props.role = "tablist";
	            props["aria-orientation"] = physicalOrientation;
	            return useListNavigationProps(useReferencedTabLabelId("aria-labelledby")(useTabListHasFocusProps(useRefElementProps(props))));
	        }
	        return { useTabListProps };
	    }, [physicalOrientation]);
	    const useTabsLabel = A$1(function useTabsLabel() {
	        function useTabsLabelProps({ ...props }) {
	            return useTabLabelIdProps(props);
	        }
	        return { useTabsLabelProps };
	    }, []);
	    return { useTab, useTabPanel, useTabsList, useTabsLabel };
	    /*const { managedChildren: managedTabs, useListNavigationChild, useListNavigationProps } = useListNavigation<E>(args)
	    const { managedChildren: managedTabPanels, useManagedChild: useManagedTabPanel } = useChildManager();


	    const useAriaTab = useCallback(<E extends Element>(args: UseAriaTabParameters) => {
	        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild<E>(args);
	        function useAriaTabProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
	            return useListNavigationChildProps(props);
	         }

	         return { useAriaTabProps };
	    }, []);

	    const useAriaTabPanel = useCallback(<E extends Element>(args: UseAriaTabPanelParameters) => {
	        const never = useManagedTabPanel(args);

	        function useAriaTabPanelProps<P extends h.JSX.HTMLAttributes<E>>(props: P) {
	            return useMergedProps<E>()({}, props);
	        }

	        return { useAriaTabPanelProps };
	     }, []);

	    function useAriaTabsProps<P extends h.JSX.HTMLAttributes<E>>({...props}: P) {
	        props.role = "tablist";
	        return useListNavigationProps(props);
	    }


	    return {
	        useAriaTabsProps,
	        useAriaTab,
	        useAriaTabPanel
	    }*/
	}

	function useAriaTooltip({ mouseoverDelay }) {
	    mouseoverDelay ??= 400;
	    const [open, setOpen, getOpen] = useState(false);
	    const [hasAnyMouseover, setHasAnyMouseover] = useState(false);
	    //const [mouseoverIsValid, setMouseoverIsValid] = useState(false);
	    const { useRandomIdProps: useTooltipIdProps, useReferencedIdProps: useTooltipIdReferencingProps } = useRandomId({ prefix: "aria-tooltip-" });
	    const { focusedInner: triggerFocused, useHasFocusProps } = useHasFocus();
	    const [triggerHasMouseover, setTriggerHasMouseover] = useState(false);
	    const [tooltipHasMouseover, setTooltipHasMouseover] = useState(false);
	    useTimeout({
	        timeout: mouseoverDelay,
	        triggerIndex: (+triggerHasMouseover + +tooltipHasMouseover),
	        callback: () => {
	            if (triggerHasMouseover || tooltipHasMouseover)
	                setHasAnyMouseover(true);
	        }
	    });
	    useTimeout({
	        timeout: 50,
	        triggerIndex: (+triggerHasMouseover + +tooltipHasMouseover),
	        callback: () => {
	            if (!triggerHasMouseover && !tooltipHasMouseover)
	                setHasAnyMouseover(false);
	        }
	    });
	    y(() => {
	        setOpen(hasAnyMouseover || triggerFocused);
	    }, [hasAnyMouseover, triggerFocused]);
	    const useTooltipTrigger = A$1(function useTooltipTrigger() {
	        function onPointerEnter(e) {
	            setTriggerHasMouseover(true);
	        }
	        function onPointerLeave(e) {
	            setTriggerHasMouseover(false);
	        }
	        function useTooltipTriggerProps({ ...props }) {
	            // Note: Though it's important to make sure that focusing activates a tooltip,
	            // it's perfectly reasonable that a child element will be the one that's focused,
	            // not this one, so we don't set tabIndex=0
	            return useTooltipIdReferencingProps("aria-describedby")(useMergedProps()({ onPointerEnter, onPointerLeave }, useHasFocusProps(props)));
	        }
	        return { useTooltipTriggerProps };
	    }, [useTooltipIdReferencingProps]);
	    const useTooltip = A$1(function useTooltip() {
	        function onPointerEnter(e) {
	            setTooltipHasMouseover(true);
	        }
	        function onPointerLeave(e) {
	            setTooltipHasMouseover(false);
	        }
	        function useTooltipProps({ ...props }) {
	            props.role = "tooltip";
	            return useTooltipIdProps(useMergedProps()({ onPointerEnter, onPointerLeave }, props));
	        }
	        return { useTooltipProps };
	    }, [useTooltipIdProps]);
	    return {
	        useTooltip,
	        useTooltipTrigger,
	        isOpen: open,
	        getIsOpen: getOpen
	    };
	}

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
	const DemoUseElementSizeAnimation = () => {
	    const [height, setHeight] = useState(0);
	    const [angle, setAngle] = useState(0);
	    useAnimationFrame({
	        callback: (ms) => {
	            setAngle(a => a + 0.01);
	            setHeight((Math.sin(angle) + 1) / 0.5);
	        }
	    });
	    const { element, elementSize, useElementSizeProps } = useElementSize();
	    return (v$1("div", { ...useElementSizeProps({ ref: undefined, className: "demo", style: { height: `${(height * 100) + 100}px` } }) },
	        v$1("pre", null, JSON.stringify(elementSize, null, 2))));
	};
	const DemoUseFocusTrap = g(({ depth }) => {
	    const [active, setActive] = useState(false);
	    const { useFocusTrapProps } = useFocusTrap({ trapActive: active });
	    //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });
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
	    const { useAriaAccordionSection, useAriaAccordionProps } = useAriaAccordion({ expandedIndex, setExpandedIndex });
	    return (v$1(UseAccordionSectionContext.Provider, { value: useAriaAccordionSection },
	        v$1("div", { className: "demo" },
	            v$1("div", { ...useAriaAccordionProps({}) },
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
	    const { useCheckboxGroupCheckboxProps, useCheckboxChildrenContainerProps, useCheckboxGroupChild, selfIsChecked, percentChecked, onCheckboxGroupInput } = useCheckboxGroup({});
	    const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ checked: selfIsChecked, disabled: false, labelPosition: "separate", onInput: onCheckboxGroupInput });
	    const { useCheckboxInputElementProps } = useCheckboxInputElement({ tag: "input" });
	    const { useCheckboxLabelElementProps } = useCheckboxLabelElement({ tag: "label" });
	    const [selectedValues, setSelectedValues] = useState(new Set());
	    return v$1("div", { class: "demo" },
	        v$1(CheckboxGroupContext.Provider, { value: useCheckboxGroupChild },
	            v$1("div", null,
	                v$1("input", { ...useCheckboxInputElementProps(useCheckboxGroupCheckboxProps({})) }),
	                v$1("label", { ...useCheckboxLabelElementProps({}) }, "All checked?")),
	            v$1("div", { ...useCheckboxChildrenContainerProps({ style: { "display": "flex", "flexDirection": "column" } }) }, Array.from((function* () {
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
	    const text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""}`;
	    const { randomId } = useRandomId();
	    const useCheckboxGroupChild = F(CheckboxGroupContext);
	    const { tabbable, useCheckboxGroupChildProps } = useCheckboxGroupChild({ index, text, checked, id: randomId, setChecked });
	    const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox({ checked, disabled: false, labelPosition: "separate", onInput: e => setChecked(e[EventDetail].checked) });
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
	    const { useModalBackdropProps } = useDialogBackdrop();
	    const { useModalBodyProps } = useDialogBody({ descriptive: true });
	    const { useModalTitleProps } = useDialogTitle();
	    return (v$1("div", { class: "demo" },
	        v$1("label", null,
	            v$1("input", { type: "checkbox", checked: open, onInput: e => { e.preventDefault(); setOpen(e.currentTarget.checked); } })),
	        v$1("div", { ...useModalBackdropProps({ hidden: !open }) },
	            v$1("div", { ...useDialogProps({}) },
	                v$1("div", { ...useModalTitleProps({}) }, "Dialog Title"),
	                v$1("div", { ...useModalBodyProps({}) },
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
	    const { getSelected, selected, tabbable, useListboxSingleItemProps } = F(ListBoxSingleItemContext)({ index, text: null });
	    return v$1("li", { ...useListboxSingleItemProps({}) },
	        "Number ",
	        index + 1,
	        " option",
	        selected ? "(selected)" : "");
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
	    const text = `Number ${index + 1} option ${selected ? "(selected)" : ""}`;
	    const { tabbable, useListboxMultiItemProps } = F(ListBoxMultiItemContext)({ index, text, onSelect: e => setSelected(e[EventDetail].selected), selected });
	    return v$1("li", { ...useListboxMultiItemProps({}) }, text);
	});
	const DemoMenu = g(() => {
	    const [open, setOpen] = useState(false);
	    const onClose = () => setOpen(false);
	    const onOpen = () => setOpen(true);
	    const { useMenuButton, useMenuItem, useMenuItemCheckbox, useMenuProps, useMenuSubmenuItem } = useAriaMenu({ open, onClose, onOpen });
	    const { useMenuButtonProps } = useMenuButton({ tag: "button" });
	    return (v$1("div", { class: "demo" },
	        v$1(MenuItemContext.Provider, { value: useMenuItem },
	            v$1("button", { ...useMenuButtonProps({}) }, "Open menu"),
	            v$1("ul", { ...useMenuProps({}), hidden: !open },
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
	const DemoFocus = g(() => {
	    const { focused, focusedInner, useHasFocusProps } = useHasFocus();
	    return (v$1("div", { class: "demo" },
	        v$1("h2", null, "useHasFocus"),
	        v$1("div", { ...useHasFocusProps({ style: { border: "1px solid black" }, tabIndex: 0 }) },
	            "Outer ",
	            v$1("div", { tabIndex: 0, style: { border: "1px solid black" } }, "Inner element")),
	        v$1("div", null,
	            v$1("ul", null,
	                v$1("li", null,
	                    "Strictly focused: ",
	                    focused.toString()),
	                v$1("li", null,
	                    "Inner focused: ",
	                    focusedInner.toString())))));
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
	    const { useTabProps } = useTab({ index, text: null });
	    return (v$1(d$1, null,
	        v$1("li", { ...useTabProps({}) },
	            "Tab #",
	            index + 1)));
	});
	const DemoTabPanel = g(({ index }) => {
	    const useTabPanel = F(TabPanelContext);
	    const { useTabPanelProps, selected } = useTabPanel({ index });
	    return (v$1("div", { ...useTabPanelProps({ hidden: !selected }) },
	        v$1("p", null,
	            "Tab panel content #",
	            index + 1,
	            "."),
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
	const Component = () => {
	    return v$1("div", { class: "flex", style: { flexWrap: "wrap" } },
	        v$1(DemoTooltip, null),
	        v$1(DemoTabs, null),
	        v$1(DemoFocus, null),
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
	        v$1(DemoUseElementSizeAnimation, null),
	        v$1("input", null));
	};
	requestAnimationFrame(() => {
	    S$1(v$1(Component, null), document.getElementById("root"));
	});

}(useModal));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGFibGUtY2FsbGJhY2suanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbGF5b3V0LWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS10aW1lb3V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWFuaW1hdGlvbi1mcmFtZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jb25zdGFudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZHJvcHBhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWV2ZW50LWhhbmRsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYWN0aXZlLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtaGFzLWZvY3VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWludGVydmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJhbmRvbS1pZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1jaGlsZC1tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJvdmluZy10YWJpbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxpc3QtbmF2aWdhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWZvY3VzLXRyYXAuanMiLCJkZW1vcy91c2Utcm92aW5nLXRhYi1pbmRleC50c3giLCIuLi9wcm9wcy5qcyIsIi4uL3VzZS1idXR0b24uanMiLCIuLi91c2UtYWNjb3JkaW9uLmpzIiwiLi4vdXNlLW1vZGFsLmpzIiwiLi4vdXNlLWRpYWxvZy5qcyIsIi4uL3VzZS1sYWJlbC5qcyIsIi4uL3VzZS1jaGVja2JveC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lZmZlY3QuanMiLCIuLi91c2UtY2hlY2tib3gtZ3JvdXAuanMiLCIuLi91c2UtbGlzdGJveC5qcyIsIi4uL3VzZS1tZW51LmpzIiwiZGVtb3MvdXNlLWludGVydmFsLnRzeCIsImRlbW9zL3VzZS10aW1lb3V0LnRzeCIsIi4uL3VzZS10YWJzLmpzIiwiLi4vdXNlLXRvb2x0aXAuanMiLCJpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZixlPXt9LGM9W10scz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGEobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gaChuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB2KGwsdSxpKXt2YXIgdCxvLHIsZj17fTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihyIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbcl0mJihmW3JdPWwuZGVmYXVsdFByb3BzW3JdKTtyZXR1cm4geShsLGYsdCxvLG51bGwpfWZ1bmN0aW9uIHkobixpLHQsbyxyKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOm8sX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09cj8rK3U6cn07cmV0dXJuIG51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBwKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBfKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGsobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2sobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ayhuKTpudWxsfWZ1bmN0aW9uIGIobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBiKG4pfX1mdW5jdGlvbiBtKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIWcuX19yKyt8fHIhPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChyPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxvKShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBuO2cuX19yPXQubGVuZ3RoOyluPXQuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdD1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQsbyxyO24uX19kJiYobz0odD0obD1uKS5fX3YpLl9fZSwocj1sLl9fUCkmJih1PVtdLChpPWEoe30sdCkpLl9fdj10Ll9fdisxLGoocix0LGksbC5fX24sdm9pZCAwIT09ci5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W29dOm51bGwsdSxudWxsPT1vP2sodCk6byx0Ll9faCkseih1LHQpLHQuX19lIT1vJiZiKHQpKSl9KX1mdW5jdGlvbiB3KG4sbCx1LGksdCxvLHIsZixzLGEpe3ZhciBoLHYscCxfLGIsbSxnLHc9aSYmaS5fX2t8fGMsQT13Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShfPXUuX19rW2hdPW51bGw9PShfPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIF8/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgX3x8XCJudW1iZXJcIj09dHlwZW9mIF98fFwiYmlnaW50XCI9PXR5cGVvZiBfP3kobnVsbCxfLG51bGwsbnVsbCxfKTpBcnJheS5pc0FycmF5KF8pP3koZCx7Y2hpbGRyZW46X30sbnVsbCxudWxsLG51bGwpOl8uX19iPjA/eShfLnR5cGUsXy5wcm9wcyxfLmtleSxudWxsLF8uX192KTpfKSl7aWYoXy5fXz11LF8uX19iPXUuX19iKzEsbnVsbD09PShwPXdbaF0pfHxwJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl3W2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxBO3YrKyl7aWYoKHA9d1t2XSkmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXt3W3ZdPXZvaWQgMDticmVha31wPW51bGx9aihuLF8scD1wfHxlLHQsbyxyLGYscyxhKSxiPV8uX19lLCh2PV8ucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLF8pLGcucHVzaCh2LF8uX19jfHxiLF8pKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfLnR5cGUmJm51bGwhPV8uX19rJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxhfHxcIm9wdGlvblwiIT09dS50eXBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpOm4udmFsdWU9XCJcIik6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7dmFyIGksdDtmb3IoaT0wO2k8bi5fX2subGVuZ3RoO2krKykodD1uLl9fa1tpXSkmJih0Ll9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnR5cGU/eCh0LGwsdSk6UCh1LHQsdCxuLl9fayx0Ll9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LG8scixmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxvLHIsZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQsbyxyLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPXIpJiYodS5fX2U9ZSx1Ll9faD0hIWMscltyLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LG8scixmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKG89ITApLG51bGwhPXIpZm9yKDtfPHIubGVuZ3RoO18rKylpZigocz1yW19dKSYmKHM9PT1sfHwoZD9zLmxvY2FsTmFtZT09ZDozPT1zLm5vZGVUeXBlKSkpe2w9cyxyW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixmLHI/clswXTppLl9fayYmayhpLDApLGMpLG51bGwhPXIpZm9yKF89ci5sZW5ndGg7Xy0tOyludWxsIT1yW19dJiZoKHJbX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQsbztpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIG8scixmO2wuX18mJmwuX18odSxpKSxyPShvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFvJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxyfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIW8mJnQ/W3RdOnI/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZ0P3Q6cj9yLl9fZTppLmZpcnN0Q2hpbGQsbykseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxvLHIsZj1hKHt9LGwucHJvcHMpO2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxkKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBkKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gQShuLHQpe3JldHVybiBvPTgsZChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gVCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PXZvaWQgMH0sbi5fX2M9ZnVuY3Rpb24odCx1KXt1LnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goZyksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxqKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSxhJiZhKHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciB1PXQuX19jO2lmKHUmJnUuX19IKXRyeXt1Ll9fSC5fXy5mb3JFYWNoKGcpfWNhdGNoKHQpe24uX19lKHQsdS5fX3YpfX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgZix1c2VEZWJ1Z1ZhbHVlIGFzIGN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyB2LEZyYWdtZW50IGFzIGQscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6dih2KG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj92KG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXYobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6dn0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGY9ITA9PT10Ll9faDtyLl9fdSsrfHxmfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKGQsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKGQsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD12KG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24geihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gWigpe31mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1aLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WSxuLmlzRGVmYXVsdFByZXZlbnRlZD0kLG4ubmF0aXZlRXZlbnQ9bn07dmFyIHEsRz17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSj1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2Zvcih2YXIgdSBpbiByPXt9LGUpe3ZhciBvPWVbdV07XCJ2YWx1ZVwiPT09dSYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PW98fChcImRlZmF1bHRWYWx1ZVwiPT09dSYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT91PVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT11JiYhMD09PW8/bz1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdCh1KT91PVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdCh1K3QpJiYhVihlLnR5cGUpP3U9XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KHUpP3U9dS50b0xvd2VyQ2FzZSgpOlAudGVzdCh1KT91PXUucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PW8mJihvPXZvaWQgMCksclt1XT1vKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT12KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT12KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEcuZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsRykpLG4uJCR0eXBlb2Y9aixKJiZKKG4pfTt2YXIgSz1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtLJiZLKG4pLHE9bi5fX2N9O3ZhciBRPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gcS5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxYPVwiMTcuMC4yXCI7ZnVuY3Rpb24gbm4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIHRuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gZW4obil7cmV0dXJuIHRuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gcm4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gdW4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgb249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49ZDtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpmLHVzZURlYnVnVmFsdWU6Yyx2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6eixoeWRyYXRlOkIsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpybixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6bm4sY2xvbmVFbGVtZW50OmVuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OmQsaXNWYWxpZEVsZW1lbnQ6dG4sZmluZERPTU5vZGU6dW4sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmxuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOm9uLFN0cmljdE1vZGU6ZCxTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpRfTtleHBvcnR7WCBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4seiBhcyByZW5kZXIsQiBhcyBoeWRyYXRlLHJuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsbm4gYXMgY3JlYXRlRmFjdG9yeSxlbiBhcyBjbG9uZUVsZW1lbnQsdG4gYXMgaXNWYWxpZEVsZW1lbnQsdW4gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYsbG4gYXMgZmx1c2hTeW5jLG9uIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLGZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxGIGFzIGxhenksUSBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG4vKipcclxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxyXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cclxuICpcclxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcclxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhbGwgY29tYmluZWQgY2xhc3NlcyBmcm9tIGJvdGggYXJndW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcclxuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcclxuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxyXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGxocywgcmhzKSB7XHJcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XHJcbiAgICBjb25zdCBsaHNDbGFzc05hbWUgPSBsaHM/LmNsYXNzTmFtZTtcclxuICAgIGNvbnN0IHJoc0NsYXNzID0gcmhzPy5jbGFzcztcclxuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xyXG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHR5cGV0ZXN0KCkge1xyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXHJcbiAgICBdO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMF0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMl0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbM10uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s0XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNl0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s3XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbOV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1sxMl0uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGNbMTNdO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ29tYmluZXMgdHdvIHJlZnMgaW50byBvbmUuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHRvIGJvdGggdXNlIGl0cyBvd24gcmVmICphbmQqIGZvcndhcmQgYSByZWYgdGhhdCB3YXMgZ2l2ZW4gdG8gaXQuXHJcbiAqIEBwYXJhbSBsaHNcclxuICogQHBhcmFtIHJoc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoc1Byb3BzLCByaHNQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5yZWY7XHJcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcclxuICAgICAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJocztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxocztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xyXG4gICAgICAgICAgICB9LCBbbGhzLCByaHNdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHR5cGV0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcclxuXHJcbiAgICBjb25zdCByZWY6IFJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxyXG4gICAgZnVuY3Rpb24gYWNjZXB0c09wdGlvbmFsUmVmKHJlZjogUmVmPGFueT4gfCB1bmRlZmluZWQpIHsgfVxyXG5cclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZjogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZjogdW5kZWZpbmVkIH0sIHsgcmVmIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcclxuICAgIF0gYXMgY29uc3Q7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNSZWYoY1swXSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcclxuXHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1syXSk7XHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XHJcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1s0XSk7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xyXG4gICAgYWNjZXB0c1JlZihjWzVdKTtcclxuICAgIGFjY2VwdHNSZWYoY1s2XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xyXG4gICAgYWNjZXB0c1JlZihjWzhdKTtcclxufVxyXG4qL1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiLyoqXHJcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxyXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XHJcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cclxuICAgIGlmICghbGhzICYmICFyaHMpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcclxuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXHJcbiAgICAgICAgaWYgKGxocyAmJiAhcmhzKVxyXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgICAgIGlmICghbGhzICYmIHJocylcclxuICAgICAgICAgICAgcmV0dXJuIHJocztcclxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cclxuICAgICAgICBpZiAobGhzICYmIHJocykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBPYmplY3QuZnJvbUVudHJpZXMobGhzLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKSB9LCByaHMpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocyA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IE9iamVjdC5mcm9tRW50cmllcyhsaHMuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMb2dpYz8/P1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxyXG4gICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBgJHtsaHN9OyR7cmhzfWA7IC8vIFRPRE86IEltcHJvdmUgdGhlIHR5cGluZyB0byBtYWtlIHRoaXMgcG9zc2libGVcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLihsaHM/LnN0eWxlID8/IHt9KSxcclxuICAgICAgICAuLi4ocmhzPy5zdHlsZSA/PyB7fSlcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQodSkgeyB9XHJcbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzcyhzdHIpIHsgfVxyXG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxyXG5mdW5jdGlvbiB0eXBldGVzdChwcm9wcykge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7fTtcclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHVuZGVmaW5lZCwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7fSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyhwcm9wcywgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXModW5kZWZpbmVkLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHByb3BzLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlIH0sIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMocHJvcHMsIHsgc3R5bGUgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwgeyBzdHlsZSB9KSxcclxuICAgIF07XHJcbiAgICAvLyBTYW5pdHkgY2hlY2tzXHJcbiAgICBjWzBdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzFdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzJdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzNdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzRdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzVdID09PSB1bmRlZmluZWQ7XHJcbiAgICBjWzZdID09PSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIGJvdGggd2VyZSB1bmRlZmluZWRcclxuICAgIGNbMF0/LmJhY2tncm91bmRDb2xvcjtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXHJcbiAgICBjWzFdPy5iYWNrZ3JvdW5Db2xvcjtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXHJcbiAgICBjWzJdPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiB3YXMgbm90IHByb3ZpZGVkIGFzIGEgcHJvcFxyXG4gICAgY1szXT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgbWF5IGJlIHVuZGVmaW5lZCBkZXBlbmRpbmcgb24gaG93IFAgZXh0ZW5kcyBIVE1MQXR0cmlidXRlc1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbNF0pO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s0XSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiBtYXkgYmUgdW5kZWZpbmVkIGRlcGVuZGluZyBvbiBob3cgUCBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s1XSk7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzVdKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIG1heSBiZSB1bmRlZmluZWQgZGVwZW5kaW5nIG9uIGhvdyBQIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXNcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzZdKTtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbNl0pO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s3XSk7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzddKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogVGhpcyBzaG91bGQgYmUgYWxsb3dlZFxyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbOF0pO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s4XSk7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IFRoaXMgc2hvdWxkIGJlIGFsbG93ZWRcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzldKTtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbOV0pO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1sxMF0pO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1sxMF0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xyXG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgLyogSW50ZW50aW9uYWwgKi8gfTtcclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzIpIHtcclxuICAgIGxvZyA9IGxvZzI7XHJcbn1cclxuLy8gR2VuZXJhbGx5IHRvbyBjb21wbGV4XHJcbi8vUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwga2V5b2YgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4gJiAoa2V5b2YgVCB8IGtleW9mIFUpPjsgXHJcbi8qKlxyXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZW0gYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICpcclxuICogVGhlIGhvb2sgaXMgYXdhcmUgb2YgYW5kIGNhbiBpbnRlbGxpZ2VudGx5IG1lcmdlIGBjbGFzc05hbWVgLCBgY2xhc3NgLCBgc3R5bGVgLCBgcmVmYCwgYW5kIGFsbCBldmVudCBoYW5kbGVycy5cclxuICogQHBhcmFtIGxoczJcclxuICogQHBhcmFtIHJoczJcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobGhzMiwgcmhzMikge1xyXG4gICAgICAgIC8vIEZpcnN0LCBwdXQgaW4gYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gcmVhc29uIGFib3V0XHJcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxyXG4gICAgICAgIGNvbnN0IHsgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xyXG4gICAgICAgIGNvbnN0IHsgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xyXG4gICAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgICAgIC4uLmxocyxcclxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHMyLCByaHMyKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxyXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cclxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xyXG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVZ2guXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcclxuICAgIGlmICghbGhzKVxyXG4gICAgICAgIHJldHVybiByaHM7XHJcbiAgICBpZiAoIXJocylcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGhzPy4oLi4uYXJncyk7XHJcbiAgICAgICAgcmhzPy4oLi4uYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyaWNHZXRUZXN0KCkge1xyXG4gICAgY29uc3QgdDEgPSBudWxsO1xyXG4gICAgY29uc3QgdDIgPSBudWxsO1xyXG4gICAgY29uc3QgdDMgPSBudWxsO1xyXG4gICAgaWYgKHQzLmlkID09IG51bGwpIHtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHQzLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIH1cclxufVxyXG4vKlxyXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcclxuXHJcbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XHJcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xyXG5cclxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcclxuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XHJcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xyXG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcclxuICAgIGNvbnN0IG0zOiBNMSA9IDA7XHJcblxyXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcclxuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXHJcbiAgICBjb25zdCBtNjogTTIgPSAwO1xyXG5cclxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XHJcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcclxuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG5cclxuXHJcbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcclxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcclxuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcclxuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcclxuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcclxuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcclxuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcclxuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcclxuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcclxuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcclxuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcclxuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcclxuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcclxuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcclxuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcclxuXHJcblxyXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xyXG5cclxuXHJcbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XHJcbiovIFxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFNsaWdodGx5IGVuaGFuY2VkIHZlcnNpb24gb2YgYHVzZVN0YXRlYCB0aGF0IGluY2x1ZGVzIGEgZ2V0dGVyIHRoYXQgcmVtYWlucyBjb25zdGFudFxyXG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGVcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcclxuICAgIC8vIFdlIGtlZXAgYm90aFxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZVAoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGF0ZSk7XHJcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXHJcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcclxuICAgIGNvbnN0IHNldCA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0U3RhdGUocHJldlZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0VmFsdWUgPSBjYWxsYmFjayhwcmV2VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBnZXQgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSk7XHJcbiAgICByZXR1cm4gW3N0YXRlLCBzZXQsIGdldF07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXHJcbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXHJcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxyXG4gKlxyXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcclxuICpcclxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50KCkge1xyXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxyXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnQsIGdldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAvLyBDcmVhdGUgYSBSZWZDYWxsYmFjayB0aGF0J3MgZmlyZWQgd2hlbiBtb3VudGVkIFxyXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpXHJcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VSZWZFbGVtZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyByZWY6IG15UmVmIH0sIHByb3BzKSwgW10pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgICAgIGlmIChwMS5zdHlsZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFNpemUoeyBvYnNlcnZlQm94IH0gPSB7fSkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIGNvbnN0IFtzaXplLCBzZXRTaXplLCBnZXRTaXplXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBzZXRTaXplKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCEoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHsgaGFuZGxlVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbZWxlbWVudCwgb2JzZXJ2ZUJveF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGVsZW1lbnRTaXplOiBzaXplLFxyXG4gICAgICAgIGdldEVsZW1lbnRTaXplOiBnZXRTaXplLFxyXG4gICAgICAgIHVzZUVsZW1lbnRTaXplUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wc1xyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWxlbWVudC1zaXplLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XHJcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7XHJcbn1cclxuLyoqXHJcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cclxuICpcclxuICogQ2VydGFpbiBDU1MgcHJvcGVydGllcywgbGlrZSBgYmxvY2stc2l6ZWAsIHJlc3BlY3QgdGhlIGN1cnJlbnQgd3JpdGluZyBtb2RlIGFuZCB0ZXh0IGRpcmVjdGlvbi5cclxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXHJcbiAqXHJcbiAqIFRoaXMgaXMgcHJvdmlkZWQgc28gdGhhdCBDU1MgcHJvcGVydGllcyBjYW4gY29uc2lzdGVudGx5IHVzZSB0aG9zZSBsb2dpY2FsIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMvI2xvZ2ljYWwtdG8tcGh5c2ljYWxcclxuICpcclxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XHJcbiAqICogYGdldExvZ2ljYWxEaXJlY3Rpb25gOiByZXRyaWV2ZXMgYSBgTG9naWNhbERpcmVjdGlvbkluZm9gIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gKEZ1bmN0aW9uIGlzIGNvbnN0YW50IGJldHdlZW4gcmVuZGVycylcclxuICogKiBgY29udmVydEVsZW1lbnRTaXplYDogV2hlbiB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHVzZUVsZW1lbnRTaXplYCwgYWxsb3dzIHlvdSB0byByZXRyaWV2ZSB0aGUgbG9naWNhbCBzaXplIG9mIGFuIGVsZW1lbnQgaW5zdGVhZCBvZiB0aGUgcGh5c2ljYWwgc2l6ZS5cclxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXHJcbiAqICogYGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25gOiAgQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImlubGluZVwiIG9yIFwiYmxvY2tcIiB0byBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbihlbGVtZW50KSB7XHJcbiAgICBjb25zdCBbd3JpdGluZ01vZGUsIHNldFdyaXRpbmdNb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3RleHRPcmllbnRhdGlvbiwgc2V0VGV4dE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgd3JpdGluZ01vZGVSZWYgPSB1c2VSZWYod3JpdGluZ01vZGUpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uUmVmID0gdXNlUmVmKGRpcmVjdGlvbik7XHJcbiAgICBjb25zdCB0ZXh0T3JpZW50YXRpb25SZWYgPSB1c2VSZWYodGV4dE9yaWVudGF0aW9uKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHdyaXRpbmdNb2RlUmVmLmN1cnJlbnQgPSB3cml0aW5nTW9kZTsgfSwgW3dyaXRpbmdNb2RlXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBkaXJlY3Rpb25SZWYuY3VycmVudCA9IGRpcmVjdGlvbjsgfSwgW2RpcmVjdGlvbl0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgdGV4dE9yaWVudGF0aW9uUmVmLmN1cnJlbnQgPSB0ZXh0T3JpZW50YXRpb247IH0sIFt0ZXh0T3JpZW50YXRpb25dKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuICAgICAgICAgICAgY29uc3QgdyA9IGNvbXB1dGVkU3R5bGVzLndyaXRpbmdNb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBzZXRXcml0aW5nTW9kZSh3IHx8IFwiaG9yaXpvbnRhbC10YlwiKTtcclxuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKGQgfHwgXCJydGxcIik7XHJcbiAgICAgICAgICAgIHNldFRleHRPcmllbnRhdGlvbih0IHx8IFwibWl4ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGxldCB3cml0aW5nTW9kZSA9IHdyaXRpbmdNb2RlUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJlZi5jdXJyZW50O1xyXG4gICAgICAgIGxldCB0ZXh0T3JpZW50YXRpb24gPSB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIXdyaXRpbmdNb2RlIHx8ICFkaXJlY3Rpb24gfHwgIXRleHRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHRleHRPcmllbnRhdGlvbiA9PSBcInVwcmlnaHRcIilcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJsdHJcIjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5Xcml0aW5nTW9kZXNbd3JpdGluZ01vZGUgPz8gXCJob3Jpem9udGFsLXRiXCJdW2RpcmVjdGlvbiA/PyBcImx0clwiXVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbd3JpdGluZ01vZGVSZWYsIGRpcmVjdGlvblJlZiwgdGV4dE9yaWVudGF0aW9uUmVmXSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gZWxlbWVudE9yaWVudGF0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcclxuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xyXG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBpbmxpbmVEaXJlY3Rpb24sIGJsb2NrRGlyZWN0aW9uIH0gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxyXG4gICAgICAgICAgICAvLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uLFxyXG4gICAgICAgIGNvbnZlcnRFbGVtZW50U2l6ZSxcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvblxyXG4gICAgfTtcclxufVxyXG47XHJcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcclxuICAgIC4uLkhvcml6b250YWxUYkx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcclxufTtcclxuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcclxuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xyXG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbFJ0bCxcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xyXG4gICAgLi4uVmVydGljYWxMckx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xyXG4gICAgLi4uU2lkZXdheXNMdEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XHJcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcclxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxMciA9IHtcclxuICAgIGx0cjogVmVydGljYWxMckx0cixcclxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxyXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcclxufTtcclxuY29uc3QgV3JpdGluZ01vZGVzID0ge1xyXG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcclxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcclxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcclxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcclxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcclxuICogaW5zaWRlIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaW5jbHVkaW5nIGl0IGluIHRoZSBkZXBlbmRlbmN5IGFycmF5LlxyXG4gKlxyXG4gKiBVc2Ugd2l0aCBjYXV0aW9uLCBhbmQgKipkbyBub3QgdXNlIHRoZSBnZXR0ZXIgaW4gdXNlTGF5b3V0RWZmZWN0ISEqKlxyXG4gKiBgc2V0U3RhdGVgJ3MgZ2V0dGVyIGRvZXMgbm90IGhhdmUgdGhpcyBwcm9ibGVtLCBidXQgdGhlbiB5b3UncmUgdXNpbmcgeW91ciBvd24gc3RhdGVcclxuICogaW5zdGVhZCBvZiBhbiBleGlzdGluZyB2YWx1ZSwgd2hpY2ggbWlnaHQgbm90IGFsd2F5cyBiZSBmZWFzaWJsZS5cclxuICpcclxuICogV2VpZ2ggeW91ciBvcHRpb25zLCBhbmQgaG9wZWZ1bGx5IG9uZSBvZiB0aGVtIGdldHMgdGhlIGpvYiBkb25lLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZih2YWx1ZSk7XHJcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gdmFsdWUpO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9LCBbXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1nZXR0ZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbi8qKlxyXG4gKiBBbHRlcm5hdGUgdXNlQ2FsbGJhY2soKSB3aGljaCBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSAod3JhcHBlZCkgZnVuY3Rpb24gcmVmZXJlbmNlXHJcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxyXG4gKlxyXG4gKiBETyBOT1QgVVNFIFRIRSBSRVNVTFQgSU4gdXNlTGF5b3V0RWZmZWN0ISFcclxuICpcclxuICogVE9ETzogSW52ZXN0aWdhdGUgb3B0aW9ucy5kaWZmZWQgaWYgdGhlIHVzZUxheW91dEVmZmVjdCBsaW1pdGF0aW9uIGJlY29tZXMgbGltaXRsZXNzbHkgbGltaXRpbmcuXHJcbiAqXHJcbiAqIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDA5OSNpc3N1ZWNvbW1lbnQtNjU5Mjk4NDIyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlQ2FsbGJhY2soZm4pIHtcclxuICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja0dldHRlciA9IHVzZVN0YWJsZUdldHRlcihmbik7XHJcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RnVuYyA9IGN1cnJlbnRDYWxsYmFja0dldHRlcigpO1xyXG4gICAgICAgIGlmICghY3VycmVudEZ1bmMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVDYWxsYmFjaygpIGNhbm5vdCBiZSBjYWxsZWQgZnJvbSB1c2VMYXlvdXRFZmZlY3QoKS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRGdW5jKC4uLmFyZ3MpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IGFzIHVzZUxheW91dEVmZmVjdE5hdGl2ZSwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcclxuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcclxuICogYXMgd2VsbCBhcyB0aGUgY2hhbmdlcyB0aGF0IGNhdXNlZCB0aGUgaG9vayB0byBiZSBjYWxsZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICpcclxuICogQHBhcmFtIGVmZmVjdFxyXG4gKiBAcGFyYW0gaW5wdXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XHJcbiAgICBjb25zdCBwcmV2SW5wdXRzID0gdXNlUmVmKGlucHV0cyk7XHJcbiAgICBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChwcmV2SW5wdXRzLmN1cnJlbnQubGVuZ3RoLCBpbnB1dHMubGVuZ3RoKTsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2SW5wdXRzLmN1cnJlbnRbaV0gIT0gaW5wdXRzW2ldKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlc1tpXSA9IHsgZnJvbTogcHJldklucHV0cy5jdXJyZW50W2ldLCB0bzogaW5wdXRzW2ldIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVmZmVjdChwcmV2SW5wdXRzLmN1cnJlbnQsIGNoYW5nZXMpO1xyXG4gICAgICAgIHByZXZJbnB1dHMuY3VycmVudCA9IGlucHV0cztcclxuICAgIH07XHJcbiAgICB1c2VMYXlvdXRFZmZlY3ROYXRpdmUoZWZmZWN0MiwgaW5wdXRzKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dCh7IHRpbWVvdXQsIGNhbGxiYWNrLCB0cmlnZ2VySW5kZXggfSkge1xyXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayk7XHJcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xyXG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRpbWVvdXRJc051bGwgPT0gKHRpbWVvdXQgPT0gbnVsbCkpO1xyXG4gICAgICAgIGlmICh0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoc3RhYmxlQ2FsbGJhY2ssIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RyaWdnZXJJbmRleCwgdGltZW91dElzTnVsbF0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10aW1lb3V0LmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGNvbnN0IGhhc0NhbGxiYWNrID0gKGNhbGxiYWNrICE9IG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAvLyB0aGF0IGFsc28gY2FsbHMgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYWdhaW4uXHJcbiAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlQ2FsbGJhY2sobXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2hhc0NhbGxiYWNrXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFuaW1hdGlvbi1mcmFtZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8vIFVzZWQgaW5zdGVhZCBvZiB1bmRlZmluZWQgaW4gY2FzZSB1bmRlZmluZWQgaXMgYSBcclxuLy8gdHlwZSB0aGF0J3MgZnJlcXVlbnRseSB1c2VkIGluIHRoZSB1c2VkIHVzZSBjYXNlLlxyXG5jb25zdCBOZXZlclNldCA9IFN5bWJvbChcIm5ldmVyLXNldFwiKTtcclxuLyoqXHJcbiAqIFJldHVybnMgYSB2YWx1ZSB0aGF0IGRvZXMgbm90IGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMuIFRoZSBwcm92aWRlZCBnZXR0ZXIgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlLCBqdXN0IGluIGNhc2UgaXQncyBleHBlbnNpdmUuXHJcbiAqXHJcbiAqIE9wdGlvbmFsbHksIHRoZSB2YWx1ZSBjYW4gZGVwZW5kIG9uIGEgc2V0IG9mIGFyZ3VtZW50cyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBnZXR0ZXIuXHJcbiAqXHJcbiAqIEVmZmVjdGl2ZWx5LCB0aGlzIGlzIGB1c2VNZW1vYCwgZXhjZXB0IGl0IHBhc3NlcyBpdHMgZGVwZW5kZW5jaWVzIHRvIHRoZSBmYWN0b3J5IGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0gZ2V0dGVyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byB1c2VcclxuICogQHBhcmFtIGFyZ3MgT3B0aW9uYWwgYXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gd2lsbCBvbmx5IGJlIGNhbGxlZCBhZ2FpbiBpZiB0aGVzZSBjaGFuZ2UuXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29uc3RhbnQoZ2V0dGVyLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKE5ldmVyU2V0KTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHNldFZhbHVlKHByZXYgPT4gZ2V0dGVyKC4uLmFyZ3MpKTsgfSwgYXJncyk7XHJcbiAgICBpZiAodmFsdWUgPT09IE5ldmVyU2V0KVxyXG4gICAgICAgIHJldHVybiBnZXR0ZXIoLi4uYXJncyk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNvbnN0YW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xyXG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZywgZ2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xhc3REcm9wRWZmZWN0LCBzZXRMYXN0RHJvcEVmZmVjdCwgZ2V0TGFzdERyb3BFZmZlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IChlZmZlY3RBbGxvd2VkID8/IFwiYWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdJbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0ID8/IDAsIGRyYWdJbWFnZVlPZmZzZXQgPz8gMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbWltZVR5cGUsIGRhdGFdIG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKG1pbWVUeXBlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25EcmFnRW5kID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgIT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSZWZFbGVtZW50UHJvcHMoe1xyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0LFxyXG4gICAgICAgICAgICBvbkRyYWdFbmQsXHJcbiAgICAgICAgICAgIHJlZlxyXG4gICAgICAgIH0pLCBwKTtcclxuICAgIH0sIFtlZmZlY3RBbGxvd2VkLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQsIC4uLk9iamVjdC5lbnRyaWVzKGRhdGEpLmZsYXQoKV0pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxyXG4gICAgICAgIGRyYWdnaW5nLFxyXG4gICAgICAgIGdldERyYWdnaW5nLFxyXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cclxuICAgICAgICAvLyBVc2VmdWwgZm9yIHJlbW92aW5nIHRoZSBlbGVtZW50IGFmdGVyd2FyZHMgaWYgaXQgd2FzIFwibW92ZVwiXHJcbiAgICAgICAgbGFzdERyb3BFZmZlY3QsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJhZ2dhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG47XHJcbjtcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZUZpbGVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGZpbGVOYW1lO1xyXG4gICAgZXJyb3JUeXBlO1xyXG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWUsIGJhc2UpIHtcclxuICAgICAgICBzdXBlcihiYXNlPy5tZXNzYWdlID8/IFwiQW4gdW5zcGVjaWZpZWQgZXJyb3Igb2NjdXJyZWQgcmVhZGluZyB0aGUgZmlsZS5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gYmFzZT8ubmFtZTtcclxuICAgIH1cclxufVxyXG4vL01lcmdlZFByb3BzPFVzZVJlZkVsZW1lbnRQcm9wc1JldHVyblR5cGU8RSwgUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgXCJvbkRyYWdFbnRlclwiIHwgXCJvbkRyYWdMZWF2ZVwiIHwgXCJvbkRyYWdPdmVyXCIgfCBcIm9uRHJvcFwiPj4sIFA+O1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHBhYmxlKHsgZWZmZWN0IH0pIHtcclxuICAgIGNvbnN0IFtmaWxlc0ZvckNvbnNpZGVyYXRpb24sIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdHJpbmdzRm9yQ29uc2lkZXJhdGlvbiwgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcHBlZEZpbGVzLCBzZXREcm9wcGVkRmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZHJvcHBlZFN0cmluZ3MsIHNldERyb3BwZWRTdHJpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BFcnJvciwgc2V0RHJvcEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICAvLyBBbGwgdGhlIHByb21pc2VzIGdlbmVyYXRlZCBmcm9tIHRoZSBkcm9wIGV2ZW50cy5cclxuICAgIC8vIFVzZWQgdG8gcHJvY2VzcyBtdWx0aXBsZSBkcm9wIGV2ZW50cyBpbiBzdWNjZXNzaW9uXHJcbiAgICBjb25zdCBkcm9wUHJvbWlzZXNSZWYgPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQcm9taXNlSW5kZXgsIHNldEN1cnJlbnRQcm9taXNlSW5kZXgsIGdldEN1cnJlbnRQcm9taXNlSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3Byb21pc2VDb3VudCwgc2V0UHJvbWlzZUNvdW50LCBnZXRQcm9taXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxyXG4gICAgLy8gSWYgdGhlcmUgaXMgb25lLCB0aGVuIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcsIHNpbmNlIGl0IHJ1bnMgdGhlIHNhbWUgY2hlY2suXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgaWYgKHByb21pc2VDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb21pc2VDb3VudF0pO1xyXG4gICAgLy8gQW55dGltZSBvdXIgY3VycmVudCBwcm9taXNlIGNoYW5nZXMsXHJcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxyXG4gICAgLy8gRmluYWxseSwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnltb3JlIHByb21pc2VzLlxyXG4gICAgLy8gSWYgdGhlcmUgYXJlLCB0aGVuIGluY3JlYXNlIGN1cnJlbnRQcm9taXNlQ291bnQsXHJcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gKm9mdGVuKiwgYnV0IG1heWJlIGluIHRoZSBjYXNlIG9mXHJcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvbWlzZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcclxuICAgICAgICAgICAgY3VycmVudFByb21pc2UudGhlbigoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZm8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BwZWRGaWxlcyhmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcHBlZFN0cmluZ3Moc3RyaW5ncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgdGhhdCB3ZSdyZSBkb25lLCBhcmUgdGhlcmUgbW9yZSBwcm9taXNlcyBpbiB0aGUgcXVldWU/XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRQcm9taXNlSW5kZXggKyAxKSA8IHByb21pc2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgcHJvbWlzZSBoYXMgc3RhcnRlZCwgbW9yZSBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9taXNlSW5kZXgoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFByb21pc2VJbmRleF0pO1xyXG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xyXG4gICAgICAgIC8vY29uc3QgcmVmID0gdXNlUmVmPEU+KG51bGwpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBjb2xsZWN0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlcy5cclxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXHJcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gKGVmZmVjdCA/PyBcIm1vdmVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNaW1lVHlwZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlLmRhdGFUcmFuc2Zlcj8uaXRlbXMgPz8gW10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGtpbmQsIHR5cGUgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWltZVR5cGVzLmFkZCh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaCh7IHR5cGU6IGl0ZW0udHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obmV3RmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obmV3TWltZVR5cGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSGFuZGxlIHJlc2V0dGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXNcclxuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJvaWxlcnBsYXRlLCBJIGd1ZXNzXHJcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICBjb25zdCBvbkRyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wRmlsZSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGUuZGF0YVRyYW5zZmVyPy5pdGVtcyA/PyBbXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBpdGVtLmdldEFzU3RyaW5nKHJlc29sdmUpKSkudGhlbihzdHIgPT4gZHJvcERhdGFbdHlwZV0gPSBzdHIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcm9wUHJvbWlzZXNSZWYuY3VycmVudC5wdXNoKFByb21pc2UuYWxsKGFsbFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFByb21pc2VDb3VudChpID0+ICsraSk7XHJcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IGRyb3BEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9taXNlQ291bnQoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSZWZFbGVtZW50UHJvcHMoeyBvbkRyYWdFbnRlciwgb25EcmFnTGVhdmUsIG9uRHJhZ092ZXIsIG9uRHJvcCB9KSwgcCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VEcm9wcGFibGVQcm9wcyxcclxuICAgICAgICBmaWxlc0ZvckNvbnNpZGVyYXRpb24sXHJcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXHJcbiAgICAgICAgZHJvcHBlZEZpbGVzLFxyXG4gICAgICAgIGRyb3BwZWRTdHJpbmdzLFxyXG4gICAgICAgIGRyb3BFcnJvcixcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyb3BwYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW55ICpub24tUHJlYWN0KiBlbGVtZW50LCBhbmQgcmVtb3ZpbmcgaXQgd2hlbiB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBob29rIHVubW91bnRzLiBUaGUgY2FsbGJhY2sgZG9lcyBub3QgbmVlZCB0byBiZSBzdGFibGUgYWNyb3NzIHJlbmRlcnMuXHJcbiAqXHJcbiAqIER1ZSB0byB0eXBpbmcgbGltaXRhdGlvbnMsIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgbGlrZSB0aGlzOlxyXG4gKlxyXG4gKiBgdXNlRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiaW5wdXRcIik8SW5wdXRFdmVudD4oZSA9PiB7fSlgXHJcbiAqXHJcbiAqIFRoZSB0eXBlIGFyZ3VtZW50IGlzIG9wdGlvbmFsLCBidXQgbmFycm93cyBkb3duIHRoZSB0eXBlIGZyb20gXCJhIHVuaW9uIG9mIGFsbCBldmVudHNcIiB0byB3aGF0ZXZlciB5b3Ugc3BlY2lmeSwgYW5kIGVycm9ycyBpZiBpdCBkb2Vzbid0IGV4aXN0LlxyXG4gKlxyXG4gKiBUaGVyZSBpcyBhIHNlcGFyYXRlIHZlcnNpb24gdGhhdCBhdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byBhIHNldCBvZiBwcm9wcy5cclxuICogSXQgdGFrZXMgZGlmZmVyZW50IGV2ZW50IHN0cmluZyB0eXBlcyAob25FdmVudCB2cyBvbmV2ZW50KS5cclxuICpcclxuICogQHBhcmFtIHRhcmdldCBBICpub24tUHJlYWN0KiBub2RlIHRvIGF0dGFjaCB0aGUgZXZlbnQgdG8uXHJcbiAqIEByZXR1cm5zXHJcbiAqICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxIYW5kbGVyKHRhcmdldCwgdHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xyXG4gICAgLy8gTm90ZSB0byBzZWxmOiBUaGUgdHlwaW5nIGRvZXNuJ3QgaW1wcm92ZSBldmVuIGlmIHRoaXMgaXMgc3BsaXQgdXAgaW50byBhIHN1Yi1mdW5jdGlvbi5cclxuICAgIC8vIE5vIG1hdHRlciB3aGF0LCBpdCBzZWVtcyBpbXBvc3NpYmxlIHRvIGdldCB0aGUgaGFuZGxlcidzIGV2ZW50IG9iamVjdCB0eXBlZCBwZXJmZWN0bHkuXHJcbiAgICAvLyBJdCBzZWVtcyBsaWtlIGl0J3MgZ3VhcmFudGVlZCB0byBhbHdheXMgYmUgYSB1bmlvbiBvZiBhbGwgYXZhaWxhYmxlIHR1cGVzLlxyXG4gICAgLy8gQWdhaW4sIG5vIG1hdHRlciB3aGF0IGNvbWJpbmF0aW9uIG9mIHN1Yi0gb3Igc3ViLXN1Yi1mdW5jdGlvbnMgdXNlZC5cclxuICAgIGNvbnN0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHN0YWJsZUhhbmRsZXIsIG9wdGlvbnMpO1xyXG4gICAgfSwgW3RhcmdldCwgdHlwZSwgc3RhYmxlSGFuZGxlcl0pO1xyXG59XHJcbi8qKlxyXG4gKiBBbiBhbHRlcm5hdGl2ZSB3YXkgdG8gYWRkIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW4gZWxlbWVudC4gVXNlZnVsIHByaW1hcmlseSB3aGVuIGludGVncmF0aW5nIDNyZCBwYXJ0eSBsaWJyYXJpZXMgdGhhdCBleHBlY3QgYSBnZW5lcmljIFwiYWRkIGV2ZW50IGhhbmRsZXJcIiBmdW5jdGlvbi5cclxuICpcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byBtb2RpZnkgYSBzZXQgb2YgcHJvcHMgdG8gYXBwbHkgdGhpcyBoYW5kbGVyLlxyXG4gKlxyXG4gKiBGb3IgdHlwaW5nIHJlYXNvbnMsIHRoaXMgZnVuY3Rpb24gaXMgc3BsaXQgaW50byB0d28uICBVc2FnZSBpcyBsaWtlIHRoZSBmb2xsb3dpbmc6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfSA9IHVzZUxvY2FsRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PigpKFwib25Nb3VzZURvd25cIiwgZSA9PiB7ICB9KTtcclxuICogY29uc3QgZGl2UHJvcHMgPSB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzKHByb3BzKTtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxIYW5kbGVyKCkge1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCh0eXBlLCBoYW5kbGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhYmxlSGFuZGxlciA9IHVzZVN0YWJsZUNhbGxiYWNrKGhhbmRsZXIpO1xyXG4gICAgICAgIGNvbnN0IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBbdHlwZV06IHN0YWJsZUhhbmRsZXIgfSwgcHJvcHMpO1xyXG4gICAgICAgIH0sIFt0eXBlXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1ldmVudC1oYW5kbGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqXHJcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpZmZlcmVudCB3YXlzIHRoYXQgYSBmb2N1cyBldmVudCBjYW4gaGFwcGVuLiAgQXNzdW1lXHJcbiAqIHRoZSBmb2xsb3dpbmcgc3RlcHMgaGFwcGVuIGluIG9yZGVyOlxyXG4gKlxyXG4gKiAxLiBUaGUgcGFnZSBsb2Fkcy5cclxuICogICAgKiBOb3RoaW5nIGlzIGZvY3VzZWQsIGJ1dCBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYGJvZHlgLlxyXG4gKiAgICAqIE5vIGZvY3VzIGV2ZW50cyBhcmUgZmlyZWQuXHJcbiAqIDIuIFRoZSB3aW5kb3cgaXMgZm9jdXNlZCwgYW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCByZW1haW5zIGFzIGBib2R5YC5cclxuICogICAgKiBBIGBmb2N1c2AvYGZvY3VzaW5gIGV2ZW50ICpNSUdIVCogYmUgZmlyZWQgZm9yIGBib2R5YC4gRGVwZW5kaW5nIG9uXHJcbiAqICAgICAgdGhlIGJyb3dzZXIsIHRoaXMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBoYW5kbGVyIHdhcyBhdHRhY2hlZCB0byBgd2luZG93YCBvciBgZG9jdW1lbnRgLlxyXG4gKiAgICAgIFByb2JhYmx5IGp1c3QgYmVzdCB0byBub3QgcmVseSBvbiBpdCwgb3IgbGlzdGVuIHRvIGB3aW5kb3dgIGZvY3VzIGV2ZW50cyBkaXJlY3RseS5cclxuICogMy4gQSBmb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCBldGMuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50IGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cclxuICogICAgKiBgZm9jdXNvdXRgIGFuZCBgYmx1cmAgYXJlICpub3QqIGZpcmVkIG9uIGBib2R5YC5cclxuICogICAgKiBgZm9jdXNgIGFuZCBgZm9jdXNpbmAgYXJlIGZpcmVkIG9uIHRoZSBuZXcgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXHJcbiAqIDQuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxyXG4gKiAgICAqICoqVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIGBib2R5YCoqIGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cclxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIG5vdyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50LlxyXG4gKiAgICAqIGBmb2N1c2luYCBpcyBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgb2xkIGVsZW1lbnQuXHJcbiAqIDUuIEFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIGBib2R5YC5cclxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXHJcbiAqICAgICogYGZvY3VzaW5gIGlzICpub3QqIGZpcmVkIG9uIGBib2R5YC5cclxuICpcclxuICpcclxuICogSW4gc3VtbWFyeTpcclxuICogMS4gRm9jdXMgZXZlbnRzICpkbyogbm90aWZ5IHVzIG9mIGFsbCBjaGFuZ2VzIGluIGZvY3VzLCBidXQgdGhlcmUgaXMgbm8gb25lIHNpbmdsZSBjb21wcmVoZW5zaXZlIGV2ZW50IHRoYXQgcHJvdmlkZXMgdXMgd2l0aCBhbGwgYXZhaWxhYmxlIGluZm9ybWF0aW9uLlxyXG4gKiAyLiBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgKmlzIG5vdCogYWx3YXlzIHRoZSBzYW1lIGFzIHdoYXQncyBiZWluZyByZWZlcmVuY2VkIGJ5IGEgZm9jdXMgZXZlbnQuIEluIHBhcnRpY3VsYXIsIGl0IG1heSBiZWNvbWUgYGJvZHlgIGF0IGFueSBhcmJpdHJhcnkgdGltZS5cclxuICogMy4gQSBgYmx1cmAgd2l0aG91dCBhIGBmb2N1c2AgY2FuIGFuZCB3aWxsIG9jY3VyLiBUaGlzIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBzb2xlbHkgdXNlIGBmb2N1c2AgdG8gZGV0ZWN0IGFsbCBjaGFuZ2VzLlxyXG4gKiA0LiBBIGBibHVyYCBldmVudCB3aG9zZSBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSB3aWxsIGJlIG5vIGZvbGxvd2luZyBgZm9jdXNgIGV2ZW50LlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICogQHJldHVybnNcclxuICovXHJcbmxldCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IG51bGw7XHJcbmxldCBsYXN0Rm9jdXNlZEVsZW1lbnQgPSBudWxsO1xyXG5mdW5jdGlvbiBnZXRMYXN0Rm9jdXNlZEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gbGFzdEZvY3VzZWRFbGVtZW50O1xyXG59XHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRseUZvY3VzZWRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50O1xyXG59XHJcbmNvbnN0IHVwZGF0ZXJzID0gbmV3IFNldCgpO1xyXG5mdW5jdGlvbiBmb2N1c291dChlKSB7XHJcbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiB1cGRhdGVycykge1xyXG4gICAgICAgICAgICBmKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gSnVzdCB3YWl0IGZvciB0aGUgZm9jdXNpbiBldmVudC5cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb2N1c2luKGUpIHtcclxuICAgIGN1cnJlbnRseUZvY3VzZWRFbGVtZW50ID0gbGFzdEZvY3VzZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBmb3IgKGxldCBmIG9mIHVwZGF0ZXJzKSB7XHJcbiAgICAgICAgZigpO1xyXG4gICAgfVxyXG59XHJcbmxldCB3aW5kb3dGb2N1c2VkID0gdHJ1ZTtcclxuZnVuY3Rpb24gd2luZG93Rm9jdXMoKSB7XHJcbiAgICB3aW5kb3dGb2N1c2VkID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGYgb2YgdXBkYXRlcnMpIHtcclxuICAgICAgICBmKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gd2luZG93Qmx1cigpIHtcclxuICAgIHdpbmRvd0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIGZvciAobGV0IGYgb2YgdXBkYXRlcnMpIHtcclxuICAgICAgICBmKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGl2ZUVsZW1lbnQoKSB7XHJcbiAgICAvLyBUT0RPOiBJcyB0aGlzIGFjdHVhbGx5IGJldHRlciB0aGFuIHVzaW5nIHByb3BlciBzdGF0ZSBtYW5hZ2VtZW50P1xyXG4gICAgY29uc3QgW2ksIHNldEldID0gdXNlU3RhdGUoMCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IEYgPSAoKSA9PiBzZXRJKGkgPT4gKytpKTtcclxuICAgICAgICBpZiAodXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZXJzLmFkZChGKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVycy5kZWxldGUoRik7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVycy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQ6IGN1cnJlbnRseUZvY3VzZWRFbGVtZW50LFxyXG4gICAgICAgIGxhc3RBY3RpdmVFbGVtZW50OiBsYXN0Rm9jdXNlZEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0QWN0aXZlRWxlbWVudDogZ2V0Q3VycmVudGx5Rm9jdXNlZEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0TGFzdEFjdGl2ZUVsZW1lbnQ6IGdldExhc3RGb2N1c2VkRWxlbWVudCxcclxuICAgICAgICB3aW5kb3dGb2N1c2VkXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY3RpdmUtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNGb2N1cyh7fSA9IHt9KSB7XHJcbiAgICAvL2NvbnN0IFtmb2N1c2VkRWxlbWVudCwgc2V0Rm9jdXNlZEVsZW1lbnQsIGdldEZvY3VzZWRFbGVtZW50XSA9IHVzZVN0YXRlPEV2ZW50VGFyZ2V0IHwgbnVsbD4obnVsbCk7XHJcbiAgICAvL2NvbnN0IFtmb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQsIGxhc3RBY3RpdmVFbGVtZW50IH0gPSB1c2VBY3RpdmVFbGVtZW50KCk7XHJcbiAgICBjb25zdCB1c2VIYXNGb2N1c1Byb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBmb2N1c2VkID0gdXNlTWVtbygoKSA9PiB7IHJldHVybiBlbGVtZW50ID09IGFjdGl2ZUVsZW1lbnQ7IH0sIFtlbGVtZW50LCBhY3RpdmVFbGVtZW50XSk7XHJcbiAgICBjb25zdCBmb2N1c2VkSW5uZXIgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQ/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpID8/IGZhbHNlOyB9LCBbZWxlbWVudCwgYWN0aXZlRWxlbWVudF0pO1xyXG4gICAgY29uc3QgbGFzdEZvY3VzZWQgPSB1c2VNZW1vKCgpID0+IHsgcmV0dXJuIGVsZW1lbnQgPT0gbGFzdEFjdGl2ZUVsZW1lbnQ7IH0sIFtlbGVtZW50LCBsYXN0QWN0aXZlRWxlbWVudF0pO1xyXG4gICAgY29uc3QgbGFzdEZvY3VzZWRJbm5lciA9IHVzZU1lbW8oKCkgPT4geyByZXR1cm4gZWxlbWVudD8uY29udGFpbnMobGFzdEFjdGl2ZUVsZW1lbnQpID8/IGZhbHNlOyB9LCBbZWxlbWVudCwgbGFzdEFjdGl2ZUVsZW1lbnRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlSGFzRm9jdXNQcm9wcyxcclxuICAgICAgICBmb2N1c2VkRWxlbWVudDogYWN0aXZlRWxlbWVudCxcclxuICAgICAgICBsYXN0Rm9jdXNlZEVsZW1lbnQ6IGxhc3RBY3RpdmVFbGVtZW50LFxyXG4gICAgICAgIGZvY3VzZWQsXHJcbiAgICAgICAgZm9jdXNlZElubmVyLFxyXG4gICAgICAgIGxhc3RGb2N1c2VkLFxyXG4gICAgICAgIGxhc3RGb2N1c2VkSW5uZXJcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWhhcy1mb2N1cy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJ2YWwoeyBpbnRlcnZhbCwgY2FsbGJhY2sgfSkge1xyXG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcclxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2spO1xyXG4gICAgY29uc3QgZ2V0SW50ZXJ2YWwgPSB1c2VTdGFibGVHZXR0ZXIoaW50ZXJ2YWwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xyXG4gICAgICAgIGxldCBsYXN0RGVsYXlVc2VkID0gaW50ZXJ2YWw7XHJcbiAgICAgICAgaWYgKGludGVydmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgLy8gdGhhdCBjbGVhcnMgYW5kIHJlc2V0cyB0aGUgaW50ZXJ2YWwgaWYgaXQgY2hhbmdlcy5cclxuICAgICAgICBjb25zdCBhZGp1c3RhYmxlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnRlcnZhbCA9IGdldEludGVydmFsKCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbGFzdERlbGF5VXNlZCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnRlcnZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgbGFzdERlbGF5VXNlZCA9IGN1cnJlbnRJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGludGVydmFsKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnZhbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQ29uc3RhbnQgfSBmcm9tIFwiLi91c2UtY29uc3RhbnRcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XHJcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFRhYmxlW3ZhbHVlXTtcclxufVxyXG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcclxuICAgIHJldHVybiBbcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKV07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgd2l0aCBhbiBvcHRpb25hbCBwcmVmaXguXHJcbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxyXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XHJcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBhIGhvb2sgdGhhdCBtb2RpZmllcyBhIHNldCBvZiBwcm9wcyB0byBwcm92aWRlIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIGlmIG9uZSB3YXMgbm90IHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBBbmQgdGhlIHJhbmRvbWx5LWdlbmVyYXRlZCBpZCBpdHNlbGYgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHlvdSB3YW50IHRvIGhhbmRsZSB0aGUgbG9naWMgeW91cnNlbGYgd2l0aG91dCBgdXNlTWVyZ2VkUHJvcHNgLlxyXG4gKlxyXG4gKiBVbmxpa2UgbW9zdCBvdGhlciBgdXNlKlByb3BzYCBob29rcywgdGhlc2UgYXJlIG1vc3RseSBzdGFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XHJcbiAgICBjb25zdCByYW5kb21JZCA9IHVzZUNvbnN0YW50KGdlbmVyYXRlUmFuZG9tSWQsIHByZWZpeCk7XHJcbiAgICAvLyBXaGF0ZXZlciBJRCB3YXMgbW9zdCByZWNlbnRseSB1c2VkIGJ5IHRoZSBhY3R1YWwgXCJpZFwiIHByb3AuXHJcbiAgICAvLyBVc2VkIHNvIHRoYXQgYW55IElELXJlZmVyZW5jaW5nIHByb3BzIGRvbid0IG5lZWQgdG8gcHJvdmlkZSB0aGUgc2FtZSB2YWx1ZS5cclxuICAgIC8vXHJcbiAgICAvLyBUT0RPOiBUaGlzIGRvZXMgbWVhbiB0aGF0IG9uIHRoZSBmaXJzdCByZW5kZXIsIGlmIGp1c3QgdGhlIElEIGlzIHByb3ZpZGVkLFxyXG4gICAgLy8gdGhlcmUgd2lsbCBiZSBhIHRlbXBvcmFyeSBtaXNtYXRjaCwgYnV0IGl0J3MgY29ycmVjdGVkIGJlZm9yZSByZW5kZXJpbmcgZmluaXNoZXMuXHJcbiAgICAvLyBJcyB0aGlzIG9rYXk/XHJcbiAgICBjb25zdCBbdXNlZElkLCBzZXRVc2VkSWQsIGdldFVzZWRJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgdXNlUmVmZXJlbmNlZElkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VSZWZlcmVuY2VkSWRQcm9wcyhpZFByb3BOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gZnVuY3Rpb24gKHsgW2lkUHJvcE5hbWVdOiBnaXZlbklkLCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZWRJZDIgPSAoZ2l2ZW5JZCA/PyB1c2VkSWQgPz8gcmFuZG9tSWQgPz8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgaWYgKGlkUHJvcE5hbWUgPT09IFwiaWRcIilcclxuICAgICAgICAgICAgICAgIHNldFVzZWRJZCh1c2VkSWQyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBbaWRQcm9wTmFtZV06IHVzZWRJZDIgfSwgcHJvcHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sIFt1c2VkSWQsIHJhbmRvbUlkXSk7XHJcbiAgICBjb25zdCB1c2VSYW5kb21JZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmFuZG9tSWRQcm9wcyhwKSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiaWRcIikocCk7XHJcbiAgICB9LCBbdXNlUmVmZXJlbmNlZElkUHJvcHNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmFuZG9tSWQsXHJcbiAgICAgICAgaWQ6IHVzZWRJZCxcclxuICAgICAgICBnZXRJZDogZ2V0VXNlZElkLFxyXG4gICAgICAgIHVzZVJhbmRvbUlkUHJvcHMsXHJcbiAgICAgICAgdXNlUmVmZXJlbmNlZElkUHJvcHNcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQodSkgeyB9XHJcbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzcyhzdHIpIHsgfVxyXG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxyXG5mdW5jdGlvbiB0ZXN0KHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGlkLCByYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKCk7XHJcbiAgICAvL2NvbnN0IHAxYTogTWVyZ2VkUHJvcHM8eyBpZDogc3RyaW5nIH0sIHsgIH0+ID0gdXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSlcclxuICAgIGNvbnN0IHAxYiA9IHVzZVJhbmRvbUlkUHJvcHMoeyAuLi5wcm9wcywgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHAyYSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHAyYiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmMgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwcm9wcyk7XHJcbiAgICBjb25zdCBwM2EgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgaWQ6IHVuZGVmaW5lZCB9KSk7XHJcbiAgICBjb25zdCBwM2IgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSkpO1xyXG4gICAgY29uc3QgcDRhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikodXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSkpO1xyXG4gICAgY29uc3QgcDRiID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocDFiKTtcclxuICAgIC8vcDFhLmlkO1xyXG4gICAgcDFiLmlkO1xyXG4gICAgcDJhW1wiZm9yXCJdO1xyXG4gICAgcDJiW1wiZm9yXCJdO1xyXG4gICAgcDJjW1wiZm9yXCJdO1xyXG4gICAgcDNhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwM2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHAzYVtcImZvclwiXT8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDNiW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNGFbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHA0YltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDRhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBJdCdzIGJlY2F1c2UgaXQgcmVzb2x2ZXMgdG8gXCJpZDogdW5kZWZpbmVkICYgc3RyaW5nXCIgLS0gdGhpcyBzaG91bGRuJ3QgaGFwcGVuXHJcbiAgICBwNGIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAxYi5zdHlsZSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKHAxYi5zdHlsZSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcDJhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMmIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMmIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHAzYS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDNiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBwNGEuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDRiLnN0eWxlKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcmFuZG9tLWlkLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cclxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cclxuICpcclxuICogVGhpcyBob29rIGlzIHNsaWdodGx5IG1vcmUgY29tcGxpY2F0ZWQgaW4gdGhhdCBpdCByZXR1cm5zIGJvdGggYVxyXG4gKiBwcm9wLW1vZGlmeWluZyBob29rLCBidXQgYWxzbyBhIGhvb2sgdGhhdCBlYWNoIGNoaWxkIHdpbGwgbmVlZFxyXG4gKiB0byB1c2U6IGB1c2VNYW5hZ2VkQ2hpbGRgLiAgSXQncyBzdGFibGUgYWNyb3NzIHJlbmRlcnMsIHNvIGp1c3RcclxuICogdG9zcyBpdCBpbnRvIGEgYENvbnRleHRgIHNvIHRoZSBjaGlsZHJlbiBjYW4gaGF2ZSBhY2Nlc3MgdG8gaXQuXHJcbiAqIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHRoZSBjaGlsZCB3aXRoIHRoZSBwYXJlbnQgYW5kIHByb3ZpZGVzXHJcbiAqIGl0IHdpdGggYW55IHJlcXVlc3RlZCBpbmZvcm1hdGlvbiwgYnV0IGRvZXNuJ3QgZG8gYW55dGhpbmcgZWxzZVxyXG4gKiB1bnRpbCBpdCB1bm1vdW50cyBhbmQgcmV0cmFjdHMgdGhhdCBpbmZvcm1hdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZE1hbmFnZXIoKSB7XHJcbiAgICAvLyBUaGlzIGlzIGJsaW5kbHkgdXBkYXRlZCBhbnkgdGltZSBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50cyBpdHNlbGYuXHJcbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXHJcbiAgICAvLyB3ZSBhbHNvIHJlLXJlbmRlci5cclxuICAgIGNvbnN0IFtjaGlsZFVwZGF0ZUluZGV4LCBzZXRDaGlsZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IGluZGljZXNCeUVsZW1lbnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICAvLyBBcyBzb29uIGFzIHRoZSBjb21wb25lbnQgbW91bnRzLCBub3RpZnkgdGhlIHBhcmVudCBhbmQgcmVxdWVzdCBhIHJlcmVuZGVyLlxyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoW3ByZXZFbGVtZW50LCBwcmV2SW5kZXhdLCBjaGFuZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuc2V0KGVsZW1lbnQsIGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGluZm8uaW5kZXggPT0gdW5kZWZpbmVkLCBcIlR3byBjaGlsZHJlbiB3aXRoIHRoZSBzYW1lIGluZGV4IHdlcmUgYWRkZWQsIHdoaWNoIG1heSByZXN1bHQgaW4gdW5leHBlY3RlZCBiZWhhdmlvci5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdID0geyAuLi5pbmZvIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtlbGVtZW50LCBpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZSBnZW5lcmFsbHkuXHJcbiAgICAgICAgLy8gKkRvbid0IHJlLXJlbmRlciosIG90aGVyd2lzZSB3ZSdkIGJlIHN0dWNrIGluIGFuXHJcbiAgICAgICAgLy8gaW5maW5pdGUgbG9vcCBldmVyeSB0aW1lIGFuIGFub255bW91cyBmdW5jdGlvbiBpcyBwYXNzZWQuXHJcbiAgICAgICAgLy8gSXQgY29tZXMgaW4gZnJvbSB0aGUgcHJvcHMgc28gdGhlIGNoaWxkIHdhcyBhbHJlYWR5IHVwZGF0ZWQgYnkgaXQgLS1cclxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBwYXJlbnQgdG8gcmUtcmVuZGVyIGV2ZXJ5IHNpbmdsZSBjaGlsZCBhbnkgdGltZVxyXG4gICAgICAgIC8vIFwib25DbGlja1wiIHVwZGF0ZXMgb3Igd2hhdGV2ZXIuICBUaGUgcmVsZXZhbnQgY2hpbGQgYWxyZWFkeSBrbm93cyxcclxuICAgICAgICAvLyBhbmQgdGhhdCdzIHdoYXQgbWF0dGVycy5cclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcclxuICAgICAgICB9LCBbLi4uT2JqZWN0LmVudHJpZXMoaW5mbykuZmxhdCgpXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VNYW5hZ2VkQ2hpbGQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudCxcclxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50OiBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnRcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoaWxkLW1hbmFnZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbmltcG9ydCB7IHVzZUhhc0ZvY3VzIH0gZnJvbSBcIi4vdXNlLWhhcy1mb2N1c1wiO1xyXG4vKipcclxuICogSW1wbGVtZW50cyBhIHJvdmluZyB0YWJpbmRleCBzeXN0ZW0gd2hlcmUgb25seSBvbmUgXCJmb2N1c2FibGVcIlxyXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXHJcbiAqIG9mIHRob3NlIGVsZW1lbnRzIHJlY2VpdmVzIGZvY3VzIGlzIGRldGVybWluZWQgYnkgeW91LCBidXQgaXQnc1xyXG4gKiByZWNvbW1lbmRlZCB0byBvZmZsb2FkIHRoYXQgbG9naWMgdGhlbiB0byBhbm90aGVyIGhvb2ssIGxpa2VcclxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXHJcbiAqIGVsZW1lbnQgd2l0aCB0aGUgYXJyb3cga2V5cywgYHVzZVR5cGVhaGVhZE5hdmlnYXRpb25gLCB3aGljaFxyXG4gKiBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdHlwZWFoZWFkLCBvclxyXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGNoaWxkIGhvb2sgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHVzZWRcclxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXHJcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2sgKnRoYXQqIGhvb2sgcmV0dXJucyBzaG91bGQgdGhlbiBiZSB1c2VkXHJcbiAqIG9uIHRoZSBjaGlsZCdzIGVsZW1lbnQsIGFzIHdlbGwgYXMgYW55IG90aGVyIGVsZW1lbnRzIHlvdSdkIGxpa2VcclxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4KHsgdGFiYmFibGVJbmRleCB9KSB7XHJcbiAgICBjb25zdCB7IGZvY3VzZWQsIGZvY3VzZWRJbm5lciwgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoKTtcclxuICAgIGNvbnN0IGdldFRhYmJhYmxlSW5kZXggPSB1c2VTdGFibGVHZXR0ZXIodGFiYmFibGVJbmRleCk7XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRocmVlIHRoaW5ncyByZWxhdGVkIHRvIHRoZSBjdXJyZW50bHkgdGFiYmFibGUgZWxlbWVudCdzIGluZGV4OlxyXG4gICAgLy8gV2hhdCBpdCBpcyxcclxuICAgIC8vIFdoYXQgaXQgd2FzIHRoZSBsYXN0IHRpbWUsXHJcbiAgICAvLyBXaGV0aGVyLCB3aGVuIHdlIHJlbmRlciB0aGlzIGNvbXBvbmVudCBhbmQgaXQncyBjaGFuZ2VkLCB0byBhbHNvIGZvY3VzIHRoZSBlbGVtZW50IHRoYXQgd2FzIG1hZGUgdGFiYmFibGUuXHJcbiAgICAvLyBGb3IgdGhpcyByZWFzb24sIGJvb2xlYW4gfCBudWxsIGlzIHNlbWFudGljYWxseSBpbnRlbnRpb25hbCwgaWYgdGVjaG5pY2FsbHkgdW5uZWNlc3NhcnkgLS0gXHJcbiAgICAvLyB0cnVlIG9yIGZhbHNlIGltcGx5IGEgY2hhbmdlIGp1c3QgaGFwcGVuZWQgYW5kIHRoYXQgdGFiYmFibGVJbmRleCAhPSBwcmV2VGFiYmFibGUuY3VycmVudCwgYW5kIG51bGwgaW1wbGllcyBubyBjaGFuZ2UuXHJcbiAgICAvL2NvbnN0IFt0YWJiYWJsZUluZGV4LCBzZXRUYWJiYWJsZUluZGV4LCBnZXRUYWJiYWJsZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgcHJldlRhYmJhYmxlID0gdXNlUmVmKC1JbmZpbml0eSk7XHJcbiAgICAvLyBDYWxsIHRoZSBob29rIHRoYXQgYWxsb3dzIHVzIHRvIGNvbGxlY3QgaW5mb3JtYXRpb24gZnJvbSBjaGlsZHJlbiB3aG8gcHJvdmlkZSBpdFxyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZU1hbmFnZWRDaGlsZCwgaW5kaWNlc0J5RWxlbWVudCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcclxuICAgIC8vIERvZXNuJ3QgZG8gYW55dGhpbmcsIGJ1dCBoZXJlIGJlY2F1c2UgdGhlcmUncyBhIHByZXR0eSBkZWNlbnQgY2hhbmNlIGl0IG1pZ2h0IGluIHRoZSBmdXR1cmUuXHJcbiAgICBjb25zdCB1c2VSb3ZpbmdUYWJJbmRleFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHVzZUhhc0ZvY3VzUHJvcHMoe30pLCBwcm9wcyksIFtdKTtcclxuICAgIGNvbnN0IGZvY3VzT25DaGFuZ2UgPSAoZm9jdXNlZElubmVyICE9IGZhbHNlKTtcclxuICAgIC8vIEFueSB0aW1lIHRoZSB0YWJiYWJsZSBpbmRleCBjaGFuZ2VzLFxyXG4gICAgLy8gbm90aWZ5IHRoZSBwcmV2aW91cyBjaGlsZCB0aGF0IGl0J3Mgbm8gbG9uZ2VyIHRhYmJhYmxlLFxyXG4gICAgLy8gYW5kIG5vdGlmeSB0aGUgbmV4dCBjaGlsZCB0aGF0IGlzIGFsbG93ZWQgdG8gYmUgdGFiYmVkIHRvLlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGFiYmFibGVJbmRleCAhPSBwcmV2VGFiYmFibGUuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5bcHJldlRhYmJhYmxlLmN1cnJlbnRdPy5zZXRUYWJiYWJsZShmYWxzZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XS5zZXRUYWJiYWJsZSh0cnVlLCBmb2N1c09uQ2hhbmdlID8gXCJmb2N1c1wiIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIHByZXZUYWJiYWJsZS5jdXJyZW50ID0gdGFiYmFibGVJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0YWJiYWJsZUluZGV4LCBmb2N1c09uQ2hhbmdlXSk7XHJcbiAgICBjb25zdCBmb2N1c1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUsIFwiZm9jdXNcIik7XHJcbiAgICB9LCBbdGFiYmFibGVJbmRleF0pO1xyXG4gICAgY29uc3QgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2V0VGFiYmFibGUgPSB1c2VDYWxsYmFjaygodGFiYmFibGUsIHNob3VsZEZvY3VzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRhYmJhYmxlMih0YWJiYWJsZSk7XHJcbiAgICAgICAgICAgIGlmICh0YWJiYWJsZSAmJiBzaG91bGRGb2N1cylcclxuICAgICAgICAgICAgICAgIHNldFNob3VsZEZvY3VzKCEhc2hvdWxkRm9jdXMpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICBsZXQgbmV3SW5mbyA9IHtcclxuICAgICAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICAgICAgc2V0VGFiYmFibGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZChuZXdJbmZvKTtcclxuICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlMl0gPSB1c2VTdGF0ZShnZXRUYWJiYWJsZUluZGV4KCkgPT0gaW5mby5pbmRleCk7XHJcbiAgICAgICAgY29uc3QgW3Nob3VsZEZvY3VzLCBzZXRTaG91bGRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhYmJhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXggfSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMoeyB0YWJJbmRleCwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICAvL2NvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50PENoaWxkRWxlbWVudD4oKTtcclxuICAgICAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHNob3VsZEZvY3VzICYmIFwiZm9jdXNcIiBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG91bGRGb2N1cyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFtlbGVtZW50LCBzaG91bGRGb2N1c10pO1xyXG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhYmJhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZU1hbmFnZWRDaGlsZFByb3BzKHsgdGFiSW5kZXggfSksIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyxcclxuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXHJcbiAgICAgICAgICAgIHRhYmJhYmxlXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VNYW5hZ2VkQ2hpbGRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhQcm9wcyxcclxuICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLFxyXG4gICAgICAgIGNoaWxkQ291bnQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXHJcbiAgICAgICAgZm9jdXNTZWxmXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VUaW1lb3V0IH0gZnJvbSBcIi4vdXNlLXRpbWVvdXRcIjtcclxuaW1wb3J0IHsgdXNlTG9naWNhbERpcmVjdGlvbiB9IGZyb20gXCIuL3VzZS1sb2dpY2FsLWRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuLyoqXHJcbiAqIFdoZW4gdXNlZCBpbiB0YW5kZW0gd2l0aCBgdXNlUm92aW5nVGFiSW5kZXhgLCBhbGxvd3MgY29udHJvbCBvZlxyXG4gKiB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0aGUgYXJyb3cga2V5cy5cclxuICpcclxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgZ2V0SW5kZXgsIHNldEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIG5hdmlnYXRpb25EaXJlY3Rpb24gfSkge1xyXG4gICAgbmF2aWdhdGlvbkRpcmVjdGlvbiA/Pz0gXCJlaXRoZXJcIjtcclxuICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXgoKTtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxyXG4gICAgLy8gVE9ETzogS2VlcCB0cmFjayBvZiB0aGUgb3JpZ2luYWwgaW5kZXggYW5kIGtlZXAgaXQsIGF0IGxlYXN0IHVudGlsIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoaWxkQ291bnQgPiAwICYmIGluZGV4ID49IGNoaWxkQ291bnQpIHtcclxuICAgICAgICAgICAgc2V0SW5kZXgoY2hpbGRDb3VudCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpbmRleCwgY2hpbGRDb3VudF0pO1xyXG4gICAgLy8gVGhlc2UgYWxsb3cgdXMgdG8gbWFuaXB1bGF0ZSB3aGF0IG91ciBjdXJyZW50IHRhYmJhYmxlIGNoaWxkIGlzLlxyXG4gICAgY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7IHNldEluZGV4KGluZGV4IDwgMCA/IChtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICsgaW5kZXgpIDogaW5kZXgpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoaSA9PiArK2kpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoaSA9PiAtLWkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvU3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgwKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KC0xKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pO1xyXG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQ6IGdldFBhcmVudEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIGNvbnN0IHsgY29udmVydEVsZW1lbnRTaXplLCBnZXRMb2dpY2FsRGlyZWN0aW9uIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKGdldFBhcmVudEVsZW1lbnQoKSk7XHJcbiAgICBjb25zdCB1c2VMaW5lYXJOYXZpZ2F0aW9uUHJvcHMgPSBmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgaGFuZGxlZCBieSB0eXBlYWhlYWQgKGkuZS4gYXNzdW1lIHRoaXMgaXMgYSBrZXlib2FyZCBzaG9ydGN1dClcclxuICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsb3dzQmxvY2tOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJibG9ja1wiIHx8IG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJlaXRoZXJcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA9IChuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiaW5saW5lXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IFwiYmxvY2tEaXJlY3Rpb25cIiA6IFwiaW5saW5lRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8/Lltwcm9wTmFtZV0gPT09IFwiYnR0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBcImJsb2NrRGlyZWN0aW9uXCIgOiBcImlubGluZURpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9IChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImlubGluZURpcmVjdGlvblwiIDogXCJibG9ja0RpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9IChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIb21lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9TdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFbmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biB9LCBwcm9wcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wc1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyxcclxuICAgICAgICB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQsXHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxyXG4gICAgICAgIG5hdmlnYXRlVG9OZXh0LFxyXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxyXG4gICAgICAgIG5hdmlnYXRlVG9TdGFydCxcclxuICAgICAgICBuYXZpZ2F0ZVRvRW5kLFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIGZvciB0aGUgc2VsZWN0aW9uIG9mIGEgbWFuYWdlZCBjaGlsZCBieSB0eXBpbmcgdGhlIGdpdmVuIHRleHQgYXNzb2NpYXRlZCB3aXRoIGl0LlxyXG4gKlxyXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcclxuICAgIC8vIEZvciB0eXBlYWhlYWQsIGtlZXAgdHJhY2sgb2Ygd2hhdCBvdXIgY3VycmVudCBcInNlYXJjaFwiIHN0cmluZyBpcyAoaWYgd2UgaGF2ZSBvbmUpXHJcbiAgICAvLyBhbmQgYWxzbyBjbGVhciBpdCBldmVyeSAxMDAwIG1zIHNpbmNlIHRoZSBsYXN0IHRpbWUgaXQgY2hhbmdlZC5cclxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cclxuICAgIC8vIEFuZCwgZm9yIHRoZSB1c2VyJ3Mgc2FrZSwgbGV0IHRoZW0ga25vdyB3aGVuIHRoZWlyIHR5cGVhaGVhZCBjYW4ndCBtYXRjaCBhbnl0aGluZyBhbnltb3JlXHJcbiAgICBjb25zdCBbY3VycmVudFR5cGVhaGVhZCwgc2V0Q3VycmVudFR5cGVhaGVhZCwgZ2V0Q3VycmVudFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcclxuICAgIGNvbnN0IHNvcnRlZFR5cGVhaGVhZEluZm8gPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgW2ludmFsaWRUeXBlYWhlYWQsIHNldEludmFsaWRUeXBlYWhlYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxyXG4gICAgLy8gRXNzZW50aWFsbHksIHdoZW4gYWN0aXZlLCBpZ25vcmUgZnVydGhlciBrZXlzIFxyXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSB3YWl0aW5nIGZvciBhIENvbXBvc2l0aW9uRW5kIGV2ZW50XHJcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBCZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50cyBmaXJlICphZnRlcioga2V5ZG93biBldmVudHMgXHJcbiAgICAvLyAoYnV0IHdpdGhpbiB0aGUgc2FtZSB0YXNrLCB3aGljaCwgVE9ETywgY291bGQgYmUgYnJvd3Nlci1kZXBlbmRlbnQpLFxyXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cclxuICAgIGNvbnN0IFtuZXh0VHlwZWFoZWFkQ2hhciwgc2V0TmV4dFR5cGVhaGVhZENoYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHR5cGVhaGVhZCA9PiAoKHR5cGVhaGVhZCA/PyBcIlwiKSArIG5leHRUeXBlYWhlYWRDaGFyKSk7XHJcbiAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtuZXh0VHlwZWFoZWFkQ2hhcl0pO1xyXG4gICAgY29uc3QgY29tcGFyYXRvciA9IHVzZVN0YWJsZUNhbGxiYWNrKChsaHMsIHJocykgPT4ge1xyXG4gICAgICAgIGxldCBjb21wYXJlO1xyXG4gICAgICAgIC8vIEZvciB0aGUgcHVycG9zZXMgb2YgdHlwZWFoZWFkLCBvbmx5IGNvbXBhcmUgYSBzdHJpbmcgb2YgdGhlIHNhbWUgc2l6ZSBhcyBvdXIgY3VycmVudGx5IHR5cGVkIHN0cmluZy5cclxuICAgICAgICAvLyBCeSBub3JtYWxpemluZyB0aGVtIGZpcnN0LCB3ZSBlbnN1cmUgdGhpcyBieXRlLWJ5LWJ5dGUgaGFuZGxpbmcgb2YgcmF3IGNoYXJhY3RlciBkYXRhIHdvcmtzIG91dCBva2F5LlxyXG4gICAgICAgIGxldCBzYWZlTGhzID0gbGhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcclxuICAgICAgICBsZXQgc2FmZVJocyA9IHJocy50ZXh0Lm5vcm1hbGl6ZShcIk5GRFwiKS5zdWJzdHIoMCwgc2FmZUxocy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChjb2xsYXRvcilcclxuICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb21wYXJlID0gc2FmZUxocy50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoc2FmZVJocy50b0xvd2VyQ2FzZSgpID8/IFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBjb21wYXJlO1xyXG4gICAgfSk7XHJcbiAgICAvLyBIYW5kbGUgY2hhbmdlcyBpbiB0eXBlYWhlYWQgdGhhdCBjYXVzZSBjaGFuZ2VzIHRvIHRoZSB0YWJiYWJsZSBpbmRleFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFR5cGVhaGVhZCAmJiBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBzb3J0ZWRUeXBlYWhlYWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGNvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBoYXMgdHlwZWQgYW4gZW50cnkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAvLyAob3IgbW9yZSBzcGVjaWZpY2FsbHkgXCJmb3Igd2hpY2ggdGhlcmUgaXMgbm8gZW50cnkgdGhhdCBzdGFydHMgd2l0aCB0aGF0IGlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICBXZSBrbm93IHJvdWdobHkgd2hlcmUsIGluIHRoZSBzb3J0ZWQgYXJyYXkgb2Ygc3RyaW5ncywgb3VyIG5leHQgdHlwZWFoZWFkIGxvY2F0aW9uIGlzLlxyXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cclxuICAgICAgICAgICAgICAgICAgVG8gY29udmVydCBvdXIgc29ydGVkIGluZGV4IHRvIHRoZSB1bnNvcnRlZCBpbmRleCB3ZSBuZWVkLCB3ZSBoYXZlIHRvIGZpbmQgdGhlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgdGhhdCBtYXRjaGVzIHVzICphbmQqIChpZiBhbnkgc3VjaCBleGlzdCkgaXMgKmFmdGVyKiBvdXIgY3VycmVudCBzZWxlY3Rpb24uXHJcblxyXG4gICAgICAgICAgICAgICAgICBJbiBvdGhlciB3b3JkcywgdGhlIG9ubHkgd2F5IHR5cGVhaGVhZCBtb3ZlcyBiYWNrd2FyZHMgcmVsYXRpdmUgdG8gb3VyIGN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24gaXMgaWYgdGhlIG9ubHkgb3RoZXIgb3B0aW9uIGlzIGJlaGluZCB1cy5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEl0J3Mgbm90IHNwZWNpZmllZCBpbiBXQUktQVJJQSB3aGF0IHRvIGRvIGluIHRoYXQgY2FzZS4gIEkgc3VwcG9zZSB3cmFwIGJhY2sgdG8gdGhlIHN0YXJ0P1xyXG4gICAgICAgICAgICAgICAgICBUaG91Z2ggdGhlcmUncyBhbHNvIGEgY2FzZSBmb3IganVzdCBnb2luZyB1cHdhcmRzIHRvIHRoZSBuZWFyZXN0IHRvIHByZXZlbnQganVtcGluZXNzLlxyXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxyXG4gICAgICAgICAgICAgICAgICBJIGR1bm5vLiBHb2luZyBiYWNrIHRvIHRoZSBzdGFydCBpcyB0aGUgc2ltcGxpc3QgdGhvdWdoLlxyXG5cclxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcclxuICAgICAgICAgICAgICAgICAgc2NhbiBiYWNrd2FyZHMgYW5kIGZvcndhcmRzIHRocm91Z2ggYWxsIGFkamFjZW50IGVudHJpZXMgdGhhdCBhbHNvIGNvbXBhcmUgZXF1YWxseSBzbyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgIHdlIGNhbiBmaW5kIHRoZSBvbmUgd2hvc2UgYHVuc29ydGVkSW5kZXhgIGlzIHRoZSBsb3dlc3QgYW1vbmdzdCBhbGwgb3RoZXIgZXF1YWwgc3RyaW5nc1xyXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxyXG5cclxuICAgICAgICAgICAgICAgICAgVE9ETzogVGhlIGJpbmFyeSBzZWFyY2ggc3RhcnRzIHRoaXMgb2ZmIHdpdGggYSBzb2xpZCBPKGxvZyBuKSwgYnV0IG9uZS1jaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcclxuICAgICAgICAgICAgICAgICAgTyhuKmxvZyBuKS4gVGhpcyBpcyBhbm5veWluZyBidXQgcHJvYmFibHkgbm90IGVhc2lseSBzb2x2YWJsZT8gVGhlcmUgY291bGQgYmUgYW5cclxuICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uIGZvciBvbmUtY2hhcmFjdGVyIHN0cmluZ3MsIGJ1dCB0aGF0J3MganVzdCBraWNraW5nIHRoZSBjYW4gZG93blxyXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBhcmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBjYW5kaWRhdGVzJyBwb3NpdGlvbnMgaW4gYm90aCBvdXIgc29ydGVkIGFycmF5IGFuZCB0aGUgdW5zb3J0ZWQgRE9NLlxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4QWxsID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSB0d28gYXJlIG9ubHkgc2V0IGZvciBlbGVtZW50cyB0aGF0IGFyZSBhaGVhZCBvZiB1cywgYnV0IHRoZSBwcmluY2lwbGUncyB0aGUgc2FtZSBvdGhlcndpc2VcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCZXN0Rml0ID0gKHUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSB1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQpICYmIHUgPiBnZXRJbmRleCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAtLWk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5kZXgoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2xvd2VzdFNvcnRlZEluZGV4TmV4dF0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleEFsbF0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFR5cGVhaGVhZF0pO1xyXG4gICAgY29uc3QgdXNlVHlwZWFoZWFkTmF2aWdhdGlvblByb3BzID0gKHApID0+IHA7XHJcbiAgICBjb25zdCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyB0ZXh0LCAuLi5pIH0pID0+IHtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGVyZSB0byBpbnNlcnQgdGhpcyBpdGVtLlxyXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSBhbGwgaW5kZXggdmFsdWVzIHNob3VsZCBiZSB1bmlxdWUsIHRoZSByZXR1cm5lZCBzb3J0ZWRJbmRleFxyXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGFsd2F5cyByZWZlciB0byBhIG5ldyBsb2NhdGlvbiAoaS5lLiBiZSBuZWdhdGl2ZSkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgc29ydGVkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCB0ZXh0LCBjb21wYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4IDwgMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc29ydGVkSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZSgtc29ydGVkSW5kZXggLSAxLCAwLCB7IHRleHQsIHVuc29ydGVkSW5kZXg6IGkuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdW5tb3VudGluZywgZmluZCB3aGVyZSB3ZSB3ZXJlIGFuZCByZW1vdmUgb3Vyc2VsdmVzLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFnYWluLCB3ZSBzaG91bGQgYWx3YXlzIGZpbmQgb3Vyc2VsdmVzIGJlY2F1c2UgdGhlcmUgc2hvdWxkIGJlIG5vIGR1cGxpY2F0ZSB2YWx1ZXMgaWYgZWFjaCBpbmRleCBpcyB1bmlxdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnRlZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgdGV4dCwgY29tcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc29ydGVkSW5kZXggPj0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LnNwbGljZShzb3J0ZWRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0ZXh0XSk7XHJcbiAgICAgICAgY29uc3QgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHMgPSBmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBlbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25TdGFydCA9IChlKSA9PiB7IHNldEltZUFjdGl2ZSh0cnVlKTsgfTtcclxuICAgICAgICAgICAgY29uc3Qgb25Db21wb3NpdGlvbkVuZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0SW1lQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZUFjdGl2ZSA9IGdldEltZUFjdGl2ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGUua2V5O1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSAmJiBlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IHNwbGl0IFVURi0xNiBzdXJyb2dhdGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUeXBlYWhlYWQodCA9PiB0ID09PSBudWxsID8gbnVsbCA6IFsuLi50XS5yZXZlcnNlKCkuc2xpY2UoMSkucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBrZXkgcHJvcGVydHkgcmVwcmVzZW50cyB0aGUgdHlwZWQgY2hhcmFjdGVyIE9SIHRoZSBcIm5hbWVkIGtleSBhdHRyaWJ1dGVcIiBvZiB0aGUga2V5IHByZXNzZWQuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGVyZSdzIG5vIGRlZmluaXRlIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlLCBidXQgZm9yIGFsbCBpbnRlbnRzIGFuZCBwdXJwb3Nlc1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG5vIG9uZS1jaGFyYWN0ZXIgbmFtZXMsIGFuZCB0aGVyZSBhcmUgbm8gbm9uLUFTQ0lJLWFscGhhIG5hbWVzLlxyXG4gICAgICAgICAgICAgICAgLy8gVGh1cywgYW55IG9uZS1jaGFyYWN0ZXIgb3Igbm9uLUFTQ0lJIHZhbHVlIGZvciBga2V5YCBpcyAqYWxtb3N0IGNlcnRhaW5seSogYSB0eXBlZCBjaGFyYWN0ZXIuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0NoYXJhY3RlcktleSA9IChrZXkubGVuZ3RoID09PSAxIHx8ICEvXltBLVphLXpdLy50ZXN0KGtleSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hhcmFjdGVyS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcIiBcIiAmJiAoZ2V0Q3VycmVudFR5cGVhaGVhZCgpID8/IFwiXCIpLnRyaW0oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBiZWNhdXNlIGEgc3BhY2ViYXIgY2FuJ3QgZXZlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhdGUgYSB0eXBlYWhlYWQsIG9ubHkgY29udGludWUgb25lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoU3BlY2lmaWNhbGx5LCBsZXQgdGhlIGV2ZW50IGNvbnRpbnVlIHByb3BhZ2F0aW9uIGluIHRoaXMgY2FzZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogV29uJ3QgYmUgdHJ1ZSBmb3IgdGhlIGZpcnN0IGtleWRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gYmVmb3JlIHVzZUxheW91dEVmZmVjdCBpcyBjYWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWN0dWFsbHkgYXBwbHkgdGhlIGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSZWZFbGVtZW50UHJvcHMoeyBvbktleURvd24sIG9uQ29tcG9zaXRpb25TdGFydCwgb25Db21wb3NpdGlvbkVuZCwgfSksIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZFByb3BzXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLFxyXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyxcclxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxyXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXHJcbiAqXHJcbiAqIEl0J3MgdXNlZCBoZXJlIHRvIHF1aWNrbHkgZmluZCBhIGdvb2Qgc3BvdCB0byBzdGFydCBzZWFyY2hpbmcgZm9yIG91ciBuZXh0IHR5cGVhaGVhZCBjYW5kaWRhdGUuXHJcbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcclxuICogQHBhcmFtIHdhbnRlZCBUaGUgdmFsdWUgeW91J2QgbGlrZSB0byBmaW5kXHJcbiAqIEBwYXJhbSBjb21wYXJhdG9yIENvbXBhcmVzIGB3YW50ZWRgIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgaW4gYGFycmF5YFxyXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXHJcbiAqIFRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGlzIG51bWJlciwgbWludXMgb25lLCBpcyB3aGVyZSBgd2FudGVkYCAqd291bGQqIGJlIGZvdW5kIGlmIGl0ICp3YXMqIGluIGBhcnJheWBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xyXG4gICAgdmFyIGZpcnN0SW5kZXggPSAwO1xyXG4gICAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICB2YXIgdGVzdEluZGV4ID0gKGxhc3RJbmRleCArIGZpcnN0SW5kZXgpID4+IDE7XHJcbiAgICAgICAgdmFyIGNvbXBhcmlzb25SZXN1bHQgPSBjb21wYXJhdG9yKHdhbnRlZCwgYXJyYXlbdGVzdEluZGV4XSk7XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSB0ZXN0SW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSB0ZXN0SW5kZXggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRlc3RJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLWZpcnN0SW5kZXggLSAxO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlUm92aW5nVGFiSW5kZXggfSBmcm9tIFwiLi91c2Utcm92aW5nLXRhYmluZGV4XCI7XHJcbmltcG9ydCB7IHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24gfSBmcm9tIFwiLi91c2Uta2V5Ym9hcmQtbmF2aWdhdGlvblwiO1xyXG4vKipcclxuICpcclxuICogVE9ETzogVGhpcyB0YWJsZSB3YXMgc2NyYXBwZWQgd2hlbiB0aGlzIHdhcyBjaGFuZ2VkIHRvIGp1c3QgYWNjZXB0IGEgY29sbGF0b3IgZGlyZWN0bHksXHJcbiAqIGJ1dCBpdCdzIG5vdCBiYWQgZm9yIGEgY29sbGF0aW9uIGNyYXNoIGNvdXJzZSBhbmQgSSBtaWdodCB1c2UgaXQgYWdhaW4uXHJcbiAqIEV2ZW4ganVzdCBhcyBhIFwidGhpcyBpcyB3aHkgaXQncyBpbXBvcnRhbnQgYW5kIGdvb2QgdG8gdXNlIHRoZXNlIHRoaW5nc1wiIHRoaW5nLlxyXG4gKlxyXG4gKiB8TGFuZy58VGFyZ2V0fFVzZXIgaW5wdXR8YGJhc2VgfGBhY2NlbnRgfGBjYXNlYHxgdmFyaWFudGB8XHJcbiAqIHwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfFxyXG4gKiB8RU58SGl8SGl84pyFfOKchXzinIV84pyFfFxyXG4gKiB8RU58SGl877yo772JfOKchXzinIV84pyFfOKdjHxcclxuICogfEVOfEhpfGhpfOKchXzinIV84p2MfOKdjHxcclxuICogfEVOfEhpfEjDr3zinIV84p2MfOKdjHzinYx8XHJcbiAqIHxFTnxIaXxCeWV84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8REF8w6V8YWF84pyFfOKchXzinIV84p2MfFxyXG4gKiB8REF8w6V8QUF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8REF8w6V8QWF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8RU58w6V8YWF84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8REF8w6V8YUF84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8RU58w6V8YXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxEQXzDpXxhfOKchXzinIV84p2MfOKdjHxcclxuICogfEpQfO+qqnznnYB84pyFfOKchXzinIV84pyFfFxyXG4gKiB8SlB844KrfO+9tnzinIV84pyFfOKchXzinIV8XHJcbiAqIHxKUHzjgqt844GLfOKchXzinIV84pyFfOKdjHxcclxuICogfEpQfOOCq3zjg7V84pyFfOKchXzinIV84p2MfFxyXG4gKiB8SlB844KrfOOLlXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxKUHzjgqt844KsfOKchXzinYx84p2MfOKdjHxcclxuICogfEpQfOOCq3zlipt84p2MfOKdjHzinYx84p2MfFxyXG4gKiB8Wkh857SFfOe6onzinYx84p2MfOKdjHzinYx8XHJcbiAqXHJcbiAqXHJcbiAqIChOb3RlIHRvIHNlbGY6IEF0IHNvbWUgcG9pbnQsIHRoaXMgZmlsZSB3aWxsIHByb2JhYmx5IGJlIG5vcm1hbGl6ZWRcclxuICogYnkgc29tZWJvZHkgYW5kIO+qqiB3aWxsIHR1cm4gYmFjayBpbnRvIOedgC4pXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBkdW1teSA9IG51bGw7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIHByb3BlciBrZXlib2FyZCBuYXZpZ2F0aW9uIGZvciBjb21wb25lbnRzIGxpa2UgbGlzdGJveGVzLCBidXR0b24gZ3JvdXBzLCBtZW51cywgZXRjLlxyXG4gKlxyXG4gKiBJbiB0aGUgZG9jdW1lbnQgb3JkZXIsIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgXCJmb2N1c2VkXCIgb3IgXCJ0YWJiYWJsZVwiIGVsZW1lbnQsIG1ha2luZyBpdCBhY3QgbW9yZSBsaWtlIG9uZSBjb21wbGV0ZSB1bml0IGluIGNvbXBhcmlzb24gdG8gZXZlcnl0aGluZyBhcm91bmQgaXQuXHJcbiAqIE5hdmlnYXRpbmcgZm9yd2FyZHMvYmFja3dhcmRzIGNhbiBiZSBkb25lIHdpdGggdGhlIGFycm93IGtleXMsIEhvbWUvRW5kIGtleXMsIG9yIGFueSBhbnkgdGV4dCBmb3IgdHlwZWFoZWFkIHRvIGZvY3VzIHRoZSBuZXh0IGl0ZW0gdGhhdCBtYXRjaGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24gfSkge1xyXG4gICAga2V5TmF2aWdhdGlvbiA/Pz0gXCJlaXRoZXJcIjtcclxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XHJcbiAgICAvLyBXaGF0IGl0IGlzLCBhbmQgd2hldGhlciwgd2hlbiB3ZSByZW5kZXIgdGhpcyBjb21wb25lbnQgYW5kIGl0J3MgY2hhbmdlZCwgdG8gYWxzbyBmb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBtYWRlIHRhYmJhYmxlLlxyXG4gICAgY29uc3QgW3RhYmJhYmxlSW5kZXgsIHNldFRhYmJhYmxlSW5kZXgsIGdldFRhYmJhYmxlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzZXRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaW5kZXgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgeyBjaGlsZENvdW50LCBtYW5hZ2VkQ2hpbGRyZW4sIGluZGljZXNCeUVsZW1lbnQsIHVzZVJvdmluZ1RhYkluZGV4UHJvcHMsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIGZvY3VzU2VsZiB9ID0gdXNlUm92aW5nVGFiSW5kZXgoeyB0YWJiYWJsZUluZGV4OiB0YWJiYWJsZUluZGV4IH0pO1xyXG4gICAgY29uc3QgeyBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleDogZ2V0VGFiYmFibGVJbmRleCwgc2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQ6IDEwMDAgfSk7XHJcbiAgICBjb25zdCB7IG5hdmlnYXRlVG9FbmQsIG5hdmlnYXRlVG9JbmRleCwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9QcmV2LCBuYXZpZ2F0ZVRvU3RhcnQsIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCwgdXNlTGluZWFyTmF2aWdhdGlvblByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgZ2V0SW5kZXg6IGdldFRhYmJhYmxlSW5kZXgsIHNldEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW4gfSk7XHJcbiAgICAvLyBBbnkgdGltZSB0aGUgdGFiYmFibGUgaW5kZXggY2hhbmdlcywgbm90aWZ5IHRoZSBwcmV2aW91c1xyXG4gICAgLy8gYW5kIG5leHQgY2hpbGQgYXMgc3VjaCwgYW5kIG9wdGlvbmFsbHkgZm9jdXMgdGhhdCBuZXh0IG9uZS5cclxuICAgIC8qdXNlTGF5b3V0RWZmZWN0KChbcHJldlRhYmJhYmxlSW5kZXhdKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE5vdGlmeWluZyBjaGlsZHJlbiBvZiBpbmRleCBjaGFuZ2UgZnJvbSAke3ByZXZUYWJiYWJsZUluZGV4fSB0byAke3RhYmJhYmxlSW5kZXh9YCk7XHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuW3ByZXZUYWJiYWJsZUluZGV4XT8uc2V0VGFiYmFibGUoZmFsc2UpO1xyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XT8uc2V0VGFiYmFibGUodHJ1ZSlcclxuICAgIH0sIFt0YWJiYWJsZUluZGV4XSkqL1xyXG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHAxID0gdXNlTGluZWFyTmF2aWdhdGlvblByb3BzKHByb3BzKTtcclxuICAgICAgICBjb25zdCBwMiA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25Qcm9wcyhwMSk7XHJcbiAgICAgICAgbGV0IHJldCA9IHVzZVJvdmluZ1RhYkluZGV4UHJvcHMocDIpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkKGluZm8pO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCgpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcywgdGFiYmFibGUgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQoaW5mbyk7XHJcbiAgICAgICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHModXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMoeyBvbkNsaWNrOiByb3ZlVG9TZWxmIH0pKSksIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJvdmVUb1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTsgfSwgW10pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyxcclxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHM6IHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZSxcclxuICAgICAgICAgICAgLy9yb3ZlVG9TZWxmLFxyXG4gICAgICAgICAgICAvL2VsZW1lbnRcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCwgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkLCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBuYXZpZ2F0ZVRvSW5kZXhdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyxcclxuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLFxyXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXHJcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcclxuICAgICAgICB0YWJiYWJsZUluZGV4LFxyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxyXG4gICAgICAgIG5hdmlnYXRlVG9OZXh0LFxyXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxyXG4gICAgICAgIG5hdmlnYXRlVG9TdGFydCxcclxuICAgICAgICBuYXZpZ2F0ZVRvRW5kLFxyXG4gICAgICAgIGZvY3VzU2VsZlxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjIuMFxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHt9IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNDb250ZW50RWRpdGFibGUgPSBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcblxuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHtcbiAgICByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICB9IC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG5cblxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAvLyAgeWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAvLyAgb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuXG5cbiAgaWYgKChub2RlLm5vZGVOYW1lID09PSAnQVVESU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdWSURFTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnKSAmJiBub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IG5vZGUub3duZXJEb2N1bWVudDtcblxuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcblxuICB2YXIgcmFkaW9TZXQ7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xuXG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xuXG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIGRpc3BsYXlDaGVjaykge1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucy5kaXNwbGF5Q2hlY2spIHx8XG4gIC8qIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c2VkICAqL1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5kaWRhdGUsIGkpIHtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlcy5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5ub2RlO1xuICB9KS5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsImltcG9ydCBcImJsb2NraW5nLWVsZW1lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IFwid2ljZy1pbmVydFwiO1xyXG5jb25zdCBibG9ja2luZ0VsZW1lbnRzID0gZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHM7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYW4gZWxlbWVudCB0byB0cmFwIGZvY3VzIGJ5IGFwcGx5aW5nIHRoZSBcImluZXJ0XCIgYXR0cmlidXRlIHRvIGFsbCBzaWJsaW5nLCBhdW50LCBhbmQgdW5jbGUgbm9kZXMuXHJcbiAqXHJcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyBjb25zZWN1dGl2ZSBjYWxscyB3aXRoIGEgbG9vc2VseSBhcHBsaWVkIHN0YWNrIG9wZXJhdGlvblxyXG4gKiAoc3BlY2lmaWNhbGx5IHZpYSBgYmxvY2tpbmdFbGVtZW50c2AsIHdpdGggYSBzbWFsbCBwb2x5ZmlsbCBiZWNhdXNlIEknbSBub3Qgc3VyZSBob3cgbG9uZ1xyXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxyXG4gKiBAcGFyYW0gdGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoL3BvcCB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZ0VsZW1lbnRzIHN0YWNrLlxyXG4gICAgICovXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBibG9ja2luZ0VsZW1lbnRzLnJlbW92ZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0YXJnZXRdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBibG9ja2luZ0VsZW1lbnRzLnRvcDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYmxvY2tpbmctZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGlzRm9jdXNhYmxlIH0gZnJvbSBcInRhYmJhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgZ2V0VG9wRWxlbWVudCwgdXNlQmxvY2tpbmdFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWJsb2NraW5nLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuY29uc3QgZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvID0gbmV3IE1hcCgpO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZSB9KSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgY29uc3QgeyBnZXRMYXN0QWN0aXZlRWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCgpO1xyXG4gICAgLy8gV2hlbiB0aGUgdHJhcCBiZWNvbWVzIGFjdGl2ZSwgYmVmb3JlIHdlIGxldCB0aGUgYmxvY2tpbmdFbGVtZW50cyBob29rIHJ1bixcclxuICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdGV2ZXIncyBjdXJyZW50bHkgZm9jdXNlZCBhbmQgc2F2ZSBpdC5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRvIHdoYXRldmVyJ3MgY3VycmVudGx5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICogQW55IHRpbWUgd2UgYWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgdHJhcCxcclxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXHJcbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcclxuICAgICAqIHRyYWNrZWQgaW4gZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvIGlmIG5vdClcclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5yZWFzb25zP1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1tb2RhbFwiOiB0cmFwQWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSwgdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlRm9jdXNUcmFwUHJvcHMsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBjb250YWluZWQgd2l0aGluIHRoZSBnaXZlbiBub2RlLCBvciBudWxsIGlmIG5vbmUgYXJlIGZvdW5kLlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgeyBhY2NlcHROb2RlOiAobm9kZSkgPT4gKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGlzRm9jdXNhYmxlKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCkgfSk7XHJcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IHRyZWVXYWxrZXIuZmlyc3RDaGlsZCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Rm9jdXNhYmxlO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb2N1cy10cmFwLmpzLm1hcCIsbnVsbCwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5leHBvcnQgY29uc3QgRXZlbnREZXRhaWwgPSBTeW1ib2woXCJldmVudC1kZXRhaWxcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiBlbmhhbmNlRXZlbnQoZSwgZGV0YWlsKSB7XHJcbiAgICBsZXQgZXZlbnQgPSBlO1xyXG4gICAgZXZlbnRbRXZlbnREZXRhaWxdID0gZGV0YWlsO1xyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG59XHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxldHRpbmcgY2hpbGRyZW4ga25vdyB3aGVuIHRoZXkgYXJlIG9yIGFyZSBub3QgdGhlXHJcbiAqIGN1cnJlbnQgc2VsZWN0ZWQvZXhwYW5kZWQvZm9jdXNlZC93aGF0ZXZlciBjaGlsZC5cclxuICpcclxuICogQXV0b21hdGljYWxseSBoYW5kbGVzIHdoZW4gY2hpbGRyZW4gYXJlIG1vdW50ZWQgJiB1bm1vdW50ZWQgYW5kIHN1Y2guXHJcbiAqXHJcbiAqIEBwYXJhbSBhY3RpdmF0ZWRJbmRleCBXaGF0IGluZGV4IHRoZSBjdXJyZW50IHNlbGVjdGVkIChldGMuKSBjaGlsZCBpc1xyXG4gKiBAcGFyYW0gbGVuZ3RoIEhvdyBtYW55IGNoaWxkcmVuIGV4aXN0IChhcyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKVxyXG4gKiBAcGFyYW0gc2V0RmxhZyBBIGZ1bmN0aW9uIHRoYXQgcHJvYmFibHkgbG9va3MgbGlrZSAoaSwgZmxhZykgPT4gbWFuYWdlZENoaWxkcmVuW2ldLnNldE9wZW4oZmxhZylcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZEZsYWcoYWN0aXZhdGVkSW5kZXgsIGxlbmd0aCwgc2V0RmxhZykge1xyXG4gICAgLy8gQW55IHRpbWUgYSBuZXcgYWN0aXZhdGVkIGluZGV4IGlzIGdpdmVuLCBcclxuICAgIC8vIGNvbGxhcHNlIHRoZSBvbGQgc2VjdGlvbiBhbmQgZXhwYW5kIHRoZSBuZXcgb25lLlxyXG4gICAgY29uc3QgW3ByZXZBY3RpdmF0ZWRJbmRleCwgc2V0UHJldkFjdGl2YXRlZEluZGV4LCBnZXRQcmV2QWN0aXZhdGVkSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJldkNoaWxkQ291bnQsIHNldFByZXZDaGlsZENvdW50LCBnZXRQcmV2Q2hpbGRDb3VudF0gPSB1c2VTdGF0ZShsZW5ndGgpO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBDbG9zZSBhbnkgbmV3IHBhbmVscyB0aGF0IG1pZ2h0IGhhdmUgbW91bnRlZCAodGhlaXIgb3BlbiBwcm9wIGlzIG51bGwgcmlnaHQgbm93IGlmIHNvKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAoZ2V0UHJldkNoaWxkQ291bnQoKSA/PyAwKTsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHNldEZsYWcoaSwgaSA9PT0gYWN0aXZhdGVkSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRQcmV2Q2hpbGRDb3VudChsZW5ndGgpO1xyXG4gICAgICAgIC8vIENvbGxhcHNlIHRoZSBjdXJyZW50bHkgYWN0aXZhdGVkIHBhbmVsXHJcbiAgICAgICAgY29uc3QgcHJldkFjdGl2YXRlZEluZGV4ID0gZ2V0UHJldkFjdGl2YXRlZEluZGV4KCk7XHJcbiAgICAgICAgaWYgKHByZXZBY3RpdmF0ZWRJbmRleCAhPSBudWxsICYmIHByZXZBY3RpdmF0ZWRJbmRleCA8PSBsZW5ndGgpXHJcbiAgICAgICAgICAgIHNldEZsYWcocHJldkFjdGl2YXRlZEluZGV4LCBmYWxzZSk7XHJcbiAgICAgICAgLy8gRXhwYW5kIHRoZSBuZXh0IHBhbmVsXHJcbiAgICAgICAgaWYgKGFjdGl2YXRlZEluZGV4ICE9IG51bGwgJiYgYWN0aXZhdGVkSW5kZXggPD0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldEZsYWcoYWN0aXZhdGVkSW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgICBzZXRQcmV2QWN0aXZhdGVkSW5kZXgoYWN0aXZhdGVkSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmF0ZWRJbmRleCwgbGVuZ3RoXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YXRlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGV0YWlsLCBlbmhhbmNlRXZlbnQgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5sZXQgcHVsc2UgPSAoXCJ2aWJyYXRlXCIgaW4gbmF2aWdhdG9yKSA/ICgoKSA9PiBuYXZpZ2F0b3IudmlicmF0ZSgxMCkpIDogKCgpID0+IHsgfSk7XHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGVuYWJsZS9kaXNhYmxlIGJ1dHRvbiB2aWJyYXRpb24gcHVsc2VzIG9uIGFuIGFwcC13aWRlIHNjYWxlLlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcnVuIHdoZW4gYSBidXR0b24gaXMgdGFwcGVkLlxyXG4gKiAoRGVmYXVsdCBpcyBgKCkgPT4gbmF2aWdhdG9yLnZpYnJhdGUoMTApYCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgaXQsIGEgbm9vcCBvdGhlcndpc2UpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QnV0dG9uVmlicmF0ZShmdW5jKSB7XHJcbiAgICBwdWxzZSA9IGZ1bmM7XHJcbn1cclxuZnVuY3Rpb24gZXhjbHVkZXModGFyZ2V0LCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PSBcImV4Y2x1ZGVcIilcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiAhIWV4Y2x1ZGU/Llt0YXJnZXRdO1xyXG59XHJcbi8qKlxyXG4gKiBFYXN5IHdheSB0byBcInBvbHlmaWxsXCIgYnV0dG9uLWxpa2UgaW50ZXJhY3Rpb25zIG9udG8sIGUuZy4sIGEgZGl2LlxyXG4gKlxyXG4gKiBBZGRzIGNsaWNrLCBzcGFjZSBvbiBrZXlEb3duLCBhbmQgZW50ZXIgb24ga2V5VXAsIGFzIHdlbGwgYXMgaGFwdGljXHJcbiAqIGZlZWRiYWNrIHZpYSBhIG1vbWVudGFyeSB2aWJyYXRpb24gcHVsc2Ugd2hlbiB0aGVyZSdzIGFuIG9uQ2xpY2sgaGFuZGxlciBwcm92aWRlZFxyXG4gKiAodGhpcyBjYW4gYmUgZGlzYWJsZWQgYXBwLXdpZGUgd2l0aCBgc2V0QnV0dG9uVmlicmF0ZWApLlxyXG4gKlxyXG4gKiBJbiBhZGRpdGlvbiwgd2hlbiB0aGUgQ1NTIGA6YWN0aXZlYCBwc2V1ZG8tY2xhc3Mgd291bGQgYXBwbHkgdG8gYSBub3JtYWwgYnV0dG9uXHJcbiAqIChpLmUuIHdoZW4gaG9sZGluZyB0aGUgc3BhY2ViYXIgb3IgZHVyaW5nIG1vdXNlZG93biksIGB7IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IFwidHJ1ZVwiIH1gXHJcbiAqIGlzIGFkZGVkIHRvIHRoZSBwcm9wcy4gIFlvdSBjYW4gZWl0aGVyIGxldCBpdCBwYXNzIHRocm91Z2ggYW5kIHN0eWxlIGl0IHRocm91Z2ggbmV3IENTUyxcclxuICogb3IgaW5zcGVjdCB0aGUgcmV0dXJuZWQgcHJvcHMgZm9yIGl0IGFuZCBhZGQgZS5nLiBhbiBgLmFjdGl2ZWAgY2xhc3MgZm9yIGV4aXN0aW5nIENTU1xyXG4gKlxyXG4gKiBAcGFyYW0gb25DbGlja1xyXG4gKiBAcGFyYW0gZXhjbHVkZSBXaGV0aGVyIHRoZSBwb2x5ZmlsbCBzaG91bGQgYXBwbHkgKGNhbiBzcGVjaWZ5IGZvciBzcGVjaWZpYyBpbnRlcmFjdGlvbnMpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMob25DbGlja1N5bmMsIGV4Y2x1ZGUpIHtcclxuICAgIC8vdHlwZSBFID0gRXYgZXh0ZW5kcyBoLkpTWC5UYXJnZXRlZEV2ZW50PGluZmVyIEUsIGFueT4/IEUgOiBFdmVudFRhcmdldDtcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbktleVVwID0gZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiICYmIG9uQ2xpY2tTeW5jKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb25DbGlja1N5bmMoZSk7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uTW91c2VEb3duID0gZXhjbHVkZXMoXCJjbGlja1wiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKVxyXG4gICAgICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25CbHVyID0gKGUpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uTW91c2VVcCA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiBvbkJsdXI7XHJcbiAgICBjb25zdCBvbk1vdXNlT3V0ID0gZXhjbHVkZXMoXCJjbGlja1wiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IG9uQmx1cjtcclxuICAgIGNvbnN0IG9uS2V5RG93biA9IGV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkgJiYgZXhjbHVkZXMoXCJlbnRlclwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiICYmIG9uQ2xpY2tTeW5jICYmICFleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IGFjdHVhbGx5IGFjdGl2YXRlIGl0IG9uIGEgc3BhY2Uga2V5ZG93blxyXG4gICAgICAgICAgICAvLyBidXQgd2UgZG8gcHJldmVudERlZmF1bHQgdG8gc3RvcCB0aGUgcGFnZSBmcm9tIHNjcm9sbGluZy5cclxuICAgICAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIgJiYgb25DbGlja1N5bmMgJiYgIWV4Y2x1ZGVzKFwiZW50ZXJcIiwgZXhjbHVkZSkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvbkNsaWNrU3luYyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25DbGljazIgPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKG9uQ2xpY2tTeW5jICYmICFleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpKSB7XHJcbiAgICAgICAgICAgIHB1bHNlKCk7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tTeW5jKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25DbGljazogb25DbGljazIsIG9uQmx1ciwgb25Nb3VzZURvd24sIG9uTW91c2VVcCwgb25Nb3VzZU91dCwgLi4ueyBcImRhdGEtcHNldWRvLWFjdGl2ZVwiOiBhY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9IH0sIHByb3BzKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvbih7IHRhZywgcHJlc3NlZCwgb25DbGljayB9KSB7XHJcbiAgICBmdW5jdGlvbiB1c2VBcmlhQnV0dG9uUHJvcHMoeyBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCwgdGFiSW5kZXgsIHJvbGUsIC4uLnAgfSkge1xyXG4gICAgICAgIGNvbnN0IHByb3BzID0gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMoKGUpID0+IG9uQ2xpY2s/LihlbmhhbmNlRXZlbnQoZSwgeyBwcmVzc2VkOiBwcmVzc2VkID09IG51bGwgPyBudWxsIDogIXByZXNzZWQgfSkpLCB7XHJcbiAgICAgICAgICAgIHNwYWNlOiB0YWcgPT0gXCJidXR0b25cIiA/IFwiZXhjbHVkZVwiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBlbnRlcjogdGFnID09IFwiYnV0dG9uXCIgPyBcImV4Y2x1ZGVcIiA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY2xpY2s6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KShwKTtcclxuICAgICAgICBjb25zdCBidXR0b25Qcm9wcyA9IHsgcm9sZSwgdGFiSW5kZXgsIFwiYXJpYS1wcmVzc2VkXCI6IGFyaWFQcmVzc2VkID8/IChwcmVzc2VkID09PSB0cnVlID8gXCJ0cnVlXCIgOiBwcmVzc2VkID09PSBmYWxzZSA/IFwiZmFsc2VcIiA6IHVuZGVmaW5lZCkgfTtcclxuICAgICAgICBjb25zdCBkaXZQcm9wcyA9IHsgLi4uYnV0dG9uUHJvcHMsIHRhYkluZGV4OiB0YWJJbmRleCA/PyAwLCByb2xlOiByb2xlID8/IFwiYnV0dG9uXCIgfTtcclxuICAgICAgICBjb25zdCBhbmNob3JQcm9wcyA9IHsgLi4uZGl2UHJvcHMgfTtcclxuICAgICAgICBzd2l0Y2ggKHRhZykge1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShidXR0b25Qcm9wcywgcHJvcHMpO1xyXG4gICAgICAgICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYW5jaG9yUHJvcHMsIHByb3BzKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGRpdlByb3BzLCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VBcmlhQnV0dG9uUHJvcHNcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZE1hbmFnZXIgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtY2hpbGQtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJhbmRvbUlkIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJhbmRvbS1pZFwiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQ2hpbGRGbGFnIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uKHsgZXhwYW5kZWRJbmRleCwgc2V0RXhwYW5kZWRJbmRleCB9KSB7XHJcbiAgICBjb25zdCBbbGFzdEZvY3VzZWRJbmRleCwgc2V0TGFzdEZvY3VzZWRJbmRleCwgZ2V0TGFzdEZvY3VzZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHN0YWJsZVNldEV4cGFuZGVkSW5kZXggPSB1c2VTdGFibGVDYWxsYmFjayhzZXRFeHBhbmRlZEluZGV4ID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsIHVzZU1hbmFnZWRDaGlsZDogdXNlTWFuYWdlZENoaWxkU2VjdGlvbiB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XHJcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcywgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiYmxvY2tcIiwgZ2V0SW5kZXg6IGdldExhc3RGb2N1c2VkSW5kZXgsIHNldEluZGV4OiBzZXRMYXN0Rm9jdXNlZEluZGV4IH0pO1xyXG4gICAgLy8gQW55IHRpbWUgbGlzdCBtYW5hZ2VtZW50IGNoYW5nZXMgdGhlIGZvY3VzZWQgaW5kZXgsIG1hbnVhbGx5IGZvY3VzIHRoZSBjaGlsZFxyXG4gICAgLy8gVE9ETzogQ2FuIHRoaXMgYmUgY3V0P1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobGFzdEZvY3VzZWRJbmRleCAhPSBudWxsICYmIGxhc3RGb2N1c2VkSW5kZXggPj0gMClcclxuICAgICAgICAgICAgbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2xhc3RGb2N1c2VkSW5kZXhdPy5mb2N1cygpO1xyXG4gICAgfSwgW2xhc3RGb2N1c2VkSW5kZXhdKTtcclxuICAgIHVzZUNoaWxkRmxhZyhleHBhbmRlZEluZGV4LCBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMubGVuZ3RoLCAoaSwgb3BlbikgPT4gbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldPy5zZXRPcGVuRnJvbVBhcmVudChvcGVuKSk7XHJcbiAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbiA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW29wZW5Gcm9tUGFyZW50LCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogYm9keVJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VCb2R5UmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRCb2R5SWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1ib2R5LVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgcmFuZG9tSWQ6IGhlYWRSYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlSGVhZFJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtYWNjb3JkaW9uLXNlY3Rpb24taGVhZGVyLVwiIH0pO1xyXG4gICAgICAgIGxldCBvcGVuID0gKChhcmdzLm9wZW4gPz8gb3BlbkZyb21QYXJlbnQpID8/IG51bGwpO1xyXG4gICAgICAgIC8vIFRPRE86IENvbnZlcnQgdG8gdXNlIHVzZU1hbmFnZWRDaGlsZCBzbyB0aGF0IHRoaXMgaG9vayBcclxuICAgICAgICAvLyBpcyBzdGFibGUgd2l0aG91dCAoZGlyZWN0bHkpIGRlcGVuZGluZyBvbiB0aGUgb3BlbiBzdGF0ZS5cclxuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyKHsgdGFnIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7IGVsZW1lbnQ/LmZvY3VzKCk7IH0sIFtlbGVtZW50XSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24oeyBpbmRleDogYXJncy5pbmRleCwgb3Blbjogb3Blbiwgc2V0T3BlbkZyb21QYXJlbnQsIGZvY3VzIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyh7IFtcImFyaWEtZXhwYW5kZWRcIl06IGFyaWFFeHBhbmRlZCwgW1wiYXJpYS1kaXNhYmxlZFwiXTogYXJpYURpc2FibGVkLCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGFyZ3MuaW5kZXgpOyB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE9wZW5Gcm9tUGFyZW50KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWJsZVNldEV4cGFuZGVkSW5kZXgobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KGFyZ3MuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCByZXRBID0gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uQ2xpY2sgfSwgcHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldEIgPSB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXg6IDAgfSwgdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMob25DbGljaykocHJvcHMpKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXQzID0gdXNlTWVyZ2VkUHJvcHMoKSh1c2VIZWFkUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHtcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogKGFyaWFFeHBhbmRlZCA/PyAoISFvcGVuKS50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZGlzYWJsZWRcIjogKGFyaWFEaXNhYmxlZCA/PyAob3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkKSksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udXNlUmVmRWxlbWVudFByb3BzKHVzZU1hbmFnZWRDaGlsZFByb3BzKHRhZyA9PT0gXCJidXR0b25cIiA/IHJldEEgOiByZXRCKSlcclxuICAgICAgICAgICAgICAgIH0pKSwgeyBvbkZvY3VzIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzKHJldDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyB9O1xyXG4gICAgICAgIH0sIFtvcGVuXSk7XHJcbiAgICAgICAgY29uc3QgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5KCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHlQcm9wcyh7IHJvbGUsIC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXQxID0gdXNlUmVmZXJlbmNlZEhlYWRJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHsgcm9sZTogcm9sZSA/PyBcInJlZ2lvblwiLCAuLi5wcm9wcyB9KTtcclxuICAgICAgICAgICAgICAgIGxldCByZXQyID0gdXNlQm9keVJhbmRvbUlkUHJvcHMocmV0MSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHlQcm9wc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBleHBhbmRlZDogb3BlbixcclxuICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXIsXHJcbiAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSxcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZUxpbmVhck5hdmlnYXRpb25DaGlsZF0pO1xyXG4gICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZUxpbmVhck5hdmlnYXRpb25Qcm9wcyhwcm9wcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uLFxyXG4gICAgICAgIHVzZUFyaWFBY2NvcmRpb25Qcm9wc1xyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYWNjb3JkaW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSYW5kb21JZCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yYW5kb20taWRcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VGb2N1c1RyYXAgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtZm9jdXMtdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxIYW5kbGVyIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWV2ZW50LWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgZm9yIGEgbW9kYWwtbGlrZSBzb2Z0LWRpc21pc3MgaW50ZXJhY3Rpb24uXHJcbiAqXHJcbiAqIFRoYXQgaXMsIGFueSBjbGlja3Mgb3IgdGFwcyBvdXRzaWRlIG9mIHRoZSBnaXZlbiBlbGVtZW50LFxyXG4gKiBvciBhbnkgdGltZSB0aGUgRXNjYXBlIGtleSBpcyBwcmVzc2VkIHdpdGhpbiB0aGUgZWxlbWVudCxcclxuICogKHdpdGggdmFyaW91cyBicm93c2VyIG9kZGl0aWVzIHJlZ2FyZGluZyBjbGlja3Mgb24gYmxhbmsgb3IgaW5lcnQgYXJlYXMgaGFuZGxlZClcclxuICogdGhlIG1vZGFsIHdpbGwgcmVxdWVzdCB0byBjbG9zZSBpdHNlbGYuXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbFNvZnREaXNtaXNzKHsgb25DbG9zZSB9KSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgZnVuY3Rpb24gb25CYWNrZHJvcENsaWNrKGUpIHtcclxuICAgICAgICAvLyBCYXNpY2FsbHksIFwid2FzIHRoaXMgZXZlbnQgZmlyZWQgb24gdGhlIHJvb3QtbW9zdCBlbGVtZW50LCBvciBhdCBsZWFzdCBhbiBlbGVtZW50IG5vdCBjb250YWluZWQgYnkgdGhlIG1vZGFsP1wiXHJcbiAgICAgICAgLy8gRWl0aGVyIGNvdWxkIGJlIGhvdyB0aGUgYnJvd3NlciBoYW5kbGVzIHRoZXNlIHNvcnRzIG9mIFwiaW50ZXJhY3Rpbmcgd2l0aCBub3RoaW5nXCIgZXZlbnRzLlxyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgIShlbGVtZW50ICYmIGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCAmJiBlbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkpIHtcclxuICAgICAgICAgICAgb25DbG9zZShcImJhY2tkcm9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNpbmNlIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbmVydCwgd2UgbGlzdGVuIGZvciBjYXB0dXJlZCBjbGlja3Mgb24gdGhlIHdpbmRvd1xyXG4gICAgLy8gKHdlIGRvbid0IHVzZSBvbkNsaWNrIHNpbmNlIHRoYXQgZG9lc24ndCBmaXJlIHdoZW4gY2xpY2tlZCBvbiBlbXB0eS9pbmVydCBhcmVhcylcclxuICAgIC8vIE5vdGU6IFdlIG5lZWQgYSAqc2VwYXJhdGUqIHRvdWNoIGV2ZW50IG9uIG1vYmlsZSBTYWZhcmksIGJlY2F1c2VcclxuICAgIC8vIGl0IGRvZXNuJ3QgbGV0IGNsaWNrIGV2ZW50cyBidWJibGUgb3IgYmUgY2FwdHVyZWQgZnJvbSB0cmFkaXRpb25hbGx5IG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cyxcclxuICAgIC8vIGJ1dCB0b3VjaCBldmVudHMgd29yayBhcyBleHBlY3RlZC5cclxuICAgIHVzZUdsb2JhbEhhbmRsZXIod2luZG93LCBcIm1vdXNlZG93blwiLCAhb3BlbiA/IG51bGwgOiBvbkJhY2tkcm9wQ2xpY2ssIHsgY2FwdHVyZTogdHJ1ZSB9KTtcclxuICAgIHVzZUdsb2JhbEhhbmRsZXIod2luZG93LCBcInRvdWNoc3RhcnRcIiwgIW9wZW4gPyBudWxsIDogb25CYWNrZHJvcENsaWNrLCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICBvbkNsb3NlKFwiZXNjYXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4geyB1c2VNb2RhbFNvZnREaXNtaXNzUHJvcHM6IChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSZWZFbGVtZW50UHJvcHMoeyBvbktleURvd24gfSksIHByb3BzKSB9O1xyXG59XHJcbi8qKlxyXG4gKiBBIGdlbmVyaWMgbW9kYWwgaG9vaywgdXNlZCBieSBtb2RhbCBkaWFsb2dzLCBidXQgY2FuIGFsc29cclxuICogYmUgdXNlZCBieSBhbnl0aGluZyB0aGF0J3MgbW9kYWwgd2l0aCBhIGJhY2tkcm9wLlxyXG4gKiBAcGFyYW0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYU1vZGFsKHsgb3Blbiwgb25DbG9zZSB9KSB7XHJcbiAgICBjb25zdCBbbW9kYWxEZXNjcmliZWRCeUJvZHksIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUhpZGVTY3JvbGwob3Blbik7XHJcbiAgICBjb25zdCB7IGlkOiBtb2RhbElkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VNb2RhbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VNb2RhbFJlZmVyZW5jaW5nSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tb2RhbC1cIiB9KTtcclxuICAgIGNvbnN0IHsgaWQ6IGJvZHlJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLWJvZHktXCIgfSk7XHJcbiAgICBjb25zdCB7IGlkOiB0aXRsZUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VUaXRsZUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VUaXRsZVJlZmVyZW5jaW5nSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tb2RhbC10aXRsZS1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlTW9kYWxTb2Z0RGlzbWlzc1Byb3BzIH0gPSB1c2VNb2RhbFNvZnREaXNtaXNzKHsgb25DbG9zZSB9KTtcclxuICAgIGNvbnN0IHVzZU1vZGFsQmFja2Ryb3AgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbEJhY2tkcm9wKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3BQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1vZGFsUHJvcHMgPSBmdW5jdGlvbiAoeyBcImFyaWEtbW9kYWxcIjogYXJpYU1vZGFsLCByb2xlLCAuLi5wMCB9KSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VGb2N1c1RyYXBQcm9wcyB9ID0gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZTogb3BlbiB9KTtcclxuICAgICAgICBjb25zdCBwMSA9IHVzZVRpdGxlUmVmZXJlbmNpbmdJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHAwKTtcclxuICAgICAgICBjb25zdCBwMiA9IHVzZU1vZGFsSWRQcm9wcyhwMSk7XHJcbiAgICAgICAgY29uc3QgcEZpbmFsID0gdXNlQm9keVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikocDIpO1xyXG4gICAgICAgIHJldHVybiB1c2VGb2N1c1RyYXBQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHVzZU1vZGFsU29mdERpc21pc3NQcm9wcyh7IHJvbGU6IFwiZGlhbG9nXCIgfSksIG1vZGFsRGVzY3JpYmVkQnlCb2R5ID8gcEZpbmFsIDogcDIpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1c2VNb2RhbFRpdGxlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxUaXRsZSgpIHtcclxuICAgICAgICBjb25zdCB1c2VNb2RhbFRpdGxlUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVRpdGxlSWRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geyB1c2VNb2RhbFRpdGxlUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1vZGFsQm9keSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQm9keSh7IGRlc2NyaXB0aXZlIH0pIHtcclxuICAgICAgICBzZXRNb2RhbERlc2NyaWJlZEJ5Qm9keShkZXNjcmlwdGl2ZSk7XHJcbiAgICAgICAgY29uc3QgdXNlTW9kYWxCb2R5UHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZUJvZHlJZFByb3BzKHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsQm9keVByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZU1vZGFsUHJvcHMsXHJcbiAgICAgICAgdXNlTW9kYWxUaXRsZSxcclxuICAgICAgICB1c2VNb2RhbEJvZHksXHJcbiAgICAgICAgdXNlTW9kYWxCYWNrZHJvcFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIGZvciBoaWRpbmcgdGhlIHNjcm9sbCBiYXIgb2YgdGhlIHJvb3QgSFRNTCBlbGVtZW50XHJcbiAqIHdpdGhvdXQgc2hpZnRpbmcgdGhlIGxheW91dCBvZiB0aGUgcGFnZSBtb3JlIHRoYW4gYWRkaW5nIGEgZm93IHBpeGVsc1xyXG4gKiBvZiBwYWRkaW5nIHRvIHRoZSByb290IGVsZW1lbnQgaWYgbmVjZXNzYXJ5LlxyXG4gKiBAcGFyYW0gaGlkZVNjcm9sbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUhpZGVTY3JvbGwoaGlkZVNjcm9sbCkge1xyXG4gICAgY29uc3QgW3Njcm9sbGJhcldpZHRoLCBzZXRTY3JvbGxiYXJXaWR0aCwgZ2V0U2Nyb2xsYmFyV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aFdpdGhTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZG9jdW1lbnQtc2Nyb2xsLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRob3V0U2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsYmFyV2lkdGggPSAod2lkdGhXaXRob3V0U2Nyb2xsQmFyIC0gd2lkdGhXaXRoU2Nyb2xsQmFyKTtcclxuICAgICAgICAgICAgLy8gRmFpbHNhZmUgLS0gaWYgdGhpcyBtZWFzdXJpbmcgdHJpY2sgZG9lcyBzb21ldGhpbmcgdW5leHBlY3RlZCwganVzdCBpZ25vcmUgaXRcclxuICAgICAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoID4gODApXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Nyb2xsYmFyLXdpZHRoXCIsIGAke3Njcm9sbGJhcldpZHRofXB4YCk7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGJhcldpZHRoKHNjcm9sbGJhcldpZHRoKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID0gKCsoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gfHwgXCIwXCIpIC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbC1oaWRlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb2N1bWVudC1zY3JvbGwtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtoaWRlU2Nyb2xsXSk7XHJcbiAgICByZXR1cm4geyBzY3JvbGxiYXJXaWR0aCwgZ2V0U2Nyb2xsYmFyV2lkdGggfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbW9kYWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQXJpYU1vZGFsIH0gZnJvbSBcIi4vdXNlLW1vZGFsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhRGlhbG9nKHsgb3Blbiwgb25DbG9zZSB9KSB7XHJcbiAgICAvLyBUT0RPOiBEaWZmZXJlbmNlcyBiZXR3ZWVuIGRpYWxvZyBhbmQgbW9kYWwgZ28gaGVyZSwgcHJlc3VtYWJseVxyXG4gICAgY29uc3QgeyB1c2VNb2RhbEJhY2tkcm9wLCB1c2VNb2RhbEJvZHksIHVzZU1vZGFsUHJvcHMsIHVzZU1vZGFsVGl0bGUgfSA9IHVzZUFyaWFNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZURpYWxvZ1Byb3BzOiB1c2VNb2RhbFByb3BzLFxyXG4gICAgICAgIHVzZURpYWxvZ1RpdGxlOiB1c2VNb2RhbFRpdGxlLFxyXG4gICAgICAgIHVzZURpYWxvZ0JvZHk6IHVzZU1vZGFsQm9keSxcclxuICAgICAgICB1c2VEaWFsb2dCYWNrZHJvcDogdXNlTW9kYWxCYWNrZHJvcFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZGlhbG9nLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZVJhbmRvbUlkIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJhbmRvbS1pZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbi8qKlxyXG4gKiBBZGRzIGFuIElEIGFuZCBcImFyaWEtbGFiZWxsZWRieVwiIGZvciB0d28gZWxlbWVudHMsIGFuIFwiaW5wdXRcIiBlbGVtZW50IGFuZCBhIFwibGFiZWxcIiBlbGVtZW50LlxyXG4gKlxyXG4gKiBSZXR1cm5zIHRoZSBgdXNlUmVmZXJlbmNlZElkUHJvcHNgIGhvb2tzIGlmIHlvdSBuZWVkIHRvIGFsc28gYWRkIG90aGVyIElELXJlZmVyZW5jaW5nIGF0dHJpYnV0ZXMsIGxpa2UgYGZvcmBcclxuICpcclxuICogQHNlZSB1c2VJbnB1dExhYmVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4LCBiYWNrdXBUZXh0IH0gPSB7IGxhYmVsUHJlZml4OiBcImxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJpbnB1dC1cIiB9KSB7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQ6IGxhYmVsRWxlbWVudCwgZ2V0RWxlbWVudDogZ2V0TGFiZWxFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUxhYmVsUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQ6IGlucHV0RWxlbWVudCwgZ2V0RWxlbWVudDogZ2V0SW5wdXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUlucHV0UmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZUxhYmVsUmFuZG9tSWRQcm9wcywgaWQ6IGxhYmVsSWQsIHJhbmRvbUlkOiBsYWJlbFJhbmRvbUlkLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IGxhYmVsUHJlZml4IH0pO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VJbnB1dFJhbmRvbUlkUHJvcHMsIGlkOiBpbnB1dElkLCByYW5kb21JZDogaW5wdXRSYW5kb21JZCwgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBpbnB1dFByZWZpeCB9KTtcclxuICAgIGNvbnN0IGxhYmVsSGFzTW91bnRlZCA9ICEhKGxhYmVsRWxlbWVudCk7XHJcbiAgICBjb25zdCBpbnB1dEhhc01vdW50ZWQgPSAhIShpbnB1dEVsZW1lbnQpO1xyXG4gICAgY29uc3QgdXNlR2VuZXJpY0xhYmVsTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWxMYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzOiAocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxhYmVsUmFuZG9tSWRQcm9wcyh1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyhwcm9wcykpOyB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wczogKHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkYnksIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsIC4uLnByb3BzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodXNlSW5wdXRSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlSW5wdXRSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1sYWJlbFwiOiAoIWxhYmVsSGFzTW91bnRlZCA/IGJhY2t1cFRleHQgOiBhcmlhTGFiZWwpID8/IGFyaWFMYWJlbCB9LCBwcm9wcykpKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtsYWJlbEhhc01vdW50ZWRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsSW5wdXQsXHJcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWwsXHJcbiAgICAgICAgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyxcclxuICAgICAgICB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLFxyXG4gICAgICAgIGxhYmVsSWQsXHJcbiAgICAgICAgaW5wdXRJZCxcclxuICAgICAgICBsYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LFxyXG4gICAgICAgIGdldExhYmVsRWxlbWVudCxcclxuICAgICAgICBnZXRJbnB1dEVsZW1lbnQsXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBIYW5kbGVzIHRoZSBhdHRyaWJ1dGVzIGBpZGAsIGBmb3JgLCBhbmQgYGFyaWEtbGFiZWxsZWRieWAgZm9yIHRvIHJlbGF0ZWQgZWxlbWVudHMuXHJcbiAqXHJcbiAqIEl0J3MgYXNzdW1lZCB0aGF0IHRoZSBsYWJlbCBpcyBhbiBgSFRNTExhYmVsRWxlbWVudGAsIGFuZCB0aGUgaW5wdXQgaXMgc29tZXRoaW5nIGZvciB3aGljaFxyXG4gKiB0aGUgYGZvcmAgYXR0cmlidXRlIGNhbiByZWZlcmVuY2UuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9ID0geyBsYWJlbFByZWZpeDogXCJsYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiaW5wdXQtXCIgfSkge1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dCwgdXNlR2VuZXJpY0xhYmVsTGFiZWwsIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsIGlucHV0SWQsIGxhYmVsSWQsIGlucHV0RWxlbWVudCwgZ2V0SW5wdXRFbGVtZW50LCBsYWJlbEVsZW1lbnQsIGdldExhYmVsRWxlbWVudCB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXgsIGlucHV0UHJlZml4IH0pO1xyXG4gICAgY29uc3QgdXNlSW5wdXRMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlSW5wdXRMYWJlbExhYmVsKHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlSW5wdXRMYWJlbExhYmVsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhGb3IgPSB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzKFwiZm9yXCIpKHByb3BzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhvdXRGb3IgPSBwcm9wcztcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHRhZyA9PSBcImxhYmVsXCIgPyB3aXRoRm9yIDogd2l0aG91dEZvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbElucHV0XSk7XHJcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsSW5wdXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsSW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUlucHV0TGFiZWxJbnB1dFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUlucHV0TGFiZWxMYWJlbCxcclxuICAgICAgICB1c2VJbnB1dExhYmVsSW5wdXQsXHJcbiAgICAgICAgbGFiZWxJZCxcclxuICAgICAgICBpbnB1dElkLFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBsYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50LFxyXG4gICAgICAgIGdldExhYmVsRWxlbWVudFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogSGFuZGxlcyBsYWJlbCB0eXBlICh3cmFwcGluZyBvciBzZXBhcmF0ZSkgZm9yIGNoZWNrYm94ZXMsIHJhZGlvcywgc3dpdGNoZXMsIGV0Yy5cclxuICogQHBhcmFtIHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZSh7IGRpc2FibGVkLCBsYWJlbFBvc2l0aW9uLCBvbklucHV0LCByb2xlIH0pIHtcclxuICAgIGNvbnN0IHN0YWJsZU9uSW5wdXQgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IG9uSW5wdXQ/LihlKTsgfSk7XHJcbiAgICBjb25zdCB7IGlucHV0SWQsIGxhYmVsSWQsIHVzZUlucHV0TGFiZWxJbnB1dDogdXNlSUxJbnB1dCwgdXNlSW5wdXRMYWJlbExhYmVsOiB1c2VJTExhYmVsLCBnZXRMYWJlbEVsZW1lbnQsIGdldElucHV0RWxlbWVudCB9ID0gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4OiBcImFyaWEtY2hlY2tib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtY2hlY2tib3gtaW5wdXQtXCIgfSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VJbnB1dExhYmVsSW5wdXRQcm9wczogdXNlSUxJbnB1dFByb3BzIH0gPSB1c2VJTElucHV0KCk7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICByZXR1cm4geyBpbnB1dEVsZW1lbnQ6IGVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzKHN0YWJsZU9uSW5wdXQsIGRpc2FibGVkID8gXCJleGNsdWRlXCIgOiB0YWcgIT0gXCJpbnB1dFwiIHx8IGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiID8gdW5kZWZpbmVkIDogXCJleGNsdWRlXCIpKHt9KTtcclxuICAgICAgICAgICAgaWYgKHRhZyA9PSBcImlucHV0XCIgJiYgbGFiZWxQb3NpdGlvbiA9PSBcInNlcGFyYXRlXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZSAhPSBcInJhZGlvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uSW5wdXQgPSBzdGFibGVPbklucHV0O1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIENocm9tZSB3b24ndCBmaXJlIG9uSW5wdXQgZXZlbnRzIGZvciByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRhYkluZGV4PS0xPz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVlZHMgaW52ZXN0aWdhdGluZywgYnV0IG9uSW5wdXQgd29ya3MgZmluZSBpbiBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbGljayA9IHN0YWJsZU9uSW5wdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb3BzID0gdXNlUmVmRWxlbWVudFByb3BzKHVzZUlMSW5wdXRQcm9wcyhwcm9wcykpO1xyXG4gICAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PSBcIndyYXBwaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhlIHdyYXBwZWQgbGFiZWwgaGFuZGxlcyBhbGwgaW50ZXJhY3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhpcyBlbGVtZW50IGNhbid0IGJlIGludGVyYWN0ZWQgd2l0aFxyXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiBpdCdzIGFuIGlucHV0IGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbmVydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25Gb2N1cyA9IGUgPT4gZ2V0TGFiZWxFbGVtZW50KCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWcgIT0gXCJpbnB1dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IHJvbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gZGlzYWJsZWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShwMCwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VJTElucHV0LCByb2xlLCBsYWJlbFBvc2l0aW9uLCBkaXNhYmxlZF0pO1xyXG4gICAgY29uc3QgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQoeyB0YWcgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlSW5wdXRMYWJlbExhYmVsUHJvcHM6IHVzZUlMTGFiZWxQcm9wcyB9ID0gdXNlSUxMYWJlbCh7IHRhZyB9KTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcclxuICAgICAgICAgICAgbGV0IG5ld1Byb3BzID0gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMoc3RhYmxlT25JbnB1dCwgZGlzYWJsZWQgfHwgKGxhYmVsUG9zaXRpb24gPT0gXCJzZXBhcmF0ZVwiICYmIHRhZyA9PSBcImxhYmVsXCIpID8gXCJleGNsdWRlXCIgOiB1bmRlZmluZWQpKHt9KTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy5yb2xlID0gcm9sZTtcclxuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgb25lIGNhc2Ugd2hlcmUgdGhlcmUncyBhbG1vc3Qgbm90aGluZyB0byBkb1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIG1vc3Qgbm9ybWFsIGNhc2Ugd2hlcmUgZXZlcnl0aGluZyBhY3RzIGFjY29yZGluZyBub3JtYWwgSFRNTCBtZWNoYW5pY3MuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHVzZUlMTGFiZWxQcm9wcyhwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyB9O1xyXG4gICAgfSwgW3VzZUlMTGFiZWwsIHJvbGUsIGxhYmVsUG9zaXRpb25dKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LFxyXG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCxcclxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYWJlbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlQ2hlY2tib3hMaWtlIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQ2hlY2tib3goeyBsYWJlbFBvc2l0aW9uLCBjaGVja2VkLCBvbklucHV0LCBkaXNhYmxlZCB9KSB7XHJcbiAgICBjb25zdCBvbklucHV0RW5oYW5jZWQgPSAoZSkgPT4gb25JbnB1dD8uKGVuaGFuY2VFdmVudChlLCB7IGNoZWNrZWQ6ICFjaGVja2VkIH0pKTtcclxuICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50IH0gPSB1c2VDaGVja2JveExpa2UoeyBsYWJlbFBvc2l0aW9uLCByb2xlOiBcImNoZWNrYm94XCIsIGRpc2FibGVkLCBvbklucHV0OiBvbklucHV0RW5oYW5jZWQgfSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveElucHV0RWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50KHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IGlucHV0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMgfSA9IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCh7IHRhZyB9KTtcclxuICAgICAgICBjb25zdCBpc01peGVkID0gKGNoZWNrZWQgPT0gXCJtaXhlZFwiKTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnID09PSBcImlucHV0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGlzTWl4ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbaW5wdXRFbGVtZW50LCBpc01peGVkLCB0YWddKTtcclxuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveElucHV0RWxlbWVudFByb3BzIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnRQcm9wcyh7IC4uLnAwIH0pIHtcclxuICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMocDApO1xyXG4gICAgICAgICAgICBwcm9wcy5jaGVja2VkID8/PSAhIWNoZWNrZWQ7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09IFwic2VwYXJhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWNoZWNrZWRcIl0gPSBjaGVja2VkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnICE9IFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRhZyA9PSBcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NoZWNrZWQsIGxhYmVsUG9zaXRpb24sIGRpc2FibGVkXSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveExhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzIH0gPSB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnQoeyB0YWcgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtY2hlY2tlZFwiXSA9IGNoZWNrZWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0YWcgIT0gXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRQcm9wcyB9O1xyXG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCwgZGlzYWJsZWQsIGxhYmVsUG9zaXRpb25dKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoZWNrYm94LmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCBhcyB1c2VFZmZlY3ROYXRpdmUsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlRWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXHJcbiAqIHRoYXQgYWxsb3cgYWNjZXNzaW5nIHRoZSBwcmV2aW91cyB2YWx1ZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXHJcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBlZmZlY3RcclxuICogQHBhcmFtIGlucHV0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cykge1xyXG4gICAgY29uc3QgcHJldklucHV0cyA9IHVzZVJlZihpbnB1dHMpO1xyXG4gICAgY29uc3QgZWZmZWN0MiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgY2hhbmdlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5tYXgocHJldklucHV0cy5jdXJyZW50Lmxlbmd0aCwgaW5wdXRzLmxlbmd0aCk7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAocHJldklucHV0cy5jdXJyZW50W2ldICE9IGlucHV0c1tpXSlcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlZmZlY3QocHJldklucHV0cy5jdXJyZW50LCBjaGFuZ2VzKTtcclxuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0TmF0aXZlKGVmZmVjdDIsIGlucHV0cyk7XHJcbn1cclxuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVmZmVjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFJlZmVycyB0byB0aHJlZSBkaWZmZXJlbnQgdHlwZXMgb2YgZWxlbWVudHM6XHJcbiAqXHJcbiAqIDEuIFRoZSBwYXJlbnQgY2hlY2tib3gsIHRoYXQgcmVwcmVzZW50cyB0aGUgc3RhdGUgb2YgYWxsIHRoZSBjaGlsZCBjaGVja2JveGVzLlxyXG4gKiAyLiBUaGUgY2hpbGQgY29udGFpbmVyLCB0aGF0IGlzIHByb2JhYmx5IGEgPGRpdj4gZWxlbWVudCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgY2hpbGQgY2hlY2tib3hlcy5cclxuICogMy4gVGhlIGNoaWxkIGNoZWNrYm94ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja2JveEdyb3VwKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24gfSkge1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24gfSk7XHJcbiAgICAvL2NvbnN0IFt1bmNoZWNrZWRDb3VudCwgc2V0VW5oZWNrZWRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGVja2VkQ291bnQsIHNldENoZWNrZWRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoZWNrZWRJbmRpY2VzID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICBjb25zdCBbc2VsZklzQ2hlY2tlZCwgc2V0U2VsZklzQ2hlY2tlZCwgZ2V0U2VsZklzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBJZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgcGFyZW50IGNoZWNrYm94J3MgdmFsdWUsIHRoZW4gdGhpcyByZWYgaG9sZHMgYSBtZW1vcnkgb2Ygd2hhdCB2YWx1ZXMgd2VyZSBoZWxkIGJlZm9yZS5cclxuICAgIC8vIE90aGVyd2lzZSwgaXQncyBudWxsIHdoZW4gdGhlIGxhc3QgaW5wdXQgd2FzIGZyb20gYSBjaGlsZCBjaGVja2JveC4gXHJcbiAgICBjb25zdCBzYXZlZENoZWNrZWRWYWx1ZXMgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBvbkNoZWNrYm94R3JvdXBJbnB1dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2Ugc3RhcnQgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcGFyZW50IGNoZWNrYm94LFxyXG4gICAgICAgIC8vIHNhdmUgdGhlIGN1cnJlbnQgY2hpbGQgc3RhdGVzXHJcbiAgICAgICAgaWYgKHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQuc2V0KGNoaWxkLmluZGV4LCBjaGlsZC5nZXRDaGVja2VkKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbGZJc0NoZWNrZWQgPSBnZXRTZWxmSXNDaGVja2VkKCk7XHJcbiAgICAgICAgaWYgKHNlbGZJc0NoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFuYWdlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRDaGVja2VkKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmSXNDaGVja2VkID09PSBcIm1peGVkXCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFuYWdlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRDaGVja2VkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNldENoZWNrZWQoc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQuZ2V0KGNoaWxkLmluZGV4KSA/PyBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBjaGlsZCBJRHMsIGFuZCBhbnkgdGltZSBhbnkgb2YgdGhlbSBjaGFuZ2UsIFxyXG4gICAgLy8gZ2VuZXJhdGUgYSBuZXcgc3RyaW5nIHdpdGggYWxsIG9mIHRoZW0gY29uY2F0ZW5hdGVkIHRvZ2V0aGVyXHJcbiAgICAvLyAoYnV0IG9ubHkgb25jZSBwZXIgcmVuZGVyKTtcclxuICAgIGNvbnN0IGFsbElkcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgY29uc3QgW2FyaWFDb250cm9scywgc2V0QXJpYUNvbnRyb2xzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VwZGF0ZUluZGV4LCBzZXRJZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgbm90aWZ5Q2hlY2tlZCA9IHVzZUNhbGxiYWNrKChpbmRleCwgY2hlY2tlZCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tlZEluZGljZXMuY3VycmVudC5oYXMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyArIDEpKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuYWRkKGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuaGFzKGluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENvdW50KGMgPT4gKGMgLSAxKSk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbc2V0Q2hlY2tlZENvdW50LCBjaGVja2VkSW5kaWNlc10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgc2V0U2VsZklzQ2hlY2tlZChwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCIpO1xyXG4gICAgfSwgW3NldFNlbGZJc0NoZWNrZWQsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgsIGNoZWNrZWRDb3VudF0pO1xyXG4gICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hHcm91cENoZWNrYm94UHJvcHMocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1jb250cm9sc1wiOiBhcmlhQ29udHJvbHMgfSwgcHJvcHMpO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBcmlhQ29udHJvbHMoQXJyYXkuZnJvbShhbGxJZHMuY3VycmVudCkuam9pbihcIiBcIikpO1xyXG4gICAgfSwgW3VwZGF0ZUluZGV4XSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveEdyb3VwQ2hpbGQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyBpbmRleCwgdGV4dCwgY2hlY2tlZCwgaWQsIHNldENoZWNrZWQgfSkge1xyXG4gICAgICAgIGNvbnN0IGdldENoZWNrZWQgPSB1c2VTdGFibGVHZXR0ZXIoY2hlY2tlZCk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuYWRkKGlkKTtcclxuICAgICAgICAgICAgc2V0SWRVcGRhdGVJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGxJZHMuY3VycmVudC5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0SWRVcGRhdGVJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW2lkXSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgbm90aWZ5Q2hlY2tlZChpbmRleCwgY2hlY2tlZCk7XHJcbiAgICAgICAgfSwgW2luZGV4LCBjaGVja2VkXSk7XHJcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IGluZGV4LCB0ZXh0LCBpZCwgZ2V0Q2hlY2tlZCwgc2V0Q2hlY2tlZCB9KTtcclxuICAgICAgICBjb25zdCBvbklucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA9IG51bGw7IH0sIFtzYXZlZENoZWNrZWRWYWx1ZXNdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWJiYWJsZSxcclxuICAgICAgICAgICAgdXNlQ2hlY2tib3hHcm91cENoaWxkUHJvcHM6IChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uSW5wdXQgfSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHByb3BzKSlcclxuICAgICAgICB9O1xyXG4gICAgfSwgW25vdGlmeUNoZWNrZWQsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRdKTtcclxuICAgIHJldHVybiB7IHVzZUNoZWNrYm94R3JvdXBDaGlsZCwgdXNlQ2hlY2tib3hHcm91cENoZWNrYm94UHJvcHMsIHVzZUNoZWNrYm94Q2hpbGRyZW5Db250YWluZXJQcm9wczogdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgc2VsZklzQ2hlY2tlZCwgcGVyY2VudENoZWNrZWQ6IChjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSwgb25DaGVja2JveEdyb3VwSW5wdXQgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3gtZ3JvdXAuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlTGlzdE5hdmlnYXRpb24gfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbGlzdC1uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlR2VuZXJpY0xhYmVsIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XHJcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQsIHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEV2ZW50RGV0YWlsLCB1c2VDaGlsZEZsYWcgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUxpc3Rib3hTaW5nbGUoeyBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgc2VsZWN0aW9uTW9kZSwgLi4uYXJncyB9KSB7XHJcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcywgaW5wdXRFbGVtZW50IH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldFRhYmJhYmxlSW5kZXgsIC4uLmxpc3RSZXN0IH0gPSB1c2VMaXN0TmF2aWdhdGlvbihhcmdzKTtcclxuICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2sob25TZWxlY3QpO1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xyXG4gICAgLyp1c2VMYXlvdXRFZmZlY3QoKFtwcmV2U2VsZWN0ZWRJbmRleF0pID0+IHtcclxuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuW3ByZXZTZWxlY3RlZEluZGV4XT8uc2V0U2VsZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbltzZWxlY3RlZEluZGV4XT8uc2V0U2VsZWN0ZWQodHJ1ZSk7XHJcbiAgICB9LCBbc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aF0pOyovXHJcbiAgICB1c2VDaGlsZEZsYWcoc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgKGksIHNlbGVjdGVkKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKFtdKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfSwgW3NlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgY29uc3QgeyBsYXN0QWN0aXZlRWxlbWVudCB9ID0gdXNlQWN0aXZlRWxlbWVudCgpO1xyXG4gICAgbGV0IGFueVJhZGlvc0ZvY3VzZWQgPSAoISFpbnB1dEVsZW1lbnQ/LmNvbnRhaW5zKGxhc3RBY3RpdmVFbGVtZW50KSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghYW55UmFkaW9zRm9jdXNlZClcclxuICAgICAgICAgICAgc2V0VGFiYmFibGVJbmRleChzZWxlY3RlZEluZGV4KTtcclxuICAgIH0sIFthbnlSYWRpb3NGb2N1c2VkLCBzZWxlY3RlZEluZGV4LCBzZXRUYWJiYWJsZUluZGV4XSk7XHJcbiAgICAvL2NvbnN0IHsgZ2V0U3luY0hhbmRsZXIsIC4uLmFzeW5jSW5mbyB9ID0gdXNlQXN5bmNIYW5kbGVyPEU+KCkoeyBjYXB0dXJlOiAoZTogRXZlbnQpID0+IGluZGljZXNCeUVsZW1lbnQuZ2V0KGUudGFyZ2V0ISkgPz8gLTEgfSk7XHJcbiAgICAvL2NvbnN0IG9uU2VsZWN0ID0gZ2V0U3luY0hhbmRsZXIoYXN5bmNJbmZvLnBlbmRpbmcgPyBudWxsIDogYXN5bmNPblNlbGVjdCk7XHJcbiAgICBjb25zdCB1c2VMaXN0Ym94U2luZ2xlSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZCwgZ2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyBzZXRTZWxlY3RlZCwgLi4uaW5mbyB9KTtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5mby5pbmRleDtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlID09IFwiZm9jdXNcIikge1xyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2VsZW1lbnQsIHRhYmJhYmxlLCBzZWxlY3Rpb25Nb2RlLCBpbmRleF0pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtUHJvcHMsIHRhYmJhYmxlLCBzZWxlY3RlZCwgZ2V0U2VsZWN0ZWQgfTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSkoe30pO1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJvcHRpb25cIjtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNldHNpemVcIl0gPSAoY2hpbGRDb3VudCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSBzZWxlY3RlZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgc2VsZWN0aW9uTW9kZSwgY2hpbGRDb3VudF0pO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcclxuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzIH07XHJcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcclxuICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtLCB1c2VMaXN0Ym94U2luZ2xlUHJvcHMsIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCwgLi4ubGlzdFJlc3QgfTtcclxuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcclxuICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHByb3BzKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94TXVsdGkoeyAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdXNlTGlzdE5hdmlnYXRpb25Qcm9wcywgbmF2aWdhdGVUb0luZGV4LCBtYW5hZ2VkQ2hpbGRyZW4sIGN1cnJlbnRUeXBlYWhlYWQsIC4uLmxpc3RSZXN0IH0gPSB1c2VMaXN0TmF2aWdhdGlvbihhcmdzKTtcclxuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgY29uc3QgW3NoaWZ0SGVsZCwgc2V0U2hpZnRIZWxkLCBnZXRTaGlmdEhlbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdHlwZWFoZWFkSW5Qcm9ncmVzcyA9ICghIWN1cnJlbnRUeXBlYWhlYWQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0VHlwZWFoZWFkSW5Qcm9ncmVzcyh0eXBlYWhlYWRJblByb2dyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdHlwZWFoZWFkSW5Qcm9ncmVzcywgY2hpbGRDb3VudF0pO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveE11bHRpSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpbmZvLnNlbGVjdGVkO1xyXG4gICAgICAgIC8vY29uc3Qgb25TZWxlY3RBc3luYyA9IGluZm8ub25TZWxlY3Q7XHJcbiAgICAgICAgY29uc3QgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gdXNlU3RhYmxlR2V0dGVyKHNlbGVjdGVkKTtcclxuICAgICAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKGluZm8ub25TZWxlY3QpO1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgLy9jb25zdCB7IGdldFN5bmNIYW5kbGVyLCAuLi5hc3luY0luZm8gfSA9IHVzZUFzeW5jSGFuZGxlcjxFPigpKHsgY2FwdHVyZTogZSA9PiAhc2VsZWN0ZWQgfSk7XHJcbiAgICAgICAgLy9jb25zdCBvblNlbGVjdCA9IGdldFN5bmNIYW5kbGVyKGFzeW5jSW5mby5wZW5kaW5nID8gbnVsbCA6IChvblNlbGVjdEFzeW5jID8/IG51bGwpKTtcclxuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgLi4uaW5mbywgc2V0VHlwZWFoZWFkSW5Qcm9ncmVzcyB9KTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBnZXRTaGlmdEhlbGQoKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3QoeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWQ6IHRydWUgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtlbGVtZW50LCB0YWJiYWJsZV0pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUl0ZW1Qcm9wcywgdGFiYmFibGUgfTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlJdGVtUHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zdCBldmVudCA9IGUgYXMgYW55IGFzICh7IHNlbGVjdGVkOiBib29sZWFuIH0gJiBQaWNrPGguSlNYLlRhcmdldGVkRXZlbnQ8RWxlbWVudD4sIFwidGFyZ2V0XCIgfCBcImN1cnJlbnRUYXJnZXRcIj4pO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgLy9ldmVudC5zZWxlY3RlZCA9ICFnZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IC4uLmUsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWQ6ICFnZXRTZWxlY3RlZCgpIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAvL3N0YWJsZU9uU2VsZWN0Py4oZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzcGFjZTogdHlwZWFoZWFkSW5Qcm9ncmVzcyA/IFwiZXhjbHVkZVwiIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH0pKHt9KTtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZXRzaXplXCJdID0gKGNoaWxkQ291bnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1wb3NpbnNldFwiXSA9IChpbmZvLmluZGV4ICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gdGFiYmFibGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgcHJvcHMpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIGNoaWxkQ291bnQsIHR5cGVhaGVhZEluUHJvZ3Jlc3NdKTtcclxuICAgIGNvbnN0IHVzZUxpc3Rib3hNdWx0aUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpTGFiZWwoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpTGFiZWxQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpTGFiZWxQcm9wcyB9O1xyXG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XHJcbiAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtLCB1c2VMaXN0Ym94TXVsdGlQcm9wcywgdXNlTGlzdGJveE11bHRpTGFiZWwsIGN1cnJlbnRUeXBlYWhlYWQsIC4uLmxpc3RSZXN0IH07XHJcbiAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcclxuICAgICAgICBwcm9wc1tcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCJdID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHModXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbktleVVwLCBvbkJsdXIgfSwgcHJvcHMpKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkgeyBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKVxyXG4gICAgICAgIHNldFNoaWZ0SGVsZCh0cnVlKTsgfVxyXG4gICAgZnVuY3Rpb24gb25LZXlVcChlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXHJcbiAgICAgICAgc2V0U2hpZnRIZWxkKGZhbHNlKTsgfVxyXG4gICAgZnVuY3Rpb24gb25CbHVyKGUpIHsgc2V0U2hpZnRIZWxkKGZhbHNlKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0Ym94LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VIYXNGb2N1cyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1oYXMtZm9jdXNcIjtcclxuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxheW91dC1lZmZlY3RcIjtcclxuaW1wb3J0IHsgdXNlTGlzdE5hdmlnYXRpb24gfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbGlzdC1uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSYW5kb21JZCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yYW5kb20taWRcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBFdmVudERldGFpbCwgZW5oYW5jZUV2ZW50IH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlVGltZW91dCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZU1vZGFsU29mdERpc21pc3MgfSBmcm9tIFwidXNlLW1vZGFsXCI7XHJcbi8qXHJcbmV4cG9ydCB0eXBlIFVzZUFyaWFNZW51UHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+ID0gPFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxFPj4oeyAuLi5wcm9wcyB9OiBQKSA9PiBVc2VSYW5kb21JZFByb3BzUmV0dXJuVHlwZTxVc2VMaXN0TmF2aWdhdGlvblByb3BzUmV0dXJuVHlwZTxFLCBQPj47XHJcbmV4cG9ydCB0eXBlIFVzZUFyaWFNZW51QnV0dG9uID0gPEVfMSBleHRlbmRzIEVsZW1lbnQ+KHsgdGFnIH06IFVzZUFyaWFNZW51QnV0dG9uUGFyYW1ldGVyczxFXzE+KSA9PiB7XHJcbiAgICB1c2VBcmlhTWVudUJ1dHRvblByb3BzOiA8UF8xIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RV8xPj4ocDogUF8xKSA9PiBVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEVfMSwgVXNlQXJpYUJ1dHRvblByb3BzUmV0dXJuVHlwZTxFXzEsIFVzZVJlZmVyZW5jZWRJZFByb3BzUmV0dXJuVHlwZTxQXzEsIFwiYXJpYS1jb250cm9sc1wiPj4+O1xyXG59O1xyXG5leHBvcnQgdHlwZSBVc2VBcmlhTWVudTxFIGV4dGVuZHMgRWxlbWVudD4gPSAoeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgbm9UeXBlYWhlYWQsIG5vV3JhcCwgdHlwZWFoZWFkVGltZW91dCwgLi4uYXJncyB9OiBVc2VBcmlhTWVudVBhcmFtZXRlcnMpID0+IFVzZUFyaWFNZW51UmV0dXJuVHlwZTxFPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQXJpYU1lbnVSZXR1cm5UeXBlPEUgZXh0ZW5kcyBFbGVtZW50PiB7XHJcbiAgICB1c2VBcmlhTWVudVByb3BzOiBVc2VBcmlhTWVudVByb3BzPEU+O1xyXG4gICAgdXNlQXJpYU1lbnVCdXR0b246IFVzZUFyaWFNZW51QnV0dG9uO1xyXG4gICAgdXNlQXJpYU1lbnVJdGVtOiBVc2VBcmlhTWVudUl0ZW07XHJcbiAgICB1c2VBcmlhTWVudUl0ZW1DaGVja2JveDogVXNlQXJpYU1lbnVJdGVtQ2hlY2tib3g7XHJcbiAgICB1c2VBcmlhTWVudVN1Ym1lbnVJdGVtOiBVc2VBcmlhTWVudVN1Ym1lbnVJdGVtO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VBcmlhTWVudUl0ZW0gPSA8RV8yIGV4dGVuZHMgRWxlbWVudD4oYXJnczogVXNlQXJpYU1lbnVJdGVtRGVmYXVsdFBhcmFtZXRlcnMpID0+IHtcclxuICAgIHVzZUFyaWFNZW51SXRlbVByb3BzOiA8UF8yIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RV8yPj4oeyAuLi5wcm9wcyB9OiBQXzIpID0+IE1lcmdlZFByb3BzPEVfMiwge1xyXG4gICAgICAgIG9uQ2xpY2s6IGguSlNYLk1vdXNlRXZlbnRIYW5kbGVyPEVfMj47XHJcbiAgICB9LCBVc2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHNSZXR1cm5UeXBlPEVfMiwgUF8yPj47XHJcbiAgICBhc3luY0luZm86IE9taXQ8VXNlQXN5bmNIYW5kbGVyUmV0dXJuVHlwZTxFXzIsIFwib25DbGlja1wiLCB2b2lkPiwgXCJvbkNsaWNrXCI+XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZUFyaWFNZW51SXRlbUNoZWNrYm94ID0gPEVfMyBleHRlbmRzIEVsZW1lbnQ+KGFyZ3M6IFVzZUFyaWFNZW51SXRlbUNoZWNrYm94UGFyYW1ldGVycykgPT4ge1xyXG4gICAgdXNlQXJpYU1lbnVJdGVtUHJvcHM6IDxQXzMgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxFXzM+Pih7IC4uLnByb3BzIH06IFBfMykgPT4gTWVyZ2VkUHJvcHM8RV8zLCB7XHJcbiAgICAgICAgb25DbGljazogaC5KU1guTW91c2VFdmVudEhhbmRsZXI8RV8zPjtcclxuICAgIH0sIFBfMz47XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBVc2VBcmlhTWVudVN1Ym1lbnVJdGVtID0gPEVfNCBleHRlbmRzIEVsZW1lbnQ+KGFyZ3M6IFVzZUFyaWFNZW51U3VibWVudUl0ZW1QYXJhbWV0ZXJzKSA9PiBVc2VBcmlhTWVudVN1Ym1lbnVJdGVtUmV0dXJuVHlwZTxFXzQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VBcmlhTWVudVN1Ym1lbnVJdGVtUmV0dXJuVHlwZTxFXzQgZXh0ZW5kcyBFbGVtZW50PiB7XHJcbiAgICBlbGVtZW50OiBFXzQgfCBudWxsO1xyXG4gICAgZ2V0RWxlbWVudDogKCkgPT4gRV80IHwgbnVsbDtcclxuICAgIHVzZUFyaWFNZW51UHJvcHM6IDxQXzQgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4+KHsgLi4ucHJvcHMgfTogUF80KSA9PiBVc2VSYW5kb21JZFByb3BzUmV0dXJuVHlwZTxQXzQ+O1xyXG4gICAgdXNlQXJpYU1lbnVTdWJtZW51SXRlbVByb3BzOiA8UF81IGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RV80Pj4oeyAuLi5wcm9wcyB9OiBQXzUpID0+IFVzZVJlZkVsZW1lbnRQcm9wc1JldHVyblR5cGU8RV80LCBVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEVfNCwgVXNlQXJpYUJ1dHRvblByb3BzUmV0dXJuVHlwZTxFXzQsIFVzZVJlZmVyZW5jZWRJZFByb3BzUmV0dXJuVHlwZTxVc2VSZWZlcmVuY2VkSWRQcm9wc1JldHVyblR5cGU8UF81LCBcImFyaWEtY29udHJvbHNcIj4sIFwiYXJpYS1jb250cm9sc1wiPj4+PjtcclxufSovXHJcbmxldCBpID0gMDtcclxuZnVuY3Rpb24gcigpIHtcclxuICAgICsraTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyKTtcclxufVxyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocik7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTWVudSh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBub1R5cGVhaGVhZCwgbm9XcmFwLCB0eXBlYWhlYWRUaW1lb3V0LCAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IFtmb2N1c1RyYXBBY3RpdmUsIHNldEZvY3VzVHJhcEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgb25DbG9zZSA9IGFyZ3Mub25DbG9zZTtcclxuICAgIGxldCBvbk9wZW4gPSBhcmdzLm9uT3BlbjtcclxuICAgIGxldCBtZW51YmFyID0gYXJncy5tZW51YmFyO1xyXG4gICAgbGV0IG9wZW4gPSAobWVudWJhciA/IHRydWUgOiBhcmdzLm9wZW4pO1xyXG4gICAgY29uc3Qgc3RhYmxlT25DbG9zZSA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uQ2xvc2UgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMsIHRhYmJhYmxlSW5kZXgsIGZvY3VzU2VsZjogZm9jdXNNZW51IH0gPSB1c2VMaXN0TmF2aWdhdGlvbih7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBub1R5cGVhaGVhZCwgbm9XcmFwLCB0eXBlYWhlYWRUaW1lb3V0IH0pO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VNZW51SWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1lbnVJZFJlZmVyZW5jaW5nUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbWVudS1cIiB9KTtcclxuICAgIGNvbnN0IFtvcGVuZXJFbGVtZW50LCBzZXRPcGVuZXJFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgLy8gVE9ETzogSXQncyBhd2t3YXJkIHRoYXQgdGhlIGJ1dHRvbiBmb2N1cyBwcm9wcyBhcmUgb3V0IGhlcmUgd2hlcmUgd2UgZG9uJ3QgaGF2ZSBpdHMgdHlwZSxcclxuICAgIC8vIGJ1dCBmb2N1cyBtYW5hZ2VtZW50IGlzIHN1cGVyIHNlbnNpdGl2ZSwgYW5kIGV2ZW4gd2FpdGluZyBmb3IgYSB1c2VMYXlvdXRFZmZlY3QgdG8gc3luYyBzdGF0ZSBoZXJlXHJcbiAgICAvLyB3b3VsZCBiZSB0b28gbGF0ZSwgc28gaXQgd291bGQgbG9vayBsaWtlIHRoZXJlJ3MgYSBtb21lbnQgYmV0d2VlbiBtZW51IGZvY3VzIGxvc3QgYW5kIGJ1dHRvbiBmb2N1cyBnYWluZWRcclxuICAgIC8vIHdoZXJlIG5vdGhpbmcgaXMgZm9jdXNlZC4gXHJcbiAgICBjb25zdCB7IGZvY3VzZWRJbm5lcjogbWVudUhhc0ZvY3VzLCB1c2VIYXNGb2N1c1Byb3BzOiB1c2VNZW51SGFzRm9jdXNQcm9wcywgfSA9IHVzZUhhc0ZvY3VzKCk7XHJcbiAgICBjb25zdCB7IGZvY3VzZWRJbm5lcjogYnV0dG9uSGFzRm9jdXMsIHVzZUhhc0ZvY3VzUHJvcHM6IHVzZUJ1dHRvbkhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzKCk7XHJcbiAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQsIGxhc3RBY3RpdmVFbGVtZW50LCB3aW5kb3dGb2N1c2VkIH0gPSB1c2VBY3RpdmVFbGVtZW50KCk7XHJcbiAgICBjb25zdCB7IHVzZU1vZGFsU29mdERpc21pc3NQcm9wcyB9ID0gdXNlTW9kYWxTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEZvY3VzVHJhcEFjdGl2ZShvcGVuKTtcclxuICAgIH0sIFtvcGVuXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb2N1c1RyYXBBY3RpdmUpXHJcbiAgICAgICAgICAgIGZvY3VzTWVudSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb3BlbmVyRWxlbWVudD8uZm9jdXMoKTtcclxuICAgIH0sIFtmb2N1c1RyYXBBY3RpdmVdKTtcclxuICAgIC8vIEZvY3VzIG1hbmFnZW1lbnQgaXMgcmVhbGx5IGZpbmlja3ksIGFuZCB0aGVyZSdzIGFsd2F5cyBnb2luZyB0byBiZSBcclxuICAgIC8vIGFuIGVkZ2UgY2FzZSB3aGVyZSBub3RoaW5nJ3MgZm9jdXNlZCBmb3IgdHdvIGNvbnNlY3V0aXZlIGZyYW1lcyBcclxuICAgIC8vIG9uIGlPUyBvciB3aGF0ZXZlciwgd2hpY2ggd291bGQgaW1tZWRpYXRlbHkgY2xvc2UgdGhlIG1lbnUgXHJcbiAgICAvLyBhbnkgdGltZSBpdCdzIGJlZW4gb3BlbmVkLiBTbyBhbnkgdGltZSBpdCAqbG9va3MqIGxpa2Ugd2Ugc2hvdWxkIGNsb3NlLFxyXG4gICAgLy8gdHJ5IHdhaXRpbmcgMTAwbXMuIElmIGl0J3Mgc3RpbGwgdHJ1ZSB0aGVuLCB0aGVuIHllYWgsIHdlIHNob3VsZCBjbG9zZS5cclxuICAgIGxldCBzaG91bGRDbG9zZSA9IChmb2N1c1RyYXBBY3RpdmUgJiYgd2luZG93Rm9jdXNlZCAmJiAhbWVudUhhc0ZvY3VzICYmICFidXR0b25IYXNGb2N1cyk7XHJcbiAgICB1c2VUaW1lb3V0KHtcclxuICAgICAgICB0aW1lb3V0OiAxMDAsXHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNob3VsZENsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPy4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpZ2dlckluZGV4OiBgJHtzaG91bGRDbG9zZX1gXHJcbiAgICB9KTtcclxuICAgIC8vIEEgbWVudSBzZW50aW5hbCBpcyBhIGhpZGRlbiBidXQgZm9jdXNhYmxlIGVsZW1lbnQgdGhhdCBjb21lcyBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBlbGVtZW50XHJcbiAgICAvLyB0aGF0LCB3aGVuIGFjdGl2YXRlZCBvciBmb2N1c2VkIG92ZXIsIGNsb3NlcyB0aGUgbWVudS5cclxuICAgIC8vIChpZiBmb2N1c2VkIHdpdGhpbiAxMDBtcyBvZiB0aGUgb3BlbiBwcm9wIGNoYW5naW5nLCBpbnN0ZWFkIG9mXHJcbiAgICAvLyBjbG9zaW5nIHRoZSBtZW51LCBmb2N1c2luZyB0aGUgc2VudGluZWwgaW1tZWRpYXRlbHkgYXNrcyB0aGUgbWVudSB0byBmb2N1cyBpdHNlbGYpLlxyXG4gICAgLy8gVGhpcyBleGlzdHMgYmVjYXVzZSB3aGlsZSBtb3VzZSB1c2VycyBjYW4gY2xpY2sgb3V0IG9mIGEgbWVudVxyXG4gICAgLy8gYW5kIGtleWJvYXJkIHVzZXJzIGNhbiBlc2NhcGUgdG8gY2xvc2UgdGhlIG1lbnUsXHJcbiAgICAvLyBzY3JlZW4gcmVhZGVycyBhbmQgb3RoZXIgaW5wdXQgbWV0aG9kcyB0aGF0IGRvbid0IHVzZSB0aG9zZSB0d28gYmVjb21lIHN0dWNrLlxyXG4gICAgY29uc3QgdXNlTWVudVNlbnRpbmVsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtmaXJzdFNlbnRpbmVsSXNBY3RpdmUsIHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgdXNlVGltZW91dCh7IGNhbGxiYWNrOiAoKSA9PiB7IHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZShvcGVuKTsgfSwgdGltZW91dDogMTAwLCB0cmlnZ2VySW5kZXg6IGAke2ZpcnN0U2VudGluZWxJc0FjdGl2ZX1gIH0pO1xyXG4gICAgICAgIGNvbnN0IG9uRm9jdXMgPSBmaXJzdFNlbnRpbmVsSXNBY3RpdmUgPyAoKCkgPT4gc3RhYmxlT25DbG9zZSgpKSA6ICgoKSA9PiBmb2N1c01lbnUoKSk7XHJcbiAgICAgICAgY29uc3Qgb25DbGljayA9ICgpID0+IHN0YWJsZU9uQ2xvc2UoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VNZW51U2VudGluZWxQcm9wczogZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25Gb2N1cywgb25DbGljayB9LCBwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbb3Blbl0pO1xyXG4gICAgY29uc3QgdXNlTWVudUJ1dHRvbiA9IHVzZUNhbGxiYWNrKCh7IHRhZyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBzZXRPcGVuZXJFbGVtZW50KGVsZW1lbnQpOyB9LCBbZWxlbWVudF0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZU1lbnVCdXR0b25Qcm9wczogZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25DbGljazogKCkgPT4geyByZXR1cm4gb3BlbiA/IG9uQ2xvc2U/LigpIDogb25PcGVuPy4oKTsgfSB9LCB1c2VNZW51SWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1jb250cm9sc1wiKSh1c2VCdXR0b25IYXNGb2N1c1Byb3BzKHApKSkpO1xyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWhhc3BvcHVwXCJdID0gXCJtZW51XCI7XHJcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZXhwYW5kZWRcIl0gPSBvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW29wZW4sIG9uQ2xvc2UsIG9uT3BlbiwgdXNlTWVudUlkUmVmZXJlbmNpbmdQcm9wc10pO1xyXG4gICAgY29uc3QgdXNlTWVudVN1Ym1lbnVJdGVtID0gdXNlQ2FsbGJhY2soKGFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZU1lbnVQcm9wcywgdXNlTWVudUJ1dHRvbiB9ID0gdXNlQXJpYU1lbnUoYXJncyk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNZW51QnV0dG9uUHJvcHMgfSA9IHVzZU1lbnVCdXR0b24oeyB0YWc6IFwibGlcIiB9KTtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHNldE9wZW5lckVsZW1lbnQoZWxlbWVudCk7IH0sIFtlbGVtZW50XSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgZ2V0RWxlbWVudCxcclxuICAgICAgICAgICAgdXNlTWVudVByb3BzLFxyXG4gICAgICAgICAgICB1c2VNZW51U3VibWVudUl0ZW1Qcm9wczogZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1cIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVudUJ1dHRvblByb3BzKHVzZU1lbnVJZFJlZmVyZW5jaW5nUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHByb3BzKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1lbnVJdGVtID0gdXNlQ2FsbGJhY2soKGFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZChhcmdzKTtcclxuICAgICAgICAvLyBjb25zdCB7IGdldFN5bmNIYW5kbGVyLCAuLi5hc3luY0luZm8gfSA9IHVzZUFzeW5jSGFuZGxlcjxFPigpKHsgY2FwdHVyZTogXyA9PiB2b2lkICgwKSB9KTtcclxuICAgICAgICAvLyBjb25zdCBvbkNsaWNrID0gZ2V0U3luY0hhbmRsZXIoYXN5bmNJbmZvLnBlbmRpbmcgPyBudWxsIDogKGFyZ3Mub25DbGljayA/PyBudWxsKSk7XHJcbiAgICAgICAgY29uc3Qgb25DbGljayA9IGFyZ3Mub25DbGljaztcclxuICAgICAgICBmdW5jdGlvbiB1c2VNZW51SXRlbVByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJtZW51aXRlbVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uQ2xpY2sgfSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHByb3BzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZU1lbnVJdGVtUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1lbnVJdGVtQ2hlY2tib3ggPSB1c2VDYWxsYmFjaygoYXJncykgPT4ge1xyXG4gICAgICAgIC8vY29uc3QgeyBnZXRTeW5jSGFuZGxlciwgLi4uYXN5bmNJbmZvIH0gPSB1c2VBc3luY0hhbmRsZXI8RT4oKSh7IGNhcHR1cmU6IF8gPT4gIWFyZ3MuY2hlY2tlZCB9KTtcclxuICAgICAgICAvL2NvbnN0IG9uQ2xpY2sgPSBnZXRTeW5jSGFuZGxlcihhc3luY0luZm8ucGVuZGluZyA/IG51bGwgOiBhcmdzLm9uQ2hhbmdlKTtcclxuICAgICAgICBjb25zdCBvbkNsaWNrID0gKGUpID0+IGFyZ3Mub25DaGFuZ2UoZW5oYW5jZUV2ZW50KGUsIHsgY2hlY2tlZDogIWFyZ3MuY2hlY2tlZCB9KSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTWVudUl0ZW1Qcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1jaGVja2JveFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uQ2xpY2sgfSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VNZW51SXRlbVByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB1c2VNZW51UHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudVwiO1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiICYmIG9uQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXNlTWVudUlkUHJvcHModXNlTGlzdE5hdmlnYXRpb25Qcm9wcyh1c2VNZW51SGFzRm9jdXNQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duIH0sIHVzZU1vZGFsU29mdERpc21pc3NQcm9wcyhwcm9wcykpKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VNZW51UHJvcHMsXHJcbiAgICAgICAgdXNlTWVudUJ1dHRvbixcclxuICAgICAgICB1c2VNZW51SXRlbSxcclxuICAgICAgICB1c2VNZW51U2VudGluZWwsXHJcbiAgICAgICAgdXNlTWVudUl0ZW1DaGVja2JveCxcclxuICAgICAgICB1c2VNZW51U3VibWVudUl0ZW0sXHJcbiAgICAgICAgZm9jdXNNZW51XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZW51LmpzLm1hcCIsbnVsbCxudWxsLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VDaGlsZE1hbmFnZXIgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtY2hpbGQtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbGF5b3V0LWVmZmVjdFwiO1xyXG5pbXBvcnQgeyB1c2VMaXN0TmF2aWdhdGlvbiB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1saXN0LW5hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJhbmRvbUlkIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJhbmRvbS1pZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxvZ2ljYWxEaXJlY3Rpb24sIHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwsIHVzZUNoaWxkRmxhZyB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhVGFicyh7IHNlbGVjdGlvbk1vZGUsIHNlbGVjdGVkSW5kZXgsIG9uU2VsZWN0LCBvcmllbnRhdGlvbjogbG9naWNhbE9yaWVudGF0aW9uLCAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudDogbGlzdEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uLCBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKGxpc3RFbGVtZW50KTtcclxuICAgIGNvbnN0IHBoeXNpY2FsT3JpZW50YXRpb24gPSBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uKGxvZ2ljYWxPcmllbnRhdGlvbik7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRhYkxpc3RJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxpc3RJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItbGlzdC1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGFiZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLWxhYmVsLVwiIH0pO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBuYXZpZ2F0ZVRvSW5kZXgsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywga2V5TmF2aWdhdGlvbjogbG9naWNhbE9yaWVudGF0aW9uIH0pO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRQYW5lbHMsIHVzZU1hbmFnZWRDaGlsZDogdXNlTWFuYWdlZFRhYlBhbmVsIH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcclxuICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2sob25TZWxlY3QpO1xyXG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRUYWJzLmxlbmd0aDtcclxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHMsIGZvY3VzZWRJbm5lcjogdGFiTGlzdEZvY3VzZWQgfSA9IHVzZUhhc0ZvY3VzKCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRUYWJzKVxyXG4gICAgICAgICAgICBjaGlsZC5zZXRTZWxlY3Rpb25Nb2RlKHNlbGVjdGlvbk1vZGUpO1xyXG4gICAgfSwgW3NlbGVjdGlvbk1vZGVdKTtcclxuICAgIHVzZUNoaWxkRmxhZyhzZWxlY3RlZEluZGV4LCBtYW5hZ2VkVGFicy5sZW5ndGgsIChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZFRhYnNbaV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoc2VsZWN0ZWRJbmRleCwgbWFuYWdlZFBhbmVscy5sZW5ndGgsIChpLCB2aXNpYmxlKSA9PiBtYW5hZ2VkUGFuZWxzW2ldPy5zZXRWaXNpYmxlKHZpc2libGUpKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoW3ByZXZDaGlsZENvdW50LCBwcmV2U2VsZWN0ZWRJbmRleF0pID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHNlbGVjdGlvbk1vZGUgPT0gXCJhY3RpdmF0ZVwiKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZWRQYW5lbHNbc2VsZWN0ZWRJbmRleF0/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NoaWxkQ291bnQsIHNlbGVjdGVkSW5kZXgsIHNlbGVjdGlvbk1vZGVdKTtcclxuICAgIGNvbnN0IGdldFRhYkxpc3RJc0ZvY3VzZWQgPSB1c2VTdGFibGVHZXR0ZXIodGFiTGlzdEZvY3VzZWQpO1xyXG4gICAgY29uc3QgdXNlVGFiID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFiKGluZm8pIHtcclxuICAgICAgICAvL2NvbnN0IFtzZWxlY3RlZFRhYklkLCBzZXRTZWxlY3RlZFRhYklkLCBnZXRTZWxlY3RlZFRhYklkXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zdCBbc2VsZWN0aW9uTW9kZUwsIHNldFNlbGVjdGlvbk1vZGVMXSA9IHVzZVN0YXRlKHNlbGVjdGlvbk1vZGUpO1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3QgW3RhYlBhbmVsSWQsIHNldFRhYlBhbmVsSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRhYklkUHJvcHMsIGlkOiB0YWJJZCwgZ2V0SWQ6IGdldFRhYklkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1cIiB9KTtcclxuICAgICAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgLi4uaW5mbywgc2V0U2VsZWN0ZWQsIHRhYklkLCBzZXRUYWJQYW5lbElkLCBzZXRTZWxlY3Rpb25Nb2RlOiBzZXRTZWxlY3Rpb25Nb2RlTCB9KTtcclxuICAgICAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmZvLmluZGV4KTtcclxuICAgICAgICAvLyBjb25zdCB7IGdldFN5bmNIYW5kbGVyLCAuLi5hc3luY0luZm8gfSA9IHVzZUFzeW5jSGFuZGxlcjxFbGVtZW50PigpKHsgY2FwdHVyZTogKGU6IHVua25vd24pID0+IGluZm8uaW5kZXggfSk7XHJcbiAgICAgICAgLy8gY29uc3Qgb25TZWxlY3QgPSBnZXRTeW5jSGFuZGxlcihhc3luY0luZm8ucGVuZGluZz8gbnVsbCA6IChzdGFibGVBc3luY09uU2VsZWN0ID8/IG51bGwpKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZUwgPT0gXCJmb2N1c1wiKSB7XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdCh7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBnZXRJbmRleCgpIH0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGFiYmFibGUsIHNlbGVjdGlvbk1vZGVMLCBlbGVtZW50XSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFBhbmVsc1tpbmZvLmluZGV4XT8uc2V0VGFiSWQodGFiSWQpOyB9LCBbdGFiSWQsIGluZm8uaW5kZXhdKTtcclxuICAgICAgICAvKnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFiSWQodGFiSWQpO1xyXG4gICAgICAgIH0sIFtzZWxlY3RlZCwgdGFiSWRdKSovXHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0Py4oZW5oYW5jZUV2ZW50KGUsIHsgc2VsZWN0ZWRJbmRleDogZ2V0SW5kZXgoKSB9KSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pKHByb3BzKTtcclxuICAgICAgICAgICAgbmV3UHJvcHMucm9sZSA9IFwidGFiXCI7XHJcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9IChzZWxlY3RlZCA/PyBmYWxzZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWNvbnRyb2xzXCJdID0gdGFiUGFuZWxJZDtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVRhYklkUHJvcHModXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZVJlZkVsZW1lbnRQcm9wcyhuZXdQcm9wcykpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYlByb3BzLCBzZWxlY3RlZCB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlVGFiUGFuZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VQYW5lbChpbmZvKSB7XHJcbiAgICAgICAgLy9jb25zdCBbc2VsZWN0ZWRUYWJQYW5lbElkLCBzZXRTZWxlY3RlZFRhYlBhbmVsSWQsIGdldFNlbGVjdGVkVGFiUGFuZWxJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgW3Nob3VsZEZvY3VzLCBzZXRTaG91bGRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgW3RhYklkLCBzZXRUYWJJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlUGFuZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFBhbmVsSWQsIGlkOiB0YWJQYW5lbElkIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRhYi1wYW5lbC1cIiB9KTtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkVGFiUGFuZWwoeyAuLi5pbmZvLCB0YWJQYW5lbElkLCBzZXRUYWJJZCwgZm9jdXMsIHNldFZpc2libGU6IHNldFNlbGVjdGVkIH0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIGZvY3VzKCkge1xyXG4gICAgICAgICAgICBpZiAoZ2V0VGFiTGlzdElzRm9jdXNlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG91bGRGb2N1cyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkRm9jdXMpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG91bGRGb2N1cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbZWxlbWVudCwgc2hvdWxkRm9jdXNdKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4geyBtYW5hZ2VkVGFic1tpbmZvLmluZGV4XT8uc2V0VGFiUGFuZWxJZCh0YWJQYW5lbElkKTsgfSwgW3RhYlBhbmVsSWQsIGluZm8uaW5kZXhdKTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VUYWJQYW5lbFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtbGFiZWxsZWRieVwiXSA9IG1hbmFnZWRUYWJzW2luZm8uaW5kZXhdPy50YWJJZDtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwidGFicGFuZWxcIjtcclxuICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPz89IC0xOyAvLyBNYWtlIHN1cmUgdGhlIHRhYiBwYW5lbCBpcyB0YWJiYWJsZS5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVBhbmVsSWRQcm9wcyh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyhwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiUGFuZWxQcm9wcywgc2VsZWN0ZWQgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVRhYnNMaXN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFiTGlzdCgpIHtcclxuICAgICAgICBmdW5jdGlvbiB1c2VUYWJMaXN0UHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYmxpc3RcIjtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLW9yaWVudGF0aW9uXCJdID0gcGh5c2ljYWxPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHModXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlVGFiTGlzdEhhc0ZvY3VzUHJvcHModXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiTGlzdFByb3BzIH07XHJcbiAgICB9LCBbcGh5c2ljYWxPcmllbnRhdGlvbl0pO1xyXG4gICAgY29uc3QgdXNlVGFic0xhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFic0xhYmVsKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYnNMYWJlbFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVGFiTGFiZWxJZFByb3BzKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVGFic0xhYmVsUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7IHVzZVRhYiwgdXNlVGFiUGFuZWwsIHVzZVRhYnNMaXN0LCB1c2VUYWJzTGFiZWwgfTtcclxuICAgIC8qY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB1c2VMaXN0TmF2aWdhdGlvblByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbjxFPihhcmdzKVxyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJQYW5lbHMsIHVzZU1hbmFnZWRDaGlsZDogdXNlTWFuYWdlZFRhYlBhbmVsIH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcclxuXHJcblxyXG4gICAgY29uc3QgdXNlQXJpYVRhYiA9IHVzZUNhbGxiYWNrKDxFIGV4dGVuZHMgRWxlbWVudD4oYXJnczogVXNlQXJpYVRhYlBhcmFtZXRlcnMpID0+IHtcclxuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkPEU+KGFyZ3MpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUFyaWFUYWJQcm9wczxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHByb3BzOiBQKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMocHJvcHMpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICByZXR1cm4geyB1c2VBcmlhVGFiUHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB1c2VBcmlhVGFiUGFuZWwgPSB1c2VDYWxsYmFjayg8RSBleHRlbmRzIEVsZW1lbnQ+KGFyZ3M6IFVzZUFyaWFUYWJQYW5lbFBhcmFtZXRlcnMpID0+IHtcclxuICAgICAgICBjb25zdCBuZXZlciA9IHVzZU1hbmFnZWRUYWJQYW5lbChhcmdzKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQXJpYVRhYlBhbmVsUHJvcHM8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+Pihwcm9wczogUCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHM8RT4oKSh7fSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgdXNlQXJpYVRhYlBhbmVsUHJvcHMgfTtcclxuICAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXNlQXJpYVRhYnNQcm9wczxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHsuLi5wcm9wc306IFApIHtcclxuICAgICAgICBwcm9wcy5yb2xlID0gXCJ0YWJsaXN0XCI7XHJcbiAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uUHJvcHMocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUFyaWFUYWJzUHJvcHMsXHJcbiAgICAgICAgdXNlQXJpYVRhYixcclxuICAgICAgICB1c2VBcmlhVGFiUGFuZWxcclxuICAgIH0qL1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10YWJzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUhhc0ZvY3VzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWhhcy1mb2N1c1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUmFuZG9tSWQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYVRvb2x0aXAoeyBtb3VzZW92ZXJEZWxheSB9KSB7XHJcbiAgICBtb3VzZW92ZXJEZWxheSA/Pz0gNDAwO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW4sIGdldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0FueU1vdXNlb3Zlciwgc2V0SGFzQW55TW91c2VvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vY29uc3QgW21vdXNlb3ZlcklzVmFsaWQsIHNldE1vdXNlb3ZlcklzVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUb29sdGlwSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVRvb2x0aXBJZFJlZmVyZW5jaW5nUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdG9vbHRpcC1cIiB9KTtcclxuICAgIGNvbnN0IHsgZm9jdXNlZElubmVyOiB0cmlnZ2VyRm9jdXNlZCwgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoKTtcclxuICAgIGNvbnN0IFt0cmlnZ2VySGFzTW91c2VvdmVyLCBzZXRUcmlnZ2VySGFzTW91c2VvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0b29sdGlwSGFzTW91c2VvdmVyLCBzZXRUb29sdGlwSGFzTW91c2VvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZVRpbWVvdXQoe1xyXG4gICAgICAgIHRpbWVvdXQ6IG1vdXNlb3ZlckRlbGF5LFxyXG4gICAgICAgIHRyaWdnZXJJbmRleDogKCt0cmlnZ2VySGFzTW91c2VvdmVyICsgK3Rvb2x0aXBIYXNNb3VzZW92ZXIpLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VySGFzTW91c2VvdmVyIHx8IHRvb2x0aXBIYXNNb3VzZW92ZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRIYXNBbnlNb3VzZW92ZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1c2VUaW1lb3V0KHtcclxuICAgICAgICB0aW1lb3V0OiA1MCxcclxuICAgICAgICB0cmlnZ2VySW5kZXg6ICgrdHJpZ2dlckhhc01vdXNlb3ZlciArICt0b29sdGlwSGFzTW91c2VvdmVyKSxcclxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJIYXNNb3VzZW92ZXIgJiYgIXRvb2x0aXBIYXNNb3VzZW92ZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRIYXNBbnlNb3VzZW92ZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGhhc0FueU1vdXNlb3ZlciB8fCB0cmlnZ2VyRm9jdXNlZCk7XHJcbiAgICB9LCBbaGFzQW55TW91c2VvdmVyLCB0cmlnZ2VyRm9jdXNlZF0pO1xyXG4gICAgY29uc3QgdXNlVG9vbHRpcFRyaWdnZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUb29sdGlwVHJpZ2dlcigpIHtcclxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIHNldFRyaWdnZXJIYXNNb3VzZW92ZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckxlYXZlKGUpIHtcclxuICAgICAgICAgICAgc2V0VHJpZ2dlckhhc01vdXNlb3ZlcihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVRvb2x0aXBUcmlnZ2VyUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIC8vIE5vdGU6IFRob3VnaCBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBmb2N1c2luZyBhY3RpdmF0ZXMgYSB0b29sdGlwLFxyXG4gICAgICAgICAgICAvLyBpdCdzIHBlcmZlY3RseSByZWFzb25hYmxlIHRoYXQgYSBjaGlsZCBlbGVtZW50IHdpbGwgYmUgdGhlIG9uZSB0aGF0J3MgZm9jdXNlZCxcclxuICAgICAgICAgICAgLy8gbm90IHRoaXMgb25lLCBzbyB3ZSBkb24ndCBzZXQgdGFiSW5kZXg9MFxyXG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikodXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlckVudGVyLCBvblBvaW50ZXJMZWF2ZSB9LCB1c2VIYXNGb2N1c1Byb3BzKHByb3BzKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VUb29sdGlwVHJpZ2dlclByb3BzIH07XHJcbiAgICB9LCBbdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wc10pO1xyXG4gICAgY29uc3QgdXNlVG9vbHRpcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRW50ZXIoZSkge1xyXG4gICAgICAgICAgICBzZXRUb29sdGlwSGFzTW91c2VvdmVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJMZWF2ZShlKSB7XHJcbiAgICAgICAgICAgIHNldFRvb2x0aXBIYXNNb3VzZW92ZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1c2VUb29sdGlwUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRvb2x0aXBcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVRvb2x0aXBJZFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJFbnRlciwgb25Qb2ludGVyTGVhdmUgfSwgcHJvcHMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFByb3BzIH07XHJcbiAgICB9LCBbdXNlVG9vbHRpcElkUHJvcHNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlVG9vbHRpcCxcclxuICAgICAgICB1c2VUb29sdGlwVHJpZ2dlcixcclxuICAgICAgICBpc09wZW46IG9wZW4sXHJcbiAgICAgICAgZ2V0SXNPcGVuOiBnZXRPcGVuXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10b29sdGlwLmpzLm1hcCIsbnVsbF0sIm5hbWVzIjpbImwiLCJ1IiwidCIsIm8iLCJyIiwiZiIsImUiLCJjIiwicyIsImEiLCJoIiwidiIsInkiLCJkIiwiXyIsImsiLCJiIiwibSIsImciLCJqIiwidyIsIngiLCJQIiwiTSIsIkEiLCJDIiwiSCIsIiQiLCJUIiwiTyIsIkwiLCJTIiwibiIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGVQIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlTGF5b3V0RWZmZWN0TmF0aXZlIiwidXNlTWVtbyIsInRoaXMiLCJSYW5kb21Xb3JkcyIsImNyZWF0ZUNvbnRleHQiLCJtZW1vIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdE5hdGl2ZSIsInVzZU1vZGFsU29mdERpc21pc3MiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztBQUFHLEtBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUNDLEdBQUMsQ0FBR0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsb0VBQW9FLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBT0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUVYLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRUQsR0FBQyxDQUFDLEtBQUssRUFBRUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQW1DLFNBQVNhLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBT0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRWYsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDZ0IsR0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFZCxHQUFDLEdBQUdKLEdBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUNJLEdBQUMsQ0FBQ0osR0FBQyxDQUFDLGlCQUFpQixHQUFHRyxHQUFDLEVBQUVlLEdBQUMsRUFBQyxDQUFDLFNBQVNBLEdBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUNoQixHQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNPLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDVSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDSixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTSSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFYixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDRCxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQ08sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRWIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNlLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDUCxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUNRLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFbkIsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTa0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTNEIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNuQixHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJYyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUNlLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUNwQixHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDVCxHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQ1MsR0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHSSxHQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDTyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQ1UsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM5QixHQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRUEsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVM4QixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFeEIsR0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBR21CLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUNMLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRUwsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUwsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFZ0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTSCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDdkIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxHQUFDLENBQUMsT0FBTyxFQUFFQSxHQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUV1QixHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUN2QixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFVSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxTQUFTbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDL0IsR0FBQyxDQUFDLEVBQUUsRUFBRUEsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQ1IsR0FBQyxDQUFDRSxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVQLEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQStPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDRCxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ1ksR0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVixHQUFDLENBQUMsS0FBSyxDQUFDUCxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQXVEYSxHQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQ0wsR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUNILEdBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQ0gsR0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUNELEdBQUMsQ0FBQ1gsR0FBQyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDZSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ2IsR0FBQyxDQUFDLENBQUM7O0NDQWxoVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDNEIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNaLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWSxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBU1IsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBNE4sU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNOLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDYSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ2QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQ2EsR0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU1QixHQUFDLEdBQUc0QixHQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDNUIsR0FBQyxDQUFDNEIsR0FBQyxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQ2QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ2EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDZCxHQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDYyxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLHFCQUFxQixDQUFDLFNBQVNkLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztDQ0FyNEQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDWixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUlDLEdBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLEdBQUcsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFxVixJQUEyTSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxJQUFJQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQXFMLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUQsR0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUVELEdBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDTCxHQUFDLENBQUNLLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQXVuQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUosR0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDRSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGtPQUFrTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBK0tGLEdBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDQSxHQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBSSxJQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxjQUFjLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FB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Q2xDLElBQUksSUFBSSxDQUFDLEdBQUc7Q0FDWixRQUFRLE9BQU8sR0FBRyxDQUFDO0NBQ25CLElBQUksSUFBSSxDQUFDLEdBQUc7Q0FDWixRQUFRLE9BQU8sR0FBRyxDQUFDO0NBQ25CLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxLQUFLO0NBQ3hCLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7Q0FDdkIsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztDQUN2QixLQUFLLENBQUM7Q0FDTixDQUFDO0NBV0Q7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtD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QWUsQ0FBQyxNQUFNLENBQUM7Q0FDOUM7Q0FDQTtDQUNBLElBQUksZUFBZSxDQUFDLE1BQU07Q0FDMUIsUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Q0FDdkIsWUFBWSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDeEIsU0FBUztDQUNULGFBQWEsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxVQUFVLEVBQUU7Q0FDeEQsWUFBWSxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ3JDLFNBQVM7Q0FDVCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztDQUM1QjtDQUNBLElBQUksTUFBTSxlQUFlLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUM1SCxJQUFJLE1BQU0sY0FBYyxHQUFHQSxHQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDMUUsSUFBSSxNQUFNLGNBQWMsR0FBR0EsR0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQzFFLElBQUksTUFBTSxlQUFlLEdBQUdBLEdBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Q0FDMUYsSUFBSSxNQUFNLGFBQWEsR0FBR0EsR0FBVyxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxD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
