import { JSX, assertEmptyObject, createContext, focus, identity, memo, OmitStrong, useCallback, useContext, useEnsureStability, TagToElement } from "preact-prop-helpers/preact";
import { Get16, useContextWithWarning } from "../props.js";
import { useMenu, UseMenuContext, useMenuItem, UseMenuItemReturnType, UseMenuParameters, UseMenuReturnType } from "../use-menu.js";
import { UseMenubarSubInfo } from "../use-menubar.js";
import { MenubarItemProps } from "./menubar.js";
import { GenericComponentProps, ParentDepthContext, useComponent, useDefault } from "./util.js";

export type MenuProps<MenuSurfaceElement extends keyof JSX.IntrinsicElements, MenuParentElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, MenuButtonElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>,
    Get16<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters", "menuSurfaceParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "dismissParameters", "escapeDismissParameters", "toolbarParameters", "singleSelectionParameters", "activeElementParameters", "refElementParameters", "dismissParameters", "modalParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters", "processedIndexManglerParameters">,
    "active" | "onDismiss" | "openDirection" | "orientation" | "onOpen"
>;

export type MenuItemProps<MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenuItemReturnType<MenuItemElement, M>,
    MenubarItemProps<MenuItemElement, M>,
    "index"
> & { info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>; };

const MenuItemContext = createContext<UseMenuContext<any, any>>(null!);

export const Menu = /* @__PURE__ */ memo((function Menu<SurfaceElement extends keyof JSX.IntrinsicElements, ParentElement extends keyof JSX.IntrinsicElements, ChildElement extends keyof JSX.IntrinsicElements, ButtonElement extends keyof JSX.IntrinsicElements>({
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

    getSortValueAt,

    render,

    imperativeHandle,
    compare,
    getIndex,
    ...void1

}: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement, UseMenubarSubInfo<ChildElement>>) {
    getSortValueAt ??= identity;
    useEnsureStability("Menu", getSortValueAt);

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
                    },
                    processedIndexManglerParameters: {
                        getSortValueAt,
                        compare,
                        getIndex: useDefault("getIndex", getIndex)
                    }
                }))}
        </ParentDepthContext.Provider>
    )
}))


export const MenuItem = /* @__PURE__ */ memo((function MenuItem<MenuItemElement extends keyof JSX.IntrinsicElements>({
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
    multiSelectionDisabled,
    singleSelectionDisabled,
    onTextContentChange,
    multiSelected,
    onMultiSelectedChange,
    ...void1
}: MenuItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) {
    const context = useContextWithWarning(MenuItemContext, "menu");
    const defaultFocusSelf = useCallback((e: TagToElement<MenuItemElement> | null) => focus(e as Element as HTMLElement), []);
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
                multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
                multiSelectionChildDeclarativeParameters: { multiSelected: multiSelected ?? null, onMultiSelectedChange }
            })
        )
    );
}));
