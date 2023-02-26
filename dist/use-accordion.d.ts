import { h } from "preact";
import { ManagedChildInfo, PassiveStateUpdater, PersistentStates, UseLinearNavigationParameters, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UsePressReturnType, UseRefElementParameters, UseRefElementReturnType, UseRovingTabIndexChildParameters, UseTextContentReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters } from "preact-prop-helpers";
import { DisabledType, OmitStrong } from "./props.js";
import { UseButtonParameters } from "./use-button.js";
export interface UseAccordionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenParameters<M>, Pick<UseTypeaheadNavigationParameters<HeaderButtonElement>, "typeaheadNavigationParameters"> {
    accordionParameters: {
        initialIndex?: number | null;
        localStorageKey: keyof PersistentStates | null;
    };
    linearNavigationParameters: OmitStrong<UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["linearNavigationParameters"], "getHighestIndex" | "isValid" | "indexDemangler" | "indexMangler">;
}
export interface UseAccordionReturnType<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenReturnType<M> {
    /** **STABLE** */
    accordionReturn: {
        changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
    };
    context: UseAccordionContext<HeaderButtonElement, M>;
}
export interface UseAccordionSectionInfo extends ManagedChildInfo<number> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    setMostRecentlyTabbed(tabbed: boolean): void;
    getMostRecentlyTabbed(): boolean | null;
    focusSelf(): void;
    disabled: DisabledType;
    hidden: boolean;
}
export interface UseAccordionSectionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends OmitStrong<UseTypeaheadNavigationChildParameters<HeaderButtonElement>, "refElementReturn" | "typeaheadNavigationChildContext">, UseRefElementParameters<HeaderButtonElement> {
    managedChildParameters: OmitStrong<UseManagedChildParameters<M>["managedChildParameters"], never>;
    context: UseAccordionContext<HeaderButtonElement, M>;
    rovingTabIndexChildParameters: Pick<UseRovingTabIndexChildParameters<any>["rovingTabIndexChildParameters"], "hidden">;
    accordionSectionParameters: {
        /**
         * If this prop is `true` or `false` isn't null, then this section
         * will be open/closed regardless of what the parent's singular open index is.
         *
         * In other words, leave null to only allow one section to be open at a time.
         * To allow multiple sections to be open at once,
         * set the parent's index to null and toggle this `true`/`false` when the button's pressed
         */
        open: boolean | undefined;
        /** Generally `"region"` */
        bodyRole: h.JSX.AriaRole;
    };
    buttonParameters: OmitStrong<UseButtonParameters<HeaderButtonElement>["buttonParameters"], "pressed" | "role">;
    pressParameters: UseButtonParameters<HeaderButtonElement>["pressParameters"];
}
export interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends UsePressReturnType<HeaderButtonElement>, UseRefElementReturnType<HeaderButtonElement>, UseTextContentReturnType {
    accordionSectionReturn: {
        expanded: boolean;
        focused: boolean;
        mostRecentlyTabbed: boolean;
    };
    propsHeaderButton: h.JSX.HTMLAttributes<HeaderButtonElement>;
    propsHeader: h.JSX.HTMLAttributes<HeaderElement>;
    propsBody: h.JSX.HTMLAttributes<BodyElement>;
}
export interface UseAccordionContext<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
    accordionSectionParameters: {
        changeTabbedIndex: PassiveStateUpdater<number | null, Event>;
        changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
        getExpandedIndex: () => (number | null);
        getTabbedIndex: () => (number | null);
        stableTypeaheadProps: h.JSX.HTMLAttributes<HeaderButtonElement>;
    };
    linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["rovingTabIndexReturn"];
}
export declare function useAccordion<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo>({ accordionParameters: { initialIndex, localStorageKey }, typeaheadNavigationParameters, linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, navigationDirection, navigatePastEnd, navigatePastStart, pageNavigationSize }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange } }: UseAccordionParameters<HeaderButtonElement, M>): UseAccordionReturnType<HeaderButtonElement, M>;
export declare function useAccordionSection<_HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ buttonParameters, pressParameters: {}, accordionSectionParameters: { open: openFromUser, bodyRole }, managedChildParameters: { index }, rovingTabIndexChildParameters: { hidden }, textContentParameters, context, context: { accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn, typeaheadNavigationChildParameters, }, refElementParameters, }: UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>): UseAccordionSectionReturnType<_HeaderContainerElement, HeaderButtonElement, BodyElement>;
//# sourceMappingURL=use-accordion.d.ts.map