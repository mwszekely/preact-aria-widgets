import { Get7, Get8 } from "../props.js";
import { FocusableLabelElement, LabelPosition } from "../use-label.js";
import { RadioSubInfo, UseRadioGroupParameters, UseRadioGroupReturnType, UseRadioParameters, UseRadioReturnType } from "../use-radio-group.js";
import { GenericComponentProps, PartialExcept } from "./util.js";
interface RadioGroupPropsBase<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends Get8<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters", "linearNavigationParameters", "labelParameters", "radioGroupParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "refElementParameters", "singleSelectionParameters"> {
}
interface RadioPropsBase<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends Get7<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "radioParameters", "checkboxLikeParameters", "labelParameters", "textContentParameters", "pressParameters", "hasCurrentFocusParameters", "refElementParameters">, Pick<RadioSubInfo<any, V>, "index" | "untabbable"> {
}
export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends GenericComponentProps<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>, PartialExcept<RadioGroupPropsBase<V, GroupElement, GroupLabelElement, TabbableChildElement>, "ariaLabel" | "name" | "selectedValue">, "name" | "selectedValue"> {
}
export interface RadioProps<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends GenericComponentProps<UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, PartialExcept<RadioPropsBase<LP, InputElement, LabelElement, V>, "index" | "value" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel">, "value" | "index" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel"> {
}
export declare const RadioGroup: <V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, TabbableChildElement extends HTMLElement>({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, singleSelectionMode, ...void1 }: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>) => import("preact-prop-helpers").JSX.Element;
export declare const Radio: <LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element>({ disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, onTextContentChange, ...void1 }: RadioProps<LP, InputElement, LabelElement, V>) => import("preact-prop-helpers").JSX.Element;
export {};
//# sourceMappingURL=radio-group.d.ts.map