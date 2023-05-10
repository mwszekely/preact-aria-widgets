import { h } from "preact";
import { CompleteListNavigationContext, MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, monitorCallCount, useCompleteListNavigationChild, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, useCompleteListNavigationDeclarative, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useMergedProps, UseRandomIdReturnType, useStableObject } from "preact-prop-helpers";
import { OmitStrong, Prefices } from "./props.js";
import { useLabelSynthetic, UseLabelSyntheticParameters } from "./use-label.js";




export interface UseToolbarParameters<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>, "singleSelectionDeclarativeParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionReturn" | "rovingTabIndexParameters"> {
    toolbarParameters: {

        orientation: "horizontal" | "vertical";

        /**
         * Should be "toolbar" for toolbars, 
         * `null` if someone else takes care of the role (TODO: it's still labelled in this case, what does this mean?), 
         * and whatever string is applicable otherwise.
         */
        role: h.JSX.AriaRole | null;

        /**
         * Optional; Only used if you need single selection logic.
         */
        selectedIndex: MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>["singleSelectionDeclarativeParameters"]["selectedIndex"];

        /**
         * Optional; Only used if you need single selection logic.
         */
        onSelectedIndexChange: MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>["singleSelectionDeclarativeParameters"]["setSelectedIndex"];

        /**
         * When true, none of the children will be selectable or focusable.
         * 
         * The component itself will be made focusable instead (partially to ensure there's always something focusable in the case of e.g. a menu).
         */
        disabled: boolean;
    };
    labelParameters: OmitStrong<UseLabelSyntheticParameters["labelParameters"], "onLabelClick">;
    linearNavigationParameters: OmitStrong<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>["linearNavigationParameters"], "arrowKeyDirection">;
    rovingTabIndexParameters: OmitStrong<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>["rovingTabIndexParameters"], "untabbable">;
}

export interface UseToolbarReturnType<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeReturnType<UseCompleteListNavigationReturnType<ContainerElement, ChildElement, M>>, "propsStable"> {
    propsToolbar: h.JSX.HTMLAttributes<ContainerElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    randomIdInputReturn: UseRandomIdReturnType<ContainerElement, LabelElement>["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElement, ContainerElement>["randomIdReturn"];
    context: UseToolbarContext<ContainerElement, ChildElement, M>;
}

export interface UseToolbarSubInfo<ChildElement extends Element> extends UseCompleteListNavigationChildInfo<ChildElement> {

}

export interface UseToolbarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends CompleteListNavigationContext<ContainerElement, ChildElement, M> {
    toolbarContext: {

    }
};


export interface UseToolbarChildParameters<E extends Element, M extends UseToolbarSubInfo<E>> extends OmitStrong<UseCompleteListNavigationChildParameters<E, M>, never> {
    toolbarChildParameters: { disabledProp: "disabled" | "aria-disabled"; }
}
export interface UseToolbarChildReturnType<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends UseCompleteListNavigationChildReturnType<ChildElement, M> { }

/**
 * A toolbar is just a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.
 * 
 * The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems, 
 * but a toolbar is the more general case, being able to contain anything at all. 
 * A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.
 * 
 * Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).
 * 
 * @param param0 
 * @returns 
 */
export function useToolbar<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement>>({
    linearNavigationParameters,
    toolbarParameters: { orientation, role, selectedIndex, onSelectedIndexChange, disabled },
    labelParameters,
    rovingTabIndexParameters,
    ...listNavParameters
}: UseToolbarParameters<ContainerElement, ChildElement, M>): UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, M> {
    monitorCallCount(useToolbar);

    const {
        context,
        propsStable,
        ...listNavReturn
    } = useCompleteListNavigationDeclarative<ContainerElement, ChildElement, M>({
        ...listNavParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, untabbable: disabled },
        singleSelectionDeclarativeParameters: { selectedIndex, setSelectedIndex: disabled? null : onSelectedIndexChange },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        linearNavigationParameters: { ...linearNavigationParameters, arrowKeyDirection: orientation },
    });

    const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic<ContainerElement, LabelElement>({
        labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
        randomIdInputParameters: { prefix: Prefices.toolbar },
        randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
    });

    // Note: We return tabIndex=-1 (when not disabled) because some browsers (at least Firefox) seem to add role=toolbar to the tab order?
    // Probably needs a bit more digging because this feels like a bit of a blunt fix.
    return {
        context: useStableObject({ ...context, toolbarContext: useStableObject({}) }),
        propsLabel,
        propsToolbar: useMergedProps({
            ...propsToolbar,
            role: role ?? undefined,
            tabIndex: disabled ? 0 : -1,
            "aria-disabled": disabled ? "true" : undefined
        }, propsStable),
        randomIdInputReturn,
        randomIdLabelReturn,
        ...listNavReturn
    }
}


export function useToolbarChild<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>>({ info, toolbarChildParameters: { disabledProp }, ...args }: UseToolbarChildParameters<ChildElement, M>): UseToolbarChildReturnType<ChildElement, M> {
    monitorCallCount(useToolbarChild);
    const {
        props,
        ...listNavReturn
    } = useCompleteListNavigationChild<ChildElement, M>({ info, ...args });

    return {
        props: useMergedProps(props, { [disabledProp as never]: info.disabled ? true : undefined }),
        ...listNavReturn
    }
}