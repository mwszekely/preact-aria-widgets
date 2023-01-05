import { ComponentChildren, createContext, createElement, h, RenderableProps } from "preact";
import { memo } from "preact/compat";
import { useContext } from "preact/hooks";
import { ElementToTag, overwriteWithWarning } from "../props";

const HeadingLevelContext = createContext(0);

export interface HeadingProps<T extends Element> extends RenderableProps<h.JSX.HTMLAttributes<T>> {
    /**
     * The contents of the heading.
     * 
     * Separate from the children, which become the content described by this heading.
     */
    heading: ComponentChildren;

    tag?: ElementToTag<T>;
}

export const Heading = memo(function Heading<T extends Element>({ children, heading, tag, ...props }: HeadingProps<T>) {
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
                {createElement(tag as any, props, heading)}
                {children}
            </HeadingReset>
        </>
    )
})

export const HeadingReset = memo(function HeadingReset({ newLevel, children }: { newLevel: number, children: ComponentChildren }) {
    return (
        <HeadingLevelContext.Provider value={newLevel}>
            {children}
        </HeadingLevelContext.Provider>
    )
})
