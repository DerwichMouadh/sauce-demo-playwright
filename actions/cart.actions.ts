import { Page, expect } from '@playwright/test';

export class CartActions {
  constructor(private page: Page) {}

  // ========================
  // ADD ITEMS
  // ========================
  async addBackpackToCart() {
    await this.ensureOnInventoryPage();

    const button = this.page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    await expect(button).toBeVisible();
    await button.click();
  }

  async addBikeLightToCart() {
    await this.ensureOnInventoryPage();

    const button = this.page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );

    await expect(button).toBeVisible();
    await button.click();
  }

  async addAllStandardItems() {
    await this.addBackpackToCart();
    await this.addBikeLightToCart();
  }

  // ========================
  // REMOVE ITEMS
  // ========================
  async removeBackpackFromCart() {
    await this.page.click('[data-test="remove-sauce-labs-backpack"]');
  }

  async removeBikeLightFromCart() {
    await this.page.click('[data-test="remove-sauce-labs-bike-light"]');
  }

  // ========================
  // NAVIGATION
  // ========================
  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  // ========================
  // VALIDATIONS
  // ========================
  async expectCartBadgeCount(count: number) {
    if (count === 0) {
      await expect(this.page.locator('.shopping_cart_badge')).toHaveCount(0);
    } else {
      await expect(this.page.locator('.shopping_cart_badge')).toHaveText(String(count));
    }
  }

  async expectItemInCart(itemName: string) {
    await expect(
      this.page.locator('.cart_item', { hasText: itemName })
    ).toBeVisible();
  }

  async expectItemNotInCart(itemName: string) {
    await expect(
      this.page.locator('.cart_item', { hasText: itemName })
    ).toHaveCount(0);
  }

  async ensureOnInventoryPage() {
    await this.page.waitForURL('**/inventory.html');
    await this.page.locator('.inventory_list').waitFor();
  }

}