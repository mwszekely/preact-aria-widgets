import { createContext, Ref, VNode } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useMenu, UseMenuContext, useMenuItem, UseMenuItemReturnType, UseMenuParameters, UseMenuReturnType } from "../use-menu.js";
import { UseMenubarSubInfo } from "../use-menubar.js";
import { MenubarItemProps } from "./menubar.js";
import { memoForwardRef, ParentDepthContext, PartialExcept, useDefault } from "./util.js";


type Get<T, K extends keyof T> = T[K];


interface MenuPropsBase<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends //Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuSurfaceParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "linearNavigationParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "rovingTabIndexParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "typeaheadNavigationParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "dismissParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "staggeredChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "escapeDismissParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "rearrangeableChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "sortableChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "toolbarParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "singleSelectionParameters"> {
}

export interface MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenuPropsBase<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>, "open" | "onClose" | "onOpen" | "openDirection" | "orientation"> {
    render(menuInfo: UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>): VNode;
}

export interface MenuItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends MenubarItemProps<MenuItemElement, M> {
    render(info: UseMenuItemReturnType<MenuItemElement, M>): VNode<any>;
}

const MenuItemContext = createContext<UseMenuContext<any, any, any>>(null!);

export const Menu = memoForwardRef(function Menu<SurfaceElement extends Element, ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element, M extends UseMenubarSubInfo<ChildElement> = UseMenubarSubInfo<ChildElement>>({
    collator,
    disableHomeEndKeys,
    noTypeahead,
    typeaheadTimeout,
    orientation,
    ariaPropName,
    selectionMode,

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
    disabled,
    staggered,
    onOpen,

    getWindow,

    render

}: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement, M>, ref?: Ref<any>) {

    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;

    const info = useMenu<SurfaceElement, ParentElement, ChildElement, ButtonElement, M>({
        linearNavigationParameters: {
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
        },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        toolbarParameters: { orientation, selectedIndex: selectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, disabled: disabled || false },
        singleSelectionParameters: { ariaPropName: ariaPropName || "aria-selected", selectionMode: selectionMode || "activation" }
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


export const MenuItem = memoForwardRef(function MenuItem<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement> = UseMenubarSubInfo<MenuItemElement>>({
    index,
    hidden,
    getSortValue,
    onPress,
    getText,
    role,
    focusSelf,
    disabled,
    render,
    info: uinfo
}: MenuItemProps<MenuItemElement, M>, ref?: Ref<any>) {
    const context = useContext(MenuItemContext);
    console.assert(context != null, `This MenuItem is not contained within a Menubar/Menu`);
    const defaultFocusSelf = useCallback((e: MenuItemElement | null) => (e as Element as HTMLElement)?.focus?.(), []);
    const info = useMenuItem<MenuItemElement, M>({
        info: { index, hidden, disabled, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo } as M,
        context,
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
});
