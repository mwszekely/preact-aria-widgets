import { h, Ref } from "preact";
import { useCallback } from "preact/hooks";

export type RefFromTag<T extends keyof h.JSX.IntrinsicElements> = NonNullable<h.JSX.IntrinsicElements[T]["ref"]>;
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

export function enhanceEvent<E extends Event, Detail extends object>(e: E, detail: Detail): E & { [EventDetail]: Detail } {
    const event = e as E & { [EventDetail]: Detail };
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

let debug = false;
export function setDebugLogging(logging: boolean) {
    debug = logging;
}

export type DebugLogTypes = 
"useAriaAccordian" | "useAriaAccordianSection" | 
"useAriaButton" | 
"useAriaCheckbox" |
"useAriaCheckboxGroup" | "useAriaCheckboxGroupParent" | "useAriaCheckboxGroupChild" | 
"useAriaDialog" | "useAriaDrawer" | 
"useAriaListboxMulti" | "useAriaListboxMultiItem" | 
"useAriaListboxSingle" | "useAriaListboxSingleItem" | 
"useAriaMenu" | "useAriaMenuSurface" | "useAriaMenuItem" | "useAriaFocusSentinel" | "useAriaMenuSurfaceSentinel" |
"useAriaRadioGroup" | "useAriaRadio" | 
"useAriaSlider" | "useAriaSliderThumb" | 
"useAriaTable" | "useAriaTableRow" | "useAriaTableCell" | "useAriaTableBody" | 
"useAriaTabs" | "useAriaTabList" | "useAriaTab" | "useAriaTabPanel" |  
"useAriaToasts" | "useAriaToast" | 
"useAriaTooltip" | "useAriaTooltipTooltip" | "useAriaTooltipTrigger";

export function debugLog(who: DebugLogTypes, ...args: Parameters<(typeof console)["log"]>) {
    if (debug)
        console.debug(who + ":", ...args);
}
