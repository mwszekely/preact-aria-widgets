import { createContext, Ref, VNode } from "preact";
import { returnTrue } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useAccordion, UseAccordionContext, UseAccordionParameters, UseAccordionReturnType, useAccordionSection, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType } from "../use-accordion.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface AccordionPropsBase<HeaderButtonElement extends Element> extends
    Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionParameters">,
    Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "typeaheadNavigationParameters">,
    Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "linearNavigationParameters">,
    Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "managedChildrenParameters"> {
    ref?: Ref<UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>>;
}

interface AccordionSectionPropsBase<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionSectionParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "managedChildParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "buttonParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "rovingTabIndexChildParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "textContentParameters">,
    Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "pressParameters"> {
    ref?: Ref<UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>>;
}


export interface AccordionProps<HeaderButtonElement extends Element> extends PartialExcept<AccordionPropsBase<HeaderButtonElement>, "navigationDirection"> {
    render(info: UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>): VNode<any>;
}

export interface AccordionSectionProps<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends PartialExcept<AccordionSectionPropsBase<HeaderElement, HeaderButtonElement, BodyElement>, "index" | "tagButton"> {
    render(info: UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>): VNode<any>;
}


const AccordionSectionContext = createContext<UseAccordionContext<any, any>>(null!);
export const Accordion = memoForwardRef(function Accordion<HeaderButtonElement extends Element>({
    disableArrowKeys,
    disableHomeEndKeys,
    initialIndex,
    navigationDirection,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    localStorageKey,
    collator,
    noTypeahead,
    typeaheadTimeout,
    isValid,
    render,
    ..._rest
}: AccordionProps<HeaderButtonElement>, ref?: Ref<any>) {

    const info = useAccordion<HeaderButtonElement, UseAccordionSectionInfo>({
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
    useImperativeHandle(ref!, () => info);

    return (
        <AccordionSectionContext.Provider value={info.context}>{render(info)}</AccordionSectionContext.Provider>
    )
})

export const AccordionSection = memoForwardRef(function AccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
    open,
    index,
    tagButton,
    disabled,
    bodyRole,
    onPress,
    hidden,
    getText,
    render,
}: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement>, ref?: Ref<any>) {
    const context = useContext(AccordionSectionContext) as UseAccordionContext<HeaderButtonElement, UseAccordionSectionInfo>;
    const info = useAccordionSection<HeaderContainerElement, HeaderButtonElement, BodyElement>({
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

    useImperativeHandle(ref!, () => info);

    return render(info);
});
