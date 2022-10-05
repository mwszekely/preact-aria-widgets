import { h } from "preact";
import { useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { PropModifier, overwriteWithWarning } from "./props";

export interface UseToolbarParameters extends UseListNavigationParameters<never, "navigationDirection", never, never, never> {
    toolbar: { orientation: "horizontal" | "vertical"; role?: string; }
}

export interface UseToolbarReturnTypeInfo<ChildElement extends Element> extends UseListNavigationReturnTypeInfo<ChildElement, {}, never> {

}

export interface UseToolbarReturnTypeWithHooks<ContainerElement extends Element, ChildElement extends Element> extends UseToolbarReturnTypeInfo<ChildElement> {
    useToolbarProps: PropModifier<ContainerElement>;
    useToolbarChild: UseToolbarChild<ChildElement>;
}

export type UseToolbarChild<ChildElement extends Element> = (i: UseToolbarChildParameters) => UseToolbarChildReturnTypeWithHooks<ChildElement>;
export type UseToolbarChildParameters = UseListNavigationChildParameters<never, never, never, never, never, never>;
export type UseToolbarChildReturnTypeInfo<ChildElement extends Element> = UseListNavigationChildReturnTypeInfo<ChildElement>
export interface UseToolbarChildReturnTypeWithHooks<ChildElement extends Element> extends UseToolbarChildReturnTypeInfo<ChildElement> {
    useToolbarChildProps: PropModifier<ChildElement>;
}

export function useToolbar<ContainerElement extends Element, ChildElement extends Element>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation, toolbar: { orientation, role } }: UseToolbarParameters): UseToolbarReturnTypeWithHooks<ContainerElement, ChildElement> {
    const {
        useListNavigationChild,
        useListNavigationProps,
        ...listRet
    } = useListNavigation<ContainerElement, ChildElement, {}, never>({ 
        linearNavigation: { ...linearNavigation, navigationDirection: orientation }, 
        listNavigation, 
        managedChildren, 
        rovingTabIndex, 
        typeaheadNavigation 
    });

    const useToolbarChild = useCallback((i: UseToolbarChildParameters) => {
        const { useListNavigationChildProps, ...listRet } =  useListNavigationChild(i);
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
        ...listRet,
        useToolbarProps,
        useToolbarChild
    }
}
