import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, CompleteListNavigationContext, ComponentChildren, Context, ElementProps, EnhancedEventHandler, EventDetail, EventTypeByTag, GetIndex, JSX, MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, ManagedChildInfo, Nullable, OmitStrong, PassiveStateUpdater, PersistentStates, PressEventReason, Ref, RenderableProps, StateUpdater, TagToElement, TargetedEnhancedEvent, TargetedOmit, TargetedPick, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationDeclarativeReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowDeclarativeParameters, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowInfoKeysParameters, UseCompleteGridNavigationRowOuterParameters, UseCompleteGridNavigationRowOuterReturnType, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, UseCompleteGridNavigationRowsContext, UseCompleteGridNavigationRowsInfo, UseCompleteGridNavigationRowsParameters, UseCompleteGridNavigationRowsReturnType, UseCompleteListNavigationChildDeclarativeParameters, UseCompleteListNavigationChildDeclarativeReturnType, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildInfoKeysParameters, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationChildrenInfo, UseCompleteListNavigationChildrenParameters, UseCompleteListNavigationChildrenReturnType, UseCompleteListNavigationDeclarativeParameters, UseCompleteListNavigationDeclarativeReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseDismissParameters, UseEscapeDismissParameters, UseGenericChildParameters, UseHasCurrentFocusReturnType, UseLinearNavigationParameters, UseLinearNavigationReturnType, UseManagedChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UseModalParameters, UseModalReturnType, UsePressParameters, UsePressReturnType, UseProcessedChildInfo, UseProcessedChildParameters, UseProcessedChildReturnType, UseRandomDualIdsParameters, UseRandomDualIdsReturnType, UseRandomIdReturnType, UseRearrangeableChildParameters, UseRefElementParameters, UseRefElementReturnType, UseRefElementReturnTypeSelf, UseTextContentParameters, UseTextContentReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType, VNode } from "preact-prop-helpers/preact";
type RefFromTag<T extends keyof JSX.IntrinsicElements> = NonNullable<JSX.IntrinsicElements[T]["ref"]> & Ref<any>;
type ElementFromRef<R extends Ref<any>> = R extends Ref<infer E> ? E : EventTarget;
type ElementFromTag<T extends keyof JSX.IntrinsicElements> = ElementFromRef<RefFromTag<T>>;
type Get$1<T, K extends keyof T> = T[K];
type Get2<T, K1 extends keyof T, K2 extends keyof T> = Get$1<T, K2> & Get$1<T, K1>;
type Get3<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T> = Get2<T, K2, K3> & Get$1<T, K1>;
type Get4<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T> = Get3<T, K2, K3, K4> & Get$1<T, K1>;
type Get5<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T> = Get4<T, K2, K3, K4, K5> & Get$1<T, K1>;
type Get6<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T> = Get5<T, K2, K3, K4, K5, K6> & Get$1<T, K1>;
type Get7<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T> = Get6<T, K2, K3, K4, K5, K6, K7> & Get$1<T, K1>;
type Get8<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T> = Get7<T, K2, K3, K4, K5, K6, K7, K8> & Get$1<T, K1>;
type Get9<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T> = Get8<T, K2, K3, K4, K5, K6, K7, K8, K9> & Get$1<T, K1>;
type Get10<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T> = Get9<T, K2, K3, K4, K5, K6, K7, K8, K9, K10> & Get$1<T, K1>;
type Get11<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T> = Get10<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11> & Get$1<T, K1>;
type Get12<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T> = Get11<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12> & Get$1<T, K1>;
type Get13<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T> = Get12<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13> & Get$1<T, K1>;
type Get14<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T> = Get13<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14> & Get$1<T, K1>;
type Get15<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T> = Get14<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15> & Get$1<T, K1>;
type Get16<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T, K16 extends keyof T> = Get15<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16> & Get$1<T, K1>;
type PickByType<Obj, WantedType> = { [P in keyof Obj as Obj[P] extends WantedType | undefined ? P : never]: Obj[P]; };
/**
 * * `false`: This component is not disabled.
 * * `"soft"`: This component is disabled, but is still focusable and visible to *all* users.
 * * `"hard"`: This component is disabled, and generally hidden to all but sighted users, using the HTML `disabled` attribute.
 * * `true`: This component is disabled. Whether "hard" or "soft" is chosen is usually chosen based on a `Context`.
 */
type DisabledType = boolean | "soft" | "hard";
type OmitStrong$1<T, K extends keyof T> = Omit<T, K>;
/**
 * For times when more than just the abstract element type is needed,
 * but the actual, concrete, implementation-affecting "div" string type.
 *
 * TODO: Should this be the standard for all the non-ARIA hooks?
 * They *never* care about the specific type for the implementation,
 * just for typing, so it wouldn't be necessary,
 * but it would be consistent with these ARIA hooks.
 */
interface TagSensitiveProps<Tag extends keyof JSX.IntrinsicElements> {
  tag: Tag;
}
interface ButtonPressEventDetail {
  pressed: boolean | undefined;
}
type TargetedButtonPressEvent<Tag extends keyof JSX.IntrinsicElements> = TargetedEnhancedEvent<PressEventReason<Tag>, ButtonPressEventDetail>;
type ButtonPressEventHandler<Tag extends keyof JSX.IntrinsicElements> = EnhancedEventHandler<TargetedButtonPressEvent<Tag>, ButtonPressEventDetail>;
interface UseButtonParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
  /** Is `HTMLElement` this a `div`, a `button`, etc. */
  tagButton: Tag;
  /**
   * Called when the button is clicked/pressed/tapped/etc
   *
   * @remarks `pressed` only be non-null when you passed a non-null value for `pressed` as a prop.
   *
   * If you need this to be async, see `useProgressWithHandler`, and use its `syncHandler` here.
   */
  onPressSync: Nullable<(event: TargetedEnhancedEvent<PressEventReason<Tag>, ButtonPressEventDetail>) => void>;
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
interface UseButtonParameters<ButtonElementTag extends keyof JSX.IntrinsicElements> extends UseRefElementParameters<ButtonElementTag>, TargetedOmit<UsePressParameters<ButtonElementTag>, "pressParameters", "excludeEnter" | "excludePointer" | "onPressSync"> {
  buttonParameters: UseButtonParametersSelf<ButtonElementTag>;
}
interface UseButtonReturnType<ButtonElementTag extends keyof JSX.IntrinsicElements> extends UsePressReturnType<ButtonElementTag>, OmitStrong$1<UseRefElementReturnType<ButtonElementTag>, "propsStable"> {
  props: ElementProps<ButtonElementTag>;
}
/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 *
 * @remarks The press handler is sync by default. See `useProgressWithHandler` to turn an async function into a sync function with a progress bar.
 *
 * @compositeParams
 */
export declare function useButton<ButtonElementTag extends keyof JSX.IntrinsicElements>({ buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 }, pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 }, refElementParameters, ...void2 }: UseButtonParameters<ButtonElementTag>): UseButtonReturnType<ButtonElementTag>;
interface UseAccordionParametersSelf {
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
interface UseAccordionParameters<HeaderButtonElementTag extends keyof JSX.IntrinsicElements, M extends UseAccordionSectionInfo<HeaderButtonElementTag>> extends TargetedOmit<UseLinearNavigationParameters<HeaderButtonElementTag, HeaderButtonElementTag>, "linearNavigationParameters", "isValidForLinearNavigation" | "getLowestIndex" | "arrowKeyDirection" | "getHighestIndex">, TargetedOmit<UseTypeaheadNavigationParameters<HeaderButtonElementTag>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, UseManagedChildrenParameters<M> {
  accordionParameters: UseAccordionParametersSelf;
}
interface UseAccordionReturnTypeSelf {
  /**
   * For a one-at-a-time, changes which one is currently open
   */
  changeExpandedIndex: PassiveStateUpdater<number | null, EventTypeByTag<any, any>>;
}
interface UseAccordionReturnType<HeaderButtonElementTag extends keyof JSX.IntrinsicElements, M extends UseAccordionSectionInfo<HeaderButtonElementTag>> extends UseManagedChildrenReturnType<M>, OmitStrong$1<UseTypeaheadNavigationReturnType<HeaderButtonElementTag>, "propsStable"> {
  /** @stable */
  accordionReturn: UseAccordionReturnTypeSelf;
  context: UseAccordionContext<HeaderButtonElementTag, M>;
}
interface UseAccordionSectionInfo<Tag extends keyof JSX.IntrinsicElements> extends ManagedChildInfo<number> {
  setOpenFromParent(open: boolean): void;
  getOpenFromParent(): boolean | null;
  setMostRecentlyTabbed(tabbed: boolean): void;
  getMostRecentlyTabbed(): boolean | null;
  focusSelf(e: TagToElement<Tag>): void;
  getElement(): TagToElement<Tag> | null;
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
  /**
   * Generally `"region"`.
   *
   */
  bodyRole: preact.AriaRole;
}
interface UseAccordionSectionParameters<HeaderContainerElementTag extends keyof JSX.IntrinsicElements, HeaderButtonElementTag extends keyof JSX.IntrinsicElements, BodyElementTag extends keyof JSX.IntrinsicElements, M extends UseAccordionSectionInfo<HeaderButtonElementTag>> extends UseGenericChildParameters<UseAccordionContext<HeaderButtonElementTag, M>, Pick<M, "index" | "untabbable">>, OmitStrong$1<UseTypeaheadNavigationChildParameters<HeaderButtonElementTag>, "info" | "context">, OmitStrong$1<UseManagedChildParameters<M>, "info">, TargetedPick<UsePressParameters<HeaderButtonElementTag>, "pressParameters", "focusSelf">, Pick<UseTextContentParameters<HeaderContainerElementTag>, "textContentParameters">, TargetedOmit<UseButtonParameters<HeaderButtonElementTag>, "buttonParameters", "pressed" | "role"> {
  refElementHeaderButtonParameters: UseRefElementParameters<HeaderButtonElementTag>["refElementParameters"];
  refElementBodyParameters: UseRefElementParameters<BodyElementTag>["refElementParameters"];
  context: UseAccordionContext<HeaderButtonElementTag, M>;
  accordionSectionParameters: UseAccordionSectionParametersSelf;
}
interface UseAccordionSectionReturnTypeSelf {
  expanded: boolean;
  focused: boolean;
  mostRecentlyTabbed: boolean;
}
interface UseAccordionSectionReturnType<HeaderElementTag extends keyof JSX.IntrinsicElements, HeaderButtonElementTag extends keyof JSX.IntrinsicElements, BodyElementTag extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseButtonReturnType<HeaderButtonElementTag>, "props" | "refElementReturn">, OmitStrong$1<UseTypeaheadNavigationChildReturnType, "pressParameters" | "textContentParameters">, OmitStrong$1<UseLinearNavigationReturnType<HeaderButtonElementTag>, "propsStable">, OmitStrong$1<UseTextContentReturnType, never>, OmitStrong$1<UseHasCurrentFocusReturnType<HeaderButtonElementTag>, never> {
  accordionSectionReturn: UseAccordionSectionReturnTypeSelf;
  propsHeaderButton: ElementProps<HeaderButtonElementTag>;
  propsHeader: ElementProps<HeaderElementTag>;
  propsBody: ElementProps<BodyElementTag>;
  refElementBodyReturn: UseRefElementReturnTypeSelf<BodyElementTag>;
  refElementHeaderButtonReturn: UseRefElementReturnTypeSelf<HeaderButtonElementTag>;
}
interface UseAccordionContextSelf<HeaderButtonElementTag extends keyof JSX.IntrinsicElements> {
  changeTabbedIndex: PassiveStateUpdater<number | null, EventTypeByTag<any, any>>;
  changeExpandedIndex: PassiveStateUpdater<number | null, EventTypeByTag<any, any>>;
  getExpandedIndex: () => (number | null);
  getTabbedIndex: () => (number | null);
  stableTypeaheadProps: ElementProps<HeaderButtonElementTag>;
}
interface UseAccordionContext<HeaderButtonElementTag extends keyof JSX.IntrinsicElements, M extends UseAccordionSectionInfo<HeaderButtonElementTag>> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
  accordionSectionContext: UseAccordionContextSelf<HeaderButtonElementTag>;
  linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElementTag, HeaderButtonElementTag>["linearNavigationParameters"];
  rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElementTag, HeaderButtonElementTag>["rovingTabIndexReturn"];
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
export declare function useAccordion<HeaderButtonElementTag extends keyof JSX.IntrinsicElements>({ accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters }, typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters }, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters }, ...void1 }: UseAccordionParameters<HeaderButtonElementTag, UseAccordionSectionInfo<HeaderButtonElementTag>>): UseAccordionReturnType<HeaderButtonElementTag, UseAccordionSectionInfo<HeaderButtonElementTag>>;
/**
 * @compositeParams
 */
