import { expect } from '@playwright/test';
import { test } from "./button.fixture.js";



const buttonTypes = ["button", "div"] as const;

// Set the button's press handler to wait for 1 second, 
// then increment our counter
test.describe("Press events", () => {
    const eventTypes = ["Clicking ", "Pressing Enter ", "Releasing the spacebar "] as const;
    const disabledTypes = ["soft", "hard"] as const;
    const disabledValues = [false, true];

    for (const disabled of disabledValues) {
        for (const disabledType of disabledTypes) {

            if (disabled == false) {
                // When disabled is false, disabledType doesn't matter.
                // To ensure we don't duplicate tests, we arbitrarily choose one.
                if (disabledType == "soft")
                    continue;
            }
            test.describe(disabled ? (`Don't fire when ${(disabledType == "soft" ? " soft-" : "")}disabled`) : "Fire when not disabled", () => {
                for (const buttonType of buttonTypes) {
                    for (const eventType of eventTypes) {


                        test(`${eventType} on a ${buttonType} ${!disabled ? `fires under normal conditions` : `doesn't fire when ${disabledType == "soft" ? "soft-" : ""}disabled`}`, async ({ page, button: { buttons }, shared: { getCounter, resetCounter, install, run, locator } }) => {
                            //for (const [buttonType, button] of Object.entries(buttons)) {
                            const button = buttons[buttonType];
                            await run("Button", "setDisabled", disabled);
                            await run("Button", "setDisabledType", disabledType);
                            resetCounter();

                            // Note to self: This needs to be inside the loop for...what reason exactly?
                            // Are promises cached or something? This is just in testing it seems...but I don't know exactly where...
                            await install("Button", "onPress", (e) => { window.increment(); });

                            expect.poll(() => getCounter(), "We haven't clicked the button, so the counter should still be 0").toBe(0);

                            switch (eventType) {
                                case "Clicking ":
                                    await button.click({ force: true });
                                    expect.poll(() => getCounter()).toBe(disabled ? 0 : 1);
                                    break;
                                case "Pressing Enter ":
                                    await button.focus();
                                    await page.keyboard.down("Enter");
                                    expect.poll(() => getCounter()).toBe(disabled ? 0 : 1);
                                    await page.keyboard.up("Enter");
                                    expect.poll(() => getCounter()).toBe(disabled ? 0 : 1);
                                    break;
                                case "Releasing the spacebar ":
                                    await button.focus();
                                    await page.keyboard.down("Space");
                                    expect.poll(() => getCounter()).toBe(0);
                                    await page.keyboard.up("Space");
                                    expect.poll(() => getCounter()).toBe(disabled ? 0 : 1);
                                    break;
                            }
                            //}
                        });
                    }
                }
            });
        }
    }
});

test.describe("Roles are correct", () => {

    for (const buttonType of buttonTypes) {


        test(`${capitalize(buttonType)}`, async ({ page, button: { buttons }, shared: { getCounter, resetCounter, install, run, locator } }) => {
            //for (const [buttonType, button] of Object.entries(buttons)) {
            const button = buttons[buttonType];
            resetCounter();

            // Note to self: This needs to be inside the loop for...what reason exactly?
            // Are promises cached or something? This is just in testing it seems...but I don't know exactly where...
            await install("Button", "onPress", (e) => { window.increment(); });

            if (buttonType != "button")
                await expect(button).toHaveAttribute("role", "button");
            else
                await expect(button).not.toHaveAttribute("role", "button");
        });
    }
})



function capitalize(buttonType: string) {
    return buttonType.substring(0, 1).toUpperCase() + buttonType.substring(1);
}
// test('Disabled during an async press', async ({ page, button: { getCounter, button }, shared: { install, run, locator } }) => {

//     // When clicking a button with a sync handler, it should not become disabled in any way.
//     await install("Button", "onPress", (e) => { console.log(e); if (!e) return new Promise(resolve => setTimeout(resolve, 3000)) });
//     await button.click();
//     await new Promise(resolve => setTimeout(resolve, 250));
//     await expect(button).not.toBeDisabled();

//     // When clicking a button with an async handler, it should become disabled in the way specified by the user.
//     await run("Button", "setDisabledType", "hard");
//     await install("Button", "onPress", (e) => { console.log(e); if (e) return new Promise(resolve => setTimeout(resolve, 3000)) });
//     await button.click();
//     await new Promise(resolve => setTimeout(resolve, 250));
//     await expect(button).toHaveAttribute("disabled", /.*/);
//     await expect(button).not.toHaveAttribute("aria-disabled", /.*/);

//     await expect(button).not.toHaveAttribute("disabled", /.*/);
//     await expect(button).not.toHaveAttribute("aria-disabled", /.*/);

//     await run("Button", "setDisabledType", "soft");
//     await install("Button", "onPress", (e) => { if (e) return new Promise(resolve => setTimeout(resolve, 3000)) });
//     await button.click();
//     await new Promise(resolve => setTimeout(resolve, 250));
//     await expect(button).toHaveAttribute("aria-disabled", /.*/);
//     await expect(button).not.toHaveAttribute("disabled", /.*/);

//     await expect(button).not.toHaveAttribute("aria-disabled", /.*/);
//     await expect(button).not.toHaveAttribute("disabled", /.*/);
// });



// test('While disabled cannot be pressed', async ({ page, button: { getCounter, button }, shared: { install, locator, run } }) => {

//     const types = ["hard", "soft"] as const;

//     for (const type of types) {
//         await run("Button", "setDisabled", true);
//         await run("Button", "setDisabledType", type);
//         await expect(getCounter()).toBe(0);
//         await install("Button", "onPress", (e) => { window.increment(); });
//         await button.dispatchEvent('click');
//         await new Promise(resolve => setTimeout(resolve, 50));
//         await expect(button).toBeDisabled();
//         await expect(getCounter()).toBe(0);
//     }
// });

// test('All press event types work', async ({ page, button: { getCounter, button }, shared: { run, install, locator } }) => {
//     await install("Button", "onPress", () => { window.increment(); });

//     let c = 0;

//     await expect(getCounter()).toBe(c);     // Sanity check
//     await button.click();
//     await expect(getCounter()).toBe(++c);   // Clicked -- counter should change immediately

//     // The button should be focused now, so we can use keyboard controls.
//     await expect(button).toBeFocused();
//     await page.keyboard.down("Enter");
//     await expect(getCounter()).toBe(++c);   // Counter should change on keydown for Enter
//     await page.keyboard.up("Enter");
//     await expect(getCounter()).toBe(c);
//     await page.keyboard.down("Space");
//     await expect(getCounter()).toBe(c);     // Counter should change on keyup for Space
//     await page.keyboard.up("Space");
//     await expect(getCounter()).toBe(++c);
// });


