import { test } from '../../fixtures/testFixtures';

test('@regression User can open product details page', async ({
  inventoryActions
}) => {

  await inventoryActions.openBackpackDetails();

  await inventoryActions.expectProductTitle(
    'Sauce Labs Backpack'
  );
});