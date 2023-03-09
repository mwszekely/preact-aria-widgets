import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent } from "../use-checkbox-group.js";
import { memoForwardRef, useDefault } from "./util.js";
const UseCheckboxGroupChildContext = createContext(null);
export const CheckboxGroup = memoForwardRef(function CheckboxGroup({ render, collator, disableArrowKeys, disableHomeEndKeys, navigationDirection, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, ..._rest }, ref) {
    const info = useCheckboxGroup({
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            navigationDirection,
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(UseCheckboxGroupChildContext.Provider, { value: info.context, children: render(info) }));
});
export const CheckboxGroupParent = memoForwardRef(function CheckboxGroupParent({ render, index, focusSelf, hidden, getText, getSortValue, ..._rest }, ref) {
    const context = useContext(UseCheckboxGroupChildContext);
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    const info = useCheckboxGroupParent({
        completeListNavigationChildParameters: { focusSelf, checkboxInfo: { checkboxChildType: "parent" } },
        context,
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
export const CheckboxGroupChild = memoForwardRef(function CheckboxGroupChild({ index, render, checked, onChangeFromParent, getSortValue, hidden, getText, focusSelf, ..._rest }, ref) {
    const context = useContext(UseCheckboxGroupChildContext);
    console.assert(context != null, `This CheckboxGroupChild is not contained within a CheckboxGroup`);
    const info = useCheckboxGroupChild({
        checkboxGroupChild: { checked, onChangeFromParent },
        completeListNavigationChildParameters: { focusSelf },
        textContentParameters: { getText: useDefault("getText", getText) },
        context,
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=checkbox-group.js.map