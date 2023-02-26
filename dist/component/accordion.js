import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { returnTrue } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useAccordion, useAccordionSection } from "../use-accordion.js";
import { memoForwardRef, useDefault } from "./util.js";
const AccordionSectionContext = createContext(null);
export const Accordion = memoForwardRef(function Accordion({ disableArrowKeys, disableHomeEndKeys, initialIndex, navigationDirection, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, isValid, render, ..._rest }, ref) {
    const info = useAccordion({
        accordionParameters: { initialIndex, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            isValid: isValid || returnTrue,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigationDirection,
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }
    });
    useImperativeHandle(ref, () => info);
    return (_jsx(AccordionSectionContext.Provider, { value: info.context, children: render(info) }));
});
export const AccordionSection = memoForwardRef(function AccordionSection({ open, index, tagButton, disabled, bodyRole, onPress, hidden, getText, render, }, ref) {
    const context = useContext(AccordionSectionContext);
    const info = useAccordionSection({
        buttonParameters: { disabled: disabled ?? false, tagButton, onPress: onPress ?? null },
        accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
        managedChildParameters: { index, },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        pressParameters: { allowRepeatPresses: false },
        refElementParameters: {},
        context,
        textContentParameters: {
            hidden: hidden || false,
            getText: useDefault("getText", getText)
        },
    });
    useImperativeHandle(ref, () => info);
    return render(info);
});
//# sourceMappingURL=accordion.js.map