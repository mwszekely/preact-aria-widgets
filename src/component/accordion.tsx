import { createContext } from "preact";
import { OmitStrong, assertEmptyObject } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { Get5, Get6, useContextWithWarning } from "../props.js";
import { UseAccordionContext, UseAccordionParameters, UseAccordionReturnType, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType, useAccordion, useAccordionSection } from "../use-accordion.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";



export type AccordionProps<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<
    UseAccordionReturnType<HeaderButtonElement, M>,
    Get5<UseAccordionParameters<HeaderButtonElement, M>, "accordionParameters", "typeaheadNavigationParameters", "linearNavigationParameters", "managedChildrenParameters", "refElementParameters">,
    never>;

export type AccordionSectionProps<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<
    UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>,
    Get6<UseAccordionSectionParameters<HeaderButtonElement, BodyElement, M>, "info", "accordionSectionParameters", "buttonParameters", "textContentParameters", "pressParameters", "refElementHeaderButtonParameters">,
    "index" | "tagButton"> & { info?: OmitStrong<M, keyof UseAccordionSectionInfo<HeaderButtonElement>> }


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
    render,
    imperativeHandle,
    orientation,
    onNavigateLinear,
    onNavigateTypeahead,
    onElementChange,
    onMount,
    onUnmount,
    ...void1
}: AccordionProps<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>) {
    type M = UseAccordionSectionInfo<HeaderButtonElement>;
    assertEmptyObject(void1);

    return (
        useComponent<UseAccordionReturnType<HeaderButtonElement, M>>(
            imperativeHandle!,
            render,
            AccordionSectionContext,
            useAccordion<HeaderButtonElement>({
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
            })
        )
    );

})

export const AccordionSection = memo((function AccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
    open,
    index,
    tagButton,
    disabled,
    bodyRole,
    untabbable,
    getText,
    imperativeHandle,
    onPressSync,
    focusSelf,
    render,
    info,
    onElementChange,
    onMount,
    onUnmount,
    ...void1
}: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement, UseAccordionSectionInfo<HeaderButtonElement>>) {
    type M = UseAccordionSectionInfo<HeaderButtonElement>;
    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        null,
        useAccordionSection<HeaderContainerElement, HeaderButtonElement, BodyElement>({
            buttonParameters: { disabled: disabled ?? false, tagButton, onPressSync: onPressSync },
            pressParameters: { focusSelf: useDefault("focusSelf", focusSelf) },
            accordionSectionParameters: { open, bodyRole: bodyRole ?? "region" },
            info: { index, untabbable: untabbable || false, ...info },
            refElementHeaderButtonParameters: { onElementChange, onMount, onUnmount },
            refElementBodyParameters: {},
            textContentParameters: { getText: useDefault("getText", getText) },
            context: useContextWithWarning(AccordionSectionContext, "accordion section"),
        })
    );
}));
