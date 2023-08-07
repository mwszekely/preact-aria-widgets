import { createContext } from "preact";
import { assertEmptyObject, focus, memo } from "preact-prop-helpers";
import { useCallback, useImperativeHandle } from "preact/hooks";
import { Get12, Get8, OmitStrong, useContextWithWarning } from "../props.js";
import { UseMenubarContext, UseMenubarItemParameters, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo, useMenubar, useMenubarChild } from "../use-menubar.js";
import { GenericComponentProps, useComponent, useDefault } from "./util.js";


export type MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>,
    Get12<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters">,
    "orientation" | "ariaLabel"
>;

export type MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<
    UseMenubarItemReturnType<MenuItemElement, M>,
    Get8<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters", "info", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">,
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
            singleSelectedIndex,
            onSingleSelectedIndexChange,
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
            singleSelectionAriaPropName,
            singleSelectionMode: singleSelectionMode || "activation",
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName,
            multiSelectionMode: multiSelectionMode || "activation",
            onSelectionChange
        },
        refElementParameters: { onElementChange, onMount, onUnmount }
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
    info: uinfo,
    initiallyMultiSelected,
    multiSelectionDisabled,
    onMultiSelectChange,
    singleSelectionDisabled,
    ...void1
}: MenubarItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) {
    const defaultFocusSelf = useCallback((e: MenuItemElement | null) => focus(e as Element as HTMLElement), [])

    assertEmptyObject(void1);
    return useComponent(
        imperativeHandle,
        render,
        null,
        useMenubarChild<MenuItemElement>({
            info: { index, untabbable: untabbable || false, focusSelf: focusSelf ?? defaultFocusSelf, getSortValue, ...uinfo },
            context: useContextWithWarning(MenubarItemContext, "menubar"),
            textContentParameters: { getText: useDefault("getText", getText) },
            menuItemParameters: { onPress: onPress ?? null, role: role ?? "menuitem" },
            pressParameters: { onPressingChange },
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
            refElementParameters: { onElementChange, onMount, onUnmount },
            singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
            multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false, initiallyMultiSelected: initiallyMultiSelected || false, onMultiSelectChange }
        })
    );
};
