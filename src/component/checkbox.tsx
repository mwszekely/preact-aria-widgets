import { createElement, h, Ref, VNode } from "preact";
import { useRefElement } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/hooks";
import { ElementToTag, EventDetail } from "../props";
import { useCheckbox, UseCheckboxParameters, UseCheckboxReturnType } from "../use-checkbox";
import { LabelPosition } from "../use-label";
import { memoForwardRef, PartialExcept } from "./util";

type Get<T, K extends keyof T> = T[K];

interface CheckboxPropsBase<I extends Element, L extends Element> extends
    Get<UseCheckboxParameters<LabelPosition, I, L>, "checkboxLikeParameters">,
    Get<UseCheckboxParameters<LabelPosition, I, L>, "checkboxParameters">,
    Get<UseCheckboxParameters<LabelPosition, I, L>, "labelParameters"> {
    ref?: Ref<UseCheckboxReturnType<I, L>>;
}

export interface CheckboxProps<I extends Element, L extends Element> extends PartialExcept<CheckboxPropsBase<I, L>, "tagInput" | "tagLabel" | "labelPosition" | "ariaLabel" | "checked" | "onCheckedChange"> {
    render(info: UseCheckboxReturnType<I, L>): VNode<any>;
}

export function defaultRenderCheckboxLike<I extends Element, L extends Element, InfoType>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>) {
    return function (info: InfoType): VNode<any> {

        const inputProps = (makePropsInput(info))
        const { children, ...labelProps } = (makePropsLabel(info))
        if (labelPosition == "wrapping") {

            //const inputProps = modifyInputProps(makeInputProps(info));
            //const { children, ...labelProps } = modifyLabelProps(makeLabelProps(info));

            const input = createElement(tagInput as never, inputProps);
            const label = createElement(tagLabel as never, { ...labelProps, children: <>{input}{children}</> });

            return (
                <>
                    {label}
                </>
            )
        }
        else if (labelPosition == "separate") {

            const input = createElement(tagInput as never, inputProps);
            const label = createElement(tagLabel as never, { children, ...labelProps });

            return (
                <>
                    {input}
                    {label}
                </>
            )
        }
        else {
            console.assert(!!inputProps["aria-label"]);
            return createElement(tagInput as never, inputProps);
        }
    }
}

export interface DefaultRenderCheckboxLikeParameters<I extends Element, L extends Element, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden",
    tagInput: ElementToTag<I>,
    tagLabel: ElementToTag<L>,
    makePropsInput: (info: InfoType) => h.JSX.HTMLAttributes<I>,
    makePropsLabel: (info: InfoType) => h.JSX.HTMLAttributes<L>
}
/*
export interface DefaultRenderCheckboxParameters<I extends Element, L extends Element> extends DefaultRenderCheckboxLikeParameters<I, L, UseCheckboxReturnType<I, L>> { }

export function defaultRenderCheckbox<I extends Element, L extends Element>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxParameters<I, L>) {
    return defaultRenderCheckboxLike<I, L, UseCheckboxReturnType<I, L>>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel });
}*/

export const Checkbox = memoForwardRef(function Checkbox<I extends Element, L extends Element>({
    checked,
    disabled,
    tagLabel,
    labelPosition,
    tagInput,
    ariaLabel,
    onCheckedChange,
    render
}: CheckboxProps<I, L>, ref: Ref<any>) {

    const { refElementReturn: refElementInputReturn } = useRefElement<I>({ refElementParameters: {} });
    const { refElementReturn: refElementLabelReturn } = useRefElement<L>({ refElementParameters: {} });

    const checkbox = useCheckbox<LabelPosition, I, L>({
        checkboxLikeParameters: { checked: checked ?? false, disabled: disabled ?? false },
        checkboxParameters: { onCheckedChange },
        labelParameters: { ariaLabel: ariaLabel, labelPosition, tagInput, tagLabel },
        refElementInputReturn,
        refElementLabelReturn
    });

    useImperativeHandle(ref!, () => checkbox);


    return render(checkbox);
});
/*
export function DemoCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
        <Checkbox<HTMLInputElement, HTMLLabelElement> labelPosition="separate" checked={checked} disabled={false} onCheckedChange={(e) => setChecked(e[EventDetail].checked)} render={
            info => (
                <>
                    <input {...info.propsInput} /><label {...info.propsLabel} />
                </>
            )}
            tagInput="input"
            tagLabel="label"
            ariaLabel={null}
        />
    )
}*/
