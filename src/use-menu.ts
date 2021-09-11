import { h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import { useHasFocus } from "preact-prop-helpers/use-has-focus";
import { useActiveElement } from "preact-prop-helpers/use-active-element";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildPropsReturnType, UseListNavigationParameters } from "preact-prop-helpers/use-list-navigation";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType } from "preact-prop-helpers/use-random-id";
import { useRefElement, UseRefElementPropsReturnType } from "preact-prop-helpers/use-ref-element";
import { TagSensitiveProps, EventDetail, enhanceEvent } from "./props";
import { useFocusTrap, useTimeout } from "preact-prop-helpers";
import { useSoftDismiss } from "./use-modal";

interface UseMenuParameters1 extends UseListNavigationParameters {
    open: boolean;
    onClose(): void;
    onOpen(): void;
}

interface UseMenuParameters2 extends UseListNavigationParameters {
    menubar: true;
}

export type UseAriaMenuParameters = (UseMenuParameters1 | UseMenuParameters2);
export type UseMenuSubmenuItemParameters = UseAriaMenuParameters & {}
export interface UseMenuButtonParameters<E extends Element> extends TagSensitiveProps<E> {
}

export interface UseMenuItemCheckboxInfo<E extends EventTarget> extends UseListNavigationChildInfo {
    type: "checkbox";
    checked: boolean | "mixed";
    onChange(e: { [EventDetail]: { checked: boolean } } & h.JSX.TargetedEvent<E, Event>): void;
}

export interface UseMenuItemRadioInfo<E extends EventTarget> extends UseListNavigationChildInfo {
    type: "radio";
    checked: boolean;
    onChange(e: { [EventDetail]: { checked: boolean } } & h.JSX.TargetedEvent<E, Event>): void;
}

export interface UseMenuItemDefaultInfo<E extends EventTarget> extends UseListNavigationChildInfo {
    type?: "default";
    onClick?(e: h.JSX.TargetedEvent<E>): void;
}

export type UseMenuItemCheckboxParameters<E extends EventTarget> = UseListNavigationChildParameters<UseMenuItemCheckboxInfo<E>>;
export type UseMenuItemRadioParameters<E extends EventTarget> = UseListNavigationChildParameters<UseMenuItemRadioInfo<E>>;
export type UseMenuItemDefaultParameters<E extends EventTarget> = UseListNavigationChildParameters<UseMenuItemDefaultInfo<E>>;
/*
export type UseAriaMenuProps<E extends Element> = <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => UseRandomIdPropsReturnType<UseListNavigationPropsReturnType<E, P>>;
export type UseAriaMenuButton = <E_1 extends Element>({ tag }: UseAriaMenuButtonParameters<E_1>) => {
    useAriaMenuButtonProps: <P_1 extends h.JSX.HTMLAttributes<E_1>>(p: P_1) => UseRefElementPropsReturnType<E_1, UseAriaButtonPropsReturnType<E_1, UseReferencedIdPropsReturnType<P_1, "aria-controls">>>;
};
export type UseAriaMenu<E extends Element> = ({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, ...args }: UseAriaMenuParameters) => UseAriaMenuReturnType<E>;

export interface UseAriaMenuReturnType<E extends Element> {
    useAriaMenuProps: UseAriaMenuProps<E>;
    useAriaMenuButton: UseAriaMenuButton;
    useAriaMenuItem: UseAriaMenuItem;
    useAriaMenuItemCheckbox: UseAriaMenuItemCheckbox;
    useAriaMenuSubmenuItem: UseAriaMenuSubmenuItem;
}

export type UseAriaMenuItem = <E_2 extends Element>(args: UseAriaMenuItemDefaultParameters) => {
    useAriaMenuItemProps: <P_2 extends h.JSX.HTMLAttributes<E_2>>({ ...props }: P_2) => MergedProps<E_2, {
        onClick: h.JSX.MouseEventHandler<E_2>;
    }, UseListNavigationChildPropsReturnType<E_2, P_2>>;
    asyncInfo: Omit<UseAsyncHandlerReturnType<E_2, "onClick", void>, "onClick">
}

export type UseAriaMenuItemCheckbox = <E_3 extends Element>(args: UseAriaMenuItemCheckboxParameters) => {
    useAriaMenuItemProps: <P_3 extends h.JSX.HTMLAttributes<E_3>>({ ...props }: P_3) => MergedProps<E_3, {
        onClick: h.JSX.MouseEventHandler<E_3>;
    }, P_3>;
};

export type UseAriaMenuSubmenuItem = <E_4 extends Element>(args: UseAriaMenuSubmenuItemParameters) => UseAriaMenuSubmenuItemReturnType<E_4>;

export interface UseAriaMenuSubmenuItemReturnType<E_4 extends Element> {
    element: E_4 | null;
    getElement: () => E_4 | null;
    useAriaMenuProps: <P_4 extends h.JSX.HTMLAttributes<HTMLElement>>({ ...props }: P_4) => UseRandomIdPropsReturnType<P_4>;
    useAriaMenuSubmenuItemProps: <P_5 extends h.JSX.HTMLAttributes<E_4>>({ ...props }: P_5) => UseRefElementPropsReturnType<E_4, UseRefElementPropsReturnType<E_4, UseAriaButtonPropsReturnType<E_4, UseReferencedIdPropsReturnType<UseReferencedIdPropsReturnType<P_5, "aria-controls">, "aria-controls">>>>;
}*/

