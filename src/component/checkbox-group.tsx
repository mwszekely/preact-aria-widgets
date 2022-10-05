import { ComponentChildren, createContext, h, RenderableProps, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { PropModifier } from "props";
import { useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnTypeInfo, UseCheckboxGroupParameters, UseCheckboxGroupParentParameters, UseCheckboxGroupReturnTypeInfo } from "../use-checkbox-group";
import { defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface CheckboxGroupProps<InputElement extends Element, LabelElement extends Element, CBGSubInfo, K extends string> extends
    RenderableProps<{}>,
    Get<UseCheckboxGroupParameters, "linearNavigation">,
    Get<UseCheckboxGroupParameters, "listNavigation">,
    Get<UseCheckboxGroupParameters, "managedChildren">,
    Get<UseCheckboxGroupParameters, "rovingTabIndex">,
    Get<UseCheckboxGroupParameters, "typeaheadNavigation">,
    Get<UseCheckboxGroupParentParameters<InputElement, LabelElement>, "checkbox">,
    Get<UseCheckboxGroupParentParameters<InputElement, LabelElement>, "checkboxLike">,
    Get<UseCheckboxGroupParentParameters<InputElement, LabelElement>, "label"> {
    getDocument: UseHasFocusParameters<InputElement>["getDocument"];
    getWindow?: UseHasFocusParameters<InputElement>["getWindow"];
    render(info: UseCheckboxGroupReturnTypeInfo<InputElement, LabelElement, CBGSubInfo, K>, modifyInputProps: PropModifier<InputElement>, label: PropModifier<LabelElement>): VNode<any>;
}

export interface CheckboxGroupCheckboxProps<InputType extends Element, LabelType extends Element, CBGSubInfo, K extends string> extends
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType, CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "checkbox">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType, CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "label">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType, CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "checkboxLike">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType, CBGSubInfo, K, CBGSubInfo>, "asCheckboxGroupChild", "listNavigation">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType, CBGSubInfo, K, CBGSubInfo>, "asCheckboxGroupChild", "rovingTabIndex">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType, CBGSubInfo, K, CBGSubInfo>, "asCheckboxGroupChild", "managedChild"> {
    getDocument: UseHasFocusParameters<InputType>["getDocument"];
    getWindow?: UseHasFocusParameters<InputType>["getWindow"];
    subInfo: Get2<UseCheckboxGroupChildParameters<InputType, LabelType, CBGSubInfo, K, CBGSubInfo>, "asCheckboxGroupChild", "subInfo">
    render(info: UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>, modifyInputProps: PropModifier<InputType>, label: PropModifier<LabelType>): VNode<any>;
}

export interface DefaultRenderCheckboxGroupChildParameters<InputType extends HTMLElement, LabelType extends HTMLElement> extends DefaultRenderCheckboxLikeParameters<InputType, LabelType, UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>> { }
export interface DefaultRenderCheckboxGroupParameters<InputType extends HTMLElement, LabelType extends HTMLElement, C, K extends string> extends DefaultRenderCheckboxLikeParameters<InputType, LabelType, UseCheckboxGroupReturnTypeInfo<InputType, LabelType, C, K>> {
    children: ComponentChildren;
}

export function defaultRenderCheckboxGroupChild<InputType extends HTMLElement, LabelType extends HTMLElement>({ tagInput, tagLabel, labelPosition, makeInputProps, makeLabelProps }: DefaultRenderCheckboxGroupChildParameters<InputType, LabelType>) {
    return function (info: UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>, modifyInputProps: PropModifier<InputType>, modifyLabelProps: PropModifier<LabelType>): VNode<any> {
        return defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps })(info, modifyInputProps, modifyLabelProps);
    }
}

export function defaultRenderCheckboxGroup<InputType extends HTMLElement, LabelType extends HTMLElement, C, K extends string>({ children, labelPosition, makeInputProps, makeLabelProps, tagInput, tagLabel }: DefaultRenderCheckboxGroupParameters<InputType, LabelType, C, K>) {
    return function (info: UseCheckboxGroupReturnTypeInfo<InputType, LabelType, C, K>, modifyInputProps: PropModifier<InputType>, modifyLabelProps: PropModifier<LabelType>): VNode<any> {
        return (
            <>
                {defaultRenderCheckboxLike({ labelPosition, makeInputProps, makeLabelProps, tagInput, tagLabel })(info, modifyInputProps, modifyLabelProps)}
                {children}
            </>
        )
    }
}

const UseCheckboxGroupChildContext = createContext<UseCheckboxGroupChild<any, any, any, any>>(null!);
export const CheckboxGroup = memo(function CheckboxGroup<InputType extends HTMLElement, LabelType extends HTMLElement, C, K extends string>({
    disabled: parentDisabled,
    tagInput,
    tagLabel,
    render,
    getDocument,
    getWindow,
    labelPosition,
    initialIndex,
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
    onTabbableRender
}: CheckboxGroupProps<InputType, LabelType, C, K>) {
    const {
        useCheckboxGroupChild,
        useCheckboxGroupParentInput,
        ...checkboxGroupParentInfo
    } = useCheckboxGroup<InputType, LabelType, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });


    const { useCheckboxGroupParentInputProps, useCheckboxGroupParentLabelProps } = useCheckboxGroupParentInput({ checkbox: {}, checkboxLike: { disabled: parentDisabled, labelPosition }, label: { tagInput, tagLabel }, hasFocusInput: { getWindow, getDocument }, hasFocusLabel: { getWindow, getDocument } });


    let wrapping: VNode<any>;
    if (labelPosition == "separate") {
        wrapping = render(checkboxGroupParentInfo, useCheckboxGroupParentInputProps, useCheckboxGroupParentLabelProps);
    }
    else {
        wrapping = render(checkboxGroupParentInfo, useCheckboxGroupParentInputProps, useCheckboxGroupParentLabelProps);
    }

    return (
        <UseCheckboxGroupChildContext.Provider value={useCheckboxGroupChild}>{wrapping}</UseCheckboxGroupChildContext.Provider>
    )
})

export const CheckboxGroupCheckbox = memo(function CheckboxGroupCheckbox<InputType extends HTMLElement, LabelType extends HTMLElement, C, K extends string>({
    checked,
    disabled,
    index,
    labelPosition,
    tagInput,
    tagLabel,
    text,
    subInfo,
    getWindow,
    getDocument,
    flags,
    focusSelf,
    hidden,
    onCheckedChange,
    render
}: CheckboxGroupCheckboxProps<InputType, LabelType, C, K>) {
    const { useCheckboxGroupChildInputProps, useCheckboxGroupChildLabelProps, ...checkboxGroupChildInfo } = (useContext(UseCheckboxGroupChildContext) as UseCheckboxGroupChild<InputType, LabelType, C, K>)({
        asCheckbox: {
            checkbox: { onCheckedChange },
            checkboxLike: { checked, disabled, labelPosition },
            label: { tagInput, tagLabel },
            hasFocusInput: { getWindow, getDocument },
            hasFocusLabel: { getWindow, getDocument }
        },
        asCheckboxGroupChild: {
            listNavigation: {
                text
            },
            managedChild: {
                index,
                flags
            },
            rovingTabIndex: {
                focusSelf,
                hidden
            },
            subInfo
        }
    });

    if (labelPosition == "separate") {
        return render(checkboxGroupChildInfo, useCheckboxGroupChildInputProps, useCheckboxGroupChildLabelProps);
    }
    else {
        return render(checkboxGroupChildInfo, useCheckboxGroupChildInputProps, useCheckboxGroupChildLabelProps);
    }
});
