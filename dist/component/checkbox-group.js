import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent } from "../use-checkbox-group.js";
import { memoForwardRef, useDefault } from "./util.js";
const UseCheckboxGroupChildContext = createContext(null);
export const CheckboxGroup = memoForwardRef(function CheckboxGroup({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, ..._rest }, ref) {
    const info = useCheckboxGroup({
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        checkboxGroupParameters: { orientation: orientation ?? "vertical" },
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
export const CheckboxGroupParent = memoForwardRef(function CheckboxGroupParent({ render, index, focusSelf, hidden, getText, getSortValue, disabled, ..._rest }, ref) {
    const context = useContext(UseCheckboxGroupChildContext);
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    const info = useCheckboxGroupParent({
        info: { index, disabled: disabled || false, hidden: hidden || false, focusSelf, checkboxInfo: { checkboxChildType: "parent" } },
        context,
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
export const CheckboxGroupChild = memoForwardRef(function CheckboxGroupChild({ index, render, checked, onChangeFromParent, getSortValue, hidden, getText, focusSelf, disabled, ..._rest }, ref) {
    const context = useContext(UseCheckboxGroupChildContext);
    console.assert(context != null, `This CheckboxGroupChild is not contained within a CheckboxGroup`);
    const info = useCheckboxGroupChild({
        checkboxGroupChild: { checked, onChangeFromParent },
        info: { index, hidden: hidden || false, disabled: disabled || false, focusSelf },
        textContentParameters: { getText: useDefault("getText", getText) },
        context,
        sortableChildParameters: { getSortValue },
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=checkbox-group.js.map