import { test, expect } from '@playwright/test';
import { login } from '../../../helpers/authHelper';

test('User cannot login with invalid credentials', async ({ page }) => {
  await login(page, 'invalid_user', 'wrong_password');

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Username and password do not match');
});