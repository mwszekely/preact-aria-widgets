import { CompleteListNavigationContext, Nullable, PassiveStateUpdater, StateUpdater, TargetedOmit, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, UseGenericChildParameters } from "preact-prop-helpers";
import { EnhancedEventHandler, OmitStrong, TargetedEnhancedEvent } from "./props.js";
import { CheckboxCheckedType } from "./use-checkbox-like.js";
export interface CheckboxGroupChangeEventDetail {
    childrenChecked: boolean | Map<number, boolean | "mixed">;
}
export type TargetedCheckboxGroupChangeEvent = TargetedEnhancedEvent<Event, CheckboxGroupChangeEventDetail>;
export type CheckboxGroupChangeEventHandler = EnhancedEventHandler<Event, CheckboxGroupChangeEventDetail>;
export interface UseCheckboxGroupParametersSelf {
    orientation: "vertical" | "horizontal";
}
export interface UseCheckboxGroupParameters<ParentElement extends Element, TabbableChildElement extends Element> extends OmitStrong<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "linearNavigationParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "rovingTabIndexParameters">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "linearNavigationParameters", "arrowKeyDirection">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, "rovingTabIndexParameters", "focusSelfParent"> {
    checkboxGroupParameters: UseCheckboxGroupParametersSelf;
}
interface CheckboxGroupInfoBaseBase<TCE extends Element> {
    _e?: TCE;
}
interface CheckboxGroupInfoBase<TCE extends Element> extends CheckboxGroupInfoBaseBase<TCE> {
    checkboxChildType: "child" | "parent";
    /** Child-only */
    getChecked: Nullable<() => boolean | "mixed">;
    /** Child-only */
    getLastUserChecked: Nullable<() => boolean | "mixed">;
    /** Child-only */
    setCheckedFromParentInput: Nullable<(newChecked: CheckboxCheckedType, e: Event) => void | Promise<void>>;
}
export interface CheckboxGroupInfo<TCE extends Element> extends UseCompleteListNavigationChildInfo<TCE>, CheckboxGroupInfoBase<TCE> {
}
export interface UseCheckboxGroupChildParametersSelf {
    checked: CheckboxCheckedType;
    onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
}
export interface UseCheckboxGroupChildParameters<TCE extends Element> extends UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable">>, OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info" | "singleSelectionChildParameters" | "multiSelectionChildParameters">, TargetedOmit<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "multiSelectionChildParameters", "initiallyMultiSelected"> {
    checkboxGroupChildParameters: UseCheckboxGroupChildParametersSelf;
}
export interface UseCheckboxGroupChildReturnTypeSelf {
    onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
    onChildCheckedChange: (checked: CheckboxCheckedType) => void;
}
export interface UseCheckboxGroupChildReturnType<TCE extends Element> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, "singleSelectionChildReturn"> {
    checkboxGroupChildReturn: UseCheckboxGroupChildReturnTypeSelf;
}
export interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element> extends OmitStrong<UseCompleteListNavigationReturnType<GroupElement, TCE, CheckboxGroupInfo<TCE>>, "contextChildren" | "contextProcessing"> {
    context: CheckboxGroupContext<TCE>;
}
export interface UseCheckboxGroupParentParameters<TCE extends Element> extends UseGenericChildParameters<CheckboxGroupContext<TCE>, Pick<CheckboxGroupInfo<TCE>, "index" | "focusSelf" | "untabbable">>, OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>, "context" | "info"> {
}
export interface UseCheckboxGroupParentReturnTypeSelf {
    checked: CheckboxCheckedType;
    getPercent(): number;
    onParentCheckedChange: (e: Event) => Promise<void>;
}
export interface UseCheckboxGroupParentReturnType<TCE extends Element> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, CheckboxGroupInfo<TCE>>, never> {
    checkboxGroupParentReturn: UseCheckboxGroupParentReturnTypeSelf;
}
export interface CheckboxGroupContext<TCE extends Element> extends CompleteListNavigationContext<TCE, CheckboxGroupInfo<TCE>> {
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
export declare const useCheckboxGroup: <GroupElement extends Element, TCE extends Element>({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation, ...void2 }, multiSelectionParameters, refElementParameters, typeaheadNavigationParameters, ...void1 }: UseCheckboxGroupParameters<GroupElement, TCE>) => UseCheckboxGroupReturnType<GroupElement, TCE>;
/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 *
 * @compositeParams
 */
export declare const useCheckboxGroupParent: <TCE extends Element>({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters, multiSelectionChildParameters, singleSelectionChildParameters, ...void1 }: UseCheckboxGroupParentParameters<TCE>) => UseCheckboxGroupParentReturnType<TCE>;
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
export declare const useCheckboxGroupChild: <TCE extends Element>({ checkboxGroupChildParameters, context, info: { focusSelf, index, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, multiSelectionChildParameters: { multiSelectionDisabled, onMultiSelectChange, ...void5 }, ...void4 }: UseCheckboxGroupChildParameters<TCE>) => UseCheckboxGroupChildReturnType<TCE>;
export {};
//# sourceMappingURL=use-checkbox-group.d.ts.map