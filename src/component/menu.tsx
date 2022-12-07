import { Ref, VNode } from "preact";
import { returnNull, useState } from "preact-prop-helpers";
import { useContext, useImperativeHandle } from "preact/hooks";
import { useMenu, UseMenuParameters, UseMenuReturnType } from "../use-menu";
import { UseMenubarSubInfo } from "../use-menubar";
import { defaultRenderPortal } from "./dialog";
import { MenuItem, MenuItemContext } from "./menubar";
import { memoForwardRef, ParentDepthContext, PartialExcept, useDefault } from "./util";


type Get<T, K extends keyof T> = T[K];


interface MenuPropsBase<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends //Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuSurfaceParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "linearNavigationParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rovingTabIndexParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "typeaheadNavigationParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "dismissParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "escapeDismissParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "rearrangeableChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "sortableChildrenParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "singleSelectionDeclarativeParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "labelParameters">,
    Get<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "toolbarParameters"> {
}

export interface MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element> extends PartialExcept<MenuPropsBase<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement>, "open" | "onClose" | "onOpen" | "openDirection" | "orientation" | "ariaLabel"> {
    render(menuInfo: UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, UseMenubarSubInfo<MenuItemElement>>): VNode;
}

//const MenuItemContext = createContext<UseMenuItem<any, any, any>>(null!);

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
    setSelectedIndex,
    pageNavigationSize,
    parentDepth,
    untabbable,
    onOpen,

    getWindow,

    render,
    ariaLabel

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
        toolbarParameters: { orientation, setSelectedIndex: setSelectedIndex ?? null },
        menubarParameters: {},
        labelParameters: { ariaLabel }
    });

    useImperativeHandle(ref!, () => info);

    //const { useMenuSentinelProps: useFirstSentinelProps } = useMenuSentinel<SentinelElement>();
    //const { useMenuSentinelProps: useLastSentinelProps } = useMenuSentinel<SentinelElement>();
    return (
        <ParentDepthContext.Provider value={myDepth}>
            <MenuItemContext.Provider value={info.context}>
                {render(info)}
            </MenuItemContext.Provider>
        </ParentDepthContext.Provider>
    )
})

/*
export function MenuItem<MenuItemElement extends Element>({}: MenuItemProps) {
    const context = useContext(MenuItemContext);

    const info = useMenuItem<MenuItemElement>({
        completeListNavigationChildParameters: {},
        context,
        managedChildParameters: { disabled, hidden, index },
        menuItemParameters: { disabled, onPress, role },
        pressParameters: { exclude, focusSelf },
        singleSelectionChildParameters: { ariaPropName, selectionMode },
        typeaheadNavigationChildParameters: { text },
    })
}*/

export function DemoMenu() {
    const [open, setOpen] = useState(false);

    return (
        <Menu<HTMLDivElement, HTMLUListElement, HTMLLIElement, HTMLButtonElement>
            ariaLabel={null}
            closeOnBackdrop={true}
            closeOnEscape={true}
            closeOnLostFocus={true}
            collator={null}
            disableArrowKeys={false}
            disableHomeEndKeys={false}
            getIndex={v => v.props.index}
            compare={(lhs, rhs) => lhs.index - rhs.index}
            selectedIndex={null}
            untabbable={false}
            navigatePastEnd="wrap"
            navigatePastStart="wrap"
            noTypeahead={false}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            setSelectedIndex={null}
            onTabbableIndexChange={null}
            openDirection="down"
            orientation="vertical"
            pageNavigationSize={0.1}
            parentDepth={0}
            typeaheadTimeout={1000}
            render={info => {
                return (
                    <>
                        <button {...info.propsTrigger}>Open menu</button>
                        {defaultRenderPortal({
                            portalId: "portal",
                            children: <>
                                <ul {...info.propsTarget}>

                                </ul>
                            </>
                        })}
                    </>
                )
            }}
        />
    )
}

export function DemoMenuItem({ index }: { index: number }) {
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
}*/
