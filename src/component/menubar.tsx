import { createContext, Ref, VNode } from "preact";
import { useCallback, useContext, useImperativeHandle } from "preact/hooks";
import { useMenubar, useMenubarChild, UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "../use-menubar";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

interface MenubarPropsBase<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "rovingTabIndexParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "typeaheadNavigationParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "singleSelectionDeclarativeParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "rearrangeableChildrenParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "sortableChildrenParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "menubarParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "staggeredChildrenParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "labelParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters"> {
    ref?: Ref<UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>>;
}





interface MenubarItemPropsBase<MenuItemElement extends Element> extends
    //Get<UseMenubarItemParameters<MenuItemElement, M>, "managedChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rovingTabIndexChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "sortableChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "managedChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "singleSelectionChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "textContentParameters"> {
    focusSelf?: UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>["completeListNavigationChildParameters"]["focusSelf"];
    ref?: Ref<UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>>;
}

export interface MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenubarPropsBase<MenuParentElement, MenuItemElement, LabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>): VNode<any>;
}
export interface MenubarItemProps<MenuItemElement extends Element> extends PartialExcept<MenubarItemPropsBase<MenuItemElement>, "ariaPropName" | "index" | "selectionMode" | "getSortValue"> {
    render(info: UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): VNode<any>;
}

export const MenubarItemContext = createContext<UseMenubarContext<any, any, any>>(null!);

export const Menubar = memoForwardRef(function MenubarU<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({
    render,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    orientation,
    staggered,
    noTypeahead,
    onTabbableIndexChange,
    compare,
    getIndex,
    untabbable,
    selectedIndex,
    onSelectedIndexChange,
    typeaheadTimeout,
    role,
    ariaLabel
}: MenubarProps<ContainerElement, ChildElement, LabelElement, UseMenubarSubInfo<ChildElement>>, ref?: Ref<any>) {
    const info = useMenubar<ContainerElement, ChildElement, LabelElement>({
        linearNavigationParameters: {
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys),
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: { orientation, onSelectedIndexChange: onSelectedIndexChange ?? null },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        typeaheadNavigationParameters: {
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        staggeredChildrenParameters: { staggered: staggered || false },
        singleSelectionDeclarativeParameters: { selectedIndex: selectedIndex ?? null },
        sortableChildrenParameters: { compare: compare ?? null },
        menubarParameters: { role: role ?? "menubar" },
        labelParameters: { ariaLabel }
    });

    useImperativeHandle(ref!, () => info)

    return (
        <MenubarItemContext.Provider value={info.context}>
            {render(info)}
        </MenubarItemContext.Provider>
    )
})


export const MenubarItem = memoForwardRef(function MenuItemU<MenuItemElement extends Element>({
    index,
    render,
    ariaPropName,
    focusSelf,
    selectionMode,
    hidden,
    getText,
    disabled,
    onPress,
    getSortValue,
    role,
}: MenubarItemProps<MenuItemElement>, ref?: Ref<any>) {
    const context = (useContext(MenubarItemContext));
    console.assert(context != null, `This MenuItem is not contained within a Menubar/Menu`);
    const defaultFocusSelf = useCallback((e: MenuItemElement | null) => (e as Element as HTMLElement)?.focus?.(), [])

    const info = useMenubarChild<MenuItemElement>({
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
