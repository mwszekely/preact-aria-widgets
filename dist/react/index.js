import { identity, noop as noop$1, debounce } from 'lodash-es';
import { isTabbable, isFocusable } from 'tabbable';
import 'clsx';

var n,l$1,u$2,i$2,r$1,o$1,e$1,f$2,c$1,s$1,a$1,h$1,p$1={},v$1=[],y$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d$1=Array.isArray;function w$1(n,l){for(var u in l)n[u]=l[u];return n}function _$1(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function g$2(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===e[o]&&(e[o]=l.defaultProps[o]);return m$1(l,e,i,r,null)}function m$1(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$2:o,__i:-1,__u:0};return null==o&&null!=l$1.vnode&&l$1.vnode(e),e}function k$1(n){return n.children}function x$1(n,l){this.props=n,this.context=l;}function C$1(n,l){if(null==l)return n.__?C$1(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?C$1(n):null}function S(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return S(n)}}function M$1(n){(!n.__d&&(n.__d=!0)&&i$2.push(n)&&!P$1.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)(P$1);}function P$1(){var n,u,t,r,o,f,c,s;for(i$2.sort(e$1);n=i$2.shift();)n.__d&&(u=i$2.length,r=void 0,f=(o=(t=n).__v).__e,c=[],s=[],t.__P&&((r=w$1({},o)).__v=o.__v+1,l$1.vnode&&l$1.vnode(r),j$1(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[f]:null,c,null==f?C$1(o):f,!!(32&o.__u),s),r.__v=o.__v,r.__.__k[r.__i]=r,z$2(c,r,s),r.__e!=f&&S(r)),i$2.length>u&&i$2.sort(e$1));P$1.__r=0;}function $$1(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,d,w,_,g=t&&t.__k||v$1,m=l.length;for(f=I$1(u,l,g,f),a=0;a<m;a++)null!=(y=u.__k[a])&&(h=-1===y.__i?p$1:g[y.__i]||p$1,y.__i=a,_=j$1(n,y,h,i,r,o,e,f,c,s),d=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&V$1(h.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),4&y.__u||h.__k===y.__k?f=H$1(y,f,n):"function"==typeof y.type&&void 0!==_?f=_:d&&(f=d.nextSibling),y.__u&=-7);return u.__e=w,f}function I$1(n,l,u,t){var i,r,o,e,f,c=l.length,s=u.length,a=s,h=0;for(n.__k=[],i=0;i<c;i++)null!=(r=l[i])&&"boolean"!=typeof r&&"function"!=typeof r?(e=i+h,(r=n.__k[i]="string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?m$1(null,r,null,null,null):d$1(r)?m$1(k$1,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?m$1(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r).__=n,r.__b=n.__b+1,o=null,-1!==(f=r.__i=T$2(r,u,e,a))&&(a--,(o=u[f])&&(o.__u|=2)),null==o||null===o.__v?(-1==f&&h--,"function"!=typeof r.type&&(r.__u|=4)):f!==e&&(f==e-1?h--:f==e+1?h++:(f>e?h--:h++,r.__u|=4))):r=n.__k[i]=null;if(a)for(i=0;i<s;i++)null!=(o=u[i])&&0==(2&o.__u)&&(o.__e==t&&(t=C$1(o)),q$2(o,o));return t}function H$1(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=H$1(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=C$1(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l){return l=l||[],null==n||"boolean"==typeof n||(d$1(n)?n.some(function(n){L(n,l);}):l.push(n)),l}function T$2(n,l,u,t){var i=n.key,r=n.type,o=u-1,e=u+1,f=l[u];if(null===f||f&&i==f.key&&r===f.type&&0==(2&f.__u))return u;if(("function"!=typeof r||r===k$1||i)&&t>(null!=f&&0==(2&f.__u)?1:0))for(;o>=0||e<l.length;){if(o>=0){if((f=l[o])&&0==(2&f.__u)&&i==f.key&&r===f.type)return o;o--;}if(e<l.length){if((f=l[e])&&0==(2&f.__u)&&i==f.key&&r===f.type)return e;e++;}}return -1}function A$2(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y$1.test(l)?u:u+"px";}function F$2(n,l,u,t,i){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||A$2(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||A$2(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(f$2,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c$1,n.addEventListener(l,r?a$1:s$1,r)):n.removeEventListener(l,r?a$1:s$1,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function O$1(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function j$1(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,g,m,b,C,S,M,P,I,H,L,T,A,F=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof F)try{if(b=u.props,C="prototype"in F&&F.prototype.render,S=(a=F.contextType)&&i[a.__c],M=a?S?S.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(C?u.__c=h=new F(b,M):(u.__c=h=new x$1(b,M),h.constructor=F,h.render=B$2),S&&S.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),C&&null==h.__s&&(h.__s=h.state),C&&null!=F.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=w$1({},h.__s)),w$1(h.__s,F.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)C&&null==F.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),C&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(C&&null==F.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),C&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,g);});}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,I=l$1.__r,H=0,C){for(h.state=h.__s,h.__d=!1,I&&I(u),a=h.render(h.props,h.state,h.context),L=0;L<h._sb.length;L++)h.__h.push(h._sb[L]);h._sb=[];}else do{h.__d=!1,I&&I(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++H<25);h.state=h.__s,null!=h.getChildContext&&(i=w$1(w$1({},i),h.getChildContext())),C&&!p&&null!=h.getSnapshotBeforeUpdate&&(g=h.getSnapshotBeforeUpdate(v,y)),f=$$1(n,d$1(T=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?T:[T],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8===f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f;}else for(A=o.length;A--;)_$1(o[A]);else u.__e=t.__e,u.__k=t.__k;l$1.__e(n,u,t);}else null==o&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=N$1(t.__e,u,t,i,r,o,e,c,s);return (a=l$1.diffed)&&a(u),128&u.__u?void 0:f}function z$2(n,u,t){for(var i=0;i<t.length;i++)V$1(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function N$1(u,t,i,r,o,e,f,c,s){var a,h,v,y,w,g,m,b=i.props,k=t.props,x=t.type;if("svg"===x?o="http://www.w3.org/2000/svg":"math"===x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((w=e[a])&&"setAttribute"in w==!!x&&(x?w.localName===x:3===w.nodeType)){u=w,e[a]=null;break}if(null==u){if(null===x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l$1.__m&&l$1.__m(t,e),c=!1),e=null;}if(null===x)b===k||c&&u.data===k||(u.data=k);else {if(e=e&&n.call(u.childNodes),b=i.props||p$1,!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(w=u.attributes[a]).name]=w.value;for(a in b)if(w=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=w;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;F$2(u,a,null,w,o);}for(a in k)w=k[a],"children"==a?y=w:"dangerouslySetInnerHTML"==a?h=w:"value"==a?g=w:"checked"==a?m=w:c&&"function"!=typeof w||b[a]===w||F$2(u,a,w,b[a],o);if(h)c||v&&(h.__html===v.__html||h.__html===u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),$$1(u,d$1(y)?y:[y],t,i,r,"foreignObject"===x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&C$1(i,0),c,s),null!=e)for(a=e.length;a--;)_$1(e[a]);c||(a="value","progress"===x&&null==g?u.removeAttribute("value"):void 0!==g&&(g!==u[a]||"progress"===x&&!g||"option"===x&&g!==b[a])&&F$2(u,a,g,b[a],o),a="checked",void 0!==m&&m!==u[a]&&F$2(u,a,m,b[a],o));}return u}function V$1(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function q$2(n,u,t){var i,r;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||V$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&q$2(i[r],u,t||"function"!=typeof n.type);t||_$1(n.__e),n.__c=n.__=n.__e=void 0;}function B$2(n,l,u){return this.constructor(n,u)}function D$1(u,t,i){var r,o,e,f;t===document&&(t=document.documentElement),l$1.__&&l$1.__(u,t),o=(r="function"==typeof i)?null:t.__k,e=[],f=[],j$1(t,u=(!r&&i||t).__k=g$2(k$1,null,[u]),o||p$1,p$1,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?n.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),z$2(e,u,f);}function G$1(l,u,t){var i,r,o,e,f=w$1({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&void 0!==e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),m$1(l.type,f,i||l.key,r||l.ref,null)}function J$1(n,l){var u={__c:l="__cC"+h$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null;},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.forEach(function(n){n.__e=!0,M$1(n);});},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=v$1.slice,l$1={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,x$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=w$1({},this.state),"function"==typeof n&&(n=n(w$1({},u),this.props)),n&&w$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M$1(this));},x$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M$1(this));},x$1.prototype.render=k$1,i$2=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$1=function(n,l){return n.__v.__b-l.__v.__b},P$1.__r=0,f$2=/(PointerCapture)$|Capture$/i,c$1=0,s$1=O$1(!1),a$1=O$1(!0),h$1=0;

var t,r,u$1,i$1,o=0,f$1=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),c&&c.call(this,n,t,r)||i};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function _(n,u){var i=d(t++,4);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__h.push(i));}function A$1(n){return o=5,T$1(function(){return {current:n}},[])}function F$1(n,t,r){o=6,_(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n));}function T$1(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q$1(n,t){return o=8,T$1(function(){return n},t)}function x(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function g$1(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++;}return n.__}function j(){for(var n;n=f$1.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z$1),n.__H.__h.forEach(B$1),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u$1===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z$1),i.__h.forEach(B$1),i.__h=[],t=0)),u$1=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===c.requestAnimationFrame||((i$1=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u$1=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z$1),n.__h=n.__h.filter(function(n){return !n.__||B$1(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z$1(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B$1(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

function g(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function I(n,t){this.props=n,this.context=t;}function N(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return !r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:g(this.props,n)}function u(e){return this.shouldComponentUpdate=r,g$2(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(I.prototype=new x$1).isPureReactComponent=!0,I.prototype.shouldComponentUpdate=function(n,t){return g(this.props,n)||g(this.state,t)};var M=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),M&&M(n);};var T="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function A(n){function t(t){if(!("ref"in t))return n(t,null);var e=t.ref;delete t.ref;var r=n(t,e);return t.ref=e,r}return t.$$typeof=T,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var O=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);O(n,t,e,r);};var F=l$1.unmount;function U(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=function(n,t){for(var e in t)n[e]=t[e];return n}({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)})),n}function V(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return V(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=e)),n}function W(){this.__u=0,this.o=null,this.__b=null;}function P(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function z(){this.i=null,this.l=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),F&&F(n);},(W.prototype=new x$1).__c=function(n,t){var e=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(e);var u=P(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(c):c());};e.__R=i;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=V(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},W.prototype.componentWillUnmount=function(){this.o=[];},W.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=U(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&g$2(k$1,null,n.fallback);return i&&(i.__u&=-33),[g$2(k$1,null,e.__a?null:n.children),i]};var B=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2];}};function H(n){return this.getChildContext=function(){return n.context},n.children}function Z(n){var e=this,r=n.h;e.componentWillUnmount=function(){D$1(null,e.v),e.v=null,e.h=null;},e.h&&e.h!==r&&e.componentWillUnmount(),e.v||(e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],contains:function(){return !0},appendChild:function(n){this.childNodes.push(n),e.h.appendChild(n);},insertBefore:function(n,t){this.childNodes.push(n),e.h.insertBefore(n,t);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.h.removeChild(n);}}),D$1(g$2(H,{context:e.context},n.__v),e.v);}function Y(n,e){var r=g$2(Z,{__v:n,h:e});return r.containerInfo=e,r}(z.prototype=new x$1).__a=function(n){var t=this,e=P(t.__v),r=t.l.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),B(t,n,r)):u();};e?e(o):o();}},z.prototype.render=function(n){this.i=null,this.l=new Map;var t=L(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},z.prototype.componentDidUpdate=z.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(t,e){B(n,e,t);});};var $="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,q=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,G=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,J=/[A-Z0-9]/g,K="undefined"!=typeof document,Q=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};x$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(x$1.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var tn=l$1.event;function en(){}function rn(){return this.cancelBubble}function un(){return this.defaultPrevented}l$1.event=function(n){return tn&&(n=tn(n)),n.persist=en,n.isPropagationStopped=rn,n.isDefaultPrevented=un,n.nativeEvent=n};var cn={enumerable:!1,configurable:!0,get:function(){return this.class}},fn=l$1.vnode;l$1.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1===e.indexOf("-");for(var i in t){var c=t[i];if(!("value"===i&&"defaultValue"in t&&null==c||K&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var f=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===c?c="":"translate"===f&&"no"===c?c=!1:"o"===f[0]&&"n"===f[1]?"ondoubleclick"===f?i="ondblclick":"onchange"!==f||"input"!==e&&"textarea"!==e||Q(t.type)?"onfocus"===f?i="onfocusin":"onblur"===f?i="onfocusout":G.test(i)&&(i=f):f=i="oninput":o&&q.test(i)?i=i.replace(J,"-$&").toLowerCase():null===c&&(c=void 0),"oninput"===f&&u[i=f]&&(i="oninputCapture"),u[i]=c;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=L(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=L(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",cn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=$,fn&&fn(n);};var ln=l$1.__r;l$1.__r=function(n){ln&&ln(n),n.__c;};var an=l$1.diffed;l$1.diffed=function(n){an&&an(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

/** These are all the event mappings that are shared between Preact/React */
const EventMapping$1 = {
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
    webkittransitionend: null,
};

const toRun = new Map();
// TODO: Whether this goes in options.diffed or options._commit
// is a post-suspense question.
// Right now, using options._commit has the problem of running
// *after* refs are applied, but we need to come before even that
// so `ref={someStableFunction}` works.
// 
// Also it's private.
//
// ...
// Well, useEvent or whatever is finally, finally 4 years later finally here
// which is cool and means we won't need this at all soon.
// So for now we'll stick with diff to prevent any weirdness with
// commit being private and all.
//
// Also, in theory this could be replaced with `useInsertionEffect`,
// but that probably won't be available in Preact for awhile.
const commitName = "diffed";
const newCommit = (vnode, ...args) => {
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
const originalCommit = l$1[commitName];
l$1[commitName] = newCommit;
let incrementingId = 0;
function nextId() {
    let next = ++incrementingId;
    // TODO: This seems reasonable, but is is necessary or are we orders of magnitude from having to worry about overflow?
    if (incrementingId >= Number.MAX_SAFE_INTEGER)
        incrementingId = -Number.MAX_SAFE_INTEGER;
    return next;
}
/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 *
 * @remarks Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 *
 * @param effect
 * @param inputs
 */
const useBeforeLayoutEffect = (function useBeforeLayoutEffect(effect, inputs) {
    // Note to self: This is by far the most called hook by sheer volume of dependencies.
    // So it should ideally be as quick as possible.
    const ref = A$1(null);
    ref.current ??= nextId();
    const id = ref.current;
    if (effect)
        toRun.set(id, { effect, inputs, cleanup: null });
    else
        toRun.delete(id);
    // Not needed, because the insertion cleanup would run before useEffect anyway, I think?
    /*useEffect(() => {
        return () => {
            toRun.delete(id);
        }
    }, [id])*/
});
function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs ||
        oldArgs.length !== newArgs?.length ||
        newArgs?.some((arg, index) => arg !== oldArgs[index]));
}

// Patch the type (only the type) of useCallback to allow for nullable functions
const useCallback = q$1;
function debounceRendering(f) {
    (l$1.debounceRendering ?? queueMicrotask)(f);
}
// @ts-expect-error (These are correct, I don't know why the types are wrong all of a sudden...?)
const onfocusin = "onfocusin";
// @ts-expect-error (Capitalizing these results in errors with at least grid navigation)
const onfocusout = "onfocusout";
const EventMapping = {
    beforetoggle: null,
    dblclick: "onDblClick",
    focusin: "onFocusIn",
    focusout: "onFocusOut",
    formdata: "onFormData",
    toggle: "onToggle",
    contextlost: null,
    contextrestored: null,
    ...EventMapping$1
};

/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 */
function useEnsureStability(parentHookName, ...values) {
    if (process.env.NODE_ENV !== 'development')
        return;
    const helperToEnsureStability = A$1([]);
    const shownError = A$1([]);
    useHelper(values.length, -1);
    values.forEach(useHelper);
    return;
    function useHelper(value, i) {
        const index = i + 1;
        // Make sure that the provided functions are perfectly stable across renders
        if (helperToEnsureStability.current[index] === undefined)
            helperToEnsureStability.current[index] = value;
        if (helperToEnsureStability.current[index] != value) {
            if (!shownError.current[index]) {
                /* eslint-disable no-debugger */
                debugger;
                console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i}-indexed argument (${i >= 0 ? JSON.stringify(values[i]) : "the number of supposedly stable elements"}).`);
                shownError.current[index] = true;
            }
        }
    }
}
/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
 *
 * @remarks To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
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
 * {@include } {@link OnPassiveStateChange}
 *
 * @param onChange - The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param getInitialValue - If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param customDebounceRendering - By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
 * @returns
 */
function usePassiveState(onChange, getInitialValue, { debounceRendering: customDebounceRendering, skipMountInitialization } = { debounceRendering, skipMountInitialization: false }) {
    skipMountInitialization ??= false;
    useEnsureStability("usePassiveState", skipMountInitialization);
    //let [id, ,getId] = useState(() => generateRandomId());
    const valueRef = A$1(Unset$2);
    const reasonRef = A$1(Unset$2);
    const warningRef = A$1(false);
    const dependencyToCompareAgainst = A$1(Unset$2);
    const cleanupCallbackRef = A$1(undefined);
    // Make sure that the provided functions are perfectly stable across renders
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = useCallback(() => {
        const cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback)
            cleanupCallback();
    }, []);
    // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.
    const tryEnsureValue = useCallback(() => {
        if (valueRef.current === Unset$2 && getInitialValue != undefined) {
            try {
                const initialValue = getInitialValue();
                valueRef.current = initialValue;
                cleanupCallbackRef.current = (onChange?.(initialValue, undefined, undefined) ?? undefined);
            }
            catch (ex) {
                // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
            }
        }
    }, [ /* getInitialValue and onChange intentionally omitted */]);
    const getValue = useCallback(() => {
        if (warningRef.current)
            console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
        // The first time we call getValue, if we haven't been given a value yet,
        // (and we were given an initial value to use)
        // return the initial value instead of nothing.
        if (valueRef.current === Unset$2)
            tryEnsureValue();
        return (valueRef.current === Unset$2 ? undefined : valueRef.current);
    }, []);
    if (!skipMountInitialization) {
        // TODO: Very, very few instances require initializing on mount.
        // Grid navigation needs it (for reasons I haven't investigated and do not recall, but is related to a row's 0th cell sometimes erroneously entering the tab order)
        // so it's the default until all use cases are thoroughly exhausted.
        // But in general, we probably don't need so many invocations of `use(Layout!!)Effect`.
        // Also it is safe to wrap this hook in an `if` because 
        // `skipMountInitialization` can't change throughout the lifetime of the component, 
        // so the RoH aren't violated.
        _(() => {
            // Make sure we've run our effect at least once on mount.
            // (If we have an initial value, of course)
            tryEnsureValue();
        }, []);
    }
    // The actual code the user calls to (possibly) run a new effect.
    const setValue = useCallback((arg, reason) => {
        // Regardless of anything else, figure out what our next value is about to be.
        const nextValue = (arg instanceof Function ? arg(valueRef.current === Unset$2 ? undefined : valueRef.current) : arg);
        //let id = getId();
        //console.log((nextValue !== valueRef.current? "" : "NOT ") + "Scheduling effect ", id, " with value ", nextValue);
        if ( /*dependencyToCompareAgainst.current === Unset &&*/nextValue !== valueRef.current) {
            // This is the first request to change this value.
            // Evaluate the request immediately, then queue up the onChange function
            // Save our current value so that we can compare against it later
            // (if we flip back to this state, then we won't send the onChange function)
            dependencyToCompareAgainst.current = valueRef.current;
            // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
            valueRef.current = nextValue;
            reasonRef.current = reason;
            // Schedule the actual check and invocation of onChange later to let effects settle
            (customDebounceRendering ?? debounceRendering)(() => {
                const nextReason = reasonRef.current;
                const nextDep = valueRef.current;
                const prevDep = dependencyToCompareAgainst.current;
                //let id = getId();
                //console.log(((dependencyToCompareAgainst.current != valueRef.current)? "" : "NOT ") + "Running effect ", id, " with value ", nextDep);
                if (dependencyToCompareAgainst.current != valueRef.current) {
                    // TODO: This needs to happen here in order to make recursive onChanges work
                    // but it feels better to have it happen after onChange...
                    valueRef.current = dependencyToCompareAgainst.current = Unset$2;
                    warningRef.current = true;
                    try {
                        // Call any registered cleanup function
                        onShouldCleanUp();
                        valueRef.current = nextDep; // Needs to happen before onChange in case onChange is recursive (e.g. focusing causing a focus causing a focus)
                        cleanupCallbackRef.current = (onChange?.(nextDep, prevDep === Unset$2 ? undefined : prevDep, nextReason) ?? undefined);
                    }
                    finally {
                        // Allow the user to normally call getValue again
                        warningRef.current = false;
                    }
                }
                // We've finished with everything, so mark us as being on a clean slate again.
                dependencyToCompareAgainst.current = Unset$2;
            });
        }
        // Update the value immediately.
        // This will be checked against prevDep to see if we should actually call onChange
        //valueRef.current = nextValue;
    }, []);
    return [getValue, setValue];
}
const Unset$2 = Symbol();
// Easy constants for getInitialValue
function returnTrue() { return true; }
function returnFalse() { return false; }
function returnNull() { return null; }
function returnZero() { return 0; }
/**
 * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
 */
function runImmediately(f) { f(); }

// Get/set the value of process?.env?.NODE_ENV delicately (also fun fact @rollup/plugin-replace works in comments!)
// (i.e. in a way that doesn't throw an error)
globalThis["process"] ??= {};
globalThis["process"]["env"] ??= {};
globalThis["process"]["env"]["NODE_ENV"] = process.env.NODE_ENV;
// The above statement looks redundant, but it ensures that manual
// reads to `process.env.NODE_ENV` work regardless of if the bundler 
// replaces `process.env.NODE_ENV` with the string `"development"` or not.

// TODO: This shouldn't be in every build, I don't think it's in core-js? I think?
// And it's extremely small anyway and basically does nothing.
globalThis.requestIdleCallback ??= (callback) => {
    return setTimeout(() => { callback({ didTimeout: false, timeRemaining: () => { return 0; }, }); }, 5);
};
let timeoutHandle = null;
let i = 0;
/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if process.env.NODE_ENV is "development").
 *
 * @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all.
 * They are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 */
const useMonitoring = ((process.env.NODE_ENV === 'development' && globalThis._monitor_call_duration) ? useMonitoringImpl : dontUseMonitoringImpl);
/**
 *
 */
function dontUseMonitoringImpl(t) {
    return t();
}
/**
 *
 */
function useMonitoringImpl(hook) {
    const h = hook;
    if (process.env.NODE_ENV === 'development' && globalThis._monitor_call_duration) {
        return (function (...args) {
            const r = A$1(++i);
            monitorCallCount(h);
            const start = performance.mark(`${h.name}-start-${r.current}`);
            const ret = h(...args);
            const end = performance.mark(`${h.name}-end-${r.current}`);
            performance.measure(h.name, start.name, end.name);
            return ret;
        });
    }
    else {
        return hook;
    }
}
/**
 * When called inside a hook, monitors each call of that hook and prints the results to a table once things settle.
 *
 * @remarks Re-renders and such are all collected together when the table is printed to the console with `requestIdleCallback`.
 */
function monitorCallCount(hook) {
    if (process.env.NODE_ENV !== 'development')
        return;
    const name = hook.name;
    if (filterAll || filters.has(name))
        return;
    console.assert(name.length > 0);
    globalThis._hookCallCount ??= { callCounts: {} };
    globalThis._hookCallCount.callCounts[name] ??= { moment: 0, total: 0 };
    globalThis._hookCallCount.callCounts[name].moment += 1;
    globalThis._hookCallCount.callCounts[name].total += 1;
    if (timeoutHandle == null) {
        timeoutHandle = requestIdleCallback(() => {
            //console.log((window as WindowWithHookCallCount)._hookCallCount.callCountsMoment);
            //(window as WindowWithHookCallCount)._hookCallCount.callCountsMoment = {};
            const o = Object.entries(globalThis._hookCallCount.callCounts)
                .map(([hook, counts]) => { return { Hook: hook || "?", Now: counts?.moment || 0, Total: counts?.total || 0 }; })
                .filter(({ Now }) => { return !!Now; })
                .sort(({ Now: lhsM }, { Now: rhsM }) => {
                if (!lhsM && !rhsM)
                    return 0;
                lhsM ||= Infinity;
                rhsM ||= Infinity;
                return lhsM - rhsM;
            });
            console.table(o, ['Hook', 'Now', 'Total']);
            Object.entries(globalThis._hookCallCount.callCounts).forEach(([, counts]) => { counts.moment = 0; });
            timeoutHandle = null;
        });
    }
}
let filterAll = false;
const filters = new Set();

const Unset$1 = Symbol("unset");
/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 */
function useStableGetter(value) {
    return useMonitoring(function useStableGetter() {
        const ref = A$1(Unset$1);
        useBeforeLayoutEffect((() => { ref.current = value; }), [value]);
        return useCallback(() => {
            if (ref.current === Unset$1) {
                throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
            }
            return ref.current;
        }, []);
    });
}
/**
 * Like useMemo, but checks objects (shallowly)
 *
 * @param t
 * @returns
 */
function useMemoObject(t) {
    return T$1(() => { return t; }, Object.values(t));
}

function isStableGetter(obj) {
    return false;
}
function setIsStableGetter(obj) {
    return obj;
}
/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 *
 * @remarks In general, just pass the function you want to be stable (but you can't use it during render,
 * so be careful!).  Alternatively, if you need a stable callback that **can** be used
 * during render, pass an empty dependency array and it'll act like `useCallback` with an
 * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
 * truly has no dependencies/only stable dependencies!!
 */
function useStableCallback(fn, noDeps) {
    return useMonitoring(function useStableCallback() {
        useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter());
        if (isStableGetter())
            return fn;
        if (noDeps == null) {
            const currentCallbackGetter = useStableGetter(fn);
            return setIsStableGetter(useCallback(((...args) => {
                return currentCallbackGetter()(...args);
            }), []));
        }
        else {
            console.assert(noDeps.length === 0);
            return setIsStableGetter(useCallback(fn, []));
        }
    });
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function useStableMergedCallback(...fns) {
    return useMonitoring(function useStableMergedCallback() {
        return useStableCallback((...args) => {
            for (let i = 0; i < fns.length; ++i) {
                fns[i]?.(...args);
            }
        });
    });
}

/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 */
function useGlobalHandler(target, type, handler, options, mode) {
    return useMonitoring(function useGlobalHandler() {
        mode ||= "grouped";
        useEnsureStability("useGlobalHandler", target, mode);
        if (!target)
            return;
        if (mode === "grouped") {
            // Note to self: The typing doesn't improve even if this is split up into a sub-function.
            // No matter what, it seems impossible to get the handler's event object typed perfectly.
            // It seems like it's guaranteed to always be a union of all available types.
            // Again, no matter what combination of sub- or sub-sub-functions used.
            useGlobalHandlerGrouped(target, type, handler, options);
        }
        else {
            useGlobalHandlerSingle(target, type, handler, options);
        }
    });
}
let mapThing = new Map();
function doMapThing(op, target, type, handler, options) {
    if (handler) {
        const optionsKey = JSON.stringify(options);
        const byType = mapThing.get(target) || new Map();
        const byOptions = (byType.get(type) || new Map());
        const info = byOptions.get(optionsKey) || { listener: null, listeners: new Set() };
        op(info, handler);
        byOptions.set(optionsKey, info);
        byType.set(type, byOptions);
        mapThing.set(target, byType);
    }
}
function addToMapThing(target, type, handler, options) {
    doMapThing((info, h) => {
        info.listeners.add(h);
        if (info.listener == null)
            target.addEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);
}
function removeFromMapThing(target, type, handler, options) {
    doMapThing((info, h) => {
        info.listeners.delete(h);
        if (info.listener == null)
            target.removeEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);
}
/**
 * This is way faster for large numbers of event handlers.
 *
 * For example, if every button listens for a global click, or something,
 * it would be nice if it was efficient at least.
 */
function useGlobalHandlerGrouped(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => { }));
    if (handler == null)
        stableHandler = null;
    y(() => {
        if (stableHandler) {
            addToMapThing(target, type, stableHandler, options);
            return () => removeFromMapThing(target, type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}
function useGlobalHandlerSingle(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => { }));
    if (handler == null)
        stableHandler = null;
    y(() => {
        if (stableHandler) {
            target.addEventListener(type, stableHandler, options);
            return () => target.removeEventListener(type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}

// eslint-disable-next-line no-restricted-globals
function getWindow(element) { return (typeof window == "undefined") ? undefined : (globalThis ?? {}); }
// eslint-disable-next-line no-restricted-globals
function getDocument(element) { return (typeof window == "undefined") ? undefined : (element?.ownerDocument ?? getWindow()?.document) ?? undefined; }

/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
function useBackdropDismiss({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    return useMonitoring(function useBackdropDismiss() {
        const getOpen = useStableGetter(open);
        const onClose = useStableGetter(onCloseUnstable);
        const onBackdropClick = useCallback(function onBackdropClick(e) {
            if (!getOpen())
                return;
            // Basically, "was this event fired on an element not contained by the modal?"
            // There are multiple ways browser react to "interacting with nothing", and this takes care of everything.
            let element = getElement();
            let foundInsideClick = false;
            if (e.target && element && element.contains(e.target)) {
                foundInsideClick = true;
            }
            if (!foundInsideClick) {
                onClose()?.(e);
            }
        }, []);
        useGlobalHandler(getWindow(), "mousedown", open ? onBackdropClick : null, { capture: true });
        useGlobalHandler(getWindow(), "touchstart", open ? onBackdropClick : null, { capture: true });
    });
}

/**
 * Quick and easy way to add extra information to an event that was fired.
 *
 * For example, "this was a click event, but it has information about what list item was pressed too."
 *
 * Get that extra information from the [EventDetail] symbol.
 */
const EventDetail = Symbol("event-detail");
function enhanceEvent(e, detail) {
    const event = (e ?? {});
    event[EventDetail] ??= {};
    Object.assign(event[EventDetail], detail);
    return event;
}

const MagicWindowKey = ("__preact-prop-helpers-escape-key-dismiss__");
function getElementDepth(element) {
    let depth = 0;
    let parent = element.parentElement;
    while (parent) {
        depth += 1;
        parent = parent.parentElement;
    }
    return depth;
}
/**
 * Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)
 *
 * @remarks One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.
 *
 * TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.
 *
 * @compositeParams
 */
function useEscapeDismiss({ escapeDismissParameters: { onDismissEscape: onClose, dismissEscapeActive: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }) {
    return useMonitoring(function useEscapeDismiss() {
        const stableOnClose = useStableGetter(onClose);
        const getDocument = useStableCallback(unstableGetDocument);
        const getDepth = useStableGetter(parentDepth + 1);
        // When this component opens, add an event listener that finds the deepest open soft dismiss element to actually dismiss.
        // Only opened components will add event handlers, and will remove them once closed.
        // The reason this is so complicated is because:
        // 1. We must only close one soft dismiss component at a time.  If there's a tooltip in a popup, the tooltip must be dismissed.
        // 2. `keydown` events don't just work on arbitrary elements, for our purposes they must be from the `window`. So we can't rely on normal capturing or bubbling behavior on the element itself.
        // 3. Event handlers added to the `window` via `addEventHandler` are called in the order of registration, which is completely at odds with #1.
        //
        // So all soft dismiss components listen for a keydown of Escape, 
        // then the first one to do so will wait for a microtask, 
        // then find the deepest element in the document tree to dismiss of all of those components currently open.
        y(() => {
            const document = getDocument();
            const window = document.defaultView;
            window[MagicWindowKey] ??= { microtaskQueued: false, elementQueue: new Map() };
            const info = window[MagicWindowKey];
            if (open) {
                window.addEventListener("keydown", handler, { capture: true });
                return () => {
                    const element = getElement();
                    if (element && info.elementQueue)
                        info.elementQueue.delete(element);
                    window.removeEventListener("keydown", handler, { capture: true });
                };
            }
            function handler(e) {
                if (e.key == "Escape") {
                    // We don't know which of the currently active soft dismisses will actually do something,
                    // but ONE of them definitely will,
                    // so we stop propagation to child nodes, but not to everyone on the window (stopImmediatePropagation).
                    e.preventDefault();
                    e.stopPropagation();
                    // This is what at least one of the elements will call
                    const onClose2 = () => { stableOnClose()?.(enhanceEvent(e, { reason: "escape" })); };
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
                            info.elementQueue = new Map();
                            let deepestDepth = -Infinity;
                            let deepestTreeDepth = -Infinity;
                            let deepestOnClose = null;
                            for (const [element, { depth, onClose, treeDepth }] of elementQueue) {
                                let tieBroken = false;
                                if (depth == deepestDepth) {
                                    if (treeDepth > deepestTreeDepth) {
                                        tieBroken = true;
                                    }
                                }
                                if (depth > deepestDepth || (depth == deepestDepth && tieBroken)) {
                                    deepestDepth = depth;
                                    deepestTreeDepth = treeDepth;
                                    deepestOnClose = onClose;
                                }
                            }
                            deepestOnClose?.();
                        }, 0);
                    }
                }
            }
        }, [open]);
    });
}

/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
function useLostFocusDismiss({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }) {
    return useMonitoring(function useLostFocusDismiss() {
        const { getElement: getSourceElement, ...void2 } = (refElementSourceReturn ?? {});
        const stableOnClose = useStableGetter(onClose);
        const getOpen = useStableGetter(open);
        const onLastActiveElementChange = useCallback((newElement, _prevElement, e) => {
            const open = getOpen();
            const sourceElement = getSourceElement?.();
            const popupElement = getPopupElement();
            if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
                if (open) {
                    console.assert(e != null);
                    stableOnClose()?.(e);
                }
            }
        }, [getSourceElement]);
        return { activeElementParameters: { onLastActiveElementChange } };
    });
}

/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 *
 * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
 */
function useMergedChildren(lhs, rhs) {
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
        return g$2(k$1, {}, lhs, rhs);
    }
}

/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
function useMergedClasses(...classes) {
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    let classesSet = new Set();
    for (let c of classes) {
        if (typeof c == "string" && c.trim())
            classesSet.add(c);
    }
    if (classesSet.size) {
        return Array.from(classesSet).join(" ");
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
    else {
        /* eslint-disable no-debugger */
        debugger;
        console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
}
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 *
 * @remarks Or just use {@link useMergedProps}
 */
function useMergedRefs(rhs, lhs) {
    // This *must* be stable in order to prevent repeated reset `null` calls after every render.
    const combined = useStableCallback(function combined(current) {
        processRef(current, lhs);
        processRef(current, rhs);
    });
    if (lhs == null && rhs == null) {
        return undefined;
    }
    else if (lhs == null) {
        if (process.env.NODE_ENV === 'development')
            console.assert(typeof rhs == "function" || "current" in rhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
        return rhs;
    }
    else if (rhs == null) {
        if (process.env.NODE_ENV === 'development')
            console.assert(typeof lhs == "function" || "current" in lhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
        return lhs;
    }
    else {
        return combined;
    }
}

function styleStringToObject(style) {
    // TODO: This sucks D:
    return Object.fromEntries(style.split(";").map(statement => statement.split(":")));
}
/**
 * Merges two style objects, returning the result.
 *
 * @param style - The user-given style prop for this component
 * @param obj - The CSS properties you want added to the user-given style
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
            // (useMergedStyles isn't a true hook -- this isn't a violation)
            if (typeof lhs == "string")
                return useMergedStyles(styleStringToObject(lhs), rhs);
            if (typeof rhs == "string")
                return useMergedStyles(lhs, styleStringToObject(rhs));
        }
        // Logic???
        return undefined;
    }
    // They're both strings, just concatenate them.
    if (typeof lhs == "string") {
        return `${lhs};${rhs ?? ""}`;
    }
    // They're both objects, just merge them.
    return {
        ...(lhs ?? {}),
        ...(rhs ?? {})
    };
}

let log = console.warn;
/**
 * Given two sets of props, merges them and returns the result.
 *
 * @remarks The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, `children`, and all event handlers.
 *
 * If two sets of props both specify the same attribute, e.g. both specify two different `id`s, then an error will be printed to the console (customize this with {@link enableLoggingPropConflicts}), as this conflict needs to be arbitrated on by you.
 *
 * {@include } {@link enableLoggingPropConflicts}
 *
 * @see {@link useMergedRefs}
 * @see {@link useMergedStyles}
 * @see {@link useMergedClasses}
 * @see {@link useMergedChildren}
 *
 * @param allProps - A variadic number of props to merge into one
 *
 * @returns A single object with all the provided props merged into one.
 */
function useMergedProps(...allProps) {
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
        useMergedPropsHelper(ret, nextProps);
    }
    return ret;
}
const knowns = new Set(["children", "ref", "className", "class", "style"]);
function mergeUnknown(key, lhsValue, rhsValue) {
    if (typeof lhsValue === "function" || typeof rhsValue === "function") {
        // They're both functions that can be merged (or one's a function and the other's null).
        // Not an *easy* case, but a well-defined one.
        const merged = mergeFunctions(lhsValue, rhsValue);
        return merged;
    }
    else {
        // Uh...they're not both functions so we're here because one of them's null, right?
        if (lhsValue == null && rhsValue == null) {
            if (rhsValue === null && lhsValue === undefined)
                return rhsValue;
            else
                return lhsValue;
        }
        if (lhsValue == null)
            return rhsValue;
        else if (rhsValue == null)
            return lhsValue;
        else if (rhsValue == lhsValue) {
            // I mean, they're the same value at least
            // so we don't need to do anything.
            // Not really ideal though.
            return rhsValue;
        }
        else {
            // Ugh.
            // No good strategies here, just log it if requested
            log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
            return rhsValue;
        }
    }
}
/**
 * Helper function.
 *
 * This is one of the most commonly called functions in this and consumer libraries,
 * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
 */
function useMergedPropsHelper(target, mods) {
    target.ref = useMergedRefs(target.ref, mods.ref);
    target.style = useMergedStyles(target.style, mods.style);
    target.className = useMergedClasses(target["class"], target.className, mods["class"], mods.className);
    target.children = useMergedChildren(target.children, mods.children);
    if (target.ref === undefined)
        delete target.ref;
    if (target.style === undefined)
        delete target.style;
    if (target.className === undefined)
        delete target.className;
    if (target["class"] === undefined)
        delete target["class"];
    if (target.children === undefined)
        delete target.children;
    for (const rhsKeyU in mods) {
        const rhsKey = rhsKeyU;
        if (knowns.has(rhsKey))
            continue;
        target[rhsKey] = mergeUnknown(rhsKey, target[rhsKey], mods[rhsKey]);
    }
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function mergeFunctions(lhs, rhs) {
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
}

function generateStack() {
    if (process.env.NODE_ENV === 'development' && globalThis._generate_setState_stacks) {
        try {
            throw new Error();
        }
        catch (e) {
            return e.stack;
        }
    }
    return undefined;
}
/**
 * Returns a function that retrieves the stack at the time this hook was called (in development mode only).
 *
 * @remarks The global variable `_generate_setState_stacks` must be true, or no stack will be generated.
 */
function useStack() {
    if (process.env.NODE_ENV === "development") {
        const stack = T$1(generateStack, []);
        const getStack = useCallback(() => stack, []);
        return getStack;
    }
    else {
        return returnEmptyString;
    }
}
function returnEmptyString() { return ""; }

/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
function focus$1(e) {
    if (process.env.NODE_ENV === 'development' && globalThis.LOG_FOCUS_CHANGES === true) {
        console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e);
        console.log(generateStack());
    }
    e?.focus?.();
}
/**
 * When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
 *
 * If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
 *
 * **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
 */
function findBackupFocus(unmountingElement) {
    if (unmountingElement == null)
        return (globalThis.document.body);
    let document = unmountingElement.ownerDocument;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let node = walker.firstChild();
    let bestCandidateBefore = null;
    let bestCandidateAfter = null;
    let w = false;
    while (node) {
        let pos = node.compareDocumentPosition(unmountingElement);
        if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
            if (!w)
                console.warn("Can't focus anything near a disconnected element");
            w = true;
        }
        if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
            // The unmounting element is before this element we're tree-walking.
            // That means the next tabbable element we find is the candidate we really want.
            if (node instanceof Element) {
                if (isTabbable(node)) {
                    bestCandidateAfter = node;
                    break;
                }
            }
        }
        else if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
            // The unmounting element is after this element we're tree-walking.
            // That means the we're getting closer and closer.
            // If this element is tabbable, then it's even closer than any other tabbable element we've saved up to this point.
            if (node instanceof Element) {
                if (isTabbable(node)) {
                    bestCandidateBefore = node;
                }
            }
        }
        node = walker.nextNode();
    }
    return bestCandidateAfter ?? bestCandidateBefore ?? document.body;
}

/**
 * Runs a function the specified number of milliseconds after the component renders.
 *
 * @remarks This is particularly useful to function as "useEffect on a delay".
 *
 * @remarks
 * {@include } {@link UseTimeoutParameters}
 */
function useTimeout({ timeout, callback, triggerIndex }) {
    return useMonitoring(function useTimeout() {
        const stableCallback = useStableCallback(() => { startTimeRef.current = null; callback(); });
        const getTimeout = useStableGetter(timeout);
        // Set any time we start timeout.
        // Unset any time the timeout completes
        const startTimeRef = A$1(null);
        const disabled = (timeout == null);
        // Any time the triggerIndex changes (including on mount)
        // restart the timeout.  The timeout does NOT reset
        // when the duration or callback changes, only triggerIndex.
        y(() => {
            if (!disabled) {
                const timeout = getTimeout();
                console.assert(disabled == (timeout == null));
                if (timeout != null) {
                    startTimeRef.current = +(new Date());
                    const handle = setTimeout(stableCallback, timeout);
                    return () => clearTimeout(handle);
                }
            }
        }, [triggerIndex, disabled]);
        const getElapsedTime = useCallback(() => {
            return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
        }, []);
        const getRemainingTime = useCallback(() => {
            const timeout = getTimeout();
            return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
        }, []);
        return { getElapsedTime, getRemainingTime };
    });
}

let idIndex = 0;
/**
 * Debug function that yells at you if your forgot to use the props a hook returns.
 *
 * @remarks Like other debug hooks, only has any effect IFF there is a global variable called `process.env.NODE_ENV` and it contains the value `"development"`, AND there is a global variable called `_generate_useTagProps_tags` set to true, and stacks are only generated if `_generate_setState_stacks` is true..
 *
 * @param props - The props to return a modified copy of
 * @param tag - Should be unique
 * @returns A modified copy of the given props
 */
function useTagProps(props, tag) {
    if (process.env.NODE_ENV === 'development' && globalThis._generate_useTagProps_tags) {
        const [id] = h(() => ++idIndex);
        const propsIdTag = `data-props-${tag}-${id}`;
        const getStack = useStack();
        // Don't have multiple tags of the same type on the same props, means a hook has been called twice!
        console.assert(!(props && typeof props == "object" && tag in props));
        useTimeout({
            callback: () => {
                const document = getDocument();
                if (document) {
                    let element = document.querySelectorAll(`[${propsIdTag}]`);
                    if (element.length != 1) {
                        console.error("A hook returned props that were not properly spread to any HTMLElement:");
                        console.log(getStack());
                        /* eslint-disable no-debugger */
                        debugger;
                    }
                }
            },
            timeout: 250,
            triggerIndex: tag
        });
        return T$1(() => {
            return { ...props, [propsIdTag]: true /*, [tag as never]: true*/ };
        }, [props, tag]);
    }
    else {
        return props;
    }
}

/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.
 *
 * @remarks There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.
 *
 * @see {@link useCompleteListNavigation}, which packages everything up together.
 *
 * @compositeParams
 */
function useLinearNavigation({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, processedIndexManglerReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }) {
    return useMonitoring(function useLinearNavigation() {
        let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
        useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexDemangler, indexMangler);
        const navigateAbsolute = useCallback((requestedIndexMangled, searchDirection, e, fromUserInteraction, mode) => {
            const highestChildIndex = getHighestIndex();
            const lowestChildIndex = getLowestIndex();
            (getTabbableIndex() ?? 0);
            const targetDemangled = indexDemangler(requestedIndexMangled);
            const { status, valueDemangled } = tryNavigateToIndex({ isValid: isValidForLinearNavigation, lowestChildIndex, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetDemangled });
            if (status == "past-end") {
                if (navigatePastEnd == "wrap") {
                    if (mode == "single")
                        navigateToFirst(e, fromUserInteraction);
                    else {
                        /* eslint-disable no-constant-condition */
                        // Uncomment to allow page up/down to wrap after hitting the top/bottom once.
                        // It works fine, the problem isn't that -- the problem is it just feels wrong. 
                        // Page Up/Down don't feel like they should wrap, even if normally requested. 
                        // That's the arrow keys' domain.
                        navigateToLast(e, fromUserInteraction);
                    }
                    return "stop";
                }
                else if (navigatePastEnd == "passthrough") {
                    return "passthrough";
                }
                else {
                    navigatePastEnd();
                    return "stop";
                }
            }
            else if (status == "past-start") {
                if (navigatePastStart == "wrap") {
                    if (mode == "single") {
                        navigateToLast(e, fromUserInteraction);
                    }
                    else {
                        /* eslint-disable no-constant-condition */
                        // See above. It works fine but just feels wrong to wrap on Page Up/Down.
                        navigateToFirst(e, fromUserInteraction);
                    }
                    return "stop";
                }
                else if (navigatePastStart == "passthrough") {
                    return "passthrough";
                }
                else {
                    navigatePastStart();
                    return "stop";
                }
            }
            else {
                setTabbableIndex(valueDemangled, e, fromUserInteraction);
                onNavigateLinear?.(valueDemangled, e);
                return "stop";
            }
        }, []);
        const navigateToFirst = useStableCallback((e, fromUserInteraction) => { return navigateAbsolute(getLowestIndex(), -1, e, fromUserInteraction, "single"); });
        const navigateToLast = useStableCallback((e, fromUserInteraction) => { return navigateAbsolute(getHighestIndex(), 1, e, fromUserInteraction, "single"); });
        const navigateRelative2 = useStableCallback((e, offset, fromUserInteraction, mode) => {
            getHighestIndex();
            const searchDirection = (Math.sign(offset) || 1);
            const original = (getTabbableIndex() ?? 0);
            /**
             * To get the target, we need to add (or subtract) 1 to our current value,
             * but it need to be relative to any sorting/rearranging that's happened.
             *
             * We mangle the index to get its "visual" position, add our offset,
             * and then demangle it to get the child that corresponds to the next child "visually".
             */
            const targetMangled = indexMangler(original) + offset;
            return navigateAbsolute(targetMangled, searchDirection, e, fromUserInteraction, mode);
        });
        const navigateToNext = useStableCallback((e, fromUserInteraction) => {
            return navigateRelative2(e, 1, fromUserInteraction, "single");
        });
        const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
            return navigateRelative2(e, -1, fromUserInteraction, "single");
        });
        //const getDisableHomeEndKeys = useStableGetter(disableHomeEndKeys);
        //const getArrowKeyDirection = useStableGetter(arrowKeyDirection);
        //const getPageNavigationSize = useStableGetter(pageNavigationSize);
        const stableProps = A$1(useTagProps({
            onKeyDown: useStableCallback((e) => {
                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                // TODO: ctrlKey was here too, but multi-selection uses that when in focus-selection mode.
                if (e.metaKey)
                    return;
                const allowsVerticalNavigation = (arrowKeyDirection == "vertical" || arrowKeyDirection == "either");
                const allowsHorizontalNavigation = (arrowKeyDirection == "horizontal" || arrowKeyDirection == "either");
                let childRange = (getHighestIndex() - getLowestIndex());
                let paginatedRange = getPaginatedRange() ?? childRange;
                let truePageNavigationSize = pageNavigationSize;
                if (truePageNavigationSize != null && truePageNavigationSize < 1) {
                    truePageNavigationSize = Math.round(truePageNavigationSize * Math.max(10, paginatedRange + 1));
                }
                let result = "passthrough";
                // Arrow keys only take effect for components oriented in that direction,
                // so we want to make sure we only listen for left/right or up/down when appropriate.
                let keyPressIsValidForOrientation = true;
                switch (e.key) {
                    case "ArrowUp":
                    case "ArrowDown":
                        keyPressIsValidForOrientation = (allowsVerticalNavigation);
                        break;
                    case "ArrowLeft":
                    case "ArrowRight":
                        keyPressIsValidForOrientation = (allowsHorizontalNavigation);
                        break;
                }
                if (keyPressIsValidForOrientation) {
                    switch (e.key) {
                        case "ArrowUp":
                        case "ArrowLeft":
                            result = navigateToPrev(e, true);
                            break;
                        case "ArrowDown":
                        case "ArrowRight":
                            result = navigateToNext(e, true);
                            break;
                        case "PageUp":
                        case "PageDown":
                            if (truePageNavigationSize == null)
                                break;
                            else if (truePageNavigationSize > 0)
                                result = navigateRelative2(e, truePageNavigationSize * (e.key.endsWith('n') ? 1 : -1), true, "page");
                            break;
                        case "Home":
                        case "End":
                            if (!disableHomeEndKeys) {
                                if (e.key.endsWith('e'))
                                    navigateToFirst(e, true);
                                else
                                    navigateToLast(e, true);
                                result = 'stop';
                            }
                            break;
                    }
                }
                if (result && result != 'passthrough') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            })
        }, "data-linear-navigation"));
        return {
            linearNavigationReturn: {},
            propsStable: stableProps.current
        };
    });
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }) {
    if (searchDirection === -1) {
        let bestUpResult = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        return bestUpResult || { valueDemangled: targetDemangled, status: "normal" };
    }
    else {
        let bestDownResult = undefined;
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
        return undefined;
    }
    if (targetDemangled < lower) {
        return { valueDemangled: indexDemangler(lower), status: "past-start" };
    }
    else {
        return { valueDemangled: targetDemangled, status: "normal" };
    }
}
function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex: upper }) {
    while (targetDemangled <= upper && !isValid(targetDemangled)) {
        targetDemangled = indexDemangler(indexMangler(targetDemangled) + 1);
    }
    if (!isValid(targetDemangled)) {
        return undefined;
    }
    if (targetDemangled > upper) {
        return { valueDemangled: indexDemangler(upper), status: "past-end" };
    }
    else {
        return { valueDemangled: targetDemangled, status: "normal" };
    }
}

/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 *
 * @remarks This hook is designed to be lightweight, in that the parent keeps no state
 * and runs no effects.  Each child *does* run an effect, but with no state
 * changes unless you explicitly request them.
 *
 * {@include } {@link ManagedChildren}
 *
 * @hasChild {@link useManagedChild}
 *
 * @compositeParams
 */
function useManagedChildren(parentParameters) {
    return useMonitoring(function useManagedChildren() {
        const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
        useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
        const getHighestIndex = useCallback(() => { return managedChildrenArray.current.highestIndex; }, []);
        const getLowestIndex = useCallback(() => { return managedChildrenArray.current.lowestIndex; }, []);
        // All the information we have about our children is stored in this **stable** array.
        // Any mutations to this array **DO NOT** trigger any sort of a re-render.
        const managedChildrenArray = A$1({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });
        // For indirect access to each child
        // Compare getManagedChildInfo
        // TODO: The primary use for this is flaggable closest fits
        // which needs to search all children for that closest fit.
        // It would be nice if there was something better for that.
        const forEachChild = useCallback((f) => {
            for (const child of managedChildrenArray.current.arr) {
                if (child) {
                    if (f(child) == 'break')
                        return;
                }
            }
            for (const field in managedChildrenArray.current.rec) {
                const child = managedChildrenArray.current.rec[field];
                if (child)
                    if (f(child) == 'break')
                        return;
            }
        }, []);
        // Retrieves the information associated with the child with the given index.
        // `undefined` if not child there, or it's unmounted.
        const getManagedChildInfo = useCallback((index) => {
            if (typeof index == "number")
                return managedChildrenArray.current.arr[index];
            else
                return managedChildrenArray.current.rec[index];
        }, []);
        const shrinkwrapHandle = A$1(null);
        // When we unmount children, we'd like to reduce the array length accordingly.
        // We do this a tick after useEffect to wait for all the child dust to settle, 
        // because this is not critical work; it's just for memory optimization.
        // Honestly, it might even be better to delete this? TODO, I guess.
        const scheduleShrinkwrap = useCallback(() => {
            if (shrinkwrapHandle.current != null)
                clearTimeout(shrinkwrapHandle.current);
            shrinkwrapHandle.current = setTimeout(() => {
                let shave = 0;
                while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == undefined) {
                    ++shave;
                }
                managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
                managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
                shrinkwrapHandle.current = null;
                // TODO: length automatically adjusts to give us the highest index,
                // but there's no corresponding property to get the lowest index when it changes...
                // managedChildrenArray.current.lowestIndex = managedChildrenArray.current.arr.length - 1;
            }, 1);
        }, []);
        // tl;dr this is a way to have run useLayoutEffect once after all N children
        // have mounted and run *their* useLayoutEffect, but also *without* re-rendering
        // ourselves because of having a `childCount` state or anything similar.
        //
        // When the child count ref updates, we want the parent to also run an effect
        // to maybe do something with all these children that just mounted.
        // The easiest way would be useEffect(..., [childCount]) but
        // that would require us having a childCount state, then calling
        // setChildCount and re-rendering every time children mount
        // (only one re-render at a time unless children are staggered, but still)
        // 
        // As an alternate solution, any time a child uses ULE on mount, it queues a microtask
        // to emulate running ULE on the parent. Only the first child will actually queue
        // the microtask (by checking hasRemoteULE first) so that the "effect" only
        // runs once. When it's done, hasRemoteULE is reset so it can run again if
        // more children mount/unmount.
        const hasRemoteULEChildMounted = A$1(null);
        const remoteULEChildMounted = useCallback((index, mounted) => {
            if (!hasRemoteULEChildMounted.current) {
                hasRemoteULEChildMounted.current = {
                    mounts: new Set(),
                    unmounts: new Set(),
                    mountInfos: new Map()
                };
                debounceRendering(() => {
                    const { mounts, unmounts } = hasRemoteULEChildMounted.current;
                    const unmountsThatDidntMount = unmounts.difference(mounts);
                    for (const index of mounts) {
                        if (typeof index == "number") {
                            managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
                            managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
                        }
                    }
                    for (const index of unmountsThatDidntMount) {
                        if (typeof index == "number")
                            delete managedChildrenArray.current.arr[index];
                        else
                            delete managedChildrenArray.current.rec[index];
                    }
                    if (onChildrenCountChange || onChildrenMountChange) {
                        onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
                        onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
                        hasRemoteULEChildMounted.current = null;
                    }
                });
            }
            hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
        }, [ /* Must remain stable */]);
        y(() => {
            scheduleShrinkwrap();
        }, []);
        const managedChildren = useMemoObject({
            ...{ _: managedChildrenArray.current },
            forEach: forEachChild,
            getAt: getManagedChildInfo,
            getHighestIndex: getHighestIndex,
            getLowestIndex: getLowestIndex,
            _arraySlice: useCallback(() => {
                let ret = managedChildrenArray.current.arr.slice();
                const max = getHighestIndex();
                for (let i = 0; i <= max; ++i) {
                    if (ret[i] == null)
                        ret[i] = { index: i };
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
}
/**
 * @compositeParams
 */
function useManagedChild({ context, info }) {
    return useMonitoring(function useManagedChild() {
        const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted } } = (context ?? { managedChildContext: {} });
        const index = info.index;
        // Any time our child props change, make that information available
        // the parent if they need it.
        // The parent can listen for all updates and only act on the ones it cares about,
        // and multiple children updating in the same tick will all be sent at once.
        _(() => {
            if (managedChildrenArray == null)
                return;
            // Insert this information in-place
            if (typeof index == "number") {
                managedChildrenArray.arr[index] = { ...info };
            }
            else {
                managedChildrenArray.rec[index] = { ...info };
            }
        });
        // When we mount, notify the parent via queueMicrotask
        // (every child does this, so everything's coordinated to only queue a single microtask per tick)
        // Do the same on unmount.
        // Note: It's important that this comes AFTER remoteULEChildChanged
        // so that remoteULEChildMounted has access to all the info on mount.
        // When we unmount, ask the parent to remove our info from the list of children.
        _(() => {
            remoteULEChildMounted?.(index, true);
            return () => remoteULEChildMounted?.(index, false);
        }, [index]);
        // When we mount, and **after other children have unmounted via uLE),
        // ask the parent to add our info to the list of children.
        //
        // The order is important (we need to delete all unmounts *before* adding any mounts)
        // but TODO the use of useLayoutEffect + useEffect to achieve this isn't really semantically correct.
        // Plus we've gone from scheduling 1 effect to 2.
        //useEffect(() => {
        //}, [index]);
        return {
            managedChildReturn: { getChildren: getChildren }
        };
    });
}
/**
 * An extension to useManagedChildren that handles the following common case:
 * 1. You have a bunch of children
 * 2. At any given time, only 1 of them is "selected", "activated", "focusable", whatever (or 0 of them, that's cool too, just 0 or 1 though).
 * 3. The parent has control over who is "selected" via a numerical index.
 *
 * This hook allows for much easier control over selection management.
 *
 * Note that because you may want to use multiple flags with the same children, this hook *does not* use `useManagedChildren`!
 * You need to pass it the existing children, and you must pass your invocation of `useManagedChildren` the returned `onChildrenMountChange` handler!
 *
 * Also because of that, the types of this function are rather odd.  It's better to start off using a hook that already uses a flag, such as `useRovingTabIndex`, as an example.
 */
function useChildrenFlag({ getChildren, indexDemangler, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid, indexDemangler);
    indexDemangler ??= identity;
    // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange, undefined);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null, undefined, { skipMountInitialization: true });
    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = useCallback((requestedIndex) => {
        const children = getChildren();
        let closestDistance = Infinity;
        let closestIndex = null;
        children.forEach(child => {
            if (child != null && isValid(child)) {
                console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const newDistance = Math.abs(child.index - requestedIndex);
                if (newDistance < closestDistance || (newDistance == closestDistance && child.index < requestedIndex)) {
                    closestDistance = newDistance;
                    closestIndex = child.index;
                }
            }
        });
        return closestIndex;
    }, [ /* Must remain stable! */]);
    if (closestFit) {
        console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
    }
    // Any time a child mounts/unmounts, we need to double-check to see if that affects 
    // the "currently selected" (or whatever) index.  The two cases we're looking for:
    // 1. The currently selected child unmounted
    // 2. A child mounted, and it mounts with the index we're looking for
    const reevaluateClosestFit = useStableCallback((reason) => {
        const children = getChildren();
        const requestedIndex = indexDemangler(getRequestedIndex());
        const currentIndex = indexDemangler(getCurrentIndex());
        const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
        if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
            console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
            const closestFitIndex = getClosestFit(requestedIndex);
            setCurrentIndex(closestFitIndex, reason);
            if (currentChild) {
                setAt(currentChild, false, closestFitIndex, currentIndex);
            }
            if (closestFitIndex != null) {
                const closestFitChild = children.getAt(closestFitIndex);
                console.assert(closestFitChild != null, "Internal logic???");
                setAt(closestFitChild, true, closestFitIndex, currentIndex);
                onClosestFit(closestFitIndex);
            }
            else {
                onClosestFit(null);
            }
        }
    });
    const reasonRef = A$1(undefined);
    const changeIndex = useCallback((arg, reason) => {
        const children = getChildren();
        const requestedIndex = (arg instanceof Function ? arg(getRequestedIndex()) : arg);
        reasonRef.current = reason;
        setRequestedIndex(requestedIndex, reason);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;
        let newMatchingChild = (requestedIndex == null ? null : children.getAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : children.getAt(currentIndex));
        if (requestedIndex == null) {
            // Easy case
            setCurrentIndex(null, reason);
            if (oldMatchingChild)
                setAt(oldMatchingChild, false, requestedIndex, currentIndex);
            return null;
        }
        else {
            const childIsValid = (newMatchingChild && isValid(newMatchingChild));
            if (childIsValid || !closestFit) {
                setCurrentIndex(requestedIndex, reason);
                if (oldMatchingChild)
                    setAt(oldMatchingChild, false, requestedIndex, currentIndex);
                if (newMatchingChild)
                    setAt(newMatchingChild, true, requestedIndex, currentIndex);
                return requestedIndex;
            }
            else {
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
                }
                else {
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
                    return null;
                }
            }
        }
    }, []);
    // Run once, on mount
    _(() => {
        changeIndex(initialIndex ?? null, reasonRef.current);
    }, []);
    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
}

/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * @remarks If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 *
 * @param initialState - Same as the built-in `setState`'s
 */
function useState(initialState) {
    const getStack = useStack();
    // We keep both, but override the `setState` functionality
    const [state, setStateP] = h(initialState);
    const ref = A$1(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = A$1(value => {
        if (process.env.NODE_ENV === 'development') {
            globalThis._setState_stack = getStack();
        }
        if (typeof value === "function") {
            const callback = value;
            setStateP(prevValue => {
                const nextValue = callback(prevValue);
                if (ref.current !== nextValue) {
                    // put a breakpoint here if you want
                    ref.current = nextValue;
                }
                ref.current = nextValue;
                return nextValue;
            });
        }
        else {
            if (ref.current !== value) {
                // put a breakpoint here if you want
                ref.current = value;
            }
            ref.current = value;
            setStateP(value);
        }
    });
    const getState = useCallback(() => { return ref.current; }, []);
    return [state, setState.current, getState];
}

/**
 * Implements a roving tabindex system where only one "focusable"
 * component in a set is able to receive a tab focus.
 *
 * @remarks *Which* of those elements receives focus is determined by you,
 * but it's recommended to offload that logic then to another hook, like
 * `useLinearNavigation`, which lets you change the tabbable element with
 * the arrow keys, `useTypeaheadNavigation`, which lets you change the
 * tabbable index with typeahead, or `useListNavigation(Complete)` if you
 * just want everything bundled together.
 *
 *
 * @hasChild {@link useRovingTabIndexChild}
 *
 * @compositeParams
 *
 * @param args - {@link UseRovingTabIndexParameters}
 * @returns - {@link UseRovingTabIndexReturnType}
 */
function useRovingTabIndex({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, processedIndexManglerReturn: { indexDemangler }, ...void1 }) {
    return useMonitoring(function useRovingTabIndex() {
        const focusSelfParent = useStableCallback(focusSelfParentUnstable);
        untabbableBehavior ||= "focus-parent";
        const lastFocused = A$1(null);
        const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
        const getUntabbable = useStableGetter(untabbable);
        // Override the actual setter to include some extra logic related to avoiding hidden children, 
        // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
        const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
            const children = getChildren();
            // Notify the relevant children that they should become tabbable/untabbable,
            // but also handle focus management when we changed due to user interaction
            return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
                const document = getDocument();
                let nextIndex = ((typeof updater === "function") ? updater(prevIndex ?? null) : updater);
                const untabbable = getUntabbable();
                let parentElement = getElement();
                console.assert(!!parentElement);
                // Whether or not we're currently tabbable, make sure that when we switch from untabbable to tabbable,
                // that we know which index to switch back to.
                // TODO: Redundant with below?
                if (nextIndex != null)
                    setLastNonNullIndex(nextIndex, reason);
                // If we're untabbable, then any attempt to set a new index simply fails and sets it to `null`.
                if (untabbable) {
                    // Focus the parent, since it's what's in the tab order right now
                    // TODO: Replace this and the other focus(getElement())
                    // with a user-replaceable focusParent, like item.focusSelf?
                    //
                    // Also TODO: Should these take fromUserInteraction into consideration?
                    // Do we always move focus when we become untabbable?
                    if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                        focusSelfParent(parentElement);
                    return null;
                }
                // If the requested index is hidden, then there's no need to focus any elements or run any extra logic.
                if (nextIndex == null) {
                    // Focus the parent (more to be polite)
                    // TODO: Find the next/prev element and focus that instead,
                    // doable with the `tabbable` library, but it doesn't have a next() function or anything,
                    // so that needs to be manually done with a TreeWalker or something?
                    if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                        focusSelfParent(parentElement);
                    return null;
                }
                // If we've made a change, and it was because the user clicked on it or something,
                // then focus that element too
                if (document && prevIndex != nextIndex) {
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
                // TODO: Redundant with above?
                if (nextIndex != null)
                    setLastNonNullIndex(nextIndex, reason);
                // Finally, return the value the user requested the index be set to.
                return nextIndex ?? 0;
            }, reason);
        });
        // When we switch from tabbable to non/tabbable, we really want to remember the last tabbable child.
        // So every time we change the index for any reason, record that change as a back up here that can be restored.
        const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, useCallback(() => (initiallyTabbedIndex ?? 0), []));
        // Any time we switch to being untabbable, set the current tabbable index accordingly.
        y(() => {
            const document = getDocument();
            let shouldFocusParentAfterwards = !!document && (getElement()?.contains(document.activeElement));
            if (untabbable)
                changeTabbableIndex(null, undefined);
            else {
                changeTabbableIndex(getLastNonNullIndex(), undefined);
            }
            if (shouldFocusParentAfterwards) {
                focusSelf(true);
            }
        }, [untabbable]);
        // TODO: This is jank, but necessary for onClosestFit.
        // There just needs to be a better focus management strategy in general to fix this.
        let avoidFocusingSelfOnMount = A$1(false);
        y(() => {
            let handle = setTimeout(() => {
                handle = setTimeout(() => {
                    avoidFocusingSelfOnMount.current = true;
                }, 50);
            }, 50);
            return () => clearTimeout(handle);
        }, []);
        // Boilerplate related to notifying individual children when they become tabbable/untabbable
        const getTabbableAt = useCallback((child) => { return child.getLocallyTabbable(); }, []);
        const setTabbableAt = useCallback((child, t) => { if (child.index == 8)
            debugger; child.setLocallyTabbable(t); }, []);
        const isTabbableValid = useStableCallback((child) => { return !child.untabbable; });
        const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
            initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
            onIndexChange: useStableCallback((n, p, r) => {
                // Ensure that changes to `untabbable` don't affect the user-provided onTabbableIndexChange
                if ((!(n == null && untabbable)))
                    onTabbableIndexChange?.(n, p, r);
            }),
            getChildren,
            closestFit: true,
            getAt: getTabbableAt,
            isValid: isTabbableValid,
            setAt: setTabbableAt,
            indexDemangler,
            onClosestFit: (index) => {
                const document = getDocument();
                // Whenever we change due to a closest-fit switch, make sure we don't lose focus to the body
                // TODO: This is slightly janky -- we want to only mess with the user's focus when this list (or whatever) is the current focus,
                // but by the time we know something like "all the children have unmounted",
                // we've lot the ability to know if any of them were focused, at least easily.
                // So we just check to see if focus was lost to the body and, if so, send it somewhere useful.
                // This is liable to break, probably with blockingElements or something.
                if (avoidFocusingSelfOnMount.current && document && (document.activeElement == null || document.activeElement == document.body)) {
                    let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
                    if (index == null || childElement == null)
                        focus$1(findBackupFocus(getElement()));
                    else
                        getChildren().getAt(index)?.focusSelf(childElement);
                }
                avoidFocusingSelfOnMount.current = true;
            }
        });
        const focusSelf = useCallback((force, reason) => {
            const document = getDocument();
            const children = getChildren();
            let index = getTabbableIndex();
            const untabbable = getUntabbable();
            if (!untabbable) {
                // If we change from untabbable to tabbable, it's possible `index` might still be null.
                index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
            }
            if (untabbable) {
                if (document && document.activeElement != getElement() && (force || untabbableBehavior != 'leave-child-focused')) {
                    focusSelfParent(getElement());
                }
            }
            else if (!untabbable && index != null) {
                const element = children.getAt(index)?.getElement();
                children.getAt(index)?.focusSelf?.(element);
            }
            else
                setTabbableIndex(null, reason, true);
        }, []);
        const rovingTabIndexContext = useMemoObject({
            setTabbableIndex,
            parentFocusSelf: focusSelf,
            getInitiallyTabbedIndex: useCallback(() => { return initiallyTabbedIndex ?? (untabbable ? null : 0); }, []),
            reevaluateClosestFit,
            untabbable,
            getUntabbableBehavior: useStableGetter(untabbableBehavior),
            giveParentFocusedElement: useCallback((e) => { lastFocused.current = e; }, [])
        });
        return {
            managedChildrenParameters: { onChildrenMountChange: useCallback(() => { reevaluateClosestFit(undefined); }, [reevaluateClosestFit]), },
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
                onFocus: useStableCallback((e) => {
                    const parentElement = getElement();
                    console.assert(!!parentElement);
                    if (e.target == getElement()) {
                        if (!untabbable) {
                            focusSelf(false, e);
                        }
                    }
                })
            }, "data-roving-tab-index")
        };
    });
}
/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
function useRovingTabIndexChild({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, untabbable: parentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }) {
    return useMonitoring(function useRovingTabIndexChild() {
        const [tabbable, st, getTabbable] = useState(() => { return getInitiallyTabbedIndex() === index; });
        const HACK = A$1(iAmUntabbable);
        const HACK2 = A$1(index);
        HACK.current = iAmUntabbable;
        HACK2.current = index;
        const setTabbable = useCallback((t) => {
            if (typeof t === 'function') {
                return st(prev => {
                    const ret = t(prev);
                    if (ret && HACK.current) {
                        debugger;
                        console.error("setTabbable(true) called on a hidden child?");
                    }
                    console.log(`setTabbable(${HACK2.current}, ${ret})`);
                    return ret;
                });
            }
            else {
                if (t && HACK.current) {
                    debugger;
                    console.error("setTabbable(true) called on a hidden child?");
                }
                const ret = st(t);
                console.log(`setTabbable(${HACK2.current}, ${t})`);
                return ret;
            }
        }, []);
        y(() => {
            if (tabbable) {
                giveParentFocusedElement(getElement());
            }
        }, [tabbable]);
        return {
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e) => {
                    if (focused) {
                        const untabbableBehavior = getUntabbableBehavior();
                        if ((!parentIsUntabbable && !iAmUntabbable) || untabbableBehavior != "focus-parent")
                            setTabbableIndex(index, e, false);
                        else
                            parentFocusSelf(false);
                    }
                })
            },
            rovingTabIndexChildReturn: {
                tabbable,
                getTabbable,
            },
            info: { setLocallyTabbable: setTabbable, getLocallyTabbable: getTabbable },
            props: useTagProps({
                tabIndex: ((tabbable && !parentIsUntabbable) ? 0 : -1),
                inert: iAmUntabbable // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
            }, "data-roving-tab-index-child"),
        };
    });
}

/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 *
 * @see useListNavigation, which packages everything up together.
 *
 * @hasChild {@link useTypeaheadNavigationChild}
 *
 * @compositeParams
 */
function useTypeaheadNavigation({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }) {
    return useMonitoring(function useTypeaheadNavigation() {
        // For typeahead, keep track of what our current "search" string is (if we have one)
        // and also clear it every 1000 ms since the last time it changed.
        // Next, keep a mapping of typeahead values to indices for faster searching.
        // And, for the user's sake, let them know when their typeahead can't match anything anymore
        const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
            const handle = setTimeout(() => { setCurrentTypeahead(null, undefined); setTypeaheadStatus("none"); }, typeaheadTimeout ?? 1000);
            updateBasedOnTypeaheadChange(currentTypeahead, reason);
            return () => clearTimeout(handle);
        }));
        //useTimeout({ timeout: typeaheadTimeout ?? 1000, callback: () => { setCurrentTypeahead(null); setInvalidTypeahead(null); }, triggerIndex: currentTypeahead });
        const sortedTypeaheadInfo = A$1([]);
        const [typeaheadStatus, setTypeaheadStatus] = useState("none");
        // Handle typeahead for input method editors as well
        // Essentially, when active, ignore further keys 
        // because we're waiting for a CompositionEnd event
        const [, setImeActive, getImeActive] = useState(false);
        // Because composition events fire *after* keydown events 
        // (but within the same task, which, TODO, could be browser-dependent),
        // we can use this to keep track of which event we're listening for on the first keydown.
        const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
        _(() => {
            if (nextTypeaheadChar !== null) {
                setCurrentTypeahead(typeahead => ((typeahead ?? "") + nextTypeaheadChar), undefined);
                setNextTypeaheadChar(null);
            }
        }, [nextTypeaheadChar]);
        const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
            let compare;
            // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
            // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
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
                // TODO: Doing this substring BEFORE normalization is, like, pretty not great?
                let trimmedRet = comparatorShared(lhs, rhs.text.substring(0, lhs.length));
                return trimmedRet;
            }
            return lhs - rhs;
        });
        const isDisabled = useStableGetter(noTypeahead);
        const propsStable = A$1(useTagProps({
            onKeyDown: useStableCallback((e) => {
                if (isDisabled())
                    return;
                const imeActive = getImeActive();
                const key = e.key;
                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                if (e.ctrlKey || e.metaKey)
                    return;
                if (!imeActive && e.key === "Backspace") {
                    // Remove the last character in a way that doesn't split UTF-16 surrogates.
                    setCurrentTypeahead(t => t == null ? null : [...t].reverse().slice(1).reverse().join(""), e);
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
            }),
            onCompositionStart: useStableCallback((e) => {
                setNextTypeaheadChar(e.data);
                setImeActive(false);
            }),
            onCompositionEnd: useStableCallback((_e) => { setImeActive(true); }),
        }, "data-typeahead-navigation"));
        const excludeSpace = useStableCallback(() => { return typeaheadStatus != "none"; });
        return {
            context: useMemoObject({
                typeaheadNavigationContext: useMemoObject({
                    insertingComparator,
                    sortedTypeaheadInfo: sortedTypeaheadInfo.current,
                    excludeSpace
                }),
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
                    // The user has typed an entry that doesn't exist in the list
                    // (or more specifically "for which there is no entry that starts with that input")
                    setTypeaheadStatus("invalid");
                }
                else {
                    setTypeaheadStatus("valid");
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
                      I dunno. Going back to the start is the simplest though.
        
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
                    const updateBestFit = (unsortedIndex) => {
                        if (!isValidForTypeaheadNavigation(unsortedIndex))
                            return;
                        if (lowestUnsortedIndexAll == null || unsortedIndex < lowestUnsortedIndexAll) {
                            lowestUnsortedIndexAll = unsortedIndex;
                            lowestSortedIndexAll = i;
                        }
                        if ((lowestUnsortedIndexNext == null || unsortedIndex < lowestUnsortedIndexNext) && unsortedIndex > (getIndex() ?? -Infinity)) {
                            lowestUnsortedIndexNext = unsortedIndex;
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
}
/**
 *
 * @compositeParams
 */
function useTypeaheadNavigationChild({ info: { index, ...void1 }, 
//textContentReturn: { getTextContent, ...void5 },
context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, ...void4 }) {
    return useMonitoring(function useTypeaheadNavigationChild() {
        const onTextContentChange = useCallback((text) => {
            if (text) {
                // Find where to insert this item.
                // Because all index values should be unique, the returned sortedIndex
                // should always refer to a new location (i.e. be negative)   
                //
                // TODO: adding things on mount/unmount means that it's 
                // hard to make grid navigation typeahead work smoothly with tables -- 
                // every time we change columns, every row resorts itself, even though
                // each row should be able to just do that on mount.
                // 
                // We probably need to instead just sort on-demand, which is better for
                // performance anyway, but is tricky to code without major lag on the
                // first keystroke.
                //
                // Or we need to be able to support columns here, within typeahead?
                // Don't really like that idea (what if we want 3d navigation, woo-ooo-ooo).
                const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
                if (sortedIndex < 0) {
                    sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, { text, unsortedIndex: index });
                }
                else {
                    sortedTypeaheadInfo.splice(sortedIndex, 0, { text, unsortedIndex: index });
                }
                return () => {
                    // When unmounting, find where we were and remove ourselves.
                    // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
                    const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                    console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
                    if (sortedIndex >= 0) {
                        sortedTypeaheadInfo.splice(sortedIndex, 1);
                    }
                };
            }
        }, []);
        return {
            textContentParameters: { onTextContentChange },
            pressParameters: { excludeSpace }
        };
    });
}
/**
 * Your usual binary search implementation.
 *
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 *
 * #__NO_SIDE_EFFECTS__
 */
function binarySearch(array, wanted, comparator) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        const testIndex = (lastIndex + firstIndex) >> 1;
        const comparisonResult = comparator(wanted, array[testIndex]);
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
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 *
 * @hasChild {@link useListNavigationChild}
 *
 * @compositeParams
 */
function useListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, ...void1 }) {
    return useMonitoring(function useListNavigation() {
        const { props: propsRTI, rovingTabIndexReturn, managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn, processedIndexManglerReturn });
        const { propsStable: propsStableTN, typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation({ rovingTabIndexReturn, typeaheadNavigationParameters, });
        const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters, processedIndexManglerReturn });
        // Merge the props while keeping them stable
        // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
        //const p = useMergedProps<ParentOrChildElement>(propsStableTN, propsStableLN);
        //const {propsStable} = useRef<ElementProps<ParentOrChildElement>>(p)
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
}
/**
 * @compositeParams
 */
function useListNavigationChild({ info: { index, untabbable, ...void1 }, context, refElementReturn, ...void2 }) {
    return useMonitoring(function useListNavigationChild() {
        const { props, ...rticr } = useRovingTabIndexChild({ context, info: { index, untabbable }, refElementReturn });
        const { ...tncr } = useTypeaheadNavigationChild({ context, info: { index } });
        return {
            props,
            ...tncr,
            ...rticr
        };
    });
}

/**
 * Implements 2-dimensional grid-based keyboard navigation, similarly to {@link useListNavigation}.
 *
 * @remarks Due to the complexity of this hook, it is *highly* recommended to use {@link useCompleteGridNavigation} instead.
 * But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.
 *
 * Some features and/or limitations of this hook:
 *
 * ```md-literal
 * * Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are descendants of the grid as a whole **somewhere**.
 * * Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
 * * Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.
 * ```
 *
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 *
 * @compositeParams
 */
function useGridNavigation({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }) {
    return useMonitoring(function useGridNavigation() {
        const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
            let t = (initiallyTabbableColumn ?? 0);
            return { actual: t, ideal: t };
        }));
        const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, props, ...void1 } = useListNavigation({
            linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
            ...listNavigationParameters
        });
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
}
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
function useGridNavigationRow({ 
// Stuff for the row as a child of the parent grid
info: { index, untabbable, ...void3 }, context: contextFromParent, 
// Stuff for the row as a parent of child cells
linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, 
// Both/neither
refElementReturn, ...void1 }) {
    return useMonitoring(function useGridNavigationRow() {
        const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
        const getIndex = useStableCallback(() => { return index; });
        // When this row is focused from the parent's `useRovingTabIndex`,
        // instead of focusing the row element, this function focuses the appropriate cell element.
        const whenThisRowIsFocused = useStableCallback((e) => {
            const { getChildren } = managedChildrenReturn;
            if (contextFromParent.rovingTabIndexContext.untabbable) {
                // If the parent is untabbable, and this row was requested to focus itself (as part of parentFocusSelf),
                // then we focus the parent grid instead of the child cell.
                contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
            }
            else {
                // If the parent is tabbable (normal behavior), 
                // then we focus the cell that should be focused in this row.
                let { ideal, actual: _actual } = (getTabbableColumn());
                let index = (ideal ?? 0);
                let child = getChildren().getAt(index);
                let lowestIndex = getChildren().getLowestIndex();
                let highestIndex = getChildren().getHighestIndex();
                while ((!child || child.untabbable) && index > lowestIndex) {
                    --index;
                    child = getChildren().getAt(index);
                }
                while ((!child || child.untabbable) && index <= highestIndex) {
                    ++index;
                    child = getChildren().getAt(index);
                }
                if (child) {
                    const e = child.getElement();
                    child.focusSelf(e);
                }
                else {
                    focus$1(e);
                }
            }
        }, []);
        const focusSelf = whenThisRowIsFocused;
        const { props: propsLNC, info: { getLocallyTabbable, setLocallyTabbable, ...void2 }, hasCurrentFocusParameters, pressParameters, rovingTabIndexChildReturn, textContentParameters, ...void6 } = useListNavigationChild({ info: { index, untabbable }, refElementReturn, context: contextFromParent });
        const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
        console.log(`Row ${index} is untabbable? ${allChildCellsAreUntabbable.toString()}`);
        const { props: propsLN, context: contextULN, linearNavigationReturn, managedChildrenParameters, rovingTabIndexReturn, typeaheadNavigationReturn, ...void5 } = useListNavigation({
            managedChildrenReturn,
            refElementReturn,
            typeaheadNavigationParameters,
            processedIndexManglerReturn: { indexDemangler: identity, indexMangler: identity },
            rovingTabIndexParameters: {
                untabbableBehavior: "leave-child-focused",
                focusSelfParent: whenThisRowIsFocused,
                untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
                initiallyTabbedIndex,
                onTabbableIndexChange: useStableCallback((v, p, r) => {
                    setTabbableColumn(p => ({ ideal: p?.ideal ?? null, actual: p?.actual ?? null }), r);
                    onTabbableIndexChange?.(v, p, r);
                })
            },
            linearNavigationParameters: {
                onNavigateLinear: useStableCallback((next, event) => {
                    setTabbableColumn(prev => ({ ideal: next, actual: next }), event);
                }),
                disableHomeEndKeys: true,
                pageNavigationSize: 0,
                arrowKeyDirection: "horizontal",
                ...linearNavigationParameters
            },
            paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
        });
        const { setTabbableIndex } = rovingTabIndexReturn;
        const gridNavigationCellContext = useMemoObject({
            //allChildCellsAreUntabbable,
            setTabbableRow,
            getRowIndex: getIndex,
            getTabbableColumn,
            setTabbableColumn,
            setTabbableCell: setTabbableIndex
        });
        // These will often have conflicting values, but we always use -1 for rows no matter what,
        // so instead of negotiating a resolution we can just give a straight answer.
        propsLN.tabIndex = propsLNC.tabIndex = -1;
        const props = useMergedProps(propsLN, propsLNC, {
            // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
            onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget))
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
}
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }) {
    return useMonitoring(function useGridNavigationCell() {
        colSpan ??= 1;
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, rovingTabIndexChildReturn, textContentParameters, pressParameters, props, info: infoLs, ...void2 } = useListNavigationChild({
            info: { index, untabbable },
            context: { rovingTabIndexContext, typeaheadNavigationContext },
            refElementReturn,
        });
        return {
            info: infoLs,
            props: useMergedProps(props, {
                onClick: (e) => {
                    setTabbableColumn(prev => {
                        return ({ ideal: index, actual: index });
                    }, e);
                }
            }),
            rovingTabIndexChildReturn,
            textContentParameters,
            pressParameters,
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                    ocfic1?.(focused, prev, e);
                    if (focused) {
                        setTabbableRow(getRowIndex(), e, false);
                        setTabbableColumn(prev => {
                            return { actual: index ?? null, ideal: prev?.ideal ?? null };
                        }, e);
                        setTabbableCell((prev) => {
                            if (prev != null && (prev < index || prev > index + (colSpan))) {
                                return prev;
                            }
                            return index;
                        }, e, false);
                    }
                })
            },
        };
    });
}

/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @hasChild {@link usePaginatedChild}
 *
 * @compositeParams
 */
function usePaginatedChildren({ managedChildrenReturn: { getChildren }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused }, processedIndexManglerReturn: { indexDemangler, indexMangler } }) {
    return useMonitoring(function usePaginatedChildren() {
        const parentIsPaginated = (paginationMin != null || paginationMax != null);
        const lastPagination = A$1({ paginationMax: null, paginationMin: null });
        const refreshPagination = useCallback((paginationMin, paginationMax) => {
            const childMax = (getChildren().getHighestIndex() + 1);
            const childMin = (getChildren().getLowestIndex());
            for (let i = childMin; i <= childMax; ++i) {
                const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
                getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
                if (visible && (paginationMax != null || paginationMin != null))
                    getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
            }
        }, [ /* Must be empty */]);
        y(() => {
            // At this point, the children have not yet updated themselves to match the pagination.
            // We need to tell them to update, but also handle where the focus is.
            // If a current list item is focused, then we need to move focus to a paginated one
            // but we can't do it until they all re-render...
            // TODO: Something better than setTimeout for this, please...
            let tabbableIndex = getTabbableIndex();
            if (tabbableIndex != null) {
                let shouldFocus = getAnyFocused() || false;
                setTimeout(() => {
                    if (paginationMin != null && tabbableIndex < paginationMin) {
                        setTabbableIndex(paginationMin, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                    }
                    else if (paginationMax != null && tabbableIndex >= paginationMax) {
                        let next = paginationMax - 1;
                        if (next == -1)
                            next = null;
                        setTabbableIndex(next, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                    }
                }, 1);
            }
            refreshPagination(paginationMin, paginationMax);
            lastPagination.current.paginationMax = paginationMax ?? null;
            lastPagination.current.paginationMin = paginationMin ?? null;
        }, [paginationMax, paginationMin]);
        const pmin = A$1(paginationMin);
        const pmax = A$1(paginationMax);
        pmin.current = paginationMin;
        pmax.current = paginationMax;
        const getDefaultPaginationVisible = useCallback((i) => { return (i >= (pmin.current ?? -Infinity) && i < (pmax.current ?? Infinity)); }, []);
        const paginatedChildContext = T$1(() => ({
            parentIsPaginated,
            getDefaultPaginationVisible
        }), [parentIsPaginated]);
        const getPaginationMin = useStableGetter(paginationMin);
        const getPaginationMax = useStableGetter(paginationMax);
        _(() => {
            const paginationMin = getPaginationMin();
            const paginationMax = getPaginationMax();
            const count = childCount ?? 0;
            if (paginationMax != null || paginationMin != null) {
                const min = (paginationMin ?? 0);
                const max = (paginationMax ?? count);
                for (let i = min; i < max; ++i) {
                    getChildren().getAt(i)?.setChildCountIfPaginated(count);
                }
            }
        }, [childCount]);
        return {
            context: T$1(() => ({ paginatedChildContext }), [paginatedChildContext]),
            paginatedChildrenReturn: { refreshPagination }
        };
    });
}
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
function usePaginatedChild({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
    return useMonitoring(function usePaginatedChild() {
        const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
        const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
        return {
            props: useTagProps(!parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) }, "data-paginated-children-child"),
            paginatedChildReturn: { /*paginatedVisible,*/ parentIsPaginated, hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false },
            info: {
                setPaginationVisible: setPaginatedVisible,
                setChildCountIfPaginated
            }
        };
    });
}

/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 *
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler`
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned,
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 *
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 *
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 *
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 *
 * @compositeParams
 */
function useRearrangeableChildren({ rearrangeableChildrenParameters: { children: childrenIn }, processedIndexManglerParameters: { getIndex, getSortValueAt }, managedChildrenReturn: { getChildren: getManagedChildren }, context: { processedIndexManglerContext: { mangler } } }) {
    return useMonitoring(function useRearrangeableChildren() {
        useEnsureStability("useRearrangeableChildren", getIndex, getSortValueAt);
        const allChildPositions = A$1([]);
        const [refreshIndex, setRefreshIndex] = h(0);
        const childrenOut = T$1(() => {
            const rearrangedChildren = mangler.setChildren(childrenIn);
            for (const ch of rearrangedChildren) {
                const index = ch == null ? null : getIndex(ch);
                const mangledIndex = index == null ? null : mangler.map(index, "demangled", "mangled");
                index == null ? null : mangler.map(index, "mangled", "demangled");
                if (index != null && mangledIndex != null) {
                    const info = getManagedChildren().getAt(index);
                    const info2 = getManagedChildren().getAt(mangledIndex);
                    if (info && info2) {
                        const element = info2.getElement();
                        const rect = element?.getBoundingClientRect();
                        if (rect) {
                            // TODO: This still fires even if the index hasn't changed for this child.
                            // Find a way to bail out if this child's position hasn't changed
                            info2.updateFLIPAnimation(allChildPositions.current[mangledIndex] = { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
                        }
                    }
                }
            }
            return rearrangedChildren;
        }, [childrenIn, refreshIndex]);
        const getFLIPStart = useCallback((index) => {
            return allChildPositions.current[index];
        }, []);
        return {
            rearrangeableChildrenReturn: {
                children: childrenOut,
                refresh: useStableCallback(() => { setRefreshIndex(p => ++p); }, [])
            },
            context: useMemoObject({
                rearrangeableChildrenContext: useMemoObject({ getFLIPStart })
            })
        };
    });
}
/**
 * @compositeParams
 */
function useRearrangeableChild({ context, info: { getElement, index }, rearrangeableChildParameters: { cssProperty, duration } }) {
    return useMonitoring(function useRearrangeableChild() {
        const { rearrangeableChildrenContext: { getFLIPStart } } = context;
        const getCssProperty = useStableGetter(cssProperty);
        const getDuration = useStableGetter(duration);
        // TODO: This ref doesn't work correctly? Or info.updateFLIPAnimation isn't update right? Not sure.
        // Either way, doing something like reversing twice results in it working right the first time,
        // but incorrect the second time around, because the position is from the wrong index.
        const flipStartPosition = A$1(undefined);
        const [animationIndex, setAnimationIndex] = h(0);
        _(() => {
            const duration = getDuration();
            const cssProperty = getCssProperty();
            if (cssProperty && animationIndex > 0) {
                const element = getElement();
                const first = getFLIPStart(index); //flipStartPosition.current;
                const mid = element.getBoundingClientRect();
                console.log(mid);
                // Forcibly end any previous transitions.
                // Otherwise, interruptions end up causing exponentially larger transforms.
                // Which, TODO, is definitely fixable.
                if (cssProperty === 'translate')
                    element.style.scale = element.style.translate = '';
                else if (cssProperty === 'transform')
                    element.style.transform = '';
                element.style.transition = 'none';
                const last = element.getBoundingClientRect();
                if (first && last) {
                    const dx = first.left - last.left;
                    const dy = first.top - last.top;
                    const dsx = first.width / last.width;
                    const dsy = first.height / last.height;
                    if (cssProperty === 'translate') {
                        element.style.translate = `${dx}px ${dy}px`;
                        element.style.scale = `${dsx} ${dsy}`;
                    }
                    else if (cssProperty === 'transform') {
                        element.style.transform = `translate(${dx}px, ${dy}px) scale(${dsx}, ${dsy})`;
                    }
                    element.style.transition = cssProperty === 'translate' ? 'translate 0s, scale 0s' : `transform 0s`;
                    requestAnimationFrame(() => {
                        if (cssProperty === 'translate')
                            element.style.scale = element.style.translate = '';
                        else if (cssProperty === 'transform')
                            element.style.transform = '';
                        element.style.transition = cssProperty === 'translate' ? `translate ${duration}, scale ${duration}` : `transform ${duration}`;
                    });
                }
            }
        }, [index, animationIndex]);
        const updateFLIPAnimation = useCallback((position) => {
            flipStartPosition.current = position;
            setAnimationIndex(p => ++p);
        }, []);
        return {
            info: { updateFLIPAnimation }
        };
    });
}

/**
 * Allows children to each wait until the previous has finished rendering before itself rendering.
 * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * @remarks If a child appears on-screen for 100ms then it will be forcibly displayed.
 *
 * When using the child hook, it's highly recommended to separate out any heavy logic into
 * a separate component that won't be rendered until it's de-staggered into visibility.
 *
 * @hasChild {@link useStaggeredChild}
 *
 * @compositeParams
 */
function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered, childCount },
//refElementReturn: { getElement }
 }) {
    return useMonitoring(function useStaggeredChildren() {
        // TODO: Right now, staggering doesn't take into consideration reordering via indexMangler and indexDemangler.
        // This isn't a huge deal because the IntersectionObserver takes care of any holes, but it can look a bit odd
        // until they fill in.
        const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
        // This is the highest index that we want to show, inclusive.
        const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
        // By default, when a child mounts, we tell the next child to mount and simply repeat.
        // If a child is missing, however, it will break that chain.
        // To guard against that, we also wait for 50ms, and if it hasn't loaded by then, we just continue as if it did.
        const timeoutHandle = A$1(-1);
        const resetEmergencyTimeout = useCallback(() => {
            if (timeoutHandle.current != -1)
                clearTimeout(timeoutHandle.current);
            // We've gone this long without hearing the next child mount itself...
            // We need to continue.
            timeoutHandle.current = setTimeout(() => {
                // This is split up into two setTimeouts for timing reasons:
                // If it's taking a long time to render a child, it's possible that we'll
                // trip this emergency timeout even though the child renders itself perfectly fine.
                // Due to the way timeouts are ordered, we want to ensure this timeout runs AFTER
                // the component's effect timeout. So we just wait again for a short tick.
                timeoutHandle.current = setTimeout(() => {
                    timeoutHandle.current = -1;
                    let target = getTargetStaggerIndex();
                    setDisplayedStaggerIndex(prev => {
                        let next = Math.min(target || 0, (prev || 0) + 1);
                        while (next <= (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible() == true)
                            ++next;
                        return next;
                    });
                }, 10);
            }, 100);
        }, [ /* Must be empty */]);
        // The target index is the index that we're "animating" to.
        // Each child simply sets this to the highest value ever seen.
        y(() => {
            // Any time our target changes,
            // ensure our timeout is running, and start a new one if not
            if (timeoutHandle.current == -1) {
                resetEmergencyTimeout();
                // If there's no timeout running, then that also means we're not waiting for a child to mount.
                // So ask a child to mount and then wait for that child to mount.
                let current = getDisplayedStaggerIndex();
                let next = Math.min(childCount ?? 0, (current ?? 0) + 1);
                setDisplayedStaggerIndex(next);
            }
        }, [childCount]);
        const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(useCallback((newIndex, prevIndex) => {
            if (newIndex == null || !s.current) {
                return;
            }
            setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
            // It's time to show the next child,
            // either because the current one finished mounting,
            // or because our emergency backup timeout fired.
            //
            // Either way, tell the next child to show itself.
            // Also make sure that anyone we skipped somehow show themselves as well.
            // (queueMicrotask prevents warnings if debounceRendering is immediate)
            queueMicrotask(() => {
                for (let i = (prevIndex ?? 0) - 1; i <= newIndex; ++i) {
                    getChildren().getAt(i)?.setStaggeredVisible(true);
                }
            });
            // Set a new emergency timeout
            resetEmergencyTimeout();
        }, [ /* Must be empty */]), returnNull);
        const parentIsStaggered = (!!staggered);
        const getChildCount = useStableGetter(childCount);
        const childCallsThisToTellTheParentToMountTheNextOne = useCallback((justMountedChildIndex) => {
            setDisplayedStaggerIndex(prevIndex => {
                let next = Math.min((getTargetStaggerIndex() ?? 0), // Don't go higher than the highest child
                1 + (Math.max(prevIndex ?? 0, justMountedChildIndex)) // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
                );
                // Skip over any children that have already been made visible ahead
                // (through IntersectionObserver)
                while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) {
                    ++next;
                }
                return next;
            });
        }, []);
        // TODO: Modification during render (but it's really, really hard to avoid here,
        // but also probably fine because parents render before children? Does that include suspense?)
        const s = A$1(parentIsStaggered);
        s.current = parentIsStaggered;
        const getDefaultStaggeredVisible = useCallback((i) => {
            if (s.current) {
                const staggerIndex = getDisplayedStaggerIndex();
                if (staggerIndex == null)
                    return false;
                return i < staggerIndex;
            }
            else {
                return true;
            }
        }, []);
        const intersectionObserver = A$1(null);
        const elementToIndex = A$1(new Map());
        const setElementToIndexMap = useCallback((index, element) => {
            elementToIndex.current.set(element, index);
        }, []);
        const getIntersectionObserver = useCallback(() => intersectionObserver.current, []);
        const staggeredChildContext = T$1(() => ({
            parentIsStaggered,
            childCallsThisToTellTheParentToMountTheNextOne,
            getDefaultStaggeredVisible,
            getIntersectionObserver,
            setElementToIndexMap
        }), [parentIsStaggered]);
        y(() => {
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
            context: T$1(() => ({
                staggeredChildContext
            }), [staggeredChildContext]),
        };
    });
}
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
 * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
 *
 * @compositeParams
 */
function useStaggeredChild({ info: { index }, 
//refElementReturn: { getElement },
context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } } }) {
    return useMonitoring(function useStaggeredChild() {
        const [staggeredVisible, setStaggeredVisible, getStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
        // Controls whether we ask the parent to start mounting children after us.
        // (We don't ask when the child becomes visible due to screen-scrolling,
        // only when it becomes visible because we were next in line to do so)
        const becauseScreen = A$1(false);
        usePassiveState(useStableCallback((next, _prev, _reason) => {
            if (staggeredVisible)
                return;
            if (next) {
                const io = getIntersectionObserver();
                io?.unobserve(e.current);
                setStaggeredVisible(true);
                becauseScreen.current = true;
            }
        }), returnFalse);
        // This isn't called during useEffect here, because we want to wait for the
        // "heavier processing" child to render, instead of us (the "ligher pre-processing" child).
        // So we return the effect we want to run and let the caller run it as appropriate.
        // (In theory this could be returned as, like, useStaggeredChildChild instead but I really don't wanna do that)
        const childUseEffect = useCallback(() => {
            if (!becauseScreen.current && (parentIsStaggered && staggeredVisible)) {
                if ((parentIsStaggered && staggeredVisible)) {
                    childCallsThisToTellTheParentToMountTheNextOne(index);
                }
                else if (!parentIsStaggered) {
                    // Ensure that if we mount unstaggered and change to staggered, we start at the end
                    childCallsThisToTellTheParentToMountTheNextOne(index);
                }
            }
        }, [index, (parentIsStaggered && staggeredVisible)]);
        // This is the element that the IntersectionObserver will watch.
        const e = A$1(null);
        return {
            props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() }, "data-staggered-children-child"),
            staggeredChildReturn: { parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false, childUseEffect },
            info: { setStaggeredVisible, getStaggeredVisible },
            refElementParameters: {
                onElementChange: useStableCallback((element) => {
                    setElementToIndexMap(index, element);
                    e.current = (element || e.current);
                    const io = getIntersectionObserver();
                    if (e.current) {
                        io?.observe(e.current);
                    }
                    else {
                        io?.unobserve(e.current);
                    }
                })
            }
        };
    });
}

/**
 * Hook that allows for optimization (staggering, pagination) and rearranging (sorting, shuffling, etc.) of large arrays of children.
 *
 * @remarks This is separate from `useManagedChildren` (and its descendants, like `useListNavigation),
 * but takes advantage of its flexibility (especially with its allowing for "holes" of missing children)
 * to prevent all children from rendering at once on mount.
 *
 * Staggering and pagination exists because no matter how well optimized your CSS and Javascript for each child is,
 * eventually some number of children will cause jank when mounting them all at once. Considering that maybe 1% of them
 * will actually be visible at first within the screen, with the other 99% wasting time doing things off-screen, it makes
 * sense to only show what's necessary at first, and delay as much as possible.
 *
 * If you're loading a dynamic list of data, where you don't know the length in advance
 * (but that it could be more than, say, 30 - 50 at any point),
 * this is all but essential for a good user experience.
 *
 * * 100 children without staggering/pagination is "start to feel jank on mobile"
 * * 1000 children without staggering/pagination is "start to feel jank on desktop"
 * * 10000 children staggered/paginated is "start to feel jank on desktop"
 * * 100000 children is "you're probably out of memory"
 *
 * <br />
 *
 * Additionally, this hook allows for reorganization of its children. A default `sort` and `shuffle` are provided,
 * but you can implement any arbitrary reordering.
 *
 * <br />
 *
 * The main limitation of this hook is that, unlike hooks that use/derive from `useManagedChildren`
 * (in which children can arbitrarily be anywhere descendant in the tree), children here ***must***
 * be in a single, sequential array (gaps are still fine).
 *
 * This is separate from `useListNavigation` and friends for performance reasons -- if a child is
 * hidden because it's paginated out or not staggered in yet, then we want to avoid running the normal
 * child list logic (which is as fast as possible, but still only so fast).
 *
 * Similarly, it can be useful for the children to be in a separate component for performance reasons, which
 * is another reason to separate this logic from `useListNavigation`.
 *
 * Finally, `useListNavigation` imposes no requirements on how your children are laid out in the DOM, but
 * this hook **requires** all children be in one contiguous array.
 *
 * @hasChild {@link useProcessedChild}
 *
 * @compositeParams
 */
function useProcessedChildren({ rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters, processedIndexManglerParameters }) {
    return useMonitoring(function useProcessedChildren() {
        const childCount = rearrangeableChildrenParameters.children.length;
        const { paginationMax, paginationMin } = paginatedChildrenParameters;
        const { staggered } = staggeredChildrenParameters;
        const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters, });
        useStableCallback(() => {
            refreshPagination(paginationMin, paginationMax);
        });
        const { processedIndexManglerContext: { indexDemangler, indexMangler } } = context;
        const { rearrangeableChildrenReturn, context: { rearrangeableChildrenContext }, } = useRearrangeableChildren({
            context,
            processedIndexManglerParameters,
            rearrangeableChildrenParameters,
            managedChildrenReturn
        });
        const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, context: { paginatedChildContext } } = usePaginatedChildren({
            managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
            rovingTabIndexReturn: context.processedChildrenContext,
            childrenHaveFocusReturn: context.processedChildrenContext,
            paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });
        const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({
            managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
            staggeredChildrenParameters: { staggered, childCount },
            //refElementReturn: { getElement: context.processedChildrenContext.getElement }
        });
        return {
            rearrangeableChildrenReturn,
            staggeredChildrenReturn,
            paginatedChildrenReturn,
            context: useMemoObject({
                staggeredChildContext,
                paginatedChildContext,
                managedChildContext,
                rearrangeableChildrenContext
            })
        };
    });
}
/**
 * @compositeParams
 */
function useProcessedChild({ context, info: { index, getElement, ...uinfo }, rearrangeableChildParameters, ...void1 }) {
    return useMonitoring(function useProcessedChild() {
        const { paginatedChildContext, staggeredChildContext } = context;
        const { info: { updateFLIPAnimation } } = useRearrangeableChild({
            context,
            info: { getElement, index },
            rearrangeableChildParameters
        });
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
                updateFLIPAnimation,
                getElement,
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
}

/**
 * @compositeParams
 */
function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }) {
    return useMonitoring(function useProcessedIndexMangler() {
        useEnsureStability("useProcessedIndexMangler", getIndex, getSortValue);
        const mangler = T$1(() => new ProcessedIndexMangler(getIndex, getSortValue, compare ?? defaultCompare), [getIndex, getSortValue]);
        const indexDemangler = useCallback((n) => (mangler.map(n, "mangled", "demangled") ?? n), []);
        const indexMangler = useCallback((n) => (mangler.map(n, "demangled", "mangled") ?? n), []);
        const context = useMemoObject({
            processedIndexManglerContext: useMemoObject({
                mangler,
                indexDemangler,
                indexMangler
            })
        });
        return {
            processedIndexManglerReturn: {
                mangler,
                indexMangler,
                indexDemangler
            },
            context
        };
    });
}
class ProcessedIndexMangler {
    getIndex;
    getSortValue;
    compare;
    constructor(getIndex, getSortValue, compare) {
        this.getIndex = getIndex;
        this.getSortValue = getSortValue;
        this.compare = compare;
    }
    map(index, from, to) {
        if (index == undefined)
            return undefined;
        switch (from) {
            /*case 'processed': {
                //let unmangledIndex = this.getIndex(this._originalChildren[index]);
                switch (to) {
                    case 'processed': return index;
                    case 'demangled': return this._processedToDemangled.get(index); //return unmangledIndex;
                    case 'mangled': return this._processedToMangled.get(index); //return unmangledIndex == undefined ? undefined : this._unmangledToMangled.get(unmangledIndex);
                }
            }*/
            case 'demangled': {
                switch (to) {
                    case 'demangled': return index;
                    case 'mangled': return this._demangledToMangled.get(index);
                    //case 'processed': return this._demangledToProcessed.get(index);
                }
            }
            case 'mangled': {
                switch (to) {
                    case 'mangled': return index;
                    case 'demangled': return this._mangledToDemangled.get(index);
                    //case 'processed': return this._mangledToProcessed.get(index);
                }
            }
        }
    }
    _originalChildren = [];
    sortedChildren = [];
    _mangledToDemangled = new Map();
    _demangledToMangled = new Map();
    //private _demangledToProcessed = new Map<number, number>();
    //private _mangledToProcessed = new Map<number, number>();
    //private _processedToDemangled = new Map<number, number>();
    //private _processedToMangled = new Map<number, number>();
    setChildren(children) {
        this._mangledToDemangled.clear();
        this._demangledToMangled.clear();
        //this._processedToDemangled.clear();
        //this._processedToMangled.clear();
        //this._demangledToProcessed.clear();
        //this._mangledToProcessed.clear();
        this._originalChildren = children.slice();
        this.sortedChildren = [];
        let sortedChildrenWithoutNulls = this._originalChildren.slice().map((vnode, processedIndex) => {
            const unmangledIndex = vnode == null ? undefined : this.getIndex(vnode);
            const sortValue = unmangledIndex == null ? null : this.getSortValue(unmangledIndex);
            return {
                vnode,
                unmangledIndex,
                sortValue,
                processedIndex
            };
        }).toSorted((lhs, rhs) => this.compare((lhs.sortValue), (rhs.sortValue)));
        let i = 0; // processedOriginalIndex, also the index to the output array
        let j = 0; // processedSortedIndex
        // This is a kind of, like, splice/zip of the two arrays, while setting the mappings between them.
        // It's kind of hard to follow--wish you could put, like, hand-drawn, diagrams in comments.
        while (true) {
            if (i >= children.length)
                break;
            if (j >= sortedChildrenWithoutNulls.length)
                break;
            let processedOriginalIndex = i;
            const originalChild = children[processedOriginalIndex];
            const originalIndex = originalChild == null ? undefined : this.getIndex(originalChild);
            if (originalIndex == null) {
                // This was a hole in the original array, so just copy it over directly to its original spot.
                this.sortedChildren[i] = originalChild;
                // Then move onto the next child.
                ++i;
            }
            else {
                // This is a known, managed child. Find all its mappings and recreate it with a new key.
                // To find the sortedChild this originalChild matches, first make sure we skip over holes in the sorted array
                // (This should only happen once, the first time, because they're usually sorted to the front)
                while (j < sortedChildrenWithoutNulls.length && sortedChildrenWithoutNulls[j].unmangledIndex == null) {
                    ++j;
                }
                // This line should never happen
                if (sortedChildrenWithoutNulls[j].unmangledIndex == null) {
                    /* eslint-disable no-debugger */
                    debugger;
                    break;
                }
                let processedSortedIndex = j;
                const sortedChild = sortedChildrenWithoutNulls[processedSortedIndex];
                const sortedIndex = sortedChild.unmangledIndex;
                this._mangledToDemangled.set(originalIndex, sortedIndex);
                this._demangledToMangled.set(sortedIndex, originalIndex);
                //this._processedToMangled.set(processedOriginalIndex, sortedIndex);
                //this._processedToDemangled.set(processedOriginalIndex, originalIndex);
                //this._mangledToProcessed.set(sortedIndex, processedOriginalIndex);
                //this._demangledToProcessed.set(originalIndex, processedOriginalIndex);
                this.sortedChildren[i] = g$2(sortedChild.vnode.type, {
                    ...sortedChild.vnode.props,
                    mangledIndex: sortedIndex,
                    demangledIndex: originalIndex,
                    key: originalIndex
                }); //sortedChild.vnode;
                ++i;
                ++j;
            }
        }
        return this.sortedChildren;
    }
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function defaultCompare(lhs, rhs) {
    if (lhs == null || rhs == null) {
        if (lhs == null)
            return -1;
        if (rhs == null)
            return 1;
    }
    // Note: Unlike lhs - rhs, this works with bare strings.
    return lhs > rhs ? 1 : lhs < rhs ? -1 : 0;
}

/**
 * Allows a parent to track the changes made to multi-selection children.
 *
 * @remarks Beyond just giving each child the ability to track its own selected state, the parent can change all children at once.
 * Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.
 *
 * This is not exclusive with {@link useSingleSelection}, you can use both at once if you have a use case for it.
 *
 * @hasChild {@link useMultiSelectionChild}
 *
 * @compositeParams
 */
function useMultiSelection({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }) {
    return useMonitoring(function useMultiSelection() {
        // By having both we get the total number of children for free, even if there are holes in the array.
        // TODO: useManagedChildren should do that by default??
        const selectedIndices = A$1(new Set());
        const unselectedIndices = A$1(new Set());
        const startOfShiftSelect = A$1(null);
        // Why these are needed:
        // When in focus mode, there's no way to determine whether these keys are held down during the focus event.
        // That's all. Wow.
        let shiftKeyHeld = A$1(false);
        let ctrlKeyHeld = A$1(false);
        // When a child changes selection state, it calls this function.
        const notifyParentOfChildSelectChange = useStableCallback((event, index, selected, previous) => {
            console.assert(selected != previous);
            if (selected == undefined) {
                // This child is unmounting itself.
                if (previous === true) {
                    console.assert(selectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
                    selectedIndices.current.delete(index);
                }
                else if (previous === false) {
                    console.assert(unselectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
                    unselectedIndices.current.delete(index);
                }
                else {
                    console.assert(false, `The child at index ${index} was not selected or unselected but a secret third thing: ${selected}`);
                }
            }
            else if (selected) {
                if (previous != undefined) {
                    console.assert(unselectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though it was not unselected before, somehow.`);
                    unselectedIndices.current.delete(index);
                }
                console.assert(!selectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though there is already a selected child with that index.`);
                selectedIndices.current.add(index);
                startOfShiftSelect.current = index;
            }
            else {
                if (previous != undefined) {
                    console.assert(selectedIndices.current.has(index), `The multi-select child at index ${index} changed to unselected even though it was not selected before, somehow.`);
                    selectedIndices.current.delete(index);
                }
                console.assert(!unselectedIndices.current.has(index), `The multi-select child at index ${index} was marked as unselected even though there is already an unselected child with that index.`);
                unselectedIndices.current.add(index);
            }
            const childCount = (selectedIndices.current.size + unselectedIndices.current.size);
            const selectedPercent = (childCount == 0 ? 0 : (selectedIndices.current.size / (childCount)));
            console.assert(selectedPercent >= 0 && selectedPercent <= 1);
            onSelectionChange?.(enhanceEvent(event, { selectedPercent, selectedIndices: selectedIndices.current }));
        });
        const changeAllChildren = useStableCallback((event, shouldBeSelected) => {
            getChildren().forEach(child => {
                if (!child.getMultiSelectionDisabled()) {
                    child.setSelectedFromParent(event, shouldBeSelected(child.index));
                }
            });
        });
        const doContiguousSelection = useStableCallback((event, endIndex) => {
            let originalEnd = endIndex;
            let temp = 0;
            let startIndex = startOfShiftSelect.current || 0; // TODO: Is || 0 correct here? Probably, right?
            if (startIndex <= endIndex) {
                // Never include the child that started this contiguous selection, only the children beyond it.
                ++startIndex;
            }
            else {
                // Never include the child that started(/ended) this contiguous selection, only the children beyond it.
                --startIndex;
                temp = endIndex;
                endIndex = startIndex;
                startIndex = temp;
            }
            console.assert(startIndex <= endIndex);
            if (startIndex <= endIndex) {
                changeAllChildren(event, (childIndex) => {
                    if (childIndex >= startIndex && childIndex <= endIndex) {
                        // If this child is within the range, toggle it.
                        return !getChildren().getAt(childIndex)?.getMultiSelected();
                    }
                    else {
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
        let nextCtrlAIsUndo = A$1(false);
        useGlobalHandler(getDocument(), "keydown", useStableCallback((e) => {
            shiftKeyHeld.current = (e.shiftKey || e.key == 'Shift');
            ctrlKeyHeld.current = (e.ctrlKey || e.key == 'Control');
            // Only do CTRL+A handling if the control is focused
            if (getAnyFocused()) {
                // Listen for CTRL+A
                if (e.code == "KeyA" && e.ctrlKey && !e.repeat) {
                    // Only perform this logic if multi-selection is enabled
                    if (multiSelectionMode != "disabled") {
                        changeAllChildren(e, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
                        e.preventDefault();
                        e.stopPropagation();
                        // TODO: This should update in more places
                        nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
                    }
                }
            }
        }), { capture: true });
        useGlobalHandler(getDocument(), "keyup", (e) => {
            if (e.key == 'Shift')
                shiftKeyHeld.current = false;
            if (e.key == 'Control')
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
    });
}
/**
 *
 * @compositeParams
 */
function useMultiSelectionChild({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
    return useMonitoring(function useMultiSelectionChild() {
        // When we're in focus-selection mode, focusing any child deselects everything and selects JUST that child.
        // But that's really annoying for when you tab into the component, so it's only enabled when you're navigating WITHIN the component
        // (e.g. we only do that "reset everything" selection stuff when the component already had focus and that focus simply moved to a different child)
        // The exception is press events, because a click can come from anywhere, focusing a child even if focus is elsewhere (or the window doesn't even have focus!)
        // So when a press event happens during focus-selection mode, we disable the disabling with this flag.
        const pressFreebie = A$1(false);
        const onPressSync = (e) => {
            if (!multiSelectionDisabled) {
                if (multiSelectionMode == "activation") {
                    if (e.shiftKey) {
                        doContiguousSelection(e, index);
                    }
                    else {
                        onMultiSelectChange?.(enhanceEvent(e, { multiSelected: !getLocalSelected() }));
                    }
                }
                else {
                    if (e.ctrlKey) {
                        onMultiSelectChange?.(enhanceEvent(e, { multiSelected: !getLocalSelected() }));
                    }
                    else {
                        pressFreebie.current = true;
                        focus$1(e.currentTarget);
                        onCurrentFocusedInnerChanged(true, false, e);
                    }
                }
            }
        };
        const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);
        const changeMultiSelected = useStableCallback((e, selected) => {
            console.assert(selected != null);
            console.assert(!multiSelectionDisabled);
            console.assert(multiSelectIsEnabled);
            // We're selected now (because someone told us we are, this hook doesn't call this function directly)
            //
            // So update our own internal state so we can re-render with the correct props,
            // and also notify the parent (in case the parent is listening for changes in some way)
            let prevSelected = getLocalSelected();
            if (prevSelected != selected) {
                setLocalSelected(selected);
                notifyParentOfChildSelectChange(e, index, selected, prevSelected);
            }
        });
        const multiSelectIsEnabled = (multiSelectionMode != 'disabled');
        _(() => {
            if (multiSelectIsEnabled) {
                notifyParentOfChildSelectChange(null, index, getLocalSelected(), undefined);
                return () => notifyParentOfChildSelectChange(null, index, undefined, getLocalSelected());
            }
        }, [index, multiSelectIsEnabled]);
        const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, event) => {
            if (focused) {
                if (multiSelectionMode == "focus") {
                    let any = getAnyFocused();
                    // Wow, it's the worst selection mode.
                    const subSelectionMode = (getShiftKeyDown() ? "toggle" : getCtrlKeyDown() ? "skip" : "set");
                    let newIndex = index;
                    switch (subSelectionMode) {
                        case "set":
                            if (any || pressFreebie.current) {
                                changeAllChildren(event, index => (index == newIndex));
                            }
                            break;
                        case "toggle":
                            doContiguousSelection(event, index);
                            break;
                        case "skip":
                            /* eslint-disable no-debugger */
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
            props: { [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? undefined : (localSelected ? "true" : "false") },
            info: {
                getMultiSelected: getLocalSelected,
                setSelectedFromParent,
                getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
            }
        };
    });
}
/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
function useMultiSelectionChildDeclarative({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }) {
    let reasonRef = A$1(undefined);
    y(() => {
        if (multiSelected != null)
            changeMultiSelected(reasonRef.current, multiSelected);
    }, [multiSelected]);
    const omsc = useStableCallback((e) => {
        reasonRef.current = e;
        return onMultiSelectedChange?.(e);
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected) => {
        onMultiSelectedChange?.(enhanceEvent(event, { multiSelected }));
    });
    return {
        multiSelectionChildParameters: {
            onMultiSelectChange: omsc
        },
        info: { setSelectedFromParent }
    };
}

/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
function useSingleSelection({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 }, ...void4 }) {
    return useMonitoring(function useSingleSelection() {
        const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop$1);
        const getSelectedAt = useCallback((m) => { return m.getSingleSelected(); }, []);
        const setSelectedAt = useCallback((m, t, newSelectedIndex, prevSelectedIndex) => {
            if (m.untabbable) {
                console.assert(false);
            }
            const directionComparison = (newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex);
            const direction = (directionComparison == null ? null : (m.index - directionComparison));
            if (newSelectedIndex == null)
                console.assert(t == false);
            if (t)
                console.assert(newSelectedIndex === m.index);
            m.setLocalSingleSelected(t, direction);
        }, []);
        const isSelectedValid = useCallback((m) => { return !m.untabbable; }, []);
        const { changeIndex: changeSingleSelectedIndex, getCurrentIndex: getSingleSelectedIndex } = useChildrenFlag({
            getChildren,
            onIndexChange: null,
            initialIndex: initiallySingleSelectedIndex,
            getAt: getSelectedAt,
            setAt: setSelectedAt,
            isValid: isSelectedValid,
            closestFit: false,
            onClosestFit: null,
            indexDemangler: null
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
                }),
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
}
/**
 *
 *
 * @compositeParams
 */
function useSingleSelectionChild({ singleSelectionChildParameters: { singleSelectionDisabled, ...void5 }, context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }) {
    return useMonitoring(function useSingleSelectionChild() {
        useEnsureStability("useSingleSelectionChild", getSingleSelectedIndex, onSingleSelectedIndexChange);
        const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
        const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : (getSingleSelectedIndex() - index));
        const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
            if (!singleSelectionDisabled && singleSelectionMode == 'focus' && focused && !untabbable) {
                onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
            }
        });
        const onPressSync = useStableCallback((e) => {
            // We allow press events for selectionMode == 'focus' because
            // press generally causes a focus anyway (except when it doesn't, iOS Safari...)
            if (!singleSelectionDisabled && !untabbable) {
                if (singleSelectionMode == 'activation')
                    onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
            }
            else {
                focus$1(e.currentTarget);
            }
        });
        const propParts = ariaPropName?.split("-") ?? [];
        return {
            info: {
                setLocalSingleSelected: useStableCallback((selected, direction) => {
                    setLocalSelected(selected);
                    setDirection(direction);
                }),
                getSingleSelected: getLocalSelected,
                singleSelected: localSelected,
            },
            singleSelectionChildReturn: {
                singleSelected: localSelected,
                getSingleSelected: getLocalSelected,
                singleSelectedOffset: direction,
                singleSelectionMode,
                getSingleSelectedOffset: getDirection
            },
            props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
                [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
            }, "data-single-selection-child"),
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
            pressParameters: { onPressSync }
        };
    });
}
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSingleSelectedIndex }, singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange } }) {
    let s = (singleSelectedIndex ?? null);
    let reasonRef = A$1(undefined);
    y(() => { changeSingleSelectedIndex(s, reasonRef.current); }, [s]);
    const osic = useCallback((e) => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);
    return { singleSelectionParameters: { onSingleSelectedIndexChange: osic } };
}

/**
 * Allows the children of this component to be selected, either with a `singleSelectedIndex` prop on the parent, or via each child's individual `multiSelected` prop.
 *
 * @remarks Single-selection and multi-selection are not mutually exclusive, though the cases where you would want both are uncommon.
 *
 * Most of the time, you'll want to pick and choose one mode to work with:
 *
 * ```md-literal
 * * Single-selection is controlled by the parent -- it receives a `singleSelectedIndex` parameter that represents the currently selected child and handles all the logic related to coordinating the deselection of the old child.
 * * Multi-selection is controlled by each individual child -- they have a `multiSelected` parameter that can be optionally reported back to the parent (so it can show the % of all children selected, or similar)
 * ```
 *
 * @see {@link useSingleSelection}
 * @see {@link useMultiSelection}
 *
 * @hasChild {@link useSelectionChild}
 *
 * @compositeParams
 */
function useSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }) {
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...void3 }, context: contextSS, singleSelectionReturn, ...void1 } = useSingleSelection({ managedChildrenReturn, rovingTabIndexReturn, singleSelectionParameters });
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc2, ...void4 }, context: contextMS, multiSelectionReturn, propsStable, ...void2 } = useMultiSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn });
    return {
        propsStable,
        childrenHaveFocusParameters: { onCompositeFocusChange: useStableMergedCallback(ocfc1, ocfc2) },
        context: useMemoObject({ ...contextSS, ...contextMS }),
        multiSelectionReturn,
        singleSelectionReturn
    };
}
/**
 *
 * @compositeParams
 */
function useSelectionChild({ context, info: { index, untabbable, ...void2 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void3 }) {
    const { props: p1, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters: { onPressSync: opc1 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, singleSelectionChildReturn, } = useSingleSelectionChild({ context, info: { index, untabbable }, singleSelectionChildParameters });
    const { props: p2, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, pressParameters: { onPressSync: opc2 }, multiSelectionChildReturn, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...void4 } = useMultiSelectionChild({ context, info: { index }, multiSelectionChildParameters });
    return {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
        info: {
            getMultiSelected,
            setSelectedFromParent,
            getSingleSelected,
            setLocalSingleSelected,
            singleSelected,
            getMultiSelectionDisabled,
        },
        multiSelectionChildReturn,
        pressParameters: { onPressSync: useStableMergedCallback(opc1, opc2) },
        props: useMergedProps(p1, p2),
        singleSelectionChildReturn
    };
}
/**
 * @compositeParams
 */
function useSelectionDeclarative(args) {
    return useSingleSelectionDeclarative(args);
}
/**
 * @compositeParams
 */
function useSelectionChildDeclarative(args) {
    return useMultiSelectionChildDeclarative(args);
}

/**
 * Access the `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
 *
 * @remarks
 *
 * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
 *
 * ```md-literal
 * * `useState` is familiar and easy to use, but calling `setState` causes a re-render, which you might not need/want
 * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
 * ```
 *
 * Suppose we want to call the `HTMLElement`'s `doSomethingFunny` method as soon as the element has been created:
 *
 * @example
 * Easiest way to use (but setElement causes an extra re-render when it's called...)
 * ```typescript
 * const [element, setElement] = useState<HTMLButtonElement | null>(null);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * useEffect(() => {
 *     element.doSomethingFunny();
 * }, [element])
 * ```
 *
 * @example
 * Fastest (but slightly more verbose)
 * ```typescript
 * // The code in useEffect is moved into this callback, but runs at the same time
 * const onElementChange = useCallback(element => element.doSomethingFunny(), []);
 * const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * ```
 *
 * @compositeParams
 */
function useRefElement(args) {
    return useMonitoring(function useRefElement() {
        const nonElementWarn = A$1(false);
        if (nonElementWarn.current) {
            nonElementWarn.current = false;
            // There are two of these to catch the problem in the two most useful areas --
            // when it initially happens, and also in the component stack.
            console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
        }
        const { onElementChange, onMount, onUnmount } = (args.refElementParameters || {});
        useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
        // Called (indirectly) by the ref that the element receives.
        const handler = useCallback((e, prevValue) => {
            if (!(e == null || e instanceof Element)) {
                console.assert(e == null || e instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
                nonElementWarn.current = true;
            }
            const cleanup = onElementChange?.(e, prevValue);
            if (prevValue)
                onUnmount?.(prevValue);
            if (e)
                onMount?.(e);
            return cleanup;
        }, []);
        // Let us store the actual (reference to) the element we capture
        const [getElement, setElement] = usePassiveState(handler, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const propsStable = A$1(useTagProps({ ref: setElement }, "data-use-ref-element"));
        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        return {
            propsStable: propsStable.current,
            refElementReturn: {
                getElement,
            }
        };
    });
}

function add(map, key, value) {
    var _a;
    let set = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
    set.add(value);
    map.set(key, set);
    return map;
}
/**
 * Removes this `value` from the `Set` associated with `key`. Does not remove the `Set` itself, even if it becomes empty.
 */
function del(map, key, value) {
    var _a;
    let set = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
    let ret = set.delete(value);
    map.set(key, set);
    return ret;
}
function has$1(map, key, value) {
    var _a, _b;
    return (_b = (_a = map.get(key)) === null || _a === void 0 ? void 0 : _a.has(value)) !== null && _b !== void 0 ? _b : false;
}

var mapOfSets = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add,
    delete: del,
    has: has$1
});

const activeElementUpdaters = new Map();
const lastActiveElementUpdaters = new Map();
const windowFocusedUpdaters = new Map();
const windowsFocusedUpdaters = new Map();
// The focusin and focusout events often fire synchronously in the middle of running code.
// E.G. calling element.focus() can cause a focusin event handler to immediately interrupt that code.
// For the purpose of improving stability, we debounce all focus events to the next microtask.
function forEachUpdater(window, map, value, reason) {
    const updaters = map.get(window);
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
function focusout(e) {
    const window = e.target.ownerDocument.defaultView;
    if (e.relatedTarget == null) {
        forEachUpdater(window, activeElementUpdaters, null, e);
    }
}
function focusin(e) {
    const window = e.target.ownerDocument.defaultView;
    const currentlyFocusedElement = e.target;
    forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement, e);
    forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement, e);
}
function windowFocus(e) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, true);
    forEachUpdater(window, windowFocusedUpdaters, true, e);
}
function windowBlur(e) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, false);
    forEachUpdater(window, windowFocusedUpdaters, false, e);
}
/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus
 *
 * @remarks The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes
 *
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 *
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 *
 * @compositeParams
 */
function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument } }) {
    return useMonitoring(function useActiveElement() {
        useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument);
        y(() => {
            const document = getDocument();
            const window = (document?.defaultView);
            if ((activeElementUpdaters.get(window)?.size ?? 0) === 0) {
                document?.addEventListener("focusin", focusin, { passive: true });
                document?.addEventListener("focusout", focusout, { passive: true });
                window?.addEventListener("focus", windowFocus, { passive: true });
                window?.addEventListener("blur", windowBlur, { passive: true });
            }
            const laeu = { send: setActiveElement, lastSent: undefined };
            const llaeu = { send: setLastActiveElement, lastSent: undefined };
            const lwfu = { send: setWindowFocused, lastSent: undefined };
            mapOfSets.add(activeElementUpdaters, window, laeu);
            mapOfSets.add(lastActiveElementUpdaters, window, llaeu);
            mapOfSets.add(windowFocusedUpdaters, window, lwfu);
            return () => {
                mapOfSets.delete(activeElementUpdaters, window, laeu);
                mapOfSets.delete(lastActiveElementUpdaters, window, llaeu);
                mapOfSets.delete(windowFocusedUpdaters, window, lwfu);
                if (activeElementUpdaters.size === 0) {
                    document?.removeEventListener("focusin", focusin);
                    document?.removeEventListener("focusout", focusout);
                    window?.removeEventListener("focus", windowFocus);
                    window?.removeEventListener("blur", windowBlur);
                }
            };
        }, []);
        const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue, { debounceRendering: runImmediately, skipMountInitialization: true });
        return { activeElementReturn: { getActiveElement, getLastActiveElement, getWindowFocused } };
    });
}

