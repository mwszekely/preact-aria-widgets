import { ComponentType, h, Ref } from "preact";
export type RefFromTag<T extends keyof h.JSX.IntrinsicElements> = NonNullable<h.JSX.IntrinsicElements[T]["ref"]> & Ref<any>;
export type ElementFromRef<R extends Ref<any>> = R extends Ref<infer E> ? E : EventTarget;
export type ElementFromTag<T extends keyof h.JSX.IntrinsicElements> = ElementFromRef<RefFromTag<T>>;
export type Get<T, K extends keyof T> = T[K];
export type PickByType<Obj, WantedType> = {
    [P in keyof Obj as Obj[P] extends WantedType | undefined ? P : never]: Obj[P];
};
export type ElementToTag<E> = keyof PickByType<HTMLElementTagNameMap, E>;
/**
 * * `false`: This component is not disabled.
 * * `"soft"`: This component is disabled, but is still focusable and visible to *all* users.
 * * `"hard"`: This component is disabled, and generally hidden to all but sighted users, using the HTML `disabled` attribute.
 * * `true`: This component is disabled. Whether "hard" or "soft" is chosen is usually chosen based on a `Context`.
 */
export type DisabledType = boolean | "soft" | "hard";
export type OmitStrong<T, K extends keyof T> = Omit<T, K>;
export type PropsOfType<T> = T extends keyof h.JSX.IntrinsicElements ? h.JSX.IntrinsicElements[T] : T extends ComponentType<infer P> ? P : never;
/**
 * For times when more than just the abstract element type is needed,
 * but the actual, concrete, implementation-affecting "div" string type.
 *
 * TODO: Should this be the standard for all the non-ARIA hooks?
 * They *never* care about the specific type for the implementation,
 * just for typing, so it wouldn't be necessary,
 * but it would be consistent with these ARIA hooks.
 */
export interface TagSensitiveProps<E extends EventTarget> {
    tag: ElementToTag<E>;
}
export declare const EventDetail: unique symbol;
export type EventDetail = typeof EventDetail;
export type EnhancedEvent<Target extends EventTarget, TypedEvent extends Event, Detail> = h.JSX.TargetedEvent<Target, TypedEvent> & {
    [EventDetail]: Detail;
};
export declare function enhanceEvent<E extends EventTarget, TypedEvent extends Event, Detail extends object>(e: TypedEvent | h.JSX.TargetedEvent<E, TypedEvent>, detail: Detail): EnhancedEvent<E, TypedEvent, Detail>;
export declare function overwriteWithWarning<P extends {}, K extends keyof P>(componentName: string, props: P, propName: K, newValue: P[K]): void;
export declare function setDebugLogging(logging: boolean): void;
export type DebugLogTypes = "useAccordion" | "useAccordionSection" | "useButton" | "useCheckbox" | "useCheckboxGroup" | "useCheckboxGroupParent" | "useCheckboxGroupChild" | "useDialog" | "useDrawer" | "useListboxMulti" | "useListboxMultiItem" | "useListboxSingle" | "useListboxSingleItem" | "useMenubar" | "useMenu" | "useMenuSurface" | "useMenuItem" | "useFocusSentinel" | "useMenuSurfaceSentinel" | "useRadioGroup" | "useRadio" | "useSlider" | "useSliderThumb" | "useTable" | "useTableRow" | "useTableCell" | "useTableBody" | "useGridlist" | "useGridlistRow" | "useGridlistChild" | "useGridlistSection" | "useTabs" | "useTabList" | "useTab" | "useTabPanel" | "useToasts" | "useToast" | "useTooltip" | "useTooltipTooltip" | "useTooltipTrigger";
export declare function debugLog(who: DebugLogTypes, ...args: Parameters<(typeof console)["log"]>): void;
export type PropModifier<T extends EventTarget> = (props: h.JSX.HTMLAttributes<T>) => h.JSX.HTMLAttributes<T>;
export type PropModifier2<P> = (props: P) => P;
export declare function noop(): void;
export declare const Prefices: {
    readonly accordionSectionHeaderButton: "ashb-";
    readonly accordionSectionBody: "asb-";
    readonly checkboxLikeInput: "cbli-";
    readonly checkboxLikeLabel: "cbll-";
    readonly dialog: "mdl-";
    readonly dialogTitle: "mdlt-";
    readonly drawer: "mdw-";
    readonly drawerTitle: "mdwt-";
    readonly gridlist: "gl-";
    readonly gridlistLabel: "gll-";
    readonly listbox: "lb-";
    readonly listboxLabel: "lbl-";
    readonly menu: "menu-";
    readonly progressIndicator: "pi-";
    readonly progressLabel: "pl-";
    readonly radioGroup: "rg-";
    readonly radioGroupLabel: "rgl-";
    readonly radio: "rb-";
    readonly radioLabel: "rbl-";
    readonly sliderThumb: "st-";
    readonly table: "tb-";
    readonly tableLabel: "tbl-";
    readonly tablist: "tl-";
    readonly tablistLabel: "tll-";
    readonly tooltip: "tt-";
    readonly toolbar: "tlb-";
    readonly toolbarLabel: "tlbl-";
};
//# sourceMappingURL=props.d.ts.map