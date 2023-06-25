
export interface MenuTestingConstants {
    onMenuItem(closeMenu: () => void, index: number): (void | Promise<void>);
}
