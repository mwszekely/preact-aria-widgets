import { h } from "preact";
import { MergedProps, useEffect, useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildPropsReturnType, UseListNavigationParameters, useMergedProps, useStableGetter, useState } from "preact-prop-helpers";
import { useCallback, useRef } from "preact/hooks";


export interface UseCheckboxGroupParameters extends UseListNavigationParameters {}

export interface UseCheckboxGroupChildInfo extends UseListNavigationChildInfo {
    id: string;
    setChecked(checked: boolean | "mixed"): void;
    getChecked(): boolean | "mixed";
}

export type UseCheckboxGroupChildParameters = Omit<UseListNavigationChildParameters<UseCheckboxGroupChildInfo>, "getChecked"> & { checked: boolean | "mixed" };
export type UseCheckboxGroupChild<ChildElement extends Element> = (args: UseCheckboxGroupChildParameters) => {
    tabbable: boolean;
    useCheckboxGroupChildProps: <P extends h.JSX.HTMLAttributes<ChildElement>>({ tabIndex, ...props }: P) => MergedProps<ChildElement, { onInput: () => void; }, UseListNavigationChildPropsReturnType<ChildElement, P>>;
}

/**
 * Refers to three different types of elements:
 * 
 * 1. The parent checkbox, that represents the state of all the child checkboxes.
 * 2. The child container, that is probably a <div> element that contains all the child checkboxes.
 * 3. The child checkboxes.
 * 
 * @param param0 
 * @returns 
 */
export function useCheckboxGroup<InputElement extends Element>({ collator, keyNavigation, shouldFocusOnChange }: UseCheckboxGroupParameters) {
    
    const { managedChildren, useListNavigationChild, tabbableIndex, focusCurrent, currentTypeahead, invalidTypeahead } = useListNavigation<InputElement, UseCheckboxGroupChildInfo>({ collator, keyNavigation, shouldFocusOnChange });

    //const [uncheckedCount, setUnheckedCount] = useState(0);

    const [checkedCount, setCheckedCount] = useState(0);
    const checkedIndices = useRef(new Set<number>());
    const [selfIsChecked, setSelfIsChecked, getSelfIsChecked] = useState<boolean | "mixed">(false);

    // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
    // Otherwise, it's null when the last input was from a child checkbox. 
    const savedCheckedValues = useRef<Map<number, boolean | "mixed"> | null>(null);
    const onCheckboxGroupInput = useCallback((e: h.JSX.TargetedEvent<InputElement>) => {

        // The first time we start interacting with the parent checkbox,
        // save the current child states
        if (savedCheckedValues.current == null) {
            savedCheckedValues.current = new Map();
            for (let child of managedChildren) {
                savedCheckedValues.current.set(child.index, child.getChecked());
            }
        }

        const selfIsChecked = getSelfIsChecked();
        if (selfIsChecked === true) {
            for (let child of managedChildren) {
                child.setChecked(false);
            }
        }
        else if (selfIsChecked === "mixed") {
            for (let child of managedChildren) {
                child.setChecked(true)
            }
        }
        else {
            for (let child of managedChildren) {
                child.setChecked(savedCheckedValues.current.get(child.index) ?? false);
            }
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

    useEffect(() => {
        let percentage = checkedCount / managedChildren.length;
        setSelfIsChecked(percentage <= 0 ? false : percentage >= 1 ? true : "mixed")
    }, [setSelfIsChecked, managedChildren.length, checkedCount]);

    const useCheckboxGroupCheckboxProps = useCallback(<P extends h.JSX.HTMLAttributes<InputElement>>(props: P) => {
        return useMergedProps<InputElement>()({ "aria-controls": ariaControls }, props);
    }, [ariaControls]);

    useEffect(() => {
        setAriaControls(Array.from(allIds.current).join(" "));
    }, [updateIndex])

    const useCheckboxGroupChild: UseCheckboxGroupChild<InputElement> = useCallback(function ({ index, text, checked, id, setChecked }: UseCheckboxGroupChildParameters) {

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

        const { tabbable, useListNavigationChildProps, useListNavigationSiblingProps } = useListNavigationChild({ index, text, id, getChecked, setChecked });

        const onInput = useCallback(() => { savedCheckedValues.current = null; }, [savedCheckedValues])

        return {
            tabbable,
            useCheckboxGroupChildProps: useCallback(<P extends h.JSX.HTMLAttributes<InputElement>>(props: P) => useMergedProps<InputElement>()({ onInput }, useListNavigationChildProps(props)), [onInput])
        }


    }, [notifyChecked, useListNavigationChild]);

    return { useCheckboxGroupChild, useCheckboxGroupCheckboxProps, selfIsChecked, percentChecked: (checkedCount / managedChildren.length), onCheckboxGroupInput, tabbableIndex, focus: focusCurrent, currentTypeahead, invalidTypeahead };
}

