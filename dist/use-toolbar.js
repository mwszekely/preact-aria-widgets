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
    const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
        randomIdInputParameters: { prefix: Prefices.toolbar },
        randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
    });
    // Note: We return tabIndex=-1 because some browsers (at least Firefox) seem to add role=toolbar to the tab order?
    // Probably needs a bit more digging because this feels like a bit of a blunt fix.
    return {
        context,
        propsLabel,
        propsToolbar: useMergedProps({ ...propsToolbar, role: role ?? undefined, tabIndex: -1 }, propsStable),
        randomIdInputReturn,
        randomIdLabelReturn,
        ...listNavReturn
    };
}
export function useToolbarChild({ info, toolbarChildParameters: { disabledProp }, ...args }) {
    monitorCallCount(useToolbarChild);
    const { props, ...listNavReturn } = useCompleteListNavigationChild({ info, ...args });
    return {
        props: useMergedProps(props, { [disabledProp]: info.disabled ? "true" : undefined }),
        ...listNavReturn
    };
}
//# sourceMappingURL=use-toolbar.js.map