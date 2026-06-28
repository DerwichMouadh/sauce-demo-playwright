import { test } from "../../fixtures/testFixtures";

test.describe("Inventory sorting validation", () => {
  test("@regression Sort A to Z", async ({ inventoryActions }) => {
    await inventoryActions.sortBy("az");
    await inventoryActions.expectProductsSortedAZ();
  });

  test("@regression Sort Z to A", async ({ inventoryActions }) => {
    await inventoryActions.sortBy("za");
    await inventoryActions.expectProductsSortedZA();
  });

  test("@regression Sort Price Low to High", async ({ inventoryActions }) => {
    await inventoryActions.sortBy("lohi");
    await inventoryActions.expectPricesSortedLowToHigh();
  });

  test("@regression Sort Price High to Low", async ({ inventoryActions }) => {
    await inventoryActions.sortBy("hilo");
    await inventoryActions.expectPricesSortedHighToLow();
  });
});
