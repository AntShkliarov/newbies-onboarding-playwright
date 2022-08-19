const { default: test, expect } = require("@playwright/test");

test.describe('Todo MVC', () => {
    test('Create new todo', async ({ page }) => {
        await page.goto('https://todomvc.com/examples/react/#/')

        const text = 'Hello World!'

        const input = page.locator('.new-todo >> visible=true')

        await input.type(text)
        await input.press('Enter')

        const todoLabel = page.locator('li label')

        await expect(todoLabel).toHaveText(text)
    })
})