/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
function useDismiss({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }) {
    return useMonitoring(function useDismiss() {
        const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
        const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
        //const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop" as Listeners); }, [globalOnClose]);
        //const onCloseEscape = useCallback(() => { return globalOnClose?.("escape" as Listeners); }, [globalOnClose]);
        //const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus" as Listeners); }, [globalOnClose]);
        useBackdropDismiss({
            refElementPopupReturn,
            backdropDismissParameters: {
                dismissBackdropActive: (dismissBackdropActive && dismissActive),
                onDismissBackdrop: useStableCallback((e) => {
                    onDismissBackdrop?.(e);
                    onDismiss(e, "backdrop");
                }),
            },
        });
        useEscapeDismiss({
            refElementPopupReturn,
            escapeDismissParameters: {
                dismissEscapeActive: (dismissEscapeActive && dismissActive),
                getDocument,
                onDismissEscape: useStableCallback((e) => {
                    onDismissEscape?.(e);
                    onDismiss(e, "escape");
                }),
                parentDepth,
            },
        });
        const { activeElementParameters: { onLastActiveElementChange: olaec2, ...void1 } } = useLostFocusDismiss({
            lostFocusDismissParameters: {
                dismissLostFocusActive: (dismissLostFocusActive && dismissActive),
                onDismissLostFocus: useStableCallback((e) => {
                    onDismissLostFocus?.(e);
                    onDismiss(e, "lost-focus");
                }),
            },
            refElementPopupReturn,
            refElementSourceReturn
        });
        useActiveElement({
            activeElementParameters: {
                onLastActiveElementChange: useStableMergedCallback(olaec2, olaec1),
                onActiveElementChange,
                onWindowFocusedChange,
                getDocument
            }
        });
        return {
            refElementSourceReturn,
            refElementPopupReturn,
            propsStableSource: propsStableSource,
            propsStablePopup: propsStablePopup
        };
    });
}

