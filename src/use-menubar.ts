import { assertEmptyObject, ElementProps, focus, monitorCallCount, PressEventReason, returnFalse, TargetedPick, useMergedProps, usePress, UsePressParameters, UsePressReturnType, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { OmitStrong } from "./props.js";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "./use-toolbar.js";


export interface UseMenubarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ContainerElement, ChildElement, M> { }
export interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> { }
export interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> { }

export interface UseMenubarItemParametersSelf<MenuItemElement extends Element> {
    role: "menuitem" | "menuitemcheckbox" | "menuitemradio";

    /**
     * Optional. Applies in addition to any single-selection behavior.
     */
    onPress: null | ((e: PressEventReason<MenuItemElement>) => void);
}

export interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends
    OmitStrong<UseToolbarChildParameters<MenuItemElement, M>, "toolbarChildParameters">, 
    TargetedPick<UsePressParameters<MenuItemElement>, "pressParameters", "onPressingChange"> {
    menuItemParameters: UseMenubarItemParametersSelf<MenuItemElement>;
}

export interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
    propsMenubar: ElementProps<MenuParentElement>;
    context: UseMenubarContext<MenuParentElement, MenuItemElement, M>;
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
export function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>(args: UseMenubarParameters<MenuParentElement, MenuItemElement, M>): UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M> {

    monitorCallCount(useMenubar);

    const {
        propsToolbar: propsMenubar,
        ...restReturn
    } = useToolbar<MenuParentElement, MenuItemElement, LabelElement, M>(args);

    return {
        propsMenubar,
        ...restReturn
    }
}


/**
 * @compositeParams
 */
export function useMenubarChild<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    menuItemParameters: { onPress: opu, role },
    pressParameters: { onPressingChange, ...void1 },
    ...restParams
}: UseMenubarItemParameters<MenuItemElement, M>): UseMenubarItemReturnType<MenuItemElement, M> {
    monitorCallCount(useMenubarChild);

    const focusSelf = useCallback((e: any) => focus(e as Element as HTMLElement), [])
    assertEmptyObject(void1);
    const {
        propsChild,
        propsTabbable,
        pressParameters: { onPressSync, excludeSpace },
        ...restRet
    } = useToolbarChild<MenuItemElement, M>({
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
}
