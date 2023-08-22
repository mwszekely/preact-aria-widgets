import { createContext } from "preact";
import { assertEmptyObject, memo, useStableGetter } from "preact-prop-helpers";
import { Get11, Get7, useContextWithWarning } from "../props.js";
import { FocusableLabelElement, LabelPosition } from "../use-label.js";
import { RadioContext, RadioSubInfo, UseRadioGroupParameters, UseRadioGroupReturnType, UseRadioParameters, UseRadioReturnType, useRadio, useRadioGroup } from "../use-radio-group.js";
import { GenericComponentProps, PartialExcept, useComponent, useDefault } from "./util.js";

interface RadioGroupPropsBase<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends
    Get11<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters", "linearNavigationParameters", "labelParameters", "radioGroupParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters", "sortableChildrenParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "refElementParameters", "singleSelectionParameters"> {
}

interface RadioPropsBase<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends
    Get7<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "radioParameters", "checkboxLikeParameters", "labelParameters", "textContentParameters", "pressParameters", "hasCurrentFocusParameters", "refElementParameters">,
    Pick<RadioSubInfo<any, V>, "index" | "untabbable"> {
}

export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends GenericComponentProps<
    UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>,
    PartialExcept<RadioGroupPropsBase<V, GroupElement, GroupLabelElement, TabbableChildElement>, "ariaLabel" | "name" | "selectedValue">,
    "name" | "selectedValue"
> {
}
export interface RadioProps<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends GenericComponentProps<
    UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>,
    PartialExcept<RadioPropsBase<LP, InputElement, LabelElement, V>, "index" | "value" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel">,
    "value" | "index" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel"
> {
}

const RadioContext = createContext<RadioContext<any, any, any>>(null!);
export const RadioGroup = memo(function RadioGroup<V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, TabbableChildElement extends HTMLElement>({
    render,
    name,
    collator,
    disableHomeEndKeys,
    arrowKeyDirection,
    noTypeahead,
    typeaheadTimeout,
    ariaLabel,
    compare,
    staggered,
    getIndex,
    navigatePastEnd,
    navigatePastStart,
    selectedValue,
    untabbable,
    onTabbableIndexChange,
    onNavigateLinear,
    onNavigateTypeahead,
    pageNavigationSize,
    onElementChange,
    onMount,
    onUnmount,
    imperativeHandle,
    onSelectedValueChange,
    singleSelectionMode,
    ...void1
}: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>) {
    untabbable ??= false;
    assertEmptyObject(void1);

    return useComponent(
        imperativeHandle,
        render,
        RadioContext,
        useRadioGroup<V, GroupElement, GroupLabelElement, TabbableChildElement>({
            singleSelectionParameters: { singleSelectionMode: singleSelectionMode ?? "focus" },
            linearNavigationParameters: {
                onNavigateLinear,
                arrowKeyDirection: arrowKeyDirection ?? "either",
                navigatePastEnd: navigatePastEnd ?? "wrap",
                navigatePastStart: navigatePastStart ?? "wrap",
                disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
            },
            staggeredChildrenParameters: { staggered: staggered || false },
            labelParameters: { ariaLabel },
            rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
            sortableChildrenParameters: { compare },
            radioGroupParameters: { name, selectedValue, onSelectedValueChange },
            rovingTabIndexParameters: {
                onTabbableIndexChange,
                untabbable
            },
            typeaheadNavigationParameters: {
                onNavigateTypeahead,
                collator: useDefault("collator", collator),
                noTypeahead: useDefault("noTypeahead", noTypeahead),
                typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
            },
            refElementParameters: { onElementChange, onMount, onUnmount },
        }));
});

export const Radio = memo(function Radio<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element>({
    disabled,
    index,
    render,
    value,
    ariaLabel,
    labelPosition,
    untabbable,
    tagInput,
    tagLabel,
    getText,
    longPressThreshold,
    onElementChange,
    onMount,
    onUnmount,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    imperativeHandle,
    ...void1
}: RadioProps<LP, InputElement, LabelElement, V>) {
    assertEmptyObject(void1);
    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    const getValue = useStableGetter(value);
    return useComponent(
        imperativeHandle,
        render,
        null,
        useRadio<LP, InputElement, LabelElement, V>({
            radioParameters: { value },
            checkboxLikeParameters: { disabled: disabled ?? false },
            info: { index, untabbable: untabbable || false, getSortValue: getValue },
            context,
            labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
            textContentParameters: { getText: useDefault("getText", getText) },
            pressParameters: { longPressThreshold },
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
            refElementParameters: { onElementChange, onMount, onUnmount }
        }));
});
