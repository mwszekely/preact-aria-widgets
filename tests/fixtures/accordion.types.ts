import type { AccordionProps } from "preact-aria-widgets/preact";

export interface AccordionTestingConstants extends Record<`setChildOpened_${number}`, (opened: "true" | "false" | null) => Promise<void>> {
    setChildCount(count: number): Promise<void>;
    setOrientation(orientation: NonNullable<AccordionProps<any>["orientation"]>): Promise<void>;
};