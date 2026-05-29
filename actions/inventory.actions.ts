import { expect, Page } from '@playwright/test';

export class InventoryActions {

  constructor(private page: Page) {}

  // ========================
  // Locators
  // ========================

  private inventoryItems = '.inventory_item';

  // ========================
  // Assertions
  // ========================

  async expectInventoryPageLoaded() {
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/inventory.html'
    );
  }

  async expectProductsVisible() {
    await expect(
      this.page.locator(this.inventoryItems).first()
    ).toBeVisible();
  }

  async expectProductsCount(count: number) {
    await expect(
      this.page.locator(this.inventoryItems)
    ).toHaveCount(count);
  }

  // ========================
  // Product Details
  // ========================

  async openBackpackDetails() {
    await this.page.click('#item_4_title_link');
  }

  async expectProductTitle(title: string) {
    await expect(
      this.page.locator('.inventory_details_name')
    ).toHaveText(title);
  }

  async expectProductDescriptionVisible() {
    await expect(
      this.page.locator('.inventory_details_desc')
    ).toBeVisible();
  }

  async expectProductPriceVisible() {
    await expect(
      this.page.locator('.inventory_details_price')
    ).toBeVisible();
  }

  // ========================
  // Images
  // ========================

  async expectInventoryImagesVisible() {
    const images = this.page.locator('.inventory_item_img img');

    const count = await images.count();

    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  }

  // ========================
  // Sorting
  // ========================

  async sortBy(option: string) {
    await this.page.selectOption(
      '[data-test="product-sort-container"]',
      option
    );
  }

  async expectFirstProductName(name: string) {
    await expect(
      this.page.locator('.inventory_item_name').first()
    ).toHaveText(name);
  }
}