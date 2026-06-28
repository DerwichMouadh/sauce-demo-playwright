import { test } from "../../fixtures/testFixtures";

test("@regression Product list is displayed correctly", async ({
  inventoryActions,
}) => {
  await inventoryActions.expectProductsVisible();
  await inventoryActions.expectProductsCount(6);
});
