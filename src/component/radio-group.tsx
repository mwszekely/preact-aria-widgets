import { createContext, Ref, VNode } from "preact";
import { useStableGetter } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { useContextWithWarning } from "../props.js";
import { FocusableLabelElement, LabelPosition } from "../use-label.js";
import { RadioContext, RadioSubInfo, useRadio, useRadioGroup, UseRadioGroupParameters, UseRadioGroupReturnType, UseRadioParameters, UseRadioReturnType } from "../use-radio-group.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";

type Get<T, K extends keyof T> = T[K];

interface RadioGroupPropsBase<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "linearNavigationParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "labelParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "rearrangeableChildrenParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "staggeredChildrenParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "sortableChildrenParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "rovingTabIndexParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "typeaheadNavigationParameters"> {
    ref?: Ref<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>>;
}

interface RadioPropsBase<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends
    Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "radioParameters">,
    Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "checkboxLikeParameters">,
    Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "labelParameters">,
    Get<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "textContentParameters">,

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
    pageNavigationSize,
}: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>, ref?: Ref<any>) {
    untabbable ??= false;

    const info = useRadioGroup<V, GroupElement, GroupLabelElement, TabbableChildElement>({
        linearNavigationParameters: {
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
    getText
}: RadioProps<LP, InputElement, LabelElement, V>, ref?: Ref<any>) {
    const defaultFocusSelf = () => info.checkboxLikeReturn.focusSelf();
    focusSelf ??= defaultFocusSelf;

    const context = useContextWithWarning(RadioContext, "radio group");
    console.assert(context != null, `This Radio is not contained within a RadioGroup`);
    const getValue = useStableGetter(value);
    const info = useRadio<LP, InputElement, LabelElement, V>({
        sortableChildParameters: { getSortValue: getValue },
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        info: { index, focusSelf, untabbable: untabbable || false, unselectable: !!unselectable },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        textContentParameters: { getText: useDefault("getText", getText) },
        pressParameters: null
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});
