import { test, expect } from '@playwright/test';
import { login } from '../../../helpers/authHelper';

test('User can login with valid credentials', async ({ page }) => {
  await login(page, 'standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});