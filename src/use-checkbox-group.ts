import { h } from "preact";
import { ListNavigationChildInfoBase, returnFalse, useEffect, useListNavigation, UseListNavigationParameters, useMergedProps, usePassiveState, useStableCallback, useStableGetter, useState } from "preact-prop-helpers";
import { ManagedChildren } from "preact-prop-helpers/use-child-manager";
import { UseListNavigationChildInfoNeeded } from "preact-prop-helpers/use-list-navigation";
import { StateUpdater, useCallback, useRef } from "preact/hooks";
import { enhanceEvent, EventDetail, TagSensitiveProps } from "./props";
import { usePressEventHandlers } from "./use-button";
import { CheckboxChangeEvent, useAriaCheckbox, UseAriaCheckboxParameters } from "./use-checkbox";


export type CheckboxGroupChangeEvent<EventType extends Event> = EventType & { [EventDetail]: { childrenChecked: boolean | Map<number, boolean | "mixed"> } };

export interface UseCheckboxGroupParameters<K extends string, I extends UseCheckboxGroupChildInfoBase<K>> extends UseListNavigationParameters<K, I> {
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
    //onUpdateChildren(event: CheckboxGroupChangeEvent<h.JSX.TargetedEvent<E>>): void;
}

export interface UseCheckboxGroupChildInfoBase<K extends string> extends ListNavigationChildInfoBase<K> {
    /**
     * The id attribute used for the child.
     */
    //id: string;

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
    getLastUserChecked(): boolean | "mixed";
    onInput: UseAriaCheckboxParameters<any, any>["onInput"];
}


export type UseCheckboxGroupChildParameters<InputElement extends Element, LabelElement extends Element, K extends string = string, I extends UseCheckboxGroupChildInfoBase<K> = UseCheckboxGroupChildInfoBase<K>> = UseAriaCheckboxParameters<InputElement, LabelElement> & { info: Omit<UseListNavigationChildInfoNeeded<K, I>, "getLastUserChecked" | "onInput"> };

