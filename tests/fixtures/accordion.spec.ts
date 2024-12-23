import { expect } from "@playwright/test";
import { DisabledIndex, MissingIndex } from "../util.js";
import { test } from "./accordion.fixture.js";

// TODO: Replace all toBeVisible with some custom thing that checks both visibility and aria-expanded, which are done separately right now.
test(`Uncontrolled accordion sections expand properly`, async ({ page, accordion: { accordion, headerButtons, headers, sections, setAllOpen }, shared: { install, run } }) => {
    await expect(sections.nth(0)).not.toBeVisible();
    await expect(sections.nth(1)).not.toBeVisible();
    await headerButtons.nth(0).click();
    await expect(headerButtons.nth(0)).toBeFocused();
    await expect(sections.nth(0)).toBeVisible();
    await expect(sections.nth(1)).not.toBeVisible();


    await headerButtons.nth(1).click();
    await expect(headerButtons.nth(1)).toBeFocused();
    await expect(sections.nth(0)).not.toBeVisible();
    await expect(sections.nth(1)).toBeVisible();


    await headerButtons.nth(DisabledIndex).click({ force: true });
    await expect(sections.nth(DisabledIndex)).not.toBeVisible();
    await expect(sections.nth(1)).toBeVisible();
});

test(`Controlled accordion sections expand properly`, async ({ page, accordion: { accordion, headerButtons, headers, sections, setAllOpen }, shared: { install, run } }) => {
    await setAllOpen(true);
    await expect(sections.nth(0)).toBeVisible();
    await setAllOpen(false);
    await expect(sections.nth(0)).not.toBeVisible();
    await headerButtons.nth(0).click();
    await expect(sections.nth(0)).toBeVisible();
    await expect(sections.nth(1)).not.toBeVisible();
    await headerButtons.nth(1).click();
    await expect(sections.nth(0)).toBeVisible();
    await expect(sections.nth(1)).toBeVisible();
    await headerButtons.nth(0).click();
    await expect(sections.nth(0)).not.toBeVisible();
    await expect(sections.nth(1)).toBeVisible();

    await headerButtons.nth(DisabledIndex).click({ force: true });
    await expect(sections.nth(DisabledIndex)).not.toBeVisible();
    await expect(sections.nth(0)).not.toBeVisible();
    await expect(sections.nth(1)).toBeVisible();

});

test.describe("Enter, space, and mouse click select headers equally well", () => {

    const actions = ["releasing space", "pressing enter", "clicking"] as const;
    for (const action of actions) {
        test(`${action} works as expected`, async ({ page, accordion: { accordion, headerButtons, headers, sections, setAllOpen } }) => {
            await headerButtons.nth(1).focus();
            await expect(sections.nth(1)).not.toBeVisible();
            switch (action) {
                case "clicking":
                    await headerButtons.nth(1).click();
                    await expect(sections.nth(1)).toBeVisible();
                    break;
                case "pressing enter":
                    await page.keyboard.down("Enter");
                    await expect(sections.nth(1)).toBeVisible();
                    await page.keyboard.up("Enter");
                    break;
                case "releasing space":
                    await page.keyboard.down("Space");
                    await expect(sections.nth(1)).not.toBeVisible();
                    await page.keyboard.up("Space");
                    await expect(sections.nth(1)).toBeVisible();
                    break;
            }
        })
    }
})

test("Each accordion header is its own tab stop", async ({ page, shared: { focusableFirst, focusableLast }, accordion: { headerButtons, sections } }) => {
    await expect(focusableFirst).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(headerButtons.nth(0)).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(headerButtons.nth(1)).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(headerButtons.nth(2)).toBeFocused();
    // Arrow key navigation should continue normally after tab navigation
    await page.keyboard.press("ArrowDown");
    await expect(headerButtons.nth(3)).toBeFocused();
});

