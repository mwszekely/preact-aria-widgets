import { h } from "preact";
import { useMergedProps, usePress } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, DisabledType, EnhancedEvent, enhanceEvent, overwriteWithWarning } from "./props";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnTypeInfo, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "./use-toolbar";


export interface MenuItemSubInfo<C> {
    subInfo: C;
}



export interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> {

}


export interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> {
}

export interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends Omit<UseToolbarChildParameters<MenuItemElement, M>, "pressParameters"> {
    //hasFocus: UseHasFocusParameters<MenuItemElement>;
    pressParameters: Pick<UseToolbarChildParameters<MenuItemElement, M>["pressParameters"], "">
    menuItemParameters: {
        role: string;
        disabled: DisabledType;
        onPress: (e: EnhancedEvent<MenuItemElement, h.JSX.TargetedEvent<MenuItemElement>, { index: number }>) => void;
    }
}

export interface UseMenubarReturnTypeInfo<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarReturnType<MenuParentElement, MenuItemElement, M> { }
export interface UseMenuItemReturnTypeInfo<MenuItemElement extends Element> extends UseToolbarChildReturnTypeInfo<MenuItemElement> { }


export interface UseMenubarReturnTypeWithHooks<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarReturnTypeInfo<MenuParentElement, MenuItemElement, M> {
}

export interface UseMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseMenuItemReturnTypeInfo<MenuItemElement> { }

export interface UseMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseMenuItemReturnTypeInfo<MenuItemElement> {
    useMenuItemProps: UseMenuItemProps<MenuItemElement>;
}

export type UseMenuItemProps<MenuItemElement extends Element> = (props: h.JSX.HTMLAttributes<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement>;

export type UseMenuItem<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = (args: UseMenuItemParameters<MenuItemElement, M>) => UseMenuItemReturnTypeWithHooks<MenuItemElement>;



export function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    singleSelectionParameters,
    sortableChildrenParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    toolbarParameters
}: UseMenubarParameters<MenuParentElement, MenuItemElement, M>): UseMenubarReturnTypeWithHooks<MenuParentElement, MenuItemElement, M> {

    debugLog("useMenubar");

    const {
        linearNavigationReturn,
        childrenHaveFocusReturn,
        context,
        props,
        rearrangeableChildrenReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        toolbarReturn,
        typeaheadNavigationReturn,
        ..._rest
    } = useToolbar<MenuParentElement, MenuItemElement, M>({
        linearNavigationParameters,
        rovingTabIndexParameters,
        rearrangeableChildrenParameters,
        singleSelectionParameters,
        sortableChildrenParameters,
        typeaheadNavigationParameters,
        toolbarParameters
    })

    const { role } = toolbarParameters;


    function useMenubarProps(props: h.JSX.HTMLAttributes<MenuParentElement>) {
        const { propsStable: p1 } = linearNavigationReturn;
        const { propsUnstable: p2 } = toolbarReturn;
        const { propsStable: p3 } = typeaheadNavigationReturn
        overwriteWithWarning("useMenubar", props, "role", role ?? undefined);
        return useMergedProps(p1, p2, p3, props);
    }


    return {
        useMenubarProps,
        childrenHaveFocusReturn,
        context,
        props,
        rearrangeableChildrenReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        useMenuItem,
        linearNavigationReturn,
        listNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        toolbarReturn,
        typeaheadNavigationReturn
    }
}


function useMenubarChild<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    pressParameters,
    managedChildParameters,
    singleSelectionChildParameters,
    typeaheadNavigationChildParameters,
    completeListNavigationChildParameters,


    subInfo,
    menuItemParameters: { disabled, onPress, role }
}: UseMenuItemParameters<MenuItemElement, M>): UseMenuItemReturnTypeWithHooks<MenuItemElement> {
    debugLog("useMenuItem", managedChildParameters.index);


    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn
    } = useToolbarChild<MenuItemElement>({
        listNavigationChildParameters,
        pressParameters: {
            onClickSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { index: managedChildParameters.index })),
            exclude: undefined,
            focusSelf: rovingTabIndexChildParameters.focusSelf
        },
        singleSelectionChildParameters,
        typeaheadNavigationChildParameters,
        completeListNavigationChildParameters,
        managedChildParameters,
        rovingTabIndexChildParameters,
        refElementReturn,
        subInfo: { subInfo }
    });

    function useMenuItemProps(props: h.JSX.HTMLAttributes<MenuItemElement>) {
        overwriteWithWarning("useMenuItem", props, "role", role);
        return useMergedProps(pressReturn.propsStable, pressReturn.propsUnstable, props);
    }

    return {
        useMenuItemProps,
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn
    };
}
