import { createContext, createElement, h, VNode } from "preact";
import { useContext } from "preact/hooks";
import { useAriaMenu, UseAriaMenuParameters, UseMenuChildInfo, UseMenuItem, UseMenuItemDefaultInfo, UseMenuItemDefaultParameters } from "../use-menu";

export type MenuProps<E extends Element, K extends string, I extends UseMenuItemDefaultInfo<E>> = Omit<UseAriaMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    propsMenuButton: () => h.JSX.HTMLAttributes<any>;
    propsMenuSentinel: (which: "top" | "bottom") => h.JSX.HTMLAttributes<any>;
    propsMenu: () => h.JSX.HTMLAttributes<any>;

    tagMenuButton: any;
    tagMenu: any;
    tagSentinel: any;


    render?(menuButton: VNode, menu: VNode, firstSentinel: VNode, lastSentinel: VNode): VNode;
}

export type MenuItemProps = Omit<UseMenuItemDefaultParameters<UseMenuChildInfo>, "info"> & Pick<UseMenuItemDefaultParameters<UseMenuChildInfo>["info"], "index" | "text" | "hidden"> & {
    render?(listItem: VNode): VNode;
    tagMenuItem: any;
    propsMenuItem: () => h.JSX.HTMLAttributes<any>
}

const MenuItemContext = createContext<UseMenuItem<any, UseMenuChildInfo>>(null!);

export function Menu<ParentElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement>({
    initialIndex,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigationDirection,
    noTypeahead,
    typeaheadTimeout,
    open,
    onClose,
    onOpen,

    propsMenuButton,
    propsMenuSentinel,
    propsMenu,

    tagMenuButton,
    tagMenu,
    tagSentinel,
    render

}: MenuProps<ChildElement, string, UseMenuChildInfo>) {
    const {
        currentTypeahead,
        focusMenu,
        invalidTypeahead,
        managedChildren,
        useMenuButtonProps,
        useMenuItem,
        useMenuProps,
        useMenuSentinel
    } = useAriaMenu<ParentElement, ChildElement, string, UseMenuChildInfo>({
        initialIndex,
        onClose,
        onOpen,
        open,
        collator,
        disableArrowKeys,
        disableHomeEndKeys,
        navigationDirection,
        noTypeahead,
        typeaheadTimeout
    });

    const menuButton = createElement(tagMenuButton, useMenuButtonProps(propsMenuButton()));
    const menu = createElement(tagMenu, useMenuProps(propsMenu()));
    const { useMenuSentinelProps: useFirstSentinelProps } = useMenuSentinel();
    const { useMenuSentinelProps: useLastSentinelProps } = useMenuSentinel();
    const firstSentinel = createElement(tagSentinel, useFirstSentinelProps(propsMenuSentinel("top")));
    const lastSentinel = createElement(tagSentinel, useLastSentinelProps(propsMenuSentinel("bottom")));
    return (
        <MenuItemContext.Provider value={useMenuItem}>
            {(render ?? defaultMenuRender)(menuButton, menu, firstSentinel, lastSentinel)}
        </MenuItemContext.Provider>
    )

}

export function MenuItem({ tagMenuItem, propsMenuItem, render, index, text, hidden }: MenuItemProps) {
    const { useMenuItemProps } = useContext(MenuItemContext)({
        info: { index, text, hidden, flags: {} }
    });
    const menuItem = createElement(tagMenuItem, useMenuItemProps(propsMenuItem()));
    return (render ?? defaultMenuItemRender)(menuItem);
}

function defaultMenuRender(menuButton: VNode, menu: VNode, firstSentinel: VNode, lastSentinel: VNode) {
    menu.props.children = <>{firstSentinel}{menu.props.children}{lastSentinel}</>
    return (
        <>{menuButton}{menu}</>
    )
}

function defaultMenuItemRender(menuItem:VNode) {
    return (menuItem);
}