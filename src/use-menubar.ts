import { h } from "preact";
import { useMergedProps, usePress, UsePressReturnType, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { debugLog, OmitStrong } from "./props.js";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "./use-toolbar.js";


export interface UseMenubarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ContainerElement, ChildElement, M> { }
export interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> { }
export interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> {}

export interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarChildParameters<MenuItemElement, M> {
    menuItemParameters: {
        role: "menuitem" | "menuitemcheckbox" | "menuitemradio";

        /**
         * Optional. Applies in addition to any single-selection behavior.
         */
        onPress: null | ((e: h.JSX.TargetedEvent<MenuItemElement>) => void);
    }
}

export interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
    propsMenubar: h.JSX.HTMLAttributes<MenuParentElement>;
    context: UseMenubarContext<MenuParentElement, MenuItemElement, M>;
}
export interface UseMenubarItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildReturnType<MenuItemElement, M>, "pressParameters">, UsePressReturnType<MenuItemElement> { }

/**
 * A menubar is identical to a toolbar, except that every item 
 * in a menubar is a menuitem (or similar) and has some sort of 
 * role and action when pressed besides just single selection (if applicable).
 * 
 * (A toolbar child won't have a defined role, but every menubar child will)
 * 
 * @param args 
 * @returns 
 */
export function useMenubar<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>(args: UseMenubarParameters<MenuParentElement, MenuItemElement, M>): UseMenubarReturnType<MenuParentElement, MenuItemElement, LabelElement, M> {

    debugLog("useMenubar");

    const {
        propsToolbar: propsMenubar,
        ...restReturn
    } = useToolbar<MenuParentElement, MenuItemElement, LabelElement, M>(args);

    return {
        propsMenubar,
        ...restReturn
    }
}


export function useMenubarChild<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    menuItemParameters: { onPress: opu, role },
   ...restParams
}: UseMenubarItemParameters<MenuItemElement, M>): UseMenubarItemReturnType<MenuItemElement, M> {
    debugLog("useMenuItem", restParams.managedChildParameters.index);

    const focusSelf = useCallback((e: any) => (e as Element as HTMLElement).focus?.(), [])

    const {
        pressParameters: { excludeSpace },
        props,
        ...restRet
    } = useToolbarChild<MenuItemElement, M>({
        ...restParams
    });

    const { pressReturn, props: propsPress } = usePress<MenuItemElement>({
        pressParameters: {
            focusSelf,
            excludeSpace,
            onPressSync: useStableCallback((e) => {
                restRet.singleSelectionChildReturn.setThisOneSelected?.(e);
                opu?.(e);
            })
        }, refElementReturn: restRet.refElementReturn
    });

    props.role = role;

    return {
        pressReturn,
        props: useMergedProps(props, propsPress),
        ...restRet
    };
}