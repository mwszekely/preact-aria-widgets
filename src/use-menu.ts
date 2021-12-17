import { h } from "preact";
import { MergedProps, useActiveElement, useHasFocus, useLayoutEffect, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildPropsReturnType, UseListNavigationParameters, useMergedProps, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import type { OnPassiveStateChange } from "preact-prop-helpers/use-passive-state";
import { useCallback, useEffect } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { useSoftDismiss } from "./use-modal";

interface UseMenuBaseParameters1 {
    open: boolean;
    onClose(): void;
    onOpen(): void;
}

interface UseMenuBaseParameters2 {
    menubar: true;
}

interface UseMenuParameters1 extends UseMenuBaseParameters1, UseListNavigationParameters {
}

interface UseMenuParameters2 extends UseMenuBaseParameters2, UseListNavigationParameters {
}

export type UseMenuBaseParameters = (UseMenuBaseParameters1 | UseMenuBaseParameters2) & { sendFocusWithinMenu(): void; };
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

export type UseMenuItemCheckboxParameters<I extends UseMenuChildInfo> = UseListNavigationChildParameters<I>;
export type UseMenuItemRadioParameters<I extends UseMenuChildInfo> = UseListNavigationChildParameters<I>;
export type UseMenuItemDefaultParameters<I extends UseMenuChildInfo> = UseListNavigationChildParameters<I>;


export type UseMenuItem<E extends Element, I extends UseMenuChildInfo> = (args: UseMenuItemDefaultParameters<I>) => {
    useMenuItemProps: <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => MergedProps<E, {
        onClick: h.JSX.MouseEventHandler<E>;
    }, UseListNavigationChildPropsReturnType<E, P>>
}

export interface UseMenuChildInfo extends UseListNavigationChildInfo {

}
export type UseMenuChildParameters<I extends UseMenuChildInfo> = UseListNavigationChildParameters<I>;

/**
 * A menu is a popup control that contains a list of menu items, and that's it.
 * It has very well-defined logic for managing those items as the menu's state changes.
 * 
 * A MenuBase is just the "popup" part without the "list of menu items" part. It can
 * (really, must) have interactive controls, but these controls are allowed to be more
 * free-form. This means that, like a dialog, you must tell this hook
 * where within the popup to send focus when opened (for a menu it's just the first
 * menu item, but with custom content you'll need to provide this).
 * 
 */
export function useMenuBase<ParentElement extends Element>({ sendFocusWithinMenu, ...args }: UseMenuBaseParameters) {
    type E = ParentElement;

    const getSendFocusWithinMenu = useStableGetter(sendFocusWithinMenu);
    const [focusTrapActive, setFocusTrapActive] = useState<null | boolean>(null);

    let onClose = (args as Partial<UseMenuParameters1>).onClose;
    let onOpen = (args as Partial<UseMenuParameters1>).onOpen;
    let menubar = (args as Partial<UseMenuParameters2>).menubar;
    let open = (menubar ? true : (args as UseMenuParameters1).open);
    const stableOnClose = useStableCallback(onClose ?? (() => { }));
    const getOpen = useStableGetter(open);

    // TODO: It's awkward that the button focus props are out here where we don't have its type,
    // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
    // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
    // where nothing is focused. 
    const { useHasFocusProps: useMenuBaseHasFocusProps, getLastFocusedInner: getMenuBaseLastFocusedInner } = useHasFocus<E>({ /*onLastFocusedInnerChanged: onMenuOrButtonLostLastFocus*/ });
    const { useHasFocusProps: useButtonHasFocusProps, getLastFocusedInner: getMenuBaseButtonLastFocusedInner } = useHasFocus<any>({ /*onLastFocusedInnerChanged: onMenuOrButtonLostLastFocus*/ });

    const [openerElement, setOpenerElement, getOpenerElement] = useState<(Element & HTMLOrSVGElement) | null>(null);

    const { useRandomIdProps: useMenuBaseIdProps, useReferencedIdProps: useMenuBaseIdReferencingProps } = useRandomId({ prefix: "aria-menu-" });

    const { getElement: getButtonElement, useRefElementProps: useButtonRefElementProps } = useRefElement<any>({ onElementChange: setOpenerElement });
    const { getElement: getMenuElement, useRefElementProps: useMenuBaseRefElementProps } = useRefElement<any>({});
    useSoftDismiss({ onClose: stableOnClose, getElements: () => ([getButtonElement(), getMenuElement()]) });

    useEffect(() => {
        setFocusTrapActive(open);
    }, [open]);


    // A menu sentinal is a hidden but focusable element that comes at the start or end of the element
    // that, when activated or focused over, closes the menu.
    // (if focused within 100ms of the open prop changing, instead of
    // closing the menu, focusing the sentinel immediately asks the menu to focus itself).
    // This exists because while mouse users can click out of a menu
    // and keyboard users can escape to close the menu,
    // screen readers and other input methods that don't use those two become stuck.
    const useMenuSentinel = useCallback(<E extends Element>() => {
        const [firstSentinelIsActive, setFirstSentinelIsActive] = useState(false);
        useTimeout({ callback: () => { setFirstSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${firstSentinelIsActive}` });


        const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => getSendFocusWithinMenu()?.());
        const onClick = () => stableOnClose();

        return {
            useMenuSentinelProps: function <P extends h.JSX.HTMLAttributes<E>>(p: P) {
                return useMergedProps<E>()({ onFocus, onClick }, p);
            }
        }
    }, [open]);


    const useMenuBaseProps = useCallback(<P extends h.JSX.HTMLAttributes<ParentElement>>(props: P) => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key == "Escape" && getOpen()) {
                stableOnClose();
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }
        
        return useMenuBaseHasFocusProps(useMenuBaseRefElementProps(useMenuBaseIdProps(useMergedProps<ParentElement>()({ onKeyDown }, (props)))));
    }, [useMenuBaseHasFocusProps, useMenuBaseRefElementProps, useMenuBaseIdProps]);

    const useMenuBaseButtonProps = useCallback(<P extends h.JSX.HTMLAttributes<any>>(props: P) => {
        return useButtonRefElementProps(useButtonHasFocusProps(useMenuBaseIdReferencingProps("aria-controls")(props)));
    }, [useButtonHasFocusProps, useButtonRefElementProps, useMenuBaseIdReferencingProps]);


    useEffect(() => {
        const sendFocusWithinMenu = getSendFocusWithinMenu();

        if (focusTrapActive) {
            sendFocusWithinMenu?.();
        }
        else if (focusTrapActive === false) {
            if (getMenuBaseLastFocusedInner())
                getOpenerElement()?.focus({ preventScroll: true });
        }
        else {
            // null, so we've only just mounted and shouldn't focus ourselves.
        }
    }, [focusTrapActive]);

    return {
        useMenuSentinel,
        focusTrapActive,
        useMenuBaseProps,
        useMenuBaseButtonProps,
        getMenuBaseLastFocusedInner,
        getMenuBaseButtonLastFocusedInner,
        open,
        onOpen,
        onClose
    }
}

export function useAriaMenu<ParentElement extends Element, ChildElement extends Element, I extends UseMenuChildInfo>({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, ...args }: UseAriaMenuParameters) {



    const {
        managedChildren,
        useListNavigationChild,
        useListNavigationProps,
        tabbableIndex,
        focusCurrent: focusMenu,
        currentTypeahead,
        invalidTypeahead
    } = useListNavigation<ChildElement, I>({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, shouldFocusOnChange: useCallback((): boolean => getMenuBaseLastFocusedInner() || getMenuBaseButtonLastFocusedInner(), []) });


    const {
        useMenuSentinel,
        focusTrapActive,
        useMenuBaseButtonProps,
        useMenuBaseProps,
        getMenuBaseButtonLastFocusedInner,
        getMenuBaseLastFocusedInner,
        open,
        onOpen,
        onClose
    } = useMenuBase<ParentElement>({ ...args, sendFocusWithinMenu: focusMenu ?? (() => { }) });

    const useMenuButton = useCallback(<E extends Element>({ }: UseMenuButtonParameters) => {

        return {
            useMenuButtonProps: function <P extends h.JSX.HTMLAttributes<E>>(p: P) {
                let props = useMenuBaseButtonProps(p);
                props["aria-haspopup"] = "menu";
                props["aria-expanded"] = open ? "true" : undefined;
                return props;
            }
        }
    }, [open, onClose, onOpen, useMenuBaseButtonProps]);

    /*const useMenuSubmenuItem = useCallback((args: UseMenuSubmenuItemParameters) => {
        const { useMenuProps, useMenuButton } = useAriaMenu<HTMLElement, ChildElement, I>(args);
        const { useMenuButtonProps } = useMenuButton<E>({ tag: "li" as any });

        const { getElement, useRefElementProps } = useRefElement<any>({ onElementChange: setOpenerElement as OnPassiveStateChange<any> });

        return {
            getElement,
            useMenuProps,
            useMenuSubmenuItemProps: function <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
                props.role = "menuitem";
                return useRefElementProps(useMenuButtonProps(useMenuIdReferencingProps("aria-controls")(props)));
            }
        }
    }, []);*/

    const useMenuItem: UseMenuItem<ChildElement, I> = useCallback((args: UseMenuItemDefaultParameters<I>) => {
        type E = ChildElement;

        const { useListNavigationChildProps } = useListNavigationChild(args);

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitem";
            return useMergedProps<E>()({}, useListNavigationChildProps(props));
        }

        return { useMenuItemProps };
    }, []);


    function useMenuProps<P extends h.JSX.HTMLAttributes<ParentElement>>({ ...props }: P) {
        props.role = "menu";
        return useMenuBaseProps(useListNavigationProps(props));
    }


    return {
        useMenuProps,
        useMenuButton,

        useMenuItem,
        useMenuSentinel,
        //useMenuSubmenuItem,

        focusMenu,

        currentTypeahead,
        invalidTypeahead

    }
}