let be;
(async () => {
    if (typeof window !== 'undefined') {
        let d = !!globalThis.document;
        globalThis.document ??= {};
        /// @ts-expect-error
        await import('wicg-inert');
        await import('blocking-elements');
        be = document.$blockingElements;
        if (!d)
            delete globalThis.document;
    }
})();
function blockingElements() { return be; }

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 */
function useBlockingElement({ activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }) {
    return useMonitoring(function useBlockingElement() {
        const stableGetTarget = useStableCallback(getTarget);
        //const getDocument = useStableCallback(() => (getTarget()?.ownerDocument ?? globalThis.document));
        useActiveElement({
            activeElementParameters: {
                getDocument,
                onActiveElementChange,
                onWindowFocusedChange,
                onLastActiveElementChange: useStableCallback((e, prev, reason) => {
                    onLastActiveElementChange?.(e, prev, reason);
                    if (e) {
                        if (enabled)
                            setLastActiveWhenOpen(e, reason);
                        else
                            setLastActiveWhenClosed(e, reason);
                    }
                })
            }
        });
        const [getTop, setTop] = usePassiveState(null, returnNull);
        const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
        const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
        /**
         * Push/pop the element from the blockingElements stack.
         */
        _(() => {
            const target = stableGetTarget();
            if (enabled) {
                // Sometimes blockingElements will fail if, for example,
                // the target element isn't connected to document.body.
                // This is rare, but it's better to fail silently with weird tabbing behavior
                // than to crash the entire application.
                try {
                    blockingElements().push(target);
                    setTop(target);
                    return () => {
                        blockingElements().remove(target);
                    };
                }
                catch (ex) {
                    // Well, semi-silently.
                    console.error(ex);
                }
            }
        }, [enabled]);
        return { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen };
    });
}

