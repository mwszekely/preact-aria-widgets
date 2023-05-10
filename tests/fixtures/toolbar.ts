
import { Locator } from "@playwright/test";
import { test as base } from "./shared.js"


declare global {
    interface Window {
        increment(): Promise<void>;
    }
}

export const test = base.extend<{ toolbars: { toolbar: Locator } }>({
    toolbars: async ({ page, shared: { locator } }, use) => {
        const toolbar = locator.locator("div[role=toolbar]");
        await page.goto("/tests/stage/?test-base=toolbar");
        use({ toolbar });
    },
});
