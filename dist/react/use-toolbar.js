import { focus, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useMemoObject, useMergedProps } from "preact-prop-helpers/react";
import { Prefices, monitored } from "./props.js";
import { useLabelSynthetic } from "./use-label.js";
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
export const useToolbar = monitored(function useToolbar({ linearNavigationParameters, toolbarParameters: { orientation, role, disabled }, labelParameters, rovingTabIndexParameters, singleSelectionParameters, singleSelectionDeclarativeParameters, ...listNavParameters }) {
    if (singleSelectionDeclarativeParameters.singleSelectedIndex !== undefined) {
        console.assert(singleSelectionParameters.singleSelectionMode != "disabled");
    }
    const { contextChildren, contextProcessing, props, ...listNavReturn } = useCompleteListNavigationDeclarative({
        ...listNavParameters,
        rovingTabIndexParameters: { ...rovingTabIndexParameters, untabbable: disabled, focusSelfParent: focus },
        singleSelectionDeclarativeParameters,
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        linearNavigationParameters: { ...linearNavigationParameters, arrowKeyDirection: orientation },
        singleSelectionParameters,
    });
    const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic({
        labelParameters: { ...labelParameters, onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf },
        randomIdInputParameters: { prefix: Prefices.toolbar },
        randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
    });
    // Note: We return tabIndex=-1 (when not disabled) because some browsers (at least Firefox) seem to add role=toolbar to the tab order?
    // Probably needs a bit more digging because this feels like a bit of a blunt fix.
    return {
        contextChildren: useMemoObject({ ...contextChildren, toolbarContext: useMemoObject({}) }),
        contextProcessing,
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
    };
});
/**
 * @compositeParams
 */
export const useToolbarChild = monitored(function useToolbarChild({ context, info, toolbarChildParameters: { disabledProp }, ...args }) {
    const { propsChild, propsTabbable, ...listNavReturn } = useCompleteListNavigationChild({ info, context, ...args });
    return {
        propsChild: useMergedProps(propsChild, { [disabledProp]: (args.singleSelectionChildParameters.singleSelectionDisabled || args.multiSelectionChildParameters.multiSelectionDisabled) ? true : undefined }),
        propsTabbable,
        ...listNavReturn
    };
});
//# sourceMappingURL=use-toolbar.js.map