/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 *
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 *
 * @compositeParams
 */
function useFocusTrap({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }) {
    return useMonitoring(function useFocusTrap() {
        const focusSelf = useStableCallback(focusSelfUnstable);
        const focusOpener = useStableCallback(focusOpenerUnstable);
        y(() => {
            const document = getDocument();
            if (trapActive) {
                let top = getTop();
                getLastActiveWhenOpen();
                {
                    top ??= refElementReturn.getElement();
                    console.assert(!!top);
                    if (top)
                        focusSelf(top, () => findFirstFocusable(top));
                }
            }
            else {
                const lastActive = getLastActiveWhenClosed();
                let currentFocus = document?.activeElement;
                // Restore focus to whatever caused this trap to trigger,
                // but only if it wasn't caused by explicitly focusing something else 
                // (generally if `onlyMoveFocus` is true)
                let top = refElementReturn.getElement();
                if (document && (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus))) {
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
            props: useTagProps({ "aria-modal": trapActive ? "true" : undefined }, "data-focus-trap")
        };
    });
}
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
function findFirstFocusable(element) {
    return findFirstCondition(element, node => node instanceof Element && isFocusable(node));
}
function findFirstCondition(element, filter) {
    const document = getDocument(element);
    if (!document)
        return null;
    if (element && filter(element))
        return element;
    console.assert(!!element);
    element ??= document?.body;
    const treeWalker = document?.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
    const firstFocusable = treeWalker.firstChild();
    return firstFocusable;
}

/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 *
 * @compositeParams
 */
function useGridNavigationSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void2 }) {
    return useMonitoring(function useGridNavigationSelection() {
        const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, props, rovingTabIndexReturn, typeaheadNavigationReturn, } = useGridNavigation({
            gridNavigationParameters,
            linearNavigationParameters,
            managedChildrenReturn,
            rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
            typeaheadNavigationParameters,
            paginatedChildrenParameters,
            processedIndexManglerReturn,
            refElementReturn
        });
        const { childrenHaveFocusParameters, context: { singleSelectionContext, multiSelectionContext }, multiSelectionReturn, propsStable, singleSelectionReturn, ...void1 } = useSelection({
            managedChildrenReturn,
            rovingTabIndexReturn,
            singleSelectionParameters,
            multiSelectionParameters,
            childrenHaveFocusReturn
        });
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
}
/**
 * @compositeParams
 */
function useGridNavigationSelectionRow({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    return useMonitoring(function useGridNavigationSelectionRow() {
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, singleSelectionChildReturn, multiSelectionChildReturn, pressParameters: { onPressSync, ...void4 }, ...void2 } = useSelectionChild({ info: mcp1, context, singleSelectionChildParameters, multiSelectionChildParameters });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentParameters, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow({ context, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters });
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
}
/**
 * @compositeParams
 */
function useGridNavigationSelectionCell(p) {
    return useMonitoring(function useGridNavigationSelectionCell() {
        return useGridNavigationCell(p);
    });
}

/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
function useListNavigationSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void3 }) {
    return useMonitoring(function useListNavigationSelection() {
        const { context: contextSS, propsStable, ...retSS } = useSelection({
            childrenHaveFocusReturn,
            rovingTabIndexReturn: { setTabbableIndex: useStableCallback((...a) => { rovingTabIndexReturn.setTabbableIndex(...a); }) },
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
            processedIndexManglerReturn
        });
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
}
/**
 * @compositeParams
 */
function useListNavigationSelectionChild({ info: { index, untabbable, ...void2 }, context, refElementReturn, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    return useMonitoring(function useListNavigationSelectionChild() {
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, multiSelectionChildReturn, singleSelectionChildReturn, props: propsSS, pressParameters: { onPressSync }, ...void9 } = useSelectionChild({
            info: { index, untabbable },
            context,
            multiSelectionChildParameters,
            singleSelectionChildParameters
        });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentParameters, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
            info: { index, untabbable },
            context,
            refElementReturn,
        });
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
}

/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
function useTextContent({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }) {
    return useMonitoring(function useTextContent() {
        const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        y(() => {
            const element = getElement();
            if (element) {
                const textContent = getText(element);
                if (textContent) {
                    setTextContent(textContent);
                }
            }
        });
        return { textContentReturn: { getTextContent } };
    });
}

/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 *
 * @compositeParams
 */
function useChildrenHaveFocus(args) {
    return useMonitoring(function useChildrenHaveFocus() {
        const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;
        const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
            console.assert(anyFocused >= 0 && anyFocused <= 1);
            setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
        }), returnZero, { debounceRendering: setTimeout, skipMountInitialization: true }); // setTimeout is used for the debounce to be somewhat generous with timing, and to guard against the default being able to be runImmediately...
        return {
            childrenHaveFocusReturn: { getAnyFocused },
            context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) }),
        };
    });
}
/**
 * @compositeParams
 */
function useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    return useMonitoring(function useChildrenHaveFocusChild() {
        return {
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                    if (focused) {
                        setFocusCount(p => (p ?? 0) + 1, e);
                    }
                    else if (!focused && prev) {
                        setFocusCount(p => (p ?? 0) - 1, e);
                    }
                }),
            }
        };
    });
}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
function useHasCurrentFocus(args) {
    return useMonitoring(function useHasCurrentFocus() {
        const { hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged }, refElementReturn: { getElement } } = args;
        useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
        const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const onFocusIn = useCallback((e) => {
            setFocusedInner(true, e);
            setFocused(e.target == getElement(), e);
        }, []);
        const onFocusOut = useCallback((e) => {
            // Even if we're focusOut-ing to another inner element,
            // that'll be caught during onFocusIn,
            // so just set everything to false and let that revert things back to true if necessary.
            setFocusedInner(false, e);
            setFocused(false, e);
        }, []);
        y(() => {
            return () => {
                setFocused(false, undefined);
                setFocusedInner(false, undefined);
            };
        }, []);
        const propsStable = A$1({
            [onfocusin]: onFocusIn,
            [onfocusout]: onFocusOut
        });
        return {
            hasCurrentFocusReturn: {
                propsStable: propsStable.current,
                getCurrentFocused: getFocused,
                getCurrentFocusedInner: getFocusedInner,
            }
        };
    });
}

/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 *
 * @compositeParams
 */
function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, gridNavigationCompleteParameters: { getSortColumn, getSortValueAt: gsva }, processedIndexManglerParameters: { compare, getIndex }, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigation() {
        useEnsureStability("useCompleteGridNavigation", getSortColumn, gsva);
        const getSortValueAt = useCallback((index) => {
            const row = index;
            const column = getSortColumn == undefined ? undefined : getSortColumn();
            return gsva(row, column);
        }, [gsva, getSortColumn]);
        const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
        const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
        const isValidForNavigation = useCallback((i) => {
            const child = getChildren().getAt(i);
            if (child == null)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);
        const { refElementReturn, propsStable, ...void2 } = useRefElement({ refElementParameters });
        const { context: { processedIndexManglerContext }, processedIndexManglerReturn } = useProcessedIndexMangler({
            processedIndexManglerParameters: {
                compare,
                getIndex,
                getSortValueAt
            }
        });
        const { indexDemangler, indexMangler } = processedIndexManglerReturn;
        // Grab the information from the array of children we may or may not render.
        // (see useProcessedChildren -- it send this information to us if it's used.)
        // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
        //const { context: { rearrangeableChildrenContext, ...void4 }, indexDemangler, indexMangler, rearrange, reverse, shuffle, sort } = useCreateProcessedChildrenContext();
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
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });
        const refreshRows = A$1(() => { });
        const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
        const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
        const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
        const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
        /*const c2 = useMemoObject<UseProcessedChildrenContext>({
            processedChildrenContext,
            rearrangeableChildrenContext,
        });*/
        const context = useMemoObject({
            singleSelectionContext,
            multiSelectionContext,
            managedChildContext,
            rovingTabIndexContext,
            typeaheadNavigationContext,
            childrenHaveFocusChildContext,
            gridNavigationRowContext,
            processedChildrenContext,
            processedIndexManglerContext,
            completeGridNavigationContext: useMemoObject({ compare, getIndex, getSortValueAt, provideParentWithRefreshRows: useCallback((e) => { refreshRows.current = e; }, []) })
        });
        return {
            context,
            props: useMergedProps(props, propsStable),
            refElementReturn,
            managedChildrenReturn,
            rovingTabIndexReturn,
            childrenHaveFocusReturn,
            linearNavigationReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn,
            rearrangeableChildrenReturn: { refresh: useCallback(() => refreshRows.current(), []) },
            //completeGridNavigationReturn: { refreshRows }
        };
    });
}
/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
function useCompleteGridNavigationRows({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationRows() {
        const { completeGridNavigationContext: { compare, getIndex, getSortValueAt, provideParentWithRefreshRows } } = context;
        const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn, } = useProcessedChildren({
            paginatedChildrenParameters,
            processedIndexManglerParameters: { compare, getIndex, getSortValueAt },
            staggeredChildrenParameters,
            managedChildrenParameters,
            rearrangeableChildrenParameters,
            context,
        });
        _(() => {
            provideParentWithRefreshRows(() => {
                rearrangeableChildrenReturn.refresh();
            });
        }, []);
        return {
            context: contextRPS,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationRowOuter({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }) {
    return useMonitoring(function useCompleteGridNavigationRowOuter() {
        const { propsStable, refElementReturn } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });
        const { props, ...processedChildReturn } = useProcessedChild({
            context,
            info: { ...uinfo, index, getElement: refElementReturn.getElement },
            rearrangeableChildParameters,
        });
        const { refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
        return {
            ...processedChildReturn,
            props: useMergedProps(props, propsStable),
            refElementReturn,
            hide: processedChildReturn.paginatedChildReturn.hideBecausePaginated || processedChildReturn.staggeredChildReturn.hideBecauseStaggered
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationRow({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationRow() {
        // TODO: customUserInfo may contain setSelectedFromParent from the declarative version of this hook.
        // This is a bit of an edge case and should probably be handled more concretely.
        // Create some helper functions
        const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
        const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
        const isValidForNavigation = useCallback((i) => {
            const child = getChildren().getAt(i);
            if (child == null)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);
        // Someone somewhere needs useRefElement, no shock there
        const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
        // Enormous bag of parameters for useGridNavigationRow
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
        // Actually call useGridNavigationRow,
        // and get an enormous bag of return values
        const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, textContentParameters: { onTextContentChange: otcc2 }, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p3, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = useGridNavigationSelectionRow(parameters);
        const { textContentReturn, ...void7 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
        // This is all the info the parent needs about us, the row
        // (NOT the info the cells provide to us, the row)
        const completeInfo = {
            getElement: refElementReturn.getElement,
            index,
            untabbable,
            ...infoRowReturn,
        };
        // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
        const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
        const { managedChildReturn, ...void4 } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } });
        const context = useMemoObject({
            ...contextGNR,
            ...contextMC,
        });
        const { hasCurrentFocusReturn } = useHasCurrentFocus({
            refElementReturn,
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: ocfc1,
                onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic3),
            }
        });
        const props = useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable);
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
            props,
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationCell({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationCell() {
        const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
        const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentParameters: { onTextContentChange: otcc2 }, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSelectionCell({
            gridNavigationCellParameters,
            info: { index, untabbable },
            context,
            refElementReturn,
            //textContentReturn: { getTextContent: useStableCallback((): string | null => textContentReturn.getTextContent()) },
        });
        const { textContentReturn, ...void3 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
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
            pressParameters: { excludeSpace: useStableCallback(() => (es1?.() || false)) },
            hasCurrentFocusReturn,
            managedChildReturn,
            textContentReturn
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationDeclarative({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }) {
    const ret2 = useCompleteGridNavigation({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
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
/**
 * @compositeParams
 */
function useCompleteGridNavigationRowDeclarative({ multiSelectionChildParameters: { multiSelectionDisabled, ...multiSelectionChildParameters }, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters }, info, ...p }) {
    const { info: { setSelectedFromParent }, multiSelectionChildParameters: { onMultiSelectChange } } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters },
        multiSelectionChildReturn: { changeMultiSelected: useStableCallback((...e) => { changeMultiSelected(...e); }) }
    });
    const r1 = useCompleteGridNavigationRow({
        info: { ...info, setSelectedFromParent },
        multiSelectionChildParameters: {
            ...multiSelectionChildParameters,
            initiallyMultiSelected: multiSelected,
            multiSelectionDisabled,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange?.(e); })
        },
        ...p
    });
    const { multiSelectionChildReturn: { changeMultiSelected } } = r1;
    return r1;
}

/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
function useCompleteListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, 
//staggeredChildrenParameters,
refElementParameters, processedIndexManglerParameters, ...void1 }) {
    return useMonitoring(function useCompleteListNavigation() {
        const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
        const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
        const isValidForNavigation = useCallback((i) => {
            const child = getChildren().getAt(i);
            if (!child)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);
        const { propsStable: propsRef, refElementReturn } = useRefElement({ refElementParameters });
        const { context: { processedIndexManglerContext }, processedIndexManglerReturn: { indexDemangler, indexMangler, mangler } } = useProcessedIndexMangler({ processedIndexManglerParameters });
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
            processedIndexManglerReturn: { indexDemangler, indexMangler }
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
        // => <= <=>
        const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused });
        const refreshRows = A$1(() => { });
        const { getSortValueAt, compare, getIndex } = processedIndexManglerParameters;
        const context = useMemoObject({
            childrenHaveFocusChildContext,
            rovingTabIndexContext,
            singleSelectionContext,
            multiSelectionContext,
            typeaheadNavigationContext,
            managedChildContext: managedChildRTIContext,
            processedChildrenContext,
            listNavigationCompleteContext: useMemoObject({ getSortValueAt, compare, getIndex, provideParentWithRefreshRows: useCallback((e) => { refreshRows.current = e; }, []) }),
            processedIndexManglerContext,
        });
        return {
            context,
            props: useMergedProps(props, propsRef),
            managedChildrenReturn,
            linearNavigationReturn,
            rovingTabIndexReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn,
            childrenHaveFocusReturn,
            refElementReturn,
            rearrangeableChildrenReturn: { refresh: useCallback(() => refreshRows.current(), []) }
        };
    });
}
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
function useCompleteListNavigationChildren({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }) {
    return useMonitoring(function useCompleteListNavigationChildren() {
        const { listNavigationCompleteContext: { getSortValueAt, compare, getIndex, provideParentWithRefreshRows } } = context;
        const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn, } = useProcessedChildren({
            paginatedChildrenParameters,
            processedIndexManglerParameters: { getSortValueAt, compare, getIndex },
            rearrangeableChildrenParameters,
            staggeredChildrenParameters,
            managedChildrenParameters,
            context,
        });
        _(() => {
            provideParentWithRefreshRows(() => {
                rearrangeableChildrenReturn.refresh();
            });
        }, []);
        return {
            context: contextRPS,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn
        };
    });
}
/**
 *
 * @compositeParams
 */
function useCompleteListNavigationChild({ info: { index, focusSelf, untabbable, ...customUserInfo }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
textContentParameters: { getText, onTextContentChange: otcc1, ...void10 }, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, processedChildrenContext, processedIndexManglerContext, listNavigationCompleteContext, ...void5 }, ...void1 }) {
    return useMonitoring(function useCompleteListNavigationChild() {
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
            ...infoFromListNav,
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
}
/**
 * @compositeParams
 */
function useCompleteListNavigationDeclarative({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }) {
    const ret = useCompleteListNavigation({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            // Needs to be a (stable) callback because of declaration order
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...rest
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function useCompleteListNavigationChildDeclarative({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, info: i1, ...rest }) {
    const { multiSelectionChildParameters: { onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
        multiSelectionChildReturn: {
            changeMultiSelected: useStableCallback((...args) => { ret.multiSelectionChildReturn.changeMultiSelected(...args); })
        }
    });
    const ret = useCompleteListNavigationChild({
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange(e); }),
            ...multiSelectionChildParameters
        },
        info: { ...i1, ...i2 },
        ...rest
    });
    const { multiSelectionChildReturn, ...ret2 } = ret;
    return { ...ret2, multiSelectionChildReturn };
}

/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * TODO: The HTML &lt;dialog&gt; element is a thing now, and it can be modal or nonmodal, just like this hook. Hmm...
 *
 * @compositeParams
 */
function useModal({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }) {
    return useMonitoring(function useModal() {
        const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
            dismissParameters: { dismissActive: dismissActive && modalActive, onDismiss },
            escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth },
            activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
            backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop },
            lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus },
        });
        const { propsStable, refElementReturn } = useRefElement({ refElementParameters: { onElementChange, onMount, onUnmount } });
        const { props } = useFocusTrap({
            focusTrapParameters: { trapActive: trapActive && modalActive, ...focusTrapParameters },
            activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
            refElementReturn
        });
        return {
            propsFocusContainer: useMergedProps(propsStable, props),
            refElementPopupReturn,
            refElementSourceReturn,
            propsStablePopup,
            propsStableSource
        };
    });
}

