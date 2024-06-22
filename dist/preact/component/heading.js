import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "preact/jsx-runtime";
import { createContext, createElement, memo, useContext } from "preact-prop-helpers";
function overwriteWithWarning(a, ..._t) { return a; }
const HeadingLevelContext = createContext(0);
/**
 * Utility component that creates a heading `h1`, `h2`, `h3`, etc.
 *
 * Which one is chosen depends on a parent `Heading`, with the root-most `Heading`
 * starting at 1, or the value specified by `HeadingReset`.
 *
 * Specify the actual contents of the heading with the `heading` prop.
 *
 */
export const Heading = /* @__PURE__ */ memo(function Heading({ children, heading, tag, ...props }) {
    const headingLevelBeforeUs = useContext(HeadingLevelContext);
    const newHeadingLevel = headingLevelBeforeUs + 1;
    if (tag == null) {
        if (newHeadingLevel <= 6) {
            tag = `h${newHeadingLevel}`;
        }
        else {
            tag = 'div';
            overwriteWithWarning("Heading", props, "aria-level", `${newHeadingLevel}`);
        }
    }
    return (_jsx(_Fragment, { children: _jsxs(HeadingReset, { newLevel: headingLevelBeforeUs + 1, children: [createElement(tag, props, heading), children] }) }));
});
/**
 * Set the value that the next `Heading` will use as its base.
 *
 * Minimum of 1.
 */
export const HeadingReset = /* @__PURE__ */ memo(function HeadingReset({ newLevel, children }) {
    return (_jsx(HeadingLevelContext.Provider, { value: newLevel - 1, children: children }));
});
//# sourceMappingURL=heading.js.map