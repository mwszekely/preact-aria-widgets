import { h } from "preact";
import { useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo, useMergedProps } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { PropModifier, overwriteWithWarning } from "./props";

interface TP {
    orientation: "horizontal" | "vertical";

    // Should be "toolbar" for toolbars, null if someone else takes care of the role, and whatever string is applicable otherwise
    role: string | null;
};

export type ToolbarOmits = keyof TP;

export interface UseToolbarParameters<TBOmits extends ToolbarOmits> extends UseListNavigationParameters<never, "navigationDirection", never, never, never> {
    toolbarParameters: Omit<TP, TBOmits>;
}

export interface UseToolbarReturnTypeInfo<ContainerElement extends Element, ChildElement extends Element, C, K extends string> extends UseListNavigationReturnTypeInfo<ContainerElement, ChildElement, UseToolbarSubInfo<C>, K> {
    toolbarReturn: { propsUnstable: h.JSX.HTMLAttributes<ContainerElement> };
}

export interface UseToolbarSubInfo<C> {
    subInfo: C;
}

export interface UseToolbarReturnTypeWithHooks<ContainerElement extends Element, ChildElement extends Element, C, K extends string> extends UseToolbarReturnTypeInfo<ContainerElement, ChildElement, C, K> {
    //useToolbarProps: PropModifier<ContainerElement>;
    useToolbarChild: UseToolbarChild<ChildElement, C, K>;
}

export type UseToolbarChild<ChildElement extends Element, C, K extends string> = (i: UseToolbarChildParameters<ChildElement, C, K, C>) => UseToolbarChildReturnTypeWithHooks<ChildElement>;
export interface UseToolbarChildParameters<E extends Element, C, K extends string, SubbestInfo> extends UseListNavigationChildParameters<E, UseToolbarSubInfo<C>, K, never, never, never, SubbestInfo> { }
export interface UseToolbarChildReturnTypeInfo<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement> { }
export interface UseToolbarChildReturnTypeWithHooks<ChildElement extends Element> extends UseToolbarChildReturnTypeInfo<ChildElement> {
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
export function useToolbar<ContainerElement extends Element, ChildElement extends Element, C, K extends string>({
    linearNavigationParameters,
    listNavigationParameters,
    managedChildrenParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    toolbarParameters: { orientation, role }
}: UseToolbarParameters<never>): UseToolbarReturnTypeWithHooks<ContainerElement, ChildElement, C, K> {
    const {
        useListNavigationChild,
        linearNavigationReturn,
        listNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        ..._void
    } = useListNavigation<ContainerElement, ChildElement, UseToolbarSubInfo<C>, K>({
        linearNavigationParameters: { ...linearNavigationParameters, navigationDirection: orientation },
        listNavigationParameters,
        managedChildrenParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });

    const useToolbarChild = useCallback<UseToolbarChild<ChildElement, C, K>>(({
        refElementReturn,
        listNavigationChildParameters,
        managedChildParameters,
        rovingTabIndexChildParameters,
        subInfo,
        ..._void
    }) => {
        const { rovingTabIndexChildReturn, hasCurrentFocusParameters } = useListNavigationChild({
            listNavigationChildParameters,
            managedChildParameters,
            rovingTabIndexChildParameters,
            refElementReturn,
            subInfo: { subInfo }
        });

        return {
            hasCurrentFocusParameters,
            rovingTabIndexChildReturn
        }
    }, []);

    return {
        toolbarReturn: { propsUnstable: { role: role ?? undefined } },
        useToolbarChild,
        linearNavigationReturn,
        listNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    }
}