function isPromise(p) {
    return p instanceof Promise;
}
const Unset = Symbol("Unset");
/**
 * lodash-ish function that's like debounce + (throttle w/ async handling) combined.
 *
 * Requires a lot of callbacks to meaningfully turn a red function into a blue one, but you *can* do it!
 * Note that part of this is emulating the fact that the sync handler cannot have a return value,
 * so you'll need to use `setResolve` and the other related functions to do that in whatever way works for your specific scenario.
 *
 * The comments are numbered in approximate execution order for your reading pleasure (1 is near the bottom).
 */
function asyncToSync({ asyncInput, onInvoke, onInvoked, onFinally: onFinallyAny, onReject, onResolve, onHasError, onHasResult, onError, onReturnValue, capture, onAsyncDebounce, onSyncDebounce, onPending, throttle, wait }) {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture = Unset;
    const onFinally = () => {
        // 8. This is run at the end of every invocation of the async handler,
        // whether it completed or not, and whether it was async or not.
        onFinallyAny?.();
        onPending?.(pending = false);
        let nothingElseToDo = (!asyncDebouncing);
        onAsyncDebounce?.(asyncDebouncing = false);
        if (nothingElseToDo) ;
        else {
            // 9b. Another request to run the async handler came in while we were running this one.
            // Instead of stopping, we're just going to immediately run again using the arguments that were given to us most recently.
            // We also clear that flag, because we're handling it now. It'll be set again if the handler is called again while *this* one is running
            console.assert(currentCapture !== Unset);
            if (currentCapture != Unset) {
                onSyncDebounce?.(syncDebouncing = true);
                syncDebounced();
            }
        }
    };
    const sync = (...args) => {
        // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
        // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
        onPending?.(pending = true);
        console.assert(syncDebouncing == false);
        onHasError?.(null);
        onHasResult?.(null);
        let promiseOrReturn;
        let hadSyncError = false;
        try {
            // 6. Run the function we were given.
            // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
            // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
            onInvoke?.();
            promiseOrReturn = asyncInput(...args);
            onHasError?.(false);
        }
        catch (ex) {
            hadSyncError = true;
            onError?.(ex);
            onInvoked?.("throw");
        }
        // 7. Either end immediately, or schedule to end when completed.
        if (isPromise(promiseOrReturn)) {
            onInvoked?.("async");
            promiseOrReturn
                .then(r => { onResolve?.(); onHasResult?.(true); onReturnValue?.(r); return r; })
                .catch(e => { onReject?.(); onHasError?.(true); onError?.(e); return e; })
                .finally(onFinally);
        }
        else {
            onInvoked?.("sync");
            if (!hadSyncError) {
                onResolve?.();
                onHasResult?.(true);
                onHasError?.(false);
            }
            else {
                onReject?.();
                onHasResult?.(false);
                onHasError?.(true);
            }
            onReturnValue?.(promiseOrReturn);
            onPending?.(pending = false);
            onFinally();
        }
    };
    // lodash uses "in" instead of checking for `undefined`...
    const lodashOptions = {
        leading: !wait,
        trailing: true
    };
    if (throttle) {
        if (wait == null || (wait < throttle))
            wait = throttle;
        lodashOptions.maxWait = throttle;
    }
    const syncDebounced = debounce(() => {
        // 3. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced (above)
        // and now that we're done throttling/debouncing, notify anyone who cares of this fact (below).
        onSyncDebounce?.(syncDebouncing = false);
        if (!pending) {
            // 4a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
            // then we can just go ahead and run the debounced version of our function.
            console.assert(currentCapture != Unset);
            sync(...currentCapture);
        }
        else {
            // 4b. If we were called while still waiting for the (or a) previous invocation to finish,
            // then we'll need to delay this one. When that previous invocation finishes, it'll check
            // to see if it needs to run again, and it will use these new captured arguments from step 2.
            onAsyncDebounce?.(asyncDebouncing = true);
        }
    }, wait || undefined, lodashOptions);
    return {
        syncOutput: (...args) => {
            // 1. Someone just called the sync version of our async function.
            // 2. We capture the arguments in a way that won't become stale if/when the function is called with a (possibly seconds-long) delay (e.g. event.currentTarget.value on an <input> element).
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

function identityCapture(...t) { return t; }
const AsyncFunction = ((async function () { }).constructor);
/**
 * Given an async function, returns a function that's suitable for non-async APIs,
 * along with other information about the current run's status.
 *
 * @see {@link useAsyncHandler} for a version that's specialized for DOM event handlers.
 *
 * @remarks When called multiple times in quick succession, (i.e. before the handler has finished),
 * this works like Lodash's `throttle` function with the `wait` option always
 * set to however long the handler takes to complete. A second call to the sync function will be
 * throttled until the first call has finished. The return value of the function is the result
 * of the previous invocation, or `undefined` on the first call.
 *
 * The handler is only ever delayed if one is currently running, so, e.g. for iOS touch events the
 * first call happens in the same event handler (which means things like calls to `element.focus()`
 * will work as intended, since that fails when the event is "split up")
 *
 * Finally, because the sync handler may be invoked on a delay, any property references on the arguments
 * provided might be stale by the time it's actually invoked (e.g. accessing `event.currentTarget.checked`
 * is not stable across time because it's a "live" value -- you almost always want the value that it
 * had at the original time the handler was called). The `capture` option allows you to save that kind of
 * dynamic data at the time it runs; the `AP` and `SP` type parameters likewise control
 * the parameters the async handler and sync handler expect respectively.
 *
 * {@include } {@link UseAsyncParameters}
 *
 * @param asyncHandler - The async function to make sync
 * @param options - @see {@link UseAsyncParameters}
 */
function useAsync(asyncHandler, options) {
    return useMonitoring(function useAsync() {
        // Things related to current execution
        // Because we can both return and throw undefined, 
        // we need separate state to track their existence too.
        //
        // We keep, like, a *lot* of render-state, but it only ever triggers a re-render
        // when we start/stop an async action.
        const [pending, setPending, _getPending] = useState(false);
        const [result, setResult, _getResult] = useState(undefined);
        const [error, setError, _getError] = useState(undefined);
        const [hasError, setHasError, _getHasError] = useState(false);
        const [hasResult, setHasResult, _getHasResult] = useState(false);
        const [asyncDebouncing, setAsyncDebouncing] = useState(false);
        const [syncDebouncing, setSyncDebouncing] = useState(false);
        const [invocationResult, setInvocationResult] = useState(asyncHandler instanceof AsyncFunction ? "async" : null);
        // Keep track of this for the caller's sake -- we don't really care.
        const [runCount, setRunCount] = useState(0);
        const [settleCount, setSettleCount] = useState(0);
        const [resolveCount, setResolveCount] = useState(0);
        const [rejectCount, setRejectCount] = useState(0);
        const incrementCallCount = useCallback(() => { setRunCount(c => c + 1); }, []);
        const incrementResolveCount = useCallback(() => { setResolveCount(c => c + 1); }, []);
        const incrementRejectCount = useCallback(() => { setRejectCount(c => c + 1); }, []);
        const incrementFinallyCount = useCallback(() => { setSettleCount(c => c + 1); }, []);
        /* eslint-disable prefer-const */
        let { throttle, debounce, capture: captureUnstable } = (options ?? {});
        const captureStable = useStableCallback(captureUnstable ?? identityCapture);
        const asyncHandlerStable = useStableCallback(asyncHandler ?? identity);
        const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = T$1(() => {
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
                throttle: options?.throttle ?? undefined,
                wait: options?.debounce ?? undefined
            });
        }, [throttle, debounce]);
        y(() => {
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
}

/**
 * Given an asynchronous event handler, returns a synchronous one that works on the DOM,
 * along with some other information related to the current state.
 * Does not modify any props.
 *
 * @remarks Note that because the handler you provide may be called with a delay, and
 * because the `value` of, e.g., an `<input>` element will likely have changed by the
 * time the delay is over, a `capture` function is necessary in order to
 * save the relevant information from the DOM at call-time. Any other simple event data,
 * like `mouseX` or `shiftKey` can stay on the event itself and don't
 * need to be captured &ndash; it's never stale.
 *
 * The handler is automatically throttled to only run one at a time.
 * If the handler is called, and then before it finishes, is called again,
 * it will be put on hold until the current one finishes, at which point
 * the second one will run.  If the handler is called a third time before
 * the first has finished, it will *replace* the second, so only the most
 * recently called iteration of the handler will run.
 *
 *
 * You may optionally *also* specify debounce and throttle parameters that wait until the
 * synchronous handler has not been called for the specified number of
 * milliseconds, at which point we *actually* run the asynchronous handler
 * according to the logic in the previous paragraph. This is in
 * *addition* to throttling the handler, and does not replace that behavior.
 *
 *
 * @example
 * General use
 * ```tsx
 * const asyncHandler = async (value: number, e: Event) => {
 *     [...] // Ex. send to a server and setState when done
 * };
 * const {
 *     // A sync version of asyncHandler
 *     syncHandler,
 *     // True while the handler is running
 *     pending,
 *     // The error thrown, if any
 *     error,
 *     // Show this value while the operation's pending
 *     currentCapture,
 *     // And others, see `UseAsyncHandlerReturnType`
 *     ...rest
 * } = useAsyncHandler<HTMLInputElement>()({
 *     asyncHandler,
 *     // Pass in the capture function that saves event data
 *     // from being stale.
 *     capture: e => {
 *         // `capture` can have side-effects because
 *         // it's called exactly once per invocation
 *         e.preventDefault();
 *
 *         // Save this value so that it's never stale
 *         return e.currentTarget.valueAsNumber;
 *     }
 * });
 *
 * const onInput = pending? null : syncHandler;
 * ```
 *
 * {@include } {@link UseAsyncHandlerParameters}
 *
 * @see useAsync A more general version of this hook that can work with any type of handler, not just DOM event handlers.
 */
function useAsyncHandler({ asyncHandler, capture: originalCapture, ...restAsyncOptions }) {
    return useMonitoring(function useAsyncHandler() {
        // We need to differentiate between "nothing captured yet" and "`undefined` was captured"
        const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(undefined);
        const [hasCapture, setHasCapture] = useState(false);
        // Wrap around the normal `useAsync` `capture` function to also
        // keep track of the last value the user actually input.
        // 
        // Without this there's no way to re-render the control with
        // it being both controlled and also having the "correct" value,
        // and at any rate also protects against sudden exceptions reverting
        // your change out from under you.
        const capture = useStableCallback((e) => {
            const captured = originalCapture(e);
            setCurrentCapture(captured);
            setHasCapture(true);
            return [captured, e];
        });
        return {
            getCurrentCapture,
            currentCapture,
            hasCapture,
            ...useAsync(asyncHandler, { capture, ...restAsyncOptions })
        };
    });
}

function pressLog(...args) {
    if (globalThis.__log_press_events)
        console.log(...args);
}
function supportsPointerEvents() {
    return ("onpointerup" in globalThis);
}
// All our checking for pointerdown and up doesn't mean anything if it's
// a programmatic onClick event, which could come from any non-user source.
// We want to handle those just like GUI clicks, but we don't want to double-up on press events.
// So if we handle a press from pointerup, we ignore any subsequent click events, at least for a tick.
//
// Also, this is global to handle the following situation:
// A button is tapped
// Some heavy rendering-logic is done and the page jumps around
// Now there's a new button underneath the user's finger
// And it receives a click event just cause.
// ...at the end of the day, globals are the best way to coordinate this simple state between disparate components.
// But TODO because it doesn't work well it this library is used multiple times on the same page.
let justHandledManualClickEvent = false;
let manualClickTimeout1 = null;
let manualClickTimeout2 = null;
function onHandledManualClickEvent() {
    pressLog("manual-click");
    justHandledManualClickEvent = true;
    if (manualClickTimeout1 != null)
        clearTimeout(manualClickTimeout1);
    if (manualClickTimeout2 != null)
        clearTimeout(manualClickTimeout2);
    // The timeout is somewhat generous here because when the "emulated" click event finally comes along
    // (i.e. after all the pointer events have finished) it will also clear this. 
    // This is mostly as a backup safety net.
    manualClickTimeout1 = setTimeout(() => {
        pressLog("manual-click halfway");
        // This is split into two halves for task-ordering reasons.
        // Namely we'd like one of these to be scheduled **after** some amount of heavy work was scheduled
        // Because the task queue is FIFO at **scheduling** time, not at the **scheduled** time.
        manualClickTimeout2 = setTimeout(() => {
            pressLog("manual-click clear");
            justHandledManualClickEvent = false;
        }, 50);
    }, 200);
}
getDocument()?.addEventListener?.("click", (e) => {
    if (justHandledManualClickEvent) {
        justHandledManualClickEvent = false;
        manualClickTimeout1 != null && clearTimeout(manualClickTimeout1);
        manualClickTimeout2 != null && clearTimeout(manualClickTimeout2);
        e.preventDefault();
        e.stopPropagation();
    }
}, { capture: true });
/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;,
 * and allows for a "long press" that can be used to,
 * e.g., show a tooltip *instead* of activating a press.
 *
 * @remarks
 * Notably, the following cases are covered:
 * ```md-literal
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text, it just presses the button twice.
 * * Text selection that happens to end/start with this element won't invoke a press.
 * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * ```
 *
 * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
 * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
 * and in that `active` accurately displays when a press would occur or not.
 *
 * {@include } {@link setPressVibrate}
 *
 * @compositeParams
 */
function usePress(args) {
    return useMonitoring(function usePress() {
        const { refElementReturn: { getElement }, pressParameters: { focusSelf, onPressSync, allowRepeatPresses, longPressThreshold, excludeEnter: ee, excludePointer: ep, excludeSpace: es, onPressingChange: opc } } = args;
        const excludeEnter = useStableCallback(ee ?? returnFalse);
        const excludeSpace = useStableCallback(es ?? returnFalse);
        const excludePointer = useStableCallback(ep ?? returnFalse);
        const onPressingChange = useStableCallback(opc ?? noop$1);
        const [getIsPressing, setIsPressing] = usePassiveState(onPressingChange, returnFalse);
        const hasPressEvent = (onPressSync != null);
        /**
         * Explanations:
         *
         * It would be nice to just use pointer events for everything,
         * but 2019 iOS devices can't run those, amazingly enough, and
         * that's still pretty recent. So we need to have backup touch
         * events.
         *
         * Why not just use click? Because at the very, very least,
         * we also need to be able to handle space and enter key presses,
         * and that needs to work regardless of if it's a <button> or not.
         *
         * Also, we do still use click, because programmatic clicks can come
         * from anything from ATs to automation scripts, and we don't want
         * to break those. But since we are listening for pointer/touch events,
         * and we can't prevent the subsequent click event from happening,
         * and we **don't want to duplicate press events**, we need to
         * ignore click events that happen in the same tick as a handled press event.
         *
         * When we do a pointermove/touchmove, we check to see if we're still hovering over the element
         * for more accurate "active"/hover detection.
         *
         * "But you have a pointerleave event, why check for hovering during pointermove?"
         *
         * Because for some reason, pointerleave (etc.) aren't fired until *after* pointerup, no matter what.
         *
         */
        const [longPress, setLongPress] = useState(null);
        const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
        const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
        const [hovering, setHovering, getHovering] = useState(false);
        const onTouchStart = useStableCallback((e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsPressing(true, e);
            setPointerDownStartedHere(true);
            setHovering(true);
            setLongPress(false);
            const element = getElement();
            if (element)
                focusSelf(element);
        });
        const onTouchMove = useCallback((e) => {
            pressLog("touchmove", e);
            e.preventDefault();
            e.stopPropagation();
            const element = getElement();
            const touch = e.touches[0];
            // Be as generous as possible with touch events by checking all four corners of the radius too
            const offsets = [
                [0, 0],
                [-touch.radiusX || 0, -touch.radiusY || 0],
                [+touch.radiusX || 0, -touch.radiusY || 0],
                [-touch.radiusX || 0, +touch.radiusY || 0],
                [+touch.radiusX || 0, +touch.radiusY || 0]
            ];
            let hoveringAtAnyPoint = false;
            for (const [x, y] of offsets) {
                const elementAtTouch = getDocument()?.elementFromPoint((touch?.clientX ?? 0) + x, (touch?.clientY ?? 0) + y);
                hoveringAtAnyPoint ||= !!elementAtTouch && (element?.contains(elementAtTouch) ?? false);
            }
            setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e);
            setHovering(hoveringAtAnyPoint);
        }, []);
        const preventClickEventsOnIosSafari = useCallback((e) => {
            e.preventDefault();
            e.stopPropagation();
        }, []);
        const onTouchEnd = useCallback((e) => {
            pressLog("touchend", e);
            e.preventDefault();
            e.stopPropagation();
            const hovering = getHovering();
            const pointerDownStartedHere = getPointerDownStartedHere();
            if (pointerDownStartedHere && hovering) {
                onHandledManualClickEvent();
                handlePress(e);
            }
            setWaitingForSpaceUp(false);
            setHovering(false);
            setPointerDownStartedHere(false);
            setIsPressing(false, e);
        }, []);
        const onPointerDown = useStableCallback((e) => {
            pressLog("pointerdown", e);
            if (!excludePointer()) {
                if ((e.buttons & 1)) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsPressing(true, e);
                    setPointerDownStartedHere(true);
                    setHovering(true);
                    setLongPress(false);
                    const element = getElement();
                    if (element)
                        focusSelf(element);
                }
            }
        });
        const onPointerMove = useStableCallback((e) => {
            pressLog("pointermove", e);
            let listeningForPress = getPointerDownStartedHere();
            // If we're hovering over this element and not holding down the mouse button (or whatever other primary button)
            // then we're definitely not in a press anymore (if we could we'd just wait for onPointerUp, but it could happen outside this element)
            if (!(e.buttons & 1))
                setPointerDownStartedHere(listeningForPress = false);
            if (listeningForPress) {
                const element = getElement();
                // Note: elementFromPoint starts reasonably expensive on a decent computer when on the order of 500 or so elements,
                // so we only test for hovering while actively attempting to detect a press
                const elementAtPointer = getDocument()?.elementFromPoint(e.clientX, e.clientY);
                const hovering = element == elementAtPointer || (!!elementAtPointer && element?.contains(elementAtPointer)) || false;
                setHovering(hovering);
                setIsPressing(hovering && getPointerDownStartedHere(), e);
            }
        });
        const onPointerUp = useCallback((e) => {
            pressLog("pointerup", e);
            const hovering = getHovering();
            const pointerDownStartedHere = getPointerDownStartedHere();
            if (!excludePointer()) {
                if (pointerDownStartedHere && hovering) {
                    onHandledManualClickEvent();
                    handlePress(e);
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
            setWaitingForSpaceUp(false);
            setHovering(false);
            setPointerDownStartedHere(false);
            setLongPress(false);
            setIsPressing(false, e);
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
            triggerIndex: longPress ? true : (pointerDownStartedHere && getHovering())
        });
        const handlePress = useStableCallback((e) => {
            pressLog("handlepress", e);
            setWaitingForSpaceUp(false);
            setHovering(false);
            setPointerDownStartedHere(false);
            setLongPress(null);
            if (onPressSync) {
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
                if (element)
                    focusSelf(element);
                // Whatever the browser was going to do with this event,
                // forget it. We're turning it into a "press" event.
                e.preventDefault();
                // Also stop anyone else from listening to this event,
                // since we're explicitly handling it.
                // (Notably, this allows labels to wrap inputs, with them
                // both having press event handlers, without double-firing)
                e.stopPropagation();
                // Haptic feedback for this press event
                try {
                    // The default implementation doesn't throw,
                    // but we should guard against user implementations that could.
                    pulse();
                }
                finally {
                    // Actually call our handler.
                    onPressSync(e);
                }
            }
        });
        const onKeyDown = useStableCallback((e) => {
            pressLog("keydown", e);
            if (onPressSync) {
                if (e.key == " " && !excludeSpace()) {
                    // We don't actually activate it on a space keydown
                    // but we do preventDefault to stop the page from scrolling.
                    setWaitingForSpaceUp(true);
                    setIsPressing(true, e);
                    e.preventDefault();
                }
                if (e.key == "Enter" && !excludeEnter() && (!e.repeat || (allowRepeatPresses ?? false))) {
                    setIsPressing(true, e);
                    handlePress(e);
                    requestAnimationFrame(() => {
                        setIsPressing(false, e);
                    });
                }
            }
        });
        const onKeyUp = useStableCallback((e) => {
            pressLog("keyup", e);
            const waitingForSpaceUp = getWaitingForSpaceUp();
            if (waitingForSpaceUp && e.key == " " && !excludeSpace()) {
                handlePress(e);
                setIsPressing(false, e);
            }
        });
        const onClick = useStableCallback((e) => {
            pressLog("click", e);
            // We should rarely get here. Most of the events do `preventDefault` which stops click from being called,
            // but we can still get here if the actual `click()` member is called, for example, and we need to react appropriately.
            const element = getElement();
            if (onPressSync) {
                if (e.detail > 1) {
                    if ("stopImmediatePropagation" in e)
                        e.stopImmediatePropagation();
                    e.stopPropagation();
                }
                else {
                    // Listen for "programmatic" click events.
                    if (justHandledManualClickEvent) {
                        // This is probably the click event after the end of all the pointerdownupleavemoveenter soup.
                        // Clear the flag a little early.
                        justHandledManualClickEvent = false;
                    }
                    else {
                        console.assert(justHandledManualClickEvent == false, "Logic???");
                        // Ignore stray click events that were't fired ON OR WITHIN on this element
                        // ("on or within" because sometimes a button's got a label that's a different element than the button)
                        if ((e.target && element?.contains(e.target))) {
                            if (getHovering()) ;
                            else {
                                // Intentional, for now. Programmatic clicks shouldn't happen in most cases.
                                // TODO: Remove this when I'm confident stray clicks won't be handled.
                                /* eslint-disable no-debugger */
                                debugger;
                                console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e);
                                console.assert(justHandledManualClickEvent == false, "Logic???");
                            }
                            setIsPressing(true, e);
                            requestAnimationFrame(() => {
                                setIsPressing(false, e);
                            });
                            handlePress(e);
                        }
                    }
                }
            }
        });
        const onFocusOut = useStableCallback((e) => {
            pressLog("focusout", e);
            setWaitingForSpaceUp(false);
            setIsPressing(false, e);
        });
        const p = supportsPointerEvents();
        return {
            pressReturn: {
                pressing: ((pointerDownStartedHere && hovering) || waitingForSpaceUp || false),
                getIsPressing,
                longPress
            },
            props: {
                onKeyDown,
                onKeyUp,
                onTouchStart: !hasPressEvent ? undefined : (!p ? onTouchStart : undefined),
                onTouchCancel: !hasPressEvent ? undefined : (!p ? onTouchEnd : undefined),
                onTouchMove: !hasPressEvent ? undefined : (!p ? onTouchMove : undefined),
                onTouchEnd: !hasPressEvent ? undefined : (!p ? onTouchEnd : preventClickEventsOnIosSafari),
                onPointerDown: !hasPressEvent ? undefined : (p ? onPointerDown : undefined),
                onPointerCancel: !hasPressEvent ? undefined : (p ? onPointerDown : undefined),
                onPointerMove: !pointerDownStartedHere || !hasPressEvent ? undefined : (p ? onPointerMove : undefined),
                onPointerUp: !hasPressEvent ? undefined : (p ? onPointerUp : undefined),
                onPointerEnter: !hasPressEvent ? undefined : (p ? onPointerEnter : undefined),
                onPointerLeave: !hasPressEvent ? undefined : (p ? onPointerLeave : undefined),
                [onfocusout]: onFocusOut,
                onClick
            },
        };
    });
}
let pulse = (("vibrate" in navigator) && (navigator.vibrate instanceof Function)) ? (() => navigator.vibrate(10)) : (() => { });

/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 *
 * @compositeParams
 */
function useRandomId({ randomIdParameters: { prefix, otherReferencerProp } }) {
    return useMonitoring(function useRandomId() {
        const id = (prefix + g$1());
        useEnsureStability("useRandomId", prefix, id);
        const referencerElementProps = A$1(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
        const sourceElementProps = A$1({ id });
        useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
        return {
            propsReferencer: referencerElementProps.current,
            propsSource: sourceElementProps.current,
            randomIdReturn: {
                id: id
            }
        };
    });
}

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 *
 * @compositeParams
 */
function useRandomDualIds({ randomIdInputParameters, randomIdLabelParameters, }) {
    return useMonitoring(function useRandomDualIds() {
        const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId({ randomIdParameters: randomIdInputParameters });
        const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId({ randomIdParameters: randomIdLabelParameters });
        return {
            propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
            propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
            randomIdInputReturn,
            randomIdLabelReturn
        };
    });
}

let templateElement = null;
function htmlToElement(parent, html) {
    const document = parent.ownerDocument;
    templateElement ??= document.createElement("template");
    templateElement.innerHTML = html.trim(); // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
    return templateElement.content.firstChild;
}
/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
N(A(ImperativeElementU));
/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 *
 * @compositeParams
 */
function useImperativeProps({ refElementReturn: { getElement } }) {
    return useMonitoring(function useImperativeProps() {
        const currentImperativeProps = A$1({ className: new Set(), style: {}, children: null, html: null, others: {} });
        const hasClass = useCallback((cls) => { return currentImperativeProps.current.className.has(cls); }, []);
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
                    }
                    else {
                        element.style[prop] = value ?? "";
                    }
                }
            }
        }, []);
        const setChildren = useCallback((children) => {
            let e = getElement();
            if (e && currentImperativeProps.current.children != children) {
                currentImperativeProps.current.children = children;
                currentImperativeProps.current.html = null;
                e.textContent = children;
            }
        }, []);
        const dangerouslySetInnerHTML = useCallback((children) => {
            let e = getElement();
            if (e && currentImperativeProps.current.html != children) {
                currentImperativeProps.current.children = null;
                currentImperativeProps.current.html = children;
                e.innerHTML = children;
            }
        }, []);
        const dangerouslyAppendHTML = useCallback((children) => {
            let e = getElement();
            if (e && children) {
                const newChild = htmlToElement(e, children);
                console.assert((newChild && newChild instanceof Node));
                if (newChild && newChild instanceof Node) {
                    currentImperativeProps.current.children = null;
                    currentImperativeProps.current.html ||= "";
                    currentImperativeProps.current.html += children;
                    e.appendChild(newChild);
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
            }
            else {
                if (getAttribute(prop) != undefined) {
                    delete currentImperativeProps.current.others[prop];
                    getElement()?.removeAttribute(prop);
                }
            }
        }, []);
        const setEventHandler = useCallback((type, handler, options) => {
            const element = getElement();
            const mappedKey = EventMapping[type];
            if (element) {
                if (handler) {
                    element.addEventListener(type, handler, options);
                    currentImperativeProps.current.others[mappedKey] = handler;
                }
                else if (currentImperativeProps.current.others[mappedKey]) {
                    element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
                    currentImperativeProps.current.others[mappedKey] = undefined;
                }
            }
        }, []);
        return {
            imperativePropsReturn: A$1({
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
}
function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps({ refElementReturn });
    F$1(handle, () => imperativeHandle);
    return (g$2(Tag, useMergedProps(propsStable, imperativeProps, props, { ref })));
}

const Table$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
function base64(value) {
    return Table$1[value];
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
 *
 *
 * (This is here, in this particular file, to avoid circular dependencies
 * because useBeforeLayoutEffect also needs random IDs for its own reasons)
 */
function generateRandomId(prefix) {
    return `${prefix ?? "id-"}${random64Bits().map(n => base64(n)).join("")}`;
}

/**
 * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
 *
 * @remarks Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
 *
 * TODO: Can't push a child until after the very first `useLayoutEffect`
 *
 * {@include } {@link UsePortalChildrenParameters}
 */
function usePortalChildren({ target }) {
    return useMonitoring(function usePortalChildren() {
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
        const element = T$1(() => { return target == null ? null : typeof target == "string" ? getDocument()?.getElementById(target) : target; }, [target]);
        const children = !element ? null : Y(g$2(PortalChildren, { setPushChild, setUpdateChild, setRemoveChild }), element);
        return {
            children: children,
            pushChild: pushChildStable,
            updateChild: updateChildStable,
            removeChild: removeChildStable,
            portalElement: element ?? null
        };
    });
}
/**
 * Implementation
 */
function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }) {
    const [children, setChildren, getChildren] = useState([]);
    const pushChild = useCallback((child) => {
        const randomKey = generateRandomId();
        let index = getChildren().length;
        setChildren(prev => ([...prev, G$1(child, { key: randomKey, index })]));
        return index;
    }, []);
    const updateChild = useCallback((index, child) => {
        const key = getChildren()[index]?.key;
        console.assert(!!key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1, G$1(child, { key: key, index }));
                return newChildren;
            });
            return index;
        }
    }, []);
    const removeChild = useCallback((index) => {
        const key = getChildren()[index]?.key;
        console.assert(!!key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1);
                return newChildren;
            });
            return index;
        }
    }, []);
    _(() => { setPushChild(_ => pushChild); }, [pushChild]);
    _(() => { setUpdateChild(_ => updateChild); }, [updateChild]);
    _(() => { setRemoveChild(_ => removeChild); }, [removeChild]);
    return (g$2(k$1, {}, children));
}

const defaultStorage = (typeof window === 'undefined' ? undefined : window.localStorage);
/**
 * #__NO_SIDE_EFFECTS__
 */
function getFromLocalStorage(key, converter = JSON.parse, storage = defaultStorage) {
    if (storage != null) {
        try {
            const item = storage.getItem(key);
            if (item == null)
                return null;
            return converter(item);
        }
        catch (e) {
            /* eslint-disable no-debugger */
            debugger;
            return null;
        }
    }
    return null;
}
function storeToLocalStorage(key, value, converter = JSON.stringify, storage = defaultStorage) {
    if (storage != null) {
        try {
            if (value == null)
                storage.removeItem(key);
            else
                storage.setItem(key, converter(value));
        }
        catch (e) {
            /* eslint-disable no-debugger */
            debugger;
        }
    }
}
/**
 * @remarks Use module augmentation to get the correct types for this function.
 *
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 * @param key -
 * @param initialValue -
 * @param fromString -
 * @param toString -
 * @returns
 */
function usePersistentState(key, initialValue, fromString = JSON.parse, toString = JSON.stringify, storage = defaultStorage) {
    const [localCopy, setLocalCopy, getLocalCopy] = useState(() => ((key ? (getFromLocalStorage(key, fromString, storage)) : null) ?? initialValue));
    const getInitialValue = useStableGetter(initialValue);
    // Ensure that if our key changes, we also update `localCopy` to match.
    _(() => {
        if (key) {
            const newCopy = getFromLocalStorage(key, fromString, storage);
            setLocalCopy(newCopy ?? getInitialValue());
        }
    }, [key, storage]);
    // Listen for changes to this storage in other browser tabs
    useGlobalHandler(getWindow(), "storage", useStableCallback((e) => {
        if (key && e.key === key && e.storageArea == storage) {
            const newValue = e.newValue;
            if (newValue != null)
                setLocalCopy(fromString(newValue));
            else
                setLocalCopy(initialValue);
        }
    }));
    const setValueWrapper = useStableCallback((valueOrSetter) => {
        const value = typeof valueOrSetter === "function" ? valueOrSetter(getLocalCopy()) : valueOrSetter;
        // Make sure this update is available immediately before the next render
        setLocalCopy(valueOrSetter);
        // Actually save the value to local storage.
        if (key) {
            storeToLocalStorage(key, value, toString, storage);
            if (typeof value == "object" && value instanceof Date) {
                console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
            }
        }
    });
    const getValue = useStableCallback(() => {
        const trueValue = !key ? undefined : getFromLocalStorage(key, fromString, storage);
        return trueValue ?? localCopy;
    });
    return [localCopy, setValueWrapper, getValue];
}

