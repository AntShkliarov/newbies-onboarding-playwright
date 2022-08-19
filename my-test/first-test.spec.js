const { default: test, expect } = require("@playwright/test");

test.describe ("TODO homework", () => {
    test ("Create new todo", async ({ page }) => {
        await page.goto ("https://todomvc.com/examples/react/#/");

        const text = "Hello world!"

        const input = page.locator (".new-todo");

        await input.type (text);

        await input.press ("Enter");

        const todoLabel = page.locator ("li label");

        await expect (todoLabel).toHaveText (text);

    })
    

})