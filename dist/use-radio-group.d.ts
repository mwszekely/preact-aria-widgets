import { CompleteListNavigationContext, ElementProps, Nullable, TargetedOmit, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildInfoKeysParameters, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationDeclarativeReturnType, UseCompleteListNavigationParameters, UseGenericChildParameters } from "preact-prop-helpers";
import { EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";
import { UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { FocusableLabelElement, LabelPosition, UseLabelSyntheticParameters } from "./use-label.js";
export interface RadioChangeEventDetail<V extends number | string> {
    selectedValue: V | undefined;
}
export type TargetedRadioChangeEvent<V extends number | string> = TargetedEnhancedEvent<Event, RadioChangeEventDetail<V>>;
export type RadioChangeEventHandler<V extends number | string> = EnhancedEventHandler<Event, RadioChangeEventDetail<V>>;
export interface UseRadioGroupParametersSelf<V extends string | number> {
    name: string;
    selectedValue: Nullable<V>;
    onSelectedValueChange: Nullable<RadioChangeEventHandler<V>>;
}
export interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, _GroupLabelElement extends Element, TabbableChildElement extends Element, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "multiSelectionParameters">, TargetedOmit<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, any>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    radioGroupParameters: UseRadioGroupParametersSelf<V>;
}
export interface UseRadioParametersSelf<V extends string | number> {
    value: V;
}
export interface UseRadioParameters<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> extends UseGenericChildParameters<RadioContext<V, FocusableLabelElement<LP, InputElement, LabelElement>, M>, Pick<M, Exclude<UseCompleteListNavigationChildInfoKeysParameters<M>, "focusSelf">>>, OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, "info" | "context" | "multiSelectionChildParameters" | "singleSelectionChildParameters">, TargetedOmit<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, "info", "focusSelf">, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "labelParameters", never>, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "pressParameters", "excludeSpace" | "onPressSync">, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "checkboxLikeParameters", "checked" | "role"> {
    radioParameters: UseRadioParametersSelf<V>;
}
export interface RadioContextSelf<V extends number | string> {
    name: string;
    nameToIndex: Map<V, number>;
    indexToName: Map<number, V>;
}
export interface RadioContext<V extends number | string, ChildElement extends Element, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ChildElement, M> {
    radioContext: RadioContextSelf<V>;
}
export interface UseRadioGroupReturnTypeSelf {
    selectedIndex: number | null;
}
export interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends OmitStrong<UseCompleteListNavigationDeclarativeReturnType<GroupElement, TabbableChildElement, M>, "context" | "props" | "multiSelectionReturn"> {
    radioGroupReturn: UseRadioGroupReturnTypeSelf;
    propsRadioGroup: ElementProps<GroupElement>;
    propsRadioGroupLabel: ElementProps<GroupLabelElement>;
    context: RadioContext<V, TabbableChildElement, M>;
}
export interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseCompleteListNavigationChildInfo<TabbableChildElement> {
}
/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useRadio}
 */
export declare function useRadioGroup<V extends string | number, G extends Element, GL extends Element, TCE extends Element>({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, refElementParameters, ...void1 }: UseRadioGroupParameters<V, G, GL, TCE, RadioSubInfo<TCE, V>>): UseRadioGroupReturnType<V, G, GL, TCE, RadioSubInfo<TCE, V>>;
export interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends Element, IL extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong<UseCompleteListNavigationChildReturnType<FocusableLabelElement<LP, I, IL>, M>, "propsChild" | "propsTabbable" | "pressParameters">, UseCheckboxLikeReturnType<I, IL> {
    propsInput: ElementProps<I>;
    propsLabel: ElementProps<IL>;
}
/**
 * @compositeParams
 */
export declare function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number>({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>;
//# sourceMappingURL=use-radio-group.d.ts.map