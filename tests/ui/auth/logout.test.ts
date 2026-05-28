import { test, expect } from '../../fixtures/testFixtures';

test('@smoke User can logout successfully', async ({ loggedInPage }) => {

  // Open burger menu
  await loggedInPage.locator('#react-burger-menu-btn').click();

  // Wait for logout button to appear
  await loggedInPage.locator('#logout_sidebar_link').waitFor();

  // Click logout
  await loggedInPage.locator('#logout_sidebar_link').click();

  // Assert user redirected to login page
  await expect(loggedInPage).toHaveURL('https://www.saucedemo.com/');
});