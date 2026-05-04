import { test, expect } from '@playwright/test';

test('User can login with valid credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://www.saucedemo.com/');

  // Fill username
  await page.fill('#user-name', 'standard_user');

  // Fill password
  await page.fill('#password', 'secret_sauce');

  // Click login
  await page.locator('#login-button').click();

  // Assert user is redirected to inventory page
  await expect(page).toHaveURL(/inventory/);
});