import { h } from "preact";
import { useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { useButtonLikeEventHandlers } from "./use-button";
import { useInputLabel } from "./use-label";

export type CheckboxChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { checked: boolean } };

interface UseAriaCheckboxParameters<I extends Element, L extends Element> {
    checked: boolean | "mixed";
    onInput(event: CheckboxChangeEvent<h.JSX.TargetedEvent<I>>): void;
    onInput(event: CheckboxChangeEvent<h.JSX.TargetedEvent<L>>): void;
    labelPosition: "wrapping" | "separate";
    disabled: boolean;
}

export function useAriaCheckbox<InputType extends Element, LabelType extends Element>({ labelPosition, checked, onInput, disabled }: UseAriaCheckboxParameters<InputType, LabelType>) {

    const stableOnInput = useStableCallback(onInput);
    const getChecked = useStableGetter(checked);

    const { inputId, labelId, useInputLabelInput: useILInput, useInputLabelLabel: useILLabel, getLabelElement, getInputElement } = useInputLabel({ labelPrefix: "aria-checkbox-label-", inputPrefix: "aria-checkbox-input-" });

    const useCheckboxInputElement = useCallback(function useCheckboxInputElement({ tag }: TagSensitiveProps<InputType>) {
        const { useInputLabelInputProps: useILInputProps } = useILInput<InputType>();
        const { element, useRefElementProps } = useRefElement<InputType>();
        const isMixed = (checked == "mixed");

        useLayoutEffect(() => {
            if (element) {
                if (tag === "input") {
                    (element as any).indeterminate = isMixed;
                }
            }
        }, [element, isMixed, tag])


        return { useCheckboxInputElementProps };



        function useCheckboxInputElementProps<P extends h.JSX.HTMLAttributes<InputType>>({ ...p0 }: P) {

            let newProps: h.JSX.HTMLAttributes<InputType> = useButtonLikeEventHandlers<InputType>(e => stableOnInput(enhanceEvent(e,{ checked: !checked })), disabled ? "exclude" : tag != "input" || labelPosition == "wrapping" ? undefined : "exclude")({});

            if (tag == "input" && labelPosition == "separate") {
                if (!disabled) {
                    newProps.onInput =  (e: h.JSX.TargetedEvent<InputType, Event>) => stableOnInput(enhanceEvent(e, { checked: !checked }));
                }
            }


            const p3 = useRefElementProps(useILInputProps(p0));
            const props = useMergedProps<InputType>()(newProps, p3);
            props.checked ??= !!checked;


            if (labelPosition == "wrapping") {
                // Because the wrapped label handles all interactions,
                // we need to make sure this element can't be interacted with
                // even if it's an input element.
                props.inert = true;
                props.tabIndex = -1;
                props.onFocus = e => getLabelElement().focus();
            }
            else {
                if (tag != "input" && props.type != "checkbox") {
                    props.role = "checkbox";
                }
                props["aria-disabled"] = disabled.toString();
                props["aria-checked"] = checked.toString();

                props.tabIndex = 0;
            }

            return useMergedProps<InputType>()(newProps, props);
        }
    }, [useILInput, checked, labelPosition, disabled]);

    const useCheckboxLabelElement = useCallback(function useCheckboxLabelElement({ tag }: TagSensitiveProps<LabelType>) {
        const { useInputLabelLabelProps: useILLabelProps } = useILLabel<LabelType>({ tag });

        function useCheckboxLabelElementProps<P extends h.JSX.HTMLAttributes<LabelType>>({ ...p0 }: P) {

            const p3 = (useILLabelProps(p0));

            let newProps: h.JSX.HTMLAttributes<LabelType> = useButtonLikeEventHandlers<LabelType>(e => stableOnInput(enhanceEvent(e, { checked: !getChecked() })), disabled || (labelPosition == "separate" && tag == "label") ? "exclude" : undefined)({});

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
    }, [useILLabel, disabled, labelPosition]);


    return {
        useCheckboxInputElement,
        useCheckboxLabelElement
    };

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