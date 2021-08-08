import { h } from "preact"
import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useAsyncHandler } from "preact-prop-helpers/use-async-handler";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useInputLabel } from "./use-label";
import { TagSensitiveProps } from "./props";
import { useButtonLikeEventHandlers } from "./use-button";

interface UseAriaCheckboxParameters {
    checked: boolean | "mixed";
    onInput(checked: boolean, e: Event): (Promise<void> | void);
    labelPosition: "wrapping" | "separate";
    disabled: boolean;
}

export function useAriaCheckbox<InputType extends Element, LabelType extends Element>({ labelPosition, checked, onInput: onInputAsync, disabled }: UseAriaCheckboxParameters) {

    const { onInput, ...asyncInfo } = useAsyncHandler<InputType | LabelType>()({ event: "onInput", capture: e => !checked })(onInputAsync);

    const { inputId, labelId, useInputLabelInput: useILInput, useInputLabelLabel: useILLabel } = useInputLabel({ labelPrefix: "aria-checkbox-label-", inputPrefix: "aria-checkbox-input-" });

    disabled ||= asyncInfo.pending;



    return {
        useCheckboxInputElement,
        useCheckboxLabelElement,
        asyncInfo
    };




    function useCheckboxInputElement({ tag }: TagSensitiveProps<InputType>) {
        const { useInputLabelInputProps: useILInputProps } = useILInput<InputType>();
        const { element, useRefElementProps } = useRefElement<InputType>();



        return { useCheckboxInputElementProps };



        function useCheckboxInputElementProps<P extends h.JSX.HTMLAttributes<InputType>>({ ...p0 }: P) {

            let newProps: h.JSX.HTMLAttributes<InputType> = useButtonLikeEventHandlers<InputType>(onInput, disabled? "exclude" : tag != "input" || labelPosition == "wrapping"? undefined : "exclude")({});

            if (tag == "input" && labelPosition == "separate") {
                if (!disabled) {
                    newProps.onInput = onInput;
                }
            }

            const isMixed = (checked == "mixed");

            const p3 = useRefElementProps(useILInputProps(p0));
            const props = useMergedProps<InputType>()(newProps, p3);
            props.checked ??= !!checked;


            if (labelPosition == "wrapping") {
                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                props.inert = true;
                props.tabIndex = -1;
            }
            else {
                if (tag != "input" && props.type != "checkbox") {
                    props.role = "checkbox";
                }
                props["aria-disabled"] = disabled.toString();
                props["aria-checked"] = checked.toString();

                props.tabIndex = 0;

            }


            useLayoutEffect(() => {
                if (element) {
                    if (tag === "input") {
                        (element as any).indeterminate = isMixed;
                    }
                }
            }, [element, isMixed, tag])


            return useMergedProps<InputType>()(newProps, props);
        }
    }

    function useCheckboxLabelElement({ tag }: TagSensitiveProps<LabelType>) {

        function useCheckboxLabelElementProps<P extends h.JSX.HTMLAttributes<LabelType>>({ ...p0 }: P) {

            const { useInputLabelLabelProps: useILLabelProps } = useILLabel<LabelType>({ tag });
            const p3 = (useILLabelProps(p0));

            let newProps: h.JSX.HTMLAttributes<LabelType> = useButtonLikeEventHandlers<LabelType>(onInput, disabled || (labelPosition == "separate" && tag == "label")? "exclude" : undefined)({});

            if (labelPosition == "wrapping") {
                newProps.tabIndex = 0;
                newProps.role = "checkbox";
                newProps["aria-disabled"] = disabled.toString();
                newProps["aria-checked"] = checked.toString();
            }
            else {
                // The one case where there's almost nothing to do
                // The most normal case where everything acts according normal HTML mechanics.
            }

            return useMergedProps<LabelType>()(newProps, p3);
        }

        return { useCheckboxLabelElementProps };
    }
}



/*
export interface TriStateChildInfo<T extends number | string> extends ManagedChildInfo<T> {
    notifyParent(checked: boolean | "mixed"): void;
    setChecked(checked: boolean | "mixed"): void;
}

export function useTriStateCheckbox<E extends Element, I extends TriStateChildInfo<any>>(args: Omit<UseAriaCheckboxParameters, "checked" | "onInput">) {
    const [lastState, setLastState] = useState<"none" | "all" | "mixed">("none"); // Reflects what we've last clicked, not what we're displaying due to child changes.
    const [checkedCount, setCheckedCount] = useState<number>(0);
    const { managedChildren, useManagedChild } = useChildManager<E, I>();
    const mixedState = useRef<Map<number, { checked: boolean | "mixed", setChecked(checked: boolean | "mixed"): void }>>(new Map());
    const checked = checkedCount == 0 ? false : (checkedCount == managedChildren.length ? true : "mixed");
    const { useAriaCheckboxInput, useAriaCheckboxLabel } = useAriaCheckbox({ ...args, checked, onInput });


    function onInput(checked: boolean, e: h.JSX.TargetedEvent<E>) {

    }



    const useTriStateCheckboxChild = useCallback(function useTriStateCheckboxChild(args: Omit<I, "notifyParent">) {

        function notifyParent(checked: boolean | "mixed") {
            mixedState.current.set(args.index, { checked, setChecked: args.setChecked });
            setCheckedCount(c => c += (!!checked ? 1 : -1));

            if (lastState == "none" && !!checked) {
                setLastState("mixed");
                mixedState.current.clear();
            }
            else if (lastState == "all" && !checked) {
                setLastState("mixed");
                for (let managedChild of managedChildren) {
                    managedChild.setChecked(true);
                }
            }
        }

        const nothing = useManagedChild({ ...args, notifyParent } as I)


    }, []);

    return { useTriStateCheckboxProps, useTriStateCheckboxChild };

    function useTriStateCheckboxProps<P extends h.JSX.HTMLAttributes<E>>(props: P) { return useAriaCheckbox }

}
*/