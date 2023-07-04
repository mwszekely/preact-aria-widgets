import { h } from "preact";
import { ElementProps, focus, monitorCallCount, useMergedProps, usePress, UsePressReturnType, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { OmitStrong } from "./props.js";
import { useToolbar, useToolbarChild, UseToolbarChildParameters, UseToolbarChildReturnType, UseToolbarContext, UseToolbarParameters, UseToolbarReturnType, UseToolbarSubInfo } from "./use-toolbar.js";


export interface UseMenubarContext<ContainerElement extends Element, ChildElement extends Element, M extends UseMenubarSubInfo<ChildElement>> extends UseToolbarContext<ContainerElement, ChildElement, M> { }
export interface UseMenubarSubInfo<ChildElement extends Element> extends UseToolbarSubInfo<ChildElement> { }
export interface UseMenubarParameters<MenuParentElement extends Element, MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends UseToolbarParameters<MenuParentElement, MenuItemElement, M> {}

export interface UseMenubarItemParameters<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildParameters<MenuItemElement, M>, "toolbarChildParameters"> {
    menuItemParameters: {
        role: "menuitem" | "menuitemcheckbox" | "menuitemradio";

        /**
         * Optional. Applies in addition to any single-selection behavior.
         */
        onPress: null | ((e: h.JSX.TargetedEvent<MenuItemElement>) => void);
    }
}

export interface UseMenubarReturnType<MenuParentElement extends Element, MenuItemElement extends Element, LabelElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarReturnType<MenuParentElement, MenuItemElement, LabelElement, M>, "propsToolbar"> {
    propsMenubar: ElementProps<MenuParentElement>;
    context: UseMenubarContext<MenuParentElement, MenuItemElement, M>;
}
export interface UseMenubarItemReturnType<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>> extends OmitStrong<UseToolbarChildReturnType<MenuItemElement, M>, "propsChild" | "propsTabbable" | "pressParameters">, UsePressReturnType<MenuItemElement> { }

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


export function useMenubarChild<MenuItemElement extends Element, M extends UseMenubarSubInfo<MenuItemElement>>({
    menuItemParameters: { onPress: opu, role },
   ...restParams
}: UseMenubarItemParameters<MenuItemElement, M>): UseMenubarItemReturnType<MenuItemElement, M> {
    monitorCallCount(useMenubarChild);

    const focusSelf = useCallback((e: any) => focus(e as Element as HTMLElement), [])

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
            })
        }, refElementReturn: restRet.refElementReturn
    });

    propsChild.role = role;

    return {
        props: useMergedProps(propsChild, propsTabbable, propsPress),
        pressReturn,
        ...restRet
    };
}
