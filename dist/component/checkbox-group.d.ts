import { Get4, Get5, Get9 } from "../props.js";
import { UseCheckboxGroupChildParameters, UseCheckboxGroupChildReturnType, UseCheckboxGroupParameters, UseCheckboxGroupParentParameters, UseCheckboxGroupParentReturnType, UseCheckboxGroupReturnType } from "../use-checkbox-group.js";
import { GenericComponentProps } from "./util.js";
export type CheckboxGroupProps<ParentElement extends Element, TabbableChildElement extends Element> = GenericComponentProps<UseCheckboxGroupReturnType<ParentElement, TabbableChildElement>, Get9<UseCheckboxGroupParameters<ParentElement, TabbableChildElement>, "linearNavigationParameters", "checkboxGroupParameters", "rearrangeableChildrenParameters", "sortableChildrenParameters", "typeaheadNavigationParameters", "staggeredChildrenParameters", "rovingTabIndexParameters", "rovingTabIndexParameters", "refElementParameters">, never>;
export type CheckboxGroupParentProps<TCE extends Element> = GenericComponentProps<UseCheckboxGroupParentReturnType<TCE>, Get4<UseCheckboxGroupParentParameters<TCE>, "textContentParameters", "info", "refElementParameters", "hasCurrentFocusParameters">, "index" | "getSortValue" | "focusSelf">;
export type CheckboxGroupChildProps<TCE extends Element> = GenericComponentProps<UseCheckboxGroupChildReturnType<TCE>, Get5<UseCheckboxGroupChildParameters<TCE>, "checkboxGroupChildParameters", "textContentParameters", "info", "refElementParameters", "hasCurrentFocusParameters">, "index" | "getSortValue" | "focusSelf" | "checked" | "onChangeFromParent">;
export declare const CheckboxGroup: <ParentElement extends Element, TabbableChildElement extends Element>({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, compare, staggered, getIndex, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, ...void1 }: CheckboxGroupProps<ParentElement, TabbableChildElement>) => import("preact").JSX.Element;
export declare const CheckboxGroupParent: <TCE extends Element>({ render, index, focusSelf, untabbable, getSortValue, unselectable, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, ..._rest }: CheckboxGroupParentProps<TCE>) => import("preact").JSX.Element;
export declare const CheckboxGroupChild: <TCE extends Element>({ index, render, checked, onChangeFromParent, getSortValue, untabbable, getText, focusSelf, unselectable, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, ...void1 }: CheckboxGroupChildProps<TCE>) => import("preact").JSX.Element;
//# sourceMappingURL=checkbox-group.d.ts.map