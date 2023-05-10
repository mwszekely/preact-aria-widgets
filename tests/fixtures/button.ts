
import { Locator } from "@playwright/test";
import { test as base } from "./shared.js"


declare global {
    interface Window {
        increment(): Promise<void>;
    }
}

export const test = base.extend<{ button: { buttons: { button: Locator, div: Locator }; } }>({
    button: async ({ page, shared: { locator } }, use) => {
        const buttonB = locator.locator("button");
        const buttonD = locator.locator("div[role=button]");
        await page.goto("/tests/stage/?test-base=button");
        use({ buttons: { button: buttonB, div: buttonD } });
    },
});
