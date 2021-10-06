import { h } from "preact";
import { MergedProps, useActiveElement, useHasFocus, useLayoutEffect, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildPropsReturnType, UseListNavigationParameters, useMergedProps, useRandomId, useRefElement, useStableCallback, useState, useTimeout } from "preact-prop-helpers";
import { useCallback, useEffect } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
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
export interface UseMenuButtonParameters { }

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


export type UseMenuItem<E extends Element> = (args: UseMenuItemDefaultParameters<E>) => {
    useMenuItemProps: <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => MergedProps<E, {
        onClick: h.JSX.MouseEventHandler<E>;
    }, UseListNavigationChildPropsReturnType<E, P>>
}

export function useAriaMenu<ParentElement extends Element, ChildElement extends Element>({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, ...args }: UseAriaMenuParameters) {
    type E = ParentElement;

    const [focusTrapActive, setFocusTrapActive] = useState<null | boolean>(null);

    let onClose = (args as Partial<UseMenuParameters1>).onClose;
    let onOpen = (args as Partial<UseMenuParameters1>).onOpen;
    let menubar = (args as Partial<UseMenuParameters2>).menubar;
    let open = (menubar ? true : (args as UseMenuParameters1).open);
    const stableOnClose = useStableCallback(onClose ?? (() => { }));

    const [menuLastFocusedInner, setMenuLastFocusedInner, getMenuLastFocusedInner] = useState(false);
    const [buttonLastFocusedInner, setButtonLastFocusedInner, getButtonLastFocusedInner] = useState(false);
    // TODO: It's awkward that the button focus props are out here where we don't have its type,
    // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
    // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
    // where nothing is focused. 
    const { useHasFocusProps: useMenuHasFocusProps, } = useHasFocus<E>({ setLastFocusedInner: setMenuLastFocusedInner });
    const { useHasFocusProps: useButtonHasFocusProps } = useHasFocus<Element>({ setLastFocusedInner: setButtonLastFocusedInner });

    const { managedChildren, useListNavigationChild, tabbableIndex, focusCurrent: focusMenu } = useListNavigation<ChildElement>({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, shouldFocusOnChange: useCallback(() => getMenuLastFocusedInner() || getButtonLastFocusedInner(), []) });
    const { useRandomIdProps: useMenuIdProps, useReferencedIdProps: useMenuIdReferencingProps } = useRandomId({ prefix: "aria-menu-" });

    const [openerElement, setOpenerElement, getOpenerElement] = useState<(Element & HTMLOrSVGElement) | null>(null);

    const { useSoftDismissProps } = useSoftDismiss<E>({ onClose: stableOnClose });

    useEffect(() => {
        setFocusTrapActive(open);
    }, [open]);

    const focusMenuStable = useStableCallback(focusMenu ?? (() => { }));
    useEffect(() => {
        if (focusTrapActive) {
            focusMenuStable?.();
        }
        else if (focusTrapActive === false) {
            if (getMenuLastFocusedInner())
                getOpenerElement()?.focus();
        }
        else {
            // null, so we've only just mounted and shouldn't focus ourselves.
        }
    }, [focusTrapActive]);

    // Focus management is really finicky, and there's always going to be 
    // an edge case where nothing's focused for two consecutive frames 
    // on iOS or whatever, which would immediately close the menu 
    // any time it's been opened. So any time it *looks* like we should close,
    // try waiting 100ms. If it's still true then, then yeah, we should close.
    let shouldClose = (focusTrapActive && !menuLastFocusedInner && !buttonLastFocusedInner);
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

        const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => focusMenu?.());
        const onClick = () => stableOnClose();

        return {
            useMenuSentinelProps: function <P extends h.JSX.HTMLAttributes<E>>(p: P) {
                return useMergedProps<E>()({ onFocus, onClick }, p);
            }
        }
    }, [focusMenu, open]);

    const useMenuButton = useCallback(<E extends Element>({ }: UseMenuButtonParameters) => {
        const { element, getElement, useRefElementProps } = useRefElement<E>();
        useLayoutEffect(() => { setOpenerElement(element as Element as (Element & HTMLOrSVGElement)); }, [element]);

        return {
            useMenuButtonProps: function <P extends h.JSX.HTMLAttributes<E>>(p: P) {
                let props = useRefElementProps(useMergedProps<E>()({}, useMenuIdReferencingProps("aria-controls")(useButtonHasFocusProps(p as any) as any)));
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
        const onClick = args.onClick;

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitem";
            return useMergedProps<E>()({ onClick }, useListNavigationChildProps(props));
        }

        return { useMenuItemProps };
    }, []);

    const useMenuItemCheckbox = useCallback(<E extends Element>(args: UseMenuItemCheckboxParameters<E>) => {

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
