const { expect } = require("@playwright/test");
const { default: test } = require("playwrigth/test");

test.describe('Todo MVC', () => {
    test('Create new todo', async ({page}) => {
    await page.goto('https://todomvc.com/examples/react/#/')

    const input = page.locator('.new-todo')

    await input.type(text)
    await input.press('Enter')

    const todoLabel = page.locator('li label')

    expect(todoLabel).toHaveText(text)
})  })