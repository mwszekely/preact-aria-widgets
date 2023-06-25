
import { Locator } from "@playwright/test";
import { test as base } from "./base.fixture.js";

export const test = base.extend<{ toolbars: { toolbar: Locator } }>({
    toolbars: async ({ page, shared: { goToTest, locator } }, use) => {
        const toolbar = locator.locator("div[role=toolbar]");
        await goToTest("toolbar");
        use({ toolbar });
    },
});
