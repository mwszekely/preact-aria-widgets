import { Fragment as _Fragment, jsxs as _jsxs } from "preact/jsx-runtime";
import { createContext, useCallback, useMemo, useMonitoring, usePortalChildren } from "preact-prop-helpers";
import { useContextWithWarning } from "./props.js";
export const NotificationProviderContext = createContext(null);
/**
 * Allows children to send notifications to a screen reader or other assistive technology.
 *
 * Please note that because some devices only check for `aria-live` regions *once* on page load,
 * they cannot be created dynamically. You must pass the ID of the **already-existing** elements to use (or the elements themselves).
 *
 * One *must* have `aria-live=polite` and one *must* have `aria-live=assertive`, but there aren't really any other requirements.
 * They shouldn't be visible, I suppose.
 *
 * @compositeParams
 *
 * @hasChild {@link useNotify}
 */
export function useNotificationProvider({ targetAssertive, targetPolite }) {
    return useMonitoring(function useNotificationProvider() {
        const { children: childrenPolite, pushChild: notifyPolite, portalElement: politeElement } = usePortalChildren({ target: targetPolite });
        const { children: childrenAssertive, pushChild: notifyAssertive, portalElement: assertiveElement } = usePortalChildren({ target: targetAssertive });
        if (typeof window !== "undefined") {
            console.assert(politeElement != null, `useNotificationProvider: targetPolite is missing`);
            console.assert(assertiveElement != null, `useNotificationProvider: targetAssertive is missing`);
            if (politeElement)
                console.assert(politeElement.getAttribute("aria-live") == "polite", `useNotificationProvider: targetPolite missing attribute "aria-live=polite"`);
            if (assertiveElement)
                console.assert(assertiveElement.getAttribute("aria-live") == "assertive", `useNotificationProvider: targetAssertive is missing, or missing "aria-live=assertive"`);
        }
        const notify = useCallback((mode, child) => {
            return mode == "assertive" ? notifyAssertive(child) : notifyPolite(child);
        }, [notifyAssertive, notifyPolite]);
        return {
            notify,
            context: useMemo(() => ({ notify }), [notify]),
            children: (_jsxs(_Fragment, { children: [childrenPolite, childrenAssertive] }))
        };
    });
}
export function useNotify() {
    return useContextWithWarning(NotificationProviderContext, "notification provider").notify;
}
//# sourceMappingURL=use-notify.js.map