export declare function useAccordionSection<HeaderContainerElementTag extends keyof JSX.IntrinsicElements, HeaderButtonElementTag extends keyof JSX.IntrinsicElements, BodyElementTag extends keyof JSX.IntrinsicElements>({ buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters }, accordionSectionParameters: { open: openFromUser, bodyRole, ...void3 }, info: { index, untabbable, ...void4 }, textContentParameters: { getText, onTextContentChange: otcc1, ...void5 }, context, refElementBodyParameters, refElementHeaderButtonParameters, pressParameters: { focusSelf, ...pressParameters }, ...void1 }: UseAccordionSectionParameters<HeaderContainerElementTag, HeaderButtonElementTag, BodyElementTag, UseAccordionSectionInfo<HeaderButtonElementTag>>): UseAccordionSectionReturnType<HeaderContainerElementTag, HeaderButtonElementTag, BodyElementTag>;
type LabelPosition = "separate" | "wrapping" | "none";
type FocusableLabelElement<LP extends LabelPosition, InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> = LP extends "wrapping" ? LabelElement : InputElement;
interface UseLabelParametersSelf<LP extends LabelPosition, InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements> {
  onLabelClick: null | ((e: Event) => void);
  tagInput: InputElementTag;
  tagLabel: LabelElementTag;
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
interface UseLabelParameters<LP extends LabelPosition, InputTag extends keyof JSX.IntrinsicElements, LabelTag extends keyof JSX.IntrinsicElements> {
  randomIdInputParameters: OmitStrong$1<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
  randomIdLabelParameters: OmitStrong$1<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;
  labelParameters: UseLabelParametersSelf<LP, InputTag, LabelTag>;
}
interface UseLabelReturnType<InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements> extends UseRandomDualIdsReturnType<InputElementTag, LabelElementTag>, OmitStrong$1<UsePressReturnType<LabelElementTag>, "props"> {}
/**
 * @compositeParams
 */
export declare function useLabel<LP extends LabelPosition, InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements>({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }: UseLabelParameters<LP, InputElementTag, LabelElementTag>): UseLabelReturnType<InputElementTag, LabelElementTag>;
interface UseLabelSyntheticParameters extends TargetedPick<UseLabelParameters<LabelPosition, any, any>, "labelParameters", "ariaLabel" | "onLabelClick"> {
  randomIdInputParameters: OmitStrong$1<UseRandomDualIdsParameters["randomIdInputParameters"], "otherReferencerProp">;
  randomIdLabelParameters: OmitStrong$1<UseRandomDualIdsParameters["randomIdLabelParameters"], "otherReferencerProp">;
}
/**
 * Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
 *
 * @compositeParams
 */
export declare function useLabelSynthetic<InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements>({ labelParameters: { ariaLabel, onLabelClick }, ...rest }: UseLabelSyntheticParameters): UseLabelReturnType<InputElementTag, LabelElementTag>;
type CheckboxCheckedType = boolean | "mixed";
interface UseCheckboxLikeParametersSelf<C extends CheckboxCheckedType> {
  /** The role attribute to use, when applicable */
  role: JSX.AriaRole;
  /** Disables this checkbox-like */
  disabled: DisabledType;
  /** Controls the checked state of this checkbox-like */
  checked: C;
}
interface UseCheckboxLikeParameters<LP extends LabelPosition, InputTag extends keyof JSX.IntrinsicElements, LabelTag extends keyof JSX.IntrinsicElements, C extends CheckboxCheckedType> extends OmitStrong$1<UseLabelParameters<LP, InputTag, LabelTag>, "labelParameters">, TargetedOmit<UseLabelParameters<LP, InputTag, LabelTag>, "labelParameters", "onLabelClick">, TargetedPick<UsePressParameters<any>, "pressParameters", "longPressThreshold" | "excludeSpace" | "onPressSync"> {
  checkboxLikeParameters: UseCheckboxLikeParametersSelf<C>;
  refElementLabelReturn: UseRefElementReturnType<LabelTag>["refElementReturn"];
  refElementInputReturn: UseRefElementReturnType<InputTag>["refElementReturn"];
}
interface UseCheckboxLikeReturnTypeSelf {
  /**
   * Call this to focus whichever element handles the focus based on `labelPosition`.
   */
  focusSelf(): void;
}
interface UseCheckboxLikeReturnType<InputTag extends keyof JSX.IntrinsicElements, LabelTag extends keyof JSX.IntrinsicElements> extends UseLabelReturnType<InputTag, LabelTag> {
  pressLabelReturn: UsePressReturnType<LabelTag>["pressReturn"];
  pressInputReturn: UsePressReturnType<InputTag>["pressReturn"];
  checkboxLikeInputReturn: {
    propsUnstable: ElementProps<InputTag>;
  };
  checkboxLikeLabelReturn: {
    propsUnstable: ElementProps<LabelTag>;
  };
  checkboxLikeReturn: UseCheckboxLikeReturnTypeSelf;
}
/**
 * Handles any component that's "checkbox-like" (checkboxes, radios, switches, etc.)
 *
 * @remarks Handles any component where there's:
 * ```md-literal
 * 1. Some kind of an on/off binary/trinary input element that needs event handlers
 * 2. Some kind of label for that input element
 * ```md-literal
 *
 * See also `useLabel` for when there's a label for a non-checkbox-like component.
 *
 * @compositeParams
 */
export declare function useCheckboxLike<LP extends LabelPosition, InputTag extends keyof JSX.IntrinsicElements, LabelTag extends keyof JSX.IntrinsicElements, C extends CheckboxCheckedType>({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, onPressSync: onInputSync, ...void2 }, ...void3 }: UseCheckboxLikeParameters<LP, InputTag, LabelTag, C>): UseCheckboxLikeReturnType<InputTag, LabelTag>;
interface CheckboxGroupChangeEventDetail {
  childrenChecked: boolean | Map<number, boolean | "mixed">;
}
type TargetedCheckboxGroupChangeEvent = TargetedEnhancedEvent<Event, CheckboxGroupChangeEventDetail>;
type CheckboxGroupChangeEventHandler = EnhancedEventHandler<Event, CheckboxGroupChangeEventDetail>;
interface UseCheckboxGroupParametersSelf {
  orientation: "vertical" | "horizontal";
}
interface UseCheckboxGroupParameters<ParentElement extends keyof JSX.IntrinsicElements, TabbableChildElement extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "linearNavigationParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "rovingTabIndexParameters">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "linearNavigationParameters", "arrowKeyDirection">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "rovingTabIndexParameters", "focusSelfParent"> {
  checkboxGroupParameters: UseCheckboxGroupParametersSelf;
}
interface CheckboxGroupInfoBaseBase<TCE extends keyof JSX.IntrinsicElements> {
  _e?: TCE;
}
interface CheckboxGroupInfoBase<TCE extends keyof JSX.IntrinsicElements> extends CheckboxGroupInfoBaseBase<TCE> {
  checkboxChildType: "child" | "parent";
  /** Child-only */
  getChecked: Nullable<() => boolean | "mixed">;
  /** Child-only */
  getLastUserChecked: Nullable<() => boolean | "mixed">;
  /** Child-only */
  setCheckedFromParentInput: Nullable<(newChecked: CheckboxCheckedType, e: Event) => void | Promise<void>>;
}
interface CheckboxGroupInfo<TCE extends keyof JSX.IntrinsicElements> extends UseCompleteListNavigationChildInfo<TCE>, CheckboxGroupInfoBase<TCE> {}
interface UseCheckboxGroupChildParametersSelf {
  checked: CheckboxCheckedType;
  onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
}
interface UseCheckboxGroupChildParameters<TCE extends keyof JSX.IntrinsicElements> extends UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable">>, OmitStrong$1<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info" | "singleSelectionChildParameters" | "multiSelectionChildParameters">, TargetedOmit<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "multiSelectionChildParameters", "initiallyMultiSelected"> {
  checkboxGroupChildParameters: UseCheckboxGroupChildParametersSelf;
}
interface UseCheckboxGroupChildReturnTypeSelf {
  onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
  onChildCheckedChange: (checked: CheckboxCheckedType) => void;
}
interface UseCheckboxGroupChildReturnType<TCE extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, "singleSelectionChildReturn"> {
  checkboxGroupChildReturn: UseCheckboxGroupChildReturnTypeSelf;
}
interface UseCheckboxGroupReturnType<GroupElement extends keyof JSX.IntrinsicElements, TCE extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseCompleteListNavigationReturnType<GroupElement, TCE, CheckboxGroupInfo<TCE>>, "context"> {
  context: CheckboxGroupContext<TCE>;
}
interface UseCheckboxGroupParentParameters<TCE extends keyof JSX.IntrinsicElements> extends UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable">>, OmitStrong$1<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info"> {}
interface UseCheckboxGroupParentReturnTypeSelf {
  checked: CheckboxCheckedType;
  getPercent(): number;
  onParentCheckedChange: (e: Event) => Promise<void>;
}
interface UseCheckboxGroupParentReturnType<TCE extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, never> {
  checkboxGroupParentReturn: UseCheckboxGroupParentReturnTypeSelf;
}
interface CheckboxGroupContext<TCE extends keyof JSX.IntrinsicElements> extends CompleteListNavigationContext<TCE, CheckboxGroupInfo<TCE>> {
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
    setUpdateIndex: PassiveStateUpdater<number, Event>;
    allIds: Set<string>;
    setTotalChildren: PassiveStateUpdater<number, Event>;
    setTotalChecked: PassiveStateUpdater<number, Event>;
  };
}
/**
 * Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @remarks `useCheckboxGroup` and its child hooks **do not** call `useCheckbox`. These hooks are for creating CheckboxGroup-like functionality&mdash;in theory, this could be implemented in a listbox.
 *
 * A checkbox group is made up of the "Parent" checkbox and the "Child" checkboxes.  Of course, all of them are children of the group as a whole, but the "Parent" checkbox is the one that, when clicked, toggles the checked state of all the "Child" checkboxes.
 *
 * A checkbox group's parent, when clicked, toggles between three states:
 * ```md-literal
 * * Unchecked (all children become unchecked)
 * * Mixed (all children become the last user-input value)
 * * Checked (all children become checked)
 * ```
 *
 * This functions even if it takes an `async` amount of time to complete the "cause the child checkbox to change its state" action.
 *
 * @compositeParams
 *
 * @hasChild {@link useCheckboxGroupParent}
 * @hasChild {@link useCheckboxGroupChild}
 */
export declare function useCheckboxGroup<GroupElement extends keyof JSX.IntrinsicElements, TCE extends keyof JSX.IntrinsicElements>({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation, ...void2 }, multiSelectionParameters, refElementParameters, typeaheadNavigationParameters, processedIndexManglerParameters, ...void1 }: UseCheckboxGroupParameters<GroupElement, TCE>): UseCheckboxGroupReturnType<GroupElement, TCE>;
/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 *
 * @compositeParams
 */
export declare function useCheckboxGroupParent<TCE extends keyof JSX.IntrinsicElements>({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters, multiSelectionChildParameters, singleSelectionChildParameters, ...void1 }: UseCheckboxGroupParentParameters<TCE>): UseCheckboxGroupParentReturnType<TCE>;
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
export declare function useCheckboxGroupChild<TCE extends keyof JSX.IntrinsicElements>({ checkboxGroupChildParameters, context, info: { focusSelf, index, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, multiSelectionChildParameters: { multiSelectionDisabled, onMultiSelectChange, ...void5 }, ...void4 }: UseCheckboxGroupChildParameters<TCE>): UseCheckboxGroupChildReturnType<TCE>;
interface CheckboxChangeEventDetail {
  /**
   * This is always a `true`/`false` value, instead of including `"mixed"`
   */
  checked: boolean;
  previous: CheckboxCheckedType;
}
type TargetedCheckboxChangeEvent = TargetedEnhancedEvent<Event, CheckboxChangeEventDetail>;
type CheckboxChangeEventHandler = EnhancedEventHandler<Event, CheckboxChangeEventDetail>;
interface UseCheckboxParametersSelf {
  /** Called when the user changes the value of the checkbox.
   *
   * @remarks If you need this to be async, see {@link useProgressWithHandler}
   */
  onCheckedChange: Nullable<CheckboxChangeEventHandler>;
}
interface UseCheckboxParameters<LP extends LabelPosition, I extends keyof JSX.IntrinsicElements, L extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "pressParameters" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters" | "refElementLabelReturn" | "refElementInputReturn">, TargetedOmit<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "pressParameters", "onPressSync">, TargetedOmit<UseCheckboxLikeParameters<LP, I, L, boolean | "mixed">, "checkboxLikeParameters", "role"> {
  checkboxParameters: UseCheckboxParametersSelf;
}
interface UseCheckboxReturnTypeSelf<InputType extends keyof JSX.IntrinsicElements> {
  propsUnstable: ElementProps<InputType>;
}
interface UseCheckboxReturnType<InputType extends keyof JSX.IntrinsicElements, LabelType extends keyof JSX.IntrinsicElements> extends UseCheckboxLikeReturnType<InputType, LabelType> {
  checkboxReturn: UseCheckboxReturnTypeSelf<InputType>;
}
/**
 * Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
 *
 * @compositeParams
 */
export declare function useCheckbox<LP extends LabelPosition, InputType extends keyof JSX.IntrinsicElements, LabelType extends keyof JSX.IntrinsicElements>({ checkboxLikeParameters: { checked, disabled, ...void2 }, checkboxParameters: { onCheckedChange, ...void4 }, labelParameters, pressParameters, ...void1 }: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType>;
interface UseDialogParameters<_DialogElement extends keyof JSX.IntrinsicElements, _TitleElement extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters" | "backdropDismissParameters" | "escapeDismissParameters" | "lostFocusDismissParameters">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters", "trapActive" | "onlyMoveFocus">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "backdropDismissParameters", "onDismissBackdrop">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "escapeDismissParameters", "onDismissEscape">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {}
interface UseDialogReturnType<FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, PopupElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>, "propsStableSource" | "propsStablePopup">, Pick<UsePressReturnType<any>, "pressReturn"> {
  propsDialog: ElementProps<PopupElement>;
  propsSource: ElementProps<SourceElement>;
  propsTitle: ElementProps<TitleElement>;
}
/**
 * Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
 *
 * @compositeParams
 */
export declare function useDialog<FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, DialogElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements>({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }: UseDialogParameters<DialogElement, TitleElement>): UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>;
interface UseDrawerParameters<_DialogElement extends keyof JSX.IntrinsicElements, _TitleElement extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters" | "backdropDismissParameters" | "dismissParameters" | "escapeDismissParameters" | "lostFocusDismissParameters">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters", "onlyMoveFocus">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "backdropDismissParameters", "onDismissBackdrop">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "escapeDismissParameters", "onDismissEscape">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "lostFocusDismissParameters", "onDismissLostFocus"> {}
interface UseDrawerReturnType<FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, DrawerElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseModalReturnType<FocusContainerElement, SourceElement, DrawerElement>, "propsStableSource" | "propsStablePopup"> {
  propsDrawer: ElementProps<DrawerElement>;
  propsSource: ElementProps<SourceElement>;
  propsTitle: ElementProps<TitleElement>;
}
/**
 * Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
 *
 * @compositeParams
 */
export declare function useDrawer<FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, PopupElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements>({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, labelParameters, backdropDismissParameters, lostFocusDismissParameters, modalParameters, refElementParameters, ...void1 }: UseDrawerParameters<PopupElement, TitleElement>): UseDrawerReturnType<FocusContainerElement, SourceElement, PopupElement, TitleElement>;
interface UseGridlistRowInfo<RowElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationRowInfo<RowElement> {}
interface UseGridlistRowsInfo<RowElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationRowsInfo<RowElement> {}
interface UseGridlistCellInfo<RowElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationCellInfo<RowElement> {}
interface UseGridlistRowContext<ChildElement extends keyof JSX.IntrinsicElements, M extends UseGridlistRowInfo<ChildElement>> extends CompleteGridNavigationRowContext<ChildElement, M> {}
interface UseGridlistRowsContext<ChildElement extends keyof JSX.IntrinsicElements, SM extends UseGridlistRowsInfo<ChildElement>> extends UseCompleteGridNavigationRowsContext<ChildElement, SM> {}
interface UseGridlistCellContext<ChildElement extends keyof JSX.IntrinsicElements, M extends UseGridlistCellInfo<ChildElement>> extends CompleteGridNavigationCellContext<ChildElement, M> {}
interface UseGridlistParameters<ParentElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, RsM extends UseGridlistRowsInfo<RowElement> = UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement> = UseGridlistRowInfo<RowElement>> extends UseCompleteGridNavigationDeclarativeParameters<ParentElement, RowElement, RM>, OmitStrong<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "context">, UseLabelSyntheticParameters {}
interface UseGridlistReturnType<ParentElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, RsM extends UseGridlistRowsInfo<RowElement> = UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement> = UseGridlistRowInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationDeclarativeReturnType<ParentElement, RowElement, RM>, "context" | "rearrangeableChildrenReturn">, OmitStrong<UseCompleteGridNavigationRowsReturnType<RowElement, RsM>, "context">, OmitStrong<UseLabelReturnType<ParentElement, LabelElement>, "propsInput"> {
  contextChildren: UseGridlistRowContext<RowElement, RM>;
  contextProcessing: UseGridlistRowsContext<RowElement, RsM>;
}
interface UseGridlistRowOuterParameters<RowElement extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseCompleteGridNavigationRowOuterParameters<RowElement, RsM> {}
interface UseGridlistRowOuterReturnType<RowElement extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseCompleteGridNavigationRowOuterReturnType<RowElement, RsM> {}
interface UseGridlistRowParameters<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationRowDeclarativeParameters<RowElement, CellElement, RM, CM> {}
interface UseGridlistRowReturnType<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
  context: UseGridlistCellContext<CellElement, CM>;
}
interface UseGridlistCellParameters<CellElement extends keyof JSX.IntrinsicElements, CM extends UseGridlistCellInfo<CellElement>> extends UseCompleteGridNavigationCellParameters<CellElement, CM>, TargetedOmit<UsePressParameters<CellElement>, "pressParameters", "focusSelf"> {}
interface UseGridlistCellReturnType<CellElement extends keyof JSX.IntrinsicElements, CM extends UseGridlistCellInfo<CellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<CellElement, CM>, "props">, OmitStrong<UsePressReturnType<CellElement>, "props"> {
  propsTabbable: ElementProps<CellElement>;
  propsCell: ElementProps<any>;
  propsPress: ElementProps<any>;
}
/**
 * @compositeParams
 */
