
export interface GridlistTestingConstants /*extends Record<`setChildOpened_${number}`, (opened: "true" | "false" | null) => Promise<void>>*/ {
    setRowCount(count: number): Promise<void>;
    //setOrientation(orientation: NonNullable<GridlistProps<any,any,any,any,any,any>["orientation"]>): Promise<void>;
};

export const WithFocusableIndex = 8;