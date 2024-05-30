import {test, expect} from "@playwright/test";
test ("Bài học 2: Product Page", async({page}) => {
    await test.step("Step 1: Open page Material Playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Step 2: Click on Product Page", async () => {
        await page.locator("//a[@href ='02-xpath-product-page.html']").click();
    })
    await test.step("Step 3: Product 1: 2 items", async() => {
        await page.locator("//button[@data-product-id='1']").click({clickCount: 2});
    })
    await test.step("Step 3: Product 2: 3 items", async() => {
        await page.locator("//button[@data-product-id='2']").click({clickCount: 3});
    })
    await test.step("Step 3: Product 3: 1 item", async() => {
        await page.locator("//button[@data-product-id='3']").click();
    })
})