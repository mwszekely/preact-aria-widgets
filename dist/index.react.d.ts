import { ElementProps, JSX, ManagedChildInfo, PassiveStateUpdater, PersistentStates, TargetedOmit, UseHasCurrentFocusReturnType, UseLinearNavigationParameters, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, UsePressReturnType, UseRefElementParameters, UseRefElementReturnType, UseTextContentReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, PressEventReason, UsePressParameters, EnhancedEventHandler, TargetedEnhancedEvent, CompleteListNavigationContext, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, TargetedPick, UseRandomDualIdsParameters, UseRandomDualIdsReturnType, Nullable, UseModalParameters, UseModalReturnType, CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, ExtendMerge, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, EventType, UseSingleSelectionDeclarativeParameters, EventDetail, MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, UseRandomIdReturnType, VNode, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, UseManagedChildReturnType, UseGridNavigationRowParameters, UseEscapeDismissParameters, GetIndex } from "preact-prop-helpers";
import { Ref as Ref$0 } from "preact-prop-helpers";
import { h, Ref, ComponentChildren, Context, RenderableProps, createElement } from "preact";
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
    pressed: boolean | null;
}
type TargetedButtonPressEvent<E extends EventTarget> = TargetedEnhancedEvent<PressEventReason<E>, ButtonPressEventDetail>;
type ButtonPressEventHandler<E extends EventTarget> = EnhancedEventHandler<PressEventReason<E>, ButtonPressEventDetail>;
interface UseButtonParametersSelf<E extends Node> {
    tagButton: ElementToTag<E>;
    disabled: DisabledType;
    /**
     * Important: A button can also be marked as pressed by changing its label -- e.g. `muted` to `unmuted`.
     * If this is the case, `pressed` **must** be null!
     */
    pressed: boolean | null | undefined;
    onPress: undefined | null | ButtonPressEventHandler<E>;
    role: JSX.AriaRole;
}
interface UseButtonParameters<E extends Node> extends UseRefElementParameters<E>, TargetedOmit<UsePressParameters<E>, "pressParameters", "onPressSync" | "focusSelf"> {
    buttonParameters: UseButtonParametersSelf<E>;
}
interface UseButtonReturnType<E extends Element> extends UsePressReturnType<E>, OmitStrong<UseRefElementReturnType<E>, "propsStable"> {
    props: ElementProps<E>;
}
/**
 * Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
 *
 * @compositeParams
 */
declare function useButton<E extends Element>({ buttonParameters: { tagButton, disabled, onPress, pressed, role }, pressParameters, refElementParameters }: UseButtonParameters<E>): UseButtonReturnType<E>;
interface UseAccordionParametersSelf {
    orientation?: "vertical" | "horizontal";
    initialIndex?: number | null;
    localStorageKey: keyof PersistentStates | null;
}
interface UseAccordionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends TargetedOmit<UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>, "linearNavigationParameters", "getLowestIndex" | "arrowKeyDirection" | "getHighestIndex" | "isValid" | "indexDemangler" | "indexMangler">, UseManagedChildrenParameters<M>, Pick<UseTypeaheadNavigationParameters<HeaderButtonElement, M>, "typeaheadNavigationParameters"> {
    accordionParameters: UseAccordionParametersSelf;
}
interface UseAccordionReturnTypeSelf {
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
}
interface UseAccordionReturnType<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenReturnType<M> {
    /** **STABLE** */
    accordionReturn: UseAccordionReturnTypeSelf;
    context: UseAccordionContext<HeaderButtonElement, M>;
    props: ElementProps<any>;
}
interface UseAccordionSectionInfo extends ManagedChildInfo<number> {
    setOpenFromParent(open: boolean): void;
    getOpenFromParent(): boolean | null;
    setMostRecentlyTabbed(tabbed: boolean): void;
    getMostRecentlyTabbed(): boolean | null;
    focusSelf(): void;
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
interface UseAccordionSectionParameters<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends OmitStrong<UseTypeaheadNavigationChildParameters<HeaderButtonElement, M>, "info" | "refElementReturn" | "context">, UseRefElementParameters<HeaderButtonElement>, UseManagedChildParameters<M, "index" | "untabbable">, TargetedOmit<UseButtonParameters<HeaderButtonElement>, "buttonParameters", "pressed" | "role"> {
    context: UseAccordionContext<HeaderButtonElement, M>;
    accordionSectionParameters: UseAccordionSectionParametersSelf;
}
interface UseAccordionSectionReturnTypeSelf {
    expanded: boolean;
    focused: boolean;
    mostRecentlyTabbed: boolean;
}
interface UseAccordionSectionReturnType<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends OmitStrong<UsePressReturnType<HeaderButtonElement>, "props">, OmitStrong<UseRefElementReturnType<HeaderButtonElement>, "propsStable">, UseTextContentReturnType, UseHasCurrentFocusReturnType<HeaderButtonElement> {
    accordionSectionReturn: UseAccordionSectionReturnTypeSelf;
    propsHeaderButton: ElementProps<HeaderButtonElement>;
    propsHeader: ElementProps<HeaderElement>;
    propsBody: ElementProps<BodyElement>;
}
interface UseAccordionContextSelf<HeaderButtonElement extends Element> {
    changeTabbedIndex: PassiveStateUpdater<number | null, Event>;
    changeExpandedIndex: PassiveStateUpdater<number | null, Event>;
    getExpandedIndex: () => (number | null);
    getTabbedIndex: () => (number | null);
    stableTypeaheadProps: ElementProps<HeaderButtonElement>;
}
interface UseAccordionContext<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext {
    accordionSectionParameters: UseAccordionContextSelf<HeaderButtonElement>;
    linearNavigationParameters: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>["linearNavigationParameters"];
    rovingTabIndexReturn: UseLinearNavigationParameters<HeaderButtonElement, HeaderButtonElement, M>["rovingTabIndexReturn"];
}
/**
 * Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.
 *
 * @compositeParams
 *
 * @hasChild {@link useAccordionSection}
 */
declare function useAccordion<HeaderButtonElement extends Element, M extends UseAccordionSectionInfo>({ accordionParameters: { initialIndex, localStorageKey, orientation, ...void2 }, typeaheadNavigationParameters, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...void1 }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange, ...void3 }, ...void4 }: UseAccordionParameters<HeaderButtonElement, M>): UseAccordionReturnType<HeaderButtonElement, M>;
/**
 * @compositeParams
 */
