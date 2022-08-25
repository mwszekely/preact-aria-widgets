import { ComponentChildren, createContext, createElement, h, RenderableProps, VNode } from "preact";
import { useContext } from "preact/hooks";
import { ElementToTag } from "props";
import { useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildInfoBase, UseCheckboxGroupChildParameters, UseCheckboxGroupParameters } from "../use-checkbox-group";

export interface CheckboxGroupProps<InputType extends Element, LabelType extends Element, K extends string, I extends UseCheckboxGroupChildInfoBase<K>> extends RenderableProps<{}>, Omit<UseCheckboxGroupParameters<K, I>, "indexMangler" | "indexDemangler" | "onTabbableIndexChange" | "onChildrenMountChange" | "onAfterChildLayoutEffect" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> {
    parentDisabled?: boolean;
    tagInput: ElementToTag<InputType>;
    tagLabel: ElementToTag<LabelType>;
    labelPosition: "separate" | "wrapping";
    propsInput(): h.JSX.HTMLAttributes<InputType>;
    propsLabel(): h.JSX.HTMLAttributes<LabelType>;
    render?(input: VNode<any>, label: VNode<any>, children: ComponentChildren): VNode<any>;
}

export interface CheckboxGroupCheckboxProps<InputType extends Element, LabelType extends Element> extends Omit<UseCheckboxGroupChildParameters<InputType, LabelType>, "info"> {
    labelPosition: "separate" | "wrapping";
    propsInput(): h.JSX.HTMLAttributes<InputType>;
    propsLabel(): h.JSX.HTMLAttributes<LabelType>;
    render?(input: VNode<any>, label: VNode<any>): VNode<any>;
}

function defaultRenderChildSeparate(input: VNode<any>, label: VNode<any>): VNode<any> {
    return (
        <>
            {input}
            {label}
        </>
    )
}

function defaultRenderChildCombined(input: VNode<any>, label: VNode<any>): VNode<any> {
    label.props.children = <>{input}{label.props.children}</>
    return (
        <>
            {label}
        </>
    )
}

function defaultRenderGroupSeparate(input: VNode<any>, label: VNode<any>, children: ComponentChildren): VNode<any> {
    return (
        <>
            {input}
            {label}
            {children}
        </>
    )
}

function defaultRenderGroupCombined(input: VNode<any>, label: VNode<any>, children: ComponentChildren): VNode<any> {
    label.props.children = <>{input}{label.props.children}</>
    return (
        <>
            {label}
            {children}
        </>
    )
}

const UseCheckboxGroupChildContext = createContext<UseCheckboxGroupChild<any, any, any, any>>(null!);
export function CheckboxGroup<InputType extends HTMLElement, LabelType extends HTMLElement>({ children, parentDisabled, tagInput, tagLabel, propsInput, propsLabel, render, labelPosition, initialIndex, collator, disableArrowKeys, disableHomeEndKeys, navigationDirection, noTypeahead, typeaheadTimeout }: CheckboxGroupProps<InputType, LabelType, string, UseCheckboxGroupChildInfoBase<string>>) {
    const {
        checkboxes,
        currentTypeahead,
        invalidTypeahead,
        parentIsChecked,
        parentPercentChecked,
        useCheckboxGroupChild,
        useCheckboxGroupParentInput
    } = useCheckboxGroup<InputType, LabelType, string>({ 
        collator, 
        disableArrowKeys, 
        disableHomeEndKeys, 
        navigationDirection, 
        noTypeahead, 
        initialIndex, 
        typeaheadTimeout 
    });


    const { useCheckboxGroupParentInputProps, useCheckboxGroupParentLabelProps } = useCheckboxGroupParentInput({ disabled: parentDisabled ?? false, tagInput, labelPosition, tagLabel });

    const input = createElement(tagInput, useCheckboxGroupParentInputProps(propsInput()) as any);
    const label = createElement(tagLabel, useCheckboxGroupParentLabelProps(propsLabel()) as any);
    let combined: VNode<any>;
    if (labelPosition == "separate") {
        combined = (render ?? defaultRenderGroupSeparate)(input, label, children);
    }
    else {
        combined = (render ?? defaultRenderGroupCombined)(input, label, children);
    }
    
    return (
        <UseCheckboxGroupChildContext.Provider value={useCheckboxGroupChild}>{combined}</UseCheckboxGroupChildContext.Provider>
    )
}

export function CheckboxGroupCheckbox<InputType extends HTMLElement, LabelType extends HTMLElement>({ checked, disabled, tagInput, labelPosition, tagLabel, onInput, propsInput, propsLabel, render }: CheckboxGroupCheckboxProps<InputType, LabelType>) {
    const { tabbable, useCheckboxGroupChildInputProps, useCheckboxGroupChildLabelProps } = useContext(UseCheckboxGroupChildContext)({ checked,disabled, info: { }, tagInput, labelPosition, tagLabel, onInput });

    const input = createElement(tagInput, useCheckboxGroupChildInputProps(propsInput()) as any);
    const label = createElement(tagLabel, useCheckboxGroupChildLabelProps(propsLabel()) as any);
    if (labelPosition == "separate") {
        return (render ?? defaultRenderChildSeparate)(input, label);
    }
    else {
        return (render ?? defaultRenderChildCombined)(input, label);
    }
}
