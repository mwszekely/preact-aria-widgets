import { ElementProps, JSX, ManagedChildInfo, Nullable, PassiveStateUpdater, PersistentStates, TargetedOmit, TargetedPick, UseGenericChildParameters, UseHasCurrentFocusReturnType, UseLinearNavigationParameters, UseLinearNavigationReturnType, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UsePressParameters, UseRefElementParameters, UseRefElementReturnTypeSelf, UseTextContentReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType, PressEventReason, UsePressReturnType, UseRefElementReturnType, EnhancedEventHandler, TargetedEnhancedEvent, CompleteListNavigationContext, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseRandomDualIdsParameters, UseRandomDualIdsReturnType, UseModalParameters, UseModalReturnType, CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ExtendMerge, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, EventType, UseSingleSelectionDeclarativeParameters, EventDetail, MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, UseRandomIdReturnType, VNode, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, UseCompleteListNavigationChildInfoKeysParameters, UseCompleteListNavigationDeclarativeReturnType, UseManagedChildReturnType, UseCompleteGridNavigationCellInfoKeysParameters, UseDismissParameters, UseEscapeDismissParameters, GetIndex } from "preact-prop-helpers";
import { OmitStrong as OmitStrong$0 } from "preact-prop-helpers";
import { h, Ref, ComponentChildren, Context, createElement, RenderableProps } from "preact";
import { VNode as VNode$0 } from "preact";
import { StateUpdater } from "preact/hooks";
type RefFromTag<T extends keyof h.JSX.IntrinsicElements> = NonNullable<h.JSX.IntrinsicElements[T]["ref"]> & Ref<any>;
type ElementFromRef<R extends Ref<any>> = R extends Ref<infer E> ? E : EventTarget;
type ElementFromTag<T extends keyof h.JSX.IntrinsicElements> = ElementFromRef<RefFromTag<T>>;
// Required because you can't extend SomeType["likeThis"] for some reason, but you can if it's like this.
type Get<T, K extends keyof T> = T[K];
// TODO: Lame D:
type Get2<T, K1 extends keyof T, K2 extends keyof T> = Get<T, K2> & Get<T, K1>;
type Get3<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T> = Get2<T, K2, K3> & Get<T, K1>;
type Get4<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T> = Get3<T, K2, K3, K4> & Get<T, K1>;
type Get5<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T> = Get4<T, K2, K3, K4, K5> & Get<T, K1>;
type Get6<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T> = Get5<T, K2, K3, K4, K5, K6> & Get<T, K1>;
type Get7<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T> = Get6<T, K2, K3, K4, K5, K6, K7> & Get<T, K1>;
type Get8<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T> = Get7<T, K2, K3, K4, K5, K6, K7, K8> & Get<T, K1>;
type Get9<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T> = Get8<T, K2, K3, K4, K5, K6, K7, K8, K9> & Get<T, K1>;
type Get10<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T> = Get9<T, K2, K3, K4, K5, K6, K7, K8, K9, K10> & Get<T, K1>;
type Get11<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T> = Get10<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11> & Get<T, K1>;
type Get12<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T> = Get11<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12> & Get<T, K1>;
type Get13<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T> = Get12<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13> & Get<T, K1>;
type Get14<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T> = Get13<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14> & Get<T, K1>;
type Get15<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T> = Get14<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15> & Get<T, K1>;
type Get16<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T, K16 extends keyof T> = Get15<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16> & Get<T, K1>;
//export type Get17<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T, K16 extends keyof T, K17 extends keyof T> = Get16<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17> & Get<T, K1>;
//export type Get18<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T, K16 extends keyof T, K17 extends keyof T, K18 extends keyof T> = Get17<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18> & Get<T, K1>;
//export type Get19<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T, K16 extends keyof T, K17 extends keyof T, K18 extends keyof T, K19 extends keyof T> = Get18<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19> & Get<T, K1>;
// ^^^ <Menu /> needed Get19 at one point...
// https://stackoverflow.com/questions/46583883/typescript-pick-properties-with-a-defined-type
type PickByType<Obj, WantedType> = {
    [P in keyof Obj as Obj[P] extends WantedType | undefined ? P : never]: Obj[P];
};
type ElementToTag<E> = keyof PickByType<HTMLElementTagNameMap, E>;
/**
 * * `false`: This component is not disabled.
 * * `"soft"`: This component is disabled, but is still focusable and visible to *all* users.
 * * `"hard"`: This component is disabled, and generally hidden to all but sighted users, using the HTML `disabled` attribute.
 * * `true`: This component is disabled. Whether "hard" or "soft" is chosen is usually chosen based on a `Context`.
 */
type DisabledType = boolean | "soft" | "hard";
type OmitStrong<T, K extends keyof T> = Omit<T, K>;
/**
 * For times when more than just the abstract element type is needed,
 * but the actual, concrete, implementation-affecting "div" string type.
 *
 * TODO: Should this be the standard for all the non-ARIA hooks?
 * They *never* care about the specific type for the implementation,
 * just for typing, so it wouldn't be necessary,
 * but it would be consistent with these ARIA hooks.
 */
interface TagSensitiveProps<E extends EventTarget> {
    tag: ElementToTag<E>;
}
declare function setDebugLogging(logging: boolean): void;
interface ButtonPressEventDetail {
    pressed: boolean | undefined;
}
type TargetedButtonPressEvent<E extends EventTarget> = TargetedEnhancedEvent<PressEventReason<E>, ButtonPressEventDetail>;
type ButtonPressEventHandler<E extends EventTarget> = EnhancedEventHandler<TargetedButtonPressEvent<E>, ButtonPressEventDetail>;
interface UseButtonParametersSelf<E extends Node> {
    /** Is `HTMLElement` this a `div`, a `button`, etc. */
    tagButton: ElementToTag<E>;
    /**
     * Called when the button is clicked/pressed/tapped/etc
     *
     * @remarks `pressed` only be non-null when you passed a non-null value for `pressed` as a prop.
     *
     * If you need this to be async, see `useProgressWithHandler`, and use its `syncHandler` here.
     */
    onPressSync: Nullable<(event: TargetedEnhancedEvent<PressEventReason<E>, ButtonPressEventDetail>) => void>;
    /**
     * Whether the button is disabled.
     *
     * @remarks This both affects its attributes as well as whether or not the press handler is called.
     */
    disabled: Nullable<DisabledType>;
    /**
     * Indicates that the button is pressed/toggled.
     *
     * @remarks **Important**: This *should not* be used if this is a toggle button
     * that indicates its state through its label/children, like a mute/unmute
     * or play/pause button. In those cases, `pressed` **must** remain `null`,
     * and you should just change the label/children. It's not specified anywhere,
     * but is more or less standard practice.
     */
    pressed: boolean | null | undefined;
    /**
     * Generally just "button". Avoid using `null` unless the role is handled by something else.
     */
    role: Nullable<JSX.AriaRole>;
}
interface UseButtonParameters<ButtonElement extends Element> extends UseRefElementParameters<ButtonElement>, TargetedOmit<UsePressParameters<ButtonElement>, "pressParameters", "excludeEnter" | "excludePointer" | "onPressSync"> {
    buttonParameters: UseButtonParametersSelf<ButtonElement>;
}
interface UseButtonReturnType<ButtonElement extends Element> extends UsePressReturnType<ButtonElement>, OmitStrong<UseRefElementReturnType<ButtonElement>, "propsStable"> {
    props: ElementProps<ButtonElement>;
}
/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 *
 * @remarks The press handler can be async or sync&mdash;either way, pass it to `asyncHandlerParameters.asyncHandler`
 *
 * @compositeParams
 */
declare function useButton<ButtonElement extends Element>({ buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 }, pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 }, refElementParameters, ...void2 }: UseButtonParameters<ButtonElement>): UseButtonReturnType<ButtonElement>;
interface UseAccordionParametersSelf {
    /**
     * Almost all Accordions are `"vertical"`, but you certainly can have a `"horizontal"` Accordion if you want.
     */
    orientation: Nullable<"vertical" | "horizontal">;
    /** For a one-at-a-time accordion, which index is initially opened? */
    initialIndex: Nullable<number>;
    /** For a one-at-a-time accordion, this is the key {@link usePersistentState} will use to remember which one is open. */
    localStorageKey: Nullable<keyof PersistentStates>;
}
interface UseAccordionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends TargetedOmit<UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>, "linearNavigationParameters", "isValidForLinearNavigation" | "getLowestIndex" | "arrowKeyDirection" | "getHighestIndex">, TargetedOmit<UseTypeaheadNavigationParameters<HeaderButtonElement>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, UseManagedChildrenParameters<M>, Pick<UseRefElementParameters<HeaderButtonElement>, "refElementParameters"> {
    accordionParameters: UseAccordionParametersSelf;
}
interface UseAccordionReturnTypeSelf {
    /**
     * For a one-at-a-time, changes which one is currently open
     */
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
}
interface UseAccordionReturnType<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends UseManagedChildrenReturnType<M>, OmitStrong<UseTypeaheadNavigationReturnType<HeaderButtonElement>, "propsStable"> {
    /** @stable */
    accordionReturn: UseAccordionReturnTypeSelf;
    context: UseAccordionContext<HeaderButtonElement, M>;
    props: ElementProps<any>;
}
interface UseAccordionSectionInfo<E extends Element> extends ManagedChildInfo<number> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    setMostRecentlyTabbed(tabbed: boolean): void;
    getMostRecentlyTabbed(): boolean | null;
    focusSelf(e: E): void;
    getElement(): E | null;
    disabled: DisabledType;
    untabbable: boolean;
}
interface UseAccordionSectionParametersSelf {
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
    bodyRole: JSX.AriaRole;
}
interface UseAccordionSectionParameters<HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends UseGenericChildParameters<UseAccordionContext<HeaderButtonElement, M>, Pick<M, "index" | "untabbable">>, OmitStrong<UseTypeaheadNavigationChildParameters<HeaderButtonElement>, "info" | "refElementReturn" | "context">, OmitStrong<UseManagedChildParameters<M>, "info">, TargetedPick<UsePressParameters<HeaderButtonElement>, "pressParameters", "focusSelf">, TargetedOmit<UseButtonParameters<HeaderButtonElement>, "buttonParameters", "pressed" | "role"> {
    refElementHeaderButtonParameters: UseRefElementParameters<HeaderButtonElement>["refElementParameters"];
    refElementBodyParameters: UseRefElementParameters<BodyElement>["refElementParameters"];
    context: UseAccordionContext<HeaderButtonElement, M>;
    accordionSectionParameters: UseAccordionSectionParametersSelf;
}
interface UseAccordionSectionReturnTypeSelf {
    expanded: boolean;
    focused: boolean;
    mostRecentlyTabbed: boolean;
}
interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends OmitStrong<UseButtonReturnType<HeaderButtonElement>, "props" | "refElementReturn">, OmitStrong<UseTypeaheadNavigationChildReturnType, "pressParameters">, OmitStrong<UseLinearNavigationReturnType<HeaderButtonElement>, "propsStable">, OmitStrong<UseTextContentReturnType, never>, OmitStrong<UseHasCurrentFocusReturnType<HeaderButtonElement>, never> {
    accordionSectionReturn: UseAccordionSectionReturnTypeSelf;
    propsHeaderButton: ElementProps<HeaderButtonElement>;
    propsHeader: ElementProps<HeaderElement>;
    propsBody: ElementProps<BodyElement>;
    refElementBodyReturn: UseRefElementReturnTypeSelf<BodyElement>;
    refElementHeaderButtonReturn: UseRefElementReturnTypeSelf<HeaderButtonElement>;
}
interface UseAccordionContextSelf<HeaderButtonElement extends Element> {
    changeTabbedIndex: PassiveStateUpdater<number | null, Event>;
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
    getExpandedIndex: () => (number | null);
    getTabbedIndex: () => (number | null);
    stableTypeaheadProps: ElementProps<HeaderButtonElement>;
}
interface UseAccordionContext<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement>> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
    accordionSectionParameters: UseAccordionContextSelf<HeaderButtonElement>;
    linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement>["rovingTabIndexReturn"];
}
/**
 * Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.
 *
 * @remarks For some reason, accordions don't have a parent element, and don't have a roving tab index, but do implement keyboard navigation.
 *
 * This makes their implementation a little bit messy. Each child individually handles keyboard navigation even though the parent orchestrates it.
 *
 * @compositeParams
 *
 * @hasChild {@link useAccordionSection}
 */
declare function useAccordion<HeaderButtonElement extends Element>({ accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters }, typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters }, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters }, refElementParameters, ...void1 }: UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>): UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>;
/**
 * @compositeParams
 */