export declare function useGridlist<ParentElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, RsM extends UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement>>({ gridNavigationParameters, linearNavigationParameters, managedChildrenParameters, multiSelectionParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, labelParameters, randomIdInputParameters, randomIdLabelParameters, gridNavigationCompleteParameters, processedIndexManglerParameters, ...void1 }: UseGridlistParameters<ParentElement, RowElement, RsM, RM>): UseGridlistReturnType<ParentElement, RowElement, LabelElement, RsM, RM>;
/**
 * @compositeParams
 */
export declare function useGridlistRowOuter<RowElement extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>>(p: UseGridlistRowOuterParameters<RowElement, RsM>): UseGridlistRowOuterReturnType<RowElement, RsM>;
/**
 * @compositeParams
 */
export declare function useGridlistRow<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>>(p: UseGridlistRowParameters<RowElement, CellElement, RM, CM>): UseGridlistRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare function useGridlistCell<CellElement extends keyof JSX.IntrinsicElements, CM extends UseGridlistCellInfo<CellElement>>({ pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressSync, onPressingChange }, ...p }: UseGridlistCellParameters<CellElement, CM>): UseGridlistCellReturnType<CellElement, CM>;
type ListboxSingleSelectEvent<Tag extends keyof JSX.IntrinsicElements> = {
  [EventDetail]: {
    selectedIndex: number;
  };
} & Pick<EventTypeByTag<Tag, Event>, "target" | "currentTarget">;
type ListboxMultiSelectEvent<Tag extends keyof JSX.IntrinsicElements> = {
  [EventDetail]: {
    selected: boolean;
  };
} & Pick<EventTypeByTag<Tag, Event>, "target" | "currentTarget">;
interface UseListboxContext<ListItemElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListItemElement, M> {}
interface UseListboxParametersSelf {
  orientation: "horizontal" | "vertical";
  /**
   * * `"without-groups"`: This is a listbox with no groups
   * * `"with-groups"`: This is a listbox that is grouped into 2 or more labelled sections. In this case, **all navigation and selection is disabled** (meaning you can pass whatever you'd like to them, it's all ignored) and delegated to the child `group`s.
   * * `"group"`: This is a group, contained within a listbox with `type=="with-groups"`
   *
   * There is currently no support for a mix of grouped and ungrouped options.
   */
  groupingType: "with-groups" | "without-groups" | "group";
}
interface UseListboxParameters<ListElement extends keyof JSX.IntrinsicElements, ListItemElement extends keyof JSX.IntrinsicElements, _LabelElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement>> extends OmitStrong$1<UseCompleteListNavigationDeclarativeParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters" | "linearNavigationParameters" | "singleSelectionParameters">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "linearNavigationParameters", "arrowKeyDirection">, TargetedPick<UseCompleteListNavigationParameters<ListElement, ListItemElement, M>, "singleSelectionParameters", "singleSelectionAriaPropName" | "singleSelectionMode"> {
  listboxParameters: UseListboxParametersSelf;
}
interface UseListboxReturnType<ListElement extends keyof JSX.IntrinsicElements, ListItemElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement>> extends OmitStrong$1<UseCompleteListNavigationReturnType<ListElement, ListItemElement, M>, "props" | "singleSelectionReturn"> {
  propsListbox: ElementProps<ListElement>;
  propsListboxLabel: ElementProps<LabelElement>;
  context: UseListboxContext<ListItemElement, M>;
}
interface UseListboxItemReturnType<ListItemElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement>> extends OmitStrong$1<UseCompleteListNavigationChildDeclarativeReturnType<ListItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters" | "selectionChildReturn">, UsePressReturnType<ListItemElement> {}
interface UseListboxItemParametersSelf {}
interface UseListboxItemParameters<ListItemElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement>> extends UseGenericChildParameters<UseListboxContext<ListItemElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>, UseCompleteListNavigationChildDeclarativeParameters<ListItemElement, M>, TargetedOmit<UsePressParameters<ListItemElement>, "pressParameters", "excludeSpace" | "onPressSync" | "focusSelf"> {
  listboxParameters: UseListboxItemParametersSelf;
}
interface ListboxInfo<ListItemElement extends keyof JSX.IntrinsicElements> extends UseCompleteListNavigationChildInfo<ListItemElement> {}
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
export declare function useListbox<ListElement extends keyof JSX.IntrinsicElements, ListItemElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ labelParameters, listboxParameters: { groupingType, orientation }, linearNavigationParameters, singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void2 }, singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex, ...void3 }, rovingTabIndexParameters, ...restParams }: UseListboxParameters<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>): UseListboxReturnType<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>;
/**
 * @compositeParams
 */
export declare function useListboxItem<ListItemElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({ context, listboxParameters, pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, singleSelectionChildParameters: { singleSelectionDisabled }, ...restParams }: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M>;
interface UseMenuSurfaceParametersSelf {
  /**
   * What role the surface fulfills.
   *
   * General menus should use "menu". "dialog" can be used for generic pop-up things.
   */
  role: "dialog" | "menu" | "tree" | "grid" | "listbox";
  surfaceId: string;
}
interface UseMenuSurfaceParameters<_S extends keyof JSX.IntrinsicElements, _B extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters" | "refElementParameters" | "backdropDismissParameters" | "lostFocusDismissParameters" | "escapeDismissParameters" | "dismissParameters">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "escapeDismissParameters", "onDismissEscape" | "dismissEscapeActive">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters", "trapActive" | "focusOpener" | "onlyMoveFocus"> {
  menuSurfaceParameters: UseMenuSurfaceParametersSelf;
}
interface UseMenuSurfaceReturnType<MenuSurfaceElement extends keyof JSX.IntrinsicElements, MenuTargetElement extends keyof JSX.IntrinsicElements, MenuTriggerElement extends keyof JSX.IntrinsicElements> {
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
export declare function useMenuSurface<MenuSurfaceElement extends keyof JSX.IntrinsicElements, MenuTargetElement extends keyof JSX.IntrinsicElements, MenuTriggerElement extends keyof JSX.IntrinsicElements>({ dismissParameters, focusTrapParameters, activeElementParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, modalParameters, escapeDismissParameters, ...void2 }: UseMenuSurfaceParameters<MenuSurfaceElement, MenuTriggerElement>): UseMenuSurfaceReturnType<MenuSurfaceElement, MenuTargetElement, MenuTriggerElement>;
interface UseFocusSentinelParameters {
  focusSentinel: {
    sendFocusToMenu: () => void;
    open: boolean;
    onClose(e: EventTypeByTag<any, any>): void;
  };
}
/**
 * A focus sentinel is a hidden but focusable element that comes at the start or end
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
export declare function useFocusSentinel<E extends keyof JSX.IntrinsicElements>({ focusSentinel: { open, onClose, sendFocusToMenu } }: UseFocusSentinelParameters): ElementProps<E>;
interface UseToolbarParametersSelf {
  /** Primarily controls arrow key direction for navigation */
  orientation: "horizontal" | "vertical";
  /**
   * Should be "toolbar" for toolbars,
   * `null` if someone else takes care of the role (TODO: it's still labelled in this case, what does this mean?),
   * and whatever string is applicable otherwise.
   */
  role: preact.AriaRole | null;
  /**
   * When true, none of the children will be selectable or focusable.
   *
   * The component itself will be made focusable instead (partially to ensure there's always something focusable in the case of e.g. a menu).
   */
  disabled: boolean;
}
interface UseToolbarParameters<ContainerElement extends keyof JSX.IntrinsicElements, ChildElement extends keyof JSX.IntrinsicElements, M extends UseToolbarSubInfo<ChildElement>> extends OmitStrong$1<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionReturn">, TargetedOmit<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseCompleteListNavigationParameters<ContainerElement, ChildElement, M>, "linearNavigationParameters", "arrowKeyDirection"> {
  toolbarParameters: UseToolbarParametersSelf;
}
interface UseToolbarReturnType<ContainerElement extends keyof JSX.IntrinsicElements, ChildElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends UseToolbarSubInfo<ChildElement>> extends OmitStrong$1<MakeSingleSelectionDeclarativeReturnType<UseCompleteListNavigationReturnType<ContainerElement, ChildElement, M>>, "props"> {
  propsToolbar: ElementProps<ContainerElement>;
  propsLabel: ElementProps<LabelElement>;
  randomIdInputReturn: UseRandomIdReturnType<ContainerElement, LabelElement>["randomIdReturn"];
  randomIdLabelReturn: UseRandomIdReturnType<LabelElement, ContainerElement>["randomIdReturn"];
  context: UseToolbarContext<ChildElement, M>;
}
interface UseToolbarSubInfo<ChildElement extends keyof JSX.IntrinsicElements> extends UseCompleteListNavigationChildInfo<ChildElement> {}
interface UseToolbarContextSelf {}
interface UseToolbarContext<ChildElement extends keyof JSX.IntrinsicElements, M extends UseToolbarSubInfo<ChildElement>> extends CompleteListNavigationContext<ChildElement, M> {
  toolbarContext: UseToolbarContextSelf;
}
interface UseToolbarChildParametersSelf {
  disabledProp: "disabled" | "aria-disabled";
}
interface UseToolbarChildParameters<E extends keyof JSX.IntrinsicElements, M extends UseToolbarSubInfo<E>> extends UseCompleteListNavigationChildDeclarativeParameters<E, M> {
  toolbarChildParameters: UseToolbarChildParametersSelf;
  context: UseToolbarContext<E, M>;
}
interface UseToolbarChildReturnType<ChildElement extends keyof JSX.IntrinsicElements, M extends UseToolbarSubInfo<ChildElement>> extends UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M> {}
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
export declare function useToolbar<ContainerElement extends keyof JSX.IntrinsicElements, ChildElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ linearNavigationParameters, toolbarParameters: { orientation, role, disabled }, labelParameters, rovingTabIndexParameters, singleSelectionParameters, singleSelectionDeclarativeParameters, ...listNavParameters }: UseToolbarParameters<ContainerElement, ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>;
/**
 * @compositeParams
 */
