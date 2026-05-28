import { Page, expect } from '@playwright/test';

export class CartActions {
  constructor(private page: Page) {}

  // ========================
  // ADD ITEMS
  // ========================
  async addBackpackToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async addBikeLightToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
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
}