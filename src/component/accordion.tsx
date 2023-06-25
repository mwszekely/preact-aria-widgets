import { createContext, Ref, VNode } from "preact";
import { assertEmptyObject, returnTrue } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { useAccordion, UseAccordionContext, UseAccordionParameters, UseAccordionReturnType, useAccordionSection, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType } from "../use-accordion.js";
import { PartialExcept, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface AccordionPropsBase<HeaderButtonElement extends Element> extends
    Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionParameters">,
    Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "typeaheadNavigationParameters">,
    Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "linearNavigationParameters">,
    Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "managedChildrenParameters"> {
    imperativeHandle?: Ref<UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>>;
}

interface AccordionSectionPropsBase<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionSectionParameters">,
    Pick<Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "info">, "index" | "untabbable">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "buttonParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "textContentParameters"> {
    imperativeHandle?: Ref<UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>>;
}


export interface AccordionProps<HeaderButtonElement extends Element> extends PartialExcept<AccordionPropsBase<HeaderButtonElement>, never> {
    render(info: UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>): VNode<any>;
}

export interface AccordionSectionProps<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends PartialExcept<AccordionSectionPropsBase<HeaderElement, HeaderButtonElement, BodyElement>, "index" | "tagButton"> {
    render(info: UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAccordionContext<any, any>>(null!);
export const Accordion = memo(function Accordion<HeaderButtonElement extends Element>({
    disableHomeEndKeys,
    initialIndex,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    localStorageKey,
    collator,
    noTypeahead,
    typeaheadTimeout,
    onChildrenCountChange,
    isValid,
    render,
    imperativeHandle,
    orientation,
    ...rest
}: AccordionProps<HeaderButtonElement>) {
    assertEmptyObject(rest);

    const info = useAccordion<HeaderButtonElement, UseAccordionSectionInfo>({
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
    useImperativeHandle(imperativeHandle!, () => info);

    return (
        <AccordionSectionContext.Provider value={info.context}>{render(info)}</AccordionSectionContext.Provider>
    )
})

export const AccordionSection = memo(function AccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
    open,
    index,
    tagButton,
    disabled,
    bodyRole,
    onPress,
    untabbable,
    getText,
    imperativeHandle,
    render,
    ...rest
}: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement>) {
    assertEmptyObject(rest);
    const context = useContextWithWarning(AccordionSectionContext, "accordion section");
    const info = useAccordionSection<HeaderContainerElement, HeaderButtonElement, BodyElement>({
        buttonParameters: { disabled: disabled ?? false, tagButton, onPress: onPress ?? null },
        accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
        info: { index, untabbable: untabbable || false },
        refElementParameters: {},
        context,
        textContentParameters: { getText: useDefault("getText", getText) },
    });

    useImperativeHandle(imperativeHandle!, () => info);

    return render(info);
});
