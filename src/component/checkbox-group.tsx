import { createContext, Ref, RenderableProps, VNode } from "preact";
import { useImperativeHandle } from "preact/hooks";
import { OmitStrong, useContextWithWarning } from "../props.js";
import { CheckboxGroupContext, CheckboxGroupInfo, useCheckboxGroup, useCheckboxGroupChild, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnType, UseCheckboxGroupParameters, useCheckboxGroupParent, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnType, UseCheckboxGroupReturnType } from "../use-checkbox-group.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];

export interface CheckboxGroupPropsBase<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends
    RenderableProps<{}>,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "checkboxGroupParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rearrangeableChildrenParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "sortableChildrenParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "typeaheadNavigationParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "staggeredChildrenParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rovingTabIndexParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rovingTabIndexParameters"> {
    ref?: Ref<UseCheckboxGroupReturnType<ParentElement, TabbableChildElement, M>>;
}

export interface CheckboxGroupParentPropsBase<TCE extends Element> extends
    Pick<CheckboxGroupInfo<TCE>, "index">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "sortableChildParameters">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters">,
    OmitStrong<Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "info">, "checkboxInfo"> {
    ref?: Ref<UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}

export interface CheckboxGroupChildPropsBase<TCE extends Element> extends
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "checkboxGroupChild">,
    Pick<CheckboxGroupInfo<TCE>, "index" | "untabbable" | "unselectable">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "sortableChildParameters">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters"> {
    focusSelf: UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>["info"]["focusSelf"];
    ref?: Ref<UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}



export interface CheckboxGroupProps<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends PartialExcept<CheckboxGroupPropsBase<ParentElement, TabbableChildElement, M>, never> {
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
    disableHomeEndKeys,
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
    orientation,
    onNavigateLinear,
    onNavigateTypeahead,
    ..._rest
}: CheckboxGroupProps<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, ref?: Ref<any>) {
    untabbable ||= false;
    const info = useCheckboxGroup<ParentElement, TabbableChildElement>({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        checkboxGroupParameters: { orientation: orientation ?? "vertical" },
        staggeredChildrenParameters: { staggered: staggered || false },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        sortableChildrenParameters: { compare: compare ?? null },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
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

export const CheckboxGroupParent = memoForwardRef(function CheckboxGroupParent<TCE extends Element>({ render, index, focusSelf, untabbable, getText, getSortValue, unselectable, ..._rest }: CheckboxGroupParentProps<TCE>, ref?: Ref<any>) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);

    const info = useCheckboxGroupParent<TCE>({
        info: { index, unselectable: unselectable || false, untabbable: untabbable || false, focusSelf, checkboxInfo: { checkboxChildType: "parent" } },
        context,
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
    untabbable,
    getText,
    focusSelf,
    unselectable,
    ..._rest
}: CheckboxGroupChildProps<TCE>, ref?: Ref<any>) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupChild is not contained within a CheckboxGroup`);
    const info = useCheckboxGroupChild<TCE>({
        checkboxGroupChild: { checked, onChangeFromParent },
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf },
        textContentParameters: { getText: useDefault("getText", getText) },
        context,
        sortableChildParameters: { getSortValue },
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});
