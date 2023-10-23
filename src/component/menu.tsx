import { createContext } from "preact";
import { assertEmptyObject, focus, memo, OmitStrong } from "preact-prop-helpers";
import { useCallback, useContext } from "preact/hooks";
import { Get15, useContextWithWarning } from "../props.js";
import { useMenu, UseMenuContext, useMenuItem, UseMenuItemReturnType, UseMenuParameters, UseMenuReturnType } from "../use-menu.js";
import { UseMenubarSubInfo } from "../use-menubar.js";
import { MenubarItemProps } from "./menubar.js";
import { GenericComponentProps, ParentDepthContext, useComponent, useDefault } from "./util.js";

export type MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>,
    Get15<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters", "menuSurfaceParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "dismissParameters", "escapeDismissParameters", "toolbarParameters", "singleSelectionParameters", "activeElementParameters", "refElementParameters", "dismissParameters", "modalParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters">,
    "active" | "onDismiss" | "openDirection" | "orientation" | "onOpen"
>;

export type MenuItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenuItemReturnType<MenuItemElement, M>,
    MenubarItemProps<MenuItemElement, M>,
    "index"
> & { info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>; };

const MenuItemContext = createContext<UseMenuContext<any, any>>(null!);

export const Menu = memo((function Menu<SurfaceElement extends Element, ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element>({
    collator,
    disableHomeEndKeys,
    noTypeahead,
    typeaheadTimeout,
    orientation,
    singleSelectionAriaPropName,
    singleSelectionMode,
    untabbable,

    active,
    onDismiss,
    onElementChange,
    onMount,
    onUnmount,

    openDirection,

    onTabbableIndexChange,
    singleSelectedIndex,
    navigatePastEnd,
    navigatePastStart,
    onSingleSelectedIndexChange,
    multiSelectionAriaPropName,
    multiSelectionMode,
    onSelectionChange,
    pageNavigationSize,
    parentDepth,
    disabled,
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
    untabbable ||= false;
    assertEmptyObject(void1);


    return (
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
                        disabled: disabled || false
                    },
                    singleSelectionParameters: {
                        singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected",
                        singleSelectionMode: singleSelectionMode || "disabled",
                    },
                    multiSelectionParameters: {
                        multiSelectionAriaPropName,
                        multiSelectionMode: multiSelectionMode || "disabled",
                        onSelectionChange
                    },
                    singleSelectionDeclarativeParameters: {
                        singleSelectedIndex,
                        onSingleSelectedIndexChange,
                    }
                }))}
        </ParentDepthContext.Provider>
    )
}))


export const MenuItem = memo((function MenuItem<MenuItemElement extends Element>({
    index,
    untabbable,
    onPress,
    getText,
    role,
    focusSelf,
    onPressingChange,
    render,
    imperativeHandle,
    onCurrentFocusedChanged,
    onCurrentFocusedInnerChanged,
    onElementChange,
    onMount,
    onUnmount,
    info: uinfo,
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    onTextContentChange,
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
                    focusSelf: focusSelf ?? defaultFocusSelf,
                    ...uinfo
                },
                context,
                textContentParameters: {
                    getText: useDefault("getText", getText),
                    onTextContentChange,
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
                singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
                multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
            })
        )
    );
}));
