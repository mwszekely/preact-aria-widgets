import { Ref, VNode } from "preact";
import { Get3 } from "../props.js";
import { UseButtonParameters, UseButtonReturnType } from "../use-button.js";
import { PartialExcept } from "./util.js";
interface ButtonPropsBase<E extends Element> extends Get3<UseButtonParameters<E>, "buttonParameters", "pressParameters", "refElementParameters"> {
    ref?: Ref<UseButtonReturnType<E>>;
}
export interface ButtonProps<E extends Element> extends PartialExcept<ButtonPropsBase<E>, "tagButton"> {
    render(info: UseButtonReturnType<E>): VNode<any>;
}
export declare const Button: <E extends Element>({ tagButton, onPress, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeEnter, excludePointer, excludeSpace, onPressingChange }: ButtonProps<E>, ref: Ref<any>) => VNode<any>;
export {};
//# sourceMappingURL=button.d.ts.map