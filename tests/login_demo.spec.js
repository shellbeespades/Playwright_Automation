import { test, expect } from '@playwright/test';

test('Demo Login Test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    // await page.pause();
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Shelby');    // alternate: await page.locator('[placeholder="Enter your username"]').fill('Shelby');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('1234');
    
    // specify timeout for particular object/resource on page
    await page.waitForSelector('text=Sign in', { timeout: 5000});

    // ASSERT only a certain number of objects with specified selector/locator are present on page
    await expect(page.locator('text=Sign in')).toHaveCount(1);

    await page.getByRole('link', { name: 'Sign in' }).click();

    await page.locator('text=ACME').isVisible();

});

test('Demo Login Test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();

    // Demo shows how to use record function in the Playwright Inspector to generate code for logging in and then logging out
    // TODO: Manually add assertions to verify successful login and logout

});

test('Demo Login Test 3', async ({ page }) => {
    
    await page.pause();
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByRole('textbox', { name: 'Email:' }).click();

    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');

    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');

    await page.getByRole('textbox', { name: 'Password:' }).click();

    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');

    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');

    await page.getByRole('button', { name: 'Log in' }).click();

    await page.waitForURL('https://admin-demo.nopcommerce.com/admin/');

    await page.locator('text=Logout').click();

    await page.waitForURL('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F');

    await page.close();

});
