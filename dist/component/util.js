import { createContext } from "preact";
import { forwardRef, memo, useContext } from "preact/compat";
export function memoForwardRef(fn) {
    return memo(forwardRef(fn));
}
export const ContextDefaults = {
    collator: createContext(null),
    pageNavigationSize: createContext(0.1),
    typeaheadTimeout: createContext(1000),
    noTypeahead: createContext(false),
    getIndex: createContext(v => v.props.index),
    disableArrowKeys: createContext(false),
    disableHomeEndKeys: createContext(false),
    getWindow: createContext(() => globalThis.window),
    focusOpener: createContext((e) => e?.focus?.()),
    getText: createContext((e) => (e?.textContent ?? "")),
    selectionMode: createContext("activation"),
};
export function useDefault(context, userValue) {
    const defaultValue = useContext(ContextDefaults[context]);
    return userValue ?? defaultValue;
}
export const ParentDepthContext = createContext(0);
//# sourceMappingURL=util.js.map