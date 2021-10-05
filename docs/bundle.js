(function () {
    'use strict';

    var n,l$1,u$1,t$1,o$1,r$1,f$1,e$1={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$1(l,f,t,o,null)}function y$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null!=l$1.vnode&&l$1.vnode(f),f}function d$1(n){return n.children}function _$1(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$1(t):o,t.__h),z(u,t),t.__e!=o&&b$1(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$1,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x$1(_,s,n):s=P$1(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$1(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x$1(t,l,u):P$1(u,t,t,n.__k,t.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$1:I,o):n.removeEventListener(l,o?T$1:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$1(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _$1(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$1.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$1(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h$1(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!o&&t||i).__k=v$1(d$1,null,[u]),r||e$1,e$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u);}function D(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$1=0,_$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_$1.prototype.render=d$1,t$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

    var t,u,r,o=0,i=[],c=l$1.__b,f=l$1.__r,e=l$1.diffed,a=l$1.__c,v=l$1.unmount;function m(t,r){l$1.__h&&l$1.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function s(n){return o=5,d(function(){return {current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}),i=[];}l$1.__b=function(n){u=null,c&&c(n);},l$1.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},l$1.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===l$1.requestAnimationFrame||((r=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),a&&a(t,u);},l$1.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){l$1.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g$1(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

    function useMergedChildren(lhsProps, rhsProps) {
        const lhs = lhsProps?.children;
        const rhs = rhsProps?.children;
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
            let ret = v$1(d$1, {}, lhs, rhs);
            return ret;
        }
    }

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
        else {
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
            const lhs = lhsProps?.ref;
            const rhs = rhsProps?.ref;
            let combined = A$1((current) => {
                processRef(current, lhs);
                processRef(current, rhs);
            }, [lhs, rhs]);
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
        // Easy case, when there are no styles to merge return nothing.
        if (!lhs?.style && !rhs?.style)
            return undefined;
        if (typeof lhs != typeof rhs) {
            // Easy cases, when one is null and the other isn't.
            if (lhs?.style && !rhs?.style)
                return lhs.style;
            if (!lhs?.style && rhs?.style)
                return rhs.style;
            // They're both non-null but different types.
            // Convert the string type to an object bag type and run it again.
            if (lhs?.style && rhs?.style) {
                // (useMergedStyles isn't a true hook -- this isn't a violation)
                if (typeof lhs?.style == "string")
                    return useMergedStyles({ style: styleStringToObject(lhs?.style) }, rhs);
                if (typeof rhs?.style == "string")
                    return useMergedStyles(lhs, { style: styleStringToObject(rhs?.style) });
            }
            // Logic???
            return undefined;
        }
        // They're both strings, just concatenate them.
        if (typeof lhs?.style == "string") {
            return `${lhs.style};${rhs?.style ?? ""}`;
        }
        // They're both objects, just merge them.
        return {
            ...(lhs?.style ?? {}),
            ...(rhs?.style ?? {})
        };
    }

    let log = (str) => { debugger; console.warn(`Trying to merge two props with the same name: ${str}`); /* Intentional */ };
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
            const { children: lhsChildren, class: lhsClass, className: lhsClassName, style: lhsStyle, ref: lhsRef, ...lhs } = lhs2;
            const { children: rhsChildren, class: rhsClass, className: rhsClassName, style: rhsStyle, ref: rhsRef, ...rhs } = rhs2;
            let ret = {
                ...lhs,
                ref: useMergedRefs()(lhs2, rhs2),
                style: useMergedStyles(lhs2, rhs2),
                className: useMergedClasses(lhs2, rhs2),
                children: useMergedChildren(lhs2, rhs2)
            };
            if (ret.ref === undefined)
                delete ret.ref;
            if (ret.style === undefined)
                delete ret.style;
            if (ret.className === undefined)
                delete ret.className;
            if (ret.children === undefined)
                delete ret.children;
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
                        log?.(`Could not merge incompatible prop "${rhsKey}" (type: ${typeof rhsValue}, values: [${lhsValue}, ${rhsValue}])`);
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
            let lv = lhs(...args);
            let rv = rhs(...args);
            if (lv instanceof Promise || rv instanceof Promise)
                return Promise.all([lv, rv]);
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
        const ref = s(state);
        // Hijack the normal setter function 
        // to also set our ref to the new value
        const setState = A$1(value => {
            if (typeof value === "function") {
                let callback = value;
                setStateP(prevValue => {
                    let nextValue = callback(prevValue);
                    ref.current = nextValue;
                    return nextValue;
                });
            }
            else {
                ref.current = value;
                setStateP(value);
            }
        }, []);
        const getState = () => { return ref.current; };
        console.assert(ref.current === state);
        return [state, setState, getState];
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

    const Unset = Symbol("unset");
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
        const ref = s(Unset);
        _(ref, () => value);
        return A$1(() => {
            if (ref.current === Unset) {
                throw new Error('Value retrieved from useStableGetter() cannot be called from useLayoutEffect().');
            }
            return ref.current;
        }, []);
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
            return currentCallbackGetter()(...args);
        }, []);
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
        // TODO: There's no way to refresh which writing mode we have once mounted.
        // If the writing mode changes, the whole component needs to 
        // mount/unmount because (more-or-less in order of importance)
        //   A. There's no way to watch for CSS style changes
        //   B. Calling getComputedStyle after every render for every element gets expensive fast and
        //   C. Is not necessary for 99% of use cases that will never switch writing-mode within a single component
        //      (Those that do will need to mount and unmount the component that uses it)
        //
        // Maybe there could be a context object that can be used to remotely update all components that use this hook?
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
        }, [element]);
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
            const ret = effect(prevInputs.current, changes);
            prevInputs.current = inputs;
            return ret;
        };
        h(effect2, inputs);
    }

    function useTimeout({ timeout, callback, triggerIndex }) {
        const stableCallback = useStableCallback(() => { startTimeRef.current = null; callback(); });
        const getTimeout = useStableGetter(timeout);
        // Set any time we start timeout.
        // Unset any time the timeout completes
        const startTimeRef = s(null);
        const timeoutIsNull = (timeout == null);
        // Any time the triggerIndex changes (including on mount)
        // restart the timeout.  The timeout does NOT reset
        // when the duration or callback changes, only triggerIndex.
        y(() => {
            let timeout = getTimeout();
            console.assert(timeoutIsNull == (timeout == null));
            if (timeout != null) {
                startTimeRef.current = +(new Date());
                const handle = setTimeout(stableCallback, timeout);
                return () => clearTimeout(handle);
            }
        }, [triggerIndex, timeoutIsNull]);
        const getElapsedTime = A$1(() => {
            return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
        }, []);
        const getRemainingTime = A$1(() => {
            const timeout = getTimeout();
            return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
        }, []);
        return { getElapsedTime, getRemainingTime };
    }

    /**
     * When used in tandem with `useRovingTabIndex`, allows control of
     * the tabbable index with the arrow keys.
     *
     * @see useListNavigation, which packages everything up together.
     */
    function useLinearNavigation({ index, navigateToFirst, navigateToLast, navigateToNext, navigateToPrev, managedChildren, navigationDirection, disableArrowKeys, disableHomeEndKeys }) {
        navigationDirection ??= "either";
        const childCount = managedChildren.length;
        // Make sure the tabbable index never escapes the bounds of all available children
        // TODO: Keep track of the original index and keep it, at least until keyboard navigation.
        useLayoutEffect(() => {
            if (index !== null) {
                if (index < 0) {
                    navigateToFirst();
                }
                else if (childCount > 0 && index >= childCount) {
                    navigateToLast();
                }
            }
        }, [index, childCount, navigateToFirst, navigateToLast]);
        // These allow us to manipulate what our current tabbable child is.
        /*const navigateToIndex = useCallback((index: number) => { setIndex(index < 0 ? (managedChildren.length + index) : index); }, []);
        const navigateToNext = useCallback(() => { setIndex((i: number | null) => i === null? null! : i >= managedChildren.length - 1? managedChildren.length - 1 : ++i); }, []);
        const navigateToPrev = useCallback(() => { setIndex((i: number | null) => i === null? null! : i < 0? 0 : --i); }, []);
        const navigateToStart = useCallback(() => { navigateToIndex(0); }, [navigateToIndex]);
        const navigateToEnd = useCallback(() => { navigateToIndex(-1); }, [navigateToIndex]);*/
        const useLinearNavigationChild = A$1(() => {
            const { useRefElementProps, element } = useRefElement();
            // Prefer the parent element's direction so that we're not calling getComputedStyle
            // on every single individual child, which is likely redundant.
            const { convertElementSize, getLogicalDirection } = useLogicalDirection(element?.parentElement ?? element);
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
                            const directionAllowed = (!disableArrowKeys && (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation));
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
                            const directionAllowed = (!disableArrowKeys && (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation));
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
                            const directionAllowed = (!disableArrowKeys && (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation));
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
                            const directionAllowed = (!disableArrowKeys && (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation));
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
                return useRefElementProps(useMergedProps()({ onKeyDown }, props));
            };
            return {
                useLinearNavigationChildProps
            };
        }, [navigationDirection, navigateToNext, navigateToPrev, navigateToFirst, navigateToLast, !!disableArrowKeys, !!disableHomeEndKeys]);
        return {
            useLinearNavigationChild,
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
            if (typeof lhs === "string" && typeof rhs.text === "string") {
                // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
                // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
                let safeLhs = lhs.normalize("NFD");
                let safeRhs = rhs.text.normalize("NFD").substr(0, safeLhs.length);
                if (collator)
                    compare = collator.compare(safeLhs, safeRhs);
                else
                    compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
                return compare;
            }
            return lhs - rhs;
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
                        if ((lowestUnsortedIndexNext == null || u < lowestUnsortedIndexNext) && u > (getIndex() ?? -Infinity)) {
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
        const managedChildren = s([] /** TODO: Any problems caused by using an array when it should be an object? */);
        const mountedChildren = s([]);
        const mountOrder = s(new Map());
        const indicesByElement = s(new Map());
        const deletedIndices = s(new Set());
        // Used to keep track of indices that have "over-mounted" and by how much.
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
        const getMountIndex = A$1((index) => { return mountOrder.current.get(index); }, []);
        const useManagedChild = A$1((info) => {
            const { element, getElement, useRefElementProps } = useRefElement();
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
            }, [info.index]);
            // As soon as the component mounts, notify the parent and request a rerender.
            useLayoutEffect(([prevElement, prevIndex], changes) => {
                if (element) {
                    indicesByElement.current.set(element, info.index);
                    deletedIndices.current.delete(info.index);
                    if (managedChildren.current[info.index] != undefined) {
                        overmountCount.current.set(info.index, (overmountCount.current.get(info.index) ?? 0) + 1);
                    }
                    setChildUpdateIndex(c => ++c);
                    managedChildren.current[info.index] = { ...info };
                    return () => {
                        setChildUpdateIndex(c => ++c);
                        if ((overmountCount.current.get(info.index) ?? 0) > 0) {
                            overmountCount.current.set(info.index, (overmountCount.current.get(info.index) ?? 0) - 1);
                        }
                        else {
                            delete managedChildren.current[info.index];
                            deletedIndices.current.add(info.index);
                            if (typeof info.index === "number") {
                                while (managedChildren.current.length && managedChildren.current[managedChildren.current.length - 1] === undefined)
                                    managedChildren.current.length -= 1;
                            }
                            indicesByElement.current.delete(element);
                        }
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
     * @param activatedIndex What index the current selected (etc.) child is
     * @param length How many children exist (as managedChildren.length)
     * @param setFlag A function that probably looks like (i, flag) => managedChildren[i].setActive(flag)
     * @param useEffect Which version of useEffect to use. Default is `useLayoutEffect`.
     */
    function useChildFlag(activatedIndex, length, setFlag, useEffect = useLayoutEffect) {
        const [prevActivatedIndex, setPrevActivatedIndex, getPrevActivatedIndex] = useState(null);
        const [prevChildCount, setPrevChildCount, getPrevChildCount] = useState(length);
        // Any time the number of components changes,
        // reset any initial, possibly incorrect state they might have had, just in case.
        useEffect(() => {
            const direction = Math.sign(length - getPrevChildCount());
            if (direction !== 0) {
                for (let i = getPrevChildCount() ?? 0; i != length; i += direction) {
                    setFlag(i, i === activatedIndex);
                }
                setPrevChildCount(length);
            }
            const prevActivatedIndex = getPrevActivatedIndex();
            if (prevActivatedIndex != null && length > 0 && prevActivatedIndex >= length) {
                // The number of children shrank below whatever the currently selected component was.
                // Change the index to the last one still mounted.
                setFlag(length - 1, true);
                // (No need to unset any of them since they already unmounted themselves)
                // (Also no way to unset them anyway for the same reason)
            }
        }, [setFlag, activatedIndex, length]);
        useEffect(() => {
            // Deactivate the previously activated component
            const prevActivatedIndex = getPrevActivatedIndex();
            if (prevActivatedIndex != activatedIndex) {
                if (prevActivatedIndex != null && prevActivatedIndex >= 0 && prevActivatedIndex < length)
                    setFlag(prevActivatedIndex, false);
            }
            // Activate the current component
            if (activatedIndex != null && activatedIndex >= 0 && activatedIndex < length) {
                setFlag(activatedIndex, true);
                setPrevActivatedIndex(activatedIndex);
            }
        }, [setFlag, activatedIndex, length]);
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
            const ret = effect(prevInputs.current, changes);
            prevInputs.current = inputs;
            return ret;
        };
        y(effect2, inputs);
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
    function useRovingTabIndex({ shouldFocusOnChange: foc, tabbableIndex }) {
        const [rerenderAndFocus, setRerenderAndFocus] = useState(null);
        const getShouldFocusOnChange = useStableGetter(foc);
        useStableGetter(tabbableIndex);
        s(-Infinity);
        // Call the hook that allows us to collect information from children who provide it
        const { managedChildren, childCount, useManagedChild, indicesByElement, ...rest } = useChildManager();
        // Any time the tabbable index changes,
        // notify the previous child that it's no longer tabbable,
        // and notify the next child that is allowed to be tabbed to.
        useChildFlag(tabbableIndex, childCount, (index, tabbable) => {
            if (index != null)
                managedChildren[index]?.setTabbable(tabbable);
        });
        A$1(() => {
            if (tabbableIndex != null)
                managedChildren[tabbableIndex].setTabbable(true);
        }, [tabbableIndex]);
        const useRovingTabIndexChild = A$1((info) => {
            const [rrafIndex, setRrafIndex] = useState(1);
            const rerenderAndFocus = A$1(() => { setRrafIndex(i => ++i); }, []);
            let newInfo = {
                ...info,
                rerenderAndFocus,
                setTabbable: A$1((tabbable) => { setTabbable(tabbable); }, [])
            };
            const { element, getElement, useManagedChildProps } = useManagedChild(newInfo);
            const [tabbable, setTabbable] = useState(null);
            y(() => {
                if (element && tabbable) {
                    setRerenderAndFocus(_ => rerenderAndFocus);
                    const shouldFocusOnChange = getShouldFocusOnChange();
                    if (shouldFocusOnChange() && "focus" in element) {
                        requestAnimationFrame(() => {
                            queueMicrotask(() => {
                                element.focus();
                            });
                        });
                    }
                }
            }, [element, tabbable, rrafIndex]);
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
            useRovingTabIndexChild,
            childCount,
            managedChildren,
            indicesByElement,
            focusCurrent: rerenderAndFocus,
            ...rest
        };
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

    const activeElementUpdaters = new Set();
    const lastActiveElementUpdaters = new Set();
    const windowFocusedUpdaters = new Set();
    function focusout(e) {
        if (e.relatedTarget == null) {
            for (let f of activeElementUpdaters)
                f?.(null);
        }
    }
    function focusin(e) {
        let currentlyFocusedElement = e.target;
        let lastFocusedElement = e.target;
        activeElementUpdaters.forEach(f => f?.(currentlyFocusedElement));
        lastActiveElementUpdaters.forEach(f => f?.(lastFocusedElement));
    }
    function windowFocus() {
        windowFocusedUpdaters.forEach(f => f?.(true));
    }
    function windowBlur() {
        windowFocusedUpdaters.forEach(f => f?.(false));
    }
    function useActiveElement({ setActiveElement, setLastActiveElement, setWindowFocused }) {
        const stableSetActiveElement = useStableCallback(setActiveElement ?? (() => { }));
        const stableSetLastActiveElement = useStableCallback(setLastActiveElement ?? (() => { }));
        const stableSetWindowFocused = useStableCallback(setWindowFocused ?? (() => { }));
        h(() => {
            if (activeElementUpdaters.size === 0) {
                document.addEventListener("focusin", focusin, { passive: true });
                document.addEventListener("focusout", focusout, { passive: true });
                window.addEventListener("focus", windowFocus, { passive: true });
                window.addEventListener("blur", windowBlur, { passive: true });
            }
            // Add them even if they're undefined to more easily
            // manage the ">0 means don't add handlers" logic.
            activeElementUpdaters.add(stableSetActiveElement);
            lastActiveElementUpdaters.add(stableSetLastActiveElement);
            windowFocusedUpdaters.add(stableSetWindowFocused);
            return () => {
                activeElementUpdaters.delete(stableSetActiveElement);
                lastActiveElementUpdaters.delete(stableSetLastActiveElement);
                windowFocusedUpdaters.delete(stableSetWindowFocused);
                if (activeElementUpdaters.size === 0) {
                    document.removeEventListener("focusin", focusin);
                    document.removeEventListener("focusout", focusout);
                    window.removeEventListener("focus", windowFocus);
                    window.removeEventListener("blur", windowBlur);
                }
            };
        }, []);
    }

    function useHasFocus({ setFocused, setFocusedInner, setLastFocused, setLastFocusedInner }) {
        const { element, getElement, useRefElementProps } = useRefElement();
        const setActiveElement = A$1((node) => {
            setFocused?.(element == node && element != null);
            setFocusedInner?.(!!element?.contains(node));
        }, [setFocused, setFocusedInner, element]);
        const setLastActiveElement = A$1((node) => {
            setLastFocused?.(element == node && element != null);
            setLastFocusedInner?.(!!element?.contains(node));
        }, [setLastFocused, setLastFocusedInner, element]);
        useActiveElement({ setActiveElement, setLastActiveElement });
        const useHasFocusProps = A$1((props) => { return useRefElementProps(props); }, [useRefElementProps]);
        return { useHasFocusProps, element, getElement };
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
        const [randomId, setRandomId] = useState(() => generateRandomId(prefix));
        const [watchPrefixUpdates, setWatchPrefixUpdates, getWatchPrefixUpdates] = useState(false);
        h(() => {
            const watchPrefixUpdates = getWatchPrefixUpdates();
            if (watchPrefixUpdates)
                setRandomId(() => generateRandomId(prefix));
            setWatchPrefixUpdates(true);
        }, [prefix]);
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

    function identity(t) { return t; }
    /**
     * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
     *
     * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
     * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
     */
    function useListNavigation({ initialIndex, shouldFocusOnChange, collator, keyNavigation, indexMangler, indexDemangler }) {
        indexMangler ??= identity;
        indexDemangler ??= identity;
        keyNavigation ??= "either";
        // Keep track of three things related to the currently tabbable element's index:
        // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
        const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(initialIndex === undefined ? 0 : initialIndex);
        const { managedChildren, indicesByElement, useRovingTabIndexChild, focusCurrent, ...rest } = useRovingTabIndex({ shouldFocusOnChange, tabbableIndex });
        const navigateToIndex = A$1((i) => { setTabbableIndex(i); }, []);
        const navigateToFirst = A$1(() => { setTabbableIndex(indexMangler(0)); }, []);
        const navigateToLast = A$1(() => { setTabbableIndex(indexMangler(managedChildren.length - 1)); }, []);
        const navigateToPrev = A$1(() => { setTabbableIndex(i => indexMangler(indexDemangler(i ?? 0) - 1)); }, [indexDemangler, indexMangler]);
        const navigateToNext = A$1(() => { setTabbableIndex(i => indexMangler(indexDemangler(i ?? 0) + 1)); }, [indexDemangler, indexMangler]);
        const setIndex = A$1((index) => {
            setTabbableIndex(index);
        }, []);
        const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
        const { useLinearNavigationChild } = useLinearNavigation({ navigationDirection: keyNavigation, index: getTabbableIndex() ?? 0, managedChildren, navigateToPrev, navigateToNext, navigateToFirst, navigateToLast });
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
                tabbable
            };
        }, [useTypeaheadNavigationChild, useLinearNavigationChild, useRovingTabIndexChild, navigateToIndex]);
        return {
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
        const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState(null);
        useActiveElement({ setLastActiveElement });
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

    function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=l$1.__e;l$1.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function M(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(M.prototype=new _$1).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};_$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var G={configurable:!0,get:function(){return this.class}},J=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=j,J&&J(n);};var K=l$1.__r;l$1.__r=function(n){K&&K(n);};

    const EventDetail = Symbol("event-detail");
    function enhanceEvent(e, detail) {
        let event = e;
        event[EventDetail] = detail;
        return event;
    }

    let pulse = ("vibrate" in navigator) ? (() => navigator.vibrate(10)) : (() => { });
    function excludes(target, exclude) {
        if (exclude?.[target])
            return true;
        return false;
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
        const [active, setActive, getActive] = useState(false);
        const handlePress = useStableCallback((e) => {
            if (onClickSync) {
                e.preventDefault();
                pulse();
                setActive(false);
                onClickSync(e);
            }
        });
        const onKeyUp = excludes("space", exclude) ? undefined : (e) => {
            if (active && e.key == " " && onClickSync) {
                handlePress(e);
            }
        };
        const onMouseDown = excludes("click", exclude) ? undefined : (e) => {
            if (e.button === 0)
                setActive(true);
        };
        const onMouseUp = excludes("click", exclude) ? undefined : (e) => {
            if (active) {
                if (e.button === 0) {
                    handlePress(e);
                }
            }
        };
        const onBlur = (e) => {
            setActive(false);
        };
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
        return (props) => useMergedProps()({ onKeyDown, onKeyUp, onBlur, onMouseDown, onMouseUp, onMouseOut, ...{ "data-pseudo-active": active ? "true" : undefined } }, props);
    }

    function useAriaAccordion({ expandedIndex, setExpandedIndex }) {
        const [lastFocusedIndex, setLastFocusedIndex, getLastFocusedIndex] = useState(0);
        const stableSetExpandedIndex = useStableCallback(setExpandedIndex ?? (() => { }));
        const { managedChildren: managedAccordionSections, useManagedChild: useManagedChildSection } = useChildManager();
        const navigateToFirst = A$1(() => { setLastFocusedIndex((0)); }, []);
        const navigateToLast = A$1(() => { setLastFocusedIndex((managedAccordionSections.length - 1)); }, []);
        const navigateToPrev = A$1(() => { setLastFocusedIndex(i => ((i ?? 0) - 1)); }, []);
        const navigateToNext = A$1(() => { setLastFocusedIndex(i => ((i ?? 0) + 1)); }, []);
        const { useLinearNavigationChild } = useLinearNavigation({ managedChildren: managedAccordionSections, navigationDirection: "block", index: getLastFocusedIndex(), navigateToFirst, navigateToLast, navigateToPrev, navigateToNext });
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
                    let retB = useMergedProps()({ tabIndex: 0 }, useButtonLikeEventHandlers(onClick, undefined)(props));
                    let ret3 = useMergedProps()(useHeadRandomIdProps(useReferencedBodyIdProps("aria-controls")({
                        "aria-expanded": (ariaExpanded ?? (!!open).toString()),
                        "aria-disabled": (ariaDisabled ?? (open ? "true" : undefined)),
                        ...useRefElementProps(useManagedChildProps(retB))
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
    const handlesInput = (tag, labelPosition, which) => {
        if (labelPosition === "separate") {
            if (which === "input-element")
                return true;
            else if (which === "label-element")
                return tag != "input";
        }
        else if (labelPosition === "wrapping") {
            if (which === "input-element")
                return false;
            if (which == "label-element")
                return true;
        }
    };
    /**
     * Handles label type (wrapping or separate) for checkboxes, radios, switches, etc.
     * @param param0
     * @returns
     */
    function useCheckboxLike({ checked, disabled, labelPosition, onInput, role }) {
        const stableOnInput = useStableCallback((e) => { e.preventDefault(); onInput?.(e); });
        const { inputId, labelId, useInputLabelInput: useILInput, useInputLabelLabel: useILLabel, getLabelElement, getInputElement } = useInputLabel({ labelPrefix: "aria-checkbox-label-", inputPrefix: "aria-checkbox-input-" });
        const useCheckboxLikeInputElement = A$1(function useCheckboxInputElement({ tag }) {
            const { useInputLabelInputProps: useILInputProps } = useILInput();
            const { element, useRefElementProps } = useRefElement();
            // onClick and onChange are a bit messy, so we need to
            // *always* make sure that the visible state is correct
            // after all the event dust settles.
            // See https://github.com/preactjs/preact/issues/2745,
            // and https://github.com/preactjs/preact/issues/1899#issuecomment-525690194
            y(() => {
                if (element && tag == "input") {
                    element.checked = checked;
                }
            }, [tag, element, checked]);
            return { inputElement: element, useCheckboxLikeInputElementProps };
            function useCheckboxLikeInputElementProps({ ...p0 }) {
                // For some reason, Chrome won't fire onInput events for radio buttons that are tabIndex=-1??
                // Needs investigating, but onInput works fine in Firefox
                // TODO
                let props = useButtonLikeEventHandlers(disabled || !handlesInput(tag, labelPosition, "input-element") ? undefined : stableOnInput, undefined)({});
                if (tag == "input")
                    props.onInput = (e) => e.preventDefault();
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
                    if (tag === "input") {
                        props.checked = checked;
                    }
                    else {
                        props.role = role;
                        props.tabIndex = 0;
                        props["aria-checked"] = checked ? "true" : undefined;
                    }
                    props["aria-disabled"] = disabled.toString();
                }
                // Make sure that label clicks can't affect the checkbox while it's disabled
                props.onClick = disabled ? ((e) => { e.preventDefault(); }) : props.onClick;
                return useMergedProps()(p0, props);
            }
        }, [useILInput, role, labelPosition, disabled, checked]);
        const useCheckboxLikeLabelElement = A$1(function useCheckboxLabelElement({ tag }) {
            const { useInputLabelLabelProps: useILLabelProps } = useILLabel({ tag });
            function useCheckboxLikeLabelElementProps({ ...p0 }) {
                let newProps = useButtonLikeEventHandlers(disabled || !handlesInput(tag, labelPosition, "label-element") ? undefined : stableOnInput, undefined)({});
                if (labelPosition == "wrapping") {
                    newProps.tabIndex = 0;
                    newProps.role = role;
                    newProps["aria-disabled"] = disabled.toString();
                    newProps["aria-checked"] = checked.toString();
                }
                // Just make sure that label clicks can't affect the checkbox while it's disabled
                newProps.onClick = disabled ? ((e) => { e.preventDefault(); }) : newProps.onClick;
                return useMergedProps()(newProps, useILLabelProps(p0));
            }
            return { useCheckboxLikeLabelElementProps };
        }, [useILLabel, disabled, checked, role, labelPosition]);
        return {
            useCheckboxLikeInputElement,
            useCheckboxLikeLabelElement,
            getLabelElement,
            getInputElement
        };
    }

    function useAriaCheckbox({ labelPosition, checked, onInput, disabled }) {
        const onInputEnhanced = (e) => onInput?.(enhanceEvent(e, { checked: !checked }));
        const { getInputElement, getLabelElement, useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike({ checked: !!checked, labelPosition, role: "checkbox", disabled, onInput: onInputEnhanced });
        const useCheckboxInputElement = A$1(function useCheckboxInputElement({ tag }) {
            const { inputElement, useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement({ tag });
            const isMixed = (checked == "mixed");
            y(() => {
                if (inputElement && tag === "input") {
                    inputElement.indeterminate = isMixed;
                }
            }, [inputElement, isMixed, tag]);
            return { useCheckboxInputElementProps };
            function useCheckboxInputElementProps({ ...p0 }) {
                let props = useCheckboxLikeInputElementProps(p0);
                props.checked ??= !!checked;
                if (tag == "input")
                    props.type = "checkbox";
                return props;
            }
        }, [useCheckboxLikeInputElement, checked, labelPosition, disabled]);
        const useCheckboxLabelElement = A$1(function useCheckboxLabelElement({ tag }) {
            const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement({ tag });
            function useCheckboxLabelElementProps({ ...props }) {
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
     * Refers to three different types of elements:
     *
     * 1. The parent checkbox, that represents the state of all the child checkboxes.
     * 2. The child container, that is probably a <div> element that contains all the child checkboxes.
     * 3. The child checkboxes.
     *
     * @param param0
     * @returns
     */
    function useCheckboxGroup({ collator, keyNavigation, shouldFocusOnChange }) {
        const { managedChildren, useListNavigationChild, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation({ collator, keyNavigation, shouldFocusOnChange });
        //const [uncheckedCount, setUnheckedCount] = useState(0);
        const [checkedCount, setCheckedCount] = useState(0);
        const checkedIndices = s(new Set());
        const [selfIsChecked, setSelfIsChecked, getSelfIsChecked] = useState(false);
        // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
        // Otherwise, it's null when the last input was from a child checkbox. 
        const savedCheckedValues = s(null);
        const onCheckboxGroupInput = A$1((e) => {
            e.preventDefault();
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
        const useCheckboxGroupCheckboxProps = A$1((props) => {
            return useMergedProps()({ "aria-controls": ariaControls }, props);
        }, [ariaControls]);
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
                useCheckboxGroupChildProps: A$1((props) => useMergedProps()({ onInput }, useListNavigationChildProps(props)), [useListNavigationChildProps, onInput])
            };
        }, [notifyChecked, useListNavigationChild]);
        return { useCheckboxGroupChild, useCheckboxGroupCheckboxProps, selfIsChecked, percentChecked: (checkedCount / managedChildren.length), onCheckboxGroupInput, tabbableIndex, focus: focusCurrent, currentTypeahead, invalidTypeahead };
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
    function useSoftDismiss({ onClose }) {
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
        return { useSoftDismissProps: (props) => useMergedProps()(useRefElementProps({ onKeyDown }), props) };
    }
    /**
     * A generic modal hook, used by modal dialogs, but can also
     * be used by anything that's modal with a backdrop.
     * @param param0
     * @returns
     */
    function useAriaModal({ open, onClose }) {
        const stableOnClose = useStableCallback(onClose);
        const [modalDescribedByBody, setModalDescribedByBody] = useState(false);
        useHideScroll(open);
        const { id: modalId, useRandomIdProps: useModalIdProps, useReferencedIdProps: useModalReferencingIdProps } = useRandomId({ prefix: "aria-modal-" });
        const { id: bodyId, useRandomIdProps: useBodyIdProps, useReferencedIdProps: useBodyReferencingIdProps } = useRandomId({ prefix: "aria-modal-body-" });
        const { id: titleId, useRandomIdProps: useTitleIdProps, useReferencedIdProps: useTitleReferencingIdProps } = useRandomId({ prefix: "aria-modal-title-" });
        const { useSoftDismissProps } = useSoftDismiss({ onClose: stableOnClose });
        const useModalBackdrop = A$1(function useModalBackdrop() {
            function useModalBackdropProps(props) {
                return useMergedProps()({ onPointerUp: () => stableOnClose("backdrop") }, props);
            }
            return { useModalBackdropProps };
        }, []);
        const useModalProps = function ({ "aria-modal": ariaModal, role, ...p0 }) {
            const { useFocusTrapProps } = useFocusTrap({ trapActive: open });
            const p1 = useTitleReferencingIdProps("aria-labelledby")(p0);
            const p2 = useModalIdProps(p1);
            const pFinal = useBodyReferencingIdProps("aria-describedby")(p2);
            return useFocusTrapProps(useMergedProps()(useSoftDismissProps({ role: "dialog" }), modalDescribedByBody ? pFinal : p2));
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
        // TODO: Differences between dialog and modal go here, presumably.
        // Non-modal dialogs need to be able to be repositioned, etc.
        const { useModalBackdrop, useModalBody, useModalProps, useModalTitle } = useAriaModal({ open, onClose });
        const useDialogBackdrop = A$1(() => {
            const { useModalBackdropProps } = useModalBackdrop();
            return { useDialogBackdropProps: useModalBackdropProps };
        }, [useModalBackdrop]);
        const useDialogBody = A$1(({ descriptive }) => {
            const { useModalBodyProps } = useModalBody({ descriptive });
            return { useDialogBodyProps: useModalBodyProps };
        }, [useModalBackdrop]);
        const useDialogProps = useModalProps;
        const useDialogTitle = A$1(() => {
            const { useModalTitleProps } = useModalTitle();
            return { useDialogTitleProps: useModalTitleProps };
        }, [useModalTitle]);
        return {
            useDialogProps,
            useDialogTitle,
            useDialogBody,
            useDialogBackdrop
        };
    }

    function useAriaListboxMulti({ ...args }) {
        const [focusedInner, setFocusedInner, getFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ setFocusedInner });
        const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" });
        const { useListNavigationChild, navigateToIndex, managedChildren, currentTypeahead, focusCurrent, tabbableIndex, invalidTypeahead } = useListNavigation({ ...args, shouldFocusOnChange: getFocusedInner });
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
            const [typeaheadInProgress, setTypeaheadInProgress] = useState(false);
            const getSelected = useStableGetter(selected);
            const { element, useRefElementProps } = useRefElement();
            const stableOnSelect = useStableCallback(info.onSelect ?? (() => { }));
            const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ ...info, setTypeaheadInProgress });
            useLayoutEffect(() => {
                if (element && getShiftHeld()) {
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selected: true } });
                }
            }, [element, tabbable]);
            return { useListboxMultiItemProps, tabbable };
            function useListboxMultiItemProps(props) {
                const newProps = useButtonLikeEventHandlers((e) => {
                    navigateToIndex(info.index);
                    stableOnSelect?.({ ...e, [EventDetail]: { selected: !getSelected() } });
                    e.preventDefault();
                }, { space: typeaheadInProgress ? "exclude" : undefined })({});
                props.role = "option";
                props["aria-setsize"] = (childCount).toString();
                props["aria-posinset"] = (info.index + 1).toString();
                props["aria-selected"] = (tabbable ?? false).toString();
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
        return { useListboxMultiItem, useListboxMultiProps, useListboxMultiLabel, tabbableIndex, currentTypeahead, invalidTypeahead, focus: focusCurrent };
        function useListboxMultiProps(props) {
            props.role = "listbox";
            props["aria-multiselectable"] = "true";
            return useHasFocusProps(useGenericLabelInputProps(useMergedProps()({ onKeyDown, onKeyUp, onFocusOut }, props)));
        }
        function onKeyDown(e) { if (e.key == "Shift")
            setShiftHeld(true); }
        function onKeyUp(e) { if (e.key == "Shift")
            setShiftHeld(false); }
        function onFocusOut(e) { setShiftHeld(false); }
    }

    function useAriaListboxSingle({ selectedIndex, onSelect, selectionMode, ...args }) {
        const [anyItemsFocused, setAnyItemsFocused, getAnyItemsFocused] = useState(false);
        const { useGenericLabelInput, useGenericLabelLabel, useReferencedInputIdProps, useReferencedLabelIdProps, inputElement } = useGenericLabel({ labelPrefix: "aria-listbox-label-", inputPrefix: "aria-listbox-" });
        const { useListNavigationChild, navigateToIndex, managedChildren, setTabbableIndex, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation({ ...args, shouldFocusOnChange: getAnyItemsFocused });
        const { useGenericLabelInputProps } = useGenericLabelInput();
        const stableOnSelect = useStableCallback(onSelect ?? (() => { }));
        // Track whether the currently focused element is a child of the list box parent element.
        // When it's not, we reset the tabbable index back to the currently selected element.
        useActiveElement({ setActiveElement: activeElement => setAnyItemsFocused(!!(inputElement?.contains(activeElement))) });
        y(() => {
            if (!anyItemsFocused)
                setTabbableIndex(selectedIndex);
        }, [anyItemsFocused, selectedIndex, setTabbableIndex]);
        useChildFlag(selectedIndex, managedChildren.length, (i, selected) => managedChildren[i]?.setSelected(selected));
        useLayoutEffect(([]) => {
            navigateToIndex(selectedIndex);
        }, [selectedIndex, managedChildren.length]);
        const childCount = managedChildren.length;
        const useListboxSingleItem = A$1((info) => {
            const [selected, setSelected, getSelected] = useState(false);
            const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ setSelected, ...info });
            const { element, useRefElementProps } = useRefElement();
            const index = info.index;
            y(() => {
                if (element && tabbable && selectionMode == "focus") {
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                }
            }, [element, tabbable, selectionMode, index]);
            return { useListboxSingleItemProps, tabbable, selected, getSelected };
            function useListboxSingleItemProps(props) {
                const newProps = useButtonLikeEventHandlers((e) => {
                    navigateToIndex(info.index);
                    if (element)
                        stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                    e.preventDefault();
                }, undefined)({});
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
        return { useListboxSingleItem, useListboxSingleProps, useListboxSingleLabel, tabbableIndex, focus: focusCurrent, currentTypeahead, invalidTypeahead };
        function useListboxSingleProps(props) {
            props.role = "listbox";
            return useGenericLabelInputProps(props);
        }
    }

    function useAriaMenu({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, ...args }) {
        const [focusTrapActive, setFocusTrapActive] = useState(null);
        let onClose = args.onClose;
        let onOpen = args.onOpen;
        let menubar = args.menubar;
        let open = (menubar ? true : args.open);
        const stableOnClose = useStableCallback(onClose ?? (() => { }));
        const [menuLastFocusedInner, setMenuLastFocusedInner, getMenuLastFocusedInner] = useState(false);
        const [buttonLastFocusedInner, setButtonLastFocusedInner, getButtonLastFocusedInner] = useState(false);
        // TODO: It's awkward that the button focus props are out here where we don't have its type,
        // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
        // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
        // where nothing is focused. 
        const { useHasFocusProps: useMenuHasFocusProps, } = useHasFocus({ setLastFocusedInner: setMenuLastFocusedInner });
        const { useHasFocusProps: useButtonHasFocusProps } = useHasFocus({ setLastFocusedInner: setButtonLastFocusedInner });
        const { managedChildren, useListNavigationChild, tabbableIndex, focusCurrent: focusMenu } = useListNavigation({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, shouldFocusOnChange: A$1(() => getMenuLastFocusedInner() || getButtonLastFocusedInner(), []) });
        const { useRandomIdProps: useMenuIdProps, useReferencedIdProps: useMenuIdReferencingProps } = useRandomId({ prefix: "aria-menu-" });
        const [openerElement, setOpenerElement] = useState(null);
        const { useSoftDismissProps } = useSoftDismiss({ onClose: stableOnClose });
        y(() => {
            setFocusTrapActive(open);
        }, [open]);
        const focusMenuStable = useStableCallback(focusMenu ?? (() => { }));
        y(() => {
            if (focusTrapActive) {
                focusMenuStable?.();
            }
            else if (focusTrapActive === false) {
                if (getMenuLastFocusedInner())
                    openerElement?.focus();
            }
            else ;
        }, [focusTrapActive]);
        // Focus management is really finicky, and there's always going to be 
        // an edge case where nothing's focused for two consecutive frames 
        // on iOS or whatever, which would immediately close the menu 
        // any time it's been opened. So any time it *looks* like we should close,
        // try waiting 100ms. If it's still true then, then yeah, we should close.
        let shouldClose = (focusTrapActive && !menuLastFocusedInner && !buttonLastFocusedInner);
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
            const [firstSentinelIsActive, setFirstSentinelIsActive] = useState(false);
            useTimeout({ callback: () => { setFirstSentinelIsActive(open); }, timeout: 100, triggerIndex: `${firstSentinelIsActive}` });
            const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => focusMenu?.());
            const onClick = () => stableOnClose();
            return {
                useMenuSentinelProps: function (p) {
                    return useMergedProps()({ onFocus, onClick }, p);
                }
            };
        }, [focusMenu, open]);
        const useMenuButton = A$1(({ tag }) => {
            const { element, getElement, useRefElementProps } = useRefElement();
            useLayoutEffect(() => { setOpenerElement(element); }, [element]);
            return {
                useMenuButtonProps: function (p) {
                    let props = useRefElementProps(useMergedProps()({}, useMenuIdReferencingProps("aria-controls")(useButtonHasFocusProps(p))));
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
            return useMenuIdProps(useMenuHasFocusProps(useMergedProps()({ onKeyDown }, useSoftDismissProps(props))));
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

    function useAriaTabs({ selectionMode, selectedIndex, onSelect, orientation: logicalOrientation, ...args }) {
        const [tabListFocusedInner, setTabListFocusedInner, getTabListFocusedInner] = useState(false);
        const { useHasFocusProps: useTabListHasFocusProps } = useHasFocus({ setFocusedInner: setTabListFocusedInner });
        const { element: listElement, useRefElementProps } = useRefElement();
        const { getLogicalDirection, convertToPhysicalOrientation } = useLogicalDirection(listElement);
        const physicalOrientation = convertToPhysicalOrientation(logicalOrientation);
        useRandomId({ prefix: "aria-tab-list-" });
        const { useRandomIdProps: useTabLabelIdProps, useReferencedIdProps: useReferencedTabLabelId } = useRandomId({ prefix: "aria-tab-label-" });
        const { managedChildren: managedTabs, navigateToIndex, useListNavigationChild, tabbableIndex, invalidTypeahead, currentTypeahead, focusCurrent } = useListNavigation({ ...args, shouldFocusOnChange: getTabListFocusedInner, keyNavigation: logicalOrientation });
        const { managedChildren: managedPanels, useManagedChild: useManagedTabPanel } = useChildManager();
        useStableCallback(onSelect);
        const childCount = managedTabs.length;
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
                }, undefined)(props);
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
                if (getTabListFocusedInner()) {
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
                return useReferencedTabLabelId("aria-labelledby")(useTabListHasFocusProps(useRefElementProps(props)));
            }
            return { useTabListProps };
        }, [physicalOrientation]);
        const useTabsLabel = A$1(function useTabsLabel() {
            function useTabsLabelProps({ ...props }) {
                return useTabLabelIdProps(props);
            }
            return { useTabsLabelProps };
        }, []);
        return { useTab, useTabPanel, useTabsList, useTabsLabel, tabbableIndex, focusTabList: focusCurrent, currentTypeahead, invalidTypeahead };
    }

    function useAriaTooltip({ mouseoverDelay }) {
        mouseoverDelay ??= 400;
        const [open, setOpen, getOpen] = useState(false);
        const [hasAnyMouseover, setHasAnyMouseover] = useState(false);
        //const [mouseoverIsValid, setMouseoverIsValid] = useState(false);
        const { useRandomIdProps: useTooltipIdProps, useReferencedIdProps: useTooltipIdReferencingProps } = useRandomId({ prefix: "aria-tooltip-" });
        const [triggerFocusedInner, setTriggerFocusedInner, getTriggerFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ setFocusedInner: setTriggerFocusedInner });
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
            setOpen(hasAnyMouseover || triggerFocusedInner);
        }, [hasAnyMouseover, triggerFocusedInner]);
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
        const [lastFocusedInner, setLastFocusedInner, getLastFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({});
        const { useListNavigationChild, currentTypeahead, setTabbableIndex, tabbableIndex } = useListNavigation({ shouldFocusOnChange: getLastFocusedInner });
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
            v$1("ul", { ...useHasFocusProps({}) },
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
        const [focusedInner, setFocusedInner, getFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ setFocusedInner });
        const { useCheckboxGroupCheckboxProps, useCheckboxGroupChild, selfIsChecked, percentChecked, onCheckboxGroupInput } = useCheckboxGroup({ shouldFocusOnChange: getFocusedInner });
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
        const { tabbable, useCheckboxGroupChildProps } = useCheckboxGroupChild({ index, text, checked, id: randomId, setChecked });
        text = `Number ${index + 1} checkbox ${checked ? "(checked)" : ""} ${tabbable ? "(tabbble)" : ""}`;
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
        const { useMenuButton, useMenuItem, useMenuItemCheckbox, useMenuProps, useMenuSubmenuItem } = useAriaMenu({ open, onClose, onOpen });
        const { useMenuButtonProps } = useMenuButton({ tag: "button" });
        return (v$1("div", { class: "demo" },
            v$1(MenuItemContext.Provider, { value: useMenuItem },
                v$1("button", { ...useMenuButtonProps({ onClick: e => setOpen(open => !open) }) }, "Open menu"),
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
        const { useTabProps } = useTab({ index, text: null, tag: "li" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLWNoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLWNsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXJlZnMuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXN0eWxlcy5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHMuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmVmLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWdldHRlci5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGFibGUtY2FsbGJhY2suanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbGF5b3V0LWVmZmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS10aW1lb3V0LmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWtleWJvYXJkLW5hdmlnYXRpb24uanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtY2hpbGQtbWFuYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lZmZlY3QuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utcm92aW5nLXRhYmluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWRyYWdnYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kcm9wcGFibGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZXZlbnQtaGFuZGxlci5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1hY3RpdmUtZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1oYXMtZm9jdXMuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtaW50ZXJ2YWwuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxpc3QtbmF2aWdhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyIsIm5vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCJub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1ibG9ja2luZy1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWZvY3VzLXRyYXAuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9wcm9wcy5qcyIsIi4uL3VzZS1idXR0b24uanMiLCIuLi91c2UtYWNjb3JkaW9uLmpzIiwiLi4vdXNlLWxhYmVsLmpzIiwiLi4vdXNlLWNoZWNrYm94LmpzIiwiLi4vdXNlLWNoZWNrYm94LWdyb3VwLmpzIiwiLi4vdXNlLW1vZGFsLmpzIiwiLi4vdXNlLWRpYWxvZy5qcyIsIi4uL3VzZS1saXN0Ym94LW11bHRpLmpzIiwiLi4vdXNlLWxpc3Rib3gtc2luZ2xlLmpzIiwiLi4vdXNlLW1lbnUuanMiLCIuLi91c2UtdGFicy5qcyIsIi4uL3VzZS10b29sdGlwLmpzIiwiZGVtb3MvdXNlLWludGVydmFsLnRzeCIsImRlbW9zL3VzZS1yb3ZpbmctdGFiLWluZGV4LnRzeCIsImRlbW9zL3VzZS10aW1lb3V0LnRzeCIsImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LG8scixmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LG8scixmPXt9O2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKHIgaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltyXSYmKGZbcl09bC5kZWZhdWx0UHJvcHNbcl0pO3JldHVybiB5KGwsZix0LG8sbnVsbCl9ZnVuY3Rpb24geShuLGksdCxvLHIpe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6byxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1yPysrdTpyfTtyZXR1cm4gbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8ciE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKHI9bC5kZWJvdW5jZVJlbmRlcmluZyl8fG8pKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxvLHI7bi5fX2QmJihvPSh0PShsPW4pLl9fdikuX19lLChyPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihyLHQsaSxsLl9fbix2b2lkIDAhPT1yLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bb106bnVsbCx1LG51bGw9PW8/ayh0KTpvLHQuX19oKSx6KHUsdCksdC5fX2UhPW8mJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LG8scixmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxvLHIsZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmbnVsbCE9Xy5fX2smJl8uX19rPT09cC5fX2s/Xy5fX2Q9cz14KF8scyxuKTpzPVAobixfLHAsdyxiLHMpLGF8fFwib3B0aW9uXCIhPT11LnR5cGU/XCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cyk6bi52YWx1ZT1cIlwiKTpzJiZwLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1rKHApKX1mb3IodS5fX2U9bSxoPUE7aC0tOyludWxsIT13W2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT13W2hdLl9fZSYmd1toXS5fX2U9PXUuX19kJiYodS5fX2Q9ayhpLGgrMSkpLE4od1toXSx3W2hdKSk7aWYoZylmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKU0oZ1toXSxnWysraF0sZ1srK2hdKX1mdW5jdGlvbiB4KG4sbCx1KXt2YXIgaSx0O2ZvcihpPTA7aTxuLl9fay5sZW5ndGg7aSsrKSh0PW4uX19rW2ldKSYmKHQuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQudHlwZT94KHQsbCx1KTpQKHUsdCx0LG4uX19rLHQuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiBBKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7QShuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIFAobixsLHUsaSx0LG8pe3ZhciByLGYsZTtpZih2b2lkIDAhPT1sLl9fZClyPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPW98fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PW98fG8ucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxyPW51bGw7ZWxzZXtmb3IoZj1vLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0yKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LG8pLHI9b31yZXR1cm4gdm9pZCAwIT09cj9yOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciBvO2ZvcihvIGluIHUpXCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fG8gaW4gbHx8SChuLG8sbnVsbCx1W29dLGkpO2ZvcihvIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEgobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiAkKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxzLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBIKG4sbCx1LGksdCl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHwkKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fCQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxvP1Q6SSxvKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP1Q6SSxvKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rW0g6aF0vLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgcyxoLHYseSxwLGssYixtLGcseCxBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxyPVtlXSksKHM9bC5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKG09dS5wcm9wcyxnPShzPVAuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/Zz9nLnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9iPShoPXUuX19jPWkuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBQKG0seCk6KHUuX19jPWg9bmV3IF8obSx4KSxoLmNvbnN0cnVjdG9yPVAsaC5yZW5kZXI9TyksZyYmZy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9eCxoLl9fbj10LHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWEoe30saC5fX3MpKSxhKGguX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkseT1oLnByb3BzLHA9aC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLHgpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7aC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKG0saC5fX3MseCksbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LHAsayl9KX1oLmNvbnRleHQ9eCxoLnByb3BzPW0saC5zdGF0ZT1oLl9fcywocz1sLl9fcikmJnModSksaC5fX2Q9ITEsaC5fX3Y9dSxoLl9fUD1uLHM9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKHQ9YShhKHt9LHQpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHkscCkpLEE9bnVsbCE9cyYmcy50eXBlPT09ZCYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzLHcobixBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsaSx0LG8scixmLGUsYyksaC5iYXNlPXUuX19lLHUuX19oPW51bGwsaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCksaC5fX2U9ITF9ZWxzZSBudWxsPT1yJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TChpLl9fZSx1LGksdCxvLHIsZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9cikmJih1Ll9fZT1lLHUuX19oPSEhYyxyW3IuaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiB6KG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBMKGwsdSxpLHQsbyxyLGYsYyl7dmFyIHMsYSx2LHk9aS5wcm9wcyxwPXUucHJvcHMsZD11LnR5cGUsXz0wO2lmKFwic3ZnXCI9PT1kJiYobz0hMCksbnVsbCE9cilmb3IoO188ci5sZW5ndGg7XysrKWlmKChzPXJbX10pJiYocz09PWx8fChkP3MubG9jYWxOYW1lPT1kOjM9PXMubm9kZVR5cGUpKSl7bD1zLHJbX109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09ZClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocCk7bD1vP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkLHAuaXMmJnApLHI9bnVsbCxjPSExfWlmKG51bGw9PT1kKXk9PT1wfHxjJiZsLmRhdGE9PT1wfHwobC5kYXRhPXApO2Vsc2V7aWYocj1yJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxhPSh5PWkucHJvcHN8fGUpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9cC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9cilmb3IoeT17fSxfPTA7XzxsLmF0dHJpYnV0ZXMubGVuZ3RoO18rKyl5W2wuYXR0cmlidXRlc1tfXS5uYW1lXT1sLmF0dHJpYnV0ZXNbX10udmFsdWU7KHZ8fGEpJiYodiYmKGEmJnYuX19odG1sPT1hLl9faHRtbHx8di5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWlmKEMobCxwLHksbyxjKSx2KXUuX19rPVtdO2Vsc2UgaWYoXz11LnByb3BzLmNoaWxkcmVuLHcobCxBcnJheS5pc0FycmF5KF8pP186W19dLHUsaSx0LG8mJlwiZm9yZWlnbk9iamVjdFwiIT09ZCxyLGYscj9yWzBdOmkuX19rJiZrKGksMCksYyksbnVsbCE9cilmb3IoXz1yLmxlbmd0aDtfLS07KW51bGwhPXJbX10mJmgocltfXSk7Y3x8KFwidmFsdWVcImluIHAmJnZvaWQgMCE9PShfPXAudmFsdWUpJiYoXyE9PWwudmFsdWV8fFwicHJvZ3Jlc3NcIj09PWQmJiFfKSYmSChsLFwidmFsdWVcIixfLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KF89cC5jaGVja2VkKSYmXyE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLF8seS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bi5fX2spZm9yKG89MDtvPHQubGVuZ3RoO28rKyl0W29dJiZOKHRbb10sdSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxoKG4uX19lKSxuLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBTKHUsaSx0KXt2YXIgbyxyLGY7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz12KGQsbnVsbCxbdV0pLHJ8fGUsZSx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGYsdSl9ZnVuY3Rpb24gcShuLGwpe1MobixsLHEpfWZ1bmN0aW9uIEIobCx1LGkpe3ZhciB0LG8scixmPWEoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSkseShsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBEKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2YrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKG0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49Yy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxfLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1hKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oYSh7fSx1KSx0aGlzLnByb3BzKSksbiYmYSh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLG0odGhpcykpfSxfLnByb3RvdHlwZS5yZW5kZXI9ZCx0PVtdLG89XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZy5fX3I9MCxmPTA7ZXhwb3J0e1MgYXMgcmVuZGVyLHEgYXMgaHlkcmF0ZSx2IGFzIGNyZWF0ZUVsZW1lbnQsdiBhcyBoLGQgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsaSBhcyBpc1ZhbGlkRWxlbWVudCxfIGFzIENvbXBvbmVudCxCIGFzIGNsb25lRWxlbWVudCxEIGFzIGNyZWF0ZUNvbnRleHQsQSBhcyB0b0NoaWxkQXJyYXksbCBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixvPTAsaT1bXSxjPW4uX19iLGY9bi5fX3IsZT1uLmRpZmZlZCxhPW4uX19jLHY9bi51bm1vdW50O2Z1bmN0aW9uIG0odCxyKXtuLl9faCYmbi5fX2godSx0LG98fHIpLG89MDt2YXIgaT11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7fSksaS5fX1t0XX1mdW5jdGlvbiBsKG4pe3JldHVybiBvPTEscCh3LG4pfWZ1bmN0aW9uIHAobixyLG8pe3ZhciBpPW0odCsrLDIpO3JldHVybiBpLnQ9bixpLl9fY3x8KGkuX189W28/byhyKTp3KHZvaWQgMCxyKSxmdW5jdGlvbihuKXt2YXIgdD1pLnQoaS5fX1swXSxuKTtpLl9fWzBdIT09dCYmKGkuX189W3QsaS5fX1sxXV0saS5fX2Muc2V0U3RhdGUoe30pKX1dLGkuX19jPXUpLGkuX199ZnVuY3Rpb24geShyLG8pe3ZhciBpPW0odCsrLDMpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBoKHIsbyl7dmFyIGk9bSh0KyssNCk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX2gucHVzaChpKSl9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gbz01LGQoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIF8obix0LHUpe289NixoKGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQoKSk6biYmKG4uY3VycmVudD10KCkpfSxudWxsPT11P3U6dS5jb25jYXQobikpfWZ1bmN0aW9uIGQobix1KXt2YXIgcj1tKHQrKyw3KTtyZXR1cm4gayhyLl9fSCx1KSYmKHIuX189bigpLHIuX19IPXUsci5fX2g9biksci5fX31mdW5jdGlvbiBBKG4sdCl7cmV0dXJuIG89OCxkKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIEYobil7dmFyIHI9dS5jb250ZXh0W24uX19jXSxvPW0odCsrLDkpO3JldHVybiBvLmM9bixyPyhudWxsPT1vLl9fJiYoby5fXz0hMCxyLnN1Yih1KSksci5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBUKHQsdSl7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUodT91KHQpOnQpfWZ1bmN0aW9uIHEobil7dmFyIHI9bSh0KyssMTApLG89bCgpO3JldHVybiByLl9fPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5fXyYmci5fXyhuKSxvWzFdKG4pfSksW29bMF0sZnVuY3Rpb24oKXtvWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiB4KCl7aS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX0pLGk9W119bi5fX2I9ZnVuY3Rpb24obil7dT1udWxsLGMmJmMobil9LG4uX19yPWZ1bmN0aW9uKG4pe2YmJmYobiksdD0wO3ZhciByPSh1PW4uX19jKS5fX0g7ciYmKHIuX19oLmZvckVhY2goZyksci5fX2guZm9yRWFjaChqKSxyLl9faD1bXSl9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2UmJmUodCk7dmFyIG89dC5fX2M7byYmby5fX0gmJm8uX19ILl9faC5sZW5ndGgmJigxIT09aS5wdXNoKG8pJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksYiYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtiJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoeCkpLHU9dm9pZCAwfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLGQgYXMgdXNlTWVtbyxBIGFzIHVzZUNhbGxiYWNrLEYgYXMgdXNlQ29udGV4dCxUIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XHJcbiAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8uY2hpbGRyZW47XHJcbiAgICBjb25zdCByaHMgPSByaHNQcm9wcz8uY2hpbGRyZW47XHJcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHJldCA9IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuLyoqXHJcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlaXIgYGNsYXNzYCBhbmQgYGNsYXNzTmFtZWAgcHJvcGVydGllcy5cclxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBsaHMgQ2xhc3NlcyBvZiB0aGUgZmlyc3QgY29tcG9uZW50XHJcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxocywgcmhzKSB7XHJcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXHJcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cclxuICAgIHJldHVybiBtZXJnZUNsYXNzZXMobGhzLCByaHMpO1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyhsaHMsIHJocykge1xyXG4gICAgY29uc3QgbGhzQ2xhc3MgPSBsaHM/LmNsYXNzO1xyXG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XHJcbiAgICBjb25zdCByaHNDbGFzcyA9IHJocz8uY2xhc3M7XHJcbiAgICBjb25zdCByaHNDbGFzc05hbWUgPSByaHM/LmNsYXNzTmFtZTtcclxuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbGV0IGxoc0NsYXNzZXMgPSBjbHN4KGxoc0NsYXNzLCBsaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBsZXQgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFsbENsYXNzZXMpLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0eXBldGVzdCgpIHtcclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgXTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzFdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzJdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s1XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbN10uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s4XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTBdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTFdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzEzXTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNsYXNzZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xyXG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJlZihpbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxyXG4gKiBAcGFyYW0gbGhzXHJcbiAqIEBwYXJhbSByaHNcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcclxuICAgICAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8ucmVmO1xyXG4gICAgICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5yZWY7XHJcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xyXG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XHJcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XHJcbiAgICAgICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByaHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vKlxyXG5mdW5jdGlvbiB0eXBldGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XHJcblxyXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWNjZXB0c1JlZihyZWY6IFJlZjxhbnk+KSB7IH1cclxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cclxuXHJcbiAgICBjb25zdCBjID0gW1xyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWY6IHVuZGVmaW5lZCB9LCB7IHJlZiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWYgfSksXHJcbiAgICBdIGFzIGNvbnN0O1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNSZWYoY1sxXSk7XHJcblxyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbMl0pO1xyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbM10pO1xyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIFRPRE9cclxuICAgIGFjY2VwdHNSZWYoY1s1XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbNl0pO1xyXG4gICAgYWNjZXB0c1JlZihjWzddKTtcclxuICAgIGFjY2VwdHNSZWYoY1s4XSk7XHJcbn1cclxuKi9cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcclxuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcclxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpO1xyXG59XHJcbi8qKlxyXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcclxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcclxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHJocykge1xyXG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXHJcbiAgICBpZiAoIWxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcclxuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXHJcbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXHJcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XHJcbiAgICAgICAgaWYgKCFsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpXHJcbiAgICAgICAgICAgIHJldHVybiByaHMuc3R5bGU7XHJcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXHJcbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSkge1xyXG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KGxocz8uc3R5bGUpIH0sIHJocyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QocmhzPy5zdHlsZSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvZ2ljPz8/XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXHJcbiAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBgJHtsaHMuc3R5bGV9OyR7cmhzPy5zdHlsZSA/PyBcIlwifWA7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXHJcbiAgICAgICAgLi4uKHJocz8uc3R5bGUgPz8ge30pXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcclxubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIG1lcmdlIHR3byBwcm9wcyB3aXRoIHRoZSBzYW1lIG5hbWU6ICR7c3RyfWApOyAvKiBJbnRlbnRpb25hbCAqLyB9O1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xyXG4gICAgbG9nID0gbG9nMjtcclxufVxyXG4vKipcclxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXHJcbiAqIEBwYXJhbSBsaHMyXHJcbiAqIEBwYXJhbSByaHMyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcclxuICAgICAgICAvLyBGaXJzdCwgcHV0IGluIGFsbCB0aGUgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIHJlYXNvbiBhYm91dFxyXG4gICAgICAgIC8vIGFuZCBhbGwgbGhzIHByb3BzLiBXZSdyZSBnb2luZyB0byBtZXJnZSBpbiByaHMganVzdCBhZnRlci5cclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IHJoc0NoaWxkcmVuLCBjbGFzczogcmhzQ2xhc3MsIGNsYXNzTmFtZTogcmhzQ2xhc3NOYW1lLCBzdHlsZTogcmhzU3R5bGUsIHJlZjogcmhzUmVmLCAuLi5yaHMgfSA9IHJoczI7XHJcbiAgICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgICAgLi4ubGhzLFxyXG4gICAgICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMoKShsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzMiwgcmhzMilcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQucmVmO1xyXG4gICAgICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcclxuICAgICAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcclxuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2hpbGRyZW47XHJcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxyXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cclxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xyXG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVZ2guXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcclxuICAgIGlmICghbGhzKVxyXG4gICAgICAgIHJldHVybiByaHM7XHJcbiAgICBpZiAoIXJocylcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xyXG4gICAgICAgIGxldCBydiA9IHJocyguLi5hcmdzKTtcclxuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcclxuICAgIH07XHJcbn1cclxuLypcclxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XHJcblxyXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xyXG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcclxuXHJcbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XHJcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xyXG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcclxuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXHJcbiAgICBjb25zdCBtMzogTTEgPSAwO1xyXG5cclxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XHJcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xyXG4gICAgY29uc3QgbTY6IE0yID0gMDtcclxuXHJcbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xyXG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XHJcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuXHJcblxyXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XHJcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XHJcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XHJcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XHJcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XHJcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XHJcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XHJcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XHJcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XHJcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XHJcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XHJcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XHJcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XHJcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XHJcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XHJcblxyXG5cclxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcbn1cclxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxyXG4qLyBcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBTbGlnaHRseSBlbmhhbmNlZCB2ZXJzaW9uIG9mIGB1c2VTdGF0ZWAgdGhhdCBpbmNsdWRlcyBhIGdldHRlciB0aGF0IHJlbWFpbnMgY29uc3RhbnRcclxuICogKGkuZS4geW91IGNhbiB1c2UgaXQgaW4gYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpdCBiZWluZyBhIGRlcGVuZGVuY3kpLlxyXG4gKlxyXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLyBXZSBrZWVwIGJvdGgsIGJ1dCBvdmVycnJpZGUgdGhlIGBzZXRTdGF0ZWAgZnVuY3Rpb25hbGl0eVxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhdGUpO1xyXG4gICAgLy8gSGlqYWNrIHRoZSBub3JtYWwgc2V0dGVyIGZ1bmN0aW9uIFxyXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXHJcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0U3RhdGVQKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xyXG4gICAgY29uc29sZS5hc3NlcnQocmVmLmN1cnJlbnQgPT09IHN0YXRlKTtcclxuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBnZXRTdGF0ZV07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXHJcbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXHJcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxyXG4gKlxyXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcclxuICpcclxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50KCkge1xyXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxyXG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnQsIGdldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAvLyBDcmVhdGUgYSBSZWZDYWxsYmFjayB0aGF0J3MgZmlyZWQgd2hlbiBtb3VudGVkIFxyXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpXHJcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VSZWZFbGVtZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyByZWY6IG15UmVmIH0sIHByb3BzKSwgW10pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgICAgIGlmIChwMS5zdHlsZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XHJcbi8qKlxyXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cclxuICpcclxuICogVXNlIHdpdGggY2F1dGlvbiwgYW5kICoqZG8gbm90IHVzZSB0aGUgZ2V0dGVyIGluIHVzZUxheW91dEVmZmVjdCEhKipcclxuICogYHNldFN0YXRlYCdzIGdldHRlciBkb2VzIG5vdCBoYXZlIHRoaXMgcHJvYmxlbSwgYnV0IHRoZW4geW91J3JlIHVzaW5nIHlvdXIgb3duIHN0YXRlXHJcbiAqIGluc3RlYWQgb2YgYW4gZXhpc3RpbmcgdmFsdWUsIHdoaWNoIG1pZ2h0IG5vdCBhbHdheXMgYmUgZmVhc2libGUuXHJcbiAqXHJcbiAqIFdlaWdoIHlvdXIgb3B0aW9ucywgYW5kIGhvcGVmdWxseSBvbmUgb2YgdGhlbSBnZXRzIHRoZSBqb2IgZG9uZS5cclxuICpcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlR2V0dGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xyXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+IHZhbHVlKTtcclxuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50ID09PSBVbnNldCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHJldHJpZXZlZCBmcm9tIHVzZVN0YWJsZUdldHRlcigpIGNhbm5vdCBiZSBjYWxsZWQgZnJvbSB1c2VMYXlvdXRFZmZlY3QoKS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG4vKipcclxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxyXG4gKiBzbyB0aGF0IGl0IGNhbiBiZSBleGNsdWRlZCBmcm9tIHRoZSBkZXBlbmRlbmN5IGFycmF5cyBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcy5cclxuICpcclxuICogRE8gTk9UIFVTRSBUSEUgUkVTVUxUIElOIHVzZUxheW91dEVmZmVjdCEhXHJcbiAqXHJcbiAqIFRPRE86IEludmVzdGlnYXRlIG9wdGlvbnMuZGlmZmVkIGlmIHRoZSB1c2VMYXlvdXRFZmZlY3QgbGltaXRhdGlvbiBiZWNvbWVzIGxpbWl0bGVzc2x5IGxpbWl0aW5nLlxyXG4gKlxyXG4gKiBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTQwOTkjaXNzdWVjb21tZW50LTY1OTI5ODQyMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIgPSB1c2VTdGFibGVHZXR0ZXIoZm4pO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcclxufVxyXG4vKipcclxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxyXG4gKlxyXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxyXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cclxuICpcclxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cclxuICpcclxuICogU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtd3JpdGluZy1tb2Rlcy8jbG9naWNhbC10by1waHlzaWNhbFxyXG4gKlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcclxuICogKiBgZ2V0TG9naWNhbERpcmVjdGlvbmA6IHJldHJpZXZlcyBhIGBMb2dpY2FsRGlyZWN0aW9uSW5mb2AgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlbGVtZW50LiAoRnVuY3Rpb24gaXMgY29uc3RhbnQgYmV0d2VlbiByZW5kZXJzKVxyXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxyXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cclxuICogKiBgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbmA6ICBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiIHRvIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IFt3cml0aW5nTW9kZSwgc2V0V3JpdGluZ01vZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdGV4dE9yaWVudGF0aW9uLCBzZXRUZXh0T3JpZW50YXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB3cml0aW5nTW9kZVJlZiA9IHVzZVJlZih3cml0aW5nTW9kZSk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25SZWYgPSB1c2VSZWYoZGlyZWN0aW9uKTtcclxuICAgIGNvbnN0IHRleHRPcmllbnRhdGlvblJlZiA9IHVzZVJlZih0ZXh0T3JpZW50YXRpb24pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgd3JpdGluZ01vZGVSZWYuY3VycmVudCA9IHdyaXRpbmdNb2RlOyB9LCBbd3JpdGluZ01vZGVdKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudCA9IHRleHRPcmllbnRhdGlvbjsgfSwgW3RleHRPcmllbnRhdGlvbl0pO1xyXG4gICAgLy8gVE9ETzogVGhlcmUncyBubyB3YXkgdG8gcmVmcmVzaCB3aGljaCB3cml0aW5nIG1vZGUgd2UgaGF2ZSBvbmNlIG1vdW50ZWQuXHJcbiAgICAvLyBJZiB0aGUgd3JpdGluZyBtb2RlIGNoYW5nZXMsIHRoZSB3aG9sZSBjb21wb25lbnQgbmVlZHMgdG8gXHJcbiAgICAvLyBtb3VudC91bm1vdW50IGJlY2F1c2UgKG1vcmUtb3ItbGVzcyBpbiBvcmRlciBvZiBpbXBvcnRhbmNlKVxyXG4gICAgLy8gICBBLiBUaGVyZSdzIG5vIHdheSB0byB3YXRjaCBmb3IgQ1NTIHN0eWxlIGNoYW5nZXNcclxuICAgIC8vICAgQi4gQ2FsbGluZyBnZXRDb21wdXRlZFN0eWxlIGFmdGVyIGV2ZXJ5IHJlbmRlciBmb3IgZXZlcnkgZWxlbWVudCBnZXRzIGV4cGVuc2l2ZSBmYXN0IGFuZFxyXG4gICAgLy8gICBDLiBJcyBub3QgbmVjZXNzYXJ5IGZvciA5OSUgb2YgdXNlIGNhc2VzIHRoYXQgd2lsbCBuZXZlciBzd2l0Y2ggd3JpdGluZy1tb2RlIHdpdGhpbiBhIHNpbmdsZSBjb21wb25lbnRcclxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxyXG4gICAgLy9cclxuICAgIC8vIE1heWJlIHRoZXJlIGNvdWxkIGJlIGEgY29udGV4dCBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZW1vdGVseSB1cGRhdGUgYWxsIGNvbXBvbmVudHMgdGhhdCB1c2UgdGhpcyBob29rP1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjb25zdCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBjb21wdXRlZFN0eWxlcy50ZXh0T3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIHNldFdyaXRpbmdNb2RlKHcgfHwgXCJob3Jpem9udGFsLXRiXCIpO1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oZCB8fCBcInJ0bFwiKTtcclxuICAgICAgICAgICAgc2V0VGV4dE9yaWVudGF0aW9uKHQgfHwgXCJtaXhlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZWxlbWVudF0pO1xyXG4gICAgY29uc3QgZ2V0TG9naWNhbERpcmVjdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBsZXQgd3JpdGluZ01vZGUgPSB3cml0aW5nTW9kZVJlZi5jdXJyZW50O1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25SZWYuY3VycmVudDtcclxuICAgICAgICBsZXQgdGV4dE9yaWVudGF0aW9uID0gdGV4dE9yaWVudGF0aW9uUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKCF3cml0aW5nTW9kZSB8fCAhZGlyZWN0aW9uIHx8ICF0ZXh0T3JpZW50YXRpb24pXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICh0ZXh0T3JpZW50YXRpb24gPT0gXCJ1cHJpZ2h0XCIpXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwibHRyXCI7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uV3JpdGluZ01vZGVzW3dyaXRpbmdNb2RlID8/IFwiaG9yaXpvbnRhbC10YlwiXVtkaXJlY3Rpb24gPz8gXCJsdHJcIl1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW3dyaXRpbmdNb2RlUmVmLCBkaXJlY3Rpb25SZWYsIHRleHRPcmllbnRhdGlvblJlZl0pO1xyXG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIFwiaW5saW5lXCI7XHJcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcclxuICAgIH0sIFtnZXRMb2dpY2FsRGlyZWN0aW9uXSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRPcmllbnRhdGlvbiA9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uYmxvY2tPcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcclxuICAgIGNvbnN0IGNvbnZlcnRFbGVtZW50U2l6ZSA9IHVzZUNhbGxiYWNrKChlbGVtZW50U2l6ZSwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAvLyBTaXplIGlzIHJlbGF0aXZlbHkgc2ltcGxlXHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcclxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjQpfWBdKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tJbnNldCxcclxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0TG9naWNhbERpcmVjdGlvbixcclxuICAgICAgICBjb252ZXJ0RWxlbWVudFNpemUsXHJcbiAgICAgICAgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uLFxyXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25cclxuICAgIH07XHJcbn1cclxuO1xyXG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XHJcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgICBibG9ja0RpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGlubGluZVNpemU6IFwid2lkdGhcIixcclxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGJSdGwgPSB7XHJcbiAgICAuLi5Ib3Jpem9udGFsVGJMdHIsXHJcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxMdHIgPSB7XHJcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXHJcbiAgICBibG9ja0RpcmVjdGlvbjogXCJydGxcIixcclxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcclxuICAgIGlubGluZVNpemU6IFwiaGVpZ2h0XCIsXHJcbiAgICBibG9ja1NpemU6IFwid2lkdGhcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJydGxcIlxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsTHRyID0geyAuLi5WZXJ0aWNhbFJsTHRyIH07XHJcbmNvbnN0IFNpZGV3YXlzUmxSdGwgPSB7IC4uLlZlcnRpY2FsUmxSdGwgfTtcclxuY29uc3QgVmVydGljYWxMckx0ciA9IHtcclxuICAgIC4uLlZlcnRpY2FsUmxMdHIsXHJcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcclxufTtcclxuY29uc3QgVmVydGljYWxMclJ0bCA9IHtcclxuICAgIC4uLlZlcnRpY2FsUmxSdGwsXHJcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcclxufTtcclxuY29uc3QgU2lkZXdheXNMdEx0ciA9IHtcclxuICAgIC4uLlZlcnRpY2FsTHJMdHIsXHJcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCIsXHJcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwiYnR0XCIsXHJcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcclxufTtcclxuY29uc3QgU2lkZXdheXNMdFJ0bCA9IHtcclxuICAgIC4uLlNpZGV3YXlzTHRMdHIsXHJcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCJcclxufTtcclxuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xyXG4gICAgbHRyOiBIb3Jpem9udGFsVGJMdHIsXHJcbiAgICBydGw6IEhvcml6b250YWxUYlJ0bFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbFJsID0ge1xyXG4gICAgbHRyOiBWZXJ0aWNhbFJsTHRyLFxyXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsTHIgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsTHJSdGxcclxufTtcclxuY29uc3QgU2lkZXdheXNSbCA9IHtcclxuICAgIGx0cjogU2lkZXdheXNSbEx0cixcclxuICAgIHJ0bDogU2lkZXdheXNSbFJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0xyID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c0x0THRyLFxyXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXHJcbn07XHJcbmNvbnN0IFdyaXRpbmdNb2RlcyA9IHtcclxuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXHJcbiAgICBcInZlcnRpY2FsLWxyXCI6IFZlcnRpY2FsTHIsXHJcbiAgICBcInZlcnRpY2FsLXJsXCI6IFZlcnRpY2FsUmwsXHJcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXHJcbiAgICBcInNpZGV3YXlzLXJsXCI6IFNpZGV3YXlzUmxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCBhcyB1c2VMYXlvdXRFZmZlY3ROYXRpdmUsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXHJcbiAqIHRoYXQgYWxsb3cgYWNjZXNzaW5nIHRoZSBwcmV2aW91cyB2YWx1ZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXHJcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBlZmZlY3RcclxuICogQHBhcmFtIGlucHV0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChlZmZlY3QsIGlucHV0cykge1xyXG4gICAgY29uc3QgcHJldklucHV0cyA9IHVzZVJlZihpbnB1dHMpO1xyXG4gICAgY29uc3QgZWZmZWN0MiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgY2hhbmdlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5tYXgocHJldklucHV0cy5jdXJyZW50Lmxlbmd0aCwgaW5wdXRzLmxlbmd0aCk7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAocHJldklucHV0cy5jdXJyZW50W2ldICE9IGlucHV0c1tpXSlcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXQgPSBlZmZlY3QocHJldklucHV0cy5jdXJyZW50LCBjaGFuZ2VzKTtcclxuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbiAgICB1c2VMYXlvdXRFZmZlY3ROYXRpdmUoZWZmZWN0MiwgaW5wdXRzKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlVGltZW91dCh7IHRpbWVvdXQsIGNhbGxiYWNrLCB0cmlnZ2VySW5kZXggfSkge1xyXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7IHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gbnVsbDsgY2FsbGJhY2soKTsgfSk7XHJcbiAgICBjb25zdCBnZXRUaW1lb3V0ID0gdXNlU3RhYmxlR2V0dGVyKHRpbWVvdXQpO1xyXG4gICAgLy8gU2V0IGFueSB0aW1lIHdlIHN0YXJ0IHRpbWVvdXQuXHJcbiAgICAvLyBVbnNldCBhbnkgdGltZSB0aGUgdGltZW91dCBjb21wbGV0ZXNcclxuICAgIGNvbnN0IHN0YXJ0VGltZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHRpbWVvdXRJc051bGwgPSAodGltZW91dCA9PSBudWxsKTtcclxuICAgIC8vIEFueSB0aW1lIHRoZSB0cmlnZ2VySW5kZXggY2hhbmdlcyAoaW5jbHVkaW5nIG9uIG1vdW50KVxyXG4gICAgLy8gcmVzdGFydCB0aGUgdGltZW91dC4gIFRoZSB0aW1lb3V0IGRvZXMgTk9UIHJlc2V0XHJcbiAgICAvLyB3aGVuIHRoZSBkdXJhdGlvbiBvciBjYWxsYmFjayBjaGFuZ2VzLCBvbmx5IHRyaWdnZXJJbmRleC5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodGltZW91dElzTnVsbCA9PSAodGltZW91dCA9PSBudWxsKSk7XHJcbiAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdGFydFRpbWVSZWYuY3VycmVudCA9ICsobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldFRpbWVvdXQoc3RhYmxlQ2FsbGJhY2ssIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RyaWdnZXJJbmRleCwgdGltZW91dElzTnVsbF0pO1xyXG4gICAgY29uc3QgZ2V0RWxhcHNlZFRpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICgrKG5ldyBEYXRlKCkpKSAtICgrKHN0YXJ0VGltZVJlZi5jdXJyZW50ID8/IG5ldyBEYXRlKCkpKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGdldFJlbWFpbmluZ1RpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZW91dCA9IGdldFRpbWVvdXQoKTtcclxuICAgICAgICByZXR1cm4gdGltZW91dCA9PSBudWxsID8gbnVsbCA6IE1hdGgubWF4KDAsIHRpbWVvdXQgLSBnZXRFbGFwc2VkVGltZSgpKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7IGdldEVsYXBzZWRUaW1lLCBnZXRSZW1haW5pbmdUaW1lIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRpbWVvdXQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VUaW1lb3V0IH0gZnJvbSBcIi4vdXNlLXRpbWVvdXRcIjtcclxuaW1wb3J0IHsgdXNlTG9naWNhbERpcmVjdGlvbiB9IGZyb20gXCIuL3VzZS1sb2dpY2FsLWRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuLyoqXHJcbiAqIFdoZW4gdXNlZCBpbiB0YW5kZW0gd2l0aCBgdXNlUm92aW5nVGFiSW5kZXhgLCBhbGxvd3MgY29udHJvbCBvZlxyXG4gKiB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0aGUgYXJyb3cga2V5cy5cclxuICpcclxuICogQHNlZSB1c2VMaXN0TmF2aWdhdGlvbiwgd2hpY2ggcGFja2FnZXMgZXZlcnl0aGluZyB1cCB0b2dldGhlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgaW5kZXgsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvUHJldiwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlQXJyb3dLZXlzLCBkaXNhYmxlSG9tZUVuZEtleXMgfSkge1xyXG4gICAgbmF2aWdhdGlvbkRpcmVjdGlvbiA/Pz0gXCJlaXRoZXJcIjtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxyXG4gICAgLy8gVE9ETzogS2VlcCB0cmFjayBvZiB0aGUgb3JpZ2luYWwgaW5kZXggYW5kIGtlZXAgaXQsIGF0IGxlYXN0IHVudGlsIGtleWJvYXJkIG5hdmlnYXRpb24uXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvRmlyc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZENvdW50ID4gMCAmJiBpbmRleCA+PSBjaGlsZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luZGV4LCBjaGlsZENvdW50LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0XSk7XHJcbiAgICAvLyBUaGVzZSBhbGxvdyB1cyB0byBtYW5pcHVsYXRlIHdoYXQgb3VyIGN1cnJlbnQgdGFiYmFibGUgY2hpbGQgaXMuXHJcbiAgICAvKmNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleDogbnVtYmVyKSA9PiB7IHNldEluZGV4KGluZGV4IDwgMCA/IChtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoICsgaW5kZXgpIDogaW5kZXgpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA+PSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMT8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDEgOiArK2kpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA8IDA/IDAgOiAtLWkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvU3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleCgwKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KC0xKTsgfSwgW25hdmlnYXRlVG9JbmRleF0pOyovXHJcbiAgICBjb25zdCB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICAvLyBQcmVmZXIgdGhlIHBhcmVudCBlbGVtZW50J3MgZGlyZWN0aW9uIHNvIHRoYXQgd2UncmUgbm90IGNhbGxpbmcgZ2V0Q29tcHV0ZWRTdHlsZVxyXG4gICAgICAgIC8vIG9uIGV2ZXJ5IHNpbmdsZSBpbmRpdmlkdWFsIGNoaWxkLCB3aGljaCBpcyBsaWtlbHkgcmVkdW5kYW50LlxyXG4gICAgICAgIGNvbnN0IHsgY29udmVydEVsZW1lbnRTaXplLCBnZXRMb2dpY2FsRGlyZWN0aW9uIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQgPz8gZWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMgPSAocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxyXG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxvd3NCbG9ja05hdmlnYXRpb24gPSAobmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImJsb2NrXCIgfHwgbmF2aWdhdGlvbkRpcmVjdGlvbiA9PSBcImVpdGhlclwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmJsb2NrT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA6IGFsbG93c0lubGluZU5hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1ByZXYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbkFsbG93ZWQgPSAoIWRpc2FibGVBcnJvd0tleXMgJiYgKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IGFsbG93c0lubGluZU5hdmlnYXRpb24gOiBhbGxvd3NCbG9ja05hdmlnYXRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVIb21lRW5kS2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFbmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgcHJvcHMpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtuYXZpZ2F0aW9uRGlyZWN0aW9uLCBuYXZpZ2F0ZVRvTmV4dCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsICEhZGlzYWJsZUFycm93S2V5cywgISFkaXNhYmxlSG9tZUVuZEtleXNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkLFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIGZvciB0aGUgc2VsZWN0aW9uIG9mIGEgbWFuYWdlZCBjaGlsZCBieSB0eXBpbmcgdGhlIGdpdmVuIHRleHQgYXNzb2NpYXRlZCB3aXRoIGl0LlxyXG4gKlxyXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXgsIHR5cGVhaGVhZFRpbWVvdXQsIHNldEluZGV4IH0pIHtcclxuICAgIC8vIEZvciB0eXBlYWhlYWQsIGtlZXAgdHJhY2sgb2Ygd2hhdCBvdXIgY3VycmVudCBcInNlYXJjaFwiIHN0cmluZyBpcyAoaWYgd2UgaGF2ZSBvbmUpXHJcbiAgICAvLyBhbmQgYWxzbyBjbGVhciBpdCBldmVyeSAxMDAwIG1zIHNpbmNlIHRoZSBsYXN0IHRpbWUgaXQgY2hhbmdlZC5cclxuICAgIC8vIE5leHQsIGtlZXAgYSBtYXBwaW5nIG9mIHR5cGVhaGVhZCB2YWx1ZXMgdG8gaW5kaWNlcyBmb3IgZmFzdGVyIHNlYXJjaGluZy5cclxuICAgIC8vIEFuZCwgZm9yIHRoZSB1c2VyJ3Mgc2FrZSwgbGV0IHRoZW0ga25vdyB3aGVuIHRoZWlyIHR5cGVhaGVhZCBjYW4ndCBtYXRjaCBhbnl0aGluZyBhbnltb3JlXHJcbiAgICBjb25zdCBbY3VycmVudFR5cGVhaGVhZCwgc2V0Q3VycmVudFR5cGVhaGVhZCwgZ2V0Q3VycmVudFR5cGVhaGVhZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZVRpbWVvdXQoeyB0aW1lb3V0OiB0eXBlYWhlYWRUaW1lb3V0ID8/IDEwMDAsIGNhbGxiYWNrOiAoKSA9PiB7IHNldEN1cnJlbnRUeXBlYWhlYWQobnVsbCk7IHNldEludmFsaWRUeXBlYWhlYWQobnVsbCk7IH0sIHRyaWdnZXJJbmRleDogY3VycmVudFR5cGVhaGVhZCB9KTtcclxuICAgIGNvbnN0IHNvcnRlZFR5cGVhaGVhZEluZm8gPSB1c2VSZWYoW10pO1xyXG4gICAgY29uc3QgW2ludmFsaWRUeXBlYWhlYWQsIHNldEludmFsaWRUeXBlYWhlYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gSGFuZGxlIHR5cGVhaGVhZCBmb3IgaW5wdXQgbWV0aG9kIGVkaXRvcnMgYXMgd2VsbFxyXG4gICAgLy8gRXNzZW50aWFsbHksIHdoZW4gYWN0aXZlLCBpZ25vcmUgZnVydGhlciBrZXlzIFxyXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSB3YWl0aW5nIGZvciBhIENvbXBvc2l0aW9uRW5kIGV2ZW50XHJcbiAgICBjb25zdCBbaW1lQWN0aXZlLCBzZXRJbWVBY3RpdmUsIGdldEltZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBCZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50cyBmaXJlICphZnRlcioga2V5ZG93biBldmVudHMgXHJcbiAgICAvLyAoYnV0IHdpdGhpbiB0aGUgc2FtZSB0YXNrLCB3aGljaCwgVE9ETywgY291bGQgYmUgYnJvd3Nlci1kZXBlbmRlbnQpLFxyXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnQgd2UncmUgbGlzdGVuaW5nIGZvciBvbiB0aGUgZmlyc3Qga2V5ZG93bi5cclxuICAgIGNvbnN0IFtuZXh0VHlwZWFoZWFkQ2hhciwgc2V0TmV4dFR5cGVhaGVhZENoYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0VHlwZWFoZWFkQ2hhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHR5cGVhaGVhZCA9PiAoKHR5cGVhaGVhZCA/PyBcIlwiKSArIG5leHRUeXBlYWhlYWRDaGFyKSk7XHJcbiAgICAgICAgICAgIHNldE5leHRUeXBlYWhlYWRDaGFyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtuZXh0VHlwZWFoZWFkQ2hhcl0pO1xyXG4gICAgY29uc3QgY29tcGFyYXRvciA9IHVzZVN0YWJsZUNhbGxiYWNrKChsaHMsIHJocykgPT4ge1xyXG4gICAgICAgIGxldCBjb21wYXJlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGhzID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiByaHMudGV4dCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAvLyBGb3IgdGhlIHB1cnBvc2VzIG9mIHR5cGVhaGVhZCwgb25seSBjb21wYXJlIGEgc3RyaW5nIG9mIHRoZSBzYW1lIHNpemUgYXMgb3VyIGN1cnJlbnRseSB0eXBlZCBzdHJpbmcuXHJcbiAgICAgICAgICAgIC8vIEJ5IG5vcm1hbGl6aW5nIHRoZW0gZmlyc3QsIHdlIGVuc3VyZSB0aGlzIGJ5dGUtYnktYnl0ZSBoYW5kbGluZyBvZiByYXcgY2hhcmFjdGVyIGRhdGEgd29ya3Mgb3V0IG9rYXkuXHJcbiAgICAgICAgICAgIGxldCBzYWZlTGhzID0gbGhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcclxuICAgICAgICAgICAgbGV0IHNhZmVSaHMgPSByaHMudGV4dC5ub3JtYWxpemUoXCJORkRcIikuc3Vic3RyKDAsIHNhZmVMaHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKGNvbGxhdG9yKVxyXG4gICAgICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSBzYWZlTGhzLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzYWZlUmhzLnRvTG93ZXJDYXNlKCkgPz8gXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGhzIC0gcmhzO1xyXG4gICAgfSk7XHJcbiAgICAvLyBIYW5kbGUgY2hhbmdlcyBpbiB0eXBlYWhlYWQgdGhhdCBjYXVzZSBjaGFuZ2VzIHRvIHRoZSB0YWJiYWJsZSBpbmRleFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFR5cGVhaGVhZCAmJiBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBzb3J0ZWRUeXBlYWhlYWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGNvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc29ydGVkVHlwZWFoZWFkSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBoYXMgdHlwZWQgYW4gZW50cnkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAvLyAob3IgbW9yZSBzcGVjaWZpY2FsbHkgXCJmb3Igd2hpY2ggdGhlcmUgaXMgbm8gZW50cnkgdGhhdCBzdGFydHMgd2l0aCB0aGF0IGlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SW52YWxpZFR5cGVhaGVhZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICBXZSBrbm93IHJvdWdobHkgd2hlcmUsIGluIHRoZSBzb3J0ZWQgYXJyYXkgb2Ygc3RyaW5ncywgb3VyIG5leHQgdHlwZWFoZWFkIGxvY2F0aW9uIGlzLlxyXG4gICAgICAgICAgICAgICAgICBCdXQgcm91Z2hseSBpc24ndCBnb29kIGVub3VnaCBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcy5cclxuICAgICAgICAgICAgICAgICAgVG8gY29udmVydCBvdXIgc29ydGVkIGluZGV4IHRvIHRoZSB1bnNvcnRlZCBpbmRleCB3ZSBuZWVkLCB3ZSBoYXZlIHRvIGZpbmQgdGhlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgdGhhdCBtYXRjaGVzIHVzICphbmQqIChpZiBhbnkgc3VjaCBleGlzdCkgaXMgKmFmdGVyKiBvdXIgY3VycmVudCBzZWxlY3Rpb24uXHJcblxyXG4gICAgICAgICAgICAgICAgICBJbiBvdGhlciB3b3JkcywgdGhlIG9ubHkgd2F5IHR5cGVhaGVhZCBtb3ZlcyBiYWNrd2FyZHMgcmVsYXRpdmUgdG8gb3VyIGN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb24gaXMgaWYgdGhlIG9ubHkgb3RoZXIgb3B0aW9uIGlzIGJlaGluZCB1cy5cclxuXHJcbiAgICAgICAgICAgICAgICAgIEl0J3Mgbm90IHNwZWNpZmllZCBpbiBXQUktQVJJQSB3aGF0IHRvIGRvIGluIHRoYXQgY2FzZS4gIEkgc3VwcG9zZSB3cmFwIGJhY2sgdG8gdGhlIHN0YXJ0P1xyXG4gICAgICAgICAgICAgICAgICBUaG91Z2ggdGhlcmUncyBhbHNvIGEgY2FzZSBmb3IganVzdCBnb2luZyB1cHdhcmRzIHRvIHRoZSBuZWFyZXN0IHRvIHByZXZlbnQganVtcGluZXNzLlxyXG4gICAgICAgICAgICAgICAgICBCdXQgaWYgeW91J3JlIGFscmVhZHkgZG9pbmcgdHlwZWFoZWFkIG9uIGFuIHVuc29ydGVkIGxpc3QsIGxpa2UsIGp1bXBpbmVzcyBjYW4ndCBiZSBhdm9pZGVkLlxyXG4gICAgICAgICAgICAgICAgICBJIGR1bm5vLiBHb2luZyBiYWNrIHRvIHRoZSBzdGFydCBpcyB0aGUgc2ltcGxpc3QgdGhvdWdoLlxyXG5cclxuICAgICAgICAgICAgICAgICAgQmFzaWNhbGx5IHdoYXQgdGhpcyBkb2VzOiBTdGFydGluZyBmcm9tIHdoZXJlIHdlIGZvdW5kIG91cnNlbHZlcyBhZnRlciBvdXIgYmluYXJ5IHNlYXJjaCxcclxuICAgICAgICAgICAgICAgICAgc2NhbiBiYWNrd2FyZHMgYW5kIGZvcndhcmRzIHRocm91Z2ggYWxsIGFkamFjZW50IGVudHJpZXMgdGhhdCBhbHNvIGNvbXBhcmUgZXF1YWxseSBzbyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgIHdlIGNhbiBmaW5kIHRoZSBvbmUgd2hvc2UgYHVuc29ydGVkSW5kZXhgIGlzIHRoZSBsb3dlc3QgYW1vbmdzdCBhbGwgb3RoZXIgZXF1YWwgc3RyaW5nc1xyXG4gICAgICAgICAgICAgICAgICAoYW5kIGFsc28gdGhlIGxvd2VzdCBgdW5zb3J0ZWRJbmRleGAgeWFkZGEgeWFkZGEgZXhjZXB0IHRoYXQgaXQgY29tZXMgYWZ0ZXIgdXMpLlxyXG5cclxuICAgICAgICAgICAgICAgICAgVE9ETzogVGhlIGJpbmFyeSBzZWFyY2ggc3RhcnRzIHRoaXMgb2ZmIHdpdGggYSBzb2xpZCBPKGxvZyBuKSwgYnV0IG9uZS1jaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgICAgc2VhcmNoZXMgYXJlLCB0aGFua3MgdG8gcGlnZW9uaG9sZSBwcmluY2lwYWwsIGV2ZW50dWFsbHkgZ3VhcmFudGVlZCB0byBiZWNvbWVcclxuICAgICAgICAgICAgICAgICAgTyhuKmxvZyBuKS4gVGhpcyBpcyBhbm5veWluZyBidXQgcHJvYmFibHkgbm90IGVhc2lseSBzb2x2YWJsZT8gVGhlcmUgY291bGQgYmUgYW5cclxuICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uIGZvciBvbmUtY2hhcmFjdGVyIHN0cmluZ3MsIGJ1dCB0aGF0J3MganVzdCBraWNraW5nIHRoZSBjYW4gZG93blxyXG4gICAgICAgICAgICAgICAgICB0aGUgcm9hZC4gTWF5YmUgb25lIG9yIHR3byBjaGFyYWN0ZXJzIHdvdWxkIGJlIGdvb2QgZW5vdWdoIHRob3VnaC5cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBhcmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBjYW5kaWRhdGVzJyBwb3NpdGlvbnMgaW4gYm90aCBvdXIgc29ydGVkIGFycmF5IGFuZCB0aGUgdW5zb3J0ZWQgRE9NLlxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4QWxsID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSB0d28gYXJlIG9ubHkgc2V0IGZvciBlbGVtZW50cyB0aGF0IGFyZSBhaGVhZCBvZiB1cywgYnV0IHRoZSBwcmluY2lwbGUncyB0aGUgc2FtZSBvdGhlcndpc2VcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVCZXN0Rml0ID0gKHUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9PSBudWxsIHx8IHUgPCBsb3dlc3RVbnNvcnRlZEluZGV4QWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSB1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleEFsbCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQpICYmIHUgPiAoZ2V0SW5kZXgoKSA/PyAtSW5maW5pdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRUeXBlYWhlYWRJbmRleDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAtLWk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5sZW5ndGggJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5kZXgoc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50W2xvd2VzdFNvcnRlZEluZGV4TmV4dF0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleEFsbF0udW5zb3J0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFR5cGVhaGVhZF0pO1xyXG4gICAgY29uc3QgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkID0gdXNlQ2FsbGJhY2soKHsgdGV4dCwgLi4uaSB9KSA9PiB7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEZpbmQgd2hlcmUgdG8gaW5zZXJ0IHRoaXMgaXRlbS5cclxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgYWxsIGluZGV4IHZhbHVlcyBzaG91bGQgYmUgdW5pcXVlLCB0aGUgcmV0dXJuZWQgc29ydGVkSW5kZXhcclxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgcmVmZXIgdG8gYSBuZXcgbG9jYXRpb24gKGkuZS4gYmUgbmVnYXRpdmUpICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHNvcnRlZEluZGV4ID0gYmluYXJ5U2VhcmNoKHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudCwgdGV4dCwgY29tcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA8IDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2UoLXNvcnRlZEluZGV4IC0gMSwgMCwgeyB0ZXh0LCB1bnNvcnRlZEluZGV4OiBpLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHVubW91bnRpbmcsIGZpbmQgd2hlcmUgd2Ugd2VyZSBhbmQgcmVtb3ZlIG91cnNlbHZlcy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZ2Fpbiwgd2Ugc2hvdWxkIGFsd2F5cyBmaW5kIG91cnNlbHZlcyBiZWNhdXNlIHRoZXJlIHNob3VsZCBiZSBubyBkdXBsaWNhdGUgdmFsdWVzIGlmIGVhY2ggaW5kZXggaXMgdW5pcXVlLlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4ID49IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbdGV4dF0pO1xyXG4gICAgICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uU3RhcnQgPSAoZSkgPT4geyBzZXRJbWVBY3RpdmUodHJ1ZSk7IH07XHJcbiAgICAgICAgICAgIGNvbnN0IG9uQ29tcG9zaXRpb25FbmQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dFR5cGVhaGVhZENoYXIoZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldEltZUFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWVBY3RpdmUgPSBnZXRJbWVBY3RpdmUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBlLmtleTtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBoYW5kbGVkIGJ5IHR5cGVhaGVhZCAoaS5lLiBhc3N1bWUgdGhpcyBpcyBhIGtleWJvYXJkIHNob3J0Y3V0KVxyXG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbWVBY3RpdmUgJiYgZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd2F5IHRoYXQgZG9lc24ndCBzcGxpdCBVVEYtMTYgc3Vycm9nYXRlcy5cclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHQgPT4gdCA9PT0gbnVsbCA/IG51bGwgOiBbLi4udF0ucmV2ZXJzZSgpLnNsaWNlKDEpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUga2V5IHByb3BlcnR5IHJlcHJlc2VudHMgdGhlIHR5cGVkIGNoYXJhY3RlciBPUiB0aGUgXCJuYW1lZCBrZXkgYXR0cmlidXRlXCIgb2YgdGhlIGtleSBwcmVzc2VkLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUncyBubyBkZWZpbml0ZSB3YXkgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSwgYnV0IGZvciBhbGwgaW50ZW50cyBhbmQgcHVycG9zZXNcclxuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBubyBvbmUtY2hhcmFjdGVyIG5hbWVzLCBhbmQgdGhlcmUgYXJlIG5vIG5vbi1BU0NJSS1hbHBoYSBuYW1lcy5cclxuICAgICAgICAgICAgICAgIC8vIFRodXMsIGFueSBvbmUtY2hhcmFjdGVyIG9yIG5vbi1BU0NJSSB2YWx1ZSBmb3IgYGtleWAgaXMgKmFsbW9zdCBjZXJ0YWlubHkqIGEgdHlwZWQgY2hhcmFjdGVyLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNDaGFyYWN0ZXJLZXkgPSAoa2V5Lmxlbmd0aCA9PT0gMSB8fCAhL15bQS1aYS16XS8udGVzdChrZXkpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0NoYXJhY3RlcktleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gXCIgXCIgJiYgKGdldEN1cnJlbnRUeXBlYWhlYWQoKSA/PyBcIlwiKS50cmltKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgYmVjYXVzZSBhIHNwYWNlYmFyIGNhbid0IGV2ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluaXRpYXRlIGEgdHlwZWFoZWFkLCBvbmx5IGNvbnRpbnVlIG9uZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKFNwZWNpZmljYWxseSwgbGV0IHRoZSBldmVudCBjb250aW51ZSBwcm9wYWdhdGlvbiBpbiB0aGlzIGNhc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IFdvbid0IGJlIHRydWUgZm9yIHRoZSBmaXJzdCBrZXlkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3aWxsIGJlIG92ZXJ3cml0dGVuIGJlZm9yZSB1c2VMYXlvdXRFZmZlY3QgaXMgY2FsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGFjdHVhbGx5IGFwcGx5IHRoZSBjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWVBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUmVmRWxlbWVudFByb3BzKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0pLCBwcm9wcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wc1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCxcclxuICAgICAgICBjdXJyZW50VHlwZWFoZWFkLFxyXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWQsXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXHJcbiAqXHJcbiAqIEl0J3MgdXNlZCBoZXJlIHRvIHF1aWNrbHkgZmluZCBhIGdvb2Qgc3BvdCB0byBzdGFydCBzZWFyY2hpbmcgZm9yIG91ciBuZXh0IHR5cGVhaGVhZCBjYW5kaWRhdGUuXHJcbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcclxuICogQHBhcmFtIHdhbnRlZCBUaGUgdmFsdWUgeW91J2QgbGlrZSB0byBmaW5kXHJcbiAqIEBwYXJhbSBjb21wYXJhdG9yIENvbXBhcmVzIGB3YW50ZWRgIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgaW4gYGFycmF5YFxyXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXHJcbiAqIFRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGlzIG51bWJlciwgbWludXMgb25lLCBpcyB3aGVyZSBgd2FudGVkYCAqd291bGQqIGJlIGZvdW5kIGlmIGl0ICp3YXMqIGluIGBhcnJheWBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xyXG4gICAgdmFyIGZpcnN0SW5kZXggPSAwO1xyXG4gICAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICB2YXIgdGVzdEluZGV4ID0gKGxhc3RJbmRleCArIGZpcnN0SW5kZXgpID4+IDE7XHJcbiAgICAgICAgdmFyIGNvbXBhcmlzb25SZXN1bHQgPSBjb21wYXJhdG9yKHdhbnRlZCwgYXJyYXlbdGVzdEluZGV4XSk7XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSB0ZXN0SW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSB0ZXN0SW5kZXggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRlc3RJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLWZpcnN0SW5kZXggLSAxO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1sYXlvdXQtZWZmZWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cclxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cclxuICpcclxuICogVGhpcyBob29rIGlzIHNsaWdodGx5IG1vcmUgY29tcGxpY2F0ZWQgaW4gdGhhdCBpdCByZXR1cm5zIGJvdGggYVxyXG4gKiBwcm9wLW1vZGlmeWluZyBob29rLCBidXQgYWxzbyBhIGhvb2sgdGhhdCBlYWNoIGNoaWxkIHdpbGwgbmVlZFxyXG4gKiB0byB1c2U6IGB1c2VNYW5hZ2VkQ2hpbGRgLiAgSXQncyBzdGFibGUgYWNyb3NzIHJlbmRlcnMsIHNvIGp1c3RcclxuICogdG9zcyBpdCBpbnRvIGEgYENvbnRleHRgIHNvIHRoZSBjaGlsZHJlbiBjYW4gaGF2ZSBhY2Nlc3MgdG8gaXQuXHJcbiAqIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHRoZSBjaGlsZCB3aXRoIHRoZSBwYXJlbnQgYW5kIHByb3ZpZGVzXHJcbiAqIGl0IHdpdGggYW55IHJlcXVlc3RlZCBpbmZvcm1hdGlvbiwgYnV0IGRvZXNuJ3QgZG8gYW55dGhpbmcgZWxzZVxyXG4gKiB1bnRpbCBpdCB1bm1vdW50cyBhbmQgcmV0cmFjdHMgdGhhdCBpbmZvcm1hdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZE1hbmFnZXIoKSB7XHJcbiAgICAvLyBUaGlzIGlzIGJsaW5kbHkgdXBkYXRlZCBhbnkgdGltZSBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50cyBpdHNlbGYuXHJcbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXHJcbiAgICAvLyB3ZSBhbHNvIHJlLXJlbmRlci5cclxuICAgIGNvbnN0IFtjaGlsZFVwZGF0ZUluZGV4LCBzZXRDaGlsZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Nb3VudGVkLCBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCwgZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG90YWxDaGlsZHJlblVub3VudGVkLCBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQsIGdldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGNoaWxkcmVuQ3VycmVudGx5TW91bnRlZCA9IHRvdGFsQ2hpbGRyZW5Nb3VudGVkIC0gdG90YWxDaGlsZHJlblVub3VudGVkO1xyXG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdIC8qKiBUT0RPOiBBbnkgcHJvYmxlbXMgY2F1c2VkIGJ5IHVzaW5nIGFuIGFycmF5IHdoZW4gaXQgc2hvdWxkIGJlIGFuIG9iamVjdD8gKi8pO1xyXG4gICAgY29uc3QgbW91bnRlZENoaWxkcmVuID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IG1vdW50T3JkZXIgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IGluZGljZXNCeUVsZW1lbnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcclxuICAgIGNvbnN0IGRlbGV0ZWRJbmRpY2VzID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICAvLyBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgaW5kaWNlcyB0aGF0IGhhdmUgXCJvdmVyLW1vdW50ZWRcIiBhbmQgYnkgaG93IG11Y2guXHJcbiAgICAvLyBXZSBuZWVkIHRoaXMgc28gdGhhdCB3ZSBkb24ndCBlcmFzZSBzYXZlZCBpbmZvcm1hdGlvbiB3aGVuIGEgY29tcG9uZW50XHJcbiAgICAvLyBcIm92ZXJtb3VudHNcIiBvdmVyIGFub3RoZXIgd2hpY2ggdGhlbiwgY29ycmVjdGx5LCBzd2l0Y2hlcyAqaXRzZWxmKiB0byBzb21ldGhpbmcgZWxzZS5cclxuICAgIC8vIEluIGdlbmVyYWwsIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIHdoZW4gY29tcG9uZW50cyBhcmUgc3dhcHBpbmcgYmV0d2VlbiBpbmRpY2VzLlxyXG4gICAgLy8gQnkgdGhlIHRpbWUgdGhleSdyZSBkb25lLCB0aGlzIG1hcCBzaG91bGQgYmUgYWxsIDBzIGFnYWluLCBhdCB3aGljaCBwb2ludFxyXG4gICAgLy8gaXQncyBva2F5IHRvIGFjdHVhbGx5IHJ1biB0aGUgdW5tb3VudCBjb2RlLlxyXG4gICAgLy8gXHJcbiAgICAvLyBUT0RPOiB0aHJvdyBhIGNvbnNvbGUuYXNzZXJ0IHNvbWV3aGVyZSB0byBtYWtlIHVwIGZvciB0aGUgbG9zdCBcclxuICAgIC8vIFwiYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJ3cml0ZSB0aGlzIGNoaWxkJ3MgaW5kZXghXCIgYXNzZXJ0aW9uLlxyXG4gICAgLy8gTmFtZWx5LCBpcyB0aGlzIG1hcCBhbGwgMHMgd2hlbiB0aGUgcGFyZW50IGVsZW1lbnQgcmUtcmVuZGVycz8gXHJcbiAgICAvLyBQcm9iYWJseSBub3QgYmVjYXVzZSBvZiBzZXRDaGlsZFVwZGF0ZUluZGV4XHJcbiAgICBjb25zdCBvdmVybW91bnRDb3VudCA9IHVzZVJlZihuZXcgTWFwKCkpO1xyXG4gICAgY29uc3QgZ2V0TW91bnRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4geyByZXR1cm4gbW91bnRPcmRlci5jdXJyZW50LmdldChpbmRleCk7IH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBnZXRUb3RhbENoaWxkcmVuTW91bnRlZCgpO1xyXG4gICAgICAgICAgICBtb3VudE9yZGVyLmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIGluZGV4KTtcclxuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcclxuICAgICAgICAgICAgc2V0VG90YWxDaGlsZHJlbk1vdW50ZWQodCA9PiArK3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW91bnRPcmRlci5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50W2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZXRUb3RhbENoaWxkcmVuVW5vdW50ZWQodCA9PiArK3QpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIFtpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgLy8gQXMgc29vbiBhcyB0aGUgY29tcG9uZW50IG1vdW50cywgbm90aWZ5IHRoZSBwYXJlbnQgYW5kIHJlcXVlc3QgYSByZXJlbmRlci5cclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKFtwcmV2RWxlbWVudCwgcHJldkluZGV4XSwgY2hhbmdlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LnNldChlbGVtZW50LCBpbmZvLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnQuZGVsZXRlKGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50W2luZm8uaW5kZXhdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJtb3VudENvdW50LmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hpbGRVcGRhdGVJbmRleChjID0+ICsrYyk7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybW91bnRDb3VudC5jdXJyZW50LnNldChpbmZvLmluZGV4LCAob3Zlcm1vdW50Q291bnQuY3VycmVudC5nZXQoaW5mby5pbmRleCkgPz8gMCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlZEluZGljZXMuY3VycmVudC5hZGQoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5mby5pbmRleCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFttYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggLSAxXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50Lmxlbmd0aCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXNCeUVsZW1lbnQuY3VycmVudC5kZWxldGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtlbGVtZW50LCBpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZSBnZW5lcmFsbHkuXHJcbiAgICAgICAgLy8gKkRvbid0IHJlLXJlbmRlciosIG90aGVyd2lzZSB3ZSdkIGJlIHN0dWNrIGluIGFuXHJcbiAgICAgICAgLy8gaW5maW5pdGUgbG9vcCBldmVyeSB0aW1lIGFuIGFub255bW91cyBmdW5jdGlvbiBpcyBwYXNzZWQuXHJcbiAgICAgICAgLy8gSXQgY29tZXMgaW4gZnJvbSB0aGUgcHJvcHMgc28gdGhlIGNoaWxkIHdhcyBhbHJlYWR5IHVwZGF0ZWQgYnkgaXQgLS1cclxuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBwYXJlbnQgdG8gcmUtcmVuZGVyIGV2ZXJ5IHNpbmdsZSBjaGlsZCBhbnkgdGltZVxyXG4gICAgICAgIC8vIFwib25DbGlja1wiIHVwZGF0ZXMgb3Igd2hhdGV2ZXIuICBUaGUgcmVsZXZhbnQgY2hpbGQgYWxyZWFkeSBrbm93cyxcclxuICAgICAgICAvLyBhbmQgdGhhdCdzIHdoYXQgbWF0dGVycy5cclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcclxuICAgICAgICB9LCBbLi4uT2JqZWN0LmVudHJpZXMoaW5mbykuZmxhdCgpXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VNYW5hZ2VkQ2hpbGQsXHJcbiAgICAgICAgY2hpbGRDb3VudDogY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkLFxyXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQsXHJcbiAgICAgICAgbW91bnRlZENoaWxkcmVuOiBtb3VudGVkQ2hpbGRyZW4uY3VycmVudCxcclxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50OiBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQsXHJcbiAgICAgICAgdG90YWxDaGlsZHJlbk1vdW50ZWQsXHJcbiAgICAgICAgdG90YWxDaGlsZHJlblVub3VudGVkLFxyXG4gICAgICAgIGdldE1vdW50SW5kZXgsXHJcbiAgICAgICAgZGVsZXRlZEluZGljZXM6IGRlbGV0ZWRJbmRpY2VzLmN1cnJlbnRcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgbGV0dGluZyBjaGlsZHJlbiBrbm93IHdoZW4gdGhleSBhcmUgb3IgYXJlIG5vdCB0aGVcclxuICogY3VycmVudCBzZWxlY3RlZC9leHBhbmRlZC9mb2N1c2VkL3doYXRldmVyIGNoaWxkLlxyXG4gKlxyXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgd2hlbiBjaGlsZHJlbiBhcmUgbW91bnRlZCAmIHVubW91bnRlZCBhbmQgc3VjaC5cclxuICpcclxuICogQHBhcmFtIGFjdGl2YXRlZEluZGV4IFdoYXQgaW5kZXggdGhlIGN1cnJlbnQgc2VsZWN0ZWQgKGV0Yy4pIGNoaWxkIGlzXHJcbiAqIEBwYXJhbSBsZW5ndGggSG93IG1hbnkgY2hpbGRyZW4gZXhpc3QgKGFzIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgpXHJcbiAqIEBwYXJhbSBzZXRGbGFnIEEgZnVuY3Rpb24gdGhhdCBwcm9iYWJseSBsb29rcyBsaWtlIChpLCBmbGFnKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0QWN0aXZlKGZsYWcpXHJcbiAqIEBwYXJhbSB1c2VFZmZlY3QgV2hpY2ggdmVyc2lvbiBvZiB1c2VFZmZlY3QgdG8gdXNlLiBEZWZhdWx0IGlzIGB1c2VMYXlvdXRFZmZlY3RgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkRmxhZyhhY3RpdmF0ZWRJbmRleCwgbGVuZ3RoLCBzZXRGbGFnLCB1c2VFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3QpIHtcclxuICAgIGNvbnN0IFtwcmV2QWN0aXZhdGVkSW5kZXgsIHNldFByZXZBY3RpdmF0ZWRJbmRleCwgZ2V0UHJldkFjdGl2YXRlZEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3ByZXZDaGlsZENvdW50LCBzZXRQcmV2Q2hpbGRDb3VudCwgZ2V0UHJldkNoaWxkQ291bnRdID0gdXNlU3RhdGUobGVuZ3RoKTtcclxuICAgIC8vIEFueSB0aW1lIHRoZSBudW1iZXIgb2YgY29tcG9uZW50cyBjaGFuZ2VzLFxyXG4gICAgLy8gcmVzZXQgYW55IGluaXRpYWwsIHBvc3NpYmx5IGluY29ycmVjdCBzdGF0ZSB0aGV5IG1pZ2h0IGhhdmUgaGFkLCBqdXN0IGluIGNhc2UuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGguc2lnbihsZW5ndGggLSBnZXRQcmV2Q2hpbGRDb3VudCgpKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBnZXRQcmV2Q2hpbGRDb3VudCgpID8/IDA7IGkgIT0gbGVuZ3RoOyBpICs9IGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc2V0RmxhZyhpLCBpID09PSBhY3RpdmF0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0UHJldkNoaWxkQ291bnQobGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJldkFjdGl2YXRlZEluZGV4ID0gZ2V0UHJldkFjdGl2YXRlZEluZGV4KCk7XHJcbiAgICAgICAgaWYgKHByZXZBY3RpdmF0ZWRJbmRleCAhPSBudWxsICYmIGxlbmd0aCA+IDAgJiYgcHJldkFjdGl2YXRlZEluZGV4ID49IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIHNocmFuayBiZWxvdyB3aGF0ZXZlciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbXBvbmVudCB3YXMuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgaW5kZXggdG8gdGhlIGxhc3Qgb25lIHN0aWxsIG1vdW50ZWQuXHJcbiAgICAgICAgICAgIHNldEZsYWcobGVuZ3RoIC0gMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIChObyBuZWVkIHRvIHVuc2V0IGFueSBvZiB0aGVtIHNpbmNlIHRoZXkgYWxyZWFkeSB1bm1vdW50ZWQgdGhlbXNlbHZlcylcclxuICAgICAgICAgICAgLy8gKEFsc28gbm8gd2F5IHRvIHVuc2V0IHRoZW0gYW55d2F5IGZvciB0aGUgc2FtZSByZWFzb24pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NldEZsYWcsIGFjdGl2YXRlZEluZGV4LCBsZW5ndGhdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRGVhY3RpdmF0ZSB0aGUgcHJldmlvdXNseSBhY3RpdmF0ZWQgY29tcG9uZW50XHJcbiAgICAgICAgY29uc3QgcHJldkFjdGl2YXRlZEluZGV4ID0gZ2V0UHJldkFjdGl2YXRlZEluZGV4KCk7XHJcbiAgICAgICAgaWYgKHByZXZBY3RpdmF0ZWRJbmRleCAhPSBhY3RpdmF0ZWRJbmRleCkge1xyXG4gICAgICAgICAgICBpZiAocHJldkFjdGl2YXRlZEluZGV4ICE9IG51bGwgJiYgcHJldkFjdGl2YXRlZEluZGV4ID49IDAgJiYgcHJldkFjdGl2YXRlZEluZGV4IDwgbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgc2V0RmxhZyhwcmV2QWN0aXZhdGVkSW5kZXgsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWN0aXZhdGUgdGhlIGN1cnJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgaWYgKGFjdGl2YXRlZEluZGV4ICE9IG51bGwgJiYgYWN0aXZhdGVkSW5kZXggPj0gMCAmJiBhY3RpdmF0ZWRJbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRGbGFnKGFjdGl2YXRlZEluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgc2V0UHJldkFjdGl2YXRlZEluZGV4KGFjdGl2YXRlZEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2V0RmxhZywgYWN0aXZhdGVkSW5kZXgsIGxlbmd0aF0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1jaGlsZC1tYW5hZ2VyLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCBhcyB1c2VFZmZlY3ROYXRpdmUsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFdyYXAgdGhlIG5hdGl2ZSBgdXNlRWZmZWN0YCB0byBhZGQgYXJndW1lbnRzXHJcbiAqIHRoYXQgYWxsb3cgYWNjZXNzaW5nIHRoZSBwcmV2aW91cyB2YWx1ZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXHJcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBlZmZlY3RcclxuICogQHBhcmFtIGlucHV0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cykge1xyXG4gICAgY29uc3QgcHJldklucHV0cyA9IHVzZVJlZihpbnB1dHMpO1xyXG4gICAgY29uc3QgZWZmZWN0MiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgY2hhbmdlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5tYXgocHJldklucHV0cy5jdXJyZW50Lmxlbmd0aCwgaW5wdXRzLmxlbmd0aCk7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAocHJldklucHV0cy5jdXJyZW50W2ldICE9IGlucHV0c1tpXSlcclxuICAgICAgICAgICAgICAgIGNoYW5nZXNbaV0gPSB7IGZyb206IHByZXZJbnB1dHMuY3VycmVudFtpXSwgdG86IGlucHV0c1tpXSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXQgPSBlZmZlY3QocHJldklucHV0cy5jdXJyZW50LCBjaGFuZ2VzKTtcclxuICAgICAgICBwcmV2SW5wdXRzLmN1cnJlbnQgPSBpbnB1dHM7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3ROYXRpdmUoZWZmZWN0MiwgaW5wdXRzKTtcclxufVxyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG4vKipcclxuICogSW1wbGVtZW50cyBhIHJvdmluZyB0YWJpbmRleCBzeXN0ZW0gd2hlcmUgb25seSBvbmUgXCJmb2N1c2FibGVcIlxyXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXHJcbiAqIG9mIHRob3NlIGVsZW1lbnRzIHJlY2VpdmVzIGZvY3VzIGlzIGRldGVybWluZWQgYnkgeW91LCBidXQgaXQnc1xyXG4gKiByZWNvbW1lbmRlZCB0byBvZmZsb2FkIHRoYXQgbG9naWMgdGhlbiB0byBhbm90aGVyIGhvb2ssIGxpa2VcclxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXHJcbiAqIGVsZW1lbnQgd2l0aCB0aGUgYXJyb3cga2V5cywgYHVzZVR5cGVhaGVhZE5hdmlnYXRpb25gLCB3aGljaFxyXG4gKiBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlIGluZGV4IHdpdGggdHlwZWFoZWFkLCBvclxyXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGNoaWxkIGhvb2sgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIHVzZWRcclxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXHJcbiAqIHByb3AtbW9kaWZ5aW5nIGhvb2sgKnRoYXQqIGhvb2sgcmV0dXJucyBzaG91bGQgdGhlbiBiZSB1c2VkXHJcbiAqIG9uIHRoZSBjaGlsZCdzIGVsZW1lbnQsIGFzIHdlbGwgYXMgYW55IG90aGVyIGVsZW1lbnRzIHlvdSdkIGxpa2VcclxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxyXG4gKlxyXG4gKiBgc2hvdWxkRm9jdXNPbkNoYW5nZWAgc2hvdWxkIHJldHVybiB0cnVlIGlmIGZvY3VzIGlzXHJcbiAqIGNvbnRhaW5lZCB3aXRoaW4gd2hhdGV2ZXIgZWxlbWVudCBjb250YWlucyB0aGUgcm92aW5nIHRhYiBpbmRleC5cclxuICogR2VuZXJhbGx5IGFzIHNpbXBsZSBhcyB0aGUgZm9sbG93aW5nOlxyXG4gKiBgYGBcclxuICogY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICogY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1czxQYXJlbnRFbGVtZW50Pih7IHNldEZvY3VzZWRJbm5lciB9KTtcclxuICogY29uc3QgZm9jdXNPbkNoYW5nZSA9IChmb2N1c2VkSW5uZXIgIT0gZmFsc2UpO1xyXG4gKiBgYGBcclxuICogSXQncyBub3QgaW5jbHVkZWQgaGVyZSBiZWNhdXNlIGB1c2VSb3ZpbmdUYWJJbmRleGAgZG9lc24ndCBrbm93XHJcbiAqIGFueXRoaW5nIGFib3V0IHRoZSBjb250YWluZXIgZWxlbWVudCwgb25seSBjaGlsZHJlbiBlbGVtZW50cy5cclxuICogQW5kIGp1c3QgYXMgd2VsbCEgQ2hpbGRyZW4gc2hvdWxkIGJlIGFsbG93ZWQgYXQgdGhlIHJvb3QsXHJcbiAqIHJlZ2FyZGxlc3Mgb2YgaWYgaXQncyB0aGUgd2hvbGUgYXBwIG9yIGp1c3QgYSBnaXZlbiBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlOiBmb2MsIHRhYmJhYmxlSW5kZXggfSkge1xyXG4gICAgY29uc3QgW3JlcmVuZGVyQW5kRm9jdXMsIHNldFJlcmVuZGVyQW5kRm9jdXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBnZXRTaG91bGRGb2N1c09uQ2hhbmdlID0gdXNlU3RhYmxlR2V0dGVyKGZvYyk7XHJcbiAgICBjb25zdCBnZXRUYWJiYWJsZUluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHRhYmJhYmxlSW5kZXgpO1xyXG4gICAgY29uc3QgcHJldlRhYmJhYmxlID0gdXNlUmVmKC1JbmZpbml0eSk7XHJcbiAgICAvLyBDYWxsIHRoZSBob29rIHRoYXQgYWxsb3dzIHVzIHRvIGNvbGxlY3QgaW5mb3JtYXRpb24gZnJvbSBjaGlsZHJlbiB3aG8gcHJvdmlkZSBpdFxyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGNoaWxkQ291bnQsIHVzZU1hbmFnZWRDaGlsZCwgaW5kaWNlc0J5RWxlbWVudCwgLi4ucmVzdCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XHJcbiAgICAvLyBBbnkgdGltZSB0aGUgdGFiYmFibGUgaW5kZXggY2hhbmdlcyxcclxuICAgIC8vIG5vdGlmeSB0aGUgcHJldmlvdXMgY2hpbGQgdGhhdCBpdCdzIG5vIGxvbmdlciB0YWJiYWJsZSxcclxuICAgIC8vIGFuZCBub3RpZnkgdGhlIG5leHQgY2hpbGQgdGhhdCBpcyBhbGxvd2VkIHRvIGJlIHRhYmJlZCB0by5cclxuICAgIHVzZUNoaWxkRmxhZyh0YWJiYWJsZUluZGV4LCBjaGlsZENvdW50LCAoaW5kZXgsIHRhYmJhYmxlKSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpXHJcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LnNldFRhYmJhYmxlKHRhYmJhYmxlKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9jdXNTZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YWJiYWJsZUluZGV4ICE9IG51bGwpXHJcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlblt0YWJiYWJsZUluZGV4XS5zZXRUYWJiYWJsZSh0cnVlKTtcclxuICAgIH0sIFt0YWJiYWJsZUluZGV4XSk7XHJcbiAgICBjb25zdCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCBbcnJhZkluZGV4LCBzZXRScmFmSW5kZXhdID0gdXNlU3RhdGUoMSk7XHJcbiAgICAgICAgY29uc3QgcmVyZW5kZXJBbmRGb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0UnJhZkluZGV4KGkgPT4gKytpKTsgfSwgW10pO1xyXG4gICAgICAgIGxldCBuZXdJbmZvID0ge1xyXG4gICAgICAgICAgICAuLi5pbmZvLFxyXG4gICAgICAgICAgICByZXJlbmRlckFuZEZvY3VzLFxyXG4gICAgICAgICAgICBzZXRUYWJiYWJsZTogdXNlQ2FsbGJhY2soKHRhYmJhYmxlKSA9PiB7IHNldFRhYmJhYmxlKHRhYmJhYmxlKTsgfSwgW10pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XHJcbiAgICAgICAgY29uc3QgW3RhYmJhYmxlLCBzZXRUYWJiYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVyZW5kZXJBbmRGb2N1cyhfID0+IHJlcmVuZGVyQW5kRm9jdXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkRm9jdXNPbkNoYW5nZSA9IGdldFNob3VsZEZvY3VzT25DaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRGb2N1c09uQ2hhbmdlKCkgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2VsZW1lbnQsIHRhYmJhYmxlLCBycmFmSW5kZXhdKTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyB0YWJJbmRleCB9LCBwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiYmFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlTWFuYWdlZENoaWxkUHJvcHMoeyB0YWJJbmRleCB9KSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLFxyXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcclxuICAgICAgICAgICAgdGFiYmFibGVcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLFxyXG4gICAgICAgIGNoaWxkQ291bnQsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXHJcbiAgICAgICAgZm9jdXNDdXJyZW50OiByZXJlbmRlckFuZEZvY3VzLFxyXG4gICAgICAgIC4uLnJlc3RcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJvdmluZy10YWJpbmRleC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJhZ2dhYmxlKHsgZWZmZWN0QWxsb3dlZCwgZGF0YSwgZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0LCBkcmFnSW1hZ2VZT2Zmc2V0IH0pIHtcclxuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmcsIGdldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsYXN0RHJvcEVmZmVjdCwgc2V0TGFzdERyb3BFZmZlY3QsIGdldExhc3REcm9wRWZmZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgdXNlRHJhZ2dhYmxlUHJvcHMgPSB1c2VDYWxsYmFjaygocCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IG9uRHJhZ1N0YXJ0ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAoZWZmZWN0QWxsb3dlZCA/PyBcImFsbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChkcmFnSW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCA/PyAwLCBkcmFnSW1hZ2VZT2Zmc2V0ID8/IDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW21pbWVUeXBlLCBkYXRhXSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShtaW1lVHlwZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9uRHJhZ0VuZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ICE9IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdERyb3BFZmZlY3QoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUmVmRWxlbWVudFByb3BzKHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBvbkRyYWdTdGFydCxcclxuICAgICAgICAgICAgb25EcmFnRW5kLFxyXG4gICAgICAgICAgICByZWZcclxuICAgICAgICB9KSwgcCk7XHJcbiAgICB9LCBbZWZmZWN0QWxsb3dlZCwgZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0LCBkcmFnSW1hZ2VZT2Zmc2V0LCAuLi5PYmplY3QuZW50cmllcyhkYXRhKS5mbGF0KCldKTtcclxuICAgIC8vIFJldHVybiBib3RoIHRoZSBlbGVtZW50IGFuZCB0aGUgaG9vayB0aGF0IG1vZGlmaWVzIFxyXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxyXG4gICAgbGV0IHJldCA9IHtcclxuICAgICAgICB1c2VEcmFnZ2FibGVQcm9wcyxcclxuICAgICAgICBkcmFnZ2luZyxcclxuICAgICAgICBnZXREcmFnZ2luZyxcclxuICAgICAgICAvLyBTZXQgb25jZSBhIGRyYWcgaGFzIGNvbXBsZXRlZCB3aXRoIHRoZSByZXN1bHRpbmcgYWN0aW9uXHJcbiAgICAgICAgLy8gVXNlZnVsIGZvciByZW1vdmluZyB0aGUgZWxlbWVudCBhZnRlcndhcmRzIGlmIGl0IHdhcyBcIm1vdmVcIlxyXG4gICAgICAgIGxhc3REcm9wRWZmZWN0LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRlc3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRMYXN0RHJvcEVmZmVjdFxyXG4gICAgfTtcclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyYWdnYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuO1xyXG47XHJcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVGaWxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBmaWxlTmFtZTtcclxuICAgIGVycm9yVHlwZTtcclxuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lLCBiYXNlKSB7XHJcbiAgICAgICAgc3VwZXIoYmFzZT8ubWVzc2FnZSA/PyBcIkFuIHVuc3BlY2lmaWVkIGVycm9yIG9jY3VycmVkIHJlYWRpbmcgdGhlIGZpbGUuXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9IGJhc2U/Lm5hbWU7XHJcbiAgICB9XHJcbn1cclxuLy9NZXJnZWRQcm9wczxVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEUsIFBpY2s8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIFwib25EcmFnRW50ZXJcIiB8IFwib25EcmFnTGVhdmVcIiB8IFwib25EcmFnT3ZlclwiIHwgXCJvbkRyb3BcIj4+LCBQPjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3BwYWJsZSh7IGVmZmVjdCB9KSB7XHJcbiAgICBjb25zdCBbZmlsZXNGb3JDb25zaWRlcmF0aW9uLCBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BwZWRGaWxlcywgc2V0RHJvcHBlZEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Ryb3BwZWRTdHJpbmdzLCBzZXREcm9wcGVkU3RyaW5nc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkcm9wRXJyb3IsIHNldERyb3BFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgLy8gQWxsIHRoZSBwcm9taXNlcyBnZW5lcmF0ZWQgZnJvbSB0aGUgZHJvcCBldmVudHMuXHJcbiAgICAvLyBVc2VkIHRvIHByb2Nlc3MgbXVsdGlwbGUgZHJvcCBldmVudHMgaW4gc3VjY2Vzc2lvblxyXG4gICAgY29uc3QgZHJvcFByb21pc2VzUmVmID0gdXNlUmVmKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UHJvbWlzZUluZGV4LCBzZXRDdXJyZW50UHJvbWlzZUluZGV4LCBnZXRDdXJyZW50UHJvbWlzZUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtwcm9taXNlQ291bnQsIHNldFByb21pc2VDb3VudCwgZ2V0UHJvbWlzZUNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIC8vIEFueSB0aW1lIHdlIGFkZCBhIG5ldyBwcm9taXNlLCBpZiB0aGVyZSdzIG5vIGN1cnJlbnQgcHJvbWlzZSBydW5uaW5nLCB3ZSBuZWVkIHRvIHN0YXJ0IG9uZS5cclxuICAgIC8vIElmIHRoZXJlIGlzIG9uZSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLCBzaW5jZSBpdCBydW5zIHRoZSBzYW1lIGNoZWNrLlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvbWlzZUluZGV4ID0gZ2V0Q3VycmVudFByb21pc2VJbmRleCgpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xyXG4gICAgICAgIGlmIChwcm9taXNlQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICgoY3VycmVudFByb21pc2VJbmRleCArIDEpIDwgcHJvbWlzZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9taXNlQ291bnRdKTtcclxuICAgIC8vIEFueXRpbWUgb3VyIGN1cnJlbnQgcHJvbWlzZSBjaGFuZ2VzLFxyXG4gICAgLy8gd2FpdCBmb3IgaXQgdG8gZmluaXNoLCB0aGVuIHNldCBvdXIgc3RhdGUgdG8gaXRzIHJlc3VsdC5cclxuICAgIC8vIEZpbmFsbHksIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55bW9yZSBwcm9taXNlcy5cclxuICAgIC8vIElmIHRoZXJlIGFyZSwgdGhlbiBpbmNyZWFzZSBjdXJyZW50UHJvbWlzZUNvdW50LFxyXG4gICAgLy8gd2hpY2ggd2lsbCB0cmlnZ2VyIHRoaXMgYWdhaW4uXHJcbiAgICAvL1xyXG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuICpvZnRlbiosIGJ1dCBtYXliZSBpbiB0aGUgY2FzZSBvZlxyXG4gICAgLy8gaW5kaXZpZHVhbGx5IGRyb3BwaW5nIGEgYnVuY2ggb2YgbGFyZ2UgZmlsZXMgb3Igc29tZXRoaW5nLlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFByb21pc2VJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlID0gZHJvcFByb21pc2VzUmVmLmN1cnJlbnRbY3VycmVudFByb21pc2VJbmRleF07XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9taXNlLnRoZW4oKGluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmZvICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBmaWxlcywgc3RyaW5ncyB9ID0gaW5mbztcclxuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkRmlsZXMoZmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BwZWRTdHJpbmdzKHN0cmluZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UncmUgZG9uZSwgYXJlIHRoZXJlIG1vcmUgcHJvbWlzZXMgaW4gdGhlIHF1ZXVlP1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2VJbmRleCA9IGdldEN1cnJlbnRQcm9taXNlSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGlzIHByb21pc2UgaGFzIHN0YXJ0ZWQsIG1vcmUgaGF2ZSBiZWVuIGFkZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB0aGlzIGVmZmVjdCBhZ2Fpbi5cclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1cnJlbnRQcm9taXNlSW5kZXhdKTtcclxuICAgIGNvbnN0IHVzZURyb3BwYWJsZVByb3BzID0gKHApID0+IHtcclxuICAgICAgICAvL2NvbnN0IHJlZiA9IHVzZVJlZjxFPihudWxsKTtcclxuICAgICAgICAvLyBIYW5kbGUgY29sbGVjdGluZyB0aGUgY3VycmVudCBmaWxlIG1ldGFkYXRhIG9yIE1JTUUgdHlwZXMuXHJcbiAgICAgICAgY29uc3Qgb25EcmFnRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgdGhlcmUgYSBkZWZhdWx0PyBJIGNhbid0IGZpbmQgb25lIGFueXdoZXJlLlxyXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IChlZmZlY3QgPz8gXCJtb3ZlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWltZVR5cGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01pbWVUeXBlcy5hZGQodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtpbmQgPT09IFwiZmlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goeyB0eXBlOiBpdGVtLnR5cGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG5ld0ZpbGVzKTtcclxuICAgICAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG5ld01pbWVUeXBlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEhhbmRsZSByZXNldHRpbmcgdGhlIGN1cnJlbnQgZmlsZSBtZXRhZGF0YSBvciBNSU1FIHR5cGVzXHJcbiAgICAgICAgY29uc3Qgb25EcmFnTGVhdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcclxuICAgICAgICAgICAgc2V0U3RyaW5nc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBCb2lsZXJwbGF0ZSwgSSBndWVzc1xyXG4gICAgICAgIGNvbnN0IG9uRHJhZ092ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBIYW5kbGUgZ2V0dGluZyB0aGUgZHJvcCBkYXRhIGFzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgY29uc3Qgb25Ecm9wID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XHJcbiAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICBsZXQgYWxsUHJvbWlzZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc3QgZHJvcERhdGEgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgZHJvcEZpbGUgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlLmRhdGFUcmFuc2Zlcj8uaXRlbXMgPz8gW10pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaCgobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gaXRlbS5nZXRBc1N0cmluZyhyZXNvbHZlKSkpLnRoZW4oc3RyID0+IGRyb3BEYXRhW3R5cGVdID0gc3RyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSBcImZpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCh7IGRhdGEsIG5hbWU6IGZpbGUubmFtZSwgdHlwZTogZmlsZS50eXBlLCBzaXplOiBkYXRhLmJ5dGVMZW5ndGgsIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoZSkgPT4geyByZWplY3QobmV3IERyb3BwYWJsZUZpbGVFcnJvcihmaWxlLm5hbWUsIHJlYWRlci5lcnJvcikpOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoZSkgPT4geyByZWplY3QobmV3IERyb3BwYWJsZUZpbGVFcnJvcihmaWxlLm5hbWUsIHJlYWRlci5lcnJvcikpOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BGaWxlLnB1c2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJvcFByb21pc2VzUmVmLmN1cnJlbnQucHVzaChQcm9taXNlLmFsbChhbGxQcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9taXNlQ291bnQoaSA9PiArK2kpO1xyXG4gICAgICAgICAgICAgICAgc2V0RHJvcEVycm9yKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdzOiBkcm9wRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlczogZHJvcEZpbGVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGV4ID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxyXG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcclxuICAgICAgICAgICAgICAgIHNldERyb3BFcnJvcihleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkodXNlUmVmRWxlbWVudFByb3BzKHsgb25EcmFnRW50ZXIsIG9uRHJhZ0xlYXZlLCBvbkRyYWdPdmVyLCBvbkRyb3AgfSksIHApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlRHJvcHBhYmxlUHJvcHMsXHJcbiAgICAgICAgZmlsZXNGb3JDb25zaWRlcmF0aW9uLFxyXG4gICAgICAgIHN0cmluZ3NGb3JDb25zaWRlcmF0aW9uLFxyXG4gICAgICAgIGRyb3BwZWRGaWxlcyxcclxuICAgICAgICBkcm9wcGVkU3RyaW5ncyxcclxuICAgICAgICBkcm9wRXJyb3IsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kcm9wcGFibGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG4vKipcclxuICogQWxsb3dzIGF0dGFjaGluZyBhbiBldmVudCBoYW5kbGVyIHRvIGFueSAqbm9uLVByZWFjdCogZWxlbWVudCwgYW5kIHJlbW92aW5nIGl0IHdoZW4gdGhlIGNvbXBvbmVudCB1c2luZyB0aGUgaG9vayB1bm1vdW50cy4gVGhlIGNhbGxiYWNrIGRvZXMgbm90IG5lZWQgdG8gYmUgc3RhYmxlIGFjcm9zcyByZW5kZXJzLlxyXG4gKlxyXG4gKiBEdWUgdG8gdHlwaW5nIGxpbWl0YXRpb25zLCB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGxpa2UgdGhpczpcclxuICpcclxuICogYHVzZUV2ZW50SGFuZGxlcihlbGVtZW50LCBcImlucHV0XCIpPElucHV0RXZlbnQ+KGUgPT4ge30pYFxyXG4gKlxyXG4gKiBUaGUgdHlwZSBhcmd1bWVudCBpcyBvcHRpb25hbCwgYnV0IG5hcnJvd3MgZG93biB0aGUgdHlwZSBmcm9tIFwiYSB1bmlvbiBvZiBhbGwgZXZlbnRzXCIgdG8gd2hhdGV2ZXIgeW91IHNwZWNpZnksIGFuZCBlcnJvcnMgaWYgaXQgZG9lc24ndCBleGlzdC5cclxuICpcclxuICogVGhlcmUgaXMgYSBzZXBhcmF0ZSB2ZXJzaW9uIHRoYXQgYXR0YWNoZXMgZXZlbnQgaGFuZGxlcnMgdG8gYSBzZXQgb2YgcHJvcHMuXHJcbiAqIEl0IHRha2VzIGRpZmZlcmVudCBldmVudCBzdHJpbmcgdHlwZXMgKG9uRXZlbnQgdnMgb25ldmVudCkuXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXQgQSAqbm9uLVByZWFjdCogbm9kZSB0byBhdHRhY2ggdGhlIGV2ZW50IHRvLlxyXG4gKiBAcmV0dXJuc1xyXG4gKiAqXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2xvYmFsSGFuZGxlcih0YXJnZXQsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcclxuICAgIC8vIE5vdGUgdG8gc2VsZjogVGhlIHR5cGluZyBkb2Vzbid0IGltcHJvdmUgZXZlbiBpZiB0aGlzIGlzIHNwbGl0IHVwIGludG8gYSBzdWItZnVuY3Rpb24uXHJcbiAgICAvLyBObyBtYXR0ZXIgd2hhdCwgaXQgc2VlbXMgaW1wb3NzaWJsZSB0byBnZXQgdGhlIGhhbmRsZXIncyBldmVudCBvYmplY3QgdHlwZWQgcGVyZmVjdGx5LlxyXG4gICAgLy8gSXQgc2VlbXMgbGlrZSBpdCdzIGd1YXJhbnRlZWQgdG8gYWx3YXlzIGJlIGEgdW5pb24gb2YgYWxsIGF2YWlsYWJsZSB0dXBlcy5cclxuICAgIC8vIEFnYWluLCBubyBtYXR0ZXIgd2hhdCBjb21iaW5hdGlvbiBvZiBzdWItIG9yIHN1Yi1zdWItZnVuY3Rpb25zIHVzZWQuXHJcbiAgICBsZXQgc3RhYmxlSGFuZGxlciA9IHVzZVN0YWJsZUNhbGxiYWNrKGhhbmRsZXIgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgaWYgKGhhbmRsZXIgPT0gbnVsbClcclxuICAgICAgICBzdGFibGVIYW5kbGVyID0gbnVsbDtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YWJsZUhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBzdGFibGVIYW5kbGVyLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdGFyZ2V0LCB0eXBlLCBzdGFibGVIYW5kbGVyXSk7XHJcbn1cclxuLyoqXHJcbiAqIEFuIGFsdGVybmF0aXZlIHdheSB0byBhZGQgYW4gZXZlbnQgaGFuZGxlciB0byBhbiBlbGVtZW50LiBVc2VmdWwgcHJpbWFyaWx5IHdoZW4gaW50ZWdyYXRpbmcgM3JkIHBhcnR5IGxpYnJhcmllcyB0aGF0IGV4cGVjdCBhIGdlbmVyaWMgXCJhZGQgZXZlbnQgaGFuZGxlclwiIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBhbGxvd3MgeW91IHRvIG1vZGlmeSBhIHNldCBvZiBwcm9wcyB0byBhcHBseSB0aGlzIGhhbmRsZXIuXHJcbiAqXHJcbiAqIEZvciB0eXBpbmcgcmVhc29ucywgdGhpcyBmdW5jdGlvbiBpcyBzcGxpdCBpbnRvIHR3by4gIFVzYWdlIGlzIGxpa2UgdGhlIGZvbGxvd2luZzpcclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IHsgdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyB9ID0gdXNlTG9jYWxFdmVudEhhbmRsZXI8SFRNTERpdkVsZW1lbnQ+KCkoXCJvbk1vdXNlRG93blwiLCBlID0+IHsgIH0pO1xyXG4gKiBjb25zdCBkaXZQcm9wcyA9IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMocHJvcHMpO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbEhhbmRsZXIoKSB7XHJcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKHR5cGUsIGhhbmRsZXIpID0+IHtcclxuICAgICAgICBjb25zdCBzdGFibGVIYW5kbGVyID0gdXNlU3RhYmxlQ2FsbGJhY2soaGFuZGxlcik7XHJcbiAgICAgICAgY29uc3QgdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFt0eXBlXTogc3RhYmxlSGFuZGxlciB9LCBwcm9wcyk7XHJcbiAgICAgICAgfSwgW3R5cGVdKTtcclxuICAgICAgICByZXR1cm4geyB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWV2ZW50LWhhbmRsZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuLyoqXHJcbiAqXHJcbiAqIFRoZXJlIGFyZSBzZXZlcmFsIGRpZmZlcmVudCB3YXlzIHRoYXQgYSBmb2N1cyBldmVudCBjYW4gaGFwcGVuLiAgQXNzdW1lXHJcbiAqIHRoZSBmb2xsb3dpbmcgc3RlcHMgaGFwcGVuIGluIG9yZGVyOlxyXG4gKlxyXG4gKiAxLiBUaGUgcGFnZSBsb2Fkcy5cclxuICogICAgKiBOb3RoaW5nIGlzIGZvY3VzZWQsIGJ1dCBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYGJvZHlgLlxyXG4gKiAgICAqIE5vIGZvY3VzIGV2ZW50cyBhcmUgZmlyZWQuXHJcbiAqIDIuIFRoZSB3aW5kb3cgaXMgZm9jdXNlZCwgYW4gdW5mb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCB0ZXh0IGlzIHNlbGVjdGVkLCBldGMuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCByZW1haW5zIGFzIGBib2R5YC5cclxuICogICAgKiBBIGBmb2N1c2AvYGZvY3VzaW5gIGV2ZW50ICpNSUdIVCogYmUgZmlyZWQgZm9yIGBib2R5YC4gRGVwZW5kaW5nIG9uXHJcbiAqICAgICAgdGhlIGJyb3dzZXIsIHRoaXMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBoYW5kbGVyIHdhcyBhdHRhY2hlZCB0byBgd2luZG93YCBvciBgZG9jdW1lbnRgLlxyXG4gKiAgICAgIFByb2JhYmx5IGp1c3QgYmVzdCB0byBub3QgcmVseSBvbiBpdCwgb3IgbGlzdGVuIHRvIGB3aW5kb3dgIGZvY3VzIGV2ZW50cyBkaXJlY3RseS5cclxuICogMy4gQSBmb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCBldGMuXHJcbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50IGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cclxuICogICAgKiBgZm9jdXNvdXRgIGFuZCBgYmx1cmAgYXJlICpub3QqIGZpcmVkIG9uIGBib2R5YC5cclxuICogICAgKiBgZm9jdXNgIGFuZCBgZm9jdXNpbmAgYXJlIGZpcmVkIG9uIHRoZSBuZXcgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXHJcbiAqIDQuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxyXG4gKiAgICAqICoqVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIGBib2R5YCoqIGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cclxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIG5vdyBzZXQgdG8gdGhlIG5ldyBlbGVtZW50LlxyXG4gKiAgICAqIGBmb2N1c2luYCBpcyBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgb2xkIGVsZW1lbnQuXHJcbiAqIDUuIEFuIHVuZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgdGV4dCBpcyBzZWxlY3RlZCwgZXRjLlxyXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgc2V0IHRvIGBib2R5YC5cclxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXHJcbiAqICAgICogYGZvY3VzaW5gIGlzICpub3QqIGZpcmVkIG9uIGBib2R5YC5cclxuICpcclxuICpcclxuICogSW4gc3VtbWFyeTpcclxuICogMS4gRm9jdXMgZXZlbnRzICpkbyogbm90aWZ5IHVzIG9mIGFsbCBjaGFuZ2VzIGluIGZvY3VzLCBidXQgdGhlcmUgaXMgbm8gb25lIHNpbmdsZSBjb21wcmVoZW5zaXZlIGV2ZW50IHRoYXQgcHJvdmlkZXMgdXMgd2l0aCBhbGwgYXZhaWxhYmxlIGluZm9ybWF0aW9uLlxyXG4gKiAyLiBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgKmlzIG5vdCogYWx3YXlzIHRoZSBzYW1lIGFzIHdoYXQncyBiZWluZyByZWZlcmVuY2VkIGJ5IGEgZm9jdXMgZXZlbnQuIEluIHBhcnRpY3VsYXIsIGl0IG1heSBiZWNvbWUgYGJvZHlgIGF0IGFueSBhcmJpdHJhcnkgdGltZS5cclxuICogMy4gQSBgYmx1cmAgd2l0aG91dCBhIGBmb2N1c2AgY2FuIGFuZCB3aWxsIG9jY3VyLiBUaGlzIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBzb2xlbHkgdXNlIGBmb2N1c2AgdG8gZGV0ZWN0IGFsbCBjaGFuZ2VzLlxyXG4gKiA0LiBBIGBibHVyYCBldmVudCB3aG9zZSBgcmVsYXRlZFRhcmdldGAgaXMgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGVyZSB3aWxsIGJlIG5vIGZvbGxvd2luZyBgZm9jdXNgIGV2ZW50LlxyXG4gKlxyXG4gKlxyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICogQHJldHVybnNcclxuICovXHJcbmNvbnN0IGR1bW15ID0gMDtcclxuY29uc3QgYWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IFNldCgpO1xyXG5jb25zdCBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IFNldCgpO1xyXG5jb25zdCB3aW5kb3dGb2N1c2VkVXBkYXRlcnMgPSBuZXcgU2V0KCk7XHJcbmZ1bmN0aW9uIGZvY3Vzb3V0KGUpIHtcclxuICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgYWN0aXZlRWxlbWVudFVwZGF0ZXJzKVxyXG4gICAgICAgICAgICBmPy4obnVsbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBKdXN0IHdhaXQgZm9yIHRoZSBmb2N1c2luIGV2ZW50LlxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvY3VzaW4oZSkge1xyXG4gICAgbGV0IGN1cnJlbnRseUZvY3VzZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBsZXQgbGFzdEZvY3VzZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZm9yRWFjaChmID0+IGY/LihjdXJyZW50bHlGb2N1c2VkRWxlbWVudCkpO1xyXG4gICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5mb3JFYWNoKGYgPT4gZj8uKGxhc3RGb2N1c2VkRWxlbWVudCkpO1xyXG59XHJcbmZ1bmN0aW9uIHdpbmRvd0ZvY3VzKCkge1xyXG4gICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmZvckVhY2goZiA9PiBmPy4odHJ1ZSkpO1xyXG59XHJcbmZ1bmN0aW9uIHdpbmRvd0JsdXIoKSB7XHJcbiAgICB3aW5kb3dGb2N1c2VkVXBkYXRlcnMuZm9yRWFjaChmID0+IGY/LihmYWxzZSkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3RpdmVFbGVtZW50KHsgc2V0QWN0aXZlRWxlbWVudCwgc2V0TGFzdEFjdGl2ZUVsZW1lbnQsIHNldFdpbmRvd0ZvY3VzZWQgfSkge1xyXG4gICAgY29uc3Qgc3RhYmxlU2V0QWN0aXZlRWxlbWVudCA9IHVzZVN0YWJsZUNhbGxiYWNrKHNldEFjdGl2ZUVsZW1lbnQgPz8gKCgpID0+IHsgfSkpO1xyXG4gICAgY29uc3Qgc3RhYmxlU2V0TGFzdEFjdGl2ZUVsZW1lbnQgPSB1c2VTdGFibGVDYWxsYmFjayhzZXRMYXN0QWN0aXZlRWxlbWVudCA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICBjb25zdCBzdGFibGVTZXRXaW5kb3dGb2N1c2VkID0gdXNlU3RhYmxlQ2FsbGJhY2soc2V0V2luZG93Rm9jdXNlZCA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmb2N1c2luLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB3aW5kb3dCbHVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCB0aGVtIGV2ZW4gaWYgdGhleSdyZSB1bmRlZmluZWQgdG8gbW9yZSBlYXNpbHlcclxuICAgICAgICAvLyBtYW5hZ2UgdGhlIFwiPjAgbWVhbnMgZG9uJ3QgYWRkIGhhbmRsZXJzXCIgbG9naWMuXHJcbiAgICAgICAgYWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzdGFibGVTZXRBY3RpdmVFbGVtZW50KTtcclxuICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzdGFibGVTZXRMYXN0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmFkZChzdGFibGVTZXRXaW5kb3dGb2N1c2VkKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZGVsZXRlKHN0YWJsZVNldEFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmRlbGV0ZShzdGFibGVTZXRMYXN0QWN0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5kZWxldGUoc3RhYmxlU2V0V2luZG93Rm9jdXNlZCk7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9jdXNvdXQpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY3RpdmUtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VIYXNGb2N1cyh7IHNldEZvY3VzZWQsIHNldEZvY3VzZWRJbm5lciwgc2V0TGFzdEZvY3VzZWQsIHNldExhc3RGb2N1c2VkSW5uZXIgfSkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIGNvbnN0IHNldEFjdGl2ZUVsZW1lbnQgPSB1c2VDYWxsYmFjaygobm9kZSkgPT4ge1xyXG4gICAgICAgIHNldEZvY3VzZWQ/LihlbGVtZW50ID09IG5vZGUgJiYgZWxlbWVudCAhPSBudWxsKTtcclxuICAgICAgICBzZXRGb2N1c2VkSW5uZXI/LighIWVsZW1lbnQ/LmNvbnRhaW5zKG5vZGUpKTtcclxuICAgIH0sIFtzZXRGb2N1c2VkLCBzZXRGb2N1c2VkSW5uZXIsIGVsZW1lbnRdKTtcclxuICAgIGNvbnN0IHNldExhc3RBY3RpdmVFbGVtZW50ID0gdXNlQ2FsbGJhY2soKG5vZGUpID0+IHtcclxuICAgICAgICBzZXRMYXN0Rm9jdXNlZD8uKGVsZW1lbnQgPT0gbm9kZSAmJiBlbGVtZW50ICE9IG51bGwpO1xyXG4gICAgICAgIHNldExhc3RGb2N1c2VkSW5uZXI/LighIWVsZW1lbnQ/LmNvbnRhaW5zKG5vZGUpKTtcclxuICAgIH0sIFtzZXRMYXN0Rm9jdXNlZCwgc2V0TGFzdEZvY3VzZWRJbm5lciwgZWxlbWVudF0pO1xyXG4gICAgdXNlQWN0aXZlRWxlbWVudCh7IHNldEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50IH0pO1xyXG4gICAgY29uc3QgdXNlSGFzRm9jdXNQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4geyByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTsgfSwgW3VzZVJlZkVsZW1lbnRQcm9wc10pO1xyXG4gICAgcmV0dXJuIHsgdXNlSGFzRm9jdXNQcm9wcywgZWxlbWVudCwgZ2V0RWxlbWVudCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrKTtcclxuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcclxuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xyXG4gICAgICAgIGlmIChpbnRlcnZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgIC8vIHRoYXQgY2xlYXJzIGFuZCByZXNldHMgdGhlIGludGVydmFsIGlmIGl0IGNoYW5nZXMuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0YWJsZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IGxhc3REZWxheVVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGxhc3REZWxheVVzZWQgPSBjdXJyZW50SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYWRqdXN0YWJsZUNhbGxiYWNrLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XHJcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFRhYmxlW3ZhbHVlXTtcclxufVxyXG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcclxuICAgIHJldHVybiBbcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKV07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgd2l0aCBhbiBvcHRpb25hbCBwcmVmaXguXHJcbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxyXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XHJcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBhIGhvb2sgdGhhdCBtb2RpZmllcyBhIHNldCBvZiBwcm9wcyB0byBwcm92aWRlIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIGlmIG9uZSB3YXMgbm90IHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBBbmQgdGhlIHJhbmRvbWx5LWdlbmVyYXRlZCBpZCBpdHNlbGYgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHlvdSB3YW50IHRvIGhhbmRsZSB0aGUgbG9naWMgeW91cnNlbGYgd2l0aG91dCBgdXNlTWVyZ2VkUHJvcHNgLlxyXG4gKlxyXG4gKiBVbmxpa2UgbW9zdCBvdGhlciBgdXNlKlByb3BzYCBob29rcywgdGhlc2UgYXJlIG1vc3RseSBzdGFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XHJcbiAgICBjb25zdCBbcmFuZG9tSWQsIHNldFJhbmRvbUlkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XHJcbiAgICBjb25zdCBbd2F0Y2hQcmVmaXhVcGRhdGVzLCBzZXRXYXRjaFByZWZpeFVwZGF0ZXMsIGdldFdhdGNoUHJlZml4VXBkYXRlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdhdGNoUHJlZml4VXBkYXRlcyA9IGdldFdhdGNoUHJlZml4VXBkYXRlcygpO1xyXG4gICAgICAgIGlmICh3YXRjaFByZWZpeFVwZGF0ZXMpXHJcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XHJcbiAgICAgICAgc2V0V2F0Y2hQcmVmaXhVcGRhdGVzKHRydWUpO1xyXG4gICAgfSwgW3ByZWZpeF0pO1xyXG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxyXG4gICAgLy8gVXNlZCBzbyB0aGF0IGFueSBJRC1yZWZlcmVuY2luZyBwcm9wcyBkb24ndCBuZWVkIHRvIHByb3ZpZGUgdGhlIHNhbWUgdmFsdWUuXHJcbiAgICAvL1xyXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcclxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSB0ZW1wb3JhcnkgbWlzbWF0Y2gsIGJ1dCBpdCdzIGNvcnJlY3RlZCBiZWZvcmUgcmVuZGVyaW5nIGZpbmlzaGVzLlxyXG4gICAgLy8gSXMgdGhpcyBva2F5P1xyXG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IHVzZVJlZmVyZW5jZWRJZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmVmZXJlbmNlZElkUHJvcHMoaWRQcm9wTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGZ1bmN0aW9uICh7IFtpZFByb3BOYW1lXTogZ2l2ZW5JZCwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChpZFByb3BOYW1lID09PSBcImlkXCIpXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VkSWQodXNlZElkMik7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xyXG4gICAgY29uc3QgdXNlUmFuZG9tSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJhbmRvbUlkUHJvcHMocCkge1xyXG4gICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImlkXCIpKHApO1xyXG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJhbmRvbUlkLFxyXG4gICAgICAgIGlkOiB1c2VkSWQsXHJcbiAgICAgICAgZ2V0SWQ6IGdldFVzZWRJZCxcclxuICAgICAgICB1c2VSYW5kb21JZFByb3BzLFxyXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxyXG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3Moc3RyKSB7IH1cclxuZnVuY3Rpb24gYWNjZXB0c0Nzcyhwcm9wKSB7IH1cclxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xyXG4gICAgY29uc3QgeyBpZCwgcmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCgpO1xyXG4gICAgLy9jb25zdCBwMWE6IE1lcmdlZFByb3BzPHsgaWQ6IHN0cmluZyB9LCB7ICB9PiA9IHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pXHJcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmEgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xyXG4gICAgY29uc3QgcDNhID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSkpO1xyXG4gICAgY29uc3QgcDNiID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pKTtcclxuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcclxuICAgIGNvbnN0IHA0YiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHAxYik7XHJcbiAgICAvL3AxYS5pZDtcclxuICAgIHAxYi5pZDtcclxuICAgIHAyYVtcImZvclwiXTtcclxuICAgIHAyYltcImZvclwiXTtcclxuICAgIHAyY1tcImZvclwiXTtcclxuICAgIHAzYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDNiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHAzYltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDRhW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHA0YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogSXQncyBiZWNhdXNlIGl0IHJlc29sdmVzIHRvIFwiaWQ6IHVuZGVmaW5lZCAmIHN0cmluZ1wiIC0tIHRoaXMgc2hvdWxkbid0IGhhcHBlblxyXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMWIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHAyYS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MocDJiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBwM2Euc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAzYi5zdHlsZSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcDRhLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHA0Yi5zdHlsZSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJhbmRvbS1pZC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTGluZWFyTmF2aWdhdGlvbiwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbiB9IGZyb20gXCIuL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3ZpbmdUYWJJbmRleCB9IGZyb20gXCIuL3VzZS1yb3ZpbmctdGFiaW5kZXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcclxuLyoqXHJcbiAqXHJcbiAqIFRPRE86IFRoaXMgdGFibGUgd2FzIHNjcmFwcGVkIHdoZW4gdGhpcyB3YXMgY2hhbmdlZCB0byBqdXN0IGFjY2VwdCBhIGNvbGxhdG9yIGRpcmVjdGx5LFxyXG4gKiBidXQgaXQncyBub3QgYmFkIGZvciBhIGNvbGxhdGlvbiBjcmFzaCBjb3Vyc2UgYW5kIEkgbWlnaHQgdXNlIGl0IGFnYWluLlxyXG4gKiBFdmVuIGp1c3QgYXMgYSBcInRoaXMgaXMgd2h5IGl0J3MgaW1wb3J0YW50IGFuZCBnb29kIHRvIHVzZSB0aGVzZSB0aGluZ3NcIiB0aGluZy5cclxuICpcclxuICogfExhbmcufFRhcmdldHxVc2VyIGlucHV0fGBiYXNlYHxgYWNjZW50YHxgY2FzZWB8YHZhcmlhbnRgfFxyXG4gKiB8LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXxcclxuICogfEVOfEhpfEhpfOKchXzinIV84pyFfOKchXxcclxuICogfEVOfEhpfO+8qO+9iXzinIV84pyFfOKchXzinYx8XHJcbiAqIHxFTnxIaXxoaXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxFTnxIaXxIw6984pyFfOKdjHzinYx84p2MfFxyXG4gKiB8RU58SGl8QnllfOKdjHzinYx84p2MfOKdjHxcclxuICogfERBfMOlfGFhfOKchXzinIV84pyFfOKdjHxcclxuICogfERBfMOlfEFBfOKchXzinIV84p2MfOKdjHxcclxuICogfERBfMOlfEFhfOKchXzinIV84p2MfOKdjHxcclxuICogfEVOfMOlfGFhfOKdjHzinYx84p2MfOKdjHxcclxuICogfERBfMOlfGFBfOKdjHzinYx84p2MfOKdjHxcclxuICogfEVOfMOlfGF84pyFfOKchXzinYx84p2MfFxyXG4gKiB8REF8w6V8YXzinIV84pyFfOKdjHzinYx8XHJcbiAqIHxKUHzvqqp8552AfOKchXzinIV84pyFfOKchXxcclxuICogfEpQfOOCq3zvvbZ84pyFfOKchXzinIV84pyFfFxyXG4gKiB8SlB844KrfOOBi3zinIV84pyFfOKchXzinYx8XHJcbiAqIHxKUHzjgqt844O1fOKchXzinIV84pyFfOKdjHxcclxuICogfEpQfOOCq3zji5V84pyFfOKchXzinYx84p2MfFxyXG4gKiB8SlB844KrfOOCrHzinIV84p2MfOKdjHzinYx8XHJcbiAqIHxKUHzjgqt85YqbfOKdjHzinYx84p2MfOKdjHxcclxuICogfFpIfOe0hXznuqJ84p2MfOKdjHzinYx84p2MfFxyXG4gKlxyXG4gKlxyXG4gKiAoTm90ZSB0byBzZWxmOiBBdCBzb21lIHBvaW50LCB0aGlzIGZpbGUgd2lsbCBwcm9iYWJseSBiZSBub3JtYWxpemVkXHJcbiAqIGJ5IHNvbWVib2R5IGFuZCDvqqogd2lsbCB0dXJuIGJhY2sgaW50byDnnYAuKVxyXG4gKlxyXG4gKi9cclxuY29uc3QgZHVtbXkgPSBudWxsO1xyXG5mdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIHByb3BlciBrZXlib2FyZCBuYXZpZ2F0aW9uIGZvciBjb21wb25lbnRzIGxpa2UgbGlzdGJveGVzLCBidXR0b24gZ3JvdXBzLCBtZW51cywgZXRjLlxyXG4gKlxyXG4gKiBJbiB0aGUgZG9jdW1lbnQgb3JkZXIsIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgXCJmb2N1c2VkXCIgb3IgXCJ0YWJiYWJsZVwiIGVsZW1lbnQsIG1ha2luZyBpdCBhY3QgbW9yZSBsaWtlIG9uZSBjb21wbGV0ZSB1bml0IGluIGNvbXBhcmlzb24gdG8gZXZlcnl0aGluZyBhcm91bmQgaXQuXHJcbiAqIE5hdmlnYXRpbmcgZm9yd2FyZHMvYmFja3dhcmRzIGNhbiBiZSBkb25lIHdpdGggdGhlIGFycm93IGtleXMsIEhvbWUvRW5kIGtleXMsIG9yIGFueSBhbnkgdGV4dCBmb3IgdHlwZWFoZWFkIHRvIGZvY3VzIHRoZSBuZXh0IGl0ZW0gdGhhdCBtYXRjaGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpc3ROYXZpZ2F0aW9uKHsgaW5pdGlhbEluZGV4LCBzaG91bGRGb2N1c09uQ2hhbmdlLCBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlciB9KSB7XHJcbiAgICBpbmRleE1hbmdsZXIgPz89IGlkZW50aXR5O1xyXG4gICAgaW5kZXhEZW1hbmdsZXIgPz89IGlkZW50aXR5O1xyXG4gICAga2V5TmF2aWdhdGlvbiA/Pz0gXCJlaXRoZXJcIjtcclxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhyZWUgdGhpbmdzIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnRseSB0YWJiYWJsZSBlbGVtZW50J3MgaW5kZXg6XHJcbiAgICAvLyBXaGF0IGl0IGlzLCBhbmQgd2hldGhlciwgd2hlbiB3ZSByZW5kZXIgdGhpcyBjb21wb25lbnQgYW5kIGl0J3MgY2hhbmdlZCwgdG8gYWxzbyBmb2N1cyB0aGUgZWxlbWVudCB0aGF0IHdhcyBtYWRlIHRhYmJhYmxlLlxyXG4gICAgY29uc3QgW3RhYmJhYmxlSW5kZXgsIHNldFRhYmJhYmxlSW5kZXgsIGdldFRhYmJhYmxlSW5kZXhdID0gdXNlU3RhdGUoaW5pdGlhbEluZGV4ID09PSB1bmRlZmluZWQgPyAwIDogaW5pdGlhbEluZGV4KTtcclxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCBpbmRpY2VzQnlFbGVtZW50LCB1c2VSb3ZpbmdUYWJJbmRleENoaWxkLCBmb2N1c0N1cnJlbnQsIC4uLnJlc3QgfSA9IHVzZVJvdmluZ1RhYkluZGV4KHsgc2hvdWxkRm9jdXNPbkNoYW5nZSwgdGFiYmFibGVJbmRleCB9KTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9JbmRleCA9IHVzZUNhbGxiYWNrKChpKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIoMCkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTGFzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIobWFuYWdlZENoaWxkcmVuLmxlbmd0aCAtIDEpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaSA9PiBpbmRleE1hbmdsZXIoaW5kZXhEZW1hbmdsZXIoaSA/PyAwKSAtIDEpKTsgfSwgW2luZGV4RGVtYW5nbGVyLCBpbmRleE1hbmdsZXJdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGkgPT4gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKGkgPz8gMCkgKyAxKSk7IH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XHJcbiAgICBjb25zdCBzZXRJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgoaW5kZXgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgeyBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb24oeyBjb2xsYXRvciwgZ2V0SW5kZXg6IGdldFRhYmJhYmxlSW5kZXgsIHNldEluZGV4LCB0eXBlYWhlYWRUaW1lb3V0OiAxMDAwIH0pO1xyXG4gICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQgfSA9IHVzZUxpbmVhck5hdmlnYXRpb24oeyBuYXZpZ2F0aW9uRGlyZWN0aW9uOiBrZXlOYXZpZ2F0aW9uLCBpbmRleDogZ2V0VGFiYmFibGVJbmRleCgpID8/IDAsIG1hbmFnZWRDaGlsZHJlbiwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0IH0pO1xyXG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkKGluZm8pO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCgpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUm92aW5nVGFiSW5kZXhDaGlsZFByb3BzLCB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcywgdGFiYmFibGUgfSA9IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQoaW5mbyk7XHJcbiAgICAgICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzID0gZnVuY3Rpb24gKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHModXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMoeyBvbkNsaWNrOiByb3ZlVG9TZWxmIH0pKSksIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJvdmVUb1NlbGYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTsgfSwgW10pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyxcclxuICAgICAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHM6IHVzZVJvdmluZ1RhYkluZGV4U2libGluZ1Byb3BzLFxyXG4gICAgICAgICAgICB0YWJiYWJsZVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkLCB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQsIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsIG5hdmlnYXRlVG9JbmRleF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLFxyXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXHJcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcclxuICAgICAgICB0YWJiYWJsZUluZGV4LFxyXG4gICAgICAgIHNldFRhYmJhYmxlSW5kZXgsXHJcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxyXG4gICAgICAgIGluZGljZXNCeUVsZW1lbnQsXHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4LFxyXG4gICAgICAgIG5hdmlnYXRlVG9OZXh0LFxyXG4gICAgICAgIG5hdmlnYXRlVG9QcmV2LFxyXG4gICAgICAgIG5hdmlnYXRlVG9GaXJzdCxcclxuICAgICAgICBuYXZpZ2F0ZVRvTGFzdCxcclxuICAgICAgICBmb2N1c0N1cnJlbnQsXHJcbiAgICAgICAgLi4ucmVzdFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdC1uYXZpZ2F0aW9uLmpzLm1hcCIsIi8qIVxuKiB0YWJiYWJsZSA1LjIuMVxuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL3RhYmJhYmxlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnLCAnYVtocmVmXScsICdidXR0b24nLCAnW3RhYmluZGV4XScsICdhdWRpb1tjb250cm9sc10nLCAndmlkZW9bY29udHJvbHNdJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJywgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJywgJ2RldGFpbHMnXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHt9IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcblxuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cblxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNDb250ZW50RWRpdGFibGUgPSBmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufTtcblxudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcblxuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHtcbiAgICByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICB9IC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG5cblxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIC0xIHdoZW4gdGhlICd0YWJpbmRleCcgYXR0cmlidXRlIGlzbid0IHNwZWNpZmllZCBpbiB0aGUgRE9NLFxuICAvLyAgeWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gIC8vICBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAvLyAgb3JkZXIsIGNvbnNpZGVyIHRoZWlyIHRhYiBpbmRleCB0byBiZSAwLlxuXG5cbiAgaWYgKChub2RlLm5vZGVOYW1lID09PSAnQVVESU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdWSURFTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ0RFVEFJTFMnKSAmJiBub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xuXG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59O1xuXG52YXIgaXNJbnB1dCA9IGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufTtcblxudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG5cbnZhciBpc0RldGFpbHNXaXRoU3VtbWFyeSA9IGZ1bmN0aW9uIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHtcbiAgdmFyIHIgPSBub2RlLnRhZ05hbWUgPT09ICdERVRBSUxTJyAmJiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gJ1NVTU1BUlknO1xuICB9KTtcbiAgcmV0dXJuIHI7XG59O1xuXG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzLCBmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCAmJiBub2Rlc1tpXS5mb3JtID09PSBmb3JtKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciByYWRpb1Njb3BlID0gbm9kZS5mb3JtIHx8IG5vZGUub3duZXJEb2N1bWVudDtcblxuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcblxuICB2YXIgcmFkaW9TZXQ7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xuXG52YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59O1xuXG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUsIGRpc3BsYXlDaGVjaykge1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzRGlyZWN0U3VtbWFyeSA9IG1hdGNoZXMuY2FsbChub2RlLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2sgPT09ICdmdWxsJykge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IC8vIGZvcm0gZmllbGRzIChuZXN0ZWQpIGluc2lkZSBhIGRpc2FibGVkIGZpZWxkc2V0IGFyZSBub3QgZm9jdXNhYmxlL3RhYmJhYmxlXG4vLyAgdW5sZXNzIHRoZXkgYXJlIGluIHRoZSBfZmlyc3RfIDxsZWdlbmQ+IGVsZW1lbnQgb2YgdGhlIHRvcC1tb3N0IGRpc2FibGVkXG4vLyAgZmllbGRzZXRcblxuXG52YXIgaXNEaXNhYmxlZEZyb21GaWVsZHNldCA9IGZ1bmN0aW9uIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkge1xuICBpZiAoaXNJbnB1dChub2RlKSB8fCBub2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBub2RlLnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0ZJRUxEU0VUJyAmJiBwYXJlbnROb2RlLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIGxvb2sgZm9yIHRoZSBmaXJzdCA8bGVnZW5kPiBhcyBhbiBpbW1lZGlhdGUgY2hpbGQgb2YgdGhlIGRpc2FibGVkXG4gICAgICAgIC8vICA8ZmllbGRzZXQ+OiBpZiB0aGUgbm9kZSBpcyBpbiB0aGF0IGxlZ2VuZCwgaXQnbGwgYmUgZW5hYmxlZCBldmVuXG4gICAgICAgIC8vICB0aG91Z2ggdGhlIGZpZWxkc2V0IGlzIGRpc2FibGVkOyBvdGhlcndpc2UsIHRoZSBub2RlIGlzIGluIGFcbiAgICAgICAgLy8gIHNlY29uZGFyeS9zdWJzZXF1ZW50IGxlZ2VuZCwgb3Igc29tZXdoZXJlIGVsc2Ugd2l0aGluIHRoZSBmaWVsZHNldFxuICAgICAgICAvLyAgKGhvd2V2ZXIgZGVlcCBuZXN0ZWQpIGFuZCBpdCdsbCBiZSBkaXNhYmxlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oaSk7XG5cbiAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0xFR0VORCcpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jb250YWlucyhub2RlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIHRoZSBub2RlIGlzbid0IGluIHRoZSBmaXJzdCBsZWdlbmQgKGluIGRvYyBvcmRlciksIHNvIG5vIG1hdHRlclxuICAgICAgICAgICAgLy8gIHdoZXJlIGl0IGlzIG5vdywgaXQnbGwgYmUgZGlzYWJsZWRcblxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gdGhlIG5vZGUgaXNuJ3QgaW4gYSBsZWdlbmQsIHNvIG5vIG1hdHRlciB3aGVyZSBpdCBpcyBub3csIGl0J2xsIGJlIGRpc2FibGVkXG5cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH0gLy8gZWxzZSwgbm9kZSdzIHRhYmJhYmxlL2ZvY3VzYWJsZSBzdGF0ZSBzaG91bGQgbm90IGJlIGFmZmVjdGVkIGJ5IGEgZmllbGRzZXQnc1xuICAvLyAgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKG5vZGUuZGlzYWJsZWQgfHwgaXNIaWRkZW5JbnB1dChub2RlKSB8fCBpc0hpZGRlbihub2RlLCBvcHRpb25zLmRpc3BsYXlDaGVjaykgfHwgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAoIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIGNhbmRpZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FuZGlkYXRlLCBpKSB7XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoY2FuZGlkYXRlKTtcblxuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXMuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIGEubm9kZTtcbiAgfSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuICByZXR1cm4gdGFiYmFibGVOb2Rlcztcbn07XG5cbnZhciBmb2N1c2FibGUgPSBmdW5jdGlvbiBmb2N1c2FibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhlbCwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbnZhciBpc1RhYmJhYmxlID0gZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcblxudmFyIGlzRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxuZXhwb3J0IHsgZm9jdXNhYmxlLCBpc0ZvY3VzYWJsZSwgaXNUYWJiYWJsZSwgdGFiYmFibGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCJpbXBvcnQgXCJ3aWNnLWluZXJ0XCI7XHJcbmltcG9ydCBcImJsb2NraW5nLWVsZW1lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuY29uc3QgYmxvY2tpbmdFbGVtZW50cyA9IGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzO1xyXG4vKipcclxuICogQWxsb3dzIGFuIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBieSBhcHBseWluZyB0aGUgXCJpbmVydFwiIGF0dHJpYnV0ZSB0byBhbGwgc2libGluZywgYXVudCwgYW5kIHVuY2xlIG5vZGVzLlxyXG4gKlxyXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgY29uc2VjdXRpdmUgY2FsbHMgd2l0aCBhIGxvb3NlbHkgYXBwbGllZCBzdGFjayBvcGVyYXRpb25cclxuICogKHNwZWNpZmljYWxseSB2aWEgYGJsb2NraW5nRWxlbWVudHNgLCB3aXRoIGEgc21hbGwgcG9seWZpbGwgYmVjYXVzZSBJJ20gbm90IHN1cmUgaG93IGxvbmdcclxuICogaXQnbGwgdGFrZSB0byBmaW5kIGl0cyB3YXkgaW50byB0aGUgc3BlYywgaWYgZXZlcilcclxuICogQHBhcmFtIHRhcmdldFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJsb2NraW5nRWxlbWVudCh0YXJnZXQpIHtcclxuICAgIC8qKlxyXG4gICAgICogUHVzaC9wb3AgdGhlIGVsZW1lbnQgZnJvbSB0aGUgYmxvY2tpbmdFbGVtZW50cyBzdGFjay5cclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5yZW1vdmUodGFyZ2V0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdGFyZ2V0XSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gYmxvY2tpbmdFbGVtZW50cy50b3A7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJsb2NraW5nLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBpc0ZvY3VzYWJsZSB9IGZyb20gXCJ0YWJiYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4vdXNlLWFjdGl2ZS1lbGVtZW50XCI7XHJcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmNvbnN0IGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUbyA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvY3VzVHJhcCh7IHRyYXBBY3RpdmUgfSkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIGNvbnN0IFtsYXN0QWN0aXZlRWxlbWVudCwgc2V0TGFzdEFjdGl2ZUVsZW1lbnQsIGdldExhc3RBY3RpdmVFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlQWN0aXZlRWxlbWVudCh7IHNldExhc3RBY3RpdmVFbGVtZW50IH0pO1xyXG4gICAgLy8gV2hlbiB0aGUgdHJhcCBiZWNvbWVzIGFjdGl2ZSwgYmVmb3JlIHdlIGxldCB0aGUgYmxvY2tpbmdFbGVtZW50cyBob29rIHJ1bixcclxuICAgIC8vIGtlZXAgdHJhY2sgb2Ygd2hhdGV2ZXIncyBjdXJyZW50bHkgZm9jdXNlZCBhbmQgc2F2ZSBpdC5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRvIHdoYXRldmVyJ3MgY3VycmVudGx5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICogQW55IHRpbWUgd2UgYWN0aXZhdGUgb3IgZGVhY3RpdmF0ZSB0aGUgdHJhcCxcclxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXHJcbiAgICAgKiB0aGUgdHJhcCBpZiBpdCdzIGFjdGl2ZSwgb3Igd2hhdGV2ZXIgd2UndmVcclxuICAgICAqIHRyYWNrZWQgaW4gZWxlbWVudHNUb1Jlc3RvcmVGb2N1c1RvIGlmIG5vdClcclxuICAgICAqL1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHJhcEFjdGl2ZSAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBleHRyYSBxdWV1ZU1pY3JvdGFzayBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5yZWFzb25zP1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWZIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XHJcbiAgICBjb25zdCB1c2VGb2N1c1RyYXBQcm9wcyA9ICgocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1tb2RhbFwiOiB0cmFwQWN0aXZlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQgfSwgdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlRm9jdXNUcmFwUHJvcHMsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBjb250YWluZWQgd2l0aGluIHRoZSBnaXZlbiBub2RlLCBvciBudWxsIGlmIG5vbmUgYXJlIGZvdW5kLlxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgeyBhY2NlcHROb2RlOiAobm9kZSkgPT4gKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGlzRm9jdXNhYmxlKG5vZGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCkgfSk7XHJcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IHRyZWVXYWxrZXIuZmlyc3RDaGlsZCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Rm9jdXNhYmxlO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1mb2N1cy10cmFwLmpzLm1hcCIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBmLHVzZURlYnVnVmFsdWUgYXMgY31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIHYsRnJhZ21lbnQgYXMgZCxyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDp2KHYobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3YobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9dihuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTp2fSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sZj0hMD09PXQuX19oO3IuX191Kyt8fGZ8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnMoZCxudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3MoZCxudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXYobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiB6KG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEIobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPSQsbi5uYXRpdmVFdmVudD1ufTt2YXIgcSxHPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxKPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7Zm9yKHZhciB1IGluIHI9e30sZSl7dmFyIG89ZVt1XTtcInZhbHVlXCI9PT11JiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09b3x8KFwiZGVmYXVsdFZhbHVlXCI9PT11JiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP3U9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PXUmJiEwPT09bz9vPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KHUpP3U9XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KHUrdCkmJiFWKGUudHlwZSk/dT1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3QodSk/dT11LnRvTG93ZXJDYXNlKCk6UC50ZXN0KHUpP3U9dS5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09byYmKG89dm9pZCAwKSxyW3VdPW8pfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPXYoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPXYoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoRy5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixHKSksbi4kJHR5cGVvZj1qLEomJkoobil9O3ZhciBLPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe0smJksobikscT1uLl9fY307dmFyIFE9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBxLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LFg9XCIxNy4wLjJcIjtmdW5jdGlvbiBubihuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gdG4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBlbihuKXtyZXR1cm4gdG4obik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBybihuKXtyZXR1cm4hIW4uX19rJiYocChudWxsLG4pLCEwKX1mdW5jdGlvbiB1bihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBvbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxsbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxmbj1kO2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjp1LHVzZUltcGVyYXRpdmVIYW5kbGU6byx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6bCx1c2VDb250ZXh0OmYsdXNlRGVidWdWYWx1ZTpjLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjprLHJlbmRlcjp6LGh5ZHJhdGU6Qix1bm1vdW50Q29tcG9uZW50QXROb2RlOnJuLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0Ol8sY3JlYXRlRmFjdG9yeTpubixjbG9uZUVsZW1lbnQ6ZW4sY3JlYXRlUmVmOmIsRnJhZ21lbnQ6ZCxpc1ZhbGlkRWxlbWVudDp0bixmaW5kRE9NTm9kZTp1bixDb21wb25lbnQ6YSxQdXJlQ29tcG9uZW50OkUsbWVtbzpnLGZvcndhcmRSZWY6eCxmbHVzaFN5bmM6bG4sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6b24sU3RyaWN0TW9kZTpkLFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0Ok0sbGF6eTpGLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlF9O2V4cG9ydHtYIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbix6IGFzIHJlbmRlcixCIGFzIGh5ZHJhdGUscm4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCxubiBhcyBjcmVhdGVGYWN0b3J5LGVuIGFzIGNsb25lRWxlbWVudCx0biBhcyBpc1ZhbGlkRWxlbWVudCx1biBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixsbiBhcyBmbHVzaFN5bmMsb24gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxRIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJleHBvcnQgY29uc3QgRXZlbnREZXRhaWwgPSBTeW1ib2woXCJldmVudC1kZXRhaWxcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiBlbmhhbmNlRXZlbnQoZSwgZGV0YWlsKSB7XHJcbiAgICBsZXQgZXZlbnQgPSBlO1xyXG4gICAgZXZlbnRbRXZlbnREZXRhaWxdID0gZGV0YWlsO1xyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZFByb3BzLCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxubGV0IHB1bHNlID0gKFwidmlicmF0ZVwiIGluIG5hdmlnYXRvcikgPyAoKCkgPT4gbmF2aWdhdG9yLnZpYnJhdGUoMTApKSA6ICgoKSA9PiB7IH0pO1xyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBlbmFibGUvZGlzYWJsZSBidXR0b24gdmlicmF0aW9uIHB1bHNlcyBvbiBhbiBhcHAtd2lkZSBzY2FsZS5cclxuICpcclxuICpcclxuICogQHBhcmFtIGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIGEgYnV0dG9uIGlzIHRhcHBlZC5cclxuICogKERlZmF1bHQgaXMgYCgpID0+IG5hdmlnYXRvci52aWJyYXRlKDEwKWAgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGl0LCBhIG5vb3Agb3RoZXJ3aXNlKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJ1dHRvblZpYnJhdGUoZnVuYykge1xyXG4gICAgcHVsc2UgPSBmdW5jO1xyXG59XHJcbmZ1bmN0aW9uIGV4Y2x1ZGVzKHRhcmdldCwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGU/Llt0YXJnZXRdKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmNvbnN0IE5hdmlnYXRpb25LZXlzID0gbmV3IFNldChbXCJBcnJvd0Rvd25cIiwgXCJBcnJvd1VwXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dSaWdodFwiLCBcIlRhYlwiXSk7XHJcbi8qKlxyXG4gKiBFYXN5IHdheSB0byBcInBvbHlmaWxsXCIgYnV0dG9uLWxpa2UgaW50ZXJhY3Rpb25zIG9udG8sIGUuZy4sIGEgZGl2LlxyXG4gKlxyXG4gKiBBZGRzIGNsaWNrLCBzcGFjZSBvbiBrZXlEb3duLCBhbmQgZW50ZXIgb24ga2V5VXAsIGFzIHdlbGwgYXMgaGFwdGljXHJcbiAqIGZlZWRiYWNrIHZpYSBhIG1vbWVudGFyeSB2aWJyYXRpb24gcHVsc2Ugd2hlbiB0aGVyZSdzIGFuIG9uQ2xpY2sgaGFuZGxlciBwcm92aWRlZFxyXG4gKiAodGhpcyBjYW4gYmUgZGlzYWJsZWQgYXBwLXdpZGUgd2l0aCBgc2V0QnV0dG9uVmlicmF0ZWApLlxyXG4gKlxyXG4gKiBJbiBhZGRpdGlvbiwgd2hlbiB0aGUgQ1NTIGA6YWN0aXZlYCBwc2V1ZG8tY2xhc3Mgd291bGQgYXBwbHkgdG8gYSBub3JtYWwgYnV0dG9uXHJcbiAqIChpLmUuIHdoZW4gaG9sZGluZyB0aGUgc3BhY2ViYXIgb3IgZHVyaW5nIG1vdXNlZG93biksIGB7IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IFwidHJ1ZVwiIH1gXHJcbiAqIGlzIGFkZGVkIHRvIHRoZSBwcm9wcy4gIFlvdSBjYW4gZWl0aGVyIGxldCBpdCBwYXNzIHRocm91Z2ggYW5kIHN0eWxlIGl0IHRocm91Z2ggbmV3IENTUyxcclxuICogb3IgaW5zcGVjdCB0aGUgcmV0dXJuZWQgcHJvcHMgZm9yIGl0IGFuZCBhZGQgZS5nLiBhbiBgLmFjdGl2ZWAgY2xhc3MgZm9yIGV4aXN0aW5nIENTU1xyXG4gKlxyXG4gKiBAcGFyYW0gb25DbGlja1xyXG4gKiBAcGFyYW0gZXhjbHVkZSBXaGV0aGVyIHRoZSBwb2x5ZmlsbCBzaG91bGQgYXBwbHkgKGNhbiBzcGVjaWZ5IGZvciBzcGVjaWZpYyBpbnRlcmFjdGlvbnMpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMob25DbGlja1N5bmMsIGV4Y2x1ZGUpIHtcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZSwgZ2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVByZXNzID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAob25DbGlja1N5bmMpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBwdWxzZSgpO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBvbkNsaWNrU3luYyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9uS2V5VXAgPSBleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogKGUpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlICYmIGUua2V5ID09IFwiIFwiICYmIG9uQ2xpY2tTeW5jKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZVByZXNzKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMClcclxuICAgICAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uTW91c2VVcCA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVQcmVzcyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvbkJsdXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25Nb3VzZU91dCA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiBvbkJsdXI7XHJcbiAgICBjb25zdCBvbktleURvd24gPSBleGNsdWRlcyhcInNwYWNlXCIsIGV4Y2x1ZGUpICYmIGV4Y2x1ZGVzKFwiZW50ZXJcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PSBcIiBcIiAmJiBvbkNsaWNrU3luYyAmJiAhZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSkge1xyXG4gICAgICAgICAgICAvLyBXZSBkb24ndCBhY3R1YWxseSBhY3RpdmF0ZSBpdCBvbiBhIHNwYWNlIGtleWRvd25cclxuICAgICAgICAgICAgLy8gYnV0IHdlIGRvIHByZXZlbnREZWZhdWx0IHRvIHN0b3AgdGhlIHBhZ2UgZnJvbSBzY3JvbGxpbmcuXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiICYmIG9uQ2xpY2tTeW5jICYmICFleGNsdWRlcyhcImVudGVyXCIsIGV4Y2x1ZGUpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb25DbGlja1N5bmMoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24sIG9uS2V5VXAsIG9uQmx1ciwgb25Nb3VzZURvd24sIG9uTW91c2VVcCwgb25Nb3VzZU91dCwgLi4ueyBcImRhdGEtcHNldWRvLWFjdGl2ZVwiOiBhY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9IH0sIHByb3BzKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvbih7IHRhZywgcHJlc3NlZCwgb25QcmVzcyB9KSB7XHJcbiAgICBmdW5jdGlvbiB1c2VBcmlhQnV0dG9uUHJvcHMoeyBcImFyaWEtcHJlc3NlZFwiOiBhcmlhUHJlc3NlZCwgdGFiSW5kZXgsIHJvbGUsIC4uLnAgfSkge1xyXG4gICAgICAgIGNvbnN0IHByb3BzID0gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMoKGUpID0+IG9uUHJlc3M/LihlbmhhbmNlRXZlbnQoZSwgeyBwcmVzc2VkOiBwcmVzc2VkID09IG51bGwgPyBudWxsIDogIXByZXNzZWQgfSkpLCB1bmRlZmluZWQpKHApO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvblByb3BzID0geyByb2xlLCB0YWJJbmRleCwgXCJhcmlhLXByZXNzZWRcIjogYXJpYVByZXNzZWQgPz8gKHByZXNzZWQgPT09IHRydWUgPyBcInRydWVcIiA6IHByZXNzZWQgPT09IGZhbHNlID8gXCJmYWxzZVwiIDogdW5kZWZpbmVkKSB9O1xyXG4gICAgICAgIGNvbnN0IGRpdlByb3BzID0geyAuLi5idXR0b25Qcm9wcywgdGFiSW5kZXg6IHRhYkluZGV4ID8/IDAsIHJvbGU6IHJvbGUgPz8gXCJidXR0b25cIiB9O1xyXG4gICAgICAgIGNvbnN0IGFuY2hvclByb3BzID0geyAuLi5kaXZQcm9wcyB9O1xyXG4gICAgICAgIHN3aXRjaCAodGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidXR0b25cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGJ1dHRvblByb3BzLCBwcm9wcyk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShhbmNob3JQcm9wcywgcHJvcHMpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoZGl2UHJvcHMsIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUFyaWFCdXR0b25Qcm9wc1xyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYnV0dG9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNoaWxkRmxhZywgdXNlQ2hpbGRNYW5hZ2VyLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpbmVhck5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvbih7IGV4cGFuZGVkSW5kZXgsIHNldEV4cGFuZGVkSW5kZXggfSkge1xyXG4gICAgY29uc3QgW2xhc3RGb2N1c2VkSW5kZXgsIHNldExhc3RGb2N1c2VkSW5kZXgsIGdldExhc3RGb2N1c2VkSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzdGFibGVTZXRFeHBhbmRlZEluZGV4ID0gdXNlU3RhYmxlQ2FsbGJhY2soc2V0RXhwYW5kZWRJbmRleCA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zLCB1c2VNYW5hZ2VkQ2hpbGQ6IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24gfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb0ZpcnN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KCgwKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlVG9MYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KChtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChpID0+ICgoaSA/PyAwKSAtIDEpKTsgfSwgW10pO1xyXG4gICAgY29uc3QgbmF2aWdhdGVUb05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoaSA9PiAoKGkgPz8gMCkgKyAxKSk7IH0sIFtdKTtcclxuICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiYmxvY2tcIiwgaW5kZXg6IGdldExhc3RGb2N1c2VkSW5kZXgoKSwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0IH0pO1xyXG4gICAgLy8gQW55IHRpbWUgbGlzdCBtYW5hZ2VtZW50IGNoYW5nZXMgdGhlIGZvY3VzZWQgaW5kZXgsIG1hbnVhbGx5IGZvY3VzIHRoZSBjaGlsZFxyXG4gICAgLy8gVE9ETzogQ2FuIHRoaXMgYmUgY3V0P1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobGFzdEZvY3VzZWRJbmRleCAhPSBudWxsICYmIGxhc3RGb2N1c2VkSW5kZXggPj0gMClcclxuICAgICAgICAgICAgbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2xhc3RGb2N1c2VkSW5kZXhdPy5mb2N1cygpO1xyXG4gICAgfSwgW2xhc3RGb2N1c2VkSW5kZXhdKTtcclxuICAgIHVzZUNoaWxkRmxhZyhleHBhbmRlZEluZGV4LCBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMubGVuZ3RoLCAoaSwgb3BlbikgPT4gbWFuYWdlZEFjY29yZGlvblNlY3Rpb25zW2ldPy5zZXRPcGVuRnJvbVBhcmVudChvcGVuKSk7XHJcbiAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbiA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW29wZW5Gcm9tUGFyZW50LCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogYm9keVJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VCb2R5UmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRCb2R5SWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1ib2R5LVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgcmFuZG9tSWQ6IGhlYWRSYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlSGVhZFJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtYWNjb3JkaW9uLXNlY3Rpb24taGVhZGVyLVwiIH0pO1xyXG4gICAgICAgIGxldCBvcGVuID0gKChhcmdzLm9wZW4gPz8gb3BlbkZyb21QYXJlbnQpID8/IG51bGwpO1xyXG4gICAgICAgIC8vIFRPRE86IENvbnZlcnQgdG8gdXNlIHVzZU1hbmFnZWRDaGlsZCBzbyB0aGF0IHRoaXMgaG9vayBcclxuICAgICAgICAvLyBpcyBzdGFibGUgd2l0aG91dCAoZGlyZWN0bHkpIGRlcGVuZGluZyBvbiB0aGUgb3BlbiBzdGF0ZS5cclxuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyKHsgdGFnIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7IGVsZW1lbnQ/LmZvY3VzKCk7IH0sIFtlbGVtZW50XSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24oeyBpbmRleDogYXJncy5pbmRleCwgb3Blbjogb3Blbiwgc2V0T3BlbkZyb21QYXJlbnQsIGZvY3VzIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyh7IFtcImFyaWEtZXhwYW5kZWRcIl06IGFyaWFFeHBhbmRlZCwgW1wiYXJpYS1kaXNhYmxlZFwiXTogYXJpYURpc2FibGVkLCAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkZvY3VzID0gKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KGFyZ3MuaW5kZXgpOyB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE9wZW5Gcm9tUGFyZW50KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWJsZVNldEV4cGFuZGVkSW5kZXgobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KGFyZ3MuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCByZXRCID0gdXNlTWVyZ2VkUHJvcHMoKSh7IHRhYkluZGV4OiAwIH0sIHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHVuZGVmaW5lZCkocHJvcHMpKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXQzID0gdXNlTWVyZ2VkUHJvcHMoKSh1c2VIZWFkUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHtcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogKGFyaWFFeHBhbmRlZCA/PyAoISFvcGVuKS50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZGlzYWJsZWRcIjogKGFyaWFEaXNhYmxlZCA/PyAob3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkKSksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udXNlUmVmRWxlbWVudFByb3BzKHVzZU1hbmFnZWRDaGlsZFByb3BzKHJldEIpKVxyXG4gICAgICAgICAgICAgICAgfSkpLCB7IG9uRm9jdXMgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMocmV0Myk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICByZXR1cm4geyB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlclByb3BzIH07XHJcbiAgICAgICAgfSwgW29wZW5dKTtcclxuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHkgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHkoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzKHsgcm9sZSwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldDEgPSB1c2VSZWZlcmVuY2VkSGVhZElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikoeyByb2xlOiByb2xlID8/IFwicmVnaW9uXCIsIC4uLnByb3BzIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldDIgPSB1c2VCb2R5UmFuZG9tSWRQcm9wcyhyZXQxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGV4cGFuZGVkOiBvcGVuLFxyXG4gICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlcixcclxuICAgICAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25Cb2R5LFxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hY2NvcmRpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG4vKipcclxuICogQWRkcyBhbiBJRCBhbmQgXCJhcmlhLWxhYmVsbGVkYnlcIiBmb3IgdHdvIGVsZW1lbnRzLCBhbiBcImlucHV0XCIgZWxlbWVudCBhbmQgYSBcImxhYmVsXCIgZWxlbWVudC5cclxuICpcclxuICogUmV0dXJucyB0aGUgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBob29rcyBpZiB5b3UgbmVlZCB0byBhbHNvIGFkZCBvdGhlciBJRC1yZWZlcmVuY2luZyBhdHRyaWJ1dGVzLCBsaWtlIGBmb3JgXHJcbiAqXHJcbiAqIEBzZWUgdXNlSW5wdXRMYWJlbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCwgYmFja3VwVGV4dCB9ID0geyBsYWJlbFByZWZpeDogXCJsYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiaW5wdXQtXCIgfSkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50OiBsYWJlbEVsZW1lbnQsIGdldEVsZW1lbnQ6IGdldExhYmVsRWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgY29uc3QgeyBlbGVtZW50OiBpbnB1dEVsZW1lbnQsIGdldEVsZW1lbnQ6IGdldElucHV0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VJbnB1dFJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VMYWJlbFJhbmRvbUlkUHJvcHMsIGlkOiBsYWJlbElkLCByYW5kb21JZDogbGFiZWxSYW5kb21JZCwgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBsYWJlbFByZWZpeCB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlSW5wdXRSYW5kb21JZFByb3BzLCBpZDogaW5wdXRJZCwgcmFuZG9tSWQ6IGlucHV0UmFuZG9tSWQsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogaW5wdXRQcmVmaXggfSk7XHJcbiAgICBjb25zdCBsYWJlbEhhc01vdW50ZWQgPSAhIShsYWJlbEVsZW1lbnQpO1xyXG4gICAgY29uc3QgaW5wdXRIYXNNb3VudGVkID0gISEoaW5wdXRFbGVtZW50KTtcclxuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wczogKHByb3BzKSA9PiB7IHJldHVybiB1c2VMYWJlbFJhbmRvbUlkUHJvcHModXNlTGFiZWxSZWZFbGVtZW50UHJvcHMocHJvcHMpKTsgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VHZW5lcmljTGFiZWxJbnB1dCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUdlbmVyaWNMYWJlbElucHV0KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHM6ICh7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZGJ5LCBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHVzZUlucHV0UmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHVzZUlucHV0UmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBcImFyaWEtbGFiZWxcIjogKCFsYWJlbEhhc01vdW50ZWQgPyBiYWNrdXBUZXh0IDogYXJpYUxhYmVsKSA/PyBhcmlhTGFiZWwgfSwgcHJvcHMpKSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbbGFiZWxIYXNNb3VudGVkXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZUdlbmVyaWNMYWJlbElucHV0LFxyXG4gICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsLFxyXG4gICAgICAgIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsXHJcbiAgICAgICAgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyxcclxuICAgICAgICBsYWJlbElkLFxyXG4gICAgICAgIGlucHV0SWQsXHJcbiAgICAgICAgbGFiZWxFbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudCxcclxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50LFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogSGFuZGxlcyB0aGUgYXR0cmlidXRlcyBgaWRgLCBgZm9yYCwgYW5kIGBhcmlhLWxhYmVsbGVkYnlgIGZvciB0byByZWxhdGVkIGVsZW1lbnRzLlxyXG4gKlxyXG4gKiBJdCdzIGFzc3VtZWQgdGhhdCB0aGUgbGFiZWwgaXMgYW4gYEhUTUxMYWJlbEVsZW1lbnRgLCBhbmQgdGhlIGlucHV0IGlzIHNvbWV0aGluZyBmb3Igd2hpY2hcclxuICogdGhlIGBmb3JgIGF0dHJpYnV0ZSBjYW4gcmVmZXJlbmNlLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlucHV0TGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXggfSA9IHsgbGFiZWxQcmVmaXg6IFwibGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImlucHV0LVwiIH0pIHtcclxuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBpbnB1dElkLCBsYWJlbElkLCBpbnB1dEVsZW1lbnQsIGdldElucHV0RWxlbWVudCwgbGFiZWxFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9KTtcclxuICAgIGNvbnN0IHVzZUlucHV0TGFiZWxMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUlucHV0TGFiZWxMYWJlbCh7IHRhZyB9KSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxMYWJlbCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZUlucHV0TGFiZWxMYWJlbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRoRm9yID0gdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcyhcImZvclwiKShwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRob3V0Rm9yID0gcHJvcHM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyh0YWcgPT0gXCJsYWJlbFwiID8gd2l0aEZvciA6IHdpdGhvdXRGb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxJbnB1dF0pO1xyXG4gICAgY29uc3QgdXNlSW5wdXRMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlSW5wdXRMYWJlbElucHV0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VJbnB1dExhYmVsSW5wdXRQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMocHJvcHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VJbnB1dExhYmVsTGFiZWwsXHJcbiAgICAgICAgdXNlSW5wdXRMYWJlbElucHV0LFxyXG4gICAgICAgIGxhYmVsSWQsXHJcbiAgICAgICAgaW5wdXRJZCxcclxuICAgICAgICBpbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgbGFiZWxFbGVtZW50LFxyXG4gICAgICAgIGdldElucHV0RWxlbWVudCxcclxuICAgICAgICBnZXRMYWJlbEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuY29uc3QgaGFuZGxlc0lucHV0ID0gKHRhZywgbGFiZWxQb3NpdGlvbiwgd2hpY2gpID0+IHtcclxuICAgIGlmIChsYWJlbFBvc2l0aW9uID09PSBcInNlcGFyYXRlXCIpIHtcclxuICAgICAgICBpZiAod2hpY2ggPT09IFwiaW5wdXQtZWxlbWVudFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlIGlmICh3aGljaCA9PT0gXCJsYWJlbC1lbGVtZW50XCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0YWcgIT0gXCJpbnB1dFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGFiZWxQb3NpdGlvbiA9PT0gXCJ3cmFwcGluZ1wiKSB7XHJcbiAgICAgICAgaWYgKHdoaWNoID09PSBcImlucHV0LWVsZW1lbnRcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh3aGljaCA9PSBcImxhYmVsLWVsZW1lbnRcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBIYW5kbGVzIGxhYmVsIHR5cGUgKHdyYXBwaW5nIG9yIHNlcGFyYXRlKSBmb3IgY2hlY2tib3hlcywgcmFkaW9zLCBzd2l0Y2hlcywgZXRjLlxyXG4gKiBAcGFyYW0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlKHsgY2hlY2tlZCwgZGlzYWJsZWQsIGxhYmVsUG9zaXRpb24sIG9uSW5wdXQsIHJvbGUgfSkge1xyXG4gICAgY29uc3Qgc3RhYmxlT25JbnB1dCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgb25JbnB1dD8uKGUpOyB9KTtcclxuICAgIGNvbnN0IHsgaW5wdXRJZCwgbGFiZWxJZCwgdXNlSW5wdXRMYWJlbElucHV0OiB1c2VJTElucHV0LCB1c2VJbnB1dExhYmVsTGFiZWw6IHVzZUlMTGFiZWwsIGdldExhYmVsRWxlbWVudCwgZ2V0SW5wdXRFbGVtZW50IH0gPSB1c2VJbnB1dExhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1pbnB1dC1cIiB9KTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50KHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUlucHV0TGFiZWxJbnB1dFByb3BzOiB1c2VJTElucHV0UHJvcHMgfSA9IHVzZUlMSW5wdXQoKTtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgIC8vIG9uQ2xpY2sgYW5kIG9uQ2hhbmdlIGFyZSBhIGJpdCBtZXNzeSwgc28gd2UgbmVlZCB0b1xyXG4gICAgICAgIC8vICphbHdheXMqIG1ha2Ugc3VyZSB0aGF0IHRoZSB2aXNpYmxlIHN0YXRlIGlzIGNvcnJlY3RcclxuICAgICAgICAvLyBhZnRlciBhbGwgdGhlIGV2ZW50IGR1c3Qgc2V0dGxlcy5cclxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMjc0NSxcclxuICAgICAgICAvLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMTg5OSNpc3N1ZWNvbW1lbnQtNTI1NjkwMTk0XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgdGFnID09IFwiaW5wdXRcIikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0YWcsIGVsZW1lbnQsIGNoZWNrZWRdKTtcclxuICAgICAgICByZXR1cm4geyBpbnB1dEVsZW1lbnQ6IGVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudFByb3BzIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XHJcbiAgICAgICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiwgQ2hyb21lIHdvbid0IGZpcmUgb25JbnB1dCBldmVudHMgZm9yIHJhZGlvIGJ1dHRvbnMgdGhhdCBhcmUgdGFiSW5kZXg9LTE/P1xyXG4gICAgICAgICAgICAvLyBOZWVkcyBpbnZlc3RpZ2F0aW5nLCBidXQgb25JbnB1dCB3b3JrcyBmaW5lIGluIEZpcmVmb3hcclxuICAgICAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycyhkaXNhYmxlZCB8fCAhaGFuZGxlc0lucHV0KHRhZywgbGFiZWxQb3NpdGlvbiwgXCJpbnB1dC1lbGVtZW50XCIpID8gdW5kZWZpbmVkIDogc3RhYmxlT25JbnB1dCwgdW5kZWZpbmVkKSh7fSk7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT0gXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgcHJvcHMub25JbnB1dCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHByb3BzID0gdXNlUmVmRWxlbWVudFByb3BzKHVzZUlMSW5wdXRQcm9wcyhwcm9wcykpO1xyXG4gICAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PSBcIndyYXBwaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhlIHdyYXBwZWQgbGFiZWwgaGFuZGxlcyBhbGwgaW50ZXJhY3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhpcyBlbGVtZW50IGNhbid0IGJlIGludGVyYWN0ZWQgd2l0aFxyXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiBpdCdzIGFuIGlucHV0IGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5pbmVydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25Gb2N1cyA9IGUgPT4gZ2V0TGFiZWxFbGVtZW50KCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWcgPT09IFwiaW5wdXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IHJvbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1jaGVja2VkXCJdID0gY2hlY2tlZCA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWRpc2FibGVkXCJdID0gZGlzYWJsZWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBsYWJlbCBjbGlja3MgY2FuJ3QgYWZmZWN0IHRoZSBjaGVja2JveCB3aGlsZSBpdCdzIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2xpY2sgPSBkaXNhYmxlZCA/ICgoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IH0pIDogcHJvcHMub25DbGljaztcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkocDAsIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlSUxJbnB1dCwgcm9sZSwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWQsIGNoZWNrZWRdKTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcclxuICAgICAgICBjb25zdCB7IHVzZUlucHV0TGFiZWxMYWJlbFByb3BzOiB1c2VJTExhYmVsUHJvcHMgfSA9IHVzZUlMTGFiZWwoeyB0YWcgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQcm9wcyA9IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzKGRpc2FibGVkIHx8ICFoYW5kbGVzSW5wdXQodGFnLCBsYWJlbFBvc2l0aW9uLCBcImxhYmVsLWVsZW1lbnRcIikgPyB1bmRlZmluZWQgOiBzdGFibGVPbklucHV0LCB1bmRlZmluZWQpKHt9KTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wcy5yb2xlID0gcm9sZTtcclxuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtY2hlY2tlZFwiXSA9IGNoZWNrZWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBvbmUgY2FzZSB3aGVyZSB0aGVyZSdzIGFsbW9zdCBub3RoaW5nIHRvIGRvXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgbW9zdCBub3JtYWwgY2FzZSB3aGVyZSBldmVyeXRoaW5nIGFjdHMgYWNjb3JkaW5nIG5vcm1hbCBIVE1MIG1lY2hhbmljcy5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBKdXN0IG1ha2Ugc3VyZSB0aGF0IGxhYmVsIGNsaWNrcyBjYW4ndCBhZmZlY3QgdGhlIGNoZWNrYm94IHdoaWxlIGl0J3MgZGlzYWJsZWRcclxuICAgICAgICAgICAgbmV3UHJvcHMub25DbGljayA9IGRpc2FibGVkID8gKChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfSkgOiBuZXdQcm9wcy5vbkNsaWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgdXNlSUxMYWJlbFByb3BzKHAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzIH07XHJcbiAgICB9LCBbdXNlSUxMYWJlbCwgZGlzYWJsZWQsIGNoZWNrZWQsIHJvbGUsIGxhYmVsUG9zaXRpb25dKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50LFxyXG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCxcclxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYWJlbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcclxuaW1wb3J0IHsgdXNlQ2hlY2tib3hMaWtlIH0gZnJvbSBcIi4vdXNlLWxhYmVsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhQ2hlY2tib3goeyBsYWJlbFBvc2l0aW9uLCBjaGVja2VkLCBvbklucHV0LCBkaXNhYmxlZCB9KSB7XHJcbiAgICBjb25zdCBvbklucHV0RW5oYW5jZWQgPSAoZSkgPT4gb25JbnB1dD8uKGVuaGFuY2VFdmVudChlLCB7IGNoZWNrZWQ6ICFjaGVja2VkIH0pKTtcclxuICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50IH0gPSB1c2VDaGVja2JveExpa2UoeyBjaGVja2VkOiAhIWNoZWNrZWQsIGxhYmVsUG9zaXRpb24sIHJvbGU6IFwiY2hlY2tib3hcIiwgZGlzYWJsZWQsIG9uSW5wdXQ6IG9uSW5wdXRFbmhhbmNlZCB9KTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94SW5wdXRFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQoeyB0YWcgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgaW5wdXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50KHsgdGFnIH0pO1xyXG4gICAgICAgIGNvbnN0IGlzTWl4ZWQgPSAoY2hlY2tlZCA9PSBcIm1peGVkXCIpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dEVsZW1lbnQgJiYgdGFnID09PSBcImlucHV0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pbmRldGVybWluYXRlID0gaXNNaXhlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtpbnB1dEVsZW1lbnQsIGlzTWl4ZWQsIHRhZ10pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94SW5wdXRFbGVtZW50UHJvcHMgfTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyhwMCk7XHJcbiAgICAgICAgICAgIHByb3BzLmNoZWNrZWQgPz89ICEhY2hlY2tlZDtcclxuICAgICAgICAgICAgaWYgKHRhZyA9PSBcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgY2hlY2tlZCwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWRdKTtcclxuICAgIGNvbnN0IHVzZUNoZWNrYm94TGFiZWxFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQoeyB0YWcgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMgfSA9IHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCh7IHRhZyB9KTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMocHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRQcm9wcyB9O1xyXG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCwgZGlzYWJsZWQsIGxhYmVsUG9zaXRpb25dKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoZWNrYm94LmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuLyoqXHJcbiAqIFJlZmVycyB0byB0aHJlZSBkaWZmZXJlbnQgdHlwZXMgb2YgZWxlbWVudHM6XHJcbiAqXHJcbiAqIDEuIFRoZSBwYXJlbnQgY2hlY2tib3gsIHRoYXQgcmVwcmVzZW50cyB0aGUgc3RhdGUgb2YgYWxsIHRoZSBjaGlsZCBjaGVja2JveGVzLlxyXG4gKiAyLiBUaGUgY2hpbGQgY29udGFpbmVyLCB0aGF0IGlzIHByb2JhYmx5IGEgPGRpdj4gZWxlbWVudCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgY2hpbGQgY2hlY2tib3hlcy5cclxuICogMy4gVGhlIGNoaWxkIGNoZWNrYm94ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja2JveEdyb3VwKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIHNob3VsZEZvY3VzT25DaGFuZ2UgfSkge1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHRhYmJhYmxlSW5kZXgsIGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgc2hvdWxkRm9jdXNPbkNoYW5nZSB9KTtcclxuICAgIC8vY29uc3QgW3VuY2hlY2tlZENvdW50LCBzZXRVbmhlY2tlZENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoZWNrZWRDb3VudCwgc2V0Q2hlY2tlZENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY2hlY2tlZEluZGljZXMgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IFtzZWxmSXNDaGVja2VkLCBzZXRTZWxmSXNDaGVja2VkLCBnZXRTZWxmSXNDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIElmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSBwYXJlbnQgY2hlY2tib3gncyB2YWx1ZSwgdGhlbiB0aGlzIHJlZiBob2xkcyBhIG1lbW9yeSBvZiB3aGF0IHZhbHVlcyB3ZXJlIGhlbGQgYmVmb3JlLlxyXG4gICAgLy8gT3RoZXJ3aXNlLCBpdCdzIG51bGwgd2hlbiB0aGUgbGFzdCBpbnB1dCB3YXMgZnJvbSBhIGNoaWxkIGNoZWNrYm94LiBcclxuICAgIGNvbnN0IHNhdmVkQ2hlY2tlZFZhbHVlcyA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IG9uQ2hlY2tib3hHcm91cElucHV0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2Ugc3RhcnQgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcGFyZW50IGNoZWNrYm94LFxyXG4gICAgICAgIC8vIHNhdmUgdGhlIGN1cnJlbnQgY2hpbGQgc3RhdGVzXHJcbiAgICAgICAgaWYgKHNhdmVkQ2hlY2tlZFZhbHVlcy5jdXJyZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQuc2V0KGNoaWxkLmluZGV4LCBjaGlsZC5nZXRDaGVja2VkKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbGZJc0NoZWNrZWQgPSBnZXRTZWxmSXNDaGVja2VkKCk7XHJcbiAgICAgICAgaWYgKHNlbGZJc0NoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFuYWdlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRDaGVja2VkKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmSXNDaGVja2VkID09PSBcIm1peGVkXCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFuYWdlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRDaGVja2VkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNldENoZWNrZWQoc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQuZ2V0KGNoaWxkLmluZGV4KSA/PyBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBjaGlsZCBJRHMsIGFuZCBhbnkgdGltZSBhbnkgb2YgdGhlbSBjaGFuZ2UsIFxyXG4gICAgLy8gZ2VuZXJhdGUgYSBuZXcgc3RyaW5nIHdpdGggYWxsIG9mIHRoZW0gY29uY2F0ZW5hdGVkIHRvZ2V0aGVyXHJcbiAgICAvLyAoYnV0IG9ubHkgb25jZSBwZXIgcmVuZGVyKTtcclxuICAgIGNvbnN0IGFsbElkcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgY29uc3QgW2FyaWFDb250cm9scywgc2V0QXJpYUNvbnRyb2xzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VwZGF0ZUluZGV4LCBzZXRJZFVwZGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgbm90aWZ5Q2hlY2tlZCA9IHVzZUNhbGxiYWNrKChpbmRleCwgY2hlY2tlZCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tlZEluZGljZXMuY3VycmVudC5oYXMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyArIDEpKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuYWRkKGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRJbmRpY2VzLmN1cnJlbnQuaGFzKGluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENvdW50KGMgPT4gKGMgLSAxKSk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbc2V0Q2hlY2tlZENvdW50LCBjaGVja2VkSW5kaWNlc10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgc2V0U2VsZklzQ2hlY2tlZChwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCIpO1xyXG4gICAgfSwgW3NldFNlbGZJc0NoZWNrZWQsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgsIGNoZWNrZWRDb3VudF0pO1xyXG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cENoZWNrYm94UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1jb250cm9sc1wiOiBhcmlhQ29udHJvbHMgfSwgcHJvcHMpO1xyXG4gICAgfSwgW2FyaWFDb250cm9sc10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBcmlhQ29udHJvbHMoQXJyYXkuZnJvbShhbGxJZHMuY3VycmVudCkuam9pbihcIiBcIikpO1xyXG4gICAgfSwgW3VwZGF0ZUluZGV4XSk7XHJcbiAgICBjb25zdCB1c2VDaGVja2JveEdyb3VwQ2hpbGQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoeyBpbmRleCwgdGV4dCwgY2hlY2tlZCwgaWQsIHNldENoZWNrZWQgfSkge1xyXG4gICAgICAgIGNvbnN0IGdldENoZWNrZWQgPSB1c2VTdGFibGVHZXR0ZXIoY2hlY2tlZCk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuYWRkKGlkKTtcclxuICAgICAgICAgICAgc2V0SWRVcGRhdGVJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGxJZHMuY3VycmVudC5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0SWRVcGRhdGVJbmRleChpID0+ICsraSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW2lkXSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgbm90aWZ5Q2hlY2tlZChpbmRleCwgY2hlY2tlZCk7XHJcbiAgICAgICAgfSwgW2luZGV4LCBjaGVja2VkXSk7XHJcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IGluZGV4LCB0ZXh0LCBpZCwgZ2V0Q2hlY2tlZCwgc2V0Q2hlY2tlZCB9KTtcclxuICAgICAgICBjb25zdCBvbklucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA9IG51bGw7IH0sIFtzYXZlZENoZWNrZWRWYWx1ZXNdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWJiYWJsZSxcclxuICAgICAgICAgICAgdXNlQ2hlY2tib3hHcm91cENoaWxkUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uSW5wdXQgfSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHByb3BzKSksIFt1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsIG9uSW5wdXRdKVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbbm90aWZ5Q2hlY2tlZCwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZF0pO1xyXG4gICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hHcm91cENoaWxkLCB1c2VDaGVja2JveEdyb3VwQ2hlY2tib3hQcm9wcywgc2VsZklzQ2hlY2tlZCwgcGVyY2VudENoZWNrZWQ6IChjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSwgb25DaGVja2JveEdyb3VwSW5wdXQsIHRhYmJhYmxlSW5kZXgsIGZvY3VzOiBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3gtZ3JvdXAuanMubWFwIiwiaW1wb3J0IHsgdXNlRm9jdXNUcmFwLCB1c2VHbG9iYWxIYW5kbGVyLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciBhIG1vZGFsLWxpa2Ugc29mdC1kaXNtaXNzIGludGVyYWN0aW9uLlxyXG4gKlxyXG4gKiBUaGF0IGlzLCBhbnkgY2xpY2tzIG9yIHRhcHMgb3V0c2lkZSBvZiB0aGUgZ2l2ZW4gY29tcG9uZW50LFxyXG4gKiBvciBhbnkgdGltZSB0aGUgRXNjYXBlIGtleSBpcyBwcmVzc2VkIHdpdGhpbiB0aGUgY29tcG9uZW50LFxyXG4gKiAod2l0aCB2YXJpb3VzIGJyb3dzZXIgb2RkaXRpZXMgcmVnYXJkaW5nIGNsaWNrcyBvbiBibGFuayBvciBpbmVydCBhcmVhcyBoYW5kbGVkKVxyXG4gKiB0aGUgY29tcG9uZW50IHdpbGwgcmVxdWVzdCB0byBjbG9zZSBpdHNlbGYuXHJcbiAqXHJcbiAqIE9mIGNvdXJzZSwgaWYgeW91IGRvbid0IGRvIGFueXRoaW5nIGluIHRoZSBgb25DbG9zZWAgZnVuY3Rpb24sXHJcbiAqIGl0IHdvbid0IGJlIGEgc29mdCBkaXNtaXNzIGFueW1vcmUuXHJcbiAqXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2UgfSkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgIGZ1bmN0aW9uIG9uQmFja2Ryb3BDbGljayhlKSB7XHJcbiAgICAgICAgLy8gQmFzaWNhbGx5LCBcIndhcyB0aGlzIGV2ZW50IGZpcmVkIG9uIHRoZSByb290LW1vc3QgZWxlbWVudCwgb3IgYXQgbGVhc3QgYW4gZWxlbWVudCBub3QgY29udGFpbmVkIGJ5IHRoZSBtb2RhbD9cIlxyXG4gICAgICAgIC8vIEVpdGhlciBjb3VsZCBiZSBob3cgdGhlIGJyb3dzZXIgaGFuZGxlcyB0aGVzZSBzb3J0cyBvZiBcImludGVyYWN0aW5nIHdpdGggbm90aGluZ1wiIGV2ZW50cy5cclxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8ICEoZWxlbWVudCAmJiBlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpKSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoXCJiYWNrZHJvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBTaW5jZSBldmVyeXRoaW5nIGVsc2UgaXMgaW5lcnQsIHdlIGxpc3RlbiBmb3IgY2FwdHVyZWQgY2xpY2tzIG9uIHRoZSB3aW5kb3dcclxuICAgIC8vICh3ZSBkb24ndCB1c2Ugb25DbGljayBzaW5jZSB0aGF0IGRvZXNuJ3QgZmlyZSB3aGVuIGNsaWNrZWQgb24gZW1wdHkvaW5lcnQgYXJlYXMpXHJcbiAgICAvLyBOb3RlOiBXZSBuZWVkIGEgKnNlcGFyYXRlKiB0b3VjaCBldmVudCBvbiBtb2JpbGUgU2FmYXJpLCBiZWNhdXNlXHJcbiAgICAvLyBpdCBkb2Vzbid0IGxldCBjbGljayBldmVudHMgYnViYmxlIG9yIGJlIGNhcHR1cmVkIGZyb20gdHJhZGl0aW9uYWxseSBub24taW50ZXJhY3RpdmUgZWxlbWVudHMsXHJcbiAgICAvLyBidXQgdG91Y2ggZXZlbnRzIHdvcmsgYXMgZXhwZWN0ZWQuXHJcbiAgICB1c2VHbG9iYWxIYW5kbGVyKHdpbmRvdywgXCJtb3VzZWRvd25cIiwgIW9wZW4gPyBudWxsIDogb25CYWNrZHJvcENsaWNrLCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICB1c2VHbG9iYWxIYW5kbGVyKHdpbmRvdywgXCJ0b3VjaHN0YXJ0XCIsICFvcGVuID8gbnVsbCA6IG9uQmFja2Ryb3BDbGljaywgeyBjYXB0dXJlOiB0cnVlIH0pO1xyXG4gICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgb25DbG9zZShcImVzY2FwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgdXNlU29mdERpc21pc3NQcm9wczogKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHVzZVJlZkVsZW1lbnRQcm9wcyh7IG9uS2V5RG93biB9KSwgcHJvcHMpIH07XHJcbn1cclxuLyoqXHJcbiAqIEEgZ2VuZXJpYyBtb2RhbCBob29rLCB1c2VkIGJ5IG1vZGFsIGRpYWxvZ3MsIGJ1dCBjYW4gYWxzb1xyXG4gKiBiZSB1c2VkIGJ5IGFueXRoaW5nIHRoYXQncyBtb2RhbCB3aXRoIGEgYmFja2Ryb3AuXHJcbiAqIEBwYXJhbSBwYXJhbTBcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTW9kYWwoeyBvcGVuLCBvbkNsb3NlIH0pIHtcclxuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcclxuICAgIGNvbnN0IFttb2RhbERlc2NyaWJlZEJ5Qm9keSwgc2V0TW9kYWxEZXNjcmliZWRCeUJvZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlSGlkZVNjcm9sbChvcGVuKTtcclxuICAgIGNvbnN0IHsgaWQ6IG1vZGFsSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1vZGFsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1vZGFsUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLVwiIH0pO1xyXG4gICAgY29uc3QgeyBpZDogYm9keUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VCb2R5SWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZUJvZHlSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtYm9keS1cIiB9KTtcclxuICAgIGNvbnN0IHsgaWQ6IHRpdGxlSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRpdGxlSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVRpdGxlUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLXRpdGxlLVwiIH0pO1xyXG4gICAgY29uc3QgeyB1c2VTb2Z0RGlzbWlzc1Byb3BzIH0gPSB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UgfSk7XHJcbiAgICBjb25zdCB1c2VNb2RhbEJhY2tkcm9wID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxCYWNrZHJvcCgpIHtcclxuICAgICAgICBmdW5jdGlvbiB1c2VNb2RhbEJhY2tkcm9wUHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJVcDogKCkgPT4gc3RhYmxlT25DbG9zZShcImJhY2tkcm9wXCIpIH0sIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxCYWNrZHJvcFByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VNb2RhbFByb3BzID0gZnVuY3Rpb24gKHsgXCJhcmlhLW1vZGFsXCI6IGFyaWFNb2RhbCwgcm9sZSwgLi4ucDAgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlRm9jdXNUcmFwUHJvcHMgfSA9IHVzZUZvY3VzVHJhcCh7IHRyYXBBY3RpdmU6IG9wZW4gfSk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB1c2VUaXRsZVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtbGFiZWxsZWRieVwiKShwMCk7XHJcbiAgICAgICAgY29uc3QgcDIgPSB1c2VNb2RhbElkUHJvcHMocDEpO1xyXG4gICAgICAgIGNvbnN0IHBGaW5hbCA9IHVzZUJvZHlSZWZlcmVuY2luZ0lkUHJvcHMoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpKHAyKTtcclxuICAgICAgICByZXR1cm4gdXNlRm9jdXNUcmFwUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh1c2VTb2Z0RGlzbWlzc1Byb3BzKHsgcm9sZTogXCJkaWFsb2dcIiB9KSwgbW9kYWxEZXNjcmliZWRCeUJvZHkgPyBwRmluYWwgOiBwMikpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVzZU1vZGFsVGl0bGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VNb2RhbFRpdGxlKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZU1vZGFsVGl0bGVQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlVGl0bGVJZFByb3BzKHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7IHVzZU1vZGFsVGl0bGVQcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlTW9kYWxCb2R5ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxCb2R5KHsgZGVzY3JpcHRpdmUgfSkge1xyXG4gICAgICAgIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5KGRlc2NyaXB0aXZlKTtcclxuICAgICAgICBjb25zdCB1c2VNb2RhbEJvZHlQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlQm9keUlkUHJvcHMocHJvcHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxCb2R5UHJvcHMgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTW9kYWxQcm9wcyxcclxuICAgICAgICB1c2VNb2RhbFRpdGxlLFxyXG4gICAgICAgIHVzZU1vZGFsQm9keSxcclxuICAgICAgICB1c2VNb2RhbEJhY2tkcm9wXHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBBbGxvd3MgZm9yIGhpZGluZyB0aGUgc2Nyb2xsIGJhciBvZiB0aGUgcm9vdCBIVE1MIGVsZW1lbnRcclxuICogd2l0aG91dCBzaGlmdGluZyB0aGUgbGF5b3V0IG9mIHRoZSBwYWdlIG1vcmUgdGhhbiBhZGRpbmcgYSBmb3cgcGl4ZWxzXHJcbiAqIG9mIHBhZGRpbmcgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBuZWNlc3NhcnkuXHJcbiAqIEBwYXJhbSBoaWRlU2Nyb2xsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlSGlkZVNjcm9sbChoaWRlU2Nyb2xsKSB7XHJcbiAgICBjb25zdCBbc2Nyb2xsYmFyV2lkdGgsIHNldFNjcm9sbGJhcldpZHRoLCBnZXRTY3JvbGxiYXJXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhpZGVTY3JvbGwpIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoV2l0aFNjcm9sbEJhciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkb2N1bWVudC1zY3JvbGwtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9ICgrKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdIHx8IFwiMFwiKSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aFdpdGhvdXRTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxiYXJXaWR0aCA9ICh3aWR0aFdpdGhvdXRTY3JvbGxCYXIgLSB3aWR0aFdpdGhTY3JvbGxCYXIpO1xyXG4gICAgICAgICAgICAvLyBGYWlsc2FmZSAtLSBpZiB0aGlzIG1lYXN1cmluZyB0cmljayBkb2VzIHNvbWV0aGluZyB1bmV4cGVjdGVkLCBqdXN0IGlnbm9yZSBpdFxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsYmFyV2lkdGggPiA4MClcclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoID0gMDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY3JvbGxiYXItd2lkdGhcIiwgYCR7c2Nyb2xsYmFyV2lkdGh9cHhgKTtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsYmFyV2lkdGgoc2Nyb2xsYmFyV2lkdGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgLSAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWhpZGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2hpZGVTY3JvbGxdKTtcclxuICAgIHJldHVybiB7IHNjcm9sbGJhcldpZHRoLCBnZXRTY3JvbGxiYXJXaWR0aCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tb2RhbC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlQXJpYU1vZGFsIH0gZnJvbSBcIi4vdXNlLW1vZGFsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhRGlhbG9nKHsgb3Blbiwgb25DbG9zZSB9KSB7XHJcbiAgICAvLyBUT0RPOiBEaWZmZXJlbmNlcyBiZXR3ZWVuIGRpYWxvZyBhbmQgbW9kYWwgZ28gaGVyZSwgcHJlc3VtYWJseS5cclxuICAgIC8vIE5vbi1tb2RhbCBkaWFsb2dzIG5lZWQgdG8gYmUgYWJsZSB0byBiZSByZXBvc2l0aW9uZWQsIGV0Yy5cclxuICAgIGNvbnN0IHsgdXNlTW9kYWxCYWNrZHJvcCwgdXNlTW9kYWxCb2R5LCB1c2VNb2RhbFByb3BzLCB1c2VNb2RhbFRpdGxlIH0gPSB1c2VBcmlhTW9kYWwoeyBvcGVuLCBvbkNsb3NlIH0pO1xyXG4gICAgY29uc3QgdXNlRGlhbG9nQmFja2Ryb3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfSA9IHVzZU1vZGFsQmFja2Ryb3AoKTtcclxuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dCYWNrZHJvcFByb3BzOiB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfTtcclxuICAgIH0sIFt1c2VNb2RhbEJhY2tkcm9wXSk7XHJcbiAgICBjb25zdCB1c2VEaWFsb2dCb2R5ID0gdXNlQ2FsbGJhY2soKHsgZGVzY3JpcHRpdmUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTW9kYWxCb2R5UHJvcHMgfSA9IHVzZU1vZGFsQm9keSh7IGRlc2NyaXB0aXZlIH0pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ0JvZHlQcm9wczogdXNlTW9kYWxCb2R5UHJvcHMgfTtcclxuICAgIH0sIFt1c2VNb2RhbEJhY2tkcm9wXSk7XHJcbiAgICBjb25zdCB1c2VEaWFsb2dQcm9wcyA9IHVzZU1vZGFsUHJvcHM7XHJcbiAgICBjb25zdCB1c2VEaWFsb2dUaXRsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHVzZU1vZGFsVGl0bGVQcm9wcyB9ID0gdXNlTW9kYWxUaXRsZSgpO1xyXG4gICAgICAgIHJldHVybiB7IHVzZURpYWxvZ1RpdGxlUHJvcHM6IHVzZU1vZGFsVGl0bGVQcm9wcyB9O1xyXG4gICAgfSwgW3VzZU1vZGFsVGl0bGVdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlRGlhbG9nUHJvcHMsXHJcbiAgICAgICAgdXNlRGlhbG9nVGl0bGUsXHJcbiAgICAgICAgdXNlRGlhbG9nQm9keSxcclxuICAgICAgICB1c2VEaWFsb2dCYWNrZHJvcFxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZGlhbG9nLmpzLm1hcCIsImltcG9ydCB7IHVzZUhhc0ZvY3VzLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VHZW5lcmljTGFiZWwgfSBmcm9tIFwiLi91c2UtbGFiZWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94TXVsdGkoeyAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IFtmb2N1c2VkSW5uZXIsIHNldEZvY3VzZWRJbm5lciwgZ2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoeyBzZXRGb2N1c2VkSW5uZXIgfSk7XHJcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1saXN0Ym94LWxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJhcmlhLWxpc3Rib3gtXCIgfSk7XHJcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCBjdXJyZW50VHlwZWFoZWFkLCBmb2N1c0N1cnJlbnQsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0Rm9jdXNlZElubmVyIH0pO1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xyXG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICBjb25zdCBbc2hpZnRIZWxkLCBzZXRTaGlmdEhlbGQsIGdldFNoaWZ0SGVsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0eXBlYWhlYWRJblByb2dyZXNzID0gKCEhY3VycmVudFR5cGVhaGVhZCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpXS5zZXRUeXBlYWhlYWRJblByb2dyZXNzKHR5cGVhaGVhZEluUHJvZ3Jlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0eXBlYWhlYWRJblByb2dyZXNzLCBjaGlsZENvdW50XSk7XHJcbiAgICBjb25zdCB1c2VMaXN0Ym94TXVsdGlJdGVtID0gdXNlQ2FsbGJhY2soKGluZm8pID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGluZm8uc2VsZWN0ZWQ7XHJcbiAgICAgICAgY29uc3QgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGdldFNlbGVjdGVkID0gdXNlU3RhYmxlR2V0dGVyKHNlbGVjdGVkKTtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YWJsZU9uU2VsZWN0ID0gdXNlU3RhYmxlQ2FsbGJhY2soaW5mby5vblNlbGVjdCA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IC4uLmluZm8sIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3MgfSk7XHJcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0U2hpZnRIZWxkKCkpIHtcclxuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWQ6IHRydWUgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtlbGVtZW50LCB0YWJiYWJsZV0pO1xyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hNdWx0aUl0ZW1Qcm9wcywgdGFiYmFibGUgfTtcclxuICAgICAgICBmdW5jdGlvbiB1c2VMaXN0Ym94TXVsdGlJdGVtUHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IC4uLmUsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWQ6ICFnZXRTZWxlY3RlZCgpIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0sIHsgc3BhY2U6IHR5cGVhaGVhZEluUHJvZ3Jlc3MgPyBcImV4Y2x1ZGVcIiA6IHVuZGVmaW5lZCB9KSh7fSk7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm9wdGlvblwiO1xyXG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2V0c2l6ZVwiXSA9IChjaGlsZENvdW50KS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtcG9zaW5zZXRcIl0gPSAoaW5mby5pbmRleCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9ICh0YWJiYWJsZSA/PyBmYWxzZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgcHJvcHMpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIGNoaWxkQ291bnQsIHR5cGVhaGVhZEluUHJvZ3Jlc3NdKTtcclxuICAgIGNvbnN0IHVzZUxpc3Rib3hNdWx0aUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpTGFiZWwoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpTGFiZWxQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpTGFiZWxQcm9wcyB9O1xyXG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XHJcbiAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtLCB1c2VMaXN0Ym94TXVsdGlQcm9wcywgdXNlTGlzdGJveE11bHRpTGFiZWwsIHRhYmJhYmxlSW5kZXgsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQsIGZvY3VzOiBmb2N1c0N1cnJlbnQgfTtcclxuICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibGlzdGJveFwiO1xyXG4gICAgICAgIHByb3BzW1wiYXJpYS1tdWx0aXNlbGVjdGFibGVcIl0gPSBcInRydWVcIjtcclxuICAgICAgICByZXR1cm4gdXNlSGFzRm9jdXNQcm9wcyh1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24sIG9uS2V5VXAsIG9uRm9jdXNPdXQgfSwgcHJvcHMpKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkgeyBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKVxyXG4gICAgICAgIHNldFNoaWZ0SGVsZCh0cnVlKTsgfVxyXG4gICAgZnVuY3Rpb24gb25LZXlVcChlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXHJcbiAgICAgICAgc2V0U2hpZnRIZWxkKGZhbHNlKTsgfVxyXG4gICAgZnVuY3Rpb24gb25Gb2N1c091dChlKSB7IHNldFNoaWZ0SGVsZChmYWxzZSk7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdGJveC1tdWx0aS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VBY3RpdmVFbGVtZW50LCB1c2VDaGlsZEZsYWcsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VHZW5lcmljTGFiZWwgfSBmcm9tIFwiLi91c2UtbGFiZWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94U2luZ2xlKHsgc2VsZWN0ZWRJbmRleCwgb25TZWxlY3QsIHNlbGVjdGlvbk1vZGUsIC4uLmFyZ3MgfSkge1xyXG4gICAgY29uc3QgW2FueUl0ZW1zRm9jdXNlZCwgc2V0QW55SXRlbXNGb2N1c2VkLCBnZXRBbnlJdGVtc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dCwgdXNlR2VuZXJpY0xhYmVsTGFiZWwsIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsIGlucHV0RWxlbWVudCB9ID0gdXNlR2VuZXJpY0xhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1saXN0Ym94LWxhYmVsLVwiLCBpbnB1dFByZWZpeDogXCJhcmlhLWxpc3Rib3gtXCIgfSk7XHJcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCBzZXRUYWJiYWJsZUluZGV4LCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0QW55SXRlbXNGb2N1c2VkIH0pO1xyXG4gICAgY29uc3QgeyB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWxJbnB1dCgpO1xyXG4gICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhvblNlbGVjdCA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICAvLyBUcmFjayB3aGV0aGVyIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIGxpc3QgYm94IHBhcmVudCBlbGVtZW50LlxyXG4gICAgLy8gV2hlbiBpdCdzIG5vdCwgd2UgcmVzZXQgdGhlIHRhYmJhYmxlIGluZGV4IGJhY2sgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50LlxyXG4gICAgdXNlQWN0aXZlRWxlbWVudCh7IHNldEFjdGl2ZUVsZW1lbnQ6IGFjdGl2ZUVsZW1lbnQgPT4gc2V0QW55SXRlbXNGb2N1c2VkKCEhKGlucHV0RWxlbWVudD8uY29udGFpbnMoYWN0aXZlRWxlbWVudCkpKSB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhbnlJdGVtc0ZvY3VzZWQpXHJcbiAgICAgICAgICAgIHNldFRhYmJhYmxlSW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9LCBbYW55SXRlbXNGb2N1c2VkLCBzZWxlY3RlZEluZGV4LCBzZXRUYWJiYWJsZUluZGV4XSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoc2VsZWN0ZWRJbmRleCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCwgKGksIHNlbGVjdGVkKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKFtdKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdGVUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfSwgW3NlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcclxuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUl0ZW0gPSB1c2VDYWxsYmFjaygoaW5mbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgc2V0U2VsZWN0ZWQsIC4uLmluZm8gfSk7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGluZm8uaW5kZXg7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgdGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZSA9PSBcImZvY3VzXCIpIHtcclxuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtlbGVtZW50LCB0YWJiYWJsZSwgc2VsZWN0aW9uTW9kZSwgaW5kZXhdKTtcclxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzLCB0YWJiYWJsZSwgc2VsZWN0ZWQsIGdldFNlbGVjdGVkIH07XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUl0ZW1Qcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkSW5kZXg6IGluZGV4IH0gfSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCkoe30pO1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJvcHRpb25cIjtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNldHNpemVcIl0gPSAoY2hpbGRDb3VudCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSBzZWxlY3RlZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHVzZU1lcmdlZFByb3BzKCkobmV3UHJvcHMsIHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgc2VsZWN0aW9uTW9kZSwgY2hpbGRDb3VudF0pO1xyXG4gICAgY29uc3QgdXNlTGlzdGJveFNpbmdsZUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcclxuICAgICAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzIH07XHJcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsTGFiZWxdKTtcclxuICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVJdGVtLCB1c2VMaXN0Ym94U2luZ2xlUHJvcHMsIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCwgdGFiYmFibGVJbmRleCwgZm9jdXM6IGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9O1xyXG4gICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZVByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibGlzdGJveFwiO1xyXG4gICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzKHByb3BzKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbGlzdGJveC1zaW5nbGUuanMubWFwIiwiaW1wb3J0IHsgdXNlSGFzRm9jdXMsIHVzZUxheW91dEVmZmVjdCwgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VUaW1lb3V0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IHVzZVNvZnREaXNtaXNzIH0gZnJvbSBcIi4vdXNlLW1vZGFsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhTWVudSh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBub1R5cGVhaGVhZCwgbm9XcmFwLCB0eXBlYWhlYWRUaW1lb3V0LCAuLi5hcmdzIH0pIHtcclxuICAgIGNvbnN0IFtmb2N1c1RyYXBBY3RpdmUsIHNldEZvY3VzVHJhcEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGxldCBvbkNsb3NlID0gYXJncy5vbkNsb3NlO1xyXG4gICAgbGV0IG9uT3BlbiA9IGFyZ3Mub25PcGVuO1xyXG4gICAgbGV0IG1lbnViYXIgPSBhcmdzLm1lbnViYXI7XHJcbiAgICBsZXQgb3BlbiA9IChtZW51YmFyID8gdHJ1ZSA6IGFyZ3Mub3Blbik7XHJcbiAgICBjb25zdCBzdGFibGVPbkNsb3NlID0gdXNlU3RhYmxlQ2FsbGJhY2sob25DbG9zZSA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICBjb25zdCBbbWVudUxhc3RGb2N1c2VkSW5uZXIsIHNldE1lbnVMYXN0Rm9jdXNlZElubmVyLCBnZXRNZW51TGFzdEZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYnV0dG9uTGFzdEZvY3VzZWRJbm5lciwgc2V0QnV0dG9uTGFzdEZvY3VzZWRJbm5lciwgZ2V0QnV0dG9uTGFzdEZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBUT0RPOiBJdCdzIGF3a3dhcmQgdGhhdCB0aGUgYnV0dG9uIGZvY3VzIHByb3BzIGFyZSBvdXQgaGVyZSB3aGVyZSB3ZSBkb24ndCBoYXZlIGl0cyB0eXBlLFxyXG4gICAgLy8gYnV0IGZvY3VzIG1hbmFnZW1lbnQgaXMgc3VwZXIgc2Vuc2l0aXZlLCBhbmQgZXZlbiB3YWl0aW5nIGZvciBhIHVzZUxheW91dEVmZmVjdCB0byBzeW5jIHN0YXRlIGhlcmVcclxuICAgIC8vIHdvdWxkIGJlIHRvbyBsYXRlLCBzbyBpdCB3b3VsZCBsb29rIGxpa2UgdGhlcmUncyBhIG1vbWVudCBiZXR3ZWVuIG1lbnUgZm9jdXMgbG9zdCBhbmQgYnV0dG9uIGZvY3VzIGdhaW5lZFxyXG4gICAgLy8gd2hlcmUgbm90aGluZyBpcyBmb2N1c2VkLiBcclxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlTWVudUhhc0ZvY3VzUHJvcHMsIH0gPSB1c2VIYXNGb2N1cyh7IHNldExhc3RGb2N1c2VkSW5uZXI6IHNldE1lbnVMYXN0Rm9jdXNlZElubmVyIH0pO1xyXG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzOiB1c2VCdXR0b25IYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1cyh7IHNldExhc3RGb2N1c2VkSW5uZXI6IHNldEJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIgfSk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgdGFiYmFibGVJbmRleCwgZm9jdXNDdXJyZW50OiBmb2N1c01lbnUgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIG5vVHlwZWFoZWFkLCBub1dyYXAsIHR5cGVhaGVhZFRpbWVvdXQsIHNob3VsZEZvY3VzT25DaGFuZ2U6IHVzZUNhbGxiYWNrKCgpID0+IGdldE1lbnVMYXN0Rm9jdXNlZElubmVyKCkgfHwgZ2V0QnV0dG9uTGFzdEZvY3VzZWRJbm5lcigpLCBbXSkgfSk7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1lbnVJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlTWVudUlkUmVmZXJlbmNpbmdQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tZW51LVwiIH0pO1xyXG4gICAgY29uc3QgW29wZW5lckVsZW1lbnQsIHNldE9wZW5lckVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IHVzZVNvZnREaXNtaXNzUHJvcHMgfSA9IHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZTogc3RhYmxlT25DbG9zZSB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9jdXNUcmFwQWN0aXZlKG9wZW4pO1xyXG4gICAgfSwgW29wZW5dKTtcclxuICAgIGNvbnN0IGZvY3VzTWVudVN0YWJsZSA9IHVzZVN0YWJsZUNhbGxiYWNrKGZvY3VzTWVudSA/PyAoKCkgPT4geyB9KSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb2N1c1RyYXBBY3RpdmUpIHtcclxuICAgICAgICAgICAgZm9jdXNNZW51U3RhYmxlPy4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZm9jdXNUcmFwQWN0aXZlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoZ2V0TWVudUxhc3RGb2N1c2VkSW5uZXIoKSlcclxuICAgICAgICAgICAgICAgIG9wZW5lckVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBudWxsLCBzbyB3ZSd2ZSBvbmx5IGp1c3QgbW91bnRlZCBhbmQgc2hvdWxkbid0IGZvY3VzIG91cnNlbHZlcy5cclxuICAgICAgICB9XHJcbiAgICB9LCBbZm9jdXNUcmFwQWN0aXZlXSk7XHJcbiAgICAvLyBGb2N1cyBtYW5hZ2VtZW50IGlzIHJlYWxseSBmaW5pY2t5LCBhbmQgdGhlcmUncyBhbHdheXMgZ29pbmcgdG8gYmUgXHJcbiAgICAvLyBhbiBlZGdlIGNhc2Ugd2hlcmUgbm90aGluZydzIGZvY3VzZWQgZm9yIHR3byBjb25zZWN1dGl2ZSBmcmFtZXMgXHJcbiAgICAvLyBvbiBpT1Mgb3Igd2hhdGV2ZXIsIHdoaWNoIHdvdWxkIGltbWVkaWF0ZWx5IGNsb3NlIHRoZSBtZW51IFxyXG4gICAgLy8gYW55IHRpbWUgaXQncyBiZWVuIG9wZW5lZC4gU28gYW55IHRpbWUgaXQgKmxvb2tzKiBsaWtlIHdlIHNob3VsZCBjbG9zZSxcclxuICAgIC8vIHRyeSB3YWl0aW5nIDEwMG1zLiBJZiBpdCdzIHN0aWxsIHRydWUgdGhlbiwgdGhlbiB5ZWFoLCB3ZSBzaG91bGQgY2xvc2UuXHJcbiAgICBsZXQgc2hvdWxkQ2xvc2UgPSAoZm9jdXNUcmFwQWN0aXZlICYmICFtZW51TGFzdEZvY3VzZWRJbm5lciAmJiAhYnV0dG9uTGFzdEZvY3VzZWRJbm5lcik7XHJcbiAgICB1c2VUaW1lb3V0KHtcclxuICAgICAgICB0aW1lb3V0OiAxMDAsXHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNob3VsZENsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPy4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpZ2dlckluZGV4OiBgJHtzaG91bGRDbG9zZX1gXHJcbiAgICB9KTtcclxuICAgIC8vIEEgbWVudSBzZW50aW5hbCBpcyBhIGhpZGRlbiBidXQgZm9jdXNhYmxlIGVsZW1lbnQgdGhhdCBjb21lcyBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBlbGVtZW50XHJcbiAgICAvLyB0aGF0LCB3aGVuIGFjdGl2YXRlZCBvciBmb2N1c2VkIG92ZXIsIGNsb3NlcyB0aGUgbWVudS5cclxuICAgIC8vIChpZiBmb2N1c2VkIHdpdGhpbiAxMDBtcyBvZiB0aGUgb3BlbiBwcm9wIGNoYW5naW5nLCBpbnN0ZWFkIG9mXHJcbiAgICAvLyBjbG9zaW5nIHRoZSBtZW51LCBmb2N1c2luZyB0aGUgc2VudGluZWwgaW1tZWRpYXRlbHkgYXNrcyB0aGUgbWVudSB0byBmb2N1cyBpdHNlbGYpLlxyXG4gICAgLy8gVGhpcyBleGlzdHMgYmVjYXVzZSB3aGlsZSBtb3VzZSB1c2VycyBjYW4gY2xpY2sgb3V0IG9mIGEgbWVudVxyXG4gICAgLy8gYW5kIGtleWJvYXJkIHVzZXJzIGNhbiBlc2NhcGUgdG8gY2xvc2UgdGhlIG1lbnUsXHJcbiAgICAvLyBzY3JlZW4gcmVhZGVycyBhbmQgb3RoZXIgaW5wdXQgbWV0aG9kcyB0aGF0IGRvbid0IHVzZSB0aG9zZSB0d28gYmVjb21lIHN0dWNrLlxyXG4gICAgY29uc3QgdXNlTWVudVNlbnRpbmVsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtmaXJzdFNlbnRpbmVsSXNBY3RpdmUsIHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgdXNlVGltZW91dCh7IGNhbGxiYWNrOiAoKSA9PiB7IHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZShvcGVuKTsgfSwgdGltZW91dDogMTAwLCB0cmlnZ2VySW5kZXg6IGAke2ZpcnN0U2VudGluZWxJc0FjdGl2ZX1gIH0pO1xyXG4gICAgICAgIGNvbnN0IG9uRm9jdXMgPSBmaXJzdFNlbnRpbmVsSXNBY3RpdmUgPyAoKCkgPT4gc3RhYmxlT25DbG9zZSgpKSA6ICgoKSA9PiBmb2N1c01lbnU/LigpKTtcclxuICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4gc3RhYmxlT25DbG9zZSgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZU1lbnVTZW50aW5lbFByb3BzOiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvbkZvY3VzLCBvbkNsaWNrIH0sIHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtmb2N1c01lbnUsIG9wZW5dKTtcclxuICAgIGNvbnN0IHVzZU1lbnVCdXR0b24gPSB1c2VDYWxsYmFjaygoeyB0YWcgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgc2V0T3BlbmVyRWxlbWVudChlbGVtZW50KTsgfSwgW2VsZW1lbnRdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VNZW51QnV0dG9uUHJvcHM6IGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlTWVudUlkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtY29udHJvbHNcIikodXNlQnV0dG9uSGFzRm9jdXNQcm9wcyhwKSkpKTtcclxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1oYXNwb3B1cFwiXSA9IFwibWVudVwiO1xyXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWV4cGFuZGVkXCJdID0gb3BlbiA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtvcGVuLCBvbkNsb3NlLCBvbk9wZW4sIHVzZU1lbnVJZFJlZmVyZW5jaW5nUHJvcHNdKTtcclxuICAgIGNvbnN0IHVzZU1lbnVTdWJtZW51SXRlbSA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VNZW51UHJvcHMsIHVzZU1lbnVCdXR0b24gfSA9IHVzZUFyaWFNZW51KGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlTWVudUJ1dHRvblByb3BzIH0gPSB1c2VNZW51QnV0dG9uKHsgdGFnOiBcImxpXCIgfSk7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBzZXRPcGVuZXJFbGVtZW50KGVsZW1lbnQpOyB9LCBbZWxlbWVudF0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXHJcbiAgICAgICAgICAgIHVzZU1lbnVQcm9wcyxcclxuICAgICAgICAgICAgdXNlTWVudVN1Ym1lbnVJdGVtUHJvcHM6IGZ1bmN0aW9uICh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lbnVCdXR0b25Qcm9wcyh1c2VNZW51SWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1jb250cm9sc1wiKShwcm9wcykpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VNZW51SXRlbSA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoYXJncyk7XHJcbiAgICAgICAgLy8gY29uc3QgeyBnZXRTeW5jSGFuZGxlciwgLi4uYXN5bmNJbmZvIH0gPSB1c2VBc3luY0hhbmRsZXI8RT4oKSh7IGNhcHR1cmU6IF8gPT4gdm9pZCAoMCkgfSk7XHJcbiAgICAgICAgLy8gY29uc3Qgb25DbGljayA9IGdldFN5bmNIYW5kbGVyKGFzeW5jSW5mby5wZW5kaW5nID8gbnVsbCA6IChhcmdzLm9uQ2xpY2sgPz8gbnVsbCkpO1xyXG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSBhcmdzLm9uQ2xpY2s7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlTWVudUl0ZW1Qcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1cIjtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvbkNsaWNrIH0sIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyhwcm9wcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VNZW51SXRlbVByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VNZW51SXRlbUNoZWNrYm94ID0gdXNlQ2FsbGJhY2soKGFyZ3MpID0+IHtcclxuICAgICAgICAvL2NvbnN0IHsgZ2V0U3luY0hhbmRsZXIsIC4uLmFzeW5jSW5mbyB9ID0gdXNlQXN5bmNIYW5kbGVyPEU+KCkoeyBjYXB0dXJlOiBfID0+ICFhcmdzLmNoZWNrZWQgfSk7XHJcbiAgICAgICAgLy9jb25zdCBvbkNsaWNrID0gZ2V0U3luY0hhbmRsZXIoYXN5bmNJbmZvLnBlbmRpbmcgPyBudWxsIDogYXJncy5vbkNoYW5nZSk7XHJcbiAgICAgICAgY29uc3Qgb25DbGljayA9IChlKSA9PiBhcmdzLm9uQ2hhbmdlKGVuaGFuY2VFdmVudChlLCB7IGNoZWNrZWQ6ICFhcmdzLmNoZWNrZWQgfSkpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVzZU1lbnVJdGVtUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvbkNsaWNrIH0sIHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlTWVudUl0ZW1Qcm9wcyB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gdXNlTWVudVByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVcIjtcclxuICAgICAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCJFc2NhcGVcIiAmJiBvbkNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVzZU1lbnVJZFByb3BzKHVzZU1lbnVIYXNGb2N1c1Byb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgdXNlU29mdERpc21pc3NQcm9wcyhwcm9wcykpKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZU1lbnVQcm9wcyxcclxuICAgICAgICB1c2VNZW51QnV0dG9uLFxyXG4gICAgICAgIHVzZU1lbnVJdGVtLFxyXG4gICAgICAgIHVzZU1lbnVTZW50aW5lbCxcclxuICAgICAgICB1c2VNZW51SXRlbUNoZWNrYm94LFxyXG4gICAgICAgIHVzZU1lbnVTdWJtZW51SXRlbSxcclxuICAgICAgICBmb2N1c01lbnVcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lbnUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2hpbGRGbGFnLCB1c2VDaGlsZE1hbmFnZXIsIHVzZUhhc0ZvY3VzLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VMb2dpY2FsRGlyZWN0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgZW5oYW5jZUV2ZW50LCBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYVRhYnMoeyBzZWxlY3Rpb25Nb2RlLCBzZWxlY3RlZEluZGV4LCBvblNlbGVjdCwgb3JpZW50YXRpb246IGxvZ2ljYWxPcmllbnRhdGlvbiwgLi4uYXJncyB9KSB7XHJcbiAgICBjb25zdCBbdGFiTGlzdEZvY3VzZWRJbm5lciwgc2V0VGFiTGlzdEZvY3VzZWRJbm5lciwgZ2V0VGFiTGlzdEZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZVRhYkxpc3RIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1cyh7IHNldEZvY3VzZWRJbm5lcjogc2V0VGFiTGlzdEZvY3VzZWRJbm5lciB9KTtcclxuICAgIGNvbnN0IHsgZWxlbWVudDogbGlzdEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uLCBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKGxpc3RFbGVtZW50KTtcclxuICAgIGNvbnN0IHBoeXNpY2FsT3JpZW50YXRpb24gPSBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uKGxvZ2ljYWxPcmllbnRhdGlvbik7XHJcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVRhYkxpc3RJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxpc3RJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItbGlzdC1cIiB9KTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiTGFiZWxJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZFRhYkxhYmVsSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLWxhYmVsLVwiIH0pO1xyXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBuYXZpZ2F0ZVRvSW5kZXgsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQsIGN1cnJlbnRUeXBlYWhlYWQsIGZvY3VzQ3VycmVudCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRUYWJMaXN0Rm9jdXNlZElubmVyLCBrZXlOYXZpZ2F0aW9uOiBsb2dpY2FsT3JpZW50YXRpb24gfSk7XHJcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFBhbmVscywgdXNlTWFuYWdlZENoaWxkOiB1c2VNYW5hZ2VkVGFiUGFuZWwgfSA9IHVzZUNoaWxkTWFuYWdlcigpO1xyXG4gICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhvblNlbGVjdCk7XHJcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZFRhYnMubGVuZ3RoO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkVGFicylcclxuICAgICAgICAgICAgY2hpbGQuc2V0U2VsZWN0aW9uTW9kZShzZWxlY3Rpb25Nb2RlKTtcclxuICAgIH0sIFtzZWxlY3Rpb25Nb2RlXSk7XHJcbiAgICB1c2VDaGlsZEZsYWcoc2VsZWN0ZWRJbmRleCwgbWFuYWdlZFRhYnMubGVuZ3RoLCAoaSwgc2VsZWN0ZWQpID0+IG1hbmFnZWRUYWJzW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCkpO1xyXG4gICAgdXNlQ2hpbGRGbGFnKHNlbGVjdGVkSW5kZXgsIG1hbmFnZWRQYW5lbHMubGVuZ3RoLCAoaSwgdmlzaWJsZSkgPT4gbWFuYWdlZFBhbmVsc1tpXT8uc2V0VmlzaWJsZSh2aXNpYmxlKSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKFtwcmV2Q2hpbGRDb3VudCwgcHJldlNlbGVjdGVkSW5kZXhdKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiBzZWxlY3Rpb25Nb2RlID09IFwiYWN0aXZhdGVcIikge1xyXG4gICAgICAgICAgICBtYW5hZ2VkUGFuZWxzW3NlbGVjdGVkSW5kZXhdPy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjaGlsZENvdW50LCBzZWxlY3RlZEluZGV4LCBzZWxlY3Rpb25Nb2RlXSk7XHJcbiAgICBjb25zdCB1c2VUYWIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWIoaW5mbykge1xyXG4gICAgICAgIC8vY29uc3QgW3NlbGVjdGVkVGFiSWQsIHNldFNlbGVjdGVkVGFiSWQsIGdldFNlbGVjdGVkVGFiSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3Rpb25Nb2RlTCwgc2V0U2VsZWN0aW9uTW9kZUxdID0gdXNlU3RhdGUoc2VsZWN0aW9uTW9kZSk7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoKTtcclxuICAgICAgICBjb25zdCBbdGFiUGFuZWxJZCwgc2V0VGFiUGFuZWxJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiSWRQcm9wcywgaWQ6IHRhYklkLCBnZXRJZDogZ2V0VGFiSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLVwiIH0pO1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdGFiYmFibGUsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQoeyAuLi5pbmZvLCBzZXRTZWxlY3RlZCwgdGFiSWQsIHNldFRhYlBhbmVsSWQsIHNldFNlbGVjdGlvbk1vZGU6IHNldFNlbGVjdGlvbk1vZGVMIH0pO1xyXG4gICAgICAgIGNvbnN0IGdldEluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKGluZm8uaW5kZXgpO1xyXG4gICAgICAgIC8vIGNvbnN0IHsgZ2V0U3luY0hhbmRsZXIsIC4uLmFzeW5jSW5mbyB9ID0gdXNlQXN5bmNIYW5kbGVyPEVsZW1lbnQ+KCkoeyBjYXB0dXJlOiAoZTogdW5rbm93bikgPT4gaW5mby5pbmRleCB9KTtcclxuICAgICAgICAvLyBjb25zdCBvblNlbGVjdCA9IGdldFN5bmNIYW5kbGVyKGFzeW5jSW5mby5wZW5kaW5nPyBudWxsIDogKHN0YWJsZUFzeW5jT25TZWxlY3QgPz8gbnVsbCkpO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlTCA9PSBcImZvY3VzXCIpIHtcclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0KHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkSW5kZXg6IGdldEluZGV4KCkgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFt0YWJiYWJsZSwgc2VsZWN0aW9uTW9kZUwsIGVsZW1lbnRdKTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4geyBtYW5hZ2VkUGFuZWxzW2luZm8uaW5kZXhdPy5zZXRUYWJJZCh0YWJJZCk7IH0sIFt0YWJJZCwgaW5mby5pbmRleF0pO1xyXG4gICAgICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWJJZCh0YWJJZCk7XHJcbiAgICAgICAgfSwgW3NlbGVjdGVkLCB0YWJJZF0pKi9cclxuICAgICAgICBmdW5jdGlvbiB1c2VUYWJQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q/LihlbmhhbmNlRXZlbnQoZSwgeyBzZWxlY3RlZEluZGV4OiBnZXRJbmRleCgpIH0pKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSwgdW5kZWZpbmVkKShwcm9wcyk7XHJcbiAgICAgICAgICAgIG5ld1Byb3BzLnJvbGUgPSBcInRhYlwiO1xyXG4gICAgICAgICAgICBuZXdQcm9wc1tcImFyaWEtc2VsZWN0ZWRcIl0gPSAoc2VsZWN0ZWQgPz8gZmFsc2UpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1jb250cm9sc1wiXSA9IHRhYlBhbmVsSWQ7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VUYWJJZFByb3BzKHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VSZWZFbGVtZW50UHJvcHMobmV3UHJvcHMpKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VUYWJQcm9wcywgc2VsZWN0ZWQgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVRhYlBhbmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUGFuZWwoaW5mbykge1xyXG4gICAgICAgIC8vY29uc3QgW3NlbGVjdGVkVGFiUGFuZWxJZCwgc2V0U2VsZWN0ZWRUYWJQYW5lbElkLCBnZXRTZWxlY3RlZFRhYlBhbmVsSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IFtzaG91bGRGb2N1cywgc2V0U2hvdWxkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IFt0YWJJZCwgc2V0VGFiSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVBhbmVsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRQYW5lbElkLCBpZDogdGFiUGFuZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItcGFuZWwtXCIgfSk7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wcyB9ID0gdXNlTWFuYWdlZFRhYlBhbmVsKHsgLi4uaW5mbywgdGFiUGFuZWxJZCwgc2V0VGFiSWQsIGZvY3VzLCBzZXRWaXNpYmxlOiBzZXRTZWxlY3RlZCB9KTtcclxuICAgICAgICBmdW5jdGlvbiBmb2N1cygpIHtcclxuICAgICAgICAgICAgaWYgKGdldFRhYkxpc3RGb2N1c2VkSW5uZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvdWxkRm9jdXModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNob3VsZEZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Py5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvdWxkRm9jdXMoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2VsZW1lbnQsIHNob3VsZEZvY3VzXSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFRhYnNbaW5mby5pbmRleF0/LnNldFRhYlBhbmVsSWQodGFiUGFuZWxJZCk7IH0sIFt0YWJQYW5lbElkLCBpbmZvLmluZGV4XSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUGFuZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWxhYmVsbGVkYnlcIl0gPSBtYW5hZ2VkVGFic1tpbmZvLmluZGV4XT8udGFiSWQ7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYnBhbmVsXCI7XHJcbiAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID8/PSAtMTsgLy8gTWFrZSBzdXJlIHRoZSB0YWIgcGFuZWwgaXMgdGFiYmFibGUuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VQYW5lbElkUHJvcHModXNlTWFuYWdlZENoaWxkUHJvcHMocHJvcHMpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYlBhbmVsUHJvcHMsIHNlbGVjdGVkIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VUYWJzTGlzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYkxpc3QoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiTGlzdFByb3BzKHsgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBwcm9wcy5yb2xlID0gXCJ0YWJsaXN0XCI7XHJcbiAgICAgICAgICAgIHByb3BzW1wiYXJpYS1vcmllbnRhdGlvblwiXSA9IHBoeXNpY2FsT3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkVGFiTGFiZWxJZChcImFyaWEtbGFiZWxsZWRieVwiKSh1c2VUYWJMaXN0SGFzRm9jdXNQcm9wcyh1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYkxpc3RQcm9wcyB9O1xyXG4gICAgfSwgW3BoeXNpY2FsT3JpZW50YXRpb25dKTtcclxuICAgIGNvbnN0IHVzZVRhYnNMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRhYnNMYWJlbCgpIHtcclxuICAgICAgICBmdW5jdGlvbiB1c2VUYWJzTGFiZWxQcm9wcyh7IC4uLnByb3BzIH0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVRhYkxhYmVsSWRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHVzZVRhYnNMYWJlbFByb3BzIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4geyB1c2VUYWIsIHVzZVRhYlBhbmVsLCB1c2VUYWJzTGlzdCwgdXNlVGFic0xhYmVsLCB0YWJiYWJsZUluZGV4LCBmb2N1c1RhYkxpc3Q6IGZvY3VzQ3VycmVudCwgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10YWJzLmpzLm1hcCIsImltcG9ydCB7IHVzZUhhc0ZvY3VzLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVN0YXRlLCB1c2VUaW1lb3V0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFUb29sdGlwKHsgbW91c2VvdmVyRGVsYXkgfSkge1xyXG4gICAgbW91c2VvdmVyRGVsYXkgPz89IDQwMDtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuLCBnZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNBbnlNb3VzZW92ZXIsIHNldEhhc0FueU1vdXNlb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvL2NvbnN0IFttb3VzZW92ZXJJc1ZhbGlkLCBzZXRNb3VzZW92ZXJJc1ZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVG9vbHRpcElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRvb2x0aXAtXCIgfSk7XHJcbiAgICBjb25zdCBbdHJpZ2dlckZvY3VzZWRJbm5lciwgc2V0VHJpZ2dlckZvY3VzZWRJbm5lciwgZ2V0VHJpZ2dlckZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHMgfSA9IHVzZUhhc0ZvY3VzKHsgc2V0Rm9jdXNlZElubmVyOiBzZXRUcmlnZ2VyRm9jdXNlZElubmVyIH0pO1xyXG4gICAgY29uc3QgW3RyaWdnZXJIYXNNb3VzZW92ZXIsIHNldFRyaWdnZXJIYXNNb3VzZW92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Rvb2x0aXBIYXNNb3VzZW92ZXIsIHNldFRvb2x0aXBIYXNNb3VzZW92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlVGltZW91dCh7XHJcbiAgICAgICAgdGltZW91dDogbW91c2VvdmVyRGVsYXksXHJcbiAgICAgICAgdHJpZ2dlckluZGV4OiAoK3RyaWdnZXJIYXNNb3VzZW92ZXIgKyArdG9vbHRpcEhhc01vdXNlb3ZlciksXHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRyaWdnZXJIYXNNb3VzZW92ZXIgfHwgdG9vbHRpcEhhc01vdXNlb3ZlcilcclxuICAgICAgICAgICAgICAgIHNldEhhc0FueU1vdXNlb3Zlcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHVzZVRpbWVvdXQoe1xyXG4gICAgICAgIHRpbWVvdXQ6IDUwLFxyXG4gICAgICAgIHRyaWdnZXJJbmRleDogKCt0cmlnZ2VySGFzTW91c2VvdmVyICsgK3Rvb2x0aXBIYXNNb3VzZW92ZXIpLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlckhhc01vdXNlb3ZlciAmJiAhdG9vbHRpcEhhc01vdXNlb3ZlcilcclxuICAgICAgICAgICAgICAgIHNldEhhc0FueU1vdXNlb3ZlcihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oaGFzQW55TW91c2VvdmVyIHx8IHRyaWdnZXJGb2N1c2VkSW5uZXIpO1xyXG4gICAgfSwgW2hhc0FueU1vdXNlb3ZlciwgdHJpZ2dlckZvY3VzZWRJbm5lcl0pO1xyXG4gICAgY29uc3QgdXNlVG9vbHRpcFRyaWdnZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUb29sdGlwVHJpZ2dlcigpIHtcclxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJFbnRlcihlKSB7XHJcbiAgICAgICAgICAgIHNldFRyaWdnZXJIYXNNb3VzZW92ZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckxlYXZlKGUpIHtcclxuICAgICAgICAgICAgc2V0VHJpZ2dlckhhc01vdXNlb3ZlcihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHVzZVRvb2x0aXBUcmlnZ2VyUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIC8vIE5vdGU6IFRob3VnaCBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBmb2N1c2luZyBhY3RpdmF0ZXMgYSB0b29sdGlwLFxyXG4gICAgICAgICAgICAvLyBpdCdzIHBlcmZlY3RseSByZWFzb25hYmxlIHRoYXQgYSBjaGlsZCBlbGVtZW50IHdpbGwgYmUgdGhlIG9uZSB0aGF0J3MgZm9jdXNlZCxcclxuICAgICAgICAgICAgLy8gbm90IHRoaXMgb25lLCBzbyB3ZSBkb24ndCBzZXQgdGFiSW5kZXg9MFxyXG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikodXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlckVudGVyLCBvblBvaW50ZXJMZWF2ZSB9LCB1c2VIYXNGb2N1c1Byb3BzKHByb3BzKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB1c2VUb29sdGlwVHJpZ2dlclByb3BzIH07XHJcbiAgICB9LCBbdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wc10pO1xyXG4gICAgY29uc3QgdXNlVG9vbHRpcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVRvb2x0aXAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRW50ZXIoZSkge1xyXG4gICAgICAgICAgICBzZXRUb29sdGlwSGFzTW91c2VvdmVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJMZWF2ZShlKSB7XHJcbiAgICAgICAgICAgIHNldFRvb2x0aXBIYXNNb3VzZW92ZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1c2VUb29sdGlwUHJvcHMoeyAuLi5wcm9wcyB9KSB7XHJcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRvb2x0aXBcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZVRvb2x0aXBJZFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJFbnRlciwgb25Qb2ludGVyTGVhdmUgfSwgcHJvcHMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFByb3BzIH07XHJcbiAgICB9LCBbdXNlVG9vbHRpcElkUHJvcHNdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlVG9vbHRpcCxcclxuICAgICAgICB1c2VUb29sdGlwVHJpZ2dlcixcclxuICAgICAgICBpc09wZW46IG9wZW4sXHJcbiAgICAgICAgZ2V0SXNPcGVuOiBnZXRPcGVuXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10b29sdGlwLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbImwiLCJ1IiwidCIsIm8iLCJyIiwiZiIsImUiLCJjIiwicyIsImEiLCJoIiwidiIsInkiLCJkIiwiXyIsImsiLCJiIiwibSIsImciLCJqIiwidyIsIngiLCJQIiwiTSIsIkEiLCJDIiwiSCIsIiQiLCJUIiwiTyIsIkwiLCJTIiwibiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGVQIiwidXNlUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZVN0YXRlIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0TmF0aXZlIiwidXNlRWZmZWN0IiwidXNlRWZmZWN0TmF0aXZlIiwidGhpcyIsIlJhbmRvbVdvcmRzIiwiY3JlYXRlQ29udGV4dCIsIm1lbW8iLCJ1c2VNZW1vIiwidXNlQ29udGV4dCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7O0FBQUcsUUFBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQ0MsR0FBQyxDQUFHQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQyxFQUFFLENBQUNDLEdBQUMsQ0FBQyxFQUFFLENBQUNDLEdBQUMsQ0FBQyxvRUFBb0UsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRVgsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFRCxHQUFDLENBQUMsS0FBSyxFQUFFQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBbUMsU0FBU2EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFZixHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNnQixHQUFDLENBQUMsR0FBRyxFQUFFLEVBQUVkLEdBQUMsR0FBR0osR0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQ0ksR0FBQyxDQUFDSixHQUFDLENBQUMsaUJBQWlCLEdBQUdHLEdBQUMsRUFBRWUsR0FBQyxFQUFDLENBQUMsU0FBU0EsR0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQ2hCLEdBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDQSxHQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNVLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUNKLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNJLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUViLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDSyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNELEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDTyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFYixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ2UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUNQLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQ1EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNGLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBU0UsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNGLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVNHLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUVuQixHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVNrQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyx5QkFBeUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM1QixHQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVM0QixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM1QixHQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ25CLEdBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUljLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQ2UsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQ3BCLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNULEdBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDUyxHQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUdJLEdBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUNPLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDVSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzlCLEdBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUzhCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUV4QixHQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxHQUFHbUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQ0wsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFTCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFTCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUVnQixHQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNILEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUN2QixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxPQUFPLEVBQUVBLEdBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRXVCLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ3ZCLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUVVLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLFNBQVNtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMvQixHQUFDLENBQUMsRUFBRSxFQUFFQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDUixHQUFDLENBQUNFLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRVAsR0FBQyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBK08sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUNELEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDWSxHQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNWLEdBQUMsQ0FBQyxLQUFLLENBQUNQLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBdURhLEdBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDTCxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQ0gsR0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxHQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDSCxHQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQ0QsR0FBQyxDQUFDWCxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUNlLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDYixHQUFDLENBQUMsQ0FBQzs7SUNBbGhULElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzJCLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRUEsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDWixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVNSLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQTROLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDTixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQ2EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNkLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUNhLEdBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsR0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNkLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNhLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQ2QsR0FB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LFFBQVEsT0FBTyxHQUFHLENBQUM7SUFDbkIsSUFBSSxJQUFJLENBQUMsR0FBRztJQUNaLFFBQVEsT0FBTyxHQUFHLENBQUM7SUFDbkIsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLEtBQUs7SUFDeEIsUUFBUSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixRQUFRLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlCLFFBQVEsSUFBSSxFQUFFLFlBQVksT0FBTyxJQUFJLEVBQUUsWUFBWSxPQUFPO0lBQzFELFlBQVksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsS0FBSyxDQUFDO0lBQ04sQ0FBQztJQUNEO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lB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LFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQ2hDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUMsR0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsR0FBRyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQXFWLElBQTJNLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUlBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBcUwsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJRCxHQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRUQsR0FBQyxDQUFDSyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUNMLEdBQUMsQ0FBQ0ssR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBdW5CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJSixHQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsa09BQWtPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUErS0YsR0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQywyQkFBMkIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUNBLEdBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNDLEdBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDQSxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFJLElBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxNQUFNQSxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLGNBQWMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FB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
