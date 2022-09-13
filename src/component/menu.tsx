import { createContext, h, VNode } from "preact";
import { useContext } from "preact/hooks";
import { useAriaMenu, UseAriaMenuItemParameters, UseAriaMenuItemReturnTypeInfo, UseAriaMenuParameters, UseAriaMenuReturnTypeInfo, UseMenuItem } from "../use-menu";

type Get<T, K extends keyof T> = T[K];

export interface MenuProps<MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends //Omit<UseAriaMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    Get<UseAriaMenuParameters<never>, "menu">,
    Get<UseAriaMenuParameters<never>, "menuSurface">,
    Get<UseAriaMenuParameters<never>, "softDismiss">,
    Get<UseAriaMenuParameters<never>, "linearNavigation">,
    Get<UseAriaMenuParameters<never>, "listNavigation">,
    Get<UseAriaMenuParameters<never>, "rovingTabIndex">,
    Get<UseAriaMenuParameters<never>, "typeaheadNavigation">,
    Get<UseAriaMenuParameters<never>, "managedChildren">

{
    //propsMenuButton: () => h.JSX.HTMLAttributes<any>;
    //propsMenuSentinel: (which: "top" | "bottom") => h.JSX.HTMLAttributes<any>;
    //propsMenu: () => h.JSX.HTMLAttributes<any>;

    //tagMenuButton: any;
    //tagMenu: any;
    //tagSentinel: any;


    render?(menuInfo: UseAriaMenuReturnTypeInfo<MenuParentElement, MenuItemElement, MenuButtonElement>, menuButtonProps: h.JSX.HTMLAttributes<MenuButtonElement>, menu: h.JSX.HTMLAttributes<MenuParentElement>, firstSentinel: h.JSX.HTMLAttributes<any>, lastSentinel: h.JSX.HTMLAttributes<any>): VNode;
}

export interface MenuItemProps<MenuItemElement extends Element> extends 
Get<UseAriaMenuItemParameters, "managedChild">,
Get<UseAriaMenuItemParameters, "listNavigation">,
Get<UseAriaMenuItemParameters, "rovingTabIndex"> {
    render?(info: UseAriaMenuItemReturnTypeInfo<MenuItemElement>, listItem: h.JSX.HTMLAttributes<any>): VNode;
    //tagMenuItem: any;
    //propsMenuItem: () => h.JSX.HTMLAttributes<any>
}

const MenuItemContext = createContext<UseMenuItem<any>>(null!);

export function Menu<ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element>({
    initialIndex,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigationDirection,
    noTypeahead,
    typeaheadTimeout,
    onOpen,
    onClose,
    open,

    openDirection,
    sendFocusToMenu,
    indexDemangler,
    indexMangler,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    onTabbedInTo,
    onTabbedOutOf,

    render

}: MenuProps<ParentElement, ChildElement, ButtonElement>) {
    const {
        useMenuButtonProps,
        useMenuItem,
        useMenuProps,
        useMenuSentinel,
        ...menuReturn
    } = useAriaMenu<ParentElement, ChildElement, ButtonElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        menu: { onOpen, openDirection },
        menuSurface: { sendFocusToMenu, },
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf },
        softDismiss: { onClose, open },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
    });

    const menuButtonProps = useMenuButtonProps({});
    const menuProps = useMenuProps({});
    const { useMenuSentinelProps: useFirstSentinelProps } = useMenuSentinel();
    const { useMenuSentinelProps: useLastSentinelProps } = useMenuSentinel();
    const firstSentinelProps = useFirstSentinelProps({});
    const lastSentinelProps = useLastSentinelProps({});
    return (
        <MenuItemContext.Provider value={useMenuItem}>
            {(render ?? defaultMenuRender)(menuReturn, menuButtonProps, menuProps, firstSentinelProps, lastSentinelProps)}
        </MenuItemContext.Provider>
    )

}

export function MenuItem<MenuItemElement extends Element>({ render, index, text, hidden, blurSelf, flags, focusSelf }: MenuItemProps<MenuItemElement>) {
    const { useMenuItemProps, ...rest } = useContext(MenuItemContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { blurSelf, focusSelf, hidden }
    });
    return (render ?? defaultMenuItemRender)(rest, useMenuItemProps({}));
}

function defaultMenuRender(menuInfo: UseAriaMenuReturnTypeInfo<any, any, any>, menuButtonProps: h.JSX.HTMLAttributes<any>, menuProps: h.JSX.HTMLAttributes<any>, firstSentinelProps: h.JSX.HTMLAttributes<any>, lastSentinelProps: h.JSX.HTMLAttributes<any>) {
    const firstSentinel = <div {...firstSentinelProps} />;
    const lastSentinel = <div {...lastSentinelProps} />;
    const menu = <>{firstSentinel}{menuProps.children}{lastSentinel}</>;
    const menuButton = <div {...menuButtonProps} />
    //menu.props.children = <>{firstSentinel}{menu.props.children}{lastSentinel}</>
    return (
        <>{menuButton}{menu}</>
    )
}

function defaultMenuItemRender<MenuItemElement extends Element>(info: UseAriaMenuItemReturnTypeInfo<MenuItemElement>, menuItemProps: h.JSX.HTMLAttributes<any>) {
    return (<div {...menuItemProps} />);
}