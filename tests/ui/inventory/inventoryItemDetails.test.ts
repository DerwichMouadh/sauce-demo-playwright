import { test } from "../../fixtures/testFixtures";

test("@regression User can open product details page", async ({
  inventoryActions,
}) => {
  await inventoryActions.openProductByName("Sauce Labs Backpack"); // Dynamic locator usage (Data-driven UI interaction)

  await inventoryActions.expectProductTitle("Sauce Labs Backpack");
});
