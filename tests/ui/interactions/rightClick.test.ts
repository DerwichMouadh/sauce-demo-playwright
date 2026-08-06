import { test, expect } from '../../fixtures/testFixtures';

test('@regression Right click product image', async ({
  loggedInPage
}) => {

  const backpackImage = loggedInPage.locator('#item_4_img_link');

  await backpackImage.click({
    button: 'right'
  });

  await expect(backpackImage).toBeVisible();
});