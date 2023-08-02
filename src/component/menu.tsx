import { createContext } from "preact";
import { assertEmptyObject, focus, OmitStrong } from "preact-prop-helpers";
import { useCallback, useContext } from "preact/hooks";
import { Get16, useContextWithWarning } from "../props.js";
import { useMenu, UseMenuContext, useMenuItem, UseMenuItemReturnType, UseMenuParameters, UseMenuReturnType } from "../use-menu.js";
import { UseMenubarSubInfo } from "../use-menubar.js";
import { MenubarItemProps } from "./menubar.js";
import { GenericComponentProps, ParentDepthContext, useComponent, useDefault } from "./util.js";

export type MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>,
    Get16<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters", "menuSurfaceParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "dismissParameters", "staggeredChildrenParameters", "escapeDismissParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "toolbarParameters", "singleSelectionParameters", "activeElementParameters", "refElementParameters", "dismissParameters", "modalParameters">,
    "active" | "onDismiss" | "openDirection" | "orientation" | "onOpen" | "selectionLimit"
>;

export type MenuItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenuItemReturnType<MenuItemElement, M>,
    MenubarItemProps<MenuItemElement, M>,
    "index" | "getSortValue"
> & { info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>; };

const UntabbableContext = createContext(false);
const AriaPropNameContext = createContext<UseMenuParameters<any, any, any, any, any>["singleSelectionParameters"]["ariaPropName"]>("aria-selected")
const SelectionModeContext = createContext<UseMenuParameters<any, any, any, any, any>["singleSelectionParameters"]["selectionMode"]>("focus");
const MenuItemContext = createContext<UseMenuContext<any, any>>(null!);

export function Menu<SurfaceElement extends Element, ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element>({
    collator,
    disableHomeEndKeys,
    noTypeahead,
    typeaheadTimeout,
    orientation,
    ariaPropName,
    selectionMode,
    selectionLimit,
    untabbable,

    active,
    onDismiss,
    onElementChange,
    onMount,
    onUnmount,

    openDirection,

    onTabbableIndexChange,
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
    onNavigateLinear,
    onNavigateTypeahead,

    getDocument,
    onActiveElementChange,
    onLastActiveElementChange,
    onWindowFocusedChange,


    render,

    imperativeHandle,
    ...void1

}: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement, UseMenubarSubInfo<ChildElement>>) {

    const defaultParentDepth = useContext(ParentDepthContext);
    let myDepth = (parentDepth ?? defaultParentDepth) + 1;
    ariaPropName ||= "aria-selected";
    selectionMode ||= "activation";
    untabbable ||= false;
    assertEmptyObject(void1);


    return (
        <AriaPropNameContext.Provider value={ariaPropName}>
            <SelectionModeContext.Provider value={selectionMode}>
                <UntabbableContext.Provider value={untabbable}>
                    <ParentDepthContext.Provider value={myDepth}>
                        {useComponent(
                            imperativeHandle,
                            render,
                            MenuItemContext,
                            useMenu<SurfaceElement, ParentElement, ChildElement, ButtonElement>({
                                linearNavigationParameters: {
                                    onNavigateLinear,
                                    disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
                                    pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
                                    navigatePastEnd: navigatePastEnd ?? "wrap",
                                    navigatePastStart: navigatePastStart ?? "wrap"
                                },
                                staggeredChildrenParameters: {
                                    staggered: staggered || false
                                },
                                escapeDismissParameters: { parentDepth: parentDepth || 1, },
                                dismissParameters: { onDismiss },
                                modalParameters: { active },
                                refElementParameters: { onElementChange, onMount, onUnmount },
                                activeElementParameters: {
                                    getDocument: useDefault("getDocument", getDocument),
                                    onActiveElementChange,
                                    onLastActiveElementChange,
                                    onWindowFocusedChange
                                },
                                rearrangeableChildrenParameters: {
                                    getIndex: useDefault("getIndex", getIndex)
                                },

                                sortableChildrenParameters: {
                                    compare
                                },
                                menuParameters: {
                                    openDirection,
                                    onOpen
                                },
                                menuSurfaceParameters: {},
                                rovingTabIndexParameters: {
                                    onTabbableIndexChange,
                                    untabbable: untabbable
                                },
                                typeaheadNavigationParameters: {
                                    onNavigateTypeahead,
                                    collator: useDefault("collator", collator),
                                    noTypeahead: useDefault("noTypeahead", noTypeahead),
                                    typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
                                },
                                toolbarParameters: {
                                    orientation,
                                    selectedIndex,
                                    onSelectedIndexChange,
                                    disabled: disabled || false,
                                    selectionLimit
                                },
                                singleSelectionParameters: {
                                    ariaPropName: ariaPropName || "aria-selected",
                                    selectionMode: selectionMode || "activation"
                                }
                            }))}
                    </ParentDepthContext.Provider>
                </UntabbableContext.Provider>
            </SelectionModeContext.Provider>
        </AriaPropNameContext.Provider >
    )
}


export function MenuItem<MenuItemElement extends Element>({
    index,
    untabbable,
    getSortValue,
    onPress,
    getText,
    role,
    focusSelf,
    unselectable,
    onPressingChange,
    render,
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onUnmount,
    info: uinfo,
    ...void1
}: MenuItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) {
    const context = useContextWithWarning(MenuItemContext, "menu");
    const defaultFocusSelf = useCallback((e: MenuItemElement | null) => focus(e as Element as HTMLElement), []);
    assertEmptyObject(void1);
    
    return (
        useComponent(
            imperativeHandle,
            render,
            null,
            useMenuItem<MenuItemElement>({
                info: {
                    index,
                    untabbable: untabbable || false,
                    unselectable: unselectable || false,
                    focusSelf: focusSelf ?? defaultFocusSelf, 
                    getSortValue,
                },
                context,
                textContentParameters: {
                    getText: useDefault("getText", getText)
                },
                menuItemParameters: {
                    onPress,
                    role: role ?? "menuitem"
                },
                pressParameters: {
                    onPressingChange
                },
                hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
                refElementParameters: { onElementChange, onMount, onUnmount },
            })
        )
    );
};
