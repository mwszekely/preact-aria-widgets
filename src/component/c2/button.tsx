import clsx from "clsx";
import { Button, ButtonProps } from "component/button";
import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { getDefaultClass, StandardProps } from "./util";

export interface Button2Props extends Pick<h.JSX.HTMLAttributes<HTMLButtonElement>, StandardProps | "aria-label">, Pick<ButtonProps<HTMLButtonElement>, "disabled" | "onPress" | "pressed"> {

}

export function Button2({ disabled, onPress, pressed, children, ...props }: Button2Props, ref: Ref<HTMLButtonElement>) {
    return (
        <Button
            disabled={disabled}
            onPress={onPress}
            pressed={pressed}
            tagButton="button"
            render={info => {
                const cls = clsx(getDefaultClass("button", "button"), info.pressReturn.pseudoActive && getDefaultClass("button", "active"))
                return (<button {...useMergedProps(info.props, { ref, className: cls }, props)}>{children}</button>)
            }}
        />
    )
}