import { OmitStrong, assertEmptyObject, createContext, memo } from "preact-prop-helpers";
import { Get4, Get6, useContextWithWarning } from "../props.js";
import { UseAccordionContext, UseAccordionParameters, UseAccordionReturnType, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType, useAccordion, useAccordionSection } from "../use-accordion.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";



export type AccordionProps<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<
    UseAccordionReturnType<HeaderButtonElement, M>,
    Get4<UseAccordionParameters<HeaderButtonElement, M>, "accordionParameters", "typeaheadNavigationParameters", "linearNavigationParameters", "managedChildrenParameters">,
    never>;

export type AccordionSectionProps<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<
    UseAccordionSectionReturnType<HeaderContainerElement, HeaderButtonElement, BodyElement>,
    Get6<UseAccordionSectionParameters<HeaderContainerElement, HeaderButtonElement, BodyElement, M>, "info", "accordionSectionParameters", "buttonParameters", "textContentParameters", "pressParameters", "refElementHeaderButtonParameters">,
    "index" | "tagButton"> & { info?: OmitStrong<M, keyof UseAccordionSectionInfo<HeaderButtonElement>> }


const AccordionSectionContext = createContext<UseAccordionContext<any, any>>(null!);
export const Accordion = /* @__PURE__ */ memo(function Accordion<HeaderButtonElement extends Element>({
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
                managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange },
            })
        )
    );

})

export const AccordionSection = /* @__PURE__ */ memo((function AccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({
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
    onTextContentChange,
    ...void1
}: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement, UseAccordionSectionInfo<HeaderButtonElement>>) {

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
            textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
            context: useContextWithWarning(AccordionSectionContext, "accordion section"),
        })
    );
}));
