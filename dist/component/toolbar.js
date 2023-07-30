import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { createContext } from "preact";
import { focus } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useToolbar, useToolbarChild } from "../use-toolbar.js";
import { memoForwardRef, useDefault } from "./util.js";
// TODO: Are there performance/sanity implications for having one context per primitive?
const UntabbableContext = createContext(false);
const AriaPropNameContext = createContext("aria-selected");
const SelectionModeContext = createContext("focus");
const ToolbarContext = createContext(null);
export const Toolbar = memoForwardRef(function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, compare, getIndex, navigatePastEnd, navigatePastStart, pageNavigationSize, selectedIndex, onSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, staggered, ariaLabel, ariaPropName, selectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount }, ref) {
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    untabbable ||= false;
    const listboxReturnType = useToolbar({
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare },
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
            selectedIndex,
            onSelectedIndexChange
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rovingTabIndexParameters: { onTabbableIndexChange, untabbable },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName: ariaPropName, selectionMode },
        refElementParameters: { onElementChange, onMount, onUnmount },
    });
    useImperativeHandle(ref, () => listboxReturnType);
    return (_jsx(AriaPropNameContext.Provider, { value: ariaPropName, children: _jsx(SelectionModeContext.Provider, { value: selectionMode, children: _jsx(UntabbableContext.Provider, { value: untabbable, children: _jsx(ToolbarContext.Provider, { value: listboxReturnType.context, children: render(listboxReturnType) }) }) }) }));
});
export function ToolbarChild({ index, render, focusSelf, getSortValue, getText, unselectable, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info: uinfo }) {
    const context = useContextWithWarning(ToolbarContext, "toolbar");
    console.assert(context != null, `This ToolbarChild is not contained within a Toolbar`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;
    const info = useToolbarChild({
        context,
        toolbarChildParameters: { disabledProp },
        info: {
            index,
            focusSelf,
            unselectable: unselectable || false,
            untabbable: untabbable || false,
            getSortValue
        },
        textContentParameters: { getText: useDefault("getText", getText) },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return (_jsx(_Fragment, { children: render(info) }));
}
;
//# sourceMappingURL=toolbar.js.map