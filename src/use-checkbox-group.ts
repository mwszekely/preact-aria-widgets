import { h } from "preact";
import { returnFalse, useListNavigation, UseListNavigationChildParameters, UseListNavigationParameters, UseListNavigationReturnTypeInfo, useMergedProps, usePassiveState, UseRovingTabIndexChildReturnTypeInfo, useStableCallback, useState } from "preact-prop-helpers";
import { StateUpdater, useCallback, useEffect, useRef } from "preact/hooks";
import { CheckboxCheckedType } from "./use-label";
import { debugLog, EnhancedEvent, enhanceEvent, EventDetail, PropModifier } from "./props";
import { CheckboxChangeEvent, UseCheckboxParameters } from "./use-checkbox";

export type CheckboxGroupChangeEvent<E extends EventTarget> = EnhancedEvent<E, Event, { childrenChecked: boolean | Map<number, boolean | "mixed"> }>;

export interface UseCheckboxGroupParameters extends UseListNavigationParameters<never, never, never, never, never> {
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
    //checkboxGroup: {}
    //onUpdateChildren(event: CheckboxGroupChangeEvent<h.JSX.TargetedEvent<E>>): void;
}

//export interface UseCheckboxGroupChildInfoBase<K extends string> extends ListNavigationChildInfoBase<K> {
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
//    getLastUserChecked(): boolean | "mixed";
//    onInput: UseCheckboxParameters<any, any>["onInput"];
//}

interface CheckboxGroupInfoBase<CBGSubInfo> {
    checked: boolean | "mixed";
    getLastUserChecked(): boolean | "mixed";
    setCheckedFromParentInput(newChecked: CheckboxCheckedType): void;
    //onCheckedChange: UseCheckboxParameters<any, any>["checkbox"]["onCheckedChange"];
    subInfo: CBGSubInfo;
}


export interface UseCheckboxGroupChildParameters<CBGSubInfo, K extends string, SubbestInfo> extends UseListNavigationChildParameters<CheckboxGroupInfoBase<CBGSubInfo>, K, never, "focusSelf", never, SubbestInfo> {
    //asCheckbox: UseCheckboxParameters<InputElement, LabelElement>;
    //asCheckboxGroupChild: UseCheckboxGroupChildParametersACGC<CBGSubInfo, K, SubbestInfo>;
    checkboxGroupChild: {
        //controlId: string;
        focus(): void;
        //labelPosition: "separate" | "wrapping";
        checked: CheckboxCheckedType;
        onChangeFromParent(checked: CheckboxCheckedType): void;
    }
}

/*interface UseCheckboxGroupChildParametersACGC<CBGSubInfo, K extends string, SubbestInfo> extends UseListNavigationChildParameters<CheckboxGroupInfoBase<CBGSubInfo>, K, never, never, never, SubbestInfo> {

}*/

export interface UseCheckboxGroupChildReturnTypeInfo<InputElement extends Element, _LabelElement extends Element> extends UseRovingTabIndexChildReturnTypeInfo<InputElement> {
    checkboxGroupChild: {
        onControlIdChanged: (next: string | undefined, prev: string | undefined) => void;
        onCheckedChange: (checked: CheckboxCheckedType) => void;
    }
}

export interface UseCheckboxGroupChildReturnTypeWithHooks<InputElement extends Element, LabelElement extends Element> extends UseCheckboxGroupChildReturnTypeInfo<InputElement, LabelElement> {
    // This is just whichever of the two should receive list-nav-related props (so based on `labelPosition` for checkboxes).
    // Alternatively, don't use this if you explicitly don't want this group's list navigation
    useListNavigationChildProps:
    {
        ({ tabIndex, ...props }: h.JSX.HTMLAttributes<InputElement>): h.JSX.HTMLAttributes<InputElement>;
        ({ tabIndex, ...props }: h.JSX.HTMLAttributes<LabelElement>): h.JSX.HTMLAttributes<LabelElement>;
    }
}

export type UseCheckboxGroupChild<InputElement extends Element, LabelElement extends Element, CBGSubInfo, K extends string> = (args: UseCheckboxGroupChildParameters<CBGSubInfo, K, CBGSubInfo>) => UseCheckboxGroupChildReturnTypeWithHooks<InputElement, LabelElement> /*{
    //tabbable: boolean | null;
    checkboxLike: UseCheckboxReturnType<InputElement, LabelElement>["checkboxLike"];
    label: UseCheckboxReturnType<InputElement, LabelElement>["label"];
    rovingTabIndex: UseListNavigationChildReturnType<InputElement>["rovingTabIndex"];
    useCheckboxGroupChildInputProps: ({ tabIndex, ...props }: h.JSX.HTMLAttributes<InputElement>) => h.JSX.HTMLAttributes<InputElement>;
    useCheckboxGroupChildLabelProps: ({ tabIndex, ...props }: h.JSX.HTMLAttributes<LabelElement>) => h.JSX.HTMLAttributes<LabelElement>;
}*/



