import { h } from "preact";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo, useMergedProps } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { PropModifier, overwriteWithWarning } from "./props";



export interface UseToolbarParameters<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseListNavigationParameters<ChildElement, M> {
    toolbarParameters: {
        orientation: "horizontal" | "vertical";
    
        // Should be "toolbar" for toolbars, null if someone else takes care of the role, and whatever string is applicable otherwise
        role: string | null;
    }
}

export interface UseToolbarReturnTypeInfo<ContainerElement extends Element, ChildElement extends Element> extends UseListNavigationReturnTypeInfo<ContainerElement, ChildElement> {
    toolbarReturn: { propsUnstable: h.JSX.HTMLAttributes<ContainerElement> };
}

export interface UseToolbarSubInfo<C> {
    subInfo: C;
}

export interface UseToolbarReturnTypeWithHooks<ContainerElement extends Element, ChildElement extends Element> extends UseToolbarReturnTypeInfo<ContainerElement, ChildElement> {
    //useToolbarProps: PropModifier<ContainerElement>;
    useToolbarChild: UseToolbarChild<ChildElement>;
}

export type UseToolbarChild<ChildElement extends Element> = (i: UseToolbarChildParameters<ChildElement>) => UseToolbarChildReturnTypeWithHooks<ChildElement>;
export interface UseToolbarChildParameters<E extends Element> extends UseListNavigationChildParameters<E> { }
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
export function useToolbar<ContainerElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    managedChildrenReturn,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    toolbarParameters: { orientation, role }
}: UseToolbarParameters<ChildElement, M>): UseToolbarReturnTypeWithHooks<ContainerElement, ChildElement> {
    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        ..._void
    } = useListNavigation<ContainerElement, ChildElement, M>({
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
