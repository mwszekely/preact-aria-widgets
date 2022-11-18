import { createContext, createElement, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { ElementToTag, PropModifier } from "../props";
//import { ElementToTag } from "../props";
import { useMenubar, UseMenubarParameters, UseMenubarReturnTypeInfo, UseMenuItem, UseMenubarItemParameters, UseMenuItemReturnTypeInfo } from "../use-menubar";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface MenubarProps<MenubarContainerElement extends Element, MenuItemElement extends Element, C, K extends string> extends
    Get<UseMenubarParameters<never>, "linearNavigation">,
    Get<UseMenubarParameters<never>, "listNavigation">,
    Get<UseMenubarParameters<never>, "rovingTabIndex">,
    Get<UseMenubarParameters<never>, "typeaheadNavigation">,
    Get<UseMenubarParameters<never>, "managedChildren">,
    Get<UseMenubarParameters<never>, "toolbar"> {
    //tagLabel: ElementToTag<LabelElement>;
    ref?: Ref<UseMenubarReturnTypeInfo<MenuItemElement, C, K>>;
    render(info: UseMenubarReturnTypeInfo<MenuItemElement, C, K>, modifyPropsMenubar: PropModifier<MenubarContainerElement>): VNode<any>;
}






export interface MenuItemProps<MenuItemElement extends Element, C, K extends string> extends
    Get<UseMenubarItemParameters<MenuItemElement, C, K, C>, "managedChild">,
    Get<UseMenubarItemParameters<MenuItemElement, C, K, C>, "rovingTabIndex">,
    Get<UseMenubarItemParameters<MenuItemElement, C, K, C>, "listNavigation">,
    Get<UseMenubarItemParameters<MenuItemElement, C, K, C>, "hasFocus">,
    Get<UseMenubarItemParameters<MenuItemElement, C, K, C>, "menuItem"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    subInfo: Get<UseMenubarItemParameters<MenuItemElement, C, K, C>, "subInfo">;
    ref?: Ref<UseMenuItemReturnTypeInfo<MenuItemElement>>;
    render(info: UseMenuItemReturnTypeInfo<MenuItemElement>, modifyPropsMenuItem: PropModifier<MenuItemElement>): VNode<any>;
}

export const MenuItemContext = createContext<UseMenuItem<any, any, any>>(null!);

export const Menubar = memoForwardRef(function MenubarU<ContainerElement extends Element, ChildElement extends Element, C = undefined, K extends string = never>({
    render,
    role,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    indexDemangler,
    indexMangler,
    orientation,
    noTypeahead,
    onAfterChildLayoutEffect,
    onChildrenMountChange,
    onTabbableIndexChange,
    onTabbableRender,
    typeaheadTimeout,
    initialIndex
}: MenubarProps<ContainerElement, ChildElement, C, K>, ref?: Ref<any>) {
    const {
        useMenuItem,
        useMenubarProps,
        ...menubarReturnType
    } = useMenubar<ContainerElement, ChildElement, C, K>({
        linearNavigation: { disableArrowKeys, disableHomeEndKeys },
        toolbar: { orientation, role },
        listNavigation: { indexDemangler, indexMangler },
        managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange },
        rovingTabIndex: { onTabbableIndexChange, onTabbableRender, initialIndex },
        typeaheadNavigation: { collator, noTypeahead, typeaheadTimeout }
    });

    useImperativeHandle(ref!, () => menubarReturnType)

    return (
        <MenuItemContext.Provider value={useMenuItem}>
            {render(menubarReturnType, useMenubarProps)}
        </MenuItemContext.Provider>
    )
})


export const MenuItem = memoForwardRef(function MenuItemU<MenuItemElement extends Element, C = undefined, K extends string = never>({
    index,
    render,
    flags,
    focusSelf,
    hidden,
    text,
    subInfo,
    noModifyTabIndex,
    disabled,
    getDocument,
    onPress,
    role,
    getWindow,
    onActiveElementChange,
    onElementChange,
    onFocusedChanged,
    onFocusedInnerChanged,
    onLastActiveElementChange,
    onLastFocusedChanged,
    onLastFocusedInnerChanged,
    onMount,
    onUnmount,
    onWindowFocusedChange
}: MenuItemProps<MenuItemElement, C, K>, ref?: Ref<any>) {
    const { useMenuItemProps, ...info } = (useContext(MenuItemContext) as UseMenuItem<MenuItemElement, C, K>)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        listNavigation: { text },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        menuItem: { disabled, onPress, role },
        subInfo
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info, useMenuItemProps)}</>
    )
})

export function defaultRenderMenubar<ContainerElement extends Element, ChildElement extends Element, C, K extends string>({ makePropsContainer, tagContainer }: { tagContainer: ElementToTag<ContainerElement>, makePropsContainer: (info: UseMenubarReturnTypeInfo<ChildElement, C, K>) => h.JSX.HTMLAttributes<ContainerElement> }) {
    return function (info: UseMenubarReturnTypeInfo<ChildElement, C, K>, modifyPropsContainer: PropModifier<ContainerElement>): VNode<any> {
        const list = createElement(tagContainer as never, modifyPropsContainer(makePropsContainer(info)));
        return (
            <>
                {list}
            </>
        )
    }
}

export function defaultRenderMenuItem<ChildElement extends Element>({ makePropsChild, tagChild }: { tagChild: ElementToTag<ChildElement>, makePropsChild: (info: UseMenuItemReturnTypeInfo<ChildElement>) => h.JSX.HTMLAttributes<ChildElement> }) {
    return function (info: UseMenuItemReturnTypeInfo<ChildElement>, modifyPropsListItem: PropModifier<ChildElement>): VNode<any> {
        return createElement(tagChild as never, modifyPropsListItem(makePropsChild(info)));
    }
}