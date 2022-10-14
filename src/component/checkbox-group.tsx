import { ComponentChildren, createContext, h, RenderableProps, VNode } from "preact";
import { UseHasFocusParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { PropModifier } from "props";
import { useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnTypeInfo, UseCheckboxGroupParameters, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnTypeInfo, UseCheckboxGroupReturnTypeInfo } from "../use-checkbox-group";
import { defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox";

type Get<T, K extends keyof T> = T[K];
type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface CheckboxGroupProps<InputElement extends Element, LabelElement extends Element, CBGSubInfo, K extends string> extends
    RenderableProps<{}>,
    Get<UseCheckboxGroupParameters, "linearNavigation">,
    Get<UseCheckboxGroupParameters, "listNavigation">,
    Get<UseCheckboxGroupParameters, "managedChildren">,
    Get<UseCheckboxGroupParameters, "rovingTabIndex">,
    Get<UseCheckboxGroupParameters, "typeaheadNavigation"> {
    render(info: UseCheckboxGroupReturnTypeInfo<InputElement, LabelElement, CBGSubInfo, K>, parentCheckboxInfo: UseCheckboxGroupParentReturnTypeInfo<InputElement, LabelElement>, modifyControlProps: PropModifier<InputElement>, modifyChildContainerProps: PropModifier<any>): VNode<any>;
}

export interface CheckboxGroupCheckboxProps<InputType extends Element, LabelType extends Element, CBGSubInfo, K extends string> extends
    // Get2<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "checkbox">,
    // Get2<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "label">,
    // Get2<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "checkboxLike">,
    Get<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "listNavigation">,
    Get<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "rovingTabIndex">,
    Get<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "managedChild">,
    Get<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "checkboxGroupChild"> {
    subInfo: Get<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "subInfo">
    render(info: UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>, modifyControlProps: PropModifier<InputType>): VNode<any>;
}

export interface DefaultRenderCheckboxGroupChildParameters<InputType extends HTMLElement, LabelType extends HTMLElement> extends DefaultRenderCheckboxLikeParameters<InputType, LabelType, UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>> { }
export interface DefaultRenderCheckboxGroupParameters<InputType extends HTMLElement, LabelType extends HTMLElement, C, K extends string> extends DefaultRenderCheckboxLikeParameters<InputType, LabelType, UseCheckboxGroupReturnTypeInfo<InputType, LabelType, C, K>> {
    children: ComponentChildren;
}

export function defaultRenderCheckboxGroupChild<InputType extends HTMLElement, LabelType extends HTMLElement>({ tagInput, tagLabel, labelPosition, makeInputProps, makeLabelProps }: DefaultRenderCheckboxGroupChildParameters<InputType, LabelType>) {
    return function (groupInfo: UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>, modifyInputProps: PropModifier<InputType>, modifyLabelProps: PropModifier<LabelType>): VNode<any> {
        return defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makeInputProps, makeLabelProps })(groupInfo, modifyInputProps, modifyLabelProps);
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
export const CheckboxGroup = memo(function CheckboxGroup<InputType extends HTMLElement, LabelType extends HTMLElement, C = undefined, K extends string = never>({
    render,
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
    onTabbableRender,
    ..._rest
}: CheckboxGroupProps<InputType, LabelType, C, K>) {
    const {
        useCheckboxGroupChild,
        useCheckboxGroupParent,
        useListNavigationProps,
        ...checkboxGroupParentInfo
    } = useCheckboxGroup<InputType, LabelType, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    const { useCheckboxGroupParentProps, ...restParentInfo } = useCheckboxGroupParent({
        checkboxLike: {  },
        label: {  },
    });


    let wrapping: VNode<any> = render(checkboxGroupParentInfo, restParentInfo, useCheckboxGroupParentProps, useListNavigationProps);

    return (
        <UseCheckboxGroupChildContext.Provider value={useCheckboxGroupChild}>{wrapping}</UseCheckboxGroupChildContext.Provider>
    )
});

export const CheckboxGroupCheckbox = memo(function CheckboxGroupCheckbox<InputType extends HTMLElement, LabelType extends HTMLElement, C = undefined, K extends string = never>({
    index,
    text,
    subInfo,
    flags,
    hidden,
    render,
    checked,
    noModifyTabIndex,
    focus,
    onChangeFromParent,
    ..._rest
}: CheckboxGroupCheckboxProps<InputType, LabelType, C, K>) {
    const { useListNavigationChildProps, ...checkboxGroupChildInfo } = (useContext(UseCheckboxGroupChildContext) as UseCheckboxGroupChild<InputType, LabelType, C, K>)({
        listNavigation: {
            text
        },
        managedChild: {
            index,
            flags
        },
        rovingTabIndex: {
            hidden,
            noModifyTabIndex
        },
        checkboxGroupChild: {
            checked,
            focus,
            onChangeFromParent
        },
        subInfo
    });

    return render(checkboxGroupChildInfo, useListNavigationChildProps);
});
