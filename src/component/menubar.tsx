import { createContext, Ref, VNode } from "preact";
import { focus } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { Get3, Get9, OmitStrong, useContextWithWarning } from "../props.js";
import { useMenubar, useMenubarChild, UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo } from "../use-menubar.js";
import { memoForwardRef, PartialExcept, useDefault } from "./util.js";


interface MenubarPropsBase<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends
    Get9<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters" , "rovingTabIndexParameters" , "typeaheadNavigationParameters" , "rearrangeableChildrenParameters" , "sortableChildrenParameters" , "staggeredChildrenParameters" , "labelParameters" , "toolbarParameters", "singleSelectionParameters"> {
    ref?: Ref<UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>>;
}


interface MenubarItemPropsBase<MenuItemElement extends Element> extends
    Get3<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters">,
    Pick<UseMenubarSubInfo<MenuItemElement>, "index" | "untabbable" | "unselectable" | "getSortValue"> {
    focusSelf?: UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>["info"]["focusSelf"];
    ref?: Ref<UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>>;
}

export interface MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenubarPropsBase<MenuParentElement, MenuItemElement, LabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>): VNode<any>;
}
export interface MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenubarItemPropsBase<MenuItemElement>, "index" | "getSortValue"> {

    render(info: UseMenubarItemReturnType<MenuItemElement, M>): VNode<any>;
    info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>;
}

export const MenubarItemContext = createContext<UseMenubarContext<any, any, any>>(null!);

export const Menubar = memoForwardRef(function MenubarU<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<ChildElement> = UseMenubarSubInfo<ChildElement>>({
    render,
    collator,
    disableHomeEndKeys,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    orientation,
    staggered,
    noTypeahead,
    untabbable,
    onTabbableIndexChange,
    compare,
    getIndex,
    disabled,
    selectedIndex,
    onSelectedIndexChange,
    typeaheadTimeout,
    role,
    ariaLabel,
    ariaPropName,
    selectionMode,
    onNavigateLinear,
    onNavigateTypeahead
}: MenubarProps<ContainerElement, ChildElement, LabelElement, M>, ref?: Ref<any>) {
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;

    const info = useMenubar<ContainerElement, ChildElement, LabelElement, M>({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: { orientation, selectedIndex: selectedIndex ?? null, onSelectedIndexChange: onSelectedIndexChange ?? null, role: role ?? "menubar", disabled: disabled || false },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        staggeredChildrenParameters: { staggered: staggered || false },
        sortableChildrenParameters: { compare: compare ?? null },
        labelParameters: { ariaLabel },
        singleSelectionParameters: { ariaPropName, selectionMode }
    });

    useImperativeHandle(ref!, () => info)

    return (
        <MenubarItemContext.Provider value={info.context}>
            {render(info)}
        </MenubarItemContext.Provider>
    )
})


export const MenubarItem = memoForwardRef(function MenuItemU<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    index,
    render,
    focusSelf,
    untabbable,
    getText,
    unselectable,
    onPress,
    getSortValue,
    onPressingChange,
    role,
    info: uinfo
}: MenubarItemProps<MenuItemElement, M>, ref?: Ref<any>) {
    const context = (useContextWithWarning(MenubarItemContext, "menubar"));
    const defaultFocusSelf = useCallback((e: MenuItemElement | null) => focus(e as Element as HTMLElement), [])

    const info = useMenubarChild<MenuItemElement, M>({
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf: focusSelf ?? defaultFocusSelf, getSortValue, ...uinfo } as M,
        context,
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        pressParameters: { onPressingChange }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
});
