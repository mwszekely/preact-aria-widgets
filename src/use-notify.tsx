
import { createContext, h, VNode } from "preact";
import { usePortalChildren } from "preact-prop-helpers";
import { useCallback, useContext, useMemo } from "preact/hooks";

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

export const NotificationProviderContext = createContext<NotificationProviderContext>(null!);

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
export function useNotificationProvider({ targetAssertive, targetPolite }: NotificationProviderProps) {
    const { children: childrenPolite, pushChild: notifyPolite, portalElement: politeElement } = usePortalChildren({ target: targetPolite });
    const { children: childrenAssertive, pushChild: notifyAssertive, portalElement: assertiveElement } = usePortalChildren({ target: targetAssertive });
    console.assert(politeElement?.getAttribute("aria-live") == "polite");
    console.assert(assertiveElement?.getAttribute("aria-live") == "assertive");

    const notify = useCallback((mode: "polite" | "assertive", child: h.JSX.Element) => {
        return mode == "assertive" ? notifyAssertive(child) : notifyPolite(child);
    }, [notifyAssertive, notifyPolite])

    return {
        notify,
        context: useMemo(() => ({ notify }), [notify]),
        children: (
            <>
                {childrenPolite}
                {childrenAssertive}
            </>
        )
    }
}

export function useNotify() {
    return useContext(NotificationProviderContext).notify;
}
