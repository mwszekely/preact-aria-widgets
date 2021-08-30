import { h, Ref } from "preact";
import { useState } from "preact-prop-helpers/use-state";
import { useLayoutEffect } from "preact/hooks";

export type RefFromTag<T extends keyof h.JSX.IntrinsicElements> = NonNullable<h.JSX.IntrinsicElements[T]["ref"]>;
export type ElementFromRef<R extends Ref<any>> = R extends Ref<infer E> ? E : EventTarget;
export type ElementFromTag<T extends keyof h.JSX.IntrinsicElements> = ElementFromRef<RefFromTag<T>>;

type ElementToTag<E extends EventTarget> = keyof SubType<HTMLElementTagNameMap, E>;
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

export function enhanceEvent<E extends Event, Detail extends object>(e: E, detail: Detail): E & { [EventDetail]: Detail } {
    let event = e as E & { [EventDetail]: Detail };
    event[EventDetail] = detail;
    return event;
}



/**
 * Helper function for letting children know when they are or are not the
 * current selected/expanded/focused/whatever child.
 * 
 * Automatically handles when children are mounted & unmounted and such.
 * 
 * @param activatedIndex What index the current selected (etc.) child is
 * @param length How many children exist (as managedChildren.length)
 * @param setFlag A function that probably looks like (i, flag) => managedChildren[i].setOpen(flag)
 */
 export function useChildFlag(activatedIndex: number | null | undefined, length: number, setFlag: (i: number, set: boolean) => void) {

    // Any time a new activated index is given, 
    // collapse the old section and expand the new one.
    const [prevActivatedIndex, setPrevActivatedIndex, getPrevActivatedIndex] = useState<number | null>(null);
    const [prevChildCount, setPrevChildCount, getPrevChildCount] = useState(length);
    useLayoutEffect(() => {

        // Close any new panels that might have mounted (their open prop is null right now if so)
        for (let i = (getPrevChildCount() ?? 0); i < length; ++i) {
            setFlag(i, i === activatedIndex);
        }
        setPrevChildCount(length);

        // Collapse the currently activated panel
        const prevActivatedIndex = getPrevActivatedIndex();
        if (prevActivatedIndex != null && prevActivatedIndex <= length)
            setFlag(prevActivatedIndex, false);

        // Expand the next panel
        if (activatedIndex != null && activatedIndex <= length) {
            setFlag(activatedIndex, true);
            setPrevActivatedIndex(activatedIndex);
        }

    }, [activatedIndex, length]);
}

