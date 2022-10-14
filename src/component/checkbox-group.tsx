import { ComponentChildren, createContext, RenderableProps, VNode } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { PropModifier } from "props";
import { useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnTypeInfo, UseCheckboxGroupParameters, UseCheckboxGroupParent, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnTypeInfo, UseCheckboxGroupReturnTypeInfo } from "../use-checkbox-group";
import { Checkbox, CheckboxProps, defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox";

type Get<T, K extends keyof T> = T[K];
//type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface CheckboxGroupProps<InputElement extends Element, LabelElement extends Element, CBGSubInfo, K extends string> extends
    RenderableProps<{}>,
    Get<UseCheckboxGroupParameters, "linearNavigation">,
    Get<UseCheckboxGroupParameters, "listNavigation">,
    Get<UseCheckboxGroupParameters, "managedChildren">,
    Get<UseCheckboxGroupParameters, "rovingTabIndex">,
    Get<UseCheckboxGroupParameters, "typeaheadNavigation"> {
    render(info: UseCheckboxGroupReturnTypeInfo<InputElement, LabelElement, CBGSubInfo, K>, modifyChildContainerProps: PropModifier<any>): VNode<any>;
}

export interface CheckboxGroupParentProps<InputElement extends Element, _LabelElement extends Element, C, K extends string> extends
    Get<UseCheckboxGroupParentParameters<C, K, C>, "listNavigation">,
    Get<UseCheckboxGroupParentParameters<C, K, C>, "rovingTabIndex">,
    Get<UseCheckboxGroupParentParameters<C, K, C>, "managedChild"> {
    subInfo: Get<UseCheckboxGroupParentParameters<C, K, C>, "subInfo">
    render(parentCheckboxInfo: UseCheckboxGroupParentReturnTypeInfo, modifyControlProps: PropModifier<InputElement>): VNode<any>;
}

export interface CheckboxGroupChildProps<InputType extends Element, LabelType extends Element, CBGSubInfo, K extends string> extends
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

export function defaultRenderCheckboxGroupParent<InputType extends Element, LabelType extends Element>({ render, disabled, getDocument, labelPosition, tagInput, tagLabel, getWindow, onActiveElementChange, onCheckedChange: onCheckedChangeUser, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: Omit<CheckboxProps<InputType, LabelType>, "checked">) {
    return function (parentInfo: UseCheckboxGroupParentReturnTypeInfo, modifyControlProps: PropModifier<any>) {
        const { checkboxGroupParent: { checked, onCheckedChange: onCheckedChangeParent } } = parentInfo;
        return (
            <Checkbox<InputType, LabelType>
                checked={checked}
                disabled={disabled}
                getDocument={getDocument}
                labelPosition={labelPosition}
                render={(info, modifyInputProps, modifyLabelProps) => {
                    if (labelPosition == "separate")
                        return render(info, (props) => modifyControlProps(modifyInputProps(props)), modifyLabelProps)
                    else
                        return render(info, modifyInputProps, (props) => modifyControlProps(modifyLabelProps(props) as any) as any)
                }}
                tagInput={tagInput}
                tagLabel={tagLabel}
                getWindow={getWindow}
                onActiveElementChange={onActiveElementChange}
                onCheckedChange={e => { onCheckedChangeParent(e); onCheckedChangeUser?.(e) }}
                onElementChange={onElementChange}
                onFocusedChanged={onFocusedChanged}
                onFocusedInnerChanged={onFocusedInnerChanged}
                onLastActiveElementChange={onLastActiveElementChange}
                onLastFocusedChanged={onLastFocusedChanged}
                onLastFocusedInnerChanged={onLastFocusedInnerChanged}
                onMount={onMount}
                onUnmount={onUnmount}
                onWindowFocusedChange={onWindowFocusedChange}
            />
        )
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
const UseCheckboxGroupParentContext = createContext<UseCheckboxGroupParent<any, any, any, any>>(null!);
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



    return (
        <UseCheckboxGroupParentContext.Provider value={useCheckboxGroupParent}>
            <UseCheckboxGroupChildContext.Provider value={useCheckboxGroupChild}>
                {render(checkboxGroupParentInfo, useListNavigationProps)}
            </UseCheckboxGroupChildContext.Provider>
        </UseCheckboxGroupParentContext.Provider>
    )
});

export const CheckboxGroupParent = memo(function CheckboxGroupParent<InputType extends HTMLElement, LabelType extends HTMLElement, C = undefined, K extends string = never>({ subInfo, render, index, text, flags, hidden, noModifyTabIndex, ..._rest }: CheckboxGroupParentProps<InputType, LabelType, C, K>) {
    const { useCheckboxGroupParentProps, ...info } = (useContext(UseCheckboxGroupParentContext) as UseCheckboxGroupParent<InputType, LabelType, C, K>)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { hidden, noModifyTabIndex },
        subInfo: subInfo
    });
    return render(info, useCheckboxGroupParentProps);
})

export const CheckboxGroupChild = memo(function CheckboxGroupChild<InputType extends HTMLElement, LabelType extends HTMLElement, C = undefined, K extends string = never>({
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
}: CheckboxGroupChildProps<InputType, LabelType, C, K>) {
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
