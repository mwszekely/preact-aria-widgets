import { createContext, createElement, h, VNode } from "preact";
import { UseActiveElementParameters, useStableCallback } from "preact-prop-helpers";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useMenu, UseMenuItemParameters, UseMenuItemReturnTypeInfo, UseMenuParameters, UseMenuReturnTypeInfo, UseMenuItem } from "../use-menu";
import { defaultRenderPortal } from "./dialog";

type Get<T, K extends keyof T> = T[K];

export interface MenuProps<SurfaceElement extends Element, MenuElement extends Element, SentinelElement extends Element, MenuItemElement extends Element, ButtonElement extends Element> extends //Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "menu">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "menuSurface">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "softDismiss">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "linearNavigation">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "listNavigation">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "rovingTabIndex">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "typeaheadNavigation">,

    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "managedChildren"> {
    //propsMenuButton: () => h.JSX.HTMLAttributes<any>;
    //propsMenuSentinel: (which: "top" | "bottom") => h.JSX.HTMLAttributes<any>;
    //propsMenu: () => h.JSX.HTMLAttributes<any>;

    //tagMenuButton: any;
    //tagMenu: any;
    //tagSentinel: any;

    getDocument: UseActiveElementParameters["getDocument"];
    getWindow?: UseActiveElementParameters["getWindow"];

    render(menuInfo: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement>, modifyMenuButtonProps: PropModifier<ButtonElement>, modifyMenuSurfaceProps: PropModifier<SurfaceElement>, modifyMenuProps: PropModifier<MenuElement>, modifyFirstSentinelProps: PropModifier<SentinelElement>, modifyLastSentinelProps: PropModifier<SentinelElement>): VNode;
}

export interface MenuItemProps<MenuItemElement extends Element> extends
    Get<UseMenuItemParameters, "managedChild">,
    Get<UseMenuItemParameters, "listNavigation">,
    Get<UseMenuItemParameters, "rovingTabIndex"> {
    render(info: UseMenuItemReturnTypeInfo<MenuItemElement>, modifyListItemProps: PropModifier<MenuItemElement>): VNode;
    //tagMenuItem: any;
    //propsMenuItem: () => h.JSX.HTMLAttributes<any>
}

const MenuItemContext = createContext<UseMenuItem<any>>(null!);

export function Menu<SurfaceElement extends Element, ParentElement extends Element, SentinelElement extends Element, ChildElement extends Element, ButtonElement extends Element>({
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
    indexDemangler,
    indexMangler,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,

    getDocument,
    getWindow,

    render

}: MenuProps<SurfaceElement, ParentElement, SentinelElement, ChildElement, ButtonElement>) {
    const {
        useMenuButtonProps,
        useMenuItem,
        useMenuProps,
        useMenuSentinel,
        useMenuSurfaceProps,
        ...menuReturn
    } = useMenu<SurfaceElement, ParentElement, ChildElement, ButtonElement>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        menu: { onOpen: useStableCallback(onOpen), openDirection },
        menuSurface: {},
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        softDismiss: { onClose: useStableCallback(onClose), open },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        activeElement: { getDocument, getWindow },
    });

    const { useMenuSentinelProps: useFirstSentinelProps } = useMenuSentinel<SentinelElement>();
    const { useMenuSentinelProps: useLastSentinelProps } = useMenuSentinel<SentinelElement>();
    return (
        <MenuItemContext.Provider value={useMenuItem}>
            {render(menuReturn, useMenuButtonProps, useMenuSurfaceProps, useMenuProps, useFirstSentinelProps, useLastSentinelProps)}
        </MenuItemContext.Provider>
    )

}

export function MenuItem<MenuItemElement extends Element>({ render, index, text, hidden, blurSelf, flags, focusSelf }: MenuItemProps<MenuItemElement>) {
    const { useMenuItemProps, ...rest } = useContext(MenuItemContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { blurSelf, focusSelf, hidden }
    });
    return render(rest, useMenuItemProps);
}

export function defaultRenderMenu<SurfaceElement extends Element, MenuElement extends Element, MenuItemElement extends Element, SentinelElement extends Element, ButtonElement extends Element>({ portalId, tagButton, tagMenu, tagSurface, tagSentinel, makePropsButton, makePropsMenu, makePropsSurface, makePropsSentinel }: { portalId: string, tagSurface: ElementToTag<SurfaceElement>, tagMenu: ElementToTag<MenuElement>, tagButton: ElementToTag<ButtonElement>, tagSentinel: ElementToTag<SentinelElement>, makePropsSurface: (info: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement>) => h.JSX.HTMLAttributes<SurfaceElement>, makePropsMenu: (info: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement>) => h.JSX.HTMLAttributes<MenuElement>, makePropsButton: (info: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement>) => h.JSX.HTMLAttributes<ButtonElement>, makePropsSentinel: (info: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement>) => h.JSX.HTMLAttributes<SentinelElement> }) {
    return function (menuInfo: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement>, modifyMenuButtonProps: PropModifier<ButtonElement>, modifyMenuSurfaceProps: PropModifier<SurfaceElement>, modifyMenuProps: PropModifier<MenuElement>, modifyFirstSentinelProps: PropModifier<SentinelElement>, modifyLastSentinelProps: PropModifier<SentinelElement>) {

        const { children: surfaceChildren, ...surfaceProps } = modifyMenuSurfaceProps(makePropsSurface(menuInfo));
        const { children: menuChildren, ...menuProps } = modifyMenuProps(makePropsMenu(menuInfo));
        return (
            <>
                {createElement(tagButton as never, modifyMenuButtonProps(makePropsButton(menuInfo)))}
                {defaultRenderPortal({
                    portalId,
                    children: createElement(tagSurface as never, {
                        ...surfaceProps,
                        children: (<>
                            {createElement(tagSentinel as never, modifyFirstSentinelProps(makePropsSentinel(menuInfo)))}
                            {surfaceChildren}
                            {createElement(tagMenu as never, { ...menuProps, children: <>{menuChildren}</> })}
                            {createElement(tagSentinel as never, modifyLastSentinelProps(makePropsSentinel(menuInfo)))}
                        </>)
                    })
                })}
            </>
        )

    }
}


export function defaultRenderMenuItem<MenuItemElement extends Element>({ makePropsMenuItem: makePropsMenuItem, tagMenuItem }: { tagMenuItem: ElementToTag<MenuItemElement>, makePropsMenuItem: (info: UseMenuItemReturnTypeInfo<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement> }) {
    return function (info: UseMenuItemReturnTypeInfo<MenuItemElement>, modifyMenuItemProps: PropModifier<MenuItemElement>) {
        return createElement(tagMenuItem as never, modifyMenuItemProps(makePropsMenuItem(info)))
    }
}