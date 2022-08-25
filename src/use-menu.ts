import { h } from "preact";
import { useHasFocus, useListNavigation, ListNavigationChildInfoBase, UseListNavigationParameters, useMergedProps, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseListNavigationChildInfoNeeded } from "preact-prop-helpers/use-list-navigation";
import { useCallback, useEffect } from "preact/hooks";
import { EventDetail } from "./props";
import { useSoftDismiss } from "./use-modal";

export interface UseMenuBaseParameters {
    open: boolean | "menubar";
    onClose(): void;
    onOpen(): void;
    sendFocusWithinMenu(): void;
}

export interface UseAriaMenuParameters<E extends Element, K extends string, I extends UseMenuItemDefaultInfo<E>> extends Omit<UseMenuBaseParameters, "sendFocusWithinMenu">, UseListNavigationParameters<K, I> {
}

export type UseMenuSubmenuItemParameters<E extends Element, K extends string, I extends UseMenuItemDefaultInfo<E>> = UseAriaMenuParameters<E, K, I> & {}

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
export type UseMenuItemDefaultParameters<I extends UseMenuChildInfo> = { info: UseListNavigationChildInfoNeeded<string, I> };


export type UseMenuItem<E extends Element, I extends UseMenuChildInfo> = (args: UseMenuItemDefaultParameters<I>) => {
    useMenuItemProps: ({ ...props }: h.JSX.HTMLAttributes<E>) => h.JSX.HTMLAttributes<E>;
}

export interface UseMenuChildInfo extends ListNavigationChildInfoBase<string> {

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
export function useMenuBase<ParentElement extends Element, K extends string, I extends UseMenuItemDefaultInfo<ParentElement>>({ sendFocusWithinMenu, ...args }: UseMenuBaseParameters) {
    type E = ParentElement;

    const getSendFocusWithinMenu = useStableGetter(sendFocusWithinMenu);
    const [focusTrapActive, setFocusTrapActive] = useState<null | boolean>(null);

    const onClose = (args as Partial<UseAriaMenuParameters<E, K, I>>).onClose;
    const onOpen = (args as Partial<UseAriaMenuParameters<E, K, I>>).onOpen;
    //const menubar = (args as Partial<UseMenuParameters2<E, K, I>>).menubar;
    const open = (args as UseAriaMenuParameters<E, K, I>).open;
    const stableOnClose = useStableCallback(onClose ?? (() => { }));
    const getOpen = useStableGetter(open);

    // TODO: It's awkward that the button focus props are out here where we don't have its type,
    // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
    // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
    // where nothing is focused. 
    const { useHasFocusProps: useMenuBaseHasFocusProps, getLastFocusedInner: getMenuBaseLastFocusedInner } = useHasFocus<E>({ /*onLastFocusedInnerChanged: onMenuOrButtonLostLastFocus*/ });
    const { useHasFocusProps: useButtonHasFocusProps, getLastFocusedInner: getMenuBaseButtonLastFocusedInner } = useHasFocus<any>({ /*onLastFocusedInnerChanged: onMenuOrButtonLostLastFocus*/ });

    const [, setOpenerElement, getOpenerElement] = useState<(Element & HTMLOrSVGElement) | null>(null);

    const { useRandomIdSourceElement, useRandomIdReferencerElement } = useRandomId<ParentElement>({ prefix: "aria-menu-" });
    const { useRandomIdSourceElementProps } = useRandomIdSourceElement();
    const { useRandomIdReferencerElementProps } = useRandomIdReferencerElement("aria-controls" as never);

    const { getElement: getButtonElement, useRefElementProps: useButtonRefElementProps } = useRefElement<any>({ onElementChange: setOpenerElement });

    const { getElement: getMenuElement, useRefElementProps: useMenuBaseRefElementProps } = useRefElement<any>({});
    const { useSoftDismissProps } = useSoftDismiss<any>({ onClose: stableOnClose, getElements: () => ([getButtonElement(), getMenuElement()]), open: !!open });

    useEffect(() => {
        setFocusTrapActive(open === true);
    }, [open]);



    const useMenuBaseProps = useCallback((props: h.JSX.HTMLAttributes<ParentElement>): h.JSX.HTMLAttributes<ParentElement> => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key == "Escape" && getOpen()) {
                stableOnClose();
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }

        return useSoftDismissProps(useMenuBaseHasFocusProps(useMenuBaseRefElementProps(useRandomIdSourceElementProps(useMergedProps<ParentElement>({ onKeyDown }, (props))))));
    }, [useSoftDismissProps, useMenuBaseHasFocusProps, useMenuBaseRefElementProps, useRandomIdSourceElementProps]);

    const useMenuBaseButtonProps = useCallback((props: h.JSX.HTMLAttributes<any>): h.JSX.HTMLAttributes<any> => {
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

export function useAriaMenu<ParentElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string, I extends UseMenuChildInfo>({ collator, noTypeahead, typeaheadTimeout, disableArrowKeys, disableHomeEndKeys, indexDemangler, indexMangler, initialIndex, navigationDirection, onChildrenMountChange, onTabbableIndexChange, ...args }: UseAriaMenuParameters<ParentElement, K, I>) {



    const {
        children: managedChildren,
        useListNavigationChild,
        useListNavigationProps,
        currentTypeahead,
        invalidTypeahead,
        focusSelf: focusMenu
    } = useListNavigation<ParentElement, ChildElement, string, I>({
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
        getMenuBaseButtonLastFocusedInner,
        getMenuBaseLastFocusedInner,
        open,
        onOpen,
        onClose
    } = useMenuBase<ParentElement, K, I>({
        ...args,
        sendFocusWithinMenu: focusMenu ?? (() => { })
    });

    const useMenuButtonProps = (<E extends Element>(p: h.JSX.HTMLAttributes<E>) => {
        const props = useMenuBaseButtonProps(p);
        props["aria-haspopup"] = "menu";
        props["aria-expanded"] = open ? "true" : undefined;
        return props;
    });

    const useMenuItem: UseMenuItem<ChildElement, I> = useCallback((args: UseMenuItemDefaultParameters<I>) => {
        type E = ChildElement;

        const { useListNavigationChildProps } = useListNavigationChild(args);

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitem";
            return useMergedProps<E>({}, useListNavigationChildProps(props));
        }

        return { useMenuItemProps };
    }, []);


    function useMenuProps<P extends h.JSX.HTMLAttributes<ParentElement>>({ ...props }: P) {
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

        managedChildren

    }
}
