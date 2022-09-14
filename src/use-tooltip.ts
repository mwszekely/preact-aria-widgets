import { h } from "preact";
import { useGlobalHandler, useHasFocus, useMergedProps, usePassiveState, useRandomId, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";

export type UseTooltipTrigger<TriggerType extends Element> = () => { useTooltipTriggerProps: ({ ...props }: h.JSX.HTMLAttributes<TriggerType>) => h.JSX.HTMLAttributes<TriggerType> };
export interface UseTooltipParameters { mouseoverDelay?: number, mouseoutDelay?: number, focusDelay?: number }
export type UseTooltip<TriggerType extends HTMLElement | SVGElement, TooltipType extends Element> = (args: UseTooltipParameters) => UseTooltipReturnTypeWithHooks<TriggerType, TooltipType>;
export interface UseTooltipReturnTypeInfo {
    isOpen: boolean;
    getIsOpen: () => boolean;
}

export interface UseTooltipReturnTypeWithHooks<TriggerType extends Element, TooltipType extends Element> extends UseTooltipReturnTypeInfo {
    useTooltip: () => {
        useTooltipProps: ({ ...props }: h.JSX.HTMLAttributes<TooltipType>) => h.JSX.HTMLAttributes<TooltipType>;
    };
    useTooltipTrigger: UseTooltipTrigger<TriggerType>;
}

function returnFalse() { return false; }

export function useAriaTooltip<TriggerType extends Element, TooltipType extends Element>({ mouseoverDelay, mouseoutDelay, focusDelay }: UseTooltipParameters): UseTooltipReturnTypeWithHooks<TriggerType, TooltipType> {

    mouseoverDelay ??= 400;
    mouseoutDelay ??= 40;
    focusDelay ??= 1;

    // The escape key should close tooltips, but do nothing else.
    // (i.e. closing a tooltip in a dialog MUST NOT close the dialog too)
    // TODO: Tooltips are, effectively, always the topmost component,
    // so we can just have them listen to and swallow all "Escape"
    // key presses before anyone else. For a more general popup,
    // or a tooltip in a tooltip (!!) a different solution would be needed.
    useGlobalHandler(document, "keydown", (e: KeyboardEvent) => {
        if (getOpen() && e.key === "Escape" && !e.defaultPrevented) {
            e.preventDefault();
            e.stopImmediatePropagation();
            setOpen(false);
            setTriggerHoverDelayCorrected(false);
            setTooltipHoverDelayCorrected(false);
            setTriggerFocusedDelayCorrected(false);
            setTooltipFocusedDelayCorrected(false);
        }
    }, { capture: true });

    const [open, setOpen, getOpen] = useState(false);

    const {
        useRandomIdSourceElement,//: useTooltipIdProps, 
        useRandomIdReferencerElement,//: useTooltipIdReferencingProps 
    } = useRandomId<TooltipType>({ randomId: { prefix: "aria-tooltip-" }, managedChildren: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });

    const [, setTriggerFocused] = usePassiveState(useStableCallback((focused: boolean) => {
        const delay = focused ? focusDelay : 1;
        if (delay != null && isFinite(delay)) {
            const handle = setTimeout(() => setTriggerFocusedDelayCorrected(focused), focused ? focusDelay : 1);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [, setTooltipFocused] = usePassiveState(useStableCallback((focused: boolean) => {
        const delay = focused ? focusDelay : 1;
        if (delay != null && isFinite(delay)) {
            const handle = setTimeout(() => setTooltipFocusedDelayCorrected(focused), delay);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [, setTriggerHover] = usePassiveState(useStableCallback((hovering: boolean) => {
        const delay = hovering ? mouseoverDelay : mouseoutDelay;
        if (delay != null && isFinite(delay)) {
            const handle = setTimeout(() => setTriggerHoverDelayCorrected(hovering), delay);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [, setTooltipHover] = usePassiveState(useStableCallback((hovering: boolean) => {
        const delay = hovering ? mouseoverDelay : mouseoutDelay;
        if (delay != null && isFinite(delay)) {
            const handle = setTimeout(() => setTooltipHoverDelayCorrected(hovering), delay);
            return () => clearTimeout(handle);
        }
    }), returnFalse);
    const [triggerFocusedDelayCorrected, setTriggerFocusedDelayCorrected] = useState(false);
    const [triggerHoverDelayCorrected, setTriggerHoverDelayCorrected] = useState(false);
    const [tooltipFocusedDelayCorrected, setTooltipFocusedDelayCorrected] = useState(false);
    const [tooltipHoverDelayCorrected, setTooltipHoverDelayCorrected] = useState(false);

    useEffect(() => {
        setOpen(triggerFocusedDelayCorrected || triggerHoverDelayCorrected || tooltipFocusedDelayCorrected || tooltipHoverDelayCorrected);
    }, [triggerFocusedDelayCorrected || triggerHoverDelayCorrected || tooltipFocusedDelayCorrected || tooltipHoverDelayCorrected])

    const useTooltipTrigger: UseTooltipTrigger<TriggerType> = useCallback(function useTooltipTrigger() {

        useGlobalHandler(document, "pointermove", e => {
            const target = (e.target as HTMLElement);
            setTriggerHover(target == getElement() as Node || !!getElement()?.contains(target));
        }, { capture: true });

        function onTouchEnd(e: TouchEvent) {
            (e.target as any).focus();
        }

        const { useHasFocusProps, getElement } = useHasFocus<TriggerType>({ onFocusedInnerChanged: setTriggerFocused })


        function useTooltipTriggerProps({ ...props }: h.JSX.HTMLAttributes<TriggerType>): h.JSX.HTMLAttributes<TriggerType> {
            const { useRandomIdReferencerElementProps } = useRandomIdReferencerElement<TriggerType>("aria-describedby" as never);
            // Note: Though it's important to make sure that focusing activates a tooltip,
            // it's perfectly reasonable that a child element will be the one that's focused,
            // not this one, so we don't set tabIndex=0
            props.tabIndex ??= -1;
            return useRandomIdReferencerElementProps(
                useHasFocusProps(
                    useMergedProps<TriggerType>({ onTouchEnd }, (props as any) as unknown as h.JSX.HTMLAttributes<TriggerType>)
                )
            );
        }

        return { useTooltipTriggerProps };

    }, []);

    const useTooltip = useCallback(function useTooltip() {
        const { useRandomIdSourceElementProps } = useRandomIdSourceElement();
        const { useHasFocusProps, getElement } = useHasFocus<TooltipType>({ onFocusedInnerChanged: setTooltipFocused })

        useGlobalHandler(document, "pointermove", e => {
            const target = (e.target as HTMLElement);
            setTooltipHover(target == getElement() as Node || !!getElement()?.contains(target));
        }, { capture: true });

        function useTooltipProps({ ...props }: h.JSX.HTMLAttributes<TooltipType>): h.JSX.HTMLAttributes<TooltipType> {
            return useRandomIdSourceElementProps(useHasFocusProps(useMergedProps<TooltipType>({}, props)));
        }

        return { useTooltipProps };
    }, []);

    return {
        useTooltip,
        useTooltipTrigger,
        isOpen: open,
        getIsOpen: getOpen
    }
}