declare function useAccordionSection<HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters }, accordionSectionParameters: { open: openFromUser, bodyRole, ...accordionSectionParameters }, info: { index, untabbable, ...void4 }, textContentParameters: { getText, ...textContentParameters }, context, refElementBodyParameters, refElementHeaderButtonParameters, pressParameters: { focusSelf, ...pressParameters }, ...void1 }: UseAccordionSectionParameters<HeaderButtonElement, BodyElement, UseAccordionSectionInfo<HeaderButtonElement>>): UseAccordionSectionReturnType<HeaderContainerElement, HeaderButtonElement, BodyElement>;
type LabelPosition = "separate" | "wrapping" | "none";
type FocusableLabelElement<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> = LP extends "wrapping" ? LabelElement : InputElement;
interface UseLabelParametersSelf<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> {
    onLabelClick: null | ((e: Event) => void);
    tagInput: ElementToTag<InputElement>;
    tagLabel: ElementToTag<LabelElement>;
    /**
     * Where is this component's label relative to the component itself?
     *
     * * `"separate"`: `<label /><input />`
     * * `"wrapping"`: `<label><input /></label>`
     * * `"none"`: `<input aria-label="..." />`
     *
     * In cases where you're using non-`input` and `label` elements, `"separate"` and `"wrapping"` are identical;
     * this is most important for native `label` and `input` elements, as they only need a `for` prop when the label doesn't wrap the input.
     */
    labelPosition: LP;
    /**
     * When `null`, this corresponds to having a visible label (with `labelPosition` == `"separate"` or `"wrapping"`).
     *
     * When a string, this corresponds to `labelPosition` == `"none"`; this label is only visible to assistive technologies and *not* visible otherwise.
     */
    ariaLabel: LP extends "none" ? string : (null | undefined);
}
interface UseLabelParameters<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element> {
    randomIdInputParameters: OmitStrong<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
    randomIdLabelParameters: OmitStrong<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;
    labelParameters: UseLabelParametersSelf<LP, InputElement, LabelElement>;
}
interface UseLabelReturnType<InputElement extends Element, LabelElement extends Element> extends UseRandomDualIdsReturnType<InputElement, LabelElement>, OmitStrong<UsePressReturnType<LabelElement>, "props"> {
}
/**
 * @compositeParams
 */
declare function useLabel<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element>({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }: UseLabelParameters<LP, InputElement, LabelElement>): UseLabelReturnType<InputElement, LabelElement>;
interface UseLabelSyntheticParameters extends TargetedPick<UseLabelParameters<LabelPosition, any, any>, "labelParameters", "ariaLabel" | "onLabelClick"> {
    randomIdInputParameters: OmitStrong<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
    randomIdLabelParameters: OmitStrong<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;
}
/**
 * Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
 *
 * @compositeParams
 */
declare function useLabelSynthetic<InputElement extends Element, LabelElement extends Element>({ labelParameters: { ariaLabel, onLabelClick }, ...rest }: UseLabelSyntheticParameters): UseLabelReturnType<InputElement, LabelElement>;
type CheckboxCheckedType = boolean | "mixed";
interface UseCheckboxLikeParametersSelf<C extends CheckboxCheckedType> {
    /** The role attribute to use, when applicable */
    role: JSX.AriaRole;
    disabled: DisabledType;
    checked: C;
}
interface UseCheckboxLikeParameters<LP extends LabelPosition, InputType extends Element, LabelType extends Element, C extends CheckboxCheckedType> extends OmitStrong<UseLabelParameters<LP, InputType, LabelType>, "labelParameters">, TargetedOmit<UseLabelParameters<LP, InputType, LabelType>, "labelParameters", "onLabelClick">, TargetedPick<UsePressParameters<any>, "pressParameters", "longPressThreshold" | "excludeSpace" | "onPressSync"> {
    checkboxLikeParameters: UseCheckboxLikeParametersSelf<C>;
    refElementLabelReturn: UseRefElementReturnType<LabelType>["refElementReturn"];
    refElementInputReturn: UseRefElementReturnType<InputType>["refElementReturn"];
}
interface UseCheckboxLikeReturnTypeSelf {
    /**
     * Call this to focus whichever element handles the focus based on `labelPosition`.
     */
    focusSelf(): void;
}
interface UseCheckboxLikeReturnType<InputType extends Element, LabelType extends Element> extends UseLabelReturnType<InputType, LabelType> {
    pressLabelReturn: UsePressReturnType<LabelType>["pressReturn"];
    pressInputReturn: UsePressReturnType<InputType>["pressReturn"];
    // TODO
    checkboxLikeInputReturn: {
        propsUnstable: ElementProps<InputType>;
    };
    checkboxLikeLabelReturn: {
        propsUnstable: ElementProps<LabelType>;
    };
    checkboxLikeReturn: UseCheckboxLikeReturnTypeSelf;
}
/**
 * Handles any component where there's:
 * ```md-literal
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 * ```md-literal
 *
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 *
 * @compositeParams
 */
declare function useCheckboxLike<LP extends LabelPosition, InputType extends Element, LabelType extends Element, C extends CheckboxCheckedType>({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, onPressSync: onInputSync, ...void2 }, ...void3 }: UseCheckboxLikeParameters<LP, InputType, LabelType, C>): UseCheckboxLikeReturnType<InputType, LabelType>;
interface CheckboxGroupChangeEventDetail {
    childrenChecked: boolean | Map<number, boolean | "mixed">;
}
type TargetedCheckboxGroupChangeEvent = TargetedEnhancedEvent<Event, CheckboxGroupChangeEventDetail>;
type CheckboxGroupChangeEventHandler = EnhancedEventHandler<Event, CheckboxGroupChangeEventDetail>;
interface UseCheckboxGroupParametersSelf {
    orientation: "vertical" | "horizontal";
}
interface UseCheckboxGroupParameters<ParentElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "linearNavigationParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "rovingTabIndexParameters">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "linearNavigationParameters", "arrowKeyDirection">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "rovingTabIndexParameters", "focusSelfParent"> {
    checkboxGroupParameters: UseCheckboxGroupParametersSelf;
}
interface CheckboxGroupInfoBaseBase<TCE extends Element> {
    _e?: TCE;
}
interface CheckboxGroupInfoBase<TCE extends Element> extends CheckboxGroupInfoBaseBase<TCE> {
    checkboxChildType: "child" | "parent";
    // These are child-only. If `checkboxChildType` is parent, then these are null
    /** Child-only */
    getChecked: Nullable<() => boolean | "mixed">;
    /** Child-only */
    getLastUserChecked: Nullable<() => boolean | "mixed">;
    /** Child-only */
    setCheckedFromParentInput: Nullable<(newChecked: CheckboxCheckedType, e: Event) => void | Promise<void>>;
}
interface CheckboxGroupInfo<TCE extends Element> extends UseCompleteListNavigationChildInfo<TCE>, CheckboxGroupInfoBase<TCE> {
}
interface UseCheckboxGroupChildParametersSelf {
    checked: CheckboxCheckedType;
    onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
}
interface UseCheckboxGroupChildParameters<TCE extends Element> extends UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable" | "unselectable" | "getSortValue">>, OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info"> {
    checkboxGroupChildParameters: UseCheckboxGroupChildParametersSelf;
}
interface UseCheckboxGroupChildReturnTypeSelf {
    onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
    onChildCheckedChange: (checked: CheckboxCheckedType) => void;
}
interface UseCheckboxGroupChildReturnType<TCE extends Element> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, "singleSelectionChildReturn"> {
    checkboxGroupChildReturn: UseCheckboxGroupChildReturnTypeSelf;
}
//export type UseCheckboxGroupChild<InputElement extends Element, LabelElement extends Element, TCE extends InputElement | LabelElement, M extends CheckboxGroupInfo<TCE>> = (args: UseCheckboxGroupChildParameters<TCE, M>) => UseCheckboxGroupChildReturnType<TCE, M>
interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element> extends OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TCE, CheckboxGroupInfo<TCE>>, "context"> {
    context: CheckboxGroupContext<TCE>;
}
interface UseCheckboxGroupParentParameters<TCE extends Element> extends UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable" | "unselectable" | "getSortValue">>, OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info"> {
}
interface UseCheckboxGroupParentReturnTypeSelf {
    checked: CheckboxCheckedType;
    getPercent(): number;
    onParentCheckedChange: (e: Event) => Promise<void>;
}
interface UseCheckboxGroupParentReturnType<TCE extends Element> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, never> {
    checkboxGroupParentReturn: UseCheckboxGroupParentReturnTypeSelf;
}
interface CheckboxGroupContext<TCE extends Element> extends CompleteListNavigationContext<TCE, CheckboxGroupInfo<TCE>> {
    // parent
    checkboxGroupParentContext: {
        /**
         * So the group needs to be able to provide the parent checkbox with all the IDs of each child for its aria-controls prop.
         *
         * Thus, the parent needs to provide the group with its own function to be able to call "setMyAriaControls(theIdsOfEachChild)".
         *
         * That's what this is.
         */
        setControlsSetterOnParentCheckbox: PassiveStateUpdater<StateUpdater<string> | null, Event>;
        /**
         * Similar to the above, but for the overall checked state on the parent checkbox for the group to coordinate.
         */
        setSetParentCheckboxChecked: PassiveStateUpdater<StateUpdater<CheckboxCheckedType> | null, Event>;
        getPercentChecked: (totalChecked: number, totalChildren: number) => number;
        getTotalChecked: () => number;
        getTotalChildren: () => number;
        onCheckboxGroupParentInput: (e: Event) => Promise<void>;
    };
    checkboxGroupChildrenContext: {
        // children
        setUpdateIndex: PassiveStateUpdater<number, Event>;
        allIds: Set<string>;
        setTotalChildren: PassiveStateUpdater<number, Event>;
        setTotalChecked: PassiveStateUpdater<number, Event>;
    };
}
/**
 * Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useCheckboxGroupParent}
 * @hasChild {@link useCheckboxGroupChild}
 */
declare function useCheckboxGroup<GroupElement extends Element, TCE extends Element>({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation }, ...listNavParameters }: UseCheckboxGroupParameters<GroupElement, TCE>): UseCheckboxGroupReturnType<GroupElement, TCE>;
/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 *
 * @compositeParams
 */
declare function useCheckboxGroupParent<TCE extends Element>({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters }: UseCheckboxGroupParentParameters<TCE>): UseCheckboxGroupParentReturnType<TCE>;
/**
 * Implements the "child" part of a checkbox group.
 *
 * @remarks Does not implement any actual "checkbox" functionality,
 * but it does tell you what to do *with* a checkbox.
 *
 * (That is to say, use `onChildCheckedChange` whenever
 * your checkbox or checkbox-like thing changes, and
 * properly implement `onChangeFromParent` to work
 * properly when the parent changes)
 *
 * @compositeParams
 */
declare function useCheckboxGroupChild<TCE extends Element>({ checkboxGroupChildParameters, context, info: { focusSelf, getSortValue, index, unselectable, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, ...void4 }: UseCheckboxGroupChildParameters<TCE>): UseCheckboxGroupChildReturnType<TCE>;
interface CheckboxChangeEventDetail {
    /**
     * This is always a `true`/`false` value, instead of including `"mixed"`
     */
    checked: boolean;
    previous: CheckboxCheckedType;
}
// These are not typed because they could come from the input OR the label.
type TargetedCheckboxChangeEvent = TargetedEnhancedEvent<Event, CheckboxChangeEventDetail>;
type CheckboxChangeEventHandler = EnhancedEventHandler<Event, CheckboxChangeEventDetail>;
interface UseCheckboxParametersSelf {
    /** Called when the user changes the value of the checkbox.
     *
     * @remarks If you need this to be async, see {@link useProgressWithHandler}
     */
    onCheckedChange: Nullable<CheckboxChangeEventHandler>;
}
interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends OmitStrong<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "pressParameters" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters" | "refElementLabelReturn" | "refElementInputReturn">, TargetedOmit<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "pressParameters", "onPressSync">, TargetedOmit<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "checkboxLikeParameters", "role"> {
    checkboxParameters: UseCheckboxParametersSelf;
}
interface UseCheckboxReturnTypeSelf<InputType extends Element> {
    propsUnstable: ElementProps<InputType>;
}
interface UseCheckboxReturnType<InputType extends Element, LabelType extends Element> extends UseCheckboxLikeReturnType<InputType, LabelType> {
    checkboxReturn: UseCheckboxReturnTypeSelf<InputType>;
}
/**
 * Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 */
