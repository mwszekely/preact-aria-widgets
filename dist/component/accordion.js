import { createContext } from "preact";
import { assertEmptyObject } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContextWithWarning } from "../props.js";
import { useAccordion, useAccordionSection } from "../use-accordion.js";
import { useComponent, useDefault } from "./util.js";
const AccordionSectionContext = createContext(null);
export const Accordion = memo(function Accordion({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, ...void1 }) {
    assertEmptyObject(void1);
    return (useComponent(imperativeHandle, render, AccordionSectionContext, useAccordion({
        accordionParameters: { orientation, initialIndex, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        refElementParameters: { onElementChange, onMount, onUnmount },
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange },
    })));
});
export const AccordionSection = memo((function AccordionSection({ open, index, tagButton, disabled, bodyRole, untabbable, getText, imperativeHandle, onPressSync, focusSelf, render, info, onElementChange, onMount, onUnmount, ...void1 }) {
    assertEmptyObject(void1);
    return useComponent(imperativeHandle, render, null, useAccordionSection({
        buttonParameters: { disabled: disabled ?? false, tagButton, onPressSync: onPressSync },
        pressParameters: { focusSelf: useDefault("focusSelf", focusSelf) },
        accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
        info: { index, untabbable: untabbable || false, ...info },
        refElementHeaderButtonParameters: { onElementChange, onMount, onUnmount },
        refElementBodyParameters: {},
        textContentParameters: { getText: useDefault("getText", getText) },
        context: useContextWithWarning(AccordionSectionContext, "accordion section"),
    }));
}));
//# sourceMappingURL=accordion.js.map