var f=0;function u(e,t,n,o,i,u){t||(t={});var a,c,l=t;"ref"in t&&(a=t.ref,delete t.ref);var p={type:e,props:l,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===l[c]&&(l[c]=a[c]);return l$1.vnode&&l$1.vnode(p),p}

J$1(null);

function useContextWithWarning(context, parentContextName) {
    let ret = x(context);
    if (ret == null) {
        /* eslint-disable no-debugger */
        debugger;
        console.error(`This child is missing its parent ${parentContextName} context`);
    }
    return ret;
}
function noop() { return; }
// (These do not need to be unique)
const Prefices = {
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

/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 *
 * @remarks The press handler is sync by default. See `useProgressWithHandler` to turn an async function into a sync function with a progress bar.
 *
 * @compositeParams
 */
function useButton({ buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 }, pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 }, refElementParameters, ...void2 }) {
    return useMonitoring(function useButton() {
        const { refElementReturn, propsStable: propsRef, ...void5 } = useRefElement({ refElementParameters });
        const { pressReturn, props: propsPress, ...void4 } = usePress({
            refElementReturn,
            pressParameters: {
                onPressSync: useStableCallback((e) => {
                    if (!disabled) {
                        const p = (pressed == null ? undefined : !pressed);
                        onPressSync?.(enhanceEvent(e, { pressed: p }));
                    }
                }),
                focusSelf,
                allowRepeatPresses,
                excludeEnter: returnFalse,
                excludePointer: returnFalse,
                excludeSpace,
                longPressThreshold,
                onPressingChange
            },
        });
        const baseProps = { "aria-pressed": (pressed === true ? "true" : pressed === false ? "false" : undefined) };
        const buttonProps = { ...baseProps, disabled: (disabled && disabled != "soft") ? true : false, "aria-disabled": (disabled === 'soft' ? 'true' : undefined), role: role == "button" ? undefined : role };
        const divProps = { ...baseProps, tabIndex: (disabled === "hard" ? -1 : 0), role: role || "button", "aria-disabled": disabled ? "true" : undefined };
        return {
            pressReturn,
            props: useMergedProps(propsPress, propsRef, (tagButton == 'button' ? buttonProps : divProps)),
            refElementReturn,
        };
    });
}

/**
 * Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.
 *
 * @remarks Accordions can be single-select or multi-select. For multi-select accordions, give each child its own `open` prop. For single-select accordions, just have their `open` prop be `null`.
 *
 * For some reason, accordions don't require a parent element, and don't have a roving tab index, but do implement keyboard navigation.
 *
 * This makes their implementation a little bit messy. Each child individually handles keyboard navigation even though the parent component (but not element) orchestrates it.
 *
 * @compositeParams
 *
 * @hasChild {@link useAccordionSection}
 */