declare function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ checkboxLikeParameters: { checked, disabled, ...void2 }, checkboxParameters: { onCheckedChange, ...void4 }, labelParameters, pressParameters, ...void1 }: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType>;
interface UseDialogParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters" | "backdropDismissParameters" | "escapeDismissParameters" | "lostFocusDismissParameters">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters", "trapActive" | "onlyMoveFocus">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "backdropDismissParameters", "onDismissBackdrop">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "escapeDismissParameters", "onDismissEscape">, 
//TargetedOmit<UseModalParameters<"escape" | "backdrop">, "lostFocusDismissParameters", "onDismissLostFocus">,
TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
}
interface UseDialogReturnType<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>, "propsStableSource" | "propsStablePopup"> {
    propsDialog: ElementProps<PopupElement>;
    propsSource: ElementProps<SourceElement>;
    propsTitle: ElementProps<TitleElement>;
}
/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
declare function useDialog<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }: UseDialogParameters<DialogElement, TitleElement>): UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>;
interface UseDrawerParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters" | "backdropDismissParameters" | "dismissParameters" | "escapeDismissParameters" | "lostFocusDismissParameters">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters", "onlyMoveFocus">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "backdropDismissParameters", "onDismissBackdrop">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "escapeDismissParameters", "onDismissEscape">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "lostFocusDismissParameters", "onDismissLostFocus"> {
}
interface UseDrawerReturnType<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> extends OmitStrong<UseModalReturnType<FocusContainerElement, SourceElement, DrawerElement>, "propsStableSource" | "propsStablePopup"> {
    propsDrawer: ElementProps<DrawerElement>;
    propsSource: ElementProps<SourceElement>;
    propsTitle: ElementProps<TitleElement>;
}
/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 *
 * @compositeParams
 */
declare function useDrawer<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, labelParameters, backdropDismissParameters, lostFocusDismissParameters, modalParameters, refElementParameters, ...void1 }: UseDrawerParameters<PopupElement, TitleElement>): UseDrawerReturnType<FocusContainerElement, SourceElement, PopupElement, TitleElement>;
type ListboxSingleSelectEvent<E extends EventTarget> = {
    [EventDetail]: {
        selectedIndex: number;
    };
} & Pick<EventType<E, Event>, "target" | "currentTarget">;
type ListboxMultiSelectEvent<E extends EventTarget> = {
    [EventDetail]: {
        selected: boolean;
    };
} & Pick<EventType<E, Event>, "target" | "currentTarget">;
interface UseListboxContext<ListElement extends Element, ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListItemElement, M> {
    listboxContext: {
        selectionLimit: "single" | "multi" | "none";
    };
}
interface UseListboxParametersSelf<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> {
    orientation: "horizontal" | "vertical";
    /**
     * When `"single"`, the selected item is controlled
     * via `selectedIndex`. When `"multi"`, the selected
     * items are controlled by their individual `selected` props.
     */
    selectionLimit: "single" | "multi" | "none";
    /**
     * Only used when `groupingType` is `"without-groups"` or `"group"`
     */
    selectedIndex: number | null;
    onSelectedIndexChange: UseSingleSelectionDeclarativeParameters["singleSelectionDeclarativeParameters"]["onSelectedIndexChange"]; //PassiveStateUpdater<number | null, Event> | null;
    /**
     * * `"without-groups"`: This is a listbox with no groups
     * * `"with-groups"`: This is a listbox that is grouped into 2 or more labelled sections. In this case, **all navigation and selection is disabled** (meaning you can pass whatever you'd like to them, it's all ignored) and delegated to the child `group`s.
     * * `"group"`: This is a group, contained within a listbox with `type=="with-groups"`
     *
     * There is currently no support for a mix of grouped and ungrouped options.
     */
    groupingType: "with-groups" | "without-groups" | "group";
}
interface UseListboxParameters<ListElement extends Element, ListItemElement extends Element, _LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters" | "linearNavigationParameters" | "singleSelectionParameters">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "linearNavigationParameters", "arrowKeyDirection">, TargetedPick<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "singleSelectionParameters", "ariaPropName" | "selectionMode"> {
    listboxParameters: UseListboxParametersSelf<ListElement, ListItemElement, _LabelElement, M>;
}
interface UseListboxReturnType<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationReturnType<ListElement, ListItemElement, M>, "singleSelectionReturn" | "props"> {
    propsListbox: ElementProps<ListElement>;
    propsListboxLabel: ElementProps<LabelElement>;
    context: UseListboxContext<ListElement, ListItemElement, M>;
}
interface UseListboxItemReturnType<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends OmitStrong<UseCompleteListNavigationChildReturnType<ListItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters">, UsePressReturnType<ListItemElement> {
}
interface UseListboxItemParametersSelf<ListItemElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: Nullable<boolean>;
    onMultiSelect: Nullable<((e: ListboxMultiSelectEvent<ListItemElement>) => void)>;
}
interface UseListboxItemParameters<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildParameters<ListItemElement, M>, TargetedOmit<UsePressParameters<ListItemElement>, "pressParameters", "excludeSpace" | "onPressSync" | "focusSelf"> {
    listboxParameters: UseListboxItemParametersSelf<ListItemElement>;
    context: UseListboxContext<any, ListItemElement, M>;
}
interface ListboxInfo<ListItemElement extends Element> extends UseCompleteListNavigationChildInfo<ListItemElement> {
}
/**
 * Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.
 *
 * @remarks A listbox is a very limited widget and its items cannot contain interactive or non-text content.
 *
 * @see {@link useGridlist} for a more capable list widget.
 *
 * @compositeParams
 *
 * @hasChild {@link useListboxItem}
 */
declare function useListbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element>({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation }, linearNavigationParameters, singleSelectionParameters: { ariaPropName, selectionMode }, rovingTabIndexParameters, ...restParams }: UseListboxParameters<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>): UseListboxReturnType<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>;
/**
 * @compositeParams
 */
