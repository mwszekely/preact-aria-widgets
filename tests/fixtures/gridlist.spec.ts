import { Locator, expect } from "@playwright/test";
import { test } from "./gridlist.fixture.js";

test(`Arrow key navigation works`, async ({ page, gridlist: { gridlist, getRowCount }, shared: { install, run, focusableFirst, focusableLast } }) => {

    const rows = gridlist.locator("[data-gridlist-row]");
    function getCells(row: Locator) { return row.locator("[data-gridlist-cell]") }
    await focusableFirst.focus();

    await page.keyboard.press("Tab");
    let cellsInRow0 = getCells(rows.nth(0));
    let cellsInRow1 = getCells(rows.nth(1));
    await expect(cellsInRow0.nth(0)).toBeFocused();

    await page.keyboard.press("Tab");
    await expect (focusableLast).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(cellsInRow0.nth(0)).toBeFocused();
    
    await page.keyboard.press("ArrowRight");
    await expect(cellsInRow0.nth(1)).toBeFocused();
    
    await page.keyboard.press("ArrowUp");
    await expect(cellsInRow0.nth(1)).toBeFocused();
    
    await page.keyboard.press("ArrowLeft");
    await expect(cellsInRow0.nth(0)).toBeFocused();
    
    await page.keyboard.press("ArrowLeft");
    await expect(cellsInRow0.nth(0)).toBeFocused();
    
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowDown");
    await expect(cellsInRow1.nth(1)).toBeFocused();
    
    await page.keyboard.press("ArrowUp");
    await expect(cellsInRow0.nth(1)).toBeFocused();

});