let i = 0;
function r() {
    ++i;
    requestAnimationFrame(r);
}
requestAnimationFrame(r);

export type UseMenuItem<E extends Element> = (args: UseMenuItemDefaultParameters<E>) => {
    useMenuItemProps: <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => MergedProps<E, {
        onClick: h.JSX.MouseEventHandler<E>;
    }, UseListNavigationChildPropsReturnType<E, P>>
    // asyncInfo: Omit<UseAsyncHandlerReturnType<E, h.JSX.TargetedEvent<E>, void>, "getSyncHandler">;
}

export function useAriaMenu<ParentElement extends Element, ChildElement extends Element>({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, ...args }: UseAriaMenuParameters) {
    type E = ParentElement;

    const [focusTrapActive, setFocusTrapActive] = useState(false);

    let onClose = (args as Partial<UseMenuParameters1>).onClose;
    let onOpen = (args as Partial<UseMenuParameters1>).onOpen;
    let menubar = (args as Partial<UseMenuParameters2>).menubar;
    let open = (menubar ? true : (args as UseMenuParameters1).open);
    const stableOnClose = useStableCallback(onClose ?? (() => { }));

    // TODO: It's awkward that the button focus props are out here where we don't have its type,
    // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
    // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
    // where nothing is focused. 
    const { focusedInner: menuHasFocus, useHasFocusProps: useMenuHasFocusProps, } = useHasFocus<E>();
    const { focusedInner: buttonHasFocus, useHasFocusProps: useButtonHasFocusProps } = useHasFocus<Element>();
    const { activeElement, lastActiveElement, windowFocused } = useActiveElement();

    const { managedChildren, useListNavigationChild, tabbableIndex, focusSelf: focusMenu } = useListNavigation<E, ChildElement>({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, focusOnChange: (menuHasFocus || buttonHasFocus) });
    const { useRandomIdProps: useMenuIdProps, useReferencedIdProps: useMenuIdReferencingProps } = useRandomId({ prefix: "aria-menu-" });

    const [openerElement, setOpenerElement] = useState<(Element & HTMLOrSVGElement) | null>(null);

    const { useSoftDismissProps } = useSoftDismiss<E>({ onClose: stableOnClose });

    useEffect(() => {
        setFocusTrapActive(open);
    }, [open]);

    useEffect(() => {
        if (focusTrapActive)
            focusMenu();
        else
            openerElement?.focus();
    }, [focusTrapActive]);

    // Focus management is really finicky, and there's always going to be 
    // an edge case where nothing's focused for two consecutive frames 
    // on iOS or whatever, which would immediately close the menu 
    // any time it's been opened. So any time it *looks* like we should close,
    // try waiting 100ms. If it's still true then, then yeah, we should close.
    let shouldClose = (focusTrapActive && windowFocused && !menuHasFocus && !buttonHasFocus);
    useTimeout({
        timeout: 100,
        callback: () => {
            if (shouldClose) {
                onClose?.();
            }
        },
        triggerIndex: `${shouldClose}`
    });

    // A menu sentinal is a hidden but focusable element that comes at the start or end of the element
    // that, when activated or focused over, closes the menu.
    // (if focused within 100ms of the open prop changing, instead of
    // closing the menu, focusing the sentinel immediately asks the menu to focus itself).
    // This exists because while mouse users can click out of a menu
    // and keyboard users can escape to close the menu,
    // screen readers and other input methods that don't use those two become stuck.
    const useMenuSentinel = useCallback(<E extends Element>() => {
        const [firstSentinelIsActive, setFirstSentinelIsActive] = useState(false);
        useTimeout({ callback: () => { setFirstSentinelIsActive(open); }, timeout: 100, triggerIndex: `${firstSentinelIsActive}` });

        const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => focusMenu());
        const onClick = () => stableOnClose();

        return {
            useMenuSentinelProps: function <P extends h.JSX.HTMLAttributes<E>>(p: P) {
                return useMergedProps<E>()({ onFocus, onClick }, p);
            }
        }
    }, [open]);

    const useMenuButton = useCallback(<E extends Element>({ tag }: UseMenuButtonParameters<E>) => {
        const { element, getElement, useRefElementProps } = useRefElement<E>();
        useLayoutEffect(() => { setOpenerElement(element as Element as (Element & HTMLOrSVGElement)); }, [element]);

        return {
            useMenuButtonProps: function <P extends h.JSX.HTMLAttributes<E>>(p: P) {
                let props = useRefElementProps(useMergedProps<E>()({ onClick: () => { return open ? onClose?.() : onOpen?.() } }, useMenuIdReferencingProps("aria-controls")(useButtonHasFocusProps(p as any) as any)));
                props["aria-haspopup"] = "menu";
                props["aria-expanded"] = open ? "true" : undefined;
                return props;
            }
        }
    }, [open, onClose, onOpen, useMenuIdReferencingProps]);

    const useMenuSubmenuItem = useCallback((args: UseMenuSubmenuItemParameters) => {
        const { useMenuProps, useMenuButton } = useAriaMenu<HTMLElement, ChildElement>(args);
        const { useMenuButtonProps } = useMenuButton<E>({ tag: "li" as any });

        const { element, getElement, useRefElementProps } = useRefElement<E>();
        useLayoutEffect(() => { setOpenerElement(element as Element as (Element & HTMLOrSVGElement)); }, [element]);

        return {
            element,
            getElement,
            useMenuProps,
            useMenuSubmenuItemProps: function <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
                props.role = "menuitem";
                return useRefElementProps(useMenuButtonProps(useMenuIdReferencingProps("aria-controls")(props)));
            }
        }
    }, []);

    const useMenuItem: UseMenuItem<ChildElement> = useCallback((args: UseMenuItemDefaultParameters<ChildElement>) => {
        type E = ChildElement;

        const { useListNavigationChildProps } = useListNavigationChild(args);
        // const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: _ => void (0) });
        // const onClick = getSyncHandler(asyncInfo.pending ? null : (args.onClick ?? null));
        const onClick = args.onClick;

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitem";
            return useMergedProps<E>()({ onClick }, useListNavigationChildProps(props));
        }

        return { useMenuItemProps };
    }, []);

    const useMenuItemCheckbox = useCallback(<E extends Element>(args: UseMenuItemCheckboxParameters<E>) => {

        //const { getSyncHandler, ...asyncInfo } = useAsyncHandler<E>()({ capture: _ => !args.checked });
        //const onClick = getSyncHandler(asyncInfo.pending ? null : args.onChange);

        const onClick = (e: h.JSX.TargetedEvent<E>) => args.onChange(enhanceEvent(e, { checked: !args.checked }));

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitemcheckbox";
            return useMergedProps<E>()({ onClick }, props);
        }

        return { useMenuItemProps };
    }, []);


    function useMenuProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
        props.role = "menu";

        function onKeyDown(e: KeyboardEvent) {
            if (e.key == "Escape" && onClose) {
                onClose();
            }
        }

        return useMenuIdProps(useMenuHasFocusProps(useMergedProps<E>()({ onKeyDown }, useSoftDismissProps(props))));
    }


    return {
        useMenuProps,
        useMenuButton,

        useMenuItem,
        useMenuSentinel,
        useMenuItemCheckbox,
        useMenuSubmenuItem,

        focusMenu

    }
}