test("Up/Down moves focus", async ({ page, shared: { focusableFirst, focusableLast, run }, accordion: { headerButtons, sections, accordion, headers, setAllOpen } }) => {
    await expect(focusableFirst).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(headerButtons.nth(0)).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(headerButtons.nth(1)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(headerButtons.nth(0)).toBeFocused();

    await headerButtons.nth(MissingIndex - 1).focus();
    await page.keyboard.press("ArrowDown");
    await expect(headerButtons.nth(MissingIndex + 1)).toBeFocused();
    await page.keyboard.press("ArrowUp");
    await expect(headerButtons.nth(MissingIndex - 1)).toBeFocused();

    await run("Accordion", "setChildCount", MissingIndex + 1);
    await expect(headerButtons.nth(MissingIndex - 1)).toBeFocused();
    await page.keyboard.press("ArrowDown");
    await expect(headerButtons.nth(MissingIndex - 1)).toBeFocused();
});

test("Home/End moves focus", async ({ page, shared: { focusableFirst, focusableLast, run }, accordion: { headerButtons, sections, accordion, headers, setAllOpen } }) => {
    await expect(focusableFirst).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(headerButtons.nth(0)).toBeFocused();
    await page.keyboard.press("End");
    await expect(headerButtons.nth(9)).toBeFocused();
    await page.keyboard.press("Home");
    await expect(headerButtons.nth(0)).toBeFocused();


    await run("Accordion", "setChildCount", MissingIndex + 1);
    await page.keyboard.press("End");
    await expect(headerButtons.nth(MissingIndex - 1)).toBeFocused();
});
/*
test("Correct header structure", async ({ page, accordion: { accordion, headerButtons, headers, sections, setAllOpen } }) => {
    await expect(headers.nth(0)).
});

test("Correct header structure and roles", async () => {
    expect.soft(false, "TODO");
});*/

test("aria-expanded is correctly applied", async ({ page, accordion: { accordion, headerButtons, headers, sections, setAllOpen } }) => {
    expect(await page.locator("[aria-expanded=true]").count()).toBe(0);
    expect(await page.locator("[aria-expanded=false],[data-accordion-header-button]:not([aria-expanded])").count()).toBe(10);
    await headerButtons.nth(0).click();
    await expect(headerButtons.nth(0)).toHaveAttribute("aria-expanded", "true");
    expect(await page.locator("[aria-expanded=true]").count()).toBe(1);
    expect(await page.locator("[aria-expanded=false],[data-accordion-header-button]:not([aria-expanded])").count()).toBe(9);

    await setAllOpen(false);
    await expect(headerButtons.nth(0)).toHaveAttribute("aria-expanded", "false");
    expect(await page.locator("[aria-expanded=true]").count()).toBe(0);
    expect(await page.locator("[aria-expanded=false],[data-accordion-header-button]:not([aria-expanded])").count()).toBe(10);

    await headerButtons.nth(0).click();
    await expect(headerButtons.nth(0)).toHaveAttribute("aria-expanded", "true");
    expect(await page.locator("[aria-expanded=true]").count()).toBe(1);
    expect(await page.locator("[aria-expanded=false],[data-accordion-header-button]:not([aria-expanded])").count()).toBe(9);
});

test("aria-controls is correctly applied", async ({ page, accordion: { getChildCount, accordion, headerButtons, headers, sections, setAllOpen }, shared: { awaitRender, focusableFirst, focusableLast, generateText, getCounter, getRenderCount, install, locator, resetCounter, run } }) => {
   
    let childCount = await getChildCount();
    for (let c = 0; c < childCount; ++c) {
        if (c == MissingIndex)
            continue;
            
        const shouldBeIdOfSection = await headerButtons.nth(c).getAttribute("aria-controls");
        expect(await sections.nth(c).getAttribute("id")).toBe(shouldBeIdOfSection);
    }
});

test("disabled/aria-disabled is correctly applied", async ({ accordion: { sections, headerButtons, headers, getChildCount } }) => {
    let childCount = await getChildCount();
    for (let c = 0; c < childCount; ++c) {
        if (c == DisabledIndex){
            await expect(headerButtons.nth(c)).toHaveAttribute("disabled", /.*/);
            await expect(headerButtons.nth(c)).not.toHaveAttribute("aria-disabled", "true");
            await expect(headerButtons.nth(c)).not.toHaveAttribute("aria-disabled", "false");
        }
        else if (c != MissingIndex) {
            await expect(headerButtons.nth(c)).not.toHaveAttribute("disabled", /.*/);
            await expect(headerButtons.nth(c)).not.toHaveAttribute("aria-disabled", "true");
            await expect(headerButtons.nth(c)).not.toHaveAttribute("aria-disabled", "false");
        }
            
    }
});
/*
test("Accordion panels are regions in limited circumstances", async () => {
    expect.soft(false, "TODO");
});*/

test("Focus is not reset when sections are removed", async ({ page, accordion: { getChildCount, accordion, headerButtons, headers, sections, setAllOpen }, shared: { focusableFirst, focusableLast, run } }) => {

    // When a child is unmounted, even if focus is there, it should be moved somewhere appropriate instead of moving to the body.
    let c = await getChildCount() - 1;
    await headerButtons.nth(c).focus();
    for (; c >= 0; --c) {
        await run("Accordion", "setChildCount", c);
        let next = c - 1;
        if (next == DisabledIndex || next == MissingIndex)
            next -= 1;
        if (next == -1)
            await expect(focusableLast.or(focusableLast)).not.toBeFocused();
        else
            await expect(headerButtons.nth(next)).toBeFocused();
    }

    // If focus isn't already in the list, then no change to the focus should happen
    c = await getChildCount() - 1;
    await focusableFirst.focus();
    for (; c >= 0; --c) {
        await run("Accordion", "setChildCount", c);
        let next = c - 1;
        if (next == DisabledIndex || next == MissingIndex)
            next -= 1;

        await expect(focusableLast.or(focusableLast)).toBeFocused();
    }
});
