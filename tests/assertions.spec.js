import { page, test, expect } from '@playwright/test';

test('Assertions Demo', async ({ page }) => {
    
    await page.goto('https://kitchen.applitools.com');
    await page.pause();
    await page.locator('text=The Kitchen')

    // ASSERTIONS
    // check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);

    // example using $ to check if element is present before clicking
    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }

    // check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    await expect(page.locator('text=The Kitchen')).toBeHidden();

    // check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    await expect(page.locator('text=The Kitchen')).toBeDisabled();
   

});