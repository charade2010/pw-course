import { test, expect } from "@playwright/test";
test("Bài học 3: Todo page", async ({ page }) => {
    await test.step("Step 1: Open page Material Playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Step 2: Click on Product Page", async () => {
        await page.locator("//a[@href ='03-xpath-todo-list.html']").click();
    })
    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").click();
        await page.locator("//input[@id='new-task']").fill(`Todo[${i}]`);
        await page.locator("//button[@id='add-task']").click();
    }
     // Listen for dialog events
    page.on('dialog', async dialog => dialog.accept());

    for (let k = 0; k < 100; k++) {
        // const todoIndex = k + 1;
        if (k % 2 !== 0) {
            await page.locator(`//span[contains(text(), "Todo[${k+1}]")]//following::div/button[text()="Delete"]`).click();
            await page.waitForTimeout(1000);
        }
    }
})