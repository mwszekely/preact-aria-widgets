import { createContext, Ref, RenderableProps, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { OmitStrong } from "../props";
import { CheckboxGroupContext, CheckboxGroupInfo, useCheckboxGroup, useCheckboxGroupChild, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnType, UseCheckboxGroupParameters, useCheckboxGroupParent, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnType, UseCheckboxGroupReturnType } from "../use-checkbox-group";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface CheckboxGroupPropsBase<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends
    RenderableProps<{}>,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rearrangeableChildrenParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "sortableChildrenParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "typeaheadNavigationParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "staggeredChildrenParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rovingTabIndexParameters"> {
    ref?: Ref<UseCheckboxGroupReturnType<ParentElement, TabbableChildElement, M>>;
}

export interface CheckboxGroupParentPropsBase<TCE extends Element> extends
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "managedChildParameters">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "rovingTabIndexChildParameters">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "sortableChildParameters">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters">,
    OmitStrong<Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "completeListNavigationChildParameters">, "checkboxInfo"> {
    ref?: Ref<UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}

export interface CheckboxGroupChildPropsBase<TCE extends Element> extends
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "checkboxGroupChild">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "managedChildParameters">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "rovingTabIndexChildParameters">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "sortableChildParameters">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters"> {
    focusSelf: UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>["completeListNavigationChildParameters"]["focusSelf"];
    ref?: Ref<UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}



export interface CheckboxGroupProps<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends PartialExcept<CheckboxGroupPropsBase<ParentElement, TabbableChildElement, M>, "navigationDirection"> {
    render(info: UseCheckboxGroupReturnType<ParentElement, TabbableChildElement, M>): VNode<any>;
}
export interface CheckboxGroupParentProps<TCE extends Element> extends PartialExcept<CheckboxGroupParentPropsBase<TCE>, "index" | "getSortValue" | "focusSelf"> {
    render(parentCheckboxInfo: UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>): VNode<any>;
}
export interface CheckboxGroupChildProps<TCE extends Element> extends PartialExcept<CheckboxGroupChildPropsBase<TCE>, "index" | "checked" | "onChangeFromParent" | "getSortValue" | "focusSelf"> {
    render(info: UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>): VNode<any>;
}


const UseCheckboxGroupChildContext = createContext<CheckboxGroupContext<any, any, any>>(null!);

export const CheckboxGroup = memoForwardRef(function CheckboxGroup<ParentElement extends Element, TabbableChildElement extends Element>({
    render,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigationDirection,
    noTypeahead,
    typeaheadTimeout,
    onTabbableIndexChange,
    compare,
    staggered,
    getIndex,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    ..._rest
}: CheckboxGroupProps<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, ref?: Ref<any>) {
    const info = useCheckboxGroup<ParentElement, TabbableChildElement>({
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            navigationDirection,
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        staggeredChildrenParameters: { staggered: staggered || false },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <UseCheckboxGroupChildContext.Provider value={info.context}>
            {render(info)}
        </UseCheckboxGroupChildContext.Provider>
    )
});

export const CheckboxGroupParent = memoForwardRef(function CheckboxGroupParent<TCE extends Element>({ render, index, focusSelf, hidden, getText, getSortValue, ..._rest }: CheckboxGroupParentProps<TCE>, ref?: Ref<any>) {
    const context = (useContext(UseCheckboxGroupChildContext) as CheckboxGroupContext<any, TCE, CheckboxGroupInfo<TCE>>);
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);

    const info = useCheckboxGroupParent<TCE>({

        completeListNavigationChildParameters: { focusSelf, checkboxInfo: { checkboxChildType: "parent" } },
        context,
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) }
    });

    useImperativeHandle(ref!, () => info);
    return render(info);
})

export const CheckboxGroupChild = memoForwardRef(function CheckboxGroupChild<TCE extends Element>({
    index,
    render,
    checked,
    onChangeFromParent,
    getSortValue,
    hidden,
    getText,
    focusSelf,
    ..._rest
}: CheckboxGroupChildProps<TCE>, ref?: Ref<any>) {
    const context = (useContext(UseCheckboxGroupChildContext) as CheckboxGroupContext<any, TCE, CheckboxGroupInfo<TCE>>);
    console.assert(context != null, `This CheckboxGroupChild is not contained within a CheckboxGroup`);
    const info = useCheckboxGroupChild({
        checkboxGroupChild: { checked, onChangeFromParent },
        completeListNavigationChildParameters: { focusSelf },
        textContentParameters: { getText: useDefault("getText", getText) },
        context,
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});
