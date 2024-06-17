import {
    assertEmptyObject,
    ElementProps,
    focus,
    Nullable,
    PressEventReason,
    returnFalse,
    TargetedPick,
    useCallback,
    useMergedProps,
    usePress,
    UsePressParameters,
    UsePressReturnType,
    useStableCallback
} from "preact-prop-helpers";
import { monitored, OmitStrong } from "./props.js";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "./use-toolbar.js";


export interface UseMenubarContext<ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ChildElement, M> { }
export interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> { }
export interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> { }

export interface UseMenubarItemParametersSelf<MenuItemElement extends Element> {
    role: "menuitem" | "menuitemcheckbox" | "menuitemradio";

    /**
     * Optional. Applies in addition to any single-selection behavior.
     */
    onPress: Nullable<((e: PressEventReason<MenuItemElement>) => void)>;
}

export interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends
    OmitStrong<UseToolbarChildParameters<MenuItemElement, M>, "toolbarChildParameters">,
    TargetedPick<UsePressParameters<MenuItemElement>, "pressParameters", "onPressingChange"> {
    menuItemParameters: UseMenubarItemParametersSelf<MenuItemElement>;
}

export interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends
    OmitStrong<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
    propsMenubar: ElementProps<MenuParentElement>;
    contextChildren: UseMenubarContext<MenuItemElement, M>;
}
export interface UseMenubarItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildReturnType<MenuItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters">, UsePressReturnType<MenuItemElement> { }

/**
 * Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.
 * 
 * @remarks A menubar is identical to a toolbar, except that every item 
 * in a menubar is a menuitem (or similar) and has some sort of 
 * role and action when pressed besides just single selection (if applicable).
 * 
 * (A toolbar child won't have a defined role, but every menubar child will)
 * 
 * @compositeParams
 */
export const useMenubar = monitored(function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element>(args: UseMenubarParameters<MenuParentElement, MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, UseMenubarSubInfo<MenuItemElement>> {

    const {
        propsToolbar: propsMenubar,
        ...restReturn
    } = useToolbar<MenuParentElement, MenuItemElement, LabelElement>(args);

    return {
        propsMenubar,
        ...restReturn
    }
})


/**
 * @compositeParams
 */
export const useMenubarChild = monitored(function useMenubarChild<MenuItemElement extends Element>({
    menuItemParameters: { onPress: opu, role },
    pressParameters: { onPressingChange, ...void1 },
    ...restParams
}: UseMenubarItemParameters<MenuItemElement, UseMenubarSubInfo<MenuItemElement>>): UseMenubarItemReturnType<MenuItemElement, UseMenubarSubInfo<MenuItemElement>> {

    const focusSelf = useCallback((e: any) => focus(e as Element as HTMLElement), [])
    assertEmptyObject(void1);
    const {
        propsChild,
        propsTabbable,
        pressParameters: { onPressSync, excludeSpace },
        ...restRet
    } = useToolbarChild<MenuItemElement>({
        ...restParams,
        toolbarChildParameters: { disabledProp: "aria-disabled" }
    });

    const { pressReturn, props: propsPress } = usePress<MenuItemElement>({
        pressParameters: {
            focusSelf,
            excludeSpace,
            onPressSync: useStableCallback((e) => {
                onPressSync?.(e);
                opu?.(e);
            }),
            allowRepeatPresses: false,
            excludeEnter: returnFalse,
            excludePointer: returnFalse,
            longPressThreshold: null,
            onPressingChange
        }, refElementReturn: restRet.refElementReturn
    });

    propsChild.role = role;

    return {
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        pressReturn,
        ...restRet
    };
})
