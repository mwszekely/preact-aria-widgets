import { h, VNode } from "preact";
export interface NotificationProviderProps {
    targetAssertive: string | Element;
    targetPolite: string | Element;
}
export interface NotificationProviderReturnType {
    children: h.JSX.Element;
    context: NotificationProviderContext;
}
export interface NotificationProviderContext {
    notify(mode: "polite" | "assertive", content: VNode): void;
}
export declare const NotificationProviderContext: import("preact").Context<NotificationProviderContext>;
/**
 * Allows children to send notifications to a screen reader or other assistive technology.
 *
 * Please note that because some devices only check for `aria-live` regions *once* on page load,
 * they cannot be created dynamically. You must pass the ID of the **already-existing** elements to use (or the elements themselves).
 *
 * One *must* have `aria-live=polite` and one *must* have `aria-live=assertive`, but there aren't really any other requirements.
 * They shouldn't be visible, I suppose.
 *
 * @param param0
 * @returns
 */
export declare function useNotificationProvider({ targetAssertive, targetPolite }: NotificationProviderProps): {
    notify: (mode: "polite" | "assertive", child: h.JSX.Element) => number;
    context: {
        notify: (mode: "polite" | "assertive", child: h.JSX.Element) => number;
    };
    children: import("preact").JSX.Element;
};
export declare function useNotify(): (mode: "assertive" | "polite", content: VNode<{}>) => void;
//# sourceMappingURL=use-notify.d.ts.map