declare function useAccordionSection<_HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element, M extends UseAccordionSectionInfo = UseAccordionSectionInfo>({ buttonParameters, accordionSectionParameters: { open: openFromUser, bodyRole }, info: { index, untabbable, ...info }, textContentParameters, context: { accordionSectionParameters: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn, managedChildContext, typeaheadNavigationContext }, refElementParameters }: UseAccordionSectionParameters<HeaderButtonElement, M>): UseAccordionSectionReturnType<_HeaderContainerElement, HeaderButtonElement, BodyElement>;
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
    ariaLabel: LP extends "none" ? string : null;
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
interface UseCheckboxLikeParametersSelf {
    /** The role attribute to use, when applicable */
    role: JSX.AriaRole;
    disabled: DisabledType;
    checked: CheckboxCheckedType;
    onInput(event: Event): void;
}
interface UseCheckboxLikeParameters<LP extends LabelPosition, InputType extends Element, LabelType extends Element> extends OmitStrong<UseLabelParameters<LP, InputType, LabelType>, "labelParameters">, TargetedOmit<UseLabelParameters<LP, InputType, LabelType>, "labelParameters", "onLabelClick">, TargetedPick<UsePressParameters<any>, "pressParameters", "longPressThreshold" | "excludeSpace"> {
    checkboxLikeParameters: UseCheckboxLikeParametersSelf;
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
declare function useCheckboxLike<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, onInput: onInputSync, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, ...void2 }, ...void3 }: UseCheckboxLikeParameters<LP, InputType, LabelType>): UseCheckboxLikeReturnType<InputType, LabelType>;
interface CheckboxGroupChangeEventDetail {
    childrenChecked: boolean | Map<number, boolean | "mixed">;
}
type TargetedCheckboxGroupChangeEvent = TargetedEnhancedEvent<Event, CheckboxGroupChangeEventDetail>;
type CheckboxGroupChangeEventHandler = EnhancedEventHandler<Event, CheckboxGroupChangeEventDetail>;
interface UseCheckboxGroupParametersSelf {
    orientation: "vertical" | "horizontal";
}
interface UseCheckboxGroupParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends OmitStrong<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "rovingTabIndexParameters">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters", "arrowKeyDirection">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "rovingTabIndexParameters", "focusSelfParent"> {
    checkboxGroupParameters: UseCheckboxGroupParametersSelf;
}
interface CheckboxGroupInfoBaseBase<TCE extends Element> {
    _e?: TCE;
}
interface CheckboxGroupInfoBase1<TCE extends Element> extends CheckboxGroupInfoBaseBase<TCE> {
    checkboxChildType: "parent";
}
interface CheckboxGroupInfoBase2<TCE extends Element> extends CheckboxGroupInfoBaseBase<TCE> {
    checkboxChildType: "child";
    getChecked(): boolean | "mixed";
    getLastUserChecked(): boolean | "mixed";
    setCheckedFromParentInput(newChecked: CheckboxCheckedType, e: Event): void | Promise<void>;
}
interface CheckboxGroupInfo<TCE extends Element> extends UseCompleteListNavigationChildInfo<TCE> {
    checkboxInfo: (CheckboxGroupInfoBase1<TCE> | CheckboxGroupInfoBase2<TCE>);
}
interface UseCheckboxGroupChildParametersSelf {
    checked: CheckboxCheckedType;
    onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
}
interface UseCheckboxGroupChildParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M>, "info"> {
    context: CheckboxGroupContext<any, TCE, M>;
    info: Omit<UseCompleteListNavigationChildParameters<TCE, M>["info"], "checkboxInfo">;
    checkboxGroupChildParameters: UseCheckboxGroupChildParametersSelf;
}
interface UseCheckboxGroupChildReturnTypeSelf {
    onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
    onChildCheckedChange: (checked: CheckboxCheckedType) => void;
}
interface UseCheckboxGroupChildReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, "singleSelectionChildReturn"> {
    checkboxGroupChildReturn: UseCheckboxGroupChildReturnTypeSelf;
}
//export type UseCheckboxGroupChild<InputElement extends Element, LabelElement extends Element, TCE extends InputElement | LabelElement, M extends CheckboxGroupInfo<TCE>> = (args: UseCheckboxGroupChildParameters<TCE, M>) => UseCheckboxGroupChildReturnType<TCE, M>
interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends UseCompleteListNavigationReturnType<GroupElement, TCE, M> {
    context: CheckboxGroupContext<GroupElement, TCE, M>;
}
interface UseCheckboxGroupParentParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M>, "info"> {
    context: CheckboxGroupContext<any, TCE, M>;
    info: OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>["info"], never>;
}
interface UseCheckboxGroupParentReturnTypeSelf {
    checked: CheckboxCheckedType;
    getPercent(): number;
    onParentCheckedChange: (e: Event) => Promise<void>;
}
interface UseCheckboxGroupParentReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, never> {
    checkboxGroupParentReturn: UseCheckboxGroupParentReturnTypeSelf;
}
interface CheckboxGroupContext<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends CompleteListNavigationContext<GroupElement, TCE, M> {
    // parent
    checkboxGroupParentContext: {
        // What a horrifying type.  Name this better please.
        setSetter: PassiveStateUpdater<StateUpdater<string> | null, Event>;
        // whyyyyy
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
declare function useCheckboxGroup<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE> = CheckboxGroupInfo<TCE>>({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation }, ...listNavParameters }: UseCheckboxGroupParameters<GroupElement, TCE, M>): UseCheckboxGroupReturnType<GroupElement, TCE, M>;
/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 *
 * @compositeParams
 */
declare function useCheckboxGroupParent<TCE extends Element, M extends CheckboxGroupInfo<TCE> = CheckboxGroupInfo<TCE>>({ context, info, textContentParameters }: UseCheckboxGroupParentParameters<TCE, M>): UseCheckboxGroupParentReturnType<TCE, M>;
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
declare function useCheckboxGroupChild<TCE extends Element, M extends CheckboxGroupInfo<TCE> = CheckboxGroupInfo<TCE>>({ checkboxGroupChildParameters, context, info, textContentParameters }: UseCheckboxGroupChildParameters<TCE, M>): UseCheckboxGroupChildReturnType<TCE, M>;
interface CheckboxChangeEventDetail {
    checked: boolean;
}
// These are not typed because they could come from the input OR the label.
type TargetedCheckboxChangeEvent = TargetedEnhancedEvent<Event, CheckboxChangeEventDetail>;
type CheckboxChangeEventHandler = EnhancedEventHandler<Event, CheckboxChangeEventDetail>;
interface UseCheckboxParametersSelf {
    onCheckedChange: Nullable<CheckboxChangeEventHandler>;
}
interface UseCheckboxParameters<LP extends LabelPosition, I extends Element, L extends Element> extends OmitStrong<UseCheckboxLikeParameters<LP, I, L>, "refElementLabelReturn" | "refElementInputReturn" | "checkboxLikeParameters" | "randomIdInputParameters" | "randomIdLabelParameters">, TargetedOmit<UseCheckboxLikeParameters<LP, I, L>, "checkboxLikeParameters", "onInput" | "role"> {
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
declare function useCheckbox<LP extends LabelPosition, InputType extends Element, LabelType extends Element>({ checkboxParameters: { onCheckedChange }, checkboxLikeParameters, labelParameters, pressParameters }: UseCheckboxParameters<LP, InputType, LabelType>): UseCheckboxReturnType<InputType, LabelType>;
interface UseDialogParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters" | "dismissParameters">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "focusTrapParameters", "trapActive" | "onlyMoveFocus">, TargetedOmit<UseModalParameters<"escape" | "backdrop">, "dismissParameters", "closeOnLostFocus">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
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
declare function useDialog<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }: UseDialogParameters<DialogElement, TitleElement>): UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>;
interface UseDrawerParameters<_DialogElement extends Element, _TitleElement extends Element> extends OmitStrong<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, TargetedOmit<UseModalParameters<"escape" | "backdrop" | "lost-focus">, "focusTrapParameters", "onlyMoveFocus"> {
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
declare function useDrawer<FocusContainerElement extends Element, SourceElement extends Element, PopupElement extends Element, TitleElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, labelParameters }: UseDrawerParameters<PopupElement, TitleElement>): UseDrawerReturnType<FocusContainerElement, SourceElement, PopupElement, TitleElement>;
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
interface UseListboxContext<ListElement extends Element, ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends CompleteListNavigationContext<ListElement, ListItemElement, M> {
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
    selected: boolean | null;
    onMultiSelect: null | ((e: ListboxMultiSelectEvent<ListItemElement>) => void);
}
interface UseListboxItemParameters<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends UseCompleteListNavigationChildParameters<ListItemElement, M>, TargetedOmit<UsePressParameters<ListItemElement>, "pressParameters", "excludeSpace" | "onPressSync"> {
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
declare function useListbox<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange, orientation }, linearNavigationParameters, singleSelectionParameters: { ariaPropName, selectionMode }, rovingTabIndexParameters, ...restParams }: UseListboxParameters<ListElement, ListItemElement, LabelElement, M>): UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>;
/**
 * @compositeParams
 */
declare function useListboxItem<ListItemElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({ context: { listboxContext: { selectionLimit }, ...context }, listboxParameters: { selected, onMultiSelect }, pressParameters: { focusSelf, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, ...restParams }: UseListboxItemParameters<ListItemElement, M>): UseListboxItemReturnType<ListItemElement, M>;
interface UseGridlistContext<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends CompleteGridNavigationRowContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM> {
    gridlistRowContext: {
        selectionLimit: "single" | "multi" | "none";
    };
}
interface UseGridlistRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridlistCellInfo<ChildElement>> extends CompleteGridNavigationCellContext<ParentElement, ChildElement, M> {
}
interface UseGridlistParametersSelf<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends UseListboxParametersSelf<GridlistElement, GridlistRowElement, LabelElement, RM> {
}
interface UseGridlistParameters<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationDeclarativeParameters<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "singleSelectionDeclarativeParameters" | "rovingTabIndexParameters">, TargetedOmit<UseCompleteGridNavigationParameters<GridlistElement, GridlistRowElement, GridlistCellElement, RM>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick">, Pick<UseListboxParameters<GridlistElement, GridlistRowElement, LabelElement, RM>, "listboxParameters"> {
}
interface UseGridlistReturnType<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>, "singleSelectionReturn" | "props"> {
    propsGridlist: ElementProps<GridlistElement>;
    propsGridlistLabel: ElementProps<LabelElement>;
    context: UseGridlistContext<GridlistElement, GridlistRowElement, GridlistCellElement, RM, CM>;
}
interface UseGridlistRowReturnType<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>, never> {
}
interface UseGridlistRowParametersSelf {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: boolean | null;
}
interface UseGridlistRowParameters<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, never> {
    context: UseGridlistContext<any, GridlistRowElement, GridlistCellElement, RM, CM>;
    gridlistRowParameters: UseGridlistRowParametersSelf;
}
interface UseGridlistCellReturnType<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends OmitStrong<ExtendMerge<UseCompleteGridNavigationCellReturnType<GridlistCellElement, CM>, Pick<UsePressReturnType<GridlistCellElement>, "pressReturn">>, "props"> {
    propsCell: ElementProps<GridlistCellElement>;
    propsTabbable: ElementProps<any>;
    propsPress: ElementProps<any>;
}
interface UseGridlistCellParameters<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement>> extends UseCompleteGridNavigationCellParameters<GridlistCellElement, CM>, TargetedPick<UsePressParameters<GridlistCellElement>, "pressParameters", "longPressThreshold" | "onPressingChange" | "onPressSync"> {
}
interface GridlistRowInfo<GridlistRowElement extends Element, GridlistCellElement extends Element> extends UseCompleteGridNavigationRowInfo<GridlistRowElement, GridlistCellElement> {
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
declare function useGridlist<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement> = GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>>({ labelParameters, listboxParameters: { selectionLimit, groupingType, selectedIndex, onSelectedIndexChange }, rovingTabIndexParameters, ...restParams }: UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>): UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>;
/**
 * @compositeParams
 *
 */
declare function useGridlistRow<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement> = GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>>({ gridlistRowParameters: { selected }, linearNavigationParameters, context: cx1, info, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, ...void1 }: UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>): UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>;
/**
 * @compositeParams
 *
 */
declare function useGridlistCell<GridlistCellElement extends Element, CM extends GridlistCellInfo<GridlistCellElement> = GridlistCellInfo<GridlistCellElement>>({ pressParameters: { onPressSync, longPressThreshold, onPressingChange, ...void1 }, ...p }: UseGridlistCellParameters<GridlistCellElement, CM>): UseGridlistCellReturnType<GridlistCellElement, CM>;
interface UseMenuSurfaceParametersSelf {
    /**
     * What role the surface fulfills.
     *
     * General menus should use "menu". "dialog" can be used for generic pop-up things.
     */
    role: "dialog" | "menu" | "tree" | "grid" | "listbox";
    surfaceId: string;
}
interface UseMenuSurfaceParameters<_S extends Element, _B extends Element> extends OmitStrong<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters", "trapActive" | "focusOpener" | "onlyMoveFocus"> {
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
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).
 *
 * @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 *
 * Related to menus, which are a menu contained within a menu surface. Not related to menubars -- menus contain menubars, but not all menubars are contained within a menu or its surface.
 *
 * @compositeParams
 */
