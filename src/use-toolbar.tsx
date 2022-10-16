import { h } from "preact";
import { useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { PropModifier, overwriteWithWarning } from "./props";

interface TP { 
    orientation: "horizontal" | "vertical"; 

    // Should be "toolbar" for toolbars, null if someone else takes care of the role, and whatever string is applicable otherwise
    role: string | null; 
};

export type ToolbarOmits = keyof TP;

export interface UseToolbarParameters<TBOmits extends ToolbarOmits> extends UseListNavigationParameters<never, "navigationDirection", never, never, never> {
    toolbar: Omit<TP, TBOmits>;
}

export interface UseToolbarReturnTypeInfo<ChildElement extends Element, C, K extends string> extends UseListNavigationReturnTypeInfo<ChildElement, UseToolbarSubInfo<C>, K> {

}

export interface UseToolbarSubInfo<C> {
    subInfo: C;
}

export interface UseToolbarReturnTypeWithHooks<ContainerElement extends Element, ChildElement extends Element, C, K extends string> extends UseToolbarReturnTypeInfo<ChildElement, C, K> {
    useToolbarProps: PropModifier<ContainerElement>;
    useToolbarChild: UseToolbarChild<ChildElement, C, K>;
}

export type UseToolbarChild<ChildElement extends Element, C, K extends string> = (i: UseToolbarChildParameters<ChildElement, C, K, C>) => UseToolbarChildReturnTypeWithHooks<ChildElement>;
export interface UseToolbarChildParameters<E extends Element, C, K extends string, SubbestInfo> extends UseListNavigationChildParameters<E, UseToolbarSubInfo<C>, K, never, never, never, SubbestInfo> { }
export interface UseToolbarChildReturnTypeInfo<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement> { }
export interface UseToolbarChildReturnTypeWithHooks<ChildElement extends Element> extends UseToolbarChildReturnTypeInfo<ChildElement> {
    useToolbarChildProps: PropModifier<ChildElement>;
}

/**
 * A toolbar is just a collection of widgets in an expected order and with the usual keyboard navigation stuff.
 * 
 * The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems, 
 * but a toolbar is the more general case, being able to contain anything at all. 
 * A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar
 * 
 * Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).
 * 
 * @param param0 
 * @returns 
 */
export function useToolbar<ContainerElement extends Element, ChildElement extends Element, C, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation, toolbar: { orientation, role } }: UseToolbarParameters<never>): UseToolbarReturnTypeWithHooks<ContainerElement, ChildElement, C, K> {
    const {
        useListNavigationChild,
        useListNavigationProps,
        ...listRet
    } = useListNavigation<ContainerElement, ChildElement, UseToolbarSubInfo<C>, K>({
        linearNavigation: { ...linearNavigation, navigationDirection: orientation },
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });

    const useToolbarChild = useCallback<UseToolbarChild<ChildElement, C, K>>(({ listNavigation, managedChild, rovingTabIndex, subInfo }) => {
        const { useListNavigationChildProps, ...listRet } = useListNavigationChild({
            listNavigation,
            managedChild,
            rovingTabIndex,
            subInfo: { subInfo }
        });

        return {
            ...listRet,
            useToolbarChildProps: useListNavigationChildProps
        }
    }, [])

    function useToolbarProps(p: h.JSX.HTMLAttributes<ContainerElement>) {
        overwriteWithWarning("useToolbar", p, "role", role ?? undefined);
        return useListNavigationProps(p);
    }

    return {
        useToolbarProps,
        useToolbarChild,
        linearNavigation: listRet.linearNavigation,
        listNavigation: listRet.listNavigation,
        managedChildren: listRet.managedChildren,
        rovingTabIndex: listRet.rovingTabIndex,
        typeaheadNavigation: listRet.typeaheadNavigation
    }
}
