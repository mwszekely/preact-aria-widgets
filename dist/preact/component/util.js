import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext, createPortal, focus, getDocument, useContext, useImperativeHandle, useRef } from "preact-prop-helpers";
/**
 * Almost all components are built in the exact same way from their implementing hook -- this just sets all of that up.
 *
 * @param imperativeHandle The `imperativeHandle` prop all component props have that hook a `ref` up to the hook's return values
 * @param render The `render` prop all component props have that turns a hook's return values into JSX to render
 * @param Context Optional. Some hooks return a `context` object, and if so, it will be rendered with the `Context` object provided.
 * @param info The return type of the hook.
 * @returns
 */
export function useComponent(imperativeHandle, render, Context, info) {
    useImperativeHandle(imperativeHandle, () => info);
    if (Context) {
        return _jsx(Context.Provider, { value: info.context, children: render(info) });
    }
    else {
        return render(info);
    }
}
export function useComponentC(imperativeHandle, render, ContextChildren, ContextProcessing, info) {
    useImperativeHandle(imperativeHandle, () => info);
    let ch = render(info);
    if (ContextChildren) {
        ch = _jsx(ContextChildren.Provider, { value: info.contextChildren, children: ch });
    }
    if (ContextProcessing) {
        ch = _jsx(ContextProcessing.Provider, { value: info.contextProcessing, children: ch });
    }
    return ch;
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
    singleSelectionMode: createContext("activation"),
    multiSelectionMode: createContext("activation"),
};
export function useDefault(context, userValue) {
    const defaultValue = useContext(ContextDefaults[context]);
    return userValue ?? defaultValue;
}
export const ParentDepthContext = createContext(0);
export function useDefaultRenderPortal({ portalId, children }) {
    const portalRef = useRef(null);
    const document = getDocument();
    portalRef.current ??= document?.getElementById(portalId) ?? undefined;
    if (portalRef.current)
        return createPortal(children, portalRef.current);
    else
        return children;
}
//# sourceMappingURL=util.js.map