import { h } from "preact";
import { useListNavigation, UseListNavigationParameters, useMergedProps, usePress, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationReturnTypeInfo } from "preact-prop-helpers";
import { returnFalse, useEnsureStability, usePassiveState } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { MenuSurfaceOmits, UseMenuSurfaceParameters, UseMenuSurfaceReturnTypeInfo } from "./use-menu-surface";
import { ToolbarOmits, useToolbar, UseToolbarChildParameters, UseToolbarChildReturnTypeInfo, UseToolbarParameters, UseToolbarReturnTypeInfo } from "./use-toolbar";
import { debugLog, DisabledType, EnhancedEvent, enhanceEvent, overwriteWithWarning } from "./props";


export interface MenuItemSubInfo<C> {
    subInfo: C;
}



export interface UseMenubarParameters<TBOmits extends ToolbarOmits> extends UseToolbarParameters<TBOmits> {
}

export interface UseMenuItemParameters<MenuItemElement extends Element, C, K extends string, SubbestInfo> extends UseToolbarChildParameters<MenuItemElement, MenuItemSubInfo<C>, K, SubbestInfo> {
    //hasFocus: UseHasFocusParameters<MenuItemElement>;
    menuItemParameters: {
        role: string;
        disabled: DisabledType;
        onPress: (e: EnhancedEvent<MenuItemElement, h.JSX.TargetedEvent<MenuItemElement>, { index: number }>) => void;
    }
}

export interface UseMenubarReturnTypeInfo<MenuParentElement extends Element, MenuItemElement extends Element, C, K extends string> extends UseToolbarReturnTypeInfo<MenuParentElement, MenuItemElement, MenuItemSubInfo<C>, K> { }
export interface UseMenuItemReturnTypeInfo<MenuItemElement extends Element> extends UseToolbarChildReturnTypeInfo<MenuItemElement> { }


export interface UseMenubarReturnTypeWithHooks<MenuParentElement extends Element, MenuItemElement extends Element, C, K extends string> extends UseMenubarReturnTypeInfo<MenuParentElement, MenuItemElement, C, K> {
    useMenubarProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;
    useMenuItem: UseMenuItem<MenuItemElement, C, K>;
}

export interface UseMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseMenuItemReturnTypeInfo<MenuItemElement> { }

export interface UseMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseMenuItemReturnTypeInfo<MenuItemElement> {
    useMenuItemProps: UseMenuItemProps<MenuItemElement>;
}

export type UseMenuItemProps<MenuItemElement extends Element> = (props: h.JSX.HTMLAttributes<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement>;

export type UseMenuItem<MenuItemElement extends Element, C, K extends string> = (args: UseMenuItemParameters<MenuItemElement, C, K, C>) => UseMenuItemReturnTypeWithHooks<MenuItemElement>;



export function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, C, K extends string>({
    linearNavigationParameters,
    listNavigationParameters,
    managedChildrenParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    toolbarParameters
}: UseMenubarParameters<never>): UseMenubarReturnTypeWithHooks<MenuParentElement, MenuItemElement, C, K> {

    debugLog("useMenubar");

    const {
        useToolbarChild,
        linearNavigationReturn,
        listNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        toolbarReturn,
        typeaheadNavigationReturn,
        ..._rest
    } = useToolbar<MenuParentElement, MenuItemElement, MenuItemSubInfo<C>, K>({
        linearNavigationParameters,
        listNavigationParameters,
        rovingTabIndexParameters,
        managedChildrenParameters,
        typeaheadNavigationParameters,
        toolbarParameters
    })

    const { role } = toolbarParameters;

    const useMenuItem = useCallback<UseMenuItem<MenuItemElement, C, K>>(({
        listNavigationChildParameters,
        managedChildParameters,
        refElementReturn,
        rovingTabIndexChildParameters,


        subInfo,
        menuItemParameters: { disabled, onPress, role }
    }): UseMenuItemReturnTypeWithHooks<MenuItemElement> => {
        debugLog("useMenuItem", managedChildParameters.index);

        const { pressReturn, ..._void } = usePress<MenuItemElement>({
            pressParameters: {
                onClickSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { index: managedChildParameters.index })),
                exclude: undefined,
                focusSelf: rovingTabIndexChildParameters.focusSelf
            },
            refElementReturn
        });

        const {
            hasCurrentFocusParameters,
            rovingTabIndexChildReturn
        } = useToolbarChild({
            listNavigationChildParameters,
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
    }, []);


    function useMenubarProps(props: h.JSX.HTMLAttributes<MenuParentElement>) {
        const { propsStable: p1 } = linearNavigationReturn;
        const { propsUnstable: p2 } = toolbarReturn;
        const { propsStable: p3 } = typeaheadNavigationReturn
        overwriteWithWarning("useMenubar", props, "role", role ?? undefined);
        return useMergedProps(p1, p2, p3, props);
    }


    return {
        useMenubarProps,
        useMenuItem,
        linearNavigationReturn,
        listNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        toolbarReturn,
        typeaheadNavigationReturn
    }
}
