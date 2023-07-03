
import { Locator, expect } from "@playwright/test";
import { test as base } from "./base.fixture.js";
import { fromStringNumber } from "./base.types.js";

export const test = base.extend<{ accordion: { setAllOpen(open: boolean | null): Promise<void>, headers: Locator, headerButtons: Locator, sections: Locator, accordion: Locator, getChildCount: () => Promise<number> } }>({
    accordion: async ({ page, shared: { goToTest, run, getTestSyncState } }, use) => {
        await goToTest("accordion");
        const accordion = page.locator("[data-accordion]");
        const headers = page.locator("[data-accordion-header]");
        const headerButtons = page.locator("[data-accordion-header-button]");
        const sections = page.locator("[data-accordion-section]");
        const getChildCount = async () => { return (await getTestSyncState("Accordion", "setChildCount", fromStringNumber)) || 0 };
        const setAllOpen = async (open: boolean | null) => {
            const childCount = await getChildCount();
            await Promise.all(Array.from(function* () {
                for (let i = 0; i < childCount; ++i)
                    yield run("Accordion", `setChildOpened_${i}`, (open?.toString() ?? null) as (null | "true" | "false"))
            }()));
        }
        
        expect(await (await sections.all()).map(section => section.isVisible()).reduce((prev, current) => (prev || current)), "All accordion sections should be closed on initialization");
        await use({
            accordion,
            headers,
            headerButtons,
            sections,
            getChildCount,
            setAllOpen
        });
    },
});
