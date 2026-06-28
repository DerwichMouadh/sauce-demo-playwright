import { test } from "../../fixtures/testFixtures";

test("@regression Product details are displayed correctly", async ({
  inventoryActions,
}) => {
  await inventoryActions.openProductByName("Sauce Labs Backpack"); // Dynamic locator usage (Data-driven UI interaction)

  await inventoryActions.expectProductDescriptionVisible();
  await inventoryActions.expectProductPriceVisible();
});
