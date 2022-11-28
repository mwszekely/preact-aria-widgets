import clsx from "clsx";
import { Checkbox, CheckboxProps } from "component/checkbox";
import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { getDefaultClass, StandardProps } from "./util";

export interface Checkbox2Props extends Pick<CheckboxProps<HTMLInputElement, HTMLLabelElement>, "ariaLabel" | "checked" | "onCheckedChange" | "disabled">, Pick<h.JSX.HTMLAttributes<HTMLInputElement>, StandardProps> {

}

export function Checkbox2({ ariaLabel, checked, onCheckedChange, disabled, children, ...props }: Checkbox2Props, ref: Ref<HTMLInputElement>) {
    return (
        <Checkbox<HTMLInputElement, HTMLLabelElement>
            ariaLabel={ariaLabel}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            labelPosition={ariaLabel == null ? "separate" : "none"}
            tagInput="input"
            tagLabel="label"
            render={info => {
                const cls = clsx(
                    checked && getDefaultClass("checkbox", "checked"),
                    disabled && getDefaultClass("checkbox", "disabled"),
                )
                return (
                    <>
                        <input {...useMergedProps({ ref, className: clsx(cls, getDefaultClass("checkbox", "checkbox")) }, props, info.propsInput)}></input>
                        {ariaLabel == null && <label {...useMergedProps<HTMLLabelElement>({ className: clsx(cls, getDefaultClass("checkbox", "label")) }, info.propsLabel)}>{children}</label>}
                    </>
                )
            }}
        />
    )
}
