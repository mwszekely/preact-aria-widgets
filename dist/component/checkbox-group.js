import { createContext } from "preact";
import { assertEmptyObject, memo } from "preact-prop-helpers";
import { useContextWithWarning } from "../props.js";
import { useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent } from "../use-checkbox-group.js";
import { useComponent, useDefault } from "./util.js";
const UseCheckboxGroupChildContext = createContext(null);
export const CheckboxGroup = memo(function CheckboxGroup({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, UseCheckboxGroupChildContext, useCheckboxGroup({
        linearNavigationParameters: {
            onNavigateLinear,
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        checkboxGroupParameters: {
            orientation: orientation ?? "vertical"
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        sortableChildrenParameters: {
            compare,
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    }));
});
export const CheckboxGroupParent = memo(function CheckboxGroupParent({ render, index, focusSelf, untabbable, getSortValue, unselectable, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, 
//info,
..._rest }) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
    return (useComponent(imperativeHandle, render, null, useCheckboxGroupParent({
        info: {
            index,
            unselectable: unselectable || false,
            untabbable: untabbable || false,
            focusSelf,
            getSortValue,
        },
        context,
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount }
    })));
});
export const CheckboxGroupChild = (function CheckboxGroupChild({ index, render, checked, onChangeFromParent, getSortValue, untabbable, getText, focusSelf, unselectable, 
//info,
imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useCheckboxGroupChild({
        checkboxGroupChildParameters: {
            checked: checked,
            onChangeFromParent
        },
        info: {
            index,
            untabbable: untabbable || false,
            unselectable: unselectable || false,
            focusSelf,
            getSortValue
        },
        textContentParameters: {
            getText: useDefault("getText", getText)
        },
        context: useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group"),
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged,
            onCurrentFocusedInnerChanged
        },
        refElementParameters: {
            onElementChange,
            onMount,
            onUnmount
        }
    }));
});
//# sourceMappingURL=checkbox-group.js.map