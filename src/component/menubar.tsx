import { createContext } from "preact";
import { assertEmptyObject, focus, memo } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { Get10, Get8, OmitStrong, useContextWithWarning } from "../props.js";
import { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo, useMenubar, useMenubarChild } from "../use-menubar.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";


export type MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>,
    Get10<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters">,
    "orientation" | "ariaLabel" | "singleSelectionMode" | "multiSelectionMode"
>;

export type MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenubarItemReturnType<MenuItemElement, M>,
    Get8<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters", "info", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">,
    "index"
> & { info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>; };

export const MenubarItemContext = createContext<UseMenubarContext<any, any>>(null!);

export const Menubar = memo((function Menubar<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({
    render,
    collator,
    disableHomeEndKeys,
    navigatePastEnd,
    navigatePastStart,
    pageNavigationSize,
    orientation,
    noTypeahead,
    untabbable,
    onTabbableIndexChange,
    disabled,
    singleSelectedIndex,
    onSingleSelectedIndexChange,
    typeaheadTimeout,
    role,
    ariaLabel,
    multiSelectionAriaPropName,
    multiSelectionMode,
    onSelectionChange,
    singleSelectionAriaPropName,
    singleSelectionMode,
    onNavigateLinear,
    onNavigateTypeahead,
    imperativeHandle,
    onElementChange,
    onMount,
    onUnmount,
    ...void1
}: MenubarProps<ContainerElement, ChildElement, LabelElement, UseMenubarSubInfo<ChildElement>>) {
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
            role: role ?? "menubar",
            disabled: disabled || false
        },
        rovingTabIndexParameters: {
            onTabbableIndexChange,
            untabbable: untabbable || false
        },
        typeaheadNavigationParameters: {
            onNavigateTypeahead,
            collator: useDefault("collator", collator),
            noTypeahead: useDefault("noTypeahead", noTypeahead),
            typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
        },
        labelParameters: {
            ariaLabel
        },
        singleSelectionParameters: {
            singleSelectionAriaPropName,
            singleSelectionMode: singleSelectionMode || "activation",
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName,
            multiSelectionMode: multiSelectionMode || "activation",
            onSelectionChange
        },
        singleSelectionDeclarativeParameters: {
            singleSelectedIndex,
            onSingleSelectedIndexChange
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
    });

    useImperativeHandle(imperativeHandle!, () => info)

    return (
        <MenubarItemContext.Provider value={info.contextChildren}>
            {render(info)}
        </MenubarItemContext.Provider>
    )
}))


export const MenubarItem = memo((function MenubarItem<MenuItemElement extends Element>({
    index,
    render,
    focusSelf,
    untabbable,
    getText,
    onPress,
    onPressingChange,
    role,
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
}: MenubarItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) {
    const defaultFocusSelf = useCallback((e: MenuItemElement | null) => focus(e as Element as HTMLElement), [])

    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        null,
        useMenubarChild<MenuItemElement>({
            info: { index, untabbable: untabbable || false, focusSelf: focusSelf ?? defaultFocusSelf, ...uinfo },
            context: useContextWithWarning(MenubarItemContext, "menubar"),
            textContentParameters: { getText: useDefault("getText", getText), onTextContentChange },
            menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
            pressParameters: { onPressingChange },
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
            refElementParameters: { onElementChange, onMount, onUnmount },
            singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
        })
    );
}));
