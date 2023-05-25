import { Ref, VNode } from "preact";
import { OmitStrong } from "../props.js";
import { UseButtonParameters, UseButtonReturnType } from "../use-button.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = NonNullable<T[K]>;
interface ButtonPropsBase<E extends Element> extends OmitStrong<Get<UseButtonParameters<E>, "buttonParameters">, "role">, OmitStrong<Get<UseButtonParameters<E>, "pressParameters">, "excludeSpace" | "excludePointer" | "excludeEnter">, Get<UseButtonParameters<E>, "refElementParameters"> {
    ref?: Ref<UseButtonReturnType<E>>;
}
export interface ButtonProps<E extends Element> extends PartialExcept<ButtonPropsBase<E>, "tagButton"> {
    render(info: UseButtonReturnType<E>): VNode<any>;
}
export declare const Button: <E extends Element>({ tagButton, onPress, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold }: ButtonProps<E>, ref: Ref<any>) => VNode<any>;
export {};
//# sourceMappingURL=button.d.ts.map