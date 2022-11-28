import { createContext, createElement, h, Ref, VNode } from "preact";
import { useStableGetter } from "preact-prop-helpers";
import { useContext, useImperativeHandle, useState } from "preact/hooks";
import { LabelPosition } from "use-label";
import { ElementToTag } from "../props";
import { RadioContext, RadioSubInfo, useRadio, useRadioGroup, UseRadioGroupParameters, UseRadioGroupReturnType, UseRadioParameters, UseRadioReturnType } from "../use-radio-group";
import { DefaultRenderCheckboxLikeParameters } from "./checkbox";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

interface RadioGroupPropsBase<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "linearNavigationParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "labelParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "rearrangeableChildrenParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "sortableChildrenParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "rovingTabIndexParameters">,
    Get<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "typeaheadNavigationParameters"> {
    ref?: Ref<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>>;
}

interface RadioPropsBase<LP extends LabelPosition, TabbableChildElement extends Element, InputElement extends Element, LabelElement extends Element, V extends string | number> extends
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "radioParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "checkboxLikeParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "labelParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "rovingTabIndexChildParameters">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "pressParameters">,
    Omit<Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "singleSelectionChildParameters">, "disabled">,
    Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "typeaheadNavigationChildParameters">,
    Omit<Get<UseRadioParameters<LP, V, TabbableChildElement, InputElement, LabelElement, RadioSubInfo<TabbableChildElement, V>>, "managedChildParameters">, "disabled" | "getSortValue"> {
    //ref?: Ref<UseRadioReturnTypeInfo<InputElement, LabelElement>>;
    //subInfo: C;

}

interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends PartialExcept<RadioGroupPropsBase<V, GroupElement, GroupLabelElement, TabbableChildElement>, "navigationDirection" | "ariaLabel" | "name" | "initiallySelectedValue" | "onSelectedValueChange"> {
    render(info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>): VNode<any>;
}
interface RadioProps<LP extends LabelPosition, TabbableChildElement extends Element, InputElement extends Element, LabelElement extends Element, V extends string | number> extends PartialExcept<RadioPropsBase<LP, TabbableChildElement, InputElement, LabelElement, V>, "index" | "value" | "ariaLabel" | "text" | "selectionMode" | "labelPosition" | "tagInput" | "tagLabel"> {
    render(info: UseRadioReturnType<V, InputElement, LabelElement, TabbableChildElement, RadioSubInfo<TabbableChildElement, V>>): VNode<any>;
}

function defaultRenderRadioGroup<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element>({ tagGroup, tagLabel, makePropsGroup, makePropsLabel }: { tagLabel: ElementToTag<GroupLabelElement>, tagGroup: ElementToTag<GroupElement>, makePropsLabel: (info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>) => h.JSX.HTMLAttributes<GroupLabelElement>, makePropsGroup: (info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>) => h.JSX.HTMLAttributes<GroupElement> }) {
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
    name,
    onSelectedValueChange,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigationDirection,
    noTypeahead,
    typeaheadTimeout,
    ariaLabel,
    compare,
    getIndex,
    navigatePastEnd,
    navigatePastStart,
    initiallySelectedValue,
    untabbable,
    onTabbableIndexChange,
    pageNavigationSize,
}: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>, ref?: Ref<any>) {
    const info = useRadioGroup<V, GroupElement, GroupLabelElement, InputElement, LabelElement, TabbableChildElement>({
        linearNavigationParameters: {
            navigationDirection,
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        labelParameters: { ariaLabel },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        sortableChildrenParameters: { compare: compare ?? null },
        radioGroupParameters: { name, onSelectedValueChange, initiallySelectedValue },
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        // childrenHaveFocusParameters: {  },
        //        singleSelectionParameters: {  }
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
/*
export function defaultRenderRadio<V extends string | number, I extends HTMLElement, IL extends HTMLElement, TCE extends I | IL>({ tagInput, tagLabel, makePropsInput, makePropsLabel, labelPosition }: DefaultRenderRadioParameters<V, I, IL, TCE>) {
    return defaultRenderCheckboxLike<I, IL, UseRadioReturnType<V, I, IL, TCE, RadioSubInfo<TCE, V>>>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel });
}
*/

export const Radio = memoForwardRef(function Radio<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, TabbableChildElement extends InputElement | LabelElement>({
    disabled,
    index,
    render,
    value,
    ariaLabel,
    exclude,
    focusSelf,
    labelPosition,
    onPressSync,
    selectionMode,
    hidden,
    tagInput,
    tagLabel,
    text
}: RadioProps<LP, TabbableChildElement, InputElement, LabelElement, V>, ref?: Ref<any>) {
    const context = useContext(RadioContext);
    const getValue = useStableGetter(value);
    const defaultFocusSelf = () => info.checkboxLikeReturn.focusSelf();
    const info = useRadio<LP, InputElement, LabelElement, TabbableChildElement, V>({
        //listNavigationParameters: { text },
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue: getValue },
        radioParameters: { value },
        checkboxLikeParameters: { disabled: disabled ?? false },
        completeListNavigationChildParameters: { getValue },
        context,
        labelParameters: { ariaLabel, labelPosition, tagInput, tagLabel },
        pressParameters: { exclude, focusSelf: focusSelf ?? defaultFocusSelf, onPressSync },
        singleSelectionChildParameters: { selectionMode: useDefault("selectionMode", selectionMode), disabled: !!disabled },
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

export function DemoRadioGroup({ name }: { name: string }) {
    const [selectedValue, setSelectedValue] = useState<string | null>(null)
    return (
        <RadioGroup<string, HTMLDivElement, HTMLLabelElement, HTMLInputElement, HTMLLabelElement, HTMLInputElement>

            ariaLabel={null}
            collator={null}
            compare={((lhs, rhs) => lhs.index - rhs.index)}
            getIndex={v => v.props.index}
            name={name}
            noTypeahead={false}
            disableArrowKeys={false}
            disableHomeEndKeys={false}
            navigatePastEnd="wrap"
            navigatePastStart="wrap"
            initiallySelectedValue="a"
            navigationDirection="vertical"
            onSelectedValueChange={e => setSelectedValue(e)}
            render={info => {
                return (
                    <>
                        <div>
                            <label {...info.propsRadioGroupLabel}>Radio group</label>
                            <div {...info.propsRadioGroup}>

                            </div>
                        </div>
                    </>
                )
            }}


        />
    )
}
