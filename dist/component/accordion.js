import { jsx as _jsx } from "preact/jsx-runtime";
import { createContext } from "preact";
import { assertEmptyObject, returnTrue } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useAccordion, useAccordionSection } from "../use-accordion.js";
import { useDefault } from "./util.js";
const AccordionSectionContext = createContext(null);
export const Accordion = memo(function Accordion({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, isValid, render, imperativeHandle, orientation, ...rest }) {
    assertEmptyObject(rest);
    const info = useAccordion({
        accordionParameters: { orientation, initialIndex, localStorageKey: localStorageKey ?? null },
        typeaheadNavigationParameters: {
            isValid: isValid || returnTrue,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        linearNavigationParameters: {
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }
    });
    useImperativeHandle(imperativeHandle, () => info);
    return (_jsx(AccordionSectionContext.Provider, { value: info.context, children: render(info) }));
});
export const AccordionSection = memo(function AccordionSection({ open, index, tagButton, disabled, bodyRole, onPress, untabbable, getText, imperativeHandle, render, ...rest }) {
    assertEmptyObject(rest);
    const context = useContextWithWarning(AccordionSectionContext, "accordion section");
    const info = useAccordionSection({
        buttonParameters: { disabled: disabled ?? false, tagButton, onPress: onPress ?? null },
        accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
        info: { index, untabbable: untabbable || false },
        refElementParameters: {},
        context,
        textContentParameters: { getText: useDefault("getText", getText) },
    });
    useImperativeHandle(imperativeHandle, () => info);
    return render(info);
});
//# sourceMappingURL=accordion.js.map