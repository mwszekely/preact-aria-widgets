
import { Locator } from "@playwright/test";
import { fromStringNumber } from "../util.js";
import { test as base } from "./base.fixture.js";

export const test = base.extend<{ gridlist: { gridlist: Locator, getRowCount: () => Promise<number> } }>({
    gridlist: async ({ page, shared: { goToTest, run, getTestSyncState } }, use) => {
        await goToTest("gridlist");
        const gridlist = page.locator("[data-gridlist]");
        const getRowCount = async () => { return (await getTestSyncState("Gridlist", "setRowCount", fromStringNumber)) || 0 };
        
        
        
        await use({
            gridlist,
            getRowCount,
        });
    },
});
