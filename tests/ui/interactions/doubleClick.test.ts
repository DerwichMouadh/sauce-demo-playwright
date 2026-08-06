import { test, expect } from '../../fixtures/testFixtures';

test('@regression Double click product title', async ({
  loggedInPage
}) => {

  const backpackTitle = loggedInPage.locator('#item_4_title_link');

  await backpackTitle.dblclick();

  await expect(backpackTitle).toBeVisible();
});