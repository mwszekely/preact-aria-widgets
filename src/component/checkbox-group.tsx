import { ComponentChildren, createContext, h, RenderableProps, VNode } from "preact";
import { useContext } from "preact/hooks";
import { useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnTypeInfo, UseCheckboxGroupParameters, UseCheckboxGroupParentParameters, UseCheckboxGroupReturnTypeInfo } from "../use-checkbox-group";
import { defaultRenderWrapping, defaultRenderSeparate } from "./checkbox";

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
    /*parentDisabled?: boolean;
    tagInput: ElementToTag<InputType>;
    tagLabel: ElementToTag<LabelType>;
    labelPosition: "separate" | "wrapping";*/
    //propsInput(): h.JSX.HTMLAttributes<InputElement>;
    //propsLabel(): h.JSX.HTMLAttributes<LabelElement>;
    render?(info: UseCheckboxGroupReturnTypeInfo<InputElement, LabelElement>, input: h.JSX.HTMLAttributes<any>, label: h.JSX.HTMLAttributes<any>, children: ComponentChildren): VNode<any>;
    labelChildren?: ComponentChildren;  // For convenience, since otherwise it's necessary to override `render` instead
}

export interface CheckboxGroupCheckboxProps<InputType extends Element, LabelType extends Element> extends
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckbox", "checkbox">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckbox", "label">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckbox", "checkboxLike">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckboxGroupChild", "listNavigation">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckboxGroupChild", "rovingTabIndex">,
    Get2<UseCheckboxGroupChildParameters<InputType, LabelType>, "asCheckboxGroupChild", "managedChild"> {
    //labelPosition: "separate" | "wrapping";
    //propsInput(): h.JSX.HTMLAttributes<InputType>;
    //propsLabel(): h.JSX.HTMLAttributes<LabelType>;
    render?(info: UseCheckboxGroupChildReturnTypeInfo<InputType, LabelType>, input: h.JSX.HTMLAttributes<any>, label: h.JSX.HTMLAttributes<any>): VNode<any>;
    children?: ComponentChildren;
}

function defaultRenderChildSeparate(inputTag: string, inputLabel: string) {
    return function (info: UseCheckboxGroupChildReturnTypeInfo<any, any>, input: h.JSX.HTMLAttributes<any>, label: h.JSX.HTMLAttributes<any>): VNode<any> {
        return defaultRenderSeparate(inputTag, inputLabel)(info, input, label);
    }
}

function defaultRenderChildWrapping(inputTag: string, inputLabel: string) {
    return function (info: UseCheckboxGroupChildReturnTypeInfo<any, any>, input: h.JSX.HTMLAttributes<any>, label: h.JSX.HTMLAttributes<any>): VNode<any> {
        return defaultRenderWrapping(inputTag, inputLabel)(info, input, label);
    }
}

function defaultRenderGroupSeparate(inputTag: string, inputLabel: string) {
    return function (info: UseCheckboxGroupReturnTypeInfo<any, any>, input: h.JSX.HTMLAttributes<any>, label: h.JSX.HTMLAttributes<any>, children: ComponentChildren): VNode<any> {
        return (
            <>
                {defaultRenderSeparate(inputTag, inputLabel)(info, input, label)}
                {children}
            </>
        )
    }
}

function defaultRenderGroupWrapping(inputTag: string, inputLabel: string) {
    return function (info: UseCheckboxGroupReturnTypeInfo<any, any>, input: h.JSX.HTMLAttributes<any>, label: h.JSX.HTMLAttributes<any>, children: ComponentChildren): VNode<any> {
        return (
            <>
                {defaultRenderWrapping(inputTag, inputLabel)(info, input, label)}
                {children}
            </>
        )
    }
}

const UseCheckboxGroupChildContext = createContext<UseCheckboxGroupChild<any, any>>(null!);
export function CheckboxGroup<InputType extends HTMLElement, LabelType extends HTMLElement>({
    children,
    disabled: parentDisabled,
    tagInput,
    tagLabel,
    render,
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
    onTabbableRender,
    onTabbedInTo,
    onTabbedOutOf,
    labelChildren
}: CheckboxGroupProps<InputType, LabelType>) {
    const {
        useCheckboxGroupChild,
        useCheckboxGroupParentInput,
        ...checkboxGroupParentInfo
    } = useCheckboxGroup<InputType, LabelType>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });


    const { useCheckboxGroupParentInputProps, useCheckboxGroupParentLabelProps } = useCheckboxGroupParentInput({ checkbox: {}, checkboxLike: { disabled: parentDisabled, labelPosition }, label: { tagInput, tagLabel } });

    const inputProps = useCheckboxGroupParentInputProps({});
    const labelProps = useCheckboxGroupParentLabelProps({ children: labelChildren });
    let wrapping: VNode<any>;
    if (labelPosition == "separate") {
        wrapping = (render ?? defaultRenderGroupSeparate(tagInput, tagLabel))(checkboxGroupParentInfo, inputProps, labelProps, children);
    }
    else {
        wrapping = (render ?? defaultRenderGroupWrapping(tagInput, tagLabel))(checkboxGroupParentInfo, inputProps, labelProps, children);
    }

    return (
        <UseCheckboxGroupChildContext.Provider value={useCheckboxGroupChild}>{wrapping}</UseCheckboxGroupChildContext.Provider>
    )
}

export function CheckboxGroupCheckbox<InputType extends HTMLElement, LabelType extends HTMLElement>({
    checked,
    disabled,
    index,
    labelPosition,
    tagInput,
    tagLabel,
    text,
    blurSelf,
    flags,
    focusSelf,
    hidden,
    onInput,
    children,
    render
}: CheckboxGroupCheckboxProps<InputType, LabelType>) {
    const { useCheckboxGroupChildInputProps, useCheckboxGroupChildLabelProps, ...checkboxGroupChildInfo } = useContext(UseCheckboxGroupChildContext)({
        asCheckbox: {
            checkbox: { onInput },
            checkboxLike: { checked, disabled, labelPosition },
            label: { tagInput, tagLabel }
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
                blurSelf,
                focusSelf,
                hidden
            }
        }
    });

    const inputProps = useCheckboxGroupChildInputProps({});
    const labelProps = useCheckboxGroupChildLabelProps({ children });
    if (labelPosition == "separate") {
        return (render ?? defaultRenderChildSeparate(tagInput, tagLabel))(checkboxGroupChildInfo, inputProps, labelProps);
    }
    else {
        return (render ?? defaultRenderChildWrapping(tagInput, tagLabel))(checkboxGroupChildInfo, inputProps, labelProps);
    }
}
