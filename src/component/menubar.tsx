import { createContext, createElement, h, Ref, VNode } from "preact";
import { returnNull } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { UseMenuContext, useMenuItem, UseMenuItemReturnType } from "use-menu";
import { UseToolbarContext } from "use-toolbar";
import { ElementToTag, PropModifier } from "../props";
//import { ElementToTag } from "../props";
import { useMenubar, UseMenubarParameters, UseMenubarItemParameters, UseMenubarSubInfo, UseMenubarReturnType } from "../use-menubar";
import { defaultRenderPortal } from "./dialog";
import { memoForwardRef, PartialExcept, useDefault } from "./util";

type Get<T, K extends keyof T> = T[K];

interface MenubarPropsBase<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "rovingTabIndexParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "typeaheadNavigationParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "singleSelectionParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "rearrangeableChildrenParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "sortableChildrenParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "menubarParameters">,
    Get<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters"> {
    //tagLabel: ElementToTag<LabelElement>;
    ref?: Ref<UseMenubarReturnType<MenuParentElement, MenuItemElement, M>>;
}





interface MenuItemPropsBase<MenuItemElement extends Element> extends
    //Get<UseMenubarItemParameters<MenuItemElement, M>, "managedChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "pressParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rovingTabIndexChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "sortableChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "managedChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "singleSelectionChildParameters">,
    Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "textContentParameters"> {
    //tagListItem: ElementToTag<ListboxItemElement>;
    //subInfo: Get<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "completeListNavigationChildParameters">;
    ref?: Ref<UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>>;
}

export interface MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenubarPropsBase<MenuParentElement, MenuItemElement, M>, "orientation"> {
    render(info: UseMenubarReturnType<MenuParentElement, MenuItemElement, M>): VNode<any>;
}
export interface MenuItemProps<MenuItemElement extends Element> extends PartialExcept<MenuItemPropsBase<MenuItemElement>, "ariaPropName" | "index" | "selectionMode" | "getSortValue"> {
    render(info: UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): VNode<any>;
}

export const MenuItemContext = createContext<UseMenuContext<any, any, any>>(null!);

export const Menubar = memoForwardRef(function MenubarU<ContainerElement extends Element, ChildElement extends Element>({
    render,
    collator,
    disableArrowKeys,
    disableHomeEndKeys,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    orientation,
    noTypeahead,
    onTabbableIndexChange,
    compare,
    getIndex,
    untabbable,
    initiallySelectedIndex,
    setSelectedIndex,
    typeaheadTimeout,
    role
}: MenubarProps<ContainerElement, ChildElement, UseMenubarSubInfo<ChildElement>>, ref?: Ref<any>) {
    const info = useMenubar<ContainerElement, ChildElement>({
        linearNavigationParameters: { 
            disableArrowKeys: useDefault("disableArrowKeys", disableArrowKeys), 
            disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys), 
            navigatePastEnd: navigatePastEnd ?? "wrap",
            navigatePastStart: navigatePastStart ?? "wrap",
            pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
         },
        toolbarParameters: { orientation },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChange ?? null, untabbable: untabbable ?? false },
        typeaheadNavigationParameters: { 
            collator: useDefault("collator", collator), 
            noTypeahead: useDefault("noTypeahead", noTypeahead), 
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
         },
        rearrangeableChildrenParameters: { getIndex: useDefault("getIndex", getIndex) },
        singleSelectionParameters: { initiallySelectedIndex: initiallySelectedIndex ?? null, setSelectedIndex: setSelectedIndex ?? null },
        sortableChildrenParameters: { compare: compare ?? null },
        menubarParameters: { role: role ?? "menubar" }
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
    hidden,
    getText,
    disabled,
    onPress,
    getSortValue,
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
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: hidden ?? false },
        sortableChildParameters: { getSortValue },
        textContentParameters: { getText: useDefault("getText", getText) },
        menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
        pressParameters: { exclude },
        singleSelectionChildParameters: { ariaPropName, selectionMode, disabled: disabled ?? false }
    });

    useImperativeHandle(ref!, () => info);

    return (
        <>{render(info)}</>
    )
})



export function DemoMenubar() {

    return (
        <Menubar<HTMLUListElement, HTMLLIElement>
            collator={null}
            disableArrowKeys={false}
            disableHomeEndKeys={false}
            getIndex={v => v.props.index}
            compare={(lhs, rhs) => lhs.index - rhs.index}
            initiallySelectedIndex={null}
            navigatePastEnd="wrap"
            navigatePastStart="wrap"
            noTypeahead={false}
            setSelectedIndex={null}
            onTabbableIndexChange={null}
            orientation="vertical"
            pageNavigationSize={0.1}
            typeaheadTimeout={1000}
            role={"menu"}
            render={info => {
                return (
                    <>
                        <ul {...info.props}>

                        </ul>
                    </>
                )
            }}
        />
    )
}

export function DemoMenubarItem({ index }: { index: number }) {
    return (
        <MenuItem<HTMLLIElement>
            exclude={undefined}
            hidden={false}
            index={index}
            selectionMode="disabled"
            onPress={noop}
            getSortValue={returnNull}
            render={info => {
                return (
                    <>
                        <li {...info.props}>List item (index #{index})</li>
                    </>
                )
            }}
            role="menuitem"
            ariaPropName="aria-selected"
            disabled={false}

        />
    )
}

function noop() { }


/*
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
}*/

