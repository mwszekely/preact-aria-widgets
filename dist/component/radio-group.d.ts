import { Ref, VNode } from "preact";
import { OmitStrong } from "../props.js";
import { FocusableLabelElement, LabelPosition } from "../use-label.js";
import { RadioSubInfo, UseRadioGroupParameters, UseRadioGroupReturnType, UseRadioParameters, UseRadioReturnType } from "../use-radio-group.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
interface RadioGroupPropsBase<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters">, Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "linearNavigationParameters">, Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "labelParameters">, Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters">, Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "rearrangeableChildrenParameters">, Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "staggeredChildrenParameters">, Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "sortableChildrenParameters">, Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "rovingTabIndexParameters">, Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "typeaheadNavigationParameters"> {
    ref?: Ref<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>>;
}
interface RadioPropsBase<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "radioParameters">, Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "checkboxLikeParameters">, Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "labelParameters">, Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "rovingTabIndexChildParameters">, OmitStrong<Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "singleSelectionChildParameters">, "disabled">, Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "textContentParameters">, Pick<RadioSubInfo<any, V>, "index"> {
    focusSelf?: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>["info"]["focusSelf"];
}
export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends PartialExcept<RadioGroupPropsBase<V, GroupElement, GroupLabelElement, TabbableChildElement>, "ariaLabel" | "name" | "selectedValue" | "onSelectedValueChange"> {
    render(info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>): VNode<any>;
}
export interface RadioProps<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends PartialExcept<RadioPropsBase<LP, InputElement, LabelElement, V>, "index" | "value" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel"> {
    render(info: UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): VNode<any>;
}
export declare const RadioGroup: <V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, TabbableChildElement extends HTMLElement>({ render, name, onSelectedValueChange, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, compare, staggered, getIndex, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, pageNavigationSize, }: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const Radio: <LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element>({ disabled, index, render, value, ariaLabel, focusSelf, labelPosition, hidden, tagInput, tagLabel, getText }: RadioProps<LP, InputElement, LabelElement, V>, ref?: Ref<any>) => VNode<any>;
export {};
//# sourceMappingURL=radio-group.d.ts.map