declare function useListboxItem<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({ context: { listboxContext: { selectionLimit }, ...context }, listboxParameters: { selected, onMultiSelect }, pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, ...restParams }: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M>;
interface UseGridlistContext<GridlistRowElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends CompleteGridNavigationRowContext<GridlistRowElement, RM> {
    gridlistRowContext: {
        /**
         * If this is a list that allows selection, this controls whether it's single-selection or multi-selection.
         *
         * Single-selection requires that you pass in a `selectedIndex` and listen for changes.
         *
         * Multi-selection requires each child pass its own `selected` boolean prop and listen for changes to itself.
         */
        selectionLimit: "single" | "multi" | "none";
    };
}
interface UseGridlistRowContext<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends CompleteGridNavigationCellContext<CellElement, M> {
}
interface UseGridlistParametersSelf<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends UseListboxParametersSelf<GridlistElement, GridlistRowElement, LabelElement, RM> {
}
interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>> extends OmitStrong<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, RM>, "singleSelectionDeclarativeParameters" | "rovingTabIndexParameters">, TargetedOmit<UseCompleteGridNavigationParameters<GridlistElement, GridlistRowElement, RM>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, Pick<UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "listboxParameters"> {
}
interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, RM>, "singleSelectionReturn" | "props"> {
    propsGridlist: ElementProps<GridlistElement>;
    propsGridlistLabel: ElementProps<LabelElement>;
    context: UseGridlistContext<GridlistRowElement, RM>;
}
interface UseGridlistRowReturnType<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>, never> {
}
interface UseGridlistRowParametersSelf {
    /**
     * **Multi-selection** only! When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: Nullable<boolean>;
}
interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, never> {
    context: UseGridlistContext<GridlistRowElement, RM>;
    gridlistRowParameters: UseGridlistRowParametersSelf;
}
interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<ExtendMerge<UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM>, Pick<UsePressReturnType<GridlistCellElement>, "pressReturn">>, "props"> {
    propsCell: ElementProps<GridlistCellElement>;
    propsTabbable: ElementProps<any>;
    propsPress: ElementProps<any>;
}
interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellParameters<GridlistCellElement, CM>, TargetedPick<UsePressParameters<GridlistCellElement>, "pressParameters", "longPressThreshold" | "onPressingChange" | "onPressSync"> {
}
interface GridlistRowInfo<GridlistRowElement extends Element> extends UseCompleteGridNavigationRowInfo<GridlistRowElement> {
}
interface GridlistCellInfo<GridlistCellElement extends Element> extends UseCompleteGridNavigationCellInfo<GridlistCellElement> {
}
/**
 * Implements a gridlist, which is a hybrid of a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) and a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).
 *
 * @remarks A Listbox is a very limited structure, essentially being just a list with no further interactive content allowed.
 *
 * If you need a list where each list item has a menu or a button or other non-text content, a Gridlist is probably what you want.
 *
 * @compositeParams
 *
 * @hasChild {@link useGridlistRow}
 * @hasChild {@link useGridlistCell}
 */
declare function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element>({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange }, rovingTabIndexParameters, ...restParams }: UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, GridlistRowInfo<GridlistRowElement>>): UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>>;
/**
 * @compositeParams
 *
 */
declare function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element>({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, hasCurrentFocusParameters, gridNavigationSingleSelectionSortableRowParameters, ...void1 }: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, GridlistRowInfo<GridlistRowElement>, GridlistCellInfo<GridlistCellElement>>;
/**
 * @compositeParams
 *
 */
declare function useGridlistCell<GridlistCellElement extends Element>({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }: UseGridlistCellParameters<GridlistCellElement, GridlistCellInfo<GridlistCellElement>>): UseGridlistCellReturnType<GridlistCellElement, GridlistCellInfo<GridlistCellElement>>;
interface UseMenuSurfaceParametersSelf {
    /**
     * What role the surface fulfills.
     *
     * General menus should use "menu". "dialog" can be used for generic pop-up things.
     */
    role: "dialog" | "menu" | "tree" | "grid" | "listbox";
    surfaceId: string;
}
interface UseMenuSurfaceParameters<_S extends Element, _B extends Element> extends OmitStrong<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters" | "refElementParameters" | "backdropDismissParameters" | "lostFocusDismissParameters" | "escapeDismissParameters" | "dismissParameters">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "escapeDismissParameters", "onDismissEscape" | "dismissEscapeActive">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters", "trapActive" | "focusOpener" | "onlyMoveFocus"> {
    menuSurfaceParameters: UseMenuSurfaceParametersSelf;
}
interface UseMenuSurfaceReturnType<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element> {
    propsSurface: ElementProps<MenuSurfaceElement>;
    propsTarget: ElementProps<MenuTargetElement>;
    propsTrigger: ElementProps<MenuTriggerElement>;
    propsSentinel: ElementProps<any>;
    refElementPopupReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["refElementPopupReturn"];
    refElementSourceReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["refElementSourceReturn"];
}
/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup, but not something potentially modal like a dialog).
 *
 * @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 *
 * Related to **menus**, which are a **menubar** contained within a **menu surface**.
 *
 * @compositeParams
 */
declare function useMenuSurface<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element>({ dismissParameters, focusTrapParameters, activeElementParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, modalParameters, escapeDismissParameters, ...void2 }: UseMenuSurfaceParameters<MenuSurfaceElement, MenuTriggerElement>): UseMenuSurfaceReturnType<MenuSurfaceElement, MenuTargetElement, MenuTriggerElement>;
interface UseFocusSentinelParameters {
    focusSentinel: {
        sendFocusToMenu: () => void;
        open: boolean;
        onClose(e: EventType<any, any>): void;
    };
}
/**
 * A focus sentinal is a hidden but focusable element that comes at the start or end
 * of the out-of-place-focusable component that, when activated or focused over, closes the component
 * (if focused within 100ms of the open prop changing, instead of
 * closing, focusing the sentinel immediately asks it to focus itself).
 * This exists for things like menus which can have focus but also need a way to return
 * to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
 * to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
 * and keyboard users can escape to close a menu, screen readers and other input methods
 * that don't use those two would become stuck.
 *
 * @compositeParams
 */
declare function useFocusSentinel<E extends Element>({ focusSentinel: { open, onClose, sendFocusToMenu } }: UseFocusSentinelParameters): ElementProps<E>;
interface UseToolbarParametersSelf<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> {
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
interface UseToolbarParameters<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>, "rovingTabIndexParameters" | "singleSelectionDeclarativeParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionReturn">, TargetedOmit<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>, "linearNavigationParameters", "arrowKeyDirection"> {
    toolbarParameters: UseToolbarParametersSelf<ContainerElement, ChildElement, M>;
}
interface UseToolbarReturnType<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeReturnType<UseCompleteListNavigationReturnType<ContainerElement, ChildElement, M>>, "props"> {
    propsToolbar: ElementProps<ContainerElement>;
    propsLabel: ElementProps<LabelElement>;
    randomIdInputReturn: UseRandomIdReturnType<ContainerElement, LabelElement>["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElement, ContainerElement>["randomIdReturn"];
    context: UseToolbarContext<ChildElement, M>;
}
interface UseToolbarSubInfo<ChildElement extends Element> extends UseCompleteListNavigationChildInfo<ChildElement> {
}
interface UseToolbarContextSelf /*extends Pick<UseToolbarParametersSelf<any, any, any>, "selectionLimit">*/ {
}
interface UseToolbarContext<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends CompleteListNavigationContext<ChildElement, M> {
    toolbarContext: UseToolbarContextSelf;
}
interface UseToolbarChildParametersSelf {
    disabledProp: "disabled" | "aria-disabled";
}
interface UseToolbarChildParameters<E extends Element, M extends UseToolbarSubInfo<E>> extends UseCompleteListNavigationChildParameters<E, M> {
    toolbarChildParameters: UseToolbarChildParametersSelf;
    context: UseToolbarContext<E, M>;
}
interface UseToolbarChildReturnType<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends UseCompleteListNavigationChildReturnType<ChildElement, M> {
}
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
declare function useToolbar<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({ linearNavigationParameters, toolbarParameters: { orientation, role, selectedIndex, onSelectedIndexChange, disabled, selectionLimit, ...void1 }, labelParameters, rovingTabIndexParameters, singleSelectionParameters: { selectionMode, ...singleSelectionParameters }, ...listNavParameters }: UseToolbarParameters<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>;
/**
 * @compositeParams
 */
declare function useToolbarChild<ChildElement extends Element>({ context: { toolbarContext, ...context }, info, toolbarChildParameters: { disabledProp }, ...args }: UseToolbarChildParameters<ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarChildReturnType<ChildElement, UseToolbarSubInfo<ChildElement>>;
interface UseMenubarContext<ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ChildElement, M> {
}
interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> {
}
interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> {
}
interface UseMenubarItemParametersSelf<MenuItemElement extends Element> {
    role: "menuitem" | "menuitemcheckbox" | "menuitemradio";
    /**
     * Optional. Applies in addition to any single-selection behavior.
     */
    onPress: Nullable<((e: PressEventReason<MenuItemElement>) => void)>;
}
interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildParameters<MenuItemElement, M>, "toolbarChildParameters">, TargetedPick<UsePressParameters<MenuItemElement>, "pressParameters", "onPressingChange"> {
    menuItemParameters: UseMenubarItemParametersSelf<MenuItemElement>;
}
interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
    propsMenubar: ElementProps<MenuParentElement>;
    context: UseMenubarContext<MenuItemElement, M>;
}
interface UseMenubarItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildReturnType<MenuItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters">, UsePressReturnType<MenuItemElement> {
}
/**
 * Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.
 *
 * @remarks A menubar is identical to a toolbar, except that every item
 * in a menubar is a menuitem (or similar) and has some sort of
 * role and action when pressed besides just single selection (if applicable).
 *
 * (A toolbar child won't have a defined role, but every menubar child will)
 *
 * @compositeParams
 */
declare function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element>(args: UseMenubarParameters<MenuParentElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, UseMenubarSubInfo<MenuItemElement>>;
/**
 * @compositeParams
 */
declare function useMenubarChild<MenuItemElement extends Element>({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }: UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>;
interface UseMenuContext<ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseMenubarContext<ChildElement, M> {
    menu: {
        closeFromMenuItemClicked(e: EventType<any, any>): void;
    };
}
interface UseMenuParametersSelf {
    /** This is called whenever the corresponding arrow key is pressed on the triggering button. */
    onOpen(): void;
    /**
     * This is the **physical** direction that is pressed
     * using the **arrow keys** on your keyboard.
     *
     * It has no effect on display, list navigation direction, etc.
     * It solely controls the arrow key that's listened for.
     */
    openDirection: "down" | "up" | "left" | "right" | null;
}
interface UseMenuParameters<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters" | "labelParameters">, TargetedOmit<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>, "menuSurfaceParameters", "role" | "surfaceId">, TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role">, TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role">, TargetedOmit<UseMenuSurfaceParameters<MenuParentElement, MenuButtonElement>, "escapeDismissParameters", never>, Pick<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>, "activeElementParameters" | "dismissParameters" | "modalParameters"> {
    menuParameters: UseMenuParametersSelf;
}
interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
}
interface UseMenuReturnType<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenuSurfaceReturnType<MenuSurfaceElement, MenuParentElement, MenuButtonElement>, OmitStrong<UseMenubarReturnType<MenuParentElement, MenuItemElement, MenuButtonElement, M>, "propsMenubar" | "propsLabel"> {
    context: UseMenuContext<MenuItemElement, M>;
}
interface MenuItemReturnTypeSelf {
    /**
     * When a menu item is clicked, it's often expected that the menu closes itself immediately after.
     *
     * Use this function to do so.
     */
    closeMenu(e: EventType<any, any>): void;
}
interface UseMenuItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemReturnType<MenuItemElement, M> {
    menuItemReturn: MenuItemReturnTypeSelf;
}
/**
 * Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.
 *
 * @remarks A menu is a specialization of a menubar (something that handles navigation among a set of menuitems)
 * and a menu surface (something that handles moving focus to/from an unrelated area of the page).
 *
 * Additionally, pressing the arrow key that corresponds to the direction that the menu opens
 * in will open it.
 *
 * @compositeParams
 */
declare function useMenu<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element>({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, activeElementParameters, toolbarParameters, modalParameters, ...restParams }: UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, UseMenubarSubInfo<MenuItemElement>>;
interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
    context: UseMenuContext<MenuItemElement, M>;
}
/**
 * @compositeParams
 */
declare function useMenuItem<MenuItemElement extends Element>(p: UseMenuItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>;
interface NotificationProviderProps {
    targetAssertive: string | Element;
    targetPolite: string | Element;
}
interface NotificationProviderReturnType {
    children: VNode;
    context: NotificationProviderContext;
}
interface NotificationProviderContext {
    notify(mode: "polite" | "assertive", content: VNode): void;
}
declare const NotificationProviderContext: import("preact").Context<NotificationProviderContext>;
/**
 * Allows children to send notifications to a screen reader or other assistive technology.
 *
 * Please note that because some devices only check for `aria-live` regions *once* on page load,
 * they cannot be created dynamically. You must pass the ID of the **already-existing** elements to use (or the elements themselves).
 *
 * One *must* have `aria-live=polite` and one *must* have `aria-live=assertive`, but there aren't really any other requirements.
 * They shouldn't be visible, I suppose.
 *
 * @compositeParams
 *
 * @hasChild {@link useNotify}
 */
declare function useNotificationProvider({ targetAssertive, targetPolite }: NotificationProviderProps): {
    notify: (mode: "polite" | "assertive", child: VNode) => number;
    context: {
        notify: (mode: "polite" | "assertive", child: VNode) => number;
    };
    children: import("preact-prop-helpers").JSX.Element;
};
declare function useNotify(): (mode: "assertive" | "polite", content: import("preact-prop-helpers").JSX.Element) => void;
interface UseProgressParametersSelf<IndicatorElement extends Element> {
    max: number;
    value: number | "indeterminate" | "disabled";
    valueText: Nullable<string>;
    tagProgressIndicator: ElementToTag<IndicatorElement>;
}
interface UseProgressParameters<IndicatorElement extends Element, _LabelElement extends Element> extends TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    progressIndicatorParameters: UseProgressParametersSelf<IndicatorElement>;
}
interface UseProgressReturnType<ProgressElement extends Element, ProgressLabelElement extends Element> extends OmitStrong<UseLabelReturnType<ProgressElement, ProgressLabelElement>, "propsInput" | "propsLabel"> {
    propsProgressIndicator: ElementProps<ProgressElement>;
    propsProgressLabel: ElementProps<ProgressLabelElement>;
    propsProgressRegion: ElementProps<any>;
}
/**
 * Provides the attributes and roles for a progress bar.
 *
 * @compositeParams
 */
declare function useProgress<ProgressElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagProgressIndicator, ...void1 }, ...void2 }: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement>;
interface UseProgressWithHandlerParametersSelf {
    /** If true, the progress bar will always read as at least having an indeterminate value. Nothing is announced to ATs when this changes. */
    forciblyPending: Nullable<boolean>;
    /** This will be announced to ATs when the async handler starts running */
    notifyPending: Nullable<VNode>;
    /** This will be announced to ATs when the async handler succeeds */
    notifySuccess: Nullable<VNode>;
    /** This will be announced to ATs when the async handler throws */
    notifyFailure: Nullable<VNode>;
}
interface UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends TargetedPick<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters", "tagProgressIndicator">, Pick<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters"> {
    progressWithHandlerParameters: UseProgressWithHandlerParametersSelf;
    asyncHandlerParameters: UseAsyncHandlerParameters<EventType, CaptureType>;
}
interface UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> {
    propsProgressIndicator: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressIndicator"];
    propsProgressLabel: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressLabel"];
    propsProgressRegion: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressRegion"];
    asyncHandlerReturn: UseAsyncHandlerReturnType<EventType, CaptureType>;
}
/**
 * Provides props for a progress bar based on the progress of an async event handler, and notifies ATs when the operation has started/finished.
 *
 * @remarks
 *
 * @compositeParams
 */
declare function useProgressWithHandler<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters, asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters }, progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 }, ...void2 }: UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>): UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>;
interface RadioChangeEventDetail<V extends number | string> {
    selectedValue: V | undefined;
}
type TargetedRadioChangeEvent<V extends number | string> = TargetedEnhancedEvent<Event, RadioChangeEventDetail<V>>;
type RadioChangeEventHandler<V extends number | string> = EnhancedEventHandler<Event, RadioChangeEventDetail<V>>;
interface UseRadioGroupParametersSelf<V extends string | number> {
    name: string;
    selectedValue: Nullable<V>;
    onSelectedValueChange: Nullable<RadioChangeEventHandler<V>>;
}
interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, _GroupLabelElement extends Element, TabbableChildElement extends Element, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "singleSelectionParameters">, TargetedOmit<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, any>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    radioGroupParameters: UseRadioGroupParametersSelf<V>;
}
interface UseRadioParametersSelf<V extends string | number> {
    value: V;
}
interface UseRadioParameters<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> extends UseGenericChildParameters<RadioContext<V, FocusableLabelElement<LP, InputElement, LabelElement>, M>, Pick<M, Exclude<UseCompleteListNavigationChildInfoKeysParameters<M>, "focusSelf">>>, OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, "info" | "context">, TargetedOmit<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, "info", "focusSelf">, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "labelParameters", never>, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "pressParameters", "excludeSpace" | "onPressSync">, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "checkboxLikeParameters", "checked" | "role"> {
    radioParameters: UseRadioParametersSelf<V>;
}
interface RadioContextSelf<V extends number | string> {
    name: string;
    nameToIndex: Map<V, number>;
    indexToName: Map<number, V>;
}
interface RadioContext<V extends number | string, ChildElement extends Element, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ChildElement, M> {
    radioContext: RadioContextSelf<V>;
}
interface UseRadioGroupReturnTypeSelf {
    selectedIndex: number | null;
}
interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends OmitStrong<UseCompleteListNavigationDeclarativeReturnType<GroupElement, TabbableChildElement, M>, "context" | "props"> {
    radioGroupReturn: UseRadioGroupReturnTypeSelf;
    propsRadioGroup: ElementProps<GroupElement>;
    propsRadioGroupLabel: ElementProps<GroupLabelElement>;
    // override
    context: RadioContext<V, TabbableChildElement, M>;
}
interface RadioSubInfo<TabbableChildElement extends Element, V extends string | number> extends UseCompleteListNavigationChildInfo<TabbableChildElement> {
}
/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useRadio}
 */
declare function useRadioGroup<V extends string | number, G extends Element, GL extends Element, TCE extends Element>({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, refElementParameters, ...void1 }: UseRadioGroupParameters<V, G, GL, TCE, RadioSubInfo<TCE, V>>): UseRadioGroupReturnType<V, G, GL, TCE, RadioSubInfo<TCE, V>>;
interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends Element, IL extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong<UseCompleteListNavigationChildReturnType<FocusableLabelElement<LP, I, IL>, M>, "propsChild" | "propsTabbable" | "pressParameters">, UseCheckboxLikeReturnType<I, IL> {
    propsInput: ElementProps<I>;
    propsLabel: ElementProps<IL>;
}
/**
 * @compositeParams
 */
