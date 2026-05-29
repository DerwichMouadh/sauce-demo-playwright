import { test } from '../../fixtures/testFixtures';

test.describe('Inventory sorting', () => {

  test('@regression Sort products from Z to A', async ({
    inventoryActions
  }) => {

    await inventoryActions.sortBy('za');

    await inventoryActions.expectFirstProductName(
      'Test.allTheThings() T-Shirt (Red)'
    );
  });

  test('@regression Sort products by price low to high', async ({
    inventoryActions
  }) => {

    await inventoryActions.sortBy('lohi');

    await inventoryActions.expectFirstProductName(
      'Sauce Labs Onesie'
    );
  });

});