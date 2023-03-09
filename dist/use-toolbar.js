import { useCompleteListNavigation, useCompleteListNavigationChild, useMergedProps, useSingleSelectionDeclarative } from "preact-prop-helpers";
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
export function useToolbar({ linearNavigationParameters, toolbarParameters: { orientation, role, onSelectedIndexChange }, labelParameters, singleSelectionDeclarativeParameters: { selectedIndex }, ...listNavParameters }) {
    const { context, propsStable, ...listNavReturn } = useCompleteListNavigation({
        ...listNavParameters,
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: onSelectedIndexChange ?? null },
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        linearNavigationParameters: { ...linearNavigationParameters, navigationDirection: orientation },
    });
    const _v = useSingleSelectionDeclarative({
        singleSelectionDeclarativeParameters: { selectedIndex },
        singleSelectionReturn: { changeSelectedIndex: listNavReturn.singleSelectionReturn.changeSelectedIndex }
    });
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
    return useCompleteListNavigationChild(args);
}
//# sourceMappingURL=use-toolbar.js.map