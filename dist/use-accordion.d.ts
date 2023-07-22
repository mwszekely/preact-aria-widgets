import { h } from "preact";
import { ElementProps, ManagedChildInfo, PassiveStateUpdater, PersistentStates, TargetedOmit, UseHasCurrentFocusReturnType, UseLinearNavigationParameters, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UsePressReturnType, UseRefElementParameters, UseRefElementReturnType, UseTextContentReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters } from "preact-prop-helpers";
import { DisabledType, OmitStrong } from "./props.js";
import { UseButtonParameters } from "./use-button.js";
export interface UseAccordionParametersSelf {
    orientation?: "vertical" | "horizontal";
    initialIndex?: number | null;
    localStorageKey: keyof PersistentStates | null;
}
export interface UseAccordionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends TargetedOmit<UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>, "linearNavigationParameters", "getLowestIndex" | "arrowKeyDirection" | "getHighestIndex" | "isValid" | "indexDemangler" | "indexMangler">, UseManagedChildrenParameters<M>, Pick<UseTypeaheadNavigationParameters<HeaderButtonElement, M>, "typeaheadNavigationParameters"> {
    accordionParameters: UseAccordionParametersSelf;
}
export interface UseAccordionReturnTypeSelf {
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
}
export interface UseAccordionReturnType<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenReturnType<M> {
    /** **STABLE** */
    accordionReturn: UseAccordionReturnTypeSelf;
    context: UseAccordionContext<HeaderButtonElement, M>;
    props: ElementProps<any>;
}
export interface UseAccordionSectionInfo extends ManagedChildInfo<number> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    setMostRecentlyTabbed(tabbed: boolean): void;
    getMostRecentlyTabbed(): boolean | null;
    focusSelf(): void;
    disabled: DisabledType;
    untabbable: boolean;
}
export interface UseAccordionSectionParametersSelf {
    /**
     * If this prop is `true` or `false` (isn't null), then this section
     * will be open/closed regardless of what the parent's singular open index is.
     *
     * In other words, leave null to only allow one section to be open at a time.
     * To allow multiple sections to be open at once,
     * set the parent's index to null and toggle this `true`/`false` when the button's pressed
     */
    open: boolean | null | undefined;
    /** Generally `"region"` */
    bodyRole: h.JSX.AriaRole;
}
export interface UseAccordionSectionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends OmitStrong<UseTypeaheadNavigationChildParameters<HeaderButtonElement, M>, "info" | "refElementReturn" | "context">, UseRefElementParameters<HeaderButtonElement>, UseManagedChildParameters<M, "index" | "untabbable"> {
    context: UseAccordionContext<HeaderButtonElement, M>;
    accordionSectionParameters: UseAccordionSectionParametersSelf;
    buttonParameters: OmitStrong<UseButtonParameters<HeaderButtonElement>["buttonParameters"], "pressed" | "role">;
}
export interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends OmitStrong<UsePressReturnType<HeaderButtonElement>, "props">, OmitStrong<UseRefElementReturnType<HeaderButtonElement>, "propsStable">, UseTextContentReturnType, UseHasCurrentFocusReturnType<HeaderButtonElement> {
    accordionSectionReturn: {
        expanded: boolean;
        focused: boolean;
        mostRecentlyTabbed: boolean;
    };
    propsHeaderButton: ElementProps<HeaderButtonElement>;
    propsHeader: ElementProps<HeaderElement>;
    propsBody: ElementProps<BodyElement>;
}
export interface UseAccordionContext<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
    accordionSectionParameters: {
        changeTabbedIndex: PassiveStateUpdater<number | null, Event>;
        changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
        getExpandedIndex: () => (number | null);
        getTabbedIndex: () => (number | null);
        stableTypeaheadProps: ElementProps<HeaderButtonElement>;
    };
    linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>["rovingTabIndexReturn"];
}
export declare function useAccordion<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo>({ accordionParameters: { initialIndex, localStorageKey, orientation, ...void2 }, typeaheadNavigationParameters, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...void1 }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange, ...void3 }, ...void4 }: UseAccordionParameters<HeaderButtonElement, M>): UseAccordionReturnType<HeaderButtonElement, M>;
export declare function useAccordionSection<_HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ buttonParameters, accordionSectionParameters: { open: openFromUser, bodyRole }, info: { index, untabbable }, textContentParameters, context: { accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn, managedChildContext, typeaheadNavigationContext }, refElementParameters, }: UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>): UseAccordionSectionReturnType<_HeaderContainerElement, HeaderButtonElement, BodyElement>;
//# sourceMappingURL=use-accordion.d.ts.map