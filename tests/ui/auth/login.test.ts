import { test, expect } from '../../fixtures/testFixtures';

test('User can login with valid credentials', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/inventory/);
});