const { test, expect } = require('@playwright/test');

test('Verify successful login with valid credentials', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Step 2: Enter username
  await page.fill('#username', 'tomsmith');
  
  // Step 3: Enter password
  await page.fill('#password', 'SuperSecretPassword!');
  
  // Step 4: Click login button
  await page.click('button[type="submit"]');
  
  // Step 5: Verify user is on secure area page
  await expect(page).toHaveURL(/secure/);
  
  // Step 6: Verify success message is displayed
  await expect(page.locator('.flash.success')).toBeVisible();
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
  
  // Step 7: Verify logout button is present
  await expect(page.locator('.button.secondary')).toBeVisible();
});

test('Verify login fails with invalid credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Enter invalid username
  await page.fill('#username', 'invaliduser');
  
  // Enter invalid password
  await page.fill('#password', 'wrongpassword');
  
  // Click login button
  await page.click('button[type="submit"]');
  
  // Verify error message is displayed
  await expect(page.locator('.flash.error')).toBeVisible();
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
  
  // Verify still on login page
  await expect(page).toHaveURL(/login/);
});