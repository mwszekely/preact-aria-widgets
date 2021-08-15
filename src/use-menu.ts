import { h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import { useHasFocus } from "preact-prop-helpers/use-has-focus";
import { useStableCallback } from "preact-prop-helpers/use-stable-callback";
import { useAsyncHandler, UseAsyncHandlerReturnType } from "preact-prop-helpers/use-async-handler";
import { useLayoutEffect } from "preact-prop-helpers/use-layout-effect";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildPropsReturnType, UseListNavigationParameters, UseListNavigationPropsReturnType } from "preact-prop-helpers/use-list-navigation";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
import { useRandomId, UseRandomIdPropsReturnType, UseReferencedIdPropsReturnType } from "preact-prop-helpers/use-random-id";
import { useRefElement, UseRefElementPropsReturnType } from "preact-prop-helpers/use-ref-element";
import { TagSensitiveProps } from "./props";
import { useAriaButton, UseAriaButtonPropsReturnType, useButtonLikeEventHandlers } from "./use-button";

interface UseMenuParameters1 extends UseListNavigationParameters {
    open: boolean;
    onClose(): void;
    onOpen(): (void | Promise<void>);
}

interface UseMenuParameters2 extends UseListNavigationParameters {
    menubar: true;
}

export type UseAriaMenuParameters = (UseMenuParameters1 | UseMenuParameters2);
export type UseMenuSubmenuItemParameters = UseAriaMenuParameters & {}
export interface UseMenuButtonParameters<E extends Element> extends TagSensitiveProps<E> {
}

export interface UseMenuItemCheckboxInfo extends UseListNavigationChildInfo {
    type: "checkbox";
    checked: boolean | "mixed";
    onChange(value: boolean): (void | Promise<void>);
}

export interface UseMenuItemRadioInfo extends UseListNavigationChildInfo {
    type: "radio";
    checked: boolean;
    onChange(value: boolean): (void | Promise<void>);
}

export interface UseMenuItemDefaultInfo extends UseListNavigationChildInfo {
    type?: "default";
    onClick?(): (void | Promise<void>);
}

export type UseMenuItemCheckboxParameters = UseListNavigationChildParameters<UseMenuItemCheckboxInfo>;
export type UseMenuItemRadioParameters = UseListNavigationChildParameters<UseMenuItemRadioInfo>;
export type UseMenuItemDefaultParameters = UseListNavigationChildParameters<UseMenuItemDefaultInfo>;
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

export type UseMenuItem = <E extends Element>(args: UseMenuItemDefaultParameters) => {
    useMenuItemProps: <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) => MergedProps<E, {
        onClick: h.JSX.MouseEventHandler<E>;
    }, UseListNavigationChildPropsReturnType<E, P>>
    asyncInfo: Omit<UseAsyncHandlerReturnType<E, "onClick", void>, "getSyncOnClick">;
}

