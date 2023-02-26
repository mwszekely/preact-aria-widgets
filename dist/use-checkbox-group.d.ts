import { CompleteListNavigationContext, PassiveStateUpdater, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType } from "preact-prop-helpers";
import { StateUpdater } from "preact/hooks";
import { EnhancedEvent, OmitStrong } from "./props.js";
import { CheckboxCheckedType } from "./use-checkbox-like.js";
export type CheckboxGroupChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, {
    childrenChecked: boolean | Map<number, boolean | "mixed">;
}>;
export interface UseCheckboxGroupParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends OmitStrong<UseCompleteListNavigationParameters<ParentElement, TabbableChildElement, M>, "paginatedChildrenParameters" | "singleSelectionParameters"> {
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
export interface UseCheckboxGroupChildParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, "checkboxInfo">, "managedChildParameters" | "singleSelectionChildParameters"> {
    context: CheckboxGroupContext<any, TCE, M>;
    checkboxGroupChild: {
        checked: CheckboxCheckedType;
        onChangeFromParent(checked: CheckboxCheckedType, e: Event): void | Promise<void>;
    };
    managedChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, never>["managedChildParameters"], never>;
}
export interface UseCheckboxGroupChildReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, "singleSelectionChildReturn"> {
    checkboxGroupChild: {
        onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
        onChildCheckedChange: (checked: CheckboxCheckedType) => void;
    };
}
export type UseCheckboxGroupChild<InputElement extends Element, LabelElement extends Element, TCE extends InputElement | LabelElement, M extends CheckboxGroupInfo<TCE>> = (args: UseCheckboxGroupChildParameters<TCE, M>) => UseCheckboxGroupChildReturnType<TCE, M>;
export interface UseCheckboxGroupReturnType<GroupElement extends Element, TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends UseCompleteListNavigationReturnType<GroupElement, TCE, M> {
    context: CheckboxGroupContext<GroupElement, TCE, M>;
}
export interface UseCheckboxGroupParentParameters<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildParameters<TCE, M, never>, "managedChildParameters" | "singleSelectionChildParameters"> {
    context: CheckboxGroupContext<any, TCE, M>;
    managedChildParameters: OmitStrong<UseCompleteListNavigationChildParameters<TCE, CheckboxGroupInfo<TCE>, never>["managedChildParameters"], never>;
}
export interface UseCheckboxGroupParentReturnType<TCE extends Element, M extends CheckboxGroupInfo<TCE>> extends OmitStrong<UseCompleteListNavigationChildReturnType<TCE, M>, "pressParameters"> {
    checkboxGroupParentReturn: {
        checked: CheckboxCheckedType;
        getPercent(): number;
        onParentCheckedChange: (e: Event) => Promise<void>;
    };
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
 *
 *
 * @param param0
 * @returns
 */
export declare function useCheckboxGroup<GroupElement extends Element, TCE extends Element>({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, rovingTabIndexParameters, typeaheadNavigationParameters, staggeredChildrenParameters }: UseCheckboxGroupParameters<GroupElement, TCE, CheckboxGroupInfo<TCE>>): UseCheckboxGroupReturnType<GroupElement, TCE, CheckboxGroupInfo<TCE>>;
export declare function useCheckboxGroupParent<TCE extends Element>({ completeListNavigationChildParameters, context, managedChildParameters, rovingTabIndexChildParameters, textContentParameters, sortableChildParameters, }: UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>): UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>;
/**
 * Implements the "child" part of a checkbox group.
 *
 * Does not implement any actual "checkbox" functionality,
 * but it does tell you what to do *with* a checkbox.
 *
 * (That is to say, use `onChildCheckedChange` whenever
 * your checkbox or checkbox-like thing changes, and
 * properly implement `onChangeFromParent` to work
 * properly when the parent changes)
 *
 * @param param0
 * @returns
 */
export declare function useCheckboxGroupChild<TCE extends Element>({ checkboxGroupChild, completeListNavigationChildParameters, context, managedChildParameters, textContentParameters, rovingTabIndexChildParameters, sortableChildParameters, }: UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>): UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>;
export {};
//# sourceMappingURL=use-checkbox-group.d.ts.map