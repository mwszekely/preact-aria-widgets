import { ElementProps, JSX, ManagedChildInfo, Nullable, PassiveStateUpdater, PersistentStates, TargetedOmit, TargetedPick, UseGenericChildParameters, UseHasCurrentFocusReturnType, UseLinearNavigationParameters, UseLinearNavigationReturnType, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UsePressParameters, UseRefElementParameters, UseRefElementReturnTypeSelf, UseTextContentReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "preact-prop-helpers";
import { UseTextContentParameters } from "preact-prop-helpers";
import { DisabledType, OmitStrong } from "./props.js";
import { UseButtonParameters, UseButtonReturnType } from "./use-button.js";
export interface UseAccordionParametersSelf {
    /**
     * Almost all Accordions are `"vertical"`, but you certainly can have a `"horizontal"` Accordion if you want.
     *
     * @remarks This subsumes (and replaces) `linearNavigationParameters.arrowKeyDirection`.
     */
    orientation: Nullable<"vertical" | "horizontal">;
    /** For a one-at-a-time accordion, which index is initially opened? */
    initialIndex: Nullable<number>;
    /** For a one-at-a-time accordion, this is the key {@link usePersistentState} will use to remember which one is open. */
    localStorageKey: Nullable<keyof PersistentStates>;
}
export interface UseAccordionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends TargetedOmit<UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>, "linearNavigationParameters", "isValidForLinearNavigation" | "getLowestIndex" | "arrowKeyDirection" | "getHighestIndex">, TargetedOmit<UseTypeaheadNavigationParameters<HeaderButtonElement>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, UseManagedChildrenParameters<M> {
    accordionParameters: UseAccordionParametersSelf;
}
export interface UseAccordionReturnTypeSelf {
    /**
     * For a one-at-a-time, changes which one is currently open
     */
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
}
export interface UseAccordionReturnType<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends UseManagedChildrenReturnType<M>, OmitStrong<UseTypeaheadNavigationReturnType<HeaderButtonElement>, "propsStable"> {
    /** @stable */
    accordionReturn: UseAccordionReturnTypeSelf;
    context: UseAccordionContext<HeaderButtonElement, M>;
}
export interface UseAccordionSectionInfo<E extends Element> extends ManagedChildInfo<number> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    setMostRecentlyTabbed(tabbed: boolean): void;
    getMostRecentlyTabbed(): boolean | null;
    focusSelf(e: E): void;
    getElement(): E | null;
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
    /**
     * Generally `"region"`.
     *
     */
    bodyRole: JSX.AriaRole;
}
export interface UseAccordionSectionParameters<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends UseGenericChildParameters<UseAccordionContext<HeaderButtonElement, M>, Pick<M, "index" | "untabbable">>, OmitStrong<UseTypeaheadNavigationChildParameters<HeaderButtonElement>, "info" | "context">, OmitStrong<UseManagedChildParameters<M>, "info">, TargetedPick<UsePressParameters<HeaderButtonElement>, "pressParameters", "focusSelf">, Pick<UseTextContentParameters<HeaderContainerElement>, "textContentParameters">, TargetedOmit<UseButtonParameters<HeaderButtonElement>, "buttonParameters", "pressed" | "role"> {
    refElementHeaderButtonParameters: UseRefElementParameters<HeaderButtonElement>["refElementParameters"];
    refElementBodyParameters: UseRefElementParameters<BodyElement>["refElementParameters"];
    context: UseAccordionContext<HeaderButtonElement, M>;
    accordionSectionParameters: UseAccordionSectionParametersSelf;
}
export interface UseAccordionSectionReturnTypeSelf {
    expanded: boolean;
    focused: boolean;
    mostRecentlyTabbed: boolean;
}
export interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends OmitStrong<UseButtonReturnType<HeaderButtonElement>, "props" | "refElementReturn">, OmitStrong<UseTypeaheadNavigationChildReturnType, "pressParameters" | "textContentParameters">, OmitStrong<UseLinearNavigationReturnType<HeaderButtonElement>, "propsStable">, OmitStrong<UseTextContentReturnType, never>, OmitStrong<UseHasCurrentFocusReturnType<HeaderButtonElement>, never> {
    accordionSectionReturn: UseAccordionSectionReturnTypeSelf;
    propsHeaderButton: ElementProps<HeaderButtonElement>;
    propsHeader: ElementProps<HeaderElement>;
    propsBody: ElementProps<BodyElement>;
    refElementBodyReturn: UseRefElementReturnTypeSelf<BodyElement>;
    refElementHeaderButtonReturn: UseRefElementReturnTypeSelf<HeaderButtonElement>;
}
export interface UseAccordionContextSelf<HeaderButtonElement extends Element> {
    changeTabbedIndex: PassiveStateUpdater<number | null, Event>;
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
    getExpandedIndex: () => (number | null);
    getTabbedIndex: () => (number | null);
    stableTypeaheadProps: ElementProps<HeaderButtonElement>;
}
export interface UseAccordionContext<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
    accordionSectionContext: UseAccordionContextSelf<HeaderButtonElement>;
    linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["rovingTabIndexReturn"];
}
/**
 * Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.
 *
 * @remarks Accordions can be single-select or multi-select. For multi-select accordions, give each child its own `open` prop. For single-select accordions, just have their `open` prop be `null`.
 *
 * For some reason, accordions don't require a parent element, and don't have a roving tab index, but do implement keyboard navigation.
 *
 * This makes their implementation a little bit messy. Each child individually handles keyboard navigation even though the parent component (but not element) orchestrates it.
 *
 * @compositeParams
 *
 * @hasChild {@link useAccordionSection}
 */
export declare const useAccordion: <HeaderButtonElement extends Element>({ accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters }, typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters }, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters }, ...void1 }: UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>) => UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>;
/**
 * @compositeParams
 */
export declare const useAccordionSection: <HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters }, accordionSectionParameters: { open: openFromUser, bodyRole, ...void3 }, info: { index, untabbable, ...void4 }, textContentParameters: { getText, onTextContentChange: otcc1, ...void5 }, context, refElementBodyParameters, refElementHeaderButtonParameters, pressParameters: { focusSelf, ...pressParameters }, ...void1 }: UseAccordionSectionParameters<HeaderContainerElement, HeaderButtonElement, BodyElement, UseAccordionSectionInfo<HeaderButtonElement>>) => UseAccordionSectionReturnType<HeaderContainerElement, HeaderButtonElement, BodyElement>;
//# sourceMappingURL=use-accordion.d.ts.map