declare function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number>({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>;
type RangeChangeEvent<E extends EventTarget> = {
    [EventDetail]: {
        value: number;
    };
} & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;
interface SliderThumbInfo extends ManagedChildInfo<number> {
}
interface UseSliderThumbParametersSelf<E extends Element> extends TagSensitiveProps<E> {
    value: number;
    valueText: Nullable<string>;
    onValueChange: Nullable<(e: RangeChangeEvent<E>) => void>;
    min: Nullable<number>;
    max: Nullable<number>;
    /**
     * There's no, like, "slider container" for multi-thumb sliders defined,
     * so each individual slider needs its own label.
     * TODO: This is like a tab/tabpanel linking thing where each label is outside
     * of the container. For now, it's easier to just
     * assume a string-based label instead of an element-based one.
     *
     */
    label: string;
}
interface UseSliderThumbParameters<ThumbElement extends Element, M extends SliderThumbInfo = SliderThumbInfo> extends UseGenericChildParameters<SliderContext<M>, Pick<M, "index">> {
    sliderThumbParameters: UseSliderThumbParametersSelf<ThumbElement>;
}
//export interface UseSliderThumbProps<E extends Element> extends ElementProps<E> {}
interface UseSliderParametersSelf {
    min: number;
    max: number;
}
interface UseSliderParameters<M extends SliderThumbInfo> extends UseManagedChildrenParameters<M> {
    sliderParameters: UseSliderParametersSelf;
}
interface UseSliderThumbReturnTypeSelf {
    min: number;
    max: number;
}
interface UseSliderThumbReturnType<E extends Element, M extends SliderThumbInfo = SliderThumbInfo> extends UseManagedChildReturnType<M> {
    sliderThumbReturn: UseSliderThumbReturnTypeSelf;
    propsSliderThumb: ElementProps<E>;
}
//export type UseSliderThumb<ThumbElement extends Element, M extends SliderThumbInfo> = (props: UseSliderThumbParameters<ThumbElement, M>) => UseSliderThumbReturnType<ThumbElement, M>;
interface UseSliderReturnType<M extends SliderThumbInfo> extends UseManagedChildrenReturnType<M> {
    context: SliderContext<M>;
}
interface SliderContextSelf {
    min: number;
    max: number;
    baseId: string;
}
interface SliderContext<M extends SliderThumbInfo> extends UseManagedChildrenContext<M> {
    sliderContext: SliderContextSelf;
}
/**
 * Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useSliderThumb}
 */
declare function useSlider<M extends SliderThumbInfo>({ sliderParameters: { max, min }, managedChildrenParameters }: UseSliderParameters<M>): UseSliderReturnType<M>;
/**
 * @compositeParams
 */
declare function useSliderThumb<ThumbElement extends Element>({ sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 }, info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, ...void1 }: UseSliderThumbParameters<ThumbElement>): UseSliderThumbReturnType<ThumbElement>;
interface UseTableContextSelf {
    setSortBodyFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn(column: number): SortInfo;
    getCurrentSortColumn(): number | null;
    getCurrentSortDirection(): SortDirection;
}
interface UseTableContext {
    tableContext: UseTableContextSelf;
}
interface UseTableSectionContext<TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends CompleteGridNavigationRowContext<TableRowElement, RM>, UseTableContext {
}
interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    location: "head" | "body" | "foot";
    tagTableSection: ElementToTag<TableSectionElement>;
}
interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "rovingTabIndexParameters" | "sortableChildrenParameters">, TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, RM>, "rovingTabIndexParameters", "focusSelfParent"> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    context: UseTableContext;
}
interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, RM extends TableRowInfo<TableRowElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, RM>, "props"> {
    propsTableSection: ElementProps<TableSectionElement>;
    context: UseTableSectionContext<TableRowElement, RM>;
}
interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>, "context"> {
    context: UseTableRowContext<TableCellElement, CM>;
}
interface UseTableRowParametersSelf<TableRowElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: Nullable<boolean>;
    tagTableRow: ElementToTag<TableRowElement>;
}
interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "gridNavigationSingleSelectionSortableRowParameters" | "rovingTabIndexParameters" | "typeaheadNavigationParameters" | "context" | "info">, TargetedOmit<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters", never> {
    context: UseTableSectionContext<TableRowElement, RM>;
    tableRowParameters: UseTableRowParametersSelf<TableRowElement>;
    info: OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["info"], never>;
}
interface UseTableRowContext<TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationCellContext<TableCellElement, M> {
    tableContext: UseTableContext["tableContext"];
}
interface UseTableCellReturnTypeSelf {
    sortByThisColumn(): SortInfo;
}
interface UseTableCellReturnType<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<TableCellElement, CM>, "props"> {
    propsCell: ElementProps<TableCellElement>;
    propsFocus: ElementProps<any>;
    tableCellReturn: UseTableCellReturnTypeSelf;
}
interface UseTableCellParametersSelf<TableCellElement extends Element> {
    tagTableCell: ElementToTag<TableCellElement>;
}
interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends UseGenericChildParameters<UseTableRowContext<TableCellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>, OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>, "info" | "context"> {
    tableCellParameters: UseTableCellParametersSelf<TableCellElement>;
}
interface TableRowInfo<TableRowElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement> {
}
interface TableCellInfo<TableCellElement extends Element> extends UseCompleteGridNavigationCellInfo<TableCellElement> {
    getSortValue(): unknown;
}
interface UseTableParameters<TableElement extends Element, LabelElement extends Element> extends TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tableParameters: UseTableParametersSelf<TableElement, LabelElement>;
}
interface UseTableParametersSelf<TableElement extends Element, LabelElement extends Element> extends Pick<UseListboxParameters<TableElement, any, LabelElement, any>["listboxParameters"], "selectionLimit"> {
    tagTable: ElementToTag<TableElement>;
}
interface UseTableReturnType<TableElement extends Element, LabelElement extends Element> {
    propsTable: ElementProps<TableElement>;
    propsLabel: ElementProps<LabelElement>;
    context: UseTableContext;
}
type SortDirection = "ascending" | "descending";
interface SortInfo {
    column: number;
    direction: SortDirection;
}
/**
 * Creates a sortable data table in a [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useTableSection}
 * @hasChild {@link useTableRow}
 * @hasChild {@link useTableCell}
 */
declare function useTable<TableElement extends Element, LabelElement extends Element>({ labelParameters, tableParameters: { selectionLimit, tagTable } }: UseTableParameters<TableElement, LabelElement>): UseTableReturnType<TableElement, LabelElement>;
/**
 * @compositeParams
 */
declare function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element>({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection, location }, typeaheadNavigationParameters, context: { tableContext }, refElementParameters, ...void1 }: UseTableSectionParameters<TableSectionElement, TableRowElement, TableRowInfo<TableRowElement>>): UseTableSectionReturnType<TableSectionElement, TableRowElement, TableRowInfo<TableRowElement>>;
/**
 * @compositeParams
 */
declare function useTableRow<TableRowElement extends Element, TableCellElement extends Element>({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, ...void1 }: UseTableRowParameters<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>>): UseTableRowReturnType<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>>;
/**
 * @compositeParams
 */
declare function useTableCell<TableCellElement extends Element>({ tableCellParameters: { tagTableCell }, info, ...p }: UseTableCellParameters<TableCellElement, TableCellInfo<TableCellElement>>): UseTableCellReturnType<TableCellElement, TableCellInfo<TableCellElement>>;
interface TabPanelInfo extends ManagedChildInfo<number> {
    getVisible(): boolean;
    setVisibleIndex: (newIndex: number | null, previousIndex: number | null) => void;
}
interface TabInfo<E extends Element> extends UseCompleteListNavigationChildInfo<E> {
}
type TabsChangeEvent<E extends Element> = {
    [EventDetail]: {
        selectedIndex: number;
    };
} & Pick<EventType<E, Event>, "target" | "currentTarget">;
interface UseTabsParametersSelf {
    localStorageKey: Nullable<keyof PersistentStates>;
    orientation: "horizontal" | "vertical";
    role: Nullable<"tablist" | string>;
}
interface UseTabsParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends UseTabListParameters<TabContainerElement, TabElement, M>, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tabsParameters: UseTabsParametersSelf;
}
interface UseTabParameters<TabElement extends Element, M extends TabInfo<TabElement>> extends UseGenericChildParameters<UseTabsContext<TabElement, M>, Pick<TabInfo<TabElement>, "index" | "focusSelf" | "untabbable" | "unselectable" | "getSortValue">>, OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M>, "context" | "info">, TargetedOmit<UsePressParameters<TabElement>, "pressParameters", "excludeEnter" | "excludePointer" | "excludeSpace" | "allowRepeatPresses" | "onPressSync"> {
}
interface UseTabPanelParameters<M extends TabPanelInfo> extends UseGenericChildParameters<UseTabPanelsContext<M>, Pick<M, "index">>, OmitStrong<UseManagedChildParameters<M>, "context" | "info"> {
}
interface UseTabsContext<ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ChildElement, M> {
    tabsContext: TC;
}
interface UseTabPanelsContext<M extends TabPanelInfo> extends UseManagedChildrenContext<M> {
    tabPanelContext: TC;
}
interface TC {
    getVisibleIndex: () => number | null;
    getPanelId: (index: number) => string;
    getTabId: (index: number) => string;
}
interface UseTabReturnType<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TabElement, M>, "pressParameters" | "propsChild" | "propsTabbable">, UsePressReturnType<TabElement> {
    props: ElementProps<TabElement>;
}
interface UseTabLabelParameters {
}
interface UseTabListParameters<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionParameters">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "linearNavigationParameters", "arrowKeyDirection">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "singleSelectionParameters", "ariaPropName"> {
}
interface UseTabListReturnType<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
}
interface UseTabPanelReturnTypeSelf {
    visibleOffset: number | null;
    visible: boolean | null;
    getVisible: () => boolean;
}
interface UseTabPanelReturnType<E extends Element> {
    props: ElementProps<E>;
    tabPanelReturn: UseTabPanelReturnTypeSelf;
}
interface UseTabListLabelReturnTypeInfo {
}
interface UseTabLabelReturnTypeWithHooks<LabelElement extends Element> extends UseTabListLabelReturnTypeInfo {
    useTabListLabelProps: (props: ElementProps<LabelElement>) => ElementProps<LabelElement>;
}
interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
    propsContainer: ElementProps<TabContainerElement>;
    propsLabel: ElementProps<LabelElement>;
    contextPanels: UseTabPanelsContext<TabPanelInfo>;
    contextTabs: UseTabsContext<TabElement, M>;
}
type UseTab<_TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabParameters<TabElement, M>) => UseTabReturnType<TabElement, M>;
type UseTabList<TabContainerElement extends Element, TabElement extends Element, M extends TabInfo<TabElement>> = (args: UseTabListParameters<TabContainerElement, TabElement, M>) => UseTabListReturnType<TabContainerElement, TabElement, M>;
type UseTabPanel<PanelElement extends Element, M extends TabPanelInfo> = (args: UseTabPanelParameters<M>) => UseTabPanelReturnType<PanelElement>;
type UseTabListLabel<LabelElement extends Element> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;
/**
 * Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useTab}
 * @hasChild {@link useTabPanel}
 */
declare function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element>({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange: ssi, selectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }: UseTabsParameters<TabListElement, TabElement, TabInfo<TabElement>>): UseTabsReturnType<TabListElement, TabElement, LabelElement, TabInfo<TabElement>>;
/**
 * @compositeParams
 */
