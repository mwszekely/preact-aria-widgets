import { createContext, createElement, h, Ref, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useRadioGroup, UseRadioGroupParameters, UseRadioGroupReturnTypeInfo, UseRadioParameters, UseRadio, UseRadioReturnTypeInfo } from "../use-radio-group";
import { defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox"
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends HTMLElement, InputElement extends Element, C, K extends string> extends
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, C, K>, "radioGroup">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, C, K>, "linearNavigation">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, C, K>, "listNavigation">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, C, K>, "managedChildren">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, C, K>, "rovingTabIndex">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, C, K>, "childrenHaveFocus">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, InputElement, C, K>, "typeaheadNavigation"> {
    ref?: Ref<UseRadioGroupReturnTypeInfo<V, InputElement, C, K>>;
    render(info: UseRadioGroupReturnTypeInfo<V, InputElement, C, K>, modifyLabelProps: PropModifier<GroupLabelElement>, modifyGroupProps: PropModifier<GroupElement>): VNode<any>;
}

export interface RadioProps<V extends string | number, InputElement extends Element, LabelElement extends Element, C, K extends string> extends
    Get<UseRadioParameters<V, InputElement, LabelElement, C, K>, "radio">,
    Get<UseRadioParameters<V, InputElement, LabelElement, C, K>, "listNavigation">,
    Get<UseRadioParameters<V, InputElement, LabelElement, C, K>, "rovingTabIndex">,
    Get<UseRadioParameters<V, InputElement, LabelElement, C, K>, "managedChild">,
    Get<UseRadioParameters<V, InputElement, LabelElement, C, K>, "hasFocus">,
    Get<UseRadioParameters<V, InputElement, LabelElement, C, K>, "singleSelection">,
    UseHasFocusParameters<InputElement>,
    Get<UseRadioParameters<V, InputElement, LabelElement, C, K>, "radio"> {
    ref?: Ref<UseRadioReturnTypeInfo<InputElement, LabelElement>>;
    subInfo: C;
    render(info: UseRadioReturnTypeInfo<InputElement, LabelElement>, modifyInputProps: PropModifier<InputElement>, modifyLabelProps: PropModifier<LabelElement>): VNode<any>;
}

export function defaultRenderRadioGroup<V extends string | number, InputElement extends Element, LabelElement extends Element, C, K extends string>({ tagGroup, tagLabel, makePropsGroup, makePropsLabel }: { tagLabel: ElementToTag<LabelElement>, tagGroup: ElementToTag<InputElement>, makePropsLabel: (info: UseRadioGroupReturnTypeInfo<V, InputElement, C, K>) => h.JSX.HTMLAttributes<LabelElement>, makePropsGroup: (info: UseRadioGroupReturnTypeInfo<V, InputElement, C, K>) => h.JSX.HTMLAttributes<InputElement> }) {
    return function (info: UseRadioGroupReturnTypeInfo<V, InputElement, C, K>, modifyLabelProps: PropModifier<LabelElement>, modifyGroupProps: PropModifier<InputElement>) {
        return (
            <>
                {createElement(tagLabel as never, modifyLabelProps(makePropsLabel(info)))}
                {createElement(tagGroup as never, modifyGroupProps(makePropsGroup(info)))}
            </>
        )
    }
}

const RadioContext = createContext<UseRadio<any, any, any, any, any>>(null!);
export const RadioGroup = memoForwardRef(function RadioGroup<V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, InputElement extends HTMLElement, LabelElement extends HTMLElement, C = undefined, K extends string = never>({
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
}: RadioGroupProps<V, GroupElement, GroupLabelElement, InputElement, C, K>, ref?: Ref<any>) {
    const {
        useRadio,
        useRadioGroupLabelProps,
        useRadioGroupProps,
        ...radioGroupReturn
    } = useRadioGroup<V, GroupElement, GroupLabelElement, InputElement, LabelElement, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        radioGroup: { name, onSelectedValueChange, selectedValue, tagGroup, tagGroupLabel },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus },
        singleSelection: { selectionMode: "focus" }
    });

    useImperativeHandle(ref!, () => radioGroupReturn);

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

export const Radio = memoForwardRef(function Radio<V extends string | number, InputElement extends Element, LabelElement extends Element, C = undefined, K extends string = never>({ disabled, index, text, hidden, tagInput, labelPosition, tagLabel, value, render, flags, focusSelf, getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange, subInfo, noModifyTabIndex, unselectable }: RadioProps<V, InputElement, LabelElement, C, K>, ref?: Ref<any>) {
    const { useRadioInput, useRadioLabel, ...radioReturn } = (useContext(RadioContext) as UseRadio<V, InputElement, LabelElement, C, K>)({
        listNavigation: { text },
        managedChild: { index, flags },
        radio: { disabled, labelPosition, tagInput, tagLabel, value },
        rovingTabIndex: { hidden, focusSelf, noModifyTabIndex },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        subInfo,
        singleSelection: { unselectable, focusSelf }
    });

    useImperativeHandle(ref!, () => radioReturn);

    const { useRadioInputProps } = useRadioInput({ tag: tagInput });
    const { useRadioLabelProps } = useRadioLabel({ tag: tagLabel });

    return render(radioReturn, useRadioInputProps, useRadioLabelProps);
})
