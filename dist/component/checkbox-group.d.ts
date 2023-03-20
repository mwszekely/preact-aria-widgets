import { Ref, RenderableProps, VNode } from "preact";
import { OmitStrong } from "../props.js";
import { CheckboxGroupInfo, UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnType, UseCheckboxGroupParameters, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnType, UseCheckboxGroupReturnType } from "../use-checkbox-group.js";
import { PartialExcept } from "./util.js";
type Get<T, K extends keyof T> = T[K];
export interface CheckboxGroupPropsBase<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends RenderableProps<{}>, Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "linearNavigationParameters">, Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "checkboxGroupParameters">, Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rearrangeableChildrenParameters">, Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "sortableChildrenParameters">, Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "typeaheadNavigationParameters">, Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "staggeredChildrenParameters">, Get<UseCheckboxGroupParameters<ParentElement, TabbableChildElement, M>, "rovingTabIndexParameters"> {
    ref?: Ref<UseCheckboxGroupReturnType<ParentElement, TabbableChildElement, M>>;
}
export interface CheckboxGroupParentPropsBase<TCE extends Element> extends Pick<CheckboxGroupInfo<TCE>, "index">, Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "rovingTabIndexChildParameters">, Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "sortableChildParameters">, Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters">, OmitStrong<Get<UseCheckboxGroupParentParameters<TCE, CheckboxGroupInfo<TCE>>, "info">, "checkboxInfo"> {
    ref?: Ref<UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}
export interface CheckboxGroupChildPropsBase<TCE extends Element> extends Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "checkboxGroupChild">, Pick<CheckboxGroupInfo<TCE>, "index">, Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "rovingTabIndexChildParameters">, Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "sortableChildParameters">, Get<UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>, "textContentParameters"> {
    focusSelf: UseCheckboxGroupChildParameters<TCE, CheckboxGroupInfo<TCE>>["info"]["focusSelf"];
    ref?: Ref<UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>>;
}
export interface CheckboxGroupProps<ParentElement extends Element, TabbableChildElement extends Element, M extends CheckboxGroupInfo<TabbableChildElement>> extends PartialExcept<CheckboxGroupPropsBase<ParentElement, TabbableChildElement, M>, never> {
    render(info: UseCheckboxGroupReturnType<ParentElement, TabbableChildElement, M>): VNode<any>;
}
export interface CheckboxGroupParentProps<TCE extends Element> extends PartialExcept<CheckboxGroupParentPropsBase<TCE>, "index" | "getSortValue" | "focusSelf"> {
    render(parentCheckboxInfo: UseCheckboxGroupParentReturnType<TCE, CheckboxGroupInfo<TCE>>): VNode<any>;
}
export interface CheckboxGroupChildProps<TCE extends Element> extends PartialExcept<CheckboxGroupChildPropsBase<TCE>, "index" | "checked" | "onChangeFromParent" | "getSortValue" | "focusSelf"> {
    render(info: UseCheckboxGroupChildReturnType<TCE, CheckboxGroupInfo<TCE>>): VNode<any>;
}
export declare const CheckboxGroup: <ParentElement extends Element, TabbableChildElement extends Element>({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, ..._rest }: CheckboxGroupProps<ParentElement, TabbableChildElement, CheckboxGroupInfo<TabbableChildElement>>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const CheckboxGroupParent: <TCE extends Element>({ render, index, focusSelf, hidden, getText, getSortValue, ..._rest }: CheckboxGroupParentProps<TCE>, ref?: Ref<any>) => VNode<any>;
export declare const CheckboxGroupChild: <TCE extends Element>({ index, render, checked, onChangeFromParent, getSortValue, hidden, getText, focusSelf, ..._rest }: CheckboxGroupChildProps<TCE>, ref?: Ref<any>) => VNode<any>;
export {};
//# sourceMappingURL=checkbox-group.d.ts.map