export function useAriaMenu<E extends Element>({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout, ...args }: UseAriaMenuParameters) {

    let onClose = (args as Partial<UseMenuParameters1>).onClose;
    let onOpen = (args as Partial<UseMenuParameters1>).onOpen;
    let menubar = (args as Partial<UseMenuParameters2>).menubar;
    let open = (menubar ? true : (args as UseMenuParameters1).open);
    const stableOnClose = useStableCallback(onClose ?? (() => { }));

    const { managedChildren, useListNavigationChild, useListNavigationProps, tabbableIndex, focusSelf: focusMenu } = useListNavigation<E>({ collator, keyNavigation, noTypeahead, noWrap, typeaheadTimeout });
    const { useRandomIdProps: useMenuIdProps, useReferencedIdProps: useMenuIdReferencingProps } = useRandomId({ prefix: "aria-menu-" });

    const [openerElement, setOpenerElement] = useState<(Element & HTMLOrSVGElement) | null>(null);

    // TODO: It's awkward that the button focus props are out here where we don't have its type,
    // but focus management is super sensitive, and even waiting for a useLayoutEffect to sync state here
    // would be too late, so it would look like there's a moment between menu focus lost and button focus gained
    // where nothing is focused. 
    const { focusedInner: menuHasFocus, useHasFocusProps: useMenuHasFocusProps } = useHasFocus<E>();
    const { focusedInner: buttonHasFocus, useHasFocusProps: useButtonHasFocusProps } = useHasFocus<Element>();
    const [pressedEscape, setPressedEscape] = useState(false);

    useLayoutEffect(() => {
        if (open && managedChildren.length > 0) {
            requestAnimationFrame(() => {
                queueMicrotask(() => {
                    focusMenu();
                });
            })
        }
    }, [open, managedChildren.length > 0]);

    useLayoutEffect(() => {
        if (!open) {
            if (pressedEscape) {
                requestAnimationFrame(() => {
                    queueMicrotask(() => {
                        openerElement?.focus();
                        setPressedEscape(false)
                    });
                })
            }
        }
    }, [open, pressedEscape])

    useEffect(() => {
        if (!menuHasFocus && !buttonHasFocus) {
            console.log("Closing menu")
            stableOnClose();
        }
    }, [buttonHasFocus, menuHasFocus])

    const useMenuButton = useCallback(<E extends Element>({ tag }: UseMenuButtonParameters<E>) => {

        const { useAriaButtonProps } = useAriaButton<E>({ tag, onClick: () => { return open ? onClose?.() : onOpen?.() } });

        const { element, getElement, useRefElementProps } = useRefElement<E>()


        useLayoutEffect(() => { setOpenerElement(element as Element as (Element & HTMLOrSVGElement)); }, [element]);

        return {
            useAriaMenuButtonProps: function <P extends h.JSX.HTMLAttributes<E>>(p: P) {
                let props = useRefElementProps(useAriaButtonProps(useMenuIdReferencingProps("aria-controls")(useButtonHasFocusProps(p as any) as any)));
                props["aria-haspopup"] = "menu";
                props["aria-expanded"] = open ? "true" : undefined;
                return props;
            }
        }
    }, [open, onClose, onOpen, useMenuIdReferencingProps]);

    const useMenuSubmenuItem = useCallback(<E extends Element>(args: UseMenuSubmenuItemParameters) => {
        const { useMenuProps, useMenuButton } = useAriaMenu<HTMLElement>(args);
        const { useAriaMenuButtonProps } = useMenuButton<E>({ tag: "li" as any });

        const { element, getElement, useRefElementProps } = useRefElement<E>();
        useLayoutEffect(() => { setOpenerElement(element as Element as (Element & HTMLOrSVGElement)); }, [element]);

        return {
            element,
            getElement,
            useMenuProps,
            useMenuSubmenuItemProps: function <P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
                props.role = "menuitem";
                return useRefElementProps(useAriaMenuButtonProps(useMenuIdReferencingProps("aria-controls")(props)));
            }
        }
    }, []);

    const useMenuItem: UseMenuItem = useCallback(<E extends Element>(args: UseMenuItemDefaultParameters) => {

        const { useListNavigationChildProps } = useListNavigationChild<E>(args);
        const { getSyncOnClick, ...asyncInfo } = useAsyncHandler<E>()({ capture: _ => void (0), event: "onClick" });
        const onClick = getSyncOnClick(asyncInfo.pending ? null : args.onClick);

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitem";
            return useMergedProps<E>()({ onClick }, useListNavigationChildProps(props));
        }

        return { useMenuItemProps, asyncInfo };
    }, []);

    const useMenuItemCheckbox = useCallback(<E extends Element>(args: UseMenuItemCheckboxParameters) => {

        const { getSyncOnClick, ...asyncInfo } = useAsyncHandler<E>()({ capture: _ => !args.checked, event: "onClick" });
        const onClick = getSyncOnClick(asyncInfo.pending ? null : args.onChange);

        function useMenuItemProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
            props.role = "menuitemcheckbox";
            return useMergedProps<E>()({ onClick }, props);
        }

        return { useMenuItemProps, asyncInfo };
    }, []);


    function useMenuProps<P extends h.JSX.HTMLAttributes<E>>({ ...props }: P) {
        props.role = "menu";

        function onKeyDown(e: KeyboardEvent) {
            if (e.key == "Escape" && onClose) {
                // TODO: If the user presses escape and the menu doesn't close,
                // this state variable isn't reset, and tabbing out of the menu
                // will jump back to the opening button.
                setPressedEscape(true);
                onClose();
            }
        }

        return useMenuIdProps(useListNavigationProps(useMenuHasFocusProps(useMergedProps<E>()({ onKeyDown }, props))));
    }










    return {
        useMenuProps,
        useMenuButton,

        useMenuItem,
        useMenuItemCheckbox,
        useMenuSubmenuItem,

    }


}