declare function useMenuSurface<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, ...void2 }: UseMenuSurfaceParameters<MenuSurfaceElement, MenuTriggerElement>): UseMenuSurfaceReturnType<MenuSurfaceElement, MenuTargetElement, MenuTriggerElement>;
interface UseFocusSentinelParameters {
    focusSentinel: {
        sendFocusToMenu: () => void;
        open: boolean;
        onClose(): void;
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
    orientation: "horizontal" | "vertical";
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
    context: UseToolbarContext<ContainerElement, ChildElement, M>;
}
interface UseToolbarSubInfo<ChildElement extends Element> extends UseCompleteListNavigationChildInfo<ChildElement> {
}
interface UseToolbarContextSelf {
}
interface UseToolbarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends CompleteListNavigationContext<ContainerElement, ChildElement, M> {
    toolbarContext: UseToolbarContextSelf;
}
interface UseToolbarChildParametersSelf {
    disabledProp: "disabled" | "aria-disabled";
}
interface UseToolbarChildParameters<E extends Element, M extends UseToolbarSubInfo<E>> extends OmitStrong<UseCompleteListNavigationChildParameters<E, M>, never> {
    toolbarChildParameters: UseToolbarChildParametersSelf;
}
interface UseToolbarChildReturnType<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>> extends UseCompleteListNavigationChildReturnType<ChildElement, M> {
}
/**
 * Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern.
 *
 * @remarks A toolbar is just a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.
 *
 * The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems,
 * but a toolbar is the more general case, being able to contain anything at all.
 * A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.
 *
 * Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).
 *
 * @compositeParams
 */
declare function useToolbar<ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement>>({ linearNavigationParameters, toolbarParameters: { orientation, role, selectedIndex, onSelectedIndexChange, disabled }, labelParameters, rovingTabIndexParameters, ...listNavParameters }: UseToolbarParameters<ContainerElement, ChildElement, M>): UseToolbarReturnType<ContainerElement, ChildElement, LabelElement, M>;
/**
 * @compositeParams
 */
declare function useToolbarChild<ChildElement extends Element, M extends UseToolbarSubInfo<ChildElement>>({ info, toolbarChildParameters: { disabledProp }, ...args }: UseToolbarChildParameters<ChildElement, M>): UseToolbarChildReturnType<ChildElement, M>;
interface UseMenubarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ContainerElement, ChildElement, M> {
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
    onPress: null | ((e: PressEventReason<MenuItemElement>) => void);
}
interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildParameters<MenuItemElement, M>, "toolbarChildParameters">, TargetedPick<UsePressParameters<MenuItemElement>, "pressParameters", "onPressingChange"> {
    menuItemParameters: UseMenubarItemParametersSelf<MenuItemElement>;
}
interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
    propsMenubar: ElementProps<MenuParentElement>;
    context: UseMenubarContext<MenuParentElement, MenuItemElement, M>;
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
declare function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>(args: UseMenubarParameters<MenuParentElement, MenuItemElement, M>): UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>;
/**
 * @compositeParams
 */
declare function useMenubarChild<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }: UseMenubarItemParameters<MenuItemElement, M>): UseMenubarItemReturnType<MenuItemElement, M>;
interface UseMenuContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseMenubarContext<ContainerElement, ChildElement, M> {
    menu: {
        closeFromMenuItemClicked(): void;
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
interface UseMenuParameters<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuButtonElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters" | "labelParameters">, TargetedOmit<UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>, "menuSurfaceParameters", "role" | "surfaceId">, TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role">, TargetedOmit<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "toolbarParameters", "role"> {
    dismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["dismissParameters"] & {
        onClose(reason: "escape" | "backdrop" | "lost-focus" | "item-clicked"): void;
    };
    escapeDismissParameters: UseMenuSurfaceParameters<MenuSurfaceElement, MenuButtonElement>["escapeDismissParameters"];
    menuParameters: UseMenuParametersSelf;
}
interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
}
interface UseMenuReturnType<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenuSurfaceReturnType<MenuSurfaceElement, MenuParentElement, MenuButtonElement>, OmitStrong<UseMenubarReturnType<MenuParentElement, MenuItemElement, MenuButtonElement, M>, "propsMenubar" | "propsLabel"> {
    context: UseMenuContext<MenuParentElement, MenuItemElement, M>;
}
interface MenuItemReturnTypeSelf {
    /**
     * When a menu item is clicked, it's often expected that the menu closes itself immediately after.
     *
     * Use this function to do so.
     */
    closeMenu(): void;
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
declare function useMenu<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, toolbarParameters, ...restParams }: UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>): UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>;
interface UseMenuItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseMenubarItemParameters<MenuItemElement, M> {
    context: UseMenuContext<any, MenuItemElement, M>;
}
/**
 * @compositeParams
 */
declare function useMenuItem<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>(p: UseMenuItemParameters<MenuItemElement, M>): UseMenuItemReturnType<MenuItemElement, M>;
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
    valueText: string | null;
    tagIndicator: ElementToTag<IndicatorElement>;
}
interface UseProgressParameters<IndicatorElement extends Element, _LabelElement extends Element> extends TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    progressIndicatorParameters: UseProgressParametersSelf<IndicatorElement>;
}
interface UseProgressReturnType<ProgressElement extends Element, ProgressLabelElement extends Element> extends OmitStrong<UseLabelReturnType<ProgressElement, ProgressLabelElement>, "propsInput" | "propsLabel"> {
    propsIndicator: ElementProps<ProgressElement>;
    propsLabel: ElementProps<ProgressLabelElement>;
    propsRegion: ElementProps<any>;
}
/**
 * Provides the attributes and roles for a progress bar.
 *
 * @compositeParams
 */
declare function useProgress<ProgressElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagIndicator, ...void1 }, ...void2 }: UseProgressParameters<ProgressElement, LabelElement>): UseProgressReturnType<ProgressElement, LabelElement>;
interface UseProgressWithHandlerParametersSelf {
    forciblyPending: boolean | null;
}
interface UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends TargetedPick<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters", "tagIndicator">, Pick<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters"> {
    progressWithHandlerParameters: UseProgressWithHandlerParametersSelf;
    asyncHandlerParameters: UseAsyncHandlerParameters<EventType, CaptureType>;
}
interface UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> {
    propsIndicator: UseProgressReturnType<IndicatorElement, LabelElement>["propsIndicator"];
    propsLabel: UseProgressReturnType<IndicatorElement, LabelElement>["propsLabel"];
    propsRegion: UseProgressReturnType<IndicatorElement, LabelElement>["propsRegion"];
    asyncHandlerReturn: UseAsyncHandlerReturnType<EventType, CaptureType>;
}
/**
 * Provides props for a progress bar based on the progress of an async event handler.
 *
 * @compositeParams
 */
