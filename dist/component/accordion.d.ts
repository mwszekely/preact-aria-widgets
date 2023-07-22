import { Ref, VNode } from "preact";
import { Get4 } from "../props.js";
import { UseAccordionParameters, UseAccordionReturnType, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType } from "../use-accordion.js";
import { PartialExcept } from "./util.js";
interface AccordionPropsBase<HeaderButtonElement extends Element> extends Get4<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionParameters", "typeaheadNavigationParameters", "linearNavigationParameters", "managedChildrenParameters"> {
    imperativeHandle?: Ref<UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>>;
}
interface AccordionSectionPropsBase<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends Get4<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "info", "accordionSectionParameters", "buttonParameters", "textContentParameters"> {
    imperativeHandle?: Ref<UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>>;
}
export interface AccordionProps<HeaderButtonElement extends Element> extends PartialExcept<AccordionPropsBase<HeaderButtonElement>, never> {
    render(info: UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>): VNode<any>;
}
export interface AccordionSectionProps<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends PartialExcept<AccordionSectionPropsBase<HeaderElement, HeaderButtonElement, BodyElement>, "index" | "tagButton"> {
    render(info: UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>): VNode<any>;
}
export declare const Accordion: <HeaderButtonElement extends Element>({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, isValid, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...rest }: AccordionProps<HeaderButtonElement>) => import("preact").JSX.Element;
export declare const AccordionSection: <HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ open, index, tagButton, disabled, bodyRole, onPress, untabbable, getText, imperativeHandle, render, ...rest }: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement>) => VNode<any>;
export {};
//# sourceMappingURL=accordion.d.ts.map