
export interface ToolbarTestingConstants {
    setSelectedIndex(index: number | null): Promise<void>;
    setChildCount(count: number): Promise<void>;
    setDisabled(disabled: boolean): Promise<void>;
}
