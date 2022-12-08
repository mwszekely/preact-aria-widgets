import { h } from "preact";
import { CompleteListNavigationContext, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationChildParameters, MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseListNavigationSingleSelectionSortableChildInfo, useMergedProps, useSingleSelectionDeclarative, PassiveStateUpdater, UseSingleSelectionParameters } from "preact-prop-helpers";
import { Prefices } from "./props";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label";




export interface UseToolbarParameters<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends Omit<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>, "linearNavigationParameters" | "singleSelectionReturn"> {
    toolbarParameters: {
        orientation: "horizontal" | "vertical";

        // Should be "toolbar" for toolbars, null if someone else takes care of the role, and whatever string is applicable otherwise
        role: string | null;

        
        /**
         * Optional; Only used if you need single selection logic.
         */
         onSelectedIndexChange: UseSingleSelectionParameters<ChildElement>["singleSelectionParameters"]["onSelectedIndexChange"] //null | PassiveStateUpdater<number | null, Event>;
    };
    labelParameters: Omit<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    linearNavigationParameters: Omit<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>["linearNavigationParameters"], "navigationDirection">
}

export interface UseToolbarReturnType<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends Omit<MakeSingleSelectionDeclarativeReturnType<UseCompleteListNavigationReturnType<ContainerElement, ChildElement, M>>, "props"> {
    toolbarReturn: { propsUnstable: h.JSX.HTMLAttributes<ContainerElement> };
    propsToolbar: h.JSX.HTMLAttributes<ContainerElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>
}

export interface UseToolbarSubInfo<ChildElement extends Element> extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement> {

}

export type UseToolbarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> = CompleteListNavigationContext<ContainerElement, ChildElement, M>;


//export type UseToolbarChild<ChildElement extends Element, C, K extends string> = (i: UseToolbarChildParameters<ChildElement, C, K, C>) => UseToolbarChildReturnTypeWithHooks<ChildElement>;
export interface UseToolbarChildParameters<E extends Element, M extends UseToolbarSubInfo<E>> extends UseCompleteListNavigationChildParameters<E, M, never> { }
export interface UseToolbarChildReturnType<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends UseCompleteListNavigationChildReturnType<ChildElement, M> { }
//export interface UseToolbarChildReturnTypeWithHooks<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends UseToolbarChildReturnTypeInfo<ChildElement, M> {
//}

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
export function useToolbar<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({
    linearNavigationParameters,
    toolbarParameters: { orientation, role, onSelectedIndexChange },
    labelParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    singleSelectionDeclarativeParameters: { selectedIndex },
    ...listNavParameters
}: UseToolbarParameters<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>> {
    const {
        context,
        props,
        ...listNavReturn
    } = useCompleteListNavigation<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>>({
        ...listNavParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: onSelectedIndexChange ?? null },
        sortableChildrenParameters,
        typeaheadNavigationParameters,
        linearNavigationParameters: { ...linearNavigationParameters, navigationDirection: orientation },
    });

    const _v: void = useSingleSelectionDeclarative({ 
        singleSelectionDeclarativeParameters: { selectedIndex }, 
        singleSelectionReturn: { changeSelectedIndex: listNavReturn.singleSelectionReturn.changeSelectedIndex }
     })

    const { propsInput: propsToolbar, propsLabel } = useLabelSynthetic<ContainerElement, LabelElement>({
        labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
        randomIdInputParameters: { prefix: Prefices.table },
        randomIdLabelParameters: { prefix: Prefices.tableLabel }
    });

    return {
        toolbarReturn: { propsUnstable: { ...propsToolbar, role: role ?? undefined } },
        context,
        propsLabel,
        propsToolbar: useMergedProps(propsToolbar, props),
        ...listNavReturn
    }
}


export function useToolbarChild<ChildElement extends Element>({
    ...listNavChildParameters
}: UseToolbarChildParameters<ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarChildReturnType<ChildElement, UseToolbarSubInfo<ChildElement>> {
    return useCompleteListNavigationChild<ChildElement, UseToolbarSubInfo<ChildElement>, never>({
        ...listNavChildParameters
    });
}