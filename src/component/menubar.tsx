import { createContext, createElement, h, Ref, VNode } from "preact";
import { useContext, useImperativeHandle } from "preact/hooks";
import { UseMenuContext, useMenuItem, UseMenuItemReturnType } from "use-menu";
import { UseToolbarContext } from "use-toolbar";
import { ElementToTag, PropModifier } from "../props";
//import { ElementToTag } from "../props";
import { useMenubar, UseMenubarParameters, UseMenubarItemParameters, UseMenubarSubInfo, UseMenubarReturnType } from "../use-menubar";
import { memoForwardRef } from "./util";

type Get<T, K extends keyof T> = T[K];

export interface MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters">,
    //    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "listNavigationParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "rovingTabIndexParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "typeaheadNavigationParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "singleSelectionParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "rearrangeableChildrenParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "sortableChildrenParameters">,
    //    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "managedChildrenParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters"> {
    //tagLabel: ElementToTag<LabelElement>;
    ref?: Ref<UseMenubarReturnType<MenuParentElement, MenuItemElement, M>>;
    render(info: UseMenubarReturnType<MenuParentElement, MenuItemElement, M>): VNode<any>;
}





export interface MenuItemProps<MenuItemElement extends Element> extends
    //Get<UseMenubarItemParameters<MenuItemElement, M>, "managedChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "pressParameters">,
    Pick<Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "managedChildParameters">, "index" | "hidden">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "singleSelectionChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "typeaheadNavigationChildParameters"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    subInfo: Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "completeListNavigationChildParameters">;
    ref?: Ref<UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>>;
    render(info: UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): VNode<any>;
}

export const MenuItemContext = createContext<UseMenuContext<any, any, any>>(null!);

export const Menubar = memoForwardRef(function MenubarU<ContainerElement extends Element, ChildElement extends Element>({
    render,
    role,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    initiallyTabbedIndex,
    navigatePastEnd,
    navigatePastStart,
    navigationDirection,
    pageNavigationSize,
    orientation,
    noTypeahead,
    onTabbableIndexChange,
    compare,
    getIndex,
    initiallySelectedIndex,
    onSelectedIndexChange,
    typeaheadTimeout,
}: MenubarProps<ContainerElement, ChildElement, UseMenubarSubInfo<ChildElement>>, ref?: Ref<any>) {
    const info = useMenubar<ContainerElement, ChildElement>({
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigatePastEnd, navigatePastStart, navigationDirection, pageNavigationSize },
        toolbarParameters: { orientation, role },
        rovingTabIndexParameters: { onTabbableIndexChange, initiallyTabbedIndex },
        typeaheadNavigationParameters: { collator, noTypeahead, typeaheadTimeout },
        rearrangeableChildrenParameters: { getIndex },
        singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange },
        sortableChildrenParameters: { compare }
    });

    useImperativeHandle(ref!, () => info)

    return (
        <MenuItemContext.Provider value={info.context}>
            {render(info)}
        </MenuItemContext.Provider>
    )
})


export const MenuItem = memoForwardRef(function MenuItemU<MenuItemElement extends Element>({
    index,
    render,
    ariaPropName,
    exclude,
    selectionMode,
    focusSelf,
    hidden,
    text,
    subInfo,
    disabled,
    onPress,
    role,
}: MenuItemProps<MenuItemElement>, ref?: Ref<any>) {
    const context = (useContext(MenuItemContext)); /*<MenuItemElement, C, K>)({
        managedChild: { index, flags },
        rovingTabIndex: { focusSelf, hidden, noModifyTabIndex },
        listNavigation: { text },
        hasFocus: { getDocument, getWindow, onActiveElementChange, onElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onMount, onUnmount, onWindowFocusedChange },
        menuItem: { disabled, onPress, role },
        subInfo
    });*/

    const info = useMenuItem({
        completeListNavigationChildParameters: {},
        context,
        managedChildParameters: { disabled: !!disabled, hidden, index },
        menuItemParameters: { disabled, onPress, role },
        pressParameters: { exclude, focusSelf },
        singleSelectionChildParameters: { ariaPropName, selectionMode },
        typeaheadNavigationChildParameters: { text }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
})

export function defaultRenderMenubar<ContainerElement extends Element, ChildElement extends Element>({ makePropsContainer, tagContainer }: { tagContainer: ElementToTag<ContainerElement>, makePropsContainer: (info: UseMenubarReturnType<ContainerElement, ChildElement, UseMenubarSubInfo<ChildElement>>) => h.JSX.HTMLAttributes<ContainerElement> }) {
    return function (info: UseMenubarReturnType<ContainerElement, ChildElement, UseMenubarSubInfo<ChildElement>>): VNode<any> {
        const list = createElement(tagContainer as never, makePropsContainer(info));
        return (
            <>
                {list}
            </>
        )
    }
}

export function defaultRenderMenuItem<ChildElement extends Element>({ makePropsChild, tagChild }: { tagChild: ElementToTag<ChildElement>, makePropsChild: (info: UseMenuItemReturnType<ChildElement, UseMenubarSubInfo<ChildElement>>) => h.JSX.HTMLAttributes<ChildElement> }) {
    return function (info: UseMenuItemReturnType<ChildElement, UseMenubarSubInfo<ChildElement>>, modifyPropsListItem: PropModifier<ChildElement>): VNode<any> {
        return createElement(tagChild as never, modifyPropsListItem(makePropsChild(info)));
    }
}