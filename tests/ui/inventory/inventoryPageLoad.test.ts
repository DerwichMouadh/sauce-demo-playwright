import { test } from "../../fixtures/testFixtures";

test("@smoke Inventory page loads successfully", async ({
  inventoryActions,
}) => {
  await inventoryActions.expectInventoryPageLoaded();
});
