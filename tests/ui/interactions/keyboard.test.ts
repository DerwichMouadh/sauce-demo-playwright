import { test, expect } from '@playwright/test';
import { users } from '../../data/users';

test('@regression Login using keyboard Enter', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(
    users.standard.username
  );

  await page.locator('[data-test="password"]').fill(
    users.standard.password
  );

  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/.*inventory.html/);
});