import { test, expect } from '../../fixtures/testFixtures';

test('@regression Hover over Backpack image', async ({
  loggedInPage
}) => {

  const backpackImage = loggedInPage.locator(
    '#item_4_img_link'
  );

  await backpackImage.hover();

  await expect(backpackImage).toBeVisible();
});