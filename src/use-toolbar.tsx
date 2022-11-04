import { h } from "preact";
import { useCompleteListNavigation, UseCompleteListNavigationChildParameters, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseListNavigationSingleSelectionChildInfo, UseListNavigationChildReturnType } from "preact-prop-helpers";




export interface UseToolbarParameters<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends UseCompleteListNavigationParameters<ContainerElement, ChildElement, M> {
    toolbarParameters: {
        orientation: "horizontal" | "vertical";
    
        // Should be "toolbar" for toolbars, null if someone else takes care of the role, and whatever string is applicable otherwise
        role: string | null;
    };
}

export interface UseToolbarReturnType<ContainerElement extends Element, ChildElement extends Element> extends UseCompleteListNavigationReturnType<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>> {
    toolbarReturn: { propsUnstable: h.JSX.HTMLAttributes<ContainerElement> };
}

export interface UseToolbarSubInfo<ChildElement extends Element> extends UseListNavigationSingleSelectionChildInfo<ChildElement> {

}


//export type UseToolbarChild<ChildElement extends Element, C, K extends string> = (i: UseToolbarChildParameters<ChildElement, C, K, C>) => UseToolbarChildReturnTypeWithHooks<ChildElement>;
export interface UseToolbarChildParameters<E extends Element, M extends UseToolbarSubInfo<E>> extends UseCompleteListNavigationChildParameters<E, M> { }
export interface UseToolbarChildReturnTypeInfo<ChildElement extends Element> extends UseListNavigationChildReturnType<ChildElement> { }
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
export function useToolbar<ContainerElement extends Element, ChildElement extends Element>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    singleSelectionParameters,
    sortableChildrenParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    toolbarParameters: { orientation, role }
}: UseToolbarParameters<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarReturnType<ContainerElement, ChildElement> {
    type M =  UseToolbarSubInfo<ChildElement>;
    const {
       childrenHaveFocusReturn,
       context,
       linearNavigationReturn,
       managedChildrenReturn,
       props,
       rearrangeableChildrenReturn,
       rovingTabIndexReturn,
       singleSelectionReturn,
       sortableChildrenReturn,
       typeaheadNavigationReturn,
        ..._void
    } = useCompleteListNavigation<ContainerElement, ChildElement, M>({
        linearNavigationParameters: { ...linearNavigationParameters, navigationDirection: orientation },
        rearrangeableChildrenParameters,
        singleSelectionParameters,
        sortableChildrenParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });

    return {
        toolbarReturn: { propsUnstable: { role: role ?? undefined } },
        context,
        childrenHaveFocusReturn,
        props,
        rearrangeableChildrenReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        linearNavigationReturn,
        //listNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    }
}


export function useToolbarChild<ChildElement extends Element>({
    refElementReturn,
    listNavigationChildParameters,
    managedChildParameters,
    rovingTabIndexChildParameters,
    subInfo,
    ..._void
}: UseToolbarChildParameters<ChildElement>) {
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
}