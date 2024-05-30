import { test, expect } from "@playwright/test";
let date = "2024-05-20";
let username = "Khang Nguyen";
let email = "khang@mailinator.com";
let description = "Đây là lớp Playwright K6";
let gender = {
    male: "//input[@id='male']",
    female: "//input[@id='female']"
}
let hobbies = {
    reading: "//input[@id='reading']",
    traveling: "//input[@id='traveling']",
    cooking: "//input[@id='cooking']"
}
let country = {
    unitedStates: "usa",
    canada: "canada",
    unitedKingdom: "uk",
    australia: "australia"
}
test('Bài học 1: Register Page', async ({ page }) => {
    await test.step("Step 1: Open page Material Playwright", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Step 2: Click on User Registration", async () => {
        await page.locator("//a[@href ='01-xpath-register-page.html']").click();
    })
    await test.step("Step 3: Fill information to all fields ", async () => {
        await page.locator("//input[@id='username']").fill(username);
        await page.locator("//input[@id='email']").fill(email);
        await page.locator(gender.male).click();
        await page.locator(hobbies.reading).click();
        await page.locator("//select[@id='country']").selectOption(country.unitedKingdom);
        await page.fill("//input[@id='dob']", date);
        await page.fill("//textarea[@id='bio']", description);
        await page.locator("//input[@id='newsletter']").click();
    })
    await test.step("Step 4: Click Register button", async () => {
        await page.locator("//button[normalize-space()='Register']").click();
    })
})

