import { test } from "../../fixtures/testFixtures";

test("@regression Inventory images load correctly", async ({
  inventoryActions,
}) => {
  await inventoryActions.expectInventoryImagesVisible();
});
