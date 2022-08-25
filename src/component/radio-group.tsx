import { createContext, createElement, h, VNode } from "preact";
import { useContext } from "preact/hooks";
import { useAriaRadioGroup, UseAriaRadioGroupParameters, UseAriaRadioInfoBase, UseAriaRadioParameters, UseRadio } from "../use-radio-group";

export type RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends HTMLElement, InputElement extends Element, LabelElement extends Element> = Omit<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement, string, UseAriaRadioInfoBase>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    propsGroupLabel: () => h.JSX.HTMLAttributes<GroupLabelElement>;
    propsGroup: () => h.JSX.HTMLAttributes<GroupElement>;
    render?(label: VNode, group: VNode): VNode<any>;
}

export type RadioProps<V extends string | number, InputElement extends Element, LabelElement extends Element> = Omit<UseAriaRadioParameters<V, InputElement, LabelElement, UseAriaRadioInfoBase>, "info"> & {
    propsLabel: () => h.JSX.HTMLAttributes<LabelElement>;
    propsInput: () => h.JSX.HTMLAttributes<InputElement>;
    render?(input: VNode, label: VNode): VNode<any>;
} & Omit<UseAriaRadioParameters<V, InputElement, LabelElement, UseAriaRadioInfoBase>["info"], "blurSelf" | "getElement" | "focusSelf" | "flags">

function defaultGroupRender(label: VNode, group: VNode) {
    return (
        <>
            {label}
            {group}
        </>
    )
}

const RadioContext = createContext<UseRadio<any, any, any, UseAriaRadioInfoBase>>(null!);
export function RadioGroup<V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, InputElement extends HTMLElement, LabelElement extends HTMLElement>({ render, tagGroup, tagGroupLabel, propsGroup, propsGroupLabel, initialIndex, name, onInput, selectedValue, collator, disableArrowKeys, disableHomeEndKeys, navigationDirection, noTypeahead, typeaheadTimeout }: RadioGroupProps<V, GroupElement, GroupLabelElement, InputElement, LabelElement>) {
    const {
        currentTypeahead,
        invalidTypeahead,
        selectedIndex,
        useRadio,
        useRadioGroupLabelProps,
        useRadioGroupProps
    } = useAriaRadioGroup<V, GroupElement, GroupLabelElement, InputElement, LabelElement, UseAriaRadioInfoBase>({
        name,
        tagGroup,
        tagGroupLabel,
        initialIndex,
        onInput,
        selectedValue,
        collator,
        disableArrowKeys,
        disableHomeEndKeys,
        navigationDirection,
        noTypeahead,
        typeaheadTimeout,
    });

    const label = createElement(tagGroupLabel, useRadioGroupLabelProps(propsGroupLabel()) as any);
    const group = createElement(tagGroup, useRadioGroupProps(propsGroup()) as any);

    return (
        <RadioContext.Provider value={useRadio}>
            {(render ?? defaultGroupRender)(label, group)}
        </RadioContext.Provider>
    )
}

function defaultRenderSeparate(input: VNode<any>, label: VNode<any>): VNode<any> {
    return (
        <>
            {input}
            {label}
        </>
    )
}

function defaultRenderCombined(input: VNode<any>, label: VNode<any>): VNode<any> {
    label.props.children = <>{input}{label.props.children}</>
    return (
        <>
            {label}
        </>
    )
}

export function Radio<V extends string | number, InputElement extends Element, LabelElement extends Element>({ disabled, index, text, hidden, tagInput, labelPosition, tagLabel, value, propsInput, propsLabel, render }: RadioProps<V, InputElement, LabelElement>) {
    const { checked, tabbable, useRadioInput, useRadioLabel } = useContext(RadioContext)({ disabled, tagInput, info: { flags: {}, index, text, hidden }, labelPosition, tagLabel, value });

    const { useRadioInputProps } = useRadioInput({ tag: tagInput });
    const { useRadioLabelProps } = useRadioLabel({ tag: tagLabel });

    const input = createElement(tagInput, useRadioInputProps(propsInput()) as any);
    const label = createElement(tagLabel, useRadioLabelProps(propsLabel()) as any);
    if (labelPosition == "separate") {
        return (render ?? defaultRenderSeparate)(input, label);
    }
    else {
        return (render ?? defaultRenderCombined)(input, label);
    }
}
