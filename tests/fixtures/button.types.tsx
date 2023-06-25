
export interface ButtonTestingConstants {
    onPress(e: Event): (void | Promise<void>);
    setDisabledType(type: "soft" | "hard"): Promise<void>;
    setDisabled(disabled: boolean): Promise<void>;
    setPressed(pressed: boolean | undefined): Promise<void>;
}
