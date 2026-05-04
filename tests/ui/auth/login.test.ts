import { test, expect } from '@playwright/test';
import { login } from '../../../helpers/authHelper';
import { users } from '../../data/users';

test('User can login with valid credentials', async ({ page }) => {
  await login(page, users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/inventory/);
});