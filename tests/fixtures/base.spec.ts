import { expect } from '@playwright/test';
import { test } from "./base.fixture.js";

test('Sanity checks', async ({ page, shared: { goToTest, getCounter, resetCounter } }) => {
    console.log("TEST");




    await goToTest("sanity-check");

    await expect(page).toHaveTitle("Unit Testing");


    expect(getCounter()).toBe(0);
    await page.evaluate(async () => { await window.increment(); });
    expect(getCounter()).toBe(1);
    await page.evaluate(async () => { await window.increment(); });
    expect(getCounter()).toBe(2);
    resetCounter();
    expect(getCounter()).toBe(0);

    await page.on('console', (msg) => {
        if (msg && msg.text) {
            let contents = (typeof msg.text == "function"? msg.text() : msg.text) as string;
            if (msg.type() != "error")
                return;
            console[msg.type() == "error"? "error" : "log"](contents);
        } else {
            console.log('PAGE LOG:', msg);
        }
    });

    const locator = page.locator(".tests-container");
    await expect(locator.locator(".default")).toContainText("default");
    await expect(locator.locator(".encoding")).toContainText("符号化テスト");
});
