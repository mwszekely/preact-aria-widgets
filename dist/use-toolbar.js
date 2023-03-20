import { monitorCallCount, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useMergedProps } from "preact-prop-helpers";
import { Prefices } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
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
export function useToolbar({ linearNavigationParameters, toolbarParameters: { orientation, role, selectedIndex, onSelectedIndexChange }, labelParameters, ...listNavParameters }) {
    monitorCallCount(useToolbar);
    const { context, propsStable, ...listNavReturn } = useCompleteListNavigationDeclarative({
        ...listNavParameters,
        singleSelectionDeclarativeParameters: { selectedIndex, setSelectedIndex: onSelectedIndexChange },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        linearNavigationParameters: { ...linearNavigationParameters, arrowKeyDirection: orientation },
    });
    //const _v: void = useSingleSelectionDeclarative({
    //})
    const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
        randomIdInputParameters: { prefix: Prefices.toolbar },
        randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
    });
    return {
        context,
        propsLabel,
        propsToolbar: useMergedProps({ ...propsToolbar, role: role ?? undefined }, propsStable),
        randomIdInputReturn,
        randomIdLabelReturn,
        ...listNavReturn
    };
}
export function useToolbarChild(args) {
    monitorCallCount(useToolbarChild);
    return useCompleteListNavigationChild(args);
}
//# sourceMappingURL=use-toolbar.js.map