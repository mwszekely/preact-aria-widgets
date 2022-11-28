import { ComponentChildren, createContext, h, Ref, RenderableProps, VNode } from "preact";
import { returnNull, returnZero, useMergedProps } from "preact-prop-helpers";
import { useContext, useImperativeHandle, useRef, useState } from "preact/hooks";
import { UseCheckboxReturnType } from "use-checkbox";
import { EventDetail, PropModifier } from "../props";
import { useCheckboxGroup, UseCheckboxGroupChild, UseCheckboxGroupChildParameters, UseCheckboxGroupParameters, UseCheckboxGroupParentParameters, CheckboxGroupChangeEvent, UseCheckboxGroupChildReturnType, UseCheckboxGroupParentReturnType, UseCheckboxGroupReturnType, useCheckboxGroupChild, useCheckboxGroupParent, CheckboxGroupInfo, CheckboxGroupContext } from "../use-checkbox-group";
import { Checkbox, CheckboxProps, defaultRenderCheckboxLike, DefaultRenderCheckboxLikeParameters } from "./checkbox";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];
//type Get2<T, K extends keyof T, K2 extends keyof T[K]> = T[K][K2];

export interface CheckboxGroupPropsBase<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends
    RenderableProps<{}>,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rearrangeableChildrenParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "sortableChildrenParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "typeaheadNavigationParameters">,
    Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rovingTabIndexParameters"> {
    ref?: Ref<UseCheckboxGroupReturnType<ParentElement, TabbableChildElement, M>>;
}

export interface CheckboxGroupParentPropsBase<TCE extends Element> extends
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "managedChildParameters">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "pressParameters">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "rovingTabIndexChildParameters">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "sortableChildParameters">,
    Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters">,
    Omit<Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "completeListNavigationChildParameters">, "checkboxInfo"> {
    //subInfo: Get<UseCheckboxGroupParentParameters<InputElement, C, K, C>, "subInfo">;
    ref?: Ref<UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}

