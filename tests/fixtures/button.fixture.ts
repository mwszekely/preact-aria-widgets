
import { Locator } from "@playwright/test";
import { test as base } from "./base.fixture.js";

export const test = base.extend<{ button: { buttons: { button: Locator, div: Locator }; } }>({
    button: async ({ page, shared: { goToTest, locator } }, use) => {
        const buttonB = locator.locator("button");
        const buttonD = locator.locator("div[role=button]");
        await goToTest("button");
        use({ buttons: { button: buttonB, div: buttonD } });
    },
});
