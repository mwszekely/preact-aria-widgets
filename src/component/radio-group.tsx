import { createContext, createElement, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { LabelPosition } from "use-label";
import { ElementToTag, PropModifier } from "../props";
import { RadioSubInfo, useRadioGroup, UseRadioGroupParameters, UseRadioGroupReturnType, UseRadioParameters, UseRadioReturnType, RadioContext, useRadio } from "../use-radio-group";
import { defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "linearNavigationParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "labelParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "rearrangeableChildrenParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "sortableChildrenParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "singleSelectionParameters">,
    //    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "listNavigationParameters">,
    //    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "managedChildrenParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "rovingTabIndexParameters">,
    //    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "childrenHaveFocusParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "typeaheadNavigationParameters"> {
    ref?: Ref<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>>;
    render(info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>): VNode<any>;
}

export interface RadioProps<LP extends LabelPosition, TabbableChildElement extends Element, InputElement extends Element, LabelElement extends Element, V extends string | number> extends
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "radioParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "checkboxLikeParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "labelParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "pressParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "singleSelectionChildParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "typeaheadNavigationChildParameters">,
    Omit<Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "managedChildParameters">, "disabled"> {
    //ref?: Ref<UseRadioReturnTypeInfo<InputElement, LabelElement>>;
    //subInfo: C;

    render(info: UseRadioReturnType<V, InputElement, LabelElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>): VNode<any>;
}

export function defaultRenderRadioGroup<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element>({ tagGroup, tagLabel, makePropsGroup, makePropsLabel }: { tagLabel: ElementToTag<GroupLabelElement>, tagGroup: ElementToTag<GroupElement>, makePropsLabel: (info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>) => h.JSX.HTMLAttributes<GroupLabelElement>, makePropsGroup: (info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>) => h.JSX.HTMLAttributes<GroupElement> }) {
    return function (info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>) {
        return (
            <>
                {createElement(tagLabel as never, (makePropsLabel(info)))}
                {createElement(tagGroup as never, (makePropsGroup(info)))}
            </>
        )
    }
}

const RadioContext = createContext<RadioContext<any, any, any, any>>(null!);
export const RadioGroup = memoForwardRef(function RadioGroup<V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, InputElement extends HTMLElement, LabelElement extends HTMLElement, TabbableChildElement extends InputElement | LabelElement>({
    render,
    tagGroup,
    tagGroupLabel,
    name,
    onSelectedValueChange,
    selectedValue,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigationDirection,
    noTypeahead,
    typeaheadTimeout,
    ariaLabel,
    compare,
    getIndex,
    initiallySelectedIndex,
    initiallyTabbedIndex,
    labelPosition,
    navigatePastEnd,
    navigatePastStart,
    onSelectedIndexChange,
    onTabbableIndexChange,
    pageNavigationSize,
    tagInput,
    tagLabel
}: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>, ref?: Ref<any>) {
    const info = useRadioGroup<V, GroupElement, GroupLabelElement, InputElement, LabelElement, TabbableChildElement>({
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection, navigatePastEnd, navigatePastStart, pageNavigationSize },
        // listNavigationParameters: {  },
        // managedChildrenParameters: {  },
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        rearrangeableChildrenParameters: { getIndex },
        sortableChildrenParameters: { compare },
        radioGroupParameters: { name, onSelectedValueChange, selectedValue, tagGroup, tagGroupLabel },
        rovingTabIndexParameters: { onTabbableIndexChange, initiallyTabbedIndex },
        typeaheadNavigationParameters: { collator, noTypeahead, typeaheadTimeout },
        // childrenHaveFocusParameters: {  },
        singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <RadioContext.Provider value={info.context}>
            {render(info)}
        </RadioContext.Provider>
    )
})

export interface DefaultRenderRadioParameters<V extends string | number, I extends Element, IL extends Element, TCE extends Element> extends DefaultRenderCheckboxLikeParameters<I, IL, UseRadioReturnType<V, I, IL, TCE, RadioSubInfo<TCE, V>>> {

}

export function defaultRenderRadio<V extends string | number, I extends HTMLElement, IL extends HTMLElement, TCE extends I | IL>({ tagInput, tagLabel, makePropsInput, makePropsLabel, labelPosition }: DefaultRenderRadioParameters<V, I, IL, TCE>) {
    return defaultRenderCheckboxLike<I, IL, UseRadioReturnType<V, I, IL, TCE, RadioSubInfo<TCE, V>>>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel });
}

export const Radio = memoForwardRef(function Radio<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, TabbableChildElement extends InputElement | LabelElement>({
    disabled,
    index,
    getValue,
    hidden,
    render,
    value,
    ariaLabel,
    exclude,
    focusSelf,
    labelPosition,
    onPressSync,
    selectionMode,
    tagInput,
    tagLabel,
    text
}: RadioProps<LP, TabbableChildElement, InputElement, LabelElement, V>, ref?: Ref<any>) {
    const context = useContext(RadioContext);
    const info = useRadio<LP, InputElement, LabelElement, TabbableChildElement, V>({
        //listNavigationParameters: { text },
        managedChildParameters: { index, disabled: !!disabled, getValue, hidden },
        radioParameters: { value },
        checkboxLikeParameters: { disabled },
        completeListNavigationChildParameters: { getValue },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        pressParameters: { exclude, focusSelf, onPressSync },
        singleSelectionChildParameters: { selectionMode },
        typeaheadNavigationChildParameters: { text }
        //rovingTabIndexParameters: { hidden, focusSelf, noModifyTabIndex },
        //hasFocusParameters: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        //subInfoParameters: {  },
        //singleSelectionParameters: { unselectable, focusSelf }
    });

    useImperativeHandle(ref!, () => info);

    //    const { useRadioInputProps } = useRadioInput({ tag: tagInput });
    //    const { useRadioLabelProps } = useRadioLabel({ tag: tagLabel });

    return render(info);
})
