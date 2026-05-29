import { test } from '../../fixtures/testFixtures';

test('@regression Product details are displayed correctly', async ({
  inventoryActions
}) => {

  await inventoryActions.openBackpackDetails();

  await inventoryActions.expectProductDescriptionVisible();

  await inventoryActions.expectProductPriceVisible();
});