export declare function useToolbarChild<ChildElement extends keyof JSX.IntrinsicElements>({ context, info, toolbarChildParameters: { disabledProp }, multiSelectionChildDeclarativeParameters, multiSelectionChildParameters: { multiSelectionDisabled }, ...args }: UseToolbarChildParameters<ChildElement, UseToolbarSubInfo<ChildElement>>): UseToolbarChildReturnType<ChildElement, UseToolbarSubInfo<ChildElement>>;
interface UseMenubarContext<ChildElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ChildElement, M> {}
interface UseMenubarSubInfo<ChildElement extends keyof JSX.IntrinsicElements> extends UseToolbarSubInfo<ChildElement> {}
interface UseMenubarParameters<MenuParentElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> {}
interface UseMenubarItemParametersSelf<MenuItemElement extends keyof JSX.IntrinsicElements> {
  role: "menuitem" | "menuitemcheckbox" | "menuitemradio";
  /**
   * Optional. Applies in addition to any single-selection behavior.
   */
  onPress: Nullable<((e: PressEventReason<MenuItemElement>) => void)>;
}
interface UseMenubarItemParameters<MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong$1<UseToolbarChildParameters<MenuItemElement, M>, "toolbarChildParameters">, TargetedPick<UsePressParameters<MenuItemElement>, "pressParameters", "onPressingChange"> {
  menuItemParameters: UseMenubarItemParametersSelf<MenuItemElement>;
}
interface UseMenubarReturnType<MenuParentElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong$1<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
  propsMenubar: ElementProps<MenuParentElement>;
  context: UseMenubarContext<MenuItemElement, M>;
}
interface UseMenubarItemReturnType<MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong$1<UseToolbarChildReturnType<MenuItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters" | "selectionChildReturn">, UsePressReturnType<MenuItemElement> {}
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
export declare function useMenubar<MenuParentElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>(args: UseMenubarParameters<MenuParentElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, UseMenubarSubInfo<MenuItemElement>>;
/**
 * @compositeParams
 */
export declare function useMenubarChild<MenuItemElement extends keyof JSX.IntrinsicElements>({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }: UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>;
interface UseMenuContext<ChildElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<ChildElement>> extends UseMenubarContext<ChildElement, M> {
  menu: {
    closeFromMenuItemClicked(e: EventTypeByTag<any, any>): void;
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
interface UseMenuParameters<MenuSurfaceElement extends keyof JSX.IntrinsicElements, MenuParentElement extends keyof JSX.IntrinsicElements, MenuButtonElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong$1<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters" | "labelParameters">, TargetedOmit<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>, "menuSurfaceParameters", "role" | "surfaceId">, TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role">, TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role">, TargetedOmit<UseMenuSurfaceParameters<MenuParentElement, MenuButtonElement>, "escapeDismissParameters", never>, Pick<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>, "activeElementParameters" | "dismissParameters" | "modalParameters"> {
  menuParameters: UseMenuParametersSelf;
}
interface UseMenuItemParameters<MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {}
interface UseMenuReturnType<MenuSurfaceElement extends keyof JSX.IntrinsicElements, MenuParentElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, MenuButtonElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenuSurfaceReturnType<MenuSurfaceElement, MenuParentElement, MenuButtonElement>, OmitStrong$1<UseMenubarReturnType<MenuParentElement, MenuItemElement, MenuButtonElement, M>, "propsMenubar" | "propsLabel" | "context"> {
  context: UseMenuContext<MenuItemElement, M>;
}
interface MenuItemReturnTypeSelf {
  /**
   * When a menu item is clicked, it's often expected that the menu closes itself immediately after.
   *
   * Use this function to do so.
   */
  closeMenu(e: EventTypeByTag<any, any>): void;
}
interface UseMenuItemReturnType<MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemReturnType<MenuItemElement, M> {
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
export declare function useMenu<MenuSurfaceElement extends keyof JSX.IntrinsicElements, MenuParentElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, MenuButtonElement extends keyof JSX.IntrinsicElements>({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, activeElementParameters, toolbarParameters, modalParameters, ...restParams }: UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, UseMenubarSubInfo<MenuItemElement>>;
interface UseMenuItemParameters<MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
  context: UseMenuContext<MenuItemElement, M>;
}
/**
 * @compositeParams
 */
export declare function useMenuItem<MenuItemElement extends keyof JSX.IntrinsicElements>(p: UseMenuItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenuItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>;
interface NotificationProviderProps {
  targetAssertive: string | Element;
  targetPolite: string | Element;
}
interface NotificationProviderReturnType {
  children: VNode;
  context: NotificationProviderContext;
}
export interface NotificationProviderContext {
  notify(mode: "polite" | "assertive", content: VNode): void;
}
export declare const NotificationProviderContext: import("preact").Context<NotificationProviderContext>;
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
export declare function useNotificationProvider({ targetAssertive, targetPolite }: NotificationProviderProps): {
  notify: (mode: "polite" | "assertive", child: VNode) => number;
  context: {
    notify: (mode: "polite" | "assertive", child: VNode) => number;
  };
  children: import("preact").h.JSX.Element;
};
export declare function useNotify(): (mode: "polite" | "assertive", content: VNode) => void;
interface UseProgressParametersSelf<IndicatorElement extends keyof JSX.IntrinsicElements> {
  max: number;
  value: number | "indeterminate" | "disabled";
  valueText: Nullable<string>;
  tagProgressIndicator: IndicatorElement;
}
interface UseProgressParameters<IndicatorElement extends keyof JSX.IntrinsicElements, _LabelElement extends keyof JSX.IntrinsicElements> extends TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
  progressIndicatorParameters: UseProgressParametersSelf<IndicatorElement>;
}
interface UseProgressReturnType<ProgressElement extends keyof JSX.IntrinsicElements, ProgressLabelElement extends keyof JSX.IntrinsicElements> extends OmitStrong$1<UseLabelReturnType<ProgressElement, ProgressLabelElement>, "propsInput" | "propsLabel"> {
  propsProgressIndicator: ElementProps<ProgressElement>;
  propsProgressLabel: ElementProps<ProgressLabelElement>;
  propsProgressRegion: ElementProps<any>;
}
/**
 * Provides the attributes and roles for a progress bar.
 *
 * @compositeParams
 */
export declare function useProgress<ProgressElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagProgressIndicator, ...void1 }, ...void2 }: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement>;
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
interface UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> extends TargetedPick<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters", "tagProgressIndicator">, Pick<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters"> {
  progressWithHandlerParameters: UseProgressWithHandlerParametersSelf;
  asyncHandlerParameters: UseAsyncHandlerParameters<EventType, CaptureType>;
}
interface UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> {
  propsProgressIndicator: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressIndicator"];
  propsProgressLabel: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressLabel"];
  propsProgressRegion: UseProgressReturnType<IndicatorElement, LabelElement>["propsProgressRegion"];
  asyncHandlerReturn: UseAsyncHandlerReturnType<EventType, CaptureType>;
}
/**
 * Provides props for a progress bar based on the progress of an async event handler, and notifies ATs when the operation has started/finished.
 *
 * @remarks This hook is meant to be combined with other hooks, generally wrapping around the other hook.
 * You don't actually need an entire progress bar element as long as your `notify*` parameters are good.
 *
 * @compositeParams
 */
export declare function useProgressWithHandler<EventType, CaptureType, IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ labelParameters, progressIndicatorParameters, asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters }, progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 }, ...void2 }: UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>): UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>;
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
interface UseRadioGroupParameters<V extends string | number, GroupElement extends keyof JSX.IntrinsicElements, _GroupLabelElement extends keyof JSX.IntrinsicElements, TabbableChildElement extends keyof JSX.IntrinsicElements, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends OmitStrong$1<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "multiSelectionParameters">, TargetedOmit<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, any>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, any>, "singleSelectionParameters", "initiallySingleSelectedIndex" | "onSingleSelectedIndexChange" | "singleSelectionAriaPropName">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
  radioGroupParameters: UseRadioGroupParametersSelf<V>;
}
interface UseRadioParametersSelf<V extends string | number> {
  value: V;
}
interface UseRadioParameters<LP extends LabelPosition, V extends string | number, InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> extends UseGenericChildParameters<RadioContext<V, FocusableLabelElement<LP, InputElement, LabelElement>, M>, Pick<M, Exclude<UseCompleteListNavigationChildInfoKeysParameters<M>, "focusSelf">>>, OmitStrong$1<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, "info" | "context" | "multiSelectionChildParameters" | "singleSelectionChildParameters">, TargetedOmit<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, "info", "focusSelf">, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "labelParameters", never>, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "pressParameters", "excludeSpace" | "onPressSync">, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement, boolean>, "checkboxLikeParameters", "checked" | "role"> {
  radioParameters: UseRadioParametersSelf<V>;
}
interface RadioContextSelf<V extends number | string> {
  name: string;
  nameToIndex: Map<V, number>;
  indexToName: Map<number, V>;
}
interface RadioContext<V extends number | string, ChildElement extends keyof JSX.IntrinsicElements, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ChildElement, M> {
  radioContext: RadioContextSelf<V>;
}
interface UseRadioGroupReturnTypeSelf {
  selectedIndex: number | null;
}
interface UseRadioGroupReturnType<V extends string | number, GroupElement extends keyof JSX.IntrinsicElements, GroupLabelElement extends keyof JSX.IntrinsicElements, TabbableChildElement extends keyof JSX.IntrinsicElements, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends OmitStrong$1<UseCompleteListNavigationDeclarativeReturnType<GroupElement, TabbableChildElement, M>, "context" | "props" | "multiSelectionReturn"> {
  radioGroupReturn: UseRadioGroupReturnTypeSelf;
  propsRadioGroup: ElementProps<GroupElement>;
  propsRadioGroupLabel: ElementProps<GroupLabelElement>;
  context: RadioContext<V, TabbableChildElement, M>;
}
interface RadioSubInfo<TabbableChildElement extends keyof JSX.IntrinsicElements, _V extends string | number> extends UseCompleteListNavigationChildInfo<TabbableChildElement> {}
/**
 * Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
 *
 * @remarks Which radio is the selected one is controlled by the `selectedValue` parameter on the parent.
 *
 * @compositeParams
 *
 * @hasChild {@link useRadio}
 */
export declare function useRadioGroup<V extends string | number, G extends keyof JSX.IntrinsicElements, GL extends keyof JSX.IntrinsicElements, TCE extends keyof JSX.IntrinsicElements, M extends RadioSubInfo<TCE, V> = RadioSubInfo<TCE, V>>({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, typeaheadNavigationParameters, refElementParameters, singleSelectionParameters: { singleSelectionMode, ...void4 }, processedIndexManglerParameters, ...void1 }: UseRadioGroupParameters<V, G, GL, TCE, M>): UseRadioGroupReturnType<V, G, GL, TCE, M>;
interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends keyof JSX.IntrinsicElements, IL extends keyof JSX.IntrinsicElements, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong$1<UseCompleteListNavigationChildDeclarativeReturnType<FocusableLabelElement<LP, I, IL>, M>, "propsChild" | "propsTabbable" | "pressParameters" | "selectionChildReturn">, UseCheckboxLikeReturnType<I, IL> {
  propsInput: ElementProps<I>;
  propsLabel: ElementProps<IL>;
}
/**
 * Implements a single radio button, as part of a radio group.
 *
 * @compositeParams
 */
export declare function useRadio<LP extends LabelPosition, InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, V extends string | number, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V> = RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }: UseRadioParameters<LP, V, InputElement, LabelElement, M>): UseRadioReturnType<LP, V, InputElement, LabelElement, M>;
type RangeChangeEvent<E extends keyof JSX.IntrinsicElements> = {
  [EventDetail]: {
    value: number;
  };
} & Pick<EventTypeByTag<E, InputEvent>, "target" | "currentTarget">;
interface SliderThumbInfo extends ManagedChildInfo<number> {}
interface UseSliderThumbParametersSelf<E extends keyof JSX.IntrinsicElements> extends TagSensitiveProps<E> {
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
interface UseSliderThumbParameters<ThumbElement extends keyof JSX.IntrinsicElements, M extends SliderThumbInfo = SliderThumbInfo> extends UseGenericChildParameters<SliderContext<M>, Pick<M, "index">> {
  sliderThumbParameters: UseSliderThumbParametersSelf<ThumbElement>;
}
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
interface UseSliderThumbReturnType<E extends keyof JSX.IntrinsicElements, M extends SliderThumbInfo = SliderThumbInfo> extends UseManagedChildReturnType<M> {
  sliderThumbReturn: UseSliderThumbReturnTypeSelf;
  propsSliderThumb: ElementProps<E>;
}
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
export declare function useSlider<M extends SliderThumbInfo>({ sliderParameters: { max, min }, managedChildrenParameters }: UseSliderParameters<M>): UseSliderReturnType<M>;
/**
 * @compositeParams
 */
export declare function useSliderThumb<ThumbElement extends keyof JSX.IntrinsicElements>({ sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 }, info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, ...void1 }: UseSliderThumbParameters<ThumbElement>): UseSliderThumbReturnType<ThumbElement>;
type SortDirection = "ascending" | "descending";
interface SortInfo {
  column: number;
  direction: SortDirection;
}
interface TableSectionInfo<TableRowElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationRowsInfo<TableRowElement> {}
interface TableRowInfo<TableRowElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationRowInfo<TableRowElement> {}
interface TableCellInfo<TableCellElement extends keyof JSX.IntrinsicElements> extends UseCompleteGridNavigationCellInfo<TableCellElement> {}
interface UseTableParametersSelf<TableElement extends keyof JSX.IntrinsicElements> {
  tagTable: TableElement;
  initiallySortedColumn: Nullable<number>;
}
interface UseTableParameters<TableElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "rovingTabIndexParameters" | "gridNavigationCompleteParameters">, TargetedOmit<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteGridNavigationParameters<TableElement, RowElement, RM>, "gridNavigationCompleteParameters", "getSortColumn">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
  tableParameters: UseTableParametersSelf<TableElement>;
}
interface UseTableReturnTypeSelf {
  sortByColumn: (column: number) => SortInfo;
}
interface UseTableReturnType<TableElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement> = TableRowInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableElement, RowElement, RM>, "props">, Pick<UseLabelReturnType<TableElement, LabelElement>, "propsLabel"> {
  tableReturn: UseTableReturnTypeSelf;
  propsTable: ElementProps<TableElement>;
  context: UseTableRowContext<RowElement, RM>;
}
interface UseTableContextSelf {
  setRefreshRowsFunction: PassiveStateUpdater<() => void, never>;
  sortByColumn: UseTableReturnTypeSelf["sortByColumn"];
  getCurrentSortColumn(): number | undefined;
  getCurrentSortDirection(): SortDirection;
}
interface UseTableProcessedChildrenContextSelf {
  location: "head" | "body" | "foot";
}
interface UseTableSectionParametersSelf<TableSectionElement extends keyof JSX.IntrinsicElements> {
  tagTableSection: TableSectionElement;
}
interface UseTableRowContext<RowElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>> extends CompleteGridNavigationRowContext<RowElement, RM> {
  tableContext: UseTableContextSelf;
}
interface UseTableProcessedChildrenContext<RowElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>> extends UseCompleteGridNavigationRowsContext<RowElement, RsM> {
  tableProcessedChildren: UseTableProcessedChildrenContextSelf;
}
interface UseTableBodyParameters<TableSectionElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElement>, RsM extends TableSectionInfo<RowElement>> extends OmitStrong<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "rearrangeableChildrenParameters">, TargetedOmit<UseCompleteGridNavigationRowsParameters<RowElement, RM, RsM>, "rearrangeableChildrenParameters", never> {
  tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
  context: UseTableRowContext<RowElement, RM>;
}
interface UseTableBodyReturnType<TableSectionElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>> extends UseCompleteGridNavigationRowsReturnType<RowElement, RsM> {
  context: UseTableProcessedChildrenContext<RowElement, RsM>;
  propsTableSection: ElementProps<TableSectionElement>;
}
type UseTableRowInfoKeysParameters<RM extends TableRowInfo<any>> = UseCompleteGridNavigationRowInfoKeysParameters<RM>;
interface UseTableCellContext<CellElement extends keyof JSX.IntrinsicElements, CM extends TableCellInfo<CellElement>> extends CompleteGridNavigationCellContext<CellElement, CM> {
  tableContext: UseTableContextSelf;
}
interface UseTableRowParametersSelf<TableRowElement extends keyof JSX.IntrinsicElements> {
  selected: Nullable<boolean>;
  tagTableRow: TableRowElement;
}
interface UseTableRowParameters<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters" | "info"> {
  context: UseTableRowContext<RowElement, RM>;
  tableRowParameters: UseTableRowParametersSelf<RowElement>;
  info: Pick<RM, UseTableRowInfoKeysParameters<RM>>;
}
interface UseTableRowReturnType<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> extends UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
  context: UseTableCellContext<CellElement, CM>;
}
interface UseTableCellParametersSelf<TableCellElement extends keyof JSX.IntrinsicElements, CM extends TableCellInfo<TableCellElement>> {
  tagTableCell: TableCellElement;
}
interface UseTableCellReturnTypeSelf {
  sortByThisColumn(): SortInfo;
}
interface UseTableCellParameters<CellElement extends keyof JSX.IntrinsicElements, CM extends TableCellInfo<CellElement>> extends UseCompleteGridNavigationCellParameters<CellElement, CM> {
  tableCellParameters: UseTableCellParametersSelf<CellElement, CM>;
  context: UseTableCellContext<CellElement, CM>;
}
interface UseTableCellReturnType<CellElement extends keyof JSX.IntrinsicElements, CM extends TableCellInfo<CellElement>> extends OmitStrong<UseCompleteGridNavigationCellReturnType<CellElement, CM>, "props"> {
  propsCell: ElementProps<CellElement>;
  propsFocus: ElementProps<any>;
  tableCellReturn: UseTableCellReturnTypeSelf;
}
/**
 * @compositeParams
 */
