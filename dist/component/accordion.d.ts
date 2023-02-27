import { Ref, VNode } from "preact";
import { UseAccordionParameters, UseAccordionReturnType, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionReturnType } from "../use-accordion.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface AccordionPropsBase<HeaderButtonElement extends Element> extends Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionParameters">, Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "typeaheadNavigationParameters">, Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "linearNavigationParameters">, Get<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "managedChildrenParameters"> {
    imperativeHandle?: Ref<UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>>;
}
interface AccordionSectionPropsBase<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionSectionParameters">, Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "managedChildParameters">, Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "buttonParameters">, Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "rovingTabIndexChildParameters">, Get<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "textContentParameters"> {
    imperativeHandle?: Ref<UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>>;
}
export interface AccordionProps<HeaderButtonElement extends Element> extends PartialExcept<AccordionPropsBase<HeaderButtonElement>, "navigationDirection"> {
    render(info: UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>): VNode<any>;
}
export interface AccordionSectionProps<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends PartialExcept<AccordionSectionPropsBase<HeaderElement, HeaderButtonElement, BodyElement>, "index" | "tagButton"> {
    render(info: UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>): VNode<any>;
}
export declare const Accordion: <HeaderButtonElement extends Element>({ disableArrowKeys, disableHomeEndKeys, initialIndex, navigationDirection, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildCountChange, isValid, render, imperativeHandle, ...rest }: AccordionProps<HeaderButtonElement>) => import("preact").JSX.Element;
export declare const AccordionSection: <HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ open, index, tagButton, disabled, bodyRole, onPress, hidden, getText, imperativeHandle, render, ...rest }: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement>) => VNode<any>;
export {};
//# sourceMappingURL=accordion.d.ts.map