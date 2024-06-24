import { expect } from '@playwright/test';
import { test } from "./base.fixture.js";

test('Sanity checks', async ({ page, shared: { goToTest, getCounter, resetCounter } }) => {
    await goToTest("sanity-check");

    await expect(page).toHaveTitle("Unit Testing");


    expect.poll(() => getCounter()).toBe(0);
    await page.evaluate(async () => { await window.increment(); });
    expect.poll(() => getCounter()).toBe(1);
    await page.evaluate(async () => { await window.increment(); });
    expect.poll(() => getCounter()).toBe(2);
    resetCounter();
    expect.poll(() => getCounter()).toBe(0);

    await page.on('console', (msg) => {
        if (msg && msg.text) {
            let contents = (typeof msg.text == "function"? msg.text() : msg.text) as string;
            if (msg.type() != "error")
                return;
            console[msg.type() == "error"? "error" : "log"](contents);
        } else {
        }
    });

    const locator = page.locator(".tests-container");
    await expect(locator.locator(".default")).toContainText("default");
    await expect(locator.locator(".encoding")).toContainText("符号化テスト");
});
