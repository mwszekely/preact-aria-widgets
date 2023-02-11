import { createContext, Ref, VNode } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useMenu, UseMenuContext, useMenuItem, UseMenuItemReturnType, UseMenuParameters, UseMenuReturnType } from "../use-menu";
import { UseMenubarSubInfo } from "../use-menubar";
import { MenubarItemProps } from "./menubar";
import { memoForwardRef, ParentDepthContext, PartialExcept, useDefault } from "./util";


type Get<T, K extends keyof T> = T[K];


interface MenuPropsBase<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends //Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuSurfaceParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "linearNavigationParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rovingTabIndexParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "typeaheadNavigationParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "dismissParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "staggeredChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "escapeDismissParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rearrangeableChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "sortableChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "singleSelectionDeclarativeParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "toolbarParameters"> {
}

export interface MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends PartialExcept<MenuPropsBase<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement>, "open" | "onClose" | "onOpen" | "openDirection" | "orientation"> {
    render(menuInfo: UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, UseMenubarSubInfo<MenuItemElement>>): VNode;
}

export interface MenuItemProps<MenuItemElement extends Element> extends MenubarItemProps<MenuItemElement> {
    render(info: UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): VNode<any>;
}

const MenuItemContext = createContext<UseMenuContext<any, any, any>>(null!);

export const Menu = memoForwardRef(function Menu<SurfaceElement extends Element, ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element>({


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
    selectedIndex,
    navigatePastEnd,
    navigatePastStart,
    onSelectedIndexChange,
    pageNavigationSize,
    parentDepth,
    untabbable,
    staggered,
    onOpen,

    getWindow,

    render

}: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement>, ref?: Ref<any>) {

    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    const info = useMenu<SurfaceElement, ParentElement, ChildElement, ButtonElement>({
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap"
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        dismissParameters: {
            closeOnBackdrop: closeOnBackdrop ?? true,
            closeOnEscape: closeOnEscape ?? true,
            closeOnLostFocus: closeOnLostFocus ?? true,
            onClose,
            open
        },
        escapeDismissParameters: {
            getWindow: useDefault("getWindow", getWindow),
            parentDepth: parentDepth ?? defaultParentDepth
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },

        sortableChildrenParameters: { compare: compare ?? null },
        menuParameters: { openDirection, onOpen },
        menuSurfaceParameters: {},
        rovingTabIndexParameters: {
            onTabbableIndexChange: onTabbableIndexChange ?? null,
            untabbable: untabbable ?? false
        },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        singleSelectionDeclarativeParameters: { selectedIndex: selectedIndex ?? null },
        toolbarParameters: { orientation, onSelectedIndexChange: onSelectedIndexChange ?? null },
        menubarParameters: {}
    });

    useImperativeHandle(ref!, () => info);

    return (
        <ParentDepthContext.Provider value={myDepth}>
            <MenuItemContext.Provider value={info.context}>
                {render(info)}
            </MenuItemContext.Provider>
        </ParentDepthContext.Provider>
    )
})


export const MenuItem = memoForwardRef(function MenuItem<MenuItemElement extends Element>({ index, hidden, getSortValue, onPress, getText, role, focusSelf, ariaPropName, selectionMode, disabled, render }: MenuItemProps<MenuItemElement>, ref?: Ref<any>) {
    const context = useContext(MenuItemContext);
    console.assert(context != null, `This MenuItem is not contained within a Menubar/Menu`);
    const defaultFocusSelf = useCallback((e: MenuItemElement | null) => (e as Element as HTMLElement)?.focus?.(), []);
    const info = useMenuItem<MenuItemElement>({
        completeListNavigationChildParameters: { focusSelf: focusSelf ?? defaultFocusSelf },
        context,
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        singleSelectionChildParameters: { ariaPropName, selectionMode, disabled: disabled ?? false }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
});
