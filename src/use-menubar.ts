import { h } from "preact";
import { UseHasFocusParameters, useListNavigation, UseListNavigationParameters, useMergedProps, usePress, useRandomId, useRefElement, useStableCallback, useStableGetter, useState, useTimeout } from "preact-prop-helpers";
import { UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationReturnTypeInfo } from "preact-prop-helpers";
import { returnFalse, useEnsureStability, usePassiveState } from "preact-prop-helpers";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { MenuSurfaceOmits, UseMenuSurfaceParameters, UseMenuSurfaceReturnTypeInfo } from "./use-menu-surface";
import { ToolbarOmits, useToolbar, UseToolbarChildParameters, UseToolbarParameters } from "./use-toolbar";
import { debugLog, DisabledType, EnhancedEvent, enhanceEvent, overwriteWithWarning } from "./props";


export interface MenuItemSubInfo<C> {
    subInfo: C;
}



export interface UseMenubarParameters<TBOmits extends ToolbarOmits> extends UseToolbarParameters<TBOmits> {
}

export interface UseMenuItemParameters<MenuItemElement extends Element, C, K extends string, SubbestInfo> extends UseToolbarChildParameters<MenuItemElement, MenuItemSubInfo<C>, K, SubbestInfo> {
    hasFocus: UseHasFocusParameters<MenuItemElement>;
    menuItem: { 
        role: string;
        disabled: DisabledType; 
        onPress: (e: EnhancedEvent<MenuItemElement, h.JSX.TargetedEvent<MenuItemElement>, { index: number }>) => void; 
    }
}

export interface UseMenubarReturnTypeInfo<MenuItemElement extends Element, C, K extends string> extends UseListNavigationReturnTypeInfo<MenuItemElement, MenuItemSubInfo<C>, K> { }
export interface UseMenuItemReturnTypeInfo<MenuItemElement extends Element> extends UseListNavigationChildReturnTypeInfo<MenuItemElement> { }


export interface UseMenubarReturnTypeWithHooks<MenuParentElement extends Element, MenuItemElement extends Element, C, K extends string> extends UseMenubarReturnTypeInfo<MenuItemElement, C, K> {
    useMenubarProps: (props: h.JSX.HTMLAttributes<MenuParentElement>) => h.JSX.HTMLAttributes<MenuParentElement>;
    useMenuItem: UseMenuItem<MenuItemElement, C, K>;
}

export interface UseMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseMenuItemReturnTypeInfo<MenuItemElement> { }

export interface UseMenuItemReturnTypeWithHooks<MenuItemElement extends Element> extends UseMenuItemReturnTypeInfo<MenuItemElement> {
    useMenuItemProps: UseMenuItemProps<MenuItemElement>;
}

export type UseMenuItemProps<MenuItemElement extends Element> = (props: h.JSX.HTMLAttributes<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement>;

export type UseMenuItem<MenuItemElement extends Element, C, K extends string> = (args: UseMenuItemParameters<MenuItemElement, C, K, C>) => UseMenuItemReturnTypeWithHooks<MenuItemElement>;



export function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, C, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation, toolbar }: UseMenubarParameters<never>): UseMenubarReturnTypeWithHooks<MenuParentElement, MenuItemElement, C, K> {

    debugLog("useMenubar");

    const { useToolbarChild, useToolbarProps, ...toolbarInfo } = useToolbar<MenuParentElement, MenuItemElement, C, K>({ linearNavigation, listNavigation, rovingTabIndex, managedChildren, typeaheadNavigation, toolbar })

    const { role } = toolbar;

    const useMenuItem = useCallback<UseMenuItem<MenuItemElement, C, K>>(({ listNavigation, managedChild, rovingTabIndex, subInfo, menuItem: { disabled, onPress, role }, hasFocus }) => {
        debugLog("useMenuItem", managedChild.index);

        const pressProps = usePress<MenuItemElement>({
            onClickSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { index: managedChild.index })),
            exclude: undefined,
            hasFocus,
            focusSelf: rovingTabIndex.focusSelf
        });

        const { toolbarChildProps, ...listNavRet } = useToolbarChild({ listNavigation, managedChild, rovingTabIndex, subInfo });

        function useMenuItemProps(props: h.JSX.HTMLAttributes<MenuItemElement>) {
            overwriteWithWarning("useMenuItem", props, "role", role);
            return useMergedProps(pressProps, useMergedProps(toolbarChildProps, props));
        }

        return { useMenuItemProps, ...listNavRet };
    }, []);


    function useMenubarProps(props: h.JSX.HTMLAttributes<MenuParentElement>) {
        overwriteWithWarning("useMenubar", props, "role", role ?? undefined);
        return useToolbarProps(props);
    }


    return {
        useMenubarProps,
        useMenuItem,
        ...toolbarInfo,
    }
}
