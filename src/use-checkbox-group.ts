import { h } from "preact";
import { useEffect, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationParameters, useMergedProps, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";
import { enhanceEvent, EventDetail } from "./props";


export type CheckboxGroupChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { childrenChecked: boolean | Map<number, boolean | "mixed"> } };

export interface UseCheckboxGroupParameters<E extends Element> extends UseListNavigationParameters {
    /**
     * This is called whenever the parent checkbox is changed and an update of
     * all the children needs to occur.
     * 
     * `event[EventDetail].childrenChecked` will be 
     * * true when all children need to become checked
     * * false when all children need to become unchecked
     * * A `Map<index,checked>` of each child's status when reverting to "mixed".
     * 
     * Because we're dealing with controlled components here, and the data for
     * what checkboxes are checked live *outside* of any of these hooks,
     * it's you who's responsible for listening for this event, modifying the
     * data, and re-rendering appropriately.
     * 
     * Highly recommended to, for example, add each child's `onInput` event handler
     * available in the child info the parent gets so it can call the handler
     * remotely from `managedCheckboxes`.
     * @param event 
     */
    onUpdateChildren(event: CheckboxGroupChangeEvent<h.JSX.TargetedEvent<E>>): void;
}

export interface UseCheckboxGroupChildInfo extends UseListNavigationChildInfo {
    /**
     * The id attribute used for the child.
     */
    id: string;

    /**
     * The current checked state of this child.
     * 
     * This is used by the parent whenever it's interacted with 
     * and about to force every one to be something different -- 
     * it will save the state of all child checkboxes for later
     * by asking each one what its current state is individually
     * at that moment.
     * 
     * All the checkbox's states are captured when the parent
     * is in the "mixed" state and is clicked. It keeps them
     * that way until the same conditions arise again.
     */
    getChecked(): boolean | "mixed";
}

export type UseCheckboxGroupParentProps<InputElement extends Element> = <P extends h.JSX.HTMLAttributes<InputElement>>(props: P) => h.JSX.HTMLAttributes<InputElement>



export type UseCheckboxGroupChildParameters<I extends UseCheckboxGroupChildInfo> = UseListNavigationChildParameters<Omit<I, "getChecked">> & { checked: boolean | "mixed" };

export type UseCheckboxGroupChild<ChildElement extends Element, I extends UseCheckboxGroupChildInfo> = (args: UseCheckboxGroupChildParameters<I>) => {
    tabbable: boolean | null;
    useCheckboxGroupChildProps: <P extends h.JSX.HTMLAttributes<ChildElement>>({ tabIndex, ...props }: P) => h.JSX.HTMLAttributes<ChildElement>;
}




/**
 * 
 * 
 * @param param0 
 * @returns 
 */
