import { CompleteListNavigationContext, ElementProps, JSX, MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, TargetedOmit, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseRandomIdReturnType, assertEmptyObject, focus, monitorCallCount, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useMemoObject, useMergedProps } from "preact-prop-helpers";
import { OmitStrong, Prefices } from "./props.js";
import { UseLabelSyntheticParameters, useLabelSynthetic } from "./use-label.js";




export interface UseToolbarParametersSelf<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> {

    /** Primarily controls arrow key direction for navigation */
    orientation: "horizontal" | "vertical";

    /**
     * Manages how single-selection works. Notably, `aria-pressed` is only specified on children when `selectionLimit` is `"single"`.
     */
    selectionLimit: "single" | "multi" | "none";

    /**
     * Should be "toolbar" for toolbars, 
     * `null` if someone else takes care of the role (TODO: it's still labelled in this case, what does this mean?), 
     * and whatever string is applicable otherwise.
     */
    role: JSX.AriaRole | null;

    /**
     * Optional; Only used if you need single selection logic.
     */
    selectedIndex: MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>["singleSelectionDeclarativeParameters"]["selectedIndex"];

    /**
     * Optional; Only used if you need single selection logic.
     */
    onSelectedIndexChange: MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>["singleSelectionDeclarativeParameters"]["onSelectedIndexChange"];

    /**
     * When true, none of the children will be selectable or focusable.
     * 
     * The component itself will be made focusable instead (partially to ensure there's always something focusable in the case of e.g. a menu).
     */
    disabled: boolean;
}

export interface UseToolbarParameters<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends
    OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>, "rovingTabIndexParameters" | "singleSelectionDeclarativeParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionReturn">,
    TargetedOmit<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>, "rovingTabIndexParameters", "focusSelfParent">,
    TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">,
    TargetedOmit<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>, "linearNavigationParameters", "arrowKeyDirection"> {
    toolbarParameters: UseToolbarParametersSelf<ContainerElement, ChildElement, M>;
}

export interface UseToolbarReturnType<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeReturnType<UseCompleteListNavigationReturnType<ContainerElement, ChildElement, M>>, "props"> {
    propsToolbar: ElementProps<ContainerElement>;
    propsLabel: ElementProps<LabelElement>;
    randomIdInputReturn: UseRandomIdReturnType<ContainerElement, LabelElement>["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElement, ContainerElement>["randomIdReturn"];
    context: UseToolbarContext<ChildElement, M>;
}

export interface UseToolbarSubInfo<ChildElement extends Element> extends UseCompleteListNavigationChildInfo<ChildElement> {

}

export interface UseToolbarContextSelf /*extends Pick<UseToolbarParametersSelf<any, any, any>, "selectionLimit">*/ { }

export interface UseToolbarContext<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends
    CompleteListNavigationContext<ChildElement, M> {
    toolbarContext: UseToolbarContextSelf;
};


export interface UseToolbarChildParametersSelf { disabledProp: "disabled" | "aria-disabled"; }

export interface UseToolbarChildParameters<E extends Element, M extends UseToolbarSubInfo<E>> extends
    UseCompleteListNavigationChildParameters<E, M> {
    toolbarChildParameters: UseToolbarChildParametersSelf;
    context: UseToolbarContext<E, M>;
}
export interface UseToolbarChildReturnType<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends UseCompleteListNavigationChildReturnType<ChildElement, M> { }

/**
 * Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern, which is a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.
 * 
 * @remarks 
 * The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems, 
 * but a toolbar is the more general case, being able to contain anything at all. 
 * A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.
 * 
 * Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).
 * 
 * @compositeParams
 */
export function useToolbar<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({
    linearNavigationParameters,
    toolbarParameters: { orientation, role, selectedIndex, onSelectedIndexChange, disabled, selectionLimit, ...void1 },
    labelParameters,
    rovingTabIndexParameters,
    singleSelectionParameters: { selectionMode, ...singleSelectionParameters },
    ...listNavParameters
}: UseToolbarParameters<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>> {
    type M = UseToolbarSubInfo<ChildElement>;

    monitorCallCount(useToolbar);

    if (selectionLimit != 'single') {
        console.assert(selectedIndex == null);
        console.assert(selectionMode == 'disabled');
        selectedIndex = null;
        selectionMode = 'disabled';
    }

    const {
        context,
        props,
        ...listNavReturn
    } = useCompleteListNavigationDeclarative<ContainerElement, ChildElement, M>({
        ...listNavParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, untabbable: disabled, focusSelfParent: focus },
        singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange: disabled ? null : onSelectedIndexChange },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        linearNavigationParameters: { ...linearNavigationParameters, arrowKeyDirection: orientation },
        singleSelectionParameters: { selectionMode, ...singleSelectionParameters },
    });

    const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic<ContainerElement, LabelElement>({
        labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
        randomIdInputParameters: { prefix: Prefices.toolbar },
        randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
    });

    assertEmptyObject(void1);

    // Note: We return tabIndex=-1 (when not disabled) because some browsers (at least Firefox) seem to add role=toolbar to the tab order?
    // Probably needs a bit more digging because this feels like a bit of a blunt fix.
    return {
        context: useMemoObject({ ...context, toolbarContext: useMemoObject<UseToolbarContextSelf>({}) }),
        propsLabel,
        propsToolbar: useMergedProps({
            ...propsToolbar,
            role: role ?? undefined,
            tabIndex: disabled ? 0 : -1,
            "aria-disabled": disabled ? "true" : undefined
        }, props),
        randomIdInputReturn,
        randomIdLabelReturn,
        ...listNavReturn
    }
}


/**
 * @compositeParams
 */
export function useToolbarChild<ChildElement extends Element>({ context: { toolbarContext, ...context }, info, toolbarChildParameters: { disabledProp }, ...args }: UseToolbarChildParameters<ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarChildReturnType<ChildElement, UseToolbarSubInfo<ChildElement>> {
    monitorCallCount(useToolbarChild);

    const {
        propsChild,
        propsTabbable,
        ...listNavReturn
    } = useCompleteListNavigationChild<ChildElement, UseToolbarSubInfo<ChildElement>>({ info, context, ...args });

    return {
        propsChild: useMergedProps(propsChild, { [disabledProp as never]: info.unselectable ? true : undefined }),
        propsTabbable,
        ...listNavReturn
    }
}