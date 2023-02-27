import { h } from "preact";
import { CompleteListNavigationContext, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
import { UseCheckboxLikeParameters, UseCheckboxLikeReturnType } from "./use-checkbox-like.js";
import { FocusableLabelElement, LabelPosition, UseLabelSyntheticParameters } from "./use-label.js";
export interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, _GroupLabelElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "paginatedChildrenParameters" | "singleSelectionParameters"> {
    radioGroupParameters: {
        name: string;
        selectedValue: V | null;
        onSelectedValueChange(value: V | null, event: Event | undefined): void;
    };
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
}
export interface UseRadioParameters<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> extends OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M, "getValue2">, "singleSelectionChildParameters"> {
    radioParameters: {
        value: V;
    };
    context: RadioContext<V, any, FocusableLabelElement<LP, InputElement, LabelElement>, M>;
    checkboxLikeParameters: OmitStrong<UseCheckboxLikeParameters<LP, InputElement, LabelElement>["checkboxLikeParameters"], "checked" | "onInput" | "role">;
    labelParameters: OmitStrong<UseCheckboxLikeParameters<LP, InputElement, LabelElement>["labelParameters"], never>;
    singleSelectionChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M, never>["singleSelectionChildParameters"], "ariaPropName" | "selectionMode">;
}
export interface RadioContext<V extends number | string, ParentElement extends Element, ChildElement extends Element, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    radioContext: {
        name: string;
        byName: Map<V, number>;
    };
}
export interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>, "props"> {
    radioGroupReturn: {
        selectedIndex: number | null;
    };
    propsRadioGroup: h.JSX.HTMLAttributes<GroupElement>;
    propsRadioGroupLabel: h.JSX.HTMLAttributes<GroupLabelElement>;
    context: RadioContext<V, GroupElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>;
}
export interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseCompleteListNavigationChildInfo<TabbableChildElement> {
    getValue2(): V;
}
export declare function useRadioGroup<V extends string | number, G extends Element, GL extends Element, TCE extends Element>({ labelParameters, radioGroupParameters: { name, onSelectedValueChange, selectedValue }, ...restParams }: UseRadioGroupParameters<V, G, GL, TCE>): UseRadioGroupReturnType<V, G, GL, TCE>;
export interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends Element, IL extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong<UseCompleteListNavigationChildReturnType<FocusableLabelElement<LP, I, IL>, M>, "pressParameters" | "props">, UseCheckboxLikeReturnType<I, IL> {
    propsInput: h.JSX.HTMLAttributes<I>;
    propsLabel: h.JSX.HTMLAttributes<IL>;
}
export declare function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number>({ radioParameters: { value }, checkboxLikeParameters: { disabled }, completeListNavigationChildParameters, labelParameters, managedChildParameters, singleSelectionChildParameters, context, textContentParameters, rovingTabIndexChildParameters, sortableChildParameters }: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>;
//# sourceMappingURL=use-radio-group.d.ts.map