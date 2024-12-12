import { OmitStrong } from "preact-prop-helpers";
import { Get4, Get6 } from "../props.js";
import { UseAccordionParameters, UseAccordionReturnType, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType } from "../use-accordion.js";
import { GenericComponentProps } from "./util.js";
export type AccordionProps<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<UseAccordionReturnType<HeaderButtonElement, M>, Get4<UseAccordionParameters<HeaderButtonElement, M>, "accordionParameters", "typeaheadNavigationParameters", "linearNavigationParameters", "managedChildrenParameters">, never>;
export type AccordionSectionProps<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<UseAccordionSectionReturnType<HeaderContainerElement, HeaderButtonElement, BodyElement>, Get6<UseAccordionSectionParameters<HeaderContainerElement, HeaderButtonElement, BodyElement, M>, "info", "accordionSectionParameters", "buttonParameters", "textContentParameters", "pressParameters", "refElementHeaderButtonParameters">, "index" | "tagButton"> & {
    info?: OmitStrong<M, keyof UseAccordionSectionInfo<HeaderButtonElement>>;
};
export declare const Accordion: <HeaderButtonElement extends Element>({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...void1 }: AccordionProps<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>) => import("preact").h.JSX.Element;
export declare const AccordionSection: <HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ open, index, tagButton, disabled, bodyRole, untabbable, getText, imperativeHandle, onPressSync, focusSelf, render, info, onElementChange, onMount, onUnmount, onTextContentChange, ...void1 }: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement, UseAccordionSectionInfo<HeaderButtonElement>>) => import("preact").h.JSX.Element;
//# sourceMappingURL=accordion.d.ts.map