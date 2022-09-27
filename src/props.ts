import { h, Ref } from "preact";

export type RefFromTag<T extends keyof h.JSX.IntrinsicElements> = NonNullable<h.JSX.IntrinsicElements[T]["ref"]> & Ref<any>;
export type ElementFromRef<R extends Ref<any>> = R extends Ref<infer E> ? E : EventTarget;
export type ElementFromTag<T extends keyof h.JSX.IntrinsicElements> = ElementFromRef<RefFromTag<T>>;

export type ElementToTag<E extends EventTarget> = keyof SubType<HTMLElementTagNameMap, E>;
type SubType<Base, Condition> = Pick<Base, {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}[keyof Base]>;

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

type WOO = string | number | null | boolean | undefined;

export function warnOnOverwrite<T extends WOO>(componentName: string, propName: string, propValue: WOO, newValue: T): T {
    const key = `${componentName};${propName}`;
    if (propValue != null) {
        if (!alreadyWarned.has(key)) {
            alreadyWarned.add(key);
            console.warn(`The ${propName} attribute on ${componentName} was given a value of ${propValue} but is being overwritten to ${newValue} for conformance. Consider removing it before passing those props to ${componentName}.`);
        }
    }

    return newValue;
}

let debug = true;
export function setDebugLogging(logging: boolean) {
    debug = logging;
}

export type DebugLogTypes =
    "useAccordian" | "useAccordianSection" |
    "useButton" |
    "useCheckbox" |
    "useCheckboxGroup" | "useCheckboxGroupParent" | "useCheckboxGroupChild" |
    "useDialog" | "useDrawer" |
    "useListboxMulti" | "useListboxMultiItem" |
    "useListboxSingle" | "useListboxSingleItem" |
    "useMenu" | "useMenuSurface" | "useMenuItem" | "useFocusSentinel" | "useMenuSurfaceSentinel" |
    "useRadioGroup" | "useRadio" |
    "useSlider" | "useSliderThumb" |
    "useTable" | "useTableRow" | "useTableCell" | "useTableBody" |
    "useTabs" | "useTabList" | "useTab" | "useTabPanel" |
    "useToasts" | "useToast" |
    "useTooltip" | "useTooltipTooltip" | "useTooltipTrigger";

export function debugLog(who: DebugLogTypes, ...args: Parameters<(typeof console)["log"]>) {
    if (debug)
        console.debug(who + ":", ...args);
}

export type PropModifier<T extends EventTarget> = (props: h.JSX.HTMLAttributes<T>) => h.JSX.HTMLAttributes<T>;
