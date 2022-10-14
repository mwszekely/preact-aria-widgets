import { createContext, createElement, h, VNode } from "preact";
import { UseActiveElementParameters, useStableCallback } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, PropModifier } from "props";
import { useMenu, UseMenuItemParameters, UseMenuItemReturnTypeInfo, UseMenuParameters, UseMenuReturnTypeInfo, UseMenuItem } from "../use-menu";
import { defaultRenderPortal } from "./dialog";

type Get<T, K extends keyof T> = T[K];

export interface MenuProps<SurfaceElement extends Element, MenuElement extends Element, SentinelElement extends Element, MenuItemElement extends Element, ButtonElement extends Element, C, K extends string> extends //Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
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

    render(menuInfo: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, C, K>, modifyMenuButtonProps: PropModifier<ButtonElement>, modifyMenuSurfaceProps: PropModifier<SurfaceElement>, modifyMenuProps: PropModifier<MenuElement>, modifyFirstSentinelProps: PropModifier<SentinelElement>, modifyLastSentinelProps: PropModifier<SentinelElement>): VNode;
}

export interface MenuItemProps<MenuItemElement extends Element, C, K extends string> extends
    Get<UseMenuItemParameters<MenuItemElement, C, K>, "managedChild">,
    Get<UseMenuItemParameters<MenuItemElement, C, K>, "listNavigation">,
    Get<UseMenuItemParameters<MenuItemElement, C, K>, "hasFocus">,
    Get<UseMenuItemParameters<MenuItemElement, C, K>, "menuItem">,
    Get<UseMenuItemParameters<MenuItemElement, C, K>, "rovingTabIndex"> {
    subInfo: C;
    render(info: UseMenuItemReturnTypeInfo<MenuItemElement>, modifyListItemProps: PropModifier<MenuItemElement>): VNode;
    //tagMenuItem: any;
    //propsMenuItem: () => h.JSX.HTMLAttributes<any>
}

const MenuItemContext = createContext<UseMenuItem<any, any, any>>(null!);

export const Menu = memo(function Menu<SurfaceElement extends Element, ParentElement extends Element, SentinelElement extends Element, ChildElement extends Element, ButtonElement extends Element, C = undefined, K extends string = never>({
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

}: MenuProps<SurfaceElement, ParentElement, SentinelElement, ChildElement, ButtonElement, C, K>) {
    const {
        useMenuButtonProps,
        useMenuItem,
        useMenuProps,
        useMenuSentinel,
        useMenuSurfaceProps,
        ...menuReturn
    } = useMenu<SurfaceElement, ParentElement, ChildElement, ButtonElement, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys, navigationDirection },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        menu: { onOpen: useStableCallback(onOpen), openDirection },
        menuSurface: {},
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        softDismiss: { onClose: useStableCallback(onClose), open },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        activeElement: { getDocument, getWindow },
        menuButtonHasFocus: { getDocument, getWindow }
    });

    const { useMenuSentinelProps: useFirstSentinelProps } = useMenuSentinel<SentinelElement>();
    const { useMenuSentinelProps: useLastSentinelProps } = useMenuSentinel<SentinelElement>();
    return (
        <MenuItemContext.Provider value={useMenuItem}>
            {render(menuReturn, useMenuButtonProps, useMenuSurfaceProps, useMenuProps, useFirstSentinelProps, useLastSentinelProps)}
        </MenuItemContext.Provider>
    )

})

export const MenuItem = memo(function MenuItem<MenuItemElement extends Element, C = undefined, K extends string = never>({ render, index, text, hidden, flags, focusSelf, subInfo, disabled, getDocument, onPress, getWindow, noModifyTabIndex, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange }: MenuItemProps<MenuItemElement, C, K>) {
    const { useMenuItemProps, ...rest } = useContext(MenuItemContext)({
        listNavigation: { text },
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        menuItem: { disabled, onPress },
        subInfo
    });
    return render(rest, useMenuItemProps);
})

export function defaultRenderMenu<SurfaceElement extends Element, MenuElement extends Element, MenuItemElement extends Element, SentinelElement extends Element, ButtonElement extends Element, C = undefined, K extends string = never>({ portalId, tagButton, tagMenu, tagSurface, tagSentinel, makePropsButton, makePropsMenu, makePropsSurface, makePropsSentinel }: { portalId: string, tagSurface: ElementToTag<SurfaceElement>, tagMenu: ElementToTag<MenuElement>, tagButton: ElementToTag<ButtonElement>, tagSentinel: ElementToTag<SentinelElement>, makePropsSurface: (info: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, C, K>) => h.JSX.HTMLAttributes<SurfaceElement>, makePropsMenu: (info: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, C, K>) => h.JSX.HTMLAttributes<MenuElement>, makePropsButton: (info: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, C, K>) => h.JSX.HTMLAttributes<ButtonElement>, makePropsSentinel: (info: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, C, K>) => h.JSX.HTMLAttributes<SentinelElement> }) {
    return function (menuInfo: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, C, K>, modifyMenuButtonProps: PropModifier<ButtonElement>, modifyMenuSurfaceProps: PropModifier<SurfaceElement>, modifyMenuProps: PropModifier<MenuElement>, modifyFirstSentinelProps: PropModifier<SentinelElement>, modifyLastSentinelProps: PropModifier<SentinelElement>) {

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