import { h } from "preact";
import { useHasFocus, useListNavigation, ListNavigationChildInfoBase, UseListNavigationParameters, useMergedProps, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseListNavigationChild, UseListNavigationChildInfoNeeded } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useEffect } from "preact/hooks";
import { usePressEventHandlers } from "use-button";
import { ElementToTag, EventDetail } from "./props";
import { useSoftDismiss } from "./use-modal";

export interface UseMenuBaseParameters {
    open: boolean | "menubar";
    onClose(): void;
    onOpen(): void;
    sendFocusWithinMenu(): void;
}

export interface UseAriaMenuParameters<E extends Element, MenuButtonElement extends Element, K extends string, I extends UseMenuItemDefaultInfo<E>> extends Omit<UseMenuBaseParameters, "sendFocusWithinMenu">, UseListNavigationParameters<K, I> {
    tagButton: ElementToTag<MenuButtonElement>;
}


export type UseMenuSubmenuItemParameters<E extends Element, MenuButtonElement extends Element, K extends string, I extends UseMenuItemDefaultInfo<E>> = UseAriaMenuParameters<E, MenuButtonElement, K, I> & {}

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseMenuButtonParameters { }

export interface UseMenuItemCheckboxInfo<E extends EventTarget> extends ListNavigationChildInfoBase<string> {
    type: "checkbox";
    checked: boolean | "mixed";
    onChange(e: { [EventDetail]: { checked: boolean } } & h.JSX.TargetedEvent<E, Event>): void;
}

export interface UseMenuItemRadioInfo<E extends EventTarget> extends ListNavigationChildInfoBase<string> {
    type: "radio";
    checked: boolean;
    onChange(e: { [EventDetail]: { checked: boolean } } & h.JSX.TargetedEvent<E, Event>): void;
}

export interface UseMenuItemDefaultInfo<E extends EventTarget> extends ListNavigationChildInfoBase<string> {
    type?: "default";
    onClick?(e: h.JSX.TargetedEvent<E>): void;
}

//export type UseMenuItemCheckboxParameters<I extends UseMenuChildInfo> = UseListNavigationChildParameters<I>;
//export type UseMenuItemRadioParameters<I extends UseMenuChildInfo> = UseListNavigationChildParameters<I>;
export type UseMenuItemDefaultParameters<K extends string, I extends UseMenuChildInfoBase<K>> = { info: Omit<UseListNavigationChildInfoNeeded<K, I>, "flags"> };


export type UseMenuItem<MenuItemElement extends Element, K extends string, I extends UseMenuChildInfoBase<K>> = (args: UseMenuItemDefaultParameters<K, I>) => Omit<ReturnType<UseListNavigationChild<MenuItemElement, K, I>>, "useListNavigationChildProps"> & {
    useMenuItemProps: ({ ...props }: h.JSX.HTMLAttributes<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement>;
    getElement(): MenuItemElement | null;
    tabbable: boolean;
}

export interface UseMenuChildInfoBase<K extends string> extends ListNavigationChildInfoBase<K> {

}
//export type UseMenuChildParameters<I extends UseMenuChildInfo> = I;

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
export function useMenuBase<MenuParentElement extends Element, MenuButtonElement extends Element, K extends string, I extends UseMenuItemDefaultInfo<MenuParentElement>>({ sendFocusWithinMenu, ...args }: UseMenuBaseParameters) {

    const getSendFocusWithinMenu = useStableGetter(sendFocusWithinMenu);
    const [focusTrapActive, setFocusTrapActive] = useState<null | boolean>(null);

    const onClose = (args as Partial<UseAriaMenuParameters<MenuParentElement, MenuButtonElement, K, I>>).onClose;
    const onOpen = (args as Partial<UseAriaMenuParameters<MenuParentElement, MenuButtonElement, K, I>>).onOpen;
    //const menubar = (args as Partial<UseMenuParameters2<E, K, I>>).menubar;
    const open = (args as UseAriaMenuParameters<MenuParentElement, MenuButtonElement, K, I>).open;
    const stableOnClose = useStableCallback(onClose ?? (() => { }));
    const getOpen = useStableGetter(open);

    // TODO: It's awkward that the button focus props are out here where we don't have its type,
    // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
    // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
    // where nothing is focused. 
    const { useHasFocusProps: useMenuBaseHasFocusProps, getLastFocusedInner: getMenuBaseLastFocusedInner } = useHasFocus<MenuParentElement>({ /*onLastFocusedInnerChanged: onMenuOrButtonLostLastFocus*/ });
    const { useHasFocusProps: useButtonHasFocusProps, getLastFocusedInner: getMenuBaseButtonLastFocusedInner } = useHasFocus<MenuButtonElement>({ /*onLastFocusedInnerChanged: onMenuOrButtonLostLastFocus*/ });

    const [, setOpenerElement, getOpenerElement] = useState<(Element & HTMLOrSVGElement) | null>(null);

    const { useRandomIdSourceElement, useRandomIdReferencerElement } = useRandomId<MenuParentElement>({ prefix: "aria-menu-" });
    const { useRandomIdSourceElementProps } = useRandomIdSourceElement();
    const { useRandomIdReferencerElementProps } = useRandomIdReferencerElement<MenuButtonElement>("aria-controls" as never);

    const { getElement: getButtonElement, useRefElementProps: useButtonRefElementProps } = useRefElement<any>({ onElementChange: setOpenerElement });

    const { getElement: getMenuElement, useRefElementProps: useMenuBaseRefElementProps } = useRefElement<any>({});
    const { useSoftDismissProps } = useSoftDismiss<any>({ onClose: stableOnClose, getElements: () => ([getButtonElement(), getMenuElement()]), open: !!open });

    useEffect(() => {
        setFocusTrapActive(open === true);
    }, [open]);



    const useMenuBaseProps = useCallback((props: h.JSX.HTMLAttributes<MenuParentElement>): h.JSX.HTMLAttributes<MenuParentElement> => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key == "Escape" && getOpen()) {
                stableOnClose();
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }

        return useSoftDismissProps(useMenuBaseHasFocusProps(useMenuBaseRefElementProps(useRandomIdSourceElementProps(useMergedProps<MenuParentElement>({ onKeyDown }, (props))))));
    }, [useSoftDismissProps, useMenuBaseHasFocusProps, useMenuBaseRefElementProps, useRandomIdSourceElementProps]);

    const useMenuBaseButtonProps = useCallback((props: h.JSX.HTMLAttributes<MenuButtonElement>): h.JSX.HTMLAttributes<any> => {
        return useButtonRefElementProps(useButtonHasFocusProps(useRandomIdReferencerElementProps(props)));
    }, [useButtonHasFocusProps, useButtonRefElementProps, useRandomIdReferencerElementProps]);


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
        useMenuSentinel: useCallback(<E extends Element>() => {
            const { useSentinelProps: useMenuSentinelProps, ...rest } = useFocusSentinel<E>({ open: open === true, onClose: (onClose ?? (() => { })), sendFocusWithinMenu });
            return { useMenuSentinelProps, ...rest };
        }, [open, onClose, sendFocusWithinMenu]),
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


