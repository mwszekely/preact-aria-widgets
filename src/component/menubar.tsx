import { createContext } from "preact";
import { assertEmptyObject, focus, memo } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { Get10, Get6, OmitStrong, useContextWithWarning } from "../props.js";
import { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo, useMenubar, useMenubarChild } from "../use-menubar.js";
import { GenericComponentProps, useDefault } from "./util.js";


export type MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>,
    Get10<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters">,
    "orientation" | "ariaLabel" | "selectionLimit"
>;

export type MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenubarItemReturnType<MenuItemElement, M>,
    Get6<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters", "info", "refElementParameters", "hasCurrentFocusParameters">,
    "index" | "getSortValue"
> & { info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>; };

export const MenubarItemContext = createContext<UseMenubarContext<any, any>>(null!);

export const Menubar = memo(function Menubar<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({
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
    onNavigateTypeahead,
    imperativeHandle,
    onElementChange, 
    onMount, 
    onUnmount,
    selectionLimit,
    ...void1
}: MenubarProps<ContainerElement, ChildElement, LabelElement, UseMenubarSubInfo<ChildElement>>) {
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    assertEmptyObject(void1);

    const info = useMenubar<ContainerElement, ChildElement, LabelElement>({
        linearNavigationParameters: {
            onNavigateLinear,
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
        },
        toolbarParameters: {
            orientation,
            selectedIndex,
            selectionLimit,
            onSelectedIndexChange,
            role: role ?? "menubar",
            disabled: disabled || false
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange, untabbable
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        rearrangeableChildrenParameters: {
            getIndex: useDefault("getIndex", getIndex)
        },
        staggeredChildrenParameters: {
            staggered: staggered || false
        },
        sortableChildrenParameters: {
            compare,
        },
        labelParameters: {
            ariaLabel
        },
        singleSelectionParameters: {
            ariaPropName,
            selectionMode
        },
        refElementParameters: { onElementChange, onMount, onUnmount  }
    });

    useImperativeHandle(imperativeHandle!, () => info)

    return (
        <MenubarItemContext.Provider value={info.context}>
            {render(info)}
        </MenubarItemContext.Provider>
    )
})


export function MenubarItem<MenuItemElement extends Element>({
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
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onUnmount,
    info: uinfo
}: MenubarItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) {
    const context = (useContextWithWarning(MenubarItemContext, "menubar"));
    const defaultFocusSelf = useCallback((e: MenuItemElement | null) => focus(e as Element as HTMLElement), [])

    const info = useMenubarChild<MenuItemElement>({
        info: { index, untabbable: untabbable || false, unselectable: unselectable || false, focusSelf: focusSelf ?? defaultFocusSelf, getSortValue, ...uinfo },
        context,
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        pressParameters: { onPressingChange },
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });

    useImperativeHandle(imperativeHandle!, () => info);

    return (
        <>{render(info)}</>
    )
};
