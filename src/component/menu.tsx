import { createElement, h, Ref, VNode } from "preact";
import { UseActiveElementParameters, useStableCallback } from "preact-prop-helpers";
import { useImperativeHandle } from "preact/compat";
import { UseMenubarSubInfo } from "../use-menubar";
import { ElementToTag, PropModifier } from "../props";
import { useMenu, UseMenuParameters, UseMenuReturnType } from "../use-menu";
import { defaultRenderPortal } from "./dialog";
import { MenuItemContext } from "./menubar";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends //Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuSurfaceParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "linearNavigationParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rovingTabIndexParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "typeaheadNavigationParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "dismissParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "escapeDismissParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rearrangeableChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "sortableChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "singleSelectionParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "toolbarParameters"> {

    //getDocument: UseActiveElementParameters["getDocument"];
    //getWindow?: UseActiveElementParameters["getWindow"];
    

    render(menuInfo: UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement,  UseMenubarSubInfo<MenuItemElement>>): VNode;
}

//const MenuItemContext = createContext<UseMenuItem<any, any, any>>(null!);

export const Menu = memoForwardRef(function Menu<SurfaceElement extends Element, ParentElement extends Element, SentinelElement extends Element, ChildElement extends Element, ButtonElement extends Element, C = undefined, K extends string = never>({

    
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    noTypeahead,
    typeaheadTimeout,
    orientation,
    
    onClose,
    open,

    openDirection,
    
    onTabbableIndexChange,
    closeOnBackdrop,
    closeOnEscape,
    closeOnLostFocus,
    compare,
    getIndex,
    initiallySelectedIndex,
    initiallyTabbedIndex,
    navigatePastEnd,
    navigatePastStart,
    navigationDirection,
    onSelectedIndexChange,
    pageNavigationSize,
    parentDepth,
    
    getWindow,

    render

}: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement>, ref?: Ref<any>) {
    const info = useMenu<SurfaceElement, ParentElement, ChildElement, ButtonElement>({
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigatePastEnd, navigatePastStart, navigationDirection, pageNavigationSize },
        dismissParameters: { closeOnBackdrop, closeOnEscape, closeOnLostFocus, onClose, open },
        escapeDismissParameters: { getWindow, parentDepth },
        rearrangeableChildrenParameters: { getIndex },
        singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange },
        sortableChildrenParameters: { compare },
       // listNavigationParameters: {  },
       // managedChildrenParameters: {  },
        menuParameters: { openDirection },
        menuSurfaceParameters: {},
        rovingTabIndexParameters: { initiallyTabbedIndex, onTabbableIndexChange },
       // softDismissParameters: {  },
        typeaheadNavigationParameters: { collator, noTypeahead, typeaheadTimeout },
       // activeElementParameters: {  },
       // menuButtonHasFocusParameters: {  },
        toolbarParameters: { orientation }
    });

    useImperativeHandle(ref!, () => info);
    
    //const { useMenuSentinelProps: useFirstSentinelProps } = useMenuSentinel<SentinelElement>();
    //const { useMenuSentinelProps: useLastSentinelProps } = useMenuSentinel<SentinelElement>();
    return (
        <MenuItemContext.Provider value={info.context}>
            {render(info)}
        </MenuItemContext.Provider>
    )

})

export function defaultRenderMenu<SurfaceElement extends Element, MenuElement extends Element, MenuItemElement extends Element, SentinelElement extends Element, ButtonElement extends Element>({ portalId, tagButton, tagMenu, tagSurface, tagSentinel, makePropsButton, makePropsMenu, makePropsSurface, makePropsSentinel }: { portalId: string, tagSurface: ElementToTag<SurfaceElement>, tagMenu: ElementToTag<MenuElement>, tagButton: ElementToTag<ButtonElement>, tagSentinel: ElementToTag<SentinelElement>, makePropsSurface: (info: UseMenuReturnType<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, UseMenubarSubInfo<MenuItemElement>>) => h.JSX.HTMLAttributes<SurfaceElement>, makePropsMenu: (info: UseMenuReturnType<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, UseMenubarSubInfo<MenuItemElement>>) => h.JSX.HTMLAttributes<MenuElement>, makePropsButton: (info: UseMenuReturnType<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, UseMenubarSubInfo<MenuItemElement>>) => h.JSX.HTMLAttributes<ButtonElement>, makePropsSentinel: (info: UseMenuReturnType<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, UseMenubarSubInfo<MenuItemElement>>) => h.JSX.HTMLAttributes<SentinelElement> }) {
    return function (menuInfo: UseMenuReturnType<SurfaceElement, MenuElement, MenuItemElement, ButtonElement, UseMenubarSubInfo<MenuItemElement>>) {

        const { children: surfaceChildren, ...surfaceProps } = (makePropsSurface(menuInfo));
        const { children: menuChildren, ...menuProps } = (makePropsMenu(menuInfo));
        return (
            <>
                {createElement(tagButton as never, (makePropsButton(menuInfo)))}
                {defaultRenderPortal({
                    portalId,
                    children: createElement(tagSurface as never, {
                        ...surfaceProps,
                        children: (<>
                            {createElement(tagSentinel as never, (makePropsSentinel(menuInfo)))}
                            {surfaceChildren}
                            {createElement(tagMenu as never, { ...menuProps, children: <>{menuChildren}</> })}
                            {createElement(tagSentinel as never, (makePropsSentinel(menuInfo)))}
                        </>)
                    })
                })}
            </>
        )

    }
}