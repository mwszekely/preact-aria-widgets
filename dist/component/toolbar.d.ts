import { Ref, VNode } from "preact";
import { Get, OmitStrong } from "../props.js";
import { UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "../use-toolbar.js";
import { PartialExcept } from "./util.js";
export interface ToolbarPropsBase<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "linearNavigationParameters">, Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "rovingTabIndexParameters">, Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "typeaheadNavigationParameters">, Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "sortableChildrenParameters">, Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "rearrangeableChildrenParameters">, Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "labelParameters">, Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "staggeredChildrenParameters">, Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "toolbarParameters">, Get<UseToolbarParameters<ToolbarContainerElement, ToolbarChildElement, M>, "singleSelectionParameters"> {
    ref?: Ref<UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>>;
}
export interface ToolbarChildPropsBase<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends Get<UseToolbarChildParameters<ToolbarChildElement, M>, "textContentParameters">, Get<UseToolbarChildParameters<ToolbarChildElement, M>, "toolbarChildParameters">, Pick<Get<UseToolbarChildParameters<any, any>, "info">, "getSortValue" | "index" | "untabbable" | "unselectable"> {
    focusSelf?: M["focusSelf"];
    info?: OmitStrong<Get<UseToolbarChildParameters<ToolbarChildElement, M>, "info">, never>;
    ref?: Ref<UseToolbarChildReturnType<ToolbarChildElement, M>>;
}
export interface ToolbarProps<ToolbarContainerElement extends Element, ToolbarChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarPropsBase<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>, "orientation" | "ariaLabel"> {
    render(info: UseToolbarReturnType<ToolbarContainerElement, ToolbarChildElement, LabelElement, M>): VNode<any>;
}
export interface ToolbarChildProps<ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement>> extends PartialExcept<ToolbarChildPropsBase<ToolbarChildElement, M>, "getSortValue" | "index" | "disabledProp"> {
    render(info: UseToolbarChildReturnType<ToolbarChildElement, M>): VNode<any>;
}
export declare const Toolbar: <ContainerElement extends Element, ChildElement extends Element, LabelElement extends Element, M extends UseToolbarSubInfo<ChildElement> = UseToolbarSubInfo<ChildElement>>({ render, role, collator, disableHomeEndKeys, disabled, compare, getIndex, navigatePastEnd, navigatePastStart, pageNavigationSize, selectedIndex, onSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, staggered, ariaLabel, ariaPropName, selectionMode, untabbable, onNavigateLinear, onNavigateTypeahead }: ToolbarProps<ContainerElement, ChildElement, LabelElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
export declare const ToolbarChild: <ToolbarChildElement extends Element, M extends UseToolbarSubInfo<ToolbarChildElement> = UseToolbarSubInfo<ToolbarChildElement>>({ index, render, focusSelf, getSortValue, getText, unselectable, disabledProp, untabbable, info: uinfo }: ToolbarChildProps<ToolbarChildElement, M>, ref?: Ref<any>) => import("preact").JSX.Element;
//# sourceMappingURL=toolbar.d.ts.map