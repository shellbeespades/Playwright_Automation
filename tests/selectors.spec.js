import {test, expect} from '@playwright/test';

test('Selectors Demo', async({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.pause(); // use to debug and find stable locators with Playwright Inspector

    // using ANY object property
    await page.click('id=user-name');
    // or 
    // await page.locator('id=user-name').click();
    await page.locator('id=user-name').fill('Edison'); // or
    await page.locator('[id="user-name"]').fill('Einstein');

    // using CSS selector - Login button
    // #login-button
    await page.locator('#login-button').click();

    //using XPath selector
    await page.locator('xpath=//input[@name="password"]').fill('Faraday');
    await page.locator('//input[@name="password"]').fill('Ramanujan'); // or



    // using Text
    await page.locator('text=LOGIN').click();
    // or
    await page.locator('input:has-text("LOGIN")').click(); // input is specific object type



});