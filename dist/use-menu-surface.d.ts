import { ElementProps, EventType, TargetedOmit, UseModalParameters, UseModalReturnType } from "preact-prop-helpers";
import { OmitStrong } from "./props.js";
export interface UseMenuSurfaceParametersSelf {
    /**
     * What role the surface fulfills.
     *
     * General menus should use "menu". "dialog" can be used for generic pop-up things.
     */
    role: "dialog" | "menu" | "tree" | "grid" | "listbox";
    surfaceId: string;
}
export interface UseMenuSurfaceParameters<_S extends Element, _B extends Element> extends OmitStrong<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters" | "refElementParameters" | "backdropDismissParameters" | "lostFocusDismissParameters" | "escapeDismissParameters" | "dismissParameters">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "dismissParameters", "dismissActive">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "escapeDismissParameters", "onDismissEscape" | "dismissEscapeActive">, TargetedOmit<UseModalParameters<"escape" | "lost-focus" | "backdrop">, "focusTrapParameters", "trapActive" | "focusOpener" | "onlyMoveFocus"> {
    menuSurfaceParameters: UseMenuSurfaceParametersSelf;
}
export interface UseMenuSurfaceReturnType<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element> {
    propsSurface: ElementProps<MenuSurfaceElement>;
    propsTarget: ElementProps<MenuTargetElement>;
    propsTrigger: ElementProps<MenuTriggerElement>;
    propsSentinel: ElementProps<any>;
    refElementPopupReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["refElementPopupReturn"];
    refElementSourceReturn: UseModalReturnType<null, MenuTriggerElement, MenuSurfaceElement>["refElementSourceReturn"];
}
/**
 * A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup).
 *
 * @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
 *
 * Related to menus, which are a menu contained within a menu surface. Not related to menubars -- menus contain menubars, but not all menubars are contained within a menu or its surface.
 *
 * @compositeParams
 */
export declare function useMenuSurface<MenuSurfaceElement extends Element, MenuTargetElement extends Element, MenuTriggerElement extends Element>({ dismissParameters, focusTrapParameters, activeElementParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, modalParameters, escapeDismissParameters, ...void2 }: UseMenuSurfaceParameters<MenuSurfaceElement, MenuTriggerElement>): UseMenuSurfaceReturnType<MenuSurfaceElement, MenuTargetElement, MenuTriggerElement>;
export interface UseFocusSentinelParameters {
    focusSentinel: {
        sendFocusToMenu: () => void;
        open: boolean;
        onClose(e: EventType<any, any>): void;
    };
}
/**
 * A focus sentinal is a hidden but focusable element that comes at the start or end
 * of the out-of-place-focusable component that, when activated or focused over, closes the component
 * (if focused within 100ms of the open prop changing, instead of
 * closing, focusing the sentinel immediately asks it to focus itself).
 * This exists for things like menus which can have focus but also need a way to return
 * to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
 * to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
 * and keyboard users can escape to close a menu, screen readers and other input methods
 * that don't use those two would become stuck.
 *
 * @compositeParams
 */
export declare function useFocusSentinel<E extends Element>({ focusSentinel: { open, onClose, sendFocusToMenu } }: UseFocusSentinelParameters): ElementProps<E>;
//# sourceMappingURL=use-menu-surface.d.ts.map