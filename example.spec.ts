import { test, expect } from '@playwright/test'
import { loadHomePage, assertTitle } from '../helpers'

test("Simple basic test", async ({ page }) => {

    // Here goes the test code
    await page.goto('https://www.example.com')
    const pageTitle = await page.locator('h1')

    await expect(pageTitle).toContainText('Example Domain')
})


test.describe.parallel.only('My first test suite', () => {

test.beforeEach(async ({ page }) => { 
    console.log("Starting the actions before all test in the suit")
})
test("Click on elements" , async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.click('text=Sign in')
    
    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong')
})

test('Working with inputs', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')

    await page.type('#user_login', 'someusername')
    await page.type('#user_password','12345')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong')    
})

test('Assertions @myTag', async ({ page }) => {

    await page.goto('https://www.example.com')
    await expect(page).toHaveURL('https://www.example.com')

    await expect(page).toHaveTitle('Example Domain')
    
    const element = await page.locator('h1')

    await expect(element).toBeVisible()
    await expect(element).toHaveText('Example Domain')
    await expect(element).toHaveCount(1)

})

test('Custom helpers', async ({ page }) => {
    await loadHomePage(page)
    //await page.pause()
    await assertTitle(page)
})

})