import { h } from "preact";
import { useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { useButtonLikeEventHandlers } from "./use-button";
import { useCheckboxLike, UseCheckboxLikeParameters } from "./use-label";



export type CheckboxChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { checked: boolean } };

interface UseAriaCheckboxParameters<I extends Element, L extends Element> extends Omit<UseCheckboxLikeParameters<I, L>, "onInput" | "role"> {
    checked: boolean | "mixed";
    onInput(event: CheckboxChangeEvent<h.JSX.TargetedEvent<I>>): void;
    onInput(event: CheckboxChangeEvent<h.JSX.TargetedEvent<L>>): void;
}

export function useAriaCheckbox<InputType extends Element, LabelType extends Element>({ labelPosition, checked, onInput, disabled }: UseAriaCheckboxParameters<InputType, LabelType>) {

    const onInputEnhanced = (e: h.JSX.TargetedEvent<InputType | LabelType, Event>) => onInput(enhanceEvent(e as h.JSX.TargetedEvent<InputType, Event>, { checked: !checked }));
    const { getInputElement, getLabelElement, useCheckboxLikeInputElement, useCheckboxLikeLabelElement } = useCheckboxLike<InputType, LabelType>({ labelPosition, role: "checkbox", disabled, onInput: onInputEnhanced });

    const useCheckboxInputElement = useCallback(function useCheckboxInputElement({ tag }: TagSensitiveProps<InputType>) {
        const { inputElement, useCheckboxLikeInputElementProps } = useCheckboxLikeInputElement({ tag })
        const isMixed = (checked == "mixed");

        useLayoutEffect(() => {
            if (inputElement) {
                if (tag === "input") {
                    (inputElement as any).indeterminate = isMixed;
                }
            }
        }, [inputElement, isMixed, tag]);

        return { useCheckboxInputElementProps };

        function useCheckboxInputElementProps<P extends h.JSX.HTMLAttributes<InputType>>({ ...p0 }: P) {

            let props: h.JSX.HTMLAttributes<InputType> = useCheckboxLikeInputElementProps(p0);
            props.checked ??= !!checked;

            if (labelPosition == "separate") {
                props["aria-checked"] = checked.toString();
                if (tag != "input")
                props.tabIndex = 0;
            }

            return props;
        }
    }, [checked, labelPosition, disabled]);

    const useCheckboxLabelElement = useCallback(function useCheckboxLabelElement({ tag }: TagSensitiveProps<LabelType>) {
        const { useCheckboxLikeLabelElementProps } = useCheckboxLikeLabelElement({tag});

        function useCheckboxLabelElementProps<P extends h.JSX.HTMLAttributes<LabelType>>({ ...props }: P) {

            if (labelPosition == "wrapping") {
                props["aria-checked"] = checked.toString();
                if (tag != "input")
                props.tabIndex = 0;
            }
            return useCheckboxLikeLabelElementProps(props);
        };

        return { useCheckboxLabelElementProps };
    }, [useCheckboxLikeLabelElement, disabled, labelPosition]);


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