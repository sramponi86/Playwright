import { test , expect } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utils/data-helpers'

test.describe.only('Tips section', () => {
    test.only('Info Object', async ({page}, testInfo) => {
        await page.goto('https://www.example.com')
        //console.log(testInfo)
        let newNumber = await getRandomNumber()
        let newString = await getRandomString()
        console.log(newNumber)
        console.log(newString)
    })

    test('Skip browser', async ({page , browserName}) => {
        test.skip(browserName === "chromium","Browser not supported")
        await page.goto('https://www.example.com')
    })

    test('FixMe example', async ({page , browserName}) => {
        test.fixme(browserName === "chromium","test not stable and flaky")
        await page.goto('https://www.example.com')
    })

    const peopl = ["Mike", "Judy", "Peter", "Elon"]
    for(const name of peopl)
        test('Running test for '+ name , async ({page}) => {
            await page.goto('http://zero.webappsecurity.com/index.html')
            await page.type('#searchTerm', name)
            await page.waitForTimeout(3000)
        })

    test('Mouse movement', async ({page}) => {
        await page.goto('https://www.example.com')
        await page.mouse.move(0,0)
        await page.mouse.down()
        await page.mouse.move(0,100)
        await page.mouse.up()
    })

    test('Multiple tabs',async ({browser}) => {
        const context = await browser.newContext()
        const page1 = await context.newPage()
        const page2 = await context.newPage()
    })
})