import { h } from "preact";
import { useMergedProps, usePress, UsePressReturnType } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, EnhancedEvent, enhanceEvent, OmitStrong } from "./props";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "./use-toolbar";


export interface UseMenubarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ContainerElement, ChildElement, M> {

}

export interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> {

}


export interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters"> {
    toolbarParameters: OmitStrong<UseToolbarParameters<MenuParentElement, MenuItemElement, M>["toolbarParameters"], "role">;
    menubarParameters: {
        /**
         * Generally "menu". Can be null if the role is provided elsewhere.
         */
        role: string | null;
    }
}

export interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarChildParameters<MenuItemElement, M> {
    //hasFocus: UseHasFocusParameters<MenuItemElement>;
    //pressParameters: OmitStrong<UseToolbarChildParameters<MenuItemElement, M>["pressParameters"], "onPressSync" | "focusSelf">;
    menuItemParameters: {
        role: "menuitem" | "menuitemcheckbox" | "menuitemradio";
        //disabled: DisabledType;
        onPress: null | ((e: EnhancedEvent<MenuItemElement, h.JSX.TargetedEvent<MenuItemElement>, { index: number }>) => void);
    }
}

export interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
    propsMenubar: h.JSX.HTMLAttributes<MenuParentElement>;
    context: UseMenubarContext<MenuParentElement, MenuItemElement, M>;
}
export interface UseMenubarItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildReturnType<MenuItemElement, M>, "pressParameters">, UsePressReturnType<MenuItemElement> { }




//export type UseMenuItemProps<MenuItemElement extends Element> = (props: h.JSX.HTMLAttributes<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement>;
//export type UseMenuItem<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = (args: UseMenuItemParameters<MenuItemElement, M>) => UseMenuItemReturnType<MenuItemElement, M>;



export function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    singleSelectionDeclarativeParameters,
    sortableChildrenParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    staggeredChildrenParameters,
    toolbarParameters,
    menubarParameters: { role },
    labelParameters
}: UseMenubarParameters<MenuParentElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, UseMenubarSubInfo<MenuItemElement>> {

    debugLog("useMenubar");

    const {
        linearNavigationReturn,
        childrenHaveFocusReturn,
        context,
        propsLabel,
        propsToolbar: propsMenubar,
        paginatedChildrenReturn,
        staggeredChildrenReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        toolbarReturn,
        typeaheadNavigationReturn,
        randomIdInputReturn,
        randomIdLabelReturn,
        ..._rest
    } = useToolbar<MenuParentElement, MenuItemElement, LabelElement>({
        linearNavigationParameters,
        rovingTabIndexParameters,
        rearrangeableChildrenParameters,
        sortableChildrenParameters,
        singleSelectionDeclarativeParameters,
        typeaheadNavigationParameters,
        staggeredChildrenParameters,
        toolbarParameters: { role, ...toolbarParameters },
        labelParameters
    });

    return {
        childrenHaveFocusReturn,
        context,
        propsLabel,
        propsMenubar,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        toolbarReturn,
        typeaheadNavigationReturn,
        randomIdInputReturn,
        randomIdLabelReturn
    }
}


export function useMenubarChild<MenuItemElement extends Element>({
    managedChildParameters,
    singleSelectionChildParameters,
    completeListNavigationChildParameters,
    rovingTabIndexChildParameters,
    sortableChildParameters,
    context,
    textContentParameters,
    menuItemParameters: { onPress, role }
}: UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>> {
    debugLog("useMenuItem", managedChildParameters.index);
    const disabled = singleSelectionChildParameters.disabled;

    const focusSelf = useCallback((e: any) => (e as Element as HTMLElement).focus?.(), [])

    const {
        hasCurrentFocusReturn,
        pressParameters,
        props,
        refElementReturn,
        singleSelectionChildReturn,
        rovingTabIndexChildReturn,
        managedChildReturn,
        staggeredChildReturn,
        paginatedChildReturn
    } = useToolbarChild<MenuItemElement>({
        completeListNavigationChildParameters,
        context,
        managedChildParameters,
        rovingTabIndexChildParameters,
        sortableChildParameters,
        textContentParameters,
        singleSelectionChildParameters,
    });
    
    const { pressReturn } = usePress<MenuItemElement>({ pressParameters: { ...pressParameters, focusSelf }, refElementReturn })

    /*function useMenuItemProps(props: h.JSX.HTMLAttributes<MenuItemElement>) {
        overwriteWithWarning("useMenuItem", props, "role", role);
        return useMergedProps(pressReturn.propsStable, pressReturn.propsUnstable, props);
    }*/

    props.role = role;

    return {
        hasCurrentFocusReturn,
        pressReturn,
        paginatedChildReturn,
        refElementReturn,
        props: useMergedProps(props, pressReturn.propsUnstable),
        singleSelectionChildReturn,
        rovingTabIndexChildReturn,
        staggeredChildReturn,
        managedChildReturn
    };
}