function useAccordion({ accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters }, typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters }, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters }, ...void1 }) {
    return useMonitoring(function useAccordion() {
        const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, initialIndex ?? null);
        if (localStorageIndex != null)
            initialIndex = localStorageIndex;
        const { managedChildrenReturn, context: { managedChildContext } } = useManagedChildren({
            managedChildrenParameters: {
                onChildrenMountChange: useStableCallback((m, u) => { ocmc2(undefined); ocmc1?.(m, u); }),
                onAfterChildLayoutEffect,
                onChildrenCountChange,
                ...managedChildrenParameters
            }
        });
        const { getChildren } = managedChildrenReturn;
        const isValidByChild = useCallback((c) => (c && !c.disabled && !c.untabbable), []);
        const isValidByIndex = useCallback((c) => {
            const child = getChildren().getAt(c);
            if (child) {
                return isValidByChild(child);
            }
            return false;
        }, []);
        //const { propsStable, refElementReturn: { getElement } } = useRefElement<any>({ refElementParameters })
        // Keep track of the one expanded index (if there is only one expanded index)
        const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag({
            initialIndex,
            getChildren,
            getAt: useCallback((child) => { return child.getOpenFromParent() ?? false; }, []),
            setAt: useCallback((child, open) => { return child.setOpenFromParent(open); }, []),
            isValid: isValidByChild,
            onIndexChange: null,
            closestFit: false,
            onClosestFit: null,
            indexDemangler: identity
        });
        // Also keep track of which button is currently tabbable.
        // For some reason, Accordion buttons are both individually tabbable *and* arrow-key navigatable.
        const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag({
            initialIndex,
            getChildren,
            getAt: useCallback((child) => { return child.getMostRecentlyTabbed() ?? false; }, []),
            setAt: useCallback((child, tabbed) => { return child.setMostRecentlyTabbed(tabbed); }, []),
            isValid: isValidByChild,
            closestFit: true,
            indexDemangler: identity,
            onIndexChange: useCallback((i) => {
                if (i != null) {
                    const element = getChildren().getAt(i)?.getElement();
                    if (element)
                        getChildren().getAt(i)?.focusSelf(element);
                }
            }, []),
            onClosestFit: useStableCallback((index) => {
                const document = getDocument();
                // After needing to do a closest fit, we still need to handle focus:
                if (document && (document.activeElement == null || document.activeElement == document.body)) {
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
        const changeExpandedIndex = useStableCallback((value, r) => {
            changeExpandedIndexLocalOnly(value, r);
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
        return {
            typeaheadNavigationReturn,
            context: useMemoObject({
                managedChildContext,
                typeaheadNavigationContext,
                accordionSectionContext: useMemoObject({
                    changeExpandedIndex,
                    changeTabbedIndex,
                    getExpandedIndex: getCurrentExpandedIndex,
                    getTabbedIndex: getTabbedIndex,
                    stableTypeaheadProps: propsTN,
                }),
                linearNavigationParameters: useMemoObject({
                    getHighestIndex: useCallback(() => getChildren().getHighestIndex(), []),
                    getLowestIndex: useCallback(() => getChildren().getLowestIndex(), []),
                    indexMangler: identity,
                    indexDemangler: identity,
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
}
/**
 * @compositeParams
 */
function useAccordionSection({ buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters }, accordionSectionParameters: { open: openFromUser, bodyRole, ...void3 }, info: { index, untabbable, ...void4 }, textContentParameters: { getText, onTextContentChange: otcc1, ...void5 }, context, refElementBodyParameters, refElementHeaderButtonParameters, pressParameters: { focusSelf, ...pressParameters }, ...void1 }) {
    return useMonitoring(function useAccordionSection() {
        const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
        const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState(null);
        const { accordionSectionContext: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn, } = context;
        const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionHeaderButton, otherReferencerProp: "aria-controls" } });
        const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId({ randomIdParameters: { prefix: Prefices.accordionSectionBody, otherReferencerProp: "aria-labelledby" } });
        const open = ((openFromUser ?? openFromParent) ?? false);
        const { refElementReturn: refElementBodyReturn, propsStable: bodyRefElementProps } = useRefElement({ refElementParameters: refElementBodyParameters });
        const { hasCurrentFocusReturn } = useHasCurrentFocus({
            refElementReturn: { getElement: useStableCallback(() => { return refElementHeaderButtonReturn.getElement(); }) },
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: null,
                onCurrentFocusedInnerChanged: useStableCallback((focused, _prev) => {
                    if (focused) {
                        setCurrentFocusedIndex(index, undefined);
                        setMostRecentlyTabbed(true);
                    }
                })
            }
        });
        useManagedChild({
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
                getElement: useStableCallback(() => { return refElementHeaderButtonReturn.getElement(); }),
            }
        });
        const { propsStable: propsLN, linearNavigationReturn, ...void10 } = useLinearNavigation({
            linearNavigationParameters,
            rovingTabIndexReturn,
            paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
            processedIndexManglerReturn: { indexMangler: identity, indexDemangler: identity }
        });
        const { pressParameters: { excludeSpace, ...void11 }, 
        //textContentReturn,
        textContentParameters: { onTextContentChange: otcc2, ...void13 }, ...void2 } = useTypeaheadNavigationChild({
            info: { index },
            //refElementReturn: { getElement: useStableCallback((): HeaderButtonElement | null => refElementHeaderButtonReturn.getElement()) },
            //textContentParameters: { getText, },
            context
        });
        const { propsStable, refElementReturn } = useRefElement({ refElementParameters: { onElementChange: null, onMount: null, onUnmount: null } });
        const { textContentReturn } = useTextContent({
            refElementReturn,
            textContentParameters: { getText, onTextContentChange: useStableCallback((...a) => { otcc1?.(...a); otcc2?.(...a); }) }
        });
        console.log(`RENDER accordion section #${index}`);
        const { pressReturn, props, refElementReturn: refElementHeaderButtonReturn, ...void12 } = useButton({
            buttonParameters: {
                pressed: null,
                role: "button",
                disabled,
                tagButton,
                onPressSync: (e) => {
                    console.log(`Press event for accordion section #${index}`);
                    debugger;
                    setCurrentFocusedIndex(index, e);
                    if (getOpenFromParent())
                        changeExpandedIndex(null, e);
                    else
                        changeExpandedIndex(index, e);
                    userOnPress?.(e);
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
                focused: (getCurrentFocusedIndex() == index)
            },
            propsHeaderButton: useMergedProps(props, hasCurrentFocusReturn.propsStable, propsHeadReferencer, propsHeadSource, propsLN, stableTypeaheadProps, { "aria-expanded": (open ?? false), }),
            propsBody: useMergedProps(bodyRefElementProps, propsBodyReferencer, propsBodySource, {
                role: bodyRole,
                tabIndex: -1
            }),
            propsHeader: propsStable
        };
    });
}

/**
 * Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @remarks `useCheckboxGroup` and its child hooks **do not** call `useCheckbox`. These hooks are for creating CheckboxGroup-like functionality&mdash;in theory, this could be implemented in a listbox.
 *
 * A checkbox group is made up of the "Parent" checkbox and the "Child" checkboxes.  Of course, all of them are children of the group as a whole, but the "Parent" checkbox is the one that, when clicked, toggles the checked state of all the "Child" checkboxes.
 *
 * A checkbox group's parent, when clicked, toggles between three states:
 * ```md-literal
 * * Unchecked (all children become unchecked)
 * * Mixed (all children become the last user-input value)
 * * Checked (all children become checked)
 * ```
 *
 * This functions even if it takes an `async` amount of time to complete the "cause the child checkbox to change its state" action.
 *
 * @compositeParams
 *
 * @hasChild {@link useCheckboxGroupParent}
 * @hasChild {@link useCheckboxGroupChild}
 */
function useCheckboxGroup({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation, ...void2 }, multiSelectionParameters, refElementParameters, typeaheadNavigationParameters, processedIndexManglerParameters, ...void1 }) {
    return useMonitoring(function useCheckboxGroup() {
        const { context, linearNavigationReturn, managedChildrenReturn, props, rearrangeableChildrenReturn, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, multiSelectionReturn, refElementReturn, ...void3 } = useCompleteListNavigation({
            linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
            rovingTabIndexParameters: { focusSelfParent: focus$1, ...rovingTabIndexParameters },
            singleSelectionParameters: { initiallySingleSelectedIndex: null, onSingleSelectedIndexChange: null, singleSelectionAriaPropName: null, singleSelectionMode: "disabled" },
            paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
            multiSelectionParameters,
            refElementParameters,
            typeaheadNavigationParameters,
            processedIndexManglerParameters,
        });
        const { getChildren } = managedChildrenReturn;
        const children = getChildren();
        // Keep track of all child IDs, and any time any of them change, 
        // generate a new string with all of them concatenated together
        // (but only once per render);
        const allIds = A$1(new Set());
        const updateParentControlIds = useStableCallback((setter) => { setter?.(Array.from(allIds.current).join(" ")); });
        const [getControlsSetterOnParentCheckbox, setControlsSetterOnParentCheckbox] = usePassiveState(updateParentControlIds, returnNull);
        const [_getUpdateIndex, setUpdateIndex] = usePassiveState(useStableCallback(() => { updateParentControlIds(getControlsSetterOnParentCheckbox()); }), returnZero, { debounceRendering: setTimeout });
        // Lots of machinery to track what total percentage of all checkboxes are checked,
        // and notifying the parent checkbox of this information (while re-rendering as little as possible)
        const getSelfIsChecked = useCallback((percentChecked) => { return percentChecked <= 0 ? false : percentChecked >= 1 ? true : "mixed"; }, []);
        const onAnyChildCheckedUpdate = useStableCallback((setter, percentChecked) => { setter?.(getSelfIsChecked(percentChecked)); });
        const [getTotalChildren, setTotalChildren] = usePassiveState(useCallback((totalChildren) => { onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(getTotalChecked(), totalChildren)); }, []), returnZero);
        const [getTotalChecked, setTotalChecked] = usePassiveState(useCallback((totalChecked) => { onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(totalChecked, getTotalChildren())); }, []), returnZero);
        const getPercentChecked = useCallback((totalChecked, totalChildren) => {
            if (totalChildren > 0)
                return totalChecked / totalChildren;
            else
                return (totalChecked == 0 ? 0 : 1);
        }, []);
        const [getSetParentCheckboxChecked, setSetParentCheckboxChecked] = usePassiveState(useStableCallback((setter) => {
            onAnyChildCheckedUpdate(setter, getPercentChecked(getTotalChecked(), getTotalChildren()));
        }));
        const onCheckboxGroupParentInput = useCallback(async (e) => {
            e.preventDefault();
            const selfIsChecked = getSelfIsChecked(getPercentChecked(getTotalChecked(), getTotalChildren()));
            const nextChecked = (selfIsChecked === false ? "mixed" : selfIsChecked === "mixed" ? true : false);
            let willChangeAny = false;
            const promises = [];
            children.forEach(child => {
                if (child.checkboxChildType == "child")
                    willChangeAny ||= (child.getChecked() != child.getLastUserChecked());
            });
            children.forEach(child => {
                if (child.checkboxChildType == "child") {
                    const prevChecked = child.getChecked();
                    let checked;
                    if (nextChecked == "mixed") {
                        if (willChangeAny)
                            checked = (child.getLastUserChecked());
                        else
                            checked = true;
                    }
                    else {
                        checked = nextChecked;
                    }
                    if (checked != prevChecked) {
                        const promise = child.setCheckedFromParentInput(checked, e);
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
                ...context,
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
                    onCheckboxGroupParentInput,
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
}
/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 *
 * @compositeParams
 */
function useCheckboxGroupParent({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters, multiSelectionChildParameters, singleSelectionChildParameters, ...void1 }) {
    return useMonitoring(function useCheckboxGroupParent() {
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
        const [ariaControls, setControls] = useState("");
        _(() => {
            setControlsSetterOnParentCheckbox(() => setControls, undefined);
        }, [setControls]);
        const [checked, setChecked] = useState(false);
        y(() => {
            setSetParentCheckboxChecked(() => setChecked, undefined);
        }, []);
        const checkboxGroupParentReturn = { checked, onParentCheckedChange: onCheckboxGroupParentInput, getPercent: useStableCallback(() => { return getPercentChecked(getTotalChecked(), getTotalChildren()); }) };
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
}
/**
 * Implements the "child" part of a checkbox group.
 *
 * @remarks Does not implement any actual "checkbox" functionality,
 * but it does tell you what to do *with* a checkbox.
 *
 * (That is to say, use `onChildCheckedChange` whenever
 * your checkbox or checkbox-like thing changes, and
 * properly implement `onChangeFromParent` to work
 * properly when the parent changes)
 *
 * @compositeParams
 */
function useCheckboxGroupChild({ checkboxGroupChildParameters, context, info: { focusSelf, index, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, multiSelectionChildParameters: { multiSelectionDisabled, onMultiSelectChange, ...void5 }, ...void4 }) {
    return useMonitoring(function useCheckboxGroupChild() {
        const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked, } } = context;
        const { checked, onChangeFromParent, ...void1 } = checkboxGroupChildParameters;
        const getChecked = useStableGetter(checked);
        const [getLastUserChecked, setLastUserChecked] = usePassiveState(null, returnFalse);
        const onChildCheckedChange = useStableCallback((checked) => {
            setLastUserChecked(checked, undefined);
        });
        const onControlIdChanged = useCallback((next, prev) => {
            if (prev)
                allIds.delete(prev);
            if (next)
                allIds.add(next);
            if (!!next || !!prev) {
                setUpdateIndex(i => ((i ?? 0) + 1), undefined);
            }
        }, []);
        y(() => {
            setTotalChildren(c => ((c ?? 0) + 1), undefined);
            return () => setTotalChildren(c => ((c ?? 0) - 1), undefined);
        }, []);
        y(() => {
            if (checked) {
                setTotalChecked(c => ((c ?? 0) + 1), undefined);
                return () => setTotalChecked(c => ((c ?? 0) - 1), undefined);
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
            multiSelectionChildReturn,
        };
    });
}

/**
 * @compositeParams
 */
function useLabel({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }) {
    return useMonitoring(function useLabel() {
        const nativeHTMLBehavior = (tagInput == "input" && tagLabel == "label" && labelPosition != "wrapping");
        const synthetic = !nativeHTMLBehavior;
        const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useRandomDualIds({
            randomIdInputParameters: { ...randomIdInputParameters, otherReferencerProp: !synthetic && labelPosition === "separate" ? "for" : null },
            randomIdLabelParameters: { ...randomIdLabelParameters, otherReferencerProp: synthetic ? "aria-labelledby" : null },
        });
        const { refElementReturn, propsStable: propsRef } = useRefElement({ refElementParameters: {} });
        if (labelPosition == 'none') {
            // When we set the aria-label, intentionally clobber element-based labels (for example, in case they don't exist).
            propsInput["aria-label"] = (ariaLabel);
            propsInput["aria-labelledby"] = undefined;
            propsLabel["for"] = undefined;
        }
        const { pressReturn, props: propsPress } = usePress({
            pressParameters: {
                excludeEnter: returnTrue,
                excludeSpace: returnTrue,
                onPressSync: onLabelClick,
                focusSelf: noop,
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
            randomIdLabelReturn,
        };
    });
}
/**
 * Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
 *
 * @compositeParams
 */
function useLabelSynthetic({ labelParameters: { ariaLabel, onLabelClick }, ...rest }) {
    return useMonitoring(function useLabelSynthetic() {
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
}

function preventDefault(e) {
    e.preventDefault();
}
/**
 * Handles any component that's "checkbox-like" (checkboxes, radios, switches, etc.)
 *
 * @remarks Handles any component where there's:
 * ```md-literal
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 * ```md-literal
 *
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 *
 * @compositeParams
 */
function useCheckboxLike({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, onPressSync: onInputSync, ...void2 }, ...void3 }) {
    return useMonitoring(function useCheckboxLike() {
        const { getElement: getInputElement } = refElementInputReturn;
        const { getElement: getLabelElement } = refElementLabelReturn;
        const { tagInput, tagLabel, labelPosition } = labelParameters;
        // onClick and onChange are a bit messy, so we need to
        // *always* make sure that the visible state is correct
        // after all the event dust settles.
        // See https://github.com/preactjs/preact/issues/2745,
        // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194
        y(() => {
            const element = getInputElement();
            if (element && tagInput == "input") {
                element.indeterminate = (checked === "mixed");
                element.checked = (checked === true);
            }
        }, [tagInput, (checked ?? false)]);
        const { randomIdInputReturn, randomIdLabelReturn, propsInput, propsLabel, pressReturn } = useLabel({
            labelParameters: {
                ...labelParameters,
                onLabelClick: useStableCallback((e) => {
                    if (!disabled && tagInput != "input" && tagLabel != "label" && labelPosition != "separate") {
                        focusSelf();
                        onInputSync?.(e);
                    }
                })
            },
            randomIdInputParameters,
            randomIdLabelParameters,
        });
        const focusSelf = useStableCallback(() => {
            let elementToFocus = null;
            if (labelPosition == "wrapping")
                elementToFocus = getLabelElement();
            else
                elementToFocus = getInputElement();
            focus$1(elementToFocus);
        });
        const onClickInputSync = (labelPosition == "wrapping" ? undefined : onInputSync);
        const onClickLabelSync = onInputSync;
        const { pressReturn: pressInputReturn, props: propsPressInput } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickInputSync }, refElementReturn: refElementInputReturn });
        const { pressReturn: pressLabelReturn, props: propsPressLabel } = usePress({ pressParameters: { excludeSpace, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, longPressThreshold, onPressingChange: null, focusSelf, onPressSync: (disabled) ? undefined : onClickLabelSync }, refElementReturn: refElementLabelReturn });
        const propsUnstableInput = {};
        const propsUnstableLabel = {};
        // Make sure that label clicks can't affect the visual state of the checkbox
        propsUnstableInput.onClick = preventDefault;
        propsUnstableLabel.onClick = preventDefault;
        propsUnstableInput.onInput = preventDefault;
        propsUnstableInput.onChange = preventDefault;
        propsUnstableInput.type = role == "radio" ? "radio" : "checkbox";
        switch (labelPosition) {
            case "none":
            case "separate": {
                if (tagInput == "input") {
                    // Even in the most default input behavior, we still need to handle
                    // special abstraction over checked="mixed" and disabled="soft"
                    propsUnstableInput.checked = (checked === true);
                    if (disabled === true || disabled === 'hard')
                        propsUnstableInput.disabled = true;
                    else if (disabled == "soft")
                        propsUnstableInput["aria-disabled"] = "true";
                }
                else {
                    // div inputs need their various ARIA roles and properties
                    propsUnstableInput.role = role;
                    propsUnstableInput.tabIndex = 0;
                    propsUnstableInput["aria-checked"] = (checked ?? false);
                    propsUnstableInput["aria-disabled"] = (!!disabled);
                }
                break;
            }
            case "wrapping": {
                if (tagInput == "input") {
                    // For form submission and styling
                    propsUnstableInput.checked = (checked === true);
                    propsUnstableInput.disabled = (disabled === true);
                    // Because the wrapped label handles all interactions,
                    // we need to make sure this element can't be interacted with
                    // even if it's an input element.
                    propsUnstableInput.inert = true;
                    propsUnstableInput.tabIndex = -1;
                    propsUnstableInput.role = "presentation";
                    propsUnstableInput["aria-hidden"] = "true";
                    propsUnstableInput.onFocus = () => focus$1(getLabelElement?.());
                }
                // Wrapping labels are the actual inputs that are interacted with
                // And are very similar conceptually to div inputs when separated
                propsUnstableLabel.role = role;
                propsUnstableLabel.tabIndex = 0;
                propsUnstableLabel["aria-checked"] = (checked ?? false);
                propsUnstableLabel["aria-disabled"] = (!!disabled);
                break;
            }
        }
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
}

/**
 * Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 */
function useCheckbox({ checkboxLikeParameters: { checked, disabled, ...void2 }, checkboxParameters: { onCheckedChange, ...void4 }, labelParameters, pressParameters, ...void1 }) {
    return useMonitoring(function useCheckbox() {
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
                onPressSync: useStableCallback(e => { onCheckedChange?.(enhanceEvent(e, { checked: !checked, previous: checked })); }),
                ...pressParameters,
            },
            labelParameters,
        });
        return {
            checkboxReturn: { propsUnstable: { type: (tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : undefined) } },
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
}

/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
function useDialog({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }) {
    return useMonitoring(function useDialog() {
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
                    const e = refElementPopupReturn.getElement();
                    focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
                })
            },
            randomIdInputParameters: { prefix: Prefices.dialog },
            randomIdLabelParameters: { prefix: Prefices.dialogTitle }
        });
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
}

/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 *
 * @compositeParams
 */
function useDrawer({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, labelParameters, backdropDismissParameters, lostFocusDismissParameters, modalParameters, refElementParameters, ...void1 }) {
    return useMonitoring(function useDrawer() {
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
                ...labelParameters, onLabelClick: useStableCallback(() => {
                    const e = refElementPopupReturn.getElement();
                    focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
                })
            },
            randomIdInputParameters: { prefix: Prefices.drawer },
            randomIdLabelParameters: { prefix: Prefices.drawerTitle }
        });
        return {
            propsFocusContainer,
            propsDrawer: useMergedProps(propsStablePopup, propsInput),
            propsTitle: propsLabel,
            propsSource: { ...propsStableSource },
            refElementPopupReturn,
            refElementSourceReturn,
        };
    });
}

/**
 * @compositeParams
 */
function useGridlist({ gridNavigationParameters, linearNavigationParameters, managedChildrenParameters, multiSelectionParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, labelParameters, randomIdInputParameters, randomIdLabelParameters, gridNavigationCompleteParameters, processedIndexManglerParameters, ...void1 }) {
    return useMonitoring(function useGridlist() {
        const { propsInput, propsLabel, ...labelSyntheticRet } = useLabelSynthetic({
            labelParameters,
            randomIdInputParameters,
            randomIdLabelParameters
        });
        const { context: contextRows, props, ...completeGridNavigationRet } = useCompleteGridNavigationDeclarative({
            gridNavigationParameters,
            linearNavigationParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementParameters,
            rovingTabIndexParameters,
            singleSelectionParameters,
            typeaheadNavigationParameters,
            singleSelectionDeclarativeParameters,
            gridNavigationCompleteParameters,
            processedIndexManglerParameters
        });
        const { context: contextProcessing, ...completeGridNavigationRowsRet } = useCompleteGridNavigationRows({
            context: contextRows,
            managedChildrenParameters,
            paginatedChildrenParameters,
            rearrangeableChildrenParameters,
            staggeredChildrenParameters,
        });
        completeGridNavigationRet.rearrangeableChildrenReturn;
        completeGridNavigationRowsRet.rearrangeableChildrenReturn;
        return {
            ...completeGridNavigationRet,
            ...completeGridNavigationRowsRet,
            ...labelSyntheticRet,
            props: useMergedProps(props, propsInput, { role: "grid", "aria-multiselectable": (contextRows.multiSelectionContext.multiSelectionMode != "disabled" ? "true" : undefined) }),
            propsLabel,
            contextChildren: contextRows,
            contextProcessing
        };
    });
}
/**
 * @compositeParams
 */
function useGridlistRowOuter(p) {
    return useMonitoring(function useGridlistRowOuter() {
        let r = useCompleteGridNavigationRowOuter(p);
        r.props.role = "row";
        return r;
    });
}
/**
 * @compositeParams
 */
function useGridlistRow(p) {
    return useMonitoring(function useGridlistRow() {
        // `selected` should only be true/false for multi-selection
        if (p.context.multiSelectionContext.multiSelectionMode == "disabled")
            console.assert(p.multiSelectionChildDeclarativeParameters.multiSelected == null, `useGridlistRow: multiSelectionMode is disabled, but selected is ${p.multiSelectionChildDeclarativeParameters.multiSelected?.toString()} (instead of null).`);
        let r = useCompleteGridNavigationRowDeclarative(p);
        r.props.role = "row";
        return r;
    });
}
/**
 * @compositeParams
 */
function useGridlistCell({ pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressSync, onPressingChange }, ...p }) {
    return useMonitoring(function useGridlistCell() {
        let { props, ...r } = useCompleteGridNavigationCell(p);
        const { pressReturn, props: propsPress } = usePress({
            pressParameters: {
                onPressSync,
                focusSelf: p.info.focusSelf,
                allowRepeatPresses,
                excludeEnter,
                excludePointer,
                excludeSpace: useStableCallback(() => r.pressParameters.excludeSpace?.() || excludeSpace?.() || false),
                longPressThreshold,
                onPressingChange
            },
            refElementReturn: r.refElementReturn,
        });
        return {
            propsTabbable: props,
            propsCell: { role: "gridcell" },
            propsPress,
            pressReturn,
            ...r
        };
    });
}

/**
 * Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.
 *
 * @remarks A listbox is a very limited widget and its items cannot contain interactive or non-text content.
 *
 * @see {@link useGridlist} for a more capable list widget.
 *
 * @compositeParams
 *
 * @hasChild {@link useListboxItem}
 */
function useListbox({ labelParameters, listboxParameters: { groupingType, orientation }, linearNavigationParameters, singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void2 }, singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex, ...void3 }, rovingTabIndexParameters, ...restParams }) {
    return useMonitoring(function useListbox() {
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
        let { context, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn: _singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
            rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus$1 },
            singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex },
            singleSelectionParameters: { singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected", singleSelectionMode },
            linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
            multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange },
            ...restParams
        });
        if (groupingType == "group")
            props.role = "group";
        else if (groupingType == "with-groups") {
            // Intentionally clobbering all the list navigation stuff.
            props = { role: "listbox" };
            // ...actually, context too while we're at it.
            context = null;
        }
        else {
            props.role = "listbox";
        }
        return {
            ...restRet,
            context,
            rovingTabIndexReturn,
            propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": (multiSelectionMode != "disabled" ? true : undefined) }),
            propsListboxLabel: propsLabelLabel
        };
    });
}
/*
export interface UseListboxChildrenParameters<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends    UseCompleteListNavigationChildrenParameters<TabbableChildElement, M> {
}

export const useListboxChildren = monitored(function useListboxChildren<E extends Element, M extends UseProcessedChildInfo<E>>({
    context,
    managedChildrenParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters
}: UseListboxChildrenParameters<E, M>) {
    return useCompleteListNavigationChildren<E, M>({
        context,
        managedChildrenParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        staggeredChildrenParameters
    });
})*/
/**
 * @compositeParams
 */
function useListboxItem({ context, listboxParameters, pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, singleSelectionChildParameters: { singleSelectionDisabled }, ...restParams }) {
    return useMonitoring(function useListboxItem() {
        const { propsChild, propsTabbable, refElementReturn, pressParameters: { onPressSync, excludeSpace, ...void2 }, ...restRet } = useCompleteListNavigationChildDeclarative({
            context,
            singleSelectionChildParameters: { singleSelectionDisabled },
            ...restParams
        });
        propsChild.role = "option";
        propsChild["aria-disabled"] = singleSelectionDisabled ? "true" : undefined;
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
}

/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup, but not something potentially modal like a dialog).
 *
 * @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 *
 * Related to **menus**, which are a **menubar** contained within a **menu surface**.
 *
 * @compositeParams
 */
function useMenuSurface({ dismissParameters, focusTrapParameters, activeElementParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, modalParameters, escapeDismissParameters, ...void2 }) {
    return useMonitoring(function useMenuSurface() {
        const { refElementReturn: { getElement: getButtonElement }, propsStable: propsRefTrigger, ...void4 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
        const { refElementReturn: { getElement: getMenuElement, ...void5 }, propsStable: propsRefSurface, ...void6 } = useRefElement({ refElementParameters: { onElementChange: undefined } });
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
                    focus$1(buttonElement);
                }),
                ...focusTrapParameters
            }
        });
        const propsSurface = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);
        const propsTarget = useMergedProps({
            role,
            id: surfaceId
        });
        const propsTrigger = useMergedProps({
            "aria-expanded": (modalParameters.active),
            "aria-haspopup": role,
        }, propsRefTrigger, ps2, { "aria-controls": surfaceId });
        const propsSentinel = useFocusSentinel({
            focusSentinel: {
                sendFocusToMenu: useStableCallback(() => { return focusTrapParameters.focusPopup(getMenuElement(), () => findFirstFocusable(getMenuElement())); }),
                onClose: useStableCallback((e) => { dismissParameters.onDismiss(e, "lost-focus"); }),
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
}
/**
 * A focus sentinel is a hidden but focusable element that comes at the start or end
 * of the out-of-place-focusable component that, when activated or focused over, closes the component
 * (if focused within 100ms of the open prop changing, instead of
 * closing, focusing the sentinel immediately asks it to focus itself).
 * This exists for things like menus which can have focus but also need a way to return
 * to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
 * to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
 * and keyboard users can escape to close a menu, screen readers and other input methods
 * that don't use those two would become stuck.
 *
 * @compositeParams
 */
function useFocusSentinel({ focusSentinel: { open, onClose, sendFocusToMenu } }) {
    return useMonitoring(function useFocusSentinel() {
        const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
        const stableOnClose = useStableCallback(onClose);
        const [sentinelIsActive, setSentinelIsActive] = useState(false);
        useTimeout({ callback: () => { setSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${sentinelIsActive}` });
        const onFocus = sentinelIsActive ? ((e) => stableOnClose(e)) : (() => getSendFocusWithinMenu()?.());
        const onClick = (e) => stableOnClose(e);
        return {
            tabIndex: sentinelIsActive ? 0 : -1,
            onFocus,
            onClick
        };
    });
}

/**
 * Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern, which is a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.
 *
 * @remarks
 * The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems,
 * but a toolbar is the more general case, being able to contain anything at all.
 * A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.
 *
 * Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).
 *
 * @compositeParams
 */
function useToolbar({ linearNavigationParameters, toolbarParameters: { orientation, role, disabled }, labelParameters, rovingTabIndexParameters, singleSelectionParameters, singleSelectionDeclarativeParameters, ...listNavParameters }) {
    return useMonitoring(function useToolbar() {
        if (singleSelectionDeclarativeParameters.singleSelectedIndex !== undefined) {
            console.assert(singleSelectionParameters.singleSelectionMode != "disabled", `useToolbar: When singleSelectionMode is "disabled", singleSelectedIndex must be null.`);
        }
        const { context, props, ...listNavReturn } = useCompleteListNavigationDeclarative({
            ...listNavParameters,
            rovingTabIndexParameters: { ...rovingTabIndexParameters, untabbable: disabled, focusSelfParent: focus$1 },
            singleSelectionDeclarativeParameters,
            paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
            linearNavigationParameters: { ...linearNavigationParameters, arrowKeyDirection: orientation },
            singleSelectionParameters,
        });
        const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic({
            labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
            randomIdInputParameters: { prefix: Prefices.toolbar },
            randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
        });
        // Note: We return tabIndex=-1 (when not disabled) because some browsers (at least Firefox) seem to add role=toolbar to the tab order?
        // Probably needs a bit more digging because this feels like a bit of a blunt fix.
        return {
            context: useMemoObject({ ...context, toolbarContext: useMemoObject({}) }),
            propsLabel,
            propsToolbar: useMergedProps({
                ...propsToolbar,
                role: role ?? undefined,
                tabIndex: disabled ? 0 : -1,
                "aria-disabled": disabled ? "true" : undefined
            }, props),
            randomIdInputReturn,
            randomIdLabelReturn,
            ...listNavReturn
        };
    });
}
/**
 * @compositeParams
 */
function useToolbarChild({ context, info, toolbarChildParameters: { disabledProp }, ...args }) {
    return useMonitoring(function useToolbarChild() {
        const { propsChild, propsTabbable, ...listNavReturn } = useCompleteListNavigationChild({ info, context, ...args });
        return {
            propsChild: useMergedProps(propsChild, { [disabledProp]: (args.singleSelectionChildParameters.singleSelectionDisabled || args.multiSelectionChildParameters.multiSelectionDisabled) ? true : undefined }),
            propsTabbable,
            ...listNavReturn
        };
    });
}

/**
 * Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.
 *
 * @remarks A menubar is identical to a toolbar, except that every item
 * in a menubar is a menuitem (or similar) and has some sort of
 * role and action when pressed besides just single selection (if applicable).
 *
 * (A toolbar child won't have a defined role, but every menubar child will)
 *
 * @compositeParams
 */
function useMenubar(args) {
    return useMonitoring(function useMenubar() {
        const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
        return {
            propsMenubar,
            ...restReturn
        };
    });
}
/**
 * @compositeParams
 */
function useMenubarChild({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }) {
    return useMonitoring(function useMenubarChild() {
        const focusSelf = useCallback((e) => focus$1(e), []);
        const { propsChild, propsTabbable, pressParameters: { onPressSync, excludeSpace }, ...restRet } = useToolbarChild({
            ...restParams,
            toolbarChildParameters: { disabledProp: "aria-disabled" }
        });
        const { pressReturn, props: propsPress } = usePress({
            pressParameters: {
                focusSelf,
                excludeSpace,
                onPressSync: useStableCallback((e) => {
                    onPressSync?.(e);
                    opu?.(e);
                }),
                allowRepeatPresses: false,
                excludeEnter: returnFalse,
                excludePointer: returnFalse,
                longPressThreshold: null,
                onPressingChange
            }, refElementReturn: restRet.refElementReturn
        });
        propsChild.role = role;
        return {
            props: useMergedProps(propsChild, propsTabbable, propsPress),
            pressReturn,
            ...restRet
        };
    });
}

/**
 * Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.
 *
 * @remarks A menu is a specialization of a menubar (something that handles navigation among a set of menuitems)
 * and a menu surface (something that handles moving focus to/from an unrelated area of the page).
 *
 * Additionally, pressing the arrow key that corresponds to the direction that the menu opens
 * in will open it.
 *
 * @compositeParams
 */
function useMenu({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, activeElementParameters, toolbarParameters, modalParameters, ...restParams }) {
    return useMonitoring(function useMenu() {
        const { context, propsLabel: propsButtonAsMenuLabel, propsMenubar, randomIdInputReturn, rovingTabIndexReturn, ...restRet } = useMenubar({
            toolbarParameters: { role: "menu", ...toolbarParameters },
            labelParameters: { ariaLabel: null },
            ...restParams
        });
        const onKeyDown = useStableCallback((e) => {
            const isOpen = modalParameters.active;
            if (!isOpen) {
                switch (e.key) {
                    case "ArrowUp": {
                        if (openDirection == 'up') {
                            onOpen();
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        break;
                    }
                    case "ArrowDown": {
                        if (openDirection == 'down') {
                            onOpen();
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        break;
                    }
                    case "ArrowLeft": {
                        if (openDirection == 'left') {
                            onOpen();
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        break;
                    }
                    case "ArrowRight": {
                        if (openDirection == 'right') {
                            onOpen();
                            e.preventDefault();
                            e.stopPropagation();
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
                role: "menu",
            },
            escapeDismissParameters,
            modalParameters,
            dismissParameters,
            activeElementParameters,
            focusTrapParameters: {
                focusPopup: () => { rovingTabIndexReturn.focusSelf(); }
            }
        });
        return {
            ...restRet,
            ...restRet2,
            context: useMemoObject({
                ...context,
                menu: useMemoObject({
                    closeFromMenuItemClicked: useStableCallback((e) => {
                        dismissParameters.onDismiss(e, "item-clicked"); // TODO
                    })
                })
            }),
            refElementSourceReturn,
            rovingTabIndexReturn,
            randomIdInputReturn,
            propsTarget: useMergedProps(propsTarget, propsMenubar),
            propsTrigger: useMergedProps({ onKeyDown }, propsTrigger, propsButtonAsMenuLabel),
        };
    });
}
/**
 * @compositeParams
 */
function useMenuItem(p) {
    return useMonitoring(function useMenuItem() {
        const ret = useMenubarChild(p);
        return {
            ...ret,
            menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
        };
    });
}

const NotificationProviderContext = J$1(null);
/**
 * Allows children to send notifications to a screen reader or other assistive technology.
 *
 * Please note that because some devices only check for `aria-live` regions *once* on page load,
 * they cannot be created dynamically. You must pass the ID of the **already-existing** elements to use (or the elements themselves).
 *
 * One *must* have `aria-live=polite` and one *must* have `aria-live=assertive`, but there aren't really any other requirements.
 * They shouldn't be visible, I suppose.
 *
 * @compositeParams
 *
 * @hasChild {@link useNotify}
 */
function useNotificationProvider({ targetAssertive, targetPolite }) {
    return useMonitoring(function useNotificationProvider() {
        const { children: childrenPolite, pushChild: notifyPolite, portalElement: politeElement } = usePortalChildren({ target: targetPolite });
        const { children: childrenAssertive, pushChild: notifyAssertive, portalElement: assertiveElement } = usePortalChildren({ target: targetAssertive });
        if (typeof window !== "undefined") {
            console.assert(politeElement != null, `useNotificationProvider: targetPolite is missing`);
            console.assert(assertiveElement != null, `useNotificationProvider: targetAssertive is missing`);
            if (politeElement)
                console.assert(politeElement.getAttribute("aria-live") == "polite", `useNotificationProvider: targetPolite missing attribute "aria-live=polite"`);
            if (assertiveElement)
                console.assert(assertiveElement.getAttribute("aria-live") == "assertive", `useNotificationProvider: targetAssertive is missing, or missing "aria-live=assertive"`);
        }
        const notify = useCallback((mode, child) => {
            return mode == "assertive" ? notifyAssertive(child) : notifyPolite(child);
        }, [notifyAssertive, notifyPolite]);
        return {
            notify,
            context: T$1(() => ({ notify }), [notify]),
            children: (u(k$1, { children: [childrenPolite, childrenAssertive] }))
        };
    });
}
function useNotify() {
    return useContextWithWarning(NotificationProviderContext, "notification provider").notify;
}

/**
 * Provides the attributes and roles for a progress bar.
 *
 * @compositeParams
 */
function useProgress({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagProgressIndicator, ...void1 }, ...void2 }) {
    return useMonitoring(function useProgress() {
        const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn, pressReturn, ...void3 } = useLabelSynthetic({
            labelParameters: { ...labelParameters, onLabelClick: null },
            randomIdInputParameters: { prefix: Prefices.progressIndicator },
            randomIdLabelParameters: { prefix: Prefices.progressLabel }
        });
        // This isn't an input in the usual sense -- it's not tabbable.
        // TODO: Make this an option in the hook itself
        propsInput.tabIndex = -1;
        const busy = value && value != "disabled"; //value == "disabled" || !value? false : true;// (!!value);
        const disabled = (value == "disabled");
        if (typeof value != "number") {
            value = null;
            max ??= 100;
        }
        const indicatorProps = tagProgressIndicator === "progress" ?
            {
                max,
                value: (value ?? undefined),
                "aria-valuemin": 0,
                "aria-valuenow": value == null ? undefined : value,
            }
            :
                {
                    "aria-valuemin": 0,
                    "aria-valuemax": max == null ? undefined : max,
                    "aria-valuetext": valueText == null ? undefined : `${valueText}`,
                    "aria-valuenow": value == null ? undefined : value,
                    role: "progressbar"
                };
        if (disabled) {
            indicatorProps["aria-hidden"] = true;
        }
        const labelProps = {
            "aria-hidden": (!busy ? "true" : undefined)
        };
        const regionProps = {
            "aria-busy": !!(busy),
            "aria-describedby": randomIdInputReturn.id
        };
        return {
            propsProgressIndicator: useMergedProps(indicatorProps, propsInput),
            propsProgressLabel: useMergedProps(labelProps, propsLabel),
            propsProgressRegion: regionProps,
            randomIdInputReturn,
            randomIdLabelReturn,
            pressReturn,
        };
    });
}
/**
 * Provides props for a progress bar based on the progress of an async event handler, and notifies ATs when the operation has started/finished.
 *
 * @remarks This hook is meant to be combined with other hooks, generally wrapping around the other hook.
 * You don't actually need an entire progress bar element as long as your `notify*` parameters are good.
 *
 * @compositeParams
 */
function useProgressWithHandler({ labelParameters, progressIndicatorParameters, asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters }, progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 }, ...void2 }) {
    return useMonitoring(function useProgressWithHandler() {
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
                }
                catch (ex) {
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
                value: (forciblyPending || asyncInfo.pending) ? "indeterminate" : "disabled",
                valueText: null,
                ...progressIndicatorParameters
            },
        });
        return {
            propsProgressIndicator,
            propsProgressLabel,
            propsProgressRegion,
            asyncHandlerReturn: asyncInfo
        };
    });
}

/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 *
 * @remarks Which radio is the selected one is controlled by the `selectedValue` parameter on the parent.
 *
 * @compositeParams
 *
 * @hasChild {@link useRadio}
 */
function useRadioGroup({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, typeaheadNavigationParameters, refElementParameters, singleSelectionParameters: { singleSelectionMode, ...void4 }, processedIndexManglerParameters, ...void1 }) {
    return useMonitoring(function useRadioGroup() {
        // TODO: The way this is structured causes 1 extra re-render on the parent
        // when the selectedValue changes to selectedIndex.
        const [selectedIndex, setSelectedIndex] = useState(null);
        const nameToIndex = A$1(new Map());
        const indexToName = A$1(new Map());
        y(() => {
            setSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
        }, [selectedValue]);
        const { propsInput: propsGroup1, propsLabel } = useLabelSynthetic({
            labelParameters: {
                onLabelClick: useStableCallback(() => {
                    rovingTabIndexReturn.focusSelf();
                }),
                ...labelParameters
            },
            randomIdLabelParameters: { prefix: Prefices.radioGroupLabel, },
            randomIdInputParameters: { prefix: Prefices.radioGroup }
        });
        const { context, props: propsGroup2, singleSelectionReturn, multiSelectionReturn: _multiSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, linearNavigationReturn, rearrangeableChildrenReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, refElementReturn, ...void3 } = useCompleteListNavigationDeclarative({
            singleSelectionDeclarativeParameters: {
                singleSelectedIndex: selectedIndex,
                onSingleSelectedIndexChange: useStableCallback((e) => {
                    setSelectedIndex(e[EventDetail].selectedIndex);
                    onSelectedValueChange?.(enhanceEvent(e, { selectedValue: indexToName.current.get(e[EventDetail].selectedIndex) }));
                }),
            },
            singleSelectionParameters: { singleSelectionMode, singleSelectionAriaPropName: null },
            multiSelectionParameters: { multiSelectionMode: "disabled", multiSelectionAriaPropName: null, onSelectionChange: null },
            paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
            rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus$1 },
            linearNavigationParameters,
            typeaheadNavigationParameters,
            refElementParameters,
            processedIndexManglerParameters
        });
        const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });
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
            context: T$1(() => ({
                ...context,
                radioContext: { name, indexToName: indexToName.current, nameToIndex: nameToIndex.current }
            }), [name]),
        };
    });
}
/**
 * Implements a single radio button, as part of a radio group.
 *
 * @compositeParams
 */
function useRadio({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }) {
    return useMonitoring(function useRadio() {
        const index = info.index;
        const { name, indexToName, nameToIndex } = context.radioContext;
        const { tagInput, labelPosition } = labelParameters;
        const { pressParameters: { excludeSpace, onPressSync }, singleSelectionChildReturn, propsTabbable, propsChild: listNavigationSingleSelectionChildProps, ...listNavRet } = useCompleteListNavigationChildDeclarative({
            info: {
                focusSelf: useStableCallback((_e) => { return checkboxLikeRet.checkboxLikeReturn.focusSelf(); }),
                ...info
            },
            context,
            textContentParameters,
            hasCurrentFocusParameters,
            refElementParameters,
            singleSelectionChildParameters: { singleSelectionDisabled: !!disabled },
            multiSelectionChildParameters: { multiSelectionDisabled: true },
            multiSelectionChildDeclarativeParameters: { multiSelected: null, onMultiSelectedChange: null }
        });
        const { singleSelected: checked } = singleSelectionChildReturn;
        const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
        const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
        const { propsInput, propsLabel, ...checkboxLikeRet } = useCheckboxLike({
            checkboxLikeParameters: {
                checked: (checked ?? false),
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
        _(() => {
            nameToIndex.set(value, index);
            indexToName.set(index, value);
            return () => {
                nameToIndex.delete(value);
                indexToName.delete(index);
            };
        }, [value, index]);
        if (tagInput == "input") {
            propsInput.name = name;
            propsInput.checked = (checked ?? false);
            propsInput.type = "radio";
        }
        else {
            propsInput["aria-checked"] = (checked ?? false);
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
}

/**
 * Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useSliderThumb}
 */
function useSlider({ sliderParameters: { max, min }, managedChildrenParameters }) {
    const { context, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const baseIdRef = A$1(null);
    if (baseIdRef.current === null)
        baseIdRef.current = generateRandomId(Prefices.sliderThumb);
    return {
        context: T$1(() => ({
            ...context,
            sliderContext: {
                min,
                max,
                baseId: baseIdRef.current
            }
        }), [min, max]),
        managedChildrenReturn
    };
}
/**
 * @compositeParams
 */
function useSliderThumb({ sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 }, info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, ...void1 }) {
    return useMonitoring(function useSliderThumb() {
        const { managedChildReturn } = useManagedChild({ info, context });
        const min = (minOverride ?? minParent);
        const max = (maxOverride ?? maxParent);
        let newProps = (tag == "input" ?
            { min, max, value, type: "range" } :
            { "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": value });
        newProps = { ...newProps, "aria-label": label, "aria-valuetext": valueText ?? undefined, style: { "--range-value": `${value}`, "--range-value-text": `${valueText}` } };
        if (tag == "input") {
            newProps.onInput = e => {
                onValueChange?.(enhanceEvent(e, { value: e.currentTarget.valueAsNumber }));
            };
        }
        else {
            throw new Error("Unimplemented");
        }
        return {
            sliderThumbReturn: {
                min,
                max
            },
            managedChildReturn,
            propsSliderThumb: newProps
        };
    });
}

/**
 * @compositeParams
 */
function useTable({ gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, labelParameters, tableParameters: { tagTable, initiallySortedColumn }, gridNavigationCompleteParameters: { getSortValueAt }, processedIndexManglerParameters }) {
    return useMonitoring(function useTable() {
        // This is the function that, when called, sorts the body's children.
        // It's here to coordinate among multiple table sections (i.e. the head sorts the body, but they're siblings to each other, so we need to take care that)
        // TODO: This...should probably be useManagedChildren
        const [getRefreshRows, setRefreshRows] = usePassiveState(null, returnNull);
        const [_sortDirection, setSortDirection, getSortDirection] = useState("ascending");
        const [_sortColumn, setSortColumn, getSortColumn] = useState(initiallySortedColumn ?? undefined);
        const sortByColumn = useCallback((column) => {
            debugger;
            let nextSortDirection = getSortDirection();
            let nextSortIndex = getSortColumn();
            if (column == nextSortIndex) {
                setSortDirection(nextSortDirection = (nextSortDirection == "ascending" ? "descending" : "ascending"));
            }
            else {
                setSortColumn(nextSortIndex = column);
            }
            const sortBody = getRefreshRows();
            console.assert(!!sortBody);
            if (!sortBody) {
                /* eslint-disable no-debugger */
                debugger;
                console.error("An attempt was made to sort a table with a head but no body");
            }
            else {
                sortBody();
            }
            return { column: nextSortIndex, direction: nextSortDirection };
        }, []);
        const { propsInput: propsLabelTable, propsLabel: propsLabelLabel } = useLabelSynthetic({
            labelParameters: { ...labelParameters, onLabelClick: null },
            randomIdInputParameters: { prefix: Prefices.table },
            randomIdLabelParameters: { prefix: Prefices.tableLabel }
        });
        const { props, context, ...completeGridNavigationReturn } = useCompleteGridNavigation({
            gridNavigationParameters,
            linearNavigationParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementParameters,
            rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus },
            singleSelectionParameters,
            typeaheadNavigationParameters,
            gridNavigationCompleteParameters: { getSortColumn, getSortValueAt },
            processedIndexManglerParameters
        });
        const tableContext = useMemoObject({
            setRefreshRowsFunction: setRefreshRows,
            getCurrentSortColumn: getSortColumn,
            getCurrentSortDirection: getSortDirection,
            sortByColumn
        });
        return {
            propsTable: useMergedProps(props, propsLabelTable, { role: tagTable == "table" ? undefined : "grid", "aria-multiselectable": (multiSelectionParameters.multiSelectionMode != "disabled" ? "true" : undefined) }),
            propsLabel: propsLabelLabel,
            tableReturn: { sortByColumn },
            context: useMemoObject({
                tableContext,
                ...context
            }),
            ...completeGridNavigationReturn
        };
    });
}
const naturalSectionTypes = new Set(["thead", "tbody", "tfoot"]);
/**
 * @compositeParams
 */
function useTableHead({ tableHeadParameters: { tagHead: tagTableSection } }) {
    const props = {};
    if (!naturalSectionTypes.has(tagTableSection)) {
        props.role = "rowgroup";
    }
    return {
        props,
        tableHeadReturn: {},
    };
}
/**
 * @compositeParams
 */
function useTableBody({ context: processedChildrenContext, managedChildrenParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection } }) {
    return useMonitoring(function useTableBody() {
        const props = {};
        const { context: contextRows, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn, } = useCompleteGridNavigationRows({
            context: processedChildrenContext,
            managedChildrenParameters,
            paginatedChildrenParameters,
            rearrangeableChildrenParameters,
            staggeredChildrenParameters
        });
        if (!naturalSectionTypes.has(tagTableSection)) {
            props.role = "rowgroup";
        }
        y(() => {
            processedChildrenContext.tableContext.setRefreshRowsFunction(() => {
                return () => { rearrangeableChildrenReturn.refresh(); };
            });
        });
        return {
            context: useMemoObject({
                ...contextRows,
                tableProcessedChildren: useMemoObject({ location: "body" })
            }),
            rearrangeableChildrenReturn,
            paginatedChildrenReturn,
            staggeredChildrenReturn,
            propsTableSection: props
        };
    });
}
/**
 * @compositeParams
 */
function useTableRowOuter({ context, info: { ...info }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters, ...void1 }) {
    return useMonitoring(function useTableRowOuter() {
        const { propsStable, refElementReturn } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });
        const { props, ...processedChildReturn } = useProcessedChild({
            context,
            info: { getElement: refElementReturn.getElement, ...info },
            rearrangeableChildParameters,
        });
        const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect }, refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
        return {
            ...processedChildReturn,
            refElementReturn,
            props: useMergedProps(props, propsStable),
            hide: hideBecausePaginated || hideBecauseStaggered
        };
    });
}
/**
 * @compositeParams
 */
function useTableRow({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }) {
    return useMonitoring(function useTableRow() {
        const { context: cx2, managedChildrenReturn, props: { ...props }, ...restRet
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
            refElementParameters,
            // gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: cx1.tableContext.getCurrentSortColumn },
            typeaheadNavigationParameters: { noTypeahead: true, collator: null, typeaheadTimeout: Infinity, onNavigateTypeahead: null }
        });
        props.role = "row";
        // TODO: Unneeded?
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
}
/**
 * @compositeParams
 */
function useTableCell({ tableCellParameters: { tagTableCell }, info, context, gridNavigationCellParameters, textContentParameters, ...p }) {
    return useMonitoring(function useTableCell() {
        const { props, ...ret } = useCompleteGridNavigationCell({
            info,
            context,
            gridNavigationCellParameters,
            textContentParameters,
        });
        return {
            propsFocus: props,
            propsCell: { role: (tagTableCell != "th" && tagTableCell != "td") ? "gridcell" : undefined },
            ...ret,
            tableCellReturn: {
                sortByThisColumn: useStableCallback(() => {
                    return context.tableContext.sortByColumn(info.index);
                }, [])
            }
        };
    });
}

/**
 * Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.
 *
 * @remarks Tabs consist of both a list of tabs and a list of tab panels.
 * A Tab and a TabPanel that share the same index are linked together; when that tab is selected that panel is shown.
 *
 * @compositeParams
 *
 * @hasChild {@link useTab}
 * @hasChild {@link useTabPanel}
 */
function useTabs({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange: ssi, singleSelectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }) {
    return useMonitoring(function useTabs() {
        const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, 0);
        if (localStorageIndex != null)
            initiallySingleSelectedIndex = localStorageIndex;
        const baseId = generateRandomId("aria-tabs-");
        const getTabId = useCallback((index) => { return baseId + "-tab-" + index; }, []);
        const getPanelId = useCallback((index) => { return baseId + "-panel-" + index; }, []);
        // Used for the panels, not the tabs in the tablist.
        // Those are in useTabList itself.
        const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren({
            managedChildrenParameters: {
                onChildrenMountChange: useStableCallback((_m, _u) => { reevaluateClosestFit(undefined); })
            }
        });
        const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({
            getChildren: panelChildrenReturn.getChildren,
            closestFit: false,
            onClosestFit: null,
            initialIndex: null,
            getAt: useStableCallback((i) => { return i.getVisible() ?? false; /*getPanels().getAt(i)?.getVisible() ?? false)*/ }, []),
            setAt: useStableCallback((i, b, n, p) => { return i.setVisibleIndex(n, p); /*(getPanels().getAt(i)?.setVisible(b));*/ }, []),
            isValid: returnTrue,
            onIndexChange: null,
            indexDemangler: identity,
        });
        _(() => {
            changeVisiblePanel(initiallySingleSelectedIndex ?? null, undefined);
        }, []);
        const { propsInput, propsLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId }, } = useLabelSynthetic({
            labelParameters: { ...labelParameters, onLabelClick: useStableCallback(() => listNavRet1.rovingTabIndexReturn.focusSelf()) },
            randomIdInputParameters: { prefix: Prefices.tablist },
            randomIdLabelParameters: { prefix: Prefices.tablistLabel },
        });
        const { props: listNavigationSingleSelectionProps, context, ...listNavRet1 } = useCompleteListNavigation({
            linearNavigationParameters: { arrowKeyDirection: orientation, ...linearNavigationParameters },
            rovingTabIndexParameters: { ...rovingTabIndexParameters, focusSelfParent: focus$1 },
            singleSelectionParameters: {
                onSingleSelectedIndexChange: useStableCallback((e) => {
                    ssi?.(e);
                    changeVisiblePanel(e[EventDetail].selectedIndex, e);
                    setLocalStorageIndex(e[EventDetail].selectedIndex);
                    changeSingleSelectedIndex(e[EventDetail].selectedIndex, e);
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
                ...context,
                tabsContext: useMemoObject({ getTabId, getPanelId, getVisibleIndex, setSelectedIndex: changeSingleSelectedIndex })
            }),
            propsContainer: useMergedProps(listNavigationSingleSelectionProps, propsInput, {
                role: (role ?? "tablist"),
                "aria-orientation": orientation ?? "horizontal",
            }),
            propsLabel,
            ...listNavRet1
        };
    });
}
/**
 * Implements a single tab of a Tabs component.
 *
 * The index that this child uses controls which TabPanel it shows when selected.
 *
 * @compositeParams
 */
function useTab({ info: { focusSelf: focusSelfParent, index, untabbable, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context, hasCurrentFocusParameters, refElementParameters, singleSelectionChildParameters, ...void3 }) {
    return useMonitoring(function useTab() {
        const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, pressParameters: { onPressSync, excludeSpace, ...void1 }, refElementReturn, ...listNavRet2 } = useCompleteListNavigationChild({
            context,
            info: { index, focusSelf: focusSelfParent, untabbable, ...info },
            textContentParameters,
            hasCurrentFocusParameters,
            refElementParameters,
            singleSelectionChildParameters,
            multiSelectionChildParameters: { initiallyMultiSelected: false, multiSelectionDisabled: true, onMultiSelectChange: null },
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
}
/**
 * Implements the TabPanel a Tab controls.
 *
 * @remarks A hidden tab panel is made `inert` so that it cannot be interacted with, so you can just set `opacity: 0` on your hidden panels if that's how you want to style them.
 * They'll still be properly removed from the tab order (i.e. you don't **also** need `display: none`).
 *
 * @compositeParams
 */
function useTabPanel({ info, context }) {
    return useMonitoring(function useTablePanel() {
        const { index } = info;
        const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
        const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
        const [isVisible, setIsVisible, _getIsVisible] = useState(null);
        useManagedChild({
            context,
            info: {
                getVisible: useStableCallback(() => { return getLastKnownVisibleIndex() == index; }),
                setVisibleIndex: useStableCallback((newIndex, prevIndex) => {
                    // Similar logic is in singleSelection, but we need to duplicate it here
                    let changeIndex = (newIndex == index ? prevIndex : newIndex);
                    if (changeIndex != null)
                        setLastKnownVisibleIndex(changeIndex);
                    if (newIndex == index) {
                        setIsVisible(true);
                    }
                    else {
                        setIsVisible(false);
                    }
                }),
                ...info
            }
        });
        const panelId = getPanelId(info.index);
        const tabId = getTabId(info.index);
        //const isVisible = (lastKnownVisibleIndex === index);
        return {
            props: useMergedProps({
                role: "tabpanel",
                "aria-labelledby": tabId,
                id: panelId,
                inert: !isVisible
            }),
            tabPanelReturn: {
                visibleOffset: lastKnownVisibleIndex == null ? null : (index - lastKnownVisibleIndex),
                visible: isVisible,
                getVisible: useStableCallback(() => { return getLastKnownVisibleIndex() === index; })
            }
        };
    });
}

/**
 * Allows any descendent children to push a visible (and/or audible) message to the user's attention.
 *
 * @compositeParams
 *
 * @hasChild {@link useToast}
 */
function useToasts({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }) {
    return useMonitoring(function useToasts() {
        // Normally, this does just look like [0, 1, 2, 3], etc
        // so it could be just an index to the current toast,
        // but if we dismiss toasts out of order, it's [0, 2, 3] or something.
        // So just keep track of it all in a big ol', there's only one of these on a page anyway,
        // and if you're pusing 10000 toasts at once an Array<number> isn't going to be your bottleneck.
        const currentIndexQueue = A$1([]);
        const getMaxVisibleCount = useStableGetter(visibleCount);
        const nextIndexToStartAt = A$1(0);
        const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
        const { context, managedChildrenReturn, ..._childInfo } = useManagedChildren({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmu } });
        const { getChildren: getToastQueue } = managedChildrenReturn;
        const toastQueue = getToastQueue();
        // When a toast is shown or hidden, always make sure that we're showing all the toasts that we should be.
        const showHighestPriorityToast = useCallback(() => {
            const max = Math.min(getMaxVisibleCount(), currentIndexQueue.current.length);
            let start = nextIndexToStartAt.current;
            for (let i = start; i < max; ++i) {
                const highestPriorityToast = toastQueue.getAt(currentIndexQueue.current[i]);
                console.assert(!!highestPriorityToast);
                highestPriorityToast?.show();
            }
            nextIndexToStartAt.current = max;
        }, []);
        // Any time a new toast mounts, update our bottommostToastIndex to point to it if necessary
        // ("necessary" just meaning if it's the first toast ever or all prior toasts have been dismissed)
        const onAnyToastMounted = useCallback((toastIndex) => {
            currentIndexQueue.current.push(toastIndex);
            toastQueue.getAt(toastIndex)?.setNumberAheadOfMe(currentIndexQueue.current.length - 1);
            showHighestPriorityToast();
        }, []);
        // Any time a toast is dismissed, update our bottommostToastIndex to point to the next toast in the queue, if one exists.
        const onAnyToastDismissed = useCallback((_index) => {
            // When we dismiss a toast, remove it from the "to-display" queue by actually splicing it out of the array.
            // Then notify each toast of its change in position within that queue to keep the two in sync.
            const removalIndex = currentIndexQueue.current.findIndex(i => i == _index);
            // For all toasts that have already been dismissed, shift them even further back by one to "make space" 
            // (they're removed from the queue but this is the negative index they would have if we kept negatives in the queue)
            // for the newly-dismissed toast.
            toastQueue.forEach(c => {
                c.setNumberAheadOfMe(prev => {
                    if (prev < 0)
                        return prev - 1;
                    else
                        return prev;
                });
            });
            // Let this toast know that it's now the most recently dismissed toast
            toastQueue.getAt(_index)?.setNumberAheadOfMe(-1);
            // Notify all toasts waiting behind this one in the queue that they've moved up one slot
            toastQueue.forEach(c => {
                c.setNumberAheadOfMe(prev => {
                    if (prev > removalIndex)
                        return prev - 1;
                    else
                        return prev;
                });
            });
            // Actually modify the queue itself
            currentIndexQueue.current.splice(removalIndex, 1);
            // And after all that, make sure that we're showing any toasts that have been waiting in the queue
            showHighestPriorityToast();
        }, []);
        const [_mouseOver2, setMouseOver, _getMouseOver] = useState(false);
        useGlobalHandler(getDocument(), "pointermove", e => {
            const mouseOver = (e.target != null && e.target instanceof Node && (getElement()?.contains(e.target) || getElement() == e.target));
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
}
/**
 * @compositeParams
 */
function useToast({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }) {
    return useMonitoring(function useToast() {
        const { getMaxVisibleCount, onAnyToastDismissed, onAnyToastMounted } = context.toastContext;
        const [numberOfToastsAheadOfUs, setNumberOfToastsAheadOfUs] = useState(Infinity);
        const getIndex = useStableGetter(index);
        const [dismissed2, setDismissed2, getDismissed2] = useState(false);
        const [showing2, setShowing2, getShowing2] = useState(false);
        const [triggerIndex, setTriggerIndex] = useState(1);
        const notify = useNotify();
        const dismiss = useCallback(() => {
            if (!getDismissed2())
                onAnyToastDismissed(getIndex());
            setDismissed2(true);
            setShowing2(false);
        }, []);
        const show = useStableCallback(() => {
            notify(politeness ?? "polite", u("p", { children: children }));
            setShowing2(true);
        });
        y(() => {
            if (!getDismissed2() && !getShowing2()) {
                if (numberOfToastsAheadOfUs >= 0 && numberOfToastsAheadOfUs < getMaxVisibleCount()) {
                    show();
                }
            }
        }, [numberOfToastsAheadOfUs]);
        const focus2 = useCallback(() => {
            const element = getElement();
            if (element) {
                const firstFocusable = findFirstFocusable(element);
                focus$1(firstFocusable);
            }
        }, []);
        const { managedChildReturn } = useManagedChild({ info: { index, focus: focus2, setNumberAheadOfMe: setNumberOfToastsAheadOfUs, show, ...info }, context });
        const resetDismissTimer = useCallback(() => {
            setTriggerIndex(i => ++i);
        }, []);
        y(() => {
            onAnyToastMounted(index);
        }, []);
        const dismissTimeoutKey = (timeout == null || numberOfToastsAheadOfUs != 0) ? null : isFinite(timeout) ? timeout : timeout > 0 ? null : 0;
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
}

// Intentionally (?) unused
typeof window == "undefined" ? null : matchMedia("(any-hover: hover)");
// Track if the current input has hover capabilities
// (This is responsive to whatever the "primary" device is)
let mediaQuery = typeof window == "undefined" ? null : matchMedia("(hover: hover)");
let pageCurrentlyUsingHover = mediaQuery?.matches || false;
let allCallbacks = new Set();
if (mediaQuery)
    mediaQuery.onchange = ev => { pageCurrentlyUsingHover = ev.matches; allCallbacks.forEach(fn => fn(ev.matches)); };
//setTimeout(() => alert(`Hover: ${pageCurrentlyUsingHover.toString()}`), 1000);
/*
//let delayedAlert2 = debounce(delayedAlert3, 4000);
let messages = new Set<string>();
const delayedAlert2 = debounce(function delayedAlert3() {
    alert([...messages].join("\n"));
    messages.clear();
}, 2500);

function delayedAlert(message: string) {
    messages.add(message);
    delayedAlert2();
}*/
/**
 * Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.
 *
 * @remarks Tooltips are remarkably under-specified, so some of this is speculative.
 *
 * @compositeParams
 */
function useTooltip({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay, usesLongPress }, activeElementParameters, escapeDismissParameters, pressReturn: { longPress, ...void2 }, ...void1 }) {
    return useMonitoring(function useTooltip() {
        useGlobalHandler(getWindow(), "mouseout", useCallback((e) => {
            if (e.relatedTarget == null)
                onHoverChanged(false, "popup");
        }, []));
        const [usesHover, setUsesHover] = useState(pageCurrentlyUsingHover);
        y(() => {
            if (mediaQuery) {
                let handler = (ev) => { setUsesHover(ev.matches); };
                mediaQuery.addEventListener("change", handler, { passive: true });
                return () => mediaQuery.removeEventListener("change", handler, {});
            }
        });
        /**
         * Whether the hover/focus-popup/trigger state we have results in us showing this tooltip.
         *
         * This is used purely to attach global event handlers that should only be there when the tooltip is open (e.g. `useDismiss`)
         */
        const [openLocal, setOpenLocal] = useState(false);
        const [getState, setState] = usePassiveState(useStableCallback((nextState, _prevState) => {
            //delayedAlert(`${prevState ?? "null"} to ${nextState}`);
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
        let { propsReferencer: propsTrigger, propsSource: propsPopup } = useRandomId({ randomIdParameters: { prefix: Prefices.tooltip, otherReferencerProp: (tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby") } });
        const { refElementReturn: { getElement: getTriggerElement }, propsStable: triggerRefProps } = useRefElement({ refElementParameters: {} });
        const { refElementReturn: { getElement: getPopupElement }, propsStable: popupRefProps } = useRefElement({ refElementParameters: {} });
        let inputState = A$1(null);
        let hoverTimeoutHandle = A$1(null);
        const onHoverChanged = useStableCallback((hovering, which) => {
            if (hoverTimeoutHandle.current)
                clearTimeout(hoverTimeoutHandle.current);
            //delayedAlert(`onHoverChanged(${hovering.toString()}, ${which}) with inputState == ${inputState.current}`)
            // Ignore emulated cursor hover events when we're not even using a pointer
            // if ()
            //    return;
            if (hovering) {
                inputState.current = "hover";
                if (usesLongPress && !usesHover) ;
                else {
                    hoverTimeoutHandle.current = setTimeout(() => {
                        setState(`hovering-${which}`);
                        hoverTimeoutHandle.current = null;
                    }, hoverDelay || 0);
                }
            }
            else {
                setState(null);
                inputState.current = null;
            }
        });
        const onCurrentFocusedInnerChanged = useCallback((focused, which) => {
            // delayedAlert(`onFocusedChanged(${focused.toString()}, ${which}) with inputState == ${inputState.current}`)
            if (inputState.current != "hover") {
                if (focused) {
                    inputState.current = 'focus';
                    setState(`focused-${which}`);
                }
                else {
                    setState(null);
                    inputState.current = null;
                }
            }
            else {
                setState(null);
                inputState.current = null;
            }
        }, []);
        const onTriggerCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "trigger"), [onCurrentFocusedInnerChanged]);
        const onPopupCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "popup"), [onCurrentFocusedInnerChanged]);
        const { hasCurrentFocusReturn: triggerFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onTriggerCurrentFocusedInnerChanged }, refElementReturn: { getElement: getTriggerElement } });
        const { hasCurrentFocusReturn: popupFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: onPopupCurrentFocusedInnerChanged }, refElementReturn: { getElement: getPopupElement } });
        const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
            backdropDismissParameters: {
                dismissBackdropActive: true, // we handle this ourselves, but for mobile devices with a sorta virtualish cursor this helps. 
                onDismissBackdrop: null
            },
            lostFocusDismissParameters: {
                dismissLostFocusActive: false, // and it interferes with our own focus logic (or, our onClose there does)
                onDismissLostFocus: null,
            },
            dismissParameters: {
                dismissActive: openLocal,
                onDismiss: useStableCallback((_e, _reason) => {
                    setState(null);
                }),
            },
            activeElementParameters,
            escapeDismissParameters: {
                dismissEscapeActive: true,
                onDismissEscape: null,
                ...escapeDismissParameters
            },
        });
        const otherPopupProps = {
            onPointerEnter: useCallback(() => { onHoverChanged(true, "popup"); }, []),
            //onPointerLeave: useCallback(() => { onHoverChanged(false, "popup") }, [])
        };
        const otherTriggerProps = {
            onPointerEnter: useCallback(() => { onHoverChanged(true, "trigger"); }, []),
            onPointerUp: useCallback(() => { onHoverChanged(false, "trigger"); }, []),
            onClick: useStableCallback((e) => {
                // When we click/tap the trigger,
                // if we can't hover it
                if (!usesHover) {
                    // We can't hover the trigger we just tapped
                    if (usesLongPress) ;
                    else {
                        // Presumably static text content or something else -- focus it so the tooltip will show
                        onCurrentFocusedInnerChanged(true, "trigger");
                        focus$1(e.currentTarget);
                    }
                }
                else {
                    // We're using a mouse or other hovering pointer (so not a stylus/touchscreen)
                    onHoverChanged(true, "trigger");
                }
                /*onHoverChanged(true, "trigger");
                if (e.currentTarget && "focus" in e.currentTarget)
                focus(e.currentTarget as HTMLElement); */
            }),
            //onPointerLeave: useCallback(() => { onHoverChanged(false, "trigger") }, [])
        };
        useGlobalHandler(getDocument(), "pointermove", !openLocal ? null : (e => {
            const popupElement = getPopupElement();
            const triggerElement = getTriggerElement();
            const mouseElement = e.target;
            let overPopup = (popupElement?.contains(mouseElement));
            let overTrigger = (triggerElement?.contains(mouseElement));
            if (!overPopup && !overTrigger && inputState.current == 'hover') {
                onHoverChanged(false, "popup");
            }
        }), { capture: true, passive: true });
        y(() => {
            // When a long press starts, if we use those and we're on a touch device,
            // then show the tooltip by focusing the trigger.
            if (usesLongPress && !usesHover) {
                if (longPress) {
                    inputState.current = null;
                    onCurrentFocusedInnerChanged(true, "trigger");
                    focus$1(getTriggerElement());
                }
            }
        }, [longPress, usesHover, usesLongPress]);
        return {
            refElementPopupReturn,
            refElementSourceReturn,
            propsPopup: useMergedProps(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
            propsTrigger: useMergedProps(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback(e => focus$1(e.currentTarget)) }, otherTriggerProps, propsStableSource),
            tooltipReturn: {
                getState,
                //stateIsFocus,
                //stateIsMouse
            }
        };
    });
}

/**
 * Almost all components are built in the exact same way from their implementing hook -- this just sets all of that up.
 *
 * @param imperativeHandle The `imperativeHandle` prop all component props have that hook a `ref` up to the hook's return values
 * @param render The `render` prop all component props have that turns a hook's return values into JSX to render
 * @param Context Optional. Some hooks return a `context` object, and if so, it will be rendered with the `Context` object provided.
 * @param info The return type of the hook.
 * @returns
 */
function useComponent(imperativeHandle, render, Context, info) {
    F$1(imperativeHandle, () => info);
    if (Context) {
        return u(Context.Provider, { value: info.context, children: render(info) });
    }
    else {
        return render(info);
    }
}
function useComponentC(imperativeHandle, render, ContextChildren, ContextProcessing, info) {
    F$1(imperativeHandle, () => info);
    let ch = render(info);
    if (ContextChildren) {
        ch = u(ContextChildren.Provider, { value: info.contextChildren, children: ch });
    }
    if (ContextProcessing) {
        ch = u(ContextProcessing.Provider, { value: info.contextProcessing, children: ch });
    }
    return ch;
}
const ContextDefaults = {
    collator: J$1(null),
    pageNavigationSize: J$1(0.1),
    typeaheadTimeout: J$1(1000),
    focusSelf: J$1((e) => e.focus?.()),
    noTypeahead: J$1(false),
    getIndex: J$1(v => v.props.index),
    disableArrowKeys: J$1(false),
    disableHomeEndKeys: J$1(false),
    getWindow: J$1(() => globalThis.window),
    getDocument: J$1(() => globalThis.document),
    focusOpener: J$1((e) => focus$1(e)),
    getText: J$1((e) => (e?.textContent ?? "")),
    singleSelectionMode: J$1("activation"),
    multiSelectionMode: J$1("activation"),
};
function useDefault(context, userValue) {
    const defaultValue = x(ContextDefaults[context]);
    return userValue ?? defaultValue;
}
const ParentDepthContext = J$1(0);
function useDefaultRenderPortal({ portalId, children }) {
    const portalRef = A$1(null);
    const document = getDocument();
    portalRef.current ??= document?.getElementById(portalId) ?? undefined;
    if (portalRef.current)
        return Y(children, portalRef.current);
    else
        return children;
}

const AccordionSectionContext = J$1(null);
const Accordion = /* @__PURE__ */ N(function Accordion({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...void1 }) {
    return (useComponent(imperativeHandle, render, AccordionSectionContext, useAccordion({
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
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange },
    })));
});
const AccordionSection = /* @__PURE__ */ N((function AccordionSection({ open, index, tagButton, disabled, bodyRole, untabbable, getText, imperativeHandle, onPressSync, focusSelf, render, info, onElementChange, onMount, onUnmount, onTextContentChange, ...void1 }) {
    return useComponent(imperativeHandle, render, null, useAccordionSection({
        buttonParameters: { disabled: disabled ?? false, tagButton, onPressSync: onPressSync },
        pressParameters: { focusSelf: useDefault("focusSelf", focusSelf) },
        accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
        info: { index, untabbable: untabbable || false, ...info },
        refElementHeaderButtonParameters: { onElementChange, onMount, onUnmount },
        refElementBodyParameters: {},
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        context: useContextWithWarning(AccordionSectionContext, "accordion section"),
    }));
}));

const Button = /* @__PURE__ */ N((function Button({ tagButton, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeSpace, onPressingChange, onPressSync, focusSelf, role, imperativeHandle, ...void1 }) {
    return useComponent(imperativeHandle, render, null, useButton({
        buttonParameters: { onPressSync, role: role, tagButton, pressed, disabled },
        pressParameters: { longPressThreshold, allowRepeatPresses, excludeSpace, onPressingChange, focusSelf: useDefault("focusSelf", focusSelf) },
        refElementParameters: { onElementChange, onMount, onUnmount },
    }));
}));

const UseCheckboxGroupChildContext = J$1(null);
const CheckboxGroup = /* @__PURE__ */ N((function CheckboxGroup({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, getSortValueAt, compare, getIndex, ...void1 }) {
    getSortValueAt ??= identity;
    useEnsureStability("CheckboxGroup", getSortValueAt);
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
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "activation", onSelectionChange },
        processedIndexManglerParameters: {
            compare,
            getIndex: useDefault("getIndex", getIndex),
            getSortValueAt
        }
    }));
}));
const CheckboxGroupParent = /* @__PURE__ */ N((function CheckboxGroupParent({ render, index, focusSelf, untabbable, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, 
//info,
..._rest }) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    return (useComponent(imperativeHandle, render, null, useCheckboxGroupParent({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf,
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
    })));
}));
const CheckboxGroupChild = /* @__PURE__ */ N((function CheckboxGroupChild({ index, render, checked, onChangeFromParent, untabbable, getText, focusSelf, 
//info,
imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, multiSelectionDisabled, onMultiSelectChange, onTextContentChange, ...void1 }) {
    return useComponent(imperativeHandle, render, null, useCheckboxGroupChild({
        checkboxGroupChildParameters: {
            checked: checked,
            onChangeFromParent
        },
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange,
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
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, onMultiSelectChange },
    }));
}));

function defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }) {
    return function (info) {
        const inputProps = (makePropsInput(info));
        const { children, ...labelProps } = (makePropsLabel(info));
        if (labelPosition == "wrapping") {
            const input = g$2(tagInput, inputProps);
            const label = g$2(tagLabel, { ...labelProps, children: u(k$1, { children: [input, children] }) });
            return (u(k$1, { children: label }));
        }
        else if (labelPosition == "separate") {
            const input = g$2(tagInput, inputProps);
            const label = g$2(tagLabel, { children, ...labelProps });
            return (u(k$1, { children: [input, label] }));
        }
        else {
            console.assert(!!inputProps["aria-label"], `defaultRenderCheckboxLike: inputProps missing aria-label, despite the labelPosition`);
            return g$2(tagInput, inputProps);
        }
    };
}
const Checkbox = /* @__PURE__ */ N((function Checkbox({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, longPressThreshold, excludeSpace, imperativeHandle, render, onCheckedChange, ...void1 }) {
    return useComponent(imperativeHandle, render, null, useCheckbox({
        checkboxLikeParameters: { checked, disabled: disabled ?? false },
        labelParameters: { ariaLabel: ariaLabel, labelPosition, tagInput, tagLabel },
        pressParameters: { excludeSpace, longPressThreshold },
        checkboxParameters: { onCheckedChange }
    }));
}));

const Dialog = /* @__PURE__ */ N((function Dialog({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, focusOpener, getDocument, imperativeHandle, parentDepth, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, focusPopup, ariaLabel, onElementChange, onMount, onUnmount, render }) {
    const defaultParentDepth = x(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    return (u(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useDialog({
            dismissParameters: {
                onDismiss,
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
                getDocument: useDefault("getDocument", getDocument),
                onActiveElementChange,
                onLastActiveElementChange,
                onWindowFocusedChange
            },
            focusTrapParameters: {
                focusOpener: useDefault("focusOpener", focusOpener),
                focusPopup
            },
            labelParameters: { ariaLabel }
        })) }));
}));

const Drawer = /* @__PURE__ */ N((function Drawer({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, ...void1 }) {
    const defaultParentDepth = x(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    return (u(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useDrawer({
            dismissParameters: {
                onDismiss,
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
                getDocument: useDefault("getDocument", getDocument),
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
        })) }));
}));

const GridlistRowContext = J$1(null);
const GridlistCellContext = J$1(null);
const GridlistProcessedChildrenContext = J$1(null);
function Gridlist({ render, ariaLabel, collator, disableHomeEndKeys, focusSelfParent, imperativeHandle, initiallyTabbableColumn, multiSelectionAriaPropName, multiSelectionMode, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onLabelClick, onMount, onNavigateLinear, onNavigateTypeahead, onSelectionChange, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, singleSelectionAriaPropName, singleSelectionMode, typeaheadTimeout, untabbable, children, staggered, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onSingleSelectedIndexChange, singleSelectedIndex, getSortColumn, getSortValueAt, ...void1 }) {
    getSortValueAt ??= identity;
    useEnsureStability("Gridlist", getSortValueAt);
    return useComponentC(imperativeHandle, render, GridlistRowContext, GridlistProcessedChildrenContext, useGridlist({
        gridNavigationParameters: {
            initiallyTabbableColumn: initiallyTabbableColumn || 0,
            onTabbableColumnChange
        },
        labelParameters: {
            ariaLabel,
            onLabelClick: onLabelClick || null
        },
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap",
            onNavigateLinear,
            pageNavigationSize
        },
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenCountChange,
            onChildrenMountChange
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName,
            multiSelectionMode: useDefault("multiSelectionMode", multiSelectionMode),
            onSelectionChange,
        },
        paginatedChildrenParameters: {
            paginationMax,
            paginationMin
        },
        randomIdInputParameters: {
            prefix: Prefices.gridlist
        },
        randomIdLabelParameters: {
            prefix: Prefices.gridlistLabel
        },
        rearrangeableChildrenParameters: {
            children,
        },
        processedIndexManglerParameters: {
            compare: null,
            getIndex: useDefault("getIndex", null)
        },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        },
        rovingTabIndexParameters: {
            focusSelfParent: useDefault("focusSelf", focusSelfParent),
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        singleSelectionDeclarativeParameters: {
            onSingleSelectedIndexChange,
            singleSelectedIndex
        },
        singleSelectionParameters: {
            singleSelectionAriaPropName,
            singleSelectionMode: useDefault("singleSelectionMode", singleSelectionMode)
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        typeaheadNavigationParameters: {
            collator,
            noTypeahead: noTypeahead || false,
            onNavigateTypeahead,
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        gridNavigationCompleteParameters: {
            getSortColumn,
            getSortValueAt,
        }
    }));
}
function GridlistRow(props) {
    const { index, render, collator, getText, initiallyTabbedIndex, multiSelected, multiSelectionDisabled, navigatePastEnd, navigatePastStart, noTypeahead, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectedChange, onNavigateTypeahead, onTabbableIndexChange, onTextContentChange, singleSelectionDisabled, typeaheadTimeout, untabbable, imperativeHandle, onElementChange, onMount, onUnmount } = props;
    return (u(GridlistRowOuter, { index: index, imperativeHandle: imperativeHandle, onElementChange: onElementChange, onMount: onMount, onUnmount: onUnmount, render: info => {
            if (info.hide) {
                return render(info);
            }
            else {
                return (u(GridlistRowInner, { index: index, render: render, collator: collator, getText: getText, imperativeHandle: imperativeHandle, initiallyTabbedIndex: initiallyTabbedIndex, multiSelected: multiSelected, multiSelectionDisabled: multiSelectionDisabled, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, noTypeahead: noTypeahead, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, onElementChange: onElementChange, onMount: onMount, onMultiSelectedChange: onMultiSelectedChange, onNavigateTypeahead: onNavigateTypeahead, onTabbableIndexChange: onTabbableIndexChange, onTextContentChange: onTextContentChange, onUnmount: onUnmount, singleSelectionDisabled: singleSelectionDisabled, typeaheadTimeout: typeaheadTimeout, untabbable: untabbable }));
            }
        } }));
}
function GridlistRowOuter({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, cssProperty, duration }) {
    return useComponent(imperativeHandle, render, null, useGridlistRowOuter({
        context: x(GridlistProcessedChildrenContext),
        info: { index },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        },
        rearrangeableChildParameters: {
            cssProperty,
            duration
        }
    }));
}
function GridlistRowInner({ index, render, collator, getText, imperativeHandle, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, noTypeahead, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onNavigateTypeahead, onTabbableIndexChange, onTextContentChange, onUnmount, singleSelectionDisabled, typeaheadTimeout, untabbable, multiSelected, onMultiSelectedChange, }) {
    untabbable ||= false;
    return useComponent(imperativeHandle, render, GridlistCellContext, useGridlistRow({
        context: x(GridlistRowContext),
        info: { index, untabbable },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap"
        },
        multiSelectionChildDeclarativeParameters: {
            multiSelected: multiSelected ?? null,
            onMultiSelectedChange
        },
        multiSelectionChildParameters: {
            multiSelectionDisabled: multiSelectionDisabled || false
        },
        rovingTabIndexParameters: {
            initiallyTabbedIndex,
            onTabbableIndexChange,
            untabbable: untabbable
        },
        singleSelectionChildParameters: {
            singleSelectionDisabled: singleSelectionDisabled || false
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        typeaheadNavigationParameters: {
            collator,
            noTypeahead: noTypeahead || false,
            onNavigateTypeahead,
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    }));
}
function GridlistCell({ index, render, getText, imperativeHandle, onTextContentChange, untabbable, allowRepeatPresses, colSpan, excludeEnter, excludePointer, excludeSpace, focusSelf, longPressThreshold, onPressSync, onPressingChange }) {
    untabbable ||= false;
    return useComponent(imperativeHandle, render, null, useGridlistCell({
        context: x(GridlistCellContext),
        info: { index, untabbable, focusSelf: useDefault("focusSelf", focusSelf) },
        gridNavigationCellParameters: { colSpan },
        pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressingChange, onPressSync },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange }
    }));
}

const HeadingLevelContext = J$1(0);
/**
 * Utility component that creates a heading `h1`, `h2`, `h3`, etc.
 *
 * Which one is chosen depends on a parent `Heading`, with the root-most `Heading`
 * starting at 1, or the value specified by `HeadingReset`.
 *
 * Specify the actual contents of the heading with the `heading` prop.
 *
 */
const Heading = /* @__PURE__ */ N(A(function Heading({ children, heading, tag, ref: ref2, ...props }, ref) {
    const headingLevelBeforeUs = x(HeadingLevelContext);
    const newHeadingLevel = headingLevelBeforeUs + 1;
    if (tag == null) {
        if (newHeadingLevel <= 6) {
            tag = `h${newHeadingLevel}`;
        }
        else {
            tag = 'div';
        }
    }
    return (u(k$1, { children: u(HeadingReset, { newLevel: headingLevelBeforeUs + 1, children: [g$2(tag, useMergedProps(props, { ref }, { ref: ref2 }), heading), children] }) }));
}));
/**
 * Set the value that the next `Heading` will use as its base.
 *
 * Minimum of 1.
 */
const HeadingReset = /* @__PURE__ */ N(function HeadingReset({ newLevel, children }) {
    return (u(HeadingLevelContext.Provider, { value: newLevel - 1, children: children }));
});

const ListboxContext = J$1(null);
J$1(null);
const ListboxChildContext = J$1(null);
const ListboxGroupContext = J$1(null);
const GroupedListbox = /* @__PURE__ */ N((function GroupedListbox({ ariaLabel, orientation, render, onElementChange, onMount, onUnmount, }) {
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
        singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange: null, singleSelectedIndex: null },
        processedIndexManglerParameters: {
            getSortValueAt: identity,
            compare: null,
            getIndex: useDefault("getIndex", null)
        }
    });
    return (u(ListboxGroupContext.Provider, { value: info, children: render(info) }));
}));
const Listbox = /* @__PURE__ */ N((function Listbox({ ariaLabel, collator, disableHomeEndKeys, singleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, pageNavigationSize, untabbable, typeaheadTimeout, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, singleSelectionAriaPropName, singleSelectionMode, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, paginationMax, paginationMin, getSortValueAt, compare, getIndex, ...void1 }) {
    const listboxGroupInfo = x(ListboxGroupContext);
    getSortValueAt ??= identity;
    useEnsureStability("Listbox", getSortValueAt);
    return useComponent(imperativeHandle, render, ListboxContext, useListbox({
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
        multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "disabled", onSelectionChange },
        processedIndexManglerParameters: { getSortValueAt, compare, getIndex: useDefault("getIndex", getIndex) }
    }));
}));
const ListboxChildren = /* @__PURE__ */ N((function ListboxChildren({ children, render, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, }) {
    const r = useCompleteListNavigationChildren({
        context: x(ListboxContext),
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
            children,
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        }
    });
    return useComponent(imperativeHandle, render, ListboxChildContext, r);
}));
const ListboxItem = /* @__PURE__ */ N((function ListboxItemOuter({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, onTextContentChange, cssProperty, duration, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const { propsStable, refElementReturn } = useRefElement({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
            onMount,
            onUnmount
        }
    });
    const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild({
        context: useContextWithWarning(ListboxChildContext, "ListboxChildren"),
        info: { index, getElement: refElementReturn.getElement },
        rearrangeableChildParameters: { cssProperty, duration }
    });
    const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i2;
    const props2 = useMergedProps(props, propsStable);
    // The odd ordering here is to avoid uncommon RoH violation
    const processedListboxItemReturn = {
        hidden: true,
        ...i2,
        props: props2,
        refElementReturn,
        managedChildReturn: { getChildren }
    };
    F$1(imperativeHandle, () => processedListboxItemReturn);
    let retIfHidden = render(processedListboxItemReturn);
    if (hideBecausePaginated || hideBecauseStaggered) {
        return retIfHidden;
    }
    else {
        return (u(ListboxItemInner, { index: index, render: render, allowRepeatPresses: allowRepeatPresses, excludeEnter: excludeEnter, excludePointer: excludePointer, focusSelf: focusSelf, getText: getText, imperativeHandle: imperativeHandle, longPressThreshold: longPressThreshold, multiSelected: multiSelected, multiSelectionDisabled: multiSelectionDisabled, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, onMount: onMount, onMultiSelectedChange: onMultiSelectedChange, onPressingChange: onPressingChange, onUnmount: onUnmount, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, hideBecausePaginated: hideBecausePaginated, hideBecauseStaggered: hideBecauseStaggered, parentIsPaginated: parentIsPaginated, parentIsStaggered: parentIsStaggered, childUseEffect: childUseEffect, onTextContentChange: onTextContentChange, props: props2, ...void1 }));
    }
}));
// Separated into its own component because hooks can't be if'd.
const ListboxItemInner = /* @__PURE__ */ N((function ListboxItemInner({ getText, untabbable, index, render, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, imperativeHandle, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, props: props1, childUseEffect, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ListboxContext, "listbox");
    console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
    const focusSelfDefault = useCallback((e) => { focus$1(e); }, []);
    y(childUseEffect, [childUseEffect]);
    const { hasCurrentFocusReturn, managedChildReturn, multiSelectionChildReturn, pressReturn, props: props2, refElementReturn, rovingTabIndexChildReturn, singleSelectionChildReturn, textContentReturn } = useListboxItem({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? focusSelfDefault,
        },
        context,
        listboxParameters: {},
        pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange },
        textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged, },
        refElementParameters: { onElementChange, onMount, onUnmount },
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
        multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected: multiSelected ?? null },
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
}));

const MenuItemContext = J$1(null);
const Menu = /* @__PURE__ */ N((function Menu({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, singleSelectionAriaPropName, singleSelectionMode, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, pageNavigationSize, parentDepth, disabled, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getSortValueAt, render, imperativeHandle, compare, getIndex, ...void1 }) {
    getSortValueAt ??= identity;
    useEnsureStability("Menu", getSortValueAt);
    const defaultParentDepth = x(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    untabbable ||= false;
    return (u(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, MenuItemContext, useMenu({
            linearNavigationParameters: {
                onNavigateLinear,
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap"
            },
            escapeDismissParameters: { parentDepth: parentDepth || 1, },
            dismissParameters: { onDismiss },
            modalParameters: { active },
            refElementParameters: { onElementChange, onMount, onUnmount },
            activeElementParameters: {
                getDocument: useDefault("getDocument", getDocument),
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
                untabbable: untabbable
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
                singleSelectionMode: singleSelectionMode || "disabled",
            },
            multiSelectionParameters: {
                multiSelectionAriaPropName,
                multiSelectionMode: multiSelectionMode || "disabled",
                onSelectionChange
            },
            singleSelectionDeclarativeParameters: {
                singleSelectedIndex,
                onSingleSelectedIndexChange,
            },
            processedIndexManglerParameters: {
                getSortValueAt,
                compare,
                getIndex: useDefault("getIndex", getIndex)
            }
        })) }));
}));
const MenuItem = /* @__PURE__ */ N((function MenuItem({ index, untabbable, onPress, getText, role, focusSelf, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(MenuItemContext, "menu");
    const defaultFocusSelf = useCallback((e) => focus$1(e), []);
    return (useComponent(imperativeHandle, render, null, useMenuItem({
        info: {
            index,
            untabbable: untabbable || false,
            focusSelf: focusSelf ?? defaultFocusSelf,
            ...uinfo
        },
        context,
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange,
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
    })));
}));

const MenubarItemContext = J$1(null);
const Menubar = /* @__PURE__ */ N((function Menubar({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, noTypeahead, untabbable, onTabbableIndexChange, disabled, singleSelectedIndex, onSingleSelectedIndexChange, typeaheadTimeout, role, ariaLabel, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, getSortValueAt, compare, getIndex, ...void1 }) {
    getSortValueAt ??= identity;
    useEnsureStability("Menubar", getSortValueAt);
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
            singleSelectionMode: singleSelectionMode || "activation",
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
        refElementParameters: { onElementChange, onMount, onUnmount },
        processedIndexManglerParameters: {
            getSortValueAt,
            compare,
            getIndex: useDefault("getIndex", getIndex)
        }
    });
    F$1(imperativeHandle, () => info);
    return (u(MenubarItemContext.Provider, { value: info.context, children: render(info) }));
}));
const MenubarItem = /* @__PURE__ */ N((function MenubarItem({ index, render, focusSelf, untabbable, getText, onPress, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const defaultFocusSelf = useCallback((e) => focus$1(e), []);
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
}));

const Progress = /* @__PURE__ */ N((function Progress({ tagProgressIndicator, ariaLabel, max, render, value, valueText, imperativeHandle, ...void1 }) {
    return useComponent(imperativeHandle, render, null, useProgress({
        labelParameters: { ariaLabel },
        progressIndicatorParameters: {
            max: max ?? 100,
            value: value ?? "indeterminate",
            valueText,
            tagProgressIndicator
        }
    }));
}));
const ProgressWithHandler = /* @__PURE__ */ N((function ProgressWithHandler({ ariaLabel, forciblyPending, render, tagProgressIndicator, asyncHandler, capture, debounce, throttle, notifyFailure, notifyPending, notifySuccess, imperativeHandle, ...void1 }) {
    return useComponent(imperativeHandle, render, null, useProgressWithHandler({
        asyncHandlerParameters: { asyncHandler, capture, debounce, throttle },
        labelParameters: { ariaLabel },
        progressIndicatorParameters: { tagProgressIndicator },
        progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess }
    }));
}));

const RadioContext = J$1(null);
//const ProcessedChildrenContext = createContext<UseProcessedChildrenContext>(null!);
const RadioGroup = /* @__PURE__ */ N((function RadioGroup({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, singleSelectionMode, getSortValueAt, compare, getIndex, ...void1 }) {
    untabbable ??= false;
    getSortValueAt ??= identity;
    useEnsureStability("RadioGroup", getSortValueAt);
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
        refElementParameters: { onElementChange, onMount, onUnmount },
        processedIndexManglerParameters: {
            getSortValueAt,
            compare,
            getIndex: useDefault("getIndex", getIndex)
        }
    }));
}));
const Radio = /* @__PURE__ */ N((function Radio({ disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    //const getValue = useStableGetter(value);
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
}));

const SliderThumbContext = J$1(null);
function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, render, imperativeHandle, onChildrenCountChange, ...void1 }) {
    return useComponent(imperativeHandle, render, SliderThumbContext, useSlider({
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange },
        sliderParameters: { max, min }
    }));
}
function SliderThumb({ label, tag, value, max, min, index, render, valueText, imperativeHandle, onValueChange, info, ...void1 }) {
    return useComponent(imperativeHandle, render, null, useSliderThumb({
        context: (useContextWithWarning(SliderThumbContext, "slider")),
        info: { index, ...info },
        sliderThumbParameters: { label, tag, value, max, min, valueText, onValueChange },
    }));
}

const TableRowContext = J$1(null);
const TableCellContext = J$1(null);
const TableProcessedChildrenContext = J$1(null);
const Table = /* @__PURE__ */ N(function Table({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, initiallySingleSelectedIndex, multiSelectionAriaPropName, onSelectionChange, onSingleSelectedIndexChange, singleSelectionAriaPropName, collator, disableHomeEndKeys, initiallyTabbableColumn, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onMount, onNavigateLinear, onNavigateTypeahead, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, typeaheadTimeout, untabbable, getSortValueAt, initiallySortedColumn, ...void1 }) {
    getSortValueAt ??= identity;
    useEnsureStability("Table", getSortValueAt);
    return useComponent(imperativeHandle, render, TableRowContext, useTable({
        labelParameters: { ariaLabel },
        tableParameters: { tagTable, initiallySortedColumn },
        gridNavigationParameters: { initiallyTabbableColumn: initiallyTabbableColumn || 0, onTabbableColumnChange, },
        linearNavigationParameters: { disableHomeEndKeys: disableHomeEndKeys || false, navigatePastEnd: navigatePastEnd || "wrap", navigatePastStart: navigatePastStart || "wrap", onNavigateLinear, pageNavigationSize },
        paginatedChildrenParameters: { paginationMax, paginationMin, },
        refElementParameters: { onElementChange, onMount, onUnmount },
        rovingTabIndexParameters: { onTabbableIndexChange, untabbable: untabbable || false },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            onNavigateTypeahead,
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionParameters: { singleSelectionMode: singleSelectionMode || "disabled", initiallySingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName },
        multiSelectionParameters: { multiSelectionMode: multiSelectionMode || "disabled", multiSelectionAriaPropName, onSelectionChange },
        gridNavigationCompleteParameters: { getSortValueAt },
        processedIndexManglerParameters: {
            compare: null,
            getIndex: useDefault("getIndex", null)
        }
    }));
});
const TableHead = /* @__PURE__ */ N(function TableHead({ render, tagHead, imperativeHandle }) {
    return useComponent(imperativeHandle, render, null, useTableHead({
        tableHeadParameters: { tagHead }
    }));
});
const TableBody = /* @__PURE__ */ N(function TableBody({ render, tagTableSection, children, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, }) {
    return useComponent(imperativeHandle, render, TableProcessedChildrenContext, useTableBody({
        context: useContextWithWarning(TableRowContext, "TableRowContext"),
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
            children
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        tableSectionParameters: {
            tagTableSection
        }
    }));
});
const TableHeadRow = /* @__PURE__ */ N(function TableHeadRow({ render, index, tagTableRow, getText, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, onUnmount, selected, singleSelectionDisabled, untabbable, imperativeHandle }) {
    return useComponent(imperativeHandle, render, TableCellContext, useTableRow({
        context: useContextWithWarning(TableRowContext, "TableRowContext"),
        info: {
            index,
            untabbable: untabbable || false
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap"
        },
        multiSelectionChildParameters: {
            initiallyMultiSelected: initiallyMultiSelected ?? null,
            multiSelectionDisabled: multiSelectionDisabled || false,
            onMultiSelectChange
        },
        rovingTabIndexParameters: {
            initiallyTabbedIndex,
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        singleSelectionChildParameters: {
            singleSelectionDisabled: singleSelectionDisabled || false
        },
        tableRowParameters: {
            selected,
            tagTableRow
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        refElementParameters: {
            onElementChange: onElementChange ?? null,
            onMount: onMount ?? null,
            onUnmount: onUnmount ?? null
        }
    }));
});
const TableBodyRow = /* @__PURE__ */ N(function TableBodyRow({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, tagTableRow, getText, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, selected, singleSelectionDisabled, untabbable }) {
    // type RM = TableRowInfo<RowElement>;
    // type CM = TableCellInfo<CellElement>
    return (u(TableBodyRowOuter, { index: index, imperativeHandle: imperativeHandle, onElementChange: onElementChange, onMount: onMount, onUnmount: onUnmount, render: (info) => {
            let inner = u(TableBodyRowInner, { index: index, tagTableRow: tagTableRow, getText: getText, imperativeHandle: imperativeHandle, initiallyMultiSelected: initiallyMultiSelected, initiallyTabbedIndex: initiallyTabbedIndex, multiSelectionDisabled: multiSelectionDisabled, navigatePastEnd: navigatePastEnd, navigatePastStart: navigatePastStart, onCurrentFocusedChanged: onCurrentFocusedChanged, onCurrentFocusedInnerChanged: onCurrentFocusedInnerChanged, onElementChange: onElementChange, onMount: onMount, onMultiSelectChange: onMultiSelectChange, onTabbableIndexChange: onTabbableIndexChange, onTextContentChange: onTextContentChange, onUnmount: onUnmount, selected: selected, singleSelectionDisabled: singleSelectionDisabled, untabbable: untabbable, render: render });
            if (info.hide) {
                return render(info);
            }
            else {
                return inner;
            }
        } }));
});
const TableBodyRowOuter = /* @__PURE__ */ N(function TableBodyRowOuter({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, cssProperty, duration, ...void1 }) {
    return useComponent(imperativeHandle, render, null, useTableRowOuter({
        context: useContextWithWarning(TableProcessedChildrenContext, "TableProcessedChildrenContext"),
        info: { index },
        refElementParameters: { onElementChange, onMount, onUnmount },
        rearrangeableChildParameters: { cssProperty, duration }
    }));
});
const TableBodyRowInner = /* @__PURE__ */ N(function TableBodyRowInner({ index, render, getText, imperativeHandle, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, selected, singleSelectionDisabled, tagTableRow, untabbable, onElementChange, onMount, onUnmount, ...void1 }) {
    return useComponent(imperativeHandle, render, TableCellContext, useTableRow({
        context: useContextWithWarning(TableRowContext, "TableRowContext"),
        info: {
            index,
            untabbable: untabbable || false
        },
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged,
        },
        linearNavigationParameters: {
            navigatePastEnd: navigatePastEnd || "wrap",
            navigatePastStart: navigatePastStart || "wrap"
        },
        multiSelectionChildParameters: {
            initiallyMultiSelected: initiallyMultiSelected ?? null,
            multiSelectionDisabled: multiSelectionDisabled || false,
            onMultiSelectChange
        },
        rovingTabIndexParameters: {
            initiallyTabbedIndex,
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        singleSelectionChildParameters: {
            singleSelectionDisabled: singleSelectionDisabled || false
        },
        tableRowParameters: {
            selected,
            tagTableRow
        },
        textContentParameters: {
            getText: useDefault("getText", getText),
            onTextContentChange
        },
        refElementParameters: {
            onElementChange: onElementChange ?? null,
            onMount: onMount ?? null,
            onUnmount: onUnmount ?? null
        }
    }));
});
const TableCell = /* @__PURE__ */ N(function TableCell({ index, render, colSpan, focusSelf, getText, imperativeHandle, onTextContentChange, tagTableCell, untabbable, ...void1 }) {
    const defaultFocusSelf = useStableCallback((e) => { focus$1(e); }, []);
    return useComponent(imperativeHandle, render, null, useTableCell({
        context: useContextWithWarning(TableCellContext, "TableCellContext"),
        gridNavigationCellParameters: { colSpan },
        info: {
            focusSelf: focusSelf ?? defaultFocusSelf,
            index,
            untabbable: untabbable || false
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

const TabsContext = J$1(null);
const TabPanelsContext = J$1(null);
//const UntabbableContext = createContext(false);
//const SelectionModeContext = createContext<NonNullable<UseTabsParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]>>("focus");
const Tabs = /* @__PURE__ */ N((function Tabs({ ariaLabel, collator, disableHomeEndKeys, initiallySingleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, orientation, pageNavigationSize, localStorageKey, singleSelectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, getSortValueAt, compare, getIndex, ...void1 }) {
    untabbable ??= false;
    getSortValueAt ??= identity;
    useEnsureStability("Tabs", getSortValueAt);
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
        refElementParameters: { onElementChange, onMount, onUnmount },
        processedIndexManglerParameters: { getSortValueAt, compare, getIndex: useDefault("getIndex", getIndex) }
    });
    const { contextPanels, contextTabs } = info;
    F$1(imperativeHandle, () => info);
    return (u(TabsContext.Provider, { value: contextTabs, children: u(TabPanelsContext.Provider, { value: contextPanels, children: render(info) }) }));
}));
const Tab = /* @__PURE__ */ N((function Tab({ focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, onTextContentChange, info: uinfo, ...void1 }) {
    const context = useContextWithWarning(TabsContext, "tabs");
    console.assert(context != null, `This Tab is not contained within a Tabs component`);
    const focusSelfDefault = useCallback((e) => { focus$1(e); }, []);
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
        singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false, }
    }));
}));
const TabPanel = /* @__PURE__ */ N((function TabPanel({ index, render, info: uinfo }) {
    const context = useContextWithWarning(TabPanelsContext, "tabs");
    const info = useTabPanel({
        context,
        info: { index, ...uinfo }
    });
    return render(info);
}));

const ToastContext = J$1(null);
function Toasts({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount, imperativeHandle, onChildrenCountChange, ...void1 }) {
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

// TODO: Are there performance/sanity implications for having one context per primitive?
// const UntabbableContext = createContext(false);
//const AriaPropNameContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionAriaPropName"]>("aria-selected")
//const SelectionModeContext = createContext<UseToolbarParameters<any, any, any>["singleSelectionParameters"]["singleSelectionMode"]>("focus");
const ToolbarContext = J$1(null);
J$1(null);
const Toolbar = /* @__PURE__ */ N((function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, navigatePastEnd, navigatePastStart, pageNavigationSize, singleSelectedIndex, onSingleSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, ariaLabel, imperativeHandle, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, getSortValueAt, compare, getIndex }) {
    getSortValueAt ??= identity;
    useEnsureStability("Toolbar", getSortValueAt);
    const r = useToolbar({
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
            role: role ?? "toolbar",
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
        refElementParameters: { onElementChange, onMount, onUnmount },
        processedIndexManglerParameters: { getSortValueAt, compare, getIndex: useDefault("getIndex", getIndex) }
    });
    return (useComponent(imperativeHandle, render, ToolbarContext, r));
}));
const ToolbarChild = /* @__PURE__ */ N((function ToolbarChild({ index, render, focusSelf, getText, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info: uinfo, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ...void1 }) {
    const context = useContextWithWarning(ToolbarContext, "toolbar");
    const focusSelfDefault = useCallback((e) => { focus$1(e); }, []);
    focusSelf ??= focusSelfDefault;
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
}));

const Tooltip = /* @__PURE__ */ N(function TooltipU({ onStatus, getDocument, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType, usesLongPress, longPress, ...void1 }) {
    const defaultParentDepth = x(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    return (u(ParentDepthContext.Provider, { value: myDepth, children: useComponent(imperativeHandle, render, null, useTooltip({
            escapeDismissParameters: {
                getDocument: useDefault("getDocument", getDocument),
                parentDepth: parentDepth ?? defaultParentDepth,
            },
            activeElementParameters: {
                getDocument: useDefault("getDocument", getDocument),
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
        })) }));
});

export { Accordion, AccordionSection, Button, Checkbox, CheckboxGroup, CheckboxGroupChild, CheckboxGroupParent, Dialog, Drawer, EventDetail, Gridlist, GridlistCell, GridlistRow, GroupedListbox, Heading, HeadingReset, Listbox, ListboxChildren, ListboxItem, Menu, MenuItem, Menubar, MenubarItem, MenubarItemContext, NotificationProviderContext, ParentDepthContext, Progress, ProgressWithHandler, Radio, RadioGroup, Slider, SliderThumb, Tab, TabPanel, Table, TableBody, TableBodyRow, TableCell, TableHead, TableHeadRow, Tabs, Toast, Toasts, Toolbar, ToolbarChild, Tooltip, defaultRenderCheckboxLike, useAccordion, useAccordionSection, useButton, useCheckbox, useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent, useCheckboxLike, useDefault, useDefaultRenderPortal, useDialog, useDrawer, useFocusSentinel, useGridlist, useGridlistCell, useGridlistRow, useGridlistRowOuter, useLabel, useLabelSynthetic, useListbox, useListboxItem, useMenu, useMenuItem, useMenuSurface, useMenubar, useMenubarChild, useNotificationProvider, useNotify, useProgress, useProgressWithHandler, useRadio, useRadioGroup, useSlider, useSliderThumb, useTab, useTabPanel, useTable, useTableBody, useTableCell, useTableHead, useTableRow, useTableRowOuter, useTabs, useToast, useToasts, useToolbar, useToolbarChild, useTooltip };
//# sourceMappingURL=index.js.map