declare function useTab<TabElement extends Element>({ info: { focusSelf: focusSelfParent, index, unselectable, untabbable, getSortValue, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context, hasCurrentFocusParameters, refElementParameters, ...void3 }: UseTabParameters<TabElement, TabInfo<TabElement>>): UseTabReturnType<TabElement, TabInfo<TabElement>>;
/**
 * @compositeParams
 */
declare function useTabPanel<PanelElement extends Element>({ info, context }: UseTabPanelParameters<TabPanelInfo>): UseTabPanelReturnType<PanelElement>;
interface UseToastsParametersSelf {
    visibleCount: number; // The maximum number of toasts that are shown at one time (used for automatic management of when to show toasts, i.e. don't show this toast if 2 are already on-screen -- 1 is a good default)
}
interface UseToastsParameters extends UseManagedChildrenParameters<ToastInfo> {
    toastsParameters: UseToastsParametersSelf;
}
interface UseToastParametersSelf {
    politeness?: Nullable<"polite" | "assertive">;
    timeout: Nullable<number>;
    children: ComponentChildren;
}
interface UseToastParameters<M extends ToastInfo> extends OmitStrong<UseManagedChildParameters<M>, "info" | "context">, UseGenericChildParameters<ToastsContext<M>, Pick<M, "index">> {
    toastParameters: UseToastParametersSelf;
}
interface ToastInfo extends ManagedChildInfo<number> {
    setNumberAheadOfMe: StateUpdater<number>;
    focus(): void;
    show(): void;
}
interface UseToastReturnTypeSelf {
    numberOfToastsAheadOfUs: number;
    dismiss: () => void;
    dismissed: boolean;
    showing: boolean;
    resetDismissTimer: () => void;
}
interface UseToastReturnType<ToastType extends Element, M extends ToastInfo> extends UseManagedChildReturnType<M> {
    toastReturn: UseToastReturnTypeSelf;
    props: ElementProps<ToastType>;
}
interface UseToastsReturnType<ContainerType extends Element, M extends ToastInfo> extends UseManagedChildrenReturnType<M> {
    context: ToastsContext<M>;
    props: ElementProps<ContainerType>;
}
interface ToastsContextSelf {
    onAnyToastDismissed: (_index: number) => void;
    getMaxVisibleCount: () => number;
    onAnyToastMounted: (toastIndex: number) => void;
}
interface ToastsContext<M extends ToastInfo> extends UseManagedChildrenContext<M> {
    toastContext: ToastsContextSelf;
}
/**
 * Allows any descendent children to push a visible (and/or audible) message to the user's attention.
 *
 * @compositeParams
 *
 * @hasChild {@link useToast}
 */
declare function useToasts<ContainerType extends Element>({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }: UseToastsParameters): UseToastsReturnType<ContainerType, ToastInfo>;
/**
 * @compositeParams
 */
declare function useToast<E extends Element>({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }: UseToastParameters<ToastInfo>): UseToastReturnType<E, ToastInfo>;
type TooltipStatus = "hover" | "focus" | null;
interface UseTooltipParametersSelf {
    /**
     * Called when the tooltip's content should be shown or hidden
     * or when the manner in which it's shown should be changed.
     *
     * This can change from `"hover"` to `"mouse"`, but never the other way around.
     *
     * `"null"` means the tooltip should be hidden
     *
     * @param status C
     */
    onStatus(status: TooltipStatus): void;
    /**
     * This is whether `aria-describedby` or `aria-labelledby` is used.
     *
     * Certain situations require one or the other, so you need to specify for each circumstance.
     */
    tooltipSemanticType: "label" | "description";
    /**
     * How long should the tooltip wait to show itself if it was shown via hover?
     *
     * Default is 0.
     */
    hoverDelay: number | null;
    usesLongPress: boolean;
}
interface UseTooltipParameters<TriggerType extends Element, PopupType extends Element> extends TargetedPick<UseEscapeDismissParameters<PopupType, true>, "escapeDismissParameters", "getDocument" | "parentDepth">, TargetedPick<UsePressReturnType<TriggerType>, "pressReturn", "longPress">, Pick<UseDismissParameters<any>, "activeElementParameters"> {
    tooltipParameters: UseTooltipParametersSelf;
}
type TooltipState = `${"hovering" | "focused"}-${"popup" | "trigger"}` | null;
//setTimeout(() => alert(`Hover: ${pageCurrentlyUsingHover.toString()}`), 1000);
/*
//let delayedAlert2 = debounce(delayedAlert3, 4000);
let messages = new Set<string>();
const delayedAlert2 = debounce(function delayedAlert3() {
alert([...messages].join("\n"));
messages.clear();
}, 2500);

function delayedAlert(message: string) {
messages.add(message);
delayedAlert2();
}*/
/**
 * Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.
 *
 * @remarks Tooltips are remarkably under-specified, so some of this is speculative.
 *
 * @compositeParams
 */
declare function useTooltip<TriggerType extends Element, PopupType extends Element>({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay, usesLongPress }, activeElementParameters, escapeDismissParameters, pressReturn: { longPress, ...void2 }, ...void1 }: UseTooltipParameters<TriggerType, PopupType>): UseTooltipReturnType<TriggerType, PopupType>;
interface UseTooltipReturnTypeSelf {
    getState(): TooltipState;
}
interface UseTooltipReturnType<TriggerType extends Element, PopupType extends Element> {
    propsPopup: ElementProps<PopupType>;
    propsTrigger: ElementProps<TriggerType>;
    tooltipReturn: UseTooltipReturnTypeSelf;
}
/**
 * Quickly puts together component props from the hook it's based on.
 *
 * @param ReturnType - The `info` that is passed to the render function, and what the hook returns
 * @param OtherProps - All the parameters, squashed down with `Get5` or `Get12` or whatever.
 * @param RequiredProps - Which props are required -- all others are optional in the component
 */
type GenericComponentProps<ReturnType, OtherProps, RequiredProps extends keyof OtherProps> = PartialExcept<OtherProps, RequiredProps> & {
    imperativeHandle?: Ref<ReturnType>;
    render(info: ReturnType): VNode;
};
declare const ContextDefaults: {
    collator: Context<Intl.Collator | null>;
    pageNavigationSize: Context<number>;
    typeaheadTimeout: Context<number>;
    focusSelf: Context<(e: any) => void>;
    noTypeahead: Context<boolean>;
    getIndex: Context<GetIndex>;
    disableArrowKeys: Context<boolean>;
    disableHomeEndKeys: Context<boolean>;
    getWindow: Context<() => Window>;
    getDocument: Context<() => Document>;
    focusOpener: Context<(e: any) => void>;
    getText: Context<(e: any) => string | null>;
    selectionMode: Context<"disabled" | "focus" | "activation">;
};
type DefaultExcepts = keyof typeof ContextDefaults;
type ContextType<T extends Context<any>> = T extends Context<infer C> ? C : unknown;
declare function useDefault<K extends DefaultExcepts>(context: K, userValue: null | undefined | ContextType<(typeof ContextDefaults)[K]>): ContextType<(typeof ContextDefaults)[K]>;
declare const ParentDepthContext: Context<number>;
type PartialExceptD<T, KeepRequired extends keyof T> = Partial<Pick<T, Exclude<keyof T, KeepRequired>>> & Pick<T, KeepRequired>;
/**
 * Like `Partial<T>`, but the properties given by `K` will **NOT** be made partial -- they'll remain required.
 */
type PartialExcept<T, K extends keyof T> = PartialExceptD<T, K>;
declare function useDefaultRenderPortal({ portalId, children }: {
    portalId: string;
    children: VNode;
}): VNode;
type AccordionProps<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<UseAccordionReturnType<HeaderButtonElement, M>, Get5<UseAccordionParameters<HeaderButtonElement, M>, "accordionParameters", "typeaheadNavigationParameters", "linearNavigationParameters", "managedChildrenParameters", "refElementParameters">, never>;
type AccordionSectionProps<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>, Get6<UseAccordionSectionParameters<HeaderButtonElement, BodyElement, M>, "info", "accordionSectionParameters", "buttonParameters", "textContentParameters", "pressParameters", "refElementHeaderButtonParameters">, "index" | "tagButton"> & {
    info?: OmitStrong$0<M, keyof UseAccordionSectionInfo<HeaderButtonElement>>;
};
declare const Accordion: <HeaderButtonElement extends Element>({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, ...void1 }: AccordionProps<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>) => import("preact").JSX.Element;
declare const AccordionSection: <HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ open, index, tagButton, disabled, bodyRole, untabbable, getText, imperativeHandle, onPressSync, focusSelf, render, info, onElementChange, onMount, onUnmount, ...void1 }: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement, UseAccordionSectionInfo<HeaderButtonElement>>) => import("preact").JSX.Element;
type ButtonProps<ButtonElement extends Element> = GenericComponentProps<UseButtonReturnType<ButtonElement>, Get3<UseButtonParameters<ButtonElement>, "buttonParameters", "pressParameters", "refElementParameters">, "tagButton">;
declare const Button: <ButtonElement extends Element>({ tagButton, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeSpace, onPressingChange, onPressSync, focusSelf, role, imperativeHandle, ...void1 }: ButtonProps<ButtonElement>) => import("preact-prop-helpers").JSX.Element;
type CheckboxGroupProps<ParentElement extends Element, TabbableChildElement extends Element> = GenericComponentProps<UseCheckboxGroupReturnType<ParentElement, TabbableChildElement>, Get9<UseCheckboxGroupParameters<ParentElement, TabbableChildElement>, "linearNavigationParameters", "checkboxGroupParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "typeaheadNavigationParameters", "staggeredChildrenParameters", "rovingTabIndexParameters", "rovingTabIndexParameters", "refElementParameters">, never>;
type CheckboxGroupParentProps<TCE extends Element> = GenericComponentProps<UseCheckboxGroupParentReturnType<TCE>, Get4<UseCheckboxGroupParentParameters<TCE>, "textContentParameters", "info", "refElementParameters", "hasCurrentFocusParameters">, "index" | "getSortValue" | "focusSelf">; // & { info?: OmitStrong<M, keyof CheckboxGroupInfo<TCE>> };
type CheckboxGroupChildProps<TCE extends Element> = GenericComponentProps<UseCheckboxGroupChildReturnType<TCE>, Get5<UseCheckboxGroupChildParameters<TCE>, "checkboxGroupChildParameters", "textContentParameters", "info", "refElementParameters", "hasCurrentFocusParameters">, "index" | "getSortValue" | "focusSelf" | "checked" | "onChangeFromParent">; // & { info?: OmitStrong<M, keyof CheckboxGroupInfo<TCE>> };
declare const CheckboxGroup: <ParentElement extends Element, TabbableChildElement extends Element>({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }: CheckboxGroupProps<ParentElement, TabbableChildElement>) => import("preact").JSX.Element;
declare const CheckboxGroupParent: <TCE extends Element>({ render, index, focusSelf, untabbable, getSortValue, unselectable, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, 
//info,
..._rest }: CheckboxGroupParentProps<TCE>) => import("preact").JSX.Element;
declare const CheckboxGroupChild: <TCE extends Element>({ index, render, checked, onChangeFromParent, getSortValue, untabbable, getText, focusSelf, unselectable, 
//info,
imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, ...void1 }: CheckboxGroupChildProps<TCE>) => import("preact").JSX.Element;
type CheckboxProps<InputElement extends Element, LabelElement extends Element> = GenericComponentProps<UseCheckboxReturnType<InputElement, LabelElement>, Get4<UseCheckboxParameters<LabelPosition, InputElement, LabelElement>, "checkboxLikeParameters", "labelParameters", "pressParameters", "checkboxParameters">, "tagInput" | "tagLabel" | "labelPosition" | "ariaLabel" | "checked">;
declare function defaultRenderCheckboxLike<I extends Element, L extends Element, InfoType>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>): (info: InfoType) => VNode$0<any>;
interface DefaultRenderCheckboxLikeParameters<I extends Element, L extends Element, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden";
    tagInput: ElementToTag<I>;
    tagLabel: ElementToTag<L>;
    makePropsInput: (info: InfoType) => ElementProps<I>;
    makePropsLabel: (info: InfoType) => ElementProps<L>;
}
declare const Checkbox: <I extends Element, L extends Element>({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, longPressThreshold, excludeSpace, imperativeHandle, render, onCheckedChange, ...void1 }: CheckboxProps<I, L>) => createElement.JSX.Element;
type DialogProps<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> = GenericComponentProps<UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>, Get10<UseDialogParameters<DialogElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters", "activeElementParameters", "backdropDismissParameters", "escapeDismissParameters", "dismissParameters", "modalParameters", "refElementParameters">, "ariaLabel" | "onDismiss" | "active" | "focusPopup">;
declare const Dialog: <FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, focusOpener, getDocument, imperativeHandle, parentDepth, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, focusPopup, ariaLabel, onElementChange, onMount, onUnmount, render }: DialogProps<FocusContainerElement, SourceElement, DialogElement, TitleElement>) => import("preact-prop-helpers").JSX.Element;
type DrawerProps<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> = GenericComponentProps<UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>, Get11<UseDrawerParameters<DrawerElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters", "activeElementParameters", "dismissParameters", "backdropDismissParameters", "escapeDismissParameters", "lostFocusDismissParameters", "modalParameters", "refElementParameters">, "ariaLabel" | "onDismiss" | "active" | "focusPopup">;
declare const Drawer: <FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element>({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, ...void1 }: DrawerProps<FocusContainerElement, SourceElement, DrawerElement, TitleElement>) => import("preact-prop-helpers").JSX.Element;
type GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> = GenericComponentProps<UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, Get12<UseGridlistParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridNavigationParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "labelParameters", "listboxParameters", "singleSelectionParameters", "refElementParameters">, "selectionLimit" | "groupingType" | "ariaLabel" | "selectedIndex">;
type GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement> = GridlistRowInfo<GridlistRowElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>> = GenericComponentProps<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>, Get7<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "textContentParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridlistRowParameters", "info", "hasCurrentFocusParameters">, "index"> & {
    info?: OmitStrong$0<RM, keyof GridlistRowInfo<any>>;
};
type GridlistChildProps<CellElement extends Element, CM extends GridlistCellInfo<CellElement> = GridlistCellInfo<CellElement>> = GenericComponentProps<UseGridlistCellReturnType<CellElement, CM>, Get4<UseGridlistCellParameters<CellElement, CM>, "gridNavigationCellParameters", "textContentParameters", "pressParameters", "info">, never> & {
    info?: OmitStrong$0<CM, keyof GridlistCellInfo<any>>;
};
declare function defaultRenderGridlistChild<CellElement extends Element, CM extends GridlistCellInfo<CellElement>>({ tagGridlistChild, makePropsGridlistChild }: {
    tagGridlistChild: ElementToTag<CellElement>;
    makePropsGridlistChild: (info: UseGridlistCellReturnType<CellElement, CM>) => ElementProps<CellElement>;
}): (info: UseGridlistCellReturnType<CellElement, CM>) => import("preact").VNode<any>;
declare const Gridlist: <GridlistElement extends Element, RowElement extends Element, CellElement extends Element, LabelElement extends Element>({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, selectionLimit, untabbable, paginationMax, paginationMin, staggered, compare, getIndex, onTabbableColumnChange, ariaLabel, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, ...void1 }: GridlistProps<GridlistElement, RowElement, CellElement, LabelElement, GridlistRowInfo<RowElement>, GridlistCellInfo<CellElement>>) => createElement.JSX.Element;
declare const GridlistRow: <RowElement extends Element, CellElement extends Element>({ index, collator, unselectable, untabbable, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getText, render, initiallyTabbedIndex, onNavigateTypeahead, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, info: uinfo }: GridlistRowProps<RowElement, CellElement, GridlistRowInfo<RowElement>, GridlistCellInfo<CellElement>>) => createElement.JSX.Element;
declare const GridlistChild: <CellElement extends Element>({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, getSortValue, imperativeHandle, info: subInfo }: GridlistChildProps<CellElement, GridlistCellInfo<CellElement>>) => createElement.JSX.Element;
type ElementToTag$0<A> = any;
interface HeadingProps<T extends Element> extends RenderableProps<ElementProps<T>> {
    /**
     * The contents of the heading.
     *
     * Separate from the children, which become the content described by this heading.
     */
    heading: ComponentChildren;
    tag?: ElementToTag$0<T>;
}
/**
 * Utility component that creates a heading `h1`, `h2`, `h3`, etc.
 *
 * Which one is chosen depends on a parent `Heading`, with the root-most `Heading`
 * starting at 1, or the value specified by `HeadingReset`.
 *
 * Specify the actual contents of the heading with the `heading` prop.
 *
 */
