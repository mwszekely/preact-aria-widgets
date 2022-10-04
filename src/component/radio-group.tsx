import { createContext, createElement, h, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useRadioGroup, UseRadioGroupParameters, UseRadioGroupReturnTypeInfo, UseRadioParameters, UseRadio, UseRadioReturnTypeInfo } from "../use-radio-group";
import { defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox"

type Get<T, K extends keyof T> = T[K];

export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends HTMLElement, InputElement extends Element> extends
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement>, "radioGroup">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement>, "linearNavigation">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement>, "listNavigation">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement>, "managedChildren">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement>, "rovingTabIndex">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement>, "childrenHaveFocus">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement>, "typeaheadNavigation"> {
    //propsGroupLabel: () => h.JSX.HTMLAttributes<GroupLabelElement>;
    //propsGroup: () => h.JSX.HTMLAttributes<GroupElement>;
    render(info: UseRadioGroupReturnTypeInfo<V, InputElement>, modifyLabelProps: PropModifier<GroupLabelElement>, modifyGroupProps: PropModifier<GroupElement>): VNode<any>;
}

export interface RadioProps<V extends string | number, InputElement extends Element, LabelElement extends Element> extends
    Get<UseRadioParameters<V, InputElement, LabelElement>, "radio">,
    Get<UseRadioParameters<V, InputElement, LabelElement>, "listNavigation">,
    Get<UseRadioParameters<V, InputElement, LabelElement>, "rovingTabIndex">,
    Get<UseRadioParameters<V, InputElement, LabelElement>, "managedChild">,
    Get<UseRadioParameters<V, InputElement, LabelElement>, "hasFocusInput">,
    UseHasFocusParameters<InputElement>,
    Get<UseRadioParameters<V, InputElement, LabelElement>, "radio"> {
    render(info: UseRadioReturnTypeInfo<InputElement, LabelElement>, modifyInputProps: PropModifier<InputElement>, modifyLabelProps: PropModifier<LabelElement>): VNode<any>;
}

export function defaultRenderRadioGroup<V extends string | number, InputElement extends Element, LabelElement extends Element>({ tagGroup, tagLabel, makePropsGroup, makePropsLabel }: { tagLabel: ElementToTag<LabelElement>, tagGroup: ElementToTag<InputElement>, makePropsLabel: (info: UseRadioGroupReturnTypeInfo<V, InputElement>) => h.JSX.HTMLAttributes<LabelElement>, makePropsGroup: (info: UseRadioGroupReturnTypeInfo<V, InputElement>) => h.JSX.HTMLAttributes<InputElement> }) {
    return function (info: UseRadioGroupReturnTypeInfo<V, InputElement>, modifyLabelProps: PropModifier<LabelElement>, modifyGroupProps: PropModifier<InputElement>) {
        return (
            <>
                {createElement(tagLabel as never, modifyLabelProps(makePropsLabel(info)))}
                {createElement(tagGroup as never, modifyGroupProps(makePropsGroup(info)))}
            </>
        )
    }
}

const RadioContext = createContext<UseRadio<any, any, any>>(null!);
export const RadioGroup = memo(function RadioGroup<V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, InputElement extends HTMLElement, LabelElement extends HTMLElement>({
    render,
    tagGroup,
    tagGroupLabel,
    name,
    onSelectedValueChange,
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
}: RadioGroupProps<V, GroupElement, GroupLabelElement, InputElement>) {
    const {
        useRadio,
        useRadioGroupLabelProps,
        useRadioGroupProps,
        ...radioGroupReturn
    } = useRadioGroup<V, GroupElement, GroupLabelElement, InputElement, LabelElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        radioGroup: { name, onSelectedValueChange, selectedValue, tagGroup, tagGroupLabel },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus },
        singleSelection: { selectionMode: "focus" }
    });

    return (
        <RadioContext.Provider value={useRadio}>
            {render(radioGroupReturn, useRadioGroupLabelProps, useRadioGroupProps)}
        </RadioContext.Provider>
    )
})

export interface DefaultRenderRadioParameters<I extends HTMLElement, L extends HTMLElement> extends DefaultRenderCheckboxLikeParameters<I, L, UseRadioReturnTypeInfo<I, L>> {

}

export function defaultRenderRadio<I extends HTMLElement, L extends HTMLElement>({ tagInput, tagLabel, makeInputProps, makeLabelProps, labelPosition }: DefaultRenderRadioParameters<I, L>) {
    return defaultRenderCheckboxLike<I, L, UseRadioReturnTypeInfo<I, L>>({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps });
}

export const Radio = memo(function Radio<V extends string | number, InputElement extends Element, LabelElement extends Element>({ disabled, index, text, hidden, tagInput, labelPosition, tagLabel, value, render, flags, focusSelf, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: RadioProps<V, InputElement, LabelElement>) {
    const { useRadioInput, useRadioLabel, ...radioReturn } = useContext(RadioContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        radio: { disabled, labelPosition, tagInput, tagLabel, value },
        rovingTabIndex: { hidden, focusSelf },
        hasFocusInput: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        hasFocusLabel: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }
    });

    const { useRadioInputProps } = useRadioInput({ tag: tagInput });
    const { useRadioLabelProps } = useRadioLabel({ tag: tagLabel });

    return render(radioReturn, useRadioInputProps, useRadioLabelProps);
})
