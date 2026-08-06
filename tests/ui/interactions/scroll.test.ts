import { test, expect } from '../../fixtures/testFixtures';

test('@regression Scroll to footer area', async ({
  loggedInPage
}) => {

  const footer = loggedInPage.locator('.footer');

  await footer.scrollIntoViewIfNeeded();

  await expect(footer).toBeVisible();
});