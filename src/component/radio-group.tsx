import { createContext, createElement, h, VNode } from "preact";
import { useContext } from "preact/hooks";
import { useAriaRadioGroup, UseAriaRadioGroupParameters, UseAriaRadioGroupReturnTypeInfo, UseAriaRadioParameters, UseRadio, UseRadioReturnTypeInfo } from "../use-radio-group";

type Get<T, K extends keyof T> = T[K];

export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends HTMLElement, InputElement extends Element, LabelElement extends Element> extends
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "radioGroup">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "linearNavigation">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "listNavigation">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "managedChildren">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "rovingTabIndex">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "typeaheadNavigation"> {
    //propsGroupLabel: () => h.JSX.HTMLAttributes<GroupLabelElement>;
    //propsGroup: () => h.JSX.HTMLAttributes<GroupElement>;
    render?(info: UseAriaRadioGroupReturnTypeInfo<InputElement>, label: h.JSX.HTMLAttributes<GroupLabelElement>, group: h.JSX.HTMLAttributes<GroupElement>): VNode<any>;
}

export interface RadioProps<V extends string | number, InputElement extends Element, LabelElement extends Element> extends
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "radio">,
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "listNavigation">,
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "rovingTabIndex">,
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "managedChild">,
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "radio"> {
    // propsLabel: () => h.JSX.HTMLAttributes<LabelElement>;
    //propsInput: () => h.JSX.HTMLAttributes<InputElement>;
    render?(info: UseRadioReturnTypeInfo<InputElement>, input: h.JSX.HTMLAttributes<InputElement>, label: h.JSX.HTMLAttributes<LabelElement>): VNode<any>;
}

function defaultGroupRender(info: UseAriaRadioGroupReturnTypeInfo<any>, labelProps: h.JSX.HTMLAttributes<any>, groupProps: h.JSX.HTMLAttributes<any>) {
    const label = <div {...labelProps} />;
    const group = <div {...groupProps} />;
    return (
        <>
            {label}
            {group}
        </>
    )
}

const RadioContext = createContext<UseRadio<any, any, any>>(null!);
export function RadioGroup<V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, InputElement extends HTMLElement, LabelElement extends HTMLElement>({
    render,
    tagGroup,
    tagGroupLabel,
    initialIndex,
    name,
    onInput,
    selectedValue,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigationDirection,
    noTypeahead,
    typeaheadTimeout,
    indexDemangler,
    indexMangler,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    onTabbedInTo,
    onTabbedOutOf
}: RadioGroupProps<V, GroupElement, GroupLabelElement, InputElement, LabelElement>) {
    const {
        useRadio,
        useRadioGroupLabelProps,
        useRadioGroupProps,
        ...radioGroupReturn
    } = useAriaRadioGroup<V, GroupElement, GroupLabelElement, InputElement, LabelElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        radioGroup: { name, onInput, selectedValue, tagGroup, tagGroupLabel },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    return (
        <RadioContext.Provider value={useRadio}>
            {(render ?? defaultGroupRender)(radioGroupReturn, useRadioGroupLabelProps({}), useRadioGroupProps({}))}
        </RadioContext.Provider>
    )
}

function defaultRenderSeparate(inputTag: string, inputLabel: string) {
    return function (info: UseRadioReturnTypeInfo<any>, inputProps: h.JSX.HTMLAttributes<any>, labelProps: h.JSX.HTMLAttributes<any>): VNode<any> {
        const input = createElement(inputTag, inputProps);
        const label = createElement(inputLabel, labelProps);

        return (
            <>
                {input}
                {label}
            </>
        )
    }
}

function defaultRenderCombined(inputTag: string, inputLabel: string) {
    return function (info: UseRadioReturnTypeInfo<any>, inputProps: h.JSX.HTMLAttributes<any>, { children, ...labelProps }: h.JSX.HTMLAttributes<any>): VNode<any> {
        const input = createElement(inputTag, inputProps);
        const label = createElement(inputLabel, { ...labelProps, children: <>{input}{children}</> });
        return (
            <>
                {label}
            </>
        )
    }
}

export function Radio<V extends string | number, InputElement extends Element, LabelElement extends Element>({ disabled, index, text, hidden, tagInput, labelPosition, tagLabel, value, render, flags, blurSelf, focusSelf }: RadioProps<V, InputElement, LabelElement>) {
    const { useRadioInput, useRadioLabel, ...radioReturn } = useContext(RadioContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        radio: { disabled, labelPosition, tagInput, tagLabel, value },
        rovingTabIndex: { hidden, focusSelf, blurSelf }
    });

    const { useRadioInputProps } = useRadioInput({ tag: tagInput });
    const { useRadioLabelProps } = useRadioLabel({ tag: tagLabel });

    if (labelPosition == "separate") {
        return (render ?? defaultRenderSeparate(tagInput, tagLabel))(radioReturn, useRadioInputProps({}), useRadioLabelProps({}));
    }
    else {
        return (render ?? defaultRenderCombined(tagInput, tagLabel))(radioReturn, useRadioInputProps({}), useRadioLabelProps({}));
    }
}
