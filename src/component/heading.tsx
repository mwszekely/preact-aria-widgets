import { ComponentChildren, createContext, createElement, ElementProps, forwardRef, memo, Ref, RenderableProps, useContext, useMergedProps } from "preact-prop-helpers";

type ElementToTag<_A> = any;
function overwriteWithWarning(a: any, ..._t: any[]) { return a; }

const HeadingLevelContext = createContext(0);

export interface HeadingProps<T extends Element> extends RenderableProps<ElementProps<T>> {
    /**
     * The contents of the heading.
     * 
     * Separate from the children, which become the content described by this heading.
     */
    heading: ComponentChildren;

    tag?: ElementToTag<T>;
}

/**
 * Utility component that creates a heading `h1`, `h2`, `h3`, etc.
 * 
 * Which one is chosen depends on a parent `Heading`, with the root-most `Heading`
 * starting at 1, or the value specified by `HeadingReset`.
 * 
 * Specify the actual contents of the heading with the `heading` prop.
 * 
 */
export const Heading = /* @__PURE__ */  memo(forwardRef(function Heading<T extends Element>({ children, heading, tag, ref: ref2, ...props }: HeadingProps<T>, ref: Ref<any>) {
    const headingLevelBeforeUs = useContext(HeadingLevelContext);
    const newHeadingLevel = headingLevelBeforeUs + 1;

    if (tag == null) {
        if (newHeadingLevel <= 6) {
            tag = `h${newHeadingLevel}` as never;
        }
        else {
            tag = 'div' as never;
            overwriteWithWarning("Heading", props, "aria-level", `${newHeadingLevel}`);
        }
    }

    return (
        <>
            <HeadingReset newLevel={headingLevelBeforeUs + 1}>
                {createElement(tag as any, useMergedProps(props, { ref }, { ref: ref2 }), heading)}
                {children}
            </HeadingReset>
        </>
    )
}))

/**
 * Set the value that the next `Heading` will use as its base.
 * 
 * Minimum of 1.
 */
export const HeadingReset = /* @__PURE__ */ memo(function HeadingReset({ newLevel, children }: { newLevel: number, children: ComponentChildren }) {
    return (
        <HeadingLevelContext.Provider value={newLevel - 1}>
            {children}
        </HeadingLevelContext.Provider>
    )
})