declare const Heading: <T extends Element>({ children, heading, tag, ...props }: HeadingProps<T>) => createElement.JSX.Element;
/**
 * Set the value that the next `Heading` will use as its base.
 *
 * Minimum of 1.
 */
declare const HeadingReset: import("preact").FunctionComponent<{
    newLevel: number;
    children: ComponentChildren;
}>;
interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends Get10<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "paginatedChildrenParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters">, OmitStrong$0<Get<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType"> {
}
interface ListboxItemPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends Get4<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters", "textContentParameters", "refElementParameters", "hasCurrentFocusParameters">, Pick<M, "index" | "untabbable" | "unselectable" | "getSortValue" | "focusSelf">, OmitStrong$0<NonNullable<Get<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, never> {
}
interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>, ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>, "ariaLabel" | "selectionLimit" | "selectedIndex"> {
}
interface ListboxItemProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>, ListboxItemPropsBase<ListItemElement, M>, "index" | "getSortValue"> {
}
declare const GroupedListbox: <LabelElement extends Element>({ ariaLabel, selectionLimit, orientation, render, onElementChange, onMount, onUnmount }: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "selectionLimit" | "onElementChange" | "onMount" | "onUnmount" | "render">) => import("preact").JSX.Element;
declare const Listbox: <ListElement extends Element, ListItemElement extends Element, LabelElement extends Element>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, selectionLimit, untabbable, typeaheadTimeout, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, ...void1 }: ListboxProps<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>) => import("preact").JSX.Element;
declare const ListboxItem: <ListboxItemElement extends Element>({ unselectable, getText, untabbable, index, render, selected, getSortValue, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onMultiSelect, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, imperativeHandle, ...void1 }: ListboxItemProps<ListboxItemElement, ListboxInfo<ListboxItemElement>>) => import("preact").JSX.Element;
type MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, Get10<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters">, "orientation" | "ariaLabel" | "selectionLimit">;
type MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenubarItemReturnType<MenuItemElement, M>, Get6<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters", "info", "refElementParameters", "hasCurrentFocusParameters">, "index" | "getSortValue"> & {
    info?: OmitStrong$0<M, keyof UseMenubarSubInfo<MenuItemElement>>;
};
declare const MenubarItemContext: import("preact").Context<UseMenubarContext<any, any>>;
declare const Menubar: <ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, staggered, noTypeahead, untabbable, onTabbableIndexChange, compare, getIndex, disabled, selectedIndex, onSelectedIndexChange, typeaheadTimeout, role, ariaLabel, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, selectionLimit, ...void1 }: MenubarProps<ContainerElement, ChildElement, LabelElement, UseMenubarSubInfo<ChildElement>>) => import("preact").JSX.Element;
declare function MenubarItem<MenuItemElement extends Element>({ index, render, focusSelf, untabbable, getText, unselectable, onPress, getSortValue, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo }: MenubarItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): import("preact").JSX.Element;
type MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>, Get16<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters", "menuSurfaceParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "dismissParameters", "staggeredChildrenParameters", "escapeDismissParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "toolbarParameters", "singleSelectionParameters", "activeElementParameters", "refElementParameters", "dismissParameters", "modalParameters">, "active" | "onDismiss" | "openDirection" | "orientation" | "onOpen" | "selectionLimit">;
type MenuItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenuItemReturnType<MenuItemElement, M>, MenubarItemProps<MenuItemElement, M>, "index" | "getSortValue"> & {
    info?: OmitStrong$0<M, keyof UseMenubarSubInfo<MenuItemElement>>;
};
declare function Menu<SurfaceElement extends Element, ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element>({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, ariaPropName, selectionMode, selectionLimit, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, compare, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, parentDepth, disabled, staggered, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, render, imperativeHandle, ...void1 }: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement, UseMenubarSubInfo<ChildElement>>): import("preact").JSX.Element;
declare function MenuItem<MenuItemElement extends Element>({ index, untabbable, getSortValue, onPress, getText, role, focusSelf, unselectable, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info, ...void1 }: MenuItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): import("preact").JSX.Element;
type Get$0<T, K extends keyof T> = T[K];
interface ProgressPropsBase<IndicatorElement extends Element, LabelElement extends Element> extends Get$0<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters">, Get$0<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters"> {
}
interface ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends Get3<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "labelParameters", "progressIndicatorParameters", "progressWithHandlerParameters">, UseAsyncHandlerParameters<EventType, CaptureType> {
}
interface ProgressProps<IndicatorElement extends Element, LabelElement extends Element> extends GenericComponentProps<UseProgressReturnType<IndicatorElement, LabelElement>, PartialExcept<ProgressPropsBase<IndicatorElement, LabelElement>, "tagProgressIndicator" | "ariaLabel">, "tagProgressIndicator"> {
}
interface ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends GenericComponentProps<UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>, PartialExcept<ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement, LabelElement>, "capture" | "tagProgressIndicator" | "ariaLabel" | "asyncHandler">, "capture" | "tagProgressIndicator"> {
}
declare const Progress: <IndicatorElement extends Element, LabelElement extends Element>({ tagProgressIndicator, ariaLabel, max, render, value, valueText, imperativeHandle, ...void1 }: ProgressProps<IndicatorElement, LabelElement>) => import("preact-prop-helpers").JSX.Element;
declare const ProgressWithHandler: <EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ ariaLabel, forciblyPending, render, tagProgressIndicator, asyncHandler, capture, debounce, throttle, notifyFailure, notifyPending, notifySuccess, imperativeHandle, ...void1 }: ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement, LabelElement>) => import("preact-prop-helpers").JSX.Element;
interface RadioGroupPropsBase<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends Get10<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters", "linearNavigationParameters", "labelParameters", "radioGroupParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters", "sortableChildrenParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "refElementParameters"> {
}
interface RadioPropsBase<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends Get7<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "radioParameters", "checkboxLikeParameters", "labelParameters", "textContentParameters", "pressParameters", "hasCurrentFocusParameters", "refElementParameters">, Pick<RadioSubInfo<any, V>, "index" | "untabbable" | "unselectable"> {
}
interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends GenericComponentProps<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>, PartialExcept<RadioGroupPropsBase<V, GroupElement, GroupLabelElement, TabbableChildElement>, "ariaLabel" | "name" | "selectedValue">, "name" | "selectedValue"> {
}
interface RadioProps<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends GenericComponentProps<UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, PartialExcept<RadioPropsBase<LP, InputElement, LabelElement, V>, "index" | "value" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel">, "value" | "index" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel"> {
}
declare const RadioGroup: <V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, TabbableChildElement extends HTMLElement>({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, compare, staggered, getIndex, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, ...void1 }: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>) => import("preact").JSX.Element;
declare const Radio: <LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element>({ unselectable, disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, ...void1 }: RadioProps<LP, InputElement, LabelElement, V>) => import("preact").JSX.Element;
type SliderProps<M extends SliderThumbInfo> = GenericComponentProps<UseSliderReturnType<M>, Get2<UseSliderParameters<M>, "managedChildrenParameters", "sliderParameters">, "min" | "max">;
type SliderThumbProps<ThumbElement extends Element, M extends SliderThumbInfo = SliderThumbInfo> = GenericComponentProps<UseSliderThumbReturnType<ThumbElement>, Get2<UseSliderThumbParameters<ThumbElement>, "sliderThumbParameters", "info">, "index" | "label" | "tag" | "value"> & {
    info?: OmitStrong$0<M, keyof SliderThumbInfo>;
};
declare function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, render, imperativeHandle, onChildrenCountChange, ...void1 }: SliderProps<SliderThumbInfo>): import("preact").JSX.Element;
declare function SliderThumb<ThumbElement extends Element, ProgressIndicatorElement extends Element, ProgressLabelElement extends Element>({ label, tag, value, max, min, index, render, valueText, imperativeHandle, onValueChange, info, ...void1 }: SliderThumbProps<ThumbElement>): import("preact").JSX.Element;
type TableProps<TableElement extends Element, LabelElement extends Element> = GenericComponentProps<UseTableReturnType<TableElement, LabelElement>, Get2<UseTableParameters<TableElement, LabelElement>, "labelParameters", "tableParameters">, "selectionLimit" | "tagTable">;
type TableSectionProps<SectionElement extends Element, RowElement extends Element, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> = GenericComponentProps<UseTableSectionReturnType<SectionElement, RowElement, RM>, Get10<UseTableSectionParameters<SectionElement, RowElement, RM>, "gridNavigationParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "typeaheadNavigationParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "tableSectionParameters", "refElementParameters">, "tagTableSection" | "location">;
type TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<UseTableRowReturnType<RowElement, CellElement, RM, CM>, Get6<UseTableRowParameters<RowElement, CellElement, TableRowInfo<RowElement>, CM>, "textContentParameters", "tableRowParameters", "linearNavigationParameters", "rovingTabIndexParameters", "info", "hasCurrentFocusParameters">, "index" | "tagTableRow"> & {
    info?: OmitStrong$0<RM, keyof TableRowInfo<RowElement>>;
};
type TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> = GenericComponentProps<UseTableCellReturnType<CellElement, CM>, Get4<UseTableCellParameters<CellElement, TableCellInfo<CellElement>>, "tableCellParameters", "gridNavigationCellParameters", "textContentParameters", "info">, "index" | "tagTableCell" | "getSortValue"> & {
    info?: OmitStrong$0<CM, keyof TableCellInfo<CellElement>>;
};
declare const Table: <TableElement extends Element, LabelElement extends Element>({ ariaLabel, selectionLimit, tagTable, imperativeHandle, render }: TableProps<TableElement, LabelElement>) => import("preact").JSX.Element;
declare const TableSection: <SectionElement extends Element, RowElement extends Element, CellElement extends Element>({ disableHomeEndKeys, getIndex, initiallySelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, ariaPropName, selectionMode, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection, onElementChange, onMount, onUnmount }: TableSectionProps<SectionElement, RowElement, TableRowInfo<RowElement>>) => import("preact").JSX.Element;
declare const TableRow: <RowElement extends Element, CellElement extends Element>({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, unselectable, initiallyTabbedIndex, untabbable, info, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, render, ...void1 }: TableRowProps<RowElement, CellElement, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) => import("preact").JSX.Element;
declare const TableCell: <CellElement extends Element>({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, imperativeHandle, getSortValue, info, ...void1 }: TableCellProps<CellElement, TableCellInfo<CellElement>>) => import("preact").JSX.Element;
type TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>, Get11<UseTabsParameters<TabContainerElement, TabElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "tabsParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters">, "orientation" | "ariaLabel">;
type TabProps<TabElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<UseTabReturnType<TabElement, M>, Get5<UseTabParameters<TabElement, TabInfo<TabElement>>, "pressParameters", "textContentParameters", "info", "hasCurrentFocusParameters", "refElementParameters">, "index" | "getSortValue"> & {
    info?: OmitStrong$0<M, keyof TabInfo<TabElement>>;
};
type TabPanelProps<PanelElement extends Element, M extends TabPanelInfo = TabPanelInfo> = GenericComponentProps<UseTabPanelReturnType<PanelElement>, Get$0<UseTabPanelParameters<M>, "info">, "index"> & {
    info?: OmitStrong$0<M, keyof TabPanelInfo>;
};
declare const Tabs: <TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, selectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, ...void1 }: TabsProps<TabContainerElement, TabElement, TabLabelElement, TabInfo<TabElement>>) => import("preact").JSX.Element;
declare function Tab<E extends Element>({ unselectable, focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, getSortValue, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, info: uinfo }: TabProps<E, TabInfo<E>>): import("preact").JSX.Element;
declare function TabPanel<E extends Element>({ index, render, info: uinfo }: TabPanelProps<E, TabPanelInfo>): import("preact").JSX.Element;
type ToastsProps<ContainerType extends Element, M extends ToastInfo = ToastInfo> = GenericComponentProps<UseToastsReturnType<ContainerType, M>, Get2<UseToastsParameters, "managedChildrenParameters", "toastsParameters">, "visibleCount">;
type ToastProps<E extends Element, M extends ToastInfo = ToastInfo> = GenericComponentProps<UseToastReturnType<E, M>, Get2<UseToastParameters<M>, "toastParameters", "info">, "index"> & {
    info?: OmitStrong$0<M, keyof ToastInfo>;
};
declare function Toasts<ContainerType extends Element>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount, imperativeHandle, onChildrenCountChange, ...void1 }: ToastsProps<ContainerType, ToastInfo>): import("preact").JSX.Element;
declare function Toast<E extends Element>({ render, index, timeout, politeness, children, info, imperativeHandle }: ToastProps<E, ToastInfo>): import("preact").JSX.Element;
type ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>, Get10<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "sortableChildrenParameters", "rearrangeableChildrenParameters", "labelParameters", "staggeredChildrenParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters">, "orientation" | "ariaLabel" | "selectionLimit">;
type ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<UseToolbarChildReturnType<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, Get5<UseToolbarChildParameters<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, "textContentParameters", "toolbarChildParameters", "info", "hasCurrentFocusParameters", "refElementParameters">, "disabledProp" | "getSortValue" | "index"> & {
    info?: OmitStrong$0<M, keyof UseToolbarSubInfo<ToolbarChildElement>>;
};
declare const Toolbar: <ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element>({ render, role, collator, disableHomeEndKeys, disabled, compare, getIndex, navigatePastEnd, navigatePastStart, pageNavigationSize, selectedIndex, onSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, staggered, ariaLabel, ariaPropName, selectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, selectionLimit, imperativeHandle, ...void1 }: ToolbarProps<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>) => import("preact").JSX.Element;
declare function ToolbarChild<ToolbarChildElement extends Element>({ index, render, focusSelf, getSortValue, getText, unselectable, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info }: ToolbarChildProps<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>): import("preact").JSX.Element;
type TooltipProps<TriggerType extends Element, PopupType extends Element> = GenericComponentProps<UseTooltipReturnType<TriggerType, PopupType>, Get4<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters", "tooltipParameters", "activeElementParameters", "pressReturn">, "tooltipSemanticType" | "onStatus">;
declare const Tooltip: <TriggerType extends Element, PopupType extends Element>({ onStatus, getDocument, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType, usesLongPress, longPress, ...void1 }: TooltipProps<TriggerType, PopupType>) => import("preact-prop-helpers").JSX.Element;
declare module 'preact' {
    namespace h {
        namespace JSX {
            interface HTMLAttributes<RefType extends EventTarget = EventTarget> {
                inert?: undefined | Signalish<boolean>;
            }
        }
    }
}
/**
 * # Preact Aria Widgets
 *
 * Preact props that implement ARIA-compliant widgets in the style of `preact-prop-helpers` (i.e. hooks that swizzle parameters and returns back and forth).
 * **No CSS is provided** &ndash; this library is intended for wiring up event handlers, HTML/ARIA attributes, labels, and so on, but each hook gives you the information you need to create appropriate e.g. `class` values to style your own components.
 *
 * This library is split into two parts: hook implementations and component implementations.
 * They are near identical, with the components providing a nicer user interface.
 * When using a component, you must specify a `render` prop that takes all the information the hook version returns and gives back the markup to use.
 * As an example, `Checkbox` components can be rendered as `<label /><input />` or  `<label><input /></label>` based on the function you pass to that `render` prop.
 *  You can even do just plain `<input>`, though `aria-label` usually needs to be handled manually in all cases.
 *
 * The intent is to help ensure that individual widgets on a given page are accessible, but it is still up to you to ensure that the page as a whole is too, and that things *actually make sense* in practice.
 * Don't forget to do lots of testing. *
 *
 * {@tableOfContents start}
 * {@include } {@link useAccordion}
 * {@include } {@link useButton}
 * {@include } {@link useCheckbox}
 * {@include } {@link useCheckboxGroup}
 * {@include } {@link useDialog}
 * {@include } {@link useDrawer}
 * {@include } {@link useGridlist}
 * {@include } {@link useListbox}
 * {@include } {@link useMenuSurface}
 * {@include } {@link useMenu}
 * {@include } {@link useMenubar}
 * {@include } {@link useProgress}
 * {@include } {@link useRadioGroup}
 * {@include } {@link useSlider}
 * {@include } {@link useTable}
 * {@include } {@link useTabs}
 * {@include } {@link useToolbar}
 * {@include } {@link useTooltip}
 * {@tableOfContents end}
 *
 *
 * @packageDocumentation
 */