export interface CheckboxGroupChildPropsBase<TCE extends Element> extends
    // Get2<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "checkbox">,
    // Get2<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "label">,
    // Get2<UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>, "asCheckbox", "checkboxLike">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "checkboxGroupChild">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "managedChildParameters">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "rovingTabIndexChildParameters">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "sortableChildParameters">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters">,
    Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "pressParameters"> {
    //subInfo: Get<UseCheckboxGroupChildParameters<InputType, CBGSubInfo, K, CBGSubInfo>, "subInfo">;
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

//export interface DefaultRenderCheckboxGroupChildParameters<InputElement extends Element, LabelElement extends Element, TCE extends InputElement | LabelElement> extends DefaultRenderCheckboxLikeParameters<InputElement, LabelElement, UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>> { }
//export interface DefaultRenderCheckboxGroupParameters<InputType extends Element, LabelType extends Element, TCE extends InputType | LabelType> extends DefaultRenderCheckboxLikeParameters<InputType, LabelType, UseCheckboxGroupReturnType<any, TCE, CheckboxGroupInfo<TCE>>> {
//    children: ComponentChildren;
//}
/*
export function defaultRenderCheckboxGroupChild<InputType extends Element, LabelType extends Element, TCE extends InputType | LabelType>({ tagInput, tagLabel, labelPosition, makePropsInput, makePropsLabel }: DefaultRenderCheckboxGroupChildParameters<InputType, LabelType, TCE>) {
    return function (groupInfo: UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>): VNode<any> {
        return defaultRenderCheckboxLike<InputType, LabelType, UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel })(groupInfo);
    }
}*/

interface Foo<InputType extends Element, LabelType extends Element> extends Omit<CheckboxProps<InputType, LabelType>, "checked" | "onCheckedChange"> {
    onCheckedChangeStart(): void;
    onCheckedChangeEnd(ex?: any): void;
}
/*
export function defaultRenderCheckboxGroupParent<InputType extends Element, LabelType extends Element>({ render, disabled, getDocument, labelPosition, tagInput, tagLabel, getWindow, onActiveElementChange, onCheckedChangeStart, onCheckedChangeEnd, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: Foo<InputType, LabelType>) {
    return function (parentInfo: UseCheckboxGroupParentReturnTypeInfo, modifyControlProps: PropModifier<any>) {
        const { checkboxGroupParent: { checked, onParentCheckedChange } } = parentInfo;
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
                onCheckedChange={e => {
                    let exception: any;
                    onCheckedChangeStart();
                    (async () => {

                        try {
                            await onParentCheckedChange(e);
                        }
                        catch (ex) {
                            exception = ex;
                        }
                        finally {
                            onCheckedChangeEnd(exception);
                        }
                    }

                    )()

                }}
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
}*/

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
    getIndex,
    untabbable,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    children,
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

export const CheckboxGroupParent = memoForwardRef(function CheckboxGroupParent<TCE extends Element>({ render,  index, focusSelf, exclude, hidden, getText, onPressSync, getSortValue, ..._rest }: CheckboxGroupParentProps<TCE>, ref?: Ref<any>) {
    const context = (useContext(UseCheckboxGroupChildContext) as CheckboxGroupContext<any, TCE, CheckboxGroupInfo<TCE>>);

    const info = useCheckboxGroupParent<TCE>({

        completeListNavigationChildParameters: { checkboxInfo: { checkboxChildType: "parent" } },
        context,
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        pressParameters: { exclude, onPressSync, focusSelf },
        textContentParameters: { getText: useDefault("getText", getText) }
    });
    useImperativeHandle(ref!, () => info);
    return render(info);
})

export const CheckboxGroupChild = memoForwardRef(function CheckboxGroupChild<TCE extends Element>({
    index,
    exclude,
    onPressSync,
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
    const info = useCheckboxGroupChild({
        checkboxGroupChild: { checked, onChangeFromParent },
        completeListNavigationChildParameters: {},
        textContentParameters: { getText: useDefault("getText", getText) },
        context,
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        pressParameters: { exclude, onPressSync, focusSelf }
    });

    useImperativeHandle(ref!, () => info);

    return render(info);
});

export function CheckboxGroupDemo() {
    return (
        <CheckboxGroup<HTMLDivElement, HTMLInputElement>
            collator={null}
            disableArrowKeys={false}
            disableHomeEndKeys={false}
            untabbable={false}
            navigatePastEnd="wrap"
            navigatePastStart="wrap"
            navigationDirection="vertical"
            noTypeahead={false}
            onTabbableIndexChange={null}
            pageNavigationSize={0.1}
            typeaheadTimeout={1000}
            compare={(lhs, rhs) => { return lhs.index - rhs.index; }}
            getIndex={vnode => vnode.props.index}
            render={info =>
                <div {...info.props}>

                </div>}
        />
    )
}

export function CheckboxGroupParentDemo({ index }: { index: number }) {
    const ref = useRef<UseCheckboxReturnType<any, any>>(null);
    return (
        <CheckboxGroupParent<HTMLInputElement>
            index={index}
            hidden={false}
            exclude={undefined}
            onPressSync={null}
            focusSelf={e => ref.current?.checkboxLikeReturn.focusSelf()}
            getSortValue={returnNull}
            render={i => {
                return (
                    <Checkbox<HTMLInputElement, HTMLLabelElement>
                        ariaLabel={null}
                        checked={i.checkboxGroupParentReturn.checked}
                        disabled={false}
                        labelPosition="separate"
                        ref={ref}
                        onCheckedChange={i.checkboxGroupParentReturn.onParentCheckedChange}
                        render={i => {
                            return (
                                <>
                                    <input {...i.propsInput} />
                                    <label {...i.propsLabel}>Parent</label>
                                </>
                            )
                        }}
                        tagLabel="label"
                        tagInput="input"
                    />
                )
            }}
        />
    )
}

export function CheckboxGroupChildDemo({ index }: { index: number }) {
    const [checked, setChecked] = useState<boolean | "mixed">(false);
    const ref = useRef<UseCheckboxReturnType<any, any>>(null);
    return (
        <CheckboxGroupChild<HTMLInputElement>
            index={index}
            hidden={false}
            onChangeFromParent={setChecked}
            exclude={undefined}
            onPressSync={null}
            checked={checked}
            focusSelf={e => ref.current?.checkboxLikeReturn.focusSelf()}
            getSortValue={returnNull}
            render={i => {
                return (
                    <Checkbox<HTMLInputElement, HTMLLabelElement>
                        ariaLabel={null}
                        ref={ref}
                        checked={checked}
                        disabled={false}
                        labelPosition="separate"
                        onCheckedChange={e => setChecked(e[EventDetail].checked)}
                        render={defaultRenderCheckboxLike({
                            labelPosition: "separate",
                            tagInput: "input",
                            tagLabel: "label",
                            makePropsInput: info => useMergedProps(info.propsInput, {}),
                            makePropsLabel: info => useMergedProps(info.propsLabel, {})
                        })}
                        tagLabel="label"
                        tagInput="input"
                    />
                )
            }}
        />
    )
}