export interface UseCheckboxGroupReturnTypeInfo<InputElement extends Element, _LabelElement extends Element, CBGSubInfo, K extends string> extends UseListNavigationReturnTypeInfo<InputElement, CheckboxGroupInfoBase<CBGSubInfo>, K> {
    checkboxGroup: {
        parentIsChecked: boolean | "mixed";
        parentPercentChecked: number;
    };
}

export interface UseCheckboxGroupReturnTypeWithHooks<InputElement extends Element, LabelElement extends Element, CBGSubInfo, K extends string> extends UseCheckboxGroupReturnTypeInfo<InputElement, LabelElement, CBGSubInfo, K> {
    /** **STABLE ** */
    //checkboxes: ManagedChildren<I>;
    /**
     * Each child checkbox must call this hook, *in addition to* `useCheckbox`
     */
    useCheckboxGroupChild: UseCheckboxGroupChild<InputElement, LabelElement, CBGSubInfo, K>;
    /**
     * The parent checkbox must use this hook
     * 
     * **Notably unstable!** because it relies on `ariaControls`, populated by all child checkboxes
     */
    useCheckboxGroupParent: UseCheckboxGroupParent<InputElement, LabelElement>;

    // Use on either e.g. the div containing the children, or each individual child
    useListNavigationProps: PropModifier<any>;
}

export interface UseCheckboxGroupParentParameters<InputElement extends Element, LabelElement extends Element> {
    //checkbox: Pick<UseCheckboxParameters<InputElement, LabelElement>["checkbox"], "tagInput" | "tagLabel">;
    //label: Pick<UseCheckboxParameters<InputElement, LabelElement>["label"], "tagInput">;
    //hasFocusLabel: UseCheckboxParameters<InputElement, LabelElement>["hasFocusLabel"];
    //hasFocusInput: UseCheckboxParameters<InputElement, LabelElement>["hasFocusInput"];
    //checkboxLike: Pick<UseCheckboxParameters<InputElement, LabelElement>["checkboxLike"], "labelPosition">;
}

export type UseCheckboxGroupParent<InputElement extends Element, LabelElement extends Element> = (a: UseCheckboxGroupParentParameters<InputElement, LabelElement>) => UseCheckboxGroupParentReturnTypeWithHooks<InputElement, LabelElement>;

export interface UseCheckboxGroupParentReturnTypeInfo<InputElement extends Element, _LabelElement extends Element> {
    checkboxGroupParent: {
        checked: CheckboxCheckedType;
        //percent: number;
        onCheckedChange: (e: CheckboxChangeEvent<InputElement>) => void;
    }
}

export interface UseCheckboxGroupParentReturnTypeWithHooks<InputElement extends Element, _LabelElement extends Element> extends UseCheckboxGroupParentReturnTypeInfo<InputElement, _LabelElement> {
    useCheckboxGroupParentProps: (props: h.JSX.HTMLAttributes<InputElement>) => h.JSX.HTMLAttributes<InputElement>;
}


/**
 * 
 * 
 * @param param0 
 * @returns 
 */
