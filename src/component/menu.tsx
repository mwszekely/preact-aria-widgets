import { createElement, h, Ref, VNode } from "preact";
import { UseActiveElementParameters, useStableCallback } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/compat";
import { ElementToTag, PropModifier } from "../props";
import { useMenu, UseMenuParameters, UseMenuReturnTypeInfo } from "../use-menu";
import { defaultRenderPortal } from "./dialog";
import { MenuItemContext } from "./menubar";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface MenuProps<SurfaceElement extends Element, MenuElement extends Element, SentinelElement extends Element, MenuItemElement extends Element, ButtonElement extends Element, C, K extends string> extends //Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "menu">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "menuSurface">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "softDismiss">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "linearNavigation">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "listNavigation">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "rovingTabIndex">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "typeaheadNavigation">,
    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "toolbar">,

    Get<UseMenuParameters<SurfaceElement, ButtonElement, never>, "managedChildren"> {

    getDocument: UseActiveElementParameters["getDocument"];
    getWindow?: UseActiveElementParameters["getWindow"];
    ref?: Ref<UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, C, K>>;

    render(menuInfo: UseMenuReturnTypeInfo<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, C, K>, modifyMenuButtonProps: PropModifier<ButtonElement>, modifyMenuSurfaceProps: PropModifier<SurfaceElement>, modifyMenuProps: PropModifier<MenuElement>, modifyFirstSentinelProps: PropModifier<SentinelElement>, modifyLastSentinelProps: PropModifier<SentinelElement>): VNode;
}

//const MenuItemContext = createContext<UseMenuItem<any, any, any>>(null!);

export const Menu = memoForwardRef(function Menu<SurfaceElement extends Element, ParentElement extends Element, SentinelElement extends Element, ChildElement extends Element, ButtonElement extends Element, C = undefined, K extends string = never>({
    initialIndex,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    noTypeahead,
    typeaheadTimeout,
    orientation,
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

}: MenuProps<SurfaceElement, ParentElement, SentinelElement, ChildElement, ButtonElement, C, K>, ref?: Ref<any>) {
    const {
        useMenuButtonProps,
        useMenuItem,
        useMenuProps,
        useMenuSentinel,
        useMenuSurfaceProps,
        ...menuReturn
    } = useMenu<SurfaceElement, ParentElement, ChildElement, ButtonElement, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        menu: { onOpen: useStableCallback(onOpen), openDirection },
        menuSurface: {},
        rovingTabIndex: { initialIndex, onTabbableIndexChange, onTabbableRender },
        softDismiss: { onClose: useStableCallback(onClose), open },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout },
        activeElement: { getDocument, getWindow },
        menuButtonHasFocus: { getDocument, getWindow },
        toolbar: { orientation }
    });

    useImperativeHandle(ref!, () => menuReturn);

    const { useMenuSentinelProps: useFirstSentinelProps } = useMenuSentinel<SentinelElement>();
    const { useMenuSentinelProps: useLastSentinelProps } = useMenuSentinel<SentinelElement>();
    return (
        <MenuItemContext.Provider value={useMenuItem}>
            {render(menuReturn, useMenuButtonProps, useMenuSurfaceProps, useMenuProps, useFirstSentinelProps, useLastSentinelProps)}
        </MenuItemContext.Provider>
    )

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