export { UseAccordionContext, UseAccordionContextSelf, UseAccordionParameters, UseAccordionParametersSelf, UseAccordionReturnType, UseAccordionReturnTypeSelf, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionParametersSelf, UseAccordionSectionReturnType, UseAccordionSectionReturnTypeSelf, useAccordion, useAccordionSection, ButtonPressEventDetail, ButtonPressEventHandler, TargetedButtonPressEvent, UseButtonParameters, UseButtonParametersSelf, UseButtonReturnType, useButton, CheckboxGroupChangeEventDetail, CheckboxGroupChangeEventHandler, CheckboxGroupContext, CheckboxGroupInfo, TargetedCheckboxGroupChangeEvent, UseCheckboxGroupChildParameters, UseCheckboxGroupChildParametersSelf, UseCheckboxGroupChildReturnType, UseCheckboxGroupChildReturnTypeSelf, UseCheckboxGroupParameters, UseCheckboxGroupParametersSelf, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnType, UseCheckboxGroupParentReturnTypeSelf, UseCheckboxGroupReturnType, useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent, CheckboxCheckedType, UseCheckboxLikeParameters, UseCheckboxLikeParametersSelf, UseCheckboxLikeReturnType, UseCheckboxLikeReturnTypeSelf, useCheckboxLike, CheckboxChangeEventDetail, CheckboxChangeEventHandler, TargetedCheckboxChangeEvent, UseCheckboxParameters, UseCheckboxParametersSelf, UseCheckboxReturnType, UseCheckboxReturnTypeSelf, useCheckbox, UseDialogParameters, UseDialogReturnType, useDialog, UseDrawerParameters, UseDrawerReturnType, useDrawer, GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistContext, UseGridlistParameters, UseGridlistParametersSelf, UseGridlistReturnType, UseGridlistRowContext, UseGridlistRowParameters, UseGridlistRowParametersSelf, UseGridlistRowReturnType, useGridlist, useGridlistCell, useGridlistRow, FocusableLabelElement, LabelPosition, UseLabelParameters, UseLabelParametersSelf, UseLabelReturnType, UseLabelSyntheticParameters, useLabel, useLabelSynthetic, ListboxInfo, ListboxMultiSelectEvent, ListboxSingleSelectEvent, UseListboxContext, UseListboxItemParameters, UseListboxItemParametersSelf, UseListboxItemReturnType, UseListboxParameters, UseListboxParametersSelf, UseListboxReturnType, useListbox, useListboxItem, UseFocusSentinelParameters, UseMenuSurfaceParameters, UseMenuSurfaceParametersSelf, UseMenuSurfaceReturnType, useFocusSentinel, useMenuSurface, MenuItemReturnTypeSelf, UseMenuContext, UseMenuItemParameters, UseMenuItemReturnType, UseMenuParameters, UseMenuParametersSelf, UseMenuReturnType, useMenu, useMenuItem, UseMenubarContext, UseMenubarItemParameters, UseMenubarItemParametersSelf, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo, useMenubar, useMenubarChild, NotificationProviderContext, NotificationProviderProps, NotificationProviderReturnType, useNotificationProvider, useNotify, UseProgressParameters, UseProgressParametersSelf, UseProgressReturnType, UseProgressWithHandlerParameters, UseProgressWithHandlerParametersSelf, UseProgressWithHandlerReturnType, useProgress, useProgressWithHandler, RadioChangeEventDetail, RadioChangeEventHandler, RadioContext, RadioContextSelf, RadioSubInfo, TargetedRadioChangeEvent, UseRadioGroupParameters, UseRadioGroupParametersSelf, UseRadioGroupReturnType, UseRadioGroupReturnTypeSelf, UseRadioParameters, UseRadioParametersSelf, UseRadioReturnType, useRadio, useRadioGroup, RangeChangeEvent, SliderContext, SliderContextSelf, SliderThumbInfo, UseSliderParameters, UseSliderParametersSelf, UseSliderReturnType, UseSliderThumbParameters, UseSliderThumbParametersSelf, UseSliderThumbReturnType, UseSliderThumbReturnTypeSelf, useSlider, useSliderThumb, SortDirection, TableCellInfo, TableRowInfo, UseTableCellParameters, UseTableCellParametersSelf, UseTableCellReturnType, UseTableCellReturnTypeSelf, UseTableContext, UseTableContextSelf, UseTableParameters, UseTableParametersSelf, UseTableReturnType, UseTableRowContext, UseTableRowParameters, UseTableRowParametersSelf, UseTableRowReturnType, UseTableSectionContext, UseTableSectionParameters, UseTableSectionParametersSelf, UseTableSectionReturnType, useTable, useTableCell, useTableRow, useTableSection, TabInfo, TabPanelInfo, TabsChangeEvent, UseTab, UseTabLabelParameters, UseTabLabelReturnTypeWithHooks, UseTabList, UseTabListLabel, UseTabListLabelReturnTypeInfo, UseTabListParameters, UseTabListReturnType, UseTabPanel, UseTabPanelParameters, UseTabPanelReturnType, UseTabPanelReturnTypeSelf, UseTabPanelsContext, UseTabParameters, UseTabReturnType, UseTabsContext, UseTabsParameters, UseTabsParametersSelf, UseTabsReturnType, useTab, useTabPanel, useTabs, ToastInfo, ToastsContext, ToastsContextSelf, UseToastParameters, UseToastParametersSelf, UseToastReturnType, UseToastReturnTypeSelf, UseToastsParameters, UseToastsParametersSelf, UseToastsReturnType, useToast, useToasts, UseToolbarChildParameters, UseToolbarChildParametersSelf, UseToolbarChildReturnType, UseToolbarContext, UseToolbarContextSelf, UseToolbarParameters, UseToolbarParametersSelf, UseToolbarReturnType, UseToolbarSubInfo, useToolbar, useToolbarChild, TooltipState, TooltipStatus, UseTooltipParameters, UseTooltipParametersSelf, UseTooltipReturnType, UseTooltipReturnTypeSelf, useTooltip, Accordion, AccordionProps, AccordionSection, AccordionSectionProps, Button, ButtonProps, CheckboxGroup, CheckboxGroupChild, CheckboxGroupChildProps, CheckboxGroupParent, CheckboxGroupParentProps, CheckboxGroupProps, Checkbox, CheckboxProps, defaultRenderCheckboxLike, Dialog, DialogProps, Drawer, DrawerProps, Gridlist, GridlistChild, GridlistChildProps, GridlistProps, GridlistRow, GridlistRowProps, defaultRenderGridlistChild, Heading, HeadingProps, HeadingReset, GroupedListbox, Listbox, ListboxItem, ListboxItemProps, ListboxProps, Menu, MenuItem, MenuItemProps, MenuProps, Menubar, MenubarItem, MenubarItemContext, MenubarItemProps, MenubarProps, Progress, ProgressProps, ProgressWithHandler, ProgressWithHandlerProps, Radio, RadioGroup, RadioGroupProps, RadioProps, Slider, SliderProps, SliderThumb, SliderThumbProps, Table, TableCell, TableCellProps, TableProps, TableRow, TableRowProps, TableSection, TableSectionProps, Tab, TabPanel, TabPanelProps, TabProps, Tabs, TabsProps, Toast, ToastProps, Toasts, ToastsProps, Toolbar, ToolbarChild, ToolbarChildProps, ToolbarProps, Tooltip, TooltipProps, useDefaultRenderPortal, ParentDepthContext, useDefault, setDebugLogging };
export { EventDetail } from "preact-prop-helpers";
export type { DisabledType, ElementFromTag, ElementToTag, PickByType, TagSensitiveProps };
//# sourceMappingURL=index.react.d.ts.map