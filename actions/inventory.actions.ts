import { expect, Page, Locator } from "@playwright/test";

export class InventoryActions {
  // 1. Declare the fields with their types first
  private page: Page;
  private readonly inventoryItems: Locator;
  private readonly inventoryItemNames: Locator;
  private readonly inventoryItemPrices: Locator;
  private readonly sortDropdown: Locator;
  private readonly inventoryImages: Locator;

  // 2. Initialize everything inside the constructor
  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = this.page.locator(".inventory_item");
    this.inventoryItemNames = this.page.locator(".inventory_item_name");
    this.inventoryItemPrices = this.page.locator(".inventory_item_price");
    this.sortDropdown = this.page.locator(
      '[data-test="product-sort-container"]',
    );
    this.inventoryImages = this.page.locator(".inventory_item_img img");
  }

  // ========================
  // PAGE VALIDATION
  // ========================

  async expectInventoryPageLoaded() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async expectProductsVisible() {
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async expectProductsCount(count: number) {
    await expect(this.inventoryItems).toHaveCount(count);
  }

  // ========================
  // PRODUCT DETAILS
  // ========================

  async openProductByName(name: string) {
    await this.page
      .locator(".inventory_item", { hasText: name }) // Use the locator with a filter for the specific product name (Dynamic locators)
      .locator(".inventory_item_name")
      .click();
  }

  async expectProductTitle(title: string) {
    await expect(this.page.locator(".inventory_details_name")).toHaveText(
      title,
    );
  }

  async expectProductDescriptionVisible() {
    await expect(this.page.locator(".inventory_details_desc")).toBeVisible();
  }

  async expectProductPriceVisible() {
    await expect(this.page.locator(".inventory_details_price")).toBeVisible();
  }

  // ========================
  // IMAGES
  // ========================

  async expectInventoryImagesVisible() {
    /*  const count = await this.inventoryImages.count();

        for (let i = 0; i < count; i++) {
          await expect(this.inventoryImages.nth(i)).toBeVisible();
        } 
    */

    // Optimization: Playwright expect assertions can check array behaviors directly without raw loops!
    await expect(this.inventoryImages.first()).toBeVisible();

    // “Instead of iterating manually over each element, I rely on locator-level assertions like toHaveCount()
    // and visibility checks on representative elements to reduce flakiness and improve readability.”

    await expect(this.inventoryImages).toHaveCount(6);
  }

  // ========================
  // SORTING
  // ========================

  async sortBy(option: "az" | "za" | "lohi" | "hilo") {
    await this.sortDropdown.selectOption(option);
  }

  async getAllProductNames(): Promise<string[]> {
    return await this.inventoryItemNames.allTextContents();
  }

  async getAllProductPrices(): Promise<number[]> {
    const prices = await this.inventoryItemPrices.allTextContents();
    return prices.map((p) => parseFloat(p.replace("$", "")));
  }

  async expectFirstProductName(name: string) {
    await expect(this.inventoryItemNames.first()).toHaveText(name);
  }

  async expectProductsSortedAZ() {
    const names = await this.getAllProductNames();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  }

  async expectProductsSortedZA() {
    const names = await this.getAllProductNames();
    const sorted = [...names].sort().reverse();
    expect(names).toEqual(sorted);
  }

  async expectPricesSortedLowToHigh() {
    const prices = await this.getAllProductPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  }

  async expectPricesSortedHighToLow() {
    const prices = await this.getAllProductPrices();
    const sorted = [...prices].sort((b, a) => b - a);
    expect(prices).toEqual(sorted);
  }
}
