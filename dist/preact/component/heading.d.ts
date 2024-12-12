import { ComponentChildren, ElementProps, Ref, RenderableProps } from "preact-prop-helpers";
type ElementToTag<_A> = any;
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
export declare const Heading: import("preact").FunctionComponent<import("preact/compat").PropsWithoutRef<HeadingProps<Element>> & {
    ref?: Ref<any> | undefined;
}>;
/**
 * Set the value that the next `Heading` will use as its base.
 *
 * Minimum of 1.
 */
export declare const HeadingReset: import("preact").FunctionComponent<{
    newLevel: number;
    children: ComponentChildren;
}>;
export {};
//# sourceMappingURL=heading.d.ts.map