import { createContext, Ref, VNode } from "preact";
import { useStableGetter } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { Get5, Get9, useContextWithWarning } from "../props.js";
import { FocusableLabelElement, LabelPosition } from "../use-label.js";
import { RadioContext, RadioSubInfo, useRadio, useRadioGroup, UseRadioGroupParameters, UseRadioGroupReturnType, UseRadioParameters, UseRadioReturnType } from "../use-radio-group.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";

interface RadioGroupPropsBase<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends
    Get9<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters", "linearNavigationParameters", "labelParameters", "radioGroupParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters", "sortableChildrenParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters"> {
    ref?: Ref<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>>;
}

interface RadioPropsBase<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends
    Get5<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "radioParameters", "checkboxLikeParameters", "labelParameters", "textContentParameters", "pressParameters">,
    Pick<RadioSubInfo<any, V>, "index" | "untabbable" | "unselectable"> {
    focusSelf?: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>["info"]["focusSelf"];
}

export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends PartialExcept<RadioGroupPropsBase<V, GroupElement, GroupLabelElement, TabbableChildElement>, "ariaLabel" | "name" | "selectedValue" | "onSelectedValueChange"> {
    render(info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>): VNode<any>;
}
export interface RadioProps<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends PartialExcept<RadioPropsBase<LP, InputElement, LabelElement, V>, "index" | "value" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel"> {
    render(info: UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): VNode<any>;
}

const RadioContext = createContext<RadioContext<any, any, any, any>>(null!);
export const RadioGroup = memoForwardRef(function RadioGroup<V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, TabbableChildElement extends HTMLElement>({
    render,
    name,
    onSelectedValueChange,
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
    ...rest
}: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>, ref?: Ref<any>) {
    untabbable ??= false;

    const info = useRadioGroup<V, GroupElement, GroupLabelElement, TabbableChildElement>({
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
        sortableChildrenParameters: { compare: compare ?? null },
        radioGroupParameters: { name, onSelectedValueChange, selectedValue },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
    });

    useImperativeHandle(ref!, () => info);

    return (
        <RadioContext.Provider value={info.context}>
            {render(info)}
        </RadioContext.Provider>
    )
});

export const Radio = memoForwardRef(function Radio<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element>({
    unselectable,
    disabled,
    index,
    render,
    value,
    ariaLabel,
    focusSelf,
    labelPosition,
    untabbable,
    tagInput,
    tagLabel,
    getText,
    longPressThreshold
}: RadioProps<LP, InputElement, LabelElement, V>, ref?: Ref<any>) {
    const defaultFocusSelf = () => info.checkboxLikeReturn.focusSelf();
    focusSelf ??= defaultFocusSelf;

    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    const getValue = useStableGetter(value);
    const info = useRadio<LP, InputElement, LabelElement, V>({
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        info: { index, focusSelf, untabbable: untabbable || false, unselectable: !!unselectable, getSortValue: getValue },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: { longPressThreshold }
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});
