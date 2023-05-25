import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useToolbar, useToolbarChild } from "../use-toolbar.js";
import { memoForwardRef, useDefault } from "./util.js";
import { focus } from "preact-prop-helpers";
// TODO: Are there performance/sanity implications for having one context per primitive?
const UntabbableContext = createContext(false);
const AriaPropNameContext = createContext("aria-selected");
const SelectionModeContext = createContext("focus");
const ToolbarContext = createContext(null);
export const Toolbar = memoForwardRef(function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, compare, getIndex, navigatePastEnd, navigatePastStart, pageNavigationSize, selectedIndex, onSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, staggered, ariaLabel, ariaPropName, selectionMode, untabbable }, ref) {
    ariaPropName ??= "aria-selected";
    selectionMode ??= "activation";
    untabbable ||= false;
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
            disabled: disabled || false,
            role: role ?? "toolbar",
            selectedIndex: selectedIndex ?? null,
            onSelectedIndexChange: onSelectedIndexChange ?? null
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName: ariaPropName, selectionMode }
    });
    useImperativeHandle(ref, () => listboxReturnType);
    return (_jsx(AriaPropNameContext.Provider, { value: ariaPropName, children: _jsx(SelectionModeContext.Provider, { value: selectionMode, children: _jsx(UntabbableContext.Provider, { value: untabbable, children: _jsx(ToolbarContext.Provider, { value: listboxReturnType.context, children: render(listboxReturnType) }) }) }) }));
});
export const ToolbarChild = memoForwardRef(function ToolbarChildU({ index, render, focusSelf, getSortValue, getText, unselectable, disabledProp, untabbable, info: uinfo }, ref) {
    const context = useContext(ToolbarContext);
    console.assert(context != null, `This ToolbarChild is not contained within a Toolbar`);
    const focusSelfDefault = useCallback((e) => { focus(e); }, []);
    focusSelf ??= focusSelfDefault;
    const info = useToolbarChild({
        context,
        toolbarChildParameters: { disabledProp },
        info: { index, focusSelf, unselectable, untabbable, ...uinfo },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: null,
        rovingTabIndexParameters: { untabbable: useContext(UntabbableContext) },
        singleSelectionParameters: { ariaPropName: useContext(AriaPropNameContext), selectionMode: useContext(SelectionModeContext) }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(_Fragment, { children: render(info) }));
});
//# sourceMappingURL=toolbar.js.map