import { h } from "preact";
import { debugLog, DisabledType, EnhancedEvent, enhanceEvent } from "./props";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "./use-toolbar";


export interface MenuItemSubInfo<C> {
    subInfo: C;
}



export interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> {

}


export interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> {
}

export interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends Omit<UseToolbarChildParameters<MenuItemElement, M>, "pressParameters"> {
    //hasFocus: UseHasFocusParameters<MenuItemElement>;
    pressParameters: Omit<UseToolbarChildParameters<MenuItemElement, M>["pressParameters"], "onPressSync">;
    menuItemParameters: {
        role: string;
        disabled: DisabledType;
        onPress: (e: EnhancedEvent<MenuItemElement, h.JSX.TargetedEvent<MenuItemElement>, { index: number }>) => void;
    }
}

export interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarReturnType<MenuParentElement, MenuItemElement, M> { }
export interface UseMenubarItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarChildReturnType<MenuItemElement, M> { }




//export type UseMenuItemProps<MenuItemElement extends Element> = (props: h.JSX.HTMLAttributes<MenuItemElement>) => h.JSX.HTMLAttributes<MenuItemElement>;
//export type UseMenuItem<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = (args: UseMenuItemParameters<MenuItemElement, M>) => UseMenuItemReturnType<MenuItemElement, M>;



export function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    singleSelectionParameters,
    sortableChildrenParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    toolbarParameters
}: UseMenubarParameters<MenuParentElement, MenuItemElement, M>): UseMenubarReturnType<MenuParentElement, MenuItemElement, M> {

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
    });

    return {
        childrenHaveFocusReturn,
        context,
        props,
        rearrangeableChildrenReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        toolbarReturn,
        typeaheadNavigationReturn
    }
}


export function useMenubarChild<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    pressParameters: { ...pressParameters },
    managedChildParameters,
    singleSelectionChildParameters,
    typeaheadNavigationChildParameters,
    completeListNavigationChildParameters,
    childrenHaveFocusChildContext,
    managedChildContext,
    rovingTabIndexChildContext,
    singleSelectionContext,
    typeaheadNavigationChildContext,
    menuItemParameters: { disabled, onPress, role }
}: UseMenubarItemParameters<MenuItemElement, M>): UseMenubarItemReturnType<MenuItemElement, M> {
    debugLog("useMenuItem", managedChildParameters.index);


    const {
        hasCurrentFocusReturn,
        pressReturn,
        props,
        singleSelectionChildReturn,
        rovingTabIndexChildReturn,
        managedChildReturn
    } = useToolbarChild<MenuItemElement, M>({
        childrenHaveFocusChildContext,
        completeListNavigationChildParameters,
        managedChildContext,
        managedChildParameters,
        pressParameters: {
            onPressSync: (e) => (disabled ? null : onPress)?.(enhanceEvent(e, { index: managedChildParameters.index })),
            ...pressParameters
        },
        rovingTabIndexChildContext,
        singleSelectionChildParameters,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        typeaheadNavigationChildParameters
        /*listNavigationChildParameters,
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
        subInfo: { subInfo }*/
    });

    /*function useMenuItemProps(props: h.JSX.HTMLAttributes<MenuItemElement>) {
        overwriteWithWarning("useMenuItem", props, "role", role);
        return useMergedProps(pressReturn.propsStable, pressReturn.propsUnstable, props);
    }*/

    props.role = role;

    return {
        hasCurrentFocusReturn,
        pressReturn,
        props,
        singleSelectionChildReturn,
        rovingTabIndexChildReturn,
        managedChildReturn
    };
}