// A focus sentinal is a hidden but focusable element that comes at the start or end 
// of the out-of-place-focusable component that, when activated or focused over, closes the component
// (if focused within 100ms of the open prop changing, instead of
// closing, focusing the sentinel immediately asks it to focus itself).
// This exists for things like menus which can have focus but also need a way to return
// to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
// to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
// and keyboard users can escape to close a menu, screen readers and other input methods 
// that don't use those two would become stuck.
export function useFocusSentinel<E extends Element>({ open, onClose, sendFocusWithinMenu }: { open: boolean, onClose: () => void; sendFocusWithinMenu: () => void; }) {
    const getSendFocusWithinMenu = useStableGetter(sendFocusWithinMenu);
    const stableOnClose = useStableCallback(onClose);

    const [firstSentinelIsActive, setFirstSentinelIsActive] = useState(false);
    useTimeout({ callback: () => { setFirstSentinelIsActive(open); }, timeout: 100, triggerIndex: `${open}-${firstSentinelIsActive}` });


    const onFocus = firstSentinelIsActive ? (() => stableOnClose()) : (() => getSendFocusWithinMenu()?.());
    const onClick = () => stableOnClose();

    return {
        useSentinelProps: function (p: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {
            return useMergedProps<E>({ onFocus, onClick }, p);
        }
    }
}

export function useAriaMenu<MenuParentElement extends HTMLElement | SVGElement, MenuItemElement extends HTMLElement | SVGElement, MenuButtonElement extends HTMLElement | SVGElement, K extends string = string, I extends UseMenuChildInfoBase<K> = UseMenuChildInfoBase<K>>({ collator, noTypeahead, typeaheadTimeout, disableArrowKeys, disableHomeEndKeys, indexDemangler, indexMangler, initialIndex, navigationDirection, onChildrenMountChange, onTabbableIndexChange, ...args }: UseAriaMenuParameters<MenuParentElement, MenuButtonElement, K, I>) {



    const {
        children: managedChildren,
        useListNavigationChild,
        useListNavigationProps,
        currentTypeahead,
        invalidTypeahead,
        focusSelf: focusMenu
    } = useListNavigation<MenuParentElement, MenuItemElement, string, I>({
        collator,
        noTypeahead,
        typeaheadTimeout,
        disableArrowKeys,
        disableHomeEndKeys,
        indexDemangler,
        indexMangler,
        initialIndex,
        navigationDirection,
        onChildrenMountChange,
        onTabbableIndexChange
    });


    const {
        useMenuSentinel,
        useMenuBaseButtonProps,
        useMenuBaseProps,
        open,
        onOpen,
        onClose: _onClose,
        ...menuRest
    } = useMenuBase<MenuParentElement, MenuButtonElement, K, I>({
        ...args,
        sendFocusWithinMenu: focusMenu ?? (() => { })
    });

    const useMenuButtonProps = ((p: h.JSX.HTMLAttributes<MenuButtonElement>) => {
        const pressProps = usePressEventHandlers<MenuButtonElement>(() => onOpen?.(), {});
        const props = useMenuBaseButtonProps(p);
        props["aria-haspopup"] = "menu";
        props["aria-expanded"] = open ? "true" : undefined;
        return useMergedProps<MenuButtonElement>(pressProps, props);
    });

    const useMenuItem: UseMenuItem<MenuItemElement, K, I> = useCallback(({ info: { ...info } }: UseMenuItemDefaultParameters<K, I>) => {
        type E = MenuItemElement;

        const { useListNavigationChildProps, getElement, tabbable } = useListNavigationChild({ info: { ...info } as I });

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitem";
            return useMergedProps<E>({}, useListNavigationChildProps(props));
        }

        return { useMenuItemProps, getElement, tabbable };
    }, []);


    function useMenuProps<P extends h.JSX.HTMLAttributes<MenuParentElement>>({ ...props }: P) {
        props.role = "menu";
        return useMenuBaseProps(useListNavigationProps(props));
    }


    return {
        useMenuProps,
        useMenuButtonProps,

        useMenuItem,
        useMenuSentinel,
        //useMenuSubmenuItem,

        focusMenu,

        currentTypeahead,
        invalidTypeahead,

        managedChildren,

        ...menuRest

    }
}