export function useCheckboxGroup<InputElement extends Element, I extends UseCheckboxGroupChildInfo>({ collator, keyNavigation, shouldFocusOnChange, onUpdateChildren: onUpdateChildrenUnstable }: UseCheckboxGroupParameters<InputElement>) {

    const onUpdateChildren = useStableCallback(onUpdateChildrenUnstable);
    const { managedChildren, useListNavigationChild, useListNavigationProps, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation<InputElement, I>({ collator, keyNavigation, shouldFocusOnChange });

    //const [uncheckedCount, setUnheckedCount] = useState(0);

    const [checkedCount, setCheckedCount] = useState(0);
    const checkedIndices = useRef(new Set<number>());
    //const [selfIsChecked, setSelfIsChecked, getSelfIsChecked] = useState<boolean | "mixed">(false);

    const getSelfIsCheckedUnstable = useCallback(() => {
        const percentage = checkedCount / managedChildren.length;
        return percentage <= 0 ? false : percentage >= 1 ? true : "mixed";
    }, [checkedCount, managedChildren.length]);

    const getSelfIsCheckedStable = useStableCallback(getSelfIsCheckedUnstable);

    // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
    // Otherwise, it's null when the last input was from a child checkbox. 
    const savedCheckedValues = useRef<Map<number, boolean | "mixed"> | null>(null);
    const onCheckboxGroupParentInput = useCallback((e: h.JSX.TargetedEvent<InputElement>) => {

        e.preventDefault();

        const selfIsChecked = getSelfIsCheckedStable();
        if (selfIsChecked === true || (selfIsChecked === false && savedCheckedValues.current == null)) {
            return onUpdateChildren(enhanceEvent(e, { childrenChecked: false }));
        }
        else if (selfIsChecked === "mixed") {

            savedCheckedValues.current = new Map();
            for (const child of managedChildren) {
                savedCheckedValues.current.set(child.index, child.getChecked());
            }

            return onUpdateChildren(enhanceEvent(e, { childrenChecked: true }));
        }
        else {
            return onUpdateChildren(enhanceEvent(e, { childrenChecked: savedCheckedValues.current ?? true }));
        }
    }, [])

    // Keep track of all child IDs, and any time any of them change, 
    // generate a new string with all of them concatenated together
    // (but only once per render);
    const allIds = useRef(new Set<string>());
    const [ariaControls, setAriaControls] = useState("");
    const [updateIndex, setIdUpdateIndex] = useState(0);

    const notifyChecked = useCallback((index: number, checked: boolean | "mixed") => {
        if (checked === true) {
            if (!checkedIndices.current.has(index)) {
                setCheckedCount(c => (c + 1));
                checkedIndices.current.add(index);
            }
        }
        else {
            if (checkedIndices.current.has(index)) {
                setCheckedCount(c => (c - 1));
                checkedIndices.current.delete(index);
            }
        }
    }, [setCheckedCount, checkedIndices]);

    /*useEffect(() => {
        let percentage = checkedCount / managedChildren.length;
        setSelfIsChecked(percentage <= 0 ? false : percentage >= 1 ? true : "mixed")
    }, [setSelfIsChecked, managedChildren.length, checkedCount]);*/

    const useCheckboxGroupParentProps: UseCheckboxGroupParentProps<InputElement> = useCallback(<P extends h.JSX.HTMLAttributes<InputElement>>(props: P) => {
        return useMergedProps<InputElement>()({ "aria-controls": ariaControls }, props);
    }, [ariaControls]);

    useEffect(() => {
        setAriaControls(Array.from(allIds.current).join(" "));
    }, [updateIndex])

    const useCheckboxGroupChild: UseCheckboxGroupChild<InputElement, I> = useCallback(function ({ index, text, checked, id, ...rest }: UseCheckboxGroupChildParameters<I>) {

        const getChecked = useStableGetter(checked);

        useEffect(() => {
            allIds.current.add(id);
            setIdUpdateIndex(i => ++i);

            return () => {
                allIds.current.delete(id);
                setIdUpdateIndex(i => ++i);
            }
        }, [id]);


        useEffect(() => {
            notifyChecked(index, checked);
        }, [index, checked]);

        const { tabbable, useListNavigationChildProps } = useListNavigationChild({ index, text, id, getChecked, ...rest } as unknown as UseListNavigationChildParameters<I>);

        return {
            tabbable,
            useCheckboxGroupChildProps: useCallback(<P extends h.JSX.HTMLAttributes<InputElement>>(props: P) => useMergedProps<InputElement>()({}, useListNavigationChildProps(useListNavigationProps(props))), [useListNavigationProps, useListNavigationChildProps])
        }


    }, [useListNavigationProps, notifyChecked, useListNavigationChild]);

    return {
        managedCheckboxes: managedChildren,
        useCheckboxGroupChild,
        useCheckboxGroupParentProps,
        parentIsChecked: getSelfIsCheckedUnstable() as boolean | "mixed",
        parentPercentChecked: (checkedCount / managedChildren.length),
        onCheckboxGroupParentInput,
        tabbableIndex,
        focus: focusCurrent,
        currentTypeahead,
        invalidTypeahead,
        managedChildren
    };
}