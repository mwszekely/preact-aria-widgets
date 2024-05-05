import { ComponentType, h, PreactContext, Ref } from "preact";
import { ElementProps } from "preact-prop-helpers";
export { enhanceEvent, EventDetail, monitored, type EnhancedEventHandler, type TargetedEnhancedEvent } from "preact-prop-helpers";
export type RefFromTag<T extends keyof h.JSX.IntrinsicElements> = NonNullable<h.JSX.IntrinsicElements[T]["ref"]> & Ref<any>;
export type ElementFromRef<R extends Ref<any>> = R extends Ref<infer E> ? E : EventTarget;
export type ElementFromTag<T extends keyof h.JSX.IntrinsicElements> = ElementFromRef<RefFromTag<T>>;
export type Get<T, K extends keyof T> = T[K];
export type Get2<T, K1 extends keyof T, K2 extends keyof T> = Get<T, K2> & Get<T, K1>;
export type Get3<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T> = Get2<T, K2, K3> & Get<T, K1>;
export type Get4<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T> = Get3<T, K2, K3, K4> & Get<T, K1>;
export type Get5<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T> = Get4<T, K2, K3, K4, K5> & Get<T, K1>;
export type Get6<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T> = Get5<T, K2, K3, K4, K5, K6> & Get<T, K1>;
export type Get7<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T> = Get6<T, K2, K3, K4, K5, K6, K7> & Get<T, K1>;
export type Get8<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T> = Get7<T, K2, K3, K4, K5, K6, K7, K8> & Get<T, K1>;
export type Get9<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T> = Get8<T, K2, K3, K4, K5, K6, K7, K8, K9> & Get<T, K1>;
export type Get10<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T> = Get9<T, K2, K3, K4, K5, K6, K7, K8, K9, K10> & Get<T, K1>;
export type Get11<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T> = Get10<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11> & Get<T, K1>;
export type Get12<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T> = Get11<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12> & Get<T, K1>;
export type Get13<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T> = Get12<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13> & Get<T, K1>;
export type Get14<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T> = Get13<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14> & Get<T, K1>;
export type Get15<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T> = Get14<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15> & Get<T, K1>;
export type Get16<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T, K16 extends keyof T> = Get15<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16> & Get<T, K1>;
export type Get17<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T, K16 extends keyof T, K17 extends keyof T> = Get16<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17> & Get<T, K1>;
export type Get18<T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T, K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T, K9 extends keyof T, K10 extends keyof T, K11 extends keyof T, K12 extends keyof T, K13 extends keyof T, K14 extends keyof T, K15 extends keyof T, K16 extends keyof T, K17 extends keyof T, K18 extends keyof T> = Get17<T, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18> & Get<T, K1>;
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
export declare function overwriteWithWarning<P extends {}, K extends keyof P>(componentName: string, props: P, propName: K, newValue: P[K]): void;
export declare function useContextWithWarning<T>(context: PreactContext<T>, parentContextName: string): T;
export type PropModifier<T extends EventTarget> = (props: ElementProps<T>) => ElementProps<T>;
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