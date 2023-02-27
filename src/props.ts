import { ComponentType, h, Ref } from "preact";

export type RefFromTag<T extends keyof h.JSX.IntrinsicElements> = NonNullable<h.JSX.IntrinsicElements[T]["ref"]> & Ref<any>;
export type ElementFromRef<R extends Ref<any>> = R extends Ref<infer E> ? E : EventTarget;
export type ElementFromTag<T extends keyof h.JSX.IntrinsicElements> = ElementFromRef<RefFromTag<T>>;


export type Get<T, K extends keyof T> = T[K];

// https://stackoverflow.com/questions/46583883/typescript-pick-properties-with-a-defined-type
export type PickByType<Obj, WantedType> = {
    // For each property in Obj, get the type on that property, 
    // and if it extends our WantedType, then we DO include that property.
    // Imagine, like, invisible paranthesis:
    // (P in keyof Obj as Obj[P] extends WantedType | undefined)? P : never
    // Because we can't use a type as a key, but we can use it as an intermediary step!
    [P in keyof Obj as Obj[P] extends WantedType | undefined ? P : never]: Obj[P]
  }
  
export type ElementToTag<E> = keyof PickByType<HTMLElementTagNameMap, E>;

/**
 * * `false`: This component is not disabled.
 * * `"soft"`: This component is disabled, but is still focusable and visible to *all* users.
 * * `"hard"`: This component is disabled, and generally hidden to all but sighted users, using the HTML `disabled` attribute.
 * * `true`: This component is disabled. Whether "hard" or "soft" is chosen is usually chosen based on a `Context`.
 */
export type DisabledType = boolean | "soft" | "hard";

export type OmitStrong<T, K extends keyof T> = Omit<T, K>;

export type PropsOfType<T> =
    T extends keyof h.JSX.IntrinsicElements ? h.JSX.IntrinsicElements[T] : 
    T extends ComponentType<infer P>? P : never;

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

export const EventDetail = Symbol("event-detail");
export type EventDetail = typeof EventDetail;
export type EnhancedEvent<Target extends EventTarget, TypedEvent extends Event, Detail> = h.JSX.TargetedEvent<Target, TypedEvent> & {
    [EventDetail]: Detail;
};


export function enhanceEvent<E extends EventTarget, TypedEvent extends Event, Detail extends object>(e: TypedEvent | h.JSX.TargetedEvent<E, TypedEvent>, detail: Detail): EnhancedEvent<E, TypedEvent, Detail> {
    const event = e as unknown as EnhancedEvent<E, TypedEvent, Detail>;
    event[EventDetail] = detail;
    return event;
}


const alreadyWarned = new Set<string>();

export function overwriteWithWarning<P extends {}, K extends keyof P>(componentName: string, props: P, propName: K, newValue: P[K]): void {
    //const key = `${componentName};${propName}`;
    const oldValue = props[propName];
    if (oldValue != null) {
        if (!alreadyWarned.has(String(propName))) {
            alreadyWarned.add(String(propName));
            console.warn(`The ${String(propName)} attribute on ${componentName} was given a value of ${oldValue} but is being overwritten to ${newValue} for conformance. Consider removing it before passing those props to ${componentName}.`);
        }
    }

    props[propName] = newValue;
}

let debug = false;
export function setDebugLogging(logging: boolean) {
    debug = logging;
}

export type DebugLogTypes =
    "useAccordion" | "useAccordionSection" |
    "useButton" |
    "useCheckbox" |
    "useCheckboxGroup" | "useCheckboxGroupParent" | "useCheckboxGroupChild" |
    "useDialog" | "useDrawer" |
    "useListboxMulti" | "useListboxMultiItem" |
    "useListboxSingle" | "useListboxSingleItem" |
    "useMenubar" | "useMenu" | "useMenuSurface" | "useMenuItem" | "useFocusSentinel" | "useMenuSurfaceSentinel" |
    "useRadioGroup" | "useRadio" |
    "useSlider" | "useSliderThumb" |
    "useTable" | "useTableRow" | "useTableCell" | "useTableBody" |
    "useGridlist" | "useGridlistRow" | "useGridlistChild" | "useGridlistSection" |
    "useTabs" | "useTabList" | "useTab" | "useTabPanel" |
    "useToasts" | "useToast" |
    "useTooltip" | "useTooltipTooltip" | "useTooltipTrigger";

export function debugLog(who: DebugLogTypes, ...args: Parameters<(typeof console)["log"]>) {
    if (debug)
        console.debug(who + ":", ...args);
}

export type PropModifier<T extends EventTarget> = (props: h.JSX.HTMLAttributes<T>) => h.JSX.HTMLAttributes<T>;
export type PropModifier2<P> = (props: P) => P;
export function noop(): void { return; }

// (These do not need to be unique)
export const Prefices = {
    accordionSectionHeaderButton: "ashb-",
    accordionSectionBody: "asb-",
    checkboxLikeInput: "cbli-",
    checkboxLikeLabel: "cbll-",
    dialog: "mdl-",
    dialogTitle: "mdlt-",
    drawer: "mdw-",
    drawerTitle: "mdwt-",
    gridlist: "gl-",
    gridlistLabel: "gll-",
    listbox: "lb-",
    listboxLabel: "lbl-",
    menu: "menu-",
    progressIndicator: "pi-",
    progressLabel: "pl-",
    radioGroup: "rg-",
    radioGroupLabel: "rgl-",
    radio: "rb-",
    radioLabel: "rbl-",
    sliderThumb: "st-",
    table: "tb-",
    tableLabel: "tbl-",
    tablist: "tl-",
    tablistLabel: "tll-",
    tooltip: "tt-",
    toolbar: "tlb-",
    toolbarLabel: "tlbl-"
} as const