export declare function useTable<TableElement extends keyof JSX.IntrinsicElements, TableRowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<TableRowElement>>({ gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, labelParameters, tableParameters: { tagTable, initiallySortedColumn }, gridNavigationCompleteParameters: { getSortValueAt }, processedIndexManglerParameters }: UseTableParameters<TableElement, TableRowElement, RM>): UseTableReturnType<TableElement, TableRowElement, LabelElement, RM>;
interface UseTableHeadParametersSelf<TableSectionElement extends keyof JSX.IntrinsicElements> {
  tagHead: TableSectionElement;
}
interface UseTableHeadReturnTypeSelf<TableSectionElement extends keyof JSX.IntrinsicElements> {}
interface UseTableHeadParameters<TableSectionElement extends keyof JSX.IntrinsicElements> {
  tableHeadParameters: UseTableHeadParametersSelf<TableSectionElement>;
}
interface UseTableHeadReturnType<TableSectionElement extends keyof JSX.IntrinsicElements> {
  props: ElementProps<TableSectionElement>;
  tableHeadReturn: UseTableHeadReturnTypeSelf<TableSectionElement>;
}
/**
 * @compositeParams
 */
export declare function useTableHead<TableSectionElement extends keyof JSX.IntrinsicElements>({ tableHeadParameters: { tagHead: tagTableSection } }: UseTableHeadParameters<TableSectionElement>): UseTableHeadReturnType<TableSectionElement>;
/**
 * @compositeParams
 */
export declare function useTableBody<TableSectionElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, RsM extends TableSectionInfo<RowElement>>({ context: processedChildrenContext, managedChildrenParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection } }: UseTableBodyParameters<TableSectionElement, RowElement, RM, RsM>): UseTableBodyReturnType<TableSectionElement, RowElement, RsM>;
interface UseTableRowOuterParameters<RowElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>> extends OmitStrong<UseProcessedChildParameters<RowElement, RsM>, "info">, TargetedOmit<UseProcessedChildParameters<RowElement, RsM>, "info", "getElement">, UseRefElementParameters<RowElement> {}
interface UseTableRowOuterReturnType<RowElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>> extends OmitStrong<UseProcessedChildReturnType<RowElement, RsM>, never>, OmitStrong<UseRefElementReturnType<RowElement>, "propsStable"> {
  hide: boolean;
}
/**
 * @compositeParams
 */
export declare function useTableRowOuter<RowElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>>({ context, info: { ...info }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters, ...void1 }: UseTableRowOuterParameters<RowElement, RsM>): UseTableRowOuterReturnType<RowElement, RsM>;
/**
 * @compositeParams
 */
export declare function useTableRow<TableRowElement extends keyof JSX.IntrinsicElements, TableCellElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<TableRowElement>, CM extends TableCellInfo<TableCellElement>>({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, TableRowInfo<TableRowElement>, TableCellInfo<TableCellElement>>;
/**
 * @compositeParams
 */
export declare function useTableCell<TableCellElement extends keyof JSX.IntrinsicElements>({ tableCellParameters: { tagTableCell }, info, context, gridNavigationCellParameters, textContentParameters, ...p }: UseTableCellParameters<TableCellElement, TableCellInfo<TableCellElement>>): UseTableCellReturnType<TableCellElement, TableCellInfo<TableCellElement>>;
interface TabPanelInfo extends ManagedChildInfo<number> {
  getVisible(): boolean;
  setVisibleIndex: (newIndex: number | null, previousIndex: number | null) => void;
}
interface TabInfo<E extends keyof JSX.IntrinsicElements> extends UseCompleteListNavigationChildInfo<E> {}
type TabsChangeEvent<E extends keyof JSX.IntrinsicElements> = {
  [EventDetail]: {
    selectedIndex: number;
  };
} & Pick<EventTypeByTag<E, Event>, "target" | "currentTarget">;
interface UseTabsParametersSelf {
  localStorageKey: Nullable<keyof PersistentStates>;
  orientation: "horizontal" | "vertical";
  role: Nullable<"tablist" | string>;
}
interface UseTabsParameters<TabContainerElement extends keyof JSX.IntrinsicElements, TabElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement>> extends UseTabListParameters<TabContainerElement, TabElement, M>, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
  tabsParameters: UseTabsParametersSelf;
}
interface UseTabParameters<TabElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement>> extends UseGenericChildParameters<UseTabsContext<TabElement, M>, Pick<TabInfo<TabElement>, "index" | "focusSelf" | "untabbable">>, OmitStrong$1<UseCompleteListNavigationChildParameters<TabElement, M>, "context" | "info" | "multiSelectionChildParameters">, TargetedOmit<UsePressParameters<TabElement>, "pressParameters", "excludeEnter" | "excludePointer" | "excludeSpace" | "allowRepeatPresses" | "onPressSync"> {}
interface UseTabPanelParameters<M extends TabPanelInfo> extends UseGenericChildParameters<UseTabPanelsContext<M>, Pick<M, "index">>, OmitStrong$1<UseManagedChildParameters<M>, "context" | "info"> {}
interface UseTabsContext<ChildElement extends keyof JSX.IntrinsicElements, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ChildElement, M> {
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
interface UseTabReturnType<TabElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement>> extends OmitStrong$1<UseCompleteListNavigationChildReturnType<TabElement, M>, "pressParameters" | "propsChild" | "propsTabbable" | "selectionChildReturn">, UsePressReturnType<TabElement> {
  props: ElementProps<TabElement>;
}
interface UseTabLabelParameters {}
interface UseTabListParameters<TabContainerElement extends keyof JSX.IntrinsicElements, TabElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement>> extends OmitStrong$1<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "linearNavigationParameters" | "singleSelectionParameters" | "multiSelectionParameters">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "linearNavigationParameters", "arrowKeyDirection">, TargetedOmit<UseCompleteListNavigationParameters<TabContainerElement, TabElement, M>, "singleSelectionParameters", "singleSelectionAriaPropName"> {}
interface UseTabListReturnType<ParentElement extends keyof JSX.IntrinsicElements, ChildElement extends keyof JSX.IntrinsicElements, M extends TabInfo<ChildElement>> extends UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {}
interface UseTabPanelReturnTypeSelf {
  visibleOffset: number | null;
  visible: boolean | null;
  getVisible: () => boolean;
}
interface UseTabPanelReturnType<E extends keyof JSX.IntrinsicElements> {
  props: ElementProps<E>;
  tabPanelReturn: UseTabPanelReturnTypeSelf;
}
interface UseTabListLabelReturnTypeInfo {}
interface UseTabLabelReturnTypeWithHooks<LabelElement extends keyof JSX.IntrinsicElements> extends UseTabListLabelReturnTypeInfo {
  useTabListLabelProps: (props: ElementProps<LabelElement>) => ElementProps<LabelElement>;
}
interface UseTabsReturnType<TabContainerElement extends keyof JSX.IntrinsicElements, TabElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement> = TabInfo<TabElement>> extends OmitStrong$1<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
  propsContainer: ElementProps<TabContainerElement>;
  propsLabel: ElementProps<LabelElement>;
  contextPanels: UseTabPanelsContext<TabPanelInfo>;
  contextTabs: UseTabsContext<TabElement, M>;
}
type UseTab<_TabContainerElement extends keyof JSX.IntrinsicElements, TabElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement>> = (args: UseTabParameters<TabElement, M>) => UseTabReturnType<TabElement, M>;
type UseTabList<TabContainerElement extends keyof JSX.IntrinsicElements, TabElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement>> = (args: UseTabListParameters<TabContainerElement, TabElement, M>) => UseTabListReturnType<TabContainerElement, TabElement, M>;
type UseTabPanel<PanelElement extends keyof JSX.IntrinsicElements, M extends TabPanelInfo> = (args: UseTabPanelParameters<M>) => UseTabPanelReturnType<PanelElement>;
type UseTabListLabel<LabelElement extends keyof JSX.IntrinsicElements> = (args: UseTabLabelParameters) => UseTabLabelReturnTypeWithHooks<LabelElement>;
/**
 * Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.
 *
 * @remarks Tabs consist of both a list of tabs and a list of tab panels.
 * A Tab and a TabPanel that share the same index are linked together; when that tab is selected that panel is shown.
 *
 * @compositeParams
 *
 * @hasChild {@link useTab}
 * @hasChild {@link useTabPanel}
 */
export declare function useTabs<TabListElement extends keyof JSX.IntrinsicElements, TabElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange: ssi, singleSelectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }: UseTabsParameters<TabListElement, TabElement, TabInfo<TabElement>>): UseTabsReturnType<TabListElement, TabElement, LabelElement, TabInfo<TabElement>>;
/**
 * Implements a single tab of a Tabs component.
 *
 * The index that this child uses controls which TabPanel it shows when selected.
 *
 * @compositeParams
 */
