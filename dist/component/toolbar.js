import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useToolbar, useToolbarChild } from "../use-toolbar.js";
import { memoForwardRef, useDefault } from "./util.js";
const ToolbarContext = createContext(null);
export const Toolbar = memoForwardRef(function ToolbarU({ render, role, collator, disableHomeEndKeys, untabbable, compare, getIndex, navigatePastEnd, navigatePastStart, pageNavigationSize, selectedIndex, onSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, staggered, ariaLabel, ariaPropName, selectionMode }, ref) {
    const listboxReturnType = useToolbar({
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        linearNavigationParameters: {
            //: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            role: role ?? "toolbar",
            selectedIndex: selectedIndex ?? null,
            onSelectedIndexChange: onSelectedIndexChange ?? null
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable || false },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName: ariaPropName ?? "aria-selected", selectionMode: selectionMode ?? "activation" }
    });
    useImperativeHandle(ref, () => listboxReturnType);
    return (_jsx(ToolbarContext.Provider, { value: listboxReturnType.context, children: render(listboxReturnType) }));
});
export const ToolbarChild = memoForwardRef(function ToolbarChildU({ index, render, focusSelf, getSortValue, getText, info: uinfo }, ref) {
    const context = useContext(ToolbarContext);
    console.assert(context != null, `This ToolbarChild is not contained within a Toolbar`);
    const focusSelfDefault = useCallback((e) => { e?.focus(); }, []);
    const info = useToolbarChild({
        context,
        info: { index, focusSelf: focusSelf ?? focusSelfDefault, ...uinfo },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(_Fragment, { children: render(info) }));
});
//# sourceMappingURL=toolbar.js.map