export function useCheckboxGroup<InputElement extends Element, LabelElement extends Element, CBGSubInfo, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseCheckboxGroupParameters): UseCheckboxGroupReturnTypeWithHooks<InputElement, LabelElement, CBGSubInfo, K> {
    debugLog("useCheckboxGroup");
    //const onUpdateChildren = useStableCallback(onUpdateChildrenUnstable ?? (() => {}));
    const {
        useListNavigationChild,
        useListNavigationProps,
        ...listReturnType
    } = useListNavigation<InputElement, InputElement, CheckboxGroupInfoBase<CBGSubInfo>, K>({
        linearNavigation,
        listNavigation,
        managedChildren,
        rovingTabIndex,
        typeaheadNavigation
    });

    const { managedChildren: { children } } = listReturnType;

    //const [uncheckedCount, setUnheckedCount] = useState(0);


    // Keep track of all child IDs, and any time any of them change, 
    // generate a new string with all of them concatenated together
    // (but only once per render);
    const allIds = useRef(new Set<string>());
    const [ariaControls, setControls] = useState("");
    const [updateIndex, setIdUpdateIndex] = useState(0);


    const [checkedCount, setCheckedCount] = useState(0);
    const checkedIndices = useRef(new Set<number>());
    //const [selfIsChecked, setSelfIsChecked, getSelfIsChecked] = useState<boolean | "mixed">(false);

    const getSelfIsCheckedUnstable = useCallback(() => {
        const percentage = checkedCount / (children.getHighestIndex() + 1);
        return percentage <= 0 ? false : percentage >= 1 ? true : "mixed";
    }, [checkedCount]);

    const getSelfIsCheckedStable = useStableCallback(getSelfIsCheckedUnstable);
    const [setParentCheckboxChecked, setSetParentCheckboxChecked] = useState<StateUpdater<CheckboxCheckedType> | null>(null);
    useEffect(() => {
        setParentCheckboxChecked?.(checkedCount == 0 ? false : checkedCount == (children.getHighestIndex() + 1) ? true : "mixed");
    }, [setParentCheckboxChecked, checkedCount])

    // If the user has changed the parent checkbox's value, then this ref holds a memory of what values were held before.
    // Otherwise, it's null when the last input was from a child checkbox. 
    //const savedCheckedValues = useRef<Map<number, boolean | "mixed"> | null>(null);
    const useCheckboxGroupParent = useCallback<UseCheckboxGroupParent<InputElement, LabelElement>>(({ }) => {
        debugLog("useCheckboxGroupParent");

        const [checked, setChecked] = useState<CheckboxCheckedType>(false);
        useEffect(() => {
            setSetParentCheckboxChecked(() => setChecked);
        }, [])

        const checkboxGroupParent = { checked, onCheckedChange: onCheckboxGroupParentInput };
        return {
            checkboxGroupParent,
            useCheckboxGroupParentProps: function useCheckboxGroupParentInputProps(props: h.JSX.HTMLAttributes<InputElement>): h.JSX.HTMLAttributes<InputElement> {
                return (useMergedProps<InputElement>(useMergedProps<InputElement>({}, { "aria-controls": ariaControls } as h.JSX.HTMLAttributes<InputElement>), props));
            }
        }
    }, [ariaControls]);

    const onCheckboxGroupParentInput = useCallback((e: CheckboxChangeEvent<InputElement>) => {
        debugger;
        e.preventDefault();

        const selfIsChecked = getSelfIsCheckedStable();
        const nextChecked = (selfIsChecked === false ? "mixed" : selfIsChecked === "mixed" ? true : false);
        let willChangeAny = false;
        children.forEach(child => willChangeAny ||= (child.subInfo.subInfo.subInfo.checked != child.subInfo.subInfo.subInfo.getLastUserChecked()));
        children.forEach(child => {
            let prevChecked = child.subInfo.subInfo.subInfo.checked;
            let checked: CheckboxCheckedType;
            if (nextChecked == "mixed") {
                if (willChangeAny)
                    checked = (child.subInfo.subInfo.subInfo.getLastUserChecked());
                else
                    checked = true;
            }
            else {
                checked = nextChecked;
            }
            if (checked != prevChecked)
                child.subInfo.subInfo.subInfo.setCheckedFromParentInput(checked);
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
        setControls(Array.from(allIds.current).join(" "));
    }, [updateIndex])

    const useCheckboxGroupChild: UseCheckboxGroupChild<InputElement, LabelElement, CBGSubInfo, K> = useCallback<UseCheckboxGroupChild<InputElement, LabelElement, CBGSubInfo, K>>(function (asCheckboxGroupChild) {
        debugLog("useCheckboxGroupChild", asCheckboxGroupChild.managedChild.index);
        //const { checkbox: { onCheckedChange }, checkboxLike: { checked, disabled, labelPosition }, label: { tagInput, tagLabel }, hasFocusInput, hasFocusLabel } = asCheckbox;
        const { managedChild: { index }, subInfo, checkboxGroupChild: { checked, focus, onChangeFromParent } } = asCheckboxGroupChild;
        //labelPosition ??= "separate";
        const [getLastUserChecked, setLastUserChecked] = usePassiveState<boolean | "mixed">(null, returnFalse);
        const onCheckedChange = useStableCallback((checked: CheckboxCheckedType) => {
            setLastUserChecked(checked);
        });

        const onControlIdChanged = useCallback((next: string | undefined, prev: string | undefined) => {
            if (prev)
                allIds.current.delete(prev);

            if (next)
                allIds.current.add(next);

            if (!!next || !!prev) {
                setIdUpdateIndex(i => ++i);
            }
        }, []);


        useEffect(() => {
            notifyChecked(index, checked);
        }, [index, checked]);

        const { useListNavigationChildProps, ...listNavigationReturnType } = useListNavigationChild({
            subInfo: { getLastUserChecked, setCheckedFromParentInput: onChangeFromParent, checked, subInfo },
            listNavigation: { ...asCheckboxGroupChild.listNavigation },
            managedChild: asCheckboxGroupChild.managedChild,
            rovingTabIndex: { ...asCheckboxGroupChild.rovingTabIndex, focusSelf: focus }
        });

        return {
            checkboxGroupChild: {
                onCheckedChange,
                onControlIdChanged
            },
            ...listNavigationReturnType,
            useListNavigationChildProps: useListNavigationChildProps as any,
        }


    }, []);

    return {
        useCheckboxGroupChild,
        useCheckboxGroupParent,
        useListNavigationProps,
        linearNavigation: listReturnType.linearNavigation,
        listNavigation: listReturnType.listNavigation,
        managedChildren: listReturnType.managedChildren,
        rovingTabIndex: listReturnType.rovingTabIndex,
        typeaheadNavigation: listReturnType.typeaheadNavigation,
        checkboxGroup: {
            parentIsChecked: getSelfIsCheckedUnstable() as boolean | "mixed",
            parentPercentChecked: (checkedCount / (children.getHighestIndex() + 1)),
        }
    };
}