export declare function useTab<TabElement extends keyof JSX.IntrinsicElements>({ info: { focusSelf: focusSelfParent, index, untabbable, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context, hasCurrentFocusParameters, refElementParameters, singleSelectionChildParameters, ...void3 }: UseTabParameters<TabElement, TabInfo<TabElement>>): UseTabReturnType<TabElement, TabInfo<TabElement>>;
/**
 * Implements the TabPanel a Tab controls.
 *
 * @remarks A hidden tab panel is made `inert` so that it cannot be interacted with, so you can just set `opacity: 0` on your hidden panels if that's how you want to style them.
 * They'll still be properly removed from the tab order (i.e. you don't **also** need `display: none`).
 *
 * @compositeParams
 */
export declare function useTabPanel<PanelElement extends keyof JSX.IntrinsicElements>({ info, context }: UseTabPanelParameters<TabPanelInfo>): UseTabPanelReturnType<PanelElement>;
interface UseToastsParametersSelf {
  visibleCount: number;
}
interface UseToastsParameters extends UseManagedChildrenParameters<ToastInfo> {
  toastsParameters: UseToastsParametersSelf;
}
interface UseToastParametersSelf {
  politeness?: Nullable<"polite" | "assertive">;
  timeout: Nullable<number>;
  children: ComponentChildren;
}
interface UseToastParameters<M extends ToastInfo> extends OmitStrong$1<UseManagedChildParameters<M>, "info" | "context">, UseGenericChildParameters<ToastsContext<M>, Pick<M, "index">> {
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
interface UseToastReturnType<ToastType extends keyof JSX.IntrinsicElements, M extends ToastInfo> extends UseManagedChildReturnType<M> {
  toastReturn: UseToastReturnTypeSelf;
  props: ElementProps<ToastType>;
}
interface UseToastsReturnType<ContainerType extends keyof JSX.IntrinsicElements, M extends ToastInfo> extends UseManagedChildrenReturnType<M> {
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
export declare function useToasts<ContainerType extends keyof JSX.IntrinsicElements>({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }: UseToastsParameters): UseToastsReturnType<ContainerType, ToastInfo>;
/**
 * @compositeParams
 */
export declare function useToast<E extends keyof JSX.IntrinsicElements>({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }: UseToastParameters<ToastInfo>): UseToastReturnType<E, ToastInfo>;
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
interface UseTooltipParameters<TriggerType extends keyof JSX.IntrinsicElements, PopupType extends keyof JSX.IntrinsicElements> extends TargetedPick<UseEscapeDismissParameters<PopupType, true>, "escapeDismissParameters", "getDocument" | "parentDepth">, TargetedPick<UsePressReturnType<TriggerType>, "pressReturn", "longPress">, Pick<UseDismissParameters<any>, "activeElementParameters"> {
  tooltipParameters: UseTooltipParametersSelf;
}
type TooltipState = `${"hovering" | "focused"}-${"popup" | "trigger"}` | null;
/**
 * Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.
 *
 * @remarks Tooltips are remarkably under-specified, so some of this is speculative.
 *
 * @compositeParams
 */
export declare function useTooltip<TriggerType extends keyof JSX.IntrinsicElements, PopupType extends keyof JSX.IntrinsicElements>({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay, usesLongPress }, activeElementParameters, escapeDismissParameters, pressReturn: { longPress, ...void2 }, ...void1 }: UseTooltipParameters<TriggerType, PopupType>): UseTooltipReturnType<TriggerType, PopupType>;
interface UseTooltipReturnTypeSelf {
  getState(): TooltipState;
}
interface UseTooltipReturnType<TriggerType extends keyof JSX.IntrinsicElements, PopupType extends keyof JSX.IntrinsicElements> {
  propsPopup: ElementProps<PopupType>;
  propsTrigger: ElementProps<TriggerType>;
  tooltipReturn: UseTooltipReturnTypeSelf;
  refElementPopupReturn: UseRefElementReturnTypeSelf<PopupType>;
  refElementSourceReturn: UseRefElementReturnTypeSelf<TriggerType>;
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
  singleSelectionMode: Context<"activation" | "disabled" | "focus">;
  multiSelectionMode: Context<"activation" | "disabled" | "focus">;
};
type DefaultExcepts = keyof typeof ContextDefaults;
type ContextType<T extends Context<any>> = T extends Context<infer C> ? C : unknown;
export declare function useDefault<K extends DefaultExcepts>(context: K, userValue: null | undefined | ContextType<(typeof ContextDefaults)[K]>): ContextType<(typeof ContextDefaults)[K]>;
export declare const ParentDepthContext: Context<number>;
type PartialExceptD<T, KeepRequired extends keyof T> = Partial<Pick<T, Exclude<keyof T, KeepRequired>>> & Pick<T, KeepRequired>;
/**
 * Like `Partial<T>`, but the properties given by `K` will **NOT** be made partial -- they'll remain required.
 */
type PartialExcept<T, K extends keyof T> = PartialExceptD<T, K>;
export declare function useDefaultRenderPortal({ portalId, children }: {
  portalId: string;
  children: VNode;
}): VNode;
type AccordionProps<HeaderButtonElement extends keyof JSX.IntrinsicElements, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<UseAccordionReturnType<HeaderButtonElement, M>, Get4<UseAccordionParameters<HeaderButtonElement, M>, "accordionParameters", "typeaheadNavigationParameters", "linearNavigationParameters", "managedChildrenParameters">, never>;
type AccordionSectionProps<HeaderContainerElement extends keyof JSX.IntrinsicElements, HeaderButtonElement extends keyof JSX.IntrinsicElements, BodyElement extends keyof JSX.IntrinsicElements, M extends UseAccordionSectionInfo<HeaderButtonElement> = UseAccordionSectionInfo<HeaderButtonElement>> = GenericComponentProps<UseAccordionSectionReturnType<HeaderContainerElement, HeaderButtonElement, BodyElement>, Get6<UseAccordionSectionParameters<HeaderContainerElement, HeaderButtonElement, BodyElement, M>, "info", "accordionSectionParameters", "buttonParameters", "textContentParameters", "pressParameters", "refElementHeaderButtonParameters">, "index" | "tagButton"> & {
  info?: OmitStrong<M, keyof UseAccordionSectionInfo<HeaderButtonElement>>;
};
export declare const Accordion: <HeaderButtonElement extends keyof JSX.IntrinsicElements>({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...void1 }: AccordionProps<HeaderButtonElement, UseAccordionSectionInfo<HeaderButtonElement>>) => JSX.Element;
export declare const AccordionSection: <HeaderContainerElement extends keyof JSX.IntrinsicElements, HeaderButtonElement extends keyof JSX.IntrinsicElements, BodyElement extends keyof JSX.IntrinsicElements>({ open, index, tagButton, disabled, bodyRole, untabbable, getText, imperativeHandle, onPressSync, focusSelf, render, info, onElementChange, onMount, onUnmount, onTextContentChange, ...void1 }: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement, UseAccordionSectionInfo<HeaderButtonElement>>) => JSX.Element;
type ButtonProps<ButtonElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseButtonReturnType<ButtonElement>, Get3<UseButtonParameters<ButtonElement>, "buttonParameters", "pressParameters", "refElementParameters">, "tagButton">;
export declare const Button: <ButtonElement extends keyof JSX.IntrinsicElements>({ tagButton, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeSpace, onPressingChange, onPressSync, focusSelf, role, imperativeHandle, ...void1 }: ButtonProps<ButtonElement>) => JSX.Element;
type CheckboxGroupProps<ParentElement extends keyof JSX.IntrinsicElements, TabbableChildElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseCheckboxGroupReturnType<ParentElement, TabbableChildElement>, Get8<UseCheckboxGroupParameters<ParentElement, TabbableChildElement>, "linearNavigationParameters", "checkboxGroupParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters", "rovingTabIndexParameters", "refElementParameters", "multiSelectionParameters", "processedIndexManglerParameters">, never>;
type CheckboxGroupParentProps<TCE extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseCheckboxGroupParentReturnType<TCE>, Get6<UseCheckboxGroupParentParameters<TCE>, "textContentParameters", "info", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters">, "index" | "focusSelf">;
type CheckboxGroupChildProps<TCE extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseCheckboxGroupChildReturnType<TCE>, Get6<UseCheckboxGroupChildParameters<TCE>, "checkboxGroupChildParameters", "textContentParameters", "info", "refElementParameters", "hasCurrentFocusParameters", "multiSelectionChildParameters">, "index" | "focusSelf" | "checked" | "onChangeFromParent">;
export declare const CheckboxGroup: <ParentElement extends keyof JSX.IntrinsicElements, TabbableChildElement extends keyof JSX.IntrinsicElements>({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, getSortValueAt, compare, getIndex, ...void1 }: CheckboxGroupProps<ParentElement, TabbableChildElement>) => JSX.Element;
export declare const CheckboxGroupParent: <TCE extends keyof JSX.IntrinsicElements>({ render, index, focusSelf, untabbable, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ..._rest }: CheckboxGroupParentProps<TCE>) => JSX.Element;
export declare const CheckboxGroupChild: <TCE extends keyof JSX.IntrinsicElements>({ index, render, checked, onChangeFromParent, untabbable, getText, focusSelf, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, multiSelectionDisabled, onMultiSelectChange, onTextContentChange, ...void1 }: CheckboxGroupChildProps<TCE>) => JSX.Element;
type CheckboxProps<InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseCheckboxReturnType<InputElement, LabelElement>, Get4<UseCheckboxParameters<LabelPosition, InputElement, LabelElement>, "checkboxLikeParameters", "labelParameters", "pressParameters", "checkboxParameters">, "tagInput" | "tagLabel" | "labelPosition" | "ariaLabel" | "checked">;
export declare function defaultRenderCheckboxLike<I extends keyof JSX.IntrinsicElements, L extends keyof JSX.IntrinsicElements, InfoType>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>): (info: InfoType) => VNode;
interface DefaultRenderCheckboxLikeParameters<I extends keyof JSX.IntrinsicElements, L extends keyof JSX.IntrinsicElements, InfoType> {
  labelPosition: "wrapping" | "separate" | "hidden";
  tagInput: I;
  tagLabel: L;
  makePropsInput: (info: InfoType) => ElementProps<I>;
  makePropsLabel: (info: InfoType) => ElementProps<L>;
}
export declare const Checkbox: <I extends keyof JSX.IntrinsicElements, L extends keyof JSX.IntrinsicElements>({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, longPressThreshold, excludeSpace, imperativeHandle, render, onCheckedChange, ...void1 }: CheckboxProps<I, L>) => JSX.Element;
type DialogProps<FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, DialogElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>, Get10<UseDialogParameters<DialogElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters", "activeElementParameters", "backdropDismissParameters", "escapeDismissParameters", "dismissParameters", "modalParameters", "refElementParameters">, "ariaLabel" | "onDismiss" | "active" | "focusPopup">;
export declare const Dialog: <FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, DialogElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements>({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, focusOpener, getDocument, imperativeHandle, parentDepth, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, focusPopup, ariaLabel, onElementChange, onMount, onUnmount, render }: DialogProps<FocusContainerElement, SourceElement, DialogElement, TitleElement>) => JSX.Element;
type DrawerProps<FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, DrawerElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>, Get11<UseDrawerParameters<DrawerElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters", "activeElementParameters", "dismissParameters", "backdropDismissParameters", "escapeDismissParameters", "lostFocusDismissParameters", "modalParameters", "refElementParameters">, "ariaLabel" | "onDismiss" | "active" | "focusPopup">;
export declare const Drawer: <FocusContainerElement extends keyof JSX.IntrinsicElements, SourceElement extends keyof JSX.IntrinsicElements, DrawerElement extends keyof JSX.IntrinsicElements, TitleElement extends keyof JSX.IntrinsicElements>({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, ...void1 }: DrawerProps<FocusContainerElement, SourceElement, DrawerElement, TitleElement>) => JSX.Element;
type GridlistProps<TableElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseGridlistReturnType<TableElement, RowElement, LabelElement>, Get16<UseGridlistParameters<TableElement, RowElement>, "labelParameters", "singleSelectionParameters", "multiSelectionParameters", "gridNavigationParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters", "refElementParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "linearNavigationParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "managedChildrenParameters", "singleSelectionDeclarativeParameters", "gridNavigationCompleteParameters">, "children">;
type GridlistRowOuterProps<RowElement extends keyof JSX.IntrinsicElements, RsM extends UseGridlistRowsInfo<RowElement>> = GenericComponentProps<UseGridlistRowOuterReturnType<RowElement, RsM>, Get3<UseGridlistRowOuterParameters<RowElement, RsM>, "info", "refElementParameters", "rearrangeableChildParameters">, "index">;
type GridlistRowInnerProps<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement>> = GenericComponentProps<UseGridlistRowReturnType<RowElement, CellElement, RM, CM>, Get12<UseGridlistRowParameters<RowElement, CellElement, RM, CM>, "info", "refElementParameters", "rovingTabIndexParameters", "refElementParameters", "multiSelectionChildParameters", "multiSelectionChildDeclarativeParameters", "linearNavigationParameters", "hasCurrentFocusParameters", "typeaheadNavigationParameters", "textContentParameters", "singleSelectionChildParameters", "rovingTabIndexParameters">, "index">;
type GridlistCellProps<CellElement extends keyof JSX.IntrinsicElements, CM extends UseGridlistCellInfo<CellElement>> = GenericComponentProps<UseGridlistCellReturnType<CellElement, CM>, Get4<UseGridlistCellParameters<CellElement, CM>, "info", "pressParameters", "gridNavigationCellParameters", "textContentParameters">, "index">;
type GridlistRowProps<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RsM extends UseGridlistRowsInfo<RowElement> = UseGridlistRowsInfo<RowElement>, RM extends UseGridlistRowInfo<RowElement> = UseGridlistRowInfo<RowElement>, CM extends UseGridlistCellInfo<CellElement> = UseGridlistCellInfo<CellElement>> = OmitStrong<GridlistRowOuterProps<RowElement, RsM>, "render"> & OmitStrong<GridlistRowInnerProps<RowElement, CellElement, RM, CM>, "render"> & {
  render: ((info: ({
    hide: true;
  } & UseGridlistRowOuterReturnType<RowElement, RsM>) | ({
    hide: false;
  } & UseGridlistRowReturnType<RowElement, CellElement, RM, CM>)) => VNode);
};
export declare function Gridlist<TableElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ render, ariaLabel, collator, disableHomeEndKeys, focusSelfParent, imperativeHandle, initiallyTabbableColumn, multiSelectionAriaPropName, multiSelectionMode, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onLabelClick, onMount, onNavigateLinear, onNavigateTypeahead, onSelectionChange, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, singleSelectionAriaPropName, singleSelectionMode, typeaheadTimeout, untabbable, children, staggered, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onSingleSelectedIndexChange, singleSelectedIndex, getSortColumn, getSortValueAt, animate, disableIntersectionObserver, ...void1 }: GridlistProps<TableElement, RowElement, LabelElement>): JSX.Element;
export declare function GridlistRow<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements>(props: GridlistRowProps<RowElement, CellElement>): JSX.Element;
export declare function GridlistCell<CellElement extends keyof JSX.IntrinsicElements>({ index, render, getText, imperativeHandle, onTextContentChange, untabbable, allowRepeatPresses, colSpan, excludeEnter, excludePointer, excludeSpace, focusSelf, longPressThreshold, onPressSync, onPressingChange }: GridlistCellProps<CellElement, UseGridlistCellInfo<CellElement>>): JSX.Element;
type HeadingProps<T extends keyof JSX.IntrinsicElements> = RenderableProps<ElementProps<T>> & {
  /**
   * The contents of the heading.
   *
   * Separate from the children, which become the content described by this heading.
   */
  heading: ComponentChildren;
  tag?: T;
};
/**
 * Utility component that creates a heading `h1`, `h2`, `h3`, etc.
 *
 * Which one is chosen depends on a parent `Heading`, with the root-most `Heading`
 * starting at 1, or the value specified by `HeadingReset`.
 *
 * Specify the actual contents of the heading with the `heading` prop.
 *
 */
export declare const Heading: <T extends keyof JSX.IntrinsicElements>({ children, heading, tag, ref, ...props }: HeadingProps<T>) => JSX.Element;
/**
 * Set the value that the next `Heading` will use as its base.
 *
 * Minimum of 1.
 */
