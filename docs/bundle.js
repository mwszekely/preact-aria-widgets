(function () {
    'use strict';

    var n,l$1,u$1,t$1,r$1,o$1,f$1,e$1={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y$1(l,f,t,r,null)}function y$1(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u$1:o};return null==o&&null!=l$1.vnode&&l$1.vnode(f),f}function d(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k$1(t):r,t.__h),z$1(u,t),t.__e!=r&&b$1(t)));});}function w$2(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$1,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x$1(_,s,n):s=P$1(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$1(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x$1(i,l,u):P$1(u,i,i,t,i.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function C$1(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T$2:I,r):n.removeEventListener(l,r?T$2:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$2(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$1.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,r,o,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(o=o&&n.call(l.childNodes),a=(y=i.props||e$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k$1(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h$1(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,r;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var r,o,f;l$1.__&&l$1.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!r&&t||i).__k=v$1(d,null,[u]),o||e$1,e$1,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z$1(f,u);}function D(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$1=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_.prototype.render=d,t$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

    var t,u,r,o=0,i=[],c=l$1.__b,f=l$1.__r,e=l$1.diffed,a=l$1.__c,v=l$1.unmount;function m(t,r){l$1.__h&&l$1.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function s(n){return o=5,A$1(function(){return {current:n}},[])}function A$1(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function F(n,t){return o=8,A$1(function(){return n},t)}function T$1(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}),i=[];}l$1.__b=function(n){u=null,c&&c(n);},l$1.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},l$1.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===l$1.requestAnimationFrame||((r=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=null;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),a&&a(t,u);},l$1.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){l$1.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g$1(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

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
            let ret = v$1(d, {}, lhs, rhs);
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
            let combined = F((current) => {
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
        const setState = F(value => {
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
        console.assert(ref.current === state || (typeof state === "number" && isNaN(state)));
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
        const useReferencedIdProps = F(function useReferencedIdProps(idPropName) {
            const ret = function ({ [idPropName]: givenId, ...props }) {
                const usedId2 = (givenId ?? usedId ?? randomId ?? undefined);
                if (idPropName === "id")
                    setUsedId(usedId2);
                return useMergedProps()({ [idPropName]: usedId2 }, props);
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
    // TODO: Whether this goes in options.diffed or options._commit
    // is a post-suspense question.
    // Right now, using options._commit has the problem of running
    // *after* refs are applied, but we need to come before even that
    // so `ref={someStableFunction}` works.
    // 
    // Also it's private.
    const originalDiffed = l$1.diffed;
    l$1.diffed = (vnode, ...args) => {
        for (let [id, { effect, inputs }] of toRun) {
            const oldInputs = previousInputs.get(id);
            if (argsChanged(oldInputs, inputs)) {
                effect();
                previousInputs.set(id, inputs);
            }
        }
        originalDiffed?.(vnode, ...args);
    };
    /*
    const originalBeforeCommit = (options as any)._commit;
    (options as any)._commit = (vnode: VNode, commitQueue: any, ...args: any[]) => {
        debugger;
        
        for (let [id, { effect, inputs }] of toRun) {
            const oldInputs = previousInputs.get(id);
            if (argsChanged(oldInputs, inputs)) {
                effect();
                previousInputs.set(id, inputs);
            }
        }

        originalBeforeCommit(vnode, commitQueue, ...args);
    }
    */
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
        toRun.set(id, { effect, inputs });
    }
    function argsChanged(oldArgs, newArgs) {
        return !!(!oldArgs ||
            oldArgs.length !== newArgs?.length ||
            newArgs?.some((arg, index) => arg !== oldArgs[index]));
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
        useBeforeLayoutEffect(() => { ref.current = value; }, [value]);
        return F(() => {
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
        return F((...args) => {
            return currentCallbackGetter()(...args);
        }, []);
    }

    /**
     * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can).
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
    function usePassiveState(onChange, initialValue) {
        const valueRef = s(initialValue === undefined ? Unset : initialValue);
        const cleanupCallbackRef = s(undefined);
        // Shared between "dependency changed" and "component unmounted".
        const onShouldCleanUp = F(() => {
            let cleanupCallback = cleanupCallbackRef.current;
            if (cleanupCallback)
                cleanupCallback();
        }, []);
        const getValue = F(() => (valueRef.current === Unset ? undefined : valueRef.current), []);
        // The actual code the user calls to (possibly) run a new effect.
        const setValue = useStableCallback((arg) => {
            const prevDep = valueRef.current === Unset ? undefined : valueRef.current;
            const dep = arg instanceof Function ? arg(prevDep) : arg;
            if (dep !== valueRef.current) {
                onShouldCleanUp();
                cleanupCallbackRef.current = (onChange?.(dep, prevDep) ?? undefined);
                valueRef.current = dep;
            }
        });
        // Handle running on mount/unmount
        h(() => {
            if (valueRef.current === Unset && initialValue !== undefined) {
                cleanupCallbackRef.current = (onChange?.(initialValue, undefined) ?? undefined);
                valueRef.current = initialValue;
            }
            return onShouldCleanUp;
        }, []);
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
    function useRefElement({ onElementChange }) {
        // Let us store the actual (reference to) the element we capture
        const [getElement, setElement] = usePassiveState(onElementChange, null);
        // Create a RefCallback that's fired when mounted 
        // and that notifies us of our element when we have it
        const myRef = F((e) => {
            if (e)
                setElement(() => e);
        }, []);
        const useRefElementProps = F((props) => useMergedProps()({ ref: myRef }, props), []);
        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        return {
            useRefElementProps,
            getElement
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
    function useLogicalDirection() {
        // TODO: There's no way to refresh which writing mode we have once mounted.
        // If the writing mode changes, the whole component needs to 
        // mount/unmount because (more-or-less in order of importance)
        //   A. There's no way to watch for CSS style changes
        //   B. Calling getComputedStyle after every render for every element gets expensive fast and
        //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
        //      (Those that do will need to mount and unmount the component that uses it)
        //
        // Maybe there could be a context object that can be used to remotely update all components that use this hook?
        const { getElement, useRefElementProps } = useRefElement({
            onElementChange: (element) => {
                if (element) {
                    // The element hasn't actually been hooked up to the document yet.
                    // Wait a moment so that we can properly use `getComputedStyle`
                    // (since we only read it on mount)
                    queueMicrotask(() => {
                        console.assert(element.isConnected);
                        element = (element.parentElement ?? element);
                        const computedStyles = window.getComputedStyle(element);
                        const w = computedStyles.writingMode;
                        const t = computedStyles.textOrientation;
                        const d = computedStyles.direction;
                        setWritingMode(w || "horizontal-tb");
                        setDirection(d || "rtl");
                        setTextOrientation(t || "mixed");
                    });
                }
            }
        });
        const [writingMode, setWritingMode] = l(null);
        const [direction, setDirection] = l(null);
        const [textOrientation, setTextOrientation] = l(null);
        const writingModeRef = s(writingMode);
        const directionRef = s(direction);
        const textOrientationRef = s(textOrientation);
        h(() => { writingModeRef.current = writingMode; }, [writingMode]);
        h(() => { directionRef.current = direction; }, [direction]);
        h(() => { textOrientationRef.current = textOrientation; }, [textOrientation]);
        const getLogicalDirection = F(() => {
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
        const convertToLogicalOrientation = F((elementOrientation, direction) => {
            direction ??= getLogicalDirection();
            if (direction?.inlineOrientation === elementOrientation)
                return "inline";
            return "block";
        }, [getLogicalDirection]);
        const convertToPhysicalOrientation = F((elementOrientation, direction) => {
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
        const convertElementSize = F((elementSize, direction) => {
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
            useLogicalDirectionProps: useRefElementProps,
            getElement,
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
     * Wrap the native `useEffect` to add arguments
     * that allow accessing the previous value as the first argument,
     * as well as the changes that caused the hook to be called as the second argument.
     *
     * @param effect
     * @param inputs
     * @param impl You can choose whether to use `useEffect` or `useLayoutEffect` by
     * passing one of them as this argument. By default, it's `useEffect`.
     */
    function useEffect(effect, inputs, impl = y) {
        const prevInputs = s(undefined);
        const effect2 = () => {
            let changes = [];
            if (inputs && prevInputs.current) {
                for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
                    if (prevInputs.current[i] != inputs[i])
                        changes[i] = { from: prevInputs.current[i], to: inputs[i] };
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
        const getElapsedTime = F(() => {
            return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
        }, []);
        const getRemainingTime = F(() => {
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
        const useLinearNavigationChild = F(({ index }) => {
            const getIndex = useStableGetter(index);
            // Prefer the parent element's direction so that we're not calling getComputedStyle
            // on every single individual child, which is likely redundant.
            const { convertElementSize, getLogicalDirection, useLogicalDirectionProps } = useLogicalDirection();
            const useLinearNavigationChildProps = (props) => {
                const onKeyDown = (e) => {
                    // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                    if (e.ctrlKey || e.metaKey)
                        return;
                    getIndex();
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
                return useLogicalDirectionProps(useMergedProps()({ onKeyDown }, props));
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
        const useTypeaheadNavigationChild = F(({ text, ...i }) => {
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
                return useMergedProps()({ onKeyDown, onCompositionStart, onCompositionEnd, }, props);
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
        const getMountIndex = F((index) => { return mountOrder.current.get(index); }, []);
        const useManagedChild = F((info) => {
            const [element, onElementChange] = useState(null);
            const { getElement, useRefElementProps } = useRefElement({ onElementChange });
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
            useLayoutEffect((prev, changes) => {
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
    function useChildFlag({ activatedIndex, closestFit, managedChildren, setChildFlag, getChildFlag, useEffect }) {
        useEffect ??= useLayoutEffect;
        if (closestFit)
            console.assert(typeof activatedIndex == "number" || activatedIndex == null);
        // Whenever we re-render, make sure that any children that have mounted
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
                    while ((searchLow >= 0 && managedChildren[searchLow] == null) || (searchHigh < managedChildren.length && managedChildren[searchHigh] == null)) {
                        ++searchHigh;
                        --searchLow;
                    }
                    if (searchLow >= 0 && managedChildren[searchLow] != null) {
                        activatedIndex = searchLow;
                    }
                    else if (searchHigh < managedChildren.length && managedChildren[searchHigh] != null) {
                        activatedIndex = searchHigh;
                    }
                    // Now that we've done that, if any valid children exist, we've reset activatedIndex to point to it instead.
                    // Now we'll fall through to the for loop set and unset our flags based on this "corrected" value.
                    //
                    // We don't correct it or save it anywhere because we'd very much like to return to it
                    // if the child remounts itself.
                }
            }
            if (Array.isArray(managedChildren)) {
                for (let i = 0; i < managedChildren.length; ++i) {
                    let shouldBeSet = (i == activatedIndex);
                    if (getChildFlag(i) != shouldBeSet) {
                        setChildFlag(i, shouldBeSet);
                    }
                }
            }
            else {
                Object.entries(managedChildren).forEach(([i, info]) => {
                    let shouldBeSet = (i == activatedIndex);
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
        useChildFlag({
            activatedIndex: tabbableIndex,
            managedChildren,
            closestFit: true,
            setChildFlag: (index, tabbable) => {
                if (index != null)
                    managedChildren[index]?.setTabbable(tabbable);
            },
            getChildFlag: (index) => (managedChildren[index]?.getTabbable() ?? null)
        });
        F(() => {
            if (tabbableIndex != null)
                managedChildren[tabbableIndex].setTabbable(true);
        }, [tabbableIndex]);
        const useRovingTabIndexChild = F((info) => {
            const [rrafIndex, setRrafIndex] = useState(1);
            const rerenderAndFocus = F(() => { setRrafIndex(i => ++i); }, []);
            const [tabbable, setTabbable, getTabbable] = useState(null);
            let newInfo = {
                ...info,
                rerenderAndFocus,
                setTabbable: F((tabbable) => { setTabbable(tabbable); }, []),
                getTabbable
            };
            const { element, getElement, useManagedChildProps } = useManagedChild(newInfo);
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
        const useDraggableProps = F((p) => {
            const ref = s(null);
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
            return useMergedProps()({
                draggable: true,
                onDragStart,
                onDragEnd,
                ref
            }, p);
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
            return useMergedProps()({ onDragEnter, onDragLeave, onDragOver, onDrop }, p);
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
    let windowFocused = true;
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
        windowFocused = true;
        windowFocusedUpdaters.forEach(f => f?.(windowFocused));
    }
    function windowBlur() {
        windowFocused = false;
        windowFocusedUpdaters.forEach(f => f?.(windowFocused));
    }
    function useActiveElement({ onActiveElementChange, onLastActiveElementChange, onWindowFocusedChanged }) {
        const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, undefined);
        const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, undefined);
        const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChanged, windowFocused);
        h(() => {
            if (activeElementUpdaters.size === 0) {
                document.addEventListener("focusin", focusin, { passive: true });
                document.addEventListener("focusout", focusout, { passive: true });
                window.addEventListener("focus", windowFocus, { passive: true });
                window.addEventListener("blur", windowBlur, { passive: true });
            }
            // Add them even if they're undefined to more easily
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
        return { getActiveElement, getLastActiveElement, getWindowFocused };
    }

    function useHasFocus({ onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged }) {
        const { getElement, useRefElementProps } = useRefElement({});
        useActiveElement({
            onActiveElementChange: node => {
                const element = getElement();
                onFocusedChanged?.(element == node && element != null);
                onFocusedInnerChanged?.(!!element?.contains(node));
            },
            onLastActiveElementChange: node => {
                const element = getElement();
                onLastFocusedChanged?.(element == node && element != null);
                onLastFocusedInnerChanged?.(!!element?.contains(node));
            }
        });
        const useHasFocusProps = F((props) => { return useRefElementProps(props); }, [useRefElementProps]);
        return { useHasFocusProps, getElement };
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
        const navigateToIndex = F((i) => { setTabbableIndex(i); }, []);
        const navigateToFirst = F(() => { setTabbableIndex(indexMangler(0)); }, []);
        const navigateToLast = F(() => { setTabbableIndex(indexMangler(managedChildren.length - 1)); }, []);
        const navigateToPrev = F(() => { setTabbableIndex(i => indexMangler(indexDemangler(i ?? 0) - 1)); }, [indexDemangler, indexMangler]);
        const navigateToNext = F(() => { setTabbableIndex(i => indexMangler(indexDemangler(i ?? 0) + 1)); }, [indexDemangler, indexMangler]);
        const setIndex = F((index) => {
            setTabbableIndex(index);
        }, []);
        const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
        const { useLinearNavigationChild } = useLinearNavigation({ navigationDirection: keyNavigation, index: getTabbableIndex() ?? 0, managedChildren, navigateToPrev, navigateToNext, navigateToFirst, navigateToLast });
        const useListNavigationChild = F((info) => {
            const { useTypeaheadNavigationChildProps } = useTypeaheadNavigationChild(info);
            const { useLinearNavigationChildProps } = useLinearNavigationChild(info);
            const { useRovingTabIndexChildProps, useRovingTabIndexSiblingProps, tabbable } = useRovingTabIndexChild(info);
            const useListNavigationChildProps = function ({ ...props }) {
                return useMergedProps()(useRovingTabIndexChildProps(useTypeaheadNavigationChildProps(useLinearNavigationChildProps({ onClick: roveToSelf }))), props);
            };
            const roveToSelf = F(() => { navigateToIndex(info.index); }, []);
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
        const [element, setElement] = useState(null);
        const { useRefElementProps, getElement } = useRefElement({ onElementChange: setElement });
        //const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState<Node | null>(null);
        const { getActiveElement, getLastActiveElement, getWindowFocused } = useActiveElement({});
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

    function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=l$1.__e;l$1.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function M(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d,null,n.fallback);return u&&(u.__h=null),[v$1(d,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(M.prototype=new _).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,z=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};_.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var Z=l$1.event;function Y(){}function $(){return this.cancelBubble}function q(){return this.defaultPrevented}l$1.event=function(n){return Z&&(n=Z(n)),n.persist=Y,n.isPropagationStopped=$,n.isDefaultPrevented=q,n.nativeEvent=n};var J={configurable:!0,get:function(){return this.class}},K=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];V&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J)),n.$$typeof=j,K&&K(n);};var Q=l$1.__r;l$1.__r=function(n){Q&&Q(n);};

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
     * selection.containsNode doesn't account for selection.isCollapsed,
     * so here's a workaround for that.
     *
     * @param element
     * @returns
     */
    function nodeHasSelectedText(element) {
        if (element && element instanceof Node) {
            const selection = window.getSelection();
            if (selection?.containsNode(element, true) && !selection.isCollapsed) {
                return true;
            }
        }
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
        const { useRefElementProps, getElement } = useRefElement({});
        // A button can be activated in multiple ways, so on the off chance
        // that multiple are triggered at once, we only *actually* register
        // a press once all of our "on" signals have turned back to "off".
        // We approximate this by just incrementing when active, and
        // decrementing when deactivated.
        //
        // As an emergency failsafe, when the element looses focus,
        // this is reset back to 0.
        const [active, setActive, getActive] = useState(0);
        // If we the current text selection changes to include this element
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
            if (active == 0)
                setTextSelectedDuringActivation(false);
        }, [active == 0]);
        const onActiveStart = useStableCallback((e) => {
            setActive(a => ++a);
        });
        const onActiveStop = useStableCallback((e) => {
            setActive(a => Math.max(0, --a));
            if (textSelectedDuringActivation) {
                e.preventDefault();
                return;
            }
            if (getActive() <= 0) {
                handlePress(e);
            }
        });
        const handlePress = useStableCallback((e) => {
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
                if (element && "focus" in element)
                    element?.focus();
                e.preventDefault();
                pulse();
                onClickSync(e);
            }
        });
        const onMouseDown = excludes("click", exclude) ? undefined : (e) => {
            // Stop double clicks from selecting text in an component that's *supposed* to be acting like a button,
            // but also don't prevent the user from selecting that text manually if they really want to
            // (which user-select: none would do, but cancelling a double click on mouseDown doesn't)
            if (e.detail > 1)
                e.preventDefault();
            if (e.button === 0)
                onActiveStart(e);
        };
        const onMouseUp = excludes("click", exclude) ? undefined : (e) => {
            if (e.button === 0 && active > 0)
                onActiveStop(e);
        };
        const onBlur = (e) => {
            setActive(0);
        };
        const onMouseOut = excludes("click", exclude) ? undefined : onBlur;
        const onKeyDown = excludes("space", exclude) && excludes("enter", exclude) ? undefined : (e) => {
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
        const onKeyUp = excludes("space", exclude) ? undefined : (e) => {
            if (e.key == " " && !excludes("space", exclude))
                onActiveStop(e);
        };
        const onClick = (e) => {
            e.preventDefault();
            if (e.detail > 1) {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }
        };
        return (props) => useRefElementProps(useMergedProps()({ onKeyDown, onKeyUp, onBlur, onMouseDown, onMouseUp, onMouseOut, onClick, ...{ "data-pseudo-active": active ? "true" : undefined } }, props));
    }

    function useAriaAccordion({ expandedIndex, setExpandedIndex }) {
        const [lastFocusedIndex, setLastFocusedIndex, getLastFocusedIndex] = useState(0);
        const stableSetExpandedIndex = useStableCallback(setExpandedIndex ?? (() => { }));
        const { managedChildren: managedAccordionSections, useManagedChild: useManagedChildSection } = useChildManager();
        const navigateToFirst = F(() => { setLastFocusedIndex((0)); }, []);
        const navigateToLast = F(() => { setLastFocusedIndex((managedAccordionSections.length - 1)); }, []);
        const navigateToPrev = F(() => { setLastFocusedIndex(i => ((i ?? 0) - 1)); }, []);
        const navigateToNext = F(() => { setLastFocusedIndex(i => ((i ?? 0) + 1)); }, []);
        const { useLinearNavigationChild } = useLinearNavigation({ managedChildren: managedAccordionSections, navigationDirection: "block", index: getLastFocusedIndex(), navigateToFirst, navigateToLast, navigateToPrev, navigateToNext });
        // Any time list management changes the focused index, manually focus the child
        // TODO: Can this be cut?
        useLayoutEffect(() => {
            if (lastFocusedIndex != null && lastFocusedIndex >= 0)
                managedAccordionSections[lastFocusedIndex]?.focus();
        }, [lastFocusedIndex]);
        useChildFlag({
            activatedIndex: expandedIndex,
            managedChildren: managedAccordionSections,
            setChildFlag: (i, open) => managedAccordionSections[i]?.setOpenFromParent(open),
            getChildFlag: (i) => (managedAccordionSections[i]?.getOpenFromParent() ?? null)
        });
        const useAriaAccordionSection = F((args) => {
            const index = args.index;
            const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
            const { randomId: bodyRandomId, useRandomIdProps: useBodyRandomIdProps, useReferencedIdProps: useReferencedBodyIdProps } = useRandomId({ prefix: "aria-accordion-section-body-" });
            const { randomId: headRandomId, useRandomIdProps: useHeadRandomIdProps, useReferencedIdProps: useReferencedHeadIdProps } = useRandomId({ prefix: "aria-accordion-section-header-" });
            let open = ((args.open ?? openFromParent) ?? null);
            // TODO: Convert to use useManagedChild so that this hook 
            // is stable without (directly) depending on the open state.
            const useAriaAccordionSectionHeader = F(function useAriaAccordionSectionHeader({ tag }) {
                const { useRefElementProps, getElement } = useRefElement({});
                const focus = F(() => { getElement()?.focus(); }, []);
                const { useManagedChildProps } = useManagedChildSection({ index, open, setOpenFromParent, getOpenFromParent, focus });
                const { useLinearNavigationChildProps } = useLinearNavigationChild({ index });
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
            }, [index, open]);
            const useAriaAccordionSectionBody = F(function useAriaAccordionSectionBody() {
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
        const [labelElement, setLabelElement] = l(null);
        const [inputElement, setInputElement] = l(null);
        const { getElement: getLabelElement, useRefElementProps: useLabelRefElementProps } = useRefElement({ onElementChange: setLabelElement });
        const { getElement: getInputElement, useRefElementProps: useInputRefElementProps } = useRefElement({ onElementChange: setInputElement });
        const { useRandomIdProps: useLabelRandomIdProps, id: labelId, randomId: labelRandomId, useReferencedIdProps: useReferencedLabelIdProps } = useRandomId({ prefix: labelPrefix });
        const { useRandomIdProps: useInputRandomIdProps, id: inputId, randomId: inputRandomId, useReferencedIdProps: useReferencedInputIdProps } = useRandomId({ prefix: inputPrefix });
        const labelHasMounted = !!(labelElement);
        const useGenericLabelLabel = F(function useGenericLabelLabel() {
            return {
                useGenericLabelLabelProps: (props) => { return useLabelRandomIdProps(useLabelRefElementProps(props)); }
            };
        }, []);
        const useGenericLabelInput = F(function useGenericLabelInput() {
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
        const useInputLabelLabel = F(function useInputLabelLabel({ tag }) {
            const { useGenericLabelLabelProps } = useGenericLabelLabel();
            return {
                useInputLabelLabelProps(props) {
                    const withFor = useReferencedInputIdProps("for")(props);
                    const withoutFor = props;
                    return useGenericLabelLabelProps(tag == "label" ? withFor : withoutFor);
                }
            };
        }, [useGenericLabelInput]);
        const useInputLabelInput = F(function useInputLabelInput() {
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
        const useCheckboxLikeInputElement = F(function useCheckboxInputElement({ tag }) {
            const { useInputLabelInputProps: useILInputProps } = useILInput();
            const { useRefElementProps, getElement } = useRefElement({});
            // onClick and onChange are a bit messy, so we need to
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
            return { getInputElement: getElement, useCheckboxLikeInputElementProps };
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
        const useCheckboxLikeLabelElement = F(function useCheckboxLabelElement({ tag }) {
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
        const useCheckboxInputElement = F(function useCheckboxInputElement({ tag }) {
            const { getInputElement, useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement({ tag });
            const isMixed = (checked == "mixed");
            y(() => {
                const inputElement = getInputElement();
                if (inputElement && tag === "input") {
                    inputElement.indeterminate = isMixed;
                }
            }, [isMixed, tag]);
            return { useCheckboxInputElementProps };
            function useCheckboxInputElementProps({ ...p0 }) {
                let props = useCheckboxLikeInputElementProps(p0);
                props.checked ??= !!checked;
                if (tag == "input")
                    props.type = "checkbox";
                return props;
            }
        }, [useCheckboxLikeInputElement, checked, labelPosition, disabled]);
        const useCheckboxLabelElement = F(function useCheckboxLabelElement({ tag }) {
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
     *
     *
     * @param param0
     * @returns
     */
    function useCheckboxGroup({ collator, keyNavigation, shouldFocusOnChange, onUpdateChildren: onUpdateChildrenUnstable }) {
        const onUpdateChildren = useStableCallback(onUpdateChildrenUnstable);
        const { managedChildren, useListNavigationChild, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation({ collator, keyNavigation, shouldFocusOnChange });
        //const [uncheckedCount, setUnheckedCount] = useState(0);
        const [checkedCount, setCheckedCount] = useState(0);
        const checkedIndices = s(new Set());
        //const [selfIsChecked, setSelfIsChecked, getSelfIsChecked] = useState<boolean | "mixed">(false);
        const getSelfIsCheckedUnstable = F(() => {
            let percentage = checkedCount / managedChildren.length;
            return percentage <= 0 ? false : percentage >= 1 ? true : "mixed";
        }, [checkedCount, managedChildren.length]);
        const getSelfIsCheckedStable = useStableCallback(getSelfIsCheckedUnstable);
        // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
        // Otherwise, it's null when the last input was from a child checkbox. 
        const savedCheckedValues = s(null);
        const onCheckboxGroupParentInput = F((e) => {
            e.preventDefault();
            const selfIsChecked = getSelfIsCheckedStable();
            if (selfIsChecked === true || (selfIsChecked === false && savedCheckedValues.current == null)) {
                return onUpdateChildren(enhanceEvent(e, { childrenChecked: false }));
            }
            else if (selfIsChecked === "mixed") {
                savedCheckedValues.current = new Map();
                for (let child of managedChildren) {
                    savedCheckedValues.current.set(child.index, child.getChecked());
                }
                return onUpdateChildren(enhanceEvent(e, { childrenChecked: true }));
            }
            else {
                return onUpdateChildren(enhanceEvent(e, { childrenChecked: savedCheckedValues.current ?? true }));
            }
        }, []);
        // Keep track of all child IDs, and any time any of them change, 
        // generate a new string with all of them concatenated together
        // (but only once per render);
        const allIds = s(new Set());
        const [ariaControls, setAriaControls] = useState("");
        const [updateIndex, setIdUpdateIndex] = useState(0);
        const notifyChecked = F((index, checked) => {
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
        /*useEffect(() => {
            let percentage = checkedCount / managedChildren.length;
            setSelfIsChecked(percentage <= 0 ? false : percentage >= 1 ? true : "mixed")
        }, [setSelfIsChecked, managedChildren.length, checkedCount]);*/
        const useCheckboxGroupParentProps = F((props) => {
            return useMergedProps()({ "aria-controls": ariaControls }, props);
        }, [ariaControls]);
        useEffect(() => {
            setAriaControls(Array.from(allIds.current).join(" "));
        }, [updateIndex]);
        const useCheckboxGroupChild = F(function ({ index, text, checked, id, ...rest }) {
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
            const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild({ index, text, id, getChecked, ...rest });
            return {
                tabbable,
                useCheckboxGroupChildProps: F((props) => useMergedProps()({}, useListNavigationChildProps(props)), [useListNavigationChildProps])
            };
        }, [notifyChecked, useListNavigationChild]);
        return {
            managedCheckboxes: managedChildren,
            useCheckboxGroupChild,
            useCheckboxGroupParentProps,
            parentIsChecked: getSelfIsCheckedUnstable(),
            parentPercentChecked: (checkedCount / managedChildren.length),
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
    function useSoftDismiss({ onClose, getElements }) {
        function onBackdropClick(e) {
            // Basically, "was this event fired on the root-most element, or at least an element not contained by the modal?"
            // Either could be how the browser handles these sorts of "interacting with nothing" events.
            if (e.target == document.documentElement) {
                onClose("backdrop");
            }
            let elements = getElements();
            if (elements && e.target instanceof Element) {
                if (!Array.isArray(elements))
                    elements = [elements];
                let foundInsideClick = false;
                for (let element of elements) {
                    if (element.contains(e.target)) {
                        foundInsideClick = true;
                        break;
                    }
                }
                if (!foundInsideClick)
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
        useGlobalHandler(document, "keydown", (e) => { if (e.key === "Escape") {
            onClose("escape");
        } });
    }
    /**
     * A generic modal hook, used by modal dialogs, but can also
     * be used by anything that's modal with a backdrop.
     * @param param0
     * @returns
     */
    function useModal({ open, onClose }) {
        const stableOnClose = useStableCallback(onClose);
        const [modalDescribedByBody, setModalDescribedByBody] = useState(false);
        useHideScroll(open);
        const { id: modalId, useRandomIdProps: useModalIdProps, useReferencedIdProps: useModalReferencingIdProps } = useRandomId({ prefix: "aria-modal-" });
        const { id: bodyId, useRandomIdProps: useBodyIdProps, useReferencedIdProps: useBodyReferencingIdProps } = useRandomId({ prefix: "aria-modal-body-" });
        const { id: titleId, useRandomIdProps: useTitleIdProps, useReferencedIdProps: useTitleReferencingIdProps } = useRandomId({ prefix: "aria-modal-title-" });
        const { useRefElementProps: useModalRefElement, getElement: getModalElement } = useRefElement({});
        useSoftDismiss({ onClose: stableOnClose, getElements: getModalElement });
        const useModalBackdrop = F(function useModalBackdrop() {
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
            return useFocusTrapProps(useMergedProps()(useModalRefElement({ role: "dialog" }), modalDescribedByBody ? pFinal : p2));
        };
        const useModalTitle = F(function useModalTitle() {
            const useModalTitleProps = function (props) {
                return useTitleIdProps(props);
            };
            return { useModalTitleProps };
        }, []);
        const useModalBody = F(function useModalBody({ descriptive }) {
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
        const { useModalBackdrop, useModalBody, useModalProps, useModalTitle } = useModal({ open, onClose });
        const useDialogBackdrop = F(() => {
            const { useModalBackdropProps } = useModalBackdrop();
            return { useDialogBackdropProps: useModalBackdropProps };
        }, [useModalBackdrop]);
        const useDialogBody = F(({ descriptive }) => {
            const { useModalBodyProps } = useModalBody({ descriptive });
            return { useDialogBodyProps: useModalBodyProps };
        }, [useModalBackdrop]);
        const useDialogProps = useModalProps;
        const useDialogTitle = F(() => {
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
        const { useHasFocusProps } = useHasFocus({ onFocusedInnerChanged: setFocusedInner });
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
        const useListboxMultiItem = F((info) => {
            const selected = info.selected;
            const [typeaheadInProgress, setTypeaheadInProgress] = useState(false);
            const getSelected = useStableGetter(selected);
            const { useRefElementProps, getElement } = useRefElement({});
            const stableOnSelect = useStableCallback(info.onSelect ?? (() => { }));
            const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ ...info, setTypeaheadInProgress });
            useLayoutEffect(() => {
                const element = getElement();
                if (element && getShiftHeld()) {
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selected: true } });
                }
            }, [tabbable]);
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
        const useListboxMultiLabel = F(function useListboxMultiLabel() {
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
        useActiveElement({ onActiveElementChange: activeElement => setAnyItemsFocused(!!(inputElement?.contains(activeElement))) });
        y(() => {
            if (!anyItemsFocused)
                setTabbableIndex(selectedIndex);
        }, [anyItemsFocused, selectedIndex, setTabbableIndex]);
        useChildFlag({
            activatedIndex: selectedIndex,
            managedChildren,
            setChildFlag: (i, selected) => managedChildren[i]?.setSelected(selected),
            getChildFlag: (i) => (managedChildren[i]?.getSelected() ?? null)
        });
        useLayoutEffect(() => {
            navigateToIndex(selectedIndex);
        }, [selectedIndex, managedChildren.length]);
        const childCount = managedChildren.length;
        const useListboxSingleItem = F((info) => {
            const [selected, setSelected, getSelected] = useState(null);
            const { tabbable, useListNavigationSiblingProps, useListNavigationChildProps } = useListNavigationChild({ setSelected, getSelected, ...info });
            const { getElement, useRefElementProps } = useRefElement({});
            const index = info.index;
            y(() => {
                const element = getElement();
                if (element && tabbable && selectionMode == "focus") {
                    stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                }
            }, [tabbable, selectionMode, index]);
            return { useListboxSingleItemProps, tabbable, selected, getSelected };
            function useListboxSingleItemProps(props) {
                const newProps = useButtonLikeEventHandlers((e) => {
                    navigateToIndex(info.index);
                    const element = getElement();
                    if (element)
                        stableOnSelect?.({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: index } });
                    e.preventDefault();
                }, undefined)({});
                props.role = "option";
                props["aria-setsize"] = (childCount).toString();
                props["aria-posinset"] = (info.index + 1).toString();
                props["aria-selected"] = (selected ?? false).toString();
                return useListNavigationChildProps(useMergedProps()(newProps, useRefElementProps(props)));
            }
        }, [useListNavigationChild, selectionMode, childCount]);
        const useListboxSingleLabel = F(function useListboxSingleLabel() {
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
        const { useHasFocusProps: useMenuHasFocusProps, } = useHasFocus({ onLastFocusedInnerChanged: setMenuLastFocusedInner });
        const { useHasFocusProps: useButtonHasFocusProps } = useHasFocus({ onLastFocusedInnerChanged: setButtonLastFocusedInner });
        const { managedChildren, useListNavigationChild, tabbableIndex, focusCurrent: focusMenu } = useListNavigation({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, shouldFocusOnChange: F(() => getMenuLastFocusedInner() || getButtonLastFocusedInner(), []) });
        const { useRandomIdProps: useMenuIdProps, useReferencedIdProps: useMenuIdReferencingProps } = useRandomId({ prefix: "aria-menu-" });
        const [openerElement, setOpenerElement, getOpenerElement] = useState(null);
        const { getElement: getButtonElement, useRefElementProps: useButtonRefElementProps } = useRefElement({ onElementChange: setOpenerElement });
        const { getElement: getMenuElement, useRefElementProps: useMenuRefElementProps } = useRefElement({});
        useSoftDismiss({ onClose: stableOnClose, getElements: () => ([getButtonElement(), getMenuElement()]) });
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
                    getOpenerElement()?.focus();
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
        const useMenuSentinel = F(() => {
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
        const useMenuButton = F(({}) => {
            return {
                useMenuButtonProps: function (p) {
                    let props = useButtonRefElementProps(useMergedProps()({}, useMenuIdReferencingProps("aria-controls")(useButtonHasFocusProps(p))));
                    props["aria-haspopup"] = "menu";
                    props["aria-expanded"] = open ? "true" : undefined;
                    return props;
                }
            };
        }, [open, onClose, onOpen, useMenuIdReferencingProps]);
        const useMenuSubmenuItem = F((args) => {
            const { useMenuProps, useMenuButton } = useAriaMenu(args);
            const { useMenuButtonProps } = useMenuButton({ tag: "li" });
            const { getElement, useRefElementProps } = useRefElement({ onElementChange: setOpenerElement });
            return {
                getElement,
                useMenuProps,
                useMenuSubmenuItemProps: function ({ ...props }) {
                    props.role = "menuitem";
                    return useRefElementProps(useMenuButtonProps(useMenuIdReferencingProps("aria-controls")(props)));
                }
            };
        }, []);
        const useMenuItem = F((args) => {
            const { useListNavigationChildProps } = useListNavigationChild(args);
            function useMenuItemProps({ ...props }) {
                props.role = "menuitem";
                return useMergedProps()({}, useListNavigationChildProps(props));
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
            return useMenuIdProps(useMenuHasFocusProps(useMergedProps()({ onKeyDown }, useMenuRefElementProps(props))));
        }
        return {
            useMenuProps,
            useMenuButton,
            useMenuItem,
            useMenuSentinel,
            useMenuSubmenuItem,
            focusMenu
        };
    }

    function useAriaTabs({ selectionMode, selectedIndex, onSelect, orientation: logicalOrientation, ...args }) {
        const [tabListFocusedInner, setTabListFocusedInner, getTabListFocusedInner] = useState(false);
        const { useHasFocusProps: useTabListHasFocusProps } = useHasFocus({ onFocusedInnerChanged: setTabListFocusedInner });
        const { getLogicalDirection, convertToPhysicalOrientation, useLogicalDirectionProps } = useLogicalDirection();
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
        useChildFlag({ activatedIndex: selectedIndex, managedChildren: managedTabs, setChildFlag: (i, selected) => managedTabs[i]?.setSelected(selected), getChildFlag: i => (managedTabs[i]?.getSelected()) });
        useChildFlag({ activatedIndex: selectedIndex, managedChildren: managedPanels, setChildFlag: (i, visible) => managedPanels[i]?.setVisible(visible), getChildFlag: i => (managedPanels[i]?.getVisible()) });
        useLayoutEffect((prev) => {
            if (selectedIndex != null && selectionMode == "activate") {
                managedPanels[selectedIndex]?.focus();
            }
        }, [childCount, selectedIndex, selectionMode]);
        const useTab = F(function useTab(info) {
            const [selectionModeL, setSelectionModeL] = useState(selectionMode);
            const { useRefElementProps, getElement } = useRefElement({});
            const [tabPanelId, setTabPanelId] = useState(undefined);
            const { useRandomIdProps: useTabIdProps, id: tabId, getId: getTabId } = useRandomId({ prefix: "aria-tab-" });
            const [selected, setSelected, getSelected] = useState(null);
            const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild({ setSelected, getSelected, tabId, setTabPanelId, setSelectionMode: setSelectionModeL, ...info });
            const getIndex = useStableGetter(info.index);
            y(() => {
                const element = getElement();
                if (tabbable && selectionModeL == "focus") {
                    onSelect({ target: element, currentTarget: element, [EventDetail]: { selectedIndex: getIndex() } });
                }
            }, [tabbable, selectionMode]);
            y(() => { managedPanels[info.index]?.setTabId(tabId); }, [tabId, info.index]);
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
        const useTabPanel = F(function usePanel(info) {
            const [shouldFocus, setShouldFocus] = useState(false);
            const [tabId, setTabId] = useState(undefined);
            const [visible, setVisible, getVisible] = useState(null);
            const { useRandomIdProps: usePanelIdProps, useReferencedIdProps: useReferencedPanelId, id: tabPanelId } = useRandomId({ prefix: "aria-tab-panel-" });
            const { element, useManagedChildProps } = useManagedTabPanel({ ...info, tabPanelId, setTabId, focus, setVisible: setVisible, getVisible: getVisible });
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
            return { useTabPanelProps, visible };
        }, []);
        const useTabsList = F(function useTabList() {
            function useTabListProps({ ...props }) {
                props.role = "tablist";
                props["aria-orientation"] = physicalOrientation;
                return useReferencedTabLabelId("aria-labelledby")(useTabListHasFocusProps(useLogicalDirectionProps(props)));
            }
            return { useTabListProps };
        }, [physicalOrientation]);
        const useTabsLabel = F(function useTabsLabel() {
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
        const useTooltipTrigger = F(function useTooltipTrigger() {
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
                return useTooltipIdReferencingProps("aria-describedby")(useMergedProps()({ onPointerEnter, onPointerLeave }, props));
            }
            return { useTooltipTriggerProps };
        }, [useTooltipIdReferencingProps]);
        const useTooltip = F(function useTooltip() {
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
        const [focusedInner, setFocusedInner, getFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ onFocusedInnerChanged: setFocusedInner });
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
        const [menuFocusedInner, setMenuFocusedInner, getMenuFocusedInner] = useState(false);
        const { useHasFocusProps } = useHasFocus({ onFocusedInnerChanged: setMenuFocusedInner });
        const { useMenuButton, useMenuItem, useMenuProps, useMenuSubmenuItem } = useAriaMenu({ open, onClose, onOpen, shouldFocusOnChange: getMenuFocusedInner });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLWNoaWxkcmVuLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLWNsYXNzZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXJlZnMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXN0eWxlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmFuZG9tLWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmVmLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxheW91dC1lZmZlY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtdGltZW91dC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWNoaWxkLW1hbmFnZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2Utcm92aW5nLXRhYmluZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWRyYWdnYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kcm9wcGFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZXZlbnQtaGFuZGxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1hY3RpdmUtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1oYXMtZm9jdXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtaW50ZXJ2YWwuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbGlzdC1uYXZpZ2F0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJsb2NraW5nLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZm9jdXMtdHJhcC5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1qcyIsIi4uL3Byb3BzLmpzIiwiLi4vdXNlLWJ1dHRvbi5qcyIsIi4uL3VzZS1hY2NvcmRpb24uanMiLCIuLi91c2UtbGFiZWwuanMiLCIuLi91c2UtY2hlY2tib3guanMiLCIuLi91c2UtY2hlY2tib3gtZ3JvdXAuanMiLCIuLi91c2UtbW9kYWwuanMiLCIuLi91c2UtZGlhbG9nLmpzIiwiLi4vdXNlLWxpc3Rib3gtbXVsdGkuanMiLCIuLi91c2UtbGlzdGJveC1zaW5nbGUuanMiLCIuLi91c2UtbWVudS5qcyIsIi4uL3VzZS10YWJzLmpzIiwiLi4vdXNlLXRvb2x0aXAuanMiLCJkZW1vcy91c2UtaW50ZXJ2YWwudHN4IiwiZGVtb3MvdXNlLXJvdmluZy10YWItaW5kZXgudHN4IiwiZGVtb3MvdXNlLXRpbWVvdXQudHN4IiwiaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBuLGwsdSxpLHQscixvLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQscixvLGY9e307Zm9yKG8gaW4gdSlcImtleVwiPT1vP3Q9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTpmW29dPXVbb107aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IobyBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW29dJiYoZltvXT1sLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHkobCxmLHQscixudWxsKX1mdW5jdGlvbiB5KG4saSx0LHIsbyl7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/Kyt1Om99O3JldHVybiBudWxsPT1vJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LHIsbztuLl9fZCYmKHI9KHQ9KGw9bikuX192KS5fX2UsKG89bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKG8sdCxpLGwuX19uLHZvaWQgMCE9PW8ub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tyXTpudWxsLHUsbnVsbD09cj9rKHQpOnIsdC5fX2gpLHoodSx0KSx0Ll9fZSE9ciYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQscixvLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LHIsbyxmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2sscj0wO3QmJnI8dC5sZW5ndGg7cisrKShpPXRbcl0pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP3goaSxsLHUpOlAodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxyKXt2YXIgbyxmLGU7aWYodm9pZCAwIT09bC5fX2Qpbz1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1yfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1yfHxyLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCksbz1udWxsO2Vsc2V7Zm9yKGY9cixlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxyKSxvPXJ9cmV0dXJuIHZvaWQgMCE9PW8/bzp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgcjtmb3IociBpbiB1KVwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxyIGluIGx8fEgobixyLG51bGwsdVtyXSxpKTtmb3IociBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbcl18fFwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxcInZhbHVlXCI9PT1yfHxcImNoZWNrZWRcIj09PXJ8fHVbcl09PT1sW3JdfHxIKG4scixsW3JdLHVbcl0saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciByO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKXI9bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtyXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwscj9UOkkscik6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwscj9UOkkscik7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LHIsbyxmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwsbz1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxyLG8sZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09byYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQscixvLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPW8pJiYodS5fX2U9ZSx1Ll9faD0hIWMsb1tvLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LHIsbyxmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKHI9ITApLG51bGwhPW8pZm9yKDtfPG8ubGVuZ3RoO18rKylpZigocz1vW19dKSYmKHM9PT1sfHwoZD9zLmxvY2FsTmFtZT09ZDozPT1zLm5vZGVUeXBlKSkpe2w9cyxvW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9cj9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxvPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKG89byYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LHIsYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxyJiZcImZvcmVpZ25PYmplY3RcIiE9PWQsbyxmLG8/b1swXTppLl9fayYmayhpLDApLGMpLG51bGwhPW8pZm9yKF89by5sZW5ndGg7Xy0tOyludWxsIT1vW19dJiZoKG9bX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQscjtpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmTih0W3JdLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIHIsbyxmO2wuX18mJmwuX18odSxpKSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFyJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxvfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIXImJnQ/W3RdOm8/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFyJiZ0P3Q6bz9vLl9fZTppLmZpcnN0Q2hpbGQscikseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxyLG8sZj1hKHt9LGwucHJvcHMpO2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXkscnx8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxBKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBBKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gRihuLHQpe3JldHVybiBvPTgsQShmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBUKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gZCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsQSBhcyB1c2VNZW1vLEYgYXMgdXNlQ2FsbGJhY2ssVCBhcyB1c2VDb250ZXh0LGQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xuICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzLCByaHMpIHtcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXG4gICAgcmV0dXJuIG1lcmdlQ2xhc3NlcyhsaHMsIHJocyk7XG59XG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcbiAgICBjb25zdCBsaHNDbGFzcyA9IGxocz8uY2xhc3M7XG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xuICAgIGNvbnN0IHJoc0NsYXNzTmFtZSA9IHJocz8uY2xhc3NOYW1lO1xuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgIF07XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMV0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1syXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcbiAgICBjWzVdLmNvbmNhdChcIlwiKTtcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcbiAgICBjWzhdLmNvbmNhdChcIlwiKTtcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XG4gICAgY1sxMV0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMTNdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cblxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdIGFzIGNvbnN0O1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcblxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSk7XG59XG4vKipcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxocywgcmhzKSB7XG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIHJocy5zdHlsZTtcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxuICAgICAgICBpZiAobGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QobGhzPy5zdHlsZSkgfSwgcmhzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xocy5zdHlsZX07JHtyaHM/LnN0eWxlID8/IFwiXCJ9YDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5sZXQgbG9nID0gKHN0cikgPT4geyBkZWJ1Z2dlcjsgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gbWVyZ2UgdHdvIHByb3BzIHdpdGggdGhlIHNhbWUgbmFtZTogJHtzdHJ9YCk7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ubGhzLFxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcbiAgICAgICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuLypcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcblxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTM6IE0xID0gMDtcblxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTY6IE0yID0gMDtcblxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuXG5cbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XG5cblxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxufVxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxuKi8gXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXByb3BzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZVAocHJldlZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFZhbHVlID0gY2FsbGJhY2socHJldlZhbHVlKTtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgICAgc2V0U3RhdGVQKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuICAgIGNvbnNvbGUuYXNzZXJ0KHJlZi5jdXJyZW50ID09PSBzdGF0ZSB8fCAodHlwZW9mIHN0YXRlID09PSBcIm51bWJlclwiICYmIGlzTmFOKHN0YXRlKSkpO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlLCBnZXRTdGF0ZV07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5mdW5jdGlvbiBiYXNlNjQodmFsdWUpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG4vKipcbiAqIFJldHVybnMgYSBob29rIHRoYXQgbW9kaWZpZXMgYSBzZXQgb2YgcHJvcHMgdG8gcHJvdmlkZSBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCBpZiBvbmUgd2FzIG5vdCBwcm92aWRlZC5cbiAqXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEFuZCB0aGUgcmFuZG9tbHktZ2VuZXJhdGVkIGlkIGl0c2VsZiBpcyBhbHNvIHByb3ZpZGVkIGluIGNhc2UgeW91IHdhbnQgdG8gaGFuZGxlIHRoZSBsb2dpYyB5b3Vyc2VsZiB3aXRob3V0IGB1c2VNZXJnZWRQcm9wc2AuXG4gKlxuICogVW5saWtlIG1vc3Qgb3RoZXIgYHVzZSpQcm9wc2AgaG9va3MsIHRoZXNlIGFyZSBtb3N0bHkgc3RhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XG4gICAgY29uc3QgW3JhbmRvbUlkLCBzZXRSYW5kb21JZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeCkpO1xuICAgIGNvbnN0IFt3YXRjaFByZWZpeFVwZGF0ZXMsIHNldFdhdGNoUHJlZml4VXBkYXRlcywgZ2V0V2F0Y2hQcmVmaXhVcGRhdGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3YXRjaFByZWZpeFVwZGF0ZXMgPSBnZXRXYXRjaFByZWZpeFVwZGF0ZXMoKTtcbiAgICAgICAgaWYgKHdhdGNoUHJlZml4VXBkYXRlcylcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XG4gICAgICAgIHNldFdhdGNoUHJlZml4VXBkYXRlcyh0cnVlKTtcbiAgICB9LCBbcHJlZml4XSk7XG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxuICAgIC8vIFVzZWQgc28gdGhhdCBhbnkgSUQtcmVmZXJlbmNpbmcgcHJvcHMgZG9uJ3QgbmVlZCB0byBwcm92aWRlIHRoZSBzYW1lIHZhbHVlLlxuICAgIC8vXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcbiAgICAvLyB0aGVyZSB3aWxsIGJlIGEgdGVtcG9yYXJ5IG1pc21hdGNoLCBidXQgaXQncyBjb3JyZWN0ZWQgYmVmb3JlIHJlbmRlcmluZyBmaW5pc2hlcy5cbiAgICAvLyBJcyB0aGlzIG9rYXk/XG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCB1c2VSZWZlcmVuY2VkSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJlZmVyZW5jZWRJZFByb3BzKGlkUHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gZnVuY3Rpb24gKHsgW2lkUHJvcE5hbWVdOiBnaXZlbklkLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAoaWRQcm9wTmFtZSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgICAgIHNldFVzZWRJZCh1c2VkSWQyKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xuICAgIGNvbnN0IHVzZVJhbmRvbUlkUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VSYW5kb21JZFByb3BzKHApIHtcbiAgICAgICAgcmV0dXJuIHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiaWRcIikocCk7XG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZG9tSWQsXG4gICAgICAgIGlkOiB1c2VkSWQsXG4gICAgICAgIGdldElkOiBnZXRVc2VkSWQsXG4gICAgICAgIHVzZVJhbmRvbUlkUHJvcHMsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzKHN0cikgeyB9XG5mdW5jdGlvbiBhY2NlcHRzQ3NzKHByb3ApIHsgfVxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xuICAgIGNvbnN0IHsgaWQsIHJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoKTtcbiAgICAvL2NvbnN0IHAxYTogTWVyZ2VkUHJvcHM8eyBpZDogc3RyaW5nIH0sIHsgIH0+ID0gdXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSlcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHAyYiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xuICAgIGNvbnN0IHAzYSA9IHVzZVJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwM2IgPSB1c2VSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcbiAgICBjb25zdCBwNGIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwMWIpO1xuICAgIC8vcDFhLmlkO1xuICAgIHAxYi5pZDtcbiAgICBwMmFbXCJmb3JcIl07XG4gICAgcDJiW1wiZm9yXCJdO1xuICAgIHAyY1tcImZvclwiXTtcbiAgICBwM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwM2JbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGFbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcbiAgICBwNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBJdCdzIGJlY2F1c2UgaXQgcmVzb2x2ZXMgdG8gXCJpZDogdW5kZWZpbmVkICYgc3RyaW5nXCIgLS0gdGhpcyBzaG91bGRuJ3QgaGFwcGVuXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDFiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDJhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMmIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDNhLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDNiLnN0eWxlKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHA0YS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDRiLnN0eWxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yYW5kb20taWQuanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21JZCB9IGZyb20gXCIuL3VzZS1yYW5kb20taWRcIjtcbmNvbnN0IHByZXZpb3VzSW5wdXRzID0gbmV3IE1hcCgpO1xuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuY29uc3Qgb3JpZ2luYWxEaWZmZWQgPSBvcHRpb25zLmRpZmZlZDtcbm9wdGlvbnMuZGlmZmVkID0gKHZub2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgZm9yIChsZXQgW2lkLCB7IGVmZmVjdCwgaW5wdXRzIH1dIG9mIHRvUnVuKSB7XG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBpbnB1dHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9yaWdpbmFsRGlmZmVkPy4odm5vZGUsIC4uLmFyZ3MpO1xufTtcbi8qXG5jb25zdCBvcmlnaW5hbEJlZm9yZUNvbW1pdCA9IChvcHRpb25zIGFzIGFueSkuX2NvbW1pdDtcbihvcHRpb25zIGFzIGFueSkuX2NvbW1pdCA9ICh2bm9kZTogVk5vZGUsIGNvbW1pdFF1ZXVlOiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgXG4gICAgZm9yIChsZXQgW2lkLCB7IGVmZmVjdCwgaW5wdXRzIH1dIG9mIHRvUnVuKSB7XG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBpbnB1dHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3JpZ2luYWxCZWZvcmVDb21taXQodm5vZGUsIGNvbW1pdFF1ZXVlLCAuLi5hcmdzKTtcbn1cbiovXG4vKipcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cbiAqXG4gKiBFdmVyeSByZW5kZXIsIHdlIHNlbmQgdGhlIGFyZ3VtZW50cyB0byBiZSBldmFsdWF0ZWQgYWZ0ZXIgZGlmZmluZyBoYXMgY29tcGxldGVkLFxuICogd2hpY2ggaGFwcGVucyBiZWZvcmUuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmVmb3JlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XG4gICAgY29uc3QgW2lkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQoKSk7XG4gICAgdG9SdW4uc2V0KGlkLCB7IGVmZmVjdCwgaW5wdXRzIH0pO1xufVxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXG4gKlxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXIodmFsdWUpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoVW5zZXQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG4vKipcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxuICpcbiAqIERvIG5vdCB1c2UgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UhICBgdXNlTGF5b3V0RWZmZWN0YCBpcyBmaW5lIHRob3VnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrKGZuKSB7XG4gICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyKGZuKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtY2FsbGJhY2suanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG4vKipcbiAqIFNpbWlsYXIgdG8gYHVzZVN0YXRlYCwgYnV0IGZvciB2YWx1ZXMgdGhhdCBhcmVuJ3QgXCJyZW5kZXItaW1wb3J0YW50XCIgJm5kYXNoOyB1cGRhdGVzIGRvbid0IGNhdXNlIGEgcmUtcmVuZGVyIGFuZCBzbyB0aGUgdmFsdWUgc2hvdWxkbid0IGJlIHVzZWQgZHVyaW5nIHJlbmRlciAodGhvdWdoIGl0IGNlcnRhaW5seSBjYW4pLlxuICpcbiAqIFRvIGNvbXBlbnNhdGUgZm9yIHRoaXMsIHlvdSBzaG91bGQgcGFzcyBhIGB1c2VFZmZlY3RgLWVzcXVlIGNhbGxiYWNrIHRoYXQgaXMgcnVuIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSnVzdCBsaWtlIGB1c2VFZmZlY3RgLCB0aGlzIGNhbGxiYWNrIGNhbiByZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQncyBydW4gYmVmb3JlIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSWYgeW91IHdvdWxkIGxpa2UgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKG9yLCBzYXksIHdoZW4gdGhlIHZhbHVlIG1lZXRzIHNvbWUgY3JpdGVyaWEpLCB0aGlzIGlzIHdoZXJlIHlvdSdsbCB3YW50IHRvIHB1dCBpbiBhIGNhbGwgdG8gYSBgc2V0U3RhdGVgIGZ1bmN0aW9uLlxuICpcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XG4gKlxuICogMS4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB0aGlzIHZlcnNpb24gb2YgYHNldFN0YXRlYCBkb2Vzbid0IHJlLXJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cbiAqIDMuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHlvdSB0cmlnZ2VyIHRoZSBlZmZlY3QgZnVuY3Rpb24gXCJyZW1vdGVseVwiIGluc3RlYWQgb2YgaXQgcnVubmluZyBhZnRlciByZW5kZXJpbmdcbiAqIDQuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHRoZSBzaW5nbGUgXCJkZXBlbmRlbmN5XCIgaXMgYmFzZWQgb24geW91ciBjYWxscyB0byBgc2V0U3RhdGVgXG4gKlxuICogTm90ZSB0aGF0IHdoaWxlIGNhbGxpbmcgYHNldFN0YXRlYCBkb2Vzbid0IGNhdXNlIGFueSByZS1yZW5kZXJzLCB5b3UgY2FuIGRvIHRoYXQgd2l0aGluIHlvdXIgYG9uQ2hhbmdlYCBmdW5jdGlvbiwgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzIHZpYSB0aGF0IGBzZXRTdGF0ZWAuXG4gKlxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb25cbiAqIEBwYXJhbSBpbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZShvbkNoYW5nZSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWYoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQgPyBVbnNldCA6IGluaXRpYWxWYWx1ZSk7XG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgY2xlYW51cENhbGxiYWNrID0gY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChjbGVhbnVwQ2FsbGJhY2spXG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2soKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KSwgW10pO1xuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXG4gICAgY29uc3Qgc2V0VmFsdWUgPSB1c2VTdGFibGVDYWxsYmFjaygoYXJnKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZEZXAgPSB2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGRlcCA9IGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHByZXZEZXApIDogYXJnO1xuICAgICAgICBpZiAoZGVwICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oZGVwLCBwcmV2RGVwKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRlcDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEhhbmRsZSBydW5uaW5nIG9uIG1vdW50L3VubW91bnRcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgJiYgaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oaW5pdGlhbFZhbHVlLCB1bmRlZmluZWQpID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvblNob3VsZENsZWFuVXA7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbZ2V0VmFsdWUsIHNldFZhbHVlXTtcbn1cbmNvbnN0IFVuc2V0ID0gU3ltYm9sKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcGFzc2l2ZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbi8qKlxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cbiAqXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZSB9KSB7XG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxuICAgIGNvbnN0IFtnZXRFbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkVsZW1lbnRDaGFuZ2UsIG51bGwpO1xuICAgIC8vIENyZWF0ZSBhIFJlZkNhbGxiYWNrIHRoYXQncyBmaXJlZCB3aGVuIG1vdW50ZWQgXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XG4gICAgY29uc3QgbXlSZWYgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZVJlZkVsZW1lbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IHJlZjogbXlSZWYgfSwgcHJvcHMpLCBbXSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcbiAgICAgICAgZ2V0RWxlbWVudFxuICAgIH07XG59XG5mdW5jdGlvbiB0ZXN0KCkge1xuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcbiAgICAgICAgaWYgKHAxLnN0eWxlID09IHVuZGVmaW5lZCkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7XG59XG4vKipcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cbiAqXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXG4gKlxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbigpIHtcbiAgICAvLyBUT0RPOiBUaGVyZSdzIG5vIHdheSB0byByZWZyZXNoIHdoaWNoIHdyaXRpbmcgbW9kZSB3ZSBoYXZlIG9uY2UgbW91bnRlZC5cbiAgICAvLyBJZiB0aGUgd3JpdGluZyBtb2RlIGNoYW5nZXMsIHRoZSB3aG9sZSBjb21wb25lbnQgbmVlZHMgdG8gXG4gICAgLy8gbW91bnQvdW5tb3VudCBiZWNhdXNlIChtb3JlLW9yLWxlc3MgaW4gb3JkZXIgb2YgaW1wb3J0YW5jZSlcbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xuICAgIC8vICAgQi4gQ2FsbGluZyBnZXRDb21wdXRlZFN0eWxlIGFmdGVyIGV2ZXJ5IHJlbmRlciBmb3IgZXZlcnkgZWxlbWVudCBnZXRzIGV4cGVuc2l2ZSBmYXN0IGFuZFxuICAgIC8vICAgQy4gSXMgbm90IG5lY2Vzc2FyeSBmb3IgbW9zdCB1c2UgY2FzZXMgdGhhdCB3aWxsIG5ldmVyIHN3aXRjaCB3cml0aW5nLW1vZGUgd2l0aGluIGEgc2luZ2xlIGNvbXBvbmVudFxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxuICAgIC8vXG4gICAgLy8gTWF5YmUgdGhlcmUgY291bGQgYmUgYSBjb250ZXh0IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlbW90ZWx5IHVwZGF0ZSBhbGwgY29tcG9uZW50cyB0aGF0IHVzZSB0aGlzIGhvb2s/XG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGhhc24ndCBhY3R1YWxseSBiZWVuIGhvb2tlZCB1cCB0byB0aGUgZG9jdW1lbnQgeWV0LlxuICAgICAgICAgICAgICAgIC8vIFdhaXQgYSBtb21lbnQgc28gdGhhdCB3ZSBjYW4gcHJvcGVybHkgdXNlIGBnZXRDb21wdXRlZFN0eWxlYFxuICAgICAgICAgICAgICAgIC8vIChzaW5jZSB3ZSBvbmx5IHJlYWQgaXQgb24gbW91bnQpXG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChlbGVtZW50LmlzQ29ubmVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IChlbGVtZW50LnBhcmVudEVsZW1lbnQgPz8gZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHcgPSBjb21wdXRlZFN0eWxlcy53cml0aW5nTW9kZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGNvbXB1dGVkU3R5bGVzLnRleHRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGNvbXB1dGVkU3R5bGVzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc2V0V3JpdGluZ01vZGUodyB8fCBcImhvcml6b250YWwtdGJcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbihkIHx8IFwicnRsXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUZXh0T3JpZW50YXRpb24odCB8fCBcIm1peGVkXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW3dyaXRpbmdNb2RlLCBzZXRXcml0aW5nTW9kZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RleHRPcmllbnRhdGlvbiwgc2V0VGV4dE9yaWVudGF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHdyaXRpbmdNb2RlUmVmID0gdXNlUmVmKHdyaXRpbmdNb2RlKTtcbiAgICBjb25zdCBkaXJlY3Rpb25SZWYgPSB1c2VSZWYoZGlyZWN0aW9uKTtcbiAgICBjb25zdCB0ZXh0T3JpZW50YXRpb25SZWYgPSB1c2VSZWYodGV4dE9yaWVudGF0aW9uKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyB3cml0aW5nTW9kZVJlZi5jdXJyZW50ID0gd3JpdGluZ01vZGU7IH0sIFt3cml0aW5nTW9kZV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgdGV4dE9yaWVudGF0aW9uUmVmLmN1cnJlbnQgPSB0ZXh0T3JpZW50YXRpb247IH0sIFt0ZXh0T3JpZW50YXRpb25dKTtcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgd3JpdGluZ01vZGUgPSB3cml0aW5nTW9kZVJlZi5jdXJyZW50O1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uUmVmLmN1cnJlbnQ7XG4gICAgICAgIGxldCB0ZXh0T3JpZW50YXRpb24gPSB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCF3cml0aW5nTW9kZSB8fCAhZGlyZWN0aW9uIHx8ICF0ZXh0T3JpZW50YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHRleHRPcmllbnRhdGlvbiA9PSBcInVwcmlnaHRcIilcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwibHRyXCI7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5Xcml0aW5nTW9kZXNbd3JpdGluZ01vZGUgPz8gXCJob3Jpem9udGFsLXRiXCJdW2RpcmVjdGlvbiA/PyBcImx0clwiXVxuICAgICAgICB9O1xuICAgIH0sIFt3cml0aW5nTW9kZVJlZiwgZGlyZWN0aW9uUmVmLCB0ZXh0T3JpZW50YXRpb25SZWZdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBlbGVtZW50T3JpZW50YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xuICAgIGNvbnN0IGNvbnZlcnRFbGVtZW50U2l6ZSA9IHVzZUNhbGxiYWNrKChlbGVtZW50U2l6ZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbigpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxMZWZ0VG9wKGRpcikgeyBpZiAoZGlyID09PSBcImx0clwiIHx8IGRpciA9PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2lkdGhcIjsgaWYgKGRpciA9PT0gXCJidHRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMiA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYyKX1gXSk7XG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wczogdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uLFxuICAgICAgICBjb252ZXJ0RWxlbWVudFNpemUsXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbixcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvblxuICAgIH07XG59XG47XG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xuICAgIC4uLkhvcml6b250YWxUYkx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXG59O1xuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcbn07XG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXG59O1xuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xuY29uc3QgVmVydGljYWxMckx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbFJ0bCxcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xuICAgIC4uLlZlcnRpY2FsTHJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcbn07XG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xuICAgIC4uLlNpZGV3YXlzTHRMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXG59O1xuY29uc3QgVmVydGljYWxSbCA9IHtcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXG59O1xuY29uc3QgVmVydGljYWxMciA9IHtcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXG59O1xuY29uc3QgU2lkZXdheXNSbCA9IHtcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXG59O1xuY29uc3QgU2lkZXdheXNMciA9IHtcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXG59O1xuY29uc3QgV3JpdGluZ01vZGVzID0ge1xuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUVmZmVjdCBhcyB1c2VFZmZlY3ROYXRpdmUsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogV3JhcCB0aGUgbmF0aXZlIGB1c2VFZmZlY3RgIHRvIGFkZCBhcmd1bWVudHNcbiAqIHRoYXQgYWxsb3cgYWNjZXNzaW5nIHRoZSBwcmV2aW91cyB2YWx1ZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhcyB3ZWxsIGFzIHRoZSBjaGFuZ2VzIHRoYXQgY2F1c2VkIHRoZSBob29rIHRvIGJlIGNhbGxlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICpcbiAqIEBwYXJhbSBlZmZlY3RcbiAqIEBwYXJhbSBpbnB1dHNcbiAqIEBwYXJhbSBpbXBsIFlvdSBjYW4gY2hvb3NlIHdoZXRoZXIgdG8gdXNlIGB1c2VFZmZlY3RgIG9yIGB1c2VMYXlvdXRFZmZlY3RgIGJ5XG4gKiBwYXNzaW5nIG9uZSBvZiB0aGVtIGFzIHRoaXMgYXJndW1lbnQuIEJ5IGRlZmF1bHQsIGl0J3MgYHVzZUVmZmVjdGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoZWZmZWN0LCBpbnB1dHMsIGltcGwgPSB1c2VFZmZlY3ROYXRpdmUpIHtcbiAgICBjb25zdCBwcmV2SW5wdXRzID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgZWZmZWN0MiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBbXTtcbiAgICAgICAgaWYgKGlucHV0cyAmJiBwcmV2SW5wdXRzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5tYXgocHJldklucHV0cy5jdXJyZW50Lmxlbmd0aCwgaW5wdXRzLmxlbmd0aCk7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2SW5wdXRzLmN1cnJlbnRbaV0gIT0gaW5wdXRzW2ldKVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzW2ldID0geyBmcm9tOiBwcmV2SW5wdXRzLmN1cnJlbnRbaV0sIHRvOiBpbnB1dHNbaV0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXQgPSBlZmZlY3QocHJldklucHV0cy5jdXJyZW50LCBjaGFuZ2VzKTtcbiAgICAgICAgcHJldklucHV0cy5jdXJyZW50ID0gaW5wdXRzO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gICAgaW1wbChlZmZlY3QyLCBpbnB1dHMpO1xufVxuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgYXMgdXNlTGF5b3V0RWZmZWN0TmF0aXZlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcIi4vdXNlLWVmZmVjdFwiO1xuLyoqXG4gKiBXcmFwIHRoZSBuYXRpdmUgYHVzZUxheW91dEVmZmVjdGAgdG8gYWRkIGFyZ3VtZW50c1xuICogdGhhdCBhbGxvdyBhY2Nlc3NpbmcgdGhlIHByZXZpb3VzIHZhbHVlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFzIHdlbGwgYXMgdGhlIGNoYW5nZXMgdGhhdCBjYXVzZWQgdGhlIGhvb2sgdG8gYmUgY2FsbGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XG4gICAgcmV0dXJuIHVzZUVmZmVjdChlZmZlY3QsIGlucHV0cywgdXNlTGF5b3V0RWZmZWN0TmF0aXZlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VUaW1lb3V0KHsgdGltZW91dCwgY2FsbGJhY2ssIHRyaWdnZXJJbmRleCB9KSB7XG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7IHN0YXJ0VGltZVJlZi5jdXJyZW50ID0gbnVsbDsgY2FsbGJhY2soKTsgfSk7XG4gICAgY29uc3QgZ2V0VGltZW91dCA9IHVzZVN0YWJsZUdldHRlcih0aW1lb3V0KTtcbiAgICAvLyBTZXQgYW55IHRpbWUgd2Ugc3RhcnQgdGltZW91dC5cbiAgICAvLyBVbnNldCBhbnkgdGltZSB0aGUgdGltZW91dCBjb21wbGV0ZXNcbiAgICBjb25zdCBzdGFydFRpbWVSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgdGltZW91dElzTnVsbCA9ICh0aW1lb3V0ID09IG51bGwpO1xuICAgIC8vIEFueSB0aW1lIHRoZSB0cmlnZ2VySW5kZXggY2hhbmdlcyAoaW5jbHVkaW5nIG9uIG1vdW50KVxuICAgIC8vIHJlc3RhcnQgdGhlIHRpbWVvdXQuICBUaGUgdGltZW91dCBkb2VzIE5PVCByZXNldFxuICAgIC8vIHdoZW4gdGhlIGR1cmF0aW9uIG9yIGNhbGxiYWNrIGNoYW5nZXMsIG9ubHkgdHJpZ2dlckluZGV4LlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gZ2V0VGltZW91dCgpO1xuICAgICAgICBjb25zb2xlLmFzc2VydCh0aW1lb3V0SXNOdWxsID09ICh0aW1lb3V0ID09IG51bGwpKTtcbiAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRUaW1lUmVmLmN1cnJlbnQgPSArKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dChzdGFibGVDYWxsYmFjaywgdGltZW91dCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZ2dlckluZGV4LCB0aW1lb3V0SXNOdWxsXSk7XG4gICAgY29uc3QgZ2V0RWxhcHNlZFRpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKyhuZXcgRGF0ZSgpKSkgLSAoKyhzdGFydFRpbWVSZWYuY3VycmVudCA/PyBuZXcgRGF0ZSgpKSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdldFJlbWFpbmluZ1RpbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBnZXRUaW1lb3V0KCk7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ID09IG51bGwgPyBudWxsIDogTWF0aC5tYXgoMCwgdGltZW91dCAtIGdldEVsYXBzZWRUaW1lKCkpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4geyBnZXRFbGFwc2VkVGltZSwgZ2V0UmVtYWluaW5nVGltZSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXRpbWVvdXQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmltcG9ydCB7IHVzZVRpbWVvdXQgfSBmcm9tIFwiLi91c2UtdGltZW91dFwiO1xuLyoqXG4gKiBXaGVuIHVzZWQgaW4gdGFuZGVtIHdpdGggYHVzZVJvdmluZ1RhYkluZGV4YCwgYWxsb3dzIGNvbnRyb2wgb2ZcbiAqIHRoZSB0YWJiYWJsZSBpbmRleCB3aXRoIHRoZSBhcnJvdyBrZXlzLlxuICpcbiAqIEBzZWUgdXNlTGlzdE5hdmlnYXRpb24sIHdoaWNoIHBhY2thZ2VzIGV2ZXJ5dGhpbmcgdXAgdG9nZXRoZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgaW5kZXgsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QsIG5hdmlnYXRlVG9OZXh0LCBuYXZpZ2F0ZVRvUHJldiwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0aW9uRGlyZWN0aW9uLCBkaXNhYmxlQXJyb3dLZXlzLCBkaXNhYmxlSG9tZUVuZEtleXMgfSkge1xuICAgIG5hdmlnYXRpb25EaXJlY3Rpb24gPz89IFwiZWl0aGVyXCI7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0YWJiYWJsZSBpbmRleCBuZXZlciBlc2NhcGVzIHRoZSBib3VuZHMgb2YgYWxsIGF2YWlsYWJsZSBjaGlsZHJlblxuICAgIC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgdGhlIG9yaWdpbmFsIGluZGV4IGFuZCBrZWVwIGl0LCBhdCBsZWFzdCB1bnRpbCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9GaXJzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRDb3VudCA+IDAgJiYgaW5kZXggPj0gY2hpbGRDb3VudCkge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9MYXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaW5kZXgsIGNoaWxkQ291bnQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3RdKTtcbiAgICAvLyBUaGVzZSBhbGxvdyB1cyB0byBtYW5pcHVsYXRlIHdoYXQgb3VyIGN1cnJlbnQgdGFiYmFibGUgY2hpbGQgaXMuXG4gICAgLypjb25zdCBuYXZpZ2F0ZVRvSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4geyBzZXRJbmRleChpbmRleCA8IDAgPyAobWFuYWdlZENoaWxkcmVuLmxlbmd0aCArIGluZGV4KSA6IGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRJbmRleCgoaTogbnVtYmVyIHwgbnVsbCkgPT4gaSA9PT0gbnVsbD8gbnVsbCEgOiBpID49IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxPyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoIC0gMSA6ICsraSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0SW5kZXgoKGk6IG51bWJlciB8IG51bGwpID0+IGkgPT09IG51bGw/IG51bGwhIDogaSA8IDA/IDAgOiAtLWkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1N0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoMCk7IH0sIFtuYXZpZ2F0ZVRvSW5kZXhdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4geyBuYXZpZ2F0ZVRvSW5kZXgoLTEpOyB9LCBbbmF2aWdhdGVUb0luZGV4XSk7Ki9cbiAgICBjb25zdCB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGQgPSB1c2VDYWxsYmFjaygoeyBpbmRleCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGdldEluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKGluZGV4KTtcbiAgICAgICAgLy8gUHJlZmVyIHRoZSBwYXJlbnQgZWxlbWVudCdzIGRpcmVjdGlvbiBzbyB0aGF0IHdlJ3JlIG5vdCBjYWxsaW5nIGdldENvbXB1dGVkU3R5bGVcbiAgICAgICAgLy8gb24gZXZlcnkgc2luZ2xlIGluZGl2aWR1YWwgY2hpbGQsIHdoaWNoIGlzIGxpa2VseSByZWR1bmRhbnQuXG4gICAgICAgIGNvbnN0IHsgY29udmVydEVsZW1lbnRTaXplLCBnZXRMb2dpY2FsRGlyZWN0aW9uLCB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMgfSA9IHVzZUxvZ2ljYWxEaXJlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMgPSAocHJvcHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBnZXRJbmRleCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgbGV0IGFsbG93c0Jsb2NrTmF2aWdhdGlvbiA9IChuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiYmxvY2tcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uID0gKG5hdmlnYXRpb25EaXJlY3Rpb24gPT0gXCJpbmxpbmVcIiB8fCBuYXZpZ2F0aW9uRGlyZWN0aW9uID09IFwiZWl0aGVyXCIpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uYmxvY2tPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJibG9ja0RpcmVjdGlvblwiIDogXCJpbmxpbmVEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5ibG9ja09yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBhbGxvd3NCbG9ja05hdmlnYXRpb24gOiBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcImJ0dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9QcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJpbmxpbmVEaXJlY3Rpb25cIiA6IFwiYmxvY2tEaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25BbGxvd2VkID0gKCFkaXNhYmxlQXJyb3dLZXlzICYmIChpbmZvPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBhbGxvd3NJbmxpbmVOYXZpZ2F0aW9uIDogYWxsb3dzQmxvY2tOYXZpZ2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvPy5bcHJvcE5hbWVdID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gKGluZm8/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiaW5saW5lRGlyZWN0aW9uXCIgOiBcImJsb2NrRGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uQWxsb3dlZCA9ICghZGlzYWJsZUFycm93S2V5cyAmJiAoaW5mbz8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gYWxsb3dzSW5saW5lTmF2aWdhdGlvbiA6IGFsbG93c0Jsb2NrTmF2aWdhdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbz8uW3Byb3BOYW1lXSA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvUHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGlzYWJsZUhvbWVFbmRLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0ZpcnN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvTGFzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biB9LCBwcm9wcykpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHNcbiAgICAgICAgfTtcbiAgICB9LCBbbmF2aWdhdGlvbkRpcmVjdGlvbiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9QcmV2LCBuYXZpZ2F0ZVRvRmlyc3QsIG5hdmlnYXRlVG9MYXN0LCAhIWRpc2FibGVBcnJvd0tleXMsICEhZGlzYWJsZUhvbWVFbmRLZXlzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkLFxuICAgIH07XG59XG4vKipcbiAqIEFsbG93cyBmb3IgdGhlIHNlbGVjdGlvbiBvZiBhIG1hbmFnZWQgY2hpbGQgYnkgdHlwaW5nIHRoZSBnaXZlbiB0ZXh0IGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAqXG4gKiBAc2VlIHVzZUxpc3ROYXZpZ2F0aW9uLCB3aGljaCBwYWNrYWdlcyBldmVyeXRoaW5nIHVwIHRvZ2V0aGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHlwZWFoZWFkTmF2aWdhdGlvbih7IGNvbGxhdG9yLCBnZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dCwgc2V0SW5kZXggfSkge1xuICAgIC8vIEZvciB0eXBlYWhlYWQsIGtlZXAgdHJhY2sgb2Ygd2hhdCBvdXIgY3VycmVudCBcInNlYXJjaFwiIHN0cmluZyBpcyAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgLy8gYW5kIGFsc28gY2xlYXIgaXQgZXZlcnkgMTAwMCBtcyBzaW5jZSB0aGUgbGFzdCB0aW1lIGl0IGNoYW5nZWQuXG4gICAgLy8gTmV4dCwga2VlcCBhIG1hcHBpbmcgb2YgdHlwZWFoZWFkIHZhbHVlcyB0byBpbmRpY2VzIGZvciBmYXN0ZXIgc2VhcmNoaW5nLlxuICAgIC8vIEFuZCwgZm9yIHRoZSB1c2VyJ3Mgc2FrZSwgbGV0IHRoZW0ga25vdyB3aGVuIHRoZWlyIHR5cGVhaGVhZCBjYW4ndCBtYXRjaCBhbnl0aGluZyBhbnltb3JlXG4gICAgY29uc3QgW2N1cnJlbnRUeXBlYWhlYWQsIHNldEN1cnJlbnRUeXBlYWhlYWQsIGdldEN1cnJlbnRUeXBlYWhlYWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlVGltZW91dCh7IHRpbWVvdXQ6IHR5cGVhaGVhZFRpbWVvdXQgPz8gMTAwMCwgY2FsbGJhY2s6ICgpID0+IHsgc2V0Q3VycmVudFR5cGVhaGVhZChudWxsKTsgc2V0SW52YWxpZFR5cGVhaGVhZChudWxsKTsgfSwgdHJpZ2dlckluZGV4OiBjdXJyZW50VHlwZWFoZWFkIH0pO1xuICAgIGNvbnN0IHNvcnRlZFR5cGVhaGVhZEluZm8gPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IFtpbnZhbGlkVHlwZWFoZWFkLCBzZXRJbnZhbGlkVHlwZWFoZWFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBIYW5kbGUgdHlwZWFoZWFkIGZvciBpbnB1dCBtZXRob2QgZWRpdG9ycyBhcyB3ZWxsXG4gICAgLy8gRXNzZW50aWFsbHksIHdoZW4gYWN0aXZlLCBpZ25vcmUgZnVydGhlciBrZXlzIFxuICAgIC8vIGJlY2F1c2Ugd2UncmUgd2FpdGluZyBmb3IgYSBDb21wb3NpdGlvbkVuZCBldmVudFxuICAgIGNvbnN0IFtpbWVBY3RpdmUsIHNldEltZUFjdGl2ZSwgZ2V0SW1lQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBCZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50cyBmaXJlICphZnRlcioga2V5ZG93biBldmVudHMgXG4gICAgLy8gKGJ1dCB3aXRoaW4gdGhlIHNhbWUgdGFzaywgd2hpY2gsIFRPRE8sIGNvdWxkIGJlIGJyb3dzZXItZGVwZW5kZW50KSxcbiAgICAvLyB3ZSBjYW4gdXNlIHRoaXMgdG8ga2VlcCB0cmFjayBvZiB3aGljaCBldmVudCB3ZSdyZSBsaXN0ZW5pbmcgZm9yIG9uIHRoZSBmaXJzdCBrZXlkb3duLlxuICAgIGNvbnN0IFtuZXh0VHlwZWFoZWFkQ2hhciwgc2V0TmV4dFR5cGVhaGVhZENoYXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG5leHRUeXBlYWhlYWRDaGFyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50VHlwZWFoZWFkKHR5cGVhaGVhZCA9PiAoKHR5cGVhaGVhZCA/PyBcIlwiKSArIG5leHRUeXBlYWhlYWRDaGFyKSk7XG4gICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihudWxsKTtcbiAgICAgICAgfVxuICAgIH0sIFtuZXh0VHlwZWFoZWFkQ2hhcl0pO1xuICAgIGNvbnN0IGNvbXBhcmF0b3IgPSB1c2VTdGFibGVDYWxsYmFjaygobGhzLCByaHMpID0+IHtcbiAgICAgICAgbGV0IGNvbXBhcmU7XG4gICAgICAgIGlmICh0eXBlb2YgbGhzID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiByaHMudGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgLy8gRm9yIHRoZSBwdXJwb3NlcyBvZiB0eXBlYWhlYWQsIG9ubHkgY29tcGFyZSBhIHN0cmluZyBvZiB0aGUgc2FtZSBzaXplIGFzIG91ciBjdXJyZW50bHkgdHlwZWQgc3RyaW5nLlxuICAgICAgICAgICAgLy8gQnkgbm9ybWFsaXppbmcgdGhlbSBmaXJzdCwgd2UgZW5zdXJlIHRoaXMgYnl0ZS1ieS1ieXRlIGhhbmRsaW5nIG9mIHJhdyBjaGFyYWN0ZXIgZGF0YSB3b3JrcyBvdXQgb2theS5cbiAgICAgICAgICAgIGxldCBzYWZlTGhzID0gbGhzLm5vcm1hbGl6ZShcIk5GRFwiKTtcbiAgICAgICAgICAgIGxldCBzYWZlUmhzID0gcmhzLnRleHQubm9ybWFsaXplKFwiTkZEXCIpLnN1YnN0cigwLCBzYWZlTGhzLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoY29sbGF0b3IpXG4gICAgICAgICAgICAgICAgY29tcGFyZSA9IGNvbGxhdG9yLmNvbXBhcmUoc2FmZUxocywgc2FmZVJocyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY29tcGFyZSA9IHNhZmVMaHMudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHNhZmVSaHMudG9Mb3dlckNhc2UoKSA/PyBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaHMgLSByaHM7XG4gICAgfSk7XG4gICAgLy8gSGFuZGxlIGNoYW5nZXMgaW4gdHlwZWFoZWFkIHRoYXQgY2F1c2UgY2hhbmdlcyB0byB0aGUgdGFiYmFibGUgaW5kZXhcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFR5cGVhaGVhZCAmJiBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc29ydGVkVHlwZWFoZWFkSW5kZXggPSBiaW5hcnlTZWFyY2goc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBjb21wYXJhdG9yKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZWRUeXBlYWhlYWRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBoYXMgdHlwZWQgYW4gZW50cnkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgLy8gKG9yIG1vcmUgc3BlY2lmaWNhbGx5IFwiZm9yIHdoaWNoIHRoZXJlIGlzIG5vIGVudHJ5IHRoYXQgc3RhcnRzIHdpdGggdGhhdCBpbnB1dFwiKVxuICAgICAgICAgICAgICAgIHNldEludmFsaWRUeXBlYWhlYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVHlwZWFoZWFkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgV2Uga25vdyByb3VnaGx5IHdoZXJlLCBpbiB0aGUgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MsIG91ciBuZXh0IHR5cGVhaGVhZCBsb2NhdGlvbiBpcy5cbiAgICAgICAgICAgICAgICAgIEJ1dCByb3VnaGx5IGlzbid0IGdvb2QgZW5vdWdoIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBtYXRjaGVzLlxuICAgICAgICAgICAgICAgICAgVG8gY29udmVydCBvdXIgc29ydGVkIGluZGV4IHRvIHRoZSB1bnNvcnRlZCBpbmRleCB3ZSBuZWVkLCB3ZSBoYXZlIHRvIGZpbmQgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICBlbGVtZW50IHRoYXQgbWF0Y2hlcyB1cyAqYW5kKiAoaWYgYW55IHN1Y2ggZXhpc3QpIGlzICphZnRlciogb3VyIGN1cnJlbnQgc2VsZWN0aW9uLlxuXG4gICAgICAgICAgICAgICAgICBJbiBvdGhlciB3b3JkcywgdGhlIG9ubHkgd2F5IHR5cGVhaGVhZCBtb3ZlcyBiYWNrd2FyZHMgcmVsYXRpdmUgdG8gb3VyIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIGlzIGlmIHRoZSBvbmx5IG90aGVyIG9wdGlvbiBpcyBiZWhpbmQgdXMuXG5cbiAgICAgICAgICAgICAgICAgIEl0J3Mgbm90IHNwZWNpZmllZCBpbiBXQUktQVJJQSB3aGF0IHRvIGRvIGluIHRoYXQgY2FzZS4gIEkgc3VwcG9zZSB3cmFwIGJhY2sgdG8gdGhlIHN0YXJ0P1xuICAgICAgICAgICAgICAgICAgVGhvdWdoIHRoZXJlJ3MgYWxzbyBhIGNhc2UgZm9yIGp1c3QgZ29pbmcgdXB3YXJkcyB0byB0aGUgbmVhcmVzdCB0byBwcmV2ZW50IGp1bXBpbmVzcy5cbiAgICAgICAgICAgICAgICAgIEJ1dCBpZiB5b3UncmUgYWxyZWFkeSBkb2luZyB0eXBlYWhlYWQgb24gYW4gdW5zb3J0ZWQgbGlzdCwgbGlrZSwganVtcGluZXNzIGNhbid0IGJlIGF2b2lkZWQuXG4gICAgICAgICAgICAgICAgICBJIGR1bm5vLiBHb2luZyBiYWNrIHRvIHRoZSBzdGFydCBpcyB0aGUgc2ltcGxpc3QgdGhvdWdoLlxuXG4gICAgICAgICAgICAgICAgICBCYXNpY2FsbHkgd2hhdCB0aGlzIGRvZXM6IFN0YXJ0aW5nIGZyb20gd2hlcmUgd2UgZm91bmQgb3Vyc2VsdmVzIGFmdGVyIG91ciBiaW5hcnkgc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgc2NhbiBiYWNrd2FyZHMgYW5kIGZvcndhcmRzIHRocm91Z2ggYWxsIGFkamFjZW50IGVudHJpZXMgdGhhdCBhbHNvIGNvbXBhcmUgZXF1YWxseSBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICB3ZSBjYW4gZmluZCB0aGUgb25lIHdob3NlIGB1bnNvcnRlZEluZGV4YCBpcyB0aGUgbG93ZXN0IGFtb25nc3QgYWxsIG90aGVyIGVxdWFsIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgIChhbmQgYWxzbyB0aGUgbG93ZXN0IGB1bnNvcnRlZEluZGV4YCB5YWRkYSB5YWRkYSBleGNlcHQgdGhhdCBpdCBjb21lcyBhZnRlciB1cykuXG5cbiAgICAgICAgICAgICAgICAgIFRPRE86IFRoZSBiaW5hcnkgc2VhcmNoIHN0YXJ0cyB0aGlzIG9mZiB3aXRoIGEgc29saWQgTyhsb2cgbiksIGJ1dCBvbmUtY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hlcyBhcmUsIHRoYW5rcyB0byBwaWdlb25ob2xlIHByaW5jaXBhbCwgZXZlbnR1YWxseSBndWFyYW50ZWVkIHRvIGJlY29tZVxuICAgICAgICAgICAgICAgICAgTyhuKmxvZyBuKS4gVGhpcyBpcyBhbm5veWluZyBidXQgcHJvYmFibHkgbm90IGVhc2lseSBzb2x2YWJsZT8gVGhlcmUgY291bGQgYmUgYW5cbiAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiBmb3Igb25lLWNoYXJhY3RlciBzdHJpbmdzLCBidXQgdGhhdCdzIGp1c3Qga2lja2luZyB0aGUgY2FuIGRvd25cbiAgICAgICAgICAgICAgICAgIHRoZSByb2FkLiBNYXliZSBvbmUgb3IgdHdvIGNoYXJhY3RlcnMgd291bGQgYmUgZ29vZCBlbm91Z2ggdGhvdWdoLlxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgYXJlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgY2FuZGlkYXRlcycgcG9zaXRpb25zIGluIGJvdGggb3VyIHNvcnRlZCBhcnJheSBhbmQgdGhlIHVuc29ydGVkIERPTS5cbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VW5zb3J0ZWRJbmRleEFsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFNvcnRlZEluZGV4QWxsID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgdHdvIGFyZSBvbmx5IHNldCBmb3IgZWxlbWVudHMgdGhhdCBhcmUgYWhlYWQgb2YgdXMsIGJ1dCB0aGUgcHJpbmNpcGxlJ3MgdGhlIHNhbWUgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFVuc29ydGVkSW5kZXhOZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXN0U29ydGVkSW5kZXhOZXh0ID0gc29ydGVkVHlwZWFoZWFkSW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQmVzdEZpdCA9ICh1KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb3dlc3RVbnNvcnRlZEluZGV4QWxsID09IG51bGwgfHwgdSA8IGxvd2VzdFVuc29ydGVkSW5kZXhBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0U29ydGVkSW5kZXhBbGwgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgPT0gbnVsbCB8fCB1IDwgbG93ZXN0VW5zb3J0ZWRJbmRleE5leHQpICYmIHUgPiAoZ2V0SW5kZXgoKSA/PyAtSW5maW5pdHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RVbnNvcnRlZEluZGV4TmV4dCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RTb3J0ZWRJbmRleE5leHQgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgY29tcGFyYXRvcihjdXJyZW50VHlwZWFoZWFkLCBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0pID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmVzdEZpdChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnRbaV0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9IHNvcnRlZFR5cGVhaGVhZEluZGV4O1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgc29ydGVkVHlwZWFoZWFkSW5mby5jdXJyZW50Lmxlbmd0aCAmJiBjb21wYXJhdG9yKGN1cnJlbnRUeXBlYWhlYWQsIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCZXN0Rml0KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtpXS51bnNvcnRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0VW5zb3J0ZWRJbmRleE5leHQgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleE5leHRdLnVuc29ydGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvd2VzdFVuc29ydGVkSW5kZXhBbGwgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHNldEluZGV4KHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudFtsb3dlc3RTb3J0ZWRJbmRleEFsbF0udW5zb3J0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFR5cGVhaGVhZF0pO1xuICAgIGNvbnN0IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKCh7IHRleHQsIC4uLmkgfSkgPT4ge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoZXJlIHRvIGluc2VydCB0aGlzIGl0ZW0uXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSBhbGwgaW5kZXggdmFsdWVzIHNob3VsZCBiZSB1bmlxdWUsIHRoZSByZXR1cm5lZCBzb3J0ZWRJbmRleFxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgcmVmZXIgdG8gYSBuZXcgbG9jYXRpb24gKGkuZS4gYmUgbmVnYXRpdmUpICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNvcnRlZEluZGV4IDwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQuc3BsaWNlKC1zb3J0ZWRJbmRleCAtIDEsIDAsIHsgdGV4dCwgdW5zb3J0ZWRJbmRleDogaS5pbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB1bm1vdW50aW5nLCBmaW5kIHdoZXJlIHdlIHdlcmUgYW5kIHJlbW92ZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFnYWluLCB3ZSBzaG91bGQgYWx3YXlzIGZpbmQgb3Vyc2VsdmVzIGJlY2F1c2UgdGhlcmUgc2hvdWxkIGJlIG5vIGR1cGxpY2F0ZSB2YWx1ZXMgaWYgZWFjaCBpbmRleCBpcyB1bmlxdWUuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb3J0ZWRJbmRleCA9IGJpbmFyeVNlYXJjaChzb3J0ZWRUeXBlYWhlYWRJbmZvLmN1cnJlbnQsIHRleHQsIGNvbXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChzb3J0ZWRJbmRleCA+PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZFR5cGVhaGVhZEluZm8uY3VycmVudC5zcGxpY2Uoc29ydGVkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RleHRdKTtcbiAgICAgICAgY29uc3QgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHMgPSBmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uU3RhcnQgPSAoZSkgPT4geyBzZXRJbWVBY3RpdmUodHJ1ZSk7IH07XG4gICAgICAgICAgICBjb25zdCBvbkNvbXBvc2l0aW9uRW5kID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHNldEltZUFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWVBY3RpdmUgPSBnZXRJbWVBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gZS5rZXk7XG4gICAgICAgICAgICAgICAgLy8gTm90IGhhbmRsZWQgYnkgdHlwZWFoZWFkIChpLmUuIGFzc3VtZSB0aGlzIGlzIGEga2V5Ym9hcmQgc2hvcnRjdXQpXG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSAmJiBlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd2F5IHRoYXQgZG9lc24ndCBzcGxpdCBVVEYtMTYgc3Vycm9nYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFR5cGVhaGVhZCh0ID0+IHQgPT09IG51bGwgPyBudWxsIDogWy4uLnRdLnJldmVyc2UoKS5zbGljZSgxKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUaGUga2V5IHByb3BlcnR5IHJlcHJlc2VudHMgdGhlIHR5cGVkIGNoYXJhY3RlciBPUiB0aGUgXCJuYW1lZCBrZXkgYXR0cmlidXRlXCIgb2YgdGhlIGtleSBwcmVzc2VkLlxuICAgICAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gZGVmaW5pdGUgd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UsIGJ1dCBmb3IgYWxsIGludGVudHMgYW5kIHB1cnBvc2VzXG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG5vIG9uZS1jaGFyYWN0ZXIgbmFtZXMsIGFuZCB0aGVyZSBhcmUgbm8gbm9uLUFTQ0lJLWFscGhhIG5hbWVzLlxuICAgICAgICAgICAgICAgIC8vIFRodXMsIGFueSBvbmUtY2hhcmFjdGVyIG9yIG5vbi1BU0NJSSB2YWx1ZSBmb3IgYGtleWAgaXMgKmFsbW9zdCBjZXJ0YWlubHkqIGEgdHlwZWQgY2hhcmFjdGVyLlxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2hhcmFjdGVyS2V5ID0gKGtleS5sZW5ndGggPT09IDEgfHwgIS9eW0EtWmEtel0vLnRlc3Qoa2V5KSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hhcmFjdGVyS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gXCIgXCIgJiYgKGdldEN1cnJlbnRUeXBlYWhlYWQoKSA/PyBcIlwiKS50cmltKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGJlY2F1c2UgYSBzcGFjZWJhciBjYW4ndCBldmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhdGUgYSB0eXBlYWhlYWQsIG9ubHkgY29udGludWUgb25lLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKFNwZWNpZmljYWxseSwgbGV0IHRoZSBldmVudCBjb250aW51ZSBwcm9wYWdhdGlvbiBpbiB0aGlzIGNhc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogV29uJ3QgYmUgdHJ1ZSBmb3IgdGhlIGZpcnN0IGtleWRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB3aWxsIGJlIG92ZXJ3cml0dGVuIGJlZm9yZSB1c2VMYXlvdXRFZmZlY3QgaXMgY2FsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhY3R1YWxseSBhcHBseSB0aGUgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltZUFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXh0VHlwZWFoZWFkQ2hhcihrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgb25LZXlEb3duLCBvbkNvbXBvc2l0aW9uU3RhcnQsIG9uQ29tcG9zaXRpb25FbmQsIH0sIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZFByb3BzXG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZCxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcbiAgICB9O1xufVxuLyoqXG4gKiBZb3VyIHVzdWFsIGJpbmFyeSBzZWFyY2ggaW1wbGVtZW50YXRpb24uXG4gKlxuICogSXQncyB1c2VkIGhlcmUgdG8gcXVpY2tseSBmaW5kIGEgZ29vZCBzcG90IHRvIHN0YXJ0IHNlYXJjaGluZyBmb3Igb3VyIG5leHQgdHlwZWFoZWFkIGNhbmRpZGF0ZS5cbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB3YW50ZWQgVGhlIHZhbHVlIHlvdSdkIGxpa2UgdG8gZmluZFxuICogQHBhcmFtIGNvbXBhcmF0b3IgQ29tcGFyZXMgYHdhbnRlZGAgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBpbiBgYXJyYXlgXG4gKiBAcmV0dXJucyBBIG5vbi1uZWdhdGl2ZSB2YWx1ZSBpZiBgd2FudGVkYCB3YXMgZm91bmQsIGFuZCBhIG5lZ2F0aXZlIG51bWJlciBpZiBub3QuXG4gKiBUaGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhpcyBudW1iZXIsIG1pbnVzIG9uZSwgaXMgd2hlcmUgYHdhbnRlZGAgKndvdWxkKiBiZSBmb3VuZCBpZiBpdCAqd2FzKiBpbiBgYXJyYXlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHdhbnRlZCwgY29tcGFyYXRvcikge1xuICAgIHZhciBmaXJzdEluZGV4ID0gMDtcbiAgICB2YXIgbGFzdEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoZmlyc3RJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgdmFyIHRlc3RJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSA+PiAxO1xuICAgICAgICB2YXIgY29tcGFyaXNvblJlc3VsdCA9IGNvbXBhcmF0b3Iod2FudGVkLCBhcnJheVt0ZXN0SW5kZXhdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25SZXN1bHQgPiAwKSB7XG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gdGVzdEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJpc29uUmVzdWx0IDwgMCkge1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gdGVzdEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC1maXJzdEluZGV4IC0gMTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1rZXlib2FyZC1uYXZpZ2F0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbi8qKlxuICogQWxsb3dzIGEgcGFyZW50IGNvbXBvbmVudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgY2VydGFpblxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cbiAqXG4gKiBUaGlzIGhvb2sgaXMgc2xpZ2h0bHkgbW9yZSBjb21wbGljYXRlZCBpbiB0aGF0IGl0IHJldHVybnMgYm90aCBhXG4gKiBwcm9wLW1vZGlmeWluZyBob29rLCBidXQgYWxzbyBhIGhvb2sgdGhhdCBlYWNoIGNoaWxkIHdpbGwgbmVlZFxuICogdG8gdXNlOiBgdXNlTWFuYWdlZENoaWxkYC4gIEl0J3Mgc3RhYmxlIGFjcm9zcyByZW5kZXJzLCBzbyBqdXN0XG4gKiB0b3NzIGl0IGludG8gYSBgQ29udGV4dGAgc28gdGhlIGNoaWxkcmVuIGNhbiBoYXZlIGFjY2VzcyB0byBpdC5cbiAqIFRoaXMgZnVuY3Rpb24gcmVnaXN0ZXJzIHRoZSBjaGlsZCB3aXRoIHRoZSBwYXJlbnQgYW5kIHByb3ZpZGVzXG4gKiBpdCB3aXRoIGFueSByZXF1ZXN0ZWQgaW5mb3JtYXRpb24sIGJ1dCBkb2Vzbid0IGRvIGFueXRoaW5nIGVsc2VcbiAqIHVudGlsIGl0IHVubW91bnRzIGFuZCByZXRyYWN0cyB0aGF0IGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRNYW5hZ2VyKCkge1xuICAgIC8vIFRoaXMgaXMgYmxpbmRseSB1cGRhdGVkIGFueSB0aW1lIGEgY2hpbGQgbW91bnRzIG9yIHVubW91bnRzIGl0c2VsZi5cbiAgICAvLyBVc2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGFueSB0aW1lIHRoZSBhcnJheSBvZiBtYW5hZ2VkIGNoaWxkcmVuIHVwZGF0ZXMsXG4gICAgLy8gd2UgYWxzbyByZS1yZW5kZXIuXG4gICAgY29uc3QgW2NoaWxkVXBkYXRlSW5kZXgsIHNldENoaWxkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Nb3VudGVkLCBzZXRUb3RhbENoaWxkcmVuTW91bnRlZCwgZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsQ2hpbGRyZW5Vbm91bnRlZCwgc2V0VG90YWxDaGlsZHJlblVub3VudGVkLCBnZXRUb3RhbENoaWxkcmVuVW5vdW50ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkID0gdG90YWxDaGlsZHJlbk1vdW50ZWQgLSB0b3RhbENoaWxkcmVuVW5vdW50ZWQ7XG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlUmVmKFtdIC8qKiBUT0RPOiBBbnkgcHJvYmxlbXMgY2F1c2VkIGJ5IHVzaW5nIGFuIGFycmF5IHdoZW4gaXQgc2hvdWxkIGJlIGFuIG9iamVjdD8gKi8pO1xuICAgIGNvbnN0IG1vdW50ZWRDaGlsZHJlbiA9IHVzZVJlZihbXSk7XG4gICAgY29uc3QgbW91bnRPcmRlciA9IHVzZVJlZihuZXcgTWFwKCkpO1xuICAgIGNvbnN0IGluZGljZXNCeUVsZW1lbnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBkZWxldGVkSW5kaWNlcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xuICAgIC8vIFVzZWQgdG8ga2VlcCB0cmFjayBvZiBpbmRpY2VzIHRoYXQgaGF2ZSBcIm92ZXItbW91bnRlZFwiIGFuZCBieSBob3cgbXVjaC5cbiAgICAvLyBXZSBuZWVkIHRoaXMgc28gdGhhdCB3ZSBkb24ndCBlcmFzZSBzYXZlZCBpbmZvcm1hdGlvbiB3aGVuIGEgY29tcG9uZW50XG4gICAgLy8gXCJvdmVybW91bnRzXCIgb3ZlciBhbm90aGVyIHdoaWNoIHRoZW4sIGNvcnJlY3RseSwgc3dpdGNoZXMgKml0c2VsZiogdG8gc29tZXRoaW5nIGVsc2UuXG4gICAgLy8gSW4gZ2VuZXJhbCwgdGhpcyBzaG91bGQgb25seSBoYXBwZW4gd2hlbiBjb21wb25lbnRzIGFyZSBzd2FwcGluZyBiZXR3ZWVuIGluZGljZXMuXG4gICAgLy8gQnkgdGhlIHRpbWUgdGhleSdyZSBkb25lLCB0aGlzIG1hcCBzaG91bGQgYmUgYWxsIDBzIGFnYWluLCBhdCB3aGljaCBwb2ludFxuICAgIC8vIGl0J3Mgb2theSB0byBhY3R1YWxseSBydW4gdGhlIHVubW91bnQgY29kZS5cbiAgICAvLyBcbiAgICAvLyBUT0RPOiB0aHJvdyBhIGNvbnNvbGUuYXNzZXJ0IHNvbWV3aGVyZSB0byBtYWtlIHVwIGZvciB0aGUgbG9zdCBcbiAgICAvLyBcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVyd3JpdGUgdGhpcyBjaGlsZCdzIGluZGV4IVwiIGFzc2VydGlvbi5cbiAgICAvLyBOYW1lbHksIGlzIHRoaXMgbWFwIGFsbCAwcyB3aGVuIHRoZSBwYXJlbnQgZWxlbWVudCByZS1yZW5kZXJzPyBcbiAgICAvLyBQcm9iYWJseSBub3QgYmVjYXVzZSBvZiBzZXRDaGlsZFVwZGF0ZUluZGV4XG4gICAgY29uc3Qgb3Zlcm1vdW50Q291bnQgPSB1c2VSZWYobmV3IE1hcCgpKTtcbiAgICBjb25zdCBnZXRNb3VudEluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7IHJldHVybiBtb3VudE9yZGVyLmN1cnJlbnQuZ2V0KGluZGV4KTsgfSwgW10pO1xuICAgIGNvbnN0IHVzZU1hbmFnZWRDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBvbkVsZW1lbnRDaGFuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlIH0pO1xuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2V0VG90YWxDaGlsZHJlbk1vdW50ZWQoKTtcbiAgICAgICAgICAgIG1vdW50T3JkZXIuY3VycmVudC5zZXQoaW5mby5pbmRleCwgaW5kZXgpO1xuICAgICAgICAgICAgbW91bnRlZENoaWxkcmVuLmN1cnJlbnRbaW5kZXhdID0gaW5mbztcbiAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Nb3VudGVkKHQgPT4gKyt0KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW91bnRPcmRlci5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBtb3VudGVkQ2hpbGRyZW4uY3VycmVudFtpbmRleF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNldFRvdGFsQ2hpbGRyZW5Vbm91bnRlZCh0ID0+ICsrdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbaW5mby5pbmRleF0pO1xuICAgICAgICAvLyBBcyBzb29uIGFzIHRoZSBjb21wb25lbnQgbW91bnRzLCBub3RpZnkgdGhlIHBhcmVudCBhbmQgcmVxdWVzdCBhIHJlcmVuZGVyLlxuICAgICAgICB1c2VMYXlvdXRFZmZlY3QoKHByZXYsIGNoYW5nZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaW5kaWNlc0J5RWxlbWVudC5jdXJyZW50LnNldChlbGVtZW50LCBpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmRlbGV0ZShpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJtb3VudENvdW50LmN1cnJlbnQuc2V0KGluZm8uaW5kZXgsIChvdmVybW91bnRDb3VudC5jdXJyZW50LmdldChpbmZvLmluZGV4KSA/PyAwKSArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDaGlsZFVwZGF0ZUluZGV4KGMgPT4gKytjKTtcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSA9IHsgLi4uaW5mbyB9O1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkVXBkYXRlSW5kZXgoYyA9PiArK2MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlcm1vdW50Q291bnQuY3VycmVudC5zZXQoaW5mby5pbmRleCwgKG92ZXJtb3VudENvdW50LmN1cnJlbnQuZ2V0KGluZm8uaW5kZXgpID8/IDApIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVkSW5kaWNlcy5jdXJyZW50LmFkZChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5mby5pbmRleCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudC5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnQubGVuZ3RoIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2VsZW1lbnQsIGluZm8uaW5kZXhdKTtcbiAgICAgICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZSBnZW5lcmFsbHkuXG4gICAgICAgIC8vICpEb24ndCByZS1yZW5kZXIqLCBvdGhlcndpc2Ugd2UnZCBiZSBzdHVjayBpbiBhblxuICAgICAgICAvLyBpbmZpbml0ZSBsb29wIGV2ZXJ5IHRpbWUgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIGlzIHBhc3NlZC5cbiAgICAgICAgLy8gSXQgY29tZXMgaW4gZnJvbSB0aGUgcHJvcHMgc28gdGhlIGNoaWxkIHdhcyBhbHJlYWR5IHVwZGF0ZWQgYnkgaXQgLS1cbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IHRvIHJlLXJlbmRlciBldmVyeSBzaW5nbGUgY2hpbGQgYW55IHRpbWVcbiAgICAgICAgLy8gXCJvbkNsaWNrXCIgdXBkYXRlcyBvciB3aGF0ZXZlci4gIFRoZSByZWxldmFudCBjaGlsZCBhbHJlYWR5IGtub3dzLFxuICAgICAgICAvLyBhbmQgdGhhdCdzIHdoYXQgbWF0dGVycy5cbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW4uY3VycmVudFtpbmZvLmluZGV4XSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuLmN1cnJlbnRbaW5mby5pbmRleF0gPSB7IC4uLmluZm8gfTtcbiAgICAgICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoKV0pO1xuICAgICAgICByZXR1cm4geyBlbGVtZW50LCBnZXRFbGVtZW50LCB1c2VNYW5hZ2VkQ2hpbGRQcm9wczogdXNlUmVmRWxlbWVudFByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1hbmFnZWRDaGlsZCxcbiAgICAgICAgY2hpbGRDb3VudDogY2hpbGRyZW5DdXJyZW50bHlNb3VudGVkLFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRDaGlsZHJlbi5jdXJyZW50LFxuICAgICAgICBtb3VudGVkQ2hpbGRyZW46IG1vdW50ZWRDaGlsZHJlbi5jdXJyZW50LFxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50OiBpbmRpY2VzQnlFbGVtZW50LmN1cnJlbnQsXG4gICAgICAgIHRvdGFsQ2hpbGRyZW5Nb3VudGVkLFxuICAgICAgICB0b3RhbENoaWxkcmVuVW5vdW50ZWQsXG4gICAgICAgIGdldE1vdW50SW5kZXgsXG4gICAgICAgIGRlbGV0ZWRJbmRpY2VzOiBkZWxldGVkSW5kaWNlcy5jdXJyZW50XG4gICAgfTtcbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZXR0aW5nIGNoaWxkcmVuIGtub3cgd2hlbiB0aGV5IGFyZSBvciBhcmUgbm90IHRoZVxuICogY3VycmVudCBzZWxlY3RlZC9leHBhbmRlZC9mb2N1c2VkL3doYXRldmVyIGNoaWxkLlxuICpcbiAqIEF1dG9tYXRpY2FsbHkgaGFuZGxlcyB3aGVuIGNoaWxkcmVuIGFyZSBtb3VudGVkICYgdW5tb3VudGVkIGFuZCBzdWNoLlxuICpcbiAqIFdoaWxlIGl0IHdpbGwgYmUgY2FsbGVkIG9uY2UgZm9yIGV2ZXJ5IGNoaWxkIG9uIG1vdW50LCBhZnRlciB0aGF0IHNldEZsYWdcbiAqIGlzIGd1YXJhbnRlZWQgdG8gb25seSBiZSBjYWxsZWQgb25jZSBvbiBhY3RpdmF0aW9uIGFuZCBvbmNlIG9uIGRlYWN0aXZhdGlvbixcbiAqIHNvIGl0J3MgZ2VuZXJhbGx5IHNhZmUgdG8gcHV0IHNpZGUgZWZmZWN0cyBpbnNpZGUgaWYgbmVjZXNzYXJ5LlxuICogSXQncyBhbHNvIHNhZmUgdG8gbWFrZSBpdCBub24tc3RhYmxlLlxuICpcbiAqIEBwYXJhbSBhY3RpdmF0ZWRJbmRleCBXaGF0IGluZGV4IHRoZSBjdXJyZW50IHNlbGVjdGVkIChldGMuKSBjaGlsZCBpc1xuICogQHBhcmFtIGxlbmd0aCBIb3cgbWFueSBjaGlsZHJlbiBleGlzdCAoYXMgbWFuYWdlZENoaWxkcmVuLmxlbmd0aClcbiAqIEBwYXJhbSBzZXRGbGFnIEEgZnVuY3Rpb24gdGhhdCBwcm9iYWJseSBsb29rcyBsaWtlIChpLCBmbGFnKSA9PiBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0QWN0aXZlKGZsYWcpXG4gKiBAcGFyYW0gdXNlRWZmZWN0IFdoaWNoIHZlcnNpb24gb2YgdXNlRWZmZWN0IHRvIHVzZS4gRGVmYXVsdCBpcyBgdXNlTGF5b3V0RWZmZWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4LCBjbG9zZXN0Rml0LCBtYW5hZ2VkQ2hpbGRyZW4sIHNldENoaWxkRmxhZywgZ2V0Q2hpbGRGbGFnLCB1c2VFZmZlY3QgfSkge1xuICAgIHVzZUVmZmVjdCA/Pz0gdXNlTGF5b3V0RWZmZWN0O1xuICAgIGlmIChjbG9zZXN0Rml0KVxuICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgYWN0aXZhdGVkSW5kZXggPT0gXCJudW1iZXJcIiB8fCBhY3RpdmF0ZWRJbmRleCA9PSBudWxsKTtcbiAgICAvLyBXaGVuZXZlciB3ZSByZS1yZW5kZXIsIG1ha2Ugc3VyZSB0aGF0IGFueSBjaGlsZHJlbiB0aGF0IGhhdmUgbW91bnRlZFxuICAgIC8vIGhhdmUgdGhlaXIgZmxhZ3MgcHJvcGVybHkgc2V0LiAgV2Uga25vdyBpdCdzIHVuc2V0IGlmIGl0IHdhcyBudWxsLFxuICAgIC8vIGluIHdoaWNoIGNhc2Ugd2UganVzdCBzZXQgaXQgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICAvL1xuICAgIC8vIEFuZCwgSSBtZWFuLCBhcyBsb25nIGFzIHdlJ3JlIGFscmVhZHkgaXRlcmF0aW5nIHRocm91Z2ggZXZlcnkgY2hpbGRcbiAgICAvLyBvbiBldmVyeSByZW5kZXIgdG8gY2hlY2sgZm9yIG5ld2x5IG1vdW50ZWQgY2hpbGRyZW4sIG1pZ2h0IGFzIHdlbGxcbiAgICAvLyBqdXN0IGhhbmRsZSBjaGFuZ2VkIGluIHRoZSBhY3RpdmF0ZWRJbmRleCBoZXJlIHRvby5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBXZSBoYXZlIGxpbWl0ZWQgaW5mb3JtYXRpb24gYWJvdXQgd2hlbiBhIGNoaWxkIG1vdW50cyBvciB1bm1vdW50c1xuICAgICAgICAvLyBhbmQgc28gd2UgZG9uJ3Qga25vdyB3aGVyZSB0byBsb29rIGZvciBhbnkgbnVsbCBlbnRyaWVzIHRoYXQgbmVlZCBjaGFuZ2luZy5cbiAgICAgICAgLy8gV2Uga25vdyB3aGVuIGFjdGl2YXRlZEluZGV4IGNoYW5nZXMgYW5kIHdoYXQgaXQgd2FzLCBidXQgbm90IG11Y2ggZWxzZS5cbiAgICAgICAgLy8gTG9vcGluZyBvdmVyIGV2ZXJ5IGNoaWxkICp3b3JrcyosIGFuZCBpdCdzIG5vdCBhbiBleHBlbnNpdmUgbG9vcCBieSBhbnkgbWVhbnMsXG4gICAgICAgIC8vIGJ1dCwgbGlrZSwgZXVnaC5cbiAgICAgICAgLy8gQWxzbywgYmVmb3JlIHdlIGRvIGFueXRoaW5nLCBzZWUgaWYgd2UgbmVlZCB0byBcImNvcnJlY3RcIiBhY3RpdmF0ZWRJbmRleC5cbiAgICAgICAgLy8gSXQgY291bGQgYmUgcG9pbnRpbmcgdG8gYSBjaGlsZCB0aGF0IGRvZXNuJ3QgZXhpc3QsIGFuZCBpZiBjbG9zZXN0Rml0IGlzIGdpdmVuLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGFkanVzdCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBhIHZhbGlkIGNoaWxkLlxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2YXRlZEluZGV4ID09IFwibnVtYmVyXCIgJiYgQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pICYmIG1hbmFnZWRDaGlsZHJlblthY3RpdmF0ZWRJbmRleF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gT2ggZGVhci4gQXJlIHdlIGFjdGl2ZWx5IGNvcnJlY3RpbmcgdGhpcz9cbiAgICAgICAgICAgIGlmIChjbG9zZXN0Rml0KSB7XG4gICAgICAgICAgICAgICAgLy8gT2ggZGVhci5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggdXAgYW5kIGRvd24gdGhlIGxpc3Qgb2YgY2hpbGRyZW4gZm9yIGFueSB0aGF0IGFjdHVhbGx5IGV4aXN0LlxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hIaWdoID0gYWN0aXZhdGVkSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hMb3cgPSBhY3RpdmF0ZWRJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSA9PSBudWxsKSB8fCAoc2VhcmNoSGlnaCA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuW3NlYXJjaEhpZ2hdID09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICsrc2VhcmNoSGlnaDtcbiAgICAgICAgICAgICAgICAgICAgLS1zZWFyY2hMb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hMb3cgPj0gMCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoTG93XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID0gc2VhcmNoTG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hIaWdoIDwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5bc2VhcmNoSGlnaF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWRJbmRleCA9IHNlYXJjaEhpZ2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vdyB0aGF0IHdlJ3ZlIGRvbmUgdGhhdCwgaWYgYW55IHZhbGlkIGNoaWxkcmVuIGV4aXN0LCB3ZSd2ZSByZXNldCBhY3RpdmF0ZWRJbmRleCB0byBwb2ludCB0byBpdCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIC8vIE5vdyB3ZSdsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGZvciBsb29wIHNldCBhbmQgdW5zZXQgb3VyIGZsYWdzIGJhc2VkIG9uIHRoaXMgXCJjb3JyZWN0ZWRcIiB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGNvcnJlY3QgaXQgb3Igc2F2ZSBpdCBhbnl3aGVyZSBiZWNhdXNlIHdlJ2QgdmVyeSBtdWNoIGxpa2UgdG8gcmV0dXJuIHRvIGl0XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNoaWxkIHJlbW91bnRzIGl0c2VsZi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYW5hZ2VkQ2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBzaG91bGRCZVNldCA9IChpID09IGFjdGl2YXRlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2hpbGRGbGFnKGkpICE9IHNob3VsZEJlU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkRmxhZyhpLCBzaG91bGRCZVNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobWFuYWdlZENoaWxkcmVuKS5mb3JFYWNoKChbaSwgaW5mb10pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkQmVTZXQgPSAoaSA9PSBhY3RpdmF0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKGdldENoaWxkRmxhZyhpKSAhPSBzaG91bGRCZVNldCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZEZsYWcoaSwgc2hvdWxkQmVTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hpbGQtbWFuYWdlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciB9IGZyb20gXCIuL3VzZS1jaGlsZC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKiBJbXBsZW1lbnRzIGEgcm92aW5nIHRhYmluZGV4IHN5c3RlbSB3aGVyZSBvbmx5IG9uZSBcImZvY3VzYWJsZVwiXG4gKiBjb21wb25lbnQgaW4gYSBzZXQgaXMgYWJsZSB0byByZWNlaXZlIGEgdGFiIGZvY3VzLiAqV2hpY2gqXG4gKiBvZiB0aG9zZSBlbGVtZW50cyByZWNlaXZlcyBmb2N1cyBpcyBkZXRlcm1pbmVkIGJ5IHlvdSwgYnV0IGl0J3NcbiAqIHJlY29tbWVuZGVkIHRvIG9mZmxvYWQgdGhhdCBsb2dpYyB0aGVuIHRvIGFub3RoZXIgaG9vaywgbGlrZVxuICogYHVzZUxpbmVhck5hdmlnYXRpb25gLCB3aGljaCBsZXRzIHlvdSBjaGFuZ2UgdGhlIHRhYmJhYmxlXG4gKiBlbGVtZW50IHdpdGggdGhlIGFycm93IGtleXMsIGB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uYCwgd2hpY2hcbiAqIGxldHMgeW91IGNoYW5nZSB0aGUgdGFiYmFibGUgaW5kZXggd2l0aCB0eXBlYWhlYWQsIG9yXG4gKiBgdXNlTGlzdE5hdmlnYXRpb25gIGlmIHlvdSBqdXN0IHdhbnQgZXZlcnl0aGluZyBidW5kbGVkIHRvZ2V0aGVyLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgY2hpbGQgaG9vayByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgdXNlZFxuICogYnkgZXZlcnkgY2hpbGQgdGhhdCB1c2VzIHRoaXMgcm92aW5nIHRhYmluZGV4IGxvZ2ljLiAgVGhlXG4gKiBwcm9wLW1vZGlmeWluZyBob29rICp0aGF0KiBob29rIHJldHVybnMgc2hvdWxkIHRoZW4gYmUgdXNlZFxuICogb24gdGhlIGNoaWxkJ3MgZWxlbWVudCwgYXMgd2VsbCBhcyBhbnkgb3RoZXIgZWxlbWVudHMgeW91J2QgbGlrZVxuICogdG8gYmUgZXhwbGljaXRseSBtYWRlIHVudGFiYmFibGUgdG9vLlxuICpcbiAqIGBzaG91bGRGb2N1c09uQ2hhbmdlYCBzaG91bGQgcmV0dXJuIHRydWUgaWYgZm9jdXMgaXNcbiAqIGNvbnRhaW5lZCB3aXRoaW4gd2hhdGV2ZXIgZWxlbWVudCBjb250YWlucyB0aGUgcm92aW5nIHRhYiBpbmRleC5cbiAqIEdlbmVyYWxseSBhcyBzaW1wbGUgYXMgdGhlIGZvbGxvd2luZzpcbiAqIGBgYFxuICogY29uc3QgW2ZvY3VzZWRJbm5lciwgc2V0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXM8UGFyZW50RWxlbWVudD4oeyBzZXRGb2N1c2VkSW5uZXIgfSk7XG4gKiBjb25zdCBmb2N1c09uQ2hhbmdlID0gKGZvY3VzZWRJbm5lciAhPSBmYWxzZSk7XG4gKiBgYGBcbiAqIEl0J3Mgbm90IGluY2x1ZGVkIGhlcmUgYmVjYXVzZSBgdXNlUm92aW5nVGFiSW5kZXhgIGRvZXNuJ3Qga25vd1xuICogYW55dGhpbmcgYWJvdXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LCBvbmx5IGNoaWxkcmVuIGVsZW1lbnRzLlxuICogQW5kIGp1c3QgYXMgd2VsbCEgQ2hpbGRyZW4gc2hvdWxkIGJlIGFsbG93ZWQgYXQgdGhlIHJvb3QsXG4gKiByZWdhcmRsZXNzIG9mIGlmIGl0J3MgdGhlIHdob2xlIGFwcCBvciBqdXN0IGEgZ2l2ZW4gY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUm92aW5nVGFiSW5kZXgoeyBzaG91bGRGb2N1c09uQ2hhbmdlOiBmb2MsIHRhYmJhYmxlSW5kZXggfSkge1xuICAgIGNvbnN0IFtyZXJlbmRlckFuZEZvY3VzLCBzZXRSZXJlbmRlckFuZEZvY3VzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IGdldFNob3VsZEZvY3VzT25DaGFuZ2UgPSB1c2VTdGFibGVHZXR0ZXIoZm9jKTtcbiAgICBjb25zdCBnZXRUYWJiYWJsZUluZGV4ID0gdXNlU3RhYmxlR2V0dGVyKHRhYmJhYmxlSW5kZXgpO1xuICAgIGNvbnN0IHByZXZUYWJiYWJsZSA9IHVzZVJlZigtSW5maW5pdHkpO1xuICAgIC8vIENhbGwgdGhlIGhvb2sgdGhhdCBhbGxvd3MgdXMgdG8gY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHdobyBwcm92aWRlIGl0XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW4sIGNoaWxkQ291bnQsIHVzZU1hbmFnZWRDaGlsZCwgaW5kaWNlc0J5RWxlbWVudCwgLi4ucmVzdCB9ID0gdXNlQ2hpbGRNYW5hZ2VyKCk7XG4gICAgLy8gQW55IHRpbWUgdGhlIHRhYmJhYmxlIGluZGV4IGNoYW5nZXMsXG4gICAgLy8gbm90aWZ5IHRoZSBwcmV2aW91cyBjaGlsZCB0aGF0IGl0J3Mgbm8gbG9uZ2VyIHRhYmJhYmxlLFxuICAgIC8vIGFuZCBub3RpZnkgdGhlIG5leHQgY2hpbGQgdGhhdCBpcyBhbGxvd2VkIHRvIGJlIHRhYmJlZCB0by5cbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogdGFiYmFibGVJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBjbG9zZXN0Rml0OiB0cnVlLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpbmRleCwgdGFiYmFibGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbltpbmRleF0/LnNldFRhYmJhYmxlKHRhYmJhYmxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hpbGRGbGFnOiAoaW5kZXgpID0+IChtYW5hZ2VkQ2hpbGRyZW5baW5kZXhdPy5nZXRUYWJiYWJsZSgpID8/IG51bGwpXG4gICAgfSk7XG4gICAgY29uc3QgZm9jdXNTZWxmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodGFiYmFibGVJbmRleCAhPSBudWxsKVxuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuW3RhYmJhYmxlSW5kZXhdLnNldFRhYmJhYmxlKHRydWUpO1xuICAgIH0sIFt0YWJiYWJsZUluZGV4XSk7XG4gICAgY29uc3QgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtycmFmSW5kZXgsIHNldFJyYWZJbmRleF0gPSB1c2VTdGF0ZSgxKTtcbiAgICAgICAgY29uc3QgcmVyZW5kZXJBbmRGb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0UnJhZkluZGV4KGkgPT4gKytpKTsgfSwgW10pO1xuICAgICAgICBjb25zdCBbdGFiYmFibGUsIHNldFRhYmJhYmxlLCBnZXRUYWJiYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgbGV0IG5ld0luZm8gPSB7XG4gICAgICAgICAgICAuLi5pbmZvLFxuICAgICAgICAgICAgcmVyZW5kZXJBbmRGb2N1cyxcbiAgICAgICAgICAgIHNldFRhYmJhYmxlOiB1c2VDYWxsYmFjaygodGFiYmFibGUpID0+IHsgc2V0VGFiYmFibGUodGFiYmFibGUpOyB9LCBbXSksXG4gICAgICAgICAgICBnZXRUYWJiYWJsZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIGdldEVsZW1lbnQsIHVzZU1hbmFnZWRDaGlsZFByb3BzIH0gPSB1c2VNYW5hZ2VkQ2hpbGQobmV3SW5mbyk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSkge1xuICAgICAgICAgICAgICAgIHNldFJlcmVuZGVyQW5kRm9jdXMoXyA9PiByZXJlbmRlckFuZEZvY3VzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRGb2N1c09uQ2hhbmdlID0gZ2V0U2hvdWxkRm9jdXNPbkNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRGb2N1c09uQ2hhbmdlKCkgJiYgXCJmb2N1c1wiIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbZWxlbWVudCwgdGFiYmFibGUsIHJyYWZJbmRleF0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXggfSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcyh7IHRhYkluZGV4LCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBpZiAodGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJiYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHVzZU1hbmFnZWRDaGlsZFByb3BzKHsgdGFiSW5kZXggfSksIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VSb3ZpbmdUYWJJbmRleFNpYmxpbmdQcm9wcyxcbiAgICAgICAgICAgIHRhYmJhYmxlXG4gICAgICAgIH07XG4gICAgfSwgW3VzZU1hbmFnZWRDaGlsZF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJvdmluZ1RhYkluZGV4Q2hpbGQsXG4gICAgICAgIGNoaWxkQ291bnQsXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlbixcbiAgICAgICAgaW5kaWNlc0J5RWxlbWVudCxcbiAgICAgICAgZm9jdXNDdXJyZW50OiByZXJlbmRlckFuZEZvY3VzLFxuICAgICAgICAuLi5yZXN0XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yb3ZpbmctdGFiaW5kZXguanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcmFnZ2FibGUoeyBlZmZlY3RBbGxvd2VkLCBkYXRhLCBkcmFnSW1hZ2UsIGRyYWdJbWFnZVhPZmZzZXQsIGRyYWdJbWFnZVlPZmZzZXQgfSkge1xuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmcsIGdldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbGFzdERyb3BFZmZlY3QsIHNldExhc3REcm9wRWZmZWN0LCBnZXRMYXN0RHJvcEVmZmVjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB1c2VEcmFnZ2FibGVQcm9wcyA9IHVzZUNhbGxiYWNrKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAgICAgY29uc3Qgb25EcmFnU3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAoZWZmZWN0QWxsb3dlZCA/PyBcImFsbFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0ltYWdlKVxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLCBkcmFnSW1hZ2VYT2Zmc2V0ID8/IDAsIGRyYWdJbWFnZVlPZmZzZXQgPz8gMCk7XG4gICAgICAgICAgICAgICAgbGV0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFttaW1lVHlwZSwgZGF0YV0gb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKG1pbWVUeXBlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uRHJhZ0VuZCA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0RHJvcEVmZmVjdChlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExhc3REcm9wRWZmZWN0KG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgb25EcmFnU3RhcnQsXG4gICAgICAgICAgICBvbkRyYWdFbmQsXG4gICAgICAgICAgICByZWZcbiAgICAgICAgfSwgcCk7XG4gICAgfSwgW2VmZmVjdEFsbG93ZWQsIGRyYWdJbWFnZSwgZHJhZ0ltYWdlWE9mZnNldCwgZHJhZ0ltYWdlWU9mZnNldCwgLi4uT2JqZWN0LmVudHJpZXMoZGF0YSkuZmxhdCgpXSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIGxldCByZXQgPSB7XG4gICAgICAgIHVzZURyYWdnYWJsZVByb3BzLFxuICAgICAgICBkcmFnZ2luZyxcbiAgICAgICAgZ2V0RHJhZ2dpbmcsXG4gICAgICAgIC8vIFNldCBvbmNlIGEgZHJhZyBoYXMgY29tcGxldGVkIHdpdGggdGhlIHJlc3VsdGluZyBhY3Rpb25cbiAgICAgICAgLy8gVXNlZnVsIGZvciByZW1vdmluZyB0aGUgZWxlbWVudCBhZnRlcndhcmRzIGlmIGl0IHdhcyBcIm1vdmVcIlxuICAgICAgICBsYXN0RHJvcEVmZmVjdCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRlc3RcbiAgICAgICAgICovXG4gICAgICAgIGdldExhc3REcm9wRWZmZWN0XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRyYWdnYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcbjtcbjtcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVGaWxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgZmlsZU5hbWU7XG4gICAgZXJyb3JUeXBlO1xuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lLCBiYXNlKSB7XG4gICAgICAgIHN1cGVyKGJhc2U/Lm1lc3NhZ2UgPz8gXCJBbiB1bnNwZWNpZmllZCBlcnJvciBvY2N1cnJlZCByZWFkaW5nIHRoZSBmaWxlLlwiKTtcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xuICAgICAgICB0aGlzLmVycm9yVHlwZSA9IGJhc2U/Lm5hbWU7XG4gICAgfVxufVxuLy9NZXJnZWRQcm9wczxVc2VSZWZFbGVtZW50UHJvcHNSZXR1cm5UeXBlPEUsIFBpY2s8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIFwib25EcmFnRW50ZXJcIiB8IFwib25EcmFnTGVhdmVcIiB8IFwib25EcmFnT3ZlclwiIHwgXCJvbkRyb3BcIj4+LCBQPjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wcGFibGUoeyBlZmZlY3QgfSkge1xuICAgIGNvbnN0IFtmaWxlc0ZvckNvbnNpZGVyYXRpb24sIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wcGVkRmlsZXMsIHNldERyb3BwZWRGaWxlc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZHJvcHBlZFN0cmluZ3MsIHNldERyb3BwZWRTdHJpbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkcm9wRXJyb3IsIHNldERyb3BFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIC8vIEFsbCB0aGUgcHJvbWlzZXMgZ2VuZXJhdGVkIGZyb20gdGhlIGRyb3AgZXZlbnRzLlxuICAgIC8vIFVzZWQgdG8gcHJvY2VzcyBtdWx0aXBsZSBkcm9wIGV2ZW50cyBpbiBzdWNjZXNzaW9uXG4gICAgY29uc3QgZHJvcFByb21pc2VzUmVmID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBbY3VycmVudFByb21pc2VJbmRleCwgc2V0Q3VycmVudFByb21pc2VJbmRleCwgZ2V0Q3VycmVudFByb21pc2VJbmRleF0gPSB1c2VTdGF0ZSgtMSk7XG4gICAgY29uc3QgW3Byb21pc2VDb3VudCwgc2V0UHJvbWlzZUNvdW50LCBnZXRQcm9taXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgLy8gQW55IHRpbWUgd2UgYWRkIGEgbmV3IHByb21pc2UsIGlmIHRoZXJlJ3Mgbm8gY3VycmVudCBwcm9taXNlIHJ1bm5pbmcsIHdlIG5lZWQgdG8gc3RhcnQgb25lLlxuICAgIC8vIElmIHRoZXJlIGlzIG9uZSwgdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLCBzaW5jZSBpdCBydW5zIHRoZSBzYW1lIGNoZWNrLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VDb3VudCA9IGdldFByb21pc2VDb3VudCgpO1xuICAgICAgICBpZiAocHJvbWlzZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtwcm9taXNlQ291bnRdKTtcbiAgICAvLyBBbnl0aW1lIG91ciBjdXJyZW50IHByb21pc2UgY2hhbmdlcyxcbiAgICAvLyB3YWl0IGZvciBpdCB0byBmaW5pc2gsIHRoZW4gc2V0IG91ciBzdGF0ZSB0byBpdHMgcmVzdWx0LlxuICAgIC8vIEZpbmFsbHksIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55bW9yZSBwcm9taXNlcy5cbiAgICAvLyBJZiB0aGVyZSBhcmUsIHRoZW4gaW5jcmVhc2UgY3VycmVudFByb21pc2VDb3VudCxcbiAgICAvLyB3aGljaCB3aWxsIHRyaWdnZXIgdGhpcyBhZ2Fpbi5cbiAgICAvL1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiAqb2Z0ZW4qLCBidXQgbWF5YmUgaW4gdGhlIGNhc2Ugb2ZcbiAgICAvLyBpbmRpdmlkdWFsbHkgZHJvcHBpbmcgYSBidW5jaCBvZiBsYXJnZSBmaWxlcyBvciBzb21ldGhpbmcuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9taXNlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBkcm9wUHJvbWlzZXNSZWYuY3VycmVudFtjdXJyZW50UHJvbWlzZUluZGV4XTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9taXNlLnRoZW4oKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGZpbGVzLCBzdHJpbmdzIH0gPSBpbmZvO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkRmlsZXMoZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wcGVkU3RyaW5ncyhzdHJpbmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm93IHRoYXQgd2UncmUgZG9uZSwgYXJlIHRoZXJlIG1vcmUgcHJvbWlzZXMgaW4gdGhlIHF1ZXVlP1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9taXNlSW5kZXggPSBnZXRDdXJyZW50UHJvbWlzZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZUNvdW50ID0gZ2V0UHJvbWlzZUNvdW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKChjdXJyZW50UHJvbWlzZUluZGV4ICsgMSkgPCBwcm9taXNlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBwcm9taXNlIGhhcyBzdGFydGVkLCBtb3JlIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoaXMgZWZmZWN0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJvbWlzZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50UHJvbWlzZUluZGV4XSk7XG4gICAgY29uc3QgdXNlRHJvcHBhYmxlUHJvcHMgPSAocCkgPT4ge1xuICAgICAgICAvL2NvbnN0IHJlZiA9IHVzZVJlZjxFPihudWxsKTtcbiAgICAgICAgLy8gSGFuZGxlIGNvbGxlY3RpbmcgdGhlIGN1cnJlbnQgZmlsZSBtZXRhZGF0YSBvciBNSU1FIHR5cGVzLlxuICAgICAgICBjb25zdCBvbkRyYWdFbnRlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGRlZmF1bHQ/IEkgY2FuJ3QgZmluZCBvbmUgYW55d2hlcmUuXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IChlZmZlY3QgPz8gXCJtb3ZlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01pbWVUeXBlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdHlwZSB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01pbWVUeXBlcy5hZGQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goeyB0eXBlOiBpdGVtLnR5cGUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RmlsZXNGb3JDb25zaWRlcmF0aW9uKG5ld0ZpbGVzKTtcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihuZXdNaW1lVHlwZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGUgcmVzZXR0aW5nIHRoZSBjdXJyZW50IGZpbGUgbWV0YWRhdGEgb3IgTUlNRSB0eXBlc1xuICAgICAgICBjb25zdCBvbkRyYWdMZWF2ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRGaWxlc0ZvckNvbnNpZGVyYXRpb24obnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmdzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQm9pbGVycGxhdGUsIEkgZ3Vlc3NcbiAgICAgICAgY29uc3Qgb25EcmFnT3ZlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEhhbmRsZSBnZXR0aW5nIHRoZSBkcm9wIGRhdGEgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgY29uc3Qgb25Ecm9wID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEZpbGVzRm9yQ29uc2lkZXJhdGlvbihudWxsKTtcbiAgICAgICAgICAgIHNldFN0cmluZ3NGb3JDb25zaWRlcmF0aW9uKG51bGwpO1xuICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBjb25zdCBkcm9wRGF0YSA9IHt9O1xuICAgICAgICAgICAgY29uc3QgZHJvcEZpbGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZS5kYXRhVHJhbnNmZXI/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBraW5kLCB0eXBlIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGl0ZW0uZ2V0QXNTdHJpbmcocmVzb2x2ZSkpKS50aGVuKHN0ciA9PiBkcm9wRGF0YVt0eXBlXSA9IHN0cikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChraW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRmlsZS5wdXNoKHsgZGF0YSwgbmFtZTogZmlsZS5uYW1lLCB0eXBlOiBmaWxlLnR5cGUsIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCwgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKGUpID0+IHsgcmVqZWN0KG5ldyBEcm9wcGFibGVGaWxlRXJyb3IoZmlsZS5uYW1lLCByZWFkZXIuZXJyb3IpKTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IChlKSA9PiB7IHJlamVjdChuZXcgRHJvcHBhYmxlRmlsZUVycm9yKGZpbGUubmFtZSwgcmVhZGVyLmVycm9yKSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcEZpbGUucHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcFByb21pc2VzUmVmLmN1cnJlbnQucHVzaChQcm9taXNlLmFsbChhbGxQcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogZHJvcERhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzOiBkcm9wRmlsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KS5jYXRjaChleCA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgc2V0UHJvbWlzZUNvdW50KGkgPT4gKytpKTtcbiAgICAgICAgICAgICAgICBzZXREcm9wRXJyb3IoZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRHJhZ0VudGVyLCBvbkRyYWdMZWF2ZSwgb25EcmFnT3Zlciwgb25Ecm9wIH0sIHApO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlRHJvcHBhYmxlUHJvcHMsXG4gICAgICAgIGZpbGVzRm9yQ29uc2lkZXJhdGlvbixcbiAgICAgICAgc3RyaW5nc0ZvckNvbnNpZGVyYXRpb24sXG4gICAgICAgIGRyb3BwZWRGaWxlcyxcbiAgICAgICAgZHJvcHBlZFN0cmluZ3MsXG4gICAgICAgIGRyb3BFcnJvclxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZHJvcHBhYmxlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuLyoqXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW55ICpub24tUHJlYWN0KiBlbGVtZW50LCBhbmQgcmVtb3ZpbmcgaXQgd2hlbiB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBob29rIHVubW91bnRzLiBUaGUgY2FsbGJhY2sgZG9lcyBub3QgbmVlZCB0byBiZSBzdGFibGUgYWNyb3NzIHJlbmRlcnMuXG4gKlxuICogRHVlIHRvIHR5cGluZyBsaW1pdGF0aW9ucywgdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBsaWtlIHRoaXM6XG4gKlxuICogYHVzZUV2ZW50SGFuZGxlcihlbGVtZW50LCBcImlucHV0XCIpPElucHV0RXZlbnQ+KGUgPT4ge30pYFxuICpcbiAqIFRoZSB0eXBlIGFyZ3VtZW50IGlzIG9wdGlvbmFsLCBidXQgbmFycm93cyBkb3duIHRoZSB0eXBlIGZyb20gXCJhIHVuaW9uIG9mIGFsbCBldmVudHNcIiB0byB3aGF0ZXZlciB5b3Ugc3BlY2lmeSwgYW5kIGVycm9ycyBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICpcbiAqIFRoZXJlIGlzIGEgc2VwYXJhdGUgdmVyc2lvbiB0aGF0IGF0dGFjaGVzIGV2ZW50IGhhbmRsZXJzIHRvIGEgc2V0IG9mIHByb3BzLlxuICogSXQgdGFrZXMgZGlmZmVyZW50IGV2ZW50IHN0cmluZyB0eXBlcyAob25FdmVudCB2cyBvbmV2ZW50KS5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IEEgKm5vbi1QcmVhY3QqIG5vZGUgdG8gYXR0YWNoIHRoZSBldmVudCB0by5cbiAqIEByZXR1cm5zXG4gKiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxIYW5kbGVyKHRhcmdldCwgdHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIC8vIE5vdGUgdG8gc2VsZjogVGhlIHR5cGluZyBkb2Vzbid0IGltcHJvdmUgZXZlbiBpZiB0aGlzIGlzIHNwbGl0IHVwIGludG8gYSBzdWItZnVuY3Rpb24uXG4gICAgLy8gTm8gbWF0dGVyIHdoYXQsIGl0IHNlZW1zIGltcG9zc2libGUgdG8gZ2V0IHRoZSBoYW5kbGVyJ3MgZXZlbnQgb2JqZWN0IHR5cGVkIHBlcmZlY3RseS5cbiAgICAvLyBJdCBzZWVtcyBsaWtlIGl0J3MgZ3VhcmFudGVlZCB0byBhbHdheXMgYmUgYSB1bmlvbiBvZiBhbGwgYXZhaWxhYmxlIHR1cGVzLlxuICAgIC8vIEFnYWluLCBubyBtYXR0ZXIgd2hhdCBjb21iaW5hdGlvbiBvZiBzdWItIG9yIHN1Yi1zdWItZnVuY3Rpb25zIHVzZWQuXG4gICAgbGV0IHN0YWJsZUhhbmRsZXIgPSB1c2VTdGFibGVDYWxsYmFjayhoYW5kbGVyID8/ICgoKSA9PiB7IH0pKTtcbiAgICBpZiAoaGFuZGxlciA9PSBudWxsKVxuICAgICAgICBzdGFibGVIYW5kbGVyID0gbnVsbDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhYmxlSGFuZGxlcikge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgc3RhYmxlSGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9LCBbdGFyZ2V0LCB0eXBlLCBzdGFibGVIYW5kbGVyXSk7XG59XG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHdheSB0byBhZGQgYW4gZXZlbnQgaGFuZGxlciB0byBhbiBlbGVtZW50LiBVc2VmdWwgcHJpbWFyaWx5IHdoZW4gaW50ZWdyYXRpbmcgM3JkIHBhcnR5IGxpYnJhcmllcyB0aGF0IGV4cGVjdCBhIGdlbmVyaWMgXCJhZGQgZXZlbnQgaGFuZGxlclwiIGZ1bmN0aW9uLlxuICpcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gbW9kaWZ5IGEgc2V0IG9mIHByb3BzIHRvIGFwcGx5IHRoaXMgaGFuZGxlci5cbiAqXG4gKiBGb3IgdHlwaW5nIHJlYXNvbnMsIHRoaXMgZnVuY3Rpb24gaXMgc3BsaXQgaW50byB0d28uICBVc2FnZSBpcyBsaWtlIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogYGBgXG4gKiBjb25zdCB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfSA9IHVzZUxvY2FsRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PigpKFwib25Nb3VzZURvd25cIiwgZSA9PiB7ICB9KTtcbiAqIGNvbnN0IGRpdlByb3BzID0gdXNlTG9jYWxFdmVudEhhbmRsZXJQcm9wcyhwcm9wcyk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhYmxlSGFuZGxlciA9IHVzZVN0YWJsZUNhbGxiYWNrKGhhbmRsZXIpO1xuICAgICAgICBjb25zdCB1c2VMb2NhbEV2ZW50SGFuZGxlclByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IFt0eXBlXTogc3RhYmxlSGFuZGxlciB9LCBwcm9wcyk7XG4gICAgICAgIH0sIFt0eXBlXSk7XG4gICAgICAgIHJldHVybiB7IHVzZUxvY2FsRXZlbnRIYW5kbGVyUHJvcHMgfTtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZXZlbnQtaGFuZGxlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuLyoqXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgZGlmZmVyZW50IHdheXMgdGhhdCBhIGZvY3VzIGV2ZW50IGNhbiBoYXBwZW4uICBBc3N1bWVcbiAqIHRoZSBmb2xsb3dpbmcgc3RlcHMgaGFwcGVuIGluIG9yZGVyOlxuICpcbiAqIDEuIFRoZSBwYWdlIGxvYWRzLlxuICogICAgKiBOb3RoaW5nIGlzIGZvY3VzZWQsIGJ1dCBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYGJvZHlgLlxuICogICAgKiBObyBmb2N1cyBldmVudHMgYXJlIGZpcmVkLlxuICogMi4gVGhlIHdpbmRvdyBpcyBmb2N1c2VkLCBhbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCByZW1haW5zIGFzIGBib2R5YC5cbiAqICAgICogQSBgZm9jdXNgL2Bmb2N1c2luYCBldmVudCAqTUlHSFQqIGJlIGZpcmVkIGZvciBgYm9keWAuIERlcGVuZGluZyBvblxuICogICAgICB0aGUgYnJvd3NlciwgdGhpcyBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIGhhbmRsZXIgd2FzIGF0dGFjaGVkIHRvIGB3aW5kb3dgIG9yIGBkb2N1bWVudGAuXG4gKiAgICAgIFByb2JhYmx5IGp1c3QgYmVzdCB0byBub3QgcmVseSBvbiBpdCwgb3IgbGlzdGVuIHRvIGB3aW5kb3dgIGZvY3VzIGV2ZW50cyBkaXJlY3RseS5cbiAqIDMuIEEgZm9jdXNhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZCwgZXRjLlxuICogICAgKiBUaGUgYGFjdGl2ZUVsZW1lbnRgIGlzIHNldCB0byB0aGUgbmV3IGVsZW1lbnQgYmVmb3JlIGFueSBldmVudCBldmVuIGZpcmVzLlxuICogICAgKiBgZm9jdXNvdXRgIGFuZCBgYmx1cmAgYXJlICpub3QqIGZpcmVkIG9uIGBib2R5YC5cbiAqICAgICogYGZvY3VzYCBhbmQgYGZvY3VzaW5gIGFyZSBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsLlxuICogNC4gQSBmb2N1c2FibGUgZWxlbWVudCBpcyBjbGlja2VkLCBldGMuXG4gKiAgICAqICoqVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gdGhlIGBib2R5YCoqIGJlZm9yZSBhbnkgZXZlbnQgZXZlbiBmaXJlcy5cbiAqICAgICogYGJsdXJgIGFuZCBgZm9jdXNvdXRgIGFyZSBmaXJlZCBvbiB0aGUgb2xkIGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgbmV3IGVsZW1lbnQuXG4gKiAgICAqIFRoZSBgYWN0aXZlRWxlbWVudGAgaXMgbm93IHNldCB0byB0aGUgbmV3IGVsZW1lbnQuXG4gKiAgICAqIGBmb2N1c2luYCBpcyBmaXJlZCBvbiB0aGUgbmV3IGVsZW1lbnQuIGByZWxhdGVkVGFyZ2V0YCBpcyB0aGUgb2xkIGVsZW1lbnQuXG4gKiA1LiBBbiB1bmZvY3VzYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQsIHRleHQgaXMgc2VsZWN0ZWQsIGV0Yy5cbiAqICAgICogVGhlIGBhY3RpdmVFbGVtZW50YCBpcyBzZXQgdG8gYGJvZHlgLlxuICogICAgKiBgYmx1cmAgYW5kIGBmb2N1c291dGAgYXJlIGZpcmVkIG9uIHRoZSBvbGQgZWxlbWVudC4gYHJlbGF0ZWRUYXJnZXRgIGlzIG51bGwuXG4gKiAgICAqIGBmb2N1c2luYCBpcyAqbm90KiBmaXJlZCBvbiBgYm9keWAuXG4gKlxuICpcbiAqIEluIHN1bW1hcnk6XG4gKiAxLiBGb2N1cyBldmVudHMgKmRvKiBub3RpZnkgdXMgb2YgYWxsIGNoYW5nZXMgaW4gZm9jdXMsIGJ1dCB0aGVyZSBpcyBubyBvbmUgc2luZ2xlIGNvbXByZWhlbnNpdmUgZXZlbnQgdGhhdCBwcm92aWRlcyB1cyB3aXRoIGFsbCBhdmFpbGFibGUgaW5mb3JtYXRpb24uXG4gKiAyLiBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgKmlzIG5vdCogYWx3YXlzIHRoZSBzYW1lIGFzIHdoYXQncyBiZWluZyByZWZlcmVuY2VkIGJ5IGEgZm9jdXMgZXZlbnQuIEluIHBhcnRpY3VsYXIsIGl0IG1heSBiZWNvbWUgYGJvZHlgIGF0IGFueSBhcmJpdHJhcnkgdGltZS5cbiAqIDMuIEEgYGJsdXJgIHdpdGhvdXQgYSBgZm9jdXNgIGNhbiBhbmQgd2lsbCBvY2N1ci4gVGhpcyBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gc29sZWx5IHVzZSBgZm9jdXNgIHRvIGRldGVjdCBhbGwgY2hhbmdlcy5cbiAqIDQuIEEgYGJsdXJgIGV2ZW50IHdob3NlIGByZWxhdGVkVGFyZ2V0YCBpcyBudWxsIGluZGljYXRlcyB0aGF0IHRoZXJlIHdpbGwgYmUgbm8gZm9sbG93aW5nIGBmb2N1c2AgZXZlbnQuXG4gKlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHJldHVybnNcbiAqL1xuY29uc3QgZHVtbXkgPSAwO1xuY29uc3QgYWN0aXZlRWxlbWVudFVwZGF0ZXJzID0gbmV3IFNldCgpO1xuY29uc3QgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycyA9IG5ldyBTZXQoKTtcbmNvbnN0IHdpbmRvd0ZvY3VzZWRVcGRhdGVycyA9IG5ldyBTZXQoKTtcbmxldCB3aW5kb3dGb2N1c2VkID0gdHJ1ZTtcbmZ1bmN0aW9uIGZvY3Vzb3V0KGUpIHtcbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgZiBvZiBhY3RpdmVFbGVtZW50VXBkYXRlcnMpXG4gICAgICAgICAgICBmPy4obnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBKdXN0IHdhaXQgZm9yIHRoZSBmb2N1c2luIGV2ZW50LlxuICAgIH1cbn1cbmZ1bmN0aW9uIGZvY3VzaW4oZSkge1xuICAgIGxldCBjdXJyZW50bHlGb2N1c2VkRWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGxldCBsYXN0Rm9jdXNlZEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZm9yRWFjaChmID0+IGY/LihjdXJyZW50bHlGb2N1c2VkRWxlbWVudCkpO1xuICAgIGxhc3RBY3RpdmVFbGVtZW50VXBkYXRlcnMuZm9yRWFjaChmID0+IGY/LihsYXN0Rm9jdXNlZEVsZW1lbnQpKTtcbn1cbmZ1bmN0aW9uIHdpbmRvd0ZvY3VzKCkge1xuICAgIHdpbmRvd0ZvY3VzZWQgPSB0cnVlO1xuICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5mb3JFYWNoKGYgPT4gZj8uKHdpbmRvd0ZvY3VzZWQpKTtcbn1cbmZ1bmN0aW9uIHdpbmRvd0JsdXIoKSB7XG4gICAgd2luZG93Rm9jdXNlZCA9IGZhbHNlO1xuICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5mb3JFYWNoKGYgPT4gZj8uKHdpbmRvd0ZvY3VzZWQpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3RpdmVFbGVtZW50KHsgb25BY3RpdmVFbGVtZW50Q2hhbmdlLCBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlLCBvbldpbmRvd0ZvY3VzZWRDaGFuZ2VkIH0pIHtcbiAgICBjb25zdCBbZ2V0QWN0aXZlRWxlbWVudCwgc2V0QWN0aXZlRWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25BY3RpdmVFbGVtZW50Q2hhbmdlLCB1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtnZXRMYXN0QWN0aXZlRWxlbWVudCwgc2V0TGFzdEFjdGl2ZUVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uTGFzdEFjdGl2ZUVsZW1lbnRDaGFuZ2UsIHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2dldFdpbmRvd0ZvY3VzZWQsIHNldFdpbmRvd0ZvY3VzZWRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uV2luZG93Rm9jdXNlZENoYW5nZWQsIHdpbmRvd0ZvY3VzZWQpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZm9jdXNpbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZvY3Vzb3V0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHdpbmRvd0ZvY3VzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgd2luZG93Qmx1ciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCB0aGVtIGV2ZW4gaWYgdGhleSdyZSB1bmRlZmluZWQgdG8gbW9yZSBlYXNpbHlcbiAgICAgICAgLy8gbWFuYWdlIHRoZSBcIj4wIG1lYW5zIGRvbid0IGFkZCBoYW5kbGVyc1wiIGxvZ2ljLlxuICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuYWRkKHNldEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBsYXN0QWN0aXZlRWxlbWVudFVwZGF0ZXJzLmFkZChzZXRMYXN0QWN0aXZlRWxlbWVudCk7XG4gICAgICAgIHdpbmRvd0ZvY3VzZWRVcGRhdGVycy5hZGQoc2V0V2luZG93Rm9jdXNlZCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50VXBkYXRlcnMuZGVsZXRlKHNldEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgbGFzdEFjdGl2ZUVsZW1lbnRVcGRhdGVycy5kZWxldGUoc2V0TGFzdEFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgd2luZG93Rm9jdXNlZFVwZGF0ZXJzLmRlbGV0ZShzZXRXaW5kb3dGb2N1c2VkKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50VXBkYXRlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZvY3VzaW4pO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb2N1c291dCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB3aW5kb3dGb2N1cyk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHdpbmRvd0JsdXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4geyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjdGl2ZS1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCB9IGZyb20gXCIuL3VzZS1hY3RpdmUtZWxlbWVudFwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUhhc0ZvY3VzKHsgb25Gb2N1c2VkQ2hhbmdlZCwgb25Gb2N1c2VkSW5uZXJDaGFuZ2VkLCBvbkxhc3RGb2N1c2VkQ2hhbmdlZCwgb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZCB9KSB7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgIHVzZUFjdGl2ZUVsZW1lbnQoe1xuICAgICAgICBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2U6IG5vZGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIG9uRm9jdXNlZENoYW5nZWQ/LihlbGVtZW50ID09IG5vZGUgJiYgZWxlbWVudCAhPSBudWxsKTtcbiAgICAgICAgICAgIG9uRm9jdXNlZElubmVyQ2hhbmdlZD8uKCEhZWxlbWVudD8uY29udGFpbnMobm9kZSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkxhc3RBY3RpdmVFbGVtZW50Q2hhbmdlOiBub2RlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBvbkxhc3RGb2N1c2VkQ2hhbmdlZD8uKGVsZW1lbnQgPT0gbm9kZSAmJiBlbGVtZW50ICE9IG51bGwpO1xuICAgICAgICAgICAgb25MYXN0Rm9jdXNlZElubmVyQ2hhbmdlZD8uKCEhZWxlbWVudD8uY29udGFpbnMobm9kZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgdXNlSGFzRm9jdXNQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4geyByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTsgfSwgW3VzZVJlZkVsZW1lbnRQcm9wc10pO1xuICAgIHJldHVybiB7IHVzZUhhc0ZvY3VzUHJvcHMsIGdldEVsZW1lbnQgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1oYXMtZm9jdXMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVydmFsKHsgaW50ZXJ2YWwsIGNhbGxiYWNrIH0pIHtcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIGNvbnN0IGdldEludGVydmFsID0gdXNlU3RhYmxlR2V0dGVyKGludGVydmFsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuICAgICAgICBsZXQgbGFzdERlbGF5VXNlZCA9IGludGVydmFsO1xuICAgICAgICBpZiAoaW50ZXJ2YWwgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAvLyB0aGF0IGNsZWFycyBhbmQgcmVzZXRzIHRoZSBpbnRlcnZhbCBpZiBpdCBjaGFuZ2VzLlxuICAgICAgICBjb25zdCBhZGp1c3RhYmxlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzdGFibGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW50ZXJ2YWwgIT0gbGFzdERlbGF5VXNlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEludGVydmFsICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldEludGVydmFsKGFkanVzdGFibGVDYWxsYmFjaywgbGFzdERlbGF5VXNlZCA9IGN1cnJlbnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBoYW5kbGUgPSBzZXRJbnRlcnZhbChhZGp1c3RhYmxlQ2FsbGJhY2ssIGludGVydmFsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJ2YWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdXNlLWtleWJvYXJkLW5hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUm92aW5nVGFiSW5kZXggfSBmcm9tIFwiLi91c2Utcm92aW5nLXRhYmluZGV4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuLyoqXG4gKlxuICogVE9ETzogVGhpcyB0YWJsZSB3YXMgc2NyYXBwZWQgd2hlbiB0aGlzIHdhcyBjaGFuZ2VkIHRvIGp1c3QgYWNjZXB0IGEgY29sbGF0b3IgZGlyZWN0bHksXG4gKiBidXQgaXQncyBub3QgYmFkIGZvciBhIGNvbGxhdGlvbiBjcmFzaCBjb3Vyc2UgYW5kIEkgbWlnaHQgdXNlIGl0IGFnYWluLlxuICogRXZlbiBqdXN0IGFzIGEgXCJ0aGlzIGlzIHdoeSBpdCdzIGltcG9ydGFudCBhbmQgZ29vZCB0byB1c2UgdGhlc2UgdGhpbmdzXCIgdGhpbmcuXG4gKlxuICogfExhbmcufFRhcmdldHxVc2VyIGlucHV0fGBiYXNlYHxgYWNjZW50YHxgY2FzZWB8YHZhcmlhbnRgfFxuICogfC0tLS18LS0tLXwtLS0tfC0tLS18LS0tLXwtLS0tfC0tLS18XG4gKiB8RU58SGl8SGl84pyFfOKchXzinIV84pyFfFxuICogfEVOfEhpfO+8qO+9iXzinIV84pyFfOKchXzinYx8XG4gKiB8RU58SGl8aGl84pyFfOKchXzinYx84p2MfFxuICogfEVOfEhpfEjDr3zinIV84p2MfOKdjHzinYx8XG4gKiB8RU58SGl8QnllfOKdjHzinYx84p2MfOKdjHxcbiAqIHxEQXzDpXxhYXzinIV84pyFfOKchXzinYx8XG4gKiB8REF8w6V8QUF84pyFfOKchXzinYx84p2MfFxuICogfERBfMOlfEFhfOKchXzinIV84p2MfOKdjHxcbiAqIHxFTnzDpXxhYXzinYx84p2MfOKdjHzinYx8XG4gKiB8REF8w6V8YUF84p2MfOKdjHzinYx84p2MfFxuICogfEVOfMOlfGF84pyFfOKchXzinYx84p2MfFxuICogfERBfMOlfGF84pyFfOKchXzinYx84p2MfFxuICogfEpQfO+qqnznnYB84pyFfOKchXzinIV84pyFfFxuICogfEpQfOOCq3zvvbZ84pyFfOKchXzinIV84pyFfFxuICogfEpQfOOCq3zjgYt84pyFfOKchXzinIV84p2MfFxuICogfEpQfOOCq3zjg7V84pyFfOKchXzinIV84p2MfFxuICogfEpQfOOCq3zji5V84pyFfOKchXzinYx84p2MfFxuICogfEpQfOOCq3zjgqx84pyFfOKdjHzinYx84p2MfFxuICogfEpQfOOCq3zlipt84p2MfOKdjHzinYx84p2MfFxuICogfFpIfOe0hXznuqJ84p2MfOKdjHzinYx84p2MfFxuICpcbiAqXG4gKiAoTm90ZSB0byBzZWxmOiBBdCBzb21lIHBvaW50LCB0aGlzIGZpbGUgd2lsbCBwcm9iYWJseSBiZSBub3JtYWxpemVkXG4gKiBieSBzb21lYm9keSBhbmQg76qqIHdpbGwgdHVybiBiYWNrIGludG8g552ALilcbiAqXG4gKi9cbmNvbnN0IGR1bW15ID0gbnVsbDtcbjtcbmZ1bmN0aW9uIGlkZW50aXR5KHQpIHsgcmV0dXJuIHQ7IH1cbi8qKlxuICogSW1wbGVtZW50cyBwcm9wZXIga2V5Ym9hcmQgbmF2aWdhdGlvbiBmb3IgY29tcG9uZW50cyBsaWtlIGxpc3Rib3hlcywgYnV0dG9uIGdyb3VwcywgbWVudXMsIGV0Yy5cbiAqXG4gKiBJbiB0aGUgZG9jdW1lbnQgb3JkZXIsIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgXCJmb2N1c2VkXCIgb3IgXCJ0YWJiYWJsZVwiIGVsZW1lbnQsIG1ha2luZyBpdCBhY3QgbW9yZSBsaWtlIG9uZSBjb21wbGV0ZSB1bml0IGluIGNvbXBhcmlzb24gdG8gZXZlcnl0aGluZyBhcm91bmQgaXQuXG4gKiBOYXZpZ2F0aW5nIGZvcndhcmRzL2JhY2t3YXJkcyBjYW4gYmUgZG9uZSB3aXRoIHRoZSBhcnJvdyBrZXlzLCBIb21lL0VuZCBrZXlzLCBvciBhbnkgYW55IHRleHQgZm9yIHR5cGVhaGVhZCB0byBmb2N1cyB0aGUgbmV4dCBpdGVtIHRoYXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxpc3ROYXZpZ2F0aW9uKHsgaW5pdGlhbEluZGV4LCBzaG91bGRGb2N1c09uQ2hhbmdlLCBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgaW5kZXhNYW5nbGVyLCBpbmRleERlbWFuZ2xlciB9KSB7XG4gICAgaW5kZXhNYW5nbGVyID8/PSBpZGVudGl0eTtcbiAgICBpbmRleERlbWFuZ2xlciA/Pz0gaWRlbnRpdHk7XG4gICAga2V5TmF2aWdhdGlvbiA/Pz0gXCJlaXRoZXJcIjtcbiAgICAvLyBLZWVwIHRyYWNrIG9mIHRocmVlIHRoaW5ncyByZWxhdGVkIHRvIHRoZSBjdXJyZW50bHkgdGFiYmFibGUgZWxlbWVudCdzIGluZGV4OlxuICAgIC8vIFdoYXQgaXQgaXMsIGFuZCB3aGV0aGVyLCB3aGVuIHdlIHJlbmRlciB0aGlzIGNvbXBvbmVudCBhbmQgaXQncyBjaGFuZ2VkLCB0byBhbHNvIGZvY3VzIHRoZSBlbGVtZW50IHRoYXQgd2FzIG1hZGUgdGFiYmFibGUuXG4gICAgY29uc3QgW3RhYmJhYmxlSW5kZXgsIHNldFRhYmJhYmxlSW5kZXgsIGdldFRhYmJhYmxlSW5kZXhdID0gdXNlU3RhdGUoaW5pdGlhbEluZGV4ID09PSB1bmRlZmluZWQgPyAwIDogaW5pdGlhbEluZGV4KTtcbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlbiwgaW5kaWNlc0J5RWxlbWVudCwgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCwgZm9jdXNDdXJyZW50LCAuLi5yZXN0IH0gPSB1c2VSb3ZpbmdUYWJJbmRleCh7IHNob3VsZEZvY3VzT25DaGFuZ2UsIHRhYmJhYmxlSW5kZXggfSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0luZGV4ID0gdXNlQ2FsbGJhY2soKGkpID0+IHsgc2V0VGFiYmFibGVJbmRleChpKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9GaXJzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpbmRleE1hbmdsZXIoMCkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0xhc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFRhYmJhYmxlSW5kZXgoaW5kZXhNYW5nbGVyKG1hbmFnZWRDaGlsZHJlbi5sZW5ndGggLSAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0VGFiYmFibGVJbmRleChpID0+IGluZGV4TWFuZ2xlcihpbmRleERlbWFuZ2xlcihpID8/IDApIC0gMSkpOyB9LCBbaW5kZXhEZW1hbmdsZXIsIGluZGV4TWFuZ2xlcl0pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRUYWJiYWJsZUluZGV4KGkgPT4gaW5kZXhNYW5nbGVyKGluZGV4RGVtYW5nbGVyKGkgPz8gMCkgKyAxKSk7IH0sIFtpbmRleERlbWFuZ2xlciwgaW5kZXhNYW5nbGVyXSk7XG4gICAgY29uc3Qgc2V0SW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+IHtcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleChpbmRleCk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHsgY3VycmVudFR5cGVhaGVhZCwgaW52YWxpZFR5cGVhaGVhZCwgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkIH0gPSB1c2VUeXBlYWhlYWROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGdldEluZGV4OiBnZXRUYWJiYWJsZUluZGV4LCBzZXRJbmRleCwgdHlwZWFoZWFkVGltZW91dDogMTAwMCB9KTtcbiAgICBjb25zdCB7IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbih7IG5hdmlnYXRpb25EaXJlY3Rpb246IGtleU5hdmlnYXRpb24sIGluZGV4OiBnZXRUYWJiYWJsZUluZGV4KCkgPz8gMCwgbWFuYWdlZENoaWxkcmVuLCBuYXZpZ2F0ZVRvUHJldiwgbmF2aWdhdGVUb05leHQsIG5hdmlnYXRlVG9GaXJzdCwgbmF2aWdhdGVUb0xhc3QgfSk7XG4gICAgY29uc3QgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZVR5cGVhaGVhZE5hdmlnYXRpb25DaGlsZChpbmZvKTtcbiAgICAgICAgY29uc3QgeyB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkKGluZm8pO1xuICAgICAgICBjb25zdCB7IHVzZVJvdmluZ1RhYkluZGV4Q2hpbGRQcm9wcywgdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsIHRhYmJhYmxlIH0gPSB1c2VSb3ZpbmdUYWJJbmRleENoaWxkKGluZm8pO1xuICAgICAgICBjb25zdCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMgPSBmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh1c2VSb3ZpbmdUYWJJbmRleENoaWxkUHJvcHModXNlVHlwZWFoZWFkTmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMoeyBvbkNsaWNrOiByb3ZlVG9TZWxmIH0pKSksIHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm92ZVRvU2VsZiA9IHVzZUNhbGxiYWNrKCgpID0+IHsgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpOyB9LCBbXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsXG4gICAgICAgICAgICB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wczogdXNlUm92aW5nVGFiSW5kZXhTaWJsaW5nUHJvcHMsXG4gICAgICAgICAgICB0YWJiYWJsZVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VUeXBlYWhlYWROYXZpZ2F0aW9uQ2hpbGQsIHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCwgdXNlUm92aW5nVGFiSW5kZXhDaGlsZCwgbmF2aWdhdGVUb0luZGV4XSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTGlzdE5hdmlnYXRpb25DaGlsZCxcbiAgICAgICAgY3VycmVudFR5cGVhaGVhZCxcbiAgICAgICAgaW52YWxpZFR5cGVhaGVhZCxcbiAgICAgICAgdGFiYmFibGVJbmRleCxcbiAgICAgICAgc2V0VGFiYmFibGVJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBpbmRpY2VzQnlFbGVtZW50LFxuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgsXG4gICAgICAgIG5hdmlnYXRlVG9OZXh0LFxuICAgICAgICBuYXZpZ2F0ZVRvUHJldixcbiAgICAgICAgbmF2aWdhdGVUb0ZpcnN0LFxuICAgICAgICBuYXZpZ2F0ZVRvTGFzdCxcbiAgICAgICAgZm9jdXNDdXJyZW50LFxuICAgICAgICAuLi5yZXN0XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0LW5hdmlnYXRpb24uanMubWFwIiwiLyohXG4qIHRhYmJhYmxlIDUuMi4xXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbnZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYScsICdhW2hyZWZdJywgJ2J1dHRvbicsICdbdGFiaW5kZXhdJywgJ2F1ZGlvW2NvbnRyb2xzXScsICd2aWRlb1tjb250cm9sc10nLCAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknLCAnZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUnLCAnZGV0YWlscyddO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcbnZhciBtYXRjaGVzID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gKCkge30gOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxudmFyIGdldENhbmRpZGF0ZXMgPSBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKGVsLCBpbmNsdWRlQ29udGFpbmVyLCBmaWx0ZXIpIHtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3RvcikpO1xuXG4gIGlmIChpbmNsdWRlQ29udGFpbmVyICYmIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgfVxuXG4gIGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLmZpbHRlcihmaWx0ZXIpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbnZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSc7XG59O1xuXG52YXIgZ2V0VGFiaW5kZXggPSBmdW5jdGlvbiBnZXRUYWJpbmRleChub2RlKSB7XG4gIHZhciB0YWJpbmRleEF0dHIgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuXG4gIGlmICghaXNOYU4odGFiaW5kZXhBdHRyKSkge1xuICAgIHJldHVybiB0YWJpbmRleEF0dHI7XG4gIH0gLy8gQnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cblxuXG4gIGlmIChpc0NvbnRlbnRFZGl0YWJsZShub2RlKSkge1xuICAgIHJldHVybiAwO1xuICB9IC8vIGluIENocm9tZSwgPGRldGFpbHMvPiwgPGF1ZGlvIGNvbnRyb2xzLz4gYW5kIDx2aWRlbyBjb250cm9scy8+IGVsZW1lbnRzIGdldCBhIGRlZmF1bHRcbiAgLy8gIGB0YWJJbmRleGAgb2YgLTEgd2hlbiB0aGUgJ3RhYmluZGV4JyBhdHRyaWJ1dGUgaXNuJ3Qgc3BlY2lmaWVkIGluIHRoZSBET00sXG4gIC8vICB5ZXQgdGhleSBhcmUgc3RpbGwgcGFydCBvZiB0aGUgcmVndWxhciB0YWIgb3JkZXI7IGluIEZGLCB0aGV5IGdldCBhIGRlZmF1bHRcbiAgLy8gIGB0YWJJbmRleGAgb2YgMDsgc2luY2UgQ2hyb21lIHN0aWxsIHB1dHMgdGhvc2UgZWxlbWVudHMgaW4gdGhlIHJlZ3VsYXIgdGFiXG4gIC8vICBvcmRlciwgY29uc2lkZXIgdGhlaXIgdGFiIGluZGV4IHRvIGJlIDAuXG5cblxuICBpZiAoKG5vZGUubm9kZU5hbWUgPT09ICdBVURJTycgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ1ZJREVPJyB8fCBub2RlLm5vZGVOYW1lID09PSAnREVUQUlMUycpICYmIG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG5cbnZhciBzb3J0T3JkZXJlZFRhYmJhYmxlcyA9IGZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn07XG5cbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xuXG52YXIgaXNIaWRkZW5JbnB1dCA9IGZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufTtcblxudmFyIGlzRGV0YWlsc1dpdGhTdW1tYXJ5ID0gZnVuY3Rpb24gaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gJ0RFVEFJTFMnICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC50YWdOYW1lID09PSAnU1VNTUFSWSc7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG5cbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBpc1RhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHJhZGlvU2NvcGUgPSBub2RlLmZvcm0gfHwgbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIHZhciBxdWVyeVJhZGlvcyA9IGZ1bmN0aW9uIHF1ZXJ5UmFkaW9zKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuXG4gIHZhciByYWRpb1NldDtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mod2luZG93LkNTUy5lc2NhcGUobm9kZS5uYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mobm9kZS5uYW1lKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdMb29rcyBsaWtlIHlvdSBoYXZlIGEgcmFkaW8gYnV0dG9uIHdpdGggYSBuYW1lIGF0dHJpYnV0ZSBjb250YWluaW5nIGludmFsaWQgQ1NTIHNlbGVjdG9yIGNoYXJhY3RlcnMgYW5kIG5lZWQgdGhlIENTUy5lc2NhcGUgcG9seWZpbGw6ICVzJywgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0LCBub2RlLmZvcm0pO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn07XG5cbnZhciBpc1JhZGlvID0gZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn07XG5cbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufTtcblxudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4obm9kZSwgZGlzcGxheUNoZWNrKSB7XG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlVW5kZXJEZXRhaWxzLCAnZGV0YWlsczpub3QoW29wZW5dKSAqJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gJ2Z1bGwnKSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlzcGxheUNoZWNrID09PSAnbm9uLXplcm8tYXJlYScpIHtcbiAgICB2YXIgX25vZGUkZ2V0Qm91bmRpbmdDbGllID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgd2lkdGggPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS5oZWlnaHQ7XG5cbiAgICByZXR1cm4gd2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTsgLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxuXG5cbnZhciBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0ID0gZnVuY3Rpb24gaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSB7XG4gIGlmIChpc0lucHV0KG5vZGUpIHx8IG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcgfHwgbm9kZS50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAocGFyZW50Tm9kZS50YWdOYW1lID09PSAnRklFTERTRVQnICYmIHBhcmVudE5vZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgLy8gbG9vayBmb3IgdGhlIGZpcnN0IDxsZWdlbmQ+IGFzIGFuIGltbWVkaWF0ZSBjaGlsZCBvZiB0aGUgZGlzYWJsZWRcbiAgICAgICAgLy8gIDxmaWVsZHNldD46IGlmIHRoZSBub2RlIGlzIGluIHRoYXQgbGVnZW5kLCBpdCdsbCBiZSBlbmFibGVkIGV2ZW5cbiAgICAgICAgLy8gIHRob3VnaCB0aGUgZmllbGRzZXQgaXMgZGlzYWJsZWQ7IG90aGVyd2lzZSwgdGhlIG5vZGUgaXMgaW4gYVxuICAgICAgICAvLyAgc2Vjb25kYXJ5L3N1YnNlcXVlbnQgbGVnZW5kLCBvciBzb21ld2hlcmUgZWxzZSB3aXRoaW4gdGhlIGZpZWxkc2V0XG4gICAgICAgIC8vICAoaG93ZXZlciBkZWVwIG5lc3RlZCkgYW5kIGl0J2xsIGJlIGRpc2FibGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudE5vZGUuY2hpbGRyZW4uaXRlbShpKTtcblxuICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAnTEVHRU5EJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5zKG5vZGUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gdGhlIG5vZGUgaXNuJ3QgaW4gdGhlIGZpcnN0IGxlZ2VuZCAoaW4gZG9jIG9yZGVyKSwgc28gbm8gbWF0dGVyXG4gICAgICAgICAgICAvLyAgd2hlcmUgaXQgaXMgbm93LCBpdCdsbCBiZSBkaXNhYmxlZFxuXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyB0aGUgbm9kZSBpc24ndCBpbiBhIGxlZ2VuZCwgc28gbm8gbWF0dGVyIHdoZXJlIGl0IGlzIG5vdywgaXQnbGwgYmUgZGlzYWJsZWRcblxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfSAvLyBlbHNlLCBub2RlJ3MgdGFiYmFibGUvZm9jdXNhYmxlIHN0YXRlIHNob3VsZCBub3QgYmUgYWZmZWN0ZWQgYnkgYSBmaWVsZHNldCdzXG4gIC8vICBlbmFibGVkL2Rpc2FibGVkIHN0YXRlXG5cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAobm9kZS5kaXNhYmxlZCB8fCBpc0hpZGRlbklucHV0KG5vZGUpIHx8IGlzSGlkZGVuKG5vZGUsIG9wdGlvbnMuZGlzcGxheUNoZWNrKSB8fCAvLyBGb3IgYSBkZXRhaWxzIGVsZW1lbnQgd2l0aCBhIHN1bW1hcnksIHRoZSBzdW1tYXJ5IGVsZW1lbnQgZ2V0cyB0aGUgZm9jdXNcbiAgaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkgfHwgaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5kaWRhdGUsIGkpIHtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlcy5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5ub2RlO1xuICB9KS5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufTtcblxudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuXG52YXIgaXNGb2N1c2FibGUgPSBmdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG5leHBvcnQgeyBmb2N1c2FibGUsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290RWxlbWVudCBUaGUgRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlU3VidHJlZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5zdXJlVW50YWJiYWJsZScsXG5cblxuICAgICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICAgIGlmICggLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleCA9PT0gLTEgJiYgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShpbmVydFJvb3QpO1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE5vZGU7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgICAqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICAgICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgICAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICAgICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAgICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gICAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuXG59KSkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsImltcG9ydCBcIndpY2ctaW5lcnRcIjtcbmltcG9ydCBcImJsb2NraW5nLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5jb25zdCBibG9ja2luZ0VsZW1lbnRzID0gZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHM7XG4vKipcbiAqIEFsbG93cyBhbiBlbGVtZW50IHRvIHRyYXAgZm9jdXMgYnkgYXBwbHlpbmcgdGhlIFwiaW5lcnRcIiBhdHRyaWJ1dGUgdG8gYWxsIHNpYmxpbmcsIGF1bnQsIGFuZCB1bmNsZSBub2Rlcy5cbiAqXG4gKiBBdXRvbWF0aWNhbGx5IGhhbmRsZXMgY29uc2VjdXRpdmUgY2FsbHMgd2l0aCBhIGxvb3NlbHkgYXBwbGllZCBzdGFjayBvcGVyYXRpb25cbiAqIChzcGVjaWZpY2FsbHkgdmlhIGBibG9ja2luZ0VsZW1lbnRzYCwgd2l0aCBhIHNtYWxsIHBvbHlmaWxsIGJlY2F1c2UgSSdtIG5vdCBzdXJlIGhvdyBsb25nXG4gKiBpdCdsbCB0YWtlIHRvIGZpbmQgaXRzIHdheSBpbnRvIHRoZSBzcGVjLCBpZiBldmVyKVxuICogQHBhcmFtIHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvY2tpbmdFbGVtZW50KHRhcmdldCkge1xuICAgIC8qKlxuICAgICAqIFB1c2gvcG9wIHRoZSBlbGVtZW50IGZyb20gdGhlIGJsb2NraW5nRWxlbWVudHMgc3RhY2suXG4gICAgICovXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgYmxvY2tpbmdFbGVtZW50cy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJsb2NraW5nRWxlbWVudHMucmVtb3ZlKHRhcmdldCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW3RhcmdldF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGJsb2NraW5nRWxlbWVudHMudG9wO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJsb2NraW5nLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgaXNGb2N1c2FibGUgfSBmcm9tIFwidGFiYmFibGVcIjtcbmltcG9ydCB7IHVzZUFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwiLi91c2UtYWN0aXZlLWVsZW1lbnRcIjtcbmltcG9ydCB7IGdldFRvcEVsZW1lbnQsIHVzZUJsb2NraW5nRWxlbWVudCB9IGZyb20gXCIuL3VzZS1ibG9ja2luZy1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG5jb25zdCBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZSB9KSB7XG4gICAgY29uc3QgW2VsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldEVsZW1lbnQgfSk7XG4gICAgLy9jb25zdCBbbGFzdEFjdGl2ZUVsZW1lbnQsIHNldExhc3RBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudF0gPSB1c2VTdGF0ZTxOb2RlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgeyBnZXRBY3RpdmVFbGVtZW50LCBnZXRMYXN0QWN0aXZlRWxlbWVudCwgZ2V0V2luZG93Rm9jdXNlZCB9ID0gdXNlQWN0aXZlRWxlbWVudCh7fSk7XG4gICAgLy8gV2hlbiB0aGUgdHJhcCBiZWNvbWVzIGFjdGl2ZSwgYmVmb3JlIHdlIGxldCB0aGUgYmxvY2tpbmdFbGVtZW50cyBob29rIHJ1bixcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHdoYXRldmVyJ3MgY3VycmVudGx5IGZvY3VzZWQgYW5kIHNhdmUgaXQuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRyYXBBY3RpdmUgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudFxuICAgICAgICAgICAgLy8gdG8gd2hhdGV2ZXIncyBjdXJyZW50bHkgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2tcbiAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5zZXQoZ2V0VG9wRWxlbWVudCgpLCBnZXRMYXN0QWN0aXZlRWxlbWVudCgpID8/IGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB9XG4gICAgfSwgW3RyYXBBY3RpdmUsIGVsZW1lbnRdKTtcbiAgICB1c2VCbG9ja2luZ0VsZW1lbnQodHJhcEFjdGl2ZSA/IGVsZW1lbnQgOiBudWxsKTtcbiAgICAvKipcbiAgICAgKiBBbnkgdGltZSB3ZSBhY3RpdmF0ZSBvciBkZWFjdGl2YXRlIHRoZSB0cmFwLFxuICAgICAqIGNoYW5nZSBmb2N1cyB0byBzb21ldGhpbmcgZWxzZSAoc29tZXRoaW5nIGluXG4gICAgICogdGhlIHRyYXAgaWYgaXQncyBhY3RpdmUsIG9yIHdoYXRldmVyIHdlJ3ZlXG4gICAgICogdHJhY2tlZCBpbiBlbGVtZW50c1RvUmVzdG9yZUZvY3VzVG8gaWYgbm90KVxuICAgICAqL1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0cmFwQWN0aXZlICYmIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCByYWZIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgZXh0cmEgcXVldWVNaWNyb3Rhc2sgaXMgbmVlZGVkIGZvclxuICAgICAgICAgICAgICAgIC8vIC4uLnJlYXNvbnM/XG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaW5kRmlyc3RGb2N1c2FibGUoZWxlbWVudCk/LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJhZkhhbmRsZSA9IDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhZkhhbmRsZSlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSGFuZGxlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXMgdG8gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIHRoYXQgaGFzIHJldHVybmVkIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gICAgICAgICAgICBsZXQgcmFmSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9SZXN0b3JlRm9jdXNUby5nZXQoZ2V0VG9wRWxlbWVudCgpKT8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFmSGFuZGxlID0gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmFmSGFuZGxlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZIYW5kbGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFt0cmFwQWN0aXZlLCBlbGVtZW50XSk7XG4gICAgY29uc3QgdXNlRm9jdXNUcmFwUHJvcHMgPSAoKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLW1vZGFsXCI6IHRyYXBBY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9LCB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VGb2N1c1RyYXBQcm9wcyxcbiAgICAgICAgZ2V0RWxlbWVudFxuICAgIH07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW4gdGhlIGdpdmVuIG5vZGUsIG9yIG51bGwgaWYgbm9uZSBhcmUgZm91bmQuXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdEZvY3VzYWJsZShlbGVtZW50KSB7XG4gICAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWxlbWVudCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIHsgYWNjZXB0Tm9kZTogKG5vZGUpID0+IChub2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiBpc0ZvY3VzYWJsZShub2RlKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVApIH0pO1xuICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlID0gdHJlZVdhbGtlci5maXJzdENoaWxkKCk7XG4gICAgcmV0dXJuIGZpcnN0Rm9jdXNhYmxlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWZvY3VzLXRyYXAuanMubWFwIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGMsdXNlRGVidWdWYWx1ZSBhcyBmfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgZCxGcmFnbWVudCBhcyB2LHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOmQoZChuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/ZChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1kKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OmR9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyh2LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyh2LG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9ZChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsej1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIEIobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gSChuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgWj1oLmV2ZW50O2Z1bmN0aW9uIFkoKXt9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBxKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBaJiYobj1aKG4pKSxuLnBlcnNpc3Q9WSxuLmlzUHJvcGFnYXRpb25TdG9wcGVkPSQsbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9cSxuLm5hdGl2ZUV2ZW50PW59O3ZhciBHLEo9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEs9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgdT0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBvIGluIHI9e30sZSl7dmFyIGk9ZVtvXTtWJiZcImNoaWxkcmVuXCI9PT1vJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1vJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09aXx8KFwiZGVmYXVsdFZhbHVlXCI9PT1vJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP289XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PW8mJiEwPT09aT9pPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KG8pP289XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KG8rdCkmJiF6KGUudHlwZSk/bz1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSksbi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOkgsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImV4cG9ydCBjb25zdCBFdmVudERldGFpbCA9IFN5bWJvbChcImV2ZW50LWRldGFpbFwiKTtcbmV4cG9ydCBmdW5jdGlvbiBlbmhhbmNlRXZlbnQoZSwgZGV0YWlsKSB7XG4gICAgbGV0IGV2ZW50ID0gZTtcbiAgICBldmVudFtFdmVudERldGFpbF0gPSBkZXRhaWw7XG4gICAgcmV0dXJuIGV2ZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VHbG9iYWxIYW5kbGVyLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGVuaGFuY2VFdmVudCwgRXZlbnREZXRhaWwgfSBmcm9tIFwiLi9wcm9wc1wiO1xubGV0IHB1bHNlID0gKFwidmlicmF0ZVwiIGluIG5hdmlnYXRvcikgPyAoKCkgPT4gbmF2aWdhdG9yLnZpYnJhdGUoMTApKSA6ICgoKSA9PiB7IH0pO1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGVuYWJsZS9kaXNhYmxlIGJ1dHRvbiB2aWJyYXRpb24gcHVsc2VzIG9uIGFuIGFwcC13aWRlIHNjYWxlLlxuICpcbiAqXG4gKiBAcGFyYW0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcnVuIHdoZW4gYSBidXR0b24gaXMgdGFwcGVkLlxuICogKERlZmF1bHQgaXMgYCgpID0+IG5hdmlnYXRvci52aWJyYXRlKDEwKWAgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGl0LCBhIG5vb3Agb3RoZXJ3aXNlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QnV0dG9uVmlicmF0ZShmdW5jKSB7XG4gICAgcHVsc2UgPSBmdW5jO1xufVxuZnVuY3Rpb24gZXhjbHVkZXModGFyZ2V0LCBleGNsdWRlKSB7XG4gICAgaWYgKGV4Y2x1ZGU/Llt0YXJnZXRdKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIHNlbGVjdGlvbi5jb250YWluc05vZGUgZG9lc24ndCBhY2NvdW50IGZvciBzZWxlY3Rpb24uaXNDb2xsYXBzZWQsXG4gKiBzbyBoZXJlJ3MgYSB3b3JrYXJvdW5kIGZvciB0aGF0LlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBub2RlSGFzU2VsZWN0ZWRUZXh0KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24/LmNvbnRhaW5zTm9kZShlbGVtZW50LCB0cnVlKSAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEVhc3kgd2F5IHRvIFwicG9seWZpbGxcIiBidXR0b24tbGlrZSBpbnRlcmFjdGlvbnMgb250bywgZS5nLiwgYSBkaXYuXG4gKlxuICogQWRkcyBjbGljaywgc3BhY2Ugb24ga2V5RG93biwgYW5kIGVudGVyIG9uIGtleVVwLCBhcyB3ZWxsIGFzIGhhcHRpY1xuICogZmVlZGJhY2sgdmlhIGEgbW9tZW50YXJ5IHZpYnJhdGlvbiBwdWxzZSB3aGVuIHRoZXJlJ3MgYW4gb25DbGljayBoYW5kbGVyIHByb3ZpZGVkXG4gKiAodGhpcyBjYW4gYmUgZGlzYWJsZWQgYXBwLXdpZGUgd2l0aCBgc2V0QnV0dG9uVmlicmF0ZWApLlxuICpcbiAqIEluIGFkZGl0aW9uLCB3aGVuIHRoZSBDU1MgYDphY3RpdmVgIHBzZXVkby1jbGFzcyB3b3VsZCBhcHBseSB0byBhIG5vcm1hbCBidXR0b25cbiAqIChpLmUuIHdoZW4gaG9sZGluZyB0aGUgc3BhY2ViYXIgb3IgZHVyaW5nIG1vdXNlZG93biksIGB7IFwiZGF0YS1wc2V1ZG8tYWN0aXZlXCI6IFwidHJ1ZVwiIH1gXG4gKiBpcyBhZGRlZCB0byB0aGUgcHJvcHMuICBZb3UgY2FuIGVpdGhlciBsZXQgaXQgcGFzcyB0aHJvdWdoIGFuZCBzdHlsZSBpdCB0aHJvdWdoIG5ldyBDU1MsXG4gKiBvciBpbnNwZWN0IHRoZSByZXR1cm5lZCBwcm9wcyBmb3IgaXQgYW5kIGFkZCBlLmcuIGFuIGAuYWN0aXZlYCBjbGFzcyBmb3IgZXhpc3RpbmcgQ1NTXG4gKlxuICogQHBhcmFtIG9uQ2xpY2tcbiAqIEBwYXJhbSBleGNsdWRlIFdoZXRoZXIgdGhlIHBvbHlmaWxsIHNob3VsZCBhcHBseSAoY2FuIHNwZWNpZnkgZm9yIHNwZWNpZmljIGludGVyYWN0aW9ucylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzKG9uQ2xpY2tTeW5jLCBleGNsdWRlKSB7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMsIGdldEVsZW1lbnQgfSA9IHVzZVJlZkVsZW1lbnQoe30pO1xuICAgIC8vIEEgYnV0dG9uIGNhbiBiZSBhY3RpdmF0ZWQgaW4gbXVsdGlwbGUgd2F5cywgc28gb24gdGhlIG9mZiBjaGFuY2VcbiAgICAvLyB0aGF0IG11bHRpcGxlIGFyZSB0cmlnZ2VyZWQgYXQgb25jZSwgd2Ugb25seSAqYWN0dWFsbHkqIHJlZ2lzdGVyXG4gICAgLy8gYSBwcmVzcyBvbmNlIGFsbCBvZiBvdXIgXCJvblwiIHNpZ25hbHMgaGF2ZSB0dXJuZWQgYmFjayB0byBcIm9mZlwiLlxuICAgIC8vIFdlIGFwcHJveGltYXRlIHRoaXMgYnkganVzdCBpbmNyZW1lbnRpbmcgd2hlbiBhY3RpdmUsIGFuZFxuICAgIC8vIGRlY3JlbWVudGluZyB3aGVuIGRlYWN0aXZhdGVkLlxuICAgIC8vXG4gICAgLy8gQXMgYW4gZW1lcmdlbmN5IGZhaWxzYWZlLCB3aGVuIHRoZSBlbGVtZW50IGxvb3NlcyBmb2N1cyxcbiAgICAvLyB0aGlzIGlzIHJlc2V0IGJhY2sgdG8gMC5cbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmUsIGdldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICAvLyBJZiB3ZSB0aGUgY3VycmVudCB0ZXh0IHNlbGVjdGlvbiBjaGFuZ2VzIHRvIGluY2x1ZGUgdGhpcyBlbGVtZW50XG4gICAgLy8gRFVSSU5HIGUuZy4gYSBtb3VzZWRvd24sIHRoZW4gd2UgZG9uJ3Qgd2FudCB0aGUgbW91c2V1cCB0byBcImNvdW50XCIsIGFzIGl0IHdlcmUsXG4gICAgLy8gYmVjYXVzZSBpdHMgb25seSBwdXJwb3NlIHdhcyBzZWxlY3RpbmcgdGV4dCwgbm90IGNsaWNraW5nIGJ1dHRvbnMuXG4gICAgLy9cbiAgICAvLyBUbyBjYXRjaCB0aGlzLCBhbnkgdGltZSB0aGUgdGV4dCBzZWxlY3Rpb24gaW5jbHVkZXMgdXMgd2hpbGUgaW4gdGhlIG1pZGRsZVxuICAgIC8vIG9mIGEgY2xpY2ssIHRoaXMgZmxhZyBpcyBzZXQsIHdoaWNoIGNhbmNlbHMgdGhlIGFjdGl2YXRpb24gb2YgYSBwcmVzcy5cbiAgICAvLyBUaGUgZmxhZyBpcyByZXNldCBhbnkgdGltZSB0aGUgc2VsZWN0aW9uIGlzIGVtcHR5IG9yIHRoZSBidXR0b24gaXNcbiAgICAvLyBubyBsb25nZXIgYWN0aXZlLlxuICAgIGNvbnN0IFt0ZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uLCBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VHbG9iYWxIYW5kbGVyKGRvY3VtZW50LCBcInNlbGVjdGlvbmNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgc2V0VGV4dFNlbGVjdGVkRHVyaW5nQWN0aXZhdGlvbihhY3RpdmUgPT0gMCA/IGZhbHNlIDogbm9kZUhhc1NlbGVjdGVkVGV4dChnZXRFbGVtZW50KCkpKTtcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlID09IDApXG4gICAgICAgICAgICBzZXRUZXh0U2VsZWN0ZWREdXJpbmdBY3RpdmF0aW9uKGZhbHNlKTtcbiAgICB9LCBbYWN0aXZlID09IDBdKTtcbiAgICBjb25zdCBvbkFjdGl2ZVN0YXJ0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKGEgPT4gKythKTtcbiAgICB9KTtcbiAgICBjb25zdCBvbkFjdGl2ZVN0b3AgPSB1c2VTdGFibGVDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoYSA9PiBNYXRoLm1heCgwLCAtLWEpKTtcbiAgICAgICAgaWYgKHRleHRTZWxlY3RlZER1cmluZ0FjdGl2YXRpb24pIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0QWN0aXZlKCkgPD0gMCkge1xuICAgICAgICAgICAgaGFuZGxlUHJlc3MoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBoYW5kbGVQcmVzcyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrU3luYykge1xuICAgICAgICAgICAgLy8gTm90ZTogVGhlIGVsZW1lbnQgaXMgZm9jdXNlZCBoZXJlIGJlY2F1c2Ugb2YgaU9TIFNhZmFyaS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBJdCdzIGFsd2F5cyBpT1MgU2FmYXJpLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGlPUyBTYWZhcmkgKHRlc3RlZCBvbiAxMikgZG93bnJpZ2h0IHJlZnVzZXMgdG8gYWxsb3cgXG4gICAgICAgICAgICAvLyBlbGVtZW50cyB0byBiZSBtYW51YWxseSBmb2N1c2VkIFVOTEVTUyBpdCBoYXBwZW5zIHdpdGhpblxuICAgICAgICAgICAgLy8gYW4gZXZlbnQgaGFuZGxlciBsaWtlIHRoaXMuICBJdCBhbHNvIGRvZXNuJ3QgZm9jdXNcbiAgICAgICAgICAgIC8vIGJ1dHRvbnMgYnkgZGVmYXVsdCB3aGVuIGNsaWNrZWQsIHRhcHBlZCwgZXRjLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIElmIGl0IGJlY29tZXMgcHJvYmxlbWF0aWMgdGhhdCBidXR0b24tbGlrZXMgZXhwbGljaXRseSBiZWNvbWVcbiAgICAgICAgICAgIC8vIGZvY3VzZWQgd2hlbiB0aGV5IGFyZSBwcmVzc2VkLCB0aGVuIGFuIGFsdGVybmF0aXZlIHNvbHV0aW9uIGZvclxuICAgICAgICAgICAgLy8gdGhlIHF1ZXN0aW9uIG9mIFwiaG93IGRvIG1lbnUgYnV0dG9ucyBrZWVwIHRoZWlyIG1lbnVzIG9wZW5cIlxuICAgICAgICAgICAgLy8gYW5kIG90aGVyIGZvY3VzLXJlbGF0ZWQgbm9uc2Vuc2UgbmVlZHMgdG8gYmUgZmlndXJlZCBvdXQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRm9yIGlPUyBTYWZhcmkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIFwiZm9jdXNcIiBpbiBlbGVtZW50KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmZvY3VzKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwdWxzZSgpO1xuICAgICAgICAgICAgb25DbGlja1N5bmMoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICAvLyBTdG9wIGRvdWJsZSBjbGlja3MgZnJvbSBzZWxlY3RpbmcgdGV4dCBpbiBhbiBjb21wb25lbnQgdGhhdCdzICpzdXBwb3NlZCogdG8gYmUgYWN0aW5nIGxpa2UgYSBidXR0b24sXG4gICAgICAgIC8vIGJ1dCBhbHNvIGRvbid0IHByZXZlbnQgdGhlIHVzZXIgZnJvbSBzZWxlY3RpbmcgdGhhdCB0ZXh0IG1hbnVhbGx5IGlmIHRoZXkgcmVhbGx5IHdhbnQgdG9cbiAgICAgICAgLy8gKHdoaWNoIHVzZXItc2VsZWN0OiBub25lIHdvdWxkIGRvLCBidXQgY2FuY2VsbGluZyBhIGRvdWJsZSBjbGljayBvbiBtb3VzZURvd24gZG9lc24ndClcbiAgICAgICAgaWYgKGUuZGV0YWlsID4gMSlcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKVxuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VVcCA9IGV4Y2x1ZGVzKFwiY2xpY2tcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDAgJiYgYWN0aXZlID4gMClcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZSgwKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTW91c2VPdXQgPSBleGNsdWRlcyhcImNsaWNrXCIsIGV4Y2x1ZGUpID8gdW5kZWZpbmVkIDogb25CbHVyO1xuICAgIGNvbnN0IG9uS2V5RG93biA9IGV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkgJiYgZXhjbHVkZXMoXCJlbnRlclwiLCBleGNsdWRlKSA/IHVuZGVmaW5lZCA6IChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIiBcIiAmJiBvbkNsaWNrU3luYyAmJiAhZXhjbHVkZXMoXCJzcGFjZVwiLCBleGNsdWRlKSkge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgYWN0dWFsbHkgYWN0aXZhdGUgaXQgb24gYSBzcGFjZSBrZXlkb3duXG4gICAgICAgICAgICAvLyBidXQgd2UgZG8gcHJldmVudERlZmF1bHQgdG8gc3RvcCB0aGUgcGFnZSBmcm9tIHNjcm9sbGluZy5cbiAgICAgICAgICAgIG9uQWN0aXZlU3RhcnQoZSk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIiAmJiAhZXhjbHVkZXMoXCJlbnRlclwiLCBleGNsdWRlKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb25BY3RpdmVTdGFydChlKTtcbiAgICAgICAgICAgIG9uQWN0aXZlU3RvcChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25LZXlVcCA9IGV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkgPyB1bmRlZmluZWQgOiAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCIgXCIgJiYgIWV4Y2x1ZGVzKFwic3BhY2VcIiwgZXhjbHVkZSkpXG4gICAgICAgICAgICBvbkFjdGl2ZVN0b3AoZSk7XG4gICAgfTtcbiAgICBjb25zdCBvbkNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5kZXRhaWwgPiAxKSB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChwcm9wcykgPT4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24sIG9uS2V5VXAsIG9uQmx1ciwgb25Nb3VzZURvd24sIG9uTW91c2VVcCwgb25Nb3VzZU91dCwgb25DbGljaywgLi4ueyBcImRhdGEtcHNldWRvLWFjdGl2ZVwiOiBhY3RpdmUgPyBcInRydWVcIiA6IHVuZGVmaW5lZCB9IH0sIHByb3BzKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvbih7IHRhZywgcHJlc3NlZCwgb25QcmVzcyB9KSB7XG4gICAgZnVuY3Rpb24gdXNlQXJpYUJ1dHRvblByb3BzKHsgXCJhcmlhLXByZXNzZWRcIjogYXJpYVByZXNzZWQsIHRhYkluZGV4LCByb2xlLCAuLi5wIH0pIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycygoZSkgPT4gb25QcmVzcz8uKGVuaGFuY2VFdmVudChlLCB7IHByZXNzZWQ6IHByZXNzZWQgPT0gbnVsbCA/IG51bGwgOiAhcHJlc3NlZCB9KSksIHVuZGVmaW5lZCkocCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvblByb3BzID0geyByb2xlLCB0YWJJbmRleCwgXCJhcmlhLXByZXNzZWRcIjogYXJpYVByZXNzZWQgPz8gKHByZXNzZWQgPT09IHRydWUgPyBcInRydWVcIiA6IHByZXNzZWQgPT09IGZhbHNlID8gXCJmYWxzZVwiIDogdW5kZWZpbmVkKSB9O1xuICAgICAgICBjb25zdCBkaXZQcm9wcyA9IHsgLi4uYnV0dG9uUHJvcHMsIHRhYkluZGV4OiB0YWJJbmRleCA/PyAwLCByb2xlOiByb2xlID8/IFwiYnV0dG9uXCIgfTtcbiAgICAgICAgY29uc3QgYW5jaG9yUHJvcHMgPSB7IC4uLmRpdlByb3BzIH07XG4gICAgICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYnV0dG9uUHJvcHMsIHByb3BzKTtcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYW5jaG9yUHJvcHMsIHByb3BzKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoZGl2UHJvcHMsIHByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VBcmlhQnV0dG9uUHJvcHNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDaGlsZEZsYWcsIHVzZUNoaWxkTWFuYWdlciwgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaW5lYXJOYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb24oeyBleHBhbmRlZEluZGV4LCBzZXRFeHBhbmRlZEluZGV4IH0pIHtcbiAgICBjb25zdCBbbGFzdEZvY3VzZWRJbmRleCwgc2V0TGFzdEZvY3VzZWRJbmRleCwgZ2V0TGFzdEZvY3VzZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBzdGFibGVTZXRFeHBhbmRlZEluZGV4ID0gdXNlU3RhYmxlQ2FsbGJhY2soc2V0RXhwYW5kZWRJbmRleCA/PyAoKCkgPT4geyB9KSk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9ucywgdXNlTWFuYWdlZENoaWxkOiB1c2VNYW5hZ2VkQ2hpbGRTZWN0aW9uIH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvRmlyc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoKDApKTsgfSwgW10pO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9MYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBzZXRMYXN0Rm9jdXNlZEluZGV4KChtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMubGVuZ3RoIC0gMSkpOyB9LCBbXSk7XG4gICAgY29uc3QgbmF2aWdhdGVUb1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldExhc3RGb2N1c2VkSW5kZXgoaSA9PiAoKGkgPz8gMCkgLSAxKSk7IH0sIFtdKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChpID0+ICgoaSA/PyAwKSArIDEpKTsgfSwgW10pO1xuICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkIH0gPSB1c2VMaW5lYXJOYXZpZ2F0aW9uKHsgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsIG5hdmlnYXRpb25EaXJlY3Rpb246IFwiYmxvY2tcIiwgaW5kZXg6IGdldExhc3RGb2N1c2VkSW5kZXgoKSwgbmF2aWdhdGVUb0ZpcnN0LCBuYXZpZ2F0ZVRvTGFzdCwgbmF2aWdhdGVUb1ByZXYsIG5hdmlnYXRlVG9OZXh0IH0pO1xuICAgIC8vIEFueSB0aW1lIGxpc3QgbWFuYWdlbWVudCBjaGFuZ2VzIHRoZSBmb2N1c2VkIGluZGV4LCBtYW51YWxseSBmb2N1cyB0aGUgY2hpbGRcbiAgICAvLyBUT0RPOiBDYW4gdGhpcyBiZSBjdXQ/XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGxhc3RGb2N1c2VkSW5kZXggIT0gbnVsbCAmJiBsYXN0Rm9jdXNlZEluZGV4ID49IDApXG4gICAgICAgICAgICBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbbGFzdEZvY3VzZWRJbmRleF0/LmZvY3VzKCk7XG4gICAgfSwgW2xhc3RGb2N1c2VkSW5kZXhdKTtcbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogZXhwYW5kZWRJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuOiBtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnMsXG4gICAgICAgIHNldENoaWxkRmxhZzogKGksIG9wZW4pID0+IG1hbmFnZWRBY2NvcmRpb25TZWN0aW9uc1tpXT8uc2V0T3BlbkZyb21QYXJlbnQob3BlbiksXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IChtYW5hZ2VkQWNjb3JkaW9uU2VjdGlvbnNbaV0/LmdldE9wZW5Gcm9tUGFyZW50KCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbiA9IHVzZUNhbGxiYWNrKChhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJncy5pbmRleDtcbiAgICAgICAgY29uc3QgW29wZW5Gcm9tUGFyZW50LCBzZXRPcGVuRnJvbVBhcmVudCwgZ2V0T3BlbkZyb21QYXJlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHsgcmFuZG9tSWQ6IGJvZHlSYW5kb21JZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtYWNjb3JkaW9uLXNlY3Rpb24tYm9keS1cIiB9KTtcbiAgICAgICAgY29uc3QgeyByYW5kb21JZDogaGVhZFJhbmRvbUlkLCB1c2VSYW5kb21JZFByb3BzOiB1c2VIZWFkUmFuZG9tSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRIZWFkSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1hY2NvcmRpb24tc2VjdGlvbi1oZWFkZXItXCIgfSk7XG4gICAgICAgIGxldCBvcGVuID0gKChhcmdzLm9wZW4gPz8gb3BlbkZyb21QYXJlbnQpID8/IG51bGwpO1xuICAgICAgICAvLyBUT0RPOiBDb252ZXJ0IHRvIHVzZSB1c2VNYW5hZ2VkQ2hpbGQgc28gdGhhdCB0aGlzIGhvb2sgXG4gICAgICAgIC8vIGlzIHN0YWJsZSB3aXRob3V0IChkaXJlY3RseSkgZGVwZW5kaW5nIG9uIHRoZSBvcGVuIHN0YXRlLlxuICAgICAgICBjb25zdCB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyKHsgdGFnIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gdXNlQ2FsbGJhY2soKCkgPT4geyBnZXRFbGVtZW50KCk/LmZvY3VzKCk7IH0sIFtdKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRDaGlsZFNlY3Rpb24oeyBpbmRleCwgb3Blbiwgc2V0T3BlbkZyb21QYXJlbnQsIGdldE9wZW5Gcm9tUGFyZW50LCBmb2N1cyB9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkUHJvcHMgfSA9IHVzZUxpbmVhck5hdmlnYXRpb25DaGlsZCh7IGluZGV4IH0pO1xuICAgICAgICAgICAgZnVuY3Rpb24gdXNlQXJpYUFjY29yZGlvblNlY3Rpb25IZWFkZXJQcm9wcyh7IFtcImFyaWEtZXhwYW5kZWRcIl06IGFyaWFFeHBhbmRlZCwgW1wiYXJpYS1kaXNhYmxlZFwiXTogYXJpYURpc2FibGVkLCAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25Gb2N1cyA9ICgpID0+IHsgc2V0TGFzdEZvY3VzZWRJbmRleChhcmdzLmluZGV4KTsgfTtcbiAgICAgICAgICAgICAgICBsZXQgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE9wZW5Gcm9tUGFyZW50KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFibGVTZXRFeHBhbmRlZEluZGV4KGFyZ3MuaW5kZXgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IHJldEIgPSB1c2VNZXJnZWRQcm9wcygpKHsgdGFiSW5kZXg6IDAgfSwgdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMob25DbGljaywgdW5kZWZpbmVkKShwcm9wcykpO1xuICAgICAgICAgICAgICAgIGxldCByZXQzID0gdXNlTWVyZ2VkUHJvcHMoKSh1c2VIZWFkUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkQm9keUlkUHJvcHMoXCJhcmlhLWNvbnRyb2xzXCIpKHtcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IChhcmlhRXhwYW5kZWQgPz8gKCEhb3BlbikudG9TdHJpbmcoKSksXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiAoYXJpYURpc2FibGVkID8/IChvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQpKSxcbiAgICAgICAgICAgICAgICAgICAgLi4udXNlUmVmRWxlbWVudFByb3BzKHVzZU1hbmFnZWRDaGlsZFByb3BzKHJldEIpKVxuICAgICAgICAgICAgICAgIH0pKSwgeyBvbkZvY3VzIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VMaW5lYXJOYXZpZ2F0aW9uQ2hpbGRQcm9wcyhyZXQzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHJldHVybiB7IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uSGVhZGVyUHJvcHMgfTtcbiAgICAgICAgfSwgW2luZGV4LCBvcGVuXSk7XG4gICAgICAgIGNvbnN0IHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keVByb3BzKHsgcm9sZSwgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgICAgIGxldCByZXQxID0gdXNlUmVmZXJlbmNlZEhlYWRJZFByb3BzKFwiYXJpYS1sYWJlbGxlZGJ5XCIpKHsgcm9sZTogcm9sZSA/PyBcInJlZ2lvblwiLCAuLi5wcm9wcyB9KTtcbiAgICAgICAgICAgICAgICBsZXQgcmV0MiA9IHVzZUJvZHlSYW5kb21JZFByb3BzKHJldDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkJvZHlQcm9wc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhwYW5kZWQ6IG9wZW4sXG4gICAgICAgICAgICB1c2VBcmlhQWNjb3JkaW9uU2VjdGlvbkhlYWRlcixcbiAgICAgICAgICAgIHVzZUFyaWFBY2NvcmRpb25TZWN0aW9uQm9keSxcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlTGluZWFyTmF2aWdhdGlvbkNoaWxkXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlQXJpYUFjY29yZGlvblNlY3Rpb25cbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFjY29yZGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi91c2UtYnV0dG9uXCI7XG4vKipcbiAqIEFkZHMgYW4gSUQgYW5kIFwiYXJpYS1sYWJlbGxlZGJ5XCIgZm9yIHR3byBlbGVtZW50cywgYW4gXCJpbnB1dFwiIGVsZW1lbnQgYW5kIGEgXCJsYWJlbFwiIGVsZW1lbnQuXG4gKlxuICogUmV0dXJucyB0aGUgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBob29rcyBpZiB5b3UgbmVlZCB0byBhbHNvIGFkZCBvdGhlciBJRC1yZWZlcmVuY2luZyBhdHRyaWJ1dGVzLCBsaWtlIGBmb3JgXG4gKlxuICogQHNlZSB1c2VJbnB1dExhYmVsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeCwgaW5wdXRQcmVmaXgsIGJhY2t1cFRleHQgfSA9IHsgbGFiZWxQcmVmaXg6IFwibGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImlucHV0LVwiIH0pIHtcbiAgICBjb25zdCBbbGFiZWxFbGVtZW50LCBzZXRMYWJlbEVsZW1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lucHV0RWxlbWVudCwgc2V0SW5wdXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0TGFiZWxFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZUxhYmVsUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRMYWJlbEVsZW1lbnQgfSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRJbnB1dEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wczogdXNlSW5wdXRSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldElucHV0RWxlbWVudCB9KTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZUxhYmVsUmFuZG9tSWRQcm9wcywgaWQ6IGxhYmVsSWQsIHJhbmRvbUlkOiBsYWJlbFJhbmRvbUlkLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IGxhYmVsUHJlZml4IH0pO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlSW5wdXRSYW5kb21JZFByb3BzLCBpZDogaW5wdXRJZCwgcmFuZG9tSWQ6IGlucHV0UmFuZG9tSWQsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogaW5wdXRQcmVmaXggfSk7XG4gICAgY29uc3QgbGFiZWxIYXNNb3VudGVkID0gISEobGFiZWxFbGVtZW50KTtcbiAgICBjb25zdCBpbnB1dEhhc01vdW50ZWQgPSAhIShpbnB1dEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbExhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzOiAocHJvcHMpID0+IHsgcmV0dXJuIHVzZUxhYmVsUmFuZG9tSWRQcm9wcyh1c2VMYWJlbFJlZkVsZW1lbnRQcm9wcyhwcm9wcykpOyB9XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZUdlbmVyaWNMYWJlbElucHV0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VHZW5lcmljTGFiZWxJbnB1dFByb3BzOiAoeyBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieSwgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAodXNlSW5wdXRSYW5kb21JZFByb3BzKHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMoXCJhcmlhLWxhYmVsbGVkYnlcIikodXNlSW5wdXRSZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IFwiYXJpYS1sYWJlbFwiOiAoIWxhYmVsSGFzTW91bnRlZCA/IGJhY2t1cFRleHQgOiBhcmlhTGFiZWwpID8/IGFyaWFMYWJlbCB9LCBwcm9wcykpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtsYWJlbEhhc01vdW50ZWRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VHZW5lcmljTGFiZWxJbnB1dCxcbiAgICAgICAgdXNlR2VuZXJpY0xhYmVsTGFiZWwsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRMYWJlbElkUHJvcHMsXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJbnB1dElkUHJvcHMsXG4gICAgICAgIGxhYmVsSWQsXG4gICAgICAgIGlucHV0SWQsXG4gICAgICAgIGxhYmVsRWxlbWVudCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICBnZXRMYWJlbEVsZW1lbnQsXG4gICAgICAgIGdldElucHV0RWxlbWVudCxcbiAgICB9O1xufVxuLyoqXG4gKiBIYW5kbGVzIHRoZSBhdHRyaWJ1dGVzIGBpZGAsIGBmb3JgLCBhbmQgYGFyaWEtbGFiZWxsZWRieWAgZm9yIHRvIHJlbGF0ZWQgZWxlbWVudHMuXG4gKlxuICogSXQncyBhc3N1bWVkIHRoYXQgdGhlIGxhYmVsIGlzIGFuIGBIVE1MTGFiZWxFbGVtZW50YCwgYW5kIHRoZSBpbnB1dCBpcyBzb21ldGhpbmcgZm9yIHdoaWNoXG4gKiB0aGUgYGZvcmAgYXR0cmlidXRlIGNhbiByZWZlcmVuY2UuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5wdXRMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9ID0geyBsYWJlbFByZWZpeDogXCJsYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiaW5wdXQtXCIgfSkge1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzLCBpbnB1dElkLCBsYWJlbElkLCBpbnB1dEVsZW1lbnQsIGdldElucHV0RWxlbWVudCwgbGFiZWxFbGVtZW50LCBnZXRMYWJlbEVsZW1lbnQgfSA9IHVzZUdlbmVyaWNMYWJlbCh7IGxhYmVsUHJlZml4LCBpbnB1dFByZWZpeCB9KTtcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsTGFiZWwoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMgfSA9IHVzZUdlbmVyaWNMYWJlbExhYmVsKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VJbnB1dExhYmVsTGFiZWxQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhGb3IgPSB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzKFwiZm9yXCIpKHByb3BzKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aXRob3V0Rm9yID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHModGFnID09IFwibGFiZWxcIiA/IHdpdGhGb3IgOiB3aXRob3V0Rm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbdXNlR2VuZXJpY0xhYmVsSW5wdXRdKTtcbiAgICBjb25zdCB1c2VJbnB1dExhYmVsSW5wdXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VJbnB1dExhYmVsSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZUlucHV0TGFiZWxJbnB1dFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMocHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFt1c2VHZW5lcmljTGFiZWxMYWJlbF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUlucHV0TGFiZWxMYWJlbCxcbiAgICAgICAgdXNlSW5wdXRMYWJlbElucHV0LFxuICAgICAgICBsYWJlbElkLFxuICAgICAgICBpbnB1dElkLFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIGxhYmVsRWxlbWVudCxcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50LFxuICAgICAgICBnZXRMYWJlbEVsZW1lbnRcbiAgICB9O1xufVxuY29uc3QgaGFuZGxlc0lucHV0ID0gKHRhZywgbGFiZWxQb3NpdGlvbiwgd2hpY2gpID0+IHtcbiAgICBpZiAobGFiZWxQb3NpdGlvbiA9PT0gXCJzZXBhcmF0ZVwiKSB7XG4gICAgICAgIGlmICh3aGljaCA9PT0gXCJpbnB1dC1lbGVtZW50XCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAod2hpY2ggPT09IFwibGFiZWwtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIHRhZyAhPSBcImlucHV0XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhYmVsUG9zaXRpb24gPT09IFwid3JhcHBpbmdcIikge1xuICAgICAgICBpZiAod2hpY2ggPT09IFwiaW5wdXQtZWxlbWVudFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAod2hpY2ggPT0gXCJsYWJlbC1lbGVtZW50XCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuLyoqXG4gKiBIYW5kbGVzIGxhYmVsIHR5cGUgKHdyYXBwaW5nIG9yIHNlcGFyYXRlKSBmb3IgY2hlY2tib3hlcywgcmFkaW9zLCBzd2l0Y2hlcywgZXRjLlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZSh7IGNoZWNrZWQsIGRpc2FibGVkLCBsYWJlbFBvc2l0aW9uLCBvbklucHV0LCByb2xlIH0pIHtcbiAgICBjb25zdCBzdGFibGVPbklucHV0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBvbklucHV0Py4oZSk7IH0pO1xuICAgIGNvbnN0IHsgaW5wdXRJZCwgbGFiZWxJZCwgdXNlSW5wdXRMYWJlbElucHV0OiB1c2VJTElucHV0LCB1c2VJbnB1dExhYmVsTGFiZWw6IHVzZUlMTGFiZWwsIGdldExhYmVsRWxlbWVudCwgZ2V0SW5wdXRFbGVtZW50IH0gPSB1c2VJbnB1dExhYmVsKHsgbGFiZWxQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1sYWJlbC1cIiwgaW5wdXRQcmVmaXg6IFwiYXJpYS1jaGVja2JveC1pbnB1dC1cIiB9KTtcbiAgICBjb25zdCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgdXNlSW5wdXRMYWJlbElucHV0UHJvcHM6IHVzZUlMSW5wdXRQcm9wcyB9ID0gdXNlSUxJbnB1dCgpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIC8vIG9uQ2xpY2sgYW5kIG9uQ2hhbmdlIGFyZSBhIGJpdCBtZXNzeSwgc28gd2UgbmVlZCB0b1xuICAgICAgICAvLyAqYWx3YXlzKiBtYWtlIHN1cmUgdGhhdCB0aGUgdmlzaWJsZSBzdGF0ZSBpcyBjb3JyZWN0XG4gICAgICAgIC8vIGFmdGVyIGFsbCB0aGUgZXZlbnQgZHVzdCBzZXR0bGVzLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMjc0NSxcbiAgICAgICAgLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzE4OTkjaXNzdWVjb21tZW50LTUyNTY5MDE5NFxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHRhZyA9PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFnLCBjaGVja2VkXSk7XG4gICAgICAgIHJldHVybiB7IGdldElucHV0RWxlbWVudDogZ2V0RWxlbWVudCwgdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMgfTtcbiAgICAgICAgZnVuY3Rpb24gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XG4gICAgICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIENocm9tZSB3b24ndCBmaXJlIG9uSW5wdXQgZXZlbnRzIGZvciByYWRpbyBidXR0b25zIHRoYXQgYXJlIHRhYkluZGV4PS0xPz9cbiAgICAgICAgICAgIC8vIE5lZWRzIGludmVzdGlnYXRpbmcsIGJ1dCBvbklucHV0IHdvcmtzIGZpbmUgaW4gRmlyZWZveFxuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMoZGlzYWJsZWQgfHwgIWhhbmRsZXNJbnB1dCh0YWcsIGxhYmVsUG9zaXRpb24sIFwiaW5wdXQtZWxlbWVudFwiKSA/IHVuZGVmaW5lZCA6IHN0YWJsZU9uSW5wdXQsIHVuZGVmaW5lZCkoe30pO1xuICAgICAgICAgICAgaWYgKHRhZyA9PSBcImlucHV0XCIpXG4gICAgICAgICAgICAgICAgcHJvcHMub25JbnB1dCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwcm9wcyA9IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VJTElucHV0UHJvcHMocHJvcHMpKTtcbiAgICAgICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09IFwid3JhcHBpbmdcIikge1xuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhlIHdyYXBwZWQgbGFiZWwgaGFuZGxlcyBhbGwgaW50ZXJhY3Rpb25zLFxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoaXMgZWxlbWVudCBjYW4ndCBiZSBpbnRlcmFjdGVkIHdpdGhcbiAgICAgICAgICAgICAgICAvLyBldmVuIGlmIGl0J3MgYW4gaW5wdXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwcm9wcy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcHJvcHMudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkZvY3VzID0gZSA9PiBnZXRMYWJlbEVsZW1lbnQoKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IHJvbGU7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJhcmlhLWNoZWNrZWRcIl0gPSBjaGVja2VkID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBsYWJlbCBjbGlja3MgY2FuJ3QgYWZmZWN0IHRoZSBjaGVja2JveCB3aGlsZSBpdCdzIGRpc2FibGVkXG4gICAgICAgICAgICBwcm9wcy5vbkNsaWNrID0gZGlzYWJsZWQgPyAoKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KSA6IHByb3BzLm9uQ2xpY2s7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShwMCwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUlMSW5wdXQsIHJvbGUsIGxhYmVsUG9zaXRpb24sIGRpc2FibGVkLCBjaGVja2VkXSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlQ2hlY2tib3hMYWJlbEVsZW1lbnQoeyB0YWcgfSkge1xuICAgICAgICBjb25zdCB7IHVzZUlucHV0TGFiZWxMYWJlbFByb3BzOiB1c2VJTExhYmVsUHJvcHMgfSA9IHVzZUlMTGFiZWwoeyB0YWcgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzKHsgLi4ucDAgfSkge1xuICAgICAgICAgICAgbGV0IG5ld1Byb3BzID0gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMoZGlzYWJsZWQgfHwgIWhhbmRsZXNJbnB1dCh0YWcsIGxhYmVsUG9zaXRpb24sIFwibGFiZWwtZWxlbWVudFwiKSA/IHVuZGVmaW5lZCA6IHN0YWJsZU9uSW5wdXQsIHVuZGVmaW5lZCkoe30pO1xuICAgICAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT0gXCJ3cmFwcGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzLnJvbGUgPSByb2xlO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1kaXNhYmxlZFwiXSA9IGRpc2FibGVkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJhcmlhLWNoZWNrZWRcIl0gPSBjaGVja2VkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgb25lIGNhc2Ugd2hlcmUgdGhlcmUncyBhbG1vc3Qgbm90aGluZyB0byBkb1xuICAgICAgICAgICAgICAgIC8vIFRoZSBtb3N0IG5vcm1hbCBjYXNlIHdoZXJlIGV2ZXJ5dGhpbmcgYWN0cyBhY2NvcmRpbmcgbm9ybWFsIEhUTUwgbWVjaGFuaWNzLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSnVzdCBtYWtlIHN1cmUgdGhhdCBsYWJlbCBjbGlja3MgY2FuJ3QgYWZmZWN0IHRoZSBjaGVja2JveCB3aGlsZSBpdCdzIGRpc2FibGVkXG4gICAgICAgICAgICBuZXdQcm9wcy5vbkNsaWNrID0gZGlzYWJsZWQgPyAoKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KSA6IG5ld1Byb3BzLm9uQ2xpY2s7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgdXNlSUxMYWJlbFByb3BzKHAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbdXNlSUxMYWJlbCwgZGlzYWJsZWQsIGNoZWNrZWQsIHJvbGUsIGxhYmVsUG9zaXRpb25dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsXG4gICAgICAgIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCxcbiAgICAgICAgZ2V0TGFiZWxFbGVtZW50LFxuICAgICAgICBnZXRJbnB1dEVsZW1lbnRcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxhYmVsLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZUNoZWNrYm94TGlrZSB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFDaGVja2JveCh7IGxhYmVsUG9zaXRpb24sIGNoZWNrZWQsIG9uSW5wdXQsIGRpc2FibGVkIH0pIHtcbiAgICBjb25zdCBvbklucHV0RW5oYW5jZWQgPSAoZSkgPT4gb25JbnB1dD8uKGVuaGFuY2VFdmVudChlLCB7IGNoZWNrZWQ6ICFjaGVja2VkIH0pKTtcbiAgICBjb25zdCB7IGdldElucHV0RWxlbWVudCwgZ2V0TGFiZWxFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnQsIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudCB9ID0gdXNlQ2hlY2tib3hMaWtlKHsgY2hlY2tlZDogISFjaGVja2VkLCBsYWJlbFBvc2l0aW9uLCByb2xlOiBcImNoZWNrYm94XCIsIGRpc2FibGVkLCBvbklucHV0OiBvbklucHV0RW5oYW5jZWQgfSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hJbnB1dEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VDaGVja2JveElucHV0RWxlbWVudCh7IHRhZyB9KSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0SW5wdXRFbGVtZW50LCB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlSW5wdXRFbGVtZW50KHsgdGFnIH0pO1xuICAgICAgICBjb25zdCBpc01peGVkID0gKGNoZWNrZWQgPT0gXCJtaXhlZFwiKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGdldElucHV0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudCAmJiB0YWcgPT09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pbmRldGVybWluYXRlID0gaXNNaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2lzTWl4ZWQsIHRhZ10pO1xuICAgICAgICByZXR1cm4geyB1c2VDaGVja2JveElucHV0RWxlbWVudFByb3BzIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50UHJvcHMoeyAuLi5wMCB9KSB7XG4gICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VDaGVja2JveExpa2VJbnB1dEVsZW1lbnRQcm9wcyhwMCk7XG4gICAgICAgICAgICBwcm9wcy5jaGVja2VkID8/PSAhIWNoZWNrZWQ7XG4gICAgICAgICAgICBpZiAodGFnID09IFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICBwcm9wcy50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9XG4gICAgfSwgW3VzZUNoZWNrYm94TGlrZUlucHV0RWxlbWVudCwgY2hlY2tlZCwgbGFiZWxQb3NpdGlvbiwgZGlzYWJsZWRdKTtcbiAgICBjb25zdCB1c2VDaGVja2JveExhYmVsRWxlbWVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUNoZWNrYm94TGFiZWxFbGVtZW50KHsgdGFnIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VDaGVja2JveExpa2VMYWJlbEVsZW1lbnRQcm9wcyB9ID0gdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50KHsgdGFnIH0pO1xuICAgICAgICBmdW5jdGlvbiB1c2VDaGVja2JveExhYmVsRWxlbWVudFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZUNoZWNrYm94TGlrZUxhYmVsRWxlbWVudFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB7IHVzZUNoZWNrYm94TGFiZWxFbGVtZW50UHJvcHMgfTtcbiAgICB9LCBbdXNlQ2hlY2tib3hMaWtlTGFiZWxFbGVtZW50LCBkaXNhYmxlZCwgbGFiZWxQb3NpdGlvbl0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUNoZWNrYm94SW5wdXRFbGVtZW50LFxuICAgICAgICB1c2VDaGVja2JveExhYmVsRWxlbWVudFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtY2hlY2tib3guanMubWFwIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCwgZW5oYW5jZUV2ZW50IH0gZnJvbSBcIi4vcHJvcHNcIjtcbi8qKlxuICpcbiAqXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tib3hHcm91cCh7IGNvbGxhdG9yLCBrZXlOYXZpZ2F0aW9uLCBzaG91bGRGb2N1c09uQ2hhbmdlLCBvblVwZGF0ZUNoaWxkcmVuOiBvblVwZGF0ZUNoaWxkcmVuVW5zdGFibGUgfSkge1xuICAgIGNvbnN0IG9uVXBkYXRlQ2hpbGRyZW4gPSB1c2VTdGFibGVDYWxsYmFjayhvblVwZGF0ZUNoaWxkcmVuVW5zdGFibGUpO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIHNob3VsZEZvY3VzT25DaGFuZ2UgfSk7XG4gICAgLy9jb25zdCBbdW5jaGVja2VkQ291bnQsIHNldFVuaGVja2VkQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2NoZWNrZWRDb3VudCwgc2V0Q2hlY2tlZENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNoZWNrZWRJbmRpY2VzID0gdXNlUmVmKG5ldyBTZXQoKSk7XG4gICAgLy9jb25zdCBbc2VsZklzQ2hlY2tlZCwgc2V0U2VsZklzQ2hlY2tlZCwgZ2V0U2VsZklzQ2hlY2tlZF0gPSB1c2VTdGF0ZTxib29sZWFuIHwgXCJtaXhlZFwiPihmYWxzZSk7XG4gICAgY29uc3QgZ2V0U2VsZklzQ2hlY2tlZFVuc3RhYmxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IGNoZWNrZWRDb3VudCAvIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCI7XG4gICAgfSwgW2NoZWNrZWRDb3VudCwgbWFuYWdlZENoaWxkcmVuLmxlbmd0aF0pO1xuICAgIGNvbnN0IGdldFNlbGZJc0NoZWNrZWRTdGFibGUgPSB1c2VTdGFibGVDYWxsYmFjayhnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUpO1xuICAgIC8vIElmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSBwYXJlbnQgY2hlY2tib3gncyB2YWx1ZSwgdGhlbiB0aGlzIHJlZiBob2xkcyBhIG1lbW9yeSBvZiB3aGF0IHZhbHVlcyB3ZXJlIGhlbGQgYmVmb3JlLlxuICAgIC8vIE90aGVyd2lzZSwgaXQncyBudWxsIHdoZW4gdGhlIGxhc3QgaW5wdXQgd2FzIGZyb20gYSBjaGlsZCBjaGVja2JveC4gXG4gICAgY29uc3Qgc2F2ZWRDaGVja2VkVmFsdWVzID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG9uQ2hlY2tib3hHcm91cFBhcmVudElucHV0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxmSXNDaGVja2VkID0gZ2V0U2VsZklzQ2hlY2tlZFN0YWJsZSgpO1xuICAgICAgICBpZiAoc2VsZklzQ2hlY2tlZCA9PT0gdHJ1ZSB8fCAoc2VsZklzQ2hlY2tlZCA9PT0gZmFsc2UgJiYgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvblVwZGF0ZUNoaWxkcmVuKGVuaGFuY2VFdmVudChlLCB7IGNoaWxkcmVuQ2hlY2tlZDogZmFsc2UgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGZJc0NoZWNrZWQgPT09IFwibWl4ZWRcIikge1xuICAgICAgICAgICAgc2F2ZWRDaGVja2VkVmFsdWVzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYW5hZ2VkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudC5zZXQoY2hpbGQuaW5kZXgsIGNoaWxkLmdldENoZWNrZWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb25VcGRhdGVDaGlsZHJlbihlbmhhbmNlRXZlbnQoZSwgeyBjaGlsZHJlbkNoZWNrZWQ6IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9uVXBkYXRlQ2hpbGRyZW4oZW5oYW5jZUV2ZW50KGUsIHsgY2hpbGRyZW5DaGVja2VkOiBzYXZlZENoZWNrZWRWYWx1ZXMuY3VycmVudCA/PyB0cnVlIH0pKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBLZWVwIHRyYWNrIG9mIGFsbCBjaGlsZCBJRHMsIGFuZCBhbnkgdGltZSBhbnkgb2YgdGhlbSBjaGFuZ2UsIFxuICAgIC8vIGdlbmVyYXRlIGEgbmV3IHN0cmluZyB3aXRoIGFsbCBvZiB0aGVtIGNvbmNhdGVuYXRlZCB0b2dldGhlclxuICAgIC8vIChidXQgb25seSBvbmNlIHBlciByZW5kZXIpO1xuICAgIGNvbnN0IGFsbElkcyA9IHVzZVJlZihuZXcgU2V0KCkpO1xuICAgIGNvbnN0IFthcmlhQ29udHJvbHMsIHNldEFyaWFDb250cm9sc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdXBkYXRlSW5kZXgsIHNldElkVXBkYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3Qgbm90aWZ5Q2hlY2tlZCA9IHVzZUNhbGxiYWNrKChpbmRleCwgY2hlY2tlZCkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFjaGVja2VkSW5kaWNlcy5jdXJyZW50LmhhcyhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ291bnQoYyA9PiAoYyArIDEpKTtcbiAgICAgICAgICAgICAgICBjaGVja2VkSW5kaWNlcy5jdXJyZW50LmFkZChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZEluZGljZXMuY3VycmVudC5oYXMoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENvdW50KGMgPT4gKGMgLSAxKSk7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEluZGljZXMuY3VycmVudC5kZWxldGUoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3NldENoZWNrZWRDb3VudCwgY2hlY2tlZEluZGljZXNdKTtcbiAgICAvKnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gY2hlY2tlZENvdW50IC8gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgc2V0U2VsZklzQ2hlY2tlZChwZXJjZW50YWdlIDw9IDAgPyBmYWxzZSA6IHBlcmNlbnRhZ2UgPj0gMSA/IHRydWUgOiBcIm1peGVkXCIpXG4gICAgfSwgW3NldFNlbGZJc0NoZWNrZWQsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGgsIGNoZWNrZWRDb3VudF0pOyovXG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cFBhcmVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgXCJhcmlhLWNvbnRyb2xzXCI6IGFyaWFDb250cm9scyB9LCBwcm9wcyk7XG4gICAgfSwgW2FyaWFDb250cm9sc10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEFyaWFDb250cm9scyhBcnJheS5mcm9tKGFsbElkcy5jdXJyZW50KS5qb2luKFwiIFwiKSk7XG4gICAgfSwgW3VwZGF0ZUluZGV4XSk7XG4gICAgY29uc3QgdXNlQ2hlY2tib3hHcm91cENoaWxkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHsgaW5kZXgsIHRleHQsIGNoZWNrZWQsIGlkLCAuLi5yZXN0IH0pIHtcbiAgICAgICAgY29uc3QgZ2V0Q2hlY2tlZCA9IHVzZVN0YWJsZUdldHRlcihjaGVja2VkKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGFsbElkcy5jdXJyZW50LmFkZChpZCk7XG4gICAgICAgICAgICBzZXRJZFVwZGF0ZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxsSWRzLmN1cnJlbnQuZGVsZXRlKGlkKTtcbiAgICAgICAgICAgICAgICBzZXRJZFVwZGF0ZUluZGV4KGkgPT4gKytpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtpZF0pO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5Q2hlY2tlZChpbmRleCwgY2hlY2tlZCk7XG4gICAgICAgIH0sIFtpbmRleCwgY2hlY2tlZF0pO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uU2libGluZ1Byb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgaW5kZXgsIHRleHQsIGlkLCBnZXRDaGVja2VkLCAuLi5yZXN0IH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFiYmFibGUsXG4gICAgICAgICAgICB1c2VDaGVja2JveEdyb3VwQ2hpbGRQcm9wczogdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHt9LCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHMocHJvcHMpKSwgW3VzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wc10pXG4gICAgICAgIH07XG4gICAgfSwgW25vdGlmeUNoZWNrZWQsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYW5hZ2VkQ2hlY2tib3hlczogbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICB1c2VDaGVja2JveEdyb3VwQ2hpbGQsXG4gICAgICAgIHVzZUNoZWNrYm94R3JvdXBQYXJlbnRQcm9wcyxcbiAgICAgICAgcGFyZW50SXNDaGVja2VkOiBnZXRTZWxmSXNDaGVja2VkVW5zdGFibGUoKSxcbiAgICAgICAgcGFyZW50UGVyY2VudENoZWNrZWQ6IChjaGVja2VkQ291bnQgLyBtYW5hZ2VkQ2hpbGRyZW4ubGVuZ3RoKSxcbiAgICAgICAgb25DaGVja2JveEdyb3VwUGFyZW50SW5wdXQsXG4gICAgICAgIHRhYmJhYmxlSW5kZXgsXG4gICAgICAgIGZvY3VzOiBmb2N1c0N1cnJlbnQsXG4gICAgICAgIGN1cnJlbnRUeXBlYWhlYWQsXG4gICAgICAgIGludmFsaWRUeXBlYWhlYWRcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWNoZWNrYm94LWdyb3VwLmpzLm1hcCIsImltcG9ydCB7IHVzZUZvY3VzVHJhcCwgdXNlR2xvYmFsSGFuZGxlciwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJhbmRvbUlkLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogQWRkcyBldmVudCBoYW5kbGVycyBmb3IgYSBtb2RhbC1saWtlIHNvZnQtZGlzbWlzcyBpbnRlcmFjdGlvbi5cbiAqXG4gKiBUaGF0IGlzLCBhbnkgY2xpY2tzIG9yIHRhcHMgb3V0c2lkZSBvZiB0aGUgZ2l2ZW4gY29tcG9uZW50LFxuICogb3IgYW55IHRpbWUgdGhlIEVzY2FwZSBrZXkgaXMgcHJlc3NlZCB3aXRoaW4gdGhlIGNvbXBvbmVudCxcbiAqICh3aXRoIHZhcmlvdXMgYnJvd3NlciBvZGRpdGllcyByZWdhcmRpbmcgY2xpY2tzIG9uIGJsYW5rIG9yIGluZXJ0IGFyZWFzIGhhbmRsZWQpXG4gKiB0aGUgY29tcG9uZW50IHdpbGwgcmVxdWVzdCB0byBjbG9zZSBpdHNlbGYuXG4gKlxuICogT2YgY291cnNlLCBpZiB5b3UgZG9uJ3QgZG8gYW55dGhpbmcgaW4gdGhlIGBvbkNsb3NlYCBmdW5jdGlvbixcbiAqIGl0IHdvbid0IGJlIGEgc29mdCBkaXNtaXNzIGFueW1vcmUuXG4gKlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvZnREaXNtaXNzKHsgb25DbG9zZSwgZ2V0RWxlbWVudHMgfSkge1xuICAgIGZ1bmN0aW9uIG9uQmFja2Ryb3BDbGljayhlKSB7XG4gICAgICAgIC8vIEJhc2ljYWxseSwgXCJ3YXMgdGhpcyBldmVudCBmaXJlZCBvbiB0aGUgcm9vdC1tb3N0IGVsZW1lbnQsIG9yIGF0IGxlYXN0IGFuIGVsZW1lbnQgbm90IGNvbnRhaW5lZCBieSB0aGUgbW9kYWw/XCJcbiAgICAgICAgLy8gRWl0aGVyIGNvdWxkIGJlIGhvdyB0aGUgYnJvd3NlciBoYW5kbGVzIHRoZXNlIHNvcnRzIG9mIFwiaW50ZXJhY3Rpbmcgd2l0aCBub3RoaW5nXCIgZXZlbnRzLlxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBvbkNsb3NlKFwiYmFja2Ryb3BcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0RWxlbWVudHMoKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzICYmIGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XG4gICAgICAgICAgICBsZXQgZm91bmRJbnNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZEluc2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmb3VuZEluc2lkZUNsaWNrKVxuICAgICAgICAgICAgICAgIG9uQ2xvc2UoXCJiYWNrZHJvcFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTaW5jZSBldmVyeXRoaW5nIGVsc2UgaXMgaW5lcnQsIHdlIGxpc3RlbiBmb3IgY2FwdHVyZWQgY2xpY2tzIG9uIHRoZSB3aW5kb3dcbiAgICAvLyAod2UgZG9uJ3QgdXNlIG9uQ2xpY2sgc2luY2UgdGhhdCBkb2Vzbid0IGZpcmUgd2hlbiBjbGlja2VkIG9uIGVtcHR5L2luZXJ0IGFyZWFzKVxuICAgIC8vIE5vdGU6IFdlIG5lZWQgYSAqc2VwYXJhdGUqIHRvdWNoIGV2ZW50IG9uIG1vYmlsZSBTYWZhcmksIGJlY2F1c2VcbiAgICAvLyBpdCBkb2Vzbid0IGxldCBjbGljayBldmVudHMgYnViYmxlIG9yIGJlIGNhcHR1cmVkIGZyb20gdHJhZGl0aW9uYWxseSBub24taW50ZXJhY3RpdmUgZWxlbWVudHMsXG4gICAgLy8gYnV0IHRvdWNoIGV2ZW50cyB3b3JrIGFzIGV4cGVjdGVkLlxuICAgIHVzZUdsb2JhbEhhbmRsZXIod2luZG93LCBcIm1vdXNlZG93blwiLCAhb3BlbiA/IG51bGwgOiBvbkJhY2tkcm9wQ2xpY2ssIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICB1c2VHbG9iYWxIYW5kbGVyKHdpbmRvdywgXCJ0b3VjaHN0YXJ0XCIsICFvcGVuID8gbnVsbCA6IG9uQmFja2Ryb3BDbGljaywgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIHVzZUdsb2JhbEhhbmRsZXIoZG9jdW1lbnQsIFwia2V5ZG93blwiLCAoZSkgPT4geyBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgb25DbG9zZShcImVzY2FwZVwiKTtcbiAgICB9IH0pO1xufVxuLyoqXG4gKiBBIGdlbmVyaWMgbW9kYWwgaG9vaywgdXNlZCBieSBtb2RhbCBkaWFsb2dzLCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgYnkgYW55dGhpbmcgdGhhdCdzIG1vZGFsIHdpdGggYSBiYWNrZHJvcC5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbCh7IG9wZW4sIG9uQ2xvc2UgfSkge1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlKTtcbiAgICBjb25zdCBbbW9kYWxEZXNjcmliZWRCeUJvZHksIHNldE1vZGFsRGVzY3JpYmVkQnlCb2R5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VIaWRlU2Nyb2xsKG9wZW4pO1xuICAgIGNvbnN0IHsgaWQ6IG1vZGFsSWQsIHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1vZGFsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZU1vZGFsUmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLVwiIH0pO1xuICAgIGNvbnN0IHsgaWQ6IGJvZHlJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlQm9keUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VCb2R5UmVmZXJlbmNpbmdJZFByb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLW1vZGFsLWJvZHktXCIgfSk7XG4gICAgY29uc3QgeyBpZDogdGl0bGVJZCwgdXNlUmFuZG9tSWRQcm9wczogdXNlVGl0bGVJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlVGl0bGVSZWZlcmVuY2luZ0lkUHJvcHMgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtbW9kYWwtdGl0bGUtXCIgfSk7XG4gICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHM6IHVzZU1vZGFsUmVmRWxlbWVudCwgZ2V0RWxlbWVudDogZ2V0TW9kYWxFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UsIGdldEVsZW1lbnRzOiBnZXRNb2RhbEVsZW1lbnQgfSk7XG4gICAgY29uc3QgdXNlTW9kYWxCYWNrZHJvcCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3AoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZU1vZGFsQmFja2Ryb3BQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBvblBvaW50ZXJVcDogKCkgPT4gc3RhYmxlT25DbG9zZShcImJhY2tkcm9wXCIpIH0sIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlTW9kYWxQcm9wcyA9IGZ1bmN0aW9uICh7IFwiYXJpYS1tb2RhbFwiOiBhcmlhTW9kYWwsIHJvbGUsIC4uLnAwIH0pIHtcbiAgICAgICAgY29uc3QgeyB1c2VGb2N1c1RyYXBQcm9wcyB9ID0gdXNlRm9jdXNUcmFwKHsgdHJhcEFjdGl2ZTogb3BlbiB9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VUaXRsZVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtbGFiZWxsZWRieVwiKShwMCk7XG4gICAgICAgIGNvbnN0IHAyID0gdXNlTW9kYWxJZFByb3BzKHAxKTtcbiAgICAgICAgY29uc3QgcEZpbmFsID0gdXNlQm9keVJlZmVyZW5jaW5nSWRQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikocDIpO1xuICAgICAgICByZXR1cm4gdXNlRm9jdXNUcmFwUHJvcHModXNlTWVyZ2VkUHJvcHMoKSh1c2VNb2RhbFJlZkVsZW1lbnQoeyByb2xlOiBcImRpYWxvZ1wiIH0pLCBtb2RhbERlc2NyaWJlZEJ5Qm9keSA/IHBGaW5hbCA6IHAyKSk7XG4gICAgfTtcbiAgICBjb25zdCB1c2VNb2RhbFRpdGxlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTW9kYWxUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgdXNlTW9kYWxUaXRsZVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlVGl0bGVJZFByb3BzKHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxUaXRsZVByb3BzIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZU1vZGFsQm9keSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZU1vZGFsQm9keSh7IGRlc2NyaXB0aXZlIH0pIHtcbiAgICAgICAgc2V0TW9kYWxEZXNjcmliZWRCeUJvZHkoZGVzY3JpcHRpdmUpO1xuICAgICAgICBjb25zdCB1c2VNb2RhbEJvZHlQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHVzZUJvZHlJZFByb3BzKHByb3BzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgdXNlTW9kYWxCb2R5UHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTW9kYWxQcm9wcyxcbiAgICAgICAgdXNlTW9kYWxUaXRsZSxcbiAgICAgICAgdXNlTW9kYWxCb2R5LFxuICAgICAgICB1c2VNb2RhbEJhY2tkcm9wXG4gICAgfTtcbn1cbi8qKlxuICogQWxsb3dzIGZvciBoaWRpbmcgdGhlIHNjcm9sbCBiYXIgb2YgdGhlIHJvb3QgSFRNTCBlbGVtZW50XG4gKiB3aXRob3V0IHNoaWZ0aW5nIHRoZSBsYXlvdXQgb2YgdGhlIHBhZ2UgbW9yZSB0aGFuIGFkZGluZyBhIGZvdyBwaXhlbHNcbiAqIG9mIHBhZGRpbmcgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBuZWNlc3NhcnkuXG4gKiBAcGFyYW0gaGlkZVNjcm9sbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSGlkZVNjcm9sbChoaWRlU2Nyb2xsKSB7XG4gICAgY29uc3QgW3Njcm9sbGJhcldpZHRoLCBzZXRTY3JvbGxiYXJXaWR0aCwgZ2V0U2Nyb2xsYmFyV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGhpZGVTY3JvbGwpIHtcbiAgICAgICAgICAgIGxldCB3aWR0aFdpdGhTY3JvbGxCYXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9ICgrKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0W1wic2Nyb2xsSGlkZXJzXCJdIHx8IFwiMFwiKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgd2lkdGhXaXRob3V0U2Nyb2xsQmFyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgbGV0IHNjcm9sbGJhcldpZHRoID0gKHdpZHRoV2l0aG91dFNjcm9sbEJhciAtIHdpZHRoV2l0aFNjcm9sbEJhcik7XG4gICAgICAgICAgICAvLyBGYWlsc2FmZSAtLSBpZiB0aGlzIG1lYXN1cmluZyB0cmljayBkb2VzIHNvbWV0aGluZyB1bmV4cGVjdGVkLCBqdXN0IGlnbm9yZSBpdFxuICAgICAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoID4gODApXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyV2lkdGggPSAwO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY3JvbGxiYXItd2lkdGhcIiwgYCR7c2Nyb2xsYmFyV2lkdGh9cHhgKTtcbiAgICAgICAgICAgIHNldFNjcm9sbGJhcldpZHRoKHNjcm9sbGJhcldpZHRoKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXRbXCJzY3JvbGxIaWRlcnNcIl0gPSAoKyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSB8fCBcIjBcIikgLSAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldFtcInNjcm9sbEhpZGVyc1wiXSA9PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zY3JvbGwtaGlkZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRvY3VtZW50LXNjcm9sbC1oaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFtoaWRlU2Nyb2xsXSk7XG4gICAgcmV0dXJuIHsgc2Nyb2xsYmFyV2lkdGgsIGdldFNjcm9sbGJhcldpZHRoIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbW9kYWwuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gXCIuL3VzZS1tb2RhbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFEaWFsb2coeyBvcGVuLCBvbkNsb3NlIH0pIHtcbiAgICAvLyBUT0RPOiBEaWZmZXJlbmNlcyBiZXR3ZWVuIGRpYWxvZyBhbmQgbW9kYWwgZ28gaGVyZSwgcHJlc3VtYWJseS5cbiAgICAvLyBOb24tbW9kYWwgZGlhbG9ncyBuZWVkIHRvIGJlIGFibGUgdG8gYmUgcmVwb3NpdGlvbmVkLCBldGMuXG4gICAgY29uc3QgeyB1c2VNb2RhbEJhY2tkcm9wLCB1c2VNb2RhbEJvZHksIHVzZU1vZGFsUHJvcHMsIHVzZU1vZGFsVGl0bGUgfSA9IHVzZU1vZGFsKHsgb3Blbiwgb25DbG9zZSB9KTtcbiAgICBjb25zdCB1c2VEaWFsb2dCYWNrZHJvcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VNb2RhbEJhY2tkcm9wUHJvcHMgfSA9IHVzZU1vZGFsQmFja2Ryb3AoKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nQmFja2Ryb3BQcm9wczogdXNlTW9kYWxCYWNrZHJvcFByb3BzIH07XG4gICAgfSwgW3VzZU1vZGFsQmFja2Ryb3BdKTtcbiAgICBjb25zdCB1c2VEaWFsb2dCb2R5ID0gdXNlQ2FsbGJhY2soKHsgZGVzY3JpcHRpdmUgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1vZGFsQm9keVByb3BzIH0gPSB1c2VNb2RhbEJvZHkoeyBkZXNjcmlwdGl2ZSB9KTtcbiAgICAgICAgcmV0dXJuIHsgdXNlRGlhbG9nQm9keVByb3BzOiB1c2VNb2RhbEJvZHlQcm9wcyB9O1xuICAgIH0sIFt1c2VNb2RhbEJhY2tkcm9wXSk7XG4gICAgY29uc3QgdXNlRGlhbG9nUHJvcHMgPSB1c2VNb2RhbFByb3BzO1xuICAgIGNvbnN0IHVzZURpYWxvZ1RpdGxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1vZGFsVGl0bGVQcm9wcyB9ID0gdXNlTW9kYWxUaXRsZSgpO1xuICAgICAgICByZXR1cm4geyB1c2VEaWFsb2dUaXRsZVByb3BzOiB1c2VNb2RhbFRpdGxlUHJvcHMgfTtcbiAgICB9LCBbdXNlTW9kYWxUaXRsZV0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZURpYWxvZ1Byb3BzLFxuICAgICAgICB1c2VEaWFsb2dUaXRsZSxcbiAgICAgICAgdXNlRGlhbG9nQm9keSxcbiAgICAgICAgdXNlRGlhbG9nQmFja2Ryb3BcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWRpYWxvZy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VIYXNGb2N1cywgdXNlTGF5b3V0RWZmZWN0LCB1c2VMaXN0TmF2aWdhdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcbmltcG9ydCB7IHVzZUdlbmVyaWNMYWJlbCB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94TXVsdGkoeyAuLi5hcmdzIH0pIHtcbiAgICBjb25zdCBbZm9jdXNlZElubmVyLCBzZXRGb2N1c2VkSW5uZXIsIGdldEZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB1c2VIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZElubmVyQ2hhbmdlZDogc2V0Rm9jdXNlZElubmVyIH0pO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXQsIHVzZUdlbmVyaWNMYWJlbExhYmVsLCB1c2VSZWZlcmVuY2VkSW5wdXRJZFByb3BzLCB1c2VSZWZlcmVuY2VkTGFiZWxJZFByb3BzIH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCBjdXJyZW50VHlwZWFoZWFkLCBmb2N1c0N1cnJlbnQsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0Rm9jdXNlZElubmVyIH0pO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCBbc2hpZnRIZWxkLCBzZXRTaGlmdEhlbGQsIGdldFNoaWZ0SGVsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdHlwZWFoZWFkSW5Qcm9ncmVzcyA9ICghIWN1cnJlbnRUeXBlYWhlYWQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5baV0uc2V0VHlwZWFoZWFkSW5Qcm9ncmVzcyh0eXBlYWhlYWRJblByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgIH0sIFt0eXBlYWhlYWRJblByb2dyZXNzLCBjaGlsZENvdW50XSk7XG4gICAgY29uc3QgdXNlTGlzdGJveE11bHRpSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gaW5mby5zZWxlY3RlZDtcbiAgICAgICAgY29uc3QgW3R5cGVhaGVhZEluUHJvZ3Jlc3MsIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBnZXRTZWxlY3RlZCA9IHVzZVN0YWJsZUdldHRlcihzZWxlY3RlZCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgY29uc3Qgc3RhYmxlT25TZWxlY3QgPSB1c2VTdGFibGVDYWxsYmFjayhpbmZvLm9uU2VsZWN0ID8/ICgoKSA9PiB7IH0pKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25TaWJsaW5nUHJvcHMsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IC4uLmluZm8sIHNldFR5cGVhaGVhZEluUHJvZ3Jlc3MgfSk7XG4gICAgICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZ2V0U2hpZnRIZWxkKCkpIHtcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgdGFyZ2V0OiBlbGVtZW50LCBjdXJyZW50VGFyZ2V0OiBlbGVtZW50LCBbRXZlbnREZXRhaWxdOiB7IHNlbGVjdGVkOiB0cnVlIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFt0YWJiYWJsZV0pO1xuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlJdGVtUHJvcHMsIHRhYmJhYmxlIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUl0ZW1Qcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycygoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9JbmRleChpbmZvLmluZGV4KTtcbiAgICAgICAgICAgICAgICBzdGFibGVPblNlbGVjdD8uKHsgLi4uZSwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZDogIWdldFNlbGVjdGVkKCkgfSB9KTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LCB7IHNwYWNlOiB0eXBlYWhlYWRJblByb2dyZXNzID8gXCJleGNsdWRlXCIgOiB1bmRlZmluZWQgfSkoe30pO1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2V0c2l6ZVwiXSA9IChjaGlsZENvdW50KS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHRhYmJhYmxlID8/IGZhbHNlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlTWVyZ2VkUHJvcHMoKShuZXdQcm9wcywgcHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgY2hpbGRDb3VudCwgdHlwZWFoZWFkSW5Qcm9ncmVzc10pO1xuICAgIGNvbnN0IHVzZUxpc3Rib3hNdWx0aUxhYmVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpTGFiZWwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hNdWx0aUxhYmVsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VHZW5lcmljTGFiZWxMYWJlbFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94TXVsdGlMYWJlbFByb3BzIH07XG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XG4gICAgcmV0dXJuIHsgdXNlTGlzdGJveE11bHRpSXRlbSwgdXNlTGlzdGJveE11bHRpUHJvcHMsIHVzZUxpc3Rib3hNdWx0aUxhYmVsLCB0YWJiYWJsZUluZGV4LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkLCBmb2N1czogZm9jdXNDdXJyZW50IH07XG4gICAgZnVuY3Rpb24gdXNlTGlzdGJveE11bHRpUHJvcHMocHJvcHMpIHtcbiAgICAgICAgcHJvcHMucm9sZSA9IFwibGlzdGJveFwiO1xuICAgICAgICBwcm9wc1tcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCJdID0gXCJ0cnVlXCI7XG4gICAgICAgIHJldHVybiB1c2VIYXNGb2N1c1Byb3BzKHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7IG9uS2V5RG93biwgb25LZXlVcCwgb25Gb2N1c091dCB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHsgaWYgKGUua2V5ID09IFwiU2hpZnRcIilcbiAgICAgICAgc2V0U2hpZnRIZWxkKHRydWUpOyB9XG4gICAgZnVuY3Rpb24gb25LZXlVcChlKSB7IGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpXG4gICAgICAgIHNldFNoaWZ0SGVsZChmYWxzZSk7IH1cbiAgICBmdW5jdGlvbiBvbkZvY3VzT3V0KGUpIHsgc2V0U2hpZnRIZWxkKGZhbHNlKTsgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxpc3Rib3gtbXVsdGkuanMubWFwIiwiaW1wb3J0IHsgdXNlQWN0aXZlRWxlbWVudCwgdXNlQ2hpbGRGbGFnLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VCdXR0b25MaWtlRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL3VzZS1idXR0b25cIjtcbmltcG9ydCB7IHVzZUdlbmVyaWNMYWJlbCB9IGZyb20gXCIuL3VzZS1sYWJlbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFMaXN0Ym94U2luZ2xlKHsgc2VsZWN0ZWRJbmRleCwgb25TZWxlY3QsIHNlbGVjdGlvbk1vZGUsIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IFthbnlJdGVtc0ZvY3VzZWQsIHNldEFueUl0ZW1zRm9jdXNlZCwgZ2V0QW55SXRlbXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHVzZUdlbmVyaWNMYWJlbElucHV0LCB1c2VHZW5lcmljTGFiZWxMYWJlbCwgdXNlUmVmZXJlbmNlZElucHV0SWRQcm9wcywgdXNlUmVmZXJlbmNlZExhYmVsSWRQcm9wcywgaW5wdXRFbGVtZW50IH0gPSB1c2VHZW5lcmljTGFiZWwoeyBsYWJlbFByZWZpeDogXCJhcmlhLWxpc3Rib3gtbGFiZWwtXCIsIGlucHV0UHJlZml4OiBcImFyaWEtbGlzdGJveC1cIiB9KTtcbiAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIG5hdmlnYXRlVG9JbmRleCwgbWFuYWdlZENoaWxkcmVuLCBzZXRUYWJiYWJsZUluZGV4LCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfSA9IHVzZUxpc3ROYXZpZ2F0aW9uKHsgLi4uYXJncywgc2hvdWxkRm9jdXNPbkNoYW5nZTogZ2V0QW55SXRlbXNGb2N1c2VkIH0pO1xuICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsSW5wdXRQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsSW5wdXQoKTtcbiAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uU2VsZWN0ID8/ICgoKSA9PiB7IH0pKTtcbiAgICAvLyBUcmFjayB3aGV0aGVyIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIGxpc3QgYm94IHBhcmVudCBlbGVtZW50LlxuICAgIC8vIFdoZW4gaXQncyBub3QsIHdlIHJlc2V0IHRoZSB0YWJiYWJsZSBpbmRleCBiYWNrIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudC5cbiAgICB1c2VBY3RpdmVFbGVtZW50KHsgb25BY3RpdmVFbGVtZW50Q2hhbmdlOiBhY3RpdmVFbGVtZW50ID0+IHNldEFueUl0ZW1zRm9jdXNlZCghIShpbnB1dEVsZW1lbnQ/LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhbnlJdGVtc0ZvY3VzZWQpXG4gICAgICAgICAgICBzZXRUYWJiYWJsZUluZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgIH0sIFthbnlJdGVtc0ZvY3VzZWQsIHNlbGVjdGVkSW5kZXgsIHNldFRhYmJhYmxlSW5kZXhdKTtcbiAgICB1c2VDaGlsZEZsYWcoe1xuICAgICAgICBhY3RpdmF0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuLFxuICAgICAgICBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZENoaWxkcmVuW2ldPy5zZXRTZWxlY3RlZChzZWxlY3RlZCksXG4gICAgICAgIGdldENoaWxkRmxhZzogKGkpID0+IChtYW5hZ2VkQ2hpbGRyZW5baV0/LmdldFNlbGVjdGVkKCkgPz8gbnVsbClcbiAgICB9KTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoc2VsZWN0ZWRJbmRleCk7XG4gICAgfSwgW3NlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbi5sZW5ndGhdKTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCB1c2VMaXN0Ym94U2luZ2xlSXRlbSA9IHVzZUNhbGxiYWNrKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHRhYmJhYmxlLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcywgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzIH0gPSB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkKHsgc2V0U2VsZWN0ZWQsIGdldFNlbGVjdGVkLCAuLi5pbmZvIH0pO1xuICAgICAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5mby5pbmRleDtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWJiYWJsZSAmJiBzZWxlY3Rpb25Nb2RlID09IFwiZm9jdXNcIikge1xuICAgICAgICAgICAgICAgIHN0YWJsZU9uU2VsZWN0Py4oeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3RhYmJhYmxlLCBzZWxlY3Rpb25Nb2RlLCBpbmRleF0pO1xuICAgICAgICByZXR1cm4geyB1c2VMaXN0Ym94U2luZ2xlSXRlbVByb3BzLCB0YWJiYWJsZSwgc2VsZWN0ZWQsIGdldFNlbGVjdGVkIH07XG4gICAgICAgIGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVJdGVtUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdXNlQnV0dG9uTGlrZUV2ZW50SGFuZGxlcnMoKGUpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvSW5kZXgoaW5mby5pbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgc3RhYmxlT25TZWxlY3Q/Lih7IHRhcmdldDogZWxlbWVudCwgY3VycmVudFRhcmdldDogZWxlbWVudCwgW0V2ZW50RGV0YWlsXTogeyBzZWxlY3RlZEluZGV4OiBpbmRleCB9IH0pO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sIHVuZGVmaW5lZCkoe30pO1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwib3B0aW9uXCI7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtc2V0c2l6ZVwiXSA9IChjaGlsZENvdW50KS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXBvc2luc2V0XCJdID0gKGluZm8uaW5kZXggKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLXNlbGVjdGVkXCJdID0gKHNlbGVjdGVkID8/IGZhbHNlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKG5ld1Byb3BzLCB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlTGlzdE5hdmlnYXRpb25DaGlsZCwgc2VsZWN0aW9uTW9kZSwgY2hpbGRDb3VudF0pO1xuICAgIGNvbnN0IHVzZUxpc3Rib3hTaW5nbGVMYWJlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZUxpc3Rib3hTaW5nbGVMYWJlbCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZUxhYmVsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlR2VuZXJpY0xhYmVsTGFiZWxQcm9wcyB9ID0gdXNlR2VuZXJpY0xhYmVsTGFiZWwoKTtcbiAgICAgICAgICAgIHVzZUdlbmVyaWNMYWJlbExhYmVsUHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZUxpc3Rib3hTaW5nbGVMYWJlbFByb3BzIH07XG4gICAgfSwgW3VzZUdlbmVyaWNMYWJlbExhYmVsXSk7XG4gICAgcmV0dXJuIHsgdXNlTGlzdGJveFNpbmdsZUl0ZW0sIHVzZUxpc3Rib3hTaW5nbGVQcm9wcywgdXNlTGlzdGJveFNpbmdsZUxhYmVsLCB0YWJiYWJsZUluZGV4LCBmb2N1czogZm9jdXNDdXJyZW50LCBjdXJyZW50VHlwZWFoZWFkLCBpbnZhbGlkVHlwZWFoZWFkIH07XG4gICAgZnVuY3Rpb24gdXNlTGlzdGJveFNpbmdsZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnJvbGUgPSBcImxpc3Rib3hcIjtcbiAgICAgICAgcmV0dXJuIHVzZUdlbmVyaWNMYWJlbElucHV0UHJvcHMocHJvcHMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1saXN0Ym94LXNpbmdsZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VIYXNGb2N1cywgdXNlTGlzdE5hdmlnYXRpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VUaW1lb3V0IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFdmVudERldGFpbCB9IGZyb20gXCIuL3Byb3BzXCI7XG5pbXBvcnQgeyB1c2VTb2Z0RGlzbWlzcyB9IGZyb20gXCIuL3VzZS1tb2RhbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFNZW51KHsgY29sbGF0b3IsIGtleU5hdmlnYXRpb24sIG5vVHlwZWFoZWFkLCBub1dyYXAsIHR5cGVhaGVhZFRpbWVvdXQsIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IFtmb2N1c1RyYXBBY3RpdmUsIHNldEZvY3VzVHJhcEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBsZXQgb25DbG9zZSA9IGFyZ3Mub25DbG9zZTtcbiAgICBsZXQgb25PcGVuID0gYXJncy5vbk9wZW47XG4gICAgbGV0IG1lbnViYXIgPSBhcmdzLm1lbnViYXI7XG4gICAgbGV0IG9wZW4gPSAobWVudWJhciA/IHRydWUgOiBhcmdzLm9wZW4pO1xuICAgIGNvbnN0IHN0YWJsZU9uQ2xvc2UgPSB1c2VTdGFibGVDYWxsYmFjayhvbkNsb3NlID8/ICgoKSA9PiB7IH0pKTtcbiAgICBjb25zdCBbbWVudUxhc3RGb2N1c2VkSW5uZXIsIHNldE1lbnVMYXN0Rm9jdXNlZElubmVyLCBnZXRNZW51TGFzdEZvY3VzZWRJbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2J1dHRvbkxhc3RGb2N1c2VkSW5uZXIsIHNldEJ1dHRvbkxhc3RGb2N1c2VkSW5uZXIsIGdldEJ1dHRvbkxhc3RGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIC8vIFRPRE86IEl0J3MgYXdrd2FyZCB0aGF0IHRoZSBidXR0b24gZm9jdXMgcHJvcHMgYXJlIG91dCBoZXJlIHdoZXJlIHdlIGRvbid0IGhhdmUgaXRzIHR5cGUsXG4gICAgLy8gYnV0IGZvY3VzIG1hbmFnZW1lbnQgaXMgc3VwZXIgc2Vuc2l0aXZlLCBhbmQgZXZlbiB3YWl0aW5nIGZvciBhIHVzZUxheW91dEVmZmVjdCB0byBzeW5jIHN0YXRlIGhlcmVcbiAgICAvLyB3b3VsZCBiZSB0b28gbGF0ZSwgc28gaXQgd291bGQgbG9vayBsaWtlIHRoZXJlJ3MgYSBtb21lbnQgYmV0d2VlbiBtZW51IGZvY3VzIGxvc3QgYW5kIGJ1dHRvbiBmb2N1cyBnYWluZWRcbiAgICAvLyB3aGVyZSBub3RoaW5nIGlzIGZvY3VzZWQuIFxuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlTWVudUhhc0ZvY3VzUHJvcHMsIH0gPSB1c2VIYXNGb2N1cyh7IG9uTGFzdEZvY3VzZWRJbm5lckNoYW5nZWQ6IHNldE1lbnVMYXN0Rm9jdXNlZElubmVyIH0pO1xuICAgIGNvbnN0IHsgdXNlSGFzRm9jdXNQcm9wczogdXNlQnV0dG9uSGFzRm9jdXNQcm9wcyB9ID0gdXNlSGFzRm9jdXMoeyBvbkxhc3RGb2N1c2VkSW5uZXJDaGFuZ2VkOiBzZXRCdXR0b25MYXN0Rm9jdXNlZElubmVyIH0pO1xuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuLCB1c2VMaXN0TmF2aWdhdGlvbkNoaWxkLCB0YWJiYWJsZUluZGV4LCBmb2N1c0N1cnJlbnQ6IGZvY3VzTWVudSB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyBjb2xsYXRvciwga2V5TmF2aWdhdGlvbiwgbm9UeXBlYWhlYWQsIG5vV3JhcCwgdHlwZWFoZWFkVGltZW91dCwgc2hvdWxkRm9jdXNPbkNoYW5nZTogdXNlQ2FsbGJhY2soKCkgPT4gZ2V0TWVudUxhc3RGb2N1c2VkSW5uZXIoKSB8fCBnZXRCdXR0b25MYXN0Rm9jdXNlZElubmVyKCksIFtdKSB9KTtcbiAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZU1lbnVJZFByb3BzLCB1c2VSZWZlcmVuY2VkSWRQcm9wczogdXNlTWVudUlkUmVmZXJlbmNpbmdQcm9wcyB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS1tZW51LVwiIH0pO1xuICAgIGNvbnN0IFtvcGVuZXJFbGVtZW50LCBzZXRPcGVuZXJFbGVtZW50LCBnZXRPcGVuZXJFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudDogZ2V0QnV0dG9uRWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VCdXR0b25SZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldE9wZW5lckVsZW1lbnQgfSk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50OiBnZXRNZW51RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzOiB1c2VNZW51UmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICB1c2VTb2Z0RGlzbWlzcyh7IG9uQ2xvc2U6IHN0YWJsZU9uQ2xvc2UsIGdldEVsZW1lbnRzOiAoKSA9PiAoW2dldEJ1dHRvbkVsZW1lbnQoKSwgZ2V0TWVudUVsZW1lbnQoKV0pIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEZvY3VzVHJhcEFjdGl2ZShvcGVuKTtcbiAgICB9LCBbb3Blbl0pO1xuICAgIGNvbnN0IGZvY3VzTWVudVN0YWJsZSA9IHVzZVN0YWJsZUNhbGxiYWNrKGZvY3VzTWVudSA/PyAoKCkgPT4geyB9KSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGZvY3VzVHJhcEFjdGl2ZSkge1xuICAgICAgICAgICAgZm9jdXNNZW51U3RhYmxlPy4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb2N1c1RyYXBBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZ2V0TWVudUxhc3RGb2N1c2VkSW5uZXIoKSlcbiAgICAgICAgICAgICAgICBnZXRPcGVuZXJFbGVtZW50KCk/LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBudWxsLCBzbyB3ZSd2ZSBvbmx5IGp1c3QgbW91bnRlZCBhbmQgc2hvdWxkbid0IGZvY3VzIG91cnNlbHZlcy5cbiAgICAgICAgfVxuICAgIH0sIFtmb2N1c1RyYXBBY3RpdmVdKTtcbiAgICAvLyBGb2N1cyBtYW5hZ2VtZW50IGlzIHJlYWxseSBmaW5pY2t5LCBhbmQgdGhlcmUncyBhbHdheXMgZ29pbmcgdG8gYmUgXG4gICAgLy8gYW4gZWRnZSBjYXNlIHdoZXJlIG5vdGhpbmcncyBmb2N1c2VkIGZvciB0d28gY29uc2VjdXRpdmUgZnJhbWVzIFxuICAgIC8vIG9uIGlPUyBvciB3aGF0ZXZlciwgd2hpY2ggd291bGQgaW1tZWRpYXRlbHkgY2xvc2UgdGhlIG1lbnUgXG4gICAgLy8gYW55IHRpbWUgaXQncyBiZWVuIG9wZW5lZC4gU28gYW55IHRpbWUgaXQgKmxvb2tzKiBsaWtlIHdlIHNob3VsZCBjbG9zZSxcbiAgICAvLyB0cnkgd2FpdGluZyAxMDBtcy4gSWYgaXQncyBzdGlsbCB0cnVlIHRoZW4sIHRoZW4geWVhaCwgd2Ugc2hvdWxkIGNsb3NlLlxuICAgIGxldCBzaG91bGRDbG9zZSA9IChmb2N1c1RyYXBBY3RpdmUgJiYgIW1lbnVMYXN0Rm9jdXNlZElubmVyICYmICFidXR0b25MYXN0Rm9jdXNlZElubmVyKTtcbiAgICB1c2VUaW1lb3V0KHtcbiAgICAgICAgdGltZW91dDogMTAwLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3VsZENsb3NlKSB7XG4gICAgICAgICAgICAgICAgb25DbG9zZT8uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJJbmRleDogYCR7c2hvdWxkQ2xvc2V9YFxuICAgIH0pO1xuICAgIC8vIEEgbWVudSBzZW50aW5hbCBpcyBhIGhpZGRlbiBidXQgZm9jdXNhYmxlIGVsZW1lbnQgdGhhdCBjb21lcyBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBlbGVtZW50XG4gICAgLy8gdGhhdCwgd2hlbiBhY3RpdmF0ZWQgb3IgZm9jdXNlZCBvdmVyLCBjbG9zZXMgdGhlIG1lbnUuXG4gICAgLy8gKGlmIGZvY3VzZWQgd2l0aGluIDEwMG1zIG9mIHRoZSBvcGVuIHByb3AgY2hhbmdpbmcsIGluc3RlYWQgb2ZcbiAgICAvLyBjbG9zaW5nIHRoZSBtZW51LCBmb2N1c2luZyB0aGUgc2VudGluZWwgaW1tZWRpYXRlbHkgYXNrcyB0aGUgbWVudSB0byBmb2N1cyBpdHNlbGYpLlxuICAgIC8vIFRoaXMgZXhpc3RzIGJlY2F1c2Ugd2hpbGUgbW91c2UgdXNlcnMgY2FuIGNsaWNrIG91dCBvZiBhIG1lbnVcbiAgICAvLyBhbmQga2V5Ym9hcmQgdXNlcnMgY2FuIGVzY2FwZSB0byBjbG9zZSB0aGUgbWVudSxcbiAgICAvLyBzY3JlZW4gcmVhZGVycyBhbmQgb3RoZXIgaW5wdXQgbWV0aG9kcyB0aGF0IGRvbid0IHVzZSB0aG9zZSB0d28gYmVjb21lIHN0dWNrLlxuICAgIGNvbnN0IHVzZU1lbnVTZW50aW5lbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgW2ZpcnN0U2VudGluZWxJc0FjdGl2ZSwgc2V0Rmlyc3RTZW50aW5lbElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgdXNlVGltZW91dCh7IGNhbGxiYWNrOiAoKSA9PiB7IHNldEZpcnN0U2VudGluZWxJc0FjdGl2ZShvcGVuKTsgfSwgdGltZW91dDogMTAwLCB0cmlnZ2VySW5kZXg6IGAke2ZpcnN0U2VudGluZWxJc0FjdGl2ZX1gIH0pO1xuICAgICAgICBjb25zdCBvbkZvY3VzID0gZmlyc3RTZW50aW5lbElzQWN0aXZlID8gKCgpID0+IHN0YWJsZU9uQ2xvc2UoKSkgOiAoKCkgPT4gZm9jdXNNZW51Py4oKSk7XG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiBzdGFibGVPbkNsb3NlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VNZW51U2VudGluZWxQcm9wczogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7IG9uRm9jdXMsIG9uQ2xpY2sgfSwgcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2ZvY3VzTWVudSwgb3Blbl0pO1xuICAgIGNvbnN0IHVzZU1lbnVCdXR0b24gPSB1c2VDYWxsYmFjaygoe30pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZU1lbnVCdXR0b25Qcm9wczogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSB1c2VCdXR0b25SZWZFbGVtZW50UHJvcHModXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlTWVudUlkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtY29udHJvbHNcIikodXNlQnV0dG9uSGFzRm9jdXNQcm9wcyhwKSkpKTtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtaGFzcG9wdXBcIl0gPSBcIm1lbnVcIjtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImFyaWEtZXhwYW5kZWRcIl0gPSBvcGVuID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtvcGVuLCBvbkNsb3NlLCBvbk9wZW4sIHVzZU1lbnVJZFJlZmVyZW5jaW5nUHJvcHNdKTtcbiAgICBjb25zdCB1c2VNZW51U3VibWVudUl0ZW0gPSB1c2VDYWxsYmFjaygoYXJncykgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZU1lbnVQcm9wcywgdXNlTWVudUJ1dHRvbiB9ID0gdXNlQXJpYU1lbnUoYXJncyk7XG4gICAgICAgIGNvbnN0IHsgdXNlTWVudUJ1dHRvblByb3BzIH0gPSB1c2VNZW51QnV0dG9uKHsgdGFnOiBcImxpXCIgfSk7XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRPcGVuZXJFbGVtZW50IH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgICAgIHVzZU1lbnVQcm9wcyxcbiAgICAgICAgICAgIHVzZU1lbnVTdWJtZW51SXRlbVByb3BzOiBmdW5jdGlvbiAoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwibWVudWl0ZW1cIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlUmVmRWxlbWVudFByb3BzKHVzZU1lbnVCdXR0b25Qcm9wcyh1c2VNZW51SWRSZWZlcmVuY2luZ1Byb3BzKFwiYXJpYS1jb250cm9sc1wiKShwcm9wcykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlTWVudUl0ZW0gPSB1c2VDYWxsYmFjaygoYXJncykgPT4ge1xuICAgICAgICBjb25zdCB7IHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGRQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZChhcmdzKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlTWVudUl0ZW1Qcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVpdGVtXCI7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzKHByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlTWVudUl0ZW1Qcm9wcyB9O1xuICAgIH0sIFtdKTtcbiAgICBmdW5jdGlvbiB1c2VNZW51UHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgIHByb3BzLnJvbGUgPSBcIm1lbnVcIjtcbiAgICAgICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiICYmIG9uQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZU1lbnVJZFByb3BzKHVzZU1lbnVIYXNGb2N1c1Byb3BzKHVzZU1lcmdlZFByb3BzKCkoeyBvbktleURvd24gfSwgdXNlTWVudVJlZkVsZW1lbnRQcm9wcyhwcm9wcykpKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZU1lbnVQcm9wcyxcbiAgICAgICAgdXNlTWVudUJ1dHRvbixcbiAgICAgICAgdXNlTWVudUl0ZW0sXG4gICAgICAgIHVzZU1lbnVTZW50aW5lbCxcbiAgICAgICAgdXNlTWVudVN1Ym1lbnVJdGVtLFxuICAgICAgICBmb2N1c01lbnVcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lbnUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2hpbGRGbGFnLCB1c2VDaGlsZE1hbmFnZXIsIHVzZUhhc0ZvY3VzLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUxpc3ROYXZpZ2F0aW9uLCB1c2VMb2dpY2FsRGlyZWN0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmFuZG9tSWQsIHVzZVJlZkVsZW1lbnQsIHVzZVN0YWJsZUNhbGxiYWNrLCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBlbmhhbmNlRXZlbnQsIEV2ZW50RGV0YWlsIH0gZnJvbSBcIi4vcHJvcHNcIjtcbmltcG9ydCB7IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vdXNlLWJ1dHRvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFyaWFUYWJzKHsgc2VsZWN0aW9uTW9kZSwgc2VsZWN0ZWRJbmRleCwgb25TZWxlY3QsIG9yaWVudGF0aW9uOiBsb2dpY2FsT3JpZW50YXRpb24sIC4uLmFyZ3MgfSkge1xuICAgIGNvbnN0IFt0YWJMaXN0Rm9jdXNlZElubmVyLCBzZXRUYWJMaXN0Rm9jdXNlZElubmVyLCBnZXRUYWJMaXN0Rm9jdXNlZElubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHVzZUhhc0ZvY3VzUHJvcHM6IHVzZVRhYkxpc3RIYXNGb2N1c1Byb3BzIH0gPSB1c2VIYXNGb2N1cyh7IG9uRm9jdXNlZElubmVyQ2hhbmdlZDogc2V0VGFiTGlzdEZvY3VzZWRJbm5lciB9KTtcbiAgICBjb25zdCB7IGdldExvZ2ljYWxEaXJlY3Rpb24sIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbigpO1xuICAgIGNvbnN0IHBoeXNpY2FsT3JpZW50YXRpb24gPSBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uKGxvZ2ljYWxPcmllbnRhdGlvbik7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJMaXN0SWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRUYWJMaXN0SWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLWxpc3QtXCIgfSk7XG4gICAgY29uc3QgeyB1c2VSYW5kb21JZFByb3BzOiB1c2VUYWJMYWJlbElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VSZWZlcmVuY2VkVGFiTGFiZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItbGFiZWwtXCIgfSk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBuYXZpZ2F0ZVRvSW5kZXgsIHVzZUxpc3ROYXZpZ2F0aW9uQ2hpbGQsIHRhYmJhYmxlSW5kZXgsIGludmFsaWRUeXBlYWhlYWQsIGN1cnJlbnRUeXBlYWhlYWQsIGZvY3VzQ3VycmVudCB9ID0gdXNlTGlzdE5hdmlnYXRpb24oeyAuLi5hcmdzLCBzaG91bGRGb2N1c09uQ2hhbmdlOiBnZXRUYWJMaXN0Rm9jdXNlZElubmVyLCBrZXlOYXZpZ2F0aW9uOiBsb2dpY2FsT3JpZW50YXRpb24gfSk7XG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRQYW5lbHMsIHVzZU1hbmFnZWRDaGlsZDogdXNlTWFuYWdlZFRhYlBhbmVsIH0gPSB1c2VDaGlsZE1hbmFnZXIoKTtcbiAgICBjb25zdCBzdGFibGVPblNlbGVjdCA9IHVzZVN0YWJsZUNhbGxiYWNrKG9uU2VsZWN0KTtcbiAgICBjb25zdCBjaGlsZENvdW50ID0gbWFuYWdlZFRhYnMubGVuZ3RoO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG1hbmFnZWRUYWJzKVxuICAgICAgICAgICAgY2hpbGQuc2V0U2VsZWN0aW9uTW9kZShzZWxlY3Rpb25Nb2RlKTtcbiAgICB9LCBbc2VsZWN0aW9uTW9kZV0pO1xuICAgIHVzZUNoaWxkRmxhZyh7IGFjdGl2YXRlZEluZGV4OiBzZWxlY3RlZEluZGV4LCBtYW5hZ2VkQ2hpbGRyZW46IG1hbmFnZWRUYWJzLCBzZXRDaGlsZEZsYWc6IChpLCBzZWxlY3RlZCkgPT4gbWFuYWdlZFRhYnNbaV0/LnNldFNlbGVjdGVkKHNlbGVjdGVkKSwgZ2V0Q2hpbGRGbGFnOiBpID0+IChtYW5hZ2VkVGFic1tpXT8uZ2V0U2VsZWN0ZWQoKSkgfSk7XG4gICAgdXNlQ2hpbGRGbGFnKHsgYWN0aXZhdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgsIG1hbmFnZWRDaGlsZHJlbjogbWFuYWdlZFBhbmVscywgc2V0Q2hpbGRGbGFnOiAoaSwgdmlzaWJsZSkgPT4gbWFuYWdlZFBhbmVsc1tpXT8uc2V0VmlzaWJsZSh2aXNpYmxlKSwgZ2V0Q2hpbGRGbGFnOiBpID0+IChtYW5hZ2VkUGFuZWxzW2ldPy5nZXRWaXNpYmxlKCkpIH0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgocHJldikgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHNlbGVjdGlvbk1vZGUgPT0gXCJhY3RpdmF0ZVwiKSB7XG4gICAgICAgICAgICBtYW5hZ2VkUGFuZWxzW3NlbGVjdGVkSW5kZXhdPy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSwgW2NoaWxkQ291bnQsIHNlbGVjdGVkSW5kZXgsIHNlbGVjdGlvbk1vZGVdKTtcbiAgICBjb25zdCB1c2VUYWIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWIoaW5mbykge1xuICAgICAgICBjb25zdCBbc2VsZWN0aW9uTW9kZUwsIHNldFNlbGVjdGlvbk1vZGVMXSA9IHVzZVN0YXRlKHNlbGVjdGlvbk1vZGUpO1xuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcywgZ2V0RWxlbWVudCB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgICAgIGNvbnN0IFt0YWJQYW5lbElkLCBzZXRUYWJQYW5lbElkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVGFiSWRQcm9wcywgaWQ6IHRhYklkLCBnZXRJZDogZ2V0VGFiSWQgfSA9IHVzZVJhbmRvbUlkKHsgcHJlZml4OiBcImFyaWEtdGFiLVwiIH0pO1xuICAgICAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyB0YWJiYWJsZSwgdXNlTGlzdE5hdmlnYXRpb25DaGlsZFByb3BzLCB1c2VMaXN0TmF2aWdhdGlvblNpYmxpbmdQcm9wcyB9ID0gdXNlTGlzdE5hdmlnYXRpb25DaGlsZCh7IHNldFNlbGVjdGVkLCBnZXRTZWxlY3RlZCwgdGFiSWQsIHNldFRhYlBhbmVsSWQsIHNldFNlbGVjdGlvbk1vZGU6IHNldFNlbGVjdGlvbk1vZGVMLCAuLi5pbmZvIH0pO1xuICAgICAgICBjb25zdCBnZXRJbmRleCA9IHVzZVN0YWJsZUdldHRlcihpbmZvLmluZGV4KTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAodGFiYmFibGUgJiYgc2VsZWN0aW9uTW9kZUwgPT0gXCJmb2N1c1wiKSB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3QoeyB0YXJnZXQ6IGVsZW1lbnQsIGN1cnJlbnRUYXJnZXQ6IGVsZW1lbnQsIFtFdmVudERldGFpbF06IHsgc2VsZWN0ZWRJbmRleDogZ2V0SW5kZXgoKSB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbdGFiYmFibGUsIHNlbGVjdGlvbk1vZGVdKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFBhbmVsc1tpbmZvLmluZGV4XT8uc2V0VGFiSWQodGFiSWQpOyB9LCBbdGFiSWQsIGluZm8uaW5kZXhdKTtcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHVzZUJ1dHRvbkxpa2VFdmVudEhhbmRsZXJzKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGVUb0luZGV4KGluZm8uaW5kZXgpO1xuICAgICAgICAgICAgICAgIG9uU2VsZWN0Py4oZW5oYW5jZUV2ZW50KGUsIHsgc2VsZWN0ZWRJbmRleDogZ2V0SW5kZXgoKSB9KSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSwgdW5kZWZpbmVkKShwcm9wcyk7XG4gICAgICAgICAgICBuZXdQcm9wcy5yb2xlID0gXCJ0YWJcIjtcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1zZWxlY3RlZFwiXSA9IChzZWxlY3RlZCA/PyBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5ld1Byb3BzW1wiYXJpYS1jb250cm9sc1wiXSA9IHRhYlBhbmVsSWQ7XG4gICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7fSwgdXNlVGFiSWRQcm9wcyh1c2VMaXN0TmF2aWdhdGlvbkNoaWxkUHJvcHModXNlUmVmRWxlbWVudFByb3BzKG5ld1Byb3BzKSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUYWJQcm9wcywgc2VsZWN0ZWQgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlVGFiUGFuZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VQYW5lbChpbmZvKSB7XG4gICAgICAgIGNvbnN0IFtzaG91bGRGb2N1cywgc2V0U2hvdWxkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBbdGFiSWQsIHNldFRhYklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlLCBnZXRWaXNpYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgICBjb25zdCB7IHVzZVJhbmRvbUlkUHJvcHM6IHVzZVBhbmVsSWRQcm9wcywgdXNlUmVmZXJlbmNlZElkUHJvcHM6IHVzZVJlZmVyZW5jZWRQYW5lbElkLCBpZDogdGFiUGFuZWxJZCB9ID0gdXNlUmFuZG9tSWQoeyBwcmVmaXg6IFwiYXJpYS10YWItcGFuZWwtXCIgfSk7XG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlTWFuYWdlZENoaWxkUHJvcHMgfSA9IHVzZU1hbmFnZWRUYWJQYW5lbCh7IC4uLmluZm8sIHRhYlBhbmVsSWQsIHNldFRhYklkLCBmb2N1cywgc2V0VmlzaWJsZTogc2V0VmlzaWJsZSwgZ2V0VmlzaWJsZTogZ2V0VmlzaWJsZSB9KTtcbiAgICAgICAgZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICBpZiAoZ2V0VGFiTGlzdEZvY3VzZWRJbm5lcigpKSB7XG4gICAgICAgICAgICAgICAgc2V0U2hvdWxkRm9jdXModHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaG91bGRGb2N1cykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ/LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgc2V0U2hvdWxkRm9jdXMoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbZWxlbWVudCwgc2hvdWxkRm9jdXNdKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHsgbWFuYWdlZFRhYnNbaW5mby5pbmRleF0/LnNldFRhYlBhbmVsSWQodGFiUGFuZWxJZCk7IH0sIFt0YWJQYW5lbElkLCBpbmZvLmluZGV4XSk7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYlBhbmVsUHJvcHMoeyAuLi5wcm9wcyB9KSB7XG4gICAgICAgICAgICBwcm9wc1tcImFyaWEtbGFiZWxsZWRieVwiXSA9IG1hbmFnZWRUYWJzW2luZm8uaW5kZXhdPy50YWJJZDtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRhYnBhbmVsXCI7XG4gICAgICAgICAgICBwcm9wcy50YWJJbmRleCA/Pz0gLTE7IC8vIE1ha2Ugc3VyZSB0aGUgdGFiIHBhbmVsIGlzIHRhYmJhYmxlLlxuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe30sIHVzZVBhbmVsSWRQcm9wcyh1c2VNYW5hZ2VkQ2hpbGRQcm9wcyhwcm9wcykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB1c2VUYWJQYW5lbFByb3BzLCB2aXNpYmxlIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZVRhYnNMaXN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVGFiTGlzdCgpIHtcbiAgICAgICAgZnVuY3Rpb24gdXNlVGFiTGlzdFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcHJvcHMucm9sZSA9IFwidGFibGlzdFwiO1xuICAgICAgICAgICAgcHJvcHNbXCJhcmlhLW9yaWVudGF0aW9uXCJdID0gcGh5c2ljYWxPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkVGFiTGFiZWxJZChcImFyaWEtbGFiZWxsZWRieVwiKSh1c2VUYWJMaXN0SGFzRm9jdXNQcm9wcyh1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMocHJvcHMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFiTGlzdFByb3BzIH07XG4gICAgfSwgW3BoeXNpY2FsT3JpZW50YXRpb25dKTtcbiAgICBjb25zdCB1c2VUYWJzTGFiZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUYWJzTGFiZWwoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRhYnNMYWJlbFByb3BzKHsgLi4ucHJvcHMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZVRhYkxhYmVsSWRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVGFic0xhYmVsUHJvcHMgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHsgdXNlVGFiLCB1c2VUYWJQYW5lbCwgdXNlVGFic0xpc3QsIHVzZVRhYnNMYWJlbCwgdGFiYmFibGVJbmRleCwgZm9jdXNUYWJMaXN0OiBmb2N1c0N1cnJlbnQsIGN1cnJlbnRUeXBlYWhlYWQsIGludmFsaWRUeXBlYWhlYWQgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10YWJzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZFByb3BzLCB1c2VSYW5kb21JZCwgdXNlU3RhdGUsIHVzZVRpbWVvdXQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcmlhVG9vbHRpcCh7IG1vdXNlb3ZlckRlbGF5IH0pIHtcbiAgICBtb3VzZW92ZXJEZWxheSA/Pz0gNDAwO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuLCBnZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaGFzQW55TW91c2VvdmVyLCBzZXRIYXNBbnlNb3VzZW92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIC8vY29uc3QgW21vdXNlb3ZlcklzVmFsaWQsIHNldE1vdXNlb3ZlcklzVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgdXNlUmFuZG9tSWRQcm9wczogdXNlVG9vbHRpcElkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzOiB1c2VUb29sdGlwSWRSZWZlcmVuY2luZ1Byb3BzIH0gPSB1c2VSYW5kb21JZCh7IHByZWZpeDogXCJhcmlhLXRvb2x0aXAtXCIgfSk7XG4gICAgY29uc3QgW3RyaWdnZXJGb2N1c2VkSW5uZXIsIHNldFRyaWdnZXJGb2N1c2VkSW5uZXIsIGdldFRyaWdnZXJGb2N1c2VkSW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0cmlnZ2VySGFzTW91c2VvdmVyLCBzZXRUcmlnZ2VySGFzTW91c2VvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdG9vbHRpcEhhc01vdXNlb3Zlciwgc2V0VG9vbHRpcEhhc01vdXNlb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlVGltZW91dCh7XG4gICAgICAgIHRpbWVvdXQ6IG1vdXNlb3ZlckRlbGF5LFxuICAgICAgICB0cmlnZ2VySW5kZXg6ICgrdHJpZ2dlckhhc01vdXNlb3ZlciArICt0b29sdGlwSGFzTW91c2VvdmVyKSxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0cmlnZ2VySGFzTW91c2VvdmVyIHx8IHRvb2x0aXBIYXNNb3VzZW92ZXIpXG4gICAgICAgICAgICAgICAgc2V0SGFzQW55TW91c2VvdmVyKHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdXNlVGltZW91dCh7XG4gICAgICAgIHRpbWVvdXQ6IDUwLFxuICAgICAgICB0cmlnZ2VySW5kZXg6ICgrdHJpZ2dlckhhc01vdXNlb3ZlciArICt0b29sdGlwSGFzTW91c2VvdmVyKSxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdHJpZ2dlckhhc01vdXNlb3ZlciAmJiAhdG9vbHRpcEhhc01vdXNlb3ZlcilcbiAgICAgICAgICAgICAgICBzZXRIYXNBbnlNb3VzZW92ZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0T3BlbihoYXNBbnlNb3VzZW92ZXIgfHwgdHJpZ2dlckZvY3VzZWRJbm5lcik7XG4gICAgfSwgW2hhc0FueU1vdXNlb3ZlciwgdHJpZ2dlckZvY3VzZWRJbm5lcl0pO1xuICAgIGNvbnN0IHVzZVRvb2x0aXBUcmlnZ2VyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlVG9vbHRpcFRyaWdnZXIoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckVudGVyKGUpIHtcbiAgICAgICAgICAgIHNldFRyaWdnZXJIYXNNb3VzZW92ZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25Qb2ludGVyTGVhdmUoZSkge1xuICAgICAgICAgICAgc2V0VHJpZ2dlckhhc01vdXNlb3ZlcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXNlVG9vbHRpcFRyaWdnZXJQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIC8vIE5vdGU6IFRob3VnaCBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCBmb2N1c2luZyBhY3RpdmF0ZXMgYSB0b29sdGlwLFxuICAgICAgICAgICAgLy8gaXQncyBwZXJmZWN0bHkgcmVhc29uYWJsZSB0aGF0IGEgY2hpbGQgZWxlbWVudCB3aWxsIGJlIHRoZSBvbmUgdGhhdCdzIGZvY3VzZWQsXG4gICAgICAgICAgICAvLyBub3QgdGhpcyBvbmUsIHNvIHdlIGRvbid0IHNldCB0YWJJbmRleD0wXG4gICAgICAgICAgICByZXR1cm4gdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wcyhcImFyaWEtZGVzY3JpYmVkYnlcIikodXNlTWVyZ2VkUHJvcHMoKSh7IG9uUG9pbnRlckVudGVyLCBvblBvaW50ZXJMZWF2ZSB9LCBwcm9wcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHVzZVRvb2x0aXBUcmlnZ2VyUHJvcHMgfTtcbiAgICB9LCBbdXNlVG9vbHRpcElkUmVmZXJlbmNpbmdQcm9wc10pO1xuICAgIGNvbnN0IHVzZVRvb2x0aXAgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiB1c2VUb29sdGlwKCkge1xuICAgICAgICBmdW5jdGlvbiBvblBvaW50ZXJFbnRlcihlKSB7XG4gICAgICAgICAgICBzZXRUb29sdGlwSGFzTW91c2VvdmVyKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckxlYXZlKGUpIHtcbiAgICAgICAgICAgIHNldFRvb2x0aXBIYXNNb3VzZW92ZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVzZVRvb2x0aXBQcm9wcyh7IC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIHByb3BzLnJvbGUgPSBcInRvb2x0aXBcIjtcbiAgICAgICAgICAgIHJldHVybiB1c2VUb29sdGlwSWRQcm9wcyh1c2VNZXJnZWRQcm9wcygpKHsgb25Qb2ludGVyRW50ZXIsIG9uUG9pbnRlckxlYXZlIH0sIHByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdXNlVG9vbHRpcFByb3BzIH07XG4gICAgfSwgW3VzZVRvb2x0aXBJZFByb3BzXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlVG9vbHRpcCxcbiAgICAgICAgdXNlVG9vbHRpcFRyaWdnZXIsXG4gICAgICAgIGlzT3Blbjogb3BlbixcbiAgICAgICAgZ2V0SXNPcGVuOiBnZXRPcGVuXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS10b29sdGlwLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbImwiLCJ1IiwidCIsInIiLCJvIiwiZiIsImUiLCJjIiwicyIsImEiLCJoIiwidiIsInkiLCJrIiwiYiIsIm0iLCJnIiwiaiIsInoiLCJ3IiwieCIsIlAiLCJNIiwiQSIsIkMiLCIkIiwiVCIsIk8iLCJMIiwiUyIsIm4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlUCIsInVzZVJlZiIsInVzZUxheW91dEVmZmVjdCIsIm9wdGlvbnMiLCJ1c2VTdGF0ZSIsIlVuc2V0IiwidXNlRWZmZWN0TmF0aXZlIiwidXNlTGF5b3V0RWZmZWN0TmF0aXZlIiwidXNlRWZmZWN0IiwidGhpcyIsImQiLCJSYW5kb21Xb3JkcyIsImNyZWF0ZUNvbnRleHQiLCJtZW1vIiwidXNlTWVtbyIsInVzZUNvbnRleHQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztBQUFHLFFBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUNDLEdBQUMsQ0FBR0MsR0FBQyxDQUFDQyxHQUFDLENBQUNDLEdBQUMsQ0FBQ0MsR0FBQyxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsRUFBRSxDQUFDQyxHQUFDLENBQUMsb0VBQW9FLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBT0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUVYLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFRCxHQUFDLENBQUMsS0FBSyxFQUFFQSxHQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBbUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxTQUFTYSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBT0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBU0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRWIsR0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDYyxHQUFDLENBQUMsR0FBRyxFQUFFLEVBQUVaLEdBQUMsR0FBR0osR0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQ0ksR0FBQyxDQUFDSixHQUFDLENBQUMsaUJBQWlCLEdBQUdHLEdBQUMsRUFBRWEsR0FBQyxFQUFDLENBQUMsU0FBU0EsR0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQ2QsR0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUNBLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ1EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQ0osR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUNLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUVKLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUVaLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDSyxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUNLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVYLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDYyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDUixHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUNTLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTRixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRWpCLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRWlCLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTMEIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMUIsR0FBQyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTaUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNqQixHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzJCLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUNsQixHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDVCxHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQ1MsR0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUNVLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDUyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzVCLEdBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBU2tCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNsQixHQUFDLENBQUMsR0FBRyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUzRCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUV0QixHQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxHQUFHa0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQ0wsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFTixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFSCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVNZLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUN0QixHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxPQUFPLEVBQUVBLEdBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRXNCLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ3RCLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUVVLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLFNBQVNpQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM3QixHQUFDLENBQUMsRUFBRSxFQUFFQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUNpQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDTixHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFTCxHQUFDLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBK08sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUNiLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDVSxHQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNSLEdBQUMsQ0FBQyxLQUFLLENBQUNQLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBdUQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNRLEdBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDTSxHQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNiLEdBQUMsQ0FBQyxFQUFFLENBQUNDLEdBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQ2EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNYLEdBQUMsQ0FBQyxDQUFDOztJQ0EzK1MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDeUIsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsR0FBRyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNYLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVyxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ1AsR0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQTJHLFNBQVNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVNHLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQTROLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDVixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQ2EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUNBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNkLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUNhLEdBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsR0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNBLEdBQUMsQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDZCxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUVDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDYSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUNkLEdBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUNjLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFD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O0lBQ3hCLFFBQVEsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUIsUUFBUSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixRQUFRLElBQUksRUFBRSxZQUFZLE9BQU8sSUFBSSxFQUFFLFlBQVksT0FBTztJQUMxRCxZQUFZLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLEtBQUssQ0FBQztJQUNOLENBQUM7SUFDRDtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQTtJQUNB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LENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzVCLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsR0FBRyxDQUFDQSxHQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQXFWLElBQTJNLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLElBQUlBLEdBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBcUwsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQ0EsR0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJRCxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRUQsR0FBQyxDQUFDRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUNILEdBQUMsQ0FBQ0csQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBdW5CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJRixDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNtQyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDJPQUEyTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUErS25DLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQ0EsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBSSxJQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsTUFBTUEsR0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsY0FBYyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUNrQyxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMs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
