import { Get3 } from "../props.js";
import { UseButtonParameters, UseButtonReturnType } from "../use-button.js";
import { GenericComponentProps } from "./util.js";
export type ButtonProps<ButtonElement extends Element> = GenericComponentProps<UseButtonReturnType<ButtonElement>, Get3<UseButtonParameters<ButtonElement>, "buttonParameters", "pressParameters", "refElementParameters">, "tagButton">;
export declare const Button: <ButtonElement extends Element>({ tagButton, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeSpace, onPressingChange, onPressSync, focusSelf, role, imperativeHandle, ...void1 }: ButtonProps<ButtonElement>) => import("preact-prop-helpers").JSX.Element;
//# sourceMappingURL=button.d.ts.map