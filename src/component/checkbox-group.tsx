import { ComponentChildren, createContext, h, RenderableProps, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { PropModifier } from "props";
import { useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnTypeInfo, UseCheckboxGroupParameters, UseCheckboxGroupParentParameters, UseCheckboxGroupReturnTypeInfo } from "../use-checkbox-group";
import { defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface CheckboxGroupProps<InputElement extends Element, LabelElement extends Element> extends
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
    render(info: UseCheckboxGroupReturnTypeInfo<InputElement, LabelElement>, modifyInputProps: PropModifier<InputElement>, label: PropModifier<LabelElement>): VNode<any>;
}

export interface CheckboxGroupCheckboxProps<InputType extends Element, LabelType extends Element> extends
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckbox", "checkbox">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckbox", "label">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckbox", "checkboxLike">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckboxGroupChild", "listNavigation">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckboxGroupChild", "rovingTabIndex">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckboxGroupChild", "managedChild"> {
    getDocument: UseHasFocusParameters<InputType>["getDocument"];
    getWindow?: UseHasFocusParameters<InputType>["getWindow"];
    render(info: UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>, modifyInputProps: PropModifier<InputType>, label: PropModifier<LabelType>): VNode<any>;
}

export interface DefaultRenderCheckboxGroupChildParameters<InputType extends HTMLElement, LabelType extends HTMLElement> extends DefaultRenderCheckboxLikeParameters<InputType, LabelType, UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>> { }
export interface DefaultRenderCheckboxGroupParameters<InputType extends HTMLElement, LabelType extends HTMLElement> extends DefaultRenderCheckboxLikeParameters<InputType, LabelType, UseCheckboxGroupReturnTypeInfo<InputType, LabelType>> {
    children: ComponentChildren;
}

export function defaultRenderCheckboxGroupChild<InputType extends HTMLElement, LabelType extends HTMLElement>({ tagInput, tagLabel, labelPosition, makeInputProps, makeLabelProps }: DefaultRenderCheckboxGroupChildParameters<InputType, LabelType>) {
    return function (info: UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>, modifyInputProps: PropModifier<InputType>, modifyLabelProps: PropModifier<LabelType>): VNode<any> {
        return defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps })(info, modifyInputProps, modifyLabelProps);
    }
}

export function defaultRenderCheckboxGroup<InputType extends HTMLElement, LabelType extends HTMLElement>({ children, labelPosition, makeInputProps, makeLabelProps, tagInput, tagLabel }: DefaultRenderCheckboxGroupParameters<InputType, LabelType>) {
    return function (info: UseCheckboxGroupReturnTypeInfo<any, any>, modifyInputProps: PropModifier<InputType>, modifyLabelProps: PropModifier<LabelType>): VNode<any> {
        return (
            <>
                {defaultRenderCheckboxLike({ labelPosition, makeInputProps, makeLabelProps, tagInput, tagLabel })(info, modifyInputProps, modifyLabelProps)}
                {children}
            </>
        )
    }
}

const UseCheckboxGroupChildContext = createContext<UseCheckboxGroupChild<any, any>>(null!);
export const CheckboxGroup = memo(function CheckboxGroup<InputType extends HTMLElement, LabelType extends HTMLElement>({
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
}: CheckboxGroupProps<InputType, LabelType>) {
    const {
        useCheckboxGroupChild,
        useCheckboxGroupParentInput,
        ...checkboxGroupParentInfo
    } = useCheckboxGroup<InputType, LabelType>({
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

export const CheckboxGroupCheckbox = memo(function CheckboxGroupCheckbox<InputType extends HTMLElement, LabelType extends HTMLElement>({
    checked,
    disabled,
    index,
    labelPosition,
    tagInput,
    tagLabel,
    text,
    getWindow,
    getDocument,
    flags,
    focusSelf,
    hidden,
    onCheckedChange,
    render
}: CheckboxGroupCheckboxProps<InputType, LabelType>) {
    const { useCheckboxGroupChildInputProps, useCheckboxGroupChildLabelProps, ...checkboxGroupChildInfo } = useContext(UseCheckboxGroupChildContext)({
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
            }
        }
    });

    if (labelPosition == "separate") {
        return render(checkboxGroupChildInfo, useCheckboxGroupChildInputProps, useCheckboxGroupChildLabelProps);
    }
    else {
        return render(checkboxGroupChildInfo, useCheckboxGroupChildInputProps, useCheckboxGroupChildLabelProps);
    }
});
