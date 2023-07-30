import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus } from "preact-prop-helpers";
import { createPortal, forwardRef, memo, useContext, useImperativeHandle, useRef } from "preact/compat";
export function memoForwardRef(fn) {
    return memo(forwardRef(fn));
}
export function useComponent(ref, render, Context, info) {
    useImperativeHandle(ref, () => info);
    if (Context) {
        return _jsx(Context.Provider, { value: info.context, children: render(info) });
    }
    else {
        return render(info);
    }
}
export const ContextDefaults = {
    collator: createContext(null),
    pageNavigationSize: createContext(0.1),
    typeaheadTimeout: createContext(1000),
    focusSelf: createContext((e) => e.focus?.()),
    noTypeahead: createContext(false),
    getIndex: createContext(v => v.props.index),
    disableArrowKeys: createContext(false),
    disableHomeEndKeys: createContext(false),
    getWindow: createContext(() => globalThis.window),
    getDocument: createContext(() => globalThis.document),
    focusOpener: createContext((e) => focus(e)),
    getText: createContext((e) => (e?.textContent ?? "")),
    selectionMode: createContext("activation"),
};
export function useDefault(context, userValue) {
    const defaultValue = useContext(ContextDefaults[context]);
    return userValue ?? defaultValue;
}
export const ParentDepthContext = createContext(0);
export function useDefaultRenderPortal({ portalId, children }) {
    const portalRef = useRef(null);
    portalRef.current ??= document.getElementById(portalId);
    if (portalRef.current)
        return createPortal(children, portalRef.current);
    else
        return children;
}
//# sourceMappingURL=util.js.map