export declare const HeadingReset: ({ newLevel, children }: {
  newLevel: number;
  children: ComponentChildren;
}) => JSX.Element;
interface ListboxPropsBase<ListElement extends keyof JSX.IntrinsicElements, ListItemElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends Get11<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "singleSelectionDeclarativeParameters", "multiSelectionParameters", "paginatedChildrenParameters", "processedIndexManglerParameters">, OmitStrong$1<Get$1<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType"> {}
interface ListboxChildrenPropsBase<ListItemElement extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ListItemElement>, SM extends UseCompleteListNavigationChildrenInfo<ListItemElement> = UseCompleteListNavigationChildrenInfo<ListItemElement>> extends Get4<UseCompleteListNavigationChildrenParameters<ListItemElement, M, SM>, "managedChildrenParameters", "paginatedChildrenParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters"> {}
interface ListboxItemInnerPropsBase<ListItemElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>> extends Get7<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters", "textContentParameters", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "multiSelectionChildDeclarativeParameters">, OmitStrong$1<NonNullable<Get$1<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, never>, Pick<M, "index" | "untabbable" | "focusSelf"> {}
interface ListboxProps<ListElement extends keyof JSX.IntrinsicElements, ListItemElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>, ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>, "ariaLabel"> {}
interface ListboxChildrenProps<ListItemElement extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ListItemElement>, SM extends UseCompleteListNavigationChildrenInfo<ListItemElement>> extends GenericComponentProps<UseCompleteListNavigationChildrenReturnType<ListItemElement, SM>, ListboxChildrenPropsBase<ListItemElement, M>, "children"> {}
type InnerOuterDifference<ListItemElement extends keyof JSX.IntrinsicElements> = OmitStrong$1<Get3<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn", "paginatedChildReturn", "staggeredChildReturn">, "getChildren">;
interface ListboxItemInnerProps<ListItemElement extends keyof JSX.IntrinsicElements, M extends ListboxInfo<ListItemElement>> extends GenericComponentProps<(TargetedOmit<OmitStrong$1<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn">, "staggeredChildReturn", "childUseEffect"> & TargetedOmit<OmitStrong$1<UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>, "managedChildReturn">, "paginatedChildReturn", never> & Partial<UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>>), ListboxItemInnerPropsBase<ListItemElement, M>, "index">, InnerOuterDifference<ListItemElement> {
  props: UseProcessedChildReturnType<ListItemElement, UseProcessedChildInfo<ListItemElement>>["props"];
}
export declare const GroupedListbox: <LabelElement extends keyof JSX.IntrinsicElements>({ ariaLabel, orientation, render, onElementChange, onMount, onUnmount }: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "render" | "onElementChange" | "onMount" | "onUnmount">) => JSX.Element;
export declare const Listbox: <ListElement extends keyof JSX.IntrinsicElements, ListItemElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ ariaLabel, collator, disableHomeEndKeys, singleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, pageNavigationSize, untabbable, typeaheadTimeout, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, singleSelectionAriaPropName, singleSelectionMode, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, paginationMax, paginationMin, getSortValueAt, compare, getIndex, ...void1 }: ListboxProps<ListElement, ListItemElement, LabelElement, ListboxInfo<ListItemElement>>) => JSX.Element;
export declare const ListboxChildren: <ListItemElement extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ListItemElement>, SM extends UseCompleteListNavigationChildrenInfo<ListItemElement>>({ children, render, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, animate, disableIntersectionObserver }: ListboxChildrenProps<ListItemElement, M, SM>) => JSX.Element;
type UseProcessedListboxItemReturnType<ListboxItemElement extends keyof JSX.IntrinsicElements> = OmitStrong$1<UseProcessedChildReturnType<ListboxItemElement, any>, "refElementParameters"> & Pick<UseRefElementReturnType<ListboxItemElement>, "refElementReturn">;
interface ListboxItemProps<ListboxItemElement extends keyof JSX.IntrinsicElements> extends OmitStrong$1<ListboxItemInnerProps<ListboxItemElement, ListboxInfo<ListboxItemElement>>, keyof InnerOuterDifference<any> | "render" | "imperativeHandle" | "props">, OmitStrong$1<Get$1<UseProcessedChildParameters<ListboxItemElement, any>, "info">, "index" | "getElement">, Partial<Get$1<UseRefElementParameters<ListboxItemElement>, "refElementParameters">>, Partial<Get$1<UseRearrangeableChildParameters<ListboxItemElement>, "rearrangeableChildParameters">> {
  imperativeHandle?: Ref<{
    hidden: true;
  } & UseProcessedListboxItemReturnType<ListboxItemElement>> | Ref<{
    hidden?: false;
  } & UseProcessedListboxItemReturnType<ListboxItemElement> & UseCompleteListNavigationChildReturnType<ListboxItemElement, any>>;
  render: {
    (info: {
      hidden: true;
    } & UseProcessedListboxItemReturnType<ListboxItemElement>): VNode;
    (info: {
      hidden?: false;
    } & UseProcessedListboxItemReturnType<ListboxItemElement> & UseCompleteListNavigationChildReturnType<ListboxItemElement, ListboxInfo<ListboxItemElement>>): VNode;
  };
}
export declare const ListboxItem: <ListboxItemElement extends keyof JSX.IntrinsicElements>({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, onTextContentChange, cssProperty, duration, ...void1 }: ListboxItemProps<ListboxItemElement>) => JSX.Element;
type MenubarProps<MenuParentElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, Get11<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters", "processedIndexManglerParameters">, "orientation" | "ariaLabel" | "singleSelectionMode" | "multiSelectionMode">;
type MenubarItemProps<MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenubarItemReturnType<MenuItemElement, M>, Get9<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters", "info", "refElementParameters", "hasCurrentFocusParameters", "singleSelectionChildParameters", "multiSelectionChildParameters", "multiSelectionChildDeclarativeParameters">, "index"> & {
  info?: OmitStrong$1<M, keyof UseMenubarSubInfo<MenuItemElement>>;
};
export declare const MenubarItemContext: import("preact").Context<UseMenubarContext<any, any>>;
export declare const Menubar: <ContainerElement extends keyof JSX.IntrinsicElements, ChildElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, noTypeahead, untabbable, onTabbableIndexChange, disabled, singleSelectedIndex, onSingleSelectedIndexChange, typeaheadTimeout, role, ariaLabel, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, getSortValueAt, compare, getIndex, ...void1 }: MenubarProps<ContainerElement, ChildElement, LabelElement, UseMenubarSubInfo<ChildElement>>) => JSX.Element;
export declare const MenubarItem: <MenuItemElement extends keyof JSX.IntrinsicElements>({ index, render, focusSelf, untabbable, getText, onPress, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, multiSelectionDisabled, singleSelectionDisabled, onTextContentChange, multiSelected, onMultiSelectedChange, ...void1 }: MenubarItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) => JSX.Element;
type MenuProps<MenuSurfaceElement extends keyof JSX.IntrinsicElements, MenuParentElement extends keyof JSX.IntrinsicElements, MenuItemElement extends keyof JSX.IntrinsicElements, MenuButtonElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>, Get16<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters", "menuSurfaceParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "dismissParameters", "escapeDismissParameters", "toolbarParameters", "singleSelectionParameters", "activeElementParameters", "refElementParameters", "dismissParameters", "modalParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters", "processedIndexManglerParameters">, "active" | "onDismiss" | "openDirection" | "orientation" | "onOpen">;
type MenuItemProps<MenuItemElement extends keyof JSX.IntrinsicElements, M extends UseMenubarSubInfo<MenuItemElement>> = GenericComponentProps<UseMenuItemReturnType<MenuItemElement, M>, MenubarItemProps<MenuItemElement, M>, "index"> & {
  info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>;
};
export declare const Menu: <SurfaceElement extends keyof JSX.IntrinsicElements, ParentElement extends keyof JSX.IntrinsicElements, ChildElement extends keyof JSX.IntrinsicElements, ButtonElement extends keyof JSX.IntrinsicElements>({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, singleSelectionAriaPropName, singleSelectionMode, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, pageNavigationSize, parentDepth, disabled, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getSortValueAt, render, imperativeHandle, compare, getIndex, ...void1 }: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement, UseMenubarSubInfo<ChildElement>>) => JSX.Element;
export declare const MenuItem: <MenuItemElement extends keyof JSX.IntrinsicElements>({ index, untabbable, onPress, getText, role, focusSelf, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, multiSelectionDisabled, singleSelectionDisabled, onTextContentChange, multiSelected, onMultiSelectedChange, ...void1 }: MenuItemProps<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>) => JSX.Element;
type Get<T, K extends keyof T> = T[K];
interface ProgressPropsBase<IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> extends Get<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters">, Get<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters"> {}
interface ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> extends Get3<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "labelParameters", "progressIndicatorParameters", "progressWithHandlerParameters">, UseAsyncHandlerParameters<EventType, CaptureType> {}
interface ProgressProps<IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> extends GenericComponentProps<UseProgressReturnType<IndicatorElement, LabelElement>, PartialExcept<ProgressPropsBase<IndicatorElement, LabelElement>, "tagProgressIndicator" | "ariaLabel">, "tagProgressIndicator"> {}
interface ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> extends GenericComponentProps<UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>, PartialExcept<ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement, LabelElement>, "capture" | "tagProgressIndicator" | "ariaLabel" | "asyncHandler">, "capture" | "tagProgressIndicator"> {}
export declare const Progress: <IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ tagProgressIndicator, ariaLabel, max, render, value, valueText, imperativeHandle, ...void1 }: ProgressProps<IndicatorElement, LabelElement>) => JSX.Element;
export declare const ProgressWithHandler: <EventType, CaptureType, IndicatorElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ ariaLabel, forciblyPending, render, tagProgressIndicator, asyncHandler, capture, debounce, throttle, notifyFailure, notifyPending, notifySuccess, imperativeHandle, ...void1 }: ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement, LabelElement>) => JSX.Element;
interface RadioGroupPropsBase<V extends string | number, GroupElement extends keyof JSX.IntrinsicElements, GroupLabelElement extends keyof JSX.IntrinsicElements, TabbableChildElement extends keyof JSX.IntrinsicElements> extends Get9<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters", "linearNavigationParameters", "labelParameters", "radioGroupParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "refElementParameters", "singleSelectionParameters", "processedIndexManglerParameters"> {}
interface RadioPropsBase<LP extends LabelPosition, InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, V extends string | number> extends Get7<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "radioParameters", "checkboxLikeParameters", "labelParameters", "textContentParameters", "pressParameters", "hasCurrentFocusParameters", "refElementParameters">, Pick<RadioSubInfo<any, V>, "index" | "untabbable"> {}
interface RadioGroupProps<V extends string | number, GroupElement extends keyof JSX.IntrinsicElements, GroupLabelElement extends keyof JSX.IntrinsicElements, TabbableChildElement extends keyof JSX.IntrinsicElements> extends GenericComponentProps<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>, PartialExcept<RadioGroupPropsBase<V, GroupElement, GroupLabelElement, TabbableChildElement>, "ariaLabel" | "name" | "selectedValue">, "name" | "selectedValue"> {}
interface RadioProps<LP extends LabelPosition, InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, V extends string | number> extends GenericComponentProps<UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, PartialExcept<RadioPropsBase<LP, InputElement, LabelElement, V>, "index" | "value" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel">, "value" | "index" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel"> {}
export declare const RadioGroup: <V extends string | number, GroupElement extends keyof JSX.IntrinsicElements, GroupLabelElement extends keyof JSX.IntrinsicElements, TabbableChildElement extends keyof JSX.IntrinsicElements>({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, singleSelectionMode, getSortValueAt, compare, getIndex, ...void1 }: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>) => JSX.Element;
export declare const Radio: <LP extends LabelPosition, V extends string | number, InputElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, onTextContentChange, ...void1 }: RadioProps<LP, InputElement, LabelElement, V>) => JSX.Element;
type SliderProps<M extends SliderThumbInfo> = GenericComponentProps<UseSliderReturnType<M>, Get2<UseSliderParameters<M>, "managedChildrenParameters", "sliderParameters">, "min" | "max">;
type SliderThumbProps<ThumbElement extends keyof JSX.IntrinsicElements, M extends SliderThumbInfo = SliderThumbInfo> = GenericComponentProps<UseSliderThumbReturnType<ThumbElement>, Get2<UseSliderThumbParameters<ThumbElement>, "sliderThumbParameters", "info">, "index" | "label" | "tag" | "value"> & {
  info?: OmitStrong<M, keyof SliderThumbInfo>;
};
export declare function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, render, imperativeHandle, onChildrenCountChange, ...void1 }: SliderProps<SliderThumbInfo>): JSX.Element;
export declare function SliderThumb<ThumbElement extends keyof JSX.IntrinsicElements>({ label, tag, value, max, min, index, render, valueText, imperativeHandle, onValueChange, info, ...void1 }: SliderThumbProps<ThumbElement>): JSX.Element;
type TableProps<TableElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseTableReturnType<TableElement, RowElement, LabelElement>, Get12<UseTableParameters<TableElement, RowElement>, "labelParameters", "tableParameters", "singleSelectionParameters", "multiSelectionParameters", "gridNavigationParameters", "linearNavigationParameters", "typeaheadNavigationParameters", "rovingTabIndexParameters", "refElementParameters", "paginatedChildrenParameters", "linearNavigationParameters", "gridNavigationCompleteParameters">, "tagTable">;
type TableHeadProps<TableSectionElement extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseTableHeadReturnType<TableSectionElement>, Get$1<UseTableHeadParameters<TableSectionElement>, "tableHeadParameters">, "tagHead">;
type TableBodyProps<TableSectionElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, RsM extends TableSectionInfo<RowElement>> = GenericComponentProps<UseTableBodyReturnType<TableSectionElement, RowElement, RsM>, Get5<UseTableBodyParameters<TableSectionElement, RowElement, RM, RsM>, "tableSectionParameters", "staggeredChildrenParameters", "rearrangeableChildrenParameters", "paginatedChildrenParameters", "managedChildrenParameters">, "tagTableSection" | "children">;
type TableBodyRowOuterProps<RowElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>> = GenericComponentProps<UseTableRowOuterReturnType<RowElement, RsM>, Get3<UseTableRowOuterParameters<RowElement, RsM>, "refElementParameters", "info", "rearrangeableChildParameters">, "index">;
type TableBodyRowInnerProps<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<UseTableRowReturnType<RowElement, CellElement, RM, CM>, Get9<UseTableRowParameters<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters", "linearNavigationParameters", "multiSelectionChildParameters", "rovingTabIndexParameters", "singleSelectionChildParameters", "tableRowParameters", "textContentParameters", "info", "refElementParameters">, "index" | "tagTableRow">;
type TableHeadRowProps<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = GenericComponentProps<UseTableRowReturnType<RowElement, CellElement, RM, CM>, Get9<UseTableRowParameters<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters", "linearNavigationParameters", "multiSelectionChildParameters", "rovingTabIndexParameters", "singleSelectionChildParameters", "tableRowParameters", "textContentParameters", "info", "refElementParameters">, "index" | "tagTableRow">;
type TableCellProps<CellElement extends keyof JSX.IntrinsicElements, CM extends TableCellInfo<CellElement>> = GenericComponentProps<UseTableCellReturnType<CellElement, CM>, Get4<UseTableCellParameters<CellElement, CM>, "textContentParameters", "tableCellParameters", "gridNavigationCellParameters", "info">, "index" | "tagTableCell">;
export declare const Table: <TableElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, initiallySingleSelectedIndex, multiSelectionAriaPropName, onSelectionChange, onSingleSelectedIndexChange, singleSelectionAriaPropName, collator, disableHomeEndKeys, initiallyTabbableColumn, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onMount, onNavigateLinear, onNavigateTypeahead, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, typeaheadTimeout, untabbable, getSortValueAt, initiallySortedColumn, ...void1 }: TableProps<TableElement, RowElement, LabelElement>) => JSX.Element;
export declare const TableHead: <TableSectionElement extends keyof JSX.IntrinsicElements>({ render, tagHead, imperativeHandle }: TableHeadProps<TableSectionElement>) => JSX.Element;
export declare const TableBody: <TableSectionElement extends keyof JSX.IntrinsicElements, RowElement extends keyof JSX.IntrinsicElements>({ render, tagTableSection, children, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, animate, disableIntersectionObserver }: TableBodyProps<TableSectionElement, RowElement, TableRowInfo<RowElement>, TableSectionInfo<RowElement>>) => JSX.Element;
export declare const TableHeadRow: <RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements>({ render, index, tagTableRow, getText, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, onUnmount, selected, singleSelectionDisabled, untabbable, imperativeHandle }: TableHeadRowProps<RowElement, CellElement, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) => JSX.Element;
type TableBodyRowProps<RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements, RsM extends TableSectionInfo<RowElement>, RM extends TableRowInfo<RowElement>, CM extends TableCellInfo<CellElement>> = OmitStrong<TableBodyRowOuterProps<RowElement, RsM> & TableBodyRowInnerProps<RowElement, CellElement, RM, CM>, "render"> & {
  render(info: ({
    hide: true;
  } & UseTableRowOuterReturnType<RowElement, RsM>) | ({
    hide: false;
  } & UseTableRowReturnType<RowElement, CellElement, RM, CM>)): VNode;
};
export declare const TableBodyRow: <RowElement extends keyof JSX.IntrinsicElements, CellElement extends keyof JSX.IntrinsicElements>({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, tagTableRow, getText, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, selected, singleSelectionDisabled, untabbable }: TableBodyRowProps<RowElement, CellElement, TableSectionInfo<RowElement>, TableRowInfo<RowElement>, TableCellInfo<CellElement>>) => JSX.Element;
export declare const TableCell: <CellElement extends keyof JSX.IntrinsicElements>({ index, render, colSpan, focusSelf, getText, imperativeHandle, onTextContentChange, tagTableCell, untabbable, ...void1 }: TableCellProps<CellElement, TableCellInfo<CellElement>>) => JSX.Element;
type TabsProps<TabContainerElement extends keyof JSX.IntrinsicElements, TabElement extends keyof JSX.IntrinsicElements, TabLabelElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>, Get9<UseTabsParameters<TabContainerElement, TabElement, M>, "labelParameters", "linearNavigationParameters", "rovingTabIndexParameters", "singleSelectionParameters", "tabsParameters", "typeaheadNavigationParameters", "singleSelectionParameters", "refElementParameters", "processedIndexManglerParameters">, "orientation" | "ariaLabel">;
type TabProps<TabElement extends keyof JSX.IntrinsicElements, M extends TabInfo<TabElement> = TabInfo<TabElement>> = GenericComponentProps<UseTabReturnType<TabElement, M>, Get6<UseTabParameters<TabElement, TabInfo<TabElement>>, "pressParameters", "textContentParameters", "info", "hasCurrentFocusParameters", "refElementParameters", "singleSelectionChildParameters">, "index"> & {
  info?: OmitStrong<M, keyof TabInfo<TabElement>>;
};
type TabPanelProps<PanelElement extends keyof JSX.IntrinsicElements, M extends TabPanelInfo = TabPanelInfo> = GenericComponentProps<UseTabPanelReturnType<PanelElement>, Get$1<UseTabPanelParameters<M>, "info">, "index"> & {
  info?: OmitStrong<M, keyof TabPanelInfo>;
};
export declare const Tabs: <TabContainerElement extends keyof JSX.IntrinsicElements, TabElement extends keyof JSX.IntrinsicElements, TabLabelElement extends keyof JSX.IntrinsicElements>({ ariaLabel, collator, disableHomeEndKeys, initiallySingleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, orientation, pageNavigationSize, localStorageKey, singleSelectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, getSortValueAt, compare, getIndex, ...void1 }: TabsProps<TabContainerElement, TabElement, TabLabelElement>) => JSX.Element;
export declare const Tab: <E extends keyof JSX.IntrinsicElements>({ focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, onTextContentChange, info: uinfo, ...void1 }: TabProps<E, TabInfo<E>>) => JSX.Element;
export declare const TabPanel: <E extends keyof JSX.IntrinsicElements>({ index, render, info: uinfo }: TabPanelProps<E, TabPanelInfo>) => JSX.Element;
type ToastsProps<ContainerType extends keyof JSX.IntrinsicElements, M extends ToastInfo = ToastInfo> = GenericComponentProps<UseToastsReturnType<ContainerType, M>, Get2<UseToastsParameters, "managedChildrenParameters", "toastsParameters">, "visibleCount">;
type ToastProps<E extends keyof JSX.IntrinsicElements, M extends ToastInfo = ToastInfo> = GenericComponentProps<UseToastReturnType<E, M>, Get2<UseToastParameters<M>, "toastParameters", "info">, "index"> & {
  info?: OmitStrong<M, keyof ToastInfo>;
};
export declare function Toasts<ContainerType extends keyof JSX.IntrinsicElements>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount, imperativeHandle, onChildrenCountChange, ...void1 }: ToastsProps<ContainerType, ToastInfo>): JSX.Element;
export declare function Toast<E extends keyof JSX.IntrinsicElements>({ render, index, timeout, politeness, children, info, imperativeHandle }: ToastProps<E, ToastInfo>): JSX.Element;
type ToolbarProps<ToolbarContainerElement extends keyof JSX.IntrinsicElements, ToolbarChildElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>, Get11<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters", "refElementParameters", "singleSelectionParameters", "multiSelectionParameters", "singleSelectionDeclarativeParameters", "processedIndexManglerParameters">, "orientation" | "ariaLabel" | "singleSelectionMode" | "multiSelectionMode">;
type ToolbarChildProps<ToolbarChildElement extends keyof JSX.IntrinsicElements, M extends UseToolbarSubInfo<ToolbarChildElement>> = GenericComponentProps<UseToolbarChildReturnType<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, Get8<UseToolbarChildParameters<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>, "textContentParameters", "toolbarChildParameters", "info", "hasCurrentFocusParameters", "refElementParameters", "singleSelectionChildParameters", "multiSelectionChildDeclarativeParameters", "multiSelectionChildParameters">, "disabledProp" | "index"> & {
  info?: OmitStrong$1<M, keyof UseToolbarSubInfo<ToolbarChildElement>>;
};
export declare const Toolbar: <ContainerElement extends keyof JSX.IntrinsicElements, ChildElement extends keyof JSX.IntrinsicElements, LabelElement extends keyof JSX.IntrinsicElements>({ render, role, collator, disableHomeEndKeys, disabled, navigatePastEnd, navigatePastStart, pageNavigationSize, singleSelectedIndex, onSingleSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, ariaLabel, imperativeHandle, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, getSortValueAt, compare, getIndex }: ToolbarProps<ContainerElement, ChildElement, LabelElement, UseToolbarSubInfo<ChildElement>>) => JSX.Element;
export declare const ToolbarChild: <ToolbarChildElement extends keyof JSX.IntrinsicElements>({ index, render, focusSelf, getText, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info: uinfo, multiSelectionDisabled, singleSelectionDisabled, onTextContentChange, multiSelected, onMultiSelectedChange, ...void1 }: ToolbarChildProps<ToolbarChildElement, UseToolbarSubInfo<ToolbarChildElement>>) => JSX.Element;
type TooltipProps<TriggerType extends keyof JSX.IntrinsicElements, PopupType extends keyof JSX.IntrinsicElements> = GenericComponentProps<UseTooltipReturnType<TriggerType, PopupType>, Get4<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters", "tooltipParameters", "activeElementParameters", "pressReturn">, "tooltipSemanticType" | "onStatus">;
export declare const Tooltip: <TriggerType extends keyof JSX.IntrinsicElements, PopupType extends keyof JSX.IntrinsicElements>({ onStatus, getDocument, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType, usesLongPress, longPress, ...void1 }: TooltipProps<TriggerType, PopupType>) => JSX.Element;
declare module 'preact' {
  namespace h {
    namespace JSX {
      interface HTMLAttributes<RefType extends EventTarget = EventTarget> {
        inert?: boolean | SignalLike<boolean | undefined> | undefined;
      }
    }
  }
}
export { type AccordionProps, type AccordionSectionProps, type ButtonPressEventDetail, type ButtonPressEventHandler, type ButtonProps, type CheckboxChangeEventDetail, type CheckboxChangeEventHandler, type CheckboxCheckedType, type CheckboxGroupChangeEventDetail, type CheckboxGroupChangeEventHandler, type CheckboxGroupChildProps, type CheckboxGroupContext, type CheckboxGroupInfo, type CheckboxGroupParentProps, type CheckboxGroupProps, type CheckboxProps, type DialogProps, type DisabledType, type DrawerProps, type ElementFromTag, EventDetail, type FocusableLabelElement, type GridlistProps, type GridlistRowProps, type HeadingProps, type LabelPosition, type ListboxChildrenProps, type ListboxInfo, type ListboxItemProps, type ListboxMultiSelectEvent, type ListboxProps, type ListboxSingleSelectEvent, type MenuItemProps, type MenuItemReturnTypeSelf, type MenuProps, type MenubarItemProps, type MenubarProps, type NotificationProviderProps, type NotificationProviderReturnType, type PickByType, type ProgressProps, type ProgressWithHandlerProps, type RadioChangeEventDetail, type RadioChangeEventHandler, type RadioContext, type RadioContextSelf, type RadioGroupProps, type RadioProps, type RadioSubInfo, type RangeChangeEvent, type SliderContext, type SliderContextSelf, type SliderProps, type SliderThumbInfo, type SliderThumbProps, type SortDirection, type TabInfo, type TabPanelInfo, type TabPanelProps, type TabProps, type TableBodyProps, type TableBodyRowProps, type TableCellInfo, type TableCellProps, type TableHeadProps, type TableProps, type TableRowInfo, type TableSectionInfo, type TabsChangeEvent, type TabsProps, type TagSensitiveProps, type TargetedButtonPressEvent, type TargetedCheckboxChangeEvent, type TargetedCheckboxGroupChangeEvent, type TargetedRadioChangeEvent, type ToastInfo, type ToastProps, type ToastsContext, type ToastsContextSelf, type ToastsProps, type ToolbarChildProps, type ToolbarProps, type TooltipProps, type TooltipState, type TooltipStatus, type UseAccordionContext, type UseAccordionContextSelf, type UseAccordionParameters, type UseAccordionParametersSelf, type UseAccordionReturnType, type UseAccordionReturnTypeSelf, type UseAccordionSectionInfo, type UseAccordionSectionParameters, type UseAccordionSectionParametersSelf, type UseAccordionSectionReturnType, type UseAccordionSectionReturnTypeSelf, type UseButtonParameters, type UseButtonParametersSelf, type UseButtonReturnType, type UseCheckboxGroupChildParameters, type UseCheckboxGroupChildParametersSelf, type UseCheckboxGroupChildReturnType, type UseCheckboxGroupChildReturnTypeSelf, type UseCheckboxGroupParameters, type UseCheckboxGroupParametersSelf, type UseCheckboxGroupParentParameters, type UseCheckboxGroupParentReturnType, type UseCheckboxGroupParentReturnTypeSelf, type UseCheckboxGroupReturnType, type UseCheckboxLikeParameters, type UseCheckboxLikeParametersSelf, type UseCheckboxLikeReturnType, type UseCheckboxLikeReturnTypeSelf, type UseCheckboxParameters, type UseCheckboxParametersSelf, type UseCheckboxReturnType, type UseCheckboxReturnTypeSelf, type UseDialogParameters, type UseDialogReturnType, type UseDrawerParameters, type UseDrawerReturnType, type UseFocusSentinelParameters, type UseGridlistCellInfo, type UseGridlistCellParameters, type UseGridlistCellReturnType, type UseGridlistParameters, type UseGridlistReturnType, type UseGridlistRowContext, type UseGridlistRowInfo, type UseGridlistRowOuterParameters, type UseGridlistRowOuterReturnType, type UseGridlistRowParameters, type UseGridlistRowReturnType, type UseGridlistRowsInfo, type UseLabelParameters, type UseLabelParametersSelf, type UseLabelReturnType, type UseLabelSyntheticParameters, type UseListboxContext, type UseListboxItemParameters, type UseListboxItemParametersSelf, type UseListboxItemReturnType, type UseListboxParameters, type UseListboxParametersSelf, type UseListboxReturnType, type UseMenuContext, type UseMenuItemParameters, type UseMenuItemReturnType, type UseMenuParameters, type UseMenuParametersSelf, type UseMenuReturnType, type UseMenuSurfaceParameters, type UseMenuSurfaceParametersSelf, type UseMenuSurfaceReturnType, type UseMenubarContext, type UseMenubarItemParameters, type UseMenubarItemParametersSelf, type UseMenubarItemReturnType, type UseMenubarParameters, type UseMenubarReturnType, type UseMenubarSubInfo, type UseProgressParameters, type UseProgressParametersSelf, type UseProgressReturnType, type UseProgressWithHandlerParameters, type UseProgressWithHandlerParametersSelf, type UseProgressWithHandlerReturnType, type UseRadioGroupParameters, type UseRadioGroupParametersSelf, type UseRadioGroupReturnType, type UseRadioGroupReturnTypeSelf, type UseRadioParameters, type UseRadioParametersSelf, type UseRadioReturnType, type UseSliderParameters, type UseSliderParametersSelf, type UseSliderReturnType, type UseSliderThumbParameters, type UseSliderThumbParametersSelf, type UseSliderThumbReturnType, type UseSliderThumbReturnTypeSelf, type UseTab, type UseTabLabelParameters, type UseTabLabelReturnTypeWithHooks, type UseTabList, type UseTabListLabel, type UseTabListLabelReturnTypeInfo, type UseTabListParameters, type UseTabListReturnType, type UseTabPanel, type UseTabPanelParameters, type UseTabPanelReturnType, type UseTabPanelReturnTypeSelf, type UseTabPanelsContext, type UseTabParameters, type UseTabReturnType, type UseTableBodyParameters, type UseTableBodyReturnType, type UseTableCellContext, type UseTableCellParameters, type UseTableCellParametersSelf, type UseTableCellReturnType, type UseTableCellReturnTypeSelf, type UseTableContextSelf, type UseTableHeadParameters, type UseTableHeadParametersSelf, type UseTableHeadReturnType, type UseTableHeadReturnTypeSelf, type UseTableParameters, type UseTableParametersSelf, type UseTableProcessedChildrenContext, type UseTableProcessedChildrenContextSelf, type UseTableReturnType, type UseTableReturnTypeSelf, type UseTableRowContext, type UseTableRowOuterParameters, type UseTableRowOuterReturnType, type UseTableRowParameters, type UseTableRowParametersSelf, type UseTableRowReturnType, type UseTableSectionParametersSelf, type UseTabsContext, type UseTabsParameters, type UseTabsParametersSelf, type UseTabsReturnType, type UseToastParameters, type UseToastParametersSelf, type UseToastReturnType, type UseToastReturnTypeSelf, type UseToastsParameters, type UseToastsParametersSelf, type UseToastsReturnType, type UseToolbarChildParameters, type UseToolbarChildParametersSelf, type UseToolbarChildReturnType, type UseToolbarContext, type UseToolbarContextSelf, type UseToolbarParameters, type UseToolbarParametersSelf, type UseToolbarReturnType, type UseToolbarSubInfo, type UseTooltipParameters, type UseTooltipParametersSelf, type UseTooltipReturnType, type UseTooltipReturnTypeSelf };
//# sourceMappingURL=index.d.mts.map