declare function useProgressWithHandler<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ labelParameters, progressIndicatorParameters, asyncHandlerParameters, progressWithHandlerParameters: { forciblyPending } }: UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>): UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>;
interface RadioChangeEventDetail<V extends number | string> {
    selectedValue: V | undefined;
}
type TargetedRadioChangeEvent<V extends number | string> = TargetedEnhancedEvent<Event, RadioChangeEventDetail<V>>;
type RadioChangeEventHandler<V extends number | string> = EnhancedEventHandler<Event, RadioChangeEventDetail<V>>;
interface UseRadioGroupParametersSelf<V extends string | number> {
    name: string;
    selectedValue: V | null;
    onSelectedValueChange: undefined | null | RadioChangeEventHandler<V>;
}
interface UseRadioGroupParameters<V extends string | number, GroupElement extends Element, _GroupLabelElement extends Element, TabbableChildElement extends Element, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends OmitStrong<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, M>, "rovingTabIndexParameters" | "paginatedChildrenParameters" | "singleSelectionParameters">, TargetedOmit<UseCompleteListNavigationParameters<GroupElement, TabbableChildElement, any>, "rovingTabIndexParameters", "focusSelfParent">, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    radioGroupParameters: UseRadioGroupParametersSelf<V>;
}
interface UseRadioParametersSelf<V extends string | number> {
    value: V;
}
interface UseRadioParameters<LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>> extends OmitStrong<UseCompleteListNavigationChildParameters<FocusableLabelElement<LP, InputElement, LabelElement>, M>, never>, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement>, "labelParameters", never>, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement>, "pressParameters", "excludeSpace">, TargetedOmit<UseCheckboxLikeParameters<LP, InputElement, LabelElement>, "checkboxLikeParameters", "checked" | "onInput" | "role"> {
    radioParameters: UseRadioParametersSelf<V>;
    context: RadioContext<V, any, FocusableLabelElement<LP, InputElement, LabelElement>, M>;
}
interface RadioContextSelf<V extends number | string> {
    name: string;
    nameToIndex: Map<V, number>;
    indexToName: Map<number, V>;
}
interface RadioContext<V extends number | string, ParentElement extends Element, ChildElement extends Element, M extends RadioSubInfo<ChildElement, V>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
    radioContext: RadioContextSelf<V>;
}
interface UseRadioGroupReturnTypeSelf {
    selectedIndex: number | null;
}
interface UseRadioGroupReturnType<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element, M extends RadioSubInfo<TabbableChildElement, V> = RadioSubInfo<TabbableChildElement, V>> extends OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TabbableChildElement, M>, "props"> {
    radioGroupReturn: UseRadioGroupReturnTypeSelf;
    propsRadioGroup: ElementProps<GroupElement>;
    propsRadioGroupLabel: ElementProps<GroupLabelElement>;
    // override
    context: RadioContext<V, GroupElement, TabbableChildElement, M>;
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
declare function useRadioGroup<V extends string | number, G extends Element, GL extends Element, TCE extends Element, M extends RadioSubInfo<TCE, V> = RadioSubInfo<TCE, V>>({ labelParameters, radioGroupParameters: { name, onSelectedValueChange, selectedValue }, rovingTabIndexParameters, ...restParams }: UseRadioGroupParameters<V, G, GL, TCE, M>): UseRadioGroupReturnType<V, G, GL, TCE, M>;
interface UseRadioReturnType<LP extends LabelPosition, V extends string | number, I extends Element, IL extends Element, M extends RadioSubInfo<FocusableLabelElement<LP, I, IL>, V>> extends OmitStrong<UseCompleteListNavigationChildReturnType<FocusableLabelElement<LP, I, IL>, M>, "propsChild" | "propsTabbable" | "pressParameters">, UseCheckboxLikeReturnType<I, IL> {
    propsInput: ElementProps<I>;
    propsLabel: ElementProps<IL>;
}
/**
 * @compositeParams
 */
declare function useRadio<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number, M extends RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V> = RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>({ radioParameters: { value }, checkboxLikeParameters: { disabled }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, ...void1 }: UseRadioParameters<LP, V, InputElement, LabelElement, M>): UseRadioReturnType<LP, V, InputElement, LabelElement, M>;
type RangeChangeEvent<E extends EventTarget> = {
    [EventDetail]: {
        value: number;
    };
} & Pick<h.JSX.TargetedEvent<E>, "target" | "currentTarget">;
interface SliderThumbInfo extends ManagedChildInfo<number> {
}
interface UseSliderThumbParametersSelf<E extends Element> extends TagSensitiveProps<E> {
    value: number;
    valueText?: string;
    onValueChange?: (e: RangeChangeEvent<E>) => void;
    min?: number;
    max?: number;
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
interface UseSliderThumbParameters<E extends Element, M extends SliderThumbInfo> extends UseManagedChildParameters<M, "index"> {
    sliderThumbParameters: UseSliderThumbParametersSelf<E>;
    context: SliderContext<M>;
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
interface UseSliderThumbReturnType<E extends Element, M extends SliderThumbInfo> extends UseManagedChildReturnType<M> {
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
declare function useSliderThumb<ThumbElement extends Element, M extends SliderThumbInfo>({ info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, sliderThumbParameters }: UseSliderThumbParameters<ThumbElement, M>): UseSliderThumbReturnType<ThumbElement, M>;
interface UseTableContextSelf {
    setSortBodyFunction: PassiveStateUpdater<() => void, never>;
    sortByColumn(column: number): SortInfo;
    getCurrentSortColumn(): SortInfo;
}
interface UseTableContext {
    tableContext: UseTableContextSelf;
}
interface UseTableSectionContext<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationRowContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, UseTableContext {
}
interface UseTableSectionParametersSelf<TableSectionElement extends Element> {
    location: "head" | "body" | "foot";
    tagTableSection: ElementToTag<TableSectionElement>;
}
interface UseTableSectionParameters<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>> extends OmitStrong<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>, "rovingTabIndexParameters" | "sortableChildrenParameters">, TargetedOmit<UseCompleteGridNavigationParameters<TableSectionElement, TableRowElement, TableCellElement, RM>, "rovingTabIndexParameters", "focusSelfParent"> {
    tableSectionParameters: UseTableSectionParametersSelf<TableSectionElement>;
    context: UseTableContext;
}
interface UseTableSectionReturnType<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>, "props"> {
    propsTableSection: ElementProps<TableSectionElement>;
    context: UseTableSectionContext<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
}
interface UseTableRowReturnType<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowReturnType<TableRowElement, TableCellElement, RM, CM>, "context"> {
    context: UseTableRowContext<any, TableCellElement, CM>;
}
interface UseTableRowParametersSelf<TableRowElement extends Element> {
    /**
     * When the `selectionLimit` is `"single"`, this must be `null`.
     */
    selected: boolean | null;
    tagTableRow: ElementToTag<TableRowElement>;
}
interface UseTableRowParameters<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters" | "typeaheadNavigationParameters" | "context" | "info">, TargetedOmit<UseGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>, "rovingTabIndexParameters", never> {
    context: UseTableSectionContext<any, TableRowElement, TableCellElement, RM, CM>;
    tableRowParameters: UseTableRowParametersSelf<TableRowElement>;
    info: Omit<UseCompleteGridNavigationRowParameters<TableRowElement, TableCellElement, RM, CM>["info"], "getSortValue">;
}
interface UseTableRowContext<TableRowElement extends Element, TableCellElement extends Element, M extends TableCellInfo<TableCellElement>> extends CompleteGridNavigationCellContext<TableRowElement, TableCellElement, M> {
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
interface UseTableCellParameters<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>> extends OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>, "info"> {
    tableCellParameters: UseTableCellParametersSelf<TableCellElement>;
    context: UseTableRowContext<any, TableCellElement, CM>;
    info: OmitStrong<UseCompleteGridNavigationCellParameters<TableCellElement, CM>["info"], never>;
}
interface TableRowInfo<TableRowElement extends Element, TableCellElement extends Element> extends UseCompleteGridNavigationRowInfo<TableRowElement, TableCellElement> {
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
interface SortInfo {
    column: number;
    direction: "ascending" | "descending";
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
declare function useTableSection<TableSectionElement extends Element, TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({ linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, gridNavigationParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection, location }, typeaheadNavigationParameters, context: { tableContext } }: UseTableSectionParameters<TableSectionElement, TableRowElement, TableCellElement, RM>): UseTableSectionReturnType<TableSectionElement, TableRowElement, TableCellElement, RM, CM>;
/**
 * @compositeParams
 */
declare function useTableRow<TableRowElement extends Element, TableCellElement extends Element, RM extends TableRowInfo<TableRowElement, TableCellElement>, CM extends TableCellInfo<TableCellElement>>({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, ...void1 }: UseTableRowParameters<TableRowElement, TableCellElement, RM, CM>): UseTableRowReturnType<TableRowElement, TableCellElement, RM, CM>;
/**
 * @compositeParams
 */
declare function useTableCell<TableCellElement extends Element, CM extends TableCellInfo<TableCellElement>>({ tableCellParameters: { tagTableCell }, info, ...p }: UseTableCellParameters<TableCellElement, CM>): UseTableCellReturnType<TableCellElement, CM>;
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
    localStorageKey: keyof PersistentStates | null;
    orientation: "horizontal" | "vertical";
    role?: "tablist" | string;
}
interface UseTabsParameters<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends UseTabListParameters<TabContainerElement, TabElement, M>, TargetedOmit<UseLabelSyntheticParameters, "labelParameters", "onLabelClick"> {
    tabsParameters: UseTabsParametersSelf;
}
interface UseTabParameters<TabElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationChildParameters<TabElement, M>, never>, TargetedOmit<UsePressParameters<TabElement>, "pressParameters", "excludeEnter" | "excludePointer" | "excludeSpace" | "allowRepeatPresses" | "onPressSync"> {
    context: UseTabsContext<any, TabElement, M>;
}
interface UseTabPanelParameters<M extends TabPanelInfo> extends UseManagedChildParameters<M, "index"> {
    context: UseTabPanelsContext<M>;
}
interface UseTabsContext<ParentElement extends Element, ChildElement extends Element, M extends TabInfo<ChildElement>> extends CompleteListNavigationContext<ParentElement, ChildElement, M> {
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
interface UseTabsReturnType<TabContainerElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>> extends OmitStrong<UseCompleteListNavigationReturnType<TabContainerElement, TabElement, M>, "props" | "context"> {
    propsContainer: ElementProps<TabContainerElement>;
    propsLabel: ElementProps<LabelElement>;
    contextPanels: UseTabPanelsContext<TabPanelInfo>;
    contextTabs: UseTabsContext<TabContainerElement, TabElement, M>;
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
declare function useTabs<TabListElement extends Element, TabElement extends Element, LabelElement extends Element, M extends TabInfo<TabElement>>({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySelectedIndex, onSelectedIndexChange: ssi, selectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }: UseTabsParameters<TabListElement, TabElement, LabelElement, M>): UseTabsReturnType<TabListElement, TabElement, LabelElement, M>;
/**
 * @compositeParams
 */
declare function useTab<TabElement extends Element, M extends TabInfo<TabElement>>({ info: { focusSelf: focusSelfParent, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context }: UseTabParameters<TabElement, M>): UseTabReturnType<TabElement, M>;
/**
 * @compositeParams
 */
declare function useTabPanel<PanelElement extends Element, M extends TabPanelInfo>({ info, context }: UseTabPanelParameters<M>): UseTabPanelReturnType<PanelElement>;
interface UseToastsParametersSelf {
    visibleCount: number; // The maximum number of toasts that are shown at one time (used for automatic management of when to show toasts, i.e. don't show this toast if 2 are already on-screen -- 1 is a good default)
}
interface UseToastsParameters extends UseManagedChildrenParameters<ToastInfo> {
    toastsParameters: UseToastsParametersSelf;
}
interface UseToastParametersSelf {
    politeness?: "polite" | "assertive";
    timeout: number | null;
    children: ComponentChildren;
}
interface UseToastParameters<M extends ToastInfo> extends UseManagedChildParameters<M, "index"> {
    toastParameters: UseToastParametersSelf;
    context: ToastsContext<M>;
    info: OmitStrong<M, "setNumberAheadOfMe" | "focus" | "show">;
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
interface UseToastReturnType<ToastType extends Element> {
    toastReturn: UseToastReturnTypeSelf;
    props: ElementProps<ToastType>;
}
interface UseToastsReturnType<ContainerType extends Element, M extends ToastInfo> extends UseManagedChildrenReturnType<ToastInfo> {
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
declare function useToast<E extends Element>({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }: UseToastParameters<ToastInfo>): UseToastReturnType<E>;
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
}
interface UseTooltipParameters<TriggerType extends Element, PopupType extends Element> extends TargetedPick<UseEscapeDismissParameters<PopupType>, "escapeDismissParameters", "getWindow" | "parentDepth"> {
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
declare function useTooltip<TriggerType extends Element, PopupType extends Element>({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay }, escapeDismissParameters }: UseTooltipParameters<TriggerType, PopupType>): UseTooltipReturnType<TriggerType, PopupType>;
interface UseTooltipReturnTypeSelf {
    getState(): TooltipState;
    stateIsFocus(): boolean;
    stateIsMouse(): boolean;
}
interface UseTooltipReturnType<TriggerType extends Element, PopupType extends Element> {
    propsPopup: ElementProps<PopupType>;
    propsTrigger: ElementProps<TriggerType>;
    tooltipReturn: UseTooltipReturnTypeSelf;
}
declare const ContextDefaults: {
    collator: Context<Intl.Collator | null>;
    pageNavigationSize: Context<number>;
    typeaheadTimeout: Context<number>;
    noTypeahead: Context<boolean>;
    getIndex: Context<GetIndex>;
    disableArrowKeys: Context<boolean>;
    disableHomeEndKeys: Context<boolean>;
    getWindow: Context<() => Window>;
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
interface AccordionPropsBase<HeaderButtonElement extends Element> extends Get4<UseAccordionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "accordionParameters", "typeaheadNavigationParameters", "linearNavigationParameters", "managedChildrenParameters"> {
    imperativeHandle?: Ref<UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>>;
}
interface AccordionSectionPropsBase<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends Get4<UseAccordionSectionParameters<HeaderButtonElement, UseAccordionSectionInfo>, "info", "accordionSectionParameters", "buttonParameters", "textContentParameters"> {
    imperativeHandle?: Ref<UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>>;
}
interface AccordionProps<HeaderButtonElement extends Element> extends PartialExcept<AccordionPropsBase<HeaderButtonElement>, never> {
    render(info: UseAccordionReturnType<HeaderButtonElement, UseAccordionSectionInfo>): VNode$0<any>;
}
interface AccordionSectionProps<HeaderElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element> extends PartialExcept<AccordionSectionPropsBase<HeaderElement, HeaderButtonElement, BodyElement>, "index" | "tagButton"> {
    render(info: UseAccordionSectionReturnType<HeaderElement, HeaderButtonElement, BodyElement>): VNode$0<any>;
}
declare const Accordion: <HeaderButtonElement extends Element>({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, isValid, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...rest }: AccordionProps<HeaderButtonElement>) => import("preact").JSX.Element;
declare const AccordionSection: <HeaderContainerElement extends Element, HeaderButtonElement extends Element, BodyElement extends Element>({ open, index, tagButton, disabled, bodyRole, onPress, untabbable, getText, imperativeHandle, render, ...rest }: AccordionSectionProps<HeaderContainerElement, HeaderButtonElement, BodyElement>) => VNode$0<any>;
interface ButtonPropsBase<E extends Element> extends Get3<UseButtonParameters<E>, "buttonParameters", "pressParameters", "refElementParameters"> {
    ref?: Ref<UseButtonReturnType<E>>;
}
interface ButtonProps<E extends Element> extends PartialExcept<ButtonPropsBase<E>, "tagButton"> {
    render(info: UseButtonReturnType<E>): VNode$0<any>;
}
declare const Button: <E extends Element>({ tagButton, onPress, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeEnter, excludePointer, excludeSpace, onPressingChange }: ButtonProps<E>, ref: Ref<any>) => VNode$0<any>;
type Get$0<T, K extends keyof T> = T[K];
interface CheckboxGroupPropsBase<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends Get8<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters", "checkboxGroupParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "typeaheadNavigationParameters", "staggeredChildrenParameters", "rovingTabIndexParameters", "rovingTabIndexParameters">, RenderableProps<{}> {
    ref?: Ref<UseCheckboxGroupReturnType<ParentElement, TabbableChildElement, M>>;
}
interface CheckboxGroupParentPropsBase<TCE extends Element> extends Pick<CheckboxGroupInfo<TCE>, "index" | "getSortValue">, Get$0<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters">, OmitStrong<Get$0<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "info">, "checkboxInfo"> {
    ref?: Ref<UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}
interface CheckboxGroupChildPropsBase<TCE extends Element> extends Get2<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "checkboxGroupChildParameters", "textContentParameters">, Pick<CheckboxGroupInfo<TCE>, "index" | "untabbable" | "unselectable" | "getSortValue"> {
    focusSelf: UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>["info"]["focusSelf"];
    ref?: Ref<UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}
interface CheckboxGroupProps<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends PartialExcept<CheckboxGroupPropsBase<ParentElement, TabbableChildElement, M>, never> {
    render(info: UseCheckboxGroupReturnType<ParentElement, TabbableChildElement, M>): VNode$0<any>;
}
interface CheckboxGroupParentProps<TCE extends Element> extends PartialExcept<CheckboxGroupParentPropsBase<TCE>, "index" | "getSortValue" | "focusSelf"> {
    render(parentCheckboxInfo: UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>): VNode$0<any>;
}
interface CheckboxGroupChildProps<TCE extends Element> extends PartialExcept<CheckboxGroupChildPropsBase<TCE>, "index" | "checked" | "onChangeFromParent" | "getSortValue" | "focusSelf"> {
    render(info: UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>): VNode$0<any>;
}
declare const CheckboxGroup: <ParentElement extends Element, TabbableChildElement extends Element>({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, ..._rest }: CheckboxGroupProps<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, ref?: Ref<any>) => import("preact").JSX.Element;
declare const CheckboxGroupParent: <TCE extends Element>({ render, index, focusSelf, untabbable, getText, getSortValue, unselectable, ..._rest }: CheckboxGroupParentProps<TCE>, ref?: Ref<any>) => VNode$0<any>;
declare const CheckboxGroupChild: <TCE extends Element>({ index, render, checked, onChangeFromParent, getSortValue, untabbable, getText, focusSelf, unselectable, ..._rest }: CheckboxGroupChildProps<TCE>, ref?: Ref<any>) => VNode$0<any>;
interface CheckboxPropsBase<I extends Element, L extends Element> extends Get4<UseCheckboxParameters<LabelPosition, I, L>, "checkboxLikeParameters", "checkboxParameters", "labelParameters", "pressParameters"> {
    ref?: Ref<UseCheckboxReturnType<I, L>>;
}
interface CheckboxProps<I extends Element, L extends Element> extends PartialExcept<CheckboxPropsBase<I, L>, "tagInput" | "tagLabel" | "labelPosition" | "ariaLabel" | "checked" | "onCheckedChange"> {
    render(info: UseCheckboxReturnType<I, L>): VNode$0<any>;
}
declare function defaultRenderCheckboxLike<I extends Element, L extends Element, InfoType>({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }: DefaultRenderCheckboxLikeParameters<I, L, InfoType>): (info: InfoType) => VNode$0<any>;
interface DefaultRenderCheckboxLikeParameters<I extends Element, L extends Element, InfoType> {
    labelPosition: "wrapping" | "separate" | "hidden";
    tagInput: ElementToTag<I>;
    tagLabel: ElementToTag<L>;
    makePropsInput: (info: InfoType) => ElementProps<I>;
    makePropsLabel: (info: InfoType) => ElementProps<L>;
}
declare const Checkbox: <I extends Element, L extends Element>({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, onCheckedChange, longPressThreshold, excludeSpace, render }: CheckboxProps<I, L>, ref: Ref<any>) => VNode$0<any>;
interface DialogPropsBase<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends Get4<UseDialogParameters<DialogElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters"> {
    ref?: Ref$0<UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>>;
}
interface DialogProps<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends PartialExcept<DialogPropsBase<FocusContainerElement, SourceElement, DialogElement, TitleElement>, "ariaLabel" | "onClose" | "open" | "focusPopup"> {
    render(dialogInfo: UseDialogReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>): VNode$0;
}
declare function defaultRenderPortal({ portalId, children }: {
    portalId: string;
    children: VNode$0;
}): VNode$0;
declare const Dialog: <FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element>({ onClose, open, closeOnBackdrop, closeOnEscape, focusOpener, getWindow, parentDepth, focusPopup, ariaLabel, render }: DialogProps<FocusContainerElement, SourceElement, DialogElement, TitleElement>, ref?: Ref$0<any>) => import("preact-prop-helpers").JSX.Element;
interface DrawerPropsBase<FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element> extends Get4<UseDrawerParameters<DrawerElement, TitleElement>, "dismissParameters", "escapeDismissParameters", "labelParameters", "focusTrapParameters"> {
    ref?: Ref$0<UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>>;
    render(drawerInfo: UseDrawerReturnType<FocusContainerElement, SourceElement, DrawerElement, TitleElement>): VNode$0<any>;
}
interface DrawerProps<FocusContainerElement extends Element, SourceElement extends Element, DialogElement extends Element, TitleElement extends Element> extends PartialExcept<DrawerPropsBase<FocusContainerElement, SourceElement, DialogElement, TitleElement>, "ariaLabel" | "onClose" | "open" | "focusPopup"> {
    render(dialogInfo: UseDrawerReturnType<FocusContainerElement, SourceElement, DialogElement, TitleElement>): VNode$0<any>;
}
declare const Drawer: <FocusContainerElement extends Element, SourceElement extends Element, DrawerElement extends Element, TitleElement extends Element>({ closeOnBackdrop, closeOnEscape, closeOnLostFocus, focusOpener, focusPopup, getWindow, onClose, open, parentDepth, render, trapActive, ariaLabel }: DrawerProps<FocusContainerElement, SourceElement, DrawerElement, TitleElement>, ref: Ref$0<any>) => import("preact").JSX.Element;
interface GridlistPropsBase<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends Get11<UseGridlistParameters<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridNavigationParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "labelParameters", "listboxParameters", "singleSelectionParameters"> {
    ref?: Ref$0<UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>>;
}
interface GridlistRowPropsBase<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends Pick<RM, "index" | "unselectable" | "getSortValue">, Get5<UseGridlistRowParameters<GridlistRowElement, GridlistCellElement, RM, CM>, "textContentParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "gridlistRowParameters"> {
    info?: OmitStrong<RM, keyof GridlistRowInfo<GridlistRowElement, GridlistCellElement>>;
    ref?: Ref$0<UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>>;
}
interface GridlistChildPropsBase<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends Get3<UseGridlistCellParameters<CellElement, M>, "gridNavigationCellParameters", "textContentParameters", "pressParameters">, Pick<M, "index" | "untabbable"> {
    focusSelf?: M["focusSelf"];
    info?: OmitStrong<M, "focusSelf">;
    ref?: Ref$0<UseGridlistCellReturnType<CellElement, M>>;
}
interface GridlistProps<GridlistElement extends Element, GridlistRowElement extends Element, GridlistCellElement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistPropsBase<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>, "selectionLimit" | "groupingType" | "ariaLabel" | "selectedIndex"> {
    render(info: UseGridlistReturnType<GridlistElement, GridlistRowElement, GridlistCellElement, LabelElement, RM, CM>): VNode$0;
}
interface GridlistRowProps<GridlistRowElement extends Element, GridlistCellElement extends Element, RM extends GridlistRowInfo<GridlistRowElement, GridlistCellElement>, CM extends GridlistCellInfo<GridlistCellElement>> extends PartialExcept<GridlistRowPropsBase<GridlistRowElement, GridlistCellElement, RM, CM>, "index" | "getSortValue"> {
    render(info: UseGridlistRowReturnType<GridlistRowElement, GridlistCellElement, RM, CM>): VNode$0;
}
interface GridlistChildProps<CellElement extends Element, M extends GridlistCellInfo<CellElement>> extends PartialExcept<GridlistChildPropsBase<CellElement, M>, "index" | "focusSelf"> {
    render(info: UseGridlistCellReturnType<CellElement, M>): VNode$0;
}
declare function defaultRenderGridlistChild<CellElement extends Element, CM extends GridlistCellInfo<CellElement>>({ tagGridlistChild, makePropsGridlistChild }: {
    tagGridlistChild: ElementToTag<CellElement>;
    makePropsGridlistChild: (info: UseGridlistCellReturnType<CellElement, CM>) => ElementProps<CellElement>;
}): (info: UseGridlistCellReturnType<CellElement, CM>) => VNode$0<any>;
declare const Gridlist: <GridlistElement extends Element, RowElement extends Element, Cellement extends Element, LabelElement extends Element, RM extends GridlistRowInfo<RowElement, Cellement> = GridlistRowInfo<RowElement, Cellement>, CM extends GridlistCellInfo<Cellement> = GridlistCellInfo<Cellement>>({ collator, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, groupingType, typeaheadTimeout, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, selectionLimit, untabbable, paginationMax, paginationMin, staggered, compare, getIndex, onTabbableColumnChange, ariaLabel, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, render }: GridlistProps<GridlistElement, RowElement, Cellement, LabelElement, RM, CM>, ref?: Ref$0<any>) => createElement.JSX.Element;
declare const GridlistRow: <RowElement extends Element, Cellement extends Element, RM extends GridlistRowInfo<RowElement, Cellement> = GridlistRowInfo<RowElement, Cellement>, CM extends GridlistCellInfo<Cellement> = GridlistCellInfo<Cellement>>({ index, collator, unselectable, untabbable, navigatePastEnd, navigatePastStart, noTypeahead, onTabbableIndexChange, selected, typeaheadTimeout, getSortValue, getText, render, initiallyTabbedIndex, onNavigateTypeahead, info: uinfo }: GridlistRowProps<RowElement, Cellement, RM, CM>, ref?: Ref$0<any>) => createElement.JSX.Element;
declare const GridlistChild: <CellElement extends Element, CM extends GridlistCellInfo<CellElement> = GridlistCellInfo<CellElement>>({ index, colSpan, focusSelf, untabbable, getText, onPressSync, longPressThreshold, onPressingChange, render, info: subInfo }: GridlistChildProps<CellElement, CM>, ref?: Ref$0<any>) => VNode$0<{}>;
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
interface ListboxPropsBase<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends Get9<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "paginatedChildrenParameters", "typeaheadNavigationParameters", "singleSelectionParameters">, OmitStrong<Get$0<UseListboxParameters<ListElement, ListItemElement, LabelElement, M>, "listboxParameters">, "groupingType"> {
    ref?: Ref$0<UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>>;
}
interface ListboxItemPropsBase<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends Get2<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "listboxParameters", "textContentParameters">, Pick<M, "index" | "untabbable" | "unselectable" | "getSortValue">, OmitStrong<NonNullable<Get$0<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>, "pressParameters">>, "focusSelf"> {
    focusSelf?: UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"]["focusSelf"];
    subInfo?: OmitStrong<UseListboxItemParameters<ListItemElement, ListboxInfo<ListItemElement>>["info"], "focusSelf">;
    ref?: Ref$0<UseListboxItemReturnType<ListItemElement, M>>;
}
interface ListboxProps<ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxPropsBase<ListElement, ListItemElement, LabelElement, M>, "ariaLabel" | "selectionLimit" | "selectedIndex"> {
    render(info: UseListboxReturnType<ListElement, ListItemElement, LabelElement, M>): VNode$0;
}
interface ListboxItemProps<ListItemElement extends Element, M extends ListboxInfo<ListItemElement>> extends PartialExcept<ListboxItemPropsBase<ListItemElement, M>, "index" | "getSortValue"> {
    render(info: UseListboxItemReturnType<ListItemElement, ListboxInfo<ListItemElement>>): VNode$0;
}
declare const GroupedListbox: <LabelElement extends Element>({ ariaLabel, selectionLimit, orientation, render }: Pick<ListboxProps<any, any, LabelElement, any>, "orientation" | "ariaLabel" | "selectionLimit" | "render">) => import("preact").JSX.Element;
declare const Listbox: <ListElement extends Element, ListItemElement extends Element, LabelElement extends Element, M extends ListboxInfo<ListItemElement> = ListboxInfo<ListItemElement>>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, staggered, pageNavigationSize, paginationMax, paginationMin, selectionLimit, untabbable, typeaheadTimeout, orientation, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead, render }: ListboxProps<ListElement, ListItemElement, LabelElement, M>) => import("preact").JSX.Element;
declare const ListboxItem: <ListboxItemElement extends Element, M extends ListboxInfo<ListboxItemElement> = ListboxInfo<ListboxItemElement>>({ unselectable, focusSelf, getText, untabbable, index, render, selected, getSortValue, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onMultiSelect, ...subInfo }: ListboxItemProps<ListboxItemElement, M>) => VNode$0<{}>;
interface MenubarPropsBase<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends Get9<UseMenubarParameters<MenuParentElement, MenuItemElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "labelParameters", "toolbarParameters", "singleSelectionParameters"> {
    ref?: Ref$0<UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>>;
}
interface MenubarItemPropsBase<MenuItemElement extends Element> extends Get3<UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>, "menuItemParameters", "textContentParameters", "pressParameters">, Pick<UseMenubarSubInfo<MenuItemElement>, "index" | "untabbable" | "unselectable" | "getSortValue"> {
    focusSelf?: UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>["info"]["focusSelf"];
    ref?: Ref$0<UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>>;
}
interface MenubarProps<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenubarPropsBase<MenuParentElement, MenuItemElement, LabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>): VNode$0<any>;
}
interface MenubarItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenubarItemPropsBase<MenuItemElement>, "index" | "getSortValue"> {
    render(info: UseMenubarItemReturnType<MenuItemElement, M>): VNode$0<any>;
    info?: OmitStrong<M, keyof UseMenubarSubInfo<MenuItemElement>>;
}
declare const Menubar: <ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<ChildElement> = UseMenubarSubInfo<ChildElement>>({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, staggered, noTypeahead, untabbable, onTabbableIndexChange, compare, getIndex, disabled, selectedIndex, onSelectedIndexChange, typeaheadTimeout, role, ariaLabel, ariaPropName, selectionMode, onNavigateLinear, onNavigateTypeahead }: MenubarProps<ContainerElement, ChildElement, LabelElement, M>, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const MenubarItem: <MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({ index, render, focusSelf, untabbable, getText, unselectable, onPress, getSortValue, onPressingChange, role, info: uinfo }: MenubarItemProps<MenuItemElement, M>, ref?: Ref$0<any>) => import("preact").JSX.Element;
interface MenuPropsBase<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends 
//Omit<UseMenuParameters<E, K, I>, "indexMangler" | "indexDemangler" | "onAfterChildLayoutEffect" | "onChildrenMountChange" | "onTabbableIndexChange" | "onTabbableRender" | "onTabbedInTo" | "onTabbedOutOf"> & {
Get12<UseMenuParameters<MenuSurfaceElement, MenuParentElement, MenuButtonElement, MenuItemElement, M>, "menuParameters", "menuSurfaceParameters", "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "dismissParameters", "staggeredChildrenParameters", "escapeDismissParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "toolbarParameters", "singleSelectionParameters"> {
}
interface MenuProps<MenuSurfaceElement extends Element, MenuParentElement extends Element, MenuItemElement extends Element, MenuButtonElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends PartialExcept<MenuPropsBase<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>, "open" | "onClose" | "onOpen" | "openDirection" | "orientation"> {
    render(menuInfo: UseMenuReturnType<MenuSurfaceElement, MenuParentElement, MenuItemElement, MenuButtonElement, M>): VNode$0;
}
interface MenuItemProps<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends MenubarItemProps<MenuItemElement, M> {
    render(info: UseMenuItemReturnType<MenuItemElement, M>): VNode$0<any>;
}
declare const Menu: <SurfaceElement extends Element, ParentElement extends Element, ChildElement extends Element, ButtonElement extends Element, M extends UseMenubarSubInfo<ChildElement> = UseMenubarSubInfo<ChildElement>>({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, ariaPropName, selectionMode, untabbable, onClose, open, openDirection, onTabbableIndexChange, closeOnBackdrop, closeOnEscape, closeOnLostFocus, compare, getIndex, selectedIndex, navigatePastEnd, navigatePastStart, onSelectedIndexChange, pageNavigationSize, parentDepth, disabled, staggered, onOpen, onNavigateLinear, onNavigateTypeahead, getWindow, render }: MenuProps<SurfaceElement, ParentElement, ChildElement, ButtonElement, M>, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const MenuItem: <MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement> = UseMenubarSubInfo<MenuItemElement>>({ index, untabbable, getSortValue, onPress, getText, role, focusSelf, unselectable, onPressingChange, render, info: uinfo }: MenuItemProps<MenuItemElement, M>, ref?: Ref$0<any>) => import("preact").JSX.Element;
type Get$1<T, K extends keyof T> = T[K];
interface ProgressPropsBase<IndicatorElement extends Element, LabelElement extends Element> extends Get$1<UseProgressParameters<IndicatorElement, LabelElement>, "labelParameters">, Get$1<UseProgressParameters<IndicatorElement, LabelElement>, "progressIndicatorParameters"> {
    ref?: Ref$0<UseProgressReturnType<IndicatorElement, LabelElement>>;
}
interface ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends Get3<UseProgressWithHandlerParameters<EventType, CaptureType, IndicatorElement, LabelElement>, "labelParameters", "progressIndicatorParameters", "progressWithHandlerParameters">, UseAsyncHandlerParameters<EventType, CaptureType> {
    ref?: Ref$0<UseProgressReturnType<IndicatorElement, LabelElement>>;
}
interface ProgressProps<IndicatorElement extends Element, LabelElement extends Element> extends PartialExcept<ProgressPropsBase<IndicatorElement, LabelElement>, "tagIndicator" | "ariaLabel"> {
    render(info: UseProgressReturnType<IndicatorElement, LabelElement>): VNode$0<any>;
}
interface ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element> extends PartialExcept<ProgressWithHandlerPropsBase<EventType, CaptureType, IndicatorElement, LabelElement>, "capture" | "tagIndicator" | "ariaLabel" | "asyncHandler"> {
    render(info: UseProgressWithHandlerReturnType<EventType, CaptureType, IndicatorElement, LabelElement>): VNode$0<any>;
}
declare const Progress: <IndicatorElement extends Element, LabelElement extends Element>({ tagIndicator, ariaLabel, max, render, value, valueText }: ProgressProps<IndicatorElement, LabelElement>, ref?: Ref$0<any>) => VNode$0<any>;
declare const ProgressWithHandler: <EventType, CaptureType, IndicatorElement extends Element, LabelElement extends Element>({ ariaLabel, forciblyPending, render, tagIndicator, asyncHandler, capture, debounce, throttle }: ProgressWithHandlerProps<EventType, CaptureType, IndicatorElement, LabelElement>, ref?: Ref$0<any>) => VNode$0<any>;
interface RadioGroupPropsBase<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends Get9<UseRadioGroupParameters<V, GroupElement, GroupLabelElement, TabbableChildElement>, "radioGroupParameters", "linearNavigationParameters", "labelParameters", "radioGroupParameters", "rearrangeableChildrenParameters", "staggeredChildrenParameters", "sortableChildrenParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters"> {
    ref?: Ref$0<UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>>;
}
interface RadioPropsBase<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends Get5<UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>, "radioParameters", "checkboxLikeParameters", "labelParameters", "textContentParameters", "pressParameters">, Pick<RadioSubInfo<any, V>, "index" | "untabbable" | "unselectable"> {
    focusSelf?: UseRadioParameters<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>["info"]["focusSelf"];
}
interface RadioGroupProps<V extends string | number, GroupElement extends Element, GroupLabelElement extends Element, TabbableChildElement extends Element> extends PartialExcept<RadioGroupPropsBase<V, GroupElement, GroupLabelElement, TabbableChildElement>, "ariaLabel" | "name" | "selectedValue" | "onSelectedValueChange"> {
    render(info: UseRadioGroupReturnType<V, GroupElement, GroupLabelElement, TabbableChildElement>): VNode$0<any>;
}
interface RadioProps<LP extends LabelPosition, InputElement extends Element, LabelElement extends Element, V extends string | number> extends PartialExcept<RadioPropsBase<LP, InputElement, LabelElement, V>, "index" | "value" | "ariaLabel" | "labelPosition" | "tagInput" | "tagLabel"> {
    render(info: UseRadioReturnType<LP, V, InputElement, LabelElement, RadioSubInfo<FocusableLabelElement<LP, InputElement, LabelElement>, V>>): VNode$0<any>;
}
declare const RadioGroup: <V extends string | number, GroupElement extends HTMLElement, GroupLabelElement extends HTMLElement, TabbableChildElement extends HTMLElement>({ render, name, onSelectedValueChange, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, compare, staggered, getIndex, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, ...rest }: RadioGroupProps<V, GroupElement, GroupLabelElement, TabbableChildElement>, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const Radio: <LP extends LabelPosition, V extends string | number, InputElement extends Element, LabelElement extends Element>({ unselectable, disabled, index, render, value, ariaLabel, focusSelf, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold }: RadioProps<LP, InputElement, LabelElement, V>, ref?: Ref$0<any>) => VNode$0<any>;
type Get$2<T, K extends keyof T> = T[K];
interface SliderProps extends Get$2<UseSliderParameters<SliderThumbInfo>, "managedChildrenParameters">, Get$2<UseSliderParameters<SliderThumbInfo>, "sliderParameters"> {
    children: ComponentChildren;
    ref?: Ref$0<UseSliderReturnType<SliderThumbInfo>>;
}
interface SliderThumbProps<ThumbElement extends Element> extends Pick<SliderThumbInfo, "index">, Get$2<UseSliderThumbParameters<ThumbElement, SliderThumbInfo>, "sliderThumbParameters"> {
    render(info: UseSliderThumbReturnType<ThumbElement, SliderThumbInfo>): VNode$0;
}
declare const Slider: ({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, children }: SliderProps, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const SliderThumb: <ThumbElement extends Element>({ label, tag, value, max, min, onValueChange, index, render, valueText }: SliderThumbProps<ThumbElement>, ref?: Ref$0<any>) => VNode$0<{}>;
type Get$3<T, K extends keyof T> = T[K];
interface TablePropsBase<TableElement extends Element, LabelElement extends Element> extends Get$3<UseTableParameters<TableElement, LabelElement>, "labelParameters">, Get$3<UseTableParameters<TableElement, LabelElement>, "tableParameters"> {
    ref?: Ref$0<UseTableReturnType<TableElement, LabelElement>>;
}
interface TableSectionPropsBase<SectionElement extends Element, RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends Get9<UseTableSectionParameters<SectionElement, RowElement, CellElement, RM>, "gridNavigationParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "typeaheadNavigationParameters", "paginatedChildrenParameters", "staggeredChildrenParameters", "tableSectionParameters"> {
    ref?: Ref$0<UseTableSectionReturnType<SectionElement, RowElement, CellElement, RM, CM>>;
}
interface TableRowPropsBase<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends Pick<RM, "index" | "unselectable">, Get4<UseTableRowParameters<RowElement, CellElement, RM, CM>, "textContentParameters", "tableRowParameters", "linearNavigationParameters", "rovingTabIndexParameters"> {
    ref?: Ref$0<UseTableRowReturnType<RowElement, CellElement, RM, CM>>;
}
interface TableCellPropsBase<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends Pick<CM, "index" | "untabbable">, Get3<UseTableCellParameters<CellElement, CM>, "tableCellParameters", "gridNavigationCellParameters", "textContentParameters"> {
    focusSelf: CM["focusSelf"];
    getSortValue: CM["getSortValue"];
    ref?: Ref$0<UseTableCellReturnType<CellElement, CM>>;
}
interface TableProps<TableElement extends Element, LabelElement extends Element> extends PartialExcept<TablePropsBase<TableElement, LabelElement>, "tagTable" | "selectionLimit" | "ariaLabel"> {
    render(info: UseTableReturnType<TableElement, LabelElement>): VNode$0;
}
interface TableSectionProps<SectionElement extends Element, RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableSectionPropsBase<SectionElement, RowElement, CellElement, RM, CM>, "tagTableSection" | "location"> {
    render(info: UseTableSectionReturnType<SectionElement, RowElement, CellElement, RM, CM>): VNode$0;
}
interface TableRowProps<RowElement extends Element, CellElement extends Element, RM extends TableRowInfo<RowElement, CellElement>, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableRowPropsBase<RowElement, CellElement, RM, CM>, "index" | "tagTableRow"> {
    render(info: UseTableRowReturnType<RowElement, CellElement, RM, CM>): VNode$0;
}
interface TableCellProps<CellElement extends Element, CM extends TableCellInfo<CellElement>> extends PartialExcept<TableCellPropsBase<CellElement, CM>, "getSortValue" | "tagTableCell" | "index" | "focusSelf"> {
    render(info: UseTableCellReturnType<CellElement, CM>): VNode$0;
}
declare const Table: <TableElement extends Element, LabelElement extends Element>({ ariaLabel, selectionLimit, tagTable, render }: TableProps<TableElement, LabelElement>, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const TableSection: <SectionElement extends Element, RowElement extends Element, CellElement extends Element>({ disableHomeEndKeys, getIndex, initiallySelectedIndex, untabbable, navigatePastEnd, navigatePastStart, onSelectedIndexChange, onTabbableColumnChange, onTabbableIndexChange, pageNavigationSize, paginationMax, paginationMin, staggered, render, location, ariaPropName, selectionMode, onNavigateLinear, collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, tagTableSection }: TableSectionProps<SectionElement, RowElement, CellElement, TableRowInfo<RowElement, CellElement>, TableCellInfo<CellElement>>) => import("preact").JSX.Element;
declare const TableRow: <RowElement extends Element, Cellement extends Element>({ index, getText, tagTableRow, onTabbableIndexChange, navigatePastEnd, navigatePastStart, selected, unselectable, initiallyTabbedIndex, untabbable, render }: TableRowProps<RowElement, Cellement, TableRowInfo<RowElement, Cellement>, TableCellInfo<Cellement>>, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const TableCell: <CellElement extends Element>({ index, getText, focusSelf, untabbable, tagTableCell, render, colSpan, getSortValue }: TableCellProps<CellElement, TableCellInfo<CellElement>>, ref?: Ref$0<any>) => VNode$0<{}>;
interface TabsPropsBase<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends Get10<UseTabsParameters<TabContainerElement, TabElement, TabLabelElement, M>, "labelParameters", "linearNavigationParameters", "rearrangeableChildrenParameters", "rovingTabIndexParameters", "singleSelectionParameters", "sortableChildrenParameters", "staggeredChildrenParameters", "tabsParameters", "typeaheadNavigationParameters", "singleSelectionParameters"> {
}
interface TabPropsBase<TabElement extends Element, M extends TabInfo<TabElement>> extends Pick<M, "index" | "untabbable" | "unselectable" | "getSortValue">, Get2<UseTabParameters<TabElement, M>, "pressParameters", "textContentParameters"> {
    focusSelf: M["focusSelf"];
    info?: OmitStrong<M, keyof TabInfo<TabElement>>;
}
interface TabPanelPropsBase<M extends TabPanelInfo> extends Pick<M, "index"> {
    info?: OmitStrong<M, keyof TabPanelInfo>;
}
interface TabsProps<TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement>> extends PartialExcept<TabsPropsBase<TabContainerElement, TabElement, TabLabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseTabsReturnType<TabContainerElement, TabElement, TabLabelElement, M>): VNode$0<any>;
}
interface TabProps<TabElement extends Element, M extends TabInfo<TabElement>> extends PartialExcept<TabPropsBase<TabElement, M>, "index" | "getSortValue"> {
    render(info: UseTabReturnType<TabElement, M>): VNode$0<any>;
}
interface TabPanelProps<PanelElement extends Element, M extends TabPanelInfo> extends PartialExcept<TabPanelPropsBase<M>, "index"> {
    render(info: UseTabPanelReturnType<PanelElement>): VNode$0<any>;
}
declare const Tabs: <TabContainerElement extends Element, TabElement extends Element, TabLabelElement extends Element, M extends TabInfo<TabElement> = TabInfo<TabElement>>({ ariaLabel, collator, compare, disableHomeEndKeys, getIndex, initiallySelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSelectedIndexChange, onTabbableIndexChange, orientation, staggered, pageNavigationSize, localStorageKey, selectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, render }: TabsProps<TabContainerElement, TabElement, TabLabelElement, M>, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const Tab: <E extends Element, M extends TabInfo<E> = TabInfo<E>>({ unselectable, focusSelf, untabbable, index, getText, getSortValue, render, longPressThreshold, onPressingChange, info: uinfo }: TabProps<E, M>, ref?: Ref$0<any>) => VNode$0<any>;
declare function TabPanel<E extends Element, M extends TabPanelInfo = TabPanelInfo>({ index, render, info: uinfo }: TabPanelProps<E, M>): VNode$0<any>;
type Get$4<T, K extends keyof T> = T[K];
interface ToastsProps<ContainerType extends Element> extends Get$4<UseToastsParameters, "managedChildrenParameters">, Get$4<UseToastsParameters, "toastsParameters"> {
    ref?: Ref$0<UseToastsReturnType<ContainerType, ToastInfo>>;
    render(info: UseToastsReturnType<ContainerType, ToastInfo>): VNode$0;
}
interface ToastProps<E extends Element> extends Get$4<UseToastParameters<ToastInfo>, "info">, Get$4<UseToastParameters<ToastInfo>, "toastParameters"> {
    ref?: Ref$0<UseToastReturnType<E>>;
    render(args: UseToastReturnType<E>): VNode$0;
}
declare const Toasts: <ContainerType extends Element>({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount }: ToastsProps<ContainerType>, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const Toast: <E extends Element>({ render, index, timeout, politeness, children }: ToastProps<E>, ref?: Ref$0<any>) => VNode$0<{}>;
interface ToolbarPropsBase<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends Get9<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters", "rovingTabIndexParameters", "typeaheadNavigationParameters", "sortableChildrenParameters", "rearrangeableChildrenParameters", "labelParameters", "staggeredChildrenParameters", "toolbarParameters", "singleSelectionParameters"> {
    ref?: Ref$0<UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>>;
}
interface ToolbarChildPropsBase<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends Get$4<UseToolbarChildParameters<ToolbarChildElement, M>, "textContentParameters">, Get$4<UseToolbarChildParameters<ToolbarChildElement, M>, "toolbarChildParameters">, Pick<Get$4<UseToolbarChildParameters<any, any>, "info">, "getSortValue" | "index" | "untabbable" | "unselectable"> {
    focusSelf?: M["focusSelf"];
    info?: OmitStrong<Get$4<UseToolbarChildParameters<ToolbarChildElement, M>, "info">, never>;
    ref?: Ref$0<UseToolbarChildReturnType<ToolbarChildElement, M>>;
}
interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarPropsBase<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>): VNode$0<any>;
}
interface ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarChildPropsBase<ToolbarChildElement, M>, "getSortValue" | "index" | "disabledProp"> {
    render(info: UseToolbarChildReturnType<ToolbarChildElement, M>): VNode$0<any>;
}
declare const Toolbar: <ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement> = UseToolbarSubInfo<ChildElement>>({ render, role, collator, disableHomeEndKeys, disabled, compare, getIndex, navigatePastEnd, navigatePastStart, pageNavigationSize, selectedIndex, onSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, staggered, ariaLabel, ariaPropName, selectionMode, untabbable, onNavigateLinear, onNavigateTypeahead }: ToolbarProps<ContainerElement, ChildElement, LabelElement, M>, ref?: Ref$0<any>) => import("preact").JSX.Element;
declare const ToolbarChild: <ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement> = UseToolbarSubInfo<ToolbarChildElement>>({ index, render, focusSelf, getSortValue, getText, unselectable, disabledProp, untabbable, info: uinfo }: ToolbarChildProps<ToolbarChildElement, M>, ref?: Ref$0<any>) => import("preact").JSX.Element;
type Get$5<T, K extends keyof T> = T[K];
interface TooltipPropsBase<TriggerType extends Element, PopupType extends Element> extends Get$5<UseTooltipParameters<TriggerType, PopupType>, "escapeDismissParameters">, Get$5<UseTooltipParameters<TriggerType, PopupType>, "tooltipParameters"> {
    render(info: UseTooltipReturnType<TriggerType, PopupType>): VNode$0;
    ref?: Ref$0<UseTooltipReturnType<TriggerType, PopupType>>;
}
type TooltipProps<TriggerType extends Element, PopupType extends Element> = PartialExcept<TooltipPropsBase<TriggerType, PopupType>, "render" | "tooltipSemanticType" | "onStatus">;
declare const Tooltip: <TriggerType extends Element, PopupType extends Element>({ onStatus, getWindow, parentDepth, hoverDelay, render, tooltipSemanticType }: TooltipProps<TriggerType, PopupType>, ref?: Ref$0<any>) => import("preact").JSX.Element;
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
export { UseAccordionContext, UseAccordionContextSelf, UseAccordionParameters, UseAccordionParametersSelf, UseAccordionReturnType, UseAccordionReturnTypeSelf, UseAccordionSectionInfo, UseAccordionSectionParameters, UseAccordionSectionParametersSelf, UseAccordionSectionReturnType, UseAccordionSectionReturnTypeSelf, useAccordion, useAccordionSection, ButtonPressEventDetail, ButtonPressEventHandler, TargetedButtonPressEvent, UseButtonParameters, UseButtonParametersSelf, UseButtonReturnType, useButton, CheckboxGroupChangeEventDetail, CheckboxGroupChangeEventHandler, CheckboxGroupContext, CheckboxGroupInfo, TargetedCheckboxGroupChangeEvent, UseCheckboxGroupChildParameters, UseCheckboxGroupChildParametersSelf, UseCheckboxGroupChildReturnType, UseCheckboxGroupChildReturnTypeSelf, UseCheckboxGroupParameters, UseCheckboxGroupParametersSelf, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnType, UseCheckboxGroupParentReturnTypeSelf, UseCheckboxGroupReturnType, useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent, CheckboxCheckedType, UseCheckboxLikeParameters, UseCheckboxLikeParametersSelf, UseCheckboxLikeReturnType, UseCheckboxLikeReturnTypeSelf, useCheckboxLike, CheckboxChangeEventDetail, CheckboxChangeEventHandler, TargetedCheckboxChangeEvent, UseCheckboxParameters, UseCheckboxParametersSelf, UseCheckboxReturnType, UseCheckboxReturnTypeSelf, useCheckbox, UseDialogParameters, UseDialogReturnType, useDialog, UseDrawerParameters, UseDrawerReturnType, useDrawer, GridlistCellInfo, GridlistRowInfo, UseGridlistCellParameters, UseGridlistCellReturnType, UseGridlistContext, UseGridlistParameters, UseGridlistParametersSelf, UseGridlistReturnType, UseGridlistRowContext, UseGridlistRowParameters, UseGridlistRowParametersSelf, UseGridlistRowReturnType, useGridlist, useGridlistCell, useGridlistRow, FocusableLabelElement, LabelPosition, UseLabelParameters, UseLabelParametersSelf, UseLabelReturnType, UseLabelSyntheticParameters, useLabel, useLabelSynthetic, ListboxInfo, ListboxMultiSelectEvent, ListboxSingleSelectEvent, UseListboxContext, UseListboxItemParameters, UseListboxItemParametersSelf, UseListboxItemReturnType, UseListboxParameters, UseListboxParametersSelf, UseListboxReturnType, useListbox, useListboxItem, UseFocusSentinelParameters, UseMenuSurfaceParameters, UseMenuSurfaceParametersSelf, UseMenuSurfaceReturnType, useFocusSentinel, useMenuSurface, MenuItemReturnTypeSelf, UseMenuContext, UseMenuItemParameters, UseMenuItemReturnType, UseMenuParameters, UseMenuParametersSelf, UseMenuReturnType, useMenu, useMenuItem, UseMenubarContext, UseMenubarItemParameters, UseMenubarItemParametersSelf, UseMenubarItemReturnType, UseMenubarParameters, UseMenubarReturnType, UseMenubarSubInfo, useMenubar, useMenubarChild, NotificationProviderContext, NotificationProviderProps, NotificationProviderReturnType, useNotificationProvider, useNotify, UseProgressParameters, UseProgressParametersSelf, UseProgressReturnType, UseProgressWithHandlerParameters, UseProgressWithHandlerParametersSelf, UseProgressWithHandlerReturnType, useProgress, useProgressWithHandler, RadioChangeEventDetail, RadioChangeEventHandler, RadioContext, RadioContextSelf, RadioSubInfo, TargetedRadioChangeEvent, UseRadioGroupParameters, UseRadioGroupParametersSelf, UseRadioGroupReturnType, UseRadioGroupReturnTypeSelf, UseRadioParameters, UseRadioParametersSelf, UseRadioReturnType, useRadio, useRadioGroup, RangeChangeEvent, SliderContext, SliderContextSelf, SliderThumbInfo, UseSliderParameters, UseSliderParametersSelf, UseSliderReturnType, UseSliderThumbParameters, UseSliderThumbParametersSelf, UseSliderThumbReturnType, UseSliderThumbReturnTypeSelf, useSlider, useSliderThumb, TableCellInfo, TableRowInfo, UseTableCellParameters, UseTableCellParametersSelf, UseTableCellReturnType, UseTableCellReturnTypeSelf, UseTableContext, UseTableContextSelf, UseTableParameters, UseTableParametersSelf, UseTableReturnType, UseTableRowContext, UseTableRowParameters, UseTableRowParametersSelf, UseTableRowReturnType, UseTableSectionContext, UseTableSectionParameters, UseTableSectionParametersSelf, UseTableSectionReturnType, useTable, useTableCell, useTableRow, useTableSection, TabInfo, TabPanelInfo, TabsChangeEvent, UseTab, UseTabLabelParameters, UseTabLabelReturnTypeWithHooks, UseTabList, UseTabListLabel, UseTabListLabelReturnTypeInfo, UseTabListParameters, UseTabListReturnType, UseTabPanel, UseTabPanelParameters, UseTabPanelReturnType, UseTabPanelReturnTypeSelf, UseTabPanelsContext, UseTabParameters, UseTabReturnType, UseTabsContext, UseTabsParameters, UseTabsParametersSelf, UseTabsReturnType, useTab, useTabPanel, useTabs, ToastInfo, ToastsContext, ToastsContextSelf, UseToastParameters, UseToastParametersSelf, UseToastReturnType, UseToastReturnTypeSelf, UseToastsParameters, UseToastsParametersSelf, UseToastsReturnType, useToast, useToasts, UseToolbarChildParameters, UseToolbarChildParametersSelf, UseToolbarChildReturnType, UseToolbarContext, UseToolbarContextSelf, UseToolbarParameters, UseToolbarParametersSelf, UseToolbarReturnType, UseToolbarSubInfo, useToolbar, useToolbarChild, TooltipState, TooltipStatus, UseTooltipParameters, UseTooltipParametersSelf, UseTooltipReturnType, UseTooltipReturnTypeSelf, useTooltip, Accordion, AccordionProps, AccordionSection, AccordionSectionProps, Button, ButtonProps, CheckboxGroup, CheckboxGroupChild, CheckboxGroupChildProps, CheckboxGroupParent, CheckboxGroupParentProps, CheckboxGroupProps, Checkbox, CheckboxProps, defaultRenderCheckboxLike, Dialog, DialogProps, defaultRenderPortal, Drawer, DrawerProps, Gridlist, GridlistChild, GridlistChildProps, GridlistProps, GridlistRow, GridlistRowProps, defaultRenderGridlistChild, Heading, HeadingReset, GroupedListbox, Listbox, ListboxItem, ListboxItemProps, ListboxProps, Menu, MenuItem, MenuItemProps, MenuProps, Menubar, MenubarItem, MenubarItemProps, MenubarProps, Progress, ProgressProps, ProgressWithHandler, ProgressWithHandlerProps, Radio, RadioGroup, RadioGroupProps, RadioProps, Slider, SliderProps, SliderThumb, SliderThumbProps, Table, TableCell, TableCellProps, TableProps, TableRow, TableRowProps, TableSection, TableSectionProps, Tab, TabPanel, TabPanelProps, TabProps, Tabs, TabsProps, Toast, ToastProps, Toasts, ToastsProps, Toolbar, ToolbarChild, ToolbarChildProps, ToolbarProps, Tooltip, TooltipProps, ParentDepthContext, useDefault, setDebugLogging };
export { EventDetail } from "preact-prop-helpers";
export type { DisabledType, ElementFromTag, ElementToTag, PickByType, TagSensitiveProps };
//# sourceMappingURL=index.react.d.ts.map