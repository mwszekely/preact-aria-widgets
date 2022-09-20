import { ComponentChildren, createContext, createElement, h, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useAriaRadioGroup, UseAriaRadioGroupParameters, UseAriaRadioGroupReturnTypeInfo, UseAriaRadioParameters, UseRadio, UseRadioReturnTypeInfo } from "../use-radio-group";
import { defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox"

type Get<T, K extends keyof T> = T[K];

export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends HTMLElement, InputElement extends Element, LabelElement extends Element> extends
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "radioGroup">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "linearNavigation">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "listNavigation">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "managedChildren">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "rovingTabIndex">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "childrenHaveFocus">,
    Get<UseAriaRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, LabelElement>, "typeaheadNavigation"> {
    //propsGroupLabel: () => h.JSX.HTMLAttributes<GroupLabelElement>;
    //propsGroup: () => h.JSX.HTMLAttributes<GroupElement>;
    render(info: UseAriaRadioGroupReturnTypeInfo<InputElement>, modifyLabelProps: PropModifier<GroupLabelElement>, modifyGroupProps: PropModifier<GroupElement>): VNode<any>;
}

export interface RadioProps<V extends string | number, InputElement extends Element, LabelElement extends Element> extends
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "radio">,
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "listNavigation">,
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "rovingTabIndex">,
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "managedChild">,
    UseHasFocusParameters<InputElement>,
    Get<UseAriaRadioParameters<V, InputElement, LabelElement>, "radio"> {
    render(info: UseRadioReturnTypeInfo<InputElement>, modifyInputProps: PropModifier<InputElement>, modifyLabelProps: PropModifier<LabelElement>): VNode<any>;
}

export function defaultRenderRadioGroup<InputElement extends Element, LabelElement extends Element>({ tagGroup, tagLabel, makePropsGroup, makePropsLabel }: { tagLabel: ElementToTag<LabelElement>, tagGroup: ElementToTag<InputElement>, makePropsLabel: (info: UseAriaRadioGroupReturnTypeInfo<InputElement>) => h.JSX.HTMLAttributes<LabelElement>, makePropsGroup: (info: UseAriaRadioGroupReturnTypeInfo<InputElement>) => h.JSX.HTMLAttributes<InputElement> }) {
    return function (info: UseAriaRadioGroupReturnTypeInfo<InputElement>, modifyLabelProps: PropModifier<LabelElement>, modifyGroupProps: PropModifier<InputElement>) {
        return (
            <>
                {createElement(tagLabel as never, modifyLabelProps(makePropsLabel(info)))}
                {createElement(tagGroup as never, modifyGroupProps(makePropsGroup(info)))}
            </>
        )
    }
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
    onAllLostFocus,
    onAnyGainedFocus,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
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
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }
    });

    return (
        <RadioContext.Provider value={useRadio}>
            {render(radioGroupReturn, useRadioGroupLabelProps, useRadioGroupProps)}
        </RadioContext.Provider>
    )
}

export interface DefaultRenderRadioParameters<I extends HTMLElement, L extends HTMLElement> extends DefaultRenderCheckboxLikeParameters<I, L, UseRadioReturnTypeInfo<I>> {

}

export function defaultRenderRadio<I extends HTMLElement, L extends HTMLElement>({ tagInput, tagLabel, makeInputProps, makeLabelProps, labelPosition }: DefaultRenderRadioParameters<I, L>) {
    return defaultRenderCheckboxLike<I, L, UseRadioReturnTypeInfo<I>>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps });
}

export function Radio<V extends string | number, InputElement extends Element, LabelElement extends Element>({ disabled, index, text, hidden, tagInput, labelPosition, tagLabel, value, render, flags, blurSelf, focusSelf, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: RadioProps<V, InputElement, LabelElement>) {
    const { useRadioInput, useRadioLabel, ...radioReturn } = useContext(RadioContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        radio: { disabled, labelPosition, tagInput, tagLabel, value },
        rovingTabIndex: { hidden, focusSelf, blurSelf },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }
    });

    const { useRadioInputProps } = useRadioInput({ tag: tagInput });
    const { useRadioLabelProps } = useRadioLabel({ tag: tagLabel });

    return render(radioReturn, useRadioInputProps, useRadioLabelProps);
}