export type UseCheckboxGroupChild<InputElement extends Element, LabelElement extends Element, K extends string, I extends UseCheckboxGroupChildInfoBase<K>> = (args: UseCheckboxGroupChildParameters<InputElement, LabelElement, K, I>) => {
    tabbable: boolean | null;
    useCheckboxGroupChildInputProps: ({ tabIndex, ...props }: h.JSX.HTMLAttributes<InputElement>) => h.JSX.HTMLAttributes<InputElement>;
    useCheckboxGroupChildLabelProps: ({ tabIndex, ...props }: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}




/**
 * 
 * 
 * @param param0 
 * @returns 
 */
export function useCheckboxGroup<InputElement extends HTMLElement | SVGElement, LabelElement extends HTMLElement | SVGElement, K extends string = string, I extends UseCheckboxGroupChildInfoBase<K> = UseCheckboxGroupChildInfoBase<K>>({ collator, disableArrowKeys, disableHomeEndKeys, indexDemangler, indexMangler, initialIndex, navigationDirection, noTypeahead, onTabbableIndexChange, typeaheadTimeout, onAfterChildLayoutEffect, onChildrenMountChange, onTabbableRender, onTabbedInTo, onTabbedOutOf }: UseCheckboxGroupParameters<K, I>): UseCheckboxGroupReturnType<InputElement, LabelElement, K, I> {

    //const onUpdateChildren = useStableCallback(onUpdateChildrenUnstable ?? (() => {}));
    const {
        children,
        useListNavigationChild,
        useListNavigationProps,
        currentTypeahead,
        invalidTypeahead,
        getTabbableIndex,
        setTabbableIndex
    } = useListNavigation<InputElement, InputElement | LabelElement, string, I>({
        collator,
        disableArrowKeys,
        disableHomeEndKeys,
        indexDemangler,
        indexMangler,
        initialIndex,
        navigationDirection,
        noTypeahead,
        onTabbableIndexChange,
        typeaheadTimeout,
        onAfterChildLayoutEffect,
        onChildrenMountChange,
        onTabbableRender,
        onTabbedInTo,
        onTabbedOutOf,
    });

    //const [uncheckedCount, setUnheckedCount] = useState(0);


    // Keep track of all child IDs, and any time any of them change, 
    // generate a new string with all of them concatenated together
    // (but only once per render);
    const allIds = useRef(new Set<string>());
    const [ariaControls, setAriaControls] = useState("");
    const [updateIndex, setIdUpdateIndex] = useState(0);


    const [checkedCount, setCheckedCount] = useState(0);
    const checkedIndices = useRef(new Set<number>());
    //const [selfIsChecked, setSelfIsChecked, getSelfIsChecked] = useState<boolean | "mixed">(false);

    const getSelfIsCheckedUnstable = useCallback(() => {
        const percentage = checkedCount / (children.getHighestIndex() + 1);
        return percentage <= 0 ? false : percentage >= 1 ? true : "mixed";
    }, [checkedCount]);

    const getSelfIsCheckedStable = useStableCallback(getSelfIsCheckedUnstable);
    const [setParentCheckboxChecked, setSetParentCheckboxChecked] = useState<StateUpdater<UseAriaCheckboxParameters<any, any>["checked"]> | null>(null);
    useEffect(() => {
        setParentCheckboxChecked?.(checkedCount == 0 ? false : checkedCount == (children.getHighestIndex() + 1) ? true : "mixed");
    }, [setParentCheckboxChecked, checkedCount])

    // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
    // Otherwise, it's null when the last input was from a child checkbox. 
    //const savedCheckedValues = useRef<Map<number, boolean | "mixed"> | null>(null);
    const useCheckboxGroupParentInput = useCallback<UseCheckboxGroupParent<InputElement, LabelElement>>(({ disabled, tagInput, labelPosition, tagLabel }) => {
        const [checked, setChecked] = useState<UseAriaCheckboxParameters<any, any>["checked"]>(false);
        useEffect(() => {
            setSetParentCheckboxChecked(() => setChecked);
        }, [])
        const { useCheckboxInputElement, useCheckboxLabelElement } = useAriaCheckbox<InputElement, LabelElement>({ labelPosition, checked, onInput: onCheckboxGroupParentInput2 as any, disabled, tagInput, tagLabel });
        const { useCheckboxInputElementProps } = useCheckboxInputElement();
        const { useCheckboxLabelElementProps } = useCheckboxLabelElement();
        return {
            useCheckboxGroupParentInputProps: function useCheckboxGroupParentInputProps(props: h.JSX.HTMLAttributes<InputElement>): h.JSX.HTMLAttributes<InputElement> {
                let ret = (useMergedProps<InputElement>(useMergedProps<InputElement>({}, { "aria-controls": ariaControls, onInput: tagInput == "input" ? (e => e.preventDefault()) : undefined } as h.JSX.HTMLAttributes<InputElement>), props));
                return useCheckboxInputElementProps(labelPosition == "separate" ? ret : props);
            },
            useCheckboxGroupParentLabelProps: function useCheckboxGroupParentLabelProps(props: h.JSX.HTMLAttributes<LabelElement>): h.JSX.HTMLAttributes<LabelElement> {
                let ret = (useMergedProps<LabelElement>(useMergedProps<LabelElement>({}, { "aria-controls": ariaControls } as any) as any, props));
                return useCheckboxLabelElementProps(labelPosition == "wrapping" ? ret : props)
            }
        }
    }, [ariaControls]);

    const onCheckboxGroupParentInput2 = useCallback((e: CheckboxChangeEvent<h.JSX.TargetedEvent<InputElement, Event>>) => {

        e.preventDefault();
        debugger;

        const selfIsChecked = getSelfIsCheckedStable();
        let nextChecked = (selfIsChecked === false ? "mixed" : selfIsChecked === "mixed" ? true : false);
        children.forEach(child => {
            child.onInput?.(enhanceEvent(e, { checked: nextChecked == "mixed" ? child.getLastUserChecked() : nextChecked }));
        });
        /*if (selfIsChecked === true || (selfIsChecked === false && savedCheckedValues.current == null)) {
            return onUpdateChildren(enhanceEvent(e, { childrenChecked: false }));
        }
        else if (selfIsChecked === "mixed") {

            savedCheckedValues.current = new Map();
            children.forEach(child => {
                savedCheckedValues.current!.set(child.index, child.getLastUserChecked());
            })

            return onUpdateChildren(enhanceEvent(e, { childrenChecked: true }));
        }
        else {
            return onUpdateChildren(enhanceEvent(e, { childrenChecked: savedCheckedValues.current ?? true }));
        }*/
    }, [])

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
    }, []);

    /*useEffect(() => {
        let percentage = checkedCount / managedChildren.length;
        setSelfIsChecked(percentage <= 0 ? false : percentage >= 1 ? true : "mixed")
    }, [setSelfIsChecked, managedChildren.length, checkedCount]);*/

    /*const useCheckboxGroupParentProps = useCallback((props: h.JSX.HTMLAttributes<InputElement>) => {
        return 
    }, [ariaControls]);*/

    useEffect(() => {
        setAriaControls(Array.from(allIds.current).join(" "));
    }, [updateIndex])

    const useCheckboxGroupChild = useCallback<UseCheckboxGroupChild<InputElement, LabelElement, K, I>>(function ({ info: { index, text, blurSelf, flags, focusSelf, hidden, ...restInfo }, checked, labelPosition, tagLabel, onInput, disabled, tagInput, ...restArgs }: UseCheckboxGroupChildParameters<InputElement, LabelElement, K, I>) {
        labelPosition ??= "separate";
        const [getLastUserChecked, setLastUserChecked] = usePassiveState<boolean | "mixed">(null, returnFalse);
        const { useCheckboxInputElement, useCheckboxLabelElement, inputId, labelId } = useAriaCheckbox<InputElement, LabelElement>({ labelPosition, checked, onInput: useStableCallback<NonNullable<typeof onInput>>(e => { setLastUserChecked(e[EventDetail].checked); onInput?.(e as any); }), disabled, tagInput, tagLabel });
        const getChecked = useStableGetter(checked);

        let controlsId = (labelPosition == "separate" ? inputId : labelId)!;

        useEffect(() => {
            allIds.current.add(controlsId);
            setIdUpdateIndex(i => ++i);

            return () => {
                allIds.current.delete(controlsId);
                setIdUpdateIndex(i => ++i);
            }
        }, [controlsId]);


        useEffect(() => {
            notifyChecked(index, checked);
        }, [index, checked]);

        const { tabbable, useListNavigationChildProps } = useListNavigationChild({ info: { index, text, getLastUserChecked, onInput, blurSelf, flags, focusSelf, hidden, ...restInfo } as unknown as I });

        return {
            tabbable,
            useCheckboxGroupChildInputProps: (props: h.JSX.HTMLAttributes<InputElement>): h.JSX.HTMLAttributes<InputElement> => {
                const { useCheckboxInputElementProps } = useCheckboxInputElement();
                let ret = useCheckboxInputElementProps(props);
                let ret2 = useListNavigationChildProps(useListNavigationProps(ret) as h.JSX.HTMLAttributes<InputElement | LabelElement>);
                return (labelPosition == "separate" ? ret2 : ret) as h.JSX.HTMLAttributes<InputElement>;
            },
            useCheckboxGroupChildLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>): h.JSX.HTMLAttributes<LabelElement> => {
                const { useCheckboxLabelElementProps } = useCheckboxLabelElement();
                let ret = useCheckboxLabelElementProps(props);
                let ret2 = useListNavigationChildProps(useListNavigationProps(ret as {} as h.JSX.HTMLAttributes<InputElement>) as h.JSX.HTMLAttributes<InputElement | LabelElement>);
                return (labelPosition == "wrapping" ? ret2 : ret) as h.JSX.HTMLAttributes<LabelElement>;
            }
        }


    }, []);

    return {
        checkboxes: children,
        useCheckboxGroupChild,
        useCheckboxGroupParentInput,
        parentIsChecked: getSelfIsCheckedUnstable() as boolean | "mixed",
        parentPercentChecked: (checkedCount / (children.getHighestIndex() + 1)),
        currentTypeahead,
        invalidTypeahead
    };
}

export interface UseCheckboxGroupReturnType<InputElement extends HTMLElement | SVGElement, LabelElement extends HTMLElement | SVGElement, K extends string, I extends UseCheckboxGroupChildInfoBase<K>> {
    checkboxes: ManagedChildren<I>;
    /**
     * Each child checkbox must call this hook, *in addition to* `useAriaCheckbox`
     */
    useCheckboxGroupChild: UseCheckboxGroupChild<InputElement, LabelElement, K, I>;
    parentIsChecked: boolean | "mixed";
    parentPercentChecked: number;
    /**
     * The parent checkbox must use this hook
     */
    useCheckboxGroupParentInput: UseCheckboxGroupParent<InputElement, LabelElement>;
    currentTypeahead: string | null;
    invalidTypeahead: boolean | null;
}

export type UseCheckboxGroupParent<InputElement extends HTMLElement | SVGElement, LabelElement extends HTMLElement | SVGElement> = (a: Omit<UseAriaCheckboxParameters<InputElement, LabelElement>, "onInput" | "checked">) => {
    useCheckboxGroupParentInputProps: (props: h.JSX.HTMLAttributes<InputElement>) => h.JSX.HTMLAttributes<InputElement>;
    useCheckboxGroupParentLabelProps: (props: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
};
