import { h } from "preact";
import { useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { PropModifier, overwriteWithWarning } from "./props";

export interface UseToolbarParameters extends UseListNavigationParameters<never, "navigationDirection", never, never, never> {
    toolbar: { orientation: "horizontal" | "vertical"; role?: string; }
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

export type UseToolbarChild<ChildElement extends Element, C, K extends string> = (i: UseToolbarChildParameters<C, K>) => UseToolbarChildReturnTypeWithHooks<ChildElement>;
export type UseToolbarChildParameters<C, K extends string> = UseListNavigationChildParameters<UseToolbarSubInfo<C>, K, never, never, never, C>;
export type UseToolbarChildReturnTypeInfo<ChildElement extends Element> = UseListNavigationChildReturnTypeInfo<ChildElement>
export interface UseToolbarChildReturnTypeWithHooks<ChildElement extends Element> extends UseToolbarChildReturnTypeInfo<ChildElement> {
    useToolbarChildProps: PropModifier<ChildElement>;
}

export function useToolbar<ContainerElement extends Element, ChildElement extends Element, C, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation, toolbar: { orientation, role } }: UseToolbarParameters): UseToolbarReturnTypeWithHooks<ContainerElement, ChildElement, C, K> {
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

    const useToolbarChild = useCallback(({ listNavigation, managedChild, rovingTabIndex, subInfo }: UseToolbarChildParameters<C, K>) => {
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
        overwriteWithWarning("useToolbar", p, "role", (role ?? "toolbar"));
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
