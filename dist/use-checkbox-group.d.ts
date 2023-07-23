import { CompleteListNavigationContext, PassiveStateUpdater, TargetedOmit, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType } from "preact-prop-helpers";
import { StateUpdater } from "preact/hooks";
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
export interface UseCheckboxGroupParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends OmitStrong<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters" | "paginatedChildrenParameters" | "singleSelectionParameters" | "rovingTabIndexParameters">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters", "arrowKeyDirection">, TargetedOmit<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "rovingTabIndexParameters", "focusSelfParent"> {
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
export interface CheckboxGroupInfo<TCE extends Element> extends UseCompleteListNavigationChildInfo<TCE> {
    checkboxInfo: (CheckboxGroupInfoBase1<TCE> | CheckboxGroupInfoBase2<TCE>);
}
export interface UseCheckboxGroupChildParametersSelf {
    checked: CheckboxCheckedType;
    onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
}
export interface UseCheckboxGroupChildParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M>, "info"> {
    context: CheckboxGroupContext<any, TCE, M>;
    info: Omit<UseCompleteListNavigationChildParameters<TCE, M>["info"], "checkboxInfo">;
    checkboxGroupChildParameters: UseCheckboxGroupChildParametersSelf;
}
export interface UseCheckboxGroupChildReturnTypeSelf {
    onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
    onChildCheckedChange: (checked: CheckboxCheckedType) => void;
}
export interface UseCheckboxGroupChildReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, "singleSelectionChildReturn"> {
    checkboxGroupChildReturn: UseCheckboxGroupChildReturnTypeSelf;
}
export interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends UseCompleteListNavigationReturnType<GroupElement, TCE, M> {
    context: CheckboxGroupContext<GroupElement, TCE, M>;
}
export interface UseCheckboxGroupParentParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M>, "info"> {
    context: CheckboxGroupContext<any, TCE, M>;
    info: OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>>["info"], never>;
}
export interface UseCheckboxGroupParentReturnTypeSelf {
    checked: CheckboxCheckedType;
    getPercent(): number;
    onParentCheckedChange: (e: Event) => Promise<void>;
}
export interface UseCheckboxGroupParentReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, never> {
    checkboxGroupParentReturn: UseCheckboxGroupParentReturnTypeSelf;
}
export interface CheckboxGroupContext<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends CompleteListNavigationContext<GroupElement, TCE, M> {
    checkboxGroupParentContext: {
        setSetter: PassiveStateUpdater<StateUpdater<string> | null, Event>;
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
 * @compositeParams
 *
 * @hasChild {@link useCheckboxGroupParent}
 * @hasChild {@link useCheckboxGroupChild}
 */
export declare function useCheckboxGroup<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE> = CheckboxGroupInfo<TCE>>({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation }, ...listNavParameters }: UseCheckboxGroupParameters<GroupElement, TCE, M>): UseCheckboxGroupReturnType<GroupElement, TCE, M>;
/**
 * Implements the logic for the parent checkbox (but not the checkbox itself).
 *
 * @compositeParams
 */
export declare function useCheckboxGroupParent<TCE extends Element, M extends CheckboxGroupInfo<TCE> = CheckboxGroupInfo<TCE>>({ context, info, textContentParameters }: UseCheckboxGroupParentParameters<TCE, M>): UseCheckboxGroupParentReturnType<TCE, M>;
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
export declare function useCheckboxGroupChild<TCE extends Element, M extends CheckboxGroupInfo<TCE> = CheckboxGroupInfo<TCE>>({ checkboxGroupChildParameters, context, info, textContentParameters, }: UseCheckboxGroupChildParameters<TCE, M>): UseCheckboxGroupChildReturnType<TCE, M>;
export {};
//# sourceMappingURL=use-checkbox-group.d.ts.map