import { assertEmptyObject, createContext, memo } from "preact-prop-helpers/preact";
import { Get6, Get7, useContextWithWarning } from "../props.js";
import { CheckboxGroupContext, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnType, UseCheckboxGroupParameters, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnType, UseCheckboxGroupReturnType, useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent } from "../use-checkbox-group.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";

export type CheckboxGroupProps<ParentElement extends Element, TabbableChildElement extends Element> = GenericComponentProps<
    UseCheckboxGroupReturnType<ParentElement, TabbableChildElement>,
    Get7<UseCheckboxGroupParameters<ParentElement, TabbableChildElement>, "linearNavigationParameters", "checkboxGroupParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters", "rovingTabIndexParameters", "refElementParameters", "multiSelectionParameters">,
    never
>;

export type CheckboxGroupParentProps<TCE extends Element> = GenericComponentProps<
    UseCheckboxGroupParentReturnType<TCE>,
    Get6<UseCheckboxGroupParentParameters<TCE>, "textContentParameters", "info", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">,
    "index" | "focusSelf"
>// & { info?: OmitStrong<M, keyof CheckboxGroupInfo<TCE>> };


export type CheckboxGroupChildProps<TCE extends Element> = GenericComponentProps<
    UseCheckboxGroupChildReturnType<TCE>,
    Get6<UseCheckboxGroupChildParameters<TCE>, "checkboxGroupChildParameters", "textContentParameters", "info", "refElementParameters", "hasCurrentFocusParameters", "multiSelectionChildParameters">,
    "index" | "focusSelf" | "checked" | "onChangeFromParent"
>// & { info?: OmitStrong<M, keyof CheckboxGroupInfo<TCE>> };


const UseCheckboxGroupChildContext = createContext<CheckboxGroupContext<any>>(null!);

export const CheckboxGroup = memo((function CheckboxGroup<ParentElement extends Element, TabbableChildElement extends Element>({
    render,
    collator,
    disableHomeEndKeys,
    noTypeahead,
    typeaheadTimeout,
    onTabbableIndexChange,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    orientation,
    onNavigateLinear,
    onNavigateTypeahead,
    imperativeHandle,
    onElementChange,
    onMount,
    onUnmount,
    multiSelectionAriaPropName,
    multiSelectionMode,
    onSelectionChange,
    ...void1
}: CheckboxGroupProps<ParentElement, TabbableChildElement>) {

    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        UseCheckboxGroupChildContext,
        useCheckboxGroup<ParentElement, TabbableChildElement>({
            linearNavigationParameters: {
                onNavigateLinear,
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap",
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
            },
            checkboxGroupParameters: {
                orientation: orientation ?? "vertical"
            },
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                untabbable: untabbable || false
            },
            typeaheadNavigationParameters: {
                onNavigateTypeahead,
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            refElementParameters: { onElementChange, onMount, onUnmount },
            multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode: multiSelectionMode || "activation", onSelectionChange }
        }));
}));

export const CheckboxGroupParent = memo((function CheckboxGroupParent<TCE extends Element>({
    render,
    index,
    focusSelf,
    untabbable,
    imperativeHandle,
    getText,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onUnmount,
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    onTextContentChange,
    //info,
    ..._rest
}: CheckboxGroupParentProps<TCE>) {
    const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
    console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);

    return (
        useComponent(
            imperativeHandle,
            render,
            null!,
            useCheckboxGroupParent<TCE>({
                info: {
                    index,
                    untabbable: untabbable || false,
                    focusSelf,
                },
                context,
                textContentParameters: {
                    getText: useDefault("getText", getText),
                    onTextContentChange
                },
                hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
                refElementParameters: { onElementChange, onMount, onUnmount },
                multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange },
                singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false }
            }))
    );
}))

export const CheckboxGroupChild = memo((function CheckboxGroupChild<TCE extends Element>({
    index,
    render,
    checked,
    onChangeFromParent,
    untabbable,
    getText,
    focusSelf,
    //info,
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onUnmount,
    multiSelectionDisabled,
    onMultiSelectChange,
    onTextContentChange,
    ...void1
}: CheckboxGroupChildProps<TCE>) {

    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        null,
        useCheckboxGroupChild<TCE>({
            checkboxGroupChildParameters: {
                checked: checked,
                onChangeFromParent
            },
            info: {
                index,
                untabbable: untabbable || false,
                focusSelf
            },
            textContentParameters: {
                getText: useDefault("getText", getText),
                onTextContentChange,
            },
            context: useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group"),
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged,
                onCurrentFocusedInnerChanged
            },
            refElementParameters: {
                onElementChange,
                onMount,
                onUnmount
            },
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, onMultiSelectChange },
        }));
}));
